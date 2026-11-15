import type { Lesson } from '../types'

/**
 * Every file named `NN-slug.ts` in this folder exports `lesson`.
 * Picked up automatically and ordered by `lesson.number`.
 */
const modules = import.meta.glob<{ lesson: Lesson }>('./[0-9][0-9]-*.ts', { eager: true })

export const lessons: Lesson[] = Object.values(modules)
  .map((m) => m.lesson)
  .filter(Boolean)
  .sort((a, b) => a.number - b.number)

export const lessonBySlug = new Map(lessons.map((l) => [l.slug, l]))

export function neighbours(slug: string) {
  const i = lessons.findIndex((l) => l.slug === slug)
  return { prev: i > 0 ? lessons[i - 1] : undefined, next: i >= 0 && i < lessons.length - 1 ? lessons[i + 1] : undefined }
}

export const totalQuestions = lessons.reduce((s, l) => s + l.quiz.length, 0)
