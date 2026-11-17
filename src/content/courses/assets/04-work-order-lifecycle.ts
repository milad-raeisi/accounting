import type { L, Lesson } from '../../types'

/*
 * Running example (shared with the rest of the assets course): Masar Petroleum (MP01), Arya field.
 * Main case: notification N-10233 and work order WO-40017, replacing the non-drive-end bearing of compressor K-101
 * after the vibration alert seen in the maintenance-strategies lesson.
 * Cost centres: CC-ARY-CMP compressor station, CC-ARY-PRD production station, CC-ARY-MNT mechanical crew (200 per hour),
 * CC-ARY-INS instrument crew (180 per hour). JV interests (illustrative): Masar Petroleum 50%, Alborz Energy 30%, Dena Petroleum 20%.
 * Work-order costs post to expense with the work order as cost object; settlement moves them to the receiver.
 */

/** Short bilingual string helper. */
const t = (fa: string, en: string): L => ({ fa, en })

const wo = (n: string) => ({
  mat: t(`هزینه قطعات و مواد نگهداری (${n})`, `Maintenance materials expense (${n})`),
  svc: t(`هزینه خدمات پیمانکاران (${n})`, `Contractor services expense (${n})`),
  lab: t(`هزینه دستمزد داخلی نگهداری (${n})`, `Internal maintenance labour (${n})`),
  sender: t(`هزینه نگهداری: فرستنده ${n} (تسویه‌شده)`, `Maintenance cost: sender ${n} (settled)`),
})
const ac = {
  inventory: t('موجودی قطعات یدکی', 'Inventory: spare parts'),
  grir: t('حساب واسط رسید کالا و فاکتور (GR/IR)', 'GR/IR clearing account'),
  ap: t('حساب‌های پرداختنی', 'Accounts payable'),
  mechAlloc: t('دستمزد تخصیص‌یافته: گروه مکانیک (CC-ARY-MNT)', 'Labour cost allocated: mechanical crew (CC-ARY-MNT)'),
  instAlloc: t('دستمزد تخصیص‌یافته: گروه ابزار دقیق (CC-ARY-INS)', 'Labour cost allocated: instrument crew (CC-ARY-INS)'),
  capMaint: t('هزینه نگهداری منتقل‌شده به دارایی (کاهنده هزینه)', 'Maintenance costs capitalised (contra expense)'),
}
/** Settlement receiver with recovery flag R and cost category Operating. */
const receiver = (fa: string, en: string) => t(`هزینه تعمیر و نگهداری: گیرنده ${fa} (R، عملیاتی)`, `Repairs and maintenance: receiver ${en} (R, Operating)`)
const w17 = wo('WO-40017')
const w50 = wo('WO-40150')
const w200 = wo('WO-40200')

