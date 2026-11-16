import type { Lesson } from '../../types'

/*
 * Running example: Masar Petroleum, Arya field compressor station.
 * Scenario: K-102 trips on high vibration; notification NT-80412, work order WO-60518.
 * Mechanical crew work centre, cost centre CC-3900, rate 200 per hour (derived in this lesson).
 * Joint venture: in this lesson the non-operating partner holds 40% (illustrative).
 * VAT: assumed 10% for illustration only.
 */
const wo = (n: string) => ({
  mat: { fa: `هزینه قطعات و مواد نگهداری (${n})`, en: `Maintenance materials expense (${n})` },
  svc: { fa: `هزینه خدمات پیمانکاران (${n})`, en: `Contractor services expense (${n})` },
  lab: { fa: `هزینه دستمزد داخلی نگهداری (${n})`, en: `Internal maintenance labour (${n})` },
})
const ac = {
  invField: { fa: 'موجودی قطعات یدکی: انبار میدان', en: 'Inventory: spare parts, Field Warehouse' },
  invCentral: { fa: 'موجودی قطعات یدکی: انبار مرکزی', en: 'Inventory: spare parts, Central Warehouse' },
  inventory: { fa: 'موجودی قطعات یدکی', en: 'Inventory: spare parts' },
  grir: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing account' },
  ap: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
  vat: { fa: 'مالیات بر ارزش افزوده خرید (اعتبار مالیاتی)', en: 'Input VAT receivable' },
  bank: { fa: 'موجودی نقد (بانک)', en: 'Cash at bank' },
  labourMech: { fa: 'دستمزد تخصیص‌یافته: گروه مکانیک (CC-3900)', en: 'Labour cost allocated: mechanical crew (CC-3900)' },
  labourInst: { fa: 'دستمزد تخصیص‌یافته: گروه ابزار دقیق (CC-3910)', en: 'Labour cost allocated: instrument crew (CC-3910)' },
  partnerAr: { fa: 'حساب دریافتنی از شریک مشارکت', en: 'Receivable from JV partner' },
  recharge: { fa: 'هزینه نگهداری قابل مطالبه از شرکا (کاهنده هزینه)', en: 'Maintenance costs recharged to partners (contra expense)' },
  auc: { fa: 'دارایی در جریان تکمیل', en: 'Assets under construction' },
  capitalisedMaint: { fa: 'هزینه نگهداری منتقل‌شده به دارایی (کاهنده هزینه)', en: 'Maintenance costs capitalised (contra expense)' },
}
const w1 = wo('WO-60518')
const w2 = wo('WO-61022')
const w3 = wo('WO-61307')

