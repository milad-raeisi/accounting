import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight, LayoutGrid, Layers, RotateCw, Search, Shuffle, ThumbsUp, X } from 'lucide-react'

import { Tabs, TabsList, TabsTrigger } from '@/components/animate-ui/components/radix/tabs'
import { Progress } from '@/components/animate-ui/components/radix/progress'
import { Rich } from '@/components/ui/Rich'
import { glossary } from '@/content/glossary'
import type { GlossaryCategory, GlossaryTerm } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'
import type { UIKey } from '@/i18n/strings'
import { cn } from '@/lib/utils'

type Cat = 'all' | GlossaryCategory
const CATS: Cat[] = ['all', 'basics', 'accounts', 'recording', 'statements', 'adjusting', 'cash', 'inventory', 'fixedAssets', 'liabilities', 'equity', 'tax', 'oilgas', 'warehouse', 'maintenance', 'procurement', 'budget', 'analysis']
const catDot: Record<GlossaryCategory, string> = {
  basics: 'bg-primary',
  accounts: 'bg-asset',
  recording: 'bg-debit',
  statements: 'bg-revenue',
  adjusting: 'bg-expense',
  inventory: 'bg-gold',
  cash: 'bg-debit',
  fixedAssets: 'bg-asset',
  liabilities: 'bg-liability',
  equity: 'bg-equity',
  tax: 'bg-liability',
  oilgas: 'bg-gold',
  warehouse: 'bg-expense',
  maintenance: 'bg-asset',
  procurement: 'bg-revenue',
  budget: 'bg-gold',
  analysis: 'bg-revenue',
}

const normalize = (s: string) =>
  s
    .toLowerCase()
    .replace(/[ي]/g, 'ی')
    .replace(/[ك]/g, 'ک')
    .replace(/‌/g, ' ')
    .replace(/\*\*/g, '')

function TermCard({ term, onRelated, highlight }: { term: GlossaryTerm; onRelated: (id: string) => void; highlight: boolean }) {
  const { t, tr, isFa } = useI18n()
  const other = isFa ? term.term.en : term.term.fa
  return (
    <article
      id={`term-${term.id}`}
     
      className={cn('scroll-mt-28 rounded-lg bg-card p-5 transition-colors duration-500', highlight && 'bg-gold/[0.1]')}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold leading-snug">{tr(term.term)}</h3>
          <div className={cn('mt-0.5 text-sm text-muted-foreground', isFa ? 'font-sans' : 'font-fa')} dir={isFa ? 'ltr' : 'rtl'}>
            {other}
          </div>
        </div>
        <span className={cn('mt-2 size-2 shrink-0 rounded-full', catDot[term.category])} title={t(`glossary.cat.${term.category}` as UIKey)} />
      </div>
      <p className="mt-3 text-sm leading-7 text-foreground/85">
        <Rich text={term.def} />
      </p>
      {term.formula && (
        <div className="mt-3 rounded-lg border bg-muted/50 px-3 py-2 text-sm font-medium" dir="auto">
          <Rich text={term.formula} />
        </div>
      )}
      {term.related?.length ? (
        <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-muted-foreground">{t('glossary.related')}:</span>
          {term.related.map((id) => {
            const r = glossary.find((g) => g.id === id)
            if (!r) return null
            return (
              <button key={id} type="button" onClick={() => onRelated(id)} className="rounded-full border px-2 py-0.5 transition hover:text-primary">
                {tr(r.term)}
              </button>
            )
          })}
        </div>
      ) : null}
    </article>
  )
}

