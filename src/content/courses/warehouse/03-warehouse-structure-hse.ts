import type { Lesson } from '../../types'

/* Masar Petroleum: accounts the ERP posts to in this lesson. */
const ac = {
  sparesMP10: {
    fa: 'موجودی قطعات یدکی: سایت MP10 (انبار مرکزی)',
    en: 'Inventory: spare parts, site MP10 (Central Warehouse)',
  },
  sparesMP20: {
    fa: 'موجودی قطعات یدکی: سایت MP20 (انبار میدان)',
    en: 'Inventory: spare parts, site MP20 (Field Warehouse)',
  },
  chemicals: { fa: 'موجودی مواد شیمیایی', en: 'Inventory: chemicals' },
  consumables: { fa: 'موجودی اقلام مصرفی', en: 'Inventory: consumables' },
  writeOff: { fa: 'هزینه زیان و اسقاط موجودی', en: 'Inventory write-off expense' },
  warehouseExp: {
    fa: 'هزینه‌های عملیاتی انبار (مرکز هزینه CC-3300)',
    en: 'Warehouse operating expense (cost centre CC-3300)',
  },
}

const t = (fa: string, en: string) => ({ fa, en })

export const lesson: Lesson = {
  slug: 'warehouse-structure-hse',
  number: 3,
  level: 'intermediate',
  minutes: 28,
  icon: 'Library',
  tone: 'gold',
  title: { fa: 'ساختار انبار، چیدمان و HSE', en: 'Warehouse Structure, Layout and HSE' },
  summary: {
    fa: 'ساختار سازمانی انبار را در ERP (سایت، محل نگهداری و جایگاه) بشناسید، چیدمان و جانمایی کالا را طراحی کنید، مواد خطرناک، سیلندرهای گاز و اقلام ویژه را ایمن نگه دارید، از تجهیزات دوار و لوله‌های OCTG درست حفاظت کنید و ببینید قواعد HSE و ثبت‌های ERP چگونه کنار هم کار می‌کنند.',
    en: 'Learn the warehouse’s organisational structure in the ERP (site, storage location and bin), design the layout and slotting, store hazardous chemicals, gas cylinders and special items safely, preserve rotating equipment and OCTG properly, and see how HSE rules and ERP postings work together.',
  },
  objectives: [
    {
      fa: 'ساختار سایت، محل نگهداری و جایگاه را در ERP توضیح دهید و بگویید کدام جابه‌جایی سند مالی دارد',
      en: 'Explain the site, storage location and bin structure in the ERP and which movements create a Finance posting',
    },
    {
      fa: 'چیدمان انبار را بر اساس جریان کالا، و جانمایی را بر اساس دفعات برداشت، وزن و درجه بحرانی بودن طراحی کنید',
      en: 'Design a layout around the flow of goods, and slot items by pick frequency, weight and criticality',
    },
    {
      fa: 'قواعد اصلی نگهداری مواد شیمیایی خطرناک و سیلندرهای گاز را به کار ببرید و حد مسئولیت انبار در برابر مواد پرتوزا و منفجره را بشناسید',
      en: 'Apply the main rules for storing hazardous chemicals and gas cylinders, and know the limits of the warehouse’s role with radioactive sources and explosives',
    },
    {
      fa: 'برنامه حفاظت تجهیزات دوار و لوله‌های OCTG را تهیه کنید',
      en: 'Prepare a preservation plan for rotating equipment and OCTG',
    },
    {
      fa: 'ثبت‌های مالی انتقال بین سایت‌ها، مصرف مواد حفاظتی و اسقاط کالا را بنویسید',
      en: 'Write the Finance entries for site-to-site transfers, preservation materials and scrapping',
    },
  ],
  sections: [
    {
      id: 'why-structure',
      title: { fa: 'چرا ساختار و ایمنی انبار مهم است؟', en: 'Why Structure and Safety Matter' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'پیش از انتقال انبار میدان آریا به ساختمان جدید، تیم HSE و حسابرسی داخلی مسار پترولیوم یک بازدید کامل از انبار قدیمی انجام دادند. یافته‌ها کوتاه اما نگران‌کننده بود:',
            en: 'Before the Arya Field Warehouse moved into a new building, Masar Petroleum’s HSE and internal audit teams walked through the old store. The findings were short but worrying:',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: 'بشکه‌های بازدارنده خوردگی (یک مایع اشتعال‌پذیر) کنار سیلندرهای اکسیژن چیده شده بود.',
              en: 'Drums of corrosion inhibitor (a flammable liquid) were stacked next to oxygen cylinders.',
            },
            {
              fa: 'لوله‌های جداری روی خاک لخت قرار داشتند و محافظ رزوه چند شاخه افتاده بود.',
              en: 'Casing joints lay on bare ground and several had lost their thread protectors.',
            },
            {
              fa: 'روتور یدکی یک پمپ دو سال بدون چرخاندن شفت مانده بود و بازرسی، تاب برداشتن دائمی شفت را نشان داد.',
              en: 'A spare pump rotor had sat for two years without its shaft being turned, and inspection found a permanent bow in the shaft.',
            },
            {
              fa: 'ERP فقط «انبار میدان» را می‌شناخت و جایگاه هیچ کالایی ثبت نشده بود؛ انباردارها کالا را از حافظه پیدا می‌کردند.',
              en: 'The ERP knew only “Field Warehouse”; no bins were recorded, and storekeepers found items from memory.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'هزینه این یافته‌ها', en: 'What the findings cost' },
          text: {
            fa: 'روتور جایگزین 140,000 قیمت و 18 هفته زمان تحویل داشت. انباردارها ماهانه حدود 40 ساعت را صرف جست‌وجوی کالا می‌کردند. و یک آتش‌سوزی در کنار سیلندرهای اکسیژن می‌توانست کل انبار را از بین ببرد. هیچ‌کدام از این مشکلات با خرید کالای بیشتر حل نمی‌شود؛ با **ساختار، چیدمان و قواعد درست** حل می‌شود.',
            en: 'The replacement rotor cost 140,000 with an 18-week lead time. Storekeepers spent about 40 hours a month searching for items. And a fire next to the oxygen cylinders could have destroyed the whole store. None of these problems is solved by buying more stock; they are solved by **the right structure, layout and rules**.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'این درس سه لایه دارد: **ساختار انبار در ERP** (هر کالا دقیقاً کجاست)، **چیدمان فیزیکی** (کالا کجا و چگونه قرار بگیرد) و **قواعد HSE و حفاظت** (کالا و آدم‌ها چگونه سالم بمانند).',
            en: 'This lesson has three layers: **the warehouse structure in the ERP** (where exactly each item is), **the physical layout** (where and how items should sit), and **HSE and preservation rules** (how goods and people stay safe).',
          },
        },
      ],
    },
    {
      id: 'erp-structure',
      title: {
        fa: 'ساختار سازمانی انبار در ERP: سایت، محل نگهداری و جایگاه',
        en: 'Warehouse Organisation in the ERP: Site, Storage Location and Bin',
      },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'ERP انبار را به شکل یک درخت سازمانی می‌شناسد. **شرکت (Company code)** شخصیت حقوقی است که دفاتر و صورت‌های مالی خودش را دارد. **سایت (Plant)** یک محل عملیاتی با موجودی خودش است و معمولاً ارزش‌گذاری موجودی در همین سطح انجام می‌شود. **محل نگهداری (Storage location)** بخشی فیزیکی یا منطقی از سایت است که موجودی در آن نگهداری می‌شود. **جایگاه (Bin)** نشانی دقیق یک قفسه یا موقعیت است. بعضی ERPها برای انبارهای بزرگ سطح‌های بیشتری هم دارند، مانند شماره انبار و نوع محل انبارش.',
            en: 'The ERP sees the warehouse as an organisational tree. The **company code** is the legal entity with its own books and financial statements. The **site (plant)** is an operating location with its own stock; inventory is usually valued at this level. The **storage location** is a physical or logical area within a site where stock is kept. The **bin** is the exact address of a shelf or position. Some ERPs add further levels for large warehouses, such as a warehouse number and storage types.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'ساختار انبار مسار پترولیوم در ERP', en: 'Masar Petroleum’s warehouse structure in the ERP' },
          head: [t('سطح', 'Level'), t('کد', 'Code'), t('نام', 'Name'), t('توضیح', 'Notes')],
          rows: [
            [t('شرکت', 'Company code'), t('MP01', 'MP01'), t('شرکت مسار پترولیوم', 'Masar Petroleum'), t('دفاتر و صورت‌های مالی', 'Books and financial statements')],
            [t('سایت', 'Site'), t('MP10', 'MP10'), t('انبار مرکزی (پایگاه پشتیبانی)', 'Central Warehouse (logistics base)'), t('ارزش‌گذاری در سطح سایت', 'Stock valued at site level')],
            [t('محل نگهداری', 'Storage location'), t('MP10/1001', 'MP10/1001'), t('انبار اصلی قطعات', 'Main spares store'), t('قفسه‌بندی و پالت‌راک', 'Shelving and pallet racking')],
            [t('محل نگهداری', 'Storage location'), t('MP10/1002', 'MP10/1002'), t('محوطه لوله', 'OCTG pipe yard'), t('روباز، روی پایه‌های لوله', 'Outdoor, on pipe racks')],
            [t('محل نگهداری', 'Storage location'), t('MP10/1003', 'MP10/1003'), t('انبار مواد شیمیایی', 'Chemical store'), t('ساختمان جدا با حوضچه مهار نشتی', 'Separate building with spill bunds')],
            [t('محل نگهداری', 'Storage location'), t('MP10/1004', 'MP10/1004'), t('قفس سیلندرهای گاز', 'Gas cylinder cage'), t('روباز، سایه‌دار و با تهویه طبیعی', 'Outdoor, shaded and naturally ventilated')],
            [t('سایت', 'Site'), t('MP20', 'MP20'), t('میدان آریا', 'Arya field'), t('انبار میدان و ایستگاه تقویت فشار', 'Field Warehouse and compressor station')],
            [t('محل نگهداری', 'Storage location'), t('MP20/2001', 'MP20/2001'), t('انبار میدان', 'Field store'), t('اقلام پرمصرف و مصرفی', 'Fast movers and consumables')],
            [t('محل نگهداری', 'Storage location'), t('MP20/2002', 'MP20/2002'), t('انبار اقماری ایستگاه تقویت فشار', 'Compressor station satellite store'), t('قطعات حیاتی K-201', 'Critical spares for K-201')],
            [t('محل نگهداری', 'Storage location'), t('MP20/2003', 'MP20/2003'), t('انبار سر دکل چاه AR-12', 'Rig-site store, well AR-12'), t('موقت؛ با جابه‌جایی دکل بسته می‌شود', 'Temporary; closed when the rig moves')],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'هر جایگاه یک نشانی منطقی دارد. در مسار پترولیوم قالب نشانی «منطقه، قفسه، طبقه، موقعیت» است: جایگاه `A-12-03-B` یعنی منطقه A، قفسه 12، طبقه 03، موقعیت B. هر جایگاه برچسب بارکد یا QR دارد و انباردار هنگام قرار دادن و برداشتن کالا آن را اسکن می‌کند.',
            en: 'Every bin has a logical address. At Masar Petroleum the format is zone, rack, level, position: bin `A-12-03-B` means zone A, rack 12, level 03, position B. Each bin carries a barcode or QR label that the storekeeper scans at put-away and picking.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'جایگاه ثابت', en: 'Fixed bins' },
            items: [
              t('هر کالا خانه همیشگی خودش را دارد', 'Every item has a permanent home'),
              t('پیدا کردن کالا برای افراد آسان است', 'Easy for people to find things'),
              t('وقتی موجودی کم است، فضا خالی می‌ماند', 'Space sits empty when stock is low'),
              t('برای انبارهای کوچک و قطعات یدکی مناسب است', 'Suits small stores and spare parts'),
            ],
          },
          right: {
            title: { fa: 'جایگاه پویا (تصادفی)', en: 'Dynamic (random) bins' },
            items: [
              t('کالا در هر جایگاه خالی مناسب قرار می‌گیرد', 'Items go into any suitable empty bin'),
              t('از فضا بهتر استفاده می‌شود', 'Space is used better'),
              t('بدون موجودی در سطح جایگاه و اسکن، کالا گم می‌شود', 'Without bin-level stock and scanning, items get lost'),
              t('برای انبارهای بزرگ با کالای پرگردش مناسب است', 'Suits large stores with fast-moving stock'),
            ],
          },
        },
        {
          type: 'p',
          text: {
            fa: 'موجودی در ERP فقط «کجا» نیست، «در چه وضعیتی» هم هست. **موجودی آزاد** قابل حواله است؛ **موجودی در انتظار بازرسی** رسیده اما هنوز تأیید نشده است؛ **موجودی مسدود** آسیب‌دیده، ردشده یا در انتظار تصمیم است؛ و **کالای در راه** میان دو سایت در حال حمل است. فقط موجودی آزاد قابل رزرو و حواله است.',
            en: 'Stock in the ERP is not just “where” but also “in what status”. **Unrestricted stock** can be issued; **quality-inspection stock** has arrived but is not yet approved; **blocked stock** is damaged, rejected or awaiting a decision; and **stock in transit** is on the road between two sites. Only unrestricted stock can be reserved and issued.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'کدام جابه‌جایی سند مالی دارد؟ قاعده ساده است: اگر **ارزش یا حساب** تغییر نکند، سند مالی لازم نیست. جابه‌جایی از یک جایگاه به جایگاه دیگر، یا از یک محل نگهداری به محل دیگری در همان سایت، فقط سند انبار دارد. اما چون ارزش‌گذاری در سطح سایت است، انتقال از سایت MP10 به MP20 یک سند حسابداری هم می‌سازد.',
            en: 'Which movements post to Finance? The rule is simple: if neither the **value nor the account** changes, there is no Finance document. Moving stock from bin to bin, or between storage locations of the same site, creates only a material document. But because stock is valued at site level, a transfer from site MP10 to MP20 also creates an accounting document.',
          },
        },
        {
          type: 'journal',
          title: {
            fa: 'انتقال 4 بسته آب‌بند K-201 از انبار مرکزی به انبار میدان',
            en: 'Transferring 4 K-201 seal kits from the Central to the Field Warehouse',
          },
          entries: [
            {
              date: { fa: 'انتقال بین سایت‌ها', en: 'Site-to-site transfer' },
              lines: [
                { account: ac.sparesMP20, debit: 7200 },
                { account: ac.sparesMP10, credit: 7200 },
              ],
              memo: {
                fa: '4 × 1,800 به میانگین موزون سایت مبدأ. اگر انتقال دومرحله‌ای باشد، کالا تا ثبت رسید در مقصد به‌صورت «کالای در راه» دیده می‌شود.',
                en: '4 × 1,800 at the sending site’s moving average. In a two-step transfer the goods show as stock in transit until the receiving site posts its receipt.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در بسیاری از ERPها حساب دفتر کل هر دو سایت یکی است (مثلاً 1310) و سایت به‌صورت یک بعد حسابداری (Dimension) یا مرکز سود روی سند ثبت می‌شود. ما در اینجا دو سطر جدا نوشته‌ایم تا ببینید ارزش از کدام سایت به کدام سایت رفته است. جزئیات انتقال یک‌مرحله‌ای و دومرحله‌ای در درس «حواله انبار، انتقال و برگشت کالا» آمده است.',
            en: 'In many ERPs both sites use the same GL account (for example 1310) and the site is recorded on the document as a dimension or profit centre. We show two separate lines here so you can see value moving from one site to the other. One-step and two-step transfers are covered in detail in the lesson on goods issue, transfers and returns.',
          },
        },
      ],
    },
    {
      id: 'layout-slotting',
      title: { fa: 'چیدمان و جانمایی کالا', en: 'Layout and Slotting' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'چیدمان خوب از **جریان یک‌طرفه کالا** پیروی می‌کند: سکوی تخلیه، محوطه بازرسی و قرنطینه، قرار دادن در جایگاه، مناطق نگهداری، برداشت، و در پایان محوطه آماده‌سازی و باجه تحویل. مسیر کالای ورودی و خروجی نباید با هم تلاقی کند، تا کالای بازرسی‌نشده اشتباهی حواله نشود.',
            en: 'A good layout follows a **one-way flow of goods**: unloading dock, inspection and quarantine area, put-away, storage zones, picking, and finally staging and the issue counter. Incoming and outgoing paths should not cross, so uninspected goods are never issued by mistake.',
          },
        },
        {
          type: 'diagram',
          id: 'warehouse-flow',
          caption: {
            fa: 'جریان کالا در انبار؛ چیدمان فیزیکی باید همین ترتیب را دنبال کند.',
            en: 'The flow of goods through the warehouse; the physical layout should follow the same order.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'مناطق انبار میدان جدید مسار پترولیوم', en: 'Zones in Masar Petroleum’s new Field Warehouse' },
          head: [t('منطقه', 'Zone'), t('کاربرد', 'Purpose'), t('نکته طراحی', 'Design notes')],
          rows: [
            [
              t('سکوی تخلیه', 'Receiving dock'),
              t('تخلیه کامیون', 'Unloading trucks'),
              t('دسترسی لیفتراک، باسکول، فضای پهن کردن و شمارش کالا', 'Forklift access, weighbridge, room to lay out and count goods'),
            ],
            [
              t('بازرسی و قرنطینه', 'Inspection and quarantine'),
              t('کالای در انتظار بازرسی یا ردشده', 'Goods awaiting inspection or rejected'),
              t(
                'حصارکشی و علامت‌گذاری‌شده؛ در ERP به‌صورت موجودی در انتظار بازرسی یا مسدود',
                'Fenced and signed; in the ERP as quality-inspection or blocked stock',
              ),
            ],
            [
              t('منطقه A: قطعات کوچک', 'Zone A: small parts'),
              t('قفسه با جعبه‌های کوچک', 'Shelving with bin boxes'),
              t('اقلام پرگردش نزدیک باجه تحویل', 'Fast movers near the issue counter'),
            ],
            [
              t('منطقه B: قطعات سنگین', 'Zone B: heavy spares'),
              t('پالت‌راک', 'Pallet racking'),
              t(
                'راهروی لیفتراک، قفسه با ظرفیت مشخص، کالای سنگین در طبقات پایین',
                'Forklift aisles, load-rated racks, heavy items on low levels',
              ),
            ],
            [
              t('منطقه C: قفس قطعات حیاتی', 'Zone C: critical spares cage'),
              t('اقلام با درجه بحرانی A', 'Criticality-A items'),
              t('قفل‌دار، با برچسب حفاظت', 'Locked, with preservation tags'),
            ],
            [
              t('منطقه Y: محوطه روباز', 'Zone Y: yard'),
              t('لوله، شیرهای بزرگ، قرقره کابل', 'Pipe, large valves, cable drums'),
              t('کف سخت، زهکشی، پایه‌های لوله', 'Hard standing, drainage, pipe racks'),
            ],
            [
              t('مواد شیمیایی و سیلندرها', 'Chemicals and cylinders'),
              t('مواد خطرناک', 'Hazardous materials'),
              t('ساختمان‌های جدا؛ بخش بعد را ببینید', 'Separate buildings; see the next section'),
            ],
            [
              t('باجه تحویل و آماده‌سازی', 'Issue counter and staging'),
              t('آماده کردن کالای برداشت‌شده برای تحویل', 'Preparing picked items for collection'),
              t('ردیف‌بندی بر اساس دستور کار یا چاه', 'Lanes by work order or well'),
            ],
          ],
        },
        { type: 'h', text: { fa: 'قواعد جانمایی (Slotting)', en: 'Slotting rules' } },
        {
          type: 'list',
          items: [
            t(
              '**پرگردش‌ها نزدیک خروجی**: اقلامی که بیشتر برداشت می‌شوند، نزدیک باجه تحویل و در ارتفاع کمر قرار بگیرند.',
              '**Fast movers near the exit**: the most-picked items go near the issue counter, at waist height.',
            ),
            t(
              '**سنگین‌ها پایین**: کالای سنگین در طبقات پایین و کنار راهروی لیفتراک، و هرگز بیش از ظرفیت درج‌شده روی قفسه.',
              '**Heavy items low**: heavy goods on low levels next to forklift aisles, and never above the load rating marked on the rack.',
            ),
            t(
              '**حیاتی‌ها جدا و قابل دیدن**: قطعات با درجه بحرانی A در منطقه کنترل‌شده و با برچسب مشخص.',
              '**Critical items separate and visible**: criticality-A spares in a controlled area with clear tags.',
            ),
            t(
              '**یک کالا، یک محل** تا جای ممکن؛ اگر کالا در چند جایگاه است، ERP باید همه را نشان دهد.',
              '**One item, one place** where possible; if an item is in several bins, the ERP must show them all.',
            ),
            t(
              '**FEFO در دسترس**: بچی که زودتر منقضی می‌شود باید جلوتر و راحت‌تر در دسترس باشد.',
              '**FEFO within reach**: the batch that expires first should be at the front and easiest to reach.',
            ),
          ],
        },
        {
          type: 'table',
          caption: { fa: 'نمونه جانمایی در انبار میدان', en: 'Slotting example in the Field Warehouse' },
          head: [t('کالا', 'Item'), t('برداشت در سال', 'Picks per year'), t('وزن واحد (کیلوگرم)', 'Unit weight (kg)'), t('جایگاه پیشنهادی', 'Recommended location')],
          numericCols: [1, 2],
          rows: [
            [t('دستکش ایمنی نیتریل', 'Nitrile safety gloves'), 520, 0.1, t('منطقه A، کنار باجه، ارتفاع کمر', 'Zone A, by the counter, waist height')],
            [t('المنت فیلتر', 'Filter element'), 180, 4, t('منطقه A، طبقه میانی', 'Zone A, middle level')],
            [t('یاتاقان `6312-2Z`', 'Bearing `6312-2Z`'), 60, 1.2, t('منطقه A، جعبه کوچک', 'Zone A, small bin box')],
            [t('بسته آب‌بند K-201', 'K-201 seal kit'), 4, 12, t('منطقه C، قفس قطعات حیاتی', 'Zone C, critical spares cage')],
            [t('شیر کشویی 6 اینچ کلاس 300', '6-inch class 300 gate valve'), 3, 120, t('منطقه B، طبقه همکف پالت‌راک', 'Zone B, ground level of the pallet racking')],
            [t('شاخه لوله جداری `9-5/8"`', 'Casing joint `9-5/8"`'), 12, 850, t('منطقه Y، روی پایه لوله', 'Zone Y, on pipe racks')],
          ],
        },
        {
          type: 'formula',
          text: { fa: 'ضریب اشغال = جایگاه‌های اشغال‌شده ÷ کل جایگاه‌ها', en: 'Bin utilisation = occupied bins ÷ total bins' },
          note: {
            fa: 'در انبار میدان جدید: 1,530 ÷ 1,800 = 85٪. به‌عنوان یک قاعده سرانگشتی، بالاتر از حدود 85 تا 90٪ کار در انبار کند و پرخطا می‌شود و پایین‌تر از حدود 60٪ یعنی فضای زیادی بی‌استفاده مانده است.',
            en: 'In the new Field Warehouse: 1,530 ÷ 1,800 = 85%. As a rule of thumb, above roughly 85 to 90% the store becomes slow and error-prone, and below roughly 60% a lot of space is going unused.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'همه چیز را برچسب بزنید: هر جایگاه برچسب بارکددار دارد و هر کالا برچسبی با کد کالا، شماره بچ یا ذوب، درجه بحرانی بودن و تاریخ حفاظت بعدی. اسکن هنگام قرار دادن و برداشتن، خطای «کالای درست در جایگاه اشتباه» را تقریباً از بین می‌برد. نتیجه این نظم را در درس «شمارش موجودی و کنترل انبار» در دقت موجودی می‌بینید.',
            en: 'Label everything: every bin has a barcode label, and every item a tag with its material number, batch or heat number, criticality and next preservation date. Scanning at put-away and picking almost eliminates the “right item, wrong bin” error. You will see the payoff in inventory accuracy in the lesson on counting and inventory control.',
          },
        },
      ],
    },
    {
      id: 'special-storage',
      title: {
        fa: 'انبارش ویژه: مواد خطرناک، سیلندرها، مواد پرتوزا و منفجره',
        en: 'Special Storage: Hazardous Chemicals, Gas Cylinders, Radioactive Sources and Explosives',
      },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'مواد شیمیایی میدان نفتی، از متانول و حلال‌ها تا اسید کلریدریک برای اسیدکاری چاه و سود سوزآور، اگر درست نگهداری نشوند می‌توانند آتش‌سوزی، انفجار، مسمومیت یا آلودگی خاک ایجاد کنند. سه قاعده پایه: برای هر ماده **برگه اطلاعات ایمنی (SDS)** به‌روز داشته باشید؛ هر ظرف **برچسب استاندارد خطر (GHS)** داشته باشد؛ و **مواد ناسازگار** هرگز کنار هم نباشند.',
            en: 'Oilfield chemicals, from methanol and solvents to hydrochloric acid for well stimulation and caustic soda, can cause fire, explosion, poisoning or soil contamination if stored badly. Three basic rules: keep an up-to-date **safety data sheet (SDS)** for every substance; make sure every container carries a standard **GHS hazard label**; and never store **incompatible materials** together.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'راهنمای کلی جداسازی (همیشه SDS و مقررات محلی ملاک است)',
            en: 'General segregation guide (the SDS and local regulations always prevail)',
          },
          head: [t('گروه خطر', 'Hazard group'), t('نمونه در میدان', 'Oilfield example'), t('دور از', 'Keep away from'), t('نکته نگهداری', 'Storage note')],
          rows: [
            [
              t('مایعات اشتعال‌پذیر', 'Flammable liquids'),
              t('متانول، حلال‌ها، برخی بازدارنده‌های خوردگی', 'Methanol, solvents, some corrosion inhibitors'),
              t('اکسیدکننده‌ها، منابع جرقه و حرارت', 'Oxidisers, sources of sparks and heat'),
              t(
                'تهویه، حوضچه مهار نشتی، تجهیزات برقی ضدانفجار در صورت لزوم',
                'Ventilation, spill bund, explosion-proof electrics where required',
              ),
            ],
            [
              t('اکسیدکننده‌ها', 'Oxidisers'),
              t('هیپوکلریت کلسیم، پرسولفات‌ها', 'Calcium hypochlorite, persulfates'),
              t('مواد اشتعال‌پذیر، سوخت‌ها و مواد آلی', 'Flammables, fuels and organic materials'),
              t('محل خشک و جدا', 'Dry, separate area'),
            ],
            [
              t('اسیدها', 'Acids'),
              t('اسید کلریدریک برای اسیدکاری', 'Hydrochloric acid for stimulation'),
              t('بازها، فلزات فعال', 'Bases, reactive metals'),
              t('حوضچه مقاوم به اسید، جدا از بازها', 'Acid-resistant bund, separate from bases'),
            ],
            [t('بازها', 'Bases'), t('سود سوزآور', 'Caustic soda'), t('اسیدها', 'Acids'), t('حوضچه جدا', 'Separate bund')],
            [
              t('گازهای فشرده', 'Compressed gases'),
              t('اکسیژن، استیلن، نیتروژن', 'Oxygen, acetylene, nitrogen'),
              t('اکسیژن دور از گازهای سوختنی، روغن و گریس', 'Oxygen away from fuel gases, oil and grease'),
              t('قفس جدا؛ پایین‌تر را ببینید', 'Separate cage; see below'),
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'حوضچه مهار نشتی (Bund)', en: 'Spill bunds' },
          text: {
            fa: 'حوضچه مهار نشتی (مخزن ثانویه) نشت ظرف‌ها را نگه می‌دارد تا به خاک و آب نرسد. رویه HSE مسار پترولیوم (یک قاعده فرضی برای این دوره، هم‌راستا با راهنماهای رایج) می‌گوید ظرفیت حوضچه دست‌کم باید برابر **عدد بزرگ‌تر** از این دو باشد: 110٪ حجم بزرگ‌ترین ظرف، یا 25٪ حجم کل مواد ذخیره‌شده. الزامات دقیق را از مقررات زیست‌محیطی روز بررسی کنید.',
            en: 'A bund (secondary containment) holds leaks so they never reach soil or water. Masar Petroleum’s HSE procedure (an illustrative rule for this course, in line with common guidance) requires a bund capacity of at least the **greater** of: 110% of the largest container, or 25% of the total volume stored. Check the current environmental regulations for the exact requirement.',
          },
        },
        { type: 'h', text: { fa: 'سیلندرهای گاز', en: 'Gas cylinders' } },
        {
          type: 'list',
          items: [
            t('ایستاده نگهداری و با زنجیر یا تسمه مهار شوند؛ کلاهک شیر همیشه بسته باشد.', 'Store upright, chained or strapped, with the valve cap always on.'),
            t('سیلندرهای پر و خالی جدا و برچسب‌دار باشند.', 'Keep full and empty cylinders apart and labelled.'),
            t(
              'اکسیژن با فاصله یا دیوار مقاوم در برابر آتش از گازهای سوختنی (استیلن، LPG) جدا شود؛ فاصله یا مشخصات دیوار را مقررات محلی تعیین می‌کند.',
              'Separate oxygen from fuel gases (acetylene, LPG) by distance or a fire-resistant wall; local regulations set the distance or wall rating.',
            ),
            t('در محل سایه‌دار و با تهویه، دور از حرارت و آفتاب مستقیم.', 'Keep them shaded and ventilated, away from heat and direct sun.'),
            t(
              'سیلندری که تاریخ آزمون دوره‌ای معتبر یا برچسب محتوا ندارد، پذیرفته نشود.',
              'Do not accept a cylinder without a valid periodic test date or a content label.',
            ),
            t('با چرخ‌دستی مخصوص جابه‌جا شوند؛ هرگز غلتانده، کشیده یا انداخته نشوند.', 'Move them on a proper trolley; never roll, drag or drop them.'),
          ],
        },
        { type: 'h', text: { fa: 'مواد پرتوزا و منفجره', en: 'Radioactive sources and explosives' } },
        {
          type: 'p',
          text: {
            fa: 'در عملیات بالادستی، **چشمه‌های پرتوزای مهروموم‌شده** در ابزارهای نمودارگیری چاه و برخی نشانگرهای سطح به کار می‌روند و **مواد منفجره** در تفنگ‌های مشبک‌کاری و بعضی ابزارهای برش. این اقلام معمولاً متعلق به شرکت‌های خدماتی دارای مجوزند و فقط در **تأسیسات اختصاصی دارای مجوز** (انبار چشمه یا انبار مواد منفجره) و زیر نظر نهادهای ناظر ملی نگهداری می‌شوند. **این اقلام هرگز در انبار عمومی نگهداری نمی‌شوند** و فقط متخصصان دارای مجوز با آنها کار می‌کنند.',
            en: 'In upstream operations, **sealed radioactive sources** are used in well-logging tools and some level gauges, and **explosives** in perforating guns and some cutting tools. These items usually belong to licensed service companies and are kept only in **dedicated, licensed facilities** (source stores or explosives magazines) under the national regulators’ rules. **They are never stored in the general warehouse**, and only licensed specialists handle them.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'نقش انبار: بدان، ثبت کن، دست نزن', en: 'The warehouse’s role: know, record, don’t touch' },
          text: {
            fa: 'انبار باید بداند این اقلام در سایت هستند، از وجود مجوزها، فهرست بار و دفتر ورود و خروج اطمینان پیدا کند و آنها را از انبار عمومی دور نگه دارد. اگر بسته مشکوکی با علامت پرتو یا مواد منفجره بی‌اطلاع قبلی رسید: به آن **دست نزنید و آن را باز یا جابه‌جا نکنید**، اطراف را خالی و محدود کنید و فوراً HSE و پیمانکار دارای مجوز را خبر کنید.',
            en: 'The warehouse must know these items are on site, confirm that permits, manifests and entry and exit logs exist, and keep them away from the general store. If a suspicious package with a radiation or explosives mark arrives unannounced: **do not touch, open or move it**, clear and cordon off the area, and call HSE and the licensed contractor immediately.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'در ERP، اطلاعات خطر در داده پایه کالا ثبت می‌شود: کلاس خطر، شماره UN، کلاس انبارش و پیوند به SDS. بسیاری از ERPها می‌توانند هنگام قرار دادن کالا سازگاری کلاس انبارش را کنترل کنند و جلوی قرار گرفتن کالا در جایگاه نامناسب را بگیرند، و گزارش موجودی مواد خطرناک هر محل را برای HSE و آتش‌نشانی آماده کنند.',
            en: 'In the ERP, hazard information lives in the material master: hazard class, UN number, storage class and a link to the SDS. Many ERPs can check storage-class compatibility at put-away and stop an item going into an unsuitable bin, and can produce a hazardous inventory report per location for HSE and the fire service.',
          },
        },
      ],
    },
    {
      id: 'preservation',
      title: { fa: 'حفاظت از کالا: تجهیزات دوار و لوله‌های OCTG', en: 'Preservation: Rotating Equipment and OCTG' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**حفاظت (Preservation)** یعنی نگه داشتن کالای انبارشده در وضعیتی مانند روز اول تا زمان مصرف. قطعات نفت و گاز گاهی سال‌ها در انبار می‌مانند و ضمانت سازنده اغلب به رعایت دستورالعمل نگهداری او بستگی دارد. دستورالعمل سازنده همیشه مقدم است؛ آنچه در ادامه می‌آید روش‌های رایج است.',
            en: '**Preservation** means keeping stored items in as-new condition until they are used. Oil and gas parts can sit in the store for years, and the manufacturer’s warranty often depends on following its storage instructions. The manufacturer’s instructions always come first; what follows are common practices.',
          },
        },
        { type: 'h', text: { fa: 'تجهیزات دوار', en: 'Rotating equipment' } },
        {
          type: 'list',
          items: [
            t('در محل سرپوشیده، خشک و ترجیحاً با دمای کنترل‌شده نگهداری شوند.', 'Store indoors, dry, and ideally temperature-controlled.'),
            t(
              'شفت به‌صورت دوره‌ای (اغلب ماهانه) چند دور چرخانده شود تا در وضعیت جدیدی بایستد؛ این کار از آسیب یاتاقان‌ها و تاب برداشتن شفت جلوگیری می‌کند.',
              'Turn the shaft periodically (often monthly) a few turns so it comes to rest in a new position; this protects the bearings and prevents shaft bow.',
            ),
            t(
              'روتورهای بزرگ عمودی یا روی پایه‌های مخصوص در محل یاتاقان‌ها نگهداری شوند، نه روی پروانه یا بدنه.',
              'Store large rotors vertically or on proper cradles at the bearing journals, never resting on the impellers or body.',
            ),
            t(
              'دهانه‌ها بسته، با پوشش بازدارنده خوردگی بخارشونده (VCI) و رطوبت‌گیر؛ برخی اقلام طبق دستور سازنده با نیتروژن پر می‌شوند.',
              'Seal all openings and use vapour corrosion inhibitor (VCI) wrap and desiccant; some items are nitrogen-purged per the manufacturer.',
            ),
            t(
              'الکتروموتورها خشک نگه داشته شوند (گرم‌کن داخلی روشن، اگر دارد) و پیش از نصب، مقاومت عایقی آنها اندازه‌گیری شود.',
              'Keep electric motors dry (space heaters on, if fitted) and measure insulation resistance before installation.',
            ),
          ],
        },
        { type: 'h', text: { fa: 'لوله‌های OCTG', en: 'OCTG' } },
        {
          type: 'list',
          items: [
            t(
              'روی پایه‌های لوله و بالاتر از سطح زمین، هرگز روی خاک لخت؛ راهنمای عملی API RP 5C1 جزئیات نگهداری و جابه‌جایی را آورده است.',
              'On pipe racks, well above the ground, never on bare earth; the API RP 5C1 recommended practice gives the details of storage and handling.',
            ),
            t(
              'جدا بر اساس قطر، وزن، گرید و نوع اتصال، با نوارهای رنگی شناسایی گرید طبق API 5CT.',
              'Separate by size, weight, grade and connection, with API 5CT grade colour bands.',
            ),
            t(
              'محافظ رزوه همیشه روی هر دو سر؛ تمیز کردن و تجدید گریس نگهداری طبق برنامه.',
              'Thread protectors on both ends at all times; clean and re-apply storage compound on schedule.',
            ),
            t(
              'چوب فاصله‌انداز میان لایه‌ها، ارتفاع چیدمان محدود و گوه برای جلوگیری از غلتیدن.',
              'Timber spacers between layers, a limited stack height and chocks to stop rolling.',
            ),
            t(
              'جابه‌جایی با تسمه نایلونی یا میله پخش‌کننده بار؛ هرگز با قلاب در رزوه یا زنجیر روی بدنه.',
              'Lift with nylon slings or a spreader bar; never with hooks in the threads or chains on the body.',
            ),
          ],
        },
        {
          type: 'table',
          caption: {
            fa: 'برنامه حفاظت انبار میدان (نمونه؛ دستور سازنده و استانداردها مقدم است)',
            en: 'Field Warehouse preservation plan (illustrative; manufacturer instructions and standards prevail)',
          },
          head: [t('کالا', 'Item'), t('کار', 'Task'), t('تناوب', 'Frequency'), t('سابقه', 'Record')],
          rows: [
            [
              t('پمپ یدکی P-105', 'Spare pump P-105'),
              t('چرخاندن شفت به وضعیت جدید', 'Turn the shaft to a new position'),
              t('ماهانه', 'Monthly'),
              t('چک‌لیست حفاظت در ERP', 'Preservation checklist in the ERP'),
            ],
            [
              t('الکتروموتور یدکی 250 کیلووات', 'Spare 250 kW motor'),
              t('آزمون مقاومت عایقی، کنترل گرم‌کن', 'Insulation resistance test, heater check'),
              t('سه‌ماهه', 'Quarterly'),
              t('برگه آزمون', 'Test sheet'),
            ],
            [
              t('روتور یدکی K-201', 'K-201 spare rotor'),
              t('کنترل پوشش VCI، رطوبت‌گیر و نشانگر رطوبت', 'Check VCI wrap, desiccant and humidity indicator'),
              t('سه‌ماهه', 'Quarterly'),
              t('چک‌لیست و عکس', 'Checklist and photos'),
            ],
            [
              t('لوله جداری و مغزی', 'Casing and tubing'),
              t('کنترل محافظ‌ها، تجدید گریس نگهداری', 'Check protectors, re-apply storage compound'),
              t('هر 6 ماه', 'Every 6 months'),
              t('گزارش بازرسی محوطه لوله', 'Pipe-yard inspection report'),
            ],
            [
              t('آب‌بندهای لاستیکی', 'Elastomer seals'),
              t('کنترل تاریخ انقضا، دما و نور', 'Check expiry, temperature and light'),
              t('در هر شمارش', 'At every count'),
              t('گزارش عمر انبارداری', 'Shelf-life report'),
            ],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'کارهای حفاظت را می‌توان در ERP به‌صورت **برنامه نگهداری پیشگیرانه** روی کالای انبارشده تعریف کرد تا سیستم در موعد دستور کار بسازد، انجام کار ثبت شود و هزینه مواد و نفرساعت حفاظت به مرکز هزینه انبار (CC-3300) برسد. سابقه کامل حفاظت هم در ادعای ضمانت و هم در حسابرسی به کار می‌آید.',
            en: 'Preservation tasks can be set up in the ERP as **preventive maintenance plans** on the stored items, so the system raises work orders when they fall due, completion is recorded, and the cost of preservation materials and labour goes to the warehouse cost centre (CC-3300). A complete preservation history helps both in warranty claims and in audits.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'برچسب حفاظت', en: 'Preservation tag' },
          text: {
            fa: 'روی هر کالای مشمول حفاظت یک برچسب بگذارید: تاریخ آخرین حفاظت، کار انجام‌شده، امضا و تاریخ بعدی. هر کسی که از کنار قفسه رد شود، می‌تواند ببیند کاری عقب افتاده است یا نه.',
            en: 'Put a tag on every item under preservation: date of the last preservation, the task done, a signature and the next due date. Anyone walking past the rack can see whether a task is overdue.',
          },
        },
      ],
    },
    {
      id: 'hse-erp',
      title: { fa: 'قواعد HSE، مستندات و ثبت‌های ERP', en: 'HSE Rules, Records and ERP Postings' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'ایمنی انبار در جزئیات روزانه ساخته می‌شود. قواعد اصلی انبارهای مسار پترولیوم این‌هاست:',
            en: 'Warehouse safety is built in the daily details. The core rules in Masar Petroleum’s stores are:',
          },
        },
        {
          type: 'list',
          items: [
            t(
              'تجهیزات حفاظت فردی: کفش ایمنی و دستکش همه جا، کلاه ایمنی در محوطه و زیر بار.',
              'PPE: safety shoes and gloves everywhere, a hard hat in the yard and under loads.',
            ),
            t(
              'لیفتراک و جرثقیل فقط با راننده دارای گواهی و بازرسی روزانه پیش از کار.',
              'Forklifts and cranes only with certified operators and a daily pre-use check.',
            ),
            t(
              'طرح بلند کردن بار (Lifting plan) برای بارهای سنگین یا نامتعارف، مانند بسته لوله یا روتور.',
              'A lifting plan for heavy or awkward lifts, such as pipe bundles or rotors.',
            ),
            t(
              'قفسه‌ها بازرسی‌شده و دارای تابلوی ظرفیت؛ راهروها و درهای خروج اضطراری همیشه باز.',
              'Racks inspected and marked with their load rating; aisles and emergency exits always clear.',
            ),
            t('مجوز کار (Permit to work) برای کار گرم یا هر کار غیرعادی داخل انبار.', 'A permit to work for hot work or any non-routine job inside the store.'),
            t(
              'خاموش‌کننده و سامانه اعلام حریق متناسب با خطر کالاها، کیت نشت‌گیر، چشم‌شوی و تمرین‌های دوره‌ای اضطراری.',
              'Extinguishers and fire detection suited to the stored hazards, spill kits, eyewash stations and regular emergency drills.',
            ),
            t('گزارش هر حادثه و شبه‌حادثه.', 'Reporting of every incident and near miss.'),
          ],
        },
        {
          type: 'table',
          caption: { fa: 'سوابق اصلی HSE و انبار', en: 'Key HSE and warehouse records' },
          head: [t('سند', 'Record'), t('هدف', 'Purpose'), t('مسئول', 'Owner')],
          rows: [
            [t('دفتر SDS', 'SDS register'), t('اطلاعات خطر هر ماده شیمیایی', 'Hazard information for every chemical'), t('HSE و انبار', 'HSE and warehouse')],
            [
              t('فهرست موجودی مواد خطرناک', 'Hazardous inventory register'),
              t('چه ماده‌ای، چه مقدار، کجا', 'What, how much and where'),
              t('سرپرست انبار', 'Warehouse supervisor'),
            ],
            [
              t('سوابق حفاظت', 'Preservation records'),
              t('اثبات مراقبت از کالا برای ضمانت و حسابرسی', 'Proof of care for warranty and audit'),
              t('انباردار', 'Storekeeper'),
            ],
            [
              t('گواهی بازرسی قفسه‌ها و تجهیزات بالابر', 'Rack and lifting equipment certificates'),
              t('ایمن بودن تجهیزات', 'Safe equipment'),
              t('نگهداری و HSE', 'Maintenance and HSE'),
            ],
            [
              t('سوابق آموزش و صلاحیت', 'Training and competence records'),
              t('افراد صلاحیت‌دار (لیفتراک، مواد خطرناک)', 'Competent people (forklift, hazmat)'),
              t('منابع انسانی و HSE', 'HR and HSE'),
            ],
            [t('گزارش حادثه و شبه‌حادثه', 'Incident and near-miss reports'), t('درس گرفتن و پیشگیری', 'Learning and prevention'), t('HSE', 'HSE')],
            [
              t('پرونده گواهی‌ها (MTC و CoC) متصل به بچ', 'Certificate files (MTC, CoC) linked to batches'),
              t('قابلیت ردیابی', 'Traceability'),
              t('کنترل کیفیت و انبار', 'QC and warehouse'),
            ],
          ],
        },
        { type: 'h', text: { fa: 'در ERP: داده پایه، اسناد، نقش‌ها و ثبت مالی', en: 'In the ERP: master data, documents, roles and Finance postings' } },
        {
          type: 'table',
          head: [t('بخش', 'Element'), t('در این درس', 'In this lesson')],
          rows: [
            [
              t('داده پایه', 'Master data'),
              t(
                'سایت‌ها، محل‌های نگهداری، جایگاه‌ها، اطلاعات خطر کالا، برنامه‌های حفاظت',
                'Sites, storage locations, bins, hazard data, preservation plans',
              ),
            ],
            [
              t('اسناد تراکنشی', 'Transaction documents'),
              t(
                'جابه‌جایی جایگاه به جایگاه، انتقال بین محل‌ها و سایت‌ها، دستور کار حفاظت، حواله مواد حفاظتی، سند اسقاط',
                'Bin-to-bin moves, location and site transfers, preservation work orders, issues of preservation materials, scrapping documents',
              ),
            ],
            [
              t('نقش‌ها و تأییدها', 'Roles and approvals'),
              t(
                'انباردار جابه‌جایی‌ها را ثبت می‌کند؛ سرپرست انبار انتقال بین سایت‌ها و درخواست اسقاط را تا سقف اختیار تأیید می‌کند؛ مسئول HSE محل نگهداری مواد خطرناک را تأیید می‌کند؛ حسابدار موجودی اسقاط را بررسی می‌کند و مدیر مالی بالاتر از سقف تأیید می‌دهد',
                'The storekeeper posts movements; the warehouse supervisor approves site transfers and scrapping requests up to a limit; the HSE officer approves where hazardous goods are stored; the inventory accountant reviews scrapping, and the finance manager approves above the limit',
              ),
            ],
            [
              t('ثبت خودکار مالی', 'Automatic Finance posting'),
              t(
                'جابه‌جایی جایگاه یا محل در یک سایت: ندارد. انتقال بین سایت‌ها، حواله مواد حفاظتی و اسقاط: دارد (سند زیر)',
                'Bin or location moves within a site: none. Site transfers, preservation material issues and scrapping: yes (see below)',
              ),
            ],
          ],
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های خودکار مالی انبار میدان در یک ماه', en: 'Automatic Finance entries in the Field Warehouse for one month' },
          entries: [
            {
              date: { fa: 'حواله مواد حفاظتی', en: 'Issue of preservation materials' },
              lines: [
                { account: ac.warehouseExp, debit: 2600 },
                { account: ac.consumables, credit: 2600 },
              ],
              memo: {
                fa: 'پوشش VCI، رطوبت‌گیر و گریس نگهداری رزوه برای دستورهای کار حفاظت؛ هزینه به مرکز هزینه انبار (CC-3300) می‌رود.',
                en: 'VCI wrap, desiccant and thread storage compound for preservation work orders; the cost goes to the warehouse cost centre (CC-3300).',
              },
            },
            {
              date: { fa: 'اسقاط با تأیید', en: 'Approved scrapping' },
              lines: [
                { account: ac.writeOff, debit: 2400 },
                { account: ac.chemicals, credit: 2400 },
              ],
              memo: {
                fa: '4 بشکه بازدارنده خوردگی × 600 که زیر آفتاب مانده، نشت کرده و منقضی شده بودند؛ با گزارش بازرسی، عکس و تأیید سرپرست انبار و مالی.',
                en: '4 drums of corrosion inhibitor × 600 that had been left in the sun, leaked and expired; scrapped with an inspection report, photos and approval by the warehouse supervisor and Finance.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: کاست ریکاوری', en: 'In practice: cost recovery' },
          text: {
            fa: 'هزینه‌های جاری انبار (حفاظت، نیروی انسانی، برق و نگهداری ساختمان) معمولاً هزینه سربار حساب می‌شوند و فقط وقتی قابل بازیافت‌اند که با روش تخصیص مصوب به عملیات تخصیص یابند. در روش‌های حسابداری بسیاری از قراردادهای نفتی، زیان ناشی از سهل‌انگاری یا نگهداری نادرست ممکن است پذیرفته نشود. پس برای هر اسقاط، علت، گزارش بازرسی، عکس و تأییدها را نگه دارید و روش حسابداری قرارداد خود را بررسی کنید.',
            en: 'Running costs of the warehouse (preservation, staff, power and building upkeep) are usually overheads, recoverable only when allocated to operations by an approved method. Under the accounting procedures of many petroleum contracts, losses caused by negligence or poor storage may be disallowed. So for every write-off keep the cause, the inspection report, photos and approvals, and check your own contract’s accounting procedure.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباهات رایج', en: 'Common mistakes' },
          text: {
            fa: 'چیدن مواد ناسازگار کنار هم چون «جا بود»؛ کار کردن بدون ثبت جایگاه در ERP؛ رها کردن برنامه حفاظت تا وقتی که قطعه خراب شود؛ دور انداختن کالای آسیب‌دیده بدون سند اسقاط، که موجودی و حساب موجودی را بیش از واقع نشان می‌دهد؛ دست زدن افراد بدون مجوز به اقلام پرتوزا یا منفجره؛ و جابه‌جایی کالا میان سایت‌ها با کامیون اما بدون سند انتقال.',
            en: 'Storing incompatible materials together because “there was space”; running the store with no bins in the ERP; letting the preservation plan lapse until a part fails; throwing away damaged goods without a scrapping document, which leaves stock and the inventory account overstated; letting unlicensed people handle radioactive or explosive items; and moving goods between sites by truck but without a transfer document.',
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
          title: { fa: 'محل نگهداری درست را انتخاب کنید', en: 'Choose the right storage location' },
          difficulty: 'easy',
          problem: {
            fa: 'پنج قلم زیر با رسید کالا (GRN) در انبار مرکزی (سایت MP10) تحویل گرفته شده‌اند. برای هر کدام محل نگهداری (1001 تا 1004) را انتخاب کنید و دلیلش را بگویید. سپس نشانی جایگاه `B-04-01-C` را توضیح دهید.',
            en: 'The five items below have been received at the Central Warehouse (site MP10) with a GRN. Choose the storage location (1001 to 1004) for each and give the reason. Then explain bin address `B-04-01-C`.',
          },
          given: {
            head: [t('ردیف', 'No.'), t('کالا', 'Item')],
            rows: [
              [1, t('لوله مغزی `3-1/2"` گرید L80', '`3-1/2"` L80 tubing')],
              [2, t('بشکه‌های متانول', 'Drums of methanol')],
              [3, t('سیلندرهای اکسیژن', 'Oxygen cylinders')],
              [4, t('یاتاقان `6312-2Z`', '`6312-2Z` bearings')],
              [5, t('مخزن‌های IBC اسید کلریدریک برای اسیدکاری', 'IBC totes of hydrochloric acid for stimulation')],
            ],
          },
          hint: {
            fa: 'به محل‌های نگهداری MP10 در جدول ساختار انبار نگاه کنید و جداسازی مواد ناسازگار را فراموش نکنید.',
            en: 'Look at the MP10 storage locations in the structure table, and remember segregation of incompatibles.',
          },
          solution: [
            {
              type: 'table',
              head: [t('ردیف', 'No.'), t('محل نگهداری', 'Storage location'), t('دلیل', 'Reason')],
              rows: [
                [1, t('MP10/1002 محوطه لوله', 'MP10/1002 pipe yard'), t('لوله OCTG روی پایه لوله، با محافظ رزوه', 'OCTG on pipe racks, with thread protectors')],
                [
                  2,
                  t('MP10/1003 انبار مواد شیمیایی', 'MP10/1003 chemical store'),
                  t(
                    'مایع اشتعال‌پذیر؛ در بخش مواد اشتعال‌پذیر با حوضچه، دور از اکسیدکننده‌ها',
                    'Flammable liquid; in the flammables bay with a bund, away from oxidisers',
                  ),
                ],
                [
                  3,
                  t('MP10/1004 قفس سیلندرها', 'MP10/1004 cylinder cage'),
                  t('ایستاده و مهارشده، جدا از سیلندرهای استیلن', 'Upright and chained, separate from acetylene cylinders'),
                ],
                [
                  4,
                  t('MP10/1001 انبار اصلی قطعات', 'MP10/1001 main spares store'),
                  t('قطعه یدکی کوچک؛ قفسه با جعبه و برچسب جایگاه', 'Small spare part; shelving with bin boxes and a bin label'),
                ],
                [
                  5,
                  t('MP10/1003 انبار مواد شیمیایی', 'MP10/1003 chemical store'),
                  t(
                    'اسید؛ حوضچه مقاوم به اسید و جدا از بازها مانند سود سوزآور',
                    'Acid; acid-resistant bund, separate from bases such as caustic soda',
                  ),
                ],
              ],
            },
            {
              type: 'p',
              text: {
                fa: 'جایگاه `B-04-01-C` یعنی منطقه B (قطعات سنگین)، قفسه 04، طبقه 01 (پایین‌ترین طبقه) و موقعیت C.',
                en: 'Bin `B-04-01-C` means zone B (heavy spares), rack 04, level 01 (the lowest level), position C.',
              },
            },
          ],
          answer: {
            fa: '1 به 1002؛ 2 و 5 به 1003 (در بخش‌های جدا)؛ 3 به 1004؛ 4 به 1001. `B-04-01-C` یعنی منطقه B، قفسه 4، طبقه 1، موقعیت C.',
            en: '1 to 1002; 2 and 5 to 1003 (in separate bays); 3 to 1004; 4 to 1001. `B-04-01-C` means zone B, rack 4, level 1, position C.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'جانمایی و ضریب اشغال', en: 'Slotting and bin utilisation' },
          difficulty: 'medium',
          problem: {
            fa: 'منطقه A انبار میدان 600 جایگاه دارد که 450 تای آن اشغال است. (الف) ضریب اشغال منطقه A چقدر است؟ (ب) پنج کالای جدول باید جانمایی شوند. آنها را بر اساس دفعات برداشت مرتب کنید و بگویید کدام دو کالا کنار باجه تحویل قرار بگیرند. (ج) اگر با رسیدن کالاهای جدید 90 جایگاه دیگر اشغال شود، ضریب اشغال چقدر می‌شود و چه هشداری دارد؟',
            en: 'Zone A of the Field Warehouse has 600 bins, of which 450 are occupied. (a) What is zone A’s bin utilisation? (b) The five items in the table need slotting. Rank them by picks and say which two belong next to the issue counter. (c) If new deliveries fill another 90 bins, what does utilisation become, and what is the warning?',
          },
          given: {
            head: [t('کالا', 'Item'), t('برداشت در سال', 'Picks per year')],
            numericCols: [1],
            rows: [
              [t('واشر اسپیرال‌وند 2 اینچ', '2-inch spiral-wound gasket'), 140],
              [t('عینک ایمنی', 'Safety glasses'), 310],
              [t('فیوز 10 آمپر', '10 A fuse'), 45],
              [t('المنت فیلتر روغن', 'Oil filter element'), 220],
              [t('ترانسمیتر فشار یدکی', 'Spare pressure transmitter'), 6],
            ],
          },
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('(الف) ضریب اشغال', '(a) Utilisation'), text: t('450 ÷ 600 = 75٪.', '450 ÷ 600 = 75%.') },
                {
                  title: t('(ب) جانمایی', '(b) Slotting'),
                  text: t(
                    'ترتیب: عینک ایمنی (310)، المنت فیلتر (220)، واشر (140)، فیوز (45)، ترانسمیتر (6). عینک ایمنی و المنت فیلتر کنار باجه و در ارتفاع کمر قرار می‌گیرند؛ ترانسمیتر یدکی، اگر درجه بحرانی A دارد، به قفس قطعات حیاتی می‌رود.',
                    'Order: safety glasses (310), filter element (220), gasket (140), fuse (45), transmitter (6). Safety glasses and filter elements go next to the counter at waist height; the spare transmitter, if it is criticality A, goes to the critical spares cage.',
                  ),
                },
                {
                  title: t('(ج) پس از رسیدهای جدید', '(c) After the new deliveries'),
                  text: t(
                    '(450 + 90) ÷ 600 = 540 ÷ 600 = 90٪. این عدد در محدوده‌ای است که کار کند و پرخطا می‌شود؛ باید اقلام راکد بازبینی، جایگاه‌های نیمه‌پر یکی، یا فضای تازه برنامه‌ریزی شود.',
                    '(450 + 90) ÷ 600 = 540 ÷ 600 = 90%. That is in the range where work becomes slow and error-prone; review slow movers, consolidate half-empty bins or plan more space.',
                  ),
                },
              ],
            },
          ],
          answer: {
            fa: '75٪؛ عینک ایمنی و المنت فیلتر کنار باجه؛ پس از رسیدهای جدید 90٪، که هشدار کمبود فضاست.',
            en: '75%; safety glasses and filter elements by the counter; 90% after the new deliveries, a warning that space is running out.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'ظرفیت حوضچه مهار نشتی', en: 'Sizing a spill bund' },
          difficulty: 'medium',
          problem: {
            fa: 'در یک بخش انبار مواد شیمیایی، 6 مخزن IBC هزار لیتری و 10 بشکه 200 لیتری بازدارنده خوردگی نگهداری می‌شود. طبق رویه مسار پترولیوم، ظرفیت حوضچه باید دست‌کم برابر عدد بزرگ‌تر از این دو باشد: 110٪ بزرگ‌ترین ظرف، یا 25٪ حجم کل. (الف) ظرفیت لازم چقدر است؟ (ب) حوضچه فعلی 1,500 لیتر است؛ کافی است؟ (ج) اگر نتوان حوضچه را بزرگ کرد، حداکثر حجم مجاز ذخیره در این بخش چقدر است؟',
            en: 'One bay of the chemical store holds 6 IBC totes of 1,000 litres and 10 drums of 200 litres of corrosion inhibitor. Under Masar Petroleum’s procedure, the bund must hold at least the greater of: 110% of the largest container, or 25% of the total volume. (a) What capacity is required? (b) The current bund holds 1,500 litres; is it enough? (c) If the bund cannot be enlarged, what is the most that can be stored in this bay?',
          },
          hint: {
            fa: 'هر دو شرط را حساب کنید و عدد بزرگ‌تر را بردارید.',
            en: 'Work out both tests and take the larger figure.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: t('حجم کل', 'Total volume'),
                  text: t(
                    '6 × 1,000 + 10 × 200 = 6,000 + 2,000 = 8,000 لیتر.',
                    '6 × 1,000 + 10 × 200 = 6,000 + 2,000 = 8,000 litres.',
                  ),
                },
                {
                  title: t('(الف) ظرفیت لازم', '(a) Required capacity'),
                  text: t(
                    '110٪ بزرگ‌ترین ظرف: 1.1 × 1,000 = 1,100 لیتر. 25٪ حجم کل: 0.25 × 8,000 = 2,000 لیتر. عدد بزرگ‌تر: 2,000 لیتر.',
                    '110% of the largest container: 1.1 × 1,000 = 1,100 litres. 25% of total: 0.25 × 8,000 = 2,000 litres. The greater: 2,000 litres.',
                  ),
                },
                {
                  title: t('(ب) حوضچه فعلی', '(b) The current bund'),
                  text: t('حوضچه 1,500 لیتری کافی نیست و 500 لیتر کم دارد.', 'The 1,500-litre bund is not enough; it is 500 litres short.'),
                },
                {
                  title: t('(ج) حداکثر ذخیره', '(c) Maximum storage'),
                  text: t(
                    'با حوضچه 1,500 لیتری، حجم کل حداکثر 1,500 ÷ 0.25 = 6,000 لیتر است (شرط 110٪ هم برقرار است، چون 1,500 بیشتر از 1,100 است). پس باید 2,000 لیتر، مثلاً 2 مخزن IBC، به بخش دیگری منتقل شود.',
                    'With a 1,500-litre bund the total can be at most 1,500 ÷ 0.25 = 6,000 litres (the 110% test also passes, since 1,500 is above 1,100). So 2,000 litres, for example 2 IBC totes, must move to another bay.',
                  ),
                },
              ],
            },
          ],
          answer: {
            fa: 'ظرفیت لازم 2,000 لیتر است؛ حوضچه 1,500 لیتری کافی نیست؛ حداکثر 6,000 لیتر قابل نگهداری است.',
            en: 'Required capacity 2,000 litres; the 1,500-litre bund is not enough; at most 6,000 litres can be stored.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'ثبت‌های یک ماه و مانده‌ها', en: 'A month’s postings and balances' },
          difficulty: 'hard',
          problem: {
            fa: 'مانده‌های ابتدای ماه: موجودی قطعات یدکی سایت MP10 برابر 250,000، موجودی قطعات یدکی سایت MP20 برابر 80,000، موجودی مواد شیمیایی (MP10) برابر 60,000 و موجودی اقلام مصرفی (MP20) برابر 20,000. رویدادهای ماه: (1) انتقال 6 بسته آب‌بند K-201 به میانگین 1,800 از MP10 به MP20؛ (2) جابه‌جایی همان بسته‌ها از جایگاه پذیرش به جایگاه `C-01-02-A` در MP20؛ (3) حواله مواد حفاظتی به ارزش 3,200 از اقلام مصرفی به مرکز هزینه انبار (CC-3300)؛ (4) اسقاط 3 بشکه بازدارنده خوردگی منقضی به ارزش هر بشکه 600. ثبت‌های خودکار را بنویسید و مانده‌های پایان ماه را حساب کنید.',
            en: 'Opening balances: spare parts inventory at site MP10 250,000, spare parts inventory at site MP20 80,000, chemicals inventory (MP10) 60,000 and consumables inventory (MP20) 20,000. During the month: (1) 6 K-201 seal kits at an average of 1,800 are transferred from MP10 to MP20; (2) the same kits are moved from the receiving bin to bin `C-01-02-A` in MP20; (3) preservation materials worth 3,200 are issued from consumables to the warehouse cost centre (CC-3300); (4) 3 expired drums of corrosion inhibitor at 600 each are scrapped. Write the automatic entries and work out the month-end balances.',
          },
          hint: {
            fa: 'یکی از چهار رویداد سند مالی ندارد.',
            en: 'One of the four events has no Finance document.',
          },
          solution: [
            {
              type: 'journal',
              title: { fa: 'ثبت‌های خودکار', en: 'Automatic entries' },
              entries: [
                {
                  date: { fa: '(1) انتقال بین سایت‌ها', en: '(1) Site-to-site transfer' },
                  lines: [
                    { account: ac.sparesMP20, debit: 10800 },
                    { account: ac.sparesMP10, credit: 10800 },
                  ],
                  memo: { fa: '6 × 1,800 = 10,800', en: '6 × 1,800 = 10,800' },
                },
                {
                  date: { fa: '(3) حواله مواد حفاظتی', en: '(3) Preservation materials' },
                  lines: [
                    { account: ac.warehouseExp, debit: 3200 },
                    { account: ac.consumables, credit: 3200 },
                  ],
                },
                {
                  date: { fa: '(4) اسقاط', en: '(4) Scrapping' },
                  lines: [
                    { account: ac.writeOff, debit: 1800 },
                    { account: ac.chemicals, credit: 1800 },
                  ],
                  memo: { fa: '3 × 600 = 1,800', en: '3 × 600 = 1,800' },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              text: {
                fa: 'رویداد (2) فقط سند انبار دارد: جابه‌جایی جایگاه در یک سایت نه ارزش را تغییر می‌دهد نه حساب را.',
                en: 'Event (2) creates only a material document: a bin move within one site changes neither value nor account.',
              },
            },
            {
              type: 'table',
              head: [t('حساب', 'Account'), t('ابتدای ماه', 'Opening'), t('افزایش', 'Increase'), t('کاهش', 'Decrease'), t('پایان ماه', 'Closing')],
              numericCols: [1, 2, 3, 4],
              rows: [
                [t('قطعات یدکی MP10', 'Spare parts MP10'), 250000, 0, 10800, 239200],
                [t('قطعات یدکی MP20', 'Spare parts MP20'), 80000, 10800, 0, 90800],
                [t('مواد شیمیایی', 'Chemicals'), 60000, 0, 1800, 58200],
                [t('اقلام مصرفی', 'Consumables'), 20000, 0, 3200, 16800],
                [t('جمع', 'Total'), 410000, 10800, 15800, 405000],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'کل موجودی 5,000 کم شد (3,200 + 1,800). انتقال بین سایت‌ها جمع موجودی شرکت را تغییر نمی‌دهد و فقط آن را جابه‌جا می‌کند.',
                en: 'Total inventory fell by 5,000 (3,200 + 1,800). The site transfer does not change the company’s total stock; it only moves it.',
              },
            },
          ],
          answer: {
            fa: 'MP10: 239,200؛ MP20: 90,800؛ مواد شیمیایی: 58,200؛ اقلام مصرفی: 16,800؛ جمع 405,000. رویداد (2) ثبت مالی ندارد.',
            en: 'MP10: 239,200; MP20: 90,800; chemicals: 58,200; consumables: 16,800; total 405,000. Event (2) has no Finance entry.',
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
            t(
              'ERP انبار را به‌صورت شرکت، سایت، محل نگهداری و جایگاه می‌شناسد؛ ارزش‌گذاری معمولاً در سطح سایت است.',
              'The ERP sees the warehouse as company code, site, storage location and bin; stock is usually valued at site level.',
            ),
            t(
              'جابه‌جایی جایگاه یا محل در یک سایت سند مالی ندارد؛ انتقال بین سایت‌ها، مصرف مواد و اسقاط سند مالی دارند.',
              'Bin or location moves within a site post nothing to Finance; site transfers, material consumption and scrapping do.',
            ),
            t(
              'چیدمان از جریان یک‌طرفه کالا پیروی می‌کند و جانمایی بر اساس دفعات برداشت، وزن و درجه بحرانی بودن انجام می‌شود.',
              'Layout follows a one-way flow of goods, and slotting follows pick frequency, weight and criticality.',
            ),
            t(
              'مواد ناسازگار جدا، هر ماده با SDS و برچسب، حوضچه مهار کافی، و سیلندرها ایستاده، مهارشده و جدا.',
              'Incompatibles apart, every chemical with an SDS and label, adequate bunds, and cylinders upright, chained and separated.',
            ),
            t(
              'مواد پرتوزا و منفجره فقط در تأسیسات دارای مجوز و به دست متخصصان دارای مجوز؛ انبار فقط می‌داند، ثبت می‌کند و دست نمی‌زند.',
              'Radioactive sources and explosives stay in licensed facilities with licensed specialists; the warehouse knows, records and does not touch.',
            ),
            t(
              'حفاظت از تجهیزات دوار و OCTG برنامه‌ریزی، اجرا و ثبت می‌شود؛ زیان ناشی از نگهداری بد ممکن است در کاست ریکاوری پذیرفته نشود.',
              'Preservation of rotating equipment and OCTG is planned, done and recorded; losses from poor storage may be disallowed in cost recovery.',
            ),
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: t('سایت (Plant)', 'Site (plant)'),
              def: t(
                'محل عملیاتی با موجودی خودش که ارزش‌گذاری موجودی معمولاً در آن انجام می‌شود.',
                'An operating location with its own stock, usually the level at which stock is valued.',
              ),
            },
            {
              term: t('محل نگهداری', 'Storage location'),
              def: t('بخشی فیزیکی یا منطقی از یک سایت که موجودی در آن نگهداری می‌شود.', 'A physical or logical area within a site where stock is kept.'),
            },
            { term: t('جایگاه (Bin)', 'Bin'), def: t('نشانی دقیق یک قفسه یا موقعیت در انبار.', 'The exact address of a shelf or position in the store.') },
            { term: t('موجودی آزاد', 'Unrestricted stock'), def: t('موجودی قابل رزرو و حواله.', 'Stock that can be reserved and issued.') },
            {
              term: t('موجودی در انتظار بازرسی', 'Quality-inspection stock'),
              def: t('کالای رسیده که هنوز برای مصرف تأیید نشده است.', 'Received stock not yet approved for use.'),
            },
            {
              term: t('موجودی مسدود', 'Blocked stock'),
              def: t('کالای آسیب‌دیده، ردشده یا در انتظار تصمیم که قابل حواله نیست.', 'Damaged, rejected or on-hold stock that cannot be issued.'),
            },
            {
              term: t('جانمایی (Slotting)', 'Slotting'),
              def: t(
                'تعیین جایگاه هر کالا بر اساس دفعات برداشت، وزن، اندازه و درجه بحرانی بودن.',
                'Deciding each item’s location by pick frequency, weight, size and criticality.',
              ),
            },
            { term: t('ضریب اشغال', 'Bin utilisation'), def: t('جایگاه‌های اشغال‌شده تقسیم بر کل جایگاه‌ها.', 'Occupied bins divided by total bins.') },
            {
              term: t('برگه اطلاعات ایمنی (SDS)', 'Safety data sheet (SDS)'),
              def: t(
                'سند سازنده درباره خطرها، نگهداری، جابه‌جایی و اقدامات اضطراری یک ماده.',
                'The manufacturer’s document on a substance’s hazards, storage, handling and emergency measures.',
              ),
            },
            {
              term: t('مواد ناسازگار', 'Incompatible materials'),
              def: t(
                'موادی که در تماس با هم واکنش خطرناک می‌دهند و باید جدا نگهداری شوند.',
                'Substances that react dangerously on contact and must be stored apart.',
              ),
            },
            {
              term: t('حوضچه مهار نشتی', 'Spill bund'),
              def: t('مخزن ثانویه‌ای که نشت ظرف‌ها را نگه می‌دارد.', 'Secondary containment that holds leaks from containers.'),
            },
            {
              term: t('حفاظت (Preservation)', 'Preservation'),
              def: t('مراقبت دوره‌ای برای نگه داشتن کالای انبارشده در وضعیتی مانند روز اول.', 'Periodic care that keeps stored items in as-new condition.'),
            },
            {
              term: t('اسقاط', 'Scrapping (write-off)'),
              def: t(
                'خارج کردن کالای غیرقابل استفاده از موجودی با سند و تأیید؛ ارزش آن هزینه می‌شود.',
                'Removing unusable stock with a document and approval; its value is expensed.',
              ),
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: {
        fa: 'ترتیب درست سطوح سازمانی انبار در ERP، از بزرگ به کوچک، کدام است؟',
        en: 'What is the correct order of warehouse levels in the ERP, from largest to smallest?',
      },
      options: [
        t('جایگاه، محل نگهداری، سایت، شرکت', 'Bin, storage location, site, company code'),
        t('سایت، شرکت، جایگاه، محل نگهداری', 'Site, company code, bin, storage location'),
        t('شرکت، جایگاه، سایت، محل نگهداری', 'Company code, bin, site, storage location'),
        t('شرکت، سایت، محل نگهداری، جایگاه', 'Company code, site, storage location, bin'),
      ],
      answer: 3,
      explain: {
        fa: 'شرکت شخصیت حقوقی است، سایت محل عملیاتی آن، محل نگهداری بخشی از سایت و جایگاه نشانی دقیق قفسه. گزینه اول همین ترتیب را برعکس آورده است.',
        en: 'The company code is the legal entity, the site its operating location, the storage location an area within the site, and the bin the exact shelf address. The first option is the same order reversed.',
      },
    },
    {
      q: {
        fa: 'یک انبار 1,600 جایگاه دارد که 1,440 تای آن اشغال است. ضریب اشغال چقدر است؟',
        en: 'A store has 1,600 bins, 1,440 of them occupied. What is the bin utilisation?',
      },
      options: [t('10٪', '10%'), t('90٪', '90%'), t('111٪', '111%'), t('160٪', '160%')],
      answer: 1,
      explain: {
        fa: '1,440 ÷ 1,600 = 90٪؛ عددی در محدوده هشدار که کار انبار را کند می‌کند. 10٪ سهم جایگاه‌های خالی است و 111٪ از تقسیم برعکس به دست می‌آید.',
        en: '1,440 ÷ 1,600 = 90%, in the warning range where work slows down. 10% is the share of empty bins and 111% comes from dividing the wrong way round.',
      },
    },
    {
      q: { fa: 'کدام جابه‌جایی در ERP سند مالی می‌سازد؟', en: 'Which movement creates a Finance document in the ERP?' },
      options: [
        t('انتقال کالا از سایت MP10 به سایت MP20', 'Transferring stock from site MP10 to site MP20'),
        t('جابه‌جایی کالا از جایگاه A-12-03-B به A-12-04-B', 'Moving stock from bin A-12-03-B to A-12-04-B'),
        t('انتقال کالا از محل 1001 به محل 1003 در همان سایت', 'Moving stock from location 1001 to 1003 in the same site'),
        t('چاپ برچسب جدید برای جایگاه', 'Printing a new bin label'),
      ],
      answer: 0,
      explain: {
        fa: 'ارزش‌گذاری در سطح سایت است؛ پس انتقال بین دو سایت ارزش را از یک سایت به سایت دیگر می‌برد و سند حسابداری دارد. جابه‌جایی جایگاه یا محل در همان سایت ارزش و حساب را تغییر نمی‌دهد.',
        en: 'Stock is valued at site level, so a transfer between sites moves value from one site to another and creates an accounting document. Bin or location moves within the same site change neither value nor account.',
      },
    },
    {
      q: { fa: 'سیلندرهای اکسیژن چگونه باید نگهداری شوند؟', en: 'How should oxygen cylinders be stored?' },
      options: [
        t('خوابیده روی زمین تا نیفتند', 'Lying on the floor so they cannot fall'),
        t('کنار سیلندرهای استیلن تا جوشکار راحت‌تر کار کند', 'Next to the acetylene cylinders so the welder has easy access'),
        t('ایستاده و مهارشده، با کلاهک، جدا از گازهای سوختنی و روغن', 'Upright and chained, with caps on, separate from fuel gases and oil'),
        t('داخل انبار مواد شیمیایی کنار حلال‌ها', 'Inside the chemical store next to the solvents'),
      ],
      answer: 2,
      explain: {
        fa: 'اکسیژن سوختن را شدید می‌کند؛ پس باید از گازهای سوختنی، روغن و مواد اشتعال‌پذیر جدا باشد. سیلندر ایستاده و مهارشده می‌ماند و کلاهک از شیر محافظت می‌کند.',
        en: 'Oxygen makes things burn fiercely, so it must be kept apart from fuel gases, oil and flammables. Cylinders stand upright and chained, and the cap protects the valve.',
      },
    },
    {
      q: {
        fa: 'بزرگ‌ترین ظرف یک بخش 1,000 لیتر و حجم کل 3,000 لیتر است. با قاعده «عدد بزرگ‌تر از 110٪ بزرگ‌ترین ظرف یا 25٪ حجم کل»، ظرفیت حوضچه چقدر باید باشد؟',
        en: 'The largest container in a bay holds 1,000 litres and the total is 3,000 litres. Under the rule “the greater of 110% of the largest container or 25% of the total”, what bund capacity is needed?',
      },
      options: [t('750 لیتر', '750 litres'), t('1,000 لیتر', '1,000 litres'), t('1,100 لیتر', '1,100 litres'), t('3,300 لیتر', '3,300 litres')],
      answer: 2,
      explain: {
        fa: '110٪ × 1,000 = 1,100 و 25٪ × 3,000 = 750؛ عدد بزرگ‌تر 1,100 لیتر است. 750 فقط شرط دوم است و 3,300 یعنی 110٪ کل حجم، که لازم نیست.',
        en: '110% × 1,000 = 1,100 and 25% × 3,000 = 750; the greater is 1,100 litres. 750 is only the second test, and 3,300 is 110% of the whole volume, which is not required.',
      },
    },
    {
      q: {
        fa: 'بسته‌ای با علامت پرتو، بدون اطلاع قبلی، به ورودی انبار میدان می‌رسد. کار درست انباردار چیست؟',
        en: 'A package with a radiation symbol arrives at the Field Warehouse gate unannounced. What should the storekeeper do?',
      },
      options: [
        t('آن را باز کند تا محتوا را با فهرست بار مقایسه کند', 'Open it to check the contents against the manifest'),
        t(
          'به آن دست نزند، اطراف را خالی و محدود کند و فوراً HSE و پیمانکار دارای مجوز را خبر کند',
          'Not touch it, clear and cordon off the area, and call HSE and the licensed contractor at once',
        ),
        t('آن را در قفس قطعات حیاتی بگذارد تا امن باشد', 'Put it in the critical spares cage to keep it secure'),
        t('رسید کالا (GRN) ثبت کند و آن را به انبار مواد شیمیایی ببرد', 'Post a GRN and move it to the chemical store'),
      ],
      answer: 1,
      explain: {
        fa: 'چشمه‌های پرتوزا فقط در تأسیسات دارای مجوز و به دست متخصصان دارای مجوز نگهداری و جابه‌جا می‌شوند. نقش انبار دانستن، ثبت کردن و دست نزدن است؛ باز کردن یا جابه‌جا کردن بسته خطر جدی دارد.',
        en: 'Radioactive sources are kept and moved only in licensed facilities by licensed specialists. The warehouse’s role is to know, record and not touch; opening or moving the package is a serious hazard.',
      },
    },
    {
      q: { fa: 'کدام روش نگهداری لوله‌های جداری درست است؟', en: 'Which is the right way to store casing?' },
      options: [
        t('روی خاک لخت، چون لوله فولادی است', 'On bare ground, because the pipe is steel'),
        t('بدون محافظ رزوه تا رزوه‌ها هوا بخورند', 'Without thread protectors so the threads can breathe'),
        t('همه گریدها و اندازه‌ها در یک دسته برای صرفه‌جویی در فضا', 'All grades and sizes in one stack to save space'),
        t(
          'روی پایه لوله و بالاتر از زمین، با محافظ رزوه در دو سر و جدا بر اساس گرید و اندازه',
          'On pipe racks above the ground, with thread protectors on both ends, separated by grade and size',
        ),
      ],
      answer: 3,
      explain: {
        fa: 'تماس با خاک و رطوبت خوردگی ایجاد می‌کند و رزوه بدون محافظ به‌راحتی آسیب می‌بیند. قاطی کردن گریدها هم خطر نصب لوله اشتباه در چاه را بالا می‌برد.',
        en: 'Contact with soil and moisture causes corrosion, and unprotected threads are easily damaged. Mixing grades raises the risk of running the wrong pipe into a well.',
      },
    },
    {
      q: {
        fa: '5 بشکه ماده شیمیایی منقضی به ارزش هر بشکه 140 با تأیید اسقاط می‌شود. ثبت خودکار مالی کدام است؟',
        en: '5 expired drums of a chemical worth 140 each are scrapped with approval. What is the automatic Finance entry?',
      },
      options: [
        t(
          'بدهکار هزینه زیان و اسقاط موجودی 700 / بستانکار موجودی مواد شیمیایی 700',
          'Dr Inventory write-off expense 700 / Cr Inventory: chemicals 700',
        ),
        t(
          'بدهکار موجودی مواد شیمیایی 700 / بستانکار هزینه زیان و اسقاط موجودی 700',
          'Dr Inventory: chemicals 700 / Cr Inventory write-off expense 700',
        ),
        t(
          'بدهکار هزینه زیان و اسقاط موجودی 140 / بستانکار موجودی مواد شیمیایی 140',
          'Dr Inventory write-off expense 140 / Cr Inventory: chemicals 140',
        ),
        t('ثبتی لازم نیست؛ بشکه‌ها فقط دور ریخته می‌شوند', 'No entry; the drums are simply thrown away'),
      ],
      answer: 0,
      explain: {
        fa: '5 × 140 = 700. موجودی کاهش می‌یابد (بستانکار) و زیان به هزینه می‌رود (بدهکار). اگر ثبتی انجام نشود، موجودی و حساب موجودی 700 بیش از واقع نشان داده می‌شوند.',
        en: '5 × 140 = 700. Inventory goes down (credit) and the loss is expensed (debit). With no entry, stock and the inventory account would be overstated by 700.',
      },
    },
    {
      q: {
        fa: 'هدف چرخاندن دوره‌ای شفت پمپ یا الکتروموتور یدکی در انبار چیست؟',
        en: 'Why is the shaft of a stored spare pump or motor turned periodically?',
      },
      options: [
        t('برای آزمودن برق انبار', 'To test the warehouse power supply'),
        t('برای محافظت از یاتاقان‌ها و جلوگیری از تاب برداشتن شفت', 'To protect the bearings and prevent shaft bow'),
        t('برای کوتاه کردن عمر انبارداری روغن', 'To shorten the oil’s shelf life'),
        t('برای اینکه دقت شمارش بالاتر برود', 'To improve count accuracy'),
      ],
      answer: 1,
      explain: {
        fa: 'اگر شفت مدت طولانی در یک وضعیت بماند، یاتاقان‌ها در یک نقطه آسیب می‌بینند و روتور ممکن است زیر وزن خودش تاب بردارد؛ همان اتفاقی که برای روتور 140,000 مسار پترولیوم افتاد.',
        en: 'If a shaft rests in one position for a long time, the bearings are damaged at one spot and the rotor can bow under its own weight, exactly what happened to Masar Petroleum’s 140,000 rotor.',
      },
    },
    {
      q: {
        fa: '8 یاتاقان به میانگین 54 از سایت MP10 به سایت MP20 منتقل می‌شود. اثر آن بر موجودی سایت MP20 و بر کل موجودی شرکت چیست؟',
        en: '8 bearings at an average of 54 are transferred from site MP10 to site MP20. What is the effect on site MP20’s stock and on the company’s total stock?',
      },
      options: [
        t('MP20 به اندازه 54 افزایش و کل موجودی 54 افزایش', 'MP20 up 54, total up 54'),
        t('MP20 به اندازه 432 افزایش و کل موجودی 432 افزایش', 'MP20 up 432, total up 432'),
        t('MP20 بدون تغییر و کل موجودی 432 کاهش', 'MP20 unchanged, total down 432'),
        t('MP20 به اندازه 432 افزایش و کل موجودی بدون تغییر', 'MP20 up 432, total unchanged'),
      ],
      answer: 3,
      explain: {
        fa: '8 × 54 = 432 از MP10 به MP20 می‌رود؛ MP20 همین مقدار افزایش و MP10 همین مقدار کاهش می‌یابد، پس جمع موجودی شرکت تغییر نمی‌کند.',
        en: '8 × 54 = 432 moves from MP10 to MP20: MP20 rises and MP10 falls by the same amount, so the company’s total does not change.',
      },
    },
  ],
}
