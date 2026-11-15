import { Fragment, useId, useRef, useState } from 'react'
import { Lightbulb, Star } from 'lucide-react'

import { Switch } from '@/components/animate-ui/components/radix/switch'
import type { L } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'
import type { Side } from '@/lib/ledger'
import { cn } from '@/lib/utils'
import { DiagramFrame, useInViewTimeline, type DiagramProps } from './DiagramFrame'
import { DeltaPill } from './parts'

type Tone = 'asset' | 'liability' | 'equity' | 'revenue' | 'expense'
const DOT: Record<Tone, string> = {
  asset: 'bg-asset',
  liability: 'bg-liability',
  equity: 'bg-equity',
  revenue: 'bg-revenue',
  expense: 'bg-expense',
}

type Row = { key: string; letter: string; tone: Tone; name: L; ex: L; normal: Side }

const ROWS: Row[] = [
  { key: 'asset', letter: 'A', tone: 'asset', name: { fa: 'دارایی', en: 'Asset' }, ex: { fa: 'نقد، تجهیزات', en: 'Cash, equipment' }, normal: 'debit' },
  { key: 'expense', letter: 'E', tone: 'expense', name: { fa: 'هزینه', en: 'Expense' }, ex: { fa: 'اجاره، حقوق', en: 'Rent, salaries' }, normal: 'debit' },
  { key: 'drawings', letter: 'D', tone: 'equity', name: { fa: 'برداشت', en: 'Drawings' }, ex: { fa: 'برداشت مالک', en: 'Owner withdrawals' }, normal: 'debit' },
  { key: 'liability', letter: 'L', tone: 'liability', name: { fa: 'بدهی', en: 'Liability' }, ex: { fa: 'پرداختنی‌ها، وام', en: 'Payables, loans' }, normal: 'credit' },
  { key: 'capital', letter: 'E', tone: 'equity', name: { fa: 'سرمایه (حقوق مالکانه)', en: 'Equity / Capital' }, ex: { fa: 'سرمایه مالک', en: 'Owner’s capital' }, normal: 'credit' },
  { key: 'revenue', letter: 'R', tone: 'revenue', name: { fa: 'درآمد', en: 'Revenue' }, ex: { fa: 'درآمد خدمات', en: 'Service revenue' }, normal: 'credit' },
]

/** Mnemonic order: D·E·A under Debit, L·E·R under Credit (source row keys). */
const MNEMONIC: Record<Side, string[]> = {
  debit: ['drawings', 'expense', 'asset'],
  credit: ['liability', 'capital', 'revenue'],
}
const rowByKey = new Map(ROWS.map((r) => [r.key, r]))

