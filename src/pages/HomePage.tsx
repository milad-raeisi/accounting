import { Link } from 'react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { lessons } from '@/content/lessons'
import { useI18n } from '@/i18n/I18nProvider'
import { useProgress } from '@/lib/progress'

function Hero() {
  const { t, isFa } = useI18n()
  const Arrow = isFa ? ArrowLeft : ArrowRight

  return (
    <section className="mx-auto max-w-2xl px-4 pt-20 pb-20 text-center sm:px-6 lg:pt-28 lg:pb-24">
      <h1 className="text-4xl font-black leading-tight sm:text-5xl">{t('home.title')}</h1>
      <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-muted-foreground">{t('home.subtitle')}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/lessons/what-is-accounting"
          className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          {t('home.cta.start')}
          <Arrow className="size-4" />
        </Link>
        <Link to="/lab" className="inline-flex h-11 items-center rounded-lg px-4 font-medium text-foreground/80 transition-colors hover:bg-muted">
          {t('home.cta.lab')}
        </Link>
      </div>
    </section>
  )
}

function Curriculum() {
  const { t, tr, num } = useI18n()
  const { isDone } = useProgress()
  const levels = ['beginner', 'intermediate', 'advanced'] as const

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t pt-12">
        <h2 className="text-2xl font-bold">{t('home.curriculum.title')}</h2>
        <p className="mt-2 text-muted-foreground">{t('home.curriculum.lead')}</p>
      </div>

      <div className="mt-8 space-y-10">
        {levels.map((lv) => {
          const list = lessons.filter((l) => l.level === lv)
          if (!list.length) return null
          return (
            <div key={lv}>
              <h3 className="mb-1 text-sm font-semibold text-muted-foreground">{t(`level.${lv}`)}</h3>
              <ol className="divide-y">
                {list.map((l) => (
                  <li key={l.slug}>
                    <Link to={`/lessons/${l.slug}`} className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-3 py-4">
                      <span className="text-sm text-muted-foreground tabular">{num(l.number)}</span>
                      <span className="min-w-0">
                        <span className="font-semibold group-hover:text-primary">{tr(l.title)}</span>
                        <span className="mt-1 block truncate text-sm text-muted-foreground">{tr(l.summary)}</span>
                      </span>
                      <span className="text-xs whitespace-nowrap text-muted-foreground">
                        {isDone(l.slug) ? t('lesson.done') : `${num(l.minutes)} ${t('lesson.minutes')}`}
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function LabNote() {
  const { t, isFa } = useI18n()
  const Arrow = isFa ? ArrowLeft : ArrowRight
  return (
    <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
      <div className="flex flex-col gap-3 border-t pt-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-bold">{t('lab.title')}</h2>
          <p className="mt-1 max-w-2xl text-sm leading-7 text-muted-foreground">{t('home.cta.lead')}</p>
        </div>
        <Link to="/lab" className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
          {t('home.cta.lab')}
          <Arrow className="size-4" />
        </Link>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Curriculum />
      <LabNote />
    </>
  )
}
