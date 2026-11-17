import type { Lesson } from '../types'

/* Account titles used by Masar Petroleum (codes from its chart of accounts). */
const ac = {
  bank: { fa: '1110 موجودی نقد (بانک)', en: '1110 Cash at bank' },
  ar: { fa: '1210 حساب‌های دریافتنی', en: '1210 Accounts receivable' },
  inventory: { fa: '1310 موجودی مواد و قطعات', en: '1310 Materials and spares inventory' },
  auc: { fa: '1510 دارایی‌های در جریان تکمیل', en: '1510 Assets under construction' },
  ogp: { fa: '1520 دارایی‌های نفت و گاز', en: '1520 Oil and gas properties' },
  accDep: { fa: '1590 استهلاک انباشته', en: '1590 Accumulated depreciation' },
  ap: { fa: '2110 حساب‌های پرداختنی', en: '2110 Accounts payable' },
  grir: { fa: '2120 حساب واسط رسید کالا و فاکتور (GR/IR)', en: '2120 GR/IR clearing account' },
  accrued: { fa: '2130 هزینه‌های تعهدی پرداختنی', en: '2130 Accrued liabilities' },
  revenue: { fa: '4110 درآمد فروش نفت', en: '4110 Oil sales revenue' },
  opex: { fa: '5110 هزینه عملیات تولید', en: '5110 Production operating expense' },
  repairs: { fa: '5120 هزینه تعمیر و نگهداری', en: '5120 Repairs and maintenance expense' },
  depExp: { fa: '5210 هزینه استهلاک', en: '5210 Depreciation expense' },
  shortage: { fa: '5310 هزینه کسری انبار', en: '5310 Inventory shortage expense' },
}

const day = (n: number) => ({ fa: `روز ${n}`, en: `Day ${n}` })
const t = (fa: string, en: string) => ({ fa, en })

