import { AlertTriangle, BookMarked, CheckCircle2, Info, Lightbulb, PencilLine } from 'lucide-react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/animate-ui/components/radix/accordion'
import { Diagram } from '@/components/diagrams/registry'
import { Rich } from '@/components/ui/Rich'
import type { Block, ExerciseBlock } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'
import { cn } from '@/lib/utils'
import { AnalysisTable, DataTable, JournalTable, TAccounts } from './tables'

/** Practice problem: statement, optional data and hint; the worked solution opens on demand. */
function ExerciseCard({ block }: { block: ExerciseBlock }) {
  const { t, tr } = useI18n()
  return (
    <section className="my-8 rounded-lg bg-card p-6 sm:p-7">
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="icon-badge grid size-8 place-items-center">
          <PencilLine className="size-4" strokeWidth={1.6} />
        </span>
        <span className="font-semibold text-foreground">{t('exercise.label')}</span>
        {block.title && <span className="text-sm text-muted-foreground">{tr(block.title)}</span>}
        {block.difficulty && (
          <span className="ms-auto rounded-full bg-muted px-3 py-0.5 text-[11px] font-medium text-muted-foreground">{t(`exercise.${block.difficulty}`)}</span>
        )}
      </div>

      <div className="mt-4 leading-8 text-body">
        <Rich text={block.problem} />
      </div>

      {block.given && <DataTable head={block.given.head} rows={block.given.rows} numericCols={block.given.numericCols} />}

      {block.hint && (
        <details className="group mt-4 rounded-[1.25rem] bg-muted/60 px-4 py-3 text-sm">
          <summary className="flex cursor-pointer list-none items-center gap-2 font-medium text-foreground">
            <Lightbulb className="size-4 text-gold" /> {t('exercise.hint')}
          </summary>
          <div className="mt-2 leading-7 text-body">
            <Rich text={block.hint} />
          </div>
        </details>
      )}

      <Accordion type="single" collapsible className="mt-5">
        <AccordionItem value="solution" className="border-b-0">
          <AccordionTrigger className="w-fit flex-none items-center justify-start gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-start text-sm font-semibold text-primary hover:no-underline [&>svg]:text-primary">
            {t('exercise.solution')}
          </AccordionTrigger>
          <AccordionContent className="pb-0">
            <div className="mt-4 rounded-[1.25rem] bg-muted/50 px-4 py-2 sm:px-6">
              {block.solution.map((b, i) => (
                <BlockRenderer key={i} block={b} />
              ))}
              {block.answer && (
                <div className="my-4 flex items-start gap-2 rounded-[1rem] bg-card px-4 py-3 text-sm">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-revenue" />
                  <span>
                    <b className="text-foreground">{t('exercise.answer')}:</b> <Rich text={block.answer} />
                  </span>
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

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
        <p className="my-4 text-[1.04rem] leading-8 text-body">
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
            <li key={i} className="flex gap-3 leading-8 text-body">
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
        <aside className="my-6 rounded-lg bg-card px-6 py-5">
          <div className="mb-1 flex items-center gap-2 text-sm font-semibold">
            <Icon className={cn('size-4 shrink-0', s.iconCls)} />
            {block.title ? tr(block.title) : t(s.key)}
          </div>
          <div className="leading-7 text-body">
            <Rich text={block.text} />
          </div>
        </aside>
      )
    }

    case 'formula':
      return (
        <div className="my-7 rounded-lg bg-card px-6 py-5 text-center">
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
            <div key={k} className="rounded-lg bg-card p-6">
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
          <dl className="divide-y rounded-lg bg-card px-2">
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

    case 'exercise':
      return <ExerciseCard block={block} />

    default:
      return null
  }
}
