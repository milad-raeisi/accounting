import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw, Trophy, XCircle } from 'lucide-react'

import { Progress } from '@/components/animate-ui/components/radix/progress'
import { RadioGroup, RadioGroupItem } from '@/components/animate-ui/components/radix/radio-group'
import { AnimatedNumber } from '@/components/ui/AnimatedNumber'
import { Rich } from '@/components/ui/Rich'
import type { Question } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'
import { cn } from '@/lib/utils'

type Props = {
  questions: Question[]
  /** called once when the learner finishes */
  onComplete?: (score: number, total: number) => void
  /** label shown above each question (e.g. which lesson it comes from) */
  sourceOf?: (index: number) => string | undefined
  className?: string
}

export function Quiz({ questions, onComplete, sourceOf, className }: Props) {
  const { t, tr, num, isFa } = useI18n()
  const [index, setIndex] = useState(0)
  const [choice, setChoice] = useState<string>('')
  const [checked, setChecked] = useState(false)
  const [answers, setAnswers] = useState<number[]>([])
  const [finished, setFinished] = useState(false)

  const q = questions[index]
  const score = useMemo(() => answers.filter((a, i) => a === questions[i]?.answer).length, [answers, questions])
  const NextIcon = isFa ? ArrowLeft : ArrowRight

  if (!questions.length) return null

  const check = () => {
    if (choice === '') return
    setChecked(true)
    setAnswers((a) => [...a, Number(choice)])
  }
  const next = () => {
    if (index === questions.length - 1) {
      setFinished(true)
      const final = answers.filter((a, i) => a === questions[i]?.answer).length
      onComplete?.(final, questions.length)
      return
    }
    setIndex((i) => i + 1)
    setChoice('')
    setChecked(false)
  }
  const restart = () => {
    setIndex(0)
    setChoice('')
    setChecked(false)
    setAnswers([])
    setFinished(false)
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100)
    const msg = pct >= 85 ? t('quiz.great') : pct >= 60 ? t('quiz.good') : t('quiz.low')
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn('rounded-lg border bg-card p-6 text-center sm:p-8', className)}
      >
        <div className="mx-auto mb-4 grid size-16 place-items-center rounded-2xl bg-gold/15 text-gold">
          <Trophy className="size-8" />
        </div>
        <div className="text-sm text-muted-foreground">{t('quiz.score')}</div>
        <div className="mt-1 text-4xl font-black tracking-tight">
          <AnimatedNumber value={score} format="number" /> <span className="text-muted-foreground">/ {num(questions.length)}</span>
        </div>
        <div className="mx-auto mt-4 max-w-xs">
          <Progress value={pct} className="h-2.5" />
        </div>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">{msg}</p>

        <div className="mt-6 space-y-2 text-start">
          {questions.map((qq, i) => {
            const ok = answers[i] === qq.answer
            return (
              <details key={i} className="group rounded-lg border bg-background/60 px-3 py-2 text-sm">
                <summary className="flex cursor-pointer list-none items-start gap-2">
                  {ok ? <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-revenue" /> : <XCircle className="mt-0.5 size-4 shrink-0 text-liability" />}
                  <span className="flex-1">
                    <Rich text={qq.q} />
                  </span>
                </summary>
                <div className="mt-2 space-y-1 ps-6 text-muted-foreground">
                  <div>
                    <b className="text-foreground">{t('quiz.answer')}:</b> <Rich text={qq.options[qq.answer]} />
                  </div>
                  <div>
                    <Rich text={qq.explain} />
                  </div>
                </div>
              </details>
            )
          })}
        </div>

        <button
          type="button"
          onClick={restart}
          className="mt-6 inline-flex h-10 items-center gap-2 rounded-lg border bg-background px-5 text-sm font-medium transition hover:bg-muted active:scale-95"
        >
          <RotateCcw className="size-4" /> {t('quiz.retry')}
        </button>
      </motion.div>
    )
  }

  const correct = checked && Number(choice) === q.answer

  return (
    <div className={cn('rounded-lg border bg-card p-5 sm:p-7', className)}>
      <div className="mb-4 flex items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>
          {t('quiz.question')} {num(index + 1)} {t('quiz.of')} {num(questions.length)}
          {sourceOf?.(index) && <span className="ms-2 rounded-full bg-muted px-2 py-0.5">{sourceOf(index)}</span>}
        </span>
        <span className="tabular">
          {num(score)} ✓
        </span>
      </div>
      <Progress value={((index + (checked ? 1 : 0)) / questions.length) * 100} className="mb-6 h-1.5" />

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: isFa ? -24 : 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isFa ? 24 : -24 }}
          transition={{ duration: 0.28 }}
        >
          <h4 className="mb-5 text-lg font-bold leading-relaxed">
            <Rich text={q.q} />
          </h4>

          <RadioGroup value={choice} onValueChange={(v) => !checked && setChoice(v)} className="gap-2.5" dir={isFa ? 'rtl' : 'ltr'}>
            {q.options.map((opt, i) => {
              const id = `q${index}-o${i}`
              const isAnswer = i === q.answer
              const isChosen = choice === String(i)
              return (
                <label
                  key={i}
                  htmlFor={id}
                  className={cn(
                    'flex cursor-pointer items-start gap-3 rounded-lg border p-3.5 transition-colors',
                    !checked && 'hover:bg-muted/60',
                    !checked && isChosen && 'bg-muted',
                    checked && isAnswer && 'bg-revenue/10',
                    checked && isChosen && !isAnswer && 'bg-liability/10',
                    checked && !isAnswer && !isChosen && 'opacity-60',
                  )}
                >
                  <RadioGroupItem value={String(i)} id={id} disabled={checked} className="mt-1" />
                  <span className="flex-1 leading-7">
                    <Rich text={opt} />
                  </span>
                  {checked && isAnswer && <CheckCircle2 className="mt-1 size-5 shrink-0 text-revenue" />}
                  {checked && isChosen && !isAnswer && <XCircle className="mt-1 size-5 shrink-0 text-liability" />}
                </label>
              )
            })}
          </RadioGroup>

          <AnimatePresence>
            {checked && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className={'mt-4 rounded-lg bg-muted/60 p-4 text-sm leading-7'}>
                  <div className={cn('mb-1 font-bold', correct ? 'text-revenue' : 'text-liability')}>{correct ? t('quiz.correct') : t('quiz.wrong')}</div>
                  <Rich text={q.explain} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex justify-end">
        {!checked ? (
          <button
            type="button"
            disabled={choice === ''}
            onClick={check}
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 active:scale-95 disabled:opacity-40"
          >
            {t('quiz.check')}
          </button>
        ) : (
          <button
            type="button"
            onClick={next}
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-foreground px-5 text-sm font-semibold text-background transition hover:opacity-90 active:scale-95"
          >
            {index === questions.length - 1 ? t('quiz.finish') : t('quiz.next')}
            <NextIcon className="size-4" />
          </button>
        )}
      </div>
      <span className="sr-only" aria-live="polite">
        {checked ? (correct ? t('quiz.correct') : `${t('quiz.wrong')} ${tr(q.options[q.answer])}`) : ''}
      </span>
    </div>
  )
}
