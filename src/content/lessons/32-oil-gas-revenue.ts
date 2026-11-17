import type { Lesson } from '../types'

/*
 * Revenue from oil and gas under IFRS 15, for an upstream joint venture (Masar Petroleum, operator of the Arya field).
 * Checked on 16 November 2026: IFRS 15 five-step model; IFRS Interpretations Committee agenda decision "Sale of output by a
 * joint operator (IFRS 11)", March 2019: a joint operator recognises revenue only for the output it has sold to customers;
 * the Committee did not address how to account for the resulting imbalance, so practice varies.
 * The Arya field contract terms (royalty, cost-oil cap, profit-oil split) and all prices and volumes are illustrative.
 */

const ac = {
  bank: { fa: '1110 موجودی نقد (بانک)', en: '1110 Cash at bank' },
  ar: { fa: '1210 حساب‌های دریافتنی (خریداران)', en: '1210 Accounts receivable (buyers)' },
  underlift: { fa: 'دارایی کم‌برداشت (Underlift)', en: 'Underlift asset' },
  imbalanceAlborz: { fa: 'تعدیل بیش‌برداشت و کم‌برداشت', en: 'Overlift and underlift adjustment' },
  alborz: { fa: '1720 حساب جاری شریک: انرژی البرز', en: '1720 Partner current account: Alborz Energy' },
  dena: { fa: '1730 حساب جاری شریک: نفت دنا', en: '1730 Partner current account: Dena Petroleum' },
  overlift: { fa: '2160 بدهی بیش‌برداشت (Overlift)', en: '2160 Overlift liability' },
  contractLiab: { fa: '2180 بدهی قراردادی (پیش‌دریافت گاز)', en: '2180 Contract liability (gas paid in advance)' },
  oilRevenue: { fa: '4110 درآمد فروش نفت', en: '4110 Oil sales revenue' },
  gasRevenue: { fa: '4120 درآمد فروش گاز', en: '4120 Gas sales revenue' },
  pricingAdj: { fa: '4150 تعدیل قیمت فروش‌های موقت', en: '4150 Provisional pricing adjustments' },
  imbalance: { fa: '5185 تعدیل بیش‌برداشت و کم‌برداشت', en: '5185 Overlift and underlift adjustment' },
}