export const lesson: Lesson = {
  slug: 'accounting-in-erp',
  number: 19,
  currency: 'usd',
  level: 'advanced',
  minutes: 30,
  icon: 'Library',
  tone: 'primary',
  title: { fa: 'حسابداری در سیستم ERP', en: 'Accounting in an ERP System' },
  summary: {
    fa: 'ببینید ماژول مالی یک ERP چگونه کار می‌کند: دفتر کل و دفترهای معین، داده‌های پایه، اسناد و ثبت‌های خودکاری که از تدارکات، انبار و نگهداری می‌رسند، رسید کالا و برگه ثبت خدمات (GRN و SES)، حساب واسط GR/IR، بستن دوره، تطبیق‌ها و کنترل‌ها؛ همه با مثال شرکت مسار پترولیوم.',
    en: 'See how the Finance module of an ERP works: the general ledger and sub-ledgers, master data, the documents and automatic postings that arrive from procurement, inventory and maintenance, GRNs and SESs, the GR/IR account, period-end close, reconciliations and controls, all through the Masar Petroleum example.',
  },
  objectives: [
    {
      fa: 'توضیح دهید دفتر کل و دفترهای معین در ERP چگونه از راه حساب‌های کنترل به هم وصل می‌شوند',
      en: 'Explain how the general ledger and sub-ledgers connect through control accounts in an ERP',
    },
    {
      fa: 'داده پایه را از داده تراکنشی تشخیص دهید و اشیای هزینه یک شرکت بالادستی نفت و گاز را نام ببرید',
      en: 'Tell master data from transaction data and name the cost objects of an upstream oil and gas company',
    },
    {
      fa: 'ثبت‌های خودکاری را که ERP برای رسید، فاکتور، حواله، تسویه و استهلاک می‌سازد بخوانید',
      en: 'Read the automatic entries an ERP posts for receipts, invoices, goods issues, settlements and depreciation',
    },
    {
      fa: 'رسید کالا (GRN)، برگه ثبت خدمات (SES)، حساب واسط GR/IR و تطبیق سه‌طرفه را تحلیل کنید',
      en: 'Analyse the GRN, the SES, the GR/IR clearing account and the three-way match',
    },
    {
      fa: 'بستن دوره را با چک‌لیست، تطبیق‌ها و کنترل‌های داخلی انجام دهید',
      en: 'Run a period-end close with a checklist, reconciliations and internal controls',
    },
  ],
  sections: [
    {
      id: 'why-erp',
      title: { fa: 'چرا حسابداری در ERP؟', en: 'Why Accounting Lives in an ERP' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'شرکت مسار پترولیوم اپراتور «میدان آریا» است: دوازده چاه تولیدی (AR-01 تا AR-12) و چاه‌های توسعه‌ای تازه‌ای که از AR-13 به بعد حفاری می‌شوند، یک ایستگاه تقویت فشار، یک انبار مرکزی و یک انبار میدان. تا پارسال هر واحد نرم‌افزار خودش را داشت: انبار با فایل اکسل کار می‌کرد، تدارکات سفارش‌ها را در سامانه‌ای جدا ثبت می‌کرد و حسابداری همه فاکتورها را دوباره با دست وارد می‌کرد. بستن هر ماه پانزده روز طول می‌کشید و وقتی یکی از شرکای مشارکت پرسید «حفاری چاه AR-13 تا امروز دقیقاً چقدر خرج برداشته است؟»، هیچ‌کس نتوانست زودتر از یک هفته جواب بدهد.',
            en: 'Masar Petroleum operates the Arya field: twelve producing wells (AR-01 to AR-12) plus new development wells being drilled from AR-13 onwards, a compressor station, a Central Warehouse and a Field Warehouse. Until last year each department had its own software: the warehouse ran on spreadsheets, procurement kept orders in a separate system, and accounting re-keyed every invoice by hand. Closing a month took fifteen days, and when a joint venture partner asked "exactly how much has drilling well AR-13 cost so far?", nobody could answer in less than a week.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**سیستم برنامه‌ریزی منابع سازمان (ERP)** نرم‌افزاری یکپارچه است که همه واحدهای سازمان در آن روی **یک پایگاه داده مشترک** کار می‌کنند. هر واحد یک **ماژول** دارد (مالی، انبار، تدارکات، نگهداری، پروژه، منابع انسانی) و هر رویداد فقط یک بار، همان‌جا که رخ می‌دهد، ثبت می‌شود. وقتی انباردار رسید کالا (GRN) را ثبت می‌کند، ماژول مالی در همان لحظه سند حسابداری آن را دریافت می‌کند و کسی لازم نیست آن را دوباره وارد کند.',
            en: 'An **Enterprise Resource Planning (ERP) system** is integrated software in which every department works on **one shared database**. Each department has a **module** (Finance, Inventory, Procurement, Maintenance, Projects, HR), and each event is recorded once, where it happens. When the storekeeper posts a goods received note (GRN), the Finance module receives its accounting document at that moment, and nobody has to key it in again.',
          },
        },
        {
          type: 'diagram',
          id: 'erp-modules',
          caption: {
            fa: 'نقشه ماژول‌های ERP: هر ماژول رویدادهای خودش را ثبت می‌کند و اثر مالی آن خودکار به ماژول مالی می‌رسد.',
            en: 'The ERP module map: each module records its own events, and their financial effect flows automatically into Finance.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'سامانه‌های جدا از هم', en: 'Separate systems' },
            items: [
              { fa: 'هر داده چند بار وارد می‌شود', en: 'The same data is keyed in several times' },
              { fa: 'ارقام واحدها با هم نمی‌خواند', en: 'Departments report different numbers' },
              { fa: 'بستن ماه کند و دستی است', en: 'Month-end close is slow and manual' },
              { fa: 'بهای هر چاه به‌سختی پیدا می‌شود', en: 'The cost of each well is hard to find' },
              { fa: 'فایل اکسل بی‌ردپا ویرایش می‌شود', en: 'Spreadsheets change without a trace' },
            ],
          },
          right: {
            title: { fa: 'ERP یکپارچه', en: 'Integrated ERP' },
            items: [
              { fa: 'هر رویداد یک بار و در محل وقوع ثبت می‌شود', en: 'Each event is recorded once, at its source' },
              { fa: 'یک نسخه واحد از ارقام', en: 'One single version of the numbers' },
              { fa: 'بیشتر ثبت‌ها خودکار است و بستن سریع‌تر', en: 'Most postings are automatic and close is faster' },
              { fa: 'هزینه از ابتدا روی چاه، AFE یا مرکز هزینه می‌نشیند', en: 'Costs land on the well, AFE or cost centre from the start' },
              { fa: 'هر سند به مبدأ و کاربرش وصل است', en: 'Every document is linked to its source and its user' },
            ],
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**دفتر کل (General Ledger)**: همه حساب‌ها و مانده‌ها؛ صورت‌های مالی از آن ساخته می‌شوند.',
              en: '**General ledger**: every account and its balance; the financial statements are built from it.',
            },
            {
              fa: '**حساب‌های پرداختنی (AP)**: تأمین‌کنندگان، فاکتورهای خرید و پرداخت‌ها.',
              en: '**Accounts payable (AP)**: vendors, purchase invoices and payments.',
            },
            {
              fa: '**حساب‌های دریافتنی (AR)**: مشتریان (مثلاً خریدار نفت خام)، فاکتورهای فروش و وصول‌ها.',
              en: '**Accounts receivable (AR)**: customers (for example the crude oil buyer), sales invoices and collections.',
            },
            {
              fa: '**دارایی‌های ثابت**: فهرست دارایی‌ها، سرمایه‌ای کردن، استهلاک و استهلاک ذخایر.',
              en: '**Fixed assets**: the asset register, capitalisation, depreciation and depletion.',
            },
            {
              fa: '**ارزش‌گذاری موجودی**: ارزش پولی مواد و قطعات انبارها (مقدارها از ماژول انبار می‌آید).',
              en: '**Inventory valuation**: the money value of materials and spares in the warehouses (quantities come from the Inventory module).',
            },
            {
              fa: '**حسابداری بهای تمام‌شده (کنترلینگ)**: مراکز هزینه، پروژه‌ها، AFEها و در نفت و گاز، حسابداری مشارکت و بازیافت هزینه.',
              en: '**Cost accounting (controlling)**: cost centres, projects, AFEs and, in oil and gas, joint venture accounting and cost recovery.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در ایران بسیاری از شرکت‌ها هنوز با نرم‌افزارهای حسابداری مستقل و کدینگ سه‌سطحی (کل، معین، تفصیلی) کار می‌کنند و شرکت‌های بزرگ‌تر، به‌ویژه در نفت و گاز، به سمت ERP (داخلی یا خارجی) رفته‌اند. منطق حسابداری در هر دو یکی است: سند، دفتر روزنامه، دفتر کل و تراز آزمایشی. تفاوت در این است که در ERP بیشتر سندها را ماژول‌های دیگر می‌سازند، نه حسابدار؛ و کار حسابدار از «ورود سند» به «تنظیم، کنترل و تحلیل» تغییر می‌کند.',
            en: 'In Iran many companies still use stand-alone accounting software with three-level coding (general, subsidiary, detail), while larger companies, especially in oil and gas, have moved to an ERP (local or international). The accounting logic is the same in both: voucher, journal, ledger and trial balance. The difference is that in an ERP most documents are created by other modules, not by the accountant, and the accountant’s job shifts from "entering vouchers" to "configuring, controlling and analysing".',
          },
        },
      ],
    },
    {
      id: 'gl-subledgers',
      title: { fa: 'دفتر کل و دفترهای معین', en: 'General Ledger and Sub-ledgers' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**دفتر کل** در ERP همان دفتر کلی است که در درس انتقال به دفتر کل دیدید: برای هر حساب، جمع گردش بدهکار و بستانکار و مانده آن. صورت‌های مالی فقط از دفتر کل ساخته می‌شوند. اما دفتر کل جزئیات را نگه نمی‌دارد؛ نمی‌گوید به کدام تأمین‌کننده چقدر بدهکاریم یا کدام شیر در کدام انبار است. این جزئیات در **دفترهای معین (Sub-ledgers)** نگهداری می‌شوند.',
            en: 'The **general ledger** in an ERP is the same ledger you met in the lesson on posting to the ledger: for each account, its total debits, total credits and balance. The financial statements are built only from the general ledger. But the ledger does not keep the detail; it does not say how much we owe to which vendor, or which valve is in which warehouse. That detail lives in **sub-ledgers**.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'هر دفتر معین به یک **حساب کنترل** در دفتر کل وصل است (بعضی ERPها به آن «حساب تطبیق» می‌گویند). وقتی فاکتور یک تأمین‌کننده در دفتر معین پرداختنی‌ها ثبت می‌شود، ERP همان مبلغ را هم‌زمان در حساب کنترل 2110 ثبت می‌کند. به همین دلیل جمع مانده همه تأمین‌کنندگان باید همیشه با مانده حساب 2110 برابر باشد. ثبت سند دستی مستقیم در حساب کنترل معمولاً مسدود است، چون این برابری را می‌شکند.',
            en: 'Each sub-ledger is tied to a **control account** in the general ledger (some ERPs call it a "reconciliation account"). When a vendor invoice is posted in the payables sub-ledger, the ERP posts the same amount to control account 2110 at the same moment. That is why the total of all vendor balances must always equal the balance of account 2110. Manual journals straight to a control account are normally blocked, because they would break this equality.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'دفترهای معین اصلی در مسار پترولیوم', en: 'The main sub-ledgers at Masar Petroleum' },
          head: [
            { fa: 'دفتر معین', en: 'Sub-ledger' },
            { fa: 'چه جزئیاتی نگه می‌دارد', en: 'Detail it keeps' },
            { fa: 'حساب کنترل در دفتر کل', en: 'Control account in the ledger' },
            { fa: 'نمونه در مسار پترولیوم', en: 'Masar Petroleum example' },
          ],
          rows: [
            [
              t('حساب‌های پرداختنی', 'Accounts payable'),
              t('فاکتورها، پرداخت‌ها و مانده هر تأمین‌کننده', 'Invoices, payments and balance of each vendor'),
              t('2110 حساب‌های پرداختنی', '2110 Accounts payable'),
              t('فروشنده شیرآلات، پیمانکار حفاری', 'The valve vendor, the drilling contractor'),
            ],
            [
              t('حساب‌های دریافتنی', 'Accounts receivable'),
              t('فاکتورها، وصول‌ها و مانده هر مشتری', 'Invoices, receipts and balance of each customer'),
              t('1210 حساب‌های دریافتنی', '1210 Accounts receivable'),
              t('خریدار نفت خام میدان آریا', 'The buyer of Arya crude oil'),
            ],
            [
              t('دارایی‌های ثابت', 'Fixed assets'),
              t('بهای تمام‌شده، استهلاک و محل هر دارایی', 'Cost, depreciation and location of each asset'),
              t('1520 دارایی‌های نفت و گاز؛ 1590 استهلاک انباشته', '1520 Oil and gas properties; 1590 Accumulated depreciation'),
              t('چاه‌ها، کمپرسورهای ایستگاه تقویت فشار', 'The wells, the compressors at the station'),
            ],
            [
              t('موجودی', 'Inventory'),
              t('مقدار و ارزش هر کالا در هر انبار', 'Quantity and value of each material in each warehouse'),
              t('1310 موجودی مواد و قطعات', '1310 Materials and spares inventory'),
              t('لوله مغزی، شیرآلات و مواد شیمیایی حفاری', 'Tubing, valves and drilling chemicals'),
            ],
          ],
        },
        {
          type: 'tAccounts',
          title: {
            fa: 'دفتر معین تأمین‌کنندگان و حساب کنترل 2110 در پایان ماه',
            en: 'The vendor sub-ledger and control account 2110 at month-end',
          },
          accounts: [
            { name: t('تأمین‌کننده: شیرآلات صنعتی خلیج', 'Vendor: Khalij Industrial Valves'), debits: [], credits: [100000] },
            { name: t('تأمین‌کننده: خدمات حفاری آریا', 'Vendor: Arya Drilling Services'), debits: [60000], credits: [400000] },
            { name: t('تأمین‌کننده: پذیرایی کمپ میدان', 'Vendor: Field Camp Catering'), debits: [], credits: [60000] },
            { name: t('2110 حساب‌های پرداختنی (کنترل)', '2110 Accounts payable (control)'), debits: [60000], credits: [100000, 400000, 60000] },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'جمع مانده سه تأمین‌کننده (100,000 و 340,000 و 60,000، یعنی 500,000) دقیقاً برابر مانده بستانکار حساب کنترل است. در پایان ماه حسابدار همین برابری را با گزارش «تطبیق دفتر معین با دفتر کل» بررسی می‌کند.',
            en: 'The three vendor balances (100,000, 340,000 and 60,000, a total of 500,000) exactly equal the credit balance of the control account. At month-end the accountant checks this equality with a "sub-ledger to ledger reconciliation" report.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: کل، معین و تفصیلی در ERP', en: 'In practice: three-level coding in an ERP' },
          text: {
            fa: 'اگر با کدینگ سه‌سطحی آشنا هستید، این نگاشت کمک می‌کند: حساب‌های دفتر کل ERP نقش «کل» و «معین» را دارند و تأمین‌کننده، مشتری، کالا، مرکز هزینه و پروژه نقش «تفصیلی» را بازی می‌کنند. تفاوت اینجاست که در ERP هر تفصیلی یک پرونده کامل با اطلاعات خودش دارد (نشانی، حساب بانکی، شرایط پرداخت)، نه فقط یک کد.',
            en: 'If you know three-level coding, this mapping helps: ERP ledger accounts play the role of the general and subsidiary levels, while vendors, customers, materials, cost centres and projects play the role of the detail level. The difference is that in an ERP each detail item is a full record with its own data (address, bank account, payment terms), not just a code.',
          },
        },
      ],
    },
    {
      id: 'master-data',
      title: { fa: 'داده‌های پایه: اسکلت سیستم', en: 'Master Data: the Skeleton of the System' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'ERP با دو نوع داده کار می‌کند. **داده پایه (Master Data)** اطلاعاتی است که کم تغییر می‌کند و بارها در سندها به کار می‌رود: کدینگ حساب‌ها، تأمین‌کنندگان، مشتریان، کالاها، مراکز هزینه، پروژه‌ها و دارایی‌ها. **داده تراکنشی** رویدادهای روزانه است: درخواست خرید، سفارش خرید، رسید کالا (GRN)، برگه ثبت خدمات (SES)، فاکتور و پرداخت. هر سند تراکنشی به داده‌های پایه اشاره می‌کند؛ پس اگر یک داده پایه غلط باشد، صدها سند غلط ساخته می‌شود.',
            en: 'An ERP works with two kinds of data. **Master data** changes rarely and is used again and again in documents: the chart of accounts, vendors, customers, materials, cost centres, projects and assets. **Transaction data** is the day-to-day events: purchase requisitions, purchase orders, goods received notes (GRN), service entry sheets (SES), invoices and payments. Every transaction document points to master data, so one wrong master record produces hundreds of wrong documents.',
          },
        },
        { type: 'h', text: { fa: 'کدینگ حساب‌های مسار پترولیوم (بخشی از آن)', en: 'Masar Petroleum’s chart of accounts (extract)' } },
        {
          type: 'table',
          caption: {
            fa: 'حساب‌هایی که در این درس به کار می‌روند و منبع ثبت آن‌ها',
            en: 'The accounts used in this lesson and where their postings come from',
          },
          head: [
            { fa: 'کد', en: 'Code' },
            { fa: 'حساب', en: 'Account' },
            { fa: 'نوع', en: 'Type' },
            { fa: 'معمولاً از کجا ثبت می‌شود', en: 'Usually posted from' },
          ],
          rows: [
            ['1110', t('موجودی نقد (بانک)', 'Cash at bank'), t('دارایی', 'Asset'), t('پرداخت‌ها و دریافت‌ها (خزانه)', 'Payments and receipts (treasury)')],
            ['1210', t('حساب‌های دریافتنی', 'Accounts receivable'), t('دارایی (کنترل)', 'Asset (control)'), t('فاکتور فروش', 'Sales invoices')],
            ['1310', t('موجودی مواد و قطعات', 'Materials and spares inventory'), t('دارایی (کنترل)', 'Asset (control)'), t('رسید کالا (GRN) و حواله انبار', 'GRNs and goods issues')],
            ['1510', t('دارایی‌های در جریان تکمیل', 'Assets under construction'), t('دارایی', 'Asset'), t('هزینه‌های پروژه، WBS و AFE', 'Project, WBS and AFE costs')],
            ['1520', t('دارایی‌های نفت و گاز', 'Oil and gas properties'), t('دارایی (کنترل)', 'Asset (control)'), t('تسویه پروژه به دارایی', 'Settlement of projects to assets')],
            ['1590', t('استهلاک انباشته', 'Accumulated depreciation'), t('کاهنده دارایی', 'Contra-asset'), t('اجرای استهلاک', 'Depreciation run')],
            ['2110', t('حساب‌های پرداختنی', 'Accounts payable'), t('بدهی (کنترل)', 'Liability (control)'), t('فاکتور خرید', 'Purchase invoices')],
            ['2120', t('حساب واسط رسید کالا و فاکتور', 'GR/IR clearing'), t('بدهی (واسط)', 'Liability (clearing)'), t('فقط خودکار: رسید و فاکتور', 'Automatic only: receipts and invoices')],
            ['2130', t('هزینه‌های تعهدی پرداختنی', 'Accrued liabilities'), t('بدهی', 'Liability'), t('سند دستی پایان دوره', 'Manual period-end journals')],
            ['4110', t('درآمد فروش نفت', 'Oil sales revenue'), t('درآمد', 'Revenue'), t('فاکتور فروش', 'Sales invoices')],
            ['5110', t('هزینه عملیات تولید', 'Production operating expense'), t('هزینه', 'Expense'), t('حواله و خدمات به مرکز هزینه', 'Issues and services to cost centres')],
            ['5120', t('هزینه تعمیر و نگهداری', 'Repairs and maintenance expense'), t('هزینه', 'Expense'), t('دستور کار نگهداری', 'Maintenance work orders')],
            ['5210', t('هزینه استهلاک', 'Depreciation expense'), t('هزینه', 'Expense'), t('اجرای استهلاک', 'Depreciation run')],
            ['5310', t('هزینه کسری انبار', 'Inventory shortage expense'), t('هزینه', 'Expense'), t('اختلاف شمارش انبار', 'Stock count differences')],
          ].map((r) => r.map((c) => (typeof c === 'string' ? t(c, c) : c))),
        },
        { type: 'h', text: { fa: 'اشیای هزینه', en: 'Cost objects' } },
        {
          type: 'p',
          text: {
            fa: '**شیء هزینه (Cost Object)** هر چیزی است که می‌خواهیم بدانیم «چقدر برایش خرج شده است». حساب دفتر کل می‌گوید هزینه **از چه نوعی** است (مثلاً مواد مصرفی)؛ شیء هزینه می‌گوید **برای چه** یا **کجا** خرج شده است (مثلاً چاه AR-13 یا ایستگاه تقویت فشار). در ERP هر سطر هزینه هم حساب دارد و هم شیء هزینه.',
            en: 'A **cost object** is anything whose cost we want to know. The ledger account says **what kind** of cost it is (for example materials consumed); the cost object says **what for** or **where** it was spent (for example well AR-13 or the compressor station). In an ERP every cost line carries both an account and a cost object.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'اشیای هزینه مسار پترولیوم', en: 'Masar Petroleum’s cost objects' },
          head: [
            { fa: 'نوع', en: 'Type' },
            { fa: 'کد در مسار پترولیوم', en: 'Masar Petroleum code' },
            { fa: 'به چه سؤالی جواب می‌دهد', en: 'Question it answers' },
            { fa: 'نمونه', en: 'Example' },
          ],
          rows: [
            [
              t('مرکز هزینه', 'Cost centre'),
              t('CC-ARY-PRD عملیات میدان آریا؛ CC-ARY-CMP ایستگاه تقویت فشار؛ CC-ARY-WHS انبار مرکزی', 'CC-ARY-PRD Arya field operations; CC-ARY-CMP Compressor station; CC-ARY-WHS Central Warehouse'),
              t('اداره این واحد هر ماه چقدر هزینه دارد؟', 'What does this unit cost to run each month?'),
              t('مواد شیمیایی، حقوق اپراتورها، سوخت', 'Chemicals, operators’ salaries, fuel'),
            ],
            [
              t('مرکز سود', 'Profit centre'),
              t('PC-ARYA میدان آریا', 'PC-ARYA Arya field'),
              t('این میدان چقدر سودآور است؟', 'How profitable is this field?'),
              t('درآمد فروش نفت و هزینه‌های میدان', 'Oil sales and field costs'),
            ],
            [
              t('پروژه و عناصر WBS', 'Project and WBS elements'),
              t('P-ARYA-DEV توسعه میدان؛ عنصر WBS برای هر چاه', 'P-ARYA-DEV field development; one WBS element per well'),
              t('این پروژه سرمایه‌ای تا امروز، به تفکیک مرحله، چقدر هزینه داشته است؟', 'What has this capital project cost so far, by stage?'),
              t('حفاری، تکمیل و خط جریان چاه AR-13', 'Drilling, completion and flowline of well AR-13'),
            ],
            [
              t('مجوز هزینه (AFE)', 'Authorization for expenditure (AFE)'),
              t('AFE-2026-013', 'AFE-2026-013'),
              t('چقدر مجاز به خرج کردن بودیم و چقدر خرج کرده‌ایم؟', 'How much were we authorised to spend, and how much have we spent?'),
              t('حفاری و تکمیل AR-13 با بودجه 9,000,000', 'Drill and complete AR-13, budget 9,000,000'),
            ],
            [
              t('دارایی', 'Asset'),
              t('AS-0120 کمپرسور شماره 1', 'AS-0120 Compressor unit 1'),
              t('بهای این دارایی و ارزش دفتری آن چقدر است؟', 'What did this asset cost and what is its book value?'),
              t('کمپرسور ایستگاه تقویت فشار', 'A compressor at the compressor station'),
            ],
          ],
        },
        {
          type: 'p',
          text: {
            fa: '**مجوز هزینه (AFE: Authorization for Expenditure)** سندی است که مدیریت و، در مشارکت‌ها، شرکا با آن بودجه یک کار مشخص را تصویب می‌کنند؛ مثلاً حفاری و تکمیل چاه AR-13. در ERP، AFE معمولاً به یک پروژه یا عنصر WBS وصل می‌شود و سیستم هزینه واقعی و **تعهدشده** (سفارش‌های خرید باز) را با بودجه آن مقایسه می‌کند و پیش از عبور از سقف هشدار می‌دهد.',
            en: 'An **authorization for expenditure (AFE)** is the document with which management and, in joint ventures, the partners approve the budget for a specific job, for example drilling and completing well AR-13. In an ERP an AFE is usually linked to a project or WBS element, and the system compares actual and **committed** cost (open purchase orders) with its budget and warns before the limit is crossed.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'پیوند با بازیافت هزینه', en: 'The link to cost recovery' },
          text: {
            fa: 'انتخاب درست شیء هزینه فقط برای گزارش داخلی نیست. در قرارداد نفتی، هزینه‌ای قابل بازیافت است که با شیء هزینه درست (چاه، AFE، مرکز هزینه) و مدارک پشتیبان ثبت شده باشد. هزینه‌ای که روی شیء هزینه اشتباه بنشیند ممکن است در صورت‌حساب شرکا یا صورت بازیافت هزینه دیده نشود یا در حسابرسی رد شود. درس‌های عملیات مشترک و بازیافت هزینه این موضوع را کامل باز می‌کنند.',
            en: 'Choosing the right cost object is not only for internal reports. Under a petroleum contract, a cost is recoverable when it is recorded on the right cost object (well, AFE, cost centre) with supporting documents. A cost that lands on the wrong object may be missing from the partner billing or the cost-recovery statement, or be rejected in an audit. The lessons on joint operations and cost recovery develop this fully.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**مالک مشخص**: هر نوع داده پایه مالکی دارد؛ مثلاً واحد مالی کدینگ حساب‌ها و مراکز هزینه را نگه می‌دارد و واحد تدارکات پرونده تأمین‌کنندگان را.',
              en: '**A clear owner**: each kind of master data has an owner; for example Finance maintains the chart of accounts and cost centres, and Procurement maintains vendor records.',
            },
            {
              fa: '**گردش کار تأیید**: ایجاد یا تغییر داده پایه، به‌ویژه حساب بانکی تأمین‌کننده، را یک نفر درخواست و نفر دیگری تأیید می‌کند.',
              en: '**Approval workflow**: creating or changing master data, especially a vendor’s bank account, is requested by one person and approved by another.',
            },
            {
              fa: '**جلوگیری از تکرار**: پیش از ساختن تأمین‌کننده یا کالای جدید، با شناسه ملی، کد اقتصادی یا شماره فنی جست‌وجو می‌شود.',
              en: '**No duplicates**: before a new vendor or material is created, the system is searched by national ID, tax number or part number.',
            },
            {
              fa: '**فیلدهای اجباری**: مثلاً هر عنصر WBS باید شماره AFE و نشانگر «قابل بازیافت» داشته باشد.',
              en: '**Mandatory fields**: for example every WBS element must carry an AFE number and a "recoverable" flag.',
            },
          ],
        },
      ],
    },
    {
      id: 'documents-integration',
      title: { fa: 'اسناد و ثبت‌های خودکار', en: 'Documents and Automatic Postings' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در ERP هر رویداد یک **سند** می‌سازد و هر سند یک **نوع سند** دارد: سند دستی، فاکتور خرید، فاکتور فروش، پرداخت، رسید کالا (GRN)، برگه ثبت خدمات (SES)، اجرای استهلاک و مانند آن. نوع سند تعیین می‌کند شماره از کدام محدوده بیاید، چه کسی اجازه ثبت دارد و کدام حساب‌ها مجازند. سند حسابداری ERP همان «سند حسابداری» آشناست (شماره، تاریخ، شرح، سطرهای بدهکار و بستانکار، پیوست‌ها)، با این تفاوت که امضاها جای خود را به تأیید در گردش کار و شناسه کاربر داده‌اند.',
            en: 'In an ERP every event creates a **document**, and every document has a **document type**: manual journal, purchase invoice, sales invoice, payment, goods received note (GRN), service entry sheet (SES), depreciation run and so on. The document type decides which number range is used, who may post it and which accounts are allowed. The ERP accounting document is the familiar voucher (number, date, description, debit and credit lines, attachments), except that signatures are replaced by workflow approvals and user IDs.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'اجزای یک سند حسابداری در ERP', en: 'The parts of an ERP accounting document' },
          head: [
            { fa: 'جزء', en: 'Field' },
            { fa: 'معنا', en: 'Meaning' },
            { fa: 'نمونه', en: 'Example' },
          ],
          rows: [
            [t('کد شرکت', 'Company code'), t('شخصیت حقوقی‌ای که سند در دفاتر آن ثبت می‌شود', 'The legal entity whose books the document posts to'), t('MP01 مسار پترولیوم', 'MP01 Masar Petroleum')],
            [t('نوع سند', 'Document type'), t('دسته سند؛ کنترل شماره و مجوزها', 'Category of document; controls numbering and permissions'), t('فاکتور خرید', 'Purchase invoice')],
            [t('تاریخ سند', 'Document date'), t('تاریخ روی مدرک مبدأ', 'The date on the source document'), t('تاریخ فاکتور تأمین‌کننده', 'The vendor’s invoice date')],
            [t('تاریخ ثبت', 'Posting date'), t('تاریخ ورود به دفاتر؛ دوره را تعیین می‌کند', 'The date it enters the books; decides the period'), t('آخرین روز ماه', 'Last day of the month')],
            [t('مرجع', 'Reference'), t('شماره فاکتور تأمین‌کننده؛ جلوی ثبت تکراری را می‌گیرد', 'Vendor’s invoice number; blocks duplicate posting'), t('INV-8841', 'INV-8841')],
            [t('سطرها', 'Line items'), t('حساب، بدهکار یا بستانکار، مبلغ، شیء هزینه', 'Account, debit or credit, amount, cost object'), t('1510 با WBS چاه AR-13', '1510 with WBS of well AR-13')],
            [t('پیوست و جریان اسناد', 'Attachments and document flow'), t('تصویر مدارک و پیوند به سفارش و رسید', 'Scanned documents and links to the order and receipt'), t('PO-3051 و رسید کالا (GRN) مربوط به آن', 'PO-3051 and its goods received note (GRN)')],
            [t('کاربر و زمان', 'User and time stamps'), t('چه کسی ثبت و چه کسی تأیید کرد، و چه زمانی', 'Who posted, who approved, and when'), t('کارشناس پرداختنی‌ها، مدیر مالی', 'AP accountant, finance manager')],
          ],
        },
        { type: 'h', text: { fa: 'ثبت‌های یکپارچه (خودکار)', en: 'Integration postings' } },
        {
          type: 'p',
          text: {
            fa: 'وقتی یک ماژول عملیاتی سندی ثبت می‌کند، ERP با جدولی به نام **تعیین خودکار حساب** تصمیم می‌گیرد کدام حساب‌ها بدهکار و بستانکار شوند. ورودی این جدول نوع سند و حرکت (رسید کالا، برگه ثبت خدمات، حواله، فاکتور)، گروه کالا و نوع شیء هزینه است. تیم مالی این تنظیمات را یک بار و با دقت انجام می‌دهد؛ از آن به بعد انباردار و کارشناس خرید، بی‌آنکه بدهکار و بستانکار را بدانند، سند مالی درست می‌سازند. جدول زیر مهم‌ترین این ثبت‌ها را در مسار پترولیوم نشان می‌دهد.',
            en: 'When an operational module posts a document, the ERP uses a table called **automatic account determination** to decide which accounts to debit and credit. Its inputs are the document and movement type (GRN, SES, goods issue, invoice), the material group and the kind of cost object. The finance team sets it up once, carefully; from then on the storekeeper and the buyer create correct financial documents without knowing debits and credits. The table below shows the main integration postings at Masar Petroleum.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'ثبت‌های خودکار اصلی که به ماژول مالی می‌رسند', en: 'The main automatic postings that reach Finance' },
          head: [
            { fa: 'رویداد', en: 'Event' },
            { fa: 'ماژول و سند', en: 'Module and document' },
            { fa: 'بدهکار', en: 'Debit' },
            { fa: 'بستانکار', en: 'Credit' },
          ],
          rows: [
            [t('رسید کالای انباری با سفارش خرید', 'Receipt of stock material against a PO'), t('انبار: رسید کالا (GRN)', 'Inventory: goods received note (GRN)'), t('1310 موجودی مواد و قطعات', '1310 Inventory'), t('2120 GR/IR', '2120 GR/IR')],
            [t('رسید کالای مصرف مستقیم (غیرانباری)', 'Receipt of a direct-charge (non-stock) item'), t('تدارکات: رسید کالا (GRN)', 'Procurement: GRN'), t('1510 یا 5110 روی شیء هزینه سفارش', '1510 or 5110 on the PO’s cost object'), t('2120 GR/IR', '2120 GR/IR')],
            [t('پذیرش خدمت انجام‌شده (مثلاً اجاره دکل)', 'Acceptance of a service performed (for example rig hire)'), t('تدارکات: برگه ثبت خدمات (SES)', 'Procurement: service entry sheet (SES)'), t('1510، 5110 یا 5120 روی WBS، مرکز هزینه یا دستور کار', '1510, 5110 or 5120 on the WBS, cost centre or work order'), t('2120 GR/IR', '2120 GR/IR')],
            [t('فاکتور تأمین‌کننده مطابق سفارش و GRN/SES', 'Vendor invoice matched to the PO and GRN/SES'), t('پرداختنی‌ها: فاکتور خرید', 'AP: purchase invoice'), t('2120 GR/IR', '2120 GR/IR'), t('2110 حساب‌های پرداختنی', '2110 Accounts payable')],
            [t('پرداخت به تأمین‌کننده', 'Payment to a vendor'), t('خزانه: سند پرداخت', 'Treasury: payment'), t('2110 حساب‌های پرداختنی', '2110 Accounts payable'), t('1110 موجودی نقد (بانک)', '1110 Cash at bank')],
            [t('حواله کالا به مرکز هزینه', 'Goods issue to a cost centre'), t('انبار: حواله انبار', 'Inventory: goods issue'), t('5110 روی CC-ARY-PRD', '5110 on CC-ARY-PRD'), t('1310 موجودی', '1310 Inventory')],
            [t('حواله کالا به چاه یا AFE', 'Goods issue to a well or AFE'), t('انبار: حواله انبار', 'Inventory: goods issue'), t('1510 روی WBS چاه', '1510 on the well’s WBS'), t('1310 موجودی', '1310 Inventory')],
            [t('حواله قطعه به دستور کار نگهداری', 'Spare part issued to a maintenance work order'), t('نگهداری و انبار: حواله به دستور کار', 'Maintenance and inventory: issue to work order'), t('5120 روی دستور کار، تسویه به CC-ARY-CMP', '5120 on the work order, settled to CC-ARY-CMP'), t('1310 موجودی', '1310 Inventory')],
            [t('تکمیل پروژه و سرمایه‌ای کردن', 'Project completion and capitalisation'), t('پروژه و دارایی: سند تسویه', 'Projects and assets: settlement'), t('1520 دارایی‌های نفت و گاز', '1520 Oil and gas properties'), t('1510 در جریان تکمیل', '1510 Assets under construction')],
            [t('اجرای استهلاک ماهانه', 'Monthly depreciation run'), t('دارایی‌های ثابت: اجرای استهلاک', 'Fixed assets: depreciation run'), t('5210 هزینه استهلاک', '5210 Depreciation expense'), t('1590 استهلاک انباشته', '1590 Accumulated depreciation')],
            [t('فاکتور فروش نفت خام', 'Crude oil sales invoice'), t('فروش و دریافتنی‌ها: فاکتور فروش', 'Sales and AR: sales invoice'), t('1210 حساب‌های دریافتنی', '1210 Accounts receivable'), t('4110 درآمد فروش نفت', '4110 Oil sales revenue')],
            [t('کسری در شمارش انبار', 'Shortage found in a stock count'), t('انبار: سند تعدیل شمارش', 'Inventory: count adjustment'), t('5310 هزینه کسری انبار', '5310 Inventory shortage expense'), t('1310 موجودی', '1310 Inventory')],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'یک تنظیم، هزار بار تکرار', en: 'One setting, repeated a thousand times' },
          text: {
            fa: 'تعیین خودکار حساب مثل قالب است: اگر درست تنظیم شود، هزاران سند درست می‌سازد و اگر غلط باشد، همان اشتباه را هزاران بار تکرار می‌کند. هر تغییر در آن باید پیش از اجرا در محیط آزمایشی امتحان و تأیید شود.',
            en: 'Automatic account determination is like a mould: set up correctly, it produces thousands of correct documents; set up wrongly, it repeats the same mistake thousands of times. Every change to it should be tested in a test environment and approved before it goes live.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**جریان اسناد (Document Flow)**: ERP سندها را به هم زنجیر می‌کند: درخواست خرید، سفارش خرید، رسید کالا (GRN) یا برگه ثبت خدمات (SES)، فاکتور و پرداخت. از هر سند حسابداری می‌توان به سند عملیاتی مبدأ رسید و از هر سفارش خرید می‌توان دید چه مقدار رسیده، چه مقدار فاکتور شده و چه مقدار پرداخت شده است. حسابرس‌ها و شرکا دقیقاً همین زنجیره را دنبال می‌کنند.',
            en: '**Document flow**: the ERP chains documents together: purchase requisition, purchase order, goods received note (GRN) or service entry sheet (SES), invoice and payment. From any accounting document you can reach the operational source document, and from any purchase order you can see how much has been received, invoiced and paid. Auditors and partners follow exactly this chain.',
          },
        },
      ],
    },
    {
      id: 'grir',
      title: { fa: 'رسید کالا، برگه ثبت خدمات و حساب واسط GR/IR', en: 'GRN, SES and the GR/IR Account' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'کالا و فاکتور معمولاً در یک روز نمی‌رسند: شیرها امروز به انبار مرکزی می‌رسند و فاکتور تأمین‌کننده هفته بعد. اگر تا رسیدن فاکتور صبر کنیم، دارایی و بدهی این هفته کمتر از واقع نشان داده می‌شوند. ERP این فاصله را با دو سند رسید و **حساب واسط رسید کالا و فاکتور (GR/IR)** پر می‌کند. برای کالا، انباردار پس از بازرسی **رسید کالا (GRN: Goods Received Note)** ثبت می‌کند؛ برای خدمت، کسی که کار را دیده است **برگه ثبت خدمات (SES: Service Entry Sheet)** را تأیید می‌کند. هر دو، GR/IR را بستانکار می‌کنند؛ فاکتور بعداً GR/IR را بدهکار و حساب تأمین‌کننده را بستانکار می‌کند. وقتی هر دو رسیده باشند، مانده GR/IR آن سفارش صفر است.',
            en: 'Goods and invoices rarely arrive on the same day: the valves reach the Central Warehouse today and the vendor’s invoice next week. If we waited for the invoice, this week’s assets and liabilities would be understated. The ERP bridges the gap with two receipt documents and the **GR/IR clearing account** (goods received / invoice received). For goods, the storekeeper posts a **goods received note (GRN)** after inspection; for services, the person who saw the work approves a **service entry sheet (SES)**. Both credit GR/IR; the invoice later debits GR/IR and credits the vendor. Once both have arrived, the GR/IR balance for that order is zero.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'سه ثبت رسید که GR/IR را بستانکار می‌کنند', en: 'The three receipt postings that credit GR/IR' },
          head: [
            { fa: 'چه چیزی رسید؟', en: 'What was received?' },
            { fa: 'سند', en: 'Document' },
            { fa: 'بدهکار', en: 'Debit' },
            { fa: 'بستانکار', en: 'Credit' },
          ],
          rows: [
            [t('کالای انباری (مثلاً شیر برای انبار مرکزی)', 'Stock material (for example valves for the Central Warehouse)'), t('رسید کالا (GRN)', 'GRN'), t('1310 موجودی مواد و قطعات', '1310 Inventory'), t('2120 GR/IR', '2120 GR/IR')],
            [t('کالای مصرف مستقیم برای یک چاه یا کار مشخص', 'Direct-charge material for a specific well or job'), t('رسید کالا (GRN)', 'GRN'), t('شیء هزینه سفارش: 1510 روی WBS، یا 5110 و 5120', 'The PO’s cost object: 1510 on a WBS, or 5110 and 5120'), t('2120 GR/IR', '2120 GR/IR')],
            [t('خدمت انجام‌شده (دکل، نمودارگیری، بازرسی)', 'Service performed (rig, logging, inspection)'), t('برگه ثبت خدمات (SES)', 'SES'), t('هزینه خدمت روی مرکز هزینه، WBS یا دستور کار', 'Service cost on the cost centre, WBS or work order'), t('2120 GR/IR', '2120 GR/IR')],
          ],
        },
        {
          type: 'diagram',
          id: 'grn-ses',
          caption: {
            fa: 'دو مسیر رسید: کالا با رسید کالا (GRN) و خدمات با برگه ثبت خدمات (SES)؛ سند هر مرحله و ثبتی که در ماژول مالی می‌سازد.',
            en: 'Two receipt paths: goods through a GRN and services through an SES, with the document at each step and the posting it creates in Finance.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'مثال: مسار پترولیوم با سفارش خرید PO-3051، تعداد 40 شیر دروازه‌ای را به قیمت واحد 2,500 (جمعاً 100,000) از «شیرآلات صنعتی خلیج» می‌خرد. روز 5 کالا بازرسی و با رسید کالا (GRN) در انبار مرکزی ثبت می‌شود، فاکتور روز 12 می‌رسد و روز 30 پرداخت انجام می‌شود. هیچ‌کدام از این سه ثبت را حسابدار دستی وارد نمی‌کند.',
            en: 'Example: with purchase order PO-3051, Masar Petroleum buys 40 gate valves at 2,500 each (100,000 in total) from Khalij Industrial Valves. On Day 5 the goods are inspected and a GRN is posted into the Central Warehouse, the invoice arrives on Day 12 and payment is made on Day 30. The accountant keys in none of these three entries by hand.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌هایی که ERP برای PO-3051 می‌سازد', en: 'The entries the ERP posts for PO-3051' },
          entries: [
            {
              date: day(5),
              lines: [
                { account: ac.inventory, debit: 100000 },
                { account: ac.grir, credit: 100000 },
              ],
              memo: { fa: 'رسید کالا (GRN): 40 شیر × 2,500 به قیمت سفارش.', en: 'GRN: 40 valves × 2,500 at the PO price.' },
            },
            {
              date: day(12),
              lines: [
                { account: ac.grir, debit: 100000 },
                { account: ac.ap, credit: 100000 },
              ],
              memo: {
                fa: 'فاکتور خرید پس از تطبیق سه‌طرفه؛ بستانکار دفتر معین «شیرآلات صنعتی خلیج».',
                en: 'Purchase invoice after the three-way match; credited to the Khalij Industrial Valves sub-ledger account.',
              },
            },
            {
              date: day(30),
              lines: [
                { account: ac.ap, debit: 100000 },
                { account: ac.bank, credit: 100000 },
              ],
              memo: { fa: 'پرداخت پس از تأیید خزانه.', en: 'Payment after treasury approval.' },
            },
          ],
        },
        {
          type: 'tAccounts',
          title: { fa: 'حساب GR/IR برای PO-3051 صفر می‌شود', en: 'GR/IR for PO-3051 clears to zero' },
          accounts: [{ name: ac.grir, debits: [100000], credits: [100000] }],
        },
        { type: 'h', text: { fa: 'تطبیق سه‌طرفه', en: 'The three-way match' } },
        {
          type: 'p',
          text: {
            fa: 'پیش از ثبت فاکتور، ERP سه سند را مقایسه می‌کند: **سفارش خرید** (چه چیزی را با چه قیمتی سفارش دادیم؟)، **رسید کالا (GRN)**، یا برای خدمات **برگه ثبت خدمات (SES)** (چه مقداری واقعاً رسید یا انجام شد؟) و **فاکتور** (تأمین‌کننده بابت چه مقدار و چه قیمتی پول می‌خواهد؟). اگر اختلاف از **حد مجاز (Tolerance)** بیشتر باشد، فاکتور ثبت می‌شود اما برای پرداخت **مسدود** می‌ماند تا کارشناس خرید آن را بررسی کند. در جدول زیر حد مجاز اختلاف قیمت را برای مثال 1٪ فرض کرده‌ایم؛ هر شرکت حد خودش را تعیین می‌کند.',
            en: 'Before an invoice is posted, the ERP compares three documents: the **purchase order** (what did we order, at what price?), the **GRN**, or for services the **SES** (how much actually arrived or was performed?) and the **invoice** (how much, at what price, does the vendor want to be paid for?). If the difference exceeds the **tolerance**, the invoice is posted but **blocked for payment** until the buyer reviews it. In the table below we assume a 1% price tolerance for illustration; each company sets its own.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'سه حالت تطبیق برای PO-3051', en: 'Three matching cases for PO-3051' },
          head: [
            { fa: 'حالت', en: 'Case' },
            { fa: 'سفارش خرید', en: 'Purchase order' },
            { fa: 'رسید کالا (GRN)', en: 'GRN' },
            { fa: 'فاکتور', en: 'Invoice' },
            { fa: 'نتیجه در ERP', en: 'ERP result' },
          ],
          rows: [
            [t('همه می‌خوانند', 'Everything agrees'), t('40 × 2,500', '40 × 2,500'), t('40 عدد', '40 units'), t('40 × 2,500', '40 × 2,500'), t('ثبت و آزاد برای پرداخت', 'Posted and released for payment')],
            [t('کسری مقدار', 'Quantity short'), t('40 × 2,500', '40 × 2,500'), t('36 عدد', '36 units'), t('40 × 2,500', '40 × 2,500'), t('مسدود: 4 عدد فاکتور شده ولی نرسیده', 'Blocked: 4 units invoiced but not received')],
            [t('قیمت بالاتر', 'Higher price'), t('40 × 2,500', '40 × 2,500'), t('40 عدد', '40 units'), t('40 × 2,550', '40 × 2,550'), t('2٪ بیش از سفارش؛ بیش از حد مجاز، مسدود', '2% above the PO; over tolerance, blocked')],
          ],
        },
        { type: 'h', text: { fa: 'مانده GR/IR در پایان ماه', en: 'The GR/IR balance at month-end' } },
        {
          type: 'p',
          text: {
            fa: 'در پایان ماه، مانده GR/IR معنای روشنی دارد. **مانده بستانکار** یعنی GRN یا SES ثبت شده ولی فاکتورش هنوز نیامده است؛ این یک بدهی واقعی است و همان چیزی است که در پایان ماه به‌عنوان هزینه تعهدی گزارش می‌شود. **مانده بدهکار** یعنی فاکتوری ثبت شده که کالایش هنوز نرسیده است. حسابدار فهرست اقلام باز را سفارش به سفارش بررسی می‌کند، اقلام قدیمی را با واحد خرید پیگیری می‌کند و آن‌ها را در ترازنامه درست طبقه‌بندی می‌کند.',
            en: 'At month-end the GR/IR balance has a clear meaning. A **credit balance** means a GRN or SES has been posted but its invoice has not arrived; this is a real liability, and it is exactly what is reported as an accrual at month-end. A **debit balance** means an invoice has been posted for goods that have not arrived yet. The accountant reviews the open items order by order, chases old items with Procurement and classifies them correctly on the balance sheet.',
          },
        },
        { type: 'h', text: { fa: 'مسیر خدمات: برگه ثبت خدمات (SES)', en: 'The service path: the SES' } },
        {
          type: 'p',
          text: {
            fa: 'خدمت را نمی‌شود در انبار شمرد؛ پس رسید آن **SES** است. پیمانکار حفاری این ماه 12 روز روی چاه AR-13 کار کرده و هر روز نماینده مسار پترولیوم در محل (سرپرست حفاری) «گزارش روزانه حفاری» را امضا کرده است. پایان ماه، SES-0412 برای 12 روز × 100,000 = 1,200,000 ثبت می‌شود و سرپرست حفاری، که کار را دیده است، آن را با گزارش‌های امضاشده مقایسه و تأیید می‌کند؛ نه خریدار و نه خود پیمانکار. همین تأیید، **تعهد** سفارش خرید روی AFE-2026-013 را به **هزینه واقعی** تبدیل می‌کند.',
            en: 'A service cannot be counted in a warehouse, so its receipt is the **SES**. The drilling contractor worked 12 days on well AR-13 this month, and each day Masar Petroleum’s representative on site (the drilling supervisor) signed the daily drilling report. At month-end SES-0412 is entered for 12 days × 100,000 = 1,200,000, and the drilling supervisor, who saw the work, checks it against the signed reports and approves it; neither the buyer nor the contractor does. That approval turns the purchase order **commitment** on AFE-2026-013 into **actual cost**.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌هایی که ERP برای SES-0412 می‌سازد', en: 'The entries the ERP posts for SES-0412' },
          entries: [
            {
              date: day(30),
              lines: [
                { account: t('1510 دارایی‌های در جریان تکمیل (WBS چاه AR-13، AFE-2026-013)', '1510 Assets under construction (WBS well AR-13, AFE-2026-013)'), debit: 1200000 },
                { account: ac.grir, credit: 1200000 },
              ],
              memo: { fa: 'تأیید SES: 12 روز دکل × 100,000.', en: 'SES approved: 12 rig days × 100,000.' },
            },
            {
              date: t('روز 8 ماه بعد', 'Day 8 next month'),
              lines: [
                { account: ac.grir, debit: 1200000 },
                { account: ac.ap, credit: 1200000 },
              ],
              memo: { fa: 'فاکتور پیمانکار پس از تطبیق با سفارش و SES.', en: 'The contractor’s invoice after matching with the PO and the SES.' },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'مدرک بازیافت هزینه پشت هر SES', en: 'The cost-recovery evidence behind each SES' },
          text: {
            fa: 'گزارش‌های روزانه و برگه‌های کار امضاشده پشت هر SES، مدرک اصلی بازیافت هزینه و حسابرسی شرکاست. مسار پترولیوم آن‌ها را به‌صورت پیوست الکترونیکی به همان SES وصل می‌کند تا حسابرس شرکت ملی نفت یا شرکا بتواند از هزینه AFE-2026-013 تا امضای سرپرست حفاری را دنبال کند. در پایان ماه، SESها و GRNهای فاکتورنشده در GR/IR مانده بستانکار می‌سازند؛ خدمتی که انجام شده ولی SES ندارد، باید با سند تعهدی دستی ثبت شود.',
            en: 'The signed daily reports and field tickets behind each SES are the main evidence for cost recovery and partner audits. Masar Petroleum attaches them electronically to the SES so that the national oil company’s or the partners’ auditor can trace AFE-2026-013’s cost all the way to the drilling supervisor’s signature. At month-end, uninvoiced SESs and GRNs form the credit balance in GR/IR; a service performed without an SES must be accrued with a manual journal.',
          },
        },
        { type: 'h', text: { fa: 'حواله کالا به چاه و به ایستگاه', en: 'Issuing goods to a well and to the station' } },
        {
          type: 'journal',
          title: { fa: 'حواله‌های انبار مرکزی و ثبت خودکار آن‌ها', en: 'Central Warehouse issues and their automatic postings' },
          entries: [
            {
              date: day(18),
              lines: [
                { account: t('1510 دارایی‌های در جریان تکمیل (WBS چاه AR-13، AFE-2026-013)', '1510 Assets under construction (WBS well AR-13, AFE-2026-013)'), debit: 25000 },
                { account: ac.inventory, credit: 25000 },
              ],
              memo: {
                fa: 'حواله 10 شیر به چاه AR-13؛ هزینه سرمایه‌ای و قابل بازیافت روی AFE-2026-013.',
                en: '10 valves issued to well AR-13; a capital, recoverable cost on AFE-2026-013.',
              },
            },
            {
              date: day(20),
              lines: [
                { account: t('5120 هزینه تعمیر و نگهداری (دستور کار، CC-ARY-CMP)', '5120 Repairs and maintenance (work order, CC-ARY-CMP)'), debit: 10000 },
                { account: ac.inventory, credit: 10000 },
              ],
              memo: {
                fa: 'حواله 4 شیر به دستور کار تعمیر ایستگاه تقویت فشار؛ هزینه عملیاتی.',
                en: '4 valves issued to a compressor station repair work order; an operating cost.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: چه کسی چه می‌کند؟', en: 'In practice: who does what?' },
          text: {
            fa: 'کارشناس خرید سفارش را می‌سازد و سفارش طبق سقف اختیارات تأیید می‌شود؛ انباردار پس از بازرسی کیفی رسید کالا (GRN) را ثبت می‌کند و سرپرست کار SES خدمات را تأیید می‌کند؛ کارشناس پرداختنی‌ها فاکتور را ثبت می‌کند؛ خزانه پس از تأیید، پرداخت را انجام می‌دهد. هیچ فردی همه این مراحل را به‌تنهایی انجام نمی‌دهد و ERP با نقش‌های کاربری همین را اجبار می‌کند.',
            en: 'The buyer creates the order and it is approved within authority limits; the storekeeper posts the GRN after quality inspection and the job supervisor approves the SES for services; the AP accountant posts the invoice; treasury pays after approval. No single person performs all of these steps, and the ERP enforces this through user roles.',
          },
        },
      ],
    },
    {
      id: 'period-close',
      title: { fa: 'بستن دوره در ERP', en: 'Period-End Close in an ERP' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'ERP بسیاری از ثبت‌ها را خودکار می‌کند، اما بستن دوره هنوز کاری انسانی است: باید مطمئن شوید همه رویدادها ثبت شده‌اند، برآوردها و تخصیص‌ها انجام شده‌اند و دفاتر با واقعیت می‌خوانند. مسار پترولیوم ماه را در پنج روز کاری و با یک **چک‌لیست بستن دوره** می‌بندد. منطق آن همان ثبت‌های اصلاحی و بستن حساب‌هاست که در درس‌های قبل دیدید، فقط با نظم و ابزار ERP.',
            en: 'An ERP automates many postings, but the close is still human work: you must make sure every event has been recorded, estimates and allocations are done, and the books agree with reality. Masar Petroleum closes the month in five working days with a **period-end close checklist**. Its logic is the adjusting and closing work you met in earlier lessons, now with ERP discipline and tools.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: t('قطع عملیات (Cut-off)', 'Logistics cut-off'),
              text: t(
                'همه رسیدهای کالا (GRN)، حواله‌ها و برگه‌های ثبت خدمات (SES) ماه ثبت می‌شوند؛ سپس دوره ماژول انبار بسته می‌شود.',
                'All GRNs, goods issues and SESs for the month are posted; then the Inventory period is closed.',
              ),
            },
            {
              title: t('فاکتورها و GR/IR', 'Invoices and GR/IR'),
              text: t(
                'فاکتورهای رسیده ثبت و اقلام باز GR/IR تحلیل می‌شوند. GRN و SESهای فاکتورنشده خودشان بدهی ماه را در GR/IR نشان می‌دهند؛ فقط خدمتی که انجام شده ولی SES ندارد، با سند تعهدی دستی ثبت می‌شود.',
                'Received invoices are posted and GR/IR open items are analysed. Uninvoiced GRNs and SESs already show the month’s liability in GR/IR; only services performed without an SES need a manual accrual.',
              ),
            },
            {
              title: t('دارایی‌ها', 'Fixed assets'),
              text: t(
                'پروژه‌ها و AFEهای تکمیل‌شده به دارایی تسویه می‌شوند، خرید و کنارگذاری‌ها ثبت می‌شوند و استهلاک اجرا می‌شود.',
                'Completed projects and AFEs are settled to assets, acquisitions and disposals are posted, and depreciation is run.',
              ),
            },
            {
              title: t('تسویه‌ها و تخصیص‌ها', 'Settlements and allocations'),
              text: t(
                'دستورهای کار نگهداری به مراکز هزینه تسویه و هزینه‌های مشترک (مثلاً ایستگاه تقویت فشار) تخصیص داده می‌شوند.',
                'Maintenance work orders are settled to cost centres and shared costs (for example the compressor station) are allocated.',
              ),
            },
            {
              title: t('صورت‌حساب شرکا و بازیافت هزینه', 'Partner billing and cost recovery'),
              text: t(
                'صورت‌حساب سهم شرکا اجرا و نشانگرهای «قابل بازیافت» کنترل می‌شوند.',
                'Joint interest billing is run and the "recoverable" flags are checked.',
              ),
            },
            {
              title: t('تسعیر ارز', 'Foreign currency revaluation'),
              text: t(
                'اقلام باز ارزی (تأمین‌کنندگان خارجی، حساب‌های بانکی ارزی) با نرخ پایان دوره تسعیر می‌شوند.',
                'Open foreign-currency items (foreign vendors, foreign-currency bank accounts) are revalued at the period-end rate.',
              ),
            },
            {
              title: t('تطبیق‌ها', 'Reconciliations'),
              text: t(
                'صورت مغایرت بانکی، تطبیق دفترهای معین با حساب‌های کنترل، GR/IR و حساب‌های بین شرکتی.',
                'Bank reconciliation, sub-ledgers against control accounts, GR/IR and intercompany accounts.',
              ),
            },
            {
              title: t('بازبینی و قفل دوره', 'Review and period lock'),
              text: t(
                'تراز آزمایشی و تحلیل نوسان‌ها بازبینی، آخرین اصلاحات ثبت و دوره حسابداری قفل می‌شود؛ سپس گزارش‌ها تهیه می‌شوند.',
                'The trial balance and variance analysis are reviewed, final adjustments posted and the period locked; then reports are produced.',
              ),
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'تقویم بستن ماه در مسار پترولیوم', en: 'Masar Petroleum’s month-end close calendar' },
          head: [
            { fa: 'روز کاری', en: 'Working day' },
            { fa: 'کار', en: 'Task' },
            { fa: 'مسئول', en: 'Owner' },
          ],
          rows: [
            [t('آخرین روز ماه', 'Last day of month'), t('قطع عملیات انبار و تدارکات', 'Inventory and procurement cut-off'), t('انبار، تدارکات', 'Warehouse, procurement')],
            [t('روز 1', 'Day 1'), t('فاکتورها، GR/IR، اقلام تعهدی', 'Invoices, GR/IR, accruals'), t('حسابدار پرداختنی‌ها', 'AP accountant')],
            [t('روز 2', 'Day 2'), t('تسویه پروژه‌ها، استهلاک، تسویه دستورهای کار', 'Project settlement, depreciation, work-order settlement'), t('حسابدار دارایی‌ها و بهای تمام‌شده', 'Asset and cost accountants')],
            [t('روز 3', 'Day 3'), t('صورت‌حساب شرکا و گزارش بازیافت هزینه', 'Partner billing and cost-recovery report'), t('حسابدار مشارکت', 'JV accountant')],
            [t('روز 4', 'Day 4'), t('تطبیق‌ها و بازبینی تراز', 'Reconciliations and trial balance review'), t('حسابدار دفتر کل، مدیر مالی', 'GL accountant, finance manager')],
            [t('روز 5', 'Day 5'), t('قفل دوره و گزارش‌ها', 'Period lock and reporting'), t('کنترلر مالی', 'Financial controller')],
          ],
        },
        {
          type: 'journal',
          title: { fa: 'دو ثبت نمونه پایان ماه', en: 'Two sample month-end entries' },
          entries: [
            {
              date: day(30),
              lines: [
                { account: t('5110 هزینه عملیات تولید (CC-ARY-PRD)', '5110 Production operating expense (CC-ARY-PRD)'), debit: 45000 },
                { account: ac.accrued, credit: 45000 },
              ],
              memo: {
                fa: 'آزمایش چاه AR-05 روز 28 انجام شد و برگه کار امضا شد، اما SES آن هنوز ثبت نشده است؛ ثبت تعهدی که اول ماه بعد برگشت می‌خورد.',
                en: 'A well test on AR-05 was done on Day 28 and the field ticket signed, but its SES is not yet posted; an accrual reversed on day 1 of next month.',
              },
            },
            {
              date: day(30),
              lines: [
                { account: ac.depExp, debit: 60000 },
                { account: ac.accDep, credit: 60000 },
              ],
              memo: {
                fa: 'اجرای خودکار استهلاک ماهانه کمپرسورهای ایستگاه تقویت فشار.',
                en: 'Automatic monthly depreciation run for the compressor station equipment.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'دوره‌های حسابداری باز و بسته', en: 'Open and closed posting periods' },
          text: {
            fa: 'هر ERP دوره‌های حسابداری را باز و بسته می‌کند. پس از قفل شدن یک ماه، کسی نمی‌تواند سندی با تاریخ آن ماه ثبت کند و اصلاحات با سند جدید در دوره باز ثبت می‌شوند. ماژول انبار هم دوره خودش را دارد و معمولاً زودتر از مالی بسته می‌شود تا ارزش موجودی پایان ماه ثابت بماند.',
            en: 'Every ERP opens and closes posting periods. Once a month is locked, nobody can post a document dated in that month, and corrections are posted as new documents in the open period. The Inventory module has its own period, usually closed before Finance so that month-end stock values stay fixed.',
          },
        },
      ],
    },
    {
      id: 'reconciliation-controls',
      title: { fa: 'تطبیق‌ها، کنترل‌ها و ردپای حسابرسی', en: 'Reconciliations, Controls and Audit Trail' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**تطبیق (Reconciliation)** یعنی مقایسه دو منبع مستقل که باید یک عدد را نشان دهند و توضیح هر اختلاف. در ERP بسیاری از اختلاف‌ها به‌طور طبیعی رخ نمی‌دهند، چون دفتر معین و دفتر کل هم‌زمان ثبت می‌شوند؛ اما سندهای دستی، انتقال داده از سیستم قدیمی و خطای تنظیمات هنوز می‌توانند اختلاف بسازند.',
            en: 'A **reconciliation** compares two independent sources that should show the same number and explains every difference. In an ERP many differences cannot arise naturally, because the sub-ledger and the ledger are posted together; but manual journals, data migrated from the old system and configuration errors can still create them.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'تطبیق‌های ماهانه مسار پترولیوم', en: 'Masar Petroleum’s monthly reconciliations' },
          head: [
            { fa: 'تطبیق', en: 'Reconciliation' },
            { fa: 'چه چیزی با چه چیزی', en: 'What against what' },
            { fa: 'علت‌های رایج اختلاف', en: 'Common causes of difference' },
          ],
          rows: [
            [t('بانک', 'Bank'), t('صورت‌حساب بانک با حساب 1110', 'Bank statement against account 1110'), t('چک‌های وصول‌نشده، کارمزد بانک، واریزهای ثبت‌نشده', 'Uncleared cheques, bank charges, unrecorded deposits')],
            [t('پرداختنی‌ها', 'Payables'), t('جمع مانده تأمین‌کنندگان با حساب 2110', 'Total vendor balances against account 2110'), t('سند دستی در حساب کنترل، خطای انتقال مانده اول دوره', 'Manual journals to the control account, opening-balance migration errors')],
            [t('موجودی', 'Inventory'), t('گزارش ارزش موجودی انبارها با حساب 1310', 'Stock valuation report against account 1310'), t('سند دستی در حساب موجودی، اختلاف زمانی بستن دو ماژول', 'Manual journals to inventory, timing of the two module closes')],
            [t('دارایی‌های ثابت', 'Fixed assets'), t('فهرست دارایی‌ها با حساب‌های 1520 و 1590', 'Asset register against accounts 1520 and 1590'), t('ثبت دستی خارج از دفتر معین دارایی‌ها', 'Manual postings that bypass the asset sub-ledger')],
            [t('GR/IR', 'GR/IR'), t('فهرست GRN و SESهای باز با حساب 2120', 'Open GRN and SES items against account 2120'), t('اقلام قدیمی تطبیق‌نشده، اختلاف قیمت و مقدار', 'Old unmatched items, price and quantity differences')],
            [t('پروژه‌ها و AFEها', 'Projects and AFEs'), t('گزارش هزینه AFEها با حساب 1510', 'AFE cost report against account 1510'), t('هزینه تسویه‌نشده، WBS اشتباه', 'Unsettled costs, wrong WBS')],
          ],
        },
        { type: 'h', text: { fa: 'کنترل‌های داخلی در ERP', en: 'Internal controls in an ERP' } },
        {
          type: 'list',
          items: [
            {
              fa: '**تفکیک وظایف**: کسی که پرونده تأمین‌کننده را می‌سازد یا تغییر می‌دهد، نباید فاکتور ثبت کند یا پرداخت را آزاد کند؛ انباردار، تعدیل شمارش خودش را تأیید نمی‌کند.',
              en: '**Segregation of duties**: whoever creates or changes vendor records must not post invoices or release payments; a storekeeper does not approve their own count adjustments.',
            },
            {
              fa: '**گردش کار تأیید و سقف اختیارات**: سفارش خرید، AFE و پرداخت بالاتر از هر سقف، تأیید سطح بالاتر را لازم دارد.',
              en: '**Approval workflow and authority limits**: purchase orders, AFEs and payments above each limit need a higher-level approval.',
            },
            {
              fa: '**تطبیق سه‌طرفه و حد مجاز**: سفارش، GRN یا SES و فاکتور مقایسه می‌شوند و فاکتور خارج از حد مجاز مسدود می‌شود.',
              en: '**Three-way match and tolerances**: the PO, the GRN or SES and the invoice are compared, and an invoice outside tolerance is blocked.',
            },
            {
              fa: '**حساب‌های کنترل بسته**: سند دستی در 1210، 1310، 1520، 2110 و 2120 ممکن نیست.',
              en: '**Locked control accounts**: no manual journals to 1210, 1310, 1520, 2110 or 2120.',
            },
            {
              fa: '**بدون حذف، فقط برگشت**: سند ثبت‌شده حذف نمی‌شود؛ با **سند برگشتی** که به سند اصلی ارجاع دارد اصلاح می‌شود.',
              en: '**No deletion, only reversal**: a posted document is never deleted; it is corrected with a **reversal document** that refers to the original.',
            },
            {
              fa: '**ثبت تغییرات داده پایه**: سیستم ثبت می‌کند چه کسی، چه زمانی، کدام فیلد را از چه مقداری به چه مقداری تغییر داد (مثلاً حساب بانکی تأمین‌کننده).',
              en: '**Master data change log**: the system records who changed which field, when, from what value to what value (for example a vendor’s bank account).',
            },
            {
              fa: '**بازبینی دوره‌ای دسترسی‌ها**: هر چند ماه یک بار نقش‌های کاربران با شغل واقعی آن‌ها مقایسه می‌شود.',
              en: '**Periodic access reviews**: every few months, users’ roles are compared with their actual jobs.',
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: '**ردپای حسابرسی (Audit Trail)** یعنی بتوان از هر عدد صورت‌های مالی به عقب برگشت: از سطر ترازنامه به حساب دفتر کل، از حساب به سند حسابداری، از سند به سفارش خرید، GRN یا SES (با برگه‌های کار امضاشده) و تصویر فاکتور، و از هر کدام به کاربر و زمان ثبت و تأیید. حسابرس مستقل، شرکای مشارکت و حسابرسان شرکت ملی نفت دقیقاً همین مسیر را دنبال می‌کنند.',
            en: 'An **audit trail** means you can walk back from any number in the financial statements: from the balance-sheet line to the ledger account, from the account to the accounting document, from the document to the purchase order, the GRN or SES (with its signed field tickets) and the invoice image, and from each of them to the user and time of posting and approval. External auditors, joint venture partners and the national oil company’s auditors follow exactly this path.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: ایران و IFRS', en: 'In practice: Iran and IFRS' },
          text: {
            fa: 'ERP جای الزامات قانونی را نمی‌گیرد. مؤدیانی که مکلف به نگهداری دفاتر قانونی (روزنامه و کل) هستند، باید آن‌ها را طبق مقررات تهیه کنند و ERP باید بتواند این دفاتر را تولید کند. در سال‌های اخیر بسیاری از شرکت‌ها باید صورت‌حساب الکترونیکی را از طریق «سامانه مودیان» صادر کنند و ERPها معمولاً به آن وصل می‌شوند؛ جزئیات و دامنه این الزام را از مقررات روز بررسی کنید. IFRS درباره نرم‌افزار حرفی نمی‌زند، اما حسابرس برای اتکا به اعداد، کنترل‌های عمومی فناوری اطلاعات (دسترسی‌ها، مدیریت تغییرات، پشتیبان‌گیری) را آزمون می‌کند.',
            en: 'An ERP does not replace legal requirements. Taxpayers that must keep legal books (journal and ledger) must prepare them under the regulations, and the ERP must be able to produce them. In recent years many companies must issue electronic tax invoices through Iran’s taxpayers’ system ("Samaneh Moadian"), and ERPs are usually connected to it; check the current regulations for the details and scope. IFRS says nothing about software, but to rely on the numbers the auditor tests IT general controls (access, change management, backups).',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' },
          text: {
            fa: 'بیشتر خطاهای حسابداری در ERP از ورود عدد غلط نیست؛ از دور زدن فرایند یا داده پایه نادرست است. این موارد را در هر بستن ماه بررسی کنید:',
            en: 'Most accounting errors in an ERP do not come from typing a wrong number; they come from bypassing the process or from bad master data. Check for these at every month-end:',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: 'ثبت سند دستی در حساب موجودی یا حساب کنترل، به‌جای اصلاح از طریق ماژول مبدأ.',
              en: 'Posting manual journals to inventory or a control account instead of correcting through the source module.',
            },
            {
              fa: 'ساختن تأمین‌کننده یا کالای تکراری؛ نتیجه آن پرداخت دوباره یا موجودی پنهان است.',
              en: 'Creating duplicate vendors or materials, which leads to double payments or hidden stock.',
            },
            {
              fa: 'انتخاب شیء هزینه اشتباه (مرکز هزینه به‌جای AFE)؛ هزینه سرمایه‌ای، هزینه دوره می‌شود و گزارش AFE و بازیافت هزینه غلط می‌شود.',
              en: 'Choosing the wrong cost object (a cost centre instead of an AFE), so a capital cost becomes a period expense and the AFE and cost-recovery reports go wrong.',
            },
            {
              fa: 'ثبت فاکتور بدون سفارش خرید و GRN یا SES، که تطبیق سه‌طرفه را دور می‌زند.',
              en: 'Posting invoices without a purchase order and a GRN or SES, which bypasses the three-way match.',
            },
            {
              fa: 'رها کردن اقلام قدیمی GR/IR و باز گذاشتن دوره‌ها پس از گزارش‌دهی.',
              en: 'Leaving old GR/IR items untouched and periods open after reporting.',
            },
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: { fa: 'تمرین', en: 'Practice' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'این تمرین‌ها از ساده به دشوار مرتب شده‌اند. پیش از دیدن پاسخ، ثبت‌ها را خودتان بنویسید و بپرسید «ERP این سند را از کدام ماژول می‌سازد؟»',
            en: 'These exercises go from easy to hard. Write the entries yourself before opening the solution, and ask "which module would make the ERP create this document?"',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'داده پایه یا داده تراکنشی؟', en: 'Master data or transaction data?' },
          difficulty: 'easy',
          problem: {
            fa: 'هر یک از اقلام زیر در ERP مسار پترولیوم داده پایه است یا داده تراکنشی؟ برای هر کدام یک دلیل کوتاه بیاورید.',
            en: 'Is each item below master data or transaction data in Masar Petroleum’s ERP? Give a short reason for each.',
          },
          given: {
            head: [{ fa: 'شماره', en: 'No.' }, { fa: 'قلم', en: 'Item' }],
            rows: [
              [1, t('پرونده تأمین‌کننده «شیرآلات صنعتی خلیج»', 'Vendor record "Khalij Industrial Valves"')],
              [2, t('سفارش خرید PO-3051', 'Purchase order PO-3051')],
              [3, t('مرکز هزینه CC-ARY-CMP ایستگاه تقویت فشار', 'Cost centre CC-ARY-CMP Compressor station')],
              [4, t('رسید کالا (GRN) 40 شیر در روز 5', 'GRN for 40 valves on Day 5')],
              [5, t('کالای «شیر دروازه‌ای 4 اینچ»', 'Material "4-inch gate valve"')],
              [6, t('AFE-2026-013 حفاری و تکمیل AR-13', 'AFE-2026-013 drill and complete AR-13')],
              [7, t('فاکتور خرید مواد شیمیایی حفاری', 'Purchase invoice for drilling chemicals')],
              [8, t('حساب 2120 GR/IR', 'Account 2120 GR/IR')],
            ],
          },
          hint: {
            fa: 'بپرسید: «این قلم یک رویداد است که یک بار رخ می‌دهد، یا مرجعی است که سندهای زیادی به آن اشاره می‌کنند؟»',
            en: 'Ask: "is this an event that happens once, or a reference that many documents point to?"',
          },
          solution: [
            {
              type: 'table',
              head: [{ fa: 'شماره', en: 'No.' }, { fa: 'نوع', en: 'Type' }, { fa: 'دلیل', en: 'Reason' }],
              rows: [
                [1, t('داده پایه', 'Master'), t('در ده‌ها سفارش و فاکتور تکرار می‌شود', 'Reused in many orders and invoices')],
                [2, t('تراکنشی', 'Transaction'), t('یک خرید مشخص در یک تاریخ', 'One specific purchase on one date')],
                [3, t('داده پایه', 'Master'), t('شیء هزینه‌ای که سندها به آن اشاره می‌کنند', 'A cost object that documents point to')],
                [4, t('تراکنشی', 'Transaction'), t('یک رویداد ورود کالا', 'One receipt event')],
                [5, t('داده پایه', 'Master'), t('مشخصات ثابت کالا برای همه رسیدها و حواله‌ها', 'Fixed material data for all receipts and issues')],
                [6, t('داده پایه', 'Master'), t('بودجه مصوب و شیء هزینه‌ای که هزینه‌های زیادی روی آن می‌نشیند', 'An approved budget and cost object that many costs land on')],
                [7, t('تراکنشی', 'Transaction'), t('یک بدهی مشخص به یک تأمین‌کننده', 'One specific amount owed to one vendor')],
                [8, t('داده پایه', 'Master'), t('بخشی از کدینگ حساب‌ها', 'Part of the chart of accounts')],
              ],
            },
          ],
          answer: {
            fa: 'داده پایه: 1، 3، 5، 6، 8؛ داده تراکنشی: 2، 4، 7.',
            en: 'Master data: 1, 3, 5, 6, 8; transaction data: 2, 4, 7.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'از سفارش تا حواله: مواد افزودنی گل حفاری', en: 'From order to issue: drilling mud additive' },
          difficulty: 'medium',
          problem: {
            fa: 'مسار پترولیوم با PO-3088 تعداد 50 بشکه افزودنی گل حفاری را به قیمت واحد 1,200 سفارش می‌دهد. روز 3 رسید کالا (GRN) در انبار میدان ثبت می‌شود، روز 9 فاکتور 60,000 می‌رسد و تطبیق می‌شود، روز 10 تعداد 20 بشکه به چاه AR-13 (AFE-2026-013) حواله می‌شود و روز 25 فاکتور پرداخت می‌شود. ثبت‌هایی را که ERP می‌سازد بنویسید و بگویید مانده GR/IR پس از روز 9 و مانده موجودی این کالا پس از روز 10 چقدر است.',
            en: 'With PO-3088 Masar Petroleum orders 50 drums of drilling mud additive at 1,200 each. On Day 3 a GRN is posted at the Field Warehouse, on Day 9 an invoice of 60,000 arrives and is matched, on Day 10 20 drums are issued to well AR-13 (AFE-2026-013), and on Day 25 the invoice is paid. Write the entries the ERP posts and state the GR/IR balance after Day 9 and the stock value of this material after Day 10.',
          },
          hint: {
            fa: 'رسید با قیمت سفارش ثبت می‌شود؛ حواله به چاه، هزینه سرمایه‌ای روی WBS آن است.',
            en: 'The receipt is valued at the PO price; an issue to a well is a capital cost on its WBS.',
          },
          solution: [
            {
              type: 'journal',
              entries: [
                {
                  date: day(3),
                  lines: [
                    { account: ac.inventory, debit: 60000 },
                    { account: ac.grir, credit: 60000 },
                  ],
                  memo: { fa: 'رسید کالا (GRN): 50 × 1,200.', en: 'GRN: 50 × 1,200.' },
                },
                {
                  date: day(9),
                  lines: [
                    { account: ac.grir, debit: 60000 },
                    { account: ac.ap, credit: 60000 },
                  ],
                  memo: { fa: 'فاکتور تطبیق‌شده؛ GR/IR صفر می‌شود.', en: 'Matched invoice; GR/IR clears to zero.' },
                },
                {
                  date: day(10),
                  lines: [
                    { account: t('1510 دارایی‌های در جریان تکمیل (WBS چاه AR-13، AFE-2026-013)', '1510 Assets under construction (WBS well AR-13, AFE-2026-013)'), debit: 24000 },
                    { account: ac.inventory, credit: 24000 },
                  ],
                  memo: { fa: 'حواله 20 بشکه × 1,200 به چاه AR-13.', en: '20 drums × 1,200 issued to well AR-13.' },
                },
                {
                  date: day(25),
                  lines: [
                    { account: ac.ap, debit: 60000 },
                    { account: ac.bank, credit: 60000 },
                  ],
                  memo: { fa: 'پرداخت به تأمین‌کننده.', en: 'Payment to the vendor.' },
                },
              ],
            },
            {
              type: 'steps',
              items: [
                {
                  title: t('GR/IR پس از روز 9', 'GR/IR after Day 9'),
                  text: t('بستانکار 60,000 در روز 3 و بدهکار 60,000 در روز 9: مانده صفر.', 'Credit 60,000 on Day 3 and debit 60,000 on Day 9: balance zero.'),
                },
                {
                  title: t('موجودی پس از روز 10', 'Stock after Day 10'),
                  text: t('60,000 منهای 24,000 برابر 36,000؛ یعنی 30 بشکه × 1,200.', '60,000 minus 24,000 is 36,000, that is 30 drums × 1,200.'),
                },
              ],
            },
          ],
          answer: {
            fa: 'GR/IR پس از روز 9 صفر است و موجودی پس از روز 10 برابر 36,000 (30 بشکه) است.',
            en: 'GR/IR is zero after Day 9 and stock after Day 10 is 36,000 (30 drums).',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تحلیل GR/IR در پایان ماه', en: 'Month-end GR/IR analysis' },
          difficulty: 'medium',
          problem: {
            fa: 'فهرست اقلام باز حساب 2120 مسار پترولیوم در پایان ماه در جدول زیر آمده است. (الف) مانده خالص GR/IR چقدر و از چه نوعی است؟ (ب) هر سفارش چه معنایی دارد و چه اقدامی لازم است؟',
            en: 'Masar Petroleum’s open items in account 2120 at month-end are shown below. (a) What is the net GR/IR balance, and is it a debit or a credit? (b) What does each order mean and what action is needed?',
          },
          given: {
            head: [
              { fa: 'سفارش', en: 'Order' },
              { fa: 'شرح', en: 'Description' },
              { fa: 'GRN یا SES (بستانکار GR/IR)', en: 'GRN or SES (GR/IR credit)' },
              { fa: 'فاکتور (بدهکار GR/IR)', en: 'Invoiced (GR/IR debit)' },
            ],
            numericCols: [2, 3],
            rows: [
              ['PO-3102', t('لوله مغزی', 'Tubing'), 45000, 0],
              ['PO-3110', t('قطعات یدکی جداکننده', 'Separator spare parts'), 0, 12000],
              ['PO-3115', t('اجاره دکل (SES)', 'Rig hire (SES)'), 80000, 80000],
              ['PO-3121', t('واشر و اتصالات، GRN پنج ماه پیش', 'Gaskets and fittings, GRN five months ago'), 6000, 0],
            ].map((r) => r.map((c) => (typeof c === 'string' ? t(c, c) : c))),
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'سفارش', en: 'Order' },
                { fa: 'مانده', en: 'Balance' },
                { fa: 'معنا', en: 'Meaning' },
                { fa: 'اقدام', en: 'Action' },
              ],
              rows: [
                [t('PO-3102', 'PO-3102'), t('بستانکار 45,000', 'Credit 45,000'), t('GRN ثبت‌شده، فاکتورنشده: بدهی واقعی', 'GRN posted, not invoiced: a real liability'), t('پیگیری فاکتور از تأمین‌کننده', 'Chase the vendor for the invoice')],
                [t('PO-3110', 'PO-3110'), t('بدهکار 12,000', 'Debit 12,000'), t('فاکتور شده، نرسیده', 'Invoiced, not received'), t('بررسی وضعیت ارسال؛ فاکتور مسدود بماند', 'Check delivery status; keep the invoice blocked')],
                [t('PO-3115', 'PO-3115'), t('صفر', 'Zero'), t('کامل تطبیق شده', 'Fully matched'), t('اقدامی لازم نیست', 'No action')],
                [t('PO-3121', 'PO-3121'), t('بستانکار 6,000', 'Credit 6,000'), t('قلم قدیمی؛ احتمال خطا', 'Old item; probably an error'), t('بررسی با خرید و تأمین‌کننده؛ اگر فاکتوری نخواهد آمد، GRN برگشت یا اصلاح شود', 'Investigate with Procurement and the vendor; if no invoice will come, reverse or correct the GRN')],
              ],
            },
            {
              type: 'formula',
              text: {
                fa: 'مانده خالص = (45,000 + 80,000 + 6,000) − (12,000 + 80,000) = 39,000 بستانکار',
                en: 'Net balance = (45,000 + 80,000 + 6,000) − (12,000 + 80,000) = 39,000 credit',
              },
              note: {
                fa: 'یعنی 51,000 کالای رسیده و فاکتورنشده، منهای 12,000 فاکتورِ کالای نرسیده.',
                en: 'That is 51,000 received but not invoiced, less 12,000 invoiced but not received.',
              },
            },
          ],
          answer: {
            fa: 'مانده خالص 39,000 بستانکار است: 51,000 رسیده و فاکتورنشده منهای 12,000 فاکتورشده و نرسیده.',
            en: 'The net balance is a 39,000 credit: 51,000 received not invoiced less 12,000 invoiced not received.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'شیء هزینه اشتباه', en: 'The wrong cost object' },
          difficulty: 'hard',
          problem: {
            fa: 'روز 18، انباردار 80 شاخه لوله مغزی (هر شاخه 1,200) را به‌اشتباه به مرکز هزینه CC-ARY-PRD (عملیات میدان) حواله کرد، در حالی که این لوله‌ها برای حفاری چاه AR-15 روی AFE-2026-017 رزرو شده بودند. در بازبینی پایان ماه خطا پیدا می‌شود. (الف) ERP چه ثبتی ساخته است؟ (ب) این خطا چه اثری بر سود ماه، گزارش AFE-2026-017 و بازیافت هزینه دارد؟ (ج) اصلاح درست چیست؟',
            en: 'On Day 18 the storekeeper wrongly issued 80 joints of tubing (1,200 each) to cost centre CC-ARY-PRD (field operations), although they were reserved for drilling well AR-15 on AFE-2026-017. The month-end review finds the error. (a) What did the ERP post? (b) How does the error affect the month’s profit, the AFE-2026-017 report and cost recovery? (c) What is the right correction?',
          },
          hint: {
            fa: 'اصلاح را از ماژول انبار انجام دهید، نه با سند دستی در حساب موجودی.',
            en: 'Correct it through the Inventory module, not with a manual journal to the inventory account.',
          },
          solution: [
            {
              type: 'journal',
              title: { fa: '(الف) ثبت اشتباه روز 18', en: '(a) The wrong posting on Day 18' },
              entries: [
                {
                  date: day(18),
                  lines: [
                    { account: t('5110 هزینه عملیات تولید (CC-ARY-PRD)', '5110 Production operating expense (CC-ARY-PRD)'), debit: 96000 },
                    { account: ac.inventory, credit: 96000 },
                  ],
                  memo: { fa: '80 × 1,200 = 96,000 به مرکز هزینه اشتباه.', en: '80 × 1,200 = 96,000 to the wrong cost centre.' },
                },
              ],
            },
            {
              type: 'list',
              items: [
                {
                  fa: '**سود ماه**: هزینه عملیاتی 96,000 بیش از واقع است، پس سود ماه 96,000 کمتر از واقع نشان داده شده است.',
                  en: '**Monthly profit**: operating expense is overstated by 96,000, so profit is understated by 96,000.',
                },
                {
                  fa: '**ترازنامه و AFE**: دارایی‌های در جریان تکمیل 96,000 کمتر است و AFE-2026-017 کمتر از واقع خرج نشان می‌دهد (ظاهراً زیر بودجه).',
                  en: '**Balance sheet and AFE**: assets under construction are 96,000 too low, and AFE-2026-017 shows less spending than real (it looks under budget).',
                },
                {
                  fa: '**بازیافت هزینه و شرکا**: هزینه در دسته عملیاتی به‌جای توسعه نشسته است؛ زمان و شیوه بازیافت آن فرق می‌کند و ممکن است در صورت‌حساب شرکا زیر AFE-2026-017 دیده نشود.',
                  en: '**Cost recovery and partners**: the cost sits in the operating category instead of development; its recovery timing and treatment differ, and it may be missing from the partner billing under AFE-2026-017.',
                },
              ],
            },
            {
              type: 'journal',
              title: { fa: '(ج) اصلاح از ماژول انبار: برگشت حواله و حواله دوباره', en: '(c) Correction in the Inventory module: reverse and re-issue' },
              entries: [
                {
                  date: day(30),
                  lines: [
                    { account: ac.inventory, debit: 96000 },
                    { account: t('5110 هزینه عملیات تولید (CC-ARY-PRD)', '5110 Production operating expense (CC-ARY-PRD)'), credit: 96000 },
                  ],
                  memo: { fa: 'سند برگشتی حواله روز 18.', en: 'Reversal of the Day 18 issue.' },
                },
                {
                  date: day(30),
                  lines: [
                    { account: t('1510 دارایی‌های در جریان تکمیل (WBS چاه AR-15، AFE-2026-017)', '1510 Assets under construction (WBS well AR-15, AFE-2026-017)'), debit: 96000 },
                    { account: ac.inventory, credit: 96000 },
                  ],
                  memo: { fa: 'حواله درست با ارجاع به رزرو AFE-2026-017.', en: 'Correct issue referencing the AFE-2026-017 reservation.' },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'برای جلوگیری از تکرار، حواله لوله‌های حفاری فقط با ارجاع به رزرو مجاز شود؛ آن‌گاه ERP شیء هزینه را از رزرو برمی‌دارد و انباردار آن را انتخاب نمی‌کند.',
                en: 'To prevent a repeat, allow drilling tubular issues only against a reservation; the ERP then takes the cost object from the reservation instead of the storekeeper choosing it.',
              },
            },
          ],
          answer: {
            fa: '96,000 از هزینه عملیاتی CC-ARY-PRD به دارایی در جریان تکمیل روی WBS چاه AR-15 منتقل می‌شود؛ سود ماه 96,000 افزایش و هزینه واقعی AFE-2026-017 نیز 96,000 افزایش می‌یابد.',
            en: '96,000 moves from CC-ARY-PRD operating expense to assets under construction on well AR-15’s WBS; monthly profit rises by 96,000 and AFE-2026-017 actuals rise by 96,000.',
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
              fa: 'در ERP هر رویداد یک بار در ماژول مبدأ ثبت می‌شود و اثر مالی آن خودکار به دفتر کل می‌رسد.',
              en: 'In an ERP each event is recorded once in its source module, and its financial effect reaches the ledger automatically.',
            },
            {
              fa: 'دفترهای معین (پرداختنی، دریافتنی، دارایی، موجودی) جزئیات را نگه می‌دارند و از راه حساب‌های کنترل با دفتر کل برابر می‌مانند.',
              en: 'Sub-ledgers (payables, receivables, assets, inventory) keep the detail and stay equal to the ledger through control accounts.',
            },
            {
              fa: 'داده پایه (حساب‌ها، تأمین‌کنندگان، کالاها، مراکز هزینه، WBS و AFE) اسکلت سیستم است؛ خطای آن در همه سندها تکرار می‌شود.',
              en: 'Master data (accounts, vendors, materials, cost centres, WBS and AFEs) is the skeleton of the system; its errors repeat in every document.',
            },
            {
              fa: 'GRN برای کالا و SES برای خدمات، تعهد سفارش را به هزینه واقعی تبدیل می‌کنند؛ GR/IR فاصله آن‌ها با فاکتور را پر می‌کند و تطبیق سه‌طرفه جلوی پرداخت نادرست را می‌گیرد.',
              en: 'A GRN for goods and an SES for services turn a PO commitment into actual cost; GR/IR bridges them to the invoice, and the three-way match prevents wrong payments.',
            },
            {
              fa: 'هر هزینه باید روی شیء هزینه درست بنشیند؛ این پایه گزارش AFE، صورت‌حساب شرکا و بازیافت هزینه است.',
              en: 'Every cost must land on the right cost object; this is the basis of AFE reports, partner billing and cost recovery.',
            },
            {
              fa: 'بستن دوره با چک‌لیست، تطبیق‌ها، کنترل‌های داخلی و ردپای حسابرسی، اعداد ERP را قابل اتکا می‌کند.',
              en: 'A close checklist, reconciliations, internal controls and an audit trail make ERP numbers reliable.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'سیستم برنامه‌ریزی منابع سازمان (ERP)', en: 'Enterprise resource planning (ERP)' },
              def: {
                fa: 'نرم‌افزار یکپارچه‌ای که ماژول‌های همه واحدها روی یک پایگاه داده مشترک کار می‌کنند.',
                en: 'Integrated software whose modules for every department work on one shared database.',
              },
            },
            {
              term: { fa: 'دفتر معین (Sub-ledger)', en: 'Sub-ledger' },
              def: {
                fa: 'دفتری که جزئیات یک حساب کنترل را به تفکیک تأمین‌کننده، مشتری، دارایی یا کالا نگه می‌دارد.',
                en: 'A ledger that keeps the detail behind a control account by vendor, customer, asset or material.',
              },
            },
            {
              term: { fa: 'حساب کنترل', en: 'Control (reconciliation) account' },
              def: {
                fa: 'حساب دفتر کل که هم‌زمان با دفتر معین ثبت می‌شود و مانده آن برابر جمع دفتر معین است.',
                en: 'A ledger account posted together with its sub-ledger, whose balance equals the sub-ledger total.',
              },
            },
            {
              term: { fa: 'داده پایه (Master Data)', en: 'Master data' },
              def: {
                fa: 'اطلاعات کم‌تغییری که سندها بارها به آن اشاره می‌کنند، مانند حساب‌ها، تأمین‌کنندگان و مراکز هزینه.',
                en: 'Slow-changing information that documents refer to again and again, such as accounts, vendors and cost centres.',
              },
            },
            {
              term: { fa: 'شیء هزینه', en: 'Cost object' },
              def: {
                fa: 'آنچه هزینه برای آن جمع می‌شود: مرکز هزینه، پروژه یا WBS، AFE، دستور کار یا دارایی.',
                en: 'Whatever cost is collected for: a cost centre, project or WBS element, AFE, work order or asset.',
              },
            },
            {
              term: { fa: 'تعیین خودکار حساب', en: 'Automatic account determination' },
              def: {
                fa: 'تنظیماتی که بر اساس نوع حرکت و گروه کالا، حساب‌های بدهکار و بستانکار ثبت‌های خودکار را انتخاب می‌کند.',
                en: 'The configuration that picks the debit and credit accounts of automatic postings from the movement type and material group.',
              },
            },
            {
              term: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing account' },
              def: {
                fa: 'حساب موقتی که با GRN یا SES بستانکار و با فاکتور بدهکار می‌شود؛ مانده آن اقلام تطبیق‌نشده را نشان می‌دهد.',
                en: 'A temporary account credited by a GRN or SES and debited by the invoice; its balance shows unmatched items.',
              },
            },
            {
              term: { fa: 'رسید کالا (GRN)', en: 'Goods received note (GRN)' },
              def: {
                fa: 'سند رسید کالا پس از بازرسی؛ موجودی یا شیء هزینه را بدهکار و GR/IR را بستانکار می‌کند.',
                en: 'The receipt document for goods after inspection; it debits inventory or the cost object and credits GR/IR.',
              },
            },
            {
              term: { fa: 'برگه ثبت خدمات (SES)', en: 'Service entry sheet (SES)' },
              def: {
                fa: 'رسیدِ خدمت که کسی که کار را دیده تأیید می‌کند؛ هزینه را روی مرکز هزینه، WBS یا دستور کار و GR/IR را بستانکار ثبت می‌کند.',
                en: 'The receipt for a service, approved by someone who saw the work; it posts the cost to a cost centre, WBS or work order and credits GR/IR.',
              },
            },
            {
              term: { fa: 'تطبیق سه‌طرفه', en: 'Three-way match' },
              def: {
                fa: 'مقایسه سفارش خرید، GRN یا SES و فاکتور پیش از آزاد کردن پرداخت.',
                en: 'Comparing the purchase order, the GRN or SES, and the invoice before payment is released.',
              },
            },
            {
              term: { fa: 'ردپای حسابرسی', en: 'Audit trail' },
              def: {
                fa: 'زنجیره‌ای که از هر عدد گزارش تا سند مبدأ، کاربر و زمان ثبت و تأیید می‌رسد.',
                en: 'The chain that leads from any reported number back to its source document, user and time of posting and approval.',
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
        fa: 'کدام‌یک از موارد زیر **داده تراکنشی** است؟',
        en: 'Which of the following is **transaction data**?',
      },
      options: [
        { fa: 'پرونده تأمین‌کننده «خدمات حفاری آریا»', en: 'The vendor record "Arya Drilling Services"' },
        { fa: 'رسید کالا (GRN) 40 شیر در روز 5', en: 'The GRN for 40 valves on Day 5' },
        { fa: 'مرکز هزینه CC-ARY-CMP ایستگاه تقویت فشار', en: 'Cost centre CC-ARY-CMP Compressor station' },
        { fa: 'حساب 1310 در کدینگ حساب‌ها', en: 'Account 1310 in the chart of accounts' },
      ],
      answer: 1,
      explain: {
        fa: 'رسید کالا (GRN) یک رویداد است که یک بار در یک تاریخ رخ می‌دهد؛ پس داده تراکنشی است. تأمین‌کننده، مرکز هزینه و حساب، مرجع‌هایی هستند که سندهای زیادی به آن‌ها اشاره می‌کنند؛ یعنی داده پایه.',
        en: 'A GRN is an event that happens once, on one date, so it is transaction data. The vendor, the cost centre and the account are references many documents point to, which makes them master data.',
      },
    },
    {
      q: {
        fa: 'انبار مرکزی برای 30 پمپ با قیمت سفارش 4,000 رسید کالا (GRN) ثبت می‌کند. ERP چه ثبتی می‌سازد؟',
        en: 'The Central Warehouse posts a GRN for 30 pumps at the PO price of 4,000 each. What does the ERP post?',
      },
      options: [
        { fa: 'بدهکار موجودی 120,000 / بستانکار حساب‌های پرداختنی 120,000', en: 'Dr Inventory 120,000 / Cr Accounts payable 120,000' },
        { fa: 'بدهکار GR/IR به مبلغ 120,000 / بستانکار موجودی 120,000', en: 'Dr GR/IR 120,000 / Cr Inventory 120,000' },
        { fa: 'بدهکار موجودی 120,000 / بستانکار GR/IR به مبلغ 120,000', en: 'Dr Inventory 120,000 / Cr GR/IR 120,000' },
        { fa: 'هیچ ثبتی تا رسیدن فاکتور ساخته نمی‌شود', en: 'Nothing is posted until the invoice arrives' },
      ],
      answer: 2,
      explain: {
        fa: '30 × 4,000 = 120,000. هنگام GRN، موجودی بدهکار و حساب واسط GR/IR بستانکار می‌شود. حساب تأمین‌کننده فقط هنگام ثبت فاکتور بستانکار می‌شود؛ پس گزینه اول، کار فاکتور را زودتر از موعد انجام داده است.',
        en: '30 × 4,000 = 120,000. On the GRN, inventory is debited and the GR/IR clearing account credited. The vendor is credited only when the invoice is posted, so the first option does the invoice’s job too early.',
      },
    },
    {
      q: {
        fa: 'سرپرست حفاری برگه ثبت خدمات (SES) اجاره دکل چاه AR-13 را روی AFE-2026-013 تأیید می‌کند. ERP در همان لحظه چه ثبتی می‌سازد؟',
        en: 'The drilling supervisor approves the service entry sheet (SES) for rig hire on well AR-13 against AFE-2026-013. What does the ERP post at that moment?',
      },
      options: [
        { fa: 'بدهکار دارایی‌های در جریان تکمیل (WBS چاه AR-13) / بستانکار GR/IR', en: 'Dr Assets under construction (WBS well AR-13) / Cr GR/IR' },
        { fa: 'بدهکار موجودی مواد و قطعات / بستانکار GR/IR', en: 'Dr Materials and spares inventory / Cr GR/IR' },
        { fa: 'بدهکار GR/IR / بستانکار حساب‌های پرداختنی', en: 'Dr GR/IR / Cr Accounts payable' },
        { fa: 'هیچ ثبتی تا رسیدن فاکتور پیمانکار ساخته نمی‌شود', en: 'Nothing is posted until the contractor’s invoice arrives' },
      ],
      answer: 0,
      explain: {
        fa: 'SES رسیدِ خدمت است: هزینه خدمت را روی شیء هزینه سفارش (اینجا WBS چاه AR-13) بدهکار و GR/IR را بستانکار می‌کند و تعهد AFE-2026-013 را به هزینه واقعی تبدیل می‌کند. خدمت به انبار نمی‌رود، پس موجودی درگیر نیست؛ ثبت GR/IR در برابر حساب‌های پرداختنی کار فاکتور است.',
        en: 'An SES is the receipt for a service: it debits the service cost to the PO’s cost object (here the WBS of well AR-13), credits GR/IR, and turns the AFE-2026-013 commitment into actual cost. A service never enters a warehouse, so inventory is not involved; GR/IR against payables is the invoice’s job.',
      },
    },
    {
      q: {
        fa: 'اقلام باز GR/IR: GRN و SESهای فاکتورنشده 70,000 و فاکتورِ کالای نرسیده 15,000. مانده خالص حساب چیست؟',
        en: 'GR/IR open items: GRNs and SESs not yet invoiced 70,000 and invoices for goods not received 15,000. What is the net balance?',
      },
      options: [
        { fa: '85,000 بستانکار', en: '85,000 credit' },
        { fa: '55,000 بدهکار', en: '55,000 debit' },
        { fa: '70,000 بستانکار', en: '70,000 credit' },
        { fa: '55,000 بستانکار', en: '55,000 credit' },
      ],
      answer: 3,
      explain: {
        fa: 'GRN و SES فاکتورنشده بستانکار است (70,000) و فاکتورِ کالای نرسیده بدهکار (15,000)؛ خالص 70,000 منهای 15,000 برابر 55,000 بستانکار. جمع کردن دو عدد (85,000) اشتباه است، چون این دو در دو طرف مخالف حساب‌اند.',
        en: 'Received-not-invoiced is a credit (70,000) and invoiced-not-received a debit (15,000); net 70,000 minus 15,000 is a 55,000 credit. Adding them (85,000) is wrong because they sit on opposite sides of the account.',
      },
    },
    {
      q: {
        fa: 'چرا ERP معمولاً اجازه ثبت سند دستی مستقیم در حساب کنترل 2110 را نمی‌دهد؟',
        en: 'Why does an ERP normally block manual journals straight to control account 2110?',
      },
      options: [
        { fa: 'چون حساب‌های بدهی فقط در پایان سال ثبت می‌شوند', en: 'Because liability accounts are posted only at year-end' },
        { fa: 'چون چنین سندی برابری دفتر معین تأمین‌کنندگان و حساب کنترل را می‌شکند', en: 'Because such a journal breaks the equality between the vendor sub-ledger and the control account' },
        { fa: 'چون مالیات بر ارزش افزوده را دو بار حساب می‌کند', en: 'Because it would count VAT twice' },
        { fa: 'چون حساب 2110 حساب سود و زیانی است', en: 'Because account 2110 is an income-statement account' },
      ],
      answer: 1,
      explain: {
        fa: 'مانده حساب کنترل باید همیشه برابر جمع مانده تأمین‌کنندگان باشد. سند دستی فقط حساب کنترل را تغییر می‌دهد و هیچ تأمین‌کننده‌ای را نه؛ پس دو عدد از هم جدا می‌شوند. 2110 یک حساب بدهی ترازنامه‌ای است و در طول سال بارها ثبت می‌شود.',
        en: 'The control account must always equal the total of vendor balances. A manual journal changes only the control account and no vendor, so the two numbers drift apart. 2110 is a balance-sheet liability posted many times during the year.',
      },
    },
    {
      q: {
        fa: 'مانده حساب 2110 برابر 500,000 و جمع مانده تأمین‌کنندگان 488,000 است. معلوم می‌شود یک ثبت تعهدی 12,000 به‌اشتباه مستقیم در 2110 ثبت شده است. پس از انتقال آن به 2130، مانده 2110 چقدر می‌شود؟',
        en: 'Account 2110 shows 500,000 and the vendor balances total 488,000. You find a 12,000 accrual posted directly to 2110 by mistake. After moving it to 2130, what is the balance of 2110?',
      },
      options: [
        { fa: '488,000', en: '488,000' },
        { fa: '500,000', en: '500,000' },
        { fa: '512,000', en: '512,000' },
        { fa: '476,000', en: '476,000' },
      ],
      answer: 0,
      explain: {
        fa: 'سند اصلاحی 2110 را 12,000 بدهکار و 2130 را 12,000 بستانکار می‌کند: 500,000 منهای 12,000 برابر 488,000 که با دفتر معین برابر است. بدهی کل شرکت تغییر نمی‌کند؛ فقط به حساب درست می‌رود. عدد 476,000 از کم کردن دوباره اختلاف به دست می‌آید.',
        en: 'The correction debits 2110 by 12,000 and credits 2130 by 12,000: 500,000 minus 12,000 is 488,000, matching the sub-ledger. Total liabilities do not change; the amount just moves to the right account. 476,000 comes from deducting the difference twice.',
      },
    },
    {
      q: {
        fa: 'لوله جداری (Casing) از انبار مرکزی برای حفاری چاه AR-13 روی AFE-2026-013 حواله می‌شود. کدام حساب بدهکار می‌شود؟',
        en: 'Casing is issued from the Central Warehouse for drilling well AR-13 on AFE-2026-013. Which account is debited?',
      },
      options: [
        { fa: '5110 هزینه عملیات تولید روی CC-ARY-PRD', en: '5110 Production operating expense on CC-ARY-PRD' },
        { fa: '2120 حساب واسط GR/IR', en: '2120 GR/IR clearing' },
        { fa: '1510 دارایی‌های در جریان تکمیل روی WBS چاه AR-13', en: '1510 Assets under construction on the WBS of well AR-13' },
        { fa: '1310 موجودی مواد و قطعات', en: '1310 Materials and spares inventory' },
      ],
      answer: 2,
      explain: {
        fa: 'حفاری چاه جدید یک پروژه سرمایه‌ای است؛ پس هزینه روی WBS چاه در دارایی‌های در جریان تکمیل جمع می‌شود و موجودی بستانکار می‌شود. ثبت آن به‌عنوان هزینه عملیاتی CC-ARY-PRD همان خطای رایج «شیء هزینه اشتباه» است.',
        en: 'Drilling a new well is a capital project, so the cost collects on the well’s WBS in assets under construction and inventory is credited. Charging it to CC-ARY-PRD operating expense is the classic "wrong cost object" mistake.',
      },
    },
    {
      q: {
        fa: 'PO-3051 برای 40 شیر به قیمت 2,500 است و فاکتور 40 شیر به قیمت 2,550 می‌رسد. حد مجاز اختلاف قیمت 1٪ است. مبلغ فاکتور و نتیجه چیست؟',
        en: 'PO-3051 is for 40 valves at 2,500; the invoice is for 40 valves at 2,550. The price tolerance is 1%. What is the invoice total and the result?',
      },
      options: [
        { fa: '100,000؛ ثبت و آزاد برای پرداخت', en: '100,000; posted and released for payment' },
        { fa: '102,000؛ اختلاف 1٪ و آزاد برای پرداخت', en: '102,000; a 1% difference, released for payment' },
        { fa: '102,000؛ ERP آن را بی‌صدا با قیمت سفارش ثبت می‌کند', en: '102,000; the ERP silently posts it at the PO price' },
        { fa: '102,000؛ اختلاف 2٪، فاکتور برای پرداخت مسدود می‌شود', en: '102,000; a 2% difference, the invoice is blocked for payment' },
      ],
      answer: 3,
      explain: {
        fa: '40 × 2,550 = 102,000 و اختلاف 2,000 روی 100,000 یعنی 2٪، که دو برابر حد مجاز است؛ پس فاکتور ثبت ولی برای پرداخت مسدود می‌شود تا کارشناس خرید بررسی کند. اختلاف 50 روی 2,500 برابر 2٪ است، نه 1٪.',
        en: '40 × 2,550 = 102,000 and the 2,000 difference on 100,000 is 2%, twice the tolerance, so the invoice is posted but blocked for payment until the buyer reviews it. A 50 difference on 2,500 is 2%, not 1%.',
      },
    },
    {
      q: {
        fa: 'کدام کنترل جلوی این را می‌گیرد که یک نفر تأمین‌کننده جعلی بسازد و به او پرداخت کند؟',
        en: 'Which control stops one person from creating a fake vendor and paying it?',
      },
      options: [
        { fa: 'استهلاک خودکار ماهانه', en: 'The automatic monthly depreciation run' },
        { fa: 'تفکیک وظایف میان ساختن تأمین‌کننده، ثبت فاکتور و آزاد کردن پرداخت', en: 'Segregation of duties between creating vendors, posting invoices and releasing payments' },
        { fa: 'تسعیر ارز پایان دوره', en: 'Period-end currency revaluation' },
        { fa: 'تقویم بستن ماه', en: 'The month-end close calendar' },
      ],
      answer: 1,
      explain: {
        fa: 'وقتی ساختن تأمین‌کننده، ثبت فاکتور و پرداخت در دست افراد مختلف است، تقلب به تبانی چند نفر نیاز دارد. ثبت تغییرات داده پایه و تأیید دوم برای حساب بانکی این کنترل را قوی‌تر می‌کند. گزینه‌های دیگر کنترل‌های حسابداری مفیدی هستند، اما به این خطر ربطی ندارند.',
        en: 'When creating vendors, posting invoices and paying are in different hands, fraud needs several people to collude. A master data change log and a second approval for bank details make it stronger. The other options are useful accounting routines but do not address this risk.',
      },
    },
    {
      q: {
        fa: 'یک کمپرسور با بهای 600,000 و عمر مفید 10 سال، بدون ارزش اسقاط، به روش خط مستقیم مستهلک می‌شود. اجرای استهلاک ماهانه ERP چه مبلغی ثبت می‌کند؟',
        en: 'A compressor costing 600,000 with a 10-year life and no residual value is depreciated straight-line. What does the ERP’s monthly depreciation run post?',
      },
      options: [
        { fa: '60,000', en: '60,000' },
        { fa: '50,000', en: '50,000' },
        { fa: '5,000', en: '5,000' },
        { fa: '6,000', en: '6,000' },
      ],
      answer: 2,
      explain: {
        fa: 'استهلاک سالانه 600,000 ÷ 10 = 60,000 و ماهانه 60,000 ÷ 12 = 5,000 است. ثبت: بدهکار هزینه استهلاک 5,000 / بستانکار استهلاک انباشته 5,000. عدد 60,000 استهلاک یک سال است، نه یک ماه.',
        en: 'Annual depreciation is 600,000 ÷ 10 = 60,000 and monthly 60,000 ÷ 12 = 5,000. Entry: Dr Depreciation expense 5,000 / Cr Accumulated depreciation 5,000. 60,000 is a full year, not a month.',
      },
    },
  ],
}
