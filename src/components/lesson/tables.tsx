import type { ReactNode } from 'react'

import { Rich } from '@/components/ui/Rich'
import type { AnalysisRow, JournalEntry, L, TAccountData } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'
import { formatSigned } from '@/lib/format'
import { cn } from '@/lib/utils'

function Caption({ children }: { children: ReactNode }) {
  return <div className="mb-2 flex items-center justify-between gap-3 text-sm font-semibold">{children}</div>
}

function Units() {
  const { t } = useI18n()
  return <span className="text-[11px] font-normal text-muted-foreground">{t('units.money')}</span>
}

export function TableShell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('overflow-x-auto rounded-lg border bg-card', className)}>
      <table className="w-full min-w-[480px] border-collapse text-sm">{children}</table>
    </div>
  )
}

/** General journal: date | account (credits indented) | debit | credit */
export function JournalTable({ title, entries }: { title?: L; entries: JournalEntry[] }) {
  const { t, tr } = useI18n()
  return (
    <div className="my-6">
      <Caption>
        <span>{title ? tr(title) : t('lab.journal')}</span>
        <Units />
      </Caption>
      <TableShell>
        <thead>
          <tr className="border-b bg-muted/60 text-xs text-muted-foreground">
            <th className="w-20 px-3 py-2 text-start font-medium">{t('table.date')}</th>
            <th className="px-3 py-2 text-start font-medium">{t('table.account')}</th>
            <th className="w-28 px-3 py-2 text-end font-medium text-debit">{t('table.debit')}</th>
            <th className="w-28 px-3 py-2 text-end font-medium text-credit">{t('table.credit')}</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((e, i) => (
            <JournalRows key={i} entry={e} last={i === entries.length - 1} />
          ))}
        </tbody>
      </TableShell>
    </div>
  )
}

function JournalRows({ entry, last }: { entry: JournalEntry; last: boolean }) {
  const { tr, money } = useI18n()
  return (
      <>
        {entry.lines.map((line, j) => {
          const isCredit = !line.debit && Boolean(line.credit)
          return (
            <tr key={j} className="align-top">
              <td className="px-3 py-1.5 text-xs whitespace-nowrap text-muted-foreground">{j === 0 ? tr(entry.date) : ''}</td>
              <td className={cn('px-3 py-1.5', isCredit && 'ps-10 text-muted-foreground')}>{tr(line.account)}</td>
              <td className="tabular px-3 py-1.5 text-end">{line.debit ? money(line.debit) : ''}</td>
              <td className="tabular px-3 py-1.5 text-end">{line.credit ? money(line.credit) : ''}</td>
            </tr>
          )
        })}
        {entry.memo && (
          <tr>
            <td />
            <td colSpan={3} className="px-3 pb-2 text-xs italic text-muted-foreground">
              (<Rich text={entry.memo} />)
            </td>
          </tr>
        )}
        {!last && (
          <tr aria-hidden>
            <td colSpan={4} className="h-px p-0">
              <div className="mx-3 border-t border-dashed" />
            </td>
          </tr>
        )}
      </>
  )
}