export const lesson: Lesson = {
  slug: 'work-order-lifecycle',
  number: 4,
  level: 'intermediate',
  minutes: 30,
  icon: 'NotebookPen',
  tone: 'expense',
  title: t('چرخه عمر دستور کار', 'The Work Order Lifecycle'),
  summary: t(
    'یک دستور کار واقعی را از اعلان تا تسویه دنبال کنید: برنامه‌ریزی کار، نیروی انسانی، قطعات و خدمات، تأیید، زمان‌بندی، اجرا، تکمیل فنی و تسویه؛ و ببینید ERP هزینه‌های دستور کار را با حواله، GRN، SES و تأیید زمان چطور ثبت می‌کند و با تسویه به مرکز هزینه، چاه یا AFE با پرچم بازیافت هزینه می‌برد.',
    'Follow a real work order from notification to settlement: planning the tasks, labour, materials and services, approval, scheduling, execution, technical completion and settlement; and see how the ERP records the costs through goods issues, GRNs, SESs and time confirmations, then settles them to a cost centre, well or AFE with a cost-recovery flag.',
  ),
  objectives: [
    t('مراحل چرخه عمر دستور کار و سند ERP هر مرحله را نام ببرید', 'Name the stages of the work order lifecycle and the ERP document at each stage'),
    t('برآورد هزینه دستور کار را از ساعت کار، قطعات و خدمات بسازید', 'Build a work-order cost estimate from labour hours, parts and services'),
    t('اثر حواله، برگشت به انبار، GRN، SES و تأیید زمان را در مالی توضیح دهید', 'Explain the Finance effect of goods issues, returns, GRNs, SESs and time confirmations'),
    t('هزینه واقعی دستور کار و انحراف آن از برآورد را حساب کنید', 'Calculate a work order’s actual cost and its variance from the estimate'),
    t('سند تسویه را به مرکز هزینه، چاه یا AFE با پرچم بازیافت هزینه بنویسید', 'Write the settlement to a cost centre, well or AFE with a cost-recovery flag'),
  ],
  sections: [
    {
      id: 'why-work-orders',
      title: t('دستور کار: ستون فقرات نگهداری', 'The Work Order: Backbone of Maintenance'),
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در درس «راهبردهای نگهداری و تعمیرات» دیدیم که لرزش یاتاقان سمت غیرمحرک کمپرسور `K-101` در پایش ماهانه به 5.1 میلی‌متر بر ثانیه رسید و ERP یک اعلان ساخت. از این لحظه تا وقتی هزینه تعمیر در دفاتر، روی مرکز هزینه درست و با پرچم بازیافت بنشیند، همه چیز از یک سند می‌گذرد: **دستور کار (Work Order)**.',
            en: 'In the lesson on maintenance strategies we saw the non-drive-end bearing vibration of compressor `K-101` reach 5.1 mm/s in the monthly survey, and the ERP raised a notification. From this moment until the repair cost sits in the books on the right cost centre with a recovery flag, everything flows through one document: the **work order**.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**دستور کار** سندی در ERP است که می‌گوید چه کاری، روی کدام تجهیز، توسط چه کسی، با چه قطعات و خدماتی و با چه بودجه‌ای انجام شود. دستور کار هم **برنامه** کار است و هم **موضوع هزینه**: همه هزینه‌های واقعی کار با ارجاع به آن ثبت می‌شوند و در پایان به گیرنده نهایی تسویه می‌شوند.',
            en: 'A **work order** is an ERP document that says what work is to be done, on which equipment, by whom, with which parts and services, and with what budget. It is both the **plan** for the job and a **cost object**: every actual cost of the job is posted against it and, at the end, settled to the final receiver.',
          },
        },
        {
          type: 'diagram',
          id: 'work-order-flow',
          caption: t(
            'چرخه عمر دستور کار: اعلان، برنامه‌ریزی، تأیید، زمان‌بندی، اجرا، تکمیل فنی و تسویه به موضوع‌های هزینه.',
            'The work-order lifecycle: notification, planning, approval, scheduling, execution, technical completion and settlement to cost objects.',
          ),
        },
        {
          type: 'table',
          caption: t('مراحل، نقش‌ها و اثر مالی', 'Stages, roles and Finance effect'),
          head: [t('مرحله', 'Stage'), t('چه کسی', 'Who'), t('وضعیت در ERP', 'ERP status'), t('سند مالی؟', 'Finance posting?')],
          rows: [
            [t('اعلان', 'Notification'), t('بهره‌برداری', 'Operations'), t('اعلان باز', 'Notification open'), t('ندارد', 'None')],
            [t('برنامه‌ریزی', 'Planning'), t('برنامه‌ریز نگهداری', 'Maintenance planner'), t('ایجادشده', 'Created'), t('ندارد (فقط هزینه برآوردی)', 'None (estimated cost only)')],
            [t('تأیید', 'Approval'), t('سرپرست یا مدیر، بر پایه سقف مبلغ', 'Supervisor or manager, by amount limit'), t('تأییدشده', 'Approved'), t('ندارد', 'None')],
            [
              t('زمان‌بندی و آزادسازی', 'Scheduling and release'),
              t('زمان‌بند و بهره‌برداری', 'Scheduler and operations'),
              t('آزادشده', 'Released'),
              t('ندارد (رزرو و درخواست خرید فعال می‌شود)', 'None (reservations and requisitions become active)'),
            ],
            [
              t('اجرا', 'Execution'),
              t('تکنسین‌ها، انبار، پیمانکار', 'Technicians, warehouse, contractor'),
              t('در حال اجرا', 'In progress'),
              t('دارد: حواله، GRN، SES، تأیید زمان', 'Yes: goods issues, GRNs, SESs, time confirmations'),
            ],
            [
              t('تکمیل فنی', 'Technical completion'),
              t('سرپرست نگهداری', 'Maintenance supervisor'),
              t('تکمیل فنی', 'Technically complete'),
              t('ندارد (فاکتورهای دیرهنگام هنوز ممکن است برسند)', 'None (late invoices may still arrive)'),
            ],
            [t('تسویه و بستن', 'Settlement and close'), t('مالی (حسابداری بهای تمام‌شده)', 'Finance (cost accounting)'), t('بسته', 'Closed'), t('دارد: سند تسویه', 'Yes: the settlement')],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('دو نوع کار، یک مسیر', 'Two kinds of work, one path'),
          text: {
            fa: 'دستور کارهای پیشگیرانه را برنامه نگهداری خودکار می‌سازد؛ دستور کارهای اصلاحی از اعلان شروع می‌شوند. از مرحله برنامه‌ریزی به بعد، هر دو یک مسیر را طی می‌کنند.',
            en: 'Preventive work orders are generated automatically by maintenance plans; corrective work orders start from a notification. From planning onwards, both follow the same path.',
          },
        },
      ],
    },
    {
      id: 'notification-planning',
      title: t('اعلان و برنامه‌ریزی', 'Notification and Planning'),
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**اعلان (Notification)** یا «درخواست کار» گزارش یک عیب یا نیاز است. هر کسی در میدان می‌تواند آن را ثبت کند، اما یک اعلان خوب این‌ها را دارد: مکان عملیاتی یا تجهیز، شرح کوتاه و روشن عیب، زمان شروع عیب، اثر بر تولید و ایمنی، و **اولویت**. اعلان `N-10233` برای K-101 این‌طور ثبت شد: «لرزش یاتاقان سمت غیرمحرک 5.1 میلی‌متر بر ثانیه (حد هشدار 4.5) با روند افزایشی؛ کمپرسور با بار کامل در حال کار».',
            en: 'A **notification** (or "work request") reports a defect or need. Anyone in the field can raise one, but a good notification includes: the functional location or equipment, a short clear description, when the defect started, the effect on production and safety, and a **priority**. Notification `N-10233` for K-101 was recorded as: "Non-drive-end bearing vibration 5.1 mm/s (alert limit 4.5), rising trend; compressor running at full load."',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'مسار پترولیوم چهار کد اولویت دارد: **P1 اضطراری** (فوری)، **P2 فوری** (شروع ظرف 3 روز)، **P3 عادی** (ظرف 4 هفته) و **P4 توقف یا فرصت** (در توقف برنامه‌ریزی‌شده بعدی). N-10233 اولویت P2 گرفت. نحوه تعیین اولویت با ماتریس ریسک را در درس «برنامه‌ریزی نگهداری و قطعات یدکی» می‌بینیم.',
            en: 'Masar Petroleum uses four priority codes: **P1 emergency** (immediately), **P2 urgent** (start within 3 days), **P3 routine** (within 4 weeks) and **P4 shutdown or opportunity** (next planned shutdown). N-10233 was given P2. How priorities are set with a risk matrix is covered in the lesson on maintenance planning and spare parts.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'برنامه‌ریز نگهداری اعلان را بررسی و دستور کار `WO-40017` را از روی آن می‌سازد. **برنامه‌ریزی** یعنی آماده کردن همه چیز پیش از شروع کار، تا تکنسین وقتی سر کار می‌رود منتظر قطعه، ابزار یا مجوز نماند. دستور کار چهار بخش اصلی دارد:',
            en: 'The maintenance planner reviews the notification and creates work order `WO-40017` from it. **Planning** means preparing everything before work starts, so that technicians on the job never wait for parts, tools or permits. A work order has four main parts:',
          },
        },
        {
          type: 'list',
          items: [
            t(
              '**گام‌ها (Operations)**: هر گام یک مرکز کار (گروه فنی)، تعداد نفر و ساعت دارد؛ مثلاً «تعویض یاتاقان: گروه مکانیک، 3 نفر × 8 ساعت».',
              '**Operations (tasks)**: each step has a work centre (crew), headcount and hours, for example "replace bearing: mechanical crew, 3 people × 8 hours".',
            ),
            t(
              '**نیروی انسانی**: ساعت هر گروه با **نرخ فعالیت** همان مرکز کار قیمت‌گذاری می‌شود: گروه مکانیک 200 و گروه ابزار دقیق 180 در ساعت. مالی این نرخ‌ها را هر سال از هزینه کارکنان و سربار گروه حساب می‌کند (درس «یکپارچگی نگهداری با ERP: از خرابی تا تسویه»).',
              '**Labour**: each crew’s hours are priced at that work centre’s **activity rate**: 200 an hour for the mechanical crew and 180 for the instrument crew. Finance sets these rates each year from the crew’s personnel cost and overhead (see the lesson on EAM and ERP integration).',
            ),
            t(
              '**قطعات و مواد**: اقلام انباری از BOM انتخاب و **رزرو** می‌شوند؛ برای اقلام غیرانباری **درخواست خرید** ساخته می‌شود که بعداً با **رسید کالا (GRN)** مستقیم به دستور کار تحویل می‌شود.',
              '**Materials**: stock items are picked from the BOM and **reserved**; **purchase requisitions** are created for non-stock items, which are later received straight to the work order with a **goods received note (GRN)**.',
            ),
            t(
              '**خدمات بیرونی**: کار پیمانکار (مثلاً مهندس سرویس سازنده) با درخواست خرید خدمات و سفارش خرید تأمین و پس از انجام با **برگه ثبت خدمات (SES)** پذیرفته می‌شود.',
              '**External services**: contractor work (for example the manufacturer’s service engineer) is sourced through a service requisition and purchase order, and accepted after the work on a **service entry sheet (SES)**.',
            ),
          ],
        },
        {
          type: 'table',
          caption: t('برآورد هزینه WO-40017', 'Cost estimate for WO-40017'),
          head: [t('ردیف', 'Line'), t('شرح', 'Detail'), t('مقدار', 'Quantity'), t('نرخ', 'Rate'), t('هزینه برآوردی', 'Planned cost')],
          rows: [
            [t('گام 20: تعویض یاتاقان و لنت کف‌گرد (گروه مکانیک)', 'Op 20: replace bearing and thrust pads (mechanical crew)'), t('3 نفر × 8 ساعت', '3 people × 8 hours'), 24, 200, 4800],
            [t('گام 30: بررسی و کالیبراسیون پراب‌های لرزش (ابزار دقیق)', 'Op 30: check and calibrate vibration probes (instrument crew)'), t('1 نفر × 5 ساعت', '1 person × 5 hours'), 5, 180, 900],
            [t('ست یاتاقان ژورنال (MAT-500310)', 'Journal bearing set (MAT-500310)'), t('رزرو از انبار میدان', 'Reserved from the Field Warehouse'), 2, 12000, 24000],
            [t('ست لنت یاتاقان کف‌گرد (MAT-500320)', 'Thrust pad set (MAT-500320)'), t('رزرو از انبار میدان', 'Reserved from the Field Warehouse'), 1, 8000, 8000],
            [t('بسته اورینگ و آب‌بند (MAT-500330)', 'O-ring and seal kit (MAT-500330)'), t('رزرو از انبار میدان', 'Reserved from the Field Warehouse'), 2, 600, 1200],
            [t('گام 40: مهندس سرویس سازنده', 'Op 40: OEM service engineer'), t('سفارش خرید خدمات؛ پذیرش با SES', 'Service purchase order; accepted on an SES'), 1, 6000, 6000],
            [t('جمع برآورد', 'Total estimate'), t('', ''), t('', ''), t('', ''), 44900],
          ],
          numericCols: [2, 3, 4],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل: برنامه‌ریزی خوب', 'In practice: good planning'),
          text: {
            fa: 'برنامه‌ریز خوب پیش از آزادسازی، موجودی قطعات را در ERP کنترل می‌کند، مجوز کار و ایزوله‌سازی را با بهره‌برداری هماهنگ می‌کند و از دستورالعمل‌های کار استاندارد استفاده می‌کند. هر ساعتی که صرف برنامه‌ریزی شود، چند ساعت انتظار و سردرگمی را در میدان حذف می‌کند.',
            en: 'Before release, a good planner checks parts availability in the ERP, agrees the permit to work and isolation with operations, and reuses standard task lists. Every hour spent planning removes several hours of waiting and confusion in the field.',
          },
        },
      ],
    },
    {
      id: 'approval-scheduling',
      title: t('تأیید و زمان‌بندی', 'Approval and Scheduling'),
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'پیش از اینکه دستور کار بتواند هزینه ایجاد کند، باید **تأیید** شود. ERP بر پایه مبلغ برآورد و نوع کار، دستور کار را با **گردش کار تأیید** به فرد مناسب می‌فرستد. سقف‌های زیر نمونه‌ای از ماتریس اختیارات مسار پترولیوم است (اعداد فرضی):',
            en: 'Before a work order can incur cost it must be **approved**. Based on the estimate and type of work, the ERP routes it through an **approval workflow** to the right person. The limits below are an example of Masar Petroleum’s authority matrix (illustrative figures):',
          },
        },
        {
          type: 'table',
          caption: t('سقف تأیید دستور کار', 'Work-order approval limits'),
          head: [t('برآورد هزینه', 'Estimated cost'), t('تأییدکننده', 'Approver'), t('توضیح', 'Note')],
          rows: [
            [t('تا 25,000', 'Up to 25,000'), t('سرپرست نگهداری ایستگاه', 'Station maintenance supervisor'), t('بیشتر کارهای روزمره', 'Most routine jobs')],
            [t('25,000 تا 100,000', '25,000 to 100,000'), t('مدیر نگهداری میدان', 'Field maintenance manager'), t('WO-40017 با برآورد 44,900 در این رده است', 'WO-40017, estimated at 44,900, is in this band')],
            [t('بیشتر از 100,000', 'Above 100,000'), t('مدیر دارایی و کنترل مالی', 'Asset manager and financial control'), t('بررسی بودجه و ریسک', 'Budget and risk review')],
            [t('هر مبلغ، کار سرمایه‌ای', 'Any amount, capital work'), t('فقط با AFE تصویب‌شده', 'Only with an approved AFE'), t('و تأیید شرکا هرجا قرارداد مشارکت بخواهد', 'and partner approval where the JV agreement requires it')],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('خرد کردن دستور کار', 'Splitting work orders'),
          text: {
            fa: 'شکستن یک کار 44,900 به دو دستور کار زیر 25,000 برای دور زدن سقف تأیید، تخلف کنترل داخلی است. حسابرسان شرکا دقیقاً به دنبال همین الگو می‌گردند: چند دستور کار هم‌زمان روی یک تجهیز، هر کدام کمی زیر سقف.',
            en: 'Splitting a 44,900 job into two work orders under 25,000 to get around the approval limit is an internal-control breach. Partner auditors look for exactly this pattern: several simultaneous work orders on one item, each just under the limit.',
          },
        },
        { type: 'h', text: t('زمان‌بندی', 'Scheduling') },
        {
          type: 'p',
          text: {
            fa: '**زمان‌بندی** یعنی تعیین روز و ساعت انجام کار. زمان‌بند هفتگی، دستور کارهای تأییدشده و آماده (قطعه موجود، مجوز آماده) را بر پایه اولویت، ظرفیت گروه‌ها و برنامه بهره‌برداری در **برنامه هفتگی** قرار می‌دهد. برای K-101، بهره‌برداری پذیرفت بار را سه روز بعد روی K-102 ببرد تا K-101 برای یک روز و نیم متوقف شود. با **آزادسازی** دستور کار، رزروها برای انبار قابل برداشت می‌شوند و درخواست خرید خدمات برای تدارکات فعال می‌شود؛ اما هنوز هیچ سند مالی زده نمی‌شود.',
            en: '**Scheduling** fixes the day and time of the work. The weekly scheduler places approved, ready work orders (parts available, permit ready) into the **weekly schedule** based on priority, crew capacity and the operations plan. For K-101, operations agreed to shift the load to K-102 three days later so that K-101 could stop for a day and a half. **Releasing** the work order makes the reservations available for picking in the warehouse and activates the service requisition for procurement; still, no Finance entry is posted.',
          },
        },
        {
          type: 'formula',
          text: t(
            'رعایت برنامه (٪) = ساعت‌های برنامه‌ریزی‌شده‌ای که طبق برنامه انجام شد ÷ کل ساعت‌های برنامه‌ریزی‌شده × 100',
            'Schedule compliance (%) = scheduled hours completed as scheduled ÷ total scheduled hours × 100',
          ),
          note: t(
            'مثال: گروه مکانیک در یک هفته 240 ساعت کار برنامه‌ریزی‌شده داشت و 204 ساعت آن طبق برنامه انجام شد: 204 ÷ 240 × 100 = 85٪.',
            'Example: the mechanical crew had 240 scheduled hours in a week and completed 204 of them as scheduled: 204 ÷ 240 × 100 = 85%.',
          ),
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('در عمل: شاخص‌های زمان‌بندی', 'In practice: scheduling indicators'),
          text: {
            fa: 'اگر بیشتر وقت گروه‌ها صرف کارهای اضطراری شود، برنامه هفتگی بی‌معنا می‌شود و این نشانه‌ای است که راهبردهای نگهداری کار نمی‌کنند. در کنار رعایت برنامه، **نسبت کار برنامه‌ریزی‌شده** و **حجم کار معوق (Backlog)** هم هر هفته بررسی می‌شوند؛ جزئیات آن‌ها در درس «برنامه‌ریزی نگهداری و قطعات یدکی» آمده است.',
            en: 'If crews spend most of their time on emergencies, the weekly schedule becomes meaningless, a sign that the maintenance strategies are not working. Alongside schedule compliance, the **planned-work ratio** and the **backlog** are reviewed weekly; the lesson on maintenance planning and spare parts covers them in detail.',
          },
        },
      ],
    },
    {
      id: 'execution-completion',
      title: t('اجرا و تکمیل فنی', 'Execution and Technical Completion'),
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در روز اجرا، چهار نوع تراکنش با ارجاع به دستور کار ثبت می‌شود و **هر کدام خودکار یک سند مالی می‌سازد**:',
            en: 'On the day of execution, four kinds of transaction are recorded against the work order, and **each one creates a Finance entry automatically**:',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: t('حواله و برگشت به انبار', 'Goods issue and return'),
              text: t(
                'انباردار انبار میدان کالاهای رزروشده را با ارجاع به WO-40017 تحویل می‌دهد: 2 ست یاتاقان، 1 ست لنت کف‌گرد و 2 بسته آب‌بند به ارزش 33,200. پس از باز کردن کمپرسور معلوم شد یاتاقان سمت محرک سالم است؛ پس یک ست یاتاقان (12,000) با **برگشت به انبار** به موجودی برگشت. مصرف خالص از انبار: 33,200 − 12,000 = 21,200.',
                'The Field Warehouse storekeeper issues the reserved items against WO-40017: 2 bearing sets, 1 thrust pad set and 2 seal kits worth 33,200. Once the compressor was opened, the drive-end bearing turned out to be sound, so one bearing set (12,000) went back to stock with a **return to warehouse**. Net parts consumed from stock: 33,200 − 12,000 = 21,200.',
              ),
            },
            {
              title: t('رسید کالای غیرانباری (GRN)', 'Non-stock goods received note (GRN)'),
              text: t(
                'برای تراز کردن محفظه یاتاقان، یک ست شیم ویژه از سازنده خریده شد که در انبار نگه داشته نمی‌شود. انباردار آن را با **رسید کالا (GRN)** مستقیم به دستور کار تحویل می‌دهد: 1,800. چنین رسیدی به موجودی نمی‌رود؛ مستقیم هزینه دستور کار است.',
                'To align the bearing housing, a special shim set was bought from the OEM; it is not a stock item. The storekeeper receives it straight to the work order on a **goods received note (GRN)**: 1,800. Such a receipt never enters inventory; it is a direct cost of the work order.',
              ),
            },
            {
              title: t('برگه ثبت خدمات (SES)', 'Service entry sheet (SES)'),
              text: t(
                'مهندس سرویس سازنده یک روز کار کرد. سرپرست نگهداری که کار را دیده، **برگه ثبت خدمات (SES)** را به مبلغ 6,000 تأیید می‌کند و برگه ساعت کار امضاشده مهندس را پیوست می‌کند. فاکتور پیمانکار بعداً با سفارش خرید و SES تطبیق داده می‌شود.',
                'The OEM service engineer worked for one day. The maintenance supervisor who saw the work approves the **service entry sheet (SES)** for 6,000 and attaches the engineer’s signed timesheet. The contractor’s invoice is matched later with the purchase order and the SES.',
              ),
            },
            {
              title: t('تأیید زمان', 'Time confirmation'),
              text: t(
                'هر تکنسین ساعت‌های واقعی خود را روی گام مربوط ثبت می‌کند. پیچ‌های محفظه یاتاقان گیر کرده بود و گروه مکانیک به‌جای 24 ساعت، 30 ساعت کار کرد (30 × 200 = 6,000). ابزار دقیق 5 ساعت کار کرد (5 × 180 = 900). در آخرین ثبت هر گام، تأیید «نهایی» زده می‌شود تا ERP بداند گام تمام شده است.',
                'Each technician records actual hours against the relevant operation. The bearing-housing bolts were seized, so the mechanical crew worked 30 hours instead of 24 (30 × 200 = 6,000). The instrument technician worked 5 hours (5 × 180 = 900). The last entry for each operation is marked "final" so the ERP knows it is finished.',
              ),
            },
          ],
        },
        {
          type: 'table',
          caption: t('برآورد در برابر واقعی WO-40017', 'Estimate vs actual for WO-40017'),
          head: [t('جزء هزینه', 'Cost element'), t('برآورد', 'Planned'), t('واقعی', 'Actual'), t('انحراف', 'Variance')],
          rows: [
            [t('دستمزد داخلی', 'Internal labour'), 5700, 6900, t('1,200 بیشتر', '1,200 over')],
            [t('قطعات انباری (پس از برگشت)', 'Stock parts (after return)'), 33200, 21200, t('12,000 کمتر', '12,000 under')],
            [t('قطعات غیرانباری (GRN)', 'Non-stock parts (GRN)'), 0, 1800, t('1,800 بیشتر', '1,800 over')],
            [t('خدمات بیرونی (SES)', 'External services (SES)'), 6000, 6000, t('بدون انحراف', 'None')],
            [t('جمع', 'Total'), 44900, 35900, t('9,000 کمتر', '9,000 under')],
          ],
          numericCols: [1, 2],
        },
        {
          type: 'p',
          text: {
            fa: 'دستمزد 1,200 بیشتر شد (6 ساعت اضافه × 200) و قطعات انباری 12,000 کمتر (یک ست یاتاقان برگشتی). شیم ویژه برنامه‌ریزی نشده بود. تحلیل این انحراف‌ها به برنامه‌ریز کمک می‌کند دستورالعمل کار استاندارد را اصلاح کند؛ مثلاً ست شیم را به BOM اضافه و زمان بیشتری برای باز کردن محفظه در نظر بگیرد.',
            en: 'Labour came in 1,200 over (6 extra hours × 200) and stock parts 12,000 under (one bearing set returned). The special shim set was not planned. Analysing these variances helps the planner improve the standard task list, for example by adding the shim set to the BOM and allowing more time to open the housing.',
          },
        },
        { type: 'h', text: t('تکمیل فنی', 'Technical Completion') },
        {
          type: 'p',
          text: {
            fa: 'وقتی کار در میدان تمام شد، سرپرست نگهداری دستور کار را **تکمیل فنی (Technically Complete)** می‌کند. پیش از آن باید **گزارش فنی** کامل باشد: چه دیده شد، علت خرابی چه بود و چه کاری انجام شد. ERP این‌ها را با **کدهای خرابی** استاندارد می‌گیرد تا بعداً قابل تحلیل باشند. تکمیل فنی یعنی کار فیزیکی تمام است: رزروهای باقی‌مانده حذف می‌شوند و کالای تازه‌ای حواله نمی‌شود. اما فاکتور پیمانکار هنوز ممکن است برسد؛ پس دستور کار تا تسویه نهایی **بسته** نمی‌شود.',
            en: 'When the field work is done, the maintenance supervisor sets the work order to **technically complete**. Before that, the **technical report** must be complete: what was found, what caused the failure and what was done. The ERP captures these with standard **failure codes** so they can be analysed later. Technical completion means the physical work is over: remaining reservations are cancelled and no more parts can be issued. The contractor’s invoice may still arrive, though, so the work order is not **closed** until final settlement.',
          },
        },
        {
          type: 'table',
          caption: t('کدهای خرابی WO-40017', 'Failure codes on WO-40017'),
          head: [t('گروه کد', 'Code group'), t('کد', 'Code'), t('معنا', 'Meaning')],
          rows: [
            [t('بخش آسیب‌دیده', 'Object part'), t('BRG-NDE', 'BRG-NDE'), t('یاتاقان ژورنال سمت غیرمحرک', 'Non-drive-end journal bearing')],
            [t('نوع آسیب', 'Damage'), t('WEAR', 'WEAR'), t('سایش و خط‌افتادگی سطح یاتاقان', 'Wear and scoring of the bearing surface')],
            [t('علت', 'Cause'), t('LUBE', 'LUBE'), t('آلودگی روغن روان‌کاری', 'Lube-oil contamination')],
            [t('اقدام', 'Activity'), t('REPL', 'REPL'), t('تعویض یاتاقان سمت غیرمحرک و لنت‌های کف‌گرد', 'Replaced the non-drive-end bearing and thrust pads')],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل', 'In practice'),
          text: {
            fa: 'پس از تکمیل فنی، اپراتور قرائت لرزش را دوباره ثبت می‌کند (مثلاً 2.4 میلی‌متر بر ثانیه) و اعلان N-10233 هم بسته می‌شود. علت «آلودگی روغن» یعنی کار تمام نشده است: برای بررسی سامانه روغن‌کاری یک **اعلان جدید** بسازید؛ کار جدید را داخل دستور کار در حال اجرا پنهان نکنید.',
            en: 'After technical completion the operator records the vibration again (for example 2.4 mm/s) and notification N-10233 is closed too. A cause of "oil contamination" means the job is not really over: raise a **new notification** to investigate the lube-oil system; do not hide new work inside the running work order.',
          },
        },
      ],
    },
    {
      id: 'costs-settlement',
      title: t('هزینه‌های دستور کار و تسویه در مالی', 'Work-Order Costs and Settlement in Finance'),
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'حالا ببینیم ERP در پشت صحنه چه سندهایی زده است. هر هزینه با ارجاع به WO-40017، به‌عنوان موضوع هزینه، در حساب هزینه مربوط ثبت شده است. در پایان ماه، **تسویه (Settlement)** این هزینه‌ها را بر پایه **قاعده تسویه** دستور کار به گیرنده نهایی منتقل می‌کند.',
            en: 'Now let us see which entries the ERP posted behind the scenes. Every cost was posted to the relevant expense account with WO-40017 as its cost object. At month-end, **settlement** moves these costs to the final receiver according to the work order’s **settlement rule**.',
          },
        },
        {
          type: 'journal',
          title: t('سندهای خودکار ERP برای WO-40017', 'Automatic ERP postings for WO-40017'),
          entries: [
            {
              date: t('حواله انبار', 'Goods issue'),
              lines: [
                { account: w17.mat, debit: 33200 },
                { account: ac.inventory, credit: 33200 },
              ],
              memo: t('2 ست یاتاقان، 1 ست لنت کف‌گرد و 2 بسته آب‌بند', '2 bearing sets, 1 thrust pad set and 2 seal kits'),
            },
            {
              date: t('برگشت به انبار', 'Return to warehouse'),
              lines: [
                { account: ac.inventory, debit: 12000 },
                { account: w17.mat, credit: 12000 },
              ],
              memo: t('یک ست یاتاقان استفاده‌نشده', 'One unused bearing set'),
            },
            {
              date: t('رسید کالای غیرانباری (GRN)', 'Non-stock GRN'),
              lines: [
                { account: w17.mat, debit: 1800 },
                { account: ac.grir, credit: 1800 },
              ],
              memo: t('ست شیم ویژه مستقیم به دستور کار', 'Special shim set received straight to the work order'),
            },
            {
              date: t('تأیید SES', 'SES approved'),
              lines: [
                { account: w17.svc, debit: 6000 },
                { account: ac.grir, credit: 6000 },
              ],
              memo: t('مهندس سرویس سازنده؛ برگه ساعت کار امضاشده پیوست است', 'OEM service engineer; signed timesheet attached'),
            },
            {
              date: t('تأیید زمان', 'Time confirmations'),
              lines: [
                { account: w17.lab, debit: 6900 },
                { account: ac.mechAlloc, credit: 6000 },
                { account: ac.instAlloc, credit: 900 },
              ],
              memo: t('30 × 200 و 5 × 180', '30 × 200 and 5 × 180'),
            },
            {
              date: t('فاکتورهای فروشندگان', 'Vendor invoices'),
              lines: [
                { account: ac.grir, debit: 7800 },
                { account: ac.ap, credit: 7800 },
              ],
              memo: t('شیم 1,800 و خدمات 6,000 پس از تطبیق سه‌طرفه؛ GR/IR صفر می‌شود', 'Shims 1,800 and services 6,000 after the three-way match; GR/IR goes to zero'),
            },
            {
              date: t('تسویه پایان ماه', 'Month-end settlement'),
              lines: [
                { account: receiver('CC-ARY-CMP', 'CC-ARY-CMP'), debit: 35900 },
                { account: w17.sender, credit: 35900 },
              ],
              memo: t('33,200 − 12,000 + 1,800 + 6,000 + 6,900 = 35,900', '33,200 − 12,000 + 1,800 + 6,000 + 6,900 = 35,900'),
            },
          ],
        },
        {
          type: 'tAccounts',
          title: t('هزینه‌های WO-40017 و حساب واسط GR/IR', 'Costs on WO-40017 and the GR/IR clearing account'),
          accounts: [
            { name: t('هزینه‌های ثبت‌شده روی WO-40017', 'Costs posted on WO-40017'), debits: [33200, 1800, 6000, 6900], credits: [12000, 35900] },
            { name: t('حساب واسط GR/IR', 'GR/IR clearing account'), debits: [7800], credits: [1800, 6000] },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('سه نکته درباره این سندها', 'Three notes on these postings'),
          text: {
            fa: '(1) **دستمزد تخصیص‌یافته**: حقوق تکنسین‌ها پیش‌تر با سند حقوق ماهانه هزینه مرکز هزینه گروه شده است؛ تأیید زمان آن را با نرخ فعالیت به دستور کار می‌آورد و بستانکار «دستمزد تخصیص‌یافته» آن را از گروه کم می‌کند تا یک هزینه دو بار شمرده نشود. (2) **تسویه به مرکز هزینه** جمع هزینه‌ها را در دفتر کل تغییر نمی‌دهد؛ فقط موضوع هزینه را از دستور کار به CC-ARY-CMP می‌برد. (3) اگر تا پایان ماه کار انجام و GRN یا SES ثبت شده اما فاکتور نرسیده باشد، مانده بستانکار GR/IR همان **«دریافت‌شده، فاکتورنشده»** است که در تطبیق GR/IR و اقلام تعهدی پایان ماه بررسی می‌شود.',
            en: '(1) **Labour allocated**: the technicians’ salaries were already expensed to the crew’s cost centre by the monthly payroll entry; the time confirmation brings that cost to the work order at the activity rate, and the "labour cost allocated" credit takes it off the crew so the same cost is not counted twice. (2) **Settlement to a cost centre** does not change total expenses in the general ledger; it only moves the cost object from the work order to CC-ARY-CMP. (3) If the work was done and the GRN or SES posted by month-end but the invoice has not arrived, the GR/IR credit balance is exactly the **"received, not invoiced"** amount reviewed in the GR/IR reconciliation and month-end accruals.',
          },
        },
        { type: 'h', text: t('قاعده تسویه و گیرنده‌ها', 'Settlement Rules and Receivers') },
        {
          type: 'p',
          text: {
            fa: '**قاعده تسویه** می‌گوید هزینه دستور کار به کجا برود. برنامه‌ریز آن را هنگام ساخت دستور کار پیشنهاد می‌دهد (اغلب از مکان عملیاتی به ارث می‌رسد) و حسابدار بهای تمام‌شده پیش از تسویه کنترل می‌کند. گیرنده‌های رایج در بالادستی:',
            en: 'The **settlement rule** says where the work order’s cost goes. The planner proposes it when creating the work order (it is often inherited from the functional location) and the cost accountant checks it before settlement. Common receivers in upstream:',
          },
        },
        {
          type: 'table',
          caption: t('گیرنده‌های تسویه و پرچم بازیافت', 'Settlement receivers and recovery flags'),
          head: [t('گیرنده', 'Receiver'), t('چه زمانی', 'When'), t('نمونه', 'Example'), t('پرچم و طبقه هزینه', 'Flag and cost category')],
          rows: [
            [t('مرکز هزینه', 'Cost centre'), t('کار عملیاتی روی تأسیسات مشترک', 'Operating work on shared facilities'), t('تعمیر K-101 به CC-ARY-CMP', 'K-101 repair to CC-ARY-CMP'), t('R، عملیاتی', 'R, Operating')],
            [t('چاه', 'Well'), t('کار عملیاتی روی یک چاه مشخص', 'Operating work on a specific well'), t('تعمیر شیر سرچاهی AR-07', 'Wellhead valve repair on AR-07'), t('R، عملیاتی', 'R, Operating')],
            [
              t('عنصر WBS یک AFE', 'WBS element of an AFE'),
              t('کار سرمایه‌ای: نصب، ارتقا، تعمیر اساسی سرمایه‌ای', 'Capital work: installation, upgrade, capitalised overhaul'),
              t('نصب اسکرابر جدید با AFE-2026-010.01', 'New scrubber installation on AFE-2026-010.01'),
              t('R، توسعه (به دارایی در جریان تکمیل)', 'R, Development (to assets under construction)'),
            ],
            [
              t('چند گیرنده (تسهیم)', 'Several receivers (split)'),
              t('کار روی تأسیسات مشترک چند چاه', 'Work on facilities shared by several wells'),
              t('60٪ به AR-03 و 40٪ به AR-05', '60% to AR-03 and 40% to AR-05'),
              t('R، عملیاتی', 'R, Operating'),
            ],
            [
              t('مرکز هزینه با پرچم N', 'Cost centre with flag N'),
              t('هزینه‌ای که قرارداد مستثنا کرده است', 'Cost the contract excludes'),
              t('تعمیر خسارتی که جبران آن طبق قرارداد غیرقابل بازیافت است (فرضی)', 'Repairing damage whose cost the contract treats as non-recoverable (illustrative)'),
              t('N، عملیاتی', 'N, Operating'),
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('پرچم بازیافت و کدگذاری مشترک', 'Recovery flag and shared coding'),
          text: {
            fa: 'هر سطر تسویه کدگذاری کامل دارد: کد شرکت MP01، مرکز هزینه یا عنصر WBS، حساب کل، **پرچم بازیافت** (R یا N) و **طبقه هزینه** (اکتشاف، توسعه یا عملیاتی). اینکه چه هزینه‌ای غیرقابل بازیافت است را قرارداد نفتی و پیوست حسابداری آن تعیین می‌کند؛ نمونه‌های رایج: جریمه‌ها، هزینه‌های بدون مدرک کافی و هزینه‌هایی که قرارداد صریحاً مستثنا کرده است. دستور کار کامل با ساعت‌ها، حواله‌ها، GRN، SES همراه برگه‌های امضاشده و گزارش فنی، همان مدرکی است که حسابرس دولت یا شریک می‌خواهد.',
            en: 'Every settlement line carries the full coding: company code MP01, cost centre or WBS element, GL account, a **recovery flag** (R or N) and a **cost category** (Exploration, Development or Operating). What is non-recoverable is set by the petroleum contract and its accounting procedure; common examples are fines, costs without adequate support, and costs the contract expressly excludes. A complete work order, with hours, goods issues, GRNs, SESs with their signed sheets, and a technical report, is exactly the evidence a government or partner auditor asks for.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('در عمل: صورت‌حساب شرکا', 'In practice: partner billing'),
          text: {
            fa: 'پس از تسویه، هزینه‌های عملیاتی میدان در گزارش ماهانه **صورت‌حساب مشترک (Joint Interest Billing)** به نسبت سهم هر شریک تقسیم می‌شوند. با سهم‌های فرضی این دوره، از 35,900 هزینه WO-40017، انرژی البرز 30٪ یعنی 10,770 و نفت دنا 20٪ یعنی 7,180 را می‌پردازد و سهم مسار پترولیوم 50٪ یعنی 17,950 است. به همین دلیل گیرنده یا پرچم اشتباه، مستقیم صورت‌حساب شرکا را اشتباه می‌کند.',
            en: 'After settlement, the field’s operating costs are shared among the partners in the monthly **joint interest billing** statement according to each partner’s interest. With this course’s illustrative interests, of the 35,900 on WO-40017, Alborz Energy pays 30%, or 10,770, Dena Petroleum 20%, or 7,180, and Masar Petroleum’s 50% share is 17,950. That is why a wrong receiver or flag makes the partner billing wrong too.',
          },
        },
      ],
    },
    {
      id: 'practice-and-mistakes',
      title: t('در عمل و اشتباه‌های رایج', 'In Practice and Common Mistakes'),
      blocks: [
        {
          type: 'callout',
          tone: 'info',
          title: t('در عمل: بستن ماه', 'In practice: month-end close'),
          text: {
            fa: 'در بستن ماه، حسابدار بهای تمام‌شده دستور کارهای دارای هزینه و بدون قاعده تسویه را پیدا می‌کند؛ دستور کارهای قدیمیِ باز را با نگهداری پیگیری می‌کند؛ تسویه دوره‌ای همه دستور کارها را اجرا می‌کند (حتی دستور کارهای در حال اجرا، تا هزینه هر ماه در همان ماه دیده شود)؛ و GRN و SESهای فاکتورنشده را در تطبیق GR/IR بررسی می‌کند. هر مانده تسویه‌نشده باید توضیح داشته باشد.',
            en: 'At month-end close the cost accountant finds work orders with costs but no settlement rule; chases old open work orders with maintenance; runs periodic settlement for all work orders (including those still in progress, so each month’s cost appears in that month); and reviews uninvoiced GRNs and SESs in the GR/IR reconciliation. Any balance left unsettled must be explained.',
          },
        },
        { type: 'h', text: t('اشتباه‌های رایج', 'Common Mistakes') },
        {
          type: 'list',
          items: [
            t(
              '**کار بدون دستور کار یا با دستور کار «سبد».** یک دستور کار عمومی ماهانه برای «تعمیرات متفرقه ایستگاه» هزینه را از تجهیز جدا و تاریخچه را بی‌معنا می‌کند.',
              '**Work without a work order, or on a "bucket" order.** A monthly general order for "station miscellaneous repairs" separates cost from equipment and makes the history meaningless.',
            ),
            t(
              '**ثبت نکردن ساعت‌ها یا ثبت دسته‌جمعی در پایان ماه.** هزینه دستمزد در مرکز هزینه گروه می‌ماند یا به دستور کار اشتباه می‌رود.',
              '**Not confirming hours, or confirming them in bulk at month-end.** Labour cost stays in the crew’s cost centre or lands on the wrong order.',
            ),
            t(
              '**برنگرداندن قطعه استفاده‌نشده به انبار.** قطعه در کارگاه گم می‌شود، هزینه دستور کار بیش از واقع و موجودی انبار کمتر از واقع نشان داده می‌شود.',
              '**Not returning unused parts.** The part disappears in the workshop, the work-order cost is overstated and stock is understated.',
            ),
            t(
              '**تأیید SES بدون دیدن کار یا بدون برگه امضاشده.** هزینه‌ای ثبت می‌شود که شاید انجام نشده و در حسابرسی بازیافت رد می‌شود.',
              '**Approving an SES without seeing the work or without a signed sheet.** A cost is recorded that may not have happened, and it fails the cost-recovery audit.',
            ),
            t(
              '**قاعده تسویه اشتباه.** کار سرمایه‌ای که به مرکز هزینه تسویه شود، هزینه را بیش از واقع و دارایی را کمتر از واقع نشان می‌دهد و زمان بازیافت را عوض می‌کند؛ عکس آن هم خطاست.',
              '**A wrong settlement rule.** Capital work settled to a cost centre overstates expenses, understates assets and changes recovery timing; the reverse is wrong too.',
            ),
            t(
              '**تکمیل فنی بدون گزارش فنی.** بدون کد خرابی و علت، هیچ‌کس نمی‌تواند راهبرد نگهداری را بهتر کند.',
              '**Technical completion without a technical report.** Without failure and cause codes, nobody can improve the maintenance strategy.',
            ),
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('یادتان باشد', 'Remember'),
          text: {
            fa: 'سندهای ERP خودکارند، اما درستی آن‌ها به داده‌هایی بستگی دارد که آدم‌ها در طول چرخه وارد کرده‌اند: تجهیز درست در اعلان، قاعده تسویه درست در برنامه‌ریزی، ساعت‌ها و GRN و SES واقعی در اجرا، و کدهای درست در تکمیل فنی.',
            en: 'ERP postings are automatic, but their correctness depends on what people entered along the way: the right equipment in the notification, the right settlement rule at planning, real hours, GRNs and SESs in execution, and the right codes at technical completion.',
          },
        },
      ],
    },
    {
      id: 'exercises',
      title: t('تمرین‌ها', 'Exercises'),
      blocks: [
        {
          type: 'exercise',
          title: t('ترتیب رویدادها', 'Ordering the events'),
          difficulty: 'easy',
          problem: t(
            'رویدادهای زیر برای دستور کار تعویض آب‌بند پمپ P-210 به هم ریخته‌اند. آن‌ها را به ترتیب درست مرتب کنید و بگویید کدام‌ها سند مالی می‌سازند.',
            'The events below for a P-210 seal-replacement work order are out of order. Put them in the right order and say which ones create Finance entries.',
          ),
          given: {
            head: [t('رویداد', 'Event'), t('شرح', 'Description')],
            rows: [
              [t('A', 'A'), t('تکنسین 10 ساعت کار را روی دستور کار ثبت می‌کند', 'The technician confirms 10 hours on the work order')],
              [t('B', 'B'), t('اپراتور نشتی آب‌بند را در یک اعلان گزارش می‌کند', 'The operator reports the seal leak in a notification')],
              [t('C', 'C'), t('مالی هزینه دستور کار را به مرکز هزینه CC-ARY-PRD تسویه می‌کند', 'Finance settles the work-order cost to cost centre CC-ARY-PRD')],
              [t('D', 'D'), t('برنامه‌ریز دستور کار را می‌سازد و آب‌بند را رزرو می‌کند', 'The planner creates the work order and reserves the seal')],
              [t('E', 'E'), t('انباردار آب‌بند را حواله می‌کند', 'The storekeeper issues the seal')],
              [t('F', 'F'), t('سرپرست دستور کار را تأیید و آزاد می‌کند', 'The supervisor approves and releases the work order')],
              [t('G', 'G'), t('سرپرست کار را تکمیل فنی می‌کند و کدهای خرابی را ثبت می‌کند', 'The supervisor sets technical completion and records failure codes')],
              [t('H', 'H'), t('SES بالانس روتور در کارگاه بیرونی تأیید می‌شود', 'The SES for rotor balancing at an outside workshop is approved')],
            ],
          },
          solution: [
            {
              type: 'table',
              head: [t('ترتیب', 'Order'), t('رویداد', 'Event'), t('سند مالی؟', 'Finance entry?')],
              rows: [
                [t('1', '1'), t('B اعلان', 'B notification'), t('خیر', 'No')],
                [t('2', '2'), t('D ساخت دستور کار و رزرو', 'D work order and reservation'), t('خیر', 'No')],
                [t('3', '3'), t('F تأیید و آزادسازی', 'F approval and release'), t('خیر', 'No')],
                [t('4', '4'), t('E حواله آب‌بند', 'E goods issue of the seal'), t('بله: بدهکار هزینه قطعات دستور کار، بستانکار موجودی', 'Yes: Dr work-order materials, Cr inventory')],
                [t('5', '5'), t('H تأیید SES', 'H SES approved'), t('بله: بدهکار هزینه خدمات دستور کار، بستانکار GR/IR', 'Yes: Dr work-order services, Cr GR/IR')],
                [t('6', '6'), t('A تأیید زمان', 'A time confirmation'), t('بله: بدهکار دستمزد دستور کار، بستانکار دستمزد تخصیص‌یافته', 'Yes: Dr work-order labour, Cr labour allocated')],
                [t('7', '7'), t('G تکمیل فنی', 'G technical completion'), t('خیر', 'No')],
                [t('8', '8'), t('C تسویه', 'C settlement'), t('بله: انتقال به CC-ARY-PRD', 'Yes: moves the cost to CC-ARY-PRD')],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: t(
                'ترتیب E، H و A در عمل می‌تواند کمی جابه‌جا شود؛ مهم این است که همه پیش از تکمیل فنی و تسویه ثبت شوند.',
                'In practice E, H and A may happen in a slightly different order; what matters is that all are recorded before technical completion and settlement.',
              ),
            },
          ],
          answer: t('ترتیب: B، D، F، E، H، A، G، C؛ سند مالی فقط در E، H، A و C', 'Order: B, D, F, E, H, A, G, C; Finance entries only at E, H, A and C'),
        },
        {
          type: 'exercise',
          title: t('هزینه واقعی و انحراف', 'Actual cost and variance'),
          difficulty: 'medium',
          problem: t(
            'برای دستور کار `WO-40122` (تعویض آب‌بند مکانیکی پمپ P-210) برآورد و رویدادهای واقعی زیر را داریم. هزینه برآوردی، هزینه واقعی و انحراف هر جزء را حساب کنید.',
            'For work order `WO-40122` (replacing the mechanical seal of pump P-210) we have the estimate and actual events below. Calculate the planned cost, the actual cost and the variance of each element.',
          ),
          given: {
            head: [t('قلم', 'Item'), t('برآورد', 'Planned'), t('واقعی', 'Actual')],
            rows: [
              [t('دستمزد گروه مکانیک (نرخ 200)', 'Mechanical crew labour (rate 200)'), t('8 ساعت', '8 hours'), t('10 ساعت', '10 hours')],
              [t('آب‌بند مکانیکی (18,000 هر عدد)', 'Mechanical seal (18,000 each)'), t('1 عدد', '1 unit'), t('1 عدد حواله', '1 issued')],
              [t('ست بلبرینگ (1,800 هر عدد)', 'Bearing set (1,800 each)'), t('2 عدد', '2 units'), t('2 حواله، 1 برگشت', '2 issued, 1 returned')],
              [t('بالانس روتور در کارگاه بیرونی (SES)', 'Rotor balancing at an outside workshop (SES)'), t('1,500', '1,500'), t('1,500', '1,500')],
            ],
          },
          solution: [
            {
              type: 'table',
              head: [t('جزء', 'Element'), t('برآورد', 'Planned'), t('واقعی', 'Actual'), t('انحراف', 'Variance')],
              rows: [
                [t('دستمزد', 'Labour'), 1600, 2000, t('400 بیشتر', '400 over')],
                [t('آب‌بند', 'Seal'), 18000, 18000, t('بدون انحراف', 'None')],
                [t('بلبرینگ', 'Bearings'), 3600, 1800, t('1,800 کمتر', '1,800 under')],
                [t('خدمات (SES)', 'Services (SES)'), 1500, 1500, t('بدون انحراف', 'None')],
                [t('جمع', 'Total'), 24700, 23300, t('1,400 کمتر', '1,400 under')],
              ],
              numericCols: [1, 2],
            },
            {
              type: 'p',
              text: t(
                'دستمزد: 8 × 200 = 1,600 در برابر 10 × 200 = 2,000. بلبرینگ: 2 × 1,800 = 3,600 در برابر (2 − 1) × 1,800 = 1,800. انحراف کل 1,400 کمتر است، اما دو انحراف جدا پشت آن پنهان است: 400 بیشتر در دستمزد و 1,800 کمتر در قطعات. همیشه انحراف را جزء به جزء ببینید.',
                'Labour: 8 × 200 = 1,600 vs 10 × 200 = 2,000. Bearings: 2 × 1,800 = 3,600 vs (2 − 1) × 1,800 = 1,800. The total variance is 1,400 under, but it hides two separate variances: 400 over on labour and 1,800 under on parts. Always look at variances element by element.',
              ),
            },
          ],
          answer: t('برآورد 24,700، واقعی 23,300؛ دستمزد 400 بیشتر و بلبرینگ 1,800 کمتر', 'Planned 24,700, actual 23,300; labour 400 over and bearings 1,800 under'),
        },
        {
          type: 'exercise',
          title: t('سندهای یک دستور کار روی چاه', 'Postings for a well work order'),
          difficulty: 'medium',
          problem: t(
            'شیر اصلی سرچاهی چاه AR-07 نشتی دارد و دستور کار `WO-40150` برای تعمیر آن باز شده است. سندهای خودکار ERP را بنویسید و مبلغ تسویه به چاه AR-07 (پرچم R، طبقه عملیاتی) را به دست آورید. مالیات بر ارزش افزوده را در نظر نگیرید.',
            'The master valve on the AR-07 wellhead is leaking and work order `WO-40150` was opened to repair it. Write the automatic ERP postings and find the settlement to well AR-07 (flag R, category Operating). Ignore VAT.',
          ),
          given: {
            head: [t('رویداد', 'Event'), t('مبلغ', 'Amount')],
            rows: [
              [t('حواله بسته تعمیر شیر از انبار میدان', 'Goods issue of a valve repair kit from the Field Warehouse'), 3200],
              [t('تأیید زمان: 12 ساعت گروه مکانیک × 200', 'Time confirmation: 12 mechanical crew hours × 200'), 2400],
              [t('تأیید SES اجاره جرثقیل', 'SES approved for crane hire'), 1400],
              [t('فاکتور پیمانکار جرثقیل', 'Crane contractor’s invoice'), 1400],
            ],
            numericCols: [1],
          },
          solution: [
            {
              type: 'journal',
              entries: [
                {
                  date: t('حواله انبار', 'Goods issue'),
                  lines: [
                    { account: w50.mat, debit: 3200 },
                    { account: ac.inventory, credit: 3200 },
                  ],
                },
                {
                  date: t('تأیید زمان', 'Time confirmation'),
                  lines: [
                    { account: w50.lab, debit: 2400 },
                    { account: ac.mechAlloc, credit: 2400 },
                  ],
                },
                {
                  date: t('تأیید SES', 'SES approved'),
                  lines: [
                    { account: w50.svc, debit: 1400 },
                    { account: ac.grir, credit: 1400 },
                  ],
                },
                {
                  date: t('فاکتور پیمانکار', 'Contractor invoice'),
                  lines: [
                    { account: ac.grir, debit: 1400 },
                    { account: ac.ap, credit: 1400 },
                  ],
                  memo: t('تطبیق سه‌طرفه: سفارش خرید، SES و فاکتور', 'Three-way match: purchase order, SES and invoice'),
                },
                {
                  date: t('تسویه پایان ماه', 'Month-end settlement'),
                  lines: [
                    { account: receiver('چاه AR-07', 'well AR-07'), debit: 7000 },
                    { account: w50.sender, credit: 7000 },
                  ],
                },
              ],
            },
            {
              type: 'p',
              text: t(
                'هزینه روی دستور کار: 3,200 + 2,400 + 1,400 = 7,000. فاکتور هزینه تازه‌ای نمی‌سازد؛ فقط GR/IR را صاف می‌کند. چون گیرنده خود چاه است، هزینه در گزارش هزینه هر چاه و در حساب بازیافت هزینه همان چاه دیده می‌شود.',
                'Cost on the work order: 3,200 + 2,400 + 1,400 = 7,000. The invoice adds no new cost; it only clears GR/IR. Because the receiver is the well itself, the cost shows in the per-well cost report and in that well’s cost-recovery account.',
              ),
            },
          ],
          answer: t('تسویه 7,000 به چاه AR-07 با پرچم R و طبقه عملیاتی', 'Settlement of 7,000 to well AR-07, flag R, category Operating'),
        },
        {
          type: 'exercise',
          title: t('تسویه پایان ماه و سهم شرکا', 'Month-end settlement and partner shares'),
          difficulty: 'hard',
          problem: t(
            'در پایان ماه دو دستور کار تسویه می‌شوند. (الف) `WO-40200`: تعمیر منیفولد مشترک چاه‌های AR-03 و AR-05 با هزینه 9,000؛ قاعده تسویه به نسبت تولید گاز: AR-03 سهم 60٪ و AR-05 سهم 40٪. (ب) `WO-40210`: نصب اسکرابر مکش جدید `V-140` در ایستگاه تقویت فشار با عنصر WBS به نام AFE-2026-010.01 و هزینه 120,000. سندهای تسویه را بنویسید، پرچم و طبقه هر سطر را تعیین کنید و سهم انرژی البرز (30٪) و نفت دنا (20٪) را از هر دستور کار حساب کنید.',
            'Two work orders settle at month-end. (a) `WO-40200`: repair of the manifold shared by wells AR-03 and AR-05, costing 9,000; settlement by gas production: AR-03 60%, AR-05 40%. (b) `WO-40210`: installing a new suction scrubber `V-140` at the compressor station on WBS element AFE-2026-010.01, costing 120,000. Write the settlement entries, set the flag and category for each line, and calculate Alborz Energy’s (30%) and Dena Petroleum’s (20%) shares of each work order.',
          ),
          hint: t('کار سرمایه‌ای به دارایی در جریان تکمیل تسویه می‌شود و هزینه دوره نیست.', 'Capital work settles to assets under construction; it is not a period expense.'),
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('تسهیم WO-40200', 'Split of WO-40200'), text: t('AR-03: 9,000 × 60٪ = 5,400؛ AR-05: 9,000 × 40٪ = 3,600', 'AR-03: 9,000 × 60% = 5,400; AR-05: 9,000 × 40% = 3,600') },
                {
                  title: t('ماهیت WO-40210', 'Nature of WO-40210'),
                  text: t(
                    'نصب تجهیز جدید سرمایه‌ای است؛ گیرنده AFE-2026-010.01 و حساب «دارایی در جریان تکمیل» است، با پرچم R و طبقه توسعه. هزینه‌هایی که روی دستور کار به هزینه رفته بودند با «هزینه نگهداری منتقل‌شده به دارایی» خنثی می‌شوند.',
                    'Installing new equipment is capital; the receiver is AFE-2026-010.01 and the account is "assets under construction", with flag R and category Development. Costs expensed on the work order are reversed out through "maintenance costs capitalised".',
                  ),
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: t('تسویه WO-40200', 'Settlement of WO-40200'),
                  lines: [
                    { account: receiver('چاه AR-03', 'well AR-03'), debit: 5400 },
                    { account: receiver('چاه AR-05', 'well AR-05'), debit: 3600 },
                    { account: w200.sender, credit: 9000 },
                  ],
                },
                {
                  date: t('تسویه WO-40210', 'Settlement of WO-40210'),
                  lines: [
                    { account: t('دارایی در جریان تکمیل (AFE-2026-010.01، R، توسعه)', 'Assets under construction (AFE-2026-010.01, R, Development)'), debit: 120000 },
                    { account: ac.capMaint, credit: 120000 },
                  ],
                  memo: t('سند مالی واقعی: هزینه به دارایی تبدیل می‌شود', 'A real Finance document: the cost becomes an asset'),
                },
              ],
            },
            {
              type: 'table',
              head: [t('دستور کار', 'Work order'), t('مبلغ', 'Amount'), t('انرژی البرز (30٪)', 'Alborz Energy (30%)'), t('نفت دنا (20٪)', 'Dena Petroleum (20%)'), t('مسار پترولیوم (50٪)', 'Masar Petroleum (50%)')],
              rows: [
                [t('WO-40200 (عملیاتی)', 'WO-40200 (operating)'), 9000, 2700, 1800, 4500],
                [t('WO-40210 (سرمایه‌ای)', 'WO-40210 (capital)'), 120000, 36000, 24000, 60000],
                [t('جمع', 'Total'), 129000, 38700, 25800, 64500],
              ],
              numericCols: [1, 2, 3, 4],
            },
            {
              type: 'callout',
              tone: 'warning',
              text: t(
                'اگر WO-40210 به اشتباه به CC-ARY-CMP تسویه شود، هزینه دوره 120,000 بیش از واقع، دارایی‌ها 120,000 کمتر از واقع و طبقه هزینه به‌جای توسعه، عملیاتی ثبت می‌شود؛ زمان بازیافت آن در قرارداد هم عوض می‌شود.',
                'If WO-40210 were wrongly settled to CC-ARY-CMP, period expenses would be overstated by 120,000, assets understated by 120,000 and the cost category recorded as Operating instead of Development; its recovery timing under the contract would change too.',
              ),
            },
          ],
          answer: t(
            'AR-03: 5,400 و AR-05: 3,600 (R، عملیاتی)؛ AFE-2026-010.01: 120,000 (R، توسعه)؛ انرژی البرز 2,700 و 36,000، نفت دنا 1,800 و 24,000',
            'AR-03: 5,400 and AR-05: 3,600 (R, Operating); AFE-2026-010.01: 120,000 (R, Development); Alborz Energy 2,700 and 36,000, Dena Petroleum 1,800 and 24,000',
          ),
        },
      ],
    },
    {
      id: 'summary',
      title: t('جمع‌بندی', 'Summary'),
      blocks: [
        {
          type: 'list',
          items: [
            t('دستور کار هم برنامه کار است و هم موضوع هزینه؛ هر کار نگهداری باید دستور کار داشته باشد.', 'A work order is both the job plan and a cost object; every maintenance job needs one.'),
            t('چرخه: اعلان، برنامه‌ریزی، تأیید، زمان‌بندی و آزادسازی، اجرا، تکمیل فنی، تسویه و بستن.', 'The lifecycle: notification, planning, approval, scheduling and release, execution, technical completion, settlement and close.'),
            t('برنامه‌ریزی چهار بخش دارد: گام‌ها، نیروی انسانی با نرخ فعالیت، قطعات (رزرو یا درخواست خرید) و خدمات بیرونی.', 'Planning has four parts: operations, labour at activity rates, materials (reservations or requisitions) and external services.'),
            t(
              'ساختن، تأیید و آزادسازی دستور کار سندی نمی‌زند؛ حواله، برگشت به انبار، GRN، SES و تأیید زمان سند خودکار می‌سازند.',
              'Creating, approving and releasing a work order posts nothing; goods issues, returns, GRNs, SESs and time confirmations post automatically.',
            ),
            t('تکمیل فنی کار فیزیکی را تمام می‌کند؛ دستور کار پس از تسویه نهایی بسته می‌شود.', 'Technical completion ends the physical work; the work order is closed after final settlement.'),
            t(
              'تسویه هزینه را با قاعده تسویه به مرکز هزینه، چاه یا عنصر WBS یک AFE می‌برد و هر سطر پرچم بازیافت (R یا N) و طبقه هزینه دارد.',
              'Settlement moves the cost by the settlement rule to a cost centre, well or AFE WBS element, and every line carries a recovery flag (R or N) and a cost category.',
            ),
            t('کار عملیاتی هزینه دوره است؛ کار سرمایه‌ای به دارایی در جریان تکمیل تسویه می‌شود.', 'Operating work is a period expense; capital work settles to assets under construction.'),
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            { term: t('دستور کار', 'Work order'), def: t('سند ERP که کار نگهداری را برنامه‌ریزی می‌کند و موضوع هزینه آن است', 'The ERP document that plans a maintenance job and serves as its cost object') },
            { term: t('اعلان (درخواست کار)', 'Notification (work request)'), def: t('گزارش یک عیب یا نیاز که دستور کار از آن ساخته می‌شود', 'A report of a defect or need from which a work order is created') },
            { term: t('اولویت', 'Priority'), def: t('کدی که می‌گوید کار تا چه زمانی باید شروع شود (P1 تا P4)', 'A code saying how soon the work must start (P1 to P4)') },
            { term: t('نرخ فعالیت', 'Activity rate'), def: t('نرخ ساعتی یک مرکز کار که ساعت‌های تأییدشده با آن قیمت‌گذاری می‌شوند', 'A work centre’s hourly rate used to price confirmed hours') },
            { term: t('رزرو', 'Reservation'), def: t('کنار گذاشتن موجودی انبار برای یک دستور کار؛ سند مالی ندارد', 'Earmarking stock for a work order; it posts nothing') },
            { term: t('برگشت به انبار', 'Return to warehouse'), def: t('بازگرداندن قطعه استفاده‌نشده که هزینه دستور کار را کم و موجودی را زیاد می‌کند', 'Returning an unused part, reducing the work-order cost and increasing stock') },
            { term: t('رسید کالا (GRN)', 'Goods received note (GRN)'), def: t('سند دریافت کالا؛ برای کالای غیرانباری مستقیم هزینه دستور کار را بدهکار و GR/IR را بستانکار می‌کند', 'The goods receipt document; for non-stock items it debits the work order directly and credits GR/IR') },
            { term: t('برگه ثبت خدمات (SES)', 'Service entry sheet (SES)'), def: t('سند پذیرش خدمات پیمانکار که هزینه را روی دستور کار ثبت و GR/IR را بستانکار می‌کند', 'The document accepting contractor services; it posts the cost to the work order and credits GR/IR') },
            { term: t('تأیید زمان', 'Time confirmation'), def: t('ثبت ساعت‌های واقعی تکنسین روی گام دستور کار', 'Recording a technician’s actual hours against a work-order operation') },
            { term: t('تکمیل فنی', 'Technical completion'), def: t('وضعیتی که می‌گوید کار فیزیکی تمام است اما دستور کار هنوز بسته نشده', 'A status saying the physical work is finished but the order is not yet closed') },
            { term: t('قاعده تسویه', 'Settlement rule'), def: t('دستوری که می‌گوید هزینه دستور کار به کدام گیرنده و با چه نسبتی برود', 'The instruction saying which receiver gets the work-order cost and in what share') },
            { term: t('صورت‌حساب مشترک', 'Joint interest billing'), def: t('صورت‌حساب ماهانه‌ای که سهم هر شریک از هزینه‌ها را نشان می‌دهد', 'The monthly statement showing each partner’s share of the costs') },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: t('پس از ثبت اعلان، گام بعدی در چرخه دستور کار چیست؟', 'After a notification is recorded, what is the next step in the work-order lifecycle?'),
      options: [t('تسویه', 'Settlement'), t('برنامه‌ریزی', 'Planning'), t('تکمیل فنی', 'Technical completion'), t('حواله انبار', 'Goods issue')],
      answer: 1,
      explain: t(
        'برنامه‌ریز اعلان را بررسی و دستور کار را با گام‌ها، نیرو، قطعات و خدمات می‌سازد. حواله فقط پس از تأیید و آزادسازی ممکن است و تسویه آخرین مرحله است.',
        'The planner reviews the notification and builds the work order with operations, labour, parts and services. A goods issue is only possible after approval and release, and settlement is the last step.',
      ),
    },
    {
      q: t('3 تکنسین هر کدام 6 ساعت روی یک دستور کار کار کرده‌اند و نرخ گروه 200 در ساعت است. هزینه دستمزد دستور کار چقدر است؟', 'Three technicians each worked 6 hours on a work order and the crew rate is 200 an hour. What is the labour cost on the order?'),
      options: [t('1,200', '1,200'), t('600', '600'), t('3,600', '3,600'), t('3,000', '3,000')],
      answer: 2,
      explain: t(
        'ساعت‌ها = 3 × 6 = 18؛ دستمزد = 18 × 200 = 3,600. عدد 1,200 فقط ساعت یک نفر را حساب کرده است.',
        'Hours = 3 × 6 = 18; labour = 18 × 200 = 3,600. The 1,200 option counts only one person’s hours.',
      ),
    },
    {
      q: t(
        '5 فیلتر هر کدام 400 برای دستور کار حواله و 2 فیلتر استفاده‌نشده به انبار برگردانده شده است. هزینه خالص فیلتر روی دستور کار چقدر است؟',
        'Five filters at 400 each were issued to a work order and two unused filters were returned. What is the net filter cost on the order?',
      ),
      options: [t('2,000', '2,000'), t('2,800', '2,800'), t('800', '800'), t('1,200', '1,200')],
      answer: 3,
      explain: t(
        'حواله 5 × 400 = 2,000 و برگشت 2 × 400 = 800؛ خالص 2,000 − 800 = 1,200. اگر برگشت ثبت نشود، دستور کار 2,000 نشان می‌دهد و موجودی کمتر از واقع می‌ماند.',
        'Issue 5 × 400 = 2,000 and return 2 × 400 = 800; net 2,000 − 800 = 1,200. If the return is not recorded, the order shows 2,000 and stock stays understated.',
      ),
    },
    {
      q: t(
        'روی یک دستور کار: حواله 3,000، برگشت به انبار 500، تأیید زمان 2,000 و SES تأییدشده 1,500. مبلغ تسویه چقدر است؟',
        'On a work order: goods issue 3,000, return to warehouse 500, time confirmation 2,000 and an approved SES of 1,500. What is the settlement amount?',
      ),
      options: [t('6,500', '6,500'), t('7,000', '7,000'), t('6,000', '6,000'), t('5,500', '5,500')],
      answer: 2,
      explain: t(
        '3,000 − 500 + 2,000 + 1,500 = 6,000. گزینه 7,000 برگشت را به‌جای کم کردن اضافه کرده و 6,500 برگشت را نادیده گرفته است.',
        '3,000 − 500 + 2,000 + 1,500 = 6,000. 7,000 adds the return instead of subtracting it, and 6,500 ignores the return.',
      ),
    },
    {
      q: t('تأیید برگه ثبت خدمات (SES) برای کار پیمانکار روی یک دستور کار، کدام سند را می‌سازد؟', 'Approving a service entry sheet (SES) for contractor work on a work order creates which entry?'),
      options: [
        t('بدهکار هزینه خدمات (دستور کار)، بستانکار GR/IR', 'Dr contractor services expense (work order), Cr GR/IR'),
        t('بدهکار GR/IR، بستانکار حساب‌های پرداختنی', 'Dr GR/IR, Cr accounts payable'),
        t('بدهکار موجودی، بستانکار GR/IR', 'Dr inventory, Cr GR/IR'),
        t('هیچ سندی تا رسیدن فاکتور', 'No entry until the invoice arrives'),
      ],
      answer: 0,
      explain: t(
        'SES پذیرش خدمت است و همان لحظه هزینه واقعی را روی دستور کار ثبت می‌کند؛ طرف مقابل GR/IR است. گزینه دوم سند فاکتور است که بعداً GR/IR را صاف می‌کند و خدمت هرگز وارد موجودی نمی‌شود.',
        'The SES accepts the service and records the actual cost on the work order at that moment, against GR/IR. The second option is the invoice entry that later clears GR/IR, and a service never enters inventory.',
      ),
    },
    {
      q: t('وقتی دستور کار تأیید و آزاد می‌شود، در مالی چه اتفاقی می‌افتد؟', 'When a work order is approved and released, what happens in Finance?'),
      options: [
        t('برآورد هزینه به حساب هزینه ثبت می‌شود', 'The cost estimate is posted to expense'),
        t('موجودی قطعات رزروشده کم می‌شود', 'Reserved stock is reduced'),
        t('هیچ سندی؛ فقط رزروها و درخواست‌های خرید فعال می‌شوند', 'Nothing; reservations and requisitions only become active'),
        t('مبلغ برآورد به حساب‌های پرداختنی می‌رود', 'The estimate goes to accounts payable'),
      ],
      answer: 2,
      explain: t(
        'آزادسازی اجازه برداشت و خرید می‌دهد، اما هنوز چیزی جابه‌جا نشده است. موجودی فقط با حواله کم می‌شود و برآورد هرگز سند نمی‌زند.',
        'Release allows picking and purchasing, but nothing has moved yet. Stock falls only on goods issue, and an estimate never posts.',
      ),
    },
    {
      q: t('«تکمیل فنی» دستور کار به چه معناست؟', 'What does "technical completion" of a work order mean?'),
      options: [
        t('همه هزینه‌ها تسویه و دستور کار بسته شده است', 'All costs are settled and the order is closed'),
        t('کار فیزیکی تمام است، رزروهای باقی‌مانده حذف می‌شوند، اما فاکتورها هنوز می‌توانند برسند', 'The physical work is done and remaining reservations are cancelled, but invoices can still arrive'),
        t('دستور کار تأیید شده و آماده اجراست', 'The order is approved and ready to start'),
        t('اعلان ثبت شده است', 'The notification has been recorded'),
      ],
      answer: 1,
      explain: t(
        'تکمیل فنی پایان کار در میدان است. چون فاکتور پیمانکار ممکن است دیر برسد، دستور کار تا تسویه نهایی بسته نمی‌شود؛ پس گزینه اول مرحله بعدی است، نه همین مرحله.',
        'Technical completion marks the end of field work. Because a contractor’s invoice may arrive late, the order is not closed until final settlement; the first option is the next stage, not this one.',
      ),
    },
    {
      q: t('هزینه دستور کار نصب یک اسکرابر جدید با AFE به کجا تسویه می‌شود؟', 'Where does the cost of a work order that installs a new scrubber under an AFE settle?'),
      options: [
        t('مرکز هزینه ایستگاه، به‌عنوان هزینه تعمیر', 'The station cost centre, as repair expense'),
        t('حساب‌های پرداختنی', 'Accounts payable'),
        t('موجودی قطعات یدکی', 'Spare-parts inventory'),
        t('عنصر WBS آن AFE و دارایی در جریان تکمیل، با طبقه توسعه', 'The AFE’s WBS element and assets under construction, category Development'),
      ],
      answer: 3,
      explain: t(
        'نصب تجهیز جدید سرمایه‌ای است و باید به دارایی در جریان تکمیل برود تا بعداً سرمایه‌ای شود. تسویه به مرکز هزینه، هزینه دوره را بیش از واقع و دارایی را کمتر از واقع نشان می‌دهد.',
        'Installing new equipment is capital and must go to assets under construction to be capitalised later. Settling it to a cost centre would overstate period expense and understate assets.',
      ),
    },
    {
      q: t(
        'هزینه تعمیر یک منیفولد مشترک 7,500 است و قاعده تسویه 60٪ به AR-03 و 40٪ به AR-05 است. سهم هر چاه چقدر است؟',
        'A shared manifold repair costs 7,500 and the settlement rule is 60% to AR-03 and 40% to AR-05. What does each well receive?',
      ),
      options: [
        t('AR-03: 4,500 و AR-05: 3,000', 'AR-03: 4,500 and AR-05: 3,000'),
        t('AR-03: 3,000 و AR-05: 4,500', 'AR-03: 3,000 and AR-05: 4,500'),
        t('هر کدام 3,750', '3,750 each'),
        t('AR-03: 4,000 و AR-05: 3,500', 'AR-03: 4,000 and AR-05: 3,500'),
      ],
      answer: 0,
      explain: t(
        '7,500 × 60٪ = 4,500 و 7,500 × 40٪ = 3,000؛ جمع 7,500. گزینه دوم نسبت‌ها را جابه‌جا کرده و تقسیم مساوی قاعده تسویه را نادیده می‌گیرد.',
        '7,500 × 60% = 4,500 and 7,500 × 40% = 3,000; total 7,500. The second option swaps the shares, and an equal split ignores the settlement rule.',
      ),
    },
    {
      q: t(
        'گروه مکانیک در یک هفته 240 ساعت کار برنامه‌ریزی‌شده داشت و 204 ساعت آن طبق برنامه انجام شد. رعایت برنامه چند درصد است؟',
        'The mechanical crew had 240 scheduled hours in a week and completed 204 of them as scheduled. What is schedule compliance?',
      ),
      options: [t('15٪', '15%'), t('85٪', '85%'), t('117.6٪', '117.6%'), t('204٪', '204%')],
      answer: 1,
      explain: t(
        '204 ÷ 240 × 100 = 85٪. عدد 15٪ سهم کارهای انجام‌نشده است و 117.6٪ نتیجه تقسیم وارونه (240 ÷ 204) است.',
        '204 ÷ 240 × 100 = 85%. 15% is the share not done, and 117.6% comes from dividing the wrong way round (240 ÷ 204).',
      ),
    },
  ],
}
