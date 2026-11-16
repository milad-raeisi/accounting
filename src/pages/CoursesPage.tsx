import { CourseCard } from '@/components/ui/CourseCard'
import { courses } from '@/content/courses'
import { allLessons } from '@/content/lessons'
import { useI18n } from '@/i18n/I18nProvider'
import { useProgress } from '@/lib/progress'

export default function CoursesPage() {
  const { t, num, pct: fmtPct } = useI18n()
  const { done } = useProgress()
  const total = allLessons.length
  const completed = allLessons.filter((l) => done.includes(l.slug)).length
  const pct = total ? Math.round((completed / total) * 100) : 0

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:py-20">
      <div className="grid gap-6 md:grid-cols-[1fr_280px] md:items-end">
        <div>
          <h1 className="text-4xl sm:text-5xl">{t('courses.title')}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-body">{t('courses.lead')}</p>
        </div>
        {completed > 0 && (
          <div className="rounded-lg bg-card p-5">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold">{t('progress.overall')}</span>
              <span className="tabular font-semibold text-primary">{fmtPct(pct, 0)}</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary transition-[width] duration-700" style={{ width: `${pct}%` }} />
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              {num(completed)} {t('progress.of')} {num(total)} {t('course.lessons')}
            </div>
          </div>
        )}
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </div>
  )
}
