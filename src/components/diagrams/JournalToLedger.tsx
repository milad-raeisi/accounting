import { useRef, useState } from 'react'
import { BookOpen, Check, Library } from 'lucide-react'

import { novaAccountMap, novaAccounts, novaTransactions } from '@/content/nova'
import { useI18n } from '@/i18n/I18nProvider'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'
import { computeBalances, type AccountBalance, type Tx } from '@/lib/ledger'
import { cn } from '@/lib/utils'
import { DiagramFrame, useInViewTimeline, type DiagramProps } from './DiagramFrame'
import { StepperControls } from './parts-b'

/** Day 4 supplies on account · Day 8 cash revenue · Day 27 pay supplier */
const ENTRIES: Tx[] = ['t4', 't6', 't11'].map((id) => novaTransactions.find((t) => t.id === id)!)
const LEDGER_IDS = ['cash', 'supplies', 'ap', 'revenue']
/** Ledger state after 0…3 entries have been posted. */
const SNAPSHOTS = [0, 1, 2, 3].map((n) => computeBalances(novaAccounts, ENTRIES.slice(0, n)))

type Side = 'dr' | 'cr'
const lineKey = (txId: string, side: Side) => `${txId}-${side}`

/** Curved path (in local x/y offsets) from the centre of `a` to the centre of `b`. */
function arcBetween(a: Element, b: Element) {
  const ra = a.getBoundingClientRect()
  const rb = b.getBoundingClientRect()
  const dx = rb.left + rb.width / 2 - (ra.left + ra.width / 2)
  const dy = rb.top + rb.height / 2 - (ra.top + ra.height / 2)
  const len = Math.hypot(dx, dy) || 1
  // unit normal, always bowing upwards (or sideways for vertical travel)
  let nx = dy / len
  let ny = -dx / len
  if (ny > 0) {
    nx = -nx
    ny = -ny
  }
  const lift = Math.min(80, len * 0.28)
  return [
    { x: 0, y: 0 },
    { x: dx / 2 + nx * lift, y: dy / 2 + ny * lift },
    { x: dx, y: dy },
  ]
}

/** Absolutely positioned pill placed over `src`, appended to `root`. Removed on cleanup. */
function makeFlyer(root: HTMLElement, src: Element, side: Side, text: string) {
  const r = root.getBoundingClientRect()
  const s = src.getBoundingClientRect()
  const el = document.createElement('div')
  el.className = cn(
    'pointer-events-none absolute z-30 inline-flex items-center whitespace-nowrap rounded-full border bg-card px-2.5 py-1 text-xs font-bold tabular shadow-lg',
    side === 'dr' ? ' text-debit ring-1 ring-foreground/10' : ' text-credit ring-1 ring-foreground/10',
  )
  el.textContent = text
  el.style.left = `${s.left + s.width / 2 - r.left}px`
  el.style.top = `${s.top + s.height / 2 - r.top}px`
  el.setAttribute('aria-hidden', 'true')
  root.appendChild(el)
  gsap.set(el, { xPercent: -50, yPercent: -50, autoAlpha: 0, scale: 0.6 })
  return el
}

