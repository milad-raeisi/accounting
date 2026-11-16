import type { Lesson } from '../types'

/** Same text in both languages (codes, voucher numbers). */
const same = (s: string) => ({ fa: s, en: s })
/** Empty table cell. */
const blank = { fa: '', en: '' }
const none = { fa: 'ندارد', en: 'None' }
const day = (n: number) => ({ fa: `روز ${n}`, en: `Day ${n}` })
const total = { fa: 'جمع', en: 'Total' }

/* Nova accounts used in this lesson (general codes from Nova's chart; subsidiary and detail codes are illustrative). */
const ac = {
  cash: { fa: 'موجودی نقد', en: 'Cash' },
  ar: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' },
  supplies: { fa: 'ملزومات', en: 'Supplies' },
  prepaid: { fa: 'پیش‌پرداخت بیمه', en: 'Prepaid insurance' },
  equipment: { fa: 'تجهیزات', en: 'Equipment' },
  accDep: { fa: 'استهلاک انباشته تجهیزات', en: 'Accumulated depreciation' },
  ap: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
  salPay: { fa: 'حقوق پرداختنی', en: 'Salaries payable' },
  intPay: { fa: 'بهره پرداختنی', en: 'Interest payable' },
  loan: { fa: 'وام پرداختنی', en: 'Loan payable' },
  capital: { fa: 'سرمایه سارا', en: 'Capital (Sara)' },
  rent: { fa: 'هزینه اجاره', en: 'Rent expense' },
  salaries: { fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' },
  arAtlas: { fa: '102001 دریافتنی‌های تجاری / 2001 کافه اطلس', en: '102001 Trade receivables / 2001 Atlas Café' },
  arParsa: { fa: '102001 دریافتنی‌های تجاری / 2002 کتاب‌فروشی پارسا', en: '102001 Trade receivables / 2002 Parsa Books' },
  revAtlas: { fa: '401001 درآمد طراحی گرافیک / 5001 پروژه منوی کافه اطلس', en: '401001 Graphic design revenue / 5001 Atlas Café menu project' },
  revParsa: { fa: '401001 درآمد طراحی گرافیک / 5002 پروژه جلد کتاب پارسا', en: '401001 Graphic design revenue / 5002 Parsa Books cover project' },
  bankA: { fa: '101002 بانک‌ها / 1002 حساب جاری بانک الف', en: '101002 Banks / 1002 Bank A current account' },
  apNegin: { fa: '201001 پرداختنی‌های تجاری / 3001 لوازم‌التحریر نگین', en: '201001 Trade payables / 3001 Negin Stationery' },
  designSupplies: { fa: '103002 ملزومات طراحی و چاپ', en: '103002 Design and print supplies' },
}

export const lesson: Lesson = {
  slug: 'vouchers-coding',
  number: 7,
  level: 'intermediate',
  minutes: 28,
  icon: 'FileCheck',
  tone: 'primary',
  title: { fa: 'سند حسابداری و کدینگ سه‌سطحی', en: 'Accounting Vouchers and Three-Level Coding' },
  summary: {
    fa: 'ببینید حسابداران حرفه‌ای در ایران هر ثبت را چگونه روی سند حسابداری می‌نویسند، شماره و تأیید می‌کنند و با کدینگ سه‌سطحی کل، معین و تفصیلی، طلب هر مشتری، بدهی به هر تأمین‌کننده و مانده هر حساب بانکی را جداگانه دنبال می‌کنند.',
    en: 'See how professional accountants in Iran write every entry on an accounting voucher, number and approve it, and use three-level coding (general, subsidiary, detail) to follow each customer, each supplier and each bank account separately.',
  },
  objectives: [
    {
      fa: 'مدرک مثبته را از سند حسابداری تشخیص دهید و همه اجزای یک سند کامل را نام ببرید',
      en: 'Tell a source document from an accounting voucher and name every part of a complete voucher',
    },
    {
      fa: 'انواع سند (افتتاحیه، عادی، اصلاحی، بستن و اختتامیه) و گردش شماره‌گذاری و تأیید آن را توضیح دهید',
      en: 'Explain the voucher types (opening, regular, adjusting, closing, final closing) and the numbering and approval workflow',
    },
    {
      fa: 'برای یک شرکت خدماتی کوچک کدینگ سه‌سطحی کل، معین و تفصیلی طراحی کنید',
      en: 'Design a three-level coding plan (general, subsidiary, detail) for a small service company',
    },
    {
      fa: 'سند حسابداری را با کد کامل تنظیم کنید و خطاهای یک سند را پیدا کنید',
      en: 'Prepare fully coded vouchers and find the errors in a faulty one',
    },
    {
      fa: 'نقش دفاتر قانونی روزنامه و کل و نرم‌افزار حسابداری را شرح دهید',
      en: 'Describe the role of the statutory journal and ledger and of accounting software',
    },
  ],
  sections: [
    {
      id: 'source-to-voucher',
      title: { fa: 'از مدرک مثبته تا سند حسابداری', en: 'From Source Document to Voucher' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'سه ماه از کار نوا گذشته است. بانکی که به نوا وام داده می‌پرسد: «این 2,500 که روز 24 به حساب بانکی آمده، از کدام مشتری بوده و مدرکش کجاست؟» اگر ثبت‌ها فقط سطرهایی در یک دفتر باشند، پیدا کردن پاسخ ساعت‌ها طول می‌کشد. حسابداران حرفه‌ای هر ثبت را روی یک **سند حسابداری** می‌نویسند، به آن شماره می‌دهند، مدارکش را پیوست می‌کنند و برای هر مشتری و هر حساب بانکی کد جداگانه دارند؛ پس پاسخ در چند ثانیه پیدا می‌شود.',
            en: 'Nova is three months old. The bank that lent it money asks: “The 2,500 that reached your bank account on Day 24: which customer paid it, and where is the evidence?” If entries are just lines in a book, the answer takes hours. Professional accountants write every entry on a numbered **accounting voucher**, attach its evidence and give each customer and each bank account its own code, so the answer takes seconds.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'در درس ثبت در دفتر روزنامه دیدیم که هر ثبت با یک **مدرک مثبته** (سند پشتیبان) شروع می‌شود: فاکتور فروش یا خرید، رسید یا اعلامیه بانک، قبض آب و برق، قرارداد، فهرست حقوق یا تصویر چک. مدرک مثبته **وقوع رویداد را ثابت می‌کند**. **سند حسابداری** برگه‌ای است که حسابدار بر پایه این مدارک تنظیم می‌کند و نشان می‌دهد رویداد با چه مبلغی در کدام حساب‌ها بدهکار و بستانکار می‌شود. به زبان ساده: مدرک مثبته می‌گوید «چه شد»، سند حسابداری می‌گوید «در دفاتر چه ثبت کردیم».',
            en: 'In the lesson on journal entries we saw that every entry starts from a **source document**: a sales or purchase invoice, a bank receipt or advice, a utility bill, a contract, a payroll sheet or a copy of a cheque. A source document **proves that the event happened**. An **accounting voucher** is the form the accountant prepares from those documents, showing which accounts are debited and credited and by how much. Put simply: the source document says “what happened”; the voucher says “what we recorded”.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'مدرک مثبته', en: 'Source document' },
            items: [
              {
                fa: 'معمولاً از بیرون می‌آید یا در جریان کار صادر می‌شود (فاکتور، رسید، قرارداد)',
                en: 'Usually comes from outside or from operations (invoice, receipt, contract)',
              },
              { fa: 'وقوع رویداد، طرفین، تاریخ و مبلغ را ثابت می‌کند', en: 'Proves the event, the parties, the date and the amount' },
              { fa: 'درباره بدهکار و بستانکار چیزی نمی‌گوید', en: 'Says nothing about debits and credits' },
              { fa: 'به سند حسابداری پیوست و با شماره آن بایگانی می‌شود', en: 'Is attached to the voucher and filed under its number' },
            ],
          },
          right: {
            title: { fa: 'سند حسابداری', en: 'Accounting voucher' },
            items: [
              { fa: 'در واحد حسابداری تنظیم می‌شود', en: 'Is prepared inside the accounting department' },
              { fa: 'حساب‌ها، کدها و مبالغ بدهکار و بستانکار را نشان می‌دهد', en: 'Shows the accounts, their codes and the debit and credit amounts' },
              {
                fa: 'شماره پیاپی، تاریخ، شرح و امضای تنظیم‌کننده و تأییدکننده دارد',
                en: 'Has a sequential number, a date, descriptions and the signatures of the preparer and the approver',
              },
              { fa: 'مبنای ثبت در دفاتر و نرم‌افزار است', en: 'Is the basis for posting to the books and the software' },
            ],
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'رویداد و مدرک', en: 'Event and document' },
              text: {
                fa: 'نوا برای کافه اطلس منو طراحی می‌کند و فاکتور شماره 31 را صادر می‌کند.',
                en: 'Nova designs a menu for Atlas Café and issues invoice no. 31.',
              },
            },
            {
              title: { fa: 'تنظیم سند', en: 'Prepare the voucher' },
              text: {
                fa: 'حسابدار بر اساس فاکتور، سند حسابداری را با کد حساب‌ها و مبالغ تنظیم می‌کند و فاکتور را پیوست آن می‌کند.',
                en: 'The accountant prepares a voucher with account codes and amounts from the invoice and attaches the invoice.',
              },
            },
            {
              title: { fa: 'بررسی و تأیید', en: 'Review and approval' },
              text: {
                fa: 'شخص دیگری کدها، مبالغ و مدارک را بررسی و سند را تأیید می‌کند.',
                en: 'Someone else checks the codes, amounts and documents and approves the voucher.',
              },
            },
            {
              title: { fa: 'انتقال به حساب‌ها', en: 'Posting' },
              text: {
                fa: 'مبالغ سند به حساب‌های کل، معین و تفصیلی منتقل می‌شود. در نرم‌افزار، این کار با ذخیره و تأیید سند خودکار انجام می‌شود.',
                en: 'The amounts flow to the general, subsidiary and detail accounts. In software this happens automatically when the voucher is saved and approved.',
              },
            },
            {
              title: { fa: 'گزارش', en: 'Reporting' },
              text: {
                fa: 'تراز آزمایشی، صورت‌حساب هر مشتری و صورت‌های مالی از همین حساب‌ها ساخته می‌شوند.',
                en: 'The trial balance, each customer’s statement and the financial statements are built from those accounts.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'سند حسابداری همان ثبت روزنامه است، در قالبی رسمی', en: 'A voucher is a journal entry in a formal frame' },
          text: {
            fa: 'از نظر محتوا، سند حسابداری همان ثبت روزنامه‌ای است که تاکنون نوشته‌ایم: حساب‌های بدهکار، حساب‌های بستانکار و جمع‌های برابر. آنچه اضافه می‌شود قالب است: شماره، کد، شرح، پیوست و امضا. در عمل حسابداری ایران به هر سطر سند معمولاً **«آرتیکل»** یا «ردیف سند» می‌گویند.',
            en: 'In substance, a voucher is the same journal entry we have been writing: debited accounts, credited accounts, equal totals. What it adds is the frame: a number, codes, descriptions, attachments and signatures. In Iranian practice each line of a voucher is usually called an **“article”** («آرتیکل») or voucher line.',
          },
        },
      ],
    },
    {
      id: 'voucher-anatomy',
      title: { fa: 'اجزای یک سند حسابداری', en: 'Anatomy of a Voucher' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'یک سند حسابداری کامل سه بخش دارد: **سرسند** (شماره، تاریخ، نوع و شرح کلی)، **بدنه** (آرتیکل‌ها: کد حساب، شرح ردیف، بدهکار و بستانکار) و **پاسند** (جمع ستون‌ها، تعداد پیوست‌ها و امضاها). جدول زیر هر جزء را با سند شماره 7 نوا نشان می‌دهد.',
            en: 'A complete voucher has three parts: the **header** (number, date, type and overall description), the **body** (the lines: account code, line description, debit and credit) and the **footer** (column totals, number of attachments and signatures). The table below shows each part using Nova’s voucher no. 7.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'اجزای سند حسابداری', en: 'The parts of a voucher' },
          head: [
            { fa: 'جزء سند', en: 'Field' },
            { fa: 'چه چیزی در آن می‌آید', en: 'What it holds' },
            { fa: 'در سند شماره 7 نوا', en: 'In Nova’s voucher 7' },
          ],
          rows: [
            [
              { fa: 'شماره سند', en: 'Voucher number' },
              { fa: 'عددی پیاپی و بدون جاافتادگی در هر سال مالی', en: 'A sequential number with no gaps within the fiscal year' },
              same('7'),
            ],
            [
              { fa: 'تاریخ سند', en: 'Date' },
              {
                fa: 'تاریخ وقوع رویداد؛ در ایران به تقویم هجری شمسی، مثلاً 1405/07/12',
                en: 'The date of the event; in Iran, in the Solar Hijri calendar, e.g. 1405/07/12',
              },
              day(12),
            ],
            [
              { fa: 'نوع سند', en: 'Type' },
              { fa: 'افتتاحیه، عادی، اصلاحی، بستن یا اختتامیه', en: 'Opening, regular, adjusting, closing or final closing' },
              { fa: 'عادی', en: 'Regular' },
            ],
            [
              { fa: 'شرح کلی', en: 'Overall description' },
              { fa: 'یک جمله روشن درباره کل رویداد', en: 'One clear sentence about the whole event' },
              { fa: 'صدور صورت‌حساب خدمات طراحی برای دو مشتری', en: 'Billing design services to two clients' },
            ],
            [
              { fa: 'آرتیکل (ردیف)', en: 'Lines (articles)' },
              { fa: 'هر سطر یک حساب؛ معمولاً اول بدهکارها، بعد بستانکارها', en: 'One line per account; debits usually first, then credits' },
              { fa: '4 ردیف', en: '4 lines' },
            ],
            [
              { fa: 'کد حساب', en: 'Account code' },
              {
                fa: 'کد معین و، اگر آن حساب تفصیلی لازم دارد، کد تفصیلی',
                en: 'The subsidiary code and, where the account requires it, a detail code',
              },
              { fa: '102001 با تفصیلی 2001', en: '102001 with detail 2001' },
            ],
            [
              { fa: 'شرح ردیف', en: 'Line description' },
              { fa: 'جزئیات همان سطر: شماره فاکتور، نام طرف حساب، شماره چک', en: 'Details of that line: invoice number, counterparty, cheque number' },
              { fa: 'فاکتور 31: طراحی منو، کافه اطلس', en: 'Invoice 31: menu design, Atlas Café' },
            ],
            [
              { fa: 'بدهکار و بستانکار', en: 'Debit and credit' },
              { fa: 'مبلغ هر سطر فقط در یکی از دو ستون', en: 'Each line’s amount in one column only' },
              { fa: '2,500 در ستون بدهکار', en: '2,500 in the debit column' },
            ],
            [
              { fa: 'جمع ستون‌ها', en: 'Column totals' },
              { fa: 'جمع بدهکار و جمع بستانکار باید برابر باشند', en: 'Total debits and total credits must be equal' },
              same('4,000 = 4,000'),
            ],
            [
              { fa: 'پیوست', en: 'Attachments' },
              { fa: 'تعداد و نوع مدارک مثبته پیوست‌شده', en: 'Number and type of supporting documents' },
              { fa: '2 برگ: فاکتورهای 31 و 32', en: '2 pages: invoices 31 and 32' },
            ],
            [
              { fa: 'امضاها', en: 'Signatures' },
              { fa: 'تنظیم‌کننده، رسیدگی‌کننده و تأییدکننده', en: 'Prepared by, checked by, approved by' },
              { fa: 'تنظیم: حسابدار؛ تأیید: سارا', en: 'Prepared: accountant; approved: Sara' },
            ],
          ],
        },
        {
          type: 'h',
          text: { fa: 'سند شماره 7 نوا', en: 'Nova’s voucher no. 7' },
        },
        {
          type: 'p',
          text: {
            fa: 'روز 12، نوا 4,000 خدمات نسیه ارائه کرد. همان تفکیکی را که در درس انتقال به دفتر کل فرض کردیم ادامه می‌دهیم: 2,500 برای کافه اطلس (طراحی منو) و 1,500 برای کتاب‌فروشی پارسا (طراحی جلد). با کدهای نوا، که در بخش کدینگ سه‌سطحی همین درس می‌بینید، سند این رویداد چنین است:',
            en: 'On Day 12 Nova performed 4,000 of services on account. We keep the split assumed in the lesson on posting: 2,500 for Atlas Café (a menu design) and 1,500 for Parsa Books (a book cover). Using Nova’s codes, which you will meet in the section on three-level coding, the voucher looks like this:',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'سند حسابداری شماره 7؛ تاریخ: روز 12؛ نوع: عادی؛ پیوست: 2 برگ؛ تنظیم: حسابدار؛ تأیید: سارا',
            en: 'Accounting voucher no. 7; date: Day 12; type: regular; attachments: 2; prepared by: accountant; approved by: Sara',
          },
          head: [
            { fa: 'ردیف', en: 'Line' },
            { fa: 'کد معین', en: 'Subsidiary code' },
            { fa: 'کد تفصیلی', en: 'Detail code' },
            { fa: 'شرح ردیف', en: 'Line description' },
            { fa: 'بدهکار', en: 'Debit' },
            { fa: 'بستانکار', en: 'Credit' },
          ],
          numericCols: [4, 5],
          rows: [
            [
              same('1'),
              same('102001'),
              same('2001'),
              { fa: 'دریافتنی تجاری: کافه اطلس، فاکتور 31 (طراحی منو)', en: 'Trade receivable: Atlas Café, invoice 31 (menu design)' },
              2500,
              blank,
            ],
            [
              same('2'),
              same('102001'),
              same('2002'),
              { fa: 'دریافتنی تجاری: کتاب‌فروشی پارسا، فاکتور 32 (طراحی جلد)', en: 'Trade receivable: Parsa Books, invoice 32 (book cover)' },
              1500,
              blank,
            ],
            [
              same('3'),
              same('401001'),
              same('5001'),
              { fa: 'درآمد طراحی گرافیک: پروژه منوی کافه اطلس', en: 'Graphic design revenue: Atlas Café menu project' },
              blank,
              2500,
            ],
            [
              same('4'),
              same('401001'),
              same('5002'),
              { fa: 'درآمد طراحی گرافیک: پروژه جلد کتاب پارسا', en: 'Graphic design revenue: Parsa Books cover project' },
              blank,
              1500,
            ],
            [total, blank, blank, blank, 4000, 4000],
          ],
        },
        {
          type: 'journal',
          title: { fa: 'همان سند در قالب دفتر روزنامه', en: 'The same voucher in journal form' },
          entries: [
            {
              date: day(12),
              lines: [
                { account: ac.arAtlas, debit: 2500 },
                { account: ac.arParsa, debit: 1500 },
                { account: ac.revAtlas, credit: 2500 },
                { account: ac.revParsa, credit: 1500 },
              ],
              memo: {
                fa: 'سند شماره 7: فاکتورهای 31 و 32. جمع بدهکار و بستانکار هر دو 4,000 است؛ همان رقم ثبت روز 12 نوا، فقط با جزئیات بیشتر.',
                en: 'Voucher 7: invoices 31 and 32. Debits and credits both total 4,000, the same figure as Nova’s Day 12 entry, only with more detail.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'شرح خوب، سند خوب', en: 'Good descriptions make good vouchers' },
          text: {
            fa: 'شرح هر ردیف باید بدون باز کردن پیوست‌ها بگوید چه شده است: چه کسی، بابت چه، با کدام مدرک. شرح بد: «بابت». شرح خوب: «وصول فاکتور 31 از کافه اطلس، واریز پایا به حساب جاری بانک الف». شش ماه بعد، همین شرح است که در گزارش‌ها و صورت‌حساب مشتری دیده می‌شود.',
            en: 'Each line description should tell the story without opening the attachments: who, for what, on which document. Bad: “payment”. Good: “Collection of invoice 31 from Atlas Café, bank transfer to Bank A current account”. Six months later, this is the text you will see in reports and on the customer’s statement.',
          },
        },
        {
          type: 'h',
          text: { fa: 'سند معتبر چه ویژگی‌هایی دارد؟', en: 'What makes a voucher valid?' },
        },
        {
          type: 'list',
          items: [
            { fa: '**متوازن**: جمع بدهکار با جمع بستانکار برابر است.', en: '**Balanced**: total debits equal total credits.' },
            {
              fa: '**مستند**: هر سند عادی دست‌کم یک مدرک مثبته دارد؛ سند اصلاحی پایان دوره هم برگه محاسبه (مثلاً جدول استهلاک) پیوست دارد.',
              en: '**Supported**: every regular voucher has at least one source document; a period-end adjusting voucher carries a calculation sheet (for example the depreciation schedule).',
            },
            {
              fa: '**کدگذاری در سطح درست**: ثبت در سطح معین، و هرجا آن معین تفصیلی لازم دارد، با کد تفصیلی.',
              en: '**Coded at the right level**: posted to a subsidiary account, with a detail code wherever that subsidiary requires one.',
            },
            { fa: '**روشن**: شرح کلی و شرح ردیف‌ها ابهام ندارند.', en: '**Clear**: the overall and line descriptions are unambiguous.' },
            {
              fa: '**تأییدشده**: تنظیم‌کننده و تأییدکننده دو نفر متفاوت‌اند.',
              en: '**Approved**: the preparer and the approver are two different people.',
            },
            {
              fa: '**مدارک علامت‌خورده**: روی مدارک پیوست مهر «ثبت شد» و شماره سند زده می‌شود تا یک فاکتور دو بار ثبت نشود.',
              en: '**Documents marked**: attached documents are stamped “recorded” with the voucher number, so that no invoice is recorded twice.',
            },
          ],
        },
      ],
    },
    {
      id: 'types-workflow',
      title: { fa: 'انواع سند، شماره‌گذاری و گردش تأیید', en: 'Voucher Types, Numbering and Approval' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'همه سندها از یک جنس نیستند. نوع سند نشان می‌دهد چرا صادر شده و در کجای سال مالی قرار می‌گیرد. شش نوع زیر در عمل حسابداری ایران رایج‌اند.',
            en: 'Not all vouchers are alike. The type says why a voucher was issued and where it sits in the fiscal year. The six types below are common in Iranian practice.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'انواع سند حسابداری', en: 'Types of accounting voucher' },
          head: [
            { fa: 'نوع سند', en: 'Type' },
            { fa: 'چه زمانی', en: 'When' },
            { fa: 'نمونه', en: 'Example' },
          ],
          rows: [
            [
              { fa: '**سند افتتاحیه**', en: '**Opening voucher**' },
              { fa: 'اولین سند هر سال مالی (معمولاً شماره 1)', en: 'The first voucher of each fiscal year (usually no. 1)' },
              {
                fa: 'باز کردن مانده دارایی‌ها، بدهی‌ها و حقوق مالکانه پایان سال قبل',
                en: 'Reopens last year’s closing balances of assets, liabilities and equity',
              },
            ],
            [
              { fa: '**سند عادی (روزمره)**', en: '**Regular voucher**' },
              { fa: 'در طول سال، برای هر رویداد یا خلاصه هر روز', en: 'During the year, for each event or as a daily summary' },
              { fa: 'فروش، خرید، دریافت و پرداخت، حقوق', en: 'Sales, purchases, receipts and payments, payroll' },
            ],
            [
              { fa: '**سند اصلاحی (تعدیلی) پایان دوره**', en: '**Adjusting voucher**' },
              { fa: 'پایان ماه یا پایان سال', en: 'At month-end or year-end' },
              {
                fa: 'استهلاک، حقوق پرداختنی، بیمه منقضی‌شده؛ درس ثبت‌های اصلاحی',
                en: 'Depreciation, accrued salaries, expired insurance; see the lesson on adjusting entries',
              },
            ],
            [
              { fa: '**سند اصلاح اشتباه**', en: '**Correcting voucher**' },
              { fa: 'هر زمان که در سند قطعی‌شده خطایی پیدا شود', en: 'Whenever an error is found in a finalised voucher' },
              { fa: 'انتقال مبلغی که به حساب اشتباه رفته به حساب درست', en: 'Moving an amount from the wrong account to the right one' },
            ],
            [
              { fa: '**سند بستن حساب‌های موقت**', en: '**Closing voucher**' },
              { fa: 'پایان سال، پس از ثبت‌های اصلاحی', en: 'Year-end, after the adjusting entries' },
              {
                fa: 'بستن درآمدها و هزینه‌ها و انتقال نتیجه به حقوق مالکانه؛ درس بستن حساب‌ها و چرخه کامل حسابداری',
                en: 'Closes revenues and expenses and moves the result to equity; see the lesson on closing entries',
              },
            ],
            [
              { fa: '**سند اختتامیه**', en: '**Final closing voucher**' },
              { fa: 'آخرین سند سال', en: 'The last voucher of the year' },
              { fa: 'صفر کردن مانده همه حساب‌های دائمی', en: 'Brings every permanent account to zero' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'اختتامیه و افتتاحیه در عمل ایران', en: 'Final closing and opening vouchers in Iranian practice' },
          text: {
            fa: 'در عمل رایج ایران، پس از سند بستن حساب‌های موقت، **سند اختتامیه** صادر می‌شود: هر دارایی به اندازه مانده‌اش بستانکار و هر بدهی و حساب حقوق مالکانه بدهکار می‌شود تا مانده همه حساب‌ها صفر شود. روز اول سال بعد، **سند افتتاحیه** دقیقاً برعکس آن است و همان مانده‌ها را دوباره باز می‌کند. این یک روش دفترداری است، نه الزام استانداردهای حسابداری؛ در بسیاری از کشورها مانده‌ها بدون این دو سند به سال بعد می‌روند. بیشتر نرم‌افزارهای حسابداری ایرانی این دو سند را خودکار صادر می‌کنند.',
            en: 'In common Iranian practice, after the voucher that closes the temporary accounts, a **final closing voucher** («سند اختتامیه») is issued: every asset is credited, and every liability and equity account debited, by its balance, so that all accounts end at zero. On the first day of the next year the **opening voucher** («سند افتتاحیه») does exactly the reverse and reopens the same balances. This is a bookkeeping convention, not a requirement of accounting standards; in many countries balances simply carry forward without these two vouchers. Most Iranian accounting software issues both automatically.',
          },
        },
        {
          type: 'journal',
          title: {
            fa: 'اگر پایان ماه نوا پایان سال مالی بود: سند افتتاحیه سال بعد',
            en: 'If Nova’s month-end were its year-end: next year’s opening voucher',
          },
          entries: [
            {
              date: { fa: 'روز اول سال بعد', en: 'First day of next year' },
              lines: [
                { account: ac.cash, debit: 46300 },
                { account: ac.ar, debit: 2200 },
                { account: ac.supplies, debit: 1800 },
                { account: ac.prepaid, debit: 1100 },
                { account: ac.equipment, debit: 20000 },
                { account: ac.accDep, credit: 300 },
                { account: ac.ap, credit: 1500 },
                { account: ac.salPay, credit: 600 },
                { account: ac.intPay, credit: 150 },
                { account: ac.loan, credit: 15000 },
                { account: ac.capital, credit: 53850 },
              ],
              memo: {
                fa: 'سند شماره 1 سال جدید. ارقام همان تراز آزمایشی پس از بستن نواست و جمع هر ستون 71,400 است. سند اختتامیه پایان سال همین سطرها را در جهت مخالف دارد.',
                en: 'Voucher no. 1 of the new year. The figures are Nova’s post-closing trial balance; each column totals 71,400. The final closing voucher at year-end has the same lines on the opposite sides.',
              },
            },
          ],
        },
        {
          type: 'h',
          text: { fa: 'شماره‌گذاری سندها', en: 'Numbering vouchers' },
        },
        {
          type: 'list',
          items: [
            {
              fa: 'سندها در هر سال مالی از 1 به بعد، پیاپی و بدون جاافتادگی یا تکرار شماره می‌خورند. شماره جاافتاده این پرسش را پیش می‌آورد که آیا سندی حذف شده است.',
              en: 'Within each fiscal year vouchers are numbered from 1, in sequence, with no gaps or duplicates. A missing number raises the question of whether a voucher was deleted.',
            },
            {
              fa: 'سند افتتاحیه معمولاً شماره 1 است و سندهای بستن و اختتامیه آخرین شماره‌های سال را می‌گیرند.',
              en: 'The opening voucher is usually no. 1, and the closing and final closing vouchers take the last numbers of the year.',
            },
            {
              fa: 'سند باطل‌شده نابود نمی‌شود: در سیستم دستی با علامت «باطل» نگهداری می‌شود و در نرم‌افزار، سند قطعی‌شده اصلاً حذف‌شدنی نیست.',
              en: 'A cancelled voucher is not destroyed: on paper it is kept and marked “void”, and in software a finalised voucher cannot be deleted at all.',
            },
            {
              fa: 'بسیاری از نرم‌افزارها پیش از قطعی شدن، سندهای موقت را بر اساس تاریخ مرتب و دوباره شماره‌گذاری می‌کنند؛ پس از قطعی شدن، شماره و محتوای سند ثابت می‌ماند.',
              en: 'Many programs can sort draft vouchers by date and renumber them before they are finalised; after that, the number and content are fixed.',
            },
            {
              fa: 'برای رویدادهای پرتکرار (مثلاً فروش روزانه با کارتخوان) می‌توان یک سند خلاصه روزانه صادر کرد، به شرط آنکه گزارش جزئیات پیوست شود.',
              en: 'For high-volume events (for example daily card sales) one daily summary voucher is acceptable, provided the detailed report is attached.',
            },
            {
              fa: 'مدارک پیوست به ترتیب شماره سند بایگانی می‌شوند تا از هر سند به مدارکش و از هر مدرک به سندش بتوان رسید.',
              en: 'Attachments are filed in voucher-number order, so you can go from any voucher to its documents and from any document back to its voucher.',
            },
          ],
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'تنظیم', en: 'Prepare' },
              text: {
                fa: 'حسابدار سند را از روی مدارک مثبته تنظیم و مدارک را پیوست می‌کند. وضعیت سند: موقت (پیش‌نویس).',
                en: 'The accountant prepares the voucher from the source documents and attaches them. Status: draft.',
              },
            },
            {
              title: { fa: 'رسیدگی', en: 'Check' },
              text: {
                fa: 'سرپرست حسابداری کدها، مبالغ، تاریخ و کامل بودن مدارک را بررسی می‌کند و اگر ایرادی باشد، سند را برمی‌گرداند.',
                en: 'The chief accountant checks the codes, amounts, date and completeness of the documents, and sends the voucher back if anything is wrong.',
              },
            },
            {
              title: { fa: 'تأیید', en: 'Approve' },
              text: {
                fa: 'مدیر مالی یا شخص مجاز سند را امضا یا در نرم‌افزار تأیید می‌کند. در کسب‌وکار کوچکی مثل نوا، حسابدار تنظیم می‌کند و سارا تأیید.',
                en: 'The financial manager or another authorised person signs the voucher or approves it in the software. In a small business like Nova, the accountant prepares and Sara approves.',
              },
            },
            {
              title: { fa: 'قطعی شدن', en: 'Finalise' },
              text: {
                fa: 'سند قطعی (دائم) می‌شود: دیگر ویرایش‌پذیر نیست و مبالغش برای همیشه در دفاتر می‌ماند.',
                en: 'The voucher becomes final: it can no longer be edited, and its amounts stay in the books for good.',
              },
            },
            {
              title: { fa: 'بایگانی', en: 'File' },
              text: {
                fa: 'سند چاپ‌شده با پیوست‌هایش به ترتیب شماره بایگانی می‌شود، یا تصویر مدارک در نرم‌افزار به سند ضمیمه می‌شود.',
                en: 'The printed voucher and its attachments are filed in number order, or scanned documents are attached to the voucher in the software.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'سند قطعی را پاک نکنید؛ اصلاحش کنید', en: 'Never erase a final voucher: correct it' },
          text: {
            fa: 'اگر در سند قطعی‌شده خطایی پیدا شد، آن را ویرایش یا حذف نمی‌کنید؛ یک **سند اصلاح اشتباه** با شماره جدید صادر می‌کنید که در شرحش به شماره سند اصلی ارجاع می‌دهد. به این ترتیب ردّ حسابرسی کامل می‌ماند: هم خطا دیده می‌شود و هم اصلاح آن.',
            en: 'If you find an error in a finalised voucher, you do not edit or delete it; you issue a new **correcting voucher** whose description refers to the original voucher number. That keeps the audit trail complete: both the error and its correction stay visible.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'نمونه سند اصلاح اشتباه (مثال فرضی)', en: 'A correcting voucher (hypothetical example)' },
          entries: [
            {
              date: day(18),
              lines: [
                { account: { fa: '501001 هزینه اجاره دفتر', en: '501001 Office rent expense' }, debit: 2500 },
                { account: { fa: '502001 هزینه حقوق پایه', en: '502001 Basic salaries expense' }, credit: 2500 },
              ],
              memo: {
                fa: 'اصلاح سند شماره 8: فرض کنید اجاره روز 15 به‌اشتباه در هزینه حقوق ثبت شده بود. پس از این سند، هر دو حساب درست‌اند و سند 8 دست‌نخورده می‌ماند.',
                en: 'Correction of voucher 8: suppose the Day 15 rent had been posted to salaries expense by mistake. After this voucher both accounts are right, and voucher 8 stays untouched.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'three-level-coding',
      title: { fa: 'کدینگ سه‌سطحی: کل، معین، تفصیلی', en: 'Three-Level Coding: General, Subsidiary, Detail' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در درس حساب‌ها و کدینگ حساب‌ها به هر حساب نوا یک کد چهاررقمی دادیم؛ مثلاً 1010 برای موجودی نقد. برای شروع کافی است، اما وقتی نوا سه حساب بانکی، چهل مشتری و پانزده تأمین‌کننده داشته باشد، یک کد برای «موجودی نقد» و یک کد برای «حساب‌های دریافتنی» دیگر جواب نمی‌دهد. اگر هم برای هر مشتری یک حساب کل باز کنیم، دفتر کل و صورت‌های مالی زیر جزئیات گم می‌شوند. راه‌حل رایج در ایران **کدینگ سه‌سطحی** است.',
            en: 'In the lesson on accounts and the chart of accounts we gave each of Nova’s accounts a four-digit code, such as 1010 for Cash. That is enough to start with, but once Nova has three bank accounts, forty customers and fifteen suppliers, one code for “Cash” and one for “Accounts receivable” no longer do the job. Opening a general account for every customer would bury the ledger and the statements in detail. The standard answer in Iran is **three-level coding**.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**گروه حساب**: بالاترین سطح که نوع حساب‌ها را نشان می‌دهد. در نوا رقم اول کد همان گروه است: 1 دارایی، 2 بدهی، 3 حقوق مالکانه، 4 درآمد، 5 هزینه. بسیاری از شرکت‌ها گروه‌ها را ریزتر می‌کنند، مثلاً دارایی‌های جاری و غیرجاری.',
              en: '**Account group**: the top level, showing the type of account. In Nova the first digit is the group: 1 assets, 2 liabilities, 3 equity, 4 revenue, 5 expenses. Many companies split groups further, for example into current and non-current assets.',
            },
            {
              fa: '**حساب کل**: سرفصل‌هایی که در دفتر کل قانونی و صورت‌های مالی می‌آیند؛ مثل موجودی نقد (1010) و حساب‌های دریافتنی (1020).',
              en: '**General account** («حساب کل»): the headings that appear in the statutory ledger and the financial statements, such as Cash (1010) and Accounts receivable (1020).',
            },
            {
              fa: '**حساب معین**: تفکیک هر حساب کل به اجزای معنادار؛ مثلاً صندوق، بانک‌ها و تنخواه‌گردان زیر موجودی نقد. سطرهای سند معمولاً در این سطح ثبت می‌شوند.',
              en: '**Subsidiary account** («حساب معین»): a meaningful split of a general account, for example cash box, banks and petty cash under Cash. Voucher lines are normally posted at this level.',
            },
            {
              fa: '**حساب تفصیلی**: پایین‌ترین سطح، برای اشخاص و اقلام مشخص: هر مشتری، هر تأمین‌کننده، هر حساب بانکی، هر کارمند یا هر پروژه.',
              en: '**Detail account** («حساب تفصیلی»): the lowest level, for specific people and items: each customer, supplier, bank account, employee or project.',
            },
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'کد معین = کد کل + دو رقم: 1010 و 02 می‌شود 101002 (بانک‌ها)',
            en: 'Subsidiary code = general code + two digits: 1010 and 02 make 101002 (Banks)',
          },
          note: {
            fa: 'کد تفصیلی کنار کد معین می‌نشیند: 101002 با تفصیلی 1002 یعنی «حساب جاری بانک الف».',
            en: 'The detail code sits next to the subsidiary code: 101002 with detail 1002 means “Bank A current account”.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'یک واژه، دو معنا', en: 'One word, two meanings' },
          text: {
            fa: 'در درس انتقال به دفتر کل، دفتری را که برای هر مشتری یک حساب دارد «دفتر معین» نامیدیم؛ همان چیزی که در کتاب‌های انگلیسی subsidiary ledger نام دارد. در کدینگ سه‌سطحی ایران، حساب هر مشتری معمولاً در سطح **تفصیلی** است و «معین» سطح میانی است. ایده یکی است: جزئیات زیر یک حساب کنترل، و جمع جزئیات همیشه برابر حساب بالاتر. فقط دقت کنید هر متن کدام معنا را به کار برده است.',
            en: 'In the lesson on posting we called the ledger with one account per customer a “subsidiary ledger”, as English textbooks do. In Iranian three-level coding, each customer usually sits at the **detail** («تفصیلی») level, and «معین» (subsidiary) is the middle level. The idea is the same: detail beneath a control account, and the detail always adds up to the account above it. Just check which meaning a document is using.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'نمونه کامل کدینگ سه‌سطحی نوا. کدهای کل همان کدهای فهرست حساب‌های نواست؛ معین‌ها و تفصیلی‌ها نمونه‌اند.',
            en: 'A complete sample of three-level coding for Nova. The general codes are Nova’s chart-of-accounts codes; the subsidiary and detail accounts are illustrative.',
          },
          head: [
            { fa: 'کد کل', en: 'General code' },
            { fa: 'حساب کل', en: 'General account' },
            { fa: 'حساب‌های معین', en: 'Subsidiary accounts' },
            { fa: 'حساب‌های تفصیلی', en: 'Detail accounts' },
          ],
          rows: [
            [
              same('1010'),
              ac.cash,
              { fa: '101001 صندوق؛ 101002 بانک‌ها؛ 101003 تنخواه‌گردان', en: '101001 Cash box; 101002 Banks; 101003 Petty cash' },
              { fa: 'منابع نقد (1001 تا 1999)', en: 'Cash sources (1001 to 1999)' },
            ],
            [
              same('1020'),
              ac.ar,
              {
                fa: '102001 دریافتنی‌های تجاری؛ 102002 سایر دریافتنی‌ها (مساعده کارکنان)',
                en: '102001 Trade receivables; 102002 Other receivables (staff advances)',
              },
              { fa: 'مشتریان (2001 تا 2999)؛ کارکنان (4001 تا 4999)', en: 'Customers (2001 to 2999); employees (4001 to 4999)' },
            ],
            [
              same('1030'),
              ac.supplies,
              { fa: '103001 ملزومات اداری؛ 103002 ملزومات طراحی و چاپ', en: '103001 Office supplies; 103002 Design and print supplies' },
              none,
            ],
            [same('1040'), ac.prepaid, { fa: '104001 بیمه تجهیزات', en: '104001 Equipment insurance' }, none],
            [
              same('1510'),
              ac.equipment,
              { fa: '151001 رایانه و تجهیزات طراحی؛ 151002 اثاثه اداری', en: '151001 Computers and design equipment; 151002 Office furniture' },
              { fa: 'ندارد؛ هر قلم در دفتر دارایی‌های ثابت', en: 'None; each item in the fixed-asset register' },
            ],
            [
              same('1520'),
              ac.accDep,
              { fa: '152001 رایانه و تجهیزات طراحی؛ 152002 اثاثه اداری', en: '152001 Computers and design equipment; 152002 Office furniture' },
              none,
            ],
            [
              same('2010'),
              ac.ap,
              { fa: '201001 پرداختنی‌های تجاری', en: '201001 Trade payables' },
              { fa: 'تأمین‌کنندگان (3001 تا 3999)', en: 'Suppliers (3001 to 3999)' },
            ],
            [
              same('2020'),
              ac.salPay,
              { fa: '202001 حقوق پرداختنی کارکنان', en: '202001 Staff salaries payable' },
              { fa: 'کارکنان (4001 تا 4999)', en: 'Employees (4001 to 4999)' },
            ],
            [same('2030'), ac.intPay, { fa: '203001 بهره وام بانکی', en: '203001 Bank loan interest' }, none],
            [
              same('2040'),
              { fa: 'پیش‌دریافت درآمد', en: 'Unearned revenue' },
              { fa: '204001 پیش‌دریافت از مشتریان', en: '204001 Advances from customers' },
              { fa: 'مشتریان (2001 تا 2999)', en: 'Customers (2001 to 2999)' },
            ],
            [
              same('2510'),
              ac.loan,
              { fa: '251001 تسهیلات بانکی', en: '251001 Bank loans' },
              { fa: 'ندارد (یا یک تفصیلی برای هر قرارداد وام)', en: 'None (or one detail per loan contract)' },
            ],
            [same('3010'), ac.capital, { fa: '301001 سرمایه', en: '301001 Capital' }, none],
            [same('3020'), { fa: 'برداشت سارا', en: 'Drawings (Sara)' }, { fa: '302001 برداشت', en: '302001 Drawings' }, none],
            [
              same('3900'),
              { fa: 'خلاصه سود و زیان', en: 'Income summary' },
              { fa: '390001 خلاصه سود و زیان', en: '390001 Income summary' },
              none,
            ],
            [
              same('4010'),
              { fa: 'درآمد خدمات', en: 'Service revenue' },
              { fa: '401001 طراحی گرافیک و هویت بصری؛ 401002 طراحی وب و دیجیتال', en: '401001 Graphic and brand design; 401002 Web and digital design' },
              { fa: 'پروژه‌ها (5001 تا 5999)', en: 'Projects (5001 to 5999)' },
            ],
            [same('5010'), ac.rent, { fa: '501001 اجاره دفتر', en: '501001 Office rent' }, none],
            [
              same('5020'),
              ac.salaries,
              { fa: '502001 حقوق پایه؛ 502002 اضافه‌کار؛ 502003 بیمه سهم کارفرما', en: '502001 Basic salaries; 502002 Overtime; 502003 Employer’s insurance share' },
              { fa: 'کارکنان (4001 تا 4999)', en: 'Employees (4001 to 4999)' },
            ],
            [
              same('5030'),
              { fa: 'هزینه ملزومات', en: 'Supplies expense' },
              { fa: '503001 ملزومات مصرف‌شده', en: '503001 Supplies used' },
              { fa: 'پروژه‌ها (اختیاری)', en: 'Projects (optional)' },
            ],
            [same('5040'), { fa: 'هزینه بیمه', en: 'Insurance expense' }, { fa: '504001 بیمه تجهیزات', en: '504001 Equipment insurance' }, none],
            [
              same('5050'),
              { fa: 'هزینه استهلاک', en: 'Depreciation expense' },
              { fa: '505001 رایانه و تجهیزات طراحی؛ 505002 اثاثه اداری', en: '505001 Computers and design equipment; 505002 Office furniture' },
              none,
            ],
            [same('5060'), { fa: 'هزینه بهره', en: 'Interest expense' }, { fa: '506001 بهره وام بانکی', en: '506001 Bank loan interest' }, none],
            [
              same('5070'),
              { fa: 'هزینه آب، برق و اینترنت', en: 'Utilities expense' },
              { fa: '507001 برق؛ 507002 آب؛ 507003 اینترنت و تلفن', en: '507001 Electricity; 507002 Water; 507003 Internet and phone' },
              none,
            ],
            [
              same('5080'),
              { fa: 'هزینه تبلیغات', en: 'Advertising expense' },
              { fa: '508001 تبلیغات آنلاین؛ 508002 چاپ و تبلیغات محیطی', en: '508001 Online advertising; 508002 Print and outdoor advertising' },
              none,
            ],
          ],
        },
        {
          type: 'table',
          caption: { fa: 'بازه کدهای تفصیلی نوا', en: 'Nova’s detail-code ranges' },
          head: [
            { fa: 'بازه کد', en: 'Code range' },
            { fa: 'نوع تفصیلی', en: 'Detail type' },
            { fa: 'نمونه', en: 'Examples' },
            { fa: 'زیر کدام معین‌ها', en: 'Used under' },
          ],
          rows: [
            [
              { fa: '1001 تا 1999', en: '1001 to 1999' },
              { fa: 'منابع نقد', en: 'Cash sources' },
              {
                fa: '1001 صندوق دفتر؛ 1002 حساب جاری بانک الف؛ 1003 سپرده کوتاه‌مدت بانک ب؛ 1004 تنخواه دفتر',
                en: '1001 Office cash box; 1002 Bank A current account; 1003 Bank B short-term deposit; 1004 Office petty cash',
              },
              { fa: '101001، 101002، 101003', en: '101001, 101002, 101003' },
            ],
            [
              { fa: '2001 تا 2999', en: '2001 to 2999' },
              { fa: 'مشتریان', en: 'Customers' },
              { fa: '2001 کافه اطلس؛ 2002 کتاب‌فروشی پارسا', en: '2001 Atlas Café; 2002 Parsa Books' },
              { fa: '102001، 204001', en: '102001, 204001' },
            ],
            [
              { fa: '3001 تا 3999', en: '3001 to 3999' },
              { fa: 'تأمین‌کنندگان', en: 'Suppliers' },
              { fa: '3001 لوازم‌التحریر نگین؛ 3002 چاپخانه سپیده', en: '3001 Negin Stationery; 3002 Sepideh Print House' },
              same('201001'),
            ],
            [
              { fa: '4001 تا 4999', en: '4001 to 4999' },
              { fa: 'کارکنان', en: 'Employees' },
              { fa: '4001 طراح ارشد؛ 4002 طراح وب', en: '4001 Senior designer; 4002 Web designer' },
              { fa: '102002، 202001، 502001 تا 502003', en: '102002, 202001, 502001 to 502003' },
            ],
            [
              { fa: '5001 تا 5999', en: '5001 to 5999' },
              { fa: 'پروژه‌ها', en: 'Projects' },
              { fa: '5001 منوی کافه اطلس؛ 5002 جلد کتاب پارسا', en: '5001 Atlas Café menu; 5002 Parsa Books cover' },
              { fa: '401001، 401002، 503001', en: '401001, 401002, 503001' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'تفصیلی شناور', en: 'Floating detail accounts' },
          text: {
            fa: 'در بیشتر نرم‌افزارهای حسابداری رایج در ایران، حساب تفصیلی به یک معین گره نخورده و **شناور** است: کد 2001 (کافه اطلس) هم زیر دریافتنی‌های تجاری به کار می‌رود، هم زیر پیش‌دریافت از مشتریان، و بعدها زیر اسناد دریافتنی. پس با یک گزارش از تفصیلی 2001، کل رابطه مالی نوا با کافه اطلس دیده می‌شود. برخی نرم‌افزارها چند سطح تفصیلی هم دارند؛ مثلاً سطح اول برای طرف حساب و سطح دوم برای پروژه یا مرکز هزینه.',
            en: 'In most accounting software used in Iran, a detail account is not tied to one subsidiary account; it **floats**. Code 2001 (Atlas Café) is used under Trade receivables, under Advances from customers and later under Notes receivable, so one report on detail 2001 shows Nova’s whole financial relationship with Atlas Café. Some programs also offer several detail levels, for example level one for the counterparty and level two for the project or cost centre.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'قواعد یک کدینگ خوب', en: 'Rules for a good coding plan' },
          text: {
            fa: 'جای خالی بگذارید (کدهای معین 01 تا 99 اجازه 99 معین زیر هر حساب کل را می‌دهند)؛ برای هر نوع تفصیلی بازه جدا تعیین کنید؛ هرگز یک کد را برای معنای دیگری دوباره به کار نبرید؛ حسابی را که گردش دارد حذف نکنید، غیرفعالش کنید؛ و پیش از شروع سال، کدینگ را با مدیر و حسابرس مرور کنید، چون تغییر آن در میانه سال دردسر دارد.',
            en: 'Leave gaps (subsidiary codes 01 to 99 allow 99 subsidiaries under each general account); give each type of detail account its own range; never reuse a code for a different meaning; deactivate, rather than delete, an account that has transactions; and review the plan with management and the auditor before the year starts, because changing it mid-year is painful.',
          },
        },
      ],
    },
    {
      id: 'detail-accounts',
      title: { fa: 'حساب‌های تفصیلی در عمل', en: 'Detail Accounts at Work' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'تراز آزمایشی نوا در سطح کل فقط می‌گوید پیش از ثبت‌های اصلاحی، مشتریان روی‌هم 1,500 بدهکارند. سارا اما می‌خواهد بداند **چه کسی** چقدر بدهکار است، به کدام تأمین‌کننده چقدر بدهکار است و در هر حساب بانکی چقدر پول دارد. حساب‌های تفصیلی این پرسش‌ها را جواب می‌دهند، به شرط آنکه هر سطر سند با تفصیلی درست ثبت شده باشد.',
            en: 'At the general-account level, Nova’s trial balance only says that before adjustments its customers owe 1,500 in total. Sara wants to know **who** owes how much, which supplier she owes and how much is in each bank account. Detail accounts answer these questions, provided every voucher line carries the right detail code.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'سندهای 4، 10 و 11 نوا با کد کامل', en: 'Nova’s vouchers 4, 10 and 11 with full codes' },
          entries: [
            {
              date: day(4),
              lines: [
                { account: ac.designSupplies, debit: 3000 },
                { account: ac.apNegin, credit: 3000 },
              ],
              memo: { fa: 'سند 4: خرید نسیه ملزومات از لوازم‌التحریر نگین.', en: 'Voucher 4: supplies bought on account from Negin Stationery.' },
            },
            {
              date: day(24),
              lines: [
                { account: ac.bankA, debit: 2500 },
                { account: ac.arAtlas, credit: 2500 },
              ],
              memo: {
                fa: 'سند 10: وصول فاکتور 31 از کافه اطلس، واریز به حساب جاری بانک الف.',
                en: 'Voucher 10: invoice 31 collected from Atlas Café into the Bank A current account.',
              },
            },
            {
              date: day(27),
              lines: [
                { account: ac.apNegin, debit: 1500 },
                { account: ac.bankA, credit: 1500 },
              ],
              memo: {
                fa: 'سند 11: پرداخت بخشی از بدهی به لوازم‌التحریر نگین از حساب جاری بانک الف.',
                en: 'Voucher 11: part of the debt to Negin Stationery paid from the Bank A current account.',
              },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'گردش حساب تفصیلی 2001: کافه اطلس', en: 'Detail account 2001 statement: Atlas Café' },
          head: [
            { fa: 'تاریخ', en: 'Date' },
            { fa: 'سند', en: 'Voucher' },
            { fa: 'شرح', en: 'Description' },
            { fa: 'بدهکار', en: 'Debit' },
            { fa: 'بستانکار', en: 'Credit' },
            { fa: 'مانده', en: 'Balance' },
          ],
          numericCols: [3, 4, 5],
          rows: [
            [day(12), same('7'), { fa: 'فاکتور 31: طراحی منو', en: 'Invoice 31: menu design' }, 2500, blank, 2500],
            [day(24), same('10'), { fa: 'وصول، واریز به حساب جاری بانک الف', en: 'Collected into Bank A current account' }, blank, 2500, 0],
          ],
        },
        {
          type: 'table',
          caption: {
            fa: 'مانده تفصیلی مشتریان زیر معین 102001 (پیش از ثبت‌های اصلاحی)',
            en: 'Customer detail balances under subsidiary 102001 (before adjustments)',
          },
          head: [
            { fa: 'کد تفصیلی', en: 'Detail code' },
            { fa: 'مشتری', en: 'Customer' },
            { fa: 'مانده بدهکار', en: 'Debit balance' },
          ],
          numericCols: [2],
          rows: [
            [same('2001'), { fa: 'کافه اطلس', en: 'Atlas Café' }, 0],
            [same('2002'), { fa: 'کتاب‌فروشی پارسا', en: 'Parsa Books' }, 1500],
            [{ fa: 'جمع (برابر مانده معین 102001 و حساب کل 1020)', en: 'Total (equals subsidiary 102001 and general account 1020)' }, blank, 1500],
          ],
        },
        {
          type: 'list',
          items: [
            {
              fa: '**مشتریان**: صورت‌حساب هر مشتری، پیگیری مطالبات و تأییدیه مانده. در درس حساب‌ها و اسناد دریافتنی و چک، تحلیل سنی مطالبات هم از همین تفصیلی‌ها ساخته می‌شود.',
              en: '**Customers**: a statement for each customer, collection follow-up and balance confirmations. In the lesson on receivables and cheques, the ageing analysis is built from these same accounts.',
            },
            {
              fa: '**تأمین‌کنندگان**: اینکه به چه کسی، چقدر و تا چه تاریخی بدهکاریم؛ مبنای برنامه پرداخت. نوا پس از سند 11 هنوز 1,500 به لوازم‌التحریر نگین بدهکار است.',
              en: '**Suppliers**: whom we owe, how much and by when; the basis of the payment plan. After voucher 11, Nova still owes Negin Stationery 1,500.',
            },
            {
              fa: '**حساب‌های بانکی**: مانده هر حساب جداگانه؛ صورت مغایرت بانکی برای هر تفصیلی بانک جدا تهیه می‌شود.',
              en: '**Bank accounts**: a separate balance for each account; a bank reconciliation is prepared for each bank detail account separately.',
            },
            { fa: '**پروژه‌ها**: درآمد و هزینه هر پروژه، و در نتیجه سودآوری آن.', en: '**Projects**: the revenue and costs of each project, and so its profitability.' },
            { fa: '**کارکنان**: حقوق پرداختنی، مساعده و وام هر نفر.', en: '**Employees**: each person’s unpaid salary, advances and loans.' },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'سود یک پروژه', en: 'Profit by project' },
          text: {
            fa: 'مثال فرضی: اگر چاپ نمونه‌های منوی کافه اطلس 300 هزینه داشته و با تفصیلی پروژه 5001 ثبت شده باشد، گزارش تفصیلی 5001 درآمد 2,500 و هزینه 300 را کنار هم نشان می‌دهد؛ یعنی این پروژه 2,200 سود ناخالص داشته است. بدون کد پروژه، این عدد فقط با جست‌وجوی دستی در سندها به دست می‌آید.',
            en: 'Hypothetical example: if printing samples of the Atlas Café menu cost 300 and was coded to project 5001, the report on detail 5001 shows revenue of 2,500 next to costs of 300: the project earned a gross profit of 2,200. Without a project code, that figure takes a manual search through the vouchers.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'تفصیلی اشتباه را تراز آزمایشی نمی‌بیند', en: 'The trial balance cannot see a wrong detail code' },
          text: {
            fa: 'اگر وصول 2,500 کافه اطلس به‌اشتباه با تفصیلی 2002 (کتاب‌فروشی پارسا) ثبت شود، حساب کل و معین درست‌اند و تراز آزمایشی هم متوازن است؛ اما صورت‌حساب هر دو مشتری غلط است و ممکن است از مشتری‌ای که پرداخته دوباره طلب کنید. خطای رایج دیگر **تفصیلی تکراری** است: «کافه اطلس» و «اطلس کافه» با دو کد. پیش از تعریف تفصیلی جدید جست‌وجو کنید و شناسه‌ای یکتا، مثل شناسه ملی یا کد اقتصادی، را در اطلاعات آن ثبت کنید.',
            en: 'If Atlas Café’s 2,500 payment is coded by mistake to detail 2002 (Parsa Books), the general and subsidiary accounts are right and the trial balance still balances, yet both customers’ statements are wrong, and you may chase a customer who has already paid. Another common error is the **duplicate detail account**: “Atlas Café” and “Cafe Atlas” under two codes. Search before creating a new detail account, and record a unique identifier, such as the national ID or economic code, in its details.',
          },
        },
      ],
    },
    {
      id: 'legal-books',
      title: { fa: 'دفاتر قانونی: روزنامه و کل', en: 'Legal Books: the Statutory Journal and Ledger' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'سند و نرم‌افزار ابزار کار داخلی‌اند. در کنار آن‌ها، قانون از بسیاری از کسب‌وکارها **دفاتر قانونی** می‌خواهد. قانون تجارت چهار دفتر را نام می‌برد: روزنامه، کل، دارایی و کپیه. قانون مالیات‌های مستقیم هم اشخاص حقوقی و گروهی از صاحبان مشاغل را مکلف می‌کند دفتر روزنامه و کل را طبق آیین‌نامه مربوط نگه دارند. در عمل، وقتی از «دفاتر قانونی» صحبت می‌شود، منظور همین **دفتر روزنامه و دفتر کل** است.',
            en: 'Vouchers and software are internal working tools. Alongside them, the law requires many businesses to keep **legal books**. The Commercial Code names four books: the journal, the ledger, the inventory book and the copy book. The Direct Taxes Act requires legal entities and certain groups of individual taxpayers to keep a journal and a ledger under its regulation. In practice, “legal books” means this **statutory journal and ledger**.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**پلمب پیش از استفاده**: دفاتر قانونی صفحات شماره‌گذاری‌شده دارند و پیش از شروع ثبت، معمولاً پیش از آغاز سال مالی، باید نزد مرجع تعیین‌شده پلمب (ثبت) شوند.',
              en: '**Registered before use**: legal books have numbered pages and must be registered («پلمب») with the designated authority before any entries are made, usually before the fiscal year begins.',
            },
            {
              fa: '**ترتیب تاریخ**: ثبت‌ها به ترتیب تاریخ و بدون فاصله نوشته می‌شوند؛ سطر سفید، نوشتن میان سطرها، تراشیدن، پاک کردن و خط زدن مجاز نیست.',
              en: '**Date order**: entries are written in date order with no gaps; blank lines, writing between lines, scraping, erasing and crossing out are not allowed.',
            },
            {
              fa: '**اصلاح با ثبت جدید**: اشتباه با سند اصلاحی و ثبت تازه اصلاح می‌شود، نه با لاک غلط‌گیر.',
              en: '**Corrections by new entries**: an error is fixed with a correcting entry, never with correction fluid.',
            },
            {
              fa: '**سطح حساب کل**: در عمل، معمولاً جمع سندهای هر روز یا هر دوره در سطح حساب کل در روزنامه قانونی نوشته و از آنجا به دفتر کل قانونی منتقل می‌شود؛ جزئیات معین و تفصیلی در سندها و نرم‌افزار می‌ماند.',
              en: '**General-account level**: in practice, the totals of each day’s or each period’s vouchers are written in the statutory journal at general-account level and carried to the statutory ledger; subsidiary and detail information stays in the vouchers and the software.',
            },
            {
              fa: '**نگهداری مدارک**: سندها و مدارک پیوست بایگانی می‌شوند تا ممیز مالیاتی یا حسابرس بتواند هر رقم دفتر را تا مدرکش دنبال کند.',
              en: '**Records kept**: vouchers and their attachments are filed so that a tax auditor or an external auditor can trace any figure in the books back to its evidence.',
            },
          ],
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'دفاتر قانونی', en: 'Legal books' },
            items: [
              { fa: 'الزام قانونی برای کسانی که مشمول آن‌اند', en: 'A legal requirement for those it applies to' },
              { fa: 'پلمب‌شده، با صفحات شماره‌دار', en: 'Registered, with numbered pages' },
              { fa: 'معمولاً در سطح حساب کل', en: 'Usually kept at general-account level' },
              { fa: 'مبنای رسیدگی مالیاتی', en: 'The basis of tax inspection' },
            ],
          },
          right: {
            title: { fa: 'سندها و دفاتر نرم‌افزاری', en: 'Vouchers and software records' },
            items: [
              { fa: 'ابزار کار روزانه حسابداری', en: 'The accountant’s daily tool' },
              { fa: 'در سطح معین و تفصیلی', en: 'Kept at subsidiary and detail level' },
              { fa: 'مبنای گزارش‌های مدیریتی و صورت‌حساب مشتریان', en: 'The basis of management reports and customer statements' },
              { fa: 'منبعی که دفاتر قانونی از آن تهیه می‌شود', en: 'The source from which the legal books are prepared' },
            ],
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'بیشتر شرکت‌ها دفاتر قانونی را از روی سندهای قطعی‌شده نرم‌افزار تهیه می‌کنند. ممیز مالیاتی دفاتر را با سندها و مدارک پیوست مقایسه می‌کند. اگر دفاتر نگهداری نشده باشند یا به دلیل ایرادهای اساسی رد شوند، درآمد مشمول مالیات ممکن است به‌صورت علی‌الرأس (برآوردی) تعیین شود که معمولاً به سود مؤدی نیست.',
            en: 'Most companies prepare their legal books from the finalised vouchers in their software. A tax auditor compares the books with the vouchers and attached documents. If books were not kept, or are rejected for serious defects, taxable income may be assessed on an estimated basis («علی‌الرأس»), which is rarely in the taxpayer’s favour.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'قانون روز را بررسی کنید', en: 'Check the current rules' },
          text: {
            fa: 'اینکه دقیقاً چه کسانی مشمول نگهداری دفاتر قانونی‌اند، مرجع و روش پلمب، مهلت‌ها و امکان یا الزام **دفاتر الکترونیکی** در سال‌های اخیر بارها تغییر کرده است و درخواست پلمب اکنون از طریق سامانه‌های الکترونیکی سازمان امور مالیاتی انجام می‌شود. پیش از اقدام، آخرین متن قانون مالیات‌های مستقیم، آیین‌نامه‌های آن و بخشنامه‌های سازمان امور مالیاتی را بررسی کنید.',
            en: 'Exactly who must keep legal books, where and how they are registered, the deadlines, and whether **electronic books** are allowed or required have changed several times in recent years, and registration requests now go through the Iranian tax administration’s online systems. Before acting, check the latest Direct Taxes Act, its regulations and the tax administration’s circulars.',
          },
        },
      ],
    },
    {
      id: 'software',
      title: { fa: 'سند و کد در نرم‌افزار حسابداری', en: 'Vouchers and Codes in Accounting Software' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'بیشتر شرکت‌های ایرانی با نرم‌افزارهای حسابداری داخلی کار می‌کنند. ظاهر نرم‌افزارها با هم فرق دارد، اما منطق همه همان است که در این درس دیدید: کدینگ، سند، تأیید و گزارش. تفاوت اصلی این است که نرم‌افزار بسیاری از کنترل‌ها و همه انتقال‌ها را خودکار انجام می‌دهد.',
            en: 'Most Iranian companies use locally developed accounting software. The screens differ, but the logic is what you have seen in this lesson: coding, vouchers, approval and reports. The main difference is that the software runs many of the checks and all of the posting automatically.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'تعریف کدینگ', en: 'Set up the coding' },
              text: {
                fa: 'درخت گروه، کل و معین تعریف می‌شود و برای هر معین مشخص می‌شود که تفصیلی لازم دارد یا نه.',
                en: 'The tree of groups, general and subsidiary accounts is defined, and each subsidiary is flagged as requiring a detail account or not.',
              },
            },
            {
              title: { fa: 'تعریف تفصیلی‌ها', en: 'Set up detail accounts' },
              text: {
                fa: 'مشتریان، تأمین‌کنندگان، حساب‌های بانکی، کارکنان و پروژه‌ها با اطلاعات شناسایی‌شان تعریف می‌شوند.',
                en: 'Customers, suppliers, bank accounts, employees and projects are created with their identifying information.',
              },
            },
            {
              title: { fa: 'ثبت سند', en: 'Enter vouchers' },
              text: {
                fa: 'حسابدار کدها را از فهرست انتخاب می‌کند؛ نرم‌افزار سند نامتوازن یا کدی را که در سطح ثبت نیست نمی‌پذیرد.',
                en: 'The accountant picks codes from a list; the software rejects an unbalanced voucher or a code that is not at posting level.',
              },
            },
            {
              title: { fa: 'سندهای خودکار', en: 'Automatic vouchers' },
              text: {
                fa: 'زیرسیستم‌های فروش، خزانه‌داری (دریافت، پرداخت و چک)، حقوق و انبار، سند حسابداری را خودکار صادر می‌کنند و حسابدار آن‌ها را بررسی می‌کند.',
                en: 'The sales, treasury (receipts, payments and cheques), payroll and inventory modules generate vouchers automatically, and the accountant reviews them.',
              },
            },
            {
              title: { fa: 'تأیید و قطعی کردن', en: 'Approve and finalise' },
              text: {
                fa: 'کاربر مجاز سندها را تأیید و قطعی می‌کند و دوره‌های بسته‌شده قفل می‌شوند.',
                en: 'An authorised user approves and finalises vouchers, and closed periods are locked.',
              },
            },
            {
              title: { fa: 'گزارش‌گیری', en: 'Reports' },
              text: {
                fa: 'دفتر روزنامه، دفتر کل، گردش حساب معین و تفصیلی، تراز آزمایشی در هر سطح و صورت‌های مالی با چند کلیک تهیه می‌شوند.',
                en: 'The journal, the ledger, subsidiary and detail account statements, trial balances at each level and the financial statements take a few clicks.',
              },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'کنترل‌های رایج نرم‌افزار حسابداری', en: 'Common controls in accounting software' },
          head: [
            { fa: 'کنترل نرم‌افزار', en: 'Software control' },
            { fa: 'جلوی چه خطایی را می‌گیرد', en: 'Error it prevents' },
          ],
          rows: [
            [
              { fa: 'کنترل توازن', en: 'Balance check' },
              { fa: 'ذخیره سندی که جمع بدهکار و بستانکارش برابر نیست', en: 'Saving a voucher whose debits and credits differ' },
            ],
            [
              { fa: 'کنترل سطح ثبت', en: 'Posting-level check' },
              { fa: 'ثبت در حساب کل یا گروه به‌جای معین', en: 'Posting to a group or general account instead of a subsidiary' },
            ],
            [
              { fa: 'الزام تفصیلی', en: 'Mandatory detail' },
              { fa: 'ثبت طلب بدون مشخص کردن مشتری', en: 'Recording a receivable without naming the customer' },
            ],
            [
              { fa: 'قفل دوره', en: 'Period lock' },
              { fa: 'ثبت یا ویرایش سند در دوره‌ای که بسته شده است', en: 'Entering or editing vouchers in a closed period' },
            ],
            [
              { fa: 'سطح دسترسی کاربران', en: 'User permissions' },
              { fa: 'تأیید سند توسط همان کسی که آن را تنظیم کرده است', en: 'Approval by the same person who prepared the voucher' },
            ],
            [
              { fa: 'ثبت سابقه تغییرات', en: 'Audit log' },
              { fa: 'تغییر پنهانی سندها؛ هر ویرایش با نام کاربر و زمان ثبت می‌شود', en: 'Hidden changes; every edit is logged with the user and the time' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'تراز آزمایشی در سه سطح', en: 'Trial balances at three levels' },
          text: {
            fa: 'نرم‌افزار تراز آزمایشی را در سطح کل (برای صورت‌های مالی)، معین (برای تحلیل) و تفصیلی (برای مانده هر مشتری و تأمین‌کننده) تهیه می‌کند. قالب رایج در ایران **تراز چهارستونی** است: گردش بدهکار، گردش بستانکار، مانده بدهکار و مانده بستانکار. در درس تراز آزمایشی، این گزارش را از نزدیک می‌بینید.',
            en: 'Software produces the trial balance at general level (for the financial statements), subsidiary level (for analysis) and detail level (for each customer’s and supplier’s balance). A common Iranian layout is the **four-column trial balance**: debit turnover, credit turnover, debit balance and credit balance. You will look at this report closely in the lesson on the trial balance.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'از نگاه IFRS', en: 'From an IFRS perspective' },
          text: {
            fa: 'استانداردهای بین‌المللی گزارشگری مالی (IFRS) قالب سند یا کدینگ خاصی را تعیین نمی‌کنند. آنچه لازم است، سوابق قابل اتکا و ردّ حسابرسی روشن است. کدینگی که از ابتدا با سرفصل‌های صورت‌های مالی و یادداشت‌های توضیحی هماهنگ طراحی شود (مثلاً تفکیک دریافتنی‌های تجاری و غیرتجاری)، تهیه صورت‌ها را بسیار ساده‌تر می‌کند.',
            en: 'IFRS does not prescribe any voucher layout or coding scheme. What it needs is reliable records and a clear audit trail. A coding plan designed from the start to match the lines of the financial statements and their notes (for example separating trade from non-trade receivables) makes preparing the statements far easier.',
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
            fa: 'چهار تمرین زیر از آسان به دشوار مرتب شده‌اند. اول خودتان حل کنید، بعد پاسخ را باز کنید.',
            en: 'The four exercises below run from easy to hard. Solve each one yourself first, then open the solution.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'کد کامل هر سطر', en: 'The full code for each line' },
          difficulty: 'easy',
          problem: {
            fa: 'با کدینگ نوا (دو جدول بخش کدینگ سه‌سطحی)، برای هر رویداد فرضی زیر بگویید کدام معین و کدام تفصیلی بدهکار و کدام بستانکار می‌شود. این رویدادها جزو ارقام ماه نوا نیستند. برای رویداد «ب» پروژه تازه‌ای با کد 5003 (سایت پارسا) تعریف شده است.',
            en: 'Using Nova’s coding (the two tables in the section on three-level coding), say which subsidiary and detail accounts are debited and credited for each hypothetical event below. These events are not part of Nova’s monthly figures. For event (b) a new project, code 5003 (Parsa website), has been created.',
          },
          given: {
            head: [
              { fa: 'رویداد', en: 'Event' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            numericCols: [1],
            rows: [
              [{ fa: 'الف) انتقال وجه از صندوق دفتر به سپرده کوتاه‌مدت بانک ب', en: '(a) Cash moved from the office cash box to the Bank B short-term deposit' }, 3000],
              [{ fa: 'ب) فاکتور طراحی سایت برای کتاب‌فروشی پارسا (پروژه 5003)', en: '(b) Invoice to Parsa Books for website design (project 5003)' }, 2000],
              [{ fa: 'ج) کافه اطلس پیش‌پرداخت پروژه آینده را به حساب جاری بانک الف واریز می‌کند', en: '(c) Atlas Café pays an advance for a future project into the Bank A current account' }, 1800],
              [{ fa: 'د) خرید نسیه ملزومات اداری از لوازم‌التحریر نگین', en: '(d) Office supplies bought on account from Negin Stationery' }, 600],
              [{ fa: 'ه) اضافه‌کار ماه طراح وب که ماه بعد پرداخت می‌شود', en: '(e) The web designer’s overtime for the month, to be paid next month' }, 900],
            ],
          },
          hint: {
            fa: 'اول حساب کل را پیدا کنید، بعد معین مناسب را، و آخر بپرسید: آیا این معین طرف حساب یا پروژه دارد؟ اگر بله، کد تفصیلی لازم است.',
            en: 'Find the general account first, then the right subsidiary, and finally ask: does this subsidiary track a counterparty or project? If so, it needs a detail code.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'رویداد', en: 'Event' },
                { fa: 'بدهکار (معین / تفصیلی)', en: 'Debit (subsidiary / detail)' },
                { fa: 'بستانکار (معین / تفصیلی)', en: 'Credit (subsidiary / detail)' },
              ],
              rows: [
                [{ fa: 'الف', en: '(a)' }, { fa: '101002 بانک‌ها / 1003 سپرده بانک ب', en: '101002 Banks / 1003 Bank B deposit' }, { fa: '101001 صندوق / 1001 صندوق دفتر', en: '101001 Cash box / 1001 Office cash box' }],
                [{ fa: 'ب', en: '(b)' }, { fa: '102001 دریافتنی‌های تجاری / 2002 پارسا', en: '102001 Trade receivables / 2002 Parsa' }, { fa: '401002 طراحی وب / 5003 سایت پارسا', en: '401002 Web design / 5003 Parsa website' }],
                [{ fa: 'ج', en: '(c)' }, { fa: '101002 بانک‌ها / 1002 جاری بانک الف', en: '101002 Banks / 1002 Bank A current' }, { fa: '204001 پیش‌دریافت از مشتریان / 2001 اطلس', en: '204001 Advances from customers / 2001 Atlas' }],
                [{ fa: 'د', en: '(d)' }, { fa: '103001 ملزومات اداری (بدون تفصیلی)', en: '103001 Office supplies (no detail)' }, { fa: '201001 پرداختنی‌های تجاری / 3001 نگین', en: '201001 Trade payables / 3001 Negin' }],
                [{ fa: 'ه', en: '(e)' }, { fa: '502002 اضافه‌کار / 4002 طراح وب', en: '502002 Overtime / 4002 Web designer' }, { fa: '202001 حقوق پرداختنی / 4002 طراح وب', en: '202001 Salaries payable / 4002 Web designer' }],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'به «ج» و «ه» دقت کنید: تفصیلی 2001 این بار زیر پیش‌دریافت آمده و تفصیلی 4002 هم زیر هزینه و هم زیر بدهی؛ این همان تفصیلی شناور است. در «ب» درآمد از نوع طراحی وب (401002) است، نه طراحی گرافیک. و در «ج» هنوز درآمدی کسب نشده، پس حساب درآمد درگیر نیست.',
                en: 'Look at (c) and (e): detail 2001 now sits under Advances from customers, and detail 4002 appears under both an expense and a liability; that is a floating detail account. In (b) the revenue is web design (401002), not graphic design. And in (c) nothing has been earned yet, so no revenue account is involved.',
              },
            },
          ],
          answer: {
            fa: 'الف 101002/1003 و 101001/1001؛ ب 102001/2002 و 401002/5003؛ ج 101002/1002 و 204001/2001؛ د 103001 و 201001/3001؛ ه 502002/4002 و 202001/4002.',
            en: '(a) 101002/1003 and 101001/1001; (b) 102001/2002 and 401002/5003; (c) 101002/1002 and 204001/2001; (d) 103001 and 201001/3001; (e) 502002/4002 and 202001/4002.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'سه سند برای دفتر مهندسی پایا', en: 'Three vouchers for Paya Engineering' },
          difficulty: 'medium',
          problem: {
            fa: 'دفتر مهندسی پایا خدمات نظارت ساختمان ارائه می‌کند. روز 15 سه رویداد رخ داده است: (1) شرکت ساختمانی کوهسار 12,000 از بدهی خود را با انتقال پایا به حساب جاری بانک الف پرداخت کرد. (2) اجاره دفتر به مبلغ 8,000 با چک از حساب جاری بانک الف پرداخت شد. (3) یک دستگاه پلاتر به بهای 15,000 خریداری شد: 5,000 با انتقال بانکی از بانک الف پرداخت شد و 10,000 را به فناوران چاپ بدهکار شدیم. برای هر رویداد یک سند (شماره‌های 118، 119 و 120) با کد کامل تنظیم کنید و بگویید چه مدارکی باید پیوست شود.',
            en: 'Paya Engineering provides building-supervision services. Three events occur on Day 15: (1) Kohsar Construction pays 12,000 of its debt by bank transfer into the Bank A current account. (2) Office rent of 8,000 is paid by cheque from the Bank A current account. (3) A plotter is bought for 15,000: 5,000 is paid by bank transfer from Bank A and 10,000 is owed to Fanavaran Print. Prepare one voucher for each event (nos. 118, 119 and 120) with full codes, and list the documents to attach.',
          },
          given: {
            head: [
              { fa: 'کد معین', en: 'Subsidiary code' },
              { fa: 'عنوان', en: 'Title' },
              { fa: 'تفصیلی', en: 'Detail' },
            ],
            rows: [
              [same('101002'), { fa: 'بانک‌ها', en: 'Banks' }, { fa: '1002 حساب جاری بانک الف', en: '1002 Bank A current account' }],
              [same('102001'), { fa: 'دریافتنی‌های تجاری', en: 'Trade receivables' }, { fa: '2005 شرکت ساختمانی کوهسار', en: '2005 Kohsar Construction' }],
              [same('151001'), { fa: 'تجهیزات فنی', en: 'Technical equipment' }, none],
              [same('201001'), { fa: 'پرداختنی‌های تجاری', en: 'Trade payables' }, { fa: '3003 فناوران چاپ', en: '3003 Fanavaran Print' }],
              [same('501001'), { fa: 'هزینه اجاره', en: 'Rent expense' }, none],
            ],
          },
          hint: {
            fa: 'سند 120 سه سطر دارد: یک سطر بدهکار و دو سطر بستانکار.',
            en: 'Voucher 120 has three lines: one debit and two credits.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'سند 118: وصول از کوهسار', en: 'Voucher 118: collection from Kohsar' },
              head: [
                { fa: 'ردیف', en: 'Line' },
                { fa: 'کد معین', en: 'Subsidiary' },
                { fa: 'تفصیلی', en: 'Detail' },
                { fa: 'شرح', en: 'Description' },
                { fa: 'بدهکار', en: 'Debit' },
                { fa: 'بستانکار', en: 'Credit' },
              ],
              numericCols: [4, 5],
              rows: [
                [same('1'), same('101002'), same('1002'), { fa: 'وصول از کوهسار، انتقال پایا', en: 'Received from Kohsar by bank transfer' }, 12000, blank],
                [same('2'), same('102001'), same('2005'), { fa: 'کاهش طلب از شرکت ساختمانی کوهسار', en: 'Reduces the receivable from Kohsar Construction' }, blank, 12000],
                [total, blank, blank, blank, 12000, 12000],
              ],
            },
            {
              type: 'table',
              caption: { fa: 'سند 119: پرداخت اجاره', en: 'Voucher 119: rent payment' },
              head: [
                { fa: 'ردیف', en: 'Line' },
                { fa: 'کد معین', en: 'Subsidiary' },
                { fa: 'تفصیلی', en: 'Detail' },
                { fa: 'شرح', en: 'Description' },
                { fa: 'بدهکار', en: 'Debit' },
                { fa: 'بستانکار', en: 'Credit' },
              ],
              numericCols: [4, 5],
              rows: [
                [same('1'), same('501001'), none, { fa: 'اجاره دفتر، ماه جاری', en: 'Office rent, current month' }, 8000, blank],
                [same('2'), same('101002'), same('1002'), { fa: 'چک پرداختی به موجر بابت اجاره', en: 'Cheque to the landlord for rent' }, blank, 8000],
                [total, blank, blank, blank, 8000, 8000],
              ],
            },
            {
              type: 'table',
              caption: { fa: 'سند 120: خرید پلاتر', en: 'Voucher 120: plotter purchase' },
              head: [
                { fa: 'ردیف', en: 'Line' },
                { fa: 'کد معین', en: 'Subsidiary' },
                { fa: 'تفصیلی', en: 'Detail' },
                { fa: 'شرح', en: 'Description' },
                { fa: 'بدهکار', en: 'Debit' },
                { fa: 'بستانکار', en: 'Credit' },
              ],
              numericCols: [4, 5],
              rows: [
                [same('1'), same('151001'), none, { fa: 'خرید یک دستگاه پلاتر', en: 'Purchase of one plotter' }, 15000, blank],
                [same('2'), same('101002'), same('1002'), { fa: 'پرداخت بخشی از بهای پلاتر، انتقال بانکی', en: 'Part of the price paid by bank transfer' }, blank, 5000],
                [same('3'), same('201001'), same('3003'), { fa: 'مانده بهای پلاتر، بدهی به فناوران چاپ', en: 'Balance of the price, owed to Fanavaran Print' }, blank, 10000],
                [total, blank, blank, blank, 15000, 15000],
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              title: { fa: 'پیوست‌ها', en: 'Attachments' },
              text: {
                fa: 'سند 118: اعلامیه یا صورت‌حساب بانک که واریز را نشان می‌دهد. سند 119: ته‌چک یا تصویر چک و رسید موجر، با ارجاع به قرارداد اجاره. سند 120: فاکتور خرید، رسید انتقال بانکی و رسید تحویل دستگاه.',
                en: 'Voucher 118: the bank advice or statement showing the deposit. Voucher 119: the cheque stub or a copy of the cheque and the landlord’s receipt, with a reference to the lease. Voucher 120: the purchase invoice, the transfer receipt and the delivery note for the plotter.',
              },
            },
          ],
          answer: {
            fa: 'سند 118: بانک الف بدهکار و کوهسار بستانکار 12,000؛ سند 119: اجاره بدهکار و بانک الف بستانکار 8,000؛ سند 120: تجهیزات فنی بدهکار 15,000، بانک الف بستانکار 5,000 و فناوران چاپ بستانکار 10,000.',
            en: 'Voucher 118: Dr Bank A, Cr Kohsar 12,000; voucher 119: Dr Rent, Cr Bank A 8,000; voucher 120: Dr Technical equipment 15,000, Cr Bank A 5,000 and Cr Fanavaran Print 10,000.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'کدینگ آموزشگاه زبان آوا', en: 'A coding plan for Ava Language School' },
          difficulty: 'medium',
          problem: {
            fa: 'آموزشگاه زبان آوا دو شعبه دارد (مرکز و غرب)، یک صندوق در هر شعبه، دو حساب جاری و یک حساب سپرده بانکی. زبان‌آموزان فردی شهریه را هنگام ثبت‌نام نقدی یا با کارتخوان می‌پردازند، اما چند شرکت برای کارکنانشان دوره می‌خرند و شهریه را یک ماه بعد می‌پردازند. مدرسان حق‌التدریس ساعتی می‌گیرند. مدیر می‌خواهد درآمد هر نوع دوره (بزرگسالان، کودکان، آیلتس) و سود هر شعبه را ببیند. یک کدینگ سه‌سطحی پیشنهاد کنید: کدام حساب‌ها معین جدا می‌خواهند، کدام معین‌ها تفصیلی لازم دارند و بازه کدهای تفصیلی چیست. سپس کد کامل دو سطر نمونه را بنویسید: شهریه دوره آیلتسِ همین ماه در شعبه غرب که با کارتخوان به حساب جاری بانک الف واریز شد، و حق‌التدریس یکی از مدرسان (تفصیلی 4003) در شعبه مرکز.',
            en: 'Ava Language School has two branches (Central and West), a cash box in each, two current accounts and one bank deposit account. Individual learners pay tuition in cash or by card when they enrol, but several companies buy courses for their staff and pay a month later. Teachers are paid by the hour. The manager wants to see revenue by course type (adults, children, IELTS) and profit by branch. Propose a three-level coding plan: which accounts need separate subsidiaries, which subsidiaries need detail accounts, and what the detail-code ranges are. Then write the full codes for two sample lines: this month’s IELTS tuition at the West branch, paid by card into the Bank A current account, and one teacher’s fees (detail 4003) at the Central branch.',
          },
          hint: {
            fa: 'زبان‌آموز فردی که هنگام ثبت‌نام نقدی می‌پردازد طلبی ایجاد نمی‌کند؛ پس لازم نیست برایش حساب تفصیلی باز کنید. برای سود هر شعبه، کد شعبه به‌عنوان تفصیلی دوم کمک می‌کند.',
            en: 'An individual learner who pays in cash at enrolment creates no receivable, so no detail account is needed for them. For branch profit, a branch code used as a second detail level helps.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'ساختار کد', en: 'Code structure' },
                  text: {
                    fa: 'همان الگوی نوا: گروه 1 رقم، کل 4 رقم، معین = کل + 2 رقم، تفصیلی شناور 4 رقمی.',
                    en: 'The same pattern as Nova: group 1 digit, general 4 digits, subsidiary = general + 2 digits, floating 4-digit detail codes.',
                  },
                },
                {
                  title: { fa: 'نوع دوره در سطح معین', en: 'Course type at subsidiary level' },
                  text: {
                    fa: 'هر نوع دوره یک معین درآمد جدا دارد (401001 بزرگسالان، 401002 کودکان، 401003 آیلتس) تا تراز معین، درآمد هر دوره را مستقیم نشان دهد.',
                    en: 'Each course type gets its own revenue subsidiary (401001 adults, 401002 children, 401003 IELTS), so the subsidiary trial balance shows revenue by course directly.',
                  },
                },
                {
                  title: { fa: 'شعبه به‌عنوان تفصیلی دوم', en: 'Branch as a second detail level' },
                  text: {
                    fa: 'روی درآمدها و هزینه‌ها، کد شعبه (6001 مرکز، 6002 غرب) هم ثبت می‌شود. سود هر شعبه = درآمدهای با کد آن شعبه − هزینه‌های با کد آن شعبه.',
                    en: 'Revenues and expenses also carry a branch code (6001 Central, 6002 West). Branch profit = revenues coded to that branch − expenses coded to that branch.',
                  },
                },
                {
                  title: { fa: 'تفصیلی فقط جایی که لازم است', en: 'Detail only where needed' },
                  text: {
                    fa: 'برای مشتریان سازمانی (چون طلب ایجاد می‌کنند)، مدرسان و کارکنان، تأمین‌کنندگان، صندوق‌ها و حساب‌های بانکی تفصیلی باز می‌کنیم. جزئیات زبان‌آموز فردی در سامانه ثبت‌نام آموزشگاه می‌ماند، نه در کدینگ حسابداری.',
                    en: 'Detail accounts go to corporate customers (they create receivables), teachers and staff, suppliers, cash boxes and bank accounts. Individual learners’ details stay in the school’s enrolment system, not in the accounting codes.',
                  },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'کدینگ پیشنهادی آوا (حساب‌های اصلی)', en: 'Proposed coding for Ava (main accounts)' },
              head: [
                { fa: 'کد کل', en: 'General' },
                { fa: 'حساب کل', en: 'General account' },
                { fa: 'معین‌ها', en: 'Subsidiaries' },
                { fa: 'تفصیلی', en: 'Detail' },
              ],
              rows: [
                [same('1010'), { fa: 'موجودی نقد', en: 'Cash' }, { fa: '101001 صندوق‌ها؛ 101002 بانک‌ها', en: '101001 Cash boxes; 101002 Banks' }, { fa: '1001 صندوق مرکز؛ 1002 صندوق غرب؛ 1003 جاری بانک الف؛ 1004 جاری بانک ب؛ 1005 سپرده بانک ب', en: '1001 Central cash box; 1002 West cash box; 1003 Bank A current; 1004 Bank B current; 1005 Bank B deposit' }],
                [same('1020'), { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, { fa: '102001 مشتریان سازمانی؛ 102002 مساعده کارکنان', en: '102001 Corporate customers; 102002 Staff advances' }, { fa: 'مشتریان سازمانی 2001 تا 2999؛ کارکنان و مدرسان 4001 تا 4999', en: 'Corporate customers 2001 to 2999; staff and teachers 4001 to 4999' }],
                [same('2010'), { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, { fa: '201001 تأمین‌کنندگان', en: '201001 Suppliers' }, { fa: '3001 تا 3999', en: '3001 to 3999' }],
                [same('2020'), { fa: 'حقوق و حق‌التدریس پرداختنی', en: 'Salaries and teaching fees payable' }, { fa: '202001 حقوق کارکنان؛ 202002 حق‌التدریس مدرسان', en: '202001 Staff salaries; 202002 Teachers’ fees' }, { fa: '4001 تا 4999', en: '4001 to 4999' }],
                [same('2040'), { fa: 'پیش‌دریافت شهریه', en: 'Tuition received in advance' }, { fa: '204001 شهریه دوره‌های شروع‌نشده', en: '204001 Tuition for courses not yet started' }, { fa: 'شعبه (و مشتری سازمانی در صورت لزوم)', en: 'Branch (and corporate customer where relevant)' }],
                [same('4010'), { fa: 'درآمد شهریه', en: 'Tuition revenue' }, { fa: '401001 بزرگسالان؛ 401002 کودکان؛ 401003 آیلتس', en: '401001 Adults; 401002 Children; 401003 IELTS' }, { fa: 'شعبه: 6001 مرکز، 6002 غرب', en: 'Branch: 6001 Central, 6002 West' }],
                [same('5010'), { fa: 'هزینه اجاره', en: 'Rent expense' }, { fa: '501001 اجاره ساختمان', en: '501001 Building rent' }, { fa: 'شعبه', en: 'Branch' }],
                [same('5020'), { fa: 'هزینه حقوق و حق‌التدریس', en: 'Salaries and teaching fees expense' }, { fa: '502001 حقوق کارکنان؛ 502002 حق‌التدریس', en: '502001 Staff salaries; 502002 Teaching fees' }, { fa: 'مدرس (4001 تا 4999) و شعبه', en: 'Teacher (4001 to 4999) and branch' }],
              ],
            },
            {
              type: 'table',
              caption: { fa: 'دو سطر نمونه', en: 'Two sample lines' },
              head: [
                { fa: 'رویداد', en: 'Event' },
                { fa: 'بدهکار', en: 'Debit' },
                { fa: 'بستانکار', en: 'Credit' },
              ],
              rows: [
                [{ fa: 'شهریه آیلتس، شعبه غرب، کارتخوان', en: 'IELTS tuition, West branch, card' }, { fa: '101002 / 1003', en: '101002 / 1003' }, { fa: '401003 / 6002', en: '401003 / 6002' }],
                [{ fa: 'حق‌التدریس مدرس 4003، شعبه مرکز', en: 'Teacher 4003’s fees, Central branch' }, { fa: '502002 / 4003 و 6001', en: '502002 / 4003 and 6001' }, { fa: '202002 / 4003', en: '202002 / 4003' }],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'راه‌حل یکتا نیست. معیار درستی این است که هر پرسش مدیر (درآمد هر دوره، سود هر شعبه، بدهی به هر مدرس، طلب از هر شرکت) با یک گزارش از کدینگ جواب داده شود، بدون جست‌وجوی دستی در سندها.',
                en: 'There is no single right answer. The test is whether each of the manager’s questions (revenue per course, profit per branch, what we owe each teacher, what each company owes us) can be answered by one report on the codes, with no manual search through vouchers.',
              },
            },
          ],
          answer: {
            fa: 'کل 4 رقمی، معین = کل + 2 رقم، تفصیلی شناور 4 رقمی؛ نوع دوره در سطح معین درآمد و شعبه به‌عنوان تفصیلی دوم. نمونه: بدهکار 101002/1003 و بستانکار 401003/6002.',
            en: 'General 4 digits, subsidiary = general + 2 digits, floating 4-digit details; course type at revenue-subsidiary level and branch as a second detail. Sample: Dr 101002/1003, Cr 401003/6002.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'خطاهای سند را پیدا کنید', en: 'Find the errors in a voucher' },
          difficulty: 'hard',
          problem: {
            fa: 'سند زیر را حسابدار تازه‌کار شرکت خدمات رایانه‌ای رایان تنظیم کرده است. سرسند و پاسند: شماره 214، تاریخ روز 15، شرح کلی «بابت»، تعداد پیوست: صفر، تنظیم‌کننده و تأییدکننده: هر دو همان حسابدار. اطلاعات بیشتر: درآمد خدمات شرکت تارا (تفصیلی 2007) ماه قبل، هنگام صدور فاکتور، ثبت شده است؛ فاکتور خرید لپ‌تاپ از پارس‌افزار (تفصیلی 3005) 9,800 است. همه خطاها را پیدا کنید و سند درست را بنویسید.',
            en: 'A junior accountant at Rayan Computer Services prepared the voucher below. Header and footer: no. 214, dated Day 15, overall description “payment”, attachments: none, prepared and approved by the same accountant. More facts: the revenue from Tara Co. (detail 2007) was recorded last month when it was invoiced; the invoice for the laptop bought from Pars Afzar (detail 3005) is 9,800. Find every error and write the correct voucher.',
          },
          given: {
            head: [
              { fa: 'ردیف', en: 'Line' },
              { fa: 'کد', en: 'Code' },
              { fa: 'تفصیلی', en: 'Detail' },
              { fa: 'شرح ردیف', en: 'Line description' },
              { fa: 'بدهکار', en: 'Debit' },
              { fa: 'بستانکار', en: 'Credit' },
            ],
            numericCols: [4, 5],
            rows: [
              [same('1'), same('101002'), same('1002'), { fa: 'وصول از شرکت تارا', en: 'Received from Tara Co.' }, 9600, blank],
              [same('2'), same('4010'), none, { fa: 'وصول از شرکت تارا', en: 'Received from Tara Co.' }, blank, 9600],
              [same('3'), same('501001'), none, { fa: 'اجاره دفتر', en: 'Office rent' }, 7000, blank],
              [same('4'), same('101002'), same('1002'), { fa: 'چک 4471', en: 'Cheque 4471' }, blank, 7000],
              [same('5'), same('151001'), none, { fa: 'خرید لپ‌تاپ', en: 'Laptop purchase' }, 9800, blank],
              [same('6'), same('201001'), same('3005'), { fa: 'خرید لپ‌تاپ از پارس‌افزار', en: 'Laptop from Pars Afzar' }, blank, 9400],
              [total, blank, blank, blank, 26400, 26000],
            ],
          },
          hint: {
            fa: 'پنج خطا وجود دارد: دو خطا در بدنه سند و سه خطا در سرسند و پاسند. جمع ستون‌ها را هم دوباره حساب کنید.',
            en: 'There are five errors: two in the body and three in the header and footer. Re-add the columns too.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'سند تراز نیست', en: 'The voucher does not balance' },
                  text: {
                    fa: 'جمع بدهکار 26,400 و جمع بستانکار 26,000 است؛ اختلاف 400. فاکتور 9,800 است، پس ردیف 6 باید 9,800 باشد، نه 9,400. اختلاف را هرگز با یک سطر «اختلاف» نپوشانید.',
                    en: 'Debits total 26,400 and credits 26,000: a 400 difference. The invoice is 9,800, so line 6 must be 9,800, not 9,400. Never hide a difference with a plug line.',
                  },
                },
                {
                  title: { fa: 'حساب اشتباه در ردیف 2', en: 'Wrong account on line 2' },
                  text: {
                    fa: 'درآمد تارا ماه قبل ثبت شده است؛ وصول وجه فقط طلب را کم می‌کند و درآمد تازه نمی‌سازد. باید 102001 دریافتنی‌های تجاری با تفصیلی 2007 (شرکت تارا) بستانکار شود. ثبت فعلی، درآمد را دو بار و طلب از تارا را 9,600 بیش از واقع نشان می‌دهد. کد 4010 هم کد کل است و در سطح ثبت نیست.',
                    en: 'Tara’s revenue was recorded last month; the collection only reduces the receivable and creates no new revenue. Credit 102001 Trade receivables with detail 2007 (Tara Co.). As written, revenue is counted twice and the receivable from Tara is overstated by 9,600. Code 4010 is also a general code, not a posting-level code.',
                  },
                },
                {
                  title: { fa: 'شرح کلی مبهم', en: 'Vague overall description' },
                  text: {
                    fa: '«بابت» چیزی نمی‌گوید. مثلاً بنویسید: «وصول از شرکت تارا، پرداخت اجاره دفتر و خرید لپ‌تاپ؛ روز 15».',
                    en: '“Payment” says nothing. Write, for example: “Collection from Tara Co., office rent and laptop purchase; Day 15”.',
                  },
                },
                {
                  title: { fa: 'بدون پیوست', en: 'No attachments' },
                  text: {
                    fa: 'دست‌کم این مدارک لازم است: اعلامیه بانک برای وصول، تصویر چک 4471 و رسید موجر، فاکتور خرید لپ‌تاپ و رسید تحویل آن.',
                    en: 'At least these are needed: the bank advice for the collection, a copy of cheque 4471 and the landlord’s receipt, the laptop invoice and its delivery note.',
                  },
                },
                {
                  title: { fa: 'تنظیم‌کننده و تأییدکننده یکی‌اند', en: 'Same preparer and approver' },
                  text: {
                    fa: 'سند را باید شخص دیگری، مثلاً سرپرست حسابداری یا مدیر مالی، بررسی و تأیید کند؛ وگرنه هیچ‌کس خطاهای 1 و 2 را پیش از قطعی شدن سند نمی‌گیرد.',
                    en: 'Someone else, such as the chief accountant or the financial manager, must check and approve the voucher; otherwise nobody catches errors 1 and 2 before it is finalised.',
                  },
                },
              ],
            },
            {
              type: 'table',
              caption: {
                fa: 'سند اصلاح‌شده 214؛ پیوست: 5 برگ؛ تنظیم: حسابدار؛ تأیید: مدیر مالی',
                en: 'Corrected voucher 214; attachments: 5; prepared: accountant; approved: financial manager',
              },
              head: [
                { fa: 'ردیف', en: 'Line' },
                { fa: 'کد معین', en: 'Subsidiary' },
                { fa: 'تفصیلی', en: 'Detail' },
                { fa: 'شرح ردیف', en: 'Line description' },
                { fa: 'بدهکار', en: 'Debit' },
                { fa: 'بستانکار', en: 'Credit' },
              ],
              numericCols: [4, 5],
              rows: [
                [same('1'), same('101002'), same('1002'), { fa: 'وصول از شرکت تارا، انتقال بانکی', en: 'Received from Tara Co. by bank transfer' }, 9600, blank],
                [same('2'), same('102001'), same('2007'), { fa: 'کاهش طلب از شرکت تارا', en: 'Reduces the receivable from Tara Co.' }, blank, 9600],
                [same('3'), same('501001'), none, { fa: 'اجاره دفتر، ماه جاری', en: 'Office rent, current month' }, 7000, blank],
                [same('4'), same('101002'), same('1002'), { fa: 'چک 4471 در وجه موجر', en: 'Cheque 4471 to the landlord' }, blank, 7000],
                [same('5'), same('151001'), none, { fa: 'خرید یک دستگاه لپ‌تاپ', en: 'Purchase of one laptop' }, 9800, blank],
                [same('6'), same('201001'), same('3005'), { fa: 'بدهی به پارس‌افزار بابت لپ‌تاپ', en: 'Owed to Pars Afzar for the laptop' }, blank, 9800],
                [total, blank, blank, blank, 26400, 26400],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'اگر فقط خطای 1 اصلاح می‌شد، سند متوازن می‌شد اما درآمد و طلب از تارا هر دو 9,600 بیش از واقع می‌ماندند و تراز آزمایشی هم چیزی نشان نمی‌داد. بهتر است این سه رویداد نامرتبط سه سند جدا داشته باشند تا هر سند با مدارک خودش بایگانی شود.',
                en: 'Fixing only error 1 would balance the voucher, yet revenue and the receivable from Tara would both stay 9,600 too high, and the trial balance would not reveal it. Better still, give these three unrelated events three separate vouchers, each filed with its own documents.',
              },
            },
          ],
          answer: {
            fa: 'پنج خطا: سند 400 نامتوازن است (ردیف 6 باید 9,800 باشد)؛ ردیف 2 باید دریافتنی تارا (102001/2007) را بستانکار کند، نه درآمد را؛ شرح کلی مبهم است؛ پیوست ندارد؛ و تنظیم‌کننده و تأییدکننده یکی‌اند.',
            en: 'Five errors: the voucher is 400 out of balance (line 6 should be 9,800); line 2 should credit Tara’s receivable (102001/2007), not revenue; the description is vague; there are no attachments; and the preparer is also the approver.',
          },
        },
      ],
    },
    {
      id: 'summary',
      title: { fa: 'جمع‌بندی و واژه‌های کلیدی', en: 'Summary and Key Terms' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              fa: 'مدرک مثبته وقوع رویداد را ثابت می‌کند؛ سند حسابداری نشان می‌دهد آن رویداد با چه مبلغی در کدام حساب‌ها ثبت شد.',
              en: 'A source document proves that an event happened; a voucher shows which accounts it was recorded in, and for how much.',
            },
            {
              fa: 'سند کامل شماره پیاپی، تاریخ، شرح، کد حساب‌ها، مبالغ بدهکار و بستانکار برابر، پیوست و امضای تنظیم‌کننده و تأییدکننده دارد.',
              en: 'A complete voucher has a sequential number, a date, descriptions, account codes, equal debits and credits, attachments, and the preparer’s and approver’s signatures.',
            },
            {
              fa: 'سندها انواعی دارند: افتتاحیه، عادی، اصلاحی، اصلاح اشتباه، بستن حساب‌های موقت و اختتامیه. سند قطعی هرگز پاک نمی‌شود، بلکه با سند جدید اصلاح می‌شود.',
              en: 'Vouchers come in types: opening, regular, adjusting, correcting, closing and final closing. A final voucher is never erased; it is corrected by a new voucher.',
            },
            {
              fa: 'کدینگ سه‌سطحی (کل، معین، تفصیلی) جزئیات را زیر حساب‌های کل نگه می‌دارد؛ جمع تفصیلی‌ها همیشه برابر معین و جمع معین‌ها برابر کل است.',
              en: 'Three-level coding (general, subsidiary, detail) keeps detail beneath the general accounts; details always add up to their subsidiary, and subsidiaries to their general account.',
            },
            {
              fa: 'دفاتر قانونی روزنامه و کل باید پلمب شوند و بدون سطر سفید و پاک‌شدگی نوشته شوند؛ جزئیات الزامات را از قوانین روز بررسی کنید.',
              en: 'The statutory journal and ledger must be registered and written without blank lines or erasures; check the current rules for the details.',
            },
            {
              fa: 'نرم‌افزار حسابداری همین منطق را خودکار می‌کند و با کنترل‌هایی مثل توازن، سطح ثبت، الزام تفصیلی و قفل دوره جلوی بسیاری از خطاها را می‌گیرد.',
              en: 'Accounting software automates the same logic and blocks many errors with controls such as the balance check, posting level, mandatory detail and period locks.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباهات رایج', en: 'Common mistakes' },
          text: {
            fa: 'ویرایش یا حذف سند قطعی به‌جای صدور سند اصلاحی؛ شرح‌های مبهم مثل «بابت»؛ سند بدون پیوست؛ ثبت با تفصیلی اشتباه یا ساختن تفصیلی تکراری برای یک مشتری؛ «تراز کردن» سند با یک سطر اختلاف به‌جای پیدا کردن خطا؛ یکی بودن تنظیم‌کننده و تأییدکننده؛ و تغییر کدینگ در میانه سال بدون برنامه.',
            en: 'Editing or deleting a final voucher instead of issuing a correcting one; vague descriptions such as “payment”; vouchers without attachments; posting to the wrong detail account or creating duplicate detail accounts for one customer; “balancing” a voucher with a plug line instead of finding the error; letting the same person prepare and approve; and changing the coding plan mid-year without a plan.',
          },
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'مدرک مثبته (سند پشتیبان)', en: 'Source document' },
              def: {
                fa: 'مدرکی مانند فاکتور، رسید بانکی یا قرارداد که وقوع رویداد، طرفین، تاریخ و مبلغ را ثابت می‌کند.',
                en: 'Evidence such as an invoice, bank receipt or contract that proves an event, its parties, date and amount.',
              },
            },
            {
              term: { fa: 'سند حسابداری', en: 'Accounting voucher' },
              def: {
                fa: 'برگه شماره‌دار و تأییدشده‌ای که ثبت یک رویداد را با کد حساب‌ها، مبالغ بدهکار و بستانکار و پیوست‌ها نشان می‌دهد.',
                en: 'A numbered, approved form showing the entry for an event, with account codes, debit and credit amounts and attachments.',
              },
            },
            {
              term: { fa: 'آرتیکل (ردیف سند)', en: 'Voucher line (article)' },
              def: { fa: 'هر سطر سند حسابداری که یک حساب و یک مبلغ را نشان می‌دهد.', en: 'One line of a voucher, showing one account and one amount.' },
            },
            {
              term: { fa: 'سند افتتاحیه', en: 'Opening voucher' },
              def: {
                fa: 'اولین سند سال مالی که مانده حساب‌های دائمی پایان سال قبل را دوباره باز می‌کند.',
                en: 'The first voucher of the fiscal year, reopening last year’s closing balances of the permanent accounts.',
              },
            },
            {
              term: { fa: 'سند اختتامیه', en: 'Final closing voucher' },
              def: {
                fa: 'آخرین سند سال در عمل ایران که مانده همه حساب‌های دائمی را صفر می‌کند.',
                en: 'In Iranian practice, the last voucher of the year, bringing every permanent account to zero.',
              },
            },
            {
              term: { fa: 'سند اصلاح اشتباه', en: 'Correcting voucher' },
              def: {
                fa: 'سند جدیدی که خطای یک سند قطعی‌شده را، بدون دست زدن به سند اصلی، اصلاح می‌کند.',
                en: 'A new voucher that fixes an error in a finalised voucher without touching the original.',
              },
            },
            {
              term: { fa: 'کدینگ حساب‌ها', en: 'Coding plan' },
              def: {
                fa: 'ساختار شماره‌گذاری همه حساب‌ها در سطوح گروه، کل، معین و تفصیلی.',
                en: 'The numbering structure of all accounts across the group, general, subsidiary and detail levels.',
              },
            },
            {
              term: { fa: 'حساب کل', en: 'General account' },
              def: {
                fa: 'سرفصل اصلی که در دفتر کل قانونی و صورت‌های مالی می‌آید، مانند موجودی نقد.',
                en: 'A main heading that appears in the statutory ledger and the financial statements, such as Cash.',
              },
            },
            {
              term: { fa: 'حساب معین', en: 'Subsidiary account' },
              def: {
                fa: 'سطح میانی که هر حساب کل را به اجزای معنادار تقسیم می‌کند، مانند بانک‌ها زیر موجودی نقد.',
                en: 'The middle level, splitting a general account into meaningful parts, such as Banks under Cash.',
              },
            },
            {
              term: { fa: 'حساب تفصیلی', en: 'Detail account' },
              def: {
                fa: 'پایین‌ترین سطح برای اشخاص و اقلام مشخص: هر مشتری، تأمین‌کننده، حساب بانکی، کارمند یا پروژه.',
                en: 'The lowest level, for specific people and items: each customer, supplier, bank account, employee or project.',
              },
            },
            {
              term: { fa: 'تفصیلی شناور', en: 'Floating detail account' },
              def: {
                fa: 'حساب تفصیلی که زیر چند حساب معین به کار می‌رود، مثلاً یک مشتری هم زیر دریافتنی‌ها و هم زیر پیش‌دریافت‌ها.',
                en: 'A detail account usable under several subsidiaries, such as one customer under both receivables and advances.',
              },
            },
            {
              term: { fa: 'دفاتر قانونی', en: 'Legal books' },
              def: {
                fa: 'دفتر روزنامه و دفتر کلی که طبق قانون تجارت و قانون مالیات‌های مستقیم نگهداری و پلمب می‌شوند.',
                en: 'The journal and ledger kept and registered under the Commercial Code and the Direct Taxes Act.',
              },
            },
            {
              term: { fa: 'پلمب دفاتر', en: 'Registration of books' },
              def: {
                fa: 'ثبت رسمی دفاتر قانونی نزد مرجع تعیین‌شده، پیش از شروع ثبت در آن‌ها.',
                en: 'The official registration of the legal books with the designated authority before any entries are made.',
              },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: { fa: 'کدام یک **مدرک مثبته** است، نه سند حسابداری؟', en: 'Which of these is a **source document**, not an accounting voucher?' },
      options: [
        { fa: 'سند افتتاحیه سال', en: 'The opening voucher of the year' },
        { fa: 'سند اصلاحی استهلاک پایان ماه', en: 'The month-end depreciation adjusting voucher' },
        { fa: 'فاکتور خرید از تأمین‌کننده', en: 'A purchase invoice from a supplier' },
        { fa: 'سند بستن حساب‌های موقت', en: 'The voucher closing the temporary accounts' },
      ],
      answer: 2,
      explain: {
        fa: 'فاکتور خرید از بیرون می‌آید و وقوع رویداد را ثابت می‌کند؛ پس مدرک مثبته است و به سند پیوست می‌شود. سه گزینه دیگر سندهایی‌اند که خود حسابدار تنظیم می‌کند؛ سند استهلاک هم سند حسابداری است که فقط برگه محاسبه پیوست دارد.',
        en: 'A purchase invoice comes from outside and proves the event, so it is a source document attached to a voucher. The other three are vouchers the accountant prepares; the depreciation voucher is still a voucher, supported only by a calculation sheet.',
      },
    },
    {
      q: {
        fa: 'در سندی، جمع ستون بدهکار 18,500 و جمع ستون بستانکار 17,900 است. درست‌ترین برداشت کدام است؟',
        en: 'A voucher’s debits total 18,500 and its credits 17,900. What is the right conclusion?',
      },
      options: [
        { fa: 'سند 600 نامتوازن است و تا پیدا شدن خطا نباید تأیید شود', en: 'It is 600 out of balance and must not be approved until the error is found' },
        { fa: 'سند درست است، چون اختلاف کمتر از 5٪ است', en: 'It is fine, because the difference is under 5%' },
        { fa: 'باید یک سطر «اختلاف» 600 بستانکار شود تا سند تراز شود', en: 'Add a 600 “difference” credit line to balance it' },
        { fa: 'جمع سند 36,400 است و مشکلی ندارد', en: 'The voucher totals 36,400 and has no problem' },
      ],
      answer: 0,
      explain: {
        fa: 'جمع بدهکار باید دقیقاً برابر جمع بستانکار باشد: 18,500 − 17,900 = 600 اختلاف. سطر «اختلاف» فقط خطا را پنهان می‌کند؛ باید مبلغ یا سطر جاافتاده را با مدارک پیدا کرد. هیچ درصدی از اختلاف قابل‌قبول نیست.',
        en: 'Debits must equal credits exactly: 18,500 − 17,900 = 600 difference. A plug line only hides the error; find the wrong amount or missing line from the documents. No percentage of difference is acceptable.',
      },
    },
    {
      q: {
        fa: 'در کدینگ نوا، «موجودی نقد»، «بانک‌ها» و «حساب جاری بانک الف» به ترتیب در کدام سطح‌اند؟',
        en: 'In Nova’s coding, “Cash”, “Banks” and “Bank A current account” are at which levels, in that order?',
      },
      options: [
        { fa: 'معین، کل، تفصیلی', en: 'Subsidiary, general, detail' },
        { fa: 'کل، معین، تفصیلی', en: 'General, subsidiary, detail' },
        { fa: 'گروه، کل، معین', en: 'Group, general, subsidiary' },
        { fa: 'کل، تفصیلی، معین', en: 'General, detail, subsidiary' },
      ],
      answer: 1,
      explain: {
        fa: 'موجودی نقد (1010) سرفصل صورت‌های مالی و حساب کل است؛ بانک‌ها (101002) یکی از اجزای آن و معین است؛ هر حساب بانکی مشخص (1002) تفصیلی است. گروه، سطح بالاتر از کل است (مثلاً «دارایی‌ها»).',
        en: 'Cash (1010) is a financial-statement heading, a general account; Banks (101002) is one of its parts, a subsidiary; each specific bank account (1002) is a detail account. The group is above the general level (e.g. “Assets”).',
      },
    },
    {
      q: {
        fa: 'اگر کد معین از کد کل به‌علاوه دو رقم 01 تا 99 ساخته شود، زیر یک حساب کل حداکثر چند حساب معین می‌توان تعریف کرد؟',
        en: 'If subsidiary codes are the general code plus two digits from 01 to 99, how many subsidiaries can one general account have at most?',
      },
      options: [
        { fa: '9', en: '9' },
        { fa: '10', en: '10' },
        { fa: '100', en: '100' },
        { fa: '99', en: '99' },
      ],
      answer: 3,
      explain: {
        fa: 'دو رقم از 01 تا 99 یعنی 99 کد ممکن. 100 وقتی درست بود که 00 هم مجاز باشد، و 9 یا 10 مربوط به کد یک‌رقمی است. همین ظرفیت است که اجازه می‌دهد بعدها بدون تغییر کدهای قبلی معین تازه اضافه کنید.',
        en: 'Two digits from 01 to 99 give 99 possible codes. 100 would need 00 to be allowed too, and 9 or 10 belong to a one-digit code. This capacity is what lets you add new subsidiaries later without renumbering.',
      },
    },
    {
      q: {
        fa: 'مانده تفصیلی سه مشتری 7,500، 4,200 و 3,300 است، اما معین دریافتنی‌های تجاری 16,000 نشان می‌دهد. چه نتیجه‌ای می‌گیرید؟',
        en: 'Three customers’ detail balances are 7,500, 4,200 and 3,300, but the Trade receivables subsidiary shows 16,000. What do you conclude?',
      },
      options: [
        { fa: 'اختلافی نیست', en: 'There is no difference' },
        {
          fa: 'اختلاف 1,000 است؛ احتمالاً سطری بدون تفصیلی یا با تفصیلی نادرست ثبت شده است',
          en: 'There is a 1,000 gap; a line was probably posted without a detail code or to the wrong one',
        },
        { fa: 'تراز آزمایشی در سطح کل حتماً نامتوازن است', en: 'The general-level trial balance must be out of balance' },
        { fa: 'باید 1,000 را به هزینه ببرید تا ارقام برابر شوند', en: 'Expense the 1,000 to make the figures agree' },
      ],
      answer: 1,
      explain: {
        fa: 'جمع تفصیلی‌ها 7,500 + 4,200 + 3,300 = 15,000 است، 1,000 کمتر از معین. جمع تفصیلی‌ها باید همیشه برابر معین باشد، پس انتقالی ناقص یا نادرست بوده است. تراز آزمایشی در سطح کل همچنان می‌تواند متوازن باشد، و هزینه کردن اختلاف فقط خطا را پنهان می‌کند.',
        en: 'The details total 7,500 + 4,200 + 3,300 = 15,000, which is 1,000 below the subsidiary. Details must always add up to their subsidiary, so a posting was incomplete or wrong. The general-level trial balance can still balance, and expensing the gap only hides the error.',
      },
    },
    {
      q: {
        fa: 'حسابدار می‌فهمد سند قطعی‌شده شماره 85، هزینه اجاره را به‌اشتباه در هزینه حقوق ثبت کرده است. روش درست کدام است؟',
        en: 'An accountant finds that finalised voucher 85 posted rent to Salaries expense by mistake. What is the right fix?',
      },
      options: [
        { fa: 'سند 85 را پاک و دوباره ثبت کند', en: 'Delete voucher 85 and enter it again' },
        { fa: 'مبلغ را در دفتر روزنامه قانونی خط بزند و درست بنویسد', en: 'Cross out the amount in the statutory journal and rewrite it' },
        { fa: 'تا پایان سال صبر کند و در سند اختتامیه اصلاح کند', en: 'Wait until year-end and fix it in the final closing voucher' },
        { fa: 'سند اصلاح اشتباه صادر کند: بدهکار هزینه اجاره، بستانکار هزینه حقوق', en: 'Issue a correcting voucher: Dr Rent expense, Cr Salaries expense' },
      ],
      answer: 3,
      explain: {
        fa: 'سند قطعی دست نمی‌خورد؛ سند اصلاح اشتباه، مبلغ را از حساب نادرست به حساب درست می‌برد و ردّ حسابرسی را کامل نگه می‌دارد. خط زدن در دفاتر قانونی ممنوع است و صبر تا پایان سال، گزارش‌های همه ماه‌های میانی را غلط می‌کند.',
        en: 'A final voucher is never touched; a correcting voucher moves the amount from the wrong account to the right one and keeps the audit trail complete. Crossing out in legal books is not allowed, and waiting until year-end leaves every report in between wrong.',
      },
    },
    {
      q: {
        fa: 'در پایان سال، جمع مانده حساب‌های دارایی (بدون حساب کاهنده) 90,000، بدهی‌ها 25,000 و حقوق مالکانه 65,000 است. جمع ستون بدهکار سند افتتاحیه سال بعد چقدر است؟',
        en: 'At year-end, asset accounts (no contra accounts) total 90,000, liabilities 25,000 and equity 65,000. What is the debit total of next year’s opening voucher?',
      },
      options: [
        { fa: '90,000', en: '90,000' },
        { fa: '25,000', en: '25,000' },
        { fa: '65,000', en: '65,000' },
        { fa: '180,000', en: '180,000' },
      ],
      answer: 0,
      explain: {
        fa: 'سند افتتاحیه دارایی‌ها را بدهکار و بدهی‌ها و حقوق مالکانه را بستانکار می‌کند: بدهکار 90,000 و بستانکار 25,000 + 65,000 = 90,000. رقم 180,000 جمع هر دو ستون است، نه یک ستون.',
        en: 'The opening voucher debits the assets and credits liabilities and equity: debits 90,000, credits 25,000 + 65,000 = 90,000. 180,000 adds both columns together, not one.',
      },
    },
    {
      q: { fa: 'کدام جمله درباره دفاتر قانونی روزنامه و کل درست است؟', en: 'Which statement about the statutory journal and ledger is true?' },
      options: [
        { fa: 'هر شرکتی می‌تواند به‌جای آن‌ها فقط فایل صفحه‌گسترده نگه دارد', en: 'Any company may keep a spreadsheet instead' },
        { fa: 'ثبت در آن‌ها باید در سطح تفصیلی، یعنی برای هر مشتری، باشد', en: 'Entries must be at detail level, one per customer' },
        {
          fa: 'پیش از استفاده پلمب می‌شوند و ثبت‌ها به ترتیب تاریخ و بدون سطر سفید، تراشیدگی و پاک‌شدگی است',
          en: 'They are registered before use, and entries are in date order with no blank lines, scraping or erasures',
        },
        { fa: 'اشتباه را می‌توان با لاک غلط‌گیر اصلاح کرد', en: 'Errors may be fixed with correction fluid' },
      ],
      answer: 2,
      explain: {
        fa: 'دفاتر قانونی پیش از استفاده پلمب می‌شوند و باید مرتب و بدون پاک‌شدگی نوشته شوند؛ اشتباه با ثبت اصلاحی رفع می‌شود. معمولاً در سطح حساب کل نوشته می‌شوند و جزئیات تفصیلی در سندها و نرم‌افزار می‌ماند. صفحه‌گسترده جای دفاتر قانونی را نمی‌گیرد.',
        en: 'Legal books are registered before use and written in order without erasures; errors are fixed by correcting entries. They are usually kept at general-account level, with detail in the vouchers and software. A spreadsheet does not replace them.',
      },
    },
    {
      q: { fa: 'مزیت اصلی «تفصیلی شناور» چیست؟', en: 'What is the main benefit of a “floating” detail account?' },
      options: [
        {
          fa: 'یک کد تفصیلی، مثلاً یک مشتری، زیر چند معین به کار می‌رود و کل رابطه مالی با او در یک گزارش دیده می‌شود',
          en: 'One detail code, such as a customer, works under several subsidiaries, so the whole relationship shows in one report',
        },
        { fa: 'دیگر به حساب معین نیازی نیست', en: 'Subsidiary accounts are no longer needed' },
        { fa: 'سند بدون تأیید قطعی می‌شود', en: 'Vouchers are finalised without approval' },
        { fa: 'تراز آزمایشی همیشه متوازن می‌ماند', en: 'The trial balance always balances' },
      ],
      answer: 0,
      explain: {
        fa: 'با تفصیلی شناور، کد 2001 (کافه اطلس) زیر دریافتنی‌ها، پیش‌دریافت‌ها و اسناد دریافتنی به کار می‌رود و یک گزارش همه را کنار هم نشان می‌دهد. معین همچنان لازم است و تأیید سند هم سر جایش است؛ توازن تراز هم به ثبت درست بستگی دارد، نه به نوع تفصیلی.',
        en: 'With floating details, code 2001 (Atlas Café) is used under receivables, advances and notes receivable, and one report shows them together. Subsidiaries are still needed, approval still applies, and the trial balance balances because entries are right, not because of the detail type.',
      },
    },
    {
      q: { fa: 'چرا تنظیم‌کننده و تأییدکننده سند نباید یک نفر باشند؟', en: 'Why should the preparer and the approver of a voucher be different people?' },
      options: [
        { fa: 'چون نرم‌افزار برای چاپ سند دو امضا لازم دارد', en: 'Because the software needs two signatures to print' },
        { fa: 'چون سند اصلاحی فقط با دو امضا صادر می‌شود', en: 'Because correcting vouchers need two signatures' },
        {
          fa: 'تفکیک وظایف: نفر دوم خطاها و ثبت‌های ساختگی را پیش از قطعی شدن سند می‌گیرد',
          en: 'Segregation of duties: a second person catches errors and fictitious entries before the voucher is final',
        },
        { fa: 'چون سند با یک امضا نامتوازن می‌شود', en: 'Because a voucher with one signature becomes unbalanced' },
      ],
      answer: 2,
      explain: {
        fa: 'هدف، کنترل داخلی است: کسی که سند را می‌نویسد نباید خودش آن را تأیید کند، تا خطا یا سوءاستفاده پیش از ورود به دفاتر دیده شود. تعداد امضا ربطی به توازن سند ندارد و قاعده‌ای فنی برای چاپ هم نیست.',
        en: 'The aim is internal control: whoever writes a voucher should not approve it, so that errors or abuse are caught before they reach the books. The number of signatures has nothing to do with balance, and it is not a printing rule.',
      },
    },
  ],
}
