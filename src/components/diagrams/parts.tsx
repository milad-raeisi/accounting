/**
 * Small presentational pieces shared by the step-through diagrams.
 * Components only (keeps React Fast Refresh happy).
 */
import type { ReactNode } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw } from 'lucide-react'

import { useI18n } from '@/i18n/I18nProvider'
import { cn } from '@/lib/utils'

type StepControlsProps = {
  /** current step, 0 = initial state */
  step: number
  /** last step index */
  total: number
  playing: boolean
  onPrev: () => void
  onNext: () => void
  /** play / pause (and restart when finished) */
  onToggle: () => void
  className?: string
}

/** Prev · Play/Pause · Next buttons with a progress strip (same look as EquationBars). */
export function StepControls({ step, total, playing, onPrev, onNext, onToggle, className }: StepControlsProps) {
  const { t, digits } = useI18n()
  const done = step >= total
  return (
    <div data-anim="ctrl" className={cn('mt-4', className)}>
      <div className="flex items-center justify-center gap-2">
        <button
          type="button"
          aria-label={t('diagram.prev')}
          disabled={step <= 0}
          onClick={onPrev}
          className="grid size-9 place-items-center rounded-lg border bg-background transition hover:bg-muted active:scale-95 disabled:pointer-events-none disabled:opacity-40"
        >
          <ChevronLeft className="size-4 rtl:rotate-180" />
        </button>
        <button
          type="button"
          onClick={onToggle}
          className="inline-flex h-9 min-w-24 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90 active:scale-95"
        >
          {playing ? (
            <Pause className="size-4" />
          ) : done ? (
            <RotateCcw className="size-4" />
          ) : (
            <Play className="size-4 rtl:rotate-180" />
          )}
          {playing ? t('diagram.pause') : done ? t('diagram.reset') : t('diagram.play')}
        </button>
        <button
          type="button"
          aria-label={t('diagram.next')}
          disabled={done}
          onClick={onNext}
          className="grid size-9 place-items-center rounded-lg border bg-background transition hover:bg-muted active:scale-95 disabled:pointer-events-none disabled:opacity-40"
        >
          <ChevronRight className="size-4 rtl:rotate-180" />
        </button>
      </div>
      <div className="mt-3 flex justify-center gap-1.5" aria-hidden>
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={cn('h-1.5 rounded-full transition-all duration-500', i < step ? 'w-5 bg-primary' : 'w-1.5 bg-border')}
          />
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {`${t('diagram.step')} ${digits(String(step))} / ${digits(String(total))}`}
      </p>
    </div>
  )
}

/** Small "▲ Increase / ▼ Decrease" style pill. */
export function DeltaPill({ up, children, className }: { up: boolean; children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-semibold leading-5',
        up ? 'bg-primary/12 text-primary' : 'bg-destructive/10 text-destructive',
        className,
      )}
    >
      <span aria-hidden className="text-[9px]">
        {up ? '▲' : '▼'}
      </span>
      {children}
    </span>
  )
}
