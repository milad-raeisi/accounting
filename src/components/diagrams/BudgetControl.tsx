import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, CircleCheck, OctagonX, TriangleAlert, type LucideIcon } from 'lucide-react'

import type { L } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import { DiagramFrame, type DiagramProps } from './DiagramFrame'

/** Amounts in USD thousands, on WBS element AFE-2026-031.02.03 (casing and tubulars of a new well). */
type Ev = { doc: L; note: L; budget?: number; commit?: number; actual?: number; attempt?: number }

const EVENTS: Ev[] = [
  {
    doc: { fa: 'آزادسازی بودجه: 1٬350', en: 'Budget released: 1,350' },
    budget: 1350,
    note: {
      fa: 'مبلغ تأییدشده AFE برای لوله جداری روی عنصر WBS آزاد می‌شود. کنترل دسترسی بودجه فعال است: هشدار در 90٪ و توقف کامل در 100٪ (حدود فرضی).',
      en: 'The approved AFE amount for casing is released on the WBS element. Availability control is on: warning at 90%, hard stop at 100% (illustrative tolerances).',
    },
  },
  {
    doc: { fa: 'سفارش خرید لوله 9⅝ اینچ: 600', en: 'PO for 9⅝-inch casing: 600' },
    commit: 600,
    note: {
      fa: 'سفارش با تخصیص به WBS، تعهد 600 می‌سازد. هنوز سندی در دفتر کل ثبت نشده ولی مانده در دسترس کم شده است.',
      en: 'The PO, assigned to the WBS element, creates a 600 commitment. Nothing is in the ledger yet, but the available budget has dropped.',
    },
  },
  {
    doc: { fa: 'رسید کالا (GRN) بخشی از سفارش: 400', en: 'GRN for part of the order: 400' },
    commit: -400,
    actual: 400,
    note: {
      fa: 'رسید کالا 400 از تعهد را به هزینه واقعی تبدیل می‌کند: WBS بدهکار و GR/IR بستانکار. درصد مصرف بودجه تغییر نمی‌کند.',
      en: 'The GRN turns 400 of the commitment into actual cost: Dr WBS, Cr GR/IR. The consumption percentage does not change.',
    },
  },
  {
    doc: { fa: 'فاکتور با اختلاف قیمت: 15+', en: 'Invoice with a price difference: +15' },
    actual: 15,
    note: {
      fa: 'فاکتور فروشنده 15 بیشتر از قیمت سفارش است (در حد مجاز). چون سفارش مستقیم به WBS تخصیص دارد، اختلاف به هزینه واقعی همین WBS اضافه می‌شود.',
      en: 'The vendor invoice is 15 above the PO price (within tolerance). Because the PO is assigned directly to the WBS element, the difference adds to its actual cost.',
    },
  },
  {
    doc: { fa: 'سفارش خرید لاینر 7 اینچ: 520', en: 'PO for 7-inch liner: 520' },
    commit: 520,
    note: {
      fa: 'تعهد جدید ثبت می‌شود. مصرف بودجه به حدود 84٪ می‌رسد و هنوز زیر حد هشدار است.',
      en: 'A new commitment is recorded. Consumption reaches about 84%, still below the warning level.',
    },
  },
  {
    doc: { fa: 'سفارش خدمات لوله‌گذاری جداری: 150', en: 'Service PO for casing running: 150' },
    commit: 150,
    note: {
      fa: 'مصرف از 90٪ می‌گذرد: کاربر هشدار می‌بیند و کنترلر پروژه مطلع می‌شود، ولی سفارش ذخیره می‌شود.',
      en: 'Consumption passes 90%: the user sees a warning and the project controller is alerted, but the order is saved.',
    },
  },
  {
    doc: { fa: 'پذیرش برگه ثبت خدمات (SES): 150', en: 'Service entry sheet (SES) accepted: 150' },
    commit: -150,
    actual: 150,
    note: {
      fa: 'پذیرش SES تعهد خدمات را به هزینه واقعی تبدیل می‌کند: WBS بدهکار و GR/IR بستانکار. مصرف همان 95٪ می‌ماند.',
      en: 'Accepting the SES turns the service commitment into actual cost: Dr WBS, Cr GR/IR. Consumption stays at 95%.',
    },
  },
  {
    doc: { fa: 'سفارش سنترالایزر: 180', en: 'PO for centralisers: 180' },
    attempt: 180,
    note: {
      fa: 'این سفارش مصرف را به 109٪ می‌رساند. کنترل دسترسی بودجه خطای توقف می‌دهد و سفارش ذخیره نمی‌شود.',
      en: 'This order would take consumption to 109%. Availability control raises a hard stop and the order cannot be saved.',
    },
  },
  {
    doc: { fa: 'انتقال از ذخیره احتیاط AFE: 200+', en: 'Transfer from the AFE contingency: +200' },
    budget: 200,
    note: {
      fa: 'کنترلر پروژه با تأیید طبق جدول اختیارات، 200 از ذخیره احتیاط سطح اول AFE را به این عنصر منتقل می‌کند و بودجه آن 1٬550 می‌شود. جمع AFE تغییر نمی‌کند، پس AFE تکمیلی لازم نیست؛ AFE تکمیلی فقط وقتی لازم است که ذخیره احتیاط هم کافی نباشد.',
      en: 'With approval under the delegation of authority, the project controller moves 200 from the AFE contingency held at level 1 to this element, raising its budget to 1,550. The AFE total does not change, so no supplementary AFE is needed; that is only required when contingency is not enough either.',
    },
  },
  {
    doc: { fa: 'سفارش سنترالایزر دوباره: 180', en: 'PO for centralisers again: 180' },
    commit: 180,
    note: {
      fa: 'اکنون سفارش با هشدار ثبت می‌شود. برآورد هزینه تا پایان کار باید از نزدیک پیگیری شود.',
      en: 'Now the order is saved with a warning. The estimate at completion must be watched closely.',
    },
  },
]

