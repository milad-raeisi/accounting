import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router'
import { motion } from 'motion/react'
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Clock, GraduationCap, Target } from 'lucide-react'

import { BlockRenderer } from '@/components/lesson/BlockRenderer'
import { Quiz } from '@/components/lesson/Quiz'
import { CurrencyProvider } from '@/components/lesson/tables'
import { LessonIcon } from '@/components/ui/LessonIcon'
import { Rich } from '@/components/ui/Rich'
import { courseById } from '@/content/courses'
import { lessonBySlug, lessonPath, neighbours } from '@/content/lessons'
import { useI18n } from '@/i18n/I18nProvider'
import { PASS_RATIO, useCourseStats } from '@/lib/courseStats'
import { useProgress } from '@/lib/progress'
import { cn } from '@/lib/utils'

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState<string | undefined>(ids[0])
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -65% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids])
  return active
}

export default function LessonPage() {
  const { slug = '' } = useParams()
  const { t, tr, num, lang, isFa } = useI18n()
  const lesson = lessonBySlug.get(slug)
  const { prev, next } = neighbours(slug)
  const { isDone, markDone, saveQuiz, quiz } = useProgress()
  const stats = useCourseStats(lesson?.course ?? 'accounting')
  const { pct: fmtPct } = useI18n()
  const root = useRef<HTMLDivElement>(null)

  const ids = useMemo(() => (lesson ? [...lesson.sections.map((s) => s.id), 'quiz'] : []), [lesson])
  const active = useScrollSpy(ids)

  if (!lesson) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <p className="text-lg text-muted-foreground">{t('lesson.notFound')}</p>
        <Link to="/courses" className="mt-6 inline-block font-semibold text-primary">
          {t('nav.courses')}
        </Link>
      </div>
    )
  }

  const done = isDone(lesson.slug)
  const best = quiz[lesson.slug]
  const PrevIcon = isFa ? ArrowRight : ArrowLeft
  const NextIcon = isFa ? ArrowLeft : ArrowRight

  return (
    <div ref={root}>
      {/* header */}
      <header className="border-b">
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link to="/courses" className="hover:text-foreground">
              {t('nav.courses')}
            </Link>
            <span>/</span>
            <Link to={`/courses/${lesson.course}`} className="hover:text-foreground">
              {tr(courseById.get(lesson.course)?.title)}
            </Link>
            <span>/</span>
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
              {t('lesson.number')} {num(lesson.number)} {t('progress.of')} {num(stats.total)}
            </span>
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">{t(`level.${lesson.level}`)}</span>
            <span className="inline-flex items-center gap-1 text-xs">
              <Clock className="size-3.5" /> {num(lesson.minutes)} {t('lesson.minutes')}
            </span>
          </div>
          <div className="mt-6 flex items-start gap-4">
            <LessonIcon name={lesson.icon} tone={lesson.tone} className="hidden size-14 sm:grid [&_svg]:size-7" />
            <div className="min-w-0">
              <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
                {tr(lesson.title)}
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
                <Rich text={lesson.summary} />
              </p>
            </div>
          </div>
          <div className="mt-8 max-w-3xl rounded-lg bg-card p-5">
            <div className="mb-3 flex items-center gap-2 text-sm font-bold">
              <Target className="size-4 text-primary" /> {t('lesson.objectives')}
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {lesson.objectives.map((o, i) => (
                <li key={i} className="flex gap-2 text-sm leading-6 text-foreground/85">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <Rich text={o} />
                </li>
              ))}
            </ul>
          </div>

          {/* course roadmap: one segment per lesson */}
          <div className="mt-6 max-w-3xl">
            <div className="mb-2 flex items-center justify-between gap-3 text-xs text-muted-foreground">
              <span>{t('progress.course')}</span>
              <span className="tabular">
                {num(stats.completed)}/{num(stats.total)} · {fmtPct(stats.pct, 0)}
              </span>
            </div>
            <div className="flex items-center gap-1">
              {stats.lessons.map((l) => {
                const st = stats.statusOf(l.slug)
                const current = l.slug === lesson.slug
                return (
                  <Link
                    key={l.slug}
                    to={lessonPath(l)}
                    title={`${num(l.number)}. ${tr(l.title)}`}
                    aria-label={`${t('lesson.number')} ${num(l.number)}: ${tr(l.title)}`}
                    aria-current={current ? 'page' : undefined}
                    className={cn(
                      'flex-1 rounded-full transition-colors',
                      current ? 'h-2.5' : 'h-1.5 hover:h-2.5',
                      st === 'done' ? 'bg-primary' : current ? 'bg-foreground/60' : st === 'started' ? 'bg-primary/40' : 'bg-muted-foreground/20',
                    )}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_260px]">
        <CurrencyProvider value={lesson.currency ?? courseById.get(lesson.course)?.currency ?? 'toman'}>
        <article className="min-w-0 max-w-3xl">
          {lesson.sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-24 pt-6">
              <h2 className="mb-2 flex items-baseline gap-3 text-2xl font-black tracking-tight sm:text-3xl">
                <span className="tabular text-base font-bold text-primary/60">{num(i + 1).padStart(2, num(0))}</span>
                {tr(s.title)}
              </h2>
              {s.blocks.map((b, j) => (
                <BlockRenderer key={j} block={b} />
              ))}
            </section>
          ))}

          <section id="quiz" className="scroll-mt-24 pt-12">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="flex items-center gap-2 text-2xl font-black tracking-tight sm:text-3xl">
                  <GraduationCap className="size-7 text-primary" /> {t('lesson.quiz')}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">{t('lesson.quiz.lead')}</p>
              </div>
              {best && (
                <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold">
                  {t('quiz.best')}: {num(best.score)}/{num(best.total)}
                </span>
              )}
            </div>
            <Quiz
              key={`${lesson.slug}-${lang}`}
              questions={lesson.quiz}
              onComplete={(score, total) => {
                saveQuiz(lesson.slug, score, total)
                if (score / total >= PASS_RATIO) markDone(lesson.slug)
              }}
            />
          </section>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-card p-5">
            <button
              type="button"
              onClick={() => markDone(lesson.slug, !done)}
              className={cn(
                'inline-flex h-11 items-center gap-2 rounded-xl px-5 text-sm font-semibold transition active:scale-95',
                done ? 'bg-revenue/15 text-revenue' : 'bg-primary text-primary-foreground hover:opacity-90',
              )}
            >
              {done ? <CheckCircle2 className="size-4" /> : <Circle className="size-4" />}
              {done ? t('lesson.done') : t('lesson.markDone')}
            </button>
          </div>

          <nav className="mt-6 grid gap-4 sm:grid-cols-2">
            {prev ? (
              <Link to={lessonPath(prev)} className="group rounded-lg bg-card p-5 transition-colors hover:bg-muted/40">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <PrevIcon className="size-3.5" /> {t('lesson.prev')}
                </div>
                <div className="mt-2 font-bold group-hover:text-primary">{tr(prev.title)}</div>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link to={lessonPath(next)} className="group rounded-lg bg-card p-5 text-end transition-colors hover:bg-muted/40">
                <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground">
                  {t('lesson.next')} <NextIcon className="size-3.5" />
                </div>
                <div className="mt-2 font-bold group-hover:text-primary">{tr(next.title)}</div>
              </Link>
            )}
            {!next && (
              <Link to={`/practice?course=${lesson.course}`} className="group rounded-lg bg-primary/[0.07] p-5 text-end transition-colors hover:bg-primary/10">
                <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground">
                  {t('progress.endOfCourse')} <GraduationCap className="size-3.5" />
                </div>
                <div className="mt-2 font-bold text-primary">{t('progress.examTake')}</div>
              </Link>
            )}
          </nav>
        </article>
        </CurrencyProvider>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t('lesson.contents')}</div>
            <nav className="relative space-y-0.5 border-s ps-1">
              {[...lesson.sections.map((s) => ({ id: s.id, title: tr(s.title) })), { id: 'quiz', title: t('lesson.quiz') }].map((s) => (
                <a
                  key={s.id}
                  href={`#/lessons/${lesson.slug}`}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
                  className={cn(
                    'relative block rounded-md px-3 py-1.5 text-sm leading-6 transition-colors',
                    active === s.id ? 'font-semibold text-foreground' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {active === s.id && (
                    <motion.span layoutId="toc-active" className="absolute inset-0 -z-10 rounded-md bg-primary/10" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />
                  )}
                  {active === s.id && <motion.span layoutId="toc-bar" className="absolute inset-y-1 -start-[6px] w-0.5 rounded-full bg-primary" />}
                  {s.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </div>
  )
}
