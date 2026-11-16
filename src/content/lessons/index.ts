import manifest from 'virtual:lesson-manifest'

import { courseById, type CourseId } from '../courses'
import type { Lesson, LessonMetaRaw } from '../types'

/** Lightweight lesson summary used by lists, progress and navigation. */
export type LessonMeta = LessonMetaRaw & { course: CourseId }
/** A fully loaded lesson (sections and quiz). */
export type CourseLesson = Lesson & { course: CourseId }

/**
 * Accounting lessons live in this folder (`NN-slug.ts`); every other course lives in
 * `../courses/<course-id>/NN-slug.ts`. Each file is its own chunk, loaded when the lesson is opened.
 * Their summaries come from the `virtual:lesson-manifest` plugin (see vite.config.ts).
 */
const loaders: Record<string, () => Promise<{ lesson: Lesson }>> = {
  ...import.meta.glob<{ lesson: Lesson }>('./[0-9][0-9]-*.ts'),
  ...import.meta.glob<{ lesson: Lesson }>('../courses/*/[0-9][0-9]-*.ts'),
}

export const allLessons: LessonMeta[] = (manifest as LessonMeta[])
  .filter((l) => courseById.has(l.course))
  .sort((a, b) => courseById.get(a.course)!.order - courseById.get(b.course)!.order || a.number - b.number)

export function lessonsOf(course: CourseId): LessonMeta[] {
  return allLessons.filter((l) => l.course === course)
}

/** The accounting course (kept for the Ledger Lab and older links). */
export const lessons: LessonMeta[] = lessonsOf('accounting')

export const lessonBySlug = new Map(allLessons.map((l) => [l.slug, l]))

export function lessonPath(l: Pick<LessonMeta, 'course' | 'slug'>) {
  return `/courses/${l.course}/${l.slug}`
}

/** Previous / next lesson within the same course. */
export function neighbours(slug: string) {
  const current = lessonBySlug.get(slug)
  if (!current) return { prev: undefined, next: undefined }
  const list = lessonsOf(current.course)
  const i = list.findIndex((l) => l.slug === slug)
  return { prev: i > 0 ? list[i - 1] : undefined, next: i < list.length - 1 ? list[i + 1] : undefined }
}

export const totalQuestions = allLessons.reduce((s, l) => s + l.quizCount, 0)

const cache = new Map<string, Promise<CourseLesson | undefined>>()

/** Loads one lesson's full content. The promise is cached, so it is safe to pass to React's `use()`. */
export function loadLesson(slug: string): Promise<CourseLesson | undefined> {
  let p = cache.get(slug)
  if (!p) {
    const meta = lessonBySlug.get(slug)
    const load = meta ? loaders[meta.key] : undefined
    p =
      meta && load
        ? load()
            .then((m) => ({ ...m.lesson, course: meta.course }))
            .catch((e: unknown) => {
              cache.delete(slug)
              throw e
            })
        : Promise.resolve(undefined)
    cache.set(slug, p)
  }
  return p
}

/** Loads every lesson of a course (for course exams). */
export function loadCourseLessons(course: CourseId): Promise<CourseLesson[]> {
  return Promise.all(lessonsOf(course).map((l) => loadLesson(l.slug))).then((list) => list.filter((l): l is CourseLesson => Boolean(l)))
}
