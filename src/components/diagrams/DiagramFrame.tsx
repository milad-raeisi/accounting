import { useCallback, useRef, type ReactNode, type RefObject } from 'react'
import { Box, RotateCcw, Sparkles } from 'lucide-react'

import type { L } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'
import { gsap, prefersReducedMotion, ScrollTrigger, useGSAP } from '@/lib/gsap'
import { cn } from '@/lib/utils'

export type DiagramProps = { caption?: L }

type FrameProps = {
  title: L
  caption?: L
  children: ReactNode
  /** Restart the figure's animation */
  onReplay?: () => void
  /** Extra controls rendered in the header (step buttons, tabs…) */
  controls?: ReactNode
  /** Label chip: interactive / 3D */
  badge?: 'interactive' | '3d'
  className?: string
  bodyClassName?: string
}

/** Shared figure shell used by every diagram: header, body, caption, replay. */
export function DiagramFrame({ title, caption, children, onReplay, controls, badge, className, bodyClassName }: FrameProps) {
  const { tr, t } = useI18n()
  return (
    <figure
      className={cn(
        'not-prose group/diagram relative my-8 overflow-hidden rounded-lg bg-card',
        className,
      )}
    >
      <header className="flex flex-wrap items-center gap-3 border-b px-5 py-3 sm:px-7">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
            {badge === '3d' ? <Box className="size-3" /> : <Sparkles className="size-3" />}
            {t('diagram.figure')}
            {badge && <span>· {badge === '3d' ? t('diagram.3d') : t('diagram.interactive')}</span>}
          </div>
          <div className="text-sm font-semibold sm:truncate">{tr(title)}</div>
        </div>
        <div className="flex items-center gap-2">
          {controls}
          {onReplay && (
            <button
              type="button"
              onClick={onReplay}
              className="inline-flex h-8 items-center gap-1.5 rounded-md px-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <RotateCcw className="size-3.5" />
              <span className="hidden sm:inline">{t('diagram.replay')}</span>
            </button>
          )}
        </div>
      </header>
      <div className={cn('relative p-5 sm:p-7', bodyClassName)}>{children}</div>
      {caption && (
        <figcaption className="border-t px-5 py-3.5 text-sm leading-relaxed text-muted-foreground sm:px-7">{tr(caption)}</figcaption>
      )}
    </figure>
  )
}

/**
 * Build a GSAP timeline that plays once when the figure scrolls into view.
 * Rebuilt whenever `deps` change (always include `lang` so RTL/LTR layouts are re-measured).
 * Returns a `replay` callback for the frame's Replay button.
 */
export function useInViewTimeline(
  scope: RefObject<HTMLElement | null>,
  build: (tl: gsap.core.Timeline, scopeEl: HTMLElement) => void,
  deps: unknown[] = [],
  opts: { start?: string; repeat?: number; repeatDelay?: number } = {},
) {
  const tlRef = useRef<gsap.core.Timeline | null>(null)
  useGSAP(
    () => {
      const el = scope.current
      if (!el) return
      const tl = gsap.timeline({ paused: true, repeat: opts.repeat ?? 0, repeatDelay: opts.repeatDelay ?? 1.5 })
      build(tl, el)
      tlRef.current = tl
      if (prefersReducedMotion()) {
        tl.progress(1)
        return
      }
      ScrollTrigger.create({ trigger: el, start: opts.start ?? 'top 78%', once: true, onEnter: () => tl.play(0) })
    },
    { scope, dependencies: deps, revertOnUpdate: true },
  )
  const replay = useCallback(() => tlRef.current?.restart(), [])
  return { replay, timeline: tlRef }
}

/** Mirror helper for absolutely-positioned SVG/HTML diagrams in RTL. */
export function useMirror(width: number) {
  const { isFa } = useI18n()
  return useCallback((x: number) => (isFa ? width - x : x), [isFa, width])
}
