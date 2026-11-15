import { useMemo, useRef, useState } from 'react'
import {
  BookOpen,
  Calculator,
  Compass,
  Database,
  Factory,
  Fingerprint,
  Landmark,
  MousePointerClick,
  Percent,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'

import type { L } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import { DiagramFrame, useInViewTimeline, type DiagramProps } from './DiagramFrame'

type Branch = { icon: LucideIcon; name: L; desc: L; output: L }

const BRANCHES: Branch[] = [
  {
    icon: BookOpen,
    name: { fa: 'حسابداری مالی', en: 'Financial accounting' },
    desc: {
      fa: 'تهیه صورت‌های مالی با مقاصد عمومی برای استفاده‌کنندگان برون‌سازمانی مانند سرمایه‌گذاران و اعتباردهندگان.',
      en: 'Prepares general-purpose financial statements for outside users such as investors and lenders.',
    },
    output: { fa: 'ترازنامه، صورت سود و زیان', en: 'Balance sheet, income statement' },
  },
  {
    icon: Compass,
    name: { fa: 'حسابداری مدیریت', en: 'Managerial accounting' },
    desc: {
      fa: 'بودجه، پیش‌بینی و گزارش‌های درون‌سازمانی که به مدیران در برنامه‌ریزی، کنترل و تصمیم‌گیری کمک می‌کند.',
      en: 'Budgets, forecasts and internal reports that help managers plan, control and decide.',
    },
    output: { fa: 'بودجه، گزارش انحراف‌ها', en: 'Budgets, variance reports' },
  },
  {
    icon: Factory,
    name: { fa: 'حسابداری صنعتی (بهای تمام‌شده)', en: 'Cost accounting' },
    desc: {
      fa: 'اندازه‌گیری و تحلیل بهای تمام‌شده محصولات و خدمات: مواد، دستمزد و سربار.',
      en: 'Measures and analyses what products and services cost, materials, labour and overhead.',
    },
    output: { fa: 'کارت بهای تمام‌شده محصول', en: 'Product cost sheets' },
  },
  {
    icon: Percent,
    name: { fa: 'حسابداری مالیاتی', en: 'Tax accounting' },
    desc: {
      fa: 'محاسبه درآمد مشمول مالیات و تهیه اظهارنامه‌های مالیاتی طبق قوانین مالیاتی.',
      en: 'Computes taxable income and prepares tax returns under the tax law.',
    },
    output: { fa: 'اظهارنامه مالیاتی', en: 'Tax returns' },
  },
  {
    icon: ShieldCheck,
    name: { fa: 'حسابرسی', en: 'Auditing' },
    desc: {
      fa: 'رسیدگی مستقل به صورت‌های مالی و اظهارنظر درباره اینکه آیا به‌نحو مطلوب ارائه شده‌اند.',
      en: 'An independent examination that gives an opinion on whether the statements are fairly presented.',
    },
    output: { fa: 'گزارش حسابرس مستقل', en: 'Independent auditor’s report' },
  },
  {
    icon: Landmark,
    name: { fa: 'حسابداری دولتی', en: 'Governmental accounting' },
    desc: {
      fa: 'حسابداری منابع عمومی و بودجه دستگاه‌های دولتی و سازمان‌های غیرانتفاعی.',
      en: 'Accounts for the public funds and budgets of government bodies and non-profits.',
    },
    output: { fa: 'گزارش عملکرد بودجه', en: 'Budget execution reports' },
  },
  {
    icon: Fingerprint,
    name: { fa: 'حسابداری دادگاهی (قضایی)', en: 'Forensic accounting' },
    desc: {
      fa: 'کشف تقلب، بررسی اختلافات مالی و ارائه شواهد قابل‌استناد به مراجع قضایی.',
      en: 'Investigates fraud and financial disputes and provides evidence that can stand up in court.',
    },
    output: { fa: 'گزارش کارشناسی و تحقیق', en: 'Investigation reports' },
  },
  {
    icon: Database,
    name: { fa: 'سیستم‌های اطلاعاتی حسابداری', en: 'Accounting information systems' },
    desc: {
      fa: 'طراحی نرم‌افزار، پایگاه داده و کنترل‌هایی که داده‌های حسابداری را گردآوری و پردازش می‌کنند.',
      en: 'Designs the software, databases and controls that capture and process accounting data.',
    },
    output: { fa: 'نرم‌افزار و کنترل‌های داخلی', en: 'Accounting software & controls' },
  },
]

/* radial geometry (SVG user units; the HTML layer uses the same box via aspect-ratio) */
const W = 600
const H = 440
const CX = W / 2
const CY = H / 2
const RX = 232
const RY = 152

export default function Branches({ caption }: DiagramProps) {
  const { tr, lang, isFa } = useI18n()
  const scope = useRef<HTMLDivElement>(null)
  const [sel, setSel] = useState(0)

  // clockwise from the top in LTR, mirrored (counter-clockwise) in RTL
  const points = useMemo(
    () =>
      BRANCHES.map((_, i) => {
        const a = ((i * 360) / BRANCHES.length - 90) * (Math.PI / 180)
        return { x: CX + RX * Math.cos(a) * (isFa ? -1 : 1), y: CY + RY * Math.sin(a) }
      }),
    [isFa],
  )

  const { replay } = useInViewTimeline(
    scope,
    (tl) => {
      tl.from('[data-anim="hub"]', { scale: 0, opacity: 0, duration: 0.6, ease: 'back.out(1.8)' })
        .from('[data-spoke]', { drawSVG: '0%', duration: 0.5, stagger: 0.07, ease: 'power2.out' }, '-=0.25')
        .from('[data-anim="sat"]', { scale: 0, opacity: 0, duration: 0.5, stagger: 0.07, ease: 'back.out(1.7)' }, '<0.25')
        .from('[data-anim="card"]', { y: 16, opacity: 0, stagger: 0.05, duration: 0.45 }, 0)
        .from('[data-anim="panel"]', { y: 12, opacity: 0, duration: 0.5 }, '-=0.25')
    },
    [lang],
  )

  // gentle cross-fade whenever the selected branch changes
  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.fromTo('[data-anim="panel-body"]', { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.35 })
    },
    { scope, dependencies: [sel] },
  )

  const current = BRANCHES[sel]
  const CurrentIcon = current.icon
  const hubLabel = tr({ fa: 'حسابداری', en: 'Accounting' })

  return (
    <DiagramFrame
      title={{ fa: 'شاخه‌های اصلی حسابداری', en: 'The main branches of accounting' }}
      caption={caption}
      badge="interactive"
      onReplay={replay}
    >
      <div ref={scope} className="@container">
        {/* ── radial map (wide containers) ── */}
        <div className="hidden @lg:block">
          <div className="relative mx-auto aspect-[15/11] w-full max-w-[640px]">
            <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 size-full overflow-visible" aria-hidden>
              <ellipse cx={CX} cy={CY} rx={RX} ry={RY} fill="none" className="stroke-border" strokeDasharray="2 6" />
              {points.map((p, i) => (
                <line
                  key={i}
                  data-spoke
                  x1={CX}
                  y1={CY}
                  x2={p.x}
                  y2={p.y}
                  strokeWidth={1.5}
                  className={cn('transition-colors duration-300', i === sel ? 'stroke-primary/50' : 'stroke-border')}
                />
              ))}
              <line
                x1={CX}
                y1={CY}
                x2={points[sel].x}
                y2={points[sel].y}
                strokeWidth={2.5}
                strokeLinecap="round"
                className="flow-dash stroke-primary"
              />
            </svg>

            <div
              data-anim="hub"
              className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border bg-primary text-center text-primary-foreground shadow-[0_10px_30px_-10px_color-mix(in_oklch,var(--primary)_70%,transparent)] sm:size-28"
            >
              <div className="flex flex-col items-center gap-1">
                <Calculator className="size-5 sm:size-6" />
                <span className="text-sm font-bold sm:text-base">{hubLabel}</span>
              </div>
            </div>

            {BRANCHES.map((b, i) => {
              const Icon = b.icon
              const p = points[i]
              const active = i === sel
              return (
                <button
                  key={i}
                  type="button"
                  data-anim="sat"
                  aria-pressed={active}
                  onClick={() => setSel(i)}
                  onPointerEnter={() => setSel(i)}
                  onFocus={() => setSel(i)}
                  style={{ left: `${(p.x / W) * 100}%`, top: `${(p.y / H) * 100}%` }}
                  className="group absolute flex w-28 -translate-x-1/2 -translate-y-5 flex-col items-center gap-1 rounded-xl text-center outline-none"
                >
                  <span
                    className={cn(
                      'grid size-10 place-items-center rounded-full border bg-card shadow-sm transition-all duration-300 group-focus-visible:ring-1 group-focus-visible:ring-ring/40',
                      active
                        ? 'scale-110  bg-primary text-primary-foreground '
                        : ' text-primary ',
                    )}
                  >
                    <Icon className="size-4.5" />
                  </span>
                  <span
                    className={cn(
                      'rounded-md bg-card/85 px-1 text-[11px] font-medium leading-tight transition-colors sm:text-xs',
                      active ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground',
                    )}
                  >
                    {tr(b.name)}
                  </span>
                </button>
              )
            })}
          </div>

          <div data-anim="panel" className="mx-auto mt-3 max-w-xl rounded-xl border bg-background/70 p-4" aria-live="polite">
            <div data-anim="panel-body" className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <CurrentIcon className="size-5" />
              </span>
              <div className="min-w-0">
                <div className="font-semibold">{tr(current.name)}</div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{tr(current.desc)}</p>
                <div className="mt-2 inline-flex flex-wrap items-center gap-1.5 rounded-lg bg-muted px-2 py-1 text-xs">
                  <span className="text-muted-foreground">{tr({ fa: 'خروجی نمونه:', en: 'Typical output:' })}</span>
                  <span className="font-medium">{tr(current.output)}</span>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-2 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <MousePointerClick className="size-3.5" />
            {tr({ fa: 'روی هر شاخه بروید یا بزنید تا توضیح آن را ببینید.', en: 'Hover or tap a branch to read about it.' })}
          </p>
        </div>

        {/* ── compact grid (narrow containers) ── */}
        <div className="grid grid-cols-2 gap-2 @lg:hidden">
          <div
            data-anim="card"
            className="col-span-2 flex items-center justify-center gap-2 rounded-xl bg-primary px-3 py-2.5 text-primary-foreground"
          >
            <Calculator className="size-5" />
            <span className="font-bold">{hubLabel}</span>
            <span className="text-xs opacity-80">
              · {tr({ fa: `${BRANCHES.length} شاخه اصلی`, en: `${BRANCHES.length} main branches` })}
            </span>
          </div>
          {BRANCHES.map((b, i) => {
            const Icon = b.icon
            return (
              <div key={i} data-anim="card" className="flex flex-col gap-1.5 rounded-xl border bg-background/70 p-2.5">
                <div className="flex items-center gap-2">
                  <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-3.5" />
                  </span>
                  <span className="text-xs font-semibold leading-tight">{tr(b.name)}</span>
                </div>
                <p className="text-[11px] leading-relaxed text-muted-foreground">{tr(b.desc)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </DiagramFrame>
  )
}
