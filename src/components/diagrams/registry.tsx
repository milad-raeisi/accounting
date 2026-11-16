import { lazy, Suspense, type ComponentType, type LazyExoticComponent } from 'react'

import { ErrorBoundary } from '@/components/ui/ErrorBoundary'
import type { DiagramId, L } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'
import type { DiagramProps } from './DiagramFrame'

type Lazy = LazyExoticComponent<ComponentType<DiagramProps>>

/** id → lazily-loaded diagram. Each diagram is its own chunk (Three.js ones pull in the 3D bundle). */
export const diagrams: Record<DiagramId, Lazy> = {
  'info-flow': lazy(() => import('./InfoFlow')),
  branches: lazy(() => import('./Branches')),
  equation: lazy(() => import('./EquationBars')),
  'equation-3d': lazy(() => import('./EquationScale3D')),
  'expanded-equation': lazy(() => import('./ExpandedEquation')),
  'account-types': lazy(() => import('./AccountTypes')),
  'debit-credit-rules': lazy(() => import('./DebitCreditRules')),
  't-account': lazy(() => import('./TAccountDemo')),
  'journal-to-ledger': lazy(() => import('./JournalToLedger')),
  'trial-balance': lazy(() => import('./TrialBalanceDiagram')),
  'cash-vs-accrual': lazy(() => import('./CashVsAccrual')),
  'adjusting-types': lazy(() => import('./AdjustingTypes')),
  depreciation: lazy(() => import('./DepreciationChart')),
  'statements-flow': lazy(() => import('./StatementsFlow')),
  'cash-flow-categories': lazy(() => import('./CashFlowCategories')),
  'closing-entries': lazy(() => import('./ClosingEntries')),
  'accounting-cycle': lazy(() => import('./AccountingCycle')),
  'cycle-3d': lazy(() => import('./Cycle3D')),
  'inventory-fifo': lazy(() => import('./InventoryLayers')),
  ratios: lazy(() => import('./RatioGauges')),
  'erp-modules': lazy(() => import('./ErpModules')),
  'cost-recovery': lazy(() => import('./CostRecovery')),
  'p2p-flow': lazy(() => import('./processFlows').then((m) => ({ default: m.P2PFlow }))),
  'warehouse-flow': lazy(() => import('./processFlows').then((m) => ({ default: m.WarehouseFlow }))),
  'asset-lifecycle': lazy(() => import('./processFlows').then((m) => ({ default: m.AssetLifecycle }))),
  'work-order-flow': lazy(() => import('./processFlows').then((m) => ({ default: m.WorkOrderFlow }))),
  'grn-ses': lazy(() => import('./processFlows').then((m) => ({ default: m.GrnSesFlow }))),
  'afe-lifecycle': lazy(() => import('./processFlows').then((m) => ({ default: m.AfeLifecycle }))),
  'je-workflow': lazy(() => import('./processFlows').then((m) => ({ default: m.JournalWorkflow }))),
  'wbs-tree': lazy(() => import('./WbsTree')),
  'budget-control': lazy(() => import('./BudgetControl')),
}

export const diagramIds = Object.keys(diagrams) as DiagramId[]

function Skeleton() {
  return (
    <div className="my-8 overflow-hidden rounded-lg bg-card">
      <div className="h-14 bg-muted/40" />
      <div className="h-72 animate-pulse bg-gradient-to-br from-muted/60 via-muted/20 to-muted/60" />
    </div>
  )
}

function DiagramError({ reset }: { reset: () => void }) {
  const { tr } = useI18n()
  return (
    <div className="my-8 flex items-center justify-between gap-4 rounded-2xl border border-dashed p-5 text-sm text-muted-foreground">
      {tr({ fa: 'نمایش این شکل با خطا روبه‌رو شد.', en: 'This figure failed to render.' })}
      <button type="button" onClick={reset} className="rounded-lg border px-3 py-1.5 text-xs font-medium hover:bg-muted">
        {tr({ fa: 'تلاش دوباره', en: 'Retry' })}
      </button>
    </div>
  )
}

export function Diagram({ id, caption }: { id: DiagramId; caption?: L }) {
  const { lang } = useI18n()
  const Comp = diagrams[id]
  if (!Comp) return null
  return (
    <ErrorBoundary resetKey={lang} fallback={(_, reset) => <DiagramError reset={reset} />}>
      <Suspense fallback={<Skeleton />}>
        <Comp caption={caption} />
      </Suspense>
    </ErrorBoundary>
  )
}
