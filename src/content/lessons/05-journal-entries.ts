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
  suppliesExp: { fa: 'هزینه ملزومات', en: 'Supplies expense' },
}

/* Accounts used by the other (non-Nova) businesses in examples and exercises. */
const gx = {
  capital: { fa: 'سرمایه', en: 'Capital' },
  drawings: { fa: 'برداشت', en: 'Drawings' },
  prepaidRent: { fa: 'پیش‌پرداخت اجاره', en: 'Prepaid rent' },
  unearned: { fa: 'پیش‌دریافت درآمد', en: 'Unearned revenue' },
  utilities: { fa: 'هزینه آب، برق و اینترنت', en: 'Utilities expense' },
  interestExp: { fa: 'هزینه بهره', en: 'Interest expense' },
  wages: { fa: 'هزینه حقوق و دستمزد', en: 'Wages expense' },
  vehicles: { fa: 'وسایل نقلیه', en: 'Vehicles' },
  repairsExp: { fa: 'هزینه تعمیرات', en: 'Repairs expense' },
  tuition: { fa: 'درآمد آموزش', en: 'Tuition revenue' },
  classRevenue: { fa: 'درآمد آموزش', en: 'Class revenue' },
}

const day = (n: number): L => ({ fa: `روز ${n}`, en: `Day ${n}` })
/** Same text in both languages (numbers, codes). */
const same = (s: string): L => ({ fa: s, en: s })
/** Item label such as (الف) / (a). */
const tag = (fa: string, en: string): L => ({ fa: `(${fa})`, en: `(${en})` })

