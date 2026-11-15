import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

import type { L } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import { DiagramFrame, useInViewTimeline, type DiagramProps } from './DiagramFrame'

type Phase = 'during' | 'end' | 'next'
type CycleStep = { short: L; title: L; text: L; phase: Phase; optional?: boolean }

const STEPS: CycleStep[] = [
  {
    short: { fa: 'تحلیل رویدادها', en: 'Analyze' },
    title: { fa: 'تجزیه‌وتحلیل رویدادها', en: 'Analyze transactions' },
    text: {
      fa: 'رویدادهای مالی را از روی اسناد مثبته مانند فاکتور و رسید شناسایی کنید و ببینید کدام حساب‌ها و به چه مبلغی تغییر می‌کنند.',
      en: 'Identify each business event from its source document (invoice, receipt) and decide which accounts change and by how much.',
    },
    phase: 'during',
  },
  {
    short: { fa: 'دفتر روزنامه', en: 'Journalize' },
    title: { fa: 'ثبت در دفتر روزنامه', en: 'Journalize' },
    text: {
      fa: 'هر رویداد را به ترتیب تاریخ به‌صورت یک ثبت روزنامه ثبت کنید؛ جمع بدهکار هر ثبت با جمع بستانکار آن برابر است.',
      en: 'Record each transaction in date order as a journal entry whose debits equal its credits.',
    },
    phase: 'during',
  },
  {
    short: { fa: 'دفتر کل', en: 'Post to ledger' },
    title: { fa: 'انتقال به دفتر کل', en: 'Post to the ledger' },
    text: {
      fa: 'هر سطر ثبت روزنامه را به حساب مربوط در دفتر کل منتقل کنید تا مانده حساب‌ها به‌روز شود.',
      en: 'Transfer every journal line to its account in the general ledger so each balance stays up to date.',
    },
    phase: 'during',
  },
  {
    short: { fa: 'تراز آزمایشی', en: 'Trial balance' },
    title: { fa: 'تراز آزمایشی پیش از اصلاحات', en: 'Unadjusted trial balance' },
    text: {
      fa: 'مانده همه حساب‌های دفتر کل را فهرست کنید و برابری جمع بدهکار و جمع بستانکار را بررسی کنید.',
      en: 'List every ledger balance and check that total debits equal total credits.',
    },
    phase: 'end',
  },
  {
    short: { fa: 'ثبت‌های اصلاحی', en: 'Adjusting entries' },
    title: { fa: 'ثبت‌های اصلاحی', en: 'Adjusting entries' },
    text: {
      fa: 'در پایان دوره، اقلام تعهدی، پیش‌پرداخت‌ها و استهلاک را ثبت کنید تا درآمدها و هزینه‌ها در دوره درست شناسایی شوند.',
      en: 'At period end, record accruals, deferrals and depreciation so revenues and expenses land in the right period.',
    },
    phase: 'end',
  },
  {
    short: { fa: 'تراز اصلاح‌شده', en: 'Adjusted TB' },
    title: { fa: 'تراز آزمایشی اصلاح‌شده', en: 'Adjusted trial balance' },
    text: {
      fa: 'پس از ثبت‌های اصلاحی، برابری را دوباره بررسی کنید؛ این تراز مبنای تهیه صورت‌های مالی است.',
      en: 'Re-check that debits equal credits after the adjustments, this is the basis for the statements.',
    },
    phase: 'end',
  },
  {
    short: { fa: 'صورت‌های مالی', en: 'Financial statements' },
    title: { fa: 'تهیه صورت‌های مالی', en: 'Prepare financial statements' },
    text: {
      fa: 'صورت سود و زیان، صورت تغییرات حقوق مالکانه، ترازنامه و صورت جریان‌های نقدی را تهیه کنید.',
      en: 'Prepare the income statement, statement of owner’s equity, balance sheet and cash-flow statement.',
    },
    phase: 'end',
  },
  {
    short: { fa: 'بستن حساب‌ها', en: 'Closing entries' },
    title: { fa: 'ثبت‌های بستن حساب‌ها', en: 'Closing entries' },
    text: {
      fa: 'مانده حساب‌های موقت (درآمد، هزینه و برداشت) را صفر کنید و سود خالص را به حساب سرمایه منتقل کنید.',
      en: 'Zero the temporary accounts (revenue, expenses, drawings) and transfer net income to capital.',
    },
    phase: 'end',
  },
  {
    short: { fa: 'تراز پس از بستن', en: 'Post-closing TB' },
    title: { fa: 'تراز آزمایشی پس از بستن حساب‌ها', en: 'Post-closing trial balance' },
    text: {
      fa: 'اطمینان یابید که فقط حساب‌های دائمی (ترازنامه‌ای) باقی مانده‌اند و همچنان تراز هستند.',
      en: 'Confirm that only permanent (balance-sheet) accounts remain and that they still balance.',
    },
    phase: 'end',
  },
  {
    short: { fa: 'ثبت‌های معکوس', en: 'Reversing entries' },
    title: { fa: 'ثبت‌های معکوس (اختیاری)', en: 'Reversing entries (optional)' },
    text: {
      fa: 'در نخستین روز دوره بعد، برخی ثبت‌های اصلاحی تعهدی را معکوس کنید تا ثبت رویدادهای بعدی ساده‌تر شود.',
      en: 'On the first day of the next period, reverse certain accrual adjustments to simplify later entries.',
    },
    phase: 'next',
    optional: true,
  },
]

