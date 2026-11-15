import type { Lesson } from '../types'

const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'inventory',
  number: 11,
  level: 'advanced',
  minutes: 18,
  icon: 'Boxes',
  tone: 'gold',
  title: { fa: 'موجودی کالا و بهای تمام‌شده کالای فروش‌رفته', en: 'Inventory and Cost of Goods Sold' },
  summary: {
    fa: 'یک فروشگاه، برخلاف استودیو طراحی، کالا می‌خرد و می‌فروشد. در این درس با مثال فروشگاه آرمان، بهای تمام‌شده کالای فروش‌رفته و سود ناخالص را محاسبه می‌کنیم، سیستم‌های دائمی و ادواری را مقایسه می‌کنیم و روش‌های FIFO و میانگین موزون را به کار می‌بریم.',
    en: 'Unlike a design studio, a store buys goods and sells them on. Using Arman Store as our example, this lesson computes cost of goods sold and gross profit, compares perpetual and periodic systems, and applies the FIFO and weighted-average cost methods.',
  },
  objectives: [
    {
      fa: 'تفاوت کسب‌وکار بازرگانی و خدماتی را توضیح دهید.',
      en: 'Explain how a merchandising business differs from a service business.',
    },
    {
      fa: 'بهای تمام‌شده کالای فروش‌رفته و سود ناخالص را محاسبه کنید.',
      en: 'Calculate cost of goods sold and gross profit.',
    },
    {
      fa: 'سیستم دائمی و ادواری را مقایسه کنید و ثبت‌های خرید و فروش را در سیستم دائمی انجام دهید.',
      en: 'Compare perpetual and periodic systems and record purchases and sales under a perpetual system.',
    },
    {
      fa: 'روش‌های FIFO و میانگین موزون را به کار ببرید و اثر هر کدام را بر سود توضیح دهید.',
      en: 'Apply FIFO and weighted average and explain how each affects profit.',
    },
    {
      fa: 'موجودی کالا را به اقل بهای تمام‌شده و خالص ارزش فروش اندازه‌گیری کنید.',
      en: 'Measure inventory at the lower of cost and net realizable value.',
    },
  ],
  sections: [
    {
      id: 'merchandising',
      title: { fa: 'کسب‌وکار بازرگانی در برابر خدماتی', en: 'Merchandising vs service businesses' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'استودیو طراحی نوا **خدمت** می‌فروشد: درآمدش از وقت و مهارت کارکنانش به دست می‌آید و کالایی برای فروش در انبار ندارد. اما یک **شرکت بازرگانی** کالا را می‌خرد و بدون تغییر اساسی، با قیمتی بالاتر می‌فروشد. همین تفاوت یک دارایی مهم تازه (موجودی کالا) و یک هزینه بزرگ تازه (بهای تمام‌شده کالای فروش‌رفته) را وارد حساب‌ها می‌کند.',
            en: 'Nova Design Studio sells a **service**: its revenue comes from its people’s time and skill, and it holds no goods for sale. A **merchandising business** buys goods and resells them, largely unchanged, at a higher price. That one difference brings a major new asset (inventory) and a major new expense (cost of goods sold) into the accounts.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'شرکت خدماتی (مانند نوا)', en: 'Service business (like Nova)' },
            items: [
              { fa: 'درآمد اصلی: درآمد خدمات', en: 'Main revenue: service revenue' },
              { fa: 'موجودی کالا ندارد', en: 'No inventory' },
              { fa: 'سود خالص = درآمد − هزینه‌های عملیاتی', en: 'Net income = Revenue − Operating expenses' },
              { fa: 'صورت سود و زیان یک‌مرحله‌ای اغلب کافی است', en: 'A single-step income statement is usually enough' },
            ],
          },
          right: {
            title: { fa: 'شرکت بازرگانی (مانند فروشگاه آرمان)', en: 'Merchandising business (like Arman Store)' },
            items: [
              { fa: 'درآمد اصلی: فروش کالا', en: 'Main revenue: sales of goods' },
              { fa: 'موجودی کالا اغلب بزرگ‌ترین دارایی جاری است', en: 'Inventory is often the largest current asset' },
              { fa: 'سود ناخالص = فروش − بهای تمام‌شده کالای فروش‌رفته', en: 'Gross profit = Sales − Cost of goods sold' },
              { fa: 'صورت سود و زیان چندمرحله‌ای، سود ناخالص را جداگانه نشان می‌دهد', en: 'A multi-step income statement reports gross profit separately' },
            ],
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'مثال این درس: فروشگاه آرمان', en: 'This lesson’s example: Arman Store' },
          text: {
            fa: 'فروشگاه آرمان فقط یک نوع کالا می‌فروشد. در طول دوره: موجودی ابتدای دوره **100 واحد به نرخ 10**؛ خرید اول **200 واحد به نرخ 12**؛ خرید دوم **100 واحد به نرخ 15**؛ و فروش **300 واحد به نرخ 25**. فرض می‌کنیم کل فروش پس از هر دو خرید انجام شده است.',
            en: 'Arman Store sells a single product. During the period: beginning inventory of **100 units at 10**; purchase 1 of **200 units at 12**; purchase 2 of **100 units at 15**; and sales of **300 units at 25**. We assume all of the sales take place after both purchases.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'فروشگاه آرمان: کالای آماده برای فروش', en: 'Arman Store: goods available for sale' },
          head: [
            { fa: 'شرح', en: 'Source' },
            { fa: 'تعداد (واحد)', en: 'Units' },
            { fa: 'بهای واحد', en: 'Unit cost' },
            { fa: 'بهای کل', en: 'Total cost' },
          ],
          rows: [
            [{ fa: 'موجودی ابتدای دوره', en: 'Beginning inventory' }, 100, 10, 1000],
            [{ fa: 'خرید اول', en: 'Purchase 1' }, 200, 12, 2400],
            [{ fa: 'خرید دوم', en: 'Purchase 2' }, 100, 15, 1500],
            [{ fa: '**کالای آماده برای فروش**', en: '**Goods available for sale**' }, 400, blank, 4900],
          ],
          numericCols: [1, 2, 3],
        },
        {
          type: 'p',
          text: {
            fa: 'از این 400 واحد، 300 واحد فروخته شده و 100 واحد در انبار مانده است. پرسش اصلی این درس این است: **بهای کدام واحدها** به بهای تمام‌شده کالای فروش‌رفته می‌رود و بهای کدام‌ها در موجودی پایان دوره باقی می‌ماند؟',
            en: 'Of these 400 units, 300 were sold and 100 remain on the shelf. The central question of this lesson is: **whose cost** goes to cost of goods sold, and whose cost stays in ending inventory?',
          },
        },
      ],
    },
    {
      id: 'cogs',
      title: { fa: 'بهای تمام‌شده کالای فروش‌رفته و سود ناخالص', en: 'Cost of goods sold and gross profit' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**موجودی کالا** کالایی است که برای فروش نگهداری می‌شود و تا زمان فروش، دارایی جاری به شمار می‌رود. به محض فروش، بهای آن از دارایی‌ها خارج و به هزینه‌ای به نام **بهای تمام‌شده کالای فروش‌رفته** تبدیل می‌شود. این همان اصل تطابق است: بهای کالا در همان دوره‌ای هزینه می‌شود که درآمد فروش آن شناسایی می‌شود.',
            en: '**Inventory** is merchandise held for sale; until it is sold it is a current asset. Once it is sold, its cost leaves the balance sheet and becomes an expense called **cost of goods sold** (COGS). This is the matching principle at work: the cost of the goods is expensed in the same period as the revenue they generate.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'کالای آماده برای فروش = موجودی ابتدای دوره + خرید طی دوره',
            en: 'Goods available for sale = Beginning inventory + Purchases',
          },
          note: { fa: 'برای آرمان: 1,000 + (2,400 + 1,500) = 4,900', en: 'For Arman: 1,000 + (2,400 + 1,500) = 4,900' },
        },
        {
          type: 'formula',
          text: {
            fa: 'بهای تمام‌شده کالای فروش‌رفته = موجودی ابتدای دوره + خرید − موجودی پایان دوره',
            en: 'COGS = Beginning inventory + Purchases − Ending inventory',
          },
          note: {
            fa: 'کالای آماده برای فروش یا فروخته شده یا هنوز در انبار است؛ پس هر مبلغی که به موجودی پایان دوره نسبت دهیم، به همان اندازه از بهای تمام‌شده کالای فروش‌رفته کم می‌شود.',
            en: 'Goods available are either sold or still on hand, so every amount of cost assigned to ending inventory is cost that does not reach COGS.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'سود ناخالص = فروش − بهای تمام‌شده کالای فروش‌رفته',
            en: 'Gross profit = Sales − Cost of goods sold',
          },
          note: { fa: 'فروش آرمان: 300 × 25 = 7,500', en: 'Arman’s sales: 300 × 25 = 7,500' },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'چرا سود ناخالص مهم است؟', en: 'Why gross profit matters' },
          text: {
            fa: 'سود ناخالص نشان می‌دهد پس از پوشش بهای خود کالا، چه مبلغی برای پرداخت هزینه‌های عملیاتی (اجاره، حقوق، تبلیغات) و ایجاد سود خالص باقی می‌ماند. **حاشیه سود ناخالص** (سود ناخالص ÷ فروش) یکی از مهم‌ترین شاخص‌های قدرت قیمت‌گذاری و کارایی خرید است.',
            en: 'Gross profit is what remains, after covering the cost of the goods themselves, to pay operating expenses (rent, salaries, advertising) and still earn a net profit. The **gross margin** (gross profit ÷ sales) is a key indicator of pricing power and purchasing efficiency.',
          },
        },
      ],
    },
    {
      id: 'systems',
      title: { fa: 'سیستم دائمی و سیستم ادواری', en: 'Perpetual vs periodic systems' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'برای ردیابی موجودی کالا دو سیستم وجود دارد. تفاوت اصلی آن‌ها در **زمان** به‌روزرسانی حساب موجودی کالا و شناسایی بهای تمام‌شده کالای فروش‌رفته است.',
            en: 'There are two ways to keep track of inventory. The key difference is **when** the Inventory account is updated and cost of goods sold is recognised.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'سیستم دائمی', en: 'Perpetual system' },
            items: [
              { fa: 'حساب موجودی کالا با هر خرید و فروش به‌روز می‌شود', en: 'The Inventory account is updated with every purchase and sale' },
              { fa: 'بهای تمام‌شده کالای فروش‌رفته در لحظه هر فروش ثبت می‌شود', en: 'COGS is recorded at the moment of each sale' },
              { fa: 'مانده موجودی همیشه در دسترس است؛ مناسب فروشگاه‌های مجهز به بارکدخوان و نرم‌افزار', en: 'The inventory balance is always available, suits stores with barcode scanners and software' },
              { fa: 'شمارش فیزیکی همچنان لازم است تا کسری انبار (سرقت، خرابی) کشف شود', en: 'Physical counts are still needed to detect shrinkage (theft, damage)' },
            ],
          },
          right: {
            title: { fa: 'سیستم ادواری', en: 'Periodic system' },
            items: [
              { fa: 'خریدها در حساب جداگانه «خرید» ثبت می‌شوند، نه در موجودی کالا', en: 'Purchases go to a separate Purchases account, not to Inventory' },
              { fa: 'هنگام فروش فقط درآمد ثبت می‌شود', en: 'At each sale only the revenue is recorded' },
              { fa: 'بهای تمام‌شده در پایان دوره، پس از شمارش فیزیکی و با فرمول محاسبه می‌شود', en: 'COGS is calculated at period-end, after a physical count, using the formula' },
              { fa: 'ساده‌تر و کم‌هزینه‌تر، اما کسری انبار در بهای تمام‌شده پنهان می‌ماند', en: 'Simpler and cheaper, but shrinkage is hidden inside COGS' },
            ],
          },
        },
        {
          type: 'journal',
          title: {
            fa: 'سیستم دائمی (FIFO): خریدها و فروش در فروشگاه آرمان',
            en: 'Perpetual system (FIFO): purchases and the sale at Arman Store',
          },
          entries: [
            {
              date: { fa: 'روز 5', en: 'Day 5' },
              lines: [
                { account: { fa: 'موجودی کالا', en: 'Inventory' }, debit: 2400 },
                { account: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, credit: 2400 },
              ],
              memo: { fa: 'خرید اول: 200 واحد × 12، نسیه', en: 'Purchase 1: 200 units × 12, on account' },
            },
            {
              date: { fa: 'روز 15', en: 'Day 15' },
              lines: [
                { account: { fa: 'موجودی کالا', en: 'Inventory' }, debit: 1500 },
                { account: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, credit: 1500 },
              ],
              memo: { fa: 'خرید دوم: 100 واحد × 15، نسیه', en: 'Purchase 2: 100 units × 15, on account' },
            },
            {
              date: { fa: 'روز 25', en: 'Day 25' },
              lines: [
                { account: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, debit: 7500 },
                { account: { fa: 'فروش', en: 'Sales revenue' }, credit: 7500 },
              ],
              memo: { fa: 'فروش نسیه 300 واحد × 25: ثبت درآمد', en: 'Sale of 300 units × 25 on account, the revenue side' },
            },
            {
              date: { fa: 'روز 25', en: 'Day 25' },
              lines: [
                { account: { fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of goods sold' }, debit: 3400 },
                { account: { fa: 'موجودی کالا', en: 'Inventory' }, credit: 3400 },
              ],
              memo: {
                fa: 'ثبت بهای کالای فروش‌رفته به روش FIFO: (100 × 10) + (200 × 12)',
                en: 'The cost side under FIFO: (100 × 10) + (200 × 12)',
              },
            },
          ],
        },
        {
          type: 'tAccounts',
          title: {
            fa: 'حساب موجودی کالا در سیستم دائمی (اولین رقم بدهکار، مانده ابتدای دوره است)',
            en: 'The Inventory account under the perpetual system (the first debit is the opening balance)',
          },
          accounts: [{ name: { fa: 'موجودی کالا', en: 'Inventory' }, debits: [1000, 2400, 1500], credits: [3400] }],
        },
        {
          type: 'journal',
          title: { fa: 'همان رویدادها در سیستم ادواری', en: 'The same events under the periodic system' },
          entries: [
            {
              date: { fa: 'روز 5', en: 'Day 5' },
              lines: [
                { account: { fa: 'خرید', en: 'Purchases' }, debit: 2400 },
                { account: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, credit: 2400 },
              ],
              memo: { fa: 'خرید در حساب «خرید» ثبت می‌شود، نه موجودی کالا', en: 'The purchase goes to Purchases, not Inventory' },
            },
            {
              date: { fa: 'روز 25', en: 'Day 25' },
              lines: [
                { account: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, debit: 7500 },
                { account: { fa: 'فروش', en: 'Sales revenue' }, credit: 7500 },
              ],
              memo: {
                fa: 'هنگام فروش، بهای تمام‌شده ثبت نمی‌شود؛ در پایان دوره با شمارش 100 واحد و فرمول محاسبه می‌شود',
                en: 'No cost entry at the time of sale, COGS is worked out at period-end from a count of 100 units and the formula',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'دائمی یا ادواری؛ آیا نتیجه فرق می‌کند؟', en: 'Perpetual or periodic: does the answer change?' },
          text: {
            fa: 'در روش FIFO، سیستم دائمی و ادواری همیشه به یک بهای تمام‌شده می‌رسند. در روش میانگین، سیستم دائمی از **میانگین متحرک** (محاسبه دوباره پس از هر خرید) استفاده می‌کند و اگر فروش‌ها میان خریدها انجام شوند، نتیجه ممکن است با میانگین موزون ادواری فرق کند. در مثال ما کل فروش پس از هر دو خرید است، پس هر دو یکسان‌اند.',
            en: 'Under FIFO, perpetual and periodic systems always give the same COGS. Under the average method, a perpetual system uses a **moving average** (recalculated after every purchase), so if sales fall between purchases the result can differ from the periodic weighted average. In our example every sale follows both purchases, so the two coincide.',
          },
        },
      ],
    },
    {
      id: 'cost-flow',
      title: { fa: 'روش‌های جریان بها: FIFO و میانگین موزون', en: 'Cost-flow methods: FIFO and weighted average' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'وقتی کالاهای یکسان با قیمت‌های متفاوت خریداری می‌شوند، باید فرضی درباره **جریان بها** انتخاب کنیم. این فرض لزوماً با جریان فیزیکی کالا یکی نیست؛ فقط تعیین می‌کند کدام بها به بهای تمام‌شده کالای فروش‌رفته و کدام به موجودی پایان دوره نسبت داده شود. روش انتخاب‌شده باید از دوره‌ای به دوره دیگر به‌طور یکنواخت به کار رود.',
            en: 'When identical goods are bought at different prices, we must adopt a **cost-flow assumption**. It need not match the physical movement of the goods; it only decides which costs go to COGS and which stay in ending inventory. Whichever method is chosen must be applied consistently from period to period.',
          },
        },
        {
          type: 'diagram',
          id: 'inventory-fifo',
          caption: {
            fa: 'لایه‌های بها: در FIFO قدیمی‌ترین لایه‌ها اول مصرف می‌شوند؛ در میانگین موزون همه واحدها بهای واحد یکسانی دارند.',
            en: 'Cost layers: FIFO consumes the oldest layers first; weighted average gives every unit the same blended cost.',
          },
        },
        { type: 'h', text: { fa: 'اولین صادره از اولین وارده (FIFO)', en: 'First-in, first-out (FIFO)' } },
        {
          type: 'p',
          text: {
            fa: 'در FIFO فرض می‌شود قدیمی‌ترین کالاها زودتر فروخته می‌شوند. بنابراین 300 واحد فروخته‌شده آرمان شامل 100 واحد موجودی ابتدای دوره و 200 واحد خرید اول است و 100 واحد باقی‌مانده از آخرین خرید (به نرخ 15) هستند.',
            en: 'FIFO assumes the oldest goods are sold first. So Arman’s 300 units sold are the 100 beginning units plus the 200 units from purchase 1, leaving the 100 units from the latest purchase (at 15) on hand.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'بهای تمام‌شده کالای فروش‌رفته (FIFO) = (100 × 10) + (200 × 12) = 3,400',
            en: 'COGS (FIFO) = (100 × 10) + (200 × 12) = 3,400',
          },
          note: { fa: 'موجودی پایان دوره = 100 × 15 = 1,500', en: 'Ending inventory = 100 × 15 = 1,500' },
        },
        { type: 'h', text: { fa: 'میانگین موزون', en: 'Weighted average' } },
        {
          type: 'formula',
          text: {
            fa: 'بهای میانگین واحد = بهای کالای آماده برای فروش ÷ تعداد واحدهای آماده برای فروش = 4,900 ÷ 400 = 12.25',
            en: 'Average unit cost = Cost of goods available ÷ Units available = 4,900 ÷ 400 = 12.25',
          },
          note: {
            fa: 'بهای تمام‌شده کالای فروش‌رفته = 300 × 12.25 = 3,675 ؛ موجودی پایان دوره = 100 × 12.25 = 1,225',
            en: 'COGS = 300 × 12.25 = 3,675; Ending inventory = 100 × 12.25 = 1,225',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'فروشگاه آرمان: مقایسه نتایج دو روش (سیستم ادواری)',
            en: 'Arman Store: results under each method (periodic system)',
          },
          head: [
            { fa: 'شرح', en: 'Item' },
            { fa: 'FIFO', en: 'FIFO' },
            { fa: 'میانگین موزون', en: 'Weighted average' },
          ],
          rows: [
            [{ fa: 'فروش (300 × 25)', en: 'Sales (300 × 25)' }, 7500, 7500],
            [{ fa: 'کالای آماده برای فروش', en: 'Goods available for sale' }, 4900, 4900],
            [{ fa: 'موجودی پایان دوره (100 واحد)', en: 'Ending inventory (100 units)' }, 1500, 1225],
            [{ fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of goods sold' }, 3400, 3675],
            [{ fa: '**سود ناخالص**', en: '**Gross profit**' }, 4100, 3825],
            [{ fa: 'حاشیه سود ناخالص (درصد)', en: 'Gross margin (%)' }, 54.7, 51],
          ],
          numericCols: [1, 2],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'اثر روش در دوره افزایش قیمت‌ها', en: 'The effect when prices are rising' },
          text: {
            fa: 'نرخ خرید آرمان از 10 به 15 رسیده است. در چنین شرایطی FIFO بهای قدیمی‌تر و ارزان‌تر را به بهای تمام‌شده می‌برد؛ پس **سود ناخالص بیشتری** گزارش می‌شود و **موجودی پایان دوره به قیمت‌های روز نزدیک‌تر** است. میانگین موزون نوسان قیمت‌ها را هموار می‌کند و نتیجه‌ای میان این دو حالت می‌دهد. توجه کنید که جمع بهای تمام‌شده و موجودی پایان دوره در هر دو روش 4,900 است؛ روش فقط نحوه تقسیم این مبلغ را تغییر می‌دهد.',
            en: 'Arman’s purchase price climbed from 10 to 15. When prices rise, FIFO sends the older, cheaper costs to COGS, so it reports **higher gross profit** and an **ending inventory closer to current prices**. Weighted average smooths out price changes and lands in between. Notice that COGS plus ending inventory equals 4,900 under both methods, the method only changes how that total is split.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'LIFO مجاز نیست', en: 'LIFO is not permitted' },
          text: {
            fa: 'روش «اولین صادره از آخرین وارده» (LIFO)، که فرض می‌کند تازه‌ترین کالاها اول فروخته می‌شوند، طبق **IFRS (استاندارد IAS 2)** و **استانداردهای حسابداری ایران** مجاز نیست، چون می‌تواند موجودی ترازنامه را با بهاهای بسیار قدیمی نشان دهد. ممکن است در منابع مبتنی بر US GAAP با آن روبه‌رو شوید. روش‌های قابل‌قبول عبارت‌اند از FIFO، میانگین موزون و برای اقلام منحصربه‌فرد و غیرقابل‌جایگزین (مانند خودرو یا جواهر)، **شناسایی ویژه**.',
            en: '**Last-in, first-out (LIFO)**, which assumes the newest goods are sold first, is not permitted under **IFRS (IAS 2)** or **Iranian accounting standards**, because it can leave inventory on the balance sheet at badly outdated costs. You may still meet it in US GAAP material. The acceptable methods are FIFO, weighted average and, for unique, non-interchangeable items such as cars or jewellery, **specific identification**.',
          },
        },
      ],
    },
    {
      id: 'lcnrv',
      title: { fa: 'اقل بهای تمام‌شده و خالص ارزش فروش', en: 'Lower of cost and net realizable value' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'موجودی کالا به **اقل بهای تمام‌شده و خالص ارزش فروش** اندازه‌گیری می‌شود. اگر کالا آسیب ببیند، از رده خارج شود یا قیمت فروشش افت کند، ممکن است دیگر نتوان بهای تمام‌شده آن را از راه فروش بازیافت کرد. در این حالت موجودی باید تا خالص ارزش فروش کاهش یابد، چون هیچ دارایی‌ای نباید بیش از مبلغی که انتظار می‌رود از آن بازیافت شود گزارش شود.',
            en: 'Inventory is measured at the **lower of cost and net realizable value** (NRV). If goods are damaged, become obsolete or their selling price falls, their cost may no longer be recoverable through sale. Inventory must then be written down to NRV, because no asset should be carried at more than the amount expected to be recovered from it.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'خالص ارزش فروش = بهای فروش برآوردی − مخارج برآوردی تکمیل − مخارج برآوردی فروش',
            en: 'Net realizable value = Estimated selling price − Estimated costs of completion − Estimated costs to sell',
          },
          note: {
            fa: 'برای کالای آماده فروش در یک شرکت بازرگانی، مخارج تکمیل معمولاً صفر است.',
            en: 'For finished goods in a merchandising business, costs of completion are usually zero.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'مثال: کاهش ارزش موجودی آرمان', en: 'Example: writing down Arman’s inventory' },
          text: {
            fa: 'فرض کنید در پایان دوره مدل جدیدتری به بازار آمده و 100 واحد باقی‌مانده آرمان (بهای FIFO هر واحد 15، جمعاً 1,500) را فقط می‌توان واحدی 16 فروخت و مخارج فروش هر واحد 2 است. خالص ارزش فروش هر واحد 14 و جمعاً 1,400 است. چون 1,400 از 1,500 کمتر است، موجودی باید 100 کاهش یابد.',
            en: 'Suppose a newer model reaches the market at period-end, and Arman’s remaining 100 units (FIFO cost 15 each, 1,500 in total) can now sell for only 16 each, with selling costs of 2 per unit. NRV is 14 per unit, or 1,400 in total. Since 1,400 is below 1,500, inventory must be written down by 100.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت کاهش ارزش موجودی کالا', en: 'Recording the write-down' },
          entries: [
            {
              date: { fa: 'پایان دوره', en: 'Period-end' },
              lines: [
                { account: { fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of goods sold' }, debit: 100 },
                { account: { fa: 'موجودی کالا', en: 'Inventory' }, credit: 100 },
              ],
              memo: {
                fa: 'کاهش موجودی به خالص ارزش فروش؛ این زیان معمولاً جزو بهای تمام‌شده کالای فروش‌رفته گزارش می‌شود',
                en: 'Write-down to NRV: usually reported as part of cost of goods sold',
              },
            },
          ],
        },
        {
          type: 'list',
          items: [
            {
              fa: 'مقایسه بها و خالص ارزش فروش معمولاً **قلم به قلم** (یا برای گروه‌های اقلام مشابه) انجام می‌شود، نه برای کل موجودی به‌صورت یک‌جا.',
              en: 'Cost and NRV are normally compared **item by item** (or for groups of similar items), not for the inventory as a whole.',
            },
            {
              fa: 'اگر در دوره بعد خالص ارزش فروش دوباره افزایش یابد، طبق IAS 2 کاهش ارزش **برگشت داده می‌شود**؛ اما موجودی هرگز بیش از بهای تمام‌شده اولیه گزارش نمی‌شود.',
              en: 'If NRV recovers in a later period, IAS 2 requires the write-down to be **reversed**: but inventory is never carried above its original cost.',
            },
            {
              fa: 'این قاعده نمونه‌ای از احتیاط است: زیان‌های مورد انتظار به‌موقع شناسایی می‌شوند، اما سودهای تحقق‌نیافته نه.',
              en: 'The rule is prudence in action: expected losses are recognised promptly, unrealised gains are not.',
            },
          ],
        },
      ],
    },
    {
      id: 'summary',
      title: { fa: 'جمع‌بندی', en: 'Summary' },
      blocks: [
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'پیوند با درس بعد', en: 'Looking ahead' },
          text: {
            fa: 'ارقام این درس در تحلیل نسبت‌ها دوباره به کار می‌آیند: حاشیه سود ناخالص آرمان در روش FIFO برابر 4,100 ÷ 7,500 = 54.7 درصد است و گردش موجودی کالا نشان می‌دهد کالا با چه سرعتی فروخته و جایگزین می‌شود. به یاد داشته باشید که انتخاب روش جریان بها مستقیماً بر این نسبت‌ها اثر می‌گذارد.',
            en: 'This lesson’s figures return in ratio analysis: Arman’s FIFO gross margin is 4,100 ÷ 7,500 = 54.7%, and inventory turnover shows how quickly goods are sold and replaced. Remember that the choice of cost-flow method feeds directly into those ratios.',
          },
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'شرکت بازرگانی', en: 'Merchandising business' },
              def: {
                fa: 'واحدی که کالا را می‌خرد و بدون تغییر اساسی به مشتریان می‌فروشد.',
                en: 'A business that buys goods and resells them to customers largely unchanged.',
              },
            },
            {
              term: { fa: 'موجودی کالا', en: 'Inventory' },
              def: {
                fa: 'کالای نگهداری‌شده برای فروش در جریان عادی فعالیت؛ یک دارایی جاری.',
                en: 'Goods held for sale in the ordinary course of business, a current asset.',
              },
            },
            {
              term: { fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of goods sold (COGS)' },
              def: {
                fa: 'بهای کالایی که طی دوره فروخته شده است: موجودی ابتدای دوره + خرید − موجودی پایان دوره.',
                en: 'The cost of goods sold during the period: beginning inventory + purchases − ending inventory.',
              },
            },
            {
              term: { fa: 'سود ناخالص', en: 'Gross profit' },
              def: {
                fa: 'فروش منهای بهای تمام‌شده کالای فروش‌رفته؛ مبلغ باقی‌مانده برای پوشش هزینه‌های عملیاتی.',
                en: 'Sales minus cost of goods sold, what is left to cover operating expenses.',
              },
            },
            {
              term: { fa: 'سیستم دائمی', en: 'Perpetual system' },
              def: {
                fa: 'سیستمی که موجودی کالا و بهای تمام‌شده را با هر خرید و فروش به‌روز می‌کند.',
                en: 'A system that updates inventory and COGS with every purchase and sale.',
              },
            },
            {
              term: { fa: 'سیستم ادواری', en: 'Periodic system' },
              def: {
                fa: 'سیستمی که بهای تمام‌شده را فقط در پایان دوره و بر اساس شمارش فیزیکی محاسبه می‌کند.',
                en: 'A system that determines COGS only at period-end, based on a physical count.',
              },
            },
            {
              term: { fa: 'اولین صادره از اولین وارده (FIFO)', en: 'First-in, first-out (FIFO)' },
              def: {
                fa: 'فرض جریان بهایی که قدیمی‌ترین بهاها را اول به بهای تمام‌شده کالای فروش‌رفته منتقل می‌کند.',
                en: 'A cost-flow assumption that charges the oldest costs to COGS first.',
              },
            },
            {
              term: { fa: 'میانگین موزون', en: 'Weighted average' },
              def: {
                fa: 'روشی که بهای کالای آماده برای فروش را بر تعداد واحدها تقسیم می‌کند و به همه واحدها یک بهای میانگین می‌دهد.',
                en: 'A method that divides the cost of goods available by units available, giving every unit the same average cost.',
              },
            },
            {
              term: { fa: 'خالص ارزش فروش', en: 'Net realizable value (NRV)' },
              def: {
                fa: 'بهای فروش برآوردی منهای مخارج برآوردی تکمیل و فروش.',
                en: 'Estimated selling price less the estimated costs of completion and sale.',
              },
            },
            {
              term: { fa: 'کسری انبار', en: 'Shrinkage' },
              def: {
                fa: 'کاهش موجودی ناشی از سرقت، خرابی یا خطا که با مقایسه شمارش فیزیکی و سوابق دفتری کشف می‌شود.',
                en: 'Inventory lost to theft, damage or error, revealed by comparing a physical count with the records.',
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
        fa: 'در سیستم دائمی، بهای تمام‌شده کالای فروش‌رفته چه زمانی ثبت می‌شود؟',
        en: 'Under a perpetual system, when is cost of goods sold recorded?',
      },
      options: [
        { fa: 'فقط در پایان دوره، پس از شمارش فیزیکی', en: 'Only at period-end, after the physical count' },
        { fa: 'هم‌زمان با هر فروش', en: 'At the time of each sale' },
        { fa: 'هنگام خرید کالا', en: 'When the goods are purchased' },
        { fa: 'هنگام پرداخت بدهی به تأمین‌کننده', en: 'When the supplier is paid' },
      ],
      answer: 1,
      explain: {
        fa: 'در سیستم دائمی، هر فروش دو ثبت دارد: یکی برای درآمد و دیگری برای انتقال بهای کالا از موجودی کالا به بهای تمام‌شده کالای فروش‌رفته.',
        en: 'In a perpetual system every sale has two entries: one for the revenue and one moving the goods’ cost from Inventory to COGS.',
      },
    },
    {
      q: {
        fa: 'موجودی ابتدای دوره 8,000، خرید طی دوره 30,000 و موجودی پایان دوره 6,000 است. بهای تمام‌شده کالای فروش‌رفته چقدر است؟',
        en: 'Beginning inventory is 8,000, purchases are 30,000 and ending inventory is 6,000. What is cost of goods sold?',
      },
      options: [
        { fa: '24,000', en: '24,000' },
        { fa: '38,000', en: '38,000' },
        { fa: '32,000', en: '32,000' },
        { fa: '44,000', en: '44,000' },
      ],
      answer: 2,
      explain: {
        fa: 'بهای تمام‌شده = 8,000 + 30,000 − 6,000 = 32,000. کالای آماده برای فروش 38,000 است که 6,000 آن هنوز در انبار مانده است.',
        en: 'COGS = 8,000 + 30,000 − 6,000 = 32,000. Goods available were 38,000, of which 6,000 is still on hand.',
      },
    },
    {
      q: {
        fa: 'موجودی پایان دوره فروشگاه آرمان به روش FIFO چقدر است؟',
        en: 'What is Arman Store’s ending inventory under FIFO?',
      },
      options: [
        { fa: '1,500', en: '1,500' },
        { fa: '1,225', en: '1,225' },
        { fa: '1,000', en: '1,000' },
        { fa: '1,200', en: '1,200' },
      ],
      answer: 0,
      explain: {
        fa: 'در FIFO قدیمی‌ترین واحدها فروخته می‌شوند، پس 100 واحد باقی‌مانده از آخرین خرید به نرخ 15 هستند: 100 × 15 = 1,500. رقم 1,225 پاسخ روش میانگین موزون است.',
        en: 'FIFO sells the oldest units first, so the 100 units left come from the latest purchase at 15: 100 × 15 = 1,500. The 1,225 figure is the weighted-average answer.',
      },
    },
    {
      q: {
        fa: 'بهای تمام‌شده کالای فروش‌رفته آرمان به روش میانگین موزون (ادواری) چقدر است؟',
        en: 'What is Arman’s cost of goods sold under the (periodic) weighted-average method?',
      },
      options: [
        { fa: '3,400', en: '3,400' },
        { fa: '3,700', en: '3,700' },
        { fa: '3,600', en: '3,600' },
        { fa: '3,675', en: '3,675' },
      ],
      answer: 3,
      explain: {
        fa: 'بهای میانگین = 4,900 ÷ 400 = 12.25 و بهای تمام‌شده = 300 × 12.25 = 3,675. رقم 3,700 از میانگین ساده نرخ‌ها (10، 12 و 15) به دست می‌آید که تعداد واحدهای هر خرید را نادیده می‌گیرد.',
        en: 'Average cost = 4,900 ÷ 400 = 12.25, so COGS = 300 × 12.25 = 3,675. The 3,700 figure comes from a simple average of 10, 12 and 15, which ignores how many units were bought at each price.',
      },
    },
    {
      q: {
        fa: 'کدام روش طبق IFRS و استانداردهای حسابداری ایران مجاز **نیست**؟',
        en: 'Which method is **not** permitted under IFRS and Iranian accounting standards?',
      },
      options: [
        { fa: 'اولین صادره از اولین وارده (FIFO)', en: 'First-in, first-out (FIFO)' },
        { fa: 'اولین صادره از آخرین وارده (LIFO)', en: 'Last-in, first-out (LIFO)' },
        { fa: 'میانگین موزون', en: 'Weighted average' },
        { fa: 'شناسایی ویژه', en: 'Specific identification' },
      ],
      answer: 1,
      explain: {
        fa: 'IAS 2 و استانداردهای ایران فقط FIFO، میانگین موزون و (برای اقلام منحصربه‌فرد) شناسایی ویژه را می‌پذیرند. LIFO ممنوع است، چون موجودی را با بهاهای قدیمی و غیرواقعی نشان می‌دهد.',
        en: 'IAS 2 and Iranian standards accept only FIFO, weighted average and (for unique items) specific identification. LIFO is prohibited because it can show inventory at stale, unrealistic costs.',
      },
    },
    {
      q: {
        fa: 'بهای تمام‌شده یک قلم کالا 50 است. بهای فروش برآوردی آن 60 و مخارج برآوردی فروش 15 است. این کالا با چه مبلغی در ترازنامه گزارش می‌شود؟',
        en: 'An item cost 50. Its estimated selling price is 60 and estimated costs to sell are 15. At what amount is it carried on the balance sheet?',
      },
      options: [
        { fa: '45', en: '45' },
        { fa: '50', en: '50' },
        { fa: '60', en: '60' },
        { fa: '35', en: '35' },
      ],
      answer: 0,
      explain: {
        fa: 'خالص ارزش فروش = 60 − 15 = 45 که از بهای تمام‌شده (50) کمتر است؛ پس کالا به 45 گزارش و 5 کاهش ارزش شناسایی می‌شود.',
        en: 'NRV = 60 − 15 = 45, which is below cost (50), so the item is carried at 45 and a write-down of 5 is recognised.',
      },
    },
  ],
}
