import type { Lesson } from '../types'

const t = (fa: string, en: string) => ({ fa, en })

/* Masar Petroleum (company code MP01): accounts used in this lesson. */
const ac = {
  bank: t('1110 موجودی نقد (بانک)', '1110 Cash at bank'),
  inventory: t('1310 موجودی مواد و قطعات (انبار مرکزی)', '1310 Materials and spares inventory (Central Warehouse)'),
  prepaid: t('1410 پیش‌پرداخت هزینه‌ها (بیمه)', '1410 Prepaid expenses (insurance)'),
  aucCasing: t(
    '1510 دارایی‌های در جریان تکمیل (`AFE-2025-014.02.03`، R، توسعه)',
    '1510 Assets under construction (`AFE-2025-014.02.03`, R, Development)',
  ),
  ap: t('2110 حساب‌های پرداختنی', '2110 Accounts payable'),
  grir: t('2120 حساب واسط رسید کالا و فاکتور (GR/IR)', '2120 GR/IR clearing account'),
  accrued: t('2130 هزینه‌های تعهدی پرداختنی', '2130 Accrued liabilities'),
  opexPrd: t('5110 هزینه عملیات تولید (`CC-ARY-PRD`، R، عملیاتی)', '5110 Production operating expense (`CC-ARY-PRD`, R, Operating)'),
  repairsCmp: t(
    '5120 هزینه تعمیر و نگهداری (`CC-ARY-CMP`، دستور کار WO-5531، R، عملیاتی)',
    '5120 Repairs and maintenance expense (`CC-ARY-CMP`, work order WO-5531, R, Operating)',
  ),
  camp: t('5140 هزینه کمپ و پذیرایی (`CC-ARY-CAM`، R، عملیاتی)', '5140 Camp and catering expense (`CC-ARY-CAM`, R, Operating)'),
  insurance: t('5150 هزینه بیمه (`CC-ARY-CMP`، R، عملیاتی)', '5150 Insurance expense (`CC-ARY-CMP`, R, Operating)'),
}

const blank = t('', '')