const N = STEPS.length
const PHASE: Record<Phase, L> = {
  during: { fa: 'در طول دوره', en: 'During the period' },
  end: { fa: 'پایان دوره', en: 'End of period' },
  next: { fa: 'آغاز دوره بعد', en: 'Start of next period' },
}

/*
 * Geometry. The HTML layer positions nodes with CSS variables so one markup serves both layouts:
 *  - narrow: square box, ring radius 40% (labels hidden, text below the ring)
 *  - wide (@lg): 4:3 box, ring radius 34% of the height → 25.5% of the width, labels around the ring
 * Each layout has its own SVG whose viewBox matches the box, so the ring lines up exactly.
 */
const RINGS = [
  { key: 'narrow', vb: '0 0 100 100', cx: 50, cy: 50, r: 40, sw: 1.6, cls: '@lg:hidden' },
  { key: 'wide', vb: '0 0 400 300', cx: 200, cy: 150, r: 102, sw: 3.2, cls: 'hidden @lg:block' },
] as const

export default function AccountingCycle({ caption }: DiagramProps) {
  const { tr, t, lang, isFa, digits } = useI18n()
  const scope = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(false)
  const prevActive = useRef(0)

  // autoplay: loops, because the cycle starts again every period
  useEffect(() => {
    if (!playing) return
    const id = window.setTimeout(() => setActive((a) => (a + 1) % N), 3600)
    return () => window.clearTimeout(id)
  }, [playing, active])

  const { replay } = useInViewTimeline(
    scope,
    (tl) => {
      tl.from('[data-track]', { drawSVG: '0%', duration: 1.1, ease: 'power2.inOut' })
        .from('[data-anim="node"]', { scale: 0, opacity: 0, stagger: 0.07, duration: 0.45, ease: 'back.out(2)' }, '-=0.85')
        .from('[data-anim="label"]', { opacity: 0, stagger: 0.05, duration: 0.4 }, '-=0.55')
        .from('[data-anim="center-wrap"]', { opacity: 0, scale: 0.9, duration: 0.5 }, '-=0.3')
        .from('[data-anim="below"]', { y: 10, opacity: 0, duration: 0.4 }, '-=0.3')
        .from('[data-anim="ctrl"]', { y: 10, opacity: 0, duration: 0.4 }, '-=0.3')
        .add(() => {
          setActive(0)
          setPlaying(!prefersReducedMotion())
        })
    },
    [lang],
  )

  // progress arc, active-node pop and centre cross-fade
  useGSAP(
    () => {
      const prev = prevActive.current
      prevActive.current = active
      const reduced = prefersReducedMotion()
      const to = `0% ${(active / N) * 100}%`
      if (prev === active) {
        // first render / language switch: jump straight to the current state
        gsap.set('[data-arc]', { drawSVG: to })
        return
      }
      if (prev === N - 1 && active === 0 && !reduced) {
        gsap
          .timeline()
          .to('[data-arc]', { drawSVG: '0% 100%', duration: 0.5, ease: 'power2.inOut' })
          .to('[data-arc]', { drawSVG: '100% 100%', duration: 0.5, ease: 'power2.in' })
          .set('[data-arc]', { drawSVG: '0% 0%' })
      } else {
        gsap.to('[data-arc]', { drawSVG: to, duration: reduced ? 0 : 0.8, ease: 'power2.inOut' })
      }
      if (reduced) return
      gsap.fromTo(`[data-pop="${active}"]`, { scale: 1.35 }, { scale: 1, duration: 0.6, ease: 'back.out(3)' })
      gsap.fromTo('[data-anim="center"]', { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.4 })
    },
    { scope, dependencies: [active, lang] },
  )

  const select = (i: number) => {
    setPlaying(false)
    setActive(((i % N) + N) % N)
  }

  const step = STEPS[active]
  const dirX = isFa ? -1 : 1 // clockwise in LTR, counter-clockwise in RTL

  return (
    <DiagramFrame
      title={{ fa: 'چرخه حسابداری در ده گام', en: 'The accounting cycle in ten steps' }}
      caption={caption}
      badge="interactive"
      onReplay={() => {
        setPlaying(false)
        setActive(0)
        replay()
      }}
    >
      <div ref={scope} className="@container">
        <div
          className={cn(
            'relative mx-auto aspect-square w-full max-w-[340px] [--rx:40%] [--ry:40%]',
            '@lg:aspect-[4/3] @lg:max-w-[600px] @lg:[--rx:25.5%] @lg:[--ry:34%]',
          )}
        >
          {RINGS.map((ring) => (
            <svg key={ring.key} viewBox={ring.vb} className={cn('absolute inset-0 size-full overflow-visible', ring.cls)} aria-hidden>
              <circle cx={ring.cx} cy={ring.cy} r={ring.r} fill="none" strokeWidth={ring.sw} className="stroke-border" data-track />
              <g transform={isFa ? `translate(${ring.cx * 2} 0) scale(-1 1)` : undefined}>
                <circle
                  data-arc
                  cx={ring.cx}
                  cy={ring.cy}
                  r={ring.r}
                  fill="none"
                  strokeWidth={ring.sw * 1.6}
                  strokeLinecap="round"
                  transform={`rotate(-90 ${ring.cx} ${ring.cy})`}
                  className="stroke-primary"
                />
              </g>
            </svg>
          ))}

          {/* nodes */}
          {STEPS.map((s, i) => {
            const a = ((-90 + (i * 360) / N) * Math.PI) / 180
            const cos = Math.cos(a) * dirX
            const sin = Math.sin(a)
            const isActive = i === active
            const done = i < active
            return (
              <button
                key={i}
                type="button"
                data-anim="node"
                onClick={() => select(i)}
                aria-current={isActive ? 'step' : undefined}
                aria-label={`${digits(String(i + 1))}. ${tr(s.title)}`}
                style={{ left: `calc(50% + ${cos.toFixed(4)} * var(--rx))`, top: `calc(50% + ${sin.toFixed(4)} * var(--ry))` }}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
              >
                <span
                  data-pop={i}
                  className={cn(
                    'grid size-8 place-items-center rounded-full border text-xs font-bold tabular shadow-sm transition-colors duration-300 @lg:size-9 @lg:text-sm',
                    isActive && ' bg-primary text-primary-foreground ',
                    done && ' bg-primary/12 text-primary',
                    !isActive && !done && 'bg-card text-muted-foreground  hover:text-foreground',
                    s.optional && !isActive && 'border-dashed',
                  )}
                >
                  {digits(String(i + 1))}
                </span>
              </button>
            )
          })}

          {/* labels around the ring (wide only) */}
          {STEPS.map((s, i) => {
            const a = ((-90 + (i * 360) / N) * Math.PI) / 180
            const cos = Math.cos(a) * dirX
            const sin = Math.sin(a)
            const side = Math.abs(cos) < 0.3 ? 'center' : cos > 0 ? 'right' : 'left'
            const off = 26 // px gap between node centre and label
            return (
              <button
                key={i}
                type="button"
                tabIndex={-1}
                data-anim="label"
                onClick={() => select(i)}
                style={{
                  left: `calc(50% + ${cos.toFixed(4)} * var(--rx) + ${(cos * off).toFixed(1)}px)`,
                  top: `calc(50% + ${sin.toFixed(4)} * var(--ry) + ${(sin * off).toFixed(1)}px)`,
                  translate: side === 'center' ? `-50% ${sin < 0 ? '-100%' : '0'}` : side === 'right' ? '0 -50%' : '-100% -50%',
                }}
                className={cn(
                  'absolute hidden w-max max-w-[24%] text-[11px] leading-tight transition-colors duration-300 @lg:block @lg:text-xs',
                  side === 'center' ? 'text-center' : side === 'right' ? 'text-left' : 'text-right',
                  i === active ? 'font-semibold text-foreground' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {tr(s.short)}
                {s.optional && <span className="block text-[10px] font-normal opacity-70">{tr({ fa: '(اختیاری)', en: '(optional)' })}</span>}
              </button>
            )
          })}

          {/* centre panel */}
          <div
            data-anim="center-wrap"
            className="absolute left-1/2 top-1/2 w-[56%] -translate-x-1/2 -translate-y-1/2 text-center @lg:w-[40%]"
          >
            <div data-anim="center" aria-live="polite">
              <div className="mb-1 inline-flex items-center gap-1 rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-semibold text-foreground/75">
                {tr(PHASE[step.phase])}
              </div>
              <div className="text-3xl font-black leading-none text-primary tabular @lg:text-4xl">{digits(String(active + 1))}</div>
              <div className="mt-1 text-sm font-bold leading-snug @lg:text-base">{tr(step.title)}</div>
              <p className="mt-1.5 hidden text-xs leading-relaxed text-muted-foreground @lg:block">{tr(step.text)}</p>
            </div>
          </div>
        </div>

        {/* narrow: explanation below the ring */}
        <p data-anim="below" className="mx-auto mt-3 max-w-md text-center text-sm leading-relaxed text-muted-foreground @lg:hidden" aria-hidden>
          {tr(step.text)}
        </p>

        {/* controls */}
        <div data-anim="ctrl" className="mt-4 flex items-center justify-center gap-2">
          <button
            type="button"
            aria-label={t('diagram.prev')}
            onClick={() => select(active - 1)}
            className="grid size-9 place-items-center rounded-lg border bg-background transition hover:bg-muted active:scale-95"
          >
            <ChevronLeft className="size-4 rtl:rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="inline-flex h-9 min-w-24 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90 active:scale-95"
          >
            {playing ? <Pause className="size-4" /> : <Play className="size-4 rtl:rotate-180" />}
            {playing ? t('diagram.pause') : t('diagram.play')}
          </button>
          <button
            type="button"
            aria-label={t('diagram.next')}
            onClick={() => select(active + 1)}
            className="grid size-9 place-items-center rounded-lg border bg-background transition hover:bg-muted active:scale-95"
          >
            <ChevronRight className="size-4 rtl:rotate-180" />
          </button>
        </div>
      </div>
    </DiagramFrame>
  )
}
