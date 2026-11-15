import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw } from 'lucide-react'

import { useI18n } from '@/i18n/I18nProvider'
import { cn } from '@/lib/utils'

type StepperProps = {
  /** current step, 0 = nothing shown yet */
  step: number
  total: number
  onStep: (next: number) => void
  /** When given, the centre button becomes a Play/Pause toggle. */
  playing?: boolean
  onTogglePlay?: () => void
  /** Label of the centre "next" button (when there is no play toggle). */
  nextLabel?: string
  className?: string
}

const iconBtn =
  'grid size-9 place-items-center rounded-lg border bg-background transition hover:bg-muted active:scale-95 disabled:pointer-events-none disabled:opacity-40'
const primaryBtn =
  'inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-90 active:scale-95'

/** Prev · primary · next buttons with clickable progress dots. Chevrons mirror in RTL. */
export function StepperControls({ step, total, onStep, playing, onTogglePlay, nextLabel, className }: StepperProps) {
  const { t, num } = useI18n()
  const atEnd = step >= total
  return (
    <div className={cn('flex flex-col items-center gap-2', className)}>
      <div className="flex items-center justify-center gap-2">
        <button
          type="button"
          aria-label={t('diagram.prev')}
          disabled={step <= 0}
          onClick={() => onStep(step - 1)}
          className={iconBtn}
        >
          <ChevronLeft className="size-4 rtl:rotate-180" />
        </button>
        {onTogglePlay ? (
          <>
            <button type="button" onClick={onTogglePlay} aria-pressed={playing} className={primaryBtn}>
              {playing ? <Pause className="size-4" /> : <Play className="size-4 rtl:rotate-180" />}
              {playing ? t('diagram.pause') : t('diagram.play')}
            </button>
            <button
              type="button"
              aria-label={t('diagram.next')}
              disabled={atEnd}
              onClick={() => onStep(step + 1)}
              className={iconBtn}
            >
              <ChevronRight className="size-4 rtl:rotate-180" />
            </button>
          </>
        ) : (
          <button type="button" onClick={() => onStep(atEnd ? 0 : step + 1)} className={primaryBtn}>
            {atEnd ? <RotateCcw className="size-4" /> : <ChevronRight className="size-4 rtl:rotate-180" />}
            {atEnd ? t('diagram.reset') : (nextLabel ?? t('diagram.next'))}
          </button>
        )}
      </div>
      <div className="flex items-center" role="group" aria-label={t('diagram.step')}>
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onStep(i + 1)}
            aria-label={`${t('diagram.step')} ${num(i + 1)}`}
            aria-current={i + 1 === step ? 'step' : undefined}
            className="grid h-6 place-items-center px-0.5"
          >
            <span
              className={cn(
                'block h-1.5 rounded-full transition-all duration-500',
                i < step ? 'w-5 bg-primary' : 'w-1.5 bg-border hover:bg-muted-foreground/50',
              )}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
