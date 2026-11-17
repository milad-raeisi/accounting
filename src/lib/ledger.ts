/**
 * A tiny double-entry engine used by the Ledger Lab and the diagrams.
 * Amounts are plain numbers; every transaction must balance (Σ debit = Σ credit).
 */
import type { L } from '@/content/types'

export type AccountType = 'asset' | 'liability' | 'equity' | 'revenue' | 'expense'
export type Side = 'debit' | 'credit'

export type AccountDef = {
  id: string
  code: string
  type: AccountType
  name: L
  /** contra account (e.g. accumulated depreciation): normal balance is flipped */
  contra?: boolean
  /** owner drawings: an equity account with a debit normal balance */
  drawings?: boolean
  /** current (true) vs non-current (false). Only meaningful for assets & liabilities. */
  current?: boolean
  /** income summary & similar clearing accounts */
  clearing?: boolean
}

export type TxLine = { account: string; debit?: number; credit?: number }
export type TxKind = 'regular' | 'adjusting' | 'closing'
export type Tx = { id: string; day: number; title: L; lines: TxLine[]; kind?: TxKind }

export const typeOrder: AccountType[] = ['asset', 'liability', 'equity', 'revenue', 'expense']

export function normalSide(a: AccountDef): Side {
  const base: Side = a.type === 'asset' || a.type === 'expense' ? 'debit' : 'credit'
  if (a.contra || a.drawings) return base === 'debit' ? 'credit' : 'debit'
  return base
}

export function txTotals(tx: Pick<Tx, 'lines'>) {
  let debit = 0
  let credit = 0
  for (const l of tx.lines) {
    debit += l.debit ?? 0
    credit += l.credit ?? 0
  }
  return { debit, credit }
}

export function isBalanced(tx: Pick<Tx, 'lines'>) {
  const { debit, credit } = txTotals(tx)
  return debit > 0 && Math.abs(debit - credit) < 1e-9
}

export type Posting = { txId: string; day: number; amount: number }

export type AccountBalance = {
  account: AccountDef
  debits: Posting[]
  credits: Posting[]
  totalDebit: number
  totalCredit: number
  /** debit − credit */
  net: number
  /** balance expressed on the account's normal side (negative = abnormal) */
  balance: number
}

export function computeBalances(accounts: AccountDef[], txs: Tx[]): Map<string, AccountBalance> {
  const map = new Map<string, AccountBalance>()
  for (const a of accounts) {
    map.set(a.id, { account: a, debits: [], credits: [], totalDebit: 0, totalCredit: 0, net: 0, balance: 0 })
  }
  for (const tx of txs) {
    for (const line of tx.lines) {
      const b = map.get(line.account)
      if (!b) continue
      if (line.debit) {
        b.debits.push({ txId: tx.id, day: tx.day, amount: line.debit })
        b.totalDebit += line.debit
      }
      if (line.credit) {
        b.credits.push({ txId: tx.id, day: tx.day, amount: line.credit })
        b.totalCredit += line.credit
      }
    }
  }
  for (const b of map.values()) {
    b.net = b.totalDebit - b.totalCredit
    b.balance = normalSide(b.account) === 'debit' ? b.net : -b.net
  }
  return map
}

export type TBRow = { account: AccountDef; debit: number; credit: number }

export function trialBalance(balances: Map<string, AccountBalance>) {
  const rows: TBRow[] = []
  let totalDebit = 0
  let totalCredit = 0
  for (const b of [...balances.values()].sort((x, y) => x.account.code.localeCompare(y.account.code))) {
    if (b.net === 0 && b.totalDebit === 0) continue
    const debit = b.net > 0 ? b.net : 0
    const credit = b.net < 0 ? -b.net : 0
    if (debit === 0 && credit === 0) continue
    rows.push({ account: b.account, debit, credit })
    totalDebit += debit
    totalCredit += credit
  }
  return { rows, totalDebit, totalCredit, balanced: Math.abs(totalDebit - totalCredit) < 1e-9 }
}

export type AmountRow = { account: AccountDef; amount: number }

export function incomeStatement(balances: Map<string, AccountBalance>) {
  const revenues: AmountRow[] = []
  const expenses: AmountRow[] = []
  for (const b of balances.values()) {
    if (b.account.type === 'revenue' && b.balance !== 0) revenues.push({ account: b.account, amount: b.balance })
    if (b.account.type === 'expense' && b.balance !== 0) expenses.push({ account: b.account, amount: b.balance })
  }
  const byCode = (a: AmountRow, z: AmountRow) => a.account.code.localeCompare(z.account.code)
  revenues.sort(byCode)
  expenses.sort((a, z) => z.amount - a.amount)
  const totalRevenue = revenues.reduce((s, r) => s + r.amount, 0)
  const totalExpense = expenses.reduce((s, r) => s + r.amount, 0)
  return { revenues, expenses, totalRevenue, totalExpense, netIncome: totalRevenue - totalExpense }
}

