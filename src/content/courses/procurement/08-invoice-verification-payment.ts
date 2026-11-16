import type { Lesson } from '../../types'

const ac = {
  grir: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing account' },
  inputVat: { fa: 'مالیات بر ارزش افزوده خرید', en: 'Input VAT receivable' },
  bank: { fa: 'موجودی نقد (بانک)', en: 'Cash at bank' },
  invField: { fa: 'موجودی مواد و قطعات: انبار میدان', en: 'Materials inventory: Field Warehouse' },
  invCentral: { fa: 'موجودی مواد و قطعات: انبار مرکزی', en: 'Materials inventory: Central Warehouse' },
  ppv: { fa: 'تفاوت قیمت خرید', en: 'Purchase price differences' },
  advances: { fa: 'پیش‌پرداخت به تأمین‌کنندگان', en: 'Advances to suppliers' },
  wht: { fa: 'مالیات تکلیفی پرداختنی', en: 'Withholding tax payable' },
  insRet: { fa: 'سپرده بیمه پیمانکاران پرداختنی', en: 'Contractor insurance retention payable' },
  perfRet: { fa: 'سپرده حسن انجام کار پرداختنی', en: 'Performance retention payable' },
  maintCS: {
    fa: 'هزینه تعمیر و نگهداری: ایستگاه تقویت فشار (CC-ARY-CMP)',
    en: 'Maintenance expense: compressor station (CC-ARY-CMP)',
  },
  apGulf: { fa: 'حساب‌های پرداختنی: لوله‌گستر خلیج', en: 'Accounts payable: Gulf Tubulars' },
  apAlborz: { fa: 'حساب‌های پرداختنی: خدمات چاه البرز', en: 'Accounts payable: Alborz Well Services' },
  apToos: { fa: 'حساب‌های پرداختنی: فن‌آوران کمپرسور توس', en: 'Accounts payable: Toos Compressor Technologies' },
  apKaveh: { fa: 'حساب‌های پرداختنی: شیمی حفاری کاوه', en: 'Accounts payable: Kaveh Drilling Chemicals' },
  apJonoub: { fa: 'حساب‌های پرداختنی: ترابری جنوب', en: 'Accounts payable: Jonoub Transport' },
  apArian: { fa: 'حساب‌های پرداختنی: بازرسی فنی آریان', en: 'Accounts payable: Arian Technical Inspection' },
}

const blank = { fa: '', en: '' }
const yes = { fa: 'بله', en: 'Yes' }
const no = { fa: 'خیر', en: 'No' }
const none = { fa: '-', en: '-' }

