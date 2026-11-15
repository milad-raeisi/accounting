import { useEffect, useId, useMemo, useRef, useState } from 'react'
import useMeasure from 'react-use-measure'

import { Tabs, TabsContent, TabsContents, TabsList, TabsTrigger } from '@/components/animate-ui/components/radix/tabs'
import { useI18n } from '@/i18n/I18nProvider'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import { DiagramFrame, useInViewTimeline, type DiagramProps } from './DiagramFrame'

type Inputs = { cost: number; salvage: number; life: number }
type Row = { year: number; dep: number; acc: number; bv: number }
type Method = 'sl' | 'ddb'

const DEFAULTS: Inputs = { cost: 20000, salvage: 2000, life: 5 }

function straightLine({ cost, salvage, life }: Inputs): Row[] {
  const annual = Math.round((cost - salvage) / life)
  const rows: Row[] = []
  let acc = 0
  for (let year = 1; year <= life; year++) {
    const dep = year === life ? cost - salvage - acc : annual
    acc += dep
    rows.push({ year, dep, acc, bv: cost - acc })
  }
  return rows
}

/** Double-declining balance: 2 ÷ life × opening book value, never below salvage (final year plugged to salvage). */
function doubleDeclining({ cost, salvage, life }: Inputs): Row[] {
  const rate = 2 / life
  const rows: Row[] = []
  let bv = cost
  let acc = 0
  for (let year = 1; year <= life; year++) {
    let dep = Math.round(bv * rate)
    if (bv - dep < salvage || year === life) dep = bv - salvage
    dep = Math.max(0, dep)
    bv -= dep
    acc += dep
    rows.push({ year, dep, acc, bv })
  }
  return rows
}

const maxSalvage = (cost: number) => Math.min(10000, Math.floor((cost * 0.4) / 500) * 500)

function niceMax(v: number) {
  for (const step of [500, 1000, 2000, 2500, 5000, 10000, 20000]) {
    if (v / step <= 5) return { max: Math.ceil(v / step) * step, step }
  }
  return { max: v, step: v / 5 }
}

const SERIES: Record<Method, { stroke: string; fill: string; swatch: string }> = {
  sl: { stroke: 'stroke-primary', fill: 'fill-primary', swatch: 'bg-primary' },
  ddb: { stroke: 'stroke-credit', fill: 'fill-credit', swatch: 'bg-credit' },
}

/* ───────────────────────── chart ───────────────────────── */

