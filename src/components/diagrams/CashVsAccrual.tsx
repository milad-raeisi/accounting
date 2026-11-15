import { useRef, type ReactNode } from 'react'
import { Briefcase, CalendarCheck, FileText, HandCoins, KeyRound, Scale } from 'lucide-react'

import { Rich } from '@/components/ui/Rich'
import { useI18n } from '@/i18n/I18nProvider'
import { cn } from '@/lib/utils'
import { DiagramFrame, useInViewTimeline, type DiagramProps } from './DiagramFrame'

/** Scenario: a 4,000 design project done & invoiced in month 1, paid in month 2; 3 months' rent (3,000) prepaid in month 1. */
const REVENUE = 4000
const RENT = 3000
const MONTHS = [1, 2, 3] as const

type Basis = 'accrual' | 'cash'
type Marker = { month: number; kind: 'rev' | 'exp'; amount: number }

const MARKERS: Record<Basis, Marker[]> = {
  accrual: [
    { month: 1, kind: 'rev', amount: REVENUE },
    { month: 1, kind: 'exp', amount: RENT / 3 },
    { month: 2, kind: 'exp', amount: RENT / 3 },
    { month: 3, kind: 'exp', amount: RENT / 3 },
  ],
  cash: [
    { month: 1, kind: 'exp', amount: RENT },
    { month: 2, kind: 'rev', amount: REVENUE },
  ],
}

const profitOf = (b: Basis, m: number) =>
  MARKERS[b].filter((x) => x.month === m).reduce((s, x) => s + (x.kind === 'rev' ? x.amount : -x.amount), 0)

const PROFIT: Record<Basis, number[]> = {
  accrual: MONTHS.map((m) => profitOf('accrual', m)),
  cash: MONTHS.map((m) => profitOf('cash', m)),
}
const TOTAL = PROFIT.accrual.reduce((a, b) => a + b, 0)

