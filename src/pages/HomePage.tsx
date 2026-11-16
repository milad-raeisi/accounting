import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router'
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, FlaskConical, Sparkles } from 'lucide-react'

import { AnimatedNumber } from '@/components/ui/AnimatedNumber'
import { CourseCard } from '@/components/ui/CourseCard'
import { courses } from '@/content/courses'
import { allLessons } from '@/content/lessons'
import { novaAccountMap, novaAccounts, novaTransactions } from '@/content/nova'
import { useI18n } from '@/i18n/I18nProvider'
import type { UIKey } from '@/i18n/strings'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'
import { computeBalances, equation } from '@/lib/ledger'
import { cn } from '@/lib/utils'

/* ─────────────── Hero preview: a flat, drawn slice of the course ─────────────── */

const PREVIEW_TX = ['t1', 't2', 't3', 't6'].map((id) => novaTransactions.find((t) => t.id === id)!)
const BAR_MAX = 80000

function HeroPreview() {
  const { t, tr, num } = useI18n()
  const [step, setStep] = useState(0)
  const scope = useRef<HTMLDivElement>(null)

  // cycle through the month's first events; the numbers and bars do the moving
  useEffect(() => {
    if (prefersReducedMotion()) {
      setStep(PREVIEW_TX.length - 1)
      return
    }
    const id = window.setInterval(() => setStep((s) => (s + 1) % PREVIEW_TX.length), 2600)
    return () => window.clearInterval(id)
  }, [])

  const eq = useMemo(() => equation(computeBalances(novaAccounts, PREVIEW_TX.slice(0, step + 1))), [step])

  useGSAP(
    () => {
      const h = (v: number) => `${Math.max(4, (v / BAR_MAX) * 100)}%`
      gsap.to('[data-pbar="a"]', { height: h(eq.assets), duration: 0.9, ease: 'power3.out' })
      gsap.to('[data-pbar="l"]', { height: h(eq.liabilities), duration: 0.9, ease: 'power3.out', delay: 0.12 })
      gsap.to('[data-pbar="e"]', { height: h(eq.equity), duration: 0.9, ease: 'power3.out', delay: 0.12 })
    },
    { scope, dependencies: [step] },
  )

  const bars = [
    { key: 'a', label: t('table.assets'), value: eq.assets, color: 'bg-asset', text: 'text-asset' },
    { key: 'l', label: t('table.liabilities'), value: eq.liabilities, color: 'bg-liability', text: 'text-liability' },
    { key: 'e', label: t('table.equity'), value: eq.equity, color: 'bg-equity', text: 'text-equity' },
  ]

  return (
    <div ref={scope} className="rounded-lg bg-card p-5 shadow-[0_40px_80px_-60px_rgb(6_19_42/0.45)] sm:p-7">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-muted" />
          <span className="size-2.5 rounded-full bg-muted" />
          <span className="size-2.5 rounded-full bg-muted" />
        </div>
        <span className="text-xs text-muted-foreground">{t('home.preview.title')}</span>
      </div>

      <div className="grid gap-6 md:grid-cols-[1.25fr_1fr] md:gap-8">
        {/* the month's events: the active one is highlighted */}
        <ol className="space-y-2">
          {PREVIEW_TX.map((tx, i) => {
            const active = i === step
            const done = i <= step
            const dr = novaAccountMap.get(tx.lines[0].account)!
            const cr = novaAccountMap.get(tx.lines[1].account)!
            return (
              <li
                key={tx.id}
                className={cn('rounded-[1.25rem] px-4 py-3 transition-colors duration-500', active ? 'bg-primary/10' : 'bg-muted/50')}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      'grid size-7 shrink-0 place-items-center rounded-full text-[11px] font-semibold tabular transition-colors duration-500',
                      done ? 'bg-primary text-primary-foreground' : 'bg-card text-muted-foreground',
                    )}
                  >
                    {num(tx.day)}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">{tr(tx.title)}</span>
                </div>
                <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5 ps-10 text-[11px] text-muted-foreground">
                  <span>
                    {t('table.debit')}: <b className="font-medium text-debit">{tr(dr.name)}</b>
                  </span>
                  <span>
                    {t('table.credit')}: <b className="font-medium text-credit">{tr(cr.name)}</b>
                  </span>
                </div>
              </li>
            )
          })}
        </ol>

        {/* the accounting equation, rebalancing after each event */}
        <div className="flex flex-col">
          <div className="grid flex-1 grid-cols-[1fr_auto_1fr_auto_1fr] items-end gap-2">
            {bars.map((b, i) => (
              <div key={b.key} className="contents">
                {i > 0 && <span className="pb-12 text-center text-lg font-semibold text-muted-foreground">{i === 1 ? '=' : '+'}</span>}
                <div className="flex flex-col items-center gap-2">
                  <div className="relative h-40 w-full max-w-16 overflow-hidden rounded-2xl bg-muted/60 sm:h-48">
                    <div data-pbar={b.key} className={cn('absolute inset-x-0 bottom-0 h-[4%] rounded-2xl', b.color)} />
                  </div>
                  <div className="text-center">
                    <div className="text-[11px] text-muted-foreground">{b.label}</div>
                    <AnimatedNumber value={b.value} className={cn('text-sm font-semibold', b.text)} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 inline-flex items-center justify-center gap-1.5 self-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <CheckCircle2 className="size-3.5" /> {t('table.balanced')}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────── Sections ─────────────────────────── */

function Hero() {
  const { t, num, isFa } = useI18n()
  const Arrow = isFa ? ArrowLeft : ArrowRight
  return (
    <section className="relative overflow-hidden">
      {/* calm "open sky": a soft brand-blue glow, no pattern */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklch,var(--primary)_14%,transparent),transparent_75%)]" />
      <div className="relative mx-auto max-w-5xl px-4 pt-16 pb-14 sm:px-6 lg:pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            {num(courses.length)} {t('course.unit')} · {num(allLessons.length)} {t('course.lessons')} · {t('home.badge')}
          </span>
          <h1 className="mt-6 text-4xl leading-tight sm:text-6xl">{t('home.title')}</h1>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-body">{t('home.subtitle')}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/courses"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t('home.cta.start')}
              <Arrow className="size-4" />
            </Link>
            <Link to="/lab" className="inline-flex h-12 items-center rounded-full bg-card px-6 font-semibold text-foreground transition-colors hover:text-primary">
              {t('home.cta.lab')}
            </Link>
          </div>
        </div>
        <div className="mt-14">
          <HeroPreview />
        </div>
      </div>
    </section>
  )
}

