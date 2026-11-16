import { Link } from 'react-router'
import { ArrowLeft, ArrowRight, Cpu } from 'lucide-react'

import { LessonIcon } from '@/components/ui/LessonIcon'
import type { Course } from '@/content/courses'
import { lessonsOf } from '@/content/lessons'
import { useI18n } from '@/i18n/I18nProvider'
import { useProgress } from '@/lib/progress'

export function CourseCard({ course }: { course: Course }) {
  const { t, tr, num, pct: fmtPct, isFa } = useI18n()
  const { done } = useProgress()
  const list = lessonsOf(course.id)
  const finished = list.filter((l) => done.includes(l.slug)).length
  const pct = list.length ? Math.round((finished / list.length) * 100) : 0
  const Arrow = isFa ? ArrowLeft : ArrowRight

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
            {num(list.length)} {t('course.lessons')}
          </span>
          {finished > 0 && <span className="tabular">{fmtPct(pct, 0)}</span>}
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
          <div className="h-full rounded-full bg-primary transition-[width] duration-700" style={{ width: `${pct}%` }} />
        </div>
      </div>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        {t('course.open')}
        <Arrow className="size-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
      </span>
    </Link>
  )
}
