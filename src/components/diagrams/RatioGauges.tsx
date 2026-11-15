import { useRef, useState } from 'react'
import { AlertTriangle, CheckCircle2, Droplets, Percent, Scale } from 'lucide-react'

import { Tabs, TabsContent, TabsContents, TabsList, TabsTrigger } from '@/components/animate-ui/components/radix/tabs'
import { AnimatedNumber } from '@/components/ui/AnimatedNumber'
import type { L } from '@/content/types'
import { novaAccounts, novaAdjustments, novaTransactions } from '@/content/nova'
import { useI18n } from '@/i18n/I18nProvider'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'
import { balanceSheet, computeBalances, incomeStatement } from '@/lib/ledger'
import { cn } from '@/lib/utils'
import { DiagramFrame, useInViewTimeline, type DiagramProps } from './DiagramFrame'

/* ───────────────────────── Nova month-end (adjusted) ───────────────────────── */

const BAL = computeBalances(novaAccounts, [...novaTransactions, ...novaAdjustments])
const IS = incomeStatement(BAL)
const BS = balanceSheet(BAL)
const CASH = BAL.get('cash')!.balance
const AR = BAL.get('ar')!.balance
const CA = BS.totalCurrentAssets
const CL = BS.totalCurrentLiabilities
const TL = BS.totalLiabilities
const TA = BS.totalAssets
const EQ = BS.equity.total
const NI = IS.netIncome
const REV = IS.totalRevenue

type Fmt = 'ratio' | 'pct'
type Status = { tone: 'good' | 'high' | 'low'; label: L }
type Gauge = {
  id: string
  title: L
  formula: L
  num: number
  den: number
  fmt: Fmt
  max: number
  band: [number, number]
  bandNote?: L
  status: Status
  note: L
}

const ratio = (a: number, b: number, fmt: Fmt) => (fmt === 'pct' ? (a / b) * 100 : a / b)

const GROUPS: { id: 'liquidity' | 'profitability' | 'leverage'; label: L; gauges: Gauge[] }[] = [
  {
    id: 'liquidity',
    label: { fa: 'نقدینگی', en: 'Liquidity' },
    gauges: [
      {
        id: 'current',
        title: { fa: 'نسبت جاری', en: 'Current ratio' },
        formula: { fa: 'دارایی‌های جاری ÷ بدهی‌های جاری', en: 'Current assets ÷ Current liabilities' },
        num: CA,
        den: CL,
        fmt: 'ratio',
        max: 5,
        band: [1.5, 3],
        status: { tone: 'high', label: { fa: 'بسیار بالا', en: 'Very high' } },
        note: {
          fa: 'نوا می‌تواند بدهی‌های جاری‌اش را بیش از ۲۲ بار بپردازد؛ کاملاً امن است، اما احتمالاً وجه نقد زیادی بیکار مانده است.',
          en: 'Nova could pay its current debts more than 22 times over, very safe, but a lot of cash may be sitting idle.',
        },
      },
      {
        id: 'quick',
        title: { fa: 'نسبت آنی', en: 'Quick ratio' },
        formula: {
          fa: '(موجودی نقد + حساب‌های دریافتنی) ÷ بدهی‌های جاری',
          en: '(Cash + Receivables) ÷ Current liabilities',
        },
        num: CASH + AR,
        den: CL,
        fmt: 'ratio',
        max: 4,
        band: [1, 2],
        status: { tone: 'high', label: { fa: 'بسیار بالا', en: 'Very high' } },
        note: {
          fa: 'حتی بدون ملزومات و پیش‌پرداخت‌ها، دارایی‌های آنی بیش از ۲۱ برابر بدهی‌های جاری است.',
          en: 'Even without supplies and prepaid items, quick assets cover current liabilities more than 21 times.',
        },
      },
    ],
  },
  {
    id: 'profitability',
    label: { fa: 'سودآوری', en: 'Profitability' },
    gauges: [
      {
        id: 'npm',
        title: { fa: 'حاشیه سود خالص', en: 'Net profit margin' },
        formula: { fa: 'سود خالص ÷ درآمد', en: 'Net income ÷ Revenue' },
        num: NI,
        den: REV,
        fmt: 'pct',
        max: 50,
        band: [10, 20],
        status: { tone: 'good', label: { fa: 'قوی', en: 'Strong' } },
        note: {
          fa: 'از هر ۱۰۰ واحد درآمد، حدود ۳۸ واحد به سود خالص تبدیل شده است؛ برای یک کسب‌وکار خدماتی بسیار خوب است.',
          en: 'About 38 of every 100 of revenue ends up as net income, excellent for a service business.',
        },
      },
      {
        id: 'roe',
        title: { fa: 'بازده حقوق مالکانه', en: 'Return on equity' },
        formula: { fa: 'سود خالص ÷ حقوق مالکانه', en: 'Net income ÷ Owner’s equity' },
        num: NI,
        den: EQ,
        fmt: 'pct',
        max: 20,
        band: [10, 20],
        bandNote: { fa: 'سالانه', en: 'per year' },
        status: { tone: 'good', label: { fa: 'قوی (ماهانه)', en: 'Strong (monthly)' } },
        note: {
          fa: 'این بازده فقط در یک ماه به دست آمده؛ اگر سالانه شود بسیار بالاتر از محدوده معمول ۱۰ تا ۲۰ درصد در سال است.',
          en: 'Earned in a single month, annualised it would be far above the typical 10–20% a year.',
        },
      },
    ],
  },
  {
    id: 'leverage',
    label: { fa: 'اهرم مالی', en: 'Leverage' },
    gauges: [
      {
        id: 'debt',
        title: { fa: 'نسبت بدهی', en: 'Debt ratio' },
        formula: { fa: 'جمع بدهی‌ها ÷ جمع دارایی‌ها', en: 'Total liabilities ÷ Total assets' },
        num: TL,
        den: TA,
        fmt: 'pct',
        max: 100,
        band: [0, 50],
        status: { tone: 'good', label: { fa: 'کم‌ریسک', en: 'Low risk' } },
        note: {
          fa: 'فقط حدود یک‌چهارم دارایی‌ها از محل بدهی تأمین شده و بقیه از سرمایه مالک است.',
          en: 'Only about a quarter of the assets is financed by creditors; the owner funds the rest.',
        },
      },
      {
        id: 'de',
        title: { fa: 'نسبت بدهی به حقوق مالکانه', en: 'Debt-to-equity' },
        formula: { fa: 'جمع بدهی‌ها ÷ حقوق مالکانه', en: 'Total liabilities ÷ Owner’s equity' },
        num: TL,
        den: EQ,
        fmt: 'ratio',
        max: 3,
        band: [0, 1],
        status: { tone: 'good', label: { fa: 'اهرم پایین', en: 'Low leverage' } },
        note: {
          fa: 'در برابر هر ۱ واحد حقوق مالکانه حدود ۰٫۳۲ واحد بدهی وجود دارد؛ وابستگی به وام کم است.',
          en: 'There is about 0.32 of debt for every 1 of owner’s equity, little reliance on borrowing.',
        },
      },
    ],
  },
]

