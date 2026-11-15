import { useId, useRef, useState, type ComponentType } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import {
  ArrowDown,
  ArrowUp,
  BadgeCheck,
  Banknote,
  ChevronDown,
  Hourglass,
  Info,
  NotebookPen,
  Receipt,
  Timer,
  Wallet,
} from 'lucide-react'

import type { L } from '@/content/types'
import { labExtras, novaAccountMap, novaAdjustments } from '@/content/nova'
import { useI18n } from '@/i18n/I18nProvider'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import { DiagramFrame, useInViewTimeline, type DiagramProps } from './DiagramFrame'

type CellId = 'prepaid' | 'accruedExp' | 'unearned' | 'accruedRev'
type AccTone = 'asset' | 'liability' | 'expense' | 'revenue'
type EventKind = 'cash' | 'expense' | 'revenue'

type Cell = {
  id: CellId
  row: 'expense' | 'revenue'
  col: 'deferral' | 'accrual'
  icon: ComponentType<{ className?: string }>
  title: L
  tagline: L
  first: { kind: EventKind; label: L }
  second: { kind: EventKind; label: L }
  template: { dr: { tone: AccTone; label: L; up: boolean }; cr: { tone: AccTone; label: L; up: boolean } }
  example: { dr: string; cr: string; amount: number; story: (m: (n: number) => string) => L; skip: L }
}

const adj = (id: string) => novaAdjustments.find((a) => a.id === id)!.lines[0].debit ?? 0
const ADVANCE = labExtras.find((x) => x.id === 'x1')!.lines[0].debit ?? 0 // 1,800 advance from a client
const EARNED = ADVANCE / 3 // one third of the work done by month-end → 600
const INSURANCE_POLICY = 1200

