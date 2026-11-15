import { useId, useRef, useState } from 'react'
import { CircleCheck, Scale, TriangleAlert } from 'lucide-react'

import { Switch } from '@/components/animate-ui/components/radix/switch'
import { AnimatedNumber } from '@/components/ui/AnimatedNumber'
import { novaAccounts, novaTransactions } from '@/content/nova'
import { useI18n } from '@/i18n/I18nProvider'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'
import { computeBalances, trialBalance, type AccountType } from '@/lib/ledger'
import { cn } from '@/lib/utils'
import { DiagramFrame, useInViewTimeline, type DiagramProps } from './DiagramFrame'

/** Unadjusted trial balance of the running example (12 accounts, 78,500 = 78,500). */
const TB = trialBalance(computeBalances(novaAccounts, novaTransactions))
/** The account we deliberately post to the wrong side when the learner asks for an error. */
const ERROR_ID = 'rent'
const ERROR_ROW = TB.rows.find((r) => r.account.id === ERROR_ID)!
const ERROR_AMOUNT = ERROR_ROW.debit || ERROR_ROW.credit

const DOT: Record<AccountType, string> = {
  asset: 'bg-asset',
  liability: 'bg-liability',
  equity: 'bg-equity',
  revenue: 'bg-revenue',
  expense: 'bg-expense',
}

