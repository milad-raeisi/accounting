/**
 * Content schema for the bilingual accounting course.
 *
 * Every human-readable string is an `L` = { fa, en }.
 *  - Persian text uses proper ZWNJ (نیم‌فاصله), e.g. «دارایی‌ها», «می‌شود».
 *  - Digits may be written as ASCII (0-9) in both languages, the renderer converts
 *    them to Persian digits automatically in fa mode.
 *  - Inline markup supported inside text: **bold**  and  `code`.
 *  - Money amounts are plain numbers (no currency sign). The UI shows the unit
 *    ($ in English, «هزار تومان» in Persian) in table headers.
 */

export type L = { fa: string; en: string }

export type Level = 'beginner' | 'intermediate' | 'advanced'

/** Semantic colour of a lesson card / account group. */
export type Tone = 'asset' | 'liability' | 'equity' | 'revenue' | 'expense' | 'primary' | 'gold'

/** Icon names the UI knows how to render (lucide-react). */
export type IconName =
  | 'BookOpen'
  | 'Scale'
  | 'FolderTree'
  | 'ArrowLeftRight'
  | 'NotebookPen'
  | 'Library'
  | 'ListChecks'
  | 'CalendarClock'
  | 'FileSpreadsheet'
  | 'RefreshCcw'
  | 'Boxes'
  | 'TrendingUp'
  | 'FileCheck'
  | 'Landmark'
  | 'ReceiptText'
  | 'Building2'
  | 'Percent'
  | 'Users'

/**
 * Animated / interactive figures implemented in src/components/diagrams.
 * Place them with a `{ type: 'diagram', id }` block.
 */
export type DiagramId =
  | 'info-flow' //            business events → record → classify → summarize → reports → users
  | 'branches' //             radial map of accounting branches (financial, managerial, cost, tax, audit, public-sector, forensic, AIS)
  | 'equation' //             animated bars: Assets = Liabilities + Equity, auto-balancing through sample transactions
  | 'equation-3d' //          Three.js balance scale; learner applies transactions and watches it re-balance
  | 'expanded-equation' //    A = L + Capital − Drawings + Revenue − Expenses, with arrows to the temporary accounts
  | 'account-types' //        tree: 5 account types → sub-groups → example accounts
  | 'debit-credit-rules' //   grid: for each account type which side (Dr/Cr) increases/decreases + normal balance
  | 't-account' //            animated T-account (Cash) receiving debits/credits and computing its balance
  | 'journal-to-ledger' //    animated posting: lines fly from a journal entry into the matching T-accounts
  | 'trial-balance' //        ledger balances stacking into Dr/Cr columns whose totals match
  | 'cash-vs-accrual' //      timeline: when revenue/expense is recognised under cash vs accrual basis
  | 'adjusting-types' //      4 quadrants: prepaid expense, unearned revenue, accrued expense, accrued revenue
  | 'depreciation' //         line chart: book value over time, straight-line vs double-declining balance
  | 'statements-flow' //      how Income Statement → Changes in Equity → Balance Sheet (+ Cash Flow) link
  | 'cash-flow-categories' // operating / investing / financing with example inflows & outflows
  | 'closing-entries' //      revenue & expense → Income Summary → Retained earnings / Capital; drawings closed
  | 'accounting-cycle' //     circular 10-step accounting cycle, animated step by step
  | 'cycle-3d' //             Three.js orbit of the cycle steps
  | 'inventory-fifo' //       cost layers consumed under FIFO vs weighted average
  | 'ratios' //               liquidity / profitability / leverage / efficiency ratio gauges for a sample company
  | 'erp-modules' //          ERP module map (Finance, Inventory, Procurement, Asset Management, Projects, HR) + integration
  | 'p2p-flow' //             procure-to-pay documents with the Finance postings at each step
  | 'grn-ses' //              receipt paths: goods via GRN and services via SES, with documents and postings
  | 'warehouse-flow' //       receipt → inspection → put-away → storage → reservation → issue
  | 'asset-lifecycle' //      plan → acquire → capitalise → operate & maintain → dispose, with ERP module per stage
  | 'work-order-flow' //      maintenance work order lifecycle and cost settlement
  | 'wbs-tree' //             WBS hierarchy with cost codes, budget and actuals per node
  | 'budget-control' //       budget vs commitments vs actuals with availability control
  | 'afe-lifecycle' //        AFE: prepare → approve (internal, partners, government) → commit → track → supplement → close
  | 'je-workflow' //          journal entry: prepare → attach → validate → approve → post → review → reverse
  | 'cost-recovery' //        production → royalty → cost oil (capped) → profit oil split; carry-forward

