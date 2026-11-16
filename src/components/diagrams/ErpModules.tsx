import { useEffect, useState } from 'react'
import { Boxes, Building2, Calculator, FolderKanban, Fuel, ReceiptText, Users, type LucideIcon } from 'lucide-react'

import type { L } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'
import { prefersReducedMotion } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import { DiagramFrame, type DiagramProps } from './DiagramFrame'

type Mod = { icon: LucideIcon; name: L; toFinance: L; links: L; recovery: L }

const MODULES: Mod[] = [
  {
    icon: ReceiptText,
    name: { fa: 'تدارکات', en: 'Procurement' },
    toFinance: {
      fa: 'رسید کالا حساب واسط GR/IR را بستانکار می‌کند و فاکتور تأییدشده بدهی به فروشنده را ثبت می‌کند.',
      en: 'Goods receipts credit the GR/IR clearing account and approved invoices record the debt to the vendor.',
    },
    links: { fa: 'درخواست خرید را از انبار و نگهداری می‌گیرد و کالا را به انبار تحویل می‌دهد.', en: 'Takes requisitions from inventory and maintenance and delivers goods to the warehouse.' },
    recovery: { fa: 'محل هزینه (چاه یا AFE) روی درخواست و سفارش ثبت می‌شود.', en: 'The cost object (well or AFE) is set on the requisition and order.' },
  },
  {
    icon: Boxes,
    name: { fa: 'انبار و موجودی', en: 'Inventory' },
    toFinance: {
      fa: 'هر رسید، حواله، انتقال و اختلاف شمارش، موجودی کالا را در دفتر کل تغییر می‌دهد.',
      en: 'Every receipt, issue, transfer and count difference changes inventory in the general ledger.',
    },
    links: { fa: 'از تدارکات کالا می‌گیرد و به دستور کارها و پروژه‌ها حواله می‌دهد.', en: 'Receives goods from procurement and issues to work orders and projects.' },
    recovery: { fa: 'حواله به چاه یا AFE، مصرف را قابل ردیابی و قابل ادعا می‌کند.', en: 'Issues to a well or AFE make consumption traceable and claimable.' },
  },
  {
    icon: Building2,
    name: { fa: 'مدیریت دارایی و نگهداری', en: 'Asset management' },
    toFinance: {
      fa: 'هزینه دستور کارها به محل هزینه یا دارایی در جریان ساخت تسویه می‌شود.',
      en: 'Work-order costs settle to cost objects or to assets under construction.',
    },
    links: { fa: 'از انبار قطعه رزرو می‌کند و برای خدمات درخواست خرید می‌سازد.', en: 'Reserves parts from stock and raises requisitions for services.' },
    recovery: { fa: 'هزینه نگهداری هر تجهیز با برچسب قابل بازیافت ثبت می‌شود.', en: 'Maintenance cost per equipment is captured with a recoverable flag.' },
  },
  {
    icon: FolderKanban,
    name: { fa: 'پروژه‌ها و AFE', en: 'Projects and AFE' },
    toFinance: {
      fa: 'هزینه‌های سرمایه‌ای روی پروژه جمع و در پایان به دارایی ثابت منتقل می‌شود.',
      en: 'Capital costs collect on projects and move to fixed assets when complete.',
    },
    links: { fa: 'بودجه و تعهدات خرید را کنترل می‌کند و برای شرکا گزارش AFE می‌دهد.', en: 'Controls budget and purchase commitments and reports AFEs to partners.' },
    recovery: { fa: 'هزینه‌ها بر اساس دسته اکتشاف، توسعه یا بهره‌برداری طبقه‌بندی می‌شوند.', en: 'Costs are classified as exploration, development or operating.' },
  },
  {
    icon: Users,
    name: { fa: 'منابع انسانی و حقوق', en: 'HR and payroll' },
    toFinance: {
      fa: 'سند حقوق، هزینه حقوق، کسور و بدهی‌های مرتبط را ثبت می‌کند.',
      en: 'The payroll run posts salary expense, deductions and related liabilities.',
    },
    links: { fa: 'نرخ ساعت کار را برای دستور کارها و پروژه‌ها فراهم می‌کند.', en: 'Provides labour rates for work orders and projects.' },
    recovery: { fa: 'هزینه نیروی کار طبق ساعت ثبت‌شده به میدان و پروژه تخصیص می‌یابد.', en: 'Labour cost is allocated to the field and projects from recorded hours.' },
  },
  {
    icon: Fuel,
    name: { fa: 'تولید و صورت‌حساب شرکا', en: 'Production and partner billing' },
    toFinance: {
      fa: 'فروش تولید، سهم شرکا و صورت‌حساب‌های عملیات مشترک در مالی ثبت می‌شود.',
      en: 'Production sales, partner shares and joint-venture billings are recorded in Finance.',
    },
    links: { fa: 'با حسابداری عملیات مشترک برای فراخوان وجه و صورت‌حساب شرکا کار می‌کند.', en: 'Works with joint-venture accounting for cash calls and partner billing.' },
    recovery: { fa: 'تولید، مبنای محاسبه نفت هزینه و نفت سود است.', en: 'Production is the basis for cost oil and profit oil.' },
  },
]

