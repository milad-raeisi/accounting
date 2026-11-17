import type { L, Lesson } from '../../types'

/*
 * Running example (shared with the rest of the assets course): Masar Petroleum (MP01), Arya field.
 * Compressor station: centrifugal compressors K-101 and K-102 driven by gas turbines GT-101 and GT-102.
 * Production station: condensate export pump P-210 (no standby), slug catcher V-100, separator V-201 with PSV-205.
 * Cost centres: CC-ARY-CMP compressor station, CC-ARY-MNT mechanical crew (200 per hour).
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
  mechAlloc: t('دستمزد تخصیص‌یافته: گروه مکانیک (CC-ARY-MNT)', 'Labour cost allocated: mechanical crew (CC-ARY-MNT)'),
  receiverCS: t('هزینه تعمیر و نگهداری: گیرنده CC-ARY-CMP (R، عملیاتی)', 'Repairs and maintenance: receiver CC-ARY-CMP (R, Operating)'),
}
const w31 = wo('WO-40031')

export const lesson: Lesson = {
  slug: 'maintenance-strategies',
  number: 3,
  level: 'intermediate',
  minutes: 28,
  icon: 'RefreshCcw',
  tone: 'gold',
  title: t('راهبردهای نگهداری و تعمیرات', 'Maintenance Strategies'),
  summary: t(
    'نگهداری اصلاحی، پیشگیرانه (زمانی و کارکردی)، پیشگویانه و مبتنی بر وضعیت را بشناسید، با اندیشه‌های RCM و بازرسی مبتنی بر ریسک آشنا شوید، راهبرد هر تجهیز را بر پایه بحرانیت، پیامد خرابی و هزینه سالانه انتخاب کنید و ببینید برنامه‌های نگهداری در ERP چطور خودکار دستور کار می‌سازند.',
    'Learn corrective, preventive (time- and usage-based), predictive and condition-based maintenance, meet the ideas behind RCM and risk-based inspection, choose each item’s strategy by criticality, failure consequence and annual cost, and see how ERP maintenance plans generate work orders automatically.',
  ),
  objectives: [
    t('چهار خانواده اصلی راهبرد نگهداری را توضیح دهید و مقایسه کنید', 'Explain and compare the four main families of maintenance strategy'),
    t('موعد سرویس کارکردی و فاصله بازرسی را بر پایه بازه P-F حساب کنید', 'Calculate a usage-based due date and an inspection interval from the P-F interval'),
    t('اندیشه‌های RCM و بازرسی مبتنی بر ریسک را به زبان ساده بیان کنید و عمر باقی‌مانده را حساب کنید', 'State the ideas behind RCM and risk-based inspection simply, and calculate remaining life'),
    t('راهبرد مناسب را بر پایه بحرانیت، پیامد خرابی و هزینه سالانه انتخاب کنید', 'Choose the right strategy by criticality, failure consequence and annual cost'),
    t('برنامه نگهداری را در ERP تعریف کنید و مسیر آن را تا دستور کار و سند مالی دنبال کنید', 'Set up a maintenance plan in the ERP and follow it to the work order and the Finance entry'),
  ],
  sections: [
    {
      id: 'why-strategy',
      title: t('چرا به راهبرد نگهداری نیاز داریم؟', 'Why You Need a Maintenance Strategy'),
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'تا دو سال پیش، نگهداری در میدان آریا یک قاعده داشت: «تا خراب نشده، دست نزن». پمپ صادرات میعانات `P-210` که پمپ آماده‌به‌کار ندارد، سالی 6 بار از کار می‌افتاد. در همان زمان، کمپرسورهای K-101 و K-102 هر 6 ماه، چه لازم بود چه نبود، متوقف و یاتاقان‌هایشان باز و بازرسی می‌شد و چند بار درست پس از همین بازکردن‌ها، به‌خاطر مونتاژ نادرست از مدار خارج شدند. مشکل کم‌کاری یا پرکاری نبود؛ مشکل **نداشتن راهبرد** بود.',
            en: 'Until two years ago, maintenance at the Arya field had one rule: "If it isn’t broken, don’t touch it." The condensate export pump `P-210`, which has no standby, failed 6 times a year. Meanwhile compressors K-101 and K-102 were stopped every 6 months and their bearings opened for inspection whether they needed it or not, and several times they tripped right after those inspections because of incorrect reassembly. The problem was neither too little nor too much work; it was **having no strategy**.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**راهبرد نگهداری (Maintenance Strategy)** پاسخ به این سؤال است: برای هر تجهیز، چه کاری، چه زمانی و به چه دلیلی انجام می‌دهیم؟ پاسخ به دو چیز بستگی دارد: **تجهیز چطور خراب می‌شود** و **خرابی‌اش چه پیامدی دارد**. چهار خانواده اصلی راهبرد این‌ها هستند:',
            en: 'A **maintenance strategy** answers one question for each item: what work do we do, when, and why? The answer depends on two things: **how the item fails** and **what its failure costs us**. The four main families of strategy are:',
          },
        },
        {
          type: 'table',
          caption: t('چهار خانواده راهبرد نگهداری', 'The four families of maintenance strategy'),
          head: [t('راهبرد', 'Strategy'), t('کار چه زمانی انجام می‌شود', 'When work is done'), t('مناسب برای', 'Suits'), t('نمونه در آریا', 'Example at Arya')],
          rows: [
            [
              t('اصلاحی (کارکرد تا خرابی)', 'Corrective (run to failure)'),
              t('پس از خرابی', 'After failure'),
              t('اقلام ارزان با پیامد کم', 'Cheap items with minor consequences'),
              t('لامپ‌های محوطه، کولر دفتر', 'Yard lighting, office air conditioner'),
            ],
            [
              t('پیشگیرانه زمانی', 'Time-based preventive'),
              t('در فاصله‌های تقویمی ثابت', 'At fixed calendar intervals'),
              t('فرسایش وابسته به زمان، الزامات قانونی', 'Time-related wear, legal requirements'),
              t('آزمون عملکرد شیر اطمینان PSV-205', 'Function test of relief valve PSV-205'),
            ],
            [
              t('پیشگیرانه کارکردی', 'Usage-based preventive'),
              t('پس از مقدار مشخصی کارکرد (ساعت، تعداد استارت، حجم)', 'After a set amount of use (hours, starts, volume)'),
              t('فرسایش وابسته به کارکرد', 'Use-related wear'),
              t('بازرسی 4,000 ساعته توربین گازی GT-102', '4,000-hour inspection of gas turbine GT-102'),
            ],
            [
              t('پیشگویانه یا مبتنی بر وضعیت', 'Predictive or condition-based'),
              t('وقتی پایش، نشانه خرابی را نشان دهد', 'When monitoring shows signs of failure'),
              t('خرابی‌هایی که نشانه زودهنگام دارند', 'Failures that give early warning'),
              t('پایش ماهانه لرزش K-101 و K-102', 'Monthly vibration monitoring of K-101 and K-102'),
            ],
          ],
        },
        { type: 'h', text: t('همه خرابی‌ها به سن ربط ندارند', 'Not All Failures Are Age-Related') },
        {
          type: 'p',
          text: {
            fa: 'تصور رایج این است که هر تجهیز با بالا رفتن سن بیشتر خراب می‌شود و تعویض دوره‌ای همیشه کمک می‌کند. مطالعات گسترده‌ای که از صنعت هوانوردی آغاز شد نشان داد فقط بخش کوچکی از خرابی‌ها الگوی فرسودگی روشن دارند؛ بسیاری از خرابی‌ها، به‌ویژه در تجهیزات پیچیده، **تصادفی** هستند یا درست پس از نصب و تعمیر رخ می‌دهند (**مرگ‌ومیر زودرس**). برای این خرابی‌ها تعویض دوره‌ای کمک نمی‌کند و حتی ممکن است خرابی تازه بسازد.',
            en: 'A common belief is that every item fails more as it ages and that periodic replacement always helps. Extensive studies, starting in the aviation industry, showed that only a small share of failures follow a clear wear-out pattern; many failures, especially in complex equipment, are **random** or occur right after installation and repair (**infant mortality**). For these failures periodic replacement does not help and may even introduce new failures.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('درس برای آریا', 'The lesson for Arya'),
          text: {
            fa: 'باز کردن یاتاقان‌های کمپرسور هر 6 ماه، بدون هیچ نشانه‌ای از مشکل، همان «مرگ‌ومیر زودرس» را تولید می‌کرد. راهبرد جدید مسار پترولیوم: پایش ماهانه وضعیت، بازرسی‌های توربین بر پایه ساعت کارکرد، و تعمیر یاتاقان فقط وقتی پایش نشانه خرابی را نشان دهد.',
            en: 'Opening the compressor bearings every 6 months with no sign of a problem was creating exactly that "infant mortality". Masar Petroleum’s new strategy: monthly condition monitoring, turbine inspections based on running hours, and bearing repairs only when monitoring shows signs of failure.',
          },
        },
      ],
    },
    {
      id: 'corrective-preventive',
      title: t('نگهداری اصلاحی و پیشگیرانه', 'Corrective and Preventive Maintenance'),
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**نگهداری اصلاحی (Corrective Maintenance)** پس از خرابی انجام می‌شود. وقتی آگاهانه انتخاب شود، نامش **کارکرد تا خرابی (Run to Failure)** است و برای اقلام ارزان، با پیامد کم و دارای جایگزین، راهبردی کاملاً درست است. اما اگر برای تجهیز بحرانی پیش بیاید، **تعمیر اضطراری** است: گران، شتاب‌زده و پرریسک.',
            en: '**Corrective maintenance** is done after a failure. When chosen deliberately it is called **run to failure**, a perfectly sound strategy for cheap items with minor consequences and a backup. When it happens to a critical item, though, it is an **emergency repair**: expensive, rushed and risky.',
          },
        },
        {
          type: 'compare',
          left: {
            title: t('اصلاحی برنامه‌ریزی‌شده', 'Planned corrective'),
            items: [
              t('خرابی اثر فوری ندارد؛ کار در برنامه هفتگی قرار می‌گیرد', 'The failure has no immediate effect; the job goes into the weekly schedule'),
              t('قطعه و نیرو از قبل آماده می‌شوند', 'Parts and people are prepared in advance'),
              t('هزینه و ریسک کمتر', 'Lower cost and risk'),
            ],
          },
          right: {
            title: t('اصلاحی اضطراری', 'Emergency corrective'),
            items: [
              t('خرابی تولید یا ایمنی را مستقیم تهدید می‌کند', 'The failure directly threatens production or safety'),
              t('کار فوراً شروع می‌شود، اغلب شبانه و با اضافه‌کار', 'Work starts at once, often at night with overtime'),
              t('خرید فوری، حمل هوایی و کیفیت پایین‌تر کار', 'Urgent purchases, air freight and lower work quality'),
            ],
          },
        },
        {
          type: 'p',
          text: {
            fa: '**نگهداری پیشگیرانه (Preventive Maintenance یا PM)** پیش از خرابی و در فاصله‌های از پیش تعیین‌شده انجام می‌شود. دو نوع دارد: **زمانی (Time-based)** که بر پایه تقویم است (هر ماه، هر سال) و **کارکردی (Usage-based)** که بر پایه یک **شمارنده (Counter)** است؛ مثل ساعت کارکرد، تعداد استارت یا حجم عبوری.',
            en: '**Preventive maintenance (PM)** is done before failure at predetermined intervals. There are two kinds: **time-based**, driven by the calendar (every month, every year), and **usage-based**, driven by a **counter** such as running hours, number of starts or throughput.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: t('موعد یک سرویس کارکردی', 'A usage-based due date'),
          text: {
            fa: 'توربین گازی `GT-102` (محرک K-102) هر 4,000 ساعت کارکرد بازرسی و سرویس می‌شود. آخرین سرویس در قرائت 56,000 انجام شد و قرائت امروز 59,200 است. کارکرد از آخرین سرویس: 59,200 − 56,000 = 3,200 ساعت. باقی‌مانده تا سرویس: 4,000 − 3,200 = 800 ساعت. توربین به‌طور میانگین روزی 20 ساعت کار می‌کند، پس سرویس حدود 800 ÷ 20 = 40 روز دیگر موعد دارد.',
            en: 'Gas turbine `GT-102` (the driver of K-102) is inspected and serviced every 4,000 running hours. The last service was at a reading of 56,000 and today’s reading is 59,200. Hours since the last service: 59,200 − 56,000 = 3,200. Hours left: 4,000 − 3,200 = 800. The turbine runs 20 hours a day on average, so the service is due in about 800 ÷ 20 = 40 days.',
          },
        },
        {
          type: 'formula',
          text: t(
            'روزهای باقی‌مانده تا موعد = (فاصله سرویس − کارکرد از آخرین سرویس) ÷ کارکرد روزانه',
            'Days to due date = (service interval − usage since last service) ÷ daily usage',
          ),
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('چرا برای تجهیزات دوار، کارکردی بهتر از زمانی است؟', 'Why usage-based beats time-based for running equipment'),
          text: {
            fa: 'اگر K-102 یک ماه به‌خاطر کاهش تولید فقط روزی 10 ساعت کار کند، سرویس زمانی آن را زودتر از نیاز باز می‌کند؛ سرویس کارکردی خودبه‌خود عقب می‌افتد. برای تجهیزاتی که کارکردشان متغیر است، شمارنده دقیق‌تر از تقویم است. اما برای الزامات قانونی و ایمنی (مانند آزمون دوره‌ای شیر اطمینان یا بازرسی دوره‌ای مخازن تحت فشار) فاصله تقویمی را مقررات و برنامه بازرسی تعیین می‌کند؛ مقررات روز را بررسی کنید.',
            en: 'If K-102 runs only 10 hours a day for a month because production is reduced, a time-based service would open it earlier than needed; a usage-based one automatically moves later. For equipment with variable use, the counter is more accurate than the calendar. For legal and safety requirements, however (such as periodic relief-valve tests or pressure-vessel inspections), the calendar interval is set by regulations and the inspection programme; check the current regulations.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('خطر پیشگیرانه بیش از حد', 'The risk of too much PM'),
          text: {
            fa: 'هر بار که تجهیزی را باز می‌کنید، احتمال خطای انسانی هست: واشر جاافتاده، پیچ سفت‌نشده، آلودگی. PM فقط وقتی ارزش دارد که خرابی واقعاً به سن یا کارکرد وابسته باشد و هزینه کار از هزینه خرابیِ جلوگیری‌شده کمتر باشد.',
            en: 'Every time you open equipment, there is a chance of human error: a missing gasket, an untightened bolt, contamination. PM is only worth it when the failure really depends on age or use and the cost of the work is less than the cost of the failure it prevents.',
          },
        },
      ],
    },
    {
      id: 'predictive-cbm',
      title: t('نگهداری پیشگویانه و مبتنی بر وضعیت', 'Predictive and Condition-Based Maintenance'),
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**نگهداری مبتنی بر وضعیت (Condition-Based Maintenance یا CBM)** کار را وقتی انجام می‌دهد که پایش، نشانه یک خرابی در حال شکل‌گیری را نشان دهد. وقتی با تحلیل روند داده‌ها، زمان خرابی را هم پیش‌بینی کنیم، به آن **نگهداری پیشگویانه (Predictive Maintenance یا PdM)** می‌گویند. در عمل این دو اصطلاح اغلب به جای هم به کار می‌روند.',
            en: '**Condition-based maintenance (CBM)** does the work when monitoring shows signs of a developing failure. When trend analysis also forecasts when the failure will happen, it is called **predictive maintenance (PdM)**. In practice the two terms are often used interchangeably.',
          },
        },
        {
          type: 'table',
          caption: t('روش‌های رایج پایش وضعیت', 'Common condition-monitoring techniques'),
          head: [t('روش', 'Technique'), t('چه چیزی را کشف می‌کند', 'What it detects'), t('کاربرد رایج در آریا', 'Typical use at Arya')],
          rows: [
            [t('تحلیل لرزش', 'Vibration analysis'), t('نابالانسی، ناهم‌راستایی، خرابی یاتاقان', 'Imbalance, misalignment, bearing damage'), t('کمپرسورها، پمپ‌ها، فن‌های کولر', 'Compressors, pumps, cooler fans')],
            [t('آنالیز روغن', 'Oil analysis'), t('سایش داخلی، آلودگی، فرسودگی روغن', 'Internal wear, contamination, oil degradation'), t('توربین‌های گازی، گیربکس‌ها، ژنراتورها', 'Gas turbines, gearboxes, generators')],
            [t('ترموگرافی', 'Thermography'), t('نقاط داغ، اتصال سست، عایق معیوب', 'Hot spots, loose connections, failed insulation'), t('تابلوهای برق، ترانسفورماتورها', 'Switchgear, transformers')],
            [t('ضخامت‌سنجی فراصوتی', 'Ultrasonic thickness measurement'), t('کاهش ضخامت دیواره بر اثر خوردگی', 'Wall thinning from corrosion'), t('جداکننده‌ها، خطوط لوله', 'Separators, pipelines')],
            [t('پایش عملکرد', 'Performance monitoring'), t('افت راندمان، گرفتگی', 'Efficiency loss, fouling'), t('کمپرسورها (دما و فشار رانش)، مبدل‌ها', 'Compressors (discharge temperature and pressure), exchangers')],
          ],
        },
        { type: 'h', text: t('بازه P-F', 'The P-F Interval') },
        {
          type: 'p',
          text: {
            fa: 'بیشتر خرابی‌ها یک‌باره رخ نمی‌دهند. نقطه **P (Potential Failure)** لحظه‌ای است که نشانه خرابی برای اولین بار قابل تشخیص می‌شود (مثلاً لرزش یاتاقان کمی بالا می‌رود). نقطه **F (Functional Failure)** لحظه‌ای است که تجهیز دیگر کارش را انجام نمی‌دهد. فاصله این دو را **بازه P-F** می‌نامند. اگر بازرسی‌ها به اندازه کافی نزدیک به هم نباشند، خرابی می‌تواند میان دو بازرسی رشد کند و از دست برود.',
            en: 'Most failures do not happen all at once. Point **P (potential failure)** is when a sign of failure first becomes detectable (for example bearing vibration starts to rise). Point **F (functional failure)** is when the item can no longer do its job. The time between them is the **P-F interval**. If inspections are not close enough together, a failure can develop between two inspections and be missed.',
          },
        },
        {
          type: 'formula',
          text: t('فاصله بازرسی ≤ بازه P-F ÷ 2 (قاعده سرانگشتی رایج)', 'Inspection interval ≤ P-F interval ÷ 2 (a common rule of thumb)'),
          note: t(
            'مثال: خرابی یاتاقان کمپرسور حدود 8 هفته پیش از توقف با تحلیل لرزش قابل تشخیص است. فاصله بازرسی: 8 ÷ 2 = 4 هفته؛ پس پایش ماهانه کافی است و پس از کشف، دست‌کم 4 هفته برای برنامه‌ریزی تعمیر وقت هست.',
            'Example: compressor bearing damage can be detected by vibration analysis about 8 weeks before the trip. Inspection interval: 8 ÷ 2 = 4 weeks, so monthly monitoring is enough and, after detection, there are still at least 4 weeks to plan the repair.',
          ),
        },
        {
          type: 'callout',
          tone: 'example',
          title: t('CBM در آریا', 'CBM at Arya'),
          text: {
            fa: 'پس از خرابی‌ای که در درس «مبانی مدیریت دارایی» دیدیم، K-101 زیر پایش ماهانه لرزش رفت. در یکی از بازدیدها، لرزش یاتاقان سمت غیرمحرک از 2.8 به 5.1 میلی‌متر بر ثانیه رسید؛ بالاتر از حد هشدار 4.5. ERP از روی این قرائت یک اعلان ساخت، اعلان با اولویت P2 (فوری) ثبت شد، تعمیر برای یک توقف برنامه‌ریزی‌شده سه روز بعد زمان‌بندی شد و یاتاقان از انبار رزرو شد. به‌جای 18 روز توقف اضطراری، کار در کمتر از دو روز و بدون گازسوزی اضافه انجام شد. همین دستور کار را در درس «چرخه عمر دستور کار» دنبال می‌کنیم.',
            en: 'After the failure we saw in the lesson on asset management fundamentals, K-101 was put on monthly vibration monitoring. In one survey, vibration on the non-drive-end bearing rose from 2.8 to 5.1 mm/s, above the 4.5 alert limit. The ERP created a notification from that reading, the notification was given priority P2 (urgent), the repair was scheduled for a planned stop three days later and the bearing was reserved in the warehouse. Instead of an 18-day emergency outage, the job took less than two days with no extra flaring. We follow this work order in the lesson on the work order lifecycle.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('CBM رایگان نیست', 'CBM is not free'),
          text: {
            fa: 'ابزار، نرم‌افزار، کارشناس آموزش‌دیده و نظم در جمع‌آوری داده هزینه دارد. اگر خرابی نشانه زودهنگام نداشته باشد (مثلاً خرابی ناگهانی یک برد الکترونیکی) یا پیامدش کم باشد، CBM به صرفه نیست.',
            en: 'Instruments, software, trained analysts and disciplined data collection all cost money. If a failure gives no early warning (for example a sudden electronic-board failure) or its consequence is minor, CBM does not pay.',
          },
        },
      ],
    },
    {
      id: 'rcm-rbi',
      title: t('RCM و بازرسی مبتنی بر ریسک', 'RCM and Risk-Based Inspection'),
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**نگهداری مبتنی بر قابلیت اطمینان (Reliability-Centred Maintenance یا RCM)** روشی ساختاریافته برای انتخاب راهبرد است. RCM به‌جای اینکه بپرسد «این تجهیز را چطور سرویس کنیم؟»، می‌پرسد «این تجهیز قرار است چه **کارکردی** داشته باشد و چطور ممکن است در آن ناکام بماند؟». روش RCM معمولاً با هفت سؤال خلاصه می‌شود:',
            en: '**Reliability-centred maintenance (RCM)** is a structured method for choosing strategy. Instead of asking "How do we service this item?", RCM asks "What **function** is this item supposed to perform, and how can it fail to do so?" RCM is usually summarised in seven questions:',
          },
        },
        {
          type: 'list',
          ordered: true,
          items: [
            t('کارکردها و استانداردهای عملکرد تجهیز چیست؟', 'What are the functions and performance standards of the asset?'),
            t('به چه شکل‌هایی ممکن است در انجام کارکرد ناکام بماند (خرابی کارکردی)؟', 'In what ways can it fail to fulfil its functions (functional failures)?'),
            t('علت هر خرابی کارکردی چیست (حالت خرابی)؟', 'What causes each functional failure (failure modes)?'),
            t('وقتی هر خرابی رخ می‌دهد، چه اتفاقی می‌افتد (اثر خرابی)؟', 'What happens when each failure occurs (failure effects)?'),
            t('هر خرابی از چه نظر اهمیت دارد (پیامد ایمنی، محیط زیست، تولید یا فقط هزینه)؟', 'In what way does each failure matter (safety, environmental, operational or only cost consequences)?'),
            t('چه کاری می‌توان برای پیش‌بینی یا پیشگیری از هر خرابی انجام داد؟', 'What can be done to predict or prevent each failure?'),
            t('اگر کار پیشگیرانه مناسبی پیدا نشد، چه باید کرد (مثلاً بازطراحی یا کارکرد تا خرابی)؟', 'What should be done if no suitable proactive task can be found (for example redesign or run to failure)?'),
          ],
        },
        {
          type: 'table',
          caption: t(
            'برگه RCM پمپ صادرات میعانات P-210 (بخشی)؛ کارکرد: انتقال میعانات با دبی دست‌کم 30 مترمکعب در ساعت',
            'RCM worksheet for condensate export pump P-210 (extract); function: transfer condensate at no less than 30 m³/h',
          ),
          head: [t('حالت خرابی', 'Failure mode'), t('اثر', 'Effect'), t('پیامد', 'Consequence'), t('کار انتخاب‌شده', 'Chosen task'), t('فاصله', 'Interval')],
          rows: [
            [t('سایش یاتاقان', 'Bearing wear'), t('لرزش، سپس توقف پمپ و بالا آمدن سطح مخزن', 'Vibration, then pump trip and tank level rising'), t('تولید', 'Operational'), t('پایش لرزش', 'Vibration monitoring'), t('ماهانه', 'Monthly')],
            [
              t('نشتی آب‌بند مکانیکی', 'Mechanical seal leak'),
              t('نشت هیدروکربن', 'Hydrocarbon release'),
              t('ایمنی و محیط زیست', 'Safety and environmental'),
              t('بازدید نشتی در گشت اپراتور و تعویض آب‌بند بر پایه وضعیت', 'Leak check on operator rounds and seal replacement on condition'),
              t('روزانه', 'Daily'),
            ],
            [t('فرسایش پروانه', 'Impeller erosion'), t('افت تدریجی دبی', 'Gradual loss of flow'), t('تولید', 'Operational'), t('پایش عملکرد (دبی و فشار)', 'Performance monitoring (flow and pressure)'), t('هفتگی', 'Weekly')],
            [
              t('سوختن لامپ نشانگر تابلو محلی', 'Local panel indicator lamp burns out'),
              t('بدون اثر بر کارکرد پمپ', 'No effect on the pump’s function'),
              t('فقط هزینه', 'Cost only'),
              t('کارکرد تا خرابی', 'Run to failure'),
              t('ندارد', 'None'),
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('در عمل: RCM برای همه نیست', 'In practice: RCM is not for everything'),
          text: {
            fa: 'تحلیل کامل RCM وقت‌گیر است و به تیمی از بهره‌برداری، نگهداری و مهندسی نیاز دارد. شرکت‌ها معمولاً آن را فقط برای تجهیزات رده A انجام می‌دهند و برای بقیه از راهبردهای استاندارد هر کلاس تجهیز استفاده می‌کنند. معیارهای فرایند RCM در استانداردهایی مانند SAE JA1011 آمده است.',
            en: 'A full RCM analysis is time-consuming and needs a team from operations, maintenance and engineering. Companies usually do it only for class A equipment and use standard strategies per equipment class for the rest. Criteria for the RCM process are set out in standards such as SAE JA1011.',
          },
        },
        { type: 'h', text: t('بازرسی مبتنی بر ریسک (RBI)', 'Risk-Based Inspection (RBI)') },
        {
          type: 'p',
          text: {
            fa: 'تجهیزات ثابت (مخازن تحت فشار، لوله‌کشی، خطوط لوله) قطعه دوار ندارند؛ تهدید اصلی آن‌ها **خوردگی و کاهش ضخامت** است. **بازرسی مبتنی بر ریسک (Risk-Based Inspection یا RBI)** برای هر تجهیز دو چیز را برآورد می‌کند: **احتمال خرابی** (بر پایه نرخ خوردگی، سن و شرایط فرایند) و **پیامد خرابی** (ایمنی، محیط زیست، تولید). ریسک = احتمال × پیامد. تجهیزات پرریسک زودتر و دقیق‌تر بازرسی می‌شوند و فاصله بازرسی تجهیزات کم‌ریسک بیشتر می‌شود. در صنعت نفت و گاز، روش‌های RBI در راهنماهایی مانند API 580 و API 581 آمده‌اند.',
            en: 'Static equipment (pressure vessels, piping, pipelines) has no moving parts; its main threat is **corrosion and wall thinning**. **Risk-based inspection (RBI)** estimates two things for each item: the **probability of failure** (from corrosion rate, age and process conditions) and the **consequence of failure** (safety, environment, production). Risk = probability × consequence. High-risk items are inspected sooner and more thoroughly; low-risk items get longer intervals. In oil and gas, RBI methods are set out in guidance such as API 580 and API 581.',
          },
        },
        {
          type: 'formula',
          text: t(
            'عمر باقی‌مانده = (ضخامت فعلی − حداقل ضخامت لازم) ÷ نرخ خوردگی',
            'Remaining life = (current thickness − minimum required thickness) ÷ corrosion rate',
          ),
          note: t(
            'قاعده رایج در آیین‌نامه‌های بازرسی: بازرسی بعدی حداکثر در نیمه عمر باقی‌مانده انجام شود (با یک سقف حداکثر). آیین‌نامه حاکم بر تأسیسات خودتان را بررسی کنید.',
            'A common rule in inspection codes: inspect again no later than halfway through the remaining life (subject to a maximum interval). Check the code that applies to your facility.',
          ),
        },
        {
          type: 'callout',
          tone: 'example',
          title: t('اسلاگ‌کچر (تله لخته) V-100', 'Slug catcher V-100'),
          text: {
            fa: 'ضخامت‌سنجی پوسته `V-100` در ورودی ایستگاه بهره‌برداری کمترین ضخامت را 14.0 میلی‌متر نشان می‌دهد. حداقل ضخامت لازم طبق محاسبه طراحی 9.2 میلی‌متر و نرخ خوردگی اندازه‌گیری‌شده 0.3 میلی‌متر در سال است. عمر باقی‌مانده = (14.0 − 9.2) ÷ 0.3 = 4.8 ÷ 0.3 = 16 سال. بازرسی بعدی: حداکثر 16 ÷ 2 = 8 سال دیگر. اگر ارزیابی RBI پیامد خرابی را بسیار زیاد بداند، تیم بازرسی فاصله را کوتاه‌تر می‌کند. محاسبه نرخ خوردگی از دو قرائت را در درس «قابلیت اطمینان، یکپارچگی دارایی و شاخص‌های عملکرد» می‌بینیم.',
            en: 'Ultrasonic readings on the shell of `V-100` at the production station inlet show a minimum thickness of 14.0 mm. The minimum required thickness from the design calculation is 9.2 mm and the measured corrosion rate is 0.3 mm a year. Remaining life = (14.0 − 9.2) ÷ 0.3 = 4.8 ÷ 0.3 = 16 years. Next inspection: within 16 ÷ 2 = 8 years at most. If the RBI assessment rates the consequence as very high, the inspection team shortens that interval. Working out the corrosion rate from two readings is covered in the lesson on reliability, asset integrity and KPIs.',
          },
        },
      ],
    },
    {
      id: 'choosing-strategy',
      title: t('انتخاب راهبرد: بحرانیت، پیامد و هزینه', 'Choosing a Strategy: Criticality, Consequence and Cost'),
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'انتخاب راهبرد را با بحرانیت تجهیز (از درس «فهرست دارایی‌ها و ساختار سلسله‌مراتبی») و رفتار خرابی آن شروع کنید. جدول زیر قاعده کلی مسار پترولیوم است:',
            en: 'Start choosing a strategy from the item’s criticality (from the lesson on the asset register and hierarchy) and its failure behaviour. The table below is Masar Petroleum’s general rule:',
          },
        },
        {
          type: 'table',
          caption: t('ماتریس انتخاب راهبرد مسار پترولیوم', 'Masar Petroleum’s strategy-selection matrix'),
          head: [t('رفتار خرابی', 'Failure behaviour'), t('رده A', 'Class A'), t('رده B', 'Class B'), t('رده C', 'Class C')],
          rows: [
            [
              t('نشانه زودهنگام دارد (بازه P-F قابل استفاده)', 'Gives early warning (usable P-F interval)'),
              t('پایش وضعیت (CBM)', 'Condition monitoring (CBM)'),
              t('CBM ساده در گشت اپراتور', 'Simple CBM on operator rounds'),
              t('کارکرد تا خرابی', 'Run to failure'),
            ],
            [
              t('وابسته به سن یا کارکرد، بدون نشانه', 'Age- or use-related, no warning'),
              t('پیشگیرانه کارکردی یا زمانی', 'Usage- or time-based PM'),
              t('پیشگیرانه زمانی یا کارکردی', 'Time- or usage-based PM'),
              t('کارکرد تا خرابی', 'Run to failure'),
            ],
            [
              t('تصادفی و بدون نشانه', 'Random, no warning'),
              t('افزونگی (آماده‌به‌کار)، قطعه یدکی حیاتی یا بازطراحی', 'Redundancy (standby), critical spare or redesign'),
              t('قطعه یدکی در انبار', 'Spare in stock'),
              t('کارکرد تا خرابی', 'Run to failure'),
            ],
            [
              t('خرابی پنهان (فقط هنگام نیاز معلوم می‌شود)', 'Hidden failure (revealed only on demand)'),
              t('آزمون عملکرد دوره‌ای', 'Periodic function test'),
              t('آزمون عملکرد دوره‌ای', 'Periodic function test'),
              t('آزمون عملکرد در صورت الزام قانونی', 'Function test if legally required'),
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('خرابی پنهان', 'Hidden failures'),
          text: {
            fa: 'شیر اطمینان PSV-205 یا پمپ آب آتش‌نشانی P-901 در حالت عادی کاری نمی‌کنند. اگر خراب شوند، کسی متوجه نمی‌شود تا روزی که به آن‌ها نیاز است. برای این **خرابی‌های پنهان** تنها راه، **آزمون عملکرد دوره‌ای (Function Test)** است.',
            en: 'Relief valve PSV-205 or fire-water pump P-901 do nothing in normal operation. If they fail, nobody notices until the day they are needed. For these **hidden failures** the only answer is a **periodic function test**.',
          },
        },
        { type: 'h', text: t('مقایسه هزینه سالانه', 'Comparing Annual Cost') },
        {
          type: 'p',
          text: {
            fa: 'وقتی چند راهبرد از نظر فنی ممکن است، هزینه سالانه هر کدام را مقایسه کنید. هزینه هر خرابی را کامل بشمارید: تعمیر **و** پیامد آن (تولید ازدست‌رفته، گازسوزی، جریمه). برای P-210 (بدون پمپ آماده‌به‌کار) هر خرابی 30,000 هزینه تعمیر و 20,000 زیان تولید دارد، یعنی 50,000. هر تعمیر اساسی دوره‌ای 25,000 و هر تعمیر برنامه‌ریزی‌شده‌ای که پیش از خرابی انجام شود 26,000 هزینه دارد. پایش وضعیت پمپ سالانه 12,000 است.',
            en: 'When several strategies are technically possible, compare the annual cost of each. Count the full cost of a failure: the repair **and** its consequence (lost production, flaring, penalties). For P-210 (no standby) each failure costs 30,000 to repair plus 20,000 of lost production, 50,000 in total. A periodic overhaul costs 25,000, and a planned repair done before failure costs 26,000. Condition monitoring of the pump costs 12,000 a year.',
          },
        },
        {
          type: 'table',
          caption: t('هزینه سالانه سه راهبرد برای P-210', 'Annual cost of three strategies for P-210'),
          head: [t('راهبرد', 'Strategy'), t('کار برنامه‌ریزی‌شده و پایش', 'Planned work and monitoring'), t('هزینه خرابی‌ها', 'Failure cost'), t('جمع سالانه', 'Annual total')],
          rows: [
            [t('کارکرد تا خرابی (6 خرابی)', 'Run to failure (6 failures)'), 0, 300000, 300000],
            [t('پیشگیرانه زمانی (4 تعمیر اساسی، 2 خرابی)', 'Time-based PM (4 overhauls, 2 failures)'), 100000, 100000, 200000],
            [t('CBM (پایش و 3 تعمیر برنامه‌ریزی‌شده، 1 خرابی)', 'CBM (monitoring and 3 planned repairs, 1 failure)'), 90000, 50000, 140000],
          ],
          numericCols: [1, 2, 3],
        },
        {
          type: 'p',
          text: {
            fa: 'محاسبه CBM: 12,000 + (3 × 26,000) = 90,000 برای کار برنامه‌ریزی‌شده و 1 × 50,000 برای خرابی. CBM با 140,000 ارزان‌ترین گزینه است: 160,000 کمتر از کارکرد تا خرابی و 60,000 کمتر از PM زمانی. افزون بر این، نشتی آب‌بند پیامد ایمنی دارد و کارکرد تا خرابی برای آن اصلاً پذیرفتنی نیست؛ حتی اگر ارزان‌تر بود باید کنار گذاشته می‌شد.',
            en: 'CBM: 12,000 + (3 × 26,000) = 90,000 of planned work, plus 1 × 50,000 for the failure. At 140,000, CBM is the cheapest option: 160,000 less than run to failure and 60,000 less than time-based PM. Besides, a seal leak has a safety consequence, so run to failure would be unacceptable for it anyway, even if it were cheaper.',
          },
        },
        { type: 'h', text: t('اشتباه‌های رایج', 'Common Mistakes') },
        {
          type: 'list',
          items: [
            t('**یک راهبرد برای همه.** PM تقویمی برای همه تجهیزات هم پول را هدر می‌دهد و هم خرابی تازه می‌سازد.', '**One strategy for everything.** Calendar PM on every item wastes money and creates new failures.'),
            t(
              '**نادیده گرفتن پیامد.** مقایسه فقط هزینه تعمیر، بدون زیان تولید و ریسک ایمنی، همیشه کارکرد تا خرابی را ارزان نشان می‌دهد.',
              '**Ignoring consequences.** Comparing only repair costs, without lost production and safety risk, always makes run to failure look cheap.',
            ),
            t('**جمع کردن داده بدون اقدام.** قرائت لرزشی که کسی تحلیلش نکند، فقط هزینه است.', '**Collecting data without acting.** Vibration readings nobody analyses are pure cost.'),
            t('**فراموش کردن خرابی‌های پنهان.** تجهیزات ایمنی آماده‌به‌کار بدون آزمون عملکرد، فقط ظاهراً آماده‌اند.', '**Forgetting hidden failures.** Standby safety equipment that is never function-tested only looks ready.'),
            t(
              '**بازبینی نکردن راهبرد.** وقتی داده خرابی نشان می‌دهد برنامه جواب نمی‌دهد، فاصله‌ها و کارها را تغییر دهید.',
              '**Never reviewing the strategy.** When failure data shows a plan is not working, change the intervals and tasks.',
            ),
          ],
        },
      ],
    },
    {
      id: 'erp-maintenance-plans',
      title: t('برنامه‌های نگهداری در ERP', 'Maintenance Plans in the ERP'),
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'راهبرد روی کاغذ تا وقتی در ERP به **برنامه نگهداری** تبدیل نشود، اجرا نمی‌شود. ERP برای این کار سه نوع داده پایه دارد:',
            en: 'A strategy on paper does nothing until it becomes a **maintenance plan** in the ERP. The ERP uses three kinds of master data for this:',
          },
        },
        {
          type: 'list',
          items: [
            t(
              '**دستورالعمل کار (Task List)**: گام‌های کار، مرکز کار (گروه فنی)، ساعت لازم، قطعات (از BOM تجهیز)، خدمات بیرونی، ابزار و نکات ایمنی.',
              '**Task list**: the work steps, work centre (crew), hours needed, parts (from the equipment BOM), external services, tools and safety notes.',
            ),
            t(
              '**برنامه نگهداری (Maintenance Plan)**: چرخه (هر ماه، هر 4,000 ساعت یا یک آستانه وضعیت)، تجهیز یا مکان عملیاتی، دستورالعمل کار، زمان پیش‌اعلان و قاعده تسویه پیش‌فرض.',
              '**Maintenance plan**: the cycle (monthly, every 4,000 hours, or a condition threshold), the equipment or functional location, the task list, the lead time and the default settlement rule.',
            ),
            t(
              '**نقطه اندازه‌گیری و شمارنده (Measuring Point / Counter)**: جایی که قرائت ساعت کارکرد، لرزش، دما یا ضخامت ثبت می‌شود.',
              '**Measuring point and counter**: where readings of running hours, vibration, temperature or thickness are recorded.',
            ),
          ],
        },
        {
          type: 'table',
          caption: t('بخشی از برنامه‌های نگهداری میدان آریا', 'Some maintenance plans of the Arya field'),
          head: [t('برنامه', 'Plan'), t('تجهیز', 'Object'), t('نوع', 'Type'), t('چرخه', 'Cycle'), t('دستورالعمل کار', 'Task list'), t('پیش‌اعلان', 'Lead time')],
          rows: [
            [t('MP-2001', 'MP-2001'), t('K-101، K-102', 'K-101, K-102'), t('پایش وضعیت (زمانی)', 'Condition monitoring (time-based)'), t('ماهانه', 'Monthly'), t('TL-CM-01 مسیر لرزش', 'TL-CM-01 vibration route'), t('7 روز', '7 days')],
            [t('MP-2002', 'MP-2002'), t('GT-102', 'GT-102'), t('کارکردی', 'Usage-based'), t('4,000 ساعت', '4,000 hours'), t('TL-GT-4000', 'TL-GT-4000'), t('200 ساعت', '200 hours')],
            [t('MP-2003', 'MP-2003'), t('GT-101، GT-102', 'GT-101, GT-102'), t('زمانی', 'Time-based'), t('4 سال (تعمیر اساسی)', '4 years (major overhaul)'), t('TL-GT-OVH', 'TL-GT-OVH'), t('180 روز', '180 days')],
            [
              t('MP-2004', 'MP-2004'),
              t('PSV-205', 'PSV-205'),
              t('زمانی (آزمون عملکرد)', 'Time-based (function test)'),
              t('24 ماه (فرضی؛ طبق برنامه بازرسی و مقررات)', '24 months (illustrative; per inspection programme and regulations)'),
              t('TL-PSV-01', 'TL-PSV-01'),
              t('30 روز', '30 days'),
            ],
            [
              t('MP-2005', 'MP-2005'),
              t('K-101، K-102', 'K-101, K-102'),
              t('مبتنی بر وضعیت', 'Condition-based'),
              t('دمای یاتاقان بیشتر از 95 درجه', 'Bearing temperature above 95 °C'),
              t('ساخت اعلان', 'Creates a notification'),
              t('فوری', 'Immediate'),
            ],
          ],
        },
        { type: 'h', text: t('برنامه چطور دستور کار می‌سازد؟', 'How a Plan Generates Work Orders') },
        {
          type: 'steps',
          items: [
            {
              title: t('قرائت شمارنده‌ها', 'Counter readings'),
              text: t(
                'اپراتور هر روز ساعت کارکرد توربین‌ها را ثبت می‌کند (یا سامانه کنترل آن را خودکار به ERP می‌فرستد). ERP از این قرائت‌ها کارکرد روزانه میانگین را حساب می‌کند.',
                'The operator records the turbines’ running hours daily (or the control system sends them to the ERP automatically). The ERP calculates average daily usage from these readings.',
              ),
            },
            {
              title: t('زمان‌بندی خودکار', 'Scheduling run'),
              text: t(
                'یک برنامه شبانه همه برنامه‌های نگهداری را بررسی می‌کند: در برنامه زمانی تاریخ را، در کارکردی قرائت و میانگین کارکرد را و در مبتنی بر وضعیت آخرین اندازه‌گیری را.',
                'A nightly job checks every maintenance plan: the date for time-based plans, the reading and average usage for usage-based plans, the latest measurement for condition-based plans.',
              ),
            },
            {
              title: t('ساخت دستور کار', 'Work-order creation'),
              text: t(
                'وقتی موعد به اندازه پیش‌اعلان نزدیک شود، ERP دستور کار را با گام‌ها، ساعت‌ها، قطعات، خدمات و قاعده تسویه از روی دستورالعمل کار می‌سازد. برای GT-102 با 800 ساعت باقی‌مانده و پیش‌اعلان 200 ساعت، دستور کار وقتی ساخته می‌شود که 200 ساعت به موعد مانده باشد: حدود (800 − 200) ÷ 20 = 30 روز دیگر.',
                'When the due point comes within the lead time, the ERP creates the work order with steps, hours, parts, services and settlement rule from the task list. For GT-102, with 800 hours left and a 200-hour lead time, the work order is created when 200 hours remain: about (800 − 200) ÷ 20 = 30 days from now.',
              ),
            },
            {
              title: t('رزرو و درخواست خرید', 'Reservations and requisitions'),
              text: t(
                'با آزاد شدن دستور کار، قطعات انباری رزرو می‌شوند و برای کالای غیرانباری و خدمات (مانند بازرسی بوروسکوپ سازنده) درخواست خرید ساخته می‌شود؛ بعدها رسید کالا (GRN) یا برگه ثبت خدمات (SES) هزینه واقعی را ثبت می‌کند.',
                'When the work order is released, stock parts are reserved and purchase requisitions are created for non-stock items and services (such as the OEM’s borescope inspection); later a goods received note (GRN) or service entry sheet (SES) records the actual cost.',
              ),
            },
            {
              title: t('اجرا و بازخورد', 'Execution and feedback'),
              text: t(
                'پس از اجرا، قرائت جدید شمارنده و تاریخ انجام، چرخه بعدی را تعیین می‌کند. یافته‌ها و کدهای خرابی به تاریخچه تجهیز می‌روند تا راهبرد بازبینی شود.',
                'After execution, the new counter reading and completion date set the next cycle. Findings and failure codes go to the equipment history so the strategy can be reviewed.',
              ),
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: '**نقش‌ها و تأییدها**: مهندس قابلیت اطمینان راهبرد و فاصله‌ها را پیشنهاد می‌دهد؛ برنامه‌ریز نگهداری دستورالعمل کار و برنامه را در ERP می‌سازد؛ مدیر نگهداری برنامه جدید یا تغییر فاصله‌ها را با گردش کار تأیید می‌کند؛ کنترل بودجه در مالی هزینه برنامه‌ریزی‌شده سالانه را در بودجه عملیاتی قرار می‌دهد.',
            en: '**Roles and approvals**: the reliability engineer proposes the strategy and intervals; the maintenance planner builds the task list and plan in the ERP; the maintenance manager approves new plans or interval changes through an approval workflow; budget control in Finance puts the planned annual cost into the operating budget.',
          },
        },
        { type: 'h', text: t('و در مالی؟', 'And in Finance?') },
        {
          type: 'p',
          text: {
            fa: 'ساختن برنامه نگهداری و حتی ساختن دستور کار هیچ سند مالی ایجاد نمی‌کند؛ ERP فقط **هزینه برنامه‌ریزی‌شده** را نشان می‌دهد که برای بودجه مفید است. سند واقعی با حواله کالا، تأیید زمان، GRN و SES زده می‌شود. سرویس 4,000 ساعته GT-102 با دستور کار `WO-40031` این هزینه‌ها را داشت: 12 ساعت کار گروه مکانیک × 200 = 2,400؛ قطعات از انبار: 24 المنت فیلتر هوای ورودی × 150 = 3,600 و 2 المنت فیلتر روغن × 450 = 900، جمعاً 4,500؛ و بازرسی بوروسکوپ توسط سازنده با SES به مبلغ 2,500.',
            en: 'Creating a maintenance plan, and even creating the work order, posts nothing to Finance; the ERP only shows the **planned cost**, which is useful for budgeting. Real entries come from goods issues, time confirmations, GRNs and SESs. GT-102’s 4,000-hour service on work order `WO-40031` had these costs: 12 mechanical crew hours × 200 = 2,400; parts from stock: 24 inlet-air filter elements × 150 = 3,600 and 2 lube-oil filter elements × 450 = 900, 4,500 in total; and the OEM’s borescope inspection, accepted on an SES for 2,500.',
          },
        },
        {
          type: 'journal',
          title: t('سندهای خودکار ERP برای WO-40031', 'Automatic ERP postings for WO-40031'),
          entries: [
            {
              date: t('حواله انبار', 'Goods issue'),
              lines: [
                { account: w31.mat, debit: 4500 },
                { account: ac.inventory, credit: 4500 },
              ],
              memo: t('المنت‌های فیلتر هوا و روغن از انبار میدان', 'Air and oil filter elements from the Field Warehouse'),
            },
            {
              date: t('تأیید زمان', 'Time confirmation'),
              lines: [
                { account: w31.lab, debit: 2400 },
                { account: ac.mechAlloc, credit: 2400 },
              ],
              memo: t('12 ساعت × 200', '12 hours × 200'),
            },
            {
              date: t('تأیید برگه ثبت خدمات (SES)', 'Service entry sheet (SES) approved'),
              lines: [
                { account: w31.svc, debit: 2500 },
                { account: ac.grir, credit: 2500 },
              ],
              memo: t('بازرسی بوروسکوپ سازنده؛ فاکتور بعداً با SES تطبیق داده می‌شود', 'OEM borescope inspection; the invoice is matched to the SES later'),
            },
            {
              date: t('تسویه پایان ماه', 'Month-end settlement'),
              lines: [
                { account: ac.receiverCS, debit: 9400 },
                { account: w31.sender, credit: 9400 },
              ],
              memo: t('4,500 + 2,400 + 2,500 = 9,400؛ فقط موضوع هزینه عوض می‌شود', '4,500 + 2,400 + 2,500 = 9,400; only the cost object changes'),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل: بودجه و بازیافت هزینه', 'In practice: budget and cost recovery'),
          text: {
            fa: 'هزینه نگهداری پیشگیرانه معمولاً **هزینه عملیاتی** است (پرچم R، طبقه عملیاتی) و در همان دوره به هزینه می‌رود. چون از برنامه تصویب‌شده آمده و دستور کار، ساعت‌ها، قطعات و SES آن ثبت شده، مدرک لازم برای بازیافت در قرارداد نفتی و برای بودجه سالانه‌ای که به شرکا ارائه می‌شود آماده است. ERP می‌تواند هزینه برنامه‌ریزی‌شده همه برنامه‌های نگهداری سال آینده را برای بودجه جمع بزند. اگر کار تا پایان ماه انجام شده اما فاکتورش نرسیده باشد، SES تأییدشده هزینه را در همان ماه ثبت کرده است؛ همین اقلام در تطبیق حساب GR/IR بررسی می‌شوند.',
            en: 'Preventive maintenance cost is usually an **operating cost** (flag R, category Operating), expensed in the period. Because it comes from an approved plan and its work order, hours, parts and SES are recorded, the evidence for recovery under the petroleum contract, and for the annual budget presented to the partners, is ready. The ERP can total the planned cost of next year’s maintenance plans for the budget. If the work was done by month-end but the invoice has not arrived, the approved SES has already recorded the cost in that month; these items are reviewed in the GR/IR reconciliation.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('دستور کارهای PM انجام‌نشده', 'Unfinished PM work orders'),
          text: {
            fa: 'اگر دستور کارهای PM ساخته شوند اما انجام و بسته نشوند، چرخه بعدی درست حساب نمی‌شود، شاخص رعایت برنامه خراب می‌شود و ریسک واقعی پنهان می‌ماند. هر دستور کار PM یا انجام و تأیید می‌شود، یا با دلیل ثبت‌شده لغو یا جابه‌جا می‌شود.',
            en: 'If PM work orders are created but never done and closed, the next cycle is calculated wrongly, schedule compliance is distorted and the real risk stays hidden. Every PM work order is either completed and confirmed, or cancelled or deferred with a recorded reason.',
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
          title: t('کدام راهبرد؟', 'Which strategy?'),
          difficulty: 'easy',
          problem: t('برای هر مورد، مناسب‌ترین راهبرد را انتخاب کنید و دلیل بیاورید.', 'Choose the most suitable strategy for each item and give a reason.'),
          given: {
            head: [t('ردیف', 'No.'), t('مورد', 'Item')],
            rows: [
              [t('1', '1'), t('لامپ‌های روشنایی محوطه انبار میدان', 'Yard lights at the Field Warehouse')],
              [t('2', '2'), t('شیر اطمینان PSV-205 که فقط هنگام فشار بیش از حد عمل می‌کند', 'Relief valve PSV-205, which acts only on overpressure')],
              [t('3', '3'), t('یاتاقان‌های K-101 که حدود 8 هفته پیش از خرابی لرزش نشان می‌دهند', 'K-101 bearings, which show vibration about 8 weeks before failure')],
              [t('4', '4'), t('شمع‌های ژنراتور گازسوز G-401 که با ساعت کارکرد فرسوده می‌شوند', 'Spark plugs of gas-engine generator G-401, which wear with running hours')],
              [t('5', '5'), t('پوسته مخزن V-100 که خوردگی آهسته دارد', 'The shell of vessel V-100, which corrodes slowly')],
              [t('6', '6'), t('برد کنترل یک تجهیز رده A که تصادفی و بدون نشانه خراب می‌شود', 'The control card of a class A item, which fails randomly without warning')],
            ],
          },
          solution: [
            {
              type: 'table',
              head: [t('ردیف', 'No.'), t('راهبرد', 'Strategy'), t('دلیل', 'Reason')],
              rows: [
                [t('1', '1'), t('کارکرد تا خرابی', 'Run to failure'), t('ارزان، پیامد ناچیز', 'Cheap, negligible consequence')],
                [t('2', '2'), t('آزمون عملکرد دوره‌ای', 'Periodic function test'), t('خرابی پنهان؛ عنصر حیاتی ایمنی', 'Hidden failure; safety-critical element')],
                [t('3', '3'), t('پایش وضعیت (تحلیل لرزش ماهانه)', 'Condition monitoring (monthly vibration)'), t('بازه P-F حدود 8 هفته؛ رده A', 'P-F interval about 8 weeks; class A')],
                [t('4', '4'), t('پیشگیرانه کارکردی', 'Usage-based PM'), t('فرسایش وابسته به ساعت کارکرد', 'Wear depends on running hours')],
                [t('5', '5'), t('بازرسی مبتنی بر ریسک با ضخامت‌سنجی', 'Risk-based inspection with thickness readings'), t('تجهیز ثابت با تهدید خوردگی', 'Static equipment threatened by corrosion')],
                [t('6', '6'), t('قطعه یدکی حیاتی یا افزونگی', 'Critical spare or redundancy'), t('خرابی تصادفی بدون نشانه؛ پیامد زیاد', 'Random failure with no warning; high consequence')],
              ],
            },
          ],
          answer: t(
            'کارکرد تا خرابی؛ آزمون عملکرد؛ پایش وضعیت؛ PM کارکردی؛ RBI؛ قطعه یدکی حیاتی یا افزونگی',
            'Run to failure; function test; condition monitoring; usage-based PM; RBI; critical spare or redundancy',
          ),
        },
        {
          type: 'exercise',
          title: t('موعد سرویس و فاصله پایش', 'Service due date and monitoring interval'),
          difficulty: 'medium',
          problem: t(
            'ژنراتور گازسوز G-401 هر 2,000 ساعت کارکرد سرویس می‌شود. آخرین سرویس در قرائت 41,600 انجام شده و قرائت امروز 43,200 است. ژنراتور روزی 20 ساعت کار می‌کند و پیش‌اعلان برنامه 7 روز است. (الف) سرویس چند روز دیگر موعد دارد؟ (ب) ERP چند روز دیگر دستور کار را می‌سازد؟ (ج) آنالیز روغن سایش یاتاقان را حدود 6 هفته پیش از خرابی نشان می‌دهد؛ نمونه‌گیری روغن هر چند هفته باشد؟',
            'Gas-engine generator G-401 is serviced every 2,000 running hours. The last service was at a reading of 41,600 and today’s reading is 43,200. It runs 20 hours a day and the plan’s lead time is 7 days. (a) In how many days is the service due? (b) In how many days will the ERP create the work order? (c) Oil analysis shows bearing wear about 6 weeks before failure; how often should oil be sampled?',
          ),
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('کارکرد از آخرین سرویس', 'Usage since last service'), text: t('43,200 − 41,600 = 1,600 ساعت', '43,200 − 41,600 = 1,600 hours') },
                { title: t('باقی‌مانده تا موعد', 'Hours left'), text: t('2,000 − 1,600 = 400 ساعت', '2,000 − 1,600 = 400 hours') },
                { title: t('(الف) روز تا موعد', '(a) Days to due date'), text: t('400 ÷ 20 = 20 روز', '400 ÷ 20 = 20 days') },
                { title: t('(ب) ساخت دستور کار', '(b) Work-order creation'), text: t('20 − 7 = 13 روز دیگر', '20 − 7 = 13 days from now') },
                { title: t('(ج) فاصله نمونه‌گیری', '(c) Sampling interval'), text: t('بازه P-F ÷ 2 = 6 ÷ 2 = 3 هفته', 'P-F interval ÷ 2 = 6 ÷ 2 = 3 weeks') },
              ],
            },
          ],
          answer: t('سرویس 20 روز دیگر؛ دستور کار 13 روز دیگر ساخته می‌شود؛ نمونه‌گیری روغن هر 3 هفته', 'Service due in 20 days; work order created in 13 days; oil sampled every 3 weeks'),
        },
        {
          type: 'exercise',
          title: t('عمر باقی‌مانده خط لوله', 'Remaining life of a pipeline'),
          difficulty: 'medium',
          problem: t(
            'در کیلومتر 12 خط لوله صادرات گاز، ضخامت دیواره 9.5 میلی‌متر اندازه‌گیری شده است. حداقل ضخامت لازم 6.3 میلی‌متر و نرخ خوردگی 0.4 میلی‌متر در سال است. (الف) عمر باقی‌مانده و حداکثر فاصله تا بازرسی بعدی را با قاعده نیمه عمر باقی‌مانده حساب کنید. (ب) اگر پمپ تزریق بازدارنده خوردگی از کار بیفتد و نرخ خوردگی دو برابر شود، پاسخ‌ها چه می‌شوند؟',
            'At km 12 of the export gas pipeline, the wall thickness measures 9.5 mm. The minimum required thickness is 6.3 mm and the corrosion rate is 0.4 mm a year. (a) Calculate the remaining life and the maximum interval to the next inspection using the half-remaining-life rule. (b) If the corrosion-inhibitor injection pump fails and the corrosion rate doubles, what are the answers?',
          ),
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('ضخامت قابل مصرف', 'Thickness available'), text: t('9.5 − 6.3 = 3.2 میلی‌متر', '9.5 − 6.3 = 3.2 mm') },
                { title: t('(الف) عمر باقی‌مانده', '(a) Remaining life'), text: t('3.2 ÷ 0.4 = 8 سال؛ بازرسی بعدی حداکثر 8 ÷ 2 = 4 سال دیگر', '3.2 ÷ 0.4 = 8 years; next inspection within 8 ÷ 2 = 4 years') },
                { title: t('(ب) نرخ دو برابر', '(b) Doubled rate'), text: t('3.2 ÷ 0.8 = 4 سال؛ بازرسی بعدی حداکثر 2 سال دیگر', '3.2 ÷ 0.8 = 4 years; next inspection within 2 years') },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: t(
                'خرابی یک پمپ کوچک تزریق مواد شیمیایی، عمر خط لوله را نصف می‌کند. به همین دلیل پمپ تزریق بازدارنده با اینکه ارزان است، به‌خاطر پیامدش بحرانیت بالایی می‌گیرد.',
                'The failure of a small chemical-injection pump halves the pipeline’s life. That is why the inhibitor pump, though cheap, gets a high criticality because of its consequence.',
              ),
            },
          ],
          answer: t('عمر باقی‌مانده 8 سال و بازرسی حداکثر 4 سال دیگر؛ با نرخ 0.8: عمر 4 سال و بازرسی 2 سال دیگر', 'Remaining life 8 years, inspect within 4 years; at 0.8 mm/year: 4 years, inspect within 2 years'),
        },
        {
          type: 'exercise',
          title: t('انتخاب راهبرد برای کمپرسور هوای ابزار دقیق', 'Choosing a strategy for the instrument-air compressor'),
          difficulty: 'hard',
          problem: t(
            'کمپرسور هوای ابزار دقیق `K-501` در ایستگاه تقویت فشار پشتیبان ندارد و قطع هوای ابزار دقیق کل ایستگاه را متوقف می‌کند (رده A). هزینه هر خرابی: تعمیر 12,000 و زیان تولید 36,000. با داده‌های زیر هزینه سالانه سه راهبرد را حساب کنید، بهترین را انتخاب کنید و بگویید در ERP چه چیزی باید تعریف شود.',
            'Instrument-air compressor `K-501` at the compressor station has no backup, and losing instrument air shuts the whole station down (class A). Each failure costs 12,000 to repair plus 36,000 of lost production. Using the data below, calculate the annual cost of three strategies, choose the best, and say what must be set up in the ERP.',
          ),
          given: {
            head: [t('راهبرد', 'Strategy'), t('کار برنامه‌ریزی‌شده در سال', 'Planned work per year'), t('خرابی در سال', 'Failures per year')],
            rows: [
              [t('کارکرد تا خرابی', 'Run to failure'), t('ندارد', 'None'), 4],
              [t('پیشگیرانه زمانی', 'Time-based PM'), t('4 سرویس × 6,000', '4 services × 6,000'), 2],
              [t('CBM (لرزش و آنالیز روغن)', 'CBM (vibration and oil analysis)'), t('پایش 9,000 و 2 تعمیر برنامه‌ریزی‌شده × 10,000', 'Monitoring 9,000 and 2 planned repairs × 10,000'), 1],
            ],
            numericCols: [2],
          },
          solution: [
            {
              type: 'table',
              head: [t('راهبرد', 'Strategy'), t('کار برنامه‌ریزی‌شده', 'Planned work'), t('هزینه خرابی‌ها', 'Failure cost'), t('جمع سالانه', 'Annual total')],
              rows: [
                [t('کارکرد تا خرابی', 'Run to failure'), 0, 192000, 192000],
                [t('پیشگیرانه زمانی', 'Time-based PM'), 24000, 96000, 120000],
                [t('CBM', 'CBM'), 29000, 48000, 77000],
              ],
              numericCols: [1, 2, 3],
            },
            {
              type: 'steps',
              items: [
                { title: t('هزینه هر خرابی', 'Cost per failure'), text: t('12,000 + 36,000 = 48,000', '12,000 + 36,000 = 48,000') },
                { title: t('کارکرد تا خرابی', 'Run to failure'), text: t('4 × 48,000 = 192,000', '4 × 48,000 = 192,000') },
                { title: t('PM زمانی', 'Time-based PM'), text: t('(4 × 6,000) + (2 × 48,000) = 24,000 + 96,000 = 120,000', '(4 × 6,000) + (2 × 48,000) = 24,000 + 96,000 = 120,000') },
                { title: t('CBM', 'CBM'), text: t('9,000 + (2 × 10,000) + (1 × 48,000) = 29,000 + 48,000 = 77,000', '9,000 + (2 × 10,000) + (1 × 48,000) = 29,000 + 48,000 = 77,000') },
                {
                  title: t('تصمیم', 'Decision'),
                  text: t(
                    'CBM ارزان‌ترین است: 115,000 کمتر از کارکرد تا خرابی و 43,000 کمتر از PM زمانی. چون پیامد خرابی زیاد است، ارزیابی خرید یک کمپرسور آماده‌به‌کار هم ارزش بررسی دارد.',
                    'CBM is the cheapest: 115,000 less than run to failure and 43,000 less than time-based PM. Because the failure consequence is high, a standby compressor is also worth evaluating.',
                  ),
                },
                {
                  title: t('در ERP', 'In the ERP'),
                  text: t(
                    'نقاط اندازه‌گیری لرزش و آنالیز روغن با حد هشدار؛ برنامه زمانی ماهانه MP-2010 با دستورالعمل مسیر پایش؛ برنامه مبتنی بر وضعیت که با عبور از حد هشدار اعلان می‌سازد؛ قاعده تسویه پیش‌فرض به CC-ARY-CMP با پرچم R و طبقه عملیاتی؛ و ثبت آنالیز روغن آزمایشگاه بیرونی با SES.',
                    'Measuring points for vibration and oil analysis with alert limits; a monthly time-based plan MP-2010 with the monitoring-route task list; a condition-based plan that raises a notification when a limit is crossed; a default settlement rule to CC-ARY-CMP with flag R and category Operating; and the outside lab’s oil analysis accepted on an SES.',
                  ),
                },
              ],
            },
          ],
          answer: t('CBM با 77,000 در سال؛ 115,000 کمتر از کارکرد تا خرابی و 43,000 کمتر از PM زمانی', 'CBM at 77,000 a year; 115,000 less than run to failure and 43,000 less than time-based PM'),
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
            t('راهبرد نگهداری می‌گوید برای هر تجهیز چه کاری، چه زمانی و چرا انجام شود؛ به رفتار خرابی و پیامد آن بستگی دارد.', 'A maintenance strategy says what to do for each item, when and why; it depends on failure behaviour and consequence.'),
            t('کارکرد تا خرابی برای اقلام ارزان و کم‌پیامد درست است؛ برای تجهیز بحرانی یعنی تعمیر اضطراری.', 'Run to failure is right for cheap, low-consequence items; for critical equipment it means emergency repair.'),
            t('PM زمانی بر پایه تقویم و PM کارکردی بر پایه شمارنده است؛ PM بیش از حد خودش خرابی می‌سازد.', 'Time-based PM follows the calendar and usage-based PM a counter; too much PM creates failures of its own.'),
            t('CBM کار را بر پایه نشانه‌ها انجام می‌دهد؛ فاصله بازرسی باید کوتاه‌تر از بازه P-F باشد (قاعده رایج: نصف آن).', 'CBM acts on symptoms; the inspection interval must be shorter than the P-F interval (common rule: half of it).'),
            t('RCM از کارکرد شروع می‌کند و برای هر حالت خرابی کار مناسب را انتخاب می‌کند؛ RBI بازرسی تجهیزات ثابت را بر پایه احتمال و پیامد اولویت‌بندی می‌کند.', 'RCM starts from function and picks a task for each failure mode; RBI prioritises inspection of static equipment by probability and consequence.'),
            t('راهبرد را با بحرانیت، رفتار خرابی و مقایسه هزینه سالانه کامل (تعمیر به‌علاوه پیامد) انتخاب کنید.', 'Choose by criticality, failure behaviour and a full annual-cost comparison (repair plus consequence).'),
            t(
              'در ERP، دستورالعمل کار، برنامه نگهداری و شمارنده‌ها خودکار دستور کار می‌سازند؛ سند مالی فقط با حواله، تأیید زمان، GRN، SES و تسویه زده می‌شود.',
              'In the ERP, task lists, maintenance plans and counters generate work orders automatically; Finance entries come only from goods issues, time confirmations, GRNs, SESs and settlement.',
            ),
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            { term: t('راهبرد نگهداری', 'Maintenance strategy'), def: t('تصمیم درباره نوع، زمان و دلیل کار نگهداری برای هر تجهیز', 'The decision on what maintenance to do on each item, when and why') },
            { term: t('کارکرد تا خرابی', 'Run to failure'), def: t('انتخاب آگاهانه اینکه تا خرابی کاری انجام نشود', 'A deliberate choice to do nothing until the item fails') },
            { term: t('نگهداری پیشگیرانه (PM)', 'Preventive maintenance (PM)'), def: t('کار در فاصله‌های از پیش تعیین‌شده، زمانی یا کارکردی، پیش از خرابی', 'Work at predetermined intervals, by time or usage, before failure') },
            { term: t('شمارنده', 'Counter'), def: t('نقطه اندازه‌گیری‌ای که کارکرد را می‌شمارد، مانند ساعت کارکرد', 'A measuring point that counts usage, such as running hours') },
            { term: t('نگهداری مبتنی بر وضعیت (CBM)', 'Condition-based maintenance (CBM)'), def: t('کار بر پایه نشانه‌هایی که پایش نشان می‌دهد', 'Work triggered by signs that monitoring reveals') },
            { term: t('بازه P-F', 'P-F interval'), def: t('فاصله میان قابل تشخیص شدن نشانه خرابی و خرابی کارکردی', 'The time between a failure becoming detectable and functional failure') },
            { term: t('نگهداری مبتنی بر قابلیت اطمینان (RCM)', 'Reliability-centred maintenance (RCM)'), def: t('روش ساختاریافته انتخاب راهبرد بر پایه کارکرد، حالت‌های خرابی و پیامدها', 'A structured method for choosing strategy from functions, failure modes and consequences') },
            { term: t('حالت خرابی', 'Failure mode'), def: t('علت مشخص یک خرابی کارکردی، مانند سایش یاتاقان', 'The specific cause of a functional failure, such as bearing wear') },
            { term: t('خرابی پنهان', 'Hidden failure'), def: t('خرابی‌ای که تا زمان نیاز به تجهیز دیده نمی‌شود', 'A failure that is not seen until the item is needed') },
            { term: t('بازرسی مبتنی بر ریسک (RBI)', 'Risk-based inspection (RBI)'), def: t('برنامه‌ریزی بازرسی تجهیزات ثابت بر پایه احتمال و پیامد خرابی', 'Planning inspection of static equipment by probability and consequence of failure') },
            { term: t('دستورالعمل کار', 'Task list'), def: t('الگوی گام‌ها، ساعت‌ها، قطعات و خدمات یک کار نگهداری تکراری', 'The template of steps, hours, parts and services for a recurring maintenance job') },
            { term: t('برنامه نگهداری', 'Maintenance plan'), def: t('داده پایه‌ای که با چرخه و پیش‌اعلان، خودکار دستور کار می‌سازد', 'Master data that generates work orders automatically from a cycle and lead time') },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: t(
        'یک تجهیز هر 3,000 ساعت سرویس می‌شود. آخرین سرویس در قرائت 24,000 بوده و قرائت امروز 26,400 است. اگر تجهیز روزی 15 ساعت کار کند، سرویس چند روز دیگر موعد دارد؟',
        'An item is serviced every 3,000 hours. The last service was at 24,000 and today’s reading is 26,400. If it runs 15 hours a day, in how many days is the service due?',
      ),
      options: [t('160 روز', '160 days'), t('40 روز', '40 days'), t('200 روز', '200 days'), t('24 روز', '24 days')],
      answer: 1,
      explain: t(
        'کارکرد از آخرین سرویس = 26,400 − 24,000 = 2,400؛ باقی‌مانده = 3,000 − 2,400 = 600 ساعت؛ 600 ÷ 15 = 40 روز. عدد 160 از تقسیم 2,400 بر 15 به دست می‌آید، یعنی ساعت‌های گذشته را به‌جای ساعت‌های باقی‌مانده تقسیم کرده است.',
        'Usage since last service = 26,400 − 24,000 = 2,400; hours left = 3,000 − 2,400 = 600; 600 ÷ 15 = 40 days. 160 comes from dividing 2,400 by 15, i.e. using the hours already run instead of the hours left.',
      ),
    },
    {
      q: t('بازه P-F یک حالت خرابی 10 هفته است. با قاعده رایج، حداکثر فاصله بازرسی چقدر است؟', 'A failure mode has a P-F interval of 10 weeks. Under the common rule, what is the maximum inspection interval?'),
      options: [t('10 هفته', '10 weeks'), t('20 هفته', '20 weeks'), t('5 هفته', '5 weeks'), t('1 هفته', '1 week')],
      answer: 2,
      explain: t(
        'فاصله بازرسی ≤ بازه P-F ÷ 2 = 5 هفته؛ تا اگر نشانه درست پس از یک بازرسی ظاهر شد، هنوز نیمی از بازه برای برنامه‌ریزی تعمیر بماند. 10 هفته ممکن است خرابی را از دست بدهد و 1 هفته بی‌دلیل گران است.',
        'Inspection interval ≤ P-F ÷ 2 = 5 weeks, so that if the sign appears just after an inspection, half the interval remains to plan the repair. 10 weeks could miss the failure, and 1 week is needlessly expensive.',
      ),
    },
    {
      q: t(
        'ضخامت فعلی دیواره یک مخزن 12.0 میلی‌متر، حداقل ضخامت لازم 8.0 میلی‌متر و نرخ خوردگی 0.5 میلی‌متر در سال است. با قاعده نیمه عمر باقی‌مانده، بازرسی بعدی حداکثر چند سال دیگر است؟',
        'A vessel wall is 12.0 mm thick, the minimum required is 8.0 mm and the corrosion rate is 0.5 mm a year. Using the half-remaining-life rule, the next inspection is due within how many years?',
      ),
      options: [t('8 سال', '8 years'), t('4 سال', '4 years'), t('24 سال', '24 years'), t('2 سال', '2 years')],
      answer: 1,
      explain: t(
        'عمر باقی‌مانده = (12.0 − 8.0) ÷ 0.5 = 8 سال و بازرسی بعدی حداکثر در نیمه آن، یعنی 4 سال دیگر. 8 سال کل عمر باقی‌مانده است و 24 سال از تقسیم 12.0 بر 0.5 بدون کم کردن حداقل ضخامت به دست می‌آید.',
        'Remaining life = (12.0 − 8.0) ÷ 0.5 = 8 years, and the next inspection is due within half of that: 4 years. 8 years is the whole remaining life, and 24 years comes from dividing 12.0 by 0.5 without subtracting the minimum thickness.',
      ),
    },
    {
      q: t(
        'یک پمپ با کارکرد تا خرابی سالی 5 بار و هر بار با هزینه کامل 30,000 خراب می‌شود. با PM سالانه 60,000، خرابی‌ها به 1 بار در سال می‌رسد. PM سالانه چقدر صرفه‌جویی می‌کند؟',
        'Under run to failure a pump fails 5 times a year at a full cost of 30,000 each. With PM costing 60,000 a year, failures drop to 1 a year. How much does PM save per year?',
      ),
      options: [t('90,000', '90,000'), t('120,000', '120,000'), t('30,000', '30,000'), t('60,000', '60,000')],
      answer: 3,
      explain: t(
        'کارکرد تا خرابی: 5 × 30,000 = 150,000. PM: 60,000 + (1 × 30,000) = 90,000. صرفه‌جویی = 150,000 − 90,000 = 60,000. عدد 90,000 هزینه سالانه PM است، نه صرفه‌جویی، و 120,000 خرابی باقی‌مانده را فراموش کرده است.',
        'Run to failure: 5 × 30,000 = 150,000. PM: 60,000 + (1 × 30,000) = 90,000. Saving = 150,000 − 90,000 = 60,000. 90,000 is PM’s annual cost, not the saving, and 120,000 forgets the remaining failure.',
      ),
    },
    {
      q: t('برای شیر اطمینانی که فقط هنگام فشار بیش از حد عمل می‌کند، کدام راهبرد درست است؟', 'For a relief valve that acts only on overpressure, which strategy is right?'),
      options: [
        t('آزمون عملکرد دوره‌ای', 'A periodic function test'),
        t('کارکرد تا خرابی', 'Run to failure'),
        t('پایش لرزش', 'Vibration monitoring'),
        t('تعویض هر ماه', 'Replacement every month'),
      ],
      answer: 0,
      explain: t(
        'خرابی شیر اطمینان پنهان است: تا روز نیاز کسی متوجه نمی‌شود. فقط آزمون دوره‌ای آن را آشکار می‌کند. کارکرد تا خرابی برای یک عنصر حیاتی ایمنی پذیرفتنی نیست و لرزش در شیری که حرکت نمی‌کند معنایی ندارد.',
        'A relief valve’s failure is hidden: nobody notices until the day it is needed. Only a periodic test reveals it. Run to failure is unacceptable for a safety-critical element, and vibration means nothing on a valve that does not move.',
      ),
    },
    {
      q: t('تحلیل RCM با کدام سؤال شروع می‌شود؟', 'Which question does an RCM analysis start with?'),
      options: [
        t('سازنده چه فاصله سرویسی پیشنهاد داده است؟', 'What service interval does the manufacturer recommend?'),
        t('بودجه نگهداری امسال چقدر است؟', 'What is this year’s maintenance budget?'),
        t('تجهیز چه کارکردی دارد و استاندارد عملکردش چیست؟', 'What are the item’s functions and performance standards?'),
        t('کدام قطعه گران‌ترین است؟', 'Which part is the most expensive?'),
      ],
      answer: 2,
      explain: t(
        'RCM از کارکرد شروع می‌کند، چون خرابی یعنی ناکامی در انجام کارکرد. توصیه سازنده یک ورودی مفید است، اما شرایط کار و پیامد خرابی در میدان شما را نمی‌شناسد.',
        'RCM starts from function, because a failure means failing to perform a function. The manufacturer’s recommendation is a useful input, but it does not know your operating conditions or failure consequences.',
      ),
    },
    {
      q: t('بازرسی مبتنی بر ریسک (RBI) بیشتر برای کدام تجهیزات به کار می‌رود؟', 'Risk-based inspection (RBI) is mainly used for which equipment?'),
      options: [
        t('تجهیزات ثابت مانند مخازن تحت فشار، لوله‌کشی و خطوط لوله', 'Static equipment such as pressure vessels, piping and pipelines'),
        t('لامپ‌ها و تجهیزات اداری', 'Lamps and office equipment'),
        t('فقط توربین‌های گازی', 'Gas turbines only'),
        t('خودروهای سبک میدان', 'Light field vehicles'),
      ],
      answer: 0,
      explain: t(
        'RBI برای تجهیزاتی ساخته شده که تهدید اصلی‌شان خوردگی و کاهش ضخامت است و بازرسی‌شان را می‌توان با احتمال و پیامد خرابی اولویت‌بندی کرد. تجهیزات دوار بیشتر با پایش وضعیت و RCM مدیریت می‌شوند.',
        'RBI is built for equipment whose main threat is corrosion and wall thinning, so inspection can be prioritised by probability and consequence. Rotating equipment is mostly managed with condition monitoring and RCM.',
      ),
    },
    {
      q: t('چرا برای کمپرسوری که کارکردش ماه به ماه تغییر می‌کند، PM کارکردی بهتر از PM زمانی است؟', 'Why is usage-based PM better than time-based PM for a compressor whose running varies month to month?'),
      options: [
        t('چون PM کارکردی هیچ هزینه‌ای ندارد', 'Because usage-based PM costs nothing'),
        t('چون موعد را با فرسایش واقعی هماهنگ می‌کند و در ماه‌های کم‌کار عقب می‌افتد', 'Because it matches the due date to real wear and moves later in low-use months'),
        t('چون مقررات همیشه PM کارکردی را الزامی می‌کنند', 'Because regulations always require usage-based PM'),
        t('چون نیازی به ثبت قرائت شمارنده ندارد', 'Because it needs no counter readings'),
      ],
      answer: 1,
      explain: t(
        'فرسایش تجهیزات دوار با کارکرد پیش می‌رود، نه با تقویم. PM کارکردی به قرائت منظم شمارنده نیاز دارد و برای الزامات قانونی، فاصله تقویمی را مقررات تعیین می‌کند.',
        'Wear on rotating equipment follows use, not the calendar. Usage-based PM does need regular counter readings, and for legal requirements the calendar interval is set by regulation.',
      ),
    },
    {
      q: t('وقتی برنامه نگهداری در ERP خودکار یک دستور کار PM می‌سازد، چه سندی در مالی ثبت می‌شود؟', 'When an ERP maintenance plan automatically creates a PM work order, what is posted in Finance?'),
      options: [
        t('بدهکار هزینه نگهداری، بستانکار حساب‌های پرداختنی', 'Debit maintenance expense, credit accounts payable'),
        t('بدهکار دستور کار، بستانکار موجودی قطعات یدکی', 'Debit the work order, credit spare-parts inventory'),
        t('بدهکار دارایی در جریان تکمیل، بستانکار GR/IR', 'Debit assets under construction, credit GR/IR'),
        t('هیچ سندی؛ فقط هزینه برنامه‌ریزی‌شده دیده می‌شود', 'Nothing; only the planned cost is visible'),
      ],
      answer: 3,
      explain: t(
        'ساختن دستور کار یک برنامه است و چیزی جابه‌جا نشده است. سند واقعی با حواله قطعه، تأیید زمان، GRN، SES و تسویه زده می‌شود. گزینه دوم سند حواله است که بعداً رخ می‌دهد.',
        'Creating a work order is a plan; nothing has moved yet. Real entries come from goods issues, time confirmations, GRNs, SESs and settlement. The second option is the goods-issue entry, which comes later.',
      ),
    },
    {
      q: t('در یک برنامه نگهداری مبتنی بر وضعیت، چه چیزی کار را راه می‌اندازد؟', 'In a condition-based maintenance plan, what triggers the work?'),
      options: [
        t('رسیدن تاریخ تقویمی', 'A calendar date arriving'),
        t('قرائتی که از حد هشدار تعریف‌شده عبور کند و اعلان یا دستور کار بسازد', 'A reading that crosses a defined alert limit and raises a notification or work order'),
        t('درخواست حسابدار در پایان ماه', 'A request from the accountant at month-end'),
        t('تأیید فاکتور پیمانکار', 'Approval of a contractor’s invoice'),
      ],
      answer: 1,
      explain: t(
        'در برنامه مبتنی بر وضعیت، اندازه‌گیری (مثلاً دمای یاتاقان بیشتر از 95 درجه) کار را راه می‌اندازد. تاریخ تقویمی محرک برنامه زمانی است و فاکتور ربطی به زمان‌بندی کار ندارد.',
        'In a condition-based plan a measurement (for example bearing temperature above 95 °C) triggers the work. A calendar date drives time-based plans, and invoices have nothing to do with scheduling work.',
      ),
    },
  ],
}
