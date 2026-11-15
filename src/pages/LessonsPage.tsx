import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import { ArrowRight, CheckCircle2, Clock, Trophy } from 'lucide-react'

import { Progress } from '@/components/animate-ui/components/radix/progress'
import { Tabs, TabsList, TabsTrigger } from '@/components/animate-ui/components/radix/tabs'
import { LessonIcon } from '@/components/ui/LessonIcon'
import { lessons } from '@/content/lessons'
import type { Level } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'
import { useProgress } from '@/lib/progress'

type Filter = 'all' | Level

export default function LessonsPage() {
  const { t, tr, num, pct: fmtPct } = useI18n()
  const { isDone, quiz, done } = useProgress()
  const [filter, setFilter] = useState<Filter>('all')
  const root = useRef<HTMLDivElement>(null)

  const list = useMemo(() => (filter === 'all' ? lessons : lessons.filter((l) => l.level === filter)), [filter])
  const completed = lessons.filter((l) => done.includes(l.slug)).length
  const pct = lessons.length ? Math.round((completed / lessons.length) * 100) : 0

  return (
    <div ref={root} className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_340px] lg:items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">{t('lessons.title')}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">{t('lessons.lead')}</p>
        </div>
        <div className="rounded-lg border bg-card p-5">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold">{t('lessons.progress')}</span>
            <span className="tabular text-muted-foreground">{fmtPct(pct, 0)}</span>
          </div>
          <Progress value={pct} className="mt-3 h-2.5" />
          <div className="mt-3 text-xs text-muted-foreground">
            {num(completed)} {t('lessons.completedOf')} {num(lessons.length)}
          </div>
        </div>
      </div>

      <Tabs value={filter} onValueChange={(v) => setFilter(v as Filter)} className="mt-10">
        <TabsList className="h-10">
          {(['all', 'beginner', 'intermediate', 'advanced'] as const).map((f) => (
            <TabsTrigger key={f} value={f} className="px-4">
              {f === 'all' ? t('lessons.filter.all') : t(`level.${f}`)}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((l) => {
          const finished = isDone(l.slug)
          const best = quiz[l.slug]
          return (
            <Link
              key={l.slug}
              to={`/lessons/${l.slug}`}
             
              className="group flex flex-col rounded-lg border bg-card p-5 transition-colors hover:bg-muted/40"
            >
              <div className="flex items-start justify-between gap-3">
                <LessonIcon name={l.icon} tone={l.tone} />
                <div className="flex flex-col items-end gap-1">
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">{t(`level.${l.level}`)}</span>
                  {finished && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-revenue">
                      <CheckCircle2 className="size-3.5" /> {t('lesson.done')}
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-5 text-xs font-semibold text-muted-foreground">
                {t('lesson.number')} {num(l.number)}
              </div>
              <h2 className="mt-1 text-xl font-bold leading-snug">{tr(l.title)}</h2>
              <p className="mt-2 flex-1 text-sm leading-7 text-muted-foreground">{tr(l.summary)}</p>
              <div className="mt-5 flex items-center justify-between border-t pt-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-3.5" /> {num(l.minutes)} {t('lesson.minutes')}
                </span>
                {best ? (
                  <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
                    <Trophy className="size-3.5 text-gold" /> {num(best.score)}/{num(best.total)}
                  </span>
                ) : (
                  <span className="font-semibold text-primary transition group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
                    {finished ? t('lessons.review') : t('lessons.start')} <ArrowRight className="inline size-3.5 rtl:rotate-180" />
                  </span>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