export default function JournalToLedger({ caption }: DiagramProps) {
  const { t, tr, money, num, digits, lang } = useI18n()
  const scope = useRef<HTMLDivElement>(null)
  const prevStep = useRef(0)
  const [step, setStep] = useState(0)
  const total = ENTRIES.length
  const snapshot = SNAPSHOTS[step]

  // entrance: then post the first entry
  const { replay } = useInViewTimeline(
    scope,
    (tl) => {
      tl.from('[data-anim="journal"]', { y: 28, autoAlpha: 0, duration: 0.7 })
        .from('[data-anim="ledger-head"]', { y: 12, autoAlpha: 0, duration: 0.5 }, '-=0.45')
        .from('[data-anim="t"]', { y: 22, autoAlpha: 0, scale: 0.96, stagger: 0.08, duration: 0.55 }, '-=0.35')
        .from('[data-anim="ctrl"]', { y: 12, autoAlpha: 0, duration: 0.45 }, '-=0.25')
        .add(() => setStep((s) => Math.max(s, 1)), '+=0.25')
    },
    [lang],
  )

  // posting animation: each journal line flies into its T-account, then the Ref. column ticks
  useGSAP(
    () => {
      const from = prevStep.current
      prevStep.current = step
      const root = scope.current
      if (!root || step === 0 || step <= from || prefersReducedMotion()) return
      const tx = ENTRIES[step - 1]
      const q = gsap.utils.selector(root)
      const flyers: HTMLElement[] = []
      const balances = q(tx.lines.map((l) => `[data-bal="${l.account}"]`).join(','))
      gsap.set(balances, { autoAlpha: 0 })

      const tl = gsap.timeline({ delay: 0.1 })
      tl.fromTo(q(`[data-entry="${tx.id}"]`), { opacity: 0.55 }, { opacity: 1, duration: 0.3 })

      for (let i = 0; i < tx.lines.length; i++) {
        const line = tx.lines[i]
        const side: Side = line.debit ? 'dr' : 'cr'
        const key = lineKey(tx.id, side)
        const src = q(`[data-amt="${key}"]`)[0]
        const dst = q(`[data-post="${key}"]`)[0]
        const pr = q(`[data-pr="${key}"]`)[0]
        const glow = q(`[data-glow="${line.account}"]`)[0]
        if (!src || !dst) continue
        gsap.set(pr ? [dst, pr] : [dst], { autoAlpha: 0 })
        const amount = line.debit ?? line.credit ?? 0
        const flyer = makeFlyer(root, src, side, `${side === 'dr' ? t('table.debit') : t('table.credit')} ${money(amount)}`)
        flyers.push(flyer)
        const at = 0.25 + i * 1.25
        tl.fromTo(src, { scale: 1 }, { scale: 1.18, duration: 0.18, yoyo: true, repeat: 1, ease: 'power2.out' }, at)
          .to(flyer, { autoAlpha: 1, scale: 1, duration: 0.25 }, at + 0.05)
          .to(flyer, { motionPath: { path: arcBetween(src, dst), curviness: 1.3 }, duration: 0.9, ease: 'power2.inOut' }, at + 0.2)
          .to(flyer, { autoAlpha: 0, scale: 0.7, duration: 0.2 }, at + 1.05)
          .fromTo(dst, { autoAlpha: 0, scale: 1.35 }, { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'back.out(2.6)' }, at + 1.05)
        if (glow) tl.fromTo(glow, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25, yoyo: true, repeat: 1 }, at + 1.05)
        if (pr) tl.fromTo(pr, { autoAlpha: 0, scale: 0, rotate: -30 }, { autoAlpha: 1, scale: 1, rotate: 0, duration: 0.5, ease: 'back.out(3)' }, at + 1.25)
      }
      tl.to(balances, { autoAlpha: 1, duration: 0.45 }, '-=0.1')
      return () => flyers.forEach((f) => f.remove())
    },
    { scope, dependencies: [step, lang], revertOnUpdate: true },
  )

  const dayLabel = (d: number) => tr({ fa: `روز ${d}`, en: `Day ${d}` })
  const current = step > 0 ? ENTRIES[step - 1] : null

  const status = (() => {
    if (!current) {
      return tr({
        fa: 'هر رویداد ابتدا در دفتر روزنامه ثبت می‌شود. «انتقال به دفتر کل» یعنی هر سطر آن را به حساب مربوط ببریم و کد حساب را در ستون عطف بنویسیم.',
        en: 'Every transaction is journalised first. Posting copies each line into its ledger account and writes the account number in the Ref. column.',
      })
    }
    const dr = current.lines.find((l) => l.debit)!
    const cr = current.lines.find((l) => l.credit)!
    const drAcc = novaAccountMap.get(dr.account)!
    const crAcc = novaAccountMap.get(cr.account)!
    return tr({
      fa: `${money(dr.debit!)} به سمت بدهکار «${drAcc.name.fa}» و ${money(cr.credit!)} به سمت بستانکار «${crAcc.name.fa}» منتقل شد؛ کدهای ${drAcc.code} و ${crAcc.code} در ستون عطف نوشته شد تا معلوم باشد این سند انتقال یافته است.`,
      en: `${money(dr.debit!)} goes to the debit side of ${drAcc.name.en} and ${money(cr.credit!)} to the credit side of ${crAcc.name.en}. Account numbers ${drAcc.code} and ${crAcc.code} in the Ref. column show the entry has been posted.`,
    })
  })()

  const renderPosting = (p: { txId: string; day: number; amount: number }, side: Side) => (
    <div
      key={lineKey(p.txId, side)}
      data-post={lineKey(p.txId, side)}
      className={cn(
        'flex items-center justify-between gap-1 rounded px-1 py-0.5 text-[11px] tabular sm:text-xs',
        current?.id === p.txId && (side === 'dr' ? 'bg-debit/10' : 'bg-credit/10'),
      )}
    >
      <span className="text-[10px] text-muted-foreground">{num(p.day)}</span>
      <span className="font-semibold">{money(p.amount)}</span>
    </div>
  )

  const renderBalance = (b: AccountBalance) => {
    if (b.totalDebit === 0 && b.totalCredit === 0) return <div className="h-5" />
    const onDebit = b.net >= 0
    const cell = (
      <span className="flex items-center justify-between gap-1 px-1 text-[11px] font-bold tabular sm:text-xs">
        <span className="text-[10px] font-medium text-muted-foreground">{t('table.balance')}</span>
        {money(Math.abs(b.net))}
      </span>
    )
    return (
      <div data-bal={b.account.id} className="mt-1 grid h-5 grid-cols-2 border-t border-dashed pt-0.5">
        <div className={cn('pe-1.5', onDebit ? 'text-debit' : '')}>{onDebit && cell}</div>
        <div className={cn('ps-1.5', !onDebit ? 'text-credit' : '')}>{!onDebit && cell}</div>
      </div>
    )
  }

  return (
    <DiagramFrame
      title={{ fa: 'انتقال از دفتر روزنامه به دفتر کل', en: 'Posting: from the journal to the ledger' }}
      caption={caption}
      badge="interactive"
      onReplay={() => {
        setStep(0)
        replay()
      }}
    >
      <div ref={scope} className="relative">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start lg:gap-6">
          {/* ── General journal (reading-start side) ── */}
          <section data-anim="journal" className="min-w-0 overflow-hidden rounded-xl border bg-background/70">
            <div className="flex items-center gap-2 border-b bg-muted/40 px-3 py-2 text-xs font-semibold sm:text-sm">
              <BookOpen className="size-4 text-primary" />
              {t('lab.journal')}
              <span className="ms-auto text-[11px] font-normal text-muted-foreground">{tr({ fa: 'صفحه 1', en: 'Page 1' })}</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[300px] text-[11px] sm:text-[13px]">
                <thead>
                  <tr className="border-b text-[10px] text-muted-foreground sm:text-[11px]">
                    <th scope="col" className="w-12 px-2 py-1.5 text-start font-medium">
                      {t('table.date')}
                    </th>
                    <th scope="col" className="px-2 py-1.5 text-start font-medium">
                      {tr({ fa: 'شرح حساب‌ها', en: 'Account titles' })}
                    </th>
                    <th scope="col" className="w-12 px-1 py-1.5 text-center font-medium">
                      {tr({ fa: 'عطف', en: 'Ref.' })}
                    </th>
                    <th scope="col" className="px-2 py-1.5 text-end font-medium text-debit">
                      {t('table.debit')}
                    </th>
                    <th scope="col" className="px-2 py-1.5 text-end font-medium text-credit">
                      {t('table.credit')}
                    </th>
                  </tr>
                </thead>
                {ENTRIES.map((tx, i) => {
                  const posted = i < step
                  const isCurrent = i === step - 1
                  return (
                    <tbody
                      key={tx.id}
                      data-entry={tx.id}
                      className={cn(
                        'border-b transition-colors duration-500 last:border-b-0',
                        isCurrent && 'bg-primary/6',
                        i === step && 'bg-gold/8',
                      )}
                    >
                      {tx.lines.map((line, li) => {
                        const side: Side = line.debit ? 'dr' : 'cr'
                        const key = lineKey(tx.id, side)
                        const acc = novaAccountMap.get(line.account)!
                        const amount = line.debit ?? line.credit ?? 0
                        return (
                          <tr key={key}>
                            <td className="px-2 pt-1.5 align-top whitespace-nowrap text-muted-foreground tabular">
                              {li === 0 ? dayLabel(tx.day) : ''}
                            </td>
                            <td className={cn('px-2 pt-1.5', side === 'cr' && 'ps-7')}>{tr(acc.name)}</td>
                            <td className="px-1 pt-1.5 text-center">
                              {posted ? (
                                <span
                                  data-pr={key}
                                  className="inline-flex items-center gap-0.5 rounded bg-primary/12 px-1 text-[10px] font-semibold text-primary tabular"
                                >
                                  <Check className="size-3" aria-hidden />
                                  {digits(acc.code)}
                                </span>
                              ) : (
                                <span className="text-muted-foreground/40" />
                              )}
                            </td>
                            <td className="px-2 pt-1.5 text-end tabular">
                              {side === 'dr' && (
                                <span data-amt={key} className="inline-block font-semibold text-debit">
                                  {money(amount)}
                                </span>
                              )}
                            </td>
                            <td className="px-2 pt-1.5 text-end tabular">
                              {side === 'cr' && (
                                <span data-amt={key} className="inline-block font-semibold text-credit">
                                  {money(amount)}
                                </span>
                              )}
                            </td>
                          </tr>
                        )
                      })}
                      <tr>
                        <td />
                        <td colSpan={4} className="px-2 pt-0.5 pb-2 ps-7 text-[10px] leading-relaxed text-muted-foreground sm:text-[11px]">
                          ({tr(tx.title)})
                        </td>
                      </tr>
                    </tbody>
                  )
                })}
              </table>
            </div>
          </section>

          {/* ── General ledger: T-accounts ── */}
          <section className="min-w-0">
            <div data-anim="ledger-head" className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs font-semibold sm:text-sm">
              <Library className="size-4 text-primary" />
              {t('lab.ledger')}
              <span className="text-[11px] font-normal text-muted-foreground">
                {tr({
                  fa: '(در حساب T، بدهکار سمت راست و بستانکار سمت چپ است)',
                  en: '(in a T-account debits sit on the left, credits on the right)',
                })}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {LEDGER_IDS.map((id) => {
                const b = snapshot.get(id)!
                const acc = b.account
                return (
                  <div key={id} data-anim="t" className="relative rounded-xl border bg-background/70 px-2 pt-2 pb-1.5 sm:px-2.5">
                    <span
                      data-glow={id}
                      aria-hidden
                      className="pointer-events-none absolute -inset-px rounded-xl opacity-0 ring-1 ring-foreground/10 "
                    />
                    <div className="flex items-baseline justify-between gap-1 px-0.5">
                      <span className="truncate text-[11px] font-semibold sm:text-sm">{tr(acc.name)}</span>
                      <span className="shrink-0 text-[10px] text-muted-foreground tabular">{digits(acc.code)}</span>
                    </div>
                    <div className="mt-1 grid grid-cols-2 border-t border-foreground/70">
                      {/* debit side first → reading-start side (right in Persian) */}
                      <div className="min-h-16 space-y-0.5 border-e border-foreground/70 pe-1 pt-1">
                        <div className="px-1 text-[10px] font-medium text-debit">{t('table.debit')}</div>
                        {b.debits.map((p) => renderPosting(p, 'dr'))}
                      </div>
                      <div className="min-h-16 space-y-0.5 ps-1 pt-1">
                        <div className="px-1 text-[10px] font-medium text-credit">{t('table.credit')}</div>
                        {b.credits.map((p) => renderPosting(p, 'cr'))}
                      </div>
                    </div>
                    {renderBalance(b)}
                  </div>
                )
              })}
            </div>
            <p className="mt-2 text-[11px] text-muted-foreground">
              {tr({
                fa: 'برای سادگی، فقط همین سه سند در حساب‌ها نشان داده شده است.',
                en: 'For clarity, only these three entries are shown in the accounts.',
              })}
            </p>
          </section>
        </div>

        {/* status + controls */}
        <div
          aria-live="polite"
          className="mx-auto mt-5 min-h-[72px] max-w-2xl rounded-xl border border-dashed bg-background/60 px-4 py-3 text-center text-sm leading-relaxed"
        >
          {current && (
            <div className="mb-1 text-xs text-muted-foreground">
              {tr({ fa: `سند ${step} از ${total} · ${dayLabel(current.day)}`, en: `Entry ${step} of ${total} · ${dayLabel(current.day)}` })}
            </div>
          )}
          {status}
        </div>
        <div data-anim="ctrl" className="mt-4">
          <StepperControls
            step={step}
            total={total}
            onStep={(s) => setStep(Math.max(0, Math.min(total, s)))}
            nextLabel={tr({ fa: `انتقال سند ${Math.min(step + 1, total)}`, en: `Post entry ${Math.min(step + 1, total)}` })}
          />
        </div>
      </div>
    </DiagramFrame>
  )
}
