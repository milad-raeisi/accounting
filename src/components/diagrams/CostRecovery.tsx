import { useMemo, useRef, useState } from 'react'

import type { L } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import { DiagramFrame, type DiagramProps } from './DiagramFrame'

type Inputs = { gross: number; royalty: number; ceiling: number; costs: number; carried: number; split: number }

/** Whole units, rounded once here and derived from each other, so every line shown in the table foots exactly. */
function compute(i: Inputs) {
  const royalty = Math.round((i.gross * i.royalty) / 100)
  const net = i.gross - royalty
  const cap = Math.round((net * i.ceiling) / 100)
  const available = i.costs + i.carried
  const costOil = Math.min(cap, available)
  const carryForward = available - costOil
  const profitOil = net - costOil
  const contractorProfit = Math.round((profitOil * i.split) / 100)
  const governmentProfit = profitOil - contractorProfit
  return { royalty, net, cap, available, costOil, carryForward, profitOil, contractorProfit, governmentProfit }
}

const SLIDERS: { key: keyof Inputs; label: L; min: number; max: number; step: number; pct?: boolean }[] = [
  { key: 'gross', label: { fa: 'ارزش تولید دوره', en: 'Production value this period' }, min: 200, max: 2000, step: 50 },
  { key: 'royalty', label: { fa: 'بهره مالکانه دولت (٪)', en: 'Royalty (%)' }, min: 0, max: 20, step: 1, pct: true },
  { key: 'ceiling', label: { fa: 'سقف کاست ریکاوری از خالص (٪)', en: 'Cost-recovery ceiling of net (%)' }, min: 20, max: 80, step: 5, pct: true },
  { key: 'costs', label: { fa: 'هزینه‌های قابل بازیافت این دوره', en: 'Recoverable costs this period' }, min: 0, max: 1500, step: 50 },
  { key: 'carried', label: { fa: 'هزینه بازیافت‌نشده دوره قبل', en: 'Unrecovered costs brought forward' }, min: 0, max: 1000, step: 50 },
  { key: 'split', label: { fa: 'سهم پیمانکار از نفت سود (٪)', en: "Contractor's share of profit oil (%)" }, min: 10, max: 70, step: 5, pct: true },
]