export function equation(balances: Map<string, AccountBalance>) {
  let assets = 0
  let liabilities = 0
  let capital = 0
  let drawings = 0
  let revenue = 0
  let expenses = 0
  for (const b of balances.values()) {
    const a = b.account
    if (a.type === 'asset') assets += b.net
    else if (a.type === 'liability') liabilities += -b.net
    else if (a.type === 'equity') {
      if (a.drawings) drawings += b.net
      else capital += -b.net
    } else if (a.type === 'revenue') revenue += -b.net
    else if (a.type === 'expense') expenses += b.net
  }
  const equity = capital - drawings + revenue - expenses
  return { assets, liabilities, equity, capital, drawings, revenue, expenses, balanced: Math.abs(assets - liabilities - equity) < 1e-9 }
}

export function balanceSheet(balances: Map<string, AccountBalance>) {
  const pick = (type: AccountType, current: boolean) =>
    [...balances.values()]
      .filter((b) => b.account.type === type && Boolean(b.account.current) === current && b.net !== 0)
      .sort((x, y) => x.account.code.localeCompare(y.account.code))
      .map((b) => ({ account: b.account, amount: type === 'asset' ? b.net : -b.net }))

  const currentAssets = pick('asset', true)
  const nonCurrentAssets = pick('asset', false)
  const currentLiabilities = pick('liability', true)
  const nonCurrentLiabilities = pick('liability', false)
  const sum = (rows: AmountRow[]) => rows.reduce((s, r) => s + r.amount, 0)
  const eq = equation(balances)
  const totalCurrentAssets = sum(currentAssets)
  const totalAssets = totalCurrentAssets + sum(nonCurrentAssets)
  const totalCurrentLiabilities = sum(currentLiabilities)
  const totalLiabilities = totalCurrentLiabilities + sum(nonCurrentLiabilities)
  return {
    currentAssets,
    nonCurrentAssets,
    currentLiabilities,
    nonCurrentLiabilities,
    totalCurrentAssets,
    totalAssets,
    totalCurrentLiabilities,
    totalLiabilities,
    equity: {
      capital: eq.capital,
      netIncome: eq.revenue - eq.expenses,
      drawings: eq.drawings,
      total: eq.equity,
    },
    totalLE: totalLiabilities + eq.equity,
  }
}

/** Build the closing entries for a set of balances (Income Summary method). */
/** Moves `amount` to `side`; a negative amount (an abnormal balance) is posted to the other side instead. */
function post(account: string, side: Side, amount: number): TxLine {
  const s: Side = amount >= 0 ? side : side === 'debit' ? 'credit' : 'debit'
  return s === 'debit' ? { account, debit: Math.abs(amount) } : { account, credit: Math.abs(amount) }
}

export function closingEntries(
  balances: Map<string, AccountBalance>,
  ids: { incomeSummary: string; capital: string },
  day = 31,
): Tx[] {
  const is = incomeStatement(balances)
  const out: Tx[] = []
  if (is.totalRevenue)
    out.push({
      id: 'close-rev',
      day,
      kind: 'closing',
      title: { fa: 'بستن حساب‌های درآمد', en: 'Close revenue accounts' },
      lines: [...is.revenues.map((r) => post(r.account.id, 'debit', r.amount)), post(ids.incomeSummary, 'credit', is.totalRevenue)],
    })
  if (is.totalExpense)
    out.push({
      id: 'close-exp',
      day,
      kind: 'closing',
      title: { fa: 'بستن حساب‌های هزینه', en: 'Close expense accounts' },
      lines: [post(ids.incomeSummary, 'debit', is.totalExpense), ...is.expenses.map((r) => post(r.account.id, 'credit', r.amount))],
    })
  if (is.netIncome)
    out.push({
      id: 'close-is',
      day,
      kind: 'closing',
      title: { fa: 'بستن خلاصه سود و زیان به سرمایه', en: 'Close Income Summary to Capital' },
      lines:
        is.netIncome > 0
          ? [
              { account: ids.incomeSummary, debit: is.netIncome },
              { account: ids.capital, credit: is.netIncome },
            ]
          : [
              { account: ids.capital, debit: -is.netIncome },
              { account: ids.incomeSummary, credit: -is.netIncome },
            ],
    })
  const drawings = [...balances.values()].filter((b) => b.account.drawings && b.net > 0)
  for (const d of drawings)
    out.push({
      id: `close-${d.account.id}`,
      day,
      kind: 'closing',
      title: { fa: 'بستن حساب برداشت', en: 'Close drawings' },
      lines: [
        { account: ids.capital, debit: d.net },
        { account: d.account.id, credit: d.net },
      ],
    })
  return out
}
