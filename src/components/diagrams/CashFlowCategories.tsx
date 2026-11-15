import { useRef, useState, type ComponentType } from 'react'
import { ArrowDownLeft, ArrowUpRight, Briefcase, Factory, Landmark, Wallet } from 'lucide-react'

import { AnimatedNumber } from '@/components/ui/AnimatedNumber'
import type { L } from '@/content/types'
import { novaTransactions } from '@/content/nova'
import { useI18n } from '@/i18n/I18nProvider'
import { prefersReducedMotion } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import { DiagramFrame, useInViewTimeline, type DiagramProps } from './DiagramFrame'

type Cat = 'op' | 'inv' | 'fin'
type Item = { key: string; cat: Cat; txIds: string[]; label: L; amount: number }

/** Net effect on Cash of the given running-example transactions. */
const cashOf = (ids: string[]) =>
  ids.reduce((sum, id) => {
    const line = novaTransactions.find((t) => t.id === id)!.lines.find((l) => l.account === 'cash')
    return sum + (line ? (line.debit ?? 0) - (line.credit ?? 0) : 0)
  }, 0)

const RAW: Omit<Item, 'amount'>[] = [
  { key: 'customers', cat: 'op', txIds: ['t6', 't10'], label: { fa: 'وصول از مشتریان', en: 'Cash received from customers' } },
  { key: 'rent', cat: 'op', txIds: ['t8'], label: { fa: 'پرداخت اجاره', en: 'Rent paid' } },
  { key: 'salaries', cat: 'op', txIds: ['t9'], label: { fa: 'پرداخت حقوق', en: 'Salaries paid' } },
  { key: 'insurance', cat: 'op', txIds: ['t5'], label: { fa: 'پرداخت بیمه', en: 'Insurance paid' } },
  { key: 'suppliers', cat: 'op', txIds: ['t11'], label: { fa: 'پرداخت به تأمین‌کننده', en: 'Paid to suppliers' } },
  { key: 'equipment', cat: 'inv', txIds: ['t3'], label: { fa: 'خرید تجهیزات', en: 'Equipment purchased' } },
  { key: 'owner', cat: 'fin', txIds: ['t1'], label: { fa: 'سرمایه‌گذاری مالک', en: 'Owner investment' } },
  { key: 'loan', cat: 'fin', txIds: ['t2'], label: { fa: 'دریافت وام بانکی', en: 'Bank loan received' } },
  { key: 'drawings', cat: 'fin', txIds: ['t12'], label: { fa: 'برداشت مالک', en: 'Owner drawings' } },
]
const ITEMS: Item[] = RAW.map((r) => ({ ...r, amount: cashOf(r.txIds) }))
const MAX = Math.max(...ITEMS.map((i) => Math.abs(i.amount)))
const NET: Record<Cat, number> = {
  op: ITEMS.filter((i) => i.cat === 'op').reduce((s, i) => s + i.amount, 0),
  inv: ITEMS.filter((i) => i.cat === 'inv').reduce((s, i) => s + i.amount, 0),
  fin: ITEMS.filter((i) => i.cat === 'fin').reduce((s, i) => s + i.amount, 0),
}
const NET_CHANGE = NET.op + NET.inv + NET.fin

