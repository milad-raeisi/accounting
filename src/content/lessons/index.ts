import { courseById, type CourseId } from '../courses'
import type { Lesson } from '../types'

export type CourseLesson = Lesson & { course: CourseId }

/**
 * Accounting lessons live in this folder (`NN-slug.ts`); every other course lives in
 * `../courses/<course-id>/NN-slug.ts`. All are picked up automatically and ordered by
 * course, then by `lesson.number`.
 */
const accountingModules = import.meta.glob<{ lesson: Lesson }>('./[0-9][0-9]-*.ts', { eager: true })
const courseModules = import.meta.glob<{ lesson: Lesson }>('../courses/*/[0-9][0-9]-*.ts', { eager: true })

const collected: CourseLesson[] = [
  ...Object.values(accountingModules).map((m) => ({ ...m.lesson, course: 'accounting' as CourseId })),
  ...Object.entries(courseModules).map(([path, m]) => ({ ...m.lesson, course: path.split('/')[2] as CourseId })),
].filter((l) => l && l.slug && courseById.has(l.course))

export const allLessons: CourseLesson[] = collected.sort(
  (a, b) => courseById.get(a.course)!.order - courseById.get(b.course)!.order || a.number - b.number,
)

export function lessonsOf(course: CourseId): CourseLesson[] {
  return allLessons.filter((l) => l.course === course)
}

/** The accounting course (kept for the Ledger Lab and older links). */
export const lessons: CourseLesson[] = lessonsOf('accounting')

export const lessonBySlug = new Map(allLessons.map((l) => [l.slug, l]))

export function lessonPath(l: Pick<CourseLesson, 'course' | 'slug'>) {
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

export const totalQuestions = allLessons.reduce((s, l) => s + l.quiz.length, 0)
