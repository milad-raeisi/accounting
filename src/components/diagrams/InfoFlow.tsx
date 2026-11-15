import { Fragment, useRef } from 'react'
import {
  Briefcase,
  Building2,
  Calculator,
  ChevronDown,
  ChevronRight,
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

type Item = { icon: LucideIcon; label: L; hint?: L; tag?: 'internal' | 'external' }
type Stage = { icon: LucideIcon; title: L; sub: L; items: Item[]; hub?: boolean }

const STAGES: Stage[] = [
  {
    icon: Zap,
    title: { fa: 'رویدادهای مالی', en: 'Business events' },
    sub: { fa: 'داده خام', en: 'Raw data' },
    items: [
      { icon: Receipt, label: { fa: 'فروش و صدور فاکتور', en: 'Sales & invoices' } },
      { icon: Handshake, label: { fa: 'قرارداد و دریافت وام', en: 'Contracts & loans' } },
      { icon: ShoppingCart, label: { fa: 'خرید کالا و خدمات', en: 'Purchases' } },
    ],
  },
  {
    icon: Calculator,
    hub: true,
    title: { fa: 'سیستم حسابداری', en: 'Accounting system' },
    sub: { fa: 'پردازش', en: 'Processing' },
    items: [
      { icon: PenLine, label: { fa: 'ثبت', en: 'Record' }, hint: { fa: 'دفتر روزنامه', en: 'journal' } },
      { icon: FolderTree, label: { fa: 'طبقه‌بندی', en: 'Classify' }, hint: { fa: 'دفتر کل', en: 'ledger' } },
      { icon: Sigma, label: { fa: 'تلخیص', en: 'Summarize' }, hint: { fa: 'تراز آزمایشی', en: 'trial balance' } },
    ],
  },
  {
    icon: FileBarChart,
    title: { fa: 'گزارش‌های مالی', en: 'Financial reports' },
    sub: { fa: 'اطلاعات', en: 'Information' },
    items: [
      { icon: FileText, label: { fa: 'صورت سود و زیان', en: 'Income statement' } },
      { icon: Scale, label: { fa: 'ترازنامه', en: 'Balance sheet' } },
      { icon: PiggyBank, label: { fa: 'صورت تغییرات حقوق مالکانه', en: 'Statement of owner’s equity' } },
      { icon: Wallet, label: { fa: 'صورت جریان‌های نقدی', en: 'Cash-flow statement' } },
    ],
  },
  {
    icon: Users,
    title: { fa: 'استفاده‌کنندگان', en: 'Users' },
    sub: { fa: 'تصمیم‌گیری', en: 'Decisions' },
    items: [
      { icon: TrendingUp, label: { fa: 'سرمایه‌گذاران', en: 'Investors' }, tag: 'external' },
      { icon: Landmark, label: { fa: 'بانک‌ها و اعتباردهندگان', en: 'Lenders' }, tag: 'external' },
      { icon: Building2, label: { fa: 'دولت و سازمان مالیاتی', en: 'Government & tax office' }, tag: 'external' },
      { icon: Briefcase, label: { fa: 'مدیران', en: 'Managers' }, tag: 'internal' },
      { icon: Users, label: { fa: 'کارکنان', en: 'Employees' }, tag: 'internal' },
    ],
  },
]

/** Packet run along one connector: fade in, travel, fade out. */
function travel(tl: gsap.core.Timeline, el: Element | undefined, axis: 'x' | 'y', dir: number, pos: gsap.Position) {
  if (!el) return
  const prop = axis === 'x' ? 'xPercent' : 'yPercent'
  tl.fromTo(el, { [prop]: 0, opacity: 0 }, { [prop]: dir * 100, duration: 0.9, ease: 'power1.inOut' }, pos)
  tl.to(el, { opacity: 1, duration: 0.15, ease: 'none' }, '<')
  tl.to(el, { opacity: 0, duration: 0.2, ease: 'none' }, '<0.7')
}

function Connector() {
  return (
    <div aria-hidden className="relative h-10 shrink-0 @2xl:h-auto @2xl:w-10">
      {/* narrow: vertical track */}
      <div className="absolute inset-x-0 top-1 bottom-3 mx-auto w-0.5 overflow-hidden rounded-full bg-border @2xl:hidden">
        <div data-line="v" className="absolute inset-0 origin-top bg-primary/60" />
      </div>
      <div data-pk="v" className="absolute inset-x-0 top-1 bottom-5 opacity-0 @2xl:hidden">
        <span className="absolute top-0 left-1/2 size-2.5 -translate-x-1/2 rounded-full bg-primary " />
      </div>
      <ChevronDown className="absolute bottom-0 left-1/2 size-3.5 -translate-x-1/2 text-primary/70 @2xl:hidden" />

      {/* wide: horizontal track (start → end, mirrors in RTL) */}
      <div className="absolute start-0.5 end-2.5 top-1/2 hidden h-0.5 -translate-y-1/2 overflow-hidden rounded-full bg-border @2xl:block">
        <div data-line="h" className="absolute inset-0 origin-left bg-primary/60 rtl:origin-right" />
      </div>
      <div data-pk="h" className="absolute start-0.5 end-4 top-1/2 hidden h-0 opacity-0 @2xl:block">
        <span className="absolute start-0 top-0 size-2.5 -translate-y-1/2 rounded-full bg-primary " />
      </div>
      <ChevronRight className="absolute end-0 top-1/2 hidden size-3.5 -translate-y-1/2 text-primary/70 @2xl:block rtl:rotate-180" />
    </div>
  )
}

export default function InfoFlow({ caption }: DiagramProps) {
  const { tr, lang, isFa, digits } = useI18n()
  const scope = useRef<HTMLDivElement>(null)
  const loopRef = useRef<gsap.core.Timeline | null>(null)

  const { replay } = useInViewTimeline(
    scope,
    (tl, el) => {
      const dir = isFa ? -1 : 1
      const q = (sel: string, root: Element = el) => gsap.utils.toArray<HTMLElement>(sel, root)
      const stages = q('[data-anim="stage"]')
      const lineH = q('[data-line="h"]')
      const lineV = q('[data-line="v"]')
      const pkH = q('[data-pk="h"]')
      const pkV = q('[data-pk="v"]')

      // entrance: stage → connector draws → a packet runs → next stage …
      stages.forEach((stage, i) => {
        tl.from(stage, { y: 28, opacity: 0, scale: 0.97, duration: 0.65 }, i === 0 ? 0 : '-=0.25')
        tl.from(q('[data-anim="item"]', stage), { y: 8, opacity: 0, stagger: 0.06, duration: 0.4 }, '-=0.35')
        if (i < stages.length - 1) {
          tl.addLabel(`c${i}`, '-=0.15')
          tl.from(lineH[i], { scaleX: 0, duration: 0.5, ease: 'power2.inOut' }, `c${i}`)
          tl.from(lineV[i], { scaleY: 0, duration: 0.5, ease: 'power2.inOut' }, `c${i}`)
          travel(tl, pkH[i], 'x', dir, `c${i}+=0.2`)
          travel(tl, pkV[i], 'y', 1, `c${i}+=0.2`)
        }
      })
      tl.from('[data-anim="note"]', { y: 10, opacity: 0, duration: 0.5 }, '-=0.3')

      // ambient loop: each stage lights up in turn and hands a packet to the next one
      const loop = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 0.9 })
      stages.forEach((stage, i) => {
        const glows = q('[data-glow]', stage)
        loop.to(glows, { opacity: 1, duration: 0.3, stagger: 0.14, ease: 'power1.out' }, i === 0 ? 0 : '>-0.25')
        loop.to(glows, { opacity: 0, duration: 0.6, stagger: 0.14, ease: 'power1.in' }, '<0.4')
        if (i < stages.length - 1) {
          loop.addLabel(`p${i}`, '>-0.4')
          travel(loop, pkH[i], 'x', dir, `p${i}`)
          travel(loop, pkV[i], 'y', 1, `p${i}`)
        }
      })
      loopRef.current = loop
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
      onReplay={() => {
        loopRef.current?.pause(0)
        replay()
      }}
    >
      <div ref={scope} className="@container">
        <div className="flex flex-col @2xl:flex-row @2xl:items-stretch">
          {STAGES.map((stage, i) => {
            const Icon = stage.icon
            return (
              <Fragment key={i}>
                <div
                  data-anim="stage"
                  className={cn(
                    'relative flex min-w-0 flex-1 flex-col rounded-2xl border bg-background/70 p-3 shadow-[0_1px_0_0_var(--border)] @2xl:p-3.5',
                    stage.hub && ' bg-primary/5 ring-1 ring-foreground/10',
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={cn(
                        'grid size-9 shrink-0 place-items-center rounded-xl',
                        stage.hub ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary',
                      )}
                    >
                      <Icon className="size-4.5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[10px] font-medium text-muted-foreground ltr:uppercase ltr:tracking-wider">
                        {digits(String(i + 1))} · {tr(stage.sub)}
                      </div>
                      <div className="text-sm font-semibold leading-snug">{tr(stage.title)}</div>
                    </div>
                  </div>

                  <ul className="mt-3 flex flex-wrap gap-1.5 @2xl:flex-col">
                    {stage.items.map((it, j) => {
                      const ItemIcon = it.icon
                      return (
                        <li
                          key={j}
                          data-anim="item"
                          className={cn(
                            'relative flex min-w-0 items-center gap-1.5 overflow-hidden rounded-lg border bg-card px-2 py-1.5 text-xs',
                            stage.hub && ' font-medium',
                          )}
                        >
                          <span data-glow aria-hidden className="pointer-events-none absolute inset-0 bg-primary/15 opacity-0" />
                          <ItemIcon className="relative size-3.5 shrink-0 text-primary/80" />
                          <span className="relative leading-tight">{tr(it.label)}</span>
                          {it.hint && (
                            <span className="relative ms-auto ps-1 text-[10px] font-normal text-muted-foreground">{tr(it.hint)}</span>
                          )}
                          {it.tag && (
                            <span
                              className={cn(
                                'relative ms-auto shrink-0 rounded-full px-1.5 text-[9px] font-semibold leading-4',
                                it.tag === 'internal' ? 'bg-gold/20 text-foreground/75' : 'bg-muted text-muted-foreground',
                              )}
                            >
                              {it.tag === 'internal'
                                ? tr({ fa: 'درون‌سازمانی', en: 'internal' })
                                : tr({ fa: 'برون‌سازمانی', en: 'external' })}
                            </span>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
                {i < STAGES.length - 1 && <Connector />}
              </Fragment>
            )
          })}
        </div>

        <p
          data-anim="note"
          className="mx-auto mt-5 max-w-2xl rounded-xl border border-dashed bg-muted/40 px-4 py-2.5 text-center text-xs leading-relaxed text-muted-foreground sm:text-sm"
        >
          {tr({
            fa: 'حسابداری داده‌های خام رویدادها را ثبت، طبقه‌بندی و تلخیص می‌کند و آن را به اطلاعاتی تبدیل می‌کند که استفاده‌کنندگان درون و برون سازمان برای تصمیم‌گیری به کار می‌برند.',
            en: 'Accounting records, classifies and summarizes raw event data, turning it into information that internal and external users rely on to make decisions.',
          })}
        </p>
      </div>
    </DiagramFrame>
  )
}