export default function ErpModules({ caption }: DiagramProps) {
  const { tr } = useI18n()
  const [active, setActive] = useState(0)
  const [auto, setAuto] = useState(true)

  useEffect(() => {
    if (!auto || prefersReducedMotion()) return
    const id = window.setInterval(() => setActive((a) => (a + 1) % MODULES.length), 3500)
    return () => window.clearInterval(id)
  }, [auto])

  const mod = MODULES[active]
  const Icon = mod.icon

  return (
    <DiagramFrame
      title={{ fa: 'نقشه ماژول‌های ERP و ارتباط با مالی', en: 'ERP modules and how they feed Finance' }}
      caption={caption}
      badge="interactive"
      onReplay={() => {
        setActive(0)
        setAuto(true)
      }}
    >
      <div className="flex flex-col items-center">
        <div className="icon-badge flex items-center gap-2.5 px-5 py-3">
          <Calculator className="size-5" strokeWidth={1.6} />
          <span className="font-semibold">{tr({ fa: 'مالی (دفتر کل)', en: 'Finance (general ledger)' })}</span>
        </div>
        <div className="h-6 w-px bg-border" aria-hidden />
        <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3">
          {MODULES.map((x, i) => {
            const XIcon = x.icon
            const on = i === active
            return (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setAuto(false)
                  setActive(i)
                }}
                className={cn(
                  'flex items-center gap-2.5 rounded-[1rem] px-3 py-3 text-start text-sm transition-colors duration-300',
                  on ? 'bg-primary/10 font-semibold text-foreground' : 'bg-muted/50 text-body hover:bg-muted',
                )}
              >
                <span className={cn('grid size-8 shrink-0 place-items-center rounded-full', on ? 'icon-badge' : 'bg-card text-muted-foreground')}>
                  <XIcon className="size-4" strokeWidth={1.6} />
                </span>
                {tr(x.name)}
              </button>
            )
          })}
        </div>

        <div className="mt-5 w-full rounded-[1.25rem] bg-muted/50 p-5">
          <div className="flex items-center gap-2.5">
            <Icon className="size-5 text-primary" strokeWidth={1.6} />
            <span className="font-semibold text-foreground">{tr(mod.name)}</span>
          </div>
          <dl className="mt-3 space-y-3 text-sm leading-7">
            <div>
              <dt className="text-xs font-semibold text-muted-foreground">{tr({ fa: 'به مالی چه می‌فرستد', en: 'What it sends to Finance' })}</dt>
              <dd className="text-body">{tr(mod.toFinance)}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-muted-foreground">{tr({ fa: 'ارتباط با ماژول‌های دیگر', en: 'Links with other modules' })}</dt>
              <dd className="text-body">{tr(mod.links)}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-muted-foreground">{tr({ fa: 'نقش در کاست ریکاوری', en: 'Role in cost recovery' })}</dt>
              <dd className="text-body">{tr(mod.recovery)}</dd>
            </div>
          </dl>
        </div>
      </div>
    </DiagramFrame>
  )
}
