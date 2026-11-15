import type { Lesson } from '../types'

const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'closing-cycle',
  number: 10,
  level: 'advanced',
  minutes: 16,
  icon: 'RefreshCcw',
  tone: 'equity',
  title: { fa: 'بستن حساب‌ها و چرخه کامل حسابداری', en: 'Closing Entries and the Accounting Cycle' },
  summary: {
    fa: 'در پایان هر دوره، حساب‌های موقت صفر می‌شوند تا دوره بعد با صفحه‌ای سفید آغاز شود. در این درس حساب‌های نوا را می‌بندیم، تراز آزمایشی پس از بستن حساب‌ها را تهیه می‌کنیم، چرخه ده‌مرحله‌ای حسابداری را مرور می‌کنیم و با ثبت‌های معکوس آشنا می‌شویم.',
    en: 'At the end of every period the temporary accounts are reset to zero so the next period starts with a clean slate. In this lesson we close Nova’s books, prepare the post-closing trial balance, walk through the complete ten-step accounting cycle and see how reversing entries simplify the next period.',
  },
  objectives: [
    {
      fa: 'حساب‌های موقت و دائمی را از هم تشخیص دهید و دلیل بستن حساب‌های موقت را توضیح دهید.',
      en: 'Distinguish temporary from permanent accounts and explain why temporary accounts are closed.',
    },
    {
      fa: 'چهار ثبت بستن حساب‌ها را با استفاده از حساب خلاصه سود و زیان انجام دهید.',
      en: 'Record the four closing entries using the Income Summary account.',
    },
    {
      fa: 'تراز آزمایشی پس از بستن حساب‌ها را تهیه و تفسیر کنید.',
      en: 'Prepare and interpret a post-closing trial balance.',
    },
    {
      fa: 'ده مرحله چرخه حسابداری را به ترتیب نام ببرید و توضیح دهید.',
      en: 'List and explain the ten steps of the accounting cycle in order.',
    },
    {
      fa: 'توضیح دهید ثبت‌های معکوس چه زمانی و چگونه به کار می‌روند.',
      en: 'Explain when and how reversing entries are used.',
    },
  ],
  sections: [
    {
      id: 'why-close',
      title: { fa: 'چرا حساب‌ها را می‌بندیم؟', en: 'Why we close the books' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'درآمدها، هزینه‌ها و برداشت، عملکرد **یک دوره مشخص** را اندازه می‌گیرند. اگر مانده آن‌ها به دوره بعد منتقل شود، درآمد ماه دوم روی درآمد ماه اول انباشته می‌شود و دیگر نمی‌توان گفت هر ماه جداگانه چقدر سود داشته‌ایم. به همین دلیل این حساب‌ها را **حساب‌های موقت** می‌نامیم و در پایان هر دوره مانده‌شان را صفر می‌کنیم.',
            en: 'Revenues, expenses and drawings measure activity for **one specific period**. If their balances rolled forward, month two’s revenue would pile on top of month one’s and we could no longer tell how much each month earned on its own. That is why they are called **temporary accounts**, and why their balances are reset to zero at the end of every period.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'حساب‌های موقت', en: 'Temporary (nominal) accounts' },
            items: [
              { fa: 'درآمدها', en: 'Revenues' },
              { fa: 'هزینه‌ها', en: 'Expenses' },
              { fa: 'برداشت (یا سود سهام در شرکت‌ها)', en: 'Drawings (or dividends in a company)' },
              { fa: 'خلاصه سود و زیان', en: 'Income summary' },
              { fa: 'هر دوره را با مانده صفر آغاز می‌کنند', en: 'Start every period at zero' },
            ],
          },
          right: {
            title: { fa: 'حساب‌های دائمی', en: 'Permanent (real) accounts' },
            items: [
              { fa: 'دارایی‌ها، از جمله حساب‌های کاهنده مانند استهلاک انباشته', en: 'Assets, including contra-assets such as accumulated depreciation' },
              { fa: 'بدهی‌ها', en: 'Liabilities' },
              { fa: 'سرمایه (یا سود انباشته در شرکت‌ها)', en: 'Capital (or retained earnings in a company)' },
              { fa: 'مانده‌شان به دوره بعد منتقل می‌شود', en: 'Balances carry forward to the next period' },
            ],
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'تشبیه تابلوی امتیاز', en: 'The scoreboard analogy' },
          text: {
            fa: 'حساب‌های موقت مثل تابلوی امتیاز یک مسابقه‌اند: با سوت پایان، نتیجه در جدول لیگ (سرمایه) ثبت می‌شود و تابلو برای بازی بعد صفر می‌شود. حساب‌های دائمی همان جدول لیگ‌اند که از بازی‌ای به بازی دیگر ادامه پیدا می‌کند.',
            en: 'Temporary accounts are like a match scoreboard: at the final whistle the result is added to the league table (capital) and the scoreboard resets for the next match. Permanent accounts are the league table itself, it carries on from one match to the next.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'بستن حساب‌ها دو کار انجام می‌دهد: (1) حساب‌های موقت را برای دوره جدید **صفر** می‌کند و (2) سود خالص و برداشت را به حساب سرمایه **منتقل** می‌کند تا مانده سرمایه در دفتر کل با سرمایه پایان دوره در ترازنامه (53,850) برابر شود.',
            en: 'Closing does two jobs: (1) it **resets** the temporary accounts for the new period, and (2) it **transfers** net income and drawings into capital, so that the Capital account in the ledger finally agrees with the ending capital on the balance sheet (53,850).',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          text: {
            fa: 'پیش از بستن حساب‌ها، مانده حساب سرمایه سارا در دفتر کل هنوز 50,000 است؛ رقم 53,850 فقط در صورت‌های مالی محاسبه شده بود. ثبت‌های بستن حساب‌ها این فاصله را در خود دفاتر پر می‌کنند.',
            en: 'Before closing, the Capital (Sara) account in the ledger still shows 50,000; the 53,850 figure existed only on the financial statements. The closing entries bring the ledger itself into line.',
          },
        },
      ],
    },
    {
      id: 'closing-entries',
      title: { fa: 'حساب خلاصه سود و زیان و چهار ثبت بستن', en: 'Income Summary and the four closing entries' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**خلاصه سود و زیان** یک حساب موقت و واسط است که فقط هنگام بستن حساب‌ها به کار می‌رود. همه درآمدها و هزینه‌ها ابتدا به این حساب بسته می‌شوند و مانده آن، که برابر سود یا زیان خالص است، سپس به سرمایه منتقل می‌شود. مزیتش این است که سود خالص در دفاتر به‌صورت یک رقم واحد ظاهر می‌شود و می‌توان آن را با صورت سود و زیان تطبیق داد.',
            en: 'The **Income Summary** account is a temporary clearing account used only during closing. All revenues and expenses are closed into it first; its balance, equal to net income or net loss, is then transferred to capital. The benefit is that net income appears in the ledger as one figure that can be agreed to the income statement.',
          },
        },
        {
          type: 'diagram',
          id: 'closing-entries',
          caption: {
            fa: 'درآمدها و هزینه‌ها به خلاصه سود و زیان بسته می‌شوند، مانده آن به سرمایه می‌رود و برداشت مستقیماً به سرمایه بسته می‌شود.',
            en: 'Revenues and expenses close into Income Summary, its balance closes into Capital, and Drawings close directly into Capital.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'بستن درآمدها', en: 'Close revenues' },
              text: {
                fa: 'حساب‌های درآمد مانده بستانکار دارند؛ پس هر کدام را بدهکار و خلاصه سود و زیان را بستانکار می‌کنیم.',
                en: 'Revenue accounts carry credit balances, so debit each one and credit Income Summary.',
              },
            },
            {
              title: { fa: 'بستن هزینه‌ها', en: 'Close expenses' },
              text: {
                fa: 'حساب‌های هزینه مانده بدهکار دارند؛ پس خلاصه سود و زیان را به جمع هزینه‌ها بدهکار و تک‌تک حساب‌های هزینه را بستانکار می‌کنیم.',
                en: 'Expense accounts carry debit balances, so debit Income Summary for the total and credit each expense account.',
              },
            },
            {
              title: { fa: 'بستن خلاصه سود و زیان', en: 'Close Income Summary' },
              text: {
                fa: 'مانده بستانکار آن (سود خالص) را به سرمایه منتقل می‌کنیم: خلاصه سود و زیان بدهکار، سرمایه بستانکار. در صورت زیان خالص، این ثبت برعکس است.',
                en: 'Transfer its credit balance (net income) to capital: debit Income Summary, credit Capital. With a net loss, the entry runs the other way.',
              },
            },
            {
              title: { fa: 'بستن برداشت', en: 'Close drawings' },
              text: {
                fa: 'برداشت هزینه نیست، پس از خلاصه سود و زیان عبور نمی‌کند؛ سرمایه را مستقیماً بدهکار و برداشت را بستانکار می‌کنیم.',
                en: 'Drawings are not an expense, so they never pass through Income Summary; debit Capital and credit Drawings directly.',
              },
            },
          ],
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های بستن حساب‌های استودیو طراحی نوا', en: 'Nova Design Studio’s closing entries' },
          entries: [
            {
              date: { fa: 'روز 30', en: 'Day 30' },
              lines: [
                { account: { fa: 'درآمد خدمات', en: 'Service revenue' }, debit: 12700 },
                { account: { fa: 'خلاصه سود و زیان', en: 'Income summary' }, credit: 12700 },
              ],
              memo: { fa: 'ثبت 1: بستن حساب درآمد', en: 'Entry 1: close the revenue account' },
            },
            {
              date: { fa: 'روز 30', en: 'Day 30' },
              lines: [
                { account: { fa: 'خلاصه سود و زیان', en: 'Income summary' }, debit: 7850 },
                { account: { fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' }, credit: 3600 },
                { account: { fa: 'هزینه اجاره', en: 'Rent expense' }, credit: 2500 },
                { account: { fa: 'هزینه ملزومات', en: 'Supplies expense' }, credit: 1200 },
                { account: { fa: 'هزینه استهلاک', en: 'Depreciation expense' }, credit: 300 },
                { account: { fa: 'هزینه بهره', en: 'Interest expense' }, credit: 150 },
                { account: { fa: 'هزینه بیمه', en: 'Insurance expense' }, credit: 100 },
              ],
              memo: { fa: 'ثبت 2: بستن حساب‌های هزینه', en: 'Entry 2: close the expense accounts' },
            },
            {
              date: { fa: 'روز 30', en: 'Day 30' },
              lines: [
                { account: { fa: 'خلاصه سود و زیان', en: 'Income summary' }, debit: 4850 },
                { account: { fa: 'سرمایه سارا', en: 'Capital (Sara)' }, credit: 4850 },
              ],
              memo: { fa: 'ثبت 3: انتقال سود خالص به سرمایه', en: 'Entry 3: transfer net income to capital' },
            },
            {
              date: { fa: 'روز 30', en: 'Day 30' },
              lines: [
                { account: { fa: 'سرمایه سارا', en: 'Capital (Sara)' }, debit: 1000 },
                { account: { fa: 'برداشت سارا', en: 'Drawings (Sara)' }, credit: 1000 },
              ],
              memo: { fa: 'ثبت 4: بستن حساب برداشت', en: 'Entry 4: close drawings' },
            },
          ],
        },
        {
          type: 'tAccounts',
          title: {
            fa: 'خلاصه سود و زیان به صفر می‌رسد و سرمایه سارا به 53,850',
            en: 'Income Summary ends at zero; Capital (Sara) reaches 53,850',
          },
          accounts: [
            { name: { fa: 'خلاصه سود و زیان', en: 'Income summary' }, debits: [7850, 4850], credits: [12700] },
            { name: { fa: 'سرمایه سارا', en: 'Capital (Sara)' }, debits: [1000], credits: [50000, 4850] },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در شرکت‌های سهامی', en: 'In a corporation' },
          text: {
            fa: 'در شرکت سهامی، خلاصه سود و زیان به حساب **سود انباشته** بسته می‌شود و به‌جای برداشت، حساب **سود سهام** به سود انباشته بسته می‌شود. منطق ثبت‌ها دقیقاً همان است.',
            en: 'In a corporation, Income Summary closes to **Retained earnings**, and **Dividends**, rather than drawings, close to retained earnings. The logic of the entries is exactly the same.',
          },
        },
      ],
    },
    {
      id: 'post-closing',
      title: { fa: 'تراز آزمایشی پس از بستن حساب‌ها', en: 'The post-closing trial balance' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'پس از ثبت و انتقال ثبت‌های بستن به دفتر کل، آخرین کنترل را انجام می‌دهیم: **تراز آزمایشی پس از بستن حساب‌ها**. این تراز فقط **حساب‌های دائمی** را در بر دارد، چون همه حساب‌های موقت اکنون مانده صفر دارند. هدف آن اطمینان از برابری جمع بدهکار و بستانکار پیش از شروع دوره جدید است.',
            en: 'Once the closing entries are posted, we run one last check: the **post-closing trial balance**. It lists only **permanent accounts**, because every temporary account now has a zero balance. Its purpose is to confirm that debits still equal credits before the new period begins.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'استودیو طراحی نوا: تراز آزمایشی پس از بستن حساب‌ها، روز 30',
            en: 'Nova Design Studio: Post-closing trial balance, Day 30',
          },
          head: [
            { fa: 'حساب', en: 'Account' },
            { fa: 'بدهکار', en: 'Debit' },
            { fa: 'بستانکار', en: 'Credit' },
          ],
          rows: [
            [{ fa: 'موجودی نقد', en: 'Cash' }, 46300, blank],
            [{ fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, 2200, blank],
            [{ fa: 'ملزومات', en: 'Supplies' }, 1800, blank],
            [{ fa: 'پیش‌پرداخت بیمه', en: 'Prepaid insurance' }, 1100, blank],
            [{ fa: 'تجهیزات', en: 'Equipment' }, 20000, blank],
            [{ fa: 'استهلاک انباشته تجهیزات', en: 'Accumulated depreciation' }, blank, 300],
            [{ fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, blank, 1500],
            [{ fa: 'حقوق پرداختنی', en: 'Salaries payable' }, blank, 600],
            [{ fa: 'بهره پرداختنی', en: 'Interest payable' }, blank, 150],
            [{ fa: 'وام پرداختنی', en: 'Loan payable' }, blank, 15000],
            [{ fa: 'سرمایه سارا', en: 'Capital (Sara)' }, blank, 53850],
            [{ fa: '**جمع**', en: '**Total**' }, 71400, 71400],
          ],
          numericCols: [1, 2],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'چرا 71,400 و نه 71,100؟', en: 'Why 71,400 and not 71,100?' },
          text: {
            fa: 'جمع دارایی‌ها در ترازنامه 71,100 بود، اما جمع ستون‌های این تراز 71,400 است. دلیلش این است که در تراز آزمایشی، **استهلاک انباشته (300)** در ستون بستانکار می‌آید، در حالی که در ترازنامه از بهای تجهیزات کسر می‌شود: 71,100 + 300 = 71,400. هیچ اشتباهی رخ نداده است.',
            en: 'Total assets on the balance sheet were 71,100, yet this trial balance totals 71,400. The reason: in a trial balance **accumulated depreciation (300)** sits in the credit column, whereas on the balance sheet it is deducted from equipment: 71,100 + 300 = 71,400. Nothing is wrong.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: 'هیچ حساب درآمد، هزینه، برداشت یا خلاصه سود و زیان در فهرست دیده نمی‌شود.',
              en: 'No revenue, expense, drawings or Income Summary account appears.',
            },
            {
              fa: 'مانده سرمایه سارا (53,850) با سرمایه پایان دوره در ترازنامه برابر است.',
              en: 'Capital (Sara) (53,850) agrees with ending capital on the balance sheet.',
            },
            {
              fa: 'جمع بدهکار و بستانکار برابر است؛ اما مانند هر تراز آزمایشی، این برابری خطاهایی مثل ثبت در حساب اشتباه یا فراموش کردن کامل یک ثبت را آشکار نمی‌کند.',
              en: 'Total debits equal total credits, though, like any trial balance, equality will not catch errors such as posting to the wrong account or omitting an entry entirely.',
            },
            {
              fa: 'مانده‌های این تراز، **مانده‌های ابتدای دوره** ماه دوم نوا خواهند بود.',
              en: 'These balances become the **opening balances** for Nova’s second month.',
            },
          ],
        },
      ],
    },
    {
      id: 'cycle',
      title: { fa: 'چرخه کامل حسابداری', en: 'The complete accounting cycle' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'اکنون همه قطعات پازل را در اختیار داریم. **چرخه حسابداری** مجموعه مراحلی است که در هر دوره مالی به ترتیب تکرار می‌شوند: از تحلیل نخستین معامله تا آماده کردن دفاتر برای دوره بعد.',
            en: 'We now have every piece of the puzzle. The **accounting cycle** is the sequence of steps repeated every accounting period, from analysing the first transaction to getting the books ready for the next period.',
          },
        },
        {
          type: 'diagram',
          id: 'accounting-cycle',
          caption: {
            fa: 'ده مرحله چرخه حسابداری؛ پس از مرحله آخر، چرخه برای دوره بعد از نو آغاز می‌شود.',
            en: 'The ten steps of the accounting cycle; after the last step the cycle begins again for the next period.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'تجزیه‌وتحلیل معاملات', en: 'Analyse transactions' },
              text: {
                fa: 'با بررسی اسناد پشتیبان (فاکتور، رسید، قرارداد) اثر هر معامله را بر معادله حسابداری تعیین کنید؛ مثلاً آورده 50,000 سارا.',
                en: 'Use source documents (invoices, receipts, contracts) to determine each transaction’s effect on the accounting equation, e.g. Sara’s 50,000 investment.',
              },
            },
            {
              title: { fa: 'ثبت در دفتر روزنامه', en: 'Journalize' },
              text: {
                fa: 'هر معامله را به ترتیب تاریخ و با جمع بدهکار و بستانکار برابر ثبت کنید.',
                en: 'Record each transaction in date order, with equal debits and credits.',
              },
            },
            {
              title: { fa: 'انتقال به دفتر کل', en: 'Post to the ledger' },
              text: {
                fa: 'هر سطر ثبت روزنامه را به حساب مربوط در دفتر کل منتقل کنید.',
                en: 'Transfer every journal line to its account in the general ledger.',
              },
            },
            {
              title: { fa: 'تهیه تراز آزمایشی تعدیل‌نشده', en: 'Prepare the unadjusted trial balance' },
              text: {
                fa: 'مانده همه حساب‌ها را فهرست کنید و برابری جمع بدهکار و بستانکار را بسنجید.',
                en: 'List every account balance and confirm that total debits equal total credits.',
              },
            },
            {
              title: { fa: 'ثبت‌های تعدیلی', en: 'Record adjusting entries' },
              text: {
                fa: 'درآمدها و هزینه‌ها را طبق مبنای تعهدی به‌روز کنید؛ نوا شش تعدیل داشت، از جمله استهلاک 300 و حقوق تحقق‌یافته پرداخت‌نشده 600.',
                en: 'Bring revenues and expenses up to date on the accrual basis, Nova had six adjustments, including 300 of depreciation and 600 of accrued salaries.',
              },
            },
            {
              title: { fa: 'تهیه تراز آزمایشی تعدیل‌شده', en: 'Prepare the adjusted trial balance' },
              text: {
                fa: 'پس از انتقال تعدیلات، دوباره برابری را کنترل کنید. این تراز منبع مستقیم تهیه صورت‌های مالی است.',
                en: 'After posting the adjustments, check the balance again. This trial balance is the direct source of the financial statements.',
              },
            },
            {
              title: { fa: 'تهیه صورت‌های مالی', en: 'Prepare the financial statements' },
              text: {
                fa: 'به ترتیب: صورت سود و زیان، صورت تغییرات در حقوق مالکانه، ترازنامه و صورت جریان‌های نقدی.',
                en: 'In order: income statement, statement of changes in equity, balance sheet and cash flow statement.',
              },
            },
            {
              title: { fa: 'ثبت‌های بستن حساب‌ها', en: 'Journalize and post closing entries' },
              text: {
                fa: 'حساب‌های موقت را صفر کنید و سود خالص و برداشت را به سرمایه منتقل کنید.',
                en: 'Reset the temporary accounts to zero and transfer net income and drawings to capital.',
              },
            },
            {
              title: { fa: 'تهیه تراز آزمایشی پس از بستن حساب‌ها', en: 'Prepare the post-closing trial balance' },
              text: {
                fa: 'اطمینان حاصل کنید که فقط حساب‌های دائمی باقی مانده‌اند و تراز برقرار است (71,400 = 71,400).',
                en: 'Confirm that only permanent accounts remain and that they balance (71,400 = 71,400).',
              },
            },
            {
              title: { fa: 'ثبت‌های معکوس (اختیاری)', en: 'Reversing entries (optional)' },
              text: {
                fa: 'در نخستین روز دوره جدید، برخی تعدیلات تعهدی را معکوس کنید تا ثبت معاملات بعدی ساده‌تر شود.',
                en: 'On the first day of the new period, reverse selected accrual adjustments so that later routine entries stay simple.',
              },
            },
          ],
        },
        {
          type: 'diagram',
          id: 'cycle-3d',
          caption: {
            fa: 'مراحل چرخه را در یک مدار سه‌بعدی دنبال کنید؛ هر دوره مالی یک دور کامل است.',
            en: 'Follow the steps around a 3D orbit, each accounting period is one full revolution.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در طول دوره یا در پایان دوره؟', en: 'During the period or at period-end?' },
          text: {
            fa: 'مراحل 1 تا 3 در طول دوره و به‌طور مداوم تکرار می‌شوند؛ مراحل 4 تا 9 فقط در پایان دوره انجام می‌شوند و مرحله 10 در آغاز دوره بعد. نرم‌افزارهای حسابداری بخش بزرگی از این کار، به‌ویژه انتقال به دفتر کل و تهیه ترازها را خودکار انجام می‌دهند، اما منطق آن‌ها دقیقاً همین است.',
            en: 'Steps 1–3 happen continuously during the period; steps 4–9 happen only at period-end; step 10 happens at the start of the next period. Accounting software automates much of this, posting and trial balances in particular, but the logic underneath is exactly the same.',
          },
        },
      ],
    },
    {
      id: 'reversing',
      title: { fa: 'ثبت‌های معکوس', en: 'Reversing entries' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**ثبت معکوس** ثبتی است که در نخستین روز دوره جدید انجام می‌شود و دقیقاً عکس یک ثبت تعدیلی پایان دوره قبل است. این ثبت اختیاری است و مانده نهایی حساب‌ها را تغییر نمی‌دهد؛ فقط ثبت معاملات بعدی را ساده‌تر و یکنواخت‌تر می‌کند و احتمال ثبت دوباره یک هزینه یا درآمد را کاهش می‌دهد.',
            en: 'A **reversing entry** is made on the first day of a new period and is the exact opposite of an adjusting entry made at the end of the previous one. It is optional and does not change the final account balances; it simply keeps later routine entries simple and consistent, and reduces the risk of recording an expense or revenue twice.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'مثال: حقوق تحقق‌یافته پرداخت‌نشده به مبلغ 600', en: 'Example: 600 of accrued salaries' },
          text: {
            fa: 'نوا در روز 30 با یک ثبت تعدیلی 600 حقوق تحقق‌یافته پرداخت‌نشده را شناسایی کرد و همان روز هزینه حقوق با ثبت‌های بستن صفر شد. فرض کنید روز پرداخت بعدی، روز 5 ماه بعد است و نوا 1,500 حقوق می‌پردازد: 600 آن مربوط به کار انجام‌شده در ماه قبل و 900 مربوط به ماه جدید است.',
            en: 'On Day 30 Nova recognised 600 of accrued salaries with an adjusting entry, and the same day the closing entries reset Salaries expense to zero. Suppose the next payday is Day 5 of the following month, when Nova pays 1,500 of salaries: 600 relates to work done last month and 900 to the new month.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'روش با ثبت معکوس', en: 'Using a reversing entry' },
          entries: [
            {
              date: { fa: 'روز 30', en: 'Day 30' },
              lines: [
                { account: { fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' }, debit: 600 },
                { account: { fa: 'حقوق پرداختنی', en: 'Salaries payable' }, credit: 600 },
              ],
              memo: { fa: 'ثبت تعدیلی پایان ماه اول', en: 'Month-one adjusting entry' },
            },
            {
              date: { fa: 'روز 1 ماه بعد', en: 'Day 1, next month' },
              lines: [
                { account: { fa: 'حقوق پرداختنی', en: 'Salaries payable' }, debit: 600 },
                { account: { fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' }, credit: 600 },
              ],
              memo: { fa: 'ثبت معکوس: عکس دقیق ثبت تعدیلی', en: 'Reversing entry: the exact opposite of the adjustment' },
            },
            {
              date: { fa: 'روز 5 ماه بعد', en: 'Day 5, next month' },
              lines: [
                { account: { fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' }, debit: 1500 },
                { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 1500 },
              ],
              memo: { fa: 'پرداخت عادی حقوق؛ کل مبلغ به حساب هزینه', en: 'Routine payroll: the whole amount goes to expense' },
            },
          ],
        },
        {
          type: 'tAccounts',
          title: {
            fa: 'ماه دوم: هزینه حقوق 900 و حقوق پرداختنی صفر (بستانکار 600 در حقوق پرداختنی، مانده ابتدای دوره است)',
            en: 'Month two: salaries expense 900, salaries payable zero (the 600 credit in Salaries payable is the opening balance)',
          },
          accounts: [
            { name: { fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' }, debits: [1500], credits: [600] },
            { name: { fa: 'حقوق پرداختنی', en: 'Salaries payable' }, debits: [600], credits: [600] },
          ],
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'بدون ثبت معکوس', en: 'Without a reversing entry' },
            items: [
              {
                fa: 'روز 5: حقوق پرداختنی 600 بدهکار، هزینه حقوق و دستمزد 900 بدهکار، موجودی نقد 1,500 بستانکار',
                en: 'Day 5: Dr Salaries payable 600, Dr Salaries expense 900, Cr Cash 1,500',
              },
              {
                fa: 'حسابدار باید به خاطر داشته باشد که بخشی از این پرداخت قبلاً تعهد شده است',
                en: 'The bookkeeper must remember that part of this payment was already accrued',
              },
              { fa: 'خطر ثبت دوباره 600 به‌عنوان هزینه', en: 'Risk of expensing the 600 twice' },
            ],
          },
          right: {
            title: { fa: 'با ثبت معکوس', en: 'With a reversing entry' },
            items: [
              {
                fa: 'روز 5: هزینه حقوق و دستمزد 1,500 بدهکار، موجودی نقد 1,500 بستانکار؛ همان ثبت همیشگی',
                en: 'Day 5: Dr Salaries expense 1,500, Cr Cash 1,500, the usual routine entry',
              },
              {
                fa: 'مانده بستانکار موقت 600 در هزینه حقوق، با ثبت پرداخت جذب می‌شود',
                en: 'The temporary 600 credit in Salaries expense is absorbed by the payment',
              },
              {
                fa: 'نتیجه نهایی یکسان: هزینه حقوق ماه دوم 900 و حقوق پرداختنی صفر',
                en: 'Same end result: month-two salaries expense of 900 and zero salaries payable',
              },
            ],
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'چه چیزهایی را معکوس کنیم؟', en: 'What should be reversed?' },
          text: {
            fa: 'معمولاً فقط **تعدیلات تعهدی** معکوس می‌شوند: هزینه‌های تحقق‌یافته پرداخت‌نشده (حقوق 600 و بهره 150 نوا) و درآمدهای تحقق‌یافته دریافت‌نشده (درآمد 700 صورت‌حساب‌نشده). تعدیلاتی مانند استهلاک یا مصرف پیش‌پرداخت بیمه و ملزومات هرگز معکوس نمی‌شوند، چون معامله نقدی بعدی‌ای ندارند که بخواهد ساده شود.',
            en: 'Usually only **accrual adjustments** are reversed: accrued expenses (Nova’s 600 of salaries and 150 of interest) and accrued revenues (the 700 of unbilled revenue). Adjustments such as depreciation, or the using-up of prepaid insurance and supplies, are never reversed, there is no future cash transaction for them to simplify.',
          },
        },
      ],
    },
    {
      id: 'summary',
      title: { fa: 'جمع‌بندی', en: 'Summary' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'با بستن حساب‌ها، چرخه حسابداری ماه اول نوا کامل شد: حساب‌های موقت صفر شدند، سود خالص 4,850 و برداشت 1,000 به سرمایه منتقل شدند و تراز آزمایشی پس از بستن حساب‌ها با جمع 71,400 برقرار شد. ماه دوم با همین مانده‌های دائمی آغاز می‌شود و چرخه از نو تکرار خواهد شد.',
            en: 'With the books closed, Nova’s first accounting cycle is complete: the temporary accounts are back to zero, net income of 4,850 and drawings of 1,000 have been transferred to capital, and the post-closing trial balance agrees at 71,400. Month two opens with these permanent balances, and the cycle begins again.',
          },
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'حساب‌های موقت', en: 'Temporary accounts' },
              def: {
                fa: 'درآمدها، هزینه‌ها، برداشت و خلاصه سود و زیان؛ حساب‌هایی که در پایان هر دوره بسته می‌شوند.',
                en: 'Revenues, expenses, drawings and Income Summary, accounts closed at the end of every period.',
              },
            },
            {
              term: { fa: 'حساب‌های دائمی', en: 'Permanent accounts' },
              def: {
                fa: 'دارایی‌ها، بدهی‌ها و سرمایه؛ حساب‌هایی که مانده‌شان به دوره بعد منتقل می‌شود.',
                en: 'Assets, liabilities and capital, accounts whose balances carry forward to the next period.',
              },
            },
            {
              term: { fa: 'ثبت‌های بستن حساب‌ها', en: 'Closing entries' },
              def: {
                fa: 'ثبت‌هایی در پایان دوره که حساب‌های موقت را صفر و سود خالص و برداشت را به سرمایه منتقل می‌کنند.',
                en: 'Period-end entries that zero the temporary accounts and transfer net income and drawings to capital.',
              },
            },
            {
              term: { fa: 'خلاصه سود و زیان', en: 'Income summary' },
              def: {
                fa: 'حساب واسطی که درآمدها و هزینه‌ها به آن بسته می‌شوند؛ مانده آن برابر سود یا زیان خالص است.',
                en: 'A clearing account into which revenues and expenses are closed; its balance equals net income or loss.',
              },
            },
            {
              term: { fa: 'تراز آزمایشی پس از بستن حساب‌ها', en: 'Post-closing trial balance' },
              def: {
                fa: 'فهرست مانده حساب‌های دائمی پس از بستن حساب‌ها، برای کنترل برابری بدهکار و بستانکار.',
                en: 'A list of permanent-account balances after closing, used to confirm that debits equal credits.',
              },
            },
            {
              term: { fa: 'چرخه حسابداری', en: 'Accounting cycle' },
              def: {
                fa: 'ده مرحله‌ای که هر دوره تکرار می‌شوند: از تحلیل معاملات تا تراز پس از بستن و ثبت‌های معکوس اختیاری.',
                en: 'The ten steps repeated every period, from analysing transactions to the post-closing trial balance and optional reversing entries.',
              },
            },
            {
              term: { fa: 'ثبت‌های معکوس', en: 'Reversing entries' },
              def: {
                fa: 'ثبت‌های اختیاری در آغاز دوره جدید که تعدیلات تعهدی دوره قبل را برعکس می‌کنند تا ثبت‌های بعدی ساده‌تر شوند.',
                en: 'Optional entries at the start of a new period that undo the prior period’s accrual adjustments to simplify later entries.',
              },
            },
            {
              term: { fa: 'سود انباشته', en: 'Retained earnings' },
              def: {
                fa: 'در شرکت‌های سهامی، جمع سودهای خالص گذشته پس از کسر سود سهام؛ معادل حساب سرمایه در مؤسسه انفرادی برای بستن حساب‌ها.',
                en: 'In a company, accumulated past net income less dividends, the account that plays Capital’s role in closing.',
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
        fa: 'کدام حساب در پایان دوره بسته **نمی‌شود**؟',
        en: 'Which account is **not** closed at the end of the period?',
      },
      options: [
        { fa: 'هزینه اجاره', en: 'Rent expense' },
        { fa: 'برداشت سارا', en: 'Drawings (Sara)' },
        { fa: 'درآمد خدمات', en: 'Service revenue' },
        { fa: 'استهلاک انباشته تجهیزات', en: 'Accumulated depreciation' },
      ],
      answer: 3,
      explain: {
        fa: 'استهلاک انباشته یک حساب کاهنده دارایی و بنابراین دائمی است و مانده آن به دوره بعد منتقل می‌شود. هزینه استهلاک بسته می‌شود، نه استهلاک انباشته.',
        en: 'Accumulated depreciation is a contra-asset, so it is permanent and its balance carries forward. Depreciation expense is closed; accumulated depreciation is not.',
      },
    },
    {
      q: {
        fa: 'پس از ثبت‌های 1 و 2 (بستن درآمد و هزینه‌ها)، مانده خلاصه سود و زیان نوا چیست؟',
        en: 'After closing entries 1 and 2 (revenue and expenses), what is the balance of Nova’s Income Summary?',
      },
      options: [
        { fa: '7,850 بدهکار', en: 'A debit balance of 7,850' },
        { fa: '4,850 بستانکار', en: 'A credit balance of 4,850' },
        { fa: '12,700 بستانکار', en: 'A credit balance of 12,700' },
        { fa: 'صفر', en: 'Zero' },
      ],
      answer: 1,
      explain: {
        fa: 'خلاصه سود و زیان 12,700 بستانکار و 7,850 بدهکار شده است؛ مانده 4,850 بستانکار برابر سود خالص است که با ثبت 3 به سرمایه منتقل می‌شود.',
        en: 'Income Summary received a 12,700 credit and a 7,850 debit, leaving a 4,850 credit balance, net income, which entry 3 transfers to capital.',
      },
    },
    {
      q: {
        fa: 'حساب برداشت چگونه بسته می‌شود؟',
        en: 'How is the Drawings account closed?',
      },
      options: [
        { fa: 'خلاصه سود و زیان بدهکار، برداشت بستانکار', en: 'Dr Income summary, Cr Drawings' },
        { fa: 'برداشت بدهکار، سرمایه بستانکار', en: 'Dr Drawings, Cr Capital' },
        { fa: 'سرمایه بدهکار، برداشت بستانکار', en: 'Dr Capital, Cr Drawings' },
        { fa: 'بسته نمی‌شود و به دوره بعد منتقل می‌شود', en: 'It is not closed; it carries forward' },
      ],
      answer: 2,
      explain: {
        fa: 'برداشت هزینه نیست و از خلاصه سود و زیان عبور نمی‌کند. مانده بدهکار آن با بستانکار کردن برداشت و بدهکار کردن مستقیم سرمایه صفر می‌شود.',
        en: 'Drawings are not an expense and bypass Income Summary. Their debit balance is cleared by crediting Drawings and debiting Capital directly.',
      },
    },
    {
      q: {
        fa: 'چرا جمع تراز آزمایشی پس از بستن حساب‌های نوا 71,400 است، در حالی که جمع دارایی‌های ترازنامه 71,100 بود؟',
        en: 'Why does Nova’s post-closing trial balance total 71,400 when total assets on the balance sheet were 71,100?',
      },
      options: [
        {
          fa: 'چون استهلاک انباشته (300) در ستون بستانکار آمده، نه اینکه از بهای تجهیزات کسر شود',
          en: 'Because accumulated depreciation (300) is listed in the credit column instead of being deducted from equipment',
        },
        { fa: 'به دلیل یک اشتباه 300 در انتقال به دفتر کل', en: 'Because of a 300 posting error' },
        { fa: 'چون حساب برداشت بسته نشده است', en: 'Because the Drawings account was not closed' },
        { fa: 'چون بهره پرداختنی دو بار حساب شده است', en: 'Because interest payable was counted twice' },
      ],
      answer: 0,
      explain: {
        fa: 'در تراز آزمایشی، استهلاک انباشته مانده بستانکار جداگانه دارد؛ پس جمع ستون‌ها 300 بیشتر از جمع خالص دارایی‌ها در ترازنامه است: 71,100 + 300 = 71,400.',
        en: 'In a trial balance, accumulated depreciation is a separate credit balance, so the column totals are 300 higher than net total assets: 71,100 + 300 = 71,400.',
      },
    },
    {
      q: {
        fa: 'در چرخه حسابداری، بلافاصله پس از تهیه صورت‌های مالی کدام مرحله انجام می‌شود؟',
        en: 'In the accounting cycle, which step comes immediately after preparing the financial statements?',
      },
      options: [
        { fa: 'تهیه تراز آزمایشی تعدیل‌نشده', en: 'Prepare the unadjusted trial balance' },
        { fa: 'ثبت‌های تعدیلی', en: 'Record adjusting entries' },
        { fa: 'ثبت‌های معکوس', en: 'Record reversing entries' },
        { fa: 'ثبت و انتقال ثبت‌های بستن حساب‌ها', en: 'Journalize and post closing entries' },
      ],
      answer: 3,
      explain: {
        fa: 'ترتیب پایانی چرخه چنین است: صورت‌های مالی (7)، ثبت‌های بستن (8)، تراز آزمایشی پس از بستن (9) و در آغاز دوره بعد، ثبت‌های معکوس اختیاری (10).',
        en: 'The cycle ends: financial statements (7), closing entries (8), post-closing trial balance (9), and optional reversing entries at the start of the next period (10).',
      },
    },
    {
      q: {
        fa: 'نوا 600 حقوق تعهدی را در روز 1 ماه بعد معکوس می‌کند و در روز 5، مبلغ 1,500 حقوق می‌پردازد و کل آن را هزینه می‌کند. مانده هزینه حقوق و دستمزد پس از روز 5 چقدر است؟',
        en: 'Nova reverses the 600 accrued salaries on Day 1 of the next month and on Day 5 pays 1,500 of salaries, debiting the full amount to expense. What is the Salaries expense balance after Day 5?',
      },
      options: [
        { fa: '1,500', en: '1,500' },
        { fa: '2,100', en: '2,100' },
        { fa: '900', en: '900' },
        { fa: '600', en: '600' },
      ],
      answer: 2,
      explain: {
        fa: 'ثبت معکوس 600 بستانکار در هزینه حقوق ایجاد می‌کند و پرداخت 1,500 بدهکار می‌شود: 1,500 − 600 = 900، که دقیقاً حقوق مربوط به ماه جدید است.',
        en: 'The reversal leaves a 600 credit in Salaries expense; the payment debits 1,500: 1,500 − 600 = 900, exactly the salaries that belong to the new month.',
      },
    },
  ],
}
