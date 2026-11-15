/**
 * Canonical data for the running example used throughout the course:
 * «استودیو طراحی نوا» / Nova Design Studio، a service business owned by Sara.
 * Lessons, diagrams and the Ledger Lab all use these exact figures.
 */
import type { AccountDef, Tx } from '@/lib/ledger'

export const novaAccounts: AccountDef[] = [
  { id: 'cash', code: '1010', type: 'asset', current: true, name: { fa: 'موجودی نقد', en: 'Cash' } },
  { id: 'ar', code: '1020', type: 'asset', current: true, name: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' } },
  { id: 'supplies', code: '1030', type: 'asset', current: true, name: { fa: 'ملزومات', en: 'Supplies' } },
  { id: 'prepaid', code: '1040', type: 'asset', current: true, name: { fa: 'پیش‌پرداخت بیمه', en: 'Prepaid insurance' } },
  { id: 'equipment', code: '1510', type: 'asset', current: false, name: { fa: 'تجهیزات', en: 'Equipment' } },
  {
    id: 'accdep',
    code: '1520',
    type: 'asset',
    current: false,
    contra: true,
    name: { fa: 'استهلاک انباشته تجهیزات', en: 'Accumulated depreciation' },
  },
  { id: 'ap', code: '2010', type: 'liability', current: true, name: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' } },
  { id: 'salpay', code: '2020', type: 'liability', current: true, name: { fa: 'حقوق پرداختنی', en: 'Salaries payable' } },
  { id: 'intpay', code: '2030', type: 'liability', current: true, name: { fa: 'بهره پرداختنی', en: 'Interest payable' } },
  { id: 'unearned', code: '2040', type: 'liability', current: true, name: { fa: 'پیش‌دریافت درآمد', en: 'Unearned revenue' } },
  { id: 'loan', code: '2510', type: 'liability', current: false, name: { fa: 'وام پرداختنی', en: 'Loan payable' } },
  { id: 'capital', code: '3010', type: 'equity', name: { fa: 'سرمایه سارا', en: 'Capital (Sara)' } },
  { id: 'drawings', code: '3020', type: 'equity', drawings: true, name: { fa: 'برداشت سارا', en: 'Drawings (Sara)' } },
  { id: 'incsum', code: '3900', type: 'equity', clearing: true, name: { fa: 'خلاصه سود و زیان', en: 'Income summary' } },
  { id: 'revenue', code: '4010', type: 'revenue', name: { fa: 'درآمد خدمات', en: 'Service revenue' } },
  { id: 'rent', code: '5010', type: 'expense', name: { fa: 'هزینه اجاره', en: 'Rent expense' } },
  { id: 'salaries', code: '5020', type: 'expense', name: { fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' } },
  { id: 'suppexp', code: '5030', type: 'expense', name: { fa: 'هزینه ملزومات', en: 'Supplies expense' } },
  { id: 'insexp', code: '5040', type: 'expense', name: { fa: 'هزینه بیمه', en: 'Insurance expense' } },
  { id: 'depexp', code: '5050', type: 'expense', name: { fa: 'هزینه استهلاک', en: 'Depreciation expense' } },
  { id: 'intexp', code: '5060', type: 'expense', name: { fa: 'هزینه بهره', en: 'Interest expense' } },
  { id: 'utilities', code: '5070', type: 'expense', name: { fa: 'هزینه آب، برق و اینترنت', en: 'Utilities expense' } },
  { id: 'advert', code: '5080', type: 'expense', name: { fa: 'هزینه تبلیغات', en: 'Advertising expense' } },
]

export const novaAccountMap = new Map(novaAccounts.map((a) => [a.id, a]))

const tx = (id: string, day: number, fa: string, en: string, dr: string, cr: string, amount: number, kind: Tx['kind'] = 'regular'): Tx => ({
  id,
  day,
  kind,
  title: { fa, en },
  lines: [
    { account: dr, debit: amount },
    { account: cr, credit: amount },
  ],
})

/** The 12 transactions of the month. */
export const novaTransactions: Tx[] = [
  tx('t1', 1, 'سارا ۵۰٬۰۰۰ وجه نقد در کسب‌وکار سرمایه‌گذاری می‌کند', 'Sara invests 50,000 cash in the business', 'cash', 'capital', 50000),
  tx('t2', 2, 'دریافت وام بانکی ۱۵٬۰۰۰ با بهره سالانه ۱۲٪', 'Takes a 15,000 bank loan at 12% a year', 'cash', 'loan', 15000),
  tx('t3', 3, 'خرید نقدی تجهیزات به مبلغ ۲۰٬۰۰۰', 'Buys equipment for 20,000 cash', 'equipment', 'cash', 20000),
  tx('t4', 4, 'خرید نسیه ملزومات به مبلغ ۳٬۰۰۰', 'Buys 3,000 of supplies on account', 'supplies', 'ap', 3000),
  tx('t5', 5, 'پرداخت ۱٬۲۰۰ بابت بیمه ۱۲ ماهه', 'Pays 1,200 for a 12-month insurance policy', 'prepaid', 'cash', 1200),
  tx('t6', 8, 'دریافت نقدی ۸٬۰۰۰ بابت ارائه خدمات', 'Earns 8,000 of service revenue in cash', 'cash', 'revenue', 8000),
  tx('t7', 12, 'ارائه خدمات نسیه به مبلغ ۴٬۰۰۰', 'Performs 4,000 of services on account', 'ar', 'revenue', 4000),
  tx('t8', 15, 'پرداخت اجاره ماه به مبلغ ۲٬۵۰۰', 'Pays 2,500 rent for the month', 'rent', 'cash', 2500),
  tx('t9', 20, 'پرداخت حقوق کارکنان به مبلغ ۳٬۰۰۰', 'Pays 3,000 of salaries', 'salaries', 'cash', 3000),
  tx('t10', 24, 'وصول ۲٬۵۰۰ از مشتریان', 'Collects 2,500 from customers', 'cash', 'ar', 2500),
  tx('t11', 27, 'پرداخت ۱٬۵۰۰ به تأمین‌کننده', 'Pays 1,500 to the supplier', 'ap', 'cash', 1500),
  tx('t12', 30, 'برداشت ۱٬۰۰۰ توسط سارا برای مصارف شخصی', 'Sara withdraws 1,000 for personal use', 'drawings', 'cash', 1000),
]

/** Month-end adjusting entries (Day 30). */
export const novaAdjustments: Tx[] = [
  tx('a1', 30, 'منقضی شدن یک ماه بیمه (۱۰۰)', 'One month of insurance expires (100)', 'insexp', 'prepaid', 100, 'adjusting'),
  tx('a2', 30, 'مصرف ملزومات؛ موجودی شمارش‌شده ۱٬۸۰۰', 'Supplies used: 1,800 counted on hand', 'suppexp', 'supplies', 1200, 'adjusting'),
  tx('a3', 30, 'استهلاک ماهانه تجهیزات (۳۰۰)', 'Monthly depreciation of equipment (300)', 'depexp', 'accdep', 300, 'adjusting'),
  tx('a4', 30, 'حقوق تحقق‌یافته پرداخت‌نشده (۶۰۰)', 'Salaries earned but unpaid (600)', 'salaries', 'salpay', 600, 'adjusting'),
  tx('a5', 30, 'خدمات ارائه‌شده صورت‌حساب‌نشده (۷۰۰)', 'Services performed, not yet billed (700)', 'ar', 'revenue', 700, 'adjusting'),
  tx('a6', 30, 'بهره تحقق‌یافته وام (۱۵۰)', 'Interest accrued on the loan (150)', 'intexp', 'intpay', 150, 'adjusting'),
]

/** Extra events available in the Lab (not part of the textbook month). */
export const labExtras: Tx[] = [
  tx('x1', 18, 'دریافت ۱٬۸۰۰ پیش‌پرداخت از مشتری برای پروژه آینده', 'Receives a 1,800 advance from a client for future work', 'cash', 'unearned', 1800),
  tx('x2', 22, 'پرداخت ۴۰۰ قبض آب، برق و اینترنت', 'Pays 400 for utilities', 'utilities', 'cash', 400),
  tx('x3', 25, 'تبلیغات نسیه به مبلغ ۶۰۰', 'Runs 600 of advertising on account', 'advert', 'ap', 600),
]

export const novaKeyFigures = {
  unadjustedTB: 78500,
  adjustedTB: 80250,
  postClosingTB: 71400,
  revenue: 12700,
  expenses: 7850,
  netIncome: 4850,
  endingCapital: 53850,
  totalAssets: 71100,
  totalLiabilities: 17250,
  cash: 46300,
}
