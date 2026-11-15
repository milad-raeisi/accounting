import { useEffect, useRef, useState } from 'react'

import { AnimatedNumber } from '@/components/ui/AnimatedNumber'
import type { L } from '@/content/types'
import { novaAccountMap, novaAccounts, novaTransactions } from '@/content/nova'
import { useI18n } from '@/i18n/I18nProvider'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'
import { computeBalances, type Side } from '@/lib/ledger'
import { cn } from '@/lib/utils'
import { DiagramFrame, useInViewTimeline, type DiagramProps } from './DiagramFrame'
import { StepControls } from './parts'

const ACCOUNT = 'cash'

/** Short labels for the ledger lines (the full transaction title is shown while posting). */
const SHORT: Record<string, L> = {
  t1: { fa: 'سرمایه‌گذاری مالک', en: 'Owner investment' },
  t2: { fa: 'دریافت وام', en: 'Bank loan' },
  t3: { fa: 'خرید تجهیزات', en: 'Equipment' },
  t5: { fa: 'بیمه پیش‌پرداخت', en: 'Insurance' },
  t6: { fa: 'درآمد نقدی', en: 'Cash revenue' },
  t8: { fa: 'اجاره', en: 'Rent' },
  t9: { fa: 'حقوق', en: 'Salaries' },
  t10: { fa: 'وصول از مشتری', en: 'Collection' },
  t11: { fa: 'پرداخت به تأمین‌کننده', en: 'Paid supplier' },
  t12: { fa: 'برداشت مالک', en: 'Drawings' },
}

type Posting = { idx: number; txId: string; day: number; side: Side; amount: number; label: L; title: L }

/** Every Cash line of the month, in date order. */
const POSTINGS: Posting[] = novaTransactions.flatMap((tx) =>
  tx.lines
    .filter((l) => l.account === ACCOUNT)
    .map((l) => ({
      txId: tx.id,
      day: tx.day,
      side: (l.debit ? 'debit' : 'credit') as Side,
      amount: l.debit ?? l.credit ?? 0,
      label: SHORT[tx.id] ?? tx.title,
      title: tx.title,
    })),
).map((p, idx) => ({ ...p, idx }))

const FINAL = computeBalances(novaAccounts, novaTransactions).get(ACCOUNT)!
/** the balance is written on the larger side (debit for Cash) */
const FINAL_SIDE: Side = FINAL.net >= 0 ? 'debit' : 'credit'
const LAST = POSTINGS.length + 1 // postings + the balancing step
const MIN_ROWS = Math.max(...(['debit', 'credit'] as const).map((s) => POSTINGS.filter((p) => p.side === s).length))

