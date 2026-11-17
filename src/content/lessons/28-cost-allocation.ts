import type { Lesson } from '../types'

const t = (fa: string, en: string) => ({ fa, en })

/* Masar Petroleum (company code MP01): accounts used in this lesson. */
const ac = {
  auc: t('1510 دارایی‌های در جریان تکمیل (`AFE-2025-014`، R، توسعه)', '1510 Assets under construction (`AFE-2025-014`, R, Development)'),
  jointAccount: t('1710 حساب مشترک مشارکت آریا (`JV-ARY`)', '1710 Arya JV joint account (`JV-ARY`)'),
  alborz: t('1720 حساب جاری شریک: انرژی البرز', '1720 Partner current account: Alborz Energy'),
  dena: t('1730 حساب جاری شریک: نفت دنا', '1730 Partner current account: Dena Petroleum'),
  capitalised: t('5990 هزینه‌های خدماتی منتقل‌شده به پروژه‌های سرمایه‌ای', '5990 Service costs transferred to capital projects'),
}

const blank = t('', '')
const cc = (code: string) => t(`\`${code}\``, `\`${code}\``)

export const lesson: Lesson = {
  slug: 'cost-allocation',
  number: 22,
  currency: 'usd',
  level: 'advanced',
  minutes: 45,
  icon: 'ArrowLeftRight',
  tone: 'expense',
  title: t('مراکز هزینه و تسهیم هزینه‌ها', 'Cost Centres and Cost Allocation'),
  summary: t(
    'حسابداری مدیریت را در میدان آریا ببینید: انواع مرکز هزینه، مبنای تسهیم، توزیع و ارزیابی، نرخ سربار، تسهیم مرحله‌ای با یک مثال عددی کامل، تسهیم هزینه‌های مشترک به چاه‌ها و مشارکت، و اینکه چرا هر تسهیم برای حسابرسی شرکا و بازیافت هزینه باید مستند باشد.',
    'See management accounting at work in the Arya field: cost centre types, allocation bases, distribution and assessment, overhead rates, step-down allocation with a full numeric example, allocating shared costs to wells and to the joint venture, and why every allocation must be documented for partner audits and cost recovery.',
  ),
  objectives: [
    t('مرکز هزینه تولیدی، خدماتی و اداری را تشخیص دهید و داده پایه آن را در ERP بشناسید', 'Tell production, service and overhead cost centres apart and know their ERP master data'),
    t('برای هر هزینه مشترک مبنای تسهیم مناسب انتخاب کنید و توزیع را از ارزیابی تشخیص دهید', 'Choose a suitable allocation basis for each shared cost and tell distribution from assessment'),
    t('تسهیم مرحله‌ای را از ابتدا تا انتها برای میدان آریا انجام دهید و نتیجه را تفسیر کنید', 'Carry out a step-down allocation for the Arya field from start to finish and interpret the result'),
    t('هزینه‌های مشترک را به چاه‌ها و مشارکت تسهیم کنید و نرخ سربار و کم یا بیش جذبی را حساب کنید', 'Allocate shared costs to wells and the joint venture, and compute overhead rates and under- or over-absorption'),
    t('توضیح دهید چرا تسهیم‌ها برای حسابرسی شرکا و بازیافت هزینه باید مستند و ثابت باشند', 'Explain why allocations must be documented and consistent for partner audits and cost recovery'),
  ],
  sections: [
    {
      id: 'why-allocate',
      title: t('چرا هزینه‌های مشترک را تسهیم می‌کنیم؟', 'Why We Allocate Shared Costs'),
      blocks: [
        {
          type: 'p',
          text: t(
            'در میدان آریا یک کمپ، یک کارگاه نگهداری، یک تیم ایمنی و یک ایستگاه تقویت فشار به همه کار می‌دهند: به دوازده چاه AR-01 تا AR-12، به ایستگاه و به خدمه حفاری چاه توسعه‌ای `AFE-2025-014` که در کمپ زندگی می‌کنند. مدیر تولید می‌پرسد: «تولید هر بشکه از چاه AR-03 چقدر هزینه دارد؟». شریک البرز می‌پرسد: «سهم ما از هزینه کمپ بر چه اساسی حساب شده؟». شرکت ملی نفت می‌پرسد: «چه بخشی از این هزینه‌ها توسعه است و چه بخشی عملیاتی؟». پاسخ هر سه پرسش از **مراکز هزینه** و **تسهیم** می‌آید.',
            'In the Arya field, one camp, one maintenance workshop, one HSE team and one compressor station serve everyone: the twelve wells AR-01 to AR-12, the station itself, and the drilling crew of development well `AFE-2025-014`, who live in the camp. The production manager asks: "what does a barrel from well AR-03 cost?". Partner Alborz asks: "on what basis was our share of the camp cost computed?". The national oil company asks: "how much of these costs is development and how much operating?". All three answers come from **cost centres** and **allocation**.',
          ),
        },
        {
          type: 'p',
          text: t(
            '**حسابداری مدیریت (بهای تمام‌شده)** هزینه‌ها را برای تصمیم‌گیری درون سازمان به **شیء هزینه** می‌برد: مرکز هزینه، چاه، AFE، دستور کار یا مشارکت. **هزینه مستقیم** را می‌توان بی‌واسطه به یک شیء هزینه نسبت داد، مانند لوله جداری یک چاه. **هزینه غیرمستقیم (مشترک)** به چند شیء خدمت می‌کند، مانند پذیرایی کمپ. **تسهیم (Allocation)** یعنی تقسیم هزینه غیرمستقیم بین اشیای هزینه با یک **مبنای تسهیم** منطقی.',
            '**Management (cost) accounting** assigns costs to **cost objects** for internal decisions: cost centres, wells, AFEs, work orders or joint ventures. A **direct cost** can be traced straight to one cost object, such as a well’s casing. An **indirect (shared) cost** serves several objects, such as camp catering. **Allocation** means dividing an indirect cost among cost objects with a sensible **allocation basis**.',
          ),
        },
        {
          type: 'table',
          caption: t('هزینه مستقیم و مشترک در میدان آریا', 'Direct and shared costs in the Arya field'),
          head: [t('هزینه', 'Cost'), t('مستقیم به', 'Direct to'), t('یا مشترک بین', 'Or shared among')],
          rows: [
            [t('لوله جداری و سیمان‌کاری', 'Casing and cementing'), t('عنصر WBS `AFE-2025-014.02.03`', 'WBS element `AFE-2025-014.02.03`'), blank],
            [t('تعمیر پمپ درون‌چاهی AR-05', 'Downhole pump repair on AR-05'), t('دستور کار چاه AR-05', 'AR-05 work order'), blank],
            [t('سوخت گاز کمپرسورها', 'Compressor fuel gas'), t('`CC-ARY-CMP`', '`CC-ARY-CMP`'), t('و سپس همه چاه‌هایی که از ایستگاه گاز می‌گیرند', 'and then every well served by the station')],
            [t('پذیرایی و خوابگاه کمپ', 'Camp catering and accommodation'), blank, t('همه کارکنان میدان و خدمه حفاری', 'All field staff and the drilling crew')],
            [t('حقوق مهندسان دفتر مرکزی', 'Head-office engineers’ salaries'), blank, t('میدان آریا، بلوک‌های دیگر و پروژه‌ها', 'The Arya field, other blocks and projects')],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('تسهیم جمع هزینه را تغییر نمی‌دهد', 'Allocation does not change total cost'),
          text: t(
            'تسهیم هزینه کل شرکت را کم یا زیاد نمی‌کند؛ فقط جای آن را عوض می‌کند. اما همین جابه‌جایی تعیین می‌کند هزینه روی کدام چاه بنشیند، سرمایه‌ای شود یا هزینه دوره، به کدام شریک صورت‌حساب شود و در کدام طبقه بازیافت هزینه بیاید. پس اثر آن بر سود دوره، ترازنامه و پول شرکا واقعی است.',
            'Allocation neither raises nor lowers the company’s total cost; it only moves it. But that move decides which well the cost lands on, whether it is capitalised or expensed, which partner is billed and which cost-recovery category it falls in. So its effect on period profit, the balance sheet and the partners’ money is real.',
          ),
        },
      ],
    },
    {
      id: 'cost-centres',
      title: t('انواع مرکز هزینه و داده پایه آن', 'Cost Centre Types and Their Master Data'),
      blocks: [
        {
          type: 'p',
          text: t(
            '**مرکز هزینه (Cost centre)** واحدی از سازمان با یک مدیر مسئول است که هزینه‌ها در آن جمع می‌شوند. سه نوع اصلی دارد: **مرکز تولیدی (عملیاتی)** که هزینه‌اش در نهایت به محصول و چاه‌ها می‌رسد؛ **مرکز خدماتی** که به مراکز دیگر خدمت می‌دهد؛ و **مرکز اداری (سربار)** که کل سازمان را پشتیبانی می‌کند. پروژه‌های سرمایه‌ای مانند AFE حفاری مرکز هزینه نیستند، بلکه عنصر WBS هستند، اما می‌توانند گیرنده تسهیم باشند.',
            'A **cost centre** is a unit of the organisation with a responsible manager, where costs are collected. There are three main types: a **production (operating) centre**, whose cost ends up in the product and the wells; a **service centre**, which serves other centres; and an **administrative (overhead) centre**, which supports the whole organisation. Capital projects such as the drilling AFE are not cost centres but WBS elements, though they can receive allocations.',
          ),
        },
        {
          type: 'table',
          caption: t('مراکز هزینه میدان آریا و دفتر مرکزی مسار پترولیوم', 'Arya field and head-office cost centres at Masar Petroleum'),
          head: [t('کد', 'Code'), t('نام', 'Name'), t('نوع', 'Type'), t('مسئول', 'Responsible'), t('مقصد نهایی هزینه', 'Final destination of its cost')],
          rows: [
            [cc('CC-ARY-PRD'), t('عملیات تولید میدان (چاه‌ها، جداکننده‌ها، خطوط جریان)', 'Field production (wells, separators, flowlines)'), t('تولیدی', 'Production'), t('مدیر تولید میدان', 'Field production manager'), t('چاه‌ها؛ هزینه تولید', 'Wells; production cost')],
            [cc('CC-ARY-CMP'), t('ایستگاه تقویت فشار', 'Compressor station'), t('تولیدی', 'Production'), t('سرپرست ایستگاه', 'Station superintendent'), t('چاه‌ها؛ هزینه تولید', 'Wells; production cost')],
            [cc('CC-ARY-CAM'), t('کمپ و پذیرایی', 'Camp and catering'), t('خدماتی', 'Service'), t('رئیس کمپ', 'Camp boss'), t('همه واحدهای میدان و AFE حفاری', 'All field units and the drilling AFE')],
            [cc('CC-ARY-MNT'), t('نگهداری و تعمیرات میدان', 'Field maintenance'), t('خدماتی', 'Service'), t('مدیر نگهداری', 'Maintenance manager'), t('مراکز تولیدی، با ساعت کار', 'Production centres, by labour hours')],
            [cc('CC-ARY-HSE'), t('ایمنی، بهداشت، محیط زیست و حراست میدان', 'Field HSE and security'), t('خدماتی', 'Service'), t('مدیر HSE', 'HSE manager'), t('مراکز تولیدی و AFE حفاری', 'Production centres and the drilling AFE')],
            [cc('CC-HQ-TEC'), t('واحد فنی دفتر مرکزی (مهندسی، زمین‌شناسی)', 'Head-office technical (engineering, geoscience)'), t('خدماتی در سطح شرکت', 'Company-level service'), t('مدیر فنی', 'Technical director'), t('میدان‌ها و بلوک‌ها، با ساعت کارکرد', 'Fields and blocks, by time-writing')],
            [cc('CC-HQ-ADM'), t('اداری و عمومی دفتر مرکزی (مالی، منابع انسانی، حقوقی)', 'Head-office administration (finance, HR, legal)'), t('اداری (سربار)', 'Administrative (overhead)'), t('مدیر ارشد مالی', 'CFO'), t('از راه سربار JOA، نه مستقیم', 'Through the JOA overhead charge, not directly')],
            [cc('AFE-2025-014'), t('حفاری چاه توسعه‌ای (عنصر WBS، نه مرکز هزینه)', 'Development well drilling (a WBS element, not a cost centre)'), t('پروژه سرمایه‌ای', 'Capital project'), t('مدیر حفاری', 'Drilling manager'), t('دارایی در جریان تکمیل، سپس دارایی چاه', 'Assets under construction, then the well asset')],
          ],
        },
        {
          type: 'p',
          text: t(
            'داده پایه هر مرکز هزینه در ERP شامل این‌هاست: کد شرکت (`MP01`)، نوع، مدیر مسئول، مرکز سود، کد مشارکت (برای مراکز `CC-ARY-*` همیشه `JV-ARY`)، نشانگر پیش‌فرض R/N، تاریخ اعتبار و جای آن در **سلسله‌مراتب استاندارد**: مسار پترولیوم ← میدان آریا ← مراکز تولیدی و خدماتی؛ و دفتر مرکزی ← مراکز فنی و اداری. گزارش‌ها و چرخه‌های تسهیم از همین سلسله‌مراتب استفاده می‌کنند.',
            'Each cost centre’s ERP master data holds: the company code (`MP01`), type, responsible manager, profit centre, venture code (always `JV-ARY` for `CC-ARY-*` centres), default R/N flag, validity dates and its place in the **standard hierarchy**: Masar Petroleum → Arya field → production and service centres; and head office → technical and administrative centres. Reports and allocation cycles use this hierarchy.',
          ),
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('در عمل: ایران و IFRS', 'In practice: Iran and IFRS'),
          text: t(
            'در متون بهای تمام‌شده ایران، تقسیم مراکز به تولیدی، خدماتی و اداری و «تسهیم سربار» از مراکز خدماتی به تولیدی، مفهومی جاافتاده است. IFRS درباره روش تسهیم داخلی قاعده‌ای ندارد، اما دو مرز روشن دارد: طبق IAS 2 سربار تولید بر مبنای ظرفیت عادی به موجودی جذب می‌شود و طبق IAS 16 فقط مخارج **مستقیماً قابل انتساب** به دارایی سرمایه‌ای می‌شوند؛ هزینه‌های اداری و عمومی هرگز.',
            'In Iranian cost accounting texts, splitting centres into production, service and administrative ones and "allocating overhead" from service to production centres is a well-established idea. IFRS has no rule on internal allocation methods, but it sets two clear boundaries: under IAS 2, production overhead is absorbed into inventory on normal capacity, and under IAS 16 only **directly attributable** costs are capitalised into an asset; general administrative costs never are.',
          ),
        },
      ],
    },
    {
      id: 'bases',
      title: t('مبنای تسهیم: هزینه را بر اساس علت آن تقسیم کنید', 'Allocation Bases: Divide Cost by What Causes It'),
      blocks: [
        {
          type: 'p',
          text: t(
            '**مبنای تسهیم (Allocation basis یا Driver)** معیاری است که نشان می‌دهد هزینه یک مرکز خدماتی چگونه ایجاد یا مصرف می‌شود. اول به دنبال **رابطه علت و معلول** باشید؛ اگر نبود، **منفعت دریافتی**. مبنا باید قابل اندازه‌گیری و از داده‌های قابل اتکای ERP یا سیستم‌های عملیاتی باشد. تقسیم مساوی یا «به نسبت بودجه» فقط وقتی پذیرفتنی است که هیچ مبنای بهتری نباشد.',
            'An **allocation basis (driver)** is a measure that shows how a service centre’s cost is caused or consumed. Look first for **cause and effect**; failing that, **benefit received**. The basis must be measurable from reliable ERP or operational data. An equal split or "in proportion to budget" is acceptable only when no better basis exists.',
          ),
        },
        {
          type: 'table',
          caption: t('مبناهای تسهیم مسار پترولیوم', 'Masar Petroleum’s allocation bases'),
          head: [t('هزینه مشترک', 'Shared cost'), t('مبنا', 'Basis'), t('چرا', 'Why'), t('منبع داده', 'Data source')],
          rows: [
            [t('کمپ و پذیرایی', 'Camp and catering'), t('تعداد نفر یا نفر-شب', 'Headcount or person-nights'), t('وعده غذا و تخت را افراد مصرف می‌کنند', 'People consume the meals and beds'), t('سامانه کمپ یا فهرست حضور منابع انسانی', 'Camp system or HR roster')],
            [t('نگهداری میدان', 'Field maintenance'), t('ساعت کار نگهداری', 'Maintenance labour hours'), t('زمان تکنسین‌ها برای هر گیرنده', 'Technician time spent per receiver'), t('تأیید ساعت در دستورهای کار', 'Work-order time confirmations')],
            [t('ایمنی و حراست', 'HSE and security'), t('نفر-ساعت کار در سایت', 'Man-hours worked on site'), t('حضور در معرض خطر، کار ایمنی را می‌سازد', 'Exposure drives HSE effort'), t('کارت‌های ساعت و مجوزهای کار', 'Timesheets and permits to work')],
            [t('ایستگاه تقویت فشار', 'Compressor station'), t('حجم گاز فشرده‌شده یا ساعت کار', 'Gas volume compressed or run hours'), t('مصرف خدمت فشرده‌سازی', 'Consumption of compression'), t('اندازه‌گیری جریان', 'Flow metering')],
            [t('هزینه تولید میدان به چاه‌ها', 'Field production cost to wells'), t('حجم تولید برای هزینه متغیر؛ تعداد چاه-روز برای هزینه ثابت', 'Production volume for variable cost; well-days for fixed cost'), t('مواد شیمیایی و تصفیه آب با حجم تغییر می‌کنند؛ بازرسی و حراست با تعداد چاه', 'Chemicals and water handling vary with volume; inspection and security with well count'), t('گزارش تخصیص تولید', 'Production allocation report')],
            [t('واحد فنی دفتر مرکزی', 'Head-office technical'), t('ساعت کارکرد ثبت‌شده', 'Time-writing hours'), t('زمان کارشناسان برای هر میدان یا پروژه', 'Staff time per field or project'), t('سامانه کارکرد', 'Timesheet system')],
          ],
        },
        {
          type: 'p',
          text: t(
            'ERP مقدار مبناها را به‌صورت **شاخص آماری (Statistical key figure)** برای هر مرکز هزینه و هر دوره نگه می‌دارد: تعداد نفر، نفر-شب، ساعت، بشکه. این شاخص‌ها دستی وارد می‌شوند یا از سامانه‌های منابع انسانی، کمپ و تولید می‌آیند، و چرخه‌های تسهیم از آن‌ها می‌خوانند.',
            'The ERP stores driver quantities as **statistical key figures** for each cost centre and period: headcount, person-nights, hours, barrels. They are entered manually or interfaced from the HR, camp and production systems, and the allocation cycles read them.',
          ),
        },
        {
          type: 'formula',
          text: t(
            'نرخ تسهیم = هزینه قابل تسهیم ÷ جمع مبنا؛ سهم هر گیرنده = نرخ × مبنای آن گیرنده',
            'Allocation rate = Cost to allocate ÷ Total basis; Each receiver’s share = Rate × That receiver’s basis',
          ),
          note: t(
            'نمونه: کمپ 1,800,000 ÷ 120 نفر = 15,000 برای هر نفر؛ عملیات تولید با 40 نفر 600,000 می‌گیرد.',
            'Example: camp 1,800,000 ÷ 120 people = 15,000 per head; field production, with 40 people, receives 600,000.',
          ),
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('مبنا را هر سال بازبینی کنید', 'Review the bases every year'),
          text: t(
            'مبنا را یک بار انتخاب، در سیاست مکتوب ثبت و ثابت به کار ببرید. هر سال بررسی کنید آیا هنوز علت هزینه را نشان می‌دهد؛ تغییر آن فقط با تأیید کنترلر و، برای هزینه‌های مشترک، پس از اطلاع کمیته عملیاتی شرکا از ابتدای یک دوره انجام شود.',
            'Choose a basis once, record it in a written policy and apply it consistently. Each year check that it still reflects what causes the cost; change it only with the controller’s approval and, for joint costs, after informing the partners’ operating committee, from the start of a period.',
          ),
        },
      ],
    },
    {
      id: 'methods',
      title: t('روش‌ها: توزیع، ارزیابی، تخصیص فعالیت و نرخ سربار', 'Methods: Distribution, Assessment, Activity Allocation and Overhead Rates'),
      blocks: [
        {
          type: 'p',
          text: t(
            'پس از انتخاب مبنا، ERP هزینه را با یک **چرخه تسهیم** جابه‌جا می‌کند. دو روش کلی وجود دارد. در **توزیع (Distribution)** هر هزینه با همان **عنصر هزینه اولیه**‌اش (حساب هزینه اصلی) به گیرنده می‌رود. در **ارزیابی (Assessment)** همه هزینه‌های فرستنده زیر یک **عنصر هزینه ثانویه** جمع می‌شوند؛ در مسار پترولیوم این عنصر 9510 «تسهیم سربار» است.',
            'Once the basis is chosen, the ERP moves the cost with an **allocation cycle**. There are two general methods. In **distribution**, each cost travels to the receiver under its original **primary cost element** (the original expense account). In **assessment**, all the sender’s costs are grouped under one **secondary cost element**; at Masar Petroleum this is 9510 "overhead allocation".',
          ),
        },
        {
          type: 'compare',
          left: {
            title: t('توزیع', 'Distribution'),
            items: [
              t('ماهیت هزینه (پذیرایی، سوخت، تعمیر) در گیرنده دیده می‌شود', 'The nature of the cost (catering, fuel, repairs) stays visible at the receiver'),
              t('برای گزارش‌هایی که ماهیت هزینه را می‌خواهند، مانند صورت‌حساب شرکا به تفکیک نوع', 'Suits reports that need cost by nature, such as partner billing by type'),
              t('سطرهای بیشتر', 'More lines'),
              t('معمولاً برای هزینه‌های اولیه به کار می‌رود', 'Usually used for primary costs'),
            ],
          },
          right: {
            title: t('ارزیابی', 'Assessment'),
            items: [
              t('گیرنده یک سطر می‌بیند: «تسهیم از کمپ»', 'The receiver sees one line: "allocation from camp"'),
              t('ساده و خوانا برای گزارش مدیریتی', 'Simple and readable for management reporting'),
              t('ماهیت هزینه در گیرنده گم می‌شود', 'The nature of the cost is lost at the receiver'),
              t('هزینه‌های اولیه و ثانویه را با هم جابه‌جا می‌کند', 'Moves primary and secondary costs together'),
            ],
          },
        },
        {
          type: 'table',
          caption: t('سهم عملیات تولید (یک‌سوم) از هزینه کمپ با دو روش', 'Field production’s one-third share of camp cost under the two methods'),
          head: [t('عنصر هزینه', 'Cost element'), t('هزینه کمپ', 'Camp cost'), t('سهم تولید با توزیع', 'Production’s share by distribution'), t('سهم تولید با ارزیابی', 'Production’s share by assessment')],
          numericCols: [1, 2, 3],
          rows: [
            [t('5140 پذیرایی', '5140 Catering'), 1260000, 420000, blank],
            [t('5180 سوخت و آب و برق کمپ', '5180 Camp fuel and utilities'), 360000, 120000, blank],
            [t('5120 تعمیرات کمپ', '5120 Camp repairs'), 180000, 60000, blank],
            [t('9510 تسهیم سربار', '9510 Overhead allocation'), blank, blank, 600000],
            [t('**جمع**', '**Total**'), 1800000, 600000, 600000],
          ],
        },
        {
          type: 'p',
          text: t(
            'روش سوم **تخصیص فعالیت (Activity allocation)** است: مرکز خدماتی یک **نوع فعالیت** با نرخ دارد و گیرنده به اندازه مصرف واقعی بدهکار می‌شود. نمونه: نرخ «ساعت کار نگهداری» 1,350 است؛ تکنسین‌ها 120 ساعت روی دستور کار کمپرسور ثبت می‌کنند، پس 120 × 1,350 = 162,000 به دستور کار و از آنجا به `CC-ARY-CMP` می‌رود و `CC-ARY-MNT` همین مقدار بستانکار می‌شود.',
            'A third method is **activity allocation**: the service centre has an **activity type** with a rate, and the receiver is charged for what it actually used. Example: the "maintenance labour hour" rate is 1,350; technicians confirm 120 hours on a compressor work order, so 120 × 1,350 = 162,000 goes to the work order and from there to `CC-ARY-CMP`, and `CC-ARY-MNT` is credited by the same amount.',
          ),
        },
        { type: 'h', text: t('نرخ سربار و کم یا بیش جذبی', 'Overhead rates and under- or over-absorption') },
        {
          type: 'formula',
          text: t(
            'نرخ از پیش تعیین‌شده = سربار بودجه‌شده ÷ مبنای بودجه‌شده؛ سربار جذب‌شده = نرخ × مبنای واقعی؛ کم یا بیش جذبی = هزینه واقعی منهای سربار جذب‌شده',
            'Predetermined rate = Budgeted overhead ÷ Budgeted basis; Absorbed overhead = Rate × Actual basis; Under- or over-absorption = Actual cost minus absorbed overhead',
          ),
          note: t(
            'اگر هزینه واقعی بیشتر از جذب‌شده باشد، کم‌جذبی است؛ اگر کمتر، بیش‌جذبی.',
            'If actual cost exceeds what was absorbed, it is under-absorbed; if less, over-absorbed.',
          ),
        },
        {
          type: 'p',
          text: t(
            'کارگاه نگهداری میدان برای سال 28,800,000 بودجه و 24,000 ساعت کار برنامه‌ریزی دارد: نرخ از پیش تعیین‌شده 28,800,000 ÷ 24,000 = 1,200 در ساعت. در ماه 6، 2,100 ساعت کار ثبت شده، پس 2,520,000 جذب شده است؛ هزینه واقعی کارگاه 2,430,000 بوده، یعنی 90,000 بیش‌جذبی. چون شرکا و قرارداد نفتی هزینه **واقعی** را می‌پذیرند، مسار پترولیوم در پایان ماه نرخ را با هزینه واقعی بازمحاسبه می‌کند (2,430,000 ÷ 2,100) و تفاوت را به همان گیرنده‌ها برمی‌گرداند؛ اپراتور نباید از هزینه مشترک سود یا زیان کند.',
            'The field maintenance workshop has a yearly budget of 28,800,000 and 24,000 planned labour hours: a predetermined rate of 28,800,000 ÷ 24,000 = 1,200 per hour. In month 6, 2,100 hours were confirmed, so 2,520,000 was absorbed; the workshop’s actual cost was 2,430,000, an over-absorption of 90,000. Because the partners and the petroleum contract accept **actual** cost, Masar Petroleum recomputes the rate on actual cost at month-end (2,430,000 ÷ 2,100) and returns the difference to the same receivers; the operator must neither gain nor lose on joint costs.',
          ),
        },
        {
          type: 'callout',
          tone: 'example',
          title: t('سربار اپراتور طبق JOA', 'The operator’s overhead under the JOA'),
          text: t(
            'هزینه‌های اداری دفتر مرکزی (`CC-HQ-ADM`) مستقیم به حساب مشترک تسهیم نمی‌شوند؛ اپراتور آن‌ها را با **سربار JOA** بازیافت می‌کند که درصدی از مخارج مشترک است و نرخ واقعی آن را آیین‌نامه حسابداری JOA تعیین می‌کند. با نرخ فرضی 3 درصد، مانند درس «مشارکت‌ها و عملیات مشترک»، اگر مخارج مشترک ماه 16,000,000 باشد، سربار 480,000 است: البرز 144,000 و دنا 96,000 می‌پردازند.',
            'Head-office administrative costs (`CC-HQ-ADM`) are not allocated directly to the joint account; the operator recovers them through the **JOA overhead charge**, a percentage of joint expenditure whose actual rate is set by the JOA accounting procedure. With an illustrative 3 percent, as in the lesson on joint ventures and joint operations, monthly joint expenditure of 16,000,000 gives an overhead of 480,000: Alborz pays 144,000 and Dena 96,000.',
          ),
        },
      ],
    },
    {
      id: 'step-down',
      title: t('تسهیم مرحله‌ای: مثال کامل میدان آریا', 'Step-Down Allocation: A Full Arya Field Example'),
      blocks: [
        {
          type: 'p',
          text: t(
            'وقتی مراکز خدماتی به یکدیگر هم خدمت می‌دهند (کارکنان نگهداری در کمپ می‌خوابند، تیم ایمنی از کارگاه نگهداری خدمت می‌گیرد)، **روش مرحله‌ای (Step-down)** مراکز خدماتی را یکی‌یکی و به ترتیبی ثابت تسهیم می‌کند. مرکزی که تسهیم شد، دیگر چیزی پس نمی‌گیرد. قاعده ترتیب: از مرکزی شروع کنید که به بیشترین مراکز خدماتی دیگر خدمت می‌دهد. **روش مستقیم** خدمات بین مراکز خدماتی را نادیده می‌گیرد و **روش متقابل** با معادلات هم‌زمان همه را حساب می‌کند؛ مسار پترولیوم روش مرحله‌ای را برگزیده که دقیق‌تر از مستقیم و ساده‌تر از متقابل است.',
            'When service centres also serve each other (maintenance staff sleep in the camp, the HSE team uses the maintenance workshop), the **step-down method** allocates the service centres one at a time in a fixed order. A centre that has been allocated receives nothing back. The ordering rule: start with the centre that serves the most other service centres. The **direct method** ignores services between service centres, and the **reciprocal method** solves them all with simultaneous equations; Masar Petroleum chose step-down, more accurate than direct and simpler than reciprocal.',
          ),
        },
        {
          type: 'table',
          caption: t('داده‌های ماه 8 میدان آریا (ارقام فرضی)', 'Arya field data for month 8 (illustrative figures)'),
          head: [t('گیرنده یا فرستنده', 'Centre or receiver'), t('هزینه اولیه', 'Primary cost'), t('تعداد نفر', 'Headcount'), t('ساعت نگهداری', 'Maintenance hours'), t('نفر-ساعت در سایت', 'Site man-hours')],
          numericCols: [1, 2, 3, 4],
          rows: [
            [t('`CC-ARY-CAM` کمپ', '`CC-ARY-CAM` Camp'), 1800000, blank, blank, blank],
            [t('`CC-ARY-MNT` نگهداری', '`CC-ARY-MNT` Maintenance'), 2400000, 20, blank, blank],
            [t('`CC-ARY-HSE` ایمنی', '`CC-ARY-HSE` HSE'), 915000, 10, 100, blank],
            [t('`CC-ARY-PRD` تولید', '`CC-ARY-PRD` Production'), 6000000, 40, 900, 24000],
            [t('`CC-ARY-CMP` ایستگاه', '`CC-ARY-CMP` Compressor station'), 3500000, 15, 1000, 9600],
            [t('`AFE-2025-014` حفاری', '`AFE-2025-014` Drilling'), 12000000, 35, 0, 14400],
            [t('**جمع**', '**Total**'), 26615000, 120, 2000, 48000],
          ],
        },
        {
          type: 'steps',
          items: [
            {
              title: t('مرحله 1: کمپ با تعداد نفر', 'Step 1: camp by headcount'),
              text: t(
                'کمپ به همه خدمت می‌دهد، پس اول می‌آید. 1,800,000 ÷ 120 = 15,000 برای هر نفر: نگهداری 300,000، ایمنی 150,000، تولید 600,000، ایستگاه 225,000، حفاری 525,000.',
                'The camp serves everyone, so it goes first. 1,800,000 ÷ 120 = 15,000 per head: maintenance 300,000, HSE 150,000, production 600,000, station 225,000, drilling 525,000.',
              ),
            },
            {
              title: t('مرحله 2: نگهداری با ساعت کار', 'Step 2: maintenance by labour hours'),
              text: t(
                'هزینه نگهداری اکنون 2,400,000 + 300,000 = 2,700,000 است. 2,700,000 ÷ 2,000 = 1,350 در ساعت: ایمنی 135,000، تولید 1,215,000، ایستگاه 1,350,000؛ حفاری ساعتی ندارد، چون پیمانکار دکل تجهیزاتش را خودش نگهداری می‌کند.',
                'Maintenance now holds 2,400,000 + 300,000 = 2,700,000. 2,700,000 ÷ 2,000 = 1,350 per hour: HSE 135,000, production 1,215,000, station 1,350,000; drilling has no hours, as the rig contractor maintains its own equipment.',
              ),
            },
            {
              title: t('مرحله 3: ایمنی با نفر-ساعت', 'Step 3: HSE by man-hours'),
              text: t(
                'هزینه ایمنی اکنون 915,000 + 150,000 + 135,000 = 1,200,000 است. 1,200,000 ÷ 48,000 = 25 برای هر نفر-ساعت: تولید 600,000، ایستگاه 240,000، حفاری 360,000.',
                'HSE now holds 915,000 + 150,000 + 135,000 = 1,200,000. 1,200,000 ÷ 48,000 = 25 per man-hour: production 600,000, station 240,000, drilling 360,000.',
              ),
            },
          ],
        },
        {
          type: 'table',
          caption: t('جدول تسهیم مرحله‌ای ماه 8', 'Step-down allocation table, month 8'),
          head: [t('سطر', 'Line'), t('کمپ', 'Camp'), t('نگهداری', 'Maintenance'), t('ایمنی', 'HSE'), t('تولید', 'Production'), t('ایستگاه', 'Station'), t('حفاری AFE', 'Drilling AFE'), t('جمع', 'Total')],
          numericCols: [1, 2, 3, 4, 5, 6, 7],
          rows: [
            [t('هزینه اولیه', 'Primary costs'), 1800000, 2400000, 915000, 6000000, 3500000, 12000000, 26615000],
            [t('مرحله 1: کمپ (تعداد نفر)', 'Step 1: camp (headcount)'), -1800000, 300000, 150000, 600000, 225000, 525000, 0],
            [t('مرحله 2: نگهداری (ساعت)', 'Step 2: maintenance (hours)'), 0, -2700000, 135000, 1215000, 1350000, 0, 0],
            [t('مرحله 3: ایمنی (نفر-ساعت)', 'Step 3: HSE (man-hours)'), 0, 0, -1200000, 600000, 240000, 360000, 0],
            [t('**جمع پس از تسهیم**', '**Total after allocation**'), 0, 0, 0, 8415000, 5315000, 12885000, 26615000],
          ],
        },
        {
          type: 'p',
          text: t(
            'نتیجه را بخوانید: 5,115,000 هزینه خدماتی (1,800,000 + 2,400,000 + 915,000) اکنون روی سه گیرنده نشسته است. تولید 2,415,000 و ایستگاه 1,815,000 گرفته‌اند، یعنی 4,230,000 هزینه عملیاتی؛ و حفاری 885,000 گرفته که **سرمایه‌ای** و در طبقه **توسعه** است. اگر مسار پترولیوم همه هزینه خدماتی را به تولید می‌برد، سود این ماه 885,000 کمتر از واقع، دارایی در جریان تکمیل همان قدر کمتر و طبقه‌بندی صورت بازیافت هزینه غلط می‌شد.',
            'Read the result: 5,115,000 of service cost (1,800,000 + 2,400,000 + 915,000) now sits on three receivers. Production received 2,415,000 and the station 1,815,000, together 4,230,000 of operating cost; drilling received 885,000, which is **capital** and in the **Development** category. Had Masar Petroleum charged all service costs to production, this month’s profit would be understated by 885,000, assets under construction understated by the same amount, and the cost-recovery categories wrong.',
          ),
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('مرز سرمایه‌ای کردن', 'The capitalisation boundary'),
          text: t(
            'کمپ و ایمنی خدمه حفاری **مستقیماً قابل انتساب** به حفاری چاه‌اند و طبق IAS 16 سرمایه‌ای می‌شوند. اما هزینه‌های اداری و عمومی دفتر مرکزی (`CC-HQ-ADM`) چنین نیستند و هرگز به WBS سرمایه‌ای تسهیم نمی‌شوند. مسار پترولیوم یک قاعده اعتبارسنجی دارد: عنصر 9510 از فرستنده `CC-HQ-ADM` روی عنصر WBS سرمایه‌ای مجاز نیست.',
            'The drilling crew’s camp and HSE costs are **directly attributable** to drilling the well and are capitalised under IAS 16. Head-office general and administrative costs (`CC-HQ-ADM`) are not, and are never allocated to a capital WBS. Masar Petroleum has a validation rule: element 9510 from sender `CC-HQ-ADM` is not allowed on a capital WBS element.',
          ),
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('ترتیب، نتیجه را عوض می‌کند', 'The order changes the result'),
          text: t(
            'اگر ترتیب را عوض کنید (مثلاً اول نگهداری)، ارقام گیرنده‌ها کمی تغییر می‌کنند، چون سهم کمپ از کارکنان نگهداری دیگر از راه ساعت نگهداری پخش نمی‌شود. ترتیب را بر اساس منطق خدمات انتخاب کنید، در سیاست تسهیم ثبت کنید و هر ماه همان را به کار ببرید.',
            'If you change the order (maintenance first, for example), the receivers’ figures change a little, because the camp cost of maintenance staff is no longer spread through maintenance hours. Choose the order from the logic of the services, record it in the allocation policy and use the same order every month.',
          ),
        },
      ],
    },
    {
      id: 'wells-jv',
      title: t('تسهیم به چاه‌ها، مشارکت و بلوک‌های دیگر', 'Allocating to Wells, the Joint Venture and Other Blocks'),
      blocks: [
        {
          type: 'p',
          text: t(
            'پس از تسهیم مرحله‌ای، `CC-ARY-PRD` در ماه 8 مبلغ 8,415,000 دارد. برای اقتصاد هر چاه و گزارش هزینه هر بشکه، مسار پترولیوم این مبلغ را با **حجم تولید** به چاه‌های تولیدی تسهیم می‌کند. تولید ماه 330,000 بشکه است، پس نرخ 8,415,000 ÷ 330,000 = 25.5 برای هر بشکه است. چاه AR-09 برای تعمیر بسته بوده و AR-11 و AR-12 در مرحله حفاری و تکمیل‌اند.',
            'After the step-down, `CC-ARY-PRD` holds 8,415,000 in month 8. For well economics and cost-per-barrel reporting, Masar Petroleum allocates it to the producing wells by **production volume**. The month’s production is 330,000 barrels, so the rate is 8,415,000 ÷ 330,000 = 25.5 per barrel. Well AR-09 was shut in for a workover, and AR-11 and AR-12 are still being drilled and completed.',
          ),
        },
        {
          type: 'table',
          caption: t('تسهیم هزینه تولید ماه 8 به چاه‌ها (25.5 برای هر بشکه)', 'Allocating month 8 production cost to wells (25.5 per barrel)'),
          head: [t('چاه', 'Well'), t('تولید (بشکه)', 'Production (barrels)'), t('هزینه تسهیم‌شده', 'Allocated cost')],
          numericCols: [1, 2],
          rows: [
            [t('AR-01', 'AR-01'), 46000, 1173000],
            [t('AR-02', 'AR-02'), 42000, 1071000],
            [t('AR-03', 'AR-03'), 34000, 867000],
            [t('AR-04', 'AR-04'), 38000, 969000],
            [t('AR-05', 'AR-05'), 30000, 765000],
            [t('AR-06', 'AR-06'), 36000, 918000],
            [t('AR-07', 'AR-07'), 44000, 1122000],
            [t('AR-08', 'AR-08'), 28000, 714000],
            [t('AR-10', 'AR-10'), 32000, 816000],
            [t('AR-09 (بسته برای تعمیر)', 'AR-09 (shut in for workover)'), 0, 0],
            [t('AR-11 و AR-12 (حفاری و تکمیل)', 'AR-11 and AR-12 (drilling and completion)'), 0, 0],
            [t('**جمع**', '**Total**'), 330000, 8415000],
          ],
        },
        {
          type: 'p',
          text: t(
            'مبنای حجمی ساده است، اما یک ضعف دارد: AR-09 که بسته بوده هیچ هزینه‌ای نمی‌گیرد، در حالی که بازرسی، حراست و نگهداری سرچاهی آن ادامه داشته است. روش بهتر این است که هزینه تولید به دو بخش تقسیم شود: بخش **ثابت** (بازرسی، حراست، نگهداری سرچاهی) با تعداد چاه-روز و بخش **متغیر** (مواد شیمیایی، تصفیه آب، سوخت) با حجم تولید. هزینه تعمیر AR-09 هم به‌طور مستقیم روی دستور کار همان چاه نشسته است.',
            'The volume basis is simple but has a weakness: AR-09, which was shut in, gets no cost, although its inspection, security and wellhead maintenance continued. A better approach splits production cost in two: a **fixed** part (inspection, security, wellhead maintenance) allocated by well-days, and a **variable** part (chemicals, water treatment, fuel) allocated by production volume. AR-09’s workover cost itself sits directly on that well’s work order.',
          ),
        },
        { type: 'h', text: t('تسهیم به مشارکت و بلوک‌های دیگر', 'Allocating to the joint venture and other blocks') },
        {
          type: 'p',
          text: t(
            'همه مراکز `CC-ARY-*` روی مشارکت آریا (`JV-ARY`) هستند، پس هزینه تسهیم‌شده آن‌ها خودبه‌خود در حساب مشترک است. سؤال مهم‌تر هزینه‌های دفتر مرکزی است. واحد فنی (`CC-HQ-TEC`) هم به میدان آریا کار می‌دهد و هم به «بلوک کویر»، یک بلوک اکتشافی که 100 درصد مال مسار پترولیوم است. طبق JOA، زمان کارشناسانی که مستقیم روی عملیات مشترک کار کرده‌اند با **ساعت کارکرد ثبت‌شده** قابل صورت‌حساب است، اما هزینه اداری عمومی فقط از راه سربار JOA. در ماه 8 هزینه واحد فنی 3,000,000 و ساعت‌های ثبت‌شده 6,000 است: نرخ 500 در ساعت.',
            'All `CC-ARY-*` centres sit on the Arya joint venture (`JV-ARY`), so their allocated cost is automatically in the joint account. The bigger question is head-office cost. The technical department (`CC-HQ-TEC`) works both for the Arya field and for the "Kavir block", an exploration block that Masar Petroleum owns 100 percent. Under the JOA, the time of specialists who worked directly on joint operations is chargeable by **time-writing**, while general administration is recovered only through the JOA overhead. In month 8 the technical department cost 3,000,000 and 6,000 hours were written: a rate of 500 per hour.',
          ),
        },
        {
          type: 'table',
          caption: t('تسهیم واحد فنی دفتر مرکزی، ماه 8', 'Allocating head-office technical, month 8'),
          head: [t('گیرنده', 'Receiver'), t('ساعت', 'Hours'), t('سهم تسهیم', 'Allocated'), t('سهم مسار پترولیوم', 'Masar Petroleum share'), t('سهم البرز', 'Alborz share'), t('سهم دنا', 'Dena share')],
          numericCols: [1, 2, 3, 4, 5],
          rows: [
            [t('مشارکت آریا (`JV-ARY`): 50، 30، 20 درصد', 'Arya JV (`JV-ARY`): 50, 30, 20 percent'), 4500, 2250000, 1125000, 675000, 450000],
            [t('بلوک کویر (100 درصد مسار پترولیوم)', 'Kavir block (100 percent Masar Petroleum)'), 1500, 750000, 750000, 0, 0],
            [t('**جمع**', '**Total**'), 6000, 3000000, 1875000, 675000, 450000],
          ],
        },
        {
          type: 'journal',
          title: t('آنچه به دفتر کل می‌رسد: صورت‌حساب سهم شرکا', 'What reaches the ledger: billing the partners’ share'),
          entries: [
            {
              date: t('روز کاری 3 پس از پایان ماه 8', 'Working day 3 after month 8'),
              lines: [
                { account: ac.alborz, debit: 675000 },
                { account: ac.dena, debit: 450000 },
                { account: ac.jointAccount, credit: 1125000 },
              ],
              memo: t(
                'بخشی از اجرای صورت‌حساب شرکا: سهم شرکا از 2,250,000 هزینه فنی که با ساعت‌های ثبت‌شده به `JV-ARY` تسهیم شده است. گزارش ساعت‌های کارکرد پیوست صورت‌حساب است.',
                'Part of the joint interest billing run: the partners’ share of the 2,250,000 technical cost allocated to `JV-ARY` by time-writing. The timesheet report is attached to the billing.',
              ),
            },
          ],
        },
      ],
    },
    {
      id: 'erp-documentation',
      title: t('تسهیم در ERP و مستندسازی برای حسابرسی شرکا و بازیافت هزینه', 'Allocation in the ERP and Documentation for Partner Audits and Cost Recovery'),
      blocks: [
        {
          type: 'p',
          text: t(
            'در ERP هر تسهیم با یک **چرخه تسهیم (Allocation cycle)** تعریف می‌شود. هر بخش چرخه می‌گوید فرستنده کیست (مرکز هزینه و عناصر هزینه)، گیرنده‌ها کیستند، مبنا چیست (شاخص آماری، ساعت فعالیت یا درصد ثابت)، با کدام عنصر ثانویه (برای ارزیابی) و در چه دوره‌ای معتبر است. چرخه ابتدا **آزمایشی** و سپس **واقعی** اجرا می‌شود؛ هر اجرا سندی با ردپای کامل فرستنده و گیرنده می‌سازد و اگر داده‌ای اصلاح شود، اجرا برگشت می‌خورد و دوباره انجام می‌شود.',
            'In the ERP each allocation is defined by an **allocation cycle**. Each segment of the cycle states the sender (cost centre and cost elements), the receivers, the basis (statistical key figure, activity hours or fixed percentage), the secondary element (for assessment) and the validity period. The cycle is run first as a **test** and then for **real**; each run creates a document with a full sender-receiver trail, and if any data is corrected, the run is reversed and repeated.',
          ),
        },
        {
          type: 'table',
          caption: t('داده پایه تسهیم', 'Allocation master data'),
          head: [t('داده پایه', 'Master data'), t('نمونه در مسار پترولیوم', 'Example at Masar Petroleum')],
          rows: [
            [t('مرکز هزینه و سلسله‌مراتب', 'Cost centres and hierarchy'), t('`CC-ARY-CAM`، `CC-ARY-MNT`، `CC-ARY-HSE` زیر «میدان آریا»', '`CC-ARY-CAM`, `CC-ARY-MNT`, `CC-ARY-HSE` under "Arya field"')],
            [t('عنصر هزینه اولیه', 'Primary cost elements'), t('حساب‌های هزینه 5180 تا 5150', 'Expense accounts 5180 to 5150')],
            [t('عنصر هزینه ثانویه', 'Secondary cost elements'), t('9510 تسهیم سربار، 9520 تخصیص ساعت نگهداری، 9410 تسویه سفارش', '9510 overhead allocation, 9520 maintenance-hour allocation, 9410 order settlement')],
            [t('شاخص آماری', 'Statistical key figures'), t('تعداد نفر، نفر-شب، نفر-ساعت، بشکه تولید', 'Headcount, person-nights, man-hours, barrels produced')],
            [t('نوع فعالیت و نرخ', 'Activity types and rates'), t('ساعت کار نگهداری: نرخ برنامه 1,200، بازمحاسبه با هزینه واقعی', 'Maintenance labour hour: planned rate 1,200, revalued at actual cost')],
            [t('چرخه تسهیم', 'Allocation cycles'), t('چرخه «میدان آریا، مرحله‌ای»: کمپ، سپس نگهداری، سپس ایمنی', 'Cycle "Arya field, step-down": camp, then maintenance, then HSE')],
            [t('داده پایه مشارکت', 'Joint venture master'), t('`JV-ARY` با سهم‌های 50، 30 و 20 درصد', '`JV-ARY` with 50, 30 and 20 percent shares')],
          ],
        },
        {
          type: 'table',
          caption: t('چه کسی چه می‌کند', 'Who does what'),
          head: [t('نقش', 'Role'), t('مسئولیت', 'Responsibility')],
          rows: [
            [t('حسابدار بهای تمام‌شده', 'Cost accountant'), t('شاخص‌های آماری را کنترل و چرخه‌ها را آزمایشی و واقعی اجرا می‌کند', 'Checks the statistical key figures and runs the cycles in test and real mode')],
            [t('مدیران مراکز هزینه', 'Cost centre managers'), t('داده مبنا (نفر، ساعت) را تأیید و گزارش هزینه مرکز خود را بازبینی می‌کنند', 'Confirm the driver data (heads, hours) and review their centre’s cost report')],
            [t('کنترلر مالی', 'Financial controller'), t('چرخه، مبنا یا ترتیب جدید یا تغییرکرده را تأیید می‌کند', 'Approves new or changed cycles, bases or order')],
            [t('حسابدار مشارکت', 'JV accountant'), t('پیش از صورت‌حساب شرکا، انطباق تسهیم با JOA را بررسی می‌کند', 'Checks allocations against the JOA before partner billing')],
            [t('سامانه‌های منابع انسانی، کمپ و تولید', 'HR, camp and production systems'), t('داده مبناها را به ERP می‌فرستند', 'Feed the driver data to the ERP')],
          ],
        },
        {
          type: 'p',
          text: t(
            'درون `MP01` و بین مراکز هزینه، تسهیم فقط شیء هزینه را عوض می‌کند و حساب‌های دفتر کل ثابت می‌مانند. اما وقتی هزینه خدماتی به یک WBS سرمایه‌ای می‌رسد، تسویه پروژه آن را از سود و زیان به ترازنامه می‌برد. سند خودکاری که ERP برای 885,000 سهم حفاری از تسهیم مرحله‌ای ماه 8 ثبت می‌کند:',
            'Within `MP01` and between cost centres, an allocation only changes the cost object; the ledger accounts stay the same. But when service cost reaches a capital WBS, the project settlement moves it from profit or loss to the balance sheet. The automatic entry the ERP posts for drilling’s 885,000 share of the month 8 step-down:',
          ),
        },
        {
          type: 'journal',
          title: t('تسویه هزینه خدماتی سرمایه‌ای‌شده', 'Settling capitalised service cost'),
          entries: [
            {
              date: t('روز کاری 2 پس از پایان ماه 8', 'Working day 2 after month 8'),
              lines: [
                { account: ac.auc, debit: 885000 },
                { account: ac.capitalised, credit: 885000 },
              ],
              memo: t(
                'سند `ST`: کمپ 525,000 + ایمنی 360,000 که در تسهیم مرحله‌ای به `AFE-2025-014` رسید. حساب 5990 هزینه‌های اولیه مراکز خدماتی را در سود و زیان خنثی می‌کند.',
                '`ST` document: camp 525,000 + HSE 360,000 that reached `AFE-2025-014` in the step-down. Account 5990 offsets the service centres’ primary costs in profit or loss.',
              ),
            },
          ],
        },
        { type: 'h', text: t('چه چیزی را مستند کنیم', 'What to document') },
        {
          type: 'list',
          items: [
            t('**سیاست تسهیم** مکتوب و نسخه‌دار: کدام مراکز، کدام مبنا، چه ترتیبی، کدام نرخ‌ها، و چه کسی تأیید کرده است.', 'A written, versioned **allocation policy**: which centres, which bases, what order, which rates, and who approved it.'),
            t('**شواهد مبنا** برای هر ماه: گزارش نفرات کمپ، کارت‌های ساعت، تأییدهای ساعت دستور کار، داده‌های اندازه‌گیری و گزارش تولید.', '**Driver evidence** for every month: camp headcount reports, timesheets, work-order hour confirmations, metering and production reports.'),
            t('**گزارش اجرای چرخه** که با دفتر کل تطبیق دارد: جمع فرستاده‌شده برابر جمع دریافت‌شده.', 'The **cycle run report**, reconciled to the ledger: total sent equals total received.'),
            t('**یادداشت انطباق با JOA**: چه هزینه‌ای مستقیم قابل صورت‌حساب است و چه چیزی فقط از راه سربار.', 'A **JOA compliance memo**: which costs are directly chargeable and which only through overhead.'),
            t('**تأیید تغییرات** پیش از اجرا و اطلاع آن به کمیته عملیاتی شرکا؛ و ثبات روش از دوره‌ای به دوره دیگر.', '**Approval of changes** before use, communicated to the partners’ operating committee; and consistency from period to period.'),
            t('**نگهداری سوابق** در تمام دوره حسابرسی که JOA و قرارداد نفتی تعیین می‌کنند.', '**Record retention** for the whole audit period set by the JOA and the petroleum contract.'),
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('در عمل: حسابرسی شرکا و طرف دولتی', 'In practice: partner and government audits'),
          text: t(
            'حسابرس شرکا طبق حق حسابرسی JOA نرخ‌ها را دوباره حساب می‌کند، مبناها را تا سند مبدأ دنبال می‌کند، بررسی می‌کند هزینه‌ای هم مستقیم و هم از راه سربار صورت‌حساب نشده باشد و هزینه اداری دفتر مرکزی مستقیم نیامده باشد. حسابرسان شرکت ملی نفت تسهیم بدون مستند را رد می‌کنند و آن هزینه غیرقابل بازیافت می‌شود. قاعده ساده: **هزینه‌ای که نتوان توضیحش داد، هزینه‌ای است که نمی‌توان بازیافتش کرد.**',
            'Under the JOA audit rights, the partners’ auditor recomputes the rates, traces the drivers to source documents, checks that no cost was billed both directly and through overhead, and that head-office administration was not charged directly. The national oil company’s auditors reject undocumented allocations and that cost becomes non-recoverable. A simple rule: **a cost you cannot explain is a cost you cannot recover.**',
          ),
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('اشتباه‌های رایج', 'Common mistakes'),
          text: t('این خطاها تسهیم را از ابزار مدیریت به منبع اختلاف با شرکا تبدیل می‌کنند:', 'These errors turn allocation from a management tool into a source of disputes with partners:'),
        },
        {
          type: 'list',
          items: [
            t('مبنای دلبخواهی مانند تقسیم مساوی، بدون رابطه علت و معلول.', 'Arbitrary bases such as an equal split, with no cause-and-effect link.'),
            t('تغییر مبنا یا ترتیب در میانه سال بدون تأیید و اطلاع شرکا.', 'Changing a basis or the order mid-year without approval or informing the partners.'),
            t('تسهیم هزینه اداری دفتر مرکزی به WBS سرمایه‌ای، یا صورت‌حساب آن هم مستقیم و هم از راه سربار JOA.', 'Allocating head-office administration to a capital WBS, or billing it both directly and through the JOA overhead.'),
            t('شاخص‌های آماری کهنه، مثلاً تعداد نفرات سال قبل.', 'Stale statistical key figures, such as last year’s headcount.'),
            t('اجرای چرخه پیش از ثبت همه هزینه‌های اولیه، یا اصلاح نتیجه با سند دستی به‌جای برگشت و اجرای دوباره.', 'Running a cycle before all primary costs are posted, or patching the result with a manual entry instead of reversing and re-running.'),
            t('فرستادن اقلام N در یک فرستنده همراه اقلام R، تا در گیرنده همه R به نظر برسند.', 'Sending N items through a sender together with R items, so that everything looks R at the receiver.'),
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
            'تمرین‌ها از انتخاب مبنا شروع می‌شوند و به تسهیم مرحله‌ای و تعدیل نرخ سربار می‌رسند. ارقام فرضی‌اند. پیش از دیدن پاسخ، برای هر عدد بپرسید: «این هزینه در نهایت روی کدام چاه، AFE یا شریک می‌نشیند؟»',
            'The exercises start with choosing a basis and build up to a step-down allocation and an overhead-rate true-up. All figures are illustrative. Before opening a solution, ask of every number: "which well, AFE or partner does this cost finally land on?"',
          ),
        },
        {
          type: 'exercise',
          title: t('انتخاب مبنای تسهیم', 'Choosing allocation bases'),
          difficulty: 'easy',
          problem: t(
            'برای هر هزینه مشترک میدان آریا یک مبنای تسهیم پیشنهاد کنید، دلیل آن را بگویید و منبع داده را نام ببرید.',
            'Suggest an allocation basis for each shared cost of the Arya field, give the reason and name the data source.',
          ),
          given: {
            head: [t('شماره', 'No.'), t('هزینه مشترک', 'Shared cost')],
            rows: [
              [t('1', '1'), t('پذیرایی و خوابگاه کمپ', 'Camp catering and accommodation')],
              [t('2', '2'), t('کارگاه نگهداری میدان', 'Field maintenance workshop')],
              [t('3', '3'), t('بهره‌برداری ایستگاه تقویت فشار', 'Compressor station operation')],
              [t('4', '4'), t('تیم زمین‌شناسی دفتر مرکزی', 'Head-office geoscience team')],
              [t('5', '5'), t('مخابرات و فناوری اطلاعات میدان (رادیو، ماهواره)', 'Field telecoms and IT (radio, satellite links)')],
            ],
          },
          hint: t('بپرسید: «چه چیزی باعث می‌شود این هزینه بیشتر شود؟»', 'Ask: "what makes this cost go up?"'),
          solution: [
            {
              type: 'table',
              head: [t('شماره', 'No.'), t('مبنا', 'Basis'), t('دلیل', 'Reason'), t('منبع داده', 'Data source')],
              rows: [
                [t('1', '1'), t('نفر-شب یا تعداد نفر', 'Person-nights or headcount'), t('غذا و تخت را افراد مصرف می‌کنند', 'People consume meals and beds'), t('سامانه کمپ', 'Camp system')],
                [t('2', '2'), t('ساعت کار نگهداری', 'Maintenance labour hours'), t('زمان تکنسین روی هر گیرنده', 'Technician time per receiver'), t('تأیید ساعت دستورهای کار', 'Work-order time confirmations')],
                [t('3', '3'), t('حجم گاز فشرده‌شده یا ساعت کار کمپرسور', 'Gas volume compressed or compressor run hours'), t('مصرف خدمت فشرده‌سازی', 'Use of compression'), t('اندازه‌گیری جریان', 'Flow metering')],
                [t('4', '4'), t('ساعت کارکرد ثبت‌شده', 'Time-writing hours'), t('زمان کارشناسان برای هر میدان یا بلوک', 'Specialist time per field or block'), t('سامانه کارکرد', 'Timesheet system')],
                [t('5', '5'), t('تعداد کاربران یا دستگاه‌ها', 'Number of users or devices'), t('هزینه با تعداد اتصال‌ها رشد می‌کند', 'Cost grows with the number of connections'), t('فهرست دارایی‌های فناوری اطلاعات', 'IT asset register')],
              ],
            },
          ],
          answer: t(
            '1 نفر-شب؛ 2 ساعت نگهداری؛ 3 حجم گاز یا ساعت کار؛ 4 ساعت کارکرد؛ 5 تعداد کاربران یا دستگاه‌ها.',
            '1 person-nights; 2 maintenance hours; 3 gas volume or run hours; 4 time-writing hours; 5 number of users or devices.',
          ),
        },
        {
          type: 'exercise',
          title: t('تسهیم کمپ با نفر-شب: توزیع یا ارزیابی؟', 'Allocating the camp by person-nights: distribution or assessment?'),
          difficulty: 'medium',
          problem: t(
            'هزینه کمپ در ماه 9 برابر 2,160,000 است: پذیرایی (5140) 1,440,000، سوخت و آب و برق (5180) 480,000 و تعمیرات کمپ (5120) 240,000. (الف) نرخ هر نفر-شب و سهم هر گیرنده را حساب کنید. (ب) AFE حفاری با روش توزیع چه سطرهایی می‌گیرد و با ارزیابی چه سطری؟ (ج) قاعده اعتبارسنجی مسار پترولیوم حساب‌های 5180 تا 5130 را روی WBS سرمایه‌ای نمی‌پذیرد. برای AFE کدام روش باید به کار رود و سهم آن در چه طبقه‌ای است؟',
            'The camp cost 2,160,000 in month 9: catering (5140) 1,440,000, fuel and utilities (5180) 480,000 and camp repairs (5120) 240,000. (a) Compute the rate per person-night and each receiver’s share. (b) Which lines does the drilling AFE receive under distribution, and which under assessment? (c) Masar Petroleum’s validation rule rejects accounts 5180 to 5130 on a capital WBS. Which method must be used for the AFE, and in which category does its share fall?',
          ),
          given: {
            head: [t('گیرنده', 'Receiver'), t('نفر-شب', 'Person-nights')],
            numericCols: [1],
            rows: [
              [cc('CC-ARY-PRD'), 1200],
              [cc('CC-ARY-CMP'), 450],
              [cc('CC-ARY-MNT'), 600],
              [cc('CC-ARY-HSE'), 300],
              [t('`AFE-2025-014` (خدمه حفاری)', '`AFE-2025-014` (drilling crew)'), 1050],
              [t('**جمع**', '**Total**'), 3600],
            ],
          },
          hint: t('نرخ = 2,160,000 ÷ 3,600. در توزیع هر عنصر هزینه جداگانه با همان نسبت تقسیم می‌شود.', 'Rate = 2,160,000 ÷ 3,600. In distribution each cost element is split separately in the same proportion.'),
          solution: [
            {
              type: 'table',
              head: [t('گیرنده', 'Receiver'), t('نفر-شب', 'Person-nights'), t('سهم (× 600)', 'Share (× 600)')],
              numericCols: [1, 2],
              rows: [
                [cc('CC-ARY-PRD'), 1200, 720000],
                [cc('CC-ARY-CMP'), 450, 270000],
                [cc('CC-ARY-MNT'), 600, 360000],
                [cc('CC-ARY-HSE'), 300, 180000],
                [cc('AFE-2025-014'), 1050, 630000],
                [t('**جمع**', '**Total**'), 3600, 2160000],
              ],
            },
            {
              type: 'table',
              head: [t('عنصر هزینه', 'Cost element'), t('AFE با توزیع', 'AFE by distribution'), t('AFE با ارزیابی', 'AFE by assessment')],
              numericCols: [1, 2],
              rows: [
                [t('5140 پذیرایی: 1,440,000 × 1,050 ÷ 3,600', '5140 Catering: 1,440,000 × 1,050 ÷ 3,600'), 420000, blank],
                [t('5180 سوخت و آب و برق: 480,000 × 1,050 ÷ 3,600', '5180 Fuel and utilities: 480,000 × 1,050 ÷ 3,600'), 140000, blank],
                [t('5120 تعمیرات: 240,000 × 1,050 ÷ 3,600', '5120 Repairs: 240,000 × 1,050 ÷ 3,600'), 70000, blank],
                [t('9510 تسهیم سربار', '9510 Overhead allocation'), blank, 630000],
                [t('**جمع**', '**Total**'), 630000, 630000],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: t(
                'توزیع حساب‌های 5180 و 5120 را روی WBS سرمایه‌ای می‌نشاند و قاعده اعتبارسنجی آن را رد می‌کند؛ پس برای AFE از **ارزیابی** با عنصر 9510 استفاده می‌شود. سهم 630,000 هزینه مستقیماً قابل انتساب حفاری است: طبقه **توسعه**، نشانگر **R**، و با تسویه پروژه به دارایی در جریان تکمیل می‌رود. سهم نگهداری و ایمنی در مراحل بعدی تسهیم مرحله‌ای جلوتر می‌رود.',
                'Distribution would put accounts 5180 and 5120 on a capital WBS, which the validation rule rejects; so the AFE is charged by **assessment** with element 9510. Its 630,000 share is a directly attributable drilling cost: category **Development**, flag **R**, and it moves to assets under construction through the project settlement. The maintenance and HSE shares move on in the later steps of the step-down.',
              ),
            },
          ],
          answer: t(
            'نرخ 600 برای هر نفر-شب؛ تولید 720,000، ایستگاه 270,000، نگهداری 360,000، ایمنی 180,000 و AFE 630,000. برای AFE ارزیابی (9510)، طبقه توسعه و R.',
            'Rate 600 per person-night; production 720,000, station 270,000, maintenance 360,000, HSE 180,000 and the AFE 630,000. For the AFE: assessment (9510), category Development, flag R.',
          ),
        },
        {
          type: 'exercise',
          title: t('مرحله‌ای در برابر مستقیم', 'Step-down versus direct'),
          difficulty: 'hard',
          problem: t(
            'یک میدان کوچک‌تر دو مرکز خدماتی (کمپ و نگهداری) و دو مرکز تولیدی (تولید و ایستگاه) دارد. (الف) با روش مرحله‌ای (اول کمپ) تسهیم کنید. (ب) با روش مستقیم (بدون خدمات بین مراکز خدماتی) تسهیم کنید. (ج) نتیجه دو روش را مقایسه و تفاوت را توضیح دهید.',
            'A smaller field has two service centres (camp and maintenance) and two production centres (production and station). (a) Allocate with the step-down method (camp first). (b) Allocate with the direct method (ignoring services between service centres). (c) Compare the two results and explain the difference.',
          ),
          given: {
            head: [t('مرکز', 'Centre'), t('هزینه اولیه', 'Primary cost'), t('تعداد نفر', 'Headcount'), t('ساعت نگهداری', 'Maintenance hours')],
            numericCols: [1, 2, 3],
            rows: [
              [t('کمپ', 'Camp'), 1000000, blank, blank],
              [t('نگهداری', 'Maintenance'), 1300000, 10, blank],
              [t('تولید', 'Production'), 4000000, 25, 400],
              [t('ایستگاه', 'Station'), 2500000, 15, 600],
            ],
          },
          hint: t('در روش مستقیم، کمپ فقط بین 40 نفر تولید و ایستگاه تقسیم می‌شود و نگهداری فقط هزینه اولیه خودش را تسهیم می‌کند.', 'In the direct method the camp is split only among the 40 people of production and the station, and maintenance allocates only its own primary cost.'),
          solution: [
            {
              type: 'table',
              caption: t('روش مرحله‌ای: کمپ 20,000 برای هر نفر؛ نگهداری 1,500 در ساعت', 'Step-down: camp 20,000 per head; maintenance 1,500 per hour'),
              head: [t('سطر', 'Line'), t('کمپ', 'Camp'), t('نگهداری', 'Maintenance'), t('تولید', 'Production'), t('ایستگاه', 'Station'), t('جمع', 'Total')],
              numericCols: [1, 2, 3, 4, 5],
              rows: [
                [t('هزینه اولیه', 'Primary costs'), 1000000, 1300000, 4000000, 2500000, 8800000],
                [t('کمپ: 1,000,000 ÷ 50 نفر', 'Camp: 1,000,000 ÷ 50 people'), -1000000, 200000, 500000, 300000, 0],
                [t('نگهداری: 1,500,000 ÷ 1,000 ساعت', 'Maintenance: 1,500,000 ÷ 1,000 hours'), 0, -1500000, 600000, 900000, 0],
                [t('**جمع پس از تسهیم**', '**Total after allocation**'), 0, 0, 5100000, 3700000, 8800000],
              ],
            },
            {
              type: 'table',
              caption: t('روش مستقیم: کمپ 25,000 برای هر نفر؛ نگهداری 1,300 در ساعت', 'Direct: camp 25,000 per head; maintenance 1,300 per hour'),
              head: [t('سطر', 'Line'), t('کمپ', 'Camp'), t('نگهداری', 'Maintenance'), t('تولید', 'Production'), t('ایستگاه', 'Station'), t('جمع', 'Total')],
              numericCols: [1, 2, 3, 4, 5],
              rows: [
                [t('هزینه اولیه', 'Primary costs'), 1000000, 1300000, 4000000, 2500000, 8800000],
                [t('کمپ: 1,000,000 ÷ 40 نفر', 'Camp: 1,000,000 ÷ 40 people'), -1000000, 0, 625000, 375000, 0],
                [t('نگهداری: 1,300,000 ÷ 1,000 ساعت', 'Maintenance: 1,300,000 ÷ 1,000 hours'), 0, -1300000, 520000, 780000, 0],
                [t('**جمع پس از تسهیم**', '**Total after allocation**'), 0, 0, 5145000, 3655000, 8800000],
              ],
            },
            {
              type: 'steps',
              items: [
                {
                  title: t('مقایسه', 'Comparison'),
                  text: t('با روش مرحله‌ای تولید 45,000 کمتر (5,100,000 در برابر 5,145,000) و ایستگاه 45,000 بیشتر (3,700,000 در برابر 3,655,000) می‌گیرد؛ جمع در هر دو 8,800,000 است.', 'Under step-down, production gets 45,000 less (5,100,000 against 5,145,000) and the station 45,000 more (3,700,000 against 3,655,000); the total is 8,800,000 either way.'),
                },
                {
                  title: t('چرا؟', 'Why?'),
                  text: t('در روش مرحله‌ای هزینه کمپ 10 نفر نگهداری (200,000) از راه ساعت نگهداری پخش می‌شود و ایستگاه 60 درصد این ساعت‌ها را مصرف می‌کند. روش مستقیم این خدمت را نادیده می‌گیرد و هزینه کمپ را فقط با تعداد نفر پخش می‌کند.', 'In step-down, the camp cost of the 10 maintenance staff (200,000) is spread through maintenance hours, and the station uses 60 percent of those hours. The direct method ignores this service and spreads the camp cost by headcount alone.'),
                },
              ],
            },
          ],
          answer: t(
            'مرحله‌ای: تولید 5,100,000 و ایستگاه 3,700,000؛ مستقیم: تولید 5,145,000 و ایستگاه 3,655,000؛ تفاوت 45,000 از تولید به ایستگاه.',
            'Step-down: production 5,100,000 and station 3,700,000; direct: production 5,145,000 and station 3,655,000; a 45,000 shift from production to the station.',
          ),
        },
        {
          type: 'exercise',
          title: t('کم‌جذبی نرخ نگهداری و سهم شرکا', 'Under-absorbed maintenance rate and the partners’ share'),
          difficulty: 'medium',
          problem: t(
            'نرخ از پیش تعیین‌شده ساعت نگهداری 1,200 است. در ماه 10 ساعت‌های ثبت‌شده: ایستگاه 1,100، تولید 800 و ایمنی 100؛ هزینه واقعی کارگاه 2,500,000 است. همه گیرنده‌ها روی `JV-ARY` هستند. (الف) سربار جذب‌شده و کم یا بیش جذبی را حساب کنید. (ب) با نرخ واقعی سهم هر گیرنده چقدر می‌شود؟ (ج) سهم البرز و دنا از تعدیل چقدر است و چه سندی ثبت می‌شود؟',
            'The predetermined maintenance-hour rate is 1,200. In month 10 the confirmed hours were: station 1,100, production 800 and HSE 100; the workshop’s actual cost was 2,500,000. All receivers are on `JV-ARY`. (a) Compute the absorbed overhead and the under- or over-absorption. (b) What does each receiver get at the actual rate? (c) What are Alborz’s and Dena’s shares of the true-up, and what entry is posted?',
          ),
          hint: t('نرخ واقعی = هزینه واقعی ÷ ساعت واقعی. اپراتور نباید از هزینه مشترک سود یا زیان کند.', 'Actual rate = actual cost ÷ actual hours. The operator must neither gain nor lose on joint costs.'),
          solution: [
            {
              type: 'table',
              head: [t('گیرنده', 'Receiver'), t('ساعت', 'Hours'), t('با نرخ 1,200', 'At 1,200'), t('با نرخ واقعی 1,250', 'At actual 1,250'), t('تعدیل', 'True-up')],
              numericCols: [1, 2, 3, 4],
              rows: [
                [cc('CC-ARY-CMP'), 1100, 1320000, 1375000, 55000],
                [cc('CC-ARY-PRD'), 800, 960000, 1000000, 40000],
                [cc('CC-ARY-HSE'), 100, 120000, 125000, 5000],
                [t('**جمع**', '**Total**'), 2000, 2400000, 2500000, 100000],
              ],
            },
            {
              type: 'steps',
              items: [
                { title: t('جذب و کم‌جذبی', 'Absorption and under-absorption'), text: t('2,000 × 1,200 = 2,400,000 جذب شده؛ 2,500,000 منهای 2,400,000 = 100,000 کم‌جذبی.', '2,000 × 1,200 = 2,400,000 absorbed; 2,500,000 minus 2,400,000 = 100,000 under-absorbed.') },
                { title: t('نرخ واقعی', 'Actual rate'), text: t('2,500,000 ÷ 2,000 = 1,250 در ساعت؛ 100,000 تعدیل به همان گیرنده‌ها می‌رود.', '2,500,000 ÷ 2,000 = 1,250 per hour; the 100,000 true-up goes to the same receivers.') },
                { title: t('سهم شرکا', 'Partners’ shares'), text: t('البرز 30٪ × 100,000 = 30,000؛ دنا 20٪ × 100,000 = 20,000؛ سهم مسار پترولیوم 50,000.', 'Alborz 30% × 100,000 = 30,000; Dena 20% × 100,000 = 20,000; Masar Petroleum’s share 50,000.') },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: t('صورت‌حساب شرکا، ماه 10', 'Partner billing, month 10'),
                  lines: [
                    { account: ac.alborz, debit: 30000 },
                    { account: ac.dena, debit: 20000 },
                    { account: ac.jointAccount, credit: 50000 },
                  ],
                  memo: t('سهم شرکا از تعدیل نرخ نگهداری که در اجرای صورت‌حساب ماه 10 می‌آید.', 'The partners’ share of the maintenance-rate true-up, included in the month 10 billing run.'),
                },
              ],
            },
          ],
          answer: t(
            'جذب 2,400,000 و کم‌جذبی 100,000؛ با نرخ 1,250 ایستگاه 1,375,000، تولید 1,000,000 و ایمنی 125,000؛ البرز 30,000 و دنا 20,000 از تعدیل.',
            'Absorbed 2,400,000 and under-absorbed 100,000; at 1,250 the station gets 1,375,000, production 1,000,000 and HSE 125,000; Alborz 30,000 and Dena 20,000 of the true-up.',
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
            t('تسهیم جمع هزینه را تغییر نمی‌دهد، اما تعیین می‌کند هزینه روی کدام چاه، AFE، شریک و طبقه بازیافت بنشیند.', 'Allocation does not change total cost, but decides which well, AFE, partner and recovery category it lands on.'),
            t('مراکز هزینه تولیدی، خدماتی یا اداری‌اند؛ هزینه مراکز خدماتی به تولید و پروژه‌ها می‌رود و هزینه اداری دفتر مرکزی از راه سربار JOA بازیافت می‌شود.', 'Cost centres are production, service or administrative; service costs flow to production and projects, and head-office administration is recovered through the JOA overhead.'),
            t('مبنا باید علت هزینه را نشان دهد و از داده قابل اتکا (شاخص آماری) بیاید.', 'The basis must reflect what causes the cost and come from reliable data (statistical key figures).'),
            t('توزیع ماهیت هزینه را نگه می‌دارد؛ ارزیابی همه را زیر یک عنصر ثانویه جمع می‌کند و برای WBS سرمایه‌ای لازم است.', 'Distribution keeps the nature of cost; assessment groups it under one secondary element and is needed for a capital WBS.'),
            t('روش مرحله‌ای مراکز خدماتی را به ترتیب ثابت تسهیم می‌کند؛ در مثال آریا 885,000 به AFE حفاری رفت و سرمایه‌ای شد.', 'Step-down allocates service centres in a fixed order; in the Arya example 885,000 went to the drilling AFE and was capitalised.'),
            t('نرخ سربار از پیش تعیین‌شده در ماه به کار می‌رود و در پایان ماه با هزینه واقعی تعدیل می‌شود، چون شرکا هزینه واقعی می‌پردازند.', 'The predetermined overhead rate is used during the month and trued up to actual cost at month-end, because partners pay actual cost.'),
            t('هر تسهیم باید سیاست مکتوب، شواهد مبنا و تأیید داشته باشد؛ تسهیم بدون مستند در حسابرسی شرکا و طرف دولتی رد می‌شود.', 'Every allocation needs a written policy, driver evidence and approval; undocumented allocations are rejected in partner and government audits.'),
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            { term: t('مرکز هزینه', 'Cost centre'), def: t('واحدی از سازمان با مدیر مسئول که هزینه‌ها در آن جمع می‌شوند.', 'A unit of the organisation with a responsible manager, where costs are collected.') },
            { term: t('مرکز خدماتی', 'Service cost centre'), def: t('مرکزی که به مراکز دیگر خدمت می‌دهد و هزینه‌اش به آن‌ها تسهیم می‌شود.', 'A centre that serves other centres and whose cost is allocated to them.') },
            { term: t('شیء هزینه', 'Cost object'), def: t('هر چیزی که هزینه برای آن جمع می‌شود: مرکز هزینه، چاه، AFE، دستور کار، مشارکت.', 'Anything cost is collected for: cost centre, well, AFE, work order, joint venture.') },
            { term: t('هزینه مستقیم و غیرمستقیم', 'Direct and indirect cost'), def: t('هزینه‌ای که بی‌واسطه به یک شیء نسبت داده می‌شود، در برابر هزینه‌ای که به چند شیء خدمت می‌کند.', 'A cost traced straight to one object, versus a cost that serves several objects.') },
            { term: t('مبنای تسهیم', 'Allocation basis (driver)'), def: t('معیاری که نشان می‌دهد هزینه چگونه ایجاد یا مصرف می‌شود، مانند نفر یا ساعت.', 'A measure of how a cost is caused or consumed, such as heads or hours.') },
            { term: t('شاخص آماری', 'Statistical key figure'), def: t('مقدار غیرمالی هر مرکز هزینه در هر دوره که چرخه‌های تسهیم از آن می‌خوانند.', 'A non-financial quantity per cost centre and period that allocation cycles read.') },
            { term: t('توزیع', 'Distribution'), def: t('تسهیمی که هر هزینه را با عنصر هزینه اولیه‌اش جابه‌جا می‌کند.', 'An allocation that moves each cost under its primary cost element.') },
            { term: t('ارزیابی', 'Assessment'), def: t('تسهیمی که هزینه‌ها را زیر یک عنصر هزینه ثانویه جابه‌جا می‌کند.', 'An allocation that moves costs under one secondary cost element.') },
            { term: t('تخصیص فعالیت', 'Activity allocation'), def: t('بدهکار کردن گیرنده به اندازه مصرف واقعی یک فعالیت ضرب در نرخ آن.', 'Charging a receiver for its actual use of an activity times the activity rate.') },
            { term: t('تسهیم مرحله‌ای', 'Step-down allocation'), def: t('تسهیم مراکز خدماتی یکی‌یکی و به ترتیب ثابت، بدون برگشت به مرکز تسهیم‌شده.', 'Allocating service centres one by one in a fixed order, with nothing returning to a centre already allocated.') },
            { term: t('نرخ سربار از پیش تعیین‌شده', 'Predetermined overhead rate'), def: t('سربار بودجه‌شده تقسیم بر مبنای بودجه‌شده.', 'Budgeted overhead divided by the budgeted basis.') },
            { term: t('کم‌جذبی و بیش‌جذبی', 'Under- and over-absorption'), def: t('تفاوت هزینه واقعی با سربار جذب‌شده با نرخ از پیش تعیین‌شده.', 'The difference between actual cost and overhead absorbed at the predetermined rate.') },
            { term: t('چرخه تسهیم', 'Allocation cycle'), def: t('تعریف ERP از فرستنده، گیرنده، مبنا و عنصر هزینه یک تسهیم، که آزمایشی و واقعی اجرا می‌شود.', 'The ERP definition of an allocation’s sender, receivers, basis and cost element, run in test and real mode.') },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: t('کدام یک **مرکز هزینه خدماتی** است؟', 'Which of these is a **service cost centre**?'),
      options: [
        t('`CC-ARY-PRD` عملیات تولید میدان', '`CC-ARY-PRD` field production'),
        t('`CC-ARY-CMP` ایستگاه تقویت فشار', '`CC-ARY-CMP` compressor station'),
        t('`AFE-2025-014` حفاری چاه توسعه‌ای', '`AFE-2025-014` development well drilling'),
        t('`CC-ARY-CAM` کمپ و پذیرایی', '`CC-ARY-CAM` camp and catering'),
      ],
      answer: 3,
      explain: t(
        'کمپ به دیگر واحدها خدمت می‌دهد و هزینه‌اش به آن‌ها تسهیم می‌شود. تولید و ایستگاه مراکز تولیدی‌اند که هزینه‌شان به چاه‌ها می‌رسد، و `AFE-2025-014` اصلاً مرکز هزینه نیست، بلکه عنصر WBS یک پروژه سرمایه‌ای است.',
        'The camp serves other units and its cost is allocated to them. Production and the station are production centres whose cost reaches the wells, and `AFE-2025-014` is not a cost centre at all but the WBS element of a capital project.',
      ),
    },
    {
      q: t(
        'هزینه کمپ 2,400,000 است و گیرنده‌ها روی هم 160 نفر دارند. سهم `CC-ARY-PRD` با 50 نفر چقدر است؟',
        'The camp cost is 2,400,000 and the receivers have 160 people in total. What is `CC-ARY-PRD`’s share with 50 people?',
      ),
      options: [t('480,000', '480,000'), t('750,000', '750,000'), t('15,000', '15,000'), t('1,200,000', '1,200,000')],
      answer: 1,
      explain: t(
        'نرخ 2,400,000 ÷ 160 = 15,000 برای هر نفر و سهم تولید 50 × 15,000 = 750,000. عدد 15,000 فقط نرخ است، 480,000 تقسیم مساوی بین پنج گیرنده است و 1,200,000 نیمی از کل.',
        'The rate is 2,400,000 ÷ 160 = 15,000 per head, and production’s share is 50 × 15,000 = 750,000. 15,000 is only the rate, 480,000 is an equal split among five receivers and 1,200,000 is half the total.',
      ),
    },
    {
      q: t('در کدام روش، گیرنده هزینه را با همان عنصرهای هزینه اولیه (مثلاً پذیرایی و سوخت) می‌بیند؟', 'Under which method does the receiver see the cost under its original primary elements (catering and fuel, for example)?'),
      options: [t('توزیع', 'Distribution'), t('ارزیابی', 'Assessment'), t('نرخ سربار JOA', 'The JOA overhead rate'), t('تسویه پروژه', 'Project settlement')],
      answer: 0,
      explain: t(
        'توزیع هر هزینه را با عنصر اولیه‌اش جابه‌جا می‌کند. ارزیابی همه را زیر یک عنصر ثانویه (9510) جمع می‌کند و ماهیت هزینه در گیرنده گم می‌شود؛ سربار JOA و تسویه پروژه روش تسهیم بین مراکز نیستند.',
        'Distribution moves each cost under its primary element. Assessment groups everything under one secondary element (9510), so the nature of cost is lost at the receiver; the JOA overhead and project settlement are not methods of allocating between centres.',
      ),
    },
    {
      q: t(
        'سربار بودجه‌شده کارگاه 18,000,000 و ساعت بودجه‌شده 15,000 است. در ماهی 1,400 ساعت ثبت شده و هزینه واقعی 1,600,000 است. نتیجه چیست؟',
        'The workshop’s budgeted overhead is 18,000,000 for 15,000 budgeted hours. In a month 1,400 hours are confirmed and actual cost is 1,600,000. What is the result?',
      ),
      options: [t('80,000 کم‌جذبی', 'Under-absorbed by 80,000'), t('1,600,000 جذب شده', '1,600,000 absorbed'), t('80,000 بیش‌جذبی', 'Over-absorbed by 80,000'), t('1,680,000 بیش‌جذبی', 'Over-absorbed by 1,680,000')],
      answer: 2,
      explain: t(
        'نرخ 18,000,000 ÷ 15,000 = 1,200؛ جذب‌شده 1,400 × 1,200 = 1,680,000؛ واقعی 1,600,000 کمتر است، پس 80,000 بیش‌جذبی. «کم‌جذبی» جهت را برعکس گرفته و 1,680,000 کل مبلغ جذب‌شده است، نه تفاوت.',
        'Rate 18,000,000 ÷ 15,000 = 1,200; absorbed 1,400 × 1,200 = 1,680,000; actual 1,600,000 is lower, so over-absorbed by 80,000. "Under-absorbed" reverses the direction, and 1,680,000 is the whole absorbed amount, not the difference.',
      ),
    },
    {
      q: t('در تسهیم مرحله‌ای، از کدام مرکز خدماتی باید شروع کرد؟', 'In a step-down allocation, which service centre should go first?'),
      options: [
        t('مرکزی که بیشترین هزینه را دارد', 'The one with the largest cost'),
        t('مرکزی که به بیشترین مراکز خدماتی دیگر خدمت می‌دهد', 'The one that serves the most other service centres'),
        t('مرکزی که مدیرش زودتر گزارش داده', 'The one whose manager reported first'),
        t('ترتیب اهمیتی ندارد', 'The order does not matter'),
      ],
      answer: 1,
      explain: t(
        'مرکزی که به بیشتر مراکز خدماتی خدمت می‌دهد (در آریا کمپ) اول می‌آید تا سهم آن مراکز پیش از تسهیم خودشان به آن‌ها برسد. بزرگی هزینه معیار نیست و ترتیب اهمیت دارد، چون مرکز تسهیم‌شده دیگر چیزی پس نمی‌گیرد.',
        'The centre serving the most other service centres (the camp at Arya) goes first, so those centres receive their share before they are allocated themselves. Size of cost is not the test, and order does matter, because an allocated centre receives nothing back.',
      ),
    },
    {
      q: t(
        'هزینه واحد فنی دفتر مرکزی 2,000,000 است و 80 درصد ساعت‌ها برای مشارکت آریا ثبت شده. سهم نفت دنا (20 درصد مشارکت) چقدر است؟',
        'Head-office technical cost is 2,000,000 and 80 percent of the hours were written to the Arya JV. What is Dena Petroleum’s share (20 percent of the JV)?',
      ),
      options: [t('400,000', '400,000'), t('1,600,000', '1,600,000'), t('480,000', '480,000'), t('320,000', '320,000')],
      answer: 3,
      explain: t(
        'سهم مشارکت 80٪ × 2,000,000 = 1,600,000 و سهم دنا 20٪ × 1,600,000 = 320,000. عدد 400,000 بیست درصد کل هزینه را حساب کرده و بخش غیرمشارکتی را هم به دنا داده؛ 480,000 سهم البرز (30 درصد) است.',
        'The JV’s share is 80% × 2,000,000 = 1,600,000 and Dena’s is 20% × 1,600,000 = 320,000. 400,000 takes 20 percent of the whole cost, charging Dena for non-JV work too; 480,000 is Alborz’s 30 percent share.',
      ),
    },
    {
      q: t('طبق IAS 16 کدام هزینه **نباید** به WBS سرمایه‌ای حفاری تسهیم شود؟', 'Under IAS 16, which cost must **not** be allocated to a capital drilling WBS?'),
      options: [
        t('هزینه‌های اداری و عمومی دفتر مرکزی (مالی، منابع انسانی، حقوقی)', 'Head-office general and administrative costs (finance, HR, legal)'),
        t('کمپ و پذیرایی خدمه حفاری', 'Camp and catering for the drilling crew'),
        t('ایمنی و حراست سایت دکل', 'HSE and security at the rig site'),
        t('ساعت نگهداری تجهیزات سایت حفاری', 'Maintenance hours on drilling-site equipment'),
      ],
      answer: 0,
      explain: t(
        'IAS 16 فقط مخارج مستقیماً قابل انتساب را سرمایه‌ای می‌کند و هزینه اداری و عمومی را صراحتاً بیرون می‌گذارد. کمپ خدمه، ایمنی سایت و نگهداری تجهیزات سایت مستقیماً به حفاری چاه مربوط‌اند.',
        'IAS 16 capitalises only directly attributable costs and expressly excludes general administrative costs. The crew’s camp, site HSE and maintenance of site equipment relate directly to drilling the well.',
      ),
    },
    {
      q: t(
        'هزینه `CC-ARY-PRD` در ماهی 9,000,000 و تولید میدان 300,000 بشکه است. با مبنای حجم تولید، سهم چاه AR-03 با 36,000 بشکه چقدر است؟',
        '`CC-ARY-PRD` cost 9,000,000 in a month and the field produced 300,000 barrels. On a production-volume basis, what is well AR-03’s share with 36,000 barrels?',
      ),
      options: [t('900,000', '900,000'), t('30', '30'), t('1,080,000', '1,080,000'), t('750,000', '750,000')],
      answer: 2,
      explain: t(
        'نرخ 9,000,000 ÷ 300,000 = 30 برای هر بشکه و سهم AR-03 برابر 36,000 × 30 = 1,080,000. عدد 30 فقط نرخ است و 750,000 تقسیم مساوی بین 12 چاه است که تولید را نادیده می‌گیرد.',
        'The rate is 9,000,000 ÷ 300,000 = 30 per barrel and AR-03’s share is 36,000 × 30 = 1,080,000. 30 is only the rate, and 750,000 is an equal split across 12 wells that ignores production.',
      ),
    },
    {
      q: t('چرا تسهیم‌ها باید مستند باشند؟', 'Why must allocations be documented?'),
      options: [
        t('چون IFRS روش تسهیم مشخصی را الزامی کرده است', 'Because IFRS prescribes a specific allocation method'),
        t('چون ERP بدون پیوست چرخه را اجرا نمی‌کند', 'Because the ERP will not run a cycle without an attachment'),
        t('چون مستندسازی هزینه کل شرکت را کم می‌کند', 'Because documentation lowers the company’s total cost'),
        t('چون شرکا و حسابرسان طرف دولتی تسهیم بدون مستند را رد می‌کنند و آن هزینه غیرقابل بازیافت می‌شود', 'Because partners and government-side auditors reject undocumented allocations and that cost becomes non-recoverable'),
      ],
      answer: 3,
      explain: t(
        'حق حسابرسی JOA و قرارداد نفتی به شرکا و طرف دولتی اجازه می‌دهد هر تسهیم را دوباره بسنجند؛ بدون سیاست، شواهد مبنا و تأیید، هزینه رد می‌شود. IFRS روش تسهیم داخلی خاصی را الزامی نمی‌کند و مستندسازی هزینه کل را تغییر نمی‌دهد.',
        'The JOA audit rights and the petroleum contract let partners and the government side re-test every allocation; without a policy, driver evidence and approval, the cost is rejected. IFRS prescribes no specific internal allocation method, and documentation does not change total cost.',
      ),
    },
    {
      q: t(
        'مسار پترولیوم هزینه `CC-HQ-ADM` را مستقیم به حساب مشترک تسهیم می‌کند و سربار JOA را هم صورت‌حساب می‌کند. مشکل چیست؟',
        'Masar Petroleum allocates `CC-HQ-ADM` cost directly to the joint account and also bills the JOA overhead charge. What is wrong?',
      ),
      options: [
        t('هزینه اداری دو بار بازیافت می‌شود؛ آن فقط باید از راه سربار JOA بیاید', 'Administrative cost is recovered twice; it should come only through the JOA overhead'),
        t('مشکلی نیست؛ هر دو مجازند', 'Nothing; both are allowed'),
        t('سربار JOA باید به WBS سرمایه‌ای برود', 'The JOA overhead should go to a capital WBS'),
        t('فقط مبنای تسهیم باید از ساعت به نفر تغییر کند', 'Only the basis should change from hours to headcount'),
      ],
      answer: 0,
      explain: t(
        'سربار JOA دقیقاً برای جبران هزینه اداری دفتر مرکزی است؛ تسهیم مستقیم همان هزینه، بازیافت دوباره است و حسابرس شرکا آن را رد می‌کند. تغییر مبنا مشکل را حل نمی‌کند و سربار JOA جایی در WBS سرمایه‌ای ندارد.',
        'The JOA overhead exists precisely to compensate head-office administration; allocating the same cost directly recovers it twice, and the partners’ auditor will reject it. Changing the basis does not fix this, and the JOA overhead has no place on a capital WBS.',
      ),
    },
  ],
}
