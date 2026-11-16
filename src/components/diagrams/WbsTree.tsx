import { useMemo, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

import type { L } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import { DiagramFrame, type DiagramProps } from './DiagramFrame'

/** Amounts in USD thousands. Leaf = posting element (account assignment). */
type Leaf = { budget: number; commit: number; actual: number; element: L }
type WbsNode = { code: string; name: L; children?: WbsNode[]; leaf?: Leaf }

const ROOT = 'AFE-2025-014'
const DEFAULT = `${ROOT}.02.03`

const TREE: WbsNode = {
  code: ROOT,
  name: { fa: 'حفاری و تکمیل چاه AR-07', en: 'Drill and complete well AR-07' },
  children: [
    {
      code: `${ROOT}.01`,
      name: { fa: 'آماده‌سازی پیش از حفاری', en: 'Pre-spud and site preparation' },
      children: [
        { code: `${ROOT}.01.01`, name: { fa: 'عملیات عمرانی محل و جاده', en: 'Location and road civil works' }, leaf: { budget: 380, commit: 0, actual: 371, element: { fa: '6110 خدمات پیمانکاری عمرانی', en: '6110 Civil contract services' } } },
        { code: `${ROOT}.01.02`, name: { fa: 'جابه‌جایی و استقرار دکل', en: 'Rig move and mobilisation' }, leaf: { budget: 240, commit: 0, actual: 227, element: { fa: '6120 اجاره دکل حفاری', en: '6120 Drilling rig hire' } } },
      ],
    },
    {
      code: `${ROOT}.02`,
      name: { fa: 'حفاری', en: 'Drilling' },
      children: [
        { code: `${ROOT}.02.01`, name: { fa: 'نرخ روزانه دکل', en: 'Rig day rate' }, leaf: { budget: 2100, commit: 580, actual: 1520, element: { fa: '6120 اجاره دکل حفاری', en: '6120 Drilling rig hire' } } },
        { code: `${ROOT}.02.02`, name: { fa: 'خدمات حفاری (گل، جهت‌دار، سیمان‌کاری)', en: 'Drilling services (mud, directional, cementing)' }, leaf: { budget: 1450, commit: 390, actual: 980, element: { fa: '6130 خدمات حفاری', en: '6130 Drilling services' } } },
        { code: `${ROOT}.02.03`, name: { fa: 'لوله‌های جداری و مغزی (OCTG)', en: 'Casing and tubulars (OCTG)' }, leaf: { budget: 1350, commit: 260, actual: 910, element: { fa: '6140 کالای حفاری (OCTG)', en: '6140 Drilling materials (OCTG)' } } },
      ],
    },
    {
      code: `${ROOT}.03`,
      name: { fa: 'تکمیل و آزمایش چاه', en: 'Completion and testing' },
      children: [
        { code: `${ROOT}.03.01`, name: { fa: 'تجهیزات تکمیل چاه', en: 'Completion equipment' }, leaf: { budget: 1100, commit: 840, actual: 0, element: { fa: '6150 تجهیزات تکمیل چاه', en: '6150 Completion equipment' } } },
        { code: `${ROOT}.03.02`, name: { fa: 'آزمایش چاه', en: 'Well testing' }, leaf: { budget: 780, commit: 0, actual: 0, element: { fa: '6160 خدمات آزمایش چاه', en: '6160 Well-testing services' } } },
      ],
    },
    {
      code: `${ROOT}.04`,
      name: { fa: 'مدیریت پروژه', en: 'Project management' },
      children: [
        { code: `${ROOT}.04.01`, name: { fa: 'نظارت و تیم پروژه', en: 'Supervision and project team' }, leaf: { budget: 420, commit: 0, actual: 260, element: { fa: '6210 هزینه کارکنان تخصیصی', en: '6210 Allocated staff costs' } } },
        { code: `${ROOT}.04.02`, name: { fa: 'بیمه و مجوزها', en: 'Insurance and permits' }, leaf: { budget: 180, commit: 0, actual: 50, element: { fa: '6220 بیمه و مجوزها', en: '6220 Insurance and permits' } } },
      ],
    },
  ],
}

type Totals = { budget: number; commit: number; actual: number }
type Row = { node: WbsNode; level: number; ancestors: string[]; totals: Totals }

function rollUp(n: WbsNode): Totals {
  if (n.leaf) return { budget: n.leaf.budget, commit: n.leaf.commit, actual: n.leaf.actual }
  return (n.children ?? [])
    .map(rollUp)
    .reduce((s, t) => ({ budget: s.budget + t.budget, commit: s.commit + t.commit, actual: s.actual + t.actual }), { budget: 0, commit: 0, actual: 0 })
}

function flatten(n: WbsNode, ancestors: string[] = [], out: Row[] = []): Row[] {
  out.push({ node: n, level: ancestors.length, ancestors, totals: rollUp(n) })
  n.children?.forEach((c) => flatten(c, [...ancestors, n.code], out))
  return out
}

const LEVEL_TYPE: L[] = [
  { fa: 'سطح ۱: پروژه و AFE (عنصر برنامه‌ریزی)', en: 'Level 1: project and AFE (planning element)' },
  { fa: 'سطح ۲: بخش اصلی کار (عنصر برنامه‌ریزی و بودجه)', en: 'Level 2: main work package (planning and budget element)' },
  { fa: 'سطح ۳: عنصر ثبت هزینه (محل تخصیص هزینه)', en: 'Level 3: posting element (account assignment)' },
]

export default function WbsTree({ caption }: DiagramProps) {
  const { tr, num, lang } = useI18n()
  const rows = useMemo(() => flatten(TREE), [])
  const [selected, setSelected] = useState(DEFAULT)
  const [collapsed, setCollapsed] = useState<ReadonlySet<string>>(new Set())
  const scope = useRef<HTMLDivElement>(null)

  const toggle = (code: string) =>
    setCollapsed((s) => {
      const next = new Set(s)
      if (next.has(code)) next.delete(code)
      else next.add(code)
      return next
    })

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      gsap.from('[data-wbs-bar]', { scaleX: 0, duration: 0.7, ease: 'power2.out', stagger: 0.02, transformOrigin: 'left center' })
    },
    { scope, dependencies: [lang] },
  )

  const pct = (n: number) => tr({ fa: `${Math.round(n)}٪`, en: `${Math.round(n)}%` })
  const sel = rows.find((r) => r.node.code === selected) ?? rows[0]
  const t = sel.totals
  const used = t.commit + t.actual

  return (
    <DiagramFrame
      title={{ fa: 'ساختار شکست کار (WBS) و کدهای هزینه یک AFE', en: 'Work breakdown structure and cost codes of an AFE' }}
      caption={caption}
      badge="interactive"
      onReplay={() => {
        setCollapsed(new Set())
        setSelected(DEFAULT)
      }}
    >
      <div ref={scope} className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
            <span>{tr({ fa: 'مبالغ به هزار دلار', en: 'USD thousands' })}</span>
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-primary" />
              {tr({ fa: 'هزینه واقعی', en: 'Actual' })}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-primary/35" />
              {tr({ fa: 'تعهد', en: 'Committed' })}
            </span>
          </div>
          <ul className="space-y-1">
            {rows.map((r) => {
              if (r.ancestors.some((a) => collapsed.has(a))) return null
              const { node, level, totals } = r
              const on = node.code === selected
              const isParent = Boolean(node.children?.length)
              const open = !collapsed.has(node.code)
              return (
                <li key={node.code} style={{ paddingInlineStart: `${level * 1.1}rem` }}>
                  <div className={cn('flex items-start gap-1.5 rounded-[0.9rem] px-2 py-2 transition-colors', on ? 'bg-primary/10' : 'hover:bg-muted/60')}>
                    {isParent ? (
                      <button
                        type="button"
                        onClick={() => toggle(node.code)}
                        aria-label={tr({ fa: 'باز و بسته کردن', en: 'Expand or collapse' })}
                        aria-expanded={open}
                        className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
                      >
                        <ChevronDown className={cn('size-3.5 transition-transform', !open && '-rotate-90 rtl:rotate-90')} />
                      </button>
                    ) : (
                      <span className="mx-1.5 mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground/50" aria-hidden />
                    )}
                    <button type="button" onClick={() => setSelected(node.code)} aria-pressed={on} className="min-w-0 flex-1 text-start">
                      <div className="flex items-baseline gap-2">
                        <code dir="ltr" className="shrink-0 text-[11px] font-medium text-primary">
                          {level === 0 ? node.code : node.code.slice(ROOT.length)}
                        </code>
                        <span className={cn('min-w-0 truncate text-sm', level < 2 ? 'font-semibold text-foreground' : 'text-body')}>{tr(node.name)}</span>
                        <span className="ms-auto shrink-0 tabular text-xs text-muted-foreground">{num(totals.budget)}</span>
                      </div>
                      <div className="mt-1.5 flex h-1.5 overflow-hidden rounded-full bg-muted" dir="ltr">
                        <div data-wbs-bar className="h-full bg-primary" style={{ width: `${(totals.actual / totals.budget) * 100}%` }} />
                        <div data-wbs-bar className="h-full bg-primary/35" style={{ width: `${(totals.commit / totals.budget) * 100}%` }} />
                      </div>
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="rounded-[1.25rem] bg-muted/50 p-5 lg:self-start">
          <code dir="ltr" className="text-xs font-semibold text-primary">
            {sel.node.code}
          </code>
          <div className="mt-1 text-lg font-semibold text-foreground">{tr(sel.node.name)}</div>
          <div className="mt-1 text-xs text-muted-foreground">{tr(LEVEL_TYPE[sel.level])}</div>

          <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {(
              [
                [{ fa: 'بودجه', en: 'Budget' }, t.budget],
                [{ fa: 'تعهد باز', en: 'Open commitments' }, t.commit],
                [{ fa: 'هزینه واقعی', en: 'Actual cost' }, t.actual],
                [{ fa: 'مانده در دسترس', en: 'Available' }, t.budget - used],
              ] as [L, number][]
            ).map(([label, v], i) => (
              <div key={i} className="rounded-[0.9rem] bg-card px-3 py-2">
                <dt className="text-[11px] text-muted-foreground">{tr(label)}</dt>
                <dd className="tabular font-semibold text-foreground">{num(v)}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-3 flex items-center justify-between gap-3 text-xs text-muted-foreground">
            <span>{tr({ fa: 'مصرف بودجه (تعهد + واقعی)', en: 'Budget consumed (committed + actual)' })}</span>
            <span className="tabular font-semibold text-foreground">{pct((used / t.budget) * 100)}</span>
          </div>

          {sel.node.leaf ? (
            <div className="mt-4 space-y-2 text-sm">
              <div className="text-[11px] font-semibold text-muted-foreground">{tr({ fa: 'رشته کامل کدینگ هزینه', en: 'Full cost-coding string' })}</div>
              <code dir="ltr" className="block rounded-[0.9rem] bg-card px-3 py-2 text-xs leading-6 break-all text-foreground">
                PA01 · CC-ARY-DRL · {sel.node.code} · {sel.node.leaf.element.en.slice(0, 4)} · R · DEV
              </code>
              <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-xs">
                <dt className="text-muted-foreground">{tr({ fa: 'کد شرکت', en: 'Company code' })}</dt>
                <dd className="text-foreground">{tr({ fa: 'PA01 پارس‌آریا', en: 'PA01 Pars Arya' })}</dd>
                <dt className="text-muted-foreground">{tr({ fa: 'مرکز هزینه مسئول', en: 'Responsible cost centre' })}</dt>
                <dd className="text-foreground">{tr({ fa: 'CC-ARY-DRL واحد حفاری', en: 'CC-ARY-DRL drilling department' })}</dd>
                <dt className="text-muted-foreground">{tr({ fa: 'عنصر هزینه', en: 'Cost element' })}</dt>
                <dd className="text-foreground">{tr(sel.node.leaf.element)}</dd>
                <dt className="text-muted-foreground">{tr({ fa: 'برچسب بازیافت', en: 'Recoverable flag' })}</dt>
                <dd className="text-foreground">{tr({ fa: 'R: قابل بازیافت', en: 'R: recoverable' })}</dd>
                <dt className="text-muted-foreground">{tr({ fa: 'دسته هزینه', en: 'Cost category' })}</dt>
                <dd className="text-foreground">{tr({ fa: 'DEV: توسعه‌ای', en: 'DEV: development' })}</dd>
              </dl>
            </div>
          ) : (
            <p className="mt-4 text-xs leading-6 text-muted-foreground">
              {sel.level === 0
                ? tr({
                    fa: 'این گره خودش هزینه نمی‌گیرد؛ بودجه و هزینه آن جمع زیرمجموعه‌هاست و همین جمع در گزارش AFE به شرکا می‌رود. روی یک عنصر سطح ۳ بزنید تا کدینگ کامل آن را ببینید.',
                    en: 'This node takes no postings itself; its budget and costs are the sum of its children, and this total is what partners see in the AFE report. Pick a level-3 element to see its full coding.',
                  })
                : tr({
                    fa: 'این گره خودش هزینه نمی‌گیرد؛ بودجه و هزینه آن جمع زیرمجموعه‌هاست. روی یک عنصر سطح ۳ بزنید تا کدینگ کامل آن را ببینید.',
                    en: 'This node takes no postings itself; its budget and costs are the sum of its children. Pick a level-3 element to see its full coding.',
                  })}
            </p>
          )}
        </div>
      </div>
    </DiagramFrame>
  )
}
