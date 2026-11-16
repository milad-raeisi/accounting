import { Link } from 'react-router'
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu, GraduationCap } from 'lucide-react'

import { LessonIcon } from '@/components/ui/LessonIcon'
import type { Course } from '@/content/courses'
import { useI18n } from '@/i18n/I18nProvider'
import { useCourseStats } from '@/lib/courseStats'

export function CourseCard({ course }: { course: Course }) {
  const { t, tr, num, pct: fmtPct, isFa } = useI18n()
  const stats = useCourseStats(course.id)
  const Arrow = isFa ? ArrowLeft : ArrowRight
  const started = stats.completed > 0 || stats.attempted > 0
  const finished = stats.total > 0 && stats.completed === stats.total

  return (
    <Link to={`/courses/${course.id}`} className="group flex flex-col rounded-lg bg-card p-6 transition-colors hover:bg-card/80 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <LessonIcon name={course.icon} tone={course.tone} className="size-12 [&_svg]:size-6" />
        <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-[11px] font-medium text-muted-foreground">
          <Cpu className="size-3.5" /> {tr(course.erp)}
        </span>
      </div>
      <h3 className="mt-6 text-xl">{tr(course.title)}</h3>
      <p className="mt-2 flex-1 text-sm leading-7 text-body">{tr(course.summary)}</p>
      <div className="mt-6">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>
            {started ? (
              <>
                {num(stats.completed)} {t('progress.of')} {num(stats.total)} {t('course.lessons')}
              </>
            ) : (
              <>
                {num(stats.total)} {t('course.lessons')}
              </>
            )}
          </span>
          {started && <span className="tabular font-semibold text-foreground">{fmtPct(stats.pct, 0)}</span>}
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
          <div className="h-full rounded-full bg-primary transition-[width] duration-700" style={{ width: `${stats.pct}%` }} />
        </div>
        {stats.exam && (
          <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
            <GraduationCap className="size-3.5 text-primary" /> {t('progress.exam')}: {num(stats.exam.score)}/{num(stats.exam.total)}
          </div>
        )}
      </div>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        {finished ? <CheckCircle2 className="size-4 text-revenue" /> : null}
        {finished ? t('lessons.review') : started ? t('progress.continue') : t('course.open')}
        <Arrow className="size-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
      </span>
    </Link>
  )
}
