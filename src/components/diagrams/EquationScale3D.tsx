import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { AlertTriangle, CheckCircle2, RotateCcw } from 'lucide-react'

import { Switch } from '@/components/animate-ui/components/radix/switch'
import { AnimatedNumber } from '@/components/ui/AnimatedNumber'
import { novaAccountMap, novaTransactions } from '@/content/nova'
import { useI18n } from '@/i18n/I18nProvider'
import type { TxLine } from '@/lib/ledger'
import { cn } from '@/lib/utils'
import { DiagramFrame, type DiagramProps } from './DiagramFrame'

const BalanceScaleScene = lazy(() => import('@/components/three/BalanceScaleScene'))

const PICK = ['t1', 't2', 't3', 't4', 't6', 't8', 't12']
type Totals = { a: number; l: number; e: number }
const ZERO: Totals = { a: 0, l: 0, e: 0 }

function lineEffect(line: TxLine): Totals {
  const acc = novaAccountMap.get(line.account)!
  const net = (line.debit ?? 0) - (line.credit ?? 0)
  if (acc.type === 'asset') return { a: net, l: 0, e: 0 }
  if (acc.type === 'liability') return { a: 0, l: -net, e: 0 }
  return { a: 0, l: 0, e: -net } // capital, drawings, revenue, expense all flow through equity
}
const add = (x: Totals, y: Totals): Totals => ({ a: x.a + y.a, l: x.l + y.l, e: x.e + y.e })

export default function EquationScale3D({ caption }: DiagramProps) {
  const { t, tr, money, isFa } = useI18n()
  const [totals, setTotals] = useState<Totals>(ZERO)
  const [applied, setApplied] = useState<string[]>([])
  const [busy, setBusy] = useState(false)
  const [singleEntry, setSingleEntry] = useState(false)
  const [lastHalf, setLastHalf] = useState<string | null>(null)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const apply = (id: string) => {
    const tx = novaTransactions.find((x) => x.id === id)!
    setBusy(true)
    setApplied((a) => [...a, id])
    setLastHalf(id)
    setTotals((s) => add(s, lineEffect(tx.lines[0])))
    if (singleEntry) {
      setBusy(false)
      return
    }
    timer.current = window.setTimeout(() => {
      setTotals((s) => add(s, lineEffect(tx.lines[1])))
      setLastHalf(null)
      setBusy(false)
    }, 1100)
  }

  const reset = () => {
    window.clearTimeout(timer.current)
    setTotals(ZERO)
    setApplied([])
    setBusy(false)
    setLastHalf(null)
  }

  const balanced = Math.abs(totals.a - totals.l - totals.e) < 1e-9
  const diff = totals.a - totals.l - totals.e

  return (
    <DiagramFrame
      title={{ fa: 'ترازوی سه‌بعدی معادله حسابداری', en: 'The accounting equation as a 3D balance' }}
      caption={caption}
      badge="3d"
      onReplay={reset}
      bodyClassName="p-0 sm:p-0"
    >
      <div className="grid lg:grid-cols-[1fr_300px]">
        <div className="relative">
          <Suspense fallback={<div className="h-[340px] animate-pulse bg-muted/40 sm:h-[400px]" />}>
            <BalanceScaleScene
              assets={totals.a}
              liabilities={totals.l}
              equity={totals.e}
              mirror={isFa}
              labels={{
                assets: { label: t('table.assets'), value: money(totals.a) },
                liabilities: { label: t('table.liabilities'), value: money(totals.l) },
                equity: { label: t('table.equity'), value: money(totals.e) },
              }}
              fallback={tr({ fa: 'مرورگر شما از WebGL پشتیبانی نمی‌کند.', en: 'Your browser does not support WebGL.' })}
            />
          </Suspense>
          <div className="pointer-events-none absolute inset-x-0 top-3 flex justify-center">
            <div
              className={cn(
                'flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold shadow-sm backdrop-blur transition-colors',
                balanced ? ' bg-revenue/10 text-revenue' : ' bg-liability/10 text-liability',
              )}
            >
              {balanced ? <CheckCircle2 className="size-3.5" /> : <AlertTriangle className="size-3.5" />}
              {balanced ? t('table.balanced') : `${t('table.unbalanced')} · ${money(Math.abs(diff))}`}
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-2 start-3 text-[11px] text-muted-foreground">{t('diagram.drag')}</div>
        </div>

        <div className="border-t p-4 lg:border-s lg:border-t-0">
          <div className="mb-3 flex items-center justify-between gap-2">
            <div className="text-sm font-semibold">{tr({ fa: 'یک رویداد را ثبت کنید', en: 'Record a transaction' })}</div>
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <RotateCcw className="size-3" /> {t('diagram.reset')}
            </button>
          </div>
          <div className="flex flex-col gap-1.5">
            {PICK.map((id) => {
              const tx = novaTransactions.find((x) => x.id === id)!
              const done = applied.includes(id)
              return (
                <button
                  key={id}
                  type="button"
                  disabled={done || busy}
                  onClick={() => apply(id)}
                  className={cn(
                    'rounded-lg border px-3 py-2 text-start text-xs leading-relaxed transition',
                    done
                      ? 'bg-muted/60 text-muted-foreground'
                      : 'bg-background  hover:bg-accent/40 disabled:opacity-50',
                    lastHalf === id && 'ring-1 ring-foreground/10',
                  )}
                >
                  {done && <CheckCircle2 className="me-1 inline size-3.5 text-primary" />}
                  {tr(tx.title)}
                </button>
              )
            })}
          </div>

          <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-lg border border-dashed p-3">
            <Switch checked={singleEntry} onCheckedChange={setSingleEntry} className="mt-0.5" />
            <span className="text-xs leading-relaxed text-muted-foreground">
              <b className="text-foreground">{tr({ fa: 'حالت یک‌طرفه (اشتباه!)', en: 'Single-entry mode (wrong!)' })}</b>
              <br />
              {tr({
                fa: 'فقط اثر اول هر رویداد ثبت می‌شود تا ببینید چرا حسابداری دوطرفه لازم است.',
                en: 'Only the first effect of each event is recorded, see why double-entry is needed.',
              })}
            </span>
          </label>

          <div className="mt-4 grid grid-cols-3 gap-1 rounded-lg bg-muted/60 p-2 text-center text-[11px]">
            <div>
              <div className="text-muted-foreground">{t('table.assets')}</div>
              <AnimatedNumber value={totals.a} className="font-bold text-asset" />
            </div>
            <div>
              <div className="text-muted-foreground">{t('table.liabilities')}</div>
              <AnimatedNumber value={totals.l} className="font-bold text-liability" />
            </div>
            <div>
              <div className="text-muted-foreground">{t('table.equity')}</div>
              <AnimatedNumber value={totals.e} className="font-bold text-equity" />
            </div>
          </div>
        </div>
      </div>
    </DiagramFrame>
  )
}
