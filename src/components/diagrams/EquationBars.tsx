import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

import { AnimatedNumber } from '@/components/ui/AnimatedNumber'
import { novaAccountMap, novaTransactions } from '@/content/nova'
import { useI18n } from '@/i18n/I18nProvider'
import { formatSigned } from '@/lib/format'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import { DiagramFrame, useInViewTimeline, type DiagramProps } from './DiagramFrame'

/** Transactions used in this figure (subset of the running example). */
const PICK = ['t1', 't2', 't3', 't4', 't6', 't8', 't11']

type Effect = { assets: number; liabilities: number; equity: number }

function effectOf(txId: string): Effect {
  const tx = novaTransactions.find((t) => t.id === txId)!
  const e: Effect = { assets: 0, liabilities: 0, equity: 0 }
  for (const line of tx.lines) {
    const acc = novaAccountMap.get(line.account)!
    const net = (line.debit ?? 0) - (line.credit ?? 0) // + = debit
    if (acc.type === 'asset') e.assets += net
    else if (acc.type === 'liability') e.liabilities -= net
    else if (acc.type === 'expense') e.equity -= net
    else if (acc.drawings) e.equity -= net
    else e.equity -= net // capital & revenue (credit increases)
  }
  return e
}

/** Bar scale. The running totals peak at 76,000 after t6, so leave headroom above that. */
const MAX = 80000

