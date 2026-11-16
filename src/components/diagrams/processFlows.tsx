import { useEffect, useRef, useState } from 'react'
import {
  Archive,
  BadgeCheck,
  Banknote,
  Boxes,
  ClipboardPen,
  Eye,
  FilePen,
  Handshake,
  HardHat,
  Lock,
  Paperclip,
  Send,
  ShieldCheck,
  Stamp,
  TriangleAlert,
  Undo2,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Factory,
  FilePlus2,
  FileSearch,
  FileText,
  Hammer,
  PackageCheck,
  PackageOpen,
  Recycle,
  ScanSearch,
  Settings2,
  ShoppingCart,
  Siren,
  TrendingDown,
  Truck,
  Warehouse,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

import type { L } from '@/content/types'
import { useI18n } from '@/i18n/I18nProvider'
import { gsap, prefersReducedMotion, useGSAP } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import { DiagramFrame, type DiagramProps } from './DiagramFrame'

type Line = { account: L; side: 'dr' | 'cr' }
type Step = { icon: LucideIcon; title: L; doc: L; module: L; who: L; text: L; posting?: Line[] }

const m = {
  procurement: { fa: 'تدارکات', en: 'Procurement' },
  inventory: { fa: 'انبار و موجودی', en: 'Inventory' },
  finance: { fa: 'مالی', en: 'Finance' },
  eam: { fa: 'مدیریت دارایی و نگهداری', en: 'Asset management' },
  projects: { fa: 'پروژه‌ها و AFE', en: 'Projects and AFE' },
} satisfies Record<string, L>

const dr = (fa: string, en: string): Line => ({ account: { fa, en }, side: 'dr' })
const cr = (fa: string, en: string): Line => ({ account: { fa, en }, side: 'cr' })

type Variant = { label: L; steps: Step[] }

function ProcessFlow({ title, steps: single, variants, caption }: { title: L; steps?: Step[]; variants?: Variant[]; caption?: L }) {
  const { t, tr, num, lang } = useI18n()
  const [variant, setVariant] = useState(0)
  const [active, setActive] = useState(0)
  const [auto, setAuto] = useState(true)
  const scope = useRef<HTMLDivElement>(null)
  const steps = variants ? variants[variant].steps : (single ?? [])

  useEffect(() => {
    if (!auto || prefersReducedMotion()) return
    const id = window.setInterval(() => setActive((a) => (a + 1) % steps.length), 3200)
    return () => window.clearInterval(id)
  }, [auto, steps.length])

  useGSAP(
    () => {
      gsap.to('[data-flow-progress]', { scaleX: (active + 1) / steps.length, duration: 0.6, ease: 'power2.out' })
    },
    { scope, dependencies: [active, variant, lang] },
  )

  const step = steps[Math.min(active, steps.length - 1)]
  const pick = (i: number) => {
    setAuto(false)
    setActive(i)
  }
  const choose = (v: number) => {
    setVariant(v)
    setActive(0)
  }

  const switcher = variants && (
    <div role="tablist" className="flex rounded-full bg-muted p-0.5 text-xs">
      {variants.map((v, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === variant}
          onClick={() => choose(i)}
          className={cn(
            'rounded-full px-3 py-1.5 font-medium transition-colors',
            i === variant ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground',
          )}
        >
          {tr(v.label)}
        </button>
      ))}
    </div>
  )

  return (
    <DiagramFrame
      title={title}
      caption={caption}
      badge="interactive"
      controls={switcher}
      onReplay={() => {
        setActive(0)
        setAuto(true)
      }}
    >
      <div ref={scope}>
        <div className="relative">
          <div className="absolute inset-x-6 top-5 hidden h-0.5 rounded-full bg-muted sm:block" aria-hidden>
            <div data-flow-progress className="h-full origin-left scale-x-0 rounded-full bg-primary rtl:origin-right" />
          </div>
          <ol className="relative grid grid-cols-3 gap-y-4 sm:flex sm:justify-between">
            {steps.map((s, i) => {
              const Icon = s.icon
              const on = i === active
              const done = i < active
              return (
                <li key={i} className="flex flex-col items-center text-center sm:flex-1">
                  <button
                    type="button"
                    onClick={() => pick(i)}
                    aria-label={tr(s.title)}
                    className={cn(
                      'relative z-10 grid size-10 place-items-center rounded-full transition-colors duration-300',
                      on ? 'icon-badge' : done ? 'bg-primary/15 text-primary' : 'bg-muted text-muted-foreground hover:text-foreground',
                    )}
                  >
                    <Icon className="size-[1.1rem]" strokeWidth={1.6} />
                  </button>
                  <span className={cn('mt-2 max-w-[7.5rem] text-[11px] leading-5', on ? 'font-semibold text-foreground' : 'text-muted-foreground')}>
                    {num(i + 1)}. {tr(s.title)}
                  </span>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="mt-6 grid gap-4 rounded-[1.25rem] bg-muted/50 p-5 md:grid-cols-[1.3fr_1fr]">
          <div>
            <div className="text-xs text-muted-foreground">
              {t('diagram.step')} {num(active + 1)} / {num(steps.length)}
            </div>
            <div className="mt-1 text-lg font-semibold text-foreground">{tr(step.title)}</div>
            <p className="mt-2 text-sm leading-7 text-body">{tr(step.text)}</p>
            <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-sm">
              <dt className="text-muted-foreground">{tr({ fa: 'سند در ERP', en: 'ERP document' })}</dt>
              <dd className="font-medium text-foreground">{tr(step.doc)}</dd>
              <dt className="text-muted-foreground">{tr({ fa: 'ماژول', en: 'Module' })}</dt>
              <dd className="text-foreground">{tr(step.module)}</dd>
              <dt className="text-muted-foreground">{tr({ fa: 'مسئول', en: 'Who' })}</dt>
              <dd className="text-foreground">{tr(step.who)}</dd>
            </dl>
          </div>
          <div className="rounded-[1rem] bg-card p-4">
            <div className="mb-2 text-xs font-semibold text-muted-foreground">{tr({ fa: 'ثبت خودکار در مالی', en: 'Automatic Finance posting' })}</div>
            {step.posting?.length ? (
              <ul className="space-y-1.5 text-sm">
                {step.posting.map((p, i) => (
                  <li key={i} className={cn('flex items-baseline gap-2', p.side === 'cr' && 'ps-6')}>
                    <span className={cn('w-14 shrink-0 text-[11px] font-semibold', p.side === 'dr' ? 'text-debit' : 'text-credit')}>
                      {p.side === 'dr' ? t('table.debit') : t('table.credit')}
                    </span>
                    <span className="text-foreground">{tr(p.account)}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                {tr({ fa: 'در این مرحله سند مالی صادر نمی‌شود؛ فقط داده و تأییدها ثبت می‌شوند.', en: 'No financial entry at this step; only data and approvals are recorded.' })}
              </p>
            )}
          </div>
        </div>
      </div>
    </DiagramFrame>
  )
}

/* ───────────────────────── Procure to pay ───────────────────────── */

const P2P: Step[] = [
  {
    icon: FilePlus2,
    title: { fa: 'درخواست خرید', en: 'Purchase requisition' },
    doc: { fa: 'درخواست خرید (PR)', en: 'Purchase requisition (PR)' },
    module: m.procurement,
    who: { fa: 'درخواست‌کننده (مثلاً برنامه‌ریز نگهداری)', en: 'Requester (e.g. maintenance planner)' },
    text: {
      fa: 'نیاز با مشخصات کالا، مقدار، تاریخ نیاز و محل هزینه (مرکز هزینه، چاه یا AFE) ثبت می‌شود. محل هزینه درست، پایه ادعای کاست ریکاوری است.',
      en: 'The need is recorded with the item, quantity, need date and cost object (cost centre, well or AFE). The right cost object is the basis of the cost-recovery claim.',
    },
  },
  {
    icon: FileSearch,
    title: { fa: 'تأمین و مقایسه پیشنهادها', en: 'Sourcing' },
    doc: { fa: 'استعلام و جدول مقایسه پیشنهادها', en: 'RFQ and quotation comparison' },
    module: m.procurement,
    who: { fa: 'کارشناس خرید و تأییدکننده طبق سقف اختیارات', en: 'Buyer and approver per delegation of authority' },
    text: {
      fa: 'از تأمین‌کنندگان واجد صلاحیت استعلام گرفته و پیشنهادها از نظر فنی و تجاری مقایسه می‌شوند.',
      en: 'Qualified suppliers are asked to quote, and the offers are compared technically and commercially.',
    },
  },
  {
    icon: ShoppingCart,
    title: { fa: 'سفارش خرید', en: 'Purchase order' },
    doc: { fa: 'سفارش خرید (PO)', en: 'Purchase order (PO)' },
    module: m.procurement,
    who: { fa: 'کارشناس خرید', en: 'Buyer' },
    text: {
      fa: 'سفارش با قیمت، شرایط تحویل و پرداخت صادر می‌شود و به‌عنوان تعهد روی بودجه یا AFE دیده می‌شود.',
      en: 'The order is issued with price, delivery and payment terms and shows as a commitment against the budget or AFE.',
    },
  },
  {
    icon: PackageCheck,
    title: { fa: 'رسید کالا یا خدمات', en: 'Receipt (GRN or SES)' },
    doc: { fa: 'رسید کالا (GRN) یا برگه ثبت خدمات (SES)', en: 'Goods received note (GRN) or service entry sheet (SES)' },
    module: m.inventory,
    who: { fa: 'انباردار و بازرس کیفیت؛ برای خدمات، مسئول قرارداد', en: 'Storekeeper and inspector; for services, the contract holder' },
    text: {
      fa: 'کالا با رسید کالا (GRN) و خدمات با پذیرش برگه ثبت خدمات (SES) تحویل گرفته می‌شوند. همان لحظه تعهد به هزینه واقعی تبدیل و سند مالی ثبت می‌شود: موجودی یا محل هزینه بدهکار و حساب واسط رسید کالا و فاکتور بستانکار.',
      en: 'Goods are received with a GRN; services are received when the SES is accepted. At that moment the commitment becomes an actual cost and the system posts: inventory or the cost object debited, GR/IR clearing credited.',
    },
    posting: [dr('موجودی کالا (یا هزینه محل مصرف)', 'Inventory (or the cost object)'), cr('حساب واسط رسید کالا و فاکتور (GR/IR)', 'GR/IR clearing')],
  },
  {
    icon: FileText,
    title: { fa: 'تطبیق فاکتور', en: 'Invoice verification' },
    doc: { fa: 'فاکتور فروشنده', en: 'Vendor invoice' },
    module: m.finance,
    who: { fa: 'حسابداری پرداختنی‌ها', en: 'Accounts payable' },
    text: {
      fa: 'فاکتور با سفارش و رسید تطبیق سه‌طرفه داده می‌شود. حساب واسط بسته می‌شود و بدهی به فروشنده ثبت می‌شود.',
      en: 'The invoice is three-way matched to the PO and receipt. The clearing account is closed and the debt to the vendor is recorded.',
    },
    posting: [
      dr('حساب واسط رسید کالا و فاکتور (GR/IR)', 'GR/IR clearing'),
      dr('مالیات بر ارزش افزوده خرید', 'Input VAT'),
      cr('حساب‌های پرداختنی (فروشنده)', 'Accounts payable (vendor)'),
    ],
  },
  {
    icon: Banknote,
    title: { fa: 'پرداخت', en: 'Payment' },
    doc: { fa: 'سند پرداخت', en: 'Payment document' },
    module: m.finance,
    who: { fa: 'خزانه‌داری', en: 'Treasury' },
    text: {
      fa: 'در موعد پرداخت، بدهی تسویه و از حساب بانک پرداخت می‌شود.',
      en: 'On the due date the debt is settled from the bank account.',
    },
    posting: [dr('حساب‌های پرداختنی (فروشنده)', 'Accounts payable (vendor)'), cr('بانک', 'Bank')],
  },
]

/* ───────────────────────── Warehouse ───────────────────────── */

const WAREHOUSE: Step[] = [
  {
    icon: Truck,
    title: { fa: 'دریافت محموله', en: 'Inbound delivery' },
    doc: { fa: 'اعلام ورود بار مرتبط با سفارش', en: 'Inbound delivery against the PO' },
    module: m.inventory,
    who: { fa: 'انباردار', en: 'Storekeeper' },
    text: {
      fa: 'بار با سفارش خرید، بارنامه و فهرست بسته‌بندی مقایسه می‌شود.',
      en: 'The shipment is checked against the purchase order, waybill and packing list.',
    },
  },
  {
    icon: ScanSearch,
    title: { fa: 'رسید و بازرسی', en: 'Receipt and inspection' },
    doc: { fa: 'رسید انبار به موجودی در انتظار بازرسی', en: 'Goods receipt to quality-inspection stock' },
    module: m.inventory,
    who: { fa: 'انباردار و بازرس کیفیت', en: 'Storekeeper and inspector' },
    text: {
      fa: 'کالا رسید می‌شود ولی تا تأیید گواهی‌ها و بازرسی، قابل مصرف نیست.',
      en: 'The goods are received but cannot be used until certificates and inspection are approved.',
    },
    posting: [dr('موجودی کالا', 'Inventory'), cr('حساب واسط رسید کالا و فاکتور (GR/IR)', 'GR/IR clearing')],
  },
  {
    icon: Warehouse,
    title: { fa: 'آزادسازی و چیدمان', en: 'Release and put-away' },
    doc: { fa: 'انتقال از وضعیت بازرسی به موجودی آزاد و قفسه', en: 'Transfer from inspection to unrestricted stock and bin' },
    module: m.inventory,
    who: { fa: 'انباردار', en: 'Storekeeper' },
    text: {
      fa: 'پس از تأیید، کالا در قفسه مشخص قرار می‌گیرد. چون ارزش تغییر نمی‌کند، سند مالی ندارد.',
      en: 'Once approved, the item goes to its bin. The value does not change, so there is no financial entry.',
    },
  },
  {
    icon: Boxes,
    title: { fa: 'نگهداری', en: 'Storage' },
    doc: { fa: 'شمارش دوره‌ای و نگهداری پیشگیرانه', en: 'Cycle counts and preservation' },
    module: m.inventory,
    who: { fa: 'انباردار', en: 'Storekeeper' },
    text: {
      fa: 'کالاهای حساس مثل قطعات دوار و لوله‌های جداری طبق دستورالعمل نگهداری می‌شوند و شمارش می‌شوند.',
      en: 'Sensitive items such as rotating spares and casing are preserved to procedure and counted.',
    },
  },
  {
    icon: ClipboardList,
    title: { fa: 'رزرو', en: 'Reservation' },
    doc: { fa: 'رزرو از دستور کار یا پروژه', en: 'Reservation from a work order or project' },
    module: m.eam,
    who: { fa: 'برنامه‌ریز نگهداری', en: 'Maintenance planner' },
    text: {
      fa: 'کالا برای یک دستور کار یا AFE کنار گذاشته می‌شود تا موقع کار در دسترس باشد.',
      en: 'The item is set aside for a work order or AFE so it is available when the job starts.',
    },
  },
  {
    icon: PackageOpen,
    title: { fa: 'حواله و تحویل', en: 'Goods issue' },
    doc: { fa: 'حواله انبار (GI)', en: 'Goods issue (GI)' },
    module: m.inventory,
    who: { fa: 'انباردار و تحویل‌گیرنده', en: 'Storekeeper and receiver' },
    text: {
      fa: 'کالا تحویل و هزینه به محل مصرف (دستور کار، چاه یا AFE) منتقل می‌شود تا در گزارش کاست ریکاوری دیده شود.',
      en: 'The item is issued and its cost goes to the cost object (work order, well or AFE), so it appears in the cost-recovery report.',
    },
    posting: [dr('هزینه محل مصرف (دستور کار، چاه یا AFE)', 'Cost object (work order, well or AFE)'), cr('موجودی کالا', 'Inventory')],
  },
]

/* ───────────────────────── Asset lifecycle ───────────────────────── */

const ASSET: Step[] = [
  {
    icon: ClipboardCheck,
    title: { fa: 'برنامه‌ریزی', en: 'Plan' },
    doc: { fa: 'طرح توجیهی و AFE', en: 'Business case and AFE' },
    module: m.projects,
    who: { fa: 'مهندسی و مدیریت پروژه', en: 'Engineering and project management' },
    text: {
      fa: 'نیاز، بودجه و مجوز هزینه (AFE) تأیید می‌شود. شرکا هم طبق قرارداد عملیات مشترک آن را تأیید می‌کنند.',
      en: 'The need, budget and authorisation for expenditure (AFE) are approved, by partners too under the joint operating agreement.',
    },
  },
  {
    icon: Factory,
    title: { fa: 'خرید و ساخت', en: 'Acquire or build' },
    doc: { fa: 'سفارش خرید، رسید و هزینه‌های پروژه', en: 'Purchase orders, receipts and project costs' },
    module: m.projects,
    who: { fa: 'تدارکات و پروژه', en: 'Procurement and projects' },
    text: {
      fa: 'هزینه‌ها روی دارایی در جریان ساخت جمع می‌شوند تا دارایی آماده بهره‌برداری شود.',
      en: 'Costs build up on assets under construction until the asset is ready for use.',
    },
    posting: [dr('دارایی در جریان ساخت', 'Assets under construction'), cr('حساب واسط رسید کالا و فاکتور / پرداختنی‌ها', 'GR/IR / payables')],
  },
  {
    icon: Settings2,
    title: { fa: 'راه‌اندازی و ثبت دارایی', en: 'Commission and capitalise' },
    doc: { fa: 'سند انتقال به دارایی ثابت و تعریف تجهیز', en: 'Capitalisation and equipment record' },
    module: m.finance,
    who: { fa: 'حسابداری دارایی و نگهداری', en: 'Asset accounting and maintenance' },
    text: {
      fa: 'دارایی در دفتر دارایی‌های ثابت و همزمان در ساختار تجهیزات نگهداری ثبت می‌شود.',
      en: 'The asset is created in the fixed-asset register and, at the same time, in the maintenance equipment structure.',
    },
    posting: [dr('دارایی ثابت (تجهیزات)', 'Fixed asset (equipment)'), cr('دارایی در جریان ساخت', 'Assets under construction')],
  },
  {
    icon: Wrench,
    title: { fa: 'بهره‌برداری و نگهداری', en: 'Operate and maintain' },
    doc: { fa: 'دستور کار نگهداری', en: 'Maintenance work order' },
    module: m.eam,
    who: { fa: 'بهره‌برداری و نگهداری', en: 'Operations and maintenance' },
    text: {
      fa: 'هزینه قطعات، نیروی کار و پیمانکار روی دستور کار جمع و به محل هزینه منتقل می‌شود.',
      en: 'Parts, labour and contractor costs collect on work orders and settle to the cost object.',
    },
    posting: [dr('هزینه نگهداری (محل هزینه)', 'Maintenance expense (cost object)'), cr('موجودی، حقوق و پرداختنی‌ها', 'Inventory, payroll, payables')],
  },
  {
    icon: TrendingDown,
    title: { fa: 'استهلاک', en: 'Depreciate' },
    doc: { fa: 'اجرای ماهانه استهلاک', en: 'Monthly depreciation run' },
    module: m.finance,
    who: { fa: 'حسابداری دارایی', en: 'Asset accounting' },
    text: {
      fa: 'سیستم هر ماه استهلاک یا استهلاک ذخایر (بر اساس تولید) را محاسبه و ثبت می‌کند.',
      en: 'Each month the system calculates and posts depreciation, or depletion based on production.',
    },
    posting: [dr('هزینه استهلاک', 'Depreciation expense'), cr('استهلاک انباشته', 'Accumulated depreciation')],
  },
  {
    icon: Recycle,
    title: { fa: 'کنارگذاری', en: 'Retire' },
    doc: { fa: 'سند خروج دارایی', en: 'Asset retirement' },
    module: m.finance,
    who: { fa: 'حسابداری دارایی', en: 'Asset accounting' },
    text: {
      fa: 'دارایی فروخته یا اسقاط می‌شود؛ بهای تمام‌شده و استهلاک انباشته حذف و سود یا زیان شناسایی می‌شود.',
      en: 'The asset is sold or scrapped; cost and accumulated depreciation are removed and a gain or loss is recognised.',
    },
    posting: [dr('استهلاک انباشته و زیان فروش', 'Accumulated depreciation and loss'), cr('دارایی ثابت', 'Fixed asset')],
  },
]

/* ───────────────────────── Work order ───────────────────────── */

const WORK_ORDER: Step[] = [
  {
    icon: Siren,
    title: { fa: 'اعلان', en: 'Notification' },
    doc: { fa: 'اعلان خرابی', en: 'Failure notification' },
    module: m.eam,
    who: { fa: 'اپراتور', en: 'Operator' },
    text: {
      fa: 'اپراتور ایستگاه تقویت فشار لرزش غیرعادی کمپرسور را گزارش می‌دهد.',
      en: 'The compressor-station operator reports abnormal compressor vibration.',
    },
  },
  {
    icon: ClipboardList,
    title: { fa: 'برنامه‌ریزی', en: 'Planning' },
    doc: { fa: 'دستور کار با فعالیت‌ها، قطعات و خدمات', en: 'Work order with tasks, parts and services' },
    module: m.eam,
    who: { fa: 'برنامه‌ریز نگهداری', en: 'Maintenance planner' },
    text: {
      fa: 'فعالیت‌ها، ساعت کار، قطعات (رزرو از انبار) و خدمات پیمانکار (درخواست خرید) برنامه‌ریزی می‌شوند.',
      en: 'Tasks, labour hours, parts (reserved from stock) and contractor services (requisitioned) are planned.',
    },
  },
  {
    icon: CheckCircle2,
    title: { fa: 'تأیید', en: 'Approval' },
    doc: { fa: 'گردش کار تأیید', en: 'Approval workflow' },
    module: m.eam,
    who: { fa: 'سرپرست نگهداری', en: 'Maintenance supervisor' },
    text: {
      fa: 'برآورد هزینه طبق سقف اختیارات تأیید و محل هزینه (چاه، ایستگاه یا AFE) قطعی می‌شود.',
      en: 'The cost estimate is approved per authority limits and the cost object (well, station or AFE) is fixed.',
    },
  },
  {
    icon: CalendarClock,
    title: { fa: 'زمان‌بندی', en: 'Scheduling' },
    doc: { fa: 'برنامه هفتگی', en: 'Weekly schedule' },
    module: m.eam,
    who: { fa: 'زمان‌بند', en: 'Scheduler' },
    text: {
      fa: 'کار با توجه به آماده بودن قطعات، نیرو و توقف تولید زمان‌بندی می‌شود.',
      en: 'The job is scheduled around parts availability, crews and production shutdown windows.',
    },
  },
  {
    icon: Hammer,
    title: { fa: 'اجرا', en: 'Execution' },
    doc: { fa: 'حواله قطعه، ثبت ساعت کار و تأیید خدمات', en: 'Goods issue, time confirmation, service entry' },
    module: m.eam,
    who: { fa: 'تکنسین‌ها و پیمانکار', en: 'Technicians and contractor' },
    text: {
      fa: 'هر قطعه و ساعت کار و خدمت مصرف‌شده، هزینه واقعی روی دستور کار ثبت می‌کند.',
      en: 'Every part, hour and service consumed records an actual cost on the work order.',
    },
    posting: [dr('دستور کار نگهداری', 'Maintenance work order'), cr('موجودی، دستمزد جذب‌شده، GR/IR', 'Inventory, absorbed labour, GR/IR')],
  },
  {
    icon: CheckCircle2,
    title: { fa: 'تسویه', en: 'Settlement' },
    doc: { fa: 'تکمیل فنی و تسویه هزینه', en: 'Technical completion and settlement' },
    module: m.finance,
    who: { fa: 'برنامه‌ریز و حسابداری صنعتی', en: 'Planner and cost accounting' },
    text: {
      fa: 'هزینه دستور کار به محل نهایی منتقل می‌شود: هزینه جاری، یا دارایی در جریان ساخت اگر سرمایه‌ای باشد. برچسب قابل بازیافت بودن برای کاست ریکاوری حفظ می‌شود.',
      en: 'The work-order cost settles to its final receiver: operating expense, or assets under construction if capital. The recoverable flag is kept for cost recovery.',
    },
    posting: [dr('هزینه نگهداری (چاه، ایستگاه یا AFE)', 'Maintenance expense (well, station or AFE)'), cr('دستور کار نگهداری', 'Maintenance work order')],
  },
]

/* ───────────────────────── AFE lifecycle ───────────────────────── */

const gr_ir = cr('حساب واسط رسید کالا و فاکتور (GR/IR)', 'GR/IR clearing')

const AFE: Step[] = [
  {
    icon: FilePen,
    title: { fa: 'تهیه AFE', en: 'Prepare' },
    doc: { fa: 'AFE: دامنه کار، برآورد، زمان‌بندی و کدهای هزینه', en: 'AFE: scope, estimate, schedule and cost codes' },
    module: m.projects,
    who: { fa: 'مهندس پروژه و مهندس هزینه', en: 'Project engineer and cost engineer' },
    text: {
      fa: 'برای حفاری چاه AR-07 دامنه کار، برآورد هزینه به تفکیک عناصر WBS (مثلاً AFE-2025-014.02.03 برای لوله جداری)، زمان‌بندی، ذخیره احتیاط و دسته هزینه (توسعه‌ای) برای کاست ریکاوری نوشته می‌شود.',
      en: 'For drilling well AR-07 the AFE states the scope, the estimate by WBS element (e.g. AFE-2025-014.02.03 for casing), the schedule, contingency and the cost category (development) used for cost recovery.',
    },
  },
  {
    icon: Stamp,
    title: { fa: 'تأیید داخلی', en: 'Internal approval' },
    doc: { fa: 'گردش کار تأیید طبق جدول اختیارات', en: 'Approval workflow per delegation of authority' },
    module: m.projects,
    who: { fa: 'مدیر میدان، مالی و مدیرعامل طبق سقف مبلغ', en: 'Asset manager, finance and CEO by value limit' },
    text: {
      fa: 'هر مبلغ تأییدکننده مشخصی دارد. مالی بودجه سالانه، دسته هزینه و قابل بازیافت بودن را کنترل می‌کند.',
      en: 'Each value band has a named approver. Finance checks the annual budget, the cost category and recoverability.',
    },
  },
  {
    icon: Handshake,
    title: { fa: 'تأیید شرکا و دولت', en: 'Partners and government' },
    doc: { fa: 'رأی‌گیری AFE شرکا؛ تأیید دولت یا شرکت ملی نفت در صورت لزوم', en: 'Partner AFE ballot; government or NOC approval where required' },
    module: m.projects,
    who: { fa: 'واحد روابط شرکا (عملیات مشترک)', en: 'Joint-venture / partner relations' },
    text: {
      fa: 'طبق قرارداد عملیات مشترک، AFEهای بالاتر از آستانه قرارداد به تأیید شرکا می‌رسد. در برخی قراردادهای نفتی برنامه کار و بودجه یا هزینه‌ها تأیید دولت را هم لازم دارند.',
      en: 'Under the joint operating agreement, AFEs above the contract threshold go to partners for approval. Some petroleum contracts also require government approval of the work programme, budget or costs.',
    },
  },
  {
    icon: Lock,
    title: { fa: 'آزادسازی بودجه', en: 'Release budget' },
    doc: { fa: 'پروژه و عناصر WBS با بودجه آزادشده و کنترل دسترسی بودجه', en: 'Project and WBS elements with released budget and availability control' },
    module: m.projects,
    who: { fa: 'کنترلر پروژه', en: 'Project controller' },
    text: {
      fa: 'مبلغ تأییدشده به‌عنوان بودجه عناصر WBS بارگذاری و آزاد می‌شود. از این پس هر تعهد با بودجه در دسترس مقایسه می‌شود.',
      en: 'The approved amount is loaded as the budget of the WBS elements and released. From now on every commitment is checked against the available budget.',
    },
  },
  {
    icon: ShoppingCart,
    title: { fa: 'تعهد', en: 'Commit' },
    doc: { fa: 'درخواست خرید، سفارش خرید و سفارش خدمات روی عناصر WBS', en: 'Requisitions, purchase orders and service orders on WBS elements' },
    module: m.procurement,
    who: { fa: 'کارشناس خرید و مسئول قرارداد', en: 'Buyers and contract holders' },
    text: {
      fa: 'سفارش‌ها روی عناصر WBS تعهد ایجاد می‌کنند. تعهد بودجه در دسترس را کم می‌کند ولی هنوز سند حسابداری نیست.',
      en: 'Orders on WBS elements create commitments. A commitment reduces the available budget but is not yet an accounting entry.',
    },
  },
  {
    icon: PackageCheck,
    title: { fa: 'هزینه واقعی', en: 'Actual costs' },
    doc: { fa: 'رسید کالا (GRN)، برگه ثبت خدمات (SES)، حواله انبار و ساعت کار', en: 'GRN, SES, goods issues and timesheets' },
    module: { fa: 'تدارکات، انبار و مالی', en: 'Procurement, inventory and finance' },
    who: { fa: 'انباردار، مسئول قرارداد و حسابداری', en: 'Storekeeper, contract holder and accounting' },
    text: {
      fa: 'با رسید کالا یا پذیرش خدمات، تعهد به هزینه واقعی روی همان عنصر WBS تبدیل می‌شود و گزارش AFE به‌روز می‌شود.',
      en: 'When goods are received or services accepted, the commitment turns into an actual cost on the same WBS element and the AFE report updates.',
    },
    posting: [dr('هزینه پروژه روی عنصر WBS (AFE-2025-014.02.03)', 'Project cost on WBS element (AFE-2025-014.02.03)'), gr_ir],
  },
  {
    icon: TriangleAlert,
    title: { fa: 'AFE تکمیلی', en: 'Supplement' },
    doc: { fa: 'AFE تکمیلی (افزایش مبلغ مجاز)', en: 'Supplementary AFE' },
    module: m.projects,
    who: { fa: 'مدیر پروژه', en: 'Project manager' },
    text: {
      fa: 'اگر برآورد هزینه تا پایان کار بیش از حد مجاز (مثلاً فرضی ۱۰٪) از AFE بیشتر شود، پیش از تعهد جدید، AFE تکمیلی از همان مسیر تأیید می‌شود.',
      en: 'If the estimate at completion is expected to exceed the AFE by more than the allowed tolerance (illustrative: 10%), a supplementary AFE goes through the same approvals before new commitments.',
    },
  },
  {
    icon: Archive,
    title: { fa: 'بستن AFE', en: 'Close-out' },
    doc: { fa: 'گزارش هزینه نهایی و تسویه WBS', en: 'Final cost report and WBS settlement' },
    module: m.finance,
    who: { fa: 'کنترلر پروژه و حسابداری دارایی', en: 'Project controller and asset accounting' },
    text: {
      fa: 'هزینه نهایی در برابر AFE به شرکا گزارش می‌شود، WBS به دارایی تسویه و AFE بسته می‌شود تا هزینه دیگری روی آن ننشیند.',
      en: 'The final cost is reported to partners against the AFE, the WBS settles to assets and the AFE is closed so no further costs can be posted.',
    },
    posting: [dr('دارایی‌های نفت و گاز (چاه AR-07)', 'Oil and gas assets (well AR-07)'), cr('دارایی در جریان ساخت (WBS پروژه)', 'Assets under construction (project WBS)')],
  },
]

/* ───────────────────────── Journal entry workflow ───────────────────────── */

const accrued = { fa: 'هزینه‌های تحقق‌یافته پرداختنی', en: 'Accrued liabilities' }
const power = { fa: 'هزینه برق و آب (مرکز هزینه CC-ARY-PRD)', en: 'Power and water (cost centre CC-ARY-PRD)' }

const JE: Step[] = [
  {
    icon: FilePen,
    title: { fa: 'تهیه', en: 'Prepare' },
    doc: { fa: 'سند دستی، الگو یا سند تکرارشونده (ذخیره موقت)', en: 'Manual, template or recurring entry (parked)' },
    module: m.finance,
    who: { fa: 'حسابدار (تهیه‌کننده)', en: 'Accountant (preparer)' },
    text: {
      fa: 'مثال: هزینه برق این ماه اردوگاه میدان که فاکتورش هنوز نرسیده. مبلغ، حساب‌ها، محل هزینه، برچسب قابل بازیافت، شرح و مرجع وارد و سند به‌صورت موقت ذخیره می‌شود.',
      en: 'Example: the field camp’s power bill for this month has not arrived yet. Amount, accounts, cost object, recoverable flag, text and reference are entered and the entry is parked, not posted.',
    },
  },
  {
    icon: Paperclip,
    title: { fa: 'پیوست مستندات', en: 'Attach support' },
    doc: { fa: 'پیوست: قرائت کنتور، محاسبه و قرارداد', en: 'Attachments: meter reading, calculation, contract' },
    module: m.finance,
    who: { fa: 'تهیه‌کننده', en: 'Preparer' },
    text: {
      fa: 'هر سند دستی باید مستندی داشته باشد که مبلغ را توضیح دهد. برای هزینه‌های قابل بازیافت، همین مستند شاهد حسابرسی شرکا و دولت است.',
      en: 'Every manual entry needs support that explains the amount. For recoverable costs the same support is the evidence for partner and government audits.',
    },
  },
  {
    icon: ShieldCheck,
    title: { fa: 'اعتبارسنجی', en: 'Validate' },
    doc: { fa: 'قواعد اعتبارسنجی و جایگزینی', en: 'Validation and substitution rules' },
    module: m.finance,
    who: { fa: 'سیستم', en: 'System' },
    text: {
      fa: 'سیستم کنترل می‌کند: جمع بدهکار و بستانکار برابر باشد، دوره باز باشد، حساب مسدود نباشد، محل هزینه و برچسب قابل بازیافت جایی که لازم است وارد شده باشد و مبلغ در سقف کاربر باشد.',
      en: 'The ERP checks that debits equal credits, the period is open, accounts are not blocked, a cost object and recoverable flag exist where required, and the amount is within the user’s limit.',
    },
  },
  {
    icon: BadgeCheck,
    title: { fa: 'تأیید', en: 'Approve' },
    doc: { fa: 'گردش کار تهیه‌کننده و تأییدکننده', en: 'Maker-checker approval workflow' },
    module: m.finance,
    who: { fa: 'سرپرست حسابداری یا مدیر مالی طبق سقف مبلغ', en: 'Accounting supervisor or finance manager by value limit' },
    text: {
      fa: 'فرد دیگری سند و مستندات را بررسی و تأیید می‌کند. تهیه‌کننده هیچ‌وقت سند خودش را تأیید نمی‌کند.',
      en: 'A different person reviews the entry and its support and approves it. A preparer never approves their own entry.',
    },
  },
  {
    icon: Send,
    title: { fa: 'ثبت', en: 'Post' },
    doc: { fa: 'سند قطعی با شماره سند و رد حسابرسی', en: 'Posted document with number and audit trail' },
    module: m.finance,
    who: { fa: 'سیستم پس از تأیید', en: 'System, on approval' },
    text: {
      fa: 'پس از تأیید، سند با شماره، کاربر، تاریخ و ساعت در دفتر کل ثبت می‌شود و دیگر قابل ویرایش نیست.',
      en: 'On approval the entry posts to the general ledger with a number, user, date and time, and can no longer be edited.',
    },
    posting: [{ account: power, side: 'dr' }, { account: accrued, side: 'cr' }],
  },
  {
    icon: Eye,
    title: { fa: 'بازبینی', en: 'Review' },
    doc: { fa: 'گزارش بازبینی اسناد دستی', en: 'Manual journal review report' },
    module: m.finance,
    who: { fa: 'کنترلر مالی', en: 'Financial controller' },
    text: {
      fa: 'اسناد دستی پس از ثبت بازبینی می‌شوند: مبالغ بزرگ یا رُند، حساب‌های غیرعادی، ثبت در تعطیلات یا نیمه‌شب و اسناد نزدیک بستن دوره.',
      en: 'Manual entries are reviewed after posting: large or round amounts, unusual accounts, weekend or late-night postings and entries close to period end.',
    },
  },
  {
    icon: Undo2,
    title: { fa: 'برگشت', en: 'Reverse' },
    doc: { fa: 'سند برگشت خودکار در روز اول دوره بعد', en: 'Automatic reversal on the first day of the next period' },
    module: m.finance,
    who: { fa: 'سیستم', en: 'System' },
    text: {
      fa: 'ذخیره هزینه در دوره بعد خودکار برگشت می‌خورد تا با رسیدن فاکتور واقعی، هزینه دو بار ثبت نشود. خطا هم با سند برگشت اصلاح می‌شود، نه با حذف.',
      en: 'The accrual reverses automatically next period, so the cost is not counted twice when the real invoice arrives. Errors are also corrected by reversal, never by deletion.',
    },
    posting: [{ account: accrued, side: 'dr' }, { account: power, side: 'cr' }],
  },
]

/* ───────────────────────── GRN and SES ───────────────────────── */

const ap = cr('حساب‌های پرداختنی (فروشنده)', 'Accounts payable (vendor)')
const pay: Step = {
  icon: Banknote,
  title: { fa: 'پرداخت', en: 'Payment' },
  doc: { fa: 'اجرای پرداخت', en: 'Payment run' },
  module: m.finance,
  who: { fa: 'خزانه‌داری', en: 'Treasury' },
  text: {
    fa: 'در سررسید، بدهی تسویه می‌شود. پرداخت فقط برای فاکتورهای تطبیق‌شده و آزاد انجام می‌شود.',
    en: 'On the due date the payable is settled. Only matched, released invoices are paid.',
  },
  posting: [dr('حساب‌های پرداختنی (فروشنده)', 'Accounts payable (vendor)'), cr('بانک', 'Bank')],
}

const GRN: Step[] = [
  {
    icon: ShoppingCart,
    title: { fa: 'سفارش خرید', en: 'Purchase order' },
    doc: { fa: 'سفارش خرید (PO)', en: 'Purchase order (PO)' },
    module: m.procurement,
    who: { fa: 'کارشناس خرید', en: 'Buyer' },
    text: {
      fa: 'سفارش ۴۰ شاخه لوله جداری ۹⅝ اینچ برای AFE-2025-014.02.03. سفارش تعهد ایجاد می‌کند ولی سند مالی ندارد.',
      en: 'An order for 40 joints of 9⅝-inch casing on AFE-2025-014.02.03. The order creates a commitment but no financial entry.',
    },
  },
  {
    icon: ScanSearch,
    title: { fa: 'تحویل و بازرسی', en: 'Delivery and inspection' },
    doc: { fa: 'بارنامه، گواهی مواد (MTC) و گزارش بازرسی', en: 'Waybill, mill test certificates and inspection report' },
    module: m.inventory,
    who: { fa: 'انباردار و بازرس کیفیت', en: 'Storekeeper and QC inspector' },
    text: {
      fa: 'تعداد و وضعیت کالا کنترل و شماره ذوب روی لوله‌ها با گواهی مواد تطبیق داده می‌شود.',
      en: 'Quantity and condition are checked and the heat numbers on the pipe are matched to the mill test certificates.',
    },
  },
  {
    icon: PackageCheck,
    title: { fa: 'رسید کالا (GRN)', en: 'Goods received note' },
    doc: { fa: 'رسید کالا (GRN) با ارجاع به ردیف سفارش', en: 'GRN referencing the PO line' },
    module: m.inventory,
    who: { fa: 'انباردار', en: 'Storekeeper' },
    text: {
      fa: 'مقدار دریافتی، محل انبار و شماره بچ ثبت می‌شود. همان لحظه سیستم ارزش را به قیمت سفارش ثبت و تعهد باز را کم می‌کند.',
      en: 'Quantity, storage location and batch are recorded. At that moment the system posts the value at PO price and reduces the open commitment.',
    },
    posting: [dr('موجودی کالا (لوله جداری) یا محل هزینه برای اقلام مصرف مستقیم', 'Inventory (casing), or the cost object for direct-charge items'), gr_ir],
  },
  {
    icon: FileText,
    title: { fa: 'فاکتور و تطبیق', en: 'Invoice and match' },
    doc: { fa: 'فاکتور فروشنده؛ تطبیق سه‌طرفه سفارش، GRN و فاکتور', en: 'Vendor invoice; three-way match of PO, GRN and invoice' },
    module: m.finance,
    who: { fa: 'حسابداری پرداختنی‌ها', en: 'Accounts payable' },
    text: {
      fa: 'مقدار و قیمت فاکتور باید در حد مجاز با سفارش و GRN بخواند؛ در غیر این صورت فاکتور برای پرداخت مسدود می‌شود.',
      en: 'Invoice quantity and price must agree with the PO and GRN within tolerance; otherwise the invoice is blocked for payment.',
    },
    posting: [dr('حساب واسط رسید کالا و فاکتور (GR/IR)', 'GR/IR clearing'), dr('مالیات بر ارزش افزوده خرید', 'Input VAT'), ap],
  },
  pay,
]

const SES: Step[] = [
  {
    icon: ShoppingCart,
    title: { fa: 'سفارش خدمات', en: 'Service PO' },
    doc: { fa: 'سفارش خدمات با خطوط خدمت یا سقف مبلغ', en: 'Service PO with service lines or a value limit' },
    module: m.procurement,
    who: { fa: 'کارشناس خرید و مسئول قرارداد', en: 'Buyer and contract holder' },
    text: {
      fa: 'مثال: خدمات لوله‌گذاری جداری با نرخ روزانه، از محل قرارداد چارچوب خدمات چاه، روی AFE-2025-014.02.03. فقط تعهد ایجاد می‌شود.',
      en: 'Example: casing-running services at day rates under the well-services framework agreement, on AFE-2025-014.02.03. Only a commitment is created.',
    },
  },
  {
    icon: HardHat,
    title: { fa: 'انجام کار', en: 'Work performed' },
    doc: { fa: 'برگه کارکرد روزانه امضاشده (field ticket)', en: 'Signed daily field tickets' },
    module: m.projects,
    who: { fa: 'پیمانکار و نماینده کارفرما در سایت', en: 'Contractor crew and company site representative' },
    text: {
      fa: 'نماینده شرکت روی دکل، کارکرد روزانه را امضا می‌کند: روزها، نفرات، تجهیزات و مواد مصرفی.',
      en: 'The company representative on the rig signs the daily tickets: days, crew, equipment and consumables.',
    },
  },
  {
    icon: ClipboardPen,
    title: { fa: 'ثبت SES', en: 'Enter SES' },
    doc: { fa: 'برگه ثبت خدمات (SES) با پیوست برگه‌های کارکرد', en: 'Service entry sheet (SES) with tickets attached' },
    module: m.procurement,
    who: { fa: 'پیمانکار یا کاربر مسئول قرارداد', en: 'Contractor or contract user' },
    text: {
      fa: 'خدمات انجام‌شده با مقدار و نرخ هر خط سفارش ثبت می‌شود. ثبت SES هنوز سند مالی ایجاد نمی‌کند.',
      en: 'The services performed are entered with quantities and rates per PO line. Entering an SES does not post anything yet.',
    },
  },
  {
    icon: BadgeCheck,
    title: { fa: 'پذیرش SES', en: 'Accept SES' },
    doc: { fa: 'پذیرش SES در گردش کار تأیید', en: 'SES acceptance in the approval workflow' },
    module: m.procurement,
    who: { fa: 'مسئول قرارداد (غیر از ثبت‌کننده) طبق سقف اختیار', en: 'Contract holder (not the person who entered it), within authority' },
    text: {
      fa: 'پذیرش SES معادل رسید کالا برای خدمات است: تعهد به هزینه واقعی روی عنصر WBS تبدیل می‌شود.',
      en: 'Accepting the SES is the services equivalent of a goods receipt: the commitment turns into an actual cost on the WBS element.',
    },
    posting: [dr('هزینه خدمات روی WBS (AFE-2025-014.02.03)', 'Service cost on WBS (AFE-2025-014.02.03)'), gr_ir],
  },
  {
    icon: FileText,
    title: { fa: 'فاکتور و تطبیق', en: 'Invoice and match' },
    doc: { fa: 'فاکتور پیمانکار؛ تطبیق سفارش، SES و فاکتور', en: 'Contractor invoice; match of PO, SES and invoice' },
    module: m.finance,
    who: { fa: 'حسابداری پرداختنی‌ها', en: 'Accounts payable' },
    text: {
      fa: 'فاکتور فقط تا مبلغ SES پذیرفته‌شده قابل پرداخت است. سپرده حسن انجام کار طبق قرارداد کسر می‌شود.',
      en: 'The invoice can be paid only up to the accepted SES value. Retention is withheld as the contract requires.',
    },
    posting: [
      dr('حساب واسط رسید کالا و فاکتور (GR/IR)', 'GR/IR clearing'),
      dr('مالیات بر ارزش افزوده خرید', 'Input VAT'),
      ap,
      cr('سپرده حسن انجام کار پرداختنی', 'Retention payable'),
    ],
  },
  pay,
]

export function P2PFlow({ caption }: DiagramProps) {
  return <ProcessFlow title={{ fa: 'چرخه از درخواست تا پرداخت در ERP', en: 'Procure-to-pay in the ERP' }} steps={P2P} caption={caption} />
}
export function WarehouseFlow({ caption }: DiagramProps) {
  return <ProcessFlow title={{ fa: 'گردش کالا در انبار', en: 'How materials move through the warehouse' }} steps={WAREHOUSE} caption={caption} />
}
export function AssetLifecycle({ caption }: DiagramProps) {
  return <ProcessFlow title={{ fa: 'چرخه عمر دارایی و ماژول‌های ERP', en: 'Asset lifecycle across ERP modules' }} steps={ASSET} caption={caption} />
}
export function WorkOrderFlow({ caption }: DiagramProps) {
  return <ProcessFlow title={{ fa: 'چرخه دستور کار نگهداری', en: 'Maintenance work-order lifecycle' }} steps={WORK_ORDER} caption={caption} />
}
export function AfeLifecycle({ caption }: DiagramProps) {
  return <ProcessFlow title={{ fa: 'چرخه عمر AFE در ERP', en: 'The AFE lifecycle in the ERP' }} steps={AFE} caption={caption} />
}
export function JournalWorkflow({ caption }: DiagramProps) {
  return <ProcessFlow title={{ fa: 'گردش کار سند حسابداری دستی', en: 'Manual journal entry workflow' }} steps={JE} caption={caption} />
}
export function GrnSesFlow({ caption }: DiagramProps) {
  return (
    <ProcessFlow
      title={{ fa: 'رسید کالا (GRN) و برگه ثبت خدمات (SES)', en: 'Goods received note (GRN) and service entry sheet (SES)' }}
      variants={[
        { label: { fa: 'کالا (GRN)', en: 'Goods (GRN)' }, steps: GRN },
        { label: { fa: 'خدمات (SES)', en: 'Services (SES)' }, steps: SES },
      ]}
      caption={caption}
    />
  )
}