function BookValueChart({
  inputs,
  data,
  armed,
  hover,
  onHover,
}: {
  inputs: Inputs
  data: Record<Method, Row[]>
  armed: boolean
  hover: number | null
  onHover: (year: number | null) => void
}) {
  const { tr, num, money, lang, dir } = useI18n()
  const [measureRef, bounds] = useMeasure({ offsetSize: true })
  const svgRef = useRef<SVGSVGElement>(null)
  const scope = useRef<HTMLDivElement>(null)

  const W = Math.max(280, Math.round(bounds.width) || 640)
  const H = Math.round(Math.min(320, Math.max(220, W * 0.48)))
  const P = { l: 52, r: 16, t: 16, b: 34 }
  const iw = W - P.l - P.r
  const ih = H - P.t - P.b
  const { max: yMax, step: yStep } = niceMax(inputs.cost)
  const x = (year: number) => P.l + (year / inputs.life) * iw
  const y = (v: number) => P.t + (1 - v / yMax) * ih

  const points = (m: Method) => [{ year: 0, bv: inputs.cost }, ...data[m].map((r) => ({ year: r.year, bv: r.bv }))]
  const pathOf = (m: Method) =>
    points(m)
      .map((p, i) => `${i ? 'L' : 'M'}${x(p.year).toFixed(1)} ${y(p.bv).toFixed(1)}`)
      .join(' ')

  const ticks: number[] = []
  for (let v = 0; v <= yMax + 1e-6; v += yStep) ticks.push(v)
  const dataKey = `${inputs.cost}-${inputs.salvage}-${inputs.life}`

  useGSAP(
    () => {
      if (!armed || prefersReducedMotion()) return
      const q = gsap.utils.selector(scope)
      const series = q('[data-series]')
      const per = 1.3 / (inputs.life + 1)
      const tl = gsap.timeline({
        onComplete: () => gsap.set(series, { clearProps: 'strokeDasharray,strokeDashoffset' }),
      })
      tl.fromTo(series, { drawSVG: '0%' }, { drawSVG: '100%', duration: 1.3, ease: 'none', stagger: 0.25 })
        .from(q('[data-pt="sl"]'), { scale: 0, transformOrigin: '50% 50%', duration: 0.35, stagger: per, ease: 'back.out(3)' }, 0)
        .from(q('[data-pt="ddb"]'), { scale: 0, transformOrigin: '50% 50%', duration: 0.35, stagger: per, ease: 'back.out(3)' }, 0.25)
        .from(q('[data-salvage]'), { autoAlpha: 0, duration: 0.5 }, 0)
    },
    { scope, dependencies: [armed, dataKey, lang], revertOnUpdate: true },
  )

  const pick = (clientX: number) => {
    const r = svgRef.current?.getBoundingClientRect()
    if (!r) return
    const year = Math.round(((clientX - r.left - P.l) / iw) * inputs.life)
    onHover(Math.max(0, Math.min(inputs.life, year)))
  }

  const hoverX = hover === null ? 0 : x(hover)
  const bvAt = (m: Method, year: number) => (year === 0 ? inputs.cost : data[m][year - 1].bv)

  return (
    <div ref={scope}>
      {/* numeric axes stay LTR in both languages */}
      <div ref={measureRef} dir="ltr" className="relative w-full select-none">
        <svg
          ref={svgRef}
          width={W}
          height={H}
          className="block max-w-full touch-pan-y overflow-visible"
          role="img"
          aria-label={tr({
            fa: 'نمودار ارزش دفتری دارایی در طول عمر مفید به روش خط مستقیم و نزولی دوبرابر',
            en: 'Book value over the useful life: straight-line vs double-declining balance',
          })}
          onPointerMove={(e) => pick(e.clientX)}
          onPointerDown={(e) => pick(e.clientX)}
          onPointerLeave={(e) => {
            if (e.pointerType === 'mouse') onHover(null)
          }}
        >
          {/* grid + y labels */}
          {ticks.map((v) => (
            <g key={v}>
              <line x1={P.l} x2={W - P.r} y1={y(v)} y2={y(v)} className="stroke-border" strokeWidth={1} />
              <text x={P.l - 8} y={y(v)} dy="0.35em" textAnchor="end" className="fill-muted-foreground text-[10px] tabular">
                {num(v)}
              </text>
            </g>
          ))}
          {/* x labels */}
          {Array.from({ length: inputs.life + 1 }, (_, yr) => (
            <text key={yr} x={x(yr)} y={H - P.b + 18} textAnchor="middle" className="fill-muted-foreground text-[10px] tabular">
              {num(yr)}
            </text>
          ))}
          <text x={W - P.r} y={H - 2} textAnchor="end" className="fill-muted-foreground text-[10px]">
            {tr({ fa: 'سال', en: 'Year' })}
          </text>

          {/* salvage line */}
          <g data-salvage>
            <line
              x1={P.l}
              x2={W - P.r}
              y1={y(inputs.salvage)}
              y2={y(inputs.salvage)}
              className="stroke-muted-foreground"
              strokeWidth={1.25}
              strokeDasharray="5 5"
            />
            <text x={P.l + 6} y={y(inputs.salvage) - 6} className="fill-muted-foreground text-[10px] font-medium">
              {tr({ fa: 'ارزش اسقاط', en: 'Salvage value' })} · {money(inputs.salvage)}
            </text>
          </g>

          {/* hover guide */}
          {hover !== null && (
            <line x1={hoverX} x2={hoverX} y1={P.t} y2={H - P.b} className="stroke-foreground/30" strokeWidth={1} strokeDasharray="3 4" />
          )}

          {/* series */}
          <g className={cn('transition-opacity duration-300', !armed && 'opacity-0')}>
            {(['sl', 'ddb'] as Method[]).map((m) => (
              <path
                key={m}
                data-series={m}
                d={pathOf(m)}
                fill="none"
                className={SERIES[m].stroke}
                strokeWidth={2.75}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
            {(['sl', 'ddb'] as Method[]).map((m) =>
              points(m).map((p) => (
                <circle
                  key={`${m}-${p.year}`}
                  data-pt={m}
                  cx={x(p.year)}
                  cy={y(p.bv)}
                  r={hover === p.year ? 5.5 : 4}
                  strokeWidth={2.25}
                  className={cn('fill-card transition-[r] duration-200', SERIES[m].stroke)}
                />
              )),
            )}
          </g>
        </svg>

        {/* tooltip */}
        {hover !== null && (
          <div
            dir={dir}
            className="pointer-events-none absolute z-10 min-w-[8.5rem] rounded-lg border bg-popover/95 px-2.5 py-1.5 text-[11px] shadow-lg backdrop-blur"
            style={{
              left: Math.min(Math.max(hoverX, 76), W - 76),
              top: 4,
              transform: 'translateX(-50%)',
            }}
          >
            <div className="mb-0.5 font-semibold">
              {tr({ fa: `پایان سال ${hover}`, en: `End of year ${hover}` })}
            </div>
            {(['sl', 'ddb'] as Method[]).map((m) => (
              <div key={m} className="flex items-center justify-between gap-3 tabular">
                <span className="inline-flex items-center gap-1.5">
                  <span className={cn('size-2 rounded-full', SERIES[m].swatch)} />
                  {m === 'sl' ? tr({ fa: 'خط مستقیم', en: 'Straight-line' }) : tr({ fa: 'نزولی دوبرابر', en: 'DDB' })}
                </span>
                <span className="font-semibold">{money(bvAt(m, hover))}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/* ───────────────────────── slider ───────────────────────── */

function Slider({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  display: string
  onChange: (v: number) => void
}) {
  const id = useId()
  return (
    <div className="min-w-0 rounded-xl border bg-background/70 px-3 py-2.5">
      <div className="mb-1.5 flex items-baseline justify-between gap-2">
        <label htmlFor={id} className="text-xs font-medium text-muted-foreground">
          {label}
        </label>
        <output htmlFor={id} className="text-sm font-bold tabular">
          {display}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-valuetext={display}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-5 w-full cursor-pointer accent-primary"
      />
    </div>
  )
}

/* ───────────────────────── figure ───────────────────────── */

export default function DepreciationChart({ caption }: DiagramProps) {
  const { tr, money, num, lang, isFa } = useI18n()
  const scope = useRef<HTMLDivElement>(null)
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS)
  const [committed, setCommitted] = useState<Inputs>(DEFAULTS)
  const [armed, setArmed] = useState(prefersReducedMotion)
  const [hover, setHover] = useState<number | null>(null)
  const [method, setMethod] = useState<Method>('sl')

  // redraw once the learner pauses on a slider
  useEffect(() => {
    const id = window.setTimeout(() => setCommitted(inputs), 220)
    return () => window.clearTimeout(id)
  }, [inputs])

  const data = useMemo(() => ({ sl: straightLine(committed), ddb: doubleDeclining(committed) }), [committed])
  const depreciable = committed.cost - committed.salvage
  const ratePct = (2 / committed.life) * 100
  const hoverYear = hover !== null && hover <= committed.life ? hover : null

  const { replay } = useInViewTimeline(
    scope,
    (tl) => {
      tl.from('[data-anim="input"]', { y: 16, autoAlpha: 0, stagger: 0.08, duration: 0.5 })
        .from('[data-anim="legend"]', { y: 10, autoAlpha: 0, stagger: 0.08, duration: 0.45 }, '-=0.25')
        .from('[data-anim="chart"]', { autoAlpha: 0, duration: 0.5 }, '-=0.2')
        .add(() => setArmed(true))
        .from('[data-anim="table"]', { y: 16, autoAlpha: 0, duration: 0.5 }, '+=0.6')
    },
    [lang],
  )

  const pctText = (v: number) => (isFa ? `${num(v, v % 1 ? 1 : 0)}٪` : `${num(v, v % 1 ? 1 : 0)}%`)
  const methodName = (m: Method) => (m === 'sl' ? tr({ fa: 'خط مستقیم', en: 'Straight-line' }) : tr({ fa: 'نزولی دوبرابر', en: 'Double-declining balance' }))

  return (
    <DiagramFrame
      title={{ fa: 'استهلاک: خط مستقیم در برابر نزولی دوبرابر', en: 'Depreciation: straight-line vs double-declining balance' }}
      caption={caption}
      badge="interactive"
      onReplay={() => {
        setArmed(prefersReducedMotion())
        replay()
      }}
    >
      <div ref={scope} className="space-y-4">
        {/* inputs */}
        <div className="grid gap-2 sm:grid-cols-3 sm:gap-3">
          <div data-anim="input">
            <Slider
              label={tr({ fa: 'بهای تمام‌شده', en: 'Cost' })}
              value={inputs.cost}
              min={5000}
              max={50000}
              step={1000}
              display={money(inputs.cost)}
              onChange={(v) => setInputs((p) => ({ ...p, cost: v, salvage: Math.min(p.salvage, maxSalvage(v)) }))}
            />
          </div>
          <div data-anim="input">
            <Slider
              label={tr({ fa: 'ارزش اسقاط', en: 'Salvage value' })}
              value={inputs.salvage}
              min={0}
              max={maxSalvage(inputs.cost)}
              step={500}
              display={money(inputs.salvage)}
              onChange={(v) => setInputs((p) => ({ ...p, salvage: v }))}
            />
          </div>
          <div data-anim="input">
            <Slider
              label={tr({ fa: 'عمر مفید (سال)', en: 'Useful life (years)' })}
              value={inputs.life}
              min={3}
              max={10}
              step={1}
              display={num(inputs.life)}
              onChange={(v) => setInputs((p) => ({ ...p, life: v }))}
            />
          </div>
        </div>

        {/* legend + formulas */}
        <div className="grid gap-2 text-xs sm:grid-cols-2">
          <div data-anim="legend" className="flex items-start gap-2 rounded-xl bg-primary/8 px-3 py-2">
            <span className="mt-1 h-1 w-5 shrink-0 rounded-full bg-primary" />
            <div className="min-w-0">
              <div className="font-semibold text-foreground">{methodName('sl')}</div>
              <div className="text-muted-foreground">
                {tr({
                  fa: `(بهای تمام‌شده − ارزش اسقاط) ÷ عمر مفید = ${money(data.sl[0].dep)} در هر سال`,
                  en: `(cost − salvage) ÷ life = ${money(data.sl[0].dep)} every year`,
                })}
              </div>
            </div>
          </div>
          <div data-anim="legend" className="flex items-start gap-2 rounded-xl bg-credit/10 px-3 py-2">
            <span className="mt-1 h-1 w-5 shrink-0 rounded-full bg-credit" />
            <div className="min-w-0">
              <div className="font-semibold text-foreground">{methodName('ddb')}</div>
              <div className="text-muted-foreground">
                {tr({
                  fa: `نرخ ۲ ÷ ${num(committed.life)} = ${pctText(ratePct)} از ارزش دفتری اول سال؛ سال اول ${money(data.ddb[0].dep)}، و هرگز کمتر از ارزش اسقاط نمی‌شود`,
                  en: `rate 2 ÷ ${committed.life} = ${pctText(ratePct)} of opening book value; year 1 ${money(data.ddb[0].dep)}, never below salvage`,
                })}
              </div>
            </div>
          </div>
        </div>

        {/* chart */}
        <div data-anim="chart" className="rounded-xl border bg-background/60 p-2 pt-3 sm:p-3">
          <div className="mb-1 px-1 text-[11px] font-medium text-muted-foreground">{tr({ fa: 'ارزش دفتری', en: 'Book value' })}</div>
          <BookValueChart inputs={committed} data={data} armed={armed} hover={hoverYear} onHover={setHover} />
          <p className="mt-1 px-1 text-[11px] text-muted-foreground">
            {tr({
              fa: `جمع استهلاک در هر دو روش برابر است: ${money(depreciable)} (بهای تمام‌شده منهای ارزش اسقاط). فقط زمان‌بندی فرق می‌کند. روی نمودار حرکت کنید تا ارزش هر سال را ببینید.`,
              en: `Both methods depreciate the same total, ${money(depreciable)} (cost minus salvage); only the timing differs. Hover or tap the chart to read each year.`,
            })}
          </p>
        </div>

        {/* schedules */}
        <div data-anim="table">
          <Tabs value={method} onValueChange={(v) => setMethod(v as Method)}>
            <TabsList className="w-full sm:w-fit">
              {(['sl', 'ddb'] as Method[]).map((m) => (
                <TabsTrigger key={m} value={m} className="px-3 text-xs sm:text-sm">
                  <span className={cn('size-2 rounded-full', SERIES[m].swatch)} />
                  {methodName(m)}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContents>
              {(['sl', 'ddb'] as Method[]).map((m) => (
                <TabsContent key={m} value={m}>
                  <div className="overflow-x-auto rounded-xl border">
                    <table className="w-full min-w-[320px] text-xs sm:text-sm">
                      <caption className="sr-only">{methodName(m)}</caption>
                      <thead className="bg-muted/50 text-[11px] text-muted-foreground sm:text-xs">
                        <tr>
                          <th scope="col" className="px-3 py-2 text-start font-medium">
                            {tr({ fa: 'سال', en: 'Year' })}
                          </th>
                          <th scope="col" className="px-3 py-2 text-end font-medium">
                            {tr({ fa: 'هزینه استهلاک', en: 'Depreciation' })}
                          </th>
                          <th scope="col" className="px-3 py-2 text-end font-medium">
                            {tr({ fa: 'استهلاک انباشته', en: 'Accumulated' })}
                          </th>
                          <th scope="col" className="px-3 py-2 text-end font-medium">
                            {tr({ fa: 'ارزش دفتری پایان سال', en: 'Ending book value' })}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="tabular">
                        <tr className={cn('border-t', hoverYear === 0 && 'bg-gold/12')}>
                          <td className="px-3 py-1.5 text-muted-foreground">{num(0)}</td>
                          <td className="px-3 py-1.5 text-end text-muted-foreground" />
                          <td className="px-3 py-1.5 text-end text-muted-foreground" />
                          <td className="px-3 py-1.5 text-end font-semibold">{money(committed.cost)}</td>
                        </tr>
                        {data[m].map((r) => (
                          <tr key={r.year} className={cn('border-t transition-colors', hoverYear === r.year && 'bg-gold/12')}>
                            <td className="px-3 py-1.5">{num(r.year)}</td>
                            <td className={cn('px-3 py-1.5 text-end font-medium', m === 'sl' ? 'text-primary' : 'text-credit')}>{money(r.dep)}</td>
                            <td className="px-3 py-1.5 text-end">{money(r.acc)}</td>
                            <td className="px-3 py-1.5 text-end font-semibold">{money(r.bv)}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="border-t bg-muted/30 font-semibold">
                          <td className="px-3 py-1.5">{tr({ fa: 'جمع', en: 'Total' })}</td>
                          <td className="px-3 py-1.5 text-end tabular">{money(depreciable)}</td>
                          <td colSpan={2} />
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </TabsContent>
              ))}
            </TabsContents>
          </Tabs>
        </div>
      </div>
    </DiagramFrame>
  )
}
