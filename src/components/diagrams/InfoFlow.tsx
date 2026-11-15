import { useRef } from 'react'
import {
  Briefcase,
  Building2,
  Calculator,
  FileBarChart,
  FileText,
  FolderTree,
  Handshake,
  Landmark,
  PenLine,
  PiggyBank,
  Receipt,
  Scale,
  ShoppingCart,
  Sigma,
  TrendingUp,
  Users,
  Wallet,
  Zap,
  type LucideIcon,
} from 'lucide-react'

import type { L } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'
import { gsap, prefersReducedMotion } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import { DiagramFrame, useInViewTimeline, type DiagramProps } from './DiagramFrame'

type Item = { icon: LucideIcon; label: L; hint?: L }
type Group = { label?: L; items: Item[] }
type Stage = { icon: LucideIcon; title: L; sub: L; groups: Group[]; hub?: boolean }

const STAGES: Stage[] = [
  {
    icon: Zap,
    title: { fa: 'رویدادهای مالی', en: 'Business events' },
    sub: { fa: 'داده خام', en: 'Raw data' },
    groups: [
      {
        items: [
          { icon: Receipt, label: { fa: 'فروش و صدور فاکتور', en: 'Sales and invoices' } },
          { icon: Handshake, label: { fa: 'قرارداد و دریافت وام', en: 'Contracts and loans' } },
          { icon: ShoppingCart, label: { fa: 'خرید کالا و خدمات', en: 'Purchases' } },
        ],
      },
    ],
  },
  {
    icon: Calculator,
    hub: true,
    title: { fa: 'سیستم حسابداری', en: 'Accounting system' },
    sub: { fa: 'پردازش', en: 'Processing' },
    groups: [
      {
        items: [
          { icon: PenLine, label: { fa: 'ثبت', en: 'Record' }, hint: { fa: 'دفتر روزنامه', en: 'journal' } },
          { icon: FolderTree, label: { fa: 'طبقه‌بندی', en: 'Classify' }, hint: { fa: 'دفتر کل', en: 'ledger' } },
          { icon: Sigma, label: { fa: 'تلخیص', en: 'Summarize' }, hint: { fa: 'تراز آزمایشی', en: 'trial balance' } },
        ],
      },
    ],
  },
  {
    icon: FileBarChart,
    title: { fa: 'گزارش‌های مالی', en: 'Financial reports' },
    sub: { fa: 'اطلاعات', en: 'Information' },
    groups: [
      {
        items: [
          { icon: FileText, label: { fa: 'صورت سود و زیان', en: 'Income statement' } },
          { icon: Scale, label: { fa: 'ترازنامه', en: 'Balance sheet' } },
          { icon: PiggyBank, label: { fa: 'صورت تغییرات حقوق مالکانه', en: 'Changes in equity' } },
          { icon: Wallet, label: { fa: 'صورت جریان‌های نقدی', en: 'Cash flow statement' } },
        ],
      },
    ],
  },
  {
    icon: Users,
    title: { fa: 'استفاده‌کنندگان', en: 'Users' },
    sub: { fa: 'تصمیم‌گیری', en: 'Decisions' },
    groups: [
      {
        label: { fa: 'برون‌سازمانی', en: 'External' },
        items: [
          { icon: TrendingUp, label: { fa: 'سرمایه‌گذاران', en: 'Investors' } },
          { icon: Landmark, label: { fa: 'بانک‌ها و اعتباردهندگان', en: 'Lenders' } },
          { icon: Building2, label: { fa: 'سازمان مالیاتی', en: 'Tax office' } },
        ],
      },
      {
        label: { fa: 'درون‌سازمانی', en: 'Internal' },
        items: [
          { icon: Briefcase, label: { fa: 'مدیران', en: 'Managers' } },
          { icon: Users, label: { fa: 'کارکنان', en: 'Employees' } },
        ],
      },
    ],
  },
]

