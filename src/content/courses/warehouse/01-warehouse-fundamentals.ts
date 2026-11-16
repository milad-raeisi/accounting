import type { Lesson } from '../../types'

/* Masar Petroleum: accounts the ERP posts to in this lesson. */
const ac = {
  spares: { fa: 'موجودی قطعات یدکی', en: 'Inventory: spare parts' },
  consumables: { fa: 'موجودی اقلام مصرفی', en: 'Inventory: consumables' },
  grir: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing account' },
  ap: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
  maintCompressor: {
    fa: 'هزینه مواد تعمیرات: ایستگاه تقویت فشار (مرکز هزینه CC-3200)',
    en: 'Maintenance materials expense: compressor station (cost centre CC-3200)',
  },
  maintProduction: {
    fa: 'هزینه مواد تعمیرات: عملیات تولید (مرکز هزینه CC-3100)',
    en: 'Maintenance materials expense: production operations (cost centre CC-3100)',
  },
}

export const lesson: Lesson = {
  slug: 'warehouse-fundamentals',
  number: 1,
  level: 'beginner',
  minutes: 24,
  icon: 'Boxes',
  tone: 'primary',
  title: { fa: 'مبانی انبارداری در شرکت نفت و گاز', en: 'Warehouse Fundamentals in Oil and Gas' },
  summary: {
    fa: 'ببینید انبار در یک شرکت بالادستی نفت و گاز چه کاری انجام می‌دهد: شبکه انبارهای مرکزی، میدان و سر دکل، انواع کالا، نقش انبار در تداوم تولید، ایمنی و هزینه، و جایگاه ماژول انبار و موجودی در ERP و ارتباط آن با تدارکات، نگهداری و مالی.',
    en: 'See what the warehouse does in an upstream oil and gas company: the network of central, field and rig-site stores, the main types of material, the warehouse’s role in keeping production running safely at a sensible cost, and where the Inventory module sits in an ERP and how it links to procurement, maintenance and finance.',
  },
  objectives: [
    {
      fa: 'توضیح دهید انبار در یک شرکت بالادستی چه وظایفی دارد و چرا نبودن یک قطعه می‌تواند تولید را متوقف کند',
      en: 'Explain what the warehouse does in an upstream company and why one missing part can stop production',
    },
    {
      fa: 'انبار مرکزی، انبار میدان و انبار سر دکل را از هم تشخیص دهید و مسیر حرکت کالا میان آنها را شرح دهید',
      en: 'Tell central, field and rig-site stores apart and trace how material moves between them',
    },
    {
      fa: 'کالاها را در گروه‌های قطعات یدکی، لوله‌های OCTG، مواد شیمیایی، اقلام مصرفی و قطعات یدکی سرمایه‌ای طبقه‌بندی کنید',
      en: 'Classify materials as spare parts, OCTG, chemicals, consumables or capital spares',
    },
    {
      fa: 'شاخص‌های اصلی عملکرد انبار مانند سطح خدمت، دقت موجودی و گردش موجودی را محاسبه کنید',
      en: 'Calculate core warehouse KPIs such as fill rate, inventory accuracy and inventory turnover',
    },
    {
      fa: 'ماژول انبار و موجودی در ERP، ارتباط آن با ماژول‌های دیگر و ثبت‌های خودکار مالی آن را توضیح دهید',
      en: 'Describe the ERP Inventory module, its links to the other modules and the Finance entries it posts automatically',
    },
  ],
  sections: [
    {
      id: 'why-warehouse',
      title: { fa: 'چرا انبار در نفت و گاز اهمیت دارد؟', en: 'Why the Warehouse Matters in Oil and Gas' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'ساعت 2 بامداد، کمپرسور K-201 در ایستگاه تقویت فشار میدان آریا از کار می‌افتد. علت، نشتی آب‌بند مکانیکی (Mechanical seal) است. اگر یک بسته آب‌بند در انبار میدان باشد، تیم تعمیرات تا ظهر کمپرسور را دوباره راه می‌اندازد. اگر نباشد، قطعه باید از سازنده خارجی سفارش داده شود و زمان تحویل آن 16 هفته است؛ در این مدت تولید گاز چند چاه کاهش می‌یابد. فاصله میان این دو سناریو، دقیقاً همان کاری است که یک انبار خوب انجام می‌دهد.',
            en: 'At 2 a.m. the K-201 compressor at the Arya field compressor station trips. The cause is a leaking mechanical seal. If a seal kit is on the shelf in the Field Warehouse, the maintenance crew has the compressor running again by noon. If not, the part has to be ordered from the manufacturer abroad with a 16-week lead time, and gas production from several wells is cut back in the meantime. The gap between those two stories is exactly what a good warehouse is for.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'در این دوره با **شرکت مسار پترولیوم** همراه می‌شویم: یک شرکت بالادستی که میدان خشکی **آریا** را با چاه‌های AR-01 تا AR-12 و یک ایستگاه تقویت فشار گاز، از طرف یک مشارکت (Joint venture) با چند شریک، بهره‌برداری می‌کند. مسار پترولیوم یک **انبار مرکزی** و یک **انبار میدان** دارد.',
            en: 'Throughout this course we follow **Masar Petroleum**, an upstream company that operates the onshore **Arya field** (wells AR-01 to AR-12 and a gas compressor station) on behalf of a joint venture with several partners. Masar Petroleum runs a **Central Warehouse** and a **Field Warehouse**.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**انبار** در یک شرکت نفت و گاز فقط یک ساختمان نیست؛ یک مکان کنترل‌شده به‌علاوه مجموعه‌ای از فرایندهاست برای دریافت، بازرسی، نگهداری، حفاظت، تحویل و حسابداری کالا. هدف آن این است که **کالای درست، با کیفیت و مدارک درست، در زمان و مکان درست و با هزینه معقول** در دسترس باشد. به این رشته **انبارداری و کنترل موجودی** می‌گوییم.',
            en: 'In an oil and gas company a **warehouse** is not just a building. It is a controlled place plus a set of processes to receive, inspect, store, preserve, issue and account for materials. Its aim is to have **the right item, in the right condition and with the right documents, at the right place and time, at a sensible cost**. The discipline is called **warehousing and inventory control**.',
          },
        },
        {
          type: 'list',
          ordered: true,
          items: [
            {
              fa: '**دریافت**: کالا را در برابر سفارش خرید تحویل بگیرد، بشمارد، بازرسی کند و گواهی‌هایش را کنترل کند.',
              en: '**Receive**: accept goods against a purchase order, count them, inspect them and check their certificates.',
            },
            {
              fa: '**نگهداری و حفاظت**: هر قلم را در جای مشخص و در وضعیتی مانند روز اول نگه دارد.',
              en: '**Store and preserve**: keep every item in a known location and in as-new condition.',
            },
            {
              fa: '**تحویل (صدور)**: کالا را با سند تأییدشده به مصرف‌کننده درست بدهد: دستور کار، چاه یا مرکز هزینه.',
              en: '**Issue**: hand material to the right user (a work order, a well or a cost centre) against an approved document.',
            },
            {
              fa: '**کنترل**: با شمارش و پیگیری اختلاف‌ها، موجودی سیستم را با موجودی واقعی برابر نگه دارد.',
              en: '**Control**: keep the system quantity equal to the physical quantity through counts and follow-up of differences.',
            },
            {
              fa: '**گزارش و حسابداری**: هر جابه‌جایی را در ERP ثبت کند تا اثر مالی آن خودکار به دفاتر برسد.',
              en: '**Report and account**: record every movement in the ERP so that its financial effect reaches the books automatically.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'هزینه نبودن یک قطعه', en: 'The cost of a missing part' },
          text: {
            fa: 'یک بسته آب‌بند K-201 حدود 1,800 قیمت دارد. اگر هزینه نگهداری موجودی را 20٪ در سال فرض کنیم (نرخی فرضی که در سراسر این دوره به کار می‌بریم)، نگه داشتن آن در انبار سالی 360 هزینه دارد. حالا فرض کنید قطعه در انبار نباشد و حتی با حمل هوایی اضطراری 10 روز طول بکشد تا برسد. اگر هر روز توقف کمپرسور 25,000 زیان تولید داشته باشد، زیان این 10 روز 250,000 است؛ یعنی نزدیک به 139 برابر قیمت خود قطعه.',
            en: 'A K-201 seal kit costs about 1,800. If we assume a carrying cost of 20% a year (an illustrative rate used throughout this course), holding it in stock costs 360 a year. Now suppose it is not in stock and even emergency airfreight takes 10 days. If each day of compressor downtime loses 25,000 of production, those 10 days cost 250,000, nearly 139 times the price of the part.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'هدف: تعادل، نه قفسه‌های پُر', en: 'The goal is balance, not full shelves' },
          text: {
            fa: 'انبار خوب انباری نیست که همه چیز در آن باشد. موجودی زیاد سرمایه را حبس می‌کند، فضا و مراقبت می‌خواهد و کالا کهنه یا تاریخ‌گذشته می‌شود. هدف، **در دسترس بودن کالای مهم با کمترین هزینه کل** است.',
            en: 'A good warehouse is not one that holds everything. Too much stock ties up cash, needs space and care, and goes obsolete or past its shelf life. The goal is **availability of what matters at the lowest total cost**.',
          },
        },
      ],
    },
    {
      id: 'store-network',
      title: { fa: 'شبکه انبارها: مرکزی، میدان، سر دکل و دریایی', en: 'The Store Network: Central, Field, Rig-Site and Offshore' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'یک شرکت بالادستی معمولاً فقط یک انبار ندارد، بلکه **شبکه‌ای از انبارها** دارد. کالا معمولاً از تأمین‌کننده به انبار مرکزی می‌رسد و از آنجا به انبارهایی که به محل مصرف نزدیک‌ترند منتقل می‌شود. هر سطح نقش متفاوتی دارد.',
            en: 'An upstream company rarely has just one warehouse; it runs a **network of stores**. Material usually arrives from the vendor at a central warehouse and is then moved to stores closer to where it will be used. Each level has a different job.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'سطوح شبکه انبار در مسار پترولیوم', en: 'The store levels at Masar Petroleum' },
          head: [
            { fa: 'نوع انبار', en: 'Store type' },
            { fa: 'محل', en: 'Location' },
            { fa: 'موجودی معمول', en: 'Typical stock' },
            { fa: 'مصرف‌کننده اصلی', en: 'Main users' },
            { fa: 'در مسار پترولیوم', en: 'At Masar Petroleum' },
          ],
          rows: [
            [
              { fa: 'انبار مرکزی', en: 'Central warehouse' },
              { fa: 'پایگاه پشتیبانی نزدیک شهر و مسیرهای اصلی حمل', en: 'Logistics base near a city and the main transport routes' },
              {
                fa: 'قطعات کم‌گردش و سرمایه‌ای، محوطه لوله، مواد شیمیایی به مقدار زیاد',
                en: 'Slow-moving and capital spares, the pipe yard, bulk chemicals',
              },
              { fa: 'همه سایت‌ها؛ از همه تأمین‌کنندگان کالا می‌گیرد', en: 'All sites; receives from all vendors' },
              { fa: 'انبار مرکزی (سایت MP10)', en: 'Central Warehouse (site MP10)' },
            ],
            [
              { fa: 'انبار میدان', en: 'Field warehouse' },
              { fa: 'داخل میدان، نزدیک تأسیسات', en: 'Inside the field, close to the facilities' },
              {
                fa: 'قطعات پرمصرف، اقلام مصرفی، مواد شیمیایی روزانه، قطعات حیاتی ایستگاه تقویت فشار',
                en: 'Fast-moving spares, consumables, day-to-day chemicals, critical spares for the compressor station',
              },
              { fa: 'تیم‌های تعمیرات و بهره‌برداری', en: 'Maintenance and production crews' },
              { fa: 'انبار میدان (سایت MP20)', en: 'Field Warehouse (site MP20)' },
            ],
            [
              { fa: 'انبار سر دکل (محل چاه)', en: 'Rig-site store' },
              { fa: 'کنار دکل حفاری؛ با جابه‌جایی دکل جابه‌جا می‌شود', en: 'Next to the drilling rig; moves when the rig moves' },
              {
                fa: 'لوله جداری و مغزی، قطعات سرچاهی، مواد گل حفاری و سیمان برای چاه در حال حفاری',
                en: 'Casing, tubing, wellhead parts, mud and cement chemicals for the well being drilled',
              },
              { fa: 'تیم حفاری و پیمانکاران', en: 'Drilling team and contractors' },
              { fa: 'انبار سر دکل چاه AR-12', en: 'Rig-site store for well AR-12' },
            ],
            [
              { fa: 'انبار سکو و پایگاه دریایی', en: 'Offshore platform store and supply base' },
              { fa: 'روی سکو، با یک پایگاه پشتیبانی در ساحل', en: 'On the platform, backed by an onshore supply base' },
              {
                fa: 'فضای بسیار محدود؛ هر قلم با شناور پشتیبانی و فهرست بار (Manifest) می‌رسد',
                en: 'Very limited space; everything arrives by supply vessel with a cargo manifest',
              },
              { fa: 'خدمه سکو', en: 'Platform crew' },
              { fa: 'میدان آریا خشکی است؛ اصول همان است', en: 'Arya is onshore; the same principles apply' },
            ],
          ],
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'خرید و رسید', en: 'Purchase and receipt' },
              text: {
                fa: 'تأمین‌کننده کالا را به انبار مرکزی تحویل می‌دهد. انباردار آن را در برابر سفارش خرید می‌شمارد، بازرسی می‌کند و **رسید کالا (GRN)** را در ERP ثبت می‌کند. (خدمات، مثلاً سیمان‌کاری چاه، از انبار عبور نمی‌کنند؛ آنها با پذیرش **برگه ثبت خدمات (SES)** تحویل گرفته می‌شوند.)',
                en: 'The vendor delivers to the Central Warehouse. The storekeeper counts and inspects the goods against the purchase order and posts the **goods received note (GRN)** in the ERP. (Services, such as cementing a well, never pass through the warehouse; they are received by accepting a **service entry sheet (SES)**.)',
              },
            },
            {
              title: { fa: 'چیدمان و نگهداری', en: 'Put-away and storage' },
              text: {
                fa: 'کالا در یک جایگاه مشخص (Bin) قرار می‌گیرد و طبق دستورالعمل حفاظت از کالا نگهداری می‌شود.',
                en: 'The item is put away in a known bin and looked after according to its preservation instructions.',
              },
            },
            {
              title: { fa: 'انتقال بین انبارها', en: 'Stock transfer' },
              text: {
                fa: 'وقتی موجودی انبار میدان به نقطه سفارش می‌رسد، با سند انتقال از انبار مرکزی تأمین می‌شود. در طول مسیر، ERP کالا را به‌صورت «کالای در راه» نشان می‌دهد.',
                en: 'When Field Warehouse stock reaches its reorder point, it is replenished from the Central Warehouse with a stock transfer document. On the road, the ERP shows the goods as stock in transit.',
              },
            },
            {
              title: { fa: 'رزرو و حواله', en: 'Reservation and issue' },
              text: {
                fa: 'برنامه‌ریز تعمیرات قطعه را برای یک دستور کار رزرو می‌کند و انباردار با حواله انبار آن را تحویل می‌دهد. هزینه به همان دستور کار و تجهیز می‌رسد.',
                en: 'The maintenance planner reserves the part for a work order and the storekeeper issues it with a goods issue. The cost lands on that work order and its equipment.',
              },
            },
            {
              title: { fa: 'برگشت از مصرف', en: 'Return' },
              text: {
                fa: 'اگر قطعه مصرف نشد، با سند برگشت به انبار بازمی‌گردد تا هزینه از دستور کار کم و دوباره به موجودی اضافه شود.',
                en: 'If the part is not used, it comes back with a return document, so the cost is taken off the work order and added back to stock.',
              },
            },
          ],
        },
        {
          type: 'diagram',
          id: 'warehouse-flow',
          caption: {
            fa: 'مسیر کالا در انبار: رسید، بازرسی، چیدمان، نگهداری، رزرو و حواله، همراه با سند هر مرحله.',
            en: 'The path of material through a warehouse: receipt, inspection, put-away, storage, reservation and issue, with the document at each step.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'کالای تحویلی کارفرما به پیمانکار', en: 'Free-issue material to contractors' },
          text: {
            fa: 'در حفاری، شرکت عامل (اپراتور) اغلب لوله جداری و مغزی و تجهیزات سرچاهی را خودش می‌خرد و به پیمانکار حفاری تحویل می‌دهد. این کالاها تا زمانی که در چاه نصب نشده‌اند یا برنگشته‌اند، **دارایی اپراتور** هستند و باید جدا از اموال پیمانکار نگهداری و ردیابی شوند.',
            en: 'In drilling, the operator often buys the casing, tubing and wellhead equipment itself and hands them to the drilling contractor (free-issue). Until they are installed in the well or returned, these items remain **the operator’s property** and must be kept and tracked separately from the contractor’s own equipment.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در بسیاری از شرکت‌های عملیاتی نفت و گاز در ایران، انبار مرکزی در یک پایگاه پشتیبانی نزدیک شهر یا مسیر اصلی حمل قرار دارد و هر میدان یک انبار عملیاتی دارد. جابه‌جایی میان آنها با **حواله انتقال** در انبار مبدأ و **رسید انتقالی** در انبار مقصد انجام می‌شود تا کالای در راه هم از دید خارج نشود.',
            en: 'Many oil and gas operating companies in Iran keep a central warehouse at a logistics base near a city or main transport route, with an operating store at each field. Moves between them use a **transfer issue** at the sending store and a **transfer receipt** at the receiving store, so goods in transit never drop out of sight.',
          },
        },
      ],
    },
    {
      id: 'material-types',
      title: { fa: 'انواع کالا در انبار نفت و گاز', en: 'Types of Material in an Oil and Gas Warehouse' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'انبار یک شرکت بالادستی هزاران قلم کالا دارد؛ از دستکش ایمنی تا روتور یدکی کمپرسور. کالاها را بر اساس **رفتارشان** گروه‌بندی می‌کنیم، چون هر گروه به شکل متفاوتی نگهداری، کنترل و حسابداری می‌شود.',
            en: 'An upstream warehouse holds thousands of items, from safety gloves to a spare compressor rotor. We group them by **how they behave**, because each group is stored, controlled and accounted for differently.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'پنج گروه اصلی کالا', en: 'The five main material groups' },
          head: [
            { fa: 'گروه', en: 'Group' },
            { fa: 'نمونه‌ها', en: 'Examples' },
            { fa: 'ویژگی مهم', en: 'What makes it special' },
            { fa: 'نحوه کنترل', en: 'How it is controlled' },
          ],
          rows: [
            [
              { fa: 'قطعات یدکی', en: 'Spare parts' },
              {
                fa: 'آب‌بند مکانیکی، یاتاقان، شیر، پروانه پمپ، ترانسمیتر فشار',
                en: 'Mechanical seals, bearings, valves, pump impellers, pressure transmitters',
              },
              { fa: 'به تجهیز مشخصی وابسته‌اند و بعضی حیاتی‌اند', en: 'Tied to specific equipment; some are critical' },
              {
                fa: 'درجه بحرانی بودن، شماره قطعه سازنده، ارتباط با فهرست قطعات تجهیز',
                en: 'Criticality, manufacturer part number, link to the equipment’s parts list',
              },
            ],
            [
              { fa: 'لوله‌های OCTG', en: 'OCTG' },
              { fa: 'لوله جداری، لوله مغزی، لوله حفاری، کوپلینگ', en: 'Casing, tubing, drill pipe, couplings' },
              { fa: 'سنگین و گران؛ گرید فولاد و نوع رزوه تعیین‌کننده است', en: 'Heavy and expensive; steel grade and thread type are decisive' },
              {
                fa: 'شماره ذوب و گواهی آزمون، اندازه‌گیری طول (Pipe tally)، نگهداری در محوطه لوله',
                en: 'Heat number and mill certificate, measured length (pipe tally), pipe-yard preservation',
              },
            ],
            [
              { fa: 'مواد شیمیایی', en: 'Chemicals' },
              {
                fa: 'باریت و بنتونیت گل حفاری، افزودنی‌های سیمان، بازدارنده خوردگی، امولسیون‌شکن، متانول',
                en: 'Barite and bentonite for drilling mud, cement additives, corrosion inhibitor, demulsifier, methanol',
              },
              { fa: 'خطرناک و دارای عمر انبارداری', en: 'Hazardous and with a limited shelf life' },
              {
                fa: 'برگه اطلاعات ایمنی (SDS)، بچ، جداسازی مواد ناسازگار، اول‌منقضی‌اول‌خروج',
                en: 'Safety data sheet (SDS), batch, segregation of incompatibles, first-expired-first-out',
              },
            ],
            [
              { fa: 'اقلام مصرفی', en: 'Consumables' },
              {
                fa: 'واشر، پیچ و مهره، فیلتر، الکترود جوشکاری، روغن، تجهیزات حفاظت فردی',
                en: 'Gaskets, studs and nuts, filters, welding rods, lubricants, personal protective equipment',
              },
              { fa: 'ارزش کم، مصرف زیاد', en: 'Low value, high volume' },
              { fa: 'نقطه سفارش، تحویل به مرکز هزینه', en: 'Reorder point, issue to a cost centre' },
            ],
            [
              { fa: 'قطعات یدکی سرمایه‌ای (بیمه‌ای)', en: 'Capital (insurance) spares' },
              {
                fa: 'روتور یدکی کمپرسور، ترانسفورماتور یدکی، ماژول توربین گازی',
                en: 'Spare compressor rotor, spare transformer, gas turbine module',
              },
              { fa: 'بسیار گران، کم‌مصرف و حیاتی', en: 'Very expensive, rarely used and critical' },
              {
                fa: 'شماره سریال، برنامه حفاظت ویژه؛ ممکن است دارایی ثابت باشد نه موجودی',
                en: 'Serial number, special preservation; may be property, plant and equipment rather than inventory',
              },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'OCTG به زبان ساده', en: 'OCTG in plain words' },
          text: {
            fa: '**OCTG** (Oil Country Tubular Goods) نام عمومی لوله‌های چاه است. **لوله جداری (Casing)** دیواره چاه را می‌پوشاند و از ریزش و نشت جلوگیری می‌کند؛ **لوله مغزی (Tubing)** درون لوله جداری قرار می‌گیرد و نفت یا گاز از آن به سطح می‌آید؛ **لوله حفاری (Drill pipe)** هنگام حفاری مته را می‌چرخاند. مشخصات لوله جداری و مغزی معمولاً بر پایه استاندارد API 5CT تعیین می‌شود: قطر، وزن در واحد طول، گرید فولاد (مثلاً L80 یا P110) و نوع اتصال رزوه.',
            en: '**OCTG** (Oil Country Tubular Goods) is the umbrella name for well pipe. **Casing** lines the borehole and stops it collapsing or leaking; **tubing** runs inside the casing and carries oil or gas to surface; **drill pipe** turns the bit while drilling. Casing and tubing are usually specified to API 5CT: diameter, weight per unit length, steel grade (for example L80 or P110) and connection type.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**کالای انباری و غیرانباری**: کالای انباری در موجودی نگهداری و ارزش‌گذاری می‌شود؛ کالای غیرانباری (خرید مستقیم) برای یک کار مشخص خریده می‌شود و هنگام رسید مستقیماً به محل هزینه (چاه، AFE یا دستور کار) می‌رود.',
              en: '**Stock and non-stock items**: stock items are held and valued in inventory; non-stock (direct-charge) items are bought for a specific job and charged straight to the cost object (well, AFE or work order) on receipt.',
            },
            {
              fa: '**اقلام قابل تعمیر (چرخشی)**: قطعه‌ای مانند کارتریج آب‌بند که پس از خرابی پیاده، تعمیر و دوباره به انبار برگردانده می‌شود و با شماره سریال دنبال می‌شود.',
              en: '**Repairable (rotable) items**: a part such as a seal cartridge that is removed, repaired and returned to stock, tracked by serial number.',
            },
            {
              fa: '**مازاد، راکد و اسقاط**: کالایی که مصرف قابل پیش‌بینی ندارد. باید شناسایی و گزارش شود و طبق روش مصوب منتقل، واگذار یا اسقاط شود.',
              en: '**Surplus, obsolete and scrap**: items with no foreseeable use. They must be identified, reported and redeployed, sold or scrapped under an approved procedure.',
            },
          ],
        },
        {
          type: 'table',
          caption: {
            fa: 'ترکیب موجودی مسار پترولیوم در پایان سال (انبار مرکزی و انبار میدان)',
            en: 'Masar Petroleum’s year-end inventory mix (Central and Field Warehouses)',
          },
          head: [
            { fa: 'گروه', en: 'Group' },
            { fa: 'ارزش', en: 'Value' },
            { fa: 'سهم', en: 'Share' },
          ],
          numericCols: [1, 2],
          rows: [
            [{ fa: 'قطعات یدکی', en: 'Spare parts' }, 6600000, { fa: '40٪', en: '40%' }],
            [{ fa: 'لوله‌های OCTG', en: 'OCTG' }, 4950000, { fa: '30٪', en: '30%' }],
            [{ fa: 'مواد شیمیایی', en: 'Chemicals' }, 2475000, { fa: '15٪', en: '15%' }],
            [{ fa: 'اقلام مصرفی', en: 'Consumables' }, 1650000, { fa: '10٪', en: '10%' }],
            [{ fa: 'قطعات سرمایه‌ای نگهداری‌شده در موجودی', en: 'Capital spares held in inventory' }, 825000, { fa: '5٪', en: '5%' }],
            [{ fa: 'جمع', en: 'Total' }, 16500000, { fa: '100٪', en: '100%' }],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل (IFRS)', en: 'In practice (IFRS)' },
          text: {
            fa: 'طبق IAS 2، موجودی کالا به **اقل بهای تمام‌شده و خالص ارزش فروش** اندازه‌گیری می‌شود. طبق IAS 16، قطعات یدکی، تجهیزات آماده‌به‌کار و تجهیزات تعمیراتی اگر تعریف دارایی ثابت مشهود را داشته باشند (مثلاً انتظار برود بیش از یک دوره استفاده شوند)، **دارایی ثابت** هستند و گرنه موجودی. به همین دلیل روتور یدکی اختصاصی یک کمپرسور معمولاً به دارایی ثابت منظور و مستهلک می‌شود. تصمیم نهایی با واحد مالی است، اما انبار باید این اقلام را در داده پایه علامت‌گذاری کند. استانداردهای حسابداری ایران نیز در این دو موضوع رویکرد مشابهی دارند.',
            en: 'Under IAS 2, inventory is measured at **the lower of cost and net realisable value**. Under IAS 16, spare parts, stand-by equipment and servicing equipment are **property, plant and equipment** when they meet that definition (for example, they are expected to be used for more than one period); otherwise they are inventory. That is why a spare rotor dedicated to one compressor is usually capitalised and depreciated. Finance makes the final call, but the warehouse must flag such items in the master data. Iranian accounting standards take a similar approach on both topics.',
          },
        },
      ],
    },
    {
      id: 'ops-safety-cost',
      title: { fa: 'نقش انبار در عملیات، ایمنی و هزینه', en: 'The Warehouse’s Role in Operations, Safety and Cost' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'سه گروه از انبار سه انتظار متفاوت دارند: **بهره‌برداری و تعمیرات** می‌خواهند همه چیز همیشه موجود باشد؛ **مالی** می‌خواهد پول کمتری در موجودی حبس شود؛ و **HSE** می‌خواهد کالا ایمن نگهداری و جابه‌جا شود و فقط کالای دارای گواهی معتبر نصب شود. مدیریت انبار یعنی برقراری تعادل میان این سه.',
            en: 'Three groups expect three different things from the warehouse: **operations and maintenance** want everything always available; **finance** wants less cash tied up in stock; and **HSE** wants material stored and handled safely, with only properly certified material installed. Running a warehouse means balancing all three.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'موجودی خیلی کم', en: 'Too little stock' },
            items: [
              { fa: 'توقف تولید یا حفاری به خاطر یک قطعه', en: 'Production or drilling stops for want of one part' },
              { fa: 'خرید اضطراری با قیمت بالا و حمل هوایی', en: 'Emergency purchases at premium prices and by airfreight' },
              { fa: 'هزینه انتظار دکل حفاری که روزانه پرداخت می‌شود', en: 'Rig standby charges paid by the day' },
              { fa: 'وسوسه نصب قطعه جایگزین تأییدنشده: یک خطر ایمنی', en: 'The temptation to fit an unapproved substitute: a safety risk' },
            ],
          },
          right: {
            title: { fa: 'موجودی خیلی زیاد', en: 'Too much stock' },
            items: [
              { fa: 'سرمایه حبس‌شده و هزینه تأمین مالی آن', en: 'Cash tied up, with its financing cost' },
              { fa: 'فضای انبار، بیمه و هزینه حفاظت از کالا', en: 'Warehouse space, insurance and preservation costs' },
              { fa: 'کهنگی و انقضای کالا (مواد شیمیایی، آب‌بندهای لاستیکی)', en: 'Obsolescence and expiry (chemicals, elastomer seals)' },
              { fa: 'زیان کاهش ارزش و اسقاط که سود را کم می‌کند', en: 'Write-downs and scrapping that reduce profit' },
            ],
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'هزینه نگهداری سالانه موجودی = میانگین ارزش موجودی × نرخ هزینه نگهداری',
            en: 'Annual carrying cost = average inventory value × carrying cost rate',
          },
          note: {
            fa: 'نرخ هزینه نگهداری شامل هزینه سرمایه، فضا، بیمه، حفاظت و کهنگی است و در هر شرکت متفاوت است. در این دوره آن را 20٪ در سال فرض می‌کنیم.',
            en: 'The carrying cost rate covers the cost of capital, space, insurance, preservation and obsolescence, and differs from company to company. In this course we assume 20% a year.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'انبار میدان مسار پترولیوم', en: 'Masar Petroleum’s Field Warehouse' },
          text: {
            fa: 'میانگین ارزش موجودی انبار میدان 4,800,000 است. با نرخ 20٪، هزینه نگهداری سالانه آن 4,800,000 × 20٪ = 960,000 می‌شود. بررسی نشان داد 600,000 از این موجودی 12 ماه هیچ گردشی نداشته است. اگر این اقلام به میدان دیگری منتقل یا واگذار شوند، سالانه 600,000 × 20٪ = 120,000 صرفه‌جویی می‌شود.',
            en: 'The Field Warehouse holds an average inventory of 4,800,000. At 20%, its annual carrying cost is 4,800,000 × 20% = 960,000. A review found that 600,000 of that stock had not moved for 12 months. Redeploying or disposing of those items would save 600,000 × 20% = 120,000 a year.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**نقش ایمنی انبار** مستقیم است. لوله یا فلنجی با گرید اشتباه در خط گاز پرفشار می‌تواند به نشت یا انفجار برسد؛ برای همین انبار باید هر کالای دارای گواهی را تا شماره ذوب و گواهی آزمون آن قابل ردیابی نگه دارد. مواد شیمیایی خطرناک، سیلندرهای گاز و جابه‌جایی بارهای سنگین مانند بسته‌های لوله هم خطرهای روزانه انبارند که در درس «ساختار انبار، چیدمان و HSE» به آنها می‌پردازیم.',
            en: '**The warehouse’s safety role** is direct. A pipe or flange of the wrong grade in a high-pressure gas line can lead to a leak or an explosion, so the warehouse must keep every certified item traceable to its heat number and mill certificate. Hazardous chemicals, gas cylinders and heavy lifts such as pipe bundles are everyday warehouse hazards too; we cover them in the lesson on warehouse structure, layout and HSE.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**نقش هزینه‌ای انبار** هم فقط به ارزش موجودی محدود نیست. هر قلمی که از انبار خارج می‌شود، هزینه یک **محل هزینه** مشخص می‌شود: یک چاه، یک AFE (مجوز هزینه‌کرد)، یک دستور کار یا یک مرکز هزینه. در قراردادهای نفتی مانند قراردادهای مشارکت در تولید یا قرارداد نفتی ایران (IPC)، پیمانکار هزینه‌های مجاز را از محل تولید بازیافت می‌کند (**کاست ریکاوری**)، به شرطی که هزینه روی محل درست ثبت شده و مدارک پشتیبان داشته باشد. حواله‌ای که محل هزینه یا امضای تحویل‌گیرنده ندارد، ممکن است در حسابرسی رد شود.',
            en: '**The warehouse’s cost role** goes beyond the value on the shelves. Every item that leaves the store becomes a cost of a specific **cost object**: a well, an AFE (authorisation for expenditure), a work order or a cost centre. Under petroleum contracts such as production sharing contracts or the Iran Petroleum Contract (IPC), the contractor recovers allowable costs out of production (**cost recovery**), provided each cost is booked to the right object and backed by documents. An issue with no cost object or no receiver’s signature may be rejected at audit.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'چهار شاخص اصلی انبار میدان در سال گذشته', en: 'Four core KPIs for the Field Warehouse last year' },
          head: [
            { fa: 'شاخص', en: 'KPI' },
            { fa: 'فرمول', en: 'Formula' },
            { fa: 'محاسبه', en: 'Calculation' },
            { fa: 'نتیجه', en: 'Result' },
          ],
          rows: [
            [
              { fa: 'سطح خدمت (نرخ تأمین درخواست)', en: 'Fill rate' },
              {
                fa: 'ردیف‌های تحویل‌شده کامل در اولین درخواست ÷ کل ردیف‌های درخواست',
                en: 'Lines issued in full on first request ÷ total lines requested',
              },
              { fa: '1,140 ÷ 1,200', en: '1,140 ÷ 1,200' },
              { fa: '95٪', en: '95%' },
            ],
            [
              { fa: 'دقت موجودی', en: 'Inventory accuracy' },
              { fa: 'جایگاه‌های بدون اختلاف ÷ جایگاه‌های شمارش‌شده', en: 'Bins counted with no difference ÷ bins counted' },
              { fa: '485 ÷ 500', en: '485 ÷ 500' },
              { fa: '97٪', en: '97%' },
            ],
            [
              { fa: 'گردش موجودی', en: 'Inventory turnover' },
              { fa: 'ارزش حواله‌های سال ÷ میانگین ارزش موجودی', en: 'Annual issues at cost ÷ average inventory' },
              { fa: '3,600,000 ÷ 4,800,000', en: '3,600,000 ÷ 4,800,000' },
              { fa: '0.75 بار', en: '0.75 times' },
            ],
            [
              { fa: 'سهم موجودی راکد', en: 'Slow-moving share' },
              {
                fa: 'ارزش اقلام بدون گردش در 12 ماه ÷ میانگین ارزش موجودی',
                en: 'Value of items with no movement in 12 months ÷ average inventory',
              },
              { fa: '600,000 ÷ 4,800,000', en: '600,000 ÷ 4,800,000' },
              { fa: '12.5٪', en: '12.5%' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباهات رایج', en: 'Common mistakes' },
          text: {
            fa: 'تحویل کالا «به اعتماد» و ثبت حواله در روزهای بعد، که موجودی سیستم را غلط و هزینه را بی‌صاحب می‌کند؛ ثبت کالای مصرف‌شده در چاه روی یک مرکز هزینه عمومی، که کاست ریکاوری و صورت‌حساب شرکا را خراب می‌کند؛ نگه داشتن قطعه حیاتی فقط در انبار مرکزی و دور از میدان؛ انبار کردن «همه چیز برای احتیاط»؛ و قاطی شدن اموال اپراتور با اموال پیمانکار در انبار سر دکل.',
            en: 'Handing out material “on trust” and posting the issue days later, which leaves system stock wrong and the cost with no owner; booking material used in a well to a general cost centre, which breaks cost recovery and partner billing; keeping a critical spare only in the Central Warehouse, far from the field; stocking “everything, just in case”; and mixing operator property with contractor property at the rig site.',
          },
        },
      ],
    },
    {
      id: 'erp-inventory',
      title: { fa: 'ماژول انبار و موجودی در ERP', en: 'The Inventory and Warehouse Module in an ERP' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**سیستم برنامه‌ریزی منابع سازمان (ERP)** یک نرم‌افزار یکپارچه با یک پایگاه داده مشترک است که از چند **ماژول** تشکیل می‌شود: مالی، تدارکات، انبار و موجودی، مدیریت دارایی و نگهداری، پروژه‌ها و منابع انسانی. وقتی انباردار سندی را ثبت می‌کند، ماژول‌های دیگر همان لحظه آن را می‌بینند و نیازی به ورود دوباره داده نیست.',
            en: 'An **enterprise resource planning (ERP)** system is one integrated application with a shared database, made of several **modules**: Finance, Procurement, Inventory and Warehouse, Asset Management (maintenance), Projects and HR. When a storekeeper posts a document, the other modules see it at once, and nobody re-keys the data.',
          },
        },
        {
          type: 'diagram',
          id: 'erp-modules',
          caption: {
            fa: 'ماژول‌های اصلی ERP و جریان داده میان آنها؛ هر جابه‌جایی ارزشی در انبار به دفتر کل مالی می‌رسد.',
            en: 'The main ERP modules and the data flowing between them; every valued warehouse movement reaches the Finance general ledger.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'در ERP دو نوع داده داریم. **داده پایه (Master data)** اطلاعاتی است که کم تغییر می‌کند و بارها استفاده می‌شود، مانند مشخصات کالا یا مرکز هزینه. **داده تراکنشی** یک رویداد را در یک لحظه ثبت می‌کند، مانند یک رسید یا یک حواله، و از داده پایه استفاده می‌کند.',
            en: 'An ERP holds two kinds of data. **Master data** changes rarely and is used again and again, such as a material’s description or a cost centre. **Transaction data** records one event at one moment, such as a receipt or an issue, and draws on the master data.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'داده‌ها و اسناد اصلی ماژول انبار', en: 'Main data and documents of the Inventory module' },
          head: [
            { fa: 'داده یا سند', en: 'Data or document' },
            { fa: 'نوع', en: 'Type' },
            { fa: 'چه کسی ایجاد می‌کند', en: 'Created by' },
            { fa: 'اثر', en: 'Effect' },
          ],
          rows: [
            [
              { fa: 'داده پایه کالا', en: 'Material master' },
              { fa: 'داده پایه', en: 'Master' },
              { fa: 'تیم داده پایه', en: 'Master data team' },
              { fa: 'تعریف کالا، واحد سنجش و کلاس ارزش‌گذاری', en: 'Defines the item, its unit of measure and valuation class' },
            ],
            [
              { fa: 'سایت، محل نگهداری و جایگاه', en: 'Site, storage location and bin' },
              { fa: 'داده پایه', en: 'Master' },
              { fa: 'سرپرست انبار با تیم ERP', en: 'Warehouse supervisor with the ERP team' },
              { fa: 'محل دقیق نگهداری موجودی', en: 'Where exactly stock sits' },
            ],
            [
              { fa: 'رزرو', en: 'Reservation' },
              { fa: 'داده تراکنشی', en: 'Transaction' },
              { fa: 'برنامه‌ریز تعمیرات یا مهندس حفاری', en: 'Maintenance planner or drilling engineer' },
              { fa: 'کنار گذاشتن موجودی برای یک دستور کار یا چاه', en: 'Earmarks stock for a work order or well' },
            ],
            [
              { fa: 'رسید کالا (GRN)', en: 'Goods received note (GRN)' },
              { fa: 'داده تراکنشی', en: 'Transaction' },
              { fa: 'انباردار', en: 'Storekeeper' },
              { fa: 'افزایش موجودی و ثبت خودکار در مالی', en: 'Increases stock; posts to Finance' },
            ],
            [
              { fa: 'حواله انبار', en: 'Goods issue' },
              { fa: 'داده تراکنشی', en: 'Transaction' },
              { fa: 'انباردار', en: 'Storekeeper' },
              {
                fa: 'کاهش موجودی، انتقال هزینه به محل مصرف و ثبت در مالی',
                en: 'Decreases stock; charges the cost object; posts to Finance',
              },
            ],
            [
              { fa: 'انتقال بین انبارها', en: 'Stock transfer' },
              { fa: 'داده تراکنشی', en: 'Transaction' },
              { fa: 'انباردار', en: 'Storekeeper' },
              { fa: 'جابه‌جایی موجودی میان محل‌ها یا سایت‌ها', en: 'Moves stock between locations or sites' },
            ],
            [
              { fa: 'سند شمارش موجودی', en: 'Physical inventory document' },
              { fa: 'داده تراکنشی', en: 'Transaction' },
              { fa: 'کنترل‌کننده موجودی', en: 'Inventory controller' },
              { fa: 'ثبت شمارش و اختلاف‌ها و اثر آن در مالی', en: 'Records counts and differences and posts them to Finance' },
            ],
          ],
        },
        {
          type: 'table',
          caption: { fa: 'ارتباط ماژول انبار با ماژول‌های دیگر', en: 'How the Inventory module links to the other modules' },
          head: [
            { fa: 'ماژول', en: 'Module' },
            { fa: 'به انبار می‌دهد', en: 'Gives the warehouse' },
            { fa: 'از انبار می‌گیرد', en: 'Gets from the warehouse' },
          ],
          rows: [
            [
              { fa: 'تدارکات', en: 'Procurement' },
              { fa: 'سفارش خرید برای رسید کالا، اطلاعات تأمین‌کننده', en: 'Purchase orders to receive against; vendor data' },
              {
                fa: 'سابقه رسید روی سفارش، پایه تطبیق فاکتور، درخواست خرید وقتی موجودی کم شود',
                en: 'Receipt history on the PO, the basis for invoice matching, purchase requisitions when stock runs low',
              },
            ],
            [
              { fa: 'مدیریت دارایی و نگهداری', en: 'Asset management' },
              { fa: 'دستور کار و رزرو قطعه، فهرست قطعات تجهیز', en: 'Work orders and part reservations; equipment parts lists' },
              {
                fa: 'حواله قطعه به دستور کار، اطلاع از موجود بودن قطعه برای برنامه‌ریزی',
                en: 'Parts issued to the work order; availability for planning',
              },
            ],
            [
              { fa: 'پروژه‌ها و AFE', en: 'Projects and AFE' },
              { fa: 'AFE و پروژه حفاری، برنامه مواد چاه', en: 'Drilling AFEs and projects; well material plans' },
              { fa: 'حواله و رسید مستقیم به AFE، برگشت مازاد', en: 'Issues and direct receipts to the AFE; surplus returns' },
            ],
            [
              { fa: 'مالی', en: 'Finance' },
              {
                fa: 'حساب‌های دفتر کل (از طریق کلاس ارزش‌گذاری)، مراکز هزینه، قیمت‌ها',
                en: 'GL accounts (through the valuation class), cost centres, prices',
              },
              {
                fa: 'سند حسابداری خودکار برای هر جابه‌جایی ارزشی؛ مانده موجودی در ترازنامه',
                en: 'An automatic accounting document for every valued movement; the inventory balance on the balance sheet',
              },
            ],
          ],
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'برنامه‌ریز تعمیرات', en: 'Maintenance planner' },
              text: {
                fa: 'دستور کار WO-7781 را برای کمپرسور K-201 ایجاد و یک بسته آب‌بند رزرو می‌کند. سرپرست تعمیرات در گردش کار تأیید، دستور کار را تأیید می‌کند.',
                en: 'Creates work order WO-7781 for compressor K-201 and reserves one seal kit. The maintenance supervisor approves the work order in the approval workflow.',
              },
            },
            {
              title: { fa: 'انباردار انبار میدان', en: 'Field Warehouse storekeeper' },
              text: {
                fa: 'بسته را از جایگاهش برمی‌دارد، حواله انبار را در برابر رزرو ثبت می‌کند و تحویل‌گیرنده دریافت آن را امضا می‌کند.',
                en: 'Picks the kit from its bin and posts the goods issue against the reservation, and the receiver signs for it.',
              },
            },
            {
              title: { fa: 'سیستم ERP', en: 'The ERP' },
              text: {
                fa: 'موجودی را کم می‌کند، سند انبار و سند حسابداری می‌سازد و هزینه را به دستور کار و از آنجا به مرکز هزینه ایستگاه تقویت فشار (CC-3200) می‌برد.',
                en: 'Reduces stock, creates the material document and the accounting document, and charges the cost to the work order and from there to the compressor station cost centre (CC-3200).',
              },
            },
            {
              title: { fa: 'برنامه‌ریز موجودی و کارشناس خرید', en: 'Inventory planner and buyer' },
              text: {
                fa: 'موجودی به نقطه سفارش رسیده است؛ سیستم درخواست خرید پیشنهاد می‌دهد و پس از تأیید، سفارش خرید PO-0412 برای 2 بسته صادر می‌شود.',
                en: 'Stock has hit the reorder point; the system proposes a purchase requisition and, once it is approved, purchase order PO-0412 is issued for 2 kits.',
              },
            },
            {
              title: { fa: 'انباردار انبار مرکزی', en: 'Central Warehouse storekeeper' },
              text: {
                fa: 'هنگام رسیدن کالا، رسید کالا (GRN) را در برابر PO-0412 ثبت می‌کند و ثبت مالی خودکار انجام می‌شود.',
                en: 'Posts the GRN against PO-0412 when the kits arrive, and the Finance entry is made automatically.',
              },
            },
            {
              title: { fa: 'حسابدار موجودی', en: 'Inventory accountant' },
              text: {
                fa: 'در پایان ماه مانده حساب موجودی را با گزارش ارزش موجودی انبار، و مانده حساب واسط GR/IR را با سفارش‌های باز تطبیق می‌دهد.',
                en: 'At month-end, reconciles the inventory account to the stock valuation report, and the GR/IR balance to open orders.',
              },
            },
          ],
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های خودکار مالی در چرخه بسته آب‌بند', en: 'Automatic Finance entries in the seal kit cycle' },
          entries: [
            {
              date: { fa: 'حواله انبار (انبار میدان)', en: 'Goods issue (Field Warehouse)' },
              lines: [
                { account: ac.maintCompressor, debit: 1800 },
                { account: ac.spares, credit: 1800 },
              ],
              memo: {
                fa: '1 بسته آب‌بند به دستور کار WO-7781؛ هزینه به ایستگاه تقویت فشار می‌رسد.',
                en: '1 seal kit issued to work order WO-7781; the cost lands on the compressor station.',
              },
            },
            {
              date: { fa: 'رسید کالا (GRN) در انبار مرکزی', en: 'GRN (Central Warehouse)' },
              lines: [
                { account: ac.spares, debit: 3600 },
                { account: ac.grir, credit: 3600 },
              ],
              memo: {
                fa: '2 بسته × 1,800 در برابر PO-0412؛ بدهی «دریافت‌شده و هنوز فاکتورنشده» در حساب واسط می‌نشیند.',
                en: '2 kits × 1,800 against PO-0412; the “received, not yet invoiced” liability sits in the clearing account.',
              },
            },
            {
              date: { fa: 'فاکتور فروشنده (حسابداری پرداختنی‌ها)', en: 'Vendor invoice (accounts payable)' },
              lines: [
                { account: ac.grir, debit: 3600 },
                { account: ac.ap, credit: 3600 },
              ],
              memo: {
                fa: 'پس از تطبیق سه‌طرفه سفارش، رسید و فاکتور، حساب واسط بسته و بدهی به فروشنده ثبت می‌شود.',
                en: 'After the three-way match of order, receipt and invoice, the clearing account is cleared and the payable to the vendor is recorded.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'یک جابه‌جایی، دو سند', en: 'One movement, two documents' },
          text: {
            fa: 'هر جابه‌جایی ارزشی در ERP دو سند مرتبط می‌سازد: **سند انبار** (چه کالایی، چه مقدار، از کجا به کجا) و **سند حسابداری** (چه مبلغی، به کدام حساب‌ها). این **زنجیره اسناد** به حسابرس اجازه می‌دهد از یک سطر دفتر کل شروع کند و تا رسید کالا (GRN) و سفارش خرید پیش برود. بسیاری از ERPها (برای مثال SAP) حساب‌های دفتر کل را بر اساس نوع جابه‌جایی و کلاس ارزش‌گذاری کالا خودکار تعیین می‌کنند؛ به این کار **تعیین خودکار حساب** می‌گویند.',
            en: 'Every valued movement in an ERP creates two linked documents: a **material document** (what, how many, from where to where) and an **accounting document** (how much, to which accounts). This **document flow** lets an auditor start from a general ledger line and drill down to the storekeeper’s receipt and the purchase order. Many ERPs (SAP, for example) pick the GL accounts automatically from the movement type and the material’s valuation class; this is called **account determination**.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در شرکت‌های ایرانی، **رسید کالا** (که در بسیاری از شرکت‌ها «رسید انبار» هم نامیده می‌شود و در این دوره آن را GRN می‌نامیم) و **حواله انبار** اسناد شماره‌دار و امضاشده‌اند. در ERP همین اسناد در سیستم صادر می‌شوند (چاپی یا با امضای الکترونیکی) و سند حسابداری به آنها ارجاع می‌دهد؛ همان پیوند میان سند حسابداری و مدارک پیوست آن که در دوره حسابداری مالی دیدیم.',
            en: 'In Iranian companies the **goods received note** (GRN, often called «رسید انبار») and the **issue note** (حواله انبار) are numbered, signed documents. In an ERP the system produces the same documents (printed or e-signed) and the accounting voucher refers to them: the same link between a voucher and its supporting documents that the Financial Accounting course covers.',
          },
        },
      ],
    },
    {
      id: 'exercises',
      title: { fa: 'تمرین‌ها', en: 'Exercises' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'این تمرین‌ها از ساده به دشوار مرتب شده‌اند. اول خودتان حل کنید، بعد راه‌حل را ببینید.',
            en: 'These exercises go from easy to hard. Try each one yourself before opening the solution.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'کالا را طبقه‌بندی کنید', en: 'Classify the material' },
          difficulty: 'easy',
          problem: {
            fa: 'شش قلم زیر به انبار مرکزی مسار پترولیوم رسیده است. گروه هر کالا را تعیین کنید و بگویید در کدام انبار باید نگهداری شود.',
            en: 'The six items below have arrived at Masar Petroleum’s Central Warehouse. Name each item’s material group and say which store should hold it.',
          },
          given: {
            head: [
              { fa: 'ردیف', en: 'No.' },
              { fa: 'کالا', en: 'Item' },
            ],
            rows: [
              [1, { fa: 'لوله جداری `9-5/8"` گرید L80 برای چاه AR-12', en: 'Casing `9-5/8"` grade L80 for well AR-12' }],
              [2, { fa: 'بسته آب‌بند مکانیکی کمپرسور K-201', en: 'Mechanical seal kit for compressor K-201' }],
              [3, { fa: 'بازدارنده خوردگی در بشکه 200 لیتری', en: 'Corrosion inhibitor in 200-litre drums' }],
              [4, { fa: 'دستکش ایمنی نیتریل', en: 'Nitrile safety gloves' }],
              [5, { fa: 'روتور یدکی کمپرسور K-201', en: 'Spare rotor for compressor K-201' }],
              [6, { fa: 'واشر اسپیرال‌وند 4 اینچ کلاس 600', en: 'Spiral-wound gasket, 4 in, class 600' }],
            ],
          },
          hint: {
            fa: 'به رفتار کالا فکر کنید: به یک تجهیز وابسته است؟ خطرناک است؟ ارزش کم و مصرف زیاد دارد؟ بیش از یک دوره استفاده می‌شود؟',
            en: 'Think about how each item behaves: is it tied to one machine? Is it hazardous? Low value and high volume? Used over more than one period?',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'ردیف', en: 'No.' },
                { fa: 'گروه', en: 'Group' },
                { fa: 'انبار', en: 'Store' },
                { fa: 'نکته', en: 'Note' },
              ],
              rows: [
                [
                  1,
                  { fa: 'OCTG', en: 'OCTG' },
                  { fa: 'محوطه لوله انبار مرکزی؛ سپس انبار سر دکل AR-12', en: 'Central Warehouse pipe yard, then the AR-12 rig-site store' },
                  { fa: 'اغلب مستقیم به AFE-012 چاه AR-12 منظور می‌شود', en: 'Often charged directly to AFE-012 for well AR-12' },
                ],
                [
                  2,
                  { fa: 'قطعه یدکی حیاتی', en: 'Critical spare part' },
                  { fa: 'انبار میدان، نزدیک ایستگاه', en: 'Field Warehouse, close to the station' },
                  { fa: 'توقف K-201 تولید را کم می‌کند؛ باید در میدان موجود باشد', en: 'A K-201 trip cuts production; it must be on hand in the field' },
                ],
                [
                  3,
                  { fa: 'ماده شیمیایی', en: 'Chemical' },
                  { fa: 'انبار مواد شیمیایی انبار مرکزی؛ مقدار کم در میدان', en: 'Central Warehouse chemical store; a small stock in the field' },
                  {
                    fa: 'خطرناک و دارای عمر انبارداری: SDS، بچ، اول‌منقضی‌اول‌خروج',
                    en: 'Hazardous with a shelf life: SDS, batch, first-expired-first-out',
                  },
                ],
                [
                  4,
                  { fa: 'قلم مصرفی', en: 'Consumable' },
                  { fa: 'انبار میدان', en: 'Field Warehouse' },
                  { fa: 'ارزش کم، مصرف زیاد؛ تحویل به مرکز هزینه', en: 'Low value, high volume; issued to a cost centre' },
                ],
                [
                  5,
                  { fa: 'قطعه یدکی سرمایه‌ای', en: 'Capital spare' },
                  { fa: 'انبار مرکزی، با برنامه حفاظت', en: 'Central Warehouse, with a preservation programme' },
                  { fa: 'احتمالاً دارایی ثابت طبق IAS 16؛ با شماره سریال', en: 'Probably property, plant and equipment under IAS 16; serialised' },
                ],
                [
                  6,
                  { fa: 'قلم مصرفی (قطعه عمومی)', en: 'Consumable (general part)' },
                  { fa: 'انبار میدان', en: 'Field Warehouse' },
                  { fa: 'به تجهیز خاصی وابسته نیست؛ با نقطه سفارش کنترل می‌شود', en: 'Not tied to one machine; controlled by a reorder point' },
                ],
              ],
            },
          ],
          answer: {
            fa: '1 OCTG؛ 2 قطعه یدکی حیاتی؛ 3 ماده شیمیایی؛ 4 و 6 اقلام مصرفی؛ 5 قطعه یدکی سرمایه‌ای.',
            en: '1 OCTG; 2 critical spare; 3 chemical; 4 and 6 consumables; 5 capital spare.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'قطعه حیاتی را نگه داریم یا نه؟', en: 'Stock a critical spare or not?' },
          difficulty: 'medium',
          problem: {
            fa: 'کارتریج آب‌بند گازی خشک (Dry gas seal) کمپرسور K-201 قیمتی برابر 90,000 دارد و زمان تحویل آن 140 روز است. اگر کارتریج خراب شود و یدکی نداشته باشیم، کمپرسور تا رسیدن قطعه متوقف می‌ماند. اگر یدکی داشته باشیم، تعویض 2 روز طول می‌کشد. با داده‌های زیر، هزینه سالانه مورد انتظار دو گزینه را مقایسه کنید.',
            en: 'The dry gas seal cartridge on compressor K-201 costs 90,000 and has a 140-day lead time. If it fails with no spare, the compressor stays down until the part arrives. With a spare, the change-out takes 2 days. Using the data below, compare the expected annual cost of the two options.',
          },
          given: {
            head: [
              { fa: 'مورد', en: 'Item' },
              { fa: 'مقدار', en: 'Value' },
            ],
            numericCols: [1],
            rows: [
              [{ fa: 'قیمت کارتریج', en: 'Cartridge price' }, 90000],
              [{ fa: 'نرخ هزینه نگهداری سالانه (فرضی)', en: 'Carrying cost rate per year (assumed)' }, { fa: '20٪', en: '20%' }],
              [{ fa: 'احتمال خرابی در یک سال (فرضی)', en: 'Probability of failure in a year (assumed)' }, { fa: '5٪', en: '5%' }],
              [{ fa: 'زیان تولید در هر روز توقف', en: 'Lost production per day of downtime' }, 15000],
              [{ fa: 'روزهای توقف بدون یدکی', en: 'Days of downtime without a spare' }, 140],
              [{ fa: 'روزهای توقف با یدکی', en: 'Days of downtime with a spare' }, 2],
            ],
          },
          hint: {
            fa: 'هزینه مورد انتظار = احتمال × پیامد. هزینه نگهداری قطعه یدکی را هم فراموش نکنید.',
            en: 'Expected cost = probability × consequence. Don’t forget the cost of holding the spare.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'هزینه نگهداری یدکی', en: 'Cost of holding the spare' },
                  text: { fa: '90,000 × 20٪ = 18,000 در سال.', en: '90,000 × 20% = 18,000 a year.' },
                },
                {
                  title: { fa: 'زیان مورد انتظار با یدکی', en: 'Expected loss with a spare' },
                  text: {
                    fa: '5٪ × 2 روز × 15,000 = 1,500 در سال. جمع هزینه این گزینه: 18,000 + 1,500 = 19,500.',
                    en: '5% × 2 days × 15,000 = 1,500 a year. Total for this option: 18,000 + 1,500 = 19,500.',
                  },
                },
                {
                  title: { fa: 'زیان مورد انتظار بدون یدکی', en: 'Expected loss without a spare' },
                  text: { fa: '5٪ × 140 روز × 15,000 = 105,000 در سال.', en: '5% × 140 days × 15,000 = 105,000 a year.' },
                },
                {
                  title: { fa: 'تصمیم', en: 'Decision' },
                  text: {
                    fa: 'نگه داشتن یدکی سالانه حدود 105,000 − 19,500 = 85,500 ارزان‌تر است. افزون بر این، توقف طولانی کمپرسور ممکن است به سوزاندن گاز در مشعل و خطر ایمنی بیشتر برسد؛ پس کارتریج با درجه بحرانی A در انبار میدان نگهداری می‌شود.',
                    en: 'Holding the spare is about 105,000 − 19,500 = 85,500 a year cheaper. On top of that, a long compressor outage can mean flaring and added safety risk, so the cartridge is kept in the Field Warehouse as a criticality-A item.',
                  },
                },
              ],
            },
            {
              type: 'table',
              head: [
                { fa: 'گزینه', en: 'Option' },
                { fa: 'هزینه نگهداری', en: 'Carrying cost' },
                { fa: 'زیان مورد انتظار', en: 'Expected loss' },
                { fa: 'جمع در سال', en: 'Total per year' },
              ],
              numericCols: [1, 2, 3],
              rows: [
                [{ fa: 'با یدکی', en: 'With a spare' }, 18000, 1500, 19500],
                [{ fa: 'بدون یدکی', en: 'Without a spare' }, 0, 105000, 105000],
              ],
            },
          ],
          answer: {
            fa: 'یدکی نگه دارید: 19,500 در سال در برابر 105,000 در سال.',
            en: 'Stock the spare: 19,500 a year against 105,000 a year.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'ثبت‌های خودکار ERP را بنویسید', en: 'Write the ERP’s automatic entries' },
          difficulty: 'medium',
          problem: {
            fa: 'انبار میدان 40 المنت فیلتر به قیمت هر عدد 30 را در برابر سفارش خرید PO-0450 رسید می‌کند. سپس 25 عدد از آنها با حواله انبار به دستور کار WO-7802 برای پمپ P-105 تحویل می‌شود؛ هزینه این دستور کار به مرکز هزینه عملیات تولید (CC-3100) می‌رود. در پایان، فاکتور فروشنده به مبلغ 1,200 می‌رسد و تطبیق سه‌طرفه انجام می‌شود. ثبت‌هایی را که ERP خودکار انجام می‌دهد بنویسید و مقدار و ارزش موجودی باقی‌مانده را محاسبه کنید. (فرض کنید پیش از این رسید، فیلتری در انبار نبوده است.)',
            en: 'The Field Warehouse receives 40 filter elements at 30 each against purchase order PO-0450. It then issues 25 of them to work order WO-7802 for pump P-105, whose cost settles to the production operations cost centre (CC-3100). Finally the vendor’s invoice for 1,200 arrives and the three-way match is done. Write the entries the ERP makes automatically and work out the quantity and value left in stock. (Assume there were no filters in stock before this receipt.)',
          },
          hint: {
            fa: 'رسید: موجودی بدهکار، حساب واسط بستانکار. حواله: محل مصرف بدهکار، موجودی بستانکار. فاکتور: حساب واسط بدهکار، حساب‌های پرداختنی بستانکار.',
            en: 'Receipt: Dr Inventory, Cr GR/IR. Issue: Dr the cost object, Cr Inventory. Invoice: Dr GR/IR, Cr Accounts payable.',
          },
          solution: [
            {
              type: 'journal',
              title: { fa: 'ثبت‌های خودکار', en: 'Automatic entries' },
              entries: [
                {
                  date: { fa: 'رسید کالا (GRN)', en: 'GRN' },
                  lines: [
                    { account: ac.consumables, debit: 1200 },
                    { account: ac.grir, credit: 1200 },
                  ],
                  memo: { fa: '40 × 30 = 1,200', en: '40 × 30 = 1,200' },
                },
                {
                  date: { fa: 'حواله انبار', en: 'Goods issue' },
                  lines: [
                    { account: ac.maintProduction, debit: 750 },
                    { account: ac.consumables, credit: 750 },
                  ],
                  memo: { fa: '25 × 30 = 750، از طریق دستور کار WO-7802', en: '25 × 30 = 750, through work order WO-7802' },
                },
                {
                  date: { fa: 'فاکتور فروشنده', en: 'Vendor invoice' },
                  lines: [
                    { account: ac.grir, debit: 1200 },
                    { account: ac.ap, credit: 1200 },
                  ],
                },
              ],
            },
            {
              type: 'table',
              head: [
                { fa: 'مورد', en: 'Item' },
                { fa: 'مقدار', en: 'Quantity' },
                { fa: 'ارزش', en: 'Value' },
              ],
              numericCols: [1, 2],
              rows: [
                [{ fa: 'رسید', en: 'Received' }, 40, 1200],
                [{ fa: 'حواله (کسر می‌شود)', en: 'Issued (deducted)' }, 25, 750],
                [{ fa: 'جمع موجودی باقی‌مانده', en: 'Total left in stock' }, 15, 450],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'مانده حساب واسط GR/IR پس از فاکتور صفر شد: 1,200 بستانکار در رسید و 1,200 بدهکار در فاکتور. مانده باز در این حساب یعنی کالایی رسیده و هنوز فاکتور نشده، یا برعکس.',
                en: 'The GR/IR balance is zero after the invoice: 1,200 credit at receipt and 1,200 debit at invoice. An open balance there means goods received but not yet invoiced, or the other way round.',
              },
            },
          ],
          answer: {
            fa: '15 فیلتر به ارزش 450 در انبار می‌ماند؛ 750 به هزینه تعمیرات CC-3100 و 1,200 به حساب‌های پرداختنی رفته است.',
            en: '15 filters worth 450 remain; 750 went to CC-3100 maintenance expense and 1,200 to accounts payable.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'کارنامه انبار مرکزی', en: 'The Central Warehouse scorecard' },
          difficulty: 'hard',
          problem: {
            fa: 'داده‌های سال گذشته انبار مرکزی مسار پترولیوم در جدول آمده است. سطح خدمت، دقت موجودی، گردش موجودی، روزهای پوشش موجودی و سهم موجودی راکد را محاسبه کنید و هزینه نگهداری سالانه اقلام راکد را با نرخ فرضی 20٪ به دست آورید. سپس نتیجه را در یکی دو جمله تفسیر کنید.',
            en: 'The table gives last year’s data for Masar Petroleum’s Central Warehouse. Calculate the fill rate, inventory accuracy, inventory turnover, days of supply and slow-moving share, and the annual carrying cost of the slow-moving stock at the assumed 20% rate. Then interpret the result in a sentence or two.',
          },
          given: {
            head: [
              { fa: 'مورد', en: 'Item' },
              { fa: 'مقدار', en: 'Value' },
            ],
            numericCols: [1],
            rows: [
              [{ fa: 'ردیف‌های درخواست‌شده', en: 'Lines requested' }, 2400],
              [{ fa: 'ردیف‌های تحویل‌شده کامل در اولین درخواست', en: 'Lines issued in full on first request' }, 2232],
              [{ fa: 'جایگاه‌های شمارش‌شده', en: 'Bins counted' }, 600],
              [{ fa: 'جایگاه‌های بدون اختلاف', en: 'Bins with no difference' }, 570],
              [{ fa: 'ارزش حواله‌های سال', en: 'Annual issues at cost' }, 5400000],
              [{ fa: 'موجودی ابتدای سال', en: 'Opening inventory' }, 12500000],
              [{ fa: 'موجودی پایان سال', en: 'Closing inventory' }, 11500000],
              [{ fa: 'ارزش اقلام بدون گردش در 12 ماه (پایان سال)', en: 'Items with no movement in 12 months (year-end)' }, 2070000],
            ],
          },
          hint: {
            fa: 'میانگین موجودی = (ابتدای سال + پایان سال) ÷ 2. روزهای پوشش = 365 ÷ گردش موجودی. سهم راکد را با موجودی پایان سال بسنجید.',
            en: 'Average inventory = (opening + closing) ÷ 2. Days of supply = 365 ÷ turnover. Measure the slow-moving share against closing inventory.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'سطح خدمت', en: 'Fill rate' },
                  text: { fa: '2,232 ÷ 2,400 = 93٪', en: '2,232 ÷ 2,400 = 93%' },
                },
                {
                  title: { fa: 'دقت موجودی', en: 'Inventory accuracy' },
                  text: { fa: '570 ÷ 600 = 95٪', en: '570 ÷ 600 = 95%' },
                },
                {
                  title: { fa: 'گردش موجودی', en: 'Inventory turnover' },
                  text: {
                    fa: 'میانگین موجودی = (12,500,000 + 11,500,000) ÷ 2 = 12,000,000؛ گردش = 5,400,000 ÷ 12,000,000 = 0.45 بار در سال.',
                    en: 'Average inventory = (12,500,000 + 11,500,000) ÷ 2 = 12,000,000; turnover = 5,400,000 ÷ 12,000,000 = 0.45 times a year.',
                  },
                },
                {
                  title: { fa: 'روزهای پوشش', en: 'Days of supply' },
                  text: {
                    fa: '365 ÷ 0.45 ≈ 811 روز؛ یعنی با سرعت مصرف فعلی، این موجودی بیش از دو سال کار می‌کند.',
                    en: '365 ÷ 0.45 ≈ 811 days; at today’s usage the stock would last more than two years.',
                  },
                },
                {
                  title: { fa: 'سهم راکد و هزینه آن', en: 'Slow-moving share and its cost' },
                  text: {
                    fa: '2,070,000 ÷ 11,500,000 = 18٪؛ هزینه نگهداری سالانه: 2,070,000 × 20٪ = 414,000.',
                    en: '2,070,000 ÷ 11,500,000 = 18%; annual carrying cost: 2,070,000 × 20% = 414,000.',
                  },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'example',
              title: { fa: 'تفسیر', en: 'Interpretation' },
              text: {
                fa: 'گردش پایین در انبار نفت و گاز تا حدی طبیعی است، چون قطعات حیاتی و سرمایه‌ای کم مصرف می‌شوند. اما 18٪ موجودی راکد که سالی 414,000 هزینه دارد، نشان می‌دهد این اقلام باید بازبینی شوند: آنهایی که واقعاً حیاتی‌اند بمانند و بقیه منتقل، واگذار یا اسقاط شوند. سطح خدمت 93٪ و دقت 95٪ هم پایین‌تر از هدفی است که بسیاری از اپراتورها تعیین می‌کنند.',
                en: 'Low turnover is partly normal in an oil and gas store, because critical and capital spares are rarely used. But 18% slow-moving stock costing 414,000 a year means those items need a review: keep what is genuinely critical and redeploy, sell or scrap the rest. A 93% fill rate and 95% accuracy are also below the targets many operators set.',
              },
            },
          ],
          answer: {
            fa: 'سطح خدمت 93٪، دقت 95٪، گردش 0.45 بار، پوشش حدود 811 روز، موجودی راکد 18٪ با هزینه نگهداری 414,000 در سال.',
            en: 'Fill rate 93%, accuracy 95%, turnover 0.45, about 811 days of supply, 18% slow-moving costing 414,000 a year.',
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
              fa: 'انبار در شرکت بالادستی کالا را دریافت، نگهداری، حفاظت، تحویل و حسابداری می‌کند تا عملیات هرگز منتظر قطعه درست نماند.',
              en: 'In an upstream company the warehouse receives, stores, preserves, issues and accounts for material so that operations never wait for the right part.',
            },
            {
              fa: 'مسار پترولیوم شبکه‌ای از انبار مرکزی، انبار میدان و انبار سر دکل دارد و کالا را با اسناد انتقال میان آنها جابه‌جا می‌کند.',
              en: 'Masar Petroleum runs a network of Central Warehouse, Field Warehouse and rig-site store, and moves stock between them with transfer documents.',
            },
            {
              fa: 'قطعات یدکی، OCTG، مواد شیمیایی، اقلام مصرفی و قطعات یدکی سرمایه‌ای هر کدام نگهداری، کنترل و حسابداری خاص خود را دارند.',
              en: 'Spare parts, OCTG, chemicals, consumables and capital spares each need their own storage, control and accounting.',
            },
            {
              fa: 'انبار خوب میان در دسترس بودن، ایمنی و هزینه تعادل برقرار می‌کند و آن را با شاخص‌هایی مانند سطح خدمت، دقت و گردش موجودی می‌سنجد.',
              en: 'A good warehouse balances availability, safety and cost, and measures it with KPIs such as fill rate, accuracy and turnover.',
            },
            {
              fa: 'در ERP، ماژول انبار با تدارکات، نگهداری، پروژه‌ها و مالی یکپارچه است. رسید: بدهکار موجودی، بستانکار GR/IR. حواله: بدهکار محل مصرف، بستانکار موجودی.',
              en: 'In the ERP the Inventory module is integrated with Procurement, Maintenance, Projects and Finance. Receipt: Dr Inventory, Cr GR/IR. Issue: Dr the cost object, Cr Inventory.',
            },
            {
              fa: 'هر حواله باید محل هزینه درست و مدارک کامل داشته باشد؛ وگرنه ممکن است در کاست ریکاوری پذیرفته نشود.',
              en: 'Every issue needs the right cost object and complete documents, or the cost may not be accepted for cost recovery.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'انبارداری و کنترل موجودی', en: 'Warehousing and inventory control' },
              def: {
                fa: 'مدیریت دریافت، نگهداری، تحویل و حسابداری کالا به‌گونه‌ای که کالای درست در زمان و مکان درست و با هزینه معقول در دسترس باشد.',
                en: 'Managing the receipt, storage, issue and accounting of material so the right item is available at the right place and time at a sensible cost.',
              },
            },
            {
              term: { fa: 'انبار مرکزی', en: 'Central warehouse' },
              def: {
                fa: 'انبار اصلی در پایگاه پشتیبانی که از تأمین‌کنندگان کالا می‌گیرد و انبارهای دیگر را تأمین می‌کند.',
                en: 'The main store at a logistics base that receives from vendors and supplies the other stores.',
              },
            },
            {
              term: { fa: 'انبار میدان', en: 'Field warehouse' },
              def: {
                fa: 'انبار داخل میدان که اقلام پرمصرف و حیاتی را نزدیک محل مصرف نگه می‌دارد.',
                en: 'The store inside the field that keeps fast-moving and critical items close to where they are used.',
              },
            },
            {
              term: { fa: 'OCTG', en: 'OCTG' },
              def: { fa: 'لوله‌های چاه: لوله جداری، لوله مغزی و لوله حفاری.', en: 'Well pipe: casing, tubing and drill pipe.' },
            },
            {
              term: { fa: 'قطعه یدکی حیاتی', en: 'Critical spare' },
              def: {
                fa: 'قطعه‌ای که نبودنش تولید، ایمنی یا محیط زیست را به خطر می‌اندازد و معمولاً زمان تحویل طولانی دارد.',
                en: 'A part whose absence threatens production, safety or the environment, usually with a long lead time.',
              },
            },
            {
              term: { fa: 'قطعه یدکی سرمایه‌ای', en: 'Capital spare' },
              def: {
                fa: 'قطعه یدکی گران و کم‌مصرف یک تجهیز مشخص که اغلب طبق IAS 16 دارایی ثابت شناخته می‌شود.',
                en: 'An expensive, rarely used spare for a specific machine, often recognised as property, plant and equipment under IAS 16.',
              },
            },
            {
              term: { fa: 'زمان تحویل', en: 'Lead time' },
              def: {
                fa: 'فاصله زمانی میان درخواست کالا و رسیدن آن به انبار.',
                en: 'The time between asking for an item and its arrival in the store.',
              },
            },
            {
              term: { fa: 'هزینه نگهداری موجودی', en: 'Carrying cost' },
              def: {
                fa: 'هزینه سالانه نگه داشتن موجودی: سرمایه، فضا، بیمه، حفاظت و کهنگی.',
                en: 'The annual cost of holding stock: capital, space, insurance, preservation and obsolescence.',
              },
            },
            {
              term: { fa: 'سطح خدمت', en: 'Fill rate' },
              def: {
                fa: 'سهم ردیف‌های درخواستی که در اولین درخواست کامل تحویل شده‌اند.',
                en: 'The share of requested lines issued in full on the first request.',
              },
            },
            {
              term: { fa: 'گردش موجودی', en: 'Inventory turnover' },
              def: { fa: 'ارزش حواله‌های سال تقسیم بر میانگین ارزش موجودی.', en: 'Annual issues at cost divided by average inventory.' },
            },
            {
              term: { fa: 'داده پایه', en: 'Master data' },
              def: {
                fa: 'داده‌ای که کم تغییر می‌کند و در تراکنش‌های زیادی استفاده می‌شود، مانند داده پایه کالا.',
                en: 'Data that changes rarely and is used by many transactions, such as the material master.',
              },
            },
            {
              term: { fa: 'داده تراکنشی', en: 'Transaction data' },
              def: {
                fa: 'داده‌ای که یک رویداد را در یک لحظه ثبت می‌کند، مانند رسید یا حواله.',
                en: 'Data that records one event at one moment, such as a receipt or an issue.',
              },
            },
            {
              term: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing account' },
              def: {
                fa: 'حسابی که در رسید کالا (GRN) بستانکار و در ثبت فاکتور بدهکار می‌شود و کالای رسیده و هنوز فاکتورنشده را نشان می‌دهد.',
                en: 'An account credited at the GRN and debited when the invoice is posted, showing goods received but not yet invoiced.',
              },
            },
            {
              term: { fa: 'محل هزینه', en: 'Cost object' },
              def: {
                fa: 'چاه، AFE، دستور کار یا مرکز هزینه‌ای که هزینه به آن منظور می‌شود.',
                en: 'The well, AFE, work order or cost centre that a cost is charged to.',
              },
            },
            {
              term: { fa: 'کاست ریکاوری (بازیافت هزینه)', en: 'Cost recovery' },
              def: {
                fa: 'بازیافت هزینه‌های مجاز از محل تولید طبق قرارداد نفتی، به شرط ثبت درست و مستندسازی کامل.',
                en: 'Recovering allowable costs out of production under a petroleum contract, provided they are correctly booked and fully documented.',
              },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: {
        fa: 'هدف اصلی انبار در یک شرکت بالادستی نفت و گاز کدام است؟',
        en: 'What is the main aim of the warehouse in an upstream oil and gas company?',
      },
      options: [
        { fa: 'نگه داشتن بیشترین موجودی ممکن برای اطمینان', en: 'Holding as much stock as possible, to be safe' },
        {
          fa: 'در دسترس بودن کالای درست، با کیفیت و مدارک درست، در زمان و مکان درست و با هزینه معقول',
          en: 'Having the right item, in the right condition and with the right documents, at the right place and time at a sensible cost',
        },
        { fa: 'کم کردن موجودی تا صفر برای آزاد شدن سرمایه', en: 'Cutting stock to zero to free up cash' },
        { fa: 'فقط نگهبانی از کالا در برابر سرقت', en: 'Only guarding goods against theft' },
      ],
      answer: 1,
      explain: {
        fa: 'انبار برای تعادل میان در دسترس بودن، ایمنی و هزینه است. موجودی حداکثری سرمایه را حبس می‌کند و موجودی صفر تولید را در معرض توقف قرار می‌دهد؛ نگهبانی هم فقط بخش کوچکی از کار انبار است.',
        en: 'The warehouse exists to balance availability, safety and cost. Maximum stock ties up cash and zero stock puts production at risk; guarding is only a small part of the job.',
      },
    },
    {
      q: {
        fa: 'میانگین موجودی یک انبار 250,000 است و نرخ هزینه نگهداری 20٪ در سال فرض می‌شود. هزینه نگهداری سالانه چقدر است؟',
        en: 'A store holds an average inventory of 250,000 and the carrying cost rate is assumed at 20% a year. What is the annual carrying cost?',
      },
      options: [
        { fa: '12,500', en: '12,500' },
        { fa: '20,000', en: '20,000' },
        { fa: '200,000', en: '200,000' },
        { fa: '50,000', en: '50,000' },
      ],
      answer: 3,
      explain: {
        fa: '250,000 × 20٪ = 50,000. عدد 200,000 همان موجودی پس از کسر 20٪ است و ربطی به هزینه نگهداری ندارد.',
        en: '250,000 × 20% = 50,000. 200,000 is just the stock less 20% and has nothing to do with carrying cost.',
      },
    },
    {
      q: {
        fa: 'کدام قلم به احتمال زیاد طبق IAS 16 دارایی ثابت شناخته می‌شود، نه موجودی کالا؟',
        en: 'Which item is most likely to be recognised as property, plant and equipment under IAS 16 rather than as inventory?',
      },
      options: [
        { fa: 'روتور یدکی اختصاصی کمپرسور K-201', en: 'A spare rotor dedicated to compressor K-201' },
        { fa: 'دستکش ایمنی', en: 'Safety gloves' },
        { fa: 'بشکه بازدارنده خوردگی', en: 'A drum of corrosion inhibitor' },
        { fa: 'فیلترهای روغن پمپ', en: 'Pump oil filters' },
      ],
      answer: 0,
      explain: {
        fa: 'قطعه یدکی گران و اختصاصی که انتظار می‌رود بیش از یک دوره استفاده شود، تعریف دارایی ثابت مشهود را دارد. اقلام مصرفی و مواد شیمیایی در مدت کوتاهی مصرف می‌شوند و موجودی کالا هستند.',
        en: 'An expensive, dedicated spare expected to be used over more than one period meets the PP&E definition. Consumables and chemicals are used up quickly and are inventory.',
      },
    },
    {
      q: {
        fa: 'در یک ماه 1,900 ردیف کالا درخواست شده و 1,786 ردیف در اولین درخواست کامل تحویل شده است. سطح خدمت چقدر است؟',
        en: 'In a month 1,900 lines were requested and 1,786 were issued in full on the first request. What is the fill rate?',
      },
      options: [
        { fa: '6٪', en: '6%' },
        { fa: '90٪', en: '90%' },
        { fa: '94٪', en: '94%' },
        { fa: '106٪', en: '106%' },
      ],
      answer: 2,
      explain: {
        fa: '1,786 ÷ 1,900 = 94٪. عدد 6٪ سهم ردیف‌های ناموفق است، نه سطح خدمت.',
        en: '1,786 ÷ 1,900 = 94%. The 6% is the share of lines that failed, not the fill rate.',
      },
    },
    {
      q: {
        fa: 'وقتی انباردار رسید کالا (GRN) یک کالای انباری را در برابر سفارش خرید در ERP ثبت می‌کند، سیستم خودکار چه ثبتی در مالی انجام می‌دهد؟',
        en: 'When a storekeeper posts a GRN for a stock item against a purchase order, what does the ERP post to Finance automatically?',
      },
      options: [
        { fa: 'بدهکار هزینه، بستانکار موجودی نقد', en: 'Dr Expense, Cr Cash' },
        { fa: 'بدهکار حساب‌های پرداختنی، بستانکار موجودی', en: 'Dr Accounts payable, Cr Inventory' },
        { fa: 'بدهکار موجودی، بستانکار حساب واسط GR/IR', en: 'Dr Inventory, Cr GR/IR clearing' },
        { fa: 'تا رسیدن فاکتور هیچ ثبتی انجام نمی‌شود', en: 'Nothing until the invoice arrives' },
      ],
      answer: 2,
      explain: {
        fa: 'با رسید، دارایی افزایش می‌یابد و تعهدی برای کالای دریافت‌شده و هنوز فاکتورنشده ایجاد می‌شود که در حساب واسط GR/IR می‌نشیند. حساب پرداختنی بعداً با ثبت فاکتور ایجاد می‌شود.',
        en: 'At receipt the asset goes up and an obligation for goods received but not yet invoiced is created in the GR/IR clearing account. The payable is recorded later, when the invoice is posted.',
      },
    },
    {
      q: {
        fa: 'ارزش حواله‌های سال یک انبار 300,000 و میانگین موجودی آن 600,000 است. گردش موجودی چند بار در سال است؟',
        en: 'A store issued 300,000 at cost during the year and held an average inventory of 600,000. What is its inventory turnover?',
      },
      options: [
        { fa: '2 بار', en: '2 times' },
        { fa: '0.5 بار', en: '0.5 times' },
        { fa: '0.2 بار', en: '0.2 times' },
        { fa: '5 بار', en: '5 times' },
      ],
      answer: 1,
      explain: {
        fa: '300,000 ÷ 600,000 = 0.5 بار؛ یعنی با سرعت مصرف فعلی، موجودی حدود دو سال کار می‌کند. عدد 2 از تقسیم برعکس به دست می‌آید.',
        en: '300,000 ÷ 600,000 = 0.5 times, so at current usage the stock lasts about two years. 2 comes from dividing the wrong way round.',
      },
    },
    {
      q: {
        fa: 'فیلترها و واشرهایی که تیم تعمیرات میدان آریا هر هفته مصرف می‌کند، بهتر است کجا نگهداری شوند؟',
        en: 'Where should the filters and gaskets that the Arya maintenance crew uses every week be held?',
      },
      options: [
        { fa: 'در انبار میدان، نزدیک محل مصرف', en: 'In the Field Warehouse, close to where they are used' },
        { fa: 'فقط در انبار مرکزی', en: 'Only in the Central Warehouse' },
        { fa: 'در انبار سر دکل حفاری', en: 'In the rig-site store' },
        { fa: 'نزد پیمانکار حفاری', en: 'With the drilling contractor' },
      ],
      answer: 0,
      explain: {
        fa: 'اقلام پرمصرف روزانه باید نزدیک مصرف‌کننده باشند. انبار مرکزی برای کالای کم‌گردش و حجیم است و انبار سر دکل فقط کالای چاه در حال حفاری را نگه می‌دارد.',
        en: 'Fast-moving day-to-day items belong close to their users. The Central Warehouse is for slow-moving and bulk stock, and the rig-site store holds only material for the well being drilled.',
      },
    },
    {
      q: {
        fa: 'لوله مغزی نصب‌شده در چاه AR-07 به‌اشتباه روی مرکز هزینه عمومی انبار ثبت شده است. مهم‌ترین پیامد آن چیست؟',
        en: 'Tubing run in well AR-07 was wrongly booked to the warehouse’s general cost centre. What is the most important consequence?',
      },
      options: [
        { fa: 'هیچ؛ جمع هزینه شرکت تغییر نمی‌کند', en: 'None; the company’s total cost is the same' },
        { fa: 'موجودی انبار بیش از واقع نشان داده می‌شود', en: 'Warehouse stock is overstated' },
        { fa: 'حساب پرداختنی فروشنده دو بار ثبت می‌شود', en: 'The vendor payable is recorded twice' },
        {
          fa: 'هزینه چاه کمتر از واقع است و ادعای کاست ریکاوری و صورت‌حساب شرکا ناقص یا قابل اعتراض می‌شود',
          en: 'The well’s cost is understated, so the cost-recovery claim and partner billing become incomplete or open to challenge',
        },
      ],
      answer: 3,
      explain: {
        fa: 'جمع هزینه شاید درست باشد، اما هزینه روی محل اشتباه نشسته است. کاست ریکاوری و سهم شرکا بر اساس محل هزینه (چاه یا AFE) محاسبه می‌شود؛ پس هزینه چاه کمتر و هزینه سربار بیشتر از واقع نشان داده می‌شود.',
        en: 'The total may be right, but the cost sits on the wrong object. Cost recovery and partner shares are worked out per cost object (well or AFE), so the well looks cheaper and overheads look higher than they are.',
      },
    },
    {
      q: {
        fa: 'یک قطعه حیاتی 5,000 قیمت دارد. احتمال خرابی آن در سال 10٪ است و اگر یدکی نباشد، 60 روز توقف با زیان روزانه 800 پیش می‌آید. زیان سالانه مورد انتظار بدون یدکی چقدر است؟',
        en: 'A critical part costs 5,000. It has a 10% chance of failing in a year, and without a spare the outage would last 60 days at 800 lost per day. What is the expected annual loss without a spare?',
      },
      options: [
        { fa: '48,000', en: '48,000' },
        { fa: '4,800', en: '4,800' },
        { fa: '500', en: '500' },
        { fa: '1,000', en: '1,000' },
      ],
      answer: 1,
      explain: {
        fa: '10٪ × 60 × 800 = 4,800. عدد 48,000 زیان کامل یک خرابی است، نه زیان مورد انتظار؛ 1,000 هم هزینه نگهداری قطعه با نرخ 20٪ است.',
        en: '10% × 60 × 800 = 4,800. 48,000 is the full loss of one failure, not the expected loss; 1,000 is the carrying cost of the part at 20%.',
      },
    },
    {
      q: { fa: 'کدام یک **داده تراکنشی** است؟', en: 'Which of these is **transaction data**?' },
      options: [
        { fa: 'داده پایه کالای بسته آب‌بند', en: 'The seal kit’s material master' },
        { fa: 'مرکز هزینه CC-3200', en: 'Cost centre CC-3200' },
        { fa: 'جایگاه A-12-03-B در انبار میدان', en: 'Bin A-12-03-B in the Field Warehouse' },
        { fa: 'حواله انبار یک بسته آب‌بند به دستور کار WO-7781', en: 'The goods issue of one seal kit to work order WO-7781' },
      ],
      answer: 3,
      explain: {
        fa: 'حواله یک رویداد را در یک لحظه ثبت می‌کند؛ پس داده تراکنشی است. داده پایه کالا، مرکز هزینه و جایگاه کم تغییر می‌کنند و در تراکنش‌های زیادی استفاده می‌شوند؛ پس داده پایه‌اند.',
        en: 'An issue records one event at one moment, so it is transaction data. The material master, the cost centre and the bin change rarely and are used by many transactions, so they are master data.',
      },
    },
  ],
}