export default function EquationBars({ caption }: DiagramProps) {
  const { tr, t, lang } = useI18n()
  const scope = useRef<HTMLDivElement>(null)
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(false)

  const steps = useMemo(() => {
    let acc: Effect = { assets: 0, liabilities: 0, equity: 0 }
    return PICK.map((id) => {
      const fx = effectOf(id)
      acc = { assets: acc.assets + fx.assets, liabilities: acc.liabilities + fx.liabilities, equity: acc.equity + fx.equity }
      return { tx: novaTransactions.find((x) => x.id === id)!, fx, totals: acc }
    })
  }, [])

  const current = step === 0 ? null : steps[step - 1]
  const totals = current?.totals ?? { assets: 0, liabilities: 0, equity: 0 }

  // autoplay
  useEffect(() => {
    if (!playing) return
    if (step >= steps.length) {
      setPlaying(false)
      return
    }
    const id = window.setTimeout(() => setStep((s) => s + 1), step === 0 ? 300 : 2300)
    return () => window.clearTimeout(id)
  }, [playing, step, steps.length])

  // entrance
  const { replay } = useInViewTimeline(
    scope,
    (tl) => {
      tl.from('[data-anim="col"]', { y: 40, opacity: 0, stagger: 0.12, duration: 0.8 })
        .from('[data-anim="eq"]', { scale: 0, rotate: -90, opacity: 0, duration: 0.6, ease: 'back.out(2)' }, '-=0.4')
        .from('[data-anim="ctrl"]', { y: 12, opacity: 0, duration: 0.5 }, '-=0.2')
        .add(() => {
          setStep(0)
          setPlaying(!prefersReducedMotion())
        })
    },
    [lang],
  )

  // bars react to the step with an elastic GSAP tween
  useGSAP(
    () => {
      const h = (v: number) => `${Math.max(0, (v / MAX) * 100)}%`
      const d = prefersReducedMotion() ? 0 : 1
      gsap.to('[data-bar="assets"]', { height: h(totals.assets), duration: d, ease: 'elastic.out(1, 0.65)' })
      gsap.to('[data-bar="liabilities"]', { height: h(totals.liabilities), duration: d, ease: 'elastic.out(1, 0.65)', delay: 0.15 * d })
      gsap.to('[data-bar="equity"]', { height: h(totals.equity), duration: d, ease: 'elastic.out(1, 0.65)', delay: 0.15 * d })
      if (step > 0) {
        gsap.fromTo('[data-anim="eq"]', { scale: 1.35 }, { scale: 1, duration: 0.6, ease: 'back.out(3)', delay: 0.35 })
        gsap.from('[data-anim="chip"]', { y: 10, opacity: 0, stagger: 0.08, duration: 0.45 })
      }
    },
    { scope, dependencies: [step, lang] },
  )

  const chip = (label: string, v: number, tone: string) =>
    v !== 0 && (
      <span
        data-anim="chip"
        className={cn('inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold tabular', tone)}
      >
        {label} {formatSigned(v, lang)}
      </span>
    )

  return (
    <DiagramFrame
      title={{ fa: 'معادله حسابداری همیشه تراز می‌ماند', en: 'The accounting equation always balances' }}
      caption={caption}
      badge="interactive"
      onReplay={() => {
        setPlaying(false)
        setStep(0)
        replay()
      }}
    >
      <div ref={scope}>
        {/* columns: flex order follows the document direction, so Assets sit on the reading-start side */}
        <div className="mx-auto grid max-w-xl grid-cols-[1fr_auto_1fr] items-end gap-3 sm:gap-6">
          <div data-anim="col" className="flex flex-col items-center gap-3">
            <div className="relative h-52 w-full max-w-[140px] overflow-hidden rounded-xl border bg-muted/50 ledger-lines sm:h-64">
              <div data-bar="assets" className="absolute inset-x-0 bottom-0 h-0 rounded-t-lg bg-asset shadow-[inset_0_2px_0_0_rgb(255_255_255/0.25)]" />
            </div>
            <div className="text-center">
              <div className="text-xs font-medium text-muted-foreground">{t('table.assets')}</div>
              <AnimatedNumber value={totals.assets} className="text-lg font-bold text-asset sm:text-xl" />
            </div>
          </div>

          <div data-anim="eq" className="mb-16 grid size-10 place-items-center rounded-full bg-foreground text-xl font-bold text-background sm:size-12 sm:text-2xl">
            =
          </div>

          <div data-anim="col" className="flex flex-col items-center gap-3">
            <div className="relative flex h-52 w-full max-w-[140px] flex-col-reverse overflow-hidden rounded-xl border bg-muted/50 ledger-lines sm:h-64">
              <div data-bar="equity" className="h-0 shrink-0 bg-equity" />
              <div data-bar="liabilities" className="h-0 shrink-0 rounded-t-lg bg-liability" />
            </div>
            <div className="flex items-start gap-3 text-center">
              <div>
                <div className="text-xs font-medium text-muted-foreground">{t('table.liabilities')}</div>
                <AnimatedNumber value={totals.liabilities} className="text-base font-bold text-liability sm:text-lg" />
              </div>
              <div className="pt-4 text-muted-foreground">+</div>
              <div>
                <div className="text-xs font-medium text-muted-foreground">{t('table.equity')}</div>
                <AnimatedNumber value={totals.equity} className="text-base font-bold text-equity sm:text-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* current transaction */}
        <div className="mx-auto mt-6 min-h-[92px] max-w-xl rounded-xl border border-dashed bg-background/60 p-4 text-center">
          {current ? (
            <>
              <div className="text-xs text-muted-foreground">
                {tr({ fa: `رویداد ${step} از ${steps.length}`, en: `Transaction ${step} of ${steps.length}` })}
              </div>
              <div className="mt-1 text-sm font-medium sm:text-base">{tr(current.tx.title)}</div>
              <div className="mt-2 flex flex-wrap justify-center gap-2">
                {chip(t('table.assets'), current.fx.assets, 'bg-asset/12 text-asset')}
                {chip(t('table.liabilities'), current.fx.liabilities, 'bg-liability/12 text-liability')}
                {chip(t('table.equity'), current.fx.equity, 'bg-equity/12 text-equity')}
                {current.fx.assets === 0 && current.fx.liabilities === 0 && current.fx.equity === 0 && (
                  <span data-anim="chip" className="rounded-full bg-muted px-2.5 py-1 text-xs">
                    {tr({ fa: 'جابه‌جایی درون دارایی‌ها؛ جمع ثابت ماند', en: 'Swap within assets: total unchanged' })}
                  </span>
                )}
              </div>
            </>
          ) : (
            <div className="pt-4 text-sm text-muted-foreground">
              {tr({ fa: 'روی «پخش» بزنید تا رویدادهای ماه یکی‌یکی ثبت شوند.', en: 'Press Play to record the month’s events one by one.' })}
            </div>
          )}
        </div>

        {/* controls */}
        <div data-anim="ctrl" className="mt-4 flex items-center justify-center gap-2">
          <button
            type="button"
            aria-label={t('diagram.prev')}
            onClick={() => {
              setPlaying(false)
              setStep((s) => Math.max(0, s - 1))
            }}
            className="grid size-9 place-items-center rounded-lg border bg-background transition hover:bg-muted active:scale-95"
          >
            <ChevronLeft className="size-4 rtl:rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => {
              if (step >= steps.length) setStep(0)
              setPlaying((p) => !p)
            }}
            className="inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90 active:scale-95"
          >
            {playing ? <Pause className="size-4" /> : <Play className="size-4 rtl:rotate-180" />}
            {playing ? t('diagram.pause') : t('diagram.play')}
          </button>
          <button
            type="button"
            aria-label={t('diagram.next')}
            onClick={() => {
              setPlaying(false)
              setStep((s) => Math.min(steps.length, s + 1))
            }}
            className="grid size-9 place-items-center rounded-lg border bg-background transition hover:bg-muted active:scale-95"
          >
            <ChevronRight className="size-4 rtl:rotate-180" />
          </button>
        </div>
        <div className="mt-3 flex justify-center gap-1.5">
          {steps.map((_, i) => (
            <span key={i} className={cn('h-1.5 rounded-full transition-all duration-500', i < step ? 'w-5 bg-primary' : 'w-1.5 bg-border')} />
          ))}
        </div>
      </div>
    </DiagramFrame>
  )
}
