import type { Lesson } from '../types'

const t = (fa: string, en: string) => ({ fa, en })

/** Close-calendar day: negative = working days before month-end, 0 = last day, positive = working days after. */
const d = (n: number) =>
  n < 0
    ? t(`${-n} روز کاری مانده به پایان ماه`, `Day ${n}`)
    : n === 0
      ? t('روز آخر ماه', 'Day 0')
      : t(`روز کاری ${n} پس از پایان ماه`, `Day +${n}`)

/* Masar Petroleum (company code MP01): accounts used in this lesson. */
const ac = {
  bank: t('1110 موجودی نقد (بانک)', '1110 Cash at bank'),
  fcBank: t('1120 موجودی نقد (بانک ارزی)', '1120 Cash at bank (foreign currency)'),
  ar: t('1210 حساب‌های دریافتنی', '1210 Accounts receivable'),
  auc: t('1510 دارایی‌های در جریان تکمیل (`AFE-2025-014`)', '1510 Assets under construction (`AFE-2025-014`)'),
  ogp: t('1520 دارایی‌های نفت و گاز (چاه توسعه‌ای `AFE-2025-014`)', '1520 Oil and gas properties (development well `AFE-2025-014`)'),
  accDep: t('1590 استهلاک انباشته', '1590 Accumulated depreciation'),
  accDepl: t('1595 استهلاک انباشته ذخایر', '1595 Accumulated depletion'),
  jointAccount: t('1710 حساب مشترک مشارکت آریا (`JV-ARY`)', '1710 Arya JV joint account (`JV-ARY`)'),
  alborz: t('1720 حساب جاری شریک: انرژی البرز', '1720 Partner current account: Alborz Energy'),
  dena: t('1730 حساب جاری شریک: نفت دنا', '1730 Partner current account: Dena Petroleum'),
  ap: t('2110 حساب‌های پرداختنی', '2110 Accounts payable'),
  grir: t('2120 حساب واسط رسید کالا و فاکتور (GR/IR)', '2120 GR/IR clearing account'),
  accrued: t('2130 هزینه‌های تعهدی پرداختنی', '2130 Accrued liabilities'),
  opexPrd: t('5110 هزینه عملیات تولید (`CC-ARY-PRD`، R، عملیاتی)', '5110 Production operating expense (`CC-ARY-PRD`, R, Operating)'),
  repairsPrd: t(
    '5120 هزینه تعمیر و نگهداری (`CC-ARY-PRD`، دستور کار WO-5602، R، عملیاتی)',
    '5120 Repairs and maintenance expense (`CC-ARY-PRD`, work order WO-5602, R, Operating)',
  ),
  depExp: t('5210 هزینه استهلاک', '5210 Depreciation expense'),
  depletion: t('5220 هزینه استهلاک ذخایر', '5220 Depletion expense'),
  bankCharges: t('5920 هزینه کارمزد بانکی (`CC-HQ-FIN`، N)', '5920 Bank charges (`CC-HQ-FIN`, N)'),
  fxGain: t('4920 سود تسعیر ارز تحقق‌نیافته', '4920 Unrealised exchange gain'),
  fxLoss: t('5820 زیان تسعیر ارز تحقق‌نیافته', '5820 Unrealised exchange loss'),
}

const blank = t('', '')