/** Row-major: (expense, deferral) (expense, accrual) / (revenue, deferral) (revenue, accrual) */
const CELLS: Cell[] = [
  {
    id: 'prepaid',
    row: 'expense',
    col: 'deferral',
    icon: Hourglass,
    title: { fa: 'پیش‌پرداخت هزینه', en: 'Prepaid expense' },
    tagline: { fa: 'اول پرداخت، بعد مصرف', en: 'Pay now, use it up later' },
    first: { kind: 'cash', label: { fa: 'پرداخت وجه', en: 'Cash paid' } },
    second: { kind: 'expense', label: { fa: 'مصرف به‌مرور', en: 'Used up over time' } },
    template: {
      dr: { tone: 'expense', label: { fa: 'هزینه', en: 'Expense' }, up: true },
      cr: { tone: 'asset', label: { fa: 'دارایی (پیش‌پرداخت)', en: 'Asset (prepaid)' }, up: false },
    },
    example: {
      dr: 'insexp',
      cr: 'prepaid',
      amount: adj('a1'),
      story: (m) => ({
        fa: `روز ۵ نوا ${m(INSURANCE_POLICY)} بابت بیمه ۱۲ ماهه پرداخت کرد. در پایان ماه یک ماه از آن (${m(adj('a1'))}) منقضی شده و باید به هزینه برود.`,
        en: `On day 5 Nova paid ${m(INSURANCE_POLICY)} for 12 months of insurance. By month-end one month (${m(adj('a1'))}) has expired and becomes expense.`,
      }),
      skip: {
        fa: 'اگر ثبت نشود: دارایی‌ها بیشتر و هزینه‌ها کمتر از واقع (سود بیش از واقع).',
        en: 'If skipped: assets overstated, expenses understated (profit too high).',
      },
    },
  },
  {
    id: 'accruedExp',
    row: 'expense',
    col: 'accrual',
    icon: Timer,
    title: { fa: 'هزینه تحقق‌یافته پرداخت‌نشده', en: 'Accrued expense' },
    tagline: { fa: 'اول هزینه، بعد پرداخت', en: 'Incur it now, pay later' },
    first: { kind: 'expense', label: { fa: 'تحقق هزینه', en: 'Expense incurred' } },
    second: { kind: 'cash', label: { fa: 'پرداخت بعدی', en: 'Cash paid later' } },
    template: {
      dr: { tone: 'expense', label: { fa: 'هزینه', en: 'Expense' }, up: true },
      cr: { tone: 'liability', label: { fa: 'بدهی (پرداختنی)', en: 'Liability (payable)' }, up: true },
    },
    example: {
      dr: 'salaries',
      cr: 'salpay',
      amount: adj('a4'),
      story: (m) => ({
        fa: `کارکنان در روزهای پایانی ماه ${m(adj('a4'))} حقوق کسب کرده‌اند، ولی روز پرداخت حقوق ماه بعد است.`,
        en: `Staff earned ${m(adj('a4'))} of salaries in the last days of the month, but payday falls next month.`,
      }),
      skip: {
        fa: 'اگر ثبت نشود: بدهی‌ها و هزینه‌ها کمتر از واقع (سود بیش از واقع).',
        en: 'If skipped: liabilities and expenses understated (profit too high).',
      },
    },
  },
  {
    id: 'unearned',
    row: 'revenue',
    col: 'deferral',
    icon: Wallet,
    title: { fa: 'پیش‌دریافت درآمد', en: 'Unearned revenue' },
    tagline: { fa: 'اول دریافت، بعد کسب', en: 'Get paid now, earn it later' },
    first: { kind: 'cash', label: { fa: 'دریافت وجه', en: 'Cash received' } },
    second: { kind: 'revenue', label: { fa: 'کسب به‌مرور', en: 'Earned over time' } },
    template: {
      dr: { tone: 'liability', label: { fa: 'بدهی (پیش‌دریافت)', en: 'Liability (unearned)' }, up: false },
      cr: { tone: 'revenue', label: { fa: 'درآمد', en: 'Revenue' }, up: true },
    },
    example: {
      dr: 'unearned',
      cr: 'revenue',
      amount: EARNED,
      story: (m) => ({
        fa: `مشتری ${m(ADVANCE)} پیش‌پرداخت برای یک پروژه داد. تا پایان ماه یک‌سوم کار (${m(EARNED)}) انجام شده است.`,
        en: `A client paid a ${m(ADVANCE)} advance for a project. By month-end one third of the work (${m(EARNED)}) is done.`,
      }),
      skip: {
        fa: 'اگر ثبت نشود: بدهی‌ها بیشتر و درآمد کمتر از واقع گزارش می‌شود.',
        en: 'If skipped: liabilities overstated, revenue understated.',
      },
    },
  },
  {
    id: 'accruedRev',
    row: 'revenue',
    col: 'accrual',
    icon: BadgeCheck,
    title: { fa: 'درآمد تحقق‌یافته دریافت‌نشده', en: 'Accrued revenue' },
    tagline: { fa: 'اول کسب، بعد دریافت', en: 'Earn it now, collect later' },
    first: { kind: 'revenue', label: { fa: 'کسب درآمد', en: 'Revenue earned' } },
    second: { kind: 'cash', label: { fa: 'دریافت بعدی', en: 'Cash received later' } },
    template: {
      dr: { tone: 'asset', label: { fa: 'دارایی (دریافتنی)', en: 'Asset (receivable)' }, up: true },
      cr: { tone: 'revenue', label: { fa: 'درآمد', en: 'Revenue' }, up: true },
    },
    example: {
      dr: 'ar',
      cr: 'revenue',
      amount: adj('a5'),
      story: (m) => ({
        fa: `نوا ${m(adj('a5'))} خدمات طراحی انجام داده که هنوز صورت‌حساب آن صادر نشده است.`,
        en: `Nova has completed ${m(adj('a5'))} of design work that has not been billed yet.`,
      }),
      skip: {
        fa: 'اگر ثبت نشود: دارایی‌ها و درآمد کمتر از واقع گزارش می‌شود.',
        en: 'If skipped: assets and revenue understated.',
      },
    },
  },
]