function Features() {
  const { t } = useI18n()
  const items: { icon: typeof BookOpen; title: UIKey; text: UIKey }[] = [
    { icon: BookOpen, title: 'home.f1.title', text: 'home.f1.text' },
    { icon: Sparkles, title: 'home.f2.title', text: 'home.f2.text' },
    { icon: FlaskConical, title: 'home.f3.title', text: 'home.f3.text' },
  ]
  return (
    <section className="mx-auto grid max-w-5xl gap-4 px-4 sm:px-6 md:grid-cols-3">
      {items.map(({ icon: Icon, title, text }) => (
        <div key={title} className="rounded-lg bg-card p-6">
          <span className="icon-badge grid size-11 place-items-center">
            <Icon className="size-5" strokeWidth={1.6} />
          </span>
          <h3 className="mt-5 text-lg">{t(title)}</h3>
          <p className="mt-2 text-sm leading-7 text-body">{t(text)}</p>
        </div>
      ))}
    </section>
  )
}

function Curriculum() {
  const { t } = useI18n()
  return (
    <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
      <div className="mb-6 text-center">
        <h2 className="text-3xl">{t('home.courses.title')}</h2>
        <p className="mt-2 text-body">{t('home.courses.lead')}</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </section>
  )
}

function LabCard() {
  const { t, isFa } = useI18n()
  const Arrow = isFa ? ArrowLeft : ArrowRight
  return (
    <section className="mx-auto mt-10 max-w-5xl px-4 sm:px-6">
      {/* dark charcoal surface with white text; the accent stays Royal */}
      <div className="flex flex-col gap-6 rounded-lg bg-[#1d1d1d] p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
        <div className="max-w-xl">
          <h2 className="text-2xl text-white">{t('lab.title')}</h2>
          <p className="mt-2 leading-7 text-white/70">{t('home.cta.lead')}</p>
        </div>
        <Link
          to="/lab"
          className="inline-flex h-12 shrink-0 items-center gap-2 self-start rounded-full bg-primary px-6 font-semibold text-white transition-opacity hover:opacity-90 sm:self-auto"
        >
          {t('home.cta.lab')}
          <Arrow className="size-4" />
        </Link>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Curriculum />
      <LabCard />
    </>
  )
}