const t = (fa: string, en: string) => ({ fa, en })
/** Empty table cell. */
const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'oil-gas-revenue',
  number: 26,
  currency: 'usd',
  level: 'advanced',
  minutes: 35,
  icon: 'TrendingUp',
  tone: 'revenue',
  title: { fa: 'درآمد فروش نفت و گاز (IFRS 15)', en: 'Oil and Gas Revenue (IFRS 15)' },
  summary: {
    fa: 'بیاموزید درآمد فروش نفت خام و گاز طبق IFRS 15 کی و به چه مبلغی شناسایی می‌شود: الگوی پنج‌مرحله‌ای، قراردادهای فروش نفت و گاز، اندازه‌گیری حجم و قیمت، سهم برداشت شرکا، بیش‌برداشت و کم‌برداشت، نمایش بهره مالکانه و سهم دولت، صورت‌حساب و حساب‌های دریافتنی، و پیوند درآمد با حسابداری تولید و بازیافت هزینه در ERP؛ با مثال شرکت مسار پترولیوم و میدان آریا.',
    en: 'Learn when and at what amount revenue from crude oil and gas is recognised under IFRS 15: the five-step model, crude and gas sales contracts, measuring volumes and prices, partners’ entitlement, overlift and underlift, presenting royalty and government take, invoicing and receivables, and how revenue links to production accounting and cost recovery in the ERP, through Masar Petroleum and the Arya field.',
  },
  objectives: [
    {
      fa: 'الگوی پنج‌مرحله‌ای IFRS 15 را روی فروش یک محموله نفت خام و قرارداد فروش گاز اجرا کنید',
      en: 'Apply the IFRS 15 five-step model to a crude cargo sale and a gas sales contract',
    },
    {
      fa: 'مبلغ فروش را از حجم خالص اندازه‌گیری‌شده و قیمت شاخص به‌علاوه تعدیل‌ها محاسبه و قیمت‌گذاری موقت را ثبت کنید',
      en: 'Compute sales from the measured net volume and the benchmark price plus adjustments, and record provisional pricing',
    },
    {
      fa: 'سهم برداشت هر شریک را در یک قرارداد مشارکت در تولید محاسبه کنید و بهره مالکانه و سهم دولت را درست نمایش دهید',
      en: 'Compute each partner’s entitlement under a production sharing contract and present royalty and government take correctly',
    },
    {
      fa: 'بیش‌برداشت و کم‌برداشت را تشخیص دهید و با رویه‌های رایج ثبت کنید',
      en: 'Identify overlift and underlift and record them under the common policies',
    },
    {
      fa: 'جریان اسناد و ثبت‌های ERP از داده تولید تا صورت‌حساب، دریافتنی و بازیافت هزینه را شرح دهید',
      en: 'Describe the ERP document flow and postings from production data to invoicing, receivables and cost recovery',
    },
  ],
  sections: [
    /* ------------------------------------------------------------------ */
    {
      id: 'why-revenue',
      title: { fa: 'چرا درآمد نفت و گاز خاص است؟', en: 'Why Oil and Gas Revenue Is Special' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'نفت خام میدان آریا با خط لوله به پایانه صادراتی می‌رود و آنجا در نفتکش‌ها بارگیری می‌شود. در ماه آوریل، شرکت مسار پترولیوم (اپراتور، 50٪) یک محموله 200,000 بشکه‌ای بارگیری کرد؛ در حالی که سهمش از تولید آن ماه فقط 150,000 بشکه بود. قیمت محموله هم هنوز قطعی نیست، چون به میانگین قیمت شاخص در روزهای پس از بارگیری بستگی دارد. بخشی از تولید هم اصلاً مال شرکا نیست و به دولت می‌رسد. حسابدار درآمد باید به چهار پرسش پاسخ دهد:',
            en: 'Crude oil from the Arya field flows by pipeline to an export terminal, where it is loaded onto tankers. In April, Masar Petroleum (the operator, 50%) loaded a 200,000-barrel cargo, although its share of that month’s production was only 150,000 barrels. The cargo’s price is not final yet either, because it depends on the average benchmark price over the days after loading. And part of the production does not belong to the partners at all; it goes to the government. The revenue accountant has to answer four questions:',
          },
        },
        {
          type: 'list',
          ordered: true,
          items: [
            { fa: 'درآمد **کی** شناسایی می‌شود: هنگام تولید، بارگیری یا دریافت پول؟', en: '**When** is revenue recognised: on production, on loading or on payment?' },
            { fa: 'درآمد **چقدر** است، وقتی حجم باید اصلاح و قیمت بعداً قطعی شود؟', en: '**How much** is it, when the volume needs correcting and the price is fixed later?' },
            { fa: 'درآمد **چه کسی** است: سهم مسار، سهم شرکا یا سهم دولت؟', en: '**Whose** revenue is it: Masar’s share, the partners’ or the government’s?' },
            { fa: 'وقتی یک شریک بیش از سهمش برداشت کرده، **تفاوت** چگونه ثبت می‌شود؟', en: 'When one partner has lifted more than its share, how is the **difference** recorded?' },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'فرض‌های این درس', en: 'This lesson’s assumptions' },
          text: {
            fa: 'برای آموزش فرض می‌کنیم میدان آریا با یک **قرارداد مشارکت در تولید** (PSC) اداره می‌شود و شرکا همان شرکای درس «مشارکت‌ها و عملیات مشترک» هستند: مسار 50٪ (اپراتور)، انرژی البرز 30٪ و نفت دنا 20٪. نرخ بهره مالکانه، سقف نفت هزینه، نسبت تقسیم نفت سود، قیمت‌ها و حجم‌ها همه **فرضی‌اند**. در قراردادهای خدماتی، مثل بیع متقابل یا برخی ساختارهای IPC، پیمانکار سهمی از تولید ندارد و بازپرداخت هزینه به‌علاوه دستمزد می‌گیرد (نقدی یا به صورت نفت)؛ درآمد او در آن حالت درآمد خدمات است و نفتی که به جای پول می‌گیرد مابه‌ازای غیرنقدی است.',
            en: 'For teaching, we assume the Arya field is governed by a **production sharing contract** (PSC) and the partners are those of the lesson “Joint Ventures and Joint Operations”: Masar 50% (operator), Alborz Energy 30% and Dena Petroleum 20%. The royalty rate, cost-oil cap, profit-oil split, prices and volumes are all **illustrative**. Under service-type contracts, such as buy-back or some IPC structures, the contractor has no share of production and is paid cost reimbursement plus a fee (in cash or in crude); its revenue is then service revenue, and crude received instead of cash is non-cash consideration.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'five-steps',
      title: { fa: 'الگوی پنج‌مرحله‌ای IFRS 15', en: 'The IFRS 15 Five-Step Model' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'استاندارد **IFRS 15 «درآمد عملیاتی حاصل از قرارداد با مشتریان»** برای همه فروش‌ها یک الگوی پنج‌مرحله‌ای دارد. اصل آن ساده است: درآمد وقتی شناسایی می‌شود که **کنترل** کالا یا خدمت به مشتری منتقل شود، به مبلغی که شرکت انتظار دارد در برابر آن دریافت کند. جدول زیر این پنج مرحله را روی محموله آوریل مسار اجرا می‌کند.',
            en: '**IFRS 15 “Revenue from Contracts with Customers”** has one five-step model for every sale. Its core principle is simple: revenue is recognised when **control** of goods or services passes to the customer, at the amount the company expects to be entitled to in exchange. The table below runs the five steps on Masar’s April cargo.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'پنج مرحله برای محموله 200,000 بشکه‌ای مسار', en: 'The five steps for Masar’s 200,000-barrel cargo' },
          head: [
            { fa: 'مرحله', en: 'Step' },
            { fa: 'پرسش', en: 'Question' },
            { fa: 'پاسخ برای محموله نفت خام', en: 'Answer for the crude cargo' },
          ],
          rows: [
            [t('1. شناسایی قرارداد', '1. Identify the contract'), t('قرارداد قابل اجرا با مشتری داریم؟', 'Is there an enforceable contract with a customer?'), t('قرارداد فروش مدت‌دار نفت خام با یک پالایشگاه، به‌علاوه اعلام برداشت این محموله', 'A term crude sales agreement with a refiner, plus the nomination for this cargo')],
            [t('2. شناسایی تعهدهای عملکرد', '2. Identify the performance obligations'), t('چه چیزهای جداگانه‌ای وعده داده شده است؟', 'What distinct goods or services are promised?'), t('تحویل این محموله؛ اگر حمل دریایی پس از انتقال کنترل با فروشنده باشد، آن هم تعهد جداگانه است', 'Delivering this cargo; if the seller also arranges shipping after control passes, that is a separate obligation')],
            [t('3. تعیین بهای معامله', '3. Determine the transaction price'), t('چه مبلغی انتظار داریم؟', 'What amount do we expect?'), t('حجم خالص × (میانگین قیمت شاخص در دوره قیمت‌گذاری + تفاوت کیفیت و محل)؛ تا قطعی شدن، موقت', 'Net volume × (average benchmark over the pricing period + quality and location differential); provisional until fixed')],
            [t('4. تخصیص بها', '4. Allocate the price'), t('بها میان تعهدها چگونه تقسیم می‌شود؟', 'How is the price split between obligations?'), t('یک تعهد، پس همه بها به محموله؛ اگر حمل جدا باشد، به نسبت قیمت‌های مستقل', 'One obligation, so all of it goes to the cargo; if shipping is separate, by relative stand-alone prices')],
            [t('5. شناسایی درآمد', '5. Recognise revenue'), t('کنترل کی منتقل می‌شود؟', 'When does control pass?'), t('در فروش FOB، هنگام بارگیری در پایانه؛ تاریخ بارنامه (B/L)', 'Under FOB, on loading at the terminal; the bill of lading (B/L) date')],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'برای **گاز** همین پنج مرحله اجرا می‌شود، با یک تفاوت: گاز پیوسته تحویل می‌شود. هر واحد گاز (مثلاً هر میلیون بی‌تی‌یو) کالای جداگانه‌ای است که با الگوی یکسان منتقل می‌شود؛ IFRS 15 این را یک «سری» می‌داند و درآمد به‌تدریج با تحویل شناسایی می‌شود. وقتی قیمت هر واحد ثابت است، بسیاری از شرکت‌ها از راهکار عملی «حق صدور فاکتور» استفاده می‌کنند: درآمد ماه = مقدار تحویل‌شده × قیمت قرارداد.',
            en: 'For **gas** the same five steps apply, with one difference: gas is delivered continuously. Each unit of gas (for example each MMBtu) is a distinct good transferred in the same pattern; IFRS 15 treats this as a “series”, and revenue is recognised progressively as gas is delivered. When the unit price is fixed, many companies use the “right to invoice” practical expedient: the month’s revenue = quantity delivered × contract price.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'فروش FOB (تحویل روی عرشه در بندر بارگیری)', en: 'FOB sale (free on board at the loading port)' },
            items: [
              { fa: 'خریدار نفتکش را می‌آورد و هزینه حمل با اوست', en: 'The buyer brings the tanker and pays the freight' },
              { fa: 'کنترل و ریسک هنگام بارگیری منتقل می‌شود', en: 'Control and risk pass on loading' },
              { fa: 'درآمد در تاریخ بارنامه شناسایی می‌شود', en: 'Revenue is recognised at the B/L date' },
            ],
          },
          right: {
            title: { fa: 'فروش CIF (بها، بیمه و کرایه تا بندر مقصد)', en: 'CIF sale (cost, insurance and freight to destination)' },
            items: [
              { fa: 'فروشنده حمل و بیمه را تأمین می‌کند', en: 'The seller arranges freight and insurance' },
              { fa: 'معمولاً کنترل نفت هنگام بارگیری منتقل می‌شود', en: 'Control of the crude usually still passes on loading' },
              { fa: 'خدمت حمل پس از آن می‌تواند تعهد جداگانه باشد که در طول سفر شناسایی می‌شود', en: 'The freight service after that can be a separate obligation, recognised over the voyage' },
            ],
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'شرایط تحویل را از متن قرارداد و اصطلاحات اینکوترمز آن بخوانید، نه از عادت. در فروش FOB، کنترل معمولاً وقتی منتقل می‌شود که نفت از اتصال شلنگ پایانه به مخزن کشتی عبور می‌کند و بارنامه همان روز صادر می‌شود. در فروش داخلی با خط لوله، نقطه انتقال کنترل معمولاً کنتور اندازه‌گیری رسمی (Custody transfer) در نقطه تحویل است.',
            en: 'Read the delivery terms from the contract and its Incoterms, not from habit. Under FOB, control usually passes when the crude passes the connection between the terminal hose and the ship’s manifold, and the B/L is issued that day. In a domestic pipeline sale, control usually passes at the custody-transfer meter at the delivery point.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' },
          text: {
            fa: 'شناسایی درآمد هنگام تولید (نفت در مخزن هنوز فروخته نشده و موجودی است)؛ صبر کردن تا دریافت پول (درآمد با انتقال کنترل است، نه با وصول)؛ و ثبت درآمد بر اساس حجم اعلام‌شده در برنامه برداشت به جای حجم اندازه‌گیری‌شده در بارنامه و گواهی کمیت.',
            en: 'Recognising revenue on production (crude in the tanks is unsold inventory); waiting for the cash (revenue follows control, not collection); and recording revenue from the nominated volume in the lifting schedule instead of the measured volume on the B/L and certificate of quantity.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'contracts-measurement',
      title: { fa: 'قراردادهای فروش، اندازه‌گیری حجم و قیمت', en: 'Sales Contracts, Volumes and Prices' },
      blocks: [
        {
          type: 'table',
          caption: { fa: 'قرارداد فروش نفت خام و قرارداد فروش گاز', en: 'Crude sales contracts and gas sales agreements' },
          head: [
            { fa: 'ویژگی', en: 'Feature' },
            { fa: 'نفت خام', en: 'Crude oil' },
            { fa: 'گاز', en: 'Gas' },
          ],
          rows: [
            [t('نوع قرارداد', 'Contract type'), t('مدت‌دار (چند ماه یا سال) یا تک‌محموله (اسپات)', 'Term (months or years) or single-cargo (spot)'), t('قرارداد فروش گاز بلندمدت، اغلب با یک خریدار داخلی', 'Long-term gas sales agreement, often with one domestic buyer')],
            [t('تحویل', 'Delivery'), t('محموله‌ای، در پایانه یا با خط لوله', 'By cargo at a terminal, or by pipeline'), t('پیوسته از راه خط لوله، در نقطه تحویل پس از ایستگاه تقویت فشار', 'Continuously by pipeline, at the delivery point after the compressor station')],
            [t('واحد اندازه‌گیری', 'Unit of measure'), t('بشکه با حجم خالص استاندارد', 'Barrels at net standard volume'), t('انرژی (مثلاً میلیون بی‌تی‌یو)، یعنی حجم × ارزش حرارتی', 'Energy (for example MMBtu): volume × heating value')],
            [t('قیمت', 'Price'), t('شاخص بین‌المللی به‌علاوه یا منهای تفاوت', 'An international benchmark plus or minus a differential'), t('قیمت قراردادی یا فرمولی، گاهی پیوسته به نفت', 'Contract or formula price, sometimes linked to oil')],
            [t('بندهای ویژه', 'Special clauses'), t('دوره قیمت‌گذاری، مشخصات کیفیت', 'Pricing period, quality specification'), t('خرید یا پرداخت (Take-or-pay)، حداقل مقدار سالانه، گاز جبرانی', 'Take-or-pay, annual minimum quantity, make-up gas')],
          ],
        },
        {
          type: 'p',
          text: {
            fa: '**اندازه‌گیری حجم.** درآمد با حجمی محاسبه می‌شود که در کنتور اندازه‌گیری رسمی ثبت و به **شرایط استاندارد** (دما و فشار استاندارد) اصلاح شده است. سپس **آب و رسوب (BS&W)** که نفت نیست کم می‌شود تا **حجم خالص استاندارد** به دست آید. یک بازرس مستقل این اعداد را در **گواهی کمیت و کیفیت** تأیید می‌کند و همین عدد روی بارنامه و فاکتور می‌آید.',
            en: '**Measuring the volume.** Revenue is computed on the volume recorded by the custody-transfer meter and corrected to **standard conditions** (standard temperature and pressure). Then the **water and sediment (BS&W)**, which is not oil, is deducted to give the **net standard volume**. An independent inspector confirms these figures in the **certificate of quantity and quality**, and that number goes on the B/L and the invoice.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'از کنتور تا فاکتور: محموله آوریل مسار (بشکه، فرضی)', en: 'From meter to invoice: Masar’s April cargo (barrels, illustrative)' },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'بشکه', en: 'Barrels' },
          ],
          numericCols: [1],
          rows: [
            [t('حجم ناخالص استاندارد (اصلاح‌شده به دما و فشار استاندارد)', 'Gross standard volume (corrected to standard temperature and pressure)'), 201000],
            [t('کسر می‌شود: آب و رسوب (BS&W)', 'Less: water and sediment (BS&W)'), 1000],
            [t('**حجم خالص استاندارد (روی بارنامه)**', '**Net standard volume (on the B/L)**'), 200000],
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'انرژی گاز (میلیون بی‌تی‌یو) = حجم استاندارد گاز × ارزش حرارتی',
            en: 'Gas energy (MMBtu) = Standard gas volume × Heating value',
          },
          note: {
            fa: 'مثال فرضی آوریل: 1,000 میلیون فوت مکعب استاندارد × 1,000 بی‌تی‌یو برای هر فوت مکعب = 1,000,000 میلیون بی‌تی‌یو. گاز با ارزش حرارتی بالاتر، به ازای همان حجم، انرژی و درآمد بیشتری دارد.',
            en: 'Illustrative April example: 1,000 million standard cubic feet × 1,000 Btu per cubic foot = 1,000,000 MMBtu. Gas with a higher heating value carries more energy, and more revenue, for the same volume.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**قیمت.** نفت خام معمولاً با یک **قیمت شاخص** بین‌المللی (مثل برنت یا دبی/عمان) قیمت‌گذاری می‌شود: میانگین قیمت‌های روزانه شاخص در یک **دوره قیمت‌گذاری** (مثلاً 5 روز کاری پس از بارنامه) به‌علاوه یا منهای یک **تفاوت قیمت** برای کیفیت (چگالی API و گوگرد) و محل تحویل. چون دوره قیمت‌گذاری پس از بارگیری تمام می‌شود، فاکتور اول **موقت** است و پس از قطعی شدن قیمت، فاکتور نهایی صادر می‌شود.',
            en: '**Price.** Crude is usually priced off an international **benchmark** (such as Brent or Dubai/Oman): the average of daily benchmark quotes over a **pricing period** (for example 5 business days after the B/L) plus or minus a **differential** for quality (API gravity and sulphur) and delivery location. Because the pricing period ends after loading, the first invoice is **provisional**, and a final invoice follows once the price is fixed.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'مبلغ فروش = حجم خالص استاندارد × (میانگین قیمت شاخص در دوره قیمت‌گذاری ± تفاوت قیمت)',
            en: 'Sales amount = Net standard volume × (Average benchmark over the pricing period ± Differential)',
          },
          note: {
            fa: 'محموله آوریل: موقت 200,000 × 71.00 = 14,200,000؛ نهایی 200,000 × (72.00 منهای 2.00) = 14,000,000. همه قیمت‌ها برای هر بشکه و فرضی‌اند.',
            en: 'April cargo: provisional 200,000 × 71.00 = 14,200,000; final 200,000 × (72.00 minus 2.00) = 14,000,000. All prices are per barrel and illustrative.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'فروش با قیمت موقت و تعدیل نهایی', en: 'Sale at a provisional price and the final adjustment' },
          entries: [
            {
              date: t('12 آوریل (تاریخ بارنامه)', '12 Apr (B/L date)'),
              lines: [
                { account: ac.ar, debit: 14200000 },
                { account: ac.oilRevenue, credit: 14200000 },
              ],
              memo: t('فاکتور موقت: 200,000 بشکه × 71.00', 'Provisional invoice: 200,000 bbl × 71.00'),
            },
            {
              date: t('26 آوریل (قیمت قطعی)', '26 Apr (price fixed)'),
              lines: [
                { account: ac.pricingAdj, debit: 200000 },
                { account: ac.ar, credit: 200000 },
              ],
              memo: t('فاکتور نهایی با قیمت 70.00: کاهش 200,000', 'Final invoice at 70.00: a reduction of 200,000'),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'قیمت‌گذاری موقت (آشنایی)', en: 'Provisional pricing (introduction)' },
          text: {
            fa: 'تغییر قیمت پس از بارگیری از تغییر قیمت بازار می‌آید، نه از تحویل بیشتر. بسیاری از شرکت‌ها حساب دریافتنی این فروش‌ها را طبق IFRS 9 به ارزش منصفانه از راه سود و زیان اندازه‌گیری می‌کنند و تغییرات بعدی را جدا از «درآمد حاصل از قرارداد با مشتریان» نشان می‌دهند (مثلاً «تعدیل قیمت فروش‌های موقت»). جزئیات رویه در شرکت‌ها فرق می‌کند؛ رویه گروه را دنبال کنید و آن را افشا کنید.',
            en: 'A price change after loading comes from market movements, not from delivering more. Many companies measure the receivable on these sales at fair value through profit or loss under IFRS 9 and show later changes apart from “revenue from contracts with customers” (for example as “provisional pricing adjustments”). The details vary between companies; follow the group policy and disclose it.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'در عمل: گاز و بند خرید یا پرداخت', en: 'In practice: gas and take-or-pay' },
          text: {
            fa: 'گاز همراه میدان آریا پس از ایستگاه تقویت فشار به یک خریدار داخلی تحویل می‌شود و درآمدش به‌تدریج با تحویل شناسایی می‌شود. در بند **خرید یا پرداخت**، خریدار حتی برای گازی که نبرده، تا حداقل مقدار قرارداد پول می‌دهد و اغلب حق دارد آن را بعداً بگیرد (گاز جبرانی). پولی که برای گاز تحویل‌نشده با حق برداشت بعدی می‌گیرید **درآمد نیست**؛ **بدهی قراردادی** است تا وقتی گاز تحویل شود یا حق برداشت منقضی شود (تمرین آخر).',
            en: 'Associated gas from the Arya field is delivered to a domestic buyer after the compressor station, and its revenue is recognised progressively as it is delivered. Under a **take-or-pay** clause, the buyer pays up to the contract minimum even for gas it did not take, and often has the right to take it later (make-up gas). Cash received for undelivered gas with a later right to take it is **not revenue**; it is a **contract liability** until the gas is delivered or the right expires (last exercise).',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'entitlement',
      title: { fa: 'سهم برداشت، بهره مالکانه و سهم دولت', en: 'Entitlement, Royalty and Government Take' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'پیش از فروش باید معلوم شود هر بشکه مال کیست. اول **حسابداری تولید** کار می‌کند: حجم کنتور رسمی میدان به چاه‌های AR-01 تا AR-12 بازتخصیص داده می‌شود (بر اساس آزمایش چاه‌ها). بعد قرارداد نفتی تولید را تقسیم می‌کند. **سهم برداشت** (Entitlement) هر طرف، مقدار نفتی است که حق دارد در آن دوره بردارد و بفروشد.',
            en: 'Before anything is sold, we must know whose each barrel is. **Production accounting** comes first: the field’s fiscal meter volume is allocated back to wells AR-01 to AR-12 (based on well tests). Then the petroleum contract splits the production. Each party’s **entitlement** is the volume it has the right to lift and sell for that period.',
          },
        },
        {
          type: 'diagram',
          id: 'cost-recovery',
          caption: {
            fa: 'تقسیم تولید در قرارداد مشارکت در تولید: بهره مالکانه، نفت هزینه (با سقف) و تقسیم نفت سود. جزئیات هر قرارداد فرق می‌کند و اعداد فرضی‌اند.',
            en: 'The production split under a production sharing contract: royalty, cost oil (capped) and the profit-oil split. Each contract differs, and the figures are illustrative.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'تقسیم تولید آوریل میدان آریا (بشکه)؛ بهره مالکانه 10٪، سقف نفت هزینه 40٪ و سهم پیمانکار از نفت سود 40٪، همه فرضی',
            en: 'Splitting April production at the Arya field (barrels); royalty 10%, cost-oil cap 40% and contractor profit-oil share 40%, all illustrative',
          },
          head: [
            { fa: 'گام', en: 'Step' },
            { fa: 'محاسبه', en: 'Calculation' },
            { fa: 'پیمانکاران', en: 'Contractor group' },
            { fa: 'دولت', en: 'Government' },
          ],
          numericCols: [2, 3],
          rows: [
            [t('تولید ماه (کنتور رسمی)', 'Production for the month (fiscal meter)'), t('625,000', '625,000'), blank, blank],
            [t('بهره مالکانه (به صورت نفت)', 'Royalty (taken in kind)'), t('10٪ × 625,000', '10% × 625,000'), blank, 62500],
            [t('نفت هزینه', 'Cost oil'), t('هزینه‌های قابل بازیافت 8,750,000 ÷ 70 = 125,000؛ کمتر از سقف 250,000', 'Recoverable costs 8,750,000 ÷ 70 = 125,000; below the 250,000 cap'), 125000, blank],
            [t('نفت سود', 'Profit oil'), t('625,000 منهای 62,500 منهای 125,000 = 437,500؛ تقسیم 40٪ و 60٪', '625,000 minus 62,500 minus 125,000 = 437,500; split 40% and 60%'), 175000, 262500],
            [t('**جمع**', '**Total**'), t('625,000', '625,000'), 300000, 325000],
          ],
        },
        {
          type: 'table',
          caption: { fa: 'سهم برداشت شرکا از 300,000 بشکه پیمانکاران', en: 'Partners’ entitlement from the contractor group’s 300,000 barrels' },
          head: [
            { fa: 'شریک', en: 'Partner' },
            { fa: 'سهم مشارکت', en: 'Working interest' },
            { fa: 'سهم برداشت (بشکه)', en: 'Entitlement (barrels)' },
          ],
          numericCols: [2],
          rows: [
            [t('مسار پترولیوم (اپراتور)', 'Masar Petroleum (operator)'), t('50٪', '50%'), 150000],
            [t('انرژی البرز', 'Alborz Energy'), t('30٪', '30%'), 90000],
            [t('نفت دنا', 'Dena Petroleum'), t('20٪', '20%'), 60000],
            [t('**جمع**', '**Total**'), t('100٪', '100%'), 300000],
          ],
        },
        {
          type: 'p',
          text: {
            fa: '**نمایش بهره مالکانه و سهم دولت (کلی).** بشکه‌هایی که دولت به صورت نفت برمی‌دارد (بهره مالکانه 62,500 و نفت سود 262,500) هرگز در کنترل مسار نیستند، پس **درآمد مسار نیستند** و هیچ ثبتی ندارند. اگر قراردادی بهره مالکانه را **نقدی** بگیرد و پیمانکار همه بشکه‌ها را بفروشد، باید قضاوت شود: اگر پیمانکار در واقع نفت دولت را از طرف دولت می‌فروشد، کارگزار است و درآمد را خالص نشان می‌دهد؛ اگر بهره مالکانه مالیاتی بر تولید خود اوست، بسیاری از شرکت‌ها درآمد را ناخالص و بهره مالکانه را جداگانه به‌عنوان هزینه یا مالیات تولید نشان می‌دهند. رویه‌ها متفاوت است؛ رویه گروه را بخوانید و افشا کنید.',
            en: '**Presenting royalty and government take (general).** Barrels the government takes in kind (royalty 62,500 and profit oil 262,500) are never controlled by Masar, so they are **not Masar’s revenue** and need no entry. If a contract takes royalty **in cash** and the contractor sells every barrel, judgement is needed: if the contractor is really selling the government’s oil on its behalf, it is an agent and shows revenue net; if the royalty is a levy on its own production, many companies show revenue gross and the royalty separately as a cost or production tax. Practice varies; read the group policy and disclose it.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در برخی قراردادهای مشارکت در تولید، از جمله EPSAهای عمان، دولت مالیات بر درآمد پیمانکار را از سهم خودش می‌پردازد (درس «مالیات بر درآمد شرکت‌ها در عمان»). بعضی شرکت‌ها این مالیات را هم به‌عنوان درآمد و هم به‌عنوان هزینه مالیات نشان می‌دهند (ناخالص‌سازی) و بعضی هیچ‌کدام را. هر انتخابی که گروه کرده، باید در همه دوره‌ها یکسان اجرا و افشا شود.',
            en: 'Under some production sharing contracts, including Oman’s EPSAs, the government pays the contractor’s income tax out of its own share (see the lesson “Corporate Income Tax in Oman”). Some companies show that tax both as revenue and as tax expense (grossing up), others show neither. Whichever the group has chosen must be applied consistently in every period and disclosed.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' },
          text: {
            fa: 'ضرب سهم مشارکت در کل تولید (50٪ × 625,000 = 312,500) و فراموش کردن سهم دولت؛ استفاده از هزینه‌های ماه بدون کنترل سقف نفت هزینه؛ و محاسبه سهم برداشت با حجم تخمینی، پیش از نهایی شدن تخصیص تولید. سهم برداشت درست مسار در آوریل 150,000 بشکه است، نه 312,500.',
            en: 'Multiplying the working interest by total production (50% × 625,000 = 312,500) and forgetting the government’s share; using the month’s costs without checking the cost-oil cap; and computing entitlement on estimated volumes before production allocation is final. Masar’s correct April entitlement is 150,000 barrels, not 312,500.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'overlift-underlift',
      title: { fa: 'بیش‌برداشت و کم‌برداشت', en: 'Overlift and Underlift' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'نفتکش‌ها اندازه ثابتی دارند و شرکا به نوبت برداشت می‌کنند؛ پس در هر ماه برداشت هر شریک با سهمش برابر نیست. شریکی که بیش از سهمش برداشته، **بیش‌برداشت** (Overlift) دارد و به بقیه نفت بدهکار است؛ شریکی که کمتر برداشته، **کم‌برداشت** (Underlift) دارد و از بقیه نفت طلبکار است. این تفاوت‌ها معمولاً با برداشت‌های بعدی **به صورت نفت** جبران می‌شوند و طبق توافق برداشت، گاهی نقدی تسویه می‌شوند.',
            en: 'Tankers come in fixed sizes and partners lift in turns, so in any month a partner’s liftings rarely equal its entitlement. A partner that lifted more than its share is **overlifted** and owes oil to the others; one that lifted less is **underlifted** and is owed oil. These imbalances are usually made good **in kind** through later liftings, and sometimes settled in cash under the lifting agreement.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'برداشت‌های آوریل در برابر سهم برداشت (بشکه)', en: 'April liftings against entitlement (barrels)' },
          head: [
            { fa: 'شریک', en: 'Partner' },
            { fa: 'سهم برداشت', en: 'Entitlement' },
            { fa: 'برداشت واقعی', en: 'Actual liftings' },
            { fa: 'وضعیت', en: 'Position' },
          ],
          numericCols: [1, 2],
          rows: [
            [t('مسار پترولیوم', 'Masar Petroleum'), 150000, 200000, t('بیش‌برداشت 50,000', 'Overlifted 50,000')],
            [t('انرژی البرز', 'Alborz Energy'), 90000, 40000, t('کم‌برداشت 50,000', 'Underlifted 50,000')],
            [t('نفت دنا', 'Dena Petroleum'), 60000, 60000, t('متعادل', 'In balance')],
            [t('**جمع**', '**Total**'), 300000, 300000, t('جمع تفاوت‌ها صفر', 'Imbalances net to zero')],
          ],
        },
        {
          type: 'p',
          text: {
            fa: '**درآمد مسار چقدر است؟** کمیته تفسیر IFRS در مارس 2019 گفت شریک عملیات مشترک فقط برای خروجی‌ای درآمد شناسایی می‌کند که واقعاً به مشتریانش فروخته است، نه برای سهمش از تولید. پس درآمد IFRS 15 مسار در آوریل فروش 200,000 بشکه است: **14,000,000** (با قیمت نهایی 70). اما کمیته نگفت تفاوت با سهم برداشت را چگونه ثبت کنیم؛ برای همین **رویه‌ها متفاوت است**. دو رویه رایج: اندازه‌گیری بیش‌برداشت و کم‌برداشت به **ارزش بازار** یا به **بهای تمام‌شده تولید**.',
            en: '**What is Masar’s revenue?** In March 2019 the IFRS Interpretations Committee said that a joint operator recognises revenue only for the output it has actually sold to its customers, not for its share of production. So Masar’s IFRS 15 revenue for April is the sale of 200,000 barrels: **14,000,000** (at the final price of 70). But the Committee did not say how to record the difference from entitlement, so **practice varies**. Two common policies: measuring overlift and underlift at **market value** or at **production cost**.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'رویه ارزش بازار', en: 'Market value policy' },
            items: [
              { fa: 'بیش‌برداشت: بدهی به قیمت بازار (50,000 × 70 = 3,500,000)', en: 'Overlift: a liability at market price (50,000 × 70 = 3,500,000)' },
              { fa: 'اثر خالص در سود و زیان برابر ارزش سهم برداشت (150,000 × 70 = 10,500,000)', en: 'Net effect in profit or loss equals the value of the entitlement (150,000 × 70 = 10,500,000)' },
              { fa: 'بدهی در هر دوره با قیمت روز دوباره اندازه‌گیری می‌شود', en: 'The liability is remeasured at the current price each period' },
            ],
          },
          right: {
            title: { fa: 'رویه بهای تمام‌شده', en: 'Cost policy' },
            items: [
              { fa: 'بیش‌برداشت: بدهی به بهای تولید (مثلاً 50,000 × 20 = 1,000,000)', en: 'Overlift: a liability at production cost (for example 50,000 × 20 = 1,000,000)' },
              { fa: 'سود فروش بشکه‌های اضافه در همین دوره در سود و زیان می‌ماند', en: 'The margin on the extra barrels stays in this period’s profit' },
              { fa: 'به رفتار موجودی کالا نزدیک‌تر است', en: 'Closer to how inventory is treated' },
            ],
          },
        },
        {
          type: 'journal',
          title: { fa: 'دفاتر مسار در آوریل (رویه ارزش بازار)', en: 'Masar’s books in April (market value policy)' },
          entries: [
            {
              date: t('آوریل', 'April'),
              lines: [
                { account: ac.ar, debit: 14000000 },
                { account: ac.oilRevenue, credit: 14000000 },
              ],
              memo: t('فروش 200,000 بشکه با قیمت نهایی 70 (درآمد IFRS 15؛ تعدیل قیمت موقت در بخش قبل جداگانه آمد)', 'Sale of 200,000 bbl at the final price of 70 (IFRS 15 revenue; the provisional price adjustment was shown separately above)'),
            },
            {
              date: t('30 آوریل', '30 Apr'),
              lines: [
                { account: ac.imbalance, debit: 3500000 },
                { account: ac.overlift, credit: 3500000 },
              ],
              memo: t('بیش‌برداشت 50,000 بشکه × 70؛ در بهای تمام‌شده فروش یا درآمد دیگر نشان داده می‌شود، نه به‌عنوان درآمد IFRS 15', 'Overlift of 50,000 bbl × 70; shown in cost of sales or as other revenue, not as IFRS 15 revenue'),
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'در دفاتر **انرژی البرز** (کم‌برداشت 50,000 بشکه) تصویر آینه‌ای است: با رویه ارزش بازار، **دارایی کم‌برداشت** 3,500,000 بدهکار و حساب تعدیل بستانکار می‌شود. وقتی در ماه‌های بعد البرز بیشتر و مسار کمتر برداشت کند، این مانده‌ها برگشت می‌خورند.',
            en: 'In **Alborz Energy’s** books (underlifted by 50,000 barrels) the picture is the mirror image: under the market value policy it debits an **underlift asset** of 3,500,000 and credits the adjustment account. When Alborz lifts more and Masar less in later months, these balances reverse.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'دفاتر انرژی البرز در آوریل (رویه ارزش بازار)', en: 'Alborz Energy’s books in April (market value policy)' },
          entries: [
            {
              date: t('30 آوریل', '30 Apr'),
              lines: [
                { account: ac.underlift, debit: 3500000 },
                { account: ac.imbalanceAlborz, credit: 3500000 },
              ],
              memo: t('کم‌برداشت 50,000 بشکه × 70؛ البرز فقط فروش واقعی 40,000 بشکه خودش را درآمد IFRS 15 می‌داند', 'Underlift of 50,000 bbl × 70; Alborz treats only the actual sale of its 40,000 bbl as IFRS 15 revenue'),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'اپراتور هر ماه یک **صورت وضعیت برداشت** برای همه شرکا صادر می‌کند: سهم برداشت، برداشت واقعی و مانده انباشته بیش‌برداشت و کم‌برداشت هر شریک، به بشکه. حسابدار درآمد همین گزارش را با دفاتر خودش تطبیق می‌دهد و ثبت ماهانه تفاوت را می‌زند. توافق برداشت (Lifting agreement) میان شرکا تعیین می‌کند مانده‌ها چگونه و تا کی تسویه شوند؛ آن را بخوانید.',
            en: 'Each month the operator issues a **lifting statement** to all partners: each partner’s entitlement, actual liftings and cumulative overlift or underlift balance, in barrels. The revenue accountant reconciles it to the books and posts the monthly imbalance entry. The partners’ lifting agreement sets how and by when balances are settled; read it.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'رویه‌ها متفاوت است', en: 'Practice varies' },
          text: {
            fa: 'IFRS برای بیش‌برداشت و کم‌برداشت قاعده مشخصی ندارد. بعضی شرکت‌ها تفاوت را در بهای تمام‌شده فروش می‌برند و بعضی در «درآمد دیگر»، بعضی به ارزش بازار و بعضی به بهای تمام‌شده. آنچه اشتباه است: نشان دادن سهم برداشت به جای فروش واقعی به‌عنوان درآمد IFRS 15، و ثبت نکردن تفاوت. رویه گروه را دنبال کنید، آن را یکسان اجرا و در یادداشت‌ها افشا کنید.',
            en: 'IFRS has no specific rule for overlift and underlift. Some companies put the adjustment in cost of sales, others in “other revenue”; some measure at market value, others at cost. What is wrong: presenting entitlement instead of actual sales as IFRS 15 revenue, and not recording the imbalance at all. Follow the group policy, apply it consistently and disclose it in the notes.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'billing-erp',
      title: { fa: 'صورت‌حساب، دریافتنی‌ها و ERP', en: 'Invoicing, Receivables and the ERP' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در مشارکت میدان آریا، هر شریک سهم نفت خودش را جداگانه به خریداران خودش می‌فروشد و فاکتور می‌کند؛ پس فاکتور محموله مسار فقط درآمد مسار است. اسناد پشتیبان هر فاکتور نفت: **اعلام برداشت**، **بارنامه**، **گواهی کمیت و کیفیت** بازرس مستقل، و در صورت نیاز **اعتبار اسنادی** خریدار. شرط پرداخت معمولاً چند روز پس از تاریخ بارنامه است (مثلاً 30 روز). گاز اغلب به‌طور مشترک فروخته می‌شود: اپراتور به‌عنوان کارگزار شرکا کل گاز را فاکتور می‌کند و سهم شرکا را به حساب آن‌ها می‌برد.',
            en: 'In the Arya field joint venture, each partner sells and invoices its own share of crude to its own buyers, so the invoice for Masar’s cargo is Masar’s revenue only. The supporting documents for each crude invoice: the **nomination**, the **bill of lading**, the independent inspector’s **certificate of quantity and quality**, and, where required, the buyer’s **letter of credit**. Payment is usually due a set number of days after the B/L date (for example 30 days). Gas is often sold jointly: the operator invoices all the gas as the partners’ agent and credits the partners’ shares to their accounts.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'داده‌های پایه درآمد در ERP', en: 'Revenue master data in the ERP' },
          head: [
            { fa: 'داده پایه', en: 'Master data' },
            { fa: 'نمونه در مسار پترولیوم', en: 'Example at Masar Petroleum' },
          ],
          rows: [
            [t('محصول (کالا)', 'Product (material)'), t('نفت خام آریا، گاز فروش، میعانات؛ هر کدام با واحد اندازه‌گیری خودش', 'Arya crude, sales gas, condensate; each with its own unit of measure')],
            [t('مشتری', 'Customer'), t('پالایشگاه خریدار با سقف اعتبار، شرط پرداخت و ارز (USD)', 'The refiner buyer, with credit limit, payment terms and currency (USD)')],
            [t('قرارداد فروش و شرایط قیمت', 'Sales contract and pricing conditions'), t('شاخص، تفاوت قیمت، دوره قیمت‌گذاری، اینکوترمز', 'Benchmark, differential, pricing period, Incoterms')],
            [t('نقطه تحویل و کنتور رسمی', 'Delivery point and fiscal meter'), t('پایانه صادراتی برای نفت؛ خروجی ایستگاه تقویت فشار برای گاز', 'The export terminal for crude; the compressor station outlet for gas')],
            [t('قرارداد نفتی و مشارکت', 'Petroleum contract and joint venture'), t('نرخ بهره مالکانه، سقف نفت هزینه، نسبت تقسیم، سهم‌های مشارکت 50، 30 و 20', 'Royalty rate, cost-oil cap, profit split, working interests of 50, 30 and 20')],
            [t('تعیین حساب درآمد', 'Revenue account determination'), t('4110 نفت، 4120 گاز، 4150 تعدیل قیمت؛ با مرکز سود میدان آریا', '4110 crude, 4120 gas, 4150 pricing adjustments; with the Arya field profit centre')],
          ],
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: '1. داده تولید', en: '1. Production data' },
              text: { fa: 'خواندن کنتورها، آزمایش چاه‌ها و موجودی مخازن روزانه در ماژول حسابداری تولید ثبت می‌شود.', en: 'Meter readings, well tests and tank stocks are captured daily in the production accounting module.' },
            },
            {
              title: { fa: '2. تخصیص و سهم برداشت', en: '2. Allocation and entitlement' },
              text: {
                fa: 'تولید به چاه‌ها تخصیص داده می‌شود؛ سپس ERP با هزینه‌های قابل بازیافت ماه (هزینه‌هایی با نشان R روی موضوع هزینه درست) نفت هزینه، نفت سود و سهم برداشت هر شریک را حساب می‌کند.',
                en: 'Production is allocated to wells; the ERP then uses the month’s recoverable costs (costs with the R flag on the right cost object) to compute cost oil, profit oil and each partner’s entitlement.',
              },
            },
            {
              title: { fa: '3. برنامه برداشت و قرارداد فروش', en: '3. Lifting schedule and sales contract' },
              text: { fa: 'هماهنگ‌کننده برداشت، اعلام‌های برداشت را با سهم‌ها تطبیق می‌دهد؛ قرارداد فروش با داده پایه مشتری و شرایط قیمت (شاخص، تفاوت، دوره قیمت‌گذاری) در ERP تعریف شده است.', en: 'The lifting coordinator matches nominations to entitlements; the sales contract is set up in the ERP with the customer master and pricing conditions (benchmark, differential, pricing period).' },
            },
            {
              title: { fa: '4. تحویل و صورت‌حساب', en: '4. Delivery and billing' },
              text: { fa: 'ثبت بارنامه با حجم گواهی‌شده، فاکتور موقت و ثبت خودکار درآمد را می‌سازد؛ پس از قطعی شدن قیمت، فاکتور نهایی صادر می‌شود.', en: 'Posting the B/L with the certified volume creates the provisional invoice and the automatic revenue posting; once the price is fixed, the final invoice follows.' },
            },
            {
              title: { fa: '5. وصول و تطبیق', en: '5. Collection and reconciliation' },
              text: { fa: 'خزانه‌داری وصول را با فاکتور تسویه می‌کند؛ حسابدار درآمد مانده بیش‌برداشت و کم‌برداشت را با صورت وضعیت برداشت تطبیق و ثبت ماهانه را انجام می‌دهد.', en: 'Treasury clears the collection against the invoice; the revenue accountant reconciles overlift and underlift to the lifting statement and posts the monthly entry.' },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'چه کسی چه می‌کند؟', en: 'Who does what?' },
          head: [
            { fa: 'نقش', en: 'Role' },
            { fa: 'مسئولیت و تأیید', en: 'Responsibility and approval' },
          ],
          rows: [
            [t('حسابدار تولید', 'Production accountant'), t('تخصیص تولید به چاه‌ها، محاسبه سهم برداشت و صورت وضعیت برداشت', 'Allocates production to wells, computes entitlement and the lifting statement')],
            [t('بازاریابی نفت و هماهنگ‌کننده برداشت', 'Crude marketing and lifting coordinator'), t('قرارداد فروش، اعلام برداشت و برنامه نفتکش‌ها؛ تأیید قیمت و مشتری با مدیر بازاریابی', 'Sales contracts, nominations and tanker schedule; price and customer approved by the marketing manager')],
            [t('حسابدار درآمد', 'Revenue accountant'), t('فاکتور موقت و نهایی، ثبت تفاوت برداشت، تطبیق درآمد با حجم‌ها', 'Provisional and final invoices, imbalance entries, reconciling revenue to volumes')],
            [t('کنترل اعتبار و خزانه‌داری', 'Credit control and treasury'), t('سقف اعتبار خریدار، اعتبار اسنادی، وصول و پیگیری معوقات', 'Buyer credit limits, letters of credit, collection and follow-up of overdue items')],
            [t('حسابدار مشارکت و بازیافت هزینه', 'JV and cost recovery accountant'), t('هزینه‌های قابل بازیافت ماه برای محاسبه نفت هزینه، گزارش به دولت و شرکا', 'The month’s recoverable costs for the cost-oil calculation, reports to the government and partners')],
          ],
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های خودکار ERP: وصول نفت و فروش مشترک گاز', en: 'ERP automatic postings: crude collection and a joint gas sale' },
          entries: [
            {
              date: t('12 مه (30 روز پس از بارنامه)', '12 May (30 days after the B/L)'),
              lines: [
                { account: ac.bank, debit: 14000000 },
                { account: ac.ar, credit: 14000000 },
              ],
              memo: t('وصول فاکتور نهایی محموله آوریل', 'Collection of the April cargo’s final invoice'),
            },
            {
              date: t('30 آوریل', '30 Apr'),
              lines: [
                { account: ac.ar, debit: 4000000 },
                { account: ac.gasRevenue, credit: 2000000 },
                { account: ac.alborz, credit: 1200000 },
                { account: ac.dena, credit: 800000 },
              ],
              memo: t('گاز آوریل: 1,000,000 میلیون بی‌تی‌یو × 4.00 (فرضی)؛ مسار به‌عنوان کارگزار کل را فاکتور می‌کند و فقط 50٪ سهم خودش درآمد است', 'April gas: 1,000,000 MMBtu × 4.00 (illustrative); Masar invoices it all as agent, and only its own 50% is revenue'),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'در عمل: پیوند درآمد و بازیافت هزینه', en: 'In practice: the link between revenue and cost recovery' },
          text: {
            fa: 'هر هزینه‌ای که با موضوع هزینه یا نشان بازیافت اشتباه ثبت شود، مستقیم درآمد را کم می‌کند: اگر 700,000 هزینه قابل بازیافت به اشتباه N بخورد، با قیمت 70 حدود 10,000 بشکه نفت هزینه کمتر محاسبه می‌شود (جزئیات در درس «بازیافت هزینه در قراردادهای نفتی»). برای همین زنجیره «کد هزینه درست، سند پشتیبان، نشان بازیافت» در خرید و انبار، در آخر به سهم برداشت و درآمد می‌رسد. پیش از بستن ماه، گزارش هزینه‌های قابل بازیافت را با دفتر کل تطبیق دهید.',
            en: 'Every cost recorded with the wrong cost object or recoverable flag directly reduces revenue: if 700,000 of recoverable costs are wrongly flagged N, at a price of 70 about 10,000 fewer barrels of cost oil are calculated (details in the lesson “Cost Recovery in Petroleum Contracts”). That is why the chain “right cost code, supporting document, recoverable flag” in procurement and the warehouse ends up in entitlement and revenue. Before closing the month, reconcile the recoverable cost report to the general ledger.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' },
          text: {
            fa: 'فاکتور با حجم اعلام‌شده به جای حجم گواهی‌شده؛ ثبت کل فروش مشترک گاز به‌عنوان درآمد اپراتور (سهم شرکا درآمد او نیست)؛ فراموش کردن تعدیل قیمت موقت در پایان دوره؛ و بستن ماه بدون تطبیق مانده بیش‌برداشت و کم‌برداشت با صورت وضعیت برداشت.',
            en: 'Invoicing the nominated volume instead of the certified volume; booking the whole joint gas sale as the operator’s revenue (the partners’ shares are not its revenue); forgetting the provisional price adjustment at period end; and closing the month without reconciling overlift and underlift to the lifting statement.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'practice',
      title: { fa: 'تمرین', en: 'Practice' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در همه تمرین‌ها سهم‌ها همان سهم‌های مشارکت آریاست: مسار 50٪، البرز 30٪ و دنا 20٪. قیمت‌ها برای هر بشکه یا هر میلیون بی‌تی‌یو و همه فرضی‌اند. اول خودتان حل کنید.',
            en: 'In all exercises the shares are the Arya JV interests: Masar 50%, Alborz 30% and Dena 20%. Prices are per barrel or per MMBtu, and all are illustrative. Solve it yourself first.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'از کنتور تا فاکتور', en: 'From meter to invoice' },
          difficulty: 'easy',
          problem: {
            fa: 'مسار در 8 ژوئن محموله‌ای FOB بارگیری کرد. حجم ناخالص استاندارد 151,000 بشکه و آب و رسوب 1,000 بشکه است. قیمت قطعی همان روز معلوم است: میانگین شاخص 75.50 منهای تفاوت کیفیت 1.50. حجم فاکتور، مبلغ فاکتور، تاریخ شناسایی درآمد و ثبت آن را بنویسید.',
            en: 'On 8 June Masar loaded an FOB cargo. The gross standard volume is 151,000 barrels and the water and sediment 1,000 barrels. The final price is already known: benchmark average 75.50 minus a quality differential of 1.50. Give the invoiced volume, the invoice amount, the recognition date and the entry.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('حجم خالص', 'Net volume'), text: t('151,000 منهای 1,000 = 150,000 بشکه', '151,000 minus 1,000 = 150,000 barrels') },
                { title: t('قیمت', 'Price'), text: t('75.50 منهای 1.50 = 74.00', '75.50 minus 1.50 = 74.00') },
                { title: t('مبلغ', 'Amount'), text: t('150,000 × 74.00 = 11,100,000', '150,000 × 74.00 = 11,100,000') },
                { title: t('تاریخ', 'Date'), text: t('در فروش FOB، کنترل هنگام بارگیری منتقل می‌شود: 8 ژوئن، تاریخ بارنامه', 'Under FOB, control passes on loading: 8 June, the B/L date') },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: t('8 ژوئن', '8 Jun'),
                  lines: [
                    { account: ac.ar, debit: 11100000 },
                    { account: ac.oilRevenue, credit: 11100000 },
                  ],
                },
              ],
            },
          ],
          answer: {
            fa: '150,000 بشکه × 74.00 = 11,100,000، شناسایی‌شده در 8 ژوئن.',
            en: '150,000 barrels × 74.00 = 11,100,000, recognised on 8 June.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'محاسبه سهم برداشت', en: 'Computing entitlement' },
          difficulty: 'medium',
          problem: {
            fa: 'تولید ماه مه میدان آریا 500,000 بشکه است. بهره مالکانه 10٪ به صورت نفت، هزینه‌های قابل بازیافت ماه 6,300,000 و قیمت محاسبه 70 است. سقف نفت هزینه 40٪ تولید و سهم پیمانکار از نفت سود 40٪ است. سهم پیمانکاران، دولت و هر شریک را حساب کنید.',
            en: 'May production at the Arya field is 500,000 barrels. Royalty is 10% in kind, the month’s recoverable costs are 6,300,000 and the calculation price is 70. The cost-oil cap is 40% of production and the contractor’s profit-oil share is 40%. Compute the shares of the contractor group, the government and each partner.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('بهره مالکانه', 'Royalty'), text: t('10٪ × 500,000 = 50,000 (دولت)', '10% × 500,000 = 50,000 (government)') },
                { title: t('نفت هزینه', 'Cost oil'), text: t('6,300,000 ÷ 70 = 90,000؛ سقف 40٪ × 500,000 = 200,000 است، پس 90,000', '6,300,000 ÷ 70 = 90,000; the cap is 40% × 500,000 = 200,000, so 90,000') },
                { title: t('نفت سود', 'Profit oil'), text: t('500,000 منهای 50,000 منهای 90,000 = 360,000؛ پیمانکاران 40٪ = 144,000 و دولت 60٪ = 216,000', '500,000 minus 50,000 minus 90,000 = 360,000; contractors 40% = 144,000 and government 60% = 216,000') },
                { title: t('جمع‌ها', 'Totals'), text: t('پیمانکاران 90,000 + 144,000 = 234,000؛ دولت 50,000 + 216,000 = 266,000؛ کنترل: 500,000', 'Contractors 90,000 + 144,000 = 234,000; government 50,000 + 216,000 = 266,000; check: 500,000') },
              ],
            },
            {
              type: 'table',
              head: [
                { fa: 'شریک', en: 'Partner' },
                { fa: 'سهم برداشت (بشکه)', en: 'Entitlement (barrels)' },
              ],
              numericCols: [1],
              rows: [
                [t('مسار 50٪', 'Masar 50%'), 117000],
                [t('البرز 30٪', 'Alborz 30%'), 70200],
                [t('دنا 20٪', 'Dena 20%'), 46800],
                [t('**جمع**', '**Total**'), 234000],
              ],
            },
          ],
          answer: {
            fa: 'پیمانکاران 234,000 بشکه (مسار 117,000، البرز 70,200، دنا 46,800) و دولت 266,000 بشکه.',
            en: 'Contractors 234,000 barrels (Masar 117,000, Alborz 70,200, Dena 46,800) and the government 266,000 barrels.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'بیش‌برداشت با دو رویه و برگشت آن', en: 'Overlift under two policies and its reversal' },
          difficulty: 'medium',
          problem: {
            fa: 'با اعداد آوریل درس (بیش‌برداشت مسار 50,000 بشکه، قیمت بازار 70 و بهای تولید 20 برای هر بشکه): (الف) ثبت 30 آوریل را با رویه ارزش بازار و با رویه بهای تمام‌شده بنویسید. (ب) در ژوئن مسار 50,000 بشکه کمتر از سهمش برداشت می‌کند و مانده صفر می‌شود؛ قیمت هنوز 70 است. ثبت ژوئن با رویه ارزش بازار چیست؟',
            en: 'Using the lesson’s April figures (Masar overlifted 50,000 barrels, market price 70 and production cost 20 a barrel): (a) write the 30 April entry under the market value policy and under the cost policy. (b) In June Masar lifts 50,000 barrels less than its entitlement and the balance returns to zero; the price is still 70. What is the June entry under the market value policy?',
          },
          solution: [
            {
              type: 'journal',
              title: t('(الف) رویه ارزش بازار: 50,000 × 70', '(a) Market value policy: 50,000 × 70'),
              entries: [
                {
                  date: t('30 آوریل', '30 Apr'),
                  lines: [
                    { account: ac.imbalance, debit: 3500000 },
                    { account: ac.overlift, credit: 3500000 },
                  ],
                },
              ],
            },
            {
              type: 'journal',
              title: t('(الف) رویه بهای تمام‌شده: 50,000 × 20', '(a) Cost policy: 50,000 × 20'),
              entries: [
                {
                  date: t('30 آوریل', '30 Apr'),
                  lines: [
                    { account: ac.imbalance, debit: 1000000 },
                    { account: ac.overlift, credit: 1000000 },
                  ],
                },
              ],
            },
            {
              type: 'journal',
              title: t('(ب) ژوئن، رویه ارزش بازار: برگشت بدهی', '(b) June, market value policy: the liability reverses'),
              entries: [
                {
                  date: t('30 ژوئن', '30 Jun'),
                  lines: [
                    { account: ac.overlift, debit: 3500000 },
                    { account: ac.imbalance, credit: 3500000 },
                  ],
                  memo: t('مسار نفت بدهکار را با کم‌برداشت ژوئن پس داد', 'Masar has repaid the oil it owed by underlifting in June'),
                },
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              text: {
                fa: 'در ژوئن درآمد IFRS 15 مسار فقط فروش واقعی آن ماه است؛ برگشت بدهی، تعدیل جداگانه‌ای است که اثر برداشت کمتر را جبران می‌کند. در طول دو ماه، جمع اثر در سود و زیان برابر ارزش سهم برداشت مسار است.',
                en: 'In June Masar’s IFRS 15 revenue is only that month’s actual sales; the reversal is a separate adjustment that offsets the smaller lifting. Over the two months, the total effect in profit or loss equals the value of Masar’s entitlement.',
              },
            },
          ],
          answer: {
            fa: 'آوریل: بدهی بیش‌برداشت 3,500,000 (ارزش بازار) یا 1,000,000 (بهای تمام‌شده)؛ ژوئن: همان 3,500,000 برگشت می‌خورد.',
            en: 'April: an overlift liability of 3,500,000 (market value) or 1,000,000 (cost); June: the same 3,500,000 reverses.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'قیمت‌گذاری موقت', en: 'Provisional pricing' },
          difficulty: 'hard',
          problem: {
            fa: 'مسار در 20 سپتامبر محموله‌ای 250,000 بشکه‌ای FOB بارگیری کرد. فاکتور موقت با قیمت 68.00 صادر شد. قیمت قطعی در 3 اکتبر برابر 69.20 شد و خریدار در 20 اکتبر مبلغ نهایی را پرداخت. ثبت‌ها را بنویسید و بگویید درآمد IFRS 15 و تعدیل قیمت هر کدام چقدر است. (رویه گروه: تغییرات پس از بارگیری در حساب 4150 جدا نشان داده می‌شود.)',
            en: 'On 20 September Masar loaded a 250,000-barrel FOB cargo. The provisional invoice was issued at 68.00. The final price fixed on 3 October was 69.20, and the buyer paid the final amount on 20 October. Write the entries and state the IFRS 15 revenue and the price adjustment. (Group policy: changes after loading are shown separately in account 4150.)',
          },
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('فاکتور موقت', 'Provisional invoice'), text: t('250,000 × 68.00 = 17,000,000', '250,000 × 68.00 = 17,000,000') },
                { title: t('مبلغ نهایی', 'Final amount'), text: t('250,000 × 69.20 = 17,300,000', '250,000 × 69.20 = 17,300,000') },
                { title: t('تعدیل', 'Adjustment'), text: t('17,300,000 منهای 17,000,000 = افزایش 300,000 (250,000 × 1.20)', '17,300,000 minus 17,000,000 = an increase of 300,000 (250,000 × 1.20)') },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: t('20 سپتامبر', '20 Sep'),
                  lines: [
                    { account: ac.ar, debit: 17000000 },
                    { account: ac.oilRevenue, credit: 17000000 },
                  ],
                },
                {
                  date: t('3 اکتبر', '3 Oct'),
                  lines: [
                    { account: ac.ar, debit: 300000 },
                    { account: ac.pricingAdj, credit: 300000 },
                  ],
                },
                {
                  date: t('20 اکتبر', '20 Oct'),
                  lines: [
                    { account: ac.bank, debit: 17300000 },
                    { account: ac.ar, credit: 17300000 },
                  ],
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'اگر پایان دوره مالی (مثلاً 30 سپتامبر) پیش از قطعی شدن قیمت برسد، حساب دریافتنی با قیمت پیش‌بینی‌شده بازار در آن تاریخ دوباره اندازه‌گیری و تفاوت در همان حساب 4150 ثبت می‌شود.',
                en: 'If a period end (for example 30 September) falls before the price is fixed, the receivable is remeasured at the expected market price at that date and the difference is posted to the same account 4150.',
              },
            },
          ],
          answer: {
            fa: 'درآمد IFRS 15 برابر 17,000,000 و تعدیل قیمت فروش موقت 300,000؛ وصول 17,300,000.',
            en: 'IFRS 15 revenue 17,000,000 and a provisional pricing adjustment of 300,000; 17,300,000 collected.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'گاز با بند خرید یا پرداخت', en: 'Gas under a take-or-pay clause' },
          difficulty: 'hard',
          problem: {
            fa: 'در یک قرارداد گاز (برای ساده شدن، شرکا را نادیده بگیرید و فرض کنید مسار تنها فروشنده است)، خریدار باید در هر فصل دست‌کم 1,000,000 میلیون بی‌تی‌یو با قیمت 4.00 بخرد یا پولش را بدهد. در فصل اول فقط 900,000 تحویل گرفت و طبق قرارداد پول 1,000,000 را پرداخت؛ او حق دارد 100,000 کسری را تا 12 ماه بعد بدون پرداخت دوباره بگیرد. (الف) ثبت فصل اول را بنویسید. (ب) اگر خریدار کسری را در فصل سوم بگیرد، چه ثبتی زده می‌شود؟',
            en: 'Under a gas contract (ignore the partners and assume Masar is the only seller), the buyer must take or pay for at least 1,000,000 MMBtu a quarter at 4.00. In the first quarter it took only 900,000 and, as the contract requires, paid for 1,000,000; it may take the 100,000 shortfall within the next 12 months without paying again. (a) Record the first quarter. (b) What is recorded if the buyer takes the shortfall in the third quarter?',
          },
          hint: {
            fa: 'درآمد فقط برای گازی است که کنترلش منتقل شده؛ پول گاز تحویل‌نشده‌ای که خریدار حق برداشتش را دارد، بدهی است.',
            en: 'Revenue is only for gas whose control has passed; cash for undelivered gas the buyer is still entitled to take is a liability.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('درآمد فصل اول', 'First-quarter revenue'), text: t('900,000 × 4.00 = 3,600,000', '900,000 × 4.00 = 3,600,000') },
                { title: t('بدهی قراردادی', 'Contract liability'), text: t('100,000 × 4.00 = 400,000 (گاز جبرانی هنوز تحویل نشده)', '100,000 × 4.00 = 400,000 (make-up gas not yet delivered)') },
                { title: t('وصول', 'Cash'), text: t('1,000,000 × 4.00 = 4,000,000', '1,000,000 × 4.00 = 4,000,000') },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: t('پایان فصل اول', 'End of Q1'),
                  lines: [
                    { account: ac.bank, debit: 4000000 },
                    { account: ac.gasRevenue, credit: 3600000 },
                    { account: ac.contractLiab, credit: 400000 },
                  ],
                },
                {
                  date: t('فصل سوم (تحویل گاز جبرانی)', 'Q3 (make-up gas delivered)'),
                  lines: [
                    { account: ac.contractLiab, debit: 400000 },
                    { account: ac.gasRevenue, credit: 400000 },
                  ],
                },
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              text: {
                fa: 'اگر خریدار هرگز گاز جبرانی را نگیرد، بدهی قراردادی وقتی به درآمد منتقل می‌شود که احتمال برداشت آن بسیار کم شود یا حق برداشت منقضی شود. اگر شرکت از تجربه گذشته بتواند به‌طور قابل اتکا پیش‌بینی کند که بخشی از آن هرگز برداشت نمی‌شود، IFRS 15 اجازه می‌دهد آن بخش به نسبت برداشت‌ها زودتر شناسایی شود.',
                en: 'If the buyer never takes the make-up gas, the contract liability moves to revenue when the chance of it being taken becomes remote or the right expires. If the company can reliably predict from experience that part of it will never be taken, IFRS 15 allows that part to be recognised earlier, in proportion to the gas taken.',
              },
            },
          ],
          answer: {
            fa: 'فصل اول: درآمد 3,600,000 و بدهی قراردادی 400,000؛ با تحویل گاز جبرانی، 400,000 به درآمد منتقل می‌شود.',
            en: 'Q1: revenue 3,600,000 and a contract liability of 400,000; when the make-up gas is delivered, the 400,000 moves to revenue.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'summary',
      title: { fa: 'جمع‌بندی', en: 'Summary' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              fa: 'IFRS 15 درآمد را هنگام انتقال کنترل شناسایی می‌کند: برای نفت FOB هنگام بارگیری (تاریخ بارنامه) و برای گاز خط لوله به‌تدریج با تحویل.',
              en: 'IFRS 15 recognises revenue when control passes: for FOB crude on loading (the B/L date), and for pipeline gas progressively as it is delivered.',
            },
            {
              fa: 'مبلغ فروش = حجم خالص استاندارد (پس از کسر آب و رسوب) × (میانگین شاخص ± تفاوت قیمت)؛ فاکتور اول اغلب موقت است و تغییر قیمت بعدی جدا نشان داده می‌شود.',
              en: 'Sales = net standard volume (after water and sediment) × (benchmark average ± differential); the first invoice is often provisional and the later price change is shown separately.',
            },
            {
              fa: 'سهم برداشت از تقسیم تولید طبق قرارداد نفتی می‌آید: بهره مالکانه و سهم دولت از نفت سود، درآمد پیمانکار نیست.',
              en: 'Entitlement comes from splitting production under the petroleum contract: royalty and the government’s profit oil are not the contractor’s revenue.',
            },
            {
              fa: 'شریک عملیات مشترک برای فروش واقعی خودش درآمد شناسایی می‌کند؛ تفاوت با سهم برداشت، بیش‌برداشت (بدهی) یا کم‌برداشت (دارایی) است و رویه اندازه‌گیری و نمایش آن متفاوت است.',
              en: 'A joint operator recognises revenue for its own actual sales; the difference from entitlement is an overlift (liability) or underlift (asset), and how it is measured and presented varies.',
            },
            {
              fa: 'پول گاز تحویل‌نشده‌ای که خریدار حق برداشتش را دارد، بدهی قراردادی است، نه درآمد.',
              en: 'Cash for undelivered gas the buyer may still take is a contract liability, not revenue.',
            },
            {
              fa: 'در ERP، زنجیره داده تولید، تخصیص، سهم برداشت، برنامه برداشت، بارنامه، فاکتور و وصول به هم وصل است و هزینه‌های قابل بازیافت با نشان R مستقیم سهم برداشت و درآمد را تعیین می‌کنند.',
              en: 'In the ERP, production data, allocation, entitlement, lifting schedule, B/L, invoice and collection are one chain, and recoverable costs flagged R directly drive entitlement and revenue.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'تعهد عملکرد', en: 'Performance obligation' },
              def: { fa: 'وعده انتقال یک کالا یا خدمت جداگانه به مشتری؛ مثلاً تحویل یک محموله.', en: 'A promise to transfer a distinct good or service to a customer; for example delivering one cargo.' },
            },
            {
              term: { fa: 'بارنامه (B/L)', en: 'Bill of lading (B/L)' },
              def: { fa: 'سند بارگیری نفت در کشتی که حجم و تاریخ بارگیری را نشان می‌دهد؛ در فروش FOB تاریخ شناسایی درآمد است.', en: 'The document of loading crude onto a ship, showing volume and date; under FOB it is the revenue recognition date.' },
            },
            {
              term: { fa: 'حجم خالص استاندارد', en: 'Net standard volume' },
              def: { fa: 'حجم اصلاح‌شده به دما و فشار استاندارد، پس از کسر آب و رسوب.', en: 'The volume corrected to standard temperature and pressure, after deducting water and sediment.' },
            },
            {
              term: { fa: 'قیمت شاخص و تفاوت قیمت', en: 'Benchmark and differential' },
              def: { fa: 'قیمت مرجع بین‌المللی نفت به‌علاوه یا منهای تعدیل کیفیت و محل تحویل.', en: 'The international reference price of crude plus or minus an adjustment for quality and delivery location.' },
            },
            {
              term: { fa: 'قیمت‌گذاری موقت', en: 'Provisional pricing' },
              def: { fa: 'فاکتور با قیمت برآوردی که پس از پایان دوره قیمت‌گذاری قطعی می‌شود.', en: 'Invoicing at an estimated price that is fixed after the pricing period ends.' },
            },
            {
              term: { fa: 'سهم برداشت (Entitlement)', en: 'Entitlement' },
              def: { fa: 'مقدار نفتی که یک طرف طبق قرارداد حق دارد در یک دوره بردارد و بفروشد.', en: 'The volume a party has the contractual right to lift and sell in a period.' },
            },
            {
              term: { fa: 'بیش‌برداشت / کم‌برداشت', en: 'Overlift / underlift' },
              def: { fa: 'برداشت بیشتر / کمتر از سهم برداشت؛ بدهی یا طلب نفت به شرکای دیگر.', en: 'Lifting more / less than entitlement; oil owed to or by the other partners.' },
            },
            {
              term: { fa: 'بهره مالکانه', en: 'Royalty' },
              def: { fa: 'سهم دولت از تولید یا ارزش آن، به صورت نفت یا نقد، طبق قانون یا قرارداد.', en: 'The government’s share of production or its value, in kind or in cash, under law or contract.' },
            },
            {
              term: { fa: 'خرید یا پرداخت (Take-or-pay)', en: 'Take-or-pay' },
              def: { fa: 'بندی که خریدار را به پرداخت حداقل مقدار قرارداد موظف می‌کند، حتی اگر کمتر تحویل بگیرد.', en: 'A clause obliging the buyer to pay for a contract minimum even if it takes less.' },
            },
            {
              term: { fa: 'بدهی قراردادی', en: 'Contract liability' },
              def: { fa: 'تعهد تحویل کالا یا خدمتی که مابه‌ازای آن پیش‌تر دریافت شده است.', en: 'The obligation to deliver goods or services for which consideration has already been received.' },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: { fa: 'مرحله سوم الگوی پنج‌مرحله‌ای IFRS 15 کدام است؟', en: 'What is step 3 of the IFRS 15 five-step model?' },
      options: [
        { fa: 'تعیین بهای معامله', en: 'Determine the transaction price' },
        { fa: 'شناسایی درآمد هنگام انتقال کنترل', en: 'Recognise revenue when control passes' },
        { fa: 'شناسایی تعهدهای عملکرد', en: 'Identify the performance obligations' },
        { fa: 'تخصیص بها به تعهدهای عملکرد', en: 'Allocate the price to the performance obligations' },
      ],
      answer: 0,
      explain: {
        fa: 'ترتیب: قرارداد، تعهدهای عملکرد، **بهای معامله**، تخصیص و شناسایی. تخصیص بدون دانستن مبلغ ممکن نیست، پس تعیین بها پیش از آن می‌آید؛ شناسایی هم همیشه گام آخر است.',
        en: 'The order is: contract, performance obligations, **transaction price**, allocation, recognition. You cannot allocate before you know the amount, so pricing comes first; recognition is always the last step.',
      },
    },
    {
      q: { fa: 'در فروش FOB یک محموله نفت خام، درآمد کی شناسایی می‌شود؟', en: 'In an FOB sale of a crude cargo, when is revenue recognised?' },
      options: [
        { fa: 'هنگام تولید نفت در چاه', en: 'When the oil is produced at the well' },
        { fa: 'هنگام دریافت پول از خریدار', en: 'When the buyer pays' },
        { fa: 'هنگام بارگیری در کشتی خریدار، یعنی تاریخ بارنامه', en: 'When it is loaded onto the buyer’s ship, at the B/L date' },
        { fa: 'هنگام رسیدن کشتی به بندر مقصد', en: 'When the ship arrives at the destination port' },
      ],
      answer: 2,
      explain: {
        fa: 'در FOB، کنترل و ریسک هنگام بارگیری به خریدار منتقل می‌شود. نفت تولیدشده تا فروش موجودی است، دریافت پول ملاک درآمد نیست، و رسیدن به مقصد در FOB به فروشنده مربوط نیست (در CIF هم کنترل نفت معمولاً هنگام بارگیری منتقل می‌شود).',
        en: 'Under FOB, control and risk pass to the buyer on loading. Produced oil is inventory until sold, cash receipt is not the test, and arrival at destination is not the seller’s concern under FOB (even under CIF, control of the crude usually passes on loading).',
      },
    },
    {
      q: {
        fa: 'محموله‌ای با حجم خالص 200,000 بشکه، میانگین شاخص 72.00 و تفاوت قیمت منفی 2.00 فروخته شده است. مبلغ فروش چقدر است؟',
        en: 'A cargo of 200,000 net barrels is sold at a benchmark average of 72.00 with a differential of minus 2.00. What is the sales amount?',
      },
      options: [
        { fa: '14,400,000', en: '14,400,000' },
        { fa: '14,000,000', en: '14,000,000' },
        { fa: '14,800,000', en: '14,800,000' },
        { fa: '13,600,000', en: '13,600,000' },
      ],
      answer: 1,
      explain: {
        fa: '200,000 × (72.00 منهای 2.00) = 200,000 × 70.00 = 14,000,000. عدد 14,400,000 تفاوت قیمت را نادیده گرفته، 14,800,000 آن را به جای کم کردن اضافه کرده و 13,600,000 آن را دو بار کم کرده است.',
        en: '200,000 × (72.00 minus 2.00) = 200,000 × 70.00 = 14,000,000. The figure 14,400,000 ignores the differential, 14,800,000 adds it instead of deducting it, and 13,600,000 deducts it twice.',
      },
    },
    {
      q: {
        fa: 'سهم برداشت مسار در آوریل 150,000 بشکه بود ولی 200,000 بشکه برداشت و با قیمت 70 فروخت. درآمد IFRS 15 مسار در آوریل چقدر است؟',
        en: 'Masar’s April entitlement was 150,000 barrels, but it lifted and sold 200,000 barrels at 70. What is Masar’s IFRS 15 revenue for April?',
      },
      options: [
        { fa: '10,500,000، برابر سهم برداشت', en: '10,500,000, equal to entitlement' },
        { fa: '3,500,000، برابر بیش‌برداشت', en: '3,500,000, equal to the overlift' },
        { fa: '21,000,000، برابر کل برداشت پیمانکاران', en: '21,000,000, equal to the contractor group’s total liftings' },
        { fa: '14,000,000، برابر فروش واقعی؛ تفاوت با سهم برداشت جداگانه ثبت می‌شود', en: '14,000,000, equal to actual sales; the difference from entitlement is recorded separately' },
      ],
      answer: 3,
      explain: {
        fa: 'طبق نظر کمیته تفسیر IFRS (2019)، شریک عملیات مشترک فقط برای خروجی‌ای که به مشتریانش فروخته درآمد شناسایی می‌کند: 200,000 × 70. عدد 10,500,000 وسوسه‌انگیز است چون «سهم» مسار است، اما درآمد IFRS 15 نیست؛ تفاوت 3,500,000 به‌عنوان بیش‌برداشت جدا ثبت می‌شود.',
        en: 'Following the IFRS Interpretations Committee (2019), a joint operator recognises revenue only for the output it sold to its customers: 200,000 × 70. The 10,500,000 is tempting because it is Masar’s “share”, but it is not IFRS 15 revenue; the 3,500,000 difference is recorded separately as an overlift.',
      },
    },
    {
      q: {
        fa: 'تولید 1,000,000 بشکه، بهره مالکانه 10٪ به صورت نفت، نفت هزینه 200,000 بشکه و سهم پیمانکار از نفت سود 40٪ است. سهم برداشت کل پیمانکاران چقدر است؟',
        en: 'Production is 1,000,000 barrels, royalty 10% in kind, cost oil 200,000 barrels and the contractor’s profit-oil share 40%. What is the contractor group’s total entitlement?',
      },
      options: [
        { fa: '480,000', en: '480,000' },
        { fa: '520,000', en: '520,000' },
        { fa: '400,000', en: '400,000' },
        { fa: '280,000', en: '280,000' },
      ],
      answer: 0,
      explain: {
        fa: 'نفت سود = 1,000,000 منهای 100,000 منهای 200,000 = 700,000؛ 40٪ آن 280,000؛ به‌علاوه نفت هزینه 200,000 = 480,000. عدد 520,000 بهره مالکانه را کم نکرده، 400,000 فقط 40٪ کل تولید است و 280,000 نفت هزینه را جا انداخته است.',
        en: 'Profit oil = 1,000,000 minus 100,000 minus 200,000 = 700,000; 40% of it is 280,000; plus cost oil of 200,000 = 480,000. The figure 520,000 forgets the royalty, 400,000 is just 40% of production, and 280,000 leaves out cost oil.',
      },
    },
    {
      q: {
        fa: 'دولت بهره مالکانه را به صورت نفت برمی‌دارد و خودش می‌فروشد. این بشکه‌ها در صورت‌های مالی مسار چگونه نشان داده می‌شوند؟',
        en: 'The government takes its royalty in kind and sells it itself. How do these barrels appear in Masar’s financial statements?',
      },
      options: [
        { fa: 'به‌عنوان درآمد و هزینه بهره مالکانه به ارزش بازار', en: 'As revenue and as royalty expense at market value' },
        { fa: 'به بهای تمام‌شده در موجودی', en: 'At cost in inventory' },
        { fa: 'اصلاً نشان داده نمی‌شوند؛ مسار هرگز کنترل آن‌ها را ندارد', en: 'They do not appear at all; Masar never controls them' },
        { fa: 'به‌عنوان درآمد دیگر', en: 'As other income' },
      ],
      answer: 2,
      explain: {
        fa: 'بهره مالکانه به صورت نفت هرگز در کنترل پیمانکار نیست، پس نه درآمد است نه موجودی. ثبت آن به‌عنوان درآمد و هزینه، هر دو را بی‌دلیل بزرگ می‌کند. فقط وقتی بهره مالکانه نقدی است، باید درباره نمایش ناخالص یا خالص قضاوت کرد.',
        en: 'Royalty in kind is never controlled by the contractor, so it is neither revenue nor inventory. Recording it as revenue and expense inflates both for no reason. Only when royalty is paid in cash does the gross or net presentation need judgement.',
      },
    },
    {
      q: {
        fa: 'مسار بیش‌برداشت و کم‌برداشت را به ارزش بازار اندازه‌گیری می‌کند. بیش‌برداشت پایان ماه 50,000 بشکه و قیمت بازار 70 است (بهای تولید 20). بدهی بیش‌برداشت چقدر است؟',
        en: 'Masar measures overlift and underlift at market value. The month-end overlift is 50,000 barrels and the market price is 70 (production cost 20). What is the overlift liability?',
      },
      options: [
        { fa: '1,000,000', en: '1,000,000' },
        { fa: '3,500,000', en: '3,500,000' },
        { fa: '14,000,000', en: '14,000,000' },
        { fa: 'صفر؛ تا تسویه نقدی ثبتی لازم نیست', en: 'Nil; nothing is recorded until cash settlement' },
      ],
      answer: 1,
      explain: {
        fa: 'با رویه ارزش بازار: 50,000 × 70 = 3,500,000. عدد 1,000,000 مربوط به رویه بهای تمام‌شده است. 14,000,000 کل فروش است. تفاوت باید در هر پایان دوره ثبت شود، حتی اگر با نفت تسویه شود نه با پول.',
        en: 'Under the market value policy: 50,000 × 70 = 3,500,000. The 1,000,000 belongs to the cost policy. 14,000,000 is the whole sale. The imbalance must be recorded at every period end, even if it is settled in oil rather than cash.',
      },
    },
    {
      q: {
        fa: 'محموله‌ای با قیمت موقت فاکتور شده و پس از بارگیری قیمت شاخص پایین آمده است. رویکرد رایج کدام است؟',
        en: 'A cargo was invoiced at a provisional price and the benchmark fell after loading. What is the common approach?',
      },
      options: [
        { fa: 'درآمد دوره قبل را اصلاح و صورت‌های مالی را بازنویسی کنید', en: 'Restate the prior period’s revenue and reissue the statements' },
        { fa: 'تا دریافت پول هیچ کاری نکنید', en: 'Do nothing until cash is received' },
        { fa: 'تفاوت را به بهای موجودی نفت ببرید', en: 'Take the difference to the cost of crude inventory' },
        { fa: 'تفاوت را به‌عنوان تعدیل قیمت فروش موقت (اغلب طبق IFRS 9) جدا از درآمد IFRS 15 ثبت کنید', en: 'Record the difference as a provisional pricing adjustment (often under IFRS 9), apart from IFRS 15 revenue' },
      ],
      answer: 3,
      explain: {
        fa: 'تغییر قیمت پس از انتقال کنترل از بازار می‌آید؛ بسیاری از شرکت‌ها حساب دریافتنی را طبق IFRS 9 به ارزش منصفانه نگه می‌دارند و تغییر را جدا نشان می‌دهند. بازنویسی دوره قبل برای تغییر عادی قیمت درست نیست، صبر تا وصول هم درآمد و دریافتنی را نادرست نشان می‌دهد، و نفت فروخته‌شده دیگر موجودی نیست.',
        en: 'A price change after control passes comes from the market; many companies hold the receivable at fair value under IFRS 9 and show the change separately. Restating a prior period for a normal price move is wrong, waiting for cash misstates revenue and receivables, and sold crude is no longer inventory.',
      },
    },
    {
      q: {
        fa: 'خریدار گاز طبق بند خرید یا پرداخت، پول گازی را داده که تحویل نگرفته ولی می‌تواند تا 12 ماه بعد بگیرد. این مبلغ امروز چیست؟',
        en: 'Under take-or-pay, a gas buyer has paid for gas it did not take but may take within 12 months. What is this amount today?',
      },
      options: [
        { fa: 'درآمد همین دوره، چون پول دریافت شده است', en: 'Revenue now, because the cash has been received' },
        { fa: 'درآمد دیگر غیرعملیاتی', en: 'Other non-operating income' },
        { fa: 'بدهی قراردادی تا تحویل گاز یا انقضای حق برداشت', en: 'A contract liability until the gas is delivered or the right expires' },
        { fa: 'جریمه‌ای که از هزینه‌ها کم می‌شود', en: 'A penalty deducted from expenses' },
      ],
      answer: 2,
      explain: {
        fa: 'کنترل گاز هنوز منتقل نشده و خریدار حق گرفتن آن را دارد؛ پس مسار تعهد تحویل دارد و مبلغ، بدهی قراردادی است. دریافت پول به‌تنهایی درآمد نمی‌سازد. اگر حق برداشت منقضی شود یا احتمال برداشت بسیار کم شود، آن وقت به درآمد منتقل می‌شود.',
        en: 'Control of the gas has not passed and the buyer can still take it, so Masar has an obligation to deliver and the amount is a contract liability. Receiving cash does not by itself create revenue. If the right expires or taking it becomes remote, it then moves to revenue.',
      },
    },
    {
      q: {
        fa: 'در ERP، محاسبه نفت هزینه و در نتیجه سهم برداشت ماهانه از کدام داده تغذیه می‌شود؟',
        en: 'In the ERP, which data feeds the cost-oil calculation and therefore the monthly entitlement?',
      },
      options: [
        { fa: 'هزینه‌های قابل بازیافت با نشان R روی موضوع هزینه درست و با سند پشتیبان', en: 'Recoverable costs flagged R on the right cost object, with supporting documents' },
        { fa: 'همه هزینه‌های دفتر کل، از جمله هزینه‌های غیرقابل بازیافت', en: 'All general ledger expenses, including non-recoverable ones' },
        { fa: 'فاکتورهای فروش نفت ماه', en: 'The month’s crude sales invoices' },
        { fa: 'فقط هزینه‌های سرمایه‌ای', en: 'Only capital costs' },
      ],
      answer: 0,
      explain: {
        fa: 'نفت هزینه از هزینه‌های قابل بازیافت طبق قرارداد محاسبه می‌شود؛ ERP آن‌ها را با نشان R و موضوع هزینه درست تشخیص می‌دهد. هزینه‌های غیرقابل بازیافت نباید وارد شوند، فاکتورهای فروش خروجی این زنجیره‌اند نه ورودی آن، و هزینه‌های عملیاتی هم معمولاً قابل بازیافت‌اند.',
        en: 'Cost oil is computed from the costs recoverable under the contract; the ERP identifies them by the R flag and the right cost object. Non-recoverable costs must not be included, sales invoices are an output of this chain, not an input, and operating costs are usually recoverable too.',
      },
    },
  ],
}