const CATS: { id: Cat; icon: ComponentType<{ className?: string }>; title: L; short: L; desc: L; examples: L[] }[] = [
  {
    id: 'op',
    icon: Briefcase,
    title: { fa: 'فعالیت‌های عملیاتی', en: 'Operating activities' },
    short: { fa: 'عملیاتی', en: 'Operating' },
    desc: { fa: 'نقد حاصل از کار روزمره کسب‌وکار', en: 'Cash from running the business day to day' },
    examples: [
      { fa: 'دریافت نقد از مشتریان', en: 'Cash from customers' },
      { fa: 'پرداخت به تأمین‌کنندگان', en: 'Payments to suppliers' },
      { fa: 'پرداخت حقوق، اجاره و قبوض', en: 'Salaries, rent and utilities' },
      { fa: 'پرداخت بهره و مالیات (معمولاً)', en: 'Interest and taxes paid (usually)' },
    ],
  },
  {
    id: 'inv',
    icon: Factory,
    title: { fa: 'فعالیت‌های سرمایه‌گذاری', en: 'Investing activities' },
    short: { fa: 'سرمایه‌گذاری', en: 'Investing' },
    desc: { fa: 'خرید و فروش دارایی‌های بلندمدت', en: 'Buying and selling long-term assets' },
    examples: [
      { fa: 'خرید یا فروش تجهیزات و ساختمان', en: 'Buying or selling equipment and buildings' },
      { fa: 'خرید یا فروش سرمایه‌گذاری‌ها', en: 'Buying or selling investments' },
      { fa: 'اعطای وام به دیگران و وصول آن', en: 'Lending to others and collecting it' },
    ],
  },
  {
    id: 'fin',
    icon: Landmark,
    title: { fa: 'فعالیت‌های تأمین مالی', en: 'Financing activities' },
    short: { fa: 'تأمین مالی', en: 'Financing' },
    desc: { fa: 'منابعی که از مالک و وام‌دهندگان می‌آید', en: 'Money from owners and lenders' },
    examples: [
      { fa: 'آورده و برداشت مالک', en: 'Owner investments and drawings' },
      { fa: 'دریافت و بازپرداخت وام', en: 'Borrowing and repaying loans' },
      { fa: 'انتشار سهام و پرداخت سود سهام', en: 'Issuing shares, paying dividends' },
    ],
  },
]

