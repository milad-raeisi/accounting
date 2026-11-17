import type { Lesson } from '../../types'

/*
 * Running example: Masar Petroleum, Arya field, compressor station (K-101, K-102),
 * separator V-201. Arya field production this year: 2,400,000 boe.
 */
const ac = {
  inspection: { fa: 'هزینه خدمات بازرسی (WO-51240، CC-ARY-CMP)', en: 'Inspection services expense (WO-51240, CC-ARY-CMP)' },
  chemicals: { fa: 'هزینه مواد شیمیایی تولید (CC-ARY-CMP)', en: 'Production chemicals expense (CC-ARY-CMP)' },
  chemStock: { fa: 'موجودی مواد شیمیایی', en: 'Inventory: production chemicals' },
  grir: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing account' },
  ap: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
}

export const lesson: Lesson = {
  slug: 'reliability-integrity-kpis',
  number: 6,
  level: 'advanced',
  minutes: 32,
  icon: 'TrendingUp',
  tone: 'revenue',
  title: { fa: 'قابلیت اطمینان، یکپارچگی دارایی و شاخص‌های عملکرد', en: 'Reliability, Asset Integrity and KPIs' },
  summary: {
    fa: 'داده خرابی را درست ثبت کنید و از آن MTBF، MTTR، دسترس‌پذیری، OEE و هزینه نگهداری به ازای هر واحد تولید را بسازید؛ اصول یکپارچگی دارایی، بازرسی و خوردگی را بشناسید و ببینید داشبوردهای ERP چگونه داده نگهداری و مالی را کنار هم می‌گذارند.',
    en: 'Capture failure data properly and turn it into MTBF, MTTR, availability, OEE and maintenance cost per unit of production; learn the basics of asset integrity, inspection and corrosion, and see how ERP dashboards bring maintenance and Finance data together.',
  },
  objectives: [
    {
      fa: 'ساختار کدهای خرابی را توضیح دهید و با تحلیل پارتو علت اصلی خرابی‌ها را پیدا کنید',
      en: 'Explain the structure of failure codes and use a Pareto view to find the main cause of failures',
    },
    {
      fa: 'MTBF، MTTR، دسترس‌پذیری و OEE را از داده واقعی حساب و تفسیر کنید',
      en: 'Calculate and interpret MTBF, MTTR, availability and OEE from real data',
    },
    {
      fa: 'هزینه نگهداری به ازای هر واحد تولید، پایبندی به PM و سهم کار برنامه‌ریزی‌شده را بسنجید',
      en: 'Measure maintenance cost per unit of production, PM compliance and the share of planned work',
    },
    {
      fa: 'نرخ خوردگی، عمر باقی‌مانده و فاصله بازرسی بعدی تجهیزات تحت فشار را برآورد کنید',
      en: 'Estimate corrosion rate, remaining life and the next inspection interval for pressure equipment',
    },
    {
      fa: 'نشان دهید داده‌های ERP از کجا به داشبورد و به ثبت‌های مالی می‌رسند',
      en: 'Show where ERP data comes from for the dashboards and the Finance postings',
    },
  ],
  sections: [
    {
      id: 'why-measure',
      title: { fa: 'چرا قابلیت اطمینان را اندازه بگیریم؟', en: 'Why Measure Reliability?' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'کمپرسور K-101 در 12 ماه گذشته 4 بار از مدار خارج شده است. مدیر تولید می‌گوید «بدشانسی بوده»، مدیر نگهداری می‌گوید «کمپرسور قدیمی است و باید تعویض شود» و واحد مالی می‌بیند هزینه نگهداری ایستگاه تقویت فشار بالا رفته است. چه کسی درست می‌گوید؟ فقط داده‌ای که در دستورهای کار ثبت شده می‌تواند پاسخ دهد.',
            en: 'Compressor K-101 has tripped 4 times in the last 12 months. The production manager says “bad luck”, the maintenance manager says “it is old and should be replaced”, and Finance sees the compressor station’s maintenance cost going up. Who is right? Only the data recorded on the work orders can answer.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'سه مفهوم پایه داریم. **قابلیت اطمینان (Reliability)**: احتمال اینکه دارایی در یک دوره معین و در شرایط معین بدون خرابی کار کند. **قابلیت نگهداری (Maintainability)**: اینکه پس از خرابی چقدر سریع به کار برمی‌گردد. **دسترس‌پذیری (Availability)**: سهمی از زمان که دارایی آماده کار است. دسترس‌پذیری نتیجه دو مفهوم اول است.',
            en: 'There are three basic ideas. **Reliability**: the probability that an asset works without failure for a given period under given conditions. **Maintainability**: how quickly it can be restored after a failure. **Availability**: the share of time the asset is ready to run. Availability is the result of the first two.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'شاخص‌های پسرو (نتیجه)', en: 'Lagging indicators (results)' },
            items: [
              { fa: 'تعداد خرابی‌ها', en: 'Number of failures' },
              { fa: 'ساعت‌های توقف', en: 'Downtime hours' },
              { fa: 'هزینه نگهداری سال گذشته', en: 'Last year’s maintenance cost' },
              { fa: 'حوادث نشت و ایمنی', en: 'Leaks and safety incidents' },
            ],
          },
          right: {
            title: { fa: 'شاخص‌های پیشرو (رفتار)', en: 'Leading indicators (behaviour)' },
            items: [
              { fa: 'پایبندی به برنامه PM', en: 'PM compliance' },
              { fa: 'سهم کار برنامه‌ریزی‌شده', en: 'Share of planned work' },
              { fa: 'کارهای انباشته آماده', en: 'Ready backlog' },
              { fa: 'اجرای به‌موقع برنامه بازرسی', en: 'Inspection plan completed on time' },
            ],
          },
        },
        {
          type: 'diagram',
          id: 'asset-lifecycle',
          caption: {
            fa: 'چرخه عمر دارایی: داده قابلیت اطمینان در مرحله بهره‌برداری و نگهداری جمع می‌شود و به تصمیم‌های برنامه‌ریزی، خرید و جایگزینی برمی‌گردد.',
            en: 'The asset lifecycle: reliability data collected in the operate-and-maintain stage feeds back into planning, acquisition and replacement decisions.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'شاخص به خوبی داده‌اش است', en: 'A KPI is only as good as its data' },
          text: {
            fa: 'همه شاخص‌های این درس از اسناد ERP ساخته می‌شوند: اعلان‌ها، دستورهای کار، تأیید ساعات، اسناد اندازه‌گیری و مانده‌های دفتر کل. اگر تکنسین زمان شروع و پایان خرابی یا کد خرابی را درست ثبت نکند، داشبورد هر قدر هم زیبا باشد، گمراه‌کننده است.',
            en: 'Every KPI in this lesson is built from ERP documents: notifications, work orders, time confirmations, measurement documents and general ledger balances. If technicians don’t record the failure start and end times or the failure codes properly, the dashboard misleads you, however good it looks.',
          },
        },
      ],
    },
    {
      id: 'failure-data',
      title: { fa: 'داده خرابی و کدهای خرابی', en: 'Failure Data and Failure Codes' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'وقتی تکنسین دستور کار را می‌بندد، ثبت می‌کند چه چیزی، چگونه و چرا خراب شد؛ با **کدهای ساختاریافته**، نه متن آزاد. متن آزاد را نمی‌شود شمرد، اما کد را می‌شود. در صنعت نفت و گاز، استاندارد بین‌المللی **ISO 14224** چارچوب رایج گردآوری داده قابلیت اطمینان و نگهداری است و بسیاری از شرکت‌ها کاتالوگ کدهای خود را با آن هماهنگ می‌کنند.',
            en: 'When a technician closes a work order, they record what failed, how and why, using **structured codes**, not free text. Free text cannot be counted; codes can. In oil and gas, the international standard **ISO 14224** is the common framework for collecting reliability and maintenance data, and many companies align their code catalogues with it.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'گروه‌های کد خرابی با مثال برای K-101', en: 'Failure code groups with K-101 examples' },
          head: [
            { fa: 'گروه کد', en: 'Code group' },
            { fa: 'به کدام پرسش پاسخ می‌دهد', en: 'Question it answers' },
            { fa: 'مثال در K-101', en: 'K-101 example' },
          ],
          rows: [
            [{ fa: 'قطعه', en: 'Object part' }, { fa: 'کدام قطعه خراب شد؟', en: 'Which part failed?' }, { fa: 'یاتاقان سمت غیرمحرک', en: 'Non-drive-end journal bearing' }],
            [{ fa: 'حالت خرابی', en: 'Failure mode' }, { fa: 'خرابی چگونه دیده شد؟', en: 'How did the failure show itself?' }, { fa: 'ارتعاش زیاد (`VIB`)', en: 'High vibration (`VIB`)' }],
            [{ fa: 'سازوکار آسیب', en: 'Damage mechanism' }, { fa: 'چه آسیب فیزیکی رخ داد؟', en: 'What physical damage occurred?' }, { fa: 'سایش', en: 'Wear' }],
            [{ fa: 'علت', en: 'Cause' }, { fa: 'چرا رخ داد؟', en: 'Why did it happen?' }, { fa: 'آلودگی روغن روانکاری', en: 'Lube oil contamination' }],
            [{ fa: 'اقدام', en: 'Activity' }, { fa: 'چه کاری انجام شد؟', en: 'What was done?' }, { fa: 'تعویض یاتاقان و شست‌وشوی سامانه روغن', en: 'Replace bearing, flush lube oil system' }],
          ],
        },
        {
          type: 'table',
          caption: {
            fa: 'سابقه خرابی K-101 در 12 ماه گذشته (کدهای حالت خرابی به سبک ISO 14224: `VIB` ارتعاش، `FTS` راه‌اندازی‌نشدن، `ELP` نشت سیال فرایندی)',
            en: 'K-101 failure history, last 12 months (failure-mode codes in the style of ISO 14224: `VIB` vibration, `FTS` fail to start, `ELP` external leakage of process medium)',
          },
          head: [
            { fa: 'دستور کار', en: 'Work order' },
            { fa: 'حالت خرابی', en: 'Failure mode' },
            { fa: 'علت', en: 'Cause' },
            { fa: 'ساعت توقف', en: 'Downtime hours' },
            { fa: 'هزینه تعمیر', en: 'Repair cost' },
          ],
          rows: [
            [{ fa: 'WO-48810', en: 'WO-48810' }, { fa: '`VIB`', en: '`VIB`' }, { fa: 'آلودگی روغن', en: 'Lube oil contamination' }, 52, 186000],
            [{ fa: 'WO-49377', en: 'WO-49377' }, { fa: '`FTS`', en: '`FTS`' }, { fa: 'خرابی سامانه جرقه', en: 'Ignition system fault' }, 18, 42000],
            [{ fa: 'WO-50102', en: 'WO-50102' }, { fa: '`VIB`', en: '`VIB`' }, { fa: 'آلودگی روغن', en: 'Lube oil contamination' }, 60, 214000],
            [{ fa: 'WO-50855', en: 'WO-50855' }, { fa: '`ELP`', en: '`ELP`' }, { fa: 'سایش آب‌بند', en: 'Seal wear' }, 30, 98000],
            [{ fa: 'جمع', en: 'Total' }, { fa: '4 خرابی', en: '4 failures' }, { fa: '', en: '' }, 160, 540000],
          ],
          numericCols: [3, 4],
        },
        {
          type: 'p',
          text: {
            fa: 'نگاه پارتو: آلودگی روغن 2 خرابی از 4، 112 ساعت از 160 ساعت توقف (70٪) و 400,000 از 540,000 هزینه (حدود 74٪) را ساخته است. پس پاسخ «بدشانسی» یا «کمپرسور قدیمی» نیست؛ پاسخ اصلاح فیلتراسیون و برنامه نمونه‌برداری روغن است، که بسیار ارزان‌تر از تعویض کمپرسور است. پیدا کردن علت ریشه‌ای (RCA) از همین داده شروع می‌شود.',
            en: 'A Pareto view: lube oil contamination caused 2 of the 4 failures, 112 of the 160 downtime hours (70%) and 400,000 of the 540,000 cost (about 74%). So the answer is neither “bad luck” nor “an old compressor”; it is fixing oil filtration and the oil-sampling programme, far cheaper than replacing the compressor. Root cause analysis (RCA) starts from exactly this data.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'کد «سایر» دشمن تحلیل است', en: '“Other” is the enemy of analysis' },
          text: {
            fa: 'اگر 40٪ دستورهای کار با کد «سایر» یا «نامعلوم» بسته شوند، هیچ تحلیلی ممکن نیست. سرپرست باید پیش از تکمیل فنی، کدها را بازبینی کند و ERP باید کدهای اصلی را برای دستورهای کار خرابی اجباری کند.',
            en: 'If 40% of work orders are closed with “Other” or “Unknown”, no analysis is possible. The supervisor must review the codes before technical completion, and the ERP should make the main codes mandatory on breakdown work orders.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'شرکت‌هایی که کاتالوگ کدهای خود را با ISO 14224 هماهنگ می‌کنند، می‌توانند داده خود را با پایگاه‌های داده صنعتی (مانند OREDA) و با میدان‌های دیگر مقایسه کنند. در ایران هم کاتالوگ کد را یک‌بار و برای هر کلاس تجهیز (کمپرسور، پمپ، مخزن) تعریف کنید و آن را در داده پایه ERP نگه دارید، نه در فایل‌های پراکنده.',
            en: 'Companies that align their catalogue with ISO 14224 can compare their data with industry databases (such as OREDA) and with other fields. In Iran too, define the code catalogue once per equipment class (compressor, pump, vessel) and keep it in the ERP master data, not in scattered spreadsheets.',
          },
        },
      ],
    },
    {
      id: 'mtbf-mttr-availability',
      title: { fa: 'MTBF، MTTR و دسترس‌پذیری', en: 'MTBF, MTTR and Availability' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**MTBF** (میانگین زمان بین خرابی‌ها) نشان می‌دهد تجهیز به‌طور میانگین چه مدت بدون خرابی کار می‌کند؛ معیار قابلیت اطمینان است. **MTTR** (میانگین زمان تعمیر) نشان می‌دهد هر خرابی به‌طور میانگین چه مدت تجهیز را از کار می‌اندازد؛ معیار قابلیت نگهداری است. هر دو برای «تعمیرپذیرها» (تجهیزی که تعمیر و دوباره به کار گرفته می‌شود) به کار می‌روند.',
            en: '**MTBF** (mean time between failures) tells you how long the equipment runs, on average, without failing; it measures reliability. **MTTR** (mean time to repair) tells you how long, on average, each failure takes the equipment out of service; it measures maintainability. Both apply to repairable equipment.',
          },
        },
        {
          type: 'formula',
          text: { fa: 'MTBF = کل زمان کارکرد ÷ تعداد خرابی‌ها', en: 'MTBF = total operating (up) time ÷ number of failures' },
        },
        {
          type: 'formula',
          text: { fa: 'MTTR = کل زمان تعمیر خرابی‌ها ÷ تعداد تعمیرها', en: 'MTTR = total repair time for failures ÷ number of repairs' },
        },
        {
          type: 'formula',
          text: {
            fa: 'دسترس‌پذیری ذاتی = MTBF ÷ (MTBF + MTTR)؛ دسترس‌پذیری عملیاتی = زمان کارکرد ÷ زمان تقویمی',
            en: 'Inherent availability = MTBF ÷ (MTBF + MTTR); operational availability = uptime ÷ calendar time',
          },
          note: {
            fa: 'دسترس‌پذیری ذاتی فقط خرابی‌ها را می‌بیند؛ دسترس‌پذیری عملیاتی توقف‌های برنامه‌ریزی‌شده (PM، بازرسی) را هم حساب می‌کند.',
            en: 'Inherent availability looks only at failures; operational availability also counts planned stops (PM, inspections).',
          },
        },
        {
          type: 'table',
          caption: { fa: 'داده 12 ماه K-101', en: 'K-101 data for 12 months' },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'ساعت', en: 'Hours' },
          ],
          rows: [
            [{ fa: 'زمان تقویمی (365 × 24)', en: 'Calendar time (365 × 24)' }, 8760],
            [{ fa: 'توقف برنامه‌ریزی‌شده (PM و بازرسی)', en: 'Planned downtime (PM and inspection)' }, 200],
            [{ fa: 'توقف ناشی از 4 خرابی', en: 'Downtime from the 4 failures' }, 160],
            [{ fa: 'زمان کارکرد', en: 'Uptime' }, 8400],
          ],
          numericCols: [1],
        },
        {
          type: 'steps',
          items: [
            { title: { fa: 'MTBF', en: 'MTBF' }, text: { fa: '8,400 ÷ 4 = 2,100 ساعت (حدود 88 روز).', en: '8,400 ÷ 4 = 2,100 hours (about 88 days).' } },
            { title: { fa: 'MTTR', en: 'MTTR' }, text: { fa: '160 ÷ 4 = 40 ساعت.', en: '160 ÷ 4 = 40 hours.' } },
            {
              title: { fa: 'دسترس‌پذیری ذاتی', en: 'Inherent availability' },
              text: { fa: '2,100 ÷ (2,100 + 40) = 2,100 ÷ 2,140 ≈ 98.1٪.', en: '2,100 ÷ (2,100 + 40) = 2,100 ÷ 2,140 ≈ 98.1%.' },
            },
            {
              title: { fa: 'دسترس‌پذیری عملیاتی', en: 'Operational availability' },
              text: { fa: '8,400 ÷ 8,760 ≈ 95.9٪.', en: '8,400 ÷ 8,760 ≈ 95.9%.' },
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'برای بالا بردن دسترس‌پذیری دو راه داریم: **MTBF را بالا ببریم** (علت ریشه‌ای را حذف کنیم، مثل همان آلودگی روغن) یا **MTTR را پایین بیاوریم** (قطعه حیاتی آماده، گروه آموزش‌دیده، دستورالعمل روشن). تصمیم نگه‌داشتن آب‌بند گاز خشک در درس «برنامه‌ریزی نگهداری و قطعات یدکی» دقیقاً MTTR را کم می‌کرد.',
            en: 'There are two ways to raise availability: **raise MTBF** (remove root causes, like the oil contamination) or **cut MTTR** (critical spares on hand, a trained crew, clear procedures). Stocking the dry gas seal in the lesson on maintenance planning and spare parts was exactly an MTTR decision.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'اگر مشکل روغن حل شود', en: 'If the oil problem is fixed' },
          text: {
            fa: 'فرض کنید با اصلاح فیلتراسیون، دو خرابی ارتعاش حذف شوند. خرابی‌ها 2 و توقف ناشی از خرابی 18 + 30 = 48 ساعت می‌شود. زمان کارکرد: 8,760 − 200 − 48 = 8,512 ساعت؛ MTBF = 8,512 ÷ 2 = 4,256 ساعت؛ دسترس‌پذیری عملیاتی = 8,512 ÷ 8,760 ≈ 97.2٪. یعنی 112 ساعت تولید بیشتر در سال.',
            en: 'Suppose better filtration removes the two vibration failures. Failures drop to 2 and failure downtime to 18 + 30 = 48 hours. Uptime: 8,760 − 200 − 48 = 8,512 hours; MTBF = 8,512 ÷ 2 = 4,256 hours; operational availability = 8,512 ÷ 8,760 ≈ 97.2%. That is 112 more production hours a year.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'MTBF عمر مفید نیست', en: 'MTBF is not life expectancy' },
          text: {
            fa: 'MTBF برابر 2,100 ساعت یعنی «میانگین فاصله خرابی‌ها»، نه اینکه کمپرسور دقیقاً هر 2,100 ساعت خراب شود یا پس از آن از رده خارج شود. میانگین با چهار خرابی هنوز داده کمی است؛ MTBF را برای هر کلاس تجهیز و در دوره‌های طولانی‌تر هم ببینید.',
            en: 'An MTBF of 2,100 hours means “average gap between failures”, not that the compressor fails exactly every 2,100 hours or wears out after that. An average from four failures is still thin data; also look at MTBF per equipment class and over longer periods.',
          },
        },
      ],
    },
    {
      id: 'oee-cost-kpis',
      title: { fa: 'OEE، هزینه و شاخص‌های مدیریت کار', en: 'OEE, Cost and Work-Management KPIs' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**OEE (اثربخشی کلی تجهیزات)** از صنایع تولیدی آمده و سه نوع اتلاف را در یک عدد جمع می‌کند: توقف (دسترس‌پذیری)، کار با نرخ کمتر از طراحی (عملکرد) و محصول خارج از مشخصات (کیفیت). در نفت و گاز اغلب شاخص‌هایی مانند «بهره‌وری تولید» به کار می‌رود، اما منطق OEE برای یک ایستگاه تقویت فشار هم بسیار روشنگر است.',
            en: '**OEE (overall equipment effectiveness)** comes from manufacturing and rolls three kinds of loss into one number: stops (availability), running below design rate (performance) and off-spec product (quality). Oil and gas often uses measures such as “production efficiency”, but the OEE logic is very revealing for a compressor station too.',
          },
        },
        {
          type: 'formula',
          text: { fa: 'OEE = دسترس‌پذیری × عملکرد × کیفیت', en: 'OEE = Availability × Performance × Quality' },
          note: {
            fa: 'دسترس‌پذیری = زمان کارکرد ÷ زمان برنامه‌ریزی‌شده؛ عملکرد = تولید واقعی ÷ (نرخ طراحی × زمان کارکرد)؛ کیفیت = تولید مطابق مشخصات ÷ تولید واقعی.',
            en: 'Availability = run time ÷ planned time; Performance = actual output ÷ (design rate × run time); Quality = on-spec output ÷ actual output.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'ایستگاه تقویت فشار در یک ماه (حجم به هزار متر مکعب گاز)',
            en: 'The compressor station in one month (volumes in thousand cubic metres of gas)',
          },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'مقدار', en: 'Value' },
          ],
          rows: [
            [{ fa: 'زمان برنامه‌ریزی‌شده (ساعت)', en: 'Planned time (hours)' }, 720],
            [{ fa: 'توقف برنامه‌ریزی‌نشده (ساعت)', en: 'Unplanned downtime (hours)' }, 72],
            [{ fa: 'زمان کارکرد (ساعت)', en: 'Run time (hours)' }, 648],
            [{ fa: 'نرخ طراحی در ساعت', en: 'Design rate per hour' }, 100],
            [{ fa: 'حداکثر ممکن در زمان کارکرد (648 × 100)', en: 'Maximum possible in run time (648 × 100)' }, 64800],
            [{ fa: 'گاز تحویلی واقعی', en: 'Actual gas delivered' }, 58320],
            [{ fa: 'گاز خارج از مشخصات (بازفرآوری یا سوزانده‌شده)', en: 'Off-spec gas (reprocessed or flared)' }, 1458],
            [{ fa: 'گاز مطابق مشخصات', en: 'On-spec gas' }, 56862],
          ],
          numericCols: [1],
        },
        {
          type: 'steps',
          items: [
            { title: { fa: 'دسترس‌پذیری', en: 'Availability' }, text: { fa: '648 ÷ 720 = 90٪.', en: '648 ÷ 720 = 90%.' } },
            { title: { fa: 'عملکرد', en: 'Performance' }, text: { fa: '58,320 ÷ 64,800 = 90٪.', en: '58,320 ÷ 64,800 = 90%.' } },
            { title: { fa: 'کیفیت', en: 'Quality' }, text: { fa: '56,862 ÷ 58,320 = 97.5٪.', en: '56,862 ÷ 58,320 = 97.5%.' } },
            {
              title: { fa: 'OEE', en: 'OEE' },
              text: {
                fa: '90٪ × 90٪ × 97.5٪ ≈ 79.0٪. کنترل: 56,862 ÷ (720 × 100) = 79.0٪.',
                en: '90% × 90% × 97.5% ≈ 79.0%. Check: 56,862 ÷ (720 × 100) = 79.0%.',
              },
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'اتلاف عملکرد به اندازه اتلاف توقف است. در کمپرسورها کار زیر نرخ طراحی معمولاً از رسوب‌گرفتگی، افت فشار مکش با افت فشار مخزن یا محدودیت خنک‌کاری در تابستان می‌آید؛ پس OEE مهندس را به سمت مشکل‌هایی می‌برد که فقط با شمردن خرابی‌ها دیده نمی‌شوند.',
            en: 'The performance loss is as large as the downtime loss. In compressors, running below design usually comes from fouling, falling suction pressure as the reservoir depletes, or cooling limits in summer; so OEE points engineers at problems that counting failures alone would miss.',
          },
        },
        {
          type: 'h',
          text: { fa: 'شاخص‌های هزینه', en: 'Cost KPIs' },
        },
        {
          type: 'formula',
          text: {
            fa: 'هزینه نگهداری به ازای هر واحد تولید = کل هزینه نگهداری ÷ تولید (مثلاً بشکه معادل نفت، boe)',
            en: 'Maintenance cost per unit of production = total maintenance cost ÷ production (e.g. per barrel of oil equivalent, boe)',
          },
        },
        {
          type: 'table',
          caption: { fa: 'میدان آریا: هزینه نگهداری و تولید', en: 'Arya field: maintenance cost and production' },
          head: [
            { fa: 'سال', en: 'Year' },
            { fa: 'هزینه نگهداری', en: 'Maintenance cost' },
            { fa: 'تولید (boe)', en: 'Production (boe)' },
            { fa: 'هزینه هر boe', en: 'Cost per boe' },
          ],
          rows: [
            [{ fa: 'سال گذشته', en: 'Last year' }, 4500000, 2000000, 2.25],
            [{ fa: 'امسال', en: 'This year' }, 4800000, 2400000, 2.0],
          ],
          numericCols: [1, 2, 3],
        },
        {
          type: 'p',
          text: {
            fa: 'هزینه نگهداری 300,000 (حدود 6.7٪) بالا رفته، اما چون تولید 20٪ افزایش یافته، هزینه هر boe از 2.25 به 2.00 رسیده است، یعنی حدود 11.1٪ کاهش. هزینه را همیشه کنار حجم بخوانید. شاخص رایج دیگر، هزینه نگهداری به‌صورت درصدی از **ارزش جایگزینی دارایی‌ها (RAV)** است: اگر ارزش جایگزینی تأسیسات میدان 160,000,000 باشد، 4,800,000 ÷ 160,000,000 = 3٪.',
            en: 'Maintenance cost rose by 300,000 (about 6.7%), but because production rose 20%, cost per boe fell from 2.25 to 2.00, a drop of about 11.1%. Always read cost together with volume. Another common KPI is maintenance cost as a percentage of **replacement asset value (RAV)**: if replacing the field’s facilities would cost 160,000,000, then 4,800,000 ÷ 160,000,000 = 3%.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'شاخص‌های مدیریت کار در میدان آریا (اهداف نمونه‌اند)',
            en: 'Work-management KPIs at the Arya field (targets are illustrative)',
          },
          head: [
            { fa: 'شاخص', en: 'KPI' },
            { fa: 'فرمول', en: 'Formula' },
            { fa: 'امسال', en: 'This year' },
            { fa: 'هدف نمونه', en: 'Example target' },
          ],
          rows: [
            [
              { fa: 'پایبندی به PM', en: 'PM compliance' },
              { fa: 'PMهای انجام‌شده در بازه مجاز ÷ PMهای سررسیدشده', en: 'PMs done within their window ÷ PMs due' },
              { fa: '102 ÷ 120 = 85٪', en: '102 ÷ 120 = 85%' },
              { fa: 'دست‌کم 90٪', en: 'At least 90%' },
            ],
            [
              { fa: 'سهم کار برنامه‌ریزی‌شده', en: 'Planned work ratio' },
              { fa: 'ساعت کار برنامه‌ریزی‌شده ÷ کل ساعت نگهداری', en: 'Planned hours ÷ total maintenance hours' },
              { fa: '15,000 ÷ 20,000 = 75٪', en: '15,000 ÷ 20,000 = 75%' },
              { fa: 'دست‌کم 80٪', en: 'At least 80%' },
            ],
            [
              { fa: 'سهم کار اضطراری', en: 'Emergency work share' },
              { fa: 'ساعت کار اضطراری ÷ کل ساعت نگهداری', en: 'Emergency hours ÷ total maintenance hours' },
              { fa: '2,400 ÷ 20,000 = 12٪', en: '2,400 ÷ 20,000 = 12%' },
              { fa: 'حداکثر 10٪', en: 'At most 10%' },
            ],
            [
              { fa: 'کارهای انباشته آماده', en: 'Ready backlog' },
              { fa: 'ساعت کارهای آماده ÷ ظرفیت هفتگی', en: 'Ready hours ÷ weekly capacity' },
              { fa: '4 هفته', en: '4 weeks' },
              { fa: '2 تا 4 هفته', en: '2 to 4 weeks' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'اهداف جدول نمونه‌اند؛ آن‌ها را با سابقه خودتان و در صورت امکان با مطالعات صنعتی بسنجید. هیچ شاخصی را تنها پاداش ندهید: پایبندی به PM را می‌شود با بستن PM بدون انجام آن «بهتر» کرد. شاخص‌ها را با هم بخوانید (PM بیشتر باید به خرابی کمتر برسد) و نمونه‌ای از PMهای بسته‌شده را در محل کنترل کنید.',
            en: 'The targets are illustrative; compare them with your own history and, where possible, industry studies. Never reward one KPI on its own: PM compliance can be “improved” by closing PMs without doing them. Read the KPIs together (more PM should lead to fewer failures) and field-check a sample of closed PMs.',
          },
        },
      ],
    },
    {
      id: 'integrity',
      title: { fa: 'یکپارچگی دارایی: بازرسی و خوردگی', en: 'Asset Integrity: Inspection and Corrosion' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**یکپارچگی دارایی (Asset Integrity)** یعنی توانایی دارایی برای انجام کارکردش در حالی که از افراد، محیط زیست و خود دارایی محافظت می‌کند. برای تجهیزات تحت فشار (مخازن، لوله‌کشی، خطوط لوله، شیرهای اطمینان) ساده‌ترین تعریفش این است: **هیدروکربن را داخل لوله نگه داریم**. تجهیزاتی که جلوی حوادث بزرگ را می‌گیرند، مانند شیرهای اطمینان، شیرهای قطع اضطراری (ESD) و سامانه‌های آشکارساز آتش و گاز، **اجزای حیاتی ایمنی (SCE)** نام دارند و برنامه آزمون ویژه دارند.',
            en: '**Asset integrity** is an asset’s ability to perform its function while protecting people, the environment and the asset itself. For pressure equipment (vessels, piping, pipelines, PSVs) the simplest definition is: **keep the hydrocarbons inside the pipe**. Equipment that prevents major accidents, such as pressure safety valves, emergency shutdown (ESD) valves and fire and gas detection, is called **safety-critical elements (SCEs)** and has its own test programme.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**بازرسی مبتنی بر ریسک (RBI)**: تلاش بازرسی جایی متمرکز می‌شود که حاصل احتمال × پیامد خرابی بیشتر است.',
              en: '**Risk-based inspection (RBI)**: inspection effort goes where probability × consequence of failure is highest.',
            },
            {
              fa: '**مدیریت خوردگی**: تزریق بازدارنده خوردگی، حفاظت کاتدی خطوط لوله، کوپن و پراب پایش خوردگی.',
              en: '**Corrosion management**: corrosion-inhibitor injection, cathodic protection of pipelines, corrosion coupons and probes.',
            },
            {
              fa: '**بازرسی دوره‌ای تجهیزات تحت فشار**: اندازه‌گیری ضخامت (UT)، بازرسی داخلی، آزمون و صدور گواهی شیرهای اطمینان.',
              en: '**Periodic inspection of pressure equipment**: thickness measurement (UT), internal inspection, PSV testing and certification.',
            },
            {
              fa: '**توپک‌رانی هوشمند (Intelligent Pigging)** برای یافتن کاهش ضخامت در طول خطوط لوله.',
              en: '**Intelligent pigging** to find wall loss along pipelines.',
            },
            {
              fa: '**مدیریت تغییر (MOC)**: هر تغییر در فرایند یا تجهیز پیش از اجرا از نظر ریسک بررسی می‌شود.',
              en: '**Management of change (MOC)**: every process or equipment change is risk-reviewed before it is made.',
            },
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'نرخ خوردگی = (ضخامت قبلی − ضخامت فعلی) ÷ سال‌های میان دو اندازه‌گیری؛ عمر باقی‌مانده = (ضخامت فعلی − حداقل ضخامت مجاز) ÷ نرخ خوردگی',
            en: 'Corrosion rate = (previous thickness − current thickness) ÷ years between readings; remaining life = (current thickness − minimum required thickness) ÷ corrosion rate',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'بدنه جداکننده V-201', en: 'Separator V-201 shell' },
          text: {
            fa: 'ضخامت بدنه در سال 2021 برابر 14.0 میلی‌متر و در سال 2026 برابر 12.5 میلی‌متر اندازه‌گیری شد. نرخ خوردگی = 1.5 ÷ 5 = 0.3 میلی‌متر در سال. حداقل ضخامت مجاز طبق محاسبه طراحی 10.4 میلی‌متر است؛ پس عمر باقی‌مانده = (12.5 − 10.4) ÷ 0.3 = 7 سال. یک قاعده رایج در آیین‌نامه‌های بازرسی مخازن تحت فشار (مانند API 510) این است که بازرسی بعدی دیرتر از نیمی از عمر باقی‌مانده نباشد (با یک سقف حداکثر)؛ پس حداکثر 3.5 سال دیگر. آیین‌نامه و مقررات حاکم بر تأسیسات خودتان را بررسی کنید.',
            en: 'The shell measured 14.0 mm in 2021 and 12.5 mm in 2026. Corrosion rate = 1.5 ÷ 5 = 0.3 mm per year. The minimum required thickness from the design calculation is 10.4 mm, so remaining life = (12.5 − 10.4) ÷ 0.3 = 7 years. A common rule in pressure-vessel inspection codes (such as API 510) is to inspect again no later than half the remaining life (subject to a maximum interval), so within 3.5 years. Check the code and regulations that apply to your facility.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در صنعت نفت ایران، واحدهای بازرسی فنی شرکت‌ها و شرکت‌های بازرسی شخص ثالثِ تأییدشده، تجهیزات را بر اساس استانداردهای شرکت مانند **IPS** (استانداردهای نفت ایران) و آیین‌نامه‌های بین‌المللی (API، ASME) بازرسی می‌کنند. الزامات به‌روز را از مقررات جاری بررسی کنید. هزینه بازرسی و یکپارچگی معمولاً الزامی است و نباید برای رسیدن به هدف هزینه حذف شود؛ با مدارک کامل، معمولاً جزو هزینه‌های عملیاتی قابل بازیافت است.',
            en: 'In Iran’s oil industry, company inspection departments and approved third-party inspection firms inspect equipment to company standards such as **IPS** (Iranian Petroleum Standards) and international codes (API, ASME). Check current regulations for up-to-date requirements. Inspection and integrity spend is usually mandatory and must not be cut to hit a cost target; properly documented, it is normally a recoverable operating cost.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'بازرسی عقب‌افتاده', en: 'Deferred inspections' },
          text: {
            fa: 'به تعویق انداختن بازرسی اجزای حیاتی ایمنی برای پایین نگه‌داشتن هزینه یا بالا نگه‌داشتن دسترس‌پذیری، ریسکی پنهان می‌سازد که در هیچ شاخص هزینه‌ای دیده نمی‌شود تا روزی که حادثه رخ دهد. هر تعویق باید ارزیابی ریسک و تأیید رسمی داشته باشد.',
            en: 'Postponing inspections of safety-critical elements to keep cost down or availability up builds a hidden risk that no cost KPI shows until the day of the incident. Every deferral needs a risk assessment and formal approval.',
          },
        },
      ],
    },
    {
      id: 'erp-reliability',
      title: { fa: 'در ERP: ثبت داده، داشبوردها و مالی', en: 'In the ERP: Data Capture, Dashboards and Finance' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'هیچ‌کدام از این شاخص‌ها در اکسل ساخته نمی‌شوند، مگر اینکه ERP ضعیف باشد. اگر داده پایه درست تعریف و اسناد درست ثبت شوند، ERP شاخص‌ها را خودکار حساب می‌کند و هزینه‌های بازرسی و یکپارچگی، مانند هر کار دیگر، خودکار به مالی می‌رسند.',
            en: 'None of these KPIs should be built in spreadsheets unless the ERP is weak. When master data is defined properly and documents are recorded properly, the ERP computes the KPIs automatically, and inspection and integrity costs reach Finance automatically, just like any other job.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'داده‌های پایه', en: 'Master data' },
          head: [
            { fa: 'داده پایه', en: 'Master data' },
            { fa: 'نمونه در میدان آریا', en: 'Arya field example' },
          ],
          rows: [
            [
              { fa: 'تجهیز با کلاس و مشخصات فنی', en: 'Equipment with class and characteristics' },
              { fa: 'V-201: فشار طراحی، جنس بدنه، ضخامت مجاز خوردگی', en: 'V-201: design pressure, shell material, corrosion allowance' },
            ],
            [
              { fa: 'کاتالوگ کدهای خرابی', en: 'Failure code catalogue' },
              { fa: 'برای کلاس «کمپرسور»: قطعه، حالت خرابی، آسیب، علت، اقدام', en: 'For class “compressor”: object part, failure mode, damage, cause, activity' },
            ],
            [
              { fa: 'نقاط اندازه‌گیری و شمارنده‌ها', en: 'Measuring points and counters' },
              { fa: 'ساعت کارکرد K-101، ارتعاش یاتاقان‌ها، نقاط اندازه‌گیری ضخامت V-201', en: 'K-101 running hours, bearing vibration, V-201 thickness measurement locations' },
            ],
            [
              { fa: 'برنامه‌های نگهداری و بازرسی', en: 'Maintenance and inspection plans' },
              { fa: 'بازرسی UT جداکننده با فاصله تعیین‌شده از RBI؛ آزمون سالانه PSVها', en: 'Separator UT inspection at the RBI interval; annual PSV tests' },
            ],
            [
              { fa: 'مرکز هزینه و حجم تولید', en: 'Cost centres and production volumes' },
              { fa: 'CC-ARY-CMP ایستگاه تقویت فشار؛ تولید ماهانه از سامانه حسابداری تولید', en: 'CC-ARY-CMP compressor station; monthly production from the production accounting system' },
            ],
          ],
        },
        {
          type: 'table',
          caption: { fa: 'اسناد و نقش‌ها', en: 'Documents and roles' },
          head: [
            { fa: 'سند', en: 'Document' },
            { fa: 'چه کسی', en: 'Who' },
            { fa: 'چه داده‌ای برای شاخص‌ها می‌دهد', en: 'What it feeds into the KPIs' },
          ],
          rows: [
            [
              { fa: 'اعلان خرابی با زمان شروع و پایان و نشان «توقف»', en: 'Breakdown notification with start/end times and a “breakdown” flag' },
              { fa: 'اپراتور', en: 'Operator' },
              { fa: 'تعداد خرابی، ساعت توقف، MTBF و MTTR', en: 'Failure count, downtime, MTBF and MTTR' },
            ],
            [
              { fa: 'تأیید دستور کار با ساعات و کدهای خرابی', en: 'Work order confirmation with hours and failure codes' },
              { fa: 'تکنسین؛ سرپرست کدها را بازبینی می‌کند', en: 'Technician; supervisor reviews the codes' },
              { fa: 'تحلیل پارتو، سهم کار برنامه‌ریزی‌شده', en: 'Pareto analysis, planned work ratio' },
            ],
            [
              { fa: 'سند اندازه‌گیری (ضخامت، ارتعاش)', en: 'Measurement document (thickness, vibration)' },
              { fa: 'بازرس یا تکنسین پایش وضعیت', en: 'Inspector or condition-monitoring technician' },
              { fa: 'نرخ خوردگی؛ اگر از حد هشدار بگذرد، اعلان خودکار', en: 'Corrosion rate; an automatic notification if an alarm limit is crossed' },
            ],
            [
              { fa: 'صورت‌وضعیت (SES) بازرسی شخص ثالث', en: 'Service entry sheet (SES) for third-party inspection' },
              { fa: 'مهندس بازرسی', en: 'Inspection engineer' },
              { fa: 'هزینه بازرسی روی دستور کار', en: 'Inspection cost on the work order' },
            ],
            [
              { fa: 'داشبورد شاخص‌ها', en: 'KPI dashboard' },
              { fa: 'مهندس قابلیت اطمینان، مدیر نگهداری، کنترلر مالی', en: 'Reliability engineer, maintenance manager, Finance controller' },
              { fa: 'ترکیب داده نگهداری با مانده‌های دفتر کل و حجم تولید', en: 'Combines maintenance data with GL balances and production volumes' },
            ],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'بازرسی UT بدنه V-201 با دستور کار `WO-51240` توسط یک شرکت بازرسی شخص ثالث به مبلغ 46,000 انجام شد. همان ماه 1,200 لیتر بازدارنده خوردگی به نرخ 15 از انبار میدان برای تزریق در ایستگاه حواله شد. ERP این ثبت‌ها را خودکار می‌سازد (مالیات بر ارزش افزوده نادیده گرفته شده است):',
            en: 'UT inspection of the V-201 shell was done under work order `WO-51240` by a third-party inspection firm for 46,000. The same month, 1,200 litres of corrosion inhibitor at 15 per litre were issued from the Field Warehouse for injection at the station. The ERP generates these postings automatically (VAT ignored):',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های خودکار مالی برای کارهای یکپارچگی', en: 'Automatic Finance postings for integrity work' },
          entries: [
            {
              date: { fa: 'تأیید SES', en: 'SES approved' },
              lines: [
                { account: ac.inspection, debit: 46000 },
                { account: ac.grir, credit: 46000 },
              ],
              memo: { fa: 'بازرسی UT جداکننده V-201 تأیید شد.', en: 'V-201 UT inspection accepted.' },
            },
            {
              date: { fa: 'حواله انبار', en: 'Goods issue' },
              lines: [
                { account: ac.chemicals, debit: 18000 },
                { account: ac.chemStock, credit: 18000 },
              ],
              memo: { fa: '1,200 لیتر × 15 بازدارنده خوردگی.', en: '1,200 litres × 15 of corrosion inhibitor.' },
            },
            {
              date: { fa: 'فاکتور فروشنده', en: 'Vendor invoice' },
              lines: [
                { account: ac.grir, debit: 46000 },
                { account: ac.ap, credit: 46000 },
              ],
              memo: { fa: 'فاکتور شرکت بازرسی پس از تطبیق سه‌طرفه.', en: 'Inspection firm’s invoice after the three-way match.' },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'نمونه داشبورد امسال ایستگاه تقویت فشار و میدان آریا', en: 'Sample dashboard this year: compressor station and Arya field' },
          head: [
            { fa: 'شاخص', en: 'KPI' },
            { fa: 'امسال', en: 'This year' },
            { fa: 'هدف نمونه', en: 'Example target' },
            { fa: 'منبع داده', en: 'Data source' },
          ],
          rows: [
            [{ fa: 'MTBF کمپرسور K-101', en: 'K-101 MTBF' }, { fa: '2,100 ساعت', en: '2,100 hours' }, { fa: 'دست‌کم 3,000 ساعت', en: 'At least 3,000 hours' }, { fa: 'اعلان‌های خرابی', en: 'Breakdown notifications' }],
            [{ fa: 'دسترس‌پذیری عملیاتی K-101', en: 'K-101 operational availability' }, { fa: '95.9٪', en: '95.9%' }, { fa: 'دست‌کم 97٪', en: 'At least 97%' }, { fa: 'اعلان‌ها و دستورهای کار', en: 'Notifications and work orders' }],
            [{ fa: 'هزینه نگهداری هر boe', en: 'Maintenance cost per boe' }, { fa: '2.00', en: '2.00' }, { fa: 'حداکثر 2.10', en: 'At most 2.10' }, { fa: 'دفتر کل و حسابداری تولید', en: 'General ledger and production accounting' }],
            [{ fa: 'پایبندی به PM', en: 'PM compliance' }, { fa: '85٪', en: '85%' }, { fa: 'دست‌کم 90٪', en: 'At least 90%' }, { fa: 'برنامه‌های نگهداری', en: 'Maintenance plans' }],
            [{ fa: 'اجرای برنامه بازرسی اجزای حیاتی ایمنی', en: 'SCE inspection plan completion' }, { fa: '92٪', en: '92%' }, { fa: '100٪', en: '100%' }, { fa: 'برنامه‌های بازرسی', en: 'Inspection plans' }],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'پیوند با مالی و بازیافت هزینه', en: 'The link to Finance and cost recovery' },
          text: {
            fa: 'داده قابلیت اطمینان پایه تصمیم‌های سرمایه‌ای است (تعمیر اساسی یا جایگزینی، که در درس «حسابداری دارایی‌ها و هزینه‌های سرمایه‌ای» می‌بینیم)، بودجه سال بعد را می‌سازد و هزینه هر boe را به گزارش مدیریت می‌برد. چون هر هزینه بازرسی و تعمیر روی دستور کار و مرکز هزینه درست با مدارک کامل نشسته است، در حسابرسی بازیافت هزینه قرارداد نفتی هم قابل دفاع است.',
            en: 'Reliability data underpins capital decisions (overhaul or replace, covered in the lesson on asset accounting and CAPEX), builds next year’s budget and brings cost per boe into management reports. Because every inspection and repair cost sits on the right work order and cost centre with full documents, it can also be defended in the cost-recovery audit under the petroleum contract.',
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
              fa: 'ثبت‌نکردن زمان شروع و پایان خرابی در اعلان: MTBF و MTTR از حدس ساخته می‌شوند.',
              en: 'Not recording failure start and end times on the notification: MTBF and MTTR become guesswork.',
            },
            {
              fa: 'حساب کردن MTBF با زمان تقویمی به جای زمان کارکرد: قابلیت اطمینان بهتر از واقع دیده می‌شود.',
              en: 'Computing MTBF with calendar time instead of uptime: reliability looks better than it is.',
            },
            {
              fa: 'گزارش هزینه نگهداری بدون حجم تولید: افزایش هزینه همیشه بد و کاهش آن همیشه خوب دیده می‌شود.',
              en: 'Reporting maintenance cost without production volume: a cost rise always looks bad and a fall always looks good.',
            },
            {
              fa: 'ثبت اندازه‌گیری ضخامت در فایل جدا به جای سند اندازه‌گیری ERP: هشدار خودکار و سابقه از دست می‌رود.',
              en: 'Keeping thickness readings in a separate file instead of ERP measurement documents: automatic alerts and history are lost.',
            },
            {
              fa: 'میانگین گرفتن از درصدها (مثلاً OEE = میانگین سه عامل): OEE حاصل‌ضرب است، نه میانگین.',
              en: 'Averaging percentages (e.g. OEE = the average of the three factors): OEE is a product, not an average.',
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
            fa: 'چهار تمرین از ساده به دشوار. ماشین‌حساب کنار دستتان باشد و پیش از دیدن پاسخ، خودتان حساب کنید.',
            en: 'Four exercises from easy to hard. Keep a calculator handy and work each one out before opening the solution.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'پمپ تزریق آب', en: 'The water injection pump' },
          difficulty: 'easy',
          problem: {
            fa: 'پمپ تزریق آب تولیدی P-301 در میدان آریا در 6 ماه گذشته (4,380 ساعت) 36 ساعت توقف برنامه‌ریزی‌شده داشته و 3 بار خراب شده است. تعمیرها 20، 16 و 18 ساعت طول کشیده‌اند. MTBF، MTTR، دسترس‌پذیری ذاتی و دسترس‌پذیری عملیاتی را حساب کنید.',
            en: 'Produced-water injection pump P-301 at the Arya field had 36 hours of planned downtime in the last 6 months (4,380 hours) and failed 3 times. The repairs took 20, 16 and 18 hours. Compute MTBF, MTTR, inherent availability and operational availability.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                { title: { fa: 'توقف خرابی', en: 'Failure downtime' }, text: { fa: '20 + 16 + 18 = 54 ساعت.', en: '20 + 16 + 18 = 54 hours.' } },
                { title: { fa: 'زمان کارکرد', en: 'Uptime' }, text: { fa: '4,380 − 36 − 54 = 4,290 ساعت.', en: '4,380 − 36 − 54 = 4,290 hours.' } },
                { title: { fa: 'MTBF', en: 'MTBF' }, text: { fa: '4,290 ÷ 3 = 1,430 ساعت.', en: '4,290 ÷ 3 = 1,430 hours.' } },
                { title: { fa: 'MTTR', en: 'MTTR' }, text: { fa: '54 ÷ 3 = 18 ساعت.', en: '54 ÷ 3 = 18 hours.' } },
                {
                  title: { fa: 'دسترس‌پذیری ذاتی', en: 'Inherent availability' },
                  text: { fa: '1,430 ÷ (1,430 + 18) = 1,430 ÷ 1,448 ≈ 98.8٪.', en: '1,430 ÷ (1,430 + 18) = 1,430 ÷ 1,448 ≈ 98.8%.' },
                },
                {
                  title: { fa: 'دسترس‌پذیری عملیاتی', en: 'Operational availability' },
                  text: { fa: '4,290 ÷ 4,380 ≈ 97.9٪.', en: '4,290 ÷ 4,380 ≈ 97.9%.' },
                },
              ],
            },
          ],
          answer: {
            fa: 'MTBF = 1,430 ساعت، MTTR = 18 ساعت، دسترس‌پذیری ذاتی حدود 98.8٪ و عملیاتی حدود 97.9٪.',
            en: 'MTBF = 1,430 h, MTTR = 18 h, inherent availability ≈ 98.8%, operational ≈ 97.9%.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'OEE ماه بعد', en: 'OEE for the next month' },
          difficulty: 'medium',
          problem: {
            fa: 'داده ماه بعد ایستگاه تقویت فشار در جدول آمده است (حجم به هزار متر مکعب). سه عامل OEE و خود OEE را حساب کنید و بگویید بزرگ‌ترین اتلاف کجاست.',
            en: 'Next month’s compressor station data is in the table (volumes in thousand cubic metres). Compute the three OEE factors and OEE itself, and say where the biggest loss is.',
          },
          given: {
            head: [
              { fa: 'قلم', en: 'Item' },
              { fa: 'مقدار', en: 'Value' },
            ],
            rows: [
              [{ fa: 'زمان برنامه‌ریزی‌شده (ساعت)', en: 'Planned time (hours)' }, 720],
              [{ fa: 'توقف برنامه‌ریزی‌نشده (ساعت)', en: 'Unplanned downtime (hours)' }, 36],
              [{ fa: 'نرخ طراحی در ساعت', en: 'Design rate per hour' }, 100],
              [{ fa: 'گاز تحویلی واقعی', en: 'Actual gas delivered' }, 61560],
              [{ fa: 'گاز خارج از مشخصات', en: 'Off-spec gas' }, 1539],
            ],
            numericCols: [1],
          },
          solution: [
            {
              type: 'steps',
              items: [
                { title: { fa: 'دسترس‌پذیری', en: 'Availability' }, text: { fa: 'زمان کارکرد 720 − 36 = 684؛ 684 ÷ 720 = 95٪.', en: 'Run time 720 − 36 = 684; 684 ÷ 720 = 95%.' } },
                {
                  title: { fa: 'عملکرد', en: 'Performance' },
                  text: { fa: 'حداکثر ممکن 684 × 100 = 68,400؛ 61,560 ÷ 68,400 = 90٪.', en: 'Maximum possible 684 × 100 = 68,400; 61,560 ÷ 68,400 = 90%.' },
                },
                {
                  title: { fa: 'کیفیت', en: 'Quality' },
                  text: { fa: 'گاز مطابق مشخصات 61,560 − 1,539 = 60,021؛ 60,021 ÷ 61,560 = 97.5٪.', en: 'On-spec gas 61,560 − 1,539 = 60,021; 60,021 ÷ 61,560 = 97.5%.' },
                },
                {
                  title: { fa: 'OEE', en: 'OEE' },
                  text: {
                    fa: '95٪ × 90٪ × 97.5٪ ≈ 83.4٪. کنترل: 60,021 ÷ 72,000 ≈ 83.4٪.',
                    en: '95% × 90% × 97.5% ≈ 83.4%. Check: 60,021 ÷ 72,000 ≈ 83.4%.',
                  },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'بزرگ‌ترین اتلاف در عملکرد است (10٪)، نه در توقف (5٪). تمیزکاری کولرها، بررسی رسوب و فشار مکش اولویت دارد.',
                en: 'The biggest loss is performance (10%), not downtime (5%). Cooler cleaning and checking fouling and suction pressure come first.',
              },
            },
          ],
          answer: {
            fa: 'دسترس‌پذیری 95٪، عملکرد 90٪، کیفیت 97.5٪؛ OEE حدود 83.4٪ و بزرگ‌ترین اتلاف در عملکرد.',
            en: 'Availability 95%, performance 90%, quality 97.5%; OEE ≈ 83.4%, with the biggest loss in performance.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'خوردگی خط جریان چاه AR-07', en: 'Corrosion in the AR-07 flowline' },
          difficulty: 'medium',
          problem: {
            fa: 'ضخامت دیواره خط جریان چاه AR-07 تا منیفولد در سال 2020 برابر 9.5 میلی‌متر و در سال 2026 برابر 8.3 میلی‌متر اندازه‌گیری شده است. حداقل ضخامت مجاز 6.5 میلی‌متر است. نرخ خوردگی، عمر باقی‌مانده و حداکثر فاصله بازرسی بعدی (با قاعده نیمی از عمر باقی‌مانده) را حساب کنید. سپس بگویید اگر برنامه تزریق بازدارنده نرخ خوردگی را نصف کند، عمر باقی‌مانده چقدر می‌شود.',
            en: 'The wall of the flowline from well AR-07 to the manifold measured 9.5 mm in 2020 and 8.3 mm in 2026. The minimum required thickness is 6.5 mm. Compute the corrosion rate, the remaining life and the maximum interval to the next inspection (using the half-remaining-life rule). Then say what the remaining life becomes if an inhibitor programme halves the corrosion rate.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                { title: { fa: 'نرخ خوردگی', en: 'Corrosion rate' }, text: { fa: '(9.5 − 8.3) ÷ 6 = 1.2 ÷ 6 = 0.2 میلی‌متر در سال.', en: '(9.5 − 8.3) ÷ 6 = 1.2 ÷ 6 = 0.2 mm per year.' } },
                { title: { fa: 'عمر باقی‌مانده', en: 'Remaining life' }, text: { fa: '(8.3 − 6.5) ÷ 0.2 = 1.8 ÷ 0.2 = 9 سال.', en: '(8.3 − 6.5) ÷ 0.2 = 1.8 ÷ 0.2 = 9 years.' } },
                { title: { fa: 'بازرسی بعدی', en: 'Next inspection' }, text: { fa: 'حداکثر 9 ÷ 2 = 4.5 سال دیگر.', en: 'No later than 9 ÷ 2 = 4.5 years from now.' } },
                {
                  title: { fa: 'با بازدارنده', en: 'With inhibitor' },
                  text: {
                    fa: 'نرخ 0.1 میلی‌متر در سال؛ عمر باقی‌مانده 1.8 ÷ 0.1 = 18 سال. هزینه ماده شیمیایی را باید با هزینه تعویض زودهنگام خط مقایسه کرد.',
                    en: 'Rate 0.1 mm per year; remaining life 1.8 ÷ 0.1 = 18 years. Compare the chemical cost with the cost of replacing the line early.',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: 'نرخ 0.2 میلی‌متر در سال، عمر باقی‌مانده 9 سال، بازرسی بعدی حداکثر 4.5 سال دیگر؛ با بازدارنده 18 سال.',
            en: '0.2 mm/year, 9 years of remaining life, next inspection within 4.5 years; 18 years with inhibitor.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'داشبورد دو ساله میدان بهار', en: 'A two-year dashboard for the Bahar field' },
          difficulty: 'hard',
          problem: {
            fa: 'مسار پترولیوم میدان دیگری به نام «بهار» را هم اداره می‌کند. مدیر عملیات می‌گوید «هزینه نگهداری 16.7٪ بالا رفته؛ نگهداری بدتر شده است.» با داده جدول، هزینه هر boe، پایبندی به PM و سهم کار برنامه‌ریزی‌شده را برای دو سال حساب کنید و درباره این ادعا قضاوت کنید.',
            en: 'Masar Petroleum also operates another field, “Bahar”. The operations manager says: “maintenance cost went up 16.7%; maintenance has got worse.” Using the table, compute cost per boe, PM compliance and the planned work ratio for both years, and judge the claim.',
          },
          given: {
            head: [
              { fa: 'داده', en: 'Data' },
              { fa: 'سال 1', en: 'Year 1' },
              { fa: 'سال 2', en: 'Year 2' },
            ],
            rows: [
              [{ fa: 'هزینه نگهداری', en: 'Maintenance cost' }, 3600000, 4200000],
              [{ fa: 'تولید (boe)', en: 'Production (boe)' }, 1500000, 2100000],
              [{ fa: 'PMهای سررسیدشده', en: 'PMs due' }, 400, 420],
              [{ fa: 'PMهای انجام‌شده در بازه مجاز', en: 'PMs done within their window' }, 300, 378],
              [{ fa: 'کل ساعت نگهداری', en: 'Total maintenance hours' }, 20000, 21000],
              [{ fa: 'ساعت کار برنامه‌ریزی‌شده', en: 'Planned hours' }, 12000, 15750],
            ],
            numericCols: [1, 2],
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'شاخص', en: 'KPI' },
                { fa: 'سال 1', en: 'Year 1' },
                { fa: 'سال 2', en: 'Year 2' },
              ],
              rows: [
                [{ fa: 'هزینه هر boe', en: 'Cost per boe' }, { fa: '3,600,000 ÷ 1,500,000 = 2.40', en: '3,600,000 ÷ 1,500,000 = 2.40' }, { fa: '4,200,000 ÷ 2,100,000 = 2.00', en: '4,200,000 ÷ 2,100,000 = 2.00' }],
                [{ fa: 'پایبندی به PM', en: 'PM compliance' }, { fa: '300 ÷ 400 = 75٪', en: '300 ÷ 400 = 75%' }, { fa: '378 ÷ 420 = 90٪', en: '378 ÷ 420 = 90%' }],
                [{ fa: 'سهم کار برنامه‌ریزی‌شده', en: 'Planned work ratio' }, { fa: '12,000 ÷ 20,000 = 60٪', en: '12,000 ÷ 20,000 = 60%' }, { fa: '15,750 ÷ 21,000 = 75٪', en: '15,750 ÷ 21,000 = 75%' }],
              ],
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'ادعای افزایش هزینه', en: 'The cost claim' },
                  text: {
                    fa: 'افزایش هزینه درست است: 600,000 ÷ 3,600,000 ≈ 16.7٪. اما تولید 40٪ بالا رفته است.',
                    en: 'The cost rise is real: 600,000 ÷ 3,600,000 ≈ 16.7%. But production rose 40%.',
                  },
                },
                {
                  title: { fa: 'هزینه واحد', en: 'Unit cost' },
                  text: { fa: 'هزینه هر boe از 2.40 به 2.00 رسیده، یعنی حدود 16.7٪ کاهش.', en: 'Cost per boe fell from 2.40 to 2.00, a drop of about 16.7%.' },
                },
                {
                  title: { fa: 'شاخص‌های پیشرو', en: 'Leading indicators' },
                  text: {
                    fa: 'پایبندی به PM از 75٪ به 90٪ و کار برنامه‌ریزی‌شده از 60٪ به 75٪ رسیده است. هر دو نشان می‌دهند مدیریت نگهداری بهتر شده است.',
                    en: 'PM compliance rose from 75% to 90% and planned work from 60% to 75%. Both show maintenance management has improved.',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: 'ادعا نادرست است: هزینه هر boe از 2.40 به 2.00 کاهش یافته و پایبندی به PM (90٪) و کار برنامه‌ریزی‌شده (75٪) بهتر شده‌اند.',
            en: 'The claim is wrong: cost per boe fell from 2.40 to 2.00, and PM compliance (90%) and planned work (75%) both improved.',
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
              fa: 'کدهای ساختاریافته خرابی (قطعه، حالت، آسیب، علت، اقدام) تحلیل پارتو و علت ریشه‌ای را ممکن می‌کنند؛ «سایر» را محدود کنید.',
              en: 'Structured failure codes (part, mode, damage, cause, activity) make Pareto and root-cause analysis possible; keep “Other” to a minimum.',
            },
            {
              fa: 'MTBF = زمان کارکرد ÷ خرابی‌ها؛ MTTR = زمان تعمیر ÷ تعمیرها؛ دسترس‌پذیری ذاتی = MTBF ÷ (MTBF + MTTR).',
              en: 'MTBF = uptime ÷ failures; MTTR = repair time ÷ repairs; inherent availability = MTBF ÷ (MTBF + MTTR).',
            },
            {
              fa: 'OEE حاصل‌ضرب دسترس‌پذیری، عملکرد و کیفیت است و اتلاف‌هایی را نشان می‌دهد که شمارش خرابی نمی‌بیند.',
              en: 'OEE is availability × performance × quality and reveals losses that counting failures misses.',
            },
            {
              fa: 'هزینه را همیشه با حجم بخوانید: هزینه نگهداری هر boe و درصد ارزش جایگزینی دارایی‌ها.',
              en: 'Always read cost with volume: maintenance cost per boe and as a percentage of replacement asset value.',
            },
            {
              fa: 'یکپارچگی دارایی یعنی نگه‌داشتن هیدروکربن داخل لوله: RBI، مدیریت خوردگی، بازرسی تجهیزات تحت فشار و آزمون اجزای حیاتی ایمنی.',
              en: 'Asset integrity means keeping hydrocarbons in the pipe: RBI, corrosion management, pressure-equipment inspection and SCE testing.',
            },
            {
              fa: 'ERP شاخص‌ها را از اعلان‌ها، تأییدها، اسناد اندازه‌گیری و مانده‌های دفتر کل می‌سازد و هزینه بازرسی و مواد شیمیایی را خودکار به مالی می‌برد.',
              en: 'The ERP builds the KPIs from notifications, confirmations, measurement documents and GL balances, and posts inspection and chemical costs to Finance automatically.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            { term: { fa: 'قابلیت اطمینان', en: 'Reliability' }, def: { fa: 'احتمال کار بدون خرابی در یک دوره معین و شرایط معین.', en: 'The probability of working without failure for a given period under given conditions.' } },
            { term: { fa: 'دسترس‌پذیری', en: 'Availability' }, def: { fa: 'سهمی از زمان که دارایی آماده کار است.', en: 'The share of time an asset is ready to run.' } },
            { term: { fa: 'MTBF', en: 'MTBF' }, def: { fa: 'میانگین زمان بین خرابی‌ها: زمان کارکرد تقسیم بر تعداد خرابی‌ها.', en: 'Mean time between failures: uptime divided by the number of failures.' } },
            { term: { fa: 'MTTR', en: 'MTTR' }, def: { fa: 'میانگین زمان تعمیر: زمان کل تعمیرها تقسیم بر تعداد آن‌ها.', en: 'Mean time to repair: total repair time divided by the number of repairs.' } },
            { term: { fa: 'OEE (اثربخشی کلی تجهیزات)', en: 'OEE (overall equipment effectiveness)' }, def: { fa: 'حاصل‌ضرب دسترس‌پذیری، عملکرد و کیفیت.', en: 'Availability × performance × quality.' } },
            { term: { fa: 'کد خرابی', en: 'Failure code' }, def: { fa: 'کد ساختاریافته‌ای که قطعه، حالت، آسیب، علت یا اقدام یک خرابی را ثبت می‌کند.', en: 'A structured code recording the part, mode, damage, cause or activity of a failure.' } },
            { term: { fa: 'تحلیل علت ریشه‌ای (RCA)', en: 'Root cause analysis (RCA)' }, def: { fa: 'روشی برای یافتن علت اصلی خرابی به جای درمان نشانه‌ها.', en: 'A method for finding a failure’s underlying cause rather than treating symptoms.' } },
            { term: { fa: 'پایبندی به PM', en: 'PM compliance' }, def: { fa: 'درصد PMهای سررسیدشده که در بازه مجاز انجام شده‌اند.', en: 'The percentage of due PMs done within their allowed window.' } },
            { term: { fa: 'یکپارچگی دارایی', en: 'Asset integrity' }, def: { fa: 'توانایی دارایی برای انجام کارکردش با حفاظت از افراد، محیط زیست و خود دارایی.', en: 'An asset’s ability to perform its function while protecting people, the environment and itself.' } },
            { term: { fa: 'بازرسی مبتنی بر ریسک (RBI)', en: 'Risk-based inspection (RBI)' }, def: { fa: 'تمرکز تلاش بازرسی بر تجهیزاتی با بیشترین احتمال × پیامد خرابی.', en: 'Focusing inspection on equipment with the highest probability × consequence of failure.' } },
            { term: { fa: 'نرخ خوردگی', en: 'Corrosion rate' }, def: { fa: 'کاهش ضخامت دیواره در هر سال.', en: 'Wall-thickness loss per year.' } },
            { term: { fa: 'اجزای حیاتی ایمنی (SCE)', en: 'Safety-critical elements (SCE)' }, def: { fa: 'تجهیزاتی که جلوی حوادث بزرگ را می‌گیرند یا پیامد آن‌ها را محدود می‌کنند.', en: 'Equipment that prevents major accidents or limits their consequences.' } },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: {
        fa: 'یک کمپرسور گاز در سال 6,000 ساعت کار کرده و 4 بار خراب شده است. MTBF آن چقدر است؟',
        en: 'A gas compressor ran 6,000 hours in a year and failed 4 times. What is its MTBF?',
      },
      options: [
        { fa: '1,500 ساعت', en: '1,500 hours' },
        { fa: '2,190 ساعت', en: '2,190 hours' },
        { fa: '1,000 ساعت', en: '1,000 hours' },
        { fa: '24,000 ساعت', en: '24,000 hours' },
      ],
      answer: 0,
      explain: {
        fa: 'MTBF = زمان کارکرد ÷ خرابی‌ها = 6,000 ÷ 4 = 1,500 ساعت. عدد 2,190 از تقسیم کل ساعت‌های سال (8,760) بر 4 به دست می‌آید و زمان توقف را هم کارکرد حساب می‌کند.',
        en: 'MTBF = uptime ÷ failures = 6,000 ÷ 4 = 1,500 hours. 2,190 divides the year’s 8,760 hours by 4, wrongly counting downtime as operating time.',
      },
    },
    {
      q: {
        fa: 'سه تعمیر یک پمپ 10، 14 و 6 ساعت طول کشیده‌اند. MTTR چقدر است؟',
        en: 'Three repairs of a pump took 10, 14 and 6 hours. What is the MTTR?',
      },
      options: [
        { fa: '30 ساعت', en: '30 hours' },
        { fa: '14 ساعت', en: '14 hours' },
        { fa: '10 ساعت', en: '10 hours' },
        { fa: '6 ساعت', en: '6 hours' },
      ],
      answer: 2,
      explain: {
        fa: 'MTTR = (10 + 14 + 6) ÷ 3 = 30 ÷ 3 = 10 ساعت. 30 جمع کل است، نه میانگین؛ 14 و 6 هم بیشینه و کمینه‌اند.',
        en: 'MTTR = (10 + 14 + 6) ÷ 3 = 30 ÷ 3 = 10 hours. 30 is the total, not the mean; 14 and 6 are just the longest and shortest repairs.',
      },
    },
    {
      q: {
        fa: 'MTBF یک تجهیز 990 ساعت و MTTR آن 10 ساعت است. دسترس‌پذیری ذاتی چقدر است؟',
        en: 'A piece of equipment has an MTBF of 990 hours and an MTTR of 10 hours. What is its inherent availability?',
      },
      options: [
        { fa: '98٪', en: '98%' },
        { fa: '99٪', en: '99%' },
        { fa: '99.9٪', en: '99.9%' },
        { fa: '90٪', en: '90%' },
      ],
      answer: 1,
      explain: {
        fa: '990 ÷ (990 + 10) = 990 ÷ 1,000 = 99٪. اگر MTTR را از MTBF کم کنید و تقسیم کنید (980 ÷ 1,000) به 98٪ می‌رسید که نادرست است.',
        en: '990 ÷ (990 + 10) = 990 ÷ 1,000 = 99%. Subtracting MTTR instead (980 ÷ 1,000) gives the wrong 98%.',
      },
    },
    {
      q: {
        fa: 'در یک ماه دسترس‌پذیری 90٪، عملکرد 95٪ و کیفیت 98٪ بوده است. OEE چقدر است؟',
        en: 'In a month, availability was 90%, performance 95% and quality 98%. What is the OEE?',
      },
      options: [
        { fa: '94.3٪', en: '94.3%' },
        { fa: '90.0٪', en: '90.0%' },
        { fa: '85.0٪', en: '85.0%' },
        { fa: '83.8٪', en: '83.8%' },
      ],
      answer: 3,
      explain: {
        fa: 'OEE = 0.90 × 0.95 × 0.98 ≈ 0.838، یعنی 83.8٪. 94.3٪ میانگین سه عامل است؛ اما اتلاف‌ها روی هم انباشته می‌شوند، پس باید ضرب کرد.',
        en: 'OEE = 0.90 × 0.95 × 0.98 ≈ 0.838, i.e. 83.8%. 94.3% is the average of the factors, but losses compound, so you multiply.',
      },
    },
    {
      q: {
        fa: 'ضخامت فعلی دیواره یک مخزن 12.0 میلی‌متر، حداقل ضخامت مجاز 9.0 میلی‌متر و نرخ خوردگی 0.25 میلی‌متر در سال است. عمر باقی‌مانده چقدر است؟',
        en: 'A vessel wall is now 12.0 mm thick, the minimum required thickness is 9.0 mm and the corrosion rate is 0.25 mm per year. What is the remaining life?',
      },
      options: [
        { fa: '48 سال', en: '48 years' },
        { fa: '12 سال', en: '12 years' },
        { fa: '36 سال', en: '36 years' },
        { fa: '6 سال', en: '6 years' },
      ],
      answer: 1,
      explain: {
        fa: '(12.0 − 9.0) ÷ 0.25 = 12 سال. 48 سال کل ضخامت را بر نرخ تقسیم کرده و حداقل ضخامت را نادیده گرفته است. 6 سال فاصله بازرسی با قاعده نیمی از عمر باقی‌مانده است، نه خود عمر باقی‌مانده.',
        en: '(12.0 − 9.0) ÷ 0.25 = 12 years. 48 years divides the whole wall by the rate, ignoring the minimum thickness. 6 years is the half-life inspection interval, not the remaining life.',
      },
    },
    {
      q: {
        fa: 'هزینه نگهداری یک میدان 3,000,000 و تولید آن 1,200,000 boe است. هزینه نگهداری هر boe چقدر است؟',
        en: 'A field’s maintenance cost is 3,000,000 and its production is 1,200,000 boe. What is the maintenance cost per boe?',
      },
      options: [
        { fa: '2.5', en: '2.5' },
        { fa: '0.4', en: '0.4' },
        { fa: '2.0', en: '2.0' },
        { fa: '25', en: '25' },
      ],
      answer: 0,
      explain: {
        fa: '3,000,000 ÷ 1,200,000 = 2.5. عدد 0.4 تقسیم وارونه است (تولید بر هزینه) که معنای هزینه واحد ندارد.',
        en: '3,000,000 ÷ 1,200,000 = 2.5. 0.4 is the inverse (production per unit of cost), which is not a unit cost.',
      },
    },
    {
      q: {
        fa: 'چرا تکنسین‌ها باید خرابی را با کدهای ساختاریافته ثبت کنند، نه فقط با متن آزاد؟',
        en: 'Why should technicians record failures with structured codes rather than free text only?',
      },
      options: [
        { fa: 'تا دستور کار کامل‌تر به نظر برسد', en: 'So that the work order looks more complete' },
        { fa: 'چون محاسبه استهلاک به آن نیاز دارد', en: 'Because depreciation needs it' },
        { fa: 'تا بتوان خرابی‌ها را در صدها دستور کار شمرد، پارتو گرفت و علت ریشه‌ای را پیدا کرد', en: 'So failures can be counted across hundreds of work orders, Pareto-analysed and traced to root causes' },
        { fa: 'چون فاکتور فروشنده بدون آن پرداخت نمی‌شود', en: 'Because vendor invoices cannot be paid without it' },
      ],
      answer: 2,
      explain: {
        fa: 'کد را می‌شود شمرد و دسته‌بندی کرد؛ متن آزاد را نه. همین، تحلیل پارتو و یافتن علت‌هایی مانند آلودگی روغن را ممکن می‌کند. کدهای خرابی ربطی به استهلاک یا پرداخت فاکتور ندارند.',
        en: 'Codes can be counted and grouped; free text cannot. That makes Pareto analysis and finding causes like oil contamination possible. Failure codes have nothing to do with depreciation or invoice payment.',
      },
    },
    {
      q: {
        fa: 'کدام یک شاخص پیشرو است؟',
        en: 'Which of these is a leading indicator?',
      },
      options: [
        { fa: 'تعداد خرابی‌های فصل گذشته', en: 'Number of failures last quarter' },
        { fa: 'ساعت‌های توقف ماه گذشته', en: 'Downtime hours last month' },
        { fa: 'هزینه نگهداری سال گذشته', en: 'Last year’s maintenance cost' },
        { fa: 'پایبندی به برنامه PM', en: 'PM compliance' },
      ],
      answer: 3,
      explain: {
        fa: 'پایبندی به PM رفتاری را می‌سنجد که خرابی‌های آینده را کم می‌کند؛ پس پیشرو است. سه گزینه دیگر نتیجه‌هایی‌اند که پس از وقوع شمرده می‌شوند؛ یعنی پسرو.',
        en: 'PM compliance measures behaviour that reduces future failures, so it leads. The other three are results counted after the fact, so they lag.',
      },
    },
    {
      q: {
        fa: 'هدف بازرسی مبتنی بر ریسک (RBI) چیست؟',
        en: 'What is the purpose of risk-based inspection (RBI)?',
      },
      options: [
        { fa: 'تمرکز تلاش بازرسی بر تجهیزاتی که حاصل احتمال × پیامد خرابی در آن‌ها بیشتر است', en: 'Focusing inspection effort on equipment with the highest probability × consequence of failure' },
        { fa: 'بازرسی همه تجهیزات با فاصله یکسان', en: 'Inspecting all equipment at the same interval' },
        { fa: 'حذف بازرسی و کار کردن تا خرابی', en: 'Dropping inspection and running to failure' },
        { fa: 'بازرسی فقط پس از وقوع نشت', en: 'Inspecting only after a leak' },
      ],
      answer: 0,
      explain: {
        fa: 'RBI منابع محدود بازرسی را جایی خرج می‌کند که ریسک بیشتر است؛ تجهیزات پرریسک زودتر و دقیق‌تر بازرسی می‌شوند. فاصله یکسان برای همه، روی تجهیزات کم‌ریسک هزینه هدر می‌دهد و تجهیزات پرریسک را دیر می‌بیند.',
        en: 'RBI spends limited inspection resources where risk is highest; high-risk items are inspected sooner and more thoroughly. A uniform interval wastes effort on low-risk items and reaches high-risk ones too late.',
      },
    },
    {
      q: {
        fa: 'ERP، MTTR یک کمپرسور را از کدام داده حساب می‌کند؟',
        en: 'Which data does the ERP use to compute a compressor’s MTTR?',
      },
      options: [
        { fa: 'مانده حساب هزینه نگهداری در دفتر کل', en: 'The maintenance expense balance in the general ledger' },
        { fa: 'سفارش‌های خرید قطعات', en: 'Purchase orders for parts' },
        { fa: 'زمان شروع و پایان خرابی که در اعلان‌های «توقف» و تأییدهای دستور کار ثبت شده است', en: 'The failure start and end times recorded on breakdown notifications and work order confirmations' },
        { fa: 'دفتر معین دارایی‌های ثابت', en: 'The fixed-asset sub-ledger' },
      ],
      answer: 2,
      explain: {
        fa: 'MTTR زمان است، نه پول؛ از زمان شروع و پایان خرابی در اعلان و دستور کار می‌آید. دفتر کل مبلغ هزینه را دارد اما نمی‌گوید تجهیز چند ساعت از کار افتاده بود.',
        en: 'MTTR is time, not money; it comes from the failure start and end times on the notification and work order. The general ledger holds the cost but not how many hours the equipment was down.',
      },
    },
  ],
}
