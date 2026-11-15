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
    <span className={cn('grid size-10 shrink-0 place-items-center rounded-lg bg-muted', toneText[tone], className)}>
      <Icon className="size-5" />
    </span>
  )
}
