import type { L, Lesson } from '../types'

/* Account titles for the running example (Nova Design Studio), as in nova.ts. */
const ac = {
  cash: { fa: 'موجودی نقد', en: 'Cash' },
  ar: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' },
  supplies: { fa: 'ملزومات', en: 'Supplies' },
  prepaidInsurance: { fa: 'پیش‌پرداخت بیمه', en: 'Prepaid insurance' },
  equipment: { fa: 'تجهیزات', en: 'Equipment' },
  accDep: { fa: 'استهلاک انباشته تجهیزات', en: 'Accumulated depreciation' },
  ap: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
  salariesPayable: { fa: 'حقوق پرداختنی', en: 'Salaries payable' },
  interestPayable: { fa: 'بهره پرداختنی', en: 'Interest payable' },
  unearned: { fa: 'پیش‌دریافت درآمد', en: 'Unearned revenue' },
  loan: { fa: 'وام پرداختنی', en: 'Loan payable' },
  capital: { fa: 'سرمایه سارا', en: 'Capital (Sara)' },
  drawings: { fa: 'برداشت سارا', en: 'Drawings (Sara)' },
  revenue: { fa: 'درآمد خدمات', en: 'Service revenue' },
  rent: { fa: 'هزینه اجاره', en: 'Rent expense' },
  salaries: { fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' },
  suppliesExp: { fa: 'هزینه ملزومات', en: 'Supplies expense' },
  insuranceExp: { fa: 'هزینه بیمه', en: 'Insurance expense' },
  depExp: { fa: 'هزینه استهلاک', en: 'Depreciation expense' },
  interestExp: { fa: 'هزینه بهره', en: 'Interest expense' },
}

/* Accounts used by the other (non-Nova) businesses in examples and exercises. */
const gx = {
  capital: { fa: 'سرمایه', en: 'Capital' },
  drawings: { fa: 'برداشت', en: 'Drawings' },
  prepaidRent: { fa: 'پیش‌پرداخت اجاره', en: 'Prepaid rent' },
  interestReceivable: { fa: 'سود سپرده دریافتنی', en: 'Interest receivable' },
  interestRevenue: { fa: 'درآمد سود سپرده', en: 'Interest revenue' },
  utilities: { fa: 'هزینه آب، برق و گاز', en: 'Utilities expense' },
  accruedPayable: { fa: 'هزینه‌های پرداختنی', en: 'Accrued expenses payable' },
  accDep: { fa: 'استهلاک انباشته', en: 'Accumulated depreciation' },
  designRevenue: { fa: 'درآمد خدمات طراحی', en: 'Design revenue' },
}

const day = (n: number): L => ({ fa: `روز ${n}`, en: `Day ${n}` })
const year = (n: number): L => ({ fa: `سال ${n}`, en: `Year ${n}` })
/** Same text in both languages (account codes). */
const same = (s: string): L => ({ fa: s, en: s })
/** Item label such as (الف) / (a). */
const tag = (fa: string, en: string): L => ({ fa: `(${fa})`, en: `(${en})` })
/** Empty table cell. */
const blank: L = { fa: '', en: '' }
const totals: L = { fa: 'جمع', en: 'Totals' }

export const lesson: Lesson = {
  slug: 'adjusting-entries',
  number: 8,
  level: 'intermediate',
  minutes: 38,
  icon: 'CalendarClock',
  tone: 'expense',
  title: { fa: 'ثبت‌های اصلاحی', en: 'Adjusting Entries' },
  summary: {
    fa: 'دفاتر را در پایان دوره به‌روز کنید: مبنای تعهدی و اصل تطابق را بشناسید، چهار نوع ثبت اصلاحی و استهلاک را با مثال‌های متعدد بیاموزید و تراز آزمایشی نوا را به تراز آزمایشی پس از اصلاحات تبدیل کنید.',
    en: 'Bring the books up to date at period-end: understand accrual accounting and the matching principle, master the four types of adjustments and depreciation through many worked examples, and turn Nova’s unadjusted trial balance into an adjusted one.',
  },
  objectives: [
    { fa: 'توضیح دهید چرا در مبنای تعهدی به ثبت‌های اصلاحی نیاز داریم', en: 'Explain why adjusting entries are needed under the accrual basis' },
    { fa: 'حسابداری بر مبنای نقدی و مبنای تعهدی را مقایسه کنید', en: 'Contrast cash-basis and accrual-basis accounting' },
    {
      fa: 'چهار نوع ثبت اصلاحی را تشخیص دهید، مبلغ هر کدام را محاسبه و ثبت کنید',
      en: 'Identify the four types of adjusting entries, compute each amount and record it',
    },
    {
      fa: 'استهلاک را به روش خط مستقیم و نزولی مضاعف محاسبه و ثبت کنید',
      en: 'Compute and record depreciation by the straight-line and double-declining-balance methods',
    },
    {
      fa: 'مجموعه کامل ثبت‌های اصلاحی پایان ماه را تهیه و تراز آزمایشی پس از اصلاحات را تنظیم کنید',
      en: 'Prepare a full set of month-end adjustments and the adjusted trial balance',
    },
  ],
  sections: [
    {
      id: 'why-adjust',
      title: { fa: 'چرا ثبت اصلاحی لازم است؟', en: 'Why Adjust?' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'روز 30 است. تراز آزمایشی نوا متوازن است و سود ماه 6,500 به نظر می‌رسد. اما سارا می‌داند چند چیز هنوز در دفاتر نیامده است: یک ماه از بیمه گذشته، بخشی از ملزومات مصرف شده، تجهیزات کار کرده‌اند، بهره وام انباشته شده و کارکنان چند روز کار کرده‌اند که حقوقش هنوز پرداخت نشده. اگر این‌ها نادیده گرفته شوند، سود ماه 1,650 بیشتر از واقع گزارش می‌شود.',
            en: 'It is Day 30. Nova’s trial balance balances and the month’s profit looks like 6,500. But Sara knows several things have not reached the books: a month of insurance has passed, some supplies are used up, the equipment has been working, interest has built up on the loan, and staff have worked days that have not been paid yet. Ignore them and the month’s profit is overstated by 1,650.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'برخی رویدادها با مدرک مثبته همراه نیستند: بیمه روزبه‌روز منقضی می‌شود، تجهیزات فرسوده می‌شوند، بهره وام انباشته می‌شود و کارکنان پیش از روز پرداخت، حق دریافت حقوق را کسب می‌کنند. **ثبت‌های اصلاحی (تعدیلی)** که در پایان هر دوره انجام می‌شوند، این رویدادها را در دفاتر منعکس می‌کنند.',
            en: 'Some events never arrive with a source document: insurance expires day by day, equipment wears out, interest builds up on a loan, and employees earn wages before payday. **Adjusting entries**, recorded at the end of each period, capture these events.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**فرض دوره مالی**: عمر واحد تجاری به ماه، فصل و سال تقسیم می‌شود؛ پس هر فعالیت باید به دوره درست خود نسبت داده شود.',
              en: '**Periodicity (time-period assumption)**: a business’s life is divided into months, quarters and years, so each activity must be assigned to the right period.',
            },
            {
              fa: '**شناخت درآمد**: درآمد زمانی ثبت می‌شود که کسب شده باشد (خدمت ارائه شده باشد)، نه زمانی که وجه نقد دریافت می‌شود.',
              en: '**Revenue recognition**: revenue is recorded when it is earned (when the service is performed), not when cash is received.',
            },
            {
              fa: '**اصل تطابق**: هزینه‌ها در همان دوره‌ای ثبت می‌شوند که به کسب درآمدهای آن دوره کمک کرده‌اند.',
              en: '**Matching principle**: expenses are recorded in the same period as the revenues they helped to earn.',
            },
          ],
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'مبنای نقدی', en: 'Cash basis' },
            items: [
              { fa: 'درآمد هنگام دریافت وجه نقد ثبت می‌شود', en: 'Revenue is recorded when cash is received' },
              { fa: 'هزینه هنگام پرداخت وجه نقد ثبت می‌شود', en: 'Expenses are recorded when cash is paid' },
              { fa: 'ساده است، اما سود را میان دوره‌ها جابه‌جا و تحریف می‌کند', en: 'Simple, but shifts and distorts profit between periods' },
              { fa: 'حساب‌های دریافتنی، پرداختنی، پیش‌پرداخت و اقلام تعهدی ندارد', en: 'No receivables, payables, prepayments or accruals' },
              { fa: 'استانداردهای حسابداری آن را برای صورت‌های مالی نمی‌پذیرند', en: 'Not accepted by accounting standards for financial statements' },
            ],
          },
          right: {
            title: { fa: 'مبنای تعهدی', en: 'Accrual basis' },
            items: [
              { fa: 'درآمد هنگام کسب شدن ثبت می‌شود', en: 'Revenue is recorded when earned' },
              { fa: 'هزینه هنگام تحقق و همراه با درآمد مربوط ثبت می‌شود', en: 'Expenses are recorded when incurred, matched with related revenue' },
              { fa: 'در پایان دوره به ثبت‌های اصلاحی نیاز دارد', en: 'Requires adjusting entries at period-end' },
              { fa: 'تصویر واقعی‌تری از عملکرد و وضعیت مالی ارائه می‌دهد', en: 'Gives a truer picture of performance and financial position' },
              { fa: 'استانداردهای حسابداری (از جمله IFRS) آن را الزامی می‌دانند', en: 'Required by accounting standards (including IFRS)' },
            ],
          },
        },
        {
          type: 'diagram',
          id: 'cash-vs-accrual',
          caption: {
            fa: 'همان رویدادها روی دو محور زمانی: زمان جابه‌جایی وجه نقد در برابر زمان کسب درآمد و تحقق هزینه.',
            en: 'The same events on two timelines: when cash moves vs when revenue is earned and expenses are incurred.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'نوا بر مبنای نقدی', en: 'Nova on a cash basis' },
          text: {
            fa: 'بر مبنای نقدیِ محض، درآمد ماه نوا 10,500 بود (وجهی که واقعاً از مشتریان وصول شد) و در برابر آن 28,200 پرداخت نقدی بابت تجهیزات، بیمه، اجاره، حقوق و ملزومات قرار می‌گرفت؛ یعنی «زیانی» معادل 17,700. حسابداری تعهدی برای همین ماه سود خالص 4,850 را نشان می‌دهد.',
            en: 'On a strict cash basis, Nova’s month would show revenue of 10,500 (the cash actually collected from customers) against 28,200 paid out for equipment, insurance, rent, salaries and supplies: a “loss” of 17,700. Accrual accounting shows net income of 4,850 for the same month.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'دو قاعده سرانگشتی', en: 'Two rules of thumb' },
          text: {
            fa: 'هر ثبت اصلاحی دست‌کم یک حساب سود و زیانی (درآمد یا هزینه) و یک حساب ترازنامه‌ای (دارایی یا بدهی) را درگیر می‌کند. و ثبت اصلاحی هرگز حساب موجودی نقد را درگیر نمی‌کند.',
            en: 'Every adjusting entry involves at least one income-statement account (revenue or expense) and one balance-sheet account (asset or liability). And an adjusting entry never involves Cash.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: مبنای تعهدی الزامی است', en: 'In practice: accrual basis is required' },
          text: {
            fa: 'IFRS و استانداردهای حسابداری ایران تهیه صورت‌های مالی (به‌جز صورت جریان‌های نقدی) را بر مبنای تعهدی می‌خواهند. حسابداران در پایان هر ماه یا سال فهرستی از اقلام اصلاحی تکراری دارند (بیمه، اجاره، استهلاک، حقوق، بهره، قبوض) و هر کدام را با یک سند اصلاحی و پیوست محاسبه ثبت می‌کنند. در بسیاری از نرم‌افزارها می‌توان سندهای تکراری مانند استهلاک ماهانه را الگو کرد.',
            en: 'IFRS and Iranian accounting standards require financial statements (except the cash flow statement) to be prepared on the accrual basis. Accountants keep a list of recurring month-end or year-end adjustments (insurance, rent, depreciation, salaries, interest, utility bills) and record each with an adjusting voucher and a calculation attached. Many programs let you template recurring vouchers such as monthly depreciation.',
          },
        },
      ],
    },
    {
      id: 'four-types',
      title: { fa: 'چهار نوع ثبت اصلاحی', en: 'The Four Types of Adjustments' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'ثبت‌های اصلاحی در دو خانواده جای می‌گیرند. در **پیش‌پرداخت‌ها و پیش‌دریافت‌ها** وجه نقد زودتر جابه‌جا شده و درآمد یا هزینه بعداً تحقق می‌یابد؛ در **اقلام تعهدی** درآمد یا هزینه زودتر تحقق یافته و وجه نقد بعداً جابه‌جا می‌شود. هر خانواده یک نوع هزینه‌ای و یک نوع درآمدی دارد.',
            en: 'Adjustments fall into two families. With **deferrals**, cash moves first and the revenue or expense is recognized later; with **accruals**, the revenue or expense comes first and cash moves later. Each family has an expense version and a revenue version.',
          },
        },
        {
          type: 'diagram',
          id: 'adjusting-types',
          caption: {
            fa: 'چهار ربع: ابتدا وجه نقد (پیش‌پرداخت هزینه، پیش‌دریافت درآمد) یا ابتدا شناخت (هزینه تحقق‌یافته پرداخت‌نشده، درآمد تحقق‌یافته دریافت‌نشده).',
            en: 'Four quadrants: cash first (prepaid expense, unearned revenue) or recognition first (accrued expense, accrued revenue).',
          },
        },
        {
          type: 'table',
          caption: { fa: 'خلاصه چهار نوع ثبت اصلاحی', en: 'The four adjustment types at a glance' },
          head: [
            { fa: 'نوع', en: 'Type' },
            { fa: 'پیش از اصلاح', en: 'Before adjustment' },
            { fa: 'ثبت اصلاحی', en: 'Adjusting entry' },
            { fa: 'نمونه در نوا', en: 'Nova example' },
          ],
          rows: [
            [
              { fa: 'پیش‌پرداخت هزینه', en: 'Prepaid expense' },
              { fa: 'دارایی بیش از واقع، هزینه کمتر از واقع', en: 'Asset overstated, expense understated' },
              { fa: 'بدهکار: هزینه / بستانکار: دارایی پیش‌پرداخت', en: 'Dr Expense / Cr Prepaid asset' },
              {
                fa: 'بیمه و ملزومات (الف، ب)؛ استهلاک (ج) همین منطق را با یک حساب کاهنده دارد',
                en: 'Insurance and supplies (a, b); depreciation (c) follows the same logic with a contra account',
              },
            ],
            [
              { fa: 'پیش‌دریافت درآمد', en: 'Unearned revenue' },
              { fa: 'بدهی بیش از واقع، درآمد کمتر از واقع', en: 'Liability overstated, revenue understated' },
              { fa: 'بدهکار: پیش‌دریافت درآمد / بستانکار: درآمد', en: 'Dr Unearned revenue / Cr Revenue' },
              { fa: 'این ماه ندارد؛ مثال بخش بعد را ببینید', en: 'None this month: see the next section’s illustration' },
            ],
            [
              { fa: 'هزینه تحقق‌یافته پرداخت‌نشده', en: 'Accrued expense' },
              { fa: 'هزینه و بدهی هر دو کمتر از واقع', en: 'Expense and liability both understated' },
              { fa: 'بدهکار: هزینه / بستانکار: حساب پرداختنی', en: 'Dr Expense / Cr Payable' },
              { fa: 'حقوق و بهره (د، و)', en: 'Salaries and interest (d, f)' },
            ],
            [
              { fa: 'درآمد تحقق‌یافته دریافت‌نشده', en: 'Accrued revenue' },
              { fa: 'دارایی و درآمد هر دو کمتر از واقع', en: 'Asset and revenue both understated' },
              { fa: 'بدهکار: حساب دریافتنی / بستانکار: درآمد', en: 'Dr Receivable / Cr Revenue' },
              { fa: 'خدمات صورت‌حساب‌نشده (ه)', en: 'Unbilled services (e)' },
            ],
          ],
        },
        { type: 'h', text: { fa: 'روش سه‌پرسشی برای هر ثبت اصلاحی', en: 'A three-question method for any adjustment' } },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'حساب الان چه نشان می‌دهد؟', en: 'What does the account show now?' },
              text: {
                fa: 'مانده پیش از اصلاح را بخوانید. حساب ملزومات نوا 3,000 نشان می‌دهد.',
                en: 'Read the unadjusted balance. Nova’s Supplies account shows 3,000.',
              },
            },
            {
              title: { fa: 'امروز باید چه نشان دهد؟', en: 'What should it show today?' },
              text: {
                fa: 'رقم درست را از شمارش، قرارداد، تقویم یا محاسبه به دست آورید. شمارش می‌گوید 1,800 ملزومات موجود است.',
                en: 'Find the true figure from a count, a contract, the calendar or a calculation. The count says 1,800 of supplies is on hand.',
              },
            },
            {
              title: { fa: 'چه ثبتی فاصله را پر می‌کند؟', en: 'What entry closes the gap?' },
              text: {
                fa: 'تفاوت این دو، مبلغ ثبت اصلاحی است و طرف دیگر آن همیشه یک حساب سود و زیانی است: 3,000 − 1,800 = 1,200؛ بدهکار هزینه ملزومات / بستانکار ملزومات.',
                en: 'The difference is the adjustment, and its other side is always an income-statement account: 3,000 − 1,800 = 1,200; Dr Supplies expense / Cr Supplies.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'برای به خاطر سپردن', en: 'A memory hook' },
          text: {
            fa: 'در پیش‌پرداخت و پیش‌دریافت، مبلغی که قبلاً در ترازنامه «انبار» شده، به‌تدریج به سود و زیان منتقل می‌شود. در اقلام تعهدی، چیزی که هنوز اصلاً در دفاتر نیامده، تازه ثبت می‌شود.',
            en: 'With deferrals, an amount already “stored” on the balance sheet is moved gradually into the income statement. With accruals, something that is not in the books at all is recorded for the first time.',
          },
        },
      ],
    },
    {
      id: 'deferrals',
      title: { fa: 'پیش‌پرداخت‌ها و پیش‌دریافت‌ها', en: 'Deferrals: Prepaid Expenses and Unearned Revenue' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**پیش‌پرداخت هزینه** مبلغی است که پیش از مصرف پرداخت شده و هنگام پرداخت، دارایی ثبت می‌شود. با گذشت زمان (بیمه، اجاره) یا با مصرف (ملزومات)، بخشی از آن به هزینه تبدیل می‌شود. ثبت اصلاحی همین بخش مصرف‌شده را جابه‌جا می‌کند: بدهکار هزینه / بستانکار دارایی پیش‌پرداخت.',
            en: 'A **prepaid expense** is paid before it is used and is recorded as an asset when paid. As time passes (insurance, rent) or as it is used (supplies), part of it becomes expense. The adjusting entry moves exactly that used part: Dr Expense / Cr Prepaid asset.',
          },
        },
        { type: 'h', text: { fa: 'نوا: بیمه و ملزومات', en: 'Nova: insurance and supplies' } },
        {
          type: 'p',
          text: {
            fa: 'بیمه‌نامه 12 ماهه 1,200 در روز 5 پرداخت شد؛ سهم هر ماه 1,200 ÷ 12 = 100 است. ملزومات 3,000 خریده شد و شمارش پایان ماه 1,800 نشان می‌دهد؛ پس 1,200 مصرف شده است. حساب‌ها پس از دو ثبت اصلاحی (الف) و (ب) چنین‌اند:',
            en: 'The 12-month policy cost 1,200 on Day 5, so each month’s share is 1,200 ÷ 12 = 100. Supplies of 3,000 were bought and the month-end count finds 1,800, so 1,200 was used. After adjustments (a) and (b) the accounts look like this:',
          },
        },
        {
          type: 'tAccounts',
          title: { fa: 'پس از ثبت‌های اصلاحی (الف) و (ب)', en: 'After adjustments (a) and (b)' },
          accounts: [
            { name: ac.prepaidInsurance, debits: [1200], credits: [100] },
            { name: ac.insuranceExp, debits: [100], credits: [] },
            { name: ac.supplies, debits: [3000], credits: [1200] },
            { name: ac.suppliesExp, debits: [1200], credits: [] },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'مثال جداگانه: اجاره پیش‌پرداخت', en: 'Separate illustration: prepaid rent' },
          text: {
            fa: 'کسب‌وکاری در روز 1 اجاره شش ماه را پیشاپیش می‌پردازد: 9,000. در پایان هر ماه یک‌ششم آن، یعنی 1,500، هزینه می‌شود و پس از ماه نخست 7,500 پیش‌پرداخت باقی می‌ماند.',
            en: 'On Day 1 a business pays six months’ rent in advance: 9,000. At the end of each month one-sixth of it, 1,500, becomes expense, leaving 7,500 prepaid after the first month.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'اجاره پیش‌پرداخت: پرداخت و ثبت اصلاحی ماه اول', en: 'Prepaid rent: the payment and the first month’s adjustment' },
          entries: [
            {
              date: day(1),
              lines: [
                { account: gx.prepaidRent, debit: 9000 },
                { account: ac.cash, credit: 9000 },
              ],
              memo: { fa: 'پرداخت پیشاپیش اجاره شش ماه.', en: 'Paid six months’ rent in advance.' },
            },
            {
              date: day(30),
              lines: [
                { account: ac.rent, debit: 1500 },
                { account: gx.prepaidRent, credit: 1500 },
              ],
              memo: { fa: 'ثبت اصلاحی: اجاره یک ماه (9,000 ÷ 6).', en: 'Adjusting entry: one month’s rent (9,000 ÷ 6).' },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: اگر پرداخت از ابتدا هزینه شده باشد', en: 'In practice: when the payment was expensed at first' },
          text: {
            fa: 'برخی شرکت‌ها هر پرداخت پیشاپیش را از ابتدا به حساب هزینه می‌برند. در این صورت ثبت اصلاحی برعکس است: بخش مصرف‌نشده از هزینه به دارایی برمی‌گردد. در مثال اجاره: بدهکار پیش‌پرداخت اجاره 7,500 / بستانکار هزینه اجاره 7,500. نتیجه نهایی هر دو روش یکی است: هزینه ماه 1,500 و دارایی 7,500. پیش از نوشتن ثبت اصلاحی، ببینید پرداخت اولیه چگونه ثبت شده است.',
            en: 'Some businesses expense every advance payment at first. The adjustment then runs the other way: the unused part goes back from expense to asset. In the rent example: Dr Prepaid rent 7,500 / Cr Rent expense 7,500. Both methods end in the same place: 1,500 of expense for the month and a 7,500 asset. Before writing the adjustment, check how the original payment was recorded.',
          },
        },
        { type: 'h', text: { fa: 'پیش‌دریافت درآمد', en: 'Unearned revenue' } },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'مثال جداگانه: جزو ارقام نوا نیست', en: 'Separate illustration: not part of Nova’s figures' },
          text: {
            fa: 'استودیویی در روز 1 مبلغ 6,000 را بابت قرارداد سه‌ماهه طراحی هویت بصری پیشاپیش دریافت می‌کند. هنوز کاری انجام نشده، پس استودیو یا باید خدمت را ارائه دهد یا وجه را بازگرداند؛ این یعنی بدهی. تا پایان ماه، یک‌سوم کار انجام شده است.',
            en: 'On Day 1 a studio receives 6,000 in advance for a three-month branding contract. No work has been done yet, so the studio owes the client either the service or a refund: a liability. By month-end, one-third of the work is done.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'پیش‌دریافت درآمد: دریافت وجه و ثبت اصلاحی پایان ماه', en: 'Unearned revenue: cash receipt and month-end adjustment' },
          entries: [
            {
              date: day(1),
              lines: [
                { account: ac.cash, debit: 6000 },
                { account: ac.unearned, credit: 6000 },
              ],
              memo: { fa: 'دریافت پیشاپیش وجه قرارداد سه‌ماهه.', en: 'Received an advance for a three-month contract.' },
            },
            {
              date: day(30),
              lines: [
                { account: ac.unearned, debit: 2000 },
                { account: ac.revenue, credit: 2000 },
              ],
              memo: { fa: 'ثبت اصلاحی: درآمد یک ماه (6,000 ÷ 3) کسب شد.', en: 'Adjusting entry: one month (6,000 ÷ 3) has been earned.' },
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'پس از این ثبت، مانده پیش‌دریافت درآمد 4,000 است، یعنی دو ماه کاری که هنوز بر عهده استودیوست، و صورت سود و زیان فقط 2,000 درآمدی را نشان می‌دهد که واقعاً کسب شده است.',
            en: 'After this entry, Unearned revenue shows 4,000, the two months of work the studio still owes, and the income statement reports only the 2,000 actually earned.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: پیش‌دریافت در قراردادها', en: 'In practice: advances in contracts' },
          text: {
            fa: 'در ایران پیش‌دریافت در قراردادهای خدماتی و پیمانکاری بسیار رایج است. IFRS 15 به این مبلغ «بدهی قرارداد» می‌گوید و درآمد را به اندازه پیشرفت انجام تعهد شناسایی می‌کند. پس مبنای ثبت اصلاحی، سنجش پیشرفت کار است (زمان سپری‌شده، کار تحویل‌شده یا درصد تکمیل)، نه زمان دریافت پول.',
            en: 'Customer advances are very common in Iranian service and construction contracts. IFRS 15 calls the amount a “contract liability” and recognizes revenue as the obligation is satisfied. So the adjustment rests on measuring progress (time elapsed, work delivered or percentage complete), not on when the money arrived.',
          },
        },
      ],
    },
    {
      id: 'accruals',
      title: { fa: 'اقلام تعهدی: هزینه‌ها و درآمدهای تحقق‌یافته', en: 'Accruals: Accrued Expenses and Accrued Revenue' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**هزینه تحقق‌یافته پرداخت‌نشده** هزینه‌ای است که منفعتش را گرفته‌اید اما هنوز نه پرداخت شده و نه صورت‌حسابش رسیده است. ثبت اصلاحی آن هم هزینه را ثبت می‌کند و هم بدهی را: بدهکار هزینه / بستانکار حساب پرداختنی.',
            en: 'An **accrued expense** is a cost whose benefit you have already received but which has not yet been paid or even billed. Its adjustment records both the expense and the liability: Dr Expense / Cr Payable.',
          },
        },
        { type: 'h', text: { fa: 'حقوق تحقق‌یافته', en: 'Accrued salaries' } },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'مثال جداگانه: حقوق چند روز آخر ماه', en: 'Separate illustration: the last few days of the month' },
          text: {
            fa: 'کارگاهی هر چهارشنبه حقوق هفته کاری شنبه تا چهارشنبه را می‌پردازد: 2,500 در هفته، یعنی روزی 500. ماه روز دوشنبه تمام می‌شود؛ شنبه، یکشنبه و دوشنبه (3 روز) کار شده اما پرداخت نشده است: 3 × 500 = 1,500. این مبلغ هزینه همین ماه است، هرچند در ماه بعد پرداخت می‌شود.',
            en: 'A workshop pays every Wednesday for the Saturday-to-Wednesday working week: 2,500 a week, or 500 a day. The month ends on a Monday; Saturday, Sunday and Monday (3 days) have been worked but not paid: 3 × 500 = 1,500. That is this month’s expense, even though it is paid next month.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'حقوق تحقق‌یافته و پرداخت آن در ماه بعد', en: 'Accrued salaries, and paying them next month' },
          entries: [
            {
              date: day(30),
              lines: [
                { account: ac.salaries, debit: 1500 },
                { account: ac.salariesPayable, credit: 1500 },
              ],
              memo: { fa: 'ثبت اصلاحی: حقوق 3 روز کار پرداخت‌نشده.', en: 'Adjusting entry: 3 days of unpaid salaries.' },
            },
            {
              date: { fa: 'چهارشنبه ماه بعد', en: 'Wednesday, next month' },
              lines: [
                { account: ac.salariesPayable, debit: 1500 },
                { account: ac.salaries, debit: 1000 },
                { account: ac.cash, credit: 2500 },
              ],
              memo: {
                fa: 'پرداخت هفته: 3 روز متعلق به ماه قبل (تسویه بدهی) و 2 روز هزینه ماه جدید.',
                en: 'Weekly pay: 3 days belong to last month (settling the liability) and 2 days are this month’s expense.',
              },
            },
          ],
        },
        { type: 'h', text: { fa: 'بهره تحقق‌یافته', en: 'Accrued interest' } },
        {
          type: 'formula',
          text: {
            fa: 'بهره = اصل وام × نرخ سالانه × مدت = 15,000 × 12٪ × 1/12 = 150',
            en: 'Interest = Principal × Annual rate × Time = 15,000 × 12% × 1/12 = 150',
          },
          note: {
            fa: 'وام نوا: بهره هر ماه با گذشت زمان تحقق می‌یابد، چه بانک آن را دریافت کرده باشد چه نه. «مدت» همیشه کسری از سال است.',
            en: 'Nova’s loan: interest accrues month by month with the passage of time, whether or not the bank has collected it. “Time” is always a fraction of a year.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: سود تسهیلات در ایران', en: 'In practice: “facility profit” in Iran' },
          text: {
            fa: 'در نظام بانکی ایران (بر پایه قانون عملیات بانکی بدون ربا)، به هزینه وام معمولاً «سود تسهیلات» گفته می‌شود و در دفاتر اغلب با عنوان «هزینه‌های مالی» ثبت می‌شود. نام فرق می‌کند، اما منطق ثبت همان است: هزینه‌ای که با گذشت زمان تحقق می‌یابد و در پایان دوره باید شناسایی شود. نرخ‌ها و شرایط را از قرارداد تسهیلات بخوانید.',
            en: 'In Iran’s banking system (based on the Usury-Free Banking Law), the cost of a loan is usually called “facility profit” and is often booked as “finance costs”. The name differs, but the accounting logic is the same: a cost that accrues with time and must be recognized at period-end. Take the rate and terms from the facility agreement.',
          },
        },
        { type: 'h', text: { fa: 'درآمد تحقق‌یافته دریافت‌نشده', en: 'Accrued revenue' } },
        {
          type: 'p',
          text: {
            fa: '**درآمد تحقق‌یافته دریافت‌نشده** درآمدی است که کسب شده، اما هنوز صورت‌حساب آن صادر یا وجهش دریافت نشده است. نوا کاری به ارزش 700 تمام کرده که صورت‌حسابش ماه بعد صادر می‌شود. نمونه رایج دیگر، سود سپرده بانکی است که هر ماه کسب می‌شود اما بانک آن را فصلی واریز می‌کند.',
            en: '**Accrued revenue** has been earned but not yet billed or received. Nova has finished 700 of work that will be invoiced next month. Another common case is interest on a bank deposit, earned every month but credited by the bank only quarterly.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'مثال جداگانه: سود سپرده تحقق‌یافته', en: 'Separate illustration: accrued deposit interest' },
          entries: [
            {
              date: day(30),
              lines: [
                { account: gx.interestReceivable, debit: 600 },
                { account: gx.interestRevenue, credit: 600 },
              ],
              memo: {
                fa: 'سپرده 40,000 با نرخ سالانه 18٪ (نرخ فرضی این مثال؛ نرخ واقعی را از بانک بپرسید): 40,000 × 18٪ ÷ 12 = 600.',
                en: 'A 40,000 deposit at 18% a year (a rate assumed for this example; ask the bank for the real one): 40,000 × 18% ÷ 12 = 600.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'وقتی پول بعداً جابه‌جا می‌شود', en: 'When the cash moves later' },
          text: {
            fa: 'وقتی وجه یک قلم تعهدی بعداً دریافت یا پرداخت می‌شود، فقط همان طلب یا بدهی تسویه می‌شود. درآمد یا هزینه دوباره ثبت نمی‌شود؛ وگرنه دو بار شمرده می‌شود.',
            en: 'When the cash for an accrued item is later received or paid, only the receivable or payable is settled. The revenue or expense is not recorded again; otherwise it would be counted twice.',
          },
        },
      ],
    },
    {
      id: 'depreciation',
      title: { fa: 'استهلاک', en: 'Depreciation' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'تجهیزات نوعی پیش‌پرداختِ بلندمدت است: نوا 20,000 را یک‌جا برای پنج سال خدمت پرداخته است. **استهلاک** این بهای تمام‌شده را، پس از کسر **ارزش اسقاط** مورد انتظار، میان دوره‌هایی که از دارایی بهره می‌برند تخصیص می‌دهد. استهلاک فرایند تخصیص بهاست، نه تلاشی برای دنبال کردن ارزش بازار.',
            en: 'Equipment is a long-lived prepaid cost: Nova paid 20,000 up front for five years of service. **Depreciation** allocates that cost, less the expected **salvage value**, to the periods that use the asset. It is a cost-allocation process, not an attempt to track market value.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'استهلاک خط مستقیم = (بهای تمام‌شده − ارزش اسقاط) ÷ عمر مفید',
            en: 'Straight-line depreciation = (Cost − Salvage value) ÷ Useful life',
          },
          note: {
            fa: 'نوا: (20,000 − 2,000) ÷ 5 سال = 3,600 در سال، یا 3,600 ÷ 12 = 300 در ماه.',
            en: 'Nova: (20,000 − 2,000) ÷ 5 years = 3,600 per year, or 3,600 ÷ 12 = 300 per month.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'استهلاک به بستانکار خودِ حساب تجهیزات منظور نمی‌شود، بلکه به بستانکار **استهلاک انباشته**؛ حسابی **کاهنده دارایی** با مانده عادی بستانکار. به این ترتیب بهای تمام‌شده اصلی در حساب تجهیزات دیده می‌شود و حساب کاهنده نشان می‌دهد چه مقدار از آن تاکنون مصرف شده است.',
            en: 'Depreciation is credited not to Equipment itself but to **Accumulated depreciation**, a **contra-asset account** with a normal credit balance. The original cost stays visible in the Equipment account, while the contra account shows how much of it has been used up so far.',
          },
        },
        {
          type: 'formula',
          text: { fa: 'ارزش دفتری = بهای تمام‌شده − استهلاک انباشته', en: 'Book value = Cost − Accumulated depreciation' },
          note: { fa: 'نوا در روز 30: 20,000 − 300 = 19,700.', en: 'Nova on Day 30: 20,000 − 300 = 19,700.' },
        },
        {
          type: 'table',
          caption: { fa: 'نمایش تجهیزات نوا در ترازنامه (روز 30)', en: 'Nova’s equipment on the balance sheet (Day 30)' },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          numericCols: [1],
          rows: [
            [{ fa: 'تجهیزات (بهای تمام‌شده)', en: 'Equipment, at cost' }, 20000],
            [{ fa: 'کسر می‌شود: استهلاک انباشته', en: 'Less: accumulated depreciation' }, 300],
            [{ fa: '**ارزش دفتری**', en: '**Book value**' }, 19700],
          ],
        },
        {
          type: 'diagram',
          id: 'depreciation',
          caption: {
            fa: 'ارزش دفتری در طول پنج سال: در روش خط مستقیم یکنواخت و در روش نزولی مضاعف ابتدا تند و سپس آرام کاهش می‌یابد؛ هر دو به ارزش اسقاط 2,000 می‌رسند.',
            en: 'Book value over five years: straight-line falls evenly; double-declining balance falls fast, then slowly. Both end at the 2,000 salvage value.',
          },
        },
        { type: 'h', text: { fa: 'روش نزولی مضاعف', en: 'Double-declining balance' } },
        {
          type: 'p',
          text: {
            fa: 'روش **نزولی مضاعف** روشی شتابان است و در سال‌های نخست استهلاک بیشتری منظور می‌کند. نرخ آن دو برابر نرخ خط مستقیم است (2 ÷ 5 سال = 40٪) و هر سال روی **ارزش دفتری ابتدای سال** اعمال می‌شود. در اعمال نرخ، ارزش اسقاط کسر نمی‌شود، اما دارایی هرگز کمتر از آن مستهلک نمی‌شود؛ بنابراین استهلاک سال آخر فقط به اندازه‌ای است که ارزش دفتری به 2,000 برسد.',
            en: 'The **double-declining-balance** method is an accelerated method: it charges more depreciation in the early years. Its rate is twice the straight-line rate (2 ÷ 5 years = 40%), applied each year to the **beginning book value**. Salvage value is not deducted when applying the rate, but the asset is never depreciated below it, so the final year’s charge is just enough to bring book value down to 2,000.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'تجهیزات نوا: خط مستقیم در برابر نزولی مضاعف (سالانه)', en: 'Nova’s equipment: straight-line vs double-declining balance (annual)' },
          head: [
            { fa: 'سال', en: 'Year' },
            { fa: 'استهلاک خط مستقیم', en: 'SL depreciation' },
            { fa: 'ارزش دفتری (خط مستقیم)', en: 'SL book value' },
            { fa: 'استهلاک نزولی مضاعف', en: 'DDB depreciation' },
            { fa: 'ارزش دفتری (نزولی مضاعف)', en: 'DDB book value' },
          ],
          numericCols: [1, 2, 3, 4],
          rows: [
            [year(1), 3600, 16400, 8000, 12000],
            [year(2), 3600, 12800, 4800, 7200],
            [year(3), 3600, 9200, 2880, 4320],
            [year(4), 3600, 5600, 1728, 2592],
            [year(5), 3600, 2000, 592, 2000],
            [{ fa: 'جمع', en: 'Total' }, 18000, blank, 18000, blank],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'بخشی از سال', en: 'Part of a year' },
          text: {
            fa: 'استهلاک فقط برای ماه‌هایی منظور می‌شود که دارایی آماده استفاده بوده است. اگر همین تجهیزات وقتی خریده می‌شد که فقط 4 ماه از سال مالی باقی مانده بود، استهلاک خط مستقیم سال اول 3,600 × 4/12 = 1,200 می‌شد.',
            en: 'Depreciation is charged only for the months the asset was available for use. Had this equipment been bought with only 4 months of the financial year left, year-1 straight-line depreciation would be 3,600 × 4/12 = 1,200.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: IAS 16 و جدول استهلاکات مالیاتی', en: 'In practice: IAS 16 and the tax depreciation table' },
          text: {
            fa: 'طبق IAS 16، استهلاک از زمانی شروع می‌شود که دارایی آماده استفاده است و عمر مفید و ارزش اسقاط دست‌کم در پایان هر سال مالی بازبینی می‌شوند. در ایران، برای محاسبه مالیات، نرخ‌ها و روش‌های استهلاک در جدول استهلاکات موضوع ماده 149 قانون مالیات‌های مستقیم آمده است؛ این جدول ممکن است با برآوردهای حسابداری فرق داشته باشد و گاهی بازنگری می‌شود، پس نسخه روز آن را بررسی کنید. نوا در این درس، برای سادگی، استهلاک یک ماه کامل را منظور می‌کند.',
            en: 'Under IAS 16, depreciation starts when the asset is available for use, and useful life and residual value are reviewed at least at each financial year-end. In Iran, for tax purposes, depreciation rates and methods are set in the depreciation table under Article 149 of the Direct Taxes Act; that table can differ from accounting estimates and is revised from time to time, so check the current version. For simplicity, Nova charges a full month of depreciation in this lesson.',
          },
        },
      ],
    },
    {
      id: 'nova-adjustments',
      title: { fa: 'ثبت‌های اصلاحی پایان ماه نوا', en: 'Nova’s Month-End Adjustments' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'سارا در روز 30 همه حساب‌ها را بازبینی می‌کند و اطلاعات زیر را گرد می‌آورد. هر یک از این اطلاعات به یک ثبت اصلاحی می‌انجامد.',
            en: 'On Day 30, Sara reviews every account and gathers the facts below. Each fact leads to one adjusting entry.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**(الف) بیمه**: یک ماه از 12 ماه بیمه‌ای که در روز 5 پرداخت شد منقضی شده است: 1,200 ÷ 12 = 100.',
              en: '**(a) Insurance**: one of the 12 months paid for on Day 5 has expired: 1,200 ÷ 12 = 100.',
            },
            {
              fa: '**(ب) ملزومات**: شمارش نشان می‌دهد 1,800 ملزومات باقی است؛ پس 3,000 − 1,800 = 1,200 مصرف شده است.',
              en: '**(b) Supplies**: a count shows 1,800 still on hand, so 3,000 − 1,800 = 1,200 was used.',
            },
            {
              fa: '**(ج) استهلاک**: استهلاک یک ماه تجهیزات به روش خط مستقیم: 300.',
              en: '**(c) Depreciation**: one month of straight-line depreciation on the equipment: 300.',
            },
            {
              fa: '**(د) حقوق**: کارکنان از آخرین روز پرداخت تاکنون 600 حقوق کسب کرده‌اند که ماه آینده پرداخت می‌شود.',
              en: '**(d) Salaries**: employees have earned 600 since the last payday; it will be paid next month.',
            },
            {
              fa: '**(ه) خدمات صورت‌حساب‌نشده**: کاری به ارزش 700 انجام شده، اما هنوز صورت‌حساب آن صادر نشده است.',
              en: '**(e) Unbilled services**: work worth 700 is finished but has not been invoiced yet.',
            },
            {
              fa: '**(و) بهره**: بهره یک ماه وام بانکی: 15,000 × 12٪ ÷ 12 = 150.',
              en: '**(f) Interest**: one month’s interest on the bank loan: 15,000 × 12% ÷ 12 = 150.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'یک ساده‌سازی', en: 'One simplification' },
          text: {
            fa: 'برای سادگی، همه اقلام برای یک ماه کامل اصلاح شده‌اند؛ هرچند وام، تجهیزات و بیمه‌نامه چند روز پس از آغاز ماه شروع شده‌اند. در کار واقعی، اگر مبلغ با اهمیت باشد، به نسبت روزها محاسبه می‌شود.',
            en: 'For simplicity, every item is adjusted for a full month, even though the loan, the equipment and the policy started a few days into the month. In real work, if the amount is material, it is prorated by days.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های اصلاحی: روز 30', en: 'Adjusting entries: Day 30' },
          entries: [
            {
              date: day(30),
              lines: [
                { account: ac.insuranceExp, debit: 100 },
                { account: ac.prepaidInsurance, credit: 100 },
              ],
              memo: { fa: '(الف) بیمه منقضی‌شده: 1,200 ÷ 12.', en: '(a) Insurance expired: 1,200 ÷ 12.' },
            },
            {
              date: day(30),
              lines: [
                { account: ac.suppliesExp, debit: 1200 },
                { account: ac.supplies, credit: 1200 },
              ],
              memo: { fa: '(ب) ملزومات مصرف‌شده: 3,000 منهای 1,800 موجود.', en: '(b) Supplies used: 3,000 less 1,800 on hand.' },
            },
            {
              date: day(30),
              lines: [
                { account: ac.depExp, debit: 300 },
                { account: ac.accDep, credit: 300 },
              ],
              memo: { fa: '(ج) استهلاک ماهانه: (20,000 − 2,000) ÷ 60 ماه.', en: '(c) Monthly depreciation: (20,000 − 2,000) ÷ 60 months.' },
            },
            {
              date: day(30),
              lines: [
                { account: ac.salaries, debit: 600 },
                { account: ac.salariesPayable, credit: 600 },
              ],
              memo: { fa: '(د) حقوق کسب‌شده اما پرداخت‌نشده.', en: '(d) Salaries earned but not yet paid.' },
            },
            {
              date: day(30),
              lines: [
                { account: ac.ar, debit: 700 },
                { account: ac.revenue, credit: 700 },
              ],
              memo: { fa: '(ه) خدمات ارائه‌شده‌ای که هنوز صورت‌حساب آن صادر نشده است.', en: '(e) Services performed but not yet billed.' },
            },
            {
              date: day(30),
              lines: [
                { account: ac.interestExp, debit: 150 },
                { account: ac.interestPayable, credit: 150 },
              ],
              memo: { fa: '(و) بهره تعلق‌گرفته: 15,000 × 12٪ ÷ 12.', en: '(f) Interest accrued: 15,000 × 12% ÷ 12.' },
            },
          ],
        },
        {
          type: 'analysis',
          title: { fa: 'اثر ثبت‌های اصلاحی بر معادله حسابداری', en: 'Effect of the adjustments on the accounting equation' },
          rows: [
            { tx: { fa: '(الف) بیمه منقضی‌شده', en: '(a) Insurance expired' }, assets: -100, equity: -100 },
            { tx: { fa: '(ب) ملزومات مصرف‌شده', en: '(b) Supplies used' }, assets: -1200, equity: -1200 },
            { tx: { fa: '(ج) استهلاک', en: '(c) Depreciation' }, assets: -300, equity: -300 },
            { tx: { fa: '(د) حقوق تحقق‌یافته', en: '(d) Accrued salaries' }, liabilities: 600, equity: -600 },
            { tx: { fa: '(ه) درآمد صورت‌حساب‌نشده', en: '(e) Unbilled revenue' }, assets: 700, equity: 700 },
            { tx: { fa: '(و) بهره تحقق‌یافته', en: '(f) Accrued interest' }, liabilities: 150, equity: -150 },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'اثر بر سود', en: 'The impact on profit' },
          text: {
            fa: 'پیش از اصلاحات، درآمد 12,000 منهای هزینه‌های 5,500 سود خالصی معادل 6,500 نشان می‌داد. ثبت‌های اصلاحی 700 به درآمد و 2,350 به هزینه‌ها می‌افزایند (100 + 1,200 + 300 + 600 + 150)؛ پس سود خالص واقعی **4,850** است. نادیده گرفتن این ثبت‌ها سود را 1,650 بیش از واقع نشان می‌داد.',
            en: 'Before adjustments, revenue of 12,000 less expenses of 5,500 suggested net income of 6,500. The adjustments add 700 of revenue and 2,350 of expenses (100 + 1,200 + 300 + 600 + 150), so true net income is **4,850**. Skipping them would have overstated profit by 1,650.',
          },
        },
      ],
    },
    {
      id: 'adjusted-trial-balance',
      title: { fa: 'تراز آزمایشی پس از اصلاحات', en: 'The Adjusted Trial Balance' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'پس از انتقال شش ثبت اصلاحی به دفتر کل، نوا **تراز آزمایشی پس از اصلاحات** را تهیه می‌کند. هفت حساب تازه به فهرست افزوده می‌شود، چهار حساب هزینه، دو حساب پرداختنی و یک حساب کاهنده، و مانده پنج حساب موجود تغییر می‌کند.',
            en: 'After posting the six adjusting entries, Nova prepares an **adjusted trial balance**. Seven new accounts appear (four expenses, two payables and one contra account), and five existing balances change.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'استودیو طراحی نوا، تراز آزمایشی پس از اصلاحات، روز 30', en: 'Nova Design Studio, Adjusted Trial Balance, Day 30' },
          head: [
            { fa: 'کد', en: 'Code' },
            { fa: 'حساب', en: 'Account' },
            { fa: 'بدهکار', en: 'Debit' },
            { fa: 'بستانکار', en: 'Credit' },
          ],
          numericCols: [2, 3],
          rows: [
            [same('1010'), ac.cash, 46300, blank],
            [same('1020'), ac.ar, 2200, blank],
            [same('1030'), ac.supplies, 1800, blank],
            [same('1040'), ac.prepaidInsurance, 1100, blank],
            [same('1510'), ac.equipment, 20000, blank],
            [same('1520'), ac.accDep, blank, 300],
            [same('2010'), ac.ap, blank, 1500],
            [same('2020'), ac.salariesPayable, blank, 600],
            [same('2030'), ac.interestPayable, blank, 150],
            [same('2510'), ac.loan, blank, 15000],
            [same('3010'), ac.capital, blank, 50000],
            [same('3020'), ac.drawings, 1000, blank],
            [same('4010'), ac.revenue, blank, 12700],
            [same('5010'), ac.rent, 2500, blank],
            [same('5020'), ac.salaries, 3600, blank],
            [same('5030'), ac.suppliesExp, 1200, blank],
            [same('5040'), ac.insuranceExp, 100, blank],
            [same('5050'), ac.depExp, 300, blank],
            [same('5060'), ac.interestExp, 150, blank],
            [totals, blank, 80250, 80250],
          ],
        },
        {
          type: 'formula',
          text: { fa: 'جمع بدهکار 80,250 = جمع بستانکار 80,250 ✓', en: 'Total debits 80,250 = Total credits 80,250 ✓' },
          note: {
            fa: 'جمع هر ستون از 78,500 به 80,250 رسید؛ یعنی 1,750 افزایش. این همان جمع ثبت‌هایی است که حساب تازه‌ای در طرف مقابل ساختند: استهلاک انباشته 300، حقوق پرداختنی 600، بهره پرداختنی 150 و درآمد صورت‌حساب‌نشده 700.',
            en: 'Each column rose from 78,500 to 80,250, an increase of 1,750: the sum of the adjustments that grew both columns (accumulated depreciation 300, salaries payable 600, interest payable 150 and unbilled revenue 700).',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'سود خالص = درآمد − هزینه‌ها = 12,700 − 7,850 = 4,850',
            en: 'Net income = Revenue − Expenses = 12,700 − 7,850 = 4,850',
          },
          note: {
            fa: 'هزینه‌ها: اجاره 2,500 + حقوق 3,600 + ملزومات 1,200 + بیمه 100 + استهلاک 300 + بهره 150.',
            en: 'Expenses: rent 2,500 + salaries 3,600 + supplies 1,200 + insurance 100 + depreciation 300 + interest 150.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'از اینجا تا صورت‌های مالی', en: 'From here to the statements' },
          text: {
            fa: 'همه ارقام صورت سود و زیان، صورت تغییرات حقوق مالکانه و ترازنامه نوا اکنون مستقیماً از همین تراز آزمایشی پس از اصلاحات به دست می‌آید؛ موضوع درس صورت‌های مالی.',
            en: 'Every figure in Nova’s income statement, statement of changes in equity and balance sheet now comes straight from this adjusted trial balance: the subject of the lesson on financial statements.',
          },
        },
        { type: 'h', text: { fa: 'اشتباهات رایج در ثبت‌های اصلاحی', en: 'Common mistakes with adjusting entries' } },
        {
          type: 'list',
          items: [
            {
              fa: '**درگیر کردن موجودی نقد**: ثبت اصلاحی هرگز موجودی نقد را تغییر نمی‌دهد؛ اگر در ثبت شما موجودی نقد آمده، یا ثبت اصلاحی نیست یا اشتباه است.',
              en: '**Involving Cash**: an adjustment never changes Cash; if Cash appears in your entry, it is either not an adjustment or it is wrong.',
            },
            {
              fa: '**بستانکار کردن تجهیزات به‌جای استهلاک انباشته**: بهای تمام‌شده باید دست‌نخورده بماند.',
              en: '**Crediting Equipment instead of Accumulated depreciation**: the original cost must stay intact.',
            },
            {
              fa: '**هزینه کردن ملزومات موجود به‌جای مصرف‌شده**: هزینه 1,200 است (مصرف‌شده)، نه 1,800 (موجود).',
              en: '**Expensing supplies on hand instead of supplies used**: the expense is 1,200 (used), not 1,800 (on hand).',
            },
            {
              fa: '**فراموش کردن اقلام تعهدی**: چون مدرکی برایشان نرسیده، از قلم می‌افتند؛ حقوق، بهره و قبوض را هر ماه برآورد کنید.',
              en: '**Forgetting accruals**: with no document arriving, they get missed; estimate salaries, interest and utility bills every month.',
            },
            {
              fa: '**قاطی کردن نرخ سالانه و ماهانه**: بهره یا استهلاک سالانه را برای یک ماه منظور کردن؛ همیشه در «مدت» ضرب کنید.',
              en: '**Mixing annual and monthly amounts**: charging a full year’s interest or depreciation to one month; always multiply by the time fraction.',
            },
            {
              fa: '**دو بار ثبت هزینه**: هنگام پرداخت حقوقِ تعهدشده در ماه بعد، دوباره کل مبلغ را هزینه کردن؛ بخش تعهدی باید بدهی را تسویه کند.',
              en: '**Double-counting**: expensing the full amount again when last month’s accrued salaries are paid; the accrued part must settle the liability.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: چک‌لیست پایان ماه', en: 'In practice: a month-end checklist' },
          text: {
            fa: 'پیش‌پرداخت‌ها (بیمه، اجاره) را مستهلک کنید؛ ملزومات را شمارش کنید؛ استهلاک دارایی‌های ثابت را ثبت کنید؛ حقوق، بهره و قبوض تحقق‌یافته را برآورد کنید؛ کارهای انجام‌شده و صورت‌حساب‌نشده را از مدیران پروژه بپرسید؛ پیش‌دریافت‌ها را با پیشرفت کار تطبیق دهید. هر قلم، یک سند اصلاحی با پیوست محاسبه.',
            en: 'Amortize prepayments (insurance, rent); count supplies; record depreciation on fixed assets; estimate accrued salaries, interest and utility bills; ask project managers about work done but not billed; match customer advances to progress. Each item gets an adjusting voucher with its calculation attached.',
          },
        },
      ],
    },
    {
      id: 'exercises',
      title: { fa: 'تمرین‌ها', en: 'Exercises' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'برای هر نوع ثبت اصلاحی یک تمرین آمده و تمرین آخر یک پایان ماه کامل است. برای هر قلم از روش سه‌پرسشی استفاده کنید: الان چه نشان می‌دهد، باید چه نشان دهد، چه ثبتی فاصله را پر می‌کند؟',
            en: 'There is one exercise for each type of adjustment, and the last one is a full month-end. Use the three-question method for every item: what does it show now, what should it show, what entry closes the gap?',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'پیش‌پرداخت اجاره و ملزومات', en: 'Prepaid rent and supplies' },
          difficulty: 'easy',
          problem: {
            fa: '**لابراتوار دندانی رایان** در روز 1 ماه، اجاره چهار ماه را پیشاپیش پرداخت و 12,000 به حساب پیش‌پرداخت اجاره برد. مانده حساب ملزومات در پایان ماه 5,200 است و شمارش، 1,900 ملزومات موجود نشان می‌دهد. ثبت‌های اصلاحی پایان ماه را بنویسید و مانده دو حساب دارایی را پس از اصلاح به دست آورید.',
            en: 'On Day 1, **Rayan Dental Lab** paid four months’ rent in advance and debited 12,000 to Prepaid rent. At month-end the Supplies account shows 5,200 and a count finds 1,900 on hand. Write the month-end adjusting entries and find both asset balances after adjustment.',
          },
          hint: {
            fa: 'اجاره: سهم یک ماه از چهار ماه. ملزومات: آنچه بوده منهای آنچه مانده.',
            en: 'Rent: one month out of four. Supplies: what there was, minus what is left.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'اجاره', en: 'Rent' },
                  text: { fa: '12,000 ÷ 4 = 3,000 هزینه این ماه است؛ 9,000 پیش‌پرداخت باقی می‌ماند.', en: '12,000 ÷ 4 = 3,000 is this month’s expense; 9,000 stays prepaid.' },
                },
                {
                  title: { fa: 'ملزومات', en: 'Supplies' },
                  text: { fa: '5,200 − 1,900 = 3,300 مصرف شده است؛ مانده حساب باید 1,900 شود.', en: '5,200 − 1,900 = 3,300 was used; the account must end at 1,900.' },
                },
              ],
            },
            {
              type: 'journal',
              title: { fa: 'ثبت‌های اصلاحی لابراتوار رایان', en: 'Rayan Dental Lab adjusting entries' },
              entries: [
                {
                  date: day(30),
                  lines: [
                    { account: ac.rent, debit: 3000 },
                    { account: gx.prepaidRent, credit: 3000 },
                  ],
                  memo: { fa: 'اجاره یک ماه: 12,000 ÷ 4.', en: 'One month’s rent: 12,000 ÷ 4.' },
                },
                {
                  date: day(30),
                  lines: [
                    { account: ac.suppliesExp, debit: 3300 },
                    { account: ac.supplies, credit: 3300 },
                  ],
                  memo: { fa: 'ملزومات مصرف‌شده: 5,200 − 1,900.', en: 'Supplies used: 5,200 − 1,900.' },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'مانده‌ها پس از اصلاح', en: 'Balances after adjustment' },
              head: [
                { fa: 'حساب', en: 'Account' },
                { fa: 'مانده', en: 'Balance' },
              ],
              numericCols: [1],
              rows: [
                [gx.prepaidRent, 9000],
                [ac.supplies, 1900],
                [ac.rent, 3000],
                [ac.suppliesExp, 3300],
              ],
            },
          ],
          answer: {
            fa: 'هزینه اجاره 3,000 و هزینه ملزومات 3,300؛ پیش‌پرداخت اجاره 9,000 و ملزومات 1,900.',
            en: 'Rent expense 3,000 and Supplies expense 3,300; Prepaid rent 9,000 and Supplies 1,900.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'پیش‌دریافت حق عضویت', en: 'Membership fees received in advance' },
          difficulty: 'easy',
          problem: {
            fa: '**باشگاه ورزشی پردیس** در روز 1 ماه، 20 عضویت یک‌ساله به مبلغ هر کدام 3,600 فروخت و کل وجه را نقد دریافت کرد. در روز 16، شرکتی 4,500 را پیشاپیش بابت سه ماه کلاس گروهی که از همان روز شروع شد پرداخت. هر دو دریافت به بستانکار پیش‌دریافت درآمد ثبت شده‌اند. ثبت‌های اصلاحی روز 30 را بنویسید و مانده پیش‌دریافت درآمد را پس از اصلاح به دست آورید.',
            en: 'On Day 1, **Pardis Fitness Club** sold 20 one-year memberships at 3,600 each, all paid in cash. On Day 16 a company paid 4,500 in advance for three months of group classes starting that day. Both receipts were credited to Unearned revenue. Write the Day 30 adjusting entries and find the Unearned revenue balance after adjustment.',
          },
          hint: {
            fa: 'عضویت‌ها: یک ماه از 12 ماه. کلاس گروهی: سهم یک ماه 4,500 ÷ 3 است، اما فقط نیم ماه گذشته است.',
            en: 'Memberships: one month out of 12. Group classes: one month is 4,500 ÷ 3, but only half a month has passed.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'عضویت‌ها', en: 'Memberships' },
                  text: { fa: '20 × 3,600 = 72,000؛ درآمد یک ماه: 72,000 ÷ 12 = 6,000.', en: '20 × 3,600 = 72,000; one month earned: 72,000 ÷ 12 = 6,000.' },
                },
                {
                  title: { fa: 'کلاس گروهی', en: 'Group classes' },
                  text: { fa: 'هر ماه 4,500 ÷ 3 = 1,500؛ از روز 16 تا 30 نیم ماه است: 750.', en: 'Each month is 4,500 ÷ 3 = 1,500; Day 16 to Day 30 is half a month: 750.' },
                },
              ],
            },
            {
              type: 'journal',
              title: { fa: 'ثبت‌های اصلاحی باشگاه پردیس', en: 'Pardis Fitness Club adjusting entries' },
              entries: [
                {
                  date: day(30),
                  lines: [
                    { account: ac.unearned, debit: 6000 },
                    { account: ac.revenue, credit: 6000 },
                  ],
                  memo: { fa: 'حق عضویت یک ماه کسب شد.', en: 'One month of membership fees earned.' },
                },
                {
                  date: day(30),
                  lines: [
                    { account: ac.unearned, debit: 750 },
                    { account: ac.revenue, credit: 750 },
                  ],
                  memo: { fa: 'نیم ماه کلاس گروهی ارائه شد.', en: 'Half a month of group classes delivered.' },
                },
              ],
            },
            {
              type: 'tAccounts',
              title: { fa: 'پیش‌دریافت درآمد پس از اصلاح', en: 'Unearned revenue after adjustment' },
              accounts: [{ name: ac.unearned, debits: [6000, 750], credits: [72000, 4500] }],
            },
          ],
          answer: {
            fa: 'درآمد ماه 6,750 است و مانده پیش‌دریافت درآمد 69,750 بستانکار.',
            en: 'Revenue for the month is 6,750, and Unearned revenue has a 69,750 credit balance.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'حقوق، بهره، درآمد و قبض تحقق‌یافته', en: 'Accrued wages, interest, revenue and a utility bill' },
          difficulty: 'medium',
          problem: {
            fa: 'اطلاعات زیر در پایان ماه از **شرکت نرم‌افزاری ماهان** به دست آمده است. هیچ‌کدام هنوز ثبت نشده‌اند. ثبت‌های اصلاحی را بنویسید و اثر کل آن‌ها را بر سود ماه و بر بدهی‌ها بگویید.',
            en: 'The month-end facts below come from **Mahan Software House**. None has been recorded yet. Write the adjusting entries and state their total effect on the month’s profit and on liabilities.',
          },
          given: {
            head: [
              { fa: 'بند', en: 'Item' },
              { fa: 'اطلاعات', en: 'Fact' },
            ],
            rows: [
              [
                tag('الف', 'a'),
                {
                  fa: 'دستمزد روزانه کارکنان 800 است و هر چهارشنبه برای هفته شنبه تا چهارشنبه پرداخت می‌شود. ماه روز یکشنبه تمام می‌شود.',
                  en: 'Staff wages are 800 a day, paid every Wednesday for the Saturday-to-Wednesday week. The month ends on a Sunday.',
                },
              ],
              [
                tag('ب', 'b'),
                {
                  fa: 'وام 60,000 دو ماه پیش گرفته شده است. نرخ بهره سالانه را در این مثال 18٪ فرض می‌کنیم؛ بهره هر سه ماه یک بار پرداخت می‌شود و تاکنون چیزی ثبت نشده است.',
                  en: 'A 60,000 loan was taken two months ago. In this example the annual rate is assumed to be 18%; interest is paid every three months and nothing has been recorded so far.',
                },
              ],
              [
                tag('ج', 'c'),
                {
                  fa: 'یک ماژول وب‌سایت به ارزش 7,000 برای مشتری تمام و تحویل شده، اما صورت‌حساب آن هنوز صادر نشده است.',
                  en: 'A 7,000 website module has been finished and delivered to a client, but not yet invoiced.',
                },
              ],
              [
                tag('د', 'd'),
                {
                  fa: 'برق مصرفی این ماه 650 برآورد می‌شود؛ قبض آن ماه بعد می‌رسد.',
                  en: 'This month’s electricity is estimated at 650; the bill will arrive next month.',
                },
              ],
            ],
          },
          hint: {
            fa: 'برای (الف) روزهای کارشده پس از آخرین چهارشنبه را بشمارید. برای (ب) مدت دو ماه است، نه یک ماه.',
            en: 'For (a), count the working days after the last Wednesday. For (b), the time is two months, not one.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: '(الف) دستمزد', en: '(a) Wages' },
                  text: { fa: 'شنبه و یکشنبه کار شده و پرداخت نشده: 2 × 800 = 1,600.', en: 'Saturday and Sunday were worked but not paid: 2 × 800 = 1,600.' },
                },
                {
                  title: { fa: '(ب) بهره', en: '(b) Interest' },
                  text: { fa: '60,000 × 18٪ × 2/12 = 1,800.', en: '60,000 × 18% × 2/12 = 1,800.' },
                },
                {
                  title: { fa: '(ج) درآمد', en: '(c) Revenue' },
                  text: { fa: 'کار تحویل شده، پس درآمد کسب شده است: 7,000.', en: 'The work has been delivered, so the revenue is earned: 7,000.' },
                },
                {
                  title: { fa: '(د) برق', en: '(d) Electricity' },
                  text: { fa: 'برق همین ماه مصرف شده؛ برآورد 650 هزینه این ماه است.', en: 'The power was used this month; the 650 estimate is this month’s expense.' },
                },
              ],
            },
            {
              type: 'journal',
              title: { fa: 'ثبت‌های اصلاحی شرکت ماهان', en: 'Mahan Software House adjusting entries' },
              entries: [
                {
                  date: tag('الف', 'a'),
                  lines: [
                    { account: ac.salaries, debit: 1600 },
                    { account: ac.salariesPayable, credit: 1600 },
                  ],
                  memo: { fa: 'دستمزد 2 روز پرداخت‌نشده.', en: 'Two days of unpaid wages.' },
                },
                {
                  date: tag('ب', 'b'),
                  lines: [
                    { account: ac.interestExp, debit: 1800 },
                    { account: ac.interestPayable, credit: 1800 },
                  ],
                  memo: { fa: 'بهره دو ماه.', en: 'Two months of interest.' },
                },
                {
                  date: tag('ج', 'c'),
                  lines: [
                    { account: ac.ar, debit: 7000 },
                    { account: ac.revenue, credit: 7000 },
                  ],
                  memo: { fa: 'کار تحویل‌شده و صورت‌حساب‌نشده.', en: 'Work delivered but not yet billed.' },
                },
                {
                  date: tag('د', 'd'),
                  lines: [
                    { account: gx.utilities, debit: 650 },
                    { account: gx.accruedPayable, credit: 650 },
                  ],
                  memo: { fa: 'برآورد برق مصرفی ماه.', en: 'Estimated electricity for the month.' },
                },
              ],
            },
            {
              type: 'analysis',
              title: { fa: 'اثر بر معادله حسابداری', en: 'Effect on the accounting equation' },
              rows: [
                { tx: { fa: '(الف) دستمزد تحقق‌یافته', en: '(a) Accrued wages' }, liabilities: 1600, equity: -1600 },
                { tx: { fa: '(ب) بهره تحقق‌یافته', en: '(b) Accrued interest' }, liabilities: 1800, equity: -1800 },
                { tx: { fa: '(ج) درآمد صورت‌حساب‌نشده', en: '(c) Unbilled revenue' }, assets: 7000, equity: 7000 },
                { tx: { fa: '(د) برق تحقق‌یافته', en: '(d) Accrued electricity' }, liabilities: 650, equity: -650 },
              ],
            },
          ],
          answer: {
            fa: 'هزینه‌ها 4,050 و درآمد 7,000 افزایش می‌یابد؛ سود ماه 2,950 بیشتر و بدهی‌ها 4,050 بیشتر می‌شوند.',
            en: 'Expenses rise by 4,050 and revenue by 7,000: profit is 2,950 higher and liabilities 4,050 higher.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'استهلاک خط مستقیم و نزولی مضاعف', en: 'Straight-line and double-declining depreciation' },
          difficulty: 'medium',
          problem: {
            fa: '**چاپخانه تک** در آغاز سال مالی یک دستگاه چاپ به بهای 50,000 خرید. ارزش اسقاط 5,000 و عمر مفید 5 سال برآورد شده است. (1) استهلاک سالانه و ماهانه خط مستقیم را حساب کنید. (2) ارزش دفتری پس از دو سال به روش خط مستقیم چقدر است؟ (3) استهلاک سال 1 و سال 2 را به روش نزولی مضاعف حساب کنید. (4) ثبت اصلاحی ماه نخست را به روش خط مستقیم بنویسید.',
            en: 'At the start of the financial year **Tak Print House** bought a printing press for 50,000, with an estimated salvage value of 5,000 and a 5-year life. (1) Compute annual and monthly straight-line depreciation. (2) What is the book value after two years under straight-line? (3) Compute year-1 and year-2 depreciation under double-declining balance. (4) Write the first month’s straight-line adjusting entry.',
          },
          hint: {
            fa: 'در نزولی مضاعف نرخ 2 ÷ 5 = 40٪ است و روی ارزش دفتری ابتدای هر سال اعمال می‌شود، بدون کسر ارزش اسقاط.',
            en: 'Under DDB the rate is 2 ÷ 5 = 40%, applied to each year’s opening book value without deducting salvage.',
          },
          solution: [
            {
              type: 'formula',
              text: {
                fa: 'خط مستقیم: (50,000 − 5,000) ÷ 5 = 9,000 در سال؛ 9,000 ÷ 12 = 750 در ماه',
                en: 'Straight-line: (50,000 − 5,000) ÷ 5 = 9,000 a year; 9,000 ÷ 12 = 750 a month',
              },
            },
            {
              type: 'table',
              caption: { fa: 'دو سال نخست', en: 'The first two years' },
              head: [
                { fa: 'سال', en: 'Year' },
                { fa: 'استهلاک خط مستقیم', en: 'SL depreciation' },
                { fa: 'ارزش دفتری (خط مستقیم)', en: 'SL book value' },
                { fa: 'استهلاک نزولی مضاعف', en: 'DDB depreciation' },
                { fa: 'ارزش دفتری (نزولی مضاعف)', en: 'DDB book value' },
              ],
              numericCols: [1, 2, 3, 4],
              rows: [
                [year(1), 9000, 41000, 20000, 30000],
                [year(2), 9000, 32000, 12000, 18000],
              ],
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'نزولی مضاعف، سال 1', en: 'DDB, year 1' },
                  text: { fa: '50,000 × 40٪ = 20,000؛ ارزش دفتری 30,000.', en: '50,000 × 40% = 20,000; book value 30,000.' },
                },
                {
                  title: { fa: 'نزولی مضاعف، سال 2', en: 'DDB, year 2' },
                  text: { fa: '30,000 × 40٪ = 12,000؛ ارزش دفتری 18,000.', en: '30,000 × 40% = 12,000; book value 18,000.' },
                },
              ],
            },
            {
              type: 'journal',
              title: { fa: 'ثبت اصلاحی ماه نخست (خط مستقیم)', en: 'First month’s adjustment (straight-line)' },
              entries: [
                {
                  lines: [
                    { account: ac.depExp, debit: 750 },
                    { account: gx.accDep, credit: 750 },
                  ],
                  memo: { fa: 'استهلاک یک ماه دستگاه چاپ.', en: 'One month’s depreciation on the press.' },
                },
              ],
            },
          ],
          answer: {
            fa: 'خط مستقیم 9,000 در سال (750 در ماه) و ارزش دفتری 32,000 پس از دو سال؛ نزولی مضاعف 20,000 در سال 1 و 12,000 در سال 2.',
            en: 'Straight-line 9,000 a year (750 a month), book value 32,000 after two years; DDB 20,000 in year 1 and 12,000 in year 2.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'پایان ماه کامل یک کسب‌وکار تازه', en: 'A full month-end for a new business' },
          difficulty: 'hard',
          problem: {
            fa: '**آتلیه معماری سورن** نخستین ماه فعالیتش را تمام کرده و تراز آزمایشی پیش از اصلاحات آن در جدول آمده است. اطلاعات پایان ماه: (الف) بیمه‌نامه 12 ماهه در روز 1 خریده شده است. (ب) شمارش، 900 ملزومات موجود نشان می‌دهد. (ج) تجهیزات در روز 1 خریده شده؛ عمر مفید 5 سال، بدون ارزش اسقاط، روش خط مستقیم. (د) پیش‌دریافت 9,000 بابت یک پروژه سه‌ماهه است که از روز 1 شروع شده و یک‌سوم آن انجام شده است. (ه) کارکنان از آخرین پرداخت، 1,200 حقوق کسب کرده‌اند. (و) وام در روز 1 گرفته شده و نرخ بهره سالانه را در این مثال 15٪ فرض می‌کنیم؛ هنوز بهره‌ای ثبت نشده است. (ز) کاری به ارزش 2,200 انجام شده اما صورت‌حساب نشده است. همه ثبت‌های اصلاحی را بنویسید، تراز آزمایشی پس از اصلاحات را تهیه کنید و سود خالص ماه را حساب کنید.',
            en: '**Soren Architecture Studio** has finished its first month; its unadjusted trial balance is below. Month-end facts: (a) the 12-month insurance policy was bought on Day 1. (b) A count finds 900 of supplies on hand. (c) The equipment was bought on Day 1: 5-year life, no salvage value, straight-line. (d) The 9,000 of unearned revenue is an advance for a three-month project that started on Day 1; one-third is done. (e) Staff have earned 1,200 of salaries since the last payday. (f) The loan was taken on Day 1; in this example the annual interest rate is assumed to be 15%, and no interest has been recorded. (g) Work worth 2,200 is done but not yet billed. Write every adjusting entry, prepare the adjusted trial balance and compute the month’s net income.',
          },
          given: {
            head: [
              { fa: 'حساب', en: 'Account' },
              { fa: 'بدهکار', en: 'Debit' },
              { fa: 'بستانکار', en: 'Credit' },
            ],
            numericCols: [1, 2],
            rows: [
              [ac.cash, 31400, blank],
              [ac.ar, 6800, blank],
              [ac.supplies, 2600, blank],
              [ac.prepaidInsurance, 2400, blank],
              [ac.equipment, 36000, blank],
              [ac.ap, blank, 3100],
              [ac.unearned, blank, 9000],
              [ac.loan, blank, 24000],
              [gx.capital, blank, 40000],
              [gx.drawings, 1500, blank],
              [gx.designRevenue, blank, 18500],
              [ac.rent, 4000, blank],
              [ac.salaries, 9500, blank],
              [gx.utilities, 400, blank],
              [totals, 94600, 94600],
            ],
          },
          hint: {
            fa: 'هفت ثبت لازم است، یکی برای هر بند. پس از ثبت‌ها، فقط حساب‌هایی که تغییر کرده‌اند یا تازه ساخته شده‌اند را به‌روز کنید و بقیه را از تراز قبلی بیاورید.',
            en: 'Seven entries are needed, one per item. After them, update only the accounts that changed or were created, and carry the rest over from the unadjusted trial balance.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'محاسبه مبالغ', en: 'Work out the amounts' },
                  text: {
                    fa: '(الف) 2,400 ÷ 12 = 200. (ب) 2,600 − 900 = 1,700. (ج) 36,000 ÷ 60 ماه = 600. (د) 9,000 ÷ 3 = 3,000. (ه) 1,200. (و) 24,000 × 15٪ ÷ 12 = 300. (ز) 2,200.',
                    en: '(a) 2,400 ÷ 12 = 200. (b) 2,600 − 900 = 1,700. (c) 36,000 ÷ 60 months = 600. (d) 9,000 ÷ 3 = 3,000. (e) 1,200. (f) 24,000 × 15% ÷ 12 = 300. (g) 2,200.',
                  },
                },
                {
                  title: { fa: 'نوع هر بند', en: 'The type of each item' },
                  text: {
                    fa: '(الف)، (ب) و (ج) پیش‌پرداخت هزینه؛ (د) پیش‌دریافت درآمد؛ (ه) و (و) هزینه تحقق‌یافته؛ (ز) درآمد تحقق‌یافته.',
                    en: '(a), (b) and (c) are prepaid expenses; (d) is unearned revenue; (e) and (f) are accrued expenses; (g) is accrued revenue.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              title: { fa: 'ثبت‌های اصلاحی آتلیه سورن', en: 'Soren Architecture Studio adjusting entries' },
              entries: [
                {
                  date: tag('الف', 'a'),
                  lines: [
                    { account: ac.insuranceExp, debit: 200 },
                    { account: ac.prepaidInsurance, credit: 200 },
                  ],
                },
                {
                  date: tag('ب', 'b'),
                  lines: [
                    { account: ac.suppliesExp, debit: 1700 },
                    { account: ac.supplies, credit: 1700 },
                  ],
                },
                {
                  date: tag('ج', 'c'),
                  lines: [
                    { account: ac.depExp, debit: 600 },
                    { account: ac.accDep, credit: 600 },
                  ],
                },
                {
                  date: tag('د', 'd'),
                  lines: [
                    { account: ac.unearned, debit: 3000 },
                    { account: gx.designRevenue, credit: 3000 },
                  ],
                },
                {
                  date: tag('ه', 'e'),
                  lines: [
                    { account: ac.salaries, debit: 1200 },
                    { account: ac.salariesPayable, credit: 1200 },
                  ],
                },
                {
                  date: tag('و', 'f'),
                  lines: [
                    { account: ac.interestExp, debit: 300 },
                    { account: ac.interestPayable, credit: 300 },
                  ],
                },
                {
                  date: tag('ز', 'g'),
                  lines: [
                    { account: ac.ar, debit: 2200 },
                    { account: gx.designRevenue, credit: 2200 },
                  ],
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'آتلیه معماری سورن، تراز آزمایشی پس از اصلاحات', en: 'Soren Architecture Studio, Adjusted Trial Balance' },
              head: [
                { fa: 'حساب', en: 'Account' },
                { fa: 'بدهکار', en: 'Debit' },
                { fa: 'بستانکار', en: 'Credit' },
              ],
              numericCols: [1, 2],
              rows: [
                [ac.cash, 31400, blank],
                [ac.ar, 9000, blank],
                [ac.supplies, 900, blank],
                [ac.prepaidInsurance, 2200, blank],
                [ac.equipment, 36000, blank],
                [ac.accDep, blank, 600],
                [ac.ap, blank, 3100],
                [ac.salariesPayable, blank, 1200],
                [ac.interestPayable, blank, 300],
                [ac.unearned, blank, 6000],
                [ac.loan, blank, 24000],
                [gx.capital, blank, 40000],
                [gx.drawings, 1500, blank],
                [gx.designRevenue, blank, 23700],
                [ac.rent, 4000, blank],
                [ac.salaries, 10700, blank],
                [gx.utilities, 400, blank],
                [ac.suppliesExp, 1700, blank],
                [ac.insuranceExp, 200, blank],
                [ac.depExp, 600, blank],
                [ac.interestExp, 300, blank],
                [totals, 98900, 98900],
              ],
            },
            {
              type: 'formula',
              text: {
                fa: 'سود خالص = 23,700 − 17,900 = 5,800',
                en: 'Net income = 23,700 − 17,900 = 5,800',
              },
              note: {
                fa: 'هزینه‌ها: اجاره 4,000 + حقوق 10,700 + برق و گاز 400 + ملزومات 1,700 + بیمه 200 + استهلاک 600 + بهره 300 = 17,900. پیش از اصلاحات سود 4,600 به نظر می‌رسید (18,500 − 13,900).',
                en: 'Expenses: rent 4,000 + salaries 10,700 + utilities 400 + supplies 1,700 + insurance 200 + depreciation 600 + interest 300 = 17,900. Before adjustments the profit looked like 4,600 (18,500 − 13,900).',
              },
            },
            {
              type: 'callout',
              tone: 'tip',
              title: { fa: 'چرا جمع تراز 4,300 بالا رفت؟', en: 'Why did the totals rise by 4,300?' },
              text: {
                fa: 'ثبت‌های پیش‌پرداخت و پیش‌دریافت فقط مبلغی را درون یک ستون جابه‌جا می‌کنند و جمع را تغییر نمی‌دهند. اما استهلاک انباشته (600)، حقوق پرداختنی (1,200)، بهره پرداختنی (300) و درآمد صورت‌حساب‌نشده (2,200) هر دو ستون را بالا می‌برند: 600 + 1,200 + 300 + 2,200 = 4,300؛ و 94,600 + 4,300 = 98,900.',
                en: 'Deferral adjustments only move an amount within one column and leave the totals alone. But accumulated depreciation (600), salaries payable (1,200), interest payable (300) and unbilled revenue (2,200) raise both columns: 600 + 1,200 + 300 + 2,200 = 4,300, and 94,600 + 4,300 = 98,900.',
              },
            },
          ],
          answer: {
            fa: 'هفت ثبت اصلاحی؛ جمع هر ستون تراز پس از اصلاحات 98,900؛ سود خالص ماه 5,800 (به‌جای 4,600 پیش از اصلاحات).',
            en: 'Seven adjusting entries; the adjusted trial balance totals 98,900 on each side; net income for the month is 5,800 (instead of 4,600 before adjustments).',
          },
        },
      ],
    },
    {
      id: 'summary',
      title: { fa: 'جمع‌بندی', en: 'Summary' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              fa: 'حسابداری تعهدی درآمد را هنگام کسب و هزینه را هنگام تحقق ثبت می‌کند و ثبت‌های اصلاحی در پایان دوره دفاتر را با این مبنا هماهنگ می‌کنند.',
              en: 'Accrual accounting records revenue when earned and expenses when incurred; adjusting entries bring the books into line at period-end.',
            },
            {
              fa: 'در پیش‌پرداخت‌ها و پیش‌دریافت‌ها، مبلغی که پیش‌تر در ترازنامه ثبت شده به سود و زیان منتقل می‌شود؛ در اقلام تعهدی، رقمی ثبت می‌شود که هنوز در دفاتر نیامده است.',
              en: 'Deferrals (prepaid expenses, unearned revenues) move amounts already on the balance sheet into income; accruals (accrued expenses, accrued revenues) record items not yet in the books.',
            },
            {
              fa: 'هر ثبت اصلاحی یک حساب سود و زیانی و یک حساب ترازنامه‌ای دارد و هرگز موجودی نقد را درگیر نمی‌کند.',
              en: 'Every adjustment pairs an income-statement account with a balance-sheet account and never touches Cash.',
            },
            {
              fa: 'استهلاک، بهای تمام‌شده منهای ارزش اسقاط را در طول عمر مفید تخصیص می‌دهد و به بستانکار یک حساب کاهنده ثبت می‌شود.',
              en: 'Depreciation allocates cost less salvage value over the useful life and is credited to a contra account.',
            },
            {
              fa: 'شش ثبت اصلاحی نوا سود خالص را از 6,500 به 4,850 رساند و جمع هر ستون تراز آزمایشی پس از اصلاحات 80,250 است.',
              en: 'Nova’s six adjustments cut net income from 6,500 to 4,850; the adjusted trial balance totals 80,250 on each side.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'ثبت‌های اصلاحی (تعدیلی)', en: 'Adjusting entries' },
              def: {
                fa: 'ثبت‌هایی در پایان دوره که درآمدها و هزینه‌ها را به دوره‌ای که در آن کسب یا متحمل شده‌اند نسبت می‌دهند.',
                en: 'Period-end entries that assign revenues and expenses to the period in which they were earned or incurred.',
              },
            },
            {
              term: { fa: 'مبنای تعهدی', en: 'Accrual basis' },
              def: {
                fa: 'درآمد را هنگام کسب و هزینه را هنگام تحقق شناسایی می‌کند، صرف‌نظر از زمان جابه‌جایی وجه نقد.',
                en: 'Recognizes revenue when earned and expenses when incurred, regardless of when cash moves.',
              },
            },
            {
              term: { fa: 'مبنای نقدی', en: 'Cash basis' },
              def: {
                fa: 'درآمد و هزینه را فقط هنگام دریافت یا پرداخت وجه نقد شناسایی می‌کند.',
                en: 'Recognizes revenue and expenses only when cash is received or paid.',
              },
            },
            {
              term: { fa: 'اصل تطابق', en: 'Matching principle' },
              def: {
                fa: 'هزینه‌ها در دوره‌ای ثبت می‌شوند که به کسب درآمد آن دوره کمک کرده‌اند.',
                en: 'Expenses are recorded in the period of the revenues they help to generate.',
              },
            },
            {
              term: { fa: 'پیش‌پرداخت هزینه', en: 'Prepaid expense' },
              def: { fa: 'هزینه‌ای که پیشاپیش پرداخت شده و تا زمان مصرف، دارایی است.', en: 'A cost paid in advance; an asset until it is used up.' },
            },
            {
              term: { fa: 'پیش‌دریافت درآمد', en: 'Unearned revenue' },
              def: {
                fa: 'وجهی که پیش از ارائه خدمت دریافت شده و تا زمان کسب درآمد، بدهی است.',
                en: 'Cash received before the service is performed; a liability until it is earned.',
              },
            },
            {
              term: { fa: 'هزینه تحقق‌یافته پرداخت‌نشده (هزینه معوق)', en: 'Accrued expense' },
              def: { fa: 'هزینه‌ای که تحقق یافته، اما هنوز پرداخت یا ثبت نشده است.', en: 'An expense that has been incurred but not yet paid or recorded.' },
            },
            {
              term: { fa: 'درآمد تحقق‌یافته دریافت‌نشده', en: 'Accrued revenue' },
              def: {
                fa: 'درآمدی که کسب شده، اما هنوز صورت‌حساب آن صادر یا وجهش دریافت نشده است.',
                en: 'Revenue that has been earned but not yet billed or received.',
              },
            },
            {
              term: { fa: 'استهلاک', en: 'Depreciation' },
              def: {
                fa: 'تخصیص منظم بهای تمام‌شده دارایی بلندمدت، پس از کسر ارزش اسقاط، در طول عمر مفید آن.',
                en: 'The systematic allocation of a long-lived asset’s cost, less salvage value, over its useful life.',
              },
            },
            {
              term: { fa: 'استهلاک انباشته', en: 'Accumulated depreciation' },
              def: {
                fa: 'حساب کاهنده دارایی که مجموع استهلاک ثبت‌شده تاکنون را نشان می‌دهد.',
                en: 'A contra-asset account holding all the depreciation recorded to date.',
              },
            },
            {
              term: { fa: 'ارزش دفتری', en: 'Book value' },
              def: { fa: 'بهای تمام‌شده منهای استهلاک انباشته.', en: 'Cost minus accumulated depreciation.' },
            },
            {
              term: { fa: 'ارزش اسقاط', en: 'Salvage value' },
              def: { fa: 'ارزش برآوردی دارایی در پایان عمر مفید آن.', en: 'The estimated value of an asset at the end of its useful life.' },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: {
        fa: 'کدام اصل نوا را ملزم می‌کند 300 استهلاک را در همان ماهی ثبت کند که تجهیزات به کسب درآمد کمک کرده است؟',
        en: 'Which principle requires Nova to record 300 of depreciation in the month the equipment helps earn revenue?',
      },
      options: [
        { fa: 'اصل بهای تمام‌شده', en: 'The cost principle' },
        { fa: 'اصل تطابق', en: 'The matching principle' },
        { fa: 'فرض تداوم فعالیت', en: 'The going-concern assumption' },
        { fa: 'فرض واحد پولی', en: 'The monetary-unit assumption' },
      ],
      answer: 1,
      explain: {
        fa: 'اصل تطابق هزینه‌ها را در همان دوره‌ای قرار می‌دهد که به ایجاد درآمدهای آن کمک کرده‌اند. تجهیزات به کسب درآمد این ماه کمک کرده است، پس سهم یک ماه از بهای آن اکنون هزینه می‌شود. اصل بهای تمام‌شده فقط می‌گوید تجهیزات به 20,000 ثبت شود، نه اینکه کی هزینه شود.',
        en: 'Matching places expenses in the same period as the revenues they help produce. The equipment helped earn this month’s revenue, so one month of its cost is expensed now. The cost principle only says the equipment is recorded at 20,000, not when it becomes expense.',
      },
    },
    {
      q: {
        fa: 'مانده ملزومات 3,000 است و شمارش پایان ماه 1,800 ملزومات موجود را نشان می‌دهد. ثبت اصلاحی کدام است؟',
        en: 'Supplies show a 3,000 balance and the month-end count finds 1,800 on hand. What is the adjusting entry?',
      },
      options: [
        { fa: 'بدهکار هزینه ملزومات 1,800 / بستانکار ملزومات 1,800', en: 'Dr Supplies expense 1,800 / Cr Supplies 1,800' },
        { fa: 'بدهکار ملزومات 1,200 / بستانکار هزینه ملزومات 1,200', en: 'Dr Supplies 1,200 / Cr Supplies expense 1,200' },
        { fa: 'بدهکار هزینه ملزومات 1,200 / بستانکار موجودی نقد 1,200', en: 'Dr Supplies expense 1,200 / Cr Cash 1,200' },
        { fa: 'بدهکار هزینه ملزومات 1,200 / بستانکار ملزومات 1,200', en: 'Dr Supplies expense 1,200 / Cr Supplies 1,200' },
      ],
      answer: 3,
      explain: {
        fa: 'ملزومات مصرف‌شده = 3,000 − 1,800 = 1,200. هزینه افزایش می‌یابد (بدهکار) و دارایی کاهش (بستانکار) تا حساب ملزومات همان 1,800 موجود را نشان دهد. گزینه 1,800 ملزومات موجود را به‌اشتباه هزینه می‌کند و موجودی نقد هم در ثبت اصلاحی جایی ندارد.',
        en: 'Supplies used = 3,000 − 1,800 = 1,200. The expense goes up (debit) and the asset goes down (credit), leaving Supplies at the 1,800 still on hand. The 1,800 option wrongly expenses the supplies on hand, and Cash has no place in an adjustment.',
      },
    },
    {
      q: {
        fa: 'کارکنان 600 حقوق کسب کرده‌اند که ماه آینده پرداخت می‌شود. این مورد نمونه‌ای از کدام است؟',
        en: 'Employees have earned 600 of salaries that will be paid next month. This is an example of:',
      },
      options: [
        { fa: 'هزینه تحقق‌یافته پرداخت‌نشده', en: 'An accrued expense' },
        { fa: 'پیش‌پرداخت هزینه', en: 'A prepaid expense' },
        { fa: 'پیش‌دریافت درآمد', en: 'Unearned revenue' },
        { fa: 'درآمد تحقق‌یافته دریافت‌نشده', en: 'Accrued revenue' },
      ],
      answer: 0,
      explain: {
        fa: 'هزینه تحقق یافته اما پرداخت نشده است؛ یعنی هزینه تحقق‌یافته پرداخت‌نشده که به‌صورت «بدهکار هزینه حقوق / بستانکار حقوق پرداختنی» ثبت می‌شود. در پیش‌پرداخت، پول پیش از مصرف رفته است؛ این‌جا برعکس است.',
        en: 'The expense has been incurred but not paid: an accrued expense, recorded as Dr Salaries expense / Cr Salaries payable. With a prepaid expense the cash goes out before the benefit; here it is the other way round.',
      },
    },
    {
      q: {
        fa: 'بهای تجهیزات 20,000، ارزش اسقاط 2,000 و عمر مفید 5 سال است. استهلاک سال اول به روش نزولی مضاعف چقدر است؟',
        en: 'Equipment costs 20,000 with a 2,000 salvage value and a 5-year life. What is year-1 depreciation under double-declining balance?',
      },
      options: [
        { fa: '3,600', en: '3,600' },
        { fa: '7,200', en: '7,200' },
        { fa: '8,000', en: '8,000' },
        { fa: '4,000', en: '4,000' },
      ],
      answer: 2,
      explain: {
        fa: 'نرخ نزولی مضاعف 2 ÷ 5 = 40٪ است و روی ارزش دفتری ابتدای سال، یعنی 20,000، اعمال می‌شود (ارزش اسقاط کسر نمی‌شود): 20,000 × 40٪ = 8,000. عدد 7,200 ارزش اسقاط را به‌اشتباه کسر کرده و 3,600 استهلاک خط مستقیم است.',
        en: 'The DDB rate is 2 ÷ 5 = 40%, applied to the beginning book value of 20,000 (salvage is not deducted): 20,000 × 40% = 8,000. 7,200 wrongly deducts salvage first, and 3,600 is the straight-line figure.',
      },
    },
    {
      q: { fa: 'پس از ثبت اصلاحی روز 30، ارزش دفتری تجهیزات نوا چقدر است؟', en: 'After the Day 30 adjustment, what is the book value of Nova’s equipment?' },
      options: [
        { fa: '20,000', en: '20,000' },
        { fa: '19,700', en: '19,700' },
        { fa: '18,000', en: '18,000' },
        { fa: '17,700', en: '17,700' },
      ],
      answer: 1,
      explain: {
        fa: 'ارزش دفتری = بهای تمام‌شده − استهلاک انباشته = 20,000 − 300 = 19,700. خودِ حساب تجهیزات همچنان 20,000 نشان می‌دهد و 18,000 مبلغ قابل استهلاک کل عمر است، نه ارزش دفتری.',
        en: 'Book value = cost − accumulated depreciation = 20,000 − 300 = 19,700. The Equipment account itself still shows 20,000, and 18,000 is the depreciable amount over the whole life, not the book value.',
      },
    },
    {
      q: {
        fa: 'مشتری‌ای 6,000 را پیشاپیش بابت سه ماه کار می‌پردازد. در پایان ماه نخست کدام ثبت اصلاحی لازم است؟',
        en: 'A client pays 6,000 in advance for three months of work. At the end of the first month, which adjusting entry is required?',
      },
      options: [
        { fa: 'بدهکار موجودی نقد 2,000 / بستانکار درآمد خدمات 2,000', en: 'Dr Cash 2,000 / Cr Service revenue 2,000' },
        { fa: 'بدهکار درآمد خدمات 2,000 / بستانکار پیش‌دریافت درآمد 2,000', en: 'Dr Service revenue 2,000 / Cr Unearned revenue 2,000' },
        { fa: 'بدهکار پیش‌دریافت درآمد 2,000 / بستانکار درآمد خدمات 2,000', en: 'Dr Unearned revenue 2,000 / Cr Service revenue 2,000' },
        { fa: 'تا پایان قرارداد ثبتی لازم نیست', en: 'No entry until the contract ends' },
      ],
      answer: 2,
      explain: {
        fa: 'یک‌سوم تعهد انجام شده است؛ پس بدهی 2,000 کاهش می‌یابد (بدهکار) و 2,000 درآمد کسب می‌شود (بستانکار). وجه نقد هنگام دریافت ثبت شده بود و صبر کردن تا پایان قرارداد، ارقام هر ماه را تحریف می‌کند.',
        en: 'One-third of the obligation has been fulfilled, so the liability falls by 2,000 (debit) and 2,000 of revenue is earned (credit). Cash was recorded when received, and waiting until the end would misstate every month.',
      },
    },
    {
      q: {
        fa: 'کسب‌وکاری در روز 1 اجاره شش ماه را پیشاپیش پرداخت و 9,000 به حساب پیش‌پرداخت اجاره برد. ثبت اصلاحی پایان ماه نخست چه مبلغی دارد؟',
        en: 'On Day 1 a business paid six months’ rent in advance and debited 9,000 to Prepaid rent. What is the amount of the first month-end adjustment?',
      },
      options: [
        { fa: '9,000', en: '9,000' },
        { fa: '7,500', en: '7,500' },
        { fa: '750', en: '750' },
        { fa: '1,500', en: '1,500' },
      ],
      answer: 3,
      explain: {
        fa: 'سهم یک ماه 9,000 ÷ 6 = 1,500 است: بدهکار هزینه اجاره / بستانکار پیش‌پرداخت اجاره. 7,500 مانده‌ای است که پس از اصلاح در پیش‌پرداخت باقی می‌ماند و 9,000 کل پرداخت است، نه هزینه یک ماه.',
        en: 'One month’s share is 9,000 ÷ 6 = 1,500: Dr Rent expense / Cr Prepaid rent. 7,500 is what remains prepaid after the adjustment, and 9,000 is the whole payment, not one month’s expense.',
      },
    },
    {
      q: {
        fa: 'اگر نوا ثبت اصلاحی (د)، یعنی 600 حقوق تحقق‌یافته، را فراموش کند، کدام عبارت درست است؟',
        en: 'If Nova forgot adjustment (d), the 600 of accrued salaries, which statement is true?',
      },
      options: [
        {
          fa: 'هزینه‌ها و بدهی‌ها 600 کمتر از واقع و سود خالص 600 بیشتر از واقع است',
          en: 'Expenses and liabilities are understated by 600, and net income is overstated by 600',
        },
        { fa: 'موجودی نقد 600 بیشتر از واقع است', en: 'Cash is overstated by 600' },
        { fa: 'درآمد 600 کمتر از واقع است', en: 'Revenue is understated by 600' },
        { fa: 'اشکالی ندارد، چون حقوق ماه بعد به‌هرحال پرداخت می‌شود', en: 'Nothing is wrong, because the salaries will be paid next month anyway' },
      ],
      answer: 0,
      explain: {
        fa: 'بدون این ثبت، هزینه حقوق 600 کم ثبت می‌شود، پس سود 600 زیادی است، و بدهی 600 به کارکنان هم در ترازنامه نمی‌آید. موجودی نقد و درآمد تغییری نمی‌کنند. پرداخت ماه بعد مشکل را حل نمی‌کند؛ هزینه را به ماه اشتباه می‌برد.',
        en: 'Without the entry, Salaries expense is 600 too low, so profit is 600 too high, and the 600 owed to staff is missing from the balance sheet. Cash and revenue are unaffected. Paying next month doesn’t fix it; it pushes the expense into the wrong month.',
      },
    },
    {
      q: {
        fa: 'کارگاهی هر چهارشنبه 3,000 حقوق هفته کاری پنج‌روزه (شنبه تا چهارشنبه) را می‌پردازد. ماه روز دوشنبه تمام می‌شود. حقوق تحقق‌یافته پایان ماه چقدر است؟',
        en: 'A workshop pays 3,000 every Wednesday for a five-day week (Saturday to Wednesday). The month ends on a Monday. How much salary must be accrued?',
      },
      options: [
        { fa: '1,200', en: '1,200' },
        { fa: '1,800', en: '1,800' },
        { fa: '3,000', en: '3,000' },
        { fa: '2,400', en: '2,400' },
      ],
      answer: 1,
      explain: {
        fa: 'حقوق روزانه 3,000 ÷ 5 = 600 است و شنبه، یکشنبه و دوشنبه (3 روز) کار شده: 3 × 600 = 1,800. عدد 1,200 فقط دو روز را شمرده و 3,000 حقوق کل هفته است که هنوز کامل نشده.',
        en: 'The daily rate is 3,000 ÷ 5 = 600, and Saturday, Sunday and Monday (3 days) have been worked: 3 × 600 = 1,800. 1,200 counts only two days, and 3,000 is the whole week, which isn’t finished yet.',
      },
    },
    {
      q: {
        fa: 'وامی 24,000 با نرخ بهره سالانه 15٪ (نرخ فرضی) دو ماه پیش گرفته شده و هنوز بهره‌ای ثبت نشده است. بهره تحقق‌یافته چقدر است؟',
        en: 'A 24,000 loan at an assumed 15% annual rate was taken two months ago, and no interest has been recorded. How much interest has accrued?',
      },
      options: [
        { fa: '300', en: '300' },
        { fa: '3,600', en: '3,600' },
        { fa: '600', en: '600' },
        { fa: '1,800', en: '1,800' },
      ],
      answer: 2,
      explain: {
        fa: 'بهره = 24,000 × 15٪ × 2/12 = 600. عدد 300 فقط یک ماه را حساب کرده، 3,600 بهره کل سال است و 1,800 نیمی از سال. «مدت» در فرمول بهره همیشه کسری از سال است.',
        en: 'Interest = 24,000 × 15% × 2/12 = 600. 300 covers only one month, 3,600 is a full year’s interest and 1,800 is half a year. The time factor in the interest formula is always a fraction of a year.',
      },
    },
  ],
}
