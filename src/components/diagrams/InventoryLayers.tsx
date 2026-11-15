import { useRef, useState } from 'react'
import { ArrowDown, Blend, Layers, Store } from 'lucide-react'

import { Tabs, TabsContent, TabsContents, TabsList, TabsTrigger } from '@/components/animate-ui/components/radix/tabs'
import { AnimatedNumber } from '@/components/ui/AnimatedNumber'
import type { L } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import { DiagramFrame, useInViewTimeline, type DiagramProps } from './DiagramFrame'

/* ───────────────────────── Arman Store data ───────────────────────── */

type Layer = { id: string; units: number; cost: number; label: L; tone: string }
const LAYERS: Layer[] = [
  { id: 'beg', units: 100, cost: 10, label: { fa: 'موجودی اول دوره', en: 'Beginning' }, tone: 'bg-asset' },
  { id: 'p1', units: 200, cost: 12, label: { fa: 'خرید اول', en: 'Purchase 1' }, tone: 'bg-equity' },
  { id: 'p2', units: 100, cost: 15, label: { fa: 'خرید دوم', en: 'Purchase 2' }, tone: 'bg-credit' },
]
const SOLD = 300
const PRICE = 25
const SALES = SOLD * PRICE
const UNITS = LAYERS.reduce((s, l) => s + l.units, 0)
const AVAILABLE = LAYERS.reduce((s, l) => s + l.units * l.cost, 0)
const AVG = AVAILABLE / UNITS

type Method = 'fifo' | 'wa'
type Piece = { key: string; units: number; cost: number; tone: string; dest: 'cogs' | 'end' }

/** FIFO: the oldest units leave first (layers may split). */
function fifoPieces(): Piece[] {
  const out: Piece[] = []
  let left = SOLD
  for (const l of LAYERS) {
    const take = Math.min(left, l.units)
    if (take > 0) out.push({ key: `${l.id}-s`, units: take, cost: l.cost, tone: l.tone, dest: 'cogs' })
    if (l.units - take > 0) out.push({ key: `${l.id}-e`, units: l.units - take, cost: l.cost, tone: l.tone, dest: 'end' })
    left -= take
  }
  return out
}

const PIECES: Record<Method, Piece[]> = {
  fifo: fifoPieces(),
  wa: [
    { key: 'wa-s', units: SOLD, cost: AVG, tone: 'bg-primary', dest: 'cogs' },
    { key: 'wa-e', units: UNITS - SOLD, cost: AVG, tone: 'bg-primary', dest: 'end' },
  ],
}
const RESULT: Record<Method, { cogs: number; end: number; gp: number }> = {
  fifo: (() => {
    const cogs = PIECES.fifo.filter((p) => p.dest === 'cogs').reduce((s, p) => s + p.units * p.cost, 0)
    return { cogs, end: AVAILABLE - cogs, gp: SALES - cogs }
  })(),
  wa: { cogs: SOLD * AVG, end: AVAILABLE - SOLD * AVG, gp: SALES - SOLD * AVG },
}

/* ───────────────────────── one method's animated panel ───────────────────────── */

