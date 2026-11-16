import type { L, Lesson } from '../types'

/* Account titles for the running example (Nova Design Studio), as in nova.ts. */
const ac = {
  cash: { fa: 'موجودی نقد', en: 'Cash' },
  ar: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' },
  supplies: { fa: 'ملزومات', en: 'Supplies' },
  prepaidInsurance: { fa: 'پیش‌پرداخت بیمه', en: 'Prepaid insurance' },
  equipment: { fa: 'تجهیزات', en: 'Equipment' },
  ap: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
  loan: { fa: 'وام پرداختنی', en: 'Loan payable' },
  capital: { fa: 'سرمایه سارا', en: 'Capital (Sara)' },
  drawings: { fa: 'برداشت سارا', en: 'Drawings (Sara)' },
  revenue: { fa: 'درآمد خدمات', en: 'Service revenue' },
  rent: { fa: 'هزینه اجاره', en: 'Rent expense' },
  salaries: { fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' },
}

/* Accounts used by the other (non-Nova) businesses in the exercises. */
const gx = {
  capital: { fa: 'سرمایه', en: 'Capital' },
  drawings: { fa: 'برداشت', en: 'Drawings' },
  wages: { fa: 'هزینه حقوق و دستمزد', en: 'Wages expense' },
  utilities: { fa: 'هزینه آب، برق و گاز', en: 'Utilities expense' },
  advertising: { fa: 'هزینه تبلیغات', en: 'Advertising expense' },
  vehicles: { fa: 'وسایل نقلیه', en: 'Vehicles' },
  repairsExp: { fa: 'هزینه تعمیرات', en: 'Repairs expense' },
}

/** Same text in both languages (account codes, numbers). */
const same = (s: string): L => ({ fa: s, en: s })
/** Empty table cell. */
const blank: L = { fa: '', en: '' }
const totals: L = { fa: 'جمع', en: 'Totals' }
const yes: L = { fa: 'بله', en: 'Yes' }
const no: L = { fa: 'خیر', en: 'No' }
const none: L = { fa: 'بدون اثر', en: 'No effect' }

export const lesson: Lesson = {
  slug: 'trial-balance',
  number: 8,
  level: 'intermediate',
  minutes: 26,
  icon: 'ListChecks',
  tone: 'gold',
  title: { fa: 'تراز آزمایشی', en: 'The Trial Balance' },
  summary: {
    fa: 'مانده همه حساب‌های دفتر کل را در تراز آزمایشی خلاصه کنید، برابری بدهکارها و بستانکارها را بسنجید، بیاموزید این آزمون کدام خطاها را آشکار می‌کند و کدام‌ها را نه، و با روش‌های تقسیم بر 2 و تقسیم بر 9 محل خطا را پیدا کنید.',
    en: 'Summarize every ledger balance in a trial balance, prove that debits equal credits, learn which errors this test catches and which slip past it, and track errors down with the halve-it and divide-by-9 techniques.',
  },
  objectives: [
    { fa: 'هدف و محدودیت‌های تراز آزمایشی را توضیح دهید', en: 'Explain the purpose and the limits of a trial balance' },
    {
      fa: 'از روی مانده‌های دفتر کل، تراز آزمایشی دوستونی و چهارستونی تهیه کنید',
      en: 'Prepare two-column and four-column trial balances from ledger balances',
    },
    {
      fa: 'خطاهایی را که تراز آزمایشی آشکار می‌کند از خطاهایی که پنهان می‌مانند تمیز دهید',
      en: 'Distinguish the errors a trial balance detects from those it cannot',
    },
    {
      fa: 'با روش‌های تقسیم بر 2 و تقسیم بر 9 محل خطا را پیدا و آن را درست اصلاح کنید',
      en: 'Use the halve-it and divide-by-9 techniques to locate errors, and correct them properly',
    },
    {
      fa: 'تراز آزمایشی پیش از اصلاحات، پس از اصلاحات و پس از بستن حساب‌ها را مقایسه کنید',
      en: 'Compare the unadjusted, adjusted and post-closing trial balances',
    },
  ],
  sections: [
    {
      id: 'purpose',
      title: { fa: 'تراز آزمایشی چیست و چرا؟', en: 'What a Trial Balance Is, and Why' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'پایان ماه است و سارا می‌خواهد ارقام نوا را برای بانک بفرستد. پیش از هر گزارشی، حسابدار یک پرسش ساده می‌پرسد: آیا دفتر کل هنوز در توازن است؟ تراز آزمایشی پاسخ این پرسش است و در عین حال، نخستین پیش‌نویس همه گزارش‌های پایان دوره.',
            en: 'It is month-end and Sara wants to send Nova’s figures to the bank. Before any report goes out, the accountant asks one simple question: is the ledger still in balance? The trial balance answers it, and it is also the first draft of every period-end report.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**تراز آزمایشی** فهرستی از همه حساب‌های دفتر کل و مانده آن‌ها در یک تاریخ معین است؛ مانده‌های بدهکار در یک ستون و مانده‌های بستانکار در ستونی دیگر. از آنجا که هر ثبت بدهکار و بستانکار برابر داشته است، جمع این دو ستون نیز باید برابر باشد.',
            en: 'A **trial balance** is a list of every ledger account and its balance at a specific date, with debit balances in one column and credit balances in another. Because every entry had equal debits and credits, the two columns should have equal totals.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**آزمودن حساب‌وکتاب** ثبت و انتقال؛ همان کنترل حسابداری دوطرفه.',
              en: '**Test the arithmetic** of journalizing and posting: the double-entry check.',
            },
            {
              fa: '**خلاصه کردن دفتر کل** در یک صفحه تا مانده‌ها سریع بازبینی شوند.',
              en: '**Summarize the ledger** on a single page so balances can be reviewed quickly.',
            },
            {
              fa: '**آماده‌سازی برای اصلاحات**: نقطه شروع ثبت‌های اصلاحی و کاربرگ است.',
              en: '**Prepare for adjustments**: it is the starting point for adjusting entries and the worksheet.',
            },
            {
              fa: '**تغذیه صورت‌های مالی**: تراز آزمایشی پس از اصلاحات همه ارقام صورت‌های مالی را فراهم می‌کند.',
              en: '**Feed the financial statements**: the adjusted trial balance supplies every figure in them.',
            },
          ],
        },
        {
          type: 'diagram',
          id: 'trial-balance',
          caption: {
            fa: 'مانده‌های دفتر کل در ستون‌های بدهکار و بستانکار روی هم می‌نشینند؛ برابری جمع‌ها یعنی دفتر کل تراز است.',
            en: 'Ledger balances stack into the debit and credit columns; equal totals mean the ledger is in balance.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'تراز بودن به معنای درست بودن نیست', en: 'Balanced is not the same as correct' },
          text: {
            fa: 'تراز آزمایشی فقط برابری بدهکارها و بستانکارها را ثابت می‌کند. صورت مالی نیست و نشان نمی‌دهد که همه رویدادها ثبت شده‌اند، آن هم در حساب درست و با مبلغ درست.',
            en: 'A trial balance proves only that debits equal credits. It is not a financial statement, and it does not prove that every transaction was recorded, in the right account, for the right amount.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: گزارشی داخلی اما کلیدی', en: 'In practice: internal, but essential' },
          text: {
            fa: 'تراز آزمایشی گزارشی داخلی است و جزو صورت‌های مالی منتشرشده (چه طبق IFRS و چه طبق استانداردهای حسابداری ایران) نیست. با این حال حسابرسان معمولاً نخستین چیزی که درخواست می‌کنند تراز آزمایشی است، و بسیاری از شرکت‌ها آن را هر ماه تهیه و بایگانی می‌کنند.',
            en: 'The trial balance is an internal report and is not one of the published financial statements (under IFRS or under Iranian accounting standards). Even so, it is usually the first thing auditors ask for, and many businesses prepare and file one every month.',
          },
        },
      ],
    },
    {
      id: 'preparing',
      title: { fa: 'تهیه تراز آزمایشی', en: 'Preparing the Trial Balance' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'تهیه تراز آزمایشی پنج گام دارد. نوا نخستین تراز آزمایشی خود را در روز 30 و پس از انتقال هر 12 ثبت تهیه می‌کند.',
            en: 'Preparing a trial balance takes five steps. Nova prepares its first one on Day 30, after all 12 entries have been posted.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'مانده همه حساب‌ها را محاسبه کنید', en: 'Balance every ledger account' },
              text: {
                fa: 'دو طرف هر حساب را جمع بزنید و مانده آن را به دست آورید.',
                en: 'Total both sides of each account and compute its balance.',
              },
            },
            {
              title: { fa: 'سرلوحه را بنویسید', en: 'Write the heading' },
              text: {
                fa: 'نام واحد تجاری، عنوان گزارش و تاریخ: «استودیو طراحی نوا، تراز آزمایشی، روز 30».',
                en: 'Business name, report title and date: “Nova Design Studio, Trial Balance, Day 30”.',
              },
            },
            {
              title: { fa: 'حساب‌ها را به ترتیب دفتر کل فهرست کنید', en: 'List the accounts in ledger order' },
              text: {
                fa: 'دارایی‌ها، بدهی‌ها، حقوق مالکانه، درآمدها و هزینه‌ها؛ یعنی به ترتیب کد در فهرست حساب‌ها.',
                en: 'Assets, liabilities, equity, revenue, expenses: the code order of the chart of accounts.',
              },
            },
            {
              title: { fa: 'هر مانده را در ستون خودش بنویسید', en: 'Place each balance in its column' },
              text: {
                fa: 'مانده‌های بدهکار در ستون بدهکار و مانده‌های بستانکار در ستون بستانکار. هر حساب معمولاً در طرف مانده عادی خود قرار می‌گیرد.',
                en: 'Debit balances go in the debit column, credit balances in the credit column. Each account normally sits on its normal-balance side.',
              },
            },
            {
              title: { fa: 'جمع بزنید و مقایسه کنید', en: 'Total and compare' },
              text: {
                fa: 'هر دو ستون را جمع بزنید. اگر برابر بودند، زیرشان دو خط بکشید؛ وگرنه پیش از ادامه کار، خطا را پیدا کنید.',
                en: 'Add both columns. If the totals agree, double-underline them; if not, find the error before going any further.',
              },
            },
          ],
        },
        { type: 'h', text: { fa: 'تراز آزمایشی پیش از اصلاحات نوا', en: 'Nova’s unadjusted trial balance' } },
        {
          type: 'table',
          caption: { fa: 'استودیو طراحی نوا، تراز آزمایشی پیش از اصلاحات، روز 30', en: 'Nova Design Studio, Unadjusted Trial Balance, Day 30' },
          head: [
            { fa: 'کد', en: 'Code' },
            { fa: 'حساب', en: 'Account' },
            { fa: 'بدهکار', en: 'Debit' },
            { fa: 'بستانکار', en: 'Credit' },
          ],
          numericCols: [2, 3],
          rows: [
            [same('1010'), ac.cash, 46300, blank],
            [same('1020'), ac.ar, 1500, blank],
            [same('1030'), ac.supplies, 3000, blank],
            [same('1040'), ac.prepaidInsurance, 1200, blank],
            [same('1510'), ac.equipment, 20000, blank],
            [same('2010'), ac.ap, blank, 1500],
            [same('2510'), ac.loan, blank, 15000],
            [same('3010'), ac.capital, blank, 50000],
            [same('3020'), ac.drawings, 1000, blank],
            [same('4010'), ac.revenue, blank, 12000],
            [same('5010'), ac.rent, 2500, blank],
            [same('5020'), ac.salaries, 3000, blank],
            [totals, blank, 78500, 78500],
          ],
        },
        {
          type: 'formula',
          text: { fa: 'جمع بدهکار 78,500 = جمع بستانکار 78,500 ✓', en: 'Total debits 78,500 = Total credits 78,500 ✓' },
          note: {
            fa: 'دفتر کل تراز است؛ یعنی حساب‌وکتاب ثبت و انتقال درست بوده است.',
            en: 'The ledger is in balance: the arithmetic of journalizing and posting checks out.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'به آنچه نیست دقت کنید', en: 'Notice what’s missing' },
          text: {
            fa: 'در این فهرست هیچ هزینه بیمه، استهلاک یا بهره‌ای نیست؛ با اینکه یک ماه از بیمه گذشته، تجهیزات کار کرده‌اند و وام نیز بهره ایجاد کرده است. به همین دلیل نام آن **پیش از اصلاحات** است؛ درس ثبت‌های اصلاحی این کمبود را برطرف می‌کند.',
            en: 'There’s no insurance expense, no depreciation and no interest here, even though a month of insurance has expired, the equipment has been used and the loan has been accruing interest. That is why it is called **unadjusted**; the lesson on adjusting entries fills the gap.',
          },
        },
        { type: 'h', text: { fa: 'تراز آزمایشی چهارستونی', en: 'The four-column trial balance' } },
        {
          type: 'p',
          text: {
            fa: 'تراز دوستونی فقط مانده‌ها را نشان می‌دهد. تراز **چهارستونی** پیش از مانده، **گردش** هر حساب را هم می‌آورد: جمع همه بدهکارها و جمع همه بستانکارهایی که طی دوره به آن منتقل شده است. جمع ستون‌های گردش باید با جمع کل دفتر روزنامه برابر باشد؛ پس این قالب آزمون دومی هم دارد: هر مبلغی که ثبت شده، منتقل هم شده است.',
            en: 'A two-column trial balance shows only balances. A **four-column** trial balance also shows each account’s **turnover**: the total of all debits and of all credits posted to it during the period, before the balance. The turnover columns must add up to the journal’s grand total, so this format adds a second test: everything journalized has also been posted.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'استودیو طراحی نوا، تراز آزمایشی چهارستونی، روز 30', en: 'Nova Design Studio, Four-Column Trial Balance, Day 30' },
          head: [
            { fa: 'حساب', en: 'Account' },
            { fa: 'گردش بدهکار', en: 'Debit turnover' },
            { fa: 'گردش بستانکار', en: 'Credit turnover' },
            { fa: 'مانده بدهکار', en: 'Debit balance' },
            { fa: 'مانده بستانکار', en: 'Credit balance' },
          ],
          numericCols: [1, 2, 3, 4],
          rows: [
            [ac.cash, 75500, 29200, 46300, blank],
            [ac.ar, 4000, 2500, 1500, blank],
            [ac.supplies, 3000, blank, 3000, blank],
            [ac.prepaidInsurance, 1200, blank, 1200, blank],
            [ac.equipment, 20000, blank, 20000, blank],
            [ac.ap, 1500, 3000, blank, 1500],
            [ac.loan, blank, 15000, blank, 15000],
            [ac.capital, blank, 50000, blank, 50000],
            [ac.drawings, 1000, blank, 1000, blank],
            [ac.revenue, blank, 12000, blank, 12000],
            [ac.rent, 2500, blank, 2500, blank],
            [ac.salaries, 3000, blank, 3000, blank],
            [totals, 111700, 111700, 78500, 78500],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: تراز در نرم‌افزارهای ایرانی', en: 'In practice: trial balances in Iranian software' },
          text: {
            fa: 'نرم‌افزارهای حسابداری در ایران تراز آزمایشی را معمولاً در سطح کل، معین و تفصیلی و در قالب‌های دوستونی، چهارستونی یا بیشتر (مثلاً با ستون‌های مانده ابتدای دوره) تهیه می‌کنند. عدد 111,700 در ستون‌های گردش نوا همان جمع دفتر روزنامه است که در درس ثبت در دفتر روزنامه دیدید.',
            en: 'Accounting software in Iran usually produces the trial balance at general, subsidiary and detail level, in two-column, four-column or wider layouts (for example with opening-balance columns). The 111,700 in Nova’s turnover columns is the journal total you met in the lesson on journal entries.',
          },
        },
      ],
    },
    {
      id: 'limits',
      title: { fa: 'آنچه آشکار می‌کند و آنچه نمی‌کند', en: 'What It Catches and What It Misses' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'تراز آزمایشی فقط برابری را می‌سنجد. هر خطایی که بدهکار و بستانکار را به یک اندازه تغییر دهد، تراز را کاملاً متوازن، و کاملاً نادرست، باقی می‌گذارد.',
            en: 'A trial balance checks only equality. Any error that changes debits and credits by the same amount leaves it perfectly balanced, and perfectly wrong.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'آشکار می‌شود (جمع‌ها نابرابر)', en: 'Detected (totals disagree)' },
            items: [
              { fa: 'انتقال فقط یک طرفِ ثبت', en: 'Posting only one half of an entry' },
              { fa: 'انتقال یک سطر بدهکار به طرف بستانکار (یا برعکس)', en: 'Posting one line to the wrong side' },
              { fa: 'ثبت مبالغ نابرابر در دو طرف', en: 'Recording unequal debit and credit amounts' },
              { fa: 'اشتباه در محاسبه مانده یک حساب', en: 'Miscalculating an account balance' },
              { fa: 'جابه‌جایی ارقام یا اشتباه در نوشتن یک مانده در تراز', en: 'Transposing or mis-copying one balance onto the trial balance' },
              { fa: 'جا انداختن یک حساب در تراز آزمایشی', en: 'Leaving an account off the trial balance' },
            ],
          },
          right: {
            title: { fa: 'آشکار نمی‌شود (جمع‌ها همچنان برابر)', en: 'Not detected (totals still agree)' },
            items: [
              { fa: 'ثبت نکردن کامل یک رویداد (حذف)', en: 'Omitting an entire transaction' },
              { fa: 'بدهکار یا بستانکار کردن حساب اشتباه', en: 'Debiting or crediting the wrong account' },
              { fa: 'خطاهای جبران‌کننده که اثر یکدیگر را خنثی می‌کنند', en: 'Compensating errors that cancel out' },
              { fa: 'جابه‌جا کردن بدهکار و بستانکار کل یک ثبت', en: 'Reversing the debit and credit of a whole entry' },
              { fa: 'دو بار ثبت کردن یک رویداد', en: 'Recording the same entry twice' },
              { fa: 'ثبت مبلغ نادرست در هر دو طرف', en: 'Using the same wrong amount on both sides' },
            ],
          },
        },
        {
          type: 'table',
          caption: { fa: 'خطاهای پنهان، با نمونه‌هایی از نوا', en: 'Undetected errors, illustrated with Nova' },
          head: [
            { fa: 'خطا', en: 'Error' },
            { fa: 'مثال', en: 'Example' },
            { fa: 'چرا جمع‌ها برابر می‌مانند', en: 'Why the totals still agree' },
          ],
          rows: [
            [
              { fa: 'حذف (از قلم افتادن)', en: 'Omission' },
              { fa: 'پرداخت حقوق روز 20 اصلاً ثبت نشود', en: 'The Day 20 salaries are never recorded' },
              { fa: 'نه بدهکاری ثبت شده و نه بستانکاری؛ هر دو جمع 3,000 کمتر می‌شوند', en: 'No debit and no credit: both totals fall by 3,000' },
            ],
            [
              { fa: 'حساب اشتباه', en: 'Wrong account' },
              { fa: 'خرید تجهیزات روز 3 به بدهکار ملزومات ثبت شود', en: 'The Day 3 equipment is debited to Supplies' },
              { fa: 'طرف درست و مبلغ درست، اما حساب نادرست', en: 'Right side, right amount, wrong account' },
            ],
            [
              { fa: 'خطای جبران‌کننده', en: 'Compensating errors' },
              {
                fa: 'هزینه اجاره 200 بیشتر و، در ثبتی دیگر، درآمد خدمات هم 200 بیشتر ثبت شود',
                en: 'Rent expense overstated by 200 and, in another entry, Service revenue overstated by 200',
              },
              { fa: '200 اضافه در بدهکار با 200 اضافه در بستانکار خنثی می‌شود', en: 'An extra 200 debit is offset by an extra 200 credit' },
            ],
            [
              { fa: 'ثبت معکوس', en: 'Reversed entry' },
              { fa: 'ثبت روز 27 به‌صورت بدهکار موجودی نقد / بستانکار حساب‌های پرداختنی', en: 'Day 27 recorded as Dr Cash / Cr Accounts payable' },
              { fa: 'هر طرف همچنان 1,500 دریافت می‌کند', en: 'Each side still receives 1,500' },
            ],
            [
              { fa: 'ثبت تکراری', en: 'Duplicated entry' },
              { fa: 'درآمد نقدی روز 8 دو بار ثبت شود', en: 'The Day 8 cash revenue is recorded twice' },
              { fa: 'هر دو جمع 8,000 بیشتر می‌شوند', en: 'Both totals rise by 8,000' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'چرا اهمیت دارد؟', en: 'Why this matters' },
          text: {
            fa: 'خطاهای پنهان مستقیماً به صورت‌های مالی راه پیدا می‌کنند. برای نمونه، اگر خرید تجهیزات روز 3 در حساب ملزومات ثبت شود، جمع دارایی‌ها تغییر نمی‌کند، اما هر دو حساب نادرست می‌شوند و با هزینه شدن ملزومات، سود خالص هم تحریف می‌شود.',
            en: 'Undetected errors flow straight into the financial statements. Record the Day 3 equipment as Supplies, for example, and total assets stay the same, but both accounts are misstated, and once supplies are expensed, net income is too.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: کنترل‌هایی فراتر از تراز', en: 'In practice: controls beyond the trial balance' },
          text: {
            fa: 'حسابداران حرفه‌ای به تراز آزمایشی بسنده نمی‌کنند: صورت مغایرت بانکی تهیه می‌کنند، دفترهای معین را با حساب‌های کنترل تطبیق می‌دهند، اسناد را پیش از قطعی شدن بررسی می‌کنند و مانده هر حساب را با ماه قبل یا بودجه مقایسه می‌کنند. اجاره‌ای که ناگهان دو برابر شده، حتی در یک تراز متوازن، سؤال‌برانگیز است.',
            en: 'Professionals don’t stop at the trial balance: they prepare bank reconciliations, reconcile subsidiary ledgers to control accounts, review vouchers before they are finalized, and compare each balance with last month or the budget. Rent that has suddenly doubled raises a question, even in a balanced trial balance.',
          },
        },
      ],
    },
    {
      id: 'finding-errors',
      title: { fa: 'یافتن خطا وقتی تراز برابر نیست', en: 'Finding Errors When It Doesn’t Balance' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'وقتی جمع ستون‌ها برابر نیست، از تراز آزمایشی به عقب و به سمت دفتر روزنامه حرکت کنید و ابتدا محتمل‌ترین و ساده‌ترین علت‌ها را بررسی کنید. اندازه اختلاف بهترین سرنخ شماست.',
            en: 'When the columns disagree, work backwards from the trial balance toward the journal, checking the most likely, and cheapest to check, causes first. The size of the difference is your best clue.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'دو ستون را دوباره جمع بزنید', en: 'Re-add both columns' },
              text: { fa: 'اشتباه ساده در جمع زدن، رایج‌ترین علت است.', en: 'A simple addition slip is the most common cause of all.' },
            },
            {
              title: { fa: 'دنبال مبلغی برابر با اختلاف بگردید', en: 'Look for an amount equal to the difference' },
              text: {
                fa: 'اغلب، یک مانده جاافتاده یا سطری که فقط یک طرفش منتقل شده دقیقاً برابر اختلاف است.',
                en: 'A balance left off the list, or a line posted on one side only, often equals the difference exactly.',
              },
            },
            {
              title: { fa: 'اختلاف را نصف کنید', en: 'Halve the difference' },
              text: {
                fa: 'اگر مانده‌ای در ستون اشتباه نوشته شده باشد، اختلاف دو برابر آن مبلغ است. دنبال مانده‌ای برابر با نصف اختلاف بگردید.',
                en: 'If a balance was placed in the wrong column, the difference is twice that amount. Look for a balance equal to half the difference.',
              },
            },
            {
              title: { fa: 'اختلاف را بر 9 تقسیم کنید', en: 'Divide the difference by 9' },
              text: {
                fa: 'اگر بخش‌پذیر بود، به جابه‌جایی ارقام (نوشتن 2,500 به‌صورت 5,200) یا خطای لغزش (نوشتن 1,200 به‌صورت 12,000) شک کنید.',
                en: 'If it divides evenly, suspect a transposition (2,500 written as 5,200) or a slide (1,200 written as 12,000).',
              },
            },
            {
              title: { fa: 'مانده‌ها و انتقال‌ها را دوباره دنبال کنید', en: 'Retrace balances and postings' },
              text: {
                fa: 'مانده هر حساب را دوباره محاسبه کنید و سپس با کمک شماره‌های عطف، هر انتقال را با دفتر روزنامه تطبیق دهید.',
                en: 'Recompute every ledger balance, then compare each posting with the journal, using the posting references.',
              },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'اختلاف را بخوانید', en: 'Reading the difference' },
          head: [
            { fa: 'نشانه', en: 'Pattern' },
            { fa: 'علت محتمل', en: 'Likely cause' },
            { fa: 'اول کجا را بگردید', en: 'Where to look first' },
          ],
          rows: [
            [
              { fa: 'اختلاف عددی گرد مثل 10، 100 یا 1,000 است', en: 'The difference is a round number like 10, 100 or 1,000' },
              { fa: 'اشتباه در جمع زدن', en: 'An addition slip' },
              { fa: 'دوباره جمع زدن ستون‌ها', en: 'Re-add the columns' },
            ],
            [
              { fa: 'اختلاف برابر یک مبلغ در دفاتر است', en: 'The difference equals an amount in the books' },
              { fa: 'یک طرف ثبت منتقل نشده یا حسابی از تراز جا افتاده', en: 'One side of an entry not posted, or an account left off' },
              { fa: 'سطرها و مانده‌هایی به همین مبلغ', en: 'Lines and balances of exactly that amount' },
            ],
            [
              { fa: 'نصف اختلاف برابر یک مانده است', en: 'Half the difference equals a balance' },
              { fa: 'مانده در ستون اشتباه یا سطر در طرف اشتباه', en: 'A balance in the wrong column, or a line on the wrong side' },
              { fa: 'مانده‌ها و سطرهایی برابر نصف اختلاف', en: 'Balances and lines equal to half the difference' },
            ],
            [
              { fa: 'اختلاف بر 9 بخش‌پذیر است', en: 'The difference divides by 9' },
              { fa: 'جابه‌جایی ارقام یا لغزش', en: 'A transposition or a slide' },
              { fa: 'ارقامی که دو رقم مجاورشان به اندازه رقم اول خارج‌قسمت با هم فرق دارند', en: 'Figures whose adjacent digits differ by the quotient’s lead digit' },
            ],
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'اگر اختلاف ÷ 9 عددی صحیح باشد: احتمال جابه‌جایی ارقام یا خطای لغزش',
            en: 'Difference ÷ 9 = whole number → suspect a transposition or a slide',
          },
          note: {
            fa: 'چرا 9؟ جابه‌جا کردن دو رقم مجاور، عدد را همیشه به اندازه مضربی از 9 تغییر می‌دهد (مثلاً 5,200 − 2,500 = 2,700 = 9 × 300).',
            en: 'Why 9? Swapping two adjacent digits always changes a number by a multiple of 9 (e.g. 5,200 − 2,500 = 2,700 = 9 × 300).',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'ستون اشتباه: نصفش کنید', en: 'Wrong column: halve it' },
          text: {
            fa: 'فرض کنید مانده 1,000 برداشت در ستون بستانکار نوشته شود. جمع بدهکار 77,500 و جمع بستانکار 79,500 می‌شود؛ یعنی 2,000 اختلاف. نصف 2,000 برابر 1,000 است: دنبال مانده‌ای 1,000 در ستون اشتباه بگردید تا به حساب برداشت برسید.',
            en: 'Suppose Nova’s 1,000 Drawings balance is listed in the credit column. Debits total 77,500 and credits 79,500, a difference of 2,000. Half of 2,000 is 1,000: look for a 1,000 balance in the wrong column, and Drawings turns up.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'جابه‌جایی ارقام: تقسیم بر 9', en: 'Transposition: divide by 9' },
          text: {
            fa: 'حال فرض کنید هزینه اجاره 2,500 به‌صورت 5,200 نوشته شود. جمع بدهکار 81,200 و جمع بستانکار 78,500 می‌شود؛ اختلاف 2,700 است. حاصل 2,700 ÷ 9 برابر 300 و عددی صحیح است، پس به جابه‌جایی ارقام شک کنید: 2,500 و 5,200.',
            en: 'Now suppose Rent expense of 2,500 is copied as 5,200. Debits total 81,200 against credits of 78,500, a difference of 2,700. 2,700 ÷ 9 = 300, a whole number, so check for swapped digits: 2,500 vs 5,200.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'لغزش: یک صفر اضافه', en: 'Slide: one zero too many' },
          text: {
            fa: 'اگر پیش‌پرداخت بیمه 1,200 به‌صورت 12,000 نوشته شود، جمع بدهکار 89,300 می‌شود و اختلاف 10,800 است. 10,800 ÷ 9 = 1,200؛ یعنی خارج‌قسمت دقیقاً همان رقمی است که یک صفر اضافه گرفته. در لغزش یک‌رقمی، خارج‌قسمت تقسیم بر 9 خودِ رقم اصلی را نشان می‌دهد.',
            en: 'If Prepaid insurance of 1,200 is written as 12,000, debits total 89,300 and the difference is 10,800. 10,800 ÷ 9 = 1,200: the quotient is exactly the figure that gained a zero. In a one-place slide, dividing by 9 hands you the original figure.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'خارج‌قسمت هم سرنخ است', en: 'The quotient is a clue too' },
          text: {
            fa: 'در جابه‌جایی دو رقم مجاور، رقم اول خارج‌قسمت می‌گوید دو رقم جابه‌جاشده چقدر با هم فرق دارند و جای آن نشان می‌دهد کدام رقم‌ها جابه‌جا شده‌اند. 2,700 ÷ 9 = 300: یعنی دو رقمی که 3 واحد فرق دارند، در جایگاه صدگان و هزارگان (2 و 5 در 2,500). 270 ÷ 9 = 30: دو رقم با 3 واحد فاصله، در جایگاه دهگان و صدگان.',
            en: 'In an adjacent-digit swap, the quotient’s lead digit tells you how far apart the two swapped digits are, and its position shows where they sit. 2,700 ÷ 9 = 300: two digits 3 apart, in the hundreds and thousands places (the 2 and 5 of 2,500). 270 ÷ 9 = 30: two digits 3 apart, in the tens and hundreds places.',
          },
        },
      ],
    },
    {
      id: 'correcting-errors',
      title: { fa: 'اصلاح خطاها و اشتباهات رایج', en: 'Correcting Errors and Common Mistakes' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'وقتی خطا پیدا شد، جای اصلاح آن به جایی بستگی دارد که خطا در آن متولد شده است. اصلاح در جای اشتباه، خطای تازه می‌سازد.',
            en: 'Once an error is found, where you fix it depends on where it was born. Fixing it in the wrong place creates a new error.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'خطا کجاست و چگونه اصلاح می‌شود؟', en: 'Where is the error, and how is it fixed?' },
          head: [
            { fa: 'جای خطا', en: 'Where the error is' },
            { fa: 'روش اصلاح', en: 'How to fix it' },
          ],
          rows: [
            [
              { fa: 'فقط در تراز آزمایشی (رونویسی یا جمع)', en: 'Only on the trial balance (copying or adding)' },
              { fa: 'خودِ تراز را اصلاح کنید؛ ثبتی لازم نیست.', en: 'Correct the trial balance itself; no entry is needed.' },
            ],
            [
              { fa: 'در محاسبه مانده یک حساب', en: 'In computing a ledger balance' },
              { fa: 'مانده را در دفتر کل دوباره حساب کنید؛ ثبتی لازم نیست.', en: 'Recompute the balance in the ledger; no entry is needed.' },
            ],
            [
              { fa: 'در انتقال (مبلغ، طرف یا سطر جاافتاده)', en: 'In posting (amount, side or a missing line)' },
              {
                fa: 'دفتر کل را با دفتر روزنامه یکی کنید؛ در نرم‌افزار که انتقال خودکار است، این خطا تقریباً پیش نمی‌آید.',
                en: 'Bring the ledger back into line with the journal; in software, where posting is automatic, this error hardly ever arises.',
              },
            ],
            [
              { fa: 'در خودِ ثبت روزنامه (حساب اشتباه، مبلغ اشتباه در هر دو طرف، ثبت معکوس، تکراری یا جاافتاده)', en: 'In the journal entry itself (wrong account, same wrong amount on both sides, reversed, duplicated or omitted entry)' },
              {
                fa: 'یک ثبت تصحیحی (یا ثبت جاافتاده) در دفتر روزنامه بنویسید و آن را منتقل کنید.',
                en: 'Write a correcting entry (or the missing entry) in the journal and post it.',
              },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'اصلاح یک ثبت معکوس', en: 'Fixing a reversed entry' },
          text: {
            fa: 'اگر پرداخت روز 27 به‌صورت «بدهکار موجودی نقد 1,500 / بستانکار حساب‌های پرداختنی 1,500» ثبت شده باشد، موجودی نقد به‌جای 1,500 کاهش، 1,500 افزایش یافته است؛ یعنی 3,000 خطا. حساب‌های پرداختنی هم 3,000 بیشتر از واقع است. یک ثبت تصحیحی به مبلغ 3,000 هر دو را درست می‌کند. ثبت 1,500 فقط ثبت غلط را خنثی می‌کند و پرداخت هنوز ثبت‌نشده می‌ماند.',
            en: 'If the Day 27 payment was recorded as Dr Cash 1,500 / Cr Accounts payable 1,500, Cash went up 1,500 instead of down 1,500: a 3,000 error. Accounts payable is also 3,000 too high. One correcting entry for 3,000 fixes both. An entry for 1,500 would only cancel the wrong entry and leave the payment unrecorded.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت تصحیحی یک ثبت معکوس (مثال فرضی)', en: 'Correcting a reversed entry (hypothetical)' },
          entries: [
            {
              lines: [
                { account: ac.ap, debit: 3000 },
                { account: ac.cash, credit: 3000 },
              ],
              memo: {
                fa: '1,500 برای خنثی کردن ثبت معکوس و 1,500 برای ثبت درست پرداخت.',
                en: '1,500 to cancel the reversed entry plus 1,500 to record the payment properly.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: حساب معلق', en: 'In practice: the suspense account' },
          text: {
            fa: 'اگر اختلاف تراز فوراً پیدا نشود، برخی حسابداران آن را موقتاً در **حساب معلق** نگه می‌دارند تا کار ادامه یابد، و با پیدا شدن خطا، حساب معلق را می‌بندند. این راه‌حلی موقت است: صورت‌های مالی نهایی نباید حساب معلق داشته باشند و هر مانده‌ای در آن باید پیش از بستن دوره توضیح داده شود.',
            en: 'If a difference can’t be found straight away, some accountants park it temporarily in a **suspense account** so work can continue, and clear the account once the error is found. It is a stop-gap: final financial statements must not contain a suspense balance, and anything left in it must be explained before the period is closed.',
          },
        },
        { type: 'h', text: { fa: 'اشتباهات رایج در تهیه تراز', en: 'Common mistakes when preparing a trial balance' } },
        {
          type: 'list',
          items: [
            {
              fa: '**مانده در ستون اشتباه**: به‌ویژه برداشت در ستون بستانکار یا استهلاک انباشته در ستون بدهکار. قبل از نوشتن، مانده عادی حساب را به یاد بیاورید.',
              en: '**A balance in the wrong column**: especially Drawings as a credit or Accumulated depreciation as a debit. Recall the account’s normal balance before you write.',
            },
            {
              fa: '**نوشتن گردش به‌جای مانده**: در تراز دوستونی فقط مانده می‌آید، نه جمع بدهکار و بستانکار هر حساب.',
              en: '**Listing turnovers instead of balances**: a two-column trial balance shows only balances, not each account’s debit and credit totals.',
            },
            {
              fa: '**جا انداختن حساب**: به‌ویژه حساب‌هایی با مانده کوچک یا صفحه‌ای از دفتر کل که دیده نشده.',
              en: '**Leaving an account out**: especially small balances, or a ledger page that was overlooked.',
            },
            {
              fa: '**مانده‌های تاریخ‌های مختلف**: همه مانده‌ها باید مربوط به یک تاریخ باشند.',
              en: '**Mixing dates**: every balance must be taken at the same date.',
            },
            {
              fa: '**دست بردن در ارقام برای تراز کردن**: اختلاف را هرگز به یک حساب نچسبانید تا جمع‌ها برابر شوند؛ خطا را پیدا کنید.',
              en: '**Forcing the totals**: never plug the difference into an account to make the columns agree; find the error.',
            },
            {
              fa: '**تراز را مدرک درستی دانستن**: تراز متوازن فقط برابری را ثابت می‌کند.',
              en: '**Treating balance as proof of accuracy**: a balanced trial balance proves equality and nothing more.',
            },
          ],
        },
      ],
    },
    {
      id: 'three-trial-balances',
      title: { fa: 'سه تراز آزمایشی در چرخه حسابداری', en: 'Three Trial Balances in the Cycle' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'این گزارش در هر چرخه حسابداری سه بار و در سه مقطع متفاوت تهیه می‌شود. قالب آن ثابت است؛ آنچه تغییر می‌کند حساب‌هایی است که در آن می‌آیند و مانده‌هایشان.',
            en: 'The same report is prepared three times in every accounting cycle, at three different moments. The format never changes; what changes is which accounts appear and what their balances are.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'سه تراز آزمایشی نوا', en: 'Nova’s three trial balances' },
          head: [
            { fa: 'تراز آزمایشی', en: 'Trial balance' },
            { fa: 'زمان تهیه', en: 'Prepared' },
            { fa: 'شامل', en: 'Contains' },
            { fa: 'جمع هر ستون در نوا', en: 'Nova’s column totals' },
          ],
          numericCols: [3],
          rows: [
            [
              { fa: 'پیش از اصلاحات', en: 'Unadjusted' },
              { fa: 'پس از انتقال رویدادهای دوره', en: 'After posting the period’s transactions' },
              { fa: 'همه حساب‌های دارای مانده، پیش از ثبت‌های اصلاحی', en: 'Every account with a balance, before adjustments' },
              78500,
            ],
            [
              { fa: 'پس از اصلاحات', en: 'Adjusted' },
              { fa: 'پس از انتقال ثبت‌های اصلاحی', en: 'After posting adjusting entries' },
              { fa: 'همه حساب‌ها، از جمله هزینه‌ها، بدهی‌های تعهدی و حساب‌های کاهنده تازه', en: 'All accounts, including new expenses, accruals and contra accounts' },
              80250,
            ],
            [
              { fa: 'پس از بستن حساب‌ها', en: 'Post-closing' },
              { fa: 'پس از ثبت‌های بستن', en: 'After closing entries' },
              { fa: 'فقط حساب‌های دائمی (ترازنامه‌ای)', en: 'Permanent (balance-sheet) accounts only' },
              71400,
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'این ارقام از کجا می‌آیند؟', en: 'Where the numbers come from' },
          text: {
            fa: 'ثبت‌های اصلاحی (در درس ثبت‌های اصلاحی) با افزودن هزینه‌ها، اقلام تعهدی و استهلاک انباشته، جمع هر ستون را به 80,250 می‌رسانند. سپس با بستن حساب‌ها، مانده درآمدها، هزینه‌ها و برداشت صفر می‌شود و سود خالص 4,850 پس از کسر برداشت 1,000 به حساب سرمایه می‌رود (50,000 + 4,850 − 1,000 = 53,850). جمع تراز آزمایشی پس از بستن حساب‌ها 71,400 است.',
            en: 'Adjusting entries (in the lesson on adjusting entries) lift each column to 80,250 by adding expenses, accruals and accumulated depreciation. Closing then zeroes out revenue, expenses and drawings and moves net income of 4,850, less drawings of 1,000, into Capital (50,000 + 4,850 − 1,000 = 53,850). The post-closing trial balance totals 71,400.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'اهمیت تراز پس از بستن حساب‌ها', en: 'Why the post-closing trial balance matters' },
          text: {
            fa: 'این تراز ثابت می‌کند که دفاتر پیش از آغاز دوره بعد متوازن‌اند و همه حساب‌های موقت واقعاً صفر شده‌اند.',
            en: 'It proves the books are in balance before the next period begins, and that every temporary account really is back to zero.',
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
            fa: 'تمرین‌ها از ساده به چالشی مرتب شده‌اند. در تمرین‌های خطایابی، پیش از نگاه به راه‌حل، روش‌های این درس را به ترتیب به کار ببرید.',
            en: 'The exercises run from easy to challenging. In the error-hunting ones, apply the techniques of this lesson in order before you look at the solution.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تهیه تراز آزمایشی از روی مانده‌ها', en: 'Prepare a trial balance from balances' },
          difficulty: 'easy',
          problem: {
            fa: 'مانده حساب‌های **آموزشگاه زبان آوا** (مالک: مینا) در پایان ماه، بدون ترتیب و بدون مشخص شدن طرف، در جدول آمده است. تراز آزمایشی را به ترتیب درست تهیه کنید و جمع ستون‌ها را به دست آورید.',
            en: 'The month-end balances of **Ava Language School** (owner: Mina) are listed below in no particular order and without their sides. Prepare the trial balance in the proper order and total the columns.',
          },
          given: {
            head: [
              { fa: 'حساب', en: 'Account' },
              { fa: 'مانده', en: 'Balance' },
            ],
            numericCols: [1],
            rows: [
              [{ fa: 'درآمد شهریه', en: 'Tuition revenue' }, 14600],
              [ac.cash, 9850],
              [ac.rent, 3200],
              [ac.ap, 2150],
              [{ fa: 'تجهیزات (میز و رایانه)', en: 'Equipment (furniture and computers)' }, 11000],
              [{ fa: 'سرمایه مینا', en: 'Capital (Mina)' }, 16000],
              [{ fa: 'هزینه حقوق مدرسان', en: 'Teachers’ salaries expense' }, 6400],
              [ac.ar, 2700],
              [{ fa: 'پیش‌دریافت شهریه', en: 'Unearned tuition' }, 3500],
              [ac.supplies, 900],
              [{ fa: 'برداشت مینا', en: 'Drawings (Mina)' }, 1500],
              [gx.utilities, 700],
            ],
          },
          hint: {
            fa: 'طرف هر مانده را از مانده عادی حساب بفهمید. پیش‌دریافت شهریه بدهی است و برداشت، بدهکار.',
            en: 'Work out each balance’s side from the account’s normal balance. Unearned tuition is a liability, and Drawings is a debit.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'طرف هر حساب را تعیین کنید', en: 'Decide each side' },
                  text: {
                    fa: 'دارایی‌ها، هزینه‌ها و برداشت بدهکارند؛ بدهی‌ها (از جمله پیش‌دریافت شهریه)، سرمایه و درآمد بستانکار.',
                    en: 'Assets, expenses and drawings are debits; liabilities (including unearned tuition), capital and revenue are credits.',
                  },
                },
                {
                  title: { fa: 'به ترتیب فهرست حساب‌ها بچینید', en: 'Order by the chart of accounts' },
                  text: {
                    fa: 'دارایی‌ها، بدهی‌ها، حقوق مالکانه، درآمد، هزینه‌ها.',
                    en: 'Assets, liabilities, equity, revenue, expenses.',
                  },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'آموزشگاه زبان آوا، تراز آزمایشی، پایان ماه', en: 'Ava Language School, Trial Balance, month-end' },
              head: [
                { fa: 'حساب', en: 'Account' },
                { fa: 'بدهکار', en: 'Debit' },
                { fa: 'بستانکار', en: 'Credit' },
              ],
              numericCols: [1, 2],
              rows: [
                [ac.cash, 9850, blank],
                [ac.ar, 2700, blank],
                [ac.supplies, 900, blank],
                [{ fa: 'تجهیزات', en: 'Equipment' }, 11000, blank],
                [ac.ap, blank, 2150],
                [{ fa: 'پیش‌دریافت شهریه', en: 'Unearned tuition' }, blank, 3500],
                [{ fa: 'سرمایه مینا', en: 'Capital (Mina)' }, blank, 16000],
                [{ fa: 'برداشت مینا', en: 'Drawings (Mina)' }, 1500, blank],
                [{ fa: 'درآمد شهریه', en: 'Tuition revenue' }, blank, 14600],
                [{ fa: 'هزینه حقوق مدرسان', en: 'Teachers’ salaries expense' }, 6400, blank],
                [ac.rent, 3200, blank],
                [gx.utilities, 700, blank],
                [totals, 36250, 36250],
              ],
            },
          ],
          answer: {
            fa: 'جمع هر دو ستون 36,250 است.',
            en: 'Both columns total 36,250.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'اختلاف را نصف کنید', en: 'Halve the difference' },
          difficulty: 'medium',
          problem: {
            fa: 'کارمند **تعمیرگاه داریان** تراز آزمایشی زیر را تهیه کرده است و جمع‌ها برابر نیستند. مانده‌های دفتر کل درست محاسبه شده‌اند. خطا را پیدا کنید و جمع درست را به دست آورید.',
            en: 'The clerk at **Daryan Repair Shop** prepared the trial balance below, and the totals don’t agree. The ledger balances were computed correctly. Find the error and the correct totals.',
          },
          given: {
            head: [
              { fa: 'حساب', en: 'Account' },
              { fa: 'بدهکار', en: 'Debit' },
              { fa: 'بستانکار', en: 'Credit' },
            ],
            numericCols: [1, 2],
            rows: [
              [ac.cash, 12400, blank],
              [ac.ar, 3150, blank],
              [{ fa: 'تجهیزات', en: 'Equipment' }, 24000, blank],
              [ac.ap, blank, 4300],
              [gx.capital, blank, 30000],
              [gx.drawings, blank, 850],
              [{ fa: 'درآمد تعمیرات', en: 'Repair revenue' }, blank, 19800],
              [gx.wages, 9600, blank],
              [ac.rent, 3000, blank],
              [gx.utilities, 1100, blank],
              [totals, 53250, 54950],
            ],
          },
          hint: {
            fa: 'اختلاف را حساب کنید. آیا مانده‌ای به همین اندازه هست؟ آیا بر 9 بخش‌پذیر است؟ نصف آن چطور؟',
            en: 'Work out the difference. Is there a balance of exactly that size? Does it divide by 9? What about half of it?',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'اختلاف', en: 'The difference' },
                  text: {
                    fa: '54,950 − 53,250 = 1,700؛ ستون بستانکار بزرگ‌تر است.',
                    en: '54,950 − 53,250 = 1,700; the credit column is larger.',
                  },
                },
                {
                  title: { fa: 'مبلغی برابر اختلاف؟', en: 'An amount equal to the difference?' },
                  text: { fa: 'هیچ مانده‌ای 1,700 نیست.', en: 'No balance is 1,700.' },
                },
                {
                  title: { fa: 'تقسیم بر 9', en: 'Divide by 9' },
                  text: {
                    fa: '1,700 ÷ 9 عدد صحیح نیست؛ پس جابه‌جایی ارقام بعید است.',
                    en: '1,700 ÷ 9 is not a whole number, so a transposition is unlikely.',
                  },
                },
                {
                  title: { fa: 'نصف اختلاف', en: 'Half the difference' },
                  text: {
                    fa: 'نصف 1,700 برابر 850 است و برداشت 850 در ستون بستانکار آمده؛ در حالی که مانده عادی برداشت بدهکار است.',
                    en: 'Half of 1,700 is 850, and the 850 Drawings balance sits in the credit column, though Drawings normally has a debit balance.',
                  },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'اصلاح جمع‌ها', en: 'Correcting the totals' },
              head: [
                { fa: 'ستون', en: 'Column' },
                { fa: 'جمع کارمند', en: 'Clerk’s total' },
                { fa: 'اصلاح', en: 'Correction' },
                { fa: 'جمع درست', en: 'Correct total' },
              ],
              rows: [
                [{ fa: 'بدهکار', en: 'Debit' }, same('53,250'), { fa: 'افزایش 850', en: 'add 850' }, same('54,100')],
                [{ fa: 'بستانکار', en: 'Credit' }, same('54,950'), { fa: 'کاهش 850', en: 'less 850' }, same('54,100')],
              ],
            },
          ],
          answer: {
            fa: 'برداشت 850 باید در ستون بدهکار باشد؛ پس از جابه‌جایی، جمع هر دو ستون 54,100 است.',
            en: 'Drawings of 850 belongs in the debit column; once moved, both columns total 54,100.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تقسیم بر 9', en: 'Divide by 9' },
          difficulty: 'medium',
          problem: {
            fa: 'تراز آزمایشی **برنامه‌ریزی مراسم نیلو** متوازن نیست. مانده‌های دفتر کل درست‌اند؛ خطا هنگام رونویسی یکی از مانده‌ها در تراز رخ داده است. آن را پیدا کنید.',
            en: 'The trial balance of **Nilou Event Planning** doesn’t balance. The ledger balances are correct; the error happened when one balance was copied onto the trial balance. Find it.',
          },
          given: {
            head: [
              { fa: 'حساب', en: 'Account' },
              { fa: 'بدهکار', en: 'Debit' },
              { fa: 'بستانکار', en: 'Credit' },
            ],
            numericCols: [1, 2],
            rows: [
              [ac.cash, 8320, blank],
              [ac.ar, 4600, blank],
              [{ fa: 'تجهیزات', en: 'Equipment' }, 15000, blank],
              [ac.ap, blank, 3890],
              [gx.capital, blank, 20000],
              [gx.drawings, 1200, blank],
              [ac.revenue, blank, 23000],
              [gx.wages, 9800, blank],
              [ac.rent, 4500, blank],
              [gx.utilities, 1740, blank],
              [gx.advertising, 2000, blank],
              [totals, 47160, 46890],
            ],
          },
          hint: {
            fa: 'اختلاف را بر 9 تقسیم کنید و از خارج‌قسمت برای پیدا کردن دو رقم جابه‌جاشده کمک بگیرید.',
            en: 'Divide the difference by 9 and use the quotient to find the two swapped digits.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'اختلاف', en: 'The difference' },
                  text: {
                    fa: '47,160 − 46,890 = 270؛ ستون بدهکار بیشتر است. نصف آن 135 است و مانده‌ای به این مبلغ نداریم.',
                    en: '47,160 − 46,890 = 270; the debit column is too high. Half is 135, and no balance has that value.',
                  },
                },
                {
                  title: { fa: 'تقسیم بر 9', en: 'Divide by 9' },
                  text: {
                    fa: '270 ÷ 9 = 30؛ پس دو رقم مجاور با 3 واحد فاصله، در جایگاه دهگان و صدگان، جابه‌جا شده‌اند. چون ستون بدهکار زیادی است، رقم بزرگ‌تر در تراز به جایگاه صدگان رفته است.',
                    en: '270 ÷ 9 = 30, so two adjacent digits 3 apart, in the tens and hundreds places, were swapped. Because the debit column is too high, the larger digit ended up in the hundreds place on the trial balance.',
                  },
                },
                {
                  title: { fa: 'مانده‌ها را مرور کنید', en: 'Scan the balances' },
                  text: {
                    fa: 'در میان مانده‌های بدهکار، فقط هزینه آب، برق و گاز (1,740) صدگان و دهگانی با 3 واحد فاصله دارد (7 و 4). عدد درست 1,470 است: 1,740 − 1,470 = 270.',
                    en: 'Among the debit balances, only Utilities expense (1,740) has hundreds and tens digits 3 apart (7 and 4). The correct figure is 1,470: 1,740 − 1,470 = 270.',
                  },
                },
                {
                  title: { fa: 'کنترل', en: 'Check' },
                  text: {
                    fa: 'جمع بدهکار درست: 47,160 − 270 = 46,890؛ برابر با جمع بستانکار.',
                    en: 'Corrected debits: 47,160 − 270 = 46,890, equal to the credits.',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: 'هزینه آب، برق و گاز 1,470 بوده که 1,740 نوشته شده؛ پس از اصلاح، جمع هر ستون 46,890 است.',
            en: 'Utilities expense of 1,470 was copied as 1,740; after correction both columns total 46,890.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'کدام خطاها تراز را به هم می‌زنند؟', en: 'Which errors upset the balance?' },
          difficulty: 'hard',
          problem: {
            fa: 'تراز آزمایشی **خدمات پیک بهنام** جمع بدهکار 59,550 و جمع بستانکار 59,330 نشان می‌دهد. بررسی، پنج خطا را آشکار کرده است: (الف) وصول 2,000 از یک مشتری دو بار در دفتر روزنامه ثبت شده است. (ب) بدهکار 1,200 هزینه سوخت منتقل شده، اما بستانکار 1,200 موجودی نقد منتقل نشده است. (ج) مانده 400 هزینه اجاره در ستون بستانکار تراز نوشته شده است. (د) خرید نسیه یک موتورسیکلت به بهای 3,500 به بدهکار هزینه تعمیرات ثبت شده است. (ه) درآمد خدمات 9,350 در تراز 9,530 نوشته شده است. مشخص کنید کدام خطاها برابری تراز را به هم می‌زنند، جمع درست ستون‌ها را حساب کنید و بگویید کدام خطاها به ثبت تصحیحی نیاز دارند.',
            en: 'The trial balance of **Behnam Courier Services** shows debits of 59,550 and credits of 59,330. A review has found five errors: (a) a 2,000 collection from a customer was journalized twice. (b) A 1,200 debit to Fuel expense was posted, but the 1,200 credit to Cash was not. (c) The 400 Rent expense balance was listed in the credit column of the trial balance. (d) A motorbike bought on account for 3,500 was debited to Repairs expense. (e) Service revenue of 9,350 was copied onto the trial balance as 9,530. Decide which errors upset the trial balance, compute the correct column totals, and say which errors need correcting entries.',
          },
          hint: {
            fa: 'برای هر خطا جداگانه بپرسید: ستون بدهکار تراز چقدر و در کدام جهت جابه‌جا شده؟ ستون بستانکار چطور؟ اگر دو حساب در یک ستون باشند، اثرشان ممکن است خنثی شود.',
            en: 'For each error separately ask: by how much, and which way, is the debit column off? And the credit column? When both accounts sit in the same column, their effects can cancel.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'اثر هر خطا بر ستون‌های تراز', en: 'Effect of each error on the trial balance columns' },
              head: [
                { fa: 'خطا', en: 'Error' },
                { fa: 'ستون بدهکار', en: 'Debit column' },
                { fa: 'ستون بستانکار', en: 'Credit column' },
                { fa: 'تراز را به هم می‌زند؟', en: 'Upsets the balance?' },
              ],
              rows: [
                [
                  { fa: '(الف) ثبت تکراری وصول', en: '(a) Duplicated collection' },
                  { fa: 'بدون اثر بر جمع (موجودی نقد 2,000 زیادی، حساب‌های دریافتنی 2,000 کم)', en: 'No effect on the total (Cash 2,000 too high, receivables 2,000 too low)' },
                  none,
                  no,
                ],
                [
                  { fa: '(ب) بستانکار موجودی نقد منتقل نشده', en: '(b) Cash credit not posted' },
                  { fa: '1,200 زیادی', en: '1,200 too high' },
                  none,
                  yes,
                ],
                [
                  { fa: '(ج) اجاره در ستون بستانکار', en: '(c) Rent in the credit column' },
                  { fa: '400 کم', en: '400 too low' },
                  { fa: '400 زیادی', en: '400 too high' },
                  yes,
                ],
                [
                  { fa: '(د) موتورسیکلت به‌عنوان هزینه', en: '(d) Motorbike as an expense' },
                  { fa: 'بدون اثر بر جمع (هر دو حساب بدهکارند)', en: 'No effect on the total (both accounts are debits)' },
                  none,
                  no,
                ],
                [
                  { fa: '(ه) درآمد 9,530 به‌جای 9,350', en: '(e) Revenue as 9,530 instead of 9,350' },
                  none,
                  { fa: '180 زیادی', en: '180 too high' },
                  yes,
                ],
              ],
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'جمع درست بدهکار', en: 'Correct debit total' },
                  text: {
                    fa: '59,550 − 1,200 + 400 = 58,750',
                    en: '59,550 − 1,200 + 400 = 58,750',
                  },
                },
                {
                  title: { fa: 'جمع درست بستانکار', en: 'Correct credit total' },
                  text: {
                    fa: '59,330 − 400 − 180 = 58,750',
                    en: '59,330 − 400 − 180 = 58,750',
                  },
                },
                {
                  title: { fa: 'روش اصلاح هر خطا', en: 'How each error is fixed' },
                  text: {
                    fa: '(ب) با انتقال بستانکار جاافتاده به حساب موجودی نقد؛ (ج) و (ه) با اصلاح خودِ تراز؛ (الف) و (د) با ثبت تصحیحی در دفتر روزنامه.',
                    en: '(b) by posting the missing credit to Cash; (c) and (e) by correcting the trial balance itself; (a) and (d) with correcting entries in the journal.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              title: { fa: 'ثبت‌های تصحیحی برای خطاهای پنهان', en: 'Correcting entries for the hidden errors' },
              entries: [
                {
                  date: { fa: '(الف)', en: '(a)' },
                  lines: [
                    { account: ac.ar, debit: 2000 },
                    { account: ac.cash, credit: 2000 },
                  ],
                  memo: { fa: 'خنثی کردن وصول تکراری.', en: 'Cancels the duplicated collection.' },
                },
                {
                  date: { fa: '(د)', en: '(d)' },
                  lines: [
                    { account: gx.vehicles, debit: 3500 },
                    { account: gx.repairsExp, credit: 3500 },
                  ],
                  memo: { fa: 'انتقال موتورسیکلت از هزینه به دارایی.', en: 'Moves the motorbike from expense to asset.' },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              title: { fa: 'درس اصلی', en: 'The real lesson' },
              text: {
                fa: 'حتی پس از اصلاح (ب)، (ج) و (ه)، تراز با وجود خطاهای (الف) و (د) کاملاً متوازن می‌شد. اگر به تراز بسنده می‌کردیم، موجودی نقد 2,000 زیادی و سود 3,500 کمتر از واقع گزارش می‌شد.',
                en: 'Even after fixing (b), (c) and (e), the trial balance would balance perfectly with errors (a) and (d) still in it. Relying on the trial balance alone would have reported Cash 2,000 too high and profit 3,500 too low.',
              },
            },
          ],
          answer: {
            fa: 'خطاهای (ب)، (ج) و (ه) تراز را به هم می‌زنند؛ جمع درست هر ستون 58,750 است؛ (الف) و (د) به ثبت تصحیحی نیاز دارند.',
            en: 'Errors (b), (c) and (e) upset the balance; the correct totals are 58,750 each; (a) and (d) need correcting entries.',
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
              fa: 'تراز آزمایشی همه مانده‌های دفتر کل را در یک تاریخ فهرست می‌کند؛ برابری ستون‌ها فقط درستی حساب‌وکتاب دوطرفه را ثابت می‌کند، نه بیشتر.',
              en: 'A trial balance lists every ledger balance at one date; equal columns prove the double-entry arithmetic, nothing more.',
            },
            {
              fa: 'جمع هر دو ستون تراز آزمایشی پیش از اصلاحات نوا 78,500 است و ستون‌های گردش تراز چهارستونی آن 111,700.',
              en: 'Nova’s unadjusted trial balance totals 78,500 on both sides, and the turnover columns of its four-column version 111,700.',
            },
            {
              fa: 'حذف، حساب اشتباه، خطای جبران‌کننده، ثبت معکوس و ثبت تکراری جمع‌ها را برابر نگه می‌دارند و پنهان می‌مانند.',
              en: 'Omissions, wrong accounts, compensating errors, reversed entries and duplicated entries keep the totals equal and go undetected.',
            },
            {
              fa: 'برای خطای ستون اشتباه اختلاف را نصف کنید و برای جابه‌جایی ارقام و لغزش، آن را بر 9 تقسیم کنید؛ خارج‌قسمت هم سرنخ می‌دهد.',
              en: 'Halve the difference to find wrong-column errors; divide it by 9 to find transpositions and slides; the quotient is a clue too.',
            },
            {
              fa: 'خطا را همان‌جا اصلاح کنید که رخ داده: در تراز، در دفتر کل یا با ثبت تصحیحی در دفتر روزنامه؛ و هرگز اختلاف را به یک حساب نچسبانید.',
              en: 'Fix each error where it was made: on the trial balance, in the ledger, or with a correcting entry in the journal; and never plug the difference.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'گام بعدی', en: 'What comes next' },
          text: {
            fa: 'تراز آزمایشی نوا متوازن است، اما هنوز کامل نیست. در درس ثبت‌های اصلاحی، حساب‌ها تا پایان ماه به‌روز می‌شوند.',
            en: 'Nova’s trial balance balances, but it isn’t complete yet. In the lesson on adjusting entries, every account is brought up to date at month-end.',
          },
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'تراز آزمایشی', en: 'Trial balance' },
              def: {
                fa: 'فهرست همه حساب‌های دفتر کل و مانده آن‌ها در یک تاریخ معین که برابری جمع بدهکارها و بستانکارها را نشان می‌دهد.',
                en: 'A list of all ledger accounts and their balances at a date, showing that total debits equal total credits.',
              },
            },
            {
              term: { fa: 'تراز آزمایشی چهارستونی', en: 'Four-column trial balance' },
              def: {
                fa: 'ترازی که برای هر حساب، گردش بدهکار و بستانکار دوره و مانده بدهکار یا بستانکار را نشان می‌دهد.',
                en: 'A trial balance showing, for each account, the period’s debit and credit turnover as well as its debit or credit balance.',
              },
            },
            {
              term: { fa: 'تراز آزمایشی پیش از اصلاحات', en: 'Unadjusted trial balance' },
              def: {
                fa: 'پس از انتقال رویدادهای دوره و پیش از ثبت‌های اصلاحی تهیه می‌شود.',
                en: 'Prepared after posting the period’s transactions, before adjusting entries.',
              },
            },
            {
              term: { fa: 'تراز آزمایشی پس از اصلاحات', en: 'Adjusted trial balance' },
              def: {
                fa: 'پس از ثبت‌های اصلاحی تهیه می‌شود و منبع تهیه صورت‌های مالی است.',
                en: 'Prepared after adjusting entries; the source of the financial statements.',
              },
            },
            {
              term: { fa: 'تراز آزمایشی پس از بستن حساب‌ها', en: 'Post-closing trial balance' },
              def: {
                fa: 'پس از ثبت‌های بستن تهیه می‌شود و فقط حساب‌های دائمی را در بر دارد.',
                en: 'Prepared after closing entries; it lists only permanent accounts.',
              },
            },
            {
              term: { fa: 'خطای جابه‌جایی ارقام', en: 'Transposition error' },
              def: {
                fa: 'جابه‌جا شدن دو رقم (مثلاً نوشتن 2,500 به‌صورت 5,200)؛ اختلاف حاصل بر 9 بخش‌پذیر است.',
                en: 'Two digits swapped (e.g. 2,500 written as 5,200); the resulting difference is divisible by 9.',
              },
            },
            {
              term: { fa: 'خطای لغزش', en: 'Slide error' },
              def: {
                fa: 'جابه‌جا شدن ممیز یا افزوده یا کاسته شدن صفر (مثلاً نوشتن 1,200 به‌صورت 12,000)؛ اختلاف آن نیز بر 9 بخش‌پذیر است.',
                en: 'A misplaced decimal point or an added or dropped zero (e.g. 1,200 written as 12,000); the difference is also divisible by 9.',
              },
            },
            {
              term: { fa: 'خطاهای جبران‌کننده', en: 'Compensating errors' },
              def: {
                fa: 'دو یا چند خطا که اثر یکدیگر را خنثی می‌کنند و جمع‌ها را برابر باقی می‌گذارند.',
                en: 'Two or more errors that offset each other, leaving the totals equal.',
              },
            },
            {
              term: { fa: 'حساب معلق', en: 'Suspense account' },
              def: {
                fa: 'حسابی موقت که اختلاف تراز تا پیدا شدن خطا در آن نگه داشته می‌شود و پیش از تهیه صورت‌های مالی باید صفر شود.',
                en: 'A temporary account that holds a trial-balance difference until the error is found; it must be cleared before the statements are prepared.',
              },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: { fa: 'تراز آزمایشیِ متوازن چه چیزی را ثابت می‌کند؟', en: 'What does a balanced trial balance prove?' },
      options: [
        { fa: 'اینکه همه رویدادها درست ثبت شده‌اند', en: 'That every transaction was recorded correctly' },
        { fa: 'اینکه جمع مانده‌های بدهکار با جمع مانده‌های بستانکار برابر است', en: 'That total debit balances equal total credit balances' },
        { fa: 'اینکه سود خالص درست است', en: 'That net income is correct' },
        { fa: 'اینکه هیچ رویدادی از قلم نیفتاده است', en: 'That no transaction was omitted' },
      ],
      answer: 1,
      explain: {
        fa: 'برابری دو ستون تنها چیزی است که تراز آزمایشی ثابت می‌کند. حذف رویداد، حساب اشتباه و خطاهای دیگر می‌توانند در یک تراز آزمایشیِ کاملاً متوازن پنهان بمانند؛ پس گزینه‌هایی که از «درستی» یا «کامل بودن» حرف می‌زنند، بیش از حد ادعا می‌کنند.',
        en: 'Equal columns are the only thing a trial balance proves. Omissions, wrong accounts and other errors can hide inside a perfectly balanced trial balance, so the options claiming correctness or completeness claim too much.',
      },
    },
    {
      q: { fa: 'کدام خطا جمع ستون‌های تراز آزمایشی نوا را نابرابر می‌کند؟', en: 'Which error will make Nova’s trial balance totals unequal?' },
      options: [
        { fa: 'ثبت نکردن کامل پرداخت حقوق روز 20', en: 'Omitting the Day 20 salaries entry entirely' },
        { fa: 'دو بار ثبت کردن درآمد نقدی روز 8', en: 'Recording the Day 8 cash revenue twice' },
        {
          fa: 'انتقال بدهکار هزینه اجاره روز 15 بدون انتقال بستانکار موجودی نقد',
          en: 'Posting the Day 15 debit to Rent expense but never posting the credit to Cash',
        },
        { fa: 'بدهکار کردن ملزومات به‌جای تجهیزات در روز 3', en: 'Debiting Supplies instead of Equipment on Day 3' },
      ],
      answer: 2,
      explain: {
        fa: 'انتقال فقط یک طرف ثبت، 2,500 به طرف بدهکار می‌افزاید بی‌آنکه چیزی به طرف بستانکار اضافه شود. سه خطای دیگر هر دو طرف را به یک اندازه تغییر می‌دهند (یا هیچ‌کدام را)، پس جمع‌ها برابر می‌مانند.',
        en: 'Posting only half an entry adds 2,500 to the debit side with nothing on the credit side. The other three errors change both sides equally (or neither), so the totals still agree.',
      },
    },
    {
      q: {
        fa: 'جمع بدهکار 81,200 و جمع بستانکار 78,500 است و اختلاف بر 9 بخش‌پذیر است. محتمل‌ترین علت چیست؟',
        en: 'Debits total 81,200 and credits 78,500, and the difference divides evenly by 9. What is the most likely cause?',
      },
      options: [
        { fa: 'جابه‌جایی ارقام، مثلاً نوشتن 2,500 به‌صورت 5,200', en: 'A transposition, such as 2,500 copied as 5,200' },
        { fa: 'از قلم افتادن یک رویداد', en: 'An omitted transaction' },
        { fa: 'خطای جبران‌کننده', en: 'A compensating error' },
        { fa: 'ثبت تکراری', en: 'A duplicated entry' },
      ],
      answer: 0,
      explain: {
        fa: 'حاصل 2,700 ÷ 9 برابر 300 است. جابه‌جا کردن دو رقم مجاور همیشه اختلافی به اندازه مضربی از 9 ایجاد می‌کند. حذف رویداد، خطای جبران‌کننده و ثبت تکراری جمع‌ها را برابر نگه می‌دارند و اصلاً اختلافی نمی‌سازند.',
        en: '2,700 ÷ 9 = 300. Swapping two adjacent digits always creates a difference that is a multiple of 9. Omitted, compensating and duplicated entries keep the totals equal and create no difference at all.',
      },
    },
    {
      q: { fa: 'جمع بدهکار 77,500 و جمع بستانکار 79,500 است. کدام خطا با این وضعیت سازگارتر است؟', en: 'Debits total 77,500 and credits 79,500. Which error fits best?' },
      options: [
        { fa: 'ثبت معکوس', en: 'A reversed entry' },
        { fa: 'از قلم افتادن یک رویداد', en: 'An omitted transaction' },
        { fa: 'جابه‌جایی ارقام', en: 'A transposition error' },
        { fa: 'نوشتن یک مانده بدهکار 1,000 در ستون بستانکار', en: 'A 1,000 debit balance listed in the credit column' },
      ],
      answer: 3,
      explain: {
        fa: 'نصف اختلاف 2,000 برابر 1,000 است؛ نشانه کلاسیک مانده‌ای که در ستون اشتباه نوشته شده است. 2,000 بر 9 بخش‌پذیر نیست و ثبت معکوس یا حذف رویداد نیز جمع‌ها را برابر نگه می‌دارد.',
        en: 'Half of the 2,000 difference is 1,000, the classic sign of a balance in the wrong column. 2,000 is not divisible by 9, and reversed or omitted entries keep the totals equal.',
      },
    },
    {
      q: { fa: 'کدام تراز آزمایشی فقط حساب‌های دائمی (ترازنامه‌ای) را در بر دارد؟', en: 'Which trial balance contains only permanent (balance-sheet) accounts?' },
      options: [
        { fa: 'تراز آزمایشی پیش از اصلاحات', en: 'The unadjusted trial balance' },
        { fa: 'تراز آزمایشی پس از اصلاحات', en: 'The adjusted trial balance' },
        { fa: 'تراز آزمایشی پس از بستن حساب‌ها', en: 'The post-closing trial balance' },
        { fa: 'هر سه', en: 'All three' },
      ],
      answer: 2,
      explain: {
        fa: 'ثبت‌های بستن، مانده حساب‌های درآمد، هزینه و برداشت را صفر می‌کنند؛ پس فقط دارایی‌ها، بدهی‌ها و سرمایه باقی می‌مانند. جمع هر ستون این تراز در نوا 71,400 است. دو تراز دیگر هنوز درآمد و هزینه دارند.',
        en: 'Closing entries reduce revenue, expense and drawings accounts to zero, so only assets, liabilities and capital remain: for Nova, 71,400 in each column. The other two still contain revenue and expenses.',
      },
    },
    {
      q: {
        fa: 'کارمندی ثبت روز 27 را برعکس، یعنی «بدهکار موجودی نقد 1,500 / بستانکار حساب‌های پرداختنی 1,500» ثبت می‌کند. چه اتفاقی می‌افتد؟',
        en: 'A clerk records Day 27 backwards, as Dr Cash 1,500 / Cr Accounts payable 1,500. What happens?',
      },
      options: [
        {
          fa: 'تراز آزمایشی همچنان متوازن است، اما موجودی نقد و حساب‌های پرداختنی هر دو نادرست‌اند',
          en: 'The trial balance still balances, but Cash and Accounts payable are both misstated',
        },
        { fa: 'تراز آزمایشی 1,500 اختلاف پیدا می‌کند', en: 'The trial balance is out of balance by 1,500' },
        { fa: 'تراز آزمایشی 3,000 اختلاف پیدا می‌کند', en: 'The trial balance is out of balance by 3,000' },
        { fa: 'تراز آزمایشی متوازن است و همه حساب‌ها درست‌اند', en: 'The trial balance balances and every account is correct' },
      ],
      answer: 0,
      explain: {
        fa: 'ثبت معکوس همچنان بدهکار و بستانکار برابر دارد، پس جمع‌ها برابر می‌مانند. اما موجودی نقد 3,000 بیش از واقع است (1,500 که باید کم می‌شد اضافه شده) و حساب‌های پرداختنی نیز به همین اندازه بیش از واقع است.',
        en: 'A reversed entry still has equal debits and credits, so the totals agree. But Cash is overstated by 3,000 (1,500 that should have been subtracted was added instead), and Accounts payable is overstated by the same amount.',
      },
    },
    {
      q: {
        fa: 'پیش‌پرداخت بیمه 1,200 در تراز آزمایشی نوا 12,000 نوشته می‌شود. اختلاف جمع ستون‌ها چقدر است؟',
        en: 'Prepaid insurance of 1,200 is copied onto Nova’s trial balance as 12,000. By how much do the column totals differ?',
      },
      options: [
        { fa: '1,200', en: '1,200' },
        { fa: '13,200', en: '13,200' },
        { fa: '9,720', en: '9,720' },
        { fa: '10,800', en: '10,800' },
      ],
      answer: 3,
      explain: {
        fa: 'ستون بدهکار به اندازه 12,000 − 1,200 = 10,800 زیادی است. این یک خطای لغزش است: 10,800 ÷ 9 = 1,200، یعنی خارج‌قسمت همان رقم اصلی است. 13,200 دو عدد را جمع کرده و 1,200 خودِ مانده درست است، نه اختلاف.',
        en: 'The debit column is too high by 12,000 − 1,200 = 10,800. It is a slide: 10,800 ÷ 9 = 1,200, so the quotient is the original figure. 13,200 adds the two numbers, and 1,200 is the correct balance, not the difference.',
      },
    },
    {
      q: {
        fa: 'در تراز آزمایشی چهارستونی نوا (روز 30)، جمع ستون گردش بدهکار چقدر است؟',
        en: 'In Nova’s four-column trial balance (Day 30), what is the total of the debit turnover column?',
      },
      options: [
        { fa: '78,500', en: '78,500' },
        { fa: '111,700', en: '111,700' },
        { fa: '80,250', en: '80,250' },
        { fa: '223,400', en: '223,400' },
      ],
      answer: 1,
      explain: {
        fa: 'ستون گردش همه مبالغی را که طی دوره به طرف بدهکار حساب‌ها منتقل شده جمع می‌زند؛ پس با جمع بدهکارهای دفتر روزنامه، یعنی 111,700، برابر است. 78,500 جمع ستون مانده است، 80,250 جمع تراز پس از اصلاحات و 223,400 جمع دو ستون گردش با هم.',
        en: 'The turnover column adds every amount posted to the debit side during the period, so it equals the journal’s debit total of 111,700. 78,500 is the balance column, 80,250 the adjusted trial balance, and 223,400 both turnover columns added together.',
      },
    },
    {
      q: {
        fa: 'جمع بدهکار تراز 630 بیشتر از جمع بستانکار است. کدام خطای منفرد این اختلاف را توضیح می‌دهد؟',
        en: 'Debits exceed credits by 630. Which single error explains this?',
      },
      options: [
        { fa: 'یک مانده بستانکار 630 در ستون بدهکار نوشته شده', en: 'A 630 credit balance was listed in the debit column' },
        { fa: 'هزینه اجاره 1,180 در ستون بدهکار 1,810 نوشته شده', en: 'Rent expense of 1,180 was copied into the debit column as 1,810' },
        { fa: 'یک سطر بدهکار 630 منتقل نشده', en: 'A 630 debit line was never posted' },
        { fa: 'درآمد 1,180 در ستون بستانکار 1,810 نوشته شده', en: 'Revenue of 1,180 was copied into the credit column as 1,810' },
      ],
      answer: 1,
      explain: {
        fa: '1,810 − 1,180 = 630 و ستون بدهکار زیادی می‌شود؛ 630 ÷ 9 = 70، یعنی دو رقم با 7 واحد فاصله (8 و 1) جابه‌جا شده‌اند. مانده 630 در ستون اشتباه اختلاف 1,260 می‌سازد، سطر بدهکارِ منتقل‌نشده ستون بدهکار را کم می‌کند و خطای درآمد ستون بستانکار را زیاد.',
        en: '1,810 − 1,180 = 630, and the debit column ends up too high; 630 ÷ 9 = 70, two digits 7 apart (8 and 1) swapped. A 630 balance in the wrong column would create a 1,260 difference, an unposted debit would make debits too low, and the revenue error would make credits too high.',
      },
    },
    {
      q: {
        fa: 'پرداخت 1,500 به فروشنده برعکس ثبت شده است (بدهکار موجودی نقد / بستانکار حساب‌های پرداختنی). اگر بخواهید با یک ثبت تصحیحی اصلاحش کنید، حساب‌های پرداختنی را چقدر بدهکار و موجودی نقد را چقدر بستانکار می‌کنید؟',
        en: 'A 1,500 payment to a supplier was recorded backwards (Dr Cash / Cr Accounts payable). To fix it with a single correcting entry, how much do you debit Accounts payable and credit Cash?',
      },
      options: [
        { fa: '1,500', en: '1,500' },
        { fa: '750', en: '750' },
        { fa: '3,000', en: '3,000' },
        { fa: 'هیچ؛ چون تراز متوازن است، اصلاحی لازم نیست', en: 'Nothing: the trial balance balances, so no fix is needed' },
      ],
      answer: 2,
      explain: {
        fa: 'ثبت غلط موجودی نقد را 1,500 بالا برده، در حالی که باید 1,500 پایین می‌آورد؛ فاصله 3,000 است و حساب‌های پرداختنی هم 3,000 زیادی است. ثبت 1,500 فقط ثبت غلط را خنثی می‌کند و پرداخت را ثبت‌نشده باقی می‌گذارد. متوازن بودن تراز هم دلیلی بر درستی نیست.',
        en: 'The wrong entry pushed Cash up 1,500 when it should have pushed it down 1,500: a 3,000 gap, and Accounts payable is 3,000 too high as well. An entry for 1,500 would only cancel the wrong entry and leave the payment unrecorded. A balanced trial balance is no proof of accuracy.',
      },
    },
  ],
}
