import { AlertTriangle, BookMarked, Info, Lightbulb } from 'lucide-react'

import { Diagram } from '@/components/diagrams/registry'
import { Rich } from '@/components/ui/Rich'
import type { Block } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'
import { cn } from '@/lib/utils'
import { AnalysisTable, DataTable, JournalTable, TAccounts } from './tables'

/** Callouts stay quiet: neutral panel, only the small icon carries colour. */
const calloutStyle = {
  info: { icon: Info, iconCls: 'text-asset', key: 'callout.info' },
  tip: { icon: Lightbulb, iconCls: 'text-gold', key: 'callout.tip' },
  warning: { icon: AlertTriangle, iconCls: 'text-liability', key: 'callout.warning' },
  example: { icon: BookMarked, iconCls: 'text-primary', key: 'callout.example' },
} as const

export function BlockRenderer({ block }: { block: Block }) {
  const { t, tr } = useI18n()

  switch (block.type) {
    case 'p':
      return (
        <p className="my-4 text-[1.04rem] leading-8 text-foreground/90">
          <Rich text={block.text} />
        </p>
      )

    case 'h':
      return (
        <h3 className="mt-9 mb-3 text-lg font-bold">
          <Rich text={block.text} />
        </h3>
      )

    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul'
      return (
        <Tag className="my-4 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 leading-8 text-foreground/90">
              {block.ordered ? (
                <span className="w-5 shrink-0 text-end text-sm font-semibold text-muted-foreground tabular">{i + 1}.</span>
              ) : (
                <span className="mt-[0.8rem] size-1.5 shrink-0 rounded-full bg-foreground/40" />
              )}
              <Rich text={item} />
            </li>
          ))}
        </Tag>
      )
    }

    case 'callout': {
      const s = calloutStyle[block.tone]
      const Icon = s.icon
      return (
        <aside className="my-6 rounded-lg bg-muted/60 px-4 py-3.5 sm:px-5">
          <div className="mb-1 flex items-center gap-2 text-sm font-semibold">
            <Icon className={cn('size-4 shrink-0', s.iconCls)} />
            {block.title ? tr(block.title) : t(s.key)}
          </div>
          <div className="leading-7 text-foreground/85">
            <Rich text={block.text} />
          </div>
        </aside>
      )
    }

    case 'formula':
      return (
        <div className="my-7 rounded-lg border bg-card px-5 py-4 text-center">
          <div className="text-lg font-semibold leading-relaxed">
            <Rich text={block.text} />
          </div>
          {block.note && (
            <div className="mt-1.5 text-sm text-muted-foreground">
              <Rich text={block.note} />
            </div>
          )}
        </div>
      )

    case 'diagram':
      return <Diagram id={block.id} caption={block.caption} />

    case 'journal':
      return <JournalTable title={block.title} entries={block.entries} />

    case 'analysis':
      return <AnalysisTable title={block.title} rows={block.rows} />

    case 'tAccounts':
      return <TAccounts title={block.title} accounts={block.accounts} />

    case 'table':
      return <DataTable caption={block.caption} head={block.head} rows={block.rows} numericCols={block.numericCols} />

    case 'steps':
      return (
        <ol className="relative my-6 space-y-5">
          <span className="absolute inset-y-3 start-[0.8rem] w-px bg-border" aria-hidden />
          {block.items.map((s, i) => (
            <li key={i} className="relative flex gap-4">
              <span className="relative z-10 grid size-[1.65rem] shrink-0 place-items-center rounded-full bg-muted text-xs font-semibold tabular">
                {i + 1}
              </span>
              <div className="pt-0.5">
                <div className="font-semibold">
                  <Rich text={s.title} />
                </div>
                <div className="mt-1 leading-7 text-foreground/85">
                  <Rich text={s.text} />
                </div>
              </div>
            </li>
          ))}
        </ol>
      )

    case 'compare':
      return (
        <div className="my-6 grid gap-3 sm:grid-cols-2">
          {[block.left, block.right].map((side, k) => (
            <div key={k} className="rounded-lg border bg-card p-4">
              <div className="mb-2.5 font-semibold">
                <Rich text={side.title} />
              </div>
              <ul className="space-y-1.5 text-sm leading-7 text-foreground/85">
                {side.items.map((it, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-[0.7rem] size-1 shrink-0 rounded-full bg-foreground/40" />
                    <Rich text={it} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )

    case 'keyTerms':
      return (
        <div className="my-6">
          <div className="mb-3 text-sm font-semibold text-muted-foreground">{t('keyTerms.title')}</div>
          <dl className="divide-y rounded-lg border bg-card">
            {block.terms.map((k, i) => (
              <div key={i} className="grid gap-1 px-4 py-3 sm:grid-cols-[minmax(0,12rem)_1fr] sm:gap-4">
                <dt className="font-semibold">
                  <Rich text={k.term} />
                </dt>
                <dd className="text-sm leading-7 text-foreground/80">
                  <Rich text={k.def} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )

    default:
      return null
  }
}
