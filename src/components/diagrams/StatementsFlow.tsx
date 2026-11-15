import { useEffect, useRef, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

import type { L } from '@/content/types'
import { novaAccounts, novaAdjustments, novaTransactions } from '@/content/nova'
import { useI18n } from '@/i18n/I18nProvider'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'
import { balanceSheet, computeBalances, incomeStatement } from '@/lib/ledger'
import { cn } from '@/lib/utils'
import { DiagramFrame, useInViewTimeline, type DiagramProps } from './DiagramFrame'
import { StepperControls } from './parts-b'

/* ───────────────────────── data (adjusted running example) ───────────────────────── */

const BAL = computeBalances(novaAccounts, [...novaTransactions, ...novaAdjustments])
const IS = incomeStatement(BAL)
const BS = balanceSheet(BAL)
const CASH = BAL.get('cash')!.balance

/** Cash-flow classification of every transaction that touches Cash. */
const CF_CLASS: Record<string, 'op' | 'inv' | 'fin'> = {
  t1: 'fin',
  t2: 'fin',
  t3: 'inv',
  t5: 'op',
  t6: 'op',
  t8: 'op',
  t9: 'op',
  t10: 'op',
  t11: 'op',
  t12: 'fin',
}
const CF = { op: 0, inv: 0, fin: 0 }
for (const tx of novaTransactions) {
  const cat = CF_CLASS[tx.id]
  if (!cat) continue
  for (const l of tx.lines) if (l.account === 'cash') CF[cat] += (l.debit ?? 0) - (l.credit ?? 0)
}
const NET_CASH = CF.op + CF.inv + CF.fin

const TOP_EXPENSES = IS.expenses.slice(0, 3)
const OTHER_EXPENSES = IS.expenses.slice(3).reduce((s, r) => s + r.amount, 0)

type LinkId = 'ni' | 'cap' | 'cash'
type Tone = 'revenue' | 'equity' | 'asset'
const LINKS: { id: LinkId; amount: number; tone: Tone }[] = [
  { id: 'ni', amount: IS.netIncome, tone: 'revenue' },
  { id: 'cap', amount: BS.equity.total, tone: 'equity' },
  { id: 'cash', amount: CASH, tone: 'asset' },
]
const TOTAL_STEPS = LINKS.length + 1 // + balance check

const TONE = {
  revenue: {
    stroke: 'stroke-revenue',
    token: 'bg-revenue text-background ',
    glow: 'bg-revenue/12 ring-1 ring-foreground/10',
    text: 'text-revenue',
  },
  equity: {
    stroke: 'stroke-equity',
    token: 'bg-equity text-background ',
    glow: 'bg-equity/12 ring-1 ring-foreground/10',
    text: 'text-equity',
  },
  asset: {
    stroke: 'stroke-asset',
    token: 'bg-asset text-background ',
    glow: 'bg-asset/12 ring-1 ring-foreground/10',
    text: 'text-asset',
  },
} as const

/* ───────────────────────── geometry ───────────────────────── */

/** Layout box of `el` relative to `root` (ignores transforms, so it is stable during entrance tweens). */
function box(el: HTMLElement, root: HTMLElement) {
  let x = 0
  let y = 0
  let n: HTMLElement | null = el
  while (n && n !== root) {
    x += n.offsetLeft
    y += n.offsetTop
    n = n.offsetParent as HTMLElement | null
  }
  return { x, y, w: el.offsetWidth, h: el.offsetHeight }
}

/** Connector paths between linked statement lines. Works in LTR and RTL. */
function computePaths(root: HTMLElement, rtl: boolean) {
  const out: Partial<Record<LinkId, string>> = {}
  const bulge = root.offsetWidth < 640 ? 18 : 26
  for (const { id } of LINKS) {
    const s = root.querySelector<HTMLElement>(`[data-src="${id}"]`)
    const d = root.querySelector<HTMLElement>(`[data-dst="${id}"]`)
    const sc = s?.closest<HTMLElement>('[data-card]')
    const dc = d?.closest<HTMLElement>('[data-card]')
    if (!s || !d || !sc || !dc) continue
    const S = box(s, root)
    const D = box(d, root)
    const SC = box(sc, root)
    const DC = box(dc, root)
    const sy = S.y + S.h / 2
    const dy = D.y + D.h / 2
    const sameColumn = Math.abs(SC.x + SC.w / 2 - (DC.x + DC.w / 2)) < 24
    if (sameColumn) {
      // loop around the outside of the column: the cash link uses the reading-start edge so loops never overlap
      const right = rtl ? id === 'cash' : id !== 'cash'
      const sx = right ? S.x + S.w : S.x
      const ex = right ? D.x + D.w : D.x
      const edge = right ? Math.max(SC.x + SC.w, DC.x + DC.w) + bulge : Math.min(SC.x, DC.x) - bulge
      out[id] = `M${sx} ${sy} C${edge} ${sy} ${edge} ${dy} ${ex} ${dy}`
    } else {
      const toRight = DC.x > SC.x
      const sx = toRight ? S.x + S.w : S.x
      const ex = toRight ? D.x : D.x + D.w
      const mx = (sx + ex) / 2
      out[id] = `M${sx} ${sy} C${mx} ${sy} ${mx} ${dy} ${ex} ${dy}`
    }
  }
  return out
}

/* ───────────────────────── figure ───────────────────────── */

type StRow = { label: L | string; amount: number; total?: boolean; src?: LinkId; dst?: LinkId; check?: boolean; muted?: boolean }

export default function StatementsFlow({ caption }: DiagramProps) {
  const { tr, t, money, lang, isFa } = useI18n()
  const scope = useRef<HTMLDivElement>(null)
  const prevStep = useRef(0)
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [paths, setPaths] = useState<Partial<Record<LinkId, string>>>({})
  const [size, setSize] = useState({ w: 0, h: 0 })

  // measure connectors (re-measured on resize and when the direction flips)
  useEffect(() => {
    const root = scope.current
    if (!root) return
    const state = { raf: 0 }
    const run = () => {
      cancelAnimationFrame(state.raf)
      state.raf = requestAnimationFrame(() => {
        setPaths(computePaths(root, isFa))
        setSize({ w: root.offsetWidth, h: root.offsetHeight })
      })
    }
    const ro = new ResizeObserver(run)
    ro.observe(root)
    root.querySelectorAll('[data-card]').forEach((el) => ro.observe(el))
    run()
    return () => {
      ro.disconnect()
      cancelAnimationFrame(state.raf)
    }
  }, [isFa])

  // autoplay through the links
  useEffect(() => {
    if (!playing) return
    const id = window.setTimeout(
      () => {
        if (step + 1 >= TOTAL_STEPS) setPlaying(false)
        setStep(Math.min(TOTAL_STEPS, step + 1))
      },
      step === 0 ? 500 : 2900,
    )
    return () => window.clearTimeout(id)
  }, [playing, step])

  // entrance: statements appear in the order they are prepared
  const { replay } = useInViewTimeline(
    scope,
    (tl) => {
      ;['is', 'sce', 'bs', 'cfs'].forEach((id, i) => {
        tl.from(`[data-card="${id}"]`, { y: 22, autoAlpha: 0, scale: 0.97, duration: 0.55 }, i === 0 ? 0 : '-=0.25').from(
          `[data-card="${id}"] [data-row]`,
          { autoAlpha: 0, x: isFa ? 12 : -12, stagger: 0.04, duration: 0.3 },
          '-=0.3',
        )
      })
      tl.from('[data-badge]', { scale: 0, rotate: -40, stagger: 0.1, duration: 0.45, ease: 'back.out(3)' }, '-=0.4')
        .from('[data-overlay]', { autoAlpha: 0, duration: 0.6 })
        .from('[data-anim="ctrl"]', { y: 10, autoAlpha: 0, duration: 0.4 }, '<')
        .add(() => {
          setStep(0)
          setPlaying(true)
        })
    },
    [lang],
  )

  // link animation: draw the connector, send a glowing token along it, light up the destination line
  useGSAP(
    () => {
      const from = prevStep.current
      prevStep.current = step
      const root = scope.current
      if (!root || step === 0 || step <= from || prefersReducedMotion()) return
      const q = gsap.utils.selector(root)
      const link = LINKS[step - 1]
      const tokens: HTMLElement[] = []
      const tl = gsap.timeline()

      if (link) {
        const path = root.querySelector<SVGPathElement>(`[data-path-draw="${link.id}"]`)
        const glowDst = q(`[data-glow="dst-${link.id}"]`)
        const glowSrc = q(`[data-glow="src-${link.id}"]`)
        gsap.set(glowDst, { autoAlpha: 0 })
        tl.fromTo(glowSrc, { autoAlpha: 0 }, { autoAlpha: 0.7, duration: 0.3 })
        if (path) {
          const token = document.createElement('div')
          token.className = cn(
            'pointer-events-none absolute top-0 left-0 z-30 rounded-full px-2.5 py-1 text-xs font-bold tabular',
            TONE[link.tone].token,
          )
          token.textContent = money(link.amount)
          token.setAttribute('aria-hidden', 'true')
          root.appendChild(token)
          tokens.push(token)
          gsap.set(token, { autoAlpha: 0 })
          tl.fromTo(path, { drawSVG: '0%', autoAlpha: 1 }, { drawSVG: '100%', duration: 0.7, ease: 'power2.inOut' }, '<0.1')
            .fromTo(token, { autoAlpha: 0, scale: 0.4 }, { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, '<0.15')
            .to(
              token,
              {
                motionPath: { path, align: path, alignOrigin: [0.5, 0.5] },
                duration: 1.25,
                ease: 'power1.inOut',
              },
              '<',
            )
            .to(token, { scale: 0.5, autoAlpha: 0, duration: 0.25 }, '>-0.05')
            .to(path, { autoAlpha: 0, duration: 0.4 }, '<')
        }
        tl.fromTo(glowDst, { autoAlpha: 0, scale: 1.06 }, { autoAlpha: 1, scale: 1, duration: 0.45, ease: 'back.out(2)' }, path ? '<' : '>')
          .fromTo(q(`[data-dst="${link.id}"] [data-amt]`), { scale: 1 }, { scale: 1.18, duration: 0.2, yoyo: true, repeat: 1 }, '<')
      } else {
        // final step: the balance sheet balances
        tl.fromTo(q('[data-glow="check"]'), { autoAlpha: 0 }, { autoAlpha: 1, stagger: 0.2, duration: 0.4 })
          .from(q('[data-balanced]'), { scale: 0, autoAlpha: 0, duration: 0.5, ease: 'back.out(3)' }, '-=0.1')
      }
      return () => tokens.forEach((el) => el.remove())
    },
    { scope, dependencies: [step, lang], revertOnUpdate: true },
  )

  const reached = (id: LinkId) => step >= LINKS.findIndex((l) => l.id === id) + 1
  const toneOf = (id: LinkId) => TONE[LINKS.find((l) => l.id === id)!.tone]

  const row = (r: StRow, i: number) => {
    const linkDst = r.dst && reached(r.dst)
    const linkSrc = r.src && reached(r.src)
    const checked = r.check && step >= TOTAL_STEPS
    return (
      <div
        key={i}
        data-row
        data-src={r.src}
        data-dst={r.dst}
        className={cn(
          'relative flex items-center justify-between gap-2 rounded-md px-2 py-[3px] text-[11px] sm:text-xs',
          r.total && 'mt-0.5 border-t pt-1 font-bold',
          r.muted && 'text-muted-foreground',
        )}
      >
        {linkDst && <span data-glow={`dst-${r.dst}`} aria-hidden className={cn('absolute inset-0 rounded-md', toneOf(r.dst!).glow)} />}
        {linkSrc && <span data-glow={`src-${r.src}`} aria-hidden className={cn('absolute inset-0 rounded-md opacity-70', toneOf(r.src!).glow)} />}
        {checked && <span data-glow="check" aria-hidden className="absolute inset-0 rounded-md bg-gold/15 ring-1 ring-foreground/10" />}
        <span className="relative min-w-0 truncate">{typeof r.label === 'string' ? r.label : tr(r.label)}</span>
        <span data-amt className={cn('relative inline-block tabular', linkDst && toneOf(r.dst!).text)}>
          {money(r.amount)}
        </span>
      </div>
    )
  }

  const card = (id: string, order: number, title: L, period: L, rows: StRow[], extra?: string) => (
    <section
      data-card={id}
      className={cn('relative min-w-0 rounded-xl border bg-background/80 p-3 shadow-sm backdrop-blur-[1px]', extra)}
    >
      <header className="mb-1.5 flex items-start gap-2 px-1">
        <span data-badge className="grid size-6 shrink-0 place-items-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground tabular">
          {tr({ fa: `${order}`, en: `${order}` })}
        </span>
        <div className="min-w-0 flex-1">
          <h4 className="text-xs leading-snug font-bold sm:text-sm">{tr(title)}</h4>
          <div className="text-[10px] text-muted-foreground">{tr(period)}</div>
        </div>
        {id === 'bs' && step >= TOTAL_STEPS && (
          <span data-balanced className="inline-flex items-center gap-1 rounded-full bg-revenue/15 px-2 py-0.5 text-[10px] font-bold text-revenue">
            <CheckCircle2 className="size-3" />
            {t('table.balanced')}
          </span>
        )}
      </header>
      <div className="space-y-px">{rows.map(row)}</div>
    </section>
  )

  const month: L = { fa: 'برای ماه منتهی به روز ۳۰', en: 'For the month ended day 30' }
  const atEnd: L = { fa: 'در پایان روز ۳۰', en: 'As at day 30' }

  const messages: L[] = [
    {
      fa: 'صورت‌ها به ترتیب تهیه می‌شوند: ① سود و زیان ← ② تغییرات در حقوق مالکانه ← ③ ترازنامه؛ و ④ صورت جریان‌های نقدی تغییر وجه نقد را توضیح می‌دهد.',
      en: 'Statements are prepared in order: ① income statement → ② changes in equity → ③ balance sheet; ④ the cash flow statement explains the change in cash.',
    },
    {
      fa: `سود خالص ${money(IS.netIncome)} از صورت سود و زیان به صورت تغییرات در حقوق مالکانه منتقل می‌شود.`,
      en: `Net income of ${money(IS.netIncome)} flows from the income statement into the statement of changes in equity.`,
    },
    {
      fa: `سرمایه پایان دوره ${money(BS.equity.total)} همان رقم حقوق مالکانه در ترازنامه است.`,
      en: `Ending capital of ${money(BS.equity.total)} becomes the equity figure on the balance sheet.`,
    },
    {
      fa: `موجودی نقد پایان دوره در صورت جریان‌های نقدی (${money(CASH)}) با سطر موجودی نقد ترازنامه برابر است.`,
      en: `Ending cash on the cash flow statement (${money(CASH)}) equals the Cash line on the balance sheet.`,
    },
    {
      fa: `ترازنامه تراز است: جمع دارایی‌ها ${money(BS.totalAssets)} = بدهی‌ها ${money(BS.totalLiabilities)} + حقوق مالکانه ${money(BS.equity.total)}`,
      en: `The balance sheet balances: total assets ${money(BS.totalAssets)} = liabilities ${money(BS.totalLiabilities)} + equity ${money(BS.equity.total)}`,
    },
  ]

  return (
    <DiagramFrame
      title={{ fa: 'پیوند صورت‌های مالی', en: 'How the financial statements link together' }}
      caption={caption}
      badge="interactive"
      onReplay={() => {
        setPlaying(false)
        setStep(0)
        replay()
      }}
    >
      <div ref={scope} className="relative">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {card('is', 1, { fa: 'صورت سود و زیان', en: 'Income statement' }, month, [
            { label: { fa: 'درآمد خدمات', en: 'Service revenue' }, amount: IS.totalRevenue },
            ...TOP_EXPENSES.map((e) => ({ label: e.account.name, amount: -e.amount, muted: true })),
            { label: { fa: 'سایر هزینه‌ها', en: 'Other expenses' }, amount: -OTHER_EXPENSES, muted: true },
            { label: { fa: 'سود خالص', en: 'Net income' }, amount: IS.netIncome, total: true, src: 'ni' as const },
          ])}
          {card('sce', 2, { fa: 'صورت تغییرات در حقوق مالکانه', en: 'Statement of changes in equity' }, month, [
            { label: { fa: 'سرمایه اول دوره', en: 'Capital, beginning' }, amount: 0, muted: true },
            { label: { fa: 'سرمایه‌گذاری مالک', en: 'Owner investment' }, amount: BS.equity.capital },
            { label: { fa: 'سود خالص', en: 'Net income' }, amount: IS.netIncome, dst: 'ni' as const },
            { label: { fa: 'برداشت', en: 'Drawings' }, amount: -BS.equity.drawings },
            { label: { fa: 'سرمایه پایان دوره', en: 'Capital, ending' }, amount: BS.equity.total, total: true, src: 'cap' as const },
          ])}
          {card(
            'cfs',
            4,
            { fa: 'صورت جریان‌های نقدی', en: 'Statement of cash flows' },
            month,
            [
              { label: { fa: 'فعالیت‌های عملیاتی', en: 'Operating activities' }, amount: CF.op },
              { label: { fa: 'فعالیت‌های سرمایه‌گذاری', en: 'Investing activities' }, amount: CF.inv },
              { label: { fa: 'فعالیت‌های تأمین مالی', en: 'Financing activities' }, amount: CF.fin },
              { label: { fa: 'خالص افزایش وجه نقد', en: 'Net increase in cash' }, amount: NET_CASH, total: true },
              { label: { fa: 'موجودی نقد اول دوره', en: 'Cash, beginning' }, amount: 0, muted: true },
              { label: { fa: 'موجودی نقد پایان دوره', en: 'Cash, ending' }, amount: CASH, total: true, src: 'cash' as const },
            ],
            'max-sm:order-last',
          )}
          {card('bs', 3, { fa: 'ترازنامه', en: 'Balance sheet' }, atEnd, [
            { label: { fa: 'موجودی نقد', en: 'Cash' }, amount: CASH, dst: 'cash' as const },
            { label: { fa: 'سایر دارایی‌های جاری', en: 'Other current assets' }, amount: BS.totalCurrentAssets - CASH, muted: true },
            { label: { fa: 'تجهیزات (خالص)', en: 'Equipment, net' }, amount: BS.totalAssets - BS.totalCurrentAssets, muted: true },
            { label: { fa: 'جمع دارایی‌ها', en: 'Total assets' }, amount: BS.totalAssets, total: true, check: true },
            { label: { fa: 'بدهی‌ها', en: 'Liabilities' }, amount: BS.totalLiabilities, muted: true },
            { label: { fa: 'سرمایه سارا', en: 'Capital (Sara)' }, amount: BS.equity.total, dst: 'cap' as const },
            { label: { fa: 'جمع بدهی‌ها و حقوق مالکانه', en: 'Total liabilities & equity' }, amount: BS.totalLE, total: true, check: true },
          ])}
        </div>

        {/* connectors */}
        <svg
          data-overlay
          aria-hidden
          width={size.w}
          height={size.h}
          className="pointer-events-none absolute inset-0 z-20 overflow-visible"
          fill="none"
        >
          {LINKS.map((l) =>
            paths[l.id] ? (
              <g key={l.id}>
                <path
                  d={paths[l.id]}
                  className={cn(
                    'transition-opacity duration-500',
                    reached(l.id) ? cn(TONE[l.tone].stroke, 'flow-dash opacity-80') : 'stroke-muted-foreground opacity-25',
                  )}
                  strokeWidth={reached(l.id) ? 2 : 1.5}
                  strokeDasharray="4 5"
                  strokeLinecap="round"
                />
                <path data-path-draw={l.id} d={paths[l.id]} className={TONE[l.tone].stroke} strokeWidth={3} strokeLinecap="round" opacity={0} />
              </g>
            ) : null,
          )}
        </svg>

        {/* status + controls */}
        <div
          aria-live="polite"
          className="mx-auto mt-5 flex min-h-[64px] max-w-2xl items-center justify-center rounded-xl border border-dashed bg-background/60 px-4 py-3 text-center text-sm leading-relaxed"
        >
          {tr(messages[step])}
        </div>
        <div data-anim="ctrl" className="mt-4">
          <StepperControls
            step={step}
            total={TOTAL_STEPS}
            onStep={(s) => {
              setPlaying(false)
              setStep(Math.max(0, Math.min(TOTAL_STEPS, s)))
            }}
            playing={playing}
            onTogglePlay={() => {
              if (playing) return setPlaying(false)
              if (step >= TOTAL_STEPS) setStep(0)
              setPlaying(true)
            }}
          />
        </div>
      </div>
    </DiagramFrame>
  )
}