function MethodPanel({ method, armed, runKey }: { method: Method; armed: boolean; runKey: number }) {
  const { tr, num, money, lang, isFa } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(prefersReducedMotion)
  const pieces = PIECES[method]
  const res = RESULT[method]
  const costText = (c: number) => num(c, c % 1 ? 2 : 0)

  useGSAP(
    () => {
      const root = ref.current
      if (!root || !armed) return
      const q = gsap.utils.selector(root)
      const top = q('[data-row="avail"]')[0] as HTMLElement | undefined
      const bottom = q('[data-row="split"]')[0] as HTMLElement | undefined
      if (!top || !bottom) return
      const dy = top.offsetTop - bottom.offsetTop // pieces start stacked on the shelf above
      const sold = q('[data-piece][data-dest="cogs"]')
      const kept = q('[data-piece][data-dest="end"]')
      const all = q('[data-piece]')
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.add(() => setShown(false), 0)

      if (method === 'fifo') {
        tl.fromTo(all, { y: dy - 26, autoAlpha: 0 }, { y: dy, autoAlpha: 1, duration: 0.5, stagger: 0.3, ease: 'back.out(1.6)' })
      } else {
        gsap.set(all, { y: dy, autoAlpha: 0 })
        tl.fromTo(q('[data-layer]'), { y: -26, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.3, ease: 'back.out(1.6)' })
          .fromTo(q('[data-blend]'), { autoAlpha: 0, scaleX: 0.2 }, { autoAlpha: 1, scaleX: 1, duration: 0.9, ease: 'power2.inOut' }, '+=0.3')
          .from(q('[data-avg]'), { scale: 0.6, autoAlpha: 0, duration: 0.5, ease: 'back.out(2.5)' }, '-=0.3')
          .set(all, { autoAlpha: 1 }, '+=0.5')
          .set(q('[data-layer], [data-blend]'), { autoAlpha: 0 })
      }

      tl.from(q('[data-bracket]'), { scaleX: 0, transformOrigin: isFa ? '100% 50%' : '0% 50%', duration: 0.6 }, '+=0.3')
        .from(q('[data-sell]'), { y: -10, autoAlpha: 0, duration: 0.45, ease: 'back.out(2)' }, '<0.2')
        .to(sold, { y: 0, duration: 0.9, ease: 'power2.inOut', stagger: 0.12 }, '+=0.3')
        .fromTo(q('[data-bin="cogs"]'), { scale: 1 }, { scale: 1.03, duration: 0.18, yoyo: true, repeat: 1 }, '-=0.1')
        .to(kept, { y: 0, duration: 0.8, ease: 'power2.inOut' }, '+=0.15')
        .fromTo(q('[data-bin="end"]'), { scale: 1 }, { scale: 1.04, duration: 0.18, yoyo: true, repeat: 1 }, '-=0.1')
        .from(q('[data-result]'), { y: 12, autoAlpha: 0, stagger: 0.12, duration: 0.5 }, '-=0.1')
        .add(() => setShown(true), '<')

      if (prefersReducedMotion()) tl.progress(1)
    },
    { scope: ref, dependencies: [armed, runKey, lang], revertOnUpdate: true },
  )

  const pieceLabel = (units: number, cost: number) => (
    <>
      <span className="block text-[10px] leading-tight font-bold whitespace-nowrap tabular sm:text-xs">
        {num(units)} × {costText(cost)}
      </span>
      <span className="hidden text-[10px] leading-tight whitespace-nowrap opacity-85 tabular sm:block">= {money(units * cost)}</span>
    </>
  )

  const hide = !armed && 'invisible'

  return (
    <div ref={ref} className="relative pt-1">
      {/* bracket over the units that are sold */}
      <div className="mb-1 flex">
        <div style={{ flexGrow: SOLD, flexBasis: 0 }} className="min-w-0">
          <div data-bracket className={cn('flex flex-col items-center', hide)}>
            <span className="text-[10px] font-semibold text-expense sm:text-[11px]">
              {tr({ fa: `${SOLD} واحد فروخته می‌شود`, en: `${SOLD} units sold` })}
            </span>
            <span className="mt-0.5 h-2 w-full rounded-t-md border-x border-t " />
          </div>
        </div>
        <div style={{ flexGrow: UNITS - SOLD, flexBasis: 0 }} />
      </div>

      {/* shelf: goods available for sale (ghost layers) */}
      <div data-row="avail" className="relative flex h-14 overflow-hidden rounded-lg">
        {LAYERS.map((l) => (
          <div
            key={l.id}
            style={{ flexGrow: l.units, flexBasis: 0 }}
            className="grid min-w-0 place-items-center border border-dashed border-foreground/15 bg-muted/40 px-1 text-center text-muted-foreground first:rounded-s-lg last:rounded-e-lg"
          >
            {pieceLabel(l.units, l.cost)}
          </div>
        ))}
        {method === 'wa' && (
          <>
            <div className={cn('absolute inset-0 flex', hide)}>
              {LAYERS.map((l) => (
                <div
                  key={l.id}
                  data-layer
                  style={{ flexGrow: l.units, flexBasis: 0 }}
                  className={cn('grid min-w-0 place-items-center border-e border-card px-1 text-center text-background last:border-e-0', l.tone)}
                >
                  {pieceLabel(l.units, l.cost)}
                </div>
              ))}
            </div>
            <div
              data-blend
              className={cn('absolute inset-0 grid place-items-center rounded-lg bg-primary text-center text-primary-foreground', hide)}
            >
              <span data-avg className="px-2 text-[11px] leading-tight font-bold tabular sm:text-sm">
                {num(AVAILABLE)} ÷ {num(UNITS)} = {costText(AVG)}
                <span className="ms-1 font-normal opacity-85">{tr({ fa: 'میانگین هر واحد', en: 'avg per unit' })}</span>
              </span>
            </div>
          </>
        )}
      </div>
      <div className="mt-1 flex text-center text-[10px] text-muted-foreground">
        {LAYERS.map((l) => (
          <div key={l.id} style={{ flexGrow: l.units, flexBasis: 0 }} className="min-w-0 truncate px-0.5">
            {tr(l.label)}
          </div>
        ))}
      </div>

      {/* sale */}
      <div className="my-3 flex justify-center">
        <span
          data-sell
          className={cn('inline-flex items-center gap-1.5 rounded-full bg-expense/12 px-3 py-1 text-[11px] font-semibold text-expense sm:text-xs', hide)}
        >
          <ArrowDown className="size-3.5" />
          {tr({
            fa: `فروش ${SOLD} واحد × ${PRICE} = ${money(SALES)}`,
            en: `Sell ${SOLD} units × ${PRICE} = ${money(SALES)}`,
          })}
        </span>
      </div>

      {/* bins: cost of goods sold (income statement) | ending inventory (balance sheet) */}
      <div className="flex text-[10px] font-semibold sm:text-[11px]">
        <div style={{ flexGrow: SOLD, flexBasis: 0 }} className="min-w-0 truncate px-1 text-expense">
          {tr({ fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of goods sold' })}
        </div>
        <div style={{ flexGrow: UNITS - SOLD, flexBasis: 0 }} className="min-w-0 truncate px-1 text-asset">
          {tr({ fa: 'موجودی پایان دوره', en: 'Ending inventory' })}
        </div>
      </div>
      <div data-row="split" className="mt-1 flex h-14 gap-0">
        {(['cogs', 'end'] as const).map((dest) => (
          <div
            key={dest}
            data-bin={dest}
            style={{ flexGrow: dest === 'cogs' ? SOLD : UNITS - SOLD, flexBasis: 0 }}
            className={cn(
              'relative flex min-w-0 rounded-lg outline-2 outline-offset-2 outline-dashed',
              dest === 'cogs' ? 'bg-expense/6 outline-expense/50' : 'bg-asset/6 outline-asset/50',
            )}
          >
            {pieces
              .filter((p) => p.dest === dest)
              .map((p) => (
                <div
                  key={p.key}
                  data-piece
                  data-dest={dest}
                  style={{ flexGrow: p.units, flexBasis: 0 }}
                  className={cn(
                    'relative z-10 grid min-w-0 place-items-center border-e border-card px-1 text-center text-background shadow-sm first:rounded-s-lg last:rounded-e-lg last:border-e-0',
                    p.tone,
                    hide,
                  )}
                >
                  {pieceLabel(p.units, p.cost)}
                </div>
              ))}
          </div>
        ))}
      </div>

      {/* results */}
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          { k: 'sales', label: tr({ fa: 'فروش', en: 'Sales' }), v: SALES, tone: 'text-foreground' },
          { k: 'cogs', label: tr({ fa: 'بهای تمام‌شده فروش', en: 'COGS' }), v: res.cogs, tone: 'text-expense' },
          { k: 'end', label: tr({ fa: 'موجودی پایان دوره', en: 'Ending inventory' }), v: res.end, tone: 'text-asset' },
          { k: 'gp', label: tr({ fa: 'سود ناخالص', en: 'Gross profit' }), v: res.gp, tone: 'text-revenue' },
        ].map((r) => (
          <div key={r.k} data-result className={cn('rounded-xl border bg-background/70 px-3 py-2', r.k === 'gp' && ' bg-revenue/6', hide)}>
            <div className="text-[10px] text-muted-foreground sm:text-[11px]">{r.label}</div>
            <AnimatedNumber value={shown ? r.v : 0} className={cn('text-base font-bold sm:text-lg', r.tone)} />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ───────────────────────── figure ───────────────────────── */

export default function InventoryLayers({ caption }: DiagramProps) {
  const { tr, money, num, lang } = useI18n()
  const scope = useRef<HTMLDivElement>(null)
  const [method, setMethod] = useState<Method>('fifo')
  const [armed, setArmed] = useState(prefersReducedMotion)
  const [runKey, setRunKey] = useState(0)

  useInViewTimeline(
    scope,
    (tl) => {
      tl.from('[data-anim="intro"]', { y: 14, autoAlpha: 0, duration: 0.5 })
        .from('[data-anim="tabs"]', { y: 10, autoAlpha: 0, duration: 0.45 }, '-=0.25')
        .add(() => setArmed(true))
        .from('[data-anim="compare"]', { y: 16, autoAlpha: 0, duration: 0.55 }, '+=0.2')
    },
    [lang],
  )

  const methodName = (m: Method) =>
    m === 'fifo'
      ? tr({ fa: 'اولین صادره از اولین وارده', en: 'FIFO' })
      : tr({ fa: 'میانگین موزون', en: 'Weighted average' })

  return (
    <DiagramFrame
      title={{ fa: 'لایه‌های بهای موجودی کالا: FIFO و میانگین موزون', en: 'Inventory cost layers: FIFO vs weighted average' }}
      caption={caption}
      badge="interactive"
      onReplay={() => setRunKey((k) => k + 1)}
    >
      <div ref={scope} className="space-y-4">
        <div data-anim="intro" className="flex items-start gap-3 rounded-xl bg-muted/50 p-3 text-xs leading-relaxed sm:text-sm">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
            <Store className="size-4" />
          </span>
          <p className="text-muted-foreground">
            {tr({
              fa: `«فروشگاه آرمان» ${num(UNITS)} واحد کالا به بهای کل ${money(AVAILABLE)} در اختیار دارد و ${num(SOLD)} واحد را هر یک ${num(PRICE)} می‌فروشد. کدام ${num(SOLD)} واحد فروخته شد؟ پاسخ به روش ارزیابی موجودی بستگی دارد.`,
              en: `Arman Store has ${num(UNITS)} units available at a total cost of ${money(AVAILABLE)} and sells ${num(SOLD)} of them at ${num(PRICE)} each. Which ${num(SOLD)} units were sold? It depends on the costing method.`,
            })}
          </p>
        </div>

        <div data-anim="tabs">
          <Tabs value={method} onValueChange={(v) => setMethod(v as Method)}>
            <TabsList className="h-auto w-full sm:w-fit">
              <TabsTrigger value="fifo" className="px-3 py-1.5 text-xs whitespace-normal sm:text-sm">
                <Layers className="size-4" />
                {methodName('fifo')}
              </TabsTrigger>
              <TabsTrigger value="wa" className="px-3 py-1.5 text-xs whitespace-normal sm:text-sm">
                <Blend className="size-4" />
                {methodName('wa')}
              </TabsTrigger>
            </TabsList>
            <TabsContents>
              <TabsContent value="fifo">
                <p className="mb-3 text-xs text-muted-foreground">
                  {tr({
                    fa: 'قدیمی‌ترین واحدها اول خارج می‌شوند؛ پس بهای تمام‌شده از لایه‌های قدیمی و ارزان‌تر می‌آید و موجودی پایان دوره به آخرین قیمت‌ها نزدیک است.',
                    en: 'The oldest units leave first, so COGS comes from the older, cheaper layers and ending inventory reflects the latest prices.',
                  })}
                </p>
                <MethodPanel method="fifo" armed={armed} runKey={runKey} />
              </TabsContent>
              <TabsContent value="wa">
                <p className="mb-3 text-xs text-muted-foreground">
                  {tr({
                    fa: 'همه لایه‌ها با هم مخلوط می‌شوند و هر واحد با بهای میانگین موزون ارزیابی می‌شود.',
                    en: 'All layers are blended together and every unit is costed at the weighted-average cost.',
                  })}
                </p>
                <MethodPanel method="wa" armed={armed} runKey={runKey} />
              </TabsContent>
            </TabsContents>
          </Tabs>
        </div>

        {/* comparison */}
        <div data-anim="compare" className="overflow-x-auto rounded-xl border">
          <table className="w-full min-w-[340px] text-xs sm:text-sm">
            <caption className="sr-only">{tr({ fa: 'مقایسه دو روش', en: 'Comparison of the two methods' })}</caption>
            <thead className="bg-muted/50 text-[11px] text-muted-foreground sm:text-xs">
              <tr>
                <th scope="col" className="px-3 py-2 text-start font-medium">
                  {tr({ fa: 'روش', en: 'Method' })}
                </th>
                <th scope="col" className="px-3 py-2 text-end font-medium">
                  {tr({ fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'COGS' })}
                </th>
                <th scope="col" className="px-3 py-2 text-end font-medium">
                  {tr({ fa: 'موجودی پایان دوره', en: 'Ending inventory' })}
                </th>
                <th scope="col" className="px-3 py-2 text-end font-medium">
                  {tr({ fa: 'سود ناخالص', en: 'Gross profit' })}
                </th>
              </tr>
            </thead>
            <tbody className="tabular">
              {(['fifo', 'wa'] as Method[]).map((m) => (
                <tr key={m} className={cn('border-t transition-colors duration-300', method === m && 'bg-primary/8')}>
                  <th scope="row" className="px-3 py-2 text-start font-semibold">
                    {methodName(m)}
                  </th>
                  <td className="px-3 py-2 text-end text-expense">{money(RESULT[m].cogs)}</td>
                  <td className="px-3 py-2 text-end text-asset">{money(RESULT[m].end)}</td>
                  <td className="px-3 py-2 text-end font-bold text-revenue">{money(RESULT[m].gp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="border-t px-3 py-2 text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
            {tr({
              fa: `در هر دو روش: بهای کالای آماده برای فروش ${money(AVAILABLE)} = بهای تمام‌شده کالای فروش‌رفته + موجودی پایان دوره. وقتی قیمت‌ها رو به افزایش است، FIFO بهای تمام‌شده کمتر و سود ناخالص بیشتری نشان می‌دهد.`,
              en: `In both methods, goods available for sale ${money(AVAILABLE)} = COGS + ending inventory. When prices are rising, FIFO reports lower COGS and higher gross profit.`,
            })}
          </p>
        </div>
      </div>
    </DiagramFrame>
  )
}