export const lesson: Lesson = {
  slug: 'journal-entry-management',
  number: 26,
  currency: 'usd',
  level: 'advanced',
  minutes: 45,
  icon: 'NotebookPen',
  tone: 'primary',
  title: t('مدیریت اسناد حسابداری در ERP', 'Managing Journal Entries in an ERP'),
  summary: t(
    'یاد بگیرید سندهای حسابداری خودکار و دستی را در ERP یک شرکت نفت و گاز چگونه مدیریت کنید: نوع سند و شماره‌گذاری، الگو و سند تکراری، ثبت تعهدی با برگشت خودکار، سند موقت، گردش تأیید و سقف اختیارات، مدارک پشتیبان، قواعد اعتبارسنجی، دوره‌های حسابداری، اصلاح بدون حذف، بازبینی و نشانه‌های هشدار؛ همه با مثال شرکت مسار پترولیوم.',
    'Learn how to manage automatic and manual journal entries in an oil and gas company’s ERP: document types and numbering, templates and recurring entries, auto-reversing accruals, parked entries, approval workflows and limits, supporting documents, validation rules, posting periods, correcting without deleting, journal review and red flags, all through the Masar Petroleum example.',
  ),
  objectives: [
    t(
      'ثبت خودکار (یکپارچه) را از سند دستی تشخیص دهید و نقش نوع سند و محدوده شماره را توضیح دهید',
      'Tell automatic (integration) postings from manual journal entries and explain document types and number ranges',
    ),
    t(
      'الگو، سند تکراری، ثبت تعهدی با برگشت خودکار و سند موقت را درست به کار ببرید',
      'Use templates, recurring entries, auto-reversing accruals and parked entries correctly',
    ),
    t(
      'گردش تأیید «تهیه‌کننده و تأییدکننده» را با سقف اختیارات و مدارک پشتیبان اجباری طراحی کنید',
      'Design a maker-checker approval workflow with authority limits and mandatory supporting documents',
    ),
    t(
      'قواعد اعتبارسنجی و جایگزینی و کنترل دوره‌های حسابداری را با کدگذاری مسار پترولیوم به کار ببرید',
      'Apply validation and substitution rules and posting-period controls with Masar Petroleum’s coding convention',
    ),
    t(
      'اشتباه را با سند برگشتی یا سند اصلاحی درست کنید و فهرست سندهای دستی را برای نشانه‌های هشدار بازبینی کنید',
      'Correct errors with a reversal or an adjusting entry, and review the manual journal listing for red flags',
    ),
  ],
  sections: [
    {
      id: 'why-manage',
      title: t('چرا سندهای حسابداری را باید مدیریت کرد؟', 'Why Journal Entries Need Managing'),
      blocks: [
        {
          type: 'p',
          text: t(
            'پایان ماه 9 است. ERP شرکت مسار پترولیوم در این ماه حدود 18,400 سند حسابداری ثبت کرده است. بیش از 96 درصد آن‌ها خودکار بوده‌اند: رسید کالا، برگه ثبت خدمات، فاکتور، پرداخت، استهلاک و تسویه. فقط 620 سند را حسابداران با دست نوشته‌اند. با این حال، حسابرس شرکت انرژی البرز (شریک 30 درصدی مشارکت آریا) دقیقاً سراغ همین سندهای دستی رفت و یکی را بیرون کشید: سندی به مبلغ 3,000,000 که جمعه ساعت 23:40 ثبت شده بود، هزینه را از هزینه عملیات تولید به دارایی در جریان تکمیل AFE حفاری منتقل می‌کرد، شرحش فقط «اصلاحیه» بود، پیوستی نداشت و تهیه‌کننده و تأییدکننده‌اش یک نفر بود. همین مبلغ در صورت‌حساب شرکا و در صورت بازیافت هزینه هم آمده بود و هیچ‌کس نتوانست بگوید چرا.',
            'It is the end of month 9. Masar Petroleum’s ERP has posted about 18,400 accounting documents this month. More than 96 percent were automatic: goods receipts, service entries, invoices, payments, depreciation and settlements. Only 620 were typed by accountants. Yet the auditor of Alborz Energy (the 30 percent partner in the Arya joint venture) went straight to those manual entries and pulled one out: an entry of 3,000,000, posted on a Friday at 23:40, moving cost from production operating expense to assets under construction on the drilling AFE. Its text said only "adjustment", it had no attachment, and the same person prepared and approved it. The amount had also flowed into the partner billing and the cost-recovery statement, and nobody could say why.',
          ),
        },
        {
          type: 'p',
          text: t(
            'در ERP به هر ثبت روزنامه **سند حسابداری** (Accounting document) می‌گویند. سند دو بخش دارد: **سرِ سند** که می‌گوید این سند چیست، مال کدام شرکت و کدام دوره است و چه کسی آن را ساخته؛ و **سطرهای سند** که حساب، شیء هزینه، مبلغ بدهکار یا بستانکار و شرح هر سطر را نگه می‌دارند. اصول آن همان است که در درس «سند حسابداری و کدینگ سه‌سطحی» دیدید؛ تفاوت در این است که ERP هر فیلد را کنترل می‌کند و ردپای کامل آن را نگه می‌دارد.',
            'In an ERP each journal entry is called an **accounting document**. It has two parts: a **header** that says what the document is, which company and period it belongs to and who created it; and **lines** that hold the account, cost object, debit or credit amount and text of each line. The principles are the ones you met in the lesson on accounting vouchers and three-level coding; the difference is that the ERP controls every field and keeps a full trail of it.',
          ),
        },
        {
          type: 'table',
          caption: t('فیلدهای اصلی یک سند دستی در ERP مسار پترولیوم', 'Key fields of a manual document in Masar Petroleum’s ERP'),
          head: [t('فیلد', 'Field'), t('نمونه', 'Example'), t('چرا مهم است', 'Why it matters')],
          rows: [
            [t('کد شرکت', 'Company code'), t('`MP01` مسار پترولیوم', '`MP01` Masar Petroleum'), t('سند در دفاتر کدام شخصیت حقوقی می‌نشیند', 'Whose legal books the entry lands in')],
            [t('نوع سند', 'Document type'), t('`JA` ثبت تعهدی', '`JA` accrual'), t('شماره‌گذاری، گردش تأیید و قاعده برگشت را تعیین می‌کند', 'Drives numbering, approval routing and reversal rules')],
            [t('شماره سند', 'Document number'), t('11000148', '11000148'), t('شماره پیاپی از محدوده همان نوع سند؛ هرگز تکرار نمی‌شود', 'Next number in that type’s range; never reused')],
            [t('تاریخ ثبت و دوره', 'Posting date and period'), t('پایان ماه 9، دوره 09', 'End of month 9, period 09'), t('مانده کدام دوره تغییر کند', 'Which period’s balances change')],
            [t('تاریخ سند', 'Document date'), t('تاریخ برگه کارکرد امضاشده', 'Date of the signed field ticket'), t('زمان رویداد اصلی را نشان می‌دهد', 'Shows when the underlying event happened')],
            [t('مرجع', 'Reference'), t('PO-4512، برگه کارکرد FT-0907', 'PO-4512, field ticket FT-0907'), t('پیوند با مدرک مبدأ', 'Link to the source evidence')],
            [t('شرح سرِ سند', 'Header text'), t('تعهدی نمودارگیری چاه AR-05؛ SES ثبت نشده', 'Accrual: AR-05 well logging; SES not yet entered'), t('هر خواننده بدون پرسیدن بفهمد چرا', 'Any reader understands why without asking')],
            [t('سطرها', 'Lines'), t('حساب 5110، `CC-ARY-PRD`، R، عملیاتی', 'Account 5110, `CC-ARY-PRD`, R, Operating'), t('کد کامل هزینه برای گزارش، صورت‌حساب شرکا و بازیافت هزینه', 'The full cost code for reporting, partner billing and cost recovery')],
            [t('تهیه‌کننده، تأییدکننده، زمان', 'Prepared by, approved by, time'), t('ثبت خودکار سیستم', 'Stamped by the system'), t('ردپای حسابرسی؛ کاربر نمی‌تواند آن را تغییر دهد', 'Audit trail; users cannot change it')],
          ],
        },
        {
          type: 'list',
          items: [
            t(
              '**صورت‌های مالی**: سند دستی مستقیم سود، دارایی و بدهی را تغییر می‌دهد و هیچ ماژول دیگری آن را کنترل نمی‌کند.',
              '**Financial statements**: a manual entry changes profit, assets and liabilities directly, and no other module checks it.',
            ),
            t(
              '**صورت‌حساب شرکا**: هزینه‌ای که روی مشارکت آریا (`JV-ARY`) بنشیند، 30 درصدش به البرز و 20 درصدش به دنا صورت‌حساب می‌شود؛ سند غلط یعنی صورت‌حساب غلط.',
              '**Partner billing**: any cost on the Arya joint venture (`JV-ARY`) is billed 30 percent to Alborz and 20 percent to Dena; a wrong entry means a wrong bill.',
            ),
            t(
              '**بازیافت هزینه**: نشانگر R/N و طبقه هزینه تعیین می‌کنند چه چیزی طبق قرارداد نفتی ادعا شود؛ سند بدون مدرک را حسابرسان طرف دولتی رد می‌کنند.',
              '**Cost recovery**: the R/N flag and cost category decide what is claimed under the petroleum contract; government-side auditors reject entries without evidence.',
            ),
            t(
              '**تقلب و دور زدن کنترل‌ها**: سند دستی ابزار اصلی «دور زدن کنترل‌ها توسط مدیران» است؛ به همین دلیل حسابرسان بیشترین وقت را روی آن می‌گذارند.',
              '**Fraud and override**: manual entries are the main tool of management override of controls, which is why auditors spend most of their time on them.',
            ),
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('چهار پرسش هر سند دستی', 'Four questions for every manual entry'),
          text: t(
            'هر سند دستی باید بدون حضور تهیه‌کننده به چهار پرسش جواب دهد: **چرا** (شرح روشن)، **چقدر** (محاسبه پیوست)، **به استناد چه** (مدرک مبدأ) و **با تأیید چه کسی** (تأییدکننده مستقل). سندی که یکی از این چهار را ندارد، هنوز آماده ثبت نیست.',
            'Every manual entry must answer four questions without its preparer in the room: **why** (clear text), **how much** (attached calculation), **based on what** (source evidence) and **approved by whom** (an independent approver). An entry missing any of the four is not ready to post.',
          ),
        },
      ],
    },
    {
      id: 'auto-manual-types',
      title: t('سند خودکار و سند دستی؛ نوع سند و شماره‌گذاری', 'Automatic and Manual Entries; Document Types and Numbering'),
      blocks: [
        {
          type: 'p',
          text: t(
            '**ثبت خودکار (Integration posting)** سندی است که ماژول مبدأ هنگام ثبت یک رویداد عملیاتی می‌سازد: انباردار **رسید کالا (GRN)** را ثبت می‌کند، مهندس میدان **برگه ثبت خدمات (SES)** را تأیید می‌کند، اجرای پرداخت یا اجرای استهلاک انجام می‌شود و ERP با **تعیین خودکار حساب** حساب‌های بدهکار و بستانکار را انتخاب می‌کند. حسابدار این سند را تایپ نمی‌کند.',
            'An **integration (automatic) posting** is a document created by the source module when an operational event is recorded: a storekeeper posts a **goods received note (GRN)**, a field engineer accepts a **service entry sheet (SES)**, a payment run or depreciation run is executed, and the ERP picks the debit and credit accounts through **automatic account determination**. No accountant types it.',
          ),
        },
        {
          type: 'p',
          text: t(
            '**سند دستی (Manual journal entry)** را حسابدار مستقیم در ماژول دفتر کل می‌نویسد. موارد معمول آن: ثبت تعهدی برای خدماتی که هنوز SES ندارند، آزادسازی پیش‌پرداخت‌ها (اگر سند تکراری تعریف نشده باشد)، انتقال بین اشیای هزینه، ذخیره‌ها، اصلاح اشتباه، تخصیص‌هایی که خودکار نشده‌اند و تعدیلات پایان سال.',
            'A **manual journal entry** is written by an accountant directly in the general ledger module. Typical uses: accruals for services that have no SES yet, prepayment releases (when no recurring entry is set up), reclassifications between cost objects, provisions, corrections, allocations that are not automated, and year-end adjustments.',
          ),
        },
        {
          type: 'compare',
          left: {
            title: t('ثبت خودکار', 'Automatic posting'),
            items: [
              t('همیشه مدرک مبدأ دارد (GRN، SES، فاکتور، اجرای استهلاک)', 'Always has a source document (GRN, SES, invoice, depreciation run)'),
              t('حساب‌ها از تنظیمات و داده پایه می‌آیند', 'Accounts come from configuration and master data'),
              t('تعداد زیاد، ریسک هر سند کم', 'High volume, low risk per document'),
              t('خطاها سیستماتیک‌اند: داده پایه یا تنظیمات را درست کنید', 'Errors are systematic: fix the master data or configuration'),
            ],
          },
          right: {
            title: t('سند دستی', 'Manual entry'),
            items: [
              t('بر قضاوت و برآورد حسابدار تکیه دارد', 'Relies on the accountant’s judgement and estimates'),
              t('تعداد کم ولی مبالغ اغلب بزرگ', 'Few in number, but often large amounts'),
              t('به مدرک پشتیبان و تأیید مستقل نیاز دارد', 'Needs supporting evidence and independent approval'),
              t('هدف اصلی بازبینی حسابرسان و شرکا', 'The main target of auditors’ and partners’ reviews'),
            ],
          },
        },
        {
          type: 'journal',
          title: t('یک ثبت خودکار: تأیید برگه ثبت خدمات', 'An automatic posting: SES acceptance'),
          entries: [
            {
              date: t('روز 18 ماه 9', 'Day 18, month 9'),
              lines: [
                { account: ac.repairsCmp, debit: 260000 },
                { account: ac.grir, credit: 260000 },
              ],
              memo: t(
                'سرپرست ایستگاه تقویت فشار SES-7702 (تعمیر اساسی شیرهای کمپرسور) را با برگه کارکرد امضاشده تأیید کرد. ERP نوع سند `SE` را ساخت و حساب‌ها را از سطر سفارش خرید برداشت؛ هیچ حسابداری چیزی تایپ نکرد.',
                'The compressor station superintendent accepted SES-7702 (overhaul of compressor valves) with a signed field ticket. The ERP created document type `SE` and took the accounts from the PO line; no accountant typed anything.',
              ),
            },
          ],
        },
        { type: 'h', text: t('نوع سند و محدوده شماره', 'Document types and number ranges') },
        {
          type: 'p',
          text: t(
            'هر سند یک **نوع سند** دارد. نوع سند به سیستم می‌گوید شماره را از کدام **محدوده شماره** بگیرد، چه حساب‌هایی در آن مجاز است (مثلاً حساب تأمین‌کننده فقط در سندهای پرداختنی)، آیا ورود دستی مجاز است، به کدام گردش تأیید برود و چگونه برگشت بخورد. ERP شماره‌ها را پیاپی و بدون تکرار می‌دهد و هر سال مالی محدوده تازه‌ای باز می‌کند. اگر در شماره‌ها شکاف باشد، باید علت آن مستند شود.',
            'Every document has a **document type**. The type tells the system which **number range** to draw from, which accounts are allowed (vendor accounts only in payables documents, for example), whether manual entry is allowed, which approval workflow to follow and how the document may be reversed. The ERP assigns numbers consecutively, never reuses them, and opens a fresh range each fiscal year. Any gap in the sequence must be explained and documented.',
          ),
        },
        {
          type: 'table',
          caption: t('نوع‌های سند مسار پترولیوم (محدوده‌ها فرضی‌اند)', 'Masar Petroleum’s document types (ranges are illustrative)'),
          head: [t('کد', 'Code'), t('نوع سند', 'Document type'), t('مبدأ', 'Source'), t('ورود دستی؟', 'Manual entry?'), t('محدوده شماره', 'Number range')],
          rows: [
            [t('`JM`', '`JM`'), t('سند عمومی دستی', 'General manual journal'), t('دفتر کل', 'General ledger'), t('بله، با تأیید', 'Yes, with approval'), t('10000000 تا 10999999', '10000000 to 10999999')],
            [t('`JA`', '`JA`'), t('ثبت تعهدی با تاریخ برگشت', 'Accrual with reversal date'), t('دفتر کل', 'General ledger'), t('بله، با تأیید', 'Yes, with approval'), t('11000000 تا 11999999', '11000000 to 11999999')],
            [t('`JR`', '`JR`'), t('سند برگشتی', 'Reversal'), t('سیستم، از روی سند اصلی', 'System, from the original'), t('خیر', 'No'), t('12000000 تا 12999999', '12000000 to 12999999')],
            [t('`JC`', '`JC`'), t('سند تکراری', 'Recurring entry'), t('اجرای زمان‌بندی‌شده', 'Scheduled run'), t('خیر', 'No'), t('13000000 تا 13999999', '13000000 to 13999999')],
            [t('`GR`', '`GR`'), t('رسید کالا (GRN)', 'Goods received note (GRN)'), t('انبار و تدارکات', 'Inventory and procurement'), t('خیر', 'No'), t('50000000 تا 50999999', '50000000 to 50999999')],
            [t('`SE`', '`SE`'), t('برگه ثبت خدمات (SES)', 'Service entry sheet (SES)'), t('تدارکات', 'Procurement'), t('خیر', 'No'), t('51000000 تا 51999999', '51000000 to 51999999')],
            [t('`VI`', '`VI`'), t('فاکتور تأمین‌کننده', 'Vendor invoice'), t('پرداختنی‌ها (تطبیق سه‌طرفه)', 'Payables (three-way match)'), t('فقط از راه تطبیق فاکتور', 'Only through invoice matching'), t('52000000 تا 52999999', '52000000 to 52999999')],
            [t('`VP`', '`VP`'), t('پرداخت به تأمین‌کننده', 'Vendor payment'), t('اجرای پرداخت', 'Payment run'), t('خیر', 'No'), t('53000000 تا 53999999', '53000000 to 53999999')],
            [t('`DP`', '`DP`'), t('استهلاک و استهلاک ذخایر', 'Depreciation and depletion'), t('دارایی‌های ثابت', 'Fixed assets'), t('خیر', 'No'), t('60000000 تا 60999999', '60000000 to 60999999')],
            [t('`ST`', '`ST`'), t('تسویه WBS و دستور کار', 'WBS and work-order settlement'), t('پروژه و نگهداری', 'Projects and maintenance'), t('خیر', 'No'), t('61000000 تا 61999999', '61000000 to 61999999')],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('در عمل: ایران و IFRS', 'In practice: Iran and IFRS'),
          text: t(
            'در ایران سند حسابداری شماره ترتیبی، تاریخ، شرح، کدهای کل و معین و تفصیلی، مبالغ بدهکار و بستانکار، پیوست و امضا دارد و دفاتر قانونی نباید شکاف یا تراشیدگی داشته باشند. بسیاری از شرکت‌ها در کنار شماره ERP که برای هر نوع سند جداست، یک **شماره سند قانونی** پیاپی هم می‌دهند تا دفتر روزنامه قانونی بی‌شکاف تولید شود؛ جزئیات الزامات دفاتر قانونی را از مقررات روز بررسی کنید. IFRS درباره شماره‌گذاری قاعده‌ای ندارد، اما حسابرس با گزارش شکاف شماره‌ها **کامل بودن** ثبت‌ها را آزمون می‌کند.',
            'In Iran an accounting voucher carries a sequential number, date, description, general, subsidiary and detail codes, debit and credit amounts, attachments and signatures, and the legal books must have no gaps or erasures. Many companies give a continuous **statutory voucher number** alongside the ERP number (which is separate per document type), so that the legal journal can be produced without gaps; check the current regulations for the details of legal-book requirements. IFRS has no rule on numbering, but auditors test the **completeness** of postings with a number-gap report.',
          ),
        },
      ],
    },
    {
      id: 'templates-recurring-accruals',
      title: t('الگو، سند تکراری، تعهدی با برگشت خودکار و سند موقت', 'Templates, Recurring Entries, Auto-Reversing Accruals and Parked Entries'),
      blocks: [
        {
          type: 'p',
          text: t(
            '**الگوی سند (Template)** اسکلت ذخیره‌شده یک سند است: حساب‌ها، اشیای هزینه، نشانگر R/N، طبقه و شرح از قبل پر شده‌اند و کاربر فقط مبلغ و مرجع را وارد می‌کند. مثلاً الگوی «تعهدی ماهانه پذیرایی کمپ» حساب 5140 با مرکز هزینه `CC-ARY-CAM`، نشانگر R و طبقه «عملیاتی» را در بدهکار و حساب 2130 را در بستانکار دارد. الگو خطای کدگذاری را کم می‌کند، ولی سند ساخته‌شده از الگو هنوز سند دستی است و تأیید می‌خواهد.',
            'A **template** is a saved skeleton of a document: the accounts, cost objects, R/N flag, category and text are pre-filled, and the user enters only the amount and reference. For example, the "monthly camp catering accrual" template has account 5140 with cost centre `CC-ARY-CAM`, flag R and category Operating on the debit side, and account 2130 on the credit side. Templates cut coding errors, but a document built from a template is still a manual entry and still needs approval.',
          ),
        },
        {
          type: 'p',
          text: t(
            '**سند تکراری (Recurring entry)** برای مبلغ ثابتی است که هر دوره تکرار می‌شود. حسابدار یک بار برنامه را تعریف می‌کند (حساب‌ها، مبلغ، دوره شروع و پایان) و اجرای زمان‌بندی‌شده ERP هر ماه سند را با نوع `JC` می‌سازد. نمونه: مسار پترولیوم بیمه یک‌ساله تجهیزات ایستگاه تقویت فشار را به مبلغ 1,440,000 پیش‌پرداخت کرده است؛ 1,440,000 ÷ 12 = 120,000 هر ماه به هزینه می‌رود.',
            'A **recurring entry** is for a fixed amount that repeats every period. The accountant defines the schedule once (accounts, amount, first and last period) and the ERP’s scheduled run creates a `JC` document every month. Example: Masar Petroleum prepaid one year of insurance on the compressor station equipment for 1,440,000; 1,440,000 ÷ 12 = 120,000 is expensed each month.',
          ),
        },
        {
          type: 'journal',
          title: t('پیش‌پرداخت بیمه و سند تکراری ماهانه', 'Prepaid insurance and the monthly recurring entry'),
          entries: [
            {
              date: t('روز 2 ماه 1', 'Day 2, month 1'),
              lines: [
                { account: ac.prepaid, debit: 1440000 },
                { account: ac.ap, credit: 1440000 },
              ],
              memo: t('فاکتور بیمه‌نامه 12 ماهه تجهیزات ایستگاه تقویت فشار.', 'Invoice for the 12-month policy on the compressor station equipment.'),
            },
            {
              date: t('پایان هر ماه، 1 تا 12', 'End of each month, 1 to 12'),
              lines: [
                { account: ac.insurance, debit: 120000 },
                { account: ac.prepaid, credit: 120000 },
              ],
              memo: t(
                'سند تکراری `JC`؛ پس از 12 اجرا، مانده پیش‌پرداخت صفر می‌شود و برنامه خودبه‌خود پایان می‌یابد.',
                'Recurring `JC` document; after 12 runs the prepaid balance is zero and the schedule ends by itself.',
              ),
            },
          ],
        },
        { type: 'h', text: t('ثبت تعهدی با برگشت خودکار', 'Accruals with automatic reversal') },
        {
          type: 'p',
          text: t(
            'ثبت تعهدی هزینه‌ای را که رخ داده ولی هنوز در دفاتر نیست ثبت می‌کند. اما ماه بعد سند واقعی (SES و سپس فاکتور) کل هزینه را ثبت خواهد کرد؛ اگر تعهدی برداشته نشود، هزینه دو بار شمرده می‌شود. راه حل ERP: سند تعهدی را با نوع `JA` و یک **تاریخ برگشت** (روز اول دوره بعد) ثبت کنید. سیستم در آن روز سند `JR` را که آینه سند اصلی است خودکار می‌سازد و به آن ارجاع می‌دهد.',
            'An accrual records a cost that has happened but is not yet in the books. Next month, though, the real document (the SES and then the invoice) will post the full cost; if the accrual is not removed, the cost is counted twice. The ERP’s answer: post the accrual with type `JA` and a **reversal date** (the first day of the next period). On that day the system automatically creates a `JR` document that mirrors the original and refers to it.',
          ),
        },
        {
          type: 'journal',
          title: t('نمودارگیری تولید چاه AR-05: تعهدی، برگشت و SES واقعی', 'Production logging on well AR-05: accrual, reversal and the actual SES'),
          entries: [
            {
              date: t('پایان ماه 9', 'End of month 9'),
              lines: [
                { account: ac.opexPrd, debit: 90000 },
                { account: ac.accrued, credit: 90000 },
              ],
              memo: t(
                'سند `JA`؛ کار روزهای 27 تا 29 انجام و برگه کارکرد FT-0907 امضا شد، اما SES هنوز ثبت نشده است. برآورد از نرخ‌های قرارداد PO-4512. تاریخ برگشت: روز 1 ماه 10.',
                '`JA` document; the work was done on days 27 to 29 and field ticket FT-0907 was signed, but the SES is not yet entered. Estimate from the PO-4512 contract rates. Reversal date: day 1 of month 10.',
              ),
            },
            {
              date: t('روز 1 ماه 10', 'Day 1, month 10'),
              lines: [
                { account: ac.accrued, debit: 90000 },
                { account: ac.opexPrd, credit: 90000 },
              ],
              memo: t('سند `JR` که سیستم خودکار ساخت؛ مرجع: سند تعهدی 11000148.', '`JR` document created automatically by the system; reference: accrual 11000148.'),
            },
            {
              date: t('روز 6 ماه 10', 'Day 6, month 10'),
              lines: [
                { account: ac.opexPrd, debit: 93000 },
                { account: ac.grir, credit: 93000 },
              ],
              memo: t('SES-7790 با مبلغ واقعی 93,000 تأیید شد (ثبت خودکار `SE`).', 'SES-7790 accepted at the actual 93,000 (automatic `SE` posting).'),
            },
          ],
        },
        {
          type: 'table',
          caption: t('اثر بر هزینه هر ماه (حساب 5110، این خدمت)', 'Effect on each month’s expense (account 5110, this service)'),
          head: [t('سند', 'Document'), t('ماه 9', 'Month 9'), t('ماه 10', 'Month 10'), t('جمع', 'Total')],
          numericCols: [1, 2, 3],
          rows: [
            [t('تعهدی `JA`', 'Accrual `JA`'), 90000, 0, 90000],
            [t('برگشت خودکار `JR`', 'Automatic reversal `JR`'), 0, -90000, -90000],
            [t('SES واقعی', 'Actual SES'), 0, 93000, 93000],
            [t('**جمع هزینه**', '**Total expense**'), 90000, 3000, 93000],
          ],
        },
        { type: 'h', text: t('سند موقت (پارک‌شده) و سند نگه‌داشته', 'Parked and held entries') },
        {
          type: 'compare',
          left: {
            title: t('سند موقت یا پارک‌شده (Parked)', 'Parked document'),
            items: [
              t('کامل است و منتظر تأیید یا بررسی', 'Complete, waiting for approval or review'),
              t('هیچ اثری بر مانده حساب‌ها و تراز آزمایشی ندارد', 'No effect on account balances or the trial balance'),
              t('شماره می‌گیرد و دیگران (مثلاً تأییدکننده) آن را می‌بینند', 'Gets a number and is visible to others, such as the approver'),
              t('با تأیید، به سند ثبت‌شده تبدیل می‌شود', 'Becomes a posted document once approved'),
            ],
          },
          right: {
            title: t('سند نگه‌داشته (Held)', 'Held document'),
            items: [
              t('ناتمام است؛ کاربر بعداً کاملش می‌کند', 'Incomplete; the user finishes it later'),
              t('هیچ اثری بر مانده‌ها ندارد', 'No effect on balances'),
              t('اغلب فقط برای همان کاربر قابل دیدن است', 'Often visible only to the same user'),
              t('هنوز وارد گردش تأیید نشده است', 'Not yet in the approval workflow'),
            ],
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('سند موقت در پایان ماه', 'Parked documents at month-end'),
          text: t(
            'تعهدی که موقت مانده، در تراز آزمایشی نیست. پیش از قفل دوره گزارش سندهای موقت و نگه‌داشته را بگیرید و هر کدام را ثبت کنید، حذف کنید یا با دلیل به دوره بعد ببرید. بسیاری از شرکت‌ها تا خالی شدن این فهرست، چک‌لیست بستن را تأیید نمی‌کنند. در بسیاری از نرم‌افزارهای ایرانی هم سند ابتدا «موقت» است و پس از بررسی «دائم» یا «قطعی» می‌شود؛ منطق همان است.',
            'An accrual left parked is not in the trial balance. Before locking the period, run the parked and held documents report and post, delete or carry forward each one with a reason. Many companies do not sign off the close checklist until this list is empty. Many Iranian accounting packages work the same way: a voucher is first "temporary" and becomes "permanent" or "final" after review.',
          ),
        },
      ],
    },
    {
      id: 'approval-workflow',
      title: t('گردش تأیید: تهیه‌کننده و تأییدکننده، سقف اختیارات و مدارک پشتیبان', 'Approval Workflow: Maker-Checker, Limits and Supporting Documents'),
      blocks: [
        {
          type: 'p',
          text: t(
            'اصل **تهیه‌کننده و تأییدکننده (Maker-checker)** یا «اصل چهار چشم» می‌گوید کسی که سند را می‌سازد نباید همان کسی باشد که آن را تأیید می‌کند. در ERP این اصل با **گردش کار تأیید** اجرا می‌شود: سند دستی ابتدا موقت (پارک) می‌شود، سیستم آن را بر اساس مبلغ و حساب‌ها به تأییدکننده مناسب می‌فرستد و فقط پس از تأیید ثبت می‌شود. سیستم اجازه نمی‌دهد تهیه‌کننده سند خودش را تأیید کند.',
            'The **maker-checker** principle, or "four-eyes principle", says that whoever creates an entry must not be the one who approves it. In an ERP it is enforced by an **approval workflow**: a manual entry is first parked, the system routes it to the right approver based on amount and accounts, and it posts only after approval. The system does not let the maker approve their own document.',
          ),
        },
        {
          type: 'diagram',
          id: 'je-workflow',
          caption: t(
            'مسیر یک سند دستی: تهیه، پیوست مدارک، اعتبارسنجی، تأیید، ثبت، بازبینی و در صورت نیاز برگشت',
            'The path of a manual entry: prepare, attach evidence, validate, approve, post, review and, if needed, reverse',
          ),
        },
        {
          type: 'steps',
          items: [
            { title: t('تهیه', 'Prepare'), text: t('حسابدار سند را از الگو یا از صفر می‌سازد و شرح روشن می‌نویسد.', 'The accountant builds the entry from a template or from scratch and writes clear text.') },
            { title: t('پیوست', 'Attach'), text: t('محاسبه، برگه کارکرد، سفارش خرید یا قرارداد به سند پیوست می‌شود.', 'The calculation, field ticket, PO or contract is attached to the document.') },
            { title: t('اعتبارسنجی', 'Validate'), text: t('قواعد سیستم کدگذاری، دوره و حساب‌های مجاز را بررسی می‌کنند؛ سند ناقص جلو نمی‌رود.', 'System rules check the coding, the period and the allowed accounts; an incomplete entry cannot move on.') },
            { title: t('تأیید', 'Approve'), text: t('تأییدکننده مدارک را باز می‌کند، محاسبه را می‌آزماید و تأیید یا رد می‌کند.', 'The approver opens the evidence, tests the calculation and approves or rejects.') },
            { title: t('ثبت', 'Post'), text: t('سند ثبت‌شده شماره قطعی می‌گیرد و مانده‌ها تغییر می‌کنند.', 'The posted document gets its final number and balances change.') },
            { title: t('بازبینی', 'Review'), text: t('پس از ثبت، کنترلر فهرست سندهای دستی و گزارش‌های هشدار را مرور می‌کند.', 'After posting, the controller reviews the manual journal listing and red-flag reports.') },
            { title: t('برگشت', 'Reverse'), text: t('اگر سند اشتباه باشد، با سند برگشتی اصلاح می‌شود؛ هرگز حذف نمی‌شود.', 'If the entry is wrong, it is corrected with a reversal; it is never deleted.') },
          ],
        },
        {
          type: 'table',
          caption: t('ماتریس سقف اختیارات مسار پترولیوم برای سند دستی (ارقام فرضی‌اند)', 'Masar Petroleum’s authority matrix for manual entries (illustrative figures)'),
          head: [t('قاعده (جمع بدهکار سند)', 'Rule (document debit total)'), t('تأییدکننده', 'Approver'), t('توضیح', 'Note')],
          rows: [
            [t('تا 500,000', 'Up to 500,000'), t('حسابدار ارشد دفتر کل', 'Senior GL accountant'), blank],
            [t('500,001 تا 5,000,000', '500,001 to 5,000,000'), t('مدیر مالی', 'Finance manager'), blank],
            [t('5,000,001 تا 20,000,000', '5,000,001 to 20,000,000'), t('کنترلر مالی', 'Financial controller'), blank],
            [t('بیش از 20,000,000', 'Above 20,000,000'), t('مدیر ارشد مالی (CFO)', 'Chief financial officer (CFO)'), blank],
            [t('هر مبلغ روی حساب مشترک یا حساب جاری شرکا', 'Any amount on the joint account or partner current accounts'), t('افزون بر بالا: مسئول حسابداری مشارکت', 'In addition: JV accounting lead'), t('سهم شرکا تغییر می‌کند', 'Partner shares change')],
            [t('هر تغییر در نشانگر R/N یا طبقه هزینه', 'Any change to the R/N flag or cost category'), t('افزون بر بالا: مسئول بازیافت هزینه', 'In addition: cost-recovery lead'), t('ادعای بازیافت تغییر می‌کند', 'The recovery claim changes')],
            [t('هر مبلغ روی حقوق مالکانه، حساب معلق یا بین شرکتی', 'Any amount on equity, suspense or intercompany accounts'), t('دست‌کم کنترلر مالی', 'At least the financial controller'), t('حساب‌های حساس', 'Sensitive accounts')],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('شکستن سند برای فرار از سقف', 'Splitting entries to dodge a limit'),
          text: t(
            'اگر حسابداری یک تعهدی 9,850,000 را به دو سند 4,950,000 و 4,900,000 بشکند، هر سند جداگانه به مدیر مالی می‌رود، در حالی که مجموع باید به کنترلر برسد. گردش تأیید خوب جمع سندهای یک کاربر، یک حساب و یک روز را هم می‌سنجد و بازبین‌ها مبالغ «کمی کمتر از سقف» را جدا بررسی می‌کنند.',
            'If an accountant splits a 9,850,000 accrual into two entries of 4,950,000 and 4,900,000, each goes separately to the finance manager, although the total should reach the controller. A good workflow also tests the cumulative amount per user, account and day, and reviewers look separately at amounts "just under the limit".',
          ),
        },
        { type: 'h', text: t('مدارک پشتیبان اجباری', 'Mandatory supporting documents') },
        {
          type: 'table',
          caption: t('چه سندی چه پیوستی لازم دارد', 'Which entry needs which attachment'),
          head: [t('نوع سند دستی', 'Type of manual entry'), t('پیوست اجباری', 'Mandatory attachment'), t('چرا', 'Why')],
          rows: [
            [t('تعهدی خدمات انجام‌شده', 'Accrual for services performed'), t('برگه کارکرد یا گزارش روزانه امضاشده، سطر سفارش خرید، محاسبه برآورد', 'Signed field ticket or daily report, PO line, estimate calculation'), t('شرکا و حسابرسان طرف دولتی هزینه را فقط با مدرک می‌پذیرند', 'Partners and government-side auditors accept costs only with evidence')],
            [t('انتقال بین اشیای هزینه', 'Reclassification between cost objects'), t('سند اصلی، یادداشت علت، تأیید صاحب AFE یا مرکز هزینه', 'Original document, reason memo, approval of the AFE or cost-centre owner'), t('سهم شرکا و قابلیت بازیافت را تغییر می‌دهد', 'Changes partner shares and recoverability')],
            [t('ذخیره (مثلاً دعوی حقوقی)', 'Provision (for example a legal claim)'), t('یادداشت محاسبه و گزارش حقوقی یا فنی', 'Calculation memo and legal or engineering report'), t('برآوردی و قضاوتی است', 'It is an estimate and a judgement')],
            [t('اصلاح سند ثبت‌شده', 'Correction of a posted entry'), t('ارجاع به شماره سند اصلی و شرح خطا', 'Reference to the original document number and a description of the error'), t('ردپای حسابرسی پیوسته بماند', 'Keeps the audit trail unbroken')],
            [t('پیش‌پرداخت', 'Prepayment'), t('قرارداد یا فاکتور و جدول مستهلک کردن', 'Contract or invoice and the release schedule'), t('مبلغ و مدت آزادسازی را ثابت می‌کند', 'Proves the amount and release period')],
            [t('تسعیر ارز دستی', 'Manual FX revaluation'), t('منبع نرخ ارز پایان دوره', 'Source of the period-end exchange rate'), t('نرخ قابل بازبینی باشد', 'The rate must be verifiable')],
          ],
        },
        {
          type: 'p',
          text: t(
            'در ERP پیوست‌ها (تصویر، PDF، صفحه‌گسترده) کنار خود سند ذخیره می‌شوند و تأییدکننده آن‌ها را در کارتابل گردش کار می‌بیند. در مسار پترولیوم یک قاعده سیستمی می‌گوید سند `JM` یا `JA` بدون دست‌کم یک پیوست به گردش تأیید نمی‌رود. پنج سال بعد که حسابرس شریک می‌پرسد «این تعهدی بر چه اساسی بود؟»، جواب در خود سند است.',
            'In the ERP, attachments (images, PDFs, spreadsheets) are stored with the document itself, and the approver sees them in the workflow inbox. At Masar Petroleum a system rule says a `JM` or `JA` document cannot enter the approval workflow without at least one attachment. Five years later, when a partner’s auditor asks "what was this accrual based on?", the answer is in the document.',
          ),
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('در عمل: امضاهای سند', 'In practice: voucher signatures'),
          text: t(
            'سند کاغذی در ایران معمولاً سه امضا دارد: **تنظیم‌کننده**، **رسیدگی‌کننده** و **تأییدکننده**، و مدارک مثبته به آن پیوست می‌شوند. ERP این امضاها را با تأیید الکترونیکی جایگزین می‌کند، اما نسخه چاپی سند باید نام و زمان هر تأیید را نشان دهد. IFRS درباره گردش تأیید قاعده‌ای ندارد؛ با این حال استاندارد حسابرسی ISA 240 حسابرس را ملزم می‌کند مناسب بودن سندهای حسابداری و تعدیلات را بیازماید، و نخستین پرسش او این است که چه کسی سند را تأیید کرده است.',
            'A paper voucher in Iran usually carries three signatures: the **preparer**, the **reviewer** and the **approver**, with the source documents attached. The ERP replaces these with electronic approvals, but the printed voucher must show the name and time of each approval. IFRS has no rule on approval workflows; however, auditing standard ISA 240 requires the auditor to test the appropriateness of journal entries and other adjustments, and the first question is who approved the entry.',
          ),
        },
      ],
    },
    {
      id: 'validation-periods',
      title: t('قواعد اعتبارسنجی و جایگزینی، و دوره‌های حسابداری', 'Validation and Substitution Rules, and Posting Periods'),
      blocks: [
        {
          type: 'p',
          text: t(
            '**قاعده اعتبارسنجی (Validation)** شرطی است که هنگام ذخیره یا ثبت سند بررسی می‌شود؛ اگر برقرار نباشد، سیستم **خطا** می‌دهد (ثبت متوقف می‌شود) یا **هشدار** (ثبت ممکن است، اما تأییدکننده باید ببیند). **قاعده جایگزینی (Substitution)** که برخی آن را قاعده استخراج می‌نامند، مقدار یک فیلد را خودکار از فیلد دیگر پر یا جایگزین می‌کند. این دو با هم کدگذاری مشترک همه دوره‌ها را اجرا می‌کنند.',
            'A **validation rule** is a condition checked when a document is saved or posted; if it fails, the system gives an **error** (posting stops) or a **warning** (posting is possible, but the approver must see it). A **substitution rule**, which some call a derivation rule, fills or replaces a field’s value automatically from another field. Together they enforce the coding convention shared across all the courses.',
          ),
        },
        {
          type: 'table',
          caption: t('کدگذاری مسار پترولیوم در یک سطر سند', 'Masar Petroleum’s coding on one document line'),
          head: [t('جزء', 'Segment'), t('نمونه', 'Example'), t('معنا', 'Meaning')],
          rows: [
            [t('کد شرکت', 'Company code'), t('`MP01`', '`MP01`'), t('مسار پترولیوم، اپراتور میدان آریا', 'Masar Petroleum, operator of the Arya field')],
            [t('مرکز هزینه', 'Cost centre'), t('`CC-ARY-PRD`', '`CC-ARY-PRD`'), t('عملیات تولید میدان آریا', 'Arya field production operations')],
            [t('عنصر WBS', 'WBS element'), t('`AFE-2025-014.02.03`', '`AFE-2025-014.02.03`'), t('AFE حفاری توسعه‌ای، عنصر لوله‌گذاری و سیمان‌کاری', 'Development drilling AFE, casing and cementing element')],
            [t('عنصر هزینه / حساب', 'Cost element / GL account'), t('1510 یا 5110', '1510 or 5110'), t('دارایی در جریان تکمیل یا هزینه عملیات تولید', 'Assets under construction or production operating expense')],
            [t('نشانگر قابل بازیافت', 'Recoverable flag'), t('R یا N', 'R or N'), t('قابل بازیافت یا غیرقابل بازیافت طبق قرارداد نفتی', 'Recoverable or non-recoverable under the petroleum contract')],
            [t('طبقه هزینه', 'Cost category'), t('اکتشاف، توسعه، عملیاتی', 'Exploration, Development, Operating'), t('سطر صورت بازیافت هزینه', 'The line in the cost-recovery statement')],
          ],
        },
        {
          type: 'formula',
          text: t(
            '`MP01` ← (`CC-ARY-PRD` یا `AFE-2025-014.02.03`) ← حساب ← R/N ← طبقه',
            '`MP01` → (`CC-ARY-PRD` or `AFE-2025-014.02.03`) → account → R/N → category',
          ),
          note: t(
            'هر سطر فقط یک شیء هزینه واقعی دارد: یا مرکز هزینه یا عنصر WBS، نه هر دو.',
            'Each line has exactly one real cost object: either a cost centre or a WBS element, never both.',
          ),
        },
        {
          type: 'table',
          caption: t('قواعد اعتبارسنجی سندهای دستی در مسار پترولیوم', 'Validation rules for manual entries at Masar Petroleum'),
          head: [t('کد', 'Code'), t('شرط', 'Condition'), t('نتیجه', 'Result')],
          rows: [
            [t('V1', 'V1'), t('حساب 1510 فقط با عنصر WBSی که با `AFE-` شروع می‌شود', 'Account 1510 only with a WBS element starting `AFE-`'), t('خطا', 'Error')],
            [t('V2', 'V2'), t('هر حساب هزینه (5xxx) و حساب‌های 1505 و 1510 نشانگر R یا N می‌خواهند', 'Every expense account (5xxx) and accounts 1505 and 1510 need an R or N flag'), t('خطا', 'Error')],
            [t('V3', 'V3'), t('طبقه هزینه باید با طبقه شیء هزینه یکی باشد (`AFE-2025-014` توسعه است، `CC-ARY-PRD` عملیاتی)', 'The cost category must match the cost object’s category (`AFE-2025-014` is Development, `CC-ARY-PRD` is Operating)'), t('خطا', 'Error')],
            [t('V4', 'V4'), t('یک شیء هزینه واقعی در هر سطر', 'One real cost object per line'), t('خطا', 'Error')],
            [t('V5', 'V5'), t('حساب‌های کنترل 1210، 1310، 2110 و 2120 در نوع‌های `JM` و `JA` مجاز نیستند', 'Control accounts 1210, 1310, 2110 and 2120 are not allowed in `JM` and `JA` documents'), t('خطا', 'Error')],
            [t('V6', 'V6'), t('حساب‌های 1710 تا 1730 (حساب مشترک و حساب جاری شرکا) کد مشارکت `JV-ARY` می‌خواهند', 'Accounts 1710 to 1730 (joint account and partner current accounts) need the `JV-ARY` venture code'), t('خطا', 'Error')],
            [t('V7', 'V7'), t('نوع `JA` بدون تاریخ برگشت', 'A `JA` document without a reversal date'), t('خطا', 'Error')],
            [t('V8', 'V8'), t('شرح کوتاه‌تر از 15 نویسه یا فقط «اصلاحیه»', 'Text shorter than 15 characters or just "adjustment"'), t('هشدار', 'Warning')],
          ],
        },
        {
          type: 'table',
          caption: t('قواعد جایگزینی (پر کردن خودکار)', 'Substitution rules (automatic fill)'),
          head: [t('اگر کاربر این را وارد کند', 'If the user enters'), t('سیستم این را پر می‌کند', 'The system fills in')],
          rows: [
            [t('مرکز هزینه `CC-ARY-*`', 'Cost centre `CC-ARY-*`'), t('کد مشارکت `JV-ARY` و مرکز سود «میدان آریا»', 'Venture code `JV-ARY` and profit centre "Arya field"')],
            [t('عنصر WBS `AFE-2025-014.*`', 'WBS element `AFE-2025-014.*`'), t('طبقه «توسعه» و کد مشارکت `JV-ARY`', 'Category Development and venture code `JV-ARY`')],
            [t('حساب 5910 (جرائم و خسارات)', 'Account 5910 (fines and penalties)'), t('نشانگر N، بدون امکان تغییر', 'Flag N, locked')],
            [t('تأمین‌کننده‌ای که شرکت گروه است', 'A vendor that is a group company'), t('فیلد طرف معامله درون‌گروهی (Trading partner)', 'The trading partner field')],
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: t('سندی که سیستم رد می‌کند', 'An entry the system rejects'),
          text: t(
            'حسابدار می‌خواهد 300,000 هزینه لوله‌گذاری را با «بدهکار 1510، مرکز هزینه `CC-ARY-PRD`، R، توسعه» ثبت کند. سیستم با قاعده V1 خطا می‌دهد: «حساب 1510 به عنصر WBS نیاز دارد». سطر درست: بدهکار 1510 روی `AFE-2025-014.02.03`، نشانگر R، طبقه توسعه. خطای ساده‌ای که اگر رد نمی‌شد، هزینه سرمایه‌ای را بی‌صاحب در ترازنامه رها می‌کرد و در گزارش AFE دیده نمی‌شد.',
            'An accountant tries to post 300,000 of casing cost as "debit 1510, cost centre `CC-ARY-PRD`, R, Development". Rule V1 raises an error: "account 1510 requires a WBS element". The correct line: debit 1510 on `AFE-2025-014.02.03`, flag R, category Development. Had it not been rejected, this simple error would have left a capital cost orphaned on the balance sheet and invisible in the AFE report.',
          ),
        },
        { type: 'h', text: t('دوره‌های حسابداری باز و بسته', 'Open and closed posting periods') },
        {
          type: 'p',
          text: t(
            'سال مالی در ERP به **12 دوره عادی** و چند **دوره ویژه** (مثلاً 13 تا 16) تقسیم می‌شود. هر دوره را می‌توان برای گروه‌های حساب (دارایی‌ها، تأمین‌کنندگان، دفتر کل) و گروه‌های کاربر جداگانه باز یا بسته کرد. ماژول انبار و تدارکات دوره خودش را دارد و معمولاً زودتر بسته می‌شود. دوره بسته یعنی هیچ سندی با تاریخ آن دوره ثبت نمی‌شود؛ دوره آینده‌ای که هنوز باز نشده، جلوی ثبت با تاریخ جلوتر را می‌گیرد.',
            'In an ERP the fiscal year is split into **12 normal periods** and a few **special periods** (13 to 16, for example). Each period can be opened or closed separately for account groups (assets, vendors, general ledger) and user groups. The inventory and procurement modules have their own period, usually closed earlier. A closed period means no document dated in it can be posted; a future period not yet opened stops anyone posting with a later date.',
          ),
        },
        {
          type: 'table',
          caption: t('وضعیت دوره‌ها در روز کاری سوم ماه 10', 'Period status on working day 3 of month 10'),
          head: [t('دوره', 'Period'), t('عملیات (GRN، SES، فاکتور)', 'Operations (GRN, SES, invoices)'), t('تیم بستن مالی', 'Finance close team'), t('توضیح', 'Note')],
          rows: [
            [t('09', '09'), t('بسته', 'Closed'), t('باز تا روز کاری پنجم', 'Open until working day 5'), t('فقط ثبت‌های بستن ماه', 'Close adjustments only')],
            [t('10', '10'), t('باز', 'Open'), t('باز', 'Open'), t('دوره جاری', 'Current period')],
            [t('11', '11'), t('بسته', 'Closed'), t('بسته', 'Closed'), t('جلوی ثبت با تاریخ آینده را می‌گیرد', 'Prevents post-dating')],
            [t('13 تا 16', '13 to 16'), t('بسته', 'Closed'), t('بسته تا پایان سال', 'Closed until year-end'), t('کنترلر برای تعدیلات حسابرسی باز می‌کند', 'Opened by the controller for audit adjustments')],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('دوره‌های ویژه به چه کار می‌آیند؟', 'What are special periods for?'),
          text: t(
            'ثبت‌های پایان سال (تعدیلات حسابرسی، مالیات، طبقه‌بندی مجدد برای صورت‌های مالی) در دوره 13 و بعد از آن ثبت می‌شوند. ترازنامه پایان سال همان است، اما نتیجه عملیات ماه 12 با تعدیلات حسابرسی قاطی نمی‌شود و هر کس می‌تواند ببیند چه چیزی پس از بستن ماه آخر تغییر کرد.',
            'Year-end entries (audit adjustments, tax, reclassifications for the financial statements) are posted to period 13 and later. The year-end balance sheet is the same, but month 12’s operating results are not mixed with audit adjustments, and anyone can see what changed after the last month was closed.',
          ),
        },
      ],
    },
    {
      id: 'corrections-review',
      title: t('اصلاح اشتباه، بازبینی سندها و نشانه‌های هشدار', 'Corrections, Journal Review and Red Flags'),
      blocks: [
        {
          type: 'p',
          text: t(
            'در ERP سند ثبت‌شده **هرگز حذف نمی‌شود** و مبلغ و حساب آن ویرایش نمی‌شود؛ فقط برخی فیلدهای توصیفی قابل تغییرند و همان تغییر هم ثبت می‌شود. برای اصلاح دو راه هست: **سند برگشتی** که کل سند را با ارجاع به آن خنثی می‌کند و سپس سند درست ثبت می‌شود، یا **سند اصلاحی** که فقط تفاوت را جابه‌جا می‌کند.',
            'In an ERP a posted document is **never deleted**, and its amounts and accounts are never edited; only some descriptive fields can be changed, and even that change is logged. There are two ways to correct: a **reversal** that cancels the whole document with a reference to it, followed by the correct entry; or an **adjusting entry** that moves only the difference.',
          ),
        },
        {
          type: 'compare',
          left: {
            title: t('سند برگشتی و ثبت دوباره', 'Reversal and re-post'),
            items: [
              t('سیستم سند آینه‌ای با ارجاع به سند اصلی می‌سازد', 'The system creates a mirror document referring to the original'),
              t('برای وقتی که کل سند غلط است: مبلغ، دوره، سند تکراری', 'For when the whole document is wrong: amount, period, duplicate'),
              t('ردپا بسیار روشن است: اصلی، برگشتی، درست', 'The trail is very clear: original, reversal, correct entry'),
              t('سه سند به‌جای یک سند', 'Three documents instead of one'),
            ],
          },
          right: {
            title: t('سند اصلاحی (طبقه‌بندی مجدد)', 'Adjusting entry (reclassification)'),
            items: [
              t('فقط بخش غلط را جابه‌جا می‌کند', 'Moves only the wrong part'),
              t('برای وقتی که مبلغ درست است و شیء هزینه یا حساب غلط', 'For when the amount is right but the cost object or account is wrong'),
              t('شرح باید شماره سند اصلی را داشته باشد', 'Its text must carry the original document number'),
              t('اگر خطا از داده پایه است، داده پایه هم باید اصلاح شود', 'If the error came from master data, the master data must be fixed too'),
            ],
          },
        },
        {
          type: 'p',
          text: t(
            'نمونه: SES-7745 برای سیمان‌کاری لوله جداری به مبلغ 380,000 در ماه 9 ثبت شد. چون سطر سفارش خرید به‌اشتباه به مرکز هزینه `CC-ARY-PRD` تخصیص داشت، ERP آن را به هزینه عملیات تولید برد؛ در حالی که جای آن `AFE-2025-014.02.03` و طبقه «توسعه» بود. خطا در ماه 10 کشف شد و ماه 9 بسته است.',
            'Example: SES-7745 for casing cementing, 380,000, was posted in month 9. Because the PO line was wrongly assigned to cost centre `CC-ARY-PRD`, the ERP charged production operating expense, when it belonged on `AFE-2025-014.02.03`, category Development. The error is found in month 10, and month 9 is closed.',
          ),
        },
        {
          type: 'journal',
          title: t('دو راه اصلاح در دوره باز (ماه 10)', 'Two ways to correct in the open period (month 10)'),
          entries: [
            {
              date: t('راه الف، روز 4 ماه 10', 'Option A, day 4, month 10'),
              lines: [
                { account: ac.grir, debit: 380000 },
                { account: ac.opexPrd, credit: 380000 },
              ],
              memo: t(
                'لغو SES-7745 در ماژول تدارکات (سند برگشتی خودکار). این راه فقط وقتی ساده است که فاکتور هنوز با آن SES تطبیق نشده باشد.',
                'Cancel SES-7745 in procurement (automatic reversal). This route is simple only if the invoice has not yet been matched to that SES.',
              ),
            },
            {
              date: t('راه الف، روز 4 ماه 10', 'Option A, day 4, month 10'),
              lines: [
                { account: ac.aucCasing, debit: 380000 },
                { account: ac.grir, credit: 380000 },
              ],
              memo: t('پس از اصلاح سطر سفارش خرید، SES دوباره با تخصیص درست ثبت می‌شود.', 'After the PO line is fixed, the SES is re-entered with the right account assignment.'),
            },
            {
              date: t('راه ب، روز 4 ماه 10', 'Option B, day 4, month 10'),
              lines: [
                { account: ac.aucCasing, debit: 380000 },
                { account: ac.opexPrd, credit: 380000 },
              ],
              memo: t(
                'سند اصلاحی `JM` با شرح «طبقه‌بندی مجدد SES-7745 از `CC-ARY-PRD` به `AFE-2025-014.02.03`؛ تخصیص اشتباه سطر سفارش خرید» و تأیید صاحب AFE. سطر سفارش خرید هم اصلاح می‌شود تا SESهای بعدی درست بنشینند.',
                '`JM` adjusting entry with the text "reclassify SES-7745 from `CC-ARY-PRD` to `AFE-2025-014.02.03`; wrong PO account assignment" and the AFE owner’s approval. The PO line is fixed too, so later SESs land correctly.',
              ),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('دوره بسته را برای زیباسازی باز نکنید', 'Do not reopen a closed period to tidy up'),
          text: t(
            'اصلاح را در دوره باز جاری و با ارجاع به سند اصلی ثبت کنید. بازگشایی دوره‌ای که گزارش شده، فقط برای خطای بااهمیت و طبق رویه مصوب (با تأیید کنترلر) مجاز است؛ وگرنه گزارش‌هایی که شرکا و مدیران دریافت کرده‌اند با دفاتر نمی‌خوانند.',
            'Post the correction in the current open period with a reference to the original. Reopening a period that has been reported is allowed only for a material error and under an approved procedure (with the controller’s approval); otherwise the reports partners and managers already received no longer agree with the books.',
          ),
        },
        { type: 'h', text: t('کنترل‌های بازبینی سندها', 'Journal entry review controls') },
        {
          type: 'list',
          items: [
            t('**بازبینی ماهانه فهرست سندهای دستی** توسط کنترلر: همه سندهای بالای حد معین و نمونه‌ای از بقیه.', '**Monthly review of the manual journal listing** by the controller: every entry above a threshold and a sample of the rest.'),
            t('**گزارش شکاف شماره‌ها** برای هر نوع سند، برای آزمون کامل بودن.', '**Number-gap report** for each document type, to test completeness.'),
            t('**گزارش خودتأییدی**: سندهایی که تهیه‌کننده و تأییدکننده یکی است؛ باید صفر باشد.', '**Self-approval report**: entries whose maker and approver are the same; it must be zero.'),
            t('**سندهای پس از بستن**: سندهایی که بعد از روز کاری پنجم به دوره قبل ثبت شده‌اند.', '**Post-close entries**: documents posted to the prior period after working day 5.'),
            t('**تحلیل برگشت‌ها**: کاربری که سندهایش زیاد برگشت می‌خورد، آموزش یا بررسی می‌خواهد.', '**Reversal analysis**: a user whose entries are often reversed needs training or review.'),
            t('**بازبینی دسترسی‌ها**: چه کسانی می‌توانند سند دستی ثبت یا تأیید کنند.', '**Access review**: who can post or approve manual entries.'),
          ],
        },
        {
          type: 'table',
          caption: t('نشانه‌های هشدار در سندهای دستی', 'Red flags in manual journal entries'),
          head: [t('نشانه هشدار', 'Red flag'), t('نمونه در مسار پترولیوم', 'Example at Masar Petroleum'), t('چرا مشکوک است', 'Why it is suspicious')],
          rows: [
            [t('ثبت در شب، جمعه یا تعطیلی', 'Posted at night, on Friday or a holiday'), t('جمعه ساعت 23:40', 'Friday at 23:40'), t('بیرون از ساعت کاری و بدون نظارت', 'Outside working hours and unsupervised')],
            [t('مبلغ رُند', 'Round amount'), t('دقیقاً 3,000,000', 'Exactly 3,000,000'), t('هزینه واقعی به‌ندرت رُند است؛ نشانه عدد ساختگی', 'Real costs are rarely round; a sign of a plug figure')],
            [t('کمی کمتر از سقف تأیید', 'Just under an approval limit'), t('4,950,000 با سقف 5,000,000', '4,950,000 against a 5,000,000 limit'), t('فرار از تأییدکننده بالاتر', 'Avoiding a higher approver')],
            [t('حساب یا ترکیب غیرعادی', 'Unusual account or combination'), t('بدهکار 2130، بستانکار 4110 درآمد فروش نفت', 'Debit 2130, credit 4110 oil sales revenue'), t('دلیل تجاری روشنی ندارد', 'No clear business reason')],
            [t('ثبت مستقیم توسط مدیران ارشد', 'Posted directly by senior staff'), t('مدیر مالی سند را ساخت و خودش تأیید کرد', 'The finance manager created and approved it'), t('خطر دور زدن کنترل‌ها', 'Risk of management override')],
            [t('شرح مبهم و بدون پیوست', 'Vague text, no attachment'), t('«اصلاحیه»، «طبق دستور»', '"Adjustment", "as instructed"'), t('قابل ردیابی نیست', 'Cannot be traced')],
            [t('ثبت پس از بستن یا با تاریخ گذشته', 'Posted after the close or backdated'), t('روز کاری هشتم به دوره 09', 'Working day 8 into period 09'), t('گزارش‌های داده‌شده را تغییر می‌دهد', 'Changes reports already issued')],
            [t('تغییر R/N یا سهم مشارکت', 'Changing R/N or the venture split'), t('تبدیل دسته‌جمعی N به R', 'Bulk change of N to R'), t('ادعای بازیافت و صورت‌حساب شرکا را بزرگ می‌کند', 'Inflates the cost-recovery claim and partner billing')],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('در عمل: حسابرسان و شرکا چه می‌کنند', 'In practice: what auditors and partners do'),
          text: t(
            'حسابرسان امروز کل جامعه سندها را از ERP بیرون می‌کشند و با تحلیل داده، سندهای دارای این ویژگی‌ها را جدا می‌کنند؛ ISA 240 هم آزمون سندهای دستی و تعدیلات را برای پاسخ به خطر دور زدن کنترل‌ها الزامی کرده است. شرکای مشارکت طبق حق حسابرسی در موافقت‌نامه عملیات مشترک (JOA) و حسابرسان طرف دولتی قرارداد نفتی هم همین کار را روی حساب مشترک و صورت بازیافت هزینه انجام می‌دهند.',
            'Auditors today extract the whole population of entries from the ERP and use data analytics to isolate those with these characteristics; ISA 240 also requires testing journal entries and adjustments in response to the risk of management override. Joint venture partners, under the audit rights in the joint operating agreement (JOA), and the government side’s auditors under the petroleum contract do the same on the joint account and the cost-recovery statement.',
          ),
        },
      ],
    },
    {
      id: 'erp-grn-ses',
      title: t('ERP در عمل: نقش‌ها، داده پایه و کاهش تعهدی دستی با GRN و SES', 'The ERP at Work: Roles, Master Data and Fewer Manual Accruals with GRN and SES'),
      blocks: [
        {
          type: 'p',
          text: t(
            '**رسید کالا (GRN)** برای مواد و **برگه ثبت خدمات (SES)** برای خدمات، سندهای دریافت در فرایند خرید تا پرداخت هستند و تطبیق سه‌طرفه یعنی سفارش خرید، GRN یا SES و فاکتور. وقتی انباردار و مهندس میدان این سندها را به‌موقع ثبت کنند، ERP هزینه را **در لحظه دریافت یا تأیید** ثبت می‌کند، نه وقتی فاکتور می‌رسد. پس «دریافت‌شده ولی فاکتورنشده» از قبل به‌صورت مانده بستانکار GR/IR در دفاتر هست و برای آن تعهدی دستی لازم نیست.',
            'The **goods received note (GRN)** for materials and the **service entry sheet (SES)** for services are the receipt documents of procure-to-pay, and the three-way match is PO, GRN or SES, and invoice. When storekeepers and field engineers post them on time, the ERP books the cost **at the moment of receipt or acceptance**, not when the invoice arrives. So "received but not invoiced" is already in the books as a GR/IR credit balance, and no manual accrual is needed for it.',
          ),
        },
        {
          type: 'journal',
          title: t('آنچه ERP خودکار ثبت می‌کند', 'What the ERP posts automatically'),
          entries: [
            {
              date: t('روز 12 ماه 9', 'Day 12, month 9'),
              lines: [
                { account: ac.aucCasing, debit: 1250000 },
                { account: ac.grir, credit: 1250000 },
              ],
              memo: t('GRN-50021 با هزینه مستقیم: لوله جداری مستقیم به AFE رفت، نه به موجودی انبار.', 'GRN-50021, direct charge: casing went straight to the AFE, not into stock.'),
            },
            {
              date: t('روز 15 ماه 9', 'Day 15, month 9'),
              lines: [
                { account: ac.inventory, debit: 340000 },
                { account: ac.grir, credit: 340000 },
              ],
              memo: t('GRN-50034 برای موجودی: قطعات یدکی کمپرسور به انبار مرکزی.', 'GRN-50034 to stock: compressor spares into the Central Warehouse.'),
            },
            {
              date: t('روز 30 ماه 9', 'Day 30, month 9'),
              lines: [
                { account: ac.camp, debit: 210000 },
                { account: ac.grir, credit: 210000 },
              ],
              memo: t('SES-7768: پذیرایی کمپ در ماه 9، با برگه‌های امضاشده تعداد وعده‌ها.', 'SES-7768: camp catering for month 9, with signed meal-count sheets.'),
            },
            {
              date: t('روز 26 ماه 10', 'Day 26, month 10'),
              lines: [
                { account: ac.grir, debit: 1250000 },
                { account: ac.ap, credit: 1250000 },
              ],
              memo: t('فاکتور لوله جداری با سفارش خرید و GRN-50021 تطبیق شد.', 'The casing invoice matched the PO and GRN-50021.'),
            },
            {
              date: t('روز 25 ماه 11', 'Day 25, month 11'),
              lines: [
                { account: ac.ap, debit: 1250000 },
                { account: ac.bank, credit: 1250000 },
              ],
              memo: t('اجرای پرداخت در سررسید.', 'Payment run on the due date.'),
            },
          ],
        },
        {
          type: 'table',
          caption: t('تعهدی‌های دستی پایان ماه، پیش و پس از ثبت به‌موقع GRN و SES (ارقام فرضی)', 'Month-end manual accruals before and after on-time GRN and SES (illustrative figures)'),
          head: [t('شاخص', 'Measure'), t('پیش (تعهدی از صفحه‌گسترده)', 'Before (spreadsheet accruals)'), t('پس (GRN و SES به‌موقع)', 'After (on-time GRN and SES)')],
          numericCols: [1, 2],
          rows: [
            [t('تعداد سندهای تعهدی دستی', 'Number of manual accrual entries'), 46, 7],
            [t('مبلغ تعهدی‌های دستی', 'Amount of manual accruals'), 8400000, 950000],
            [t('روزهای لازم برای تعهدی‌ها در بستن ماه', 'Close days spent on accruals'), 3, 1],
            [t('خطاهای تعهدی یافته‌شده توسط حسابرس در سال', 'Accrual errors found by the auditor in a year'), 5, 0],
          ],
        },
        {
          type: 'p',
          text: t(
            'آنچه هنوز تعهدی دستی می‌خواهد: خدماتی که انجام شده ولی SES آن‌ها دیر ثبت می‌شود (برگه کارکرد دیر رسیده)، هزینه‌های بدون سفارش خرید مانند برخی عوارض دولتی، اجاره‌ها یا آب و برق، حق‌الزحمه حقوقی، پاداش و بهره. قاعده مسار پترولیوم: تعهدی دستی برای خدمات باید شماره سطر سفارش خرید و SES مورد انتظار را داشته باشد تا بازبین مطمئن شود همان هزینه دو بار ثبت نمی‌شود.',
            'What still needs a manual accrual: services performed whose SES is entered late (the field ticket arrived late), costs without a PO such as some government charges, rentals or utilities, legal fees, bonuses and interest. Masar Petroleum’s rule: a manual accrual for services must carry the PO line number and the expected SES, so that the reviewer can be sure the same cost is not booked twice.',
          ),
        },
        {
          type: 'table',
          caption: t('داده پایه و تنظیمات پشت مدیریت سندها', 'Master data and configuration behind journal entry management'),
          head: [t('داده پایه یا تنظیم', 'Master data or setting'), t('چه چیزی را کنترل می‌کند', 'What it controls')],
          rows: [
            [t('پرونده حساب دفتر کل', 'GL account master'), t('ورود دستی مجاز است یا نه؛ کدام فیلدها (WBS، R/N، مرکز هزینه) اجباری‌اند', 'Whether manual posting is allowed; which fields (WBS, R/N, cost centre) are mandatory')],
            [t('نوع سند و محدوده شماره', 'Document types and number ranges'), t('شماره‌گذاری، حساب‌های مجاز، گردش تأیید', 'Numbering, allowed accounts, approval routing')],
            [t('نوع دوره حسابداری', 'Posting period variant'), t('دوره‌های باز و بسته برای هر گروه حساب و کاربر', 'Open and closed periods per account group and user group')],
            [t('قواعد اعتبارسنجی و جایگزینی', 'Validation and substitution rules'), t('درستی کدگذاری هر سطر', 'Correct coding on every line')],
            [t('ماتریس سقف اختیارات', 'Authority matrix'), t('مسیر تأیید بر اساس مبلغ و حساب', 'Approval route by amount and account')],
            [t('الگوها و برنامه‌های سند تکراری', 'Templates and recurring schedules'), t('سندهای استاندارد و دوره‌ای', 'Standard and periodic entries')],
            [t('کاربران و نقش‌ها', 'Users and roles'), t('چه کسی می‌سازد، تأیید می‌کند یا فقط می‌بیند', 'Who creates, approves or only views')],
          ],
        },
        {
          type: 'table',
          caption: t('چه کسی چه می‌کند', 'Who does what'),
          head: [t('نقش', 'Role'), t('انجام می‌دهد', 'Does'), t('نباید انجام دهد', 'Must not do')],
          rows: [
            [t('انباردار', 'Storekeeper'), t('GRN را هنگام رسیدن کالا ثبت می‌کند', 'Posts the GRN when goods arrive'), t('فاکتور ثبت کند', 'Post invoices')],
            [t('مهندس میدان یا مسئول قرارداد', 'Field engineer or contract holder'), t('SES را با برگه کارکرد امضاشده تأیید می‌کند', 'Accepts the SES with a signed field ticket'), t('تأمین‌کننده یا قیمت را تغییر دهد', 'Change the vendor or prices')],
            [t('حسابدار دفتر کل (تهیه‌کننده)', 'GL accountant (maker)'), t('سند دستی می‌سازد و مدارک را پیوست می‌کند', 'Prepares manual entries and attaches evidence'), t('سند خودش را تأیید کند', 'Approve own entries')],
            [t('مدیر مالی یا کنترلر (تأییدکننده)', 'Finance manager or controller (checker)'), t('در حد اختیار تأیید یا رد می‌کند', 'Approves or rejects within their limit'), t('سند را خودش بسازد و ثبت کند', 'Create and post entries themselves')],
            [t('مسئول حسابداری مشارکت', 'JV accounting lead'), t('سندهای حساب مشترک و تغییر R/N را تأیید می‌کند', 'Approves joint-account entries and R/N changes'), t('صورت‌حساب شرکا را بدون تطبیق بفرستد', 'Send partner bills without reconciliation')],
            [t('مدیر سیستم (فناوری اطلاعات)', 'System administrator (IT)'), t('قواعد، محدوده‌ها و نقش‌ها را با درخواست مصوب تنظیم می‌کند', 'Maintains rules, ranges and roles on approved requests'), t('سند ثبت کند', 'Post documents')],
            [t('حسابرسی داخلی', 'Internal audit'), t('گزارش‌های هشدار و فهرست سندهای دستی را بازبینی می‌کند', 'Reviews red-flag reports and the manual journal listing'), t('در ثبت یا تأیید نقش داشته باشد', 'Take part in posting or approval')],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('پیوند با بازیافت هزینه', 'The link to cost recovery'),
          text: t(
            'SES با برگه کارکرد امضاشده، **مدرک** هزینه است؛ تعهدی دستی فقط **برآورد** است. صورت بازیافت هزینه باید روی هزینه واقعی بنشیند، پس پیش از ارسال آن بررسی کنید همه تعهدی‌ها با SES یا فاکتور واقعی جایگزین شده‌اند. هزینه‌ای که بدون نشانگر R/N، طبقه درست یا مدرک ثبت شود، در حسابرسی طرف دولتی رد و غیرقابل بازیافت می‌شود.',
            'An SES with a signed field ticket is **evidence** of the cost; a manual accrual is only an **estimate**. The cost-recovery statement must rest on actual costs, so before submitting it check that every accrual has been replaced by an actual SES or invoice. A cost posted without an R/N flag, the right category or evidence is rejected in the government-side audit and becomes non-recoverable.',
          ),
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('اشتباه‌های رایج', 'Common mistakes'),
          text: t(
            'این خطاها را در بستن هر ماه جست‌وجو کنید؛ بیشترشان با یک قاعده سیستمی یا یک گزارش ساده پیدا می‌شوند:',
            'Look for these at every month-end; most can be caught with a system rule or a simple report:',
          ),
        },
        {
          type: 'list',
          items: [
            t('ثبت تعهدی بدون تاریخ برگشت؛ ماه بعد که SES می‌رسد، هزینه دو بار ثبت می‌شود.', 'Posting an accrual with no reversal date, so the cost is booked twice when the SES arrives next month.'),
            t('تعهدی برای قلمی که GRN یا SES آن ثبت شده است؛ پیش از هر تعهدی، GR/IR را ببینید.', 'Accruing an item whose GRN or SES is already posted; check GR/IR before any accrual.'),
            t('حذف یا «ویرایش» سند به‌جای برگشت، یا بازگشایی دوره بسته برای اصلاح.', 'Deleting or "editing" a document instead of reversing it, or reopening a closed period to fix it.'),
            t('سند تکراری برای مبلغی که هر ماه تغییر می‌کند (مثلاً قبض واقعی آب و برق).', 'Using a recurring entry for an amount that changes every month (an actual utility bill, for example).'),
            t('رها کردن سندهای موقت در پایان ماه.', 'Leaving parked documents at month-end.'),
            t('تأیید بدون باز کردن پیوست‌ها؛ تأیید امضای خالی است.', 'Approving without opening the attachments; the approval becomes an empty signature.'),
            t('شرح‌های کلی مانند «اصلاحیه» یا «طبق دستور».', 'Generic texts such as "adjustment" or "as instructed".'),
            t('اصلاح ماهانه یک خطای سیستماتیک با سند دستی، به‌جای اصلاح داده پایه (تخصیص سفارش خرید یا تعیین حساب).', 'Fixing a systematic error with a manual entry every month instead of fixing the master data (PO account assignment or account determination).'),
          ],
        },
      ],
    },
    {
      id: 'exercises',
      title: t('تمرین‌ها', 'Exercises'),
      blocks: [
        {
          type: 'p',
          text: t(
            'تمرین‌ها از ساده به دشوار مرتب شده‌اند و همه در مسار پترولیوم و میدان آریا می‌گذرند. پیش از باز کردن پاسخ، سندها را خودتان بنویسید و برای هر کدام بپرسید: «ERP این را خودکار می‌سازد یا حسابدار باید بنویسد؟» ارقام فرضی‌اند.',
            'The exercises go from easy to hard, and all take place at Masar Petroleum and the Arya field. Write the entries yourself before opening the solution, and ask for each one: "does the ERP create this automatically, or must an accountant write it?" All figures are illustrative.',
          ),
        },
        {
          type: 'exercise',
          title: t('تعهدی پذیرایی کمپ با برگشت خودکار', 'Camp catering accrual with automatic reversal'),
          difficulty: 'easy',
          problem: t(
            'پیمانکار پذیرایی در تمام ماه 6 به کمپ میدان آریا خدمت داده است، اما برگه‌های امضاشده تعداد وعده‌ها دیر می‌رسند و SES ماه 6 فقط روز 4 ماه 7 ثبت می‌شود. برآورد از نرخ قرارداد: 3,500 وعده × 60 = 210,000. روز 4 ماه 7، SES با 3,575 وعده تأیید می‌شود. (الف) تعهدی پایان ماه 6، برگشت خودکار و ثبت SES را بنویسید. (ب) هزینه این خدمت در ماه 6 و ماه 7 چقدر نشان داده می‌شود؟',
            'The catering contractor served the Arya field camp for all of month 6, but the signed meal-count sheets arrive late and the month 6 SES is entered only on day 4 of month 7. Estimate from contract rates: 3,500 meals × 60 = 210,000. On day 4 of month 7 the SES is accepted for 3,575 meals. (a) Write the month 6 accrual, the automatic reversal and the SES posting. (b) How much of this service’s cost appears in month 6 and in month 7?',
          ),
          hint: t('SES واقعی = 3,575 × 60. برگشت خودکار تعهدی را دقیقاً خنثی می‌کند.', 'Actual SES = 3,575 × 60. The automatic reversal exactly cancels the accrual.'),
          solution: [
            {
              type: 'journal',
              entries: [
                {
                  date: t('پایان ماه 6', 'End of month 6'),
                  lines: [
                    { account: ac.camp, debit: 210000 },
                    { account: ac.accrued, credit: 210000 },
                  ],
                  memo: t('سند `JA` از الگوی «تعهدی ماهانه پذیرایی کمپ»؛ تاریخ برگشت روز 1 ماه 7؛ پیوست: محاسبه و سطر سفارش خرید.', '`JA` document from the "monthly camp catering accrual" template; reversal date day 1 of month 7; attached: calculation and PO line.'),
                },
                {
                  date: t('روز 1 ماه 7', 'Day 1, month 7'),
                  lines: [
                    { account: ac.accrued, debit: 210000 },
                    { account: ac.camp, credit: 210000 },
                  ],
                  memo: t('سند `JR` خودکار.', 'Automatic `JR` document.'),
                },
                {
                  date: t('روز 4 ماه 7', 'Day 4, month 7'),
                  lines: [
                    { account: ac.camp, debit: 214500 },
                    { account: ac.grir, credit: 214500 },
                  ],
                  memo: t('SES ماه 6: 3,575 × 60 = 214,500 (ثبت خودکار `SE`).', 'Month 6 SES: 3,575 × 60 = 214,500 (automatic `SE` posting).'),
                },
              ],
            },
            {
              type: 'table',
              head: [t('سند', 'Document'), t('ماه 6', 'Month 6'), t('ماه 7', 'Month 7')],
              numericCols: [1, 2],
              rows: [
                [t('تعهدی', 'Accrual'), 210000, 0],
                [t('برگشت خودکار', 'Automatic reversal'), 0, -210000],
                [t('SES', 'SES'), 0, 214500],
                [t('**جمع**', '**Total**'), 210000, 4500],
              ],
            },
          ],
          answer: t(
            'ماه 6: 210,000؛ ماه 7: فقط 4,500 تعدیل (214,500 منهای 210,000)؛ جمع دو ماه 214,500 برابر هزینه واقعی.',
            'Month 6: 210,000; month 7: only a 4,500 true-up (214,500 minus 210,000); the two months total 214,500, the actual cost.',
          ),
        },
        {
          type: 'exercise',
          title: t('کدام قاعده جلوی سند را می‌گیرد؟', 'Which rule stops the entry?'),
          difficulty: 'medium',
          problem: t(
            'پنج سطر زیر در سندهای دستی ماه 9 وارد شده‌اند. با قواعد اعتبارسنجی V1 تا V8 همین درس بگویید هر سطر پذیرفته می‌شود یا نه، کدام قاعده آن را رد می‌کند و چگونه باید درست شود.',
            'The five lines below were entered on manual documents in month 9. Using validation rules V1 to V8 from this lesson, say whether each line is accepted, which rule rejects it and how it should be fixed.',
          ),
          given: {
            head: [t('سطر', 'Line'), t('حساب', 'Account'), t('شیء هزینه', 'Cost object'), t('R/N', 'R/N'), t('طبقه', 'Category'), t('نوع سند', 'Doc type')],
            rows: [
              [t('1', '1'), t('بدهکار 1510', 'Dr 1510'), t('`CC-ARY-PRD`', '`CC-ARY-PRD`'), t('R', 'R'), t('توسعه', 'Development'), t('`JM`', '`JM`')],
              [t('2', '2'), t('بدهکار 5110', 'Dr 5110'), t('`CC-ARY-PRD`', '`CC-ARY-PRD`'), t('خالی', 'blank'), t('عملیاتی', 'Operating'), t('`JM`', '`JM`')],
              [t('3', '3'), t('بدهکار 5110', 'Dr 5110'), t('`AFE-2025-014.02.03`', '`AFE-2025-014.02.03`'), t('R', 'R'), t('عملیاتی', 'Operating'), t('`JM`', '`JM`')],
              [t('4', '4'), t('بستانکار 2110', 'Cr 2110'), t('ندارد', 'none'), t('ندارد', 'none'), t('ندارد', 'none'), t('`JM`', '`JM`')],
              [t('5', '5'), t('بدهکار 5120', 'Dr 5120'), t('`CC-ARY-CMP` (WO-5531)', '`CC-ARY-CMP` (WO-5531)'), t('R', 'R'), t('عملیاتی', 'Operating'), t('`JA` با تاریخ برگشت', '`JA` with reversal date')],
            ],
          },
          hint: t('برای هر سطر سه چیز را ببینید: حساب چه شیء هزینه‌ای می‌خواهد، R/N پر است یا نه، و طبقه با شیء هزینه می‌خواند یا نه.', 'For each line check three things: what cost object the account needs, whether R/N is filled, and whether the category matches the cost object.'),
          solution: [
            {
              type: 'table',
              head: [t('سطر', 'Line'), t('نتیجه', 'Result'), t('قاعده', 'Rule'), t('اصلاح', 'Fix')],
              rows: [
                [t('1', '1'), t('رد', 'Rejected'), t('V1', 'V1'), t('مرکز هزینه را با عنصر `AFE-2025-014.02.03` عوض کنید', 'Replace the cost centre with element `AFE-2025-014.02.03`')],
                [t('2', '2'), t('رد', 'Rejected'), t('V2', 'V2'), t('نشانگر را پر کنید؛ هزینه عادی تولید معمولاً R است', 'Fill the flag; ordinary production cost is usually R')],
                [t('3', '3'), t('رد', 'Rejected'), t('V3', 'V3'), t('اگر هزینه حفاری است: حساب 1510 و طبقه توسعه؛ اگر هزینه تولید است: `CC-ARY-PRD`', 'If it is a drilling cost: account 1510 and Development; if it is a production cost: `CC-ARY-PRD`')],
                [t('4', '4'), t('رد', 'Rejected'), t('V5', 'V5'), t('اصلاح بدهی تأمین‌کننده با یادداشت بستانکار در ماژول پرداختنی‌ها، نه سند دستی', 'Correct the vendor balance with a credit memo in payables, not a manual entry')],
                [t('5', '5'), t('پذیرفته', 'Accepted'), t('همه قواعد', 'All rules'), t('نیازی نیست', 'None needed')],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: t(
                'سطر 3 نشان می‌دهد چرا V3 مهم است: حساب 5110 روی AFE توسعه‌ای یعنی یا هزینه دوره به‌اشتباه به پروژه سرمایه‌ای رفته یا هزینه سرمایه‌ای به‌اشتباه هزینه شده است؛ در هر دو حالت گزارش AFE و صورت بازیافت هزینه غلط می‌شوند.',
                'Line 3 shows why V3 matters: account 5110 on a development AFE means either a period cost went to a capital project or a capital cost was expensed; either way the AFE report and the cost-recovery statement go wrong.',
              ),
            },
          ],
          answer: t('سطرهای 1 تا 4 رد می‌شوند (به ترتیب V1، V2، V3، V5)؛ فقط سطر 5 پذیرفته می‌شود.', 'Lines 1 to 4 are rejected (V1, V2, V3 and V5 respectively); only line 5 is accepted.'),
        },
        {
          type: 'exercise',
          title: t('اصلاح سندی که در دوره بسته ثبت شده', 'Correcting an entry posted in a closed period'),
          difficulty: 'medium',
          problem: t(
            'در ماه 4، SES-7610 برای خدمات تزریق ضدخوردگی در منیفولدهای تولید به مبلغ 520,000 روی `AFE-2025-014.02.03` (حساب 1510، R، توسعه) ثبت شد، چون درخواست‌کننده عنصر WBS را از سفارش قبلی کپی کرده بود. جای درست آن `CC-ARY-PRD` (حساب 5110، R، عملیاتی) است. فاکتور هم با SES تطبیق شده و ماه 4 بسته است؛ اکنون ماه 5 است. (الف) سند اصلاحی را بنویسید و بگویید چرا لغو SES راه مناسبی نیست. (ب) اثر آن را بر سود ماه 5، دارایی در جریان تکمیل و صورت بازیافت هزینه توضیح دهید.',
            'In month 4, SES-7610 for corrosion-inhibitor injection at the production manifolds, 520,000, was posted to `AFE-2025-014.02.03` (account 1510, R, Development) because the requisitioner copied the WBS element from an earlier order. It belongs on `CC-ARY-PRD` (account 5110, R, Operating). The invoice has been matched to the SES and month 4 is closed; it is now month 5. (a) Write the adjusting entry and say why cancelling the SES is not a good route. (b) Explain its effect on month 5 profit, assets under construction and the cost-recovery statement.',
          ),
          hint: t('وقتی فاکتور تطبیق شده، لغو SES زنجیره فاکتور و پرداخت را هم درگیر می‌کند.', 'Once the invoice is matched, cancelling the SES drags in the invoice and payment chain too.'),
          solution: [
            {
              type: 'journal',
              entries: [
                {
                  date: t('روز 3 ماه 5', 'Day 3, month 5'),
                  lines: [
                    { account: ac.opexPrd, debit: 520000 },
                    { account: ac.aucCasing, credit: 520000 },
                  ],
                  memo: t(
                    'سند `JM`: «طبقه‌بندی مجدد SES-7610 از `AFE-2025-014.02.03` به `CC-ARY-PRD`؛ WBS اشتباه در سفارش خرید». پیوست: SES، برگه کارکرد، تأیید صاحب AFE و مدیر تولید.',
                    '`JM` document: "reclassify SES-7610 from `AFE-2025-014.02.03` to `CC-ARY-PRD`; wrong WBS on the PO". Attached: SES, field ticket, approval of the AFE owner and the production manager.',
                  ),
                },
              ],
            },
            {
              type: 'steps',
              items: [
                {
                  title: t('چرا لغو SES نه؟', 'Why not cancel the SES?'),
                  text: t('فاکتور با SES تطبیق شده و شاید پرداخت هم شده باشد. لغو SES فاکتور را بی‌پشتوانه می‌کند و باید فاکتور هم برگشت بخورد. مبلغ درست است و فقط شیء هزینه غلط است، پس طبقه‌بندی مجدد ساده‌تر و روشن‌تر است.', 'The invoice is matched to the SES and may already be paid. Cancelling the SES leaves the invoice unsupported, so the invoice would have to be reversed too. The amount is right and only the cost object is wrong, so a reclassification is simpler and clearer.'),
                },
                {
                  title: t('سود ماه 5', 'Month 5 profit'),
                  text: t('هزینه عملیات تولید ماه 5 به اندازه 520,000 افزایش و سود همان قدر کاهش می‌یابد. چون ماه 4 و 5 در یک سال مالی‌اند، سود سالانه درست می‌شود؛ گزارش مدیریتی ماه 5 باید این 520,000 را «اصلاح ماه قبل» توضیح دهد.', 'Month 5 production operating expense rises by 520,000 and profit falls by the same amount. Since months 4 and 5 are in the same fiscal year, annual profit ends up right; the month 5 management report should explain the 520,000 as a prior-month correction.'),
                },
                {
                  title: t('دارایی در جریان تکمیل', 'Assets under construction'),
                  text: t('حساب 1510 و هزینه واقعی AFE-2025-014 به اندازه 520,000 کاهش می‌یابند؛ بودجه آزاد AFE همان قدر بیشتر می‌شود.', 'Account 1510 and the actual cost of AFE-2025-014 fall by 520,000; the AFE’s available budget rises by the same amount.'),
                },
                {
                  title: t('بازیافت هزینه و شرکا', 'Cost recovery and partners'),
                  text: t('طبقه توسعه 520,000 کم و طبقه عملیاتی 520,000 زیاد می‌شود. هر دو R هستند، پس جمع هزینه قابل بازیافت تغییر نمی‌کند، اما بسته به قرارداد نفتی، دو طبقه ممکن است با زمان‌بندی متفاوت بازیافت شوند. هر دو روی `JV-ARY` هستند، پس جمع صورت‌حساب شرکا ثابت می‌ماند و فقط سطرهای آن جابه‌جا می‌شوند.', 'The Development category falls by 520,000 and Operating rises by 520,000. Both are R, so total recoverable cost is unchanged, but depending on the petroleum contract the two categories may be recovered on different schedules. Both are on `JV-ARY`, so the total partner billing stays the same and only its lines move.'),
                },
              ],
            },
          ],
          answer: t(
            'بدهکار 5110 (`CC-ARY-PRD`) و بستانکار 1510 (`AFE-2025-014.02.03`) هر کدام 520,000 در ماه 5؛ سود ماه 5 و دارایی در جریان تکمیل هر کدام 520,000 کم می‌شوند و 520,000 از طبقه توسعه به عملیاتی می‌رود.',
            'Debit 5110 (`CC-ARY-PRD`) and credit 1510 (`AFE-2025-014.02.03`), 520,000 each, in month 5; month 5 profit and assets under construction each fall by 520,000, and 520,000 moves from Development to Operating.',
          ),
        },
        {
          type: 'exercise',
          title: t('بازبینی فهرست سندهای دستی ماه 9', 'Reviewing the month 9 manual journal listing'),
          difficulty: 'hard',
          problem: t(
            'شما کنترلر مالی هستید و فهرست زیر همه سندهای دستی ماه 9 است. (الف) برای هر سند نشانه‌های هشدار را بنویسید. (ب) جمع مبلغ سندهای دارای نشانه هشدار و درصد آن از کل مبلغ سندهای دستی را حساب کنید. (ج) برای سندهای پرخطر چه اقدامی می‌کنید؟ سقف‌ها همان ماتریس همین درس است.',
            'You are the financial controller, and the list below is every manual entry for month 9. (a) Note the red flags for each entry. (b) Compute the total amount of the flagged entries and its percentage of the total manual amount. (c) What do you do about the high-risk entries? Limits are those in this lesson’s authority matrix.',
          ),
          given: {
            head: [t('شماره', 'No.'), t('زمان ثبت', 'Posted'), t('تهیه‌کننده / تأییدکننده', 'Maker / approver'), t('مبلغ', 'Amount'), t('بدهکار / بستانکار', 'Debit / credit'), t('شرح و پیوست', 'Text and attachment')],
            numericCols: [3],
            rows: [
              [t('1', '1'), t('سه‌شنبه 10:15، روز 30', 'Tue 10:15, day 30'), t('حسابدار / مدیر مالی', 'Accountant / finance manager'), 1380000, t('5110 `CC-ARY-PRD` / 2130', '5110 `CC-ARY-PRD` / 2130'), t('تعهدی حمل آب تولیدی با تانکر، PO-4471؛ برگه‌های کارکرد پیوست', 'Accrual: produced-water trucking, PO-4471; field tickets attached')],
              [t('2', '2'), t('جمعه 23:40، روز 26', 'Fri 23:40, day 26'), t('مدیر مالی / مدیر مالی', 'Finance manager / finance manager'), 3000000, t('1510 `AFE-2025-014.02.03` / 5110 `CC-ARY-PRD`', '1510 `AFE-2025-014.02.03` / 5110 `CC-ARY-PRD`'), t('«اصلاحیه»؛ بدون پیوست', '"Adjustment"; no attachment')],
              [t('3', '3'), t('چهارشنبه 11:05، روز 28', 'Wed 11:05, day 28'), t('حسابدار / مدیر مالی', 'Accountant / finance manager'), 4950000, t('5120 `CC-ARY-CMP` / 2130', '5120 `CC-ARY-CMP` / 2130'), t('تعهدی تعمیر اساسی کمپرسور؛ پیش‌فاکتور پیوست', 'Accrual: compressor overhaul; quotation attached')],
              [t('4', '4'), t('چهارشنبه 11:12، روز 28', 'Wed 11:12, day 28'), t('حسابدار / مدیر مالی', 'Accountant / finance manager'), 4900000, t('5120 `CC-ARY-CMP` / 2130', '5120 `CC-ARY-CMP` / 2130'), t('تعهدی تعمیر اساسی کمپرسور، بخش 2؛ پیش‌فاکتور پیوست', 'Accrual: compressor overhaul, part 2; quotation attached')],
              [t('5', '5'), t('یکشنبه 09:30، روز کاری 2', 'Sun 09:30, working day 2'), t('حسابدار ارشد / مدیر مالی', 'Senior accountant / finance manager'), 120000, t('5150 / 1410', '5150 / 1410'), t('آزادسازی بیمه ماه 9؛ برنامه سند تکراری هنوز تعریف نشده بود؛ جدول پیوست', 'Insurance release for month 9; recurring schedule not yet set up; schedule attached')],
              [t('6', '6'), t('پنجشنبه 16:20، روز کاری 8', 'Thu 16:20, working day 8'), t('حسابدار / مدیر مالی', 'Accountant / finance manager'), 650000, t('2130 / 4110 درآمد فروش نفت', '2130 / 4110 oil sales revenue'), t('«آزادسازی تعهدی قدیمی»؛ دوره 09 برای یک کاربر باز شد', '"Release old accrual"; period 09 reopened for one user')],
              [t('7', '7'), t('دوشنبه 14:00، روز کاری 3', 'Mon 14:00, working day 3'), t('حسابدار مشارکت / مدیر مالی و مسئول مشارکت', 'JV accountant / finance manager and JV lead'), 4500000, t('1720 البرز / 1710 حساب مشترک', '1720 Alborz / 1710 joint account'), t('سهم البرز از هزینه ماه 9: 30٪ × 15,000,000؛ گزارش صورت‌حساب شرکا پیوست', 'Alborz share of month 9 costs: 30% × 15,000,000; partner billing report attached')],
              [t('8', '8'), t('شنبه 08:50، روز کاری 1', 'Sat 08:50, working day 1'), t('حسابدار / مدیر مالی', 'Accountant / finance manager'), 500000, t('5900 / 1990 حساب معلق', '5900 / 1990 suspense account'), t('«تسویه معلق»؛ بدون تطبیق', '"Clear suspense"; no reconciliation')],
            ],
          },
          hint: t('در ایران جمعه تعطیل است و شنبه روز کاری. سندهای 3 و 4 را با هم جمع کنید و با ماتریس سقف‌ها مقایسه کنید.', 'In Iran Friday is the weekend and Saturday a working day. Add entries 3 and 4 together and compare with the authority matrix.'),
          solution: [
            {
              type: 'table',
              head: [t('شماره', 'No.'), t('نشانه‌های هشدار', 'Red flags'), t('اقدام', 'Action')],
              rows: [
                [t('1', '1'), t('ندارد؛ مدرک، محاسبه و تأیید درست', 'None; evidence, calculation and approval in order'), t('فقط در نمونه عادی', 'Normal sample only')],
                [t('2', '2'), t('جمعه شب، مبلغ رُند، خودتأییدی، مدیر ارشد، شرح مبهم، بدون پیوست، انتقال هزینه به AFE که به شرکا صورت‌حساب و بازیافت می‌شود', 'Friday night, round amount, self-approval, senior staff, vague text, no attachment, moves cost onto an AFE that is billed to partners and recovered'), t('مدرک بخواهید؛ اگر نبود برگشت بزنید، صورت‌حساب شرکا و صورت بازیافت را اصلاح کنید و به کمیته حسابرسی گزارش دهید', 'Ask for evidence; if there is none, reverse it, correct the partner billing and cost-recovery statement, and report to the audit committee')],
                [t('3', '3'), t('کمی کمتر از سقف 5,000,000؛ بخشی از یک سند شکسته', 'Just under the 5,000,000 limit; part of a split entry'), t('با سند 4 یکجا بررسی شود', 'Review together with entry 4')],
                [t('4', '4'), t('کمی کمتر از سقف؛ هفت دقیقه پس از سند 3؛ جمع دو سند 9,850,000', 'Just under the limit; seven minutes after entry 3; the two total 9,850,000'), t('تأیید دوباره توسط کنترلر؛ گردش تأیید باید جمع روزانه را بسنجد', 'Re-approval by the controller; the workflow must test daily totals')],
                [t('5', '5'), t('ندارد؛ مبلغ کوچک، پیوست و تأیید درست', 'None; small amount, attachment and approval in order'), t('برنامه سند تکراری را تعریف کنید', 'Set up the recurring schedule')],
                [t('6', '6'), t('ثبت پس از بستن در دوره 09، ترکیب غیرعادی (بدهی به درآمد)، شرح مبهم', 'Posted after the close into period 09, unusual combination (liability to revenue), vague text'), t('بررسی علت و مجوز بازگشایی دوره؛ تعهدی بی‌مورد باید به همان حساب هزینه برگردد، نه به درآمد', 'Investigate why and who reopened the period; an unneeded accrual must go back to the same expense account, not to revenue')],
                [t('7', '7'), t('ندارد؛ تأیید دوگانه طبق ماتریس و محاسبه قابل ردیابی', 'None; dual approval per the matrix and a traceable calculation'), t('فقط در نمونه عادی', 'Normal sample only')],
                [t('8', '8'), t('مبلغ رُند، حساب معلق، شرح مبهم، بدون تطبیق', 'Round amount, suspense account, vague text, no reconciliation'), t('تطبیق حساب معلق بخواهید و هر قلم را به حساب درست ببرید', 'Ask for the suspense reconciliation and clear each item to its proper account')],
              ],
            },
            {
              type: 'steps',
              items: [
                {
                  title: t('جمع کل سندهای دستی', 'Total of manual entries'),
                  text: t('1,380,000 + 3,000,000 + 4,950,000 + 4,900,000 + 120,000 + 650,000 + 4,500,000 + 500,000 = 20,000,000', '1,380,000 + 3,000,000 + 4,950,000 + 4,900,000 + 120,000 + 650,000 + 4,500,000 + 500,000 = 20,000,000'),
                },
                {
                  title: t('جمع سندهای دارای هشدار', 'Total of flagged entries'),
                  text: t('سندهای 2، 3، 4، 6 و 8: 3,000,000 + 4,950,000 + 4,900,000 + 650,000 + 500,000 = 14,000,000', 'Entries 2, 3, 4, 6 and 8: 3,000,000 + 4,950,000 + 4,900,000 + 650,000 + 500,000 = 14,000,000'),
                },
                {
                  title: t('درصد', 'Percentage'),
                  text: t('14,000,000 ÷ 20,000,000 = 70 درصد. پنج سند از هشت سند، اما 70 درصد مبلغ؛ بازبینی را از سند 2 شروع کنید که بیشترین نشانه را دارد.', '14,000,000 ÷ 20,000,000 = 70 percent. Five entries out of eight, but 70 percent of the value; start with entry 2, which carries the most flags.'),
                },
              ],
            },
          ],
          answer: t(
            'پنج سند (2، 3، 4، 6 و 8) نشانه هشدار دارند: 14,000,000 یعنی 70 درصد از 20,000,000 کل سندهای دستی؛ پرخطرترین سند 2 است.',
            'Five entries (2, 3, 4, 6 and 8) are flagged: 14,000,000, or 70 percent of the 20,000,000 manual total; entry 2 is the highest risk.',
          ),
        },
      ],
    },
    {
      id: 'summary',
      title: t('جمع‌بندی و واژه‌های کلیدی', 'Summary and Key Terms'),
      blocks: [
        {
          type: 'list',
          items: [
            t('بیشتر سندهای ERP خودکارند و از GRN، SES، فاکتور، پرداخت، استهلاک و تسویه می‌آیند؛ سندهای دستی کم‌اند ولی پرخطر.', 'Most ERP documents are automatic, coming from GRNs, SESs, invoices, payments, depreciation and settlements; manual entries are few but risky.'),
            t('نوع سند شماره‌گذاری، حساب‌های مجاز و گردش تأیید را تعیین می‌کند؛ شماره‌ها پیاپی‌اند و شکاف باید توضیح داشته باشد.', 'The document type drives numbering, allowed accounts and approval routing; numbers are consecutive and any gap must be explained.'),
            t('الگو کدگذاری را یکدست می‌کند، سند تکراری مبالغ ثابت را خودکار ثبت می‌کند و تعهدی با تاریخ برگشت جلوی دوبار شماری را می‌گیرد.', 'Templates keep coding consistent, recurring entries post fixed amounts automatically, and accruals with a reversal date prevent double counting.'),
            t('سند موقت اثری بر مانده‌ها ندارد؛ پیش از قفل دوره فهرست آن باید خالی یا توضیح‌داده شده باشد.', 'Parked documents do not affect balances; the parked list must be empty or explained before the period is locked.'),
            t('تهیه‌کننده و تأییدکننده جدا هستند، سقف اختیارات بر اساس مبلغ و حساب است و هر سند دستی مدرک پشتیبان اجباری دارد.', 'Maker and checker are separate, authority limits depend on amount and account, and every manual entry has mandatory supporting evidence.'),
            t('قواعد اعتبارسنجی و جایگزینی کدگذاری `MP01` ← مرکز هزینه یا WBS ← حساب ← R/N ← طبقه را اجرا می‌کنند و دوره‌های بسته جلوی ثبت با تاریخ غلط را می‌گیرند.', 'Validation and substitution rules enforce the coding `MP01` → cost centre or WBS → account → R/N → category, and closed periods stop postings with the wrong date.'),
            t('سند ثبت‌شده حذف نمی‌شود؛ با سند برگشتی یا سند اصلاحی در دوره باز و با ارجاع به سند اصلی اصلاح می‌شود.', 'A posted document is never deleted; it is corrected with a reversal or an adjusting entry in the open period, referring to the original.'),
            t('بازبینی سندها روی نشانه‌های هشدار تمرکز می‌کند: شب و جمعه، مبلغ رُند، کمی زیر سقف، حساب غیرعادی، مدیران ارشد، شرح مبهم، تغییر R/N.', 'Journal review focuses on red flags: nights and Fridays, round amounts, just under limits, unusual accounts, senior staff, vague text, R/N changes.'),
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            { term: t('سند حسابداری (Accounting document)', 'Accounting document'), def: t('ثبت روزنامه در ERP با سرِ سند (نوع، شماره، تاریخ، دوره، مرجع) و سطرها (حساب، شیء هزینه، مبلغ).', 'A journal entry in the ERP, with a header (type, number, date, period, reference) and lines (account, cost object, amount).') },
            { term: t('ثبت خودکار (Integration posting)', 'Integration posting'), def: t('سندی که ماژول مبدأ هنگام ثبت یک رویداد عملیاتی، مانند GRN یا SES، می‌سازد.', 'A document created by a source module when an operational event, such as a GRN or SES, is recorded.') },
            { term: t('سند دستی', 'Manual journal entry'), def: t('سندی که حسابدار مستقیم در دفتر کل می‌نویسد و به مدرک و تأیید مستقل نیاز دارد.', 'An entry an accountant writes directly in the general ledger; it needs evidence and independent approval.') },
            { term: t('نوع سند و محدوده شماره', 'Document type and number range'), def: t('طبقه‌بندی سند که شماره‌گذاری پیاپی، حساب‌های مجاز و گردش تأیید آن را تعیین می‌کند.', 'The classification of a document that sets its consecutive numbering, allowed accounts and approval route.') },
            { term: t('سند تکراری', 'Recurring entry'), def: t('سند با مبلغ ثابت که اجرای زمان‌بندی‌شده هر دوره خودکار می‌سازد.', 'A fixed-amount entry generated automatically each period by a scheduled run.') },
            { term: t('تعهدی با برگشت خودکار', 'Auto-reversing accrual'), def: t('ثبت تعهدی با تاریخ برگشت که سیستم روز اول دوره بعد آن را خنثی می‌کند.', 'An accrual with a reversal date that the system cancels on the first day of the next period.') },
            { term: t('سند موقت (پارک‌شده)', 'Parked document'), def: t('سند کامل منتظر تأیید که هنوز اثری بر مانده‌ها ندارد.', 'A complete document awaiting approval that does not yet affect balances.') },
            { term: t('اصل تهیه‌کننده و تأییدکننده', 'Maker-checker principle'), def: t('کسی که سند را می‌سازد نباید همان کسی باشد که آن را تأیید می‌کند.', 'Whoever creates an entry must not be the one who approves it.') },
            { term: t('قاعده اعتبارسنجی', 'Validation rule'), def: t('شرطی که اگر برقرار نباشد، سیستم خطا یا هشدار می‌دهد.', 'A condition that, when not met, makes the system raise an error or a warning.') },
            { term: t('قاعده جایگزینی', 'Substitution rule'), def: t('قاعده‌ای که مقدار یک فیلد را خودکار از فیلد دیگر پر یا جایگزین می‌کند.', 'A rule that fills or replaces a field’s value automatically from another field.') },
            { term: t('دوره ویژه', 'Special period'), def: t('دوره‌ای پس از دوره 12 برای تعدیلات پایان سال و حسابرسی.', 'A period after period 12 for year-end and audit adjustments.') },
            { term: t('سند برگشتی', 'Reversal document'), def: t('سند آینه‌ای که سند اصلی را با ارجاع به آن خنثی می‌کند؛ جایگزین حذف.', 'A mirror document that cancels the original with a reference to it; the alternative to deleting.') },
            { term: t('نشانه هشدار (Red flag)', 'Red flag'), def: t('ویژگی‌ای در سند که احتمال خطا یا تقلب را بالا می‌برد و بازبینی بیشتر می‌خواهد.', 'A feature of an entry that raises the risk of error or fraud and calls for closer review.') },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: t(
        'مسار پترولیوم بیمه 12 ماهه‌ای را به مبلغ 1,800,000 پیش‌پرداخت کرده است. سند تکراری ماهانه چه مبلغی را به هزینه می‌برد؟',
        'Masar Petroleum prepaid a 12-month insurance policy for 1,800,000. What amount does the monthly recurring entry expense?',
      ),
      options: [t('1,800,000', '1,800,000'), t('180,000', '180,000'), t('150,000', '150,000'), t('120,000', '120,000')],
      answer: 2,
      explain: t(
        '1,800,000 ÷ 12 = 150,000. گزینه 1,800,000 کل مبلغ را یک‌جا هزینه می‌کند که خلاف تطابق هزینه با دوره است؛ 180,000 تقسیم بر 10 است و 120,000 عدد مثال درس با بیمه 1,440,000 بود.',
        '1,800,000 ÷ 12 = 150,000. The 1,800,000 option expenses everything at once, against matching cost to periods; 180,000 divides by 10, and 120,000 was the lesson’s example with a 1,440,000 policy.',
      ),
    },
    {
      q: t('کدام سند **ثبت خودکار (یکپارچه)** است؟', 'Which document is an **integration (automatic) posting**?'),
      options: [
        t('ثبت تأیید SES: بدهکار هزینه خدمت روی شیء هزینه، بستانکار GR/IR', 'The SES acceptance posting: debit service cost on the cost object, credit GR/IR'),
        t('تعهدی حق‌الزحمه حقوقی که حسابدار می‌نویسد', 'An accrual for legal fees written by an accountant'),
        t('انتقال هزینه از مرکز هزینه به AFE با سند `JM`', 'A reclassification from a cost centre to an AFE with a `JM` document'),
        t('ذخیره یک دعوی حقوقی', 'A provision for a legal claim'),
      ],
      answer: 0,
      explain: t(
        'SES در ماژول تدارکات تأیید می‌شود و ERP سند `SE` را با تعیین خودکار حساب می‌سازد. سه گزینه دیگر قضاوت و برآورد حسابدار را می‌خواهند و سند دستی‌اند؛ اینکه تعهدی یا ذخیره در ERP ثبت می‌شود آن را خودکار نمی‌کند.',
        'The SES is accepted in procurement and the ERP creates an `SE` document through automatic account determination. The other three need an accountant’s judgement and estimate, so they are manual; being entered in the ERP does not make an accrual or provision automatic.',
      ),
    },
    {
      q: t(
        'پایان ماه تعهدی 60,000 با تاریخ برگشت ثبت شد. ماه بعد SES همان خدمت با 64,000 تأیید شد. ماه بعد چه هزینه‌ای برای این خدمت نشان می‌دهد؟',
        'A 60,000 accrual with a reversal date was posted at month-end. Next month the SES for the same service is accepted at 64,000. How much expense does next month show for this service?',
      ),
      options: [t('64,000', '64,000'), t('4,000', '4,000'), t('124,000', '124,000'), t('صفر', 'Zero')],
      answer: 1,
      explain: t(
        'برگشت خودکار 60,000 کم می‌کند و SES 64,000 اضافه می‌کند: خالص 4,000. گزینه 64,000 برگشت را فراموش کرده و 124,000 حالتی است که تعهدی برگشت نخورد و هزینه دو بار شمرده شود.',
        'The automatic reversal removes 60,000 and the SES adds 64,000: net 4,000. The 64,000 option forgets the reversal, and 124,000 is what happens when the accrual is not reversed and the cost is counted twice.',
      ),
    },
    {
      q: t('سند موقت (پارک‌شده) چه اثری بر تراز آزمایشی دارد؟', 'What effect does a parked document have on the trial balance?'),
      options: [
        t('هزینه را افزایش می‌دهد ولی بدهی را نه', 'It increases expense but not liabilities'),
        t('با برچسب «موقت» در تراز آزمایشی دیده می‌شود', 'It appears in the trial balance labelled "temporary"'),
        t('ماه بعد خودکار برگشت می‌خورد', 'It reverses automatically next month'),
        t('تا تأیید و ثبت نشود، هیچ اثری ندارد', 'None until it is approved and posted'),
      ],
      answer: 3,
      explain: t(
        'سند موقت فقط ذخیره شده و منتظر تأیید است؛ مانده هیچ حسابی را تغییر نمی‌دهد. به همین دلیل تعهدی که موقت مانده در صورت‌های مالی نیست. برگشت خودکار ویژگی سند `JA` ثبت‌شده است، نه سند موقت.',
        'A parked document is only saved and waiting for approval; it changes no account balance. That is why an accrual left parked is missing from the financial statements. Automatic reversal belongs to a posted `JA` document, not to a parked one.',
      ),
    },
    {
      q: t(
        'حسابداری یک تعهدی را به دو سند 4,800,000 و 3,700,000 در یک روز و روی یک حساب شکسته است. با ماتریس سقف اختیارات درس، چه کسی باید آن را تأیید کند؟',
        'An accountant split one accrual into two entries of 4,800,000 and 3,700,000 on the same day and account. Under the lesson’s authority matrix, who should approve it?',
      ),
      options: [t('حسابدار ارشد دفتر کل', 'Senior GL accountant'), t('مدیر مالی', 'Finance manager'), t('کنترلر مالی', 'Financial controller'), t('مدیر ارشد مالی', 'CFO')],
      answer: 2,
      explain: t(
        'یک رویداد است: 4,800,000 + 3,700,000 = 8,500,000 که در بازه 5,000,001 تا 20,000,000 و در اختیار کنترلر مالی است. مدیر مالی پاسخ وسوسه‌انگیز است چون هر سند جداگانه زیر 5,000,000 است؛ همین شکستن سند یک نشانه هشدار است.',
        'It is one event: 4,800,000 + 3,700,000 = 8,500,000, in the 5,000,001 to 20,000,000 band that belongs to the financial controller. The finance manager is the tempting answer because each entry alone is under 5,000,000; that very split is a red flag.',
      ),
    },
    {
      q: t('کدام مورد **قاعده جایگزینی** است؟', 'Which of these is a **substitution rule**?'),
      options: [
        t('با وارد کردن مرکز هزینه `CC-ARY-PRD`، سیستم کد مشارکت `JV-ARY` را پر می‌کند', 'When cost centre `CC-ARY-PRD` is entered, the system fills in venture code `JV-ARY`'),
        t('سیستم ثبت حساب 1510 بدون عنصر WBS را متوقف می‌کند', 'The system stops a posting to account 1510 without a WBS element'),
        t('سیستم برای شرح کوتاه‌تر از 15 نویسه هشدار می‌دهد', 'The system warns about text shorter than 15 characters'),
        t('سند بالای 5,000,000 به کنترلر می‌رود', 'An entry above 5,000,000 goes to the controller'),
      ],
      answer: 0,
      explain: t(
        'جایگزینی مقدار فیلدی را خودکار پر می‌کند. متوقف کردن ثبت و هشدار دادن کار قاعده اعتبارسنجی است و فرستادن سند به کنترلر کار گردش تأیید؛ هر سه کنترل‌اند ولی جایگزینی نیستند.',
        'A substitution fills in a field’s value automatically. Stopping a posting and warning are what validation rules do, and routing to the controller is the approval workflow; all three are controls, but none is a substitution.',
      ),
    },
    {
      q: t('در ماه 10 خطایی در سندی از ماه 9 پیدا شده و ماه 9 گزارش و بسته شده است. راه درست کدام است؟', 'In month 10 an error is found in a month 9 document, and month 9 has been reported and closed. What is the right approach?'),
      options: [
        t('سند اصلی را حذف و دوباره ثبت کنید', 'Delete the original and post it again'),
        t('دوره 9 را بی‌صدا باز و سند را ویرایش کنید', 'Quietly reopen period 9 and edit the document'),
        t('اگر مبلغ کوچک است، رهایش کنید', 'If the amount is small, leave it'),
        t('سند برگشتی یا اصلاحی در دوره باز جاری با ارجاع به سند اصلی ثبت کنید', 'Post a reversal or adjusting entry in the current open period, referring to the original'),
      ],
      answer: 3,
      explain: t(
        'سند ثبت‌شده حذف یا ویرایش نمی‌شود و اصلاح در دوره باز ثبت می‌شود تا ردپای حسابرسی بماند. بازگشایی دوره گزارش‌شده فقط برای خطای بااهمیت و با رویه مصوب مجاز است؛ رها کردن خطا هم گزارش AFE و بازیافت هزینه را غلط نگه می‌دارد.',
        'A posted document is never deleted or edited, and the fix is posted in the open period so the audit trail survives. Reopening a reported period is allowed only for a material error under an approved procedure; leaving the error keeps the AFE and cost-recovery reports wrong.',
      ),
    },
    {
      q: t(
        'SES به مبلغ 380,000 که باید روی AFE توسعه‌ای (دارایی در جریان تکمیل) می‌نشست، در ماه بسته قبل به هزینه عملیات تولید رفت. سند اصلاحی در ماه جاری چه اثری بر سود ماه جاری دارد؟',
        'An SES of 380,000 that belonged on a development AFE (assets under construction) was charged to production operating expense in the prior, closed month. What does the adjusting entry in the current month do to current-month profit?',
      ),
      options: [t('380,000 کاهش', 'Decreases it by 380,000'), t('380,000 افزایش', 'Increases it by 380,000'), t('اثری ندارد', 'No effect'), t('760,000 افزایش', 'Increases it by 760,000')],
      answer: 1,
      explain: t(
        'سند اصلاحی بدهکار 1510 و بستانکار 5110 است؛ بستانکار شدن هزینه، هزینه ماه جاری را 380,000 کم و سود را همان قدر زیاد می‌کند (و سود ماه قبل را که کم نشان داده شده بود جبران می‌کند). 760,000 اثر را دو بار شمرده است.',
        'The adjusting entry debits 1510 and credits 5110; crediting expense lowers current-month expense by 380,000 and raises profit by the same amount (making up for the prior month, which was understated). 760,000 counts the effect twice.',
      ),
    },
    {
      q: t('دوره‌های ویژه (مثلاً 13 تا 16) برای چیست؟', 'What are special periods (13 to 16, for example) for?'),
      options: [
        t('ثبت بودجه سال بعد', 'Posting next year’s budget'),
        t('نگهداری سندهای موقت', 'Holding parked documents'),
        t('اجرای سندهای تکراری', 'Running recurring entries'),
        t('ثبت تعدیلات پایان سال، مانند تعدیلات حسابرسی، جدا از عملیات ماه 12', 'Posting year-end adjustments, such as audit adjustments, separately from month 12 operations'),
      ],
      answer: 3,
      explain: t(
        'دوره ویژه به همان سال مالی تعلق دارد و ترازنامه پایان سال را تغییر می‌دهد، اما نتیجه ماه 12 را از تعدیلات پایان سال جدا نگه می‌دارد. بودجه در دفتر کل واقعی ثبت نمی‌شود و سند موقت و سند تکراری ربطی به دوره ویژه ندارند.',
        'A special period belongs to the same fiscal year and changes the year-end balance sheet, but keeps month 12’s results apart from year-end adjustments. Budgets are not posted to the actual ledger, and parked and recurring entries have nothing to do with special periods.',
      ),
    },
    {
      q: t('چرا ثبت به‌موقع GRN و SES تعهدی‌های دستی پایان ماه را کم می‌کند؟', 'Why does posting GRNs and SESs on time reduce month-end manual accruals?'),
      options: [
        t('چون هنگام دریافت یا تأیید، هزینه (بدهکار شیء هزینه یا موجودی، بستانکار GR/IR) ثبت می‌شود و «دریافت‌شده ولی فاکتورنشده» از قبل در دفاتر است', 'Because the cost (debit cost object or inventory, credit GR/IR) is posted at receipt or acceptance, so "received not invoiced" is already in the books'),
        t('چون جای فاکتور را می‌گیرند و دیگر فاکتوری لازم نیست', 'Because they replace the invoice, so no invoice is needed'),
        t('چون مستقیم حساب‌های پرداختنی را بستانکار می‌کنند', 'Because they credit accounts payable directly'),
        t('چون تا رسیدن فاکتور هیچ اثری بر دفتر کل ندارند', 'Because they have no effect on the ledger until the invoice arrives'),
      ],
      answer: 0,
      explain: t(
        'GRN و SES هزینه را در لحظه دریافت یا تأیید با بستانکار GR/IR ثبت می‌کنند؛ پس برای این اقلام تعهدی دستی لازم نیست و فقط خدماتی که SES آن‌ها دیر ثبت می‌شود تعهدی می‌خواهند. فاکتور هنوز لازم است (تطبیق سه‌طرفه) و حساب پرداختنی فقط با فاکتور بستانکار می‌شود.',
        'GRNs and SESs post the cost at receipt or acceptance with a GR/IR credit, so these items need no manual accrual; only services whose SES is late still need one. The invoice is still required (three-way match), and accounts payable is credited only by the invoice.',
      ),
    },
  ],
}
