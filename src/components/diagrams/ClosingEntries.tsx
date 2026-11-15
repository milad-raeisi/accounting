import { useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { CircleCheck, Hourglass, Lock, Receipt, Sigma, TrendingUp, UserRound, Wallet, type LucideIcon } from 'lucide-react'

import { AnimatedNumber } from '@/components/ui/AnimatedNumber'
import type { L } from '@/content/types'
import { novaAccountMap, novaAccounts, novaAdjustments, novaTransactions } from '@/content/nova'
import { useI18n } from '@/i18n/I18nProvider'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'
import { closingEntries, computeBalances, incomeStatement, type Tx } from '@/lib/ledger'
import { cn } from '@/lib/utils'
import { DiagramFrame, useInViewTimeline, type DiagramProps } from './DiagramFrame'
import { StepControls } from './parts'

/* ── adjusted figures of the running example ── */
const BAL = computeBalances(novaAccounts, [...novaTransactions, ...novaAdjustments])
const IS = incomeStatement(BAL)
const CLOSING = closingEntries(BAL, { incomeSummary: 'incsum', capital: 'capital' })
const CAPITAL0 = BAL.get('capital')!.balance
const DRAWINGS0 = BAL.get('drawings')!.balance
const NET = IS.netIncome
const CAPITAL_END = CAPITAL0 + NET - DRAWINGS0

type NodeId = 'rev' | 'exp' | 'is' | 'draw' | 'cap'
type Step = { from: NodeId; to: NodeId; amount: number; entry: Tx | undefined; title: L }

const STEPS: Step[] = [
  {
    from: 'rev',
    to: 'is',
    amount: IS.totalRevenue,
    entry: CLOSING.find((e) => e.id === 'close-rev'),
    title: { fa: 'بستن درآمدها به خلاصه سود و زیان', en: 'Close revenue to Income Summary' },
  },
  {
    from: 'exp',
    to: 'is',
    amount: IS.totalExpense,
    entry: CLOSING.find((e) => e.id === 'close-exp'),
    title: { fa: 'بستن هزینه‌ها به خلاصه سود و زیان', en: 'Close expenses to Income Summary' },
  },
  {
    from: 'is',
    to: 'cap',
    amount: NET,
    entry: CLOSING.find((e) => e.id === 'close-is'),
    title: { fa: 'انتقال سود خالص از خلاصه سود و زیان به سرمایه', en: 'Close Income Summary (net income) to Capital' },
  },
  {
    from: 'draw',
    to: 'cap',
    amount: DRAWINGS0,
    entry: CLOSING.find((e) => e.id === 'close-drawings'),
    title: { fa: 'بستن برداشت مستقیماً به سرمایه', en: 'Close drawings directly to Capital' },
  },
]

const shortExpense = (name: L): L => ({ fa: name.fa.replace(/^هزینه\s+/, ''), en: name.en.replace(/\s+expense$/i, '') })

/* ── connector geometry (from measured boxes, works in LTR & RTL) ── */
type Box = { x: number; y: number; w: number; h: number }
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v))

function connect(a: Box, b: Box) {
  const acx = a.x + a.w / 2
  const acy = a.y + a.h / 2
  const bcx = b.x + b.w / 2
  const bcy = b.y + b.h / 2
  const dx = bcx - acx
  const dy = bcy - acy
  const gap = 4
  if (Math.abs(dx) > Math.abs(dy)) {
    const sx = dx > 0 ? a.x + a.w + gap : a.x - gap
    const ex = dx > 0 ? b.x - gap - 6 : b.x + b.w + gap + 6
    const sy = clamp(bcy, a.y + 16, a.y + a.h - 16)
    const ey = clamp(acy, b.y + 16, b.y + b.h - 16)
    const mx = (sx + ex) / 2
    return `M${sx},${sy} C${mx},${sy} ${mx},${ey} ${ex},${ey}`
  }
  const sy = dy > 0 ? a.y + a.h + gap : a.y - gap
  const ey = dy > 0 ? b.y - gap - 6 : b.y + b.h + gap + 6
  const sx = clamp(bcx, a.x + 16, a.x + a.w - 16)
  const ex = clamp(acx, b.x + 16, b.x + b.w - 16)
  const my = (sy + ey) / 2
  return `M${sx},${sy} C${sx},${my} ${ex},${my} ${ex},${ey}`
}

