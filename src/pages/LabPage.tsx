import { lazy, Suspense, useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { AlertTriangle, CalendarClock, CheckCircle2, FlaskConical, Lock, PenLine, Play, RotateCcw, Undo2 } from 'lucide-react'

import { Tabs, TabsList, TabsTrigger } from '@/components/animate-ui/components/radix/tabs'
import { TAccount } from '@/components/lesson/tables'
import { AnimatedNumber } from '@/components/ui/AnimatedNumber'
import { labExtras, novaAccountMap, novaAccounts, novaAdjustments, novaTransactions } from '@/content/nova'
import { useI18n } from '@/i18n/I18nProvider'
import { gsap, useGSAP } from '@/lib/gsap'
import {
  balanceSheet,
  closingEntries,
  computeBalances,
  equation,
  incomeStatement,
  isBalanced,
  trialBalance,
  typeOrder,
  type AccountType,
  type Tx,
} from '@/lib/ledger'
import { cn } from '@/lib/utils'

const BalanceScaleScene = lazy(() => import('@/components/three/BalanceScaleScene'))

const STORE = 'aa.lab'
type View = 'journal' | 'ledger' | 'tb' | 'statements'

function loadTxs(): Tx[] {
  try {
    const raw = localStorage.getItem(STORE)
    if (!raw) return []
    const parsed = JSON.parse(raw) as { txs?: Tx[] }
    return Array.isArray(parsed.txs) ? parsed.txs.filter((t) => t && Array.isArray(t.lines) && isBalanced(t)) : []
  } catch {
    return []
  }
}

const typeLabel: Record<AccountType, { fa: string; en: string }> = {
  asset: { fa: 'دارایی‌ها', en: 'Assets' },
  liability: { fa: 'بدهی‌ها', en: 'Liabilities' },
  equity: { fa: 'حقوق مالکانه', en: 'Equity' },
  revenue: { fa: 'درآمدها', en: 'Revenue' },
  expense: { fa: 'هزینه‌ها', en: 'Expenses' },
}
const typeColor: Record<AccountType, string> = {
  asset: 'text-asset',
  liability: 'text-liability',
  equity: 'text-equity',
  revenue: 'text-revenue',
  expense: 'text-expense',
}

export default function LabPage() {
  const { t, tr, money, num, digits, isFa, lang } = useI18n()
  const [txs, setTxs] = useState<Tx[]>(loadTxs)
  const [view, setView] = useState<View>('journal')
  const [override, setOverride] = useState<{ a: number; l: number; e: number } | null>(null)
  const timer = useRef<number | undefined>(undefined)
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      localStorage.setItem(STORE, JSON.stringify({ txs }))
    } catch {
      /* ignore */
    }
  }, [txs])
  useEffect(() => () => window.clearTimeout(timer.current), [])

  const balances = useMemo(() => computeBalances(novaAccounts, txs), [txs])
  const eq = useMemo(() => equation(balances), [balances])
  const tb = useMemo(() => trialBalance(balances), [balances])
  const is = useMemo(() => incomeStatement(balances), [balances])
  const bs = useMemo(() => balanceSheet(balances), [balances])
  const recordedIds = new Set(txs.map((x) => x.id))
  const last = txs[txs.length - 1]
  const touched = new Set(last?.lines.map((l) => l.account) ?? [])
  const closed = txs.some((x) => x.kind === 'closing')

  /** Record with a two-phase scale animation: first line → tilt, full entry → level. */
  const record = (entries: Tx[]) => {
    if (!entries.length) return
    window.clearTimeout(timer.current)
    if (entries.length === 1) {
      const tx = entries[0]
      const half = equation(computeBalances(novaAccounts, [...txs, { ...tx, lines: [tx.lines[0]] }]))
      setOverride({ a: half.assets, l: half.liabilities, e: half.equity })
      timer.current = window.setTimeout(() => setOverride(null), 800)
    } else setOverride(null)
    setTxs((cur) => [...cur, ...entries.filter((e) => !cur.some((c) => c.id === e.id))])
  }
  const undo = () => setTxs((cur) => cur.slice(0, -1))
  const reset = () => {
    setOverride(null)
    setTxs([])
  }
  const closeBooks = () => record(closingEntries(balances, { incomeSummary: 'incsum', capital: 'capital' }, 31))

  const shown = override ?? { a: eq.assets, l: eq.liabilities, e: eq.equity }
  const tilted = Math.abs(shown.a - shown.l - shown.e) > 1e-9

  // GSAP: flash the newest journal row and pulse the ledger accounts it touched
  useGSAP(
    () => {
      if (!txs.length) return
      gsap.fromTo('[data-new-row]', { backgroundColor: 'color-mix(in oklch, var(--gold) 35%, transparent)', y: -10, opacity: 0 }, { backgroundColor: 'transparent', y: 0, opacity: 1, duration: 1.2, ease: 'power2.out' })
      gsap.fromTo('[data-touched]', { scale: 0.94 }, { scale: 1, duration: 0.8, ease: 'elastic.out(1, 0.5)' })
    },
    { scope: root, dependencies: [txs.length, view] },
  )

  const eventButton = (tx: Tx) => {
    const done = recordedIds.has(tx.id)
    const line = tx.lines
    return (
      <button
        key={tx.id}
        type="button"
        disabled={done || closed}
        onClick={() => record([tx])}
        className={cn(
          'group w-full rounded-xl border px-3 py-2.5 text-start transition',
          done ? 'bg-muted/60' : 'bg-background hover:bg-muted/40 disabled:opacity-50',
        )}
      >
        <div className="flex items-start gap-2">
          <span className={cn('mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-[10px] font-bold tabular', done ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground')}>
            {done ? <CheckCircle2 className="size-3.5" /> : num(tx.day)}
          </span>
          <span className="flex-1 text-xs leading-relaxed">{tr(tx.title)}</span>
        </div>
        <div className="mt-1.5 flex flex-wrap gap-1 ps-7 text-[10px] text-muted-foreground">
          <span className="rounded bg-debit/10 px-1.5 py-0.5 text-debit">
            {t('table.debit')}: {tr(novaAccountMap.get(line[0].account)!.name)}
          </span>
          <span className="rounded bg-credit/10 px-1.5 py-0.5 text-credit">
            {t('table.credit')}: {tr(novaAccountMap.get(line[1].account)!.name)}
          </span>
        </div>
      </button>
    )
  }

  return (
    <div ref={root} className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
      {/* heading */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-gold/10 px-3 py-1 text-xs font-semibold">
            <FlaskConical className="size-3.5 text-gold" /> {tr({ fa: 'شبیه‌ساز زنده', en: 'Live simulator' })}
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">{t('lab.title')}</h1>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">{t('lab.lead')}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={undo} disabled={!txs.length} className="inline-flex h-10 items-center gap-2 rounded-xl border bg-background px-4 text-sm font-medium transition hover:bg-muted disabled:opacity-40">
            <Undo2 className="size-4" /> {t('lab.undo')}
          </button>
          <button type="button" onClick={reset} disabled={!txs.length} className="inline-flex h-10 items-center gap-2 rounded-xl border bg-background px-4 text-sm font-medium transition hover:bg-muted disabled:opacity-40">
            <RotateCcw className="size-4" /> {t('lab.reset')}
          </button>
        </div>
      </div>

      {/* equation + 3D scale */}
      <section className="mt-8 grid overflow-hidden rounded-lg border bg-card lg:grid-cols-[1.2fr_1fr]">
        <div className="relative">
          <Suspense fallback={<div className="h-[340px] animate-pulse bg-muted/40 sm:h-[400px]" />}>
            <BalanceScaleScene
              assets={shown.a}
              liabilities={shown.l}
              equity={shown.e}
              mirror={isFa}
              unit={5000}
              labels={{
                assets: { label: t('table.assets'), value: money(shown.a) },
                liabilities: { label: t('table.liabilities'), value: money(shown.l) },
                equity: { label: t('table.equity'), value: money(shown.e) },
              }}
            />
          </Suspense>
          <div className="pointer-events-none absolute top-3 start-3 rounded-full border bg-background/80 px-3 py-1 text-xs font-semibold backdrop-blur">{t('lab.scale')}</div>
        </div>
        <div className="flex flex-col justify-center gap-5 border-t p-6 lg:border-s lg:border-t-0">
          <div className="text-sm font-semibold text-muted-foreground">{t('lab.equation')}</div>
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 text-center">
            <div>
              <div className="text-xs text-muted-foreground">{t('table.assets')}</div>
              <AnimatedNumber value={eq.assets} className="text-xl font-black text-asset sm:text-2xl" />
            </div>
            <span className="text-xl font-bold">=</span>
            <div>
              <div className="text-xs text-muted-foreground">{t('table.liabilities')}</div>
              <AnimatedNumber value={eq.liabilities} className="text-xl font-black text-liability sm:text-2xl" />
            </div>
            <span className="text-xl font-bold">+</span>
            <div>
              <div className="text-xs text-muted-foreground">{t('table.equity')}</div>
              <AnimatedNumber value={eq.equity} className="text-xl font-black text-equity sm:text-2xl" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl bg-muted/60 p-3">
              <div className="text-xs text-muted-foreground">{t('lab.tb')}</div>
              <div className="mt-1 font-bold tabular">
                <span className="text-debit">{money(tb.totalDebit)}</span> / <span className="text-credit">{money(tb.totalCredit)}</span>
              </div>
            </div>
            <div className="rounded-xl bg-muted/60 p-3">
              <div className="text-xs text-muted-foreground">{t('lab.netIncome')}</div>
              <AnimatedNumber value={is.netIncome} className={cn('mt-1 font-bold', is.netIncome >= 0 ? 'text-revenue' : 'text-liability')} />
            </div>
          </div>
          <div className={cn('flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium', tilted ? ' bg-gold/10' : ' bg-revenue/10 text-revenue')}>
            {tilted ? <AlertTriangle className="size-4 text-gold" /> : <CheckCircle2 className="size-4" />}
            {tilted ? tr({ fa: 'نیمی از ثبت انجام شد؛ طرف دوم در راه است…', en: 'Half of the entry posted, the other side is on its way…' }) : t('table.balanced')}
          </div>
          <p className="text-xs leading-6 text-muted-foreground">{t('lab.hint')}</p>
        </div>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)]">
        {/* controls */}
        <aside className="space-y-6">
          <div className="rounded-lg border bg-card p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-bold">{t('lab.presets')}</h2>
              <button
                type="button"
                disabled={closed || novaTransactions.every((x) => recordedIds.has(x.id))}
                onClick={() => record(novaTransactions.filter((x) => !recordedIds.has(x.id)))}
                className="inline-flex items-center gap-1 rounded-lg bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground disabled:opacity-40"
              >
                <Play className="size-3 rtl:rotate-180" /> {t('lab.recordAll')}
              </button>
            </div>
            <div className="space-y-2">
              {novaTransactions.map(eventButton)}
              <div className="pt-2 text-xs font-semibold text-muted-foreground">{tr({ fa: 'رویدادهای اضافه', en: 'Extra events' })}</div>
              {labExtras.map(eventButton)}
            </div>
          </div>

          <div className="rounded-lg border bg-card p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="flex items-center gap-2 font-bold">
                <CalendarClock className="size-4 text-expense" /> {t('lab.adjustments')}
              </h2>
              <button
                type="button"
                disabled={closed || novaAdjustments.every((x) => recordedIds.has(x.id))}
                onClick={() => record(novaAdjustments.filter((x) => !recordedIds.has(x.id)))}
                className="rounded-lg border px-2.5 py-1 text-xs font-semibold disabled:opacity-40"
              >
                {t('lab.recordAll')}
              </button>
            </div>
            <div className="space-y-2">
              {novaAdjustments.map(eventButton)}
            </div>
            <button
              type="button"
              disabled={closed || !txs.length}
              onClick={closeBooks}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-equity px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-40"
            >
              <Lock className="size-4" /> {tr({ fa: 'بستن حساب‌های موقت', en: 'Close the books' })}
            </button>
          </div>

          <CustomEntry disabled={closed} onRecord={(tx) => record([tx])} nextDay={Math.min(31, (last?.day ?? 0) + 1)} />
        </aside>

        {/* views */}
        <section className="min-w-0 lg:sticky lg:top-20 lg:self-start">
          <Tabs value={view} onValueChange={(v) => setView(v as View)}>
            <TabsList className="h-10 w-full max-w-full overflow-x-auto sm:w-fit">
              <TabsTrigger value="journal" className="px-3">
                {t('lab.journal')}
              </TabsTrigger>
              <TabsTrigger value="ledger" className="px-3">
                {t('lab.ledger')}
              </TabsTrigger>
              <TabsTrigger value="tb" className="px-3">
                {t('lab.tb')}
              </TabsTrigger>
              <TabsTrigger value="statements" className="px-3">
                {t('lab.statements')}
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="mt-5">
            {!txs.length ? (
              <div className="grid min-h-[320px] place-items-center rounded-lg border border-dashed p-8 text-center text-muted-foreground">
                <div>
                  <FlaskConical className="mx-auto mb-3 size-10 opacity-40" />
                  {t('lab.empty')}
                </div>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div key={`${view}-${lang}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}>
                  {view === 'journal' && (
                    <div className="overflow-x-auto rounded-lg border bg-card">
                      <table className="w-full min-w-[540px] text-sm">
                        <thead>
                          <tr className="border-b bg-muted/60 text-xs text-muted-foreground">
                            <th className="w-16 px-3 py-2 text-start font-medium">{t('table.date')}</th>
                            <th className="px-3 py-2 text-start font-medium">{t('table.account')}</th>
                            <th className="w-28 px-3 py-2 text-end font-medium text-debit">{t('table.debit')}</th>
                            <th className="w-28 px-3 py-2 text-end font-medium text-credit">{t('table.credit')}</th>
                          </tr>
                        </thead>
                        {[...txs].reverse().map((tx, i) => (
                          <tbody key={tx.id} {...(i === 0 ? { 'data-new-row': '' } : {})} className="border-b last:border-b-0">
                            {tx.lines.map((line, j) => (
                              <tr key={j}>
                                <td className="px-3 pt-2 text-xs text-muted-foreground tabular">{j === 0 ? tr({ fa: `روز ${tx.day}`, en: `Day ${tx.day}` }) : ''}</td>
                                <td className={cn('px-3 pt-2', line.credit && 'ps-10 text-muted-foreground')}>{tr(novaAccountMap.get(line.account)?.name)}</td>
                                <td className="px-3 pt-2 text-end tabular">{line.debit ? money(line.debit) : ''}</td>
                                <td className="px-3 pt-2 text-end tabular">{line.credit ? money(line.credit) : ''}</td>
                              </tr>
                            ))}
                            <tr>
                              <td />
                              <td colSpan={3} className="px-3 pt-1 pb-3 text-xs italic text-muted-foreground">
                                ({tr(tx.title)})
                                {tx.kind !== 'regular' && tx.kind && (
                                  <span className={cn('ms-2 rounded-full px-2 py-0.5 text-[10px] font-semibold not-italic', tx.kind === 'adjusting' ? 'bg-expense/15 text-expense' : 'bg-equity/15 text-equity')}>
                                    {tx.kind === 'adjusting' ? tr({ fa: 'اصلاحی', en: 'Adjusting' }) : tr({ fa: 'بستن', en: 'Closing' })}
                                  </span>
                                )}
                              </td>
                            </tr>
                          </tbody>
                        ))}
                      </table>
                    </div>
                  )}

                  {view === 'ledger' && (
                    <div className="space-y-6">
                      {typeOrder.map((type) => {
                        const accs = [...balances.values()].filter((b) => b.account.type === type && (b.debits.length || b.credits.length))
                        if (!accs.length) return null
                        return (
                          <div key={type}>
                            <div className={cn('mb-2 text-sm font-bold', typeColor[type])}>{tr(typeLabel[type])}</div>
                            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                              {accs
                                .sort((a, b) => a.account.code.localeCompare(b.account.code))
                                .map((b) => (
                                  <div key={b.account.id} {...(touched.has(b.account.id) ? { 'data-touched': '' } : {})}>
                                    <TAccount
                                      name={`${digits(b.account.code)} · ${tr(b.account.name)}`}
                                      debits={b.debits.map((p) => p.amount)}
                                      credits={b.credits.map((p) => p.amount)}
                                      labels={{ debit: t('table.debit'), credit: t('table.credit'), balance: t('table.balance') }}
                                      highlight={touched.has(b.account.id)}
                                    />
                                  </div>
                                ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}

                  {view === 'tb' && (
                    <div className="overflow-x-auto rounded-lg border bg-card">
                      <table className="w-full min-w-[460px] text-sm">
                        <thead>
                          <tr className="border-b bg-muted/60 text-xs text-muted-foreground">
                            <th className="px-3 py-2 text-start font-medium">{t('table.account')}</th>
                            <th className="w-32 px-3 py-2 text-end font-medium text-debit">{t('table.debit')}</th>
                            <th className="w-32 px-3 py-2 text-end font-medium text-credit">{t('table.credit')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tb.rows.map((r) => (
                            <tr key={r.account.id} className={cn('border-b', touched.has(r.account.id) && 'bg-gold/10')}>
                              <td className="px-3 py-2">
                                <span className="me-2 text-xs text-muted-foreground tabular">{digits(r.account.code)}</span>
                                {tr(r.account.name)}
                              </td>
                              <td className="px-3 py-2 text-end tabular">{r.debit ? money(r.debit) : ''}</td>
                              <td className="px-3 py-2 text-end tabular">{r.credit ? money(r.credit) : ''}</td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr className="border-t border-foreground/25 bg-muted/50 font-bold">
                            <td className="px-3 py-2.5">
                              <span className="inline-flex items-center gap-2">
                                {t('table.total')}
                                <span className={cn('inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px]', tb.balanced ? 'bg-revenue/15 text-revenue' : 'bg-liability/15 text-liability')}>
                                  {tb.balanced ? <CheckCircle2 className="size-3" /> : <AlertTriangle className="size-3" />}
                                  {tb.balanced ? t('table.balanced') : t('table.unbalanced')}
                                </span>
                              </span>
                            </td>
                            <td className="px-3 py-2.5 text-end tabular">
                              <AnimatedNumber value={tb.totalDebit} />
                            </td>
                            <td className="px-3 py-2.5 text-end tabular">
                              <AnimatedNumber value={tb.totalCredit} />
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  )}

                  {view === 'statements' && (
                    <div className="grid gap-5 xl:grid-cols-2">
                      <Statement title={t('lab.incomeStatement')}>
                        <Row label={t('lab.revenue')} strong />
                        {is.revenues.map((r) => (
                          <Row key={r.account.id} label={tr(r.account.name)} value={money(r.amount)} indent />
                        ))}
                        <Row label={t('lab.expenses')} strong />
                        {is.expenses.map((r) => (
                          <Row key={r.account.id} label={tr(r.account.name)} value={money(r.amount)} indent />
                        ))}
                        <Row label={t('lab.netIncome')} value={money(is.netIncome)} total tone={is.netIncome >= 0 ? 'text-revenue' : 'text-liability'} />
                        {closed && <p className="mt-2 text-xs text-muted-foreground">{tr({ fa: 'حساب‌های موقت بسته شده‌اند؛ سود به سرمایه منتقل شد.', en: 'Temporary accounts are closed, profit has moved into capital.' })}</p>}
                      </Statement>
                      <Statement title={t('lab.balanceSheet')}>
                        <Row label={t('table.assets')} strong />
                        {[...bs.currentAssets, ...bs.nonCurrentAssets].map((r) => (
                          <Row key={r.account.id} label={tr(r.account.name)} value={money(r.amount)} indent />
                        ))}
                        <Row label={t('lab.totalAssets')} value={money(bs.totalAssets)} total tone="text-asset" />
                        <Row label={t('table.liabilities')} strong />
                        {[...bs.currentLiabilities, ...bs.nonCurrentLiabilities].map((r) => (
                          <Row key={r.account.id} label={tr(r.account.name)} value={money(r.amount)} indent />
                        ))}
                        <Row label={t('lab.totalLiabilities')} value={money(bs.totalLiabilities)} sub />
                        <Row label={t('table.equity')} strong />
                        <Row label={t('lab.capital')} value={money(bs.equity.capital)} indent />
                        {bs.equity.netIncome !== 0 && <Row label={t('lab.netIncome')} value={money(bs.equity.netIncome)} indent />}
                        {bs.equity.drawings !== 0 && <Row label={t('lab.drawings')} value={money(-bs.equity.drawings)} indent />}
                        <Row label={t('lab.totalEquity')} value={money(bs.equity.total)} sub />
                        <Row label={t('lab.totalLE')} value={money(bs.totalLE)} total tone="text-equity" />
                      </Statement>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

function Statement({ title, children }: { title: string; children: ReactNode }) {
  const { t, tr } = useI18n()
  return (
    <div className="rounded-lg border bg-card p-5">
      <div className="mb-1 text-center text-lg font-bold">{title}</div>
      <div className="mb-4 text-center text-xs text-muted-foreground">
        {tr({ fa: 'استودیو طراحی نوا · ماه اول', en: 'Nova Design Studio · Month 1' })} · {t('units.money')}
      </div>
      <div className="text-sm">{children}</div>
    </div>
  )
}

function Row({ label, value, strong, indent, total, sub, tone }: { label: string; value?: string; strong?: boolean; indent?: boolean; total?: boolean; sub?: boolean; tone?: string }) {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-4 py-1',
        strong && 'mt-3 font-bold',
        indent && 'ps-4 text-foreground/85',
        sub && 'border-t font-semibold',
        total && 'mt-2 border-t border-foreground/40 pt-2 text-base font-black',
        tone,
      )}
    >
      <span>{label}</span>
      {value !== undefined && <span className="tabular">{value}</span>}
    </div>
  )
}

function CustomEntry({ onRecord, disabled, nextDay }: { onRecord: (tx: Tx) => void; disabled?: boolean; nextDay: number }) {
  const { t, tr } = useI18n()
  const [dr, setDr] = useState('supplies')
  const [cr, setCr] = useState('cash')
  const [amount, setAmount] = useState('500')
  const [memo, setMemo] = useState('')
  const [error, setError] = useState<string | null>(null)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const value = Number(amount.replace(/[٬,]/g, '').replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d))))
    if (dr === cr) return setError(t('lab.sameAccount'))
    if (!Number.isFinite(value) || value <= 0) return setError(t('lab.invalidAmount'))
    setError(null)
    onRecord({
      id: `c${Date.now()}`,
      day: nextDay,
      kind: 'regular',
      title: memo.trim() ? { fa: memo.trim(), en: memo.trim() } : { fa: t('lab.customMemo'), en: 'Custom entry' },
      lines: [
        { account: dr, debit: value },
        { account: cr, credit: value },
      ],
    })
    setMemo('')
  }

  const options = typeOrder.map((type) => (
    <optgroup key={type} label={tr(typeLabel[type])}>
      {novaAccounts
        .filter((a) => a.type === type && !a.clearing)
        .map((a) => (
          <option key={a.id} value={a.id}>
            {tr(a.name)}
          </option>
        ))}
    </optgroup>
  ))

  const field = 'h-10 w-full rounded-lg border bg-background px-3 text-sm outline-none transition focus:border-foreground/30 focus:ring-2 focus:ring-ring/30'

  return (
    <form onSubmit={submit} className="rounded-lg border bg-card p-4">
      <h2 className="mb-3 flex items-center gap-2 font-bold">
        <PenLine className="size-4 text-primary" /> {t('lab.custom')}
      </h2>
      <div className="space-y-3">
        <label className="block text-xs font-medium text-debit">
          {t('lab.debitAccount')}
          <select value={dr} onChange={(e) => setDr(e.target.value)} className={cn(field, 'mt-1 text-foreground')}>
            {options}
          </select>
        </label>
        <label className="block text-xs font-medium text-credit">
          {t('lab.creditAccount')}
          <select value={cr} onChange={(e) => setCr(e.target.value)} className={cn(field, 'mt-1 text-foreground')}>
            {options}
          </select>
        </label>
        <div className="grid grid-cols-[1fr_1.4fr] gap-2">
          <label className="block text-xs font-medium text-muted-foreground">
            {t('lab.amount')}
            <input inputMode="numeric" value={amount} onChange={(e) => setAmount(e.target.value)} className={cn(field, 'mt-1 tabular text-foreground')} dir="ltr" />
          </label>
          <label className="block text-xs font-medium text-muted-foreground">
            {t('lab.memo')}
            <input value={memo} onChange={(e) => setMemo(e.target.value)} className={cn(field, 'mt-1 text-foreground')} />
          </label>
        </div>
        {error && <p className="text-xs font-medium text-liability">{error}</p>}
        <button type="submit" disabled={disabled} className="h-10 w-full rounded-xl bg-foreground text-sm font-semibold text-background transition hover:opacity-90 active:scale-[0.98] disabled:opacity-40">
          {t('lab.record')}
        </button>
      </div>
    </form>
  )
}
