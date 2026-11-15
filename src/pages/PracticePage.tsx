import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { GraduationCap, RefreshCcw, Timer } from 'lucide-react'

import { Checkbox } from '@/components/animate-ui/components/radix/checkbox'
import { Quiz } from '@/components/lesson/Quiz'
import { lessons } from '@/content/lessons'
import type { Question } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'
import { cn } from '@/lib/utils'

type Picked = { q: Question; lesson: number }

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function PracticePage() {
  const { t, tr, num, lang } = useI18n()
  const [count, setCount] = useState(15)
  const [selected, setSelected] = useState<Set<number>>(() => new Set(lessons.map((l) => l.number)))
  const [exam, setExam] = useState<Picked[] | null>(null)
  const [startedAt, setStartedAt] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const [finished, setFinished] = useState(false)
  const root = useRef<HTMLDivElement>(null)

  const pool = useMemo(() => lessons.filter((l) => selected.has(l.number)).flatMap((l) => l.quiz.map((q) => ({ q, lesson: l.number }))), [selected])

  useEffect(() => {
    if (!exam || finished) return
    const id = window.setInterval(() => setElapsed(Math.floor((Date.now() - startedAt) / 1000)), 1000)
    return () => window.clearInterval(id)
  }, [exam, finished, startedAt])

  const start = () => {
    setExam(shuffle(pool).slice(0, Math.min(count, pool.length)))
    setStartedAt(Date.now())
    setElapsed(0)
    setFinished(false)
  }

  const mmss = `${num(Math.floor(elapsed / 60)).padStart(2, num(0))}:${num(elapsed % 60).padStart(2, num(0))}`
  const allOn = selected.size === lessons.length

  return (
    <div ref={root} className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
      <div className="text-center">
        <div className="mx-auto mb-5 grid size-14 place-items-center rounded-lg bg-primary/10 text-primary">
          <GraduationCap className="size-7" />
        </div>
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">{t('practice.title')}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">{t('practice.lead')}</p>
      </div>

      {!exam ? (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-10 rounded-lg border bg-card p-6 sm:p-8">
          {!lessons.length ? (
            <p className="text-center text-muted-foreground">{t('practice.empty')}</p>
          ) : (
            <>
              <div className="text-sm font-semibold">{t('practice.count')}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {[10, 15, 25, 40].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setCount(n)}
                    className={cn(
                      'h-10 min-w-16 rounded-xl border px-4 text-sm font-semibold tabular transition',
                      count === n ? ' bg-primary text-primary-foreground' : 'bg-background ',
                    )}
                  >
                    {num(n)}
                  </button>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div className="text-sm font-semibold">{t('practice.lessons')}</div>
                <button
                  type="button"
                  onClick={() => setSelected(allOn ? new Set() : new Set(lessons.map((l) => l.number)))}
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  {t('practice.selectAll')}
                </button>
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {lessons.map((l) => {
                  const on = selected.has(l.number)
                  return (
                    <label key={l.slug} className={cn('flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm transition', on ? 'bg-muted/60' : 'hover:bg-muted/50')}>
                      <Checkbox
                        checked={on}
                        onCheckedChange={(v) =>
                          setSelected((s) => {
                            const n = new Set(s)
                            if (v) n.add(l.number)
                            else n.delete(l.number)
                            return n
                          })
                        }
                      />
                      <span className="tabular text-xs text-muted-foreground">{num(l.number)}.</span>
                      <span className="flex-1">{tr(l.title)}</span>
                    </label>
                  )
                })}
              </div>

              <button
                type="button"
                disabled={!pool.length}
                onClick={start}
                className="mt-8 h-12 w-full rounded-xl bg-primary text-base font-semibold text-primary-foreground shadow-[0_10px_30px_-12px_var(--primary)] transition hover:opacity-90 active:scale-[0.99] disabled:opacity-40"
              >
                {t('practice.start')} · {num(Math.min(count, pool.length))} {t('quiz.question')}
              </button>
            </>
          )}
        </motion.div>
      ) : (
        <div className="mt-10">
          <div className="mb-4 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-sm tabular">
              <Timer className="size-4 text-primary" /> {t('practice.timer')}: {mmss}
            </span>
            <button type="button" onClick={() => setExam(null)} className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-sm hover:bg-muted">
              <RefreshCcw className="size-4" /> {t('practice.new')}
            </button>
          </div>
          <Quiz
            key={`${startedAt}-${lang}`}
            questions={exam.map((e) => e.q)}
            sourceOf={(i) => `${t('lesson.number')} ${num(exam[i].lesson)}`}
            onComplete={() => setFinished(true)}
          />
        </div>
      )}
    </div>
  )
}