type State = { budget: number; commit: number; actual: number; attempt: number }

function stateAt(i: number): State {
  const s: State = { budget: 0, commit: 0, actual: 0, attempt: 0 }
  EVENTS.slice(0, i + 1).forEach((e) => {
    s.budget += e.budget ?? 0
    s.commit += e.commit ?? 0
    s.actual += e.actual ?? 0
  })
  s.attempt = EVENTS[i].attempt ?? 0
  return s
}

const WARN = 0.9
const SCALE = 1700

type Status = 'ok' | 'warn' | 'stop'
function statusOf(s: State): Status {
  if (s.attempt) return 'stop'
  return (s.commit + s.actual) / s.budget >= WARN ? 'warn' : 'ok'
}

const STATUS: Record<Status, { label: L; icon: LucideIcon; chip: string; text: string }> = {
  ok: { label: { fa: 'مجاز', en: 'OK' }, icon: CircleCheck, chip: 'bg-revenue/10 text-revenue', text: 'text-revenue' },
  warn: { label: { fa: 'هشدار', en: 'Warning' }, icon: TriangleAlert, chip: 'bg-expense/10 text-expense', text: 'text-expense' },
  stop: { label: { fa: 'توقف کامل', en: 'Hard stop' }, icon: OctagonX, chip: 'bg-liability/10 text-liability', text: 'text-liability' },
}