export default function CostRecovery({ caption }: DiagramProps) {
  const { tr, money, lang } = useI18n()
  const [inp, setInp] = useState<Inputs>({ gross: 1000, royalty: 10, ceiling: 50, costs: 400, carried: 150, split: 40 })
  const r = useMemo(() => compute(inp), [inp])
  const scope = useRef<HTMLDivElement>(null)

  const parts = [
    { key: 'royalty', label: { fa: 'بهره مالکانه دولت', en: 'Royalty' }, value: r.royalty, color: 'bg-liability' },
    { key: 'cost', label: { fa: 'نفت هزینه (به پیمانکار)', en: 'Cost oil (to contractor)' }, value: r.costOil, color: 'bg-asset' },
    { key: 'cp', label: { fa: 'نفت سود پیمانکار', en: 'Contractor profit oil' }, value: r.contractorProfit, color: 'bg-revenue' },
    { key: 'gp', label: { fa: 'نفت سود دولت', en: 'Government profit oil' }, value: r.governmentProfit, color: 'bg-equity' },
  ]

  useGSAP(
    () => {
      const d = prefersReducedMotion() ? 0 : 0.6
      parts.forEach((p) => gsap.to(`[data-cr="${p.key}"]`, { width: `${(p.value / inp.gross) * 100}%`, duration: d, ease: 'power2.out' }))
    },
    { scope, dependencies: [r, lang] },
  )

  const rows: [L, number, boolean?][] = [
    [{ fa: 'ارزش تولید', en: 'Production value' }, inp.gross],
    [{ fa: 'کسر: بهره مالکانه', en: 'Less: royalty' }, -r.royalty],
    [{ fa: 'تولید خالص', en: 'Net production' }, r.net, true],
    [{ fa: 'سقف نفت هزینه', en: 'Cost-oil ceiling' }, r.cap],
    [{ fa: 'هزینه‌های در دسترس (این دوره و منتقل‌شده)', en: 'Costs available (this period and brought forward)' }, r.available],
    [{ fa: 'نفت هزینه (کمترِ سقف و هزینه‌ها)', en: 'Cost oil (lower of ceiling and costs)' }, r.costOil, true],
    [{ fa: 'هزینه منتقل به دوره بعد', en: 'Carried forward to next period' }, r.carryForward],
    [{ fa: 'نفت سود (خالص منهای نفت هزینه)', en: 'Profit oil (net less cost oil)' }, r.profitOil, true],
    [{ fa: 'سهم پیمانکار از نفت سود', en: "Contractor's profit oil" }, r.contractorProfit],
    [{ fa: 'سهم دولت از نفت سود', en: "Government's profit oil" }, r.governmentProfit],
  ]

  return (
    <DiagramFrame
      title={{ fa: 'کاست ریکاوری: تقسیم تولید در قرارداد مشارکت در تولید', en: 'Cost recovery: splitting production under a sharing contract' }}
      caption={caption}
      badge="interactive"
    >
      <div ref={scope} className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
        <div className="space-y-4">
          {SLIDERS.map((s) => (
            <label key={s.key} className="block">
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="text-body">{tr(s.label)}</span>
                <span className="tabular font-semibold text-foreground">{s.pct ? tr({ fa: `${inp[s.key]}٪`, en: `${inp[s.key]}%` }) : money(inp[s.key])}</span>
              </div>
              <input
                type="range"
                min={s.min}
                max={s.max}
                step={s.step}
                value={inp[s.key]}
                onChange={(e) => setInp((v) => ({ ...v, [s.key]: Number(e.target.value) }))}
                className="mt-2 w-full accent-[var(--primary)]"
              />
            </label>
          ))}
          <p className="rounded-[1rem] bg-muted/60 px-4 py-3 text-xs leading-6 text-muted-foreground">
            {tr({
              fa: 'همه نرخ‌ها فرضی و برای آموزش‌اند. سقف، سهم‌ها و قواعد واقعی را قرارداد نفتی هر میدان تعیین می‌کند.',
              en: 'All rates are illustrative. The real ceiling, shares and rules come from each field’s petroleum contract.',
            })}
          </p>
        </div>

        <div>
          <div className="text-xs text-muted-foreground">{tr({ fa: 'تقسیم ارزش تولید', en: 'How the production value is shared' })}</div>
          <div className="mt-2 flex h-9 overflow-hidden rounded-full bg-muted" dir="ltr">
            {parts.map((p) => (
              <div key={p.key} data-cr={p.key} className={cn('h-full', p.color)} style={{ width: 0 }} />
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
            {parts.map((p) => (
              <div key={p.key} className="flex items-center gap-2">
                <span className={cn('size-2.5 rounded-full', p.color)} />
                <span className="text-muted-foreground">{tr(p.label)}</span>
                <span className="ms-auto tabular font-semibold text-foreground">{money(p.value)}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 overflow-hidden rounded-[1rem] bg-card">
            <table className="w-full text-sm">
              <tbody>
                {rows.map(([label, value, strong], i) => (
                  <tr key={i} className={cn('border-b last:border-b-0', strong && 'bg-muted/40 font-semibold')}>
                    <td className="px-3 py-2 text-body">{tr(label)}</td>
                    <td className="px-3 py-2 text-end tabular text-foreground">{money(value)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {r.carryForward > 0 && (
            <p className="mt-3 text-xs leading-6 text-muted-foreground">
              {tr({
                fa: 'چون هزینه‌ها از سقف بیشتر بود، مانده آن‌ها از دست نمی‌رود و به دوره بعد منتقل می‌شود.',
                en: 'Costs exceeded the ceiling, so the excess is not lost: it carries forward to the next period.',
              })}
            </p>
          )}
        </div>
      </div>
    </DiagramFrame>
  )
}