export const lesson: Lesson = {
  slug: 'period-close',
  number: 21,
  currency: 'usd',
  level: 'advanced',
  minutes: 50,
  icon: 'CalendarClock',
  tone: 'gold',
  title: t('بستن ماه و سال در شرکت نفت و گاز', 'Month-End and Year-End Close in an Oil and Gas Company'),
  summary: t(
    'بستن ماه و سال را در مسار پترولیوم قدم‌به‌قدم ببینید: تقویم بستن و مسئولان، قطع عملیات دفترهای معین با GRN و SES و تطبیق GR/IR، تعهدی‌ها و پیش‌پرداخت‌ها، اجرای استهلاک و استهلاک ذخایر، تسویه WBS و دستور کار، تسعیر ارز، تطبیق بین شرکتی، تطبیق‌های بانک و حساب‌های واسط، صورت‌حساب شرکا و صورت بازیافت هزینه، بسته گزارش و قفل دوره؛ با یک چک‌لیست کامل.',
    'Walk through the month-end and year-end close at Masar Petroleum step by step: the close calendar and owners, sub-ledger cut-off with GRNs and SESs and the GR/IR reconciliation, accruals and prepayments, depreciation and depletion runs, WBS and work-order settlement, foreign-currency revaluation, intercompany matching, bank and clearing-account reconciliations, partner billing and the cost-recovery statement, the reporting pack and the period lock, with a complete checklist.',
  ),
  objectives: [
    t('تقویم بستن ماه را از دو روز پیش تا پنج روز پس از پایان ماه با مسئول هر کار طراحی کنید', 'Lay out a close calendar from two days before to five days after month-end, with an owner for every task'),
    t('قطع عملیات دفترهای معین را اجرا کنید و اقلام باز GR/IR را تحلیل کنید', 'Run sub-ledger cut-off and analyse the GR/IR open items'),
    t('اجراهای پایان ماه (استهلاک ذخایر، تسویه، تخصیص، تسعیر ارز) را به ترتیب درست انجام دهید و ثبت‌هایشان را بخوانید', 'Perform the month-end runs (depletion, settlement, allocation, FX revaluation) in the right order and read their entries'),
    t('تطبیق بانک، دفترهای معین، حساب‌های معلق و واسط و حساب‌های بین شرکتی را انجام دهید', 'Reconcile the bank, sub-ledgers, suspense and clearing accounts, and intercompany balances'),
    t('صورت‌حساب شرکا، صورت بازیافت هزینه و بسته گزارش را آماده و دوره را قفل کنید', 'Prepare partner billing, the cost-recovery statement and the reporting pack, and lock the period'),
  ],
  sections: [
    {
      id: 'why-close',
      title: t('چرا بستن دوره مهم است و چه کسی چه می‌کند', 'Why the Close Matters and Who Does What'),
      blocks: [
        {
          type: 'p',
          text: t(
            'مسار پترولیوم اپراتور میدان آریا است. هیئت‌مدیره بسته گزارش ماهانه را روز کاری پنجم می‌خواهد، شرکای مشارکت (انرژی البرز با 30 درصد و نفت دنا با 20 درصد) صورت‌حساب سهم خود را تا روز دهم انتظار دارند و شرکت ملی نفت در پایان هر فصل صورت بازیافت هزینه را می‌خواهد. پارسال فاکتور 2,400,000 یک دکل تعمیر چاه از چشم افتاد: سود ماه بیشتر از واقع گزارش شد، سهم شرکا یک ماه دیر صورت‌حساب شد و حسابرس آن را در نامه مدیریت آورد. بستن دوره همان جایی است که این اتفاق‌ها باید گرفته شوند.',
            'Masar Petroleum operates the Arya field. The board wants the monthly reporting pack on working day 5, the joint venture partners (Alborz Energy with 30 percent and Dena Petroleum with 20 percent) expect their billing by day 10, and the national oil company wants the cost-recovery statement at the end of each quarter. Last year a 2,400,000 workover rig invoice was missed: the month’s profit was overstated, the partners were billed a month late and the auditor put it in the management letter. The close is where such things must be caught.',
          ),
        },
        {
          type: 'p',
          text: t(
            '**بستن دوره (Period close)** مجموعه کارهایی است که مطمئن می‌شود همه رویدادهای دوره ثبت، برآوردها انجام، مانده‌ها تطبیق و گزارش‌ها تهیه شده‌اند و سپس دوره قفل می‌شود. بستن ماه را «بستن نرم» هم می‌گویند، چون برخی برآوردها ساده‌ترند؛ بستن سال «بستن سخت» است و کارهای بیشتری مانند شمارش کامل انبار، به‌روزرسانی ذخایر و حسابرسی دارد. **تقویم بستن (Close calendar)** هر کار را به یک روز و یک **مسئول** گره می‌زند.',
            'The **period close** is the set of tasks that makes sure every event of the period is recorded, estimates are made, balances are reconciled and reports are produced, after which the period is locked. A month-end close is sometimes called a "soft close", because some estimates are simpler; the year-end close is a "hard close", with extra work such as full stock counts, a reserves update and the audit. The **close calendar** ties each task to a day and an **owner**.',
          ),
        },
        {
          type: 'table',
          caption: t('تقویم بستن ماه در مسار پترولیوم', 'Masar Petroleum’s month-end close calendar'),
          head: [t('روز', 'Day'), t('کارهای اصلی', 'Main tasks'), t('مسئول', 'Owner')],
          rows: [
            [d(-2), t('یادآوری قطع عملیات به میدان؛ فهرست SES و GRNهای ثبت‌نشده؛ بازبینی سفارش‌های باز', 'Cut-off reminder to the field; list of unposted SESs and GRNs; open PO review'), t('کنترل هزینه و تدارکات', 'Cost control and procurement')],
            [d(-1), t('آخرین اجرای پرداخت؛ صدور فاکتورهای بین شرکتی؛ تأیید برگه‌های بارگیری نفت خام', 'Last payment run; intercompany invoices issued; crude lifting tickets confirmed'), t('خزانه‌داری، حسابدار بین شرکتی، فروش', 'Treasury, intercompany accountant, marketing')],
            [d(0), t('ثبت همه GRN، حواله و SES تا ساعت 18؛ شمارش انبار میدان در صورت برنامه', 'All GRNs, goods issues and SESs posted by 18:00; Field Warehouse count if scheduled'), t('انبار و مهندسان میدان', 'Warehouse and field engineers')],
            [d(1), t('بستن دوره انبار؛ تحلیل GR/IR؛ تعهدی‌ها و پیش‌پرداخت‌ها؛ بارگذاری نرخ‌های ارز', 'Inventory period closed; GR/IR analysis; accruals and prepayments; exchange rates loaded'), t('حسابدار دفتر کل و پرداختنی‌ها', 'GL and payables accountants')],
            [d(2), t('تسویه AFE و دستور کار؛ اجرای استهلاک و استهلاک ذخایر؛ تخصیص‌ها؛ تسعیر ارز', 'AFE and work-order settlement; depreciation and depletion runs; allocations; FX revaluation'), t('حسابدار دارایی و حسابدار بهای تمام‌شده', 'Asset and cost accountants')],
            [d(3), t('تطبیق بین شرکتی؛ تطبیق‌های بانک و حساب‌ها؛ اجرای صورت‌حساب شرکا', 'Intercompany matching; bank and account reconciliations; joint interest billing run'), t('حسابداران بین شرکتی، دفتر کل و مشارکت', 'Intercompany, GL and JV accountants')],
            [d(4), t('پیش‌نویس بسته گزارش؛ تحلیل انحراف؛ صورت بازیافت هزینه (پایان فصل)', 'Draft reporting pack; variance analysis; cost-recovery statement (quarter-end)'), t('گزارشگری مالی و مسئول بازیافت هزینه', 'Financial reporting and cost-recovery lead')],
            [d(5), t('بازبینی نهایی، قفل دوره، ارسال بسته گزارش', 'Final review, period lock, pack issued'), t('کنترلر مالی', 'Financial controller')],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('بستن یک فرایند است، نه یک روز', 'The close is a process, not a day'),
          text: t(
            'بستن سریع از کارهای پیش از پایان ماه می‌آید: پیگیری SESهای ثبت‌نشده، آزمون اجراهای خودکار و بازبینی تطبیق‌ها در طول ماه. برای تعهدی‌ها **سطح اهمیت** تعیین کنید (مثلاً تعهدی زیر 10,000 لازم نیست) و هر کار تکراری را به اجرای زمان‌بندی‌شده ERP بسپارید.',
            'A fast close comes from work done before month-end: chasing unposted SESs, testing the automatic runs and reviewing reconciliations during the month. Set a **materiality threshold** for accruals (no accrual below 10,000, for example) and hand every repetitive task to a scheduled ERP run.',
          ),
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('در عمل: ایران و IFRS', 'In practice: Iran and IFRS'),
          text: t(
            'IFRS بستن ماهانه را الزامی نمی‌کند؛ صورت‌های مالی سالانه و، برای شرکت‌هایی که گزارش میان‌دوره‌ای می‌دهند، IAS 34 را دارد. اما مدیران، شرکای مشارکت و قرارداد نفتی گزارش ماهانه و فصلی می‌خواهند. در ایران شرکت‌های بورسی گزارش‌های میان‌دوره‌ای را طبق مقررات سازمان بورس منتشر می‌کنند و دفاتر قانونی باید به‌موقع ثبت شوند؛ مهلت‌ها و الزامات دقیق را از مقررات روز بررسی کنید.',
            'IFRS does not require a monthly close; it has annual financial statements and, for companies that publish interim reports, IAS 34. But managers, JV partners and the petroleum contract want monthly and quarterly reports. In Iran, listed companies publish interim reports under the stock exchange regulator’s rules, and legal books must be written up on time; check the current regulations for the exact deadlines and requirements.',
          ),
        },
      ],
    },
    {
      id: 'cutoff',
      title: t('قطع عملیات دفترهای معین: GRN، SES و تطبیق GR/IR', 'Sub-Ledger Cut-Off: GRN, SES and the GR/IR Reconciliation'),
      blocks: [
        {
          type: 'p',
          text: t(
            '**قطع عملیات (Cut-off)** یعنی هر رویداد در دوره خودش ثبت شود: کالایی که روز آخر ماه رسیده، در همین ماه رسید شود و خدمتی که در این ماه انجام شده، در همین ماه هزینه شود. در مسار پترولیوم مهم‌ترین ابزار قطع عملیات، **رسید کالا (GRN)** و **برگه ثبت خدمات (SES)** هستند: اگر به‌موقع ثبت شوند، ERP هزینه یا موجودی را همان روز با بستانکار GR/IR ثبت می‌کند و برای «دریافت‌شده ولی فاکتورنشده» تعهدی جداگانه لازم نیست.',
            '**Cut-off** means every event is recorded in its own period: goods that arrived on the last day are received this month, and services performed this month are expensed this month. At Masar Petroleum the key cut-off tools are the **goods received note (GRN)** and the **service entry sheet (SES)**: when they are posted on time, the ERP books the cost or stock the same day against a GR/IR credit, and "received but not invoiced" needs no separate accrual.',
          ),
        },
        {
          type: 'diagram',
          id: 'grn-ses',
          caption: t(
            'دو مسیر دریافت: کالا با GRN (به موجودی یا مستقیم به شیء هزینه) و خدمات با SES؛ هر دو GR/IR را بستانکار می‌کنند تا فاکتور برسد',
            'Two receipt paths: goods via GRN (to stock or straight to a cost object) and services via SES; both credit GR/IR until the invoice arrives',
          ),
        },
        {
          type: 'p',
          text: t(
            'در پایان ماه فهرست **اقلام باز GR/IR** را بر اساس سفارش خرید تحلیل کنید. مانده **بستانکار** یعنی کالا یا خدمت دریافت شده ولی فاکتور نرسیده: بدهی واقعی است و از قبل ثبت شده. مانده **بدهکار** یعنی فاکتور رسیده ولی رسید ثبت نشده: یا کالا در راه است، یا انبار رسید را فراموش کرده، یا تأمین‌کننده بیش از تحویل صورت‌حساب داده است. اقلام کهنه نشانه سفارش‌هایی‌اند که باید بسته شوند.',
            'At month-end, analyse the **GR/IR open items** by purchase order. A **credit** balance means goods or services were received but not invoiced: a real liability, already booked. A **debit** balance means an invoice arrived but no receipt was posted: the goods are in transit, the warehouse forgot the receipt, or the vendor billed more than was delivered. Old items point to orders that should be closed.',
          ),
        },
        {
          type: 'table',
          caption: t('اقلام باز GR/IR مسار پترولیوم در پایان ماه 11', 'Masar Petroleum’s GR/IR open items at the end of month 11'),
          head: [t('سفارش', 'PO'), t('شرح', 'Description'), t('دریافت (بستانکار)', 'Received (credit)'), t('فاکتور (بدهکار)', 'Invoiced (debit)'), t('معنا و اقدام', 'Meaning and action')],
          numericCols: [2, 3],
          rows: [
            [t('PO-4512', 'PO-4512'), t('نمودارگیری چاه (SES-7790)', 'Well logging (SES-7790)'), 93000, 0, t('دریافت‌شده ولی فاکتورنشده؛ عادی، منتظر فاکتور', 'Received not invoiced; normal, awaiting invoice')],
            [t('PO-4630', 'PO-4630'), t('لوله جداری (GRN-50021)', 'Casing (GRN-50021)'), 1250000, 1250000, t('تطبیق‌شده؛ سیستم تسویه می‌کند', 'Matched; the system clears it')],
            [t('PO-4655', 'PO-4655'), t('ضد امولسیون', 'Demulsifier'), 0, 180000, t('فاکتور بدون رسید؛ از انبار میدان بپرسید، شاید GRN جا مانده', 'Invoice without receipt; ask the Field Warehouse, a GRN may be missing')],
            [t('PO-4471', 'PO-4471'), t('حمل آب تولیدی (SES)', 'Produced-water trucking (SES)'), 420000, 400000, t('اختلاف 20,000؛ فاکتور دوم یا اختلاف نرخ؟ از تأمین‌کننده بپرسید', '20,000 difference; a second invoice or a rate difference? Ask the vendor')],
            [t('PO-4102', 'PO-4102'), t('SES قدیمی، 9 ماه پیش', 'Old SES, 9 months ago'), 75000, 0, t('کهنه؛ اگر فاکتوری نمی‌آید، با تأیید برگشت داده و سفارش بسته شود', 'Stale; if no invoice will come, write back with approval and close the PO')],
            [t('**جمع**', '**Total**'), blank, 1838000, 1830000, t('مانده خالص بستانکار 8,000', 'Net credit balance 8,000')],
          ],
        },
        {
          type: 'p',
          text: t(
            'برای ترازنامه، اقلام بستانکار GR/IR در کنار بدهی‌های تعهدی و اقلام بدهکار در کنار سایر دریافتنی‌ها نشان داده می‌شوند. بسیاری از ERPها یک **اجرای طبقه‌بندی مجدد GR/IR** دارند که این کار را با سندی انجام می‌دهد که روز اول ماه بعد برگشت می‌خورد. اما خدمتی که انجام شده و هنوز SES ندارد، در GR/IR نیست و **تعهدی دستی** می‌خواهد:',
            'For the balance sheet, GR/IR credit items are presented with accrued liabilities and debit items with other receivables. Many ERPs have a **GR/IR regrouping run** that does this with an entry reversed on day 1 of the next month. A service that was performed but has no SES yet, however, is not in GR/IR and needs a **manual accrual**:',
          ),
        },
        {
          type: 'journal',
          title: t('تعهدی برای خدمتی که SES ندارد', 'Accrual for a service with no SES'),
          entries: [
            {
              date: d(1),
              lines: [
                { account: ac.repairsPrd, debit: 155000 },
                { account: ac.accrued, credit: 155000 },
              ],
              memo: t(
                'جابه‌جایی دکل تعمیر چاه AR-04 روزهای 29 و 30 انجام و برگه کارکرد امضا شد؛ SES ماه بعد ثبت می‌شود. سند `JA` با تاریخ برگشت روز 1 ماه 12 و پیوست برگه کارکرد و نرخ‌های قرارداد.',
                'The workover rig move to well AR-04 was done on days 29 and 30 and the field ticket signed; the SES will be entered next month. A `JA` document with a reversal date of day 1 of month 12, with the field ticket and contract rates attached.',
              ),
            },
          ],
        },
        {
          type: 'table',
          caption: t('قطع عملیات سایر دفترهای معین', 'Cut-off in the other sub-ledgers'),
          head: [t('دفتر معین', 'Sub-ledger'), t('کنترل قطع عملیات', 'Cut-off check'), t('خطای رایج', 'Typical error')],
          rows: [
            [t('موجودی', 'Inventory'), t('همه حواله‌ها به چاه‌ها و دستورهای کار ثبت شده؛ انتقال انبار مرکزی به انبار میدان در راه شناسایی شده؛ اختلاف شمارش ثبت شده؛ دوره انبار روز کاری 1 بسته شده', 'All goods issues to wells and work orders posted; transfers in transit from Central to Field Warehouse identified; count differences posted; inventory period closed on working day 1'), t('حواله‌ای که روز بعد با تاریخ ماه قبل ثبت می‌شود', 'A goods issue posted next day with last month’s date')],
            [t('پرداختنی‌ها', 'Payables'), t('فاکتورهای رسیده تا روز آخر ثبت یا در فهرست تعهدی؛ صورت‌حساب تأمین‌کنندگان بزرگ با دفتر معین تطبیق داده شده', 'Invoices received by the last day posted or on the accrual list; statements from major vendors reconciled to the sub-ledger'), t('فاکتورهای مانده در صندوق نامه یا ایمیل', 'Invoices left in the mailroom or inbox')],
            [t('دریافتنی‌ها', 'Receivables'), t('هر محموله نفت خام بر اساس تاریخ برگه بارگیری در همان ماه صورت‌حساب شده؛ وجوه دریافتی به فاکتورها تخصیص یافته؛ مطالبات مشکوک بازبینی شده', 'Each crude cargo billed in the month of its lifting-ticket date; cash receipts applied to invoices; doubtful debts reviewed'), t('درآمد محموله روز 30 در ماه بعد', 'Revenue for a day-30 cargo booked next month')],
            [t('دارایی‌های ثابت', 'Fixed assets'), t('دارایی‌هایی که آماده بهره‌برداری شده‌اند از WBS تسویه و ثبت شده‌اند', 'Assets ready for use settled from their WBS and capitalised'), t('چاه تکمیل‌شده که هنوز در دارایی در جریان تکمیل مانده و استهلاک نمی‌شود', 'A completed well left in assets under construction and not depleted')],
          ],
        },
      ],
    },
    {
      id: 'accruals-runs',
      title: t('تعهدی‌ها، پیش‌پرداخت‌ها، استهلاک ذخایر، تسویه و تخصیص', 'Accruals, Prepayments, Depletion, Settlement and Allocation'),
      blocks: [
        {
          type: 'p',
          text: t(
            'منطق تعهدی‌ها و پیش‌پرداخت‌ها همان است که در درس «ثبت‌های اصلاحی» دیدید و روش ثبت آن‌ها در ERP (تعهدی با برگشت خودکار، سند تکراری، مدرک پشتیبان) در درس «مدیریت اسناد حسابداری در ERP» آمد. در بستن ماه، حسابدار دفتر کل یک **جدول تعهدی‌ها و پیش‌پرداخت‌ها** نگه می‌دارد تا هیچ قلمی جا نماند.',
            'The logic of accruals and prepayments is the one you met in the lesson on adjusting entries, and how to post them in an ERP (auto-reversing accruals, recurring entries, supporting evidence) was covered in the lesson on managing journal entries in an ERP. At month-end the GL accountant keeps an **accruals and prepayments schedule** so that nothing is missed.',
          ),
        },
        {
          type: 'table',
          caption: t('جدول تعهدی‌ها و پیش‌پرداخت‌های ماه 11 (ارقام فرضی)', 'Accruals and prepayments schedule for month 11 (illustrative figures)'),
          head: [t('قلم', 'Item'), t('مبنای محاسبه', 'Basis'), t('مبلغ', 'Amount'), t('نوع سند', 'Document')],
          numericCols: [2],
          rows: [
            [t('جابه‌جایی دکل تعمیر AR-04 (بدون SES)', 'AR-04 workover rig move (no SES)'), t('برگه کارکرد × نرخ قرارداد', 'Field ticket × contract rates'), 155000, t('`JA` با برگشت', '`JA` with reversal')],
            [t('برق ایستگاه تقویت فشار (بدون سفارش خرید)', 'Compressor station electricity (no PO)'), t('قرائت کنتور × تعرفه', 'Meter reading × tariff'), 96000, t('`JA` با برگشت', '`JA` with reversal')],
            [t('پاداش کارکنان', 'Staff bonus'), t('یک‌دوازدهم برآورد سالانه 1,440,000', 'One twelfth of the 1,440,000 annual estimate'), 120000, t('`JA` (بدون برگشت تا پرداخت)', '`JA` (no reversal until paid)')],
            [t('آزادسازی بیمه پیش‌پرداخت', 'Prepaid insurance release'), t('1,440,000 ÷ 12', '1,440,000 ÷ 12'), 120000, t('`JC` سند تکراری', '`JC` recurring entry')],
            [t('**جمع**', '**Total**'), blank, 491000, blank],
          ],
        },
        { type: 'h', text: t('تسویه WBS و دستور کار، و تخصیص‌ها', 'WBS and work-order settlement, and allocations') },
        {
          type: 'p',
          text: t(
            'هزینه‌های سرمایه‌ای روی عنصرهای WBS یک AFE در حساب 1510 جمع می‌شوند. وقتی چاه تکمیل و آماده بهره‌برداری شد، **تسویه (Settlement)** کل هزینه را به دارایی نفت و گاز (1520) می‌برد تا استهلاک ذخایر آن شروع شود. دستورهای کار نگهداری هم هزینه‌ها را جمع می‌کنند و به مرکز هزینه گیرنده (مثلاً `CC-ARY-CMP`) تسویه می‌شوند؛ چون حساب هزینه عوض نمی‌شود، این تسویه فقط شیء هزینه را تغییر می‌دهد. سپس **تخصیص‌ها** هزینه مراکز خدماتی مانند کمپ و نگهداری را به تولید و AFEها می‌برند؛ جزئیات آن در درس «مراکز هزینه و تسهیم هزینه‌ها» آمده است.',
            'Capital costs collect on the WBS elements of an AFE in account 1510. When the well is completed and ready for use, **settlement** moves the whole cost to oil and gas properties (1520) so its depletion can start. Maintenance work orders also collect costs and are settled to the receiving cost centre (such as `CC-ARY-CMP`); since the expense account does not change, that settlement only changes the cost object. Then **allocations** move the costs of service centres such as the camp and maintenance to production and AFEs; the details are in the lesson on cost centres and cost allocation.',
          ),
        },
        {
          type: 'journal',
          title: t('تسویه AFE تکمیل‌شده به دارایی', 'Settling a completed AFE to an asset'),
          entries: [
            {
              date: d(2),
              lines: [
                { account: ac.ogp, debit: 18600000 },
                { account: ac.auc, credit: 18600000 },
              ],
              memo: t('سند `ST`: چاه توسعه‌ای `AFE-2025-014` روز 27 ماه 11 آماده بهره‌برداری شد؛ کل هزینه عنصرهای WBS به دارایی منتقل می‌شود.', '`ST` document: the development well on `AFE-2025-014` was ready for use on day 27 of month 11; the full cost of its WBS elements moves to the asset.'),
            },
          ],
        },
        { type: 'h', text: t('اجرای استهلاک و استهلاک ذخایر', 'Depreciation and depletion runs') },
        {
          type: 'p',
          text: t(
            'ماژول دارایی‌ها دو نوع هزینه را در یک **اجرای استهلاک** می‌سازد: استهلاک خط مستقیم برای تجهیزاتی مانند کمپرسورها، کمپ و خودروها، و **استهلاک ذخایر (Depletion)** به روش واحد تولید برای دارایی‌های نفت و گاز که در درس «حسابداری نفت و گاز بالادستی» دیدید. اجرا ابتدا آزمایشی انجام می‌شود تا ارقام بازبینی شوند، سپس واقعی، و یک سند `DP` می‌سازد. داده‌های ورودی آن، یعنی تولید ماه و ذخایر ثابت‌شده توسعه‌یافته، باید از واحد مخازن و گزارش تولید رسماً تأیید شده باشند.',
            'The assets module creates two kinds of charge in one **depreciation run**: straight-line depreciation on equipment such as compressors, the camp and vehicles, and **depletion** by the units-of-production method on oil and gas properties, as in the lesson on upstream oil and gas accounting. The run is first done as a test so the figures can be reviewed, then for real, and it creates a `DP` document. Its inputs, the month’s production and the proved developed reserves, must be formally confirmed by the reservoir team and the production report.',
          ),
        },
        {
          type: 'formula',
          text: t(
            'استهلاک ذخایر ماه = ارزش دفتری مبنای استهلاک (با چاه‌های تسویه‌شده همین ماه) × تولید ماه ÷ ذخایر باقی‌مانده اول دوره',
            'Monthly depletion = Net book value of the depletion base (including wells settled this month) × Production in the month ÷ Remaining reserves at start of period',
          ),
          note: t(
            'میدان آریا: 120,000,000 (شامل 18,600,000 چاه تازه) × 360,000 بشکه ÷ 24,000,000 بشکه = 1,800,000، یعنی 5 برای هر بشکه',
            'Arya field: 120,000,000 (including the new 18,600,000 well) × 360,000 barrels ÷ 24,000,000 barrels = 1,800,000, that is 5 per barrel',
          ),
        },
        {
          type: 'journal',
          title: t('سند `DP` اجرای استهلاک ماه 11', 'The month 11 depreciation run (`DP` document)'),
          entries: [
            {
              date: d(2),
              lines: [
                { account: ac.depExp, debit: 420000 },
                { account: ac.accDep, credit: 420000 },
              ],
              memo: t('استهلاک خط مستقیم ایستگاه تقویت فشار، کمپ و خودروها.', 'Straight-line depreciation of the compressor station, camp and vehicles.'),
            },
            {
              date: d(2),
              lines: [
                { account: ac.depletion, debit: 1800000 },
                { account: ac.accDepl, credit: 1800000 },
              ],
              memo: t('استهلاک ذخایر میدان آریا به روش واحد تولید.', 'Units-of-production depletion of the Arya field.'),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('ترتیب اجراها مهم است', 'The order of the runs matters'),
          text: t(
            'ابتدا همه هزینه‌های اولیه (GRN، SES، فاکتور، تعهدی) کامل شوند، بعد تسویه AFEهای تکمیل‌شده، سپس استهلاک و استهلاک ذخایر (تا چاه تازه هم مستهلک شود)، سپس تسویه دستورهای کار و تخصیص‌ها، و در آخر صورت‌حساب شرکا. اگر صورت‌حساب شرکا پیش از تخصیص اجرا شود، سهم شرکا از هزینه کمپ و نگهداری جا می‌ماند.',
            'First complete all primary costs (GRNs, SESs, invoices, accruals), then settle completed AFEs, then run depreciation and depletion (so the new well is depleted too), then work-order settlement and allocations, and joint interest billing last. If billing runs before allocations, the partners’ share of camp and maintenance costs is left out.',
          ),
        },
      ],
    },
    {
      id: 'fx-intercompany',
      title: t('تسعیر ارز و تطبیق بین شرکتی', 'Foreign-Currency Revaluation and Intercompany Matching'),
      blocks: [
        {
          type: 'p',
          text: t(
            'مسار پترولیوم قطعات کمپرسور را از تأمین‌کننده خارجی می‌خرد، یک حساب بانکی ارزی دارد و میعانات گازی را به خریدار خارجی می‌فروشد. طبق IAS 21، **اقلام پولی** ارزی (بدهی، طلب، موجودی بانک، وام) در پایان دوره با **نرخ پایان دوره** تسعیر می‌شوند و تفاوت به سود و زیان می‌رود؛ **اقلام غیرپولی** مانند موجودی کالا و دارایی ثابت با نرخ تاریخ خرید باقی می‌مانند. اجرای تسعیر ERP اقلام باز ارزی و جدول نرخ‌ها را می‌خواند و سند تعدیل را می‌سازد. در این مثال ارز خارجی را FC می‌نامیم.',
            'Masar Petroleum buys compressor spares from a foreign vendor, holds a foreign-currency bank account and sells condensate to a foreign buyer. Under IAS 21, foreign-currency **monetary items** (payables, receivables, bank balances, loans) are retranslated at the **closing rate** at period-end and the difference goes to profit or loss; **non-monetary items** such as inventory and fixed assets stay at the rate of their purchase date. The ERP’s revaluation run reads the open foreign-currency items and the rate table and posts the adjustment. In this example we call the foreign currency FC.',
          ),
        },
        {
          type: 'table',
          caption: t('اقلام باز ارزی در پایان ماه 11 (نرخ پایان دوره: هر FC برابر 1.08)', 'Open foreign-currency items at the end of month 11 (closing rate: 1.08 per FC)'),
          head: [
            t('قلم', 'Item'),
            t('مبلغ ارزی (FC)', 'FC amount'),
            t('نرخ ثبت', 'Booked rate'),
            t('نرخ پایان دوره', 'Closing rate'),
            t('ارزش ثبت‌شده', 'Booked value'),
            t('ارزش تسعیرشده', 'Revalued value'),
            t('اثر بر سود (سود مثبت، زیان منفی)', 'Effect on profit (gain positive, loss negative)'),
          ],
          numericCols: [1, 2, 3, 4, 5, 6],
          rows: [
            [t('بدهی به تأمین‌کننده قطعات کمپرسور', 'Payable to the compressor spares vendor'), 2000000, 1.05, 1.08, 2100000, 2160000, -60000],
            [t('موجودی حساب بانکی ارزی', 'Foreign-currency bank balance'), 5000000, 1.07, 1.08, 5350000, 5400000, 50000],
            [t('طلب از خریدار میعانات', 'Receivable from the condensate buyer'), 1000000, 1.09, 1.08, 1090000, 1080000, -10000],
            [t('**جمع**', '**Total**'), blank, blank, blank, blank, blank, -20000],
          ],
        },
        {
          type: 'journal',
          title: t('سندهای اجرای تسعیر ارز', 'Entries from the FX revaluation run'),
          entries: [
            {
              date: d(2),
              lines: [
                { account: ac.fxLoss, debit: 60000 },
                { account: ac.ap, credit: 60000 },
              ],
              memo: t('بدهی ارزی بزرگ‌تر شد: زیان. اجرای تسعیر (نه سند دستی) حساب کنترل پرداختنی‌ها را تعدیل می‌کند.', 'The FC liability grew: a loss. The revaluation run (not a manual entry) adjusts the payables control account.'),
            },
            {
              date: d(2),
              lines: [
                { account: ac.fcBank, debit: 50000 },
                { account: ac.fxGain, credit: 50000 },
              ],
              memo: t('دارایی ارزی بزرگ‌تر شد: سود.', 'The FC asset grew: a gain.'),
            },
            {
              date: d(2),
              lines: [
                { account: ac.fxLoss, debit: 10000 },
                { account: ac.ar, credit: 10000 },
              ],
              memo: t('طلب ارزی کوچک‌تر شد: زیان. خالص سه سند: زیان تسعیر 20,000.', 'The FC receivable shrank: a loss. Net of the three entries: an FX loss of 20,000.'),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('در عمل: نرخ و روش', 'In practice: rate and method'),
          text: t(
            'بسیاری از شرکت‌ها تسعیر پایان ماه را روز اول ماه بعد خودکار برگشت می‌زنند و در پایان هر ماه دوباره از نرخ ثبت اولیه تسعیر می‌کنند؛ نتیجه سالانه یکی است، اما هر قلم همیشه با نرخ اصلی خود در دفاتر می‌ماند. منبع نرخ (بانک مرکزی، نرخ مصوب گروه) باید در سیاست‌ها مشخص و در سند پیوست شود. در ایران که ممکن است چند نرخ ارز هم‌زمان وجود داشته باشد، نوع نرخ را طبق استاندارد حسابداری مربوط و مقررات روز انتخاب کنید.',
            'Many companies reverse the month-end revaluation automatically on day 1 of the next month and revalue again from the original booked rate at each month-end; the annual result is the same, but each item always stays in the books at its original rate. The rate source (central bank, an approved group rate) must be set in policy and attached to the run. In Iran, where several exchange rates may exist at once, choose the rate type according to the applicable accounting standard and current regulations.',
          ),
        },
        { type: 'h', text: t('تطبیق بین شرکتی پیش از بستن', 'Intercompany matching before the close') },
        {
          type: 'p',
          text: t(
            'مسار پترولیوم (`MP01`) با شرکت‌های گروه معامله می‌کند: خدمات حفاری از شرکت خدمات حفاری مسار (`MP02`)، خدمات و هزینه‌های بازپرداختی با مسار پترولیوم خدمات عمان (`MP03`) و یک وام به `MP02`. تا روز کاری سوم، هر دو طرف هر جفت باید مانده‌ها و معاملات بین خود را تأیید کنند. هر اختلافی علت دارد و باید پیش از تلفیق حل شود؛ قاعده رایج این است که **رقم فروشنده ملاک است** و خریدار سند جاافتاده را ثبت می‌کند. جزئیات حذف و تلفیق در درس «معاملات بین شرکتی و تلفیق» آمده است.',
            'Masar Petroleum (`MP01`) trades with group companies: drilling services from Masar Drilling Services (`MP02`), services and recharges with Masar Petroleum Oman Services (`MP03`), and a loan to `MP02`. By working day 3, both sides of each pair must confirm the balances and transactions between them. Every difference has a cause and must be resolved before consolidation; a common rule is that **the seller’s figure leads** and the buyer posts the missing document. Elimination and consolidation are covered in the lesson on intercompany transactions and consolidation.',
          ),
        },
        {
          type: 'table',
          caption: t('گزارش تطبیق بین شرکتی، پایان ماه 11', 'Intercompany matching report, end of month 11'),
          head: [t('جفت و موضوع', 'Pair and subject'), t('در دفاتر `MP01`', 'In `MP01` books'), t('در دفاتر طرف مقابل', 'In the counterparty’s books'), t('اختلاف', 'Difference'), t('علت و اقدام', 'Cause and action')],
          numericCols: [1, 2, 3],
          rows: [
            [t('`MP01` و `MP02`: خدمات حفاری', '`MP01` and `MP02`: drilling services'), 1450000, 1600000, 150000, t('فاکتور روز آخر ماه `MP02` در `MP01` ثبت نشده؛ مهندس میدان SES را در همین دوره تأیید می‌کند', '`MP02`’s last-day invoice not posted in `MP01`; the field engineer accepts the SES in this period')],
            [t('`MP01` و `MP03`: بازپرداخت هزینه‌ها', '`MP01` and `MP03`: recharges'), 820000, 800000, 20000, t('دو طرف نرخ ارز متفاوت به کار برده‌اند؛ نرخ مصوب گروه در تاریخ فاکتور اعمال شود', 'The two sides used different exchange rates; apply the approved group rate at the invoice date')],
            [t('`MP01` و `MP02`: وام', '`MP01` and `MP02`: loan'), 10000000, 10000000, 0, t('تطبیق‌شده', 'Matched')],
          ],
        },
      ],
    },
    {
      id: 'reconciliations',
      title: t('تطبیق‌ها: بانک، دفترهای معین، حساب‌های معلق و واسط', 'Reconciliations: Bank, Sub-Ledgers, Suspense and Clearing Accounts'),
      blocks: [
        {
          type: 'p',
          text: t(
            'سیاست مسار پترولیوم: هر حساب ترازنامه، بسته به ریسکش، ماهانه یا فصلی تطبیق داده می‌شود. هر تطبیق یک **تهیه‌کننده** و یک **بازبین** دارد، شواهدش در ERP پیوست می‌شود و هر اختلاف توضیح‌داده‌نشده بالاتر از حد تعیین‌شده به کنترلر گزارش می‌شود. تطبیق بانکی را در درس «وجه نقد، بانک و صورت مغایرت بانکی» دیدید؛ اینجا همان کار در مقیاس یک شرکت نفتی است.',
            'Masar Petroleum’s policy: every balance-sheet account is reconciled monthly or quarterly depending on its risk. Each reconciliation has a **preparer** and a **reviewer**, its evidence is attached in the ERP, and any unexplained difference above a set threshold is escalated to the controller. You met the bank reconciliation in the lesson on cash, banks and bank reconciliation; here is the same work at the scale of an oil company.',
          ),
        },
        {
          type: 'table',
          caption: t('صورت مغایرت بانکی حساب 1110، پایان ماه 11', 'Bank reconciliation of account 1110, end of month 11'),
          head: [t('قلم', 'Item'), t('مبلغ', 'Amount')],
          numericCols: [1],
          rows: [
            [t('مانده طبق صورت‌حساب بانک', 'Balance per bank statement'), 7845000],
            [t('اضافه می‌شود: واریزهای در راه', 'Add: deposits in transit'), 320000],
            [t('کسر می‌شود: پرداخت‌های صادرشده و هنوز وصول‌نشده', 'Less: payments issued, not yet cleared'), -585000],
            [t('**مانده اصلاح‌شده بانک**', '**Adjusted bank balance**'), 7580000],
            [t('مانده طبق دفاتر', 'Balance per books'), 7602500],
            [t('کسر می‌شود: کارمزد بانکی ثبت‌نشده', 'Less: bank charges not yet recorded'), -2500],
            [t('کسر می‌شود: عوارض حق عبور خط لوله که بانک مستقیم برداشته', 'Less: pipeline right-of-way fee taken by direct debit'), -20000],
            [t('**مانده اصلاح‌شده دفاتر**', '**Adjusted book balance**'), 7580000],
          ],
        },
        {
          type: 'journal',
          title: t('ثبت اقلام سمت دفاتر', 'Recording the book-side items'),
          entries: [
            {
              date: d(3),
              lines: [
                { account: ac.bankCharges, debit: 2500 },
                { account: ac.bank, credit: 2500 },
              ],
              memo: t('کارمزد بانکی ماه.', 'Bank charges for the month.'),
            },
            {
              date: d(3),
              lines: [
                { account: ac.opexPrd, debit: 20000 },
                { account: ac.bank, credit: 20000 },
              ],
              memo: t('عوارض ماهانه حق عبور خط لوله صادرات؛ رسید برداشت بانک پیوست.', 'Monthly right-of-way fee for the export pipeline; bank debit advice attached.'),
            },
          ],
        },
        {
          type: 'table',
          caption: t('تطبیق دفترهای معین با دفتر کل، پایان ماه 11', 'Sub-ledgers against the general ledger, end of month 11'),
          head: [t('حساب کنترل', 'Control account'), t('مانده دفتر کل', 'GL balance'), t('گزارش دفتر معین', 'Sub-ledger report'), t('اختلاف', 'Difference'), t('توضیح', 'Explanation')],
          numericCols: [1, 2, 3],
          rows: [
            [t('1210 دریافتنی‌ها', '1210 Receivables'), 6240000, 6240000, 0, t('اقلام باز مشتریان', 'Customer open items')],
            [t('1310 موجودی', '1310 Inventory'), 9815000, 9790000, 25000, t('سند دستی ماه 8 مستقیم به 1310 (پیش از قاعده V5)؛ برگشت و اصلاح از راه ماژول انبار', 'A month 8 manual entry posted straight to 1310 (before rule V5); reverse and correct through the inventory module')],
            [t('1510 دارایی در جریان تکمیل', '1510 Assets under construction'), 31400000, 31400000, 0, t('گزارش هزینه AFEها', 'AFE cost report')],
            [t('2110 پرداختنی‌ها', '2110 Payables'), 4380000, 4380000, 0, t('اقلام باز تأمین‌کنندگان', 'Vendor open items')],
            [t('2120 GR/IR (بستانکار)', '2120 GR/IR (credit)'), 8000, 8000, 0, t('همان تحلیل اقلام باز GR/IR', 'The GR/IR open-items analysis')],
          ],
        },
        { type: 'h', text: t('حساب‌های معلق و واسط', 'Suspense and clearing accounts') },
        {
          type: 'p',
          text: t(
            '**حساب معلق (Suspense)** جای موقت اقلامی است که هنوز معلوم نیست به کجا تعلق دارند، مانند واریزی ناشناس. **حساب واسط (Clearing)** حسابی است که پس از کامل شدن یک فرایند باید صفر شود: GR/IR، واسط حقوق، واسط پرداخت‌های در راه بانک و واسط درخواست وجه شرکا. قاعده مسار پترولیوم: حساب معلق در پایان ماه یا صفر است یا هر قلمش سن و توضیح دارد، و هیچ قلمی بیش از 30 روز نمی‌ماند.',
            'A **suspense account** temporarily holds items whose home is not yet known, such as an unidentified receipt. A **clearing account** must return to zero once a process is complete: GR/IR, payroll clearing, the bank clearing for payments in transit and the partner cash-call clearing. Masar Petroleum’s rule: at month-end the suspense account is either zero or every item in it has an age and an explanation, and no item stays more than 30 days.',
          ),
        },
        {
          type: 'table',
          caption: t('سن اقلام حساب معلق 1990، پایان ماه 11', 'Ageing of suspense account 1990, end of month 11'),
          head: [t('قلم', 'Item'), t('مبلغ', 'Amount'), t('سن (روز)', 'Age (days)'), t('اقدام', 'Action')],
          numericCols: [1, 2],
          rows: [
            [t('واریز ناشناس', 'Unidentified receipt'), 240000, 5, t('درخواست وجه نفت دنا است؛ به حساب 1730 منتقل شود', 'It is Dena Petroleum’s cash call; clear to account 1730')],
            [t('کارمزد انتقال بدون مرکز هزینه', 'Transfer fee with no cost centre'), 1200, 12, t('به 5920 کارمزد بانکی', 'Clear to 5920 bank charges')],
            [t('قلم قدیمی از انتقال داده‌ها', 'Old item from data migration'), 85000, 210, t('بررسی؛ در صورت نیافتن منشأ، با تأیید کنترلر از حساب حذف شود', 'Investigate; if the source cannot be found, write off with the controller’s approval')],
            [t('**جمع**', '**Total**'), 326200, blank, blank],
          ],
        },
      ],
    },
    {
      id: 'partners-reporting-lock',
      title: t('صورت‌حساب شرکا، بازیافت هزینه، بسته گزارش و قفل دوره', 'Partner Billing, Cost Recovery, the Reporting Pack and the Period Lock'),
      blocks: [
        {
          type: 'p',
          text: t(
            'وقتی هزینه‌ها کامل، تسویه و تخصیص شدند، **صورت‌حساب سهم شرکا (JIB)** اجرا می‌شود: سهم هر شریک از هزینه‌های حساب مشترک طبق موافقت‌نامه عملیات مشترک محاسبه و با **درخواست وجه (Cash call)** که پیش‌تر پرداخته مقایسه می‌شود. سهم‌ها همان درس «مشارکت‌ها و عملیات مشترک» است: مسار پترولیوم 50، البرز 30 و دنا 20 درصد.',
            'Once costs are complete, settled and allocated, **joint interest billing (JIB)** runs: each partner’s share of the joint account costs is computed under the joint operating agreement and compared with the **cash call** it paid in advance. The shares are those of the lesson on joint ventures and joint operations: Masar Petroleum 50, Alborz 30 and Dena 20 percent.',
          ),
        },
        {
          type: 'table',
          caption: t('صورت‌حساب سهم شرکا، ماه 11 (هزینه حساب مشترک: 16,000,000)', 'Joint interest billing, month 11 (joint account costs: 16,000,000)'),
          head: [t('شریک', 'Partner'), t('سهم', 'Share'), t('سهم از هزینه', 'Share of costs'), t('وجه دریافتی', 'Cash call received'), t('مانده (مثبت: بدهکار شریک؛ منفی: اضافه‌پرداخت)', 'Balance (positive: partner owes; negative: overpaid)')],
          numericCols: [2, 3, 4],
          rows: [
            [t('مسار پترولیوم (اپراتور)', 'Masar Petroleum (operator)'), t('50٪', '50%'), 8000000, 8000000, 0],
            [t('انرژی البرز', 'Alborz Energy'), t('30٪', '30%'), 4800000, 5100000, -300000],
            [t('نفت دنا', 'Dena Petroleum'), t('20٪', '20%'), 3200000, 3000000, 200000],
            [t('**جمع**', '**Total**'), t('100٪', '100%'), 16000000, 16100000, -100000],
          ],
        },
        {
          type: 'journal',
          title: t('ثبت صورت‌حساب شرکا در دفاتر اپراتور', 'Posting the JIB in the operator’s books'),
          entries: [
            {
              date: d(3),
              lines: [
                { account: ac.alborz, debit: 4800000 },
                { account: ac.dena, debit: 3200000 },
                { account: ac.jointAccount, credit: 8000000 },
              ],
              memo: t(
                'سهم شرکا از حساب مشترک به حساب جاری آن‌ها می‌رود. پس از این ثبت، مانده جاری البرز 300,000 بستانکار (اضافه‌پرداخت، از درخواست وجه بعدی کم می‌شود) و دنا 200,000 بدهکار است.',
                'The partners’ share leaves the joint account for their current accounts. After this entry Alborz shows a 300,000 credit (overpaid, deducted from the next cash call) and Dena a 200,000 debit.',
              ),
            },
          ],
        },
        {
          type: 'p',
          text: t(
            '**صورت بازیافت هزینه** گزارشی است که گروه پیمانکار طبق قرارداد نفتی (در این مثال فصلی؛ دوره واقعی را قرارداد تعیین می‌کند) به شرکت ملی نفت می‌دهد. فقط هزینه‌های **R** با مدرک کامل، به تفکیک طبقه (اکتشاف، توسعه، عملیاتی) در آن می‌آیند و جمع آن باید با دفتر کل تطبیق داده شود. هزینه‌های N کنار گذاشته می‌شوند و مسار پترولیوم تعهدی‌ها را تا جایگزینی با سند واقعی ادعا نمی‌کند.',
            'The **cost-recovery statement** is the report the contractor group gives the national oil company under the petroleum contract (quarterly in this example; the contract sets the real frequency). Only **R** costs with complete evidence go into it, split by category (Exploration, Development, Operating), and its total must be reconciled to the general ledger. N costs are excluded, and Masar Petroleum does not claim accruals until they are replaced by actual documents.',
          ),
        },
        {
          type: 'table',
          caption: t('تطبیق صورت بازیافت هزینه با دفتر کل، فصل 4 (ارقام فرضی)', 'Reconciling the cost-recovery statement to the ledger, quarter 4 (illustrative figures)'),
          head: [t('سطر', 'Line'), t('مبلغ', 'Amount')],
          numericCols: [1],
          rows: [
            [t('هزینه‌های `JV-ARY` در دفتر کل در این فصل (100٪)', 'Costs on `JV-ARY` in the ledger this quarter (100%)'), 47500000],
            [t('کسر می‌شود: اقلام N (جریمه‌ها، هزینه‌های غیرمجاز)', 'Less: N items (fines, disallowed costs)'), -650000],
            [t('کسر می‌شود: تعهدی‌هایی که هنوز سند واقعی ندارند', 'Less: accruals not yet replaced by actual documents'), -300000],
            [t('**هزینه قابل بازیافت ادعاشده**', '**Recoverable costs claimed**'), 46550000],
            [t('از آن: توسعه', 'Of which: Development'), 16200000],
            [t('از آن: عملیاتی', 'Of which: Operating'), 30350000],
          ],
        },
        { type: 'h', text: t('بسته گزارش و قفل دوره', 'The reporting pack and the period lock') },
        {
          type: 'list',
          items: [
            t('تراز آزمایشی و صورت‌های مالی ماهانه در قالب مدیریتی', 'Trial balance and monthly financial statements in management format'),
            t('تحلیل انحراف با بودجه و ماه قبل، با توضیح هر انحراف بااهمیت', 'Variance analysis against budget and last month, with an explanation for each significant variance'),
            t('حجم تولید و فروش، و هزینه عملیاتی هر بشکه معادل نفت', 'Production and sales volumes, and operating cost per barrel of oil equivalent'),
            t('گزارش وضعیت AFEها: بودجه، تعهدات، هزینه واقعی، پیش‌بینی تکمیل', 'AFE status report: budget, commitments, actuals, forecast at completion'),
            t('وجه نقد و نقدینگی، مانده شرکا و خلاصه صورت‌حساب آن‌ها', 'Cash and liquidity, partner balances and a billing summary'),
            t('وضعیت بازیافت هزینه (پایان فصل) و قضاوت‌های کلیدی ماه (تعهدی‌ها، ذخیره‌ها)', 'Cost-recovery position (quarter-end) and the month’s key judgements (accruals, provisions)'),
            t('شاخص‌های بستن: تعداد روزهای بستن، تعداد سندهای دستی، اقلام باز تطبیق', 'Close KPIs: close days, number of manual entries, open reconciling items'),
          ],
        },
        {
          type: 'p',
          text: t(
            'پس از بازبینی و تأیید کنترلر، دوره برای همه کاربران قفل می‌شود و فقط دوره بعد باز می‌ماند. سفارش‌های باز و تعهدات خودکار به دوره بعد منتقل می‌شوند و مانده‌ها ادامه پیدا می‌کنند. در پایان سال کارهای بیشتری هم لازم است:',
            'After review and the controller’s sign-off, the period is locked for all users and only the next period stays open. Open orders and commitments carry forward automatically and balances roll on. At year-end, more is needed:',
          ),
        },
        {
          type: 'table',
          caption: t('کارهای افزوده بستن سال', 'Extra year-end tasks'),
          head: [t('کار', 'Task'), t('چرا', 'Why')],
          rows: [
            [t('شمارش کامل انبار مرکزی و انبار میدان', 'Full count of the Central and Field Warehouses'), t('تأیید وجود و ارزش موجودی؛ اختلاف‌ها ثبت می‌شوند', 'Confirms stock exists and its value; differences are posted')],
            [t('بازدید دارایی‌ها و بررسی نشانه‌های کاهش ارزش (IAS 36)', 'Asset verification and review of impairment indicators (IAS 36)'), t('افت قیمت نفت یا ذخایر ممکن است کاهش ارزش بخواهد', 'A fall in oil prices or reserves may call for an impairment')],
            [t('به‌روزرسانی ذخایر از گزارش مستقل ذخایر', 'Reserves update from the independent reserves report'), t('نرخ استهلاک ذخایر سال بعد را تغییر می‌دهد', 'Changes next year’s depletion rate')],
            [t('بازبینی ذخیره برچیدن تأسیسات (IAS 37)', 'Decommissioning provision review (IAS 37)'), t('برآورد هزینه و نرخ تنزیل تغییر می‌کند', 'Cost estimates and discount rates change')],
            [t('مالیات جاری و انتقالی', 'Current and deferred tax'), t('طبق قوانین مالیاتی روز محاسبه می‌شود', 'Computed under the current tax law')],
            [t('تعدیلات حسابرسی در دوره‌های ویژه 13 تا 16', 'Audit adjustments in special periods 13 to 16'), t('از نتیجه ماه 12 جدا بماند', 'Kept apart from month 12 results')],
            [t('انتقال مانده‌ها به سال جدید', 'Balance carry-forward to the new year'), t('حساب‌های سود و زیان به سود انباشته بسته می‌شوند و مانده‌های ترازنامه به سال بعد می‌روند', 'P&L accounts close to retained earnings and balance-sheet balances roll into the new year')],
            [t('دفاتر قانونی و پشتیبانی حسابرسی مستقل، شرکا و طرف دولتی', 'Legal books and support for the external, partner and government audits'), t('شواهد و فهرست سندها آماده باشد', 'Evidence and document listings ready')],
          ],
        },
      ],
    },
    {
      id: 'erp-checklist',
      title: t('بستن دوره در ERP و چک‌لیست کامل', 'The Close in the ERP and the Full Checklist'),
      blocks: [
        {
          type: 'p',
          text: t(
            'ERP بستن را با یک **فهرست کارهای بستن (Close task list)** مدیریت می‌کند: هر کار مسئول، روز، پیش‌نیاز و وضعیت دارد و اجراهای خودکار به ترتیب درست زمان‌بندی می‌شوند. اگر پیش‌نیاز کاری انجام نشده باشد (مثلاً دوره انبار هنوز باز است)، اجرای بعدی شروع نمی‌شود. گزارش هر اجرا (موفق، خطا، هشدار) ذخیره و پیوست چک‌لیست می‌شود.',
            'The ERP manages the close with a **close task list**: each task has an owner, a day, prerequisites and a status, and the automatic runs are scheduled in the right order. If a prerequisite is not done (the inventory period is still open, for example), the next run does not start. The log of each run (success, errors, warnings) is saved and attached to the checklist.',
          ),
        },
        {
          type: 'table',
          caption: t('داده پایه و تنظیماتی که بستن به آن‌ها تکیه دارد', 'Master data and settings the close relies on'),
          head: [t('داده پایه یا تنظیم', 'Master data or setting'), t('نقش در بستن', 'Role in the close')],
          rows: [
            [t('نوع دوره حسابداری', 'Posting period variant'), t('باز و بسته کردن دوره‌ها برای گروه‌های حساب و کاربر', 'Opening and closing periods per account and user group')],
            [t('جدول نرخ ارز و نوع نرخ', 'Exchange rate table and rate types'), t('ورودی تسعیر ارز', 'Input to FX revaluation')],
            [t('کلیدهای استهلاک، داده‌های تولید و ذخایر', 'Depreciation keys, production and reserves data'), t('ورودی اجرای استهلاک و استهلاک ذخایر', 'Input to the depreciation and depletion run')],
            [t('قاعده تسویه روی WBS و دستور کار', 'Settlement rules on WBS elements and work orders'), t('مقصد تسویه: دارایی یا مرکز هزینه', 'Settlement receiver: asset or cost centre')],
            [t('چرخه‌های تخصیص', 'Allocation cycles'), t('فرستنده، گیرنده و مبنای تسهیم', 'Sender, receiver and allocation basis')],
            [t('داده پایه مشارکت (`JV-ARY`) و سهم شرکا', 'Joint venture master (`JV-ARY`) and partner shares'), t('محاسبه صورت‌حساب شرکا', 'Joint interest billing calculation')],
            [t('برنامه‌های سند تکراری و الگوی فهرست کارهای بستن', 'Recurring schedules and the close task-list template'), t('کارهای ثابت هر ماه', 'The fixed tasks of every month')],
          ],
        },
        {
          type: 'table',
          caption: t('اجراهای خودکار بستن و آنچه ثبت می‌کنند', 'Automatic close runs and what they post'),
          head: [t('اجرا', 'Run'), t('نوع سند', 'Document type'), t('ثبت در دفتر کل', 'General ledger posting')],
          rows: [
            [t('برگشت تعهدی‌های ماه قبل', 'Reversal of last month’s accruals'), t('`JR`', '`JR`'), t('بدهکار 2130، بستانکار حساب هزینه', 'Debit 2130, credit the expense account')],
            [t('تسویه AFE تکمیل‌شده', 'Settlement of a completed AFE'), t('`ST`', '`ST`'), t('بدهکار 1520، بستانکار 1510', 'Debit 1520, credit 1510')],
            [t('استهلاک و استهلاک ذخایر', 'Depreciation and depletion'), t('`DP`', '`DP`'), t('بدهکار 5210 و 5220، بستانکار 1590 و 1595', 'Debit 5210 and 5220, credit 1590 and 1595')],
            [t('تسعیر ارز', 'FX revaluation'), t('`RV`', '`RV`'), t('4920 یا 5820 در برابر اقلام باز ارزی (2110، 1120، 1210)', '4920 or 5820 against the open FC items (2110, 1120, 1210)')],
            [t('صورت‌حساب شرکا', 'Joint interest billing'), t('`JB`', '`JB`'), t('بدهکار 1720 و 1730، بستانکار 1710', 'Debit 1720 and 1730, credit 1710')],
            [t('انتقال مانده به سال جدید (پایان سال)', 'Balance carry-forward (year-end)'), t('بدون سند عادی', 'No ordinary document'), t('سود و زیان به سود انباشته؛ مانده‌های ترازنامه به سال بعد', 'P&L to retained earnings; balance-sheet balances to the new year')],
          ],
        },
        {
          type: 'table',
          caption: t('چک‌لیست کامل بستن ماه مسار پترولیوم', 'Masar Petroleum’s full month-end close checklist'),
          head: [t('ردیف', 'No.'), t('کار', 'Task'), t('مسئول', 'Owner'), t('روز', 'Day'), t('شاهد یا خروجی', 'Evidence or output')],
          rows: [
            [t('1', '1'), t('ارسال دستور قطع عملیات و فهرست SES و GRNهای باز', 'Send cut-off instructions and the open SES and GRN list'), t('کنترل هزینه', 'Cost control'), d(-2), t('گزارش سفارش‌های باز', 'Open PO report')],
            [t('2', '2'), t('آخرین اجرای پرداخت و انتقال‌های بانکی', 'Last payment run and bank transfers'), t('خزانه‌داری', 'Treasury'), d(-1), t('فهرست پرداخت', 'Payment list')],
            [t('3', '3'), t('صدور و ارسال فاکتورهای بین شرکتی', 'Issue and send intercompany invoices'), t('حسابدار بین شرکتی', 'Intercompany accountant'), d(-1), t('دفتر فاکتورهای بین شرکتی', 'Intercompany invoice log')],
            [t('4', '4'), t('تأیید برگه‌های بارگیری و صدور فاکتور فروش', 'Confirm lifting tickets and issue sales invoices'), t('فروش و دریافتنی‌ها', 'Marketing and receivables'), d(0), t('گزارش بارگیری و صورت‌حساب', 'Lifting and billing report')],
            [t('5', '5'), t('ثبت همه GRN، حواله و SES تا ساعت 18', 'Post all GRNs, goods issues and SESs by 18:00'), t('انبار و مهندسان میدان', 'Warehouse and field engineers'), d(0), t('فهرست اسناد کالا و خدمات', 'Material and service document list')],
            [t('6', '6'), t('بستن دوره انبار', 'Close the inventory period'), t('سرپرست انبار', 'Warehouse supervisor'), d(1), t('وضعیت دوره', 'Period status')],
            [t('7', '7'), t('ثبت فاکتورهای رسیده و تحلیل GR/IR', 'Post received invoices and analyse GR/IR'), t('حسابدار پرداختنی‌ها', 'Payables accountant'), d(1), t('تحلیل اقلام باز GR/IR', 'GR/IR open-items analysis')],
            [t('8', '8'), t('تعهدی خدمات بدون SES و هزینه‌های بدون سفارش', 'Accrue services without an SES and non-PO costs'), t('حسابدار دفتر کل', 'GL accountant'), d(1), t('جدول تعهدی‌ها با مدارک', 'Accruals schedule with evidence')],
            [t('9', '9'), t('اجرای سندهای تکراری و پیش‌پرداخت‌ها', 'Run recurring entries and prepayments'), t('حسابدار دفتر کل', 'GL accountant'), d(1), t('گزارش اجرا', 'Run log')],
            [t('10', '10'), t('بارگذاری نرخ‌های ارز پایان دوره', 'Load closing exchange rates'), t('خزانه‌داری', 'Treasury'), d(1), t('جدول نرخ با منبع', 'Rate table with source')],
            [t('11', '11'), t('تسویه AFEهای تکمیل‌شده به دارایی', 'Settle completed AFEs to assets'), t('حسابدار دارایی', 'Asset accountant'), d(2), t('گزارش تسویه', 'Settlement log')],
            [t('12', '12'), t('اجرای استهلاک و استهلاک ذخایر (آزمایشی، سپس واقعی)', 'Depreciation and depletion run (test, then real)'), t('حسابدار دارایی', 'Asset accountant'), d(2), t('گزارش اجرا، تولید و ذخایر تأییدشده', 'Run log, confirmed production and reserves')],
            [t('13', '13'), t('تسویه دستورهای کار', 'Work-order settlement'), t('حسابدار بهای تمام‌شده', 'Cost accountant'), d(2), t('گزارش تسویه', 'Settlement log')],
            [t('14', '14'), t('اجرای چرخه‌های تخصیص', 'Run the allocation cycles'), t('حسابدار بهای تمام‌شده', 'Cost accountant'), d(2), t('گزارش تخصیص', 'Allocation report')],
            [t('15', '15'), t('اجرای تسعیر ارز', 'FX revaluation run'), t('حسابدار دفتر کل', 'GL accountant'), d(2), t('گزارش تسعیر', 'Revaluation log')],
            [t('16', '16'), t('تطبیق و تأیید مانده‌های بین شرکتی', 'Match and confirm intercompany balances'), t('حسابدار بین شرکتی', 'Intercompany accountant'), d(3), t('گزارش تطبیق با تأیید دو طرف', 'Matching report confirmed by both sides')],
            [t('17', '17'), t('صورت مغایرت همه حساب‌های بانکی', 'Reconcile every bank account'), t('خزانه‌داری', 'Treasury'), d(3), t('صورت مغایرت امضاشده', 'Signed reconciliation')],
            [t('18', '18'), t('تطبیق دفترهای معین و حساب‌های معلق و واسط', 'Reconcile sub-ledgers, suspense and clearing accounts'), t('حسابدار دفتر کل', 'GL accountant'), d(3), t('پرونده تطبیق', 'Reconciliation file')],
            [t('19', '19'), t('اجرای صورت‌حساب شرکا و ارسال صورت‌حساب', 'Run joint interest billing and send statements'), t('حسابدار مشارکت', 'JV accountant'), d(3), t('گزارش صورت‌حساب شرکا', 'JIB report')],
            [t('20', '20'), t('خالی کردن فهرست سندهای موقت', 'Clear the parked documents list'), t('حسابدار دفتر کل', 'GL accountant'), d(3), t('گزارش سندهای موقت (خالی)', 'Parked documents report (empty)')],
            [t('21', '21'), t('بسته گزارش و تحلیل انحراف', 'Reporting pack and variance analysis'), t('گزارشگری مالی', 'Financial reporting'), d(4), t('پیش‌نویس بسته', 'Draft pack')],
            [t('22', '22'), t('صورت بازیافت هزینه (پایان فصل)', 'Cost-recovery statement (quarter-end)'), t('مسئول بازیافت هزینه', 'Cost-recovery lead'), d(4), t('صورت تطبیق‌شده با دفتر کل', 'Statement reconciled to the ledger')],
            [t('23', '23'), t('بازبینی، تأیید و قفل دوره', 'Review, sign-off and period lock'), t('کنترلر مالی', 'Financial controller'), d(5), t('تأییدیه بستن و وضعیت دوره', 'Close sign-off and period status')],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('اشتباه‌های رایج در بستن', 'Common close mistakes'),
          text: t(
            'این خطاها هر سال در نامه‌های مدیریت حسابرسان تکرار می‌شوند:',
            'These errors appear in auditors’ management letters year after year:',
          ),
        },
        {
          type: 'list',
          items: [
            t('بستن دوره انبار پیش از ثبت همه حواله‌ها؛ هزینه چاه‌ها و دستورهای کار ناقص می‌ماند.', 'Closing the inventory period before all goods issues are posted, leaving well and work-order costs incomplete.'),
            t('تعهدی برای اقلامی که GRN یا SES آن‌ها ثبت شده؛ هزینه دو بار شمرده می‌شود.', 'Accruing items whose GRN or SES is already posted, so the cost is counted twice.'),
            t('تسویه نکردن AFE تکمیل‌شده؛ چاه در دارایی در جریان تکمیل می‌ماند و استهلاک ذخایر کم برآورد می‌شود.', 'Not settling a completed AFE, so the well stays in assets under construction and depletion is understated.'),
            t('اجرای صورت‌حساب شرکا پیش از تخصیص‌ها و تسویه‌ها.', 'Running joint interest billing before allocations and settlements.'),
            t('تسعیر اقلام غیرپولی (موجودی، دارایی ثابت) یا استفاده از نوع نرخ اشتباه.', 'Revaluing non-monetary items (inventory, fixed assets) or using the wrong rate type.'),
            t('حساب معلق به‌عنوان انبار اقلام بی‌صاحب؛ یا «جور کردن» تطبیق با عدد ساختگی.', 'Using suspense as a dumping ground, or forcing a reconciliation with a plug figure.'),
            t('حل اختلاف بین شرکتی فقط در دفاتر یک طرف با عدد ساختگی، بدون یافتن علت.', 'Resolving an intercompany difference in one side’s books with a plug, without finding the cause.'),
            t('صورت بازیافت هزینه‌ای که با دفتر کل تطبیق ندارد یا اقلام N را شامل می‌شود.', 'A cost-recovery statement that does not reconcile to the ledger or includes N items.'),
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
            'این تمرین‌ها چهار کار اصلی بستن را تمرین می‌کنند: GR/IR، استهلاک ذخایر و تسویه، تسعیر ارز و صورت‌حساب شرکا با بازیافت هزینه. ارقام فرضی‌اند. پیش از باز کردن پاسخ، ترتیب کارها را در تقویم بستن پیدا کنید.',
            'These exercises practise four core close tasks: GR/IR, depletion and settlement, FX revaluation, and partner billing with cost recovery. All figures are illustrative. Before opening a solution, find where the task sits in the close calendar.',
          ),
        },
        {
          type: 'exercise',
          title: t('تحلیل اقلام باز GR/IR', 'Analysing GR/IR open items'),
          difficulty: 'easy',
          problem: t(
            'اقلام باز حساب 2120 مسار پترولیوم در پایان ماه 7 در جدول آمده است. (الف) مانده خالص GR/IR چقدر و از چه نوعی است؟ (ب) کدام قلم تعهدی دستی می‌خواهد؟ (ج) برای هر قلم چه اقدامی لازم است؟ (د) برای قلم PO-4102، که پیمانکار کتباً تأیید کرده فاکتوری نخواهد فرستاد، سند برگشت را بنویسید و مانده جدید را بدهید. SES اصلی آن روی `CC-ARY-PRD` ثبت شده بود.',
            'Masar Petroleum’s open items in account 2120 at the end of month 7 are shown below. (a) What is the net GR/IR balance, and is it a debit or credit? (b) Which item needs a manual accrual? (c) What action does each item need? (d) For PO-4102, whose contractor has confirmed in writing that no invoice will come, write the write-back entry and give the new balance. Its original SES was charged to `CC-ARY-PRD`.',
          ),
          given: {
            head: [t('سفارش', 'PO'), t('شرح', 'Description'), t('دریافت (بستانکار)', 'Received (credit)'), t('فاکتور (بدهکار)', 'Invoiced (debit)')],
            numericCols: [2, 3],
            rows: [
              [t('PO-4720', 'PO-4720'), t('پذیرایی کمپ، SES-7811', 'Camp catering, SES-7811'), 214000, 0],
              [t('PO-4733', 'PO-4733'), t('شیرهای دروازه‌ای، GRN-50102', 'Gate valves, GRN-50102'), 96000, 96000],
              [t('PO-4741', 'PO-4741'), t('فاکتور ضد امولسیون', 'Demulsifier invoice'), 0, 130000],
              [t('PO-4102', 'PO-4102'), t('SES قدیمی، 8 ماه پیش', 'Old SES, 8 months ago'), 75000, 0],
            ],
          },
          hint: t('بستانکار یعنی دریافت بدون فاکتور؛ بدهکار یعنی فاکتور بدون دریافت.', 'Credit means received without an invoice; debit means invoiced without a receipt.'),
          solution: [
            {
              type: 'table',
              head: [t('سفارش', 'PO'), t('معنا', 'Meaning'), t('اقدام', 'Action')],
              rows: [
                [t('PO-4720', 'PO-4720'), t('خدمت تأییدشده، فاکتور نرسیده؛ هزینه و بدهی از قبل ثبت شده', 'Service accepted, invoice not received; cost and liability already booked'), t('هیچ تعهدی؛ منتظر فاکتور', 'No accrual; await the invoice')],
                [t('PO-4733', 'PO-4733'), t('تطبیق‌شده', 'Matched'), t('سیستم تسویه می‌کند', 'The system clears it')],
                [t('PO-4741', 'PO-4741'), t('فاکتور بدون رسید', 'Invoice without receipt'), t('از انبار میدان بپرسید؛ اگر کالا رسیده GRN با تاریخ درست ثبت شود، اگر نه فاکتور مسدود بماند', 'Ask the Field Warehouse; if the goods arrived, post the GRN with the right date, otherwise keep the invoice blocked')],
                [t('PO-4102', 'PO-4102'), t('قلم کهنه، فاکتوری نمی‌آید', 'Stale item, no invoice will come'), t('برگشت با تأیید و بستن سفارش', 'Write back with approval and close the PO')],
              ],
            },
            {
              type: 'steps',
              items: [
                { title: t('جمع بستانکار', 'Total credits'), text: t('214,000 + 96,000 + 75,000 = 385,000', '214,000 + 96,000 + 75,000 = 385,000') },
                { title: t('جمع بدهکار', 'Total debits'), text: t('96,000 + 130,000 = 226,000', '96,000 + 130,000 = 226,000') },
                { title: t('مانده خالص', 'Net balance'), text: t('385,000 منهای 226,000 = 159,000 بستانکار', '385,000 minus 226,000 = 159,000 credit') },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: d(1),
                  lines: [
                    { account: ac.grir, debit: 75000 },
                    { account: ac.opexPrd, credit: 75000 },
                  ],
                  memo: t('برگشت SES کهنه PO-4102 با تأیید مدیر مالی؛ نامه پیمانکار پیوست؛ سفارش بسته شد.', 'Write-back of the stale PO-4102 SES with the finance manager’s approval; contractor’s letter attached; PO closed.'),
                },
              ],
            },
          ],
          answer: t(
            'مانده خالص 159,000 بستانکار؛ هیچ قلمی تعهدی دستی نمی‌خواهد؛ پس از برگشت 75,000، مانده 84,000 بستانکار می‌شود.',
            'Net balance 159,000 credit; no item needs a manual accrual; after the 75,000 write-back the balance is 84,000 credit.',
          ),
        },
        {
          type: 'exercise',
          title: t('ترتیب درست: تسویه، سپس استهلاک ذخایر', 'The right order: settle, then deplete'),
          difficulty: 'medium',
          problem: t(
            'در ماه 3 سال بعد، چاه توسعه‌ای AR-12 تکمیل و آماده بهره‌برداری شده است. با داده‌های زیر (الف) سندهای بستن ماه را به ترتیب درست بنویسید: تسویه چاه، استهلاک ذخایر و استهلاک ماهانه ایستگاه تقویت فشار. (ب) اگر حسابدار تسویه را فراموش کند، استهلاک ذخایر چقدر می‌شود و چقدر کم برآورد می‌شود؟',
            'In month 3 of the next year, development well AR-12 is completed and ready for use. Using the data below, (a) write the month’s close entries in the right order: settling the well, depletion and the compressor station’s monthly depreciation. (b) If the accountant forgets the settlement, what is depletion and by how much is it understated?',
          ),
          given: {
            head: [t('داده', 'Data'), t('مقدار', 'Value')],
            numericCols: [1],
            rows: [
              [t('ارزش دفتری مبنای استهلاک میدان، پیش از تسویه این ماه', 'Net book value of the field’s depletion base before this month’s settlement'), 96000000],
              [t('هزینه چاه AR-12 روی AFE در حساب 1510', 'Cost of well AR-12 on its AFE in account 1510'), 12000000],
              [t('ذخایر ثابت‌شده توسعه‌یافته اول ماه، شامل AR-12 (بشکه)', 'Proved developed reserves at start of month, including AR-12 (barrels)'), 18000000],
              [t('تولید ماه (بشکه)', 'Production in the month (barrels)'), 300000],
              [t('بهای تمام‌شده ایستگاه تقویت فشار، خط مستقیم 15 ساله، بدون ارزش اسقاط', 'Compressor station cost, straight-line over 15 years, no residual value'), 21600000],
            ],
          },
          hint: t('ذخایر AR-12 در مبنا هست؛ پس هزینه‌اش هم باید در مبنا باشد.', 'AR-12’s reserves are in the base, so its cost must be in the base too.'),
          solution: [
            {
              type: 'journal',
              entries: [
                {
                  date: t('1. تسویه', '1. Settlement'),
                  lines: [
                    { account: t('1520 دارایی‌های نفت و گاز (چاه AR-12)', '1520 Oil and gas properties (well AR-12)'), debit: 12000000 },
                    { account: t('1510 دارایی‌های در جریان تکمیل (AFE چاه AR-12)', '1510 Assets under construction (well AR-12 AFE)'), credit: 12000000 },
                  ],
                  memo: t('سند `ST`؛ چاه از دارایی در جریان تکمیل به دارایی نفت و گاز می‌رود.', '`ST` document; the well moves from assets under construction to oil and gas properties.'),
                },
                {
                  date: t('2. استهلاک ذخایر', '2. Depletion'),
                  lines: [
                    { account: ac.depletion, debit: 1800000 },
                    { account: ac.accDepl, credit: 1800000 },
                  ],
                  memo: t('(96,000,000 + 12,000,000) × 300,000 ÷ 18,000,000 = 1,800,000', '(96,000,000 + 12,000,000) × 300,000 ÷ 18,000,000 = 1,800,000'),
                },
                {
                  date: t('2. استهلاک', '2. Depreciation'),
                  lines: [
                    { account: ac.depExp, debit: 120000 },
                    { account: ac.accDep, credit: 120000 },
                  ],
                  memo: t('21,600,000 ÷ 15 ÷ 12 = 120,000', '21,600,000 ÷ 15 ÷ 12 = 120,000'),
                },
              ],
            },
            {
              type: 'steps',
              items: [
                { title: t('بدون تسویه', 'Without the settlement'), text: t('96,000,000 × 300,000 ÷ 18,000,000 = 1,600,000', '96,000,000 × 300,000 ÷ 18,000,000 = 1,600,000') },
                { title: t('کم‌برآوردی', 'Understatement'), text: t('1,800,000 منهای 1,600,000 = 200,000؛ یعنی همان 12,000,000 × 300,000 ÷ 18,000,000. سود این ماه 200,000 بیشتر از واقع نشان داده می‌شود.', '1,800,000 minus 1,600,000 = 200,000, which is 12,000,000 × 300,000 ÷ 18,000,000. This month’s profit would be overstated by 200,000.') },
              ],
            },
          ],
          answer: t(
            'ابتدا تسویه 12,000,000؛ سپس استهلاک ذخایر 1,800,000 و استهلاک 120,000. بدون تسویه، استهلاک ذخایر 1,600,000 و 200,000 کم برآورد می‌شود.',
            'Settle 12,000,000 first; then depletion of 1,800,000 and depreciation of 120,000. Without the settlement, depletion is 1,600,000, understated by 200,000.',
          ),
        },
        {
          type: 'exercise',
          title: t('تسعیر ارز پایان ماه', 'Month-end FX revaluation'),
          difficulty: 'medium',
          problem: t(
            'نرخ پایان ماه 5 هر FC برابر 1.12 است. اقلام ارزی مسار پترولیوم در جدول آمده است. (الف) اثر تسعیر هر قلم و اثر خالص بر سود را حساب کنید. (ب) سندهای اجرای تسعیر را بنویسید. (ج) چرا قطعات یدکی تسعیر نمی‌شوند؟',
            'The closing rate at the end of month 5 is 1.12 per FC. Masar Petroleum’s foreign-currency items are shown below. (a) Compute the revaluation effect of each item and the net effect on profit. (b) Write the revaluation run entries. (c) Why are the spare parts not revalued?',
          ),
          given: {
            head: [t('قلم', 'Item'), t('مبلغ ارزی (FC)', 'FC amount'), t('نرخ ثبت', 'Booked rate')],
            numericCols: [1, 2],
            rows: [
              [t('بدهی به تأمین‌کننده خارجی', 'Payable to a foreign vendor'), 800000, 1.1],
              [t('موجودی حساب بانکی ارزی', 'Foreign-currency bank balance'), 1500000, 1.11],
              [t('طلب از خریدار میعانات', 'Receivable from the condensate buyer'), 400000, 1.15],
              [t('قطعات یدکی خریداری‌شده با ارز (در انبار)', 'Spare parts bought in FC (in stock)'), 300000, 1.1],
            ],
          },
          hint: t('بدهی که بزرگ‌تر شود زیان است؛ دارایی که بزرگ‌تر شود سود.', 'A liability that grows is a loss; an asset that grows is a gain.'),
          solution: [
            {
              type: 'table',
              head: [t('قلم', 'Item'), t('ارزش ثبت‌شده', 'Booked value'), t('ارزش با 1.12', 'Value at 1.12'), t('اثر بر سود', 'Effect on profit')],
              numericCols: [1, 2, 3],
              rows: [
                [t('بدهی ارزی', 'FC payable'), 880000, 896000, -16000],
                [t('بانک ارزی', 'FC bank'), 1665000, 1680000, 15000],
                [t('طلب ارزی', 'FC receivable'), 460000, 448000, -12000],
                [t('**جمع اثر**', '**Total effect**'), blank, blank, -13000],
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: t('پایان ماه 5', 'End of month 5'),
                  lines: [
                    { account: ac.fxLoss, debit: 16000 },
                    { account: ac.ap, credit: 16000 },
                  ],
                },
                {
                  date: t('پایان ماه 5', 'End of month 5'),
                  lines: [
                    { account: ac.fcBank, debit: 15000 },
                    { account: ac.fxGain, credit: 15000 },
                  ],
                },
                {
                  date: t('پایان ماه 5', 'End of month 5'),
                  lines: [
                    { account: ac.fxLoss, debit: 12000 },
                    { account: ac.ar, credit: 12000 },
                  ],
                },
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              text: t(
                'قطعات یدکی **قلم غیرپولی**‌اند: حق دریافت یا تعهد پرداخت مبلغ ثابتی از ارز نیستند. پس با نرخ تاریخ خرید (300,000 × 1.1 = 330,000) می‌مانند و تسعیر نمی‌شوند.',
                'Spare parts are a **non-monetary item**: they are not a right to receive or a duty to pay a fixed amount of currency. So they stay at the purchase-date rate (300,000 × 1.1 = 330,000) and are not revalued.',
              ),
            },
          ],
          answer: t(
            'زیان 16,000، سود 15,000 و زیان 12,000؛ خالص زیان تسعیر 13,000. قطعات یدکی در 330,000 می‌مانند.',
            'A 16,000 loss, a 15,000 gain and a 12,000 loss; a net FX loss of 13,000. The spare parts stay at 330,000.',
          ),
        },
        {
          type: 'exercise',
          title: t('صورت‌حساب شرکا و صورت بازیافت هزینه', 'Partner billing and the cost-recovery statement'),
          difficulty: 'hard',
          problem: t(
            'هزینه‌های حساب مشترک مشارکت آریا در ماه 12 در جدول آمده است. البرز 4,500,000 و دنا 3,400,000 درخواست وجه پرداخته‌اند. (الف) سهم هر شریک، مانده او پس از صورت‌حساب و سند صورت‌حساب شرکا را بدهید. (ب) سهم این ماه در صورت بازیافت هزینه را به تفکیک طبقه حساب کنید. سیاست مسار پترولیوم: تعهدی تا جایگزینی با سند واقعی ادعا نمی‌شود.',
            'The Arya joint account costs for month 12 are shown below. Alborz has paid cash calls of 4,500,000 and Dena 3,400,000. (a) Give each partner’s share, their balance after billing and the JIB entry. (b) Compute this month’s contribution to the cost-recovery statement by category. Masar Petroleum’s policy: accruals are not claimed until replaced by actual documents.',
          ),
          given: {
            head: [t('هزینه', 'Cost'), t('شیء هزینه', 'Cost object'), t('مبلغ', 'Amount'), t('R/N', 'R/N'), t('طبقه', 'Category')],
            numericCols: [2],
            rows: [
              [t('عملیات تولید', 'Production operations'), t('`CC-ARY-PRD`', '`CC-ARY-PRD`'), 6400000, t('R', 'R'), t('عملیاتی', 'Operating')],
              [t('ایستگاه تقویت فشار', 'Compressor station'), t('`CC-ARY-CMP`', '`CC-ARY-CMP`'), 2200000, t('R', 'R'), t('عملیاتی', 'Operating')],
              [t('حفاری توسعه‌ای', 'Development drilling'), t('`AFE-2025-014`', '`AFE-2025-014`'), 7000000, t('R', 'R'), t('توسعه', 'Development')],
              [t('جریمه زیست‌محیطی یک نشت کوچک (طبق JOA هزینه مشترک)', 'Environmental fine for a small spill (a joint cost under the JOA)'), t('`CC-ARY-PRD` (5910)', '`CC-ARY-PRD` (5910)'), 150000, t('N', 'N'), t('عملیاتی', 'Operating')],
              [t('تعهدی تعمیر چاه، SES در راه', 'Workover accrual, SES pending'), t('`CC-ARY-PRD`', '`CC-ARY-PRD`'), 250000, t('R', 'R'), t('عملیاتی', 'Operating')],
              [t('**جمع**', '**Total**'), blank, 16000000, blank, blank],
            ],
          },
          hint: t('تقسیم بین شرکا از JOA می‌آید و شامل جریمه هم می‌شود؛ بازیافت هزینه از قرارداد نفتی می‌آید و جریمه N را کنار می‌گذارد.', 'The partner split comes from the JOA and includes the fine; cost recovery comes from the petroleum contract and leaves out the N fine.'),
          solution: [
            {
              type: 'table',
              head: [t('شریک', 'Partner'), t('سهم از 16,000,000', 'Share of 16,000,000'), t('وجه پرداختی', 'Cash call paid'), t('مانده', 'Balance')],
              numericCols: [1, 2, 3],
              rows: [
                [t('مسار پترولیوم 50٪', 'Masar Petroleum 50%'), 8000000, 8000000, 0],
                [t('البرز 30٪ (بدهکار)', 'Alborz 30% (owes)'), 4800000, 4500000, 300000],
                [t('دنا 20٪ (اضافه‌پرداخت)', 'Dena 20% (overpaid)'), 3200000, 3400000, -200000],
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: d(3),
                  lines: [
                    { account: ac.alborz, debit: 4800000 },
                    { account: ac.dena, debit: 3200000 },
                    { account: ac.jointAccount, credit: 8000000 },
                  ],
                  memo: t('سند صورت‌حساب شرکا، ماه 12.', 'JIB document, month 12.'),
                },
              ],
            },
            {
              type: 'table',
              head: [t('طبقه', 'Category'), t('هزینه قابل بازیافت ادعاشده', 'Recoverable cost claimed'), t('کنار گذاشته', 'Excluded')],
              numericCols: [1, 2],
              rows: [
                [t('عملیاتی: 6,400,000 + 2,200,000', 'Operating: 6,400,000 + 2,200,000'), 8600000, 400000],
                [t('توسعه', 'Development'), 7000000, 0],
                [t('**جمع**', '**Total**'), 15600000, 400000],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: t(
                '400,000 کنار گذاشته شامل جریمه 150,000 (N، هرگز ادعا نمی‌شود) و تعهدی 250,000 است که پس از ثبت SES واقعی در دوره بعد ادعا می‌شود. 15,600,000 + 400,000 = 16,000,000 و صورت با دفتر کل تطبیق دارد.',
                'The 400,000 excluded is the 150,000 fine (N, never claimed) and the 250,000 accrual, which will be claimed once the actual SES is posted in a later period. 15,600,000 + 400,000 = 16,000,000, so the statement reconciles to the ledger.',
              ),
            },
          ],
          answer: t(
            'البرز 300,000 بدهکار و دنا 200,000 اضافه‌پرداخت دارد؛ هزینه قابل بازیافت این ماه 15,600,000 (عملیاتی 8,600,000 و توسعه 7,000,000) و 400,000 کنار گذاشته می‌شود.',
            'Alborz owes 300,000 and Dena has overpaid 200,000; this month’s recoverable cost is 15,600,000 (Operating 8,600,000 and Development 7,000,000), with 400,000 excluded.',
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
            t('بستن دوره با تقویمی از دو روز پیش تا پنج روز پس از پایان ماه اجرا می‌شود و هر کار یک مسئول و یک شاهد دارد.', 'The close runs on a calendar from two days before to five days after month-end, and every task has an owner and evidence.'),
            t('GRN و SES به‌موقع، قطع عملیات را درست می‌کنند؛ مانده بستانکار GR/IR بدهی ثبت‌شده است و فقط خدمات بدون SES تعهدی دستی می‌خواهند.', 'On-time GRNs and SESs make cut-off right; a GR/IR credit is a liability already booked, and only services without an SES need a manual accrual.'),
            t('ترتیب اجراها: هزینه‌های اولیه، تسویه AFE، استهلاک و استهلاک ذخایر، تسویه دستور کار و تخصیص، سپس صورت‌حساب شرکا.', 'Order of runs: primary costs, AFE settlement, depreciation and depletion, work-order settlement and allocations, then partner billing.'),
            t('اقلام پولی ارزی با نرخ پایان دوره تسعیر می‌شوند؛ اقلام غیرپولی نه.', 'Foreign-currency monetary items are revalued at the closing rate; non-monetary items are not.'),
            t('مانده‌های بین شرکتی پیش از تلفیق با هر دو طرف تطبیق و علت هر اختلاف حل می‌شود.', 'Intercompany balances are matched with both sides before consolidation, and the cause of each difference is resolved.'),
            t('بانک، دفترهای معین، حساب‌های معلق و واسط با تهیه‌کننده و بازبین تطبیق داده می‌شوند و هیچ اختلافی با عدد ساختگی پوشانده نمی‌شود.', 'Bank, sub-ledgers, suspense and clearing accounts are reconciled with a preparer and a reviewer, and no difference is covered by a plug.'),
            t('صورت‌حساب شرکا سهم‌ها را طبق JOA می‌سازد و صورت بازیافت هزینه فقط هزینه‌های R مستند را به تفکیک طبقه ادعا می‌کند؛ سپس دوره قفل می‌شود.', 'Partner billing applies the JOA shares and the cost-recovery statement claims only documented R costs by category; then the period is locked.'),
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            { term: t('بستن دوره (Period close)', 'Period close'), def: t('مجموعه کارهای ثبت، برآورد، تطبیق و گزارش که با قفل دوره پایان می‌یابد.', 'The set of recording, estimating, reconciling and reporting tasks that ends with locking the period.') },
            { term: t('تقویم بستن', 'Close calendar'), def: t('برنامه روزبه‌روز کارهای بستن با مسئول هر کار.', 'The day-by-day plan of close tasks with an owner for each.') },
            { term: t('قطع عملیات (Cut-off)', 'Cut-off'), def: t('ثبت هر رویداد در دوره‌ای که رخ داده است.', 'Recording each event in the period in which it happened.') },
            { term: t('اقلام باز GR/IR', 'GR/IR open items'), def: t('سفارش‌هایی که دریافت و فاکتورشان هنوز با هم برابر نشده‌اند.', 'Orders whose receipts and invoices do not yet match.') },
            { term: t('استهلاک ذخایر (Depletion)', 'Depletion'), def: t('هزینه دوره دارایی‌های نفت و گاز به روش واحد تولید.', 'The period charge on oil and gas properties by the units-of-production method.') },
            { term: t('تسویه (Settlement)', 'Settlement'), def: t('انتقال هزینه‌های جمع‌شده روی WBS یا دستور کار به مقصد نهایی، مانند دارایی یا مرکز هزینه.', 'Moving costs collected on a WBS element or work order to their final receiver, such as an asset or cost centre.') },
            { term: t('تسعیر ارز', 'FX revaluation'), def: t('برگرداندن اقلام پولی ارزی به نرخ پایان دوره و ثبت سود یا زیان آن.', 'Restating foreign-currency monetary items at the closing rate and booking the gain or loss.') },
            { term: t('اقلام پولی', 'Monetary items'), def: t('حق دریافت یا تعهد پرداخت مبلغ ثابتی از پول، مانند بانک، طلب و بدهی.', 'Rights to receive or duties to pay a fixed amount of money, such as bank, receivables and payables.') },
            { term: t('حساب معلق و حساب واسط', 'Suspense and clearing accounts'), def: t('حساب‌های موقتی که باید با یافتن مقصد اقلام یا کامل شدن فرایند صفر شوند.', 'Temporary accounts that must return to zero once items are identified or a process is complete.') },
            { term: t('صورت‌حساب سهم شرکا (JIB)', 'Joint interest billing (JIB)'), def: t('محاسبه و صورت‌حساب سهم هر شریک از هزینه‌های حساب مشترک در برابر درخواست وجه.', 'Computing and billing each partner’s share of joint account costs against its cash calls.') },
            { term: t('صورت بازیافت هزینه', 'Cost-recovery statement'), def: t('گزارش هزینه‌های قابل بازیافت مستند، به تفکیک طبقه، طبق قرارداد نفتی.', 'The report of documented recoverable costs, by category, under the petroleum contract.') },
            { term: t('قفل دوره', 'Period lock'), def: t('بستن دوره برای همه کاربران پس از تأیید کنترلر، تا هیچ سندی با تاریخ آن ثبت نشود.', 'Closing the period to all users after the controller’s sign-off, so no document dated in it can be posted.') },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: t(
        'ارزش دفتری مبنای استهلاک یک میدان 60,000,000، ذخایر باقی‌مانده اول ماه 12,000,000 بشکه و تولید ماه 240,000 بشکه است. استهلاک ذخایر ماه چقدر است؟',
        'A field’s depletion base has a net book value of 60,000,000, remaining reserves at the start of the month are 12,000,000 barrels and production is 240,000 barrels. What is the month’s depletion?',
      ),
      options: [t('5', '5'), t('1,200,000', '1,200,000'), t('240,000', '240,000'), t('12,000,000', '12,000,000')],
      answer: 1,
      explain: t(
        '60,000,000 × 240,000 ÷ 12,000,000 = 1,200,000. عدد 5 نرخ هر بشکه است (60,000,000 ÷ 12,000,000)، نه هزینه ماه؛ 240,000 حجم تولید و 12,000,000 ذخایر است.',
        '60,000,000 × 240,000 ÷ 12,000,000 = 1,200,000. The figure 5 is the rate per barrel (60,000,000 ÷ 12,000,000), not the month’s charge; 240,000 is the production volume and 12,000,000 the reserves.',
      ),
    },
    {
      q: t('در پایان ماه یک سطر SES در GR/IR مانده بستانکار دارد. این یعنی چه؟', 'At month-end an SES line in GR/IR shows a credit balance. What does that mean?'),
      options: [
        t('فاکتور رسیده ولی خدمت هنوز تأیید نشده است', 'The invoice has arrived but the service is not yet accepted'),
        t('باید برای آن تعهدی دستی ثبت شود', 'A manual accrual must be posted for it'),
        t('خطاست؛ GR/IR در پایان ماه باید صفر باشد', 'It is an error; GR/IR must be zero at month-end'),
        t('خدمت تأیید شده و فاکتور نرسیده؛ بدهی از قبل ثبت شده و تعهدی بیشتری لازم نیست', 'The service was accepted and no invoice has come; the liability is already booked and no further accrual is needed'),
      ],
      answer: 3,
      explain: t(
        'تأیید SES هزینه را بدهکار و GR/IR را بستانکار کرده است؛ پس هزینه و بدهی در دفاتر هست. تعهدی دستی آن را دو بار می‌شمارد. GR/IR در پایان ماه معمولاً صفر نیست، چون همیشه کالا و خدماتی در انتظار فاکتورند.',
        'The SES acceptance debited the cost and credited GR/IR, so the cost and the liability are already in the books. A manual accrual would count it twice. GR/IR is not normally zero at month-end, because some goods and services are always waiting for invoices.',
      ),
    },
    {
      q: t(
        'بدهی 1,000,000 FC به تأمین‌کننده خارجی با نرخ 1.10 ثبت شده و نرخ پایان دوره 1.13 است. اثر تسعیر چیست؟',
        'A payable of 1,000,000 FC to a foreign vendor was booked at 1.10 and the closing rate is 1.13. What is the revaluation effect?',
      ),
      options: [t('زیان 30,000', 'A loss of 30,000'), t('سود 30,000', 'A gain of 30,000'), t('زیان 1,130,000', 'A loss of 1,130,000'), t('تا پرداخت اثری ندارد', 'No effect until it is paid')],
      answer: 0,
      explain: t(
        'بدهی از 1,100,000 به 1,130,000 می‌رسد: 30,000 بیشتر باید پرداخت شود، پس زیان است. «سود» جهت را برعکس گرفته، 1,130,000 کل بدهی است نه تفاوت، و IAS 21 تسعیر اقلام پولی را در پایان هر دوره می‌خواهد، نه فقط هنگام پرداخت.',
        'The liability grows from 1,100,000 to 1,130,000: 30,000 more must be paid, so it is a loss. "Gain" reverses the direction, 1,130,000 is the whole liability rather than the difference, and IAS 21 requires monetary items to be revalued at every period-end, not only on payment.',
      ),
    },
    {
      q: t('کدام قلم در پایان دوره با نرخ پایان دوره تسعیر **نمی‌شود**؟', 'Which item is **not** revalued at the closing rate at period-end?'),
      options: [
        t('موجودی حساب بانکی ارزی', 'A foreign-currency bank balance'),
        t('بدهی ارزی به تأمین‌کننده', 'A foreign-currency payable to a vendor'),
        t('قطعات یدکی در انبار که با ارز خریده شده‌اند', 'Spare parts in stock bought in foreign currency'),
        t('وام ارزی از بانک', 'A foreign-currency bank loan'),
      ],
      answer: 2,
      explain: t(
        'قطعات یدکی قلم غیرپولی‌اند و با نرخ تاریخ خرید می‌مانند. بانک، بدهی و وام ارزی اقلام پولی‌اند (حق دریافت یا تعهد پرداخت مبلغ ثابتی از ارز) و تسعیر می‌شوند.',
        'Spare parts are a non-monetary item and stay at the purchase-date rate. The bank balance, payable and loan are monetary items (a right to receive or duty to pay a fixed amount of currency) and are revalued.',
      ),
    },
    {
      q: t(
        'هزینه حساب مشترک ماه 12,000,000 است و نفت دنا (20 درصد) 2,600,000 درخواست وجه پرداخته است. مانده دنا پس از صورت‌حساب چیست؟',
        'Joint account costs for the month are 12,000,000 and Dena Petroleum (20 percent) has paid cash calls of 2,600,000. What is Dena’s balance after billing?',
      ),
      options: [t('200,000 بدهکار است', 'Owes 200,000'), t('2,400,000 بدهکار است', 'Owes 2,400,000'), t('2,600,000 اضافه پرداخته', 'Overpaid 2,600,000'), t('200,000 اضافه پرداخته', 'Overpaid 200,000')],
      answer: 3,
      explain: t(
        'سهم دنا 20٪ × 12,000,000 = 2,400,000 است و 2,600,000 پرداخته؛ پس 200,000 اضافه پرداخته که از درخواست وجه بعدی کم می‌شود. 2,400,000 سهم کل اوست، نه مانده، و «بدهکار 200,000» جهت را برعکس گرفته است.',
        'Dena’s share is 20% × 12,000,000 = 2,400,000 and it paid 2,600,000, so it has overpaid 200,000, deducted from the next cash call. 2,400,000 is its whole share, not the balance, and "owes 200,000" reverses the direction.',
      ),
    },
    {
      q: t('چرا AFE تکمیل‌شده باید پیش از اجرای استهلاک ذخایر تسویه شود؟', 'Why must a completed AFE be settled before the depletion run?'),
      options: [
        t('تا هزینه چاه تازه همین ماه در مبنای استهلاک ذخایر باشد', 'So the new well’s cost is in the depletion base this month'),
        t('چون تسویه داده‌های تولید را می‌سازد', 'Because settlement creates the production data'),
        t('چون اجرای استهلاک حساب 1510 را پاک می‌کند', 'Because the depletion run wipes out account 1510'),
        t('چون شرکا فقط هزینه تسویه‌شده را می‌پردازند', 'Because partners only pay settled costs'),
      ],
      answer: 0,
      explain: t(
        'ذخایر چاه تازه در مخرج کسر است؛ اگر هزینه‌اش هنوز در 1510 باشد، صورت کسر کوچک‌تر و استهلاک ذخایر کم برآورد می‌شود. تولید از گزارش تولید می‌آید، نه از تسویه، و شرکا هزینه‌های حساب مشترک را چه تسویه شده باشند چه نه می‌پردازند.',
        'The new well’s reserves are in the denominator; if its cost is still in 1510, the numerator is too small and depletion is understated. Production comes from the production report, not settlement, and partners pay joint account costs whether settled or not.',
      ),
    },
    {
      q: t('با حساب معلق در پایان ماه چه باید کرد؟', 'What should be done with the suspense account at month-end?'),
      options: [
        t('اقلام را تا پایان سال نگه دارید', 'Keep the items until year-end'),
        t('آن را با GR/IR خالص کنید', 'Net it against GR/IR'),
        t('هر قلم را به حساب درست ببرید یا با سن و توضیح نگه دارید؛ هیچ قلمی بیش از حد مجاز نماند', 'Clear each item to its proper account or keep it with an age and explanation; no item stays beyond the policy limit'),
        t('مانده را خودکار به هزینه ببرید', 'Expense the balance automatically'),
      ],
      answer: 2,
      explain: t(
        'حساب معلق جای موقت است و باید با یافتن مقصد هر قلم پاک شود. نگه داشتن تا پایان سال خطا را پنهان می‌کند، خالص کردن با GR/IR دو حساب بی‌ربط را قاطی می‌کند و هزینه کردن خودکار ممکن است هزینه را روی شیء و طبقه غلط ببرد یا درآمدی را پنهان کند.',
        'Suspense is a temporary home and must be cleared as each item is identified. Holding items until year-end hides errors, netting with GR/IR mixes two unrelated accounts, and automatic expensing may put cost on the wrong object and category or hide income.',
      ),
    },
    {
      q: t(
        'مانده صورت‌حساب بانک 5,000,000، واریزهای در راه 300,000 و پرداخت‌های وصول‌نشده 450,000 است. مانده اصلاح‌شده بانک چقدر است؟',
        'The bank statement balance is 5,000,000, deposits in transit are 300,000 and uncleared payments are 450,000. What is the adjusted bank balance?',
      ),
      options: [t('5,150,000', '5,150,000'), t('4,850,000', '4,850,000'), t('5,750,000', '5,750,000'), t('4,250,000', '4,250,000')],
      answer: 1,
      explain: t(
        '5,000,000 + 300,000 منهای 450,000 = 4,850,000. واریز در راه هنوز به بانک نرسیده و اضافه می‌شود؛ پرداخت وصول‌نشده هنوز از بانک کم نشده و کسر می‌شود. 5,150,000 علامت‌ها را برعکس کرده و 5,750,000 هر دو را اضافه کرده است.',
        '5,000,000 + 300,000 minus 450,000 = 4,850,000. A deposit in transit has not reached the bank yet, so it is added; an uncleared payment has not left the bank yet, so it is deducted. 5,150,000 swaps the signs and 5,750,000 adds both.',
      ),
    },
    {
      q: t(
        'شرکت خدمات حفاری مسار روز آخر ماه فاکتوری به مسار پترولیوم داده که در دفاتر خریدار ثبت نشده است. راه درست چیست؟',
        'Masar Drilling Services issued an invoice to Masar Petroleum on the last day of the month, and the buyer has not posted it. What is the right approach?',
      ),
      options: [
        t('خریدار SES و فاکتور را در همین دوره ثبت کند (یا تعهدی بزند)؛ رقم فروشنده ملاک است', 'The buyer posts the SES and invoice in this period (or accrues); the seller’s figure leads'),
        t('فروشنده فاکتورش را برگشت بزند', 'The seller reverses its invoice'),
        t('رها شود، چون در تلفیق حذف می‌شود', 'Leave it, because it is eliminated on consolidation'),
        t('اختلاف به حساب معلق برود', 'Post the difference to suspense'),
      ],
      answer: 0,
      explain: t(
        'خدمت در این ماه انجام شده و هزینه خریدار باید در همین ماه باشد. حذف در تلفیق فقط وقتی کار می‌کند که دو طرف یک عدد داشته باشند؛ با اختلاف، تلفیق ناتراز می‌شود. برگشت فاکتور درست فروشنده یا بردن اختلاف به حساب معلق فقط مشکل را پنهان می‌کند.',
        'The service was performed this month and the buyer’s cost belongs in this month. Elimination only works when both sides show the same number; with a difference, consolidation does not balance. Reversing the seller’s correct invoice or parking the difference in suspense only hides the problem.',
      ),
    },
    {
      q: t('صورت بازیافت هزینه چه چیزی را شامل می‌شود؟', 'What does the cost-recovery statement include?'),
      options: [
        t('همه هزینه‌های دفتر کل، از جمله اقلام N', 'All ledger costs, including N items'),
        t('ارقام بودجه فصل', 'The quarter’s budget figures'),
        t('تعهدی‌ها با مبلغ برآوردی، بدون نیاز به مدرک', 'Accruals at their estimated amount, with no evidence needed'),
        t('فقط هزینه‌های R مستند، به تفکیک طبقه و تطبیق‌شده با دفتر کل', 'Only documented R costs, by category, reconciled to the ledger'),
      ],
      answer: 3,
      explain: t(
        'قرارداد نفتی فقط هزینه‌های قابل بازیافت واقعی و مستند را می‌پذیرد و صورت باید با دفتر کل بخواند. اقلام N هرگز ادعا نمی‌شوند، بودجه هزینه واقعی نیست و تعهدی بدون مدرک در حسابرسی طرف دولتی رد می‌شود.',
        'The petroleum contract accepts only actual, documented recoverable costs, and the statement must agree with the ledger. N items are never claimed, a budget is not an actual cost, and an accrual without evidence is rejected in the government-side audit.',
      ),
    },
  ],
}