export default function TrialBalanceDiagram({ caption }: DiagramProps) {
  const { tr, t, lang, isFa, money, digits } = useI18n()
  const scope = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)
  const [error, setError] = useState(false)
  const prevError = useRef(error)
  const switchId = useId()

  const rows = TB.rows.map((r) => {
    const wrong = error && r.account.id === ERROR_ID
    const amount = r.debit || r.credit
    const side: 'debit' | 'credit' = (r.debit > 0) !== wrong ? 'debit' : 'credit'
    return { ...r, amount, side, wrong }
  })
  const totalDebit = rows.reduce((s, r) => s + (r.side === 'debit' ? r.amount : 0), 0)
  const totalCredit = rows.reduce((s, r) => s + (r.side === 'credit' ? r.amount : 0), 0)
  const diff = Math.abs(totalDebit - totalCredit)
  const balanced = diff === 0

  const { replay } = useInViewTimeline(
    scope,
    (tl, el) => {
      // measure first: each amount slides out of its account name into the Debit or Credit column
      const rowEls = gsap.utils.toArray<HTMLElement>('[data-row]', el)
      const offsets = rowEls.map((row) => {
        const src = row.querySelector('[data-src]')?.getBoundingClientRect()
        const amt = row.querySelector('[data-amt]')?.getBoundingClientRect()
        return src && amt ? src.left - (amt.left + amt.width / 2) : 0
      })

      tl.from('[data-anim="head"]', { y: -8, opacity: 0, stagger: 0.06, duration: 0.4 }).addLabel('rows', '-=0.1')
      rowEls.forEach((row, i) => {
        const at = i * 0.2
        tl.from(row.querySelectorAll('[data-anim="cell"]'), { y: 8, opacity: 0, duration: 0.35 }, `rows+=${at}`)
        tl.from(
          row.querySelector('[data-amt]'),
          { x: offsets[i], opacity: 0, scale: 0.85, duration: 0.65, ease: 'power3.inOut' },
          `rows+=${at + 0.15}`,
        )
      })
      tl.from('[data-anim="foot"]', { y: 8, opacity: 0, duration: 0.45 }, '-=0.1')
        .call(() => setRevealed(true))
        .fromTo('[data-anim="badge"]', { scale: 0.85 }, { scale: 1, duration: 0.9, ease: 'elastic.out(1, 0.5)' }, '+=0.9')
    },
    [lang],
  )

  // the misposted amount jumps across to the other column (and back)
  useGSAP(
    () => {
      if (prevError.current === error) return
      prevError.current = error
      const root = scope.current
      if (!root || prefersReducedMotion()) return
      const row = root.querySelector<HTMLElement>(`[data-row="${ERROR_ID}"]`)
      const amt = row?.querySelector<HTMLElement>('[data-amt]')
      const track = amt?.parentElement
      if (!row || !amt || !track) return
      const half = track.getBoundingClientRect().width / 2
      // moved toward Credit when error is on; Credit is the reading-end column
      const dir = (error ? 1 : -1) * (isFa ? -1 : 1)
      gsap.from(amt, { x: -dir * half, duration: 0.7, ease: 'power3.inOut' })
      gsap.fromTo('[data-anim="badge"]', { x: -6 }, { x: 0, duration: 0.6, ease: 'elastic.out(1.2, 0.3)', delay: 0.5 })
    },
    { scope, dependencies: [error] },
  )

  const state = !revealed ? 'idle' : balanced ? 'ok' : 'bad'

  return (
    <DiagramFrame
      title={{ fa: 'تراز آزمایشی: آیا جمع بدهکار با بستانکار برابر است؟', en: 'Trial balance: do debits equal credits?' }}
      caption={caption}
      badge="interactive"
      onReplay={() => {
        setRevealed(false)
        replay()
      }}
    >
      <div ref={scope} className="mx-auto max-w-2xl">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div data-anim="head" className="min-w-0">
            <div className="text-sm font-semibold">{tr({ fa: 'استودیو طراحی نوا', en: 'Nova Design Studio' })}</div>
            <div className="text-xs text-muted-foreground">
              {tr({ fa: 'تراز آزمایشی پیش از اصلاحات · پایان ماه', en: 'Unadjusted trial balance · month end' })} ·{' '}
              {t('units.money')}
            </div>
          </div>
          <label
            data-anim="head"
            htmlFor={switchId}
            className={cn(
              'inline-flex cursor-pointer items-center gap-2 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors',
              error ? ' bg-destructive/8 text-destructive' : 'bg-background',
            )}
          >
            <Switch id={switchId} checked={error} onCheckedChange={setError} />
            {tr({ fa: 'ایجاد یک خطا', en: 'Introduce an error' })}
          </label>
        </div>

        <div className="overflow-x-auto rounded-xl border bg-background/60">
          <table className="w-full min-w-[280px] border-separate border-spacing-0 text-xs sm:text-sm">
            <caption className="sr-only">
              {tr({ fa: 'تراز آزمایشی استودیو طراحی نوا', en: 'Nova Design Studio trial balance' })}
            </caption>
            <thead>
              <tr data-anim="head" className="bg-muted/50 text-muted-foreground">
                <th scope="col" className="hidden w-14 border-b px-2 py-2 text-start font-medium sm:table-cell">
                  {tr({ fa: 'کد', en: 'Code' })}
                </th>
                <th scope="col" className="border-b px-2 py-2 text-start font-medium">
                  {t('table.account')}
                </th>
                <th scope="col" className="w-[27%] border-b px-2 py-2 text-end font-semibold text-debit">
                  {t('table.debit')}
                </th>
                <th scope="col" className="w-[27%] border-b px-2 py-2 text-end font-semibold text-credit">
                  {t('table.credit')}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr
                  key={r.account.id}
                  data-row={r.account.id}
                  className={cn('transition-colors duration-500', r.wrong ? 'bg-destructive/8' : 'even:bg-muted/30')}
                >
                  <td className="hidden border-b border-border/60 px-2 py-1.5 text-muted-foreground tabular sm:table-cell">
                    <span data-anim="cell">{digits(r.account.code)}</span>
                  </td>
                  <td className="border-b border-border/60 px-2 py-1.5">
                    <span data-anim="cell" className="inline-flex max-w-full items-center gap-1.5">
                      <span className={cn('size-1.5 shrink-0 rounded-full', DOT[r.account.type])} aria-hidden />
                      <span className="truncate">{tr(r.account.name)}</span>
                      {r.wrong && <TriangleAlert className="size-3.5 shrink-0 text-destructive" aria-hidden />}
                      <span data-src aria-hidden className="inline-block w-0" />
                    </span>
                  </td>
                  {/* one cell, two halves → the amount element persists when it changes side */}
                  <td colSpan={2} className="border-b border-border/60 p-0">
                    <div className="grid grid-cols-2">
                      <span
                        data-amt
                        className={cn(
                          'px-2 py-1.5 text-end font-medium tabular',
                          r.side === 'debit' ? 'col-start-1 text-debit' : 'col-start-2 text-credit',
                          r.wrong && 'font-bold text-destructive',
                        )}
                      >
                        {money(r.amount)}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot data-anim="foot">
              <tr className="font-bold">
                <td className="hidden sm:table-cell" />
                <td className="px-2 pb-2 pt-2.5">{t('table.total')}</td>
                <td className="px-2 pb-2 pt-1.5 text-end">
                  <div className="border-t border-foreground/50 pt-1">
                    <AnimatedNumber value={revealed ? totalDebit : 0} className={cn(error ? 'text-destructive' : 'text-debit')} />
                  </div>
                </td>
                <td className="px-2 pb-2 pt-1.5 text-end">
                  <div className="border-t border-foreground/50 pt-1">
                    <AnimatedNumber value={revealed ? totalCredit : 0} className={cn(error ? 'text-destructive' : 'text-credit')} />
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* the check */}
        <div className="mt-4 flex flex-col items-center gap-2" aria-live="polite">
          <div
            data-anim="badge"
            className={cn(
              'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-500',
              state === 'idle' && 'border-border bg-muted text-muted-foreground',
              state === 'ok' && ' bg-primary/10 text-primary ',
              state === 'bad' && ' bg-destructive/10 text-destructive ',
            )}
          >
            <Scale className={cn('size-4 transition-transform duration-700', state === 'bad' && '-rotate-12')} />
            {state === 'idle' && tr({ fa: 'در حال جمع زدن…', en: 'Adding up…' })}
            {state === 'ok' && (
              <>
                {money(totalDebit)} = {money(totalCredit)} · {t('table.balanced')}
                <CircleCheck className="size-4" />
              </>
            )}
            {state === 'bad' && (
              <>
                {t('table.unbalanced')} · {tr({ fa: 'اختلاف', en: 'off by' })} {money(diff)}
              </>
            )}
          </div>
          {error && (
            <p className="max-w-lg text-center text-xs leading-relaxed text-muted-foreground">
              {tr({
                fa: `هزینه اجاره (${money(ERROR_AMOUNT)}) به‌اشتباه در ستون بستانکار نشسته است. بدهکار ${money(ERROR_AMOUNT)} کم و بستانکار ${money(ERROR_AMOUNT)} زیاد شده؛ پس اختلاف دو برابر مبلغ است. نکته: اختلاف را نصف کنید و دنبال همان مبلغ بگردید.`,
                en: `Rent expense (${money(ERROR_AMOUNT)}) landed in the Credit column. Debits lose ${money(ERROR_AMOUNT)} and credits gain ${money(ERROR_AMOUNT)}, so the gap is twice the amount. Tip: halve the difference and look for that figure.`,
              })}
            </p>
          )}
        </div>
      </div>
    </DiagramFrame>
  )
}
