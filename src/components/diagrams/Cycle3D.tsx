import { lazy, Suspense, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

import type { L } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'
import { cn } from '@/lib/utils'
import { DiagramFrame, type DiagramProps } from './DiagramFrame'

const CycleScene = lazy(() => import('@/components/three/CycleScene'))

const STEPS: { title: L; text: L }[] = [
  {
    title: { fa: 'تجزیه‌وتحلیل رویدادها', en: 'Analyze transactions' },
    text: {
      fa: 'مدارک مثبته (فاکتور، رسید، صورت‌حساب بانک) بررسی و اثر هر رویداد بر حساب‌ها مشخص می‌شود.',
      en: 'Source documents (invoices, receipts, bank statements) are examined and each event’s effect on the accounts is identified.',
    },
  },
  {
    title: { fa: 'ثبت در دفتر روزنامه', en: 'Journalize' },
    text: {
      fa: 'هر رویداد به ترتیب تاریخ با بدهکار و بستانکار برابر در دفتر روزنامه ثبت می‌شود.',
      en: 'Each event is recorded chronologically in the journal with equal debits and credits.',
    },
  },
  {
    title: { fa: 'انتقال به دفتر کل', en: 'Post to the ledger' },
    text: {
      fa: 'اقلام بدهکار و بستانکار هر سند به حساب‌های مربوط در دفتر کل منتقل می‌شوند.',
      en: 'Debits and credits from each entry are transferred to their accounts in the general ledger.',
    },
  },
  {
    title: { fa: 'تراز آزمایشی اصلاح‌نشده', en: 'Unadjusted trial balance' },
    text: {
      fa: 'مانده همه حساب‌ها فهرست می‌شود تا برابری جمع بدهکار و بستانکار کنترل شود.',
      en: 'All account balances are listed to confirm that total debits equal total credits.',
    },
  },
  {
    title: { fa: 'ثبت‌های اصلاحی', en: 'Adjusting entries' },
    text: {
      fa: 'درآمدها و هزینه‌های تحقق‌یافته طبق مبنای تعهدی در دوره درست شناسایی می‌شوند.',
      en: 'Revenues earned and expenses incurred are recognised in the right period under the accrual basis.',
    },
  },
  {
    title: { fa: 'تراز آزمایشی اصلاح‌شده', en: 'Adjusted trial balance' },
    text: {
      fa: 'پس از اصلاحات، تراز دوباره تهیه می‌شود؛ مبنای تهیه صورت‌های مالی همین تراز است.',
      en: 'The trial balance is prepared again after adjustments; it is the basis for the statements.',
    },
  },
  {
    title: { fa: 'تهیه صورت‌های مالی', en: 'Financial statements' },
    text: {
      fa: 'صورت سود و زیان، تغییرات در حقوق مالکانه، ترازنامه و جریان‌های نقدی تهیه می‌شوند.',
      en: 'The income statement, changes in equity, balance sheet and cash-flow statement are prepared.',
    },
  },
  {
    title: { fa: 'ثبت‌های بستن حساب‌ها', en: 'Closing entries' },
    text: {
      fa: 'حساب‌های موقت (درآمد، هزینه، برداشت) صفر و مانده آن‌ها به سرمایه منتقل می‌شود.',
      en: 'Temporary accounts (revenue, expenses, drawings) are zeroed and their balances moved to capital.',
    },
  },
  {
    title: { fa: 'تراز آزمایشی پس از بستن', en: 'Post-closing trial balance' },
    text: {
      fa: 'فقط حساب‌های دائمی باقی می‌مانند و دفاتر برای دوره بعد آماده است.',
      en: 'Only permanent accounts remain, the books are ready for the next period.',
    },
  },
  {
    title: { fa: 'ثبت‌های معکوس (اختیاری)', en: 'Reversing entries (optional)' },
    text: {
      fa: 'در ابتدای دوره جدید، برخی اصلاحات تعهدی معکوس می‌شوند تا ثبت‌های بعدی ساده‌تر شوند.',
      en: 'At the start of the new period some accrual adjustments are reversed to simplify later entries.',
    },
  },
]

export default function Cycle3D({ caption }: DiagramProps) {
  const { tr, t, num, isFa } = useI18n()
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    if (!playing) return
    const id = window.setInterval(() => setActive((a) => (a + 1) % STEPS.length), 2800)
    return () => window.clearInterval(id)
  }, [playing])

  const select = (i: number) => {
    setPlaying(false)
    setActive(i)
  }
  const step = STEPS[active]

  return (
    <DiagramFrame
      title={{ fa: 'چرخه حسابداری در فضای سه‌بعدی', en: 'The accounting cycle in 3D' }}
      caption={caption}
      badge="3d"
      bodyClassName="p-0 sm:p-0"
      onReplay={() => {
        setActive(0)
        setPlaying(true)
      }}
    >
      <div className="relative bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--primary)_10%,transparent),transparent_70%)]">
        <Suspense fallback={<div className="h-[360px] animate-pulse bg-muted/40 sm:h-[440px]" />}>
          <CycleScene
            labels={STEPS.map((s) => tr(s.title))}
            numerals={STEPS.map((_, i) => num(i + 1))}
            active={active}
            onSelect={select}
            reverse={isFa}
            fallback={tr({ fa: 'مرورگر شما از WebGL پشتیبانی نمی‌کند.', en: 'Your browser does not support WebGL.' })}
          />
        </Suspense>
        <div className="pointer-events-none absolute bottom-2 start-3 text-[11px] text-muted-foreground">{t('diagram.drag')}</div>
      </div>
      <div className="flex flex-col gap-3 border-t p-4 sm:flex-row sm:items-center">
        <div className="min-h-[72px] flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="text-xs font-medium text-muted-foreground">
                {t('diagram.step')} {num(active + 1)} / {num(STEPS.length)}
              </div>
              <div className="font-semibold">{tr(step.title)}</div>
              <p className="text-sm leading-relaxed text-muted-foreground">{tr(step.text)}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            aria-label={t('diagram.prev')}
            onClick={() => select((active - 1 + STEPS.length) % STEPS.length)}
            className="grid size-9 place-items-center rounded-lg border bg-background hover:bg-muted active:scale-95"
          >
            <ChevronLeft className="size-4 rtl:rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90 active:scale-95"
          >
            {playing ? <Pause className="size-4" /> : <Play className="size-4 rtl:rotate-180" />}
            {playing ? t('diagram.pause') : t('diagram.play')}
          </button>
          <button
            type="button"
            aria-label={t('diagram.next')}
            onClick={() => select((active + 1) % STEPS.length)}
            className="grid size-9 place-items-center rounded-lg border bg-background hover:bg-muted active:scale-95"
          >
            <ChevronRight className="size-4 rtl:rotate-180" />
          </button>
        </div>
      </div>
      <div className="flex gap-1 px-4 pb-4">
        {STEPS.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`${t('diagram.step')} ${i + 1}`}
            onClick={() => select(i)}
            className={cn('h-1.5 flex-1 rounded-full transition-colors duration-500', i <= active ? 'bg-primary' : 'bg-border')}
          />
        ))}
      </div>
    </DiagramFrame>
  )
}
