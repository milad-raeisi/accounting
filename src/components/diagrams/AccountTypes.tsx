import { useRef, useState } from 'react'
import { ChevronDown, CreditCard, FolderTree, Receipt, TrendingUp, UserRound, Wallet, type LucideIcon } from 'lucide-react'

import type { L } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'
import type { AccountType } from '@/lib/ledger'
import { cn } from '@/lib/utils'
import { DiagramFrame, useInViewTimeline, type DiagramProps } from './DiagramFrame'

const TONE: Record<AccountType, { text: string; soft: string; border: string; solid: string; line: string }> = {
  asset: { text: 'text-asset', soft: 'bg-asset/10', border: '', solid: 'bg-asset', line: 'bg-asset/35' },
  liability: { text: 'text-liability', soft: 'bg-liability/10', border: '', solid: 'bg-liability', line: 'bg-liability/35' },
  equity: { text: 'text-equity', soft: 'bg-equity/10', border: '', solid: 'bg-equity', line: 'bg-equity/35' },
  revenue: { text: 'text-revenue', soft: 'bg-revenue/10', border: '', solid: 'bg-revenue', line: 'bg-revenue/35' },
  expense: { text: 'text-expense', soft: 'bg-expense/10', border: '', solid: 'bg-expense', line: 'bg-expense/35' },
}

type Group = { name: L; accounts: L[]; contra?: boolean }
type Branch = { type: AccountType; icon: LucideIcon; name: L; code: string; statement: 'bs' | 'is'; groups: Group[] }

