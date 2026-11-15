import { Fragment, useRef } from 'react'
import { CircleCheck, Hourglass, Lock } from 'lucide-react'

import { AnimatedNumber } from '@/components/ui/AnimatedNumber'
import type { L } from '@/content/types'
import { novaAccounts, novaTransactions } from '@/content/nova'
import { useI18n } from '@/i18n/I18nProvider'
import { gsap } from '@/lib/gsap'
import { computeBalances, equation } from '@/lib/ledger'
import { cn } from '@/lib/utils'
import { DiagramFrame, useInViewTimeline, type DiagramProps } from './DiagramFrame'
import { DeltaPill } from './parts'

/** Month-end (unadjusted) figures of the running example. */
const EQ = equation(computeBalances(novaAccounts, novaTransactions))

type Tone = 'asset' | 'liability' | 'equity' | 'revenue' | 'expense'
const TONE: Record<Tone, { text: string; soft: string; border: string; solid: string }> = {
  asset: { text: 'text-asset', soft: 'bg-asset/10', border: '', solid: 'bg-asset' },
  liability: { text: 'text-liability', soft: 'bg-liability/10', border: '', solid: 'bg-liability' },
  equity: { text: 'text-equity', soft: 'bg-equity/10', border: '', solid: 'bg-equity' },
  revenue: { text: 'text-revenue', soft: 'bg-revenue/10', border: '', solid: 'bg-revenue' },
  expense: { text: 'text-expense', soft: 'bg-expense/10', border: '', solid: 'bg-expense' },
}

type Part = { key: string; sign: '+' | '−'; tone: Tone; label: L; note: L; amount: number; permanent: boolean }

const PARTS: Part[] = [
  {
    key: 'capital',
    sign: '+',
    tone: 'equity',
    label: { fa: 'سرمایه', en: 'Capital' },
    note: { fa: 'آورده مالک', en: 'Owner’s investment' },
    amount: EQ.capital,
    permanent: true,
  },
  {
    key: 'drawings',
    sign: '−',
    tone: 'equity',
    label: { fa: 'برداشت', en: 'Drawings' },
    note: { fa: 'برداشت شخصی مالک', en: 'Owner’s withdrawals' },
    amount: EQ.drawings,
    permanent: false,
  },
  {
    key: 'revenue',
    sign: '+',
    tone: 'revenue',
    label: { fa: 'درآمد', en: 'Revenue' },
    note: { fa: 'خدمات ارائه‌شده', en: 'Services delivered' },
    amount: EQ.revenue,
    permanent: false,
  },
  {
    key: 'expenses',
    sign: '−',
    tone: 'expense',
    label: { fa: 'هزینه‌ها', en: 'Expenses' },
    note: { fa: 'اجاره و حقوق', en: 'Rent & salaries' },
    amount: EQ.expenses,
    permanent: false,
  },
]

