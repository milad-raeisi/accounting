import type { L, Lesson } from '../../types'

/** Short bilingual string helper. */
const t = (fa: string, en: string): L => ({ fa, en })

/* Accounts used in the automatic ERP postings of the running example (Pars Arya Oil & Gas). */
const ac = {
  wip: t('کار در جریان نگهداری (دستور کار)', 'Maintenance WIP (work orders)'),
  spares: t('موجودی قطعات یدکی و مواد مصرفی', 'Inventory: spares and consumables'),
  labour: t('دستمزد جذب‌شده کارگاه تعمیرات', 'Maintenance labour absorbed'),
  grir: t('حساب واسط رسید کالا و فاکتور (GR/IR)', 'GR/IR clearing'),
  ap: t('حساب‌های پرداختنی', 'Accounts payable'),
}
/** Repairs and maintenance expense charged to a cost object. */
const rm = (objFa: string, objEn: string) =>
  t(`هزینه تعمیر و نگهداری (${objFa})`, `Repairs and maintenance expense (${objEn})`)

export const lesson: Lesson = {
  slug: 'asset-management-fundamentals',
  number: 1,
  level: 'beginner',
  minutes: 24,
  icon: 'BookOpen',
  tone: 'primary',
  title: t('مبانی مدیریت دارایی', 'Asset Management Fundamentals'),
  summary: t(
    'ببینید مدیریت دارایی در یک میدان نفت و گاز یعنی چه: چرخه عمر دارایی، اندیشه‌های اصلی ISO 55000، نقش بهره‌برداری، نگهداری، بازرسی فنی و مالی، و جایگاه ماژول مدیریت دارایی و نگهداری (EAM) در ERP و پیوند آن با انبار، تدارکات، پروژه‌ها و مالی.',
    'See what asset management means in an oil and gas field: the asset lifecycle, the main ideas behind ISO 55000, the roles of operations, maintenance, integrity and finance, and where the Enterprise Asset Management (EAM) module sits in the ERP and how it links to inventory, procurement, projects and finance.',
  ),
  objectives: [
    t(
      'توضیح دهید مدیریت دارایی در یک میدان نفت و گاز یعنی چه و چه تفاوتی با نگهداری و تعمیرات دارد',
      'Explain what asset management means in an oil and gas field and how it differs from maintenance',
    ),
    t('مراحل چرخه عمر دارایی را نام ببرید و هزینه چرخه عمر را حساب کنید', 'Name the stages of the asset lifecycle and calculate life-cycle cost'),
    t('اندیشه‌های اصلی ISO 55000 و مفهوم «خط دید» را بیان کنید', 'State the main ideas behind ISO 55000 and the idea of "line of sight"'),
    t(
      'نقش بهره‌برداری، نگهداری، بازرسی فنی، مالی و سایر واحدها را در مدیریت دارایی شرح دهید',
      'Describe the roles of operations, maintenance, integrity, finance and other functions in asset management',
    ),
    t(
      'جایگاه ماژول EAM در ERP، پیوندهای آن و سندهای مالی خودکارش را توضیح دهید',
      'Explain where the EAM module sits in the ERP, how it links to other modules, and the Finance entries it posts automatically',
    ),
  ],
  sections: [
    {
      id: 'what-is-asset-management',
      title: t('مدیریت دارایی یعنی چه؟', 'What Is Asset Management?'),
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'ساعت 2 بامداد، کمپرسور `K-101A` در ایستگاه تقویت فشار میدان آریا با هشدار لرزش زیاد از مدار خارج می‌شود. ایستگاه دیگر نمی‌تواند همه گاز تولیدی را فشرده کند و به خط لوله بفرستد؛ بخشی از گاز به مشعل می‌رود و تولید چند چاه کم می‌شود. یاتاقان معیوب در انبار نیست و سفارش فوری آن هفته‌ها طول می‌کشد. همه این‌ها با یک تصمیم ساده قابل پیشگیری بود: پایش منظم لرزش و نگه‌داشتن یک یاتاقان یدکی.',
            en: 'At 2 a.m., compressor `K-101A` at the Arya field compressor station trips on high vibration. The station can no longer compress all the produced gas into the pipeline: part of it goes to the flare and several wells are choked back. The failed bearing is not in stock, and an urgent order takes weeks. All of this could have been avoided by one simple decision: monitor vibration regularly and keep a spare bearing.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: t('هزینه یک خرابی', 'The cost of one failure'),
          text: {
            fa: 'کمپرسور 6 روز از کار افتاد. ارزش فروش گازی که به تعویق افتاد روزانه 150,000 بود: 6 × 150,000 = 900,000. حمل هوایی فوری یاتاقان 120,000 و خود تعمیر 80,000 هزینه داشت. جمع اثر مالی: 900,000 + 120,000 + 80,000 = 1,100,000. در مقابل، یک برنامه پایش لرزش برای هر دو کمپرسور سالانه فقط 60,000 هزینه دارد.',
            en: 'The compressor was down for 6 days. Deferred gas sales were worth 150,000 a day: 6 × 150,000 = 900,000. Air-freighting the bearing cost 120,000 and the repair itself 80,000. Total impact: 900,000 + 120,000 + 80,000 = 1,100,000. A vibration-monitoring programme for both compressors costs only 60,000 a year.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'در این دوره، **دارایی (Asset)** هر چیزی است که برای سازمان ارزش بالقوه یا بالفعل دارد. تمرکز ما بر **دارایی‌های فیزیکی** است: چاه‌ها، خطوط لوله، کمپرسورها، جداکننده‌ها، پمپ‌ها، مخازن، دکل‌های حفاری و تعمیر چاه، و تأسیسات جانبی مانند تولید برق و ساختمان‌ها. **مدیریت دارایی (Asset Management)** یعنی فعالیت‌های هماهنگ سازمان برای به دست آوردن بیشترین ارزش از این دارایی‌ها در کل عمرشان.',
            en: 'In this course an **asset** is anything that has potential or actual value to the organisation. We focus on **physical assets**: wells, pipelines, compressors, separators, pumps, tanks, drilling and workover rigs, and support facilities such as power generation and buildings. **Asset management** is the coordinated activity of an organisation to get the most value from these assets over their whole life.',
          },
        },
        {
          type: 'table',
          caption: t('دارایی‌های فیزیکی اصلی یک میدان بالادستی', 'The main physical assets of an upstream field'),
          head: [t('گروه دارایی', 'Asset group'), t('نمونه در میدان آریا', 'Examples at Arya'), t('چه چیزی ممکن است خراب شود', 'What can go wrong')],
          rows: [
            [
              t('چاه‌ها', 'Wells'),
              t('سرچاهی، تاج چاه، لوله‌های جداری و مغزی چاه‌های AR-01 تا AR-12', 'Wellheads, christmas trees, casing and tubing of wells AR-01 to AR-12'),
              t('نشتی، خوردگی لوله مغزی، افت فشار', 'Leaks, tubing corrosion, pressure decline'),
            ],
            [
              t('خطوط جریانی و خط لوله', 'Flowlines and pipelines'),
              t('خطوط جریانی چاه‌ها و خط لوله صادرات گاز', 'Well flowlines and the export gas pipeline'),
              t('خوردگی داخلی، نشت، رسوب', 'Internal corrosion, leaks, deposits'),
            ],
            [
              t('تجهیزات دوار', 'Rotating equipment'),
              t('کمپرسورهای K-101A و K-101B، پمپ‌های میعانات', 'Compressors K-101A and K-101B, condensate pumps'),
              t('لرزش، خرابی یاتاقان، نشتی آب‌بند', 'Vibration, bearing failure, seal leaks'),
            ],
            [
              t('تجهیزات ثابت', 'Static equipment'),
              t('جداکننده ورودی V-110، مبدل‌های حرارتی، مخازن', 'Inlet separator V-110, heat exchangers, tanks'),
              t('خوردگی، کاهش ضخامت دیواره، گرفتگی', 'Corrosion, wall thinning, fouling'),
            ],
            [
              t('دکل‌ها', 'Rigs'),
              t('دکل تعمیر چاه (اجاره‌ای یا متعلق به شرکت)', 'Workover rig (hired or owned)'),
              t('خرابی تجهیزات بالابر، توقف عملیات', 'Hoisting failures, downtime'),
            ],
            [
              t('تأسیسات جانبی', 'Utilities and facilities'),
              t('ژنراتورها، سامانه آب آتش‌نشانی، ساختمان‌ها', 'Generators, fire-water system, buildings'),
              t('قطع برق، آماده نبودن سامانه ایمنی', 'Power loss, safety system not available'),
            ],
          ],
        },
        {
          type: 'compare',
          left: {
            title: t('نگهداری و تعمیرات (نت)', 'Maintenance'),
            items: [
              t('سؤال اصلی: «چطور این تجهیز را سالم نگه داریم؟»', 'Main question: "How do we keep this equipment working?"'),
              t('افق کوتاه: هفته‌ها و ماه‌ها', 'Short horizon: weeks and months'),
              t('تمرکز بر کار فنی: بازرسی، سرویس، تعمیر', 'Focus on technical work: inspection, servicing, repair'),
              t('بیشتر در دست واحد نگهداری', 'Mostly owned by the maintenance department'),
            ],
          },
          right: {
            title: t('مدیریت دارایی', 'Asset management'),
            items: [
              t('سؤال اصلی: «این دارایی در کل عمرش چه ارزشی برای ما می‌سازد؟»', 'Main question: "What value does this asset create for us over its whole life?"'),
              t('افق بلند: از طراحی تا کنارگذاری', 'Long horizon: from design to disposal'),
              t('تعادل میان هزینه، ریسک و عملکرد', 'Balances cost, risk and performance'),
              t('کار مشترک بهره‌برداری، نگهداری، بازرسی، مالی و مدیریت', 'Shared by operations, maintenance, inspection, finance and management'),
            ],
          },
        },
        {
          type: 'formula',
          text: t(
            'ارزش دارایی = بهترین تعادل میان عملکرد، هزینه و ریسک در کل عمر',
            'Asset value = the best balance of performance, cost and risk over the whole life',
          ),
          note: t(
            'هر تصمیم مهم (خرید، تعمیر، تعویض، کنارگذاری) را با این سه معیار بسنجید.',
            'Test every major decision (buy, repair, replace, retire) against these three criteria.',
          ),
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('مثال اصلی این دوره: پارس‌آریا', 'Our running example: Pars Arya'),
          text: {
            fa: '**شرکت نفت و گاز پارس‌آریا** (شرکتی فرضی) بهره‌بردار **میدان آریا** است؛ یک میدان خشکی که با چند شریک در قالب یک مشارکت (Joint Venture) اداره می‌شود. میدان دوازده چاه (AR-01 تا AR-12)، یک ایستگاه بهره‌برداری با جداکننده‌ها، یک **ایستگاه تقویت فشار** با دو کمپرسور، یک خط لوله صادرات گاز، یک **انبار مرکزی** و یک **انبار میدان** دارد. همه مثال‌های این دوره درباره همین میدان است.',
            en: '**Pars Arya Oil & Gas** (a fictional company) operates the **Arya field**, an onshore field run with several partners in a joint venture. The field has twelve wells (AR-01 to AR-12), a production station with separators, a **compressor station** with two compressors, an export gas pipeline, a **Central Warehouse** and a **Field Warehouse**. Every example in this course uses this field.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل', 'In practice'),
          text: {
            fa: 'در شرکت‌های نفتی ایران به نگهداری و تعمیرات معمولاً **«نت»** می‌گویند و واحد آن اغلب از «بهره‌برداری» و «بازرسی فنی» جداست. مدیریت دارایی این واحدها را جایگزین نمی‌کند؛ به آن‌ها یک زبان و هدف مشترک می‌دهد.',
            en: 'In Iranian oil companies maintenance is usually called **«نت»** (short for «نگهداری و تعمیرات»), and the maintenance department is often separate from "operations" and "technical inspection". Asset management does not replace these departments; it gives them a shared language and shared goals.',
          },
        },
      ],
    },
    {
      id: 'asset-lifecycle',
      title: t('چرخه عمر دارایی', 'The Asset Lifecycle'),
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'هر دارایی فیزیکی از یک نیاز متولد می‌شود و روزی کنار گذاشته می‌شود. این مسیر را **چرخه عمر دارایی (Asset Lifecycle)** می‌نامیم. در هر مرحله، یک واحد سازمان و یک ماژول ERP نقش اصلی را دارد.',
            en: 'Every physical asset is born from a need and is one day retired. We call this path the **asset lifecycle**. At each stage, one part of the organisation and one ERP module play the lead role.',
          },
        },
        {
          type: 'diagram',
          id: 'asset-lifecycle',
          caption: t(
            'چرخه عمر دارایی: برنامه‌ریزی، تأمین، نصب و سرمایه‌ای کردن، بهره‌برداری و نگهداری، کنارگذاری؛ همراه با ماژول ERP هر مرحله.',
            'The asset lifecycle: plan, acquire, install and capitalise, operate and maintain, dispose; with the ERP module behind each stage.',
          ),
        },
        {
          type: 'steps',
          items: [
            {
              title: t('برنامه‌ریزی', 'Plan'),
              text: t(
                'نیاز تعریف می‌شود (مثلاً افزایش ظرفیت تراکم گاز)، گزینه‌ها مقایسه و بودجه با یک **مجوز هزینه‌کرد (AFE)** تصویب می‌شود.',
                'The need is defined (for example more gas-compression capacity), options are compared and the budget is approved with an **Authorisation for Expenditure (AFE)**.',
              ),
            },
            {
              title: t('تأمین', 'Acquire'),
              text: t(
                'طراحی، خرید و ساخت. اقلام با زمان تحویل طولانی (Long-lead) مانند کمپرسور زودتر سفارش داده می‌شوند. ماژول‌های تدارکات و پروژه درگیرند.',
                'Design, purchase and construction. Long-lead items such as a compressor are ordered early. The Procurement and Projects modules are involved.',
              ),
            },
            {
              title: t('نصب، راه‌اندازی و سرمایه‌ای کردن', 'Install, commission and capitalise'),
              text: t(
                'تجهیز نصب، آزمایش و به بهره‌برداری تحویل می‌شود. در همین مرحله در فهرست فنی دارایی‌ها ثبت می‌شود و مالی آن را از «دارایی در جریان تکمیل» به دارایی ثابت منتقل می‌کند.',
                'The equipment is installed, tested and handed over to operations. At this point it is entered in the technical asset register, and Finance moves it from "assets under construction" to a fixed asset.',
              ),
            },
            {
              title: t('بهره‌برداری و نگهداری', 'Operate and maintain'),
              text: t(
                'طولانی‌ترین مرحله، اغلب 20 سال یا بیشتر. بازرسی، سرویس، تعمیر و پایش وضعیت با ماژول مدیریت دارایی و نگهداری (EAM) انجام می‌شود.',
                'The longest stage, often 20 years or more. Inspection, servicing, repair and condition monitoring run through the Enterprise Asset Management (EAM) module.',
              ),
            },
            {
              title: t('اصلاح یا نوسازی', 'Modify or renew'),
              text: t(
                'تعمیرات اساسی (Overhaul)، ارتقا یا افزایش عمر. باید تصمیم گرفت کدام هزینه، هزینه دوره است و کدام سرمایه‌ای.',
                'Overhauls, upgrades or life extension. You must decide which costs are period expenses and which are capital.',
              ),
            },
            {
              title: t('کنارگذاری', 'Dispose'),
              text: t(
                'خارج کردن از سرویس، فروش یا اسقاط، و در مورد چاه‌ها، مسدودسازی و متروک‌سازی ایمن. دارایی از دفتر دارایی‌های ثابت حذف می‌شود.',
                'Decommissioning, sale or scrapping, and for wells, safe plugging and abandonment. The asset is removed from the fixed-asset register.',
              ),
            },
          ],
        },
        { type: 'h', text: t('هزینه چرخه عمر', 'Life-Cycle Cost') },
        {
          type: 'p',
          text: {
            fa: 'قیمت خرید فقط بخش کوچکی از هزینه یک دارایی است. **هزینه چرخه عمر (Life-Cycle Cost)** همه هزینه‌ها را از خرید تا کنارگذاری جمع می‌زند. جدول زیر برآورد پارس‌آریا برای کمپرسور جدید `K-102` است (اعداد فرضی و بدون تنزیل).',
            en: 'The purchase price is only a small part of what an asset costs. **Life-cycle cost** adds up every cost from purchase to disposal. The table shows Pars Arya’s estimate for a new compressor `K-102` (illustrative figures, not discounted).',
          },
        },
        {
          type: 'table',
          caption: t('هزینه چرخه عمر کمپرسور K-102 در 20 سال', 'Life-cycle cost of compressor K-102 over 20 years'),
          head: [t('قلم هزینه', 'Cost item'), t('مبلغ', 'Amount'), t('سهم از کل (٪)', 'Share of total (%)')],
          rows: [
            [t('قیمت خرید', 'Purchase price'), 2400000, 23.5],
            [t('نصب و راه‌اندازی', 'Installation and commissioning'), 600000, 5.9],
            [t('بهره‌برداری و نگهداری (20 سال × 350,000)', 'Operation and maintenance (20 years × 350,000)'), 7000000, 68.6],
            [t('برچیدن و کنارگذاری', 'Decommissioning and disposal'), 200000, 2.0],
            [t('جمع', 'Total'), 10200000, 100],
          ],
          numericCols: [1, 2],
        },
        {
          type: 'callout',
          tone: 'example',
          title: t('دام ارزان‌ترین پیشنهاد', 'The cheapest-bid trap'),
          text: {
            fa: 'کمپرسور B در مناقصه 300,000 ارزان‌تر است، اما سالانه 40,000 سوخت گاز بیشتری مصرف می‌کند. در 20 سال، 20 × 40,000 = 800,000 هزینه اضافه دارد؛ یعنی در کل عمر 500,000 گران‌تر است. مدیریت دارایی تصمیم خرید را بر پایه هزینه چرخه عمر می‌گیرد، نه فقط قیمت روز.',
            en: 'Compressor B is 300,000 cheaper in the tender but burns 40,000 more fuel gas each year. Over 20 years that is 20 × 40,000 = 800,000 of extra cost, so over its life it is 500,000 more expensive. Asset management makes the purchase decision on life-cycle cost, not on today’s price alone.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('در عمل: نگاه حسابداری به چرخه عمر', 'In practice: the accounting view of the lifecycle'),
          text: {
            fa: 'طبق IFRS (استاندارد IAS 16)، بهای خرید به‌علاوه مخارج لازم برای نصب و آماده‌سازی دارایی سرمایه‌ای و در طول عمر مفید مستهلک می‌شود. برآورد هزینه متروک‌سازی چاه‌ها و برچیدن تأسیسات نیز طبق IAS 37 به‌صورت ذخیره شناسایی و به بهای دارایی اضافه می‌شود. پس تصمیم‌های فنی چرخه عمر مستقیم در صورت‌های مالی دیده می‌شوند.',
            en: 'Under IFRS (IAS 16), the purchase price plus the costs needed to install and prepare the asset are capitalised and depreciated over its useful life. The estimated cost of abandoning wells and dismantling facilities is recognised as a provision under IAS 37 and added to the asset’s cost. Technical lifecycle decisions therefore show up directly in the financial statements.',
          },
        },
      ],
    },
    {
      id: 'iso-55000',
      title: t('اندیشه‌های اصلی ISO 55000', 'The Ideas Behind ISO 55000'),
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**ISO 55000** خانواده‌ای از استانداردهای بین‌المللی درباره مدیریت دارایی است: یکی مفاهیم و واژه‌ها را تعریف می‌کند (ISO 55000)، یکی الزامات یک «سیستم مدیریت دارایی» را بیان می‌کند (ISO 55001) و یکی راهنمای اجراست (ISO 55002). این استانداردها نمی‌گویند کمپرسور را هر چند ساعت سرویس کنید؛ می‌گویند سازمان چطور باید تصمیم بگیرد، برنامه بریزد و نتیجه را بسنجد. این استانداردها بر چند اندیشه بنیادی تکیه دارند که معمولاً این‌طور خلاصه می‌شوند:',
            en: '**ISO 55000** is a family of international standards on asset management: one sets out the concepts and terms (ISO 55000), one gives the requirements for an "asset management system" (ISO 55001) and one gives guidance on applying it (ISO 55002). They do not tell you how often to service a compressor; they describe how an organisation should decide, plan and check the results. They rest on a few fundamental ideas, usually summarised as:',
          },
        },
        {
          type: 'list',
          items: [
            t(
              '**ارزش (Value)**: دارایی‌ها برای ایجاد ارزش وجود دارند، نه برای خودشان. ارزش را ذی‌نفعان تعریف می‌کنند: سهامداران، شرکا، دولت، کارکنان و جامعه.',
              '**Value**: assets exist to create value, not for their own sake. Stakeholders define that value: shareholders, partners, government, employees and the community.',
            ),
            t(
              '**هم‌راستایی (Alignment)**: اهداف شرکت به برنامه‌های دارایی و سپس به کارهای روزانه نگهداری ترجمه می‌شوند.',
              '**Alignment**: company objectives are translated into asset plans and then into day-to-day maintenance work.',
            ),
            t(
              '**رهبری (Leadership)**: مدیران نقش‌ها، منابع و فرهنگ را فراهم می‌کنند؛ مدیریت دارایی کار یک واحد نیست.',
              '**Leadership**: managers provide the roles, resources and culture; asset management is not one department’s job.',
            ),
            t(
              '**اطمینان (Assurance)**: سازمان با پایش، ممیزی و شاخص‌ها نشان می‌دهد که دارایی‌ها همان کاری را که باید، انجام می‌دهند.',
              '**Assurance**: through monitoring, audits and indicators, the organisation shows evidence that its assets do what they are required to do.',
            ),
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'کاربردی‌ترین اندیشه، **خط دید (Line of Sight)** است: هر دستور کار باید به یک هدف شرکت وصل باشد. زنجیره معمول این است: اهداف سازمان، خط‌مشی مدیریت دارایی، **برنامه راهبردی مدیریت دارایی (SAMP)**، برنامه‌های مدیریت دارایی، برنامه‌های نگهداری و دستور کارها؛ و در پایان، داده‌های عملکرد که به ابتدای زنجیره بازمی‌گردند.',
            en: 'The most practical idea is **line of sight**: every work order should connect to a company objective. The usual chain is: organisational objectives, the asset management policy, the **Strategic Asset Management Plan (SAMP)**, asset management plans, maintenance plans and work orders; and finally, performance data that flows back to the start of the chain.',
          },
        },
        {
          type: 'table',
          caption: t('خط دید در پارس‌آریا', 'Line of sight at Pars Arya'),
          head: [t('سطح', 'Level'), t('نمونه در پارس‌آریا', 'Example at Pars Arya')],
          rows: [
            [t('هدف سازمان', 'Company objective'), t('تحویل گاز قراردادی به خط لوله بدون حادثه مهم', 'Deliver the contract gas volume to the pipeline with no major incident')],
            [t('هدف مدیریت دارایی', 'Asset management objective'), t('دسترس‌پذیری ایستگاه تقویت فشار دست‌کم 97٪', 'Compressor-station availability of at least 97%')],
            [
              t('برنامه دارایی', 'Asset plan'),
              t(
                'پایش ماهانه لرزش K-101A و K-101B، تعمیرات اساسی هر 32,000 ساعت کارکرد، نگه‌داشتن یاتاقان یدکی در انبار',
                'Monthly vibration monitoring of K-101A and K-101B, an overhaul every 32,000 running hours, a spare bearing kept in stock',
              ),
            ],
            [t('کار روزانه', 'Daily work'), t('دستور کارهای پیشگیرانه‌ای که ERP از روی برنامه‌های نگهداری می‌سازد', 'Preventive work orders that the ERP generates from the maintenance plans')],
            [
              t('سنجش', 'Measurement'),
              t('دسترس‌پذیری ماهانه، هزینه نگهداری هر واحد تولید، تعداد خرابی‌های پیش‌بینی‌نشده', 'Monthly availability, maintenance cost per unit produced, number of unplanned failures'),
            ],
          ],
        },
        {
          type: 'formula',
          text: t('دسترس‌پذیری = زمان در دسترس ÷ کل زمان دوره', 'Availability = available time ÷ total time in the period'),
          note: t(
            'مثال: یک سال 8,760 ساعت است. اگر K-101A در مجموع 263 ساعت متوقف بوده باشد، دسترس‌پذیری = (8,760 − 263) ÷ 8,760 = 8,497 ÷ 8,760 = 97.0٪.',
            'Example: a year has 8,760 hours. If K-101A was down for 263 hours in total, availability = (8,760 − 263) ÷ 8,760 = 8,497 ÷ 8,760 = 97.0%.',
          ),
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('گواهی‌نامه لازم نیست', 'You do not need a certificate'),
          text: {
            fa: 'گرفتن گواهی‌نامه ISO 55001 اختیاری است. بسیاری از شرکت‌ها بدون گواهی از همین اندیشه‌ها استفاده می‌کنند: اهداف روشن، تصمیم بر پایه ریسک و هزینه چرخه عمر، و داده‌های قابل اعتماد در ERP.',
            en: 'ISO 55001 certification is optional. Many companies use these ideas without a certificate: clear objectives, decisions based on risk and life-cycle cost, and reliable data in the ERP.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('استانداردهای مرتبط در نفت و گاز', 'Related standards in oil and gas'),
          text: {
            fa: '**ISO 14224** برای صنایع نفت، گاز و پتروشیمی یک طبقه‌بندی استاندارد از تجهیزات (از تأسیسات تا قطعه قابل نگهداری) و کدهای استاندارد خرابی ارائه می‌دهد تا داده‌های قابلیت اطمینان قابل مقایسه باشند. در درس‌های «فهرست دارایی‌ها و ساختار سلسله‌مراتبی» و «راهبردهای نگهداری و تعمیرات» از این اندیشه‌ها استفاده می‌کنیم.',
            en: '**ISO 14224** gives the petroleum, natural gas and petrochemical industries a standard equipment taxonomy (from installation down to maintainable item) and standard failure codes, so that reliability data can be compared. We use these ideas in the lessons on the asset register and hierarchy and on maintenance strategies.',
          },
        },
      ],
    },
    {
      id: 'roles',
      title: t('چه کسی چه می‌کند؟', 'Who Does What?'),
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'مدیریت دارایی کار گروهی است. هر واحد بخشی از تصمیم‌ها و بخشی از اسناد ERP را در اختیار دارد. اگر یکی از حلقه‌ها کارش را درست انجام ندهد، داده‌ها ناقص و هزینه‌ها نادرست می‌شوند.',
            en: 'Asset management is a team effort. Each department owns part of the decisions and part of the ERP documents. If one link does its job badly, the data becomes incomplete and the costs wrong.',
          },
        },
        {
          type: 'table',
          caption: t('نقش‌ها در مدیریت دارایی پارس‌آریا', 'Roles in asset management at Pars Arya'),
          head: [t('نقش', 'Role'), t('مسئولیت‌های اصلی', 'Main responsibilities'), t('اسناد معمول در ERP', 'Typical ERP documents')],
          rows: [
            [
              t('بهره‌برداری', 'Operations'),
              t('راهبری روزانه تجهیزات، گزارش عیب، آزاد کردن تجهیز برای کار با مجوز کار', 'Runs the equipment daily, reports defects, releases equipment for work under a permit to work'),
              t('اعلان (درخواست کار)، قرائت شمارنده‌ها', 'Notifications (work requests), counter readings'),
            ],
            [
              t('نگهداری و تعمیرات', 'Maintenance'),
              t('برنامه‌ریزی، زمان‌بندی و اجرای کار؛ ثبت کارکرد و گزارش فنی', 'Plans, schedules and executes work; records time and technical findings'),
              t('دستور کار، رزرو کالا، تأیید زمان', 'Work orders, reservations, time confirmations'),
            ],
            [
              t('بازرسی فنی و یکپارچگی', 'Integrity and inspection'),
              t('بازرسی تجهیزات ثابت و خطوط لوله، پایش خوردگی، بازرسی مبتنی بر ریسک', 'Inspects static equipment and pipelines, monitors corrosion, runs risk-based inspection'),
              t('برنامه بازرسی، قرائت ضخامت، اعلان عیب', 'Inspection plans, thickness readings, defect notifications'),
            ],
            [
              t('مهندسی قابلیت اطمینان', 'Reliability engineering'),
              t('تحلیل خرابی‌ها، تعیین بحرانیت و راهبرد نگهداری', 'Analyses failures, sets criticality and maintenance strategy'),
              t('برنامه‌های نگهداری، کدهای خرابی', 'Maintenance plans, failure codes'),
            ],
            [
              t('انبار و تدارکات', 'Warehouse and procurement'),
              t('نگه‌داشتن قطعات یدکی، خرید کالا و خدمات', 'Holds spare parts, buys materials and services'),
              t('حواله انبار، درخواست خرید، سفارش خرید', 'Goods issues, purchase requisitions, purchase orders'),
            ],
            [
              t('مالی', 'Finance'),
              t(
                'سرمایه‌ای کردن، استهلاک، کنترل بودجه، تسویه هزینه‌ها، بازیافت هزینه و صورت‌حساب شرکا',
                'Capitalisation, depreciation, budget control, cost settlement, cost recovery and partner billing',
              ),
              t('سند حسابداری، دفتر دارایی‌های ثابت، قاعده تسویه', 'Journal entries, fixed-asset register, settlement rules'),
            ],
            [
              t('ایمنی، بهداشت و محیط زیست (HSE)', 'Health, safety and environment (HSE)'),
              t('ارزیابی ریسک، صدور و کنترل مجوز کار، گواهی‌های ایمنی', 'Risk assessment, issuing and controlling permits to work, safety certificates'),
              t('مجوز کار، گزارش حادثه', 'Permits to work, incident reports'),
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: t('یک رویداد، چند نقش', 'One event, many roles'),
          text: {
            fa: 'اپراتور ایستگاه، لرزش زیاد `K-101A` را در یک اعلان ثبت می‌کند. مهندس قابلیت اطمینان داده لرزش را بررسی و خرابی یاتاقان را تشخیص می‌دهد. برنامه‌ریز نگهداری دستور کار می‌سازد و یاتاقان را از انبار رزرو می‌کند. انباردار کالا را حواله می‌کند. HSE مجوز کار صادر می‌کند. تکنسین‌ها کار را انجام می‌دهند و ساعت کار را ثبت می‌کنند. مالی در پایان ماه هزینه دستور کار را به مرکز هزینه ایستگاه تسویه و برای بازیافت هزینه برچسب‌گذاری می‌کند.',
            en: 'The station operator records high vibration on `K-101A` in a notification. The reliability engineer reviews the vibration data and diagnoses a bearing failure. The maintenance planner creates a work order and reserves the bearing in the warehouse. The storekeeper issues it. HSE issues the permit to work. Technicians do the job and record their hours. At month-end Finance settles the work order’s cost to the station’s cost centre and tags it for cost recovery.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'بسیاری از شرکت‌ها برای هر دارایی مهم یک **مالک دارایی (Asset Owner)** تعیین می‌کنند؛ معمولاً مدیر بهره‌برداری همان تأسیسات. مالک دارایی درباره عملکرد، ریسک و بودجه آن پاسخ‌گوست و تصمیم‌های بزرگ مانند تعویض یا ارتقا را پیشنهاد می‌دهد.',
            en: 'Many companies name an **asset owner** for each important asset, usually the operations manager of that facility. The asset owner is accountable for its performance, risk and budget, and proposes major decisions such as replacement or upgrade.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('در عمل: شرکا هم ذی‌نفع‌اند', 'In practice: partners are stakeholders too'),
          text: {
            fa: 'در یک مشارکت، پارس‌آریا به‌عنوان **بهره‌بردار (Operator)** دارایی‌ها را از طرف همه شرکا اداره می‌کند. شرکا سهم خود از هزینه‌ها را می‌پردازند و حق دارند حساب‌ها را حسابرسی کنند. پس هر هزینه نگهداری باید با مدارک کامل و موضوع هزینه درست (چاه، مرکز هزینه یا AFE) ثبت شود.',
            en: 'In a joint venture Pars Arya, as the **operator**, runs the assets on behalf of all partners. Partners pay their share of the costs and have the right to audit the accounts. Every maintenance cost must therefore be recorded with full supporting documents and the right cost object (well, cost centre or AFE).',
          },
        },
      ],
    },
    {
      id: 'eam-in-erp',
      title: t('ماژول مدیریت دارایی و نگهداری در ERP', 'The EAM Module in the ERP'),
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در ERP، کار مدیریت دارایی در ماژول **مدیریت دارایی و نگهداری (Enterprise Asset Management یا EAM)** انجام می‌شود؛ برخی سیستم‌ها آن را «نگهداری تأسیسات» می‌نامند. مثل هر ماژول دیگر، دو نوع داده دارد: **داده پایه (Master Data)** که کم تغییر می‌کند و **داده تراکنشی** که با هر رویداد ثبت می‌شود.',
            en: 'In an ERP, asset management work runs in the **Enterprise Asset Management (EAM)** module; some systems call it "plant maintenance". Like every module it holds two kinds of data: **master data**, which changes rarely, and **transaction data**, recorded with each event.',
          },
        },
        {
          type: 'compare',
          left: {
            title: t('داده پایه EAM', 'EAM master data'),
            items: [
              t('مکان‌های عملیاتی (جایگاه‌ها در ساختار سلسله‌مراتبی)', 'Functional locations (positions in the hierarchy)'),
              t('تجهیزات (اقلام فیزیکی با شماره سریال)', 'Equipment (physical items with serial numbers)'),
              t('فهرست قطعات (BOM)', 'Bills of materials (BOMs)'),
              t('دستورالعمل‌های کار و برنامه‌های نگهداری', 'Task lists and maintenance plans'),
              t('نقاط اندازه‌گیری و شمارنده‌ها', 'Measuring points and counters'),
              t('مراکز کار (گروه‌های فنی) با نرخ ساعتی', 'Work centres (crews) with hourly rates'),
            ],
          },
          right: {
            title: t('داده تراکنشی EAM', 'EAM transaction data'),
            items: [
              t('اعلان (درخواست کار)', 'Notifications (work requests)'),
              t('دستور کار', 'Work orders'),
              t('رزرو کالا و حواله انبار', 'Reservations and goods issues'),
              t('تأیید زمان (ثبت کارکرد)', 'Time confirmations'),
              t('قرائت شمارنده‌ها و اندازه‌گیری‌ها', 'Counter and measurement readings'),
              t('تسویه هزینه دستور کار', 'Work-order cost settlements'),
            ],
          },
        },
        {
          type: 'diagram',
          id: 'erp-modules',
          caption: t(
            'نقشه ماژول‌های ERP: مدیریت دارایی و نگهداری با انبار، تدارکات، پروژه‌ها، منابع انسانی و مالی داده رد و بدل می‌کند.',
            'The ERP module map: Asset Management exchanges data with Inventory, Procurement, Projects, HR and Finance.',
          ),
        },
        {
          type: 'table',
          caption: t('پیوندهای ماژول EAM با سایر ماژول‌ها', 'How the EAM module links to the other modules'),
          head: [t('ماژول', 'Module'), t('آنچه EAM می‌فرستد', 'What EAM sends'), t('آنچه برمی‌گردد', 'What comes back'), t('اثر در مالی', 'Effect in Finance')],
          rows: [
            [
              t('انبار', 'Inventory'),
              t('رزرو قطعات برای دستور کار', 'Reservations of parts for work orders'),
              t('حواله انبار و موجودی در دسترس', 'Goods issues and available stock'),
              t('کاهش موجودی، افزایش هزینه دستور کار', 'Inventory down, work-order cost up'),
            ],
            [
              t('تدارکات', 'Procurement'),
              t('درخواست خرید برای کالای غیرانباری و خدمات پیمانکار', 'Purchase requisitions for non-stock items and contractor services'),
              t('سفارش خرید، رسید کالا، تأیید خدمات', 'Purchase orders, goods receipts, service acceptance'),
              t('ثبت در حساب واسط GR/IR و سپس حساب‌های پرداختنی', 'Postings to GR/IR clearing, then accounts payable'),
            ],
            [
              t('پروژه‌ها', 'Projects'),
              t('دستور کارهای سرمایه‌ای (نصب، ارتقا)', 'Capital work orders (installation, upgrades)'),
              t('بودجه AFE و ساختار پروژه', 'AFE budget and project structure'),
              t('دارایی در جریان تکمیل، سپس دارایی ثابت', 'Assets under construction, then fixed assets'),
            ],
            [
              t('منابع انسانی', 'HR'),
              t('ساعت‌های کار ثبت‌شده', 'Recorded working hours'),
              t('کارکنان، مهارت‌ها، گواهی‌نامه‌ها، نرخ دستمزد', 'Employees, skills, certificates, wage rates'),
              t('انتقال هزینه دستمزد به دستور کار', 'Labour cost moved to work orders'),
            ],
            [
              t('مالی', 'Finance'),
              t('هزینه‌های جمع‌شده و قاعده تسویه', 'Collected costs and settlement rules'),
              t('مراکز هزینه، شماره دارایی ثابت، کدهای بازیافت هزینه', 'Cost centres, fixed-asset numbers, cost-recovery codes'),
              t('ثبت خودکار هزینه نگهداری روی موضوع هزینه درست', 'Automatic posting of maintenance cost to the right cost object'),
            ],
          ],
        },
        { type: 'h', text: t('ERP چه سندی را خودکار به مالی می‌فرستد؟', 'What the ERP Posts to Finance Automatically') },
        {
          type: 'p',
          text: {
            fa: 'برای سرویس دوره‌ای کمپرسور `K-101B`، دستور کار `WO-40002` ساخته شده است. انباردار یک بسته فیلتر و روغن روان‌کاری به ارزش 20,000 حواله می‌کند. تکنسین 6 ساعت کار را با نرخ 1,500 در ساعت ثبت می‌کند (6 × 1,500 = 9,000). در پایان ماه، دستور کار به مرکز هزینه ایستگاه تقویت فشار (`CS-OPS`) تسویه می‌شود. هیچ‌کس در مالی سند دستی نمی‌زند؛ ERP این سندها را خودکار ثبت می‌کند:',
            en: 'Work order `WO-40002` is created for the periodic service of compressor `K-101B`. The storekeeper issues a filter kit and lube oil worth 20,000. The technician records 6 hours at 1,500 an hour (6 × 1,500 = 9,000). At month-end the work order is settled to the compressor station’s cost centre (`CS-OPS`). Nobody in Finance writes a manual entry; the ERP posts these automatically:',
          },
        },
        {
          type: 'journal',
          title: t('سندهای خودکار ERP برای WO-40002', 'Automatic ERP postings for WO-40002'),
          entries: [
            {
              date: t('حواله انبار', 'Goods issue'),
              lines: [
                { account: ac.wip, debit: 20000 },
                { account: ac.spares, credit: 20000 },
              ],
              memo: t('خروج بسته فیلتر و روغن برای WO-40002', 'Filter kit and lube oil issued to WO-40002'),
            },
            {
              date: t('تأیید زمان', 'Time confirmation'),
              lines: [
                { account: ac.wip, debit: 9000 },
                { account: ac.labour, credit: 9000 },
              ],
              memo: t('6 ساعت × 1,500؛ هزینه از کارگاه تعمیرات به دستور کار منتقل می‌شود', '6 hours × 1,500; cost moves from the maintenance workshop to the work order'),
            },
            {
              date: t('تسویه پایان ماه', 'Month-end settlement'),
              lines: [
                { account: rm('مرکز هزینه CS-OPS', 'cost centre CS-OPS'), debit: 29000 },
                { account: ac.wip, credit: 29000 },
              ],
              memo: t('20,000 + 9,000 = 29,000؛ برچسب بازیافت: هزینه عملیاتی قابل بازیافت', '20,000 + 9,000 = 29,000; recovery tag: recoverable operating cost'),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('نکته‌های این سندها', 'Notes on these postings'),
          text: {
            fa: 'ساختن دستور کار و رزرو کالا هیچ سند مالی ایجاد نمی‌کند؛ فقط **جابه‌جایی واقعی** (حواله، ثبت کارکرد، دریافت خدمات) و **تسویه** سند می‌زنند. حساب «کار در جریان نگهداری» مثل یک ظرف موقت است که هزینه‌ها را تا تسویه نگه می‌دارد و پس از تسویه صفر می‌شود. برخی ERPها هزینه را از همان ابتدا مستقیم به حساب هزینه می‌برند و دستور کار را فقط به‌عنوان موضوع هزینه نگه می‌دارند؛ نتیجه نهایی یکسان است.',
            en: 'Creating a work order or a reservation posts nothing; only **real movements** (goods issues, time confirmations, service receipts) and **settlement** create entries. "Maintenance WIP" works like a temporary container that holds the costs until settlement and returns to zero afterwards. Some ERPs post costs straight to the expense account and keep the work order only as a cost object; the end result is the same.',
          },
        },
        { type: 'h', text: t('نقش‌ها و تأییدها در این جریان', 'Roles and Approvals in This Flow') },
        {
          type: 'list',
          items: [
            t('**برنامه‌ریز نگهداری**: دستور کار و رزرو را می‌سازد.', '**Maintenance planner**: creates the work order and the reservations.'),
            t('**سرپرست نگهداری**: دستور کار را در سقف اختیار خود تأیید و آزاد می‌کند.', '**Maintenance supervisor**: approves and releases the work order within their authority limit.'),
            t('**انباردار**: حواله را ثبت می‌کند و همین ثبت، سند مالی را می‌سازد.', '**Storekeeper**: posts the goods issue, and that posting creates the Finance entry.'),
            t(
              '**حسابدار بهای تمام‌شده**: قاعده تسویه و کد بازیافت را کنترل و تسویه ماهانه را اجرا می‌کند.',
              '**Cost accountant**: checks the settlement rule and recovery code and runs the monthly settlement.',
            ),
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('پیوند با بازیافت هزینه', 'The link to cost recovery'),
          text: {
            fa: 'در قراردادهای نفتی (مانند قراردادهای مشارکت در تولید، بیع متقابل یا IPC)، بهره‌بردار فقط هزینه‌هایی را می‌تواند بازیافت کند که با موضوع هزینه درست و مدارک پشتیبان ثبت شده باشند. دستور کار همان مدرک است: نشان می‌دهد چه کاری، روی کدام تجهیز، با چه قطعاتی و با چند ساعت کار انجام شده است.',
            en: 'Under petroleum contracts (such as production sharing, buy-back or IPC contracts), the operator can recover only costs recorded against the right cost object with supporting documents. The work order is that evidence: it shows what was done, on which equipment, with which parts and how many hours.',
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
          title: t('در عمل: از کجا شروع کنیم؟', 'In practice: where to start'),
          text: {
            fa: 'شرکت‌هایی که مدیریت دارایی را تازه شروع می‌کنند، معمولاً این ترتیب را دنبال می‌کنند: (1) فهرست دارایی‌ها و ساختار سلسله‌مراتبی را کامل و درست کنید؛ (2) بحرانیت تجهیزات را تعیین کنید؛ (3) برای تجهیزات بحرانی راهبرد و برنامه نگهداری بنویسید؛ (4) همه کارها را با دستور کار انجام دهید تا تاریخچه و هزینه جمع شود؛ (5) شاخص‌ها را ماهانه بررسی کنید.',
            en: 'Companies starting out in asset management usually follow this order: (1) complete and correct the asset register and hierarchy; (2) rank equipment criticality; (3) write strategies and maintenance plans for the critical equipment; (4) do all work through work orders so history and costs build up; (5) review the indicators monthly.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل: شاخص‌های رایج', 'In practice: common indicators'),
          text: {
            fa: 'دسترس‌پذیری تجهیزات بحرانی؛ نسبت کار برنامه‌ریزی‌شده به کار اضطراری (بسیاری از شرکت‌ها بیش از 80٪ کار برنامه‌ریزی‌شده را هدف می‌گیرند)؛ رعایت برنامه زمان‌بندی؛ هزینه نگهداری به ازای هر واحد تولید؛ و ارزش قطعات یدکی در انبار.',
            en: 'Availability of critical equipment; the ratio of planned to emergency work (many companies aim for more than 80% planned work); schedule compliance; maintenance cost per unit produced; and the value of spare parts in stock.',
          },
        },
        { type: 'h', text: t('اشتباه‌های رایج', 'Common Mistakes') },
        {
          type: 'list',
          items: [
            t(
              '**مدیریت دارایی را همان تعمیرات دانستن.** تعمیرات فقط یک مرحله از چرخه عمر است؛ تصمیم‌های خرید، نوسازی و کنارگذاری هم بخشی از آن‌اند.',
              '**Treating asset management as just maintenance.** Maintenance is one stage of the lifecycle; buying, renewal and retirement decisions are part of it too.',
            ),
            t('**خرید بر پایه قیمت روز.** همیشه هزینه چرخه عمر گزینه‌ها را مقایسه کنید.', '**Buying on today’s price.** Always compare the life-cycle cost of the options.'),
            t(
              '**کار بدون دستور کار.** تعمیری که دستور کار ندارد، تاریخچه ندارد، هزینه‌اش به تجهیز نمی‌رسد و قابل بازیافت نیست.',
              '**Work without a work order.** A repair without a work order has no history, its cost never reaches the equipment, and it cannot be recovered.',
            ),
            t(
              '**ثبت هزینه روی یک مرکز هزینه عمومی.** هزینه‌ای که روی «هزینه‌های متفرقه میدان» می‌نشیند، نشان نمی‌دهد کدام تجهیز گران تمام می‌شود.',
              '**Charging costs to a general cost centre.** Cost that lands on "field miscellaneous" cannot tell you which equipment is expensive.',
            ),
            t(
              '**جدا کار کردن واحدها.** اگر بهره‌برداری عیب را گزارش نکند یا مالی قاعده تسویه را کنترل نکند، کل زنجیره خراب می‌شود.',
              '**Departments working in silos.** If operations does not report defects or Finance does not check settlement rules, the whole chain breaks.',
            ),
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('یادتان باشد', 'Remember'),
          text: {
            fa: 'ERP فقط داده‌ای را که به آن می‌دهید پردازش می‌کند. اگر تجهیز یا موضوع هزینه اشتباه انتخاب شود، سند مالی خودکار هم اشتباه خواهد بود؛ فقط سریع‌تر.',
            en: 'The ERP processes only the data you give it. If the wrong equipment or the wrong cost object is chosen, the automatic Finance entry will be wrong too, just faster.',
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
          title: t('مرحله چرخه عمر', 'Lifecycle stages'),
          difficulty: 'easy',
          problem: t(
            'هر فعالیت پارس‌آریا را به یکی از مراحل چرخه عمر نسبت دهید: برنامه‌ریزی، تأمین، نصب و سرمایه‌ای کردن، بهره‌برداری و نگهداری، اصلاح یا نوسازی، کنارگذاری.',
            'Assign each Pars Arya activity to one lifecycle stage: plan, acquire, install and capitalise, operate and maintain, modify or renew, dispose.',
          ),
          given: {
            head: [t('ردیف', 'No.'), t('فعالیت', 'Activity')],
            rows: [
              [t('1', '1'), t('تصویب AFE برای کمپرسور سوم', 'Approving an AFE for a third compressor')],
              [t('2', '2'), t('سفارش کمپرسور به‌عنوان قلم با زمان تحویل طولانی', 'Ordering the compressor as a long-lead item')],
              [t('3', '3'), t('آزمایش راه‌اندازی و تحویل به بهره‌برداری', 'Commissioning tests and handover to operations')],
              [t('4', '4'), t('پایش ماهانه لرزش K-101A', 'Monthly vibration monitoring of K-101A')],
              [t('5', '5'), t('تعمیرات اساسی پس از 32,000 ساعت کارکرد', 'Overhaul after 32,000 running hours')],
              [t('6', '6'), t('مسدودسازی و متروک‌سازی چاه خشک AR-11', 'Plugging and abandoning dry well AR-11')],
            ],
          },
          hint: t('بپرسید: این کار پیش از وجود دارایی است، در لحظه تولد آن، در طول عمر، یا در پایان عمر؟', 'Ask: does this happen before the asset exists, at its birth, during its life, or at the end?'),
          solution: [
            {
              type: 'table',
              head: [t('ردیف', 'No.'), t('مرحله', 'Stage'), t('چرا', 'Why')],
              rows: [
                [t('1', '1'), t('برنامه‌ریزی', 'Plan'), t('بودجه و تصمیم سرمایه‌گذاری پیش از خرید', 'Budget and investment decision before buying')],
                [t('2', '2'), t('تأمین', 'Acquire'), t('خرید و ساخت', 'Purchase and manufacture')],
                [t('3', '3'), t('نصب و سرمایه‌ای کردن', 'Install and capitalise'), t('تحویل، ثبت در فهرست فنی و انتقال به دارایی ثابت', 'Handover, entry in the register, transfer to fixed assets')],
                [t('4', '4'), t('بهره‌برداری و نگهداری', 'Operate and maintain'), t('کار روزمره پایش در طول عمر', 'Routine monitoring during the asset’s life')],
                [t('5', '5'), t('اصلاح یا نوسازی', 'Modify or renew'), t('بازگرداندن یا افزایش عمر و عملکرد', 'Restores or extends life and performance')],
                [t('6', '6'), t('کنارگذاری', 'Dispose'), t('پایان عمر چاه و حذف از دفاتر', 'End of the well’s life and removal from the books')],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: t(
                'برای ردیف 5، مالی باید تصمیم بگیرد بخشی از هزینه تعمیرات اساسی سرمایه‌ای است یا هزینه دوره؛ این تصمیم را در درس‌های بعدی این دوره می‌بینیم.',
                'For item 5, Finance must decide whether part of the overhaul cost is capital or a period expense; we look at this decision later in the course.',
              ),
            },
          ],
          answer: t(
            '1 برنامه‌ریزی، 2 تأمین، 3 نصب و سرمایه‌ای کردن، 4 بهره‌برداری و نگهداری، 5 اصلاح یا نوسازی، 6 کنارگذاری',
            '1 Plan, 2 Acquire, 3 Install and capitalise, 4 Operate and maintain, 5 Modify or renew, 6 Dispose',
          ),
        },
        {
          type: 'exercise',
          title: t('دسترس‌پذیری کمپرسور', 'Compressor availability'),
          difficulty: 'medium',
          problem: t(
            'کمپرسور `K-101B` در یک سال (8,760 ساعت) 120 ساعت توقف برنامه‌ریزی‌شده برای سرویس و 156 ساعت توقف ناشی از خرابی داشته است. دسترس‌پذیری آن را حساب کنید. آیا هدف 97٪ برآورده شده است؟ برای رسیدن به هدف، حداکثر چند ساعت توقف مجاز بود؟',
            'Compressor `K-101B` had, in one year (8,760 hours), 120 hours of planned downtime for servicing and 156 hours of downtime from failures. Calculate its availability. Was the 97% target met? What was the maximum downtime allowed to meet the target?',
          ),
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('کل توقف', 'Total downtime'), text: t('120 + 156 = 276 ساعت', '120 + 156 = 276 hours') },
                { title: t('زمان در دسترس', 'Available time'), text: t('8,760 − 276 = 8,484 ساعت', '8,760 − 276 = 8,484 hours') },
                { title: t('دسترس‌پذیری', 'Availability'), text: t('8,484 ÷ 8,760 = 0.9685؛ یعنی حدود 96.85٪', '8,484 ÷ 8,760 = 0.9685, about 96.85%') },
                {
                  title: t('مقایسه با هدف', 'Compare with the target'),
                  text: t(
                    'توقف مجاز = 8,760 × 3٪ = 262.8 ساعت. توقف واقعی 276 ساعت، یعنی حدود 13.2 ساعت بیشتر از حد مجاز بوده است؛ هدف برآورده نشده است.',
                    'Allowed downtime = 8,760 × 3% = 262.8 hours. Actual downtime was 276 hours, about 13.2 hours over the limit, so the target was missed.',
                  ),
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: t(
                'برای بهبود، اول سراغ 156 ساعت توقف ناشی از خرابی بروید؛ این توقف‌ها پیش‌بینی‌نشده‌اند و معمولاً با گازسوزی و کاهش تولید همراه‌اند.',
                'To improve, start with the 156 hours of failure downtime; those stops are unplanned and usually bring flaring and lost production.',
              ),
            },
          ],
          answer: t(
            'دسترس‌پذیری حدود 96.85٪؛ کمتر از هدف 97٪ (توقف مجاز 262.8 ساعت، توقف واقعی 276 ساعت)',
            'Availability about 96.85%; below the 97% target (allowed 262.8 hours, actual 276 hours)',
          ),
        },
        {
          type: 'exercise',
          title: t('هزینه چرخه عمر دو پمپ', 'Life-cycle cost of two pumps'),
          difficulty: 'medium',
          problem: t(
            'پارس‌آریا باید برای ایستگاه بهره‌برداری یک پمپ میعانات بخرد. عمر مفید هر دو گزینه 15 سال و هزینه کنارگذاری هر دو 10,000 است. بر پایه هزینه چرخه عمر (بدون تنزیل) کدام را انتخاب می‌کنید؟',
            'Pars Arya must buy a condensate pump for the production station. Both options have a 15-year useful life and a disposal cost of 10,000. Based on life-cycle cost (not discounted), which do you choose?',
          ),
          given: {
            head: [t('گزینه', 'Option'), t('قیمت خرید', 'Purchase price'), t('انرژی و نگهداری سالانه', 'Annual energy and maintenance')],
            rows: [
              [t('پمپ X', 'Pump X'), 400000, 90000],
              [t('پمپ Y', 'Pump Y'), 520000, 78000],
            ],
            numericCols: [1, 2],
          },
          solution: [
            {
              type: 'table',
              head: [t('قلم', 'Item'), t('پمپ X', 'Pump X'), t('پمپ Y', 'Pump Y')],
              rows: [
                [t('قیمت خرید', 'Purchase price'), 400000, 520000],
                [t('انرژی و نگهداری (15 سال)', 'Energy and maintenance (15 years)'), 1350000, 1170000],
                [t('کنارگذاری', 'Disposal'), 10000, 10000],
                [t('جمع هزینه چرخه عمر', 'Total life-cycle cost'), 1760000, 1700000],
              ],
              numericCols: [1, 2],
            },
            {
              type: 'p',
              text: t(
                'انرژی و نگهداری: X برابر 15 × 90,000 = 1,350,000 و Y برابر 15 × 78,000 = 1,170,000. پمپ Y با اینکه 120,000 گران‌تر است، در کل عمر 60,000 ارزان‌تر تمام می‌شود.',
                'Energy and maintenance: X is 15 × 90,000 = 1,350,000 and Y is 15 × 78,000 = 1,170,000. Pump Y costs 120,000 more to buy but 60,000 less over its life.',
              ),
            },
            {
              type: 'callout',
              tone: 'info',
              text: t(
                'در عمل، متخصصان جریان‌های آینده را با یک نرخ تنزیل به ارزش فعلی برمی‌گردانند. با تنزیل، فاصله دو گزینه کمتر می‌شود، چون صرفه‌جویی پمپ Y در سال‌های آینده رخ می‌دهد.',
                'In practice, professionals discount future cash flows to present value. Discounting narrows the gap, because Pump Y’s savings arrive in future years.',
              ),
            },
          ],
          answer: t('پمپ Y: هزینه چرخه عمر 1,700,000 در برابر 1,760,000 برای پمپ X (60,000 کمتر)', 'Pump Y: life-cycle cost 1,700,000 vs 1,760,000 for Pump X (60,000 less)'),
        },
        {
          type: 'exercise',
          title: t('سندهای خودکار یک دستور کار', 'Automatic postings of a work order'),
          difficulty: 'hard',
          problem: t(
            'فرستنده سطح `LT-112` روی جداکننده `V-110` در ایستگاه بهره‌برداری خراب شده و برای آن دستور کار `WO-40009` باز شده است. رویدادهای زیر در ERP ثبت شده‌اند. سندهایی را که ERP خودکار ثبت می‌کند بنویسید و مبلغ تسویه را به دست آورید. گیرنده: مرکز هزینه ایستگاه بهره‌برداری (`PS-OPS`)، کد بازیافت: هزینه عملیاتی قابل بازیافت. مالیات بر ارزش افزوده را در نظر نگیرید.',
            'Level transmitter `LT-112` on separator `V-110` at the production station has failed, and work order `WO-40009` was opened. The events below were recorded in the ERP. Write the entries the ERP posts automatically and find the settlement amount. Receiver: the production station cost centre (`PS-OPS`); recovery code: recoverable operating cost. Ignore VAT.',
          ),
          given: {
            head: [t('رویداد', 'Event'), t('شرح', 'Detail'), t('مبلغ', 'Amount')],
            rows: [
              [t('حواله انبار', 'Goods issue'), t('یک فرستنده سطح نو از انبار میدان', 'One new level transmitter from the Field Warehouse'), 35000],
              [t('تأیید خدمات', 'Service entry'), t('کالیبراسیون توسط پیمانکار', 'Calibration by a contractor'), 12000],
              [t('فاکتور پیمانکار', 'Contractor invoice'), t('فاکتور همان خدمت', 'Invoice for the same service'), 12000],
              [t('تأیید زمان', 'Time confirmation'), t('5 ساعت تکنسین ابزاردقیق × 1,800', '5 instrument-technician hours × 1,800'), 9000],
            ],
            numericCols: [2],
          },
          hint: t('فاکتور پیمانکار هزینه تازه‌ای به دستور کار اضافه نمی‌کند؛ فقط حساب واسط GR/IR را صاف می‌کند.', 'The contractor’s invoice adds no new cost to the work order; it only clears the GR/IR account.'),
          solution: [
            {
              type: 'journal',
              entries: [
                {
                  date: t('حواله انبار', 'Goods issue'),
                  lines: [
                    { account: ac.wip, debit: 35000 },
                    { account: ac.spares, credit: 35000 },
                  ],
                },
                {
                  date: t('تأیید خدمات', 'Service entry'),
                  lines: [
                    { account: ac.wip, debit: 12000 },
                    { account: ac.grir, credit: 12000 },
                  ],
                },
                {
                  date: t('فاکتور پیمانکار', 'Contractor invoice'),
                  lines: [
                    { account: ac.grir, debit: 12000 },
                    { account: ac.ap, credit: 12000 },
                  ],
                },
                {
                  date: t('تأیید زمان', 'Time confirmation'),
                  lines: [
                    { account: ac.wip, debit: 9000 },
                    { account: ac.labour, credit: 9000 },
                  ],
                },
                {
                  date: t('تسویه پایان ماه', 'Month-end settlement'),
                  lines: [
                    { account: rm('مرکز هزینه PS-OPS', 'cost centre PS-OPS'), debit: 56000 },
                    { account: ac.wip, credit: 56000 },
                  ],
                  memo: t('برچسب بازیافت: هزینه عملیاتی قابل بازیافت', 'Recovery tag: recoverable operating cost'),
                },
              ],
            },
            {
              type: 'p',
              text: t(
                'مانده کار در جریان پیش از تسویه: 35,000 + 12,000 + 9,000 = 56,000. فاکتور فقط حساب واسط را صفر و بدهی به پیمانکار را ثبت می‌کند. پس از تسویه، مانده کار در جریان برای این دستور کار صفر است.',
                'WIP balance before settlement: 35,000 + 12,000 + 9,000 = 56,000. The invoice only clears the GR/IR account and records the debt to the contractor. After settlement the WIP balance for this order is zero.',
              ),
            },
          ],
          answer: t('مبلغ تسویه 56,000 به مرکز هزینه PS-OPS با برچسب هزینه عملیاتی قابل بازیافت', 'Settlement of 56,000 to cost centre PS-OPS, tagged as recoverable operating cost'),
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
            t(
              'مدیریت دارایی یعنی فعالیت‌های هماهنگ برای گرفتن بیشترین ارزش از دارایی‌ها در کل عمرشان، با تعادل میان عملکرد، هزینه و ریسک.',
              'Asset management is coordinated activity to get the most value from assets over their whole life, balancing performance, cost and risk.',
            ),
            t(
              'چرخه عمر: برنامه‌ریزی، تأمین، نصب و سرمایه‌ای کردن، بهره‌برداری و نگهداری، اصلاح یا نوسازی، کنارگذاری. بیشتر هزینه در مرحله بهره‌برداری و نگهداری است.',
              'The lifecycle: plan, acquire, install and capitalise, operate and maintain, modify or renew, dispose. Most of the cost falls in the operate-and-maintain stage.',
            ),
            t(
              'ISO 55000 بر ارزش، هم‌راستایی، رهبری و اطمینان تکیه دارد؛ خط دید هر دستور کار را به هدف شرکت وصل می‌کند.',
              'ISO 55000 rests on value, alignment, leadership and assurance; line of sight connects every work order to a company objective.',
            ),
            t(
              'بهره‌برداری، نگهداری، بازرسی فنی، قابلیت اطمینان، انبار و تدارکات، HSE و مالی هر کدام بخشی از کار و اسناد را در اختیار دارند.',
              'Operations, maintenance, integrity, reliability, warehouse and procurement, HSE and finance each own part of the work and the documents.',
            ),
            t(
              'ماژول EAM با انبار، تدارکات، پروژه‌ها، منابع انسانی و مالی یکپارچه است؛ فقط جابه‌جایی‌های واقعی و تسویه سند مالی خودکار می‌سازند.',
              'The EAM module is integrated with inventory, procurement, projects, HR and finance; only real movements and settlement create automatic Finance entries.',
            ),
            t(
              'هر هزینه نگهداری باید موضوع هزینه درست و مدارک کامل داشته باشد تا در قرارداد نفتی قابل بازیافت باشد.',
              'Every maintenance cost needs the right cost object and full documents to be recoverable under the petroleum contract.',
            ),
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            { term: t('مدیریت دارایی', 'Asset management'), def: t('فعالیت‌های هماهنگ سازمان برای تحقق ارزش از دارایی‌ها در کل عمر آن‌ها', 'Coordinated activity of an organisation to realise value from assets over their whole life') },
            { term: t('چرخه عمر دارایی', 'Asset lifecycle'), def: t('مسیر دارایی از برنامه‌ریزی و تأمین تا بهره‌برداری و کنارگذاری', 'The path of an asset from planning and acquisition to operation and disposal') },
            { term: t('هزینه چرخه عمر', 'Life-cycle cost'), def: t('جمع همه هزینه‌های یک دارایی از خرید تا کنارگذاری', 'The total of all costs of an asset from purchase to disposal') },
            { term: t('خط دید', 'Line of sight'), def: t('پیوند روشن میان اهداف شرکت، برنامه‌های دارایی و کار روزانه', 'A clear link between company objectives, asset plans and daily work') },
            { term: t('برنامه راهبردی مدیریت دارایی (SAMP)', 'Strategic Asset Management Plan (SAMP)'), def: t('سندی که اهداف شرکت را به اهداف و رویکرد مدیریت دارایی ترجمه می‌کند', 'A document that translates company objectives into asset management objectives and approach') },
            { term: t('دسترس‌پذیری', 'Availability'), def: t('نسبت زمانی که تجهیز آماده کار بوده به کل زمان دوره', 'The share of the period in which equipment was able to run') },
            { term: t('مالک دارایی', 'Asset owner'), def: t('فردی که درباره عملکرد، ریسک و بودجه یک دارایی پاسخ‌گوست', 'The person accountable for an asset’s performance, risk and budget') },
            { term: t('ماژول مدیریت دارایی و نگهداری (EAM)', 'Enterprise Asset Management (EAM) module'), def: t('بخشی از ERP که داده‌ها و کارهای نگهداری دارایی‌ها را مدیریت می‌کند', 'The part of the ERP that manages asset data and maintenance work') },
            { term: t('کار در جریان نگهداری', 'Maintenance WIP'), def: t('حساب موقتی که هزینه‌های دستور کار را تا تسویه نگه می‌دارد', 'A temporary account that holds work-order costs until settlement') },
            { term: t('تسویه دستور کار', 'Work-order settlement'), def: t('انتقال هزینه جمع‌شده روی دستور کار به گیرنده نهایی مانند مرکز هزینه، چاه یا AFE', 'Moving the cost collected on a work order to its final receiver such as a cost centre, well or AFE') },
            { term: t('مجوز هزینه‌کرد (AFE)', 'Authorisation for Expenditure (AFE)'), def: t('بودجه تصویب‌شده برای یک پروژه یا کار مشخص، اغلب با تأیید شرکا', 'An approved budget for a specific project or job, often approved by the partners') },
            { term: t('بازیافت هزینه', 'Cost recovery'), def: t('بازگرداندن هزینه‌های مستند بهره‌بردار از محل تولید، طبق قرارداد نفتی', 'Recovering the operator’s documented costs out of production under the petroleum contract') },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: t('کدام تعریف، مدیریت دارایی را بهتر بیان می‌کند؟', 'Which definition best describes asset management?'),
      options: [
        t('تعمیر سریع تجهیزات پس از خرابی', 'Repairing equipment quickly after it fails'),
        t('فعالیت‌های هماهنگ برای گرفتن بیشترین ارزش از دارایی‌ها در کل عمر، با تعادل هزینه، ریسک و عملکرد', 'Coordinated activity to get the most value from assets over their whole life, balancing cost, risk and performance'),
        t('نگه‌داشتن دفتر دارایی‌های ثابت برای محاسبه استهلاک', 'Keeping the fixed-asset register to calculate depreciation'),
        t('خرید ارزان‌ترین تجهیزات در هر مناقصه', 'Buying the cheapest equipment in every tender'),
      ],
      answer: 1,
      explain: t(
        'مدیریت دارایی کل عمر دارایی را می‌بیند و هزینه، ریسک و عملکرد را با هم می‌سنجد. تعمیر فقط بخشی از مرحله بهره‌برداری است و دفتر دارایی‌های ثابت فقط نگاه حسابداری را پوشش می‌دهد.',
        'Asset management looks at the whole life and weighs cost, risk and performance together. Repair is only part of the operating stage, and the fixed-asset register covers only the accounting view.',
      ),
    },
    {
      q: t('یک کمپرسور در سالی با 8,760 ساعت، 438 ساعت متوقف بوده است. دسترس‌پذیری آن چقدر است؟', 'A compressor was down for 438 hours in a year of 8,760 hours. What is its availability?'),
      options: [t('97.5٪', '97.5%'), t('5.0٪', '5.0%'), t('94.8٪', '94.8%'), t('95.0٪', '95.0%')],
      answer: 3,
      explain: t(
        'زمان در دسترس = 8,760 − 438 = 8,322 ساعت و 8,322 ÷ 8,760 = 95.0٪. عدد 5.0٪ سهم توقف است، نه دسترس‌پذیری.',
        'Available time = 8,760 − 438 = 8,322 hours, and 8,322 ÷ 8,760 = 95.0%. The 5.0% figure is the downtime share, not availability.',
      ),
    },
    {
      q: t(
        'قیمت خرید یک پمپ 1,000,000، نصب 200,000، هزینه سالانه بهره‌برداری و نگهداری 150,000 به مدت 10 سال و هزینه کنارگذاری 50,000 است. هزینه چرخه عمر (بدون تنزیل) چقدر است؟',
        'A pump costs 1,000,000 to buy, 200,000 to install, 150,000 a year to operate and maintain for 10 years, and 50,000 to dispose of. What is its life-cycle cost (not discounted)?',
      ),
      options: [t('1,250,000', '1,250,000'), t('2,750,000', '2,750,000'), t('2,700,000', '2,700,000'), t('1,400,000', '1,400,000')],
      answer: 1,
      explain: t(
        '1,000,000 + 200,000 + (10 × 150,000) + 50,000 = 2,750,000. گزینه 2,700,000 هزینه کنارگذاری را جا انداخته و 1,400,000 فقط یک سال بهره‌برداری را شمرده است.',
        '1,000,000 + 200,000 + (10 × 150,000) + 50,000 = 2,750,000. The 2,700,000 option leaves out disposal, and 1,400,000 counts only one year of operation.',
      ),
    },
    {
      q: t(
        'کمپرسور A در مناقصه 200,000 ارزان‌تر از کمپرسور B است، اما سالانه 25,000 هزینه نگهداری بیشتری دارد. در عمر 12 ساله، کدام جمله درست است؟',
        'Compressor A is 200,000 cheaper than B in the tender but costs 25,000 more a year to maintain. Over a 12-year life, which statement is true?',
      ),
      options: [
        t('A در کل عمر 100,000 ارزان‌تر است', 'A is 100,000 cheaper over its life'),
        t('A در کل عمر 200,000 ارزان‌تر است', 'A is 200,000 cheaper over its life'),
        t('A در کل عمر 100,000 گران‌تر است', 'A is 100,000 more expensive over its life'),
        t('هزینه هر دو برابر است', 'Both cost the same'),
      ],
      answer: 2,
      explain: t(
        'هزینه نگهداری اضافه A = 12 × 25,000 = 300,000. با کم کردن 200,000 صرفه‌جویی خرید، A در کل عمر 100,000 گران‌تر است. این همان دام ارزان‌ترین پیشنهاد است.',
        'A’s extra maintenance = 12 × 25,000 = 300,000. After the 200,000 purchase saving, A is 100,000 more expensive over its life. This is the cheapest-bid trap.',
      ),
    },
    {
      q: t(
        'در کدام مرحله چرخه عمر، تجهیز در فهرست فنی ثبت و مالی آن را از دارایی در جریان تکمیل به دارایی ثابت منتقل می‌کند؟',
        'At which lifecycle stage is the equipment entered in the technical register and moved by Finance from assets under construction to fixed assets?',
      ),
      options: [
        t('نصب، راه‌اندازی و سرمایه‌ای کردن', 'Install, commission and capitalise'),
        t('برنامه‌ریزی', 'Plan'),
        t('بهره‌برداری و نگهداری', 'Operate and maintain'),
        t('کنارگذاری', 'Dispose'),
      ],
      answer: 0,
      explain: t(
        'هنگام تحویل به بهره‌برداری، تجهیز «متولد» می‌شود: رکورد فنی ساخته و دارایی ثابت سرمایه‌ای می‌شود. در مرحله برنامه‌ریزی هنوز دارایی‌ای وجود ندارد.',
        'At handover the equipment is "born": its technical record is created and the fixed asset is capitalised. At the planning stage no asset exists yet.',
      ),
    },
    {
      q: t('کدام مورد جزء اندیشه‌های بنیادی ISO 55000 نیست؟', 'Which of these is NOT one of the fundamental ideas behind ISO 55000?'),
      options: [t('ارزش', 'Value'), t('هم‌راستایی', 'Alignment'), t('اطمینان', 'Assurance'), t('کمترین قیمت خرید', 'Lowest purchase price')],
      answer: 3,
      explain: t(
        'اندیشه‌های بنیادی معمولاً ارزش، هم‌راستایی، رهبری و اطمینان خلاصه می‌شوند. کمترین قیمت خرید حتی با اندیشه هزینه چرخه عمر در تضاد است.',
        'The fundamentals are usually summarised as value, alignment, leadership and assurance. Lowest purchase price even conflicts with the life-cycle-cost idea.',
      ),
    },
    {
      q: t('منظور از «خط دید» در مدیریت دارایی چیست؟', 'What does "line of sight" mean in asset management?'),
      options: [
        t('اپراتور باید تجهیز را از اتاق کنترل ببیند', 'Operators must be able to see the equipment from the control room'),
        t('همه دستور کارها باید در یک روز انجام شوند', 'All work orders must be done on the same day'),
        t('هر کار نگهداری باید از طریق برنامه‌ها به یک هدف شرکت وصل باشد', 'Every maintenance job should connect through the plans to a company objective'),
        t('مالی باید همه دستور کارها را تأیید کند', 'Finance must approve every work order'),
      ],
      answer: 2,
      explain: t(
        'خط دید زنجیره اهداف سازمان، SAMP، برنامه‌های دارایی و دستور کارهاست. بدون آن، کار روزانه ممکن است به هیچ هدفی کمک نکند.',
        'Line of sight is the chain from company objectives through the SAMP and asset plans down to work orders. Without it, daily work may serve no objective at all.',
      ),
    },
    {
      q: t('کدام رویداد در ERP هیچ سند مالی ایجاد نمی‌کند؟', 'Which ERP event creates NO Finance entry?'),
      options: [
        t('حواله قطعه از انبار به دستور کار', 'Issuing a part from the warehouse to a work order'),
        t('ساختن دستور کار و رزرو قطعات', 'Creating a work order and reserving parts'),
        t('ثبت ساعت کار تکنسین روی دستور کار', 'Confirming a technician’s hours on a work order'),
        t('تسویه پایان ماه دستور کار', 'Month-end settlement of a work order'),
      ],
      answer: 1,
      explain: t(
        'دستور کار و رزرو فقط برنامه‌اند و هنوز چیزی جابه‌جا نشده است. حواله، تأیید زمان و تسویه هر سه هزینه واقعی را جابه‌جا می‌کنند و سند خودکار می‌سازند.',
        'A work order and a reservation are only plans; nothing has moved yet. Goods issues, time confirmations and settlement all move real cost and post automatically.',
      ),
    },
    {
      q: t(
        'برای یک دستور کار، قطعاتی به ارزش 14,000 حواله و 5 ساعت کار با نرخ 1,600 ثبت شده است. مبلغ تسویه پایان ماه چقدر است؟',
        'A work order has 14,000 of parts issued and 5 hours confirmed at a rate of 1,600. What is the month-end settlement amount?',
      ),
      options: [t('22,000', '22,000'), t('14,000', '14,000'), t('8,000', '8,000'), t('15,600', '15,600')],
      answer: 0,
      explain: t(
        'دستمزد = 5 × 1,600 = 8,000. جمع روی دستور کار = 14,000 + 8,000 = 22,000 که کامل به گیرنده تسویه می‌شود. 15,600 نتیجه جمع کردن نرخ به‌جای مبلغ دستمزد است.',
        'Labour = 5 × 1,600 = 8,000. Total on the order = 14,000 + 8,000 = 22,000, all settled to the receiver. 15,600 comes from adding the rate instead of the labour amount.',
      ),
    },
    {
      q: t(
        'چرا هر هزینه نگهداری باید موضوع هزینه درست (چاه، مرکز هزینه یا AFE) و مدارک پشتیبان داشته باشد؟',
        'Why must every maintenance cost carry the right cost object (well, cost centre or AFE) and supporting documents?',
      ),
      options: [
        t('فقط برای اینکه سیستم خطا ندهد', 'Only so the system does not show an error'),
        t('چون مالیات بر ارزش افزوده آن را الزامی می‌کند', 'Because VAT rules require it'),
        t('تا تکنسین‌ها حقوق بیشتری بگیرند', 'So technicians are paid more'),
        t('تا هزینه هر دارایی معلوم و در قرارداد نفتی و حسابرسی شرکا قابل بازیافت و دفاع باشد', 'So each asset’s cost is known and can be recovered and defended under the petroleum contract and partner audits'),
      ],
      answer: 3,
      explain: t(
        'موضوع هزینه درست نشان می‌دهد هر دارایی چقدر هزینه دارد و مدارک (دستور کار، حواله، ساعت‌ها) شرط بازیافت هزینه و پاسخ به حسابرسی شرکاست. هیچ‌کدام از گزینه‌های دیگر دلیل اصلی نیست.',
        'The right cost object shows what each asset costs, and the documents (work order, goods issues, hours) are the condition for cost recovery and partner audits. None of the other options is the real reason.',
      ),
    },
  ],
}
