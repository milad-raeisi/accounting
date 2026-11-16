import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router'
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Cpu, GraduationCap, ListChecks, PlayCircle, Trophy } from 'lucide-react'

import { Progress } from '@/components/animate-ui/components/radix/progress'
import { Tabs, TabsList, TabsTrigger } from '@/components/animate-ui/components/radix/tabs'
import { LessonIcon } from '@/components/ui/LessonIcon'
import { courseById, isCourseId } from '@/content/courses'
import { lessonPath } from '@/content/lessons'
import type { Level } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'
import { useCourseStats } from '@/lib/courseStats'
import { useProgress } from '@/lib/progress'
import { cn } from '@/lib/utils'

type Filter = 'all' | Level

export default function LessonsPage() {
  const { course: courseParam } = useParams()
  const course = courseById.get(isCourseId(courseParam) ? courseParam : 'accounting')!
  const stats = useCourseStats(course.id)
  const { lessons } = stats
  const { t, tr, num, pct: fmtPct, isFa } = useI18n()
  const { quiz } = useProgress()
  const [filter, setFilter] = useState<Filter>('all')
  const Arrow = isFa ? ArrowLeft : ArrowRight

  const list = useMemo(() => (filter === 'all' ? lessons : lessons.filter((l) => l.level === filter)), [filter, lessons])
  const minutes = lessons.reduce((s, l) => s + l.minutes, 0)
  const questions = lessons.reduce((s, l) => s + l.quiz.length, 0)
  const levels = (['beginner', 'intermediate', 'advanced'] as const).filter((lv) => lessons.some((l) => l.level === lv))

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link to="/courses" className="hover:text-foreground">
              {t('nav.courses')}
            </Link>
            <span>/</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1 text-xs font-medium">
              <Cpu className="size-3.5" /> {tr(course.erp)}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl">{tr(course.title)}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-body">{tr(course.summary)}</p>
          {lessons.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5">
                <ListChecks className="size-3.5" /> {num(lessons.length)} {t('course.lessons')}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5">
                <Clock className="size-3.5" /> {num(Math.max(1, Math.round(minutes / 60)))} {t('course.hours')}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5">
                <GraduationCap className="size-3.5" /> {num(questions)} {t('quiz.question')}
              </span>
            </div>
          )}
        </div>

        {lessons.length > 0 && (
          <aside className="rounded-lg bg-card p-6">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold">{t('progress.course')}</span>
              <span className="tabular font-semibold text-primary">{fmtPct(stats.pct, 0)}</span>
            </div>
            <Progress value={stats.pct} className="mt-3 h-2.5" />
            <dl className="mt-4 grid grid-cols-3 gap-2">
              {(
                [
                  [t('progress.lessons'), `${num(stats.completed)}/${num(stats.total)}`],
                  [t('progress.quizzes'), `${num(stats.passed)}/${num(stats.total)}`],
                  [t('progress.avg'), stats.avg === null ? '–' : fmtPct(stats.avg, 0)],
                ] as const
              ).map(([label, value]) => (
                <div key={label} className="rounded-[0.9rem] bg-muted/50 px-3 py-2.5">
                  <dt className="text-[11px] leading-4 text-muted-foreground">{label}</dt>
                  <dd className="mt-1 tabular text-base font-semibold text-foreground">{value}</dd>
                </div>
              ))}
            </dl>

            {stats.next ? (
              <Link
                to={lessonPath(stats.next)}
                className="group mt-5 flex items-center gap-3 rounded-[1.25rem] bg-primary px-4 py-3 text-primary-foreground transition hover:opacity-90"
              >
                <PlayCircle className="size-5 shrink-0" />
                <span className="min-w-0 flex-1">
                  <span className="block text-xs opacity-80">{stats.completed ? t('progress.continue') : t('progress.start')}</span>
                  <span className="block truncate text-sm font-semibold">
                    {num(stats.next.number)}. {tr(stats.next.title)}
                  </span>
                </span>
                <Arrow className="size-4 shrink-0" />
              </Link>
            ) : (
              <p className="mt-5 flex items-center gap-2 rounded-[1.25rem] bg-revenue/10 px-4 py-3 text-sm font-medium text-revenue">
                <CheckCircle2 className="size-5 shrink-0" /> {t('progress.complete')}
              </p>
            )}
            <Link
              to={`/practice?course=${course.id}`}
              className="mt-2 flex items-center justify-between gap-3 rounded-[1.25rem] bg-muted/60 px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              <span className="inline-flex items-center gap-2">
                <GraduationCap className="size-4 text-primary" /> {t('progress.exam')}
              </span>
              {stats.exam ? (
                <span className="inline-flex items-center gap-1 tabular text-xs font-medium text-muted-foreground">
                  <Trophy className="size-3.5 text-gold" /> {num(stats.exam.score)}/{num(stats.exam.total)}
                </span>
              ) : (
                <Arrow className="size-4 text-muted-foreground" />
              )}
            </Link>
            <p className="mt-4 text-[11px] leading-5 text-muted-foreground">
              {t('progress.passNote')} {t('progress.saved')}
            </p>
          </aside>
        )}
      </div>

      {levels.length > 1 && (
        <Tabs value={filter} onValueChange={(v) => setFilter(v as Filter)} className="mt-10">
          <TabsList className="h-10">
            {(['all', ...levels] as const).map((f) => (
              <TabsTrigger key={f} value={f} className="px-4">
                {f === 'all' ? t('lessons.filter.all') : t(`level.${f}`)}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      )}

      {!lessons.length && <p className="mt-10 rounded-lg bg-card p-8 text-center text-muted-foreground">{t('course.soon')}</p>}

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((l) => {
          const status = stats.statusOf(l.slug)
          const best = quiz[l.slug]
          const upNext = stats.next?.slug === l.slug
          return (
            <Link
              key={l.slug}
              to={lessonPath(l)}
              className={cn('group flex flex-col rounded-lg p-5 transition-colors', upNext ? 'bg-primary/[0.07] hover:bg-primary/10' : 'bg-card hover:bg-muted/40')}
            >
              <div className="flex items-start justify-between gap-3">
                <LessonIcon name={l.icon} tone={l.tone} />
                <div className="flex flex-col items-end gap-1">
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">{t(`level.${l.level}`)}</span>
                  {status === 'done' && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-revenue">
                      <CheckCircle2 className="size-3.5" /> {t('lesson.done')}
                    </span>
                  )}
                  {status === 'started' && <span className="text-[11px] font-semibold text-expense">{t('progress.inProgress')}</span>}
                  {upNext && status === 'new' && <span className="text-[11px] font-semibold text-primary">{t('progress.upNext')}</span>}
                </div>
              </div>
              <div className="mt-5 text-xs font-semibold text-muted-foreground">
                {t('lesson.number')} {num(l.number)} {t('progress.of')} {num(stats.total)}
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
                  <span className="inline-flex items-center gap-1 font-semibold text-primary">
                    {status === 'done' ? t('lessons.review') : t('lessons.start')} <Arrow className="size-3.5" />
                  </span>
                )}
              </div>
            </Link>
          )
        })}

        {filter === 'all' && lessons.length > 0 && (
          <Link to={`/practice?course=${course.id}`} className="group flex flex-col rounded-lg bg-card p-5 transition-colors hover:bg-muted/40">
            <span className="icon-badge grid size-11 place-items-center rounded-full">
              <GraduationCap className="size-5" strokeWidth={1.6} />
            </span>
            <div className="mt-5 text-xs font-semibold text-muted-foreground">{tr(course.title)}</div>
            <h2 className="mt-1 text-xl font-bold leading-snug">{t('progress.exam')}</h2>
            <p className="mt-2 flex-1 text-sm leading-7 text-muted-foreground">{t('progress.examLead')}</p>
            <div className="mt-5 flex items-center justify-between border-t pt-4 text-xs text-muted-foreground">
              <span>
                {num(questions)} {t('quiz.question')}
              </span>
              {stats.exam ? (
                <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
                  <Trophy className="size-3.5 text-gold" /> {num(stats.exam.score)}/{num(stats.exam.total)}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 font-semibold text-primary">
                  {t('progress.examTake')} <Arrow className="size-3.5" />
                </span>
              )}
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}