/* ───────────────────────── gauge geometry (LTR numeric scale) ───────────────────────── */

const CX = 100
const CY = 102
const pt = (f: number, r: number) => {
  const a = Math.PI * f
  return `${(CX - r * Math.cos(a)).toFixed(2)} ${(CY - r * Math.sin(a)).toFixed(2)}`
}
const arc = (f1: number, f2: number, r: number) => `M${pt(f1, r)} A${r} ${r} 0 0 1 ${pt(f2, r)}`

const STATUS = {
  good: { pill: 'bg-revenue/14 text-revenue', icon: CheckCircle2 },
  high: { pill: 'bg-gold/20 text-foreground', icon: AlertTriangle },
  low: { pill: 'bg-liability/14 text-liability', icon: AlertTriangle },
}

function GaugeCard({ g, armed }: { g: Gauge; armed: boolean }) {
  const { tr, num, money, lang, isFa } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const value = ratio(g.num, g.den, g.fmt)
  const f = Math.min(1, Math.max(0, value / g.max))
  const off = value > g.max
  const decimals = g.fmt === 'pct' ? 1 : 2
  const pctSign = isFa ? '٪' : '%'
  const fmtScale = (v: number) => (g.fmt === 'pct' ? `${num(v)}${pctSign}` : num(v, v % 1 ? 1 : 0))
  const S = STATUS[g.status.tone]
  const StatusIcon = S.icon

  useGSAP(
    () => {
      const q = gsap.utils.selector(ref)
      const needle = q('[data-needle]')
      const angle = -90 + 180 * f
      if (!armed) {
        gsap.set(needle, { rotation: -90, svgOrigin: `${CX} ${CY}` })
        gsap.set(q('[data-value-arc]'), { drawSVG: '0%' })
        return
      }
      if (prefersReducedMotion()) {
        gsap.set(needle, { rotation: angle, svgOrigin: `${CX} ${CY}` })
        return
      }
      const tl = gsap.timeline()
      tl.fromTo(q('[data-band]'), { drawSVG: '0%' }, { drawSVG: '100%', duration: 0.6, ease: 'power2.out' })
        .fromTo(q('[data-value-arc]'), { drawSVG: '0%' }, { drawSVG: '100%', duration: 1.2, ease: 'power3.out' }, 0.15)
        .fromTo(
          needle,
          { rotation: -90, svgOrigin: `${CX} ${CY}` },
          { rotation: angle, svgOrigin: `${CX} ${CY}`, duration: 1.6, ease: off ? 'back.out(1.6)' : 'elastic.out(1, 0.6)' },
          0.15,
        )
      if (off) {
        // pinned against the stop
        tl.to(needle, { rotation: angle - 4, duration: 0.07, yoyo: true, repeat: 5, ease: 'sine.inOut' }, '-=0.6').from(
          q('[data-off]'),
          { y: 6, autoAlpha: 0, duration: 0.4 },
          '<',
        )
      }
    },
    { scope: ref, dependencies: [armed, lang], revertOnUpdate: true },
  )

  return (
    <article ref={ref} className="flex min-w-0 flex-col rounded-2xl border bg-background/70 p-3 sm:p-4">
      <header className="flex items-start justify-between gap-2">
        <h4 className="text-sm font-bold sm:text-base">{tr(g.title)}</h4>
        <span className={cn('inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold', S.pill)}>
          <StatusIcon className="size-3" />
          {tr(g.status.label)}
        </span>
      </header>
      <p className="mt-1 text-[11px] text-muted-foreground sm:text-xs">{tr(g.formula)}</p>
      <p className="text-[11px] font-medium tabular sm:text-xs">
        {money(g.num)} ÷ {money(g.den)}
      </p>

      <div dir="ltr" className="relative mx-auto mt-2 w-full max-w-[250px]">
        <svg viewBox="0 0 200 120" className="block w-full overflow-visible" role="img" aria-label={`${tr(g.title)}: ${num(value, decimals)}`}>
          {/* ticks */}
          {[0, 0.25, 0.5, 0.75, 1].map((t) => (
            <path key={t} d={`M${pt(t, 89)} L${pt(t, 94)}`} className="stroke-muted-foreground/60" strokeWidth={1.5} strokeLinecap="round" />
          ))}
          {/* scale track + healthy band */}
          <path d={arc(0, 1, 80)} fill="none" className="stroke-muted" strokeWidth={12} strokeLinecap="round" />
          <path
            data-band
            d={arc(g.band[0] / g.max, Math.min(1, g.band[1] / g.max), 80)}
            fill="none"
            className="stroke-revenue/45"
            strokeWidth={12}
          />
          {/* value */}
          <path data-value-arc d={arc(0, Math.max(f, 0.001), 66)} fill="none" className="stroke-primary" strokeWidth={6} strokeLinecap="round" />
          {/* needle */}
          <g data-needle>
            <path d={`M${CX} ${CY - 74} L${CX + 3.5} ${CY} L${CX - 3.5} ${CY} Z`} className="fill-foreground" />
            <circle cx={CX} cy={CY} r={7} className="fill-foreground" />
            <circle cx={CX} cy={CY} r={2.5} className="fill-card" />
          </g>
          {/* scale ends */}
          <text x={20} y={118} textAnchor="middle" className="fill-muted-foreground text-[10px] tabular">
            {fmtScale(0)}
          </text>
          <text x={180} y={118} textAnchor="middle" className="fill-muted-foreground text-[10px] tabular">
            {fmtScale(g.max)}
          </text>
        </svg>
      </div>

      <div className="mt-1 flex flex-wrap items-baseline justify-center gap-x-2 text-center">
        <AnimatedNumber
          value={armed ? value : 0}
          format="number"
          decimals={decimals}
          suffix={g.fmt === 'pct' ? pctSign : undefined}
          className="text-2xl font-bold text-primary sm:text-3xl"
        />
        {g.fmt === 'ratio' && <span className="text-xs text-muted-foreground">{tr({ fa: 'برابر', en: 'times' })}</span>}
      </div>
      {off && (
        <p data-off className="mt-0.5 text-center text-[10px] font-medium text-muted-foreground">
          {tr({ fa: `فراتر از مقیاس: عقربه روی ${fmtScale(g.max)} ثابت مانده است`, en: `Off the scale: needle pinned at ${fmtScale(g.max)}` })}
        </p>
      )}

      <div className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
        <span aria-hidden className="h-2 w-4 rounded-sm bg-revenue/45" />
        {tr({ fa: 'محدوده مطلوب معمول:', en: 'Typical healthy range:' })}
        <span className="font-semibold text-foreground tabular">
          {g.band[0] === 0
            ? tr({ fa: `کمتر از ${fmtScale(g.band[1])}`, en: `below ${fmtScale(g.band[1])}` })
            : tr({ fa: `${fmtScale(g.band[0])} تا ${fmtScale(g.band[1])}`, en: `${fmtScale(g.band[0])} to ${fmtScale(g.band[1])}` })}
          {g.bandNote && ` ${tr(g.bandNote)}`}
        </span>
      </div>

      <p className="mt-3 border-t pt-2.5 text-xs leading-relaxed text-foreground/80">{tr(g.note)}</p>
    </article>
  )
}

