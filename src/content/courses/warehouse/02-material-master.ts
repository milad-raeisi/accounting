import type { Lesson } from '../../types'

/* Masar Petroleum: accounts the ERP posts to in this lesson. */
const ac = {
  spares: { fa: 'موجودی قطعات یدکی', en: 'Inventory: spare parts' },
  octg: { fa: 'موجودی لوله‌های OCTG', en: 'Inventory: OCTG' },
  chemicals: { fa: 'موجودی مواد شیمیایی', en: 'Inventory: chemicals' },
  consumables: { fa: 'موجودی اقلام مصرفی', en: 'Inventory: consumables' },
  grir: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing account' },
  consumptionExp: {
    fa: 'هزینه مصرف مواد و قطعات (عملیات تولید)',
    en: 'Materials consumption expense (production operations)',
  },
  wellAR12: {
    fa: 'دارایی در جریان ساخت: چاه AR-12 (AFE-012)',
    en: 'Assets under construction: well AR-12 (AFE-012)',
  },
}

export const lesson: Lesson = {
  slug: 'material-master',
  number: 2,
  level: 'beginner',
  minutes: 28,
  icon: 'FolderTree',
  tone: 'asset',
  title: { fa: 'داده پایه کالا (Material Master)', en: 'Material Master Data' },
  summary: {
    fa: 'یاد بگیرید هر کالا چگونه یک بار و درست در ERP تعریف می‌شود: کدگذاری و فهرست‌نویسی به روش اسم و صفت، طبقه‌بندی، واحد سنجش، شماره قطعه سازنده، درجه بحرانی بودن، عمر انبارداری، بچ و سریال و کلاس ارزش‌گذاری؛ و ببینید کالای تکراری و داده پایه بد چگونه کل ERP را از کار می‌اندازد.',
    en: 'Learn how each material is defined once, and correctly, in the ERP: coding and noun-modifier cataloguing, classification, units of measure, manufacturer part numbers, criticality, shelf life, batch and serial management and the valuation class; and see how duplicates and bad master data break the whole ERP.',
  },
  objectives: [
    {
      fa: 'توضیح دهید داده پایه کالا چیست و هر ماژول ERP از آن چه می‌خواهد',
      en: 'Explain what the material master is and what each ERP module needs from it',
    },
    {
      fa: 'برای یک کالا شرح استاندارد به روش اسم و صفت بنویسید',
      en: 'Write a standard noun-modifier description for an item',
    },
    {
      fa: 'واحد سنجش پایه، واحد سفارش و ضریب تبدیل را درست تعریف و محاسبه کنید',
      en: 'Set up and calculate base units, order units and conversion factors correctly',
    },
    {
      fa: 'نقش درجه بحرانی بودن، عمر انبارداری، بچ، سریال و کلاس ارزش‌گذاری را در کنترل و حسابداری کالا شرح دهید',
      en: 'Describe how criticality, shelf life, batch, serial number and valuation class drive control and accounting',
    },
    {
      fa: 'کالای تکراری را شناسایی و پاک‌سازی کنید و اثر مالی آن را ثبت کنید',
      en: 'Find and clean up duplicate materials and record the financial effect',
    },
  ],
  sections: [
    {
      id: 'why-master-data',
      title: { fa: 'چرا داده پایه کالا مهم است؟', en: 'Why Material Master Data Matters' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'حسابرسی داخلی مسار پترولیوم در ERP به سه کد برای یک کالا رسید: یک شیر توپی 2 اینچ کلاس 600. کد `10004521` با شرح «VALVE BALL 2IN 600#»، کد `10007788` با شرح فارسی آزاد «شیر توپی 2 اینچ» و کد `10011240` با شرح «BALL VALVE 2" CL600 RF». برنامه‌ریز انبار میدان زیر کد خودش موجودی صفر دید و برای 4 شیر به ارزش 4 × 450 = 1,800 درخواست خرید ثبت کرد؛ در حالی که 7 شیر به ارزش 3,115 زیر دو کد دیگر در انبار مرکزی خاک می‌خورد.',
            en: 'Masar Petroleum’s internal audit found three codes in the ERP for one item, a 2-inch class 600 ball valve: `10004521` described as “VALVE BALL 2IN 600#”, `10007788` with a Persian free-text description meaning “ball valve 2 inch”, and `10011240` described as “BALL VALVE 2" CL600 RF”. The Field Warehouse planner saw zero stock under his code and raised a purchase requisition for 4 valves worth 4 × 450 = 1,800, while 7 valves worth 3,115 sat gathering dust in the Central Warehouse under the other two codes.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**داده پایه کالا (Material master)** رکورد واحد و مرکزی است که یک کالا را توصیف می‌کند: چیست، با چه واحدی سنجیده می‌شود، و چگونه خریده، نگهداری، برنامه‌ریزی و ارزش‌گذاری می‌شود. این رکورد یک بار ساخته می‌شود و در هزاران تراکنش (درخواست خرید، سفارش، رسید، حواله، شمارش) به کار می‌رود. پس هر خطا در آن، هزاران بار تکرار می‌شود.',
            en: 'The **material master** is the single, central record that describes an item: what it is, how it is measured, and how it is bought, stored, planned and valued. It is created once and used in thousands of transactions (requisitions, orders, receipts, issues, counts). So any error in it is repeated thousands of times.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'هر ماژول از داده پایه کالا چه می‌خواهد', en: 'What each module needs from the material master' },
          head: [
            { fa: 'ماژول', en: 'Module' },
            { fa: 'فیلدهای مورد نیاز', en: 'Fields it needs' },
            { fa: 'اگر غلط باشد', en: 'If they are wrong' },
          ],
          rows: [
            [
              { fa: 'تدارکات', en: 'Procurement' },
              { fa: 'شرح خرید، واحد سفارش، سازندگان مجاز، زمان تحویل', en: 'Purchase text, order unit, approved manufacturers, lead time' },
              { fa: 'کالای اشتباه یا مقدار اشتباه خریده می‌شود', en: 'The wrong item or the wrong quantity is bought' },
            ],
            [
              { fa: 'انبار', en: 'Warehouse' },
              {
                fa: 'واحد سنجش پایه، محل نگهداری و جایگاه، بچ و سریال، عمر انبارداری، اطلاعات مواد خطرناک',
                en: 'Base unit, storage location and bin, batch and serial, shelf life, hazardous data',
              },
              {
                fa: 'کالا پیدا نمی‌شود، بچ‌ها قاطی می‌شوند، کالای منقضی تحویل می‌شود',
                en: 'Items can’t be found, batches get mixed, expired stock is issued',
              },
            ],
            [
              { fa: 'نگهداری و تعمیرات', en: 'Maintenance' },
              {
                fa: 'ارتباط با فهرست قطعات تجهیز، درجه بحرانی بودن، شماره قطعه سازنده',
                en: 'Link to the equipment parts list, criticality, manufacturer part number',
              },
              {
                fa: 'قطعه اشتباه روی دستور کار می‌آید و تعمیر عقب می‌افتد',
                en: 'The wrong part lands on the work order and the repair is delayed',
              },
            ],
            [
              { fa: 'برنامه‌ریزی موجودی', en: 'Inventory planning' },
              { fa: 'نقطه سفارش، موجودی اطمینان، اندازه سفارش', en: 'Reorder point, safety stock, lot size' },
              { fa: 'کمبود یا انباشت موجودی', en: 'Stock-outs or overstock' },
            ],
            [
              { fa: 'مالی', en: 'Finance' },
              { fa: 'کلاس ارزش‌گذاری، روش کنترل قیمت، قیمت', en: 'Valuation class, price control, price' },
              {
                fa: 'ثبت در حساب اشتباه دفتر کل و ارزش غلط موجودی',
                en: 'Postings to the wrong GL account and a wrong inventory value',
              },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'هزینه یک کد تکراری', en: 'What one duplicate cost' },
          text: {
            fa: 'اگر درخواست خرید تأیید می‌شد، 1,800 بی‌دلیل خرج می‌شد و 7 شیر موجود (3,115) با نرخ فرضی 20٪ سالی 623 هزینه نگهداری داشتند، بی‌آنکه کسی از وجودشان خبر داشته باشد. بدتر از آن، یک کار تعمیراتی 6 هفته منتظر شیرهای «جدید» می‌ماند، در حالی که قطعه در انبار مرکزی بود.',
            en: 'Had the requisition gone through, 1,800 would have been spent for nothing, and the 7 valves already in stock (3,115) would keep costing 623 a year to hold at the assumed 20% rate, with nobody aware of them. Worse, a maintenance job would wait 6 weeks for “new” valves while the part sat in the Central Warehouse.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'قاعده طلایی', en: 'The golden rule' },
          text: {
            fa: '**یک کالا، یک کد، یک شرح.** هر کالای فیزیکی باید دقیقاً یک داده پایه داشته باشد و هر داده پایه دقیقاً یک کالای فیزیکی را توصیف کند.',
            en: '**One item, one code, one description.** Each physical item should have exactly one material master, and each material master should describe exactly one physical item.',
          },
        },
      ],
    },
    {
      id: 'coding-cataloguing',
      title: { fa: 'کدگذاری و فهرست‌نویسی به روش اسم و صفت', en: 'Coding and Cataloguing: the Noun-Modifier Method' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**کد کالا (Material number)** شناسه یکتای هر کالا در ERP است. برای ساختن کد دو مکتب وجود دارد: **کد معنادار** که بخش‌هایی از آن معنی دارد، و **کد ترتیبی (بی‌معنا)** که فقط شماره بعدی در یک ردیف است.',
            en: 'The **material number** is each item’s unique identifier in the ERP. There are two schools of thought: an **intelligent (meaningful) code**, where parts of the code carry meaning, and a **sequential (non-intelligent) code**, which is just the next number in line.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'کد معنادار، مثلاً `VLV-BAL-02-600`', en: 'Intelligent code, e.g. `VLV-BAL-02-600`' },
            items: [
              { fa: 'انسان می‌تواند آن را بخواند', en: 'People can read it' },
              { fa: 'رقم‌های هر بخش ممکن است تمام شود', en: 'Each segment can run out of digits' },
              {
                fa: 'اگر کالا در دو گروه جا شود، دو نفر دو کد متفاوت می‌سازند',
                en: 'If an item fits two groups, two people create two different codes',
              },
              {
                fa: 'با تغییر طبقه‌بندی، کد بی‌معنا یا گمراه‌کننده می‌شود',
                en: 'When the classification changes, the code becomes meaningless or misleading',
              },
            ],
          },
          right: {
            title: { fa: 'کد ترتیبی، مثلاً `10004521`', en: 'Sequential code, e.g. `10004521`' },
            items: [
              { fa: 'هرگز تمام نمی‌شود و نیازی به تغییر ندارد', en: 'Never runs out and never needs to change' },
              { fa: 'هر کالا یک شماره، و تمام', en: 'One item, one number, full stop' },
              { fa: 'به‌تنهایی معنایی ندارد', en: 'Means nothing on its own' },
              { fa: 'معنا در شرح، طبقه‌بندی و ویژگی‌ها نگهداری می‌شود', en: 'The meaning lives in the description, classification and attributes' },
            ],
          },
        },
        {
          type: 'p',
          text: {
            fa: 'بیشتر پیاده‌سازی‌های امروزی ERP کد ترتیبی را انتخاب می‌کنند و معنا را به **فهرست‌نویسی (Cataloguing)** می‌سپارند: نوشتن شرح کامل و استاندارد هر کالا از روی یک فرهنگ کنترل‌شده از اسم‌ها، صفت‌ها و ویژگی‌ها. استانداردهایی مانند ISO 8000 (کیفیت داده پایه) و نظام‌های طبقه‌بندی مانند UNSPSC در این کار کمک می‌کنند و بسیاری از شرکت‌های نفت و گاز فرهنگ اختصاصی خود را هم دارند.',
            en: 'Most modern ERP implementations choose a sequential number and leave the meaning to **cataloguing**: writing a complete, standard description of each item from a controlled dictionary of nouns, modifiers and attributes. Standards such as ISO 8000 (master data quality) and classification schemes such as UNSPSC help, and many oil and gas companies also keep their own dictionary.',
          },
        },
        { type: 'h', text: { fa: 'روش اسم و صفت', en: 'The noun-modifier method' } },
        {
          type: 'p',
          text: {
            fa: 'در روش **اسم و صفت (Noun-Modifier)**، شرح با **اسم** شروع می‌شود که می‌گوید کالا چیست (VALVE، BEARING، GASKET)، سپس **صفت** نوع آن را دقیق می‌کند (برای شیر: BALL، GATE یا CHECK) و بعد **ویژگی‌ها** با ترتیبی ثابت از روی الگوی همان اسم و صفت می‌آیند: اندازه، کلاس فشار، جنس، نوع اتصال و استاندارد. چون ترتیب ثابت است، دو کالای یکسان همیشه شرح یکسان می‌گیرند و تکراری‌ها راحت پیدا می‌شوند.',
            en: 'In the **noun-modifier** method the description starts with a **noun** saying what the item is (VALVE, BEARING, GASKET); a **modifier** narrows the type (BALL, GATE or CHECK for a valve); then the **attributes** follow in a fixed order taken from the template for that noun and modifier: size, pressure class, material, end connection and standard. Because the order is fixed, two identical items always get identical descriptions, and duplicates are easy to spot.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'الگوی ویژگی‌ها برای VALVE, BALL', en: 'Attribute template for VALVE, BALL' },
          head: [
            { fa: 'ترتیب', en: 'Order' },
            { fa: 'ویژگی', en: 'Attribute' },
            { fa: 'مقدار نمونه', en: 'Example value' },
          ],
          rows: [
            [1, { fa: 'اندازه', en: 'Size' }, { fa: '`2IN`', en: '`2IN`' }],
            [2, { fa: 'کلاس فشار', en: 'Pressure class' }, { fa: '`CL600`', en: '`CL600`' }],
            [3, { fa: 'جنس بدنه', en: 'Body material' }, { fa: '`A105` (فولاد کربنی آهنگری)', en: '`A105` (forged carbon steel)' }],
            [4, { fa: 'نوع اتصال', en: 'End connection' }, { fa: '`RF` (فلنج با سطح برجسته)', en: '`RF` (raised-face flange)' }],
            [5, { fa: 'نوع عملگر', en: 'Operator' }, { fa: '`LEVER` (اهرمی)', en: '`LEVER`' }],
            [6, { fa: 'استاندارد', en: 'Standard' }, { fa: '`API 6D`', en: '`API 6D`' }],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'از این الگو، سیستم شرح کوتاه `VALVE,BALL:2IN,CL600,A105,RF,LEVER` را خودکار می‌سازد. بسیاری از ERPها برای شرح کوتاه حدود 40 نویسه جا دارند؛ ویژگی‌هایی که جا نمی‌شوند، مانند استاندارد API 6D، در **شرح بلند (متن خرید)** می‌آیند.',
            en: 'From this template the system builds the short text `VALVE,BALL:2IN,CL600,A105,RF,LEVER` automatically. Many ERPs allow about 40 characters for the short text; attributes that do not fit, such as the API 6D standard, go into the **long text (purchase text)**.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'شرح آزاد در برابر شرح استاندارد', en: 'Free text against a standard description' },
          head: [
            { fa: 'شرح آزاد (بد)', en: 'Free text (bad)' },
            { fa: 'شرح استاندارد (خوب)', en: 'Standard description (good)' },
          ],
          rows: [
            [{ fa: 'شیر 2 اینچ', en: 'valve 2"' }, { fa: '`VALVE,BALL:2IN,CL600,A105,RF,LEVER`', en: '`VALVE,BALL:2IN,CL600,A105,RF,LEVER`' }],
            [{ fa: 'یاتاقان پمپ P-105', en: 'bearing for pump P-105' }, { fa: '`BEARING,BALL:6312-2Z,60X130X31MM`', en: '`BEARING,BALL:6312-2Z,60X130X31MM`' }],
            [{ fa: 'واشر 4 اینچ', en: 'gasket 4 inch' }, { fa: '`GASKET,SPIRAL WOUND:4IN,CL600,SS316`', en: '`GASKET,SPIRAL WOUND:4IN,CL600,SS316`' }],
            [{ fa: 'لوله جداری 9 و 5/8', en: 'casing 9 5/8' }, { fa: '`CASING:9-5/8IN,47LB/FT,L80,BTC,R3`', en: '`CASING:9-5/8IN,47LB/FT,L80,BTC,R3`' }],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در شرکت‌های ایرانی بهتر است شرح فهرست‌نویسی‌شده به انگلیسی بماند، چون سازندگان، استانداردها و تأمین‌کنندگان خارجی با آن کار می‌کنند، و یک **شرح فارسی کوتاه** هم برای انباردار و درخواست‌کننده کنار آن ثبت شود. اما هیچ‌کدام نباید متن آزاد کاربر باشد؛ هر دو از روی ویژگی‌ها ساخته یا توسط متولی داده تأیید می‌شوند.',
            en: 'In Iranian companies it works well to keep the catalogue description in English, since manufacturers, standards and foreign vendors use it, and to add a **short Persian text** for storekeepers and requesters. Neither should be a user’s free text: both are built from the attributes or approved by the data steward.',
          },
        },
      ],
    },
    {
      id: 'classification-uom-mpn',
      title: { fa: 'طبقه‌بندی، واحد سنجش و شماره قطعه سازنده', en: 'Classification, Units of Measure and Manufacturer Part Numbers' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'هر کالا سه لایه طبقه‌بندی دارد. **نوع کالا (Material type)** تعیین می‌کند کالا انباری است یا نه، ارزش‌گذاری می‌شود یا نه و چه فیلدهایی لازم دارد. **گروه کالا (Material group)** کالاهای مشابه را برای خرید و گزارش کنار هم می‌گذارد (شیرها، یاتاقان‌ها، مواد گل حفاری). **کلاس و ویژگی‌ها** همان الگوی اسم و صفت را نگه می‌دارند.',
            en: 'Every item has three layers of classification. The **material type** decides whether the item is stocked, whether it is valued and which fields it needs. The **material group** puts similar items together for purchasing and reporting (valves, bearings, mud chemicals). The **class and characteristics** hold the noun-modifier template.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'انواع کالا در مسار پترولیوم', en: 'Material types at Masar Petroleum' },
          head: [
            { fa: 'نوع کالا', en: 'Material type' },
            { fa: 'انباری و ارزش‌گذاری‌شده؟', en: 'Stocked and valued?' },
            { fa: 'نمونه', en: 'Example' },
            { fa: 'کلاس ارزش‌گذاری', en: 'Valuation class' },
          ],
          rows: [
            [
              { fa: 'قطعه یدکی (SPAR)', en: 'Spare part (SPAR)' },
              { fa: 'بله', en: 'Yes' },
              { fa: 'آب‌بند، یاتاقان، شیر', en: 'Seal, bearing, valve' },
              { fa: '3010', en: '3010' },
            ],
            [
              { fa: 'لوله OCTG (OCTG)', en: 'OCTG (OCTG)' },
              { fa: 'بله؛ مگر اینکه برای یک چاه مشخص خرید مستقیم شود', en: 'Yes, unless bought directly for a specific well' },
              { fa: 'لوله جداری و مغزی', en: 'Casing, tubing' },
              { fa: '3020', en: '3020' },
            ],
            [
              { fa: 'ماده شیمیایی (CHEM)', en: 'Chemical (CHEM)' },
              { fa: 'بله', en: 'Yes' },
              { fa: 'باریت، بازدارنده خوردگی', en: 'Barite, corrosion inhibitor' },
              { fa: '3030', en: '3030' },
            ],
            [
              { fa: 'قلم مصرفی (CONS)', en: 'Consumable (CONS)' },
              { fa: 'بله', en: 'Yes' },
              { fa: 'فیلتر، واشر، دستکش', en: 'Filter, gasket, gloves' },
              { fa: '3040', en: '3040' },
            ],
            [
              { fa: 'غیرانباری (NSTK)', en: 'Non-stock (NSTK)' },
              { fa: 'خیر؛ هنگام رسید به محل هزینه می‌رود', en: 'No; charged to a cost object on receipt' },
              { fa: 'قطعه سفارشی برای یک تعمیر خاص', en: 'A one-off part for a specific repair' },
              { fa: 'ندارد', en: 'None' },
            ],
          ],
        },
        {
          type: 'p',
          text: {
            fa: '**واحد سنجش پایه (Base unit)** واحدی است که موجودی با آن نگهداری و ارزش‌گذاری می‌شود و همه مقدارها به آن تبدیل می‌شوند. **واحد سفارش** واحدی است که با آن خرید می‌کنیم و **واحد صدور** واحدی است که با آن تحویل می‌دهیم. ضریب‌های تبدیل در داده پایه تعریف می‌شوند. برای باریت (ماده وزن‌افزای گل حفاری)، مسار پترولیوم کیلوگرم را واحد پایه گذاشته است:',
            en: 'The **base unit of measure** is the unit in which stock is held and valued; every quantity is converted to it. The **order unit** is the unit we buy in, and the **issue unit** is the unit we hand out in. The conversion factors are defined in the master data. For barite (the weighting agent in drilling mud), Masar Petroleum uses the kilogram as the base unit:',
          },
        },
        {
          type: 'table',
          caption: { fa: 'واحدهای سنجش باریت', en: 'Units of measure for barite' },
          head: [
            { fa: 'واحد', en: 'Unit' },
            { fa: 'کاربرد', en: 'Used for' },
            { fa: 'برابر با (کیلوگرم)', en: 'Equals (kg)' },
          ],
          numericCols: [2],
          rows: [
            [{ fa: 'کیلوگرم (KG)', en: 'Kilogram (KG)' }, { fa: 'واحد پایه: موجودی و ارزش', en: 'Base unit: stock and value' }, 1],
            [{ fa: 'کیسه (SACK)', en: 'Sack (SACK)' }, { fa: 'واحد صدور به سر دکل', en: 'Issue unit to the rig' }, 25],
            [{ fa: 'جامبوبگ (BIG BAG)', en: 'Big bag (BIG BAG)' }, { fa: 'بسته‌بندی حمل', en: 'Shipping pack' }, 1500],
            [{ fa: 'تن (TON)', en: 'Tonne (TON)' }, { fa: 'واحد سفارش خرید', en: 'Purchase order unit' }, 1000],
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'سفارش 12 تن = 12,000 کیلوگرم = 480 کیسه = 8 جامبوبگ',
            en: 'An order of 12 tonnes = 12,000 kg = 480 sacks = 8 big bags',
          },
          note: {
            fa: 'ERP هر مقدار را با ضریب داده پایه به کیلوگرم تبدیل و فقط کیلوگرم را در موجودی نگه می‌دارد.',
            en: 'The ERP converts every quantity to kilograms with the master data factor and keeps only kilograms in stock.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'یک ضریب اشتباه', en: 'One wrong factor' },
          text: {
            fa: 'اگر کسی ضریب کیسه را به‌جای 25، عدد 50 کیلوگرم وارد کند، صدور 100 کیسه در سیستم 5,000 کیلوگرم کم می‌کند، در حالی که فقط 2,500 کیلوگرم از انبار خارج شده است. موجودی سیستم زودتر از موجودی واقعی تمام می‌شود، هزینه چاه دو برابر ثبت می‌شود و شمارش پایان دوره اختلافی بزرگ نشان می‌دهد.',
            en: 'If someone enters 50 kg instead of 25 kg as the sack factor, issuing 100 sacks takes 5,000 kg off the system while only 2,500 kg has actually left the store. System stock runs out before the real stock does, the well is charged double, and the period-end count shows a big difference.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'لوله‌های OCTG یک نکته ویژه دارند: لوله جداری معمولاً بر حسب متر (یا فوت) خریده می‌شود، اما طول هر شاخه (Joint) کمی متفاوت است. پس مقدار رسید را باید از **فهرست اندازه‌گیری طول لوله‌ها (Pipe tally)** گرفت، نه از ضرب تعداد شاخه در یک طول فرضی.',
            en: 'OCTG has a special twist: casing is usually bought by the metre (or foot), but every joint is a slightly different length. So the received quantity must come from the measured **pipe tally**, not from multiplying the number of joints by an assumed length.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**شماره قطعه سازنده (MPN)** همراه با نام سازنده باید در **فیلدهای جداگانه** ثبت شود، نه لابه‌لای شرح. یک کالا ممکن است چند MPN مجاز از سازندگان مختلف داشته باشد که مهندسی جایگزین‌پذیری آنها را تأیید کرده است. ارتباط کالا با **فهرست قطعات تجهیز (BOM)** هم به برنامه‌ریز تعمیرات اجازه می‌دهد قطعه درست کمپرسور K-201 را مستقیم از روی رکورد تجهیز انتخاب کند.',
            en: 'The **manufacturer part number (MPN)** and the manufacturer’s name belong in **separate fields**, not buried in the description. One material may carry several approved MPNs from different manufacturers whose interchangeability engineering has confirmed. Linking the material to the **equipment bill of materials (BOM)** lets the maintenance planner pick the right part for compressor K-201 straight from the equipment record.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'پیش از ساختن، جست‌وجو کنید', en: 'Search before you create' },
          text: {
            fa: 'پیش از درخواست کد جدید، MPN و ویژگی‌های اصلی را در سیستم جست‌وجو کنید. بیشتر کالاهای تکراری یک MPN مشترک دارند و با یک جست‌وجوی ساده پیدا می‌شوند.',
            en: 'Before asking for a new code, search the system for the MPN and the key attributes. Most duplicates share an MPN and turn up with a simple search.',
          },
        },
      ],
    },
    {
      id: 'control-fields',
      title: {
        fa: 'فیلدهای کنترلی: بحرانی بودن، عمر انبارداری، بچ و سریال، کلاس ارزش‌گذاری',
        en: 'Control Fields: Criticality, Shelf Life, Batch and Serial, Valuation Class',
      },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'چند فیلد در داده پایه، رفتار کالا را در کل چرخه کنترل می‌کنند. اگر درست پر شوند، سیستم خودش جلوی خطا را می‌گیرد؛ اگر خالی بمانند، کنترل به حافظه افراد سپرده می‌شود.',
            en: 'A handful of master data fields control how an item behaves across the whole cycle. Filled in correctly, they let the system prevent mistakes; left blank, control is left to people’s memory.',
          },
        },
        { type: 'h', text: { fa: 'درجه بحرانی بودن', en: 'Criticality' } },
        {
          type: 'p',
          text: {
            fa: '**درجه بحرانی بودن (Criticality)** نشان می‌دهد اگر کالا هنگام نیاز موجود نباشد، پیامد آن برای ایمنی، محیط زیست و تولید چقدر جدی است و زمان تأمین آن چقدر است. مسار پترولیوم سه سطح دارد:',
            en: '**Criticality** ranks how serious it is, for safety, the environment and production, if the item is not available when needed, taking its lead time into account. Masar Petroleum uses three levels:',
          },
        },
        {
          type: 'table',
          head: [
            { fa: 'سطح', en: 'Level' },
            { fa: 'معیار', en: 'Rule' },
            { fa: 'سیاست نگهداری', en: 'Stocking policy' },
            { fa: 'نمونه', en: 'Example' },
          ],
          rows: [
            [
              { fa: 'A (بالا)', en: 'A (high)' },
              {
                fa: 'نبودنش تولید را متوقف می‌کند یا خطر ایمنی و زیست‌محیطی دارد، و زمان تحویل طولانی است',
                en: 'Its absence stops production or creates a safety or environmental risk, and the lead time is long',
              },
              {
                fa: 'دست‌کم یک عدد در انبار، ترجیحاً در میدان؛ برنامه حفاظت',
                en: 'At least one in stock, preferably in the field; preservation programme',
              },
              { fa: 'بسته آب‌بند K-201، عملگر شیر قطع اضطراری', en: 'K-201 seal kit, emergency shutdown valve actuator' },
            ],
            [
              { fa: 'B (متوسط)', en: 'B (medium)' },
              { fa: 'نبودنش تولید را کم می‌کند، یا تجهیز پشتیبان وجود دارد', en: 'Its absence reduces production, or a standby unit exists' },
              { fa: 'نگهداری با نقطه سفارش', en: 'Stocked with a reorder point' },
              { fa: 'یاتاقان پمپ‌هایی که پمپ رزرو دارند', en: 'Bearings for pumps that have a standby pump' },
            ],
            [
              { fa: 'C (پایین)', en: 'C (low)' },
              { fa: 'پیامد مهمی ندارد و در بازار داخلی به‌راحتی پیدا می‌شود', en: 'No significant consequence; easy to buy locally' },
              { fa: 'حداقل موجودی یا خرید هنگام نیاز', en: 'Minimal stock, or buy when needed' },
              { fa: 'ابزار دستی عمومی، لوازم اداری', en: 'General hand tools, office supplies' },
            ],
          ],
        },
        { type: 'h', text: { fa: 'عمر انبارداری', en: 'Shelf life' } },
        {
          type: 'p',
          text: {
            fa: 'بعضی کالاها با گذشت زمان خراب می‌شوند، حتی اگر استفاده نشوند: مواد شیمیایی، آب‌بندها و اورینگ‌های لاستیکی، رنگ‌ها، چسب‌ها و باتری‌ها. در داده پایه **کل عمر انبارداری** و **حداقل عمر باقی‌مانده هنگام رسید** ثبت می‌شود و سیستم برای هر بچ تاریخ انقضا را نگه می‌دارد تا کالا به روش **اول‌منقضی‌اول‌خروج (FEFO)** تحویل شود.',
            en: 'Some items deteriorate over time even when unused: chemicals, elastomer seals and O-rings, paints, adhesives and batteries. The master data holds the **total shelf life** and the **minimum remaining shelf life at receipt**, and the system keeps an expiry date for every batch so stock is issued **first-expired-first-out (FEFO)**.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'عمر باقی‌مانده هنگام رسید = کل عمر انبارداری − (ماه رسید − ماه ساخت)',
            en: 'Remaining shelf life at receipt = total shelf life − (month received − month made)',
          },
          note: {
            fa: 'مثال: بازدارنده خوردگی با عمر 24 ماه که در ماه 1 ساخته و در ماه 5 رسیده است: 24 − 4 = 20 ماه. حداقل لازم در داده پایه 18 ماه است، پس پذیرفته می‌شود.',
            en: 'Example: corrosion inhibitor with a 24-month shelf life, made in month 1 and received in month 5: 24 − 4 = 20 months. The master data minimum is 18 months, so it is accepted.',
          },
        },
        { type: 'h', text: { fa: 'بچ و شماره سریال', en: 'Batch and serial number' } },
        {
          type: 'p',
          text: {
            fa: '**بچ (سری ساخت)** مقداری از کالاست که با هم و با ویژگی‌های یکسان تولید شده است؛ مثلاً یک سری تولید ماده شیمیایی یا یک **ذوب (Heat)** فولاد برای لوله. مدیریت بچ باعث می‌شود گواهی آنالیز یا گواهی آزمون کارخانه و تاریخ انقضا همراه هر واحد بماند. **شماره سریال** برای هر واحد منفرد است (پمپ، الکتروموتور، ترانسمیتر، روتور) و سابقه نصب، تعمیر و ضمانت همان واحد را نگه می‌دارد.',
            en: 'A **batch** is a quantity produced together with identical properties, for example one production lot of a chemical or one steel **heat** for pipe. Batch management keeps the certificate of analysis or mill test certificate, and the expiry date, attached to every unit. A **serial number** identifies one individual unit (a pump, a motor, a transmitter, a rotor) and holds that unit’s history of installation, repair and warranty.',
          },
        },
        { type: 'h', text: { fa: 'کلاس ارزش‌گذاری', en: 'Valuation class' } },
        {
          type: 'p',
          text: {
            fa: '**کلاس ارزش‌گذاری** پل میان کالا و دفتر کل است: ERP از روی آن تعیین می‌کند هر رسید، حواله یا اختلاف شمارش به کدام حساب موجودی برود. کنار آن **روش کنترل قیمت** هم ثبت می‌شود: **میانگین موزون متحرک** که با هر رسید به‌روز می‌شود، یا **بهای استاندارد** که ثابت می‌ماند و تفاوت‌ها را به حساب اختلاف قیمت می‌برد. مسار پترولیوم برای همه کالاها از میانگین موزون متحرک استفاده می‌کند.',
            en: 'The **valuation class** is the bridge between the item and the general ledger: from it the ERP decides which inventory account each receipt, issue or count difference goes to. Next to it sits the **price control**: a **moving average price**, updated with every receipt, or a **standard price**, which stays fixed and sends differences to a price variance account. Masar Petroleum uses moving average price for all materials.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'تعیین حساب از روی کلاس ارزش‌گذاری', en: 'Account determination from the valuation class' },
          head: [
            { fa: 'کلاس ارزش‌گذاری', en: 'Valuation class' },
            { fa: 'حساب دفتر کل', en: 'GL account' },
          ],
          rows: [
            [{ fa: '3010', en: '3010' }, { fa: '1310 موجودی قطعات یدکی', en: '1310 Inventory: spare parts' }],
            [{ fa: '3020', en: '3020' }, { fa: '1320 موجودی لوله‌های OCTG', en: '1320 Inventory: OCTG' }],
            [{ fa: '3030', en: '3030' }, { fa: '1330 موجودی مواد شیمیایی', en: '1330 Inventory: chemicals' }],
            [{ fa: '3040', en: '3040' }, { fa: '1340 موجودی اقلام مصرفی', en: '1340 Inventory: consumables' }],
          ],
        },
        {
          type: 'journal',
          title: { fa: 'یک رسید، دو نتیجه: داده پایه درست و غلط', en: 'One receipt, two outcomes: right and wrong master data' },
          entries: [
            {
              date: { fa: 'داده پایه درست (کلاس 3020)', en: 'Correct master data (class 3020)' },
              lines: [
                { account: ac.octg, debit: 24000 },
                { account: ac.grir, credit: 24000 },
              ],
              memo: {
                fa: 'رسید 300 متر لوله مغزی `3-1/2"` به قیمت هر متر 80 در انبار مرکزی.',
                en: 'Receipt of 300 m of `3-1/2"` tubing at 80 per metre into the Central Warehouse.',
              },
            },
            {
              date: { fa: 'داده پایه غلط (کالا به‌اشتباه غیرانباری تعریف شده)', en: 'Wrong master data (item set up as non-stock by mistake)' },
              lines: [
                { account: ac.consumptionExp, debit: 24000 },
                { account: ac.grir, credit: 24000 },
              ],
              memo: {
                fa: 'همان رسید مستقیماً هزینه شده است: موجودی 24,000 کمتر و هزینه 24,000 بیشتر از واقع است و سیستم هیچ لوله‌ای برای حواله نمی‌بیند.',
                en: 'The same receipt is expensed straight away: inventory is understated and expense overstated by 24,000, and the system shows no tubing to issue.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'data-quality',
      title: { fa: 'کیفیت داده و کالاهای تکراری', en: 'Data Quality and Duplicates' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**کالای تکراری** یعنی یک کالای فیزیکی که بیش از یک کد دارد. تکراری‌ها بی‌سروصدا به وجود می‌آیند و آرام‌آرام هزینه می‌سازند: موجودی پنهان، خرید اضافه، کمبود ظاهری و گزارش‌های غلط. علت‌های رایج آنها این‌هاست:',
            en: 'A **duplicate** is one physical item with more than one code. Duplicates appear quietly and cost money slowly: hidden stock, extra purchases, apparent shortages and wrong reports. The usual causes are:',
          },
        },
        {
          type: 'list',
          items: [
            { fa: 'شرح آزاد که هر کس به سلیقه خود می‌نویسد', en: 'Free-text descriptions that everyone writes their own way' },
            { fa: 'نبودن فیلد جداگانه برای MPN و سازنده', en: 'No separate fields for MPN and manufacturer' },
            { fa: 'اجازه ساخت کد به افراد زیاد در سایت‌های مختلف', en: 'Too many people at different sites allowed to create codes' },
            { fa: 'انتقال داده از سیستم قدیمی بدون پاک‌سازی', en: 'Data migrated from an old system without cleansing' },
            { fa: 'مخلوط شدن شرح‌های فارسی و انگلیسی', en: 'A mix of Persian and English descriptions' },
            { fa: 'فشار «فوری است، الان بساز، بعداً درستش می‌کنیم»', en: 'The “it’s urgent, create it now, fix it later” pressure' },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'سه کد برای یک شیر توپی (پیش از پاک‌سازی)', en: 'Three codes for one ball valve (before clean-up)' },
          head: [
            { fa: 'کد', en: 'Code' },
            { fa: 'شرح', en: 'Description' },
            { fa: 'سایت', en: 'Site' },
            { fa: 'مقدار', en: 'Qty' },
            { fa: 'میانگین قیمت', en: 'Average price' },
            { fa: 'ارزش', en: 'Value' },
            { fa: 'کلاس ارزش‌گذاری', en: 'Valuation class' },
          ],
          numericCols: [3, 4, 5],
          rows: [
            [
              { fa: '`10004521`', en: '`10004521`' },
              { fa: 'VALVE BALL 2IN 600#', en: 'VALVE BALL 2IN 600#' },
              { fa: 'MP10', en: 'MP10' },
              4,
              430,
              1720,
              { fa: '3010', en: '3010' },
            ],
            [
              { fa: '`10007788`', en: '`10007788`' },
              { fa: 'شیر توپی 2 اینچ', en: 'Persian free text (“ball valve 2 inch”)' },
              { fa: 'MP10', en: 'MP10' },
              3,
              465,
              1395,
              { fa: '3040', en: '3040' },
            ],
            [
              { fa: '`10011240`', en: '`10011240`' },
              { fa: 'BALL VALVE 2" CL600 RF', en: 'BALL VALVE 2" CL600 RF' },
              { fa: 'MP20', en: 'MP20' },
              0,
              450,
              0,
              { fa: '3010', en: '3010' },
            ],
            [
              { fa: 'جمع', en: 'Total' },
              { fa: '', en: '' },
              { fa: '', en: '' },
              7,
              { fa: '', en: '' },
              3115,
              { fa: '', en: '' },
            ],
          ],
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'شناسایی', en: 'Identify' },
              text: {
                fa: 'کدهای مشکوک را با MPN و سازنده، و با ویژگی‌های یکسان‌سازی‌شده (اندازه، کلاس، جنس) مقایسه کنید.',
                en: 'Match suspect codes on MPN and manufacturer, and on normalised attributes (size, class, material).',
              },
            },
            {
              title: { fa: 'انتخاب کد ماندگار', en: 'Choose the surviving code' },
              text: {
                fa: 'کدی را نگه دارید که کامل‌ترین داده و بیشترین سابقه را دارد؛ اینجا `10004521`.',
                en: 'Keep the code with the most complete data and the longest history; here `10004521`.',
              },
            },
            {
              title: { fa: 'تکمیل داده', en: 'Enrich' },
              text: {
                fa: 'شرح استاندارد، MPN، درجه بحرانی بودن و کلاس ارزش‌گذاری درست (3010) را روی کد ماندگار ثبت کنید.',
                en: 'Put the standard description, MPN, criticality and the correct valuation class (3010) on the surviving code.',
              },
            },
            {
              title: { fa: 'انتقال موجودی', en: 'Transfer the stock' },
              text: {
                fa: 'موجودی کدهای تکراری را با سند انتقال کالا به کالا به کد ماندگار منتقل کنید.',
                en: 'Move the duplicates’ stock to the surviving code with a material-to-material transfer posting.',
              },
            },
            {
              title: { fa: 'اصلاح ارجاع‌ها', en: 'Redirect references' },
              text: {
                fa: 'سفارش‌های باز، رزروها و فهرست قطعات تجهیزها را به کد ماندگار ببرید و درخواست خرید 1,800 را لغو کنید.',
                en: 'Point open orders, reservations and equipment parts lists to the surviving code, and cancel the 1,800 requisition.',
              },
            },
            {
              title: { fa: 'مسدودسازی', en: 'Block' },
              text: {
                fa: 'کدهای تکراری را مسدود و برای حذف علامت‌گذاری کنید؛ آنها را پاک نکنید، چون سابقه اسنادشان باید بماند.',
                en: 'Block the duplicates and flag them for deletion; do not erase them, because their document history must remain.',
              },
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'پس از ادغام، کد `10004521` در انبار مرکزی 7 شیر به ارزش 1,720 + 1,395 = 3,115 دارد و میانگین موزون آن 3,115 ÷ 7 = 445 می‌شود. برنامه‌ریز انبار میدان حالا موجودی را می‌بیند و به‌جای خرید، یک انتقال بین انبارها درخواست می‌کند.',
            en: 'After the merge, code `10004521` holds 7 valves in the Central Warehouse worth 1,720 + 1,395 = 3,115, at a moving average of 3,115 ÷ 7 = 445. The Field Warehouse planner can now see the stock and requests a stock transfer instead of a purchase.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'ابعاد کیفیت داده', en: 'The dimensions of data quality' },
          text: {
            fa: '**کامل بودن** (همه فیلدهای لازم پر است)، **درستی** (مقدارها با واقعیت می‌خواند)، **سازگاری** (همه جا یک قاعده رعایت شده)، **یکتایی** (تکراری نداریم)، **به‌روز بودن** (تغییرها به‌موقع ثبت شده) و **اعتبار** (مقدارها در دامنه مجازند).',
            en: '**Completeness** (all required fields are filled), **accuracy** (values match reality), **consistency** (one rule is followed everywhere), **uniqueness** (no duplicates), **timeliness** (changes are recorded on time) and **validity** (values are within the allowed range).',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباهات رایج', en: 'Common mistakes' },
          text: {
            fa: 'ساختن کد جدید «برای صرفه‌جویی در وقت» به‌جای جست‌وجو؛ نوشتن MPN فقط در شرح؛ کپی کردن یک رکورد قدیمی و فراموش کردن تغییر کلاس ارزش‌گذاری یا واحد سنجش آن؛ تغییر واحد سنجش پایه وقتی کالا موجودی یا سفارش باز دارد؛ و دادن اجازه ساخت کد به هر سایت بدون متولی داده.',
            en: 'Creating a new code “to save time” instead of searching; putting the MPN only in the description; copying an old record and forgetting to change its valuation class or unit of measure; changing the base unit while the item has stock or open orders; and letting every site create codes with no data steward.',
          },
        },
      ],
    },
    {
      id: 'erp-master-data',
      title: { fa: 'داده پایه کالا در ERP: نماها، گردش کار و اثر مالی', en: 'The Material Master in the ERP: Views, Workflow and Finance Impact' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در ERP رکورد کالا در چند سطح سازمانی و چند **نما (View)** نگهداری می‌شود. داده‌های عمومی مانند شرح و واحد پایه برای کل شرکت یکی است؛ داده‌های برنامه‌ریزی، خرید و ارزش‌گذاری برای هر سایت جدا ثبت می‌شود؛ و جایگاه برای هر محل نگهداری. هر نما را واحدی پر می‌کند که آن داده را بهتر از همه می‌شناسد. بسیاری از ERPها (برای مثال SAP) رکورد کالا را به همین شکل در نماهای جداگانه سازمان می‌دهند.',
            en: 'In the ERP the material record is held at several organisational levels and in several **views**. General data such as the description and base unit is the same company-wide; planning, purchasing and valuation data is kept per site; and the bin is kept per storage location. Each view is filled by the department that knows that data best. Many ERPs (SAP, for example) organise the material record in separate views like this.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'نماهای داده پایه کالا و مسئول هر نما', en: 'Material master views and their owners' },
          head: [
            { fa: 'نما', en: 'View' },
            { fa: 'فیلدهای کلیدی', en: 'Key fields' },
            { fa: 'مسئول', en: 'Owner' },
          ],
          rows: [
            [
              { fa: 'داده پایه عمومی', en: 'Basic data' },
              { fa: 'کد، شرح، واحد پایه، نوع و گروه کالا، MPN', en: 'Number, description, base unit, material type and group, MPN' },
              { fa: 'تیم داده پایه (فهرست‌نویس)', en: 'Master data team (cataloguer)' },
            ],
            [
              { fa: 'خرید', en: 'Purchasing' },
              { fa: 'واحد سفارش، گروه خرید، سازندگان مجاز', en: 'Order unit, purchasing group, approved manufacturers' },
              { fa: 'تدارکات', en: 'Procurement' },
            ],
            [
              { fa: 'برنامه‌ریزی', en: 'Planning' },
              {
                fa: 'نقطه سفارش، موجودی اطمینان، اندازه سفارش، زمان تحویل، درجه بحرانی بودن',
                en: 'Reorder point, safety stock, lot size, lead time, criticality',
              },
              { fa: 'برنامه‌ریز موجودی', en: 'Inventory planner' },
            ],
            [
              { fa: 'انبار', en: 'Storage' },
              {
                fa: 'محل نگهداری، جایگاه، شرایط نگهداری، عمر انبارداری، بچ و سریال، اطلاعات مواد خطرناک',
                en: 'Storage location, bin, storage conditions, shelf life, batch and serial, hazardous data',
              },
              { fa: 'انبار', en: 'Warehouse' },
            ],
            [
              { fa: 'کیفیت', en: 'Quality' },
              { fa: 'لزوم بازرسی در رسید، نوع گواهی لازم', en: 'Inspection required on receipt, certificate type required' },
              { fa: 'کنترل کیفیت', en: 'Quality control' },
            ],
            [
              { fa: 'حسابداری', en: 'Accounting' },
              { fa: 'کلاس ارزش‌گذاری، روش کنترل قیمت، قیمت', en: 'Valuation class, price control, price' },
              { fa: 'مالی (حسابداری صنعتی)', en: 'Finance (cost accounting)' },
            ],
          ],
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'درخواست', en: 'Request' },
              text: {
                fa: 'مهندس تعمیرات فرم درخواست کد را با MPN، نقشه یا برگه مشخصات و تجهیز مربوط ثبت می‌کند.',
                en: 'A maintenance engineer submits a code request with the MPN, the drawing or data sheet, and the related equipment.',
              },
            },
            {
              title: { fa: 'کنترل تکراری', en: 'Duplicate check' },
              text: {
                fa: 'فهرست‌نویس MPN و ویژگی‌ها را جست‌وجو می‌کند. اگر کالا وجود دارد، همان کد اعلام و درخواست بسته می‌شود.',
                en: 'The cataloguer searches the MPN and attributes. If the item exists, the existing code is returned and the request is closed.',
              },
            },
            {
              title: { fa: 'فهرست‌نویسی', en: 'Cataloguing' },
              text: {
                fa: 'شرح به روش اسم و صفت از روی الگو ساخته می‌شود.',
                en: 'The noun-modifier description is built from the template.',
              },
            },
            {
              title: { fa: 'تکمیل نماها', en: 'Department views' },
              text: {
                fa: 'تدارکات، برنامه‌ریزی، انبار و کیفیت نماهای خود را پر می‌کنند.',
                en: 'Procurement, planning, warehouse and quality fill in their views.',
              },
            },
            {
              title: { fa: 'تأیید مالی', en: 'Finance approval' },
              text: {
                fa: 'مالی کلاس ارزش‌گذاری و روش کنترل قیمت را تعیین و تأیید می‌کند.',
                en: 'Finance sets and approves the valuation class and price control.',
              },
            },
            {
              title: { fa: 'فعال‌سازی', en: 'Activation' },
              text: {
                fa: 'متولی داده پس از کنترل نهایی کد را فعال می‌کند. مسار پترولیوم برای این چرخه 2 روز کاری هدف گذاشته و برای موارد اضطراری یک مسیر سریع همان‌روز دارد.',
                en: 'The data steward does a final check and activates the code. Masar Petroleum targets 2 working days for the cycle, with a same-day fast track for emergencies.',
              },
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'داده پایه بد فقط یک ایراد ظاهری نیست؛ خطا در زنجیره ERP پخش می‌شود:',
            en: 'Bad master data is not a cosmetic problem; the error travels down the ERP chain:',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**شرح غلط** ← خرید کالای اشتباه و رد آن هنگام رسید',
              en: '**Wrong description** → the wrong item is bought and rejected at receipt',
            },
            {
              fa: '**ضریب واحد غلط** ← موجودی و ارزش غلط، و هزینه غلط روی چاه',
              en: '**Wrong unit factor** → wrong stock and value, and the wrong cost on the well',
            },
            {
              fa: '**کلاس ارزش‌گذاری غلط** ← ثبت در حساب اشتباه دفتر کل و ترازنامه نادرست',
              en: '**Wrong valuation class** → postings to the wrong GL account and a misstated balance sheet',
            },
            {
              fa: '**درجه بحرانی بودن خالی** ← قطعه حیاتی هرگز در انبار نگهداری نمی‌شود',
              en: '**Blank criticality** → a critical spare is never stocked',
            },
            {
              fa: '**نبودن مدیریت بچ** ← گواهی آزمون از کالا جدا می‌شود و قابلیت ردیابی از دست می‌رود',
              en: '**No batch management** → certificates get separated from the goods and traceability is lost',
            },
            {
              fa: '**ناهمخوانی شرح فاکتور، رسید و حواله** ← حسابرسان کاست ریکاوری یا شرکا ادعا را زیر سؤال می‌برند',
              en: '**Invoice, receipt and issue descriptions that don’t match** → cost-recovery or partner auditors challenge the claim',
            },
          ],
        },
        {
          type: 'journal',
          title: { fa: 'ثبت خودکار مالی هنگام ادغام کدهای تکراری', en: 'Automatic Finance entry when the duplicates are merged' },
          entries: [
            {
              date: { fa: 'انتقال کالا به کالا', en: 'Material-to-material transfer' },
              lines: [
                { account: ac.spares, debit: 1395 },
                { account: ac.consumables, credit: 1395 },
              ],
              memo: {
                fa: 'کد `10007788` با کپی از رکورد یک واشر ساخته شده بود و کلاس 3040 داشت. انتقال 3 شیر آن به کد `10004521` (کلاس 3010) ارزش 1,395 را از حساب اقلام مصرفی به حساب قطعات یدکی می‌برد و طبقه‌بندی ترازنامه درست می‌شود.',
                en: 'Code `10007788` had been created by copying a gasket record and carried class 3040. Moving its 3 valves to code `10004521` (class 3010) shifts 1,395 from the consumables account to the spare parts account and corrects the balance sheet classification.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: کاست ریکاوری', en: 'In practice: cost recovery' },
          text: {
            fa: 'در حسابرسی کاست ریکاوری یا حسابرسی شرکا، بازرس معمولاً فاکتور، رسید کالا (GRN) و حواله به چاه را کنار هم می‌گذارد. اگر فاکتور «Ball valve 2in CL600» بگوید، رسید «شیر 2 اینچ» و حواله کد دیگری را نشان دهد، اثبات اینکه همان کالا در چاه مصرف شده سخت می‌شود. داده پایه تمیز، این زنجیره را خودبه‌خود هماهنگ نگه می‌دارد.',
            en: 'In a cost-recovery or partner audit, the auditor typically lays the invoice, the goods received note (GRN) and the issue to the well side by side. If the invoice says “Ball valve 2in CL600”, the receipt says “valve 2 inch” and the issue shows yet another code, proving that the same item went into the well becomes hard. Clean master data keeps that chain consistent automatically.',
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
          title: { fa: 'شرح استاندارد بنویسید', en: 'Write standard descriptions' },
          difficulty: 'easy',
          problem: {
            fa: 'سه درخواست کد با شرح آزاد رسیده است. با ویژگی‌های داده‌شده، برای هر کدام شرح کوتاه به روش اسم و صفت بنویسید (حداکثر 40 نویسه، ویژگی‌ها به همان ترتیب جدول).',
            en: 'Three code requests have arrived with free-text descriptions. Using the attributes given, write a noun-modifier short text for each (at most 40 characters, attributes in the order shown).',
          },
          given: {
            head: [
              { fa: 'شرح آزاد', en: 'Free text' },
              { fa: 'اسم', en: 'Noun' },
              { fa: 'صفت', en: 'Modifier' },
              { fa: 'ویژگی‌ها به ترتیب', en: 'Attributes in order' },
            ],
            rows: [
              [
                { fa: 'یاتاقان پمپ', en: 'pump bearing' },
                { fa: '`BEARING`', en: '`BEARING`' },
                { fa: '`BALL`', en: '`BALL`' },
                { fa: 'شماره `6312-2Z`؛ ابعاد `60X130X31MM`', en: 'Designation `6312-2Z`; size `60X130X31MM`' },
              ],
              [
                { fa: 'اورینگ', en: 'o ring' },
                { fa: '`O-RING`', en: '`O-RING`' },
                { fa: '(ندارد)', en: '(none)' },
                { fa: 'اندازه `AS568-226`؛ جنس `FKM`؛ سختی `75DURO`', en: 'Size `AS568-226`; material `FKM`; hardness `75DURO`' },
              ],
              [
                { fa: 'شیر کشویی 6 اینچ 300', en: 'gate valve 6 inch 300' },
                { fa: '`VALVE`', en: '`VALVE`' },
                { fa: '`GATE`', en: '`GATE`' },
                {
                  fa: '`6IN`؛ `CL300`؛ بدنه `WCB`؛ اتصال `RF`؛ استاندارد `API600`',
                  en: '`6IN`; `CL300`; body `WCB`; end `RF`; standard `API600`',
                },
              ],
            ],
          },
          hint: {
            fa: 'قالب: `NOUN,MODIFIER:attr1,attr2`. وقتی صفت وجود ندارد، دونقطه را مستقیم بعد از اسم بگذارید.',
            en: 'Pattern: `NOUN,MODIFIER:attr1,attr2`. With no modifier, put the colon straight after the noun.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'شرح استاندارد', en: 'Standard short text' },
                { fa: 'تعداد نویسه', en: 'Characters' },
              ],
              numericCols: [1],
              rows: [
                [{ fa: '`BEARING,BALL:6312-2Z,60X130X31MM`', en: '`BEARING,BALL:6312-2Z,60X130X31MM`' }, 32],
                [{ fa: '`O-RING:AS568-226,FKM,75DURO`', en: '`O-RING:AS568-226,FKM,75DURO`' }, 27],
                [{ fa: '`VALVE,GATE:6IN,CL300,WCB,RF,API600`', en: '`VALVE,GATE:6IN,CL300,WCB,RF,API600`' }, 34],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'هر سه زیر 40 نویسه‌اند. حالا اگر کسی دوباره «یاتاقان پمپ» بنویسد، جست‌وجوی `6312-2Z` همین کد را پیدا می‌کند و کد تکراری ساخته نمی‌شود.',
                en: 'All three are under 40 characters. If someone types “pump bearing” again, a search for `6312-2Z` finds this code and no duplicate is created.',
              },
            },
          ],
          answer: {
            fa: '`BEARING,BALL:6312-2Z,60X130X31MM`، `O-RING:AS568-226,FKM,75DURO` و `VALVE,GATE:6IN,CL300,WCB,RF,API600`.',
            en: '`BEARING,BALL:6312-2Z,60X130X31MM`, `O-RING:AS568-226,FKM,75DURO` and `VALVE,GATE:6IN,CL300,WCB,RF,API600`.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'واحدهای سنجش باریت', en: 'Barite units of measure' },
          difficulty: 'medium',
          problem: {
            fa: 'مسار پترولیوم 18 تن باریت به قیمت هر تن 280 برای انبار مرکزی سفارش داده است. واحد پایه کیلوگرم است، هر کیسه 25 کیلوگرم و هر جامبوبگ 1,500 کیلوگرم. (الف) مقدار رسید را به کیلوگرم، کیسه و جامبوبگ حساب کنید. (ب) ارزش رسید و قیمت هر کیلوگرم چقدر است؟ (ج) 120 کیسه برای حفاری چاه AR-12 به AFE-012 حواله می‌شود؛ ثبت‌های خودکار رسید و حواله را بنویسید. (د) موجودی باقی‌مانده را به کیلوگرم، کیسه و ارزش به دست آورید.',
            en: 'Masar Petroleum has ordered 18 tonnes of barite at 280 per tonne for the Central Warehouse. The base unit is the kilogram, a sack holds 25 kg and a big bag 1,500 kg. (a) Express the receipt in kilograms, sacks and big bags. (b) What are the receipt value and the price per kilogram? (c) 120 sacks are issued for drilling well AR-12 under AFE-012; write the automatic entries for the receipt and the issue. (d) Work out the remaining stock in kilograms, sacks and value.',
          },
          hint: {
            fa: 'همه چیز را اول به واحد پایه (کیلوگرم) تبدیل کنید.',
            en: 'Convert everything to the base unit (kg) first.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: '(الف) مقدار', en: '(a) Quantity' },
                  text: {
                    fa: '18 × 1,000 = 18,000 کیلوگرم؛ 18,000 ÷ 25 = 720 کیسه؛ 18,000 ÷ 1,500 = 12 جامبوبگ.',
                    en: '18 × 1,000 = 18,000 kg; 18,000 ÷ 25 = 720 sacks; 18,000 ÷ 1,500 = 12 big bags.',
                  },
                },
                {
                  title: { fa: '(ب) ارزش', en: '(b) Value' },
                  text: {
                    fa: 'ارزش = 18 × 280 = 5,040؛ قیمت هر کیلوگرم = 5,040 ÷ 18,000 = 0.28.',
                    en: 'Value = 18 × 280 = 5,040; price per kg = 5,040 ÷ 18,000 = 0.28.',
                  },
                },
                {
                  title: { fa: '(ج) حواله', en: '(c) Issue' },
                  text: {
                    fa: '120 کیسه × 25 = 3,000 کیلوگرم؛ ارزش 3,000 × 0.28 = 840.',
                    en: '120 sacks × 25 = 3,000 kg; value 3,000 × 0.28 = 840.',
                  },
                },
                {
                  title: { fa: '(د) مانده', en: '(d) Balance' },
                  text: {
                    fa: '18,000 − 3,000 = 15,000 کیلوگرم = 600 کیسه = 10 جامبوبگ؛ ارزش 5,040 − 840 = 4,200.',
                    en: '18,000 − 3,000 = 15,000 kg = 600 sacks = 10 big bags; value 5,040 − 840 = 4,200.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              title: { fa: 'ثبت‌های خودکار', en: 'Automatic entries' },
              entries: [
                {
                  date: { fa: 'رسید کالا (GRN)', en: 'GRN' },
                  lines: [
                    { account: ac.chemicals, debit: 5040 },
                    { account: ac.grir, credit: 5040 },
                  ],
                  memo: { fa: '18 تن × 280', en: '18 tonnes × 280' },
                },
                {
                  date: { fa: 'حواله به AFE-012', en: 'Issue to AFE-012' },
                  lines: [
                    { account: ac.wellAR12, debit: 840 },
                    { account: ac.chemicals, credit: 840 },
                  ],
                  memo: {
                    fa: 'هزینه مستقیماً روی چاه AR-12 می‌نشیند و در کاست ریکاوری قابل ردیابی است.',
                    en: 'The cost lands directly on well AR-12 and is traceable for cost recovery.',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: '18,000 کیلوگرم (720 کیسه، 12 جامبوبگ) به ارزش 5,040؛ پس از حواله 840، موجودی 15,000 کیلوگرم (600 کیسه) به ارزش 4,200 است.',
            en: '18,000 kg (720 sacks, 12 big bags) worth 5,040; after the 840 issue, 15,000 kg (600 sacks) worth 4,200 remain.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'عمر انبارداری و FEFO', en: 'Shelf life and FEFO' },
          difficulty: 'medium',
          problem: {
            fa: 'برای بازدارنده خوردگی، داده پایه کل عمر انبارداری را 24 ماه و حداقل عمر باقی‌مانده هنگام رسید را 18 ماه تعیین کرده است. سه بچ زیر رسیده است. (الف) کدام بچ‌ها پذیرفته می‌شوند؟ (ب) ماه انقضای هر بچ چیست؟ (ج) به روش FEFO، کدام بچ اول تحویل می‌شود؟',
            en: 'For corrosion inhibitor, the master data sets a total shelf life of 24 months and a minimum remaining shelf life at receipt of 18 months. The three batches below have arrived. (a) Which batches are accepted? (b) What is each batch’s expiry month? (c) Under FEFO, which batch is issued first?',
          },
          given: {
            head: [
              { fa: 'بچ', en: 'Batch' },
              { fa: 'ماه ساخت', en: 'Month made' },
              { fa: 'ماه رسید', en: 'Month received' },
            ],
            numericCols: [1, 2],
            rows: [
              [{ fa: 'CI-101', en: 'CI-101' }, 2, 5],
              [{ fa: 'CI-102', en: 'CI-102' }, 1, 9],
              [{ fa: 'CI-103', en: 'CI-103' }, 6, 8],
            ],
          },
          hint: {
            fa: 'عمر باقی‌مانده = 24 − (ماه رسید − ماه ساخت). ماه انقضا = ماه ساخت + 24.',
            en: 'Remaining life = 24 − (month received − month made). Expiry month = month made + 24.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'بچ', en: 'Batch' },
                { fa: 'سپری‌شده (ماه)', en: 'Elapsed (months)' },
                { fa: 'باقی‌مانده (ماه)', en: 'Remaining (months)' },
                { fa: 'تصمیم', en: 'Decision' },
                { fa: 'ماه انقضا', en: 'Expiry month' },
              ],
              numericCols: [1, 2, 4],
              rows: [
                [{ fa: 'CI-101', en: 'CI-101' }, 3, 21, { fa: 'پذیرش (21 بیشتر از 18)', en: 'Accept (21 is above 18)' }, 26],
                [{ fa: 'CI-102', en: 'CI-102' }, 8, 16, { fa: 'رد یا قرنطینه (16 کمتر از 18)', en: 'Reject or quarantine (16 is below 18)' }, 25],
                [{ fa: 'CI-103', en: 'CI-103' }, 2, 22, { fa: 'پذیرش (22 بیشتر از 18)', en: 'Accept (22 is above 18)' }, 30],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'به روش FEFO، بچ CI-101 که در ماه 26 منقضی می‌شود پیش از CI-103 (ماه 30) تحویل می‌شود، حتی اگر CI-103 جلوی قفسه باشد. پذیرش CI-102 فقط با مجوز کتبی کنترل کیفیت (Concession) و برنامه مصرف سریع ممکن است؛ انباردار به‌تنهایی نمی‌تواند آن را بپذیرد.',
                en: 'Under FEFO, batch CI-101 (expires month 26) is issued before CI-103 (month 30), even if CI-103 is at the front of the shelf. CI-102 could only be accepted with a written concession from quality control and a plan to use it quickly; the storekeeper cannot accept it alone.',
              },
            },
          ],
          answer: {
            fa: 'CI-101 و CI-103 پذیرفته می‌شوند (انقضا در ماه 26 و 30)؛ CI-102 با 16 ماه عمر باقی‌مانده رد می‌شود؛ CI-101 اول تحویل می‌شود.',
            en: 'CI-101 and CI-103 are accepted (expiring in months 26 and 30); CI-102, with 16 months left, is rejected; CI-101 is issued first.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'ادغام یاتاقان‌های تکراری', en: 'Merging duplicate bearings' },
          difficulty: 'hard',
          problem: {
            fa: 'در انبار مرکزی (سایت MP10) سه کد برای یک یاتاقان `6312-2Z` پیدا شده است (جدول). کد `10002210` ماندگار است. (الف) پس از ادغام، مقدار، ارزش و میانگین موزون متحرک کد ماندگار چقدر است؟ (ب) ثبت‌های خودکار مالی انتقال‌ها را بنویسید. (ج) مصرف سالانه این یاتاقان 10 عدد و نقطه سفارش آن 4 عدد است و یک درخواست خرید باز برای 8 عدد به قیمت هر عدد 56 وجود دارد. با آن چه باید کرد و چه مبلغی صرفه‌جویی می‌شود؟',
            en: 'Three codes for one `6312-2Z` bearing have been found in the Central Warehouse (site MP10); see the table. Code `10002210` will survive. (a) After the merge, what are the surviving code’s quantity, value and moving average price? (b) Write the automatic Finance entries for the transfers. (c) Annual usage is 10 bearings, the reorder point is 4, and there is an open purchase requisition for 8 at 56 each. What should happen to it, and how much is saved?',
          },
          given: {
            head: [
              { fa: 'کد', en: 'Code' },
              { fa: 'مقدار', en: 'Qty' },
              { fa: 'میانگین قیمت', en: 'Average price' },
              { fa: 'ارزش', en: 'Value' },
              { fa: 'کلاس ارزش‌گذاری', en: 'Valuation class' },
            ],
            numericCols: [1, 2, 3],
            rows: [
              [{ fa: '`10002210`', en: '`10002210`' }, 6, 52, 312, { fa: '3010', en: '3010' }],
              [{ fa: '`10005567`', en: '`10005567`' }, 4, 55, 220, { fa: '3010', en: '3010' }],
              [{ fa: '`10009031`', en: '`10009031`' }, 2, 58, 116, { fa: '3040', en: '3040' }],
            ],
          },
          hint: {
            fa: 'انتقال میان دو کد با کلاس یکسان حساب دفتر کل را تغییر نمی‌دهد؛ فقط کلاس متفاوت اثر خالص در دفتر کل دارد.',
            en: 'A transfer between two codes in the same valuation class leaves the GL account unchanged; only a different class has a net effect in the ledger.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: '(الف) ادغام', en: '(a) Merge' },
                  text: {
                    fa: 'مقدار: 6 + 4 + 2 = 12 عدد. ارزش: 312 + 220 + 116 = 648. میانگین موزون: 648 ÷ 12 = 54.',
                    en: 'Quantity: 6 + 4 + 2 = 12. Value: 312 + 220 + 116 = 648. Moving average: 648 ÷ 12 = 54.',
                  },
                },
                {
                  title: { fa: '(ب) اثر مالی', en: '(b) Finance effect' },
                  text: {
                    fa: 'انتقال از `10005567` (کلاس 3010) به کد ماندگار (کلاس 3010) هر دو طرف را به حساب 1310 می‌برد و اثر خالصی در دفتر کل ندارد. انتقال از `10009031` (کلاس 3040) ارزش 116 را از حساب اقلام مصرفی به حساب قطعات یدکی منتقل می‌کند.',
                    en: 'The transfer from `10005567` (class 3010) to the surviving code (class 3010) hits account 1310 on both sides, with no net GL effect. The transfer from `10009031` (class 3040) moves 116 from the consumables account to the spare parts account.',
                  },
                },
                {
                  title: { fa: '(ج) درخواست خرید', en: '(c) The requisition' },
                  text: {
                    fa: 'موجودی 12 عدد از مصرف یک سال (10 عدد) بیشتر و بسیار بالاتر از نقطه سفارش (4 عدد) است. پس درخواست خرید لغو می‌شود و 8 × 56 = 448 خرج نمی‌شود.',
                    en: '12 on hand is more than a year’s usage (10) and far above the reorder point (4). So the requisition is cancelled and 8 × 56 = 448 is not spent.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              title: { fa: 'ثبت‌های خودکار انتقال', en: 'Automatic transfer entries' },
              entries: [
                {
                  date: { fa: 'انتقال `10005567` به `10002210`', en: 'Transfer `10005567` to `10002210`' },
                  lines: [
                    { account: { fa: 'موجودی قطعات یدکی (کد `10002210`)', en: 'Inventory: spare parts (code `10002210`)' }, debit: 220 },
                    { account: { fa: 'موجودی قطعات یدکی (کد `10005567`)', en: 'Inventory: spare parts (code `10005567`)' }, credit: 220 },
                  ],
                  memo: {
                    fa: 'هر دو در کلاس 3010؛ ERP سند می‌زند اما اثر خالص روی حساب 1310 صفر است.',
                    en: 'Both in class 3010; the ERP posts a document but the net effect on account 1310 is zero.',
                  },
                },
                {
                  date: { fa: 'انتقال `10009031` به `10002210`', en: 'Transfer `10009031` to `10002210`' },
                  lines: [
                    { account: { fa: 'موجودی قطعات یدکی (کد `10002210`)', en: 'Inventory: spare parts (code `10002210`)' }, debit: 116 },
                    { account: { fa: 'موجودی اقلام مصرفی (کد `10009031`)', en: 'Inventory: consumables (code `10009031`)' }, credit: 116 },
                  ],
                  memo: {
                    fa: 'اصلاح کلاس ارزش‌گذاری اشتباه: 116 از حساب 1340 به حساب 1310 منتقل می‌شود.',
                    en: 'Correcting the wrong valuation class: 116 moves from account 1340 to account 1310.',
                  },
                },
              ],
            },
            {
              type: 'table',
              head: [
                { fa: 'کد ماندگار', en: 'Surviving code' },
                { fa: 'مقدار', en: 'Qty' },
                { fa: 'ارزش', en: 'Value' },
                { fa: 'میانگین موزون', en: 'Moving average' },
              ],
              numericCols: [1, 2, 3],
              rows: [[{ fa: '`10002210`', en: '`10002210`' }, 12, 648, 54]],
            },
          ],
          answer: {
            fa: '12 عدد به ارزش 648 و میانگین 54؛ 116 از اقلام مصرفی به قطعات یدکی منتقل می‌شود؛ درخواست خرید لغو و 448 صرفه‌جویی می‌شود.',
            en: '12 units worth 648 at an average of 54; 116 moves from consumables to spare parts; the requisition is cancelled, saving 448.',
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
              fa: 'داده پایه کالا رکورد واحدی است که همه ماژول‌ها از آن استفاده می‌کنند؛ هر خطا در آن در هزاران تراکنش تکرار می‌شود.',
              en: 'The material master is the single record every module uses; any error in it repeats across thousands of transactions.',
            },
            {
              fa: 'کد ترتیبی به‌همراه شرح استاندارد اسم و صفت و ویژگی‌های ساخت‌یافته، بهترین سد در برابر کالاهای تکراری است.',
              en: 'A sequential code plus a standard noun-modifier description and structured attributes is the best defence against duplicates.',
            },
            {
              fa: 'واحد پایه، واحد سفارش و ضریب تبدیل باید دقیق باشند؛ برای OCTG مقدار رسید از فهرست اندازه‌گیری طول لوله‌ها می‌آید.',
              en: 'Base unit, order unit and conversion factor must be exact; for OCTG the received quantity comes from the pipe tally.',
            },
            {
              fa: 'درجه بحرانی بودن، عمر انبارداری، بچ و سریال، سیاست نگهداری، کیفیت و قابلیت ردیابی را کنترل می‌کنند.',
              en: 'Criticality, shelf life, batch and serial control stocking policy, quality and traceability.',
            },
            {
              fa: 'کلاس ارزش‌گذاری تعیین می‌کند هر جابه‌جایی به کدام حساب دفتر کل برود؛ کلاس اشتباه ترازنامه را نادرست می‌کند.',
              en: 'The valuation class decides which GL account each movement hits; a wrong class misstates the balance sheet.',
            },
            {
              fa: 'ساخت کد باید از گردش کار تأیید و متولی داده بگذرد و تکراری‌ها با انتقال موجودی، اصلاح ارجاع‌ها و مسدودسازی پاک‌سازی شوند.',
              en: 'Code creation must go through an approval workflow and a data steward, and duplicates are cleaned up by transferring stock, redirecting references and blocking.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'داده پایه کالا', en: 'Material master' },
              def: {
                fa: 'رکورد واحد و مرکزی که کالا را برای همه ماژول‌های ERP توصیف می‌کند.',
                en: 'The single, central record that describes an item for every ERP module.',
              },
            },
            {
              term: { fa: 'کد ترتیبی', en: 'Sequential (non-intelligent) code' },
              def: {
                fa: 'شماره کالایی که معنایی ندارد و فقط شماره بعدی در ردیف است.',
                en: 'A material number with no built-in meaning; just the next number in line.',
              },
            },
            {
              term: { fa: 'فهرست‌نویسی', en: 'Cataloguing' },
              def: {
                fa: 'نوشتن شرح کامل و استاندارد کالا از روی فرهنگ کنترل‌شده اسم‌ها، صفت‌ها و ویژگی‌ها.',
                en: 'Writing a complete, standard item description from a controlled dictionary of nouns, modifiers and attributes.',
              },
            },
            {
              term: { fa: 'روش اسم و صفت', en: 'Noun-modifier method' },
              def: {
                fa: 'ساختن شرح با اسم (چه چیزی)، صفت (چه نوعی) و ویژگی‌ها با ترتیب ثابت.',
                en: 'Building a description from a noun (what it is), a modifier (what kind) and attributes in a fixed order.',
              },
            },
            {
              term: { fa: 'واحد سنجش پایه', en: 'Base unit of measure' },
              def: {
                fa: 'واحدی که موجودی با آن نگهداری و ارزش‌گذاری می‌شود.',
                en: 'The unit in which stock is held and valued.',
              },
            },
            {
              term: { fa: 'ضریب تبدیل', en: 'Conversion factor' },
              def: {
                fa: 'عددی که واحد سفارش یا صدور را به واحد پایه تبدیل می‌کند؛ مثلاً هر کیسه 25 کیلوگرم.',
                en: 'The number that converts an order or issue unit to the base unit, e.g. 25 kg per sack.',
              },
            },
            {
              term: { fa: 'شماره قطعه سازنده (MPN)', en: 'Manufacturer part number (MPN)' },
              def: {
                fa: 'شماره‌ای که سازنده به قطعه داده است؛ همراه نام سازنده در فیلد جداگانه ثبت می‌شود.',
                en: 'The number the manufacturer gives the part; recorded with the manufacturer’s name in its own field.',
              },
            },
            {
              term: { fa: 'درجه بحرانی بودن', en: 'Criticality' },
              def: {
                fa: 'رتبه‌ای که پیامد نبودن کالا را برای ایمنی، محیط زیست و تولید نشان می‌دهد و سیاست نگهداری را تعیین می‌کند.',
                en: 'A ranking of the consequence of an item being unavailable for safety, environment and production; it drives the stocking policy.',
              },
            },
            {
              term: { fa: 'عمر انبارداری', en: 'Shelf life' },
              def: {
                fa: 'مدتی که کالا پس از ساخت، حتی بدون استفاده، قابل مصرف می‌ماند.',
                en: 'How long an item remains usable after manufacture, even if unused.',
              },
            },
            {
              term: { fa: 'اول‌منقضی‌اول‌خروج (FEFO)', en: 'First-expired-first-out (FEFO)' },
              def: {
                fa: 'تحویل بچی که زودتر منقضی می‌شود، پیش از بچ‌های دیگر.',
                en: 'Issuing the batch that expires first before the others.',
              },
            },
            {
              term: { fa: 'بچ (سری ساخت)', en: 'Batch' },
              def: {
                fa: 'مقداری از کالا که با هم و با ویژگی‌های یکسان ساخته شده و گواهی مشترک دارد.',
                en: 'A quantity made together with identical properties and a shared certificate.',
              },
            },
            {
              term: { fa: 'شماره سریال', en: 'Serial number' },
              def: {
                fa: 'شناسه یکتای هر واحد منفرد کالا برای دنبال کردن سابقه آن.',
                en: 'The unique identifier of one individual unit, used to track its history.',
              },
            },
            {
              term: { fa: 'کلاس ارزش‌گذاری', en: 'Valuation class' },
              def: {
                fa: 'فیلدی که کالا را به حساب‌های دفتر کل وصل می‌کند.',
                en: 'The field that links an item to its general ledger accounts.',
              },
            },
            {
              term: { fa: 'میانگین موزون متحرک', en: 'Moving average price' },
              def: {
                fa: 'قیمت واحد موجودی که با هر رسید از تقسیم کل ارزش بر کل مقدار دوباره حساب می‌شود.',
                en: 'A unit price recalculated at every receipt as total value divided by total quantity.',
              },
            },
            {
              term: { fa: 'کالای تکراری', en: 'Duplicate material' },
              def: {
                fa: 'یک کالای فیزیکی که بیش از یک کد در سیستم دارد.',
                en: 'One physical item with more than one code in the system.',
              },
            },
            {
              term: { fa: 'متولی داده', en: 'Data steward' },
              def: {
                fa: 'نقشی که مسئول کیفیت داده پایه است و ساخت و تغییر کدها را تأیید می‌کند.',
                en: 'The role responsible for master data quality, who approves the creation and change of codes.',
              },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: { fa: 'داده پایه کالا (Material master) چیست؟', en: 'What is the material master?' },
      options: [
        { fa: 'فهرست رسیدهای یک ماه', en: 'A list of one month’s receipts' },
        { fa: 'گزارش ارزش موجودی پایان سال', en: 'The year-end stock valuation report' },
        {
          fa: 'رکورد واحد و مرکزی که کالا را برای همه ماژول‌ها توصیف می‌کند',
          en: 'The single, central record that describes an item for every module',
        },
        { fa: 'سفارش خرید استاندارد هر کالا', en: 'The standard purchase order for an item' },
      ],
      answer: 2,
      explain: {
        fa: 'داده پایه کالا داده پایه است، نه تراکنش یا گزارش: یک بار ساخته می‌شود و خرید، انبار، نگهداری، برنامه‌ریزی و مالی همه از آن استفاده می‌کنند.',
        en: 'The material master is master data, not a transaction or a report: it is created once and procurement, warehouse, maintenance, planning and finance all use it.',
      },
    },
    {
      q: {
        fa: 'در شرح `VALVE,GATE:6IN,CL300,WCB,RF,API600` کدام بخش «صفت» است؟',
        en: 'In the description `VALVE,GATE:6IN,CL300,WCB,RF,API600`, which part is the modifier?',
      },
      options: [
        { fa: '`GATE`', en: '`GATE`' },
        { fa: '`VALVE`', en: '`VALVE`' },
        { fa: '`CL300`', en: '`CL300`' },
        { fa: '`API600`', en: '`API600`' },
      ],
      answer: 0,
      explain: {
        fa: 'اسم (VALVE) می‌گوید کالا چیست و صفت (GATE) نوع آن را دقیق می‌کند. CL300 و API600 ویژگی‌هایی هستند که بعد از دونقطه می‌آیند.',
        en: 'The noun (VALVE) says what the item is and the modifier (GATE) narrows the type. CL300 and API600 are attributes that follow the colon.',
      },
    },
    {
      q: {
        fa: '9 تن بنتونیت رسیده است. واحد پایه کیلوگرم است و هر کیسه 25 کیلوگرم. این مقدار چند کیسه است؟',
        en: '9 tonnes of bentonite have arrived. The base unit is the kilogram and a sack holds 25 kg. How many sacks is that?',
      },
      options: [
        { fa: '225', en: '225' },
        { fa: '36', en: '36' },
        { fa: '3,600', en: '3,600' },
        { fa: '360', en: '360' },
      ],
      answer: 3,
      explain: {
        fa: '9 × 1,000 = 9,000 کیلوگرم؛ 9,000 ÷ 25 = 360 کیسه. عدد 36 از جا انداختن یک صفر در تبدیل تن به کیلوگرم به دست می‌آید.',
        en: '9 × 1,000 = 9,000 kg; 9,000 ÷ 25 = 360 sacks. 36 comes from dropping a zero when converting tonnes to kilograms.',
      },
    },
    {
      q: {
        fa: 'بیشتر پیاده‌سازی‌های امروزی ERP برای کد کالا چه روشی را ترجیح می‌دهند؟',
        en: 'Which approach to material numbers do most modern ERP implementations prefer?',
      },
      options: [
        { fa: 'کد معنادار که گروه و اندازه را در خود دارد', en: 'An intelligent code that embeds group and size' },
        {
          fa: 'کد ترتیبی همراه با شرح استاندارد و ویژگی‌های ساخت‌یافته',
          en: 'A sequential code plus a standard description and structured attributes',
        },
        { fa: 'شرح آزاد بدون کد', en: 'Free-text descriptions with no code' },
        { fa: 'شماره قطعه سازنده به‌عنوان کد کالا', en: 'The manufacturer part number as the material number' },
      ],
      answer: 1,
      explain: {
        fa: 'کد ترتیبی هرگز تمام نمی‌شود و با تغییر طبقه‌بندی تغییر نمی‌کند؛ معنا در شرح و ویژگی‌ها نگهداری می‌شود. استفاده از MPN به‌عنوان کد هم خطرناک است، چون یک کالا ممکن است چند MPN از چند سازنده داشته باشد.',
        en: 'A sequential code never runs out and never changes when the classification does; the meaning lives in the description and attributes. Using the MPN as the code is risky too, because one item can have several MPNs from different manufacturers.',
      },
    },
    {
      q: {
        fa: 'عمر انبارداری یک چسب 36 ماه است. بچی که در ماه 3 ساخته شده، در ماه 10 رسیده است. عمر باقی‌مانده هنگام رسید چند ماه است؟',
        en: 'An adhesive has a 36-month shelf life. A batch made in month 3 arrives in month 10. How many months of shelf life remain at receipt?',
      },
      options: [
        { fa: '7', en: '7' },
        { fa: '26', en: '26' },
        { fa: '29', en: '29' },
        { fa: '33', en: '33' },
      ],
      answer: 2,
      explain: {
        fa: 'از ساخت تا رسید 10 − 3 = 7 ماه گذشته است؛ پس 36 − 7 = 29 ماه باقی مانده. عدد 26 از کم کردن ماه رسید (10) از کل عمر به دست می‌آید.',
        en: '10 − 3 = 7 months have passed since manufacture, so 36 − 7 = 29 months remain. 26 comes from subtracting the receipt month (10) from the total life.',
      },
    },
    {
      q: { fa: 'کلاس ارزش‌گذاری در داده پایه کالا چه کاری انجام می‌دهد؟', en: 'What does the valuation class in the material master do?' },
      options: [
        { fa: 'تعیین می‌کند کالا در کدام جایگاه انبار شود', en: 'Decides which bin the item goes into' },
        { fa: 'قیمت خرید را با تأمین‌کننده توافق می‌کند', en: 'Agrees the purchase price with the vendor' },
        { fa: 'درجه بحرانی بودن کالا را نشان می‌دهد', en: 'Shows the item’s criticality' },
        {
          fa: 'کالا را به حساب‌های دفتر کل وصل می‌کند تا ERP بداند هر جابه‌جایی به کدام حساب برود',
          en: 'Links the item to GL accounts so the ERP knows which account each movement hits',
        },
      ],
      answer: 3,
      explain: {
        fa: 'ERP از روی کلاس ارزش‌گذاری (و نوع جابه‌جایی) حساب دفتر کل را خودکار تعیین می‌کند. جایگاه و درجه بحرانی بودن فیلدهای دیگری‌اند و قیمت در سفارش خرید توافق می‌شود.',
        en: 'The ERP picks the GL account automatically from the valuation class (and the movement type). Bin and criticality are separate fields, and the price is agreed on the purchase order.',
      },
    },
    {
      q: {
        fa: 'دو کد تکراری ادغام می‌شوند: 5 عدد با میانگین 40 و 3 عدد با میانگین 48. میانگین موزون متحرک کد ماندگار چقدر است؟',
        en: 'Two duplicate codes are merged: 5 units at an average of 40 and 3 units at an average of 48. What is the surviving code’s moving average price?',
      },
      options: [
        { fa: '43', en: '43' },
        { fa: '44', en: '44' },
        { fa: '45', en: '45' },
        { fa: '88', en: '88' },
      ],
      answer: 0,
      explain: {
        fa: '(5 × 40) + (3 × 48) = 200 + 144 = 344؛ 344 ÷ 8 = 43. عدد 44 میانگین ساده دو قیمت است که مقدارها را نادیده می‌گیرد.',
        en: '(5 × 40) + (3 × 48) = 200 + 144 = 344; 344 ÷ 8 = 43. 44 is the simple average of the two prices, which ignores the quantities.',
      },
    },
    {
      q: { fa: 'کدام کالا بیشتر از همه به مدیریت شماره سریال نیاز دارد؟', en: 'Which item most needs serial number management?' },
      options: [
        { fa: 'کیسه‌های باریت', en: 'Sacks of barite' },
        { fa: 'الکتروموتور یدکی 250 کیلووات یک پمپ', en: 'A spare 250 kW pump motor' },
        { fa: 'دستکش ایمنی', en: 'Safety gloves' },
        { fa: 'پیچ و مهره', en: 'Studs and nuts' },
      ],
      answer: 1,
      explain: {
        fa: 'الکتروموتور یک واحد منفرد و گران است که سابقه نصب، تعمیر و ضمانتش باید جدا دنبال شود. باریت با بچ کنترل می‌شود و دستکش و پیچ و مهره نه بچ لازم دارند نه سریال.',
        en: 'A motor is an individual, expensive unit whose installation, repair and warranty history must be tracked on its own. Barite is controlled by batch, and gloves and studs need neither batch nor serial.',
      },
    },
    {
      q: {
        fa: 'به دلیل داده پایه غلط، رسید 300 متر لوله مغزی به قیمت هر متر 80 به‌جای حساب موجودی به هزینه ثبت شد. اثر آن چیست؟',
        en: 'Because of bad master data, a receipt of 300 m of tubing at 80 per metre was posted to expense instead of inventory. What is the effect?',
      },
      options: [
        { fa: 'موجودی 24,000 بیشتر و هزینه 24,000 کمتر از واقع', en: 'Inventory overstated and expense understated by 24,000' },
        { fa: 'هیچ اثری ندارد، چون جمع بدهکار و بستانکار برابر است', en: 'No effect, because debits still equal credits' },
        { fa: 'موجودی 24,000 کمتر و هزینه 24,000 بیشتر از واقع', en: 'Inventory understated and expense overstated by 24,000' },
        { fa: 'موجودی 2,400 کمتر از واقع', en: 'Inventory understated by 2,400' },
      ],
      answer: 2,
      explain: {
        fa: '300 × 80 = 24,000 به‌جای دارایی به هزینه رفته است؛ پس موجودی کمتر و هزینه بیشتر از واقع نشان داده می‌شود. برابر بودن بدهکار و بستانکار به این معنا نیست که حساب‌های درست به کار رفته‌اند.',
        en: '300 × 80 = 24,000 went to expense instead of the asset, so inventory is understated and expense overstated. Balanced debits and credits don’t mean the right accounts were used.',
      },
    },
    {
      q: {
        fa: 'پیش از درخواست کد جدید برای یک قطعه، اولین کار درست چیست؟',
        en: 'Before requesting a new code for a part, what is the right first step?',
      },
      options: [
        { fa: 'ساختن یک کد موقت و اصلاح آن بعد از رسید', en: 'Create a temporary code and fix it after receipt' },
        {
          fa: 'جست‌وجوی MPN و ویژگی‌های اصلی در سیستم برای پیدا کردن کد موجود',
          en: 'Search the system for the MPN and key attributes to find an existing code',
        },
        { fa: 'کپی کردن نزدیک‌ترین رکورد و تغییر شرح آن', en: 'Copy the nearest record and change its description' },
        { fa: 'ثبت یک شرح آزاد فارسی برای سرعت بیشتر', en: 'Enter a Persian free-text description to be quick' },
      ],
      answer: 1,
      explain: {
        fa: 'بیشتر تکراری‌ها MPN مشترک دارند و با یک جست‌وجو پیدا می‌شوند. کپی کردن رکورد قدیمی همان راهی است که کلاس ارزش‌گذاری یا واحد سنجش غلط را منتقل می‌کند.',
        en: 'Most duplicates share an MPN and turn up in a search. Copying an old record is exactly how a wrong valuation class or unit of measure gets carried over.',
      },
    },
  ],
}