export default function BudgetControl({ caption }: DiagramProps) {
  const { tr, num, t, lang, dir } = useI18n()
  const [i, setI] = useState(0)
  const [auto, setAuto] = useState(true)
  const scope = useRef<HTMLDivElement>(null)
  const s = useMemo(() => stateAt(i), [i])
  const status = statusOf(s)
  const used = s.commit + s.actual

  useEffect(() => {
    if (!auto || prefersReducedMotion()) return
    const id = window.setInterval(() => setI((x) => (x + 1) % EVENTS.length), 3800)
    return () => window.clearInterval(id)
  }, [auto])

  useGSAP(
    () => {
      const w = (v: number) => `${(v / SCALE) * 100}%`
      const d = prefersReducedMotion() ? 0 : 0.6
      gsap.to('[data-bc="actual"]', { width: w(s.actual), duration: d, ease: 'power2.out' })
      gsap.to('[data-bc="commit"]', { width: w(s.commit), duration: d, ease: 'power2.out' })
      gsap.to('[data-bc="attempt"]', { width: w(s.attempt), duration: d, ease: 'power2.out' })
      const side = dir === 'rtl' ? 'right' : 'left'
      gsap.to('[data-bc="budget"]', { [side]: w(s.budget), duration: d, ease: 'power2.out' })
      gsap.to('[data-bc="warn"]', { [side]: w(s.budget * WARN), duration: d, ease: 'power2.out' })
    },
    { scope, dependencies: [i, lang, dir] },
  )

  const go = (n: number) => {
    setAuto(false)
    setI(Math.max(0, Math.min(EVENTS.length - 1, n)))
  }
  const pct = (v: number) => tr({ fa: `${Math.round(v * 100)}٪`, en: `${Math.round(v * 100)}%` })
  const St = STATUS[status]
  const StIcon = St.icon
  const Prev = dir === 'rtl' ? ChevronRight : ChevronLeft
  const Next = dir === 'rtl' ? ChevronLeft : ChevronRight

  const tiles: [L, number, string][] = [
    [{ fa: 'بودجه', en: 'Budget' }, s.budget, 'text-foreground'],
    [{ fa: 'هزینه واقعی', en: 'Actual' }, s.actual, 'text-primary'],
    [{ fa: 'تعهد باز', en: 'Committed' }, s.commit, 'text-primary/70'],
    [{ fa: 'مانده در دسترس', en: 'Available' }, s.budget - used, 'text-foreground'],
  ]

  return (
    <DiagramFrame
      title={{ fa: 'کنترل بودجه: بودجه، تعهد و هزینه واقعی', en: 'Budget control: budget, commitments and actuals' }}
      caption={caption}
      badge="interactive"
      onReplay={() => {
        setI(0)
        setAuto(true)
      }}
    >
      <div ref={scope} className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <code dir="ltr" className="text-xs font-semibold text-primary">
              AFE-2026-031.02.03
            </code>
            <span className="text-xs text-muted-foreground">{tr({ fa: 'لوله‌های جداری و مغزی · هزار دلار', en: 'Casing and tubulars · USD thousands' })}</span>
          </div>

          <div key={dir} className="relative mt-6 h-10">
            <div className="absolute inset-0 flex overflow-hidden rounded-full bg-muted">
              <div data-bc="actual" className="h-full bg-primary" style={{ width: 0 }} />
              <div data-bc="commit" className="h-full bg-primary/35" style={{ width: 0 }} />
              <div
                data-bc="attempt"
                className="h-full bg-liability/70"
                style={{ width: 0, backgroundImage: 'repeating-linear-gradient(45deg, transparent 0 6px, rgb(255 255 255 / 0.35) 6px 12px)' }}
              />
            </div>
            <div data-bc="warn" className="absolute -top-1.5 -bottom-1.5 w-0 border-l border-dashed border-expense" style={{ [dir === 'rtl' ? 'right' : 'left']: 0 }} aria-hidden />
            <div
              data-bc="budget"
              className="absolute -top-3 -bottom-3 w-0.5 -translate-x-1/2 rounded-full bg-foreground rtl:translate-x-1/2"
              style={{ [dir === 'rtl' ? 'right' : 'left']: 0 }}
              aria-hidden
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-primary" />
              {tr({ fa: 'واقعی', en: 'Actual' })}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-primary/35" />
              {tr({ fa: 'تعهد', en: 'Committed' })}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-0.5 rounded-full bg-foreground" />
              {tr({ fa: 'بودجه (100٪)', en: 'Budget (100%)' })}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-3 w-0 border-l border-dashed border-expense" />
              {tr({ fa: 'حد هشدار (90٪)', en: 'Warning (90%)' })}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-liability/70" />
              {tr({ fa: 'درخواست ردشده', en: 'Rejected request' })}
            </span>
          </div>

          <dl className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {tiles.map(([label, v, cls], k) => (
              <div key={k} className="rounded-[0.9rem] bg-muted/50 px-3 py-2">
                <dt className="text-[11px] text-muted-foreground">{tr(label)}</dt>
                <dd className={cn('tabular text-base font-semibold', cls)}>{num(v)}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-4 rounded-[1.25rem] bg-muted/50 p-4" aria-live="polite">
            <div className="flex flex-wrap items-center gap-2">
              <span className={cn('inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold', St.chip)}>
                <StIcon className="size-3.5" />
                {tr(St.label)}
              </span>
              <span className="text-xs text-muted-foreground">
                {tr({ fa: 'مصرف بودجه', en: 'Consumption' })}{' '}
                <span className="tabular font-semibold text-foreground">{pct((used + s.attempt) / s.budget)}</span>
              </span>
            </div>
            <div className="mt-2 font-semibold text-foreground">{tr(EVENTS[i].doc)}</div>
            <p className="mt-1 text-sm leading-7 text-body">{tr(EVENTS[i].note)}</p>
          </div>
        </div>

        <div className="min-w-0">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {t('diagram.step')} {num(i + 1)} / {num(EVENTS.length)}
            </span>
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => go(i - 1)}
                disabled={i === 0}
                aria-label={tr({ fa: 'قبلی', en: 'Previous' })}
                className="grid size-8 place-items-center rounded-full bg-muted text-foreground disabled:opacity-40"
              >
                <Prev className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => go(i + 1)}
                disabled={i === EVENTS.length - 1}
                aria-label={tr({ fa: 'بعدی', en: 'Next' })}
                className="grid size-8 place-items-center rounded-full bg-muted text-foreground disabled:opacity-40"
              >
                <Next className="size-4" />
              </button>
            </div>
          </div>
          <ol className="space-y-1">
            {EVENTS.map((e, k) => {
              const st = STATUS[statusOf(stateAt(k))]
              const Icon = st.icon
              const on = k === i
              const done = k <= i
              return (
                <li key={k}>
                  <button
                    type="button"
                    onClick={() => go(k)}
                    aria-current={on ? 'step' : undefined}
                    className={cn(
                      'flex w-full items-center gap-2 rounded-[0.9rem] px-3 py-2 text-start text-sm transition-colors',
                      on ? 'bg-primary/10 font-medium text-foreground' : done ? 'text-body hover:bg-muted/60' : 'text-muted-foreground hover:bg-muted/60',
                    )}
                  >
                    <span className="w-5 shrink-0 tabular text-xs text-muted-foreground">{num(k + 1)}</span>
                    <span className="min-w-0 flex-1">{tr(e.doc)}</span>
                    {done && <Icon className={cn('size-4 shrink-0', st.text)} />}
                  </button>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </DiagramFrame>
  )
}
