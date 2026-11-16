import { useMemo } from 'react'

import type { CourseId } from '@/content/courses'
import { lessonsOf, type LessonMeta } from '@/content/lessons'
import { useProgress } from '@/lib/progress'

/** Share of correct answers that passes a lesson quiz (and marks the lesson completed). */
export const PASS_RATIO = 0.6

/** Course final-exam results live in the quiz map under this key. */
export const examKey = (course: CourseId) => `exam:${course}`

export type LessonStatus = 'done' | 'started' | 'new'

export type CourseStats = {
  lessons: LessonMeta[]
  total: number
  completed: number
  /** 0..100, completed lessons over all lessons */
  pct: number
  attempted: number
  passed: number
  /** 0..100 average of best quiz scores, null when no quiz was taken */
  avg: number | null
  /** first lesson (in order) not completed yet */
  next: LessonMeta | null
  exam: { score: number; total: number } | null
  statusOf: (slug: string) => LessonStatus
}

export function useCourseStats(course: CourseId): CourseStats {
  const { done, quiz } = useProgress()
  return useMemo(() => {
    const lessons = lessonsOf(course)
    const isDone = (slug: string) => done.includes(slug)
    const taken = lessons.filter((l) => quiz[l.slug])
    const ratio = (slug: string) => quiz[slug].score / quiz[slug].total
    const completed = lessons.filter((l) => isDone(l.slug)).length
    return {
      lessons,
      total: lessons.length,
      completed,
      pct: lessons.length ? Math.round((completed / lessons.length) * 100) : 0,
      attempted: taken.length,
      passed: taken.filter((l) => ratio(l.slug) >= PASS_RATIO).length,
      avg: taken.length ? (taken.reduce((s, l) => s + ratio(l.slug), 0) / taken.length) * 100 : null,
      next: lessons.find((l) => !isDone(l.slug)) ?? null,
      exam: quiz[examKey(course)] ?? null,
      statusOf: (slug) => (isDone(slug) ? 'done' : quiz[slug] ? 'started' : 'new'),
    }
  }, [course, done, quiz])
}