const CHIP: Record<AccTone, string> = {
  asset: 'bg-asset/12 text-asset',
  liability: 'bg-liability/12 text-liability',
  expense: 'bg-expense/14 text-expense',
  revenue: 'bg-revenue/14 text-revenue',
}
const CELL_TONE: Record<Cell['row'], { idle: string; active: string; icon: string }> = {
  expense: {
    idle: ' bg-expense/4',
    active: ' bg-expense/8 shadow-[0_12px_30px_-18px_var(--expense)] ring-1 ring-foreground/10',
    icon: 'bg-expense/15 text-expense',
  },
  revenue: {
    idle: ' bg-revenue/4',
    active: ' bg-revenue/8 shadow-[0_12px_30px_-18px_var(--revenue)] ring-1 ring-foreground/10',
    icon: 'bg-revenue/15 text-revenue',
  },
}
const EVENT: Record<EventKind, { icon: ComponentType<{ className?: string }>; dot: string }> = {
  cash: { icon: Banknote, dot: 'bg-gold/25 text-foreground ring-foreground/10' },
  expense: { icon: Receipt, dot: 'bg-expense/15 text-expense ring-foreground/10' },
  revenue: { icon: BadgeCheck, dot: 'bg-revenue/15 text-revenue ring-foreground/10' },
}