function Flashcards({ terms }: { terms: GlossaryTerm[] }) {
  const { t, tr, num, isFa } = useI18n()
  const [order, setOrder] = useState(() => terms.map((_, i) => i))
  const [pos, setPos] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState<Set<string>>(new Set())

  const go = useCallback(
    (d: number) => {
      setFlipped(false)
      setPos((p) => (p + d + order.length) % Math.max(1, order.length))
    },
    [order.length],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT') return
      if (e.key === ' ') {
        e.preventDefault()
        setFlipped((f) => !f)
      }
      if (e.key === 'ArrowRight') go(isFa ? -1 : 1)
      if (e.key === 'ArrowLeft') go(isFa ? 1 : -1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, isFa])

  if (!terms.length) return <p className="py-16 text-center text-muted-foreground">{t('glossary.none')}</p>
  const term = terms[order[pos] ?? 0]
  const other = isFa ? term.term.en : term.term.fa

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
        <span className="tabular">
          {num(pos + 1)} / {num(terms.length)}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <ThumbsUp className="size-3.5 text-revenue" /> {num(known.size)}
        </span>
      </div>
      <Progress value={((pos + 1) / terms.length) * 100} className="mb-6 h-1.5" />

      <div className="[perspective:1400px]">
        <AnimatePresence mode="wait">
          <motion.button
            key={term.id}
            type="button"
            onClick={() => setFlipped((f) => !f)}
            initial={{ opacity: 0, x: isFa ? -60 : 60, rotateZ: isFa ? -3 : 3 }}
            animate={{ opacity: 1, x: 0, rotateZ: 0 }}
            exit={{ opacity: 0, x: isFa ? 60 : -60, rotateZ: isFa ? 3 : -3 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className="relative block h-[340px] w-full cursor-pointer text-start sm:h-[320px]"
            aria-label={t('glossary.flip')}
          >
            <motion.div
              className="absolute inset-0 [transform-style:preserve-3d]"
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 180, damping: 22 }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg border p-8 text-center [backface-visibility:hidden]">
                <span className={cn('mb-4 size-2.5 rounded-full', catDot[term.category])} />
                <div className="text-3xl font-black leading-snug sm:text-4xl">{tr(term.term)}</div>
                <div className={cn('mt-3 text-lg text-muted-foreground', isFa ? 'font-sans' : 'font-fa')} dir={isFa ? 'ltr' : 'rtl'}>
                  {other}
                </div>
                <div className="mt-8 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <RotateCw className="size-3.5" /> {t('glossary.flip')}
                </div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center overflow-y-auto rounded-lg bg-card p-7 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="mb-2 text-sm font-bold text-primary">{tr(term.term)}</div>
                <p className="leading-8">
                  <Rich text={term.def} />
                </p>
                {term.formula && (
                  <div className="mt-4 rounded-xl border bg-muted/50 px-4 py-2.5 text-sm font-medium" dir="auto">
                    <Rich text={term.formula} />
                  </div>
                )}
              </div>
            </motion.div>
          </motion.button>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        <button type="button" onClick={() => go(-1)} aria-label={t('diagram.prev')} className="grid size-10 place-items-center rounded-xl border bg-background hover:bg-muted">
          <ChevronLeft className="size-4 rtl:rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => {
            setKnown((k) => {
              const n = new Set(k)
              n.delete(term.id)
              return n
            })
            go(1)
          }}
          className="inline-flex h-10 items-center gap-2 rounded-xl border bg-background px-4 text-sm font-medium hover:bg-muted"
        >
          <X className="size-4 text-liability" /> {t('glossary.again')}
        </button>
        <button
          type="button"
          onClick={() => {
            setKnown((k) => new Set(k).add(term.id))
            go(1)
          }}
          className="inline-flex h-10 items-center gap-2 rounded-xl bg-revenue px-4 text-sm font-semibold text-white hover:opacity-90"
        >
          <ThumbsUp className="size-4" /> {t('glossary.known')}
        </button>
        <button
          type="button"
          onClick={() => {
            setOrder((o) => [...o].sort(() => Math.random() - 0.5))
            setPos(0)
            setFlipped(false)
          }}
          className="inline-flex h-10 items-center gap-2 rounded-xl border bg-background px-4 text-sm font-medium hover:bg-muted"
        >
          <Shuffle className="size-4" /> {t('glossary.shuffle')}
        </button>
        <button type="button" onClick={() => go(1)} aria-label={t('diagram.next')} className="grid size-10 place-items-center rounded-xl border bg-background hover:bg-muted">
          <ChevronRight className="size-4 rtl:rotate-180" />
        </button>
      </div>
    </div>
  )
}

export default function GlossaryPage() {
  const { t, tr, num, lang } = useI18n()
  const [q, setQ] = useState('')
  const [cat, setCat] = useState<Cat>('all')
  const [mode, setMode] = useState<'list' | 'cards'>('list')
  const [flash, setFlash] = useState<string | null>(null)
  const root = useRef<HTMLDivElement>(null)

  const terms = useMemo(() => {
    const needle = normalize(q.trim())
    return glossary
      .filter((g) => cat === 'all' || g.category === cat)
      .filter((g) => !needle || [g.term.fa, g.term.en, g.def.fa, g.def.en].some((s) => normalize(s).includes(needle)))
      .sort((a, b) => tr(a.term).localeCompare(tr(b.term), lang === 'fa' ? 'fa' : 'en'))
  }, [q, cat, tr, lang])

  const jump = (id: string) => {
    const target = glossary.find((g) => g.id === id)
    if (target && cat !== 'all' && target.category !== cat) setCat('all')
    setQ('')
    window.setTimeout(() => {
      document.getElementById(`term-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      setFlash(id)
      window.setTimeout(() => setFlash(null), 1600)
    }, 60)
  }

  return (
    <div ref={root} className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">{t('glossary.title')}</h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">{t('glossary.lead')}</p>
      </div>

      <div className="glass sticky top-16 z-20 -mx-4 mt-8 space-y-3 border-b px-4 py-4 sm:-mx-6 sm:px-6">
        <div className="flex flex-wrap items-center gap-3">
          <label className="relative min-w-[220px] flex-1">
            <Search className="pointer-events-none absolute top-1/2 start-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t('glossary.search')}
              className="h-11 w-full rounded-xl border bg-background ps-10 pe-3 text-sm outline-none transition focus:border-foreground/30 focus:ring-2 focus:ring-ring/30"
            />
          </label>
          <Tabs value={mode} onValueChange={(v) => setMode(v as 'list' | 'cards')}>
            <TabsList className="h-11">
              <TabsTrigger value="list" className="px-4">
                <LayoutGrid /> {t('glossary.list')}
              </TabsTrigger>
              <TabsTrigger value="cards" className="px-4">
                <Layers /> {t('glossary.cards')}
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <span className="text-sm text-muted-foreground tabular">
            {num(terms.length)} {t('glossary.results')}
          </span>
        </div>
        <div className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1">
          {CATS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={cn(
                'relative inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full px-3 text-xs font-medium transition-colors',
                cat === c ? 'text-primary-foreground' : 'border bg-background text-muted-foreground hover:text-foreground',
              )}
            >
              {cat === c && <motion.span layoutId="cat-pill" className="absolute inset-0 -z-10 rounded-full bg-primary" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />}
              {c !== 'all' && <span className={cn('size-1.5 rounded-full', cat === c ? 'bg-primary-foreground' : catDot[c])} />}
              {t(`glossary.cat.${c}` as UIKey)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        {mode === 'list' ? (
          terms.length ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {terms.map((g) => (
                <TermCard key={g.id} term={g} onRelated={jump} highlight={flash === g.id} />
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-muted-foreground">{t('glossary.none')}</p>
          )
        ) : (
          <Flashcards key={`${cat}|${q}`} terms={terms} />
        )}
      </div>
    </div>
  )
}