export default function TAccountDemo({ caption }: DiagramProps) {
  const { tr, t, lang, money, digits } = useI18n()
  const scope = useRef<HTMLDivElement>(null)
  const [step, setStep] = useState(0)
  const [landed, setLanded] = useState(0) // step whose amount has reached the ledger
  const [playing, setPlaying] = useState(false)
  const stepRef = useRef(0)

  const account = novaAccountMap.get(ACCOUNT)!
  const shown = POSTINGS.slice(0, Math.min(step, POSTINGS.length))
  const settled = POSTINGS.slice(0, Math.min(landed, POSTINGS.length))
  const sum = (side: Side) => settled.filter((p) => p.side === side).reduce((s, p) => s + p.amount, 0)
  const current = step >= 1 && step <= POSTINGS.length ? POSTINGS[step - 1] : null
  const final = step >= LAST

  // autoplay
  useEffect(() => {
    if (!playing) return
    const id = window.setTimeout(
      () => {
        if (step + 1 >= LAST) setPlaying(false)
        setStep(Math.min(LAST, step + 1))
      },
      step === 0 ? 300 : 1900,
    )
    return () => window.clearTimeout(id)
  }, [playing, step])

  // entrance
  const { replay } = useInViewTimeline(
    scope,
    (tl) => {
      tl.from('[data-anim="tname"]', { y: -10, opacity: 0, duration: 0.5 })
        .from('[data-anim="tbar"]', { scaleX: 0, duration: 0.6, ease: 'power2.inOut' }, '-=0.2')
        .from('[data-anim="tstem"]', { scaleY: 0, duration: 0.5, ease: 'power2.out' }, '-=0.25')
        .from('[data-anim="thead"]', { y: 6, opacity: 0, stagger: 0.1, duration: 0.4 }, '-=0.25')
        .from('[data-anim="stage"]', { y: 10, opacity: 0, duration: 0.4 }, '-=0.2')
        .from('[data-anim="ctrl"]', { y: 10, opacity: 0, duration: 0.4 }, '-=0.2')
        .add(() => {
          setStep(0)
          setPlaying(!prefersReducedMotion())
        })
    },
    [lang],
  )

  // each new posting flies from the "now posting" card into its side of the T
  useGSAP(
    () => {
      const prev = stepRef.current
      stepRef.current = step
      const root = scope.current
      const land = () => {
        if (stepRef.current === step) setLanded(step)
      }
      if (!root || step <= prev || prefersReducedMotion()) {
        land()
        return
      }
      const body = root.querySelector<HTMLElement>('[data-anim="stage-body"]')
      if (step <= POSTINGS.length) {
        const src = root.querySelector<HTMLElement>('[data-anim="stage-amt"]')
        const row = root.querySelector<HTMLElement>(`[data-row="${step - 1}"]`)
        if (!src || !row) {
          land()
          return
        }
        const a = src.getBoundingClientRect()
        const b = row.getBoundingClientRect()
        const dx = a.left + a.width / 2 - (b.left + b.width / 2)
        const dy = a.top + a.height / 2 - (b.top + b.height / 2)
        if (body) gsap.from(body, { y: -8, opacity: 0, duration: 0.35 })
        gsap.from(row, { x: dx, y: dy, scale: 0.85, opacity: 0, duration: 0.85, delay: 0.35, ease: 'power3.inOut', onComplete: land })
        const side = POSTINGS[step - 1].side
        gsap.fromTo(`[data-total="${side}"]`, { scale: 1.12 }, { scale: 1, duration: 0.5, delay: 1.2, ease: 'back.out(3)' })
      } else {
        land()
        if (body) gsap.from(body, { y: -8, opacity: 0, duration: 0.35 })
        gsap.from('[data-anim="rule"]', { scaleX: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' })
        gsap.from('[data-anim="bal"]', { scale: 0.5, opacity: 0, duration: 0.6, delay: 0.45, ease: 'back.out(2)' })
      }
    },
    { scope, dependencies: [step] },
  )

  const go = (s: number) => {
    setPlaying(false)
    setStep(Math.max(0, Math.min(LAST, s)))
  }

  const sideLabel = (side: Side) => (side === 'debit' ? t('table.debit') : t('table.credit'))

  const column = (side: Side) => {
    const rows = shown.filter((p) => p.side === side)
    const total = sum(side)
    return (
      <div className="flex min-w-0 flex-col px-2 sm:px-4">
        <div data-anim="thead" className={cn('pb-1.5 text-center text-xs font-bold sm:text-sm', side === 'debit' ? 'text-debit' : 'text-credit')}>
          {sideLabel(side)}
          <span className="ms-1 text-[10px] font-medium text-muted-foreground" dir="ltr">
            ({side === 'debit' ? 'Dr' : 'Cr'})
          </span>
        </div>
        <ul className="flex flex-col" style={{ minHeight: `${MIN_ROWS * 2.25}rem` }}>
          {rows.map((p) => (
            <li
              key={p.idx}
              data-row={p.idx}
              className={cn(
                'flex h-9 items-center gap-1.5 rounded-md border-b border-dashed px-1 transition-colors duration-700',
                p.idx === step - 1 && !final ? 'bg-gold/15' : 'bg-transparent',
              )}
            >
              <span className="shrink-0 rounded bg-muted px-1 text-[10px] font-medium text-muted-foreground tabular">
                {tr({ fa: `روز ${p.day}`, en: `Day ${p.day}` })}
              </span>
              <span className="hidden min-w-0 flex-1 truncate text-[11px] text-muted-foreground @sm:block sm:text-xs">{tr(p.label)}</span>
              <span className="flex-1 @sm:hidden" />
              <span className="shrink-0 text-xs font-semibold tabular sm:text-sm">{money(p.amount)}</span>
            </li>
          ))}
        </ul>
        {/* running total → column total */}
        <div className="mt-1">
          <div
            data-anim="rule"
            className={cn('h-[3px] border-y transition-opacity duration-300', final ? 'border-foreground/60 opacity-100' : 'opacity-0')}
          />
          <div className="flex items-center justify-between gap-2 px-1 pt-1.5">
            <span className="text-[11px] text-muted-foreground">{final ? t('table.total') : tr({ fa: 'جمع تا اینجا', en: 'Running total' })}</span>
            <span data-total={side} className="inline-block">
              <AnimatedNumber value={total} className={cn('text-sm font-bold sm:text-base', side === 'debit' ? 'text-debit' : 'text-credit')} />
            </span>
          </div>
          {/* balance sits on the larger side, like a textbook T-account */}
          <div className="h-10 pt-1.5">
            {final && side === FINAL_SIDE && (
              <div
                data-anim="bal"
                className="flex items-center justify-between gap-2 rounded-lg border bg-gold/15 px-2 py-1"
              >
                <span className="text-[11px] font-semibold">{t('table.balance')}</span>
                <span className="text-sm font-black tabular sm:text-base">{money(Math.abs(FINAL.net))}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <DiagramFrame
      title={{ fa: 'حساب T: موجودی نقد در یک ماه', en: 'A T-account: Cash over one month' }}
      caption={caption}
      badge="interactive"
      onReplay={() => {
        setPlaying(false)
        setStep(0)
        replay()
      }}
    >
      <div ref={scope} className="@container mx-auto max-w-2xl">
        {/* now posting */}
        <div
          data-anim="stage"
          className="mx-auto mb-5 flex min-h-[84px] max-w-md items-center justify-center rounded-xl border border-dashed bg-background/60 px-4 py-3 text-center"
          aria-live="polite"
        >
          <div data-anim="stage-body" key={step}>
            {current ? (
              <>
                <div className="text-[11px] text-muted-foreground sm:text-xs">
                  {tr({ fa: `روز ${current.day}`, en: `Day ${current.day}` })} · {tr(current.title)}
                </div>
                <div className="mt-1.5 inline-flex items-center gap-2">
                  <span
                    className={cn(
                      'rounded-full px-2 py-0.5 text-[11px] font-bold',
                      current.side === 'debit' ? 'bg-debit/12 text-debit' : 'bg-credit/12 text-credit',
                    )}
                  >
                    {sideLabel(current.side)} {tr(account.name)}
                  </span>
                  <span data-anim="stage-amt" className="text-lg font-black tabular sm:text-xl">
                    {money(current.amount)}
                  </span>
                </div>
              </>
            ) : final ? (
              <div className="text-sm">
                <div className="font-semibold">
                  {t('table.balance')} = {money(FINAL.totalDebit)} − {money(FINAL.totalCredit)} ={' '}
                  <span className="text-debit">{money(FINAL.net)}</span>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {tr({
                    fa: 'مانده بدهکار است؛ همان ماهیت عادی یک حساب دارایی.',
                    en: 'A debit balance: the normal balance for an asset account.',
                  })}
                </div>
              </div>
            ) : (
              <div className="text-sm text-muted-foreground">
                {tr({
                  fa: 'روی «پخش» بزنید تا رویدادهای نقدی ماه یکی‌یکی در حساب ثبت شوند.',
                  en: 'Press Play to post the month’s cash events one by one.',
                })}
              </div>
            )}
          </div>
        </div>

        {/* the T */}
        <div className="relative rounded-2xl border bg-background/50 px-1 pb-2 pt-3 ledger-lines sm:px-2">
          <div data-anim="tname" className="text-center">
            <span className="text-base font-bold sm:text-lg">{tr(account.name)}</span>
            <span className="ms-2 text-xs text-muted-foreground tabular">{digits(account.code)}</span>
          </div>
          <div data-anim="tbar" className="mx-2 mt-2 h-[3px] rounded-full bg-foreground/80" />
          <div className="relative grid grid-cols-2 pt-2">
            <span data-anim="tstem" aria-hidden className="absolute inset-y-0 left-1/2 w-[3px] origin-top -translate-x-1/2 rounded-full bg-foreground/80" />
            {column('debit')}
            {column('credit')}
          </div>
        </div>

        <StepControls
          step={step}
          total={LAST}
          playing={playing}
          onPrev={() => go(step - 1)}
          onNext={() => go(step + 1)}
          onToggle={() => {
            if (step >= LAST) setStep(0)
            setPlaying((p) => !p)
          }}
        />
      </div>
    </DiagramFrame>
  )
}
