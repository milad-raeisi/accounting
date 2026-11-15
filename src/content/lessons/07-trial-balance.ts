import type { Lesson } from '../types'

/* Account titles for the running example (Nova Design Studio). */
const ac = {
  cash: { fa: 'موجودی نقد', en: 'Cash' },
  ar: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' },
  supplies: { fa: 'ملزومات', en: 'Supplies' },
  prepaidInsurance: { fa: 'پیش‌پرداخت بیمه', en: 'Prepaid insurance' },
  equipment: { fa: 'تجهیزات', en: 'Equipment' },
  ap: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
  loan: { fa: 'وام پرداختنی', en: 'Loan payable' },
  capital: { fa: 'سرمایه', en: 'Capital' },
  drawings: { fa: 'برداشت', en: 'Drawings' },
  revenue: { fa: 'درآمد خدمات', en: 'Service revenue' },
  rent: { fa: 'هزینه اجاره', en: 'Rent expense' },
  salaries: { fa: 'هزینه حقوق', en: 'Salaries expense' },
}

/** Empty table cell. */
const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'trial-balance',
  number: 7,
  level: 'intermediate',
  minutes: 12,
  icon: 'ListChecks',
  tone: 'gold',
  title: { fa: 'تراز آزمایشی', en: 'The Trial Balance' },
  summary: {
    fa: 'مانده همه حساب‌های دفتر کل را در تراز آزمایشی خلاصه کنید، برابری بدهکارها و بستانکارها را بسنجید و بیاموزید این آزمون کدام خطاها را آشکار می‌کند و کدام‌ها را نه.',
    en: 'Summarize every ledger balance in a trial balance, prove that debits equal credits, and learn which errors this test catches, and which slip right past it.',
  },
  objectives: [
    {
      fa: 'هدف و محدودیت‌های تراز آزمایشی را توضیح دهید',
      en: 'Explain the purpose and the limits of a trial balance',
    },
    {
      fa: 'از روی مانده‌های دفتر کل، تراز آزمایشی پیش از اصلاحات تهیه کنید',
      en: 'Prepare an unadjusted trial balance from ledger balances',
    },
    {
      fa: 'خطاهایی را که تراز آزمایشی آشکار می‌کند از خطاهایی که پنهان می‌مانند تمیز دهید',
      en: 'Distinguish the errors a trial balance detects from those it cannot',
    },
    {
      fa: 'با روش‌های تقسیم بر 2 و تقسیم بر 9 محل خطا را پیدا کنید',
      en: 'Use the halve-it and divide-by-9 techniques to locate errors',
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
            fa: '**تراز آزمایشی** فهرستی از همه حساب‌های دفتر کل و مانده آن‌ها در یک تاریخ معین است؛ مانده‌های بدهکار در یک ستون و مانده‌های بستانکار در ستونی دیگر. از آنجا که هر ثبت، بدهکار و بستانکار برابر داشته است، جمع این دو ستون نیز باید برابر باشد.',
            en: 'A **trial balance** is a list of every ledger account and its balance at a specific date, with debit balances in one column and credit balances in another. Because every entry had equal debits and credits, the two columns should have equal totals.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**آزمودن درستی حساب‌وکتاب** ثبت و انتقال؛ همان کنترل حسابداری دوطرفه.',
              en: '**Test the arithmetic** of journalizing and posting, the double-entry check.',
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
                fa: 'دارایی‌ها، بدهی‌ها، حقوق مالکانه، درآمدها و هزینه‌ها؛ یعنی به ترتیب فهرست حساب‌ها.',
                en: 'Assets, liabilities, equity, revenue, expenses, the chart-of-accounts order.',
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
        {
          type: 'h',
          text: { fa: 'تراز آزمایشی پیش از اصلاحات نوا', en: 'Nova’s unadjusted trial balance' },
        },
        {
          type: 'table',
          caption: {
            fa: 'استودیو طراحی نوا، تراز آزمایشی پیش از اصلاحات، روز 30',
            en: 'Nova Design Studio, Unadjusted Trial Balance, Day 30',
          },
          head: [
            { fa: 'حساب', en: 'Account' },
            { fa: 'بدهکار', en: 'Debit' },
            { fa: 'بستانکار', en: 'Credit' },
          ],
          numericCols: [1, 2],
          rows: [
            [ac.cash, 46300, blank],
            [ac.ar, 1500, blank],
            [ac.supplies, 3000, blank],
            [ac.prepaidInsurance, 1200, blank],
            [ac.equipment, 20000, blank],
            [ac.ap, blank, 1500],
            [ac.loan, blank, 15000],
            [ac.capital, blank, 50000],
            [ac.drawings, 1000, blank],
            [ac.revenue, blank, 12000],
            [ac.rent, 2500, blank],
            [ac.salaries, 3000, blank],
            [{ fa: 'جمع', en: 'Totals' }, 78500, 78500],
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'جمع بدهکار 78,500 = جمع بستانکار 78,500 ✓',
            en: 'Total debits 78,500 = Total credits 78,500 ✓',
          },
          note: {
            fa: 'دفتر کل تراز است؛ یعنی حساب‌وکتاب ثبت و انتقال درست بوده است.',
            en: 'The ledger is in balance, the arithmetic of journalizing and posting checks out.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'به آنچه نیست دقت کنید', en: 'Notice what’s missing' },
          text: {
            fa: 'در این فهرست هیچ هزینه بیمه، استهلاک یا بهره‌ای نیست؛ با اینکه یک ماه از بیمه گذشته، تجهیزات کار کرده‌اند و وام نیز بهره ایجاد کرده است. به همین دلیل نام آن **پیش از اصلاحات** است؛ درس 8 این کمبود را برطرف می‌کند.',
            en: 'There’s no insurance expense, no depreciation and no interest here, even though a month of insurance has expired, the equipment has been used and the loan has been accruing interest. That is why it is called **unadjusted**; lesson 8 fills the gap.',
          },
        },
      ],
    },
    {
      id: 'limits',
      title: { fa: 'آنچه آشکار می‌کند و آنچه نمی‌کند', en: 'What It Catches: and What It Misses' },
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
              {
                fa: 'جابه‌جایی ارقام یا اشتباه در نوشتن یک مانده در تراز',
                en: 'Transposing or mis-copying one balance onto the trial balance',
              },
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
              {
                fa: 'نه بدهکاری ثبت شده و نه بستانکاری؛ هر دو جمع 3,000 کمتر می‌شوند',
                en: 'No debit and no credit, both totals fall by 3,000',
              },
            ],
            [
              { fa: 'حساب اشتباه', en: 'Wrong account' },
              {
                fa: 'خرید تجهیزات روز 3 به بدهکار ملزومات ثبت شود',
                en: 'The Day 3 equipment is debited to Supplies',
              },
              { fa: 'طرف درست و مبلغ درست، اما حساب نادرست', en: 'Right side, right amount, wrong account' },
            ],
            [
              { fa: 'خطای جبران‌کننده', en: 'Compensating errors' },
              {
                fa: 'هزینه اجاره 200 بیشتر و، در ثبتی دیگر، درآمد خدمات هم 200 بیشتر ثبت شود',
                en: 'Rent expense overstated by 200 and, in another entry, Service revenue overstated by 200',
              },
              {
                fa: '200 اضافه در بدهکار با 200 اضافه در بستانکار خنثی می‌شود',
                en: 'An extra 200 debit is offset by an extra 200 credit',
              },
            ],
            [
              { fa: 'ثبت معکوس', en: 'Reversed entry' },
              {
                fa: 'ثبت روز 27 به‌صورت بدهکار موجودی نقد / بستانکار حساب‌های پرداختنی',
                en: 'Day 27 recorded as Dr Cash / Cr Accounts payable',
              },
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
            fa: 'خطاهای پنهان مستقیماً به صورت‌های مالی راه پیدا می‌کنند. برای نمونه، اگر خرید تجهیزات روز 3 در حساب ملزومات ثبت شود، جمع دارایی‌ها تغییر نمی‌کند، اما هر دو حساب نادرست می‌شوند و با هزینه شدن ملزومات، سود خالص هم تحریف می‌شود. سپر دفاعی ما تحلیل دقیق در مرحله ثبت، بازبینی مستقل و مغایرت‌گیری بانکی است.',
            en: 'Undetected errors flow straight into the financial statements. Record the Day 3 equipment as Supplies, for example, and total assets stay the same, but both accounts are misstated, and once supplies are expensed, net income is too. The defenses are careful analysis at the journal stage, independent review and bank reconciliations.',
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
            fa: 'وقتی جمع ستون‌ها برابر نیست، از تراز آزمایشی به عقب و به سمت دفتر روزنامه حرکت کنید و ابتدا محتمل‌ترین و ساده‌ترین علت‌ها را بررسی کنید. اندازه اختلاف، بهترین سرنخ شماست.',
            en: 'When the columns disagree, work backwards from the trial balance toward the journal, checking the most likely, and cheapest to check, causes first. The size of the difference is your best clue.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'دو ستون را دوباره جمع بزنید', en: 'Re-add both columns' },
              text: {
                fa: 'اشتباه ساده در جمع زدن، رایج‌ترین علت است.',
                en: 'A simple addition slip is the most common cause of all.',
              },
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
          type: 'formula',
          text: {
            fa: 'اگر اختلاف ÷ 9 عددی صحیح باشد: احتمال جابه‌جایی ارقام یا خطای لغزش',
            en: 'Difference ÷ 9 = whole number → suspect a transposition or a slide',
          },
          note: {
            fa: 'چرا 9؟ جابه‌جا کردن دو رقم مجاور، عدد را همیشه به اندازه مضربی از 9 تغییر می‌دهد (مثلاً 5,200 − 2,500 = 2,700 = 9 × 300).',
            en: 'Why 9? Swapping two adjacent digits always changes a number by a multiple of 9 (e.g., 5,200 − 2,500 = 2,700 = 9 × 300).',
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
              {
                fa: 'همه حساب‌های دارای مانده، پیش از ثبت‌های اصلاحی',
                en: 'Every account with a balance, before adjustments',
              },
              78500,
            ],
            [
              { fa: 'پس از اصلاحات', en: 'Adjusted' },
              { fa: 'پس از انتقال ثبت‌های اصلاحی', en: 'After posting adjusting entries' },
              {
                fa: 'همه حساب‌ها، از جمله هزینه‌ها، بدهی‌های تعهدی و حساب‌های کاهنده تازه',
                en: 'All accounts, including new expenses, accruals and contra accounts',
              },
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
            fa: 'ثبت‌های اصلاحی (درس 8) با افزودن هزینه‌ها، اقلام تعهدی و استهلاک انباشته، جمع هر ستون را به 80,250 می‌رسانند. سپس با بستن حساب‌ها، مانده درآمدها، هزینه‌ها و برداشت صفر می‌شود و سود خالص 4,850 پس از کسر برداشت 1,000 به حساب سرمایه می‌رود (50,000 + 4,850 − 1,000 = 53,850). جمع تراز آزمایشی پس از بستن حساب‌ها 71,400 است.',
            en: 'Adjusting entries (lesson 8) lift each column to 80,250 by adding expenses, accruals and accumulated depreciation. Closing then zeroes out revenue, expenses and drawings and moves net income of 4,850, less drawings of 1,000, into Capital (50,000 + 4,850 − 1,000 = 53,850). The post-closing trial balance totals 71,400.',
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
      id: 'summary',
      title: { fa: 'جمع‌بندی', en: 'Summary' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              fa: 'تراز آزمایشی همه مانده‌های دفتر کل را فهرست می‌کند؛ برابری ستون‌ها فقط درستی حساب‌وکتاب دوطرفه را ثابت می‌کند، نه بیشتر.',
              en: 'A trial balance lists every ledger balance; equal columns prove the double-entry arithmetic, nothing more.',
            },
            {
              fa: 'جمع هر دو ستون تراز آزمایشی پیش از اصلاحات نوا 78,500 است.',
              en: 'Nova’s unadjusted trial balance totals 78,500 on both sides.',
            },
            {
              fa: 'حذف، حساب اشتباه، خطای جبران‌کننده، ثبت معکوس و ثبت تکراری جمع‌ها را برابر نگه می‌دارند و پنهان می‌مانند.',
              en: 'Omissions, wrong accounts, compensating errors, reversed entries and duplicated entries keep the totals equal and go undetected.',
            },
            {
              fa: 'برای خطای ستون اشتباه اختلاف را نصف کنید و برای جابه‌جایی ارقام و لغزش، آن را بر 9 تقسیم کنید.',
              en: 'Halve the difference to find wrong-column errors; divide it by 9 to find transpositions and slides.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'گام بعدی', en: 'What comes next' },
          text: {
            fa: 'تراز آزمایشی نوا متوازن است، اما هنوز کامل نیست. در درس بعد، ثبت‌های اصلاحی همه حساب‌ها را تا پایان ماه به‌روز می‌کنند.',
            en: 'Nova’s trial balance balances, but it isn’t complete yet. In the next lesson, adjusting entries bring every account up to date at month-end.',
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
                en: 'Two digits swapped (e.g., 2,500 written as 5,200); the resulting difference is divisible by 9.',
              },
            },
            {
              term: { fa: 'خطای لغزش', en: 'Slide error' },
              def: {
                fa: 'جابه‌جا شدن ممیز یا افزوده یا کاسته شدن صفر (مثلاً نوشتن 1,200 به‌صورت 12,000)؛ اختلاف آن نیز بر 9 بخش‌پذیر است.',
                en: 'A misplaced decimal point or an added or dropped zero (e.g., 1,200 written as 12,000); the difference is also divisible by 9.',
              },
            },
            {
              term: { fa: 'خطاهای جبران‌کننده', en: 'Compensating errors' },
              def: {
                fa: 'دو یا چند خطا که اثر یکدیگر را خنثی می‌کنند و جمع‌ها را برابر باقی می‌گذارند.',
                en: 'Two or more errors that offset each other, leaving the totals equal.',
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
        {
          fa: 'اینکه جمع مانده‌های بدهکار با جمع مانده‌های بستانکار برابر است',
          en: 'That total debit balances equal total credit balances',
        },
        { fa: 'اینکه سود خالص درست است', en: 'That net income is correct' },
        { fa: 'اینکه هیچ رویدادی از قلم نیفتاده است', en: 'That no transaction was omitted' },
      ],
      answer: 1,
      explain: {
        fa: 'برابری دو ستون تنها چیزی است که تراز آزمایشی ثابت می‌کند. حذف رویداد، حساب اشتباه و خطاهای دیگر می‌توانند در یک تراز آزمایشیِ کاملاً متوازن پنهان بمانند.',
        en: 'Equal columns are the only thing a trial balance proves. Omissions, wrong accounts and other errors can hide inside a perfectly balanced trial balance.',
      },
    },
    {
      q: {
        fa: 'کدام خطا جمع ستون‌های تراز آزمایشی نوا را نابرابر می‌کند؟',
        en: 'Which error will make Nova’s trial balance totals unequal?',
      },
      options: [
        { fa: 'ثبت نکردن کامل پرداخت حقوق روز 20', en: 'Omitting the Day 20 salaries entry entirely' },
        { fa: 'دو بار ثبت کردن درآمد نقدی روز 8', en: 'Recording the Day 8 cash revenue twice' },
        {
          fa: 'انتقال بدهکار هزینه اجاره روز 15 بدون انتقال بستانکار موجودی نقد',
          en: 'Posting the Day 15 debit to Rent expense but never posting the credit to Cash',
        },
        {
          fa: 'بدهکار کردن ملزومات به‌جای تجهیزات در روز 3',
          en: 'Debiting Supplies instead of Equipment on Day 3',
        },
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
        {
          fa: 'جابه‌جایی ارقام، مثلاً نوشتن 2,500 به‌صورت 5,200',
          en: 'A transposition, such as 2,500 copied as 5,200',
        },
        { fa: 'از قلم افتادن یک رویداد', en: 'An omitted transaction' },
        { fa: 'خطای جبران‌کننده', en: 'A compensating error' },
        { fa: 'ثبت تکراری', en: 'A duplicated entry' },
      ],
      answer: 0,
      explain: {
        fa: 'حاصل 2,700 ÷ 9 برابر 300 است. جابه‌جا کردن دو رقم مجاور همیشه اختلافی به اندازه مضربی از 9 ایجاد می‌کند. حذف رویداد، خطای جبران‌کننده و ثبت تکراری جمع‌ها را برابر نگه می‌دارند.',
        en: '2,700 ÷ 9 = 300. Swapping two adjacent digits always creates a difference that is a multiple of 9. Omitted, compensating and duplicated entries leave the totals equal.',
      },
    },
    {
      q: {
        fa: 'جمع بدهکار 77,500 و جمع بستانکار 79,500 است. کدام خطا با این وضعیت سازگارتر است؟',
        en: 'Debits total 77,500 and credits 79,500. Which error fits best?',
      },
      options: [
        { fa: 'ثبت معکوس', en: 'A reversed entry' },
        { fa: 'از قلم افتادن یک رویداد', en: 'An omitted transaction' },
        { fa: 'جابه‌جایی ارقام', en: 'A transposition error' },
        {
          fa: 'نوشتن یک مانده بدهکار 1,000 در ستون بستانکار',
          en: 'A 1,000 debit balance listed in the credit column',
        },
      ],
      answer: 3,
      explain: {
        fa: 'نصف اختلاف 2,000 برابر 1,000 است؛ نشانه کلاسیک مانده‌ای که در ستون اشتباه نوشته شده است. 2,000 بر 9 بخش‌پذیر نیست و ثبت معکوس یا حذف رویداد نیز جمع‌ها را برابر نگه می‌دارد.',
        en: 'Half of the 2,000 difference is 1,000, the classic sign of a balance in the wrong column. 2,000 is not divisible by 9, and reversed or omitted entries keep the totals equal.',
      },
    },
    {
      q: {
        fa: 'کدام تراز آزمایشی فقط حساب‌های دائمی (ترازنامه‌ای) را در بر دارد؟',
        en: 'Which trial balance contains only permanent (balance-sheet) accounts?',
      },
      options: [
        { fa: 'تراز آزمایشی پیش از اصلاحات', en: 'The unadjusted trial balance' },
        { fa: 'تراز آزمایشی پس از اصلاحات', en: 'The adjusted trial balance' },
        { fa: 'تراز آزمایشی پس از بستن حساب‌ها', en: 'The post-closing trial balance' },
        { fa: 'هر سه', en: 'All three' },
      ],
      answer: 2,
      explain: {
        fa: 'ثبت‌های بستن، مانده حساب‌های درآمد، هزینه و برداشت را صفر می‌کنند؛ پس فقط دارایی‌ها، بدهی‌ها و سرمایه باقی می‌مانند. جمع هر ستون این تراز در نوا 71,400 است.',
        en: 'Closing entries reduce revenue, expense and drawings accounts to zero, so only assets, liabilities and capital remain, for Nova, 71,400 in each column.',
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
        {
          fa: 'تراز آزمایشی متوازن است و همه حساب‌ها درست‌اند',
          en: 'The trial balance balances and every account is correct',
        },
      ],
      answer: 0,
      explain: {
        fa: 'ثبت معکوس همچنان بدهکار و بستانکار برابر دارد، پس جمع‌ها برابر می‌مانند. اما موجودی نقد 3,000 بیش از واقع است (1,500 که باید کم می‌شد اضافه شده) و حساب‌های پرداختنی نیز به همین اندازه بیش از واقع است.',
        en: 'A reversed entry still has equal debits and credits, so the totals agree. But Cash is overstated by 3,000 (1,500 that should have been subtracted was added instead), and Accounts payable is overstated by the same amount.',
      },
    },
  ],
}