export const lesson: Lesson = {
  slug: 'eam-erp-integration',
  number: 8,
  level: 'advanced',
  minutes: 38,
  icon: 'Library',
  tone: 'primary',
  title: { fa: 'یکپارچگی نگهداری با ERP: از خرابی تا تسویه', en: 'EAM and ERP Integration: From Failure to Settlement' },
  summary: {
    fa: 'یک خرابی واقعی در ایستگاه تقویت فشار را از اعلان تا تسویه، صورت‌حساب شرکا و بازیافت هزینه دنبال کنید: هر سند، هر ثبت مالی، نرخ دستمزد از منابع انسانی، کنترل‌ها و ردپای حسابرسی که هزینه را در برابر شریک و کارفرمای قرارداد نفتی قابل دفاع می‌کند.',
    en: 'Follow a real failure at the compressor station from notification to settlement, partner billing and cost recovery: every document, every Finance posting, labour rates from HR, the controls and the audit trail that make the cost defensible to partners and to the petroleum contract’s counterparty.',
  },
  objectives: [
    {
      fa: 'نقاط اتصال نگهداری با انبار، خرید، پروژه‌ها، مالی و منابع انسانی را نام ببرید',
      en: 'Name the integration points between maintenance and inventory, procurement, projects, Finance and HR',
    },
    {
      fa: 'نرخ ساعتی دستمزد یک مرکز کار را از داده منابع انسانی حساب کنید و جذب کمتر یا بیشتر را تفسیر کنید',
      en: 'Compute a work centre’s hourly labour rate from HR data and interpret under- or over-absorption',
    },
    {
      fa: 'همه اسناد و ثبت‌های خودکار مالی یک دستور کار را از خرابی تا پرداخت بنویسید',
      en: 'Write every document and automatic Finance posting of a work order from failure to payment',
    },
    {
      fa: 'تسویه، صورت‌حساب سهم شرکا و ثبت در دفتر بازیافت هزینه را توضیح دهید',
      en: 'Explain settlement, joint-venture partner billing and recording in the cost-recovery register',
    },
    {
      fa: 'کنترل‌های کلیدی و ردپای حسابرسی را طراحی و ارزیابی کنید',
      en: 'Design and assess the key controls and the audit trail',
    },
  ],
  sections: [
    {
      id: 'why-integration',
      title: { fa: 'چرا یکپارچگی مهم است؟', en: 'Why Integration Matters' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'شش ماه پس از تعمیر کمپرسور K-102، حسابرس شریک غیرعامل مشارکت می‌پرسد: «40٪ از 374,000 هزینه تعمیر K-102 را به ما صورت‌حساب کرده‌اید؛ نشان دهید این عدد از کجا آمده است.» اگر نگهداری، انبار، خرید و مالی هر کدام سامانه و فایل جدا داشته باشند، پاسخ هفته‌ها جست‌وجو در کاغذ و اکسل است. در یک ERP یکپارچه، دستور کار را باز می‌کنید و **جریان اسناد (Document Flow)** همه اسناد، ثبت‌ها و تأییدها را در چند دقیقه نشان می‌دهد.',
            en: 'Six months after the K-102 compressor repair, the non-operating partner’s auditor asks: “You billed us 40% of 374,000 for the K-102 repair; show us how that number was built.” If maintenance, inventory, procurement and Finance each run separate systems and spreadsheets, the answer takes weeks of digging through paper and Excel. In an integrated ERP you open the work order and its **document flow** shows every document, posting and approval in minutes.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**مدیریت دارایی سازمانی (EAM)** همان ماژول نگهداری است. یکپارچگی یعنی هر رویداد فقط یک‌بار و در ماژولی ثبت شود که در آن رخ می‌دهد (حواله در انبار، صورت‌وضعیت در خرید، ساعت کار در نگهداری) و بقیه ماژول‌ها و دفتر کل خودکار به‌روز شوند: **یک‌بار ثبت، چندبار استفاده**.',
            en: '**Enterprise asset management (EAM)** is the maintenance module. Integration means each event is entered once, in the module where it happens (a goods issue in inventory, an SES in procurement, hours in maintenance), and the other modules and the general ledger update automatically: **enter once, use many times**.',
          },
        },
        {
          type: 'diagram',
          id: 'erp-modules',
          caption: {
            fa: 'نقشه ماژول‌های ERP (مالی، انبار، خرید، مدیریت دارایی، پروژه‌ها، منابع انسانی) و جریان‌های یکپارچگی میان آن‌ها.',
            en: 'The ERP module map (Finance, Inventory, Procurement, Asset Management, Projects, HR) and the integration flows between them.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'سهم هر ماژول در یک کار نگهداری', en: 'What each module contributes to a maintenance job' },
          head: [
            { fa: 'ماژول', en: 'Module' },
            { fa: 'چه می‌دهد', en: 'What it provides' },
            { fa: 'اثر در مالی', en: 'Finance effect' },
          ],
          rows: [
            [
              { fa: 'مدیریت دارایی (نگهداری)', en: 'Asset management (maintenance)' },
              { fa: 'اعلان، دستور کار، تأیید ساعات، کدهای خرابی، تسویه', en: 'Notifications, work orders, time confirmations, failure codes, settlement' },
              { fa: 'دستمزد روی دستور کار؛ تسویه به AUC', en: 'Labour on the work order; settlement to AUC' },
            ],
            [
              { fa: 'انبار', en: 'Inventory' },
              { fa: 'رزرو، حواله، مرجوعی، انتقال', en: 'Reservations, goods issues, returns, transfers' },
              { fa: 'بدهکار دستور کار / بستانکار موجودی', en: 'Dr work order / Cr inventory' },
            ],
            [
              { fa: 'خرید', en: 'Procurement' },
              { fa: 'درخواست، سفارش، رسید کالا، SES، تطبیق فاکتور', en: 'Requisitions, POs, goods receipts, SES, invoice matching' },
              { fa: 'رسید و SES: بدهکار دستور کار / بستانکار GR/IR', en: 'Receipt and SES: Dr work order / Cr GR/IR' },
            ],
            [
              { fa: 'پروژه‌ها', en: 'Projects' },
              { fa: 'AFE، پروژه، دستور کار سرمایه‌ای', en: 'AFEs, projects, capital work orders' },
              { fa: 'AUC و سرمایه‌ای کردن', en: 'AUC and capitalisation' },
            ],
            [
              { fa: 'منابع انسانی', en: 'HR' },
              { fa: 'کارکنان، صلاحیت‌ها، کارکرد، هزینه حقوق', en: 'Employees, qualifications, attendance, payroll cost' },
              { fa: 'هزینه حقوق در مرکز هزینه گروه؛ پایه نرخ دستمزد', en: 'Payroll cost in the crew cost centre; basis of labour rates' },
            ],
            [
              { fa: 'مالی', en: 'Finance' },
              { fa: 'دفتر کل، مراکز هزینه، پرداختنی‌ها، دارایی‌ها، صورت‌حساب شرکا، بازیافت هزینه', en: 'GL, cost centres, payables, assets, partner billing, cost recovery' },
              { fa: 'خود دفاتر', en: 'The books themselves' },
            ],
          ],
        },
      ],
    },
    {
      id: 'integration-map',
      title: { fa: 'نقاط اتصال و نرخ دستمزد', en: 'Integration Points and Labour Rates' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در ERP کاربر حساب انتخاب نمی‌کند؛ **رویداد** را انتخاب می‌کند. سیستم حساب‌های دفتر کل را از داده پایه پیدا می‌کند: گروه ارزش‌گذاری کالا، نوع حرکت انبار، موضوع هزینه سفارش خرید و قاعده تسویه. به این «تعیین خودکار حساب» می‌گویند و یک‌بار، با همکاری مالی و نگهداری تنظیم می‌شود.',
            en: 'In the ERP the user does not pick accounts; they pick the **business event**. The system finds the GL accounts from master data: the material’s valuation class, the stock movement type, the PO’s account assignment and the settlement rule. This is “automatic account determination”, configured once by Finance and maintenance together.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'تعیین خودکار حساب برای رویدادهای نگهداری', en: 'Automatic account determination for maintenance events' },
          head: [
            { fa: 'رویداد', en: 'Event' },
            { fa: 'از روی چه تعیین می‌شود', en: 'Determined by' },
            { fa: 'بدهکار', en: 'Debit' },
            { fa: 'بستانکار', en: 'Credit' },
          ],
          rows: [
            [
              { fa: 'حواله قطعه به دستور کار', en: 'Spare part issued to a work order' },
              { fa: 'گروه ارزش‌گذاری «قطعات یدکی» و حرکت «حواله به سفارش»', en: 'Valuation class “spare parts” and movement “issue to order”' },
              { fa: 'هزینه قطعات (دستور کار)', en: 'Maintenance materials (work order)' },
              { fa: 'موجودی قطعات یدکی', en: 'Inventory: spare parts' },
            ],
            [
              { fa: 'تأیید SES خدمات نگهداری', en: 'SES approved for a maintenance service' },
              { fa: 'موضوع هزینه سفارش = دستور کار؛ گروه خدمت', en: 'PO account assignment = work order; service category' },
              { fa: 'هزینه خدمات پیمانکار (دستور کار)', en: 'Contractor services (work order)' },
              { fa: 'GR/IR', en: 'GR/IR' },
            ],
            [
              { fa: 'تأیید ساعات کار', en: 'Time confirmation' },
              { fa: 'مرکز کار، نوع فعالیت و نرخ', en: 'Work centre, activity type and rate' },
              { fa: 'دستمزد داخلی (دستور کار)', en: 'Internal labour (work order)' },
              { fa: 'دستمزد تخصیص‌یافته (مرکز هزینه گروه)', en: 'Labour cost allocated (crew cost centre)' },
            ],
            [
              { fa: 'تسویه دستور کار تعمیری', en: 'Settlement of a repair work order' },
              { fa: 'قاعده تسویه: مرکز هزینه', en: 'Settlement rule: cost centre' },
              { fa: 'مرکز هزینه (فقط حسابداری مدیریت)', en: 'Cost centre (management accounting only)' },
              { fa: 'دستور کار', en: 'Work order' },
            ],
            [
              { fa: 'تسویه دستور کار سرمایه‌ای', en: 'Settlement of a capital work order' },
              { fa: 'قاعده تسویه: دارایی در جریان تکمیل', en: 'Settlement rule: asset under construction' },
              { fa: 'دارایی در جریان تکمیل', en: 'Assets under construction' },
              { fa: 'هزینه نگهداری منتقل‌شده به دارایی', en: 'Maintenance costs capitalised' },
            ],
          ],
        },
        {
          type: 'h',
          text: { fa: 'نرخ دستمزد از منابع انسانی', en: 'Labour rates from HR' },
        },
        {
          type: 'p',
          text: {
            fa: 'حقوق، بیمه سهم کارفرما، اضافه‌کاری و فوق‌العاده‌های کار در میدان در سیستم حقوق و دستمزد (منابع انسانی) محاسبه و هزینه واقعی‌اش به مرکز هزینه گروه (مثلاً CC-3900 گروه مکانیک) ثبت می‌شود. مالی و نگهداری از این هزینه یک **نرخ ساعتی** برای مرکز کار می‌سازند. هر تأیید ساعت کار، ساعت × نرخ را به دستور کار می‌برد و مرکز هزینه گروه را بستانکار می‌کند. صلاحیت‌های کارکنان (مثلاً گواهی کار روی توربین گازی) هم از منابع انسانی هنگام زمان‌بندی کنترل می‌شود.',
            en: 'Salaries, the employer’s insurance share, overtime and field allowances are calculated in payroll (HR), and their actual cost is posted to the crew’s cost centre (e.g. CC-3900, mechanical crew). Finance and maintenance turn that cost into an **hourly rate** for the work centre. Each time confirmation charges hours × rate to the work order and credits the crew cost centre. Staff qualifications (e.g. gas-turbine certification) also come from HR and are checked at scheduling.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'نرخ دستمزد = (هزینه سالانه کارکنان گروه + سربار گروه) ÷ ساعت‌های مفید برنامه‌ریزی‌شده',
            en: 'Labour rate = (annual crew personnel cost + crew overheads) ÷ planned productive hours',
          },
          note: {
            fa: 'گروه مکانیک CC-3900: هزینه کارکنان 2,520,000 + سربار (ابزار، خودرو، آموزش) 360,000 = 2,880,000؛ ساعت مفید 8 تکنسین × 1,800 = 14,400؛ نرخ = 2,880,000 ÷ 14,400 = 200 در ساعت.',
            en: 'Mechanical crew CC-3900: personnel cost 2,520,000 + overheads (tools, vehicles, training) 360,000 = 2,880,000; productive hours 8 technicians × 1,800 = 14,400; rate = 2,880,000 ÷ 14,400 = 200 per hour.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'جذب کمتر از هزینه واقعی', en: 'Under-absorption' },
          text: {
            fa: 'در پایان سال، هزینه واقعی CC-3900 برابر 2,950,000 است و ساعت‌های تأییدشده روی دستورهای کار 14,200 × 200 = 2,840,000 را جذب کرده‌اند. 110,000 «جذب‌نشده» در مرکز هزینه گروه مانده است. علت را بررسی کنید (اضافه‌کاری بیشتر، ساعت ثبت‌نشده، آموزش بیشتر) و یا آن را به گیرندگان تخصیص دهید یا نرخ سال بعد را اصلاح کنید.',
            en: 'At year-end, CC-3900’s actual cost is 2,950,000 and the hours confirmed on work orders absorbed 14,200 × 200 = 2,840,000. 110,000 remains “unabsorbed” in the crew cost centre. Investigate why (more overtime, unrecorded hours, more training), then either allocate it to receivers or correct next year’s rate.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در ایران هزینه کارکنان گروه شامل حقوق، سهم کارفرما از بیمه تأمین اجتماعی، اضافه‌کاری و فوق‌العاده‌های کار در مناطق عملیاتی است. این ارقام با تصمیم‌های سالانه دستمزد تغییر می‌کنند؛ پس نرخ ساعتی را دست‌کم سالی یک‌بار دوباره حساب کنید و سهم‌های بیمه را از مقررات جاری بردارید.',
            en: 'In Iran, a crew’s personnel cost includes salaries, the employer’s social security insurance share, overtime and allowances for work in operational areas. These change with the annual wage decisions, so recompute the hourly rate at least once a year and take the insurance shares from current regulations.',
          },
        },
      ],
    },
    {
      id: 'scenario-failure',
      title: { fa: 'سناریو، بخش 1: از خرابی تا کار آماده', en: 'The Scenario, Part 1: From Failure to a Ready Job' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'روز 1، ساعت 3:40 بامداد: کمپرسور K-102 با ارتعاش زیاد از مدار خارج می‌شود. K-101 بار را با ظرفیت کمتر برمی‌دارد. اپراتور اعلان `NT-80412` را با حالت خرابی `VIB`، نشان «توقف» و زمان شروع خرابی ثبت می‌کند و سرپرست شیفت اولویت P2 را تأیید می‌کند.',
            en: 'Day 1, 3:40 a.m.: compressor K-102 trips on high vibration. K-101 picks up the load at reduced capacity. The operator raises notification `NT-80412` with failure mode `VIB`, the “breakdown” flag and the failure start time, and the shift supervisor confirms priority P2.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'دستور کار', en: 'Work order' },
              text: {
                fa: 'برنامه‌ریز `WO-60518` را از روی اعلان می‌سازد: نوع «تعمیر اصلاحی»، محل عملیاتی `AR-CS-K102`، مرکز هزینه CC-3100 و قاعده تسویه به همان مرکز هزینه.',
                en: 'The planner creates `WO-60518` from the notification: type “corrective repair”, functional location `AR-CS-K102`, cost centre CC-3100 and a settlement rule to that cost centre.',
              },
            },
            {
              title: { fa: 'عملیات و قطعات', en: 'Operations and components' },
              text: {
                fa: 'باز کردن، بازرسی، تعویض یاتاقان و آب‌بند گاز خشک، کوپلینگ جدید، هم‌محوری و آزمون کارکرد؛ قطعات و خدمات در جدول پایین آمده‌اند.',
                en: 'Dismantle, inspect, replace the bearing and the dry gas seal, fit a new coupling, align and test-run; parts and services are in the table below.',
              },
            },
            {
              title: { fa: 'برآورد و تأیید', en: 'Estimate and approval' },
              text: {
                fa: 'برآورد 390,000 (شامل 16,000 احتیاط). چون از 250,000 بیشتر است، گردش کار آن را برای مدیر نگهداری می‌فرستد (سقف نمونه).',
                en: 'Estimate 390,000 (including 16,000 contingency). Because it exceeds 250,000, the workflow routes it to the maintenance manager (illustrative limit).',
              },
            },
            {
              title: { fa: 'کنترل موجودی و اسناد پشتیبان', en: 'Availability and follow-on documents' },
              text: {
                fa: 'آزادسازی دستور کار رزروها، درخواست انتقال، درخواست خرید کوپلینگ و سفارش خدمت مهندس سازنده را خودکار می‌سازد.',
                en: 'Releasing the work order automatically creates the reservations, the transfer request, the coupling requisition and the OEM engineer’s service order.',
              },
            },
            {
              title: { fa: 'مجوز کار', en: 'Permit to work' },
              text: {
                fa: 'ایزوله‌سازی گاز، تخلیه فشار و پاک‌سازی با گاز بی‌اثر انجام و مجوز کار صادر می‌شود.',
                en: 'Gas isolation, depressurising and inert-gas purging are done and the permit to work is issued.',
              },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'برنامه قطعات، خدمات و نیروی WO-60518', en: 'WO-60518 plan for parts, services and labour' },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'نوع و محل', en: 'Type and source' },
            { fa: 'مقدار × نرخ', en: 'Qty × rate' },
            { fa: 'مبلغ', en: 'Amount' },
            { fa: 'اقدام ERP', en: 'ERP action' },
          ],
          rows: [
            [{ fa: 'ست یاتاقان', en: 'Journal bearing set' }, { fa: 'انباری، انبار میدان', en: 'Stock, Field Warehouse' }, { fa: '1 × 46,000', en: '1 × 46,000' }, 46000, { fa: 'رزرو', en: 'Reservation' }],
            [{ fa: 'کارتریج آب‌بند گاز خشک', en: 'Dry gas seal cartridge' }, { fa: 'حیاتی، انبار مرکزی', en: 'Critical, Central Warehouse' }, { fa: '1 × 210,000', en: '1 × 210,000' }, 210000, { fa: 'انتقال و رزرو', en: 'Transfer and reservation' }],
            [{ fa: 'کوپلینگ انعطاف‌پذیر', en: 'Flexible coupling' }, { fa: 'غیرانباری', en: 'Non-stock' }, { fa: '1 × 18,000', en: '1 × 18,000' }, 18000, { fa: 'درخواست خرید و سفارش `PO-45120`', en: 'Requisition and PO `PO-45120`' }],
            [{ fa: 'مهندس سرویس سازنده (OEM)', en: 'OEM field service engineer' }, { fa: 'خدمت، قرارداد چارچوبی', en: 'Service, framework contract' }, { fa: '4 روز × 22,000', en: '4 days × 22,000' }, 88000, { fa: 'سفارش خدمت `PO-45121`', en: 'Service call-off `PO-45121`' }],
            [{ fa: 'گروه مکانیک', en: 'Mechanical crew' }, { fa: 'دستمزد داخلی، CC-3900', en: 'Internal labour, CC-3900' }, { fa: '60 ساعت × 200', en: '60 hours × 200' }, 12000, { fa: 'برنامه روی مرکز کار', en: 'Planned on the work centre' }],
            [{ fa: 'جمع بدون احتیاط', en: 'Total before contingency' }, { fa: '', en: '' }, { fa: '', en: '' }, 374000, { fa: '', en: '' }],
          ],
          numericCols: [3],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'سقف اختیارات و تعهد بودجه', en: 'Delegation of authority and budget commitment' },
          text: {
            fa: 'در این مثال: برآورد تا 50,000 با سرپرست، تا 250,000 با رئیس نگهداری، بیش از آن با مدیر نگهداری و بیش از 1,000,000 با مدیر عملیات تأیید می‌شود (سقف‌ها نمونه‌اند). سفارش‌های خرید هنوز ثبت مالی نمی‌سازند، اما **تعهد** بودجه مرکز هزینه را کم می‌کنند؛ پس مدیر همان روز می‌بیند چقدر از بودجه ماه «قول داده شده» است.',
            en: 'In this example: estimates up to 50,000 are approved by the supervisor, up to 250,000 by the maintenance superintendent, above that by the maintenance manager and above 1,000,000 by the operations director (illustrative limits). Purchase orders create no Finance posting yet, but they reduce the cost centre budget as **commitments**, so the manager sees the same day how much of the month’s budget is already “promised”.',
          },
        },
      ],
    },
    {
      id: 'scenario-execution',
      title: { fa: 'بخش 2: اجرا، همه اسناد و ثبت‌ها', en: 'Part 2: Execution, Every Document and Posting' },
      blocks: [
        {
          type: 'table',
          caption: { fa: 'جریان اسناد WO-60518', en: 'WO-60518 document flow' },
          head: [
            { fa: 'زمان', en: 'When' },
            { fa: 'سند', en: 'Document' },
            { fa: 'ماژول', en: 'Module' },
            { fa: 'چه کسی', en: 'Who' },
            { fa: 'اثر مالی', en: 'Finance effect' },
          ],
          rows: [
            [{ fa: 'روز 1', en: 'Day 1' }, { fa: 'اعلان NT-80412', en: 'Notification NT-80412' }, { fa: 'نگهداری', en: 'Maintenance' }, { fa: 'اپراتور', en: 'Operator' }, { fa: 'ندارد', en: 'None' }],
            [{ fa: 'روز 1', en: 'Day 1' }, { fa: 'دستور کار WO-60518 و رزروها', en: 'Work order WO-60518 and reservations' }, { fa: 'نگهداری، انبار', en: 'Maintenance, Inventory' }, { fa: 'برنامه‌ریز؛ مدیر نگهداری', en: 'Planner; maintenance manager' }, { fa: 'ندارد (فقط برآورد)', en: 'None (estimate only)' }],
            [{ fa: 'روز 2', en: 'Day 2' }, { fa: 'سفارش‌های PO-45120 و PO-45121', en: 'POs PO-45120 and PO-45121' }, { fa: 'خرید', en: 'Procurement' }, { fa: 'خریدار', en: 'Buyer' }, { fa: 'تعهد بودجه', en: 'Budget commitment' }],
            [{ fa: 'روز 2', en: 'Day 2' }, { fa: 'انتقال آب‌بند از انبار مرکزی', en: 'Seal transfer from the Central Warehouse' }, { fa: 'انبار', en: 'Inventory' }, { fa: 'انبارداران', en: 'Storekeepers' }, { fa: 'ثبت 1', en: 'Entry 1' }],
            [{ fa: 'روز 3', en: 'Day 3' }, { fa: 'حواله یاتاقان و آب‌بند به دستور کار', en: 'Goods issue of bearing and seal to the work order' }, { fa: 'انبار', en: 'Inventory' }, { fa: 'انباردار؛ امضای تکنسین', en: 'Storekeeper; technician signs' }, { fa: 'ثبت 2', en: 'Entry 2' }],
            [{ fa: 'روز 4', en: 'Day 4' }, { fa: 'رسید کوپلینگ', en: 'Coupling goods receipt' }, { fa: 'خرید، انبار', en: 'Procurement, Inventory' }, { fa: 'انباردار', en: 'Storekeeper' }, { fa: 'ثبت 3', en: 'Entry 3' }],
            [{ fa: 'روزهای 3 تا 6', en: 'Days 3 to 6' }, { fa: 'تأیید 60 ساعت کار', en: 'Confirmation of 60 hours' }, { fa: 'نگهداری، منابع انسانی', en: 'Maintenance, HR' }, { fa: 'تکنسین‌ها؛ سرپرست', en: 'Technicians; supervisor' }, { fa: 'ثبت 4', en: 'Entry 4' }],
            [{ fa: 'روز 6', en: 'Day 6' }, { fa: 'صورت‌وضعیت (SES) مهندس سازنده', en: 'SES for the OEM engineer' }, { fa: 'خرید', en: 'Procurement' }, { fa: 'سرپرست کار که کار را دیده است', en: 'Job supervisor who saw the work' }, { fa: 'ثبت 5', en: 'Entry 5' }],
            [{ fa: 'روز 12', en: 'Day 12' }, { fa: 'فاکتورها پس از تطبیق سه‌طرفه', en: 'Invoices after the three-way match' }, { fa: 'مالی (پرداختنی‌ها)', en: 'Finance (payables)' }, { fa: 'کارشناس پرداختنی‌ها', en: 'AP clerk' }, { fa: 'ثبت 6', en: 'Entry 6' }],
            [{ fa: 'روز 40', en: 'Day 40' }, { fa: 'اجرای پرداخت', en: 'Payment run' }, { fa: 'مالی (خزانه)', en: 'Finance (treasury)' }, { fa: 'خزانه‌دار با تأیید', en: 'Treasurer, approved' }, { fa: 'ثبت 7', en: 'Entry 7' }],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'دو انبار در این مثال ارزش‌گذاری جداگانه دارند، پس انتقال هم سند مالی می‌سازد (بدون اثر بر سود و زیان). نرخ مالیات بر ارزش افزوده را در این مثال 10٪ فرض می‌کنیم؛ نرخ رسمی را از قوانین روز بررسی کنید. چون مالیات خرید قابل کسر است، جزو هزینه دستور کار نیست.',
            en: 'In this example the two warehouses are valued separately, so the transfer also creates a Finance document (with no profit-or-loss effect). We assume a VAT rate of 10% for illustration; check the official rate in current law. Because input VAT is recoverable, it is not part of the work order cost.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'همه ثبت‌های خودکار مالی WO-60518', en: 'Every automatic Finance posting for WO-60518' },
          entries: [
            {
              date: { fa: 'ثبت 1: انتقال', en: 'Entry 1: transfer' },
              lines: [
                { account: ac.invField, debit: 210000 },
                { account: ac.invCentral, credit: 210000 },
              ],
            },
            {
              date: { fa: 'ثبت 2: حواله', en: 'Entry 2: goods issue' },
              lines: [
                { account: w1.mat, debit: 256000 },
                { account: ac.invField, credit: 256000 },
              ],
              memo: { fa: 'یاتاقان 46,000 + آب‌بند 210,000.', en: 'Bearing 46,000 + seal 210,000.' },
            },
            {
              date: { fa: 'ثبت 3: رسید کوپلینگ', en: 'Entry 3: coupling receipt' },
              lines: [
                { account: w1.mat, debit: 18000 },
                { account: ac.grir, credit: 18000 },
              ],
            },
            {
              date: { fa: 'ثبت 4: ساعات کار', en: 'Entry 4: hours' },
              lines: [
                { account: w1.lab, debit: 12000 },
                { account: ac.labourMech, credit: 12000 },
              ],
              memo: { fa: '60 ساعت × 200.', en: '60 hours × 200.' },
            },
            {
              date: { fa: 'ثبت 5: تأیید SES', en: 'Entry 5: SES approved' },
              lines: [
                { account: w1.svc, debit: 88000 },
                { account: ac.grir, credit: 88000 },
              ],
              memo: { fa: '4 روز × 22,000 طبق قرارداد چارچوبی.', en: '4 days × 22,000 under the framework contract.' },
            },
            {
              date: { fa: 'ثبت 6: فاکتورها', en: 'Entry 6: invoices' },
              lines: [
                { account: ac.grir, debit: 106000 },
                { account: ac.vat, debit: 10600 },
                { account: ac.ap, credit: 116600 },
              ],
              memo: { fa: '18,000 + 88,000 = 106,000؛ مالیات 10٪ = 10,600 (نرخ فرضی).', en: '18,000 + 88,000 = 106,000; VAT 10% = 10,600 (assumed rate).' },
            },
            {
              date: { fa: 'ثبت 7: پرداخت', en: 'Entry 7: payment' },
              lines: [
                { account: ac.ap, debit: 116600 },
                { account: ac.bank, credit: 116600 },
              ],
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'هزینه WO-60518: برآورد در برابر واقعی', en: 'WO-60518 cost: estimate vs actual' },
          head: [
            { fa: 'جزء هزینه', en: 'Cost element' },
            { fa: 'واقعی', en: 'Actual' },
          ],
          rows: [
            [{ fa: 'قطعات انباری', en: 'Stock materials' }, 256000],
            [{ fa: 'قطعات غیرانباری', en: 'Non-stock materials' }, 18000],
            [{ fa: 'خدمات پیمانکار (SES)', en: 'Contractor services (SES)' }, 88000],
            [{ fa: 'دستمزد داخلی', en: 'Internal labour' }, 12000],
            [{ fa: 'جمع واقعی', en: 'Total actual' }, 374000],
            [{ fa: 'برآورد تأییدشده', en: 'Approved estimate' }, 390000],
            [{ fa: 'کمتر از برآورد', en: 'Under the estimate by' }, 16000],
          ],
          numericCols: [1],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'حساب GR/IR چه می‌گوید؟', en: 'What GR/IR tells you' },
          text: {
            fa: 'از روز 4 تا روز 12، حساب GR/IR مانده بستانکار داشت: کالا و خدمت رسیده بود اما فاکتور نه. ثبت 6 آن را صفر کرد. مانده‌های قدیمی GR/IR یعنی رسید بی‌فاکتور، فاکتور بی‌رسید یا اختلاف مقدار و قیمت؛ مالی آن را هر ماه سن‌بندی می‌کند. اگر قطعه‌ای استفاده نشود، با **سند مرجوعی به انبار** برمی‌گردد و دستور کار بستانکار می‌شود.',
            en: 'From Day 4 to Day 12 the GR/IR account had a credit balance: goods and services had arrived but invoices had not. Entry 6 cleared it. Old GR/IR balances mean a receipt without an invoice, an invoice without a receipt, or a quantity or price difference; Finance ages them every month. If a part is not used, it goes back with a **return-to-stock document** that credits the work order.',
          },
        },
      ],
    },
    {
      id: 'scenario-settlement',
      title: { fa: 'بخش 3: تکمیل، تسویه، صورت‌حساب شرکا و بازیافت هزینه', en: 'Part 3: Completion, Settlement, Partner Billing and Cost Recovery' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'روز 7، آزمون کارکرد موفق است و زمان پایان خرابی ثبت می‌شود. تکنسین کدها را وارد می‌کند: قطعه «یاتاقان»، آسیب «سایش»، علت «آلودگی روغن روانکاری»؛ همان الگویی که در K-101 هم دیده شده بود و حالا به تحلیل علت ریشه‌ای در سطح ایستگاه می‌رسد. سرپرست کدها را بازبینی و دستور کار را **تکمیل فنی** می‌کند. در پایان ماه، کنترلر هزینه تسویه را اجرا می‌کند.',
            en: 'On Day 7 the test run succeeds and the failure end time is recorded. The technician enters the codes: part “bearing”, damage “wear”, cause “lube oil contamination”, the same pattern seen on K-101, which now feeds a station-wide root cause analysis. The supervisor reviews the codes and sets the work order to **technically complete**. At month-end the cost controller runs settlement.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'دستور کار به مرکز هزینه', en: 'Work order to cost centre' },
              text: {
                fa: '374,000 از WO-60518 به CC-3100 ایستگاه تقویت فشار تسویه می‌شود (حسابداری مدیریت؛ جمع دفتر کل تغییر نمی‌کند).',
                en: '374,000 settles from WO-60518 to CC-3100, the compressor station (management accounting; the GL total does not change).',
              },
            },
            {
              title: { fa: 'مرکز هزینه به حوضه هزینه مشارکت', en: 'Cost centre to the joint-venture cost pool' },
              text: {
                fa: 'CC-3100 متعلق به محدوده قرارداد آریاست، پس هزینه‌اش در حوضه هزینه مشترک آن مشارکت جمع می‌شود.',
                en: 'CC-3100 belongs to the Arya contract area, so its cost joins that joint venture’s shared cost pool.',
              },
            },
            {
              title: { fa: 'صورت‌حساب سهم شرکا', en: 'Partner billing' },
              text: {
                fa: 'شرکت عامل 100٪ هزینه را پرداخته و سهم شریک غیرعامل را در صورت‌حساب ماهانه مشارکت (یا تسویه با علی‌الحساب‌های دریافتی) مطالبه می‌کند.',
                en: 'The operator paid 100% of the cost and bills the non-operating partner its share in the monthly joint-interest billing (or offsets it against cash calls received).',
              },
            },
            {
              title: { fa: 'دفتر بازیافت هزینه', en: 'Cost-recovery register' },
              text: {
                fa: 'کل 374,000 به‌عنوان هزینه عملیاتی محدوده قرارداد با پیوند به اسناد پشتیبان در دفتر بازیافت هزینه ثبت می‌شود؛ هر شریک به نسبت سهمش آن را بازیافت می‌کند.',
                en: 'The full 374,000 is recorded as an operating cost of the contract area in the cost-recovery register, linked to its supporting documents; each partner recovers it in proportion to its share.',
              },
            },
          ],
        },
        {
          type: 'journal',
          title: { fa: 'صورت‌حساب سهم شریک (سهم شریک در این مثال 40٪)', en: 'Partner billing (the partner’s share is 40% in this example)' },
          entries: [
            {
              date: { fa: 'صورت‌حساب ماهانه مشارکت', en: 'Monthly joint-interest billing' },
              lines: [
                { account: ac.partnerAr, debit: 149600 },
                { account: ac.recharge, credit: 149600 },
              ],
              memo: {
                fa: '374,000 × 40٪ = 149,600؛ هزینه خالص مسار پترولیوم 224,400 (سهم 60٪) می‌شود.',
                en: '374,000 × 40% = 149,600; Masar Petroleum’s net cost becomes 224,400 (its 60% share).',
              },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'بسته مدارک پشتیبان 374,000 برای حسابرسی شریک و بازیافت هزینه', en: 'The support package for the 374,000, for partner audit and cost recovery' },
          head: [
            { fa: 'هزینه', en: 'Cost' },
            { fa: 'مبلغ', en: 'Amount' },
            { fa: 'مدرک', en: 'Evidence' },
          ],
          rows: [
            [{ fa: 'قطعات انباری', en: 'Stock parts' }, 256000, { fa: 'رزرو، حواله با امضای تکنسین، نرخ میانگین موزون کالا', en: 'Reservation, goods issue signed by the technician, moving average price' }],
            [{ fa: 'کوپلینگ', en: 'Coupling' }, 18000, { fa: 'درخواست، سفارش، رسید، فاکتور، پرداخت', en: 'Requisition, PO, receipt, invoice, payment' }],
            [{ fa: 'مهندس سازنده', en: 'OEM engineer' }, 88000, { fa: 'قرارداد چارچوبی، سفارش خدمت، SES تأییدشده، برگه کار روزانه، فاکتور', en: 'Framework contract, call-off, approved SES, daily field tickets, invoice' }],
            [{ fa: 'دستمزد', en: 'Labour' }, 12000, { fa: 'تأییدهای ساعت کار و محاسبه نرخ CC-3900', en: 'Time confirmations and the CC-3900 rate calculation' }],
            [{ fa: 'جمع', en: 'Total' }, 374000, { fa: 'جریان اسناد دستور کار، گزارش خرابی، سند تسویه', en: 'Work order document flow, failure report, settlement document' }],
          ],
          numericCols: [1],
        },
        {
          type: 'p',
          text: {
            fa: 'در قراردادهای مشارکت در تولید و مشابه آن، گروه پیمانکار هزینه‌هایش را از «نفت یا گاز هزینه» بازیافت می‌کند که سقفی دارد؛ هزینه بازیافت‌نشده به دوره بعد منتقل می‌شود. جدول زیر یک فصل را با ارقام نمونه نشان می‌دهد؛ سقف و قواعد واقعی را فقط از متن هر قرارداد بردارید.',
            en: 'Under production sharing and similar contracts, the contractor group recovers its costs from “cost oil or gas”, which is capped; unrecovered cost carries forward to the next period. The table shows one quarter with illustrative figures; take the real cap and rules only from the contract itself.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'بازیافت هزینه در یک فصل (ارقام و سقف نمونه‌اند)', en: 'Cost recovery for one quarter (figures and cap are illustrative)' },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          rows: [
            [{ fa: 'ارزش تولید فصل', en: 'Value of the quarter’s production' }, 20000000],
            [{ fa: 'سقف بازیافت هزینه (50٪، نمونه)', en: 'Cost-recovery cap (50%, illustrative)' }, 10000000],
            [{ fa: 'هزینه بازیافت‌نشده منتقل‌شده از قبل', en: 'Unrecovered cost brought forward' }, 800000],
            [{ fa: 'هزینه‌های عملیاتی فصل (شامل WO-60518)', en: 'Operating costs of the quarter (incl. WO-60518)' }, 6200000],
            [{ fa: 'قسط بازیافت هزینه‌های سرمایه‌ای', en: 'Capital cost recovery instalment' }, 4500000],
            [{ fa: 'جمع قابل بازیافت', en: 'Total recoverable' }, 11500000],
            [{ fa: 'بازیافت‌شده در این فصل', en: 'Recovered this quarter' }, 10000000],
            [{ fa: 'منتقل به فصل بعد', en: 'Carried forward' }, 1500000],
          ],
          numericCols: [1],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'هزینه‌هایی که معمولاً رد می‌شوند', en: 'Costs that are often disallowed' },
          text: {
            fa: 'جزئیات به هر قرارداد بستگی دارد، اما این‌ها اغلب پذیرفته نمی‌شوند: هزینه بدون مدرک پشتیبان، هزینه ثبت‌شده روی موضوع هزینه یا محدوده قرارداد اشتباه، هزینه خارج از برنامه کار و بودجه تأییدشده، جریمه‌ها، و هزینه‌های ناشی از قصور جدی. ERP یکپارچه با موضوع هزینه اجباری و جریان اسناد کامل، بیشتر این ریسک‌ها را از همان لحظه ثبت کم می‌کند.',
            en: 'Details depend on each contract, but these are often rejected: costs without supporting documents, costs on the wrong cost object or contract area, costs outside the approved work programme and budget, fines and penalties, and costs caused by gross negligence. An integrated ERP with mandatory cost objects and a complete document flow removes most of these risks at the moment of entry.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: قراردادهای ایران', en: 'In practice: Iranian contracts' },
          text: {
            fa: 'در قراردادهای بیع متقابل و IPC ایران هم هزینه‌های پیمانکار طبق قواعد خود قرارداد بازپرداخت و توسط شرکت ملی نفت ایران حسابرسی می‌شود. سقف‌ها، جدول زمانی بازپرداخت و فهرست هزینه‌های مجاز از هر قرارداد و پیوست حسابداری آن می‌آید؛ پیش از تنظیم ERP، آن پیوست را با دقت بخوانید و موضوع‌های هزینه را با آن هماهنگ کنید.',
            en: 'Under Iran’s buy-back and IPC contracts too, the contractor’s costs are reimbursed under the contract’s own rules and audited by the National Iranian Oil Company. Caps, repayment schedules and the list of allowable costs come from each contract and its accounting procedure; read that procedure carefully before configuring the ERP and align the cost objects with it.',
          },
        },
      ],
    },
    {
      id: 'controls-audit',
      title: { fa: 'کنترل‌ها و ردپای حسابرسی', en: 'Controls and the Audit Trail' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'یکپارچگی کار را سریع می‌کند، اما خطا را هم خودکار پخش می‌کند: یک داده پایه اشتباه (نرخ دستمزد، حساب کالا، قاعده تسویه) صدها بار اشتباه ثبت می‌شود. پس کنترل‌ها باید در خود فرایند ساخته شوند، نه اینکه پایان سال با جست‌وجو پیدا شوند.',
            en: 'Integration speeds work up, but it also spreads errors automatically: one wrong master data item (a labour rate, a material account, a settlement rule) posts wrongly hundreds of times. So controls must be built into the process, not discovered by searching at year-end.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'ریسک، کنترل و شواهد ERP', en: 'Risk, control and ERP evidence' },
          head: [
            { fa: 'ریسک', en: 'Risk' },
            { fa: 'کنترل', en: 'Control' },
            { fa: 'شواهد در ERP', en: 'ERP evidence' },
          ],
          rows: [
            [
              { fa: 'خدمت پیمانکار انجام‌نشده یا بیش از واقع', en: 'Contractor work not done or overstated' },
              { fa: 'تأیید SES توسط کسی که کار را دیده؛ تفکیک وظایف خریدار، تأییدکننده SES و تأییدکننده فاکتور', en: 'SES approved by someone who saw the work; buyer, SES approver and invoice approver are different people' },
              { fa: 'سابقه تأیید SES و نقش‌های کاربران', en: 'SES approval log and user roles' },
            ],
            [
              { fa: 'برداشت قطعه بدون ثبت', en: 'Parts taken without a record' },
              { fa: 'حواله فقط در برابر رزرو؛ شمارش دوره‌ای', en: 'Issues only against reservations; cycle counts' },
              { fa: 'اسناد کالا و مغایرت‌های شمارش', en: 'Material documents and count differences' },
            ],
            [
              { fa: 'هزینه روی موضوع هزینه اشتباه', en: 'Cost on the wrong cost object' },
              { fa: 'موضوع هزینه اجباری؛ قاعده اعتبارسنجی نوع دستور کار و گیرنده تسویه', en: 'Mandatory cost object; validation of work order type against settlement receiver' },
              { fa: 'سابقه تغییرات دستور کار و قاعده تسویه', en: 'Work order and settlement-rule change logs' },
            ],
            [
              { fa: 'کار سرمایه‌ای به‌عنوان جاری تسویه شود یا برعکس', en: 'Capital work settled as OPEX or the reverse' },
              { fa: 'بازبینی نوع دستور کار و قاعده تسویه توسط کنترلر هزینه', en: 'Cost controller reviews work order type and settlement rule' },
              { fa: 'اسناد تسویه', en: 'Settlement documents' },
            ],
            [
              { fa: 'پرداخت فاکتور بدون رسید', en: 'Invoice paid without a receipt' },
              { fa: 'تطبیق سه‌طرفه؛ سن‌بندی ماهانه GR/IR', en: 'Three-way match; monthly GR/IR ageing' },
              { fa: 'گزارش اقلام باز GR/IR', en: 'GR/IR open-items report' },
            ],
            [
              { fa: 'تغییر غیرمجاز داده پایه (نرخ، حساب بانکی فروشنده)', en: 'Unauthorised master data change (rate, vendor bank account)' },
              { fa: 'مالکیت داده پایه و تأیید دونفره', en: 'Master data ownership and dual approval' },
              { fa: 'سابقه تغییرات (چه کسی، چه زمانی، چه مقداری)', en: 'Change logs (who, when, old and new value)' },
            ],
          ],
        },
        {
          type: 'steps',
          items: [
            { title: { fa: 'همه ساعت‌ها و حواله‌ها', en: 'All hours and issues' }, text: { fa: 'مطمئن شوید همه ساعت‌های کار و حواله‌های ماه ثبت شده‌اند.', en: 'Make sure all of the month’s hours and goods issues are posted.' } },
            { title: { fa: 'SES و رسیدهای باز', en: 'Open SESs and receipts' }, text: { fa: 'خدمات انجام‌شده بی‌SES و مانده‌های GR/IR را پیگیری کنید.', en: 'Chase services done without an SES and the GR/IR balances.' } },
            { title: { fa: 'تکمیل فنی', en: 'Technical completion' }, text: { fa: 'دستورهای کار تمام‌شده را با کدهای کامل تکمیل فنی کنید.', en: 'Technically complete finished work orders with full codes.' } },
            { title: { fa: 'تسویه', en: 'Settlement' }, text: { fa: 'تسویه را اجرا کنید و دستورهای کار تکمیل‌شده اما تسویه‌نشده را صفر کنید.', en: 'Run settlement and clear completed but unsettled work orders.' } },
            { title: { fa: 'AUC و دستورهای کار سرمایه‌ای', en: 'AUC and capital work orders' }, text: { fa: 'سن AUC و پروژه‌های تمام‌شده را بررسی کنید.', en: 'Review AUC ageing and finished projects.' } },
            { title: { fa: 'تطبیق دفاتر معین', en: 'Sub-ledger reconciliation' }, text: { fa: 'انبار و دارایی‌ها را با حساب‌های کنترل دفتر کل تطبیق دهید.', en: 'Reconcile inventory and assets to the GL control accounts.' } },
            { title: { fa: 'شرکا و بازیافت هزینه', en: 'Partners and cost recovery' }, text: { fa: 'صورت‌حساب مشارکت را صادر و دفتر بازیافت هزینه را به‌روز کنید.', en: 'Issue the joint-interest billing and update the cost-recovery register.' } },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'ردپای حسابرسی', en: 'The audit trail' },
          text: {
            fa: 'در ERP سند ثبت‌شده **حذف نمی‌شود**؛ اشتباه با سند برگشتی اصلاح می‌شود و هر دو سند می‌مانند. هر سند ثبت‌کننده، زمان، تأییدکننده و پیوند به سندهای قبل و بعدش را دارد. همین زنجیره است که به حسابرس شریک اجازه می‌دهد از 149,600 صورت‌حساب‌شده تا امضای تکنسین روی حواله برگردد.',
            en: 'In the ERP a posted document is **never deleted**; a mistake is fixed with a reversal document and both remain. Each document records who entered it, when, who approved it and its links to the documents before and after it. That chain lets the partner’s auditor trace the 149,600 billed all the way back to the technician’s signature on the goods issue.',
          },
        },
        {
          type: 'h',
          text: { fa: 'اشتباهات رایج', en: 'Common mistakes' },
        },
        {
          type: 'list',
          items: [
            {
              fa: 'تأیید SES توسط خریدار یا خود پیمانکار: تفکیک وظایف از بین می‌رود و خدمت انجام‌نشده پرداخت می‌شود.',
              en: 'The buyer or the contractor approving the SES: segregation of duties breaks and unperformed work gets paid.',
            },
            {
              fa: 'نرخ دستمزد چندساله به‌روز نشده: هزینه دستور کارها کمتر از واقع و جذب‌نشده بزرگ در مرکز هزینه گروه.',
              en: 'A labour rate not updated for years: work orders look cheaper than they are and a large unabsorbed balance sits in the crew cost centre.',
            },
            {
              fa: 'رها کردن دستورهای کار تکمیل‌شده بدون تسویه: هزینه به مرکز هزینه، شرکا و بازیافت هزینه نمی‌رسد.',
              en: 'Leaving completed work orders unsettled: cost never reaches the cost centre, the partners or cost recovery.',
            },
            {
              fa: 'اصلاح اشتباه با سند دستی در دفتر کل به جای اصلاح سند اصلی: دفتر کل و جریان اسناد از هم جدا می‌شوند.',
              en: 'Fixing errors with a manual GL journal instead of correcting the source document: the ledger and the document flow drift apart.',
            },
            {
              fa: 'ثبت هزینه همه چاه‌ها روی یک مرکز هزینه عمومی: گزارش هزینه هر چاه و AFE و پشتوانه بازیافت هزینه ضعیف می‌شود.',
              en: 'Booking all wells’ costs to one general cost centre: per-well cost reports, AFE tracking and cost-recovery support all weaken.',
            },
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: { fa: 'تمرین‌ها', en: 'Exercises' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'چهار تمرین از ساده به دشوار. در هر کدام، سند ERP و ثبت مالی را با هم ببینید.',
            en: 'Four exercises from easy to hard. In each, think of the ERP document and the Finance posting together.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'نرخ گروه ابزار دقیق', en: 'The instrument crew rate' },
          difficulty: 'easy',
          problem: {
            fa: 'هزینه سالانه کارکنان گروه ابزار دقیق (CC-3910) 1,350,000 و سربار گروه 270,000 است. گروه 6 تکنسین دارد و هر کدام 1,500 ساعت مفید در سال برنامه‌ریزی شده است. نرخ ساعتی را حساب کنید و ثبت خودکار تأیید 25 ساعت روی دستور کار `WO-61022` را بنویسید.',
            en: 'The instrument crew (CC-3910) has annual personnel cost of 1,350,000 and crew overheads of 270,000. It has 6 technicians with 1,500 planned productive hours each per year. Compute the hourly rate and write the automatic posting for confirming 25 hours on work order `WO-61022`.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                { title: { fa: 'هزینه کل', en: 'Total cost' }, text: { fa: '1,350,000 + 270,000 = 1,620,000.', en: '1,350,000 + 270,000 = 1,620,000.' } },
                { title: { fa: 'ساعت مفید', en: 'Productive hours' }, text: { fa: '6 × 1,500 = 9,000.', en: '6 × 1,500 = 9,000.' } },
                { title: { fa: 'نرخ', en: 'Rate' }, text: { fa: '1,620,000 ÷ 9,000 = 180 در ساعت.', en: '1,620,000 ÷ 9,000 = 180 per hour.' } },
                { title: { fa: 'هزینه 25 ساعت', en: 'Cost of 25 hours' }, text: { fa: '25 × 180 = 4,500.', en: '25 × 180 = 4,500.' } },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'تأیید ساعات کار', en: 'Time confirmation' },
                  lines: [
                    { account: w2.lab, debit: 4500 },
                    { account: ac.labourInst, credit: 4500 },
                  ],
                },
              ],
            },
          ],
          answer: { fa: 'نرخ 180 در ساعت؛ 4,500 به WO-61022 منظور می‌شود.', en: 'Rate 180 per hour; 4,500 is charged to WO-61022.' },
        },
        {
          type: 'exercise',
          title: { fa: 'دستور کار با مرجوعی', en: 'A work order with a return' },
          difficulty: 'medium',
          problem: {
            fa: 'دستور کار `WO-61307` برای تعمیر شیر کنترل سطح جداکننده V-201 رویدادهای زیر را داشته است. ثبت‌های خودکار را بنویسید (فاکتورها را در نظر نگیرید) و هزینه خالص دستور کار را حساب کنید.',
            en: 'Work order `WO-61307`, repairing the V-201 level control valve, had the events below. Write the automatic postings (ignore invoices) and compute the work order’s net cost.',
          },
          given: {
            head: [
              { fa: 'رویداد', en: 'Event' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            rows: [
              [{ fa: 'حواله 2 ست تریم شیر × 12,500', en: 'Goods issue of 2 valve trim sets × 12,500' }, 25000],
              [{ fa: 'رسید واشر غیرانباری', en: 'Receipt of a non-stock gasket' }, 3000],
              [{ fa: 'SES آزمون غیرمخرب (NDT)', en: 'SES for non-destructive testing (NDT)' }, 14000],
              [{ fa: '40 ساعت گروه ابزار دقیق × 180', en: '40 instrument crew hours × 180' }, 7200],
              [{ fa: 'مرجوعی 1 ست تریم استفاده‌نشده به انبار', en: 'Return of 1 unused trim set to stock' }, 12500],
            ],
            numericCols: [1],
          },
          solution: [
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'حواله', en: 'Goods issue' },
                  lines: [
                    { account: w3.mat, debit: 25000 },
                    { account: ac.inventory, credit: 25000 },
                  ],
                },
                {
                  date: { fa: 'رسید واشر', en: 'Gasket receipt' },
                  lines: [
                    { account: w3.mat, debit: 3000 },
                    { account: ac.grir, credit: 3000 },
                  ],
                },
                {
                  date: { fa: 'تأیید SES', en: 'SES approved' },
                  lines: [
                    { account: w3.svc, debit: 14000 },
                    { account: ac.grir, credit: 14000 },
                  ],
                },
                {
                  date: { fa: 'ساعات کار', en: 'Hours' },
                  lines: [
                    { account: w3.lab, debit: 7200 },
                    { account: ac.labourInst, credit: 7200 },
                  ],
                },
                {
                  date: { fa: 'مرجوعی به انبار', en: 'Return to stock' },
                  lines: [
                    { account: ac.inventory, debit: 12500 },
                    { account: w3.mat, credit: 12500 },
                  ],
                },
              ],
            },
            {
              type: 'p',
              text: {
                fa: 'هزینه خالص: قطعات 25,000 − 12,500 + 3,000 = 15,500؛ به‌علاوه خدمات 14,000 و دستمزد 7,200؛ جمع 36,700.',
                en: 'Net cost: materials 25,000 − 12,500 + 3,000 = 15,500; plus services 14,000 and labour 7,200; total 36,700.',
              },
            },
          ],
          answer: { fa: 'هزینه خالص WO-61307 برابر 36,700 است.', en: 'WO-61307’s net cost is 36,700.' },
        },
        {
          type: 'exercise',
          title: { fa: 'سهم شریک و بازیافت هزینه فصل', en: 'Partner share and the quarter’s cost recovery' },
          difficulty: 'medium',
          problem: {
            fa: 'دستور کاری به مبلغ 500,000 به مرکز هزینه ایستگاه تسویه شده است. در این تمرین سهم شریک غیرعامل 35٪ است (رقم نمونه). (الف) مبلغ صورت‌حساب شریک، ثبت آن و هزینه خالص شرکت عامل را حساب کنید. (ب) با ارقام نمونه جدول، مبلغ بازیافت‌شده در فصل و مبلغ منتقل به فصل بعد را حساب کنید.',
            en: 'A 500,000 work order has been settled to the station cost centre. In this exercise the non-operating partner holds 35% (illustrative). (a) Compute the partner billing, its entry and the operator’s net cost. (b) Using the illustrative figures in the table, compute the amount recovered this quarter and the amount carried forward.',
          },
          given: {
            head: [
              { fa: 'داده فصل', en: 'Quarter data' },
              { fa: 'مبلغ یا نرخ', en: 'Amount or rate' },
            ],
            rows: [
              [{ fa: 'ارزش تولید', en: 'Value of production' }, 30000000],
              [{ fa: 'سقف بازیافت هزینه', en: 'Cost-recovery cap' }, { fa: '40٪', en: '40%' }],
              [{ fa: 'هزینه منتقل‌شده از قبل', en: 'Cost brought forward' }, 1000000],
              [{ fa: 'هزینه‌های عملیاتی فصل', en: 'Operating costs of the quarter' }, 7500000],
              [{ fa: 'قسط هزینه‌های سرمایه‌ای', en: 'Capital cost instalment' }, 5000000],
            ],
            numericCols: [1],
          },
          solution: [
            {
              type: 'steps',
              items: [
                { title: { fa: 'صورت‌حساب شریک', en: 'Partner billing' }, text: { fa: '500,000 × 35٪ = 175,000.', en: '500,000 × 35% = 175,000.' } },
                { title: { fa: 'هزینه خالص شرکت عامل', en: 'Operator’s net cost' }, text: { fa: '500,000 − 175,000 = 325,000 (سهم 65٪).', en: '500,000 − 175,000 = 325,000 (its 65% share).' } },
                { title: { fa: 'سقف بازیافت', en: 'Recovery cap' }, text: { fa: '30,000,000 × 40٪ = 12,000,000.', en: '30,000,000 × 40% = 12,000,000.' } },
                { title: { fa: 'جمع قابل بازیافت', en: 'Total recoverable' }, text: { fa: '1,000,000 + 7,500,000 + 5,000,000 = 13,500,000.', en: '1,000,000 + 7,500,000 + 5,000,000 = 13,500,000.' } },
                { title: { fa: 'بازیافت و انتقال', en: 'Recovered and carried forward' }, text: { fa: 'بازیافت 12,000,000؛ منتقل به فصل بعد 13,500,000 − 12,000,000 = 1,500,000.', en: 'Recovered 12,000,000; carried forward 13,500,000 − 12,000,000 = 1,500,000.' } },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'صورت‌حساب مشارکت', en: 'Joint-interest billing' },
                  lines: [
                    { account: ac.partnerAr, debit: 175000 },
                    { account: ac.recharge, credit: 175000 },
                  ],
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'در دفتر بازیافت هزینه کل 500,000 ثبت می‌شود، نه فقط 325,000؛ بازیافت در سطح گروه پیمانکار است و هر شریک سهم خودش را می‌گیرد.',
                en: 'The cost-recovery register records the full 500,000, not just 325,000; recovery is at contractor-group level and each partner takes its own share.',
              },
            },
          ],
          answer: {
            fa: 'صورت‌حساب شریک 175,000 و هزینه خالص 325,000؛ بازیافت فصل 12,000,000 و انتقال 1,500,000.',
            en: 'Partner billing 175,000, operator net 325,000; 12,000,000 recovered and 1,500,000 carried forward.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'یافته‌های حسابرسی پایان سال', en: 'Year-end audit findings' },
          difficulty: 'hard',
          problem: {
            fa: 'حسابرس داخلی چهار یافته دارد. برای هر کدام کنترل ازدست‌رفته و اقدام اصلاحی را بنویسید و برای یافته (الف) ثبت اصلاحی را بنویسید. (الف) دستور کار تعمیر اساسی سرمایه‌ای `WO-70145` به مبلغ 800,000 به مرکز هزینه CC-3100 تسویه شده است. (ب) یک کاربر هم سفارش داربست 64,000 را ثبت کرده و هم SES آن را تأیید کرده است. (ج) 45,000 مانده GR/IR بابت یک رسید کوپلینگ بیش از 90 روز باز مانده است. (د) 30,000 هزینه مواد شیمیایی چاه AR-04 روی چاه AR-07 ثبت شده است.',
            en: 'Internal audit has four findings. For each, name the failed control and the corrective action, and write the correcting entry for finding (a). (a) Capital overhaul work order `WO-70145` for 800,000 was settled to cost centre CC-3100. (b) One user both created the 64,000 scaffolding PO and approved its SES. (c) A 45,000 GR/IR balance for a coupling receipt has been open for more than 90 days. (d) 30,000 of chemicals for well AR-04 was booked to well AR-07.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'یافته', en: 'Finding' },
                { fa: 'کنترل ازدست‌رفته', en: 'Failed control' },
                { fa: 'اقدام اصلاحی', en: 'Corrective action' },
              ],
              rows: [
                [
                  { fa: 'الف', en: 'a' },
                  { fa: 'اعتبارسنجی نوع دستور کار و گیرنده تسویه', en: 'Validation of work order type against settlement receiver' },
                  { fa: 'تسویه برگشت و دوباره به AUC انجام شود؛ قاعده اعتبارسنجی فعال شود', en: 'Reverse and re-settle to AUC; switch on the validation rule' },
                ],
                [
                  { fa: 'ب', en: 'b' },
                  { fa: 'تفکیک وظایف', en: 'Segregation of duties' },
                  { fa: 'نقش کاربر اصلاح شود؛ سرپرست محل انجام کار را پیش از پرداخت دوباره تأیید کند', en: 'Fix the user’s roles; the site supervisor re-confirms the work before payment' },
                ],
                [
                  { fa: 'ج', en: 'c' },
                  { fa: 'سن‌بندی ماهانه GR/IR', en: 'Monthly GR/IR ageing' },
                  { fa: 'پیگیری فاکتور با فروشنده؛ اگر اختلاف قیمت یا مقدار است، با خرید حل شود', en: 'Chase the invoice with the vendor; resolve any price or quantity difference with procurement' },
                ],
                [
                  { fa: 'د', en: 'd' },
                  { fa: 'موضوع هزینه درست هنگام حواله', en: 'Correct cost object at goods issue' },
                  { fa: 'سند انتقال هزینه میان دو چاه؛ جمع دفتر کل تغییر نمی‌کند، اما گزارش چاه، AFE و بازیافت هزینه اصلاح می‌شود', en: 'Repost between the two wells; the GL total is unchanged, but well reports, AFE tracking and cost recovery are corrected' },
                ],
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'اصلاح یافته الف', en: 'Correcting finding a' },
                  lines: [
                    { account: ac.auc, debit: 800000 },
                    { account: ac.capitalisedMaint, credit: 800000 },
                  ],
                  memo: {
                    fa: 'هزینه از سود و زیان خارج و به ترازنامه منتقل می‌شود؛ طبقه آن در دفتر بازیافت هزینه هم از عملیاتی به سرمایه‌ای اصلاح می‌شود.',
                    en: 'The cost leaves profit or loss for the balance sheet; its class in the cost-recovery register is also corrected from operating to capital.',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: 'الف: بدهکار AUC و بستانکار هزینه نگهداری منتقل‌شده به دارایی 800,000؛ ب: تفکیک وظایف؛ ج: پیگیری GR/IR؛ د: انتقال هزینه میان چاه‌ها بدون تغییر جمع دفتر کل.',
            en: 'a: Dr AUC / Cr Maintenance costs capitalised 800,000; b: segregation of duties; c: GR/IR follow-up; d: repost between wells with no change to the GL total.',
          },
        },
      ],
    },
    {
      id: 'summary',
      title: { fa: 'جمع‌بندی و اصطلاحات کلیدی', en: 'Summary and Key Terms' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              fa: 'هر رویداد یک‌بار و در ماژول خودش ثبت می‌شود و تعیین خودکار حساب، ثبت مالی را می‌سازد.',
              en: 'Each event is entered once, in its own module, and automatic account determination creates the Finance posting.',
            },
            {
              fa: 'نرخ دستمزد = هزینه کارکنان و سربار گروه ÷ ساعت مفید؛ اختلاف هزینه واقعی و جذب‌شده را هر سال بررسی کنید.',
              en: 'Labour rate = crew personnel cost and overheads ÷ productive hours; review the gap between actual and absorbed cost every year.',
            },
            {
              fa: 'حواله، رسید، تأیید SES و ساعات کار هزینه را روی دستور کار می‌نشانند؛ فاکتور GR/IR را صفر و پرداخت بدهی را تسویه می‌کند.',
              en: 'Goods issues, receipts, SES approvals and hours put cost on the work order; the invoice clears GR/IR and the payment settles the payable.',
            },
            {
              fa: 'تسویه هزینه را به مرکز هزینه، حوضه مشارکت، صورت‌حساب شرکا و دفتر بازیافت هزینه می‌برد.',
              en: 'Settlement carries cost to the cost centre, the JV pool, partner billing and the cost-recovery register.',
            },
            {
              fa: 'بازیافت هزینه به مدارک کامل، موضوع هزینه درست و تطابق با برنامه و بودجه تأییدشده بستگی دارد.',
              en: 'Cost recovery depends on complete documents, the right cost object and consistency with the approved work programme and budget.',
            },
            {
              fa: 'کنترل‌ها در فرایند ساخته می‌شوند: تفکیک وظایف، تطبیق سه‌طرفه، سن‌بندی GR/IR، تسویه ماهانه و ردپای حسابرسی بدون حذف سند.',
              en: 'Controls are built into the process: segregation of duties, three-way match, GR/IR ageing, monthly settlement and an audit trail where documents are never deleted.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            { term: { fa: 'مدیریت دارایی سازمانی (EAM)', en: 'Enterprise asset management (EAM)' }, def: { fa: 'ماژول نگهداری ERP که دارایی‌ها، اعلان‌ها و دستورهای کار را مدیریت می‌کند.', en: 'The ERP maintenance module that manages assets, notifications and work orders.' } },
            { term: { fa: 'جریان اسناد', en: 'Document flow' }, def: { fa: 'زنجیره پیوسته اسناد مرتبط، از اعلان تا پرداخت.', en: 'The linked chain of related documents, from notification to payment.' } },
            { term: { fa: 'تعیین خودکار حساب', en: 'Automatic account determination' }, def: { fa: 'انتخاب حساب‌های دفتر کل توسط سیستم بر پایه داده پایه و نوع رویداد.', en: 'The system choosing GL accounts from master data and the type of event.' } },
            { term: { fa: 'نرخ دستمزد مرکز کار', en: 'Work centre labour rate' }, def: { fa: 'هزینه ساعتی گروه که با هر تأیید ساعت کار به دستور کار منظور می‌شود.', en: 'The crew’s hourly cost, charged to the work order with each time confirmation.' } },
            { term: { fa: 'جذب‌نشده (جذب کمتر)', en: 'Under-absorption' }, def: { fa: 'بخشی از هزینه واقعی گروه که از راه ساعت‌های تأییدشده به دستورهای کار نرسیده است.', en: 'The part of a crew’s actual cost not charged to work orders through confirmed hours.' } },
            { term: { fa: 'برگه ثبت خدمات (SES)', en: 'Service entry sheet (SES)' }, def: { fa: 'رسید خدمات پیمانکار که کسی که کار را دیده تأیید می‌کند.', en: 'The receipt for contractor services, approved by someone who saw the work.' } },
            { term: { fa: 'تسویه', en: 'Settlement' }, def: { fa: 'انتقال هزینه دستور کار به گیرنده نهایی: مرکز هزینه، پروژه یا AUC.', en: 'Moving a work order’s cost to its final receiver: a cost centre, project or AUC.' } },
            { term: { fa: 'صورت‌حساب سهم شرکا', en: 'Joint-interest billing' }, def: { fa: 'مطالبه سهم شرکای غیرعامل از هزینه‌هایی که شرکت عامل پرداخته است.', en: 'Billing non-operating partners their share of costs the operator has paid.' } },
            { term: { fa: 'دفتر بازیافت هزینه', en: 'Cost-recovery register' }, def: { fa: 'سابقه هزینه‌های قابل بازیافت قرارداد، با طبقه و مدارک پشتیبان.', en: 'The record of the contract’s recoverable costs, with their class and supporting documents.' } },
            { term: { fa: 'تفکیک وظایف', en: 'Segregation of duties' }, def: { fa: 'جدا بودن افرادی که سفارش می‌دهند، رسید یا SES تأیید می‌کنند و پرداخت را تأیید می‌کنند.', en: 'Keeping ordering, receipt or SES approval, and payment approval with different people.' } },
            { term: { fa: 'ردپای حسابرسی', en: 'Audit trail' }, def: { fa: 'سابقه کامل ثبت‌کننده، زمان، تأیید و پیوند هر سند که اجازه ردیابی هر عدد تا منبعش را می‌دهد.', en: 'The full record of who, when, approval and links for each document, letting any number be traced to its source.' } },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: {
        fa: 'هزینه سالانه یک گروه (کارکنان و سربار) 2,000,000 و ساعت مفید آن 10,000 است. 30 ساعت کار این گروه روی یک دستور کار چه مبلغی به آن منظور می‌کند؟',
        en: 'A crew’s annual cost (personnel and overheads) is 2,000,000 and its productive hours are 10,000. How much do 30 hours of this crew charge to a work order?',
      },
      options: [
        { fa: '6,000', en: '6,000' },
        { fa: '200', en: '200' },
        { fa: '60,000', en: '60,000' },
        { fa: '3,000', en: '3,000' },
      ],
      answer: 0,
      explain: {
        fa: 'نرخ = 2,000,000 ÷ 10,000 = 200 در ساعت و 30 × 200 = 6,000. عدد 200 فقط نرخ است، نه هزینه دستور کار.',
        en: 'Rate = 2,000,000 ÷ 10,000 = 200 per hour, and 30 × 200 = 6,000. 200 is only the rate, not the work order cost.',
      },
    },
    {
      q: {
        fa: 'کدام سند برای کار پیمانکار نگهداری، ثبت «بدهکار هزینه دستور کار / بستانکار GR/IR» را می‌سازد؟',
        en: 'For contractor maintenance work, which document creates the posting “Dr work order cost / Cr GR/IR”?',
      },
      options: [
        { fa: 'سفارش خرید', en: 'The purchase order' },
        { fa: 'فاکتور پیمانکار', en: 'The contractor’s invoice' },
        { fa: 'تأیید برگه ثبت خدمات (SES)', en: 'Approval of the service entry sheet (SES)' },
        { fa: 'اجرای پرداخت', en: 'The payment run' },
      ],
      answer: 2,
      explain: {
        fa: 'SES رسید خدمت است و با تأییدش هزینه روی دستور کار می‌نشیند. سفارش خرید فقط تعهد بودجه می‌سازد و فاکتور GR/IR را صفر و بدهی به پیمانکار را ثبت می‌کند.',
        en: 'The SES is the receipt for a service; its approval puts the cost on the work order. The PO only creates a budget commitment, and the invoice clears GR/IR and records the payable.',
      },
    },
    {
      q: {
        fa: 'دستور کاری حواله 120,000، SES به مبلغ 45,000، دستمزد 15,000 و مرجوعی قطعه استفاده‌نشده 10,000 داشته است. هزینه خالص آن چقدر است؟',
        en: 'A work order had goods issues of 120,000, an SES of 45,000, labour of 15,000 and a return of unused parts of 10,000. What is its net cost?',
      },
      options: [
        { fa: '180,000', en: '180,000' },
        { fa: '170,000', en: '170,000' },
        { fa: '190,000', en: '190,000' },
        { fa: '160,000', en: '160,000' },
      ],
      answer: 1,
      explain: {
        fa: '120,000 + 45,000 + 15,000 − 10,000 = 170,000. مرجوعی دستور کار را بستانکار می‌کند؛ اگر آن را نادیده بگیرید به 180,000 و اگر آن را اضافه کنید به 190,000 می‌رسید.',
        en: '120,000 + 45,000 + 15,000 − 10,000 = 170,000. The return credits the work order; ignore it and you get 180,000, add it and you get 190,000.',
      },
    },
    {
      q: {
        fa: 'هزینه تسویه‌شده یک دستور کار 400,000 و سهم شریک غیرعامل 30٪ است. شرکت عامل چه مبلغی به شریک صورت‌حساب می‌کند؟',
        en: 'A work order’s settled cost is 400,000 and the non-operating partner holds 30%. How much does the operator bill the partner?',
      },
      options: [
        { fa: '280,000', en: '280,000' },
        { fa: '400,000', en: '400,000' },
        { fa: '133,333', en: '133,333' },
        { fa: '120,000', en: '120,000' },
      ],
      answer: 3,
      explain: {
        fa: '400,000 × 30٪ = 120,000. عدد 280,000 سهم خود شرکت عامل (70٪) است که صورت‌حساب نمی‌شود.',
        en: '400,000 × 30% = 120,000. 280,000 is the operator’s own 70% share, which is not billed.',
      },
    },
    {
      q: {
        fa: 'ارزش تولید یک فصل 50,000,000 و سقف بازیافت هزینه (نمونه) 45٪ است. هزینه‌های قابل بازیافت فصل 25,000,000 است. چه مبلغی به فصل بعد منتقل می‌شود؟',
        en: 'A quarter’s production is worth 50,000,000 and the (illustrative) cost-recovery cap is 45%. Recoverable costs for the quarter are 25,000,000. How much is carried forward?',
      },
      options: [
        { fa: 'هیچ', en: 'Nothing' },
        { fa: '22,500,000', en: '22,500,000' },
        { fa: '2,500,000', en: '2,500,000' },
        { fa: '25,000,000', en: '25,000,000' },
      ],
      answer: 2,
      explain: {
        fa: 'سقف = 50,000,000 × 45٪ = 22,500,000؛ پس 25,000,000 − 22,500,000 = 2,500,000 منتقل می‌شود. 22,500,000 مبلغ بازیافت‌شده است، نه منتقل‌شده.',
        en: 'Cap = 50,000,000 × 45% = 22,500,000, so 25,000,000 − 22,500,000 = 2,500,000 carries forward. 22,500,000 is the amount recovered, not carried forward.',
      },
    },
    {
      q: {
        fa: 'کدام وضعیت تفکیک وظایف را نقض می‌کند؟',
        en: 'Which situation breaks segregation of duties?',
      },
      options: [
        { fa: 'یک کاربر هم سفارش خدمت را ثبت و هم SES و فاکتور آن را تأیید می‌کند', en: 'One user creates the service PO and also approves its SES and invoice' },
        { fa: 'سرپرست محل SES را تأیید و کارشناس پرداختنی‌ها فاکتور را تطبیق می‌دهد', en: 'The site supervisor approves the SES and an AP clerk matches the invoice' },
        { fa: 'برنامه‌ریز دستور کار می‌سازد و انباردار حواله ثبت می‌کند', en: 'The planner creates the work order and the storekeeper posts the issue' },
        { fa: 'مدیر نگهداری برآورد بالای سقف را تأیید می‌کند', en: 'The maintenance manager approves an estimate above the limit' },
      ],
      answer: 0,
      explain: {
        fa: 'وقتی یک نفر سفارش می‌دهد، دریافت را تأیید می‌کند و پرداخت را هم تأیید می‌کند، می‌تواند خدمت انجام‌نشده را بدون دیده شدن پرداخت کند. در گزینه‌های دیگر هر گام با فرد متفاوتی است.',
        en: 'When one person orders, confirms receipt and approves payment, they can pay for work never done without anyone noticing. In the other options each step sits with a different person.',
      },
    },
    {
      q: {
        fa: 'تطبیق سه‌طرفه کدام سه چیز را با هم مقایسه می‌کند؟',
        en: 'What three things does the three-way match compare?',
      },
      options: [
        { fa: 'بودجه، برآورد و هزینه واقعی', en: 'Budget, estimate and actual cost' },
        { fa: 'اعلان، دستور کار و تسویه', en: 'Notification, work order and settlement' },
        { fa: 'درخواست خرید، سفارش و پرداخت', en: 'Requisition, PO and payment' },
        { fa: 'سفارش خرید، رسید کالا یا SES، و فاکتور', en: 'Purchase order, goods receipt or SES, and invoice' },
      ],
      answer: 3,
      explain: {
        fa: 'فاکتور فقط وقتی پرداخت می‌شود که با آنچه سفارش داده شده (سفارش) و آنچه واقعاً رسیده یا انجام شده (رسید یا SES) در مقدار و قیمت جور باشد. پرداخت نتیجه تطبیق است، نه یکی از سه پایه آن.',
        en: 'An invoice is paid only when it agrees in quantity and price with what was ordered (PO) and what was actually received or performed (receipt or SES). Payment is the result of the match, not one of its legs.',
      },
    },
    {
      q: {
        fa: 'مانده بستانکار حساب GR/IR معمولاً چه معنایی دارد؟',
        en: 'What does a credit balance on the GR/IR account usually mean?',
      },
      options: [
        { fa: 'فاکتور رسیده اما کالا یا خدمت نرسیده', en: 'An invoice has arrived but the goods or service have not' },
        { fa: 'کالا یا خدمت رسیده و تأیید شده اما فاکتورش هنوز ثبت نشده', en: 'Goods or services were received and approved but not yet invoiced' },
        { fa: 'پرداخت دو بار انجام شده', en: 'A payment was made twice' },
        { fa: 'موجودی انبار کمتر از واقع است', en: 'Inventory is understated' },
      ],
      answer: 1,
      explain: {
        fa: 'رسید یا SES حساب GR/IR را بستانکار می‌کند و فاکتور آن را بدهکار. پس مانده بستانکار یعنی رسیده اما فاکتور نشده. فاکتورِ بی‌رسید برعکس، مانده بدهکار می‌سازد.',
        en: 'A receipt or SES credits GR/IR and the invoice debits it, so a credit balance means received but not invoiced. An invoice without a receipt does the opposite and leaves a debit balance.',
      },
    },
    {
      q: {
        fa: 'هزینه واقعی سالانه یک گروه 1,500,000 است و 7,000 ساعت با نرخ 200 روی دستورهای کار تأیید شده است. چه مبلغی جذب‌نشده مانده است؟',
        en: 'A crew’s actual annual cost is 1,500,000 and 7,000 hours were confirmed on work orders at a rate of 200. How much is unabsorbed?',
      },
      options: [
        { fa: '1,400,000', en: '1,400,000' },
        { fa: 'هیچ', en: 'Nothing' },
        { fa: '100,000', en: '100,000' },
        { fa: '7,500', en: '7,500' },
      ],
      answer: 2,
      explain: {
        fa: 'جذب‌شده = 7,000 × 200 = 1,400,000؛ جذب‌نشده = 1,500,000 − 1,400,000 = 100,000. عدد 1,400,000 مبلغ جذب‌شده است، نه باقی‌مانده.',
        en: 'Absorbed = 7,000 × 200 = 1,400,000; unabsorbed = 1,500,000 − 1,400,000 = 100,000. 1,400,000 is the absorbed amount, not what is left.',
      },
    },
    {
      q: {
        fa: 'کدام تسویه دستور کار یک سند واقعی در دفتر کل می‌سازد که دارایی را در ترازنامه افزایش می‌دهد؟',
        en: 'Which work order settlement creates a real general ledger document that increases an asset on the balance sheet?',
      },
      options: [
        { fa: 'تسویه دستور کار تعمیری به مرکز هزینه ایستگاه', en: 'Settling a repair work order to the station cost centre' },
        { fa: 'تسویه دستور کار به مرکز هزینه دیگری در همان میدان', en: 'Settling a work order to another cost centre in the same field' },
        { fa: 'انتقال هزینه میان دو چاه', en: 'Reposting cost between two wells' },
        { fa: 'تسویه دستور کار تعمیر اساسی سرمایه‌ای به دارایی در جریان تکمیل', en: 'Settling a capital overhaul work order to assets under construction' },
      ],
      answer: 3,
      explain: {
        fa: 'تسویه به AUC هزینه را از سود و زیان به ترازنامه می‌برد (بدهکار AUC / بستانکار هزینه نگهداری منتقل‌شده به دارایی). تسویه به مرکز هزینه یا میان چاه‌ها فقط در حسابداری مدیریت جابه‌جا می‌شود و جمع دفتر کل را تغییر نمی‌دهد.',
        en: 'Settling to AUC moves cost from profit or loss to the balance sheet (Dr AUC / Cr Maintenance costs capitalised). Settling to a cost centre or between wells only moves cost in management accounting and leaves the GL total unchanged.',
      },
    },
  ],
}