export default function AdjustingTypes({ caption }: DiagramProps) {
  const { t, tr, money, lang, isFa } = useI18n()
  const scope = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<CellId>('prepaid')
  const reduce = useReducedMotion()
  const uid = useId()

  const { replay } = useInViewTimeline(
    scope,
    (tl) => {
      tl.from('[data-anim="head"]', { y: -10, autoAlpha: 0, stagger: 0.08, duration: 0.45 })
        .from('[data-cell]', { y: 26, autoAlpha: 0, scale: 0.96, stagger: 0.14, duration: 0.6 }, '-=0.2')
        .from(
          '[data-line]',
          { scaleX: 0, transformOrigin: isFa ? '100% 50%' : '0% 50%', stagger: 0.05, duration: 0.45, ease: 'power2.out' },
          '-=0.35',
        )
        .from('[data-dot]', { scale: 0, autoAlpha: 0, stagger: 0.05, duration: 0.45, ease: 'back.out(3)' }, '<')
        .from('[data-me]', { y: -10, autoAlpha: 0, stagger: 0.06, duration: 0.4 }, '-=0.3')
        .from('[data-anim="note"]', { y: 12, autoAlpha: 0, duration: 0.5 }, '-=0.1')
    },
    [lang],
  )

  // when a cell is selected: pulse its month-end marker and slide its entry lines in
  const prevActive = useRef<CellId>(active)
  useGSAP(
    () => {
      if (prevActive.current === active) return
      prevActive.current = active
      if (prefersReducedMotion()) return
      const cell = scope.current?.querySelector(`[data-cell="${active}"]`)
      if (!cell) return
      const q = gsap.utils.selector(cell)
      gsap.fromTo(q('[data-me] [data-pin]'), { scale: 1 }, { scale: 1.6, duration: 0.25, yoyo: true, repeat: 1, ease: 'power2.out' })
      gsap.from(q('[data-entry-line]'), { x: isFa ? 16 : -16, autoAlpha: 0, stagger: 0.1, duration: 0.45, delay: 0.1 })
    },
    { scope, dependencies: [active, lang], revertOnUpdate: true },
  )

  const accName = (id: string) => tr(novaAccountMap.get(id)!.name)

  const eventDot = (e: Cell['first']) => {
    const Icon = EVENT[e.kind].icon
    return (
      <span className="flex w-[4.5rem] shrink-0 flex-col items-center gap-1 text-center">
        <span data-dot className={cn('grid size-7 place-items-center rounded-full ring-1', EVENT[e.kind].dot)}>
          <Icon className="size-3.5" />
        </span>
        <span className="text-[10px] leading-tight text-muted-foreground">{tr(e.label)}</span>
      </span>
    )
  }

  const renderCell = (cell: Cell) => {
    const isActive = active === cell.id
    const tone = CELL_TONE[cell.row]
    const Icon = cell.icon
    const detailId = `${uid}-${cell.id}`
    const tpl = (side: 'dr' | 'cr') => {
      const x = cell.template[side]
      const Arrow = x.up ? ArrowUp : ArrowDown
      return (
        <div className={cn('flex items-center gap-2', side === 'cr' && 'ps-5')}>
          <span className={cn('w-14 shrink-0 text-[10px] font-semibold', side === 'dr' ? 'text-debit' : 'text-credit')}>
            {side === 'dr' ? t('table.debit') : t('table.credit')}
          </span>
          <span className={cn('inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-semibold', CHIP[x.tone])}>
            {tr(x.label)}
            <Arrow className="size-3" aria-label={x.up ? tr({ fa: 'افزایش', en: 'increase' }) : tr({ fa: 'کاهش', en: 'decrease' })} />
          </span>
        </div>
      )
    }
    return (
      <article
        key={cell.id}
        data-cell={cell.id}
        onPointerEnter={(e) => {
          if (e.pointerType === 'mouse') setActive(cell.id)
        }}
        onClick={() => setActive(cell.id)}
        className={cn(
          'relative flex min-w-0 cursor-pointer flex-col gap-3 rounded-2xl border p-3 transition-[background-color,border-color,box-shadow] duration-300 sm:p-4',
          isActive ? tone.active : tone.idle,
        )}
      >
        <button
          type="button"
          aria-expanded={isActive}
          aria-controls={detailId}
          className="flex items-start gap-2.5 rounded-lg text-start focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <span className={cn('grid size-9 shrink-0 place-items-center rounded-xl', tone.icon)}>
            <Icon className="size-4.5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm leading-snug font-bold sm:text-[15px]">{tr(cell.title)}</span>
            <span className="block text-[11px] text-muted-foreground">{tr(cell.tagline)}</span>
            {/* row / column tags, only needed when the matrix collapses to one column */}
            <span className="mt-1 flex flex-wrap gap-1 sm:hidden">
              <span className="rounded-full bg-muted px-1.5 py-px text-[10px]">{rowLabel(cell.row)}</span>
              <span className="rounded-full bg-muted px-1.5 py-px text-[10px]">{colLabel(cell.col).title}</span>
            </span>
          </span>
          <ChevronDown className={cn('mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-300', isActive && 'rotate-180')} />
        </button>

        {/* mini timeline: first event → month-end adjustment → second event (flows in reading direction) */}
        <div className="flex items-start" aria-hidden>
          {eventDot(cell.first)}
          <span data-line className="mt-3.5 h-0.5 flex-1 rounded bg-foreground/20" />
          <span data-me className="flex shrink-0 flex-col items-center px-1">
            <span className="relative grid h-7 place-items-center">
              <span className="absolute inset-y-0 w-0 border-s border-dashed " />
              <span data-pin className="relative grid size-4 place-items-center rounded-full bg-primary text-primary-foreground">
                <NotebookPen className="size-2.5" />
              </span>
            </span>
            <span className="mt-1 text-[10px] leading-tight font-medium whitespace-nowrap text-primary">
              {tr({ fa: 'پایان ماه', en: 'Month-end' })}
            </span>
          </span>
          <span data-line className="mt-3.5 h-0.5 flex-1 rounded bg-foreground/20" />
          {eventDot(cell.second)}
        </div>

        {/* adjusting-entry template */}
        <div className="space-y-1 rounded-xl bg-background/70 p-2.5">
          <div className="mb-1 text-[10px] font-medium text-muted-foreground">{tr({ fa: 'الگوی ثبت اصلاحی', en: 'Adjusting entry pattern' })}</div>
          {tpl('dr')}
          {tpl('cr')}
        </div>

        {/* detail: expands for the selected cell */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              id={detailId}
              key="detail"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-2 border-t pt-3">
                <p className="text-xs leading-relaxed text-foreground/85">{tr(cell.example.story(money))}</p>
                <div className="rounded-lg border bg-card px-2.5 py-2 text-xs tabular">
                  <div data-entry-line className="flex items-center justify-between gap-2">
                    <span>
                      <span className="me-1.5 text-[10px] font-semibold text-debit">{t('table.debit')}</span>
                      {accName(cell.example.dr)}
                    </span>
                    <span className="font-semibold">{money(cell.example.amount)}</span>
                  </div>
                  <div data-entry-line className="mt-1 flex items-center justify-between gap-2 ps-5">
                    <span>
                      <span className="me-1.5 text-[10px] font-semibold text-credit">{t('table.credit')}</span>
                      {accName(cell.example.cr)}
                    </span>
                    <span className="font-semibold">{money(cell.example.amount)}</span>
                  </div>
                </div>
                <p className="flex items-start gap-1.5 text-[11px] leading-relaxed text-muted-foreground">
                  <Info className="mt-0.5 size-3.5 shrink-0" />
                  {tr(cell.example.skip)}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    )
  }

  function rowLabel(row: Cell['row']) {
    return row === 'expense' ? tr({ fa: 'هزینه', en: 'Expense' }) : tr({ fa: 'درآمد', en: 'Revenue' })
  }
  function colLabel(col: Cell['col']) {
    return col === 'deferral'
      ? { title: tr({ fa: 'اول وجه نقد', en: 'Cash first' }), sub: tr({ fa: 'اقلام انتقالی (معوق)', en: 'Deferral' }) }
      : { title: tr({ fa: 'اول شناسایی', en: 'Recognition first' }), sub: tr({ fa: 'اقلام تعهدی', en: 'Accrual' }) }
  }

  const rows: Cell['row'][] = ['expense', 'revenue']

  return (
    <DiagramFrame
      title={{ fa: 'چهار نوع ثبت اصلاحی', en: 'The four types of adjusting entries' }}
      caption={caption}
      badge="interactive"
      onReplay={replay}
    >
      <div ref={scope}>
        <div className="grid gap-3 sm:grid-cols-[4.5rem_minmax(0,1fr)_minmax(0,1fr)] sm:gap-4">
          {/* column headers */}
          <div className="hidden sm:block" />
          {(['deferral', 'accrual'] as const).map((col) => {
            const c = colLabel(col)
            return (
              <div key={col} data-anim="head" className="hidden rounded-xl bg-muted/60 px-3 py-2 text-center sm:block">
                <div className="text-sm font-bold">{c.title}</div>
                <div className="text-[11px] text-muted-foreground">{c.sub}</div>
              </div>
            )
          })}

          {rows.map((row) => (
            <div key={row} className="contents">
              <div data-anim="head" className="hidden items-center justify-center sm:flex">
                <span
                  className={cn(
                    'rounded-xl px-2 py-1.5 text-center text-xs font-bold',
                    row === 'expense' ? 'bg-expense/12 text-expense' : 'bg-revenue/12 text-revenue',
                  )}
                >
                  {rowLabel(row)}
                </span>
              </div>
              {CELLS.filter((c) => c.row === row).map(renderCell)}
            </div>
          ))}
        </div>

        <p
          data-anim="note"
          className="mx-auto mt-5 flex max-w-2xl items-start gap-2 rounded-xl border border-dashed bg-background/60 p-3 text-xs leading-relaxed text-muted-foreground sm:text-sm"
        >
          <NotebookPen className="mt-0.5 size-4 shrink-0 text-primary" />
          {tr({
            fa: 'هر ثبت اصلاحی یک حساب سود و زیانی (درآمد یا هزینه) را با یک حساب ترازنامه‌ای (دارایی یا بدهی) جفت می‌کند، و هرگز به حساب موجودی نقد دست نمی‌زند.',
            en: 'Every adjusting entry pairs one income-statement account (revenue or expense) with one balance-sheet account (asset or liability): and never touches Cash.',
          })}
        </p>
      </div>
    </DiagramFrame>
  )
}
