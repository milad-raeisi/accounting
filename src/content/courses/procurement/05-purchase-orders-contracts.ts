import type { Lesson } from '../../types'

const ac = {
  aucAR11: { fa: 'دارایی در جریان ساخت: چاه AR-11', en: 'Assets under construction: well AR-11' },
  grir: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing account' },
}

const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'purchase-orders-contracts',
  number: 5,
  level: 'intermediate',
  minutes: 24,
  icon: 'FileCheck',
  tone: 'asset',
  title: { fa: 'سفارش خرید و قراردادها', en: 'Purchase Orders and Contracts' },
  summary: {
    fa: 'سفارش خرید تعهد رسمی شرکت به تأمین‌کننده است. در این درس انواع سفارش خرید، قرارداد چارچوب و سفارش فراخوان، قرارداد خدمات و برگه ثبت خدمات (SES)، شرایط کلیدی تجاری، تغییر و تأیید سفارش، و نمایش تعهدات در گزارش هزینه AFE را در ERP می‌آموزید.',
    en: 'A purchase order is the company’s formal commitment to a supplier. This lesson covers PO types, framework agreements and call-offs, service contracts and service entry sheets, key commercial terms, PO changes and approvals, and how commitments appear in AFE cost reports inside the ERP.',
  },
  objectives: [
    {
      fa: 'توضیح دهید سفارش خرید چیست و چه اجزایی دارد، و میان سفارش استاندارد، خدمات و باز، و میان خرید برای انبار و تخصیص مستقیم هزینه درست انتخاب کنید.',
      en: 'Explain what a PO is and what it contains, and choose correctly between standard, service and blanket POs, and between stock and direct-charge purchases.',
    },
    {
      fa: 'با قرارداد چارچوب و سفارش فراخوان کار کنید و خرید خدمات را با برگه ثبت خدمات (SES) کنترل کنید.',
      en: 'Work with framework agreements and call-off orders, and control service purchases through service entry sheets (SES).',
    },
    {
      fa: 'شرایط کلیدی تجاری را بخوانید و به کار ببرید: قیمت، تحویل و اینکوترمز، شرایط پرداخت، ضمانت کیفیت، خسارت تأخیر و ضمانت‌نامه‌ها.',
      en: 'Read and apply the key commercial terms: price, delivery and Incoterms, payment terms, warranty, liquidated damages and guarantees.',
    },
    {
      fa: 'تغییر سفارش را با گردش کار تأیید و تاریخچه نسخه‌ها کنترل کنید.',
      en: 'Control PO changes through the approval workflow and version history.',
    },
    {
      fa: 'مفهوم تعهد را توضیح دهید و گزارش هزینه AFE را بخوانید: بودجه، هزینه واقعی، تعهدات و مانده.',
      en: 'Explain commitments and read an AFE cost report: budget, actuals, commitments and remaining.',
    },
  ],
  sections: [
    {
      id: 'why-po',
      title: { fa: 'چرا سفارش خرید این‌قدر مهم است؟', en: 'Why the Purchase Order Matters' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در میدان آریا، دکل حفاری آماده است تا لوله‌های جداری (Casing) را در چاه AR-11 بگذارد. لوله‌ها رسیده‌اند، اما چند هفته پیش مهندس حفاری آن‌ها را فقط با یک تماس تلفنی از تأمین‌کننده خواسته بود و هیچ **سفارش خرید** رسمی‌ای صادر نشده است. حالا فاکتور تأمین‌کننده قیمتی بالاتر از توافق شفاهی دارد، تاریخ تحویل در هیچ سندی نیامده و واحد مالی نمی‌داند هزینه را به کدام AFE بزند. حسابرس شریک مشارکت هم می‌پرسد: «رقابت کجا بود و چه کسی این خرید را تأیید کرد؟» این درس درباره سندی است که همه این پرسش‌ها را از پیش پاسخ می‌دهد.',
            en: 'At Arya field the rig is ready to run casing in well AR-11. The pipe has arrived, but weeks ago the drilling engineer ordered it with a single phone call and no formal **purchase order** was ever issued. Now the supplier’s invoice shows a higher price than the verbal deal, no document records the delivery date, and Finance does not know which AFE to charge. The joint-venture partner’s auditor asks: “Where was the competition, and who approved this purchase?” This lesson is about the document that answers all of these questions in advance.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**سفارش خرید** (Purchase Order یا PO) سند رسمی و مکتوبی است که خریدار برای تأمین‌کننده صادر می‌کند و در آن روشن می‌کند چه کالا یا خدمتی، به چه مقدار، با چه قیمتی، در چه تاریخی، در کجا و با چه شرایطی باید تحویل شود. وقتی تأمین‌کننده سفارش را بپذیرد، سفارش خرید به یک **تعهد حقوقی** برای هر دو طرف تبدیل می‌شود: تأمین‌کننده متعهد به تحویل است و شرکت متعهد به پرداخت.',
            en: 'A **purchase order (PO)** is the formal written document a buyer issues to a supplier, stating what goods or services are ordered, in what quantity, at what price, by when, where and under what terms. Once the supplier accepts it, the PO becomes a **legal commitment** on both sides: the supplier must deliver and the company must pay.',
          },
        },
        {
          type: 'diagram',
          id: 'p2p-flow',
          caption: {
            fa: 'سفارش خرید حلقه میانی زنجیره تدارکات تا پرداخت است: پس از درخواست خرید و انتخاب تأمین‌کننده صادر می‌شود و رسید کالا، فاکتور و پرداخت همگی با آن تطبیق داده می‌شوند.',
            en: 'The PO is the middle link of procure-to-pay: it follows the requisition and sourcing, and the goods receipt, invoice and payment are all matched against it.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**برای تأمین‌کننده**: دستور رسمی تحویل است؛ تأمین‌کننده حرفه‌ای بدون آن کالا را ارسال نمی‌کند.',
              en: '**For the supplier**: it is the formal instruction to deliver; a professional supplier does not ship without it.',
            },
            {
              fa: '**برای انبار و واحد دریافت**: مبنای رسید کالا (GRN) است؛ انباردار مقدار رسیده را با مقدار سفارش مقایسه می‌کند.',
              en: '**For the warehouse and receiving**: it is the basis of the goods received note (GRN); the storekeeper compares what arrived with what was ordered.',
            },
            {
              fa: '**برای واحد مالی**: مبنای تطبیق فاکتور و پرداخت است و از همان لحظه تأیید، مبلغ آن به‌عنوان **تعهد** روی بودجه AFE یا مرکز هزینه می‌نشیند.',
              en: '**For Finance**: it is the basis for matching the invoice and paying it, and from the moment it is approved its value sits on the AFE or cost-centre budget as a **commitment**.',
            },
            {
              fa: '**برای حسابرس و شرکا**: سند اثبات این است که خرید طبق اختیارات مصوب تأیید شده و هزینه با کد درست ثبت شده است؛ یعنی پایه **بازیافت هزینه** (Cost Recovery) در قرارداد نفتی.',
              en: '**For auditors and partners**: it proves the purchase was approved within delegated authority and charged to the right code, the foundation of **cost recovery** under the petroleum contract.',
            },
          ],
        },
        { type: 'h', text: { fa: 'اجزای یک سفارش خرید', en: 'Anatomy of a purchase order' } },
        {
          type: 'table',
          caption: {
            fa: 'سفارش `PO-45007`: لوله جداری چاه AR-11 از شرکت لوله‌گستر خلیج',
            en: '`PO-45007`: casing for well AR-11 from Gulf Tubulars',
          },
          head: [
            { fa: 'بخش', en: 'Part' },
            { fa: 'چه چیزی در آن می‌آید', en: 'What it contains' },
            { fa: 'نمونه در مسار پترولیوم', en: 'Masar Petroleum example' },
          ],
          rows: [
            [
              { fa: 'سربرگ', en: 'Header' },
              {
                fa: 'تأمین‌کننده، واحد خرید، ارز، شرایط پرداخت، اینکوترمز، خریدار مسئول',
                en: 'Vendor, purchasing organisation, currency, payment terms, Incoterms, responsible buyer',
              },
              {
                fa: 'لوله‌گستر خلیج؛ پرداخت 30 روز پس از دریافت فاکتور معتبر؛ تحویل در انبار میدان',
                en: 'Gulf Tubulars; payment 30 days after a valid invoice; delivered to the Field Warehouse',
              },
            ],
            [
              { fa: 'ردیف‌های سفارش', en: 'Item lines' },
              {
                fa: 'کالا یا خدمت، مقدار، واحد، قیمت واحد، تاریخ و محل تحویل',
                en: 'Material or service, quantity, unit, unit price, delivery date and place',
              },
              {
                fa: 'ردیف 10: لوله جداری 9-5/8 اینچ، 150 شاخه × 1,200؛ ردیف 20: لوله جداری 13-3/8 اینچ، 60 شاخه × 1,800؛ جمع 288,000',
                en: 'Line 10: 9-5/8" casing, 150 joints × 1,200; line 20: 13-3/8" casing, 60 joints × 1,800; total 288,000',
              },
            ],
            [
              { fa: 'تخصیص هزینه', en: 'Account assignment' },
              {
                fa: 'انبار، یا یک موضوع هزینه: مرکز هزینه، پروژه (WBS) یا AFE، دستور کار',
                en: 'Stock, or a cost object: cost centre, project (WBS) or AFE, work order',
              },
              { fa: '`AFE-2025-014.02.03` (لوله‌گذاری و سیمان‌کاری چاه AR-11)', en: '`AFE-2025-014.02.03` (casing and cementing of well AR-11)' },
            ],
            [
              { fa: 'شرایط قیمت', en: 'Pricing conditions' },
              {
                fa: 'تخفیف، هزینه حمل، مالیات، فرمول تعدیل قیمت',
                en: 'Discounts, freight, taxes, price-adjustment formula',
              },
              {
                fa: 'قیمت ثابت؛ حمل تا انبار میدان با فروشنده',
                en: 'Fixed price; transport to the Field Warehouse by the seller',
              },
            ],
            [
              { fa: 'متن‌ها و الزامات', en: 'Terms and texts' },
              {
                fa: 'ضمانت کیفیت، خسارت تأخیر، بازرسی، گواهی‌ها، الزامات HSE',
                en: 'Warranty, liquidated damages, inspection, certificates, HSE requirements',
              },
              {
                fa: 'استاندارد API 5CT، گواهی کارخانه نوع 3.1 (EN 10204)، بازرسی شخص ثالث پیش از ارسال',
                en: 'API 5CT, mill certificate type 3.1 (EN 10204), third-party inspection before shipment',
              },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در شرکت‌های نفتی ایران، سفارش خرید و قرارداد طبق **آیین‌نامه معاملات** شرکت صادر می‌شود. این آیین‌نامه خریدها را بر اساس مبلغ به معاملات کوچک، متوسط و بزرگ تقسیم می‌کند و برای هر گروه روش خرید (استعلام، مناقصه محدود یا عمومی) و مرجع تأیید را تعیین می‌کند. در شرکت‌های دولتی این نصاب‌ها تابع قانون برگزاری مناقصات‌اند و هر سال به‌روز می‌شوند؛ ارقام روز را از مقررات جاری بررسی کنید.',
            en: 'In Iranian oil companies, POs and contracts are issued under the company’s **transactions regulation**. It splits purchases by value into small, medium and large transactions and sets the buying method (quotations, limited or public tender) and the approver for each. For state-owned companies the thresholds follow the Tenders Law and are updated every year; check the current figures.',
          },
        },
      ],
    },
    {
      id: 'po-types',
      title: { fa: 'انواع سفارش خرید', en: 'Types of Purchase Order' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'همه خریدها یک شکل ندارند. ERP چند نوع سند خرید دارد و انتخاب نوع درست، کار رسید، تطبیق فاکتور و گزارش هزینه را ساده می‌کند. سه نوع اصلی را در جدول زیر می‌بینید.',
            en: 'Not every purchase looks the same. The ERP offers several purchasing document types, and choosing the right one makes receipt, invoice matching and cost reporting simple. The table shows the three main types.',
          },
        },
        {
          type: 'table',
          head: [
            { fa: 'نوع', en: 'Type' },
            { fa: 'کاربرد', en: 'Used for' },
            { fa: 'نمونه در مسار پترولیوم', en: 'Masar Petroleum example' },
            { fa: 'چه چیزی تحویل را تأیید می‌کند', en: 'What confirms delivery' },
          ],
          rows: [
            [
              { fa: 'سفارش استاندارد', en: 'Standard PO' },
              {
                fa: 'کالای مشخص با مقدار و قیمت معین، معمولاً یک‌باره',
                en: 'Defined goods with a set quantity and price, usually one-off',
              },
              {
                fa: '150 شاخه لوله جداری برای چاه AR-11؛ 2 کارتریج آب‌بند گاز خشک برای کمپرسور K-201',
                en: '150 casing joints for well AR-11; 2 dry gas seal cartridges for compressor K-201',
              },
              { fa: 'رسید کالا (GRN)', en: 'Goods received note (GRN)' },
            ],
            [
              { fa: 'سفارش خدمات', en: 'Service PO' },
              {
                fa: 'کاری که پیمانکار انجام می‌دهد، با نرخ واحد یا مبلغ مقطوع',
                en: 'Work done by a contractor, at unit rates or a lump sum',
              },
              {
                fa: 'سیمان‌کاری جداری سطحی چاه AR-11؛ بازرسی یک مخزن تحت فشار',
                en: 'Cementing the surface casing of AR-11; inspecting a pressure vessel',
              },
              {
                fa: 'برگه ثبت خدمات (SES) که نماینده کارفرما در محل می‌پذیرد',
                en: 'Service entry sheet (SES) accepted by the company’s site representative',
              },
            ],
            [
              { fa: 'سفارش باز', en: 'Blanket PO' },
              {
                fa: 'خریدهای کوچک و تکراری در یک دوره، تا سقف مبلغ معین',
                en: 'Many small, repeated purchases over a period, up to a value limit',
              },
              {
                fa: 'لوازم ایمنی و ابزار کوچک انبار میدان برای 12 ماه، با سقف 30,000',
                en: 'PPE and small tools for the Field Warehouse for 12 months, limit 30,000',
              },
              {
                fa: 'معمولاً خود فاکتور در برابر سقف؛ رسید جداگانه طبق رویه شرکت',
                en: 'Usually the invoice against the limit; a separate receipt if company rules require it',
              },
            ],
          ],
        },
        { type: 'h', text: { fa: 'خرید برای انبار یا تخصیص مستقیم هزینه؟', en: 'Stock purchase or direct charge?' } },
        {
          type: 'compare',
          left: {
            title: { fa: 'خرید برای انبار (Stock)', en: 'Stock purchase' },
            items: [
              {
                fa: 'کالا داده پایه (Material Master) دارد و در انبار نگهداری می‌شود',
                en: 'The item has a material master record and is kept in a warehouse',
              },
              { fa: 'رسید کالا موجودی را زیاد می‌کند (بدهکار موجودی)', en: 'The goods receipt increases inventory (debit Inventory)' },
              {
                fa: 'هزینه بعداً و هنگام حواله به چاه یا مرکز هزینه می‌رسد',
                en: 'The cost reaches a well or cost centre later, when the item is issued',
              },
              {
                fa: 'نمونه: قطعات یدکی حیاتی کمپرسور، لوله‌های رایج، مواد شیمیایی پرمصرف',
                en: 'Examples: critical compressor spares, common tubulars, high-use chemicals',
              },
            ],
          },
          right: {
            title: { fa: 'تخصیص مستقیم (Direct charge)', en: 'Direct charge' },
            items: [
              {
                fa: 'ردیف سفارش یک موضوع هزینه دارد: مرکز هزینه، WBS یا AFE، دستور کار',
                en: 'The PO line carries a cost object: cost centre, WBS or AFE, work order',
              },
              {
                fa: 'رسید کالا یا پذیرش SES مستقیم به همان موضوع هزینه می‌رود',
                en: 'The goods receipt or SES is charged straight to that cost object',
              },
              { fa: 'کالا وارد موجودی قابل‌مصرف عمومی نمی‌شود', en: 'The item never enters general-use stock' },
              {
                fa: 'نمونه: لوله‌ای که فقط برای یک چاه خاص خریده شده، اجاره تجهیزات، هر نوع خدمت',
                en: 'Examples: pipe bought for one specific well, equipment rental, any service',
              },
            ],
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          text: {
            fa: 'قاعده ساده: اگر کالا برای مصرف‌های آینده و نامشخص نگهداری می‌شود، **انبار**؛ اگر از روز اول معلوم است برای کدام چاه، پروژه یا دستور کار است، **تخصیص مستقیم**. انتخاب اشتباه بعداً گزارش هزینه AFE و ادعای بازیافت هزینه را خراب می‌کند.',
            en: 'A simple rule: if the item is held for future, unknown use, buy it **for stock**; if you know from day one which well, project or work order it is for, use a **direct charge**. A wrong choice later spoils the AFE cost report and the cost-recovery claim.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'در **سفارش باز**، به‌جای صدها سفارش کوچک، یک سفارش با سقف مبلغ و مدت مشخص صادر می‌شود. هر فاکتور از سقف کم می‌شود و وقتی جمع فاکتورها به سقف برسد، ERP فاکتور بعدی را متوقف می‌کند. در سفارش باز لوازم انبار میدان (سقف 30,000)، تاکنون سه فاکتور به مبلغ 8,400، 11,250 و 6,900 ثبت شده است:',
            en: 'With a **blanket PO**, instead of hundreds of small orders the company issues one order with a value limit and a validity period. Each invoice uses up part of the limit, and once invoices reach the limit the ERP stops the next one. On the Field Warehouse supplies blanket PO (limit 30,000), three invoices of 8,400, 11,250 and 6,900 have been posted so far:',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'مانده سقف = 30,000 − (8,400 + 11,250 + 6,900) = 30,000 − 26,550 = 3,450',
            en: 'Remaining limit = 30,000 − (8,400 + 11,250 + 6,900) = 30,000 − 26,550 = 3,450',
          },
          note: {
            fa: 'فاکتور بعدی تا 3,450 پذیرفته می‌شود؛ بیش از آن، سفارش باید با تأیید مجاز افزایش یابد.',
            en: 'The next invoice is accepted up to 3,450; beyond that the PO must be increased with proper approval.',
          },
        },
      ],
    },
    {
      id: 'frameworks-services',
      title: {
        fa: 'قرارداد چارچوب، سفارش فراخوان و قرارداد خدمات',
        en: 'Framework Agreements, Call-Offs and Service Contracts',
      },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**قرارداد چارچوب** (Framework Agreement؛ در برخی ERPها Outline Agreement) توافقی برای یک دوره مشخص، مثلاً 12 یا 24 ماه، است که قیمت‌های واحد، شرایط و معمولاً سقف مبلغ یا مقدار را از پیش تعیین می‌کند؛ اما به‌تنهایی دستور تحویل نیست. هر بار که نیاز واقعی پیش می‌آید، یک **سفارش فراخوان** (Call-off یا Release Order) با ارجاع به قرارداد صادر می‌شود و ERP قیمت‌ها را خودکار از قرارداد می‌خواند. شرکت مواد شیمیایی حفاری را از «شیمی حفاری کاوه» با همین روش می‌خرد:',
            en: 'A **framework agreement** (some ERPs call it an outline agreement) is an agreement for a set period, say 12 or 24 months, that fixes unit prices, terms and usually a value or quantity ceiling in advance; on its own it is not an instruction to deliver. Each time a real need arises, a **call-off order** (release order) is issued against the agreement, and the ERP reads the prices from it automatically. Masar Petroleum buys its drilling chemicals from Kaveh Drilling Chemicals this way:',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'قرارداد چارچوب شیمی حفاری کاوه (12 ماه، سقف 600,000) و فراخوان چاه AR-11',
            en: 'Kaveh Drilling Chemicals framework (12 months, ceiling 600,000) and the AR-11 call-off',
          },
          head: [
            { fa: 'کالا', en: 'Item' },
            { fa: 'واحد', en: 'Unit' },
            { fa: 'نرخ قرارداد', en: 'Contract rate' },
            { fa: 'مقدار فراخوان', en: 'Call-off qty' },
            { fa: 'مبلغ', en: 'Value' },
          ],
          rows: [
            [{ fa: 'باریت', en: 'Barite' }, { fa: 'تن', en: 'tonne' }, 260, 100, 26000],
            [{ fa: 'بنتونیت', en: 'Bentonite' }, { fa: 'تن', en: 'tonne' }, 340, 25, 8500],
            [{ fa: 'کلرید پتاسیم (KCl)', en: 'Potassium chloride (KCl)' }, { fa: 'تن', en: 'tonne' }, 500, 21, 10500],
            [{ fa: 'جمع فراخوان', en: 'Call-off total' }, blank, blank, blank, 45000],
          ],
          numericCols: [2, 3, 4],
        },
        {
          type: 'p',
          text: {
            fa: 'پیش از این، دو فراخوان برای چاه‌های AR-09 و AR-10 به مبلغ 210,000 و 185,000 صادر شده بود. با فراخوان AR-11، جمع فراخوان‌ها به 440,000 می‌رسد و 160,000 از سقف قرارداد باقی می‌ماند. ERP این مانده را همیشه نشان می‌دهد و اگر فراخوانی از سقف بگذرد، آن را متوقف می‌کند یا برای تأیید ویژه می‌فرستد.',
            en: 'Two earlier call-offs, for wells AR-09 and AR-10, were worth 210,000 and 185,000. With the AR-11 call-off, total releases reach 440,000 and 160,000 of the ceiling remains. The ERP shows this balance at all times, and if a call-off would exceed the ceiling it blocks it or routes it for special approval.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'چرا قرارداد چارچوب؟', en: 'Why use a framework?' },
          text: {
            fa: 'رقابت یک بار برگزار می‌شود، قیمت‌ها در طول دوره ثابت می‌ماند، زمان تأمین کوتاه می‌شود و هر فراخوان با کد AFE همان چاه صادر می‌شود. بنابراین هزینه هر چاه جدا و قابل ردیابی است و حسابرس می‌تواند هر فراخوان را تا قرارداد و مناقصه اصلی دنبال کند.',
            en: 'Competition happens once, prices stay fixed for the period, lead times shrink, and each call-off carries the AFE of its own well. Each well’s cost is therefore separate and traceable, and an auditor can follow every call-off back to the agreement and the original tender.',
          },
        },
        { type: 'h', text: { fa: 'قرارداد خدمات و برگه ثبت خدمات (SES)', en: 'Service contracts and the service entry sheet (SES)' } },
        {
          type: 'p',
          text: {
            fa: 'در خرید خدمات، چیزی وارد انبار نمی‌شود. به‌جای رسید کالا (GRN)، پیمانکار کار انجام‌شده را در یک **صورت‌وضعیت** یا **برگه کارکرد روزانه** (Field Ticket) گزارش می‌کند. نماینده شرکت در محل، مثلاً سرپرست حفاری روی دکل (Company Man)، آن را با فهرست بهای قرارداد مقایسه و امضا می‌کند. سپس همین کار در ERP به‌صورت **برگه ثبت خدمات** (Service Entry Sheet یا SES) ثبت می‌شود و با **پذیرش خدمات** قطعی می‌شود. پذیرش SES برای خدمات همان نقشی را دارد که GRN برای کالا. جزئیات کامل هر دو سند در درس «رسید کالا (GRN) و برگه ثبت خدمات (SES)» آمده است.',
            en: 'When you buy services, nothing enters the warehouse. Instead of a goods received note (GRN), the contractor reports the work done on a **progress statement** or **daily field ticket**. The company’s site representative, for example the company man on the rig, checks it against the contract rate schedule and signs it. The same work is then entered in the ERP as a **service entry sheet (SES)** and becomes final with **service acceptance**. Accepting an SES does for services what a GRN does for goods. Both documents are covered in full in the lesson on goods received notes (GRN) and service entry sheets (SES).',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'برگه ثبت خدمات (SES) سیمان‌کاری جداری سطحی چاه AR-11، قرارداد خدمات چاه البرز',
            en: 'SES for cementing the surface casing of AR-11, Alborz Well Services contract',
          },
          head: [
            { fa: 'ردیف خدمت', en: 'Service line' },
            { fa: 'مبنا', en: 'Basis' },
            { fa: 'مقدار', en: 'Qty' },
            { fa: 'نرخ', en: 'Rate' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          rows: [
            [{ fa: 'دستگاه سیمان‌کاری و خدمه', en: 'Cementing unit and crew' }, { fa: 'روز', en: 'day' }, 2, 6500, 13000],
            [{ fa: 'سیمان کلاس G', en: 'Class G cement' }, { fa: 'کیسه', en: 'sack' }, 800, 30, 24000],
            [{ fa: 'افزودنی‌ها', en: 'Additives' }, { fa: 'مقطوع', en: 'lump sum' }, 1, 5000, 5000],
            [{ fa: 'تجهیز کارگاه (Mobilisation)', en: 'Mobilisation' }, { fa: 'مقطوع', en: 'lump sum' }, 1, 3000, 3000],
            [{ fa: 'جمع SES', en: 'SES total' }, blank, blank, blank, 45000],
          ],
          numericCols: [2, 3, 4],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: {
            fa: 'فقط آنچه قرارداد اجازه می‌دهد پذیرفته می‌شود. اگر پیمانکار به دلیل خرابی ابزار خودش کاری را تکرار کرده باشد، آن ردیف را تأیید نکنید. هزینه‌ای که طبق قرارداد قابل مطالبه نیست، معمولاً از نظر شرکا و دولت هم قابل بازیافت نیست.',
            en: 'Accept only what the contract allows. If the contractor repeated a job because its own tool failed, do not approve that line. A cost that is not chargeable under the contract is usually not recoverable in the eyes of partners and the government either.',
          },
        },
      ],
    },
    {
      id: 'commercial-terms',
      title: { fa: 'شرایط کلیدی تجاری', en: 'Key Commercial Terms' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'قیمت فقط یکی از شرایط سفارش است. اختلاف‌های بزرگ معمولاً از شرایطی می‌آیند که مبهم نوشته شده‌اند: چه کسی هزینه حمل را می‌دهد؟ پرداخت کی سررسید می‌شود؟ اگر کالا دیر برسد یا خراب باشد چه می‌شود؟ جدول زیر شرایط اصلی را با نمونه‌های مسار پترولیوم نشان می‌دهد. درصدها فرضی و برای آموزش‌اند.',
            en: 'Price is only one term of an order. Big disputes usually come from terms written vaguely: who pays for transport, when payment falls due, what happens if goods arrive late or defective. The table shows the main terms with Masar Petroleum examples. The percentages are illustrative.',
          },
        },
        {
          type: 'table',
          head: [
            { fa: 'شرط', en: 'Term' },
            { fa: 'چه چیزی را روشن می‌کند', en: 'What it settles' },
            { fa: 'نمونه (فرضی)', en: 'Example (illustrative)' },
          ],
          rows: [
            [
              { fa: 'قیمت', en: 'Price' },
              {
                fa: 'قیمت ثابت، نرخ واحد یا قیمت با فرمول تعدیل؛ ارز قرارداد',
                en: 'Fixed price, unit rates or price with an adjustment formula; contract currency',
              },
              {
                fa: 'لوله جداری با قیمت ثابت هر شاخه؛ نرخ‌های قرارداد چارچوب برای 12 ماه ثابت',
                en: 'Casing at a fixed price per joint; framework rates fixed for 12 months',
              },
            ],
            [
              { fa: 'تحویل و اینکوترمز', en: 'Delivery and Incoterms' },
              {
                fa: 'تاریخ و محل تحویل؛ هزینه و ریسک حمل با کیست',
                en: 'Delivery date and place; who bears transport cost and risk',
              },
              {
                fa: 'خرید داخلی: تحویل در انبار میدان؛ خرید وارداتی: یک قاعده اینکوترمز مانند FCA یا CIF',
                en: 'Domestic: delivered to the Field Warehouse; imports: an Incoterms rule such as FCA or CIF',
              },
            ],
            [
              { fa: 'شرایط پرداخت', en: 'Payment terms' },
              { fa: 'کی و چگونه به تأمین‌کننده پرداخت می‌شود', en: 'When and how the supplier is paid' },
              {
                fa: '30 روز پس از فاکتور معتبر و رسید کالا؛ یا 20٪ پیش‌پرداخت در برابر ضمانت‌نامه پیش‌پرداخت',
                en: '30 days after a valid invoice and goods receipt; or a 20% advance against an advance-payment guarantee',
              },
            ],
            [
              { fa: 'ضمانت کیفیت (Warranty)', en: 'Warranty' },
              { fa: 'مدت و راه جبران عیب', en: 'Period and remedy for defects' },
              {
                fa: '12 ماه از نصب، حداکثر 18 ماه از تحویل؛ تعویض یا تعمیر رایگان',
                en: '12 months from installation, at most 18 months from delivery; free repair or replacement',
              },
            ],
            [
              { fa: 'خسارت تأخیر', en: 'Liquidated damages' },
              { fa: 'جبران ازپیش‌توافق‌شده برای دیرکرد', en: 'Pre-agreed compensation for late delivery' },
              {
                fa: '0.5٪ ارزش اقلام دیرکرد برای هر هفته، حداکثر 5٪',
                en: '0.5% of the late items’ value per week, capped at 5%',
              },
            ],
            [
              { fa: 'ضمانت‌نامه‌ها', en: 'Guarantees and bonds' },
              {
                fa: 'تضمین بانکی پیش‌پرداخت و حسن انجام تعهدات',
                en: 'Bank guarantees for the advance and for performance',
              },
              {
                fa: 'ضمانت‌نامه پیش‌پرداخت هم‌مبلغ پیش‌پرداخت؛ ضمانت‌نامه حسن انجام تعهدات',
                en: 'Advance-payment guarantee equal to the advance; performance guarantee',
              },
            ],
            [
              { fa: 'الزامات فنی و HSE', en: 'Technical and HSE requirements' },
              { fa: 'استانداردها، گواهی‌ها، بازرسی، ایمنی', en: 'Standards, certificates, inspection, safety' },
              {
                fa: 'API 5CT برای لوله، گواهی کارخانه، بازرسی شخص ثالث؛ برنامه HSE برای پیمانکاران',
                en: 'API 5CT for pipe, mill certificates, third-party inspection; an HSE plan for contractors',
              },
            ],
          ],
        },
        { type: 'h', text: { fa: 'اینکوترمز به زبان ساده', en: 'Incoterms in plain words' } },
        {
          type: 'p',
          text: {
            fa: '**اینکوترمز** (Incoterms) قواعدی است که اتاق بازرگانی بین‌المللی (ICC) منتشر می‌کند تا با یک کد سه‌حرفی روشن شود که در حمل کالا، **هزینه‌ها** تا کجا با فروشنده است و **ریسک** در چه نقطه‌ای به خریدار منتقل می‌شود. برای نمونه: در **EXW** خریدار کالا را در محل فروشنده تحویل می‌گیرد و تقریباً همه حمل با اوست. در **FCA** فروشنده کالا را در محل تعیین‌شده به حمل‌کننده خریدار می‌سپارد. در **CIF** فروشنده کرایه و بیمه دریایی تا بندر مقصد را می‌پردازد، اما ریسک هنگام بارگیری در بندر مبدأ منتقل می‌شود. در **DAP** فروشنده کالا را تا مقصد می‌رساند و در **DDP** ترخیص و عوارض ورود هم با فروشنده است.',
            en: '**Incoterms** are rules published by the International Chamber of Commerce (ICC) that use a three-letter code to settle how far the **costs** of transport fall on the seller and at what point the **risk** passes to the buyer. For example: under **EXW** the buyer collects the goods at the seller’s premises and handles almost all transport. Under **FCA** the seller hands the goods to the buyer’s carrier at a named place. Under **CIF** the seller pays freight and marine insurance to the destination port, but risk passes when the goods are loaded at the port of shipment. Under **DAP** the seller delivers to the destination, and under **DDP** the seller also handles import clearance and duties.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          text: {
            fa: 'همیشه سه چیز را کنار هم بنویسید: قاعده، محل و نسخه؛ مثلاً `FCA Hamburg Incoterms 2020`. اینکوترمز درباره انتقال مالکیت قانونی کالا یا روش پرداخت چیزی نمی‌گوید؛ این موارد را باید جداگانه در متن قرارداد نوشت.',
            en: 'Always write three things together: the rule, the place and the version, for example `FCA Hamburg Incoterms 2020`. Incoterms say nothing about transfer of legal title or the payment method; those must be written separately in the contract.',
          },
        },
        { type: 'h', text: { fa: 'خسارت تأخیر (Liquidated Damages)', en: 'Liquidated damages (LDs)' } },
        {
          type: 'p',
          text: {
            fa: '**خسارت تأخیر** مبلغی است که از پیش در قرارداد توافق می‌شود و اگر تأمین‌کننده دیر تحویل دهد، از پرداخت‌های او کسر می‌شود؛ بدون اینکه شرکت لازم باشد خسارت واقعی را اثبات کند. معمولاً درصدی از ارزش اقلام دیرکرد به ازای هر هفته است و یک سقف دارد. در حفاری، یک روز توقف دکل می‌تواند بسیار گران‌تر از خود کالا باشد؛ برای همین خسارت تأخیر برای اقلام بحرانی جدی گرفته می‌شود.',
            en: '**Liquidated damages** are an amount agreed in advance in the contract and deducted from the supplier’s payments if it delivers late, without the company having to prove its actual loss. They are usually a percentage of the late items’ value per week, with a cap. In drilling, one day of rig standby can cost far more than the item itself, which is why LDs on critical items are taken seriously.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'خسارت تأخیر = ارزش اقلام دیرکرد × نرخ هفتگی × تعداد هفته‌های تأخیر (حداکثر تا سقف)',
            en: 'LDs = value of late items × weekly rate × weeks of delay (up to the cap)',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'نمونه: سفارش لوله جداری AR-11', en: 'Example: the AR-11 casing order' },
          text: {
            fa: 'ردیف 20 (60 شاخه × 1,800 = 108,000) سه هفته دیر رسید. با نرخ فرضی 0.5٪ در هفته: 108,000 × 0.5٪ × 3 = 1,620. سقف 5٪ برابر 5,400 است و رعایت شده است. ردیف 10 به‌موقع رسیده و خسارتی ندارد. این 1,620 از فاکتور کسر می‌شود و معمولاً از بهای تمام‌شده چاه کم می‌شود (رویه دقیق را سیاست حسابداری شرکت تعیین می‌کند)؛ زیرا هزینه قابل بازیافت، هزینه خالص واقعی است.',
            en: 'Line 20 (60 joints × 1,800 = 108,000) arrived three weeks late. At an illustrative 0.5% per week: 108,000 × 0.5% × 3 = 1,620. The 5% cap is 5,400, so it is not reached. Line 10 arrived on time and attracts no LDs. The 1,620 is deducted from the invoice and is usually credited against the cost of the well (the exact treatment follows the company’s accounting policy), because the recoverable cost is the true net cost.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در ایران تضمین‌ها معمولاً به‌صورت **ضمانت‌نامه بانکی** گرفته می‌شود: ضمانت‌نامه پیش‌پرداخت (هم‌مبلغ پیش‌پرداخت) و ضمانت‌نامه حسن انجام تعهدات. در قراردادهای ارزی، ارز قرارداد، مبنای نرخ تبدیل و بانک عامل را دقیق بنویسید. درصدهای این درس فرضی‌اند؛ رقم واقعی را قرارداد، آیین‌نامه معاملات و مقررات روز تعیین می‌کند.',
            en: 'In Iran, security is usually taken as **bank guarantees**: an advance-payment guarantee (equal to the advance) and a performance guarantee. In foreign-currency contracts, state the contract currency, the exchange-rate basis and the paying bank precisely. The percentages in this lesson are illustrative; the real figures come from the contract, the transactions regulation and current rules.',
          },
        },
      ],
    },
    {
      id: 'changes-approvals',
      title: { fa: 'تغییر سفارش و گردش کار تأیید', en: 'PO Changes and the Approval Workflow' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'هیچ سفارشی پیش از تأیید برای تأمین‌کننده ارسال نمی‌شود. ERP بر اساس **جدول اختیارات معاملات** (Delegation of Authority یا DOA) و مبلغ سفارش، آن را در **گردش کار تأیید** به تأییدکننده مناسب می‌فرستد. تا وقتی تأیید کامل نشده، سفارش «آزاد» نیست: نمی‌توان آن را چاپ یا ارسال کرد و رسید کالا هم روی آن ثبت نمی‌شود.',
            en: 'No order goes to a supplier before it is approved. Based on the **delegation of authority (DOA)** table and the order value, the ERP routes the PO through an **approval workflow** to the right approver. Until approval is complete the PO is not “released”: it cannot be printed or sent, and no goods receipt can be posted against it.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'جدول اختیارات معاملات مسار پترولیوم (ارقام فرضی‌اند)',
            en: 'Masar Petroleum delegation of authority (illustrative figures)',
          },
          head: [
            { fa: 'مبلغ سفارش', en: 'PO value' },
            { fa: 'تأییدکننده', en: 'Approver' },
          ],
          rows: [
            [{ fa: 'تا 10,000', en: 'Up to 10,000' }, { fa: 'سرپرست خرید', en: 'Procurement supervisor' }],
            [{ fa: '10,001 تا 100,000', en: '10,001 to 100,000' }, { fa: 'مدیر خرید', en: 'Procurement manager' }],
            [
              { fa: '100,001 تا 1,000,000', en: '100,001 to 1,000,000' },
              { fa: 'مدیر زنجیره تأمین، با امضای مدیر مالی', en: 'Supply chain director, co-signed by the finance director' },
            ],
            [
              { fa: 'بیش از 1,000,000', en: 'Above 1,000,000' },
              { fa: 'کمیسیون معاملات و مدیرعامل', en: 'Tender committee and the CEO' },
            ],
          ],
        },
        { type: 'h', text: { fa: 'تغییر سفارش پس از ارسال', en: 'Changing a PO after it is sent' } },
        {
          type: 'p',
          text: {
            fa: 'عملیات میدان و پروژه‌ها پیوسته تغییر می‌کنند: مقدار بیشتر، تاریخ تحویل تازه، محل تحویل دیگر. هر تغییر یک **نسخه** تازه از سفارش می‌سازد و ERP ثبت می‌کند چه کسی، چه زمانی، کدام فیلد را از چه مقداری به چه مقداری تغییر داد. اگر تغییر، مبلغ را بیش از حد مجاز بالا ببرد یا سفارش را به رده بالاتری از جدول اختیارات برساند، سفارش دوباره به گردش کار تأیید برمی‌گردد.',
            en: 'Field operations and projects change all the time: more quantity, a new delivery date, a different delivery point. Every change creates a new **version** of the PO, and the ERP records who changed which field, when, and from what to what. If a change raises the value beyond the allowed tolerance or pushes the PO into a higher DOA band, the PO goes back through the approval workflow.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'درخواست تغییر', en: 'Change request' },
              text: {
                fa: 'درخواست‌کننده دلیل تغییر را مکتوب می‌کند؛ مثلاً «عمق نهایی چاه بیشتر شد و 6 شاخه دیگر لازم است».',
                en: 'The requester documents the reason, for example “the well’s final depth increased and 6 more joints are needed”.',
              },
            },
            {
              title: { fa: 'مذاکره و اصلاح', en: 'Negotiate and amend' },
              text: {
                fa: 'خریدار با تأمین‌کننده توافق می‌کند و سفارش را در ERP اصلاح می‌کند؛ نسخه جدید ساخته می‌شود.',
                en: 'The buyer agrees the change with the supplier and amends the PO in the ERP; a new version is created.',
              },
            },
            {
              title: { fa: 'کنترل قاعده تأیید مجدد', en: 'Re-approval check' },
              text: {
                fa: 'ERP بررسی می‌کند آیا افزایش از حد مجاز (مثلاً 5٪) بیشتر است یا رده جدول اختیارات عوض شده است.',
                en: 'The ERP checks whether the increase exceeds the tolerance (say 5%) or the DOA band has changed.',
              },
            },
            {
              title: { fa: 'تأیید و ابلاغ', en: 'Approve and communicate' },
              text: {
                fa: 'در صورت نیاز، تأییدکننده جدید تأیید می‌کند؛ سپس اصلاحیه برای تأمین‌کننده ارسال و پذیرش او ثبت می‌شود.',
                en: 'If required, the new approver signs off; the amendment is then sent to the supplier and its acceptance recorded.',
              },
            },
            {
              title: { fa: 'به‌روزرسانی تعهد', en: 'Commitment updated' },
              text: {
                fa: 'تعهد روی AFE یا مرکز هزینه خودکار به مبلغ جدید تغییر می‌کند و مسئول بودجه آن را می‌بیند.',
                en: 'The commitment on the AFE or cost centre moves to the new value automatically, and the budget owner sees it.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          text: {
            fa: 'فرض کنید مقدار ردیف 20 سفارش لوله AR-11 از 60 به 66 شاخه برسد. افزایش مبلغ 6 × 1,800 = 10,800 است، یعنی 3.75٪ از 288,000؛ و سفارش جدید 298,800 همچنان در رده 100,001 تا 1,000,000 است. با قاعده فرضی «تأیید مجدد اگر افزایش بیش از 5٪ باشد یا رده تأیید عوض شود»، تأیید مجدد لازم نیست؛ اما نسخه جدید ثبت می‌شود و تعهد AFE به اندازه 10,800 بالا می‌رود.',
            en: 'Suppose line 20 of the AR-11 casing order goes from 60 to 66 joints. The increase is 6 × 1,800 = 10,800, or 3.75% of 288,000, and the new total of 298,800 stays in the 100,001 to 1,000,000 band. Under an illustrative rule “re-approve if the increase exceeds 5% or the approval band changes”, no re-approval is needed; but a new version is recorded and the AFE commitment rises by 10,800.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'سفارش پس از فاکتور', en: 'After-the-fact POs' },
          text: {
            fa: 'وقتی کالا یا کار اول تحویل شود و سفارش بعد از رسیدن فاکتور ساخته شود، کنترل تأیید عملاً دور زده شده است. در اضطرار واقعی، مثلاً توقف ایستگاه تقویت فشار، رویه **خرید اضطراری** اجازه می‌دهد تأیید شفاهی ثبت شود و سفارش ظرف مدت کوتاهی صادر شود. در غیر این صورت، سفارش پس از فاکتور یکی از رایج‌ترین ایرادهای حسابرسی بازیافت هزینه است.',
            en: 'When goods or work are delivered first and the PO is created after the invoice arrives, the approval control has effectively been bypassed. In a genuine emergency, such as a compressor station shutdown, an **emergency purchase** procedure allows a recorded verbal approval and a PO issued within a short window. Otherwise, after-the-fact POs are one of the most common findings in cost-recovery audits.',
          },
        },
      ],
    },
    {
      id: 'erp-commitments',
      title: {
        fa: 'در ERP: سفارش، تعهد و گزارش هزینه AFE',
        en: 'In the ERP: POs, Commitments and the AFE Cost Report',
      },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در ERP، سفارش خرید یک **سند تراکنشی** است که روی چند **داده پایه** بنا می‌شود. داده پایه یک بار ساخته و بارها استفاده می‌شود؛ سند تراکنشی هر بار برای یک رویداد مشخص صادر می‌شود.',
            en: 'In the ERP a PO is a **transaction document** built on several **master data** records. Master data is created once and used many times; a transaction document is created for one specific event.',
          },
        },
        {
          type: 'table',
          head: [
            { fa: 'جزء', en: 'Element' },
            { fa: 'در ERP چه نقشی دارد', en: 'Role in the ERP' },
            { fa: 'نمونه مسار پترولیوم', en: 'Masar Petroleum example' },
          ],
          rows: [
            [
              { fa: 'داده پایه تأمین‌کننده', en: 'Vendor master' },
              {
                fa: 'نام، شناسه مالیاتی، حساب بانکی، شرایط پرداخت، وضعیت تأیید صلاحیت',
                en: 'Name, tax ID, bank account, payment terms, qualification status',
              },
              { fa: 'لوله‌گستر خلیج، تأمین‌کننده تأییدشده لوله', en: 'Gulf Tubulars, an approved tubular supplier' },
            ],
            [
              { fa: 'داده پایه کالا', en: 'Material master' },
              {
                fa: 'شرح، واحد، گروه ارزش‌گذاری، انبارشدنی یا نه',
                en: 'Description, unit, valuation class, stock or non-stock',
              },
              { fa: 'لوله جداری 9-5/8 اینچ، API 5CT', en: '9-5/8" casing, API 5CT' },
            ],
            [
              { fa: 'قرارداد و سوابق قیمت', en: 'Contracts and price records' },
              { fa: 'نرخ‌های قرارداد چارچوب و مدت اعتبار', en: 'Framework rates and validity' },
              { fa: 'قرارداد چارچوب شیمی حفاری کاوه', en: 'Kaveh Drilling Chemicals framework' },
            ],
            [
              { fa: 'موضوع‌های هزینه', en: 'Cost objects' },
              { fa: 'مرکز هزینه، WBS یا AFE، دستور کار', en: 'Cost centre, WBS or AFE, work order' },
              {
                fa: '`AFE-2025-014` (چاه AR-11) با عنصرهایی مثل `AFE-2025-014.02.03` لوله‌گذاری و سیمان‌کاری؛ مرکز هزینه ایستگاه تقویت فشار `CC-ARY-CMP`؛ نشان بازیافت `R` یا `N` و دسته هزینه (توسعه، عملیات)',
                en: '`AFE-2025-014` (well AR-11) with elements such as `AFE-2025-014.02.03` casing and cementing; compressor station cost centre `CC-ARY-CMP`; recoverable flag `R` or `N` and cost category (Development, Operating)',
              },
            ],
            [
              { fa: 'سند تراکنشی', en: 'Transaction document' },
              {
                fa: 'سفارش با ردیف‌ها، تخصیص هزینه، شرایط و تاریخچه نسخه‌ها',
                en: 'PO with lines, account assignment, terms and version history',
              },
              { fa: '`PO-45007` لوله جداری AR-11', en: '`PO-45007` AR-11 casing' },
            ],
          ],
        },
        {
          type: 'table',
          caption: { fa: 'چه کسی چه می‌کند', en: 'Who does what' },
          head: [
            { fa: 'نقش', en: 'Role' },
            { fa: 'کار در ERP', en: 'Task in the ERP' },
          ],
          rows: [
            [
              { fa: 'درخواست‌کننده یا برنامه‌ریز', en: 'Requester or planner' },
              { fa: 'درخواست خرید را با موضوع هزینه درست ثبت می‌کند', en: 'Creates the purchase requisition with the right cost object' },
            ],
            [
              { fa: 'خریدار', en: 'Buyer' },
              {
                fa: 'از درخواست تأییدشده یا قرارداد، سفارش می‌سازد و شرایط را تنظیم می‌کند',
                en: 'Creates the PO from the approved requisition or contract and sets the terms',
              },
            ],
            [
              { fa: 'تأییدکننده (طبق DOA)', en: 'Approver (per DOA)' },
              { fa: 'سفارش را در گردش کار تأیید یا رد می‌کند', en: 'Approves or rejects the PO in the workflow' },
            ],
            [
              { fa: 'کنترل پروژه یا مسئول AFE', en: 'Cost controller or AFE owner' },
              { fa: 'تعهدات و هزینه‌ها را با بودجه مقایسه می‌کند', en: 'Monitors commitments and actuals against budget' },
            ],
            [
              { fa: 'تأمین‌کننده', en: 'Supplier' },
              { fa: 'پذیرش سفارش را اعلام می‌کند (امضا یا درگاه تأمین‌کنندگان)', en: 'Acknowledges the PO (signed copy or supplier portal)' },
            ],
          ],
        },
        { type: 'h', text: { fa: 'سفارش خرید در دفتر کل چه ثبتی دارد؟', en: 'What does a PO post to the general ledger?' } },
        {
          type: 'p',
          text: {
            fa: '**هیچ.** سفارش خرید یک تعهد آینده است، نه یک رویداد مالی: هنوز کالایی دریافت نشده و بدهی‌ای پدید نیامده است. پس ERP هیچ سند حسابداری در دفتر کل ثبت نمی‌کند. اما در ماژول پروژه و کنترل هزینه، مبلغ سفارش به‌عنوان **تعهد** (Commitment) روی AFE یا مرکز هزینه می‌نشیند تا مدیر پروژه بداند این بخش از بودجه دیگر آزاد نیست. ثبت خودکار در دفتر کل در لحظه **رسید کالا** یا **پذیرش SES** انجام می‌شود و همان لحظه تعهد کم و هزینه واقعی زیاد می‌شود:',
            en: '**Nothing.** A PO is a future commitment, not a financial event: no goods have been received and no liability exists yet. So the ERP posts no accounting document to the general ledger. In the project and cost-control module, however, the PO value is recorded as a **commitment** on the AFE or cost centre, so the project manager knows that part of the budget is no longer free. The automatic general-ledger posting happens at **goods receipt** or **SES approval**, and at that moment the commitment falls and the actual cost rises:',
          },
        },
        {
          type: 'journal',
          title: {
            fa: 'ثبت‌های خودکار ERP روی AFE-2025-014 (تخصیص مستقیم)',
            en: 'Automatic ERP postings on AFE-2025-014 (direct charge)',
          },
          entries: [
            {
              date: { fa: 'رسید ردیف 10 لوله در انبار میدان', en: 'Receipt of casing line 10 at the Field Warehouse' },
              lines: [
                { account: ac.aucAR11, debit: 180000 },
                { account: ac.grir, credit: 180000 },
              ],
              memo: {
                fa: '150 شاخه × 1,200. تعهد AFE به اندازه 180,000 کم و هزینه واقعی به همین اندازه زیاد می‌شود.',
                en: '150 joints × 1,200. The AFE commitment falls by 180,000 and the actual cost rises by the same amount.',
              },
            },
            {
              date: { fa: 'پذیرش SES سیمان‌کاری', en: 'Cementing SES accepted' },
              lines: [
                { account: ac.aucAR11, debit: 45000 },
                { account: ac.grir, credit: 45000 },
              ],
              memo: {
                fa: 'SES به مبلغ 45,000 خدمات چاه البرز؛ هزینه حفاری چاه توسعه‌ای سرمایه‌ای است و در دارایی در جریان ساخت جمع می‌شود.',
                en: 'Alborz Well Services SES of 45,000; development-well drilling cost is capitalised in assets under construction.',
              },
            },
          ],
        },
        {
          type: 'table',
          caption: {
            fa: 'گزارش هزینه AFE-2025-014 پیش از این دو رویداد (بودجه مصوب 2,500,000؛ ارقام فرضی)',
            en: 'AFE-2025-014 cost report before these two events (approved budget 2,500,000; illustrative)',
          },
          head: [
            { fa: 'عنصر هزینه', en: 'Cost element' },
            { fa: 'بودجه', en: 'Budget' },
            { fa: 'واقعی', en: 'Actual' },
            { fa: 'تعهد', en: 'Commitment' },
            { fa: 'مانده', en: 'Remaining' },
          ],
          rows: [
            [{ fa: 'دکل و خدمات حفاری', en: 'Rig and drilling services' }, 1400000, 520000, 610000, 270000],
            [{ fa: 'لوله جداری و مغزی', en: 'Casing and tubulars' }, 420000, 0, 288000, 132000],
            [{ fa: 'سیال و مواد شیمیایی حفاری', en: 'Drilling fluids and chemicals' }, 180000, 75000, 45000, 60000],
            [{ fa: 'سیمان‌کاری و خدمات چاه', en: 'Cementing and well services' }, 260000, 25000, 120000, 115000],
            [{ fa: 'سایر (حمل، بازرسی، آزمایش)', en: 'Other (logistics, inspection, testing)' }, 240000, 40000, 30000, 170000],
            [{ fa: 'جمع', en: 'Total' }, 2500000, 660000, 1093000, 747000],
          ],
          numericCols: [1, 2, 3, 4],
        },
        {
          type: 'formula',
          text: {
            fa: 'مانده AFE = بودجه − هزینه واقعی − تعهدات = 2,500,000 − 660,000 − 1,093,000 = 747,000',
            en: 'AFE remaining = Budget − Actuals − Commitments = 2,500,000 − 660,000 − 1,093,000 = 747,000',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'پس از رسید ردیف 10 (180,000) و پذیرش SES سیمان‌کاری (45,000)، هزینه واقعی از 660,000 به 885,000 می‌رسد و تعهدات از 1,093,000 به 868,000 کاهش می‌یابد. مانده AFE همان 747,000 می‌ماند؛ چون پول فقط از ستون «تعهد» به ستون «واقعی» رفته است، نه اینکه پول تازه‌ای خرج شده باشد. مانده فقط وقتی تغییر می‌کند که تعهد تازه‌ای ایجاد شود، سفارشی کاهش یابد یا مبلغ واقعی با مبلغ سفارش فرق کند.',
            en: 'After the line 10 receipt (180,000) and the cementing SES (45,000), actuals rise from 660,000 to 885,000 and commitments fall from 1,093,000 to 868,000. The AFE remaining stays at 747,000, because money only moved from the “commitment” column to the “actual” column; nothing new was spent. The remaining amount changes only when a new commitment is created, a PO is reduced, or the actual amount differs from the PO amount.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'پیوند با بازیافت هزینه', en: 'Link to cost recovery' },
          text: {
            fa: 'چون هر ردیف سفارش کد AFE-2025-014 دارد، هزینه‌ها از همان ابتدا روی چاه درست می‌نشینند. در قرارداد نفتی، این هزینه‌ها بعداً در صورت هزینه‌های قابل بازیافت ادعا می‌شوند و حسابرس دولت یا شرکا هر رقم را تا سفارش، رسید و فاکتور آن دنبال می‌کند. کد درست در سفارش یعنی ادعای درست در صورت بازیافت هزینه.',
            en: 'Because every PO line carries AFE-2025-014, costs land on the right well from the start. Under the petroleum contract these costs are later claimed in the cost-recovery statement, and the government’s or partners’ auditors trace every figure back to its PO, receipt and invoice. The right code on the PO means the right claim in the cost-recovery statement.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          text: {
            fa: 'گزارش تعهدات یک هشدار زودهنگام است. اگر جمع هزینه واقعی و تعهدات به بودجه نزدیک شود، مدیر پروژه باید پیش از صدور سفارش بعدی **AFE تکمیلی** (Supplementary AFE) بگیرد؛ نه بعد از اینکه پول خرج شد. در مشارکت، AFE تکمیلی معمولاً به تأیید شرکا هم نیاز دارد.',
            en: 'The commitment report is an early warning. If actuals plus commitments approach the budget, the project manager must obtain a **supplementary AFE** before issuing the next PO, not after the money is spent. In a joint venture a supplementary AFE usually needs partner approval as well.',
          },
        },
      ],
    },
    {
      id: 'practice',
      title: { fa: 'اشتباه‌های رایج و تمرین', en: 'Common Mistakes and Practice' },
      blocks: [
        { type: 'h', text: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' } },
        {
          type: 'list',
          items: [
            {
              fa: '**کار بدون سفارش**: شروع کار با توافق تلفنی یا ایمیلی. راه درست: اول سفارش تأییدشده، بعد تحویل؛ و در اضطرار، رویه مستند خرید اضطراری.',
              en: '**Work without a PO**: starting on a phone or email agreement. Fix: approved PO first, delivery second; in an emergency, the documented emergency procedure.',
            },
            {
              fa: '**کد هزینه اشتباه یا خالی**: سفارش برای چاه AR-11 با کد AR-10 یا بدون AFE. راه درست: فیلد تخصیص هزینه اجباری و بررسی آن در گردش کار تأیید.',
              en: '**Wrong or missing cost code**: an AR-11 order coded to AR-10 or to no AFE. Fix: make account assignment mandatory and check it in the approval workflow.',
            },
            {
              fa: '**قرارداد چارچوب بدون پایش سقف**: فراخوان‌ها از سقف می‌گذرند و کسی متوجه نمی‌شود. راه درست: کنترل خودکار سقف و گزارش ماهانه مصرف قرارداد.',
              en: '**No ceiling monitoring on frameworks**: call-offs exceed the ceiling unnoticed. Fix: automatic ceiling control and a monthly contract-consumption report.',
            },
            {
              fa: '**شرایط مبهم**: نبودن قاعده، محل و نسخه اینکوترمز، یا نبودن بند خسارت تأخیر و گواهی‌های لازم. راه درست: شرایط عمومی استاندارد شرکت به‌عنوان متن پیش‌فرض هر سفارش.',
              en: '**Vague terms**: no Incoterms rule, place and version, or no LD clause and certificate list. Fix: the company’s standard terms as the default text of every PO.',
            },
            {
              fa: '**پذیرش SES بدون بررسی**: امضا و پذیرش برگه ثبت خدمات بدون مقایسه با برگه کارکرد روزانه و فهرست بهای قرارداد. راه درست: بررسی ردیف‌به‌ردیف و رد ردیف‌های غیرقابل مطالبه.',
              en: '**Rubber-stamping SES**: signing without checking the field tickets and contract rates. Fix: review line by line and reject non-chargeable lines.',
            },
            {
              fa: '**تغییر بدون نسخه و تأیید**: افزایش مقدار با یک تماس تلفنی. راه درست: هر تغییر در ERP، با دلیل مکتوب و تأیید مجدد در صورت نیاز.',
              en: '**Changes outside the system**: increasing quantity by phone. Fix: every change in the ERP, with a written reason and re-approval where required.',
            },
          ],
        },
        {
          type: 'exercise',
          title: { fa: 'تمرین 1: کدام نوع سند خرید؟', en: 'Exercise 1: Which purchasing document?' },
          difficulty: 'easy',
          problem: {
            fa: 'برای هر نیاز زیر در مسار پترولیوم، نوع سند خرید (سفارش استاندارد، سفارش خدمات، سفارش باز، یا فراخوان از قرارداد چارچوب) و نوع تخصیص هزینه (انبار یا موضوع هزینه مشخص) را تعیین کنید.',
            en: 'For each Masar Petroleum need below, choose the purchasing document (standard PO, service PO, blanket PO, or call-off from a framework agreement) and the account assignment (stock or a specific cost object).',
          },
          given: {
            head: [
              { fa: 'نیاز', en: 'Need' },
              { fa: 'شرح', en: 'Description' },
            ],
            rows: [
              [
                { fa: 'الف', en: 'a' },
                {
                  fa: '2 کارتریج آب‌بند گاز خشک برای کمپرسور K-201 که به‌عنوان قطعه یدکی حیاتی در انبار مرکزی نگهداری می‌شوند',
                  en: '2 dry gas seal cartridges for compressor K-201, held as critical spares in the Central Warehouse',
                },
              ],
              [
                { fa: 'ب', en: 'b' },
                {
                  fa: 'نمودارگیری (Wireline Logging) چاه AR-11 با نرخ‌های قرارداد خدمات موجود با خدمات چاه البرز',
                  en: 'Wireline logging of well AR-11 at the rates of the existing Alborz Well Services contract',
                },
              ],
              [
                { fa: 'ج', en: 'c' },
                {
                  fa: 'دستکش، عینک ایمنی و ابزار دستی کوچک برای انبار میدان در 12 ماه آینده',
                  en: 'Gloves, safety glasses and small hand tools for the Field Warehouse over the next 12 months',
                },
              ],
              [
                { fa: 'د', en: 'd' },
                {
                  fa: 'باریت و بنتونیت برای چاه AR-12 با نرخ‌های قرارداد چارچوب شیمی حفاری کاوه',
                  en: 'Barite and bentonite for well AR-12 at the Kaveh Drilling Chemicals framework rates',
                },
              ],
            ],
          },
          hint: {
            fa: 'دو پرسش بپرسید: آیا کالاست یا خدمت؟ و آیا از روز اول معلوم است برای کدام چاه یا مرکز هزینه است؟',
            en: 'Ask two questions: is it goods or a service? And do you know from day one which well or cost centre it is for?',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'نیاز', en: 'Need' },
                { fa: 'سند خرید', en: 'Document' },
                { fa: 'تخصیص هزینه', en: 'Account assignment' },
                { fa: 'دلیل', en: 'Reason' },
              ],
              rows: [
                [
                  { fa: 'الف', en: 'a' },
                  { fa: 'سفارش استاندارد', en: 'Standard PO' },
                  { fa: 'انبار (انبار مرکزی)', en: 'Stock (Central Warehouse)' },
                  {
                    fa: 'کالای مشخص؛ برای مصرف آینده نگهداری می‌شود و هنگام حواله به دستور کار کمپرسور هزینه می‌شود',
                    en: 'Defined goods held for future use; expensed when issued to a compressor work order',
                  },
                ],
                [
                  { fa: 'ب', en: 'b' },
                  { fa: 'فراخوان خدمات از قرارداد موجود', en: 'Service call-off under the contract' },
                  { fa: '`AFE-2025-014`', en: '`AFE-2025-014`' },
                  {
                    fa: 'خدمت است و با SES پذیرفته می‌شود؛ از ابتدا معلوم است برای چاه AR-11 است',
                    en: 'A service confirmed by SES; clearly for well AR-11 from the start',
                  },
                ],
                [
                  { fa: 'ج', en: 'c' },
                  { fa: 'سفارش باز با سقف مبلغ', en: 'Blanket PO with a value limit' },
                  { fa: 'مرکز هزینه عملیات میدان', en: 'Field operations cost centre' },
                  {
                    fa: 'خریدهای کوچک و تکراری؛ صدها سفارش جداگانه به‌صرفه نیست',
                    en: 'Small repeated purchases; hundreds of separate POs are not worth it',
                  },
                ],
                [
                  { fa: 'د', en: 'd' },
                  { fa: 'فراخوان از قرارداد چارچوب', en: 'Call-off from the framework' },
                  { fa: '`AFE-2026-014`', en: '`AFE-2026-014`' },
                  {
                    fa: 'قیمت‌ها از پیش در قرارداد تعیین شده‌اند؛ هر فراخوان کد چاه خودش را دارد',
                    en: 'Prices are already fixed in the agreement; each call-off carries its own well code',
                  },
                ],
              ],
            },
          ],
          answer: {
            fa: 'الف: سفارش استاندارد برای انبار؛ ب: فراخوان خدمات با SES روی AFE-2025-014؛ ج: سفارش باز روی مرکز هزینه میدان؛ د: فراخوان قرارداد چارچوب روی AFE-2026-014.',
            en: 'a: standard PO for stock; b: service call-off with SES on AFE-2025-014; c: blanket PO on the field cost centre; d: framework call-off on AFE-2026-014.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تمرین 2: محاسبه خسارت تأخیر', en: 'Exercise 2: Calculating liquidated damages' },
          difficulty: 'medium',
          problem: {
            fa: 'مسار پترولیوم برای پروژه ارتقای ایستگاه تقویت فشار (WBS `AFE-2026-021`) سفارشی دو ردیفی به تأمین‌کننده داده است. بند خسارت تأخیر: 0.5٪ ارزش ردیف دیرکرد به ازای هر هفته کامل، حداکثر 5٪ ارزش همان ردیف (فرضی). (الف) خسارت هر ردیف و جمع آن را حساب کنید. (ب) هزینه خالص قابل بازیافت این سفارش چقدر است؟',
            en: 'For the compressor station upgrade project (WBS `AFE-2026-021`) Masar Petroleum placed a two-line PO. LD clause: 0.5% of the late line’s value per full week, capped at 5% of that line’s value (illustrative). (a) Calculate the LDs per line and in total. (b) What is the net recoverable cost of this PO?',
          },
          given: {
            head: [
              { fa: 'ردیف', en: 'Line' },
              { fa: 'شرح', en: 'Description' },
              { fa: 'ارزش', en: 'Value' },
              { fa: 'هفته‌های تأخیر', en: 'Weeks late' },
            ],
            rows: [
              [10, { fa: '2 الکتروموتور فن کولر گاز × 18,000', en: '2 gas-cooler fan motors × 18,000' }, 36000, 4],
              [20, { fa: 'تابلوی کنترل کمپرسور', en: 'Compressor control panel' }, 64000, 15],
            ],
            numericCols: [0, 2, 3],
          },
          hint: {
            fa: 'برای هر ردیف، اول خسارت را بدون سقف حساب کنید و بعد با سقف 5٪ مقایسه کنید.',
            en: 'For each line, compute the LDs without the cap first, then compare with the 5% cap.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'ردیف 10', en: 'Line 10' },
                  text: {
                    fa: '36,000 × 0.5٪ × 4 = 720. سقف: 36,000 × 5٪ = 1,800. چون 720 کمتر از سقف است، خسارت 720.',
                    en: '36,000 × 0.5% × 4 = 720. Cap: 36,000 × 5% = 1,800. 720 is below the cap, so LDs are 720.',
                  },
                },
                {
                  title: { fa: 'ردیف 20', en: 'Line 20' },
                  text: {
                    fa: '64,000 × 0.5٪ × 15 = 4,800. سقف: 64,000 × 5٪ = 3,200. چون 4,800 از سقف بیشتر است، خسارت به 3,200 محدود می‌شود.',
                    en: '64,000 × 0.5% × 15 = 4,800. Cap: 64,000 × 5% = 3,200. 4,800 exceeds the cap, so LDs are limited to 3,200.',
                  },
                },
                {
                  title: { fa: 'جمع و هزینه خالص', en: 'Total and net cost' },
                  text: {
                    fa: 'جمع خسارت = 720 + 3,200 = 3,920. ارزش سفارش 36,000 + 64,000 = 100,000 است؛ هزینه خالص = 100,000 − 3,920 = 96,080. همین رقم خالص روی WBS می‌نشیند و قابل ادعا در بازیافت هزینه است.',
                    en: 'Total LDs = 720 + 3,200 = 3,920. PO value is 36,000 + 64,000 = 100,000; net cost = 100,000 − 3,920 = 96,080. This net figure stays on the WBS and is what can be claimed for cost recovery.',
                  },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'سقف خسارت تأخیر، تأمین‌کننده را در برابر جریمه بی‌پایان حفظ می‌کند؛ اما تأخیر 15 هفته‌ای یک تابلوی کنترل نشان می‌دهد پیگیری (Expediting) این سفارش ضعیف بوده است.',
                en: 'The LD cap protects the supplier from unlimited penalties, but a 15-week delay on a control panel shows that expediting on this order was weak.',
              },
            },
          ],
          answer: {
            fa: 'خسارت: 720 + 3,200 = 3,920؛ هزینه خالص قابل بازیافت 96,080.',
            en: 'LDs: 720 + 3,200 = 3,920; net recoverable cost 96,080.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تمرین 3: فراخوان و سقف قرارداد چارچوب', en: 'Exercise 3: Call-offs and the framework ceiling' },
          difficulty: 'medium',
          problem: {
            fa: 'قرارداد چارچوب شیمی حفاری کاوه سقف 600,000 دارد و تاکنون 440,000 از آن فراخوان شده است (AR-09، AR-10 و AR-11). (الف) مبلغ فراخوان چاه AR-12 را با نرخ‌های قرارداد حساب کنید. (ب) مانده سقف پس از آن چقدر است؟ (ج) برنامه‌ریز می‌خواهد برای سیال تکمیل چاه AR-12 فراخوان دیگری به مبلغ 112,000 بدهد. ERP چه می‌کند و راه درست چیست؟',
            en: 'The Kaveh Drilling Chemicals framework has a ceiling of 600,000, of which 440,000 has been called off (AR-09, AR-10 and AR-11). (a) Calculate the AR-12 call-off at contract rates. (b) What is the remaining ceiling afterwards? (c) The planner wants another call-off of 112,000 for AR-12 completion fluids. What does the ERP do, and what is the right course of action?',
          },
          given: {
            head: [
              { fa: 'کالا', en: 'Item' },
              { fa: 'نرخ قرارداد (هر تن)', en: 'Contract rate (per tonne)' },
              { fa: 'مقدار AR-12 (تن)', en: 'AR-12 quantity (tonnes)' },
            ],
            rows: [
              [{ fa: 'باریت', en: 'Barite' }, 260, 120],
              [{ fa: 'بنتونیت', en: 'Bentonite' }, 340, 40],
              [{ fa: 'کلرید پتاسیم', en: 'Potassium chloride' }, 500, 30],
            ],
            numericCols: [1, 2],
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'کالا', en: 'Item' },
                { fa: 'محاسبه', en: 'Calculation' },
                { fa: 'مبلغ', en: 'Value' },
              ],
              rows: [
                [{ fa: 'باریت', en: 'Barite' }, { fa: '120 × 260', en: '120 × 260' }, 31200],
                [{ fa: 'بنتونیت', en: 'Bentonite' }, { fa: '40 × 340', en: '40 × 340' }, 13600],
                [{ fa: 'کلرید پتاسیم', en: 'Potassium chloride' }, { fa: '30 × 500', en: '30 × 500' }, 15000],
                [{ fa: 'فراخوان AR-12', en: 'AR-12 call-off' }, blank, 59800],
              ],
              numericCols: [2],
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'مانده سقف', en: 'Remaining ceiling' },
                  text: {
                    fa: 'پیش از فراخوان: 600,000 − 440,000 = 160,000. پس از فراخوان: 160,000 − 59,800 = 100,200.',
                    en: 'Before the call-off: 600,000 − 440,000 = 160,000. After it: 160,000 − 59,800 = 100,200.',
                  },
                },
                {
                  title: { fa: 'فراخوان دوم', en: 'Second call-off' },
                  text: {
                    fa: '112,000 − 100,200 = 11,800 بیش از سقف است؛ ERP فراخوان را متوقف می‌کند یا برای تأیید ویژه می‌فرستد.',
                    en: '112,000 − 100,200 = 11,800 over the ceiling; the ERP blocks the call-off or routes it for special approval.',
                  },
                },
                {
                  title: { fa: 'راه درست', en: 'Right course of action' },
                  text: {
                    fa: 'یا اصلاحیه قرارداد برای افزایش سقف با تأیید مرجع مجاز طبق جدول اختیارات گرفته شود، یا مازاد از مسیر خرید رقابتی تازه تأمین شود. شکستن نیاز به چند سفارش کوچک برای دور زدن سقف (خرد کردن معامله) ممنوع است.',
                    en: 'Either amend the agreement to raise the ceiling with approval at the right DOA level, or source the excess through a new competitive purchase. Splitting the need into small orders to get around the ceiling is prohibited.',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: 'فراخوان AR-12: 59,800؛ مانده سقف 100,200؛ فراخوان 112,000 به اندازه 11,800 از سقف بیشتر است و به اصلاحیه قرارداد نیاز دارد.',
            en: 'AR-12 call-off: 59,800; remaining ceiling 100,200; the 112,000 call-off exceeds the ceiling by 11,800 and needs a contract amendment.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تمرین 4: به‌روزرسانی گزارش تعهدات AFE', en: 'Exercise 4: Updating the AFE commitment report' },
          difficulty: 'hard',
          problem: {
            fa: 'گزارش AFE-2025-014 پس از رسید ردیف 10 لوله و پذیرش SES سیمان‌کاری این است: بودجه 2,500,000؛ واقعی 885,000؛ تعهد 868,000؛ مانده 747,000. چهار رویداد زیر به ترتیب رخ می‌دهد. پس از هر رویداد، واقعی، تعهد و مانده را به‌روز کنید و ثبت‌های خودکار دفتر کل را بنویسید.',
            en: 'After the line 10 casing receipt and the cementing SES, AFE-2025-014 shows: budget 2,500,000; actual 885,000; commitment 868,000; remaining 747,000. The four events below happen in order. After each one, update actual, commitment and remaining, and write the automatic general-ledger entries.',
          },
          given: {
            head: [
              { fa: 'رویداد', en: 'Event' },
              { fa: 'شرح', en: 'Description' },
            ],
            rows: [
              [
                { fa: 'الف', en: 'a' },
                { fa: 'سفارش خدمات آزمایش چاه به مبلغ 60,000 تأیید می‌شود', en: 'A well-testing service PO of 60,000 is approved' },
              ],
              [
                { fa: 'ب', en: 'b' },
                { fa: 'ردیف 20 لوله جداری (60 شاخه × 1,800) در انبار میدان رسید می‌شود', en: 'Casing line 20 (60 joints × 1,800) is received at the Field Warehouse' },
              ],
              [
                { fa: 'ج', en: 'c' },
                {
                  fa: 'دکل دو روز زودتر آزاد می‌شود و سفارش دکل 50,000 کاهش می‌یابد',
                  en: 'The rig is released two days early and the rig PO is reduced by 50,000',
                },
              ],
              [
                { fa: 'د', en: 'd' },
                {
                  fa: 'SES خدمات Mud Logging به مبلغ 18,000 روی سفارش موجود تأیید می‌شود',
                  en: 'An SES of 18,000 for mud-logging services is accepted against an existing PO',
                },
              ],
            ],
          },
          hint: {
            fa: 'سفارش جدید فقط تعهد می‌سازد؛ رسید و SES تعهد را به واقعی منتقل می‌کنند؛ کاهش سفارش تعهد را کم و مانده را زیاد می‌کند.',
            en: 'A new PO only creates a commitment; receipts and SES move commitment to actual; reducing a PO lowers the commitment and raises the remaining amount.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'پس از رویداد', en: 'After event' },
                { fa: 'واقعی', en: 'Actual' },
                { fa: 'تعهد', en: 'Commitment' },
                { fa: 'مانده', en: 'Remaining' },
              ],
              rows: [
                [{ fa: 'شروع', en: 'Start' }, 885000, 868000, 747000],
                [{ fa: 'الف: سفارش جدید', en: 'a: new PO' }, 885000, 928000, 687000],
                [{ fa: 'ب: رسید ردیف 20', en: 'b: line 20 receipt' }, 993000, 820000, 687000],
                [{ fa: 'ج: کاهش سفارش دکل', en: 'c: rig PO reduced' }, 993000, 770000, 737000],
                [{ fa: 'د: پذیرش SES', en: 'd: SES accepted' }, 1011000, 752000, 737000],
              ],
              numericCols: [1, 2, 3],
            },
            {
              type: 'journal',
              title: { fa: 'ثبت‌های خودکار دفتر کل', en: 'Automatic general-ledger entries' },
              entries: [
                {
                  date: { fa: 'رویداد ب', en: 'Event b' },
                  lines: [
                    { account: ac.aucAR11, debit: 108000 },
                    { account: ac.grir, credit: 108000 },
                  ],
                  memo: { fa: 'رسید 60 شاخه × 1,800.', en: 'Receipt of 60 joints × 1,800.' },
                },
                {
                  date: { fa: 'رویداد د', en: 'Event d' },
                  lines: [
                    { account: ac.aucAR11, debit: 18000 },
                    { account: ac.grir, credit: 18000 },
                  ],
                  memo: { fa: 'پذیرش SES خدمات Mud Logging.', en: 'Mud-logging SES accepted.' },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              text: {
                fa: 'رویدادهای الف و ج هیچ ثبتی در دفتر کل ندارند؛ فقط ستون تعهد را تغییر می‌دهند. کنترل نهایی: 2,500,000 − 1,011,000 − 752,000 = 737,000.',
                en: 'Events a and c post nothing to the general ledger; they only change the commitment column. Final check: 2,500,000 − 1,011,000 − 752,000 = 737,000.',
              },
            },
          ],
          answer: {
            fa: 'واقعی 1,011,000؛ تعهد 752,000؛ مانده 737,000؛ فقط رویدادهای ب و د ثبت دفتر کل دارند.',
            en: 'Actual 1,011,000; commitment 752,000; remaining 737,000; only events b and d post to the general ledger.',
          },
        },
      ],
    },
    {
      id: 'summary',
      title: { fa: 'جمع‌بندی و واژه‌های کلیدی', en: 'Summary and Key Terms' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              fa: 'سفارش خرید تعهد حقوقی و مکتوب است و رسید، فاکتور و پرداخت با آن تطبیق داده می‌شوند.',
              en: 'A PO is a written legal commitment; the receipt, invoice and payment are all matched against it.',
            },
            {
              fa: 'سفارش استاندارد برای کالای مشخص، سفارش خدمات با SES، سفارش باز برای خریدهای کوچک تکراری، و فراخوان برای خرید از قرارداد چارچوب به کار می‌رود.',
              en: 'Use a standard PO for defined goods, a service PO with SES for services, a blanket PO for small repeated buys, and call-offs to buy under a framework agreement.',
            },
            {
              fa: 'شرایط تجاری (قیمت، اینکوترمز، پرداخت، ضمانت، خسارت تأخیر، گواهی‌ها) باید دقیق و کامل نوشته شوند.',
              en: 'Commercial terms (price, Incoterms, payment, warranty, LDs, certificates) must be written precisely and completely.',
            },
            {
              fa: 'سفارش با گردش کار تأیید و جدول اختیارات آزاد می‌شود و هر تغییر نسخه تازه‌ای با سابقه کامل می‌سازد.',
              en: 'A PO is released through the approval workflow and DOA, and every change creates a new version with a full history.',
            },
            {
              fa: 'سفارش هیچ ثبتی در دفتر کل ندارد اما تعهد می‌سازد؛ رسید کالا و SES تعهد را به هزینه واقعی تبدیل می‌کنند و بدهکار موضوع هزینه و بستانکار GR/IR ثبت می‌شود.',
              en: 'A PO posts nothing to the general ledger but creates a commitment; the goods receipt and SES turn it into actual cost, debiting the cost object and crediting GR/IR.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'سفارش خرید (PO)', en: 'Purchase order (PO)' },
              def: {
                fa: 'سند رسمی خریدار به تأمین‌کننده که کالا یا خدمت، مقدار، قیمت، زمان، محل و شرایط تحویل را تعیین می‌کند.',
                en: 'The buyer’s formal document to a supplier stating goods or services, quantity, price, timing, place and terms.',
              },
            },
            {
              term: { fa: 'سفارش باز', en: 'Blanket PO' },
              def: {
                fa: 'سفارشی با سقف مبلغ و مدت مشخص برای خریدهای کوچک و تکراری.',
                en: 'A PO with a value limit and validity period for small, repeated purchases.',
              },
            },
            {
              term: { fa: 'قرارداد چارچوب', en: 'Framework agreement' },
              def: {
                fa: 'توافق دوره‌ای که قیمت‌ها و شرایط را از پیش تعیین می‌کند؛ تحویل با سفارش فراخوان انجام می‌شود.',
                en: 'A period agreement that fixes prices and terms in advance; deliveries are triggered by call-off orders.',
              },
            },
            {
              term: { fa: 'سفارش فراخوان', en: 'Call-off order' },
              def: {
                fa: 'سفارشی که با ارجاع به قرارداد چارچوب و با قیمت‌های آن صادر می‌شود.',
                en: 'An order issued against a framework agreement, at its prices.',
              },
            },
            {
              term: { fa: 'برگه ثبت خدمات (SES)', en: 'Service entry sheet (SES)' },
              def: {
                fa: 'سند تأیید خدمات انجام‌شده در ERP؛ معادل رسید کالا برای خدمات.',
                en: 'The ERP document that confirms services performed; the service equivalent of a goods receipt.',
              },
            },
            {
              term: { fa: 'تخصیص هزینه', en: 'Account assignment' },
              def: {
                fa: 'تعیین اینکه هزینه ردیف سفارش به انبار یا به کدام موضوع هزینه (مرکز هزینه، AFE، دستور کار) برود.',
                en: 'Deciding whether a PO line goes to stock or to which cost object (cost centre, AFE, work order).',
              },
            },
            {
              term: { fa: 'اینکوترمز', en: 'Incoterms' },
              def: {
                fa: 'قواعد ICC که تقسیم هزینه و نقطه انتقال ریسک حمل میان فروشنده و خریدار را تعیین می‌کند.',
                en: 'ICC rules that set how transport costs are shared and where risk passes between seller and buyer.',
              },
            },
            {
              term: { fa: 'خسارت تأخیر', en: 'Liquidated damages (LDs)' },
              def: {
                fa: 'مبلغ ازپیش‌توافق‌شده‌ای که بابت دیرکرد از پرداخت‌های تأمین‌کننده کسر می‌شود.',
                en: 'A pre-agreed amount deducted from the supplier’s payments for late delivery.',
              },
            },
            {
              term: { fa: 'جدول اختیارات معاملات (DOA)', en: 'Delegation of authority (DOA)' },
              def: {
                fa: 'جدولی که تعیین می‌کند هر سطح مبلغ را چه کسی می‌تواند تأیید کند.',
                en: 'The table that sets who may approve each value level.',
              },
            },
            {
              term: { fa: 'تعهد', en: 'Commitment' },
              def: {
                fa: 'مبلغ سفارش‌های تأییدشده‌ای که هنوز رسید یا SES نخورده‌اند؛ روی بودجه می‌نشیند اما ثبت دفتر کل ندارد.',
                en: 'The value of approved POs not yet received or confirmed by SES; it uses budget but posts nothing to the ledger.',
              },
            },
            {
              term: { fa: 'AFE', en: 'AFE (Authority for Expenditure)' },
              def: {
                fa: 'مجوز بودجه یک پروژه یا چاه مشخص که هزینه‌ها و تعهدات در برابر آن کنترل می‌شوند؛ در مشارکت معمولاً به تأیید شرکا می‌رسد.',
                en: 'The budget authorisation for a specific project or well, against which costs and commitments are controlled; in a JV usually approved by partners.',
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
        fa: 'وقتی یک سفارش خرید 288,000 برای لوله چاه AR-11 تأیید می‌شود، ERP در دفتر کل چه ثبتی می‌زند؟',
        en: 'When a 288,000 PO for AR-11 casing is approved, what does the ERP post to the general ledger?',
      },
      options: [
        { fa: 'بدهکار موجودی، بستانکار حساب‌های پرداختنی', en: 'Debit Inventory, credit Accounts payable' },
        { fa: 'بدهکار دارایی در جریان ساخت، بستانکار GR/IR', en: 'Debit Assets under construction, credit GR/IR' },
        { fa: 'هیچ ثبتی؛ فقط تعهد روی AFE ثبت می‌شود', en: 'Nothing; only a commitment is recorded on the AFE' },
        { fa: 'بدهکار هزینه، بستانکار موجودی نقد', en: 'Debit Expense, credit Cash' },
      ],
      answer: 2,
      explain: {
        fa: 'سفارش خرید هنوز رویداد مالی نیست: نه کالایی رسیده و نه بدهی‌ای ایجاد شده است. پس دفتر کل تغییری نمی‌کند و فقط تعهد روی AFE می‌نشیند. ثبت «بدهکار دارایی در جریان ساخت، بستانکار GR/IR» وسوسه‌انگیز است، اما آن ثبت در لحظه رسید کالا انجام می‌شود، نه هنگام تأیید سفارش.',
        en: 'A PO is not yet a financial event: no goods have arrived and no liability exists. The ledger does not change; only a commitment is recorded on the AFE. “Debit AUC, credit GR/IR” is tempting, but that entry is made at goods receipt, not at PO approval.',
      },
    },
    {
      q: {
        fa: 'انبار میدان در طول سال صدها بار دستکش، عینک ایمنی و ابزار کوچک می‌خرد. مناسب‌ترین سند خرید کدام است؟',
        en: 'The Field Warehouse buys gloves, safety glasses and small tools hundreds of times a year. Which purchasing document fits best?',
      },
      options: [
        { fa: 'سفارش باز با سقف مبلغ و مدت مشخص', en: 'A blanket PO with a value limit and validity period' },
        { fa: 'یک سفارش استاندارد جداگانه برای هر خرید', en: 'A separate standard PO for each purchase' },
        { fa: 'سفارش خدمات با SES', en: 'A service PO with SES' },
        { fa: 'خرید بدون سفارش و پرداخت از تنخواه', en: 'Buying without a PO and paying from petty cash' },
      ],
      answer: 0,
      explain: {
        fa: 'سفارش باز برای خریدهای کوچک و تکراری طراحی شده است: یک بار تأیید می‌شود و هر فاکتور از سقف کم می‌شود. صدها سفارش استاندارد هزینه اداری زیادی دارد و خرید بدون سفارش، کنترل تأیید و ردیابی هزینه را از بین می‌برد.',
        en: 'A blanket PO is designed for small repeated buys: approved once, with each invoice drawn against the limit. Hundreds of standard POs cost too much administration, and buying without a PO destroys approval control and cost traceability.',
      },
    },
    {
      q: {
        fa: 'سقف یک سفارش باز 50,000 است و فاکتورهای 18,500، 21,000 و 7,300 روی آن ثبت شده‌اند. فاکتور تازه‌ای به مبلغ 4,000 می‌رسد. چه می‌شود؟',
        en: 'A blanket PO has a limit of 50,000, and invoices of 18,500, 21,000 and 7,300 have been posted. A new invoice of 4,000 arrives. What happens?',
      },
      options: [
        { fa: 'ثبت می‌شود؛ مانده 3,200 کافی است', en: 'It is posted; the remaining 3,200 is enough' },
        { fa: 'ثبت می‌شود و مانده صفر می‌شود', en: 'It is posted and the remaining limit becomes zero' },
        { fa: 'متوقف می‌شود؛ 4,000 کل سقف را رد می‌کند', en: 'It is blocked; 4,000 breaks the whole limit' },
        { fa: 'متوقف می‌شود؛ مانده 3,200 است و فاکتور 800 بیشتر از آن است', en: 'It is blocked; 3,200 remains and the invoice exceeds it by 800' },
      ],
      answer: 3,
      explain: {
        fa: 'جمع فاکتورها 18,500 + 21,000 + 7,300 = 46,800 و مانده 50,000 − 46,800 = 3,200 است. فاکتور 4,000 به اندازه 800 از مانده بیشتر است، پس ERP آن را متوقف می‌کند تا سفارش با تأیید مجاز افزایش یابد. گزینه «مانده کافی است» حساب را اشتباه کرده است.',
        en: 'Invoices total 18,500 + 21,000 + 7,300 = 46,800, leaving 50,000 − 46,800 = 3,200. The 4,000 invoice exceeds that by 800, so the ERP blocks it until the PO is increased with proper approval. “The remaining amount is enough” is a miscalculation.',
      },
    },
    {
      q: {
        fa: 'تأیید برگه ثبت خدمات (SES) در خرید خدمات چه نقشی دارد؟',
        en: 'What role does approving a service entry sheet (SES) play in buying services?',
      },
      options: [
        { fa: 'جای فاکتور پیمانکار را می‌گیرد و پرداخت را مستقیم انجام می‌دهد', en: 'It replaces the contractor’s invoice and pays directly' },
        {
          fa: 'تأیید می‌کند خدمت طبق قرارداد انجام شده و ثبت بدهکار موضوع هزینه و بستانکار GR/IR را می‌سازد',
          en: 'It confirms the service was performed per contract and creates the debit to the cost object and credit to GR/IR',
        },
        { fa: 'فقط برای بایگانی است و اثر مالی ندارد', en: 'It is for filing only and has no financial effect' },
        { fa: 'سفارش خدمات را تأیید و آزاد می‌کند', en: 'It approves and releases the service PO' },
      ],
      answer: 1,
      explain: {
        fa: 'SES برای خدمات همان کار رسید کالا را می‌کند: انجام کار را تأیید می‌کند و ERP همان لحظه موضوع هزینه را بدهکار و GR/IR را بستانکار می‌کند. SES فاکتور نیست و پرداختی انجام نمی‌دهد؛ آزادسازی سفارش هم کار گردش کار تأیید است، نه SES.',
        en: 'An SES does for services what a goods receipt does for goods: it confirms the work, and the ERP immediately debits the cost object and credits GR/IR. It is not an invoice and pays nothing; releasing the PO is the job of the approval workflow, not the SES.',
      },
    },
    {
      q: {
        fa: 'ارزش اقلام دیرکرد یک سفارش 80,000 است و 6 هفته دیر رسیده‌اند. نرخ خسارت 0.5٪ در هفته با سقف 5٪ است. خسارت تأخیر چقدر است؟',
        en: 'Late items on a PO are worth 80,000 and arrived 6 weeks late. LDs are 0.5% per week, capped at 5%. What are the LDs?',
      },
      options: [
        { fa: '400', en: '400' },
        { fa: '4,000', en: '4,000' },
        { fa: '2,400', en: '2,400' },
        { fa: '24,000', en: '24,000' },
      ],
      answer: 2,
      explain: {
        fa: '80,000 × 0.5٪ × 6 = 2,400. سقف 80,000 × 5٪ = 4,000 است و رسیده نشده، پس خسارت 2,400 است. 4,000 سقف است، نه خسارت؛ 400 خسارت فقط یک هفته است.',
        en: '80,000 × 0.5% × 6 = 2,400. The cap is 80,000 × 5% = 4,000 and is not reached, so LDs are 2,400. 4,000 is the cap, not the charge; 400 is just one week.',
      },
    },
    {
      q: {
        fa: 'کدام جمله درباره اینکوترمز درست است؟',
        en: 'Which statement about Incoterms is correct?',
      },
      options: [
        { fa: 'زمان انتقال مالکیت قانونی کالا را تعیین می‌کند', en: 'They set when legal title to the goods passes' },
        { fa: 'روش پرداخت، مثلاً اعتبار اسنادی، را تعیین می‌کند', en: 'They set the payment method, such as a letter of credit' },
        { fa: 'فقط برای خرید داخلی کاربرد دارد', en: 'They apply only to domestic purchases' },
        {
          fa: 'تعیین می‌کند هزینه‌های حمل تا کجا با فروشنده است و ریسک در کجا به خریدار منتقل می‌شود',
          en: 'They set how far transport costs fall on the seller and where risk passes to the buyer',
        },
      ],
      answer: 3,
      explain: {
        fa: 'اینکوترمز فقط تقسیم هزینه‌ها و نقطه انتقال ریسک حمل را تعیین می‌کند. مالکیت قانونی و روش پرداخت باید جداگانه در قرارداد نوشته شوند؛ این همان اشتباه رایجی است که گزینه‌های اول و دوم را وسوسه‌انگیز می‌کند.',
        en: 'Incoterms only settle the split of transport costs and the point where risk passes. Legal title and the payment method must be written separately in the contract; that common misconception is what makes the first two options tempting.',
      },
    },
    {
      q: {
        fa: 'بودجه یک AFE برابر 900,000، هزینه واقعی 410,000 و تعهدات 330,000 است. مانده قابل مصرف چقدر است؟',
        en: 'An AFE has a budget of 900,000, actuals of 410,000 and commitments of 330,000. What is the remaining amount?',
      },
      options: [
        { fa: '490,000', en: '490,000' },
        { fa: '160,000', en: '160,000' },
        { fa: '570,000', en: '570,000' },
        { fa: '80,000', en: '80,000' },
      ],
      answer: 1,
      explain: {
        fa: 'مانده = 900,000 − 410,000 − 330,000 = 160,000. پاسخ 490,000 تعهدات را نادیده گرفته است؛ یعنی مدیر پروژه خیال می‌کند پولی دارد که در واقع با سفارش‌های تأییدشده قبلاً متعهد شده است.',
        en: 'Remaining = 900,000 − 410,000 − 330,000 = 160,000. 490,000 ignores the commitments, meaning the project manager would think money is free that approved POs have already tied up.',
      },
    },
    {
      q: {
        fa: 'روی یک سفارش با تخصیص مستقیم به AFE، رسید کالایی به مبلغ 50,000 ثبت می‌شود. اثر آن بر گزارش AFE چیست؟',
        en: 'A goods receipt of 50,000 is posted on a PO charged directly to an AFE. What is the effect on the AFE report?',
      },
      options: [
        {
          fa: 'تعهد 50,000 کم، واقعی 50,000 زیاد؛ مانده تغییر نمی‌کند',
          en: 'Commitment down 50,000, actual up 50,000; remaining unchanged',
        },
        { fa: 'واقعی 50,000 زیاد و مانده 50,000 کم می‌شود', en: 'Actual up 50,000 and remaining down 50,000' },
        { fa: 'تعهد 50,000 زیاد می‌شود', en: 'Commitment up 50,000' },
        { fa: 'هیچ اثری ندارد تا فاکتور برسد', en: 'No effect until the invoice arrives' },
      ],
      answer: 0,
      explain: {
        fa: 'مبلغ قبلاً هنگام تأیید سفارش به‌عنوان تعهد از بودجه کم شده بود. رسید فقط آن را از ستون تعهد به ستون واقعی منتقل می‌کند؛ پس مانده ثابت می‌ماند. اگر مانده دوباره کم می‌شد، هزینه دو بار شمرده شده بود.',
        en: 'The amount already reduced the budget as a commitment when the PO was approved. The receipt only moves it from commitment to actual, so the remaining amount is unchanged. If remaining fell again, the cost would be counted twice.',
      },
    },
    {
      q: {
        fa: 'در قرارداد چارچوب شیمی حفاری، چه چیزی تأمین‌کننده را به تحویل کالا برای یک چاه مشخص موظف می‌کند؟',
        en: 'Under the drilling chemicals framework, what obliges the supplier to deliver for a specific well?',
      },
      options: [
        { fa: 'خود قرارداد چارچوب، به محض امضا', en: 'The framework agreement itself, once signed' },
        { fa: 'درخواست خرید داخلی برنامه‌ریز', en: 'The planner’s internal purchase requisition' },
        { fa: 'سفارش فراخوان با ارجاع به قرارداد و کد AFE همان چاه', en: 'A call-off order referencing the agreement and that well’s AFE' },
        { fa: 'فاکتور پیش‌فروش تأمین‌کننده', en: 'The supplier’s pro-forma invoice' },
      ],
      answer: 2,
      explain: {
        fa: 'قرارداد چارچوب قیمت‌ها و شرایط را تعیین می‌کند اما به‌تنهایی دستور تحویل نیست. تحویل با سفارش فراخوان آغاز می‌شود که قیمت را از قرارداد می‌خواند و کد AFE چاه را دارد. درخواست خرید سندی داخلی است و برای تأمین‌کننده تعهدی نمی‌سازد.',
        en: 'The framework fixes prices and terms but is not itself an instruction to deliver. Delivery is triggered by a call-off order, which takes its prices from the agreement and carries the well’s AFE. A requisition is internal and creates no obligation for the supplier.',
      },
    },
    {
      q: {
        fa: 'طبق جدول اختیارات فرضی، مدیر خرید تا 100,000 را تأیید می‌کند. سفارشی 96,000 با تأیید او صادر شده و اکنون 7,000 به آن اضافه می‌شود. چه باید کرد؟',
        en: 'Under the illustrative DOA, the procurement manager approves up to 100,000. A 96,000 PO he approved is now increased by 7,000. What must happen?',
      },
      options: [
        { fa: 'هیچ؛ تأیید اولیه کافی است', en: 'Nothing; the original approval is enough' },
        {
          fa: 'سفارش 103,000 به رده بالاتر می‌رود و باید مدیر زنجیره تأمین آن را دوباره تأیید کند',
          en: 'At 103,000 the PO moves up a band and must be re-approved by the supply chain director',
        },
        { fa: 'افزایش را به یک سفارش جداگانه 7,000 تبدیل کنیم تا تأیید لازم نباشد', en: 'Put the increase on a separate 7,000 PO to avoid re-approval' },
        { fa: 'فقط تأمین‌کننده باید اصلاحیه را امضا کند', en: 'Only the supplier needs to sign the amendment' },
      ],
      answer: 1,
      explain: {
        fa: '96,000 + 7,000 = 103,000 از اختیار 100,000 مدیر خرید بیشتر است، پس سفارش باید به تأییدکننده رده بالاتر برود. جدا کردن 7,000 در سفارش دیگر همان خرد کردن معامله برای دور زدن اختیارات است و ممنوع است.',
        en: '96,000 + 7,000 = 103,000 exceeds the procurement manager’s 100,000 authority, so the PO must go to the next approver. Moving the 7,000 to a separate PO is order splitting to get around authority limits, which is prohibited.',
      },
    },
  ],
}
