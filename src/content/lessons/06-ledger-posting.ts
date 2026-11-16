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
  sales: { fa: 'درآمد فروش', en: 'Sales revenue' },
  utilities: { fa: 'هزینه آب، برق و گاز', en: 'Utilities expense' },
}

const day = (n: number): L => ({ fa: `روز ${n}`, en: `Day ${n}` })
/** Same text in both languages (account codes, numbers). */
const same = (s: string): L => ({ fa: s, en: s })
/** Empty table cell. */
const blank: L = { fa: '', en: '' }
/** Journal page references: J1 / ر1 = page 1 of the general journal. */
const j1: L = { fa: 'ر1', en: 'J1' }
const j2: L = { fa: 'ر2', en: 'J2' }

const asset: L = { fa: 'دارایی', en: 'Asset' }
const liability: L = { fa: 'بدهی', en: 'Liability' }
const expense: L = { fa: 'هزینه', en: 'Expense' }
const debitBal: L = { fa: 'بدهکار', en: 'Debit' }
const creditBal: L = { fa: 'بستانکار', en: 'Credit' }
const yes: L = { fa: 'بله', en: 'Yes' }

export const lesson: Lesson = {
  slug: 'ledger-posting',
  number: 6,
  level: 'intermediate',
  minutes: 28,
  icon: 'Library',
  tone: 'asset',
  title: { fa: 'انتقال به دفتر کل', en: 'Posting to the Ledger' },
  summary: {
    fa: 'ثبت‌های روزنامه را گام‌به‌گام به دفتر کل منتقل کنید، با شماره عطف دو دفتر را به هم پیوند دهید، مانده حساب‌ها را در قالب حساب T و دفتر سه‌ستونی بخوانید و دفتر معین را با حساب کنترل تطبیق دهید.',
    en: 'Post journal entries to the general ledger step by step, cross-reference the two books with posting references, read balances in T-account and running-balance form, and reconcile a subsidiary ledger to its control account.',
  },
  objectives: [
    {
      fa: 'دفتر کل را تعریف کنید و تفاوت آن را با دفتر روزنامه توضیح دهید',
      en: 'Explain what the general ledger is and how it differs from the journal',
    },
    {
      fa: 'ثبت‌های روزنامه را گام‌به‌گام منتقل کنید و با شماره عطف ردّ حسابرسی کاملی بسازید',
      en: 'Post journal entries step by step, using posting references to build a complete audit trail',
    },
    {
      fa: 'حساب‌ها را در قالب حساب T و دفتر سه‌ستونی (مانده‌دار) نگهداری کنید و مانده‌های غیرعادی را تشخیص دهید',
      en: 'Keep accounts in T-account and running-balance form, and spot abnormal balances',
    },
    {
      fa: 'رابطه دفتر معین و حساب کنترل را شرح دهید و این دو را با هم تطبیق دهید',
      en: 'Describe how subsidiary ledgers support control accounts, and reconcile the two',
    },
    {
      fa: 'اشتباهات رایج انتقال را بشناسید و از آن‌ها پرهیز کنید',
      en: 'Recognize and avoid the common posting mistakes',
    },
  ],
  sections: [
    {
      id: 'general-ledger',
      title: { fa: 'دفتر کل چیست؟', en: 'What Is the General Ledger?' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'روز 20 ماه است. کارشناس بانک از سارا می‌پرسد الان چقدر وجه نقد دارد و مشتریان چقدر به او بدهکارند. دفتر روزنامه نوا پاسخ هر دو پرسش را در خود دارد، اما پراکنده: برای پیدا کردن موجودی نقد باید ده‌ها سطر را یکی‌یکی جمع و تفریق کرد. دفتر کل دقیقاً برای همین ساخته شده است.',
            en: 'It is Day 20. The bank officer asks Sara how much cash she has and how much her customers owe her. Nova’s journal holds both answers, but scattered: finding the cash figure means adding and subtracting dozens of lines one by one. The general ledger exists precisely to solve this.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'دفتر روزنامه به این پرسش پاسخ می‌دهد که **چه رویدادی و چه زمانی** رخ داده است. **دفتر کل** به پرسش دیگری پاسخ می‌دهد: **اکنون در هر حساب چه مبلغی هست؟** دفتر کل مجموعه همه حساب‌های واحد تجاری است، برای هر حساب یک صفحه (یا یک رکورد در نرم‌افزار)، که همه افزایش‌ها و کاهش‌های آن حساب را یک‌جا گرد می‌آورد.',
            en: 'The journal answers **what happened, and when**. The **general ledger** answers a different question: **how much is in each account right now?** It is the complete set of a business’s accounts, one page (or one record in software) per account, gathering every increase and decrease in one place.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**انتقال به دفتر کل** یعنی بردن هر سطر ثبت روزنامه به حساب مربوط در دفتر کل. پس از انتقال، نوا با یک نگاه می‌بیند که موجودی نقدش 46,300 است؛ رقمی که بدون دفتر کل باید با مرور دقیق دوازده ثبت روزنامه به دست می‌آمد.',
            en: '**Posting** is the transfer of each journal line to its ledger account. Once posting is done, Nova can see at a glance that its Cash account holds 46,300, a figure that would otherwise take a careful read of twelve journal entries to work out.',
          },
        },
        {
          type: 'diagram',
          id: 'journal-to-ledger',
          caption: {
            fa: 'هر سطر ثبت روزنامه به حساب خودش در دفتر کل می‌رود: بدهکارها به طرف بدهکار و بستانکارها به طرف بستانکار.',
            en: 'Each journal line travels to its own ledger account: debits to the debit side, credits to the credit side.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'دفتر روزنامه', en: 'General journal' },
            items: [
              { fa: 'دفتر ثبت اولیه', en: 'Book of original entry' },
              { fa: 'مرتب بر اساس تاریخ', en: 'Organized by date' },
              { fa: 'هر رویداد را به‌طور کامل در یک جا نشان می‌دهد', en: 'Shows each whole transaction in one place' },
              { fa: 'مانده حساب‌ها را نشان نمی‌دهد', en: 'Cannot show account balances' },
            ],
          },
          right: {
            title: { fa: 'دفتر کل', en: 'General ledger' },
            items: [
              { fa: 'دفتر ثبت نهایی', en: 'Book of final entry' },
              { fa: 'مرتب بر اساس حساب', en: 'Organized by account' },
              { fa: 'هر رویداد را میان حساب‌های مربوط تقسیم می‌کند', en: 'Splits each transaction across its accounts' },
              { fa: 'مانده هر حساب را نشان می‌دهد', en: 'Shows the balance of every account' },
            ],
          },
        },
        {
          type: 'table',
          caption: { fa: 'فهرست حساب‌های نوا تا این مرحله (با کدهای مثال پیوسته)', en: 'Nova’s chart of accounts so far (running-example codes)' },
          head: [
            { fa: 'کد', en: 'Code' },
            { fa: 'حساب', en: 'Account' },
            { fa: 'نوع', en: 'Type' },
            { fa: 'مانده عادی', en: 'Normal balance' },
          ],
          rows: [
            [same('1010'), ac.cash, asset, debitBal],
            [same('1020'), ac.ar, asset, debitBal],
            [same('1030'), ac.supplies, asset, debitBal],
            [same('1040'), ac.prepaidInsurance, asset, debitBal],
            [same('1510'), ac.equipment, asset, debitBal],
            [same('2010'), ac.ap, liability, creditBal],
            [same('2510'), ac.loan, liability, creditBal],
            [same('3010'), ac.capital, { fa: 'حقوق مالکانه', en: 'Equity' }, creditBal],
            [same('3020'), ac.drawings, { fa: 'حقوق مالکانه (کاهنده)', en: 'Equity (reduces capital)' }, debitBal],
            [same('4010'), ac.revenue, { fa: 'درآمد', en: 'Revenue' }, creditBal],
            [same('5010'), ac.rent, expense, debitBal],
            [same('5020'), ac.salaries, expense, debitBal],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'ترتیب و کد حساب‌ها', en: 'Ledger order and codes' },
          text: {
            fa: 'حساب‌ها در دفتر کل به ترتیب فهرست حساب‌ها می‌آیند: دارایی‌ها، بدهی‌ها، حقوق مالکانه، درآمدها و هزینه‌ها. رقم اول کد همین گروه را نشان می‌دهد (1 دارایی، 2 بدهی، 3 حقوق مالکانه، 4 درآمد، 5 هزینه) و در دارایی‌ها و بدهی‌ها، کدهای کوچک‌تر به اقلام جاری تعلق دارند. تراز آزمایشی نیز بعدها با همین ترتیب تهیه می‌شود.',
            en: 'Accounts appear in the ledger in chart-of-accounts order: assets, liabilities, equity, revenue, expenses. The first digit of the code shows the group (1 asset, 2 liability, 3 equity, 4 revenue, 5 expense), and within assets and liabilities the lower codes belong to current items. The trial balance later lists the accounts in exactly the same order.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: دفتر کل در ایران و در نرم‌افزار', en: 'In practice: the ledger in Iran and in software' },
          text: {
            fa: 'دفتر کل، در کنار دفتر روزنامه، یکی از دفاتر قانونی است که برخی مؤدیان باید نگه دارند. در نرم‌افزارهای حسابداری، دفتر کل گزارشی است که از اسناد تأییدشده ساخته می‌شود و می‌توان آن را در سه سطح کل، معین و تفصیلی دید. قالب گزارش‌ها فرق می‌کند، اما منطق همان است که در این درس می‌آموزید.',
            en: 'Together with the journal, the general ledger is one of the legal books some taxpayers must keep. In accounting software the ledger is a report built from approved vouchers, viewable at three levels: general, subsidiary and detail. Layouts vary, but the logic is exactly what this lesson teaches.',
          },
        },
      ],
    },
    {
      id: 'posting-process',
      title: { fa: 'فرایند انتقال، گام‌به‌گام', en: 'The Posting Process, Step by Step' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'انتقال به دفتر کل کاری مکانیکی اما نیازمند دقت کامل است. هر سطر ثبت را، ابتدا بدهکارها و سپس بستانکارها، همیشه با همین پنج حرکت منتقل کنید.',
            en: 'Posting is mechanical, but it must be exact. Post every line of an entry, debits first, then credits, using the same five moves every time.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'حساب را در دفتر کل پیدا کنید', en: 'Find the ledger account' },
              text: {
                fa: 'حسابی را که در سطر روزنامه آمده پیدا کنید؛ مثلاً تجهیزات (1510) برای سطر بدهکار روز 3.',
                en: 'Locate the account named on the journal line, for example Equipment (1510) for the Day 3 debit.',
              },
            },
            {
              title: { fa: 'تاریخ را بنویسید', en: 'Enter the date' },
              text: {
                fa: 'تاریخ رویداد را از دفتر روزنامه به حساب دفتر کل منتقل کنید.',
                en: 'Copy the transaction date from the journal into the ledger account.',
              },
            },
            {
              title: { fa: 'مبلغ را در همان طرف بنویسید', en: 'Enter the amount on the same side' },
              text: {
                fa: 'بدهکارِ روزنامه در دفتر کل هم بدهکار ثبت می‌شود و بستانکارِ روزنامه، بستانکار. هرگز طرف را عوض نکنید.',
                en: 'A journal debit becomes a ledger debit; a journal credit becomes a ledger credit. Never switch sides.',
              },
            },
            {
              title: { fa: 'شماره صفحه روزنامه را در دفتر کل بنویسید', en: 'Write the journal page in the ledger' },
              text: {
                fa: 'در ستون عطف دفتر کل، شماره صفحه روزنامه (یا شماره سند) را بنویسید؛ ر1 یعنی صفحه 1 دفتر روزنامه. این‌طور هر مبلغ تا ثبت اصلی‌اش دنبال‌شدنی است.',
                en: 'In the ledger’s reference column, write the journal page (or voucher number); J1 means page 1 of the general journal. That way every amount can be traced back to its entry.',
              },
            },
            {
              title: { fa: 'کد حساب را در دفتر روزنامه بنویسید', en: 'Write the account code in the journal' },
              text: {
                fa: 'در پایان، کد حساب دفتر کل را در ستون عطف دفتر روزنامه بنویسید. همین حرکت آخر نشان می‌دهد که این سطر منتقل شده است.',
                en: 'Finally, enter the ledger account code in the journal’s Ref column. This last move is the signal that the line has been posted.',
              },
            },
          ],
        },
        { type: 'h', text: { fa: 'شماره عطف: ردّی دوطرفه', en: 'Posting references: a two-way trail' } },
        {
          type: 'p',
          text: {
            fa: 'شماره‌های عطف دو دفتر را به هم پیوند می‌دهند: دفتر کل به صفحه روزنامه اشاره می‌کند و دفتر روزنامه به کد حساب دفتر کل. ثبت‌های روز 3 و روز 4 نوا پس از انتقال چنین‌اند:',
            en: 'Posting references cross-link the two books: the ledger points back to the journal page, and the journal points forward to the ledger account. Here are Nova’s Day 3 and Day 4 entries after posting:',
          },
        },
        {
          type: 'table',
          caption: { fa: 'دفتر روزنامه، صفحه ر1، پس از انتقال', en: 'General journal, page J1, after posting' },
          head: [
            { fa: 'تاریخ', en: 'Date' },
            { fa: 'حساب و شرح', en: 'Account and explanation' },
            { fa: 'عطف', en: 'Ref' },
            { fa: 'بدهکار', en: 'Debit' },
            { fa: 'بستانکار', en: 'Credit' },
          ],
          numericCols: [3, 4],
          rows: [
            [day(3), ac.equipment, same('1510'), 20000, blank],
            [blank, ac.cash, same('1010'), blank, 20000],
            [blank, { fa: 'خرید نقدی تجهیزات طراحی', en: 'Bought design equipment for cash' }, blank, blank, blank],
            [day(4), ac.supplies, same('1030'), 3000, blank],
            [blank, ac.ap, same('2010'), blank, 3000],
            [blank, { fa: 'خرید نسیه ملزومات', en: 'Bought supplies on account' }, blank, blank, blank],
          ],
        },
        {
          type: 'list',
          items: [
            {
              fa: '**ردّ حسابرسی**: هر مبلغ دفتر کل را می‌توان تا ثبت روزنامه و از آنجا تا مدرک مثبته دنبال کرد.',
              en: '**Audit trail**: any ledger amount can be traced to its journal entry and, from there, to the source document.',
            },
            {
              fa: '**نشانگر پیشرفت**: ستون عطفِ خالی دقیقاً نشان می‌دهد انتقال پس از یک وقفه در کجا متوقف شده است.',
              en: '**Progress marker**: a blank Ref column shows exactly where posting stopped after an interruption.',
            },
            {
              fa: '**پیشگیری از خطا**: مانع می‌شود سطری دو بار منتقل شود یا از قلم بیفتد.',
              en: '**Error prevention**: it stops a line from being posted twice or skipped altogether.',
            },
          ],
        },
        { type: 'h', text: { fa: 'مثال کامل: انتقال ثبت‌های روز 1 تا 5', en: 'Worked example: posting Days 1 to 5' } },
        {
          type: 'p',
          text: {
            fa: 'پنج ثبت نخست نوا را منتقل کنیم. هر ثبت دو سطر دارد، پس ده انتقال لازم است: پنج بدهکار و پنج بستانکار. موجودی نقد چهار بار تغییر می‌کند (دو بدهکار در روزهای 1 و 2، دو بستانکار در روزهای 3 و 5)؛ هر حساب دیگر فقط یک بار.',
            en: 'Let’s post Nova’s first five entries. Each has two lines, so ten postings are needed: five debits and five credits. Cash changes four times (debits on Days 1 and 2, credits on Days 3 and 5); every other account changes once.',
          },
        },
        {
          type: 'tAccounts',
          title: { fa: 'دفتر کل نوا پس از انتقال روزهای 1 تا 5', en: 'Nova’s ledger after posting Days 1 to 5' },
          accounts: [
            { name: ac.cash, debits: [50000, 15000], credits: [20000, 1200] },
            { name: ac.supplies, debits: [3000], credits: [] },
            { name: ac.prepaidInsurance, debits: [1200], credits: [] },
            { name: ac.equipment, debits: [20000], credits: [] },
            { name: ac.ap, debits: [], credits: [3000] },
            { name: ac.loan, debits: [], credits: [15000] },
            { name: ac.capital, debits: [], credits: [50000] },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'کنترل میانی', en: 'A mid-way check' },
          text: {
            fa: 'جمع مانده‌های بدهکار (43,800 + 3,000 + 1,200 + 20,000 = 68,000) با جمع مانده‌های بستانکار (3,000 + 15,000 + 50,000 = 68,000) برابر است. هر وقت خواستید، می‌توانید با همین جمع ساده مطمئن شوید که انتقال‌ها تاکنون متوازن بوده‌اند.',
            en: 'Debit balances (43,800 + 3,000 + 1,200 + 20,000 = 68,000) equal credit balances (3,000 + 15,000 + 50,000 = 68,000). You can run this quick check at any point to confirm the postings so far are in balance.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: انتقال خودکار در نرم‌افزار', en: 'In practice: automatic posting in software' },
          text: {
            fa: 'نرم‌افزارهای حسابداری انتقال را خودکار انجام می‌دهند. در بسیاری از آن‌ها سند ابتدا موقت (پیش‌نویس) ذخیره می‌شود و پس از بررسی، قطعی می‌شود؛ سند قطعی دیگر ویرایش نمی‌شود. پیوندهای عطف هم حفظ می‌شوند: روی هر سطر گزارش دفتر کل کلیک کنید تا سند اصلی و پیوست‌هایش باز شود.',
            en: 'Accounting software posts automatically. In many programs a voucher is first saved as temporary (a draft) and becomes final after review; a final voucher can no longer be edited. The cross-references survive too: click any line of the ledger report and the original voucher, with its attachments, opens.',
          },
        },
      ],
    },
    {
      id: 'ledger-formats',
      title: { fa: 'حساب T و دفتر سه‌ستونی', en: 'T-Accounts vs Running-Balance Ledgers' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'حساب‌های دفتر کل دو شکل دارند. **حساب T** ابزاری آموزشی و چرک‌نویس است: بدهکارها در یک طرف و بستانکارها در طرف دیگر. دفترهای واقعی از **قالب سه‌ستونی (مانده‌دار)** استفاده می‌کنند که علاوه بر ستون‌های بدهکار و بستانکار، ستونی برای مانده دارد و پس از هر انتقال به‌روز می‌شود.',
            en: 'Ledger accounts come in two shapes. The **T-account** is a teaching and scratch-pad tool: debits on the left, credits on the right. Real ledgers use the **running-balance (three-column) format**, which adds a balance column next to debit and credit and updates it after every posting.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'حساب T', en: 'T-account' },
            items: [
              { fa: 'دو طرف: بدهکار و بستانکار', en: 'Two sides: debits and credits' },
              { fa: 'مانده فقط هنگام نیاز محاسبه می‌شود', en: 'The balance is computed only when needed' },
              { fa: 'سریع و مناسب تحلیل، امتحان و تخته‌سفید', en: 'Quick for analysis, exams and whiteboards' },
              { fa: 'در ساده‌ترین شکل، تاریخ و عطف ندارد', en: 'In its simplest form, has no dates or references' },
            ],
          },
          right: {
            title: { fa: 'دفتر سه‌ستونی (مانده‌دار)', en: 'Running-balance (three-column) ledger' },
            items: [
              { fa: 'ستون‌ها: تاریخ، شرح، عطف، بدهکار، بستانکار، مانده', en: 'Columns: date, explanation, ref, debit, credit, balance' },
              { fa: 'مانده پس از هر انتقال به‌روز می‌شود', en: 'The balance is updated after every posting' },
              { fa: 'قالبی که در عمل و در نرم‌افزارها به کار می‌رود', en: 'The format used in practice and in software' },
              { fa: 'مانده را در هر تاریخ دلخواه نشان می‌دهد', en: 'Shows the balance on any date' },
            ],
          },
        },
        {
          type: 'table',
          caption: { fa: 'موجودی نقد (1010): دفتر سه‌ستونی ماه جاری', en: 'Cash (1010): running-balance ledger for the month' },
          head: [
            { fa: 'تاریخ', en: 'Date' },
            { fa: 'شرح', en: 'Explanation' },
            { fa: 'عطف', en: 'Ref' },
            { fa: 'بدهکار', en: 'Debit' },
            { fa: 'بستانکار', en: 'Credit' },
            { fa: 'مانده', en: 'Balance' },
          ],
          numericCols: [3, 4, 5],
          rows: [
            [day(1), { fa: 'سرمایه‌گذاری سارا', en: 'Owner investment' }, j1, 50000, blank, 50000],
            [day(2), { fa: 'دریافت وام بانکی', en: 'Bank loan' }, j1, 15000, blank, 65000],
            [day(3), { fa: 'خرید تجهیزات', en: 'Equipment purchase' }, j1, blank, 20000, 45000],
            [day(5), { fa: 'پرداخت حق بیمه', en: 'Insurance premium' }, j1, blank, 1200, 43800],
            [day(8), { fa: 'درآمد نقدی', en: 'Cash revenue' }, j1, 8000, blank, 51800],
            [day(15), { fa: 'پرداخت اجاره', en: 'Rent' }, j2, blank, 2500, 49300],
            [day(20), { fa: 'پرداخت حقوق', en: 'Salaries' }, j2, blank, 3000, 46300],
            [day(24), { fa: 'وصول از مشتریان', en: 'Collection from customers' }, j2, 2500, blank, 48800],
            [day(27), { fa: 'پرداخت به فروشنده', en: 'Payment to supplier' }, j2, blank, 1500, 47300],
            [day(30), { fa: 'برداشت سارا', en: 'Owner withdrawal' }, j2, blank, 1000, 46300],
            [{ fa: 'جمع', en: 'Totals' }, blank, blank, 75500, 29200, 46300],
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'مانده (حساب با مانده عادی بدهکار) = جمع بدهکار − جمع بستانکار = 75,500 − 29,200 = 46,300',
            en: 'Balance (debit-normal account) = Total debits − Total credits = 75,500 − 29,200 = 46,300',
          },
          note: {
            fa: 'برای حساب‌هایی که مانده عادی‌شان بستانکار است، برعکس عمل کنید: جمع بستانکار منهای جمع بدهکار.',
            en: 'For a credit-normal account, reverse it: total credits minus total debits.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'خواندن ستون مانده', en: 'Reading the balance column' },
          text: {
            fa: 'ستون مانده به پرسش‌هایی پاسخ می‌دهد که از دفتر روزنامه برنمی‌آید: موجودی نقد در روز 2 به اوج 65,000 رسید، پس از پرداخت بیمه در روز 5 به کمترین رقم خود یعنی 43,800 رسید و ماه را با 46,300 به پایان برد. پاسخ پرسش کارشناس بانک در روز 20 هم همین‌جاست: 46,300.',
            en: 'The balance column answers questions the journal can’t: Cash peaked at 65,000 on Day 2, hit its low of 43,800 after the Day 5 insurance payment, and closed the month at 46,300. The answer to the bank officer’s Day 20 question is right here too: 46,300.',
          },
        },
        { type: 'h', text: { fa: 'حسابی با مانده عادی بستانکار', en: 'A credit-normal account' } },
        {
          type: 'p',
          text: {
            fa: 'در حسابی که مانده عادی‌اش بستانکار است، بستانکارها مانده را بالا می‌برند و بدهکارها پایین می‌آورند. حساب‌های پرداختنی نوا را در قالب سه‌ستونی ببینید؛ ستون «تشخیص» نشان می‌دهد مانده بدهکار است یا بستانکار:',
            en: 'In a credit-normal account, credits push the balance up and debits bring it down. Here is Nova’s Accounts payable in running-balance form; the Dr/Cr column tells you whether the balance is a debit or a credit:',
          },
        },
        {
          type: 'table',
          caption: { fa: 'حساب‌های پرداختنی (2010): دفتر سه‌ستونی', en: 'Accounts payable (2010): running-balance ledger' },
          head: [
            { fa: 'تاریخ', en: 'Date' },
            { fa: 'شرح', en: 'Explanation' },
            { fa: 'عطف', en: 'Ref' },
            { fa: 'بدهکار', en: 'Debit' },
            { fa: 'بستانکار', en: 'Credit' },
            { fa: 'تشخیص', en: 'Dr/Cr' },
            { fa: 'مانده', en: 'Balance' },
          ],
          numericCols: [3, 4, 6],
          rows: [
            [day(4), { fa: 'خرید نسیه ملزومات', en: 'Supplies on account' }, j1, blank, 3000, creditBal, 3000],
            [day(27), { fa: 'پرداخت به فروشنده', en: 'Payment to supplier' }, j2, 1500, blank, creditBal, 1500],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: ستون تشخیص', en: 'In practice: the Dr/Cr column' },
          text: {
            fa: 'فرم‌های دفتر کل و دفتر معین در ایران معمولاً ستونی به نام **تشخیص** دارند که کنار مانده، بدهکار یا بستانکار بودن آن را می‌نویسد (اغلب به اختصار «بد» و «بس»). گزارش دفتر در نرم‌افزارها هم همین ستون را نشان می‌دهد. با این ستون، مانده غیرعادی، مثلاً بستانکار شدن موجودی نقد، فوراً به چشم می‌آید.',
            en: 'Ledger forms in Iran usually carry a column called **tashkhis** (“determination”) next to the balance, marking it as debit or credit (often abbreviated). Ledger reports in software show the same column. With it, an abnormal balance, such as Cash turning credit, jumps out at once.',
          },
        },
      ],
    },
    {
      id: 'nova-ledger',
      title: { fa: 'دفتر کل کامل نوا', en: 'Nova’s Complete Ledger' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'پس از انتقال هر 12 ثبت، دفتر کل نوا شامل 12 حساب زیر است. هر بدهکارِ روزنامه دقیقاً یک بار در طرف بدهکار یکی از این حساب‌ها آمده و هر بستانکار دقیقاً یک بار در طرف بستانکار. مانده هر حساب را این‌گونه محاسبه کنید:',
            en: 'After all 12 entries are posted, Nova’s ledger holds the 12 accounts below. Every journal debit appears exactly once on a debit side here, and every credit exactly once on a credit side. Compute each balance like this:',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'طرف بدهکار را جمع بزنید', en: 'Total the debit side' },
              text: {
                fa: 'همه مبالغی را که به طرف بدهکار منتقل شده جمع بزنید (برای موجودی نقد: 75,500).',
                en: 'Add every amount posted as a debit (for Cash: 75,500).',
              },
            },
            {
              title: { fa: 'طرف بستانکار را جمع بزنید', en: 'Total the credit side' },
              text: {
                fa: 'همه مبالغ بستانکار را جمع بزنید (برای موجودی نقد: 29,200).',
                en: 'Add every credit (for Cash: 29,200).',
              },
            },
            {
              title: { fa: 'کوچک‌تر را از بزرگ‌تر کم کنید', en: 'Subtract the smaller from the larger' },
              text: { fa: 'تفاوت این دو، مانده حساب است: 46,300.', en: 'The difference is the balance: 46,300.' },
            },
            {
              title: { fa: 'مانده را در طرف بزرگ‌تر قرار دهید', en: 'Place it on the larger side' },
              text: {
                fa: 'اگر جمع بدهکار بزرگ‌تر باشد مانده بدهکار است و اگر جمع بستانکار بزرگ‌تر باشد مانده بستانکار.',
                en: 'A larger debit total gives a debit balance; a larger credit total gives a credit balance.',
              },
            },
          ],
        },
        {
          type: 'tAccounts',
          title: { fa: 'استودیو طراحی نوا: دفتر کل پس از انتقال (روز 30)', en: 'Nova Design Studio: general ledger after posting (Day 30)' },
          accounts: [
            { name: ac.cash, debits: [50000, 15000, 8000, 2500], credits: [20000, 1200, 2500, 3000, 1500, 1000] },
            { name: ac.ar, debits: [4000], credits: [2500] },
            { name: ac.supplies, debits: [3000], credits: [] },
            { name: ac.prepaidInsurance, debits: [1200], credits: [] },
            { name: ac.equipment, debits: [20000], credits: [] },
            { name: ac.ap, debits: [1500], credits: [3000] },
            { name: ac.loan, debits: [], credits: [15000] },
            { name: ac.capital, debits: [], credits: [50000] },
            { name: ac.drawings, debits: [1000], credits: [] },
            { name: ac.revenue, debits: [], credits: [8000, 4000] },
            { name: ac.rent, debits: [2500], credits: [] },
            { name: ac.salaries, debits: [3000], credits: [] },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'دو حساب که ارزش دقت بیشتر دارند', en: 'Two accounts worth a closer look' },
          text: {
            fa: 'حساب‌های دریافتنی: 4,000 بدهکار منهای 2,500 بستانکار = **1,500 مانده بدهکار** که هنوز از مشتریان طلب داریم. حساب‌های پرداختنی: 3,000 بستانکار منهای 1,500 بدهکار = **1,500 مانده بستانکار** که هنوز به فروشنده بدهکاریم.',
            en: 'Accounts receivable: 4,000 debit − 2,500 credit = **1,500 debit balance** still owed by customers. Accounts payable: 3,000 credit − 1,500 debit = **1,500 credit balance** still owed to the supplier.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'کنترل پایان ماه', en: 'Month-end check' },
          text: {
            fa: 'مانده‌های بدهکار هشت حساب (موجودی نقد، حساب‌های دریافتنی، ملزومات، پیش‌پرداخت بیمه، تجهیزات، برداشت، اجاره و حقوق؛ با هم 78,500) با مانده‌های بستانکار چهار حساب (حساب‌های پرداختنی، وام، سرمایه و درآمد؛ با هم 78,500) برابر است. فهرست کردن رسمی همین مانده‌ها، موضوع درس تراز آزمایشی است.',
            en: 'The debit balances (Cash, Accounts receivable, Supplies, Prepaid insurance, Equipment, Drawings, Rent and Salaries: 78,500 in all) equal the credit balances (Accounts payable, Loan, Capital and Revenue: 78,500 in all). Listing these balances formally is the subject of the lesson on the trial balance.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'مانده غیرعادی، زنگ خطر است', en: 'Abnormal balances are red flags' },
          text: {
            fa: 'اگر موجودی نقد مانده بستانکار یا درآمد خدمات مانده بدهکار نشان دهد، پیش از هر چیز به خطای ثبت یا انتقال شک کنید. استثناهای واقعی نادرند؛ مثلاً اضافه‌برداشت از حساب بانکی، یا مشتری‌ای که بیش از بدهی‌اش پرداخته و حسابش بستانکار شده است.',
            en: 'If Cash ever showed a credit balance, or Service revenue a debit balance, suspect a journalizing or posting error first. Genuine exceptions are rare: a bank overdraft, say, or a customer who overpaid and now has a credit balance.',
          },
        },
      ],
    },
    {
      id: 'subsidiary-ledgers',
      title: { fa: 'دفترهای معین و حساب‌های کنترل', en: 'Subsidiary Ledgers and Control Accounts' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'نوا فقط یک حساب دریافتنی دارد، اما یک استودیوی در حال رشد ممکن است صدها مشتری داشته باشد. اگر برای هر مشتری حسابی جداگانه در دفتر کل باز شود، دفتر کل زیر انبوه جزئیات گم می‌شود. راه‌حل این است: **دفتر معین** جزئیات را نگه می‌دارد و یک **حساب کنترل** در دفتر کل، جمع آن‌ها را.',
            en: 'Nova has a single Accounts receivable account, but a growing studio may have hundreds of customers. Opening a separate general-ledger account for each one would bury the ledger in detail. The solution: a **subsidiary ledger** holds the detail, and a single **control account** in the general ledger holds the total.',
          },
        },
        {
          type: 'list',
          items: [
            { fa: '**دفتر معین حساب‌های دریافتنی**: برای هر مشتری یک حساب.', en: '**Accounts receivable ledger**: one account per customer.' },
            { fa: '**دفتر معین حساب‌های پرداختنی**: برای هر فروشنده یا تأمین‌کننده یک حساب.', en: '**Accounts payable ledger**: one account per supplier.' },
            { fa: '**دفتر معین دارایی‌های ثابت**: برای هر دستگاه، وسیله نقلیه یا رایانه یک ردیف.', en: '**Fixed-asset register**: one record per machine, vehicle or computer.' },
            { fa: '**دفتر معین موجودی کالا**: برای هر کالا یک کارت (در درس موجودی کالا بررسی می‌شود).', en: '**Inventory ledger**: one card per product (covered in the inventory lesson).' },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: کل، معین، تفصیلی', en: 'In practice: general, subsidiary, detail' },
          text: {
            fa: 'در کدگذاری سه‌سطحی رایج در ایران، حساب هر مشتری معمولاً یک **حساب تفصیلی** است که زیر یک حساب معین (مثلاً «حساب‌های دریافتنی تجاری») و آن هم زیر یک حساب کل (مثلاً «حساب‌ها و اسناد دریافتنی») قرار می‌گیرد. قاعده همان است: هر سطح باید با جمع سطح زیرین خود برابر باشد. جزئیات این کدگذاری در درس سند حسابداری و کدگذاری حساب‌ها می‌آید.',
            en: 'In the three-level coding common in Iran, each customer is usually a **detail account** under a subsidiary account (e.g. “Trade receivables”), which in turn sits under a general account (e.g. “Accounts and notes receivable”). The rule is the same: each level must equal the total of the level below it. The lesson on vouchers and account coding covers this coding in detail.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'مثال فرضی', en: 'Illustration (hypothetical split)' },
          text: {
            fa: 'فرض کنید صورت‌حساب 4,000 روز 12 نوا برای دو مشتری صادر شده باشد، کافه اطلس 2,500 و کتاب‌فروشی پارسا 1,500، و وجه 2,500 روز 24 از کافه اطلس وصول شده باشد. هر رقم دو بار ثبت می‌شود: یک بار در حساب کنترل و یک بار در کارت حساب مشتری.',
            en: 'Suppose Nova’s Day 12 billing of 4,000 went to two clients, Atlas Café 2,500 and Parsa Books 1,500, and the Day 24 collection of 2,500 came from Atlas Café. Each figure is posted twice: once to the control account and once to the customer’s card.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'حساب‌های دریافتنی: دفتر معین در برابر حساب کنترل', en: 'Accounts receivable: subsidiary ledger vs control account' },
          head: [
            { fa: 'حساب', en: 'Account' },
            { fa: 'صورت‌حساب (بدهکار)', en: 'Billed (Dr)' },
            { fa: 'وصول (بستانکار)', en: 'Collected (Cr)' },
            { fa: 'مانده', en: 'Balance' },
          ],
          numericCols: [1, 2, 3],
          rows: [
            [{ fa: 'کافه اطلس', en: 'Atlas Café' }, 2500, 2500, 0],
            [{ fa: 'کتاب‌فروشی پارسا', en: 'Parsa Books' }, 1500, blank, 1500],
            [{ fa: 'جمع دفتر معین', en: 'Subsidiary ledger total' }, 4000, 2500, 1500],
            [{ fa: 'حساب کنترل: حساب‌های دریافتنی (1020)', en: 'Control account: Accounts receivable (1020)' }, 4000, 2500, 1500],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'کنترل طلایی', en: 'The golden check' },
          text: {
            fa: 'در هر تاریخ، جمع مانده‌های دفتر معین باید با مانده حساب کنترل برابر باشد. اگر برابر نباشند، انتقالی در یکی از این دو جا از قلم افتاده یا نادرست انجام شده است.',
            en: 'At any date, the subsidiary-ledger balances must add up to the control-account balance. If they don’t, a posting was missed or misposted in one of the two places.',
          },
        },
        { type: 'h', text: { fa: 'مغایرت‌گیری دفتر معین با حساب کنترل', en: 'Reconciling a subsidiary ledger to its control account' } },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'فهرست مانده‌ها را تهیه کنید', en: 'List the balances' },
              text: {
                fa: 'مانده همه کارت‌های مشتری را فهرست و جمع بزنید. به این فهرست **فهرست مانده مشتریان** می‌گویند.',
                en: 'List and total every customer card. This list is called a **schedule of accounts receivable**.',
              },
            },
            {
              title: { fa: 'با حساب کنترل مقایسه کنید', en: 'Compare with the control account' },
              text: {
                fa: 'جمع فهرست را کنار مانده حساب کنترل بگذارید. اگر برابرند، کار تمام است.',
                en: 'Put the schedule total next to the control-account balance. If they agree, you are done.',
              },
            },
            {
              title: { fa: 'اختلاف را ردیابی کنید', en: 'Trace the difference' },
              text: {
                fa: 'دنبال رقمی برابر با اختلاف بگردید: فاکتور یا وصولی که فقط در یکی از دو جا ثبت شده، مبلغی که در دو جا متفاوت نوشته شده، یا سطری که در طرف اشتباه آمده است.',
                en: 'Look for an amount equal to the difference: an invoice or receipt posted in only one of the two places, an amount written differently in each, or a line on the wrong side.',
              },
            },
            {
              title: { fa: 'اصلاح کنید و دوباره بسنجید', en: 'Correct and compare again' },
              text: {
                fa: 'هر خطا را در همان جایی که رخ داده اصلاح کنید و مقایسه را تکرار کنید تا دو رقم برابر شوند.',
                en: 'Fix each error where it happened and repeat the comparison until the two figures agree.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'مثال: پیدا کردن اختلاف', en: 'Example: finding a difference' },
          text: {
            fa: 'فرض کنید در پایان ماه بعد، حساب کنترل 6,400 نشان دهد و جمع کارت‌های مشتریان 5,950. اختلاف 450 است. بررسی نشان می‌دهد فاکتور 450 کتاب‌فروشی پارسا به حساب کنترل منتقل شده، اما به کارت پارسا نه. پس از انتقال آن، جمع کارت‌ها 6,400 می‌شود و با حساب کنترل برابر است. یادتان باشد: اگر وصولی به کارت مشتری اشتباه برود، جمع‌ها برابر می‌مانند و این مقایسه آن را آشکار نمی‌کند.',
            en: 'Suppose that at the end of the next month the control account shows 6,400 while the customer cards total 5,950. The difference is 450. The search shows that a 450 invoice to Parsa Books was posted to the control account but not to Parsa’s card. Once it is posted, the cards total 6,400 and agree. Remember: if a receipt is posted to the wrong customer’s card, the totals still agree and this comparison won’t reveal it.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: صورت‌حساب مانده برای مشتری', en: 'In practice: customer statements' },
          text: {
            fa: 'بسیاری از شرکت‌ها هر ماه یا هر فصل صورت‌حساب مانده (گردش حساب) برای مشتریان می‌فرستند و از آن‌ها تأیید مانده می‌گیرند. اگر مشتری اختلافی ببیند، خطای انتقال به کارت او زود پیدا می‌شود. برای فروشندگان هم صورت‌حسابی را که می‌فرستند با دفتر معین حساب‌های پرداختنی تطبیق می‌دهند.',
            en: 'Many businesses send customers a statement of account every month or quarter and ask them to confirm the balance. If a customer spots a difference, a posting error on their card comes to light quickly. On the supplier side, the statements suppliers send are matched against the accounts payable ledger.',
          },
        },
      ],
    },
    {
      id: 'posting-mistakes',
      title: { fa: 'اشتباهات رایج در انتقال', en: 'Common Posting Mistakes' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'انتقال ساده به نظر می‌رسد، اما همین سادگی باعث بی‌دقتی می‌شود. این اشتباهات را بیش از همه می‌بینیم:',
            en: 'Posting looks simple, and that simplicity breeds carelessness. These are the mistakes we see most often:',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**طرف اشتباه**: بدهکارِ روزنامه به طرف بستانکار حساب برود. مانده آن حساب به اندازه دو برابر مبلغ خطا می‌کند.',
              en: '**Wrong side**: a journal debit lands on the credit side. That account’s balance ends up wrong by twice the amount.',
            },
            {
              fa: '**حساب اشتباه**: مثلاً بردن مبلغ به «هزینه ملزومات» به‌جای «ملزومات»، چون نام‌ها شبیه‌اند. کد حساب را بخوانید، نه فقط نامش را.',
              en: '**Wrong account**: e.g. posting to Supplies expense instead of Supplies because the names look alike. Read the account code, not just the name.',
            },
            {
              fa: '**دو بار انتقال یا جا انداختن یک سطر**: بیشتر وقتی رخ می‌دهد که کار نیمه‌کاره رها شده و ستون عطف پر نشده است.',
              en: '**Posting a line twice, or skipping one**: usually happens when work is interrupted and the Ref column was not filled in.',
            },
            {
              fa: '**جابه‌جایی ارقام**: نوشتن 2,500 به‌صورت 5,200 هنگام کپی کردن مبلغ.',
              en: '**Transposed digits**: copying 2,500 as 5,200.',
            },
            {
              fa: '**محاسبه نادرست مانده**: افزودن بستانکارها به مانده یک حساب بدهکار، به‌جای کم کردن آن‌ها.',
              en: '**Miscomputing a balance**: adding credits to a debit-normal account’s balance instead of subtracting them.',
            },
            {
              fa: '**فراموش کردن دفتر معین**: انتقال فاکتور به حساب کنترل، بدون ثبت در کارت مشتری.',
              en: '**Forgetting the subsidiary ledger**: posting an invoice to the control account but not to the customer’s card.',
            },
            {
              fa: '**نوشتن عطف پیش از انتقال**: اگر کد حساب را پیش از انتقال واقعی بنویسید، ستون عطف دیگر نشانگر قابل اعتمادی نیست.',
              en: '**Writing the reference before posting**: if you fill in the code before actually posting, the Ref column stops being a reliable marker.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'انتقال، کپی کردن است؛ نه تصمیم‌گیری', en: 'Posting copies; it doesn’t decide' },
          text: {
            fa: 'اگر هنگام انتقال احساس کردید ثبت روزنامه اشتباه است، ثبت را در دفتر کل «درست» نکنید. خودِ ثبت روزنامه را با یک ثبت تصحیحی اصلاح کنید و آن را هم منتقل کنید تا دفتر روزنامه و دفتر کل همیشه با هم یکی بمانند.',
            en: 'If you suspect a journal entry is wrong while posting it, don’t “fix” it in the ledger. Correct the journal entry itself with a correcting entry and post that too, so the journal and the ledger always tell the same story.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'کنترل صفحه‌به‌صفحه', en: 'Page-by-page control' },
          text: {
            fa: 'پس از انتقال هر صفحه روزنامه، جمع بدهکارها و بستانکارهای آن صفحه را با جمع مبالغی که به دفتر کل برده‌اید مقایسه کنید. خطا هرچه زودتر پیدا شود، پیدا کردنش ارزان‌تر است.',
            en: 'After posting each journal page, compare the page’s debit and credit totals with the amounts you carried to the ledger. The sooner an error is found, the cheaper it is to find.',
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
            fa: 'تمرین‌ها از ساده به چالشی مرتب شده‌اند. برای هر کدام، پیش از دیدن راه‌حل، حساب‌های T یا جدول مانده را روی کاغذ بکشید.',
            en: 'The exercises run from easy to challenging. For each one, draw the T-accounts or the balance table on paper before you look at the solution.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'محاسبه مانده و تشخیص مانده غیرعادی', en: 'Compute balances and spot an abnormal one' },
          difficulty: 'easy',
          problem: {
            fa: 'جمع گردش بدهکار و بستانکار چند حساب **کافه کتاب سیمرغ** در پایان ماه در جدول آمده است. مانده هر حساب و طرف آن را تعیین کنید و بگویید کدام مانده غیرعادی است.',
            en: 'The table shows the debit and credit totals of several accounts of **Simorgh Book Café** at month-end. Find each account’s balance and its side, and say which balance is abnormal.',
          },
          given: {
            head: [
              { fa: 'حساب', en: 'Account' },
              { fa: 'جمع بدهکار', en: 'Total debits' },
              { fa: 'جمع بستانکار', en: 'Total credits' },
            ],
            numericCols: [1, 2],
            rows: [
              [ac.cash, 38400, 25900],
              [ac.ar, 6200, 6800],
              [ac.supplies, 2750, 900],
              [ac.ap, 9000, 11500],
              [gx.sales, 0, 21000],
              [ac.rent, 4000, 0],
              [gx.drawings, 1200, 0],
            ],
          },
          hint: {
            fa: 'برای هر حساب، کوچک‌تر را از بزرگ‌تر کم کنید و مانده را در طرف بزرگ‌تر بگذارید. سپس با مانده عادی آن نوع حساب مقایسه کنید.',
            en: 'For each account, subtract the smaller total from the larger and put the balance on the larger side. Then compare with the normal balance for that type of account.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'مانده‌ها', en: 'Balances' },
              head: [
                { fa: 'حساب', en: 'Account' },
                { fa: 'مانده', en: 'Balance' },
                { fa: 'طرف', en: 'Side' },
                { fa: 'عادی؟', en: 'Normal?' },
              ],
              numericCols: [1],
              rows: [
                [ac.cash, 12500, debitBal, yes],
                [ac.ar, 600, creditBal, { fa: 'خیر', en: 'No' }],
                [ac.supplies, 1850, debitBal, yes],
                [ac.ap, 2500, creditBal, yes],
                [gx.sales, 21000, creditBal, yes],
                [ac.rent, 4000, debitBal, yes],
                [gx.drawings, 1200, debitBal, yes],
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              title: { fa: 'حساب‌های دریافتنی بستانکار شده است', en: 'Accounts receivable has a credit balance' },
              text: {
                fa: 'وصول‌ها (6,800) از فروش‌های نسیه (6,200) بیشتر است؛ یعنی 600 بیش از طلب دریافت شده. یا مشتری‌ای بیش از بدهی‌اش پرداخته (پس در واقع 600 به او بدهکاریم)، یا وصولی دو بار ثبت شده است. باید کارت تک‌تک مشتریان را بررسی کرد.',
                en: 'Collections (6,800) exceed credit sales (6,200), so 600 more than was owed has been received. Either a customer overpaid (so the café really owes them 600), or a collection was recorded twice. Each customer card needs checking.',
              },
            },
          ],
          answer: {
            fa: 'فقط حساب‌های دریافتنی غیرعادی است: 600 مانده بستانکار. موجودی نقد 12,500 بدهکار است.',
            en: 'Only Accounts receivable is abnormal: a 600 credit balance. Cash has a 12,500 debit balance.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'انتقال یک ماه به حساب‌های T', en: 'Post a month to T-accounts' },
          difficulty: 'medium',
          problem: {
            fa: 'ثبت‌های روزنامه ماه نخست **خشکشویی سپید** در جدول آمده است. آن‌ها را به حساب‌های T منتقل کنید، مانده هر حساب را به دست آورید و نشان دهید جمع مانده‌های بدهکار با جمع مانده‌های بستانکار برابر است.',
            en: 'The table lists the first month’s journal entries of **Sepid Dry Cleaners**. Post them to T-accounts, find each account’s balance, and show that total debit balances equal total credit balances.',
          },
          given: {
            head: [
              { fa: 'روز', en: 'Day' },
              { fa: 'حساب بدهکار', en: 'Debit' },
              { fa: 'حساب بستانکار', en: 'Credit' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            numericCols: [3],
            rows: [
              [same('1'), ac.cash, gx.capital, 25000],
              [same('2'), { fa: 'تجهیزات (دستگاه پرس)', en: 'Equipment (pressing machine)' }, ac.cash, 9000],
              [same('3'), { fa: 'ملزومات (مواد شوینده، چوب‌لباسی)', en: 'Supplies (detergent, hangers)' }, ac.ap, 2200],
              [same('10'), ac.cash, ac.revenue, 4300],
              [same('15'), { fa: 'حساب‌های دریافتنی (یک هتل)', en: 'Accounts receivable (a hotel)' }, ac.revenue, 1900],
              [same('20'), ac.ap, ac.cash, 1200],
              [same('25'), gx.utilities, ac.cash, 650],
              [same('28'), ac.cash, ac.ar, 1000],
            ],
          },
          hint: {
            fa: 'برای هر سطر، مبلغ را در همان طرفی بنویسید که در دفتر روزنامه آمده است. موجودی نقد شش بار تغییر می‌کند.',
            en: 'For each line, enter the amount on the same side as in the journal. Cash changes six times.',
          },
          solution: [
            {
              type: 'tAccounts',
              title: { fa: 'دفتر کل خشکشویی سپید', en: 'Sepid Dry Cleaners ledger' },
              accounts: [
                { name: ac.cash, debits: [25000, 4300, 1000], credits: [9000, 1200, 650] },
                { name: ac.ar, debits: [1900], credits: [1000] },
                { name: ac.supplies, debits: [2200], credits: [] },
                { name: ac.equipment, debits: [9000], credits: [] },
                { name: ac.ap, debits: [1200], credits: [2200] },
                { name: gx.capital, debits: [], credits: [25000] },
                { name: ac.revenue, debits: [], credits: [4300, 1900] },
                { name: gx.utilities, debits: [650], credits: [] },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'فهرست مانده‌ها', en: 'List of balances' },
              head: [
                { fa: 'حساب', en: 'Account' },
                { fa: 'مانده بدهکار', en: 'Debit balance' },
                { fa: 'مانده بستانکار', en: 'Credit balance' },
              ],
              numericCols: [1, 2],
              rows: [
                [ac.cash, 19450, blank],
                [ac.ar, 900, blank],
                [ac.supplies, 2200, blank],
                [ac.equipment, 9000, blank],
                [ac.ap, blank, 1000],
                [gx.capital, blank, 25000],
                [ac.revenue, blank, 6200],
                [gx.utilities, 650, blank],
                [{ fa: 'جمع', en: 'Totals' }, 32200, 32200],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              title: { fa: 'محاسبه موجودی نقد', en: 'Working out Cash' },
              text: {
                fa: 'جمع بدهکار: 25,000 + 4,300 + 1,000 = 30,300. جمع بستانکار: 9,000 + 1,200 + 650 = 10,850. مانده: 30,300 − 10,850 = 19,450 بدهکار.',
                en: 'Debits: 25,000 + 4,300 + 1,000 = 30,300. Credits: 9,000 + 1,200 + 650 = 10,850. Balance: 30,300 − 10,850 = 19,450 debit.',
              },
            },
          ],
          answer: {
            fa: 'موجودی نقد 19,450 بدهکار؛ جمع مانده‌های بدهکار و بستانکار هر کدام 32,200.',
            en: 'Cash is 19,450 debit; debit and credit balances each total 32,200.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'دفتر سه‌ستونی حساب بانک', en: 'A running-balance bank account' },
          difficulty: 'medium',
          problem: {
            fa: 'حساب بانک **چاپخانه رسا** در روز 1 ماه 8,000 مانده بدهکار دارد. رویدادهای ماه را در قالب سه‌ستونی ثبت کنید. مانده پایان ماه چقدر است و کمترین مانده در کدام روز بوده است؟',
            en: 'The bank account of **Rasa Print Shop** starts the month with an 8,000 debit balance. Record the month’s movements in running-balance form. What is the closing balance, and on which day was the balance lowest?',
          },
          given: {
            head: [
              { fa: 'روز', en: 'Day' },
              { fa: 'رویداد', en: 'Movement' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            numericCols: [2],
            rows: [
              [same('3'), { fa: 'پرداخت به فروشنده کاغذ', en: 'Paid the paper supplier' }, 5500],
              [same('6'), { fa: 'واریز فروش نقدی', en: 'Deposited cash sales' }, 2700],
              [same('9'), { fa: 'پرداخت اجاره', en: 'Paid rent' }, 4000],
              [same('14'), { fa: 'وصول از یک مشتری', en: 'Collected from a customer' }, 6300],
              [same('20'), { fa: 'پرداخت دستمزد', en: 'Paid wages' }, 3800],
              [same('27'), { fa: 'برداشت مالک', en: 'Owner withdrawal' }, 1200],
            ],
          },
          hint: {
            fa: 'واریزها و وصول‌ها بدهکار حساب بانک‌اند و پرداخت‌ها بستانکار. پس از هر سطر، مانده را به‌روز کنید.',
            en: 'Deposits and collections are debits to the bank account; payments are credits. Update the balance after every line.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'حساب بانک چاپخانه رسا', en: 'Rasa Print Shop: bank account' },
              head: [
                { fa: 'روز', en: 'Day' },
                { fa: 'شرح', en: 'Explanation' },
                { fa: 'بدهکار', en: 'Debit' },
                { fa: 'بستانکار', en: 'Credit' },
                { fa: 'مانده', en: 'Balance' },
              ],
              numericCols: [2, 3, 4],
              rows: [
                [same('1'), { fa: 'مانده ابتدای ماه', en: 'Opening balance' }, blank, blank, 8000],
                [same('3'), { fa: 'پرداخت به فروشنده', en: 'Paid supplier' }, blank, 5500, 2500],
                [same('6'), { fa: 'واریز فروش نقدی', en: 'Cash sales deposited' }, 2700, blank, 5200],
                [same('9'), { fa: 'اجاره', en: 'Rent' }, blank, 4000, 1200],
                [same('14'), { fa: 'وصول از مشتری', en: 'Customer collection' }, 6300, blank, 7500],
                [same('20'), { fa: 'دستمزد', en: 'Wages' }, blank, 3800, 3700],
                [same('27'), { fa: 'برداشت مالک', en: 'Owner withdrawal' }, blank, 1200, 2500],
              ],
            },
            {
              type: 'formula',
              text: {
                fa: 'مانده پایان = مانده ابتدا + بدهکارها − بستانکارها = 8,000 + 9,000 − 14,500 = 2,500',
                en: 'Closing = Opening + Debits − Credits = 8,000 + 9,000 − 14,500 = 2,500',
              },
              note: {
                fa: 'بدهکارها: 2,700 + 6,300 = 9,000. بستانکارها: 5,500 + 4,000 + 3,800 + 1,200 = 14,500.',
                en: 'Debits: 2,700 + 6,300 = 9,000. Credits: 5,500 + 4,000 + 3,800 + 1,200 = 14,500.',
              },
            },
            {
              type: 'callout',
              tone: 'example',
              title: { fa: 'چرا ستون مانده مهم است؟', en: 'Why the balance column matters' },
              text: {
                fa: 'در روز 9 مانده به 1,200 رسید. اگر پرداخت دستمزد 3,800 پیش از وصول روز 14 انجام می‌شد، حساب کسری می‌آورد. حساب T فقط مانده پایانی را نشان می‌دهد؛ دفتر سه‌ستونی این خطر را روز به روز آشکار می‌کند.',
                en: 'On Day 9 the balance fell to 1,200. Had the 3,800 of wages been paid before the Day 14 collection, the account would have run short. A T-account shows only the closing figure; the running-balance ledger reveals this risk day by day.',
              },
            },
          ],
          answer: {
            fa: 'مانده پایان ماه 2,500 بدهکار؛ کمترین مانده 1,200 در روز 9.',
            en: 'Closing balance 2,500 debit; the lowest balance was 1,200, on Day 9.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'مغایرت‌گیری دفتر معین با حساب کنترل', en: 'Reconcile a subsidiary ledger to its control account' },
          difficulty: 'hard',
          problem: {
            fa: 'در پایان ماه، مانده حساب کنترل حساب‌های دریافتنی **شرکت خدمات شبکه پویا** 18,750 است، اما کارت‌های سه مشتری با هم 16,590 را نشان می‌دهند. بررسی‌ها چهار خطا را آشکار کرده است: (1) فاکتور 1,500 مدرسه سهند به حساب کنترل منتقل شده، اما به کارت مدرسه نه. (2) وصول 600 از درمانگاه کاوه در کارت درمانگاه به‌اشتباه 960 ثبت شده است. (3) وصول 300 از هتل البرز در کارت هتل ثبت شده، اما بستانکار حساب کنترل هرگز منتقل نشده است. (4) فاکتور 800 درمانگاه کاوه به‌اشتباه به کارت هتل البرز رفته است. مانده درست هر مشتری و حساب کنترل را به دست آورید.',
            en: 'At month-end, the Accounts receivable control account of **Pouya Network Services** shows 18,750, but the three customer cards total only 16,590. A review has uncovered four errors: (1) a 1,500 invoice to Sahand School was posted to the control account but not to the school’s card. (2) A 600 collection from Kaveh Clinic was entered on the clinic’s card as 960. (3) A 300 collection from Alborz Hotel was posted to the hotel’s card, but the credit to the control account was never posted. (4) An 800 invoice for Kaveh Clinic was posted to Alborz Hotel’s card by mistake. Find each customer’s correct balance and the correct control balance.',
          },
          given: {
            head: [
              { fa: 'کارت مشتری', en: 'Customer card' },
              { fa: 'مانده فعلی', en: 'Balance shown' },
            ],
            numericCols: [1],
            rows: [
              [{ fa: 'هتل البرز', en: 'Alborz Hotel' }, 7200],
              [{ fa: 'درمانگاه کاوه', en: 'Kaveh Clinic' }, 4590],
              [{ fa: 'مدرسه سهند', en: 'Sahand School' }, 4800],
              [{ fa: 'جمع', en: 'Total' }, 16590],
            ],
          },
          hint: {
            fa: 'برای هر خطا بپرسید کدام طرف اشتباه است: کارت مشتری یا حساب کنترل؟ خطای (4) جمع کارت‌ها را تغییر نمی‌دهد، اما باید اصلاح شود.',
            en: 'For each error ask which side is wrong: the customer card or the control account? Error (4) does not change the card total, but it still has to be fixed.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'خطای (1): کارت مدرسه سهند', en: 'Error (1): Sahand School’s card' },
                  text: {
                    fa: 'حساب کنترل درست است؛ کارت مدرسه 1,500 کم دارد. کارت سهند: 4,800 + 1,500 = 6,300.',
                    en: 'The control account is right; the school’s card is 1,500 short. Sahand: 4,800 + 1,500 = 6,300.',
                  },
                },
                {
                  title: { fa: 'خطای (2): کارت درمانگاه کاوه', en: 'Error (2): Kaveh Clinic’s card' },
                  text: {
                    fa: 'کارت 960 بستانکار شده، در حالی که باید 600 می‌شد؛ پس 360 زیادی کم شده و باید به کارت برگردد.',
                    en: 'The card was credited 960 instead of 600, so 360 too much was taken off and must be added back.',
                  },
                },
                {
                  title: { fa: 'خطای (3): حساب کنترل', en: 'Error (3): the control account' },
                  text: {
                    fa: 'کارت هتل درست است؛ حساب کنترل 300 بیشتر از واقع است. حساب کنترل: 18,750 − 300 = 18,450.',
                    en: 'The hotel’s card is right; the control account is 300 too high. Control: 18,750 − 300 = 18,450.',
                  },
                },
                {
                  title: { fa: 'خطای (4): جابه‌جایی میان دو مشتری', en: 'Error (4): a mix-up between two customers' },
                  text: {
                    fa: '800 را از کارت هتل البرز کم و به کارت درمانگاه کاوه اضافه کنید. البرز: 7,200 − 800 = 6,400. کاوه: 4,590 + 360 + 800 = 5,750.',
                    en: 'Take 800 off Alborz Hotel’s card and add it to Kaveh Clinic’s. Alborz: 7,200 − 800 = 6,400. Kaveh: 4,590 + 360 + 800 = 5,750.',
                  },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'صورت مغایرت', en: 'Reconciliation' },
              head: [
                { fa: 'شرح', en: 'Item' },
                { fa: 'حساب کنترل', en: 'Control account' },
                { fa: 'جمع کارت‌ها', en: 'Customer cards' },
              ],
              rows: [
                [{ fa: 'مانده‌ها پیش از اصلاح', en: 'Balances before correction' }, same('18,750'), same('16,590')],
                [{ fa: '(1) فاکتور سهند', en: '(1) Sahand invoice' }, blank, { fa: 'افزایش 1,500', en: 'add 1,500' }],
                [{ fa: '(2) وصول کاوه', en: '(2) Kaveh collection' }, blank, { fa: 'افزایش 360', en: 'add 360' }],
                [{ fa: '(3) وصول البرز', en: '(3) Alborz collection' }, { fa: 'کاهش 300', en: 'less 300' }, blank],
                [{ fa: '(4) فاکتور کاوه در کارت البرز', en: '(4) Kaveh invoice on Alborz card' }, blank, { fa: 'بدون اثر بر جمع', en: 'no effect on total' }],
                [{ fa: 'جمع پس از اصلاح', en: 'Totals after correction' }, same('18,450'), same('18,450')],
              ],
            },
            {
              type: 'table',
              caption: { fa: 'فهرست مانده مشتریان پس از اصلاح', en: 'Corrected schedule of accounts receivable' },
              head: [
                { fa: 'مشتری', en: 'Customer' },
                { fa: 'مانده', en: 'Balance' },
              ],
              numericCols: [1],
              rows: [
                [{ fa: 'هتل البرز', en: 'Alborz Hotel' }, 6400],
                [{ fa: 'درمانگاه کاوه', en: 'Kaveh Clinic' }, 5750],
                [{ fa: 'مدرسه سهند', en: 'Sahand School' }, 6300],
                [{ fa: 'جمع', en: 'Total' }, 18450],
              ],
            },
          ],
          answer: {
            fa: 'مانده درست 18,450 است: هتل البرز 6,400، درمانگاه کاوه 5,750 و مدرسه سهند 6,300.',
            en: 'The correct balance is 18,450: Alborz Hotel 6,400, Kaveh Clinic 5,750 and Sahand School 6,300.',
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
              fa: 'دفتر کل رویدادها را بر اساس حساب گروه‌بندی می‌کند و دفتر روزنامه بر اساس تاریخ.',
              en: 'The general ledger groups transactions by account; the journal groups them by date.',
            },
            {
              fa: 'هر سطر را به همان طرف منتقل کنید و سپس عطف را در هر دو دفتر بنویسید: صفحه روزنامه در دفتر کل و کد حساب در دفتر روزنامه.',
              en: 'Post each line to the same side, then write the cross-references in both books: the journal page in the ledger and the account code in the journal.',
            },
            {
              fa: 'قالب سه‌ستونی پس از هر انتقال مانده را نشان می‌دهد؛ موجودی نقد نوا ماه را با 46,300 به پایان می‌برد.',
              en: 'The running-balance format shows the balance after every posting; Nova’s Cash ends the month at 46,300.',
            },
            {
              fa: 'مانده غیرعادی معمولاً نشانه خطاست و باید بررسی شود.',
              en: 'An abnormal balance usually signals an error and must be investigated.',
            },
            {
              fa: 'حساب کنترل خلاصه دفتر معین است و همیشه باید با جمع آن برابر باشد؛ اختلاف را با فهرست مانده مشتریان پیدا کنید.',
              en: 'A control account summarizes its subsidiary ledger and must always equal its total; find differences with a schedule of balances.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'گام بعدی', en: 'What comes next' },
          text: {
            fa: 'اکنون می‌دانید رویدادها چگونه از دفتر روزنامه به دفتر کل می‌روند. در درس سند حسابداری و کدگذاری حساب‌ها می‌بینید حسابداران حرفه‌ای همین کار را با سند و کد حساب چگونه انجام می‌دهند، و در درس تراز آزمایشی، مانده همه حساب‌ها را کنار هم می‌چینیم تا برابری بدهکارها و بستانکارها را بیازماییم.',
            en: 'You now know how transactions travel from the journal to the ledger. The lesson on vouchers and account coding shows how professionals do the same job with vouchers and account codes, and in the lesson on the trial balance we line up every balance to test that debits still equal credits.',
          },
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'دفتر کل', en: 'General ledger' },
              def: {
                fa: 'مجموعه کامل حساب‌های واحد تجاری که هر یک افزایش‌ها، کاهش‌ها و مانده خود را نشان می‌دهد.',
                en: 'The complete set of a business’s accounts, each showing its increases, decreases and balance.',
              },
            },
            {
              term: { fa: 'انتقال به دفتر کل', en: 'Posting' },
              def: {
                fa: 'بردن مبالغ ثبت‌های روزنامه به حساب‌های مربوط در دفتر کل، در همان طرف.',
                en: 'Transferring journal amounts to the corresponding ledger accounts, on the same side.',
              },
            },
            {
              term: { fa: 'عطف', en: 'Posting reference' },
              def: {
                fa: 'ارجاع متقابل: شماره صفحه روزنامه در دفتر کل و کد حساب در دفتر روزنامه.',
                en: 'A cross-reference: the journal page in the ledger, the account code in the journal.',
              },
            },
            {
              term: { fa: 'فهرست حساب‌ها (سرفصل حساب‌ها)', en: 'Chart of accounts' },
              def: {
                fa: 'فهرست کدگذاری‌شده همه حساب‌ها به ترتیب دفتر کل.',
                en: 'The coded list of all accounts, in ledger order.',
              },
            },
            {
              term: { fa: 'دفتر سه‌ستونی (مانده‌دار)', en: 'Running-balance ledger' },
              def: {
                fa: 'قالبی از دفتر کل با ستون‌های بدهکار، بستانکار و مانده که پس از هر انتقال به‌روز می‌شود.',
                en: 'A ledger format with debit, credit and balance columns, updated after every posting.',
              },
            },
            {
              term: { fa: 'مانده غیرعادی', en: 'Abnormal balance' },
              def: {
                fa: 'مانده‌ای در طرف مخالف مانده عادی حساب؛ مثلاً موجودی نقد بستانکار.',
                en: 'A balance on the opposite side from the account’s normal balance, such as a credit balance in Cash.',
              },
            },
            {
              term: { fa: 'دفتر معین', en: 'Subsidiary ledger' },
              def: {
                fa: 'دفتری تفصیلی (به تفکیک مشتری، فروشنده یا دارایی) که پشتوانه یک حساب کنترل است.',
                en: 'A detailed ledger (by customer, supplier or asset) that supports one control account.',
              },
            },
            {
              term: { fa: 'حساب کنترل', en: 'Control account' },
              def: {
                fa: 'حسابی در دفتر کل که مانده‌اش با جمع مانده‌های یک دفتر معین برابر است.',
                en: 'A general-ledger account whose balance equals the total of a subsidiary ledger.',
              },
            },
            {
              term: { fa: 'فهرست مانده مشتریان', en: 'Schedule of accounts receivable' },
              def: {
                fa: 'فهرست مانده همه کارت‌های مشتریان در یک تاریخ که جمع آن با حساب کنترل مقایسه می‌شود.',
                en: 'A list of every customer balance at a date, whose total is compared with the control account.',
              },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: { fa: 'انتقال به دفتر کل یعنی چه؟', en: 'What is posting?' },
      options: [
        { fa: 'ثبت یک رویداد برای نخستین بار در دفتر روزنامه', en: 'Recording a transaction in the journal for the first time' },
        { fa: 'بردن مبالغ ثبت‌های روزنامه به حساب‌های دفتر کل', en: 'Transferring amounts from journal entries to ledger accounts' },
        { fa: 'تهیه صورت‌های مالی', en: 'Preparing the financial statements' },
        { fa: 'بایگانی مدارک مثبته بر اساس شماره', en: 'Filing source documents by number' },
      ],
      answer: 1,
      explain: {
        fa: 'ثبت در دفتر روزنامه رویداد را ثبت می‌کند؛ انتقال به دفتر کل هر سطر آن را به حساب مربوط در دفتر کل می‌برد تا بتوان مانده‌ها را محاسبه کرد. گزینه اول تعریف ثبت روزنامه است، نه انتقال.',
        en: 'Journalizing records the transaction; posting copies each journal line to the matching ledger account so that balances can be computed. The first option describes journalizing, not posting.',
      },
    },
    {
      q: {
        fa: 'در ثبت روز 3 نوا، موجودی نقد 20,000 بستانکار شده است. این مبلغ به کجا منتقل می‌شود؟',
        en: 'Nova’s Day 3 entry credits Cash 20,000. Where is this amount posted?',
      },
      options: [
        { fa: 'طرف بدهکار حساب تجهیزات', en: 'The debit side of Equipment' },
        { fa: 'طرف بدهکار حساب موجودی نقد', en: 'The debit side of Cash' },
        { fa: 'طرف بستانکار حساب تجهیزات', en: 'The credit side of Equipment' },
        { fa: 'طرف بستانکار حساب موجودی نقد', en: 'The credit side of Cash' },
      ],
      answer: 3,
      explain: {
        fa: 'انتقال هرگز طرف یا حساب را عوض نمی‌کند: بستانکارِ موجودی نقد در دفتر روزنامه، در حساب موجودی نقدِ دفتر کل هم بستانکار ثبت می‌شود. بدهکارِ 20,000 مقابل آن به حساب تجهیزات می‌رود.',
        en: 'Posting never changes the side or the account: a credit to Cash in the journal becomes a credit in the Cash ledger account. The matching 20,000 debit goes to Equipment.',
      },
    },
    {
      q: {
        fa: 'در ستون عطف دفتر روزنامه، کنار موجودی نقد عدد 1010 نوشته شده است. این عدد چه می‌گوید؟',
        en: 'In the journal’s Ref column, the number 1010 appears beside Cash. What does it tell you?',
      },
      options: [
        { fa: 'این سطر به حساب 1010 (موجودی نقد) در دفتر کل منتقل شده است', en: 'The line has been posted to ledger account 1010 (Cash)' },
        { fa: 'شماره مدرک مثبته 1010 است', en: 'The source document is invoice no. 1010' },
        { fa: 'ثبت در صفحه 1010 دفتر روزنامه قرار دارد', en: 'The entry is on journal page 1010' },
        { fa: 'مانده موجودی نقد 1,010 است', en: 'The Cash balance is 1,010' },
      ],
      answer: 0,
      explain: {
        fa: 'کد حساب فقط پس از انتقال در دفتر روزنامه نوشته می‌شود؛ پس هم حساب دفتر کل را مشخص می‌کند و هم ثابت می‌کند این سطر منتقل شده است. شماره صفحه روزنامه در دفتر کل نوشته می‌شود، نه در خود روزنامه.',
        en: 'The account code is written in the journal only after posting, so it both identifies the ledger account and proves the line has been posted. The journal page number is written in the ledger, not in the journal itself.',
      },
    },
    {
      q: {
        fa: 'جمع بدهکار حساب موجودی نقد نوا 75,500 و جمع بستانکار آن 29,200 است. مانده این حساب چیست؟',
        en: 'Nova’s Cash account has total debits of 75,500 and total credits of 29,200. What is its balance?',
      },
      options: [
        { fa: '104,700 بدهکار', en: '104,700 debit' },
        { fa: '29,200 بستانکار', en: '29,200 credit' },
        { fa: '46,300 بدهکار', en: '46,300 debit' },
        { fa: '46,300 بستانکار', en: '46,300 credit' },
      ],
      answer: 2,
      explain: {
        fa: '75,500 − 29,200 = 46,300. طرف بدهکار بزرگ‌تر است، پس مانده بدهکار است؛ همان مانده عادی حساب موجودی نقد. 104,700 حاصل جمع کردن دو طرف است که معنایی ندارد.',
        en: '75,500 − 29,200 = 46,300. The debit side is larger, so the balance is a debit, Cash’s normal balance. 104,700 comes from adding the two sides, which means nothing.',
      },
    },
    {
      q: { fa: 'کدام عبارت درباره قالب‌های دفتر کل درست است؟', en: 'Which statement about ledger formats is correct?' },
      options: [
        { fa: 'حساب T قالبی است که در عمل الزامی است', en: 'T-accounts are the format required in practice' },
        { fa: 'دفتر سه‌ستونی ستون بستانکار ندارد', en: 'A running-balance ledger has no credit column' },
        { fa: 'فقط حساب T از قواعد بدهکار و بستانکار پیروی می‌کند', en: 'Only T-accounts follow the debit and credit rules' },
        { fa: 'در قالب سه‌ستونی، مانده پس از هر انتقال به‌روز می‌شود', en: 'The running-balance format updates the balance after every posting' },
      ],
      answer: 3,
      explain: {
        fa: 'دفتر سه‌ستونی ستون‌های بدهکار، بستانکار و مانده دارد و پس از هر انتقال مانده را نشان می‌دهد. حساب T دقیقاً از همان قواعد پیروی می‌کند، اما بیشتر ابزاری برای آموزش و تحلیل است.',
        en: 'The running-balance (three-column) ledger has debit, credit and balance columns and shows the balance after each posting. T-accounts follow exactly the same rules but are mainly a learning and analysis tool.',
      },
    },
    {
      q: {
        fa: 'مانده حساب کنترل حساب‌های دریافتنی 1,500 است، اما جمع کارت‌های مشتریان در دفتر معین 1,300 است. این اختلاف نشانه چیست؟',
        en: 'The Accounts receivable control account shows 1,500, but the customer cards in the subsidiary ledger total 1,300. What does this suggest?',
      },
      options: [
        { fa: 'هیچ؛ اختلاف‌های کوچک عادی است', en: 'Nothing: small differences are normal' },
        {
          fa: 'احتمالاً انتقالی به مبلغ 200 در یکی از دو جا از قلم افتاده یا نادرست انجام شده است',
          en: 'A 200 posting was probably missed or misposted in one of the two places',
        },
        { fa: 'تراز آزمایشی 200 اختلاف خواهد داشت', en: 'The trial balance will be out of balance by 200' },
        { fa: 'حساب‌های دریافتنی باید در پایان ماه بسته شود', en: 'Accounts receivable must be closed at month-end' },
      ],
      answer: 1,
      explain: {
        fa: 'حساب کنترل همیشه باید با جمع دفتر معین خود برابر باشد. اختلاف 200 یعنی انتقالی به کارت یکی از مشتریان یا به حساب کنترل از قلم افتاده یا نادرست انجام شده است. تراز آزمایشی فقط حساب کنترل را در بر دارد، پس این خطا را آشکار نمی‌کند.',
        en: 'A control account must always equal the total of its subsidiary ledger. A 200 gap means a posting to a customer card or to the control account was skipped or posted wrongly. The trial balance includes only the control account, so it would not reveal this.',
      },
    },
    {
      q: {
        fa: 'حساب‌های پرداختنی در روز 4 مبلغ 3,000 بستانکار و در روز 27 مبلغ 1,500 بدهکار شده است. اگر سپس 800 ملزومات دیگر نسیه خریده شود، مانده حساب چقدر است؟',
        en: 'Accounts payable was credited 3,000 on Day 4 and debited 1,500 on Day 27. If another 800 of supplies is then bought on account, what is the balance?',
      },
      options: [
        { fa: '5,300 بستانکار', en: '5,300 credit' },
        { fa: '700 بدهکار', en: '700 debit' },
        { fa: '2,300 بستانکار', en: '2,300 credit' },
        { fa: '2,300 بدهکار', en: '2,300 debit' },
      ],
      answer: 2,
      explain: {
        fa: 'در حساب بستانکار، بستانکارها مانده را بالا می‌برند و بدهکارها پایین: 3,000 − 1,500 + 800 = 2,300 بستانکار. 5,300 پرداخت روز 27 را به‌جای کم کردن اضافه کرده و 2,300 بدهکار طرف مانده را اشتباه گرفته است.',
        en: 'In a credit-normal account, credits raise the balance and debits lower it: 3,000 − 1,500 + 800 = 2,300 credit. 5,300 adds the Day 27 payment instead of subtracting it, and “2,300 debit” puts the balance on the wrong side.',
      },
    },
    {
      q: {
        fa: 'حساب کنترل حساب‌های دریافتنی 9,000 است و کارت‌های سه مشتری 4,200، 3,100 و 1,250 را نشان می‌دهند. معلوم می‌شود فاکتوری 450 به حساب کنترل منتقل شده، اما به کارت مشتری نه. پس از انتقال آن چه می‌شود؟',
        en: 'The AR control account shows 9,000 and three customer cards show 4,200, 3,100 and 1,250. It turns out a 450 invoice was posted to the control account but not to the customer’s card. What happens once it is posted?',
      },
      options: [
        { fa: 'هر دو 9,000 می‌شوند و مغایرت برطرف می‌شود', en: 'Both show 9,000 and the two agree' },
        { fa: 'هنوز 450 اختلاف باقی می‌ماند', en: 'A 450 difference remains' },
        { fa: 'اختلاف به 900 می‌رسد', en: 'The difference grows to 900' },
        { fa: 'حساب کنترل باید به 8,550 کاهش یابد', en: 'The control account must be reduced to 8,550' },
      ],
      answer: 0,
      explain: {
        fa: 'جمع کارت‌ها 4,200 + 3,100 + 1,250 = 8,550 است و اختلاف 450 دقیقاً همان فاکتور جاافتاده است. با انتقال آن به کارت مشتری، جمع کارت‌ها 9,000 می‌شود. حساب کنترل درست بوده، پس کم کردن آن خطای تازه‌ای می‌سازد.',
        en: 'The cards total 4,200 + 3,100 + 1,250 = 8,550, and the 450 gap is exactly the missing invoice. Posting it to the customer’s card brings the cards to 9,000. The control account was right all along, so reducing it would create a new error.',
      },
    },
    {
      q: {
        fa: 'کدام خطا میان دفتر معین حساب‌های دریافتنی و حساب کنترل اختلاف ایجاد **نمی‌کند**؟',
        en: 'Which error does **not** create a difference between the AR subsidiary ledger and the control account?',
      },
      options: [
        { fa: 'فاکتوری که فقط به حساب کنترل منتقل شده', en: 'An invoice posted only to the control account' },
        { fa: 'وصولی که در کارت مشتری با مبلغ اشتباه ثبت شده', en: 'A receipt entered on a customer card with the wrong amount' },
        { fa: 'وصولی که بستانکار آن در حساب کنترل منتقل نشده', en: 'A receipt whose credit was never posted to the control account' },
        { fa: 'وصولی که با مبلغ درست، به کارت مشتری دیگری منتقل شده', en: 'A receipt posted, for the right amount, to the wrong customer’s card' },
      ],
      answer: 3,
      explain: {
        fa: 'اگر مبلغ درست به کارت مشتری اشتباه برود، یک کارت کم و کارت دیگر به همان اندازه زیاد می‌شود و جمع دفتر معین تغییر نمی‌کند. این خطا فقط با صورت‌حساب مانده مشتریان یا بازبینی کارت‌ها پیدا می‌شود. سه خطای دیگر جمع یکی از دو طرف را تغییر می‌دهند.',
        en: 'If the right amount goes to the wrong customer’s card, one card is too low and another too high by the same amount, so the subsidiary total doesn’t change. Only customer statements or a review of the cards will catch it. The other three errors change one side’s total.',
      },
    },
    {
      q: {
        fa: 'مانده حساب موجودی نقد 12,400 بدهکار است. سپس این مبالغ منتقل می‌شوند: بدهکار 3,600، بستانکار 9,100 و بستانکار 2,000. مانده جدید چقدر است؟',
        en: 'Cash has a 12,400 debit balance. These amounts are then posted: a 3,600 debit, a 9,100 credit and a 2,000 credit. What is the new balance?',
      },
      options: [
        { fa: '27,100 بدهکار', en: '27,100 debit' },
        { fa: '4,900 بدهکار', en: '4,900 debit' },
        { fa: '4,900 بستانکار', en: '4,900 credit' },
        { fa: '8,500 بدهکار', en: '8,500 debit' },
      ],
      answer: 1,
      explain: {
        fa: 'در حساب بدهکار، بدهکارها اضافه و بستانکارها کم می‌شوند: 12,400 + 3,600 − 9,100 − 2,000 = 4,900 بدهکار. 27,100 همه مبالغ را جمع کرده و 8,500 بستانکار 2,000 را جا انداخته است.',
        en: 'In a debit-normal account, debits add and credits subtract: 12,400 + 3,600 − 9,100 − 2,000 = 4,900 debit. 27,100 adds every amount, and 8,500 forgets the 2,000 credit.',
      },
    },
  ],
}