export type JournalLine = { account: L; debit?: number; credit?: number }
export type JournalEntry = { date?: L; lines: JournalLine[]; memo?: L }

/** One row of a transaction-analysis table (accounting equation effects). */
export type AnalysisRow = {
  tx: L
  /** signed change, e.g. +5000 / -1200. Omit if unaffected. */
  assets?: number
  liabilities?: number
  equity?: number
}

export type TAccountData = { name: L; debits: number[]; credits: number[] }

/** Every block except `exercise` (an exercise's solution is built from these). */
export type BaseBlock =
  | { type: 'p'; text: L }
  | { type: 'h'; text: L } // sub-heading inside a section
  | { type: 'list'; items: L[]; ordered?: boolean }
  | { type: 'callout'; tone: 'info' | 'tip' | 'warning' | 'example'; title?: L; text: L }
  | { type: 'formula'; text: L; note?: L }
  | { type: 'diagram'; id: DiagramId; caption?: L }
  | { type: 'journal'; title?: L; entries: JournalEntry[] }
  | { type: 'analysis'; title?: L; rows: AnalysisRow[] } // running totals computed by UI
  | { type: 'tAccounts'; title?: L; accounts: TAccountData[] } // balances computed by UI
  | { type: 'table'; caption?: L; head: L[]; rows: (L | number)[][]; numericCols?: number[] }
  | { type: 'steps'; items: { title: L; text: L }[] }
  | { type: 'compare'; left: { title: L; items: L[] }; right: { title: L; items: L[] } }
  | { type: 'keyTerms'; terms: { term: L; def: L }[] }

/**
 * A practice problem with a worked solution (hidden until the learner asks for it).
 * `solution` is any sequence of ordinary blocks: steps, journal, tables, callouts…
 */
export type ExerciseBlock = {
  type: 'exercise'
  title?: L
  difficulty?: 'easy' | 'medium' | 'hard'
  problem: L
  /** optional data the learner needs, shown as a table under the problem */
  given?: { head: L[]; rows: (L | number)[][]; numericCols?: number[] }
  hint?: L
  solution: BaseBlock[]
  /** one-line final answer shown at the end of the solution */
  answer?: L
}

export type Block = BaseBlock | ExerciseBlock

export type Section = { id: string; title: L; blocks: Block[] }

export type Question = {
  q: L
  options: L[] // 3–4 options
  answer: number // index into options
  explain: L
}

/** Unit shown above journals and tables. Defaults to the course's currency. */
export type Currency = 'toman' | 'usd' | 'omr'

export type Lesson = {
  slug: string
  number: number
  /** overrides the course currency, e.g. 'omr' for the Oman tax lessons */
  currency?: Currency
  level: Level
  minutes: number
  icon: IconName
  tone: Tone
  title: L
  summary: L // one or two sentences
  objectives: L[] // 3–5 learning objectives
  sections: Section[]
  quiz: Question[] // 5–6 questions
}

export type GlossaryCategory =
  | 'basics'
  | 'accounts'
  | 'recording'
  | 'statements'
  | 'adjusting'
  | 'inventory'
  | 'cash' // cash, bank, receivables, cheques
  | 'fixedAssets'
  | 'liabilities' // payroll, taxes, loans, provisions
  | 'equity' // company equity, reserves, dividends
  | 'tax' // corporate tax, VAT, e-invoicing
  | 'oilgas' // upstream accounting, joint operations, cost recovery
  | 'warehouse'
  | 'maintenance' // asset management and maintenance (EAM)
  | 'procurement'
  | 'budget' // budgets, WBS, cost codes, AFE, project control
  | 'analysis'

export type GlossaryTerm = {
  id: string // kebab-case
  category: GlossaryCategory
  term: L
  def: L
  /** optional short formula or example, e.g. "Current ratio = Current assets ÷ Current liabilities" */
  formula?: L
  related?: string[] // other term ids
}
