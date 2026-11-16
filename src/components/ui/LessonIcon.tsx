import {
  ArrowLeftRight,
  BookOpen,
  Boxes,
  CalendarClock,
  FileSpreadsheet,
  FolderTree,
  Library,
  ListChecks,
  NotebookPen,
  RefreshCcw,
  Scale,
  TrendingUp,
  FileCheck,
  Landmark,
  ReceiptText,
  Building2,
  Percent,
  Users,
  type LucideIcon,
} from 'lucide-react'

import type { IconName, Tone } from '@/content/types'
import { cn } from '@/lib/utils'

const icons: Record<IconName, LucideIcon> = {
  BookOpen,
  Scale,
  FolderTree,
  ArrowLeftRight,
  NotebookPen,
  Library,
  ListChecks,
  CalendarClock,
  FileSpreadsheet,
  RefreshCcw,
  Boxes,
  TrendingUp,
  FileCheck,
  Landmark,
  ReceiptText,
  Building2,
  Percent,
  Users,
}

/** Static class maps so Tailwind can see every class name. */
export const toneText: Record<Tone, string> = {
  asset: 'text-asset',
  liability: 'text-liability',
  equity: 'text-equity',
  revenue: 'text-revenue',
  expense: 'text-expense',
  primary: 'text-primary',
  gold: 'text-gold',
}
export const toneSoft: Record<Tone, string> = {
  asset: 'bg-asset/12 text-asset',
  liability: 'bg-liability/12 text-liability',
  equity: 'bg-equity/12 text-equity',
  revenue: 'bg-revenue/12 text-revenue',
  expense: 'bg-expense/14 text-expense',
  primary: 'bg-primary/12 text-primary',
  gold: 'bg-gold/18 text-[color-mix(in_oklch,var(--gold)_70%,var(--foreground))]',
}
export const toneBar: Record<Tone, string> = {
  asset: 'bg-asset',
  liability: 'bg-liability',
  equity: 'bg-equity',
  revenue: 'bg-revenue',
  expense: 'bg-expense',
  primary: 'bg-primary',
  gold: 'bg-gold',
}

export function LessonIcon({ name, tone, className }: { name: IconName; tone: Tone; className?: string }) {
  const Icon = icons[name] ?? BookOpen
  return (
    // SBC icon style: line icon (1.6 stroke) inside a circle filled Royal → Azure
    <span data-tone={tone} className={cn('icon-badge grid size-10 shrink-0 place-items-center', className)}>
      <Icon className="size-[1.15rem]" strokeWidth={1.6} />
    </span>
  )
}