export default function CashFlowCategories({ caption }: DiagramProps) {
  const { tr, money, lang } = useI18n()
  const scope = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(prefersReducedMotion)
  const [summed, setSummed] = useState(prefersReducedMotion)

  const { replay } = useInViewTimeline(
    scope,
    (tl) => {
      tl.from('[data-col]', { y: 26, autoAlpha: 0, stagger: 0.12, duration: 0.6 })
        .add(() => setRevealed(true), '-=0.2')
        .fromTo(
          '[data-bar]',
          { width: '0%' },
          { width: (_i: number, el: HTMLElement) => `${el.dataset.w}%`, duration: 1, stagger: 0.07, ease: 'power3.out' },
          '<',
        )
        .from('[data-ex]', { autoAlpha: 0, y: 6, stagger: 0.03, duration: 0.3 }, '-=0.6')
        .from('[data-sum]', { y: 14, scale: 0.9, autoAlpha: 0, stagger: 0.12, duration: 0.45, ease: 'back.out(2)' }, '-=0.2')
        .add(() => setSummed(true), '-=0.3')
        .from('[data-anim="foot"]', { y: 8, autoAlpha: 0, duration: 0.45 }, '+=0.2')
    },
    [lang],
  )

  const signed = (v: number) => (
    <span dir="ltr" className="tabular">
      {v >= 0 ? '+' : '−'}
      {money(Math.abs(v))}
    </span>
  )

  const bar = (item: Item) => {
    const inflow = item.amount >= 0
    const w = Math.max(1.5, (Math.abs(item.amount) / MAX) * 100).toFixed(2)
    return (
      <li key={item.key} className="space-y-1">
        <div className="flex items-baseline justify-between gap-2 text-[11px] sm:text-xs">
          <span className="min-w-0 text-foreground/85">{tr(item.label)}</span>
          <span className={cn('shrink-0 font-semibold', inflow ? 'text-revenue' : 'text-liability')}>{signed(item.amount)}</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <div
            data-bar
            data-w={w}
            style={{ width: `${w}%` }}
            className={cn('h-full rounded-full', inflow ? 'bg-revenue' : 'bg-liability')}
          />
        </div>
      </li>
    )
  }

  const group = (items: Item[], inflow: boolean) => (
    <div>
      <div className={cn('mb-1.5 flex items-center gap-1 text-[10px] font-semibold', inflow ? 'text-revenue' : 'text-liability')}>
        {inflow ? <ArrowDownLeft className="size-3 rtl:-scale-x-100" /> : <ArrowUpRight className="size-3 rtl:-scale-x-100" />}
        {inflow ? tr({ fa: 'ورودی‌ها (+)', en: 'Inflows (+)' }) : tr({ fa: 'خروجی‌ها (−)', en: 'Outflows (−)' })}
      </div>
      {items.length ? (
        <ul className="space-y-2">{items.map(bar)}</ul>
      ) : (
        <p className="text-[11px] text-muted-foreground">{tr({ fa: 'در این ماه نداشتیم', en: 'None this month' })}</p>
      )}
    </div>
  )

  const netTone = (v: number) => (v >= 0 ? 'text-revenue' : 'text-liability')

  return (
    <DiagramFrame
      title={{ fa: 'سه بخش صورت جریان‌های نقدی', en: 'The three sections of the cash flow statement' }}
      caption={caption}
      badge="interactive"
      onReplay={() => {
        setRevealed(prefersReducedMotion())
        setSummed(prefersReducedMotion())
        replay()
      }}
    >
      <div ref={scope}>
        <div className="grid gap-3 md:grid-cols-3 md:gap-4">
          {CATS.map((c) => {
            const Icon = c.icon
            const items = ITEMS.filter((i) => i.cat === c.id)
            return (
              <section key={c.id} data-col className="flex min-w-0 flex-col rounded-2xl border bg-background/70 p-3 sm:p-4">
                <header className="flex items-start gap-2.5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-4.5" />
                  </span>
                  <div className="min-w-0">
                    <h4 className="text-sm leading-snug font-bold">{tr(c.title)}</h4>
                    <p className="text-[11px] text-muted-foreground">{tr(c.desc)}</p>
                  </div>
                </header>

                <div className="mt-3 flex items-baseline justify-between gap-2 rounded-xl bg-muted/60 px-3 py-2">
                  <span className="text-[11px] font-medium text-muted-foreground">{tr({ fa: 'خالص جریان نقد', en: 'Net cash flow' })}</span>
                  <AnimatedNumber value={revealed ? NET[c.id] : 0} className={cn('text-lg font-bold', netTone(NET[c.id]))} />
                </div>

                <div className="mt-3 space-y-3">
                  {group(items.filter((i) => i.amount >= 0), true)}
                  {group(items.filter((i) => i.amount < 0), false)}
                </div>

                <div className="mt-auto pt-4">
                  <div className="mb-1 border-t pt-3 text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
                    {tr({ fa: 'نمونه‌های رایج', en: 'Typical examples' })}
                  </div>
                  <ul className="space-y-0.5">
                    {c.examples.map((ex, i) => (
                      <li key={i} data-ex className="flex items-start gap-1.5 text-[11px] leading-relaxed text-muted-foreground">
                        <span aria-hidden className="mt-[0.55em] size-1 shrink-0 rounded-full bg-muted-foreground/60" />
                        {tr(ex)}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )
          })}
        </div>

        {/* net change summary, reads in document direction */}
        <div className="mt-5 rounded-2xl border border-dashed bg-background/60 p-3 sm:p-4">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
            {CATS.map((c, i) => (
              <div key={c.id} className="flex items-center gap-2">
                {i > 0 && (
                  <span data-sum className="text-lg font-bold text-muted-foreground">
                    +
                  </span>
                )}
                <div data-sum className="rounded-xl bg-muted/70 px-3 py-1.5 text-center">
                  <div className="text-[10px] text-muted-foreground">{tr(c.short)}</div>
                  <AnimatedNumber value={summed ? NET[c.id] : 0} className={cn('text-sm font-bold sm:text-base', netTone(NET[c.id]))} />
                </div>
              </div>
            ))}
            <span data-sum className="text-lg font-bold text-muted-foreground">
              =
            </span>
            <div data-sum className="rounded-xl bg-primary px-3 py-1.5 text-center text-primary-foreground shadow-md">
              <div className="flex items-center justify-center gap-1 text-[10px] opacity-90">
                <Wallet className="size-3" />
                {tr({ fa: 'خالص تغییر وجه نقد', en: 'Net change in cash' })}
              </div>
              <AnimatedNumber value={summed ? NET_CHANGE : 0} className="text-base font-bold sm:text-lg" />
            </div>
          </div>
          <p data-anim="foot" className="mt-3 text-center text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
            {tr({
              fa: `موجودی نقد اول ماه ${money(0)} + خالص تغییر ${money(NET_CHANGE)} = موجودی نقد پایان ماه ${money(NET_CHANGE)}: دقیقاً همان رقم موجودی نقد در ترازنامه.`,
              en: `Cash at the start of the month ${money(0)} + net change ${money(NET_CHANGE)} = cash at month-end ${money(NET_CHANGE)}: exactly the Cash line on the balance sheet.`,
            })}
          </p>
        </div>
      </div>
    </DiagramFrame>
  )
}
