import type { Lesson } from '../../types'

const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'replenishment-planning',
  number: 7,
  level: 'advanced',
  minutes: 24,
  icon: 'TrendingUp',
  tone: 'asset',
  title: { fa: 'برنامه‌ریزی تأمین و سفارش مجدد', en: 'Replenishment Planning' },
  summary: {
    fa: 'چه زمانی سفارش دهیم و چه مقدار؟ در این درس با کالاهای شرکت پارس‌آریا، نقطه سفارش، موجودی اطمینان، سیاست حداقل و حداکثر، مقدار اقتصادی سفارش و MRP را با عدد حساب می‌کنیم، راهبرد قطعات یدکی حیاتی را می‌سازیم و می‌بینیم ERP چگونه درخواست خرید را خودکار ایجاد می‌کند.',
    en: 'When should we order, and how much? Using Pars Arya’s own materials, this lesson works through reorder points, safety stock, min/max, the economic order quantity and MRP with real numbers, builds a critical-spares strategy, and shows how the ERP raises purchase requisitions automatically.',
  },
  objectives: [
    {
      fa: 'اجزای واقعی زمان تأمین را بشناسید و نقطه سفارش را محاسبه کنید.',
      en: 'Break lead time into its real components and calculate a reorder point.',
    },
    {
      fa: 'موجودی اطمینان را با روش ساده و روش آماری محاسبه و نتیجه را تفسیر کنید.',
      en: 'Calculate safety stock with the simple and the statistical method and interpret the result.',
    },
    {
      fa: 'سیاست حداقل و حداکثر و مقدار اقتصادی سفارش را به کار ببرید و محدودیت‌های آن را در صنعت نفت و گاز بدانید.',
      en: 'Apply min/max and the EOQ, and know their limits in oil and gas.',
    },
    {
      fa: 'نیاز خالص را با MRP محاسبه کنید و برای قطعات یدکی حیاتی راهبرد بسازید.',
      en: 'Net requirements with MRP and build a strategy for critical spares.',
    },
    {
      fa: 'توضیح دهید ERP چگونه درخواست خرید خودکار می‌سازد و کدام ثبت مالی پس از آن خودکار ایجاد می‌شود.',
      en: 'Explain how the ERP creates purchase requisitions automatically and which Finance entries follow automatically.',
    },
  ],
  sections: [
    {
      id: 'why-replenish',
      title: { fa: 'چرا برنامه‌ریزی تأمین مهم است؟', en: 'Why replenishment planning matters' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'ساعت دو بامداد، کمپرسور K-201 در ایستگاه تقویت فشار میدان آریا به دلیل شکستگی یک سوپاپ متوقف می‌شود. تیم نگهداری برای برداشتن **کیت سوپاپ کمپرسور** (کالای 300500) به انبار میدان می‌رود، اما کاردکس عدد صفر را نشان می‌دهد. سازنده اصلی (OEM) برای ساخت و ارسال کیت تازه حدود **24 هفته** زمان می‌خواهد. تا آن زمان، اگر راه اضطراری پیدا نشود، بخشی از گاز باید سوزانده شود یا تولید چاه‌ها کم شود.',
            en: 'At 2 a.m. compressor K-201 at the Arya field compressor station trips on a broken valve. The maintenance crew goes to the Field Warehouse for a **compressor valve kit** (material 300500), but the stock record shows zero. The original equipment manufacturer (OEM) needs about **24 weeks** to build and ship a new kit. Unless an emergency route is found, part of the gas must be flared or well production cut back until then.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'روی دیگر سکه', en: 'The other side of the coin' },
          text: {
            fa: 'در همان شرکت، انبار مواد شیمیایی پر از بشکه‌های **بازدارنده خوردگی** (کالای 200310) است که دو سال پیش برای «احتیاط» یک‌جا خریده شده‌اند. تاریخ انقضای بخشی از آن‌ها نزدیک است، فضای انبار پر شده و پولی که بابت آن‌ها پرداخت شده، هنوز به مصرف عملیات نرسیده است. کمبود و انباشت، هر دو، نتیجه نبودِ برنامه‌ریزی تأمین‌اند.',
            en: 'In the same company, the chemical store is full of **corrosion inhibitor** drums (material 200310) bought in one lot two years ago "just in case". Part of them are close to expiry, the store is full, and the cash paid for them has still not reached operations. Shortage and overstock are both the result of missing replenishment planning.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'موجودی کم: هزینه کمبود', en: 'Too little stock: cost of shortage' },
            items: [
              { fa: 'توقف تولید یا عقب افتادن تعمیرات', en: 'Lost production or delayed maintenance' },
              { fa: 'خرید اضطراری گران، اغلب با حمل هوایی', en: 'Expensive emergency buying, often by air freight' },
              { fa: 'ریسک HSE وقتی تجهیز ایمنی بدون قطعه می‌ماند', en: 'HSE risk when safety equipment waits for parts' },
              { fa: 'از دست رفتن اعتماد بهره‌برداری به انبار', en: 'Operations stop trusting the warehouse' },
            ],
          },
          right: {
            title: { fa: 'موجودی زیاد: هزینه نگهداری', en: 'Too much stock: cost of holding' },
            items: [
              { fa: 'نقدینگی بلوکه‌شده در قفسه‌ها', en: 'Cash locked up on the shelves' },
              { fa: 'هزینه فضا، نیروی انسانی، بیمه و حراست', en: 'Space, staff, insurance and security costs' },
              { fa: 'انقضا، زنگ‌زدگی و خرابی', en: 'Expiry, rust and damage' },
              { fa: 'منسوخ شدن پس از تعویض یا برچیدن تجهیز', en: 'Obsolescence once equipment is replaced or retired' },
            ],
          },
        },
        {
          type: 'p',
          text: {
            fa: 'برنامه‌ریزی تأمین یعنی برای هر کالا به دو پرسش پاسخ دهیم: **چه زمانی** سفارش دهیم و **چه مقدار** سفارش دهیم. پاسخ درست میان هزینه کمبود و هزینه نگهداری تعادل برقرار می‌کند. **هزینه نگهداری** مجموع هزینه‌هایی است که فقط به خاطر ماندن کالا در انبار ایجاد می‌شود و معمولاً به صورت درصدی از ارزش متوسط موجودی در سال بیان می‌شود.',
            en: 'Replenishment planning answers two questions for every item: **when** to order and **how much** to order. The right answer balances the cost of shortage against the cost of holding. The **holding cost** is the sum of all costs that arise only because goods sit in the warehouse, usually expressed as a percentage of the average inventory value per year.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'اجزای هزینه نگهداری (نرخ‌ها فرضی و برای مثال‌اند)', en: 'Components of holding cost (illustrative rates)' },
          head: [
            { fa: 'جزء هزینه', en: 'Component' },
            { fa: 'چه چیزی را پوشش می‌دهد', en: 'What it covers' },
            { fa: 'نرخ سالانه فرضی (%)', en: 'Illustrative annual rate (%)' },
          ],
          rows: [
            [
              { fa: 'هزینه سرمایه', en: 'Cost of capital' },
              { fa: 'پولی که در موجودی خوابیده و می‌توانست بدهی را کم کند یا در پروژه دیگری به کار رود', en: 'Cash tied up that could repay debt or fund other work' },
              10,
            ],
            [
              { fa: 'انبارداری و جابه‌جایی', en: 'Storage and handling' },
              { fa: 'فضا، قفسه، لیفتراک، نیروی انسانی و انرژی', en: 'Space, racking, forklifts, staff and power' },
              4,
            ],
            [
              { fa: 'بیمه و حراست', en: 'Insurance and security' },
              { fa: 'بیمه کالا و ساختمان، نگهبانی و دوربین', en: 'Insurance of stock and buildings, guards and cameras' },
              1,
            ],
            [
              { fa: 'خرابی و انقضا', en: 'Deterioration and expiry' },
              { fa: 'زنگ‌زدگی لوله، انقضای مواد شیمیایی، آسیب در جابه‌جایی', en: 'Rust on pipe, expired chemicals, handling damage' },
              2,
            ],
            [
              { fa: 'منسوخ شدن', en: 'Obsolescence' },
              { fa: 'کالایی که پس از تعویض یا برچیدن تجهیز دیگر مصرفی ندارد', en: 'Items with no use left after equipment is replaced or retired' },
              3,
            ],
            [{ fa: '**جمع**', en: '**Total**' }, blank, 20],
          ],
          numericCols: [2],
        },
        {
          type: 'p',
          text: {
            fa: 'مثال: اگر ارزش متوسط موجودی مواد شیمیایی انبار میدان 1,500,000 باشد، با نرخ فرضی 20% نگهداری آن سالانه حدود 1,500,000 × 20% = **300,000** هزینه دارد، حتی اگر هیچ بشکه‌ای خراب نشود. در مقابل، **هزینه سفارش** هزینه هر بار سفارش دادن است: تهیه و تأیید درخواست خرید، استعلام و ارزیابی پیشنهادها، صدور سفارش خرید، پیگیری، بازرسی، رسید و پردازش فاکتور. هرچه دفعات سفارش بیشتر باشد، هزینه سفارش سالانه بالاتر و هزینه نگهداری پایین‌تر است.',
            en: 'Example: if the Field Warehouse holds chemicals with an average value of 1,500,000, an illustrative 20% rate means holding them costs about 1,500,000 × 20% = **300,000** a year, even if not a single drum is damaged. On the other side, the **ordering cost** is what each order costs to place: preparing and approving the requisition, tendering and evaluating bids, issuing the purchase order, expediting, inspection, receipt and invoice processing. The more often we order, the higher the annual ordering cost and the lower the holding cost.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در ایران، زمان تأمین کالای وارداتی فقط به ساخت و حمل بستگی ندارد؛ مراحلی مانند ثبت سفارش، تأمین ارز و ترخیص گمرکی هم مدت ثابتی ندارند. به همین دلیل بسیاری از شرکت‌های بهره‌بردار برای اقلام وارداتی حیاتی موجودی اطمینان بیشتری نگه می‌دارند و برای اقلامی که در داخل ساخته می‌شوند، یک تأمین‌کننده داخلی دوم را هم تأیید صلاحیت می‌کنند. رویه‌های واردات را همیشه از آخرین مقررات و بخشنامه‌ها بررسی کنید.',
            en: 'In Iran, the lead time of an imported item depends on more than manufacturing and freight: steps such as order registration, foreign-currency allocation and customs clearance have no fixed duration. That is why many operators hold extra safety stock for critical imported items and qualify a second, local supplier for items that can be made in the country. Always check import procedures against the latest regulations.',
          },
        },
      ],
    },
    {
      id: 'lead-time-rop',
      title: { fa: 'زمان تأمین و نقطه سفارش', en: 'Lead time and the reorder point' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**زمان تأمین** فاصله زمانی از لحظه‌ای است که نیاز به سفارش تشخیص داده می‌شود تا لحظه‌ای که کالا در انبار، بازرسی‌شده و آماده حواله است. اشتباه رایج این است که فقط زمان ساختی را که تأمین‌کننده اعلام می‌کند، زمان تأمین بدانیم. جدول زیر اجزای واقعی زمان تأمین کیت سوپاپ K-201 را نشان می‌دهد (اعداد فرضی‌اند).',
            en: '**Lead time** is the time from the moment a need to order is recognised until the goods are in the warehouse, inspected and ready to issue. A common mistake is to treat the manufacturing time quoted by the supplier as the lead time. The table shows the real components of the lead time for the K-201 valve kit (illustrative figures).',
          },
        },
        {
          type: 'table',
          caption: { fa: 'اجزای زمان تأمین کیت سوپاپ K-201 (کالای 300500)', en: 'Lead time components for the K-201 valve kit (material 300500)' },
          head: [
            { fa: 'مرحله', en: 'Stage' },
            { fa: 'چه اتفاقی می‌افتد', en: 'What happens' },
            { fa: 'مدت (هفته)', en: 'Weeks' },
          ],
          rows: [
            [
              { fa: 'تأیید درخواست خرید و کنترل بودجه', en: 'Requisition approval and budget check' },
              { fa: 'گردش کار تأیید و کنترل اعتبار مرکز هزینه یا AFE', en: 'Approval workflow and check against the cost centre or AFE budget' },
              2,
            ],
            [
              { fa: 'استعلام و ارزیابی پیشنهادها', en: 'Tender and bid evaluation' },
              { fa: 'ارزیابی فنی و بازرگانی، مذاکره و صدور سفارش خرید', en: 'Technical and commercial evaluation, negotiation, PO issue' },
              4,
            ],
            [
              { fa: 'ساخت توسط سازنده', en: 'Manufacturing' },
              { fa: 'همان زمانی که سازنده اعلام می‌کند', en: 'The time the manufacturer quotes' },
              11,
            ],
            [
              { fa: 'بازرسی پیش از حمل', en: 'Pre-shipment inspection' },
              { fa: 'بازرسی شخص ثالث و صدور گواهی‌ها', en: 'Third-party witness and certificates' },
              1,
            ],
            [
              { fa: 'حمل', en: 'Freight' },
              { fa: 'حمل دریایی یا زمینی تا داخل کشور', en: 'Sea or road freight into the country' },
              3,
            ],
            [
              { fa: 'ترخیص گمرکی', en: 'Customs clearance' },
              { fa: 'اسناد، ارزیابی و پرداخت حقوق ورودی', en: 'Documents, assessment and duties' },
              2,
            ],
            [
              { fa: 'رسید، کنترل کیفیت و جایابی', en: 'Receipt, QC and put-away' },
              { fa: 'رسید انبار، بازرسی و قرار دادن در محل نگهداری', en: 'Goods receipt, inspection and put-away into a bin' },
              1,
            ],
            [{ fa: '**جمع زمان تأمین**', en: '**Total lead time**' }, blank, 24],
          ],
          numericCols: [2],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'زمان ساخت با زمان تأمین یکی نیست', en: 'Manufacturing time is not lead time' },
          text: {
            fa: 'سازنده 11 هفته اعلام کرده، اما زمان تأمین واقعی 24 هفته است. اگر برنامه‌ریز فقط عدد 11 را در ERP وارد کند، درخواست خرید **13 هفته دیرتر** از زمان لازم صادر می‌شود و کمبود تقریباً حتمی است.',
            en: 'The manufacturer quotes 11 weeks, but the real lead time is 24 weeks. If the planner enters only 11 in the ERP, the requisition is raised **13 weeks too late** and a stockout is almost certain.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'در صنعت نفت و گاز برخی اقلام **زمان تأمین طولانی** دارند و رسیدن آن‌ها اغلب چند ماه طول می‌کشد: لوله‌های جداری و مغزی (OCTG) با گرید و اتصال خاص، تجهیزات سرچاهی و تاج چاه، قطعات کمپرسور و توربین از سازنده اصلی، شیرهای بزرگ با کلاس فشار بالا و هر کالایی که گواهی یا بازرسی ویژه لازم دارد. نیاز به این اقلام را باید از روی برنامه حفاری، برنامه تعمیر چاه و برنامه تعمیرات اساسی، ماه‌ها جلوتر دید.',
            en: 'In oil and gas some items are **long-lead items** that often take several months to arrive: casing and tubing (OCTG) in a specific grade and connection, wellheads and Christmas trees, compressor and turbine parts from the OEM, large high-pressure valves, and anything that needs special certification or inspection. Demand for these items has to be seen months ahead from the drilling programme, the well-intervention programme and the major-overhaul plan.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'نقطه سفارش = میانگین مصرف روزانه × زمان تأمین (روز) + موجودی اطمینان',
            en: 'Reorder point = Average daily demand × Lead time (days) + Safety stock',
          },
          note: {
            fa: 'نقطه سفارش مقداری از موجودی است که وقتی موجودی در دسترس به آن یا کمتر از آن برسد، باید سفارش تازه صادر شود.',
            en: 'The reorder point is the stock level at which, once available stock falls to it or below, a new order must be placed.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'مثال: انبار میدان روزانه به طور میانگین **4 بشکه** بازدارنده خوردگی (200310) به ایستگاه و چاه‌ها حواله می‌کند. زمان تأمین از تأمین‌کننده داخلی **16 روز** است و فعلاً موجودی اطمینان را **20 بشکه** فرض می‌کنیم (در بخش بعد آن را حساب می‌کنیم). نقطه سفارش = 4 × 16 + 20 = **84 بشکه**؛ یعنی 64 بشکه برای مصرف دوره انتظار و 20 بشکه برای روزهای غیرعادی.',
            en: 'Example: the Field Warehouse issues on average **4 drums** of corrosion inhibitor (200310) a day to the station and the wells. The lead time from the local supplier is **16 days**, and for now we assume a safety stock of **20 drums** (the next section calculates it). Reorder point = 4 × 16 + 20 = **84 drums**: 64 drums to cover demand while we wait, plus 20 for unusual days.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: موجودی در دسترس را مقایسه کنید', en: 'In practice: compare available stock' },
          text: {
            fa: 'ERP نقطه سفارش را با **موجودی در دسترس** مقایسه می‌کند، نه با موجودی فیزیکی: موجودی آزاد انبار، به‌علاوه سفارش‌های خرید باز و درخواست‌های خرید در جریان، منهای مقدار رزروشده برای دستور کارها و پروژه‌ها. اگر 30 بشکه برای اسیدکاری چاه AR-05 رزرو شده باشد، این 30 بشکه دیگر برای مصرف روزانه در دسترس نیست. همچنین اگر کالا ابتدا در انبار مرکزی رسید و سپس به انبار میدان منتقل می‌شود، زمان انتقال را هم به زمان تأمین اضافه کنید.',
            en: 'The ERP compares the reorder point with **available stock**, not physical stock: unrestricted stock, plus open purchase orders and requisitions in progress, minus quantities reserved for work orders and projects. If 30 drums are reserved for the acid job on well AR-05, those 30 drums are no longer available for daily use. And if goods are received at the Central Warehouse and then transferred to the Field Warehouse, add the transfer time to the lead time.',
          },
        },
      ],
    },
    {
      id: 'safety-stock',
      title: { fa: 'موجودی اطمینان', en: 'Safety stock' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**موجودی اطمینان** مقداری است که برای روزهای غیرعادی نگه می‌داریم: روزهایی که مصرف از میانگین بیشتر است یا کالا دیرتر از زمان معمول می‌رسد. اگر مصرف و زمان تأمین همیشه دقیقاً برابر میانگین بودند، به موجودی اطمینان نیازی نبود. دو روش رایج برای محاسبه آن وجود دارد: روش ساده و روش آماری.',
            en: '**Safety stock** is the quantity we keep for unusual days: days when demand runs above average or the goods arrive later than usual. If demand and lead time always matched their averages exactly, no safety stock would be needed. There are two common ways to calculate it: the simple method and the statistical method.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'روش ساده: موجودی اطمینان = (بیشترین مصرف روزانه × بیشترین زمان تأمین) − (میانگین مصرف روزانه × میانگین زمان تأمین)',
            en: 'Simple method: Safety stock = (Max daily demand × Max lead time) − (Average daily demand × Average lead time)',
          },
          note: {
            fa: 'برای 200310 بیشترین مصرف روزانه در دو سال گذشته 6 بشکه و طولانی‌ترین زمان تأمین 20 روز بوده است: 6 × 20 − 4 × 16 = 120 − 64 = 56 بشکه.',
            en: 'For 200310 the highest daily demand over the last two years was 6 drums and the longest lead time 20 days: 6 × 20 − 4 × 16 = 120 − 64 = 56 drums.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'روش ساده قابل‌فهم است و به داده کمی نیاز دارد، اما فرض می‌کند بدترین مصرف و بدترین تأخیر **هم‌زمان** رخ می‌دهند؛ پس معمولاً موجودی اطمینان بزرگی می‌دهد. برای اقلام ارزان یا اقلامی که داده آماری کافی ندارند مناسب است. روش آماری دقیق‌تر است و به **سطح خدمت** وابسته است: درصد دوره‌های سفارشی که در آن‌ها کمبود رخ نمی‌دهد.',
            en: 'The simple method is easy to follow and needs little data, but it assumes the worst demand and the worst delay happen **at the same time**, so it usually gives a large safety stock. It suits cheap items or items without enough history. The statistical method is more precise and depends on the **service level**: the percentage of order cycles without a stockout.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'روش آماری: موجودی اطمینان = z × σ_d × √L',
            en: 'Statistical method: Safety stock = z × σ_d × √L',
          },
          note: {
            fa: 'z ضریب سطح خدمت، σ_d انحراف معیار مصرف روزانه و L زمان تأمین بر حسب روز است (با فرض زمان تأمین ثابت).',
            en: 'z is the service-level factor, σ_d the standard deviation of daily demand and L the lead time in days (assuming a stable lead time).',
          },
        },
        {
          type: 'table',
          caption: { fa: 'ضریب z برای سطوح خدمت رایج', en: 'z factor for common service levels' },
          head: [
            { fa: 'سطح خدمت هدف (%)', en: 'Target service level (%)' },
            { fa: 'ضریب z', en: 'z factor' },
            { fa: 'معنی تقریبی', en: 'Rough meaning' },
          ],
          rows: [
            [90, 1.28, { fa: 'از هر 10 دوره سفارش، حدود یک بار کمبود', en: 'About one stockout in every 10 order cycles' }],
            [95, 1.65, { fa: 'حدود یک بار کمبود در 20 دوره', en: 'About one stockout in 20 cycles' }],
            [98, 2.05, { fa: 'حدود یک بار کمبود در 50 دوره', en: 'About one stockout in 50 cycles' }],
            [99, 2.33, { fa: 'حدود یک بار کمبود در 100 دوره', en: 'About one stockout in 100 cycles' }],
          ],
          numericCols: [0, 1],
        },
        {
          type: 'p',
          text: {
            fa: 'مثال: انحراف معیار مصرف روزانه 200310 برابر **2 بشکه** است و زمان تأمین 16 روز. برای سطح خدمت 95%: موجودی اطمینان = 1.65 × 2 × √16 = 1.65 × 2 × 4 = 13.2 که به **14 بشکه** گرد می‌شود. موجودی اطمینان را همیشه رو به بالا گرد کنید؛ نیم بشکه در انبار وجود ندارد.',
            en: 'Example: the standard deviation of daily demand for 200310 is **2 drums** and the lead time is 16 days. For a 95% service level: safety stock = 1.65 × 2 × √16 = 1.65 × 2 × 4 = 13.2, rounded up to **14 drums**. Always round safety stock up; there is no such thing as half a drum on the shelf.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'وقتی زمان تأمین هم نوسان دارد: موجودی اطمینان = z × √(L × σ_d² + d² × σ_L²)',
            en: 'When lead time also varies: Safety stock = z × √(L × σ_d² + d² × σ_L²)',
          },
          note: {
            fa: 'd میانگین مصرف روزانه و σ_L انحراف معیار زمان تأمین است. اگر σ_L برابر 3 روز باشد: √(16 × 4 + 16 × 9) = √208 ≈ 14.42 و موجودی اطمینان = 1.65 × 14.42 ≈ 23.8، یعنی 24 بشکه.',
            en: 'd is average daily demand and σ_L the standard deviation of lead time. With σ_L = 3 days: √(16 × 4 + 16 × 9) = √208 ≈ 14.42, so safety stock = 1.65 × 14.42 ≈ 23.8, i.e. 24 drums.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'کدام عدد را انتخاب کنیم؟', en: 'Which number do we use?' },
          text: {
            fa: 'سه عدد به دست آمد: 14 بشکه (فقط نوسان مصرف)، 24 بشکه (نوسان مصرف و زمان تأمین) و 56 بشکه (روش ساده). چون تأمین‌کننده گاهی دیر تحویل می‌دهد، 24 بشکه منطقی‌ترین انتخاب است و نقطه سفارش به 4 × 16 + 24 = **88 بشکه** اصلاح می‌شود. درس مهم: در صنعت نفت و گاز، **نوسان زمان تأمین** اغلب از نوسان مصرف خطرناک‌تر است.',
            en: 'We now have three figures: 14 drums (demand variability only), 24 drums (demand and lead-time variability) and 56 drums (simple method). Because the supplier is sometimes late, 24 drums is the most sensible choice, and the reorder point becomes 4 × 16 + 24 = **88 drums**. The key lesson: in oil and gas, **lead-time variability** is often more dangerous than demand variability.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'سطح خدمت را برای همه کالاها یکسان نگیرید. برای مثال، یک شرکت بهره‌بردار ممکن است برای قطعات حیاتی سطح خدمت 98 تا 99 درصد و برای اقلام مصرفی عمومی 90 تا 95 درصد هدف بگیرد. داده مصرف را از سوابق حواله‌های ERP استخراج کنید و مصرف‌های غیرعادی یک‌باره (مثلاً حواله یک‌جای یک پروژه) را از محاسبه انحراف معیار کنار بگذارید، وگرنه موجودی اطمینان بی‌دلیل بزرگ می‌شود.',
            en: 'Do not use one service level for every item. For example, an operator might target 98 to 99 percent for critical spares and 90 to 95 percent for general consumables. Take demand history from ERP goods-issue records, and exclude one-off spikes (such as a single bulk issue to a project) from the standard deviation, or safety stock will be inflated for no reason.',
          },
        },
      ],
    },
    {
      id: 'minmax-eoq',
      title: { fa: 'سیاست حداقل و حداکثر و مقدار اقتصادی سفارش', en: 'Min/max and the economic order quantity' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'نقطه سفارش می‌گوید **چه زمانی** سفارش دهیم. برای پاسخ به **چه مقدار** دو روش رایج داریم. در **سیاست حداقل و حداکثر**، حداقل همان نقطه سفارش است و هر بار که موجودی در دسترس به حداقل یا کمتر برسد، آن‌قدر سفارش می‌دهیم که موجودی به حداکثر برگردد. حداکثر را معمولاً با ظرفیت انبار، تاریخ انقضا و بودجه تعیین می‌کنند.',
            en: 'The reorder point tells us **when** to order. For **how much**, there are two common methods. Under a **min/max policy**, the minimum is the reorder point, and whenever available stock falls to the minimum or below, we order enough to bring it back up to the maximum. The maximum is usually set by storage capacity, shelf life and budget.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'مقدار سفارش = حداکثر − (موجودی آزاد + سفارش‌های باز − مقدار رزروشده)',
            en: 'Order quantity = Max − (Unrestricted stock + Open orders − Reserved quantity)',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'مثال: برای 200310 حداقل 88 و حداکثر 200 بشکه تعیین شده است. در بازبینی هفتگی، موجودی آزاد 81 بشکه است، سفارش بازی وجود ندارد و 30 بشکه برای اسیدکاری چاه AR-05 رزرو شده است. موجودی در دسترس = 81 − 30 = 51 که از 88 کمتر است؛ پس مقدار سفارش = 200 − 51 = **149 بشکه**. اگر رزرو را نادیده می‌گرفتیم، فقط 119 بشکه سفارش می‌دادیم و چند روز بعد با کمبود روبه‌رو می‌شدیم.',
            en: 'Example: 200310 has a minimum of 88 and a maximum of 200 drums. At the weekly review, unrestricted stock is 81 drums, there are no open orders, and 30 drums are reserved for the acid job on well AR-05. Available stock = 81 − 30 = 51, below 88, so the order quantity = 200 − 51 = **149 drums**. Had we ignored the reservation we would have ordered only 119 drums and run short a few days later.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'روش دوم، **مقدار اقتصادی سفارش** (EOQ) است: مقداری که **جمع هزینه سفارش و هزینه نگهداری سالانه** را کمینه می‌کند. سفارش‌های کوچک یعنی دفعات زیاد و هزینه سفارش بالا؛ سفارش‌های بزرگ یعنی موجودی متوسط بالا و هزینه نگهداری زیاد. EOQ نقطه تعادل این دو است.',
            en: 'The second method is the **economic order quantity** (EOQ): the quantity that minimises **the sum of annual ordering and holding costs**. Small orders mean many orders and a high ordering cost; large orders mean a high average stock and a high holding cost. The EOQ is the balance point between the two.',
          },
        },
        {
          type: 'formula',
          text: { fa: 'EOQ = √(2 × D × S ÷ H)', en: 'EOQ = √(2 × D × S ÷ H)' },
          note: {
            fa: 'D مصرف سالانه، S هزینه هر بار سفارش و H هزینه نگهداری هر واحد در سال (بهای واحد × نرخ نگهداری) است.',
            en: 'D is annual demand, S the cost per order and H the holding cost per unit per year (unit cost × holding rate).',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'مثال: مصرف سالانه واشر اسپیرال 4 اینچ (400700) برابر 2,400 عدد، هزینه هر سفارش 150 و بهای هر واشر 15 است. با نرخ نگهداری 20%: H = 15 × 20% = 3. پس EOQ = √(2 × 2,400 × 150 ÷ 3) = √240,000 ≈ **490 عدد**، یعنی حدود 5 سفارش در سال. جدول زیر نشان می‌دهد چرا این مقدار بهترین است.',
            en: 'Example: annual demand for the 4" spiral-wound gasket (400700) is 2,400, each order costs 150 and each gasket costs 15. With a 20% holding rate, H = 15 × 20% = 3. So EOQ = √(2 × 2,400 × 150 ÷ 3) = √240,000 ≈ **490 gaskets**, about 5 orders a year. The table shows why this quantity is the cheapest.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'مقایسه هزینه سالانه برای مقادیر مختلف سفارش واشر 400700', en: 'Annual cost for different order quantities of gasket 400700' },
          head: [
            { fa: 'مقدار هر سفارش', en: 'Order quantity' },
            { fa: 'تعداد سفارش در سال', en: 'Orders per year' },
            { fa: 'هزینه سفارش سالانه', en: 'Annual ordering cost' },
            { fa: 'هزینه نگهداری سالانه', en: 'Annual holding cost' },
            { fa: 'جمع هزینه', en: 'Total cost' },
          ],
          rows: [
            [200, 12, 1800, 300, 2100],
            [490, 4.9, 734.69, 735, 1469.69],
            [1000, 2.4, 360, 1500, 1860],
          ],
          numericCols: [0, 1, 2, 3, 4],
        },
        {
          type: 'p',
          text: {
            fa: 'هزینه سفارش سالانه = (D ÷ Q) × S و هزینه نگهداری سالانه = (Q ÷ 2) × H. در 490 جمع هزینه کمترین است و هزینه سفارش و هزینه نگهداری تقریباً برابرند. منحنی هزینه نزدیک EOQ «تخت» است: سفارش 400 یا 600 عددی هر دو جمع هزینه 1,500 دارند که فقط حدود 2% بیشتر است. پس گرد کردن EOQ به اندازه بسته‌بندی تأمین‌کننده اشکالی ندارد.',
            en: 'Annual ordering cost = (D ÷ Q) × S and annual holding cost = (Q ÷ 2) × H. At 490 the total is lowest and ordering and holding costs are almost equal. The cost curve is "flat" near the EOQ: orders of 400 or 600 both cost 1,500 in total, only about 2% more. So rounding the EOQ to the supplier’s pack size does little harm.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: EOQ فقط نقطه شروع است', en: 'In practice: the EOQ is only a starting point' },
          text: {
            fa: 'مدل EOQ فرض می‌کند مصرف یکنواخت و قیمت ثابت است. در عمل آن را با این محدودیت‌ها اصلاح کنید: حداقل مقدار سفارش و بسته‌بندی تأمین‌کننده؛ تاریخ انقضای مواد شیمیایی؛ ظرفیت انبار و محوطه لوله؛ زمان‌بندی بودجه و AFE؛ تخفیف مقداری و قراردادهای چارچوبی با تحویل مرحله‌ای. برای قطعات یدکی حیاتی با مصرف کم و نامنظم، EOQ معنا ندارد و تصمیم بر پایه ریسک گرفته می‌شود.',
            en: 'The EOQ model assumes steady demand and a fixed price. In practice, adjust it for minimum order quantities and pack sizes, chemical shelf life, warehouse and pipe-yard capacity, budget and AFE timing, quantity discounts and frame agreements with call-off deliveries. For critical spares with low, irregular demand the EOQ is meaningless; those decisions are made on risk.',
          },
        },
      ],
    },
    {
      id: 'mrp-critical',
      title: { fa: 'مبانی MRP و راهبرد قطعات یدکی حیاتی', en: 'MRP basics and critical-spares strategy' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'نقطه سفارش به **گذشته** نگاه می‌کند: فرض می‌کند مصرف آینده شبیه میانگین گذشته است. اما بسیاری از نیازهای یک شرکت بهره‌بردار از پیش معلوم‌اند: برنامه حفاری، برنامه تعمیر چاه، تعمیرات اساسی کمپرسور و برنامه نگهداری پیشگیرانه با فهرست قطعات استاندارد هر کار. **برنامه‌ریزی نیازمندی‌های مواد** (MRP) این نیازهای آینده را از برنامه‌ها می‌خواند، موجودی و سفارش‌های باز را از آن کم می‌کند و به اندازه زمان تأمین **به عقب** می‌رود تا بگوید سفارش چه زمانی باید صادر شود.',
            en: 'A reorder point looks at the **past**: it assumes future demand will look like past averages. Yet much of an operator’s demand is known in advance: the drilling programme, the well-intervention programme, compressor overhauls and preventive maintenance plans with a standard parts list for each task. **Material requirements planning** (MRP) reads these future needs from the plans, nets off stock and open orders, and steps **back** by the lead time to say when each order must be placed.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'نیاز خالص = نیاز ناخالص + موجودی اطمینان − موجودی پیش‌بینی‌شده ابتدای دوره − دریافت‌های برنامه‌ریزی‌شده',
            en: 'Net requirement = Gross requirement + Safety stock − Projected stock at start of period − Scheduled receipts',
          },
          note: {
            fa: 'اگر نتیجه منفی شود، نیاز خالص صفر است. سفارش برنامه‌ریزی‌شده در دوره نیاز «دریافت» و به اندازه زمان تأمین زودتر «صادر» می‌شود.',
            en: 'If the result is negative, the net requirement is zero. A planned order is "received" in the period of need and "released" one lead time earlier.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'مثال: برنامه تعمیر چاه برای شش ماه آینده سه عملیات دارد که هر کدام **250 شاخه** لوله مغزی 3-1/2 اینچ (100120) لازم دارد: چاه AR-03 در ماه 3، چاه AR-08 در ماه 5 و چاه AR-10 در ماه 6. موجودی فعلی 320 شاخه، سفارش باز صفر، موجودی اطمینان 50 شاخه و زمان تأمین 2 ماه است. اندازه سفارش «به اندازه نیاز» است: هر دوره دقیقاً همان نیاز خالص سفارش داده می‌شود.',
            en: 'Example: the well-intervention programme for the next six months has three jobs, each needing **250 joints** of 3-1/2" tubing (100120): well AR-03 in month 3, AR-08 in month 5 and AR-10 in month 6. Current stock is 320 joints, open orders are zero, safety stock is 50 joints and the lead time is 2 months. Lot sizing is "lot-for-lot": each period orders exactly its net requirement.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'جدول MRP لوله مغزی 100120 (شاخه)', en: 'MRP table for tubing 100120 (joints)' },
          head: [
            { fa: 'ردیف', en: 'Row' },
            { fa: 'ماه 1', en: 'M1' },
            { fa: 'ماه 2', en: 'M2' },
            { fa: 'ماه 3', en: 'M3' },
            { fa: 'ماه 4', en: 'M4' },
            { fa: 'ماه 5', en: 'M5' },
            { fa: 'ماه 6', en: 'M6' },
          ],
          rows: [
            [{ fa: 'نیاز ناخالص', en: 'Gross requirement' }, 0, 0, 250, 0, 250, 250],
            [{ fa: 'دریافت برنامه‌ریزی‌شده (سفارش باز)', en: 'Scheduled receipts (open POs)' }, 0, 0, 0, 0, 0, 0],
            [{ fa: 'موجودی پیش‌بینی‌شده پایان ماه', en: 'Projected stock at month-end' }, 320, 320, 70, 70, 50, 50],
            [{ fa: 'نیاز خالص', en: 'Net requirement' }, 0, 0, 0, 0, 230, 250],
            [{ fa: 'دریافت سفارش برنامه‌ریزی‌شده', en: 'Planned order receipt' }, 0, 0, 0, 0, 230, 250],
            [{ fa: 'صدور سفارش برنامه‌ریزی‌شده', en: 'Planned order release' }, 0, 0, 230, 250, 0, 0],
          ],
          numericCols: [1, 2, 3, 4, 5, 6],
        },
        {
          type: 'p',
          text: {
            fa: 'خواندن جدول: در ماه 3 پس از حواله 250 شاخه برای AR-03، 70 شاخه می‌ماند که از موجودی اطمینان بیشتر است؛ پس سفارشی لازم نیست. در ماه 5 نیاز 250 است اما فقط 70 شاخه داریم؛ برای این‌که 50 شاخه اطمینان بماند، 250 + 50 − 70 = **230 شاخه** باید برسد. در ماه 6 نیاز خالص 250 + 50 − 50 = **250 شاخه** است. با زمان تأمین 2 ماه، سفارش اول باید در **ماه 3** و سفارش دوم در **ماه 4** صادر شود. ERP همین سفارش‌های برنامه‌ریزی‌شده را به درخواست خرید تبدیل می‌کند.',
            en: 'Reading the table: in month 3, after issuing 250 joints to AR-03, 70 joints remain, above safety stock, so no order is needed. In month 5 the need is 250 but only 70 are on hand; to keep 50 as safety stock, 250 + 50 − 70 = **230 joints** must arrive. In month 6 the net requirement is 250 + 50 − 50 = **250 joints**. With a 2-month lead time, the first order must be released in **month 3** and the second in **month 4**. The ERP turns exactly these planned orders into purchase requisitions.',
          },
        },
        {
          type: 'h',
          text: { fa: 'قطعات یدکی حیاتی', en: 'Critical spares' },
        },
        {
          type: 'p',
          text: {
            fa: 'برخی قطعات را نمی‌توان با نقطه سفارش یا EOQ مدیریت کرد، چون مصرفشان کم و نامنظم است اما نبودنشان پرهزینه یا خطرناک است. **قطعه یدکی حیاتی** قطعه‌ای است که نبودنش تولید، ایمنی یا محیط زیست را به خطر می‌اندازد. تصمیم درباره این قطعات با **ارزیابی بحرانیت** گرفته می‌شود، نه فقط با آمار مصرف. جدول زیر دو کالا را با هم مقایسه می‌کند.',
            en: 'Some parts cannot be managed with a reorder point or an EOQ, because their demand is low and irregular yet their absence is costly or dangerous. A **critical spare** is a part whose absence puts production, safety or the environment at risk. Decisions about these parts come from a **criticality assessment**, not from usage statistics alone. The table compares two items.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'ارزیابی بحرانیت: کیت سوپاپ در برابر واشر', en: 'Criticality assessment: valve kit vs gasket' },
          head: [
            { fa: 'معیار', en: 'Criterion' },
            { fa: 'کیت سوپاپ K-201 (300500)', en: 'K-201 valve kit (300500)' },
            { fa: 'واشر 4 اینچ (400700)', en: '4" gasket (400700)' },
          ],
          rows: [
            [
              { fa: 'اثر بر تولید', en: 'Production impact' },
              { fa: 'بالا؛ در این مثال K-201 کمپرسور پشتیبان ندارد', en: 'High; in this example K-201 has no standby unit' },
              { fa: 'کم؛ کمبود فقط یک کار را چند روز عقب می‌اندازد', en: 'Low; a shortage delays one job by a few days' },
            ],
            [
              { fa: 'اثر HSE', en: 'HSE impact' },
              { fa: 'متوسط؛ توقف کمپرسور به سوزاندن گاز می‌انجامد', en: 'Medium; a compressor stop leads to flaring' },
              { fa: 'کم', en: 'Low' },
            ],
            [
              { fa: 'زمان تأمین', en: 'Lead time' },
              { fa: 'حدود 24 هفته از سازنده اصلی', en: 'About 24 weeks from the OEM' },
              { fa: 'چند روز از بازار داخلی', en: 'A few days from local suppliers' },
            ],
            [
              { fa: 'جایگزین و تعمیرپذیری', en: 'Redundancy and repairability' },
              { fa: 'جایگزین ندارد؛ فقط برخی اجزا قابل بازسازی‌اند', en: 'No alternative; only some parts can be refurbished' },
              { fa: 'کالای استاندارد با تأمین‌کنندگان متعدد', en: 'Standard item with many suppliers' },
            ],
            [
              { fa: 'نتیجه', en: 'Result' },
              { fa: '**حیاتی**: موجودی بر پایه ریسک نگه داشته شود', en: '**Critical**: hold stock based on risk' },
              { fa: '**عادی**: نقطه سفارش و EOQ', en: '**Standard**: reorder point and EOQ' },
            ],
          ],
        },
        {
          type: 'list',
          items: [
            {
              fa: '**قطعه یدکی بیمه‌ای**: قطعه گران و حیاتی که شاید سال‌ها مصرف نشود (مثل روتور یدکی کمپرسور) و فقط برای روز خرابی نگه داشته می‌شود. مصرف صفر آن به معنی منسوخ بودن نیست.',
              en: '**Insurance spare**: an expensive critical part that may not be used for years (such as a spare compressor rotor) and is held only for the day of a failure. Zero usage does not mean it is obsolete.',
            },
            {
              fa: '**اشتراک موجودی**: چند بهره‌بردار یا شرکای یک مشارکت که تجهیز مشابه دارند، یک مجموعه قطعه حیاتی را مشترک نگه می‌دارند و هزینه را تقسیم می‌کنند.',
              en: '**Pooling**: several operators, or the partners in a joint venture, with similar equipment hold one shared set of critical spares and split the cost.',
            },
            {
              fa: '**موجودی امانی تأمین‌کننده**: کالا در انبار شرکت است، اما تا زمان حواله متعلق به تأمین‌کننده می‌ماند و فقط هنگام مصرف خریداری می‌شود.',
              en: '**Vendor consignment stock**: goods sit in the company’s warehouse but belong to the supplier until issued, and are bought only when used.',
            },
            {
              fa: '**موجودی مدیریت‌شده توسط فروشنده** (VMI): تأمین‌کننده سطح موجودی را پایش و خودش تکمیل می‌کند.',
              en: '**Vendor-managed inventory** (VMI): the supplier monitors the stock level and replenishes it itself.',
            },
            {
              fa: '**قرارداد چارچوبی**: قیمت و زمان تحویل از پیش توافق شده است تا زمان استعلام و ارزیابی از زمان تأمین حذف شود.',
              en: '**Frame agreement**: price and delivery time are agreed in advance, removing tender and evaluation time from the lead time.',
            },
            {
              fa: '**تعمیر و بازگشت**: قطعه معیوب برای بازسازی به کارگاه یا سازنده فرستاده می‌شود و پس از تعمیر به انبار برمی‌گردد.',
              en: '**Repair and return**: a failed part is sent to a workshop or the OEM for refurbishment and comes back into stock.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'نکته مالی: موجودی کالا یا دارایی ثابت؟', en: 'Finance note: inventory or fixed asset?' },
          text: {
            fa: 'طبق IAS 16، قطعات یدکی عمده و تجهیزات پشتیبانی که تعریف دارایی ثابت مشهود را دارند (مثلاً انتظار می‌رود بیش از یک دوره استفاده شوند)، به جای موجودی کالا به عنوان دارایی ثابت شناسایی و مستهلک می‌شوند؛ بقیه قطعات یدکی طبق IAS 2 موجودی کالا هستند. این تصمیم را واحد مالی بر پایه خط‌مشی شرکت می‌گیرد؛ کار انبار این است که این قطعات را در ERP درست علامت‌گذاری کند.',
            en: 'Under IAS 16, major spare parts and stand-by equipment that meet the definition of property, plant and equipment (for example, because they are expected to be used during more than one period) are recognised and depreciated as fixed assets rather than carried as inventory; other spares are inventory under IAS 2. Finance makes this call under company policy; the warehouse’s job is to flag these items correctly in the ERP.',
          },
        },
      ],
    },
    {
      id: 'erp-auto-pr',
      title: { fa: 'ERP: ایجاد خودکار درخواست خرید', en: 'ERP: automatic purchase requisitions' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در ERP، برنامه‌ریز مواد موجودی هزاران کالا را هر روز دستی بررسی نمی‌کند. او **پارامترهای برنامه‌ریزی** را در داده پایه کالا تنظیم می‌کند و سیستم در اجرای MRP (معمولاً شبانه) موجودی در دسترس را با این پارامترها مقایسه می‌کند و **درخواست خرید** را خودکار می‌سازد. این همان نقطه اتصال ماژول انبار به ماژول تدارکات و سپس به ماژول مالی است.',
            en: 'In an ERP, the material planner does not check thousands of items by hand every day. They set **planning parameters** in the material master, and the system’s MRP run (usually nightly) compares available stock with those parameters and creates **purchase requisitions** automatically. This is where the Inventory module hands over to Procurement, and later to Finance.',
          },
        },
        {
          type: 'diagram',
          id: 'erp-modules',
          caption: {
            fa: 'انبار نیاز را تشخیص می‌دهد، تدارکات می‌خرد و مالی ثبت می‌کند.',
            en: 'Inventory detects the need, Procurement buys and Finance posts.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'فیلدهای برنامه‌ریزی در داده پایه کالا (نمونه: کیت سوپاپ 300500)', en: 'Planning fields in the material master (example: valve kit 300500)' },
          head: [
            { fa: 'فیلد', en: 'Field' },
            { fa: 'معنی', en: 'Meaning' },
            { fa: 'مقدار نمونه', en: 'Example value' },
          ],
          rows: [
            [
              { fa: 'نوع برنامه‌ریزی', en: 'Planning (MRP) type' },
              { fa: 'نقطه سفارش، MRP بر پایه برنامه‌ها یا بدون برنامه‌ریزی', en: 'Reorder point, plan-driven MRP or no planning' },
              { fa: 'نقطه سفارش', en: 'Reorder point' },
            ],
            [
              { fa: 'نقطه سفارش', en: 'Reorder point' },
              { fa: 'موجودی در دسترسی که سفارش را فعال می‌کند', en: 'Available stock that triggers an order' },
              { fa: '3 دست', en: '3 sets' },
            ],
            [
              { fa: 'موجودی اطمینان', en: 'Safety stock' },
              { fa: 'ذخیره برای نوسان مصرف و زمان تأمین', en: 'Buffer for demand and lead-time variability' },
              { fa: '1 دست', en: '1 set' },
            ],
            [
              { fa: 'حداکثر موجودی', en: 'Maximum stock level' },
              { fa: 'سقف موجودی در سیاست حداقل و حداکثر', en: 'Ceiling for the min/max policy' },
              { fa: '5 دست', en: '5 sets' },
            ],
            [
              { fa: 'روش تعیین اندازه سفارش', en: 'Lot-size procedure' },
              { fa: 'به اندازه نیاز، تکمیل تا حداکثر یا مقدار ثابت (مثلاً EOQ)', en: 'Lot-for-lot, replenish to maximum, or fixed quantity (e.g. EOQ)' },
              { fa: 'تکمیل تا حداکثر', en: 'Replenish to maximum' },
            ],
            [
              { fa: 'زمان پردازش خرید', en: 'Purchasing processing time' },
              { fa: 'زمان داخلی از درخواست تا سفارش خرید (تأیید و استعلام)', en: 'Internal time from requisition to PO (approval and tender)' },
              { fa: '6 هفته', en: '6 weeks' },
            ],
            [
              { fa: 'زمان تحویل برنامه‌ریزی‌شده', en: 'Planned delivery time' },
              { fa: 'از صدور سفارش خرید تا رسیدن کالا (ساخت، بازرسی، حمل، ترخیص)', en: 'From PO to arrival (manufacturing, inspection, freight, customs)' },
              { fa: '17 هفته', en: '17 weeks' },
            ],
            [
              { fa: 'زمان پردازش رسید', en: 'Goods-receipt processing time' },
              { fa: 'بازرسی و جایابی پس از رسیدن کالا', en: 'Inspection and put-away after arrival' },
              { fa: '1 هفته', en: '1 week' },
            ],
            [
              { fa: 'برنامه‌ریز مواد مسئول', en: 'MRP controller' },
              { fa: 'کسی که خروجی MRP این کالا را بررسی می‌کند', en: 'The person who reviews MRP output for this item' },
              { fa: 'برنامه‌ریز تجهیزات دوار', en: 'Rotating-equipment planner' },
            ],
            [
              { fa: 'نوع تأمین', en: 'Procurement type' },
              { fa: 'خرید خارجی، ساخت داخلی یا انتقال از انبار دیگر', en: 'External purchase, in-house production or transfer from another warehouse' },
              { fa: 'خرید خارجی', en: 'External purchase' },
            ],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'جمع سه زمان 6 + 17 + 1 = 24 هفته است و با جدول زمان تأمین می‌خواند. مصرف سالانه کیت سوپاپ حدود 4 دست است؛ پس مصرف در 24 هفته حدود 4 × 24 ÷ 52 ≈ 1.85، یعنی 2 دست است و با 1 دست موجودی اطمینان، نقطه سفارش **3 دست** می‌شود. وقتی پس از حواله برای دستور کار WO-45120 موجودی در دسترس به 3 دست می‌رسد، اجرای شبانه MRP درخواست خرید PR-26-0412 را برای 5 − 3 = **2 دست** می‌سازد.',
            en: 'The three times add up to 6 + 17 + 1 = 24 weeks, matching the lead-time table. The valve kit is used about 4 sets a year, so demand over 24 weeks is about 4 × 24 ÷ 52 ≈ 1.85, i.e. 2 sets; with 1 set of safety stock the reorder point is **3 sets**. When an issue to work order WO-45120 brings available stock down to 3 sets, the nightly MRP run creates requisition PR-26-0412 for 5 − 3 = **2 sets**.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'اجرای MRP', en: 'MRP run' },
              text: {
                fa: 'سیستم برای هر کالا موجودی در دسترس (موجودی آزاد + سفارش‌های باز − رزروها) را با نقطه سفارش یا نیازهای برنامه‌ریزی‌شده مقایسه می‌کند.',
                en: 'For every item the system compares available stock (unrestricted + open orders − reservations) with the reorder point or the planned requirements.',
              },
            },
            {
              title: { fa: 'سفارش برنامه‌ریزی‌شده یا درخواست خرید', en: 'Planned order or requisition' },
              text: {
                fa: 'برای هر کمبود، سفارش برنامه‌ریزی‌شده یا مستقیماً درخواست خرید با مقدار، تاریخ نیاز، انبار مقصد و برنامه‌ریز مسئول ساخته می‌شود.',
                en: 'For each shortfall it creates a planned order, or directly a requisition, with quantity, need date, receiving warehouse and responsible planner.',
              },
            },
            {
              title: { fa: 'پیام‌های استثنا', en: 'Exception messages' },
              text: {
                fa: 'سیستم مواردی مثل «سفارش دیر شده است»، «سفارش را جلو بینداز» یا «این سفارش دیگر لازم نیست» را گزارش می‌کند.',
                en: 'The system flags cases such as "order is past due", "bring the order forward" or "this order is no longer needed".',
              },
            },
            {
              title: { fa: 'بررسی برنامه‌ریز مواد', en: 'MRP controller review' },
              text: {
                fa: 'برنامه‌ریز خروجی را با واقعیت تطبیق می‌دهد (تغییر برنامه تعمیرات، کالای قابل انتقال از انبار مرکزی) و آن را تأیید یا اصلاح می‌کند.',
                en: 'The planner checks the output against reality (a changed maintenance plan, stock that can be transferred from the Central Warehouse) and confirms or adjusts it.',
              },
            },
            {
              title: { fa: 'گردش کار تأیید', en: 'Approval workflow' },
              text: {
                fa: 'درخواست بر پایه مبلغ و موضوع هزینه (مرکز هزینه یا AFE) به تأییدکننده‌ای می‌رود که اختیار آن مبلغ را دارد.',
                en: 'The requisition is routed by value and cost object (cost centre or AFE) to an approver with authority for that amount.',
              },
            },
            {
              title: { fa: 'تبدیل به سفارش خرید', en: 'Conversion to a purchase order' },
              text: {
                fa: 'کارشناس خرید درخواست تأییدشده را به استعلام و سفارش خرید تبدیل می‌کند و چرخه تأمین ادامه پیدا می‌کند.',
                en: 'The buyer converts the approved requisition into a request for quotation and a purchase order, and the procurement cycle continues.',
              },
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: '**چه چیزی به مالی می‌رود؟** درخواست خرید هیچ سند حسابداری ایجاد نمی‌کند، چون هنوز تعهدی به تأمین‌کننده وجود ندارد. اگر درخواست برای مصرف مستقیم یک مرکز هزینه یا AFE باشد، بسیاری از ERPها آن را به عنوان **تعهد بودجه** نگه می‌دارند تا بودجه آزاد کمتر نشان داده شود؛ اما این ثبت در دفتر کل نیست. درخواست‌های خرید برای انبار موضوع هزینه ندارند، چون هزینه در زمان حواله به دستور کار یا پروژه شناسایی می‌شود. نخستین ثبت خودکار مالی در **رسید انبار** و سپس در **ثبت فاکتور** ایجاد می‌شود:',
            en: '**What reaches Finance?** A purchase requisition creates no accounting document, because there is no obligation to a supplier yet. If the requisition is for direct consumption by a cost centre or AFE, many ERPs hold it as a **budget commitment** so that the available budget shows less; but that is not a general-ledger entry. Requisitions for stock carry no cost object, because the cost is recognised when the goods are issued to a work order or project. The first automatic Finance entry comes at **goods receipt**, and the next at **invoice receipt**:',
          },
        },
        {
          type: 'journal',
          title: {
            fa: 'ثبت‌های خودکار پس از درخواست خرید PR-26-0412 (2 دست × 4,500 = 9,000)',
            en: 'Automatic entries following requisition PR-26-0412 (2 sets × 4,500 = 9,000)',
          },
          entries: [
            {
              date: { fa: 'رسید انبار GR-26-0871', en: 'Goods receipt GR-26-0871' },
              lines: [
                { account: { fa: 'موجودی قطعات یدکی (انبار میدان)', en: 'Inventory: spare parts (Field Warehouse)' }, debit: 9000 },
                { account: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing' }, credit: 9000 },
              ],
              memo: {
                fa: 'کیت‌ها با قیمت سفارش خرید وارد انبار میدان می‌شوند.',
                en: 'The kits enter the Field Warehouse at the purchase-order price.',
              },
            },
            {
              date: { fa: 'ثبت فاکتور تأمین‌کننده', en: 'Supplier invoice' },
              lines: [
                { account: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing' }, debit: 9000 },
                { account: { fa: 'حساب‌های پرداختنی تجاری', en: 'Accounts payable: suppliers' }, credit: 9000 },
              ],
              memo: {
                fa: 'تطبیق سه‌طرفه انجام شد و حساب واسط برای این سفارش صفر شد.',
                en: 'Three-way match passed and the clearing account is zero for this order.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'پیوند با بازیافت هزینه', en: 'The cost-recovery link' },
          text: {
            fa: 'در بسیاری از قراردادهای نفتی، بهای کالایی که برای انبار خریده می‌شود زمانی قابل بازیافت می‌شود که به عملیات حواله شود، نه زمانی که در انبار است (قواعد دقیق را از روش حسابداری قرارداد خود بررسی کنید). پس هر بشکه یا قطعه اضافه که بی‌دلیل در انبار مانده، پولی است که پرداخت شده اما هنوز بازیافت نشده است؛ و اگر منسوخ شود، ممکن است حسابرس شرکا یا کارفرما آن را نپذیرد. برنامه‌ریزی درست تأمین هم تولید را پیوسته نگه می‌دارد و هم نقدینگی را.',
            en: 'Under many petroleum contracts, the cost of materials bought for stock becomes recoverable when they are issued to operations, not while they sit in the warehouse (check the accounting procedure of your own contract). So every surplus drum or part sitting idle is cash that has been paid but not yet recovered, and if it becomes obsolete, partner or government auditors may refuse it. Good replenishment planning protects both production continuity and cash.',
          },
        },
        {
          type: 'h',
          text: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' },
        },
        {
          type: 'list',
          items: [
            { fa: 'یک نقطه سفارش یا یک سطح خدمت برای همه کالاها؛ قطعه حیاتی و دستکش کار نیاز یکسانی ندارند.', en: 'One reorder rule or one service level for every item; a critical spare and a pair of work gloves do not need the same treatment.' },
            { fa: 'وارد کردن زمان ساخت تأمین‌کننده به جای کل زمان تأمین (تأیید، استعلام، حمل، ترخیص و بازرسی).', en: 'Entering the supplier’s manufacturing time instead of the full lead time (approval, tender, freight, customs and inspection).' },
            { fa: 'نادیده گرفتن نوسان زمان تأمین در محاسبه موجودی اطمینان.', en: 'Ignoring lead-time variability when calculating safety stock.' },
            { fa: 'استفاده از EOQ برای قطعات یدکی حیاتی با مصرف نامنظم.', en: 'Using the EOQ for critical spares with irregular demand.' },
            { fa: 'رها کردن پارامترهای MRP برای سال‌ها، در حالی که مصرف و تأمین‌کننده عوض شده‌اند.', en: 'Leaving MRP parameters untouched for years while demand and suppliers change.' },
            { fa: 'مقایسه نقطه سفارش با موجودی فیزیکی به جای موجودی در دسترس (بدون کسر رزروها).', en: 'Comparing the reorder point with physical stock instead of available stock (reservations not deducted).' },
            { fa: 'ساختن درخواست‌های خرید دستی به موازات MRP، که به سفارش تکراری و موجودی اضافه می‌رسد.', en: 'Raising manual requisitions alongside MRP, which leads to duplicate orders and surplus stock.' },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'هشدار: پارامتر صفر برای قطعه حیاتی', en: 'Warning: zero parameters on a critical spare' },
          text: {
            fa: 'اگر نقطه سفارش و موجودی اطمینان کیت سوپاپ K-201 صفر باشد، سیستم فقط پس از خرابی سفارش می‌دهد؛ یعنی 24 هفته بدون قطعه. پارامترهای قطعات حیاتی را هر سال با تیم نگهداری و بهره‌برداری بازبینی کنید و هر تغییر را با دلیل و نام تأییدکننده در ERP ثبت کنید.',
            en: 'If the reorder point and safety stock of the K-201 valve kit are zero, the system orders only after a failure, which means 24 weeks without the part. Review critical-spare parameters every year with maintenance and operations, and record every change in the ERP with a reason and the approver’s name.',
          },
        },
      ],
    },
    {
      id: 'practice',
      title: { fa: 'تمرین', en: 'Practice' },
      blocks: [
        {
          type: 'exercise',
          title: { fa: 'نقطه سفارش باریت در حفاری AR-12', en: 'Barite reorder point while drilling AR-12' },
          difficulty: 'easy',
          problem: {
            fa: 'در دوره حفاری چاه AR-12، انبار میدان روزانه به طور میانگین 12 تن باریت (200300) حواله می‌کند. زمان تأمین از تأمین‌کننده داخلی 10 روز و موجودی اطمینان 40 تن است. موجودی امروز 175 تن است و رزرو یا سفارش بازی وجود ندارد. (الف) نقطه سفارش را حساب کنید. (ب) اگر مصرف روزانه 12 تن ادامه یابد، در کدام روز باید درخواست خرید صادر شود؟',
            en: 'While well AR-12 is being drilled, the Field Warehouse issues on average 12 tonnes of barite (200300) a day. The lead time from the local supplier is 10 days and safety stock is 40 tonnes. Stock today is 175 tonnes, with no reservations or open orders. (a) Calculate the reorder point. (b) If daily use stays at 12 tonnes, on which day must a requisition be raised?',
          },
          hint: {
            fa: 'ابتدا مصرف دوره انتظار را حساب کنید و موجودی اطمینان را به آن اضافه کنید.',
            en: 'First work out demand during the lead time, then add the safety stock.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'مصرف دوره انتظار', en: 'Lead-time demand' },
                  text: { fa: '12 × 10 = 120 تن', en: '12 × 10 = 120 tonnes' },
                },
                {
                  title: { fa: 'نقطه سفارش', en: 'Reorder point' },
                  text: { fa: '120 + 40 = 160 تن', en: '120 + 40 = 160 tonnes' },
                },
                {
                  title: { fa: 'رسیدن به نقطه سفارش', en: 'Reaching the reorder point' },
                  text: {
                    fa: 'پایان روز اول: 175 − 12 = 163 تن (هنوز بیشتر از 160). پایان روز دوم: 163 − 12 = 151 تن (کمتر از 160). پس درخواست خرید در روز دوم صادر می‌شود.',
                    en: 'End of day 1: 175 − 12 = 163 tonnes (still above 160). End of day 2: 163 − 12 = 151 tonnes (below 160). So the requisition is raised on day 2.',
                  },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              title: { fa: 'چرا 40 تن موجودی اطمینان؟', en: 'Why 40 tonnes of safety stock?' },
              text: {
                fa: 'در حفاری، مصرف باریت به وزن گل بستگی دارد و در برخورد با لایه پرفشار ناگهان زیاد می‌شود. کمبود باریت در آن لحظه یک ریسک ایمنی چاه است، نه فقط یک مشکل انبار.',
                en: 'In drilling, barite use depends on mud weight and jumps suddenly when a high-pressure zone is hit. A barite shortage at that moment is a well-control safety risk, not just a warehouse problem.',
              },
            },
          ],
          answer: {
            fa: 'نقطه سفارش 160 تن است و درخواست خرید در روز دوم (موجودی 151 تن) صادر می‌شود.',
            en: 'The reorder point is 160 tonnes; the requisition is raised on day 2, when stock drops to 151 tonnes.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'موجودی اطمینان متانول ایستگاه', en: 'Methanol safety stock at the station' },
          difficulty: 'medium',
          problem: {
            fa: 'ایستگاه تقویت فشار در زمستان برای جلوگیری از تشکیل هیدرات متانول تزریق می‌کند. متانول در مخزن‌های 1,000 لیتری از انبار میدان حواله می‌شود. (الف) موجودی اطمینان را برای سطح خدمت 95% با روش آماری حساب کنید. (ب) نقطه سفارش را حساب کنید. (ج) اگر مدیریت سطح خدمت را به 98% برساند، نقطه سفارش چقدر می‌شود و هزینه نگهداری سالانه چقدر بیشتر می‌شود؟ نرخ نگهداری 20% است.',
            en: 'In winter the compressor station injects methanol to prevent hydrates. Methanol is issued from the Field Warehouse in 1,000-litre totes. (a) Calculate safety stock for a 95% service level with the statistical method. (b) Calculate the reorder point. (c) If management raises the service level to 98%, what is the new reorder point and how much more does holding cost each year? The holding rate is 20%.',
          },
          given: {
            head: [
              { fa: 'داده', en: 'Item' },
              { fa: 'مقدار', en: 'Value' },
            ],
            rows: [
              [{ fa: 'میانگین مصرف روزانه (مخزن)', en: 'Average daily demand (totes)' }, 3],
              [{ fa: 'انحراف معیار مصرف روزانه (مخزن)', en: 'Standard deviation of daily demand (totes)' }, 1.5],
              [{ fa: 'زمان تأمین (روز، ثابت)', en: 'Lead time (days, stable)' }, 9],
              [{ fa: 'بهای هر مخزن', en: 'Cost per tote' }, 400],
            ],
            numericCols: [1],
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'جذر زمان تأمین', en: 'Square root of lead time' },
                  text: { fa: '√9 = 3', en: '√9 = 3' },
                },
                {
                  title: { fa: 'موجودی اطمینان در 95%', en: 'Safety stock at 95%' },
                  text: {
                    fa: '1.65 × 1.5 × 3 = 7.425 که رو به بالا 8 مخزن می‌شود.',
                    en: '1.65 × 1.5 × 3 = 7.425, rounded up to 8 totes.',
                  },
                },
                {
                  title: { fa: 'نقطه سفارش در 95%', en: 'Reorder point at 95%' },
                  text: { fa: '3 × 9 + 8 = 27 + 8 = 35 مخزن', en: '3 × 9 + 8 = 27 + 8 = 35 totes' },
                },
                {
                  title: { fa: 'سطح خدمت 98%', en: 'Service level 98%' },
                  text: {
                    fa: 'موجودی اطمینان = 2.05 × 1.5 × 3 = 9.225 که 10 مخزن می‌شود؛ نقطه سفارش = 27 + 10 = 37 مخزن.',
                    en: 'Safety stock = 2.05 × 1.5 × 3 = 9.225, i.e. 10 totes; reorder point = 27 + 10 = 37 totes.',
                  },
                },
                {
                  title: { fa: 'هزینه نگهداری اضافه', en: 'Extra holding cost' },
                  text: {
                    fa: '2 مخزن اضافه × 400 × 20% = 160 در سال.',
                    en: '2 extra totes × 400 × 20% = 160 a year.',
                  },
                },
              ],
            },
            {
              type: 'table',
              head: [
                { fa: 'سطح خدمت (%)', en: 'Service level (%)' },
                { fa: 'موجودی اطمینان (مخزن)', en: 'Safety stock (totes)' },
                { fa: 'نقطه سفارش (مخزن)', en: 'Reorder point (totes)' },
                { fa: 'هزینه نگهداری سالانه موجودی اطمینان', en: 'Annual holding cost of safety stock' },
              ],
              rows: [
                [95, 8, 35, 640],
                [98, 10, 37, 800],
              ],
              numericCols: [0, 1, 2, 3],
            },
            {
              type: 'callout',
              tone: 'tip',
              title: { fa: 'تفسیر', en: 'Interpretation' },
              text: {
                fa: 'برای کالایی که نبودنش می‌تواند به انسداد خط لوله با هیدرات و توقف ایستگاه بینجامد، 160 در سال بهای بسیار کمی برای ریسک کمتر است.',
                en: 'For an item whose absence can lead to hydrate blockages and a station shutdown, 160 a year is a very small price for less risk.',
              },
            },
          ],
          answer: {
            fa: 'در 95%: موجودی اطمینان 8 و نقطه سفارش 35 مخزن؛ در 98%: 10 و 37 مخزن، با 160 هزینه نگهداری اضافه در سال.',
            en: 'At 95%: safety stock 8 and reorder point 35 totes; at 98%: 10 and 37 totes, costing 160 more a year to hold.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'EOQ المنت فیلتر و بسته‌بندی تأمین‌کننده', en: 'EOQ for filter elements with supplier pack sizes' },
          difficulty: 'medium',
          problem: {
            fa: 'مصرف سالانه المنت فیلتر روغن کمپرسورها 1,800 عدد است. هزینه هر بار سفارش 250، بهای هر المنت 50 و نرخ نگهداری سالانه 20% است. (الف) EOQ را حساب کنید. (ب) جمع هزینه سالانه سفارش و نگهداری در EOQ چقدر است؟ (ج) تأمین‌کننده فقط کارتن‌های 48 عددی می‌فروشد. سفارش 288 عددی (6 کارتن) بهتر است یا 336 عددی (7 کارتن)؟',
            en: 'The compressors use 1,800 oil filter elements a year. Each order costs 250, each element costs 50 and the annual holding rate is 20%. (a) Calculate the EOQ. (b) What is the total annual ordering and holding cost at the EOQ? (c) The supplier sells only in cartons of 48. Is an order of 288 (6 cartons) or 336 (7 cartons) better?',
          },
          hint: {
            fa: 'H = بهای واحد × نرخ نگهداری. برای هر مقدار Q، هزینه سفارش = (D ÷ Q) × S و هزینه نگهداری = (Q ÷ 2) × H.',
            en: 'H = unit cost × holding rate. For each Q, ordering cost = (D ÷ Q) × S and holding cost = (Q ÷ 2) × H.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'هزینه نگهداری هر واحد', en: 'Holding cost per unit' },
                  text: { fa: 'H = 50 × 20% = 10', en: 'H = 50 × 20% = 10' },
                },
                {
                  title: { fa: 'محاسبه EOQ', en: 'EOQ' },
                  text: {
                    fa: 'EOQ = √(2 × 1,800 × 250 ÷ 10) = √90,000 = 300 عدد',
                    en: 'EOQ = √(2 × 1,800 × 250 ÷ 10) = √90,000 = 300 elements',
                  },
                },
                {
                  title: { fa: 'هزینه در EOQ', en: 'Cost at the EOQ' },
                  text: {
                    fa: 'هزینه سفارش = (1,800 ÷ 300) × 250 = 6 × 250 = 1,500؛ هزینه نگهداری = (300 ÷ 2) × 10 = 1,500؛ جمع = 3,000.',
                    en: 'Ordering = (1,800 ÷ 300) × 250 = 6 × 250 = 1,500; holding = (300 ÷ 2) × 10 = 1,500; total = 3,000.',
                  },
                },
                {
                  title: { fa: 'مقایسه دو گزینه کارتنی', en: 'Compare the two carton options' },
                  text: {
                    fa: 'هزینه هر گزینه را با همان دو فرمول حساب می‌کنیم (جدول).',
                    en: 'Cost each option with the same two formulas (table).',
                  },
                },
              ],
            },
            {
              type: 'table',
              head: [
                { fa: 'مقدار هر سفارش', en: 'Order quantity' },
                { fa: 'تعداد سفارش در سال', en: 'Orders per year' },
                { fa: 'هزینه سفارش', en: 'Ordering cost' },
                { fa: 'هزینه نگهداری', en: 'Holding cost' },
                { fa: 'جمع هزینه', en: 'Total cost' },
              ],
              rows: [
                [300, 6, 1500, 1500, 3000],
                [288, 6.25, 1562.5, 1440, 3002.5],
                [336, 5.36, 1339.29, 1680, 3019.29],
              ],
              numericCols: [0, 1, 2, 3, 4],
            },
          ],
          answer: {
            fa: 'EOQ برابر 300 عدد با جمع هزینه 3,000 است؛ با محدودیت کارتن، 288 عدد (3,002.5) از 336 عدد (3,019.29) بهتر است.',
            en: 'The EOQ is 300 with a total cost of 3,000; with the carton constraint, 288 (3,002.5) beats 336 (3,019.29).',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'MRP شیرهای دروازه‌ای و درخواست‌های خرید', en: 'MRP for gate valves and the resulting requisitions' },
          difficulty: 'hard',
          problem: {
            fa: 'برنامه نگهداری برای تعویض شیرهای قطع‌کن خطوط جریان چاه‌ها در شش ماه آینده به شیر دروازه‌ای 4 اینچ کلاس 600 (300540) نیاز دارد: 4 عدد در ماه 2 (چاه AR-02)، 6 عدد در ماه 4 (چاه AR-07) و 5 عدد در ماه 5 (چاه AR-11). موجودی فعلی 7 عدد است و یک سفارش خرید باز 3 عددی در ماه 2 می‌رسد. موجودی اطمینان 2 عدد، زمان تأمین 3 ماه و اندازه سفارش «به اندازه نیاز» است. ماه جاری ماه 1 است. (الف) جدول MRP را کامل کنید. (ب) چه درخواست‌های خریدی و در کدام ماه صادر می‌شوند؟ (ج) ثبت خودکار مالی هنگام رسید انبار نخستین سفارش را بنویسید (قیمت سفارش خرید هر شیر 3,200).',
            en: 'The maintenance plan for replacing flowline isolation valves over the next six months needs 4" class 600 gate valves (300540): 4 in month 2 (well AR-02), 6 in month 4 (AR-07) and 5 in month 5 (AR-11). Stock is 7, and an open purchase order for 3 arrives in month 2. Safety stock is 2, lead time is 3 months and lot sizing is lot-for-lot. The current month is month 1. (a) Complete the MRP table. (b) Which requisitions are raised, and in which month? (c) Write the automatic Finance entry at goods receipt of the first order (PO price 3,200 per valve).',
          },
          hint: {
            fa: 'دریافت برنامه‌ریزی‌شده را در ماهی بگذارید که موجودی پیش‌بینی‌شده از موجودی اطمینان کمتر می‌شود و سپس 3 ماه به عقب بروید.',
            en: 'Place a planned receipt in the month projected stock would fall below safety stock, then step back 3 months.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'جدول MRP شیر 300540 (عدد)', en: 'MRP table for valve 300540 (units)' },
              head: [
                { fa: 'ردیف', en: 'Row' },
                { fa: 'ماه 1', en: 'M1' },
                { fa: 'ماه 2', en: 'M2' },
                { fa: 'ماه 3', en: 'M3' },
                { fa: 'ماه 4', en: 'M4' },
                { fa: 'ماه 5', en: 'M5' },
                { fa: 'ماه 6', en: 'M6' },
              ],
              rows: [
                [{ fa: 'نیاز ناخالص', en: 'Gross requirement' }, 0, 4, 0, 6, 5, 0],
                [{ fa: 'دریافت برنامه‌ریزی‌شده', en: 'Scheduled receipts' }, 0, 3, 0, 0, 0, 0],
                [{ fa: 'موجودی پیش‌بینی‌شده پایان ماه', en: 'Projected stock at month-end' }, 7, 6, 6, 2, 2, 2],
                [{ fa: 'نیاز خالص', en: 'Net requirement' }, 0, 0, 0, 2, 5, 0],
                [{ fa: 'دریافت سفارش برنامه‌ریزی‌شده', en: 'Planned order receipt' }, 0, 0, 0, 2, 5, 0],
                [{ fa: 'صدور سفارش برنامه‌ریزی‌شده', en: 'Planned order release' }, 2, 5, 0, 0, 0, 0],
              ],
              numericCols: [1, 2, 3, 4, 5, 6],
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'ماه 2', en: 'Month 2' },
                  text: {
                    fa: '7 + 3 − 4 = 6؛ بیشتر از موجودی اطمینان است، پس نیازی نیست.',
                    en: '7 + 3 − 4 = 6; above safety stock, so no need.',
                  },
                },
                {
                  title: { fa: 'ماه 4', en: 'Month 4' },
                  text: {
                    fa: 'نیاز خالص = 6 + 2 − 6 − 0 = 2. دو شیر باید در ماه 4 برسد؛ با 3 ماه زمان تأمین، در ماه 1 صادر می‌شود.',
                    en: 'Net requirement = 6 + 2 − 6 − 0 = 2. Two valves must arrive in month 4; with a 3-month lead time, the order is released in month 1.',
                  },
                },
                {
                  title: { fa: 'ماه 5', en: 'Month 5' },
                  text: {
                    fa: 'نیاز خالص = 5 + 2 − 2 − 0 = 5. پنج شیر باید در ماه 5 برسد؛ صدور در ماه 2.',
                    en: 'Net requirement = 5 + 2 − 2 − 0 = 5. Five valves must arrive in month 5; release in month 2.',
                  },
                },
                {
                  title: { fa: 'درخواست‌های خرید', en: 'Requisitions' },
                  text: {
                    fa: 'MRP همین امشب (ماه 1) درخواست خرید 2 شیر را می‌سازد و در ماه 2 درخواست 5 شیر را. ارزش درخواست اول 2 × 3,200 = 6,400 است.',
                    en: 'MRP raises a requisition for 2 valves tonight (month 1) and one for 5 valves in month 2. The first is worth 2 × 3,200 = 6,400.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              title: { fa: 'رسید انبار نخستین سفارش (ماه 4)', en: 'Goods receipt of the first order (month 4)' },
              entries: [
                {
                  lines: [
                    { account: { fa: 'موجودی قطعات یدکی', en: 'Inventory: spare parts' }, debit: 6400 },
                    { account: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing' }, credit: 6400 },
                  ],
                  memo: {
                    fa: 'ERP این ثبت را خودکار و با قیمت سفارش خرید ایجاد می‌کند؛ هزینه زمانی شناسایی می‌شود که شیرها به دستور کار چاه AR-07 حواله شوند.',
                    en: 'The ERP posts this automatically at the PO price; the expense is recognised only when the valves are issued to the AR-07 work order.',
                  },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              title: { fa: 'نکته', en: 'Watch out' },
              text: {
                fa: 'درخواست ماه 1 «همین حالا» لازم است. اگر برنامه‌ریز آن را دو هفته در کارتابل نگه دارد، شیرها پس از شروع کار چاه AR-07 می‌رسند.',
                en: 'The month-1 requisition is needed now. If the planner leaves it in the inbox for two weeks, the valves arrive after work on AR-07 has started.',
              },
            },
          ],
          answer: {
            fa: 'دو درخواست: 2 شیر در ماه 1 (رسید در ماه 4) و 5 شیر در ماه 2 (رسید در ماه 5)؛ رسید اول: موجودی قطعات یدکی بدهکار 6,400 و GR/IR بستانکار 6,400.',
            en: 'Two requisitions: 2 valves in month 1 (received in month 4) and 5 valves in month 2 (received in month 5); first receipt: Dr Inventory: spare parts 6,400, Cr GR/IR clearing 6,400.',
          },
        },
      ],
    },
    {
      id: 'summary',
      title: { fa: 'جمع‌بندی', en: 'Summary' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              fa: 'برنامه‌ریزی تأمین به دو پرسش پاسخ می‌دهد: چه زمانی و چه مقدار؛ و میان هزینه کمبود و هزینه نگهداری تعادل برقرار می‌کند.',
              en: 'Replenishment planning answers two questions, when and how much, and balances the cost of shortage against the cost of holding.',
            },
            {
              fa: 'زمان تأمین شامل تأیید، استعلام، ساخت، بازرسی، حمل، ترخیص و رسید است، نه فقط زمان ساخت.',
              en: 'Lead time covers approval, tender, manufacturing, inspection, freight, customs and receipt, not just manufacturing.',
            },
            {
              fa: 'نقطه سفارش = میانگین مصرف روزانه × زمان تأمین + موجودی اطمینان، و همیشه با موجودی در دسترس مقایسه می‌شود.',
              en: 'Reorder point = average daily demand × lead time + safety stock, always compared with available stock.',
            },
            {
              fa: 'موجودی اطمینان با روش ساده یا روش آماری (z × σ_d × √L) محاسبه می‌شود؛ نوسان زمان تأمین را فراموش نکنید.',
              en: 'Safety stock comes from the simple method or the statistical one (z × σ_d × √L); do not forget lead-time variability.',
            },
            {
              fa: 'EOQ جمع هزینه سفارش و نگهداری را کمینه می‌کند، اما باید با بسته‌بندی، انقضا، ظرفیت و بودجه اصلاح شود.',
              en: 'The EOQ minimises ordering plus holding cost but must be adjusted for pack sizes, shelf life, capacity and budget.',
            },
            {
              fa: 'MRP نیازهای معلوم آینده را خالص می‌کند و به اندازه زمان تأمین به عقب می‌برد؛ قطعات حیاتی با ارزیابی ریسک مدیریت می‌شوند.',
              en: 'MRP nets known future needs and offsets them by the lead time; critical spares are managed through a risk assessment.',
            },
            {
              fa: 'ERP درخواست خرید را خودکار می‌سازد؛ درخواست ثبت مالی ندارد و نخستین ثبت خودکار در رسید انبار است. موجودی اضافه یعنی نقدینگی‌ای که هنوز بازیافت نشده است.',
              en: 'The ERP creates requisitions automatically; a requisition posts nothing, and the first automatic entry comes at goods receipt. Surplus stock is cash not yet recovered.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'زمان تأمین', en: 'Lead time' },
              def: { fa: 'فاصله از تشخیص نیاز تا آماده بودن کالا در انبار برای حواله.', en: 'Time from recognising a need until the goods are in stock and ready to issue.' },
            },
            {
              term: { fa: 'نقطه سفارش', en: 'Reorder point' },
              def: { fa: 'سطح موجودی در دسترس که با رسیدن به آن سفارش تازه صادر می‌شود.', en: 'The available-stock level at which a new order is triggered.' },
            },
            {
              term: { fa: 'موجودی اطمینان', en: 'Safety stock' },
              def: { fa: 'ذخیره‌ای برای پوشش نوسان مصرف و زمان تأمین.', en: 'A buffer that covers variability in demand and lead time.' },
            },
            {
              term: { fa: 'سطح خدمت', en: 'Service level' },
              def: { fa: 'درصد دوره‌های سفارش که بدون کمبود سپری می‌شوند.', en: 'The percentage of order cycles that pass without a stockout.' },
            },
            {
              term: { fa: 'سیاست حداقل و حداکثر', en: 'Min/max policy' },
              def: { fa: 'وقتی موجودی در دسترس به حداقل برسد، تا سطح حداکثر سفارش داده می‌شود.', en: 'When available stock reaches the minimum, order enough to return to the maximum.' },
            },
            {
              term: { fa: 'مقدار اقتصادی سفارش (EOQ)', en: 'Economic order quantity (EOQ)' },
              def: { fa: 'مقدار سفارشی که جمع هزینه سفارش و نگهداری سالانه را کمینه می‌کند.', en: 'The order size that minimises annual ordering plus holding cost.' },
            },
            {
              term: { fa: 'هزینه نگهداری', en: 'Holding cost' },
              def: { fa: 'هزینه سرمایه، انبارداری، بیمه، خرابی و منسوخ شدن موجودی، معمولاً درصدی از ارزش آن در سال.', en: 'Cost of capital, storage, insurance, deterioration and obsolescence, usually a yearly percentage of stock value.' },
            },
            {
              term: { fa: 'برنامه‌ریزی نیازمندی‌های مواد (MRP)', en: 'Material requirements planning (MRP)' },
              def: { fa: 'روشی که نیازهای معلوم آینده را خالص و با زمان تأمین جابه‌جا می‌کند تا سفارش‌ها به‌موقع صادر شوند.', en: 'A method that nets known future demand and offsets it by lead time so orders are released on time.' },
            },
            {
              term: { fa: 'نیاز خالص', en: 'Net requirement' },
              def: { fa: 'نیاز ناخالص به‌علاوه موجودی اطمینان، منهای موجودی پیش‌بینی‌شده و دریافت‌های برنامه‌ریزی‌شده.', en: 'Gross requirement plus safety stock, minus projected stock and scheduled receipts.' },
            },
            {
              term: { fa: 'قطعه یدکی حیاتی', en: 'Critical spare' },
              def: { fa: 'قطعه‌ای که نبودنش تولید، ایمنی یا محیط زیست را به خطر می‌اندازد.', en: 'A part whose absence puts production, safety or the environment at risk.' },
            },
            {
              term: { fa: 'قطعه یدکی بیمه‌ای', en: 'Insurance spare' },
              def: { fa: 'قطعه گران و حیاتی که با مصرف نزدیک به صفر، فقط برای روز خرابی نگه داشته می‌شود.', en: 'An expensive critical part with near-zero usage, held only for the day of a failure.' },
            },
            {
              term: { fa: 'موجودی در دسترس', en: 'Available stock' },
              def: { fa: 'موجودی آزاد به‌علاوه سفارش‌های باز، منهای مقدار رزروشده.', en: 'Unrestricted stock plus open orders, minus reserved quantities.' },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: {
        fa: 'میانگین مصرف روزانه یک ماده شیمیایی 5 بشکه، زمان تأمین 12 روز و موجودی اطمینان 15 بشکه است. نقطه سفارش چند بشکه است؟',
        en: 'A chemical is used at 5 drums a day on average, the lead time is 12 days and safety stock is 15 drums. What is the reorder point?',
      },
      options: [
        { fa: '60', en: '60' },
        { fa: '75', en: '75' },
        { fa: '90', en: '90' },
        { fa: '65', en: '65' },
      ],
      answer: 1,
      explain: {
        fa: 'نقطه سفارش = 5 × 12 + 15 = 75. گزینه 60 فقط مصرف دوره انتظار است و موجودی اطمینان را فراموش کرده؛ بدون آن، هر تأخیر یا مصرف بیشتر از میانگین به کمبود می‌رسد.',
        en: 'Reorder point = 5 × 12 + 15 = 75. The tempting 60 is only lead-time demand and leaves out safety stock; without it, any delay or above-average use causes a stockout.',
      },
    },
    {
      q: {
        fa: 'بیشترین مصرف روزانه 9، بیشترین زمان تأمین 14 روز، میانگین مصرف روزانه 6 و میانگین زمان تأمین 10 روز است. موجودی اطمینان به روش ساده چقدر است؟',
        en: 'Maximum daily demand is 9, maximum lead time 14 days, average daily demand 6 and average lead time 10 days. What is safety stock under the simple method?',
      },
      options: [
        { fa: '66', en: '66' },
        { fa: '60', en: '60' },
        { fa: '126', en: '126' },
        { fa: '36', en: '36' },
      ],
      answer: 0,
      explain: {
        fa: '9 × 14 − 6 × 10 = 126 − 60 = 66. عدد 126 مصرف در بدترین حالت است، نه موجودی اطمینان؛ مصرف عادی دوره انتظار (60) را نقطه سفارش پوشش می‌دهد و باید از آن کم شود.',
        en: '9 × 14 − 6 × 10 = 126 − 60 = 66. The 126 is worst-case demand, not safety stock; the normal lead-time demand of 60 is already covered by the reorder point and must be deducted.',
      },
    },
    {
      q: {
        fa: 'برای سطح خدمت 99% (z = 2.33)، انحراف معیار مصرف روزانه 4 واحد و زمان تأمین ثابت 9 روز است. موجودی اطمینان (گردشده رو به بالا) چقدر است؟',
        en: 'For a 99% service level (z = 2.33), the standard deviation of daily demand is 4 units and the lead time is a stable 9 days. What is safety stock, rounded up?',
      },
      options: [
        { fa: '21', en: '21' },
        { fa: '84', en: '84' },
        { fa: '10', en: '10' },
        { fa: '28', en: '28' },
      ],
      answer: 3,
      explain: {
        fa: '2.33 × 4 × √9 = 2.33 × 4 × 3 = 27.96 که 28 می‌شود. خطای رایج ضرب در خود زمان تأمین (9) به جای جذر آن است که 84 می‌دهد؛ نوسان‌های روزانه بخشی از هم را خنثی می‌کنند و به همین دلیل جذر به کار می‌رود.',
        en: '2.33 × 4 × √9 = 2.33 × 4 × 3 = 27.96, rounded up to 28. The common error is multiplying by the lead time itself (9) instead of its square root, giving 84; daily swings partly cancel out, which is why the square root is used.',
      },
    },
    {
      q: {
        fa: 'مصرف سالانه 5,000 واحد، هزینه هر سفارش 100 و هزینه نگهداری هر واحد در سال 4 است. EOQ چقدر است؟',
        en: 'Annual demand is 5,000 units, each order costs 100 and holding one unit for a year costs 4. What is the EOQ?',
      },
      options: [
        { fa: '250', en: '250' },
        { fa: '1,000', en: '1,000' },
        { fa: '500', en: '500' },
        { fa: '2,500', en: '2,500' },
      ],
      answer: 2,
      explain: {
        fa: '√(2 × 5,000 × 100 ÷ 4) = √250,000 = 500. در این مقدار هزینه سفارش (10 سفارش × 100 = 1,000) با هزینه نگهداری (500 ÷ 2 × 4 = 1,000) برابر است. گزینه 250 موجودی متوسط است، نه مقدار سفارش.',
        en: '√(2 × 5,000 × 100 ÷ 4) = √250,000 = 500. At this quantity ordering cost (10 orders × 100 = 1,000) equals holding cost (500 ÷ 2 × 4 = 1,000). The 250 option is the average stock, not the order size.',
      },
    },
    {
      q: {
        fa: 'در مقدار اقتصادی سفارش (EOQ) کدام عبارت درست است؟',
        en: 'Which statement is true at the economic order quantity (EOQ)?',
      },
      options: [
        { fa: 'بهای خرید کالا کمینه می‌شود', en: 'The purchase price of the goods is minimised' },
        { fa: 'هزینه سفارش سالانه با هزینه نگهداری سالانه برابر است', en: 'Annual ordering cost equals annual holding cost' },
        { fa: 'موجودی اطمینان صفر است', en: 'Safety stock is zero' },
        { fa: 'تعداد سفارش در سال بیشترین است', en: 'The number of orders per year is at its highest' },
      ],
      answer: 1,
      explain: {
        fa: 'EOQ جمع هزینه سفارش و نگهداری را کمینه می‌کند و در مدل پایه این نقطه جایی است که دو هزینه برابرند. EOQ درباره بهای خرید (جز در تخفیف مقداری) و درباره موجودی اطمینان چیزی نمی‌گوید؛ موجودی اطمینان جداگانه محاسبه می‌شود.',
        en: 'The EOQ minimises ordering plus holding cost, and in the basic model that happens where the two are equal. It says nothing about the purchase price (except with quantity discounts) or about safety stock, which is calculated separately.',
      },
    },
    {
      q: {
        fa: 'برای یک کالا حداقل 40 و حداکثر 150 است. موجودی آزاد 60، سفارش باز صفر و مقدار رزروشده 25 است. چه مقدار باید سفارش داد؟',
        en: 'An item has a minimum of 40 and a maximum of 150. Unrestricted stock is 60, open orders are zero and 25 units are reserved. How much should be ordered?',
      },
      options: [
        { fa: 'هیچ؛ موجودی 60 از حداقل بیشتر است', en: 'Nothing; stock of 60 is above the minimum' },
        { fa: '90', en: '90' },
        { fa: '110', en: '110' },
        { fa: '115', en: '115' },
      ],
      answer: 3,
      explain: {
        fa: 'موجودی در دسترس = 60 − 25 = 35 که کمتر از حداقل است؛ پس سفارش = 150 − 35 = 115. گزینه «هیچ» رزرو را نادیده گرفته است: 25 واحد رزروشده متعلق به دستور کارها و پروژه‌هاست و برای نیاز دیگری در دسترس نیست. گزینه 90 هم همین خطا را دارد (150 − 60).',
        en: 'Available stock = 60 − 25 = 35, below the minimum, so order 150 − 35 = 115. "Nothing" ignores the reservation: the 25 reserved units belong to work orders and projects and cannot serve other demand. The 90 option makes the same mistake (150 − 60).',
      },
    },
    {
      q: {
        fa: 'در یک ماه، نیاز ناخالص 300 شاخه، موجودی پیش‌بینی‌شده ابتدای ماه 120، دریافت برنامه‌ریزی‌شده 100 و موجودی اطمینان 30 شاخه است. نیاز خالص چقدر است؟',
        en: 'In one month the gross requirement is 300 joints, projected stock at the start of the month is 120, scheduled receipts are 100 and safety stock is 30. What is the net requirement?',
      },
      options: [
        { fa: '110', en: '110' },
        { fa: '80', en: '80' },
        { fa: '180', en: '180' },
        { fa: '210', en: '210' },
      ],
      answer: 0,
      explain: {
        fa: '300 + 30 − 120 − 100 = 110. گزینه 80 موجودی اطمینان را فراموش کرده و موجودی پایان ماه را به صفر می‌رساند؛ گزینه 210 سفارش خرید باز (دریافت برنامه‌ریزی‌شده) را نادیده گرفته و به سفارش تکراری می‌انجامد.',
        en: '300 + 30 − 120 − 100 = 110. The 80 option forgets safety stock and leaves zero at month-end; 210 ignores the open purchase order (scheduled receipt) and would cause a duplicate order.',
      },
    },
    {
      q: {
        fa: 'یک روتور یدکی کمپرسور K-201 سه سال است هیچ حواله‌ای نداشته است. بهترین اقدام کدام است؟',
        en: 'A spare rotor for compressor K-201 has had no issues for three years. What is the best course of action?',
      },
      options: [
        { fa: 'آن را منسوخ اعلام کنیم و ارزشش را کامل کاهش دهیم', en: 'Declare it obsolete and write it down in full' },
        { fa: 'آن را بفروشیم چون گردش ندارد', en: 'Sell it because it does not move' },
        { fa: 'بحرانیت آن را با تیم نگهداری بررسی کنیم و اگر کمپرسور هنوز در کار است، به عنوان قطعه بیمه‌ای نگه داریم', en: 'Review its criticality with maintenance and, if the compressor is still in service, keep it as an insurance spare' },
        { fa: 'نقطه سفارش آن را صفر کنیم و برایش EOQ حساب کنیم', en: 'Set its reorder point to zero and calculate an EOQ for it' },
      ],
      answer: 2,
      explain: {
        fa: 'قطعه بیمه‌ای برای روز خرابی نگه داشته می‌شود و مصرف صفر طبیعت آن است، نه نشانه منسوخ بودن. تا وقتی تجهیز در کار است و قطعه سالم است، کنار گذاشتن آن ریسک ماه‌ها توقف را به همراه دارد. واحد مالی ممکن است آن را طبق IAS 16 دارایی ثابت بداند، اما این هم دلیلی برای فروش نیست.',
        en: 'An insurance spare is held for the day of a failure; zero usage is its nature, not a sign of obsolescence. While the equipment runs and the part is sound, getting rid of it risks months of downtime. Finance may treat it as a fixed asset under IAS 16, but that is no reason to sell it either.',
      },
    },
    {
      q: {
        fa: 'ERP شب گذشته برای 2 دست کیت سوپاپ درخواست خرید خودکار ساخته است. این درخواست چه ثبتی در دفتر کل ایجاد می‌کند؟',
        en: 'Last night the ERP automatically created a requisition for 2 valve kits. What does this requisition post to the general ledger?',
      },
      options: [
        { fa: 'موجودی قطعات یدکی بدهکار و حساب‌های پرداختنی بستانکار', en: 'Dr Inventory: spare parts, Cr Accounts payable' },
        { fa: 'هیچ ثبتی؛ نخستین ثبت خودکار در رسید انبار است (موجودی بدهکار، GR/IR بستانکار)', en: 'Nothing; the first automatic entry comes at goods receipt (Dr Inventory, Cr GR/IR)' },
        { fa: 'هزینه تعمیر و نگهداری بدهکار و موجودی بستانکار', en: 'Dr Repairs and maintenance expense, Cr Inventory' },
        { fa: 'GR/IR بدهکار و حساب‌های پرداختنی بستانکار', en: 'Dr GR/IR clearing, Cr Accounts payable' },
      ],
      answer: 1,
      explain: {
        fa: 'درخواست خرید یک درخواست داخلی است و تعهدی به تأمین‌کننده ایجاد نمی‌کند؛ در برخی ERPها فقط تعهد بودجه ثبت می‌شود که در دفتر کل نیست. هنگام رسید، موجودی بدهکار و GR/IR بستانکار می‌شود و هنگام فاکتور، GR/IR بدهکار و حساب‌های پرداختنی بستانکار.',
        en: 'A requisition is an internal request and creates no obligation to a supplier; some ERPs record a budget commitment, which is not a general-ledger entry. At goods receipt Inventory is debited and GR/IR credited; at invoice GR/IR is debited and Accounts payable credited.',
      },
    },
    {
      q: {
        fa: 'سازنده زمان ساخت را 16 هفته اعلام کرده است. تأیید درخواست 2 هفته، استعلام و ارزیابی 6 هفته، حمل و ترخیص 5 هفته و رسید و کنترل کیفیت 1 هفته طول می‌کشد. اگر برنامه‌ریز فقط 16 هفته را در ERP وارد کند، درخواست خرید چند هفته دیر صادر می‌شود؟',
        en: 'The manufacturer quotes 16 weeks. Approval takes 2 weeks, tender and evaluation 6, freight and customs 5, and receipt and QC 1. If the planner enters only 16 weeks in the ERP, how many weeks late is the requisition raised?',
      },
      options: [
        { fa: '6', en: '6' },
        { fa: '30', en: '30' },
        { fa: '16', en: '16' },
        { fa: '14', en: '14' },
      ],
      answer: 3,
      explain: {
        fa: 'زمان تأمین واقعی 2 + 6 + 16 + 5 + 1 = 30 هفته است، اما ERP درخواست را فقط 16 هفته پیش از نیاز می‌سازد؛ پس 30 − 16 = 14 هفته دیر است. گزینه 30 کل زمان تأمین است، نه مقدار تأخیر.',
        en: 'The real lead time is 2 + 6 + 16 + 5 + 1 = 30 weeks, but the ERP raises the requisition only 16 weeks before the need, so it is 30 − 16 = 14 weeks late. The 30 option is the total lead time, not the delay.',
      },
    },
  ],
}