function Chip({ item }: { item: Item }) {
  const { tr } = useI18n()
  const Icon = item.icon
  return (
    <li className="inline-flex max-w-full items-center gap-1.5 rounded-md border bg-card px-2.5 py-1 text-[13px] leading-6">
      <Icon className="size-3.5 shrink-0 text-muted-foreground" />
      <span className="min-w-0">{tr(item.label)}</span>
      {item.hint && <span className="text-xs text-muted-foreground">({tr(item.hint)})</span>}
    </li>
  )
}

export default function InfoFlow({ caption }: DiagramProps) {
  const { tr, lang, digits } = useI18n()
  const scope = useRef<HTMLDivElement>(null)

  const { replay } = useInViewTimeline(
    scope,
    (tl, el) => {
      const q = (sel: string) => gsap.utils.toArray<HTMLElement>(sel, el)
      const lines = q('[data-line]')
      const dots = q('[data-dot]')
      const packets = q('[data-packet]')

      // entrance: only the connectors draw and the step markers settle; text stays put
      dots.forEach((dot, i) => {
        tl.fromTo(dot, { scale: 0.85 }, { scale: 1, duration: 0.35, ease: 'back.out(2.5)' }, i * 0.35)
        if (lines[i]) tl.fromTo(lines[i], { scaleY: 0 }, { scaleY: 1, duration: 0.35, ease: 'power1.inOut' }, i * 0.35 + 0.15)
      })

      // quiet loop: a small dot carries data down to the next stage
      const loop = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 1.2 })
      packets.forEach((pk, i) => {
        loop.fromTo(pk, { top: '0%', opacity: 0 }, { top: '100%', duration: 0.8, ease: 'power1.inOut' }, i * 0.9)
        loop.to(pk, { opacity: 1, duration: 0.12, ease: 'none' }, '<')
        loop.to(pk, { opacity: 0, duration: 0.15, ease: 'none' }, '<0.65')
      })
      tl.call(() => {
        if (!prefersReducedMotion()) loop.play(0)
      })
    },
    [lang],
  )

  return (
    <DiagramFrame
      title={{ fa: 'جریان اطلاعات حسابداری: از رویداد تا تصمیم', en: 'How accounting information flows: from event to decision' }}
      caption={caption}
      onReplay={replay}
    >
      <div ref={scope} className="@container">
        <ol>
          {STAGES.map((stage, i) => {
            const Icon = stage.icon
            const last = i === STAGES.length - 1
            return (
              <li key={i} className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 pb-6 last:pb-0 @xl:grid-cols-[2.5rem_11rem_minmax(0,1fr)]">
                {/* connector to the next stage */}
                {!last && (
                  <span aria-hidden className="absolute top-11 -bottom-1 start-5 w-px -translate-x-1/2 bg-border rtl:translate-x-1/2">
                    <span data-line className="absolute inset-0 origin-top bg-primary/60" />
                    <span data-packet className="absolute start-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-0 rtl:translate-x-1/2" />
                  </span>
                )}

                <span
                  data-dot
                  className={cn(
                    'relative z-10 grid size-10 place-items-center rounded-full border bg-card',
                    stage.hub && 'border-transparent bg-primary text-primary-foreground',
                  )}
                >
                  <Icon className="size-4.5" />
                </span>

                <div className="min-w-0 pt-0.5">
                  <div className="text-xs text-muted-foreground">
                    {digits(String(i + 1))} · {tr(stage.sub)}
                  </div>
                  <div className="font-semibold">{tr(stage.title)}</div>
                </div>

                <div className="col-start-2 mt-2.5 space-y-2 @xl:col-start-3 @xl:mt-1">
                  {stage.groups.map((g, k) => (
                    <div key={k} className={cn(g.label && '@md:grid @md:grid-cols-[6rem_minmax(0,1fr)] @md:items-start')}>
                      {g.label && <div className="mb-1.5 text-xs text-muted-foreground @md:mb-0 @md:pt-2">{tr(g.label)}</div>}
                      <ul className="flex flex-wrap gap-1.5">
                        {g.items.map((it, j) => (
                          <Chip key={j} item={it} />
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </DiagramFrame>
  )
}
