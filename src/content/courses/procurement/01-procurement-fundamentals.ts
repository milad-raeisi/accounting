import type { Lesson } from '../../types'

/* Account titles used in the Masar Petroleum examples. */
const ac = {
  inventory: { fa: 'موجودی مواد و قطعات', en: 'Materials and spares inventory' },
  grir: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing' },
  ap: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
  bank: { fa: 'موجودی نقد (بانک)', en: 'Cash at bank' },
}

const day = (n: number) => ({ fa: `روز ${n}`, en: `Day ${n}` })
const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'procurement-fundamentals',
  number: 1,
  level: 'beginner',
  minutes: 24,
  icon: 'BookOpen',
  tone: 'primary',
  title: { fa: 'مبانی تدارکات در شرکت نفت و گاز', en: 'Procurement Fundamentals in Oil & Gas' },
  summary: {
    fa: 'ببینید واحد تدارکات در یک شرکت نفت و گاز بالادستی چه می‌کند: کالا، خدمات و کار را از هم جدا کنید، چرخه درخواست تا پرداخت را قدم‌به‌قدم بشناسید، قواعد اختیارات و اخلاق حرفه‌ای را بیاموزید و ببینید ماژول تدارکات در ERP چگونه به انبار، نگهداری، پروژه‌ها و مالی وصل است.',
    en: 'See what procurement does in an upstream oil and gas company: tell goods, services and works apart, follow the procure-to-pay cycle step by step, learn the rules of authority and ethics, and see how the ERP Procurement module connects to inventory, maintenance, projects and finance.',
  },
  objectives: [
    {
      fa: 'نقش تدارکات را در یک شرکت نفت و گاز بالادستی توضیح دهید و آن را از «خرید» صرف جدا کنید',
      en: 'Explain the role of procurement in an upstream oil and gas company and how it differs from simple purchasing',
    },
    {
      fa: 'کالا، خدمات و کار، و خرید مستقیم و غیرمستقیم را تشخیص دهید',
      en: 'Distinguish goods, services and works, and direct from indirect spend',
    },
    {
      fa: 'مراحل چرخه درخواست تا پرداخت (P2P) و سند هر مرحله را نام ببرید',
      en: 'Name the steps of the procure-to-pay (P2P) cycle and the document of each step',
    },
    {
      fa: 'جدول تفویض اختیار، تفکیک وظایف و قواعد تعارض منافع را در موقعیت‌های واقعی به کار ببرید',
      en: 'Apply delegation of authority, segregation of duties and conflict-of-interest rules to real situations',
    },
    {
      fa: 'پیوند ماژول تدارکات ERP با انبار، نگهداری، پروژه‌ها و مالی و ثبت‌های خودکار آن را شرح دهید',
      en: 'Describe how the ERP Procurement module links to inventory, maintenance, projects and finance, including its automatic postings',
    },
  ],
  sections: [
    {
      id: 'why-procurement',
      title: { fa: 'چرا تدارکات مهم است؟', en: 'Why Procurement Matters' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'ساعت 2 بامداد، کمپرسور شماره 2 در **ایستگاه تقویت فشار** میدان آریا به خاطر نشتی آب‌بند گاز خشک از مدار خارج می‌شود. آب‌بند یدکی در انبار نیست و سازنده زمان تحویل را 16 هفته اعلام می‌کند. تا رسیدن قطعه، تولید گاز میدان باید کم شود. ظاهر ماجرا فنی است، اما ریشه‌اش در **تدارکات** است: کسی باید سال‌ها پیش این قطعه را «حیاتی» تشخیص می‌داد، برایش موجودی اطمینان تعیین می‌کرد و تأمین‌کننده معتبری برایش آماده داشت.',
            en: 'At 2 a.m., compressor No. 2 at the Arya field **compressor station** trips on a dry gas seal leak. There is no spare seal in stock, and the manufacturer quotes a 16-week lead time. Until the part arrives, the field has to cut gas production. It looks like an engineering problem, but its roots are in **procurement**: someone should have flagged this seal as a critical spare years ago, set a safety stock for it and had a qualified supplier ready.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'هزینه نداشتن یک قطعه', en: 'The cost of a missing part' },
          text: {
            fa: 'فرض کنید (ارقام فرضی‌اند) هر روز توقف کمپرسور 40,000 درآمد را به تعویق بیندازد. 16 هفته یعنی 112 روز، و 112 × 40,000 = 4,480,000 درآمد معوق؛ در حالی که یک دست آب‌بند یدکی حدود 90,000 قیمت دارد. تدارکات خوب یعنی همین حساب را پیش از خرابی انجام دهیم، نه بعد از آن.',
            en: 'Suppose (illustrative figures) each day the compressor is down defers 40,000 of revenue. Sixteen weeks is 112 days, and 112 × 40,000 = 4,480,000 of deferred revenue, against roughly 90,000 for a spare seal set. Good procurement means doing this arithmetic before the failure, not after it.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**تدارکات (Procurement)** همه کارهایی است که کالا، خدمات و کارهای مورد نیاز سازمان را فراهم می‌کند: تشخیص نیاز، انتخاب تأمین‌کننده، عقد قرارداد، پیگیری تحویل، دریافت و پرداخت. **خرید (Purchasing)** فقط بخشی از آن است: صدور سفارش و معامله با فروشنده. در یک شرکت نفت و گاز بالادستی، بخش بزرگی از کل هزینه‌ها از مسیر تدارکات می‌گذرد، چون بخش عمده حفاری، تکمیل چاه و حتی بهره‌برداری را پیمانکاران و تأمین‌کنندگان انجام می‌دهند.',
            en: '**Procurement** is everything that gets the organisation the goods, services and works it needs: identifying the need, choosing a supplier, contracting, expediting delivery, receiving and paying. **Purchasing** is only one part of it: placing the order and dealing with the seller. In an upstream oil and gas company a large share of all spending passes through procurement, because contractors and suppliers do much of the drilling, completion and even operations work.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**کیفیت درست**: کالا یا خدمتی که با مشخصات فنی و استانداردهای ایمنی سازگار است.',
              en: '**Right quality**: goods or services that meet the technical specification and safety standards.',
            },
            {
              fa: '**مقدار درست**: نه کمبودی که عملیات را متوقف کند، نه انباشتی که سرمایه را در انبار حبس کند.',
              en: '**Right quantity**: no shortage that stops operations, no excess that locks cash up in the warehouse.',
            },
            {
              fa: '**زمان درست**: پیش از تاریخ نیاز، با در نظر گرفتن زمان ساخت و حمل.',
              en: '**Right time**: before the date it is needed, allowing for manufacturing and shipping time.',
            },
            {
              fa: '**قیمت درست**: کمترین **هزینه کل مالکیت** (قیمت، حمل، بازرسی، نگهداری و خطر توقف)، نه لزوماً کمترین عدد روی پیشنهاد.',
              en: '**Right price**: the lowest **total cost of ownership** (price, freight, inspection, upkeep and downtime risk), not necessarily the lowest number on the quote.',
            },
            {
              fa: '**تأمین‌کننده درست**: معتبر، دارای صلاحیت فنی و ایمنی، و قابل اتکا.',
              en: '**Right supplier**: reputable, technically and HSE qualified, and reliable.',
            },
            {
              fa: '**رعایت ضوابط**: هر قدم مجاز، مستند و قابل حسابرسی باشد.',
              en: '**Compliance**: every step authorised, documented and auditable.',
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'مثال جاری این دوره: شرکت مسار پترولیوم', en: 'The running example of this course: Masar Petroleum' },
          head: [
            { fa: 'مورد', en: 'Item' },
            { fa: 'شرح', en: 'Description' },
          ],
          rows: [
            [
              { fa: 'شرکت', en: 'Company' },
              {
                fa: 'شرکت مسار پترولیوم، بهره‌بردار (Operator) یک مشارکت در میدان آریا',
                en: 'Masar Petroleum, operator of a joint venture in the Arya field',
              },
            ],
            [
              { fa: 'میدان', en: 'Field' },
              {
                fa: 'میدان خشکی آریا با چاه‌های AR-01 تا AR-12؛ چاه AR-09 در حال حفاری است',
                en: 'The onshore Arya field with wells AR-01 to AR-12; well AR-09 is being drilled',
              },
            ],
            [
              { fa: 'تأسیسات', en: 'Facilities' },
              {
                fa: 'ایستگاه تقویت فشار گاز، جداکننده‌ها و خطوط جریان',
                en: 'A gas compressor station, separators and flowlines',
              },
            ],
            [
              { fa: 'انبارها', en: 'Warehouses' },
              {
                fa: 'انبار مرکزی (ذخیره اصلی و اقلام گران) و انبار میدان (اقلام مصرفی روزانه نزدیک چاه‌ها)',
                en: 'Central Warehouse (main stock and high-value items) and Field Warehouse (day-to-day items close to the wells)',
              },
            ],
            [
              { fa: 'شرکا', en: 'Partners' },
              {
                fa: 'مسار پترولیوم 50٪، شریک الف 30٪، شریک ب 20٪ (سهم‌ها فرضی‌اند)',
                en: 'Masar Petroleum 50%, Partner A 30%, Partner B 20% (illustrative shares)',
              },
            ],
            [
              { fa: 'سیستم', en: 'System' },
              {
                fa: 'یک ERP یکپارچه با ماژول‌های مالی، انبار، تدارکات، نگهداری، پروژه و منابع انسانی',
                en: 'One integrated ERP with Finance, Inventory, Procurement, Maintenance, Projects and HR modules',
              },
            ],
          ],
        },
      ],
    },
    {
      id: 'what-we-buy',
      title: { fa: 'تدارکات چه می‌خرد؟', en: 'What Procurement Buys' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'هر خرید در یکی از سه دسته قرار می‌گیرد. **کالا (Goods)** چیزی فیزیکی است که تحویل گرفته، شمرده و در انبار نگهداری یا مستقیم مصرف می‌شود. **خدمات (Services)** کاری است که تأمین‌کننده با نیرو و تجهیزات خودش انجام می‌دهد و چیزی به انبار اضافه نمی‌کند. **کار (Works)** یا کار پیمانکاری، ساخت یا نصب چیزی ماندگار در محل است، مانند خط لوله یا فونداسیون. این تقسیم اهمیت دارد، چون روش خرید، نوع قرارداد، نحوه تأیید تحویل و ثبت حسابداری هر دسته فرق می‌کند.',
            en: 'Every purchase falls into one of three groups. **Goods** are physical items that are received, counted, and then stored or used directly. **Services** are work a supplier performs with its own people and equipment; nothing is added to the warehouse. **Works** are the construction or installation of something permanent on site, such as a pipeline or a foundation. The split matters because the sourcing method, contract type, way of confirming delivery and accounting entry all differ.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'سه دسته خرید در مسار پترولیوم', en: 'The three purchase types at Masar Petroleum' },
          head: [
            { fa: 'دسته', en: 'Type' },
            { fa: 'نمونه‌ها', en: 'Examples' },
            { fa: 'تأیید تحویل با', en: 'Delivery confirmed by' },
            { fa: 'قرارداد رایج', en: 'Typical contract' },
          ],
          rows: [
            [
              { fa: 'کالا', en: 'Goods' },
              {
                fa: 'لوله جداری و مغزی (OCTG)، شیرهای کشویی، باریت و بنتونیت، قطعات کمپرسور، تجهیزات حفاظت فردی',
                en: 'Casing and tubing (OCTG), gate valves, barite and bentonite, compressor spares, PPE',
              },
              { fa: 'رسید کالا (GRN) پس از بازرسی', en: 'Goods received note (GRN) after inspection' },
              { fa: 'سفارش خرید', en: 'Purchase order' },
            ],
            [
              { fa: 'خدمات', en: 'Services' },
              {
                fa: 'اجاره دکل حفاری با خدمه، سیمان‌کاری و نمودارگیری چاه، بازرسی شخص ثالث، تغذیه کمپ، حمل‌ونقل',
                en: 'Drilling rig hire with crew, well cementing and logging, third-party inspection, camp catering, transport',
              },
              { fa: 'برگه ثبت خدمات (SES) که مسئول قرارداد می‌پذیرد', en: 'Service entry sheet (SES) accepted by the contract holder' },
              { fa: 'قرارداد خدمات با جدول نرخ‌ها', en: 'Service contract with a rate schedule' },
            ],
            [
              { fa: 'کار', en: 'Works' },
              {
                fa: 'خط جریان از چاه AR-09 تا جداکننده، کارهای ساختمانی ایستگاه تقویت فشار، آماده‌سازی محل چاه',
                en: 'Flowline from well AR-09 to the separator, civil works at the compressor station, well-site preparation',
              },
              { fa: 'اندازه‌گیری پیشرفت و صورت‌وضعیت', en: 'Progress measurement and progress billing' },
              { fa: 'قرارداد پیمانکاری (EPC یا فهرست‌بها)', en: 'Construction contract (EPC or unit-rate)' },
            ],
          ],
        },
        {
          type: 'h',
          text: { fa: 'خرید مستقیم و غیرمستقیم', en: 'Direct and indirect spend' },
        },
        {
          type: 'p',
          text: {
            fa: '**خرید مستقیم (Direct spend)** هزینه‌کردی است که مستقیماً به تولید نفت و گاز یا پروژه‌های سرمایه‌ای میدان مربوط است: حفاری، لوله‌های چاه، خدمات چاه، مواد شیمیایی فرایند و قطعات تجهیزات تولید. **خرید غیرمستقیم (Indirect spend)** از عملیات پشتیبانی می‌کند اما وارد خود تولید نمی‌شود: ملزومات اداری، فناوری اطلاعات، سفر و مشاوره. مرز دقیق این دو را خط‌مشی هر شرکت تعیین می‌کند؛ مهم این است که همه یکسان و ثابت عمل کنند.',
            en: '**Direct spend** is money spent on things that go straight into producing oil and gas or into the field’s capital projects: drilling, well tubulars, well services, process chemicals and spares for production equipment. **Indirect spend** supports operations without entering production itself: office supplies, IT, travel and consulting. Each company’s policy draws the exact line; what matters is that everyone applies it the same way every time.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'تحلیل هزینه‌کرد سالانه مسار پترولیوم (ارقام فرضی)',
            en: 'Masar Petroleum annual spend analysis (illustrative figures)',
          },
          head: [
            { fa: 'گروه خرید', en: 'Category' },
            { fa: 'نوع', en: 'Type' },
            { fa: 'هزینه‌کرد سالانه', en: 'Annual spend' },
          ],
          numericCols: [2],
          rows: [
            [{ fa: 'خدمات حفاری (دکل و حفاری جهت‌دار)', en: 'Drilling services (rig, directional drilling)' }, { fa: 'مستقیم', en: 'Direct' }, 16000000],
            [{ fa: 'لوله جداری و مغزی (OCTG)', en: 'Casing and tubing (OCTG)' }, { fa: 'مستقیم', en: 'Direct' }, 8000000],
            [{ fa: 'خدمات چاه (سیمان‌کاری، نمودارگیری، انگیزش)', en: 'Well services (cementing, logging, stimulation)' }, { fa: 'مستقیم', en: 'Direct' }, 6000000],
            [{ fa: 'مواد شیمیایی تولید و قطعات یدکی', en: 'Production chemicals and spares' }, { fa: 'مستقیم', en: 'Direct' }, 3500000],
            [{ fa: 'قرارداد نگهداری ایستگاه تقویت فشار', en: 'Compressor station maintenance contract' }, { fa: 'مستقیم', en: 'Direct' }, 2500000],
            [{ fa: 'کمپ، تغذیه و حمل‌ونقل', en: 'Camp, catering and transport' }, { fa: 'غیرمستقیم', en: 'Indirect' }, 2500000],
            [{ fa: 'فناوری اطلاعات، اداری و خدمات حرفه‌ای', en: 'IT, office and professional services' }, { fa: 'غیرمستقیم', en: 'Indirect' }, 1500000],
            [{ fa: '**جمع**', en: '**Total**' }, blank, 40000000],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'خرید مستقیم 16,000,000 + 8,000,000 + 6,000,000 + 3,500,000 + 2,500,000 = 36,000,000 است، یعنی 36,000,000 ÷ 40,000,000 = 90٪ کل هزینه‌کرد. فقط دو گروه اول (حفاری و OCTG) 24,000,000 یا 60٪ کل را می‌سازند. نتیجه عملی: قوی‌ترین ابزارهای تدارکات، مثل مناقصه و قرارداد بلندمدت، باید همان‌جا به کار بروند که پول بیشتری خرج می‌شود.',
            en: 'Direct spend is 16,000,000 + 8,000,000 + 6,000,000 + 3,500,000 + 2,500,000 = 36,000,000, or 36,000,000 ÷ 40,000,000 = 90% of the total. The top two categories alone (drilling and OCTG) make up 24,000,000, or 60%. The practical lesson: procurement’s strongest tools, such as tenders and long-term contracts, belong where the money goes.',
          },
        },
        {
          type: 'h',
          text: { fa: 'دو اصطلاح مهم در نفت و گاز', en: 'Two key oil and gas terms' },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**قطعه یدکی حیاتی (Critical spare)**: قطعه‌ای که نبودنش تولید، ایمنی یا محیط زیست را به خطر می‌اندازد؛ مانند آب‌بند کمپرسور یا شیر ایمنی سرچاهی. حتی اگر به‌ندرت مصرف شود، معمولاً در انبار نگهداری می‌شود.',
              en: '**Critical spare**: a part whose absence puts production, safety or the environment at risk, such as a compressor seal or a wellhead safety valve. It is usually kept in stock even if it is rarely used.',
            },
            {
              fa: '**قلم با زمان تحویل طولانی (Long-lead item)**: کالایی که ساخت و حملش ماه‌ها طول می‌کشد؛ مانند سرچاهی و تاج چاه، لوله جداری با گرید خاص یا یک کمپرسور کامل. باید خیلی زودتر از تاریخ نیاز سفارش داده شود.',
              en: '**Long-lead item**: an item that takes months to manufacture and ship, such as a wellhead and Christmas tree, special-grade casing or a complete compressor. It must be ordered well ahead of the date it is needed.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در ERP هر کالا یا خدمت یک **گروه کالا (Material group)** دارد، مثلاً «شیرآلات» یا «خدمات چاه». گزارش هزینه‌کرد بالا از روی همین گروه‌ها و از سفارش‌های خرید و فاکتورها استخراج می‌شود. اگر کاربر گروه کالا را اشتباه انتخاب کند، تحلیل هزینه‌کرد هم اشتباه می‌شود و تصمیم‌های خرید بر پایه عدد غلط گرفته می‌شود.',
            en: 'In the ERP every item or service carries a **material group**, such as “Valves” or “Well services”. A spend report like the one above is pulled from these groups across purchase orders and invoices. If a user picks the wrong material group, the spend analysis is wrong too, and sourcing decisions rest on bad numbers.',
          },
        },
      ],
    },
    {
      id: 'p2p-cycle',
      title: { fa: 'چرخه درخواست تا پرداخت (P2P)', en: 'The Procure-to-Pay (P2P) Cycle' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**چرخه درخواست تا پرداخت (Procure-to-Pay یا P2P)** مسیری است که هر خرید از لحظه تشخیص نیاز تا پرداخت پول به تأمین‌کننده طی می‌کند. هر مرحله یک **سند** دارد و هر سند به سند قبلی ارجاع می‌دهد. ERP این زنجیره را **جریان اسناد (Document flow)** می‌نامد؛ از روی آن می‌توان از هر پرداخت به عقب برگشت و دید چه کسی، چه چیزی را، با چه مجوزی خریده است.',
            en: 'The **procure-to-pay (P2P) cycle** is the path every purchase follows, from the moment a need is identified to the moment the supplier is paid. Each step has a **document**, and each document refers back to the one before it. The ERP calls this chain the **document flow**; from it you can trace any payment back and see who bought what, with which approval.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'تشخیص نیاز و درخواست خرید', en: 'Need and purchase requisition' },
              text: {
                fa: 'کاربر (مثلاً مهندس تعمیرات) یا سیستم (برنامه‌ریزی نیازمندی مواد، MRP) یک **درخواست خرید (PR)** ثبت می‌کند: چه چیزی، چه مقدار، چه زمانی و به حساب کدام موضوع هزینه.',
                en: 'A user (say, a maintenance engineer) or the system (material requirements planning, MRP) creates a **purchase requisition (PR)**: what, how many, by when, and charged to which cost object.',
              },
            },
            {
              title: { fa: 'تأیید', en: 'Approval' },
              text: {
                fa: 'درخواست طبق جدول اختیارات تأیید می‌شود و بودجه یا مجوز هزینه (AFE) آن کنترل می‌شود.',
                en: 'The PR is approved according to the delegation of authority, and its budget or AFE is checked.',
              },
            },
            {
              title: { fa: 'منبع‌یابی', en: 'Sourcing' },
              text: {
                fa: 'واحد تدارکات استعلام بها می‌گیرد یا مناقصه برگزار می‌کند و پیشنهادها را ارزیابی می‌کند.',
                en: 'Procurement requests quotations or runs a tender and evaluates the offers.',
              },
            },
            {
              title: { fa: 'سفارش خرید یا قرارداد', en: 'Purchase order or contract' },
              text: {
                fa: 'برای برنده **سفارش خرید (PO)** صادر یا قرارداد امضا می‌شود. این نخستین تعهد حقوقی شرکت به تأمین‌کننده است.',
                en: 'A **purchase order (PO)** is issued or a contract is signed with the winner. This is the company’s first legal commitment to the supplier.',
              },
            },
            {
              title: { fa: 'پیگیری و حمل', en: 'Expediting and shipping' },
              text: {
                fa: 'کارشناس پیگیری (Expeditor) ساخت، بازرسی و حمل را دنبال می‌کند تا کالا سر وقت برسد.',
                en: 'An expeditor follows manufacturing, inspection and shipping so the goods arrive on time.',
              },
            },
            {
              title: { fa: 'رسید کالا (GRN) یا برگه ثبت خدمات (SES)', en: 'Goods received note (GRN) or service entry sheet (SES)' },
              text: {
                fa: 'برای کالا، انبار پس از بازرسی **رسید کالا (GRN: Goods Received Note)** ثبت می‌کند. برای خدمات، پیمانکار یا کاربر **برگه ثبت خدمات (SES: Service Entry Sheet)** را ثبت می‌کند و مسئول قرارداد آن را می‌پذیرد. جزئیات هر دو در درس «رسید کالا (GRN) و برگه ثبت خدمات (SES)» آمده است.',
                en: 'For goods, the warehouse posts a **goods received note (GRN)** after inspection. For services, the contractor or user enters a **service entry sheet (SES)** and the contract holder accepts it. Both are covered in detail in the lesson on the goods received note (GRN) and service entry sheet (SES).',
              },
            },
            {
              title: { fa: 'فاکتور و تطبیق سه‌طرفه', en: 'Invoice and three-way match' },
              text: {
                fa: 'واحد حساب‌های پرداختنی فاکتور تأمین‌کننده را ثبت می‌کند و سیستم آن را با سفارش و GRN (یا SES) مقایسه می‌کند.',
                en: 'Accounts payable enters the supplier’s invoice and the system compares it with the PO and the GRN (or SES).',
              },
            },
            {
              title: { fa: 'پرداخت', en: 'Payment' },
              text: {
                fa: 'در سررسید، خزانه‌داری مبلغ را می‌پردازد و بدهی به تأمین‌کننده تسویه می‌شود.',
                en: 'On the due date, treasury pays the supplier and the payable is cleared.',
              },
            },
          ],
        },
        {
          type: 'diagram',
          id: 'p2p-flow',
          caption: {
            fa: 'زنجیره اسناد درخواست تا پرداخت و ثبتی که هر مرحله در ماژول مالی ایجاد می‌کند.',
            en: 'The procure-to-pay document chain and the Finance posting each step creates.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'هر مرحله، سند، مسئول و اثر مالی آن', en: 'Each step, its document, owner and finance effect' },
          head: [
            { fa: 'مرحله', en: 'Step' },
            { fa: 'سند', en: 'Document' },
            { fa: 'مسئول', en: 'Owner' },
            { fa: 'اثر در مالی', en: 'Effect in Finance' },
          ],
          rows: [
            [
              { fa: 'نیاز', en: 'Need' },
              { fa: 'درخواست خرید', en: 'Purchase requisition' },
              { fa: 'درخواست‌کننده یا برنامه‌ریز', en: 'Requester or planner' },
              { fa: 'ثبت حسابداری ندارد', en: 'No accounting entry' },
            ],
            [
              { fa: 'منبع‌یابی', en: 'Sourcing' },
              { fa: 'استعلام، پیشنهادها و جدول مقایسه', en: 'RFQ, quotations and comparison' },
              { fa: 'کارشناس خرید', en: 'Buyer' },
              { fa: 'ثبت حسابداری ندارد', en: 'No accounting entry' },
            ],
            [
              { fa: 'سفارش', en: 'Order' },
              { fa: 'سفارش خرید یا قرارداد', en: 'Purchase order or contract' },
              { fa: 'کارشناس خرید؛ امضا طبق جدول اختیارات', en: 'Buyer; signed per the DoA' },
              {
                fa: 'ثبت در دفتر کل ندارد؛ فقط **تعهد** در برابر بودجه یا AFE ثبت می‌شود',
                en: 'No general ledger entry; only a **commitment** against the budget or AFE',
              },
            ],
            [
              { fa: 'رسید', en: 'Receipt' },
              { fa: 'رسید کالا (GRN) یا برگه ثبت خدمات (SES)', en: 'Goods received note (GRN) or service entry sheet (SES)' },
              { fa: 'انباردار یا کاربر', en: 'Storekeeper or user' },
              { fa: 'بدهکار موجودی یا موضوع هزینه / بستانکار GR/IR (برای SES هنگام پذیرش)', en: 'Dr Inventory or cost object / Cr GR/IR (for an SES, on acceptance)' },
            ],
            [
              { fa: 'فاکتور', en: 'Invoice' },
              { fa: 'فاکتور تأمین‌کننده', en: 'Supplier invoice' },
              { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
              { fa: 'بدهکار GR/IR / بستانکار حساب‌های پرداختنی', en: 'Dr GR/IR / Cr Accounts payable' },
            ],
            [
              { fa: 'پرداخت', en: 'Payment' },
              { fa: 'سند پرداخت', en: 'Payment document' },
              { fa: 'خزانه‌داری', en: 'Treasury' },
              { fa: 'بدهکار حساب‌های پرداختنی / بستانکار بانک', en: 'Dr Accounts payable / Cr Cash at bank' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'تطبیق سه‌طرفه', en: 'Three-way match' },
          text: {
            fa: 'پیش از پرداخت، سیستم سه سند را کنار هم می‌گذارد: **سفارش خرید** (چه چیزی و به چه قیمتی خواستیم)، **رسید کالا (GRN)** (چه مقدار واقعاً رسید) و **فاکتور** (تأمین‌کننده بابت چه چیزی پول می‌خواهد). اگر مقدار یا قیمت فاکتور بیش از حد مجاز با آن دو فرق کند، فاکتور برای پرداخت **مسدود** می‌شود تا کسی علت را بررسی کند. مثال: سفارش 24 شیر به قیمت 3,500، GRN برای 24 شیر، فاکتور 24 شیر به قیمت 3,600. اختلاف 100 × 24 = 2,400 است و تا روشن شدن علت، چیزی پرداخت نمی‌شود.',
            en: 'Before payment, the system lines up three documents: the **purchase order** (what we asked for and at what price), the **goods received note (GRN)** (what actually arrived) and the **invoice** (what the supplier wants to be paid for). If the invoice quantity or price differs from the other two by more than the tolerance, the invoice is **blocked for payment** until someone investigates. Example: PO for 24 valves at 3,500, GRN for 24 valves, invoice for 24 valves at 3,600. The difference is 100 × 24 = 2,400, and nothing is paid until the cause is clear.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'قاعده «بدون سفارش، پرداخت نه»', en: 'The “no PO, no pay” rule' },
          text: {
            fa: 'بسیاری از شرکت‌ها قاعده‌ای دارند به نام «بدون سفارش خرید، پرداخت ممنوع»: فاکتوری که سفارش خرید تأییدشده ندارد پرداخت نمی‌شود، مگر در چند مورد محدود و از پیش تعریف‌شده مثل قبض آب و برق. این قاعده **خرید خارج از فرایند (Maverick buying)** را کم می‌کند؛ یعنی خریدی که کسی خودسرانه و بدون تأیید انجام داده و بعد فاکتورش را برای پرداخت فرستاده است.',
            en: 'Many companies enforce “no PO, no pay”: an invoice without an approved purchase order is not paid, except in a few predefined cases such as utility bills. The rule cuts down **maverick buying**, where someone buys on their own without approval and then sends the invoice in for payment.',
          },
        },
      ],
    },
    {
      id: 'governance',
      title: { fa: 'حاکمیت: اختیارات، رویه‌ها و اخلاق حرفه‌ای', en: 'Governance: Authority, Procedures and Ethics' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'تدارکات پول دیگران را خرج می‌کند: پول سهامداران، پول شرکای مشارکت و، از راه بازیافت هزینه، در نهایت سهم دولت میزبان. برای همین به قواعد روشن نیاز دارد: چه کسی تا چه مبلغی اجازه تأیید دارد (اختیارات)، خرید باید با چه روشی انجام شود (رویه‌ها) و کارکنان چگونه باید رفتار کنند (اخلاق حرفه‌ای).',
            en: 'Procurement spends other people’s money: shareholders’ money, joint venture partners’ money and, through cost recovery, ultimately part of the host government’s share. So it needs clear rules: who may approve how much (authority), how buying must be done (procedures) and how staff must behave (ethics).',
          },
        },
        {
          type: 'h',
          text: { fa: 'جدول تفویض اختیار (DoA)', en: 'Delegation of authority (DoA)' },
        },
        {
          type: 'p',
          text: {
            fa: '**جدول تفویض اختیار (Delegation of Authority)** سندی است که هیئت‌مدیره تصویب می‌کند و می‌گوید هر سمت تا چه مبلغی می‌تواند هزینه را تأیید یا تعهدی را امضا کند. در کنارش، **رویه خرید** تعیین می‌کند برای هر مبلغ حداقل چه روش منبع‌یابی لازم است. جدول زیر در همه درس‌های این دوره برای مسار پترولیوم به کار می‌رود.',
            en: 'The **delegation of authority (DoA)** is a board-approved document that says up to what value each position may approve spending or sign a commitment. Alongside it, the **procurement procedure** sets the minimum sourcing method for each value. The table below is used for Masar Petroleum throughout this course.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'جدول اختیارات و روش خرید مسار پترولیوم (سقف‌ها فرضی‌اند)',
            en: 'Masar Petroleum authority and sourcing matrix (illustrative limits)',
          },
          head: [
            { fa: 'مبلغ تعهد', en: 'Commitment value' },
            { fa: 'حداقل روش منبع‌یابی', en: 'Minimum sourcing method' },
            { fa: 'تأییدکننده درخواست', en: 'PR approver' },
            { fa: 'تصویب برنده و امضای سفارش', en: 'Award approval and PO signature' },
          ],
          rows: [
            [
              { fa: 'تا 10,000', en: 'Up to 10,000' },
              { fa: 'یک پیشنهاد یا خرید از قرارداد چارچوبی', en: 'One quotation or a call-off from a framework agreement' },
              { fa: 'سرپرست بخش', en: 'Section head' },
              { fa: 'کارشناس خرید', en: 'Buyer' },
            ],
            [
              { fa: 'بیش از 10,000 تا 100,000', en: 'Over 10,000 up to 100,000' },
              { fa: 'دست‌کم سه پیشنهاد کتبی (استعلام بها)', en: 'At least three written quotations (RFQ)' },
              { fa: 'مدیر واحد و کنترل‌کننده هزینه', en: 'Department manager and cost controller' },
              { fa: 'مدیر تدارکات', en: 'Procurement manager' },
            ],
            [
              { fa: 'بیش از 100,000 تا 1,000,000', en: 'Over 100,000 up to 1,000,000' },
              { fa: 'مناقصه محدود بین تأمین‌کنندگان تأییدشده', en: 'Limited tender among approved suppliers' },
              { fa: 'مدیر عملیات', en: 'Operations director' },
              { fa: 'کمیسیون مناقصه؛ امضای مدیر مالی', en: 'Tender committee; signed by the CFO' },
            ],
            [
              { fa: 'بیش از 1,000,000', en: 'Over 1,000,000' },
              { fa: 'مناقصه عمومی', en: 'Open tender' },
              { fa: 'مدیرعامل', en: 'CEO' },
              {
                fa: 'کمیسیون مناقصه و مدیرعامل؛ به‌علاوه تصویب کمیته عملیات شرکا',
                en: 'Tender committee and CEO; plus approval by the partners’ operating committee',
              },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'خرد کردن سفارش ممنوع است', en: 'Order splitting is not allowed' },
          text: {
            fa: '**خرد کردن سفارش (Order splitting)** یعنی تقسیم یک نیاز به چند درخواست کوچک تا هر کدام زیر سقف بماند. دو درخواست 60,000 برای همان کالا در یک هفته در واقع یک نیاز 120,000 است و باید با مناقصه محدود خریده شود، نه با دو استعلام جدا. این کار تخلف است و حسابرسان و شرکا دقیقاً دنبال آن می‌گردند. ERPها معمولاً گزارشی دارند که خریدهای مشابه از یک تأمین‌کننده در بازه کوتاه را نشان می‌دهد.',
            en: '**Order splitting** means breaking one need into several small requisitions so that each stays under a limit. Two requisitions of 60,000 for the same item in the same week are really one need of 120,000, which requires a limited tender, not two separate RFQs. It is a breach of the rules, and auditors and partners look for exactly this. ERPs usually offer a report that flags similar purchases from one supplier within a short period.',
          },
        },
        {
          type: 'h',
          text: { fa: 'تفکیک وظایف', en: 'Segregation of duties' },
        },
        {
          type: 'p',
          text: {
            fa: '**تفکیک وظایف (Segregation of duties)** یعنی هیچ فردی نتواند یک خرید را از ابتدا تا انتها به‌تنهایی انجام دهد. اگر یک نفر هم سفارش بدهد، هم GRN ثبت کند و هم پرداخت کند، می‌تواند بدون آنکه کسی بفهمد پول را به حساب تأمین‌کننده‌ای ساختگی بفرستد. در ERP این تفکیک با **نقش‌های کاربری** اجرا می‌شود:',
            en: '**Segregation of duties** means no single person can carry a purchase from start to finish alone. If one person could order, receive and pay, they could send money to a fake supplier without anyone noticing. In the ERP this is enforced through **user roles**:',
          },
        },
        {
          type: 'list',
          items: [
            { fa: 'کسی که درخواست خرید می‌دهد، تأمین‌کننده را انتخاب نمی‌کند.', en: 'Whoever raises the requisition does not choose the supplier.' },
            { fa: 'کسی که سفارش خرید صادر می‌کند، کالا را تحویل نمی‌گیرد.', en: 'Whoever issues the PO does not receive the goods.' },
            { fa: 'کسی که GRN ثبت یا SES را تأیید می‌کند، فاکتور را ثبت یا پرداخت نمی‌کند.', en: 'Whoever posts the GRN or accepts the SES does not post or pay the invoice.' },
            {
              fa: 'کسی که اطلاعات بانکی تأمین‌کننده را تغییر می‌دهد، پرداخت را اجرا نمی‌کند.',
              en: 'Whoever changes a supplier’s bank details does not run payments.',
            },
          ],
        },
        {
          type: 'h',
          text: { fa: 'اخلاق حرفه‌ای و تعارض منافع', en: 'Ethics and conflicts of interest' },
        },
        {
          type: 'p',
          text: {
            fa: '**تعارض منافع (Conflict of interest)** وقتی پیش می‌آید که منافع شخصی یک کارمند، یا خانواده و دوستانش، بتواند بر تصمیم کاری او اثر بگذارد. مثال: کارشناس خریدی که برادرش سهامدار یکی از شرکت‌کنندگان مناقصه است. راه درست **اعلام کتبی** و **کناره‌گیری** از آن خرید است؛ نه پنهان کردن، و نه ادعای اینکه «من بی‌طرف می‌مانم». قواعد رایج دیگر:',
            en: 'A **conflict of interest** arises when an employee’s personal interests, or those of family and friends, could influence a business decision. Example: a buyer whose brother is a shareholder in one of the bidders. The right response is to **declare it in writing** and **step away** from that purchase; not to hide it, and not to promise to “stay neutral”. Other common rules:',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: 'هدیه و پذیرایی از تأمین‌کنندگان فقط تا سقف کوچکی که خط‌مشی تعیین کرده، و همیشه ثبت‌شده.',
              en: 'Gifts and hospitality from suppliers only up to a small limit set by policy, and always recorded.',
            },
            {
              fa: 'محرمانه ماندن پیشنهادها: قیمت یک شرکت‌کننده هرگز به دیگری گفته نمی‌شود.',
              en: 'Bids stay confidential: one bidder’s price is never revealed to another.',
            },
            {
              fa: 'اطلاعات برابر: هر توضیح یا اصلاحیه برای همه شرکت‌کنندگان هم‌زمان فرستاده می‌شود.',
              en: 'Equal information: every clarification or addendum goes to all bidders at the same time.',
            },
            {
              fa: 'اعلام سالانه منافع و گزارش موارد مشکوک از کانال گزارش تخلف.',
              en: 'An annual declaration of interests, and suspicions reported through the whistleblowing channel.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در ایران شرکت‌های دولتی و وابسته به دولت باید **قانون برگزاری مناقصات** را رعایت کنند. این قانون معاملات را بر اساس مبلغ به کوچک، متوسط و بزرگ تقسیم می‌کند و سقف این طبقه‌ها هر سال به‌روز می‌شود؛ پس همیشه ارقام سال جاری را بررسی کنید. در مشارکت‌ها، **موافقت‌نامه عملیات مشترک (JOA)** معمولاً مقرر می‌کند که قراردادهای بالاتر از یک سقف به تصویب کمیته عملیات شرکا برسد و شرکا حق حسابرسی اسناد خرید را داشته باشند.',
            en: 'In Iran, state-owned and state-affiliated companies must follow the **Law on Holding Tenders**. It classifies transactions by value as small, medium or large, and the thresholds are updated every year, so always check the current figures. In joint ventures, the **joint operating agreement (JOA)** usually requires contracts above a set value to be approved by the partners’ operating committee and gives partners the right to audit procurement records.',
          },
        },
      ],
    },
    {
      id: 'erp-procurement',
      title: { fa: 'ماژول تدارکات در ERP', en: 'The Procurement Module in an ERP' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در **سیستم برنامه‌ریزی منابع سازمان (ERP)** همه ماژول‌ها روی یک پایگاه داده کار می‌کنند. سندی که در یک ماژول ثبت می‌شود، اثرش را خودکار در ماژول‌های دیگر می‌گذارد؛ به این **ثبت یکپارچه (Integration posting)** می‌گویند. ماژول تدارکات در مرکز این شبکه است: نیاز را از انبار، نگهداری و پروژه‌ها می‌گیرد و نتیجه را به انبار و مالی تحویل می‌دهد.',
            en: 'In an **enterprise resource planning (ERP)** system all modules share one database. A document posted in one module automatically leaves its trace in the others; this is called an **integration posting**. The Procurement module sits at the centre of this web: it takes needs from Inventory, Maintenance and Projects and hands the results to Inventory and Finance.',
          },
        },
        {
          type: 'diagram',
          id: 'erp-modules',
          caption: {
            fa: 'نقشه ماژول‌های ERP و جریان‌های یکپارچه میان آن‌ها؛ تدارکات بین نیازها و مالی قرار دارد.',
            en: 'The ERP module map and the integration flows between modules; Procurement sits between the needs and Finance.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'داده پایه (Master Data): کم تغییر می‌کند', en: 'Master data: changes rarely' },
            items: [
              { fa: 'داده پایه کالا: کد، شرح، واحد، گروه کالا', en: 'Material master: code, description, unit, material group' },
              { fa: 'داده پایه تأمین‌کننده: نام، شناسه، بانک، شرایط پرداخت', en: 'Vendor master: name, IDs, bank, payment terms' },
              { fa: 'سوابق قیمت و قراردادهای چارچوبی', en: 'Price records and framework agreements' },
              { fa: 'مراکز هزینه، پروژه‌ها و AFEها', en: 'Cost centres, projects and AFEs' },
              { fa: 'جدول گردش کار تأیید', en: 'Approval workflow matrix' },
            ],
          },
          right: {
            title: { fa: 'داده تراکنشی: هر روز ساخته می‌شود', en: 'Transaction data: created every day' },
            items: [
              { fa: 'درخواست خرید', en: 'Purchase requisition' },
              { fa: 'استعلام بها و پیشنهادها', en: 'RFQ and quotations' },
              { fa: 'سفارش خرید', en: 'Purchase order' },
              { fa: 'رسید کالا (GRN) و برگه ثبت خدمات (SES)', en: 'Goods received note (GRN) and service entry sheet (SES)' },
              { fa: 'فاکتور و سند پرداخت', en: 'Invoice and payment document' },
            ],
          },
        },
        {
          type: 'table',
          caption: { fa: 'پیوند تدارکات با ماژول‌های دیگر', en: 'How Procurement links to the other modules' },
          head: [
            { fa: 'ماژول', en: 'Module' },
            { fa: 'به تدارکات می‌دهد', en: 'Sends to Procurement' },
            { fa: 'از تدارکات می‌گیرد', en: 'Gets back' },
          ],
          rows: [
            [
              { fa: 'انبار', en: 'Inventory' },
              {
                fa: 'درخواست خرید خودکار MRP برای اقلامی که به نقطه سفارش رسیده‌اند',
                en: 'Automatic MRP requisitions for items that reached their reorder point',
              },
              {
                fa: 'رسید کالا (GRN) مقدار و ارزش موجودی انبار مرکزی یا انبار میدان را افزایش می‌دهد',
                en: 'The GRN increases stock quantity and value in the Central or Field Warehouse',
              },
            ],
            [
              { fa: 'نگهداری و تعمیرات', en: 'Maintenance' },
              {
                fa: 'درخواست خرید قطعات غیرانباری و خدمات بیرونی از روی دستور کار',
                en: 'Requisitions for non-stock parts and external services from a work order',
              },
              {
                fa: 'قطعه رسیده برای دستور کار کنار گذاشته می‌شود و هزینه‌اش به تجهیز می‌نشیند',
                en: 'The received part is set aside for the work order and its cost lands on the equipment',
              },
            ],
            [
              { fa: 'پروژه‌ها', en: 'Projects' },
              {
                fa: 'درخواست‌هایی که به پروژه یا AFE (مثلاً حفاری چاه AR-09) تخصیص دارند',
                en: 'Requisitions charged to a project or AFE (for example, drilling well AR-09)',
              },
              {
                fa: 'تعهدات و هزینه‌های واقعی پروژه برای مقایسه با AFE',
                en: 'Commitments and actual costs on the project, compared with the AFE',
              },
            ],
            [
              { fa: 'مالی', en: 'Finance' },
              {
                fa: 'بودجه، حساب‌های کل، شرایط پرداخت و اطلاعات حسابداری تأمین‌کننده',
                en: 'Budgets, general ledger accounts, payment terms and vendor accounting data',
              },
              {
                fa: 'ثبت‌های خودکار در GRN یا SES، فاکتور و پرداخت؛ گزارش تعهدات',
                en: 'Automatic postings at the GRN or SES, invoice and payment; commitment reports',
              },
            ],
          ],
        },
        {
          type: 'h',
          text: { fa: 'مالی چه می‌بیند؟ یک خرید کامل', en: 'What Finance sees: one complete purchase' },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'خرید 24 شیر کشویی برای انبار مرکزی', en: 'Buying 24 gate valves for the Central Warehouse' },
          text: {
            fa: 'مسار پترولیوم 24 شیر کشویی 4 اینچ را به قیمت هر عدد 3,500 از تأمین‌کننده V-1001 سفارش می‌دهد: 24 × 3,500 = 84,000. چون مبلغ بین 10,000 و 100,000 است، سه پیشنهاد کتبی گرفته شده است. سفارش خرید در روز 3 صادر می‌شود اما **هیچ ثبتی در دفتر کل ندارد**؛ فقط تعهدی 84,000 در برابر بودجه انبار ثبت می‌شود. سه رویداد بعدی، ثبت خودکار دارند:',
            en: 'Masar Petroleum orders 24 four-inch gate valves at 3,500 each from supplier V-1001: 24 × 3,500 = 84,000. Because the value is between 10,000 and 100,000, three written quotations were obtained. The PO is issued on Day 3 but creates **no general ledger entry**; only a commitment of 84,000 is recorded against the stores budget. The next three events each post automatically:',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌هایی که ERP خودکار به مالی می‌فرستد', en: 'Postings the ERP sends to Finance automatically' },
          entries: [
            {
              date: day(12),
              lines: [
                { account: ac.inventory, debit: 84000 },
                { account: ac.grir, credit: 84000 },
              ],
              memo: {
                fa: 'GRN: 24 شیر پس از بازرسی در انبار مرکزی تحویل گرفته شد.',
                en: 'GRN: 24 valves accepted into the Central Warehouse after inspection.',
              },
            },
            {
              date: day(15),
              lines: [
                { account: ac.grir, debit: 84000 },
                { account: ac.ap, credit: 84000 },
              ],
              memo: {
                fa: 'فاکتور V-1001 پس از تطبیق سه‌طرفه با سفارش و GRN ثبت شد.',
                en: 'V-1001’s invoice posted after the three-way match with the PO and GRN.',
              },
            },
            {
              date: day(45),
              lines: [
                { account: ac.ap, debit: 84000 },
                { account: ac.bank, credit: 84000 },
              ],
              memo: {
                fa: 'پرداخت در سررسید 30 روزه.',
                en: 'Paid on the 30-day due date.',
              },
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'پس از این سه ثبت، مانده GR/IR صفر است، موجودی انبار 84,000 افزایش یافته، بدهی به تأمین‌کننده تسویه شده و موجودی بانک 84,000 کاهش یافته است. هیچ حسابداری این سندها را دستی نزده است؛ GRN، فاکتور و سند پرداخت آن‌ها را ساخته‌اند. پس دقت انباردار و کارمند حساب‌های پرداختنی مستقیماً روی صورت‌های مالی اثر دارد.',
            en: 'After these three entries, GR/IR is back to zero, inventory is up by 84,000, the supplier has been paid off and the bank balance is down by 84,000. No accountant keyed these entries; the GRN, the invoice and the payment document created them. That is why the storekeeper’s and the AP clerk’s accuracy flows straight into the financial statements.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'حساب واسط GR/IR چه می‌گوید؟', en: 'What does the GR/IR account tell you?' },
          text: {
            fa: 'GR/IR پلی است بین رسید (GRN یا SES پذیرفته‌شده) و فاکتور. **مانده بستانکار** یعنی کالا رسیده اما فاکتورش هنوز ثبت نشده؛ این در پایان دوره یک بدهی است. **مانده بدهکار** یعنی فاکتور آمده اما کالا هنوز نرسیده. واحد مالی در پایان هر ماه اقلام باز GR/IR را با واحد تدارکات بررسی می‌کند. برای سادگی، مالیات بر ارزش افزوده در این مثال‌ها نیامده است؛ نحوه ثبت آن در درس «بدهی‌ها، حقوق و دستمزد و مالیات بر ارزش افزوده» دوره حسابداری آمده است.',
            en: 'GR/IR is the bridge between the receipt (a GRN or an accepted SES) and the invoice. A **credit balance** means goods arrived but the invoice has not been posted yet, a liability at period-end. A **debit balance** means the invoice came in but the goods have not. Finance reviews the open GR/IR items with procurement every month-end. To keep things simple, VAT is left out of these examples; the accounting course’s lesson on liabilities, payroll and VAT shows how it is recorded.',
          },
        },
      ],
    },
    {
      id: 'oil-gas-context',
      title: { fa: 'تدارکات در نفت و گاز چه فرقی دارد؟', en: 'What Makes Oil & Gas Procurement Different' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              fa: '**ایمنی و گواهی‌ها**: تجهیزات تحت فشار باید با استانداردهایی مثل API 6A (سرچاهی و تاج چاه) و API 5CT (لوله جداری و مغزی) سازگار باشند و با **گواهی مواد** (مثلاً EN 10204 نوع 3.1) و اغلب **بازرسی شخص ثالث** پیش از حمل تحویل شوند.',
              en: '**Safety and certification**: pressure equipment must meet standards such as API 6A (wellheads and trees) and API 5CT (casing and tubing), and arrive with **material certificates** (for example EN 10204 type 3.1), often after **third-party inspection** before shipment.',
            },
            {
              fa: '**محل‌های دور و حمل دشوار**: میدان دور از شهر است؛ حمل، ترخیص و انبار میدان زمان تحویل را طولانی‌تر می‌کنند.',
              en: '**Remote sites and hard logistics**: the field is far from cities; transport, customs clearance and the field warehouse all lengthen lead times.',
            },
            {
              fa: '**پیمانکاران در محل**: خدمات چاه و تعمیرات را پیمانکاران روی تأسیسات فعال انجام می‌دهند؛ پس صلاحیت ایمنی (HSE) آن‌ها به اندازه قیمتشان مهم است.',
              en: '**Contractors on site**: well services and maintenance are done by contractors on live facilities, so their HSE qualification matters as much as their price.',
            },
            {
              fa: '**مشارکت و شرکا**: بهره‌بردار به حساب مشترک خرید می‌کند؛ شرکا بودجه، AFEها و قراردادهای بزرگ را تصویب می‌کنند و حق حسابرسی دارند.',
              en: '**Joint ventures**: the operator buys for the joint account; partners approve budgets, AFEs and large contracts and have audit rights.',
            },
            {
              fa: '**بازیافت هزینه**: هزینه‌ها باید با موضوع هزینه درست و اسناد کامل ثبت شوند تا طبق قرارداد نفتی قابل بازیافت باشند.',
              en: '**Cost recovery**: costs must be recorded against the right cost object with full documents to be recoverable under the petroleum contract.',
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'در قراردادهای نفتی، شرکت سرمایه‌گذار معمولاً هزینه‌های مجاز خود را از محل تولید میدان پس می‌گیرد؛ به این **بازیافت هزینه (Cost recovery)** می‌گویند. اما فقط هزینه‌ای بازیافت‌پذیر است که **مجاز، مرتبط با عملیات، به موضوع هزینه درست ثبت‌شده و مستند** باشد. اسناد تدارکات (درخواست تأییدشده، سوابق مناقصه، سفارش، GRN یا SES و فاکتور) همان مدارکی‌اند که حسابرس شرکا یا شرکت ملی نفت می‌خواهد ببیند.',
            en: 'Under petroleum contracts the investing company usually gets its allowable costs back out of the field’s production; this is **cost recovery**. But only costs that are **allowable, related to operations, recorded against the right cost object and documented** can be recovered. Procurement records (the approved requisition, tender file, PO, GRN or SES, and invoice) are exactly the evidence that a partner’s auditor or the national oil company will ask to see.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'انواع رایج قرارداد نفتی (توضیح کلی؛ جزئیات هر قرارداد متفاوت است)',
            en: 'Common petroleum contract types (general description; each contract differs in detail)',
          },
          head: [
            { fa: 'قرارداد', en: 'Contract' },
            { fa: 'پیمانکار چگونه پول می‌گیرد', en: 'How the contractor is paid' },
            { fa: 'چرا سوابق تدارکات مهم است', en: 'Why procurement records matter' },
          ],
          rows: [
            [
              { fa: 'مشارکت در تولید (PSC / EPSA)', en: 'Production sharing (PSC / EPSA)' },
              {
                fa: 'پیمانکار هزینه‌ها را می‌پردازد، آن‌ها را از سهم سقف‌دار «نفت هزینه» پس می‌گیرد و باقی‌مانده تولید (نفت سود) را با دولت تقسیم می‌کند',
                en: 'The contractor pays the costs, recovers them from a capped “cost oil” share and splits the remaining “profit oil” with the state',
              },
              {
                fa: 'فقط هزینه مجاز، در برنامه کار و بودجه مصوب و خریداری‌شده طبق رویه قرارداد بازیافت می‌شود',
                en: 'Only allowable costs within the approved work programme and budget, bought under the contract’s procedures, are recovered',
              },
            ],
            [
              { fa: 'بیع متقابل (Buy-back، ایران)', en: 'Buy-back (Iran)' },
              {
                fa: 'پیمانکار توسعه میدان را تأمین مالی می‌کند و پس از تحویل به شرکت ملی نفت، هزینه‌های سرمایه‌ای تا سقف توافق‌شده به‌علاوه پاداش را از درآمد میدان در دوره‌ای مشخص پس می‌گیرد',
                en: 'The contractor finances field development and, after handing over to the national oil company, recovers capital costs up to an agreed ceiling plus a remuneration fee from field revenue over a set period',
              },
              { fa: 'هزینه‌ها باید زیر سقف و کاملاً مستند باشند', en: 'Costs must stay under the ceiling and be fully documented' },
            ],
            [
              { fa: 'قرارداد نفتی ایران (IPC)', en: 'Iran Petroleum Contract (IPC)' },
              {
                fa: 'قراردادی بلندمدت، معمولاً با شریک ایرانی؛ پیمانکار هزینه‌ها را بازیافت و برای هر بشکه تولید دستمزد دریافت می‌کند',
                en: 'A long-term contract, usually with an Iranian partner; the contractor recovers costs and earns a fee per barrel produced',
              },
              {
                fa: 'برنامه کار و بودجه سالانه به تصویب مشترک می‌رسد و خرید طبق رویه‌های قرارداد انجام می‌شود',
                en: 'Annual work programmes and budgets are approved jointly and purchasing follows the contract’s procedures',
              },
            ],
            [
              { fa: 'قرارداد خدماتی', en: 'Service contract' },
              {
                fa: 'پیمانکار برای خدمت یا هر بشکه دستمزد می‌گیرد؛ هزینه‌ها طبق شرایط قرارداد بازپرداخت می‌شود',
                en: 'The contractor earns a fee per service or per barrel; costs are reimbursed under the contract terms',
              },
              { fa: 'بازپرداخت فقط برای هزینه‌های مستند و مجاز', en: 'Reimbursement only for documented, allowable costs' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' },
          text: {
            fa: '(1) سفارش دادن پیش از تأیید درخواست، و ساختن سفارش «پس از وقوع» وقتی فاکتور رسیده است. (2) انتخاب کمترین قیمت بدون دیدن هزینه حمل، گواهی‌ها و خطر توقف. (3) خرد کردن سفارش برای فرار از سقف اختیارات. (4) انتخاب موضوع هزینه یا گروه کالای اشتباه؛ هم تحلیل هزینه‌کرد خراب می‌شود و هم بازیافت هزینه. (5) ثبت GRN در سیستم پیش از بازرسی و شمارش واقعی، یا پذیرش SES بدون کنترل برگه‌های کارکرد امضاشده؛ موجودی، هزینه و GR/IR غلط می‌شوند. (6) فراموش کردن زمان تحویل اقلام بلندمدت تا روزی که دکل منتظر می‌ماند.',
            en: '(1) Ordering before the requisition is approved, and creating an “after-the-fact” PO when the invoice turns up. (2) Choosing the lowest price without looking at freight, certificates and downtime risk. (3) Splitting orders to dodge authority limits. (4) Picking the wrong cost object or material group, which breaks both the spend analysis and cost recovery. (5) Posting the GRN before the physical count and inspection, or accepting an SES without checking the signed field tickets, so inventory, cost and GR/IR are wrong. (6) Forgetting the lead time of long-lead items until the day the rig is waiting.',
          },
        },
      ],
    },
    {
      id: 'exercises',
      title: { fa: 'تمرین‌ها', en: 'Exercises' },
      blocks: [
        {
          type: 'exercise',
          title: { fa: 'کالا، خدمات یا کار؟ مستقیم یا غیرمستقیم؟', en: 'Goods, services or works? Direct or indirect?' },
          difficulty: 'easy',
          problem: {
            fa: 'هر قلم زیر را از دو جهت دسته‌بندی کنید: کالا، خدمات یا کار؛ و خرید مستقیم یا غیرمستقیم (طبق خط‌مشی مسار پترولیوم که تغذیه کمپ و اقلام اداری را غیرمستقیم می‌داند).',
            en: 'Classify each item two ways: goods, services or works; and direct or indirect spend (under Masar Petroleum’s policy, camp catering and office items are indirect).',
          },
          given: {
            head: [
              { fa: 'ردیف', en: 'No.' },
              { fa: 'قلم خرید', en: 'Purchase' },
            ],
            rows: [
              [1, { fa: 'اجاره دکل حفاری با خدمه برای چاه AR-09', en: 'Hire of a drilling rig with crew for well AR-09' }],
              [2, { fa: '300 شاخه لوله مغزی 3.5 اینچ', en: '300 joints of 3.5-inch tubing' }],
              [3, { fa: 'ساخت فونداسیون بتنی برای کمپرسور جدید', en: 'Building a concrete foundation for a new compressor' }],
              [4, { fa: 'لپ‌تاپ برای کارکنان مالی دفتر مرکزی', en: 'Laptops for head-office finance staff' }],
              [5, { fa: 'بازرسی سالانه مخازن تحت فشار ایستگاه تقویت فشار', en: 'Annual inspection of pressure vessels at the compressor station' }],
              [6, { fa: 'تغذیه کمپ میدان آریا', en: 'Catering for the Arya field camp' }],
            ],
          },
          hint: {
            fa: 'بپرسید: آیا چیزی فیزیکی به انبار می‌آید؟ آیا چیزی ماندگار در محل ساخته می‌شود؟ آیا مستقیماً به تولید یا پروژه میدان مربوط است؟',
            en: 'Ask: does something physical arrive in the warehouse? Is something permanent built on site? Does it go straight into production or a field project?',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'ردیف', en: 'No.' },
                { fa: 'دسته', en: 'Type' },
                { fa: 'هزینه‌کرد', en: 'Spend' },
                { fa: 'دلیل', en: 'Reason' },
              ],
              rows: [
                [1, { fa: 'خدمات', en: 'Services' }, { fa: 'مستقیم', en: 'Direct' }, { fa: 'پیمانکار با دکل و خدمه خودش کار می‌کند؛ مستقیماً برای حفاری چاه', en: 'The contractor works with its own rig and crew; directly for drilling the well' }],
                [2, { fa: 'کالا', en: 'Goods' }, { fa: 'مستقیم', en: 'Direct' }, { fa: 'قلم فیزیکی که تحویل و شمرده می‌شود؛ در تکمیل چاه به کار می‌رود', en: 'A physical item received and counted; used to complete wells' }],
                [3, { fa: 'کار', en: 'Works' }, { fa: 'مستقیم', en: 'Direct' }, { fa: 'ساخت چیزی ماندگار در محل، برای تأسیسات تولید', en: 'Building something permanent on site, for production facilities' }],
                [4, { fa: 'کالا', en: 'Goods' }, { fa: 'غیرمستقیم', en: 'Indirect' }, { fa: 'قلم فیزیکی، اما برای پشتیبانی اداری', en: 'A physical item, but for office support' }],
                [5, { fa: 'خدمات', en: 'Services' }, { fa: 'مستقیم', en: 'Direct' }, { fa: 'خدمتی که ایمنی و تداوم تولید ایستگاه را تضمین می‌کند', en: 'A service that keeps the station safe and producing' }],
                [6, { fa: 'خدمات', en: 'Services' }, { fa: 'غیرمستقیم', en: 'Indirect' }, { fa: 'پشتیبانی کارکنان، طبق خط‌مشی شرکت غیرمستقیم', en: 'Supports staff; indirect under company policy' }],
              ],
            },
          ],
          answer: {
            fa: 'کالا: 2 و 4؛ خدمات: 1، 5 و 6؛ کار: 3. مستقیم: 1، 2، 3 و 5؛ غیرمستقیم: 4 و 6.',
            en: 'Goods: 2 and 4; services: 1, 5 and 6; works: 3. Direct: 1, 2, 3 and 5; indirect: 4 and 6.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'ترتیب چرخه P2P', en: 'Putting the P2P cycle in order' },
          difficulty: 'easy',
          problem: {
            fa: 'رویدادهای زیر مربوط به خرید یک قطعه یدکی برای ایستگاه تقویت فشار است و به‌هم‌ریخته آمده‌اند. آن‌ها را مرتب کنید و بگویید کدام‌ها ثبت خودکار در دفتر کل ایجاد می‌کنند.',
            en: 'The events below belong to the purchase of a spare part for the compressor station and are out of order. Put them in order and say which ones create an automatic general ledger entry.',
          },
          given: {
            head: [
              { fa: 'حرف', en: 'Letter' },
              { fa: 'رویداد', en: 'Event' },
            ],
            rows: [
              [{ fa: 'الف', en: 'A' }, { fa: 'فاکتور تأمین‌کننده ثبت و با سفارش و GRN تطبیق داده شد', en: 'Supplier invoice posted and matched with the PO and GRN' }],
              [{ fa: 'ب', en: 'B' }, { fa: 'درخواست خرید تأیید شد', en: 'Purchase requisition approved' }],
              [{ fa: 'ج', en: 'C' }, { fa: 'وجه به تأمین‌کننده پرداخت شد', en: 'Supplier paid' }],
              [{ fa: 'د', en: 'D' }, { fa: 'رسید کالا (GRN) پس از بازرسی ثبت شد', en: 'Goods received note (GRN) posted after inspection' }],
              [{ fa: 'ه', en: 'E' }, { fa: 'سفارش خرید صادر شد', en: 'Purchase order issued' }],
              [{ fa: 'و', en: 'F' }, { fa: 'سه پیشنهاد دریافت و مقایسه شد', en: 'Three quotations received and compared' }],
            ],
          },
          solution: [
            {
              type: 'steps',
              items: [
                { title: { fa: 'ب: تأیید درخواست', en: 'B: requisition approved' }, text: { fa: 'بدون ثبت در دفتر کل.', en: 'No ledger entry.' } },
                { title: { fa: 'و: مقایسه پیشنهادها', en: 'F: quotations compared' }, text: { fa: 'بدون ثبت در دفتر کل.', en: 'No ledger entry.' } },
                {
                  title: { fa: 'ه: صدور سفارش', en: 'E: PO issued' },
                  text: { fa: 'بدون ثبت در دفتر کل؛ فقط تعهد در برابر بودجه.', en: 'No ledger entry; only a commitment against the budget.' },
                },
                {
                  title: { fa: 'د: رسید کالا (GRN)', en: 'D: goods received note (GRN)' },
                  text: { fa: 'ثبت خودکار: بدهکار موجودی / بستانکار GR/IR.', en: 'Automatic entry: Dr Inventory / Cr GR/IR.' },
                },
                {
                  title: { fa: 'الف: فاکتور', en: 'A: invoice' },
                  text: { fa: 'ثبت خودکار: بدهکار GR/IR / بستانکار حساب‌های پرداختنی.', en: 'Automatic entry: Dr GR/IR / Cr Accounts payable.' },
                },
                {
                  title: { fa: 'ج: پرداخت', en: 'C: payment' },
                  text: { fa: 'ثبت خودکار: بدهکار حساب‌های پرداختنی / بستانکار بانک.', en: 'Automatic entry: Dr Accounts payable / Cr Cash at bank.' },
                },
              ],
            },
          ],
          answer: {
            fa: 'ترتیب: ب، و، ه، د، الف، ج. فقط د، الف و ج ثبت خودکار در دفتر کل دارند.',
            en: 'Order: B, F, E, D, A, C. Only D, A and C post automatically to the general ledger.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تحویل در دو نوبت و مانده GR/IR', en: 'Two deliveries and the GR/IR balance' },
          difficulty: 'medium',
          problem: {
            fa: 'مسار پترولیوم برای انبار میدان 50 تن باریت به قیمت هر تن 400 سفارش می‌دهد. روز 5: 30 تن می‌رسد. روز 9: فاکتور همان 30 تن ثبت می‌شود. روز 20: 20 تن باقی‌مانده می‌رسد. روز 30: فاکتور اول پرداخت می‌شود. ثبت‌های خودکار ERP را بنویسید و مانده GR/IR را در روز 30 پیدا کنید.',
            en: 'Masar Petroleum orders 50 tonnes of barite at 400 per tonne for the Field Warehouse. Day 5: 30 tonnes arrive. Day 9: the invoice for those 30 tonnes is posted. Day 20: the remaining 20 tonnes arrive. Day 30: the first invoice is paid. Write the ERP’s automatic entries and find the GR/IR balance on Day 30.',
          },
          hint: {
            fa: 'هر GRN با قیمت سفارش ارزش‌گذاری می‌شود: مقدار × 400.',
            en: 'Each GRN is valued at the PO price: quantity × 400.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'ارزش رسیدها', en: 'Value the receipts' },
                  text: { fa: 'GRN اول: 30 × 400 = 12,000. GRN دوم: 20 × 400 = 8,000. جمع سفارش: 50 × 400 = 20,000.', en: 'First GRN: 30 × 400 = 12,000. Second GRN: 20 × 400 = 8,000. PO total: 50 × 400 = 20,000.' },
                },
                {
                  title: { fa: 'ثبت‌ها را بنویسید', en: 'Write the entries' },
                  text: { fa: 'هر GRN حساب GR/IR را بستانکار و هر فاکتور آن را بدهکار می‌کند.', en: 'Each GRN credits GR/IR and each invoice debits it.' },
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: day(5),
                  lines: [
                    { account: ac.inventory, debit: 12000 },
                    { account: ac.grir, credit: 12000 },
                  ],
                  memo: { fa: 'GRN برای 30 تن باریت.', en: 'GRN for 30 tonnes of barite.' },
                },
                {
                  date: day(9),
                  lines: [
                    { account: ac.grir, debit: 12000 },
                    { account: ac.ap, credit: 12000 },
                  ],
                  memo: { fa: 'فاکتور 30 تن.', en: 'Invoice for 30 tonnes.' },
                },
                {
                  date: day(20),
                  lines: [
                    { account: ac.inventory, debit: 8000 },
                    { account: ac.grir, credit: 8000 },
                  ],
                  memo: { fa: 'GRN برای 20 تن باقی‌مانده.', en: 'GRN for the remaining 20 tonnes.' },
                },
                {
                  date: day(30),
                  lines: [
                    { account: ac.ap, debit: 12000 },
                    { account: ac.bank, credit: 12000 },
                  ],
                  memo: { fa: 'پرداخت فاکتور اول.', en: 'Payment of the first invoice.' },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'مانده GR/IR پس از هر رویداد', en: 'GR/IR balance after each event' },
              head: [
                { fa: 'رویداد', en: 'Event' },
                { fa: 'بدهکار', en: 'Debit' },
                { fa: 'بستانکار', en: 'Credit' },
                { fa: 'مانده (بستانکار)', en: 'Balance (credit)' },
              ],
              numericCols: [1, 2, 3],
              rows: [
                [day(5), 0, 12000, 12000],
                [day(9), 12000, 0, 0],
                [day(20), 0, 8000, 8000],
                [day(30), 0, 0, 8000],
              ],
            },
          ],
          answer: {
            fa: 'در روز 30 حساب GR/IR مانده بستانکار 8,000 دارد: 20 تن رسیده که هنوز فاکتور نشده است. موجودی انبار 20,000 و حساب‌های پرداختنی صفر است.',
            en: 'On Day 30 GR/IR has a credit balance of 8,000: 20 tonnes received but not yet invoiced. Inventory is 20,000 and accounts payable is zero.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'کدام روش و کدام تأییدکننده؟', en: 'Which method and which approver?' },
          difficulty: 'hard',
          problem: {
            fa: 'با جدول اختیارات مسار پترولیوم، برای هر نیاز زیر حداقل روش منبع‌یابی، تأییدکننده درخواست و مرجع تصویب برنده را تعیین کنید. به مورد (ب) دقت کنید.',
            en: 'Using the Masar Petroleum authority matrix, give the minimum sourcing method, the PR approver and the award authority for each need. Look closely at item (b).',
          },
          given: {
            head: [
              { fa: 'نیاز', en: 'Need' },
              { fa: 'شرح', en: 'Description' },
              { fa: 'مبلغ برآوردی', en: 'Estimated value' },
            ],
            numericCols: [2],
            rows: [
              [{ fa: 'الف', en: 'a' }, { fa: 'تجهیزات حفاظت فردی برای خدمه میدان', en: 'PPE for the field crew' }, 7500],
              [
                { fa: 'ب', en: 'b' },
                {
                  fa: 'دو درخواست از یک نفر در یک هفته، هر کدام 60,000، برای یک ماده شیمیایی حفاری یکسان',
                  en: 'Two PRs from the same person in one week, each 60,000, for the same drilling chemical',
                },
                120000,
              ],
              [{ fa: 'ج', en: 'c' }, { fa: 'اجاره سه‌ماهه دکل تعمیر چاه', en: 'Three-month hire of a workover rig' }, 850000],
              [{ fa: 'د', en: 'd' }, { fa: 'قرارداد سه‌ساله نگهداری ایستگاه تقویت فشار', en: 'Three-year compressor station maintenance contract' }, 2000000],
            ],
          },
          hint: {
            fa: 'نیازی را که عمداً یا سهواً خرد شده، با مبلغ کلش بسنجید.',
            en: 'Judge a split need by its total value.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'نیاز', en: 'Need' },
                { fa: 'روش منبع‌یابی', en: 'Sourcing method' },
                { fa: 'تأییدکننده درخواست', en: 'PR approver' },
                { fa: 'تصویب برنده', en: 'Award approval' },
              ],
              rows: [
                [{ fa: 'الف (7,500)', en: 'a (7,500)' }, { fa: 'یک پیشنهاد', en: 'One quotation' }, { fa: 'سرپرست بخش', en: 'Section head' }, { fa: 'کارشناس خرید', en: 'Buyer' }],
                [
                  { fa: 'ب (120,000)', en: 'b (120,000)' },
                  { fa: 'مناقصه محدود؛ دو درخواست باید یکی شوند', en: 'Limited tender; the two PRs must be merged' },
                  { fa: 'مدیر عملیات', en: 'Operations director' },
                  { fa: 'کمیسیون مناقصه؛ امضای مدیر مالی', en: 'Tender committee; CFO signs' },
                ],
                [{ fa: 'ج (850,000)', en: 'c (850,000)' }, { fa: 'مناقصه محدود', en: 'Limited tender' }, { fa: 'مدیر عملیات', en: 'Operations director' }, { fa: 'کمیسیون مناقصه؛ امضای مدیر مالی', en: 'Tender committee; CFO signs' }],
                [
                  { fa: 'د (2,000,000)', en: 'd (2,000,000)' },
                  { fa: 'مناقصه عمومی', en: 'Open tender' },
                  { fa: 'مدیرعامل', en: 'CEO' },
                  { fa: 'کمیسیون مناقصه، مدیرعامل و کمیته عملیات شرکا', en: 'Tender committee, CEO and the partners’ operating committee' },
                ],
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              text: {
                fa: 'در مورد (ب) هر درخواست به‌تنهایی در طبقه «سه پیشنهاد کتبی» است، اما نیاز واقعی 60,000 + 60,000 = 120,000 است که از سقف 100,000 بالاتر است. دو درخواست جدا یعنی خرد کردن سفارش؛ کارشناس خرید باید آن‌ها را یکی کند و مناقصه محدود برگزار کند.',
                en: 'In item (b) each PR on its own falls in the “three written quotations” band, but the real need is 60,000 + 60,000 = 120,000, above the 100,000 limit. Two separate PRs amount to order splitting; the buyer should merge them and run a limited tender.',
              },
            },
          ],
          answer: {
            fa: 'الف: یک پیشنهاد؛ ب و ج: مناقصه محدود با تأیید مدیر عملیات؛ د: مناقصه عمومی با تأیید مدیرعامل و کمیته عملیات شرکا.',
            en: 'a: one quotation; b and c: limited tender approved by the operations director; d: open tender approved by the CEO and the partners’ operating committee.',
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
              fa: 'تدارکات کل مسیر تأمین است، از تشخیص نیاز تا پرداخت؛ هدفش کیفیت، مقدار، زمان، قیمت و تأمین‌کننده درست همراه با رعایت ضوابط است.',
              en: 'Procurement is the whole supply path, from need to payment; it aims for the right quality, quantity, time, price and supplier, with compliance.',
            },
            {
              fa: 'خریدها کالا، خدمات یا کارند و هر کدام قرارداد و روش تأیید تحویل خودش را دارد؛ خرید مستقیم معمولاً بیشتر هزینه‌کرد یک شرکت بالادستی است.',
              en: 'Purchases are goods, services or works, each with its own contract and delivery confirmation; direct spend is usually most of an upstream company’s spend.',
            },
            {
              fa: 'چرخه P2P: درخواست، تأیید، منبع‌یابی، سفارش، پیگیری، رسید (GRN برای کالا و SES برای خدمات)، فاکتور و پرداخت؛ فقط رسید، فاکتور و پرداخت در دفتر کل ثبت دارند.',
              en: 'The P2P cycle: requisition, approval, sourcing, order, expediting, receipt (a GRN for goods, an SES for services), invoice and payment; only receipt, invoice and payment post to the general ledger.',
            },
            {
              fa: 'جدول اختیارات، تفکیک وظایف و قواعد تعارض منافع از پول شرکت و شرکا محافظت می‌کنند؛ خرد کردن سفارش تخلف است.',
              en: 'The DoA, segregation of duties and conflict-of-interest rules protect the company’s and partners’ money; order splitting is a breach.',
            },
            {
              fa: 'ماژول تدارکات ERP نیاز را از انبار، نگهداری و پروژه‌ها می‌گیرد و ثبت‌های خودکار GR/IR، حساب‌های پرداختنی و بانک را برای مالی می‌سازد.',
              en: 'The ERP Procurement module takes needs from Inventory, Maintenance and Projects and creates the automatic GR/IR, payables and bank postings for Finance.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'تدارکات (Procurement)', en: 'Procurement' },
              def: {
                fa: 'همه فعالیت‌های تأمین کالا، خدمات و کار، از تشخیص نیاز تا پرداخت.',
                en: 'All activities that obtain goods, services and works, from need to payment.',
              },
            },
            {
              term: { fa: 'خرید مستقیم و غیرمستقیم', en: 'Direct and indirect spend' },
              def: {
                fa: 'هزینه‌کردی که مستقیماً وارد تولید یا پروژه‌های میدان می‌شود، در برابر هزینه‌کرد پشتیبانی.',
                en: 'Spend that goes straight into production or field projects, versus support spend.',
              },
            },
            {
              term: { fa: 'چرخه درخواست تا پرداخت (P2P)', en: 'Procure-to-pay (P2P)' },
              def: {
                fa: 'زنجیره اسناد از درخواست خرید تا پرداخت به تأمین‌کننده.',
                en: 'The chain of documents from purchase requisition to supplier payment.',
              },
            },
            {
              term: { fa: 'رسید کالا (GRN) و برگه ثبت خدمات (SES)', en: 'Goods received note (GRN) and service entry sheet (SES)' },
              def: {
                fa: 'دو سند تأیید دریافت: GRN برای کالایی که بازرسی و تحویل انبار شده و SES برای خدمتی که انجام و پذیرفته شده است.',
                en: 'The two receipt documents: the GRN for goods inspected and taken into the warehouse, and the SES for services performed and accepted.',
              },
            },
            {
              term: { fa: 'تطبیق سه‌طرفه', en: 'Three-way match' },
              def: {
                fa: 'مقایسه سفارش خرید، رسید کالا (GRN) و فاکتور پیش از پرداخت.',
                en: 'Comparing the purchase order, goods received note (GRN) and invoice before payment.',
              },
            },
            {
              term: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing account' },
              def: {
                fa: 'حسابی موقت که با GRN یا پذیرش SES بستانکار و با فاکتور بدهکار می‌شود و اختلاف زمانی آن دو را نشان می‌دهد.',
                en: 'A temporary account credited by the GRN or accepted SES and debited by the invoice, showing timing gaps between the two.',
              },
            },
            {
              term: { fa: 'جدول تفویض اختیار (DoA)', en: 'Delegation of authority (DoA)' },
              def: {
                fa: 'سند مصوبی که سقف اختیار هر سمت برای تأیید هزینه و امضای تعهد را تعیین می‌کند.',
                en: 'An approved document setting each position’s limit for approving spend and signing commitments.',
              },
            },
            {
              term: { fa: 'تعارض منافع', en: 'Conflict of interest' },
              def: {
                fa: 'وضعیتی که منافع شخصی می‌تواند بر تصمیم کاری اثر بگذارد؛ باید اعلام شود و فرد کنار برود.',
                en: 'A situation where personal interests could sway a business decision; it must be declared and the person must step aside.',
              },
            },
            {
              term: { fa: 'بازیافت هزینه (Cost recovery)', en: 'Cost recovery' },
              def: {
                fa: 'بازگرداندن هزینه‌های مجاز و مستند پیمانکار از محل تولید، طبق قرارداد نفتی.',
                en: 'Returning the contractor’s allowable, documented costs out of production, under the petroleum contract.',
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
        fa: 'کدام خرید در دسته «کار» (Works) قرار می‌گیرد؟',
        en: 'Which purchase is classed as “works”?',
      },
      options: [
        { fa: 'تأمین 200 شاخه لوله جداری', en: 'Supply of 200 joints of casing' },
        { fa: 'خدمات نمودارگیری چاه AR-04', en: 'Well logging services on AR-04' },
        { fa: 'ساخت خط جریان از چاه AR-09 تا جداکننده', en: 'Building a flowline from well AR-09 to the separator' },
        { fa: 'خرید لپ‌تاپ برای دفتر مرکزی', en: 'Buying laptops for the head office' },
      ],
      answer: 2,
      explain: {
        fa: '«کار» یعنی ساخت یا نصب چیزی ماندگار در محل؛ خط جریان دقیقاً همین است. نمودارگیری خدمت است، چون پیمانکار کاری انجام می‌دهد و چیزی ماندگار نمی‌سازد؛ لوله جداری و لپ‌تاپ هم کالا هستند.',
        en: '“Works” means building or installing something permanent on site, and a flowline is exactly that. Well logging is a service, because the contractor performs work without leaving anything permanent; casing and laptops are goods.',
      },
    },
    {
      q: {
        fa: 'هزینه‌کرد سالانه یک شرکت 25,000,000 است که 3,000,000 آن غیرمستقیم است. سهم خرید مستقیم چند درصد است؟',
        en: 'A company’s annual spend is 25,000,000, of which 3,000,000 is indirect. What percentage is direct spend?',
      },
      options: [
        { fa: '12٪', en: '12%' },
        { fa: '88٪', en: '88%' },
        { fa: '78٪', en: '78%' },
        { fa: '22٪', en: '22%' },
      ],
      answer: 1,
      explain: {
        fa: 'خرید مستقیم = 25,000,000 − 3,000,000 = 22,000,000 و 22,000,000 ÷ 25,000,000 = 88٪. گزینه 12٪ سهم خرید غیرمستقیم است، نه مستقیم.',
        en: 'Direct spend = 25,000,000 − 3,000,000 = 22,000,000, and 22,000,000 ÷ 25,000,000 = 88%. The 12% option is the indirect share, not the direct one.',
      },
    },
    {
      q: {
        fa: 'کدام سند در دفتر کل ثبتی ایجاد نمی‌کند، اما تعهدی در برابر بودجه یا AFE ثبت می‌کند؟',
        en: 'Which document creates no general ledger entry but records a commitment against the budget or AFE?',
      },
      options: [
        { fa: 'رسید کالا (GRN)', en: 'Goods received note (GRN)' },
        { fa: 'فاکتور تأمین‌کننده', en: 'Supplier invoice' },
        { fa: 'سند پرداخت', en: 'Payment document' },
        { fa: 'سفارش خرید', en: 'Purchase order' },
      ],
      answer: 3,
      explain: {
        fa: 'سفارش خرید تعهدی حقوقی به تأمین‌کننده است، اما هنوز کالایی نرسیده و بدهی حسابداری ایجاد نشده؛ پس فقط به‌عنوان تعهد بودجه دیده می‌شود. GRN، فاکتور و پرداخت هر سه ثبت خودکار در دفتر کل دارند.',
        en: 'A PO is a legal commitment to the supplier, but nothing has arrived yet and no accounting liability exists, so it only shows as a budget commitment. The GRN, invoice and payment all post automatically to the ledger.',
      },
    },
    {
      q: {
        fa: '40 قطعه به قیمت هر عدد 2,500 برای انبار مرکزی رسید و پذیرفته شد. ERP چه ثبتی می‌سازد؟',
        en: '40 parts at 2,500 each are received and accepted into the Central Warehouse. What entry does the ERP create?',
      },
      options: [
        { fa: 'بدهکار موجودی 100,000 / بستانکار GR/IR 100,000', en: 'Dr Inventory 100,000 / Cr GR/IR 100,000' },
        { fa: 'بدهکار موجودی 100,000 / بستانکار حساب‌های پرداختنی 100,000', en: 'Dr Inventory 100,000 / Cr Accounts payable 100,000' },
        { fa: 'بدهکار GR/IR 100,000 / بستانکار حساب‌های پرداختنی 100,000', en: 'Dr GR/IR 100,000 / Cr Accounts payable 100,000' },
        { fa: 'بدهکار هزینه 100,000 / بستانکار بانک 100,000', en: 'Dr Expense 100,000 / Cr Cash at bank 100,000' },
      ],
      answer: 0,
      explain: {
        fa: '40 × 2,500 = 100,000. GRN موجودی را بدهکار و حساب واسط GR/IR را بستانکار می‌کند. حساب‌های پرداختنی فقط وقتی بستانکار می‌شود که فاکتور ثبت شود؛ برای همین گزینه دوم، با اینکه آشنا به نظر می‌رسد، برای مرحله GRN غلط است.',
        en: '40 × 2,500 = 100,000. The GRN debits Inventory and credits the GR/IR clearing account. Accounts payable is credited only when the invoice is posted, so the second option, familiar as it looks, is wrong at the GRN step.',
      },
    },
    {
      q: {
        fa: 'در یک سفارش، 50,000 کالا رسیده و فقط 30,000 فاکتور ثبت شده است. مانده GR/IR چیست؟',
        en: 'On one PO, 50,000 of goods have been received and only 30,000 invoiced. What is the GR/IR balance?',
      },
      options: [
        { fa: '20,000 بدهکار', en: '20,000 debit' },
        { fa: 'صفر', en: 'Zero' },
        { fa: '20,000 بستانکار', en: '20,000 credit' },
        { fa: '50,000 بستانکار', en: '50,000 credit' },
      ],
      answer: 2,
      explain: {
        fa: 'رسیدها 50,000 بستانکار و فاکتورها 30,000 بدهکار کرده‌اند: 50,000 − 30,000 = 20,000 بستانکار، یعنی کالای رسیده‌ای که هنوز فاکتورش نیامده. مانده بدهکار برعکس است: فاکتور بیش از رسید.',
        en: 'Receipts credited 50,000 and invoices debited 30,000: 50,000 − 30,000 = 20,000 credit, goods received but not yet invoiced. A debit balance would mean the reverse: more invoiced than received.',
      },
    },
    {
      q: {
        fa: 'طبق جدول اختیارات مسار پترولیوم، نیازی به ارزش 250,000 حداقل با چه روشی و با تأیید چه کسی خریده می‌شود؟',
        en: 'Under the Masar Petroleum authority matrix, how must a need worth 250,000 at least be sourced, and who approves the PR?',
      },
      options: [
        { fa: 'سه پیشنهاد کتبی؛ مدیر واحد', en: 'Three written quotations; department manager' },
        { fa: 'مناقصه محدود؛ مدیر عملیات', en: 'Limited tender; operations director' },
        { fa: 'مناقصه عمومی؛ مدیرعامل', en: 'Open tender; CEO' },
        { fa: 'یک پیشنهاد؛ سرپرست بخش', en: 'One quotation; section head' },
      ],
      answer: 1,
      explain: {
        fa: '250,000 در طبقه «بیش از 100,000 تا 1,000,000» است: مناقصه محدود و تأیید مدیر عملیات. سه پیشنهاد فقط تا 100,000 کافی است و مناقصه عمومی برای بیش از 1,000,000 لازم است.',
        en: '250,000 falls in the “over 100,000 up to 1,000,000” band: limited tender, approved by the operations director. Three quotations are enough only up to 100,000, and an open tender is required above 1,000,000.',
      },
    },
    {
      q: {
        fa: 'یک مهندس در یک هفته دو درخواست 8,000 برای یک قلم یکسان ثبت می‌کند. کارشناس خرید چه باید بکند؟',
        en: 'An engineer raises two PRs of 8,000 each for the same item in one week. What should the buyer do?',
      },
      options: [
        { fa: 'برای هر کدام یک پیشنهاد بگیرد، چون هر دو زیر 10,000 است', en: 'Get one quotation for each, since both are under 10,000' },
        { fa: 'مناقصه عمومی برگزار کند', en: 'Run an open tender' },
        { fa: 'بدون منبع‌یابی سفارش بدهد', en: 'Order without any sourcing' },
        { fa: 'آن‌ها را یک نیاز 16,000 بداند و دست‌کم سه پیشنهاد کتبی بگیرد', en: 'Treat them as one 16,000 need and get at least three written quotations' },
      ],
      answer: 3,
      explain: {
        fa: '8,000 + 8,000 = 16,000 و این مبلغ در طبقه «بیش از 10,000 تا 100,000» است. گزینه اول وسوسه‌انگیز است، اما یعنی پذیرفتن خرد کردن سفارش. مناقصه عمومی هم برای این مبلغ لازم نیست.',
        en: '8,000 + 8,000 = 16,000, which falls in the “over 10,000 up to 100,000” band. The first option is tempting but means accepting order splitting. An open tender is not required at this value.',
      },
    },
    {
      q: {
        fa: 'کارشناس خرید متوجه می‌شود برادرش سهامدار یکی از شرکت‌کنندگان مناقصه است. کار درست چیست؟',
        en: 'A buyer finds out that his brother is a shareholder in one of the bidders. What is the right action?',
      },
      options: [
        { fa: 'موضوع را کتبی اعلام کند و از آن مناقصه کنار برود', en: 'Declare it in writing and step away from that tender' },
        { fa: 'ادامه دهد، چون قول می‌دهد بی‌طرف بماند', en: 'Carry on, since he promises to stay neutral' },
        { fa: 'از برادرش بخواهد پیشنهاد ندهد و موضوع را به کسی نگوید', en: 'Ask his brother not to bid and tell no one' },
        { fa: 'به شرکت برادرش امتیاز کمتری بدهد تا بی‌طرفی‌اش ثابت شود', en: 'Score his brother’s company lower to prove neutrality' },
      ],
      answer: 0,
      explain: {
        fa: 'تعارض منافع باید اعلام شود و فرد از تصمیم کنار برود تا دیگران تصمیم بگیرند. «قول بی‌طرفی» کافی نیست، پنهان کردن تخلف است، و امتیاز کمتر دادن هم خودش تبعیض و نقض بی‌طرفی است.',
        en: 'A conflict of interest must be declared and the person must step away so that others decide. A “promise of neutrality” is not enough, hiding it is a breach, and marking the company down is itself unfair treatment.',
      },
    },
    {
      q: {
        fa: 'سفارش: 24 شیر به قیمت 3,500. رسید: 24 شیر. فاکتور: 24 شیر به قیمت 3,600. نتیجه تطبیق سه‌طرفه چیست؟',
        en: 'PO: 24 valves at 3,500. GR: 24 valves. Invoice: 24 valves at 3,600. What is the outcome of the three-way match?',
      },
      options: [
        { fa: '86,400 پرداخت می‌شود چون تأمین‌کننده همین را فاکتور کرده', en: 'Pay 86,400 because that is what the supplier invoiced' },
        { fa: 'اختلاف فقط 100 است؛ پرداخت شود', en: 'The difference is only 100; pay it' },
        { fa: 'اختلاف 2,400 است؛ فاکتور تا روشن شدن علت مسدود می‌شود', en: 'The difference is 2,400; the invoice is blocked until the cause is clear' },
        { fa: 'اختلاف 2,400 است و خودکار به هزینه منظور می‌شود', en: 'The difference is 2,400 and is expensed automatically' },
      ],
      answer: 2,
      explain: {
        fa: 'اختلاف قیمت 100 برای هر عدد است، اما روی 24 عدد: 100 × 24 = 2,400. این بیش از حد مجاز معمول است، پس فاکتور مسدود می‌شود تا خرید یا تأمین‌کننده علت را روشن کند. گزینه «فقط 100» اختلاف یک عدد را با کل اشتباه گرفته است.',
        en: 'The price gap is 100 per valve, but across 24 valves: 100 × 24 = 2,400. That exceeds a normal tolerance, so the invoice is blocked until procurement or the supplier explains it. The “only 100” option confuses the per-unit gap with the total.',
      },
    },
    {
      q: {
        fa: 'چرا در یک مشارکت با قرارداد بازیافت هزینه، هر خرید باید به موضوع هزینه درست (مثلاً AFE چاه AR-09) ثبت شود؟',
        en: 'In a joint venture with cost recovery, why must every purchase be charged to the right cost object (for example the AFE for well AR-09)?',
      },
      options: [
        { fa: 'چون بدون آن ERP اجازه ثبت سفارش نمی‌دهد و دلیل دیگری ندارد', en: 'Because the ERP will not save the PO otherwise; there is no other reason' },
        {
          fa: 'تا هزینه به شرکای درست صورت‌حساب شود، با AFE مصوب مقایسه شود و در بازیافت هزینه پذیرفته شود',
          en: 'So the cost is billed to the right partners, compared with the approved AFE and accepted for cost recovery',
        },
        { fa: 'فقط برای اینکه گزارش هزینه‌کرد تدارکات زیباتر شود', en: 'Only to make the procurement spend report look tidier' },
        { fa: 'چون مالیات بر ارزش افزوده به موضوع هزینه بستگی دارد', en: 'Because VAT depends on the cost object' },
      ],
      answer: 1,
      explain: {
        fa: 'موضوع هزینه تعیین می‌کند هزینه به کدام چاه یا پروژه و در نتیجه به کدام شرکا و کدام AFE برسد. هزینه‌ای که به موضوع اشتباه رفته یا مستند نیست ممکن است در حسابرسی شرکا یا بازیافت هزینه پذیرفته نشود. کنترل‌های ERP مهم‌اند، اما دلیل اصلی همین پیامد مالی است.',
        en: 'The cost object decides which well or project, and therefore which partners and which AFE, carry the cost. A cost on the wrong object or without documents may be rejected in a partner audit or in cost recovery. ERP controls matter, but this financial consequence is the real reason.',
      },
    },
  ],
}