export default function CashVsAccrual({ caption }: DiagramProps) {
  const { tr, money, lang, isFa } = useI18n()
  const scope = useRef<HTMLDivElement>(null)

  const { replay } = useInViewTimeline(
    scope,
    (tl) => {
      const s = isFa ? -1 : 1 // timeline flows toward the reading end
      const drop = (sel: string, at: gsap.Position) =>
        tl.from(sel, { y: -26, autoAlpha: 0, scale: 0.85, duration: 0.55, ease: 'back.out(2.4)' }, at)
      const fall = (sel: string, at: gsap.Position) =>
        tl.to(sel, { y: 28, autoAlpha: 0, scale: 0.6, duration: 0.45, ease: 'power2.in' }, at)
      const profit = (m: number, at: gsap.Position) =>
        tl.from(`[data-profit="${m}"]`, { y: 8, autoAlpha: 0, duration: 0.4, stagger: 0.1 }, at)

      tl.from('[data-anim="mhead"]', { y: -10, autoAlpha: 0, stagger: 0.08, duration: 0.4 })
        .from('[data-anim="lane"]', { y: 22, autoAlpha: 0, stagger: 0.12, duration: 0.6 }, '<0.1')
        .from('[data-now]', { autoAlpha: 0, duration: 0.4 })

      // ── month 1
      tl.addLabel('m1')
      tl.from('[data-ev="1"]', { y: -16, autoAlpha: 0, stagger: 0.2, duration: 0.5, ease: 'back.out(2)' }, 'm1')
      tl.from('[data-tok]', { scale: 0.4, autoAlpha: 0, duration: 0.5, ease: 'back.out(2.2)' }, 'm1+=0.45')
      drop('[data-mk="accrual-rev-1"]', 'm1+=0.9')
      drop('[data-mk="cash-exp-1"]', 'm1+=1.05')
      fall('[data-seg="1"]', 'm1+=1.35')
      drop('[data-mk="accrual-exp-1"]', 'm1+=1.6')
      profit(1, 'm1+=2')

      // ── month 2
      tl.addLabel('m2', '+=0.55')
      tl.to('[data-now], [data-tok]', { xPercent: s * 100, duration: 0.9, ease: 'power2.inOut' }, 'm2')
      tl.from('[data-ev="2"]', { y: -16, autoAlpha: 0, duration: 0.5, ease: 'back.out(2)' }, 'm2+=0.8')
      tl.to('[data-tok="inv"]', { scale: 0.5, autoAlpha: 0, duration: 0.35 }, 'm2+=1.15')
      drop('[data-mk="cash-rev-2"]', 'm2+=1.25')
      fall('[data-seg="2"]', 'm2+=1.35')
      drop('[data-mk="accrual-exp-2"]', 'm2+=1.6')
      profit(2, 'm2+=2')

      // ── month 3
      tl.addLabel('m3', '+=0.55')
      tl.to('[data-now], [data-tok="rent"]', { xPercent: s * 200, duration: 0.9, ease: 'power2.inOut' }, 'm3')
      tl.from('[data-ev="3"]', { y: -16, autoAlpha: 0, duration: 0.5, ease: 'back.out(2)' }, 'm3+=0.8')
      fall('[data-seg="3"]', 'm3+=1.1')
      drop('[data-mk="accrual-exp-3"]', 'm3+=1.35')
      tl.to('[data-tok="rent"]', { scale: 0.5, autoAlpha: 0, duration: 0.35 }, 'm3+=1.6')
      profit(3, 'm3+=1.75')

      // ── wrap-up
      tl.to('[data-now]', { autoAlpha: 0, duration: 0.5 }, '+=0.35')
      tl.from('[data-total]', { scale: 0.6, autoAlpha: 0, stagger: 0.15, duration: 0.5, ease: 'back.out(2.5)' }, '<')
      tl.from('[data-anim="insight"]', { y: 14, autoAlpha: 0, duration: 0.6 }, '-=0.1')
    },
    [lang],
  )

  const signed = (kind: Marker['kind'], v: number) => (
    <span dir="ltr" className="tabular">
      {kind === 'rev' ? '+' : '−'}
      {money(v)}
    </span>
  )

  const markerChip = (basis: Basis, m: Marker) => (
    <span
      key={`${basis}-${m.kind}-${m.month}`}
      data-mk={`${basis}-${m.kind}-${m.month}`}
      className={cn(
        'inline-flex max-w-full flex-wrap items-center justify-center gap-x-1 rounded-lg px-1.5 py-1 text-center text-[10px] leading-tight font-semibold shadow-sm sm:px-2 sm:text-xs',
        m.kind === 'rev' ? 'bg-revenue/14 text-revenue ring-1 ring-foreground/10' : 'bg-expense/14 text-expense ring-1 ring-foreground/10',
      )}
    >
      {signed(m.kind, m.amount)}
      <span className="font-medium">{m.kind === 'rev' ? tr({ fa: 'درآمد', en: 'revenue' }) : tr({ fa: 'هزینه اجاره', en: 'rent exp.' })}</span>
    </span>
  )

  const laneLabel = (title: string, note: string, dot: string, total?: boolean) => (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 sm:block">
      <div className="flex items-center gap-2 text-sm font-bold">
        <span aria-hidden className={cn('size-2.5 shrink-0 rounded-full', dot)} />
        {title}
      </div>
      <div className="text-[11px] leading-snug text-muted-foreground sm:mt-0.5">{note}</div>
      {total && (
        <div
          data-total
          className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-[11px] font-semibold sm:mt-2"
        >
          {tr({ fa: 'جمع ۳ ماه:', en: '3-month total:' })}
          <span className="tabular text-revenue">{money(TOTAL)}</span>
        </div>
      )}
    </div>
  )

  const track = (cells: ReactNode[], strip?: ReactNode, children?: ReactNode) => (
    <div className="relative min-w-0 overflow-hidden rounded-xl border bg-muted/25">
      <div data-now aria-hidden className="pointer-events-none absolute inset-y-0 start-0 w-1/3 bg-primary/8 shadow-[inset_0_-3px_0_0_var(--primary)]" />
      {children}
      <div className="relative grid grid-cols-3">
        {cells.map((c, i) => (
          <div key={i} className={cn('flex min-w-0 flex-col items-center justify-end gap-1.5 px-1 pb-2.5', i > 0 && 'border-s border-dashed')}>
            {c}
          </div>
        ))}
      </div>
      {strip}
    </div>
  )

  const lane = (basis: Basis) => {
    const isAccrual = basis === 'accrual'
    return (
      <div data-anim="lane" className="grid gap-2 sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:items-center sm:gap-4">
        {isAccrual
          ? laneLabel(
              tr({ fa: 'مبنای تعهدی', en: 'Accrual basis' }),
              tr({ fa: 'درآمد هنگام کسب، هزینه هنگام مصرف', en: 'Revenue when earned, expenses when incurred' }),
              'bg-primary',
              true,
            )
          : laneLabel(
              tr({ fa: 'مبنای نقدی', en: 'Cash basis' }),
              tr({ fa: 'فقط هنگام دریافت یا پرداخت وجه', en: 'Only when cash comes in or goes out' }),
              'bg-gold',
              true,
            )}
        {track(
          MONTHS.map((m) => (
            <div key={m} className="flex min-h-[78px] w-full flex-col items-center justify-end gap-1.5 pt-11">
              {MARKERS[basis].filter((x) => x.month === m).map((x) => markerChip(basis, x))}
            </div>
          )),
          <div className="relative grid grid-cols-3 border-t bg-background/70">
            <div className="col-span-3 px-2 pt-1 text-[10px] font-medium text-muted-foreground">
              {tr({ fa: 'سود ماه', en: 'Profit for the month' })}
            </div>
            {PROFIT[basis].map((p, i) => (
              <div
                key={i}
                data-profit={i + 1}
                className={cn(
                  'px-1 pb-1.5 text-center text-xs font-bold tabular sm:text-sm',
                  p > 0 ? 'text-revenue' : p < 0 ? 'text-liability' : 'text-muted-foreground',
                )}
              >
                {money(p)}
              </div>
            ))}
          </div>,
          isAccrual ? (
            <div data-tok="rent" aria-hidden className="pointer-events-none absolute start-0 top-2 z-10 flex w-1/3 justify-center px-1">
              <div className="flex items-center gap-1.5 rounded-full border bg-card px-2 py-1 shadow-sm">
                <span className="flex gap-0.5">
                  {[1, 2, 3].map((i) => (
                    <span key={i} data-seg={i} className="inline-block h-3.5 w-2 rounded-[3px] bg-asset sm:w-2.5" />
                  ))}
                </span>
                <span className="text-[10px] font-semibold whitespace-nowrap text-asset">
                  {tr({ fa: 'پیش‌پرداخت', en: 'Prepaid' })}
                </span>
              </div>
            </div>
          ) : (
            <div data-tok="inv" aria-hidden className="pointer-events-none absolute start-0 top-2 z-10 flex w-1/3 justify-center px-1">
              <div className="flex items-center gap-1 rounded-full border border-dashed border-muted-foreground/60 bg-card px-2 py-1 text-[10px] whitespace-nowrap text-muted-foreground shadow-sm">
                <FileText className="size-3 shrink-0" />
                {tr({ fa: 'فاکتور؛ منتظر وجه', en: 'Invoice · unpaid' })}
              </div>
            </div>
          ),
        )}
      </div>
    )
  }

  const event = (m: number, icon: ReactNode, text: string, tone: string) => (
    <span
      data-ev={m}
      className={cn(
        'inline-flex w-full max-w-[11rem] items-start gap-1 rounded-lg border bg-card px-1.5 py-1 text-[10px] leading-snug shadow-sm sm:text-[11px]',
        tone,
      )}
    >
      <span className="mt-px shrink-0">{icon}</span>
      <span className="min-w-0 text-foreground/85">{text}</span>
    </span>
  )

  return (
    <DiagramFrame
      title={{ fa: 'مبنای نقدی در برابر مبنای تعهدی', en: 'Cash basis vs accrual basis' }}
      caption={caption}
      badge="interactive"
      onReplay={replay}
    >
      <div ref={scope} className="space-y-3 sm:space-y-4">
        {/* month header */}
        <div className="grid sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:gap-4">
          <div className="hidden sm:block" />
          <div className="grid grid-cols-3">
            {MONTHS.map((m) => (
              <div key={m} data-anim="mhead" className="text-center text-xs font-semibold text-muted-foreground">
                {tr({ fa: `ماه ${m}`, en: `Month ${m}` })}
              </div>
            ))}
          </div>
        </div>

        {/* what happened */}
        <div data-anim="lane" className="grid gap-2 sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:items-center sm:gap-4">
          {laneLabel(
            tr({ fa: 'چه اتفاقی افتاد؟', en: 'What happened' }),
            tr({ fa: 'رویدادهای واقعی کسب‌وکار', en: 'The real business events' }),
            'bg-muted-foreground/60',
          )}
          {track([
            <div key={1} className="flex w-full flex-col items-center gap-1 pt-2">
              {event(1, <Briefcase className="size-3 text-revenue" />, tr({ fa: `پروژه انجام و فاکتور شد: ${money(REVENUE)}`, en: `Project done & invoiced: ${money(REVENUE)}` }), '')}
              {event(1, <KeyRound className="size-3 text-expense" />, tr({ fa: `اجاره ۳ ماه پیشاپیش پرداخت شد: ${money(RENT)}`, en: `3 months’ rent paid upfront: ${money(RENT)}` }), '')}
            </div>,
            <div key={2} className="flex w-full flex-col items-center gap-1 pt-2">
              {event(2, <HandCoins className="size-3 text-asset" />, tr({ fa: `مشتری ${money(REVENUE)} پرداخت کرد`, en: `Customer pays ${money(REVENUE)}` }), '')}
            </div>,
            <div key={3} className="flex w-full flex-col items-center gap-1 pt-2">
              {event(3, <CalendarCheck className="size-3 text-muted-foreground" />, tr({ fa: 'پایان دوره اجاره', en: 'Rent period ends' }), '')}
            </div>,
          ])}
        </div>

        {lane('accrual')}
        {lane('cash')}

        <div data-anim="insight" className="flex items-start gap-3 rounded-xl border border-dashed bg-background/60 p-3 text-sm leading-relaxed sm:p-4">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
            <Scale className="size-4" />
          </span>
          <Rich
            className="text-muted-foreground"
            text={{
              fa: `هر دو مبنا در مجموع سه ماه **همان ${money(TOTAL)} سود** را نشان می‌دهند؛ تفاوت فقط در **زمان شناسایی** است. مبنای تعهدی درآمد را در ماهی که کسب شده و اجاره را در ماه‌هایی که از آن استفاده شده ثبت می‌کند (اصل تطابق)؛ مبنای نقدی فقط ورود و خروج وجه نقد را دنبال می‌کند.`,
              en: `Both bases report **the same ${money(TOTAL)} profit** over the three months, they only disagree on **timing**. Accrual records revenue in the month it is earned and spreads the rent over the months it covers (matching); the cash basis simply follows the bank account.`,
            }}
          />
        </div>
      </div>
    </DiagramFrame>
  )
}
