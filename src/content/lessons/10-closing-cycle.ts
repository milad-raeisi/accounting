import type { Lesson } from '../types'

const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'closing-cycle',
  number: 10,
  level: 'advanced',
  minutes: 40,
  icon: 'RefreshCcw',
  tone: 'equity',
  title: { fa: 'بستن حساب‌ها و چرخه کامل حسابداری', en: 'Closing Entries and the Accounting Cycle' },
  summary: {
    fa: 'در پایان هر دوره، حساب‌های موقت صفر می‌شوند تا دوره بعد با صفحه‌ای سفید آغاز شود. در این درس حساب‌های نوا را می‌بندیم، تراز آزمایشی پس از بستن حساب‌ها را تهیه می‌کنیم، با سند اختتامیه و سند افتتاحیه آشنا می‌شویم، چرخه ده‌مرحله‌ای حسابداری را کامل مرور می‌کنیم و یاد می‌گیریم ثبت معکوس کجا به کار می‌آید.',
    en: 'At the end of every period the temporary accounts are reset to zero so the next period starts with a clean slate. In this lesson we close Nova’s books, prepare the post-closing trial balance, see how closing and opening vouchers work in practice, walk through the full ten-step accounting cycle and learn where reversing entries help.',
  },
  objectives: [
    {
      fa: 'حساب‌های موقت و دائمی را از هم تشخیص دهید و توضیح دهید چرا حساب‌های موقت بسته می‌شوند.',
      en: 'Tell temporary from permanent accounts and explain why temporary accounts are closed.',
    },
    {
      fa: 'چهار ثبت بستن حساب‌ها را با حساب خلاصه سود و زیان انجام دهید، هم وقتی دوره سود دارد و هم وقتی زیان دارد.',
      en: 'Record the four closing entries through Income Summary, both when the period shows a profit and when it shows a loss.',
    },
    {
      fa: 'تراز آزمایشی پس از بستن حساب‌ها را تهیه و تفسیر کنید و نقش سند اختتامیه و سند افتتاحیه را توضیح دهید.',
      en: 'Prepare and interpret a post-closing trial balance, and explain the role of the closing and opening vouchers.',
    },
    {
      fa: 'ده مرحله چرخه حسابداری را به ترتیب انجام دهید و یک ماه کامل از فعالیت یک کسب‌وکار را از اولین ثبت تا تراز پس از بستن پیش ببرید.',
      en: 'Carry out the ten steps of the accounting cycle in order, taking a business through a full month from the first entry to the post-closing trial balance.',
    },
    {
      fa: 'تشخیص دهید کدام تعدیل‌ها را می‌توان معکوس کرد و ثبت‌های معکوس را درست انجام دهید.',
      en: 'Decide which adjustments can be reversed and record reversing entries correctly.',
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
            fa: 'روز اول ماه دوم است. سارا از حسابدارش می‌پرسد: «این ماه تا امروز چقدر درآمد داشته‌ایم؟» اگر حساب درآمد خدمات در دفتر کل هنوز مانده 12,700 ماه اول را در خود داشته باشد، هر درآمد تازه روی همان رقم جمع می‌شود و پاسخ حسابدار بی‌معنا خواهد بود. برای اینکه هر ماه کارنامه جداگانه خودش را داشته باشد، در پایان هر دوره بعضی حساب‌ها را **می‌بندیم**؛ یعنی مانده‌شان را صفر می‌کنیم و نتیجه را به سرمایه منتقل می‌کنیم.',
            en: 'It is the first day of month two. Sara asks her bookkeeper: “How much have we earned so far this month?” If the Service revenue account in the ledger still holds month one’s 12,700, every new sale is simply added on top and the answer is meaningless. To give each month its own report card, at the end of every period we **close** certain accounts: we bring their balances to zero and carry the result into capital.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'درآمدها، هزینه‌ها و برداشت، فعالیت **یک دوره مشخص** را اندازه می‌گیرند. اگر مانده آن‌ها به دوره بعد منتقل شود، دیگر نمی‌توان گفت هر ماه جداگانه چقدر سود داشته‌ایم. به همین دلیل به آن‌ها **حساب‌های موقت** (یا حساب‌های اسمی) می‌گوییم. در مقابل، دارایی‌ها، بدهی‌ها و سرمایه **حساب‌های دائمی** (یا حساب‌های واقعی) هستند: پولی که امروز در بانک داریم یا وامی که بدهکاریم، فردا هم سر جایش است؛ پس مانده این حساب‌ها به دوره بعد منتقل می‌شود.',
            en: 'Revenues, expenses and drawings measure activity for **one specific period**. If their balances rolled forward, we could no longer tell how much each month earned on its own. That is why they are called **temporary** (or nominal) accounts. Assets, liabilities and capital, by contrast, are **permanent** (or real) accounts: the money in the bank today and the loan we owe are still there tomorrow, so their balances carry forward to the next period.',
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
            en: 'Temporary accounts are like a match scoreboard: at the final whistle the result is added to the league table (capital) and the scoreboard resets for the next match. Permanent accounts are the league table itself, which carries on from one match to the next.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'استودیو طراحی نوا: مانده حساب‌ها پیش و پس از بستن، روز 30',
            en: 'Nova Design Studio: balances before and after closing, Day 30',
          },
          head: [
            { fa: 'حساب', en: 'Account' },
            { fa: 'نوع', en: 'Type' },
            { fa: 'مانده پیش از بستن', en: 'Balance before closing' },
            { fa: 'مانده پس از بستن', en: 'Balance after closing' },
          ],
          rows: [
            [{ fa: 'درآمد خدمات', en: 'Service revenue' }, { fa: 'موقت (بستانکار)', en: 'Temporary (credit)' }, 12700, 0],
            [{ fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' }, { fa: 'موقت (بدهکار)', en: 'Temporary (debit)' }, 3600, 0],
            [{ fa: 'هزینه اجاره', en: 'Rent expense' }, { fa: 'موقت (بدهکار)', en: 'Temporary (debit)' }, 2500, 0],
            [{ fa: 'هزینه ملزومات', en: 'Supplies expense' }, { fa: 'موقت (بدهکار)', en: 'Temporary (debit)' }, 1200, 0],
            [{ fa: 'هزینه استهلاک', en: 'Depreciation expense' }, { fa: 'موقت (بدهکار)', en: 'Temporary (debit)' }, 300, 0],
            [{ fa: 'هزینه بهره', en: 'Interest expense' }, { fa: 'موقت (بدهکار)', en: 'Temporary (debit)' }, 150, 0],
            [{ fa: 'هزینه بیمه', en: 'Insurance expense' }, { fa: 'موقت (بدهکار)', en: 'Temporary (debit)' }, 100, 0],
            [{ fa: 'برداشت سارا', en: 'Drawings (Sara)' }, { fa: 'موقت (بدهکار)', en: 'Temporary (debit)' }, 1000, 0],
            [{ fa: 'سرمایه سارا', en: 'Capital (Sara)' }, { fa: 'دائمی (بستانکار)', en: 'Permanent (credit)' }, 50000, 53850],
            [{ fa: 'موجودی نقد', en: 'Cash' }, { fa: 'دائمی (بدهکار)', en: 'Permanent (debit)' }, 46300, 46300],
          ],
          numericCols: [2, 3],
        },
        {
          type: 'p',
          text: {
            fa: 'پس بستن حساب‌ها دو کار انجام می‌دهد: (1) حساب‌های موقت را برای دوره جدید **صفر** می‌کند و (2) سود خالص و برداشت را به حساب سرمایه **منتقل** می‌کند. حساب‌های دائمی، مانند موجودی نقد در جدول بالا، دست نمی‌خورند.',
            en: 'So closing does two jobs: (1) it **resets** the temporary accounts to zero for the new period, and (2) it **transfers** net income and drawings into capital. Permanent accounts, like Cash in the table above, are left untouched.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'سرمایه در دفتر کل هنوز 50,000 است', en: 'The ledger still says 50,000' },
          text: {
            fa: 'در درس صورت‌های مالی سرمایه پایان ماه سارا را 53,850 محاسبه کردیم، اما آن رقم فقط روی صورت‌ها بود. پیش از بستن، مانده حساب سرمایه سارا در دفتر کل هنوز 50,000 است. ثبت‌های بستن این فاصله را در خود دفاتر پر می‌کنند.',
            en: 'In the lesson on financial statements we worked out Sara’s ending capital as 53,850, but that figure lived only on the statements. Before closing, the Capital (Sara) account in the ledger still shows 50,000. The closing entries bring the ledger itself into line.',
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
            fa: '**خلاصه سود و زیان** یک حساب موقت و واسط است که فقط هنگام بستن حساب‌ها به کار می‌رود. همه درآمدها و هزینه‌ها ابتدا به این حساب بسته می‌شوند و مانده آن، که برابر سود یا زیان خالص است، سپس به سرمایه منتقل می‌شود. در کدینگ نوا این حساب کد 3900 را دارد و در گروه حقوق مالکانه قرار گرفته است. مزیتش این است که سود خالص در دفاتر به‌صورت یک رقم واحد دیده می‌شود و می‌توان آن را با صورت سود و زیان تطبیق داد.',
            en: 'The **Income Summary** account is a temporary clearing account used only during closing. All revenues and expenses are closed into it first; its balance, equal to net income or net loss, is then transferred to capital. In Nova’s chart of accounts it is code 3900, inside the equity group. The benefit is that net income appears in the ledger as one figure that can be agreed to the income statement.',
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
                fa: 'حساب‌های درآمد مانده بستانکار دارند؛ پس هر کدام را به اندازه مانده‌اش بدهکار و خلاصه سود و زیان را بستانکار می‌کنیم.',
                en: 'Revenue accounts carry credit balances, so debit each one for its balance and credit Income Summary.',
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
                fa: 'مانده بستانکار آن (سود خالص) را به سرمایه منتقل می‌کنیم: خلاصه سود و زیان بدهکار، سرمایه بستانکار. اگر دوره زیان داشته باشد، این ثبت برعکس است.',
                en: 'Transfer its credit balance (net income) to capital: debit Income Summary, credit Capital. If the period shows a loss, the entry runs the other way.',
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
          title: { fa: 'کنترل میانه راه', en: 'A mid-way check' },
          text: {
            fa: 'پس از ثبت‌های 1 و 2، مانده خلاصه سود و زیان را با سود خالص صورت سود و زیان مقایسه کنید: 12,700 بستانکار منهای 7,850 بدهکار = 4,850 بستانکار. اگر این رقم با سود خالص صورت سود و زیان برابر نبود، پیش از ثبت 3 دنبال اشتباه بگردید؛ احتمالاً حسابی جا افتاده یا دو بار بسته شده است.',
            en: 'After entries 1 and 2, compare Income Summary with net income on the income statement: a 12,700 credit less a 7,850 debit = a 4,850 credit. If it does not equal net income on the income statement, find the error before entry 3; an account has probably been missed or closed twice.',
          },
        },
        { type: 'h', text: { fa: 'اگر دوره با زیان تمام شود', en: 'When the period ends in a loss' } },
        {
          type: 'p',
          text: {
            fa: 'اگر هزینه‌ها از درآمدها بیشتر باشد، پس از ثبت‌های 1 و 2 مانده خلاصه سود و زیان **بدهکار** می‌شود و برابر زیان خالص است. در این حالت ثبت 3 برعکس می‌شود: سرمایه بدهکار و خلاصه سود و زیان بستانکار؛ چون زیان، سرمایه مالک را کاهش می‌دهد. فرض کنید در ماهی کم‌کار، درآمد کسب‌وکاری 5,000 و هزینه‌هایش 6,200 باشد:',
            en: 'If expenses exceed revenues, Income Summary is left with a **debit** balance after entries 1 and 2, equal to the net loss. Entry 3 then runs the other way: debit Capital, credit Income Summary, because a loss reduces the owner’s capital. Suppose that in a slow month a business earns 5,000 of revenue and incurs 6,200 of expenses:',
          },
        },
        {
          type: 'journal',
          title: { fa: 'بستن حساب‌ها در ماهی با زیان خالص 1,200', en: 'Closing a month with a 1,200 net loss' },
          entries: [
            {
              date: { fa: 'پایان ماه', en: 'Month-end' },
              lines: [
                { account: { fa: 'درآمد خدمات', en: 'Service revenue' }, debit: 5000 },
                { account: { fa: 'خلاصه سود و زیان', en: 'Income summary' }, credit: 5000 },
              ],
              memo: { fa: 'ثبت 1: بستن درآمد', en: 'Entry 1: close revenue' },
            },
            {
              date: { fa: 'پایان ماه', en: 'Month-end' },
              lines: [
                { account: { fa: 'خلاصه سود و زیان', en: 'Income summary' }, debit: 6200 },
                { account: { fa: 'حساب‌های هزینه (جمع، برای سادگی در یک سطر)', en: 'Expense accounts (total, on one line for simplicity)' }, credit: 6200 },
              ],
              memo: { fa: 'ثبت 2: بستن هزینه‌ها؛ خلاصه سود و زیان اکنون 1,200 مانده بدهکار دارد', en: 'Entry 2: close expenses; Income Summary now has a 1,200 debit balance' },
            },
            {
              date: { fa: 'پایان ماه', en: 'Month-end' },
              lines: [
                { account: { fa: 'سرمایه', en: 'Capital' }, debit: 1200 },
                { account: { fa: 'خلاصه سود و زیان', en: 'Income summary' }, credit: 1200 },
              ],
              memo: { fa: 'ثبت 3 (برعکس حالت سود): انتقال زیان خالص به سرمایه', en: 'Entry 3 (the reverse of the profit case): transfer the net loss to capital' },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در شرکت‌های سهامی', en: 'In a company' },
          text: {
            fa: 'در شرکت سهامی، خلاصه سود و زیان به حساب **سود (زیان) انباشته** بسته می‌شود، نه به سرمایه؛ و به‌جای برداشت، **سود سهام** مصوب به سود انباشته بسته می‌شود. منطق ثبت‌ها دقیقاً همان است. سود انباشته، اندوخته قانونی و تقسیم سود را در درس حقوق مالکانه شرکت‌ها می‌بینیم.',
            en: 'In a company, Income Summary closes to **Retained earnings**, not to share capital, and declared **dividends**, rather than drawings, are closed to retained earnings. The logic of the entries is exactly the same. Retained earnings, the legal reserve and dividends are covered in the lesson on company equity.',
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
            fa: 'پس از ثبت و انتقال ثبت‌های بستن به دفتر کل، آخرین کنترل دوره را انجام می‌دهیم: **تراز آزمایشی پس از بستن حساب‌ها**. این تراز فقط **حساب‌های دائمی** را در بر دارد، چون همه حساب‌های موقت اکنون مانده صفر دارند. هدف آن اطمینان از برابری جمع بدهکار و بستانکار پیش از شروع دوره جدید است.',
            en: 'Once the closing entries are posted, we run the period’s last check: the **post-closing trial balance**. It lists only **permanent accounts**, because every temporary account now has a zero balance. Its purpose is to confirm that debits still equal credits before the new period begins.',
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
      id: 'in-practice',
      title: { fa: 'بستن حساب‌ها در عمل: سند اختتامیه و سند افتتاحیه', en: 'Closing in practice: closing and opening vouchers' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'سال مالی بیشتر کسب‌وکارهای ایرانی با سال شمسی یکی است و در 29 اسفند (در سال کبیسه 30 اسفند) تمام می‌شود. حسابدار در روزهای پایانی سال، بستن حساب‌ها را با مجموعه‌ای از **اسناد حسابداری** انجام می‌دهد؛ همان اسنادی که در درس اسناد حسابداری و کدینگ با ساختارشان آشنا شدیم. ترتیب رایج چنین است:',
            en: 'Most Iranian businesses use the solar calendar year, so the fiscal year ends on 29 Esfand (30 Esfand in a leap year). In the last days of the year the accountant closes the books through a series of **accounting vouchers**, the same documents covered in the lesson on vouchers and coding. The usual order is:',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'سند ثبت‌های اصلاحی', en: 'Adjusting voucher' },
              text: {
                fa: 'همه تعدیل‌های پایان سال (استهلاک، هزینه‌ها و درآمدهای تعهدی، پیش‌پرداخت‌ها و پیش‌دریافت‌ها) ثبت می‌شوند و تراز آزمایشی تعدیل‌شده به دست می‌آید.',
                en: 'All year-end adjustments (depreciation, accruals, prepayments and unearned revenue) are recorded, giving the adjusted trial balance.',
              },
            },
            {
              title: { fa: 'سند بستن حساب‌های موقت', en: 'Voucher closing the temporary accounts' },
              text: {
                fa: 'درآمدها و هزینه‌ها به خلاصه سود و زیان بسته می‌شوند (ثبت‌های 1 و 2 بالا).',
                en: 'Revenues and expenses are closed to Income Summary (entries 1 and 2 above).',
              },
            },
            {
              title: { fa: 'سند انتقال سود یا زیان', en: 'Voucher transferring the profit or loss' },
              text: {
                fa: 'مانده خلاصه سود و زیان به سرمایه (یا در شرکت‌ها به سود انباشته) و برداشت به سرمایه منتقل می‌شود (ثبت‌های 3 و 4).',
                en: 'The Income Summary balance goes to capital (or, in a company, to retained earnings) and drawings are closed to capital (entries 3 and 4).',
              },
            },
            {
              title: { fa: 'سند اختتامیه', en: 'Closing voucher' },
              text: {
                fa: 'آخرین سند سال است و همه حساب‌های دائمی را می‌بندد تا دفاتر آن سال کامل شوند: هر حساب با مانده بدهکار، بستانکار و هر حساب با مانده بستانکار، بدهکار می‌شود.',
                en: 'The last voucher of the year closes every permanent account so that year’s books are complete: each debit-balance account is credited and each credit-balance account is debited.',
              },
            },
            {
              title: { fa: 'سند افتتاحیه', en: 'Opening voucher' },
              text: {
                fa: 'نخستین سند سال جدید (1 فروردین) دقیقاً عکس سند اختتامیه است و مانده‌های حساب‌های دائمی را در دفاتر سال جدید دوباره باز می‌کند.',
                en: 'The first voucher of the new year (1 Farvardin) is the exact mirror of the closing voucher and reopens the permanent balances in the new year’s books.',
              },
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'اگر روز 30 پایان سال مالی نوا بود، سند اختتامیه آن چنین می‌شد. به ارقام دقت کنید: همان مانده‌های تراز آزمایشی پس از بستن حساب‌ها هستند و جمع هر طرف 71,400 است.',
            en: 'If Day 30 were the end of Nova’s fiscal year, its closing voucher would look like this. Notice the figures: they are exactly the post-closing trial balance, and each side totals 71,400.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'سند اختتامیه نوا (اگر روز 30 پایان سال مالی بود)', en: 'Nova’s closing voucher (if Day 30 were the fiscal year-end)' },
          entries: [
            {
              date: { fa: 'روز 30، پایان سال مالی فرضی', en: 'Day 30, assumed year-end' },
              lines: [
                { account: { fa: 'استهلاک انباشته تجهیزات', en: 'Accumulated depreciation' }, debit: 300 },
                { account: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, debit: 1500 },
                { account: { fa: 'حقوق پرداختنی', en: 'Salaries payable' }, debit: 600 },
                { account: { fa: 'بهره پرداختنی', en: 'Interest payable' }, debit: 150 },
                { account: { fa: 'وام پرداختنی', en: 'Loan payable' }, debit: 15000 },
                { account: { fa: 'سرمایه سارا', en: 'Capital (Sara)' }, debit: 53850 },
                { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 46300 },
                { account: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, credit: 2200 },
                { account: { fa: 'ملزومات', en: 'Supplies' }, credit: 1800 },
                { account: { fa: 'پیش‌پرداخت بیمه', en: 'Prepaid insurance' }, credit: 1100 },
                { account: { fa: 'تجهیزات', en: 'Equipment' }, credit: 20000 },
              ],
              memo: {
                fa: 'همه حساب‌های دائمی صفر می‌شوند؛ سند افتتاحیه روز اول سال بعد همین سطرها را با جهت معکوس ثبت می‌کند',
                en: 'Every permanent account goes to zero; the opening voucher on the first day of the next year records the same lines the other way round',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'نرم‌افزارهای حسابداری رایج در ایران سند بستن حساب‌های موقت، سند اختتامیه و سند افتتاحیه را با چند کلیک صادر می‌کنند؛ اما بررسی آن‌ها کار حسابدار است: پیش از صدور، تراز آزمایشی تعدیل‌شده را کنترل کنید و پس از صدور، مطمئن شوید هیچ حساب موقتی مانده ندارد. این اسناد، مانند هر سند دیگر، در **دفاتر قانونی** (روزنامه و کل) هم ثبت می‌شوند. برخی نرم‌افزارها این دو سند را از راه یک حساب واسط با نامی مانند «تراز افتتاحیه» یا «تراز اختتامیه» ثبت می‌کنند؛ نتیجه یکی است.',
            en: 'The accounting software commonly used in Iran issues the voucher closing the temporary accounts, the year-end closing voucher and the opening voucher in a few clicks, but reviewing them is the accountant’s job: check the adjusted trial balance before issuing them, and afterwards make sure no temporary account still has a balance. Like any other voucher, they are also entered in the **legal books** (journal and general ledger). Some systems route both vouchers through a clearing account named something like “opening balance” or “closing balance”; the result is the same.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'یک نکته دیگر: استفاده از خلاصه سود و زیان الزامی نیست. برخی حسابداران درآمدها و هزینه‌ها را مستقیماً به سرمایه (یا سود انباشته) می‌بندند. نتیجه نهایی یکسان است، اما با خلاصه سود و زیان، سود خالص در دفاتر به‌صورت یک رقم دیده می‌شود و تطبیق آن با صورت سود و زیان آسان‌تر است.',
            en: 'One more point: Income Summary is not compulsory. Some accountants close revenues and expenses straight to capital (or retained earnings). The end result is identical, but Income Summary shows net income in the ledger as a single figure, which makes it easier to agree to the income statement.',
          },
        },
        { type: 'h', text: { fa: 'بستن ماهانه یا بستن پایان سال؟', en: 'Monthly close or year-end close?' } },
        {
          type: 'compare',
          left: {
            title: { fa: 'بستن ماهانه', en: 'Monthly close' },
            items: [
              { fa: 'هدف: گزارش‌های مدیریتی به‌موقع، مثلاً سود و زیان هر ماه', en: 'Purpose: timely management reports, such as each month’s profit' },
              { fa: 'تعدیل‌های ماهانه ثبت و ترازها کنترل می‌شوند', en: 'Monthly adjustments are recorded and balances are checked' },
              {
                fa: 'در سیستم‌های رایانه‌ای معمولاً ثبت بستن صادر نمی‌شود؛ نرم‌افزار سود هر ماه را بر اساس بازه تاریخ گزارش می‌کند',
                en: 'In computerised systems closing entries are usually not posted; the software reports each month’s profit by date range',
              },
              { fa: 'پس از تأیید، دوره قفل می‌شود تا کسی سندی با تاریخ گذشته ثبت نکند', en: 'Once approved, the period is locked so nobody posts backdated vouchers' },
            ],
          },
          right: {
            title: { fa: 'بستن پایان سال', en: 'Year-end close' },
            items: [
              { fa: 'ثبت‌های بستن، سند اختتامیه و سند افتتاحیه واقعاً صادر می‌شوند', en: 'Closing entries and the closing and opening vouchers are actually posted' },
              { fa: 'مبنای صورت‌های مالی سالانه، حسابرسی و اظهارنامه مالیاتی است', en: 'The basis for the annual financial statements, the audit and the tax return' },
              { fa: 'پس از آن، تغییر سال بسته‌شده فقط با مجوز و سند تصحیحی مستند ممکن است', en: 'After it, the closed year can be changed only with approval and a documented correcting voucher' },
              { fa: 'در این درس برای تمرین، نوا را در پایان هر ماه کامل می‌بندیم', en: 'In this lesson, for practice, we close Nova fully at the end of each month' },
            ],
          },
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
            fa: 'اکنون همه قطعات پازل را در اختیار داریم. **چرخه حسابداری** مجموعه مراحلی است که در هر دوره مالی به ترتیب تکرار می‌شوند: از تحلیل نخستین معامله تا آماده کردن دفاتر برای دوره بعد. هر مرحله را در درس‌های قبل جداگانه دیدیم؛ اینجا آن‌ها را پشت سر هم می‌چینیم.',
            en: 'We now have every piece of the puzzle. The **accounting cycle** is the sequence of steps repeated every accounting period, from analysing the first transaction to getting the books ready for the next period. We met each step separately in earlier lessons; here we line them up end to end.',
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
                fa: 'با بررسی مدارک پشتیبان (فاکتور، رسید، قرارداد، صورت‌حساب بانک) اثر هر معامله را بر معادله حسابداری تعیین کنید؛ مثلاً آورده 50,000 سارا هم موجودی نقد و هم سرمایه را افزایش می‌دهد.',
                en: 'Use source documents (invoices, receipts, contracts, bank statements) to work out each transaction’s effect on the accounting equation; e.g. Sara’s 50,000 investment increases both Cash and Capital.',
              },
            },
            {
              title: { fa: 'ثبت در دفتر روزنامه', en: 'Journalize' },
              text: {
                fa: 'هر معامله را به ترتیب تاریخ و با جمع بدهکار و بستانکار برابر ثبت کنید. در عمل این کار در قالب **سند حسابداری** با شماره، تاریخ، شرح و کد حساب‌ها انجام می‌شود.',
                en: 'Record each transaction in date order with equal debits and credits. In practice this is done on an **accounting voucher** with a number, date, description and account codes.',
              },
            },
            {
              title: { fa: 'انتقال به دفتر کل', en: 'Post to the ledger' },
              text: {
                fa: 'هر سطر ثبت روزنامه را به حساب مربوط در دفتر کل منتقل کنید. نرم‌افزار این کار را هم‌زمان با تأیید سند انجام می‌دهد.',
                en: 'Transfer every journal line to its account in the general ledger. Software does this the moment a voucher is approved.',
              },
            },
            {
              title: { fa: 'تهیه تراز آزمایشی تعدیل‌نشده', en: 'Prepare the unadjusted trial balance' },
              text: {
                fa: 'مانده همه حساب‌ها را فهرست کنید و برابری جمع بدهکار و بستانکار را بسنجید. برای نوا جمع هر ستون 78,500 بود.',
                en: 'List every account balance and confirm that total debits equal total credits. For Nova each column totalled 78,500.',
              },
            },
            {
              title: { fa: 'ثبت‌های اصلاحی', en: 'Record adjusting entries' },
              text: {
                fa: 'درآمدها و هزینه‌ها را طبق مبنای تعهدی به‌روز کنید؛ نوا شش تعدیل داشت، از جمله استهلاک 300 و حقوق تحقق‌یافته پرداخت‌نشده 600.',
                en: 'Bring revenues and expenses up to date on the accrual basis; Nova had six adjustments, including 300 of depreciation and 600 of accrued salaries.',
              },
            },
            {
              title: { fa: 'تهیه تراز آزمایشی تعدیل‌شده', en: 'Prepare the adjusted trial balance' },
              text: {
                fa: 'پس از انتقال تعدیل‌ها، دوباره برابری را کنترل کنید؛ جمع هر ستون نوا 80,250 شد. این تراز منبع مستقیم تهیه صورت‌های مالی است.',
                en: 'After posting the adjustments, check the balance again; Nova’s columns totalled 80,250. This trial balance is the direct source of the financial statements.',
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
              title: { fa: 'ثبت و انتقال ثبت‌های بستن حساب‌ها', en: 'Journalize and post closing entries' },
              text: {
                fa: 'حساب‌های موقت را صفر کنید و سود خالص (4,850) و برداشت (1,000) را به سرمایه منتقل کنید.',
                en: 'Reset the temporary accounts to zero and transfer net income (4,850) and drawings (1,000) to capital.',
              },
            },
            {
              title: { fa: 'تهیه تراز آزمایشی پس از بستن حساب‌ها', en: 'Prepare the post-closing trial balance' },
              text: {
                fa: 'مطمئن شوید فقط حساب‌های دائمی باقی مانده‌اند و تراز برقرار است؛ برای نوا جمع هر ستون 71,400 است.',
                en: 'Confirm that only permanent accounts remain and that they balance; for Nova each column totals 71,400.',
              },
            },
            {
              title: { fa: 'ثبت‌های معکوس (اختیاری)', en: 'Reversing entries (optional)' },
              text: {
                fa: 'در نخستین روز دوره جدید، برخی تعدیل‌های تعهدی را معکوس کنید تا ثبت معاملات بعدی ساده‌تر شود.',
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
            en: 'Follow the steps around a 3D orbit; each accounting period is one full revolution.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در طول دوره یا در پایان دوره؟', en: 'During the period or at period-end?' },
          text: {
            fa: 'مراحل 1 تا 3 در طول دوره و به‌طور مداوم تکرار می‌شوند؛ مراحل 4 تا 9 در پایان دوره انجام می‌شوند و مرحله 10 در آغاز دوره بعد. نرم‌افزارهای حسابداری بخش بزرگی از کار، به‌ویژه انتقال به دفتر کل و تهیه ترازها را خودکار انجام می‌دهند، اما تحلیل معامله، تعدیل‌ها و بررسی نتیجه همچنان کار حسابدار است.',
            en: 'Steps 1 to 3 repeat continuously during the period; steps 4 to 9 happen at period-end, and step 10 at the start of the next period. Accounting software automates much of the work, posting and trial balances in particular, but analysing transactions, making adjustments and reviewing the results remain the accountant’s job.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'ابزار کمکی: کاربرگ', en: 'A helpful tool: the worksheet' },
          text: {
            fa: '**کاربرگ** جدولی کمکی (معمولاً در صفحه‌گسترده) است که ستون‌های تراز آزمایشی تعدیل‌نشده، تعدیل‌ها، تراز آزمایشی تعدیل‌شده، صورت سود و زیان و ترازنامه را کنار هم می‌گذارد. کاربرگ جزو دفاتر رسمی نیست و جای هیچ ثبتی را نمی‌گیرد، اما پیش‌نویس سریعی از صورت‌های مالی می‌دهد و اشتباه‌ها را زود نشان می‌دهد. تمرین جامع این درس از نسخه ساده‌ای از آن استفاده می‌کند.',
            en: 'A **worksheet** is a working table (usually a spreadsheet) that lays out the unadjusted trial balance, the adjustments, the adjusted trial balance, the income statement and the balance sheet side by side. It is not part of the formal records and does not replace any entry, but it gives a quick draft of the statements and exposes mistakes early. The comprehensive exercise in this lesson uses a simple version.',
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
        { type: 'h', text: { fa: 'معکوس کردن درآمد تحقق‌یافته دریافت‌نشده', en: 'Reversing accrued revenue' } },
        {
          type: 'p',
          text: {
            fa: 'همین منطق برای درآمد تعهدی هم کار می‌کند. نوا در روز 30 با یک ثبت تعدیلی، 700 درآمد خدماتی را که انجام داده اما صورت‌حساب نکرده بود شناسایی کرد (حساب‌های دریافتنی بدهکار، درآمد خدمات بستانکار). فرض کنید در روز 10 ماه بعد صورت‌حساب کل پروژه، یعنی 1,000، صادر و نقداً وصول شود: 700 برای کار ماه قبل و 300 برای کار ماه جدید.',
            en: 'The same logic works for accrued revenue. On Day 30 Nova used an adjusting entry to recognise 700 of services performed but not yet billed (debit Accounts receivable, credit Service revenue). Suppose that on Day 10 of the next month Nova bills the whole project, 1,000, and collects it in cash: 700 for last month’s work and 300 for the new month.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت معکوس درآمد تعهدی 700', en: 'Reversing the 700 of accrued revenue' },
          entries: [
            {
              date: { fa: 'روز 1 ماه بعد', en: 'Day 1, next month' },
              lines: [
                { account: { fa: 'درآمد خدمات', en: 'Service revenue' }, debit: 700 },
                { account: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, credit: 700 },
              ],
              memo: { fa: 'ثبت معکوس تعدیل درآمد', en: 'Reversal of the revenue adjustment' },
            },
            {
              date: { fa: 'روز 10 ماه بعد', en: 'Day 10, next month' },
              lines: [
                { account: { fa: 'موجودی نقد', en: 'Cash' }, debit: 1000 },
                { account: { fa: 'درآمد خدمات', en: 'Service revenue' }, credit: 1000 },
              ],
              memo: {
                fa: 'ثبت عادی وصول؛ درآمد این پروژه در ماه جدید 1,000 منهای 700 یعنی 300 می‌شود',
                en: 'Routine collection entry; this project’s revenue in the new month is 1,000 less 700, i.e. 300',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'چه چیزهایی را معکوس کنیم؟', en: 'What should be reversed?' },
          text: {
            fa: 'فقط **تعدیل‌های تعهدی** معکوس می‌شوند: هزینه‌های تحقق‌یافته پرداخت‌نشده (حقوق 600 و بهره 150 نوا) و درآمدهای تحقق‌یافته دریافت‌نشده (درآمد 700 صورت‌حساب‌نشده). تعدیل‌هایی مانند استهلاک یا مصرف پیش‌پرداخت بیمه و ملزومات هرگز معکوس نمی‌شوند، چون معامله نقدی بعدی‌ای ندارند که بخواهد ساده شود؛ معکوس کردن آن‌ها فقط هزینه دوره بعد را خراب می‌کند.',
            en: 'Only **accrual adjustments** are reversed: accrued expenses (Nova’s 600 of salaries and 150 of interest) and accrued revenues (the 700 of unbilled revenue). Adjustments such as depreciation, or the using-up of prepaid insurance and supplies, are never reversed: there is no later cash transaction for them to simplify, and reversing them would only distort next period’s expenses.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'ثبت معکوس یک انتخاب دفترداری است و نه IFRS و نه استانداردهای حسابداری ایران آن را الزامی نمی‌کنند. بسیاری از نرم‌افزارها اجازه می‌دهند سند تعهدی را با گزینه‌ای مانند «برگشت خودکار در ابتدای دوره بعد» ثبت کنید. اگر واحد شما ثبت معکوس نمی‌زند، در شرح سند پرداخت بعدی حتماً بنویسید چه بخشی از آن قبلاً تعهد شده است.',
            en: 'Reversing entries are a bookkeeping choice; neither IFRS nor Iranian accounting standards require them. Many systems let you post an accrual voucher with an option such as “auto-reverse at the start of next period”. If your team does not use reversing entries, the description on the later payment voucher must say which part was already accrued.',
          },
        },
      ],
    },
    {
      id: 'mistakes',
      title: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'بیشتر خطاهای بستن حساب‌ها از عجله در روزهای پایانی دوره می‌آید. این‌ها رایج‌ترین آن‌ها هستند و راه پرهیز از هر کدام کنارش آمده است:',
            en: 'Most closing errors come from rushing in the last days of the period. These are the most common, each with the way to avoid it:',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**بستن حساب‌های دائمی.** استهلاک انباشته، پیش‌پرداخت‌ها و حقوق پرداختنی هرگز بسته نمی‌شوند. فقط **هزینه** استهلاک بسته می‌شود، نه **استهلاک انباشته**.',
              en: '**Closing permanent accounts.** Accumulated depreciation, prepayments and salaries payable are never closed. Only depreciation **expense** is closed, not **accumulated** depreciation.',
            },
            {
              fa: '**عبور دادن برداشت از خلاصه سود و زیان.** برداشت هزینه نیست؛ اگر آن را به خلاصه سود و زیان ببندید، سود خالص در دفاتر 1,000 کمتر از صورت سود و زیان دیده می‌شود.',
              en: '**Running drawings through Income Summary.** Drawings are not an expense; closing them to Income Summary makes net income in the ledger 1,000 lower than on the income statement.',
            },
            {
              fa: '**ثبت کردن ولی منتقل نکردن.** اگر ثبت‌های بستن به دفتر کل منتقل نشوند، سرمایه در دفتر کل همان 50,000 می‌ماند و با ترازنامه نمی‌خواند.',
              en: '**Journalizing but not posting.** If the closing entries are never posted, Capital in the ledger stays at 50,000 and disagrees with the balance sheet.',
            },
            {
              fa: '**معکوس کردن تعدیل اشتباه.** استهلاک، مصرف ملزومات و منقضی شدن بیمه معامله نقدی بعدی ندارند؛ معکوس کردن آن‌ها هزینه دوره بعد را به‌اشتباه کم می‌کند.',
              en: '**Reversing the wrong adjustment.** Depreciation, supplies used and expired insurance have no later cash transaction; reversing them wrongly reduces next period’s expenses.',
            },
            {
              fa: '**دو بار هزینه کردن یک مبلغ.** اگر ثبت معکوس نزده‌اید، هنگام پرداخت حقوق، 600 تعهدشده را به حساب حقوق پرداختنی بدهکار کنید، نه به هزینه؛ وگرنه هزینه حقوق ماه دوم 600 بیشتر از واقع نشان داده می‌شود.',
              en: '**Expensing the same amount twice.** Without a reversing entry, debit the 600 already accrued to Salaries payable when you pay, not to expense; otherwise month two’s salaries expense is overstated by 600.',
            },
            {
              fa: '**تاریخ اشتباه.** ثبت‌های بستن با تاریخ آخرین روز دوره (روز 30 یا 29 اسفند) ثبت می‌شوند، نه با تاریخ روزی که حسابدار کار را انجام می‌دهد. ثبت معکوس برعکس، تاریخ اولین روز دوره جدید را دارد.',
              en: '**The wrong date.** Closing entries are dated the last day of the period (Day 30, or 29 Esfand), not the day the accountant happens to do the work. Reversing entries, by contrast, are dated the first day of the new period.',
            },
            {
              fa: '**اعتماد کامل به برابری تراز.** تراز پس از بستن ممکن است برابر باشد و باز هم اشتباه داشته باشد؛ مثلاً اگر برداشت بسته نشده باشد، هر دو ستون به یک اندازه بزرگ‌تر می‌شوند.',
              en: '**Trusting a balanced trial balance blindly.** A post-closing trial balance can balance and still be wrong; if drawings were never closed, for instance, both columns are simply larger by the same amount.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'آزمون سه‌ثانیه‌ای', en: 'The three-second test' },
          text: {
            fa: 'پس از بستن، به تراز آزمایشی پس از بستن نگاه کنید: اگر حتی یک حساب درآمد، هزینه، برداشت یا خلاصه سود و زیان در آن دیدید، بستن کامل نشده است. سپس مانده سرمایه را با سرمایه پایان دوره در ترازنامه مقایسه کنید؛ این دو باید دقیقاً برابر باشند.',
            en: 'After closing, glance at the post-closing trial balance: if you see even one revenue, expense, drawings or Income Summary account, closing is incomplete. Then compare the Capital balance with ending capital on the balance sheet; the two must match exactly.',
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
            fa: 'پنج تمرین زیر از ساده به دشوار مرتب شده‌اند و هر کدام کسب‌وکار تازه‌ای است. اول خودتان حل کنید و بعد پاسخ را باز کنید. تمرین آخر یک ماه کامل را از اولین معامله تا تراز پس از بستن پیش می‌برد.',
            en: 'The five exercises below run from easy to hard, and each is a new business. Solve each one yourself before opening the solution. The last one takes a full month from the first transaction to the post-closing trial balance.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'بستن حساب‌های تعمیرگاه موبایل آرش', en: 'Closing the books at Arash Phone Repair' },
          difficulty: 'easy',
          problem: {
            fa: 'تراز آزمایشی تعدیل‌شده «تعمیرگاه موبایل آرش» در پایان ماه در جدول زیر آمده است. (الف) حساب‌های موقت و دائمی را مشخص کنید. (ب) ثبت‌های بستن را با استفاده از خلاصه سود و زیان بنویسید. (ج) سرمایه پایان ماه آرش و جمع هر ستون تراز آزمایشی پس از بستن حساب‌ها را به دست آورید.',
            en: 'The adjusted trial balance of Arash Phone Repair at month-end is shown below. (a) Identify the temporary and permanent accounts. (b) Write the closing entries using Income Summary. (c) Find Arash’s ending capital and the column total of the post-closing trial balance.',
          },
          given: {
            head: [
              { fa: 'حساب', en: 'Account' },
              { fa: 'بدهکار', en: 'Debit' },
              { fa: 'بستانکار', en: 'Credit' },
            ],
            rows: [
              [{ fa: 'موجودی نقد', en: 'Cash' }, 24600, blank],
              [{ fa: 'تجهیزات', en: 'Equipment' }, 14000, blank],
              [{ fa: 'استهلاک انباشته تجهیزات', en: 'Accumulated depreciation' }, blank, 2100],
              [{ fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, blank, 1500],
              [{ fa: 'سرمایه آرش', en: 'Capital (Arash)' }, blank, 30000],
              [{ fa: 'برداشت آرش', en: 'Drawings (Arash)' }, 2000, blank],
              [{ fa: 'درآمد خدمات', en: 'Service revenue' }, blank, 18000],
              [{ fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' }, 6500, blank],
              [{ fa: 'هزینه اجاره', en: 'Rent expense' }, 3000, blank],
              [{ fa: 'هزینه آب، برق و اینترنت', en: 'Utilities expense' }, 800, blank],
              [{ fa: 'هزینه استهلاک', en: 'Depreciation expense' }, 700, blank],
              [{ fa: '**جمع**', en: '**Total**' }, 51600, 51600],
            ],
            numericCols: [1, 2],
          },
          hint: {
            fa: 'حسابی موقت است که فقط عملکرد همین ماه را اندازه بگیرد. استهلاک انباشته را با هزینه استهلاک اشتباه نگیرید.',
            en: 'An account is temporary if it measures this month only. Do not confuse accumulated depreciation with depreciation expense.',
          },
          solution: [
            {
              type: 'compare',
              left: {
                title: { fa: 'موقت (بسته می‌شوند)', en: 'Temporary (closed)' },
                items: [
                  { fa: 'درآمد خدمات', en: 'Service revenue' },
                  { fa: 'هزینه حقوق و دستمزد، اجاره، آب و برق و اینترنت، استهلاک', en: 'Salaries, rent, utilities and depreciation expense' },
                  { fa: 'برداشت آرش', en: 'Drawings (Arash)' },
                ],
              },
              right: {
                title: { fa: 'دائمی (منتقل می‌شوند)', en: 'Permanent (carried forward)' },
                items: [
                  { fa: 'موجودی نقد و تجهیزات', en: 'Cash and Equipment' },
                  { fa: 'استهلاک انباشته تجهیزات', en: 'Accumulated depreciation' },
                  { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
                  { fa: 'سرمایه آرش', en: 'Capital (Arash)' },
                ],
              },
            },
            {
              type: 'journal',
              title: { fa: 'ثبت‌های بستن', en: 'Closing entries' },
              entries: [
                {
                  date: { fa: 'پایان ماه', en: 'Month-end' },
                  lines: [
                    { account: { fa: 'درآمد خدمات', en: 'Service revenue' }, debit: 18000 },
                    { account: { fa: 'خلاصه سود و زیان', en: 'Income summary' }, credit: 18000 },
                  ],
                  memo: { fa: 'ثبت 1: بستن درآمد', en: 'Entry 1: close revenue' },
                },
                {
                  date: { fa: 'پایان ماه', en: 'Month-end' },
                  lines: [
                    { account: { fa: 'خلاصه سود و زیان', en: 'Income summary' }, debit: 11000 },
                    { account: { fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' }, credit: 6500 },
                    { account: { fa: 'هزینه اجاره', en: 'Rent expense' }, credit: 3000 },
                    { account: { fa: 'هزینه آب، برق و اینترنت', en: 'Utilities expense' }, credit: 800 },
                    { account: { fa: 'هزینه استهلاک', en: 'Depreciation expense' }, credit: 700 },
                  ],
                  memo: { fa: 'ثبت 2: بستن هزینه‌ها', en: 'Entry 2: close expenses' },
                },
                {
                  date: { fa: 'پایان ماه', en: 'Month-end' },
                  lines: [
                    { account: { fa: 'خلاصه سود و زیان', en: 'Income summary' }, debit: 7000 },
                    { account: { fa: 'سرمایه آرش', en: 'Capital (Arash)' }, credit: 7000 },
                  ],
                  memo: { fa: 'ثبت 3: سود خالص (18,000 منهای 11,000) به سرمایه', en: 'Entry 3: net income (18,000 less 11,000) to capital' },
                },
                {
                  date: { fa: 'پایان ماه', en: 'Month-end' },
                  lines: [
                    { account: { fa: 'سرمایه آرش', en: 'Capital (Arash)' }, debit: 2000 },
                    { account: { fa: 'برداشت آرش', en: 'Drawings (Arash)' }, credit: 2000 },
                  ],
                  memo: { fa: 'ثبت 4: بستن برداشت', en: 'Entry 4: close drawings' },
                },
              ],
            },
            {
              type: 'formula',
              text: {
                fa: 'سرمایه پایان ماه = 30,000 + 7,000 − 2,000 = 35,000',
                en: 'Ending capital = 30,000 + 7,000 − 2,000 = 35,000',
              },
            },
            {
              type: 'table',
              caption: { fa: 'تراز آزمایشی پس از بستن حساب‌ها', en: 'Post-closing trial balance' },
              head: [
                { fa: 'حساب', en: 'Account' },
                { fa: 'بدهکار', en: 'Debit' },
                { fa: 'بستانکار', en: 'Credit' },
              ],
              rows: [
                [{ fa: 'موجودی نقد', en: 'Cash' }, 24600, blank],
                [{ fa: 'تجهیزات', en: 'Equipment' }, 14000, blank],
                [{ fa: 'استهلاک انباشته تجهیزات', en: 'Accumulated depreciation' }, blank, 2100],
                [{ fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, blank, 1500],
                [{ fa: 'سرمایه آرش', en: 'Capital (Arash)' }, blank, 35000],
                [{ fa: '**جمع**', en: '**Total**' }, 38600, 38600],
              ],
              numericCols: [1, 2],
            },
          ],
          answer: {
            fa: 'سود خالص 7,000؛ سرمایه پایان ماه 35,000؛ جمع هر ستون تراز پس از بستن 38,600.',
            en: 'Net income 7,000; ending capital 35,000; post-closing trial balance totals 38,600 on each side.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'ماهی با زیان در باشگاه ورزشی سپید', en: 'A loss-making month at Sepid Gym' },
          difficulty: 'medium',
          problem: {
            fa: 'لیلا مالک «باشگاه ورزشی سپید» است. مانده سرمایه او در ابتدای ماه 25,000 بود و در این ماه آورده جدیدی نداشت. مانده حساب‌های موقت پس از تعدیل‌ها در جدول زیر آمده است. ثبت‌های بستن را بنویسید، حساب‌های خلاصه سود و زیان و سرمایه را به‌صورت حساب T نشان دهید و سرمایه پایان ماه را محاسبه کنید.',
            en: 'Leila owns Sepid Gym. Her capital balance at the start of the month was 25,000 and she made no new investment this month. Her temporary account balances after adjustments are shown below. Write the closing entries, show Income Summary and Capital as T-accounts, and calculate ending capital.',
          },
          given: {
            head: [
              { fa: 'حساب', en: 'Account' },
              { fa: 'مانده', en: 'Balance' },
            ],
            rows: [
              [{ fa: 'درآمد حق عضویت (بستانکار)', en: 'Membership revenue (credit)' }, 7500],
              [{ fa: 'هزینه اجاره', en: 'Rent expense' }, 4000],
              [{ fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' }, 3800],
              [{ fa: 'هزینه آب، برق و اینترنت', en: 'Utilities expense' }, 900],
              [{ fa: 'هزینه استهلاک', en: 'Depreciation expense' }, 600],
              [{ fa: 'برداشت لیلا', en: 'Drawings (Leila)' }, 1000],
            ],
            numericCols: [1],
          },
          hint: {
            fa: 'اول جمع هزینه‌ها را با درآمد مقایسه کنید. اگر هزینه‌ها بیشتر باشند، مانده خلاصه سود و زیان پس از ثبت‌های 1 و 2 در کدام طرف است؟',
            en: 'First compare total expenses with revenue. If expenses are larger, which side is Income Summary’s balance on after entries 1 and 2?',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'محاسبه نتیجه ماه', en: 'Work out the month’s result' },
                  text: {
                    fa: 'جمع هزینه‌ها = 4,000 + 3,800 + 900 + 600 = 9,300. چون 9,300 از درآمد 7,500 بیشتر است، ماه با **زیان خالص 1,800** تمام شده است.',
                    en: 'Total expenses = 4,000 + 3,800 + 900 + 600 = 9,300. Since 9,300 exceeds revenue of 7,500, the month ended with a **net loss of 1,800**.',
                  },
                },
                {
                  title: { fa: 'جهت ثبت سوم', en: 'Direction of entry 3' },
                  text: {
                    fa: 'پس از بستن درآمد و هزینه‌ها، خلاصه سود و زیان 1,800 مانده بدهکار دارد؛ پس برای صفر کردن آن را بستانکار و سرمایه را بدهکار می‌کنیم.',
                    en: 'After closing revenue and expenses, Income Summary has a 1,800 debit balance, so we credit it to clear it and debit Capital.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              title: { fa: 'ثبت‌های بستن باشگاه سپید', en: 'Sepid Gym closing entries' },
              entries: [
                {
                  date: { fa: 'پایان ماه', en: 'Month-end' },
                  lines: [
                    { account: { fa: 'درآمد حق عضویت', en: 'Membership revenue' }, debit: 7500 },
                    { account: { fa: 'خلاصه سود و زیان', en: 'Income summary' }, credit: 7500 },
                  ],
                  memo: { fa: 'ثبت 1: بستن درآمد', en: 'Entry 1: close revenue' },
                },
                {
                  date: { fa: 'پایان ماه', en: 'Month-end' },
                  lines: [
                    { account: { fa: 'خلاصه سود و زیان', en: 'Income summary' }, debit: 9300 },
                    { account: { fa: 'هزینه اجاره', en: 'Rent expense' }, credit: 4000 },
                    { account: { fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' }, credit: 3800 },
                    { account: { fa: 'هزینه آب، برق و اینترنت', en: 'Utilities expense' }, credit: 900 },
                    { account: { fa: 'هزینه استهلاک', en: 'Depreciation expense' }, credit: 600 },
                  ],
                  memo: { fa: 'ثبت 2: بستن هزینه‌ها', en: 'Entry 2: close expenses' },
                },
                {
                  date: { fa: 'پایان ماه', en: 'Month-end' },
                  lines: [
                    { account: { fa: 'سرمایه لیلا', en: 'Capital (Leila)' }, debit: 1800 },
                    { account: { fa: 'خلاصه سود و زیان', en: 'Income summary' }, credit: 1800 },
                  ],
                  memo: { fa: 'ثبت 3: انتقال زیان خالص به سرمایه', en: 'Entry 3: transfer the net loss to capital' },
                },
                {
                  date: { fa: 'پایان ماه', en: 'Month-end' },
                  lines: [
                    { account: { fa: 'سرمایه لیلا', en: 'Capital (Leila)' }, debit: 1000 },
                    { account: { fa: 'برداشت لیلا', en: 'Drawings (Leila)' }, credit: 1000 },
                  ],
                  memo: { fa: 'ثبت 4: بستن برداشت', en: 'Entry 4: close drawings' },
                },
              ],
            },
            {
              type: 'tAccounts',
              title: { fa: 'خلاصه سود و زیان صفر و سرمایه لیلا 22,200 بستانکار', en: 'Income Summary at zero; Capital (Leila) at a 22,200 credit' },
              accounts: [
                { name: { fa: 'خلاصه سود و زیان', en: 'Income summary' }, debits: [9300], credits: [7500, 1800] },
                { name: { fa: 'سرمایه لیلا', en: 'Capital (Leila)' }, debits: [1800, 1000], credits: [25000] },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'برداشت در ماه زیان‌ده هم سرمایه را کم می‌کند. زیان و برداشت دو کاهش جداگانه‌اند: 25,000 − 1,800 − 1,000 = 22,200.',
                en: 'Drawings reduce capital even in a loss-making month. The loss and the drawings are two separate reductions: 25,000 − 1,800 − 1,000 = 22,200.',
              },
            },
          ],
          answer: {
            fa: 'زیان خالص 1,800؛ سرمایه پایان ماه لیلا 22,200.',
            en: 'Net loss 1,800; Leila’s ending capital 22,200.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'ترازی که برابر است اما درست نیست', en: 'A trial balance that balances but is wrong' },
          difficulty: 'medium',
          problem: {
            fa: 'کارآموز «آتلیه عکاسی لحظه» پس از بستن حساب‌ها تراز زیر را تهیه کرده و چون دو ستون برابرند، کار را تمام‌شده می‌داند. مانده سرمایه کاوه در این تراز پس از انتقال سود خالص است. (الف) دو اشتباه را پیدا کنید. (ب) ثبت‌های لازم برای تصحیح را بنویسید. (ج) سرمایه درست و تراز آزمایشی پس از بستن درست را ارائه دهید.',
            en: 'The trainee at Lahze Photo Studio prepared the trial balance below after closing and, because the two columns agree, considers the job done. Kaveh’s capital in it is after the transfer of net income. (a) Find the two mistakes. (b) Write the entries needed to correct them. (c) Present the correct capital and the correct post-closing trial balance.',
          },
          given: {
            head: [
              { fa: 'حساب', en: 'Account' },
              { fa: 'بدهکار', en: 'Debit' },
              { fa: 'بستانکار', en: 'Credit' },
            ],
            rows: [
              [{ fa: 'موجودی نقد', en: 'Cash' }, 15000, blank],
              [{ fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, 3000, blank],
              [{ fa: 'تجهیزات', en: 'Equipment' }, 20000, blank],
              [{ fa: 'استهلاک انباشته تجهیزات', en: 'Accumulated depreciation' }, blank, 4000],
              [{ fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, blank, 2500],
              [{ fa: 'سرمایه کاوه', en: 'Capital (Kaveh)' }, blank, 33800],
              [{ fa: 'برداشت کاوه', en: 'Drawings (Kaveh)' }, 1500, blank],
              [{ fa: 'هزینه استهلاک', en: 'Depreciation expense' }, 800, blank],
              [{ fa: '**جمع**', en: '**Total**' }, 40300, 40300],
            ],
            numericCols: [1, 2],
          },
          hint: {
            fa: 'دنبال حساب‌هایی بگردید که اصلاً نباید در تراز پس از بستن باشند. هر کدام چه اثری بر سرمایه گذاشته است؟',
            en: 'Look for accounts that should never appear in a post-closing trial balance. How has each one affected capital?',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'اشتباه اول: هزینه استهلاک بسته نشده', en: 'Mistake 1: depreciation expense was not closed' },
                  text: {
                    fa: 'هزینه 800 به خلاصه سود و زیان نرفته؛ پس سودی که به سرمایه منتقل شده 800 بیشتر از واقع بوده است.',
                    en: 'The 800 expense never reached Income Summary, so the net income transferred to capital was 800 too high.',
                  },
                },
                {
                  title: { fa: 'اشتباه دوم: برداشت بسته نشده', en: 'Mistake 2: drawings were not closed' },
                  text: {
                    fa: 'برداشت 1,500 هنوز مانده دارد؛ پس سرمایه به همین اندازه بیشتر از واقع نشان داده شده است.',
                    en: 'The 1,500 of drawings still has a balance, so capital is overstated by the same amount.',
                  },
                },
                {
                  title: { fa: 'چرا تراز برابر بود؟', en: 'Why did it still balance?' },
                  text: {
                    fa: 'هر اشتباه یک رقم بدهکار و یک رقم بستانکار را به یک اندازه بالا برده است. برابری ستون‌ها فقط می‌گوید بدهکار و بستانکار برابرند، نه اینکه بستن درست انجام شده است.',
                    en: 'Each mistake inflated one debit and one credit by the same amount. Equal columns only prove that debits equal credits, not that closing was done correctly.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              title: { fa: 'ثبت‌های تصحیحی', en: 'Correcting entries' },
              entries: [
                {
                  date: { fa: 'پایان ماه', en: 'Month-end' },
                  lines: [
                    { account: { fa: 'خلاصه سود و زیان', en: 'Income summary' }, debit: 800 },
                    { account: { fa: 'هزینه استهلاک', en: 'Depreciation expense' }, credit: 800 },
                  ],
                  memo: { fa: 'بستن هزینه جاافتاده', en: 'Close the missed expense' },
                },
                {
                  date: { fa: 'پایان ماه', en: 'Month-end' },
                  lines: [
                    { account: { fa: 'سرمایه کاوه', en: 'Capital (Kaveh)' }, debit: 800 },
                    { account: { fa: 'خلاصه سود و زیان', en: 'Income summary' }, credit: 800 },
                  ],
                  memo: { fa: 'کاهش سود منتقل‌شده به سرمایه', en: 'Reduce the profit transferred to capital' },
                },
                {
                  date: { fa: 'پایان ماه', en: 'Month-end' },
                  lines: [
                    { account: { fa: 'سرمایه کاوه', en: 'Capital (Kaveh)' }, debit: 1500 },
                    { account: { fa: 'برداشت کاوه', en: 'Drawings (Kaveh)' }, credit: 1500 },
                  ],
                  memo: { fa: 'بستن برداشت', en: 'Close drawings' },
                },
              ],
            },
            {
              type: 'formula',
              text: {
                fa: 'سرمایه درست = 33,800 − 800 − 1,500 = 31,500',
                en: 'Correct capital = 33,800 − 800 − 1,500 = 31,500',
              },
            },
            {
              type: 'table',
              caption: { fa: 'تراز آزمایشی پس از بستن، پس از تصحیح', en: 'Corrected post-closing trial balance' },
              head: [
                { fa: 'حساب', en: 'Account' },
                { fa: 'بدهکار', en: 'Debit' },
                { fa: 'بستانکار', en: 'Credit' },
              ],
              rows: [
                [{ fa: 'موجودی نقد', en: 'Cash' }, 15000, blank],
                [{ fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, 3000, blank],
                [{ fa: 'تجهیزات', en: 'Equipment' }, 20000, blank],
                [{ fa: 'استهلاک انباشته تجهیزات', en: 'Accumulated depreciation' }, blank, 4000],
                [{ fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, blank, 2500],
                [{ fa: 'سرمایه کاوه', en: 'Capital (Kaveh)' }, blank, 31500],
                [{ fa: '**جمع**', en: '**Total**' }, 38000, 38000],
              ],
              numericCols: [1, 2],
            },
          ],
          answer: {
            fa: 'هزینه استهلاک 800 و برداشت 1,500 بسته نشده بودند؛ سرمایه درست 31,500 و جمع هر ستون تراز درست 38,000 است.',
            en: 'The 800 depreciation expense and the 1,500 drawings were never closed; correct capital is 31,500 and each column of the corrected trial balance totals 38,000.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'دستمزد تعهدی در شرکت نظافتی پاکان، با و بدون ثبت معکوس', en: 'Accrued wages at Pakan Cleaning, with and without reversal' },
          difficulty: 'medium',
          problem: {
            fa: 'کارکنان «شرکت خدمات نظافتی پاکان» روزی 400 دستمزد می‌گیرند و دستمزدشان هر پنج روز کاری یک بار پرداخت می‌شود. در پایان ماه، 3 روز کار انجام شده که دستمزد آن هنوز پرداخت نشده است. روز 5 ماه بعد، دستمزد 5 روز کاری (3 روز ماه قبل و 2 روز ماه جدید) یعنی 2,000 پرداخت می‌شود. (الف) ثبت تعدیلی پایان ماه را بنویسید. (ب) ثبت‌های ماه بعد را یک بار با ثبت معکوس و یک بار بدون آن بنویسید. (ج) نشان دهید نتیجه دو روش یکسان است. (د) آیا ثبت تعدیلی استهلاک 500 همین ماه را هم باید معکوس کرد؟',
            en: 'Staff at Pakan Cleaning Services earn 400 a day and are paid every five working days. At month-end, 3 days have been worked but not yet paid. On Day 5 of the next month, wages for 5 working days (3 from last month and 2 from the new month), 2,000 in total, are paid. (a) Write the month-end adjusting entry. (b) Write the next month’s entries once with a reversing entry and once without. (c) Show that both methods give the same result. (d) Should this month’s 500 depreciation adjustment be reversed as well?',
          },
          hint: {
            fa: 'دستمزد تعهدی = 3 × 400. در روش بدون ثبت معکوس، پرداخت روز 5 را بین حساب بدهی و حساب هزینه تقسیم کنید.',
            en: 'Accrued wages = 3 × 400. Without a reversing entry, split the Day 5 payment between the liability and the expense.',
          },
          solution: [
            {
              type: 'journal',
              title: { fa: '(الف) ثبت تعدیلی پایان ماه', en: '(a) Month-end adjusting entry' },
              entries: [
                {
                  date: { fa: 'روز 30', en: 'Day 30' },
                  lines: [
                    { account: { fa: 'هزینه دستمزد', en: 'Wages expense' }, debit: 1200 },
                    { account: { fa: 'دستمزد پرداختنی', en: 'Wages payable' }, credit: 1200 },
                  ],
                  memo: { fa: '3 روز × 400', en: '3 days × 400' },
                },
              ],
            },
            {
              type: 'journal',
              title: { fa: '(ب) روش اول: با ثبت معکوس', en: '(b) Method 1: with a reversing entry' },
              entries: [
                {
                  date: { fa: 'روز 1 ماه بعد', en: 'Day 1, next month' },
                  lines: [
                    { account: { fa: 'دستمزد پرداختنی', en: 'Wages payable' }, debit: 1200 },
                    { account: { fa: 'هزینه دستمزد', en: 'Wages expense' }, credit: 1200 },
                  ],
                  memo: { fa: 'ثبت معکوس', en: 'Reversing entry' },
                },
                {
                  date: { fa: 'روز 5 ماه بعد', en: 'Day 5, next month' },
                  lines: [
                    { account: { fa: 'هزینه دستمزد', en: 'Wages expense' }, debit: 2000 },
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 2000 },
                  ],
                  memo: { fa: 'ثبت عادی پرداخت', en: 'Routine payment' },
                },
              ],
            },
            {
              type: 'journal',
              title: { fa: '(ب) روش دوم: بدون ثبت معکوس', en: '(b) Method 2: without a reversing entry' },
              entries: [
                {
                  date: { fa: 'روز 5 ماه بعد', en: 'Day 5, next month' },
                  lines: [
                    { account: { fa: 'دستمزد پرداختنی', en: 'Wages payable' }, debit: 1200 },
                    { account: { fa: 'هزینه دستمزد', en: 'Wages expense' }, debit: 800 },
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 2000 },
                  ],
                  memo: { fa: 'تسویه بدهی ماه قبل و ثبت هزینه 2 روز ماه جدید', en: 'Settle last month’s liability and record 2 days of new-month expense' },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: '(ج) مقایسه نتیجه دو روش پس از روز 5', en: '(c) Results of both methods after Day 5' },
              head: [
                { fa: 'قلم', en: 'Item' },
                { fa: 'با ثبت معکوس', en: 'With reversal' },
                { fa: 'بدون ثبت معکوس', en: 'Without reversal' },
              ],
              rows: [
                [{ fa: 'هزینه دستمزد ماه جدید', en: 'Wages expense, new month' }, 800, 800],
                [{ fa: 'دستمزد پرداختنی', en: 'Wages payable' }, 0, 0],
                [{ fa: 'وجه نقد پرداخت‌شده', en: 'Cash paid' }, 2000, 2000],
              ],
              numericCols: [1, 2],
            },
            {
              type: 'callout',
              tone: 'info',
              title: { fa: '(د) استهلاک معکوس نمی‌شود', en: '(d) Depreciation is not reversed' },
              text: {
                fa: 'خیر. استهلاک هیچ پرداخت نقدی بعدی ندارد که بخواهد ساده شود. اگر آن را معکوس کنید، ماه بعد 500 بستانکار در هزینه استهلاک می‌نشیند و هزینه آن ماه کمتر از واقع نشان داده می‌شود.',
                en: 'No. Depreciation has no later cash payment to simplify. Reversing it would leave a 500 credit in Depreciation expense next month and understate that month’s expense.',
              },
            },
          ],
          answer: {
            fa: 'در هر دو روش هزینه دستمزد ماه جدید 800 و دستمزد پرداختنی پس از روز 5 صفر است؛ استهلاک معکوس نمی‌شود.',
            en: 'Either way, the new month’s wages expense is 800 and wages payable is zero after Day 5; depreciation is not reversed.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'یک ماه کامل در آموزشگاه زبان پویا', en: 'A full month at Pouya Language School' },
          difficulty: 'hard',
          problem: {
            fa: 'نیما «آموزشگاه زبان پویا» را روز 1 ماه راه‌اندازی می‌کند. رویدادهای ماه و اطلاعات تعدیل‌های پایان ماه در جدول زیر آمده‌اند. این ماه را در کل چرخه حسابداری پیش ببرید: (1) معاملات را ثبت کنید؛ (2) تراز آزمایشی تعدیل‌نشده را تهیه کنید؛ (3) ثبت‌های اصلاحی را بنویسید؛ (4) تراز آزمایشی تعدیل‌شده را تهیه کنید؛ (5) صورت سود و زیان، صورت تغییرات در حقوق مالکانه و ترازنامه را تهیه کنید؛ (6) ثبت‌های بستن را بنویسید؛ (7) تراز آزمایشی پس از بستن حساب‌ها را تهیه کنید.',
            en: 'Nima opens Pouya Language School on Day 1. The month’s events and the month-end adjustment data are listed below. Take the month through the entire accounting cycle: (1) journalize the transactions; (2) prepare the unadjusted trial balance; (3) record the adjusting entries; (4) prepare the adjusted trial balance; (5) prepare the income statement, the statement of changes in equity and the balance sheet; (6) record the closing entries; (7) prepare the post-closing trial balance.',
          },
          given: {
            head: [
              { fa: 'روز', en: 'Day' },
              { fa: 'رویداد', en: 'Event' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            rows: [
              [1, { fa: 'نیما وجه نقد در آموزشگاه سرمایه‌گذاری می‌کند', en: 'Nima invests cash in the school' }, 40000],
              [2, { fa: 'خرید نقدی تجهیزات (رایانه، میز و صندلی)', en: 'Buys equipment (computers, desks, chairs) for cash' }, 12000],
              [3, { fa: 'پرداخت پیشاپیش اجاره سه ماه کلاس‌ها', en: 'Pays three months’ classroom rent in advance' }, 3000],
              [6, { fa: 'تبلیغات نسیه در شبکه‌های اجتماعی', en: 'Social-media advertising on account' }, 900],
              [8, { fa: 'دریافت شهریه پیش از برگزاری یک دوره سه‌ماهه', en: 'Receives tuition in advance for a three-month course' }, 6000],
              [15, { fa: 'دریافت نقدی شهریه کلاس‌های برگزارشده این ماه', en: 'Collects cash tuition for classes held this month' }, 9000],
              [20, { fa: 'پرداخت حقوق مدرسان', en: 'Pays teachers’ salaries' }, 4000],
              [25, { fa: 'پرداخت بخشی از بدهی تبلیغات', en: 'Pays part of the advertising bill' }, 500],
              [28, { fa: 'برداشت نیما برای مصارف شخصی', en: 'Nima withdraws cash for personal use' }, 1200],
              [30, { fa: 'تعدیل: یک ماه از اجاره پیش‌پرداخت منقضی شده است', en: 'Adjustment: one month of prepaid rent has expired' }, 1000],
              [30, { fa: 'تعدیل: استهلاک ماهانه تجهیزات', en: 'Adjustment: monthly depreciation of equipment' }, 200],
              [30, { fa: 'تعدیل: یک‌سوم شهریه پیش‌دریافت کسب شده است', en: 'Adjustment: one third of the advance tuition has been earned' }, 2000],
              [30, { fa: 'تعدیل: حقوق تحقق‌یافته مدرسان که هنوز پرداخت نشده است', en: 'Adjustment: teachers’ salaries earned but not yet paid' }, 700],
            ],
            numericCols: [0, 2],
          },
          hint: {
            fa: 'شهریه پیش‌دریافت بدهی است، نه درآمد؛ اجاره پیش‌پرداخت دارایی است، نه هزینه. برای کنترل، جمع هر ستون تراز تعدیل‌نشده باید 55,400 شود.',
            en: 'Tuition received in advance is a liability, not revenue; prepaid rent is an asset, not an expense. As a check, each column of the unadjusted trial balance should total 55,400.',
          },
          solution: [
            {
              type: 'journal',
              title: { fa: 'گام 1: ثبت معاملات ماه', en: 'Step 1: journalize the month’s transactions' },
              entries: [
                {
                  date: { fa: 'روز 1', en: 'Day 1' },
                  lines: [
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, debit: 40000 },
                    { account: { fa: 'سرمایه نیما', en: 'Capital (Nima)' }, credit: 40000 },
                  ],
                },
                {
                  date: { fa: 'روز 2', en: 'Day 2' },
                  lines: [
                    { account: { fa: 'تجهیزات', en: 'Equipment' }, debit: 12000 },
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 12000 },
                  ],
                },
                {
                  date: { fa: 'روز 3', en: 'Day 3' },
                  lines: [
                    { account: { fa: 'پیش‌پرداخت اجاره', en: 'Prepaid rent' }, debit: 3000 },
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 3000 },
                  ],
                },
                {
                  date: { fa: 'روز 6', en: 'Day 6' },
                  lines: [
                    { account: { fa: 'هزینه تبلیغات', en: 'Advertising expense' }, debit: 900 },
                    { account: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, credit: 900 },
                  ],
                },
                {
                  date: { fa: 'روز 8', en: 'Day 8' },
                  lines: [
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, debit: 6000 },
                    { account: { fa: 'پیش‌دریافت شهریه', en: 'Unearned tuition' }, credit: 6000 },
                  ],
                  memo: { fa: 'هنوز درآمد نیست؛ تعهد به برگزاری کلاس است', en: 'Not revenue yet: an obligation to teach the course' },
                },
                {
                  date: { fa: 'روز 15', en: 'Day 15' },
                  lines: [
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, debit: 9000 },
                    { account: { fa: 'درآمد شهریه', en: 'Tuition revenue' }, credit: 9000 },
                  ],
                },
                {
                  date: { fa: 'روز 20', en: 'Day 20' },
                  lines: [
                    { account: { fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' }, debit: 4000 },
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 4000 },
                  ],
                },
                {
                  date: { fa: 'روز 25', en: 'Day 25' },
                  lines: [
                    { account: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, debit: 500 },
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 500 },
                  ],
                },
                {
                  date: { fa: 'روز 28', en: 'Day 28' },
                  lines: [
                    { account: { fa: 'برداشت نیما', en: 'Drawings (Nima)' }, debit: 1200 },
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 1200 },
                  ],
                },
              ],
            },
            {
              type: 'formula',
              text: {
                fa: 'مانده موجودی نقد = 40,000 + 6,000 + 9,000 − 12,000 − 3,000 − 4,000 − 500 − 1,200 = 34,300',
                en: 'Cash balance = 40,000 + 6,000 + 9,000 − 12,000 − 3,000 − 4,000 − 500 − 1,200 = 34,300',
              },
            },
            {
              type: 'journal',
              title: { fa: 'گام 3: ثبت‌های اصلاحی روز 30', en: 'Step 3: adjusting entries on Day 30' },
              entries: [
                {
                  date: { fa: 'روز 30', en: 'Day 30' },
                  lines: [
                    { account: { fa: 'هزینه اجاره', en: 'Rent expense' }, debit: 1000 },
                    { account: { fa: 'پیش‌پرداخت اجاره', en: 'Prepaid rent' }, credit: 1000 },
                  ],
                  memo: { fa: 'یک ماه از سه ماه', en: 'One month of three' },
                },
                {
                  date: { fa: 'روز 30', en: 'Day 30' },
                  lines: [
                    { account: { fa: 'هزینه استهلاک', en: 'Depreciation expense' }, debit: 200 },
                    { account: { fa: 'استهلاک انباشته تجهیزات', en: 'Accumulated depreciation' }, credit: 200 },
                  ],
                },
                {
                  date: { fa: 'روز 30', en: 'Day 30' },
                  lines: [
                    { account: { fa: 'پیش‌دریافت شهریه', en: 'Unearned tuition' }, debit: 2000 },
                    { account: { fa: 'درآمد شهریه', en: 'Tuition revenue' }, credit: 2000 },
                  ],
                  memo: { fa: 'یک‌سوم 6,000 کسب شده است', en: 'One third of 6,000 has been earned' },
                },
                {
                  date: { fa: 'روز 30', en: 'Day 30' },
                  lines: [
                    { account: { fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' }, debit: 700 },
                    { account: { fa: 'حقوق پرداختنی', en: 'Salaries payable' }, credit: 700 },
                  ],
                },
              ],
            },
            {
              type: 'table',
              caption: {
                fa: 'گام‌های 2 و 4: کاربرگ ساده؛ تراز تعدیل‌نشده و تراز تعدیل‌شده کنار هم',
                en: 'Steps 2 and 4: a simple worksheet with the unadjusted and adjusted trial balances side by side',
              },
              head: [
                { fa: 'حساب', en: 'Account' },
                { fa: 'تعدیل‌نشده: بدهکار', en: 'Unadjusted Dr' },
                { fa: 'تعدیل‌نشده: بستانکار', en: 'Unadjusted Cr' },
                { fa: 'تعدیل‌شده: بدهکار', en: 'Adjusted Dr' },
                { fa: 'تعدیل‌شده: بستانکار', en: 'Adjusted Cr' },
              ],
              rows: [
                [{ fa: 'موجودی نقد', en: 'Cash' }, 34300, blank, 34300, blank],
                [{ fa: 'پیش‌پرداخت اجاره', en: 'Prepaid rent' }, 3000, blank, 2000, blank],
                [{ fa: 'تجهیزات', en: 'Equipment' }, 12000, blank, 12000, blank],
                [{ fa: 'استهلاک انباشته تجهیزات', en: 'Accumulated depreciation' }, blank, blank, blank, 200],
                [{ fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, blank, 400, blank, 400],
                [{ fa: 'حقوق پرداختنی', en: 'Salaries payable' }, blank, blank, blank, 700],
                [{ fa: 'پیش‌دریافت شهریه', en: 'Unearned tuition' }, blank, 6000, blank, 4000],
                [{ fa: 'سرمایه نیما', en: 'Capital (Nima)' }, blank, 40000, blank, 40000],
                [{ fa: 'برداشت نیما', en: 'Drawings (Nima)' }, 1200, blank, 1200, blank],
                [{ fa: 'درآمد شهریه', en: 'Tuition revenue' }, blank, 9000, blank, 11000],
                [{ fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' }, 4000, blank, 4700, blank],
                [{ fa: 'هزینه تبلیغات', en: 'Advertising expense' }, 900, blank, 900, blank],
                [{ fa: 'هزینه اجاره', en: 'Rent expense' }, blank, blank, 1000, blank],
                [{ fa: 'هزینه استهلاک', en: 'Depreciation expense' }, blank, blank, 200, blank],
                [{ fa: '**جمع**', en: '**Total**' }, 55400, 55400, 56300, 56300],
              ],
              numericCols: [1, 2, 3, 4],
            },
            {
              type: 'table',
              caption: { fa: 'گام 5 (الف): صورت سود و زیان ماه', en: 'Step 5 (a): income statement for the month' },
              head: [
                { fa: 'شرح', en: 'Item' },
                { fa: 'مبلغ', en: 'Amount' },
                { fa: 'جمع', en: 'Total' },
              ],
              rows: [
                [{ fa: 'درآمد شهریه (9,000 + 2,000)', en: 'Tuition revenue (9,000 + 2,000)' }, blank, 11000],
                [{ fa: 'هزینه حقوق و دستمزد (4,000 + 700)', en: 'Salaries expense (4,000 + 700)' }, 4700, blank],
                [{ fa: 'هزینه اجاره', en: 'Rent expense' }, 1000, blank],
                [{ fa: 'هزینه تبلیغات', en: 'Advertising expense' }, 900, blank],
                [{ fa: 'هزینه استهلاک', en: 'Depreciation expense' }, 200, blank],
                [{ fa: 'جمع هزینه‌ها', en: 'Total expenses' }, blank, 6800],
                [{ fa: '**سود خالص**', en: '**Net income**' }, blank, 4200],
              ],
              numericCols: [1, 2],
            },
            {
              type: 'table',
              caption: { fa: 'گام 5 (ب): صورت تغییرات در حقوق مالکانه', en: 'Step 5 (b): statement of changes in equity' },
              head: [
                { fa: 'شرح', en: 'Item' },
                { fa: 'مبلغ', en: 'Amount' },
              ],
              rows: [
                [{ fa: 'سرمایه نیما، ابتدای ماه', en: 'Capital (Nima), beginning of month' }, 0],
                [{ fa: 'آورده نیما', en: 'Owner investment' }, 40000],
                [{ fa: 'سود خالص ماه', en: 'Net income for the month' }, 4200],
                [{ fa: 'برداشت نیما', en: 'Drawings' }, -1200],
                [{ fa: '**سرمایه نیما، پایان ماه**', en: '**Capital (Nima), end of month**' }, 43000],
              ],
              numericCols: [1],
            },
            {
              type: 'table',
              caption: { fa: 'گام 5 (ج): ترازنامه پایان ماه', en: 'Step 5 (c): balance sheet at month-end' },
              head: [
                { fa: 'شرح', en: 'Item' },
                { fa: 'مبلغ', en: 'Amount' },
                { fa: 'جمع', en: 'Total' },
              ],
              rows: [
                [{ fa: 'موجودی نقد', en: 'Cash' }, 34300, blank],
                [{ fa: 'پیش‌پرداخت اجاره', en: 'Prepaid rent' }, 2000, blank],
                [{ fa: 'جمع دارایی‌های جاری', en: 'Total current assets' }, blank, 36300],
                [{ fa: 'تجهیزات (بهای تمام‌شده)', en: 'Equipment, at cost' }, 12000, blank],
                [{ fa: 'کسر می‌شود: استهلاک انباشته', en: 'Less: accumulated depreciation' }, -200, blank],
                [{ fa: 'تجهیزات، خالص', en: 'Equipment, net' }, blank, 11800],
                [{ fa: '**جمع دارایی‌ها**', en: '**Total assets**' }, blank, 48100],
                [{ fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, 400, blank],
                [{ fa: 'حقوق پرداختنی', en: 'Salaries payable' }, 700, blank],
                [{ fa: 'پیش‌دریافت شهریه', en: 'Unearned tuition' }, 4000, blank],
                [{ fa: '**جمع بدهی‌ها**', en: '**Total liabilities**' }, blank, 5100],
                [{ fa: 'سرمایه نیما', en: 'Capital (Nima)' }, blank, 43000],
                [{ fa: '**جمع بدهی‌ها و حقوق مالکانه**', en: '**Total liabilities and equity**' }, blank, 48100],
              ],
              numericCols: [1, 2],
            },
            {
              type: 'journal',
              title: { fa: 'گام 6: ثبت‌های بستن', en: 'Step 6: closing entries' },
              entries: [
                {
                  date: { fa: 'روز 30', en: 'Day 30' },
                  lines: [
                    { account: { fa: 'درآمد شهریه', en: 'Tuition revenue' }, debit: 11000 },
                    { account: { fa: 'خلاصه سود و زیان', en: 'Income summary' }, credit: 11000 },
                  ],
                  memo: { fa: 'ثبت 1', en: 'Entry 1' },
                },
                {
                  date: { fa: 'روز 30', en: 'Day 30' },
                  lines: [
                    { account: { fa: 'خلاصه سود و زیان', en: 'Income summary' }, debit: 6800 },
                    { account: { fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' }, credit: 4700 },
                    { account: { fa: 'هزینه اجاره', en: 'Rent expense' }, credit: 1000 },
                    { account: { fa: 'هزینه تبلیغات', en: 'Advertising expense' }, credit: 900 },
                    { account: { fa: 'هزینه استهلاک', en: 'Depreciation expense' }, credit: 200 },
                  ],
                  memo: { fa: 'ثبت 2', en: 'Entry 2' },
                },
                {
                  date: { fa: 'روز 30', en: 'Day 30' },
                  lines: [
                    { account: { fa: 'خلاصه سود و زیان', en: 'Income summary' }, debit: 4200 },
                    { account: { fa: 'سرمایه نیما', en: 'Capital (Nima)' }, credit: 4200 },
                  ],
                  memo: { fa: 'ثبت 3', en: 'Entry 3' },
                },
                {
                  date: { fa: 'روز 30', en: 'Day 30' },
                  lines: [
                    { account: { fa: 'سرمایه نیما', en: 'Capital (Nima)' }, debit: 1200 },
                    { account: { fa: 'برداشت نیما', en: 'Drawings (Nima)' }, credit: 1200 },
                  ],
                  memo: { fa: 'ثبت 4', en: 'Entry 4' },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'گام 7: تراز آزمایشی پس از بستن حساب‌ها', en: 'Step 7: post-closing trial balance' },
              head: [
                { fa: 'حساب', en: 'Account' },
                { fa: 'بدهکار', en: 'Debit' },
                { fa: 'بستانکار', en: 'Credit' },
              ],
              rows: [
                [{ fa: 'موجودی نقد', en: 'Cash' }, 34300, blank],
                [{ fa: 'پیش‌پرداخت اجاره', en: 'Prepaid rent' }, 2000, blank],
                [{ fa: 'تجهیزات', en: 'Equipment' }, 12000, blank],
                [{ fa: 'استهلاک انباشته تجهیزات', en: 'Accumulated depreciation' }, blank, 200],
                [{ fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, blank, 400],
                [{ fa: 'حقوق پرداختنی', en: 'Salaries payable' }, blank, 700],
                [{ fa: 'پیش‌دریافت شهریه', en: 'Unearned tuition' }, blank, 4000],
                [{ fa: 'سرمایه نیما', en: 'Capital (Nima)' }, blank, 43000],
                [{ fa: '**جمع**', en: '**Total**' }, 48300, 48300],
              ],
              numericCols: [1, 2],
            },
            {
              type: 'callout',
              tone: 'tip',
              title: { fa: 'سه کنترل پایانی', en: 'Three final checks' },
              text: {
                fa: '(1) مانده خلاصه سود و زیان پس از ثبت‌های 1 و 2 برابر 4,200 بستانکار است؛ همان سود خالص صورت سود و زیان. (2) مانده سرمایه نیما پس از بستن 43,000 است؛ همان رقم ترازنامه. (3) جمع تراز پس از بستن (48,300) برابر جمع دارایی‌ها (48,100) به‌اضافه استهلاک انباشته (200) است. اگر نیما بخواهد از ثبت معکوس استفاده کند، روز 1 ماه بعد حقوق پرداختنی 700 را بدهکار و هزینه حقوق را بستانکار می‌کند.',
                en: '(1) Income Summary shows a 4,200 credit after entries 1 and 2, the same as net income on the income statement. (2) Capital (Nima) is 43,000 after closing, the same as the balance sheet. (3) The post-closing total (48,300) equals total assets (48,100) plus accumulated depreciation (200). If Nima uses reversing entries, on Day 1 of next month he debits Salaries payable 700 and credits Salaries expense.',
              },
            },
          ],
          answer: {
            fa: 'سود خالص 4,200؛ سرمایه پایان ماه 43,000؛ جمع دارایی‌ها 48,100؛ جمع هر ستون تراز پس از بستن 48,300.',
            en: 'Net income 4,200; ending capital 43,000; total assets 48,100; post-closing trial balance totals 48,300 on each side.',
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
              fa: 'حساب‌های موقت (درآمد، هزینه، برداشت و خلاصه سود و زیان) در پایان هر دوره بسته می‌شوند؛ حساب‌های دائمی (دارایی، بدهی و سرمایه) به دوره بعد منتقل می‌شوند.',
              en: 'Temporary accounts (revenue, expense, drawings and Income Summary) are closed at the end of every period; permanent accounts (assets, liabilities and capital) carry forward.',
            },
            {
              fa: 'چهار ثبت بستن: درآمدها به خلاصه سود و زیان، هزینه‌ها به خلاصه سود و زیان، مانده خلاصه سود و زیان به سرمایه، و برداشت مستقیماً به سرمایه.',
              en: 'The four closing entries: revenues to Income Summary, expenses to Income Summary, the Income Summary balance to capital, and drawings straight to capital.',
            },
            {
              fa: 'مانده خلاصه سود و زیان پیش از ثبت سوم همیشه برابر سود یا زیان خالص است؛ برای نوا 4,850 بستانکار. زیان خالص با بدهکار کردن سرمایه بسته می‌شود.',
              en: 'Before entry 3, Income Summary always equals net income or net loss; for Nova, a 4,850 credit. A net loss is closed by debiting capital.',
            },
            {
              fa: 'پس از بستن، سرمایه در دفتر کل با ترازنامه برابر می‌شود (53,850) و تراز پس از بستن فقط حساب‌های دائمی را دارد (جمع هر ستون 71,400).',
              en: 'After closing, Capital in the ledger agrees with the balance sheet (53,850), and the post-closing trial balance holds only permanent accounts (71,400 on each side).',
            },
            {
              fa: 'در ایران پایان سال مالی با سند بستن حساب‌های موقت و سند اختتامیه همراه است و سال جدید با سند افتتاحیه آغاز می‌شود.',
              en: 'In Iran the fiscal year ends with the voucher closing the temporary accounts and the closing voucher, and the new year begins with the opening voucher.',
            },
            {
              fa: 'چرخه حسابداری ده مرحله دارد؛ مراحل 1 تا 3 در طول دوره تکرار می‌شوند و بقیه در پایان دوره یا آغاز دوره بعد انجام می‌شوند.',
              en: 'The accounting cycle has ten steps; steps 1 to 3 repeat during the period and the rest happen at period-end or the start of the next period.',
            },
            {
              fa: 'ثبت معکوس اختیاری است و فقط برای تعدیل‌های تعهدی به کار می‌رود؛ استهلاک و مصرف پیش‌پرداخت‌ها هرگز معکوس نمی‌شوند.',
              en: 'Reversing entries are optional and used only for accrual adjustments; depreciation and the using-up of prepayments are never reversed.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'حساب‌های موقت', en: 'Temporary accounts' },
              def: {
                fa: 'درآمدها، هزینه‌ها، برداشت و خلاصه سود و زیان؛ حساب‌هایی که در پایان هر دوره بسته می‌شوند.',
                en: 'Revenues, expenses, drawings and Income Summary: accounts closed at the end of every period.',
              },
            },
            {
              term: { fa: 'حساب‌های دائمی', en: 'Permanent accounts' },
              def: {
                fa: 'دارایی‌ها، بدهی‌ها و سرمایه؛ حساب‌هایی که مانده‌شان به دوره بعد منتقل می‌شود.',
                en: 'Assets, liabilities and capital: accounts whose balances carry forward to the next period.',
              },
            },
            {
              term: { fa: 'ثبت‌های بستن حساب‌ها', en: 'Closing entries' },
              def: {
                fa: 'ثبت‌هایی در پایان دوره که حساب‌های موقت را صفر و سود یا زیان خالص و برداشت را به سرمایه منتقل می‌کنند.',
                en: 'Period-end entries that zero the temporary accounts and transfer net income or loss and drawings to capital.',
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
                fa: 'فهرست مانده حساب‌های دائمی پس از بستن حساب‌ها، برای کنترل برابری بدهکار و بستانکار پیش از دوره جدید.',
                en: 'A list of permanent-account balances after closing, used to confirm that debits equal credits before the new period.',
              },
            },
            {
              term: { fa: 'سند اختتامیه', en: 'Closing voucher' },
              def: {
                fa: 'آخرین سند سال مالی که همه حساب‌های دائمی را می‌بندد؛ ارقام آن همان مانده‌های تراز پس از بستن است.',
                en: 'The last voucher of the fiscal year, closing every permanent account; its figures are the post-closing balances.',
              },
            },
            {
              term: { fa: 'سند افتتاحیه', en: 'Opening voucher' },
              def: {
                fa: 'نخستین سند سال مالی جدید که دقیقاً عکس سند اختتامیه است و مانده‌های دائمی را دوباره باز می‌کند.',
                en: 'The first voucher of the new fiscal year, the exact mirror of the closing voucher, reopening the permanent balances.',
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
              term: { fa: 'کاربرگ', en: 'Worksheet' },
              def: {
                fa: 'جدول کمکی غیررسمی که ترازها، تعدیل‌ها و پیش‌نویس صورت‌های مالی را کنار هم نشان می‌دهد.',
                en: 'An informal working table showing the trial balances, adjustments and draft statements side by side.',
              },
            },
            {
              term: { fa: 'ثبت‌های معکوس', en: 'Reversing entries' },
              def: {
                fa: 'ثبت‌های اختیاری در آغاز دوره جدید که تعدیل‌های تعهدی دوره قبل را برعکس می‌کنند تا ثبت‌های بعدی ساده‌تر شوند.',
                en: 'Optional entries at the start of a new period that undo the prior period’s accrual adjustments to simplify later entries.',
              },
            },
            {
              term: { fa: 'سود انباشته', en: 'Retained earnings' },
              def: {
                fa: 'در شرکت‌های سهامی، جمع سودهای خالص گذشته پس از کسر سود سهام؛ حسابی که در بستن حساب‌ها نقش سرمایه مؤسسه انفرادی را دارد.',
                en: 'In a company, accumulated past net income less dividends: the account that plays Capital’s role in closing.',
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
        fa: 'استهلاک انباشته یک حساب کاهنده دارایی و بنابراین دائمی است و مانده آن به دوره بعد منتقل می‌شود. هزینه استهلاک بسته می‌شود، نه استهلاک انباشته. برداشت شاید چون در گروه حقوق مالکانه است دائمی به نظر برسد، اما فقط همین دوره را اندازه می‌گیرد و بسته می‌شود.',
        en: 'Accumulated depreciation is a contra-asset, so it is permanent and its balance carries forward. Depreciation expense is closed; accumulated depreciation is not. Drawings may look permanent because they sit in the equity group, but they measure this period only and are closed.',
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
        fa: 'خلاصه سود و زیان 12,700 بستانکار و 7,850 بدهکار شده است؛ مانده 4,850 بستانکار برابر سود خالص است که ثبت 3 آن را به سرمایه منتقل می‌کند. رقم 12,700 فقط پس از ثبت 1 درست بود و صفر هم پس از ثبت 3 به دست می‌آید.',
        en: 'Income Summary received a 12,700 credit and a 7,850 debit, leaving a 4,850 credit balance (net income), which entry 3 transfers to capital. 12,700 is the balance after entry 1 only, and zero is reached only after entry 3.',
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
        fa: 'در تراز آزمایشی، استهلاک انباشته مانده بستانکار جداگانه دارد؛ پس جمع ستون‌ها 300 بیشتر از جمع خالص دارایی‌ها در ترازنامه است: 71,100 + 300 = 71,400. این اختلاف اشتباه نیست؛ برداشت هم مبلغش 1,000 است، نه 300، و در تراز نوا دیده نمی‌شود.',
        en: 'In a trial balance, accumulated depreciation is a separate credit balance, so the column totals are 300 higher than net total assets: 71,100 + 300 = 71,400. The difference is not an error; and drawings were 1,000, not 300, and do not appear in Nova’s trial balance.',
      },
    },
    {
      q: {
        fa: 'در چرخه حسابداری، بلافاصله پس از تهیه صورت‌های مالی کدام مرحله انجام می‌شود؟',
        en: 'In the accounting cycle, which step comes immediately after preparing the financial statements?',
      },
      options: [
        { fa: 'تهیه تراز آزمایشی تعدیل‌نشده', en: 'Prepare the unadjusted trial balance' },
        { fa: 'ثبت‌های اصلاحی', en: 'Record adjusting entries' },
        { fa: 'ثبت‌های معکوس', en: 'Record reversing entries' },
        { fa: 'ثبت و انتقال ثبت‌های بستن حساب‌ها', en: 'Journalize and post closing entries' },
      ],
      answer: 3,
      explain: {
        fa: 'ترتیب پایانی چرخه چنین است: صورت‌های مالی (7)، ثبت‌های بستن (8)، تراز پس از بستن (9) و در آغاز دوره بعد، ثبت‌های معکوس اختیاری (10). ثبت‌های معکوس وسوسه‌انگیزند، اما به دوره بعد تعلق دارند و تعدیل‌ها هم پیش از صورت‌ها انجام شده‌اند.',
        en: 'The cycle ends: financial statements (7), closing entries (8), post-closing trial balance (9), and optional reversing entries at the start of the next period (10). Reversing entries are tempting, but they belong to the next period, and adjustments come before the statements.',
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
        fa: 'ثبت معکوس 600 بستانکار در هزینه حقوق ایجاد می‌کند و پرداخت، 1,500 بدهکار می‌شود: 1,500 − 600 = 900، که دقیقاً حقوق مربوط به ماه جدید است. رقم 1,500 اثر ثبت معکوس را نادیده می‌گیرد و 2,100 همان 600 را دو بار هزینه می‌کند.',
        en: 'The reversal leaves a 600 credit in Salaries expense and the payment debits 1,500: 1,500 − 600 = 900, exactly the salaries that belong to the new month. 1,500 ignores the reversal, and 2,100 expenses the 600 twice.',
      },
    },
    {
      q: {
        fa: 'سرمایه ابتدای ماه یک کسب‌وکار 20,000 است. درآمد ماه 9,000، هزینه‌ها 10,500 و برداشت مالک 800 است. سرمایه پس از بستن حساب‌ها چقدر است؟',
        en: 'A business starts the month with capital of 20,000. Revenue is 9,000, expenses are 10,500 and the owner’s drawings are 800. What is capital after closing?',
      },
      options: [
        { fa: '17,700', en: '17,700' },
        { fa: '18,500', en: '18,500' },
        { fa: '19,200', en: '19,200' },
        { fa: '20,700', en: '20,700' },
      ],
      answer: 0,
      explain: {
        fa: 'زیان خالص = 10,500 − 9,000 = 1,500؛ سرمایه = 20,000 − 1,500 − 800 = 17,700. گزینه 18,500 برداشت را فراموش کرده، 19,200 زیان را نادیده گرفته و 20,700 زیان را به‌اشتباه به سرمایه افزوده است.',
        en: 'Net loss = 10,500 − 9,000 = 1,500; capital = 20,000 − 1,500 − 800 = 17,700. 18,500 forgets the drawings, 19,200 ignores the loss, and 20,700 wrongly adds the loss to capital.',
      },
    },
    {
      q: {
        fa: 'پس از بستن درآمد و هزینه‌ها، خلاصه سود و زیان 1,200 مانده **بدهکار** دارد. کدام ثبت آن را می‌بندد؟',
        en: 'After closing revenue and expenses, Income Summary has a **debit** balance of 1,200. Which entry closes it?',
      },
      options: [
        { fa: 'خلاصه سود و زیان بدهکار، سرمایه بستانکار', en: 'Dr Income summary, Cr Capital' },
        { fa: 'سرمایه بدهکار، خلاصه سود و زیان بستانکار', en: 'Dr Capital, Cr Income summary' },
        { fa: 'برداشت بدهکار، خلاصه سود و زیان بستانکار', en: 'Dr Drawings, Cr Income summary' },
        { fa: 'ثبتی لازم نیست؛ زیان به دوره بعد منتقل می‌شود', en: 'No entry: the loss carries forward' },
      ],
      answer: 1,
      explain: {
        fa: 'مانده بدهکار یعنی زیان خالص. برای صفر کردن آن، خلاصه سود و زیان را بستانکار و سرمایه را بدهکار می‌کنیم، چون زیان سرمایه را کم می‌کند. گزینه اول همان ثبت حالت سود است و مانده بدهکار را به 2,400 می‌رساند. برداشت هم ربطی به زیان ندارد.',
        en: 'A debit balance means a net loss. To clear it we credit Income Summary and debit Capital, because a loss reduces capital. The first option is the profit-case entry and would push the debit balance to 2,400. Drawings have nothing to do with the loss.',
      },
    },
    {
      q: {
        fa: 'در عمل حسابداری ایران، **سند اختتامیه** چه می‌کند؟',
        en: 'In Iranian practice, what does the year-end **closing voucher** do?',
      },
      options: [
        { fa: 'فقط درآمدها و هزینه‌ها را به خلاصه سود و زیان می‌بندد', en: 'It closes only revenues and expenses to Income Summary' },
        { fa: 'تعدیل‌های پایان سال را ثبت می‌کند', en: 'It records the year-end adjustments' },
        {
          fa: 'همه حساب‌های دائمی را در پایان سال صفر می‌کند تا سند افتتاحیه همان مانده‌ها را در سال جدید باز کند',
          en: 'It zeroes every permanent account at year-end so the opening voucher can reopen the same balances in the new year',
        },
        { fa: 'سود سال را بین مالکان تقسیم می‌کند', en: 'It distributes the year’s profit to the owners' },
      ],
      answer: 2,
      explain: {
        fa: 'سند اختتامیه آخرین سند سال است و حساب‌های دائمی را با ارقام تراز پس از بستن می‌بندد؛ سند افتتاحیه روز 1 فروردین عکس آن است. بستن درآمد و هزینه‌ها کار سند جداگانه‌ای است که پیش از سند اختتامیه صادر می‌شود؛ به همین دلیل گزینه اول، با وجود شباهت، نادرست است.',
        en: 'The closing voucher is the last voucher of the year and closes the permanent accounts at their post-closing balances; the opening voucher on 1 Farvardin is its mirror. Closing revenues and expenses is done by a separate voucher issued before it, which is why the first option, though similar, is wrong.',
      },
    },
    {
      q: {
        fa: 'کدام‌یک از تعدیل‌های پایان ماه نوا برای ثبت معکوس مناسب است؟',
        en: 'Which of Nova’s month-end adjustments is a suitable candidate for a reversing entry?',
      },
      options: [
        { fa: 'استهلاک 300', en: 'Depreciation of 300' },
        { fa: 'منقضی شدن بیمه به مبلغ 100', en: 'Insurance expired, 100' },
        { fa: 'مصرف ملزومات به مبلغ 1,200', en: 'Supplies used, 1,200' },
        { fa: 'درآمد 700 خدمات صورت‌حساب‌نشده', en: 'Unbilled service revenue of 700' },
      ],
      answer: 3,
      explain: {
        fa: 'درآمد 700 یک تعدیل تعهدی است و بعداً با صورت‌حساب و وصول نقدی دنبال می‌شود؛ معکوس کردنش ثبت آن وصول را ساده می‌کند. استهلاک، بیمه و ملزومات هیچ معامله نقدی بعدی ندارند و معکوس کردن آن‌ها هزینه ماه بعد را خراب می‌کند.',
        en: 'The 700 is an accrual adjustment that will be followed by an invoice and a cash collection, so reversing it simplifies that later entry. Depreciation, insurance and supplies have no later cash transaction, and reversing them would distort next month’s expenses.',
      },
    },
    {
      q: {
        fa: 'پس از بستن حساب‌ها، مانده‌های یک کسب‌وکار چنین است: موجودی نقد 8,000، تجهیزات 10,000، استهلاک انباشته 1,000 و حساب‌های پرداختنی 2,000. جمع هر ستون تراز آزمایشی پس از بستن چقدر است؟',
        en: 'After closing, a business has Cash 8,000, Equipment 10,000, Accumulated depreciation 1,000 and Accounts payable 2,000. What is the total of each column of its post-closing trial balance?',
      },
      options: [
        { fa: '17,000', en: '17,000' },
        { fa: '18,000', en: '18,000' },
        { fa: '15,000', en: '15,000' },
        { fa: '20,000', en: '20,000' },
      ],
      answer: 1,
      explain: {
        fa: 'سرمایه = 8,000 + 10,000 − 1,000 − 2,000 = 15,000. ستون بدهکار = 8,000 + 10,000 = 18,000 و ستون بستانکار = 1,000 + 2,000 + 15,000 = 18,000. رقم 17,000 جمع دارایی‌ها در ترازنامه است که استهلاک انباشته در آن کسر شده؛ 15,000 هم فقط سرمایه است.',
        en: 'Capital = 8,000 + 10,000 − 1,000 − 2,000 = 15,000. Debit column = 8,000 + 10,000 = 18,000; credit column = 1,000 + 2,000 + 15,000 = 18,000. 17,000 is total assets on the balance sheet, where accumulated depreciation is deducted; 15,000 is just capital.',
      },
    },
  ],
}
