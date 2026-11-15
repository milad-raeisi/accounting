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

const day = (n: number) => ({ fa: `روز ${n}`, en: `Day ${n}` })
/** Same text in both languages (account numbers, codes). */
const same = (s: string) => ({ fa: s, en: s })
/** Empty table cell. */
const blank = { fa: '', en: '' }
/** Journal page references: J1 / ر1 = page 1 of the general journal. */
const j1 = { fa: 'ر1', en: 'J1' }
const j2 = { fa: 'ر2', en: 'J2' }

const asset = { fa: 'دارایی', en: 'Asset' }
const liability = { fa: 'بدهی', en: 'Liability' }
const debitBal = { fa: 'بدهکار', en: 'Debit' }
const creditBal = { fa: 'بستانکار', en: 'Credit' }

export const lesson: Lesson = {
  slug: 'ledger-posting',
  number: 6,
  level: 'intermediate',
  minutes: 15,
  icon: 'Library',
  tone: 'asset',
  title: { fa: 'انتقال به دفتر کل', en: 'Posting to the Ledger' },
  summary: {
    fa: 'ثبت‌های روزنامه را به دفتر کل منتقل کنید، با شماره عطف دو دفتر را به هم پیوند دهید و مانده حساب‌ها را در قالب حساب T و دفتر سه‌ستونی بخوانید.',
    en: 'Move journal entries into the general ledger, cross-reference the two books with posting references, and read account balances in both T-account and running-balance form.',
  },
  objectives: [
    {
      fa: 'دفتر کل را تعریف کنید و تفاوت آن را با دفتر روزنامه توضیح دهید',
      en: 'Explain what the general ledger is and how it differs from the journal',
    },
    {
      fa: 'ثبت‌های روزنامه را گام‌به‌گام به دفتر کل منتقل کنید و با شماره عطف، ردّ حسابرسی کاملی بسازید',
      en: 'Post journal entries step by step, using posting references to build a complete audit trail',
    },
    {
      fa: 'حساب‌ها را در قالب حساب T و دفتر سه‌ستونی (مانده‌دار) نگهداری کنید',
      en: 'Keep an account in both T-account and running-balance (three-column) format',
    },
    {
      fa: 'مانده حساب‌ها را محاسبه کنید و مانده‌های غیرعادی را تشخیص دهید',
      en: 'Compute account balances and recognize abnormal balances',
    },
    {
      fa: 'رابطه دفترهای معین با حساب‌های کنترل را شرح دهید',
      en: 'Describe how subsidiary ledgers support control accounts',
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
            en: 'Each journal line travels to its own ledger account, debits to the debit side, credits to the credit side.',
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
          caption: {
            fa: 'فهرست حساب‌های نوا (شماره‌های نمونه برای این درس)',
            en: 'Nova’s chart of accounts (illustrative numbers used in this lesson)',
          },
          head: [
            { fa: 'شماره', en: 'No.' },
            { fa: 'حساب', en: 'Account' },
            { fa: 'نوع', en: 'Type' },
            { fa: 'مانده عادی', en: 'Normal balance' },
          ],
          rows: [
            [same('101'), ac.cash, asset, debitBal],
            [same('102'), ac.ar, asset, debitBal],
            [same('103'), ac.supplies, asset, debitBal],
            [same('104'), ac.prepaidInsurance, asset, debitBal],
            [same('110'), ac.equipment, asset, debitBal],
            [same('201'), ac.ap, liability, creditBal],
            [same('202'), ac.loan, liability, creditBal],
            [same('301'), ac.capital, { fa: 'حقوق مالکانه', en: 'Equity' }, creditBal],
            [same('302'), ac.drawings, { fa: 'حقوق مالکانه (کاهنده)', en: 'Equity (reduces capital)' }, debitBal],
            [same('401'), ac.revenue, { fa: 'درآمد', en: 'Revenue' }, creditBal],
            [same('501'), ac.rent, { fa: 'هزینه', en: 'Expense' }, debitBal],
            [same('502'), ac.salaries, { fa: 'هزینه', en: 'Expense' }, debitBal],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'ترتیب حساب‌ها در دفتر کل', en: 'Ledger order' },
          text: {
            fa: 'حساب‌ها در دفتر کل به ترتیب فهرست حساب‌ها می‌آیند: دارایی‌ها، بدهی‌ها، حقوق مالکانه، درآمدها و هزینه‌ها. تراز آزمایشی نیز بعدها با همین ترتیب تهیه می‌شود.',
            en: 'Accounts appear in the ledger in chart-of-accounts order: assets, liabilities, equity, revenue, expenses. The trial balance will later list them in exactly the same order.',
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
                fa: 'حسابی را که در سطر روزنامه آمده پیدا کنید؛ مثلاً تجهیزات (110) برای سطر بدهکار روز 3.',
                en: 'Locate the account named on the journal line, for example, Equipment (110) for the Day 3 debit.',
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
                fa: 'در ستون عطف دفتر کل، شماره صفحه روزنامه را بنویسید (ر1 یعنی صفحه 1 دفتر روزنامه) تا بتوان هر مبلغ را تا ثبت اصلی‌اش دنبال کرد.',
                en: 'In the ledger’s reference column, write the journal page (J1 means page 1 of the general journal) so every amount can be traced back to its entry.',
              },
            },
            {
              title: { fa: 'شماره حساب را در دفتر روزنامه بنویسید', en: 'Write the account number in the journal' },
              text: {
                fa: 'در پایان، شماره حساب دفتر کل را در ستون عطف دفتر روزنامه بنویسید. همین حرکت آخر نشان می‌دهد که این سطر منتقل شده است.',
                en: 'Finally, enter the ledger account number in the journal’s Ref column. This last move is the signal that the line has been posted.',
              },
            },
          ],
        },
        {
          type: 'h',
          text: { fa: 'شماره عطف: ردّی دوطرفه', en: 'Posting references: a two-way trail' },
        },
        {
          type: 'p',
          text: {
            fa: 'شماره‌های عطف دو دفتر را به هم پیوند می‌دهند: دفتر کل به صفحه روزنامه اشاره می‌کند و دفتر روزنامه به شماره حساب دفتر کل. ثبت‌های روز 3 و روز 4 نوا پس از انتقال چنین‌اند:',
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
            [day(3), ac.equipment, same('110'), 20000, blank],
            [blank, ac.cash, same('101'), blank, 20000],
            [
              blank,
              { fa: 'خرید نقدی تجهیزات طراحی', en: 'Bought design equipment for cash' },
              blank,
              blank,
              blank,
            ],
            [day(4), ac.supplies, same('103'), 3000, blank],
            [blank, ac.ap, same('201'), blank, 3000],
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
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در نرم‌افزارهای حسابداری', en: 'In accounting software' },
          text: {
            fa: 'نرم‌افزارهای حسابداری به‌محض ذخیره شدن سند، انتقال را خودکار انجام می‌دهند، اما همین پیوندها را حفظ می‌کنند؛ روی هر سطر دفتر کل کلیک کنید تا سند اصلی باز شود.',
            en: 'Software posts automatically the moment an entry is saved, but it keeps exactly these links, click any ledger line and the original entry opens.',
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
            en: 'Ledger accounts come in two shapes. The **T-account** is a teaching and scratch-pad tool: debits on the left, credits on the right. Real ledgers use the **running-balance (three-column) format**, which adds a balance column, next to debit and credit, that is updated after every posting.',
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
              {
                fa: 'ستون‌ها: تاریخ، شرح، عطف، بدهکار، بستانکار، مانده',
                en: 'Columns: date, explanation, ref, debit, credit, balance',
              },
              { fa: 'مانده پس از هر انتقال به‌روز می‌شود', en: 'The balance is updated after every posting' },
              { fa: 'قالبی که در عمل و در نرم‌افزارها به کار می‌رود', en: 'The format used in practice and in software' },
              { fa: 'مانده را در هر تاریخ دلخواه نشان می‌دهد', en: 'Shows the balance on any date' },
            ],
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'موجودی نقد (101): دفتر سه‌ستونی ماه جاری',
            en: 'Cash (101): running-balance ledger for the month',
          },
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
            fa: 'ستون مانده به پرسش‌هایی پاسخ می‌دهد که از دفتر روزنامه برنمی‌آید: موجودی نقد در روز 2 به اوج 65,000 رسید، پس از پرداخت بیمه در روز 5 به کمترین رقم خود یعنی 43,800 رسید و ماه را با 46,300 به پایان برد.',
            en: 'The balance column answers questions the journal can’t: Cash peaked at 65,000 on Day 2, hit its low of 43,800 after the Day 5 insurance payment, and closed the month at 46,300.',
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
              text: {
                fa: 'تفاوت این دو، مانده حساب است: 46,300.',
                en: 'The difference is the balance: 46,300.',
              },
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
          title: {
            fa: 'استودیو طراحی نوا: دفتر کل پس از انتقال (روز 30)',
            en: 'Nova Design Studio: general ledger after posting (Day 30)',
          },
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
          tone: 'warning',
          title: { fa: 'مانده غیرعادی، زنگ خطر است', en: 'Abnormal balances are red flags' },
          text: {
            fa: 'اگر موجودی نقد مانده بستانکار یا درآمد خدمات مانده بدهکار نشان دهد، پیش از هر چیز به خطای ثبت یا انتقال شک کنید. اضافه‌برداشت واقعی از حساب بانکی استثنایی نادر است.',
            en: 'If Cash ever showed a credit balance, or Service revenue a debit balance, suspect a journalizing or posting error first. A genuine bank overdraft is the rare exception.',
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
            {
              fa: '**دفتر معین حساب‌های دریافتنی**: برای هر مشتری یک حساب.',
              en: '**Accounts receivable ledger**: one account per customer.',
            },
            {
              fa: '**دفتر معین حساب‌های پرداختنی**: برای هر فروشنده یا تأمین‌کننده یک حساب.',
              en: '**Accounts payable ledger**: one account per supplier.',
            },
            {
              fa: '**دفتر معین دارایی‌های ثابت**: برای هر دستگاه، وسیله نقلیه یا رایانه یک ردیف.',
              en: '**Fixed-asset register**: one record per machine, vehicle or computer.',
            },
            {
              fa: '**دفتر معین موجودی کالا**: برای هر کالا یک کارت (در درس موجودی کالا بررسی می‌شود).',
              en: '**Inventory ledger**: one card per product (covered in the inventory lesson).',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'مثال فرضی', en: 'Illustration (hypothetical split)' },
          text: {
            fa: 'فرض کنید صورت‌حساب 4,000 روز 12 نوا برای دو مشتری صادر شده باشد، کافه اطلس 2,500 و کتاب‌فروشی پارسا 1,500، و وجه 2,500 روز 24 از کافه اطلس وصول شده باشد.',
            en: 'Suppose Nova’s Day 12 billing of 4,000 went to two clients, Atlas Café 2,500 and Parsa Books 1,500, and the Day 24 collection of 2,500 came from Atlas Café.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'حساب‌های دریافتنی: دفتر معین در برابر حساب کنترل',
            en: 'Accounts receivable: subsidiary ledger vs control account',
          },
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
            [
              { fa: 'حساب کنترل: حساب‌های دریافتنی (102)', en: 'Control account: Accounts receivable (102)' },
              4000,
              2500,
              1500,
            ],
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
              fa: 'هر سطر را به همان طرف منتقل کنید و سپس شماره عطف را در هر دو دفتر بنویسید.',
              en: 'Post each line to the same side, then write the cross-references in both books.',
            },
            {
              fa: 'قالب سه‌ستونی پس از هر انتقال مانده را نشان می‌دهد؛ موجودی نقد نوا ماه را با 46,300 به پایان می‌برد.',
              en: 'The running-balance format shows the balance after every posting; Nova’s Cash ends the month at 46,300.',
            },
            {
              fa: 'حساب‌های کنترل خلاصه دفترهای معین‌اند و همیشه باید با آن‌ها برابر باشند.',
              en: 'Control accounts summarize subsidiary ledgers and must always agree with them.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'گام بعدی', en: 'What comes next' },
          text: {
            fa: 'اکنون که مانده همه حساب‌ها مشخص است، می‌توانیم آن‌ها را در تراز آزمایشی کنار هم بچینیم و بیازماییم که آیا جمع بدهکارها همچنان با جمع بستانکارها برابر است.',
            en: 'With every account balanced, we can line them up side by side in a trial balance and test whether total debits still equal total credits.',
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
                fa: 'بردن مبالغ ثبت‌های روزنامه به حساب‌های مربوط در دفتر کل.',
                en: 'Transferring journal amounts to the corresponding ledger accounts.',
              },
            },
            {
              term: { fa: 'عطف', en: 'Posting reference' },
              def: {
                fa: 'ارجاع متقابل: شماره صفحه روزنامه در دفتر کل و شماره حساب در دفتر روزنامه.',
                en: 'A cross-reference: the journal page in the ledger, the account number in the journal.',
              },
            },
            {
              term: { fa: 'فهرست حساب‌ها (سرفصل حساب‌ها)', en: 'Chart of accounts' },
              def: {
                fa: 'فهرست شماره‌گذاری‌شده همه حساب‌ها به ترتیب دفتر کل.',
                en: 'The numbered list of all accounts, in ledger order.',
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
        {
          fa: 'بردن مبالغ ثبت‌های روزنامه به حساب‌های دفتر کل',
          en: 'Transferring amounts from journal entries to ledger accounts',
        },
        { fa: 'تهیه صورت‌های مالی', en: 'Preparing the financial statements' },
        { fa: 'بایگانی مدارک مثبته بر اساس شماره', en: 'Filing source documents by number' },
      ],
      answer: 1,
      explain: {
        fa: 'ثبت در دفتر روزنامه رویداد را ثبت می‌کند؛ انتقال به دفتر کل هر سطر آن را به حساب مربوط در دفتر کل می‌برد تا بتوان مانده‌ها را محاسبه کرد.',
        en: 'Journalizing records the transaction; posting copies each journal line to the matching ledger account so that balances can be computed.',
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
        fa: 'در ستون عطف دفتر روزنامه، کنار موجودی نقد عدد 101 نوشته شده است. این عدد چه می‌گوید؟',
        en: 'In the journal’s Ref column, the number 101 appears beside Cash. What does it tell you?',
      },
      options: [
        {
          fa: 'این سطر به حساب شماره 101 (موجودی نقد) در دفتر کل منتقل شده است',
          en: 'The line has been posted to ledger account 101 (Cash)',
        },
        { fa: 'شماره مدرک مثبته 101 است', en: 'The source document is invoice no. 101' },
        { fa: 'ثبت در صفحه 101 دفتر روزنامه قرار دارد', en: 'The entry is on journal page 101' },
        { fa: 'مبلغ باید در 101 ضرب شود', en: 'The amount must be multiplied by 101' },
      ],
      answer: 0,
      explain: {
        fa: 'شماره حساب فقط پس از انتقال در دفتر روزنامه نوشته می‌شود؛ پس هم حساب دفتر کل را مشخص می‌کند و هم ثابت می‌کند این سطر منتقل شده است.',
        en: 'The account number is written in the journal only after posting, so it both identifies the ledger account and proves that the line has been posted.',
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
        fa: '75,500 − 29,200 = 46,300. طرف بدهکار بزرگ‌تر است، پس مانده بدهکار است؛ همان مانده عادی حساب موجودی نقد.',
        en: '75,500 − 29,200 = 46,300. The debit side is larger, so the balance is a debit, Cash’s normal balance.',
      },
    },
    {
      q: {
        fa: 'کدام عبارت درباره قالب‌های دفتر کل درست است؟',
        en: 'Which statement about ledger formats is correct?',
      },
      options: [
        { fa: 'حساب T قالبی است که در عمل الزامی است', en: 'T-accounts are the format required in practice' },
        { fa: 'دفتر سه‌ستونی ستون بستانکار ندارد', en: 'A running-balance ledger has no credit column' },
        {
          fa: 'فقط حساب T از قواعد بدهکار و بستانکار پیروی می‌کند',
          en: 'Only T-accounts follow the debit and credit rules',
        },
        {
          fa: 'در قالب سه‌ستونی، مانده پس از هر انتقال به‌روز می‌شود',
          en: 'The running-balance format updates the balance after every posting',
        },
      ],
      answer: 3,
      explain: {
        fa: 'دفتر سه‌ستونی ستون‌های بدهکار، بستانکار و مانده دارد و پس از هر انتقال مانده را نشان می‌دهد. حساب T دقیقاً از همان قواعد پیروی می‌کند، اما بیشتر ابزاری برای آموزش و تحلیل است.',
        en: 'The running-balance (three-column) ledger has debit, credit and balance columns and shows the balance after each posting. T-accounts follow exactly the same rules but are mainly a learning and analysis tool.',
      },
    },
    {
      q: {
        fa: 'مانده حساب کنترل حساب‌های دریافتنی 1,500 است، اما جمع حساب‌های مشتریان در دفتر معین 1,300 است. این اختلاف نشانه چیست؟',
        en: 'The Accounts receivable control account shows 1,500, but the customer accounts in the subsidiary ledger total 1,300. What does this suggest?',
      },
      options: [
        { fa: 'هیچ؛ اختلاف‌های کوچک عادی است', en: 'Nothing: small differences are normal' },
        {
          fa: 'احتمالاً انتقالی به مبلغ 200 در یکی از دو دفتر از قلم افتاده یا نادرست انجام شده است',
          en: 'A 200 posting was probably missed or misposted in one of the two ledgers',
        },
        { fa: 'تراز آزمایشی 200 اختلاف خواهد داشت', en: 'The trial balance will be out of balance by 200' },
        { fa: 'حساب‌های دریافتنی باید در پایان ماه بسته شود', en: 'Accounts receivable must be closed at month-end' },
      ],
      answer: 1,
      explain: {
        fa: 'حساب کنترل همیشه باید با جمع دفتر معین خود برابر باشد. اختلاف 200 یعنی انتقالی به حساب یکی از مشتریان از قلم افتاده یا نادرست انجام شده است. تراز آزمایشی فقط حساب کنترل را در بر دارد، پس این خطا را آشکار نمی‌کند.',
        en: 'A control account must always equal the total of its subsidiary ledger. A 200 gap means a customer posting was skipped or posted wrongly. The trial balance includes only the control account, so it would not reveal this.',
      },
    },
  ],
}
