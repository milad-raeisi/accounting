import type { Lesson } from '../types'

/* Account titles for the running example (Nova Design Studio). */
const ac = {
  cash: { fa: 'موجودی نقد', en: 'Cash' },
  ar: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' },
  supplies: { fa: 'ملزومات', en: 'Supplies' },
  prepaidInsurance: { fa: 'پیش‌پرداخت بیمه', en: 'Prepaid insurance' },
  equipment: { fa: 'تجهیزات', en: 'Equipment' },
  accDep: { fa: 'استهلاک انباشته', en: 'Accumulated depreciation' },
  ap: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
  salariesPayable: { fa: 'حقوق پرداختنی', en: 'Salaries payable' },
  interestPayable: { fa: 'بهره پرداختنی', en: 'Interest payable' },
  loan: { fa: 'وام پرداختنی', en: 'Loan payable' },
  unearned: { fa: 'پیش‌دریافت درآمد', en: 'Unearned revenue' },
  capital: { fa: 'سرمایه', en: 'Capital' },
  drawings: { fa: 'برداشت', en: 'Drawings' },
  revenue: { fa: 'درآمد خدمات', en: 'Service revenue' },
  rent: { fa: 'هزینه اجاره', en: 'Rent expense' },
  salaries: { fa: 'هزینه حقوق', en: 'Salaries expense' },
  suppliesExp: { fa: 'هزینه ملزومات', en: 'Supplies expense' },
  insuranceExp: { fa: 'هزینه بیمه', en: 'Insurance expense' },
  depExp: { fa: 'هزینه استهلاک', en: 'Depreciation expense' },
  interestExp: { fa: 'هزینه بهره', en: 'Interest expense' },
}

