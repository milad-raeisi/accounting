import type { Lesson } from '../../types'

const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'warehouse-erp-finance',
  number: 8,
  level: 'advanced',
  minutes: 25,
  icon: 'FileSpreadsheet',
  tone: 'primary',
  title: { fa: 'انبار در ERP و پیوند با مالی', en: 'Warehouse in the ERP and Finance' },
  summary: {
    fa: 'هر رسید، حواله، انتقال، مغایرت شمارش و کاهش ارزش در ERP خودکار به دفتر کل می‌رسد. در این درس پایانی، با مثال مسار پترولیوم، ارزش‌گذاری موجودی با قیمت میانگین متحرک و قیمت استاندارد، تفاوت قیمت، همه ثبت‌های خودکار انبار، تطبیق کاردکس با دفتر کل، کنترل‌های پایان ماه، شاخص‌های عملکرد و نقش داده‌های انبار در بازیافت هزینه و حسابرسی را یک‌جا می‌بینیم.',
    en: 'Every receipt, issue, transfer, count difference and write-down in the ERP reaches the general ledger automatically. In this closing lesson, using Masar Petroleum, we bring together inventory valuation at moving average and standard price, price differences, every automatic warehouse posting, reconciling the stock ledger to the general ledger, month-end checks, KPIs, and how warehouse data supports cost recovery and audits.',
  },
  objectives: [
    {
      fa: 'قیمت میانگین متحرک و قیمت استاندارد را مقایسه کنید و با هر کدام ارزش موجودی و حواله را حساب کنید.',
      en: 'Compare moving average and standard price, and value stock and issues under each.',
    },
    {
      fa: 'تفاوت قیمت میان سفارش خرید، رسید کالا (GRN) و فاکتور را تحلیل و ثبت کنید.',
      en: 'Analyse and record price differences between the purchase order, the GRN and the invoice.',
    },
    {
      fa: 'ثبت خودکار ERP را برای هر حرکت کالا، از رسید تا کاهش ارزش، بنویسید.',
      en: 'Write the ERP’s automatic entry for every goods movement, from receipt to write-down.',
    },
    {
      fa: 'کاردکس (دفتر معین موجودی) را با دفتر کل تطبیق دهید و کنترل‌های پایان ماه را اجرا کنید.',
      en: 'Reconcile the stock ledger (kardex) to the general ledger and run the month-end checks.',
    },
    {
      fa: 'شاخص‌های دقت، گردش و نرخ تأمین درخواست را حساب کنید و نقش داده‌های انبار را در بازیافت هزینه و حسابرسی توضیح دهید.',
      en: 'Calculate accuracy, turnover and fill-rate KPIs and explain how warehouse data supports cost recovery and audits.',
    },
  ],
  sections: [
    {
      id: 'why-integration',
      title: { fa: 'چرا انبار و مالی باید یک زبان داشته باشند؟', en: 'Why the warehouse and Finance must speak one language' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'پایان ماه است. کنترلر مالی مسار پترولیوم می‌بیند جمع حساب‌های موجودی در دفتر کل **2,496,500** است، اما کاردکس انبار در ERP جمع موجودی را **2,500,000** نشان می‌دهد. همان هفته حسابرسان انرژی البرز می‌خواهند بهای کالایی را که به چاه AR-12 منظور شده، تا رسید کالا (GRN) و حواله هر قلم دنبال کنند. به هر دو پرسش فقط وقتی می‌توان پاسخ داد که **همه حرکت‌های کالا از اسناد ERP گذشته باشند** و انبار و مالی یک عدد را ببینند.',
            en: 'It is month-end. Masar Petroleum’s financial controller sees that the inventory accounts in the general ledger total **2,496,500**, while the warehouse stock ledger in the ERP shows **2,500,000**. In the same week, Alborz Energy’s auditors want to trace the material charged to well AR-12 back to the goods received note (GRN) and the goods issue for each item. Both questions can be answered only if **every goods movement has gone through ERP documents**, so the warehouse and Finance see the same number.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'در ERP هر حرکت کالا دو سند هم‌زمان می‌سازد: **سند کالا** برای انبار و **سند حسابداری** برای مالی. سیستم حساب‌ها را با **تعیین حساب** پیدا می‌کند: **گروه ارزش‌گذاری** کالا (از داده پایه کالا) می‌گوید کدام حساب موجودی، و نوع حرکت (رسید، حواله، مغایرت…) می‌گوید طرف دیگر ثبت کدام حساب است. موضوع هزینه هم از رزرو یا سفارش خرید می‌آید. به این ترتیب **کاردکس** (دفتر معین موجودی، به تفکیک کالا و انبار) و **حساب‌های موجودی دفتر کل** (حساب‌های کنترل) باید همیشه با هم برابر باشند؛ درست مثل دفتر معین مشتریان و حساب دریافتنی در دفتر کل.',
            en: 'In the ERP every goods movement creates two documents at once: a **material document** for the warehouse and an **accounting document** for Finance. The system finds the accounts through **account determination**: the material’s **valuation class** (from the material master) says which inventory account, and the type of movement (receipt, issue, difference…) says which account takes the other side. The cost object comes from the reservation or the purchase order. So the **stock ledger** (kardex, by material and warehouse) and the **inventory accounts in the general ledger** (the control accounts) should always agree, just like the customer subsidiary ledger and accounts receivable.',
          },
        },
        {
          type: 'diagram',
          id: 'erp-modules',
          caption: {
            fa: 'ماژول انبار در مرکز ERP: تدارکات کالا را با رسید کالا (GRN) وارد می‌کند، نگهداری و پروژه‌ها آن را با حواله مصرف می‌کنند و مالی هر حرکت را خودکار ثبت می‌کند.',
            en: 'The Inventory module at the centre of the ERP: Procurement brings material in with a GRN, Maintenance and Projects consume it through goods issues, and Finance records every movement automatically.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: کاردکس، کدینگ و دفاتر قانونی', en: 'In practice: kardex, coding and legal books' },
          text: {
            fa: 'در شرکت‌های ایرانی، **کاردکس** همان کارت موجودی هر کالاست و در ERP به‌صورت دفتر معین موجودی نگهداری می‌شود. در کدینگ سه‌سطحی، «موجودی مواد و کالا» حساب کل است، هر گروه (مثلاً قطعات یدکی) حساب معین است و انبار یا کالا می‌تواند حساب تفصیلی باشد. دفاتر قانونی روزنامه و کل فقط جمع حساب‌ها را نشان می‌دهند؛ پشتوانه جزئیات آن‌ها همین کاردکس و اسناد انبار است. طبق IFRS (استاندارد IAS 2) موجودی به اقل بهای تمام‌شده و خالص ارزش فروش اندازه‌گیری می‌شود و بها با FIFO یا میانگین موزون تعیین می‌شود.',
            en: 'In Iranian companies the **kardex** is the stock card for each item; in an ERP it is kept as the stock ledger. In three-level coding, "Inventory of materials and goods" is the general account, each group (spare parts, for example) is a subsidiary account, and the warehouse or the material can be the detail account. The legal journal and ledger show only account totals; the detail behind them is this kardex and the warehouse documents. Under IFRS (IAS 2), inventory is measured at the lower of cost and net realisable value, and cost is assigned using FIFO or weighted average.',
          },
        },
      ],
    },
    {
      id: 'valuation',
      title: { fa: 'ارزش‌گذاری موجودی: قیمت میانگین متحرک یا قیمت استاندارد', en: 'Valuing inventory: moving average or standard price' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در روش **قیمت میانگین متحرک**، ERP پس از هر رسید کالا (GRN) قیمت واحد را دوباره حساب می‌کند: ارزش کل موجودی تقسیم بر مقدار کل. حواله‌ها با همان قیمت روز خارج می‌شوند و قیمت را تغییر نمی‌دهند. این روش نوعی میانگین موزون است و بیشتر شرکت‌های بهره‌بردار نفت و گاز آن را برای قطعات یدکی و مواد مصرفی به کار می‌برند.',
            en: 'Under the **moving average price** method, the ERP recalculates the unit price after every goods received note (GRN): total stock value divided by total quantity. Issues go out at the current price and do not change it. It is a form of weighted average, and most oil and gas operators use it for spare parts and consumables.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'قیمت میانگین متحرک = (ارزش موجودی + ارزش رسید) ÷ (مقدار موجودی + مقدار رسید)',
            en: 'Moving average price = (Stock value + Receipt value) ÷ (Stock quantity + Receipt quantity)',
          },
          note: { fa: 'برای شیر دروازه‌ای 300540: (32,000 + 17,500) ÷ (10 + 5) = 3,300', en: 'For gate valve 300540: (32,000 + 17,500) ÷ (10 + 5) = 3,300' },
        },
        {
          type: 'table',
          caption: { fa: 'کاردکس شیر دروازه‌ای 4 اینچ (300540) در انبار میدان', en: 'Stock ledger for the 4" gate valve (300540) at the Field Warehouse' },
          head: [
            { fa: 'رویداد', en: 'Event' },
            { fa: 'مقدار', en: 'Quantity' },
            { fa: 'نرخ', en: 'Unit price' },
            { fa: 'مبلغ', en: 'Amount' },
            { fa: 'مانده مقدار', en: 'Quantity on hand' },
            { fa: 'مانده ارزش', en: 'Value on hand' },
            { fa: 'قیمت میانگین', en: 'Average price' },
          ],
          rows: [
            [{ fa: 'مانده ابتدای ماه', en: 'Opening balance' }, blank, blank, blank, 10, 32000, 3200],
            [{ fa: 'رسید کالا GRN-26-0904', en: 'GRN-26-0904' }, 5, 3500, 17500, 15, 49500, 3300],
            [{ fa: 'حواله GI-26-0950 به دستور کار WO-45172 (چاه AR-07)', en: 'GI-26-0950 to work order WO-45172 (well AR-07)' }, 4, 3300, 13200, 11, 36300, 3300],
          ],
          numericCols: [1, 2, 3, 4, 5, 6],
        },
        {
          type: 'p',
          text: {
            fa: 'در روش **قیمت استاندارد**، برای هر کالا یک قیمت ثابت (مثلاً برای یک سال) تعیین می‌شود و موجودی همیشه با همان قیمت ارزش‌گذاری می‌شود. اگر کالا گران‌تر یا ارزان‌تر خریده شود، اختلاف به حساب **تفاوت قیمت خرید** می‌رود و قیمت کالا تغییر نمی‌کند. مثال: اگر قیمت استاندارد شیر 300540 برابر 3,200 باشد و همان 5 شیر به نرخ 3,500 رسید شوند، ERP این ثبت را می‌سازد:',
            en: 'Under the **standard price** method, each material gets a fixed price (for a year, say) and stock is always valued at that price. If the material is bought dearer or cheaper, the difference goes to a **purchase price differences** account and the material’s price does not change. Example: if the standard price of valve 300540 is 3,200 and the same 5 valves are received at 3,500, the ERP posts:',
          },
        },
        {
          type: 'journal',
          title: { fa: 'رسید کالا (GRN) با قیمت استاندارد', en: 'A GRN at standard price' },
          entries: [
            {
              lines: [
                { account: { fa: 'موجودی قطعات یدکی', en: 'Inventory: spare parts' }, debit: 16000 },
                { account: { fa: 'تفاوت قیمت خرید', en: 'Purchase price differences' }, debit: 1500 },
                { account: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing' }, credit: 17500 },
              ],
              memo: {
                fa: 'موجودی: 5 × 3,200 = 16,000؛ GR/IR با قیمت سفارش: 5 × 3,500 = 17,500؛ اختلاف 1,500.',
                en: 'Inventory: 5 × 3,200 = 16,000; GR/IR at the PO price: 5 × 3,500 = 17,500; difference 1,500.',
              },
            },
          ],
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'قیمت میانگین متحرک', en: 'Moving average price' },
            items: [
              { fa: 'ارزش موجودی همراه قیمت‌های واقعی خرید حرکت می‌کند', en: 'Stock value follows actual purchase prices' },
              { fa: 'در رسید کالا تفاوت قیمتی ثبت نمی‌شود', en: 'No price difference is posted at the GRN' },
              { fa: 'مناسب قطعات یدکی و اقلامی که نامنظم و با قیمت‌های متفاوت خریده می‌شوند', en: 'Suits spare parts and items bought irregularly at varying prices' },
              { fa: 'خطر: یک رسید با قیمت یا واحد اشتباه، قیمت همه حواله‌های بعدی را خراب می‌کند', en: 'Risk: one GRN with a wrong price or unit spoils the price of every later issue' },
            ],
          },
          right: {
            title: { fa: 'قیمت استاندارد', en: 'Standard price' },
            items: [
              { fa: 'بهای ثابت و قابل پیش‌بینی برای بودجه و برنامه‌ریزی', en: 'A stable, predictable cost for budgeting and planning' },
              { fa: 'اختلاف‌ها در حساب تفاوت قیمت آشکار می‌شوند', en: 'Variances show up in the price-difference account' },
              { fa: 'رایج در تولید و کارخانه‌ها؛ در انبارهای بهره‌برداری کمتر', en: 'Common in manufacturing; less so in operating warehouses' },
              { fa: 'باید مرتب بازبینی شود؛ IAS 2 آن را فقط وقتی می‌پذیرد که به بهای واقعی نزدیک باشد', en: 'Must be reviewed regularly; IAS 2 accepts it only when it approximates actual cost' },
            ],
          },
        },
        {
          type: 'diagram',
          id: 'inventory-fifo',
          caption: {
            fa: 'لایه‌های بهای موجودی در FIFO و میانگین موزون. قیمت میانگین متحرک همان میانگین موزونی است که پس از هر رسید کالا (GRN) به‌روز می‌شود.',
            en: 'Inventory cost layers under FIFO and weighted average. The moving average price is a weighted average that is updated after every GRN.',
          },
        },
      ],
    },
    {
      id: 'price-differences',
      title: { fa: 'تفاوت قیمت و حساب واسط GR/IR', en: 'Price differences and the GR/IR clearing account' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در **تطبیق سه‌طرفه**، سفارش خرید، رسید کالا (GRN) و فاکتور کنار هم گذاشته می‌شوند. هنگام GRN، ERP کالا را با قیمت سفارش ارزش‌گذاری می‌کند: موجودی بدهکار و حساب واسط GR/IR بستانکار. وقتی فاکتور می‌رسد، GR/IR به همان مبلغ GRN بدهکار و حساب‌های پرداختنی به مبلغ فاکتور بستانکار می‌شود. اگر قیمت فاکتور با قیمت سفارش فرق داشته باشد، اختلاف در روش میانگین متحرک به **موجودی** می‌رود (برای مقداری که هنوز در انبار است) و برای مقداری که قبلاً حواله شده، به **تفاوت قیمت خرید**؛ در روش استاندارد همه اختلاف به تفاوت قیمت می‌رود.',
            en: 'In the **three-way match**, the purchase order, the goods received note (GRN) and the invoice are compared. At the GRN, the ERP values the goods at the PO price: Dr Inventory, Cr GR/IR clearing. When the invoice arrives, GR/IR is debited with the GRN amount and accounts payable is credited with the invoice amount. If the invoice price differs from the PO price, under moving average the difference goes to **inventory** (for the quantity still in stock) and to **purchase price differences** for any quantity already issued; under standard price the whole difference goes to price differences.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'سفارش PO-26-0377: 5 شیر × 3,500 = 17,500؛ فاکتور: 5 × 3,560 = 17,800؛ اختلاف 300',
            en: 'PO-26-0377: 5 valves × 3,500 = 17,500; invoice: 5 × 3,560 = 17,800; difference 300',
          },
          head: [
            { fa: 'حالت', en: 'Case' },
            { fa: 'موجودی هنگام ثبت فاکتور', en: 'Stock when the invoice is posted' },
            { fa: 'به موجودی', en: 'To inventory' },
            { fa: 'به تفاوت قیمت خرید', en: 'To price differences' },
          ],
          rows: [
            [{ fa: 'الف) میانگین متحرک', en: 'a) Moving average' }, { fa: '11 عدد (بیش از 5 عدد فاکتورشده)', en: '11 units (more than the 5 invoiced)' }, 300, 0],
            [{ fa: 'ب) میانگین متحرک', en: 'b) Moving average' }, { fa: 'فقط 3 عدد: 3 ÷ 5 × 300', en: 'Only 3 units: 3 ÷ 5 × 300' }, 180, 120],
            [{ fa: 'ج) قیمت استاندارد', en: 'c) Standard price' }, { fa: 'مهم نیست', en: 'Irrelevant' }, 0, 300],
          ],
          numericCols: [2, 3],
        },
        {
          type: 'journal',
          title: { fa: 'ثبت فاکتور در سه حالت', en: 'Posting the invoice in the three cases' },
          entries: [
            {
              date: { fa: 'حالت الف', en: 'Case a' },
              lines: [
                { account: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing' }, debit: 17500 },
                { account: { fa: 'موجودی قطعات یدکی', en: 'Inventory: spare parts' }, debit: 300 },
                { account: { fa: 'حساب‌های پرداختنی تجاری', en: 'Accounts payable: suppliers' }, credit: 17800 },
              ],
            },
            {
              date: { fa: 'حالت ب', en: 'Case b' },
              lines: [
                { account: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing' }, debit: 17500 },
                { account: { fa: 'موجودی قطعات یدکی', en: 'Inventory: spare parts' }, debit: 180 },
                { account: { fa: 'تفاوت قیمت خرید', en: 'Purchase price differences' }, debit: 120 },
                { account: { fa: 'حساب‌های پرداختنی تجاری', en: 'Accounts payable: suppliers' }, credit: 17800 },
              ],
            },
            {
              date: { fa: 'حالت ج', en: 'Case c' },
              lines: [
                { account: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing' }, debit: 17500 },
                { account: { fa: 'تفاوت قیمت خرید', en: 'Purchase price differences' }, debit: 300 },
                { account: { fa: 'حساب‌های پرداختنی تجاری', en: 'Accounts payable: suppliers' }, credit: 17800 },
              ],
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'مانده GR/IR چه می‌گوید؟', en: 'What the GR/IR balance tells you' },
          text: {
            fa: 'مانده بستانکار GR/IR یعنی کالایی که GRN خورده اما هنوز فاکتورش ثبت نشده؛ مانده بدهکار یعنی فاکتوری که ثبت شده اما کالایش هنوز نرسیده است. در پایان ماه، GRNهای فاکتورنشده در واقع بدهی تحقق‌یافته‌اند و در گزارش‌های تعهدی دیده می‌شوند. اقلام قدیمی (مثلاً بیش از 90 روز) باید بررسی شوند: فاکتور گم‌شده، اختلاف مقدار، قیمت اشتباه سفارش یا GRN تکراری. برای کالای مصرف مستقیم (غیرانباری)، همین GRN است که تعهد سفارش را به **هزینه واقعی** روی AFE یا WBS تبدیل می‌کند: موضوع هزینه بدهکار و GR/IR بستانکار.',
            en: 'A credit balance on GR/IR means goods that have a GRN but no invoice yet; a debit balance means an invoice posted for goods not yet received. At month-end, uninvoiced GRNs are in effect accrued liabilities and appear in accrual reporting. Old items (over 90 days, say) must be investigated: a missing invoice, a quantity mismatch, a wrong PO price or a duplicate GRN. For direct-charge (non-stock) material, it is the GRN that turns the PO commitment into an **actual cost** on the AFE or WBS: Dr the cost object, Cr GR/IR.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: تلورانس قیمت', en: 'In practice: price tolerances' },
          text: {
            fa: 'بیشتر شرکت‌ها برای اختلاف قیمت فاکتور با سفارش **حد تحمل** تعریف می‌کنند (مثلاً اختلاف بیش از 2% یا بیش از یک مبلغ مشخص). فاکتور بالاتر از این حد خودکار برای پرداخت مسدود می‌شود تا کارشناس خرید علت را روشن کند. اعداد این حدها را سیاست شرکت تعیین می‌کند؛ عددهای این مثال فرضی‌اند.',
            en: 'Most companies set **tolerances** for invoice-versus-PO price differences (for example more than 2%, or more than a set amount). An invoice beyond the tolerance is automatically blocked for payment until the buyer explains the difference. Company policy sets the limits; the figures here are illustrative.',
          },
        },
      ],
    },
    {
      id: 'erp-postings',
      title: { fa: 'همه ثبت‌های خودکار انبار در ERP، در یک جدول', en: 'Every automatic warehouse posting in the ERP, in one table' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'قدرت و خطر ERP در یک جمله است: انباردار یک حرکت کالا ثبت می‌کند و مالی بی‌درنگ سند حسابداری دارد. پس کنترل موجودی و حسابداری باید دقیقاً بدانند هر حرکت چه ثبتی می‌سازد. جدول زیر همه حرکت‌هایی را که در این دوره دیدیم یک‌جا نشان می‌دهد.',
            en: 'The power and the danger of an ERP fit in one sentence: the storekeeper posts a goods movement and Finance instantly has an accounting entry. So inventory control and accounting must know exactly what each movement posts. The table below brings together every movement we have met in this course.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'نقشه ثبت‌های خودکار انبار در مسار پترولیوم', en: 'Map of automatic warehouse postings at Masar Petroleum' },
          head: [
            { fa: 'رویداد', en: 'Event' },
            { fa: 'سند ERP', en: 'ERP document' },
            { fa: 'بدهکار', en: 'Debit' },
            { fa: 'بستانکار', en: 'Credit' },
            { fa: 'موضوع هزینه یا برچسب', en: 'Cost object or tag' },
          ],
          rows: [
            [
              { fa: 'رسید کالای انباری در برابر سفارش', en: 'Receipt of stock material against a PO' },
              { fa: 'رسید کالا (GRN)', en: 'GRN' },
              { fa: 'موجودی (طبق گروه ارزش‌گذاری)', en: 'Inventory (by valuation class)' },
              { fa: 'GR/IR', en: 'GR/IR clearing' },
              { fa: 'ندارد؛ کالا دارایی است', en: 'None; the material is an asset' },
            ],
            [
              { fa: 'رسید کالای مصرف مستقیم', en: 'Receipt of direct-charge material' },
              { fa: 'رسید کالا (GRN)', en: 'GRN' },
              { fa: 'موضوع هزینه (هزینه یا دارایی در جریان ساخت)', en: 'The cost object (expense or assets under construction)' },
              { fa: 'GR/IR', en: 'GR/IR clearing' },
              { fa: 'دستور کار، مرکز هزینه یا WBS؛ دسته بازیافت', en: 'Work order, cost centre or WBS; recovery category' },
            ],
            [
              { fa: 'فاکتور تأمین‌کننده', en: 'Supplier invoice' },
              { fa: 'ثبت فاکتور (تطبیق سه‌طرفه)', en: 'Invoice posting (three-way match)' },
              { fa: 'GR/IR (و موجودی یا تفاوت قیمت برای اختلاف)', en: 'GR/IR (plus inventory or price differences for any variance)' },
              { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
              { fa: 'ندارد', en: 'None' },
            ],
            [
              { fa: 'حواله به مرکز هزینه یا دستور کار', en: 'Issue to a cost centre or work order' },
              { fa: 'حواله انبار', en: 'Goods issue' },
              { fa: 'هزینه (تعمیر و نگهداری، مواد شیمیایی، اقلام مصرفی)', en: 'Expense (repairs, chemicals, consumables)' },
              { fa: 'موجودی', en: 'Inventory' },
              { fa: 'مرکز هزینه یا دستور کار، برچسب بازیافت، نشانگر مشارکت', en: 'Cost centre or work order, recovery tag, JV indicator' },
            ],
            [
              { fa: 'حواله به پروژه ذیل AFE', en: 'Issue to a project under an AFE' },
              { fa: 'حواله انبار', en: 'Goods issue' },
              { fa: 'دارایی در جریان ساخت: چاه‌ها', en: 'Assets under construction: wells' },
              { fa: 'موجودی', en: 'Inventory' },
              { fa: 'WBS و AFE؛ سرمایه‌ای توسعه', en: 'WBS and AFE; development capex' },
            ],
            [
              { fa: 'برگشت به انبار', en: 'Return to stock' },
              { fa: 'سند برگشت با ارجاع به حواله', en: 'Return document referring to the issue' },
              { fa: 'موجودی', en: 'Inventory' },
              { fa: 'همان موضوع هزینه حواله اصلی', en: 'The same cost object as the original issue' },
              { fa: 'همان موضوع هزینه', en: 'The same cost object' },
            ],
            [
              { fa: 'انتقال داخل یک حوزه ارزش‌گذاری', en: 'Transfer inside one valuation area' },
              { fa: 'سند انتقال', en: 'Transfer posting' },
              { fa: 'بدون ثبت', en: 'No entry' },
              { fa: 'بدون ثبت', en: 'No entry' },
              { fa: 'فقط محل و مقدار', en: 'Location and quantity only' },
            ],
            [
              { fa: 'انتقال دومرحله‌ای WH-10 به WH-20: مرحله اول', en: 'Two-step transfer WH-10 to WH-20: step 1' },
              { fa: 'خروج انتقال', en: 'Transfer issue' },
              { fa: 'موجودی در راه', en: 'Stock in transit' },
              { fa: 'موجودی WH-10', en: 'Inventory WH-10' },
              { fa: 'ندارد', en: 'None' },
            ],
            [
              { fa: 'انتقال دومرحله‌ای: مرحله دوم', en: 'Two-step transfer: step 2' },
              { fa: 'رسید انتقال', en: 'Transfer receipt' },
              { fa: 'موجودی WH-20', en: 'Inventory WH-20' },
              { fa: 'موجودی در راه', en: 'Stock in transit' },
              { fa: 'ندارد', en: 'None' },
            ],
            [
              { fa: 'کسری شمارش', en: 'Count shortage' },
              { fa: 'ثبت مغایرت شمارش', en: 'Count-difference posting' },
              { fa: 'مغایرت موجودی انبار', en: 'Inventory differences' },
              { fa: 'موجودی', en: 'Inventory' },
              { fa: 'مرکز هزینه انبار CC-ARY-WHS؛ بازیافت بسته به علت', en: 'Warehouse cost centre CC-ARY-WHS; recovery depends on the cause' },
            ],
            [
              { fa: 'اضافی شمارش', en: 'Count surplus' },
              { fa: 'ثبت مغایرت شمارش', en: 'Count-difference posting' },
              { fa: 'موجودی', en: 'Inventory' },
              { fa: 'مغایرت موجودی انبار', en: 'Inventory differences' },
              { fa: 'مرکز هزینه انبار CC-ARY-WHS', en: 'Warehouse cost centre CC-ARY-WHS' },
            ],
            [
              { fa: 'کاهش ارزش به خالص ارزش فروش', en: 'Write-down to net realisable value' },
              { fa: 'سند مالی پس از بررسی اقلام کم‌گردش (حرکت کالا نیست)', en: 'Finance entry after the slow-moving review (not a goods movement)' },
              { fa: 'هزینه کاهش ارزش موجودی', en: 'Inventory write-down expense' },
              { fa: 'ذخیره کاهش ارزش موجودی', en: 'Allowance for inventory write-down' },
              { fa: 'معمولاً تا زمان فروش یا اسقاط قابل بازیافت نیست؛ طبق قرارداد', en: 'Usually not recoverable until sale or scrapping; per the contract' },
            ],
            [
              { fa: 'اسقاط یا کنارگذاری', en: 'Scrapping or disposal' },
              { fa: 'سند اسقاط با تأیید', en: 'Approved scrap document' },
              { fa: 'ذخیره کاهش ارزش (تا مبلغ ذخیره) و هزینه کاهش ارزش (باقی‌مانده)', en: 'Allowance (up to the amount provided) and write-down expense (the rest)' },
              { fa: 'موجودی', en: 'Inventory' },
              { fa: 'تأیید مدیریت؛ در صورت لزوم رضایت شرکا', en: 'Management approval; partner consent where required' },
            ],
          ],
        },
        {
          type: 'p',
          text: {
            fa: '**تعیین حساب** در ERP یک جدول تنظیمات است: برای هر گروه ارزش‌گذاری (مثلاً قطعات یدکی ← 1310) و هر نوع ثبت (موجودی، طرف مقابل حواله، GR/IR، تفاوت قیمت، مغایرت انبار) یک حساب کل تعیین می‌شود. این جدول را واحد مالی با کنترل موجودی یک بار تنظیم می‌کند و هر تغییر آن باید از **کنترل تغییرات** بگذرد، چون یک نگاشت اشتباه می‌تواند هزاران سند را به حساب غلط بفرستد. به همین دلیل هم **گروه ارزش‌گذاری** در داده پایه کالا مهم است: اگر قطعه یدکی حیاتی به اشتباه «اقلام مصرفی» تعریف شود، به حساب غلط می‌رود و در گزارش‌ها گم می‌شود.',
            en: '**Account determination** in the ERP is a configuration table: for each valuation class (spare parts → 1430, for example) and each kind of posting (inventory, offset for an issue, GR/IR, price difference, inventory difference) a general-ledger account is set. Finance sets this table up once with inventory control, and every change must go through **change control**, because one wrong mapping can send thousands of documents to the wrong account. It is also why the **valuation class** in the material master matters: if a critical spare is wrongly set up as a "consumable", it posts to the wrong account and gets lost in the reports.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'نقش‌ها در پیوند انبار و مالی', en: 'Roles linking the warehouse and Finance' },
          head: [
            { fa: 'نقش', en: 'Role' },
            { fa: 'مسئولیت', en: 'Responsibility' },
          ],
          rows: [
            [{ fa: 'کنترلر مالی', en: 'Financial controller' }, { fa: 'صاحب تعیین حساب، بستن دوره و امضای تطبیق', en: 'Owns account determination, period close and the reconciliation sign-off' }],
            [{ fa: 'کنترل موجودی', en: 'Inventory controller' }, { fa: 'بررسی حرکت‌ها، مغایرت‌ها، اقلام کم‌گردش و موجودی در راه', en: 'Reviews movements, differences, slow-moving items and stock in transit' }],
            [{ fa: 'حسابدار بهای تمام‌شده', en: 'Cost accountant' }, { fa: 'تسویه دستور کارها و پروژه‌ها، گزارش بازیافت هزینه و صورت‌حساب شرکا', en: 'Settles work orders and projects; cost-recovery and partner-billing reports' }],
            [{ fa: 'کاربر کلیدی ERP', en: 'ERP key user' }, { fa: 'اجرای تغییرات تنظیمات فقط با درخواست تأییدشده', en: 'Makes configuration changes only from an approved request' }],
            [{ fa: 'حسابرسی داخلی', en: 'Internal audit' }, { fa: 'بررسی تفکیک وظایف، دسترسی‌ها و نمونه‌ای از زنجیره اسناد', en: 'Tests segregation of duties, access rights and a sample of document chains' }],
          ],
        },
        {
          type: 'journal',
          title: {
            fa: 'یک ماه از زندگی آب‌بند مکانیکی 300520 (قیمت میانگین 1,200): ثبت‌های خودکار به ترتیب',
            en: 'One month in the life of mechanical seal 300520 (average price 1,200): the automatic entries in order',
          },
          entries: [
            {
              date: { fa: 'رسید کالا GRN-26-0921: 6 عدد', en: 'GRN-26-0921: 6 units' },
              lines: [
                { account: { fa: 'موجودی قطعات یدکی', en: 'Inventory: spare parts' }, debit: 7200 },
                { account: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing' }, credit: 7200 },
              ],
            },
            {
              date: { fa: 'حواله GI-26-0960: 4 عدد به WO-45133', en: 'GI-26-0960: 4 units to WO-45133' },
              lines: [
                { account: { fa: 'هزینه تعمیر و نگهداری (WO-45133، مرکز هزینه CC-ARY-PRD)', en: 'Repairs and maintenance expense (WO-45133, cost centre CC-ARY-PRD)' }, debit: 4800 },
                { account: { fa: 'موجودی قطعات یدکی', en: 'Inventory: spare parts' }, credit: 4800 },
              ],
            },
            {
              date: { fa: 'برگشت RT-26-0041: 1 عدد مصرف‌نشده', en: 'RT-26-0041: 1 unused unit returned' },
              lines: [
                { account: { fa: 'موجودی قطعات یدکی', en: 'Inventory: spare parts' }, debit: 1200 },
                { account: { fa: 'هزینه تعمیر و نگهداری (WO-45133، مرکز هزینه CC-ARY-PRD)', en: 'Repairs and maintenance expense (WO-45133, cost centre CC-ARY-PRD)' }, credit: 1200 },
              ],
            },
            {
              date: { fa: 'فاکتور GRN-26-0921 با همان قیمت', en: 'Invoice for GRN-26-0921 at the same price' },
              lines: [
                { account: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing' }, debit: 7200 },
                { account: { fa: 'حساب‌های پرداختنی تجاری', en: 'Accounts payable: suppliers' }, credit: 7200 },
              ],
              memo: {
                fa: 'نتیجه: هزینه خالص دستور کار 3,600 (3 آب‌بند)، موجودی 3 عدد بیشتر شده (3,600) و مانده GR/IR صفر است.',
                en: 'Result: net work-order cost 3,600 (3 seals), stock up by 3 units (3,600), and the GR/IR balance is zero.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'reconciliation',
      title: { fa: 'تطبیق کاردکس با دفتر کل و کنترل‌های پایان ماه', en: 'Reconciling the stock ledger to the general ledger, and month-end checks' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**کاردکس** دفتر معین موجودی است: مقدار و ارزش هر کالا در هر انبار. **حساب‌های موجودی دفتر کل** حساب‌های کنترل آن هستند. چون هر حرکت کالا هر دو را با هم ثبت می‌کند، این دو باید هر روز و **به تفکیک هر حساب** برابر باشند. اختلاف فقط وقتی پیدا می‌شود که کسی یکپارچگی را دور بزند (مثلاً سند دستی روی حساب موجودی) یا تنظیمات تعیین حساب وسط دوره تغییر کند. ذخیره کاهش ارزش (1490) هم یک **قلم تطبیقی شناخته‌شده** است: در کاردکس معادلی ندارد و جداگانه بررسی می‌شود.',
            en: 'The **stock ledger** (kardex) is the inventory subsidiary ledger: the quantity and value of each material in each warehouse. The **inventory accounts in the general ledger** are its control accounts. Because every goods movement posts to both at once, the two should agree every day and **account by account**. A difference appears only when someone bypasses the integration (a manual journal on an inventory account, for example) or the account determination is changed mid-period. The allowance for write-down (1490) is a **known reconciling item**: it has no counterpart in the stock ledger and is reviewed separately.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'تطبیق پایان ماه مسار پترولیوم (پیش از اصلاح)', en: 'Masar Petroleum month-end reconciliation (before corrections)' },
          head: [
            { fa: 'حساب', en: 'Account' },
            { fa: 'کاردکس', en: 'Stock ledger' },
            { fa: 'دفتر کل', en: 'General ledger' },
            { fa: 'اختلاف', en: 'Difference' },
          ],
          rows: [
            [{ fa: '1320 موجودی لوله‌های جداری و مغزی (OCTG)', en: '1320 Inventory: OCTG' }, 1248000, 1248000, { fa: 'ندارد', en: 'None' }],
            [{ fa: '1330 موجودی مواد شیمیایی', en: '1330 Inventory: chemicals' }, 182400, 184900, { fa: '2,500 (دفتر کل بیشتر)', en: '2,500 (GL higher)' }],
            [{ fa: '1310 موجودی قطعات یدکی', en: '1310 Inventory: spare parts' }, 896500, 890500, { fa: '6,000 (دفتر کل کمتر)', en: '6,000 (GL lower)' }],
            [{ fa: '1340 موجودی اقلام مصرفی عمومی', en: '1340 Inventory: general consumables' }, 63100, 63100, { fa: 'ندارد', en: 'None' }],
            [{ fa: '1350 موجودی در راه بین انبارها', en: '1350 Stock in transit' }, 110000, 110000, { fa: 'ندارد', en: 'None' }],
            [{ fa: 'جمع', en: 'Total' }, 2500000, 2496500, { fa: '3,500 (دفتر کل کمتر، خالص)', en: '3,500 (GL lower, net)' }],
          ],
          numericCols: [1, 2],
        },
        {
          type: 'p',
          text: {
            fa: 'جمع‌ها فقط 3,500 اختلاف دارند، اما بررسی حساب به حساب **دو خطا** را نشان می‌دهد که بخشی از یکدیگر را پوشانده‌اند. یکم، در مواد شیمیایی، سند دستی MJ-26-118 کرایه حمل یک محموله بازدارنده خوردگی (2,500) را مستقیم به حساب موجودی برده و کاردکس این مبلغ را ندیده است. دوم، در قطعات یدکی، سند دستی MJ-26-131 پنج آب‌بند آسیب‌دیده (5 × 1,200 = 6,000) را مستقیم از حساب موجودی خارج کرده، اما هیچ سند اسقاطی در ERP ثبت نشده و کاردکس هنوز آن‌ها را موجود نشان می‌دهد. راه اصلاح، دور زدن دوباره ERP نیست: سند دستی برگشت می‌خورد و همان رویداد با سند درست ERP ثبت می‌شود تا کاردکس و دفتر کل با هم حرکت کنند.',
            en: 'The totals differ by only 3,500, but checking account by account reveals **two errors** that partly hide each other. First, in chemicals, manual journal MJ-26-118 posted the freight on a corrosion-inhibitor shipment (2,500) straight to the inventory account, and the stock ledger never saw it. Second, in spare parts, manual journal MJ-26-131 took five damaged seals (5 × 1,200 = 6,000) straight out of the inventory account, but no scrap document was posted in the ERP and the stock ledger still shows them on hand. The fix is not to bypass the ERP again: the manual journal is reversed and the same event is posted with the proper ERP document, so the stock ledger and the general ledger move together.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های اصلاحی', en: 'Correcting entries' },
          entries: [
            {
              date: { fa: 'برگشت سند دستی MJ-26-118', en: 'Reverse manual journal MJ-26-118' },
              lines: [
                { account: { fa: 'حساب‌های پرداختنی تجاری', en: 'Accounts payable: suppliers' }, debit: 2500 },
                { account: { fa: 'موجودی مواد شیمیایی', en: 'Inventory: chemicals' }, credit: 2500 },
              ],
            },
            {
              date: { fa: 'ثبت کرایه در ERP روی همان GRN (هزینه حمل فاکتور)', en: 'Freight posted in the ERP against the same GRN (invoice delivery cost)' },
              lines: [
                { account: { fa: 'موجودی مواد شیمیایی', en: 'Inventory: chemicals' }, debit: 2500 },
                { account: { fa: 'حساب‌های پرداختنی تجاری', en: 'Accounts payable: suppliers' }, credit: 2500 },
              ],
              memo: {
                fa: 'این بار کاردکس هم 2,500 بالا می‌رود و قیمت میانگین بازدارنده به‌روز می‌شود؛ طبق IAS 2 کرایه حمل خرید جزو بهای موجودی است.',
                en: 'This time the stock ledger also rises by 2,500 and the inhibitor’s average price is updated; under IAS 2, inbound freight is part of the cost of inventory.',
              },
            },
            {
              date: { fa: 'برگشت سند دستی MJ-26-131', en: 'Reverse manual journal MJ-26-131' },
              lines: [
                { account: { fa: 'موجودی قطعات یدکی', en: 'Inventory: spare parts' }, debit: 6000 },
                { account: { fa: 'هزینه کاهش ارزش موجودی', en: 'Inventory write-down expense' }, credit: 6000 },
              ],
            },
            {
              date: { fa: 'سند اسقاط SC-26-0007 در ERP پس از تأیید', en: 'Scrap document SC-26-0007 in the ERP after approval' },
              lines: [
                { account: { fa: 'هزینه کاهش ارزش موجودی (اسقاط)', en: 'Inventory write-down expense (scrapping)' }, debit: 6000 },
                { account: { fa: 'موجودی قطعات یدکی', en: 'Inventory: spare parts' }, credit: 6000 },
              ],
              memo: {
                fa: 'پس از این چهار ثبت، کاردکس و دفتر کل در هر حساب برابرند: مواد شیمیایی 184,900، قطعات یدکی 890,500 و جمع 2,496,500.',
                en: 'After these four entries the stock ledger and the general ledger agree in every account: chemicals 184,900, spare parts 890,500, total 2,496,500.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'حساب‌های موجودی را «فقط ثبت خودکار» کنید', en: 'Make inventory accounts "automatic postings only"' },
          text: {
            fa: 'در تنظیمات دفتر کل، حساب‌های 1320 تا 1350 باید فقط از حرکت‌های کالا ثبت بگیرند و سند دستی روی آن‌ها پذیرفته نشود. تنها ثبت دستی مجاز در کنار موجودی، ذخیره کاهش ارزش (1490) است، آن هم با تأیید و مستندات بررسی اقلام کم‌گردش. تطبیق را **حساب به حساب** انجام دهید، نه فقط در جمع؛ همان‌طور که دیدیم، جمع‌ها می‌توانند خطاها را پنهان کنند.',
            en: 'In the general-ledger settings, accounts 1320 to 1350 should accept postings only from goods movements, and manual journals on them should be blocked. The only manual entry allowed next to inventory is the allowance for write-down (1490), and only with approval and the slow-moving review behind it. Reconcile **account by account**, not just in total; as we saw, totals can hide errors.',
          },
        },
        { type: 'h', text: { fa: 'فهرست کنترل‌های پایان ماه', en: 'The month-end checklist' } },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'برش زمانی', en: 'Cut-off' },
              text: {
                fa: 'همه GRNها، حواله‌ها، انتقال‌ها و برگشت‌های ماه تا ساعت توافق‌شده ثبت می‌شوند و اسناد کاغذیِ ثبت‌نشده در انبار میدان پیگیری می‌شوند.',
                en: 'Every GRN, issue, transfer and return of the month is posted by the agreed hour, and any paper documents still unposted at the Field Warehouse are chased.',
              },
            },
            {
              title: { fa: 'موجودی منفی و فهرست‌های برداشت باز', en: 'Negative stock and open pick lists' },
              text: {
                fa: 'اگر سیستم موجودی منفی را مجاز کرده باشد، هر مورد پیش از بستن دوره روشن می‌شود؛ فهرست‌های برداشتی که حواله‌شان ثبت نشده بررسی می‌شوند.',
                en: 'If the system allows negative stock, every case is cleared before closing; pick lists whose goods issue was never posted are reviewed.',
              },
            },
            {
              title: { fa: 'موجودی در راه', en: 'Stock in transit' },
              text: {
                fa: 'انتقال‌هایی که بیش از چند روز در راه مانده‌اند بررسی می‌شوند: یا رسید انتقال جا افتاده، یا کسری و آسیبی در کار است.',
                en: 'Transfers in transit for more than a few days are investigated: either a transfer receipt is missing or there is a shortage or damage.',
              },
            },
            {
              title: { fa: 'بررسی GR/IR', en: 'GR/IR review' },
              text: {
                fa: 'اقلام قدیمی GR/IR پیگیری می‌شوند و GRNهای فاکتورنشده برای گزارش بدهی‌های تحقق‌یافته آماده می‌شوند.',
                en: 'Old GR/IR items are followed up, and uninvoiced GRNs are prepared for accrual reporting.',
              },
            },
            {
              title: { fa: 'تفاوت قیمت و جهش قیمت میانگین', en: 'Price differences and average-price jumps' },
              text: {
                fa: 'مبالغ بزرگ حساب تفاوت قیمت خرید و جهش‌های ناگهانی قیمت میانگین (مثلاً به دلیل خطای واحد سنجش در یک GRN) بررسی می‌شوند.',
                en: 'Large purchase price differences and sudden jumps in average prices (from a unit-of-measure error on a GRN, for example) are investigated.',
              },
            },
            {
              title: { fa: 'مغایرت‌ها و ذخیره کاهش ارزش', en: 'Differences and the allowance' },
              text: {
                fa: 'مغایرت‌های شمارش ماه تأیید و ثبت می‌شوند و ذخیره کاهش ارزش بر اساس بررسی اقلام کم‌گردش و منسوخ به‌روز می‌شود.',
                en: 'The month’s count differences are approved and posted, and the write-down allowance is updated from the slow-moving and obsolete review.',
              },
            },
            {
              title: { fa: 'تسویه دستور کارها و پروژه‌ها', en: 'Settle work orders and projects' },
              text: {
                fa: 'دستور کارها به مراکز هزینه و پروژه‌ها به دارایی در جریان ساخت تسویه می‌شوند تا هزینه‌ها در موضوع نهایی خود بنشینند.',
                en: 'Work orders are settled to cost centres and projects to assets under construction, so costs land on their final objects.',
              },
            },
            {
              title: { fa: 'بستن دوره انبار', en: 'Close the inventory period' },
              text: {
                fa: 'پس از بستن دوره، هیچ حرکتی با تاریخ ماه گذشته ثبت نمی‌شود و اعداد ثابت می‌مانند.',
                en: 'Once the period is closed, no movement can be posted with last month’s date, and the figures stay fixed.',
              },
            },
            {
              title: { fa: 'تطبیق، امضا و گزارش بازیافت هزینه', en: 'Reconcile, sign off and report cost recovery' },
              text: {
                fa: 'کاردکس با دفتر کل حساب به حساب تطبیق و توسط کنترل موجودی و کنترلر مالی امضا می‌شود؛ گزارش بازیافت هزینه و صورت‌حساب شرکا از همین داده‌های بسته‌شده تهیه می‌شود.',
                en: 'The stock ledger is reconciled to the general ledger account by account and signed off by the inventory controller and the financial controller; the cost-recovery report and partner billing are produced from these closed figures.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'kpis-audit',
      title: { fa: 'شاخص‌های عملکرد، گزارش‌ها، بازیافت هزینه و حسابرسی', en: 'KPIs, reports, cost recovery and audits' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'مدیر انبار با چند شاخص ساده می‌فهمد انبار چقدر سالم است. هر شاخص باید **تعریف مکتوب** داشته باشد (چه چیزی شمرده می‌شود، در چه دوره‌ای و با چه حد مجازی) تا ماه به ماه قابل مقایسه باشد. اعداد جدول زیر مربوط به سال مالی گذشته کل انبارهای مسار پترولیوم است.',
            en: 'A warehouse manager can tell how healthy the warehouse is from a few simple KPIs. Each KPI needs a **written definition** (what is counted, over what period, with what tolerance) so it can be compared month to month. The figures below are for all Masar Petroleum warehouses in the last financial year.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'شاخص‌های کلیدی انبار. میانگین موجودی: (2,300,000 ابتدای سال + 2,500,000 پایان سال) ÷ 2 = 2,400,000',
            en: 'Key warehouse KPIs. Average inventory: (2,300,000 opening + 2,500,000 closing) ÷ 2 = 2,400,000',
          },
          head: [
            { fa: 'شاخص', en: 'KPI' },
            { fa: 'فرمول', en: 'Formula' },
            { fa: 'محاسبه مسار پترولیوم', en: 'Masar Petroleum calculation' },
            { fa: 'نتیجه', en: 'Result' },
          ],
          rows: [
            [
              { fa: 'دقت سوابق موجودی', en: 'Inventory record accuracy' },
              { fa: 'اقلام شمارش‌شده در حد مجاز ÷ کل اقلام شمارش‌شده', en: 'Items counted within tolerance ÷ items counted' },
              { fa: '188 ÷ 200', en: '188 ÷ 200' },
              { fa: '94%', en: '94%' },
            ],
            [
              { fa: 'گردش موجودی', en: 'Inventory turnover' },
              { fa: 'بهای حواله‌های سال ÷ میانگین موجودی', en: 'Cost of the year’s issues ÷ average inventory' },
              { fa: '7,200,000 ÷ 2,400,000', en: '7,200,000 ÷ 2,400,000' },
              { fa: '3.0 بار', en: '3.0 times' },
            ],
            [
              { fa: 'روزهای نگهداری موجودی', en: 'Days of inventory' },
              { fa: '365 ÷ گردش موجودی', en: '365 ÷ turnover' },
              { fa: '365 ÷ 3.0', en: '365 ÷ 3.0' },
              { fa: 'حدود 122 روز', en: 'About 122 days' },
            ],
            [
              { fa: 'نرخ تأمین درخواست', en: 'Fill rate' },
              { fa: 'سطرهایی که در اولین درخواست کامل تحویل شدند ÷ کل سطرهای درخواست', en: 'Lines issued in full on first request ÷ lines requested' },
              { fa: '1,150 ÷ 1,250', en: '1,150 ÷ 1,250' },
              { fa: '92%', en: '92%' },
            ],
            [
              { fa: 'کمبود قطعات یدکی حیاتی', en: 'Critical-spare stock-outs' },
              { fa: 'دفعاتی که قطعه حیاتی لازم بود و موجود نبود', en: 'Times a critical spare was needed but not in stock' },
              { fa: 'شمارش رویدادها', en: 'Count of events' },
              { fa: '2 بار (هدف: صفر)', en: '2 (target: zero)' },
            ],
            [
              { fa: 'سهم اقلام کم‌گردش', en: 'Slow-moving share' },
              { fa: 'ارزش اقلام بدون حرکت در 24 ماه ÷ کل موجودی', en: 'Value of items with no movement in 24 months ÷ total inventory' },
              { fa: '300,000 ÷ 2,500,000', en: '300,000 ÷ 2,500,000' },
              { fa: '12%', en: '12%' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: شاخص را با زمینه‌اش بخوانید', en: 'In practice: read each KPI in context' },
          text: {
            fa: 'گردش قطعات یدکی ذاتاً کم است و قطعات بیمه‌ای عمداً نگهداری می‌شوند. پس شاخص‌ها را به تفکیک گروه کالا ببینید: مواد شیمیایی باید گردش بالا داشته باشند و قطعات حیاتی گردش کم اما کمبود صفر. هدفی که فقط گردش را بالا ببرد، ممکن است با حذف قطعات حیاتی، تولید میدان را به خطر بیندازد.',
            en: 'Spare parts turn over slowly by nature, and insurance spares are held on purpose. So read KPIs by material group: chemicals should turn over fast, critical spares slowly but with zero stock-outs. A target that only pushes turnover up can endanger the field’s production by cutting critical spares.',
          },
        },
        {
          type: 'list',
          items: [
            { fa: '**موجودی** به تفکیک انبار و وضعیت (آزاد، بازرسی کیفی، مسدود، در راه)', en: '**Stock overview** by warehouse and status (unrestricted, quality inspection, blocked, in transit)' },
            { fa: '**ارزش موجودی به تفکیک گروه ارزش‌گذاری**؛ پایه تطبیق با دفتر کل', en: '**Stock value by valuation class**; the basis of the reconciliation to the general ledger' },
            { fa: '**فهرست حرکت‌های کالا** به تفکیک سند، کاربر و موضوع هزینه', en: '**Material movement list** by document, user and cost object' },
            { fa: '**سن موجودی و اقلام کم‌گردش و منسوخ**', en: '**Stock ageing and slow-moving and obsolete items**' },
            { fa: '**رزروها و فهرست‌های برداشت باز**', en: '**Open reservations and pick lists**' },
            { fa: '**اقلام باز GR/IR** و GRNهای فاکتورنشده', en: '**Open GR/IR items** and uninvoiced GRNs' },
            { fa: '**گزارش کالای منظورشده به عملیات** به تفکیک موضوع هزینه، دسته بازیافت و شریک', en: '**Material charged to operations** by cost object, recovery category and partner' },
          ],
        },
        { type: 'h', text: { fa: 'بازیافت هزینه و حسابرسی', en: 'Cost recovery and audits' } },
        {
          type: 'p',
          text: {
            fa: 'هر مبلغی که در ادعای بازیافت هزینه یا صورت‌حساب شرکا می‌آید، باید یک **زنجیره اسناد** کامل پشت سر خود داشته باشد: درخواست خرید، سفارش خرید، رسید کالا (GRN)، فاکتور، حواله انبار، موضوع هزینه (چاه، AFE یا مرکز هزینه) و دسته بازیافت هزینه. شرکا معمولاً طبق موافقت‌نامه عملیات مشترک حق حسابرسی دارند و طرف دولتی قرارداد (شرکت ملی نفت یا حسابرسان منتخب آن) هم هزینه‌های ادعاشده را بررسی می‌کند. حسابرس معمولاً از یک سطر هزینه روی AFE شروع می‌کند، به عقب تا حواله، GRN، سفارش و فاکتور می‌رود و به جلو تا گزارش تکمیل چاه (مثلاً فهرست شاخه‌های رانده‌شده). هر حلقه‌ای که گم شود، ممکن است آن هزینه پذیرفته نشود.',
            en: 'Every amount in a cost-recovery claim or partner bill needs a complete **document chain** behind it: purchase requisition → purchase order → goods received note (GRN) → invoice → goods issue → cost object (well, AFE or cost centre) → cost-recovery category. Partners usually have audit rights under the joint operating agreement, and the state side of the contract (the national oil company or its appointed auditors) also reviews the costs claimed. An auditor typically starts from a cost line on an AFE, traces it back to the goods issue, GRN, purchase order and invoice, and forward to the well completion report (the tally of joints run, for example). Any missing link can get that cost disallowed.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'قیمت‌گذاری کالای منتقل‌شده بین مشارکت و پروژه‌های دیگر بر اساس وضعیت (درصدها فرضی‌اند)', en: 'Pricing material moved between the joint venture and other projects by condition (illustrative percentages)' },
          head: [
            { fa: 'وضعیت کالا', en: 'Condition' },
            { fa: 'توضیح', en: 'Description' },
            { fa: 'قیمت‌گذاری (درصد فرضی از قیمت کالای نو)', en: 'Pricing (illustrative % of new price)' },
          ],
          rows: [
            [{ fa: 'نو', en: 'New' }, { fa: 'استفاده‌نشده و با مدارک کامل', en: 'Unused, with full documents' }, { fa: '100%', en: '100%' }],
            [{ fa: 'کارکرده قابل استفاده', en: 'Used, serviceable' }, { fa: 'بدون تعمیر دوباره قابل استفاده است', en: 'Reusable without repair' }, { fa: '75%', en: '75%' }],
            [{ fa: 'نیازمند تعمیر', en: 'Needs repair' }, { fa: 'پس از تعمیر یا بازسازی قابل استفاده است', en: 'Usable after repair or reconditioning' }, { fa: '50%', en: '50%' }],
            [{ fa: 'اسقاط', en: 'Scrap' }, { fa: 'فقط ارزش ضایعات دارد', en: 'Worth only its scrap value' }, { fa: 'ارزش ضایعات', en: 'Scrap value' }],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'نقش انبار در دفاع از هزینه‌ها', en: 'The warehouse’s part in defending costs' },
          text: {
            fa: 'درصدهای جدول فرضی‌اند؛ رویه حسابداری هر قرارداد مشارکت یا قرارداد نفتی، وضعیت‌ها و قیمت‌گذاری را خودش تعیین می‌کند. سهم انبار این است که **وضعیت کالا در ERP ثبت شود** (مثلاً با بچ یا وضعیت جدا)، مدارک هر حرکت بایگانی شود و اسناد تا پایان مدتی که قرارداد و قانون تعیین می‌کنند نگهداری شوند. بدون این‌ها، کالای کارکرده با قیمت نو به شرکا شارژ می‌شود یا برعکس، و هزینه‌ای که واقعاً مصرف شده، در حسابرسی قابل اثبات نیست.',
            en: 'The table’s percentages are illustrative; each joint operating agreement or petroleum contract sets its own conditions and pricing in its accounting procedure. The warehouse’s part is to **record the material’s condition in the ERP** (with a batch or a separate status, for example), file the documents behind every movement, and keep records for as long as the contract and the law require. Without that, used material gets charged to partners at the new price or the other way round, and cost that really was incurred cannot be proved in an audit.',
          },
        },
      ],
    },
    {
      id: 'practice',
      title: { fa: 'اشتباهات رایج و تمرین', en: 'Common mistakes and practice' },
      blocks: [
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباهات رایج', en: 'Common mistakes' },
          text: {
            fa: 'بیشتر اختلاف‌های انبار و مالی از چند عادت تکراری می‌آیند:',
            en: 'Most gaps between the warehouse and Finance come from a few recurring habits:',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**سند دستی روی حساب‌های موجودی**: دفتر کل عوض می‌شود و کاردکس نه.',
              en: '**Manual journals on inventory accounts**: the general ledger changes and the stock ledger does not.',
            },
            {
              fa: '**گروه ارزش‌گذاری اشتباه در داده پایه کالا**: قطعه یدکی حیاتی به‌عنوان «اقلام مصرفی» به حساب غلط می‌رود.',
              en: '**The wrong valuation class in the material master**: a critical spare set up as a "consumable" posts to the wrong account.',
            },
            {
              fa: '**بستن دوره بدون بررسی GR/IR**: GRNهای فاکتورنشده و فاکتورهای بدون GRN سال‌ها می‌مانند.',
              en: '**Closing the period without reviewing GR/IR**: uninvoiced GRNs and invoices without GRNs sit there for years.',
            },
            {
              fa: '**نادیده گرفتن تفاوت قیمت و خطای واحد**: یک GRN به متر به‌جای شاخه، قیمت میانگین را برای همه حواله‌های بعدی خراب می‌کند.',
              en: '**Ignoring price differences and unit errors**: one GRN in metres instead of joints spoils the average price for every later issue.',
            },
            { fa: '**تطبیق فقط در جمع**: خطاهای مخالف یکدیگر را خنثی و پنهان می‌کنند.', en: '**Reconciling only in total**: opposite errors cancel out and stay hidden.' },
            {
              fa: '**شاخص بدون تعریف** و **حواله بدون دسته بازیافت هزینه**: نه عملکرد قابل مقایسه است و نه هزینه قابل دفاع.',
              en: '**KPIs without definitions** and **issues without a cost-recovery category**: performance cannot be compared and costs cannot be defended.',
            },
          ],
        },
        {
          type: 'exercise',
          title: { fa: 'قیمت میانگین تازه پس از GRN', en: 'The new average price after a GRN' },
          difficulty: 'easy',
          problem: {
            fa: 'انبار میدان 120 بشکه بازدارنده خوردگی (200310) با قیمت میانگین 650 دارد. GRN-26-0950 برای 80 بشکه با قیمت سفارش 700 ثبت می‌شود و سپس 30 بشکه با حواله به مرکز هزینه CC-ARY-PRD تحویل می‌شود. قیمت میانگین تازه، مبلغ حواله و ارزش موجودی باقی‌مانده را حساب کنید و ثبت‌های خودکار را بنویسید.',
            en: 'The Field Warehouse holds 120 drums of corrosion inhibitor (200310) at an average price of 650. GRN-26-0950 is posted for 80 drums at a PO price of 700, and then 30 drums are issued to cost centre CC-ARY-PRD. Work out the new average price, the issue amount and the value of the remaining stock, and write the automatic entries.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'ارزش پیش از رسید و ارزش رسید', en: 'Value before the receipt and value received' },
                  text: { fa: '120 × 650 = 78,000؛ 80 × 700 = 56,000.', en: '120 × 650 = 78,000; 80 × 700 = 56,000.' },
                },
                {
                  title: { fa: 'قیمت میانگین تازه', en: 'New average price' },
                  text: { fa: '(78,000 + 56,000) ÷ (120 + 80) = 134,000 ÷ 200 = 670.', en: '(78,000 + 56,000) ÷ (120 + 80) = 134,000 ÷ 200 = 670.' },
                },
                {
                  title: { fa: 'حواله و موجودی باقی‌مانده', en: 'The issue and the remaining stock' },
                  text: {
                    fa: 'حواله: 30 × 670 = 20,100. باقی‌مانده: 170 بشکه × 670 = 113,900 (همان 134,000 منهای 20,100).',
                    en: 'Issue: 30 × 670 = 20,100. Remaining: 170 drums × 670 = 113,900 (that is, 134,000 − 20,100).',
                  },
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'GRN-26-0950', en: 'GRN-26-0950' },
                  lines: [
                    { account: { fa: 'موجودی مواد شیمیایی', en: 'Inventory: chemicals' }, debit: 56000 },
                    { account: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing' }, credit: 56000 },
                  ],
                },
                {
                  date: { fa: 'حواله به CC-ARY-PRD', en: 'Issue to CC-ARY-PRD' },
                  lines: [
                    { account: { fa: 'هزینه مواد شیمیایی تولید (مرکز هزینه CC-ARY-PRD)', en: 'Production chemicals expense (cost centre CC-ARY-PRD)' }, debit: 20100 },
                    { account: { fa: 'موجودی مواد شیمیایی', en: 'Inventory: chemicals' }, credit: 20100 },
                  ],
                },
              ],
            },
          ],
          answer: {
            fa: 'قیمت میانگین تازه 670، حواله 20,100 و موجودی باقی‌مانده 170 بشکه به ارزش 113,900.',
            en: 'New average price 670, issue 20,100, remaining stock 170 drums worth 113,900.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'فاکتور گران‌تر پس از حواله', en: 'A dearer invoice after part of the stock was issued' },
          difficulty: 'medium',
          problem: {
            fa: 'سفارش PO-26-0412 برای 100 شاخه لوله مغزی (100120) با نرخ 900 است. GRN-26-0933 برای هر 100 شاخه ثبت شد (پیش از آن موجودی این کالا صفر بود). پیش از رسیدن فاکتور، 60 شاخه به پروژه P-AR12 حواله شد. فاکتور با نرخ 920 رسید. ثبت‌های GRN، حواله و فاکتور را بنویسید و قیمت میانگین 40 شاخه باقی‌مانده را حساب کنید.',
            en: 'PO-26-0412 is for 100 joints of tubing (100120) at 900. GRN-26-0933 was posted for all 100 joints (stock of this material was zero before). Before the invoice arrived, 60 joints were issued to project P-AR12. The invoice came in at 920. Write the GRN, issue and invoice entries and work out the average price of the 40 joints left.',
          },
          hint: {
            fa: 'اختلاف فاکتور را به نسبت مقدار باقی‌مانده در انبار به مقدار فاکتورشده تقسیم کنید.',
            en: 'Split the invoice difference in the ratio of the quantity still in stock to the quantity invoiced.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'اختلاف کل', en: 'Total difference' },
                  text: { fa: 'فاکتور 100 × 920 = 92,000؛ GRN 100 × 900 = 90,000؛ اختلاف 2,000.', en: 'Invoice 100 × 920 = 92,000; GRN 100 × 900 = 90,000; difference 2,000.' },
                },
                {
                  title: { fa: 'تقسیم اختلاف', en: 'Split the difference' },
                  text: {
                    fa: 'فقط 40 شاخه از 100 شاخه در انبار است: 40 ÷ 100 × 2,000 = 800 به موجودی و 1,200 باقی‌مانده به تفاوت قیمت خرید.',
                    en: 'Only 40 of the 100 joints are still in stock: 40 ÷ 100 × 2,000 = 800 to inventory, and the remaining 1,200 to purchase price differences.',
                  },
                },
                {
                  title: { fa: 'قیمت میانگین تازه', en: 'New average price' },
                  text: { fa: '(40 × 900 + 800) ÷ 40 = 36,800 ÷ 40 = 920.', en: '(40 × 900 + 800) ÷ 40 = 36,800 ÷ 40 = 920.' },
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'GRN-26-0933', en: 'GRN-26-0933' },
                  lines: [
                    { account: { fa: 'موجودی لوله‌های جداری و مغزی (OCTG)', en: 'Inventory: OCTG (casing and tubing)' }, debit: 90000 },
                    { account: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing' }, credit: 90000 },
                  ],
                },
                {
                  date: { fa: 'حواله 60 شاخه به P-AR12', en: 'Issue of 60 joints to P-AR12' },
                  lines: [
                    { account: { fa: 'دارایی در جریان ساخت: چاه‌ها (پروژه P-AR12)', en: 'Assets under construction: wells (project P-AR12)' }, debit: 54000 },
                    { account: { fa: 'موجودی لوله‌های جداری و مغزی (OCTG)', en: 'Inventory: OCTG (casing and tubing)' }, credit: 54000 },
                  ],
                },
                {
                  date: { fa: 'فاکتور', en: 'Invoice' },
                  lines: [
                    { account: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing' }, debit: 90000 },
                    { account: { fa: 'موجودی لوله‌های جداری و مغزی (OCTG)', en: 'Inventory: OCTG (casing and tubing)' }, debit: 800 },
                    { account: { fa: 'تفاوت قیمت خرید', en: 'Purchase price differences' }, debit: 1200 },
                    { account: { fa: 'حساب‌های پرداختنی تجاری', en: 'Accounts payable: suppliers' }, credit: 92000 },
                  ],
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'آن 1,200 به 60 شاخه‌ای مربوط است که قبلاً به AFE رفته‌اند؛ پس AFE اکنون 54,000 نشان می‌دهد، در حالی که بهای واقعی 55,200 بوده است. بسیاری از اپراتورها تفاوت قیمت را در پایان ماه به همان موضوع هزینه منتقل می‌کنند تا ادعای بازیافت هزینه بر پایه قیمت واقعی باشد؛ سیاست شرکت خود را بررسی کنید.',
                en: 'That 1,200 belongs to the 60 joints already charged to the AFE, so the AFE now shows 54,000 although their actual cost was 55,200. Many operators pass price differences on to the same cost object at month-end so the cost-recovery claim rests on actual prices; check your company’s policy.',
              },
            },
          ],
          answer: {
            fa: '800 به موجودی و 1,200 به تفاوت قیمت خرید؛ قیمت میانگین 40 شاخه باقی‌مانده 920 است.',
            en: '800 to inventory and 1,200 to purchase price differences; the 40 joints left are valued at 920 each.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'شاخص‌های انبار میدان', en: 'Field Warehouse KPIs' },
          difficulty: 'medium',
          problem: {
            fa: 'با داده‌های سال گذشته انبار میدان، گردش موجودی، روزهای نگهداری، دقت سوابق موجودی و نرخ تأمین درخواست را حساب کنید و بگویید چرا گردش این انبار از میانگین شرکت (3.0 بار) کمتر است.',
            en: 'Using last year’s Field Warehouse data, work out inventory turnover, days of inventory, record accuracy and fill rate, and explain why this warehouse turns over more slowly than the company average (3.0 times).',
          },
          given: {
            head: [
              { fa: 'داده', en: 'Data' },
              { fa: 'مقدار', en: 'Value' },
            ],
            rows: [
              [{ fa: 'موجودی ابتدای سال', en: 'Opening inventory' }, 1100000],
              [{ fa: 'موجودی پایان سال', en: 'Closing inventory' }, 1300000],
              [{ fa: 'بهای حواله‌های سال', en: 'Cost of the year’s issues' }, 3000000],
              [{ fa: 'اقلام شمارش‌شده', en: 'Items counted' }, 150],
              [{ fa: 'اقلام در حد مجاز', en: 'Items within tolerance' }, 141],
              [{ fa: 'سطرهای درخواست', en: 'Request lines' }, 900],
              [{ fa: 'سطرهای کامل تحویل‌شده در اولین درخواست', en: 'Lines issued in full on first request' }, 855],
            ],
            numericCols: [1],
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'شاخص', en: 'KPI' },
                { fa: 'محاسبه', en: 'Calculation' },
                { fa: 'نتیجه', en: 'Result' },
              ],
              rows: [
                [{ fa: 'میانگین موجودی', en: 'Average inventory' }, { fa: '(1,100,000 + 1,300,000) ÷ 2', en: '(1,100,000 + 1,300,000) ÷ 2' }, { fa: '1,200,000', en: '1,200,000' }],
                [{ fa: 'گردش موجودی', en: 'Inventory turnover' }, { fa: '3,000,000 ÷ 1,200,000', en: '3,000,000 ÷ 1,200,000' }, { fa: '2.5 بار', en: '2.5 times' }],
                [{ fa: 'روزهای نگهداری', en: 'Days of inventory' }, { fa: '365 ÷ 2.5', en: '365 ÷ 2.5' }, { fa: '146 روز', en: '146 days' }],
                [{ fa: 'دقت سوابق موجودی', en: 'Record accuracy' }, { fa: '141 ÷ 150', en: '141 ÷ 150' }, { fa: '94%', en: '94%' }],
                [{ fa: 'نرخ تأمین درخواست', en: 'Fill rate' }, { fa: '855 ÷ 900', en: '855 ÷ 900' }, { fa: '95%', en: '95%' }],
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              text: {
                fa: 'گردش کمتر لزوماً بد نیست: انبار میدان قطعات یدکی حیاتی و بیمه‌ای کمپرسور و چاه‌ها را نزدیک تأسیسات نگه می‌دارد. پیش از نتیجه‌گیری، گردش را به تفکیک گروه کالا ببینید؛ اگر مواد شیمیایی هم کم‌گردش باشند، آن‌جا مشکل واقعی است.',
                en: 'Slower turnover is not necessarily bad: the Field Warehouse holds critical and insurance spares for the compressors and wells close to the facilities. Before drawing conclusions, look at turnover by material group; if chemicals are also slow, that is where the real problem is.',
              },
            },
          ],
          answer: {
            fa: 'گردش 2.5 بار، 146 روز نگهداری، دقت 94% و نرخ تأمین 95%.',
            en: 'Turnover 2.5 times, 146 days of inventory, accuracy 94% and fill rate 95%.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تطبیق کاردکس و دفتر کل با ثبت‌های اصلاحی', en: 'Reconciling the stock ledger and the general ledger, with corrections' },
          difficulty: 'hard',
          problem: {
            fa: 'در تطبیق پایان ماه، مانده‌ها مطابق جدول است. بررسی دو سند دستی را پیدا کرده است: MJ-26-140 فاکتور 4 شیر دروازه‌ای (4 × 3,000 = 12,000) را، که پیش از رسیدن کالا آمده بود، با بدهکار کردن موجودی قطعات یدکی و بستانکار کردن حساب‌های پرداختنی ثبت کرده است و هنوز GRN ندارد؛ و MJ-26-144 ده شاخه لوله مغزی در انتقال TR-26-0230 (10 × 900 = 9,000) را از موجودی در راه به موجودی لوله‌ها برده، به خیال این‌که کامیون رسیده است، در حالی که هنوز نرسیده. اختلاف هر حساب را بیابید، ثبت‌های اصلاحی را بنویسید و نشان دهید پس از اصلاح، دو دفتر برابر می‌شوند.',
            en: 'At the month-end reconciliation the balances are as in the table. The investigation found two manual journals: MJ-26-140 recorded the invoice for 4 gate valves (4 × 3,000 = 12,000), which arrived before the goods, by debiting Inventory: spare parts and crediting accounts payable, and there is still no GRN; and MJ-26-144 moved ten joints of tubing on transfer TR-26-0230 (10 × 900 = 9,000) from stock in transit to OCTG inventory, on the belief that the truck had arrived, when it has not. Find each account’s difference, write the correcting entries and show that the two ledgers agree afterwards.',
          },
          given: {
            head: [
              { fa: 'حساب', en: 'Account' },
              { fa: 'کاردکس', en: 'Stock ledger' },
              { fa: 'دفتر کل', en: 'General ledger' },
            ],
            rows: [
              [{ fa: '1320 موجودی لوله‌های جداری و مغزی (OCTG)', en: '1320 Inventory: OCTG' }, 640000, 649000],
              [{ fa: '1330 موجودی مواد شیمیایی', en: '1330 Inventory: chemicals' }, 95000, 95000],
              [{ fa: '1310 موجودی قطعات یدکی', en: '1310 Inventory: spare parts' }, 410000, 422000],
              [{ fa: '1350 موجودی در راه بین انبارها', en: '1350 Stock in transit' }, 54000, 45000],
              [{ fa: 'جمع', en: 'Total' }, 1199000, 1211000],
            ],
            numericCols: [1, 2],
          },
          hint: {
            fa: 'فاکتوری که پیش از کالا می‌رسد در ERP روی سفارش ثبت می‌شود و GR/IR را بدهکار می‌کند، نه موجودی را.',
            en: 'An invoice that arrives before the goods is posted against the PO in the ERP and debits GR/IR, not inventory.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'اختلاف‌ها و علت آن‌ها', en: 'The differences and their causes' },
              head: [
                { fa: 'حساب', en: 'Account' },
                { fa: 'اختلاف', en: 'Difference' },
                { fa: 'علت', en: 'Cause' },
              ],
              rows: [
                [{ fa: '1320 OCTG', en: '1320 OCTG' }, { fa: '9,000 (دفتر کل بیشتر)', en: '9,000 (GL higher)' }, { fa: 'MJ-26-144', en: 'MJ-26-144' }],
                [{ fa: '1310 قطعات یدکی', en: '1310 Spare parts' }, { fa: '12,000 (دفتر کل بیشتر)', en: '12,000 (GL higher)' }, { fa: 'MJ-26-140', en: 'MJ-26-140' }],
                [{ fa: '1350 موجودی در راه', en: '1350 Stock in transit' }, { fa: '9,000 (دفتر کل کمتر)', en: '9,000 (GL lower)' }, { fa: 'MJ-26-144', en: 'MJ-26-144' }],
                [{ fa: 'جمع', en: 'Total' }, { fa: '12,000 (دفتر کل بیشتر، خالص)', en: '12,000 (GL higher, net)' }, { fa: 'دو اختلاف 9,000 در جمع خنثی شده‌اند', en: 'The two 9,000 differences cancel in the total' }],
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'برگشت MJ-26-140', en: 'Reverse MJ-26-140' },
                  lines: [
                    { account: { fa: 'حساب‌های پرداختنی تجاری', en: 'Accounts payable: suppliers' }, debit: 12000 },
                    { account: { fa: 'موجودی قطعات یدکی', en: 'Inventory: spare parts' }, credit: 12000 },
                  ],
                },
                {
                  date: { fa: 'ثبت فاکتور در ERP روی سفارش', en: 'Post the invoice in the ERP against the PO' },
                  lines: [
                    { account: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing' }, debit: 12000 },
                    { account: { fa: 'حساب‌های پرداختنی تجاری', en: 'Accounts payable: suppliers' }, credit: 12000 },
                  ],
                  memo: {
                    fa: 'GR/IR تا رسیدن شیرها و ثبت GRN مانده بدهکار 12,000 دارد (فاکتورشده و نرسیده).',
                    en: 'GR/IR carries a 12,000 debit balance (invoiced, not received) until the valves arrive and the GRN is posted.',
                  },
                },
                {
                  date: { fa: 'برگشت MJ-26-144', en: 'Reverse MJ-26-144' },
                  lines: [
                    { account: { fa: 'موجودی در راه بین انبارها', en: 'Stock in transit between warehouses' }, debit: 9000 },
                    { account: { fa: 'موجودی لوله‌های جداری و مغزی (OCTG)', en: 'Inventory: OCTG (casing and tubing)' }, credit: 9000 },
                  ],
                  memo: {
                    fa: 'وقتی کامیون واقعاً برسد، انبار میدان رسید انتقال (مرحله دوم) را در ERP ثبت می‌کند.',
                    en: 'When the truck really arrives, the Field Warehouse posts the transfer receipt (step 2) in the ERP.',
                  },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'دفتر کل پس از اصلاح', en: 'General ledger after the corrections' },
              head: [
                { fa: 'حساب', en: 'Account' },
                { fa: 'پیش از اصلاح', en: 'Before' },
                { fa: 'پس از اصلاح', en: 'After' },
                { fa: 'کاردکس', en: 'Stock ledger' },
              ],
              rows: [
                [{ fa: '1320 OCTG', en: '1320 OCTG' }, 649000, 640000, 640000],
                [{ fa: '1330 مواد شیمیایی', en: '1330 Chemicals' }, 95000, 95000, 95000],
                [{ fa: '1310 قطعات یدکی', en: '1310 Spare parts' }, 422000, 410000, 410000],
                [{ fa: '1350 موجودی در راه', en: '1350 Stock in transit' }, 45000, 54000, 54000],
                [{ fa: 'جمع', en: 'Total' }, 1211000, 1199000, 1199000],
              ],
              numericCols: [1, 2, 3],
            },
          ],
          answer: {
            fa: 'با سه ثبت اصلاحی (برگشت MJ-26-140، ثبت فاکتور روی GR/IR و برگشت MJ-26-144) هر دو دفتر به 1,199,000 می‌رسند.',
            en: 'Three correcting entries (reverse MJ-26-140, post the invoice to GR/IR, reverse MJ-26-144) bring both ledgers to 1,199,000.',
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
              fa: 'هر حرکت کالا در ERP یک سند کالا و یک سند حسابداری هم‌زمان می‌سازد؛ تعیین حساب از گروه ارزش‌گذاری و نوع حرکت پیروی می‌کند.',
              en: 'Every goods movement in the ERP creates a material document and an accounting document at once; account determination follows the valuation class and the type of movement.',
            },
            {
              fa: 'قیمت میانگین متحرک پس از هر رسید کالا (GRN) به‌روز می‌شود؛ قیمت استاندارد ثابت است و اختلاف‌ها به تفاوت قیمت خرید می‌روند.',
              en: 'The moving average price is updated after every GRN; the standard price is fixed and differences go to purchase price differences.',
            },
            {
              fa: 'تفاوت قیمت فاکتور با سفارش، در روش میانگین متحرک به نسبت موجودی باقی‌مانده بین موجودی و تفاوت قیمت تقسیم می‌شود.',
              en: 'Under moving average, an invoice-versus-PO difference is split between inventory and price differences in proportion to the stock still on hand.',
            },
            {
              fa: 'مانده GR/IR کالای رسیده و فاکتورنشده (یا برعکس) را نشان می‌دهد و باید هر ماه بررسی شود.',
              en: 'The GR/IR balance shows goods received but not invoiced (or the reverse) and must be reviewed every month.',
            },
            {
              fa: 'کاردکس و حساب‌های موجودی دفتر کل باید حساب به حساب برابر باشند؛ حساب‌های موجودی را برای ثبت دستی ببندید.',
              en: 'The stock ledger and the inventory accounts must agree account by account; block manual journals on inventory accounts.',
            },
            {
              fa: 'شاخص‌هایی مثل دقت سوابق، گردش موجودی و نرخ تأمین درخواست فقط با تعریف روشن و به تفکیک گروه کالا معنا دارند.',
              en: 'KPIs such as record accuracy, turnover and fill rate mean something only with clear definitions and by material group.',
            },
            {
              fa: 'زنجیره کامل اسناد از درخواست خرید تا حواله و موضوع هزینه، پشتوانه ادعای بازیافت هزینه و دفاع در حسابرسی است.',
              en: 'The full document chain from requisition to goods issue and cost object is what backs a cost-recovery claim and holds up in an audit.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'قیمت میانگین متحرک', en: 'Moving average price' },
              def: { fa: 'قیمت واحدی که پس از هر رسید از تقسیم ارزش کل بر مقدار کل دوباره حساب می‌شود.', en: 'A unit price recalculated after every receipt as total value divided by total quantity.' },
            },
            {
              term: { fa: 'قیمت استاندارد', en: 'Standard price' },
              def: { fa: 'قیمت ثابت از پیش تعیین‌شده برای ارزش‌گذاری موجودی؛ اختلاف با قیمت واقعی به تفاوت قیمت می‌رود.', en: 'A fixed, preset price for valuing stock; differences from actual prices go to price differences.' },
            },
            {
              term: { fa: 'تفاوت قیمت خرید', en: 'Purchase price differences' },
              def: { fa: 'حسابی برای اختلاف قیمت واقعی خرید با قیمتی که موجودی با آن ارزش‌گذاری شده است.', en: 'An account for the gap between the actual purchase price and the price at which stock is valued.' },
            },
            {
              term: { fa: 'رسید کالا (GRN)', en: 'Goods received note (GRN)' },
              def: { fa: 'سند دریافت کالا در برابر سفارش خرید؛ برای کالای انباری موجودی را بدهکار و GR/IR را بستانکار می‌کند.', en: 'The document recording goods received against a PO; for stock items it debits inventory and credits GR/IR.' },
            },
            {
              term: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing account' },
              def: { fa: 'حسابی که در GRN بستانکار و در ثبت فاکتور بدهکار می‌شود و اقلام رسیده‌نشده یا فاکتورنشده را نشان می‌دهد.', en: 'Credited at the GRN and debited at the invoice; it shows items received but not invoiced, or invoiced but not received.' },
            },
            {
              term: { fa: 'تطبیق سه‌طرفه', en: 'Three-way match' },
              def: { fa: 'مقایسه سفارش خرید، رسید کالا (GRN) و فاکتور پیش از پرداخت.', en: 'Comparing the purchase order, the GRN and the invoice before payment.' },
            },
            {
              term: { fa: 'تعیین حساب', en: 'Account determination' },
              def: { fa: 'تنظیماتی در ERP که برای هر گروه ارزش‌گذاری و نوع ثبت، حساب کل را مشخص می‌کند.', en: 'ERP settings that set the general-ledger account for each valuation class and kind of posting.' },
            },
            {
              term: { fa: 'گروه ارزش‌گذاری', en: 'Valuation class' },
              def: { fa: 'فیلدی در داده پایه کالا که حساب موجودی کالا را تعیین می‌کند.', en: 'A field in the material master that determines the material’s inventory account.' },
            },
            {
              term: { fa: 'کاردکس', en: 'Stock ledger (kardex)' },
              def: { fa: 'دفتر معین موجودی: مقدار و ارزش هر کالا در هر انبار.', en: 'The inventory subsidiary ledger: quantity and value of each material in each warehouse.' },
            },
            {
              term: { fa: 'گردش موجودی', en: 'Inventory turnover' },
              def: { fa: 'بهای حواله‌های سال تقسیم بر میانگین موجودی.', en: 'The cost of the year’s issues divided by average inventory.' },
            },
            {
              term: { fa: 'نرخ تأمین درخواست', en: 'Fill rate' },
              def: { fa: 'سهم سطرهای درخواستی که در اولین درخواست کامل تحویل شده‌اند.', en: 'The share of request lines issued in full on the first request.' },
            },
            {
              term: { fa: 'زنجیره اسناد', en: 'Document chain (audit trail)' },
              def: { fa: 'پیوند اسناد از درخواست خرید تا حواله و موضوع هزینه که هر مبلغ را قابل ردیابی می‌کند.', en: 'The linked documents from requisition to goods issue and cost object that make every amount traceable.' },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: {
        fa: 'انبار 20 عدد آب‌بند با قیمت میانگین 1,200 دارد. یک رسید کالا (GRN) برای 10 عدد دیگر با نرخ 1,350 ثبت می‌شود. قیمت میانگین متحرک تازه چقدر است؟',
        en: 'The warehouse holds 20 seals at an average price of 1,200. A GRN is posted for 10 more at 1,350. What is the new moving average price?',
      },
      options: [
        { fa: '1,250', en: '1,250' },
        { fa: '1,275', en: '1,275' },
        { fa: '1,200', en: '1,200' },
        { fa: '1,350', en: '1,350' },
      ],
      answer: 0,
      explain: {
        fa: '(20 × 1,200 + 10 × 1,350) ÷ 30 = 37,500 ÷ 30 = 1,250. پاسخ 1,275 میانگین ساده دو نرخ است و وزن مقدارها را نادیده می‌گیرد؛ 1,200 هم یعنی رسید را در قیمت اثر نداده‌ایم.',
        en: '(20 × 1,200 + 10 × 1,350) ÷ 30 = 37,500 ÷ 30 = 1,250. 1,275 is the simple average of the two prices and ignores the quantities; 1,200 ignores the receipt altogether.',
      },
    },
    {
      q: {
        fa: 'قیمت استاندارد شیر 300540 برابر 3,200 است. GRN برای 5 شیر با قیمت سفارش 3,500 ثبت می‌شود. ERP چه ثبتی می‌سازد؟',
        en: 'The standard price of valve 300540 is 3,200. A GRN is posted for 5 valves at a PO price of 3,500. What does the ERP post?',
      },
      options: [
        { fa: 'بدهکار موجودی 17,500، بستانکار GR/IR 17,500', en: 'Dr Inventory 17,500; Cr GR/IR 17,500' },
        { fa: 'بدهکار موجودی 16,000 و تفاوت قیمت خرید 1,500، بستانکار GR/IR 17,500', en: 'Dr Inventory 16,000 and Purchase price differences 1,500; Cr GR/IR 17,500' },
        { fa: 'بدهکار موجودی 16,000، بستانکار GR/IR 16,000', en: 'Dr Inventory 16,000; Cr GR/IR 16,000' },
        { fa: 'بدهکار موجودی 17,500، بستانکار حساب‌های پرداختنی 17,500', en: 'Dr Inventory 17,500; Cr Accounts payable 17,500' },
      ],
      answer: 1,
      explain: {
        fa: 'در روش استاندارد، موجودی همیشه با قیمت استاندارد ثبت می‌شود: 5 × 3,200 = 16,000. GR/IR با قیمت سفارش (17,500) بستانکار می‌شود تا بعداً با فاکتور تسویه شود و اختلاف 1,500 به تفاوت قیمت خرید می‌رود. گزینه اول منطق میانگین متحرک است و گزینه آخر GR/IR را دور زده است.',
        en: 'Under standard price, stock is always recorded at standard: 5 × 3,200 = 16,000. GR/IR is credited at the PO price (17,500) so the invoice can clear it later, and the 1,500 difference goes to purchase price differences. The first option is moving-average logic, and the last bypasses GR/IR.',
      },
    },
    {
      q: {
        fa: 'فاکتور 10 عدد کالا 500 بیشتر از مبلغ GRN است. کالا با قیمت میانگین متحرک ارزش‌گذاری می‌شود و هنگام ثبت فاکتور فقط 4 عدد از آن در انبار مانده است. چه مبلغی به حساب تفاوت قیمت خرید می‌رود؟',
        en: 'An invoice for 10 units is 500 more than the GRN amount. The material is valued at moving average price, and only 4 units are still in stock when the invoice is posted. How much goes to purchase price differences?',
      },
      options: [
        { fa: '500', en: '500' },
        { fa: '200', en: '200' },
        { fa: '300', en: '300' },
        { fa: 'صفر', en: 'Zero' },
      ],
      answer: 2,
      explain: {
        fa: 'سهم موجودی 4 ÷ 10 × 500 = 200 است که قیمت میانگین کالای باقی‌مانده را بالا می‌برد. باقی‌مانده، یعنی 300، مربوط به 6 عددی است که قبلاً حواله شده‌اند و به تفاوت قیمت خرید می‌رود. 200 سهم موجودی است، نه تفاوت قیمت؛ 500 هم پاسخ روش استاندارد است.',
        en: 'The stock share is 4 ÷ 10 × 500 = 200, which raises the average price of the units left. The rest, 300, belongs to the 6 units already issued and goes to purchase price differences. 200 is the inventory share, not the price difference; 500 would be the standard-price answer.',
      },
    },
    {
      q: {
        fa: 'کدام ثبت زیر با یک حرکت کالا ایجاد نمی‌شود و واحد مالی آن را پس از بررسی اقلام کم‌گردش ثبت می‌کند؟',
        en: 'Which of these entries is not triggered by a goods movement but posted by Finance after the slow-moving review?',
      },
      options: [
        { fa: 'ثبت کسری شمارش', en: 'A count-shortage posting' },
        { fa: 'برگشت کالا به انبار', en: 'A return to stock' },
        { fa: 'کاهش ارزش به خالص ارزش فروش: بدهکار هزینه کاهش ارزش، بستانکار ذخیره کاهش ارزش', en: 'A write-down to NRV: Dr write-down expense, Cr allowance for write-down' },
        { fa: 'مرحله اول انتقال دومرحله‌ای', en: 'Step one of a two-step transfer' },
      ],
      answer: 2,
      explain: {
        fa: 'کاهش ارزش، مقدار کالا را تغییر نمی‌دهد و به حساب کاهنده ذخیره (1490) می‌رود؛ برای همین کاردکس آن را نمی‌بیند و در تطبیق یک قلم شناخته‌شده است. کسری شمارش، برگشت و انتقال همه حرکت کالا هستند و ERP آن‌ها را خودکار ثبت می‌کند.',
        en: 'A write-down does not change quantities and goes to the contra account (1490), so the stock ledger never sees it and it is a known reconciling item. Count shortages, returns and transfers are all goods movements that the ERP posts automatically.',
      },
    },
    {
      q: {
        fa: 'در تطبیق پایان ماه، جمع کاردکس و جمع حساب‌های موجودی دفتر کل هر دو 1,500,000 است؛ اما حساب مواد شیمیایی در دفتر کل 4,000 بیشتر و حساب قطعات یدکی 4,000 کمتر از کاردکس است. نتیجه درست کدام است؟',
        en: 'At the month-end reconciliation, the stock ledger and the inventory accounts both total 1,500,000, but in the general ledger chemicals are 4,000 higher and spare parts 4,000 lower than the stock ledger. What is the right conclusion?',
      },
      options: [
        { fa: 'تطبیق کامل است، چون جمع‌ها برابرند', en: 'The reconciliation is fine, because the totals agree' },
        { fa: 'دو خطا وجود دارد که یکدیگر را خنثی کرده‌اند؛ هر دو حساب باید بررسی و اصلاح شوند', en: 'There are two errors that cancel out; both accounts must be investigated and corrected' },
        { fa: 'فقط حساب مواد شیمیایی خطا دارد', en: 'Only the chemicals account is wrong' },
        { fa: 'باید 4,000 به حساب ذخیره کاهش ارزش منتقل شود', en: '4,000 should be moved to the write-down allowance' },
      ],
      answer: 1,
      explain: {
        fa: 'تطبیق باید حساب به حساب انجام شود. برابری جمع‌ها فقط نشان می‌دهد دو اختلاف هم‌اندازه و مخالف وجود دارد؛ هر کدام علتی دارد (مثلاً سند دستی یا گروه ارزش‌گذاری اشتباه) و باید جداگانه اصلاح شود. انتقال اختلاف به ذخیره کاهش ارزش فقط خطا را پنهان می‌کند.',
        en: 'Reconciliation must be done account by account. Equal totals only show that two equal and opposite differences exist; each has its own cause (a manual journal or a wrong valuation class, for example) and must be fixed separately. Moving the difference to the allowance would just hide the error.',
      },
    },
    {
      q: {
        fa: 'بهای حواله‌های سال 4,800,000، موجودی ابتدای سال 1,400,000 و موجودی پایان سال 1,800,000 است. گردش موجودی چند بار است؟',
        en: 'The cost of the year’s issues is 4,800,000, opening inventory 1,400,000 and closing inventory 1,800,000. What is inventory turnover?',
      },
      options: [
        { fa: '2.67', en: '2.67' },
        { fa: '3.43', en: '3.43' },
        { fa: '0.33', en: '0.33' },
        { fa: '3.0', en: '3.0' },
      ],
      answer: 3,
      explain: {
        fa: 'میانگین موجودی = (1,400,000 + 1,800,000) ÷ 2 = 1,600,000؛ گردش = 4,800,000 ÷ 1,600,000 = 3.0 بار. پاسخ 2.67 فقط موجودی پایان سال و 3.43 فقط موجودی ابتدای سال را به کار برده است؛ 0.33 هم کسر را وارونه کرده است.',
        en: 'Average inventory = (1,400,000 + 1,800,000) ÷ 2 = 1,600,000; turnover = 4,800,000 ÷ 1,600,000 = 3.0 times. 2.67 uses only closing inventory and 3.43 only opening inventory; 0.33 turns the fraction upside down.',
      },
    },
    {
      q: {
        fa: 'از 2,000 سطر درخواست، 1,840 سطر در اولین درخواست کامل تحویل شد، 120 سطر ناقص و 40 سطر اصلاً تحویل نشد. نرخ تأمین درخواست چقدر است؟',
        en: 'Of 2,000 request lines, 1,840 were issued in full on the first request, 120 were issued partly and 40 not at all. What is the fill rate?',
      },
      options: [
        { fa: '92%', en: '92%' },
        { fa: '98%', en: '98%' },
        { fa: '6%', en: '6%' },
        { fa: '8%', en: '8%' },
      ],
      answer: 0,
      explain: {
        fa: '1,840 ÷ 2,000 = 92%. سطرهای ناقص جزو تأمین کامل نیستند؛ پاسخ 98% آن‌ها را هم شمرده است (1,960 ÷ 2,000). 6% سهم سطرهای ناقص و 8% سهم همه سطرهایی است که کامل تحویل نشدند.',
        en: '1,840 ÷ 2,000 = 92%. Partly issued lines do not count as filled; 98% counts them too (1,960 ÷ 2,000). 6% is the share of partial lines and 8% the share of all lines not filled in full.',
      },
    },
    {
      q: { fa: 'چرا حساب‌های موجودی دفتر کل را برای ثبت دستی می‌بندند؟', en: 'Why are the inventory accounts in the general ledger blocked for manual journals?' },
      options: [
        { fa: 'چون ثبت دستی مالیات بر ارزش افزوده را تغییر می‌دهد', en: 'Because manual journals change VAT' },
        {
          fa: 'چون سند دستی دفتر کل را تغییر می‌دهد اما کاردکس را نه، و میان دو دفتر اختلاف می‌سازد',
          en: 'Because a manual journal changes the general ledger but not the stock ledger, creating a gap between them',
        },
        { fa: 'چون حسابرسان هیچ ثبت دستی‌ای را نمی‌پذیرند', en: 'Because auditors never accept any manual entry' },
        { fa: 'چون ERP نمی‌تواند سند دستی را چاپ کند', en: 'Because the ERP cannot print manual journals' },
      ],
      answer: 1,
      explain: {
        fa: 'کاردکس فقط از حرکت‌های کالا به‌روز می‌شود. سند دستی روی حساب موجودی، دفتر کل را عوض می‌کند و کاردکس را نه؛ نتیجه اختلافی است که باید با برگشت سند دستی و ثبت سند درست ERP رفع شود. حسابرسان ثبت دستی را در جای خودش (مثلاً ذخیره کاهش ارزش با تأیید) می‌پذیرند؛ مشکل، دور زدن یکپارچگی است.',
        en: 'The stock ledger is updated only by goods movements. A manual journal on an inventory account changes the general ledger but not the stock ledger, creating a gap that has to be fixed by reversing it and posting the proper ERP document. Auditors do accept manual entries where they belong (the write-down allowance, with approval, for example); the problem is bypassing the integration.',
      },
    },
    {
      q: { fa: 'مانده بستانکار حساب واسط GR/IR در پایان ماه معمولاً چه چیزی را نشان می‌دهد؟', en: 'What does a credit balance on the GR/IR clearing account usually show at month-end?' },
      options: [
        { fa: 'فاکتورهایی که ثبت شده‌اند اما کالایشان هنوز نرسیده', en: 'Invoices posted for goods not yet received' },
        { fa: 'مبالغی که به تأمین‌کنندگان پرداخت شده است', en: 'Amounts already paid to suppliers' },
        { fa: 'تفاوت قیمت خرید ماه', en: 'The month’s purchase price differences' },
        { fa: 'کالایی که رسید کالا (GRN) خورده اما فاکتورش هنوز ثبت نشده', en: 'Goods with a GRN whose invoice has not yet been posted' },
      ],
      answer: 3,
      explain: {
        fa: 'GRN حساب GR/IR را بستانکار و فاکتور آن را بدهکار می‌کند؛ پس مانده بستانکار یعنی کالای رسیده و فاکتورنشده که در واقع بدهی تحقق‌یافته است. گزینه اول وضعیت عکس است و مانده بدهکار می‌سازد.',
        en: 'A GRN credits GR/IR and the invoice debits it, so a credit balance means goods received but not invoiced, which is in effect an accrued liability. The first option is the reverse situation and produces a debit balance.',
      },
    },
    {
      q: {
        fa: 'حسابرس انرژی البرز 30 شاخه لوله جداری را که به AFE-2026-012 منظور شده انتخاب می‌کند. کدام مجموعه اسناد این هزینه را کامل پشتیبانی می‌کند؟',
        en: 'Alborz Energy’s auditor picks the 30 joints of casing charged to AFE-2026-012. Which set of documents fully supports this cost?',
      },
      options: [
        { fa: 'فقط فاکتور تأمین‌کننده و سند پرداخت', en: 'Only the supplier invoice and the payment record' },
        { fa: 'سفارش خرید و فاکتور', en: 'The purchase order and the invoice' },
        {
          fa: 'سفارش خرید، رسید کالا (GRN)، فاکتور، حواله به پروژه P-AR12 و گزارش رانش لوله در چاه AR-12',
          en: 'The purchase order, the GRN, the invoice, the goods issue to project P-AR12 and the casing-run report for well AR-12',
        },
        { fa: 'گزارش موجودی پایان سال', en: 'The year-end stock report' },
      ],
      answer: 2,
      explain: {
        fa: 'زنجیره کامل از خرید تا مصرف لازم است: سفارش و فاکتور نشان می‌دهند کالا خریده و بهایش تعهد شده، GRN نشان می‌دهد کالا رسیده و حواله و گزارش رانش لوله نشان می‌دهند همان کالا در چاه AR-12 مصرف شده است. فاکتور به‌تنهایی ثابت نمی‌کند کالا به این AFE رسیده است.',
        en: 'The full chain from purchase to use is needed: the PO and invoice show the material was bought and owed for, the GRN shows it arrived, and the goods issue and casing-run report show that the same material was used in well AR-12. An invoice alone does not prove the material reached this AFE.',
      },
    },
  ],
}