type Geo = { w: number; h: number; paths: string[] }

export default function ClosingEntries({ caption }: DiagramProps) {
  const { tr, t, lang, money, digits } = useI18n()
  const scope = useRef<HTMLDivElement>(null)
  const grid = useRef<HTMLDivElement>(null)
  const [step, setStep] = useState(0)
  const [landed, setLanded] = useState(0) // step whose amount has arrived at its destination
  const [playing, setPlaying] = useState(false)
  const [geo, setGeo] = useState<Geo | null>(null)
  const stepRef = useRef(0)
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const LAST = STEPS.length

  /* measure node boxes → connector paths (layout positions, unaffected by transforms) */
  useLayoutEffect(() => {
    const g = grid.current
    if (!g) return
    const measure = () => {
      const box = (id: NodeId): Box => {
        const n = g.querySelector<HTMLElement>(`[data-node="${id}"]`)
        return n ? { x: n.offsetLeft, y: n.offsetTop, w: n.offsetWidth, h: n.offsetHeight } : { x: 0, y: 0, w: 0, h: 0 }
      }
      setGeo({ w: g.clientWidth, h: g.clientHeight, paths: STEPS.map((s) => connect(box(s.from), box(s.to))) })
    }
    const ro = new ResizeObserver(measure)
    ro.observe(g)
    g.querySelectorAll('[data-node]').forEach((n) => ro.observe(n))
    return () => ro.disconnect()
  }, [lang])

  // autoplay
  useEffect(() => {
    if (!playing) return
    const id = window.setTimeout(
      () => {
        if (step + 1 >= LAST) setPlaying(false)
        setStep(Math.min(LAST, step + 1))
      },
      step === 0 ? 400 : 3000,
    )
    return () => window.clearTimeout(id)
  }, [playing, step, LAST])

  const { replay } = useInViewTimeline(
    scope,
    (tl) => {
      tl.from('[data-node]', { y: 20, opacity: 0, stagger: 0.1, duration: 0.55 })
        .from('[data-anim="links"]', { opacity: 0, duration: 0.5 }, '-=0.2')
        .from('[data-anim="panel"]', { y: 10, opacity: 0, duration: 0.4 }, '-=0.3')
        .from('[data-anim="ctrl"]', { y: 10, opacity: 0, duration: 0.4 }, '-=0.25')
        .add(() => {
          setStep(0)
          setPlaying(!prefersReducedMotion())
        })
    },
    [lang],
  )

  // the closing amount travels along its connector, then the destination updates
  useGSAP(
    () => {
      const prev = stepRef.current
      stepRef.current = step
      const land = () => {
        if (stepRef.current === step) setLanded(step)
      }
      const g = grid.current
      if (!g || step <= prev || prefersReducedMotion()) {
        land()
        return
      }
      const s = STEPS[step - 1]
      const path = g.querySelector<SVGPathElement>(`[data-path="${step - 1}"]`)
      const chip = g.querySelector<HTMLElement>('[data-chip]')
      if (!path || !chip) {
        land()
        return
      }
      gsap
        .timeline({ onComplete: land })
        .set(chip, { opacity: 0, scale: 0.6 })
        .fromTo(`[data-node="${s.from}"]`, { scale: 1 }, { scale: 0.96, duration: 0.15, yoyo: true, repeat: 1, ease: 'power1.inOut' })
        .to(chip, { opacity: 1, scale: 1, duration: 0.25, ease: 'back.out(2)' }, 0.05)
        .to(chip, { motionPath: { path, align: path, alignOrigin: [0.5, 0.5] }, duration: 1, ease: 'power2.inOut' }, 0.05)
        .to(chip, { opacity: 0, scale: 0.7, duration: 0.25 }, '-=0.12')
        .fromTo(`[data-node="${s.to}"]`, { scale: 1.05 }, { scale: 1, duration: 0.7, ease: 'elastic.out(1, 0.5)' }, '-=0.2')
    },
    { scope: grid, dependencies: [step] },
  )

  const go = (s: number) => {
    setPlaying(false)
    setStep(Math.max(0, Math.min(LAST, s)))
  }

  /* balances as the story unfolds (sources react to `step`, destinations to `landed`) */
  const revBal = step >= 1 ? 0 : IS.totalRevenue
  const expClosed = step >= 2
  const isCr = landed >= 1 ? IS.totalRevenue : 0
  const isDrExp = landed >= 2 ? IS.totalExpense : 0
  const isDrClose = step >= 3 ? NET : 0
  const isBal = isCr - isDrExp - isDrClose
  const drawBal = step >= 4 ? 0 : DRAWINGS0
  const capBal = CAPITAL0 + (landed >= 3 ? NET : 0) - (landed >= 4 ? DRAWINGS0 : 0)
  const current = step >= 1 ? STEPS[step - 1] : null
  const activeNodes = current ? [current.from, current.to] : []
  const done = landed >= LAST

  const revenueAcc = IS.revenues[0]?.account

  return (
    <DiagramFrame
      title={{ fa: 'ثبت‌های بستن حساب‌ها', en: 'Closing entries' }}
      caption={caption}
      badge="interactive"
      onReplay={() => {
        setPlaying(false)
        setStep(0)
        replay()
      }}
    >
      <div ref={scope} className="@container mx-auto max-w-3xl">
        <div
          ref={grid}
          className="relative grid grid-cols-2 items-start gap-x-3 gap-y-10 @xl:grid-cols-3 @xl:gap-x-14 @xl:gap-y-5"
        >
          {/* connectors */}
          <svg
            data-anim="links"
            aria-hidden
            className={cn('pointer-events-none absolute inset-0 size-full overflow-visible transition-opacity duration-500', !geo && 'opacity-0')}
            viewBox={geo ? `0 0 ${geo.w} ${geo.h}` : undefined}
          >
            <defs>
              <marker id={`${uid}-m`} viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" className="fill-border" />
              </marker>
              <marker id={`${uid}-p`} viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" className="fill-primary" />
              </marker>
            </defs>
            {geo?.paths.map((d, i) => (
              <g key={i}>
                <path d={d} fill="none" strokeWidth={2} strokeDasharray="5 6" className="stroke-border" markerEnd={`url(#${uid}-m)`} />
                <path
                  data-path={i}
                  d={d}
                  fill="none"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray="1"
                  style={{ strokeDashoffset: i < step ? 0 : 1 }}
                  className="stroke-primary transition-[stroke-dashoffset] duration-1000 ease-in-out"
                  markerEnd={i < landed ? `url(#${uid}-p)` : undefined}
                />
              </g>
            ))}
          </svg>

          <NodeCard id="rev" tone="revenue" icon={TrendingUp} title={t('lab.revenue')} kind="temporary" active={activeNodes.includes('rev')} closed={revBal === 0} className="@xl:col-start-1 @xl:row-start-1">
            <div className="truncate text-[11px] text-muted-foreground">{revenueAcc ? tr(revenueAcc.name) : ''}</div>
            <AnimatedNumber value={revBal} className="text-lg font-bold text-revenue" />
          </NodeCard>

          <NodeCard id="exp" tone="expense" icon={Receipt} title={t('lab.expenses')} kind="temporary" active={activeNodes.includes('exp')} closed={expClosed} className="@xl:col-start-1 @xl:row-start-2 @xl:row-span-2">
            <ul className="space-y-0.5 text-[11px]">
              {IS.expenses.map((e) => (
                <li key={e.account.id} className={cn('flex items-baseline justify-between gap-2 transition-opacity duration-500', expClosed && 'opacity-45')}>
                  <span className={cn('min-w-0 truncate', expClosed && 'line-through')}>{tr(shortExpense(e.account.name))}</span>
                  <span className="shrink-0 tabular">{money(expClosed ? 0 : e.amount)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-1.5 flex items-baseline justify-between gap-2 border-t pt-1">
              <span className="text-[11px] text-muted-foreground">{t('table.total')}</span>
              <AnimatedNumber value={expClosed ? 0 : IS.totalExpense} className="text-base font-bold text-expense" />
            </div>
          </NodeCard>

          <NodeCard
            id="is"
            tone="primary"
            icon={Sigma}
            title={tr({ fa: 'خلاصه سود و زیان', en: 'Income Summary' })}
            kind="clearing"
            active={activeNodes.includes('is')}
            closed={step >= 3 && isBal === 0}
            className="col-span-2 mx-auto w-full max-w-64 @xl:col-span-1 @xl:col-start-2 @xl:row-span-2 @xl:row-start-1 @xl:max-w-none @xl:self-center"
          >
            <div className="grid grid-cols-2 text-[11px]">
              <div className="border-e border-foreground/40 pe-1.5">
                <div className="border-b border-foreground/40 pb-0.5 text-center font-semibold text-debit">{t('table.debit')}</div>
                <TLine show={isDrExp > 0} value={money(IS.totalExpense)} />
                <TLine show={isDrClose > 0} value={money(NET)} accent />
              </div>
              <div className="ps-1.5">
                <div className="border-b border-foreground/40 pb-0.5 text-center font-semibold text-credit">{t('table.credit')}</div>
                <TLine show={isCr > 0} value={money(IS.totalRevenue)} />
              </div>
            </div>
            <div className="mt-1.5 flex items-baseline justify-between gap-2 border-t pt-1">
              <span className="text-[11px] text-muted-foreground">{t('table.balance')}</span>
              <AnimatedNumber value={isBal} className="text-base font-bold text-primary" />
            </div>
          </NodeCard>

          <NodeCard id="draw" tone="equity" icon={Wallet} title={t('lab.drawings')} kind="temporary" active={activeNodes.includes('draw')} closed={drawBal === 0} className="@xl:col-start-2 @xl:row-start-3">
            <AnimatedNumber value={drawBal} className="text-lg font-bold text-equity" />
          </NodeCard>

          <NodeCard id="cap" tone="equity" icon={UserRound} title={t('lab.capital')} kind="permanent" active={activeNodes.includes('cap')} className="@xl:col-start-3 @xl:row-span-3 @xl:row-start-1 @xl:self-center">
            <ul className="space-y-0.5 text-[11px]">
              <li className="flex justify-between gap-2">
                <span className="text-muted-foreground">{tr({ fa: 'مانده اول', en: 'Opening' })}</span>
                <span className="tabular">{money(CAPITAL0)}</span>
              </li>
              <li className={cn('flex justify-between gap-2 transition-opacity duration-500', landed >= 3 ? 'opacity-100' : 'opacity-0')}>
                <span className="text-muted-foreground">+ {t('lab.netIncome')}</span>
                <span className="tabular text-revenue">{money(NET)}</span>
              </li>
              <li className={cn('flex justify-between gap-2 transition-opacity duration-500', landed >= 4 ? 'opacity-100' : 'opacity-0')}>
                <span className="text-muted-foreground">− {t('lab.drawings')}</span>
                <span className="tabular text-liability">({money(DRAWINGS0)})</span>
              </li>
            </ul>
            <div className="mt-1.5 flex items-baseline justify-between gap-2 border-t border-foreground/40 pt-1">
              <span className="text-[11px] text-muted-foreground">{t('table.balance')}</span>
              <AnimatedNumber value={capBal} className="text-lg font-black text-equity" />
            </div>
          </NodeCard>

          {/* the travelling amount */}
          <span
            data-chip
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-10 rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground opacity-0 shadow-lg tabular"
          >
            {current ? money(current.amount) : ''}
          </span>
        </div>

        {/* explanation + journal entry */}
        <div data-anim="panel" className="mt-6 min-h-[132px] rounded-xl border bg-background/70 p-3 sm:p-4" aria-live="polite">
          {current ? (
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary text-xs text-primary-foreground">
                  {digits(String(step))}
                </span>
                {tr(current.title)}
              </div>
              {current.entry && (
                <table className="mt-2 w-full text-[11px] sm:text-xs">
                  <thead>
                    <tr className="text-muted-foreground">
                      <th className="pb-1 text-start font-medium">{t('table.account')}</th>
                      <th className="w-20 pb-1 text-end font-medium text-debit sm:w-24">{t('table.debit')}</th>
                      <th className="w-20 pb-1 text-end font-medium text-credit sm:w-24">{t('table.credit')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {current.entry.lines.map((l, i) => {
                      const acc = novaAccountMap.get(l.account)
                      return (
                        <tr key={i} className="border-t border-border/60">
                          <td className={cn('py-0.5', l.credit && 'ps-5')}>{acc ? tr(acc.name) : l.account}</td>
                          <td className="py-0.5 text-end tabular">{l.debit ? money(l.debit) : ''}</td>
                          <td className="py-0.5 text-end tabular">{l.credit ? money(l.credit) : ''}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              )}
              {done && (
                <div className="mt-3 flex items-start gap-2 rounded-lg bg-primary/10 px-3 py-2 text-xs font-medium text-primary sm:text-sm">
                  <CircleCheck className="mt-0.5 size-4 shrink-0" />
                  {tr({
                    fa: `همه حساب‌های موقت صفر شدند و سرمایه با مانده ${money(CAPITAL_END)} به دوره بعد منتقل می‌شود.`,
                    en: `Every temporary account is back to zero; Capital carries ${money(CAPITAL_END)} into the next period.`,
                  })}
                </div>
              )}
            </div>
          ) : (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {tr({
                fa: `پایان دوره است: درآمد (${money(IS.totalRevenue)})، هزینه‌ها (${money(IS.totalExpense)}) و برداشت (${money(DRAWINGS0)}) هنوز مانده دارند. با چهار ثبت بستن، آن‌ها را صفر و نتیجه را به سرمایه منتقل می‌کنیم.`,
                en: `It’s period end: revenue (${money(IS.totalRevenue)}), expenses (${money(IS.totalExpense)}) and drawings (${money(DRAWINGS0)}) still hold balances. Four closing entries reset them to zero and move the result into capital.`,
              })}
            </p>
          )}
        </div>

        <StepControls
          step={step}
          total={LAST}
          playing={playing}
          onPrev={() => go(step - 1)}
          onNext={() => go(step + 1)}
          onToggle={() => {
            if (step >= LAST) setStep(0)
            setPlaying((p) => !p)
          }}
        />
      </div>
    </DiagramFrame>
  )
}

/* ── node card ── */
const NODE_TONE = {
  revenue: { icon: 'bg-revenue/12 text-revenue', ring: 'ring-foreground/10 ' },
  expense: { icon: 'bg-expense/12 text-expense', ring: 'ring-foreground/10 ' },
  equity: { icon: 'bg-equity/12 text-equity', ring: 'ring-foreground/10 ' },
  primary: { icon: 'bg-primary/12 text-primary', ring: 'ring-foreground/10 ' },
} as const

function NodeCard({
  id,
  tone,
  icon: Icon,
  title,
  kind,
  active,
  closed,
  className,
  children,
}: {
  id: NodeId
  tone: keyof typeof NODE_TONE
  icon: LucideIcon
  title: string
  kind: 'temporary' | 'permanent' | 'clearing'
  active: boolean
  closed?: boolean
  className?: string
  children: ReactNode
}) {
  const { tr } = useI18n()
  const c = NODE_TONE[tone]
  return (
    <div
      data-node={id}
      className={cn(
        'relative min-w-0 rounded-xl border bg-card p-2.5 shadow-sm transition-[box-shadow,border-color] duration-500 sm:p-3',
        active && cn('ring-1', c.ring),
        className,
      )}
    >
      <div className="mb-1.5 flex items-center gap-2">
        <span className={cn('grid size-7 shrink-0 place-items-center rounded-lg', c.icon)}>
          <Icon className="size-4" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="truncate text-xs font-bold sm:text-sm">{title}</div>
          <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
            {kind === 'permanent' ? <Lock className="size-2.5" /> : <Hourglass className="size-2.5" />}
            {kind === 'permanent'
              ? tr({ fa: 'دائمی', en: 'permanent' })
              : kind === 'clearing'
                ? tr({ fa: 'واسط (موقت)', en: 'clearing (temporary)' })
                : tr({ fa: 'موقت', en: 'temporary' })}
          </div>
        </div>
        {closed && (
          <span className="inline-flex shrink-0 items-center gap-0.5 rounded-full bg-primary/12 p-0.5 text-[10px] font-semibold text-primary @xl:px-1.5">
            <CircleCheck className="size-3" aria-hidden />
            <span className="sr-only @xl:not-sr-only">{tr({ fa: 'بسته شد', en: 'closed' })}</span>
          </span>
        )}
      </div>
      {children}
    </div>
  )
}

function TLine({ show, value, accent }: { show: boolean; value: string; accent?: boolean }) {
  return (
    <div
      className={cn(
        'mt-0.5 text-end tabular transition-all duration-500',
        show ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0',
        accent && 'font-semibold text-primary',
      )}
    >
      {value}
    </div>
  )
}