export const lesson: Lesson = {
  slug: 'journal-entries',
  number: 5,
  level: 'intermediate',
  minutes: 32,
  icon: 'NotebookPen',
  tone: 'primary',
  title: { fa: 'ثبت در دفتر روزنامه', en: 'Journal Entries' },
  summary: {
    fa: 'می‌آموزید هر مدرک مثبته را به یک ثبت دقیق در دفتر روزنامه تبدیل کنید: قالب دفتر روزنامه، تحلیل چهارمرحله‌ای برای خرید و فروش نقد و نسیه، پیش‌پرداخت، آورده و برداشت مالک و وام، ثبت مرکب، و پیدا کردن و اصلاح ثبت‌های نادرست.',
    en: 'Learn to turn any source document into a precise journal entry: the general-journal format, the four-step analysis applied to cash and credit purchases and sales, prepayments, owner contributions and drawings, and loans, compound entries, and how to find and fix wrong entries.',
  },
  objectives: [
    {
      fa: 'مدارک مثبته رایج را بشناسید و بدانید هر کدام معمولاً به چه ثبتی می‌انجامد',
      en: 'Recognize the common source documents and the entry each one usually leads to',
    },
    {
      fa: 'رویدادها را در قالب استاندارد دفتر روزنامه و با شرحی روشن ثبت کنید',
      en: 'Record transactions in standard general-journal format with a clear explanation',
    },
    {
      fa: 'تحلیل چهارمرحله‌ای را روی خرید و فروش نقد و نسیه، پیش‌پرداخت، آورده و برداشت مالک و وام به کار ببرید',
      en: 'Apply the four-step analysis to cash and credit purchases and sales, prepayments, owner contributions and drawings, and loans',
    },
    {
      fa: 'ثبت ساده و ثبت مرکب را تهیه کنید',
      en: 'Prepare both simple and compound entries',
    },
    {
      fa: 'ثبت‌های نادرست را پیدا کنید و با ثبت تصحیحی اصلاح کنید',
      en: 'Find wrong entries and fix them with correcting entries',
    },
  ],
  sections: [
    {
      id: 'source-documents',
      title: { fa: 'از مدرک مثبته تا دفتر روزنامه', en: 'From Source Document to Journal' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'پایان هفته نخست است. روی میز سارا، مالک **استودیو طراحی نوا**، چند برگه جمع شده است: فیش واریز بانکی سرمایه‌اش، قرارداد وام، فاکتور خرید تجهیزات، فاکتور نسیه ملزومات و بیمه‌نامه. هر برگه خبر از یک رویداد مالی می‌دهد، اما تا وقتی ثبت نشده، در هیچ گزارشی دیده نمی‌شود. این درس نشان می‌دهد چگونه هر برگه را به ثبتی دقیق و قابل ردیابی در دفتر روزنامه تبدیل کنیم.',
            en: 'It is the end of the first week. On the desk of Sara, owner of **Nova Design Studio**, sit a few pieces of paper: the bank slip for her investment, a loan agreement, the invoice for new equipment, a credit invoice for supplies and an insurance policy. Each one reports a financial event, yet none of them appears in any report until it is recorded. This lesson shows how to turn each piece of paper into a precise, traceable journal entry.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'هر ثبت روزنامه با یک مدرک آغاز می‌شود. **مدرک مثبته** (سند پشتیبان) برگه یا فایلی است که وقوع رویداد را ثابت می‌کند و تاریخ، طرفین و مبلغ آن را نشان می‌دهد. حسابدار از روی حافظه یا گفت‌وگو ثبت نمی‌کند؛ مبنای هر ثبت مدرکی است که حسابرس بعدها بتواند آن را پیدا و بررسی کند.',
            en: 'Every journal entry starts with evidence. A **source document** is the paper or file that proves a transaction happened and shows its date, the parties and the amount. Accountants never record from memory or from a conversation; every entry rests on a document that an auditor can later find and check.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'مدارک رایج و ثبتی که معمولاً به دنبال دارند', en: 'Common documents and the entry they usually lead to' },
          head: [
            { fa: 'مدرک', en: 'Document' },
            { fa: 'چه چیزی را نشان می‌دهد', en: 'What it shows' },
            { fa: 'ثبت معمول', en: 'Usual entry' },
          ],
          rows: [
            [
              { fa: 'فاکتور فروش', en: 'Sales invoice' },
              { fa: 'آنچه فروخته شده، نام مشتری، مبلغ و مهلت پرداخت', en: 'What was sold, to whom, the amount and the payment terms' },
              {
                fa: 'بدهکار حساب‌های دریافتنی / بستانکار درآمد (فروش نسیه)',
                en: 'Dr Accounts receivable / Cr Revenue (sale on account)',
              },
            ],
            [
              { fa: 'رسید دریافت وجه', en: 'Cash receipt' },
              { fa: 'وجهی که از مشتری دریافت شده', en: 'Money received from a customer' },
              {
                fa: 'بدهکار موجودی نقد / بستانکار درآمد یا حساب‌های دریافتنی',
                en: 'Dr Cash / Cr Revenue or Accounts receivable',
              },
            ],
            [
              { fa: 'فاکتور خرید', en: 'Purchase invoice' },
              { fa: 'آنچه خریده شده، از چه کسی و با چه شرایطی', en: 'What was bought, from whom and on what terms' },
              {
                fa: 'بدهکار دارایی یا هزینه / بستانکار حساب‌های پرداختنی یا موجودی نقد',
                en: 'Dr Asset or Expense / Cr Accounts payable or Cash',
              },
            ],
            [
              { fa: 'رسید پرداخت یا ته‌چک', en: 'Payment receipt or cheque stub' },
              { fa: 'وجهی که پرداخت شده و به چه کسی', en: 'Money paid out, and to whom' },
              {
                fa: 'بدهکار حساب‌های پرداختنی یا هزینه / بستانکار موجودی نقد',
                en: 'Dr Accounts payable or Expense / Cr Cash',
              },
            ],
            [
              { fa: 'صورت‌حساب بانکی', en: 'Bank statement' },
              { fa: 'واریزها، برداشت‌ها و کارمزدهای بانک', en: 'Deposits, withdrawals and bank charges' },
              {
                fa: 'مثلاً بدهکار هزینه کارمزد بانکی / بستانکار موجودی نقد',
                en: 'e.g. Dr Bank charges expense / Cr Cash',
              },
            ],
            [
              { fa: 'لیست حقوق', en: 'Payroll register' },
              { fa: 'حقوق کسب‌شده و پرداخت‌شده کارکنان', en: 'Wages earned by and paid to staff' },
              { fa: 'بدهکار هزینه حقوق و دستمزد / بستانکار موجودی نقد', en: 'Dr Salaries expense / Cr Cash' },
            ],
            [
              { fa: 'قرارداد یا بیمه‌نامه', en: 'Contract or insurance policy' },
              { fa: 'شرایط، مبلغ و مدت وام، اجاره یا بیمه', en: 'Terms, amount and period of a loan, lease or policy' },
              { fa: 'مثلاً بدهکار موجودی نقد / بستانکار وام پرداختنی', en: 'e.g. Dr Cash / Cr Loan payable' },
            ],
            [
              { fa: 'یادداشت داخلی', en: 'Internal memo' },
              {
                fa: 'برداشت مالک یا رویدادی که مدرک بیرونی ندارد',
                en: 'An owner withdrawal, or an event with no outside document',
              },
              { fa: 'مثلاً بدهکار برداشت / بستانکار موجودی نقد', en: 'e.g. Dr Drawings / Cr Cash' },
            ],
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
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: سند حسابداری', en: 'In practice: the accounting voucher' },
          text: {
            fa: 'در ایران هر ثبت روزنامه معمولاً روی یک **سند حسابداری** نوشته می‌شود: شماره و تاریخ سند، شرح، کد حساب‌ها (کل، معین و تفصیلی)، مبالغ بدهکار و بستانکار، و امضای تهیه‌کننده و تأییدکننده. مدارک مثبته به سند پیوست و همراه آن بایگانی می‌شوند. نرم‌افزارهای حسابداری هم همین کار را می‌کنند و اغلب تصویر مدرک را به‌صورت فایل پیوست نگه می‌دارند. ساختار سند و کدگذاری حساب‌ها را در درس سند حسابداری و کدگذاری حساب‌ها کامل می‌بینید.',
            en: 'In Iran each journal entry is usually written on an **accounting voucher**: voucher number and date, description, account codes (general, subsidiary and detail), debit and credit amounts, and the signatures of the preparer and the approver. The source documents are attached to the voucher and filed with it. Accounting software does the same and often keeps a scan of the document as an attachment. The lesson on vouchers and account coding covers the voucher and the coding system in full.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'مدرک ندارید؟ اول مدرک بسازید', en: 'No document? Create one first' },
          text: {
            fa: 'گاهی رویدادی رخ می‌دهد که مدرک بیرونی ندارد؛ مثلاً سارا برای مصارف شخصی از صندوق پول برمی‌دارد یا ملزومات را به خانه می‌برد. در این حالت یک یادداشت داخلی با تاریخ، مبلغ، شرح و امضا تهیه کنید و ثبت را بر پایه آن انجام دهید. ثبتِ بدون پشتوانه در حسابرسی و رسیدگی مالیاتی قابل دفاع نیست.',
            en: 'Sometimes an event has no outside document: Sara takes cash from the till for personal use, or takes supplies home. Prepare an internal memo with the date, amount, description and a signature, and record the entry from it. An entry with no support cannot be defended in an audit or a tax review.',
          },
        },
      ],
    },
    {
      id: 'journal-format',
      title: { fa: 'قالب دفتر روزنامه', en: 'The General Journal Format' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**دفتر روزنامه** نخستین دفتری است که رویدادها در آن ثبت می‌شوند: هر رویداد ابتدا به ترتیب تاریخ در این دفتر می‌آید و سپس به حساب‌های دفتر کل منتقل می‌شود. هر ثبت روایتی کامل و مستقل است: چه اتفاقی افتاد، کدام حساب‌ها تغییر کردند و به چه مبلغی.',
            en: 'The **general journal** is the book of original entry: every transaction is recorded here first, in date order, before it reaches any ledger account. Each entry is a complete, self-contained story: what happened, which accounts changed and by how much.',
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
                fa: 'زمان وقوع رویداد (در مثال ما روز 1 تا روز 30). در سند حسابداری، شماره سند هم کنار تاریخ می‌آید.',
                en: 'When the transaction occurred (in our example, Day 1 to Day 30). On a voucher, the voucher number sits next to the date.',
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
                fa: 'در آغاز خالی می‌ماند و هنگام انتقال به دفتر کل، کد حساب در آن نوشته می‌شود.',
                en: 'Left blank at first; filled in with the ledger account code when the line is posted.',
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
        {
          type: 'p',
          text: {
            fa: 'یک ثبت کامل این‌طور خوانده می‌شود: اول تاریخ؛ بعد حساب یا حساب‌های بدهکار با مبلغ در ستون بدهکار؛ سپس حساب یا حساب‌های بستانکار با تورفتگی و مبلغ در ستون بستانکار؛ و در پایان شرحی کوتاه. ثبت روز 4 نوا نمونه‌ای از همین قالب است:',
            en: 'A complete entry reads like this: first the date; then the debited account(s) with the amount in the Debit column; then the credited account(s), indented, with the amount in the Credit column; and finally a short explanation. Nova’s Day 4 entry shows the format:',
          },
        },
        {
          type: 'journal',
          title: { fa: 'نمونه یک ثبت روزنامه', en: 'A sample journal entry' },
          entries: [
            {
              date: day(4),
              lines: [
                { account: ac.supplies, debit: 3000 },
                { account: ac.ap, credit: 3000 },
              ],
              memo: {
                fa: 'خرید نسیه کاغذ، جوهر و لوازم‌التحریر با مهلت پرداخت 30 روزه (فاکتور خرید شماره 112).',
                en: 'Bought paper, ink and stationery on account, payable in 30 days (purchase invoice no. 112).',
              },
            },
          ],
        },
        {
          type: 'list',
          items: [
            {
              fa: '**اول بدهکار، بعد بستانکار**: حساب‌های بدهکار در بالا و حساب‌های بستانکار در زیر و با تورفتگی.',
              en: '**Debits first, then credits**: debited accounts on top, credited accounts below and indented.',
            },
            {
              fa: '**هر سطر یک حساب و یک مبلغ**: هیچ سطری هم‌زمان بدهکار و بستانکار ندارد.',
              en: '**One account and one amount per line**: no line carries both a debit and a credit.',
            },
            {
              fa: '**توازن**: جمع بدهکارهای هر ثبت با جمع بستانکارهای آن برابر است.',
              en: '**Balance**: the debits of every entry add up to its credits.',
            },
            {
              fa: '**نام دقیق حساب**: عنوان حساب را دقیقاً مانند فهرست حساب‌ها بنویسید و نام‌های من‌درآوردی مثل «هزینه‌های متفرقه سارا» نسازید.',
              en: '**Exact account titles**: use the titles exactly as they appear in the chart of accounts; don’t invent names like “Sara’s misc costs”.',
            },
            {
              fa: '**شرح روشن**: یک جمله کوتاه که بگوید چه اتفاقی افتاد و به کدام مدرک تکیه دارد.',
              en: '**A clear explanation**: one short sentence saying what happened and which document supports it.',
            },
            {
              fa: '**ترتیب و پیوستگی**: ثبت‌ها به ترتیب تاریخ و با شماره پیاپی، بدون سطر خالی میان آن‌ها.',
              en: '**Order and continuity**: entries in date order with consecutive numbers, and no blank lines between them.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: نرم‌افزار حسابداری', en: 'In practice: accounting software' },
          text: {
            fa: 'در نرم‌افزار، سطرهای سند را وارد می‌کنید و نرم‌افزار سند نامتوازن را ذخیره نمی‌کند، به آن شماره می‌دهد و پس از تأیید، خودکار به دفتر کل منتقل می‌کند. اما تصمیم اصلی، یعنی کدام حساب‌ها و کدام طرف، همچنان با شماست. نرم‌افزار سندِ متوازن اما غلط را هم بی‌هیچ اعتراضی ذخیره می‌کند.',
            en: 'In software you type the voucher lines; the program refuses an unbalanced voucher, numbers it, and posts it to the ledger once it is approved. The real decision, which accounts and which side, is still yours. Software will save a balanced but wrong entry without a word of complaint.',
          },
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
                en: 'Read the source document and name at least two accounts. Every transaction has a give and a take; that is the essence of double entry.',
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
                fa: 'جهت تغییر هر حساب را مشخص کنید. پرداخت وجه نقد یعنی کاهش یک دارایی و پذیرفتن یک تعهد تازه یعنی افزایش بدهی.',
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
              { fa: 'بدهکار ملزومات / بستانکار حساب‌های پرداختنی', en: 'Dr Supplies / Cr Accounts payable' },
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
              { fa: 'بدهکار حساب‌های پرداختنی / بستانکار موجودی نقد', en: 'Dr Accounts payable / Cr Cash' },
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
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'میان‌بر: از وجه نقد شروع کنید', en: 'Shortcut: start with Cash' },
          text: {
            fa: 'اگر در رویداد پولی جابه‌جا شده، اول تکلیف موجودی نقد را روشن کنید: پول آمد یعنی بدهکار موجودی نقد و پول رفت یعنی بستانکار موجودی نقد. بعد بپرسید «در عوض چه چیزی تغییر کرد؟» تا طرف دیگر ثبت پیدا شود. اگر پولی جابه‌جا نشده (مثلاً خرید نسیه)، به‌جای موجودی نقد سراغ حساب‌های دریافتنی یا پرداختنی بروید.',
            en: 'If money moved, settle Cash first: money in means debit Cash; money out means credit Cash. Then ask “what changed in return?” to find the other side. If no money moved (a purchase on account, say), look to Accounts receivable or Accounts payable instead of Cash.',
          },
        },
      ],
    },
    {
      id: 'transaction-types',
      title: { fa: 'چهار مرحله در رویدادهای رایج', en: 'The Four Steps Across Common Transactions' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'بیشتر رویدادهای یک کسب‌وکار کوچک در چند الگوی تکراری جا می‌گیرند. اگر این الگوها را بشناسید، ثبت تقریباً هر رویدادی آسان می‌شود. مثال‌های این بخش از **تعمیرگاه دوچرخه کیان** است؛ کسب‌وکار خدماتی کوچکی که کیان تازه راه انداخته و جدا از مثال پیوسته نوا است.',
            en: 'Most transactions in a small business fall into a handful of repeating patterns. Learn the patterns and almost any transaction becomes easy to record. The examples in this section come from **Kian Bike Repair**, a small service business Kian has just opened, separate from the Nova running example.',
          },
        },
        { type: 'h', text: { fa: 'خرید: نقد یا نسیه', en: 'Purchases: cash or on account' } },
        {
          type: 'p',
          text: {
            fa: 'در هر خرید دو پرسش بپرسید. **چه گرفتیم؟** اگر منفعتش به دوره‌های بعد هم می‌رسد (ابزار، ملزومات انبارشده)، دارایی است؛ اگر همین دوره مصرف می‌شود (قبض برق همین ماه)، هزینه است. **چگونه پرداختیم؟** نقد یعنی بستانکار موجودی نقد و نسیه یعنی بستانکار حساب‌های پرداختنی.',
            en: 'Ask two questions about every purchase. **What did we get?** If it benefits later periods too (tools, supplies kept in stock), it is an asset; if it is used up this period (this month’s electricity), it is an expense. **How did we pay?** Cash means credit Cash; on account means credit Accounts payable.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'تعمیرگاه کیان: سه خرید', en: 'Kian Bike Repair: three purchases' },
          entries: [
            {
              date: day(2),
              lines: [
                { account: ac.equipment, debit: 4500 },
                { account: ac.cash, credit: 4500 },
              ],
              memo: {
                fa: 'خرید نقدی پایه تنظیم چرخ و جعبه‌ابزار (فاکتور فروشنده).',
                en: 'Bought a wheel-truing stand and a toolkit for cash (supplier invoice).',
              },
            },
            {
              date: day(3),
              lines: [
                { account: ac.supplies, debit: 1200 },
                { account: ac.ap, credit: 1200 },
              ],
              memo: {
                fa: 'خرید نسیه لاستیک، زنجیر و گریس برای تعمیرات (فاکتور خرید، تسویه 30 روزه).',
                en: 'Bought tyres, chains and grease for repairs on account (purchase invoice, 30 days).',
              },
            },
            {
              date: day(5),
              lines: [
                { account: gx.utilities, debit: 350 },
                { account: ac.cash, credit: 350 },
              ],
              memo: {
                fa: 'پرداخت قبض برق همین ماه (قبض و رسید پرداخت).',
                en: 'Paid this month’s electricity bill (bill and payment receipt).',
              },
            },
          ],
        },
        { type: 'h', text: { fa: 'فروش خدمات: نقد، نسیه و وصول', en: 'Sales: cash, on account, and collection' } },
        {
          type: 'p',
          text: {
            fa: 'درآمد وقتی ثبت می‌شود که کار انجام شده باشد، نه وقتی که پول می‌رسد. اگر مشتری همان لحظه بپردازد، موجودی نقد بدهکار می‌شود؛ اگر بعداً بپردازد، حساب‌های دریافتنی. وقتی پول آن طلب بعداً می‌رسد، درآمد تازه‌ای در کار نیست: فقط یک دارایی (طلب) به دارایی دیگری (وجه نقد) تبدیل می‌شود.',
            en: 'Revenue is recorded when the work is done, not when the money arrives. If the customer pays on the spot, debit Cash; if they will pay later, debit Accounts receivable. When that money arrives, there is no new revenue: one asset (the receivable) simply turns into another (cash).',
          },
        },
        {
          type: 'journal',
          title: { fa: 'تعمیرگاه کیان: فروش و وصول', en: 'Kian Bike Repair: sales and a collection' },
          entries: [
            {
              date: day(8),
              lines: [
                { account: ac.cash, debit: 900 },
                { account: ac.revenue, credit: 900 },
              ],
              memo: {
                fa: 'تعمیر دوچرخه مشتریان حضوری با دریافت نقدی (رسیدهای فروش).',
                en: 'Repaired bikes for walk-in customers, paid in cash (sales receipts).',
              },
            },
            {
              date: day(10),
              lines: [
                { account: ac.ar, debit: 2400 },
                { account: ac.revenue, credit: 2400 },
              ],
              memo: {
                fa: 'سرویس 12 دوچرخه یک شرکت پیک به‌صورت نسیه (فاکتور فروش).',
                en: 'Serviced 12 bikes for a courier company on account (sales invoice).',
              },
            },
            {
              date: day(25),
              lines: [
                { account: ac.cash, debit: 2400 },
                { account: ac.ar, credit: 2400 },
              ],
              memo: {
                fa: 'وصول فاکتور شرکت پیک (رسید دریافت).',
                en: 'Collected the courier company’s invoice (cash receipt).',
              },
            },
          ],
        },
        { type: 'h', text: { fa: 'پیش‌پرداخت و پیش‌دریافت', en: 'Prepayments and customer advances' } },
        {
          type: 'p',
          text: {
            fa: 'وقتی پیش از دریافت خدمت پول می‌دهید، حقی برای آینده خریده‌اید و این حق دارایی است (**پیش‌پرداخت**). برعکس، وقتی پیش از انجام کار پول می‌گیرید، به مشتری بدهکار می‌شوید: یا کار را انجام می‌دهید یا پول را پس می‌دهید. پس این مبلغ بدهی است (**پیش‌دریافت درآمد**)، نه درآمد. تبدیل تدریجی این دو به هزینه و درآمد در درس ثبت‌های اصلاحی آموزش داده می‌شود.',
            en: 'When you pay before receiving a service, you have bought a right to something in the future, and that right is an asset (a **prepayment**). The reverse also holds: when you are paid before doing the work, you owe the customer either the work or a refund, so the amount is a liability (**unearned revenue**), not revenue. How both gradually turn into expense and revenue is taught in the lesson on adjusting entries.',
          },
        },
        {
          type: 'journal',
          title: {
            fa: 'تعمیرگاه کیان: پیش‌پرداخت اجاره و پیش‌دریافت از مشتری',
            en: 'Kian Bike Repair: prepaid rent and a customer advance',
          },
          entries: [
            {
              date: day(1),
              lines: [
                { account: gx.prepaidRent, debit: 7200 },
                { account: ac.cash, credit: 7200 },
              ],
              memo: {
                fa: 'پرداخت پیشاپیش اجاره شش ماه مغازه (قرارداد اجاره و رسید).',
                en: 'Paid six months’ shop rent in advance (lease and receipt).',
              },
            },
            {
              date: day(15),
              lines: [
                { account: ac.cash, debit: 1500 },
                { account: gx.unearned, credit: 1500 },
              ],
              memo: {
                fa: 'دریافت پیش‌پرداخت یک باشگاه دوچرخه‌سواری برای سرویس گروهی ماه آینده (رسید دریافت).',
                en: 'Received an advance from a cycling club for a group tune-up next month (cash receipt).',
              },
            },
          ],
        },
        { type: 'h', text: { fa: 'آورده و برداشت مالک', en: 'Owner contributions and drawings' } },
        {
          type: 'p',
          text: {
            fa: 'آورده مالک، چه نقد و چه غیرنقد، سرمایه را افزایش می‌دهد. دارایی غیرنقدی که مالک به کسب‌وکار می‌آورد، به **ارزش منصفانه** روز آوردن ثبت می‌شود، نه به قیمتی که سال‌ها پیش پرداخته است. برداشت مالک، چه پول باشد چه ملزومات یا کالا، حساب برداشت را بدهکار می‌کند و هزینه کسب‌وکار نیست.',
            en: 'An owner’s contribution, in cash or in kind, increases capital. A non-cash asset the owner brings in is recorded at its **fair value** on the day it is contributed, not at what the owner paid for it years ago. An owner’s withdrawal, whether cash, supplies or goods, is debited to Drawings and is never a business expense.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'تعمیرگاه کیان: آورده و برداشت', en: 'Kian Bike Repair: contributions and drawings' },
          entries: [
            {
              date: day(1),
              lines: [
                { account: ac.cash, debit: 20000 },
                { account: ac.equipment, debit: 6000 },
                { account: gx.capital, credit: 26000 },
              ],
              memo: {
                fa: 'آورده کیان: 20,000 وجه نقد و ابزار کارگاهی شخصی‌اش به ارزش منصفانه 6,000 (فیش بانکی و صورت‌جلسه ارزیابی).',
                en: 'Kian’s contribution: 20,000 cash plus his own workshop tools at a fair value of 6,000 (bank slip and valuation note).',
              },
            },
            {
              date: day(28),
              lines: [
                { account: gx.drawings, debit: 300 },
                { account: ac.supplies, credit: 300 },
              ],
              memo: {
                fa: 'کیان یک جفت لاستیک از ملزومات را برای دوچرخه شخصی‌اش برداشت (یادداشت داخلی).',
                en: 'Kian took a pair of tyres from supplies for his own bike (internal memo).',
              },
            },
            {
              date: day(30),
              lines: [
                { account: gx.drawings, debit: 1000 },
                { account: ac.cash, credit: 1000 },
              ],
              memo: {
                fa: 'برداشت نقدی کیان برای مصارف شخصی (یادداشت برداشت).',
                en: 'Kian withdrew cash for personal use (withdrawal memo).',
              },
            },
          ],
        },
        { type: 'h', text: { fa: 'وام و بهره', en: 'Loans and interest' } },
        {
          type: 'p',
          text: {
            fa: 'گرفتن وام، دارایی (موجودی نقد) و بدهی (وام پرداختنی) را هم‌زمان افزایش می‌دهد و درآمد نیست. بازپرداخت اصل وام فقط بدهی را کم می‌کند و هزینه نیست؛ تنها **بهره** هزینه است. به همین دلیل هر قسط وام معمولاً یک ثبت مرکب است.',
            en: 'Borrowing increases an asset (Cash) and a liability (Loan payable) at the same time; it is not revenue. Repaying the principal only reduces the liability and is not an expense; only the **interest** is an expense. That is why a loan instalment is usually a compound entry.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'تعمیرگاه کیان: گرفتن وام و پرداخت قسط', en: 'Kian Bike Repair: borrowing and an instalment' },
          entries: [
            {
              date: day(4),
              lines: [
                { account: ac.cash, debit: 10000 },
                { account: ac.loan, credit: 10000 },
              ],
              memo: { fa: 'دریافت وام بانکی (قرارداد وام).', en: 'Received a bank loan (loan agreement).' },
            },
            {
              date: day(30),
              lines: [
                { account: ac.loan, debit: 500 },
                { account: gx.interestExp, debit: 100 },
                { account: ac.cash, credit: 600 },
              ],
              memo: {
                fa: 'پرداخت قسط اول: 500 اصل وام و 100 بهره (اعلامیه قسط بانک).',
                en: 'Paid the first instalment: 500 of principal and 100 of interest (bank instalment notice).',
              },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'الگوهای رایج در یک نگاه', en: 'Common patterns at a glance' },
          head: [
            { fa: 'رویداد', en: 'Transaction' },
            { fa: 'بدهکار', en: 'Debit' },
            { fa: 'بستانکار', en: 'Credit' },
          ],
          rows: [
            [
              { fa: 'خرید دارایی به‌صورت نقد', en: 'Buy an asset for cash' },
              { fa: 'همان دارایی', en: 'The asset' },
              { fa: 'موجودی نقد', en: 'Cash' },
            ],
            [
              { fa: 'خرید دارایی یا ملزومات به‌صورت نسیه', en: 'Buy an asset or supplies on account' },
              { fa: 'همان دارایی', en: 'The asset' },
              { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
            ],
            [
              { fa: 'پرداخت هزینه همین دوره', en: 'Pay an expense of this period' },
              { fa: 'همان هزینه', en: 'The expense' },
              { fa: 'موجودی نقد', en: 'Cash' },
            ],
            [
              { fa: 'دریافت صورت‌حساب هزینه برای پرداخت بعدی', en: 'Receive a bill to pay later' },
              { fa: 'همان هزینه', en: 'The expense' },
              { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
            ],
            [
              { fa: 'ارائه خدمت به‌صورت نقد', en: 'Perform a service for cash' },
              { fa: 'موجودی نقد', en: 'Cash' },
              { fa: 'درآمد', en: 'Revenue' },
            ],
            [
              { fa: 'ارائه خدمت به‌صورت نسیه', en: 'Perform a service on account' },
              { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' },
              { fa: 'درآمد', en: 'Revenue' },
            ],
            [
              { fa: 'وصول طلب از مشتری', en: 'Collect from a customer' },
              { fa: 'موجودی نقد', en: 'Cash' },
              { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' },
            ],
            [
              { fa: 'پرداخت بدهی به فروشنده', en: 'Pay a supplier' },
              { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
              { fa: 'موجودی نقد', en: 'Cash' },
            ],
            [
              { fa: 'پرداخت پیشاپیش (اجاره، بیمه)', en: 'Pay in advance (rent, insurance)' },
              { fa: 'پیش‌پرداخت مربوط', en: 'The prepaid asset' },
              { fa: 'موجودی نقد', en: 'Cash' },
            ],
            [
              { fa: 'دریافت پیشاپیش از مشتری', en: 'Receive a customer advance' },
              { fa: 'موجودی نقد', en: 'Cash' },
              { fa: 'پیش‌دریافت درآمد', en: 'Unearned revenue' },
            ],
            [
              { fa: 'آورده مالک', en: 'Owner invests' },
              { fa: 'موجودی نقد یا دارایی آورده‌شده', en: 'Cash or the asset contributed' },
              { fa: 'سرمایه', en: 'Capital' },
            ],
            [
              { fa: 'برداشت مالک', en: 'Owner withdraws' },
              { fa: 'برداشت', en: 'Drawings' },
              { fa: 'موجودی نقد یا دارایی برداشته‌شده', en: 'Cash or the asset taken' },
            ],
            [
              { fa: 'گرفتن وام', en: 'Borrow' },
              { fa: 'موجودی نقد', en: 'Cash' },
              { fa: 'وام پرداختنی', en: 'Loan payable' },
            ],
            [
              { fa: 'پرداخت قسط وام', en: 'Pay a loan instalment' },
              { fa: 'وام پرداختنی و هزینه بهره', en: 'Loan payable and Interest expense' },
              { fa: 'موجودی نقد', en: 'Cash' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: بانک، صندوق و چک', en: 'In practice: bank, till and cheques' },
          text: {
            fa: 'در کسب‌وکار واقعی بیشتر پول‌ها از حساب بانکی جابه‌جا می‌شود، نه از صندوق. برای همین زیر حساب «موجودی نقد» معمولاً حساب‌های جداگانه‌ای برای صندوق و هر حساب بانکی باز می‌شود (مثلاً «بانک، حساب جاری 1234»). در این درس برای سادگی همه را موجودی نقد می‌نامیم. دریافت و پرداخت با چک قواعد خودش را دارد که در درس حساب‌های دریافتنی و چک‌ها می‌آید.',
            en: 'In a real business most money moves through a bank account, not the till. So under Cash there are usually separate accounts for the till and for each bank account (for example “Bank, current account 1234”). For simplicity this lesson calls them all Cash. Receipts and payments by cheque follow their own rules, covered in the lesson on receivables and cheques.',
          },
        },
      ],
    },
    {
      id: 'journalizing-nova',
      title: { fa: 'دفتر روزنامه نوا: ماه نخست', en: 'Nova’s Journal: The First Month' },
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
            en: 'A real journal is one continuous, strictly chronological record. We split it into three blocks only for readability; the dates still run in order.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'تأمین مالی و سرمایه‌گذاری (روزهای 1 تا 3)', en: 'Financing and investing (Days 1 to 3)' },
          entries: [
            {
              date: day(1),
              lines: [
                { account: ac.cash, debit: 50000 },
                { account: ac.capital, credit: 50000 },
              ],
              memo: {
                fa: 'سارا برای راه‌اندازی کسب‌وکار وجه نقد سرمایه‌گذاری کرد (فیش واریز بانکی).',
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
                fa: 'دریافت وام بانکی با نرخ بهره سالانه 12٪ (قرارداد وام).',
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
                fa: 'خرید نقدی تجهیزات طراحی با عمر مفید 5 سال و ارزش اسقاط 2,000 (فاکتور فروشنده).',
                en: 'Bought design equipment for cash; 5-year useful life, 2,000 salvage value (supplier invoice).',
              },
            },
          ],
        },
        {
          type: 'journal',
          title: { fa: 'خریدها و پیش‌پرداخت‌ها (روزهای 4 و 5)', en: 'Purchases and prepayments (Days 4 and 5)' },
          entries: [
            {
              date: day(4),
              lines: [
                { account: ac.supplies, debit: 3000 },
                { account: ac.ap, credit: 3000 },
              ],
              memo: { fa: 'خرید نسیه ملزومات (فاکتور خرید).', en: 'Bought supplies on account (purchase invoice).' },
            },
            {
              date: day(5),
              lines: [
                { account: ac.prepaidInsurance, debit: 1200 },
                { account: ac.cash, credit: 1200 },
              ],
              memo: {
                fa: 'پرداخت پیشاپیش حق بیمه 12 ماهه (بیمه‌نامه و رسید).',
                en: 'Paid a 12-month insurance policy in advance (policy and receipt).',
              },
            },
          ],
        },
        {
          type: 'journal',
          title: {
            fa: 'عملیات، وصول مطالبات و برداشت (روزهای 8 تا 30)',
            en: 'Operations, collections and withdrawals (Days 8 to 30)',
          },
          entries: [
            {
              date: day(8),
              lines: [
                { account: ac.cash, debit: 8000 },
                { account: ac.revenue, credit: 8000 },
              ],
              memo: {
                fa: 'ارائه خدمات طراحی به‌صورت نقدی (رسید دریافت).',
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
                fa: 'ارائه خدمات به‌صورت نسیه (فاکتور فروش).',
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
                fa: 'پرداخت اجاره استودیو برای ماه جاری (رسید موجر).',
                en: 'Paid this month’s studio rent (landlord’s receipt).',
              },
            },
            {
              date: day(20),
              lines: [
                { account: ac.salaries, debit: 3000 },
                { account: ac.cash, credit: 3000 },
              ],
              memo: { fa: 'پرداخت حقوق کارکنان (لیست حقوق).', en: 'Paid employee salaries (payroll register).' },
            },
            {
              date: day(24),
              lines: [
                { account: ac.cash, debit: 2500 },
                { account: ac.ar, credit: 2500 },
              ],
              memo: {
                fa: 'وصول بخشی از طلب روز 12 از مشتریان (رسید دریافت).',
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
                fa: 'پرداخت بخشی از بدهی خرید ملزومات (رسید فروشنده).',
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
                fa: 'برداشت وجه نقد توسط سارا برای مصارف شخصی (یادداشت برداشت).',
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
                fa: 'مثال: روز 15، بدهکار هزینه اجاره / بستانکار موجودی نقد',
                en: 'Example: Day 15, Dr Rent expense / Cr Cash',
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
                en: 'Total debits equal total credits; individual lines need not match',
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
            fa: 'استودیوی دیگری یک چاپگر عریض به بهای 12,000 می‌خرد. 4,000 را همان روز نقد می‌پردازد و متعهد می‌شود 8,000 باقی‌مانده را ظرف 60 روز به فروشنده بپردازد.',
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
                fa: 'خرید چاپگر؛ بخشی نقد و بخشی نسیه (فاکتور فروشنده).',
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
                fa: 'تجهیزات 12,000 افزایش و موجودی نقد 4,000 کاهش؛ حساب‌های پرداختنی 8,000 افزایش',
                en: 'Equipment up 12,000 and Cash down 4,000; Accounts payable up 8,000',
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
        { type: 'h', text: { fa: 'دو ثبت مرکب پرکاربرد دیگر', en: 'Two more everyday compound entries' } },
        {
          type: 'journal',
          title: { fa: 'فروش نیمه‌نقد و قسط وام (مثال‌های جداگانه)', en: 'A part-cash sale and a loan instalment (separate illustrations)' },
          entries: [
            {
              lines: [
                { account: ac.cash, debit: 3000 },
                { account: ac.ar, debit: 2000 },
                { account: ac.revenue, credit: 5000 },
              ],
              memo: {
                fa: 'پروژه‌ای 5,000 تمام شد؛ مشتری 3,000 را نقد پرداخت و 2,000 را ماه بعد می‌پردازد (فاکتور فروش و رسید).',
                en: 'A 5,000 job is finished; the client pays 3,000 now and 2,000 next month (sales invoice and receipt).',
              },
            },
            {
              lines: [
                { account: ac.loan, debit: 1000 },
                { account: gx.interestExp, debit: 120 },
                { account: ac.cash, credit: 1120 },
              ],
              memo: {
                fa: 'پرداخت قسط وام: 1,000 اصل و 120 بهره (اعلامیه قسط بانک).',
                en: 'Paid a loan instalment: 1,000 principal and 120 interest (bank instalment notice).',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'رویدادهای نامرتبط را ادغام نکنید', en: 'Don’t bundle unrelated transactions' },
          text: {
            fa: 'ثبت مرکب برای یک رویداد است. ادغام اجاره روز 15 و حقوق روز 20 در یک ثبت، دو رویداد و دو مدرک جداگانه را پنهان می‌کند و ردیابی هر دو را دشوار می‌سازد.',
            en: 'A compound entry describes one transaction. Combining the Day 15 rent and the Day 20 salaries into one entry would hide two separate events and two separate documents, and make both harder to trace.',
          },
        },
      ],
    },
    {
      id: 'mistakes-and-corrections',
      title: { fa: 'اشتباهات رایج و اصلاح ثبت‌ها', en: 'Common Mistakes and Correcting Entries' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'بیشتر خطاهای ثبت روزنامه از نادیده گرفتن یکی از چهار مرحله تحلیل ناشی می‌شوند. این‌ها رایج‌ترین آن‌ها هستند، هر کدام با نمونه‌ای از رویدادهای نوا:',
            en: 'Most journalizing mistakes come from skipping one of the four steps. These are the ones instructors see most often, each illustrated with a Nova transaction:',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**جابه‌جا کردن بدهکار و بستانکار**: مثلاً ثبت روز 27 به‌صورت بدهکار موجودی نقد / بستانکار حساب‌های پرداختنی؛ هر دو حساب در جهت نادرست تغییر می‌کنند.',
              en: '**Reversing debit and credit**: e.g. recording Day 27 as Dr Cash / Cr Accounts payable. Both accounts move the wrong way.',
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
              fa: '**درآمد دانستن وام یا پیش‌دریافت**: پول وام روز 2 درآمد نیست، بدهی است؛ پیش‌دریافت مشتری هم تا انجام کار بدهی است.',
              en: '**Calling a loan or an advance revenue**: the Day 2 loan money is a liability, not revenue; a customer advance is also a liability until the work is done.',
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
              fa: '**درهم آمیختن امور شخصی و تجاری**: ثبت خریدهای شخصی سارا به‌عنوان هزینه نوا با مفهوم شخصیت مستقل واحد تجاری مغایر است.',
              en: '**Mixing personal and business affairs**: recording Sara’s personal purchases as Nova expenses violates the business-entity concept.',
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
        { type: 'h', text: { fa: 'اصلاح ثبت نادرست', en: 'Fixing a wrong entry' } },
        {
          type: 'p',
          text: {
            fa: 'ثبت نادرست را هرگز پاک نکنید و رویش ننویسید. تا وقتی سند پیش‌نویس است و منتقل نشده، می‌توانید آن را ویرایش کنید؛ اما وقتی سند تأیید و به دفتر کل منتقل شد، اصلاح فقط با یک ثبت تازه انجام می‌شود که به آن **ثبت تصحیحی** می‌گوییم. این را با ثبت‌های اصلاحی پایان دوره اشتباه نگیرید: آن‌ها خطا را درست نمی‌کنند، حساب‌ها را به‌روز می‌کنند.',
            en: 'Never erase a wrong entry or write over it. While a voucher is still a draft and unposted, you may edit it; once it has been approved and posted, the only fix is a new entry, called a **correcting entry**. Don’t confuse it with period-end adjusting entries: those don’t fix mistakes, they bring accounts up to date.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'روش اول: برگرداندن و ثبت دوباره', en: 'Method 1: reverse and re-record' },
              text: {
                fa: 'ثبت نادرست را با یک ثبت معکوس (همان حساب‌ها و همان مبالغ، با طرف‌های جابه‌جا) کاملاً خنثی کنید و سپس ثبت درست را بنویسید. دو ثبت لازم است، اما ردّ کار بسیار روشن است.',
                en: 'Cancel the wrong entry completely with a reversing entry (same accounts and amounts, sides swapped), then record the right entry. It takes two entries, but the trail is crystal clear.',
              },
            },
            {
              title: { fa: 'روش دوم: یک ثبت تصحیحی', en: 'Method 2: one correcting entry' },
              text: {
                fa: 'ثبت نادرست و ثبت درست را کنار هم بگذارید و فقط تفاوت آن‌ها را ثبت کنید. سریع‌تر است، اما باید با دقت حساب کنید کدام حساب چقدر و در کدام جهت جابه‌جا شده است.',
                en: 'Put the wrong entry and the right entry side by side and record only the difference. It is faster, but you must work out carefully which account is off, by how much and in which direction.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'مثال: حساب اشتباه', en: 'Example: the wrong account' },
          text: {
            fa: 'فرض کنید پرداخت 1,500 روز 27 نوا به فروشنده به‌اشتباه این‌طور ثبت شده باشد: بدهکار هزینه ملزومات 1,500 / بستانکار موجودی نقد 1,500. طرف بستانکار درست است؛ فقط به‌جای هزینه ملزومات باید حساب‌های پرداختنی بدهکار می‌شد. پس با یک ثبت تصحیحی، حساب‌های پرداختنی را بدهکار و هزینه ملزومات را بستانکار می‌کنیم.',
            en: 'Suppose Nova’s 1,500 payment to the supplier on Day 27 had been recorded as Dr Supplies expense 1,500 / Cr Cash 1,500. The credit is right; only the debit should have gone to Accounts payable instead of Supplies expense. One correcting entry debits Accounts payable and credits Supplies expense.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت تصحیحی (مثال فرضی)', en: 'Correcting entry (hypothetical)' },
          entries: [
            {
              lines: [
                { account: ac.ap, debit: 1500 },
                { account: ac.suppliesExp, credit: 1500 },
              ],
              memo: {
                fa: 'اصلاح ثبت روز 27: پرداخت به فروشنده به‌اشتباه به هزینه ملزومات بدهکار شده بود.',
                en: 'Corrects the Day 27 entry: the supplier payment had been debited to Supplies expense by mistake.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: دفاتر قانونی', en: 'In practice: legal books' },
          text: {
            fa: 'برخی مؤدیان مالیاتی در ایران باید دفاتر قانونی (روزنامه و کل) نگه دارند و آن‌ها را ثبت کنند. در این دفاتر تراشیدن، پاک کردن، خط زدن و جا گذاشتن سطر سفید پذیرفته نیست و خطا فقط با ثبت تازه اصلاح می‌شود. بیشتر نرم‌افزارها هم سند قطعی‌شده را قفل می‌کنند. اینکه چه کسانی مشمول نگهداری دفاتر قانونی هستند و دفاتر به چه شکلی (کاغذی یا الکترونیکی) پذیرفته می‌شود، به قوانین روز بستگی دارد؛ آخرین مقررات را بررسی کنید.',
            en: 'Some taxpayers in Iran must keep legal books (a journal and a general ledger) and have them registered. In these books, scraping, erasing, crossing out and leaving blank lines are not acceptable; a mistake is fixed only with a new entry. Most software also locks a voucher once it is finalized. Who must keep legal books, and in what form (paper or electronic), depends on current law; check the latest regulations.',
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
      id: 'exercises',
      title: { fa: 'تمرین‌ها', en: 'Exercises' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'تمرین‌ها از ساده به چالشی مرتب شده‌اند. پیش از باز کردن راه‌حل، هر ثبت را روی کاغذ بنویسید و توازنش را بسنجید.',
            en: 'The exercises run from easy to challenging. Write each entry on paper and check that it balances before opening the solution.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تحلیل چهارمرحله‌ای پنج رویداد', en: 'Four-step analysis of five transactions' },
          difficulty: 'easy',
          problem: {
            fa: 'لیلا **آموزشگاه موسیقی نغمه** را راه انداخته است. برای هر رویداد زیر، حساب‌ها، نوع آن‌ها، افزایش یا کاهش و طرف بدهکار و بستانکار را مشخص کنید و ثبت روزنامه را بنویسید.',
            en: 'Leila has opened **Naghmeh Music School**. For each transaction below, name the accounts, their types, whether each increases or decreases, and which is debited and which credited; then write the journal entry.',
          },
          given: {
            head: [
              { fa: 'ردیف', en: 'No.' },
              { fa: 'رویداد', en: 'Transaction' },
            ],
            rows: [
              [same('1'), { fa: 'لیلا 15,000 وجه نقد به حساب بانکی آموزشگاه واریز می‌کند.', en: 'Leila deposits 15,000 cash into the school’s bank account.' }],
              [same('2'), { fa: 'دو کیبورد به مبلغ 6,000 به‌صورت نسیه خریده می‌شود.', en: 'Two keyboards are bought on account for 6,000.' }],
              [same('3'), { fa: 'شهریه کلاس‌های این هفته، 2,800، نقد دریافت می‌شود.', en: 'Tuition of 2,800 for this week’s lessons is received in cash.' }],
              [same('4'), { fa: 'قبض اینترنت این ماه، 450، پرداخت می‌شود.', en: 'This month’s internet bill of 450 is paid.' }],
              [same('5'), { fa: '3,000 از بدهی خرید کیبوردها پرداخت می‌شود.', en: '3,000 of the amount owed for the keyboards is paid.' }],
            ],
          },
          hint: {
            fa: 'برای هر رویداد اول بپرسید آیا پولی جابه‌جا شده است. رویداد 2 هیچ پولی جابه‌جا نمی‌کند.',
            en: 'For each one, first ask whether money moved. Transaction 2 moves no money at all.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'تحلیل چهارمرحله‌ای', en: 'Four-step analysis' },
              head: [
                { fa: 'ردیف', en: 'No.' },
                { fa: 'حساب‌ها (نوع)', en: 'Accounts (type)' },
                { fa: 'تغییر', en: 'Change' },
                { fa: 'ثبت', en: 'Entry' },
              ],
              rows: [
                [
                  same('1'),
                  { fa: 'موجودی نقد (دارایی) · سرمایه (حقوق مالکانه)', en: 'Cash (asset) · Capital (equity)' },
                  { fa: 'افزایش · افزایش', en: 'Increase · Increase' },
                  { fa: 'بدهکار موجودی نقد / بستانکار سرمایه', en: 'Dr Cash / Cr Capital' },
                ],
                [
                  same('2'),
                  { fa: 'تجهیزات (دارایی) · حساب‌های پرداختنی (بدهی)', en: 'Equipment (asset) · Accounts payable (liability)' },
                  { fa: 'افزایش · افزایش', en: 'Increase · Increase' },
                  { fa: 'بدهکار تجهیزات / بستانکار حساب‌های پرداختنی', en: 'Dr Equipment / Cr Accounts payable' },
                ],
                [
                  same('3'),
                  { fa: 'موجودی نقد (دارایی) · درآمد آموزش (درآمد)', en: 'Cash (asset) · Tuition revenue (revenue)' },
                  { fa: 'افزایش · افزایش', en: 'Increase · Increase' },
                  { fa: 'بدهکار موجودی نقد / بستانکار درآمد آموزش', en: 'Dr Cash / Cr Tuition revenue' },
                ],
                [
                  same('4'),
                  { fa: 'هزینه آب، برق و اینترنت (هزینه) · موجودی نقد (دارایی)', en: 'Utilities expense (expense) · Cash (asset)' },
                  { fa: 'افزایش · کاهش', en: 'Increase · Decrease' },
                  { fa: 'بدهکار هزینه آب، برق و اینترنت / بستانکار موجودی نقد', en: 'Dr Utilities expense / Cr Cash' },
                ],
                [
                  same('5'),
                  { fa: 'حساب‌های پرداختنی (بدهی) · موجودی نقد (دارایی)', en: 'Accounts payable (liability) · Cash (asset)' },
                  { fa: 'کاهش · کاهش', en: 'Decrease · Decrease' },
                  { fa: 'بدهکار حساب‌های پرداختنی / بستانکار موجودی نقد', en: 'Dr Accounts payable / Cr Cash' },
                ],
              ],
            },
            {
              type: 'journal',
              title: { fa: 'ثبت‌های روزنامه آموزشگاه نغمه', en: 'Naghmeh Music School journal' },
              entries: [
                {
                  date: same('(1)'),
                  lines: [
                    { account: ac.cash, debit: 15000 },
                    { account: gx.capital, credit: 15000 },
                  ],
                  memo: { fa: 'آورده نقدی لیلا (فیش واریز).', en: 'Leila’s cash investment (deposit slip).' },
                },
                {
                  date: same('(2)'),
                  lines: [
                    { account: ac.equipment, debit: 6000 },
                    { account: ac.ap, credit: 6000 },
                  ],
                  memo: { fa: 'خرید نسیه دو کیبورد (فاکتور خرید).', en: 'Bought two keyboards on account (purchase invoice).' },
                },
                {
                  date: same('(3)'),
                  lines: [
                    { account: ac.cash, debit: 2800 },
                    { account: gx.tuition, credit: 2800 },
                  ],
                  memo: { fa: 'شهریه نقدی کلاس‌های هفته (رسیدها).', en: 'Cash tuition for the week’s lessons (receipts).' },
                },
                {
                  date: same('(4)'),
                  lines: [
                    { account: gx.utilities, debit: 450 },
                    { account: ac.cash, credit: 450 },
                  ],
                  memo: { fa: 'پرداخت قبض اینترنت ماه (قبض).', en: 'Paid the month’s internet bill (bill).' },
                },
                {
                  date: same('(5)'),
                  lines: [
                    { account: ac.ap, debit: 3000 },
                    { account: ac.cash, credit: 3000 },
                  ],
                  memo: { fa: 'پرداخت بخشی از بدهی کیبوردها (رسید فروشنده).', en: 'Paid part of the amount owed for the keyboards (supplier’s receipt).' },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              title: { fa: 'کنترل', en: 'Check' },
              text: {
                fa: 'جمع بدهکارها: 15,000 + 6,000 + 2,800 + 450 + 3,000 = 27,250 و جمع بستانکارها هم 27,250 است. موجودی نقد: 15,000 + 2,800 − 450 − 3,000 = 14,350.',
                en: 'Total debits: 15,000 + 6,000 + 2,800 + 450 + 3,000 = 27,250, and total credits are also 27,250. Cash: 15,000 + 2,800 − 450 − 3,000 = 14,350.',
              },
            },
          ],
          answer: {
            fa: 'جمع بدهکار و بستانکار 27,250؛ موجودی نقد پایان 14,350 و بدهی باقی‌مانده به فروشنده 3,000.',
            en: 'Debits and credits each total 27,250; Cash ends at 14,350 and 3,000 is still owed to the supplier.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'ماه نخست کارگاه سفال مهر', en: 'The first month of Mehr Pottery Studio' },
          difficulty: 'medium',
          problem: {
            fa: 'رضا **کارگاه سفال مهر** را راه‌اندازی کرده است: کلاس سفالگری برگزار می‌کند و برای شرکت‌ها کارگاه گروهی می‌گذارد. رویدادهای ماه نخست را در دفتر روزنامه ثبت کنید. سپس جمع بدهکارها و بستانکارها و مانده موجودی نقد را به دست آورید.',
            en: 'Reza has opened **Mehr Pottery Studio**: he teaches pottery classes and runs group workshops for companies. Journalize the first month’s transactions. Then find total debits and credits and the ending Cash balance.',
          },
          given: {
            head: [
              { fa: 'روز', en: 'Day' },
              { fa: 'رویداد', en: 'Transaction' },
            ],
            rows: [
              [same('1'), { fa: 'رضا 30,000 وجه نقد به حساب بانکی کارگاه واریز می‌کند.', en: 'Reza deposits 30,000 cash into the studio’s bank account.' }],
              [same('1'), { fa: 'رضا کوره سفالگری شخصی‌اش را به کارگاه می‌آورد؛ ارزش منصفانه آن 12,000 است.', en: 'Reza brings his own kiln to the studio; its fair value is 12,000.' }],
              [same('2'), { fa: 'اجاره سه ماه کارگاه، 6,000، پیشاپیش پرداخت می‌شود.', en: 'Three months’ workshop rent of 6,000 is paid in advance.' }],
              [same('4'), { fa: 'گِل و لعاب به مبلغ 4,000 نسیه خریده می‌شود.', en: 'Clay and glazes are bought on account for 4,000.' }],
              [same('9'), { fa: 'کلاس‌های آخر هفته برگزار و 5,500 نقد دریافت می‌شود.', en: 'Weekend classes are held and 5,500 is collected in cash.' }],
              [same('14'), { fa: 'یک کارگاه گروهی برای یک شرکت برگزار و فاکتور 3,000 با مهلت 30 روزه صادر می‌شود.', en: 'A team workshop is run for a company and a 3,000 invoice, due in 30 days, is issued.' }],
              [same('18'), { fa: 'مدرسه‌ای 2,000 را پیشاپیش برای دوره‌ای که ماه آینده شروع می‌شود می‌پردازد.', en: 'A school pays 2,000 in advance for a course starting next month.' }],
              [same('22'), { fa: '2,500 به فروشنده گِل پرداخت می‌شود.', en: '2,500 is paid to the clay supplier.' }],
              [same('26'), { fa: 'دستمزد دستیار کارگاه، 1,200، پرداخت می‌شود.', en: 'The workshop assistant’s wages of 1,200 are paid.' }],
              [same('30'), { fa: 'رضا 1,500 برای مصارف شخصی برداشت می‌کند.', en: 'Reza withdraws 1,500 for personal use.' }],
            ],
          },
          hint: {
            fa: 'به سه رویداد دقت کنید: کوره‌ای که رضا از خانه آورده (آورده غیرنقد)، اجاره سه ماه که پیشاپیش پرداخت شده، و پولی که مدرسه برای دوره ماه آینده داده است.',
            en: 'Watch three items: the kiln Reza brings from home (a non-cash contribution), the three months’ rent paid in advance, and the money the school pays for next month’s course.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'رویدادهای حساس را طبقه‌بندی کنید', en: 'Classify the tricky items' },
                  text: {
                    fa: 'کوره دارایی کارگاه می‌شود و سرمایه را به ارزش منصفانه 12,000 افزایش می‌دهد. اجاره سه ماه آینده پیش‌پرداخت (دارایی) است، نه هزینه. پول مدرسه پیش‌دریافت درآمد (بدهی) است، چون هنوز کلاسی برگزار نشده.',
                    en: 'The kiln becomes a studio asset and raises capital by its 12,000 fair value. Three months of future rent is a prepayment (asset), not an expense. The school’s money is unearned revenue (a liability), because no class has been held yet.',
                  },
                },
                {
                  title: { fa: 'ثبت‌ها را بنویسید', en: 'Write the entries' },
                  text: {
                    fa: 'برای هر رویداد چهار مرحله را اجرا کنید. همه ثبت‌ها ساده‌اند.',
                    en: 'Run the four steps for each transaction. All the entries are simple ones.',
                  },
                },
                {
                  title: { fa: 'جمع‌ها و موجودی نقد را کنترل کنید', en: 'Check the totals and Cash' },
                  text: {
                    fa: 'جمع بدهکارها و بستانکارها را مقایسه کنید و حرکات موجودی نقد را جداگانه جمع بزنید.',
                    en: 'Compare total debits with total credits, and add up the movements in Cash separately.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              title: { fa: 'دفتر روزنامه کارگاه سفال مهر', en: 'Mehr Pottery Studio journal' },
              entries: [
                {
                  date: day(1),
                  lines: [
                    { account: ac.cash, debit: 30000 },
                    { account: gx.capital, credit: 30000 },
                  ],
                  memo: { fa: 'آورده نقدی رضا.', en: 'Reza’s cash investment.' },
                },
                {
                  date: day(1),
                  lines: [
                    { account: ac.equipment, debit: 12000 },
                    { account: gx.capital, credit: 12000 },
                  ],
                  memo: { fa: 'آورده غیرنقد: کوره به ارزش منصفانه.', en: 'Non-cash contribution: kiln at fair value.' },
                },
                {
                  date: day(2),
                  lines: [
                    { account: gx.prepaidRent, debit: 6000 },
                    { account: ac.cash, credit: 6000 },
                  ],
                  memo: { fa: 'اجاره سه ماه، پیشاپیش.', en: 'Three months’ rent in advance.' },
                },
                {
                  date: day(4),
                  lines: [
                    { account: ac.supplies, debit: 4000 },
                    { account: ac.ap, credit: 4000 },
                  ],
                  memo: { fa: 'خرید نسیه گِل و لعاب.', en: 'Clay and glazes on account.' },
                },
                {
                  date: day(9),
                  lines: [
                    { account: ac.cash, debit: 5500 },
                    { account: gx.classRevenue, credit: 5500 },
                  ],
                  memo: { fa: 'درآمد نقدی کلاس‌های آخر هفته.', en: 'Cash from weekend classes.' },
                },
                {
                  date: day(14),
                  lines: [
                    { account: ac.ar, debit: 3000 },
                    { account: gx.classRevenue, credit: 3000 },
                  ],
                  memo: { fa: 'کارگاه گروهی نسیه برای یک شرکت.', en: 'Team workshop for a company, on account.' },
                },
                {
                  date: day(18),
                  lines: [
                    { account: ac.cash, debit: 2000 },
                    { account: gx.unearned, credit: 2000 },
                  ],
                  memo: { fa: 'پیش‌دریافت از مدرسه برای دوره ماه آینده.', en: 'Advance from a school for next month’s course.' },
                },
                {
                  date: day(22),
                  lines: [
                    { account: ac.ap, debit: 2500 },
                    { account: ac.cash, credit: 2500 },
                  ],
                  memo: { fa: 'پرداخت به فروشنده گِل.', en: 'Payment to the clay supplier.' },
                },
                {
                  date: day(26),
                  lines: [
                    { account: gx.wages, debit: 1200 },
                    { account: ac.cash, credit: 1200 },
                  ],
                  memo: { fa: 'دستمزد دستیار.', en: 'Assistant’s wages.' },
                },
                {
                  date: day(30),
                  lines: [
                    { account: gx.drawings, debit: 1500 },
                    { account: ac.cash, credit: 1500 },
                  ],
                  memo: { fa: 'برداشت شخصی رضا.', en: 'Reza’s personal withdrawal.' },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'حرکات موجودی نقد', en: 'Movements in Cash' },
              head: [
                { fa: 'روز', en: 'Day' },
                { fa: 'شرح', en: 'Description' },
                { fa: 'بدهکار', en: 'Debit' },
                { fa: 'بستانکار', en: 'Credit' },
              ],
              numericCols: [2, 3],
              rows: [
                [same('1'), { fa: 'آورده نقدی', en: 'Cash investment' }, 30000, same('')],
                [same('2'), { fa: 'اجاره پیشاپیش', en: 'Rent in advance' }, same(''), 6000],
                [same('9'), { fa: 'کلاس‌های آخر هفته', en: 'Weekend classes' }, 5500, same('')],
                [same('18'), { fa: 'پیش‌دریافت مدرسه', en: 'School’s advance' }, 2000, same('')],
                [same('22'), { fa: 'پرداخت به فروشنده', en: 'Paid supplier' }, same(''), 2500],
                [same('26'), { fa: 'دستمزد', en: 'Wages' }, same(''), 1200],
                [same('30'), { fa: 'برداشت', en: 'Drawings' }, same(''), 1500],
                [{ fa: 'جمع', en: 'Totals' }, same(''), 37500, 11200],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              title: { fa: 'نتیجه', en: 'Result' },
              text: {
                fa: 'موجودی نقد: 37,500 − 11,200 = 26,300. جمع کل بدهکارها و بستانکارهای ده ثبت 67,700 است. درآمد ماه 8,500 است (5,500 + 3,000)؛ 2,000 دریافتی از مدرسه هنوز درآمد نیست، چون کلاسی برگزار نشده.',
                en: 'Cash: 37,500 − 11,200 = 26,300. Debits and credits of the ten entries each total 67,700. Revenue for the month is 8,500 (5,500 + 3,000); the school’s 2,000 is not revenue yet, because no class has been held.',
              },
            },
          ],
          answer: {
            fa: 'جمع بدهکار و بستانکار 67,700؛ موجودی نقد 26,300؛ درآمد ماه 8,500.',
            en: 'Debits and credits each total 67,700; Cash is 26,300; revenue for the month is 8,500.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'ثبت‌های مرکب', en: 'Compound entries' },
          difficulty: 'medium',
          problem: {
            fa: 'رویدادهای زیر را برای **آتلیه عکاسی لنز** ثبت کنید. هر کدام بیش از دو حساب را درگیر می‌کند.',
            en: 'Record the following for **Lenz Photo Studio**. Each one affects more than two accounts.',
          },
          given: {
            head: [
              { fa: 'بند', en: 'Item' },
              { fa: 'رویداد', en: 'Transaction' },
            ],
            rows: [
              [
                tag('الف', 'a'),
                {
                  fa: 'مالک یک خودرو با ارزش منصفانه 25,000 و 5,000 وجه نقد به کسب‌وکار می‌آورد.',
                  en: 'The owner contributes a car with a fair value of 25,000 plus 5,000 cash.',
                },
              ],
              [
                tag('ب', 'b'),
                {
                  fa: 'یک مجموعه دوربین و لنز به بهای 18,000 خریده می‌شود: 6,000 نقد و بقیه با وام بانکی.',
                  en: 'A camera and lens kit is bought for 18,000: 6,000 in cash and the rest with a bank loan.',
                },
              ],
              [
                tag('ج', 'c'),
                {
                  fa: 'عکاسی یک مراسم به مبلغ 9,000 انجام می‌شود؛ مشتری 4,000 را همان روز و بقیه را هفته بعد می‌پردازد.',
                  en: 'A 9,000 event shoot is completed; the client pays 4,000 on the day and the rest next week.',
                },
              ],
              [
                tag('د', 'd'),
                {
                  fa: 'قسط اول وام پرداخت می‌شود: 1,000 اصل و 150 بهره.',
                  en: 'The first loan instalment is paid: 1,000 principal and 150 interest.',
                },
              ],
            ],
          },
          hint: {
            fa: 'در هر ثبت مرکب، جمع بدهکارها باید با جمع بستانکارها برابر شود. برای بند (ب) اول حساب کنید چه مبلغی وام گرفته شده است.',
            en: 'In each compound entry, total debits must equal total credits. For item (b), first work out how much was borrowed.',
          },
          solution: [
            {
              type: 'journal',
              title: { fa: 'ثبت‌های مرکب آتلیه لنز', en: 'Lenz Photo Studio compound entries' },
              entries: [
                {
                  date: tag('الف', 'a'),
                  lines: [
                    { account: gx.vehicles, debit: 25000 },
                    { account: ac.cash, debit: 5000 },
                    { account: gx.capital, credit: 30000 },
                  ],
                  memo: { fa: 'آورده نقد و غیرنقد مالک.', en: 'Owner’s cash and non-cash contribution.' },
                },
                {
                  date: tag('ب', 'b'),
                  lines: [
                    { account: ac.equipment, debit: 18000 },
                    { account: ac.cash, credit: 6000 },
                    { account: ac.loan, credit: 12000 },
                  ],
                  memo: { fa: 'خرید دوربین؛ وام = 18,000 − 6,000 = 12,000.', en: 'Camera kit; loan = 18,000 − 6,000 = 12,000.' },
                },
                {
                  date: tag('ج', 'c'),
                  lines: [
                    { account: ac.cash, debit: 4000 },
                    { account: ac.ar, debit: 5000 },
                    { account: ac.revenue, credit: 9000 },
                  ],
                  memo: { fa: 'درآمد کامل در روز انجام کار شناسایی می‌شود؛ 5,000 طلب است.', en: 'All the revenue is recognized when the work is done; 5,000 is a receivable.' },
                },
                {
                  date: tag('د', 'd'),
                  lines: [
                    { account: ac.loan, debit: 1000 },
                    { account: gx.interestExp, debit: 150 },
                    { account: ac.cash, credit: 1150 },
                  ],
                  memo: { fa: 'قسط اول: اصل وام بدهی را کم می‌کند و بهره هزینه است.', en: 'First instalment: principal reduces the loan, interest is an expense.' },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              title: { fa: 'کنترل', en: 'Check' },
              text: {
                fa: 'مانده وام پس از بند (د): 12,000 − 1,000 = 11,000. فقط 150 بهره به سود و زیان می‌رود؛ 1,000 اصل وام هزینه نیست.',
                en: 'The loan balance after item (d): 12,000 − 1,000 = 11,000. Only the 150 of interest goes to the income statement; the 1,000 of principal is not an expense.',
              },
            },
          ],
          answer: {
            fa: 'چهار ثبت مرکب؛ وام 12,000 گرفته شده و پس از قسط اول، مانده آن 11,000 است.',
            en: 'Four compound entries; 12,000 was borrowed and the loan stands at 11,000 after the first instalment.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'پیدا کردن و اصلاح ثبت‌های نادرست', en: 'Find and correct wrong entries' },
          difficulty: 'hard',
          problem: {
            fa: 'کارمند تازه‌کار **خدمات نظافتی آریا** پنج رویداد زیر را ثبت کرده و همه ثبت‌ها به دفتر کل منتقل شده‌اند. برای هر مورد بگویید چه اشکالی دارد، ثبت درست چه بود و چه ثبت تصحیحی لازم است. در پایان بگویید سود ماه پس از اصلاح چقدر تغییر می‌کند.',
            en: 'A new clerk at **Arya Cleaning Services** recorded the five transactions below, and all of them have been posted. For each one, say what is wrong, what the right entry was and which correcting entry is needed. Finally, say how much the month’s profit changes after the corrections.',
          },
          given: {
            head: [
              { fa: 'ردیف', en: 'No.' },
              { fa: 'رویداد', en: 'What happened' },
              { fa: 'ثبت کارمند', en: 'What the clerk recorded' },
            ],
            rows: [
              [
                same('1'),
                { fa: 'وصول 2,000 از مشتری بابت فاکتور ماه قبل', en: 'Collected 2,000 from a customer for last month’s invoice' },
                { fa: 'بدهکار موجودی نقد 2,000 / بستانکار درآمد خدمات 2,000', en: 'Dr Cash 2,000 / Cr Service revenue 2,000' },
              ],
              [
                same('2'),
                { fa: 'خرید نقدی یک دستگاه فرش‌شویی به بهای 7,000', en: 'Bought a carpet-cleaning machine for 7,000 cash' },
                { fa: 'بدهکار هزینه تعمیرات 7,000 / بستانکار موجودی نقد 7,000', en: 'Dr Repairs expense 7,000 / Cr Cash 7,000' },
              ],
              [
                same('3'),
                { fa: 'پرداخت قبض برق منزل مالک، 600، از حساب کسب‌وکار', en: 'Paid the owner’s home electricity bill, 600, from the business account' },
                { fa: 'بدهکار هزینه آب، برق و اینترنت 600 / بستانکار موجودی نقد 600', en: 'Dr Utilities expense 600 / Cr Cash 600' },
              ],
              [
                same('4'),
                { fa: 'خرید نسیه مواد شوینده به مبلغ 900', en: 'Bought cleaning supplies on account, 900' },
                { fa: 'بدهکار ملزومات 900 / بستانکار موجودی نقد 900', en: 'Dr Supplies 900 / Cr Cash 900' },
              ],
              [
                same('5'),
                { fa: 'پرداخت 1,800 به فروشنده بابت خرید نسیه قبلی', en: 'Paid a supplier 1,800 for an earlier credit purchase' },
                { fa: 'بدهکار حساب‌های پرداختنی 1,080 / بستانکار موجودی نقد 1,080', en: 'Dr Accounts payable 1,080 / Cr Cash 1,080' },
              ],
            ],
          },
          hint: {
            fa: 'برای هر مورد، ثبت درست را کنار ثبت کارمند بنویسید. هر جا تفاوت دارند، ثبت تصحیحی دقیقاً همان تفاوت را جبران می‌کند.',
            en: 'For each item, write the right entry next to the clerk’s. Wherever they differ, the correcting entry makes up exactly that difference.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'تشخیص خطاها', en: 'Diagnosing the errors' },
              head: [
                { fa: 'ردیف', en: 'No.' },
                { fa: 'اشکال', en: 'What is wrong' },
                { fa: 'ثبت درست', en: 'Right entry' },
              ],
              rows: [
                [
                  same('1'),
                  {
                    fa: 'وصول طلب درآمد تازه نیست؛ درآمد دو بار شمرده شده و طلب کم نشده است.',
                    en: 'A collection is not new revenue; revenue was counted twice and the receivable never reduced.',
                  },
                  { fa: 'بدهکار موجودی نقد / بستانکار حساب‌های دریافتنی', en: 'Dr Cash / Cr Accounts receivable' },
                ],
                [
                  same('2'),
                  {
                    fa: 'دستگاه سال‌ها کار می‌کند؛ دارایی است، نه هزینه.',
                    en: 'The machine will work for years; it is an asset, not an expense.',
                  },
                  { fa: 'بدهکار تجهیزات / بستانکار موجودی نقد', en: 'Dr Equipment / Cr Cash' },
                ],
                [
                  same('3'),
                  {
                    fa: 'قبض منزل مالک هزینه کسب‌وکار نیست؛ برداشت است.',
                    en: 'The owner’s home bill is not a business expense; it is a drawing.',
                  },
                  { fa: 'بدهکار برداشت / بستانکار موجودی نقد', en: 'Dr Drawings / Cr Cash' },
                ],
                [
                  same('4'),
                  {
                    fa: 'خرید نسیه بوده و پولی پرداخت نشده است.',
                    en: 'It was a credit purchase; no money was paid.',
                  },
                  { fa: 'بدهکار ملزومات / بستانکار حساب‌های پرداختنی', en: 'Dr Supplies / Cr Accounts payable' },
                ],
                [
                  same('5'),
                  {
                    fa: 'جابه‌جایی ارقام: 1,800 به‌صورت 1,080 ثبت شده و 720 کم ثبت شده است.',
                    en: 'Transposed digits: 1,800 was recorded as 1,080, so 720 is missing.',
                  },
                  { fa: 'بدهکار حساب‌های پرداختنی 1,800 / بستانکار موجودی نقد 1,800', en: 'Dr Accounts payable 1,800 / Cr Cash 1,800' },
                ],
              ],
            },
            {
              type: 'journal',
              title: { fa: 'ثبت‌های تصحیحی', en: 'Correcting entries' },
              entries: [
                {
                  date: same('(1)'),
                  lines: [
                    { account: ac.revenue, debit: 2000 },
                    { account: ac.ar, credit: 2000 },
                  ],
                  memo: { fa: 'حذف درآمد تکراری و کاهش طلب.', en: 'Removes the double-counted revenue and reduces the receivable.' },
                },
                {
                  date: same('(2)'),
                  lines: [
                    { account: ac.equipment, debit: 7000 },
                    { account: gx.repairsExp, credit: 7000 },
                  ],
                  memo: { fa: 'انتقال دستگاه از هزینه به دارایی.', en: 'Moves the machine from expense to asset.' },
                },
                {
                  date: same('(3)'),
                  lines: [
                    { account: gx.drawings, debit: 600 },
                    { account: gx.utilities, credit: 600 },
                  ],
                  memo: { fa: 'قبض شخصی مالک، برداشت است.', en: 'The owner’s personal bill is a drawing.' },
                },
                {
                  date: same('(4)'),
                  lines: [
                    { account: ac.cash, debit: 900 },
                    { account: ac.ap, credit: 900 },
                  ],
                  memo: { fa: 'برگرداندن موجودی نقد و ثبت بدهی به فروشنده.', en: 'Restores Cash and records the amount owed to the supplier.' },
                },
                {
                  date: same('(5)'),
                  lines: [
                    { account: ac.ap, debit: 720 },
                    { account: ac.cash, credit: 720 },
                  ],
                  memo: { fa: 'ثبت مابه‌التفاوت: 1,800 − 1,080 = 720.', en: 'Records the difference: 1,800 − 1,080 = 720.' },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'example',
              title: { fa: 'اثر بر سود', en: 'Effect on profit' },
              text: {
                fa: 'اصلاح (1) درآمد را 2,000 کم می‌کند. اصلاح‌های (2) و (3) هزینه‌ها را 7,000 و 600 کم می‌کنند. اصلاح‌های (4) و (5) فقط حساب‌های ترازنامه‌ای را تغییر می‌دهند. اثر خالص: 7,000 + 600 − 2,000 = 5,600 افزایش سود.',
                en: 'Correction (1) cuts revenue by 2,000. Corrections (2) and (3) cut expenses by 7,000 and 600. Corrections (4) and (5) change only balance-sheet accounts. Net effect: 7,000 + 600 − 2,000 = 5,600 more profit.',
              },
            },
          ],
          answer: {
            fa: 'پنج ثبت تصحیحی؛ پس از اصلاح، سود ماه 5,600 افزایش می‌یابد.',
            en: 'Five correcting entries; after them, the month’s profit rises by 5,600.',
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
              fa: 'مدارک مثبته هم شاهد رویدادند و هم داده‌های ثبت را فراهم می‌کنند؛ بدون مدرک، ثبتی در کار نیست.',
              en: 'Source documents are both the evidence and the data for every entry: no document, no entry.',
            },
            {
              fa: 'دفتر روزنامه رویدادها را به ترتیب تاریخ ثبت می‌کند: تاریخ، حساب‌ها، عطف، بدهکار، بستانکار و شرح.',
              en: 'The general journal records transactions in date order: date, accounts, reference, debit, credit and explanation.',
            },
            {
              fa: 'چهار پرسش کلید ثبت هر رویدادی است: کدام حساب‌ها؟ چه نوعی؟ افزایش یا کاهش؟ بدهکار یا بستانکار؟',
              en: 'Four questions unlock any transaction: which accounts? what type? increase or decrease? debit or credit?',
            },
            {
              fa: 'وصول طلب و بازپرداخت اصل وام درآمد یا هزینه نیستند؛ پیش‌پرداخت دارایی و پیش‌دریافت بدهی است؛ برداشت مالک هم هزینه نیست.',
              en: 'Collecting a receivable and repaying loan principal are neither revenue nor expense; a prepayment is an asset and a customer advance a liability; drawings are never an expense.',
            },
            {
              fa: 'ثبت مرکب سه سطر یا بیشتر دارد و فقط جمع دو طرف آن باید برابر باشد.',
              en: 'A compound entry has three or more lines; only its totals must balance.',
            },
            {
              fa: 'ثبت نادرست را پاک نکنید؛ با برگرداندن و ثبت دوباره، یا با یک ثبت تصحیحی، اصلاحش کنید.',
              en: 'Never erase a wrong entry; fix it by reversing and re-recording, or with one correcting entry.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'گام بعدی', en: 'What comes next' },
          text: {
            fa: 'دفتر روزنامه ماجرا را به ترتیب زمان روایت می‌کند، اما نمی‌گوید نوا اکنون چقدر وجه نقد دارد. برای پاسخ به این پرسش، هر سطر را به دفتر کل منتقل می‌کنیم؛ موضوع درس انتقال به دفتر کل.',
            en: 'The journal tells the story in time order, but it cannot tell you how much cash Nova has right now. For that, every line is posted to the ledger: the subject of the lesson on posting to the ledger.',
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
              term: { fa: 'ثبت روزنامه', en: 'Journal entry' },
              def: {
                fa: 'ثبت تاریخ‌دار یک رویداد که حساب‌های بدهکار و بستانکار، مبالغ و شرح را نشان می‌دهد؛ در عمل روی سند حسابداری نوشته می‌شود.',
                en: 'A dated record of one transaction showing the accounts debited and credited, the amounts and an explanation; in practice written on an accounting voucher.',
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
              term: { fa: 'ثبت ساده', en: 'Simple entry' },
              def: {
                fa: 'ثبتی با دقیقاً یک حساب بدهکار و یک حساب بستانکار.',
                en: 'An entry with exactly one debited and one credited account.',
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
              term: { fa: 'آورده غیرنقد', en: 'Non-cash contribution' },
              def: {
                fa: 'دارایی‌ای (مانند ابزار یا خودرو) که مالک به کسب‌وکار می‌آورد و به ارزش منصفانه روز آوردن، سرمایه را افزایش می‌دهد.',
                en: 'An asset (such as tools or a car) an owner brings into the business; it increases capital at its fair value on that day.',
              },
            },
            {
              term: { fa: 'ثبت تصحیحی', en: 'Correcting entry' },
              def: {
                fa: 'ثبتی تازه که خطای یک ثبت قبلی را بدون پاک کردن آن اصلاح می‌کند.',
                en: 'A new entry that fixes an earlier wrong entry without erasing it.',
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
        fa: 'ابتدا حساب بدهکار در آغاز سطر نوشته می‌شود و حساب بستانکار در سطر بعد با تورفتگی می‌آید تا خواننده حتی بدون نگاه به ستون مبالغ، دو طرف ثبت را از هم تشخیص دهد. نوشتن هر دو در یک سطر، قاعده «هر سطر یک حساب» را می‌شکند.',
        en: 'Debits come first, flush left; credits follow on the next line, indented, so a reader can tell the two sides apart even without looking at the amount columns. Putting both on one line breaks the “one account per line” rule.',
      },
    },
    {
      q: {
        fa: 'نوا در روز 27 مبلغ 1,500 به فروشنده‌ای می‌پردازد که در روز 4 از او ملزومات نسیه خریده بود. ثبت درست کدام است؟',
        en: 'On Day 27 Nova pays 1,500 to the supplier it bought supplies from on Day 4. Which entry is correct?',
      },
      options: [
        { fa: 'بدهکار موجودی نقد 1,500 / بستانکار حساب‌های پرداختنی 1,500', en: 'Dr Cash 1,500 / Cr Accounts payable 1,500' },
        { fa: 'بدهکار ملزومات 1,500 / بستانکار موجودی نقد 1,500', en: 'Dr Supplies 1,500 / Cr Cash 1,500' },
        { fa: 'بدهکار هزینه ملزومات 1,500 / بستانکار موجودی نقد 1,500', en: 'Dr Supplies expense 1,500 / Cr Cash 1,500' },
        { fa: 'بدهکار حساب‌های پرداختنی 1,500 / بستانکار موجودی نقد 1,500', en: 'Dr Accounts payable 1,500 / Cr Cash 1,500' },
      ],
      answer: 3,
      explain: {
        fa: 'این پرداخت بخشی از یک بدهی را تسویه می‌کند (حساب‌های پرداختنی بدهکار می‌شود تا کاهش یابد) و یک دارایی را کم می‌کند (موجودی نقد بستانکار می‌شود). خودِ ملزومات در روز 4 ثبت شده‌اند؛ بدهکار کردن دوباره آن‌ها یعنی دو بار شمردنشان. گزینه اول همان ثبت درست است که برعکس نوشته شده.',
        en: 'The payment settles part of a liability (debit Accounts payable to decrease it) and reduces an asset (credit Cash). The supplies themselves were recorded on Day 4; debiting Supplies again would count them twice. The first option is the right entry written backwards.',
      },
    },
    {
      q: { fa: 'کدام رویداد به ثبت مرکب نیاز دارد؟', en: 'Which transaction calls for a compound entry?' },
      options: [
        { fa: 'خرید چاپگری به بهای 12,000: مبلغ 4,000 نقد و 8,000 نسیه', en: 'Buying a 12,000 printer: 4,000 in cash and 8,000 on account' },
        { fa: 'پرداخت نقدی 2,500 بابت اجاره', en: 'Paying 2,500 of rent in cash' },
        { fa: 'وصول 2,500 از یک مشتری', en: 'Collecting 2,500 from a customer' },
        { fa: 'برداشت 1,000 توسط سارا برای مصارف شخصی', en: 'Sara withdrawing 1,000 for personal use' },
      ],
      answer: 0,
      explain: {
        fa: 'خرید چاپگر سه حساب را درگیر می‌کند: تجهیزات (بدهکار 12,000)، موجودی نقد (بستانکار 4,000) و حساب‌های پرداختنی (بستانکار 8,000). هر یک از گزینه‌های دیگر دقیقاً دو حساب را درگیر می‌کند و با یک ثبت ساده ثبت می‌شود.',
        en: 'The printer purchase affects three accounts: Equipment (debit 12,000), Cash (credit 4,000) and Accounts payable (credit 8,000). Each of the other transactions touches exactly two accounts and is a simple entry.',
      },
    },
    {
      q: {
        fa: 'دانشجویی وصول روز 24 نوا را به‌صورت «بدهکار موجودی نقد 2,500 / بستانکار درآمد خدمات 2,500» ثبت می‌کند. نتیجه چیست؟',
        en: 'A student records Nova’s Day 24 collection as Dr Cash 2,500 / Cr Service revenue 2,500. What is the result?',
      },
      options: [
        { fa: 'ثبت قابل قبول است، چون وجه نقد دریافت شده است', en: 'The entry is acceptable because cash was received' },
        { fa: 'موجودی نقد 2,500 کمتر از واقع نشان داده می‌شود', en: 'Cash is understated by 2,500' },
        {
          fa: 'درآمد خدمات و حساب‌های دریافتنی هر دو 2,500 بیش از واقع نشان داده می‌شوند',
          en: 'Service revenue and Accounts receivable are both overstated by 2,500',
        },
        { fa: 'بدهی‌ها 2,500 بیش از واقع نشان داده می‌شوند', en: 'Liabilities are overstated by 2,500' },
      ],
      answer: 2,
      explain: {
        fa: 'درآمد این خدمت در روز 12 ثبت شده بود. بستانکار کردن دوباره درآمد یعنی دو بار شمردن آن؛ و چون حساب‌های دریافتنی بستانکار نشده، مانده آن به‌جای 1,500 همچنان 4,000 است. موجودی نقد درست ثبت شده، پس گزینه «کمتر از واقع» نادرست است.',
        en: 'The revenue was already recorded on Day 12. Crediting revenue again counts it twice, and because Accounts receivable was never credited, it still shows 4,000 instead of 1,500. Cash itself was recorded correctly, so “Cash is understated” is wrong.',
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
        fa: 'نوا در روز 5 دوازده ماه پوشش بیمه‌ای آینده خریده است؛ منبعی که در اختیار دارد، یعنی دارایی. این دارایی ماه‌به‌ماه و با سپری شدن دوره پوشش به هزینه تبدیل می‌شود و این انتقال با ثبت اصلاحی انجام می‌گیرد (در درس ثبت‌های اصلاحی). بیمه نقد خریده شده، پس نسیه بودن دلیل نیست.',
        en: 'On Day 5 Nova has bought 12 months of future protection, a resource it controls, i.e. an asset. It becomes expense month by month as the coverage is used up; that transfer is made by an adjusting entry (see the lesson on adjusting entries). The policy was paid in cash, so “on account” is not the reason.',
      },
    },
    {
      q: {
        fa: 'کیان 20,000 وجه نقد و ابزاری با ارزش منصفانه 6,000 به تعمیرگاه می‌آورد. حساب سرمایه چقدر بستانکار می‌شود؟',
        en: 'Kian contributes 20,000 cash and tools with a fair value of 6,000. How much is credited to Capital?',
      },
      options: [
        { fa: '20,000', en: '20,000' },
        { fa: '6,000', en: '6,000' },
        { fa: '14,000', en: '14,000' },
        { fa: '26,000', en: '26,000' },
      ],
      answer: 3,
      explain: {
        fa: 'آورده غیرنقد هم سرمایه را افزایش می‌دهد و به ارزش منصفانه ثبت می‌شود: 20,000 + 6,000 = 26,000. پاسخ 20,000 ابزار را نادیده می‌گیرد و 14,000 به‌اشتباه ابزار را کم می‌کند، در حالی که ابزار هم دارایی کسب‌وکار شده است.',
        en: 'A non-cash contribution increases capital too, at fair value: 20,000 + 6,000 = 26,000. The 20,000 answer ignores the tools, and 14,000 wrongly subtracts them, even though the tools have become a business asset.',
      },
    },
    {
      q: {
        fa: 'کسب‌وکاری قسط وامی به مبلغ 1,120 می‌پردازد: 1,000 اصل و 120 بهره. ثبت درست کدام است؟',
        en: 'A business pays a loan instalment of 1,120: 1,000 principal and 120 interest. Which entry is correct?',
      },
      options: [
        {
          fa: 'بدهکار وام پرداختنی 1,000 و هزینه بهره 120 / بستانکار موجودی نقد 1,120',
          en: 'Dr Loan payable 1,000 and Interest expense 120 / Cr Cash 1,120',
        },
        { fa: 'بدهکار هزینه بهره 1,120 / بستانکار موجودی نقد 1,120', en: 'Dr Interest expense 1,120 / Cr Cash 1,120' },
        { fa: 'بدهکار وام پرداختنی 1,120 / بستانکار موجودی نقد 1,120', en: 'Dr Loan payable 1,120 / Cr Cash 1,120' },
        { fa: 'بدهکار وام پرداختنی 1,000 / بستانکار موجودی نقد 1,000', en: 'Dr Loan payable 1,000 / Cr Cash 1,000' },
      ],
      answer: 0,
      explain: {
        fa: 'اصل وام فقط بدهی را کم می‌کند و بهره هزینه است؛ پس دو سطر بدهکار و یک سطر بستانکار لازم است (1,000 + 120 = 1,120). اگر کل قسط را هزینه کنید، سود 1,000 کمتر از واقع و وام 1,000 بیشتر از واقع می‌ماند؛ اگر کل آن را از وام کم کنید، هزینه بهره جا می‌افتد.',
        en: 'Principal only reduces the liability; the interest is an expense, so the entry needs two debit lines and one credit (1,000 + 120 = 1,120). Expensing the whole instalment understates profit by 1,000 and leaves the loan 1,000 too high; charging it all to the loan leaves out the interest expense.',
      },
    },
    {
      q: {
        fa: 'پس از ثبت رویدادهای روز 1 تا 5 نوا، مانده موجودی نقد چقدر است؟',
        en: 'After Nova’s entries for Days 1 to 5, what is the Cash balance?',
      },
      options: [
        { fa: '65,000', en: '65,000' },
        { fa: '45,000', en: '45,000' },
        { fa: '43,800', en: '43,800' },
        { fa: '46,300', en: '46,300' },
      ],
      answer: 2,
      explain: {
        fa: 'موجودی نقد: 50,000 + 15,000 − 20,000 − 1,200 = 43,800. خرید ملزومات روز 4 نسیه بود و به موجودی نقد دست نزد. عدد 45,000 پرداخت بیمه را جا انداخته و 46,300 مانده پایان ماه است.',
        en: 'Cash: 50,000 + 15,000 − 20,000 − 1,200 = 43,800. The Day 4 supplies were bought on account and did not touch Cash. 45,000 forgets the insurance payment, and 46,300 is the month-end balance.',
      },
    },
    {
      q: {
        fa: 'کارمندی خرید نقدی دستگاهی 7,000 را به بدهکار هزینه تعمیرات ثبت کرده است و ثبت منتقل شده. اصلاح درست کدام است؟',
        en: 'A clerk debited Repairs expense for a 7,000 machine bought for cash, and the entry has been posted. What is the right fix?',
      },
      options: [
        { fa: 'بدهکار هزینه تعمیرات 7,000 / بستانکار تجهیزات 7,000', en: 'Dr Repairs expense 7,000 / Cr Equipment 7,000' },
        { fa: 'پاک کردن ثبت نادرست و نوشتن ثبت تازه به‌جای آن', en: 'Erase the wrong entry and write a new one in its place' },
        { fa: 'بدهکار تجهیزات 7,000 / بستانکار موجودی نقد 7,000', en: 'Dr Equipment 7,000 / Cr Cash 7,000' },
        { fa: 'بدهکار تجهیزات 7,000 / بستانکار هزینه تعمیرات 7,000', en: 'Dr Equipment 7,000 / Cr Repairs expense 7,000' },
      ],
      answer: 3,
      explain: {
        fa: 'بستانکار موجودی نقد در ثبت اولیه درست بود؛ فقط بدهکار در حساب اشتباه نشسته است. ثبت تصحیحی تجهیزات را بدهکار و هزینه تعمیرات را بستانکار می‌کند تا هزینه حذف و دارایی ثبت شود. «بدهکار تجهیزات / بستانکار موجودی نقد» پرداخت را دو بار از موجودی نقد کم می‌کند و پاک کردن ثبت، ردّ حسابرسی را از بین می‌برد.',
        en: 'The credit to Cash in the original entry was right; only the debit landed in the wrong account. The correcting entry debits Equipment and credits Repairs expense, removing the expense and recording the asset. “Dr Equipment / Cr Cash” would take the payment out of Cash a second time, and erasing destroys the audit trail.',
      },
    },
  ],
}