export const lesson: Lesson = {
  slug: 'invoice-verification-payment',
  number: 8,
  level: 'advanced',
  minutes: 28,
  icon: 'ReceiptText',
  tone: 'revenue',
  title: { fa: 'تطبیق فاکتور و پرداخت', en: 'Invoice Verification and Payment' },
  summary: {
    fa: 'هیچ فاکتوری نباید فقط به این دلیل پرداخت شود که رسیده است. در این درس تطبیق دوطرفه و سه‌طرفه، حد تحمل و انحراف قیمت و مقدار، فاکتورهای متوقف‌شده، تسویه GR/IR، مالیات بر ارزش افزوده و کسور قانونی و قراردادی، پیش‌پرداخت و سپرده‌ها، اجرای پرداخت و اسنادی را که هزینه را قابل بازیافت می‌کنند، با همه ثبت‌های حسابداری می‌آموزید.',
    en: 'No invoice should be paid just because it arrived. This lesson covers two-way and three-way matching, tolerances and price and quantity variances, blocked invoices, GR/IR clearing, VAT and statutory and contractual deductions, advances and retentions, payment runs, and the documents that make a cost recoverable, with every journal entry.',
  },
  objectives: [
    {
      fa: 'تطبیق دوطرفه و سه‌طرفه را انجام دهید و حد تحمل قیمت و مقدار را به کار ببرید.',
      en: 'Perform two-way and three-way matching and apply price and quantity tolerances.',
    },
    {
      fa: 'فاکتور را با مالیات بر ارزش افزوده ثبت کنید، حساب GR/IR را تسویه کنید و مانده‌های باز آن را تحلیل کنید.',
      en: 'Post invoices with VAT, clear the GR/IR account and analyse its open balances.',
    },
    {
      fa: 'فاکتورهای متوقف‌شده و انحراف‌های قیمت و مقدار را حل‌وفصل کنید.',
      en: 'Resolve blocked invoices and price and quantity variances.',
    },
    {
      fa: 'فاکتور پیمانکار را با مالیات تکلیفی، سپرده بیمه، سپرده حسن انجام کار و کسر پیش‌پرداخت پردازش کنید و پرداخت را اجرا کنید.',
      en: 'Process contractor invoices with withholding tax, insurance retention, performance retention and advance recovery, and execute payments.',
    },
    {
      fa: 'اسنادی را که یک هزینه را در قرارداد نفتی قابل بازیافت می‌کنند فهرست کنید.',
      en: 'List the documents that make a cost recoverable under the petroleum contract.',
    },
  ],
  sections: [
    {
      id: 'why-matching',
      title: { fa: 'چرا فاکتور را تطبیق می‌دهیم؟', en: 'Why We Match Invoices' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'فاکتور لوله‌گستر خلیج برای 180 شاخه لوله مغزی رسیده است: 72,000 به‌علاوه مالیات بر ارزش افزوده. کارمند تازه‌کار حساب‌های پرداختنی آن را ثبت و برای پرداخت آماده می‌کند. اما 6 شاخه از همین محموله معیوب بوده و مرجوع شده است؛ یعنی شرکت در آستانه پرداخت 2,640 (2,400 به‌علاوه 240 مالیات) بابت کالایی است که اصلاً ندارد. همان هفته، فاکتور حمل ترابری جنوب هم دو بار، یک بار با ایمیل و یک بار با پست، ثبت شده است. **تطبیق فاکتور** برای جلوگیری از همین اتفاق‌هاست.',
            en: 'Gulf Tubulars’ invoice for 180 tubing joints has arrived: 72,000 plus VAT. A new accounts payable clerk posts it and queues it for payment. But 6 joints from that shipment were defective and returned, so the company is about to pay 2,640 (2,400 plus 240 VAT) for goods it does not have. The same week, a Jonoub Transport freight invoice was posted twice, once from email and once from the post. **Invoice verification** exists to stop exactly this.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**تطبیق فاکتور** (Invoice Verification) یعنی پیش از آنکه فاکتور به بدهی قطعی و قابل پرداخت تبدیل شود، آن را با آنچه سفارش داده شده (سفارش خرید) و آنچه واقعاً دریافت شده (رسید کالا (GRN) یا برگه ثبت خدمات (SES)) مقایسه کنیم. جزئیات این دو سند در درس «رسید کالا (GRN) و برگه ثبت خدمات (SES)» آمده است. فقط اختلاف‌های کوچک و مجاز عبور می‌کنند؛ بقیه متوقف می‌شوند تا کسی آن‌ها را بررسی کند.',
            en: '**Invoice verification** means comparing an invoice with what was ordered (the PO) and what was actually received (the goods received note, GRN, or the service entry sheet, SES) before it becomes a confirmed, payable liability. Only small, allowed differences pass; everything else is blocked until someone investigates.',
          },
        },
        {
          type: 'diagram',
          id: 'p2p-flow',
          caption: {
            fa: 'دو گام آخر زنجیره تدارکات تا پرداخت: فاکتور GR/IR را تسویه و بدهی به تأمین‌کننده را ثبت می‌کند؛ پرداخت آن بدهی را با بانک تسویه می‌کند.',
            en: 'The last two steps of procure-to-pay: the invoice clears GR/IR and records the supplier liability; the payment settles it through the bank.',
          },
        },
        { type: 'h', text: { fa: 'فاکتور معتبر چه دارد؟', en: 'What makes an invoice valid?' } },
        {
          type: 'list',
          items: [
            {
              fa: 'نام قانونی و شناسه مالیاتی تأمین‌کننده، همان‌طور که در داده پایه تأمین‌کننده ثبت شده است.',
              en: 'The supplier’s legal name and tax ID, exactly as in the vendor master.',
            },
            {
              fa: 'شماره و تاریخ فاکتور، و **شماره سفارش خرید** و ردیف‌های آن.',
              en: 'Invoice number and date, plus the **PO number** and its lines.',
            },
            {
              fa: 'شرح، مقدار و قیمت واحد که با سفارش و رسید قابل مقایسه باشد.',
              en: 'Description, quantity and unit price that can be compared with the PO and receipt.',
            },
            {
              fa: 'مالیات بر ارزش افزوده به‌صورت جداگانه؛ در ایران، اعتبار مالیات خرید معمولاً به صدور صورتحساب الکترونیکی در **سامانه مؤدیان** بستگی دارد (قواعد روز را بررسی کنید).',
              en: 'VAT shown separately; in Iran, the input VAT credit generally depends on the seller issuing an electronic invoice in the **Taxpayers’ System** (check the current rules).',
            },
          ],
        },
      ],
    },
    {
      id: 'matching',
      title: { fa: 'تطبیق دوطرفه و سه‌طرفه، حد تحمل و انحراف‌ها', en: 'Two-Way and Three-Way Match, Tolerances and Variances' },
      blocks: [
        {
          type: 'compare',
          left: {
            title: { fa: 'تطبیق دوطرفه (Two-way)', en: 'Two-way match' },
            items: [
              { fa: 'فاکتور با سفارش خرید مقایسه می‌شود', en: 'Invoice compared with the PO' },
              { fa: 'رسید جداگانه‌ای لازم نیست', en: 'No separate receipt required' },
              {
                fa: 'برای سفارش باز کم‌مبلغ، آب و برق، اشتراک‌ها و مواردی که رسید عملی نیست',
                en: 'For low-value blanket POs, utilities, subscriptions and cases where a receipt is impractical',
              },
              { fa: 'سریع‌تر، اما کنترل ضعیف‌تر', en: 'Faster, but a weaker control' },
            ],
          },
          right: {
            title: { fa: 'تطبیق سه‌طرفه (Three-way)', en: 'Three-way match' },
            items: [
              { fa: 'فاکتور با سفارش و GRN (یا SES) مقایسه می‌شود', en: 'Invoice compared with the PO and the GRN (or SES)' },
              { fa: 'قیمت از سفارش، مقدار از GRN یا SES', en: 'Price from the PO, quantity from the GRN or SES' },
              { fa: 'استاندارد برای کالا و خدمات در شرکت نفتی', en: 'The standard for goods and services in an oil company' },
              {
                fa: 'برای اقلام بحرانی گاهی چهارطرفه: به‌علاوه تأیید بازرسی کیفیت',
                en: 'For critical items sometimes four-way: plus quality inspection approval',
              },
            ],
          },
        },
        {
          type: 'p',
          text: {
            fa: '**حد تحمل** (Tolerance) اختلاف کوچکی است که بدون دخالت انسان پذیرفته می‌شود؛ چون بررسی دستی هر اختلاف بسیار کوچک از خود اختلاف گران‌تر است. در مسار پترولیوم حد تحمل‌ها (فرضی) چنین‌اند: **قیمت** تا 2٪ بالاتر از قیمت سفارش در هر ردیف؛ **مقدار** فاکتور نباید از مقدار خالص رسیدشده بیشتر باشد. **انحراف قیمت** یعنی قیمت فاکتور با قیمت سفارش فرق دارد و **انحراف مقدار** یعنی مقدار فاکتور با مقدار رسیده فرق دارد.',
            en: 'A **tolerance** is a small difference accepted without human review, because manually checking every tiny difference costs more than the difference itself. Masar Petroleum’s illustrative tolerances: **price** up to 2% above the PO price per line; invoice **quantity** may not exceed the net quantity received. A **price variance** means the invoice price differs from the PO price; a **quantity variance** means the invoiced quantity differs from what was received.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'درصد انحراف قیمت = (قیمت فاکتور − قیمت سفارش) ÷ قیمت سفارش × 100',
            en: 'Price variance % = (invoice price − PO price) ÷ PO price × 100',
          },
          note: {
            fa: 'نمونه: (405 − 400) ÷ 400 × 100 = 1.25٪',
            en: 'Example: (405 − 400) ÷ 400 × 100 = 1.25%',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'چهار فاکتور فرضی برای `PO-45031` (قیمت سفارش 400؛ خالص رسید 174 شاخه؛ مبالغ بدون مالیات)',
            en: 'Four possible invoices for `PO-45031` (PO price 400; net received 174 joints; amounts before VAT)',
          },
          head: [
            { fa: 'حالت', en: 'Case' },
            { fa: 'فاکتور', en: 'Invoice' },
            { fa: 'مبلغ', en: 'Amount' },
            { fa: 'نتیجه کنترل', en: 'Check result' },
            { fa: 'تصمیم ERP', en: 'ERP decision' },
          ],
          rows: [
            [
              { fa: 'الف', en: 'A' },
              { fa: '174 × 400', en: '174 × 400' },
              69600,
              { fa: 'مقدار و قیمت منطبق', en: 'Quantity and price match' },
              { fa: 'ثبت و آزاد برای پرداخت', en: 'Posted, free for payment' },
            ],
            [
              { fa: 'ب', en: 'B' },
              { fa: '180 × 400', en: '180 × 400' },
              72000,
              { fa: '6 شاخه بیش از رسید', en: '6 joints more than received' },
              { fa: 'متوقف: انحراف مقدار', en: 'Blocked: quantity variance' },
            ],
            [
              { fa: 'ج', en: 'C' },
              { fa: '174 × 405', en: '174 × 405' },
              70470,
              { fa: 'قیمت 1.25٪ بالاتر؛ در حد تحمل', en: 'Price 1.25% higher; within tolerance' },
              { fa: 'ثبت؛ اختلاف 870 جذب می‌شود', en: 'Posted; the 870 difference is absorbed' },
            ],
            [
              { fa: 'د', en: 'D' },
              { fa: '174 × 412', en: '174 × 412' },
              71688,
              { fa: 'قیمت 3٪ بالاتر؛ خارج از حد تحمل', en: 'Price 3% higher; outside tolerance' },
              { fa: 'متوقف: انحراف قیمت', en: 'Blocked: price variance' },
            ],
          ],
          numericCols: [2],
        },
        {
          type: 'p',
          text: {
            fa: 'فاکتور **متوقف‌شده** (Blocked Invoice) ثبت می‌شود و بدهی آن دیده می‌شود، اما یک **قفل پرداخت** دارد و در اجرای پرداخت انتخاب نمی‌شود. حل آن چند گام دارد:',
            en: 'A **blocked invoice** is posted, so the liability is visible, but it carries a **payment block** and is skipped by the payment run. Resolving it takes a few steps:',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'اطلاع به خریدار', en: 'Notify the buyer' },
              text: {
                fa: 'ERP فاکتور را با دلیل توقف (قیمت، مقدار، نبود رسید) در کارتابل خریدار مسئول قرار می‌دهد.',
                en: 'The ERP routes the invoice, with the block reason (price, quantity, no receipt), to the responsible buyer’s worklist.',
              },
            },
            {
              title: { fa: 'بررسی با تأمین‌کننده و انبار', en: 'Check with the supplier and warehouse' },
              text: {
                fa: 'آیا کالای باقی‌مانده در راه است؟ آیا قیمت جدید توافق شده؟ یا فاکتور اشتباه است؟',
                en: 'Is the rest of the goods on the way? Was a new price agreed? Or is the invoice simply wrong?',
              },
            },
            {
              title: { fa: 'اصلاح ریشه اختلاف', en: 'Fix the root cause' },
              text: {
                fa: 'یا تأمین‌کننده **اعلامیه بستانکاری** (Credit Note) می‌دهد، یا سفارش با تأیید مجاز اصلاح می‌شود، یا با رسید بعدی مقدار کامل می‌شود.',
                en: 'Either the supplier issues a **credit note**, or the PO is amended with proper approval, or the next receipt completes the quantity.',
              },
            },
            {
              title: { fa: 'آزادسازی قفل', en: 'Release the block' },
              text: {
                fa: 'فرد مجاز (نه همان کسی که فاکتور را ثبت کرده) قفل را برمی‌دارد و فاکتور در اجرای بعدی پرداخت می‌شود.',
                en: 'An authorised person (not the one who posted the invoice) releases the block, and the invoice is paid in the next run.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: {
            fa: 'هرگز برای «رد کردن» فاکتور متوقف، رسید ساختگی ثبت نکنید یا حد تحمل را موقتاً بالا نبرید. هر دو کار کنترل را دور می‌زنند و در سابقه سیستم با نام کاربر شما ثبت می‌شوند.',
            en: 'Never post a fake receipt or temporarily raise the tolerance to “push through” a blocked invoice. Both bypass the control, and both are logged in the system under your user name.',
          },
        },
      ],
    },
    {
      id: 'erp-invoice-posting',
      title: { fa: 'در ERP: ثبت فاکتور و تسویه GR/IR', en: 'In the ERP: Invoice Posting and GR/IR Clearing' },
      blocks: [
        {
          type: 'table',
          head: [
            { fa: 'جزء', en: 'Element' },
            { fa: 'در ثبت فاکتور', en: 'At invoice posting' },
          ],
          rows: [
            [
              { fa: 'داده پایه', en: 'Master data' },
              {
                fa: 'تأمین‌کننده (شرایط پرداخت، حساب بانکی، کد مالیات بر ارزش افزوده، کد مالیات تکلیفی)، حد تحمل‌ها، حساب‌های دفتر کل مرتبط',
                en: 'Vendor (payment terms, bank account, VAT code, withholding code), tolerance settings, linked GL accounts',
              },
            ],
            [
              { fa: 'اسناد تراکنشی', en: 'Transaction documents' },
              {
                fa: 'فاکتور با ارجاع به سفارش، اعلامیه بستانکاری، سند پرداخت',
                en: 'Invoice referenced to the PO, credit note, payment document',
              },
            ],
            [
              { fa: 'نقش‌ها', en: 'Roles' },
              {
                fa: 'کارمند حساب‌های پرداختنی فاکتور را ثبت می‌کند؛ خریدار انحراف‌ها را حل می‌کند؛ فرد مجاز قفل را برمی‌دارد؛ خزانه‌داری پرداخت را اجرا می‌کند',
                en: 'The AP clerk posts invoices; the buyer resolves variances; an authorised person releases blocks; treasury executes payments',
              },
            ],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'هنگام ثبت فاکتور، ERP همان مبلغی را که هنگام GRN در GR/IR بستانکار کرده بود، بدهکار می‌کند و بدهی واقعی به تأمین‌کننده را در **حساب‌های پرداختنی** بستانکار می‌کند. مالیات بر ارزش افزوده قابل استرداد جداگانه بدهکار می‌شود. برای حالت الف (174 شاخه × 400):',
            en: 'At invoice posting, the ERP debits GR/IR with the same amount it credited at GRN, and credits the real liability to the supplier in **Accounts payable**. Recoverable VAT is debited separately. For case A (174 joints × 400):',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت خودکار فاکتور (حالت الف)', en: 'Automatic invoice posting (case A)' },
          entries: [
            {
              date: { fa: 'ثبت فاکتور لوله‌گستر خلیج', en: 'Gulf Tubulars invoice posted' },
              lines: [
                { account: ac.grir, debit: 69600 },
                { account: ac.inputVat, debit: 6960 },
                { account: ac.apGulf, credit: 76560 },
              ],
              memo: {
                fa: 'مالیات بر ارزش افزوده با نرخ فرضی 10٪: 69,600 × 10٪ = 6,960. نرخ رسمی را از قوانین روز بررسی کنید.',
                en: 'VAT at an illustrative 10%: 69,600 × 10% = 6,960. Check the official rate in current law.',
              },
            },
          ],
        },
        {
          type: 'tAccounts',
          title: { fa: 'حساب GR/IR برای `PO-45031` پس از GRN، مرجوعی و فاکتور', en: 'GR/IR for `PO-45031` after GRN, return and invoice' },
          accounts: [
            {
              name: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing account' },
              debits: [2400, 69600],
              credits: [72000],
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'مانده صفر است: مقدار و مبلغ رسیده با مقدار و مبلغ فاکتورشده برابر شده و GR/IR برای این سفارش **تسویه** شده است. اگر فاکتور حالت ج (قیمت 405) ثبت می‌شد، اختلاف 870 کجا می‌رفت؟ چون همه لوله‌ها هنوز در انبار میدان‌اند و کالا با **میانگین موزون متحرک** ارزش‌گذاری می‌شود، اختلاف به خود موجودی اضافه می‌شود. اگر بخشی از کالا مصرف شده بود، سهم آن به حساب تفاوت قیمت خرید می‌رفت؛ و در روش **قیمت استاندارد** کل اختلاف به حساب انحراف می‌رود.',
            en: 'The balance is zero: quantity and value received now equal quantity and value invoiced, so GR/IR is **cleared** for this PO. If the case C invoice (price 405) had been posted, where would the 870 difference go? Because all the pipe is still in the Field Warehouse and valued at **moving average**, the difference is added to inventory. Had part of the stock been used, that share would go to the purchase price differences account; under **standard price**, the whole difference goes to the variance account.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'اگر فاکتور با قیمت 405 بود (حالت ج)', en: 'If the invoice had been at 405 (case C)' },
          entries: [
            {
              lines: [
                { account: ac.grir, debit: 69600 },
                { account: ac.invField, debit: 870 },
                { account: ac.inputVat, debit: 7047 },
                { account: ac.apGulf, credit: 77517 },
              ],
              memo: {
                fa: '174 × 5 = 870 به موجودی؛ مالیات 70,470 × 10٪ = 7,047.',
                en: '174 × 5 = 870 to inventory; VAT 70,470 × 10% = 7,047.',
              },
            },
          ],
        },
        { type: 'h', text: { fa: 'تحلیل مانده GR/IR در پایان دوره', en: 'Analysing GR/IR at period end' } },
        {
          type: 'table',
          caption: { fa: 'اقلام باز GR/IR در پایان ماه (نمونه)', en: 'Open GR/IR items at month end (sample)' },
          head: [
            { fa: 'سفارش', en: 'PO' },
            { fa: 'رسیده', en: 'Received' },
            { fa: 'فاکتورشده', en: 'Invoiced' },
            { fa: 'مانده', en: 'Balance' },
            { fa: 'معنا و اقدام', en: 'Meaning and action' },
          ],
          rows: [
            [
              { fa: '`PO-45026` کیت تعمیر سوپاپ', en: '`PO-45026` valve repair kits' },
              30000,
              0,
              { fa: 'بستانکار 30,000', en: 'Cr 30,000' },
              {
                fa: 'رسیده، فاکتور نشده: بدهی تحقق‌یافته است و در ترازنامه بدهی می‌ماند؛ فاکتور را از تأمین‌کننده پیگیری کنید',
                en: 'Received, not invoiced: an accrued liability that stays in the balance sheet; chase the supplier for the invoice',
              },
            ],
            [
              { fa: 'فراخوان شیمیایی AR-12', en: 'AR-12 chemicals call-off' },
              0,
              12000,
              { fa: 'بدهکار 12,000', en: 'Dr 12,000' },
              {
                fa: 'فاکتورشده، نرسیده: کالا در راه است یا رسید ثبت نشده؛ با انبار میدان بررسی کنید',
                en: 'Invoiced, not received: goods in transit or a missing receipt; check with the Field Warehouse',
              },
            ],
            [
              { fa: '`PO-44310` (14 ماه پیش)', en: '`PO-44310` (14 months old)' },
              5000,
              4700,
              { fa: 'بستانکار 300', en: 'Cr 300' },
              {
                fa: 'اختلاف قدیمی: بررسی و با تأیید مجاز تسویه دستی کنید؛ مانده‌های کهنه نشانه ضعف کنترل‌اند',
                en: 'Old difference: investigate and clear manually with approval; stale balances signal a weak control',
              },
            ],
          ],
          numericCols: [1, 2],
        },
        {
          type: 'callout',
          tone: 'tip',
          text: {
            fa: 'GR/IR را هر ماه تحلیل کنید، نه فقط در پایان سال. مانده بستانکار یعنی بدهی ثبت‌شده‌ای که هنوز فاکتور ندارد؛ مانده بدهکار یعنی فاکتوری که کالایش هنوز دیده نشده است. هر دو باید توضیح داشته باشند.',
            en: 'Analyse GR/IR every month, not only at year end. A credit balance is a recorded liability still awaiting an invoice; a debit balance is an invoice whose goods have not been seen. Both need an explanation.',
          },
        },
      ],
    },
    {
      id: 'taxes-deductions',
      title: { fa: 'مالیات و کسور روی فاکتور پیمانکار', en: 'Taxes and Deductions on Contractor Invoices' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'فاکتور خرید کالا معمولاً ساده است: مبلغ به‌علاوه مالیات بر ارزش افزوده. اما در **قرارداد پیمانکاری** (خدمات و کار)، کارفرما طبق قانون و قرارداد چند مبلغ را از هر صورت‌وضعیت کسر می‌کند و فقط خالص را می‌پردازد. همه نرخ‌های این بخش **فرضی‌اند**؛ نرخ‌ها و قواعد رسمی را از قوانین و مقررات روز بررسی کنید.',
            en: 'An invoice for goods is usually simple: amount plus VAT. Under a **contracting agreement** (services and works), however, the employer deducts several amounts from each progress statement by law and contract and pays only the net. All rates in this section are **illustrative**; check official rates and rules in current law.',
          },
        },
        {
          type: 'table',
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'چیست', en: 'What it is' },
            { fa: 'نرخ فرضی', en: 'Illustrative rate' },
          ],
          rows: [
            [
              { fa: 'مالیات بر ارزش افزوده', en: 'VAT' },
              {
                fa: 'به مبلغ فاکتور اضافه می‌شود؛ برای خریدار اعتبار مالیاتی است، نه هزینه',
                en: 'Added to the invoice; a tax credit for the buyer, not a cost',
              },
              { fa: '10٪', en: '10%' },
            ],
            [
              { fa: 'مالیات تکلیفی', en: 'Withholding tax' },
              {
                fa: 'کارفرما بخشی از مالیات پیمانکار را کسر و به سازمان امور مالیاتی می‌پردازد',
                en: 'The employer deducts part of the contractor’s income tax and pays it to the tax authority',
              },
              { fa: '3٪', en: '3%' },
            ],
            [
              { fa: 'سپرده بیمه', en: 'Insurance retention' },
              {
                fa: 'نگه داشته می‌شود تا پیمانکار مفاصاحساب بیمه تأمین اجتماعی ارائه کند',
                en: 'Held until the contractor presents its social security clearance certificate',
              },
              { fa: '5٪', en: '5%' },
            ],
            [
              { fa: 'سپرده حسن انجام کار', en: 'Performance retention' },
              {
                fa: 'تضمین کیفیت کار؛ پس از تحویل قطعی یا پایان دوره تضمین آزاد می‌شود',
                en: 'Security for quality; released after final acceptance or the end of the defects period',
              },
              { fa: '10٪', en: '10%' },
            ],
            [
              { fa: 'کسر پیش‌پرداخت', en: 'Advance recovery' },
              {
                fa: 'پیش‌پرداخت قبلی به نسبت از هر صورت‌وضعیت مستهلک می‌شود',
                en: 'The earlier advance is recovered pro rata from each statement',
              },
              { fa: 'هم‌نسبت پیش‌پرداخت، مثلاً 20٪', en: 'Same as the advance ratio, e.g. 20%' },
            ],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'قرارداد سیمان‌کاری خدمات چاه البرز 120,000 است و مسار پترولیوم در شروع کار 20٪ آن، یعنی 24,000، را در برابر ضمانت‌نامه پیش‌پرداخت پرداخته است. اکنون فاکتور صورت‌وضعیت سیمان‌کاری جداری سطحی AR-11 (SES پذیرفته‌شده 45,000) رسیده است. در این مثال کسور روی مبلغ پیش از مالیات بر ارزش افزوده محاسبه می‌شوند:',
            en: 'The Alborz Well Services cementing contract is worth 120,000, and at the start Masar Petroleum paid 20% of it, 24,000, against an advance-payment guarantee. Now the invoice for the AR-11 surface casing cementing (accepted SES 45,000) has arrived. In this example deductions are calculated on the amount before VAT:',
          },
        },
        {
          type: 'table',
          caption: { fa: 'محاسبه خالص قابل پرداخت به خدمات چاه البرز', en: 'Net payable to Alborz Well Services' },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'محاسبه', en: 'Calculation' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          rows: [
            [{ fa: 'کار انجام‌شده (SES)', en: 'Work done (SES)' }, blank, 45000],
            [{ fa: 'مالیات بر ارزش افزوده', en: 'VAT' }, { fa: '45,000 × 10٪', en: '45,000 × 10%' }, 4500],
            [{ fa: 'جمع فاکتور', en: 'Invoice total' }, blank, 49500],
            [{ fa: 'کسر: پیش‌پرداخت', en: 'Less: advance recovery' }, { fa: '45,000 × 20٪', en: '45,000 × 20%' }, 9000],
            [{ fa: 'کسر: مالیات تکلیفی', en: 'Less: withholding tax' }, { fa: '45,000 × 3٪', en: '45,000 × 3%' }, 1350],
            [{ fa: 'کسر: سپرده بیمه', en: 'Less: insurance retention' }, { fa: '45,000 × 5٪', en: '45,000 × 5%' }, 2250],
            [{ fa: 'کسر: سپرده حسن انجام کار', en: 'Less: performance retention' }, { fa: '45,000 × 10٪', en: '45,000 × 10%' }, 4500],
            [{ fa: 'خالص قابل پرداخت', en: 'Net payable' }, { fa: '49,500 − 17,100', en: '49,500 − 17,100' }, 32400],
          ],
          numericCols: [2],
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های فاکتور، کسور و پرداخت', en: 'Invoice, deductions and payment entries' },
          entries: [
            {
              date: { fa: 'شروع قرارداد', en: 'Contract start' },
              lines: [
                { account: ac.advances, debit: 24000 },
                { account: ac.bank, credit: 24000 },
              ],
              memo: {
                fa: 'پیش‌پرداخت 20٪ از 120,000 در برابر ضمانت‌نامه؛ دارایی است، نه هزینه.',
                en: '20% advance on 120,000 against a guarantee; an asset, not a cost.',
              },
            },
            {
              date: { fa: 'ثبت فاکتور', en: 'Invoice posted' },
              lines: [
                { account: ac.grir, debit: 45000 },
                { account: ac.inputVat, debit: 4500 },
                { account: ac.apAlborz, credit: 49500 },
              ],
              memo: { fa: 'تطبیق سه‌طرفه با SES 45,000.', en: 'Three-way matched with the 45,000 SES.' },
            },
            {
              date: { fa: 'کسور', en: 'Deductions' },
              lines: [
                { account: ac.apAlborz, debit: 17100 },
                { account: ac.advances, credit: 9000 },
                { account: ac.wht, credit: 1350 },
                { account: ac.insRet, credit: 2250 },
                { account: ac.perfRet, credit: 4500 },
              ],
              memo: {
                fa: 'بدهی به پیمانکار کم و بدهی به سازمان مالیاتی و سپرده‌ها ایجاد می‌شود. برخی ERPها مالیات تکلیفی را هنگام پرداخت ثبت می‌کنند.',
                en: 'The debt to the contractor falls; liabilities to the tax office and retentions arise. Some ERPs post withholding at payment instead.',
              },
            },
            {
              date: { fa: 'پرداخت', en: 'Payment' },
              lines: [
                { account: ac.apAlborz, debit: 32400 },
                { account: ac.bank, credit: 32400 },
              ],
              memo: { fa: 'مانده حساب پیمانکار صفر می‌شود.', en: 'The contractor’s account is now zero.' },
            },
            {
              date: { fa: 'واریز به سازمان امور مالیاتی', en: 'Paid to the tax authority' },
              lines: [
                { account: ac.wht, debit: 1350 },
                { account: ac.bank, credit: 1350 },
              ],
              memo: {
                fa: 'در مهلت قانونی و با گواهی کسر مالیات برای پیمانکار.',
                en: 'Within the legal deadline, with a withholding certificate for the contractor.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در ایران، کسر مالیات تکلیفی از پرداخت‌های پیمانکاری در قانون مالیات‌های مستقیم پیش‌بینی شده و نگهداری سپرده بیمه تا ارائه مفاصاحساب سازمان تأمین اجتماعی رویه‌ای قانونی و رایج است. سپرده حسن انجام کار هم در بسیاری از پیمان‌ها دیده می‌شود. اگر کارفرما مالیات یا بیمه را کسر نکند، ممکن است خودش مسئول پرداخت آن شود؛ پس نرخ‌ها، مبنای محاسبه و مهلت‌ها را هر سال از مقررات روز بررسی کنید.',
            en: 'In Iran, withholding tax on contractor payments is provided for in the Direct Taxes Act, and holding an insurance retention until the Social Security Organization issues a clearance is a legal and common practice. Performance retentions appear in many contracts too. If the employer fails to withhold tax or insurance it may become liable for them itself, so check rates, bases and deadlines in current regulations every year.',
          },
        },
      ],
    },
    {
      id: 'advances-payments',
      title: { fa: 'پیش‌پرداخت، آزادسازی سپرده‌ها و اجرای پرداخت', en: 'Advances, Retention Release and Payment Runs' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**پیش‌پرداخت** فقط در برابر ضمانت‌نامه بانکی معتبر هم‌مبلغ پرداخت می‌شود و تا وقتی از صورت‌وضعیت‌ها کسر نشده، **دارایی** شرکت است. پس از کسر 9,000 در صورت‌وضعیت اول، مانده پیش‌پرداخت البرز 24,000 − 9,000 = 15,000 است و ضمانت‌نامه را می‌توان به همین مبلغ کاهش داد. **سپرده‌ها** بدهی شرکت به پیمانکارند و وقتی شرط آزادسازی برقرار شود پرداخت می‌شوند:',
            en: 'An **advance** is paid only against a valid bank guarantee of the same amount, and until it is recovered from statements it is a company **asset**. After recovering 9,000 on the first statement, Alborz’s advance balance is 24,000 − 9,000 = 15,000, and the guarantee can be reduced to that amount. **Retentions** are amounts the company owes the contractor, paid when the release condition is met:',
          },
        },
        {
          type: 'journal',
          title: { fa: 'آزادسازی سپرده‌ها (بعداً)', en: 'Releasing retentions (later)' },
          entries: [
            {
              date: { fa: 'ارائه مفاصاحساب بیمه', en: 'Insurance clearance presented' },
              lines: [
                { account: ac.insRet, debit: 2250 },
                { account: ac.bank, credit: 2250 },
              ],
            },
            {
              date: { fa: 'تحویل قطعی کار', en: 'Final acceptance' },
              lines: [
                { account: ac.perfRet, debit: 4500 },
                { account: ac.bank, credit: 4500 },
              ],
            },
          ],
        },
        { type: 'h', text: { fa: 'اجرای پرداخت (Payment Run)', en: 'The payment run' } },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'تعیین پارامترها', en: 'Set parameters' },
              text: {
                fa: 'تاریخ اجرا، تاریخ اجرای بعدی، روش‌های پرداخت و گروه تأمین‌کنندگان.',
                en: 'Run date, next run date, payment methods and the vendor range.',
              },
            },
            {
              title: { fa: 'پیشنهاد پرداخت', en: 'Payment proposal' },
              text: {
                fa: 'ERP اقلام باز، بدون قفل و سررسیدشده تا پیش از اجرای بعدی را انتخاب می‌کند.',
                en: 'The ERP selects open, unblocked items falling due before the next run.',
              },
            },
            {
              title: { fa: 'بازبینی', en: 'Review' },
              text: {
                fa: 'حساب‌های پرداختنی و خزانه‌داری اقلام مورد اختلاف و تأمین‌کنندگانی را که حساب بانکی‌شان تازه تغییر کرده بررسی می‌کنند.',
                en: 'AP and treasury check disputed items and any vendor whose bank account changed recently.',
              },
            },
            {
              title: { fa: 'تأیید', en: 'Approval' },
              text: {
                fa: 'صاحبان امضای مجاز طبق نمونه امضای بانک (معمولاً دو امضا) تأیید می‌کنند.',
                en: 'Authorised signatories approve per the bank mandate (usually two signatures).',
              },
            },
            {
              title: { fa: 'اجرا و ثبت', en: 'Execute and post' },
              text: {
                fa: 'ERP سند پرداخت (بدهکار حساب‌های پرداختنی، بستانکار بانک) و دستور پرداخت بانکی را می‌سازد.',
                en: 'The ERP posts the payment document (debit AP, credit Bank) and creates the bank instruction.',
              },
            },
            {
              title: { fa: 'مغایرت‌گیری بانکی', en: 'Bank reconciliation' },
              text: {
                fa: 'پرداخت‌ها با صورتحساب بانک تطبیق داده می‌شوند.',
                en: 'Payments are matched to the bank statement.',
              },
            },
          ],
        },
        {
          type: 'table',
          caption: {
            fa: 'پیشنهاد پرداخت: تاریخ اجرا روز 12، اجرای بعدی روز 19',
            en: 'Payment proposal: run on day 12, next run on day 19',
          },
          head: [
            { fa: 'فاکتور', en: 'Invoice' },
            { fa: 'تأمین‌کننده', en: 'Supplier' },
            { fa: 'مبلغ', en: 'Amount' },
            { fa: 'سررسید (روز)', en: 'Due (day)' },
            { fa: 'قفل', en: 'Block' },
            { fa: 'در این اجرا؟', en: 'In this run?' },
          ],
          rows: [
            [{ fa: 'INV-7701', en: 'INV-7701' }, { fa: 'فن‌آوران کمپرسور توس', en: 'Toos Compressor Technologies' }, 3300, 10, none, yes],
            [{ fa: 'INV-7702', en: 'INV-7702' }, { fa: 'لوله‌گستر خلیج', en: 'Gulf Tubulars' }, 79200, 14, { fa: 'مقدار', en: 'Quantity' }, no],
            [{ fa: 'INV-7703', en: 'INV-7703' }, { fa: 'شیمی حفاری کاوه', en: 'Kaveh Drilling Chemicals' }, 49500, 25, none, no],
            [{ fa: 'INV-7704', en: 'INV-7704' }, { fa: 'خدمات چاه البرز', en: 'Alborz Well Services' }, 32400, 15, none, yes],
            [{ fa: 'INV-7705', en: 'INV-7705' }, { fa: 'ترابری جنوب', en: 'Jonoub Transport' }, 2750, 8, none, yes],
            [{ fa: 'جمع پرداخت', en: 'Total paid' }, blank, 38450, blank, blank, blank],
          ],
          numericCols: [2, 3],
        },
        {
          type: 'journal',
          title: { fa: 'سند خودکار اجرای پرداخت', en: 'Automatic payment run posting' },
          entries: [
            {
              date: { fa: 'روز 12', en: 'Day 12' },
              lines: [
                { account: ac.apToos, debit: 3300 },
                { account: ac.apAlborz, debit: 32400 },
                { account: ac.apJonoub, debit: 2750 },
                { account: ac.bank, credit: 38450 },
              ],
              memo: {
                fa: 'INV-7702 به دلیل قفل مقدار و INV-7703 چون پس از اجرای بعدی سررسید می‌شود، کنار گذاشته شدند.',
                en: 'INV-7702 was left out for its quantity block, and INV-7703 because it falls due after the next run.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در ایران پرداخت به تأمین‌کنندگان معمولاً با انتقال بانکی (ساتنا یا پایا) یا چک انجام می‌شود و چک‌ها باید در سامانه صیاد ثبت شوند. در قراردادهای ارزی، پرداخت از طریق بانک عامل یا اعتبار اسنادی انجام می‌شود و تفاوت نرخ ارز میان تاریخ فاکتور و پرداخت به سود و زیان تسعیر ارز می‌رود.',
            en: 'In Iran, suppliers are usually paid by bank transfer (SATNA or PAYA) or by cheque, and cheques must be registered in the Sayad system. In foreign-currency contracts, payment goes through the paying bank or a letter of credit, and the exchange difference between invoice and payment dates goes to foreign-exchange gain or loss.',
          },
        },
      ],
    },
    {
      id: 'recoverable',
      title: { fa: 'اسنادی که هزینه را قابل بازیافت می‌کنند', en: 'The Documents That Make a Cost Recoverable' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در قرارداد نفتی، چه قرارداد مشارکت در تولید باشد، چه بیع متقابل یا IPC، پیمانکار هزینه‌هایش را فقط وقتی پس می‌گیرد که حسابرس دولت یا شرکا آن‌ها را **قابل بازیافت** بداند. حسابرس از رقم صورت هزینه شروع می‌کند و به عقب می‌رود تا به سند اولیه برسد. اگر یک حلقه زنجیره نباشد، هزینه ممکن است رد شود:',
            en: 'Under a petroleum contract, whether a production sharing contract, a buy-back or an IPC, the contractor recovers its costs only if the government’s or partners’ auditor accepts them as **recoverable**. The auditor starts from the figure in the cost statement and works backwards to the source document. If one link in the chain is missing, the cost may be disallowed:',
          },
        },
        {
          type: 'table',
          head: [
            { fa: 'سند', en: 'Document' },
            { fa: 'چه چیزی را ثابت می‌کند', en: 'What it proves' },
          ],
          rows: [
            [{ fa: 'AFE یا بودجه مصوب (و تأیید شرکا یا دولت در صورت لزوم)', en: 'Approved AFE or budget (and partner or government approval where required)' }, { fa: 'هزینه مجاز بوده است', en: 'The spending was authorised' }],
            [{ fa: 'درخواست خرید با توجیه', en: 'Purchase requisition with justification' }, { fa: 'نیاز عملیاتی واقعی وجود داشته است', en: 'There was a real operational need' }],
            [{ fa: 'استعلام‌ها، پیشنهادها و ارزیابی؛ یا توجیه مصوب خرید انحصاری', en: 'RFQs, bids and evaluation; or an approved sole-source justification' }, { fa: 'قیمت رقابتی و منصفانه بوده است', en: 'The price was competitive and fair' }],
            [{ fa: 'سفارش یا قرارداد تأییدشده طبق DOA', en: 'PO or contract approved per DOA' }, { fa: 'قیمت و شرایط با اختیار مجاز توافق شده است', en: 'Price and terms were agreed with proper authority' }],
            [{ fa: 'IRN و گواهی‌ها', en: 'IRN and certificates' }, { fa: 'کیفیت طبق مشخصات بوده است', en: 'Quality met the specification' }],
            [{ fa: 'رسید کالا (GRN)، یا برگه ثبت خدمات (SES) پذیرفته‌شده با برگه‌های کارکرد روزانه امضاشده', en: 'GRN, or accepted SES with signed daily field tickets' }, { fa: 'کالا یا خدمت واقعاً دریافت شده است', en: 'The goods or service were actually received' }],
            [{ fa: 'فاکتور معتبر مالیاتی', en: 'Valid tax invoice' }, { fa: 'مبلغ مطالبه‌شده و اعتبار مالیاتی', en: 'The amount claimed and the tax credit' }],
            [{ fa: 'سند پرداخت بانکی', en: 'Bank payment record' }, { fa: 'مبلغ واقعاً پرداخت‌شده، پس از کسر خسارت‌ها و اعلامیه‌های بستانکاری', en: 'The amount actually paid, after LDs and credit notes' }],
            [{ fa: 'کد موضوع هزینه روی همه اسناد', en: 'Cost object on every document' }, { fa: 'هزینه به چاه، AFE یا مرکز هزینه درست رفته است', en: 'The cost went to the right well, AFE or cost centre' }],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'معمولاً غیرقابل بازیافت', en: 'Commonly not recoverable' },
          text: {
            fa: 'فهرست دقیق را رویه حسابداری قرارداد تعیین می‌کند، اما این موارد معمولاً رد می‌شوند: هزینه بدون سند یا بدون تأیید؛ پرداخت تکراری؛ مبالغی که تأمین‌کننده بعداً برگردانده (اعلامیه بستانکاری، خسارت تأخیر) اما از ادعا کم نشده؛ ردیف‌هایی که طبق قرارداد قابل مطالبه نبوده‌اند؛ جریمه‌ها و خسارت‌های ناشی از قصور خود پیمانکار؛ و مالیات بر ارزش افزوده قابل استرداد، چون اصلاً هزینه نیست.',
            en: 'The contract’s accounting procedure sets the exact list, but these are commonly rejected: costs without documents or approval; duplicate payments; amounts later returned by the supplier (credit notes, LDs) but not deducted from the claim; lines that were not chargeable under the contract; fines and damages caused by the contractor’s own default; and recoverable VAT, which is not a cost at all.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          text: {
            fa: 'در فاکتور البرز، هزینه سیمان‌کاری روی `AFE-2025-014.02.03` همان 45,000 است: نه 49,500 (چون مالیات بر ارزش افزوده هزینه نیست) و نه 32,400 (چون کسور فقط بخشی از بدهی به پیمانکار را به سازمان مالیاتی، سپرده‌ها و تسویه پیش‌پرداخت منتقل کرده‌اند). اینکه قرارداد هزینه را هنگام وقوع یا هنگام پرداخت قابل بازیافت بداند، به رویه حسابداری همان قرارداد بستگی دارد.',
            en: 'On the Alborz invoice, the cementing cost on `AFE-2025-014.02.03` is 45,000: not 49,500 (VAT is not a cost) and not 32,400 (the deductions only redirect part of the debt to the tax office, retentions and the advance). Whether the contract recognises the cost when incurred or when paid depends on its own accounting procedure.',
          },
        },
      ],
    },
    {
      id: 'practice',
      title: { fa: 'اشتباه‌های رایج و تمرین', en: 'Common Mistakes and Practice' },
      blocks: [
        { type: 'h', text: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' } },
        {
          type: 'list',
          items: [
            {
              fa: '**پرداخت بر اساس فاکتور تنها**: بدون GRN یا SES. راه درست: تطبیق سه‌طرفه برای همه کالاها و خدمات، مگر موارد مصوب تطبیق دوطرفه.',
              en: '**Paying on the invoice alone**: with no GRN or SES. Fix: three-way match for all goods and services except approved two-way cases.',
            },
            {
              fa: '**ثبت فاکتور تکراری**: همان فاکتور از دو مسیر. راه درست: کنترل خودکار تکرار بر اساس تأمین‌کننده، شماره فاکتور، تاریخ و مبلغ.',
              en: '**Duplicate invoices**: the same invoice from two channels. Fix: an automatic duplicate check on vendor, invoice number, date and amount.',
            },
            {
              fa: '**مالیات بر ارزش افزوده به‌عنوان هزینه**: افزودن مالیات قابل استرداد به هزینه چاه. راه درست: حساب مالیات بر ارزش افزوده خرید جداگانه.',
              en: '**VAT treated as cost**: adding recoverable VAT to the well cost. Fix: a separate Input VAT account.',
            },
            {
              fa: '**فراموش کردن کسور قانونی**: پرداخت کامل به پیمانکار بدون کسر مالیات تکلیفی و بیمه، که کارفرما را مسئول می‌کند. راه درست: کدهای کسر در داده پایه تأمین‌کننده.',
              en: '**Forgetting statutory deductions**: paying the contractor in full without withholding tax and insurance, which makes the employer liable. Fix: deduction codes in the vendor master.',
            },
            {
              fa: '**پیش‌پرداخت بدون پیگیری**: پیش‌پرداخت داده می‌شود ولی از صورت‌وضعیت‌ها کسر نمی‌شود. راه درست: کسر خودکار به نسبت و تطبیق ماهانه با مبلغ ضمانت‌نامه.',
              en: '**Untracked advances**: advances paid but never recovered from statements. Fix: automatic pro-rata recovery and a monthly check against the guarantee amount.',
            },
            {
              fa: '**GR/IR رهاشده**: مانده‌های کهنه که کسی بررسی نمی‌کند. راه درست: تحلیل ماهانه و تسویه مستند با تأیید.',
              en: '**Neglected GR/IR**: stale balances nobody reviews. Fix: monthly analysis and documented, approved clearing.',
            },
          ],
        },
        {
          type: 'exercise',
          title: { fa: 'تمرین 1: ثبت کنیم یا متوقف؟', en: 'Exercise 1: Post or block?' },
          difficulty: 'easy',
          problem: {
            fa: 'با حد تحمل فرضی مسار پترولیوم (قیمت تا 2٪ بالاتر؛ مقدار فاکتور حداکثر برابر خالص رسید)، تصمیم ERP را برای هر فاکتور تعیین کنید. فاکتور د روی سفارش باز با تطبیق دوطرفه است و مانده سقف آن 3,450 است.',
            en: 'Using Masar Petroleum’s illustrative tolerances (price up to 2% higher; invoice quantity at most the net received), decide what the ERP does with each invoice. Invoice d is on a blanket PO with a two-way match and 3,450 of its limit remaining.',
          },
          given: {
            head: [
              { fa: 'فاکتور', en: 'Invoice' },
              { fa: 'سفارش', en: 'PO' },
              { fa: 'رسید', en: 'Receipt' },
              { fa: 'فاکتور', en: 'Invoice' },
            ],
            rows: [
              [{ fa: 'الف: باریت، شیمی حفاری کاوه', en: 'a: barite, Kaveh Drilling Chemicals' }, { fa: '260 هر تن', en: '260 per tonne' }, { fa: '100 تن', en: '100 t' }, { fa: '100 تن × 260', en: '100 t × 260' }],
              [{ fa: 'ب: رینگ پیستون، فن‌آوران کمپرسور توس', en: 'b: piston rings, Toos Compressor Technologies' }, { fa: '300 هر دست', en: '300 per set' }, { fa: '60 دست', en: '60 sets' }, { fa: '60 × 312', en: '60 × 312' }],
              [{ fa: 'ج: لوله مغزی، لوله‌گستر خلیج', en: 'c: tubing, Gulf Tubulars' }, { fa: '400 هر شاخه', en: '400 per joint' }, { fa: '120 شاخه', en: '120 joints' }, { fa: '126 × 400', en: '126 × 400' }],
              [{ fa: 'د: حمل، ترابری جنوب', en: 'd: transport, Jonoub Transport' }, { fa: 'سفارش باز', en: 'Blanket PO' }, { fa: 'لازم نیست', en: 'Not required' }, { fa: '2,750', en: '2,750' }],
            ],
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'فاکتور', en: 'Invoice' },
                { fa: 'کنترل', en: 'Check' },
                { fa: 'تصمیم', en: 'Decision' },
              ],
              rows: [
                [{ fa: 'الف', en: 'a' }, { fa: 'قیمت و مقدار منطبق', en: 'Price and quantity match' }, { fa: 'ثبت و آزاد', en: 'Post, free for payment' }],
                [{ fa: 'ب', en: 'b' }, { fa: '(312 − 300) ÷ 300 = 4٪ بیش از حد تحمل 2٪', en: '(312 − 300) ÷ 300 = 4%, above the 2% tolerance' }, { fa: 'متوقف: قیمت', en: 'Block: price' }],
                [{ fa: 'ج', en: 'c' }, { fa: '126 شاخه فاکتور شده، اما فقط 120 رسیده', en: '126 joints invoiced but only 120 received' }, { fa: 'متوقف: مقدار', en: 'Block: quantity' }],
                [{ fa: 'د', en: 'd' }, { fa: 'تطبیق دوطرفه؛ 2,750 کمتر از مانده 3,450', en: 'Two-way match; 2,750 is within the 3,450 remaining' }, { fa: 'ثبت و آزاد', en: 'Post, free for payment' }],
              ],
            },
          ],
          answer: {
            fa: 'الف و د ثبت می‌شوند؛ ب با انحراف قیمت 4٪ و ج با انحراف مقدار 6 شاخه متوقف می‌شوند.',
            en: 'a and d are posted; b is blocked for a 4% price variance and c for a 6-joint quantity variance.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تمرین 2: انحراف قیمت در حد تحمل با مصرف جزئی', en: 'Exercise 2: In-tolerance price variance with partial consumption' },
          difficulty: 'medium',
          problem: {
            fa: 'سفارش `PO-45026`: 40 کیت تعمیر سوپاپ × 750 = 30,000؛ هر 40 کیت رسیده و در انبار مرکزی با میانگین موزون متحرک ارزش‌گذاری شده‌اند. تا زمان رسیدن فاکتور، 10 کیت به دستور کارهای کمپرسور حواله شده است. فاکتور: 40 × 760 به‌علاوه مالیات بر ارزش افزوده 10٪ (فرضی). (الف) آیا فاکتور ثبت می‌شود؟ (ب) ثبت خودکار آن را بنویسید.',
            en: '`PO-45026`: 40 valve repair kits × 750 = 30,000; all 40 were received into the Central Warehouse at moving average. By the time the invoice arrives, 10 kits have been issued to compressor work orders. Invoice: 40 × 760 plus 10% VAT (illustrative). (a) Is the invoice posted? (b) Write its automatic entry.',
          },
          hint: {
            fa: 'اختلاف قیمت را به نسبت کالای موجود و مصرف‌شده تقسیم کنید.',
            en: 'Split the price difference between stock still on hand and stock already used.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'حد تحمل', en: 'Tolerance' },
                  text: {
                    fa: '(760 − 750) ÷ 750 = 1.33٪ که کمتر از 2٪ است؛ فاکتور ثبت و آزاد می‌شود.',
                    en: '(760 − 750) ÷ 750 = 1.33%, below 2%; the invoice is posted and free for payment.',
                  },
                },
                {
                  title: { fa: 'مبالغ', en: 'Amounts' },
                  text: {
                    fa: 'مبلغ فاکتور 40 × 760 = 30,400؛ مالیات 3,040؛ جمع 33,440. اختلاف کل 40 × 10 = 400.',
                    en: 'Invoice 40 × 760 = 30,400; VAT 3,040; total 33,440. Total difference 40 × 10 = 400.',
                  },
                },
                {
                  title: { fa: 'تقسیم اختلاف', en: 'Split the difference' },
                  text: {
                    fa: '30 کیت هنوز در انبار است: 30 × 10 = 300 به موجودی. 10 کیت مصرف شده: 10 × 10 = 100 به حساب تفاوت قیمت خرید.',
                    en: '30 kits are still in stock: 30 × 10 = 300 to inventory. 10 kits were used: 10 × 10 = 100 to purchase price differences.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'ثبت فاکتور', en: 'Invoice posted' },
                  lines: [
                    { account: ac.grir, debit: 30000 },
                    { account: ac.invCentral, debit: 300 },
                    { account: ac.ppv, debit: 100 },
                    { account: ac.inputVat, debit: 3040 },
                    { account: ac.apToos, credit: 33440 },
                  ],
                  memo: {
                    fa: 'GR/IR با همان 30,000 رسید تسویه می‌شود.',
                    en: 'GR/IR is cleared with the same 30,000 as the GRN.',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: 'ثبت می‌شود (1.33٪)؛ بدهکار GR/IR 30,000، موجودی 300، انحراف قیمت 100، مالیات 3,040؛ بستانکار حساب‌های پرداختنی 33,440.',
            en: 'Posted (1.33%); Dr GR/IR 30,000, Inventory 300, Price variance 100, Input VAT 3,040; Cr Accounts payable 33,440.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تمرین 3: پیشنهاد پرداخت', en: 'Exercise 3: The payment proposal' },
          difficulty: 'medium',
          problem: {
            fa: 'اجرای پرداخت در روز 20 است و اجرای بعدی روز 27. ERP اقلام باز، بدون قفل و سررسیدشده تا پیش از روز 27 را انتخاب می‌کند. حساب بانکی ترابری جنوب دیروز تغییر کرده و تا تأیید تلفنی، قفل پرداخت دارد. کدام فاکتورها پرداخت می‌شوند، جمع آن‌ها چقدر است و سند پرداخت چیست؟',
            en: 'The payment run is on day 20 and the next run on day 27. The ERP selects open, unblocked items due before day 27. Jonoub Transport’s bank account changed yesterday and carries a payment block until verified by phone. Which invoices are paid, what is the total, and what is the payment entry?',
          },
          given: {
            head: [
              { fa: 'فاکتور', en: 'Invoice' },
              { fa: 'تأمین‌کننده', en: 'Supplier' },
              { fa: 'مبلغ', en: 'Amount' },
              { fa: 'سررسید (روز)', en: 'Due (day)' },
              { fa: 'قفل', en: 'Block' },
            ],
            rows: [
              [{ fa: 'INV-8101', en: 'INV-8101' }, { fa: 'شیمی حفاری کاوه', en: 'Kaveh Drilling Chemicals' }, 49500, 18, none],
              [{ fa: 'INV-8102', en: 'INV-8102' }, { fa: 'بازرسی فنی آریان', en: 'Arian Technical Inspection' }, 1980, 26, none],
              [{ fa: 'INV-8103', en: 'INV-8103' }, { fa: 'فن‌آوران کمپرسور توس', en: 'Toos Compressor Technologies' }, 33440, 30, none],
              [{ fa: 'INV-8104', en: 'INV-8104' }, { fa: 'لوله‌گستر خلیج', en: 'Gulf Tubulars' }, 79200, 14, { fa: 'مقدار', en: 'Quantity' }],
              [{ fa: 'INV-8105', en: 'INV-8105' }, { fa: 'ترابری جنوب', en: 'Jonoub Transport' }, 4180, 21, { fa: 'تغییر حساب بانکی', en: 'Bank account change' }],
            ],
            numericCols: [2, 3],
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'فاکتور', en: 'Invoice' },
                { fa: 'پرداخت؟', en: 'Paid?' },
                { fa: 'دلیل', en: 'Reason' },
              ],
              rows: [
                [{ fa: 'INV-8101', en: 'INV-8101' }, yes, { fa: 'سررسید گذشته، بدون قفل', en: 'Overdue, no block' }],
                [{ fa: 'INV-8102', en: 'INV-8102' }, yes, { fa: 'سررسید روز 26، پیش از اجرای بعدی', en: 'Due day 26, before the next run' }],
                [{ fa: 'INV-8103', en: 'INV-8103' }, no, { fa: 'سررسید روز 30، در اجرای روز 27 پرداخت می‌شود', en: 'Due day 30; it will be paid in the day 27 run' }],
                [{ fa: 'INV-8104', en: 'INV-8104' }, no, { fa: 'قفل مقدار', en: 'Quantity block' }],
                [{ fa: 'INV-8105', en: 'INV-8105' }, no, { fa: 'قفل تغییر حساب بانکی تا تأیید', en: 'Bank-change block until verified' }],
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'روز 20', en: 'Day 20' },
                  lines: [
                    { account: ac.apKaveh, debit: 49500 },
                    { account: ac.apArian, debit: 1980 },
                    { account: ac.bank, credit: 51480 },
                  ],
                  memo: { fa: '49,500 + 1,980 = 51,480.', en: '49,500 + 1,980 = 51,480.' },
                },
              ],
            },
          ],
          answer: {
            fa: 'فقط INV-8101 و INV-8102 پرداخت می‌شوند؛ جمع 51,480.',
            en: 'Only INV-8101 and INV-8102 are paid; total 51,480.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تمرین 4: صورت‌وضعیت تعمیرات اساسی کمپرسور', en: 'Exercise 4: Compressor overhaul progress statement' },
          difficulty: 'hard',
          problem: {
            fa: 'مسار پترولیوم تعمیرات اساسی کمپرسور K-202 را به بخش خدمات فن‌آوران کمپرسور توس سپرده است: قرارداد 200,000، پیش‌پرداخت 15٪ در برابر ضمانت‌نامه. هزینه روی مرکز هزینه ایستگاه تقویت فشار (CC-ARY-CMP) می‌نشیند. صورت‌وضعیت اول با SES پذیرفته‌شده 80,000 رسیده است. نرخ‌های فرضی: مالیات بر ارزش افزوده 10٪، مالیات تکلیفی 3٪، سپرده بیمه 5٪، سپرده حسن انجام کار 10٪، کسر پیش‌پرداخت 15٪ (همه روی مبلغ پیش از مالیات). (الف) خالص پرداختی را حساب کنید. (ب) همه ثبت‌ها را از پیش‌پرداخت تا پرداخت بنویسید. (ج) هزینه قابل بازیافت این صورت‌وضعیت و مانده پیش‌پرداخت چقدر است؟',
            en: 'Masar Petroleum has contracted the overhaul of compressor K-202 to the service division of Toos Compressor Technologies: contract 200,000, 15% advance against a guarantee. The cost goes to the compressor station cost centre (CC-ARY-CMP). The first statement has arrived with an accepted SES of 80,000. Illustrative rates: VAT 10%, withholding 3%, insurance retention 5%, performance retention 10%, advance recovery 15% (all on the pre-VAT amount). (a) Calculate the net payment. (b) Write every entry from the advance to the payment. (c) What is the recoverable cost of this statement and the remaining advance?',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'قلم', en: 'Item' },
                { fa: 'محاسبه', en: 'Calculation' },
                { fa: 'مبلغ', en: 'Amount' },
              ],
              rows: [
                [{ fa: 'پیش‌پرداخت اولیه', en: 'Initial advance' }, { fa: '200,000 × 15٪', en: '200,000 × 15%' }, 30000],
                [{ fa: 'کار انجام‌شده (SES)', en: 'Work done (SES)' }, blank, 80000],
                [{ fa: 'مالیات بر ارزش افزوده', en: 'VAT' }, { fa: '80,000 × 10٪', en: '80,000 × 10%' }, 8000],
                [{ fa: 'جمع فاکتور', en: 'Invoice total' }, blank, 88000],
                [{ fa: 'کسر پیش‌پرداخت', en: 'Advance recovery' }, { fa: '80,000 × 15٪', en: '80,000 × 15%' }, 12000],
                [{ fa: 'مالیات تکلیفی', en: 'Withholding tax' }, { fa: '80,000 × 3٪', en: '80,000 × 3%' }, 2400],
                [{ fa: 'سپرده بیمه', en: 'Insurance retention' }, { fa: '80,000 × 5٪', en: '80,000 × 5%' }, 4000],
                [{ fa: 'سپرده حسن انجام کار', en: 'Performance retention' }, { fa: '80,000 × 10٪', en: '80,000 × 10%' }, 8000],
                [{ fa: 'جمع کسور', en: 'Total deductions' }, blank, 26400],
                [{ fa: 'خالص پرداختی', en: 'Net payment' }, { fa: '88,000 − 26,400', en: '88,000 − 26,400' }, 61600],
              ],
              numericCols: [2],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'شروع قرارداد', en: 'Contract start' },
                  lines: [
                    { account: ac.advances, debit: 30000 },
                    { account: ac.bank, credit: 30000 },
                  ],
                },
                {
                  date: { fa: 'پذیرش SES', en: 'SES accepted' },
                  lines: [
                    { account: ac.maintCS, debit: 80000 },
                    { account: ac.grir, credit: 80000 },
                  ],
                },
                {
                  date: { fa: 'ثبت فاکتور', en: 'Invoice posted' },
                  lines: [
                    { account: ac.grir, debit: 80000 },
                    { account: ac.inputVat, debit: 8000 },
                    { account: ac.apToos, credit: 88000 },
                  ],
                },
                {
                  date: { fa: 'کسور', en: 'Deductions' },
                  lines: [
                    { account: ac.apToos, debit: 26400 },
                    { account: ac.advances, credit: 12000 },
                    { account: ac.wht, credit: 2400 },
                    { account: ac.insRet, credit: 4000 },
                    { account: ac.perfRet, credit: 8000 },
                  ],
                },
                {
                  date: { fa: 'پرداخت', en: 'Payment' },
                  lines: [
                    { account: ac.apToos, debit: 61600 },
                    { account: ac.bank, credit: 61600 },
                  ],
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'هزینه قابل بازیافت 80,000 روی CC-ARY-CMP است؛ نه 88,000 و نه 61,600. مانده پیش‌پرداخت 30,000 − 12,000 = 18,000 است که از صورت‌وضعیت‌های بعدی کسر می‌شود.',
                en: 'The recoverable cost is 80,000 on CC-ARY-CMP, not 88,000 and not 61,600. The advance balance is 30,000 − 12,000 = 18,000, to be recovered from later statements.',
              },
            },
          ],
          answer: {
            fa: 'خالص پرداختی 61,600؛ هزینه قابل بازیافت 80,000؛ مانده پیش‌پرداخت 18,000.',
            en: 'Net payment 61,600; recoverable cost 80,000; advance balance 18,000.',
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
              fa: 'تطبیق سه‌طرفه قیمت را از سفارش و مقدار را از GRN یا SES می‌گیرد؛ تطبیق دوطرفه فقط برای موارد مصوب کم‌خطر است.',
              en: 'Three-way matching takes price from the PO and quantity from the GRN or SES; two-way matching is only for approved low-risk cases.',
            },
            {
              fa: 'اختلاف در حد تحمل خودکار جذب می‌شود؛ بیش از آن، فاکتور با قفل پرداخت ثبت می‌شود تا ریشه اختلاف حل شود.',
              en: 'Differences within tolerance are absorbed automatically; beyond it, the invoice is posted with a payment block until the root cause is fixed.',
            },
            {
              fa: 'ثبت فاکتور: بدهکار GR/IR و مالیات بر ارزش افزوده خرید، بستانکار حساب‌های پرداختنی؛ GR/IR باید هر ماه تحلیل شود.',
              en: 'Invoice posting: debit GR/IR and Input VAT, credit Accounts payable; GR/IR must be analysed every month.',
            },
            {
              fa: 'در فاکتور پیمانکار، کسر پیش‌پرداخت، مالیات تکلیفی، سپرده بیمه و سپرده حسن انجام کار بدهی به پیمانکار را کم می‌کنند، اما هزینه کار را تغییر نمی‌دهند.',
              en: 'On contractor invoices, advance recovery, withholding tax, insurance and performance retentions reduce what is owed to the contractor but do not change the cost of the work.',
            },
            {
              fa: 'اجرای پرداخت فقط اقلام سررسیدشده و بدون قفل را می‌پردازد؛ زنجیره کامل اسناد، هزینه را قابل بازیافت می‌کند.',
              en: 'The payment run pays only due, unblocked items; a complete chain of documents makes the cost recoverable.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'تطبیق فاکتور', en: 'Invoice verification' },
              def: { fa: 'مقایسه فاکتور با سفارش و GRN یا SES پیش از تبدیل آن به بدهی قابل پرداخت.', en: 'Checking an invoice against the PO and the GRN or SES before it becomes a payable liability.' },
            },
            {
              term: { fa: 'تطبیق سه‌طرفه', en: 'Three-way match' },
              def: { fa: 'مقایسه سفارش خرید، رسید کالا (GRN) یا برگه ثبت خدمات (SES)، و فاکتور.', en: 'Comparing the PO, the GRN (or SES) and the invoice.' },
            },
            {
              term: { fa: 'حد تحمل', en: 'Tolerance' },
              def: { fa: 'اختلاف کوچکی که بدون بررسی دستی پذیرفته می‌شود.', en: 'A small difference accepted without manual review.' },
            },
            {
              term: { fa: 'انحراف قیمت', en: 'Price variance' },
              def: { fa: 'تفاوت قیمت فاکتور با قیمت سفارش.', en: 'The difference between the invoice price and the PO price.' },
            },
            {
              term: { fa: 'انحراف مقدار', en: 'Quantity variance' },
              def: { fa: 'تفاوت مقدار فاکتورشده با مقدار دریافت‌شده.', en: 'The difference between the quantity invoiced and the quantity received.' },
            },
            {
              term: { fa: 'فاکتور متوقف‌شده', en: 'Blocked invoice' },
              def: { fa: 'فاکتور ثبت‌شده‌ای که قفل پرداخت دارد تا اختلافش حل شود.', en: 'A posted invoice carrying a payment block until its difference is resolved.' },
            },
            {
              term: { fa: 'اعلامیه بستانکاری', en: 'Credit note' },
              def: { fa: 'سند تأمین‌کننده که مبلغ فاکتور قبلی را کاهش می‌دهد.', en: 'A supplier document that reduces a previous invoice.' },
            },
            {
              term: { fa: 'مالیات تکلیفی', en: 'Withholding tax' },
              def: { fa: 'مالیاتی که کارفرما از پرداخت به پیمانکار کسر و به سازمان مالیاتی واریز می‌کند.', en: 'Tax the employer deducts from a contractor payment and pays to the tax authority.' },
            },
            {
              term: { fa: 'سپرده حسن انجام کار', en: 'Performance retention' },
              def: { fa: 'درصدی از هر صورت‌وضعیت که تا تحویل قطعی نگه داشته می‌شود.', en: 'A percentage of each statement held until final acceptance.' },
            },
            {
              term: { fa: 'اجرای پرداخت', en: 'Payment run' },
              def: { fa: 'فرایند دوره‌ای انتخاب، تأیید و پرداخت اقلام سررسیدشده بدون قفل.', en: 'The periodic process of selecting, approving and paying due, unblocked items.' },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: {
        fa: 'در تطبیق سه‌طرفه کدام اسناد با هم مقایسه می‌شوند؟',
        en: 'Which documents are compared in a three-way match?',
      },
      options: [
        { fa: 'درخواست خرید، سفارش خرید، فاکتور', en: 'Requisition, PO, invoice' },
        { fa: 'سفارش خرید، GRN یا SES، فاکتور', en: 'PO, GRN or SES, invoice' },
        { fa: 'فاکتور، سند پرداخت، صورتحساب بانک', en: 'Invoice, payment document, bank statement' },
        { fa: 'قرارداد، ضمانت‌نامه، فاکتور', en: 'Contract, guarantee, invoice' },
      ],
      answer: 1,
      explain: {
        fa: 'تطبیق سه‌طرفه بررسی می‌کند فاکتور با آنچه سفارش داده شده (قیمت) و آنچه رسیده (مقدار) سازگار است. درخواست خرید سند داخلی پیش از سفارش است و صورتحساب بانک به مغایرت‌گیری بانکی مربوط است، نه تطبیق فاکتور.',
        en: 'A three-way match checks that the invoice agrees with what was ordered (price) and what was received (quantity). The requisition is an internal document that precedes the PO, and the bank statement belongs to bank reconciliation, not invoice matching.',
      },
    },
    {
      q: {
        fa: 'قیمت سفارش 500 و قیمت فاکتور 512 است. حد تحمل قیمت 2٪ است. چه می‌شود؟',
        en: 'The PO price is 500 and the invoice price 512. The price tolerance is 2%. What happens?',
      },
      options: [
        { fa: 'ثبت و آزاد می‌شود؛ انحراف 1.2٪ است', en: 'Posted and free; the variance is 1.2%' },
        { fa: 'ثبت و آزاد می‌شود؛ انحراف دقیقاً 2٪ است', en: 'Posted and free; the variance is exactly 2%' },
        { fa: 'با قفل قیمت ثبت می‌شود؛ انحراف 2.4٪ است', en: 'Posted with a price block; the variance is 2.4%' },
        { fa: 'رد و به تأمین‌کننده برگردانده می‌شود بدون ثبت', en: 'Rejected and returned to the supplier without posting' },
      ],
      answer: 2,
      explain: {
        fa: '(512 − 500) ÷ 500 = 2.4٪ که از 2٪ بیشتر است؛ پس فاکتور با قفل پرداخت ثبت می‌شود تا خریدار اختلاف را حل کند. ثبت فاکتور متوقف بهتر از برگرداندن آن است، چون بدهی بالقوه در دفاتر دیده می‌شود.',
        en: '(512 − 500) ÷ 500 = 2.4%, above 2%, so the invoice is posted with a payment block until the buyer resolves it. Posting a blocked invoice is better than returning it, because the potential liability stays visible in the books.',
      },
    },
    {
      q: {
        fa: 'GRN به مبلغ 20,000 ثبت شده است. فاکتور 20,000 به‌علاوه 10٪ مالیات بر ارزش افزوده می‌رسد و منطبق است. حساب‌های پرداختنی چقدر بستانکار می‌شود؟',
        en: 'A GRN of 20,000 was posted. A matching invoice arrives for 20,000 plus 10% VAT. How much is credited to Accounts payable?',
      },
      options: [
        { fa: '20,000', en: '20,000' },
        { fa: '2,000', en: '2,000' },
        { fa: '18,000', en: '18,000' },
        { fa: '22,000', en: '22,000' },
      ],
      answer: 3,
      explain: {
        fa: 'بدهی به تأمین‌کننده کل مبلغ فاکتور است: 20,000 + 2,000 = 22,000. ثبت: بدهکار GR/IR 20,000 و مالیات بر ارزش افزوده خرید 2,000، بستانکار حساب‌های پرداختنی 22,000. گزینه 20,000 مالیاتی را که باید به تأمین‌کننده پرداخت شود جا انداخته است.',
        en: 'The supplier is owed the full invoice: 20,000 + 2,000 = 22,000. Entry: debit GR/IR 20,000 and Input VAT 2,000, credit Accounts payable 22,000. 20,000 leaves out the VAT that is payable to the supplier.',
      },
    },
    {
      q: {
        fa: 'در پایان ماه، یک ردیف GR/IR مانده بستانکار 30,000 دارد. معنای آن چیست؟',
        en: 'At month end a GR/IR line has a 30,000 credit balance. What does it mean?',
      },
      options: [
        { fa: 'کالا دریافت شده اما فاکتور آن هنوز ثبت نشده است', en: 'Goods were received but not yet invoiced' },
        { fa: 'فاکتور ثبت شده اما کالا هنوز نرسیده است', en: 'The invoice was posted but the goods have not arrived' },
        { fa: 'تأمین‌کننده 30,000 به شرکت بدهکار است', en: 'The supplier owes the company 30,000' },
        { fa: 'پرداخت دو بار انجام شده است', en: 'The payment was made twice' },
      ],
      answer: 0,
      explain: {
        fa: 'رسید GR/IR را بستانکار و فاکتور آن را بدهکار می‌کند. مانده بستانکار یعنی رسید بیش از فاکتور است: کالا رسیده و بدهی تحقق یافته، اما فاکتورش نیامده. مانده بدهکار معنای برعکس دارد: فاکتور بدون رسید.',
        en: 'The GRN (or SES) credits GR/IR and the invoice debits it. A credit balance means receipts exceed invoices: goods arrived and a liability exists, but the invoice has not come. A debit balance means the opposite: an invoice without a receipt.',
      },
    },
    {
      q: {
        fa: 'فاکتوری با قفل مقدار متوقف شده است، چون 6 واحد بیش از رسید فاکتور شده است. کدام اقدام درست است؟',
        en: 'An invoice is blocked for quantity because it bills 6 units more than received. What is the right action?',
      },
      options: [
        { fa: 'حد تحمل مقدار را موقتاً افزایش دهیم', en: 'Temporarily raise the quantity tolerance' },
        { fa: 'برای 6 واحد GRN ساختگی ثبت کنیم تا فاکتور آزاد شود', en: 'Post a GRN for the 6 units so the invoice clears' },
        { fa: 'از تأمین‌کننده اعلامیه بستانکاری بگیریم یا منتظر رسید واقعی باقی‌مانده بمانیم', en: 'Get a credit note from the supplier or wait for a real receipt of the rest' },
        { fa: 'فاکتور را بدون بررسی پرداخت کنیم', en: 'Pay the invoice without review' },
      ],
      answer: 2,
      explain: {
        fa: 'قفل مقدار وقتی درست برداشته می‌شود که ریشه اختلاف حل شود: یا تأمین‌کننده مبلغ اضافه را با اعلامیه بستانکاری کم کند، یا کالای باقی‌مانده واقعاً برسد. رسید ساختگی و تغییر حد تحمل، کنترل را دور می‌زنند.',
        en: 'A quantity block is properly released only when the root cause is fixed: the supplier credits the excess, or the remaining goods actually arrive. A fake receipt or a tolerance change bypasses the control.',
      },
    },
    {
      q: {
        fa: 'SES پذیرفته‌شده 50,000 است. نرخ‌های فرضی: مالیات بر ارزش افزوده 10٪، مالیات تکلیفی 3٪، سپرده بیمه 5٪، حسن انجام کار 10٪، بدون پیش‌پرداخت (همه روی مبلغ پیش از مالیات). خالص پرداختی چقدر است؟',
        en: 'An accepted SES is 50,000. Illustrative rates: VAT 10%, withholding 3%, insurance retention 5%, performance retention 10%, no advance (all on the pre-VAT amount). What is the net payment?',
      },
      options: [
        { fa: '46,000', en: '46,000' },
        { fa: '41,000', en: '41,000' },
        { fa: '55,000', en: '55,000' },
        { fa: '36,000', en: '36,000' },
      ],
      answer: 0,
      explain: {
        fa: 'فاکتور 50,000 + 5,000 = 55,000. کسور 1,500 + 2,500 + 5,000 = 9,000. خالص 55,000 − 9,000 = 46,000. گزینه 41,000 مالیات بر ارزش افزوده را که به پیمانکار تعلق دارد فراموش کرده است.',
        en: 'Invoice 50,000 + 5,000 = 55,000. Deductions 1,500 + 2,500 + 5,000 = 9,000. Net 55,000 − 9,000 = 46,000. 41,000 forgets the VAT that belongs to the contractor.',
      },
    },
    {
      q: {
        fa: 'قرارداد 300,000 است و 20٪ پیش‌پرداخت شده است. صورت‌وضعیت اول 90,000 است و پیش‌پرداخت به همان نسبت کسر می‌شود. مانده پیش‌پرداخت پس از آن چقدر است؟',
        en: 'A contract is 300,000 with a 20% advance. The first statement is 90,000 and the advance is recovered at the same ratio. What is the advance balance afterwards?',
      },
      options: [
        { fa: '60,000', en: '60,000' },
        { fa: '18,000', en: '18,000' },
        { fa: '72,000', en: '72,000' },
        { fa: '42,000', en: '42,000' },
      ],
      answer: 3,
      explain: {
        fa: 'پیش‌پرداخت 300,000 × 20٪ = 60,000. کسر از صورت‌وضعیت اول 90,000 × 20٪ = 18,000. مانده 60,000 − 18,000 = 42,000. گزینه 18,000 مبلغ کسرشده است، نه مانده.',
        en: 'Advance 300,000 × 20% = 60,000. Recovered on the first statement 90,000 × 20% = 18,000. Balance 60,000 − 18,000 = 42,000. 18,000 is the amount recovered, not the balance.',
      },
    },
    {
      q: {
        fa: 'کدام فاکتور در اجرای پرداخت امروز انتخاب نمی‌شود، حتی اگر سررسید گذشته باشد؟',
        en: 'Which invoice is not selected in today’s payment run, even if it is overdue?',
      },
      options: [
        { fa: 'فاکتوری که با تطبیق سه‌طرفه بدون اختلاف ثبت شده است', en: 'An invoice posted with a clean three-way match' },
        { fa: 'فاکتور تأمین‌کننده‌ای که حساب بانکی‌اش دیروز تغییر کرده و قفل تأیید دارد', en: 'An invoice from a supplier whose bank account changed yesterday and carries a verification block' },
        { fa: 'فاکتوری که در حد تحمل قیمت بوده است', en: 'An invoice within the price tolerance' },
        { fa: 'فاکتور سفارش باز با تطبیق دوطرفه', en: 'A blanket-PO invoice with a two-way match' },
      ],
      answer: 1,
      explain: {
        fa: 'هر فاکتور با قفل پرداخت، از جمله قفل تغییر حساب بانکی، کنار گذاشته می‌شود تا تغییر با تماس به شماره شناخته‌شده تأیید شود. این کنترل جلوی کلاهبرداری با جعل نامه تغییر حساب را می‌گیرد. سه گزینه دیگر قفلی ندارند.',
        en: 'Any invoice with a payment block, including a bank-change block, is skipped until the change is verified by calling a known number. This control stops fraud using fake change-of-account letters. The other three carry no block.',
      },
    },
    {
      q: {
        fa: 'تطبیق دوطرفه (بدون رسید) برای کدام مورد مناسب‌تر است؟',
        en: 'For which case is a two-way match (no receipt) most appropriate?',
      },
      options: [
        { fa: 'لوله جداری چاه AR-11', en: 'Casing for well AR-11' },
        { fa: 'کارتریج آب‌بند گاز خشک کمپرسور', en: 'A compressor dry gas seal cartridge' },
        { fa: 'سیمان‌کاری چاه با SES', en: 'Well cementing with an SES' },
        { fa: 'قبض برق ماهانه دفتر میدان روی سفارش باز', en: 'The field office’s monthly electricity bill on a blanket PO' },
      ],
      answer: 3,
      explain: {
        fa: 'برای قبوض و خریدهای کم‌مبلغ تکراری، ثبت رسید عملی نیست و ریسک پایین است؛ پس تطبیق دوطرفه با سفارش باز کافی است. لوله، قطعات بحرانی و خدمات چاه باید تطبیق سه‌طرفه با GRN یا SES داشته باشند.',
        en: 'For utility bills and small repeated purchases, a receipt is impractical and the risk is low, so a two-way match against a blanket PO is enough. Pipe, critical spares and well services need a three-way match with a GRN or SES.',
      },
    },
    {
      q: {
        fa: 'SES تعمیرات کمپرسور 80,000 است؛ مالیات بر ارزش افزوده قابل استرداد 8,000 و کسور 26,400 است و 61,600 پرداخت می‌شود. چه مبلغی هزینه مرکز هزینه ایستگاه است؟',
        en: 'A compressor repair SES is 80,000; recoverable VAT is 8,000, deductions are 26,400 and 61,600 is paid. How much is the cost on the station cost centre?',
      },
      options: [
        { fa: '88,000', en: '88,000' },
        { fa: '61,600', en: '61,600' },
        { fa: '80,000', en: '80,000' },
        { fa: '53,600', en: '53,600' },
      ],
      answer: 2,
      explain: {
        fa: 'هزینه همان ارزش کار انجام‌شده است: 80,000. مالیات بر ارزش افزوده قابل استرداد اعتبار مالیاتی است، نه هزینه؛ پس 88,000 نادرست است. کسور فقط بدهی به پیمانکار را میان او، سازمان مالیاتی و سپرده‌ها تقسیم می‌کنند؛ پس 61,600 هم هزینه نیست.',
        en: 'The cost is the value of the work done: 80,000. Recoverable VAT is a tax credit, not a cost, so 88,000 is wrong. Deductions only split the debt among the contractor, the tax office and retentions, so 61,600 is not the cost either.',
      },
    },
  ],
}