const TREE: Branch[] = [
  {
    type: 'asset',
    icon: Wallet,
    name: { fa: 'دارایی‌ها', en: 'Assets' },
    code: '1xxx',
    statement: 'bs',
    groups: [
      {
        name: { fa: 'جاری', en: 'Current' },
        accounts: [
          { fa: 'موجودی نقد', en: 'Cash' },
          { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' },
          { fa: 'ملزومات', en: 'Supplies' },
          { fa: 'پیش‌پرداخت بیمه', en: 'Prepaid insurance' },
        ],
      },
      {
        name: { fa: 'غیرجاری', en: 'Non-current' },
        accounts: [
          { fa: 'تجهیزات', en: 'Equipment' },
          { fa: 'زمین و ساختمان', en: 'Land & buildings' },
        ],
      },
      {
        name: { fa: 'کاهنده دارایی', en: 'Contra-asset' },
        contra: true,
        accounts: [
          { fa: 'استهلاک انباشته', en: 'Accumulated depreciation' },
          { fa: 'ذخیره مطالبات مشکوک‌الوصول', en: 'Allowance for doubtful accounts' },
        ],
      },
    ],
  },
  {
    type: 'liability',
    icon: CreditCard,
    name: { fa: 'بدهی‌ها', en: 'Liabilities' },
    code: '2xxx',
    statement: 'bs',
    groups: [
      {
        name: { fa: 'جاری', en: 'Current' },
        accounts: [
          { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
          { fa: 'حقوق پرداختنی', en: 'Salaries payable' },
          { fa: 'پیش‌دریافت درآمد', en: 'Unearned revenue' },
        ],
      },
      {
        name: { fa: 'غیرجاری', en: 'Non-current' },
        accounts: [
          { fa: 'وام بلندمدت', en: 'Long-term loan' },
          { fa: 'اوراق مشارکت پرداختنی', en: 'Bonds payable' },
        ],
      },
    ],
  },
  {
    type: 'equity',
    icon: UserRound,
    name: { fa: 'حقوق مالکانه', en: 'Equity' },
    code: '3xxx',
    statement: 'bs',
    groups: [
      {
        name: { fa: 'سرمایه مالک', en: 'Owner’s equity' },
        accounts: [
          { fa: 'سرمایه سارا', en: 'Capital (Sara)' },
          { fa: 'سود (زیان) انباشته', en: 'Retained earnings' },
        ],
      },
      {
        name: { fa: 'کاهنده و واسط', en: 'Contra & clearing' },
        contra: true,
        accounts: [
          { fa: 'برداشت سارا', en: 'Drawings (Sara)' },
          { fa: 'خلاصه سود و زیان', en: 'Income summary' },
        ],
      },
    ],
  },
  {
    type: 'revenue',
    icon: TrendingUp,
    name: { fa: 'درآمدها', en: 'Revenue' },
    code: '4xxx',
    statement: 'is',
    groups: [
      {
        name: { fa: 'عملیاتی', en: 'Operating' },
        accounts: [
          { fa: 'درآمد خدمات', en: 'Service revenue' },
          { fa: 'درآمد فروش', en: 'Sales revenue' },
        ],
      },
      {
        name: { fa: 'غیرعملیاتی', en: 'Non-operating' },
        accounts: [
          { fa: 'درآمد بهره', en: 'Interest income' },
          { fa: 'درآمد اجاره', en: 'Rent income' },
        ],
      },
      {
        name: { fa: 'کاهنده درآمد', en: 'Contra-revenue' },
        contra: true,
        accounts: [
          { fa: 'برگشت از فروش', en: 'Sales returns' },
          { fa: 'تخفیفات فروش', en: 'Sales discounts' },
        ],
      },
    ],
  },
  {
    type: 'expense',
    icon: Receipt,
    name: { fa: 'هزینه‌ها', en: 'Expenses' },
    code: '5xxx',
    statement: 'is',
    groups: [
      {
        name: { fa: 'عملیاتی', en: 'Operating' },
        accounts: [
          { fa: 'هزینه اجاره', en: 'Rent expense' },
          { fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' },
          { fa: 'هزینه ملزومات', en: 'Supplies expense' },
          { fa: 'هزینه استهلاک', en: 'Depreciation expense' },
        ],
      },
      {
        name: { fa: 'بهای تمام‌شده', en: 'Cost of sales' },
        accounts: [
          { fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of goods sold' },
          { fa: 'هزینه حمل کالا', en: 'Freight-in' },
        ],
      },
      {
        name: { fa: 'غیرعملیاتی', en: 'Non-operating' },
        accounts: [
          { fa: 'هزینه بهره', en: 'Interest expense' },
          { fa: 'زیان فروش دارایی', en: 'Loss on sale of assets' },
        ],
      },
    ],
  },
]

export default function AccountTypes({ caption }: DiagramProps) {
  const { tr, lang, isFa, digits } = useI18n()
  const scope = useRef<HTMLDivElement>(null)
  // narrow layout behaves like an accordion; wide layout always shows everything
  const [open, setOpen] = useState<boolean[]>(() => TREE.map((_, i) => i === 0))
  const prevOpen = useRef(open)

  const { replay } = useInViewTimeline(
    scope,
    (tl) => {
      const from = isFa ? 12 : -12 // groups enter from the reading-start side
      tl.from('[data-anim="root"]', { scale: 0.6, opacity: 0, duration: 0.5, ease: 'back.out(2)' })
        .from('[data-line="stem"]', { scaleY: 0, duration: 0.3, ease: 'power2.in' })
        .addLabel('branches')
        // wide: bus grows out of the stem, drops fall into each column
        .from('[data-line="bus"]', { scaleX: 0, duration: 0.5, ease: 'power2.out' }, 'branches')
        .from('[data-line="drop"]', { scaleY: 0, duration: 0.25, stagger: 0.06 }, 'branches+=0.3')
        // narrow: a rail runs down the start side with a tick into each card
        .from('[data-line="seg"]', { scaleY: 0, duration: 0.22, stagger: 0.1, ease: 'none' }, 'branches')
        .from('[data-line="tick"]', { scaleX: 0, duration: 0.2, stagger: 0.1 }, 'branches+=0.12')
        .from('[data-anim="head"]', { y: 12, opacity: 0, stagger: 0.08, duration: 0.45 }, 'branches+=0.35')
        .addLabel('groups', '-=0.15')
        .from('[data-line="gseg"]', { scaleY: 0, stagger: 0.035, duration: 0.25, ease: 'none' }, 'groups')
        .from('[data-line="gtick"]', { scaleX: 0, stagger: 0.035, duration: 0.2 }, 'groups+=0.08')
        .from('[data-anim="group"]', { x: from, opacity: 0, stagger: 0.035, duration: 0.35 }, 'groups+=0.1')
        .from('[data-anim="legend"]', { opacity: 0, y: 8, duration: 0.4 }, '-=0.1')
    },
    [lang],
  )

  // narrow layout: reveal the groups of a section that was just opened
  useGSAP(
    () => {
      const prev = prevOpen.current
      prevOpen.current = open
      if (prefersReducedMotion()) return
      open.forEach((o, i) => {
        if (o && !prev[i]) {
          gsap.fromTo(
            `[data-branch="${i}"] [data-anim="group"]`,
            { opacity: 0, y: -6 },
            { opacity: 1, y: 0, x: 0, stagger: 0.05, duration: 0.35 },
          )
        }
      })
    },
    { scope, dependencies: [open] },
  )

  const statementLabel = (s: Branch['statement']) =>
    s === 'bs' ? tr({ fa: 'ترازنامه', en: 'Balance sheet' }) : tr({ fa: 'صورت سود و زیان', en: 'Income statement' })

  return (
    <DiagramFrame
      title={{ fa: 'درخت حساب‌ها: پنج گروه اصلی', en: 'The account tree: five main types' }}
      caption={caption}
      badge="interactive"
      onReplay={replay}
    >
      <div ref={scope} className="@container">
        {/* root */}
        <div className="flex flex-col items-start @2xl:items-center">
          <div
            data-anim="root"
            className="inline-flex items-center gap-2 rounded-2xl bg-foreground px-4 py-2 text-background shadow-md"
          >
            <FolderTree className="size-4" />
            <span className="text-sm font-bold">{tr({ fa: 'حساب‌ها', en: 'Accounts' })}</span>
          </div>
          <span data-line="stem" aria-hidden className="ms-5 block h-5 w-0.5 origin-top bg-border @2xl:ms-0" />
        </div>

        <div className="relative">
          <span
            data-line="bus"
            aria-hidden
            className="absolute inset-x-[calc(10%-0.2rem)] top-0 hidden h-0.5 bg-border @2xl:block"
          />
          <div className="grid gap-2.5 ps-9 @2xl:grid-cols-5 @2xl:gap-2 @2xl:ps-0 @2xl:pt-5">
            {TREE.map((b, i) => {
              const tone = TONE[b.type]
              const Icon = b.icon
              const last = i === TREE.length - 1
              const isOpen = open[i]
              return (
                <section key={b.type} data-branch={i} className="relative min-w-0">
                  {/* wide connectors */}
                  <span
                    data-line="drop"
                    aria-hidden
                    className="absolute inset-x-0 -top-5 mx-auto hidden h-5 w-0.5 origin-top bg-border @2xl:block"
                  />
                  {/* narrow connectors */}
                  <span
                    data-line="seg"
                    aria-hidden
                    className={cn(
                      'absolute -start-4 -top-2.5 w-0.5 origin-top bg-border @2xl:hidden',
                      last ? 'h-[2.125rem]' : '-bottom-px',
                    )}
                  />
                  <span
                    data-line="tick"
                    aria-hidden
                    className="absolute -start-4 top-[1.375rem] h-0.5 w-4 origin-left bg-border @2xl:hidden rtl:origin-right"
                  />

                  <button
                    type="button"
                    data-anim="head"
                    aria-expanded={isOpen}
                    onClick={() => setOpen((o) => o.map((v, j) => (j === i ? !v : v)))}
                    className={cn(
                      'flex w-full items-center gap-2 rounded-xl border px-2.5 py-2 text-start transition hover:shadow-sm @2xl:pointer-events-none @2xl:flex-col @2xl:text-center',
                      tone.soft,
                      tone.border,
                    )}
                  >
                    <span className={cn('grid size-7 shrink-0 place-items-center rounded-lg text-background', tone.solid)}>
                      <Icon className="size-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className={cn('block text-sm font-bold leading-tight', tone.text)}>{tr(b.name)}</span>
                      <span className="mt-0.5 block text-[10px] text-muted-foreground">
                        <span dir="ltr" className="tabular">
                          {digits(b.code)}
                        </span>
                        {' · '}
                        {statementLabel(b.statement)}
                      </span>
                    </span>
                    <ChevronDown
                      aria-hidden
                      className={cn('size-4 shrink-0 text-muted-foreground transition-transform @2xl:hidden', isOpen && 'rotate-180')}
                    />
                  </button>

                  <div className={cn('relative mt-2 space-y-2 ps-3.5 @2xl:block', isOpen ? 'block' : 'hidden')}>
                    {b.groups.map((g, j) => {
                      const lastGroup = j === b.groups.length - 1
                      return (
                        <div key={j} data-anim="group" className="relative">
                          <span
                            data-line="gseg"
                            aria-hidden
                            className={cn('absolute -start-2.5 -top-2 w-px origin-top', tone.line, lastGroup ? 'h-[1.125rem]' : 'bottom-0')}
                          />
                          <span
                            data-line="gtick"
                            aria-hidden
                            className={cn('absolute -start-2.5 top-2.5 h-px w-2 origin-left rtl:origin-right', tone.line)}
                          />
                          <div className={cn('flex items-center gap-1 text-[11px] font-semibold leading-5', tone.text)}>
                            {g.contra && (
                              <span
                                className={cn('grid size-3.5 place-items-center rounded-full border text-[10px] leading-none', tone.border)}
                                aria-hidden
                              >
                                −
                              </span>
                            )}
                            {tr(g.name)}
                          </div>
                          <ul className="mt-1 flex flex-wrap gap-1 @2xl:flex-col">
                            {g.accounts.map((a, k) => (
                              <li
                                key={k}
                                className={cn(
                                  'rounded-md border bg-card px-1.5 py-0.5 text-[11px] leading-snug',
                                  g.contra && 'border-dashed',
                                )}
                              >
                                {tr(a)}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </section>
              )
            })}
          </div>
        </div>

        {/* legend */}
        <div
          data-anim="legend"
          className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] text-muted-foreground sm:text-xs"
        >
          <span className="inline-flex items-center gap-1.5">
            <span className="rounded border bg-card px-1.5" dir="ltr">
              {digits('1xxx')}
            </span>
            {tr({ fa: 'کد حساب در جدول حساب‌ها', en: 'code range in the chart of accounts' })}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="rounded border border-dashed bg-card px-1.5">−</span>
            {tr({ fa: 'حساب کاهنده: مانده‌ای خلاف گروه خود دارد', en: 'contra account: balance opposite to its group' })}
          </span>
        </div>
      </div>
    </DiagramFrame>
  )
}