export default function DebitCreditRules({ caption }: DiagramProps) {
  const { tr, t, lang, isFa } = useI18n()
  const scope = useRef<HTMLDivElement>(null)
  const [mn, setMn] = useState(false)
  const switchId = useId()

  const { replay } = useInViewTimeline(
    scope,
    (tl) => {
      tl.from('[data-anim="head"]', { y: -8, opacity: 0, stagger: 0.08, duration: 0.4 })
        .from('[data-anim="row"]', { x: isFa ? 40 : -40, opacity: 0, stagger: 0.09, duration: 0.55 }, '-=0.1')
        .from('[data-anim="pill"]', { scale: 0.6, opacity: 0, stagger: 0.03, duration: 0.35, ease: 'back.out(2)' }, '-=0.45')
        .from('[data-anim="star"]', { scale: 0, rotate: -120, stagger: 0.06, duration: 0.5, ease: 'back.out(2.5)' }, '-=0.15')
        .from('[data-anim="foot"]', { y: 8, opacity: 0, duration: 0.4 }, '-=0.2')
    },
    [lang],
  )

  // DEA-LER: each letter flies from its row badge into the Debit / Credit group
  useGSAP(
    () => {
      const root = scope.current
      if (!mn || !root || prefersReducedMotion()) return
      const letters = gsap.utils.toArray<HTMLElement>('[data-mn]', root)
      const deltas = letters.map((el) => {
        const src = root.querySelector(`[data-src="${el.dataset.mn}"]`)
        if (!src) return { x: 0, y: 0 }
        const a = src.getBoundingClientRect()
        const b = el.getBoundingClientRect()
        return { x: a.left + a.width / 2 - (b.left + b.width / 2), y: a.top + a.height / 2 - (b.top + b.height / 2) }
      })
      const tl = gsap.timeline()
      tl.from('[data-anim="mn-box"]', { scaleX: 0.6, opacity: 0, duration: 0.4, stagger: 0.1 })
      letters.forEach((el, i) => {
        tl.from(
          el,
          { x: deltas[i].x, y: deltas[i].y, scale: 0.7, opacity: 0.2, duration: 0.85, ease: 'power3.inOut' },
          i === 0 ? '<0.1' : '<0.09',
        )
      })
      tl.fromTo('[data-src]', { scale: 1.3 }, { scale: 1, duration: 0.5, stagger: 0.05, ease: 'back.out(3)' }, 0)
      tl.from('[data-anim="mn-text"]', { opacity: 0, y: 6, duration: 0.4 }, '-=0.2')
    },
    { scope, dependencies: [mn, lang] },
  )

  const cell = (row: Row, side: Side) => {
    const up = row.normal === side
    return (
      <div className="flex items-center justify-center">
        <span className="relative inline-flex">
          <span data-anim="pill">
            <DeltaPill up={up} className="px-1.5 text-[10px] sm:px-2 sm:text-[11px]">
              {up ? tr({ fa: 'افزایش', en: 'Increase' }) : tr({ fa: 'کاهش', en: 'Decrease' })}
            </DeltaPill>
          </span>
          {up && (
            <Star
              data-anim="star"
              role="img"
              aria-label={tr({ fa: 'ماهیت حساب', en: 'Normal balance' })}
              className="absolute -end-2 -top-2 size-3.5 fill-gold text-gold drop-shadow-sm"
            />
          )}
        </span>
      </div>
    )
  }

  return (
    <DiagramFrame
      title={{ fa: 'قواعد بدهکار و بستانکار', en: 'Debit and credit rules' }}
      caption={caption}
      badge="interactive"
      onReplay={() => {
        setMn(false)
        replay()
      }}
    >
      <div ref={scope} className="mx-auto max-w-2xl">
        <div className="grid grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)] gap-x-1.5 sm:gap-x-3">
          {/* header */}
          <div data-anim="head" className="self-end pb-2 text-[11px] font-medium text-muted-foreground sm:text-xs">
            {tr({ fa: 'نوع حساب', en: 'Account type' })}
          </div>
          <div data-anim="head" className="border-b pb-1.5 text-center">
            <div className="text-sm font-bold text-debit">{t('table.debit')}</div>
            <div className="text-[10px] text-muted-foreground" dir="ltr">
              Dr
            </div>
          </div>
          <div data-anim="head" className="border-b pb-1.5 text-center">
            <div className="text-sm font-bold text-credit">{t('table.credit')}</div>
            <div className="text-[10px] text-muted-foreground" dir="ltr">
              Cr
            </div>
          </div>

          {ROWS.map((row, i) => {
            const debitGroup = row.normal === 'debit'
            return (
              <Fragment key={row.key}>
                {i === 3 && <div aria-hidden className="col-span-3 my-1 h-px bg-border" />}
                <div
                  data-anim="row"
                  className={cn(
                    'col-span-3 mt-1.5 grid grid-cols-subgrid items-center rounded-xl py-2 ps-1.5 sm:ps-2.5',
                    debitGroup ? 'bg-debit/5' : 'bg-credit/5',
                  )}
                >
                  <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
                    <span
                      data-src={row.key}
                      className={cn(
                        'grid size-6 shrink-0 place-items-center rounded-md border text-xs font-bold transition-colors duration-500',
                        mn
                          ? debitGroup
                            ? ' bg-debit text-background'
                            : ' bg-credit text-background'
                          : 'bg-card text-muted-foreground',
                      )}
                      dir="ltr"
                    >
                      {row.letter}
                    </span>
                    <span className={cn('size-2 shrink-0 rounded-full', DOT[row.tone])} aria-hidden />
                    <div className="min-w-0">
                      <div className="text-xs font-semibold leading-tight sm:text-sm">{tr(row.name)}</div>
                      <div className="truncate text-[10px] text-muted-foreground sm:text-[11px]">{tr(row.ex)}</div>
                    </div>
                  </div>
                  {cell(row, 'debit')}
                  {cell(row, 'credit')}
                </div>
              </Fragment>
            )
          })}

          {/* DEA-LER */}
          {mn && (
            <div className="col-span-3 mt-3 grid grid-cols-subgrid items-center">
              <div className="flex items-center gap-1.5 text-xs font-semibold">
                <Lightbulb className="size-4 text-gold" />
                <span dir="ltr">DEA · LER</span>
              </div>
              {(['debit', 'credit'] as const).map((side) => (
                <div
                  key={side}
                  data-anim="mn-box"
                  className={cn(
                    'flex items-center justify-center gap-1 rounded-xl border border-dashed py-1.5',
                    side === 'debit' ? '' : '',
                  )}
                  dir="ltr"
                >
                  {MNEMONIC[side].map((key) => (
                    <span
                      key={key}
                      data-mn={key}
                      className={cn(
                        'grid size-7 place-items-center rounded-lg text-sm font-black text-background shadow-sm sm:size-8 sm:text-base',
                        side === 'debit' ? 'bg-debit' : 'bg-credit',
                      )}
                    >
                      {rowByKey.get(key)?.letter}
                    </span>
                  ))}
                </div>
              ))}
              <p data-anim="mn-text" className="col-span-3 mt-2 text-center text-xs leading-relaxed text-muted-foreground">
                {tr({
                  fa: 'D·E·A، برداشت، هزینه، دارایی، با بدهکار شدن زیاد می‌شوند؛ L·E·R، بدهی، حقوق مالکانه، درآمد، با بستانکار شدن.',
                  en: 'D·E·A, Drawings, Expenses, Assets, grow with a debit; L·E·R, Liabilities, Equity, Revenue, grow with a credit.',
                })}
              </p>
            </div>
          )}
        </div>

        {/* footer: legend + mnemonic switch */}
        <div data-anim="foot" className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t pt-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Star className="size-3.5 fill-gold text-gold" aria-hidden />
            {tr({ fa: 'ماهیت حساب (سمت مانده عادی)', en: 'Normal balance side' })}
          </span>
          <label htmlFor={switchId} className="inline-flex cursor-pointer items-center gap-2 font-medium text-foreground">
            <Switch id={switchId} checked={mn} onCheckedChange={setMn} />
            {tr({ fa: 'نمایش رمز یادآوری DEA-LER', en: 'Show the DEA-LER memory aid' })}
          </label>
        </div>
      </div>
    </DiagramFrame>
  )
}