/** Transaction analysis on the accounting equation with running totals. */
export function AnalysisTable({ title, rows }: { title?: L; rows: AnalysisRow[] }) {
  const { t, tr, money, lang } = useI18n()
  const a = rows.reduce((s, r) => s + (r.assets ?? 0), 0)
  const l = rows.reduce((s, r) => s + (r.liabilities ?? 0), 0)
  const e = rows.reduce((s, r) => s + (r.equity ?? 0), 0)
  const cell = (v: number | undefined, tone: string) =>
    v ? <span className={cn('tabular font-medium', tone)}>{formatSigned(v, lang)}</span> : <span />
  return (
    <div className="my-6">
      <Caption>
        <span>{title ? tr(title) : t('lab.equation')}</span>
        <Units />
      </Caption>
      <TableShell>
        <thead>
          <tr className="border-b bg-muted/60 text-xs text-muted-foreground">
            <th className="px-3 py-2 text-start font-medium">{t('table.transaction')}</th>
            <th className="px-3 py-2 text-end font-medium text-asset">{t('table.assets')}</th>
            <th className="w-6 px-0 py-2 text-center">=</th>
            <th className="px-3 py-2 text-end font-medium text-liability">{t('table.liabilities')}</th>
            <th className="w-6 px-0 py-2 text-center">+</th>
            <th className="px-3 py-2 text-end font-medium text-equity">{t('table.equity')}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            return (
              <tr key={i} className="border-b last:border-b-0 even:bg-muted/25">
                <td className="px-3 py-2">
                  <span className="me-2 tabular text-xs text-muted-foreground">{i + 1}.</span>
                  <Rich text={r.tx} />
                </td>
                <td className="px-3 py-2 text-end">{cell(r.assets, 'text-asset')}</td>
                <td />
                <td className="px-3 py-2 text-end">{cell(r.liabilities, 'text-liability')}</td>
                <td />
                <td className="px-3 py-2 text-end">{cell(r.equity, 'text-equity')}</td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr className="border-t border-foreground/20 bg-muted/50 font-semibold">
            <td className="px-3 py-2">{t('table.total')}</td>
            <td className="tabular px-3 py-2 text-end text-asset">{money(a)}</td>
            <td className="text-center">=</td>
            <td className="tabular px-3 py-2 text-end text-liability">{money(l)}</td>
            <td className="text-center">+</td>
            <td className="tabular px-3 py-2 text-end text-equity">{money(e)}</td>
          </tr>
        </tfoot>
      </TableShell>
    </div>
  )
}

/** T-accounts in a responsive grid. Debit is the reading-start side (right in Persian). */
export function TAccounts({ title, accounts }: { title?: L; accounts: TAccountData[] }) {
  const { t, tr } = useI18n()
  return (
    <div className="my-6">
      {title && (
        <Caption>
          <span>{tr(title)}</span>
          <Units />
        </Caption>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {accounts.map((acc, i) => (
          <TAccount key={i} name={tr(acc.name)} debits={acc.debits} credits={acc.credits} labels={{ debit: t('table.debit'), credit: t('table.credit'), balance: t('table.balance') }} />
        ))}
      </div>
    </div>
  )
}

export function TAccount({
  name,
  debits,
  credits,
  labels,
  highlight,
  className,
}: {
  name: string
  debits: number[]
  credits: number[]
  labels: { debit: string; credit: string; balance: string }
  highlight?: boolean
  className?: string
}) {
  const { money } = useI18n()
  const td = debits.reduce((s, v) => s + v, 0)
  const tc = credits.reduce((s, v) => s + v, 0)
  const bal = td - tc
  const rows = Math.max(debits.length, credits.length, 1)
  return (
    <div className={cn('rounded-lg border bg-card p-3 transition-colors duration-500', highlight && 'bg-gold/[0.08]', className)}>
      <div className="border-b border-foreground/40 pb-1.5 text-center text-sm font-semibold">{name}</div>
      <div className="grid grid-cols-2 text-xs">
        <div className="border-e border-foreground/40 pe-2 pt-1">
          <div className="mb-1 text-[10px] font-medium text-debit">{labels.debit}</div>
          {Array.from({ length: rows }, (_, i) => (
            <div key={i} className="tabular h-5 text-end">{debits[i] !== undefined ? money(debits[i]) : ''}</div>
          ))}
        </div>
        <div className="ps-2 pt-1">
          <div className="mb-1 text-end text-[10px] font-medium text-credit">{labels.credit}</div>
          {Array.from({ length: rows }, (_, i) => (
            <div key={i} className="tabular h-5 text-end">{credits[i] !== undefined ? money(credits[i]) : ''}</div>
          ))}
        </div>
      </div>
      <div className="mt-1 grid grid-cols-2 border-t pt-1 text-xs">
        <div className="tabular pe-2 text-end text-muted-foreground">{money(td)}</div>
        <div className="tabular ps-2 text-end text-muted-foreground">{money(tc)}</div>
      </div>
      <div className="mt-1 grid grid-cols-2 text-xs font-semibold">
        <div className={cn('tabular pe-2 text-end', bal > 0 ? 'text-debit' : 'opacity-0')}>
          {bal > 0 && (
            <>
              <span className="me-1 text-[10px] font-normal text-muted-foreground">{labels.balance}</span>
              {money(bal)}
            </>
          )}
        </div>
        <div className={cn('tabular ps-2 text-end', bal < 0 ? 'text-credit' : 'opacity-0')}>
          {bal < 0 && (
            <>
              <span className="me-1 text-[10px] font-normal text-muted-foreground">{labels.balance}</span>
              {money(-bal)}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

/** Generic data table from content. Numbers are formatted; numericCols are end-aligned. */
export function DataTable({ caption, head, rows, numericCols }: { caption?: L; head: L[]; rows: (L | number)[][]; numericCols?: number[] }) {
  const { tr, num } = useI18n()
  const isNumCol = (i: number) => numericCols?.includes(i) ?? false
  const fmt = (v: L | number) => {
    if (typeof v === 'number') return num(v, Number.isInteger(v) ? 0 : 2)
    return <Rich text={v} />
  }
  const isTotalRow = (r: (L | number)[]) => {
    const first = r[0]
    if (typeof first === 'number') return false
    return /^(\*\*)?(total|جمع|net|خالص)/i.test(first.en) || /^(\*\*)?(جمع)/.test(first.fa)
  }
  return (
    <div className="my-6">
      {caption && (
        <Caption>
          <span>{tr(caption)}</span>
        </Caption>
      )}
      <TableShell>
        <thead>
          <tr className="border-b bg-muted/60 text-xs text-muted-foreground">
            {head.map((h, i) => (
              <th key={i} className={cn('px-3 py-2 font-medium', isNumCol(i) || (rows[0] && typeof rows[0][i] === 'number') ? 'text-end' : 'text-start')}>
                {tr(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={cn('border-b last:border-b-0', isTotalRow(r) ? 'border-t border-t-foreground/20 bg-muted/40 font-semibold' : 'even:bg-muted/20')}>
              {r.map((c, j) => (
                <td key={j} className={cn('px-3 py-2', typeof c === 'number' || isNumCol(j) ? 'tabular text-end' : 'text-start')}>
                  {fmt(c)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </TableShell>
    </div>
  )
}