export default function ExpandedEquation({ caption }: DiagramProps) {
  const { tr, t, lang, money } = useI18n()
  const scope = useRef<HTMLDivElement>(null)

  const { replay } = useInViewTimeline(
    scope,
    (tl, el) => {
      // measure before any tween touches the layout: the components fly out of the Equity chip
      const src = el.querySelector('[data-anim="eqchip"]')?.getBoundingClientRect()
      const parts = gsap.utils.toArray<HTMLElement>('[data-anim="part"]', el)
      const offsets = parts.map((p) => {
        const r = p.getBoundingClientRect()
        if (!src) return { x: 0, y: 0 }
        return { x: src.left + src.width / 2 - (r.left + r.width / 2), y: src.top + src.height / 2 - (r.top + r.height / 2) }
      })

      tl.from('[data-anim="top"]', { y: 24, opacity: 0, stagger: 0.12, duration: 0.6 })
        .from('[data-anim="op"]', { scale: 0, rotate: -90, opacity: 0, stagger: 0.1, duration: 0.45, ease: 'back.out(2)' }, '-=0.35')
        .to('[data-anim="eqchip"]', { scale: 1.07, duration: 0.25, yoyo: true, repeat: 1, ease: 'power1.inOut' }, '+=0.25')
        .from('[data-anim="stem"]', { scaleY: 0, duration: 0.3, ease: 'power2.out' })
        .from('[data-anim="box"]', { opacity: 0, duration: 0.4 }, '-=0.05')
      parts.forEach((p, i) => {
        tl.from(
          p,
          { x: offsets[i].x, y: offsets[i].y, scale: 0.35, opacity: 0, duration: 0.8, ease: 'power3.out' },
          i === 0 ? '-=0.2' : '<0.12',
        )
      })
      tl.from('[data-anim="tag"]', { y: 6, opacity: 0, stagger: 0.04, duration: 0.35 }, '-=0.25')
        .from('[data-anim="check"]', { y: 10, opacity: 0, stagger: 0.25, duration: 0.5 }, '+=0.1')
        .from('[data-anim="ok"]', { scale: 0, opacity: 0, duration: 0.55, ease: 'back.out(2.5)' }, '-=0.1')
    },
    [lang],
  )

  const tok = (s: string, cls?: string) => <span className={cn('tabular', cls)}>{s}</span>
  const op = (s: string) => <span className="px-0.5 font-semibold text-muted-foreground">{s}</span>

  return (
    <DiagramFrame
      title={{ fa: 'معادله حسابداری گسترش‌یافته', en: 'The expanded accounting equation' }}
      caption={caption}
      onReplay={replay}
    >
      <div ref={scope} className="@container mx-auto max-w-3xl">
        {/* A = L + E */}
        <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-1.5 sm:gap-x-3">
          <TopChip tone="asset" label={t('table.assets')} value={EQ.assets} />
          <span data-anim="op" className="grid size-7 place-items-center rounded-full bg-foreground text-base font-bold text-background sm:size-9 sm:text-lg">
            =
          </span>
          <TopChip tone="liability" label={t('table.liabilities')} value={EQ.liabilities} />
          <span data-anim="op" className="grid size-7 place-items-center rounded-full bg-foreground text-base font-bold text-background sm:size-9 sm:text-lg">
            +
          </span>
          <TopChip tone="equity" label={t('table.equity')} value={EQ.equity} anim="eqchip" />

          {/* stem from Equity down to its breakdown (same grid column) */}
          <span data-anim="stem" aria-hidden className="col-start-5 mx-auto block h-6 w-0.5 origin-top rounded-full bg-equity/50" />
        </div>

        {/* Equity breakdown */}
        <div data-anim="box" className="rounded-2xl border border-dashed bg-equity/5 p-2.5 sm:p-4">
          <div className="mb-2.5 text-center text-xs font-semibold text-equity sm:text-sm">
            {tr({ fa: 'حقوق مالکانه از چهار جزء ساخته می‌شود', en: 'Equity is built from four parts' })}
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-3 @xl:grid-cols-4">
            {PARTS.map((p) => {
              const tone = TONE[p.tone]
              const up = p.sign === '+'
              return (
                <div key={p.key} data-anim="part" className={cn('flex min-w-0 flex-col rounded-xl border bg-card p-2.5 sm:p-3', tone.border)}>
                  <div className="flex items-center gap-2">
                    <span
                      className={cn('grid size-6 shrink-0 place-items-center rounded-full text-sm font-bold text-background', tone.solid)}
                      aria-hidden
                    >
                      {p.sign}
                    </span>
                    <span className={cn('truncate text-sm font-bold', tone.text)}>{tr(p.label)}</span>
                  </div>
                  <AnimatedNumber value={p.amount} inView className="mt-1.5 text-lg font-bold sm:text-xl" />
                  <div className="text-[11px] text-muted-foreground">{tr(p.note)}</div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <span data-anim="tag">
                      <DeltaPill up={up}>
                        {up
                          ? tr({ fa: 'افزایش حقوق مالکانه', en: 'Increases equity' })
                          : tr({ fa: 'کاهش حقوق مالکانه', en: 'Decreases equity' })}
                      </DeltaPill>
                    </span>
                    <span
                      data-anim="tag"
                      className={cn(
                        'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium leading-5',
                        p.permanent ? 'border-foreground/25 text-foreground/80' : 'border-dashed  text-foreground/80',
                      )}
                    >
                      {p.permanent ? <Lock className="size-3" /> : <Hourglass className="size-3" />}
                      {p.permanent ? tr({ fa: 'دائمی', en: 'Permanent' }) : tr({ fa: 'موقت', en: 'Temporary' })}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="mt-2.5 text-center text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
            {tr({
              fa: 'حساب‌های موقت در پایان دوره با ثبت‌های بستن حساب‌ها صفر می‌شوند و مانده‌شان به سرمایه منتقل می‌شود؛ سرمایه حسابی دائمی است و مانده‌اش به دوره بعد می‌رود.',
              en: 'Temporary accounts are reset to zero by closing entries at period end and their balances move into capital; capital is permanent and carries forward.',
            })}
          </p>
        </div>

        {/* totals check */}
        <div className="mt-4 space-y-2 rounded-xl border bg-background/70 p-3 text-xs sm:text-sm">
          <div data-anim="check" className="flex flex-wrap items-center gap-x-1 gap-y-1">
            <span className="me-1 font-semibold text-equity">{t('table.equity')}</span>
            {op('=')}
            {PARTS.map((p, i) => (
              <Fragment key={p.key}>
                {i > 0 && op(p.sign)}
                {tok(money(p.amount))}
              </Fragment>
            ))}
            {op('=')}
            {tok(money(EQ.equity), 'font-bold text-equity')}
          </div>
          <div data-anim="check" className="flex flex-wrap items-center gap-x-1 gap-y-1">
            <span className="me-1 font-semibold">
              <span className="text-liability">{t('table.liabilities')}</span> + <span className="text-equity">{t('table.equity')}</span>
            </span>
            {op('=')}
            {tok(money(EQ.liabilities), 'text-liability')}
            {op('+')}
            {tok(money(EQ.equity), 'text-equity')}
            {op('=')}
            {tok(money(EQ.liabilities + EQ.equity), 'font-bold')}
            {op('=')}
            <span className="font-semibold text-asset">
              {t('table.assets')} {tok(money(EQ.assets))}
            </span>
            <span
              data-anim="ok"
              className="ms-auto inline-flex items-center gap-1 rounded-full bg-primary/12 px-2.5 py-0.5 text-xs font-semibold text-primary"
            >
              <CircleCheck className="size-3.5" />
              {t('table.balanced')}
            </span>
          </div>
        </div>
      </div>
    </DiagramFrame>
  )
}

function TopChip({ tone, label, value, anim = 'top' }: { tone: Tone; label: string; value: number; anim?: string }) {
  const c = TONE[tone]
  return (
    <div data-anim="top" className="min-w-0">
      <div
        data-anim={anim === 'top' ? undefined : anim}
        className={cn('rounded-2xl border px-1.5 py-2 text-center sm:px-3 sm:py-3', c.border, c.soft)}
      >
        <div className={cn('truncate text-[11px] font-semibold sm:text-sm', c.text)}>{label}</div>
        <AnimatedNumber value={value} inView className="text-sm font-bold sm:text-xl" />
      </div>
    </div>
  )
}
