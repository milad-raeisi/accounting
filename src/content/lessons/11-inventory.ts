import type { Lesson } from '../types'

const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'inventory',
  number: 11,
  level: 'advanced',
  minutes: 45,
  icon: 'Boxes',
  tone: 'gold',
  title: { fa: 'موجودی کالا و بهای تمام‌شده کالای فروش‌رفته', en: 'Inventory and Cost of Goods Sold' },
  summary: {
    fa: 'یک فروشگاه کالا می‌خرد و می‌فروشد؛ پس باید بداند بهای کالای فروخته‌شده چقدر بوده و چه مقدار کالا در انبار مانده است. در این درس با مثال فروشگاه آرمان، خرید و فروش را در سیستم دائمی و ادواری ثبت می‌کنیم، برگشت، تخفیف نقدی و هزینه حمل را درست به حساب می‌آوریم، روش‌های FIFO، میانگین موزون و میانگین متحرک را به کار می‌بریم و موجودی را با شمارش فیزیکی و قاعده اقل بها و خالص ارزش فروش اندازه می‌گیریم.',
    en: 'A store buys goods and sells them on, so it must know what the goods it sold cost and how much stock is left. Using Arman Store as our example, this lesson records purchases and sales under perpetual and periodic systems, handles returns, cash discounts and freight correctly, applies FIFO, weighted average and moving average, and measures inventory through the physical count and the lower of cost and net realizable value.',
  },
  objectives: [
    {
      fa: 'تفاوت کسب‌وکار بازرگانی و خدماتی را توضیح دهید و بهای تمام‌شده کالای فروش‌رفته و سود ناخالص را محاسبه کنید.',
      en: 'Explain how a merchandising business differs from a service business, and calculate cost of goods sold and gross profit.',
    },
    {
      fa: 'خرید، برگشت از خرید، تخفیف نقدی، هزینه حمل و فروش را در سیستم دائمی و ادواری ثبت کنید.',
      en: 'Record purchases, purchase returns, cash discounts, freight and sales under both perpetual and periodic systems.',
    },
    {
      fa: 'روش‌های FIFO، میانگین موزون و میانگین متحرک را به کار ببرید و اثر هر کدام را بر سود توضیح دهید.',
      en: 'Apply FIFO, weighted average and moving average, and explain how each one affects profit.',
    },
    {
      fa: 'نتیجه شمارش فیزیکی را در حساب‌ها اعمال کنید و موجودی را به اقل بهای تمام‌شده و خالص ارزش فروش اندازه بگیرید.',
      en: 'Adjust the records to a physical count and measure inventory at the lower of cost and net realizable value.',
    },
    {
      fa: 'اشتباه‌های رایج موجودی کالا و اثر آن‌ها بر سود دو دوره را تشخیص دهید.',
      en: 'Spot the common inventory errors and trace their effect on the profit of two periods.',
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
            fa: 'آرمان فروشگاه کوچکی دارد که فقط یک مدل چراغ مطالعه می‌فروشد. آخر ماه، صندوق پر از پول است و او خیال می‌کند ماه خوبی داشته است. اما وقتی حسابدارش می‌پرسد «چند چراغ در انبار مانده و بهای چراغ‌هایی که فروختی چقدر بوده؟»، پاسخی ندارد. بدون این دو عدد نه سود واقعی ماه معلوم است و نه ارزش کالایی که هنوز در قفسه‌هاست. این درس دقیقاً همین دو عدد را می‌سازد.',
            en: 'Arman runs a small store that sells a single model of desk lamp. At month-end the till is full and he feels it was a good month. But when his accountant asks, “How many lamps are left in the stockroom, and what did the lamps you sold cost you?”, he has no answer. Without those two numbers he cannot know the month’s real profit or the value of the goods still on his shelves. This lesson builds exactly those two numbers.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'استودیو طراحی نوا **خدمت** می‌فروشد: درآمدش از وقت و مهارت کارکنانش به دست می‌آید و کالایی برای فروش در انبار ندارد. اما یک **شرکت بازرگانی** کالا را می‌خرد و بدون تغییر اساسی، با قیمتی بالاتر می‌فروشد. همین تفاوت یک دارایی مهم تازه (**موجودی کالا**) و یک هزینه بزرگ تازه (**بهای تمام‌شده کالای فروش‌رفته**) را وارد حساب‌ها می‌کند.',
            en: 'Nova Design Studio sells a **service**: its revenue comes from its people’s time and skill, and it holds no goods for sale. A **merchandising business** buys goods and resells them, largely unchanged, at a higher price. That one difference brings a major new asset (**inventory**) and a major new expense (**cost of goods sold**) into the accounts.',
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
            fa: 'فروشگاه آرمان فقط یک مدل چراغ مطالعه می‌فروشد. در طول دوره: موجودی ابتدای دوره **100 واحد به نرخ 10**؛ خرید اول (روز 5) **200 واحد به نرخ 12**؛ خرید دوم (روز 15) **100 واحد به نرخ 15**؛ و فروش (روز 25) **300 واحد به نرخ 25**. فرض می‌کنیم کل فروش پس از هر دو خرید انجام شده است.',
            en: 'Arman Store sells a single model of desk lamp. During the period: beginning inventory of **100 units at 10**; purchase 1 (Day 5) of **200 units at 12**; purchase 2 (Day 15) of **100 units at 15**; and sales (Day 25) of **300 units at 25**. We assume all of the sales take place after both purchases.',
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
            fa: 'سود ناخالص = فروش خالص − بهای تمام‌شده کالای فروش‌رفته',
            en: 'Gross profit = Net sales − Cost of goods sold',
          },
          note: { fa: 'فروش آرمان: 300 × 25 = 7,500', en: 'Arman’s sales: 300 × 25 = 7,500' },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'چرا سود ناخالص مهم است؟', en: 'Why gross profit matters' },
          text: {
            fa: 'سود ناخالص نشان می‌دهد پس از پوشش بهای خود کالا، چه مبلغی برای پرداخت هزینه‌های عملیاتی (اجاره، حقوق، تبلیغات) و ایجاد سود خالص باقی می‌ماند. **حاشیه سود ناخالص** (سود ناخالص ÷ فروش خالص) یکی از مهم‌ترین شاخص‌های قدرت قیمت‌گذاری و کارایی خرید است و در درس تحلیل صورت‌های مالی و نسبت‌های مالی دوباره به آن برمی‌گردیم.',
            en: 'Gross profit is what remains, after covering the cost of the goods themselves, to pay operating expenses (rent, salaries, advertising) and still earn a net profit. The **gross margin** (gross profit ÷ net sales) is a key indicator of pricing power and purchasing efficiency; we return to it in the lesson on ratio analysis.',
          },
        },
        { type: 'h', text: { fa: 'صورت سود و زیان چندمرحله‌ای یک شرکت بازرگانی', en: 'The multi-step income statement of a merchandiser' } },
        {
          type: 'list',
          ordered: true,
          items: [
            {
              fa: 'فروش ناخالص منهای **برگشت از فروش و تخفیفات** و **تخفیفات نقدی فروش** = **فروش خالص**',
              en: 'Gross sales less **sales returns and allowances** and **sales discounts** = **net sales**',
            },
            {
              fa: 'فروش خالص منهای بهای تمام‌شده کالای فروش‌رفته = **سود ناخالص**',
              en: 'Net sales less cost of goods sold = **gross profit**',
            },
            {
              fa: 'سود ناخالص منهای هزینه‌های عملیاتی (هزینه‌های فروش، اداری و عمومی) = **سود عملیاتی**',
              en: 'Gross profit less operating expenses (selling, general and administrative) = **operating profit**',
            },
            {
              fa: 'سود عملیاتی به‌علاوه یا منهای اقلام غیرعملیاتی (مانند هزینه بهره) = **سود قبل از مالیات**',
              en: 'Operating profit plus or minus non-operating items (such as interest expense) = **profit before tax**',
            },
          ],
        },
        {
          type: 'table',
          caption: {
            fa: 'فروشگاه آرمان: صورت سود و زیان چندمرحله‌ای (روش FIFO؛ هزینه‌های عملیاتی فرضی‌اند)',
            en: 'Arman Store: multi-step income statement (FIFO; operating expenses are assumed)',
          },
          head: [
            { fa: 'شرح', en: 'Item' },
            { fa: 'مبلغ', en: 'Amount' },
            { fa: 'جمع', en: 'Total' },
          ],
          rows: [
            [{ fa: 'فروش (300 × 25)', en: 'Sales (300 × 25)' }, blank, 7500],
            [{ fa: 'کسر می‌شود: بهای تمام‌شده کالای فروش‌رفته', en: 'Less: cost of goods sold' }, blank, 3400],
            [{ fa: '**سود ناخالص**', en: '**Gross profit**' }, blank, 4100],
            [{ fa: '**هزینه‌های عملیاتی:**', en: '**Operating expenses:**' }, blank, blank],
            [{ fa: 'هزینه اجاره', en: 'Rent expense' }, 1200, blank],
            [{ fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' }, 1500, blank],
            [{ fa: 'هزینه تبلیغات', en: 'Advertising expense' }, 300, blank],
            [{ fa: 'جمع هزینه‌های عملیاتی', en: 'Total operating expenses' }, blank, 3000],
            [{ fa: '**سود عملیاتی**', en: '**Operating profit**' }, blank, 1100],
          ],
          numericCols: [1, 2],
        },
        {
          type: 'p',
          text: {
            fa: 'آرمان در این دوره برگشت از فروش یا تخفیف فروش نداشت؛ پس فروش خالص همان 7,500 است. سود ناخالص 4,100 یعنی 54.7 درصد فروش (4,100 ÷ 7,500). اما همه این سود ناخالص به جیب مالک نمی‌رود: 3,000 آن صرف هزینه‌های عملیاتی می‌شود و سود عملیاتی 1,100 باقی می‌ماند. ساختار کامل صورت‌ها را در درس صورت‌های مالی دیدید.',
            en: 'Arman had no sales returns or discounts this period, so net sales are the full 7,500. Gross profit of 4,100 is 54.7% of sales (4,100 ÷ 7,500). But not all of it reaches the owner: 3,000 goes on operating expenses, leaving an operating profit of 1,100. You saw the full layout of the statements in the lesson on financial statements.',
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
              { fa: 'مانده موجودی همیشه در دسترس است؛ مناسب فروشگاه‌های مجهز به بارکدخوان و نرم‌افزار انبار', en: 'The inventory balance is always available: suits stores with barcode scanners and inventory software' },
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
              memo: { fa: 'فروش نسیه 300 واحد × 25: ثبت درآمد', en: 'Sale of 300 units × 25 on account: the revenue side' },
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
          title: {
            fa: 'همان رویدادها در سیستم ادواری، به‌همراه ثبت‌های پایان دوره',
            en: 'The same events under the periodic system, plus the period-end entries',
          },
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
              date: { fa: 'روز 15', en: 'Day 15' },
              lines: [
                { account: { fa: 'خرید', en: 'Purchases' }, debit: 1500 },
                { account: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, credit: 1500 },
              ],
              memo: { fa: 'خرید دوم', en: 'Purchase 2' },
            },
            {
              date: { fa: 'روز 25', en: 'Day 25' },
              lines: [
                { account: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, debit: 7500 },
                { account: { fa: 'فروش', en: 'Sales revenue' }, credit: 7500 },
              ],
              memo: {
                fa: 'هنگام فروش، بهای تمام‌شده ثبت نمی‌شود',
                en: 'No cost entry at the time of sale',
              },
            },
            {
              date: { fa: 'پایان دوره', en: 'Period-end' },
              lines: [
                { account: { fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of goods sold' }, debit: 4900 },
                { account: { fa: 'موجودی کالا (ابتدای دوره)', en: 'Inventory (beginning)' }, credit: 1000 },
                { account: { fa: 'خرید', en: 'Purchases' }, credit: 3900 },
              ],
              memo: {
                fa: 'انتقال کل کالای آماده برای فروش به بهای تمام‌شده؛ حساب خرید صفر می‌شود',
                en: 'Move all goods available into COGS; the Purchases account is cleared',
              },
            },
            {
              date: { fa: 'پایان دوره', en: 'Period-end' },
              lines: [
                { account: { fa: 'موجودی کالا (پایان دوره)', en: 'Inventory (ending)' }, debit: 1500 },
                { account: { fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of goods sold' }, credit: 1500 },
              ],
              memo: {
                fa: 'ثبت موجودی پایان دوره بر اساس شمارش 100 واحد (FIFO: 100 × 15)',
                en: 'Record ending inventory from the count of 100 units (FIFO: 100 × 15)',
              },
            },
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'بهای تمام‌شده کالای فروش‌رفته (ادواری) = 1,000 + 3,900 − 1,500 = 3,400',
            en: 'COGS (periodic) = 1,000 + 3,900 − 1,500 = 3,400',
          },
          note: {
            fa: 'دو ثبت پایان دوره دقیقاً همین فرمول را در دفاتر اجرا می‌کنند: 4,900 بدهکار و 1,500 بستانکار در بهای تمام‌شده، یعنی مانده 3,400.',
            en: 'The two period-end entries carry out exactly this formula in the books: a 4,900 debit and a 1,500 credit to COGS leave a balance of 3,400.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'دائمی یا ادواری؛ آیا نتیجه فرق می‌کند؟', en: 'Perpetual or periodic: does the answer change?' },
          text: {
            fa: 'در این مثال هر دو سیستم به بهای تمام‌شده 3,400 رسیدند. در روش FIFO این همیشه درست است. اما در روش میانگین، سیستم دائمی میانگین را پس از هر خرید از نو حساب می‌کند و اگر فروش‌ها میان خریدها انجام شوند، نتیجه کمی فرق می‌کند. این را در بخش روش‌های جریان بها با عدد می‌بینیم.',
            en: 'In this example both systems arrive at COGS of 3,400. Under FIFO that is always true. Under the average method, though, a perpetual system recalculates the average after every purchase, and if sales fall between purchases the result differs slightly. We will see this in numbers in the section on cost-flow methods.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: کارت انبار، رسید و حواله', en: 'In practice: stock cards, receiving and issue notes' },
          text: {
            fa: 'در کسب‌وکارهای ایرانی برای هر کالا یک **کارت انبار** (کاردکس) نگهداری می‌شود. هر ورود کالا با **رسید انبار** و هر خروج با **حواله انبار** ثبت می‌شود. انباردار مقدارها را ثبت می‌کند و حسابداری رسیدها و حواله‌ها را قیمت‌گذاری می‌کند و بر اساس آن‌ها **سند حسابداری** صادر می‌کند. در بیشتر نرم‌افزارها سیستم انبار به حسابداری وصل است و هر حواله فروش، سند بهای تمام‌شده را خودکار می‌سازد. معمولاً هر کالا یا هر انبار یک **حساب تفصیلی** زیر حساب معین موجودی کالا دارد.',
            en: 'Iranian businesses keep a **stock card** (often called a kardex) for every item. Each receipt of goods is recorded on a **goods received note** and each issue on an **issue note**. The storekeeper records quantities; accounting prices the notes and raises the **accounting voucher** from them. In most software the inventory module is linked to the ledger, so each sales issue note creates the COGS voucher automatically. Usually each item or warehouse has its own **detail account** under the Inventory subsidiary account.',
          },
        },
      ],
    },
    {
      id: 'purchases',
      title: { fa: 'خرید کالا: برگشت، تخفیف نقدی و هزینه حمل', en: 'Purchases: returns, cash discounts and freight' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'خرید کالا در عمل کمتر به سادگی «یک فاکتور، یک پرداخت» است. تأمین‌کننده تازه آرمان می‌گوید «اگر ظرف 10 روز بپردازی، 2 درصد تخفیف می‌گیری»، باربری برای آوردن کالا کرایه می‌گیرد و چند واحد هم آسیب‌دیده می‌رسد. هر کدام از این‌ها بهای واقعی موجودی کالا را تغییر می‌دهد. قاعده کلی ساده است: **بهای موجودی کالا یعنی همه مخارج لازم برای رساندن کالا به انبار و آماده کردنش برای فروش، منهای هر برگشت و تخفیفی که گرفته‌ایم.**',
            en: 'In real life a purchase is rarely “one invoice, one payment”. Arman’s new supplier says “pay within 10 days and get 2% off”, a carrier charges to deliver the goods, and a few units arrive damaged. Each of these changes what the inventory really cost. The general rule is simple: **the cost of inventory is everything needed to bring the goods to the stockroom and make them ready for sale, less any returns and discounts received.**',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**برگشت از خرید و تخفیفات**: کالای معیوب یا نامطابق را به فروشنده پس می‌دهیم (برگشت)، یا آن را نگه می‌داریم و فروشنده بخشی از مبلغ را کم می‌کند (تخفیف). هر دو، بدهی ما و بهای موجودی را کاهش می‌دهند.',
              en: '**Purchase returns and allowances**: we send faulty or wrong goods back (a return), or keep them and the seller knocks something off the price (an allowance). Both reduce what we owe and the cost of inventory.',
            },
            {
              fa: '**تخفیف نقدی خرید**: تخفیفی برای پرداخت زودهنگام. شرط «2/10، n/30» یعنی اگر ظرف 10 روز بپردازید 2 درصد تخفیف می‌گیرید و در غیر این صورت کل مبلغ تا 30 روز باید پرداخت شود. این تخفیف بهای کالا را کم می‌کند؛ درآمد نیست.',
              en: '**Purchase (cash) discount**: a reward for paying early. Terms of “2/10, n/30” mean you get 2% off if you pay within 10 days; otherwise the full amount is due within 30 days. The discount reduces the cost of the goods; it is not revenue.',
            },
            {
              fa: '**تخفیف تجاری**: کاهش قیمت فهرست هنگام خرید. ثبت جداگانه ندارد؛ خرید را از ابتدا به قیمت پس از تخفیف ثبت می‌کنیم.',
              en: '**Trade discount**: a reduction from the list price at the time of purchase. It is never recorded separately; the purchase is simply recorded at the discounted price.',
            },
            {
              fa: '**حمل کالای خریداری‌شده (حمل به داخل)**: کرایه آوردن کالا تا انبار ما جزو بهای موجودی کالاست.',
              en: '**Freight-in**: the cost of bringing goods to our stockroom is part of the cost of inventory.',
            },
            {
              fa: '**هزینه حمل کالای فروش‌رفته (حمل به خارج)**: کرایه رساندن کالا به مشتری، هزینه فروش همان دوره است و به موجودی اضافه نمی‌شود.',
              en: '**Freight-out**: the cost of delivering goods to customers is a selling expense of the period and is never added to inventory.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'مثال: خرید مدل جدید چراغ', en: 'Example: buying a new lamp model' },
          text: {
            fa: 'در ماه دوم، آرمان یک مدل جدید چراغ را هم به فروشگاه اضافه می‌کند. روز 2، **520 واحد به نرخ 20** (جمعاً 10,400) با شرط **2/10، n/30** نسیه می‌خرد و 300 کرایه حمل نقد می‌پردازد. روز 4، **20 واحد آسیب‌دیده** (400) را پس می‌فرستد. روز 11، یعنی پیش از پایان مهلت 10 روزه، مانده بدهی را می‌پردازد. روز 20 هم 150 برای رساندن کالا به یک مشتری می‌پردازد.',
            en: 'In month two Arman adds a new lamp model. On Day 2 he buys **520 units at 20** (10,400) on account, terms **2/10, n/30**, and pays 300 cash to the carrier. On Day 4 he returns **20 damaged units** (400). On Day 11, inside the 10-day window, he pays the balance. On Day 20 he pays 150 to deliver goods to a customer.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت در سیستم دائمی', en: 'Recording under the perpetual system' },
          entries: [
            {
              date: { fa: 'روز 2', en: 'Day 2' },
              lines: [
                { account: { fa: 'موجودی کالا', en: 'Inventory' }, debit: 10400 },
                { account: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, credit: 10400 },
              ],
              memo: { fa: 'خرید نسیه 520 واحد × 20، شرط 2/10، n/30', en: 'Purchase of 520 units × 20 on account, terms 2/10, n/30' },
            },
            {
              date: { fa: 'روز 2', en: 'Day 2' },
              lines: [
                { account: { fa: 'موجودی کالا', en: 'Inventory' }, debit: 300 },
                { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 300 },
              ],
              memo: { fa: 'کرایه حمل به داخل: جزو بهای موجودی کالا', en: 'Freight-in: part of the cost of inventory' },
            },
            {
              date: { fa: 'روز 4', en: 'Day 4' },
              lines: [
                { account: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, debit: 400 },
                { account: { fa: 'موجودی کالا', en: 'Inventory' }, credit: 400 },
              ],
              memo: { fa: 'برگشت 20 واحد آسیب‌دیده × 20', en: 'Return of 20 damaged units × 20' },
            },
            {
              date: { fa: 'روز 11', en: 'Day 11' },
              lines: [
                { account: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, debit: 10000 },
                { account: { fa: 'موجودی کالا', en: 'Inventory' }, credit: 200 },
                { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 9800 },
              ],
              memo: {
                fa: 'پرداخت در مهلت تخفیف: 2 درصد × 10,000 = 200 از بهای موجودی کم می‌شود',
                en: 'Paid within the discount period: 2% × 10,000 = 200 comes off the cost of inventory',
              },
            },
            {
              date: { fa: 'روز 20', en: 'Day 20' },
              lines: [
                { account: { fa: 'هزینه حمل کالای فروش‌رفته', en: 'Freight-out expense' }, debit: 150 },
                { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 150 },
              ],
              memo: { fa: 'حمل به خارج: هزینه فروش، نه موجودی کالا', en: 'Freight-out: a selling expense, not inventory' },
            },
          ],
        },
        {
          type: 'table',
          caption: {
            fa: 'همان رویدادها در دو سیستم: کدام حساب تغییر می‌کند؟ (طرف دیگر ثبت در هر دو سیستم یکی است)',
            en: 'The same events in both systems: which account moves? (the other side of each entry is the same in both)',
          },
          head: [
            { fa: 'رویداد', en: 'Event' },
            { fa: 'سیستم دائمی', en: 'Perpetual' },
            { fa: 'سیستم ادواری', en: 'Periodic' },
          ],
          rows: [
            [
              { fa: 'خرید نسیه 10,400', en: 'Purchase on account, 10,400' },
              { fa: 'موجودی کالا بدهکار', en: 'Dr Inventory' },
              { fa: 'خرید بدهکار', en: 'Dr Purchases' },
            ],
            [
              { fa: 'کرایه حمل به داخل 300', en: 'Freight-in, 300' },
              { fa: 'موجودی کالا بدهکار', en: 'Dr Inventory' },
              { fa: 'حمل کالای خریداری‌شده بدهکار', en: 'Dr Freight-in' },
            ],
            [
              { fa: 'برگشت از خرید 400', en: 'Purchase return, 400' },
              { fa: 'موجودی کالا بستانکار', en: 'Cr Inventory' },
              { fa: 'برگشت از خرید و تخفیفات بستانکار', en: 'Cr Purchase returns and allowances' },
            ],
            [
              { fa: 'تخفیف نقدی خرید 200', en: 'Purchase discount, 200' },
              { fa: 'موجودی کالا بستانکار', en: 'Cr Inventory' },
              { fa: 'تخفیفات نقدی خرید بستانکار', en: 'Cr Purchase discounts' },
            ],
            [
              { fa: 'حمل به خارج 150', en: 'Freight-out, 150' },
              { fa: 'هزینه حمل کالای فروش‌رفته بدهکار', en: 'Dr Freight-out expense' },
              { fa: 'هزینه حمل کالای فروش‌رفته بدهکار', en: 'Dr Freight-out expense' },
            ],
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'خرید خالص = خرید − برگشت از خرید و تخفیفات − تخفیفات نقدی خرید',
            en: 'Net purchases = Purchases − Purchase returns and allowances − Purchase discounts',
          },
          note: {
            fa: 'بهای تمام‌شده کالای خریداری‌شده = خرید خالص + حمل کالای خریداری‌شده',
            en: 'Cost of goods purchased = Net purchases + Freight-in',
          },
        },
        {
          type: 'table',
          caption: { fa: 'بهای تمام‌شده مدل جدید چراغ', en: 'The cost of the new lamp model' },
          head: [
            { fa: 'شرح', en: 'Item' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          rows: [
            [{ fa: 'خرید (520 × 20)', en: 'Purchases (520 × 20)' }, 10400],
            [{ fa: 'کسر می‌شود: برگشت از خرید و تخفیفات', en: 'Less: purchase returns and allowances' }, 400],
            [{ fa: 'کسر می‌شود: تخفیفات نقدی خرید', en: 'Less: purchase discounts' }, 200],
            [{ fa: 'خرید خالص', en: 'Net purchases' }, 9800],
            [{ fa: 'اضافه می‌شود: حمل کالای خریداری‌شده', en: 'Add: freight-in' }, 300],
            [{ fa: '**بهای تمام‌شده کالای خریداری‌شده (500 واحد)**', en: '**Cost of goods purchased (500 units)**' }, 10100],
            [{ fa: 'بهای هر واحد (10,100 ÷ 500)', en: 'Cost per unit (10,100 ÷ 500)' }, 20.2],
          ],
          numericCols: [1],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: مالیات بر ارزش افزوده فاکتور خرید', en: 'In practice: VAT on purchase invoices' },
          text: {
            fa: 'در ایران فاکتور خرید معمولاً مالیات بر ارزش افزوده دارد. اگر این مالیات شرایط کسر یا استرداد را داشته باشد (یعنی بعداً از مالیات فروش کم شود)، **جزو بهای کالا نیست** و در حسابی جدا ثبت می‌شود. در این مثال نرخ را 10 درصد فرض می‌کنیم: برای فاکتور 10,000 کالا و 1,000 مالیات، موجودی کالا 10,000 بدهکار، مالیات بر ارزش افزوده خرید 1,000 بدهکار و حساب‌های پرداختنی 11,000 بستانکار می‌شود. نرخ رسمی را از قوانین روز بررسی کنید؛ جزئیات را در درس بدهی‌ها، حقوق و دستمزد و مالیات بر ارزش افزوده می‌بینید. IAS 2 هم مالیات‌های قابل استرداد را از بهای موجودی کنار می‌گذارد.',
            en: 'In Iran a purchase invoice usually carries VAT. If that VAT qualifies to be offset or refunded (it will later be deducted from the VAT on sales), it is **not part of the cost of the goods** and is recorded in a separate account. Assume a 10% rate for this example: for an invoice of 10,000 of goods plus 1,000 of VAT, debit Inventory 10,000 and VAT on purchases 1,000, and credit Accounts payable 11,000. Check the official rate in current law; the details are in the lesson on liabilities, payroll and VAT. IAS 2 likewise excludes recoverable taxes from the cost of inventory.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'برگشت از فروش در سیستم دائمی', en: 'Sales returns under a perpetual system' },
          text: {
            fa: 'وقتی مشتری کالا را پس می‌آورد، دو ثبت لازم است: (1) **برگشت از فروش و تخفیفات** بدهکار و حساب‌های دریافتنی (یا موجودی نقد) بستانکار، به قیمت فروش؛ (2) اگر کالا سالم و قابل فروش دوباره است، موجودی کالا بدهکار و بهای تمام‌شده کالای فروش‌رفته بستانکار، به بهای تمام‌شده. برگشت از فروش حساب کاهنده فروش است و در صورت سود و زیان از فروش کم می‌شود.',
            en: 'When a customer brings goods back, two entries are needed: (1) debit **Sales returns and allowances** and credit Accounts receivable (or Cash) at the selling price; (2) if the goods are sound and can be resold, debit Inventory and credit Cost of goods sold at cost. Sales returns is a contra-revenue account deducted from sales on the income statement.',
          },
        },
      ],
    },
    {
      id: 'cost-flow',
      title: { fa: 'روش‌های جریان بها: FIFO، میانگین موزون و میانگین متحرک', en: 'Cost-flow methods: FIFO, weighted average and moving average' },
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
            fa: 'لایه‌های بهای فروشگاه آرمان: در FIFO قدیمی‌ترین لایه‌ها اول مصرف می‌شوند؛ در میانگین موزون همه واحدها بهای واحد یکسانی دارند.',
            en: 'Arman’s cost layers: FIFO consumes the oldest layers first; weighted average gives every unit the same blended cost.',
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
        { type: 'h', text: { fa: 'میانگین موزون (سیستم ادواری)', en: 'Weighted average (periodic system)' } },
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
        { type: 'h', text: { fa: 'میانگین متحرک (سیستم دائمی)', en: 'Moving average (perpetual system)' } },
        {
          type: 'p',
          text: {
            fa: 'در سیستم دائمی، میانگین پس از **هر خرید** دوباره حساب می‌شود و هر فروش با میانگینِ همان لحظه بهاگذاری می‌شود. برای اینکه اثرش را ببینیم، ماه آرمان را کمی تغییر می‌دهیم: او 150 واحد را روز 10 (پس از خرید اول) و 150 واحد دیگر را روز 25 (پس از خرید دوم) می‌فروشد. خریدها، تعداد فروش و قیمت فروش همان قبلی است.',
            en: 'In a perpetual system the average is recalculated after **every purchase**, and each sale is costed at the average at that moment. To see the effect, change Arman’s month slightly: he sells 150 units on Day 10 (after purchase 1) and the other 150 on Day 25 (after purchase 2). The purchases, the units sold and the selling price are unchanged.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'کارت انبار آرمان به روش میانگین متحرک (فروش در دو نوبت)',
            en: 'Arman’s stock card under moving average (sales in two batches)',
          },
          head: [
            { fa: 'تاریخ و رویداد', en: 'Date and event' },
            { fa: 'تعداد رویداد', en: 'Units moved' },
            { fa: 'بهای رویداد', en: 'Cost moved' },
            { fa: 'تعداد مانده', en: 'Units on hand' },
            { fa: 'بهای مانده', en: 'Cost on hand' },
            { fa: 'بهای میانگین واحد', en: 'Average unit cost' },
          ],
          rows: [
            [{ fa: 'روز 1: موجودی ابتدای دوره', en: 'Day 1: beginning inventory' }, 100, 1000, 100, 1000, 10],
            [{ fa: 'روز 5: خرید 200 × 12', en: 'Day 5: purchase 200 × 12' }, 200, 2400, 300, 3400, 11.33],
            [{ fa: 'روز 10: فروش 150 واحد (بهای خروجی)', en: 'Day 10: sale of 150 units (cost out)' }, 150, 1700, 150, 1700, 11.33],
            [{ fa: 'روز 15: خرید 100 × 15', en: 'Day 15: purchase 100 × 15' }, 100, 1500, 250, 3200, 12.8],
            [{ fa: 'روز 25: فروش 150 واحد (بهای خروجی)', en: 'Day 25: sale of 150 units (cost out)' }, 150, 1920, 100, 1280, 12.8],
            [{ fa: 'جمع بهای تمام‌شده کالای فروش‌رفته', en: 'Total cost of goods sold' }, blank, 3620, blank, blank, blank],
          ],
          numericCols: [1, 2, 3, 4, 5],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: گرد کردن و نرم‌افزار', en: 'In practice: rounding and software' },
          text: {
            fa: 'میانگین پس از روز 5 دقیقاً 3,400 ÷ 300 است (حدود 11.33). نرم‌افزار کسر کامل را نگه می‌دارد، پس بهای 150 واحد دقیقاً 1,700 می‌شود. اگر دستی کار می‌کنید، بهای مانده را همیشه از «بهای مانده قبلی منهای بهای خروجی» به دست آورید، نه از «تعداد × نرخ گردشده»، تا اختلاف‌های کوچک روی هم جمع نشوند. بیشتر نرم‌افزارهای انبار در ایران هم FIFO و هم میانگین متحرک را دارند؛ هر کدام را انتخاب کنید، باید آن را یکنواخت به کار ببرید.',
            en: 'The average after Day 5 is exactly 3,400 ÷ 300 (about 11.33). Software keeps the full fraction, so 150 units cost exactly 1,700. If you work by hand, always get the cost on hand as “previous cost on hand minus cost out”, never as “units × rounded rate”, so small differences do not pile up. Most inventory software used in Iran offers both FIFO and moving average; whichever you pick, apply it consistently.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'و FIFO در همین حالت؟ فروش روز 10 با (100 × 10) + (50 × 12) = 1,600 و فروش روز 25 با 150 × 12 = 1,800 بهاگذاری می‌شود: جمعاً 3,400، دقیقاً همان رقم ادواری. در FIFO زمان فروش نتیجه را تغییر نمی‌دهد؛ در روش میانگین تغییر می‌دهد.',
            en: 'And FIFO in the same situation? The Day-10 sale costs (100 × 10) + (50 × 12) = 1,600 and the Day-25 sale 150 × 12 = 1,800: 3,400 in total, exactly the periodic figure. Under FIFO the timing of sales never changes the answer; under the average method it does.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'فروشگاه آرمان: مقایسه سه روش (فروش 300 × 25 = 7,500)',
            en: 'Arman Store: the three methods compared (sales 300 × 25 = 7,500)',
          },
          head: [
            { fa: 'شرح', en: 'Item' },
            { fa: 'FIFO (دائمی یا ادواری)', en: 'FIFO (perpetual or periodic)' },
            { fa: 'میانگین موزون ادواری', en: 'Periodic weighted average' },
            { fa: 'میانگین متحرک دائمی', en: 'Perpetual moving average' },
          ],
          rows: [
            [{ fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of goods sold' }, 3400, 3675, 3620],
            [{ fa: 'موجودی پایان دوره (100 واحد)', en: 'Ending inventory (100 units)' }, 1500, 1225, 1280],
            [{ fa: 'جمع: کالای آماده برای فروش', en: 'Total: goods available for sale' }, 4900, 4900, 4900],
            [{ fa: '**سود ناخالص**', en: '**Gross profit**' }, 4100, 3825, 3880],
            [
              { fa: 'حاشیه سود ناخالص', en: 'Gross margin' },
              { fa: '54.7%', en: '54.7%' },
              { fa: '51.0%', en: '51.0%' },
              { fa: '51.7%', en: '51.7%' },
            ],
          ],
          numericCols: [1, 2, 3],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'اثر روش در دوره افزایش قیمت‌ها', en: 'The effect when prices are rising' },
          text: {
            fa: 'نرخ خرید آرمان از 10 به 15 رسیده است. در چنین شرایطی FIFO بهای قدیمی‌تر و ارزان‌تر را به بهای تمام‌شده می‌برد؛ پس **سود ناخالص بیشتری** گزارش می‌شود و **موجودی پایان دوره به قیمت‌های روز نزدیک‌تر** است. روش‌های میانگین نوسان قیمت‌ها را هموار می‌کنند و نتیجه‌ای کمتر از FIFO می‌دهند. توجه کنید که جمع بهای تمام‌شده و موجودی پایان دوره در هر سه روش 4,900 است؛ روش فقط نحوه تقسیم این مبلغ را تغییر می‌دهد. اگر قیمت‌ها کاهش یابند، رابطه برعکس می‌شود.',
            en: 'Arman’s purchase price climbed from 10 to 15. When prices rise, FIFO sends the older, cheaper costs to COGS, so it reports **higher gross profit** and an **ending inventory closer to current prices**. The average methods smooth out price changes and report less than FIFO. Notice that COGS plus ending inventory equals 4,900 under all three methods: the method only changes how that total is split. If prices fall, the relationship reverses.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'روش سوم مجاز، **شناسایی ویژه** است: بهای واقعی همان واحدی که فروخته شده به بهای تمام‌شده می‌رود. این روش برای اقلام گران و منحصربه‌فرد (مانند خودرو، جواهر یا فرش دست‌باف) که هر واحدش قابل ردیابی است مناسب است و برای کالاهای یکسان و پرتعداد کاربرد ندارد.',
            en: 'The third permitted method is **specific identification**: the actual cost of the very unit sold goes to COGS. It suits expensive, unique items whose every unit can be traced (cars, jewellery, hand-woven carpets) and is not used for large numbers of identical goods.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'LIFO مجاز نیست', en: 'LIFO is not permitted' },
          text: {
            fa: 'روش «اولین صادره از آخرین وارده» (LIFO)، که فرض می‌کند تازه‌ترین کالاها اول فروخته می‌شوند، طبق **IFRS (استاندارد IAS 2)** مجاز نیست و استاندارد حسابداری ایران درباره موجودی مواد و کالا نیز آن را در میان روش‌های قابل‌قبول نمی‌آورد، چون می‌تواند موجودی ترازنامه را با بهاهای بسیار قدیمی نشان دهد. ممکن است در منابع مبتنی بر US GAAP با آن روبه‌رو شوید. روش‌های قابل‌قبول FIFO، میانگین موزون (ادواری یا متحرک) و برای اقلام منحصربه‌فرد، شناسایی ویژه است.',
            en: '**Last-in, first-out (LIFO)**, which assumes the newest goods are sold first, is not permitted under **IFRS (IAS 2)**, and the Iranian accounting standard on inventories does not list it among the acceptable methods either, because it can leave inventory on the balance sheet at badly outdated costs. You may still meet it in US GAAP material. The acceptable methods are FIFO, weighted average (periodic or moving) and, for unique items, specific identification.',
          },
        },
      ],
    },
    {
      id: 'lcnrv-count',
      title: { fa: 'اقل بها و خالص ارزش فروش، و شمارش موجودی', en: 'Lower of cost and NRV, and the inventory count' },
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
              en: 'If NRV recovers in a later period, IAS 2 requires the write-down to be **reversed**, but inventory is never carried above its original cost.',
            },
            {
              fa: 'این قاعده نمونه‌ای از احتیاط است: زیان‌های مورد انتظار به‌موقع شناسایی می‌شوند، اما سودهای تحقق‌نیافته نه.',
              en: 'The rule is prudence in action: expected losses are recognised promptly, unrealised gains are not.',
            },
          ],
        },
        { type: 'h', text: { fa: 'شمارش فیزیکی (انبارگردانی)', en: 'The physical count (stocktake)' } },
        {
          type: 'p',
          text: {
            fa: 'دفاتر می‌گویند چه چیزی **باید** در انبار باشد؛ شمارش فیزیکی می‌گوید واقعاً چه چیزی هست. حتی در سیستم دائمی، کسب‌وکارها دست‌کم سالی یک بار، معمولاً در پایان سال مالی، موجودی را می‌شمارند. اختلاف‌ها از سرقت، خرابی، اشتباه در ثبت رسید و حواله یا تحویل اشتباه به مشتری می‌آیند. پس از بررسی علت، دفاتر با نتیجه شمارش تطبیق داده می‌شوند. در شمارش، پرسش اصلی **مالکیت** است، نه محل کالا:',
            en: 'The records say what **should** be in the stockroom; a physical count says what is actually there. Even with a perpetual system, businesses count at least once a year, usually at year-end. Differences come from theft, damage, mistakes on receiving or issue notes, or wrong deliveries. Once the cause is investigated, the records are adjusted to the count. In a count the key question is **ownership**, not location:',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**قطع حساب (برش زمانی)**: رسیدها و حواله‌های روز آخر باید در همان دوره‌ای ثبت شوند که کالا جابه‌جا شده است؛ کالایی که فروش آن ثبت شده نباید دوباره شمرده شود.',
              en: '**Cut-off**: receipts and issues on the last day must be recorded in the period in which the goods actually moved; goods whose sale is already recorded must not be counted again.',
            },
            {
              fa: '**کالای در راه، تحویل در مبدأ (FOB مبدأ)**: مالکیت از لحظه ارسال به خریدار می‌رسد؛ کالایی که خریده‌ایم و هنوز در راه است، جزو موجودی ماست.',
              en: '**Goods in transit, FOB shipping point**: ownership passes to the buyer when the goods are shipped; goods we bought that are still on the road are part of our inventory.',
            },
            {
              fa: '**کالای در راه، تحویل در مقصد (FOB مقصد)**: مالکیت هنگام رسیدن کالا منتقل می‌شود؛ کالایی که فروخته‌ایم و هنوز به مشتری نرسیده، هنوز موجودی ماست.',
              en: '**Goods in transit, FOB destination**: ownership passes when the goods arrive; goods we sold that have not yet reached the customer are still our inventory.',
            },
            {
              fa: '**کالای امانی**: کالایی که دیگران برای فروش نزد ما گذاشته‌اند متعلق به آن‌هاست و نباید شمرده شود؛ کالای ما که نزد دیگران امانت است، باید اضافه شود.',
              en: '**Consigned goods**: goods others have left with us to sell belong to them and must not be counted; our own goods held by someone else on consignment must be added.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'مثال: کسری انبار', en: 'Example: shrinkage' },
          text: {
            fa: 'فرض کنید کارت انبار آرمان 100 واحد (1,500 به روش FIFO) نشان می‌دهد، اما شمارش فقط 96 واحد پیدا می‌کند. بهای 4 واحد گم‌شده 4 × 15 = 60 است و دفاتر باید تا رقم شمارش کاهش یابند. کسری عادی و جزئی معمولاً به بهای تمام‌شده کالای فروش‌رفته می‌رود؛ زیان غیرعادی یا بزرگ بهتر است در حساب هزینه جداگانه‌ای (مانند هزینه کسری و ضایعات کالا) نشان داده شود تا مدیریت آن را ببیند.',
            en: 'Suppose Arman’s stock card shows 100 units (1,500 at FIFO) but the count finds only 96. The 4 missing units cost 4 × 15 = 60, and the records must be reduced to the count. Normal, small shrinkage usually goes into cost of goods sold; an unusual or large loss is better shown in a separate expense account (such as inventory shortage expense) so that management sees it.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت کسری انبار در سیستم دائمی', en: 'Recording shrinkage under a perpetual system' },
          entries: [
            {
              date: { fa: 'پایان دوره', en: 'Period-end' },
              lines: [
                { account: { fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of goods sold' }, debit: 60 },
                { account: { fa: 'موجودی کالا', en: 'Inventory' }, credit: 60 },
              ],
              memo: { fa: 'تطبیق دفاتر با شمارش: 4 واحد × 15', en: 'Adjust the records to the count: 4 units × 15' },
            },
          ],
        },
        { type: 'h', text: { fa: 'اثر اشتباه در موجودی پایان دوره', en: 'How an ending-inventory error flows through' } },
        {
          type: 'table',
          caption: {
            fa: 'اگر موجودی پایان سال اول 500 بیشتر از واقع گزارش شود',
            en: 'If year-1 ending inventory is overstated by 500',
          },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'سال اول', en: 'Year 1' },
            { fa: 'سال دوم', en: 'Year 2' },
          ],
          rows: [
            [
              { fa: 'موجودی کالا', en: 'Inventory' },
              { fa: 'پایان دوره 500 بیشتر', en: 'Ending: overstated by 500' },
              { fa: 'ابتدای دوره 500 بیشتر؛ پایان دوره درست', en: 'Beginning: overstated by 500; ending correct' },
            ],
            [
              { fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of goods sold' },
              { fa: '500 کمتر', en: 'Understated by 500' },
              { fa: '500 بیشتر', en: 'Overstated by 500' },
            ],
            [
              { fa: 'سود خالص', en: 'Net income' },
              { fa: '500 بیشتر', en: 'Overstated by 500' },
              { fa: '500 کمتر', en: 'Understated by 500' },
            ],
            [
              { fa: 'حقوق مالکانه پایان سال', en: 'Equity at year-end' },
              { fa: '500 بیشتر', en: 'Overstated by 500' },
              { fa: 'درست (دو اشتباه یکدیگر را خنثی کرده‌اند)', en: 'Correct (the two errors cancel out)' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: انبارگردانی پایان سال', en: 'In practice: the year-end count' },
          text: {
            fa: 'در بسیاری از کسب‌وکارهای ایرانی انبارگردانی در روزهای پایانی سال مالی (اغلب اسفند) انجام می‌شود. روش رایج: تیم‌های دونفره (یکی می‌شمارد، دیگری ثبت می‌کند)، برگه‌ها یا برچسب‌های شمارش شماره‌دار، توقف ورود و خروج کالا در زمان شمارش یا ثبت دقیق آخرین رسید و حواله، و فهرست جداگانه برای کالای معیوب و راکد. در شرکت‌هایی که حسابرسی می‌شوند، حسابرس معمولاً در شمارش حاضر می‌شود. اختلاف‌ها پیش از صدور سند تعدیل بررسی و با تأیید مدیر مسئول ثبت می‌شوند.',
            en: 'Many Iranian businesses hold their stocktake in the last days of the fiscal year (often in Esfand). Common practice: two-person teams (one counts, one records), pre-numbered count sheets or tags, a freeze on goods movements during the count or a precise record of the last receiving and issue notes, and a separate list for damaged and slow-moving items. In audited companies the auditor usually attends the count. Differences are investigated before the adjusting voucher is raised and are approved by the responsible manager.',
          },
        },
      ],
    },
    {
      id: 'mistakes',
      title: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'این‌ها اشتباه‌هایی است که تازه‌کارها در حساب موجودی کالا بیش از همه مرتکب می‌شوند. کنار هر کدام راه درست آمده است.',
            en: 'These are the inventory errors beginners make most often. Each one comes with the correct approach.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**هزینه کردن کرایه حمل به داخل**: این کرایه جزو بهای موجودی کالاست؛ فقط حمل به خارج (تحویل به مشتری) هزینه فروش است.',
              en: '**Expensing freight-in**: it is part of the cost of inventory; only freight-out (delivery to customers) is a selling expense.',
            },
            {
              fa: '**فراموش کردن ثبت بهای تمام‌شده در سیستم دائمی**: هر فروش دو ثبت دارد؛ اگر فقط درآمد را ثبت کنید، موجودی کالا بیشتر و بهای تمام‌شده کمتر از واقع می‌ماند.',
              en: '**Forgetting the cost entry under a perpetual system**: every sale needs two entries; record only the revenue and inventory stays overstated while COGS is understated.',
            },
            {
              fa: '**میانگین ساده به‌جای میانگین موزون**: میانگین نرخ‌های 10، 12 و 15 برابر 12.33 است، اما میانگین درست 4,900 ÷ 400 = 12.25 است. همیشه جمع بها را بر جمع تعداد تقسیم کنید.',
              en: '**A simple average instead of a weighted one**: the average of the rates 10, 12 and 15 is 12.33, but the correct average is 4,900 ÷ 400 = 12.25. Always divide total cost by total units.',
            },
            {
              fa: '**ثبت تخفیف نقدی خرید به‌عنوان درآمد**: این تخفیف بهای موجودی را کم می‌کند (در سیستم ادواری، حساب کاهنده خرید است).',
              en: '**Recording a purchase discount as revenue**: it reduces the cost of inventory (in a periodic system it is a contra-purchases account).',
            },
            {
              fa: '**شمردن کالای امانی دیگران یا جا انداختن کالای در راه**: در شمارش به مالکیت نگاه کنید، نه به محل کالا.',
              en: '**Counting other people’s consigned goods, or missing goods in transit that you own**: count by ownership, not by location.',
            },
            {
              fa: '**نگه داشتن کالای معیوب یا راکد به بهای تمام‌شده**: آن را قلم به قلم با خالص ارزش فروش مقایسه کنید و در صورت لزوم کاهش ارزش ثبت کنید.',
              en: '**Leaving damaged or slow-moving stock at cost**: compare it with NRV item by item and record a write-down where needed.',
            },
            {
              fa: '**استفاده از LIFO یا تغییر روش هر سال**: از FIFO، میانگین یا شناسایی ویژه استفاده کنید و روش را یکنواخت به کار ببرید؛ هر تغییر باید دلیل موجه داشته باشد و افشا شود.',
              en: '**Using LIFO, or switching methods every year**: use FIFO, an average method or specific identification, and apply it consistently; any change must be justified and disclosed.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'یک کنترل همیشگی', en: 'One check that always works' },
          text: {
            fa: 'بهای تمام‌شده کالای فروش‌رفته + موجودی پایان دوره = کالای آماده برای فروش. اگر دو عدد شما جمعاً به کالای آماده برای فروش نمی‌رسند، جایی اشتباه شده است. برای آرمان در هر سه روش: جمع 4,900.',
            en: 'Cost of goods sold + ending inventory = goods available for sale. If your two numbers do not add up to goods available, something is wrong. For Arman, under all three methods: 4,900.',
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
            fa: 'هر تمرین یک کسب‌وکار تازه است. اول خودتان حل کنید، بعد راه‌حل را باز کنید و گام‌به‌گام مقایسه کنید.',
            en: 'Each exercise is a new business. Solve it yourself first, then open the solution and compare step by step.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'بهای تمام‌شده در سیستم ادواری', en: 'COGS under a periodic system' },
          difficulty: 'easy',
          problem: {
            fa: 'کتاب‌فروشی پارسا از سیستم ادواری استفاده می‌کند. اطلاعات سال مالی در جدول زیر آمده است. خرید خالص، بهای تمام‌شده کالای خریداری‌شده، کالای آماده برای فروش، بهای تمام‌شده کالای فروش‌رفته و سود ناخالص را محاسبه کنید.',
            en: 'Parsa Bookshop uses the periodic system. Its figures for the year are below. Calculate net purchases, cost of goods purchased, goods available for sale, cost of goods sold and gross profit.',
          },
          given: {
            head: [
              { fa: 'قلم', en: 'Item' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            rows: [
              [{ fa: 'موجودی ابتدای دوره', en: 'Beginning inventory' }, 12000],
              [{ fa: 'خرید', en: 'Purchases' }, 48000],
              [{ fa: 'برگشت از خرید و تخفیفات', en: 'Purchase returns and allowances' }, 2000],
              [{ fa: 'تخفیفات نقدی خرید', en: 'Purchase discounts' }, 900],
              [{ fa: 'حمل کالای خریداری‌شده', en: 'Freight-in' }, 1400],
              [{ fa: 'هزینه حمل کالای فروش‌رفته', en: 'Freight-out' }, 800],
              [{ fa: 'موجودی پایان دوره (طبق شمارش)', en: 'Ending inventory (per count)' }, 15500],
              [{ fa: 'فروش خالص', en: 'Net sales' }, 70000],
            ],
            numericCols: [1],
          },
          hint: {
            fa: 'هزینه حمل کالای فروش‌رفته هزینه فروش است و وارد بهای تمام‌شده نمی‌شود.',
            en: 'Freight-out is a selling expense; it never enters COGS.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'جدول بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of goods sold schedule' },
              head: [
                { fa: 'شرح', en: 'Item' },
                { fa: 'مبلغ', en: 'Amount' },
                { fa: 'جمع', en: 'Total' },
              ],
              rows: [
                [{ fa: 'موجودی ابتدای دوره', en: 'Beginning inventory' }, blank, 12000],
                [{ fa: 'خرید', en: 'Purchases' }, 48000, blank],
                [{ fa: 'کسر می‌شود: برگشت از خرید و تخفیفات', en: 'Less: purchase returns and allowances' }, 2000, blank],
                [{ fa: 'کسر می‌شود: تخفیفات نقدی خرید', en: 'Less: purchase discounts' }, 900, blank],
                [{ fa: 'خرید خالص', en: 'Net purchases' }, 45100, blank],
                [{ fa: 'اضافه می‌شود: حمل کالای خریداری‌شده', en: 'Add: freight-in' }, 1400, blank],
                [{ fa: 'بهای تمام‌شده کالای خریداری‌شده', en: 'Cost of goods purchased' }, blank, 46500],
                [{ fa: 'کالای آماده برای فروش', en: 'Goods available for sale' }, blank, 58500],
                [{ fa: 'کسر می‌شود: موجودی پایان دوره', en: 'Less: ending inventory' }, blank, 15500],
                [{ fa: '**بهای تمام‌شده کالای فروش‌رفته**', en: '**Cost of goods sold**' }, blank, 43000],
              ],
              numericCols: [1, 2],
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'سود ناخالص', en: 'Gross profit' },
                  text: {
                    fa: '70,000 − 43,000 = 27,000؛ حاشیه سود ناخالص 27,000 ÷ 70,000 حدود 38.6 درصد است.',
                    en: '70,000 − 43,000 = 27,000; the gross margin is 27,000 ÷ 70,000, about 38.6%.',
                  },
                },
                {
                  title: { fa: 'هزینه حمل کالای فروش‌رفته', en: 'Freight-out' },
                  text: {
                    fa: 'مبلغ 800 زیر سود ناخالص و در هزینه‌های فروش می‌آید؛ اگر آن را وارد بهای تمام‌شده کنید، سود ناخالص را اشتباه 26,200 گزارش می‌کنید.',
                    en: 'The 800 belongs under gross profit, in selling expenses; put it into COGS and you would wrongly report a gross profit of 26,200.',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: 'خرید خالص 45,100؛ بهای کالای خریداری‌شده 46,500؛ کالای آماده برای فروش 58,500؛ بهای تمام‌شده کالای فروش‌رفته 43,000؛ سود ناخالص 27,000.',
            en: 'Net purchases 45,100; cost of goods purchased 46,500; goods available 58,500; COGS 43,000; gross profit 27,000.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'FIFO و میانگین موزون در سیستم ادواری', en: 'FIFO vs weighted average, periodic' },
          difficulty: 'medium',
          problem: {
            fa: 'فروشگاه دوچرخه البرز یک مدل کلاه ایمنی می‌فروشد و از سیستم ادواری استفاده می‌کند. در این دوره 150 کلاه به قیمت هر عدد 90 فروخته است. بهای تمام‌شده کالای فروش‌رفته، موجودی پایان دوره و سود ناخالص را به روش FIFO و میانگین موزون محاسبه کنید. کدام روش سود بیشتری نشان می‌دهد و چرا؟',
            en: 'Alborz Bike Shop sells one model of helmet and uses the periodic system. It sold 150 helmets at 90 each this period. Calculate cost of goods sold, ending inventory and gross profit under FIFO and under weighted average. Which method shows the higher profit, and why?',
          },
          given: {
            head: [
              { fa: 'شرح', en: 'Layer' },
              { fa: 'تعداد', en: 'Units' },
              { fa: 'بهای واحد', en: 'Unit cost' },
              { fa: 'بهای کل', en: 'Total cost' },
            ],
            rows: [
              [{ fa: 'موجودی ابتدای دوره', en: 'Beginning inventory' }, 40, 50, 2000],
              [{ fa: 'خرید اول', en: 'Purchase 1' }, 60, 55, 3300],
              [{ fa: 'خرید دوم', en: 'Purchase 2' }, 100, 60, 6000],
            ],
            numericCols: [1, 2, 3],
          },
          hint: {
            fa: 'اول کالای آماده برای فروش (تعداد و بها) را پیدا کنید. در FIFO، 50 واحد باقی‌مانده از آخرین خریدند.',
            en: 'Find goods available (units and cost) first. Under FIFO, the 50 units left come from the latest purchase.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'کالای آماده برای فروش', en: 'Goods available' },
                  text: {
                    fa: '40 + 60 + 100 = 200 واحد با بهای 2,000 + 3,300 + 6,000 = 11,300. فروخته‌شده 150 و مانده 50 واحد.',
                    en: '40 + 60 + 100 = 200 units costing 2,000 + 3,300 + 6,000 = 11,300. Sold 150, left 50 units.',
                  },
                },
                {
                  title: { fa: 'روش FIFO', en: 'FIFO' },
                  text: {
                    fa: 'بهای تمام‌شده = (40 × 50) + (60 × 55) + (50 × 60) = 2,000 + 3,300 + 3,000 = 8,300. موجودی پایان دوره = 50 × 60 = 3,000.',
                    en: 'COGS = (40 × 50) + (60 × 55) + (50 × 60) = 2,000 + 3,300 + 3,000 = 8,300. Ending inventory = 50 × 60 = 3,000.',
                  },
                },
                {
                  title: { fa: 'میانگین موزون', en: 'Weighted average' },
                  text: {
                    fa: 'بهای میانگین = 11,300 ÷ 200 = 56.5. بهای تمام‌شده = 150 × 56.5 = 8,475. موجودی پایان دوره = 50 × 56.5 = 2,825.',
                    en: 'Average cost = 11,300 ÷ 200 = 56.5. COGS = 150 × 56.5 = 8,475. Ending inventory = 50 × 56.5 = 2,825.',
                  },
                },
                {
                  title: { fa: 'سود ناخالص', en: 'Gross profit' },
                  text: {
                    fa: 'فروش = 150 × 90 = 13,500. FIFO: 13,500 − 8,300 = 5,200. میانگین موزون: 13,500 − 8,475 = 5,025.',
                    en: 'Sales = 150 × 90 = 13,500. FIFO: 13,500 − 8,300 = 5,200. Weighted average: 13,500 − 8,475 = 5,025.',
                  },
                },
              ],
            },
            {
              type: 'table',
              head: [
                { fa: 'شرح', en: 'Item' },
                { fa: 'FIFO', en: 'FIFO' },
                { fa: 'میانگین موزون', en: 'Weighted average' },
              ],
              rows: [
                [{ fa: 'فروش', en: 'Sales' }, 13500, 13500],
                [{ fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of goods sold' }, 8300, 8475],
                [{ fa: '**سود ناخالص**', en: '**Gross profit**' }, 5200, 5025],
                [{ fa: 'موجودی پایان دوره', en: 'Ending inventory' }, 3000, 2825],
              ],
              numericCols: [1, 2],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'قیمت خرید بالا رفته است (50، 55، 60)؛ پس FIFO بهای قدیمی‌تر و ارزان‌تر را به بهای تمام‌شده می‌برد و 175 سود بیشتری نشان می‌دهد. کنترل: در هر دو روش بهای تمام‌شده + موجودی پایان دوره = 11,300.',
                en: 'Purchase prices rose (50, 55, 60), so FIFO charges the older, cheaper costs to COGS and shows 175 more profit. Check: under both methods COGS + ending inventory = 11,300.',
              },
            },
          ],
          answer: {
            fa: 'FIFO: بهای تمام‌شده 8,300، موجودی 3,000، سود ناخالص 5,200. میانگین موزون: 8,475، 2,825 و 5,025.',
            en: 'FIFO: COGS 8,300, ending inventory 3,000, gross profit 5,200. Weighted average: 8,475, 2,825 and 5,025.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'کارت انبار با میانگین متحرک', en: 'A moving-average stock card' },
          difficulty: 'medium',
          problem: {
            fa: 'فروشگاه کفش رهرو از سیستم دائمی و روش میانگین متحرک استفاده می‌کند. کارت انبار را تکمیل کنید و ثبت‌های روزنامه خرید و فروش را بنویسید. بهای تمام‌شده کالای فروش‌رفته، موجودی پایان دوره و سود ناخالص چقدر است؟',
            en: 'Rahro Shoe Store uses a perpetual system with moving average. Complete the stock card and write the journal entries for the purchases and sales. What are cost of goods sold, ending inventory and gross profit?',
          },
          given: {
            head: [
              { fa: 'روز', en: 'Day' },
              { fa: 'رویداد', en: 'Event' },
              { fa: 'تعداد', en: 'Units' },
              { fa: 'نرخ', en: 'Price' },
            ],
            rows: [
              [1, { fa: 'موجودی ابتدای دوره (بهای واحد)', en: 'Beginning inventory (unit cost)' }, 200, 30],
              [6, { fa: 'خرید نسیه (بهای واحد)', en: 'Purchase on account (unit cost)' }, 300, 35],
              [12, { fa: 'فروش نسیه (قیمت فروش)', en: 'Sale on account (selling price)' }, 250, 60],
              [20, { fa: 'خرید نقدی (بهای واحد)', en: 'Cash purchase (unit cost)' }, 250, 37],
              [27, { fa: 'فروش نقدی (قیمت فروش)', en: 'Cash sale (selling price)' }, 300, 62],
            ],
            numericCols: [0, 2, 3],
          },
          hint: {
            fa: 'میانگین را پس از هر خرید دوباره حساب کنید. فروش میانگین را تغییر نمی‌دهد؛ فقط تعداد و بهای مانده را کم می‌کند.',
            en: 'Recalculate the average after each purchase. A sale does not change the average; it only reduces units and cost on hand.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'کارت انبار فروشگاه رهرو', en: 'Rahro’s stock card' },
              head: [
                { fa: 'تاریخ و رویداد', en: 'Date and event' },
                { fa: 'تعداد رویداد', en: 'Units moved' },
                { fa: 'بهای رویداد', en: 'Cost moved' },
                { fa: 'تعداد مانده', en: 'Units on hand' },
                { fa: 'بهای مانده', en: 'Cost on hand' },
                { fa: 'بهای میانگین واحد', en: 'Average unit cost' },
              ],
              rows: [
                [{ fa: 'روز 1: موجودی ابتدای دوره', en: 'Day 1: beginning inventory' }, 200, 6000, 200, 6000, 30],
                [{ fa: 'روز 6: خرید 300 × 35', en: 'Day 6: purchase 300 × 35' }, 300, 10500, 500, 16500, 33],
                [{ fa: 'روز 12: فروش 250 (250 × 33)', en: 'Day 12: sale of 250 (250 × 33)' }, 250, 8250, 250, 8250, 33],
                [{ fa: 'روز 20: خرید 250 × 37', en: 'Day 20: purchase 250 × 37' }, 250, 9250, 500, 17500, 35],
                [{ fa: 'روز 27: فروش 300 (300 × 35)', en: 'Day 27: sale of 300 (300 × 35)' }, 300, 10500, 200, 7000, 35],
                [{ fa: 'جمع بهای تمام‌شده کالای فروش‌رفته', en: 'Total cost of goods sold' }, blank, 18750, blank, blank, blank],
              ],
              numericCols: [1, 2, 3, 4, 5],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'روز 6', en: 'Day 6' },
                  lines: [
                    { account: { fa: 'موجودی کالا', en: 'Inventory' }, debit: 10500 },
                    { account: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, credit: 10500 },
                  ],
                  memo: { fa: 'خرید نسیه 300 × 35', en: 'Purchase on account, 300 × 35' },
                },
                {
                  date: { fa: 'روز 12', en: 'Day 12' },
                  lines: [
                    { account: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, debit: 15000 },
                    { account: { fa: 'فروش', en: 'Sales revenue' }, credit: 15000 },
                  ],
                  memo: { fa: 'فروش نسیه 250 × 60', en: 'Sale on account, 250 × 60' },
                },
                {
                  date: { fa: 'روز 12', en: 'Day 12' },
                  lines: [
                    { account: { fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of goods sold' }, debit: 8250 },
                    { account: { fa: 'موجودی کالا', en: 'Inventory' }, credit: 8250 },
                  ],
                  memo: { fa: 'بهای خروجی 250 × 33', en: 'Cost out, 250 × 33' },
                },
                {
                  date: { fa: 'روز 20', en: 'Day 20' },
                  lines: [
                    { account: { fa: 'موجودی کالا', en: 'Inventory' }, debit: 9250 },
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 9250 },
                  ],
                  memo: { fa: 'خرید نقدی 250 × 37', en: 'Cash purchase, 250 × 37' },
                },
                {
                  date: { fa: 'روز 27', en: 'Day 27' },
                  lines: [
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, debit: 18600 },
                    { account: { fa: 'فروش', en: 'Sales revenue' }, credit: 18600 },
                  ],
                  memo: { fa: 'فروش نقدی 300 × 62', en: 'Cash sale, 300 × 62' },
                },
                {
                  date: { fa: 'روز 27', en: 'Day 27' },
                  lines: [
                    { account: { fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of goods sold' }, debit: 10500 },
                    { account: { fa: 'موجودی کالا', en: 'Inventory' }, credit: 10500 },
                  ],
                  memo: { fa: 'بهای خروجی 300 × 35', en: 'Cost out, 300 × 35' },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'کنترل: کالای آماده برای فروش 6,000 + 10,500 + 9,250 = 25,750 است که برابر بهای تمام‌شده 18,750 به‌علاوه موجودی پایان دوره 7,000 است. فروش 15,000 + 18,600 = 33,600 و سود ناخالص 33,600 − 18,750 = 14,850.',
                en: 'Check: goods available 6,000 + 10,500 + 9,250 = 25,750 equals COGS 18,750 plus ending inventory 7,000. Sales 15,000 + 18,600 = 33,600, and gross profit 33,600 − 18,750 = 14,850.',
              },
            },
          ],
          answer: {
            fa: 'بهای تمام‌شده کالای فروش‌رفته 18,750؛ موجودی پایان دوره 200 واحد × 35 = 7,000؛ سود ناخالص 14,850.',
            en: 'COGS 18,750; ending inventory 200 units × 35 = 7,000; gross profit 14,850.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'شمارش پایان سال و مالکیت کالا', en: 'Year-end count and ownership' },
          difficulty: 'medium',
          problem: {
            fa: 'سال مالی پوشاک ترنج در 29 اسفند پایان می‌یابد. کارکنان کالای داخل فروشگاه را شمردند و بهای آن را 84,000 به دست آوردند. حسابدار سپس چهار مورد زیر را پیدا می‌کند. موجودی پایان دوره صحیح چقدر است؟ اگر فروشگاه همان 84,000 را گزارش می‌کرد، سود امسال و سال بعد چه تغییری می‌کرد؟',
            en: 'Toranj Clothing’s fiscal year ends on 29 Esfand. Staff counted the goods in the store at a cost of 84,000. The accountant then finds the four items below. What is the correct ending inventory? If the store had reported 84,000, how would this year’s and next year’s profit be affected?',
          },
          given: {
            head: [
              { fa: 'مورد', en: 'Item' },
              { fa: 'بها', en: 'Cost' },
            ],
            rows: [
              [{ fa: 'الف) کالای خریداری‌شده با شرط تحویل در مبدأ؛ ارسال 27 اسفند، رسیدن 3 فروردین (شمرده نشده)', en: 'a) Goods bought FOB shipping point, shipped 27 Esfand, arriving 3 Farvardin (not counted)' }, 6000],
              [{ fa: 'ب) کالای فروخته‌شده با شرط تحویل در مقصد؛ ارسال 28 اسفند، تحویل 2 فروردین (شمرده نشده)', en: 'b) Goods sold FOB destination, sent 28 Esfand, delivered 2 Farvardin (not counted)' }, 4000],
              [{ fa: 'ج) کالای امانی یک تولیدکننده که برای فروش در فروشگاه است (شمرده شده)', en: 'c) A manufacturer’s goods held in the store on consignment (counted)' }, 5000],
              [{ fa: 'د) کالای سفارش‌داده‌شده با شرط تحویل در مقصد که پایان سال در راه بوده (شمرده نشده)', en: 'd) Goods ordered FOB destination, still on the road at year-end (not counted)' }, 3000],
            ],
            numericCols: [1],
          },
          hint: {
            fa: 'برای هر مورد فقط یک پرسش بپرسید: در 29 اسفند مالک این کالا چه کسی بود؟',
            en: 'Ask one question for each item: on 29 Esfand, who owned these goods?',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'مورد', en: 'Item' },
                { fa: 'اثر بر موجودی', en: 'Adjustment' },
                { fa: 'دلیل', en: 'Reason' },
              ],
              rows: [
                [{ fa: 'شمارش فیزیکی', en: 'Physical count' }, 84000, { fa: 'نقطه شروع', en: 'Starting point' }],
                [{ fa: 'الف) در راه، تحویل در مبدأ', en: 'a) In transit, FOB shipping point' }, 6000, { fa: 'مالکیت هنگام ارسال به ما رسیده است', en: 'Ownership passed to us at shipment' }],
                [{ fa: 'ب) فروخته‌شده، تحویل در مقصد', en: 'b) Sold, FOB destination' }, 4000, { fa: 'تا تحویل به مشتری مال ماست', en: 'Ours until delivered to the customer' }],
                [{ fa: 'ج) کالای امانی دیگران', en: 'c) Others’ consigned goods' }, -5000, { fa: 'متعلق به تولیدکننده است', en: 'Belongs to the manufacturer' }],
                [{ fa: 'د) در راه، تحویل در مقصد', en: 'd) In transit, FOB destination' }, 0, { fa: 'تا رسیدن، مال فروشنده است', en: 'The seller’s until it arrives' }],
                [{ fa: '**جمع: موجودی پایان دوره صحیح**', en: '**Total: correct ending inventory**' }, 89000, blank],
              ],
              numericCols: [1],
            },
            {
              type: 'callout',
              tone: 'warning',
              title: { fa: 'اثر گزارش 84,000', en: 'The effect of reporting 84,000' },
              text: {
                fa: 'موجودی پایان دوره 5,000 کمتر از واقع (89,000 − 84,000) گزارش می‌شد؛ پس بهای تمام‌شده امسال 5,000 بیشتر و سود امسال 5,000 کمتر می‌شد. سال بعد، همین رقم موجودی ابتدای دوره است؛ پس بهای تمام‌شده سال بعد 5,000 کمتر و سود آن 5,000 بیشتر می‌شد. جمع دو سال درست است، اما صورت‌های هر دو سال نادرست‌اند.',
                en: 'Ending inventory would be understated by 5,000 (89,000 − 84,000), so this year’s COGS would be overstated by 5,000 and profit understated by 5,000. Next year that figure becomes beginning inventory, so next year’s COGS would be understated by 5,000 and profit overstated by 5,000. The two-year total is right, but both years’ statements are wrong.',
              },
            },
          ],
          answer: {
            fa: 'موجودی صحیح 89,000؛ گزارش 84,000 سود امسال را 5,000 کمتر و سود سال بعد را 5,000 بیشتر نشان می‌داد.',
            en: 'Correct ending inventory is 89,000; reporting 84,000 would understate this year’s profit by 5,000 and overstate next year’s by 5,000.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'یک ماه کامل در سیستم دائمی', en: 'A full month under a perpetual system' },
          difficulty: 'hard',
          problem: {
            fa: 'لوازم خانگی نیلوفر از سیستم دائمی و روش FIFO استفاده می‌کند. در ابتدای ماه 10 مخلوط‌کن دارد که بهای هر کدام 380 است. رویدادهای ماه در جدول آمده است. همه ثبت‌های روزنامه را بنویسید و موجودی پایان دوره، بهای تمام‌شده کالای فروش‌رفته و سود ناخالص را به دست آورید.',
            en: 'Niloufar Home Appliances uses a perpetual system with FIFO. At the start of the month it holds 10 blenders costing 380 each. The month’s events are in the table. Write every journal entry, then find ending inventory, cost of goods sold and gross profit.',
          },
          given: {
            head: [
              { fa: 'روز', en: 'Day' },
              { fa: 'رویداد', en: 'Event' },
            ],
            rows: [
              [3, { fa: 'خرید نسیه 55 مخلوط‌کن به نرخ 400 با شرط 2/10، n/30', en: 'Buys 55 blenders at 400 on account, terms 2/10, n/30' }],
              [4, { fa: 'برگشت 5 مخلوط‌کن آسیب‌دیده از همین خرید', en: 'Returns 5 damaged blenders from that purchase' }],
              [5, { fa: 'پرداخت نقدی 600 کرایه حمل این محموله به باربری', en: 'Pays the carrier 600 cash for the shipment (freight-in)' }],
              [12, { fa: 'پرداخت مانده بدهی به فروشنده در مهلت تخفیف', en: 'Pays the supplier the balance within the discount period' }],
              [15, { fa: 'فروش نسیه 40 مخلوط‌کن به نرخ 650', en: 'Sells 40 blenders at 650 on account' }],
              [18, { fa: 'پرداخت نقدی 300 برای ارسال کالا به مشتری', en: 'Pays 300 cash to deliver the goods to the customer' }],
              [30, { fa: 'شمارش: 19 مخلوط‌کن (دفاتر 20 نشان می‌دهد). 4 عدد خط‌وخش دارند و فقط به نرخ 420 با 40 مخارج فروش برای هر عدد فروخته می‌شوند.', en: 'Count: 19 blenders on hand (records show 20). 4 are scratched and will sell for only 420 each, with selling costs of 40 each.' }],
            ],
            numericCols: [0],
          },
          hint: {
            fa: 'اول بهای هر واحد محموله جدید را پیدا کنید: فاکتور منهای برگشت، منهای تخفیف، به‌علاوه کرایه، تقسیم بر 50 واحدی که نگه داشته شده است.',
            en: 'Find the unit cost of the new batch first: invoice less return, less discount, plus freight, divided by the 50 units kept.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'بهای محموله جدید', en: 'Cost of the new batch' },
                  text: {
                    fa: 'فاکتور 55 × 400 = 22,000؛ برگشت 5 × 400 = 2,000؛ مانده بدهی 20,000؛ تخفیف 2 درصد × 20,000 = 400؛ کرایه 600. بها = 22,000 − 2,000 − 400 + 600 = 20,200 برای 50 واحد، یعنی هر واحد 404.',
                    en: 'Invoice 55 × 400 = 22,000; return 5 × 400 = 2,000; balance owed 20,000; discount 2% × 20,000 = 400; freight 600. Cost = 22,000 − 2,000 − 400 + 600 = 20,200 for 50 units, or 404 each.',
                  },
                },
                {
                  title: { fa: 'بهای فروش روز 15 (FIFO)', en: 'Cost of the Day-15 sale (FIFO)' },
                  text: {
                    fa: '(10 × 380) + (30 × 404) = 3,800 + 12,120 = 15,920. پس از فروش، دفاتر 20 واحد × 404 = 8,080 نشان می‌دهند.',
                    en: '(10 × 380) + (30 × 404) = 3,800 + 12,120 = 15,920. After the sale the records show 20 units × 404 = 8,080.',
                  },
                },
                {
                  title: { fa: 'کسری انبار', en: 'Shrinkage' },
                  text: {
                    fa: '20 − 19 = 1 واحد × 404 = 404.',
                    en: '20 − 19 = 1 unit × 404 = 404.',
                  },
                },
                {
                  title: { fa: 'کاهش به خالص ارزش فروش', en: 'Write-down to NRV' },
                  text: {
                    fa: 'خالص ارزش فروش هر واحد خط‌دار = 420 − 40 = 380 که از بها (404) کمتر است. کاهش ارزش = 4 × (404 − 380) = 96.',
                    en: 'NRV of each scratched unit = 420 − 40 = 380, below cost (404). Write-down = 4 × (404 − 380) = 96.',
                  },
                },
                {
                  title: { fa: 'موجودی پایان دوره', en: 'Ending inventory' },
                  text: {
                    fa: '(15 × 404) + (4 × 380) = 6,060 + 1,520 = 7,580.',
                    en: '(15 × 404) + (4 × 380) = 6,060 + 1,520 = 7,580.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              title: { fa: 'ثبت‌های روزنامه ماه', en: 'The month’s journal entries' },
              entries: [
                {
                  date: { fa: 'روز 3', en: 'Day 3' },
                  lines: [
                    { account: { fa: 'موجودی کالا', en: 'Inventory' }, debit: 22000 },
                    { account: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, credit: 22000 },
                  ],
                  memo: { fa: 'خرید نسیه 55 × 400', en: 'Purchase on account, 55 × 400' },
                },
                {
                  date: { fa: 'روز 4', en: 'Day 4' },
                  lines: [
                    { account: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, debit: 2000 },
                    { account: { fa: 'موجودی کالا', en: 'Inventory' }, credit: 2000 },
                  ],
                  memo: { fa: 'برگشت از خرید 5 × 400', en: 'Purchase return, 5 × 400' },
                },
                {
                  date: { fa: 'روز 5', en: 'Day 5' },
                  lines: [
                    { account: { fa: 'موجودی کالا', en: 'Inventory' }, debit: 600 },
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 600 },
                  ],
                  memo: { fa: 'کرایه حمل به داخل', en: 'Freight-in' },
                },
                {
                  date: { fa: 'روز 12', en: 'Day 12' },
                  lines: [
                    { account: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, debit: 20000 },
                    { account: { fa: 'موجودی کالا', en: 'Inventory' }, credit: 400 },
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 19600 },
                  ],
                  memo: { fa: 'پرداخت با 2 درصد تخفیف نقدی', en: 'Payment with the 2% cash discount' },
                },
                {
                  date: { fa: 'روز 15', en: 'Day 15' },
                  lines: [
                    { account: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, debit: 26000 },
                    { account: { fa: 'فروش', en: 'Sales revenue' }, credit: 26000 },
                  ],
                  memo: { fa: 'فروش نسیه 40 × 650', en: 'Sale on account, 40 × 650' },
                },
                {
                  date: { fa: 'روز 15', en: 'Day 15' },
                  lines: [
                    { account: { fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of goods sold' }, debit: 15920 },
                    { account: { fa: 'موجودی کالا', en: 'Inventory' }, credit: 15920 },
                  ],
                  memo: { fa: 'بهای خروجی به روش FIFO', en: 'Cost out under FIFO' },
                },
                {
                  date: { fa: 'روز 18', en: 'Day 18' },
                  lines: [
                    { account: { fa: 'هزینه حمل کالای فروش‌رفته', en: 'Freight-out expense' }, debit: 300 },
                    { account: { fa: 'موجودی نقد', en: 'Cash' }, credit: 300 },
                  ],
                  memo: { fa: 'حمل به خارج: هزینه فروش', en: 'Freight-out: a selling expense' },
                },
                {
                  date: { fa: 'روز 30', en: 'Day 30' },
                  lines: [
                    { account: { fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of goods sold' }, debit: 404 },
                    { account: { fa: 'موجودی کالا', en: 'Inventory' }, credit: 404 },
                  ],
                  memo: { fa: 'کسری انبار: 1 واحد', en: 'Shrinkage: 1 unit' },
                },
                {
                  date: { fa: 'روز 30', en: 'Day 30' },
                  lines: [
                    { account: { fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of goods sold' }, debit: 96 },
                    { account: { fa: 'موجودی کالا', en: 'Inventory' }, credit: 96 },
                  ],
                  memo: { fa: 'کاهش ارزش 4 واحد خط‌دار به خالص ارزش فروش', en: 'Write-down of 4 scratched units to NRV' },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'نتیجه ماه', en: 'The month’s result' },
              head: [
                { fa: 'شرح', en: 'Item' },
                { fa: 'مبلغ', en: 'Amount' },
              ],
              rows: [
                [{ fa: 'فروش', en: 'Sales' }, 26000],
                [{ fa: 'بهای تمام‌شده کالای فروش‌رفته (15,920 + 404 + 96)', en: 'Cost of goods sold (15,920 + 404 + 96)' }, 16420],
                [{ fa: '**سود ناخالص**', en: '**Gross profit**' }, 9580],
                [{ fa: 'موجودی پایان دوره', en: 'Ending inventory' }, 7580],
              ],
              numericCols: [1],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'کنترل: کالای آماده برای فروش 3,800 + 20,200 = 24,000 است که برابر 16,420 + 7,580 است. کرایه 300 روز 18 زیر سود ناخالص و در هزینه‌های فروش می‌آید.',
                en: 'Check: goods available 3,800 + 20,200 = 24,000, which equals 16,420 + 7,580. The 300 of freight on Day 18 sits below gross profit, in selling expenses.',
              },
            },
          ],
          answer: {
            fa: 'موجودی پایان دوره 7,580؛ بهای تمام‌شده کالای فروش‌رفته 16,420؛ سود ناخالص 9,580.',
            en: 'Ending inventory 7,580; cost of goods sold 16,420; gross profit 9,580.',
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
              fa: 'در شرکت بازرگانی، **بهای تمام‌شده کالای فروش‌رفته = موجودی ابتدای دوره + خرید خالص و کرایه حمل به داخل − موجودی پایان دوره** و سود ناخالص = فروش خالص − بهای تمام‌شده.',
              en: 'In a merchandiser, **COGS = beginning inventory + net purchases and freight-in − ending inventory**, and gross profit = net sales − COGS.',
            },
            {
              fa: 'سیستم دائمی موجودی و بهای تمام‌شده را با هر رویداد به‌روز می‌کند؛ سیستم ادواری بهای تمام‌شده را در پایان دوره و پس از شمارش محاسبه می‌کند.',
              en: 'A perpetual system updates inventory and COGS with every event; a periodic system works out COGS at period-end, after the count.',
            },
            {
              fa: 'برگشت از خرید و تخفیف نقدی خرید بهای موجودی را کم می‌کنند؛ کرایه حمل به داخل جزو بهاست و کرایه حمل به خارج هزینه فروش است.',
              en: 'Purchase returns and cash discounts reduce the cost of inventory; freight-in is part of cost and freight-out is a selling expense.',
            },
            {
              fa: 'FIFO، میانگین موزون (ادواری)، میانگین متحرک (دائمی) و شناسایی ویژه مجازند؛ LIFO طبق IAS 2 مجاز نیست. در دوره افزایش قیمت‌ها FIFO سود بیشتری نشان می‌دهد.',
              en: 'FIFO, weighted average (periodic), moving average (perpetual) and specific identification are allowed; LIFO is not under IAS 2. When prices rise, FIFO reports higher profit.',
            },
            {
              fa: 'موجودی به اقل بهای تمام‌شده و خالص ارزش فروش، و قلم به قلم، اندازه‌گیری می‌شود.',
              en: 'Inventory is measured at the lower of cost and NRV, item by item.',
            },
            {
              fa: 'شمارش فیزیکی بر اساس مالکیت انجام می‌شود و دفاتر با آن تطبیق داده می‌شوند؛ اشتباه در موجودی پایان دوره سود دو دوره را در جهت مخالف جابه‌جا می‌کند.',
              en: 'The physical count follows ownership and the records are adjusted to it; an ending-inventory error shifts profit between two periods in opposite directions.',
            },
          ],
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
                en: 'Goods held for sale in the ordinary course of business: a current asset.',
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
                fa: 'فروش خالص منهای بهای تمام‌شده کالای فروش‌رفته؛ مبلغ باقی‌مانده برای پوشش هزینه‌های عملیاتی.',
                en: 'Net sales minus cost of goods sold: what is left to cover operating expenses.',
              },
            },
            {
              term: { fa: 'فروش خالص', en: 'Net sales' },
              def: {
                fa: 'فروش ناخالص منهای برگشت از فروش و تخفیفات و تخفیفات نقدی فروش.',
                en: 'Gross sales less sales returns and allowances and sales discounts.',
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
              term: { fa: 'کارت انبار (کاردکس)', en: 'Stock card' },
              def: {
                fa: 'سابقه ورود، خروج و مانده هر کالا (تعداد و بها) که بر اساس رسید و حواله انبار نگهداری می‌شود.',
                en: 'The record of receipts, issues and balance (units and cost) for each item, kept from receiving and issue notes.',
              },
            },
            {
              term: { fa: 'برگشت از خرید و تخفیفات', en: 'Purchase returns and allowances' },
              def: {
                fa: 'کالای پس‌فرستاده به فروشنده یا کاهش قیمتی که فروشنده برای کالای معیوب می‌دهد؛ بهای خرید را کم می‌کند.',
                en: 'Goods sent back to the seller, or a price reduction for faulty goods; reduces the cost of purchases.',
              },
            },
            {
              term: { fa: 'تخفیف نقدی خرید', en: 'Purchase discount' },
              def: {
                fa: 'تخفیف برای پرداخت زودهنگام، مانند شرط 2/10، n/30؛ از بهای موجودی کم می‌شود.',
                en: 'A discount for paying early, such as terms of 2/10, n/30; it reduces the cost of inventory.',
              },
            },
            {
              term: { fa: 'حمل کالای خریداری‌شده (حمل به داخل)', en: 'Freight-in' },
              def: {
                fa: 'کرایه آوردن کالای خریداری‌شده تا انبار؛ جزو بهای موجودی کالا.',
                en: 'The cost of bringing purchased goods to the stockroom; part of the cost of inventory.',
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
              term: { fa: 'میانگین متحرک', en: 'Moving average' },
              def: {
                fa: 'میانگین موزون در سیستم دائمی که پس از هر خرید دوباره محاسبه می‌شود.',
                en: 'The weighted average under a perpetual system, recalculated after every purchase.',
              },
            },
            {
              term: { fa: 'شناسایی ویژه', en: 'Specific identification' },
              def: {
                fa: 'بهاگذاری هر واحد فروخته‌شده با بهای واقعی همان واحد؛ برای اقلام گران و منحصربه‌فرد.',
                en: 'Costing each unit sold at its own actual cost; used for expensive, unique items.',
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
              term: { fa: 'انبارگردانی (شمارش فیزیکی)', en: 'Physical count (stocktake)' },
              def: {
                fa: 'شمارش واقعی کالای موجود برای مقایسه با دفاتر و تعیین موجودی پایان دوره.',
                en: 'Actually counting the goods on hand to compare with the records and fix ending inventory.',
              },
            },
            {
              term: { fa: 'کالای در راه', en: 'Goods in transit' },
              def: {
                fa: 'کالایی که در پایان دوره میان فروشنده و خریدار در حرکت است؛ مالک آن را شرط تحویل در مبدأ یا مقصد تعیین می‌کند.',
                en: 'Goods moving between seller and buyer at period-end; FOB shipping point or FOB destination decides who owns them.',
              },
            },
            {
              term: { fa: 'کالای امانی', en: 'Consigned goods' },
              def: {
                fa: 'کالایی که مالکش آن را برای فروش نزد دیگری گذاشته است؛ جزو موجودی مالک است، نه نگهدارنده.',
                en: 'Goods left by their owner with someone else to sell; they belong in the owner’s inventory, not the holder’s.',
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
        fa: 'بهای تمام‌شده = 8,000 + 30,000 − 6,000 = 32,000. رقم 38,000 کالای آماده برای فروش است که هنوز موجودی پایان دوره از آن کم نشده؛ 24,000 موجودی ابتدای دوره را جا انداخته و 44,000 موجودی پایان دوره را به‌جای کم کردن، اضافه کرده است.',
        en: 'COGS = 8,000 + 30,000 − 6,000 = 32,000. 38,000 is goods available, before deducting ending inventory; 24,000 leaves out beginning inventory; 44,000 adds ending inventory instead of deducting it.',
      },
    },
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
        fa: 'در سیستم دائمی هر فروش دو ثبت دارد: یکی برای درآمد و دیگری برای انتقال بهای کالا از موجودی کالا به بهای تمام‌شده. گزینه «پایان دوره، پس از شمارش» وسوسه‌انگیز است، اما توصیف سیستم ادواری است.',
        en: 'In a perpetual system every sale has two entries: one for the revenue and one moving the goods’ cost from Inventory to COGS. “At period-end, after the count” is tempting, but it describes the periodic system.',
      },
    },
    {
      q: {
        fa: 'آرمان 300 به باربری می‌پردازد تا محموله چراغ‌های خریداری‌شده را به فروشگاه بیاورد. این 300 چگونه ثبت می‌شود؟',
        en: 'Arman pays a carrier 300 to bring a shipment of purchased lamps to his store. How is the 300 recorded?',
      },
      options: [
        { fa: 'به‌عنوان هزینه فروش در صورت سود و زیان', en: 'As a selling expense on the income statement' },
        { fa: 'به‌عنوان کاهش خرید', en: 'As a reduction of purchases' },
        { fa: 'به‌عنوان بخشی از بهای موجودی کالا', en: 'As part of the cost of inventory' },
        { fa: 'به‌عنوان هزینه مالی', en: 'As a finance cost' },
      ],
      answer: 2,
      explain: {
        fa: 'کرایه حمل به داخل برای رساندن کالا به انبار لازم است؛ پس جزو بهای موجودی کالاست و وقتی کالا فروخته شد از راه بهای تمام‌شده هزینه می‌شود. گزینه «هزینه فروش» برای کرایه حمل به خارج (تحویل به مشتری) درست است، نه حمل به داخل.',
        en: 'Freight-in is needed to get the goods into the stockroom, so it is part of the cost of inventory and is expensed through COGS when the goods are sold. “Selling expense” is right for freight-out (delivery to customers), not freight-in.',
      },
    },
    {
      q: {
        fa: 'فروشگاهی 10,000 کالا با شرط 2/10، n/30 نسیه می‌خرد، 1,000 از آن را برمی‌گرداند و مانده را ظرف 10 روز می‌پردازد. چقدر وجه نقد می‌پردازد؟',
        en: 'A store buys 10,000 of goods on account, terms 2/10, n/30, returns 1,000 of them and pays the balance within 10 days. How much cash does it pay?',
      },
      options: [
        { fa: '9,800', en: '9,800' },
        { fa: '9,000', en: '9,000' },
        { fa: '8,800', en: '8,800' },
        { fa: '8,820', en: '8,820' },
      ],
      answer: 3,
      explain: {
        fa: 'تخفیف فقط به مانده بدهی پس از برگشت تعلق می‌گیرد: (10,000 − 1,000) × 98 درصد = 8,820. رقم 8,800 تخفیف را روی کل فاکتور، از جمله کالای برگشتی، حساب کرده؛ 9,800 برگشت را نادیده گرفته و 9,000 تخفیف را فراموش کرده است.',
        en: 'The discount applies only to the balance after the return: (10,000 − 1,000) × 98% = 8,820. 8,800 takes the discount on the whole invoice, including the returned goods; 9,800 ignores the return; 9,000 forgets the discount.',
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
        fa: 'در FIFO قدیمی‌ترین واحدها فروخته می‌شوند، پس 100 واحد باقی‌مانده از آخرین خرید به نرخ 15 هستند: 100 × 15 = 1,500. رقم 1,000 بهای قدیمی‌ترین لایه است که FIFO اتفاقاً اول آن را می‌فروشد و 1,225 پاسخ روش میانگین موزون است.',
        en: 'FIFO sells the oldest units first, so the 100 units left come from the latest purchase at 15: 100 × 15 = 1,500. 1,000 is the oldest layer, which FIFO sells first, and 1,225 is the weighted-average answer.',
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
        fa: 'بهای میانگین = 4,900 ÷ 400 = 12.25 و بهای تمام‌شده = 300 × 12.25 = 3,675. رقم 3,700 از میانگین ساده نرخ‌ها (10، 12 و 15) به دست می‌آید که تعداد واحدهای هر خرید را نادیده می‌گیرد و 3,400 پاسخ FIFO است.',
        en: 'Average cost = 4,900 ÷ 400 = 12.25, so COGS = 300 × 12.25 = 3,675. 3,700 comes from a simple average of 10, 12 and 15, which ignores how many units were bought at each price; 3,400 is the FIFO answer.',
      },
    },
    {
      q: {
        fa: 'در حالت میانگین متحرک (فروش 150 واحد در روز 10 و 150 واحد در روز 25)، موجودی پایان دوره آرمان چقدر است؟',
        en: 'In the moving-average case (150 units sold on Day 10 and 150 on Day 25), what is Arman’s ending inventory?',
      },
      options: [
        { fa: '1,225', en: '1,225' },
        { fa: '1,280', en: '1,280' },
        { fa: '1,500', en: '1,500' },
        { fa: '1,200', en: '1,200' },
      ],
      answer: 1,
      explain: {
        fa: 'پس از خرید روز 15، 250 واحد با بهای 3,200 داریم و میانگین 12.8 است؛ پس از فروش روز 25، 100 واحد × 12.8 = 1,280 می‌ماند. رقم 1,225 پاسخ میانگین موزون ادواری است که زمان فروش‌ها را نادیده می‌گیرد و 1,500 پاسخ FIFO است.',
        en: 'After the Day-15 purchase there are 250 units costing 3,200, an average of 12.8; after the Day-25 sale 100 units × 12.8 = 1,280 remain. 1,225 is the periodic weighted-average answer, which ignores when the sales happened, and 1,500 is the FIFO answer.',
      },
    },
    {
      q: {
        fa: 'کدام روش طبق IFRS مجاز **نیست**؟',
        en: 'Which method is **not** permitted under IFRS?',
      },
      options: [
        { fa: 'اولین صادره از اولین وارده (FIFO)', en: 'First-in, first-out (FIFO)' },
        { fa: 'میانگین موزون', en: 'Weighted average' },
        { fa: 'شناسایی ویژه', en: 'Specific identification' },
        { fa: 'اولین صادره از آخرین وارده (LIFO)', en: 'Last-in, first-out (LIFO)' },
      ],
      answer: 3,
      explain: {
        fa: 'IAS 2 فقط FIFO، میانگین موزون و (برای اقلام منحصربه‌فرد) شناسایی ویژه را می‌پذیرد. LIFO ممنوع است، چون موجودی را با بهاهای قدیمی و غیرواقعی نشان می‌دهد. شناسایی ویژه شاید غیرعادی به نظر برسد، اما برای اقلامی مانند خودرو کاملاً مجاز است.',
        en: 'IAS 2 accepts only FIFO, weighted average and (for unique items) specific identification. LIFO is prohibited because it can show inventory at stale, unrealistic costs. Specific identification may look unusual, but it is fully allowed for items such as cars.',
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
        fa: 'خالص ارزش فروش = 60 − 15 = 45 که از بهای تمام‌شده (50) کمتر است؛ پس کالا به 45 گزارش و 5 کاهش ارزش شناسایی می‌شود. 50 بهای تمام‌شده است که دیگر قابل بازیافت نیست، 60 مخارج فروش را نادیده گرفته و 35 مخارج فروش را به‌اشتباه از بها کم کرده است.',
        en: 'NRV = 60 − 15 = 45, which is below cost (50), so the item is carried at 45 and a write-down of 5 is recognised. 50 is cost, which is no longer recoverable; 60 ignores the costs to sell; 35 wrongly deducts the selling costs from cost.',
      },
    },
    {
      q: {
        fa: 'در پایان سال، کالایی به بهای 2,000 به‌اشتباه دو بار شمرده می‌شود و موجودی پایان دوره 2,000 بیشتر از واقع گزارش می‌شود. سود خالص امسال چه تغییری می‌کند؟',
        en: 'At year-end, goods costing 2,000 are counted twice by mistake, so ending inventory is overstated by 2,000. What happens to this year’s net income?',
      },
      options: [
        { fa: '2,000 کمتر از واقع گزارش می‌شود', en: 'It is understated by 2,000' },
        { fa: 'تغییری نمی‌کند، چون موجودی کالا فقط قلم ترازنامه است', en: 'No effect, because inventory is only a balance-sheet item' },
        { fa: '2,000 بیشتر از واقع گزارش می‌شود', en: 'It is overstated by 2,000' },
        { fa: '4,000 بیشتر از واقع گزارش می‌شود', en: 'It is overstated by 4,000' },
      ],
      answer: 2,
      explain: {
        fa: 'موجودی پایان دوره بیشتر یعنی بهای تمام‌شده 2,000 کمتر و سود 2,000 بیشتر. سال بعد همین رقم موجودی ابتدای دوره است و سود را 2,000 کمتر نشان می‌دهد. گزینه «تغییری نمی‌کند» وسوسه‌انگیز است، اما موجودی پایان دوره مستقیماً در فرمول بهای تمام‌شده است.',
        en: 'Higher ending inventory means COGS is 2,000 lower and profit 2,000 higher. Next year the same figure becomes beginning inventory and understates profit by 2,000. “No effect” is tempting, but ending inventory sits right inside the COGS formula.',
      },
    },
  ],
}
