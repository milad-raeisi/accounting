import type { Currency, IconName, L, Tone } from './types'

export type CourseId = 'accounting' | 'budget' | 'procurement' | 'warehouse' | 'assets'

export type Course = {
  id: CourseId
  order: number
  title: L
  summary: L
  /** the ERP module this course maps to */
  erp: L
  icon: IconName
  tone: Tone
  /** default unit for amounts in this course's lessons */
  currency: Currency
}

/** Daftar teaches the modules of an ERP for the oil and gas industry: one course per module. */
const courseList: Course[] = [
  {
    id: 'accounting',
    currency: 'toman',
    order: 1,
    icon: 'Scale',
    tone: 'primary',
    title: { fa: 'حسابداری مالی', en: 'Financial accounting' },
    erp: { fa: 'ماژول مالی', en: 'Finance module' },
    summary: {
      fa: 'از معادله حسابداری تا صورت‌های مالی، حسابداری نفت و گاز، عملیات مشترک و کاست ریکاوری.',
      en: 'From the accounting equation to financial statements, oil and gas accounting, joint operations and cost recovery.',
    },
  },
  {
    id: 'budget',
    currency: 'usd',
    order: 2,
    icon: 'FileSpreadsheet',
    tone: 'gold',
    title: { fa: 'بودجه، پروژه و AFE', en: 'Budgets, projects and AFE' },
    erp: { fa: 'ماژول بودجه و کنترل پروژه', en: 'Budget and project control module' },
    summary: {
      fa: 'بودجه سالانه، ساختار شکست کار (WBS)، کدهای هزینه، AFE، تعهدات، کنترل بودجه و گزارش انحراف.',
      en: 'Annual budgets, work breakdown structures, cost codes, AFEs, commitments, budget control and variance reporting.',
    },
  },
  {
    id: 'warehouse',
    currency: 'usd',
    order: 4,
    icon: 'Boxes',
    tone: 'gold',
    title: { fa: 'انبارداری و کنترل موجودی', en: 'Warehousing and inventory control' },
    erp: { fa: 'ماژول انبار و موجودی', en: 'Inventory and warehouse module' },
    summary: {
      fa: 'کدینگ کالا، رسید و حواله، شمارش، برنامه‌ریزی موجودی و ارتباط انبار با مالی.',
      en: 'Material master, receipts and issues, counting, replenishment and the link to finance.',
    },
  },
  {
    id: 'assets',
    currency: 'usd',
    order: 5,
    icon: 'Building2',
    tone: 'asset',
    title: { fa: 'مدیریت دارایی‌ها و نگهداری', en: 'Asset management and maintenance' },
    erp: { fa: 'ماژول مدیریت دارایی و نگهداری (EAM)', en: 'Enterprise asset management (EAM) module' },
    summary: {
      fa: 'ساختار دارایی‌ها، راهبردهای نگهداری، دستور کار، شاخص‌های قابلیت اطمینان و حسابداری دارایی.',
      en: 'Asset hierarchy, maintenance strategies, work orders, reliability KPIs and asset accounting.',
    },
  },
  {
    id: 'procurement',
    currency: 'usd',
    order: 3,
    icon: 'ReceiptText',
    tone: 'revenue',
    title: { fa: 'تدارکات و خرید', en: 'Procurement' },
    erp: { fa: 'ماژول تدارکات (از درخواست تا پرداخت)', en: 'Procurement module (procure-to-pay)' },
    summary: {
      fa: 'درخواست خرید، تأمین‌کنندگان، مناقصه، سفارش خرید، دریافت کالا و تطبیق فاکتور.',
      en: 'Requisitions, suppliers, tenders, purchase orders, receipt and invoice matching.',
    },
  },
]

/** Courses in display order. */
export const courses: Course[] = [...courseList].sort((a, b) => a.order - b.order)

export const courseById = new Map(courses.map((c) => [c.id, c]))

export const isCourseId = (v: string | undefined): v is CourseId => Boolean(v && courseById.has(v as CourseId))