const day = (n: number) => ({ fa: `روز ${n}`, en: `Day ${n}` })
const year = (n: number) => ({ fa: `سال ${n}`, en: `Year ${n}` })
/** Empty table cell. */
const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'adjusting-entries',
  number: 8,
  level: 'intermediate',
  minutes: 22,
  icon: 'CalendarClock',
  tone: 'expense',
  title: { fa: 'ثبت‌های اصلاحی', en: 'Adjusting Entries' },
  summary: {
    fa: 'دفاتر را در پایان دوره به‌روز کنید: مبنای تعهدی و اصل تطابق را بشناسید، چهار نوع ثبت اصلاحی و استهلاک را بیاموزید و تراز آزمایشی نوا را به تراز آزمایشی پس از اصلاحات تبدیل کنید.',
    en: 'Bring the books up to date at period-end: understand accrual accounting and the matching principle, master the four types of adjustments and depreciation, and turn Nova’s unadjusted trial balance into an adjusted one.',
  },
  objectives: [
    {
      fa: 'توضیح دهید چرا در مبنای تعهدی به ثبت‌های اصلاحی نیاز داریم',
      en: 'Explain why adjusting entries are needed under the accrual basis',
    },
    {
      fa: 'حسابداری بر مبنای نقدی و مبنای تعهدی را مقایسه کنید',
      en: 'Contrast cash-basis and accrual-basis accounting',
    },
    {
      fa: 'چهار نوع ثبت اصلاحی را تشخیص دهید و ثبت کنید',
      en: 'Identify and record the four types of adjusting entries',
    },
    {
      fa: 'استهلاک را به روش خط مستقیم و نزولی مضاعف محاسبه کنید',
      en: 'Compute depreciation by the straight-line and double-declining-balance methods',
    },
    {
      fa: 'تراز آزمایشی پس از اصلاحات تهیه کنید',
      en: 'Prepare an adjusted trial balance',
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
            fa: 'تراز آزمایشی نوا متوازن است، اما هنوز برای تهیه صورت‌های مالی آماده نیست. برخی رویدادها با مدرک مثبته همراه نیستند: بیمه روزبه‌روز منقضی می‌شود، تجهیزات فرسوده می‌شوند، بهره وام انباشته می‌شود و کارکنان پیش از روز پرداخت، حق دریافت حقوق را کسب می‌کنند. **ثبت‌های اصلاحی (تعدیلی)** که در پایان هر دوره انجام می‌شوند، این رویدادها را در دفاتر منعکس می‌کنند.',
            en: 'Nova’s trial balance balances, yet it isn’t ready for the financial statements. Some events never arrive with a source document: insurance expires day by day, equipment wears out, interest builds up on the loan, and employees earn wages before payday. **Adjusting entries**, recorded at the end of each period, capture these events.',
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
              {
                fa: 'حساب‌های دریافتنی، پرداختنی، پیش‌پرداخت و اقلام تعهدی ندارد',
                en: 'No receivables, payables, prepayments or accruals',
              },
              {
                fa: 'استانداردهای حسابداری آن را برای صورت‌های مالی نمی‌پذیرند',
                en: 'Not accepted by accounting standards for financial statements',
              },
            ],
          },
          right: {
            title: { fa: 'مبنای تعهدی', en: 'Accrual basis' },
            items: [
              { fa: 'درآمد هنگام کسب شدن ثبت می‌شود', en: 'Revenue is recorded when earned' },
              {
                fa: 'هزینه هنگام تحقق و همراه با درآمد مربوط ثبت می‌شود',
                en: 'Expenses are recorded when incurred, matched with related revenue',
              },
              { fa: 'در پایان دوره به ثبت‌های اصلاحی نیاز دارد', en: 'Requires adjusting entries at period-end' },
              {
                fa: 'تصویر واقعی‌تری از عملکرد و وضعیت مالی ارائه می‌دهد',
                en: 'Gives a truer picture of performance and financial position',
              },
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
            en: 'On a strict cash basis, Nova’s month would show revenue of 10,500 (the cash actually collected from customers) against 28,200 paid out for equipment, insurance, rent, salaries and supplies, a “loss” of 17,700. Accrual accounting shows net income of 4,850 for the same month.',
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
              {
                fa: 'بدهکار: هزینه / بستانکار: دارایی پیش‌پرداخت (برای استهلاک: حساب کاهنده)',
                en: 'Dr Expense / Cr Prepaid asset (for depreciation: a contra account)',
              },
              { fa: 'بیمه، ملزومات، استهلاک (الف، ب، ج)', en: 'Insurance, supplies, depreciation (a, b, c)' },
            ],
            [
              { fa: 'پیش‌دریافت درآمد', en: 'Unearned revenue' },
              { fa: 'بدهی بیش از واقع، درآمد کمتر از واقع', en: 'Liability overstated, revenue understated' },
              { fa: 'بدهکار: پیش‌دریافت درآمد / بستانکار: درآمد', en: 'Dr Unearned revenue / Cr Revenue' },
              { fa: 'این ماه ندارد: مثال زیر را ببینید', en: 'None this month: see the illustration below' },
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
        {
          type: 'h',
          text: { fa: 'مثال: پیش‌دریافت درآمد', en: 'Illustration: unearned revenue' },
        },
        {
          type: 'callout',
          tone: 'example',
          title: {
            fa: 'مثال جداگانه: جزو ارقام نوا نیست',
            en: 'Separate illustration: not part of Nova’s figures',
          },
          text: {
            fa: 'استودیویی در روز 1 مبلغ 6,000 را بابت قرارداد سه‌ماهه طراحی هویت بصری پیشاپیش دریافت می‌کند. هنوز کاری انجام نشده، پس استودیو یا باید خدمت را ارائه دهد یا وجه را بازگرداند؛ این یعنی بدهی. تا پایان ماه، یک‌سوم کار انجام شده است.',
            en: 'On Day 1 a studio receives 6,000 in advance for a three-month branding contract. No work has been done yet, so the studio owes the client either the service or a refund, a liability. By month-end, one-third of the work is done.',
          },
        },
        {
          type: 'journal',
          title: {
            fa: 'پیش‌دریافت درآمد: دریافت وجه و ثبت اصلاحی پایان ماه',
            en: 'Unearned revenue: cash receipt and month-end adjustment',
          },
          entries: [
            {
              date: day(1),
              lines: [
                { account: ac.cash, debit: 6000 },
                { account: ac.unearned, credit: 6000 },
              ],
              memo: {
                fa: 'دریافت پیشاپیش وجه قرارداد سه‌ماهه.',
                en: 'Received an advance for a three-month contract.',
              },
            },
            {
              date: day(30),
              lines: [
                { account: ac.unearned, debit: 2000 },
                { account: ac.revenue, credit: 2000 },
              ],
              memo: {
                fa: 'ثبت اصلاحی: درآمد یک ماه (6,000 ÷ 3) کسب شد.',
                en: 'Adjusting entry: one month (6,000 ÷ 3) has been earned.',
              },
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
          text: {
            fa: 'ارزش دفتری = بهای تمام‌شده − استهلاک انباشته',
            en: 'Book value = Cost − Accumulated depreciation',
          },
          note: {
            fa: 'نوا در روز 30: 20,000 − 300 = 19,700.',
            en: 'Nova on Day 30: 20,000 − 300 = 19,700.',
          },
        },
        {
          type: 'diagram',
          id: 'depreciation',
          caption: {
            fa: 'ارزش دفتری در طول پنج سال: در روش خط مستقیم یکنواخت و در روش نزولی مضاعف ابتدا تند و سپس آرام کاهش می‌یابد؛ هر دو به ارزش اسقاط 2,000 می‌رسند.',
            en: 'Book value over five years: straight-line falls evenly; double-declining balance falls fast, then slowly, both end at the 2,000 salvage value.',
          },
        },
        {
          type: 'h',
          text: { fa: 'روش نزولی مضاعف', en: 'Double-declining balance' },
        },
        {
          type: 'p',
          text: {
            fa: 'روش **نزولی مضاعف** روشی شتابان است و در سال‌های نخست استهلاک بیشتری منظور می‌کند. نرخ آن دو برابر نرخ خط مستقیم است (2 ÷ 5 سال = 40٪) و هر سال روی **ارزش دفتری ابتدای سال** اعمال می‌شود. در اعمال نرخ، ارزش اسقاط کسر نمی‌شود، اما دارایی هرگز کمتر از آن مستهلک نمی‌شود؛ بنابراین استهلاک سال آخر فقط به اندازه‌ای است که ارزش دفتری به 2,000 برسد.',
            en: 'The **double-declining-balance** method is an accelerated method: it charges more depreciation in the early years. Its rate is twice the straight-line rate (2 ÷ 5 years = 40%), applied each year to the **beginning book value**. Salvage value is not deducted when applying the rate, but the asset is never depreciated below it, so the final year’s charge is just enough to bring book value down to 2,000.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'تجهیزات نوا: خط مستقیم در برابر نزولی مضاعف (سالانه)',
            en: 'Nova’s equipment: straight-line vs double-declining balance (annual)',
          },
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
          type: 'formula',
          text: {
            fa: 'بهره = اصل وام × نرخ سالانه × مدت = 15,000 × 12٪ × 1/12 = 150',
            en: 'Interest = Principal × Annual rate × Time = 15,000 × 12% × 1/12 = 150',
          },
          note: {
            fa: 'برای سادگی، همه اقلام برای یک ماه کامل اصلاح شده‌اند؛ هرچند وام، تجهیزات و بیمه‌نامه چند روز پس از آغاز ماه شروع شده‌اند.',
            en: 'For simplicity, every item is adjusted for a full month, even though the loan, the equipment and the policy started a few days into the month.',
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
              memo: {
                fa: '(ب) ملزومات مصرف‌شده: 3,000 منهای 1,800 موجود.',
                en: '(b) Supplies used: 3,000 less 1,800 on hand.',
              },
            },
            {
              date: day(30),
              lines: [
                { account: ac.depExp, debit: 300 },
                { account: ac.accDep, credit: 300 },
              ],
              memo: {
                fa: '(ج) استهلاک ماهانه: (20,000 − 2,000) ÷ 60 ماه.',
                en: '(c) Monthly depreciation: (20,000 − 2,000) ÷ 60 months.',
              },
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
              memo: {
                fa: '(ه) خدمات ارائه‌شده‌ای که هنوز صورت‌حساب آن صادر نشده است.',
                en: '(e) Services performed but not yet billed.',
              },
            },
            {
              date: day(30),
              lines: [
                { account: ac.interestExp, debit: 150 },
                { account: ac.interestPayable, credit: 150 },
              ],
              memo: {
                fa: '(و) بهره تعلق‌گرفته: 15,000 × 12٪ ÷ 12.',
                en: '(f) Interest accrued: 15,000 × 12% ÷ 12.',
              },
            },
          ],
        },
        {
          type: 'analysis',
          title: {
            fa: 'اثر ثبت‌های اصلاحی بر معادله حسابداری',
            en: 'Effect of the adjustments on the accounting equation',
          },
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
            fa: 'پیش از اصلاحات، درآمد 12,000 منهای هزینه‌های 5,500 سود خالصی معادل 6,500 نشان می‌داد. ثبت‌های اصلاحی 700 به درآمد و 2,350 به هزینه‌ها می‌افزایند؛ پس سود خالص واقعی **4,850** است. نادیده گرفتن این ثبت‌ها سود را 1,650 بیش از واقع نشان می‌داد.',
            en: 'Before adjustments, revenue of 12,000 less expenses of 5,500 suggested net income of 6,500. The adjustments add 700 of revenue and 2,350 of expenses, so true net income is **4,850**. Skipping them would have overstated profit by 1,650.',
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
            en: 'After posting the six adjusting entries, Nova prepares an **adjusted trial balance**. Seven new accounts appear, four expenses, two payables and one contra account, and five existing balances change.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'استودیو طراحی نوا، تراز آزمایشی پس از اصلاحات، روز 30',
            en: 'Nova Design Studio, Adjusted Trial Balance, Day 30',
          },
          head: [
            { fa: 'حساب', en: 'Account' },
            { fa: 'بدهکار', en: 'Debit' },
            { fa: 'بستانکار', en: 'Credit' },
          ],
          numericCols: [1, 2],
          rows: [
            [ac.cash, 46300, blank],
            [ac.ar, 2200, blank],
            [ac.supplies, 1800, blank],
            [ac.prepaidInsurance, 1100, blank],
            [ac.equipment, 20000, blank],
            [ac.accDep, blank, 300],
            [ac.ap, blank, 1500],
            [ac.salariesPayable, blank, 600],
            [ac.interestPayable, blank, 150],
            [ac.loan, blank, 15000],
            [ac.capital, blank, 50000],
            [ac.drawings, 1000, blank],
            [ac.revenue, blank, 12700],
            [ac.rent, 2500, blank],
            [ac.salaries, 3600, blank],
            [ac.suppliesExp, 1200, blank],
            [ac.insuranceExp, 100, blank],
            [ac.depExp, 300, blank],
            [ac.interestExp, 150, blank],
            [{ fa: 'جمع', en: 'Totals' }, 80250, 80250],
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'جمع بدهکار 80,250 = جمع بستانکار 80,250 ✓',
            en: 'Total debits 80,250 = Total credits 80,250 ✓',
          },
          note: {
            fa: 'جمع هر ستون از 78,500 به 80,250 رسید؛ یعنی 1,750 افزایش.',
            en: 'Each column rose from 78,500 to 80,250, an increase of 1,750.',
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
            fa: 'همه ارقام صورت سود و زیان، صورت تغییرات حقوق مالکانه و ترازنامه نوا اکنون مستقیماً از همین تراز آزمایشی پس از اصلاحات به دست می‌آید؛ موضوع درس بعد.',
            en: 'Every figure in Nova’s income statement, statement of changes in equity and balance sheet now comes straight from this adjusted trial balance, the subject of the next lesson.',
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
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباهات رایج', en: 'Common mistakes' },
          text: {
            fa: 'درگیر کردن موجودی نقد در ثبت اصلاحی؛ بستانکار کردن تجهیزات به‌جای استهلاک انباشته؛ ثبت ملزومات **موجود** (1,800) به‌عنوان هزینه به‌جای ملزومات **مصرف‌شده** (1,200)؛ و فراموش کردن اقلام تعهدی، فقط به این دلیل که مدرکی برایشان نرسیده است.',
            en: 'Involving Cash in an adjusting entry; crediting Equipment instead of Accumulated depreciation; expensing the supplies **on hand** (1,800) instead of the supplies **used** (1,200); and forgetting accruals simply because no document arrived.',
          },
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
              def: {
                fa: 'هزینه‌ای که پیشاپیش پرداخت شده و تا زمان مصرف، دارایی است.',
                en: 'A cost paid in advance; an asset until it is used up.',
              },
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
              def: {
                fa: 'هزینه‌ای که تحقق یافته، اما هنوز پرداخت یا ثبت نشده است.',
                en: 'An expense that has been incurred but not yet paid or recorded.',
              },
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
              def: {
                fa: 'بهای تمام‌شده منهای استهلاک انباشته.',
                en: 'Cost minus accumulated depreciation.',
              },
            },
            {
              term: { fa: 'ارزش اسقاط', en: 'Salvage value' },
              def: {
                fa: 'ارزش برآوردی دارایی در پایان عمر مفید آن.',
                en: 'The estimated value of an asset at the end of its useful life.',
              },
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
        fa: 'اصل تطابق هزینه‌ها را در همان دوره‌ای قرار می‌دهد که به ایجاد درآمدهای آن کمک کرده‌اند. تجهیزات به کسب درآمد این ماه کمک کرده است، پس سهم یک ماه از بهای آن اکنون هزینه می‌شود.',
        en: 'Matching places expenses in the same period as the revenues they help produce. The equipment helped earn this month’s revenue, so one month of its cost is expensed now.',
      },
    },
    {
      q: {
        fa: 'مانده ملزومات 3,000 است و شمارش پایان ماه 1,800 ملزومات موجود را نشان می‌دهد. ثبت اصلاحی کدام است؟',
        en: 'Supplies show a 3,000 balance and the month-end count finds 1,800 on hand. What is the adjusting entry?',
      },
      options: [
        {
          fa: 'بدهکار هزینه ملزومات 1,800 / بستانکار ملزومات 1,800',
          en: 'Dr Supplies expense 1,800 / Cr Supplies 1,800',
        },
        {
          fa: 'بدهکار ملزومات 1,200 / بستانکار هزینه ملزومات 1,200',
          en: 'Dr Supplies 1,200 / Cr Supplies expense 1,200',
        },
        {
          fa: 'بدهکار هزینه ملزومات 1,200 / بستانکار موجودی نقد 1,200',
          en: 'Dr Supplies expense 1,200 / Cr Cash 1,200',
        },
        {
          fa: 'بدهکار هزینه ملزومات 1,200 / بستانکار ملزومات 1,200',
          en: 'Dr Supplies expense 1,200 / Cr Supplies 1,200',
        },
      ],
      answer: 3,
      explain: {
        fa: 'ملزومات مصرف‌شده = 3,000 − 1,800 = 1,200. هزینه افزایش می‌یابد (بدهکار) و دارایی کاهش (بستانکار) تا حساب ملزومات همان 1,800 موجود را نشان دهد. موجودی نقد درگیر نیست.',
        en: 'Supplies used = 3,000 − 1,800 = 1,200. The expense goes up (debit) and the asset goes down (credit), leaving Supplies at the 1,800 still on hand. Cash is not involved.',
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
        fa: 'هزینه تحقق یافته، اما پرداخت نشده است؛ یعنی هزینه تحقق‌یافته پرداخت‌نشده که به‌صورت «بدهکار هزینه حقوق / بستانکار حقوق پرداختنی» ثبت می‌شود.',
        en: 'The expense has been incurred but not paid, an accrued expense, recorded as Dr Salaries expense / Cr Salaries payable.',
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
        fa: 'نرخ نزولی مضاعف 2 ÷ 5 = 40٪ است و روی ارزش دفتری ابتدای سال، یعنی 20,000، اعمال می‌شود (ارزش اسقاط کسر نمی‌شود): 20,000 × 40٪ = 8,000. روش خط مستقیم 3,600 به دست می‌دهد.',
        en: 'The DDB rate is 2 ÷ 5 = 40%, applied to the beginning book value of 20,000 (salvage is not deducted): 20,000 × 40% = 8,000. Straight-line would give 3,600.',
      },
    },
    {
      q: {
        fa: 'پس از ثبت اصلاحی روز 30، ارزش دفتری تجهیزات نوا چقدر است؟',
        en: 'After the Day 30 adjustment, what is the book value of Nova’s equipment?',
      },
      options: [
        { fa: '20,000', en: '20,000' },
        { fa: '19,700', en: '19,700' },
        { fa: '18,000', en: '18,000' },
        { fa: '17,700', en: '17,700' },
      ],
      answer: 1,
      explain: {
        fa: 'ارزش دفتری = بهای تمام‌شده − استهلاک انباشته = 20,000 − 300 = 19,700. خودِ حساب تجهیزات همچنان 20,000 نشان می‌دهد.',
        en: 'Book value = cost − accumulated depreciation = 20,000 − 300 = 19,700. The Equipment account itself still shows 20,000.',
      },
    },
    {
      q: {
        fa: 'مشتری‌ای 6,000 را پیشاپیش بابت سه ماه کار می‌پردازد. در پایان ماه نخست کدام ثبت اصلاحی لازم است؟',
        en: 'A client pays 6,000 in advance for three months of work. At the end of the first month, which adjusting entry is required?',
      },
      options: [
        {
          fa: 'بدهکار موجودی نقد 2,000 / بستانکار درآمد خدمات 2,000',
          en: 'Dr Cash 2,000 / Cr Service revenue 2,000',
        },
        {
          fa: 'بدهکار درآمد خدمات 2,000 / بستانکار پیش‌دریافت درآمد 2,000',
          en: 'Dr Service revenue 2,000 / Cr Unearned revenue 2,000',
        },
        {
          fa: 'بدهکار پیش‌دریافت درآمد 2,000 / بستانکار درآمد خدمات 2,000',
          en: 'Dr Unearned revenue 2,000 / Cr Service revenue 2,000',
        },
        { fa: 'تا پایان قرارداد ثبتی لازم نیست', en: 'No entry until the contract ends' },
      ],
      answer: 2,
      explain: {
        fa: 'یک‌سوم تعهد انجام شده است؛ پس بدهی 2,000 کاهش می‌یابد (بدهکار) و 2,000 درآمد کسب می‌شود (بستانکار). وجه نقد هنگام دریافت ثبت شده بود و صبر کردن تا پایان قرارداد، ارقام هر ماه را تحریف می‌کند.',
        en: 'One-third of the obligation has been fulfilled, so the liability falls by 2,000 (debit) and 2,000 of revenue is earned (credit). Cash was recorded when received, and waiting until the end would misstate every month.',
      },
    },
  ],
}
