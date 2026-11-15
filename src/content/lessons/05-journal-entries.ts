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

export const lesson: Lesson = {
  slug: 'journal-entries',
  number: 5,
  level: 'intermediate',
  minutes: 18,
  icon: 'NotebookPen',
  tone: 'primary',
  title: { fa: 'ثبت در دفتر روزنامه', en: 'Journal Entries' },
  summary: {
    fa: 'می‌آموزید مدارک مثبته چگونه به ثبت روزنامه تبدیل می‌شوند: قالب دفتر روزنامه، روشی چهارمرحله‌ای برای تحلیل هر رویداد مالی، و ثبت کامل رویدادهای ماه نخست استودیو طراحی نوا.',
    en: 'Learn how source documents become journal entries: the general-journal format, a four-step method for analyzing any transaction, and the complete journal for Nova Design Studio’s first month.',
  },
  objectives: [
    {
      fa: 'مدارک مثبته‌ای را که مبنای ثبت روزنامه هستند بشناسید و نقش هر یک را توضیح دهید',
      en: 'Identify the source documents that trigger and support a journal entry',
    },
    {
      fa: 'رویدادهای مالی را در قالب استاندارد دفتر روزنامه ثبت کنید',
      en: 'Record transactions in proper general-journal format',
    },
    {
      fa: 'با تحلیل چهارمرحله‌ای تشخیص دهید کدام حساب بدهکار و کدام بستانکار می‌شود',
      en: 'Apply the four-step analysis to decide which accounts to debit and credit',
    },
    {
      fa: 'ثبت ساده و ثبت مرکب را از هم تمیز دهید و هر دو را تهیه کنید',
      en: 'Distinguish simple from compound entries and prepare both',
    },
    {
      fa: 'رایج‌ترین خطاهای ثبت روزنامه را بشناسید و از آن‌ها پرهیز کنید',
      en: 'Spot and avoid the most common journalizing errors',
    },
  ],
  sections: [
    {
      id: 'documents-and-journal',
      title: { fa: 'از مدرک مثبته تا دفتر روزنامه', en: 'From Source Document to Journal' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'هر ثبت روزنامه با یک مدرک آغاز می‌شود. **مدرک مثبته** (سند پشتیبان) سندی اصلی است که وقوع رویداد مالی را اثبات می‌کند و تاریخ، طرفین و مبلغ آن را نشان می‌دهد. حسابدار بر پایه حافظه یا گفت‌وگو ثبت نمی‌کند؛ مبنای هر ثبت، مدرکی است که حسابرس بعدها بتواند آن را ردیابی کند.',
            en: 'Every journal entry starts with evidence. A **source document** is the original record proving that a transaction happened and showing its date, the parties involved and the amount. Accountants don’t record from memory or conversation, they record from documents that an auditor can later trace.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**فاکتور (صورت‌حساب)**: هنگام فروش نسیه برای مشتری صادر می‌شود یا هنگام خرید نسیه از فروشنده دریافت می‌شود. صورت‌حساب روز 12 نوا و خرید ملزومات در روز 4 هر دو به فاکتور متکی‌اند.',
              en: '**Invoice**: issued to a customer for services sold on account (a sales invoice) or received from a supplier for purchases on account (a purchase invoice). Nova’s Day 12 billing and Day 4 supplies purchase both rest on invoices.',
            },
            {
              fa: '**رسید**: گواه دریافت یا پرداخت وجه نقد؛ مانند رسیدی که نوا در روز 24 به مشتری می‌دهد یا رسیدی که در روز 15 از موجر می‌گیرد.',
              en: '**Receipt**: proof that cash changed hands, such as the receipt Nova gives a customer on Day 24 or the one it gets from the landlord on Day 15.',
            },
            {
              fa: '**صورت‌حساب بانکی**: گزارش بانک از واریزها، برداشت‌ها و کارمزدها. این گزارش آورده سارا، وجه وام و همه پرداخت‌ها را تأیید می‌کند و اقلامی مانند کارمزد بانکی را که هنوز در دفاتر ثبت نشده‌اند آشکار می‌سازد.',
              en: '**Bank statement**: the bank’s record of deposits, withdrawals and charges. It confirms Sara’s investment, the loan proceeds and every payment, and reveals items such as bank fees that the business has not yet recorded.',
            },
            {
              fa: '**سایر مدارک**: قراردادها (مانند قرارداد وام)، لیست حقوق (پرداخت حقوق روز 20)، بیمه‌نامه (روز 5) و یادداشت‌های داخلی برای برداشت مالک.',
              en: '**Other documents**: contracts (the loan agreement), payroll registers (the Day 20 salaries), insurance policies (Day 5) and internal memos for owner withdrawals.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'قاعده طلایی', en: 'The golden rule' },
          text: {
            fa: 'بدون مدرک، ثبتی در کار نیست. هر مدرک مثبته را شماره‌گذاری و بایگانی کنید و شماره‌اش را در شرح ثبت بنویسید تا هر کسی بتواند از ثبت به مدرک برسد.',
            en: 'No document, no entry. Number and file every source document, and cite its number in the entry’s explanation so anyone can travel from the entry back to the evidence.',
          },
        },
        {
          type: 'h',
          text: { fa: 'قالب دفتر روزنامه', en: 'The general journal format' },
        },
        {
          type: 'p',
          text: {
            fa: '**دفتر روزنامه** نخستین دفتری است که رویدادها در آن ثبت می‌شوند: هر رویداد ابتدا به ترتیب تاریخ در این دفتر می‌آید و سپس به حساب‌ها منتقل می‌شود. هر ثبت، روایتی کامل و مستقل است: چه اتفاقی افتاد، کدام حساب‌ها تغییر کردند و به چه مبلغی.',
            en: 'The **general journal** is the book of original entry: every transaction is recorded here first, in date order, before it reaches any account. Each entry is a complete, self-contained story, what happened, which accounts changed, and by how much.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'ستون‌های دفتر روزنامه', en: 'The columns of the general journal' },
          head: [
            { fa: 'ستون', en: 'Column' },
            { fa: 'محتوا', en: 'What goes there' },
          ],
          rows: [
            [
              { fa: 'تاریخ', en: 'Date' },
              {
                fa: 'زمان وقوع رویداد (در مثال ما: روز 1 تا روز 30).',
                en: 'When the transaction occurred (in our example: Day 1 to Day 30).',
              },
            ],
            [
              { fa: 'عنوان حساب‌ها', en: 'Account titles' },
              {
                fa: 'ابتدا حساب بدهکار در آغاز سطر؛ سپس حساب بستانکار در سطر بعد و با تورفتگی.',
                en: 'Debited account(s) first, flush left; credited account(s) on the following line(s), indented.',
              },
            ],
            [
              { fa: 'عطف', en: 'Reference (Ref)' },
              {
                fa: 'در آغاز خالی می‌ماند و هنگام انتقال به دفتر کل، شماره حساب در آن نوشته می‌شود.',
                en: 'Left blank at first; filled in with the ledger account number when the line is posted.',
              },
            ],
            [
              { fa: 'بدهکار', en: 'Debit' },
              { fa: 'مبلغ هر سطر بدهکار.', en: 'The amount of each debit line.' },
            ],
            [
              { fa: 'بستانکار', en: 'Credit' },
              { fa: 'مبلغ هر سطر بستانکار.', en: 'The amount of each credit line.' },
            ],
            [
              { fa: 'شرح', en: 'Explanation' },
              {
                fa: 'توضیحی کوتاه درباره رویداد، همراه با شماره مدرک مثبته.',
                en: 'A brief description of the transaction, citing the source document.',
              },
            ],
          ],
        },
      ],
    },
    {
      id: 'four-step-analysis',
      title: { fa: 'تحلیل چهارمرحله‌ای هر رویداد', en: 'The Four-Step Analysis' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'پیش از نوشتن هر عددی، رویداد را تحلیل کنید. این چهار پرسش برای هر رویدادی کارساز است؛ از خرید یک بسته کاغذ تا ادغام دو شرکت بزرگ.',
            en: 'Before writing a single number, analyze the transaction. These four questions work for every transaction you will ever meet, from buying a ream of paper to a corporate merger.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'کدام حساب‌ها درگیرند؟', en: 'Which accounts are affected?' },
              text: {
                fa: 'مدرک مثبته را بخوانید و دست‌کم دو حساب را نام ببرید. هر رویداد یک طرفِ دادن و یک طرفِ گرفتن دارد؛ جوهر حسابداری دوطرفه همین است.',
                en: 'Read the source document and name at least two accounts. Every transaction has a give and a take, that is the essence of double entry.',
              },
            },
            {
              title: { fa: 'هر حساب از چه نوعی است؟', en: 'What type is each account?' },
              text: {
                fa: 'هر حساب را در یکی از گروه‌های دارایی، بدهی، حقوق مالکانه (سرمایه یا برداشت)، درآمد یا هزینه طبقه‌بندی کنید.',
                en: 'Classify each one as an asset, liability, equity (capital or drawings), revenue or expense.',
              },
            },
            {
              title: { fa: 'افزایش یا کاهش؟', en: 'Increase or decrease?' },
              text: {
                fa: 'جهت تغییر هر حساب را مشخص کنید. پرداخت وجه نقد یعنی کاهش یک دارایی، و پذیرفتن یک تعهد تازه یعنی افزایش بدهی.',
                en: 'Decide the direction of change for each account. Paying cash decreases an asset; taking on a new obligation increases a liability.',
              },
            },
            {
              title: { fa: 'بدهکار یا بستانکار؟', en: 'Debit or credit?' },
              text: {
                fa: 'قواعد را به کار ببرید: دارایی، هزینه و برداشت با بدهکار شدن افزایش می‌یابند؛ بدهی، سرمایه و درآمد با بستانکار شدن. در پایان مطمئن شوید جمع بدهکارها با جمع بستانکارها برابر است.',
                en: 'Apply the rules: assets, expenses and drawings increase with a debit; liabilities, capital and revenue increase with a credit. Finally, confirm that total debits equal total credits.',
              },
            },
          ],
        },
        {
          type: 'diagram',
          id: 'debit-credit-rules',
          caption: {
            fa: 'قواعد بدهکار و بستانکار که در مرحله چهارم به کار می‌روند.',
            en: 'The debit and credit rules you apply in step 4.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'تحلیل چهارمرحله‌ای چهار رویداد استودیو نوا',
            en: 'The four-step analysis applied to four Nova transactions',
          },
          head: [
            { fa: 'رویداد', en: 'Transaction' },
            { fa: 'حساب‌ها', en: 'Accounts' },
            { fa: 'نوع', en: 'Type' },
            { fa: 'تغییر', en: 'Change' },
            { fa: 'ثبت', en: 'Entry' },
          ],
          rows: [
            [
              { fa: 'روز 4: خرید نسیه ملزومات، 3,000', en: 'Day 4: supplies on account, 3,000' },
              { fa: 'ملزومات · حساب‌های پرداختنی', en: 'Supplies · Accounts payable' },
              { fa: 'دارایی · بدهی', en: 'Asset · Liability' },
              { fa: 'افزایش · افزایش', en: 'Increase · Increase' },
              {
                fa: 'بدهکار ملزومات / بستانکار حساب‌های پرداختنی',
                en: 'Dr Supplies / Cr Accounts payable',
              },
            ],
            [
              { fa: 'روز 8: درآمد نقدی، 8,000', en: 'Day 8: cash revenue, 8,000' },
              { fa: 'موجودی نقد · درآمد خدمات', en: 'Cash · Service revenue' },
              { fa: 'دارایی · درآمد', en: 'Asset · Revenue' },
              { fa: 'افزایش · افزایش', en: 'Increase · Increase' },
              { fa: 'بدهکار موجودی نقد / بستانکار درآمد خدمات', en: 'Dr Cash / Cr Service revenue' },
            ],
            [
              { fa: 'روز 27: پرداخت به فروشنده، 1,500', en: 'Day 27: pays supplier, 1,500' },
              { fa: 'حساب‌های پرداختنی · موجودی نقد', en: 'Accounts payable · Cash' },
              { fa: 'بدهی · دارایی', en: 'Liability · Asset' },
              { fa: 'کاهش · کاهش', en: 'Decrease · Decrease' },
              {
                fa: 'بدهکار حساب‌های پرداختنی / بستانکار موجودی نقد',
                en: 'Dr Accounts payable / Cr Cash',
              },
            ],
            [
              { fa: 'روز 30: برداشت سارا، 1,000', en: 'Day 30: Sara withdraws, 1,000' },
              { fa: 'برداشت · موجودی نقد', en: 'Drawings · Cash' },
              { fa: 'حقوق مالکانه (برداشت) · دارایی', en: 'Equity (drawings) · Asset' },
              { fa: 'افزایش · کاهش', en: 'Increase · Decrease' },
              { fa: 'بدهکار برداشت / بستانکار موجودی نقد', en: 'Dr Drawings / Cr Cash' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'مراقب حساب برداشت باشید', en: 'Watch the drawings trap' },
          text: {
            fa: 'برداشت حقوق مالکانه را کاهش می‌دهد، اما خودِ حساب برداشت با **بدهکار** شدن افزایش می‌یابد. برداشت را قرینه سرمایه در نظر بگیرید: سرمایه در طرف بستانکار رشد می‌کند، پس برداشت در طرف بدهکار.',
            en: 'Drawings reduce equity, yet the Drawings account itself **increases with a debit**. Think of Drawings as the mirror image of Capital: Capital grows on the credit side, so Drawings grows on the debit side.',
          },
        },
      ],
    },
    {
      id: 'journalizing-nova',
      title: { fa: 'ثبت رویدادهای استودیو طراحی نوا', en: 'Journalizing Nova Design Studio' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'سارا این ماه **استودیو طراحی نوا** را راه‌اندازی کرده است. در ادامه، هر 12 رویداد مثال پیوسته در دفتر روزنامه ثبت شده‌اند. شرح هر ثبت را بخوانید، چهار مرحله تحلیل را در ذهن مرور کنید و سپس ثبت را بررسی کنید.',
            en: 'Sara opened **Nova Design Studio** this month. Below, all 12 transactions of the running example are journalized. Read each explanation, run the four steps in your head, then check the entry.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          text: {
            fa: 'دفتر روزنامه واقعی یکپارچه و به ترتیب تاریخ است. ما آن را فقط برای خوانایی به سه بخش تقسیم کرده‌ایم و ترتیب تاریخ‌ها همچنان حفظ شده است.',
            en: 'A real journal is one continuous, strictly chronological record. We split it into three blocks only for readability, the dates still run in order.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'تأمین مالی و سرمایه‌گذاری (روزهای 1 تا 3)', en: 'Financing and investing (Days 1–3)' },
          entries: [
            {
              date: day(1),
              lines: [
                { account: ac.cash, debit: 50000 },
                { account: ac.capital, credit: 50000 },
              ],
              memo: {
                fa: 'سارا برای راه‌اندازی کسب‌وکار وجه نقد سرمایه‌گذاری کرد (طبق فیش واریز بانکی).',
                en: 'Sara invested cash to start the business (bank deposit slip).',
              },
            },
            {
              date: day(2),
              lines: [
                { account: ac.cash, debit: 15000 },
                { account: ac.loan, credit: 15000 },
              ],
              memo: {
                fa: 'دریافت وام بانکی با نرخ بهره سالانه 12٪ (طبق قرارداد وام).',
                en: 'Received a bank loan at 12% annual interest (loan agreement).',
              },
            },
            {
              date: day(3),
              lines: [
                { account: ac.equipment, debit: 20000 },
                { account: ac.cash, credit: 20000 },
              ],
              memo: {
                fa: 'خرید نقدی تجهیزات طراحی با عمر مفید 5 سال و ارزش اسقاط 2,000 (طبق فاکتور فروشنده).',
                en: 'Bought design equipment for cash; 5-year useful life, 2,000 salvage value (supplier invoice).',
              },
            },
          ],
        },
        {
          type: 'journal',
          title: { fa: 'خریدها و پیش‌پرداخت‌ها (روزهای 4 و 5)', en: 'Purchases and prepayments (Days 4–5)' },
          entries: [
            {
              date: day(4),
              lines: [
                { account: ac.supplies, debit: 3000 },
                { account: ac.ap, credit: 3000 },
              ],
              memo: {
                fa: 'خرید نسیه ملزومات (طبق فاکتور خرید).',
                en: 'Bought supplies on account (purchase invoice).',
              },
            },
            {
              date: day(5),
              lines: [
                { account: ac.prepaidInsurance, debit: 1200 },
                { account: ac.cash, credit: 1200 },
              ],
              memo: {
                fa: 'پرداخت پیشاپیش حق بیمه 12 ماهه (طبق بیمه‌نامه و رسید).',
                en: 'Paid a 12-month insurance policy in advance (policy and receipt).',
              },
            },
          ],
        },
        {
          type: 'journal',
          title: {
            fa: 'عملیات، وصول مطالبات و برداشت (روزهای 8 تا 30)',
            en: 'Operations, collections and withdrawals (Days 8–30)',
          },
          entries: [
            {
              date: day(8),
              lines: [
                { account: ac.cash, debit: 8000 },
                { account: ac.revenue, credit: 8000 },
              ],
              memo: {
                fa: 'ارائه خدمات طراحی به‌صورت نقدی (طبق رسید دریافت).',
                en: 'Performed design services for cash (cash receipt).',
              },
            },
            {
              date: day(12),
              lines: [
                { account: ac.ar, debit: 4000 },
                { account: ac.revenue, credit: 4000 },
              ],
              memo: {
                fa: 'ارائه خدمات به‌صورت نسیه (طبق فاکتور فروش).',
                en: 'Performed services on account (sales invoice).',
              },
            },
            {
              date: day(15),
              lines: [
                { account: ac.rent, debit: 2500 },
                { account: ac.cash, credit: 2500 },
              ],
              memo: {
                fa: 'پرداخت اجاره استودیو برای ماه جاری (طبق رسید موجر).',
                en: 'Paid this month’s studio rent (landlord’s receipt).',
              },
            },
            {
              date: day(20),
              lines: [
                { account: ac.salaries, debit: 3000 },
                { account: ac.cash, credit: 3000 },
              ],
              memo: {
                fa: 'پرداخت حقوق کارکنان (طبق لیست حقوق).',
                en: 'Paid employee salaries (payroll register).',
              },
            },
            {
              date: day(24),
              lines: [
                { account: ac.cash, debit: 2500 },
                { account: ac.ar, credit: 2500 },
              ],
              memo: {
                fa: 'وصول بخشی از طلب روز 12 از مشتریان (طبق رسید دریافت).',
                en: 'Collected part of the Day 12 receivable from customers (cash receipt).',
              },
            },
            {
              date: day(27),
              lines: [
                { account: ac.ap, debit: 1500 },
                { account: ac.cash, credit: 1500 },
              ],
              memo: {
                fa: 'پرداخت بخشی از بدهی خرید ملزومات (طبق رسید فروشنده).',
                en: 'Paid part of the amount owed for supplies (supplier’s receipt).',
              },
            },
            {
              date: day(30),
              lines: [
                { account: ac.drawings, debit: 1000 },
                { account: ac.cash, credit: 1000 },
              ],
              memo: {
                fa: 'برداشت وجه نقد توسط سارا برای مصارف شخصی (طبق یادداشت برداشت).',
                en: 'Sara withdrew cash for personal use (withdrawal memo).',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'خودآزمایی', en: 'Self-check' },
          text: {
            fa: 'همه مبالغ بدهکار این 12 ثبت را جمع بزنید: 111,700. همه مبالغ بستانکار را هم جمع بزنید: 111,700. برابری جمع‌ها ثابت نمی‌کند همه ثبت‌ها درست‌اند، اما نابرابری‌شان قطعاً نشانه خطاست.',
            en: 'Add every debit in the 12 entries: 111,700. Add every credit: 111,700. Equal totals don’t prove every entry is right, but unequal totals prove that something is wrong.',
          },
        },
      ],
    },
    {
      id: 'compound-entries',
      title: { fa: 'ثبت ساده و ثبت مرکب', en: 'Simple vs Compound Entries' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'هر 12 ثبت نوا **ثبت ساده** هستند: دقیقاً یک حساب بدهکار و یک حساب بستانکار. وقتی یک رویداد بر سه حساب یا بیشتر اثر می‌گذارد، آن را در قالب یک **ثبت مرکب** ثبت کنید، نه اینکه به چند تکه ساختگی بشکنید.',
            en: 'All 12 of Nova’s entries are **simple entries**: exactly one debit and one credit. When a single transaction affects three or more accounts, record it as one **compound entry** rather than splitting it into artificial pieces.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'ثبت ساده', en: 'Simple entry' },
            items: [
              { fa: 'یک سطر بدهکار و یک سطر بستانکار', en: 'One debit line and one credit line' },
              { fa: 'مبلغ بدهکار با مبلغ بستانکار برابر است', en: 'The debit amount equals the credit amount' },
              {
                fa: 'مثال: روز 15: بدهکار هزینه اجاره / بستانکار موجودی نقد',
                en: 'Example: Day 15: Dr Rent expense / Cr Cash',
              },
            ],
          },
          right: {
            title: { fa: 'ثبت مرکب', en: 'Compound entry' },
            items: [
              {
                fa: 'سه سطر یا بیشتر: دو بدهکار یا بیشتر، دو بستانکار یا بیشتر، یا هر دو',
                en: 'Three or more lines: two or more debits, two or more credits, or both',
              },
              {
                fa: 'جمع بدهکارها با جمع بستانکارها برابر است، نه تک‌تک سطرها',
                en: 'Total debits equal total credits, individual lines need not match',
              },
              {
                fa: 'یک رویداد را در یک ثبت و با یک شرح نگه می‌دارد',
                en: 'Keeps one transaction in one entry, under one explanation',
              },
            ],
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: {
            fa: 'مثال جداگانه: جزو مثال پیوسته نوا نیست',
            en: 'Separate illustration: not part of Nova’s running example',
          },
          text: {
            fa: 'استودیوی دیگری یک چاپگر عریض به بهای 12,000 می‌خرد. 4,000 را همان روز نقداً می‌پردازد و متعهد می‌شود 8,000 باقی‌مانده را ظرف 60 روز به فروشنده بپردازد.',
            en: 'Another studio buys a large-format printer costing 12,000. It pays 4,000 in cash today and agrees to pay the remaining 8,000 to the supplier within 60 days.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت مرکب (مثال جداگانه)', en: 'Compound entry (separate illustration)' },
          entries: [
            {
              lines: [
                { account: ac.equipment, debit: 12000 },
                { account: ac.cash, credit: 4000 },
                { account: ac.ap, credit: 8000 },
              ],
              memo: {
                fa: 'خرید چاپگر؛ بخشی نقد و بخشی نسیه (طبق فاکتور فروشنده).',
                en: 'Bought a printer, part cash and part on account (supplier invoice).',
              },
            },
          ],
        },
        {
          type: 'analysis',
          title: { fa: 'اثر ثبت مرکب بر معادله حسابداری', en: 'Effect of the compound entry on the accounting equation' },
          rows: [
            {
              tx: {
                fa: 'افزایش تجهیزات 12,000 و کاهش موجودی نقد 4,000؛ افزایش حساب‌های پرداختنی 8,000',
                en: 'Equipment +12,000 and Cash −4,000; Accounts payable +8,000',
              },
              assets: 8000,
              liabilities: 8000,
            },
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'جمع بدهکارها = جمع بستانکارها: 12,000 = 4,000 + 8,000',
            en: 'Σ Debits = Σ Credits: 12,000 = 4,000 + 8,000',
          },
          note: {
            fa: 'در ثبت مرکب، برابری روی جمع‌ها سنجیده می‌شود، نه سطر به سطر.',
            en: 'In a compound entry the equality test applies to the totals, not line by line.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'رویدادهای نامرتبط را ادغام نکنید', en: 'Don’t bundle unrelated transactions' },
          text: {
            fa: 'ثبت مرکب برای یک رویداد است. ادغام اجاره روز 15 و حقوق روز 20 در یک ثبت، دو رویداد و دو مدرک جداگانه را پنهان می‌کند و ردیابی را دشوار می‌سازد.',
            en: 'A compound entry describes one transaction. Combining the Day 15 rent and the Day 20 salaries into one entry would hide two separate events and two separate documents, and make both harder to trace.',
          },
        },
      ],
    },
    {
      id: 'common-errors',
      title: { fa: 'خطاهای رایج در ثبت روزنامه', en: 'Common Journalizing Errors' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'بیشتر خطاهای ثبت روزنامه از نادیده گرفتن یکی از چهار مرحله تحلیل ناشی می‌شوند. در اینجا رایج‌ترین آن‌ها را، با نمونه‌هایی از رویدادهای نوا، می‌بینید.',
            en: 'Most journalizing mistakes come from skipping one of the four steps. Here are the ones instructors see most often, each illustrated with a Nova transaction.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**جابه‌جا کردن بدهکار و بستانکار**: مثلاً ثبت روز 27 به‌صورت بدهکار موجودی نقد / بستانکار حساب‌های پرداختنی؛ هر دو حساب در جهت نادرست تغییر می‌کنند.',
              en: '**Reversing debit and credit**: e.g., recording Day 27 as Dr Cash / Cr Accounts payable. Both accounts move the wrong way.',
            },
            {
              fa: '**هزینه کردن یک دارایی**: بدهکار کردن حساب هزینه برای خرید تجهیزات روز 3 یا بیمه روز 5. منافع هر دو فراتر از ماه جاری است، پس فعلاً دارایی به شمار می‌آیند.',
              en: '**Expensing an asset**: debiting an expense for the Day 3 equipment or the Day 5 insurance. Both provide benefits beyond this month, so for now they are assets.',
            },
            {
              fa: '**ثبت وصول طلب به‌عنوان درآمد**: وجهی که در روز 24 وصول شد درآمد تازه‌ای نیست؛ درآمد آن در روز 12 ثبت شده بود. حساب‌های دریافتنی را بستانکار کنید، نه درآمد خدمات را.',
              en: '**Recording a collection as revenue**: the Day 24 collection is not new revenue; that revenue was recorded on Day 12. Credit Accounts receivable, not Service revenue.',
            },
            {
              fa: '**هزینه دانستن برداشت**: برداشت روز 30 سارا انتقال منابع به مالک است، نه هزینه‌ای برای کسب درآمد.',
              en: '**Treating drawings as an expense**: Sara’s Day 30 withdrawal is a distribution to the owner, not a cost of earning revenue.',
            },
            {
              fa: '**اشتباه گرفتن نقد و نسیه**: بستانکار کردن موجودی نقد برای خرید ملزومات روز 4، در حالی که هنوز وجهی پرداخت نشده و فاکتور نسیه است.',
              en: '**Confusing cash and credit**: crediting Cash for the Day 4 supplies when nothing has been paid yet; the invoice says “on account”.',
            },
            {
              fa: '**مبالغ نابرابر یا اشتباه تایپی**: نوشتن 8,000 به‌صورت 800 یا 80,000، یا وارد کردن مبالغ متفاوت در دو طرف ثبت.',
              en: '**Unequal or mistyped amounts**: writing 8,000 as 800 or 80,000, or entering different amounts on the two sides.',
            },
            {
              fa: '**درهم آمیختن امور شخصی و تجاری**: ثبت خریدهای شخصی سارا در دفاتر نوا با مفهوم شخصیت مستقل واحد تجاری مغایر است.',
              en: '**Mixing personal and business affairs**: recording Sara’s personal purchases in Nova’s books violates the business-entity concept.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'بازبینی ده‌ثانیه‌ای هر ثبت', en: 'A 10-second check for every entry' },
          text: {
            fa: 'آیا جمع بدهکارها با جمع بستانکارها برابر است؟ آیا هر حساب در همان جهتی تغییر کرده که مدرک نشان می‌دهد؟ آیا شرح و شماره مدرک نوشته شده است؟ اگر پاسخ هر سه پرسش مثبت است، سراغ ثبت بعدی بروید.',
            en: 'Do debits equal credits? Does each account move in the direction the document describes? Is there an explanation with a document number? If all three answers are yes, move on.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'خطا در دفتر روزنامه نمی‌ماند', en: 'Errors don’t stay in the journal' },
          text: {
            fa: 'هر خطایی در دفتر روزنامه، بی‌کم‌وکاست به دفتر کل، تراز آزمایشی و صورت‌های مالی منتقل می‌شود. اصلاح آن در همین مرحله کم‌هزینه‌ترین راه است.',
            en: 'Whatever is wrong in the journal is copied faithfully into the ledger, the trial balance and the financial statements. Fixing it here is always the cheapest option.',
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
              fa: 'مدارک مثبته، شواهد و داده‌های لازم برای هر ثبت را فراهم می‌کنند.',
              en: 'Source documents provide both the evidence and the data for every entry.',
            },
            {
              fa: 'دفتر روزنامه رویدادها را به ترتیب تاریخ ثبت می‌کند: تاریخ، حساب‌ها، بدهکار، بستانکار، عطف و شرح.',
              en: 'The general journal records transactions chronologically: date, accounts, debit, credit, reference and explanation.',
            },
            {
              fa: 'چهار پرسش، کدام حساب‌ها، چه نوعی، افزایش یا کاهش، بدهکار یا بستانکار، کلید تحلیل هر رویدادی است.',
              en: 'Four questions, which accounts, what type, increase or decrease, debit or credit, unlock any transaction.',
            },
            {
              fa: 'ثبت مرکب سه سطر یا بیشتر دارد و فقط جمع دو طرف آن باید برابر باشد.',
              en: 'A compound entry has three or more lines; only its totals must balance.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'گام بعدی', en: 'What comes next' },
          text: {
            fa: 'دفتر روزنامه ماجرا را به ترتیب زمان روایت می‌کند، اما نمی‌گوید نوا اکنون چقدر وجه نقد دارد. برای پاسخ به این پرسش، هر سطر را به دفتر کل منتقل می‌کنیم؛ موضوع درس بعد.',
            en: 'The journal tells the story in time order, but it can’t tell you how much cash Nova has right now. For that we post every line to the ledger, the subject of the next lesson.',
          },
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'مدرک مثبته (سند پشتیبان)', en: 'Source document' },
              def: {
                fa: 'سند اصلی اثبات‌کننده وقوع رویداد؛ مانند فاکتور، رسید، صورت‌حساب بانکی یا قرارداد.',
                en: 'Original evidence of a transaction, such as an invoice, receipt, bank statement or contract.',
              },
            },
            {
              term: { fa: 'دفتر روزنامه', en: 'General journal' },
              def: {
                fa: 'نخستین دفتر ثبت، که رویدادها در آن به ترتیب تاریخ ثبت می‌شوند.',
                en: 'The book of original entry, where transactions are recorded in chronological order.',
              },
            },
            {
              term: { fa: 'ثبت روزنامه (سند حسابداری)', en: 'Journal entry' },
              def: {
                fa: 'ثبت تاریخ‌دار یک رویداد که حساب‌های بدهکار و بستانکار، مبالغ و شرح را نشان می‌دهد.',
                en: 'A dated record of one transaction showing the accounts debited and credited, the amounts and an explanation.',
              },
            },
            {
              term: { fa: 'تحلیل چهارمرحله‌ای', en: 'Four-step analysis' },
              def: {
                fa: 'پرسش‌های پیاپی برای تعیین حساب‌ها، نوع آن‌ها، جهت تغییر و طرف بدهکار یا بستانکار.',
                en: 'A sequence of questions that identifies the accounts, their types, the direction of change and the debit or credit side.',
              },
            },
            {
              term: { fa: 'ثبت مرکب', en: 'Compound entry' },
              def: {
                fa: 'ثبتی که سه حساب یا بیشتر را درگیر می‌کند و جمع بدهکار و بستانکار آن برابر است.',
                en: 'An entry involving three or more accounts whose total debits equal total credits.',
              },
            },
            {
              term: { fa: 'شرح ثبت', en: 'Explanation' },
              def: {
                fa: 'توضیح کوتاه زیر هر ثبت که معمولاً به مدرک مثبته اشاره می‌کند.',
                en: 'A brief description beneath an entry, usually citing the source document.',
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
        fa: 'کدام مدرک بهترین پشتوانه ثبت روز 12 نوا (ارائه خدمات به‌صورت نسیه) است؟',
        en: 'Which document best supports Nova’s Day 12 entry (services performed on account)?',
      },
      options: [
        { fa: 'صورت‌حساب بانکی', en: 'The bank statement' },
        { fa: 'رسید دریافت وجه نقد', en: 'A cash receipt' },
        { fa: 'فاکتور فروشی که برای مشتری صادر شده است', en: 'The sales invoice issued to the customer' },
        { fa: 'لیست حقوق', en: 'The payroll register' },
      ],
      answer: 2,
      explain: {
        fa: 'پشتوانه خدمات نسیه، فاکتور فروشی است که نوا صادر می‌کند: نشان می‌دهد کار صورت‌حساب شده، مشتری را معرفی می‌کند و مبلغ طلب را مشخص می‌سازد. وجه نقدی جابه‌جا نشده، پس هنوز رسید یا واریز بانکی در کار نیست.',
        en: 'Services sold on account are evidenced by the sales invoice Nova issues: it proves the work was billed, names the customer and states the amount owed. No cash changed hands, so there is no receipt or bank deposit yet.',
      },
    },
    {
      q: {
        fa: 'در قالب استاندارد دفتر روزنامه، حساب بستانکار کجا نوشته می‌شود؟',
        en: 'In standard general-journal format, where is the credited account written?',
      },
      options: [
        { fa: 'در همان سطر حساب بدهکار', en: 'On the same line as the debited account' },
        { fa: 'در سطر بعد از حساب بدهکار و با تورفتگی', en: 'On the line below the debit, indented' },
        { fa: 'بالای حساب بدهکار', en: 'Above the debited account' },
        { fa: 'فقط در شرح ثبت', en: 'Only in the explanation' },
      ],
      answer: 1,
      explain: {
        fa: 'ابتدا حساب بدهکار در آغاز سطر نوشته می‌شود و حساب بستانکار در سطر بعد با تورفتگی می‌آید تا خواننده حتی بدون نگاه به ستون مبالغ، دو طرف ثبت را از هم تشخیص دهد.',
        en: 'Debits come first, flush left; credits follow on the next line, indented, so a reader can tell the two sides apart even without looking at the amount columns.',
      },
    },
    {
      q: {
        fa: 'نوا در روز 27 مبلغ 1,500 به فروشنده‌ای می‌پردازد که در روز 4 از او ملزومات نسیه خریده بود. ثبت درست کدام است؟',
        en: 'On Day 27 Nova pays 1,500 to the supplier it bought supplies from on Day 4. Which entry is correct?',
      },
      options: [
        {
          fa: 'بدهکار موجودی نقد 1,500 / بستانکار حساب‌های پرداختنی 1,500',
          en: 'Dr Cash 1,500 / Cr Accounts payable 1,500',
        },
        { fa: 'بدهکار ملزومات 1,500 / بستانکار موجودی نقد 1,500', en: 'Dr Supplies 1,500 / Cr Cash 1,500' },
        {
          fa: 'بدهکار هزینه ملزومات 1,500 / بستانکار موجودی نقد 1,500',
          en: 'Dr Supplies expense 1,500 / Cr Cash 1,500',
        },
        {
          fa: 'بدهکار حساب‌های پرداختنی 1,500 / بستانکار موجودی نقد 1,500',
          en: 'Dr Accounts payable 1,500 / Cr Cash 1,500',
        },
      ],
      answer: 3,
      explain: {
        fa: 'این پرداخت بخشی از یک بدهی را تسویه می‌کند (حساب‌های پرداختنی بدهکار می‌شود تا کاهش یابد) و یک دارایی را کم می‌کند (موجودی نقد بستانکار می‌شود). خودِ ملزومات در روز 4 ثبت شده‌اند؛ بدهکار کردن دوباره آن‌ها یعنی دو بار شمردنشان.',
        en: 'The payment settles part of a liability (debit Accounts payable to decrease it) and reduces an asset (credit Cash). The supplies themselves were recorded on Day 4, debiting Supplies again would count them twice.',
      },
    },
    {
      q: {
        fa: 'کدام رویداد به ثبت مرکب نیاز دارد؟',
        en: 'Which transaction calls for a compound entry?',
      },
      options: [
        {
          fa: 'خرید چاپگری به بهای 12,000: مبلغ 4,000 نقد و 8,000 نسیه',
          en: 'Buying a 12,000 printer: 4,000 in cash and 8,000 on account',
        },
        { fa: 'پرداخت نقدی 2,500 بابت اجاره', en: 'Paying 2,500 of rent in cash' },
        { fa: 'وصول 2,500 از یک مشتری', en: 'Collecting 2,500 from a customer' },
        { fa: 'برداشت 1,000 توسط سارا برای مصارف شخصی', en: 'Sara withdrawing 1,000 for personal use' },
      ],
      answer: 0,
      explain: {
        fa: 'خرید چاپگر سه حساب را درگیر می‌کند: تجهیزات (بدهکار 12,000)، موجودی نقد (بستانکار 4,000) و حساب‌های پرداختنی (بستانکار 8,000). هر یک از گزینه‌های دیگر دقیقاً دو حساب را درگیر می‌کنند.',
        en: 'The printer purchase affects three accounts, Equipment (debit 12,000), Cash (credit 4,000) and Accounts payable (credit 8,000). Each of the other transactions touches exactly two accounts.',
      },
    },
    {
      q: {
        fa: 'دانشجویی وصول روز 24 نوا را به‌صورت «بدهکار موجودی نقد 2,500 / بستانکار درآمد خدمات 2,500» ثبت می‌کند. نتیجه چیست؟',
        en: 'A student records Nova’s Day 24 collection as Dr Cash 2,500 / Cr Service revenue 2,500. What is the result?',
      },
      options: [
        {
          fa: 'ثبت قابل قبول است، چون وجه نقد دریافت شده است',
          en: 'The entry is acceptable because cash was received',
        },
        { fa: 'موجودی نقد 2,500 کمتر از واقع نشان داده می‌شود', en: 'Cash is understated by 2,500' },
        {
          fa: 'درآمد خدمات و حساب‌های دریافتنی هر دو 2,500 بیش از واقع نشان داده می‌شوند',
          en: 'Service revenue and Accounts receivable are both overstated by 2,500',
        },
        { fa: 'بدهی‌ها 2,500 بیش از واقع نشان داده می‌شوند', en: 'Liabilities are overstated by 2,500' },
      ],
      answer: 2,
      explain: {
        fa: 'درآمد این خدمت در روز 12 ثبت شده بود. بستانکار کردن دوباره درآمد یعنی دو بار شمردن آن؛ و چون حساب‌های دریافتنی بستانکار نشده، مانده آن به‌جای 1,500 همچنان 4,000 است.',
        en: 'The revenue was already recorded on Day 12. Crediting revenue again counts it twice, and because Accounts receivable was never credited, it still shows 4,000 instead of 1,500.',
      },
    },
    {
      q: {
        fa: 'چرا پرداخت بیمه روز 5 نوا به بدهکار پیش‌پرداخت بیمه ثبت می‌شود و نه هزینه بیمه؟',
        en: 'Why is Nova’s Day 5 insurance payment debited to Prepaid insurance rather than Insurance expense?',
      },
      options: [
        { fa: 'چون حق بیمه همیشه بدهی است', en: 'Because insurance premiums are always liabilities' },
        {
          fa: 'چون بیمه‌نامه 12 ماه آینده را پوشش می‌دهد، پس در روز 5 یک دارایی است',
          en: 'Because the policy covers 12 future months, so on Day 5 it is an asset',
        },
        { fa: 'چون مانده عادی موجودی نقد بدهکار است', en: 'Because Cash has a normal debit balance' },
        { fa: 'چون بیمه به‌صورت نسیه خریده شده است', en: 'Because the policy was bought on account' },
      ],
      answer: 1,
      explain: {
        fa: 'نوا در روز 5 دوازده ماه پوشش بیمه‌ای آینده خریده است؛ منبعی که در اختیار دارد، یعنی دارایی. این دارایی ماه‌به‌ماه و با سپری شدن دوره پوشش به هزینه تبدیل می‌شود و این انتقال با ثبت اصلاحی انجام می‌گیرد (درس 8).',
        en: 'On Day 5 Nova has bought 12 months of future protection, a resource it controls, i.e. an asset. It becomes expense month by month as the coverage is used up; that transfer is made by an adjusting entry (lesson 8).',
      },
    },
  ],
}