/* ───────────────────────── figure ───────────────────────── */

const GROUP_ICON = { liquidity: Droplets, profitability: Percent, leverage: Scale }

export default function RatioGauges({ caption }: DiagramProps) {
  const { tr, money, lang } = useI18n()
  const scope = useRef<HTMLDivElement>(null)
  const [tab, setTab] = useState<(typeof GROUPS)[number]['id']>('liquidity')
  const [armed, setArmed] = useState(prefersReducedMotion)

  const { replay } = useInViewTimeline(
    scope,
    (tl) => {
      tl.from('[data-anim="tabs"]', { y: 12, autoAlpha: 0, duration: 0.45 })
        .from('[data-anim="cards"]', { y: 18, autoAlpha: 0, duration: 0.55 }, '-=0.2')
        .add(() => setArmed(true), '-=0.3')
        .from('[data-anim="inputs"] > *', { y: 8, autoAlpha: 0, stagger: 0.04, duration: 0.35 }, '+=0.4')
    },
    [lang],
  )

  const inputs: [L, number][] = [
    [{ fa: 'دارایی‌های جاری', en: 'Current assets' }, CA],
    [{ fa: 'دارایی‌های آنی', en: 'Quick assets' }, CASH + AR],
    [{ fa: 'بدهی‌های جاری', en: 'Current liabilities' }, CL],
    [{ fa: 'جمع دارایی‌ها', en: 'Total assets' }, TA],
    [{ fa: 'جمع بدهی‌ها', en: 'Total liabilities' }, TL],
    [{ fa: 'حقوق مالکانه', en: 'Owner’s equity' }, EQ],
    [{ fa: 'درآمد', en: 'Revenue' }, REV],
    [{ fa: 'سود خالص', en: 'Net income' }, NI],
  ]

  return (
    <DiagramFrame
      title={{ fa: 'نسبت‌های مالی استودیو طراحی نوا', en: 'Financial ratios: Nova Design Studio' }}
      caption={caption}
      badge="interactive"
      onReplay={() => {
        setArmed(prefersReducedMotion())
        replay()
      }}
    >
      <div ref={scope} className="space-y-4">
        <Tabs value={tab} onValueChange={(v) => setTab(v as typeof tab)}>
          <div data-anim="tabs" className="flex flex-wrap items-center justify-between gap-2">
            <TabsList className="w-full sm:w-fit">
              {GROUPS.map((gr) => {
                const Icon = GROUP_ICON[gr.id]
                return (
                  <TabsTrigger key={gr.id} value={gr.id} className="px-2 text-xs sm:px-3 sm:text-sm">
                    <Icon className="hidden size-4 sm:block" />
                    {tr(gr.label)}
                  </TabsTrigger>
                )
              })}
            </TabsList>
            <span className="text-[11px] text-muted-foreground">
              {tr({ fa: 'ارقام پایان ماه، پس از ثبت‌های اصلاحی', en: 'Month-end figures, after adjusting entries' })}
            </span>
          </div>
          <div data-anim="cards">
            <TabsContents>
              {GROUPS.map((gr) => (
                <TabsContent key={gr.id} value={gr.id}>
                  <div className="grid gap-3 pt-1 sm:grid-cols-2 sm:gap-4">
                    {gr.gauges.map((g) => (
                      <GaugeCard key={g.id} g={g} armed={armed} />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </TabsContents>
          </div>
        </Tabs>

        <div data-anim="inputs" className="flex flex-wrap gap-1.5">
          {inputs.map(([label, v], i) => (
            <span key={i} className="inline-flex items-center gap-1.5 rounded-full border bg-background/70 px-2.5 py-1 text-[11px]">
              <span className="text-muted-foreground">{tr(label)}</span>
              <span className="font-semibold tabular">{money(v)}</span>
            </span>
          ))}
        </div>
      </div>
    </DiagramFrame>
  )
}
