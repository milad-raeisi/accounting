import type { Lesson } from '../../types'

/*
 * Running example: Masar Petroleum, Arya field, compressor station.
 * Work order WO-50231: replace the mechanical seal of condensate pump P-120.
 * Internal labour rate of the mechanical crew (work centre, cost centre CC-3900): 200 per hour.
 */
const wo = (n: string) => ({
  mat: { fa: `هزینه قطعات و مواد نگهداری (${n})`, en: `Maintenance materials expense (${n})` },
  svc: { fa: `هزینه خدمات پیمانکاران (${n})`, en: `Contractor services expense (${n})` },
  lab: { fa: `هزینه دستمزد داخلی نگهداری (${n})`, en: `Internal maintenance labour (${n})` },
})
const ac = {
  inventory: { fa: 'موجودی قطعات یدکی', en: 'Inventory: spare parts' },
  grir: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing account' },
  ap: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
  labourAlloc: { fa: 'دستمزد تخصیص‌یافته: گروه مکانیک (CC-3900)', en: 'Labour cost allocated: mechanical crew (CC-3900)' },
}
const w1 = wo('WO-50231')
const w2 = wo('WO-50418')

export const lesson: Lesson = {
  slug: 'maintenance-planning-spares',
  number: 5,
  level: 'intermediate',
  minutes: 30,
  icon: 'CalendarClock',
  tone: 'asset',
  title: { fa: 'برنامه‌ریزی نگهداری و قطعات یدکی', en: 'Maintenance Planning and Spare Parts' },
  summary: {
    fa: 'کارهای نگهداری را بر پایه ریسک اولویت‌بندی، برنامه‌ریزی و زمان‌بندی کنید، تعمیرات اساسی را از تعیین دامنه تا بستن پرونده پیش ببرید و قطعات یدکی حیاتی را با محاسبه نگه دارید؛ و ببینید دستور کار در ERP چگونه انبار، خرید، پیمانکاران و مالی را به حرکت درمی‌آورد.',
    en: 'Prioritise, plan and schedule maintenance work by risk, run a turnaround from scope to close-out and stock critical spares on the numbers; then see how a work order in the ERP drives the warehouse, procurement, contractors and Finance.',
  },
  objectives: [
    {
      fa: 'تفاوت برنامه‌ریزی و زمان‌بندی را توضیح دهید و یک بسته کاری آماده را تعریف کنید',
      en: 'Explain the difference between planning and scheduling and define a ready job package',
    },
    {
      fa: 'کارها را بر پایه ریسک اولویت‌بندی کنید و کارهای انباشته را به هفته بسنجید',
      en: 'Prioritise work by risk and measure the backlog in weeks',
    },
    {
      fa: 'تعمیرات اساسی را از تعیین دامنه تا بستن پرونده برنامه‌ریزی کنید',
      en: 'Plan a turnaround from scope definition to close-out',
    },
    {
      fa: 'درباره قطعات یدکی حیاتی و نقطه سفارش با محاسبه تصمیم بگیرید',
      en: 'Decide on critical spares and reorder points with simple calculations',
    },
    {
      fa: 'مسیر دستور کار در ERP را تا انبار، خرید، پیمانکار و ثبت‌های خودکار مالی دنبال کنید',
      en: 'Follow a work order in the ERP through the warehouse, procurement, contractors and the automatic Finance postings',
    },
  ],
  sections: [
    {
      id: 'why-planning',
      title: { fa: 'چرا برنامه‌ریزی نگهداری مهم است؟', en: 'Why Maintenance Planning Matters' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'ساعت 2 بامداد، پمپ میعانات P-120 در ایستگاه تقویت فشار میدان آریا از آب‌بند مکانیکی (Mechanical Seal) نشتی می‌دهد. پمپ رزرو روشن می‌شود، اما ایستگاه دیگر پشتیبان ندارد. تکنسین شیفت در ERP می‌بیند که یک آب‌بند یدکی در انبار میدان «موجود» است؛ ولی قفسه خالی است. ماه پیش قطعه برای کار دیگری برداشته شده و حواله انبار آن ثبت نشده است. سفارش آب‌بند جدید 10 هفته طول می‌کشد. این مشکل فنی نیست؛ مشکل **برنامه‌ریزی و نظم داده‌ها** است.',
            en: 'At 2 a.m. the condensate pump P-120 at the Arya field compressor station starts leaking from its mechanical seal. The standby pump takes over, but the station now has no backup. The shift technician sees in the ERP that one spare seal is “in stock” at the Field Warehouse, yet the bin is empty: last month the part was taken for another job and no goods issue was posted. A new seal takes 10 weeks to arrive. This is not a technical problem; it is a **planning and data-discipline** problem.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'در نگهداری و تعمیرات دو کار متفاوت داریم که اغلب با هم اشتباه می‌شوند. **برنامه‌ریزی (Planning)** یعنی آماده کردن کار پیش از شروع: چه کاری، با چه روشی، با چند ساعت نیرو، با کدام قطعات و ابزار و با چه هزینه‌ای. **زمان‌بندی (Scheduling)** یعنی تعیین زمان و مجری: این کارِ آماده را چه روزی و کدام گروه انجام دهد، طوری که با برنامه تولید و ظرفیت گروه‌ها جور باشد.',
            en: 'Maintenance has two different jobs that people often mix up. **Planning** prepares a job before it starts: what to do, how, how many labour hours, which parts and tools, and at what cost. **Scheduling** decides when and by whom: which day and which crew will do the ready job, so that it fits the production plan and the crews’ capacity.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'برنامه‌ریزی: چه چیزی و چگونه؟', en: 'Planning: what and how?' },
            items: [
              { fa: 'دامنه کار و مراحل اجرا (دستورالعمل کار)', en: 'Scope and step-by-step method (task list)' },
              { fa: 'برآورد ساعت نیرو به تفکیک تخصص', en: 'Labour estimate by craft' },
              { fa: 'فهرست قطعات، رزرو کالا و درخواست خرید', en: 'Parts list, reservations and purchase requisitions' },
              { fa: 'ابزار، مجوز کار، ایزوله‌سازی و ارزیابی ریسک', en: 'Tools, permit to work, isolations and risk assessment' },
              { fa: 'برآورد هزینه و موضوع هزینه درست', en: 'Cost estimate and the right cost object' },
            ],
          },
          right: {
            title: { fa: 'زمان‌بندی: چه زمانی و چه کسی؟', en: 'Scheduling: when and who?' },
            items: [
              { fa: 'انتخاب هفته و روز اجرا', en: 'Choose the week and the day' },
              { fa: 'تخصیص گروه یا تکنسین', en: 'Assign the crew or technician' },
              { fa: 'هماهنگی با بهره‌برداری (پنجره تولید و مجوزها)', en: 'Coordinate with operations (production window, permits)' },
              { fa: 'پر کردن تقریباً همه ساعت‌های در دسترس گروه', en: 'Load almost all of the crew’s available hours' },
              { fa: 'سنجش میزان پایبندی به برنامه', en: 'Measure schedule compliance' },
            ],
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'کار برنامه‌ریزی‌شده ارزان‌تر است', en: 'Planned work is cheaper' },
          text: {
            fa: 'کار برنامه‌ریزی‌نشده (اضطراری) معمولاً چند برابر همان کارِ برنامه‌ریزی‌شده هزینه دارد: اضافه‌کاری، حمل فوری قطعه، خسارت جانبی به تجهیز و از همه مهم‌تر تولید ازدست‌رفته. در منابع صنعتی اغلب عددی بین 2 تا 5 برابر ذکر می‌شود؛ آن را راهنمای تقریبی بدانید، نه قانون.',
            en: 'Unplanned (emergency) work usually costs several times more than the same job done as planned: overtime, express freight, collateral damage to the equipment and, above all, lost production. Industry sources often quote 2 to 5 times; treat that as a rough guide, not a law.',
          },
        },
        {
          type: 'h',
          text: { fa: 'بسته کاری آماده چه دارد؟', en: 'What a ready job package contains' },
        },
        {
          type: 'list',
          items: [
            {
              fa: 'دامنه و مراحل کار به‌روشنی نوشته شده، همراه با نقشه‌ها و کد تجهیز',
              en: 'Scope and steps written clearly, with drawings and the equipment tag',
            },
            {
              fa: 'برآورد ساعت نیرو برای هر تخصص (مکانیک، برق، ابزار دقیق) و تعداد نفرات',
              en: 'Labour estimate per craft (mechanical, electrical, instrument) and the number of people',
            },
            {
              fa: 'همه قطعات در دسترس: اقلام انباری رزرو شده و اقلام غیرانباری با تاریخ تحویل پیش از شروع کار سفارش شده‌اند',
              en: 'All parts available: stock items reserved, non-stock items ordered with delivery before the job starts',
            },
            {
              fa: 'ابزار ویژه، جرثقیل، داربست و خدمات پیمانکار هماهنگ شده است',
              en: 'Special tools, cranes, scaffolding and contractor services arranged',
            },
            {
              fa: 'مجوز کار، ایزوله‌سازی و تحلیل ایمنی کار (JSA) آماده است',
              en: 'Permit to work, isolations and job safety analysis (JSA) prepared',
            },
            {
              fa: 'برآورد هزینه و موضوع هزینه درست (دستور کار متصل به مرکز هزینه، چاه یا AFE) ثبت شده است',
              en: 'Cost estimate and the right cost object (work order linked to a cost centre, well or AFE) recorded',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'چرا واحد مالی به برنامه‌ریزی اهمیت می‌دهد؟', en: 'Why Finance cares' },
          text: {
            fa: 'هر دستور کار برنامه‌ریزی‌شده یک برآورد هزینه و یک **موضوع هزینه** (Cost Object) دارد: دستور کاری که به مرکز هزینه، چاه یا AFE وصل است. به همین دلیل هزینه‌ها خودکار به جای درست در دفاتر می‌روند و با مدارک پشتیبان (رزرو، حواله انبار، سفارش خرید، برگه ثبت خدمات) برای **بازیافت هزینه** (Cost Recovery) در قرارداد نفتی قابل دفاع می‌شوند.',
            en: 'Every planned work order carries a cost estimate and a **cost object**: a work order linked to a cost centre, a well or an AFE. That is why costs flow automatically to the right place in the books and, backed by supporting documents (reservation, goods issue, purchase order, service entry sheet), can be defended for **cost recovery** under the petroleum contract.',
          },
        },
      ],
    },
    {
      id: 'backlog-priorities',
      title: { fa: 'کارهای انباشته و اولویت‌بندی', en: 'Backlog and Priorities' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'کار نگهداری از چند منبع می‌آید: اعلان خرابی اپراتورها، یافته‌های بازرسی، پایش وضعیت (ارتعاش، دما، آنالیز روغن)، برنامه‌های نگهداری پیشگیرانه (PM) و درخواست‌های بهبود. هر درخواست ابتدا به‌صورت **اعلان (Notification)** ثبت، بررسی و تأیید می‌شود و سپس به **دستور کار (Work Order)** تبدیل می‌شود. مجموع کارهای تأییدشده‌ای که هنوز انجام نشده‌اند **کارهای انباشته (Backlog)** نام دارد.',
            en: 'Maintenance work comes from several sources: operators’ failure reports, inspection findings, condition monitoring (vibration, temperature, oil analysis), preventive maintenance (PM) plans and improvement requests. Each request is first recorded as a **notification**, reviewed and approved, and then turned into a **work order**. All approved work that has not yet been done is the **backlog**.',
          },
        },
        {
          type: 'h',
          text: { fa: 'اولویت‌بندی بر پایه ریسک', en: 'Risk-based priorities' },
        },
        {
          type: 'p',
          text: {
            fa: 'اولویت هر کار از دو پرسش می‌آید: اگر انجامش ندهیم چه پیامدی دارد (ایمنی، محیط زیست، تولید، هزینه)؟ و این پیامد چقدر زود رخ می‌دهد؟ بیشتر شرکت‌ها یک ماتریس ریسک ساده دارند که هر اعلان را به یکی از چند کد اولویت می‌برد.',
            en: 'A job’s priority comes from two questions: what happens if we don’t do it (safety, environment, production, cost)? And how soon would that happen? Most companies use a simple risk matrix that maps each notification to one of a few priority codes.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'کدهای اولویت در مسار پترولیوم (زمان‌های واکنش نمونه‌اند؛ هر شرکت زمان‌های خودش را تعیین می‌کند)',
            en: 'Priority codes at Masar Petroleum (response times are illustrative; each company sets its own)',
          },
          head: [
            { fa: 'کد', en: 'Code' },
            { fa: 'معنا', en: 'Meaning' },
            { fa: 'شروع کار (نمونه)', en: 'Start by (example)' },
            { fa: 'مثال در میدان آریا', en: 'Example at the Arya field' },
          ],
          rows: [
            [
              { fa: 'P1 اضطراری', en: 'P1 Emergency' },
              { fa: 'خطر فوری ایمنی یا محیط زیست، یا توقف تولید', en: 'Immediate safety or environmental risk, or production stopped' },
              { fa: 'فوری', en: 'Immediately' },
              { fa: 'نشت گاز از فلنج خروجی کمپرسور K-101', en: 'Gas leak at the K-101 discharge flange' },
            ],
            [
              { fa: 'P2 فوری', en: 'P2 Urgent' },
              { fa: 'ریسک بالا یا تولید در خطر', en: 'High risk or production at risk' },
              { fa: 'تا 3 روز', en: 'Within 3 days' },
              { fa: 'روند افزایشی ارتعاش در K-102', en: 'Rising vibration trend on K-102' },
            ],
            [
              { fa: 'P3 عادی', en: 'P3 Routine' },
              { fa: 'کار برنامه‌ریزی‌شده معمول', en: 'Normal planned work' },
              { fa: 'تا 4 هفته', en: 'Within 4 weeks' },
              { fa: 'تعویض فیلتر روغن روانکاری K-101', en: 'Replace the K-101 lube oil filter' },
            ],
            [
              { fa: 'P4 توقف یا فرصت', en: 'P4 Shutdown or opportunity' },
              { fa: 'فقط با توقف واحد انجام‌شدنی است', en: 'Can only be done with the unit stopped' },
              { fa: 'توقف برنامه‌ریزی‌شده بعدی', en: 'Next planned shutdown' },
              { fa: 'بازرسی داخلی جداکننده V-201', en: 'Internal inspection of separator V-201' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'اگر همه چیز P1 باشد، هیچ چیز P1 نیست', en: 'If everything is P1, nothing is' },
          text: {
            fa: 'وقتی هر درخواستی «اضطراری» ثبت شود، کارهای واقعاً اضطراری گم می‌شوند و برنامه هفتگی هیچ‌وقت اجرا نمی‌شود. برنامه‌ریز باید اولویت‌ها را به چالش بکشد و هر ماه بررسی شود که چند اعلان P1 و P2 ثبت شده و آیا واقعاً لازم بوده‌اند.',
            en: 'When every request is raised as an “emergency”, the real emergencies get lost and the weekly schedule never holds. The planner should challenge priorities, and a monthly review should check how many P1 and P2 notifications were raised and whether they were justified.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'کارهای انباشته (هفته) = ساعت نیروی کارهای تأییدشده انجام‌نشده ÷ ظرفیت هفتگی گروه (ساعت)',
            en: 'Backlog (weeks) = labour hours of approved, unfinished work ÷ weekly crew capacity (hours)',
          },
          note: {
            fa: 'آن را برای هر تخصص (مکانیک، برق، ابزار دقیق) جداگانه بسنجید، نه فقط به‌صورت کلی.',
            en: 'Measure it per craft (mechanical, electrical, instrument), not just in total.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'کارهای انباشته گروه مکانیک ایستگاه تقویت فشار؛ ظرفیت: 6 تکنسین × 40 ساعت = 240 ساعت در هفته',
            en: 'Backlog of the compressor station mechanical crew; capacity: 6 technicians × 40 hours = 240 hours per week',
          },
          head: [
            { fa: 'وضعیت کار', en: 'Status' },
            { fa: 'ساعت نیرو', en: 'Labour hours' },
            { fa: 'هفته', en: 'Weeks' },
          ],
          rows: [
            [{ fa: 'آماده (قطعه و مجوز کامل)', en: 'Ready (parts and permits complete)' }, 960, 4],
            [{ fa: 'منتظر قطعه', en: 'Waiting for materials' }, 360, 1.5],
            [{ fa: 'منتظر توقف واحد', en: 'Waiting for shutdown' }, 120, 0.5],
            [{ fa: 'جمع کارهای انباشته', en: 'Total backlog' }, 1440, 6],
          ],
          numericCols: [1, 2],
        },
        {
          type: 'p',
          text: {
            fa: 'پس گروه 4 هفته کار آماده دارد و 1.5 هفته کار فقط به خاطر نرسیدن قطعه متوقف مانده است (360 ÷ 240). این عدد دوم پیام روشنی برای واحدهای خرید و انبار دارد.',
            en: 'So the crew has 4 weeks of ready work, and 1.5 weeks of work is stuck only because parts have not arrived (360 ÷ 240). That second number sends a clear message to procurement and the warehouse.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'بسیاری از شرکت‌ها کارهای انباشته آماده را بین 2 تا 4 هفته نگه می‌دارند. اگر کمتر باشد، گروه‌ها ممکن است بیکار بمانند؛ اگر بیشتر باشد، کارها روی هم تلنبار می‌شوند و ریسک خرابی بالا می‌رود. این بازه یک راهنمای رایج است، نه استاندارد قطعی؛ هر شرکت بر اساس تجربه خودش هدف می‌گذارد.',
            en: 'Many companies keep the ready backlog between 2 and 4 weeks. Lower, and crews may sit idle; higher, and work piles up while the risk of failure grows. The range is a common guide, not a fixed standard; each company sets its own target from experience.',
          },
        },
      ],
    },
    {
      id: 'scheduling-turnarounds',
      title: { fa: 'زمان‌بندی و تعمیرات اساسی', en: 'Scheduling and Turnarounds' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'هر هفته زمان‌بند (Scheduler) از میان کارهای آماده، کارهای با اولویت بالاتر را برمی‌دارد و تقریباً همه ساعت‌های در دسترس گروه‌ها را پر می‌کند. این برنامه در جلسه هماهنگی با بهره‌برداری نهایی می‌شود، چون برخی کارها به توقف تجهیز، مجوز کار یا هماهنگی با دیسپچینگ گاز نیاز دارند. کارهای اضطراری که وسط هفته می‌رسند برنامه را می‌شکنند؛ برای همین **میزان پایبندی به برنامه** را اندازه می‌گیریم.',
            en: 'Every week the scheduler takes the highest-priority jobs from the ready backlog and loads almost all of the crews’ available hours. The schedule is agreed in a coordination meeting with operations, because some jobs need equipment stopped, a permit, or coordination with gas dispatch. Emergencies arriving mid-week break the schedule, which is why we measure **schedule compliance**.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'پایبندی به برنامه (٪) = ساعت‌های برنامه‌ریزی‌شده‌ای که طبق برنامه انجام شد ÷ کل ساعت‌های برنامه‌ریزی‌شده × 100',
            en: 'Schedule compliance (%) = scheduled hours completed as scheduled ÷ total scheduled hours × 100',
          },
          note: {
            fa: 'مثال: 220 ساعت برنامه‌ریزی شد و 187 ساعت طبق برنامه انجام شد: 187 ÷ 220 = 85٪. ساعت‌های کار اضطراری در صورت کسر نمی‌آیند.',
            en: 'Example: 220 hours were scheduled and 187 were completed as scheduled: 187 ÷ 220 = 85%. Emergency hours do not go into the numerator.',
          },
        },
        {
          type: 'h',
          text: { fa: 'تعمیرات اساسی (Turnaround)', en: 'Shutdowns and turnarounds' },
        },
        {
          type: 'p',
          text: {
            fa: 'برخی کارها فقط وقتی انجام می‌شوند که کل واحد خاموش باشد: تعمیر اساسی کمپرسور، بازرسی داخلی مخازن تحت فشار، آزمون و کالیبراسیون شیرهای اطمینان (PSV) و اتصال (Tie-in) خطوط پروژه‌های جدید. این توقف بزرگ و برنامه‌ریزی‌شده را **تعمیرات اساسی (Turnaround یا Shutdown)** می‌نامیم. هر روز توقف ایستگاه یعنی گاز تحویل‌نشده؛ پس تعمیرات اساسی خودش یک پروژه است، با برنامه، بودجه و مسیر بحرانی.',
            en: 'Some work can only be done with the whole unit shut down: a compressor overhaul, internal inspection of pressure vessels, testing and recertifying pressure safety valves (PSVs), and tie-ins for new projects. This large planned stop is a **turnaround** (or shutdown). Every day the station is down is gas not delivered, so a turnaround is a project in its own right, with a schedule, a budget and a critical path.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: '12 ماه پیش از توقف: دامنه اولیه و اقلام دیررس', en: '12 months before: initial scope and long-lead items' },
              text: {
                fa: 'کارهای نامزد را جمع کنید (برنامه‌های بازرسی، کارهای P4، اتصال پروژه‌ها)، اقلام با زمان تحویل طولانی (کیت تعمیر اساسی سازنده، روتور) را شناسایی و درخواست خریدشان را ثبت کنید.',
                en: 'Collect candidate jobs (inspection plans, P4 backlog, project tie-ins), identify long-lead items (OEM overhaul kits, rotors) and raise their purchase requisitions.',
              },
            },
            {
              title: { fa: '6 ماه پیش: انجماد دامنه', en: '6 months before: scope freeze' },
              text: {
                fa: 'فهرست نهایی کارها تأیید می‌شود. هر افزودنی پس از این تاریخ به درخواست تغییر رسمی با برآورد هزینه و ریسک نیاز دارد.',
                en: 'The final work list is approved. Any later addition needs a formal change request with its cost and risk.',
              },
            },
            {
              title: { fa: '3 ماه پیش: برنامه‌ریزی تفصیلی و قراردادها', en: '3 months before: detailed planning and contracts' },
              text: {
                fa: 'بسته‌های کاری، برنامه مسیر بحرانی، انتخاب پیمانکاران و رسیدن و کیت‌کردن قطعات.',
                en: 'Job packages, the critical-path schedule, contractors awarded, materials received and kitted.',
              },
            },
            {
              title: { fa: 'اجرا', en: 'Execution' },
              text: {
                fa: 'کار شبانه‌روزی در شیفت‌ها، گزارش روزانه پیشرفت و هزینه و کنترل دقیق مجوزهای کار.',
                en: 'Round-the-clock shift work, daily progress and cost reports, strict permit control.',
              },
            },
            {
              title: { fa: '1 ماه پس از توقف: بستن پرونده', en: '1 month after: close-out' },
              text: {
                fa: 'تکمیل فنی دستورهای کار، ثبت کدهای خرابی و سوابق، صورت‌وضعیت نهایی پیمانکاران، تسویه هزینه‌ها (سرمایه‌ای یا عملیاتی) و ثبت درس‌آموخته‌ها.',
                en: 'Technical completion of the work orders, final failure codes and history, contractors’ final statements, cost settlement (CAPEX or OPEX) and lessons learned.',
              },
            },
          ],
        },
        {
          type: 'table',
          caption: {
            fa: 'بودجه تعمیرات اساسی 12 روزه ایستگاه تقویت فشار (ارقام نمونه)',
            en: 'Budget for the 12-day compressor station turnaround (illustrative figures)',
          },
          head: [
            { fa: 'بسته کاری', en: 'Work package' },
            { fa: 'ماهیت', en: 'Nature' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          rows: [
            [{ fa: 'تعمیر اساسی K-101 توسط سازنده (OEM)', en: 'K-101 major overhaul by the OEM' }, { fa: 'نامزد سرمایه‌ای', en: 'CAPEX candidate' }, 2400000],
            [{ fa: 'بازرسی K-102 و کنترل آب‌بندها', en: 'K-102 inspection and seal check' }, { fa: 'عملیاتی', en: 'OPEX' }, 380000],
            [{ fa: 'بازرسی داخلی جداکننده V-201', en: 'Internal inspection of separator V-201' }, { fa: 'عملیاتی', en: 'OPEX' }, 160000],
            [{ fa: 'آزمون و صدور گواهی مجدد شیرهای اطمینان', en: 'PSV testing and recertification' }, { fa: 'عملیاتی', en: 'OPEX' }, 95000],
            [{ fa: 'داربست و عایق‌کاری', en: 'Scaffolding and insulation' }, { fa: 'عملیاتی', en: 'OPEX' }, 140000],
            [{ fa: 'جمع بسته‌ها', en: 'Subtotal' }, { fa: '', en: '' }, 3175000],
            [{ fa: 'ذخیره احتیاط 10٪', en: 'Contingency 10%' }, { fa: '', en: '' }, 317500],
            [{ fa: 'بودجه کل', en: 'Total budget' }, { fa: '', en: '' }, 3492500],
          ],
          numericCols: [2],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'نکته مالی', en: 'Finance note' },
          text: {
            fa: 'بودجه تعمیرات اساسی معمولاً ترکیبی از هزینه سرمایه‌ای و عملیاتی است. تعمیر اساسی K-101 احتمالاً به‌عنوان جزء جداگانه دارایی، سرمایه‌ای می‌شود؛ این تصمیم را در درس «حسابداری دارایی‌ها و هزینه‌های سرمایه‌ای» می‌بینیم. پس هر بسته کاری باید از ابتدا دستور کار جدا و موضوع هزینه درست داشته باشد.',
            en: 'A turnaround budget usually mixes capital and operating spend. The K-101 overhaul will probably be capitalised as a separate asset component, a decision covered in the lesson on asset accounting and CAPEX. So each work package needs its own work order and the right cost object from day one.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در ایران مصرف گاز خانگی در زمستان به اوج می‌رسد؛ به همین دلیل تعمیرات اساسی تأسیسات گازی معمولاً در ماه‌های گرم و با هماهنگی مرکز دیسپچینگ گاز برنامه‌ریزی می‌شود. قطعات وارداتی سازنده اصلی (OEM) هم گاهی زمان تحویل طولانی و نامطمئن دارند؛ پس اقلام دیررس را یک سال یا بیشتر جلوتر شناسایی کنید.',
            en: 'In Iran, household gas demand peaks in winter, so turnarounds of gas facilities are usually planned for the warm months in coordination with gas dispatch. Imported OEM parts can have long and uncertain lead times, so identify long-lead items a year or more ahead.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'دشمن اصلی تعمیرات اساسی', en: 'The turnaround’s worst enemy' },
          text: {
            fa: 'بزرگ‌ترین دشمن تعمیرات اساسی **افزایش دامنه کار پس از انجماد** است: کارهای کوچکی که در لحظه آخر اضافه می‌شوند، قطعه و مجوز آماده ندارند و مسیر بحرانی را عقب می‌اندازند. هر افزودنی باید درخواست تغییر رسمی، برآورد هزینه و تأیید داشته باشد.',
            en: 'A turnaround’s worst enemy is **scope growth after the freeze**: small jobs added at the last minute have no parts or permits ready and push out the critical path. Every addition needs a formal change request, a cost estimate and an approval.',
          },
        },
      ],
    },
    {
      id: 'spares-critical',
      title: { fa: 'قطعات یدکی و قطعات حیاتی', en: 'Spare Parts and Critical Spares' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**قطعه یدکی** کالایی است که برای پشتیبانی از نگهداری در انبار نگه می‌داریم. نگه‌داشتن هر قطعه هزینه دارد (سرمایه راکد، انبارداری، نگهداری قطعه در انبار و خطر از رده خارج شدن) و نداشتنش هم هزینه دارد (توقف تولید). مدیریت قطعات یدکی یعنی پیدا کردن تعادل میان این دو.',
            en: 'A **spare part** is an item held in stock to support maintenance. Holding a part costs money (tied-up capital, storage, preservation and the risk of obsolescence), and not having it costs money too (lost production). Spare-parts management is about balancing the two.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'گروه‌های قطعات یدکی در مسار پترولیوم', en: 'Spare-part categories at Masar Petroleum' },
          head: [
            { fa: 'گروه', en: 'Category' },
            { fa: 'مثال', en: 'Example' },
            { fa: 'سیاست نگهداری', en: 'Stocking policy' },
            { fa: 'حسابداری معمول', en: 'Usual accounting' },
          ],
          rows: [
            [
              { fa: 'مصرفی', en: 'Consumables' },
              { fa: 'روغن روانکاری، واشر، المنت فیلتر', en: 'Lube oil, gaskets, filter elements' },
              { fa: 'حداقل و حداکثر با نقطه سفارش', en: 'Min/max with a reorder point' },
              { fa: 'موجودی کالا؛ هنگام حواله هزینه می‌شود', en: 'Inventory; expensed when issued' },
            ],
            [
              { fa: 'یدکی انباری', en: 'Stock spares' },
              { fa: 'بلبرینگ، آب‌بند مکانیکی پمپ', en: 'Bearings, pump mechanical seals' },
              { fa: 'حداقل و حداکثر بر پایه مصرف', en: 'Min/max based on usage' },
              { fa: 'موجودی کالا؛ هنگام حواله هزینه می‌شود', en: 'Inventory; expensed when issued' },
            ],
            [
              { fa: 'حیاتی (بیمه‌ای)', en: 'Critical (insurance) spares' },
              { fa: 'آب‌بند گاز خشک، روتور یدکی کمپرسور', en: 'Dry gas seal cartridge, spare compressor rotor' },
              { fa: 'دست‌کم یک عدد، حتی اگر کم مصرف شود', en: 'Keep at least one, even if rarely used' },
              { fa: 'موجودی کالا یا دارایی ثابت (نکته پایین)', en: 'Inventory or PP&E (see the note below)' },
            ],
            [
              { fa: 'تعمیرپذیر (چرخشی)', en: 'Rotables (repairables)' },
              { fa: 'عملگر شیر کنترل، قطعات توربین گازی', en: 'Control valve actuators, gas turbine parts' },
              { fa: 'تعویض: واحد سالم حواله و واحد خراب تعمیر می‌شود', en: 'Exchange: issue a good unit, repair the failed one' },
              { fa: 'طبق سیاست شرکت؛ با شماره سریال پیگیری می‌شود', en: 'Per company policy; tracked by serial number' },
            ],
            [
              { fa: 'غیرانباری', en: 'Non-stock items' },
              { fa: 'واشر ویژه یک مخزن قدیمی', en: 'Special gasket set for an old vessel' },
              { fa: 'نگهداری نمی‌شود؛ برای هر کار خریده می‌شود', en: 'Not stocked; bought per job' },
              { fa: 'مستقیم به دستور کار منظور می‌شود', en: 'Charged directly to the work order' },
            ],
          ],
        },
        {
          type: 'h',
          text: { fa: 'قطعه حیاتی را چگونه تشخیص دهیم؟', en: 'How to recognise a critical spare' },
        },
        {
          type: 'p',
          text: {
            fa: 'قطعه‌ای حیاتی است که اگر لازم شود و نباشد، پیامد بزرگی دارد. سه پرسش کلیدی: تجهیزِ صاحب قطعه چقدر حیاتی است و آیا یدک یا مسیر جایگزین دارد؟ زمان تحویل قطعه چقدر است و آیا فقط یک تأمین‌کننده دارد؟ احتمال نیاز به آن در سال چقدر است؟',
            en: 'A spare is critical when not having it at the moment of need has a large consequence. Three key questions: how critical is the equipment it belongs to, and is there a standby or bypass? How long is the lead time, and is there only one supplier? How likely is it to be needed in a year?',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'زیان مورد انتظار اجتناب‌شده در سال = احتمال نیاز در سال × روزهای توقفِ اجتناب‌شده × هزینه یک روز توقف',
            en: 'Expected annual loss avoided = probability of need per year × downtime days avoided × cost of one day of downtime',
          },
          note: {
            fa: 'آن را با هزینه سالانه نگهداری قطعه مقایسه کنید (فرض این درس: سالانه 20٪ قیمت قطعه؛ نرخ واقعی را واحد مالی شرکت تعیین می‌کند).',
            en: 'Compare it with the part’s annual holding cost (assumed in this lesson at 20% of the part’s price per year; your Finance team sets the real rate).',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'آب‌بند گاز خشک کمپرسورها', en: 'The compressors’ dry gas seal' },
          text: {
            fa: 'آب‌بند گاز خشک (Dry Gas Seal) کمپرسورهای K-101 و K-102 قیمتش 210,000 و زمان تحویلش 20 هفته (140 روز) است. احتمال نیاز به آن در سال 0.2 برآورد شده است. با قطعه آماده، توقف 4 روز طول می‌کشد؛ بدون آن 140 روز. هزینه هر روز توقف (گاز تحویل‌نشده، پس از جبران بخشی از آن با کمپرسور دیگر) 12,000 است. زیان اجتناب‌شده: 0.2 × (140 − 4) × 12,000 = 326,400 در سال. هزینه نگهداری: 20٪ × 210,000 = 42,000 در سال. پس نگه‌داشتن یک عدد کاملاً توجیه دارد.',
            en: 'The dry gas seal cartridge for compressors K-101 and K-102 costs 210,000 and has a 20-week (140-day) lead time. The probability of needing it in a year is estimated at 0.2. With a spare on the shelf the outage lasts 4 days; without it, 140 days. Each day of outage costs 12,000 (gas not delivered, after the other compressor makes up part of it). Loss avoided: 0.2 × (140 − 4) × 12,000 = 326,400 a year. Holding cost: 20% × 210,000 = 42,000 a year. Keeping one is clearly justified.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'نقطه سفارش = میانگین مصرف هفتگی × زمان تحویل (هفته) + موجودی اطمینان',
            en: 'Reorder point = average weekly usage × lead time (weeks) + safety stock',
          },
          note: {
            fa: 'المنت فیلتر روغن K-101 و K-102: 4 عدد در هفته × 6 هفته + 8 = 32. وقتی موجودی در دسترس به 32 برسد، ERP درخواست خرید پیشنهاد می‌دهد.',
            en: 'Lube oil filter elements for K-101 and K-102: 4 per week × 6 weeks + 8 = 32. When available stock falls to 32, the ERP proposes a purchase requisition.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'نکته IFRS', en: 'IFRS note' },
          text: {
            fa: 'طبق IAS 16، قطعات یدکی، تجهیزات آماده‌به‌کار و تجهیزات تعمیراتی اگر تعریف دارایی ثابت مشهود را داشته باشند (مثلاً انتظار می‌رود بیش از یک دوره استفاده شوند، مانند روتور یدکی که برای یک کمپرسور خاص نگه داشته می‌شود) جزو دارایی‌های ثابت مشهود ثبت می‌شوند؛ وگرنه موجودی کالا هستند. این موضوع را در درس «حسابداری دارایی‌ها و هزینه‌های سرمایه‌ای» کامل‌تر می‌بینیم.',
            en: 'Under IAS 16, spare parts, stand-by equipment and servicing equipment are recognised as property, plant and equipment when they meet its definition (for example, they are expected to be used for more than one period, like a spare rotor held for a specific compressor); otherwise they are inventory. The lesson on asset accounting and CAPEX goes further.',
          },
        },
      ],
    },
    {
      id: 'warehouse-procurement',
      title: { fa: 'پیوند با انبار، خرید و پیمانکاران', en: 'Linking to the Warehouse, Procurement and Contractors' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'وقتی برنامه‌ریز فهرست قطعات را به دستور کار اضافه می‌کند، ERP همان لحظه نگهداری را به انبار و خرید وصل می‌کند. دستور کار `WO-50231` برای تعویض آب‌بند مکانیکی پمپ P-120 را دنبال کنیم.',
            en: 'The moment the planner adds components to a work order, the ERP links maintenance to the warehouse and to procurement. Let’s follow work order `WO-50231` to replace the mechanical seal of pump P-120.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'فهرست قطعات', en: 'Component list' },
              text: {
                fa: 'برنامه‌ریز قطعات را از فهرست قطعات (BOM) پمپ با مقدار و تاریخ نیاز به دستور کار می‌آورد.',
                en: 'The planner copies the parts from the pump’s bill of materials (BOM) into the work order, with quantities and the need date.',
              },
            },
            {
              title: { fa: 'کنترل موجودی در دسترس', en: 'Availability check' },
              text: {
                fa: 'ERP نیاز را با موجودی‌ای مقایسه می‌کند که واقعاً آزاد است، نه فقط موجودی روی قفسه.',
                en: 'The ERP compares the need with the stock that is really free, not just what is on the shelf.',
              },
            },
            {
              title: { fa: 'رزرو کالا', en: 'Reservation' },
              text: {
                fa: 'برای اقلام انباری، ERP رزرو می‌سازد تا انباردار قطعه را برای همین کار نگه دارد.',
                en: 'For stock items the ERP creates a reservation, so the storekeeper holds the parts for this job.',
              },
            },
            {
              title: { fa: 'انتقال بین انبارها', en: 'Stock transfer' },
              text: {
                fa: 'اگر انبار میدان کسری دارد و انبار مرکزی موجودی دارد، درخواست انتقال ثبت می‌شود.',
                en: 'If the Field Warehouse is short and the Central Warehouse has stock, a transfer is requested.',
              },
            },
            {
              title: { fa: 'درخواست خرید برای اقلام غیرانباری', en: 'Purchase requisition for non-stock items' },
              text: {
                fa: 'از خودِ دستور کار ساخته می‌شود و دستور کار را به‌عنوان موضوع هزینه با خود دارد؛ پس هزینه مستقیم روی همین کار می‌نشیند.',
                en: 'It is created from the work order itself and carries the work order as its account assignment, so the cost lands directly on this job.',
              },
            },
            {
              title: { fa: 'درخواست خدمت', en: 'Service requisition' },
              text: {
                fa: 'برای کار پیمانکار، یک ردیف خدمت به واحد خرید می‌رود؛ معمولاً به‌صورت سفارش از محل قرارداد چارچوبی.',
                en: 'For contractor work, a service line goes to procurement, usually as a call-off under a framework contract.',
              },
            },
            {
              title: { fa: 'کیت‌کردن و حواله انبار', en: 'Kitting and goods issue' },
              text: {
                fa: 'پیش از شروع کار، قطعات در یک کیت آماده می‌شوند و با ثبت حواله انبار هنگام تحویل، بهای آن‌ها از موجودی به دستور کار منتقل می‌شود.',
                en: 'Before the job starts, the parts are picked into a kit; the goods issue posted at handover moves their cost from inventory to the work order.',
              },
            },
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'مقدار در دسترس = موجودی روی دست − رزروشده برای کارهای دیگر + رسیدهای قطعی پیش از تاریخ نیاز',
            en: 'Available quantity = on hand − reserved for other work + confirmed receipts due before the need date',
          },
        },
        {
          type: 'table',
          caption: { fa: 'نتیجه کنترل موجودی برای WO-50231', en: 'Availability check for WO-50231' },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'نوع', en: 'Type' },
            { fa: 'نیاز', en: 'Required' },
            { fa: 'در دسترس در انبار میدان', en: 'Available at the Field Warehouse' },
            { fa: 'اقدام ERP', en: 'ERP action' },
          ],
          rows: [
            [
              { fa: 'کارتریج آب‌بند مکانیکی', en: 'Mechanical seal cartridge' },
              { fa: 'انباری، حیاتی', en: 'Stock, critical' },
              { fa: '1 عدد', en: '1 each' },
              { fa: '0 (1 موجود، 1 رزرو برای کار دیگر)', en: '0 (1 on hand, 1 reserved for another job)' },
              { fa: 'انتقال 1 عدد از انبار مرکزی (2 عدد آزاد)', en: 'Transfer 1 from the Central Warehouse (2 free)' },
            ],
            [
              { fa: 'ست بلبرینگ', en: 'Bearing set' },
              { fa: 'انباری', en: 'Stock' },
              { fa: '2 ست', en: '2 sets' },
              { fa: '6 ست', en: '6 sets' },
              { fa: 'رزرو 2 ست', en: 'Reserve 2 sets' },
            ],
            [
              { fa: 'ست واشر ویژه', en: 'Special gasket set' },
              { fa: 'غیرانباری', en: 'Non-stock' },
              { fa: '1 ست', en: '1 set' },
              { fa: 'ندارد', en: 'n/a' },
              { fa: 'درخواست خرید با موضوع هزینه WO-50231', en: 'Purchase requisition assigned to WO-50231' },
            ],
            [
              { fa: 'تراز لیزری پمپ و الکتروموتور', en: 'Laser alignment of pump and motor' },
              { fa: 'خدمت', en: 'Service' },
              { fa: '1 کار', en: '1 job' },
              { fa: 'ندارد', en: 'n/a' },
              { fa: 'سفارش از محل قرارداد چارچوبی تراز لیزری', en: 'Call-off under the alignment framework contract' },
            ],
          ],
        },
        {
          type: 'h',
          text: { fa: 'خدمات پیمانکاران', en: 'Contractor services' },
        },
        {
          type: 'p',
          text: {
            fa: 'بخش بزرگی از کار نگهداری در میدان‌های نفتی را پیمانکاران انجام می‌دهند: خدمات سازنده اصلی (OEM)، تراز لیزری، بازرسی غیرمخرب (NDT)، داربست و عایق‌کاری. خرید خدمت با خرید کالا فرق دارد: چیزی وارد انبار نمی‌شود و به جای رسید انبار، کارفرما با **برگه ثبت خدمات (SES)** تأیید می‌کند که کار طبق قرارداد انجام شده است. SES را کسی تأیید می‌کند که کار را دیده است (سرپرست کار یا مسئول دستور کار)، نه خریدار و نه خود پیمانکار. همین تأیید است که هزینه را روی دستور کار ثبت می‌کند و بعداً فاکتور پیمانکار با آن تطبیق داده می‌شود.',
            en: 'Much of the maintenance work in oil fields is done by contractors: OEM field service, laser alignment, non-destructive testing (NDT), scaffolding and insulation. Buying a service differs from buying goods: nothing enters the warehouse, and instead of a goods receipt the company confirms on a **service entry sheet (SES)** that the work was done as contracted. The SES is approved by someone who saw the work (the job supervisor or work order owner), never the buyer or the contractor. That approval is what posts the cost to the work order, and the contractor’s invoice is later matched against it.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'خرید کالا', en: 'Buying materials' },
            items: [
              { fa: 'زنجیره اسناد: درخواست خرید، سفارش خرید، رسید انبار، فاکتور', en: 'Documents: requisition → purchase order → goods receipt → invoice' },
              { fa: 'شمارش مقدار و بازرسی کیفی هنگام رسید', en: 'Quantity counted and quality inspected at receipt' },
              { fa: 'اقلام انباری به انبار و اقلام غیرانباری مستقیم به کار می‌روند', en: 'Stock items go to the warehouse; non-stock items go straight to the job' },
              { fa: 'ثبت مالی هنگام رسید انبار', en: 'Finance posting at goods receipt' },
            ],
          },
          right: {
            title: { fa: 'خرید خدمت', en: 'Buying services' },
            items: [
              { fa: 'درخواست خرید خدمت یا سفارش از محل قرارداد چارچوبی', en: 'Service requisition or call-off under a framework contract' },
              { fa: 'صورت‌وضعیت (SES) با تأیید کسی که کار را دیده است', en: 'Service entry sheet (SES) approved by someone who saw the work' },
              { fa: 'نرخ‌ها از قرارداد (روزانه، هر کار، هر متر)', en: 'Rates from the contract (per day, per job, per metre)' },
              { fa: 'صلاحیت HSE پیمانکار و مجوز کار', en: 'Contractor HSE pre-qualification and permit to work' },
              { fa: 'ثبت مالی هنگام تأیید SES', en: 'Finance posting when the SES is approved' },
            ],
          },
        },
        {
          type: 'h',
          text: { fa: 'برنامه‌ریزی، خرید را هدایت می‌کند', en: 'Planning drives procurement' },
        },
        {
          type: 'list',
          items: [
            {
              fa: 'برنامه‌های PM مصرف قطعات 12 ماه آینده را پیش‌بینی می‌کنند و ERP آن را به نیاز مواد و پیشنهاد سفارش تبدیل می‌کند.',
              en: 'PM plans forecast parts usage for the next 12 months, and the ERP turns that into material requirements and order proposals.',
            },
            {
              fa: 'دامنه تعمیرات اساسی، درخواست‌های خرید اقلام دیررس را یک سال یا بیشتر جلوتر می‌سازد.',
              en: 'The turnaround scope drives long-lead purchase requisitions a year or more ahead.',
            },
            {
              fa: 'نقطه سفارش قطعات انباری به‌طور خودکار درخواست خرید ایجاد می‌کند.',
              en: 'Reorder points on stock spares raise purchase requisitions automatically.',
            },
            {
              fa: 'حجم سالانه خدمات (ساعت NDT، تعداد آزمون شیر اطمینان) پایه قراردادهای چارچوبی با نرخ ثابت است.',
              en: 'Annual service volumes (NDT hours, number of PSV tests) are the basis for framework contracts with fixed rates.',
            },
            {
              fa: 'برنامه‌ریزی خوب به واحد خرید اجازه می‌دهد با زمان تحویل عادی و از راه مناقصه رقابتی بخرد، نه با خرید اضطراری گران.',
              en: 'Good planning lets procurement buy on normal lead times through competitive tenders, instead of expensive emergency purchases.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در صنعت نفت ایران، تأمین‌کنندگان و پیمانکاران معمولاً باید در فهرست فروشندگان تأییدشده (Vendor List) باشند و صلاحیت فنی و HSE داشته باشند؛ قراردادها هم طبق آیین‌نامه معاملات شرکت برگزار می‌شوند. جزئیات این مقررات را در هر شرکت از آخرین آیین‌نامه‌های داخلی بررسی کنید.',
            en: 'In Iran’s oil industry, suppliers and contractors usually have to be on an approved vendor list with technical and HSE qualification, and contracts are awarded under the company’s procurement regulations. Check your company’s latest internal rules for the details.',
          },
        },
      ],
    },
    {
      id: 'erp-planning',
      title: { fa: 'در ERP: از برنامه‌ریزی تا ثبت خودکار در مالی', en: 'In the ERP: From Planning to Automatic Finance Postings' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'حالا همه‌چیز را کنار هم بگذاریم. ماژول مدیریت دارایی (نگهداری) در ERP با **داده‌های پایه** کار می‌کند که یک‌بار تعریف می‌شوند، و هر رویداد یک **سند تراکنشی** می‌سازد. هر سندی که ارزش جابه‌جا کند، **خودکار** در دفتر کل ثبت می‌شود؛ حسابدار آن را دستی وارد نمی‌کند.',
            en: 'Now let’s put it all together. The asset management (maintenance) module of the ERP works on **master data** defined once, and every event creates a **transaction document**. Every document that moves value posts to the general ledger **automatically**; no accountant keys it in.',
          },
        },
        {
          type: 'diagram',
          id: 'work-order-flow',
          caption: {
            fa: 'چرخه دستور کار: اعلان، برنامه‌ریزی، تأیید، زمان‌بندی، اجرا، تکمیل و تسویه هزینه به موضوع‌های هزینه.',
            en: 'The work order lifecycle: notification, planning, approval, scheduling, execution, completion and settlement to cost objects.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'داده‌های پایه‌ای که WO-50231 از آن‌ها استفاده می‌کند', en: 'Master data used by WO-50231' },
          head: [
            { fa: 'داده پایه', en: 'Master data' },
            { fa: 'نمونه', en: 'Example' },
            { fa: 'مالک داده', en: 'Owner' },
          ],
          rows: [
            [
              { fa: 'محل عملیاتی', en: 'Functional location' },
              { fa: '`ARY-CS-GC-P120`: جایگاه پمپ میعانات در ایستگاه تقویت فشار', en: '`ARY-CS-GC-P120`: condensate pump position at the compressor station' },
              { fa: 'مهندسی نگهداری', en: 'Maintenance engineering' },
            ],
            [
              { fa: 'تجهیز', en: 'Equipment' },
              { fa: 'پمپ P-120 با شماره سریال و سازنده', en: 'Pump P-120 with serial number and manufacturer' },
              { fa: 'مهندسی نگهداری', en: 'Maintenance engineering' },
            ],
            [
              { fa: 'فهرست قطعات (BOM)', en: 'Bill of materials (BOM)' },
              { fa: 'کارتریج آب‌بند، ست بلبرینگ، واشرها', en: 'Seal cartridge, bearing sets, gaskets' },
              { fa: 'مهندسی نگهداری', en: 'Maintenance engineering' },
            ],
            [
              { fa: 'داده پایه کالا', en: 'Material master' },
              { fa: 'کارتریج آب‌بند: حیاتی، انباری، گروه ارزش‌گذاری «قطعات یدکی»', en: 'Seal cartridge: critical, stocked, valuation class “spare parts”' },
              { fa: 'انبار و تیم داده کالا', en: 'Warehouse and material data team' },
            ],
            [
              { fa: 'دستورالعمل کار', en: 'Task list' },
              { fa: '«تعویض آب‌بند مکانیکی»: 6 مرحله، 24 ساعت مکانیک', en: '“Replace mechanical seal”: 6 steps, 24 mechanical hours' },
              { fa: 'برنامه‌ریزی', en: 'Planning' },
            ],
            [
              { fa: 'مرکز کار', en: 'Work centre' },
              { fa: 'گروه مکانیک، مرکز هزینه CC-3900، نرخ 200 در ساعت', en: 'Mechanical crew, cost centre CC-3900, rate 200 per hour' },
              { fa: 'نگهداری و مالی (نرخ)', en: 'Maintenance; Finance (rate)' },
            ],
            [
              { fa: 'فروشنده و قرارداد چارچوبی', en: 'Vendor and framework contract' },
              { fa: 'پیمانکار تراز لیزری، نرخ ثابت هر کار', en: 'Alignment contractor, fixed rate per job' },
              { fa: 'خرید', en: 'Procurement' },
            ],
            [
              { fa: 'مرکز هزینه', en: 'Cost centre' },
              { fa: 'CC-3100: بهره‌برداری ایستگاه تقویت فشار', en: 'CC-3100: compressor station operations' },
              { fa: 'مالی (حسابداری مدیریت)', en: 'Finance (controlling)' },
            ],
          ],
        },
        {
          type: 'table',
          caption: { fa: 'اسناد، نقش‌ها و تأییدها', en: 'Documents, roles and approvals' },
          head: [
            { fa: 'سند', en: 'Document' },
            { fa: 'چه کسی', en: 'Who' },
            { fa: 'تأیید', en: 'Approval' },
          ],
          rows: [
            [{ fa: 'اعلان خرابی (نشت آب‌بند، P2)', en: 'Notification (seal leak, P2)' }, { fa: 'اپراتور', en: 'Operator' }, { fa: 'سرپرست شیفت اولویت را تأیید می‌کند', en: 'Shift supervisor confirms priority' }],
            [
              { fa: 'دستور کار با برآورد 58,000', en: 'Work order with a 58,000 estimate' },
              { fa: 'برنامه‌ریز', en: 'Planner' },
              { fa: 'بالای 50,000 مدیر نگهداری (سقف نمونه)', en: 'Above 50,000, the maintenance manager (illustrative limit)' },
            ],
            [{ fa: 'رزرو و درخواست انتقال', en: 'Reservation and transfer request' }, { fa: 'ERP از روی دستور کار', en: 'ERP, from the work order' }, { fa: 'خودکار', en: 'Automatic' }],
            [
              { fa: 'درخواست خرید و سفارش خدمت', en: 'Purchase requisition and service call-off' },
              { fa: 'ERP از روی دستور کار', en: 'ERP, from the work order' },
              { fa: 'گردش کار تأیید بودجه', en: 'Budget approval workflow' },
            ],
            [{ fa: 'سفارش خرید و رسید کالا', en: 'Purchase order and goods receipt' }, { fa: 'خریدار؛ انباردار', en: 'Buyer; storekeeper' }, { fa: 'طبق سقف اختیارات خرید', en: 'Per purchasing authority limits' }],
            [{ fa: 'حواله انبار به دستور کار', en: 'Goods issue to the work order' }, { fa: 'انباردار', en: 'Storekeeper' }, { fa: 'امضای تحویل‌گیرنده (تکنسین)', en: 'Technician signs for receipt' }],
            [{ fa: 'برگه ثبت خدمات (SES)', en: 'Service entry sheet (SES)' }, { fa: 'پیمانکار ارائه می‌دهد؛ سرپرست کار با برگه کار مقایسه می‌کند', en: 'Contractor submits; job supervisor checks it against the field ticket' }, { fa: 'مسئول دستور کار که کار را دیده است، نه خریدار', en: 'Work order owner who saw the work, not the buyer' }],
            [{ fa: 'تأیید ساعات کار (32 ساعت)', en: 'Time confirmation (32 hours)' }, { fa: 'تکنسین‌ها', en: 'Technicians' }, { fa: 'سرپرست', en: 'Supervisor' }],
            [{ fa: 'فاکتور فروشندگان', en: 'Vendor invoices' }, { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, { fa: 'تطبیق سه‌طرفه', en: 'Three-way match' }],
            [{ fa: 'تکمیل فنی و تسویه', en: 'Technical completion and settlement' }, { fa: 'برنامه‌ریز؛ مالی در پایان ماه', en: 'Planner; Finance at month-end' }, { fa: 'سرپرست نگهداری', en: 'Maintenance supervisor' }],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'انتقال کارتریج آب‌بند از انبار مرکزی به انبار میدان فقط جابه‌جایی میان دو محل از یک شرکت است و اگر هر دو انبار ارزش‌گذاری یکسان داشته باشند، ثبتی در سود و زیان ایجاد نمی‌کند. ثبت‌های مالی از حواله به دستور کار شروع می‌شوند. (برای سادگی، مالیات بر ارزش افزوده در این مثال نادیده گرفته شده است.)',
            en: 'Moving the seal cartridge from the Central Warehouse to the Field Warehouse is just a move between two locations of the same company; if both use the same valuation, it creates no profit-or-loss posting. The Finance postings start with the goods issue to the work order. (For simplicity, VAT is ignored in this example.)',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های خودکار مالی که WO-50231 می‌سازد', en: 'Automatic Finance postings generated by WO-50231' },
          entries: [
            {
              date: { fa: 'حواله انبار', en: 'Goods issue' },
              lines: [
                { account: w1.mat, debit: 39600 },
                { account: ac.inventory, credit: 39600 },
              ],
              memo: {
                fa: '1 کارتریج آب‌بند 36,000 و 2 ست بلبرینگ × 1,800 از انبار میدان.',
                en: '1 seal cartridge at 36,000 and 2 bearing sets × 1,800 from the Field Warehouse.',
              },
            },
            {
              date: { fa: 'رسید کالای غیرانباری', en: 'Non-stock goods receipt' },
              lines: [
                { account: w1.mat, debit: 4200 },
                { account: ac.grir, credit: 4200 },
              ],
              memo: {
                fa: 'ست واشر ویژه مستقیم برای همین دستور کار رسید شد.',
                en: 'Special gasket set received directly for this work order.',
              },
            },
            {
              date: { fa: 'تأیید SES', en: 'SES approved' },
              lines: [
                { account: w1.svc, debit: 9800 },
                { account: ac.grir, credit: 9800 },
              ],
              memo: { fa: 'تراز لیزری توسط پیمانکار انجام و تأیید شد.', en: 'Laser alignment done by the contractor and approved.' },
            },
            {
              date: { fa: 'تأیید ساعات کار', en: 'Time confirmation' },
              lines: [
                { account: w1.lab, debit: 6400 },
                { account: ac.labourAlloc, credit: 6400 },
              ],
              memo: { fa: '32 ساعت × نرخ 200 گروه مکانیک.', en: '32 hours × the mechanical crew rate of 200.' },
            },
            {
              date: { fa: 'فاکتور فروشندگان', en: 'Vendor invoices' },
              lines: [
                { account: ac.grir, debit: 14000 },
                { account: ac.ap, credit: 14000 },
              ],
              memo: {
                fa: 'فاکتور واشر 4,200 و پیمانکار 9,800 پس از تطبیق سه‌طرفه؛ حساب واسط صفر می‌شود.',
                en: 'Gasket invoice 4,200 and contractor invoice 9,800 after the three-way match; the clearing account goes to zero.',
              },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'هزینه WO-50231: برآورد در برابر واقعی', en: 'WO-50231 cost: estimate vs actual' },
          head: [
            { fa: 'جزء هزینه', en: 'Cost element' },
            { fa: 'برآورد', en: 'Estimate' },
            { fa: 'واقعی', en: 'Actual' },
            { fa: 'انحراف', en: 'Variance' },
          ],
          rows: [
            [{ fa: 'قطعات انباری', en: 'Stock materials' }, 39600, 39600, 0],
            [{ fa: 'قطعات غیرانباری', en: 'Non-stock materials' }, 4000, 4200, 200],
            [{ fa: 'خدمات پیمانکار', en: 'Contractor services' }, 9600, 9800, 200],
            [{ fa: 'دستمزد داخلی', en: 'Internal labour' }, 4800, 6400, 1600],
            [{ fa: 'جمع', en: 'Total' }, 58000, 60000, 2000],
          ],
          numericCols: [1, 2, 3],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'تسویه دستور کار', en: 'Work order settlement' },
          text: {
            fa: 'برآورد دستمزد 24 ساعت بود، اما کار 32 ساعت طول کشید؛ بیشتر انحراف از همین‌جاست. در پایان ماه، دستور کار هزینه 60,000 را به گیرنده نهایی **تسویه (Settle)** می‌کند. برای این کار جاری، گیرنده مرکز هزینه ایستگاه تقویت فشار (CC-3100) است. تسویه به مرکز هزینه جمع دفتر کل را تغییر نمی‌دهد؛ فقط در حسابداری مدیریت، هزینه را از دستور کار به مرکز هزینه (و از آنجا به میدان و قرارداد) می‌برد. اگر کار سرمایه‌ای بود، گیرنده دارایی در جریان تکمیل می‌شد و آن تسویه یک سند مالی واقعی می‌ساخت.',
            en: 'Labour was estimated at 24 hours but the job took 32, which explains most of the variance. At month-end the work order **settles** its 60,000 to the final receiver. For this routine repair, that is the compressor station cost centre (CC-3100). Settling to a cost centre does not change the general ledger total; it only moves the cost, in management accounting, from the work order to the cost centre (and from there to the field and the contract). Had the job been capital, the receiver would be an asset under construction, and that settlement would create a real Finance document.',
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
              fa: 'برداشتن قطعه از انبار بدون ثبت حواله: موجودی ERP خیالی می‌شود و در اضطرار بعدی قفسه خالی است.',
              en: 'Taking parts without a goods issue: ERP stock becomes fiction and the next emergency finds an empty bin.',
            },
            {
              fa: 'ثبت همه کارها با اولویت P1: کارهای واقعاً اضطراری گم می‌شوند و برنامه هیچ‌وقت اجرا نمی‌شود.',
              en: 'Raising every job as P1: real emergencies get lost and the schedule never holds.',
            },
            {
              fa: 'سفارش قطعه غیرانباری روی یک مرکز هزینه عمومی به جای دستور کار: هزینه واقعی کار و پشتوانه بازیافت هزینه از دست می‌رود.',
              en: 'Ordering non-stock parts on a general cost centre instead of the work order: the job’s true cost and its cost-recovery support are lost.',
            },
            {
              fa: 'فرستادن کار به برنامه پیش از آماده شدن قطعات: تکنسین‌ها منتظر می‌مانند، مجوزها منقضی می‌شوند و کار «دیرکرد» گزارش می‌شود.',
              en: 'Releasing a job to the schedule before its parts are available: technicians wait, permits expire and the job is reported late.',
            },
            {
              fa: 'بستن دستور کار بدون ثبت ساعات کار: هزینه دستمزد در مرکز هزینه گروه می‌ماند و کار ارزان‌تر از واقع دیده می‌شود.',
              en: 'Closing work orders without confirming hours: labour cost stays in the crew’s cost centre and the job looks cheaper than it was.',
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
            fa: 'این تمرین‌ها از ساده به دشوار مرتب شده‌اند. هر کدام موقعیت تازه‌ای در شرکت مسار پترولیوم است. پیش از دیدن پاسخ، خودتان حساب کنید.',
            en: 'These exercises run from easy to hard. Each is a new situation at Masar Petroleum. Work it out yourself before opening the solution.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'کارهای انباشته گروه ابزار دقیق', en: 'The instrument crew’s backlog' },
          difficulty: 'easy',
          problem: {
            fa: 'گروه ابزار دقیق میدان آریا 5 تکنسین دارد که هر کدام 40 ساعت در هفته کار می‌کنند، اما فقط 85٪ این زمان برای کارهای انباشته در دسترس است (بقیه صرف جلسه، آموزش و جابه‌جایی می‌شود). کارهای انباشته را به هفته حساب کنید و تفسیر کنید.',
            en: 'The Arya field instrument crew has 5 technicians working 40 hours a week each, but only 85% of that time is available for backlog work (the rest goes to meetings, training and travel). Express the backlog in weeks and interpret it.',
          },
          given: {
            head: [
              { fa: 'وضعیت', en: 'Status' },
              { fa: 'ساعت نیرو', en: 'Labour hours' },
            ],
            rows: [
              [{ fa: 'آماده', en: 'Ready' }, 680],
              [{ fa: 'منتظر قطعه', en: 'Waiting for materials' }, 255],
              [{ fa: 'منتظر توقف واحد', en: 'Waiting for shutdown' }, 85],
            ],
            numericCols: [1],
          },
          hint: {
            fa: 'اول ظرفیت هفتگی واقعی را حساب کنید، نه ظرفیت اسمی.',
            en: 'First work out the real weekly capacity, not the nominal one.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'ظرفیت هفتگی', en: 'Weekly capacity' },
                  text: { fa: '5 × 40 × 85٪ = 170 ساعت در هفته.', en: '5 × 40 × 85% = 170 hours per week.' },
                },
                {
                  title: { fa: 'کارهای آماده', en: 'Ready backlog' },
                  text: { fa: '680 ÷ 170 = 4 هفته.', en: '680 ÷ 170 = 4 weeks.' },
                },
                {
                  title: { fa: 'کل کارهای انباشته', en: 'Total backlog' },
                  text: { fa: '680 + 255 + 85 = 1,020 ساعت؛ 1,020 ÷ 170 = 6 هفته.', en: '680 + 255 + 85 = 1,020 hours; 1,020 ÷ 170 = 6 weeks.' },
                },
                {
                  title: { fa: 'تفسیر', en: 'Interpretation' },
                  text: {
                    fa: 'کارهای آماده در مرز بالای بازه رایج 2 تا 4 هفته است. 255 ÷ 170 = 1.5 هفته کار فقط منتظر قطعه است؛ باید با واحد خرید پیگیری شود.',
                    en: 'The ready backlog sits at the top of the common 2 to 4 week range. 255 ÷ 170 = 1.5 weeks of work is waiting only for parts; follow it up with procurement.',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: 'کارهای آماده 4 هفته، کل کارهای انباشته 6 هفته؛ 1.5 هفته منتظر قطعه است.',
            en: 'Ready backlog 4 weeks, total backlog 6 weeks; 1.5 weeks is waiting for materials.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'نقطه سفارش و درخواست خرید', en: 'Reorder point and purchase requisition' },
          difficulty: 'medium',
          problem: {
            fa: 'المنت‌های فیلتر جداکننده (Coalescer) اسکرابر گاز در انبار میدان نگهداری می‌شوند. نقطه سفارش را حساب کنید، بگویید آیا ERP باید درخواست خرید بسازد یا نه، و اگر بله، مقدار آن را طوری تعیین کنید که موجودی در دسترس به حداکثر برسد.',
            en: 'Coalescer filter elements for the gas scrubber are stocked at the Field Warehouse. Compute the reorder point, say whether the ERP should raise a purchase requisition and, if so, the quantity that brings available stock up to the maximum.',
          },
          given: {
            head: [
              { fa: 'داده', en: 'Data' },
              { fa: 'مقدار', en: 'Value' },
            ],
            rows: [
              [{ fa: 'میانگین مصرف هفتگی (عدد)', en: 'Average weekly usage (each)' }, 6],
              [{ fa: 'زمان تحویل (هفته)', en: 'Lead time (weeks)' }, 5],
              [{ fa: 'موجودی اطمینان', en: 'Safety stock' }, 10],
              [{ fa: 'حداکثر موجودی', en: 'Maximum stock' }, 80],
              [{ fa: 'موجودی روی دست', en: 'On hand' }, 46],
              [{ fa: 'رزرو برای PM هفته آینده', en: 'Reserved for next week’s PM' }, 12],
              [{ fa: 'سفارش باز', en: 'Open purchase orders' }, 0],
            ],
            numericCols: [1],
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'نقطه سفارش', en: 'Reorder point' },
                  text: { fa: '6 × 5 + 10 = 40.', en: '6 × 5 + 10 = 40.' },
                },
                {
                  title: { fa: 'موجودی در دسترس', en: 'Available stock' },
                  text: {
                    fa: '46 − 12 + 0 = 34. رزرو PM متعلق به کار دیگری است، پس آزاد نیست.',
                    en: '46 − 12 + 0 = 34. The PM reservation belongs to other work, so it is not free.',
                  },
                },
                {
                  title: { fa: 'مقایسه', en: 'Compare' },
                  text: { fa: '34 کمتر از 40 است؛ پس ERP درخواست خرید می‌سازد.', en: '34 is below 40, so the ERP raises a purchase requisition.' },
                },
                {
                  title: { fa: 'مقدار سفارش', en: 'Order quantity' },
                  text: { fa: '80 − 34 = 46 عدد.', en: '80 − 34 = 46 units.' },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'اگر فقط موجودی روی دست (46) را با 40 مقایسه می‌کردید، به اشتباه نتیجه می‌گرفتید که سفارش لازم نیست و دو هفته بعد کمبود می‌خوردید.',
                en: 'Had you compared only the on-hand 46 with 40, you would wrongly conclude no order is needed and run short two weeks later.',
              },
            },
          ],
          answer: {
            fa: 'نقطه سفارش 40؛ موجودی در دسترس 34؛ درخواست خرید برای 46 عدد.',
            en: 'Reorder point 40; available 34; raise a requisition for 46 units.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'از دستور کار تا سند مالی', en: 'From work order to journal entry' },
          difficulty: 'medium',
          problem: {
            fa: 'دستور کار `WO-50418` برای تعویض بلبرینگ فن کولر هوایی گاز K-102 صادر شده است. برای هر قلم بگویید کدام سند ERP آن را ثبت می‌کند، ثبت‌های خودکار مالی را بنویسید و هزینه کل دستور کار را حساب کنید. فاکتورها پس از تطبیق سه‌طرفه ثبت می‌شوند؛ مالیات بر ارزش افزوده را نادیده بگیرید.',
            en: 'Work order `WO-50418` replaces the fan bearings of the K-102 gas air cooler. For each item, name the ERP document that records it, write the automatic Finance postings and compute the total work order cost. Invoices are posted after the three-way match; ignore VAT.',
          },
          given: {
            head: [
              { fa: 'قلم', en: 'Item' },
              { fa: 'نوع', en: 'Type' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            rows: [
              [{ fa: '2 ست بلبرینگ × 7,300', en: '2 bearing sets × 7,300' }, { fa: 'انباری', en: 'Stock' }, 14600],
              [{ fa: 'لاستیک کوپلینگ', en: 'Coupling insert' }, { fa: 'غیرانباری', en: 'Non-stock' }, 3900],
              [{ fa: 'آنالیز ارتعاش توسط پیمانکار', en: 'Vibration analysis by a contractor' }, { fa: 'خدمت', en: 'Service' }, 6500],
              [{ fa: '12 ساعت مکانیک × 200', en: '12 mechanical hours × 200' }, { fa: 'دستمزد داخلی', en: 'Internal labour' }, 2400],
            ],
            numericCols: [2],
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'قلم', en: 'Item' },
                { fa: 'سند ERP', en: 'ERP document' },
              ],
              rows: [
                [{ fa: 'بلبرینگ', en: 'Bearings' }, { fa: 'رزرو، سپس حواله انبار به دستور کار', en: 'Reservation, then goods issue to the work order' }],
                [{ fa: 'لاستیک کوپلینگ', en: 'Coupling insert' }, { fa: 'درخواست خرید با موضوع هزینه WO-50418، سفارش خرید، رسید کالا', en: 'Requisition assigned to WO-50418, purchase order, goods receipt' }],
                [{ fa: 'آنالیز ارتعاش', en: 'Vibration analysis' }, { fa: 'سفارش خدمت، صورت‌وضعیت (SES)', en: 'Service order, service entry sheet (SES)' }],
                [{ fa: 'دستمزد', en: 'Labour' }, { fa: 'تأیید ساعات کار روی دستور کار', en: 'Time confirmation on the work order' }],
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'حواله انبار', en: 'Goods issue' },
                  lines: [
                    { account: w2.mat, debit: 14600 },
                    { account: ac.inventory, credit: 14600 },
                  ],
                },
                {
                  date: { fa: 'رسید کالای غیرانباری', en: 'Non-stock goods receipt' },
                  lines: [
                    { account: w2.mat, debit: 3900 },
                    { account: ac.grir, credit: 3900 },
                  ],
                },
                {
                  date: { fa: 'تأیید SES', en: 'SES approved' },
                  lines: [
                    { account: w2.svc, debit: 6500 },
                    { account: ac.grir, credit: 6500 },
                  ],
                },
                {
                  date: { fa: 'تأیید ساعات کار', en: 'Time confirmation' },
                  lines: [
                    { account: w2.lab, debit: 2400 },
                    { account: ac.labourAlloc, credit: 2400 },
                  ],
                },
                {
                  date: { fa: 'فاکتورها', en: 'Invoices' },
                  lines: [
                    { account: ac.grir, debit: 10400 },
                    { account: ac.ap, credit: 10400 },
                  ],
                  memo: { fa: '3,900 + 6,500 = 10,400.', en: '3,900 + 6,500 = 10,400.' },
                },
              ],
            },
            {
              type: 'p',
              text: {
                fa: 'هزینه کل دستور کار: 14,600 + 3,900 + 6,500 + 2,400 = 27,400. ثبت فاکتور هزینه دستور کار را تغییر نمی‌دهد؛ فقط بدهی واسط (GR/IR) را به بدهی واقعی به فروشنده تبدیل می‌کند.',
                en: 'Total work order cost: 14,600 + 3,900 + 6,500 + 2,400 = 27,400. The invoice does not change the work order cost; it only turns the clearing balance (GR/IR) into a real debt to the vendor.',
              },
            },
          ],
          answer: { fa: 'هزینه کل WO-50418 برابر 27,400 است.', en: 'WO-50418 costs 27,400 in total.' },
        },
        {
          type: 'exercise',
          title: { fa: 'این قطعه حیاتی را نگه داریم؟', en: 'Should we stock this critical spare?' },
          difficulty: 'hard',
          problem: {
            fa: 'تیم قابلیت اطمینان دو قطعه را برای انبار پیشنهاد کرده است. برای هر کدام زیان مورد انتظار اجتناب‌شده در سال و هزینه نگهداری سالانه (20٪ قیمت، فرض این تمرین) را حساب کنید و تصمیم بگیرید.',
            en: 'The reliability team proposes two parts for stocking. For each, compute the expected annual loss avoided and the annual holding cost (20% of price, assumed for this exercise), then decide.',
          },
          given: {
            head: [
              { fa: 'داده', en: 'Data' },
              { fa: 'الف: ست نازل سوخت توربین گازی', en: 'A: gas turbine fuel nozzle set' },
              { fa: 'ب: شیر خشک‌کن هوای ابزار دقیق', en: 'B: instrument air dryer valve' },
            ],
            rows: [
              [{ fa: 'قیمت', en: 'Price' }, 240000, 30000],
              [{ fa: 'زمان تحویل (روز)', en: 'Lead time (days)' }, 182, 28],
              [{ fa: 'احتمال نیاز در سال', en: 'Probability of need per year' }, 0.1, 0.3],
              [{ fa: 'توقف با قطعه آماده (روز)', en: 'Outage with the spare on hand (days)' }, 5, 1],
              [{ fa: 'هزینه هر روز توقف', en: 'Cost per day of outage' }, 8000, 500],
            ],
            numericCols: [1, 2],
          },
          hint: {
            fa: 'روزهای اجتناب‌شده = زمان تحویل − روزهای توقف با قطعه آماده.',
            en: 'Days avoided = lead time − outage days with the spare on hand.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'محاسبه', en: 'Calculation' },
                { fa: 'الف', en: 'A' },
                { fa: 'ب', en: 'B' },
              ],
              rows: [
                [{ fa: 'روزهای اجتناب‌شده', en: 'Days avoided' }, 177, 27],
                [{ fa: 'زیان اجتناب‌شده در سال', en: 'Annual loss avoided' }, 141600, 4050],
                [{ fa: 'هزینه نگهداری در سال (20٪)', en: 'Annual holding cost (20%)' }, 48000, 6000],
                [
                  { fa: 'تصمیم', en: 'Decision' },
                  { fa: 'نگه دارید (خالص سود 93,600)', en: 'Stock it (net benefit 93,600)' },
                  { fa: 'نگه ندارید (هزینه 1,950 بیشتر از فایده)', en: 'Don’t stock (cost exceeds benefit by 1,950)' },
                ],
              ],
              numericCols: [1, 2],
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'قطعه الف', en: 'Part A' },
                  text: {
                    fa: '0.1 × (182 − 5) × 8,000 = 141,600، بیشتر از 48,000 هزینه نگهداری. نگه دارید.',
                    en: '0.1 × (182 − 5) × 8,000 = 141,600, more than the 48,000 holding cost. Stock it.',
                  },
                },
                {
                  title: { fa: 'قطعه ب', en: 'Part B' },
                  text: {
                    fa: '0.3 × (28 − 1) × 500 = 4,050، کمتر از 6,000 هزینه نگهداری. انبار نکنید؛ به جایش قرارداد چارچوبی با تحویل سریع، موجودی امانی نزد فروشنده یا اشتراک قطعه با میدان‌های دیگر را بررسی کنید.',
                    en: '0.3 × (28 − 1) × 500 = 4,050, less than the 6,000 holding cost. Do not stock it; consider a framework agreement with fast delivery, vendor-held consignment stock, or sharing the spare with other fields.',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: 'الف را نگه دارید (141,600 در برابر 48,000)؛ ب را نگه ندارید (4,050 در برابر 6,000).',
            en: 'Stock A (141,600 vs 48,000); do not stock B (4,050 vs 6,000).',
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
              fa: 'برنامه‌ریزی کار را آماده می‌کند (چه چیزی، چگونه، با چه قطعه و هزینه‌ای) و زمان‌بندی، زمان و مجری را تعیین می‌کند.',
              en: 'Planning makes a job ready (what, how, which parts, what cost); scheduling decides when and by whom.',
            },
            {
              fa: 'اولویت از ریسک می‌آید؛ کارهای انباشته را به هفته و برای هر تخصص بسنجید و کارهای منتظر قطعه را جدا ببینید.',
              en: 'Priority comes from risk; measure the backlog in weeks per craft and look separately at work waiting for parts.',
            },
            {
              fa: 'تعمیرات اساسی یک پروژه است: اقلام دیررس از یک سال پیش، انجماد دامنه از شش ماه پیش و کنترل سخت تغییرات.',
              en: 'A turnaround is a project: long-lead items a year ahead, scope freeze six months ahead and strict change control.',
            },
            {
              fa: 'قطعه حیاتی را با مقایسه زیان اجتناب‌شده و هزینه نگهداری انتخاب کنید؛ نقطه سفارش = مصرف در زمان تحویل + موجودی اطمینان.',
              en: 'Choose critical spares by comparing loss avoided with holding cost; reorder point = usage over the lead time + safety stock.',
            },
            {
              fa: 'دستور کار در ERP رزرو، انتقال، درخواست خرید و سفارش خدمت می‌سازد؛ حواله، رسید، صورت‌وضعیت (SES) و ساعات کار خودکار در مالی ثبت می‌شوند.',
              en: 'In the ERP, the work order creates reservations, transfers, requisitions and service orders; goods issues, receipts, SES approvals and time confirmations post to Finance automatically.',
            },
            {
              fa: 'موضوع هزینه درست روی هر دستور کار، پایه گزارش هزینه و دفاع از بازیافت هزینه در قرارداد نفتی است.',
              en: 'The right cost object on every work order is the basis for cost reporting and for defending cost recovery under the petroleum contract.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'برنامه‌ریزی نگهداری', en: 'Maintenance planning' },
              def: { fa: 'آماده کردن کار پیش از شروع: دامنه، روش، نیرو، قطعات، ابزار، مجوز و برآورد هزینه.', en: 'Preparing a job before it starts: scope, method, labour, parts, tools, permits and cost estimate.' },
            },
            {
              term: { fa: 'زمان‌بندی', en: 'Scheduling' },
              def: { fa: 'تعیین زمان اجرا و گروه مجری برای کارهای آماده.', en: 'Deciding when, and by which crew, ready jobs are done.' },
            },
            {
              term: { fa: 'اعلان (Notification)', en: 'Notification' },
              def: { fa: 'ثبت اولیه یک خرابی یا درخواست کار که پس از بررسی به دستور کار تبدیل می‌شود.', en: 'The first record of a failure or work request, turned into a work order after review.' },
            },
            {
              term: { fa: 'کارهای انباشته (Backlog)', en: 'Backlog' },
              def: { fa: 'کارهای تأییدشده‌ای که هنوز انجام نشده‌اند؛ معمولاً به هفته بیان می‌شود.', en: 'Approved work not yet done, usually expressed in weeks of crew capacity.' },
            },
            {
              term: { fa: 'پایبندی به برنامه', en: 'Schedule compliance' },
              def: { fa: 'درصد ساعت‌های برنامه‌ریزی‌شده‌ای که طبق برنامه انجام شده‌اند.', en: 'The share of scheduled hours completed as scheduled.' },
            },
            {
              term: { fa: 'تعمیرات اساسی (Turnaround)', en: 'Turnaround' },
              def: { fa: 'توقف بزرگ و برنامه‌ریزی‌شده یک واحد برای کارهایی که در حال کار انجام‌شدنی نیستند.', en: 'A large planned shutdown of a unit for work that cannot be done while it runs.' },
            },
            {
              term: { fa: 'انجماد دامنه', en: 'Scope freeze' },
              def: { fa: 'تاریخی که پس از آن افزودن کار فقط با درخواست تغییر رسمی ممکن است.', en: 'The date after which work can be added only through a formal change request.' },
            },
            {
              term: { fa: 'قطعه یدکی حیاتی (بیمه‌ای)', en: 'Critical (insurance) spare' },
              def: { fa: 'قطعه‌ای که کم مصرف می‌شود اما نبودنش در زمان نیاز توقف طولانی و پرهزینه می‌سازد.', en: 'A rarely used part whose absence at the moment of need causes a long, costly outage.' },
            },
            {
              term: { fa: 'نقطه سفارش', en: 'Reorder point' },
              def: { fa: 'سطحی از موجودی در دسترس که با رسیدن به آن درخواست خرید ایجاد می‌شود.', en: 'The available-stock level at which a purchase requisition is raised.' },
            },
            {
              term: { fa: 'رزرو کالا', en: 'Reservation' },
              def: { fa: 'تخصیص مقداری از موجودی انبار به یک دستور کار مشخص.', en: 'Earmarking a quantity of stock for a specific work order.' },
            },
            {
              term: { fa: 'کالای غیرانباری', en: 'Non-stock item' },
              def: { fa: 'قلمی که نگهداری نمی‌شود و برای هر کار مستقیم خریده و به دستور کار منظور می‌شود.', en: 'An item not kept in stock, bought per job and charged directly to the work order.' },
            },
            {
              term: { fa: 'برگه ثبت خدمات (SES)', en: 'Service entry sheet (SES)' },
              def: { fa: 'رسیدِ خدمت: سندی که کسی که کار را دیده تأیید می‌کند؛ هزینه را روی دستور کار ثبت می‌کند و فاکتور با آن تطبیق داده می‌شود.', en: 'The receipt for a service: approved by someone who saw the work, it posts the cost to the work order and the invoice is matched against it.' },
            },
            {
              term: { fa: 'قرارداد چارچوبی', en: 'Framework contract' },
              def: { fa: 'قرارداد بلندمدت با نرخ‌های ثابت که از محل آن سفارش‌های جداگانه داده می‌شود.', en: 'A long-term agreement with fixed rates against which individual call-offs are placed.' },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: {
        fa: 'کدام جمله تفاوت برنامه‌ریزی و زمان‌بندی نگهداری را درست بیان می‌کند؟',
        en: 'Which statement correctly describes the difference between maintenance planning and scheduling?',
      },
      options: [
        { fa: 'برنامه‌ریزی روز اجرا را تعیین می‌کند و زمان‌بندی قطعات و مراحل را فهرست می‌کند', en: 'Planning sets the day of the job; scheduling lists the parts and steps' },
        { fa: 'هر دو یک کار با دو نام متفاوت‌اند', en: 'They are the same activity with two names' },
        { fa: 'برنامه‌ریزی چه چیزی و چگونه را آماده می‌کند؛ زمان‌بندی چه زمانی و چه کسی را تعیین می‌کند', en: 'Planning prepares what and how; scheduling decides when and by whom' },
        { fa: 'برنامه‌ریزی فقط برای تعمیرات اساسی است و زمان‌بندی برای کارهای روزانه', en: 'Planning is only for turnarounds; scheduling is for daily work' },
      ],
      answer: 2,
      explain: {
        fa: 'برنامه‌ریزی کار را آماده می‌کند (دامنه، مراحل، نیرو، قطعات، هزینه) و زمان‌بندی کارهای آماده را در تقویم گروه‌ها می‌چیند. گزینه اول وسوسه‌انگیز است چون هر دو با زمان سروکار دارند، اما نقش‌ها را جابه‌جا کرده است.',
        en: 'Planning makes the job ready (scope, steps, labour, parts, cost); scheduling fits ready jobs into the crews’ calendar. The first option is tempting because both involve time, but it swaps the roles.',
      },
    },
    {
      q: {
        fa: 'گروه مکانیک 6 تکنسین دارد که هفته‌ای 40 ساعت کار می‌کنند. کارهای انباشته آماده 1,200 ساعت است. این چند هفته کار است؟',
        en: 'The mechanical crew has 6 technicians working 40 hours a week. The ready backlog is 1,200 labour hours. How many weeks is that?',
      },
      options: [
        { fa: '4 هفته', en: '4 weeks' },
        { fa: '5 هفته', en: '5 weeks' },
        { fa: '6 هفته', en: '6 weeks' },
        { fa: '200 هفته', en: '200 weeks' },
      ],
      answer: 1,
      explain: {
        fa: 'ظرفیت هفتگی 6 × 40 = 240 ساعت است و 1,200 ÷ 240 = 5 هفته. عدد 200 از تقسیم بر 6 نفر به دست می‌آید که ساعت کار هر نفر است، نه تعداد هفته.',
        en: 'Weekly capacity is 6 × 40 = 240 hours, and 1,200 ÷ 240 = 5 weeks. Dividing by the 6 people gives 200, which is hours per person, not weeks.',
      },
    },
    {
      q: {
        fa: 'مصرف المنت فیلتر 5 عدد در هفته، زمان تحویل 8 هفته و موجودی اطمینان 10 عدد است. نقطه سفارش چند است؟',
        en: 'Filter elements are used at 5 per week, the lead time is 8 weeks and the safety stock is 10. What is the reorder point?',
      },
      options: [
        { fa: '40', en: '40' },
        { fa: '45', en: '45' },
        { fa: '23', en: '23' },
        { fa: '50', en: '50' },
      ],
      answer: 3,
      explain: {
        fa: 'نقطه سفارش = 5 × 8 + 10 = 50. عدد 40 موجودی اطمینان را فراموش کرده و 23 اعداد را به جای ضرب، جمع کرده است.',
        en: 'Reorder point = 5 × 8 + 10 = 50. 40 forgets the safety stock, and 23 adds the numbers instead of multiplying usage by lead time.',
      },
    },
    {
      q: {
        fa: 'دستور کاری 5 ست بلبرینگ لازم دارد. انبار میدان 10 ست روی دست دارد که 7 ست آن برای دستورهای کار دیگر رزرو شده و سفارش بازی هم نیست. کنترل موجودی چه گزارش می‌دهد؟',
        en: 'A work order needs 5 bearing sets. The Field Warehouse has 10 on hand, 7 of them reserved for other work orders, and nothing is on order. What does the availability check report?',
      },
      options: [
        { fa: 'کسری 2 ست', en: 'A shortfall of 2 sets' },
        { fa: 'کاملاً موجود، چون 10 ست روی دست است', en: 'Fully available, since 10 are on hand' },
        { fa: 'کسری 5 ست', en: 'A shortfall of 5 sets' },
        { fa: 'کسری 7 ست', en: 'A shortfall of 7 sets' },
      ],
      answer: 0,
      explain: {
        fa: 'در دسترس = 10 − 7 + 0 = 3؛ نیاز 5 است، پس کسری 2 ست. گزینه «کاملاً موجود» رزروها را نادیده می‌گیرد، در حالی که آن 7 ست متعلق به کارهای دیگر است.',
        en: 'Available = 10 − 7 + 0 = 3; the need is 5, so the shortfall is 2. “Fully available” ignores the reservations, yet those 7 sets belong to other jobs.',
      },
    },
    {
      q: {
        fa: 'برای دستور کار WO-50231 یک واشر ویژه لازم است که در انبار نگهداری نمی‌شود. مسیر درست در ERP کدام است؟',
        en: 'Work order WO-50231 needs a special gasket that is not kept in stock. What is the right route in the ERP?',
      },
      options: [
        { fa: 'از تنخواه بخرید و به هزینه نگهداری عمومی بزنید', en: 'Buy it from petty cash and book it to general maintenance expense' },
        { fa: 'یک کالای انباری تعریف کنید و منتظر رسیدن به نقطه سفارش بمانید', en: 'Create a stock material and wait for the reorder point' },
        { fa: 'از روی دستور کار درخواست خرید با موضوع هزینه همان دستور کار بسازید؛ هنگام رسید، ERP بدهکار هزینه دستور کار و بستانکار GR/IR ثبت می‌کند', en: 'Raise a requisition from the work order, assigned to it; at goods receipt the ERP posts Dr work order cost / Cr GR/IR' },
        { fa: 'از انبار یک واشر مشابه بگیرید و بعداً موجودی را اصلاح کنید', en: 'Take a similar gasket from the warehouse and fix the stock later' },
      ],
      answer: 2,
      explain: {
        fa: 'کالای غیرانباری با درخواست خرید متصل به دستور کار خریده می‌شود تا هزینه مستقیم روی همان کار بنشیند و مدارکش برای بازیافت هزینه کامل باشد. خرید از تنخواه سریع به نظر می‌رسد، اما هزینه را از کار جدا و کنترل خرید را دور می‌زند.',
        en: 'A non-stock item is bought through a requisition tied to the work order, so the cost lands on that job with a full document trail for cost recovery. Petty cash looks quick but cuts the cost off from the job and bypasses purchasing controls.',
      },
    },
    {
      q: {
        fa: 'کدام قلم بهترین نمونه قطعه یدکی حیاتی (بیمه‌ای) است؟',
        en: 'Which item is the best example of a critical (insurance) spare?',
      },
      options: [
        { fa: 'روغن روانکاری که هر هفته مصرف می‌شود', en: 'Lube oil, used every week' },
        { fa: 'روتور یدکی کمپرسور با زمان تحویل 40 هفته و یک تأمین‌کننده که کم مصرف می‌شود اما ایستگاه بدون آن کار نمی‌کند', en: 'A spare compressor rotor with a 40-week lead time and one supplier, rarely used, but the station cannot run without it' },
        { fa: 'واشرهایی که در بسته‌های 100تایی خریده می‌شوند', en: 'Gaskets bought in boxes of 100' },
        { fa: 'لوازم اداری دفتر برنامه‌ریزی', en: 'Office supplies for the planning office' },
      ],
      answer: 1,
      explain: {
        fa: 'قطعه حیاتی کم مصرف است اما نبودنش توقفی طولانی و گران می‌سازد؛ روتور با تحویل 40 هفته‌ای دقیقاً همین است. روغن و واشر پرمصرف‌اند و با نقطه سفارش مدیریت می‌شوند، نه به‌عنوان قطعه بیمه‌ای.',
        en: 'A critical spare is rarely used but its absence causes a long, costly outage; a rotor with a 40-week lead time is exactly that. Lube oil and gaskets are fast movers managed by reorder points, not insurance spares.',
      },
    },
    {
      q: {
        fa: 'چرا دامنه تعمیرات اساسی چند ماه پیش از توقف منجمد می‌شود؟',
        en: 'Why is the turnaround scope frozen several months before the shutdown?',
      },
      options: [
        { fa: 'تا هیچ یافته بازرسی‌ای هرگز پیگیری نشود', en: 'So that no inspection finding is ever acted on' },
        { fa: 'چون ERP پس از آن تاریخ دستور کار جدید نمی‌پذیرد', en: 'Because the ERP cannot accept new work orders after that date' },
        { fa: 'تا همه کارهای عملیاتی حذف و بودجه کم شود', en: 'To cut the budget by removing all OPEX jobs' },
        { fa: 'تا قطعات دیررس، پیمانکاران، مجوزها و مسیر بحرانی برای فهرست ثابتی از کارها آماده شوند؛ افزودن بعدی درخواست تغییر رسمی می‌خواهد', en: 'So long-lead parts, contractors, permits and the critical path can be prepared for a fixed work list; later additions need a formal change request' },
      ],
      answer: 3,
      explain: {
        fa: 'آماده‌سازی تعمیرات اساسی ماه‌ها طول می‌کشد و فقط برای فهرست ثابتی از کارها ممکن است. انجماد دامنه افزودن کار را ممنوع نمی‌کند؛ آن را از مسیر درخواست تغییر با برآورد هزینه و ریسک عبور می‌دهد. محدودیت ERP ربطی به این موضوع ندارد.',
        en: 'Preparing a turnaround takes months and only works for a fixed list of jobs. The freeze does not forbid additions; it routes them through a change request with cost and risk. It has nothing to do with an ERP limitation.',
      },
    },
    {
      q: {
        fa: 'هفته گذشته 200 ساعت کار برنامه‌ریزی شد و 170 ساعت از آن طبق برنامه انجام شد. گروه 40 ساعت هم روی کارهای اضطراری کار کرد. پایبندی به برنامه چند درصد است؟',
        en: 'Last week 200 hours of work were scheduled and 170 of them were completed as scheduled. The crew also spent 40 hours on emergency jobs. What is schedule compliance?',
      },
      options: [
        { fa: '85٪', en: '85%' },
        { fa: '105٪', en: '105%' },
        { fa: '71٪', en: '71%' },
        { fa: '100٪', en: '100%' },
      ],
      answer: 0,
      explain: {
        fa: 'پایبندی = 170 ÷ 200 = 85٪. ساعت‌های اضطراری کار برنامه‌ریزی‌شده نیستند؛ آن‌ها توضیح می‌دهند چرا پایبندی افت کرد، نه اینکه آن را بالا ببرند (105٪ نادرست است).',
        en: 'Compliance = 170 ÷ 200 = 85%. Emergency hours are not scheduled work; they explain why compliance fell rather than raising it (105% is wrong).',
      },
    },
    {
      q: {
        fa: 'یک کارتریج آب‌بند به ارزش 36,000 از انبار میدان به دستور کار تعمیری WO-50231 حواله می‌شود. ERP چه ثبتی می‌زند؟',
        en: 'A seal cartridge valued at 36,000 is issued from the Field Warehouse to repair work order WO-50231. What does the ERP post?',
      },
      options: [
        { fa: 'بدهکار موجودی قطعات 36,000 / بستانکار هزینه قطعات نگهداری 36,000', en: 'Dr Inventory 36,000 / Cr Maintenance materials expense 36,000' },
        { fa: 'بدهکار هزینه قطعات نگهداری (WO-50231) 36,000 / بستانکار موجودی قطعات یدکی 36,000', en: 'Dr Maintenance materials expense (WO-50231) 36,000 / Cr Inventory: spare parts 36,000' },
        { fa: 'بدهکار هزینه قطعات نگهداری 36,000 / بستانکار حساب‌های پرداختنی 36,000', en: 'Dr Maintenance materials expense 36,000 / Cr Accounts payable 36,000' },
        { fa: 'ثبتی لازم نیست؛ هزینه فقط هنگام بستن دستور کار ثبت می‌شود', en: 'No entry; costs are posted only when the work order is closed' },
      ],
      answer: 1,
      explain: {
        fa: 'حواله ارزش را از موجودی بیرون می‌برد (بستانکار) و روی دستور کار هزینه می‌کند (بدهکار). حساب پرداختنی نادرست است، چون بدهی به فروشنده هنگام خرید قبلی ثبت شده است؛ و ERP هزینه را همان لحظه حواله ثبت می‌کند، نه هنگام بستن دستور کار.',
        en: 'The goods issue takes value out of inventory (credit) and charges it to the work order (debit). Accounts payable is wrong because the supplier debt was recorded when the part was bought; and the ERP posts at the moment of issue, not at close.',
      },
    },
    {
      q: {
        fa: 'برگه ثبت خدمات (SES) در خرید خدمات پیمانکار چه نقشی دارد؟',
        en: 'What does the service entry sheet (SES) do in contractor procurement?',
      },
      options: [
        { fa: 'همان فاکتور پیمانکار است', en: 'It is the contractor’s invoice' },
        { fa: 'جایگزین سفارش خرید می‌شود', en: 'It replaces the purchase order' },
        { fa: 'تأیید می‌کند که خدمت طبق سفارش انجام شده؛ با تأیید آن ERP بدهکار هزینه خدمات دستور کار و بستانکار GR/IR ثبت می‌کند و یکی از سه پایه تطبیق سه‌طرفه است', en: 'It confirms the service was performed as ordered; on approval the ERP posts Dr service cost (work order) / Cr GR/IR, and it is one leg of the three-way match' },
        { fa: 'رسید قطعات یدکی در انبار را ثبت می‌کند', en: 'It records the receipt of spare parts in the warehouse' },
      ],
      answer: 2,
      explain: {
        fa: 'SES نقش رسید را برای خدمت بازی می‌کند: کار تأییدشده را ثبت و هزینه را روی دستور کار می‌برد. فاکتور سند جداگانه‌ای از پیمانکار است که بعداً با سفارش و همین SES تطبیق داده می‌شود.',
        en: 'The SES plays the role of a goods receipt for a service: it records the accepted work and posts the cost to the work order. The invoice is a separate document from the contractor, later matched against the order and this SES.',
      },
    },
  ],
}
