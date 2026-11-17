import type { Lesson } from '../types'

/* Account titles used by Masar Petroleum (codes from its chart of accounts). */
const ac = {
  bank: { fa: '1110 موجودی نقد (بانک)', en: '1110 Cash at bank' },
  ar: { fa: '1210 حساب‌های دریافتنی', en: '1210 Accounts receivable' },
  grir: { fa: '2120 حساب واسط رسید کالا و فاکتور (GR/IR)', en: '2120 GR/IR clearing account' },
  revenue: { fa: '4110 درآمد فروش نفت', en: '4110 Oil sales revenue' },
  fines: { fa: '5910 جریمه‌ها (غیرقابل بازیافت)', en: '5910 Fines and penalties (non-recoverable)' },
}

const t = (fa: string, en: string) => ({ fa, en })
const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'cost-recovery',
  number: 28,
  currency: 'usd',
  level: 'advanced',
  minutes: 34,
  icon: 'Percent',
  tone: 'revenue',
  title: { fa: 'بازیافت هزینه در قراردادهای نفتی', en: 'Cost Recovery in Petroleum Contracts' },
  summary: {
    fa: 'بیاموزید پیمانکار چگونه هزینه‌هایش را از تولید میدان پس می‌گیرد: انواع قراردادهای نفتی (مشارکت در تولید، بیع متقابل، IPC و خدماتی)، هزینه‌های قابل و غیرقابل بازیافت، نفت هزینه و سقف آن، نفت سود و تقسیم آن، انتقال هزینه بازیافت‌نشده، صورت بازیافت هزینه چندساله، مستندسازی و برچسب‌گذاری هزینه در ERP و حسابرسی شرکت ملی نفت.',
    en: 'Learn how a contractor gets its costs back from a field’s production: petroleum contract types (production sharing, buy-back, IPC and service), recoverable and non-recoverable costs, cost oil and its ceiling, profit oil and its split, carry-forward of unrecovered costs, a multi-year cost-recovery statement, documentation and cost tagging in the ERP, and audits by the national oil company.',
  },
  objectives: [
    {
      fa: 'انواع اصلی قراردادهای نفتی و نقش بازیافت هزینه در هر کدام را توضیح دهید',
      en: 'Describe the main petroleum contract types and the role of cost recovery in each',
    },
    {
      fa: 'هزینه‌های قابل و غیرقابل بازیافت و دسته‌های هزینه (اکتشاف، توسعه، عملیاتی) را تشخیص دهید',
      en: 'Identify recoverable and non-recoverable costs and the cost categories (exploration, development, operating)',
    },
    {
      fa: 'نفت هزینه با سقف، نفت سود و تقسیم آن و هزینه انتقالی به دوره بعد را محاسبه کنید',
      en: 'Calculate capped cost oil, profit oil and its split, and costs carried forward',
    },
    {
      fa: 'صورت بازیافت هزینه چندساله تهیه و آن را با دفاتر IFRS تطبیق دهید',
      en: 'Prepare a multi-year cost-recovery statement and reconcile it with the IFRS books',
    },
    {
      fa: 'مستندات، برچسب‌گذاری هزینه در ERP و اثر یافته‌های حسابرسی را بر سهم پیمانکار تحلیل کنید',
      en: 'Analyse documentation, ERP cost tagging and the effect of audit findings on the contractor’s entitlement',
    },
  ],
  sections: [
    {
      id: 'why-cost-recovery',
      title: { fa: 'چرا بازیافت هزینه مهم است؟', en: 'Why Cost Recovery Matters' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'مسار پترولیوم و شرکایش تا شروع تولید میدان آریا 23,000,000 خرج اکتشاف و 36,000,000 خرج توسعه کرده‌اند. نفت زیر زمین مال دولت است، نه مال آن‌ها. پس این پول فقط از یک راه برمی‌گردد: **بازیافت هزینه (کاست ریکاوری)**، یعنی سازوکاری در قرارداد نفتی که به پیمانکار اجازه می‌دهد هزینه‌های **قابل بازیافت** خود را از تولید یا درآمد میدان پس بگیرد. هر هزینه‌ای که در حسابرسی رد شود، پولی است که برای همیشه از دست رفته است.',
            en: 'By the time the Arya field starts producing, Masar Petroleum and its partners have spent 23,000,000 on exploration and 36,000,000 on development. The oil in the ground belongs to the state, not to them. So the money comes back only one way: **cost recovery**, the mechanism in the petroleum contract that lets the contractor take its **recoverable** costs back out of the field’s production or revenue. Every cost rejected in an audit is money lost for good.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'در این درس **دولت میزبان** (معمولاً از راه **شرکت ملی نفت**) مالک منابع است و **پیمانکار** (اینجا گروه پیمانکار: مسار پترولیوم 50٪، انرژی البرز 30٪ و نفت دنا 20٪) سرمایه و فناوری می‌آورد و ریسک را می‌پذیرد. قرارداد و پیوست حسابداری آن تعیین می‌کنند کدام هزینه قابل بازیافت است، با چه سرعتی و از چه سهمی از تولید.',
            en: 'In this lesson the **host government** (usually through its **national oil company**, NOC) owns the resources, and the **contractor** (here a contractor group: Masar Petroleum 50%, Alborz Energy 30% and Dena Petroleum 20%) brings capital and technology and takes the risk. The contract and its accounting procedure decide which costs are recoverable, how fast, and out of what share of production.',
          },
        },
        {
          type: 'list',
          items: [
            { fa: '**مجاز است؟** قرارداد و روش حسابداری آن این نوع هزینه را قابل بازیافت می‌دانند؟', en: '**Is it allowed?** Do the contract and its accounting procedure treat this kind of cost as recoverable?' },
            { fa: '**مصوب است؟** در برنامه کاری و بودجه مصوب یا AFE تأییدشده آمده است؟', en: '**Is it approved?** Is it in the approved work programme and budget or an approved AFE?' },
            { fa: '**مستند است؟** سفارش خرید، رسید کالا (GRN) یا برگه ثبت خدمات (SES)، فاکتور و پرداخت دارد؟', en: '**Is it documented?** Does it have a purchase order, a goods received note (GRN) or service entry sheet (SES), an invoice and a payment?' },
            { fa: '**درست برچسب خورده است؟** روی شیء هزینه و دسته هزینه درست، با نشانگر «قابل بازیافت» ثبت شده است؟', en: '**Is it correctly tagged?** Is it on the right cost object and cost category, with the "recoverable" flag?' },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'همه درصدها فرضی‌اند', en: 'Every percentage is illustrative' },
          text: {
            fa: 'برای آموزش سازوکار، فرض می‌کنیم میدان آریا با یک قرارداد فرضی از نوع مشارکت در تولید اداره می‌شود و نرخ‌های بهره مالکانه، سقف بازیافت و تقسیم نفت سود را خودمان ساخته‌ایم. این اعداد هیچ قرارداد واقعی را نشان نمی‌دهند. میدان‌های ایران با قراردادهای بیع متقابل یا IPC توسعه می‌یابند که منطق آن‌ها را در بخش بعد مقایسه می‌کنیم. در کار واقعی همیشه متن قرارداد خودتان را بخوانید.',
            en: 'To teach the mechanics, we assume the Arya field runs under an illustrative production-sharing-type contract, and we have invented the royalty rate, recovery ceiling and profit oil split. These figures describe no real contract. Iranian fields are developed under buy-back or IPC contracts, whose logic we compare in the next section. In real work, always read your own contract.',
          },
        },
      ],
    },
    {
      id: 'contract-types',
      title: { fa: 'انواع قراردادهای نفتی', en: 'Types of Petroleum Contracts' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'قراردادهای نفتی را با دو پرسش ساده می‌توان شناخت: **نفت تولیدشده مال کیست؟** و **پیمانکار پولش را چگونه می‌گیرد؟** جدول زیر پنج خانواده اصلی را به‌طور کلی معرفی می‌کند؛ هر قرارداد واقعی جزئیات خودش را دارد.',
            en: 'Petroleum contracts can be told apart with two simple questions: **who owns the oil produced?** and **how does the contractor get paid?** The table below introduces the five main families in general terms; every real contract has its own details.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'خانواده‌های اصلی قراردادهای نفتی', en: 'The main families of petroleum contracts' },
          head: [
            { fa: 'قرارداد', en: 'Contract' },
            { fa: 'مالکیت نفت تولیدی', en: 'Ownership of production' },
            { fa: 'پیمانکار چگونه پول می‌گیرد؟', en: 'How the contractor is paid' },
            { fa: 'نقش بازیافت هزینه', en: 'Role of cost recovery' },
          ],
          rows: [
            [
              t('امتیازی (بهره مالکانه و مالیات)', 'Concession (royalty and tax)'),
              t('شرکت دارنده امتیاز، از سر چاه', 'The licence holder, at the wellhead'),
              t('تولید را می‌فروشد و بهره مالکانه و مالیات می‌پردازد', 'Sells its production and pays royalty and taxes'),
              t('نفت هزینه ندارد؛ هزینه‌ها در محاسبه مالیات کسر می‌شوند', 'No cost oil; costs are deducted in computing tax'),
            ],
            [
              t('مشارکت در تولید (PSC) و EPSA', 'Production sharing (PSC) and EPSA'),
              t('دولت؛ پیمانکار مالک سهم خود در نقطه تحویل می‌شود', 'The state; the contractor takes title to its share at the delivery point'),
              t('نفت هزینه (با سقف) و سهمی از نفت سود', 'Cost oil (capped) plus a share of profit oil'),
              t('محوری: نفت هزینه، سقف و انتقال به دوره بعد', 'Central: cost oil, ceiling and carry-forward'),
            ],
            [
              t('بیع متقابل ایران (از دهه 1990)', 'Iran’s buy-back (from the 1990s)'),
              t('دولت؛ پس از توسعه، بهره‌برداری به شرکت ملی نفت ایران سپرده می‌شود', 'The state; after development, operation is handed to NIOC'),
              t('بازپرداخت هزینه‌های توافق‌شده (در سقف هزینه سرمایه‌ای) و حق‌الزحمه، از سهمی از تولید یا درآمد میدان در دوره‌ای مشخص', 'Repayment of agreed costs (within a capital cost ceiling) and a remuneration fee, from a share of the field’s production or revenue over a set period'),
              t('بازپرداخت قسطی از سهم سقف‌دار؛ هزینه بیش از سقف سرمایه‌ای بازپرداخت نمی‌شود', 'Instalments from a capped share; cost above the capital ceiling is not repaid'),
            ],
            [
              t('قرارداد نفتی ایران (IPC، از میانه دهه 2010)', 'Iran Petroleum Contract (IPC, from the mid-2010s)'),
              t('دولت', 'The state'),
              t('بازیافت هزینه‌های سرمایه‌ای و عملیاتی (و هزینه تأمین مالی، اگر قرارداد اجازه دهد) و حق‌الزحمه به ازای هر بشکه، از سهم سقف‌دار تولید یا درآمد', 'Recovery of capital and operating costs (and financing costs where the contract allows) plus a fee per barrel, from a capped share of production or revenue'),
              t('مشابه بازیافت هزینه با انتقال به دوره بعد؛ مدت طولانی‌تر و شامل اکتشاف، توسعه و تولید', 'Similar cost recovery with carry-forward; longer term, covering exploration, development and production'),
            ],
            [
              t('خدماتی (خالص یا همراه با ریسک)', 'Service (pure or risk service)'),
              t('دولت', 'The state'),
              t('حق‌الزحمه خدمت؛ در نوع ریسک‌پذیر فقط در صورت موفقیت و از درآمد میدان', 'A service fee; in a risk service contract only if production is achieved, from field revenue'),
              t('در نوع ریسک‌پذیر، بازپرداخت هزینه همراه با حق‌الزحمه', 'In risk service contracts, cost reimbursement plus the fee'),
            ],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'قوانین ایران مالکیت منابع نفت و گاز را برای دولت نگه می‌دارد؛ به همین دلیل ایران از قراردادهای خدماتی‌گونه استفاده کرده است. در **بیع متقابل**، پیمانکار توسعه را با سقف هزینه سرمایه‌ای از پیش توافق‌شده تأمین مالی می‌کرد و پس از تحویل میدان، هزینه‌ها و حق‌الزحمه‌اش را از سهمی از تولید یا درآمد میدان طی دوره بازپرداخت می‌گرفت. **IPC** مدت طولانی‌تری دارد، مراحل اکتشاف، توسعه و تولید را پوشش می‌دهد و معمولاً پیمانکار خارجی را به مشارکت با یک شرکت اکتشاف و تولید ایرانی ملزم می‌کند. منطق محاسبه در هر دو شبیه همان چیزی است که در این درس می‌بینید: هزینه قابل بازیافت، سهم سقف‌دار و انتقال مانده به دوره بعد.',
            en: 'Iran’s laws keep ownership of oil and gas resources with the state, which is why Iran has used service-type contracts. Under **buy-back**, the contractor financed development within a capital cost ceiling agreed in advance and, after handing the field over, received its costs and fee from a share of the field’s production or revenue over a repayment period. The **IPC** runs longer, covers exploration, development and production, and usually requires the foreign contractor to partner with an Iranian exploration and production company. In both, the calculation logic resembles what you see in this lesson: recoverable cost, a capped share, and carry-forward of the balance.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'قرارداد نفتی و صورت‌های مالی دو چیز جدا هستند', en: 'The contract and the financial statements are two different things' },
          text: {
            fa: 'قرارداد تعیین می‌کند پیمانکار چه سهمی از تولید می‌گیرد؛ IFRS تعیین می‌کند همان سهم و هزینه‌ها چگونه در صورت‌های مالی گزارش شوند. پس پیمانکار دو مجموعه عدد دارد: **حساب بازیافت هزینه** طبق قرارداد و **دفاتر IFRS**. مثلاً چاه خشک AR-X2 در دفاتر IFRS (روش تلاش‌های موفق) هزینه شد، اما طبق بسیاری از قراردادها همچنان هزینه اکتشافی قابل بازیافت است.',
            en: 'The contract decides what share of production the contractor receives; IFRS decides how that share and the costs are reported in the financial statements. So the contractor keeps two sets of numbers: the **cost-recovery account** under the contract and the **IFRS books**. For example, dry well AR-X2 was expensed in the IFRS books (successful efforts), yet under many contracts it remains a recoverable exploration cost.',
          },
        },
      ],
    },
    {
      id: 'recoverable-costs',
      title: { fa: 'هزینه‌های قابل و غیرقابل بازیافت', en: 'Recoverable and Non-recoverable Costs' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'هیچ فهرست جهانی وجود ندارد؛ **روش حسابداری قرارداد** (پیوست حسابداری) تعیین‌کننده است. با این حال الگوی کلی در بیشتر قراردادها مشابه است: هزینه‌ای قابل بازیافت است که برای عملیات نفتی لازم بوده، در برنامه و بودجه مصوب آمده، طبق قواعد تدارکات قرارداد خریده شده و با مدرک پشتیبانی شده باشد.',
            en: 'There is no universal list; the contract’s **accounting procedure** decides. Still, the general pattern is similar in most contracts: a cost is recoverable when it was necessary for petroleum operations, is in the approved programme and budget, was procured under the contract’s procurement rules, and is supported by evidence.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'رفتار معمول اقلام هزینه (قرارداد خودتان را بررسی کنید)', en: 'Typical treatment of cost items (check your own contract)' },
          head: [
            { fa: 'قلم هزینه', en: 'Cost item' },
            { fa: 'رفتار معمول', en: 'Typical treatment' },
            { fa: 'شرط یا توضیح', en: 'Condition or note' },
          ],
          rows: [
            [t('اکتشاف، توسعه و عملیات در چارچوب بودجه مصوب', 'Exploration, development and operations within the approved budget'), t('قابل بازیافت', 'Recoverable'), t('با مدرک کامل و طبق قواعد هر دسته', 'With full evidence and under each category’s rules')],
            [t('پاداش امضا و پاداش تولید پرداختی به دولت', 'Signature and production bonuses paid to the state'), t('معمولاً غیرقابل بازیافت', 'Usually non-recoverable'), t('بسته به قرارداد', 'Depends on the contract')],
            [t('جریمه‌ها و خسارت ناشی از سهل‌انگاری فاحش یا تخلف عمدی', 'Fines, and damages from gross negligence or wilful misconduct'), t('غیرقابل بازیافت', 'Non-recoverable'), blank],
            [t('هزینه بیش از بودجه یا AFE بدون تأیید', 'Cost above the budget or AFE without approval'), t('تا تأیید، قابل بازیافت نیست', 'Not recoverable until approved'), t('AFE تکمیلی یا اصلاح بودجه لازم است', 'Needs a supplementary AFE or budget revision')],
            [t('سربار دفتر مرکزی بیش از سقف قرارداد', 'Head-office overhead above the contract cap'), t('مازاد غیرقابل بازیافت', 'Excess non-recoverable'), t('سقف معمولاً درصدی از هزینه‌هاست', 'The cap is usually a percentage of costs')],
            [t('خدمات شرکت‌های وابسته بیش از قیمت عادلانه', 'Affiliate services above an arm’s-length price'), t('مازاد غیرقابل بازیافت', 'Excess non-recoverable'), t('قیمت‌گذاری باید مستند باشد', 'Pricing must be documented')],
            [t('هزینه تأمین مالی (بهره)', 'Financing costs (interest)'), t('بسته به قرارداد', 'Depends on the contract'), t('بسیاری از PSCها مستثنا می‌کنند؛ برخی قراردادهای خدماتی هزینه تأمین مالی تعریف‌شده را می‌پذیرند', 'Many PSCs exclude it; some service contracts allow a defined financing cost')],
            [t('مالیات بر درآمد خود پیمانکار', 'The contractor’s own income tax'), t('غیرقابل بازیافت', 'Non-recoverable'), blank],
            [t('هزینه بدون مدرک پشتیبان', 'Cost without supporting evidence'), t('تا مستند نشود، پذیرفته نمی‌شود', 'Not accepted until documented'), t('در حسابرسی رد می‌شود', 'Rejected in audit')],
          ],
        },
        { type: 'h', text: { fa: 'دسته‌های هزینه و انباره‌های هزینه', en: 'Cost categories and cost pools' } },
        {
          type: 'table',
          caption: { fa: 'دسته‌های هزینه در قرارداد فرضی میدان آریا', en: 'Cost categories in the illustrative Arya contract' },
          head: [
            { fa: 'دسته', en: 'Category' },
            { fa: 'نمونه در میدان آریا', en: 'Arya field examples' },
            { fa: 'قاعده بازیافت (فرضی)', en: 'Recovery rule (illustrative)' },
          ],
          rows: [
            [t('اکتشاف', 'Exploration'), t('لرزه‌نگاری، چاه‌های AR-X1 و AR-X2 (حتی خشک)', 'Seismic, wells AR-X1 and AR-X2 (even the dry one)'), t('کامل، از سال اول تولید', 'In full, from the first year of production')],
            [t('توسعه (سرمایه‌ای)', 'Development (capital)'), t('چاه‌های توسعه‌ای، جداکننده‌ها، خطوط جریان', 'Development wells, separators, flowlines'), t('سالانه 25٪، طی 4 سال از شروع تولید', '25% a year over 4 years from first production')],
            [t('عملیاتی', 'Operating'), t('مواد شیمیایی، حقوق اپراتورها، نگهداری، برق', 'Chemicals, operators’ salaries, maintenance, power'), t('در همان سال وقوع', 'In the year incurred')],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'هر دسته یک **انباره هزینه (Cost Pool)** دارد که هزینه‌های آن دسته در آن جمع و طبق قاعده خودش آزاد می‌شود. بسیاری از قراردادها هزینه‌ها را **حصارکشی (Ring-fencing)** می‌کنند: هزینه یک محدوده قراردادی را نمی‌توان از تولید محدوده دیگر بازیافت کرد. برخی قراردادها ترتیب بازیافت را هم تعیین می‌کنند، مثلاً ابتدا هزینه‌های عملیاتی و سپس سرمایه‌ای. در مثال این درس همه دسته‌ها در یک صورت جمع می‌شوند تا محاسبه ساده بماند.',
            en: 'Each category has a **cost pool** in which its costs collect and from which they are released under its rule. Many contracts **ring-fence** costs: the costs of one contract area cannot be recovered from another area’s production. Some contracts also set an order of recovery, for example operating costs first and then capital costs. In this lesson’s example all categories are combined in one statement to keep the arithmetic simple.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: دو مجموعه عدد، یک منبع داده', en: 'In practice: two sets of numbers, one data source' },
          text: {
            fa: 'هزینه توسعه در دفاتر IFRS با استهلاک ذخایر (واحد تولید) به هزینه می‌رود، اما در حساب بازیافت هزینه با قاعده قرارداد (اینجا 25٪ در سال). این دو عدد تقریباً هیچ‌وقت برابر نیستند. مسار پترولیوم هر دو را از همان سطرهای هزینه ERP می‌سازد و هر فصل آن‌ها را با یک جدول تطبیق به هم وصل می‌کند.',
            en: 'In the IFRS books development cost reaches expense through depletion (units of production), while in the cost-recovery account it follows the contract rule (here 25% a year). The two numbers are almost never equal. Masar Petroleum builds both from the same ERP cost lines and links them every quarter with a reconciliation schedule.',
          },
        },
      ],
    },
    {
      id: 'cost-oil-profit-oil',
      title: { fa: 'نفت هزینه، سقف بازیافت و نفت سود', en: 'Cost Oil, the Ceiling and Profit Oil' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در قرارداد مشارکت در تولید، تولید هر دوره به چند بخش تقسیم می‌شود. ابتدا **بهره مالکانه (Royalty)** به دولت می‌رسد (اگر قرارداد داشته باشد). از باقیمانده، پیمانکار هزینه‌های قابل بازیافت را به‌صورت **نفت هزینه (Cost Oil)** برمی‌دارد، اما فقط تا **سقف بازیافت هزینه**. هر چه بماند **نفت سود (Profit Oil)** است که میان دولت و پیمانکار تقسیم می‌شود. هزینه‌ای که به‌خاطر سقف بازیافت نشد، از بین نمی‌رود و به دوره بعد **منتقل** می‌شود.',
            en: 'Under a production sharing contract, each period’s production is divided into parts. First the **royalty** goes to the state (if the contract has one). From the rest, the contractor takes its recoverable costs as **cost oil**, but only up to the **cost-recovery ceiling**. Whatever remains is **profit oil**, split between the state and the contractor. Cost not recovered because of the ceiling is not lost; it is **carried forward** to the next period.',
          },
        },
        {
          type: 'diagram',
          id: 'cost-recovery',
          caption: {
            fa: 'تقسیم تولید: بهره مالکانه، نفت هزینه با سقف، تقسیم نفت سود میان دولت و پیمانکار و انتقال هزینه بازیافت‌نشده به دوره بعد.',
            en: 'How production is divided: royalty, capped cost oil, the profit oil split between state and contractor, and unrecovered cost carried forward.',
          },
        },
        {
          type: 'steps',
          items: [
            { title: t('تولید ناخالص', 'Gross production'), text: t('بشکه‌های تولیدی دوره و ارزش آن‌ها به قیمت مرجع قرارداد.', 'The period’s barrels and their value at the contract reference price.') },
            { title: t('بهره مالکانه', 'Royalty'), text: t('درصدی از تولید ناخالص برای دولت؛ در مثال ما 10٪ (فرضی).', 'A percentage of gross production for the state; 10% in our example (illustrative).') },
            { title: t('سقف بازیافت', 'Recovery ceiling'), text: t('حداکثر سهم نفت هزینه؛ در مثال ما 50٪ تولید پس از بهره مالکانه (فرضی).', 'The maximum share for cost oil; 50% of production after royalty in our example (illustrative).') },
            { title: t('نفت هزینه', 'Cost oil'), text: t('کمترینِ «هزینه‌های قابل بازیافت این دوره به‌علاوه انتقالی» و «سقف».', 'The lower of "recoverable costs for the period plus carry-forward" and "the ceiling".') },
            { title: t('نفت سود و تقسیم آن', 'Profit oil and its split'), text: t('تولید پس از بهره مالکانه منهای نفت هزینه؛ در مثال ما 60٪ دولت و 40٪ پیمانکار (فرضی).', 'Production after royalty minus cost oil; 60% state and 40% contractor in our example (illustrative).') },
            { title: t('انتقال به دوره بعد', 'Carry-forward'), text: t('هزینه بازیافت‌نشده به دوره بعد می‌رود؛ در مثال ما بدون محدودیت زمانی و بدون افزایش.', 'Unrecovered cost moves to the next period; in our example without time limit and without uplift.') },
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'نفت هزینه = کمترینِ (هزینه قابل بازیافت + هزینه انتقالی، سقف)؛ نفت سود = تولید پس از بهره مالکانه − نفت هزینه',
            en: 'Cost oil = lower of (recoverable cost + carry-forward, ceiling); Profit oil = production after royalty − cost oil',
          },
          note: {
            fa: 'سهم استحقاقی پیمانکار = نفت هزینه + سهم پیمانکار از نفت سود؛ سهم دولت = بهره مالکانه + سهم دولت از نفت سود.',
            en: 'Contractor entitlement = cost oil + contractor’s profit oil; government take = royalty + government’s profit oil.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'یک سال نمونه: 1,200,000 بشکه به قیمت 50 و 20,000,000 هزینه قابل بازیافت', en: 'A sample year: 1,200,000 barrels at 50 and 20,000,000 of recoverable cost' },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'بشکه', en: 'Barrels' },
            { fa: 'ارزش', en: 'Value' },
          ],
          numericCols: [1, 2],
          rows: [
            [t('تولید ناخالص', 'Gross production'), 1200000, 60000000],
            [t('بهره مالکانه 10٪', 'Royalty 10%'), 120000, 6000000],
            [t('تولید پس از بهره مالکانه', 'Production after royalty'), 1080000, 54000000],
            [t('سقف بازیافت (50٪)', 'Recovery ceiling (50%)'), 540000, 27000000],
            [t('نفت هزینه (کمترینِ 20,000,000 و سقف)', 'Cost oil (lower of 20,000,000 and the ceiling)'), 400000, 20000000],
            [t('نفت سود', 'Profit oil'), 680000, 34000000],
            [t('سهم دولت از نفت سود 60٪', 'Government profit oil 60%'), 408000, 20400000],
            [t('سهم پیمانکار از نفت سود 40٪', 'Contractor profit oil 40%'), 272000, 13600000],
            [t('سهم استحقاقی پیمانکار', 'Contractor entitlement'), 672000, 33600000],
            [t('سهم دولت (بهره مالکانه + نفت سود)', 'Government take (royalty + profit oil)'), 528000, 26400000],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'تقسیم پلکانی و عامل R', en: 'Sliding scales and the R-factor' },
          text: {
            fa: 'در بسیاری از قراردادها سهم پیمانکار از نفت سود ثابت نیست و با افزایش تولید روزانه یا با **عامل R** کم می‌شود. عامل R معمولاً نسبت درآمد تجمعی دریافتی پیمانکار به هزینه‌های تجمعی اوست؛ وقتی پیمانکار هزینه‌هایش را پس گرفت و R از 1 گذشت، سهم دولت بیشتر می‌شود. پله‌ها و فرمول دقیق را فقط قرارداد تعیین می‌کند.',
            en: 'In many contracts the contractor’s share of profit oil is not fixed: it falls as daily production rises, or with the **R-factor**. The R-factor is usually the contractor’s cumulative receipts divided by its cumulative costs; once the contractor has got its costs back and R passes 1, the state’s share grows. Only the contract sets the steps and the exact formula.',
          },
        },
      ],
    },
    {
      id: 'multi-year',
      title: { fa: 'مثال چندساله: صورت بازیافت هزینه میدان آریا', en: 'A Multi-year Example: the Arya Cost-Recovery Statement' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'حالا چهار سال اول تولید میدان آریا را با شرایط فرضی زیر دنبال کنیم. هزینه‌های پیش از تولید از درس حسابداری نفت و گاز بالادستی می‌آیند: اکتشاف 23,000,000 (لرزه‌نگاری 3,000,000، چاه AR-X1 برابر 12,000,000 و چاه خشک AR-X2 برابر 8,000,000) و توسعه 36,000,000 (چاه‌های AR-01 تا AR-06 و جداکننده‌ها و خطوط جریان).',
            en: 'Now let’s follow the Arya field’s first four years of production under the illustrative terms below. Pre-production costs come from the lesson on upstream oil and gas accounting: exploration 23,000,000 (seismic 3,000,000, well AR-X1 12,000,000 and dry well AR-X2 8,000,000) and development 36,000,000 (wells AR-01 to AR-06 plus separators and flowlines).',
          },
        },
        {
          type: 'table',
          caption: { fa: 'شرایط فرضی قرارداد میدان آریا (برای آموزش)', en: 'Illustrative Arya contract terms (for teaching)' },
          head: [
            { fa: 'شرط', en: 'Term' },
            { fa: 'مقدار فرضی', en: 'Illustrative value' },
          ],
          rows: [
            [t('بهره مالکانه', 'Royalty'), t('10٪ تولید ناخالص', '10% of gross production')],
            [t('سقف بازیافت هزینه', 'Cost-recovery ceiling'), t('50٪ تولید پس از بهره مالکانه', '50% of production after royalty')],
            [t('تقسیم نفت سود', 'Profit oil split'), t('دولت 60٪، پیمانکار 40٪', 'State 60%, contractor 40%')],
            [t('هزینه اکتشاف', 'Exploration cost'), t('کامل، از سال 1 تولید', 'In full from production Year 1')],
            [t('هزینه توسعه', 'Development cost'), t('25٪ در سال طی 4 سال (9,000,000 در سال)', '25% a year over 4 years (9,000,000 a year)')],
            [t('هزینه عملیاتی', 'Operating cost'), t('در سال وقوع', 'In the year incurred')],
            [t('هزینه بازیافت‌نشده', 'Unrecovered cost'), t('انتقال به سال بعد، بدون محدودیت و بدون افزایش', 'Carried forward, no limit and no uplift')],
          ],
        },
        {
          type: 'table',
          caption: { fa: 'صورت بازیافت هزینه (انباره‌های هزینه)', en: 'Cost-recovery statement (cost pools)' },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'سال 1', en: 'Year 1' },
            { fa: 'سال 2', en: 'Year 2' },
            { fa: 'سال 3', en: 'Year 3' },
            { fa: 'سال 4', en: 'Year 4' },
            { fa: 'جمع چهار سال', en: 'Four-year total' },
          ],
          numericCols: [1, 2, 3, 4, 5],
          rows: [
            [t('مانده بازیافت‌نشده ابتدای سال', 'Opening unrecovered balance'), 0, 19000000, 13250000, 5750000, blank],
            [t('هزینه اکتشاف', 'Exploration cost'), 23000000, 0, 0, 0, 23000000],
            [t('قسط هزینه توسعه (25٪)', 'Development instalment (25%)'), 9000000, 9000000, 9000000, 9000000, 36000000],
            [t('هزینه عملیاتی', 'Operating cost'), 5000000, 5500000, 6000000, 5500000, 22000000],
            [t('جمع قابل بازیافت', 'Total available for recovery'), 37000000, 33500000, 28250000, 20250000, blank],
            [t('بازیافت‌شده (نفت هزینه)', 'Recovered (cost oil)'), 18000000, 20250000, 22500000, 20250000, 81000000],
            [t('مانده انتقالی به سال بعد', 'Unrecovered, carried forward'), 19000000, 13250000, 5750000, 0, blank],
          ],
        },
        {
          type: 'table',
          caption: { fa: 'محاسبه سهم پیمانکار و دولت', en: 'Entitlement calculation for the contractor and the state' },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'سال 1', en: 'Year 1' },
            { fa: 'سال 2', en: 'Year 2' },
            { fa: 'سال 3', en: 'Year 3' },
            { fa: 'سال 4', en: 'Year 4' },
            { fa: 'جمع', en: 'Total' },
          ],
          numericCols: [1, 2, 3, 4, 5],
          rows: [
            [t('تولید (بشکه)', 'Production (barrels)'), 800000, 900000, 1000000, 900000, 3600000],
            [t('قیمت هر بشکه', 'Price per barrel'), 50, 50, 50, 55, blank],
            [t('ارزش تولید ناخالص', 'Gross production value'), 40000000, 45000000, 50000000, 49500000, 184500000],
            [t('بهره مالکانه 10٪', 'Royalty 10%'), 4000000, 4500000, 5000000, 4950000, 18450000],
            [t('تولید پس از بهره مالکانه', 'Production after royalty'), 36000000, 40500000, 45000000, 44550000, 166050000],
            [t('سقف بازیافت (50٪)', 'Recovery ceiling (50%)'), 18000000, 20250000, 22500000, 22275000, blank],
            [t('نفت هزینه', 'Cost oil'), 18000000, 20250000, 22500000, 20250000, 81000000],
            [t('نفت سود', 'Profit oil'), 18000000, 20250000, 22500000, 24300000, 85050000],
            [t('سهم دولت از نفت سود 60٪', 'Government profit oil 60%'), 10800000, 12150000, 13500000, 14580000, 51030000],
            [t('سهم پیمانکار از نفت سود 40٪', 'Contractor profit oil 40%'), 7200000, 8100000, 9000000, 9720000, 34020000],
            [t('سهم استحقاقی پیمانکار', 'Contractor entitlement'), 25200000, 28350000, 31500000, 29970000, 115020000],
            [t('سهم دولت', 'Government take'), 14800000, 16650000, 18500000, 19530000, 69480000],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'جدول را این‌طور بخوانید: در سال‌های 1 تا 3 هزینه قابل بازیافت از سقف بیشتر بود، پس نفت هزینه دقیقاً برابر سقف شد و مانده به سال بعد رفت (19,000,000، سپس 13,250,000، سپس 5,750,000). در سال 4، هزینه قابل بازیافت (20,250,000) کمتر از سقف (22,275,000) بود؛ پس همه آن بازیافت شد و بقیه به نفت سود رفت. در پایان چهار سال، همه 81,000,000 هزینه (23,000,000 اکتشاف، 36,000,000 توسعه و 22,000,000 عملیاتی) بازیافت شده است. آزمون: در هر سال، سهم پیمانکار و سهم دولت باید با هم برابر ارزش تولید ناخالص شوند (مثلاً سال 1: 25,200,000 + 14,800,000 = 40,000,000).',
            en: 'Read the tables this way: in Years 1 to 3 recoverable cost exceeded the ceiling, so cost oil equalled the ceiling and the rest moved forward (19,000,000, then 13,250,000, then 5,750,000). In Year 4 recoverable cost (20,250,000) was below the ceiling (22,275,000), so all of it was recovered and the rest became profit oil. By the end of four years all 81,000,000 of cost (23,000,000 exploration, 36,000,000 development and 22,000,000 operating) has been recovered. Check: each year the contractor’s and the state’s shares must add up to the gross production value (Year 1: 25,200,000 + 14,800,000 = 40,000,000).',
          },
        },
        {
          type: 'journal',
          title: { fa: 'دفاتر مسار پترولیوم: فروش سهم 50٪ خود از سهم استحقاقی سال 1', en: 'Masar Petroleum’s books: selling its 50% of the Year 1 entitlement' },
          entries: [
            {
              date: t('سال 1', 'Year 1'),
              lines: [
                { account: ac.ar, debit: 12600000 },
                { account: ac.revenue, credit: 12600000 },
              ],
              memo: {
                fa: 'سهم استحقاقی گروه 25,200,000 (504,000 بشکه)؛ سهم 50٪ مسار پترولیوم 252,000 بشکه × 50 = 12,600,000. بهره مالکانه و سهم دولت از نفت سود، درآمد پیمانکار نیستند.',
                en: 'Group entitlement 25,200,000 (504,000 barrels); Masar Petroleum’s 50% is 252,000 barrels × 50 = 12,600,000. The royalty and the state’s profit oil are not the contractor’s revenue.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'سهم هر شریک گروه پیمانکار', en: 'Each partner’s share of the contractor group' },
          text: {
            fa: 'سهم استحقاقی پیمانکار به نسبت سهم مشارکت میان شرکا تقسیم می‌شود؛ همان سهم‌هایی که هزینه‌ها را پرداخته‌اند. سال 1: مسار پترولیوم 12,600,000، انرژی البرز 7,560,000 و نفت دنا 5,040,000 (جمعاً 25,200,000). هر شریک فقط سهم خود را درآمد می‌شناسد.',
            en: 'The contractor entitlement is shared among the partners by working interest, the same shares that paid the costs. Year 1: Masar Petroleum 12,600,000, Alborz Energy 7,560,000 and Dena Petroleum 5,040,000 (25,200,000 in total). Each partner recognises only its own share as revenue.',
          },
        },
      ],
    },
    {
      id: 'erp-documentation',
      title: { fa: 'مستندسازی و برچسب‌گذاری هزینه در ERP', en: 'Documentation and Cost Tagging in the ERP' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'صورت بازیافت هزینه با یک گزارش ساخته نمی‌شود؛ از هزاران سطر هزینه ساخته می‌شود و هر سطر باید از روز ثبت، برچسب درست داشته باشد. اگر برچسب درست نباشد، در پایان فصل هیچ گزارشی آن را درست نمی‌کند. در ERP مسار پترولیوم بیشتر برچسب‌ها از داده پایه شیء هزینه می‌آیند و کاربر فقط شیء هزینه را انتخاب می‌کند.',
            en: 'The cost-recovery statement is not built by one report; it is built from thousands of cost lines, and each line must carry the right tags from the day it is posted. If a tag is wrong, no report at quarter-end will fix it. In Masar Petroleum’s ERP most tags come from the cost object’s master data, and the user only chooses the cost object.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'برچسب‌هایی که هر سطر هزینه دارد', en: 'The tags every cost line carries' },
          head: [
            { fa: 'برچسب', en: 'Tag' },
            { fa: 'منبع در ERP', en: 'Source in the ERP' },
            { fa: 'نمونه', en: 'Example' },
          ],
          rows: [
            [t('محدوده قراردادی', 'Contract area'), t('مرکز سود و پروژه', 'Profit centre and project'), t('PC-ARYA: قرارداد میدان آریا', 'PC-ARYA: Arya field contract')],
            [t('شیء هزینه', 'Cost object'), t('انتخاب کاربر در سفارش خرید، رزرو یا SES', 'User’s choice on the PO, reservation or SES'), t('WBS چاه AR-15 یا مرکز هزینه CC-ARY-PRD', 'WBS of well AR-15 or cost centre CC-ARY-PRD')],
            [t('دسته هزینه', 'Cost category'), t('ویژگی شیء هزینه', 'Attribute of the cost object'), t('توسعه، عملیاتی یا اکتشاف', 'Development, operating or exploration')],
            [t('نشانگر بازیافت', 'Recoverable flag'), t('ویژگی شیء هزینه یا حساب؛ قابل تغییر در سطر با تأیید', 'Attribute of the cost object or account; overridable on the line with approval'), t('قابل بازیافت، غیرقابل بازیافت، در انتظار مدرک', 'Recoverable, non-recoverable, pending evidence')],
            [t('مرجع بودجه', 'Budget reference'), t('AFE یا ردیف برنامه کاری', 'AFE or work programme line'), t('AFE-2026-017', 'AFE-2026-017')],
            [t('مدرک', 'Evidence'), t('پیوست‌های GRN، SES و فاکتور', 'Attachments to the GRN, SES and invoice'), t('برگه‌های کار امضاشده، گزارش بازرسی', 'Signed field tickets, inspection report')],
          ],
        },
        {
          type: 'steps',
          items: [
            { title: t('سفارش خرید', 'Purchase order'), text: t('سفارش با شیء هزینه ثبت می‌شود و تعهدی روی AFE می‌سازد؛ تشریفات مناقصه طبق قواعد قرارداد رعایت می‌شود.', 'The PO is created with a cost object and creates a commitment on the AFE; tendering follows the contract’s rules.') },
            { title: t('GRN یا SES', 'GRN or SES'), text: t('رسید کالا (GRN) یا برگه ثبت خدمات (SES) تعهد را به هزینه واقعی تبدیل می‌کند؛ گزارش بازرسی به GRN و برگه‌های کار امضاشده به SES پیوست می‌شوند.', 'The GRN or SES turns the commitment into actual cost; the inspection report is attached to the GRN and signed field tickets to the SES.') },
            { title: t('فاکتور و پرداخت', 'Invoice and payment'), text: t('تطبیق سه‌طرفه سفارش، GRN یا SES و فاکتور، سپس پرداخت.', 'Three-way match of the PO, the GRN or SES and the invoice, then payment.') },
            { title: t('بازبینی ماهانه', 'Monthly review'), text: t('حسابدار بازیافت هزینه سطرهای بدون مدرک را «در انتظار» علامت می‌زند و اقلام غیرقابل بازیافت را کنترل می‌کند.', 'The cost-recovery accountant flags lines without evidence as "pending" and checks non-recoverable items.') },
            { title: t('صورت فصلی', 'Quarterly statement'), text: t('ERP هزینه‌های قابل بازیافت را به تفکیک دسته و انباره جمع می‌کند؛ نتیجه با دفتر کل تطبیق و به شرکت ملی نفت تحویل می‌شود.', 'The ERP totals recoverable costs by category and pool; the result is reconciled with the ledger and submitted to the NOC.') },
          ],
        },
        {
          type: 'journal',
          title: { fa: 'سه ثبت با برچسب بازیافت', en: 'Three postings with their recovery tags' },
          entries: [
            {
              date: t('تأیید SES', 'SES approved'),
              lines: [
                { account: t('1510 دارایی‌های در جریان تکمیل (WBS چاه AR-15؛ AFE-2026-017؛ توسعه؛ قابل بازیافت)', '1510 Assets under construction (WBS well AR-15; AFE-2026-017; development; recoverable)'), debit: 1100000 },
                { account: ac.grir, credit: 1100000 },
              ],
              memo: { fa: 'اجاره دکل؛ گزارش‌های روزانه حفاری امضاشده پیوست SES است.', en: 'Rig hire; signed daily drilling reports are attached to the SES.' },
            },
            {
              date: t('ثبت GRN', 'GRN posted'),
              lines: [
                { account: t('5110 هزینه عملیات تولید (CC-ARY-PRD؛ عملیاتی؛ قابل بازیافت)', '5110 Production operating expense (CC-ARY-PRD; operating; recoverable)'), debit: 250000 },
                { account: ac.grir, credit: 250000 },
              ],
              memo: { fa: 'مواد شیمیایی ضدخوردگی با GRN مصرف مستقیم برای چاه‌های تولیدی.', en: 'Corrosion-inhibitor chemicals on a direct-charge GRN for producing wells.' },
            },
            {
              date: t('پرداخت جریمه', 'Fine paid'),
              lines: [
                { account: ac.fines, debit: 200000 },
                { account: ac.bank, credit: 200000 },
              ],
              memo: { fa: 'جریمه تخلف زیست‌محیطی؛ حساب جداگانه تا هرگز وارد صورت بازیافت نشود.', en: 'Environmental fine; a separate account so it never enters the recovery statement.' },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'تطبیق دفتر کل با ادعای بازیافت: هزینه‌های عملیاتی سال 2', en: 'Reconciling the ledger to the recovery claim: Year 2 operating costs' },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          numericCols: [1],
          rows: [
            [t('هزینه‌های عملیاتی محدوده آریا در دفتر کل', 'Arya area operating costs in the ledger'), 6100000],
            [t('کسر: جریمه‌ها (غیرقابل بازیافت)', 'Less: fines (non-recoverable)'), 200000],
            [t('کسر: سطرهای «در انتظار مدرک»', 'Less: lines "pending evidence"'), 400000],
            [t('هزینه عملیاتی قابل بازیافت ادعاشده', 'Recoverable operating cost claimed'), 5500000],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: چه کسی چه می‌کند؟', en: 'In practice: who does what?' },
          text: {
            fa: 'حسابدار بازیافت هزینه صورت‌ها را تهیه و با دفتر کل تطبیق می‌دهد؛ کارشناس قرارداد قواعد قرارداد را در تنظیمات ERP (دسته‌ها، نرخ‌ها، سقف سربار) پیاده می‌کند؛ تدارکات رعایت مناقصه را مستند می‌کند؛ سرپرستان کار SESها را با برگه‌های کار امضاشده تأیید می‌کنند؛ حسابدار مشارکت سهم شرکا را تقسیم می‌کند. 400,000 «در انتظار» وقتی مدرکش کامل شود، اگر قرارداد اجازه دهد در دوره بعد ادعا می‌شود.',
            en: 'The cost-recovery accountant prepares the statements and reconciles them with the ledger; the contracts specialist implements the contract rules in the ERP configuration (categories, rates, overhead cap); procurement documents tender compliance; job supervisors approve SESs against signed field tickets; the JV accountant splits the partners’ shares. The 400,000 "pending" is claimed in a later period once its evidence is complete, if the contract allows.',
          },
        },
      ],
    },
    {
      id: 'audits',
      title: { fa: 'حسابرسی شرکت ملی نفت و دولت', en: 'Audits by the National Oil Company and the Government' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'دولت به اعداد پیمانکار اعتماد کورکورانه نمی‌کند. شرکت ملی نفت یا نهاد دولتی مسئول، صورت‌های بازیافت هزینه را بررسی و در مهلتی که قرارداد تعیین کرده **حسابرسی** می‌کند. هر مبلغی که پیمانکار بیش از حق خود بازیافت کند، از سهم دولت کم شده است؛ پس این حسابرسی‌ها دقیق و گاهی سخت‌گیرانه‌اند.',
            en: 'The state does not trust the contractor’s numbers blindly. The national oil company or the responsible government body reviews the cost-recovery statements and **audits** them within the period the contract sets. Every unit of money the contractor over-recovers comes out of the state’s share, so these audits are detailed and sometimes strict.',
          },
        },
        {
          type: 'steps',
          items: [
            { title: t('تحویل صورت‌ها', 'Submit statements'), text: t('صورت‌های فصلی و سالانه با جدول‌های پشتیبان تحویل می‌شوند.', 'Quarterly and annual statements are submitted with supporting schedules.') },
            { title: t('بررسی و پرسش', 'Review and queries'), text: t('شرکت ملی نفت پرسش‌ها و درخواست مدرک می‌فرستد.', 'The NOC sends queries and requests for documents.') },
            { title: t('حسابرسی میدانی', 'Fieldwork'), text: t('حسابرسان نمونه‌ای از هزینه‌ها را تا AFE، سفارش، GRN یا SES، برگه کار و پرداخت دنبال می‌کنند.', 'Auditors trace a sample of costs to the AFE, PO, GRN or SES, field ticket and payment.') },
            { title: t('گزارش یافته‌ها', 'Findings report'), text: t('هر یافته با مبلغ و بند قرارداد اعلام می‌شود.', 'Each finding is stated with its amount and the contract clause.') },
            { title: t('پاسخ و توافق', 'Response and agreement'), text: t('پیمانکار با مدرک پاسخ می‌دهد؛ اقلام توافق‌شده حساب بازیافت هزینه را اصلاح می‌کنند و اقلام اختلافی طبق سازوکار حل اختلاف قرارداد پیگیری می‌شوند.', 'The contractor responds with evidence; agreed items adjust the cost-recovery account and disputed items follow the contract’s dispute mechanism.') },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'یافته‌های رایج و پیشگیری از آن‌ها', en: 'Common findings and how to prevent them' },
          head: [
            { fa: 'یافته', en: 'Finding' },
            { fa: 'نتیجه معمول', en: 'Usual result' },
            { fa: 'پیشگیری در ERP', en: 'Prevention in the ERP' },
          ],
          rows: [
            [t('SES بدون برگه کار امضاشده یا فاکتور بدون GRN', 'SES without signed field tickets, or invoice without a GRN'), t('رد تا زمان ارائه مدرک', 'Rejected until evidence is provided'), t('پیوست اجباری در SES و GRN', 'Mandatory attachments on SES and GRN')],
            [t('رعایت‌نشدن قواعد مناقصه', 'Tender rules not followed'), t('رد یا کاهش', 'Rejected or reduced'), t('گردش کار تأیید با آستانه‌های مناقصه قرارداد', 'Approval workflow with the contract’s tender thresholds')],
            [t('هزینه خارج از بودجه یا AFE', 'Cost outside the budget or AFE'), t('رد تا تأیید', 'Rejected until approved'), t('کنترل بودجه AFE', 'AFE budget control')],
            [t('دسته اشتباه (عملیاتی به‌جای توسعه)', 'Wrong category (operating instead of development)'), t('تغییر زمان بازیافت', 'Recovery timing changes'), t('دسته از شیء هزینه، نه از انتخاب کاربر', 'Category from the cost object, not the user')],
            [t('خدمات شرکت وابسته بیش از قیمت عادلانه', 'Affiliate services above arm’s length'), t('رد مازاد', 'Excess rejected'), t('مستندات قیمت‌گذاری انتقالی', 'Transfer-pricing documentation')],
            [t('اقلام غیرقابل بازیافت در ادعا', 'Non-recoverable items in the claim'), t('حذف', 'Removed'), t('حساب‌ها و نشانگرهای جداگانه', 'Separate accounts and flags')],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'اثر یک یافته به سقف بستگی دارد. در **سالی که سقف محدودکننده نیست** (مثل سال 4 مثال ما)، رد شدن 1,000,000 هزینه همان سال نفت هزینه را 1,000,000 کم و نفت سود را 1,000,000 زیاد می‌کند؛ پیمانکار فقط 40٪ آن را از راه نفت سود پس می‌گیرد. در **سالی که سقف محدودکننده است**، نفت هزینه همان سال تغییر نمی‌کند و فقط هزینه انتقالی کم می‌شود؛ زیان در سالی ظاهر می‌شود که آن هزینه انتقالی قرار بود بازیافت شود.',
            en: 'The effect of a finding depends on the ceiling. In **a year when the ceiling does not bind** (like Year 4 in our example), rejecting 1,000,000 of that year’s cost cuts cost oil by 1,000,000 and raises profit oil by 1,000,000; the contractor gets back only 40% of it through profit oil. In **a year when the ceiling binds**, that year’s cost oil does not change and only the carry-forward shrinks; the loss shows up in the year that carry-forward would have been recovered.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'زیان پیمانکار = هزینه ردشده × (1 − سهم پیمانکار از نفت سود) = 1,000,000 × 60٪ = 600,000',
            en: 'Contractor’s loss = rejected cost × (1 − contractor’s profit oil share) = 1,000,000 × 60% = 600,000',
          },
          note: {
            fa: 'سال 4: سهم استحقاقی از 29,970,000 به 29,370,000 کاهش می‌یابد؛ سهم 50٪ مسار پترولیوم از این زیان 300,000 است.',
            en: 'Year 4: the entitlement falls from 29,970,000 to 29,370,000; Masar Petroleum’s 50% share of the loss is 300,000.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: ایران', en: 'In practice: Iran' },
          text: {
            fa: 'در قراردادهای نفتی ایران، کارفرما (شرکت ملی نفت ایران یا شرکت تابعه‌ای که قرارداد تعیین می‌کند) صورت هزینه‌های پیمانکار را طبق قرارداد بررسی و حسابرسی می‌کند. اینکه کدام هزینه پذیرفته می‌شود، مهلت‌ها و نرخ تسعیر ارز را متن هر قرارداد و پیوست مالی آن تعیین می‌کند؛ همیشه به همان متن مراجعه کنید.',
            en: 'Under Iranian petroleum contracts, the employer (NIOC or the subsidiary named in the contract) reviews and audits the contractor’s cost statements as the contract provides. Which costs are accepted, the deadlines and the exchange-rate rules are set by each contract and its financial annex; always go back to that text.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' },
          text: {
            fa: 'این خطاها بیشترین پول را از پیمانکار می‌گیرند:',
            en: 'These errors cost a contractor the most money:',
          },
        },
        {
          type: 'list',
          items: [
            { fa: 'فرض اینکه «هزینه در دفاتر IFRS» یعنی «هزینه قابل بازیافت»؛ این دو با دو مجموعه قاعده جدا تعیین می‌شوند.', en: 'Assuming "cost in the IFRS books" means "recoverable cost"; two separate sets of rules decide them.' },
            { fa: 'اعمال سقف روی هزینه‌ها به‌جای تولید، یا فراموش کردن انتقال هزینه بازیافت‌نشده به دوره بعد.', en: 'Applying the ceiling to costs instead of production, or forgetting to carry unrecovered cost forward.' },
            { fa: 'ثبت کل تولید یا کل نفت سود به‌عنوان درآمد پیمانکار، به‌جای سهم استحقاقی او.', en: 'Recording all production or all profit oil as the contractor’s revenue instead of its entitlement.' },
            { fa: 'ادعای هزینه بدون GRN، SES یا برگه کار امضاشده، یا خارج از AFE مصوب.', en: 'Claiming costs without a GRN, SES or signed field ticket, or outside an approved AFE.' },
            { fa: 'ادعای هزینه یک محدوده قراردادی از تولید محدوده دیگر، وقتی قرارداد حصارکشی دارد.', en: 'Claiming one contract area’s costs against another area’s production when the contract ring-fences them.' },
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: { fa: 'تمرین', en: 'Practice' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'همه نرخ‌ها در این تمرین‌ها فرضی و فقط برای آموزش‌اند. پیش از دیدن پاسخ، ترتیب را رعایت کنید: بهره مالکانه، سقف، نفت هزینه، نفت سود، تقسیم.',
            en: 'All rates in these exercises are illustrative and for teaching only. Before opening a solution, follow the order: royalty, ceiling, cost oil, profit oil, split.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'قابل بازیافت یا نه؟', en: 'Recoverable or not?' },
          difficulty: 'easy',
          problem: {
            fa: 'با قواعد معمولی که در این درس دیدید، هر قلم زیر قابل بازیافت است، غیرقابل بازیافت، یا «در انتظار»؟',
            en: 'Using the typical rules from this lesson, is each item below recoverable, non-recoverable, or "pending"?',
          },
          given: {
            head: [{ fa: 'قلم', en: 'Item' }],
            rows: [
              [t('1. اجاره دکل چاه AR-15 روی AFE-2026-017 مصوب، با SES و گزارش‌های روزانه امضاشده', '1. Rig hire for well AR-15 on approved AFE-2026-017, with an SES and signed daily reports')],
              [t('2. پاداش امضای قرارداد پرداختی به دولت', '2. Signature bonus paid to the state')],
              [t('3. جریمه تخلف زیست‌محیطی', '3. Fine for an environmental breach')],
              [t('4. مواد شیمیایی چاه‌های تولیدی با GRN روی CC-ARY-PRD', '4. Chemicals for producing wells on a GRN to CC-ARY-PRD')],
              [t('5. سربار دفتر مرکزی بیش از سقف درصدی قرارداد', '5. Head-office overhead above the contract’s percentage cap')],
              [t('6. فاکتور مشاوره بدون قرارداد، سفارش خرید یا SES', '6. A consultancy invoice with no contract, PO or SES')],
            ],
          },
          solution: [
            {
              type: 'table',
              head: [{ fa: 'قلم', en: 'Item' }, { fa: 'وضعیت', en: 'Status' }, { fa: 'دلیل', en: 'Reason' }],
              rows: [
                [t('1', '1'), t('قابل بازیافت (توسعه)', 'Recoverable (development)'), t('مصوب، مستند و با برچسب درست', 'Approved, documented and correctly tagged')],
                [t('2', '2'), t('غیرقابل بازیافت', 'Non-recoverable'), t('پاداش امضا معمولاً مستثناست', 'Signature bonuses are usually excluded')],
                [t('3', '3'), t('غیرقابل بازیافت', 'Non-recoverable'), t('جریمه هرگز هزینه ضروری عملیات نیست', 'A fine is never a necessary operating cost')],
                [t('4', '4'), t('قابل بازیافت (عملیاتی)', 'Recoverable (operating)'), t('هزینه عادی تولید با GRN', 'A normal production cost with a GRN')],
                [t('5', '5'), t('مازاد غیرقابل بازیافت', 'Excess non-recoverable'), t('فقط تا سقف قرارداد پذیرفته می‌شود', 'Accepted only up to the contract cap')],
                [t('6', '6'), t('در انتظار مدرک', 'Pending evidence'), t('بدون سفارش و SES، تطبیق سه‌طرفه و مدرک انجام کار وجود ندارد', 'Without a PO and SES there is no three-way match and no evidence the work was done')],
              ],
            },
          ],
          answer: {
            fa: 'قابل بازیافت: 1 و 4؛ غیرقابل بازیافت: 2، 3 و مازاد 5؛ در انتظار: 6.',
            en: 'Recoverable: 1 and 4; non-recoverable: 2, 3 and the excess in 5; pending: 6.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'محاسبه یک‌ساله با سقف محدودکننده', en: 'A one-year calculation with a binding ceiling' },
          difficulty: 'medium',
          problem: {
            fa: 'ارزش تولید ناخالص یک سال 30,000,000 است. شرایط فرضی: بهره مالکانه 10٪، سقف بازیافت 60٪ تولید پس از بهره مالکانه، نفت سود 65٪ دولت و 35٪ پیمانکار. هزینه قابل بازیافت سال (بدون انتقالی) 20,000,000 است. نفت هزینه، هزینه انتقالی، نفت سود، سهم استحقاقی پیمانکار و سهم دولت را حساب کنید.',
            en: 'A year’s gross production value is 30,000,000. Illustrative terms: royalty 10%, recovery ceiling 60% of production after royalty, profit oil 65% state and 35% contractor. Recoverable cost for the year (no carry-forward) is 20,000,000. Compute cost oil, the carry-forward, profit oil, the contractor entitlement and the government take.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('بهره مالکانه', 'Royalty'), text: t('30,000,000 × 10٪ = 3,000,000؛ پس از بهره مالکانه 27,000,000', '30,000,000 × 10% = 3,000,000; after royalty 27,000,000') },
                { title: t('سقف', 'Ceiling'), text: t('27,000,000 × 60٪ = 16,200,000', '27,000,000 × 60% = 16,200,000') },
                { title: t('نفت هزینه و انتقالی', 'Cost oil and carry-forward'), text: t('کمترینِ 20,000,000 و 16,200,000 برابر 16,200,000؛ انتقالی 3,800,000', 'Lower of 20,000,000 and 16,200,000 is 16,200,000; carry-forward 3,800,000') },
                { title: t('نفت سود', 'Profit oil'), text: t('27,000,000 − 16,200,000 = 10,800,000؛ دولت 7,020,000 و پیمانکار 3,780,000', '27,000,000 − 16,200,000 = 10,800,000; state 7,020,000 and contractor 3,780,000') },
                { title: t('سهم‌ها', 'Shares'), text: t('پیمانکار 16,200,000 + 3,780,000 = 19,980,000؛ دولت 3,000,000 + 7,020,000 = 10,020,000؛ جمع 30,000,000', 'Contractor 16,200,000 + 3,780,000 = 19,980,000; state 3,000,000 + 7,020,000 = 10,020,000; total 30,000,000') },
              ],
            },
          ],
          answer: {
            fa: 'نفت هزینه 16,200,000، انتقالی 3,800,000، نفت سود 10,800,000، سهم پیمانکار 19,980,000 و سهم دولت 10,020,000.',
            en: 'Cost oil 16,200,000, carry-forward 3,800,000, profit oil 10,800,000, contractor entitlement 19,980,000 and government take 10,020,000.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'بازپرداخت در قرارداد خدماتی‌گونه (شبیه IPC)', en: 'Repayment under a service-type contract (IPC-like)' },
          difficulty: 'medium',
          problem: {
            fa: 'در یک قرارداد خدماتی‌گونه فرضی، پیمانکار حداکثر از 50٪ درآمد میدان پول می‌گیرد. مبلغ قابل پرداخت هر سال = قسط هزینه سرمایه‌ای + هزینه عملیاتی + حق‌الزحمه 2 به ازای هر بشکه، به‌علاوه مانده پرداخت‌نشده سال قبل. مبلغ پرداختی و مانده انتقالی دو سال را حساب کنید.',
            en: 'Under an illustrative service-type contract, the contractor is paid from at most 50% of field revenue. The amount due each year = capital cost instalment + operating cost + a fee of 2 per barrel, plus any unpaid balance from the year before. Compute the payment and the carry-forward for two years.',
          },
          given: {
            head: [{ fa: 'قلم', en: 'Item' }, { fa: 'سال 1', en: 'Year 1' }, { fa: 'سال 2', en: 'Year 2' }],
            numericCols: [1, 2],
            rows: [
              [t('درآمد میدان', 'Field revenue'), 30000000, 36000000],
              [t('تولید (بشکه)', 'Production (barrels)'), 800000, 900000],
              [t('قسط هزینه سرمایه‌ای', 'Capital cost instalment'), 12000000, 12000000],
              [t('هزینه عملیاتی', 'Operating cost'), 3000000, 3200000],
            ],
          },
          solution: [
            {
              type: 'table',
              head: [{ fa: 'قلم', en: 'Item' }, { fa: 'سال 1', en: 'Year 1' }, { fa: 'سال 2', en: 'Year 2' }],
              numericCols: [1, 2],
              rows: [
                [t('مانده پرداخت‌نشده سال قبل', 'Unpaid balance from last year'), 0, 1600000],
                [t('قسط سرمایه‌ای', 'Capital instalment'), 12000000, 12000000],
                [t('هزینه عملیاتی', 'Operating cost'), 3000000, 3200000],
                [t('حق‌الزحمه (بشکه × 2)', 'Fee (barrels × 2)'), 1600000, 1800000],
                [t('جمع قابل پرداخت', 'Total due'), 16600000, 18600000],
                [t('سقف (50٪ درآمد)', 'Cap (50% of revenue)'), 15000000, 18000000],
                [t('پرداختی', 'Paid'), 15000000, 18000000],
                [t('مانده انتقالی', 'Carried forward'), 1600000, 600000],
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              text: {
                fa: 'منطق همان بازیافت هزینه است، با دو تفاوت: پیمانکار مالک نفت نمی‌شود و به‌جای سهمی از نفت سود، حق‌الزحمه می‌گیرد.',
                en: 'The logic is the same as cost recovery, with two differences: the contractor never owns the oil, and it earns a fee instead of a share of profit oil.',
              },
            },
          ],
          answer: {
            fa: 'سال 1: پرداخت 15,000,000 و انتقالی 1,600,000؛ سال 2: پرداخت 18,000,000 و انتقالی 600,000.',
            en: 'Year 1: paid 15,000,000, carried forward 1,600,000; Year 2: paid 18,000,000, carried forward 600,000.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'اثر یافته حسابرسی بر سهم شرکا', en: 'The effect of an audit finding on the partners' },
          difficulty: 'hard',
          problem: {
            fa: 'ارزش تولید ناخالص یک سال 50,000,000 است؛ بهره مالکانه 10٪، سقف 50٪ تولید پس از بهره مالکانه، نفت سود 60٪ دولت و 40٪ پیمانکار (همه فرضی). گروه پیمانکار 20,000,000 هزینه قابل بازیافت ادعا کرده و انتقالی ندارد. حسابرسی شرکت ملی نفت 2,000,000 را رد می‌کند: 1,200,000 SES خدمات چاه بدون برگه کار امضاشده و 800,000 خدمات شرکت وابسته بیش از قیمت عادلانه. (الف) سهم استحقاقی پیمانکار پیش و پس از یافته، (ب) زیان هر شریک (مسار پترولیوم 50٪، البرز 30٪، دنا 20٪) و (ج) اگر سقف 40٪ بود، اثر فوری چه می‌شد؟',
            en: 'A year’s gross production value is 50,000,000; royalty 10%, ceiling 50% of production after royalty, profit oil 60% state and 40% contractor (all illustrative). The contractor group claimed 20,000,000 of recoverable cost with no carry-forward. The NOC audit rejects 2,000,000: 1,200,000 of well-service SESs without signed field tickets and 800,000 of affiliate services above arm’s length. Find (a) the contractor entitlement before and after the finding, (b) each partner’s loss (Masar Petroleum 50%, Alborz 30%, Dena 20%), and (c) the immediate effect if the ceiling had been 40%.',
          },
          hint: {
            fa: 'اول ببینید سقف محدودکننده است یا نه.',
            en: 'First check whether the ceiling binds.',
          },
          solution: [
            {
              type: 'table',
              head: [{ fa: 'قلم', en: 'Item' }, { fa: 'پیش از یافته', en: 'Before the finding' }, { fa: 'پس از یافته', en: 'After the finding' }],
              numericCols: [1, 2],
              rows: [
                [t('تولید پس از بهره مالکانه', 'Production after royalty'), 45000000, 45000000],
                [t('سقف (50٪)', 'Ceiling (50%)'), 22500000, 22500000],
                [t('نفت هزینه', 'Cost oil'), 20000000, 18000000],
                [t('نفت سود', 'Profit oil'), 25000000, 27000000],
                [t('سهم پیمانکار از نفت سود 40٪', 'Contractor profit oil 40%'), 10000000, 10800000],
                [t('سهم استحقاقی پیمانکار', 'Contractor entitlement'), 30000000, 28800000],
              ],
            },
            {
              type: 'steps',
              items: [
                { title: t('(الف) زیان گروه', '(a) Group loss'), text: t('30,000,000 − 28,800,000 = 1,200,000، یعنی 2,000,000 × 60٪؛ چون سقف محدودکننده نبود.', '30,000,000 − 28,800,000 = 1,200,000, that is 2,000,000 × 60%, because the ceiling did not bind.') },
                { title: t('(ب) سهم شرکا', '(b) Partners’ shares'), text: t('مسار پترولیوم 600,000، البرز 360,000، دنا 240,000.', 'Masar Petroleum 600,000, Alborz 360,000, Dena 240,000.') },
                { title: t('(ج) سقف 40٪', '(c) A 40% ceiling'), text: t('سقف 18,000,000 می‌شد. پیش از یافته نفت هزینه 18,000,000 با 2,000,000 انتقالی بود؛ پس از یافته باز 18,000,000 ولی بدون انتقالی. اثر فوری صفر است، اما 2,000,000 بازیافت آینده از دست می‌رود.', 'The ceiling would be 18,000,000. Before the finding, cost oil was 18,000,000 with 2,000,000 carried forward; after it, still 18,000,000 but with no carry-forward. No immediate effect, but 2,000,000 of future recovery is lost.') },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'پیشگیری: پیوست اجباری برگه کار امضاشده برای تأیید SES و سیاست مستند قیمت‌گذاری خدمات شرکت‌های وابسته پیش از ثبت سفارش.',
                en: 'Prevention: make signed field tickets a mandatory attachment for SES approval, and document affiliate service pricing before the PO is placed.',
              },
            },
          ],
          answer: {
            fa: 'سهم استحقاقی از 30,000,000 به 28,800,000 می‌رسد؛ زیان 1,200,000 (مسار پترولیوم 600,000، البرز 360,000، دنا 240,000). با سقف 40٪ اثر فوری صفر است ولی 2,000,000 انتقالی از دست می‌رود.',
            en: 'Entitlement falls from 30,000,000 to 28,800,000; the loss is 1,200,000 (Masar Petroleum 600,000, Alborz 360,000, Dena 240,000). With a 40% ceiling there is no immediate effect, but 2,000,000 of carry-forward is lost.',
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
              fa: 'بازیافت هزینه سازوکار قرارداد نفتی برای بازگرداندن هزینه‌های قابل بازیافت پیمانکار از تولید یا درآمد میدان است.',
              en: 'Cost recovery is the petroleum contract’s mechanism for returning the contractor’s recoverable costs out of the field’s production or revenue.',
            },
            {
              fa: 'در PSC پیمانکار نفت هزینه (با سقف) و سهمی از نفت سود می‌گیرد؛ در بیع متقابل و IPC هزینه و حق‌الزحمه را از سهم سقف‌دار تولید یا درآمد می‌گیرد و مالک ذخایر نمی‌شود.',
              en: 'In a PSC the contractor receives capped cost oil and a share of profit oil; under buy-back and IPC it receives costs and a fee from a capped share of production or revenue and never owns the reserves.',
            },
            {
              fa: 'هزینه‌ای قابل بازیافت است که مجاز، مصوب، مستند و درست برچسب‌خورده باشد؛ پاداش امضا، جریمه و هزینه بدون مدرک معمولاً پذیرفته نمی‌شوند.',
              en: 'A cost is recoverable when it is allowed, approved, documented and correctly tagged; signature bonuses, fines and undocumented costs are usually rejected.',
            },
            {
              fa: 'نفت هزینه = کمترینِ (هزینه قابل بازیافت + انتقالی، سقف)؛ مانده بازیافت‌نشده به دوره بعد می‌رود.',
              en: 'Cost oil = lower of (recoverable cost + carry-forward, ceiling); the unrecovered balance moves to the next period.',
            },
            {
              fa: 'درآمد پیمانکار فقط سهم استحقاقی اوست و میان شرکا به نسبت سهم مشارکت تقسیم می‌شود.',
              en: 'The contractor’s revenue is only its entitlement, shared among partners by working interest.',
            },
            {
              fa: 'GRN، SES، برگه‌های کار امضاشده و برچسب‌های ERP (شیء هزینه، دسته، نشانگر بازیافت، AFE) پایه صورت بازیافت هزینه و دفاع در حسابرسی‌اند.',
              en: 'GRNs, SESs, signed field tickets and ERP tags (cost object, category, recoverable flag, AFE) are the basis of the cost-recovery statement and of the audit defence.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'بازیافت هزینه (کاست ریکاوری)', en: 'Cost recovery' },
              def: {
                fa: 'بازگرداندن هزینه‌های قابل بازیافت پیمانکار از تولید یا درآمد میدان طبق قرارداد نفتی.',
                en: 'Returning the contractor’s recoverable costs from the field’s production or revenue under the petroleum contract.',
              },
            },
            {
              term: { fa: 'قرارداد مشارکت در تولید (PSC)', en: 'Production sharing contract (PSC)' },
              def: {
                fa: 'قراردادی که در آن دولت مالک منابع است و پیمانکار نفت هزینه و سهمی از نفت سود می‌گیرد.',
                en: 'A contract in which the state owns the resources and the contractor receives cost oil and a share of profit oil.',
              },
            },
            {
              term: { fa: 'بیع متقابل و IPC', en: 'Buy-back and IPC' },
              def: {
                fa: 'قراردادهای خدماتی‌گونه ایران که هزینه و حق‌الزحمه پیمانکار را از سهمی از تولید یا درآمد میدان می‌پردازند.',
                en: 'Iran’s service-type contracts, which pay the contractor’s costs and fee from a share of the field’s production or revenue.',
              },
            },
            {
              term: { fa: 'بهره مالکانه (Royalty)', en: 'Royalty' },
              def: {
                fa: 'سهم دولت از تولید ناخالص که پیش از تقسیم برداشته می‌شود.',
                en: 'The state’s share of gross production, taken before the split.',
              },
            },
            {
              term: { fa: 'نفت هزینه (Cost Oil)', en: 'Cost oil' },
              def: {
                fa: 'بخشی از تولید که برای بازیافت هزینه‌های پیمانکار، تا سقف قرارداد، کنار گذاشته می‌شود.',
                en: 'The part of production set aside to recover the contractor’s costs, up to the contract ceiling.',
              },
            },
            {
              term: { fa: 'سقف بازیافت هزینه', en: 'Cost-recovery ceiling' },
              def: {
                fa: 'حداکثر درصدی از تولید که در هر دوره می‌تواند نفت هزینه باشد.',
                en: 'The maximum percentage of production that can be cost oil in a period.',
              },
            },
            {
              term: { fa: 'نفت سود (Profit Oil)', en: 'Profit oil' },
              def: {
                fa: 'تولید باقیمانده پس از بهره مالکانه و نفت هزینه که میان دولت و پیمانکار تقسیم می‌شود.',
                en: 'Production left after royalty and cost oil, split between the state and the contractor.',
              },
            },
            {
              term: { fa: 'هزینه انتقالی', en: 'Carry-forward' },
              def: {
                fa: 'هزینه قابل بازیافتی که به‌خاطر سقف در دوره جاری بازیافت نشد و به دوره بعد می‌رود.',
                en: 'Recoverable cost not recovered this period because of the ceiling, moved to the next period.',
              },
            },
            {
              term: { fa: 'حصارکشی (Ring-fencing)', en: 'Ring-fencing' },
              def: {
                fa: 'قاعده‌ای که بازیافت هزینه یک محدوده قراردادی را از تولید محدوده دیگر منع می‌کند.',
                en: 'A rule that prevents one contract area’s costs being recovered from another area’s production.',
              },
            },
            {
              term: { fa: 'سهم استحقاقی پیمانکار', en: 'Contractor entitlement' },
              def: {
                fa: 'نفت هزینه به‌علاوه سهم پیمانکار از نفت سود؛ تنها بخشی که پیمانکار درآمد می‌شناسد.',
                en: 'Cost oil plus the contractor’s profit oil; the only part the contractor recognises as revenue.',
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
        fa: 'در قرارداد مشارکت در تولید، نفت زیر زمین مال کیست؟',
        en: 'Under a production sharing contract, who owns the oil in the ground?',
      },
      options: [
        { fa: 'پیمانکار، از روز امضای قرارداد', en: 'The contractor, from the day the contract is signed' },
        { fa: 'اپراتور مشارکت', en: 'The joint venture operator' },
        { fa: 'دولت؛ پیمانکار فقط مالک سهم استحقاقی خود در نقطه تحویل می‌شود', en: 'The state; the contractor takes title only to its entitlement at the delivery point' },
        { fa: 'خریدار نفت خام', en: 'The crude oil buyer' },
      ],
      answer: 2,
      explain: {
        fa: 'در PSC منابع مال دولت است و پیمانکار فقط سهم استحقاقی خود (نفت هزینه و سهمش از نفت سود) را در نقطه تحویل مالک می‌شود. مالکیت از سر چاه ویژگی قراردادهای امتیازی است.',
        en: 'In a PSC the resources belong to the state, and the contractor takes title only to its entitlement (cost oil plus its profit oil) at the delivery point. Ownership at the wellhead is a feature of concessions.',
      },
    },
    {
      q: {
        fa: 'ارزش تولید ناخالص 60,000,000، بهره مالکانه 10٪ و سقف بازیافت 50٪ تولید پس از بهره مالکانه است (فرضی). سقف نفت هزینه چقدر است؟',
        en: 'Gross production value is 60,000,000, royalty 10% and the ceiling 50% of production after royalty (illustrative). What is the cost oil ceiling?',
      },
      options: [
        { fa: '30,000,000', en: '30,000,000' },
        { fa: '27,000,000', en: '27,000,000' },
        { fa: '54,000,000', en: '54,000,000' },
        { fa: '24,000,000', en: '24,000,000' },
      ],
      answer: 1,
      explain: {
        fa: 'ابتدا بهره مالکانه: 60,000,000 − 6,000,000 = 54,000,000؛ سپس 50٪ آن = 27,000,000. عدد 30,000,000 سقف را روی تولید ناخالص حساب کرده و بهره مالکانه را جا انداخته است.',
        en: 'Royalty first: 60,000,000 − 6,000,000 = 54,000,000; then 50% of it = 27,000,000. 30,000,000 applies the ceiling to gross production and skips the royalty.',
      },
    },
    {
      q: {
        fa: 'سقف نفت هزینه 27,000,000 و هزینه قابل بازیافت (با انتقالی) 35,000,000 است. نفت هزینه و هزینه انتقالی چیست؟',
        en: 'The cost oil ceiling is 27,000,000 and recoverable cost (with carry-forward) is 35,000,000. What are cost oil and the carry-forward?',
      },
      options: [
        { fa: 'نفت هزینه 35,000,000؛ انتقالی صفر', en: 'Cost oil 35,000,000; carry-forward zero' },
        { fa: 'نفت هزینه 27,000,000؛ 8,000,000 از دست می‌رود', en: 'Cost oil 27,000,000; 8,000,000 is lost' },
        { fa: 'نفت هزینه 8,000,000؛ انتقالی 27,000,000', en: 'Cost oil 8,000,000; carry-forward 27,000,000' },
        { fa: 'نفت هزینه 27,000,000؛ انتقالی 8,000,000', en: 'Cost oil 27,000,000; carry-forward 8,000,000' },
      ],
      answer: 3,
      explain: {
        fa: 'نفت هزینه کمترینِ هزینه و سقف است: 27,000,000. مازاد 8,000,000 از بین نمی‌رود و در بیشتر قراردادها به دوره بعد منتقل می‌شود. گزینه «از دست می‌رود» همان اشتباه فراموش کردن انتقال است.',
        en: 'Cost oil is the lower of cost and ceiling: 27,000,000. The 8,000,000 excess is not lost; under most contracts it is carried forward. The "lost" option is the classic mistake of forgetting the carry-forward.',
      },
    },
    {
      q: {
        fa: 'نفت سود 30,000,000 است و سهم پیمانکار از آن 40٪ (فرضی). سهم پیمانکار از نفت سود چقدر است؟',
        en: 'Profit oil is 30,000,000 and the contractor’s share of it is 40% (illustrative). What is the contractor’s profit oil?',
      },
      options: [
        { fa: '12,000,000', en: '12,000,000' },
        { fa: '18,000,000', en: '18,000,000' },
        { fa: '30,000,000', en: '30,000,000' },
        { fa: '7,500,000', en: '7,500,000' },
      ],
      answer: 0,
      explain: {
        fa: '30,000,000 × 40٪ = 12,000,000. عدد 18,000,000 سهم 60٪ دولت است. سهم استحقاقی پیمانکار برابر نفت هزینه به‌علاوه همین 12,000,000 است.',
        en: '30,000,000 × 40% = 12,000,000. 18,000,000 is the state’s 60% share. The contractor’s entitlement is cost oil plus this 12,000,000.',
      },
    },
    {
      q: {
        fa: 'کدام قلم در بیشتر قراردادها غیرقابل بازیافت است؟',
        en: 'Which item is non-recoverable under most contracts?',
      },
      options: [
        { fa: 'اجاره دکل برای چاه توسعه‌ای روی AFE مصوب', en: 'Rig hire for a development well on an approved AFE' },
        { fa: 'جریمه تخلف زیست‌محیطی', en: 'A fine for an environmental breach' },
        { fa: 'مواد شیمیایی چاه‌های تولیدی با GRN', en: 'Chemicals for producing wells with a GRN' },
        { fa: 'هزینه لرزه‌نگاری در محدوده قرارداد', en: 'Seismic within the contract area' },
      ],
      answer: 1,
      explain: {
        fa: 'جریمه‌ها و خسارت ناشی از تخلف معمولاً صراحتاً غیرقابل بازیافت‌اند، چون هزینه ضروری عملیات نیستند. سه گزینه دیگر هزینه‌های عادی اکتشاف، توسعه و تولیدند که با مدرک کامل قابل بازیافت‌اند.',
        en: 'Fines and damages from breaches are usually expressly non-recoverable, because they are not necessary operating costs. The other three are normal exploration, development and production costs, recoverable with full evidence.',
      },
    },
    {
      q: {
        fa: 'کدام جمله درباره قراردادهای بیع متقابل و IPC ایران درست است؟',
        en: 'Which statement about Iran’s buy-back and IPC contracts is correct?',
      },
      options: [
        { fa: 'پیمانکار مالک ذخایر میدان می‌شود', en: 'The contractor becomes the owner of the field’s reserves' },
        { fa: 'پیمانکار تولید را از سر چاه می‌فروشد و فقط مالیات می‌پردازد', en: 'The contractor sells production at the wellhead and only pays tax' },
        { fa: 'سهم پیمانکار از نفت سود با عامل R تعیین می‌شود', en: 'The contractor’s share of profit oil is set by the R-factor' },
        { fa: 'پیمانکار مالک ذخایر نمی‌شود و هزینه و حق‌الزحمه‌اش از سهمی از تولید یا درآمد میدان پرداخت می‌شود', en: 'The contractor never owns the reserves, and its costs and fee are paid from a share of the field’s production or revenue' },
      ],
      answer: 3,
      explain: {
        fa: 'قوانین ایران مالکیت منابع را برای دولت نگه می‌دارد؛ پس این قراردادها خدماتی‌گونه‌اند و پیمانکار هزینه و حق‌الزحمه را از سهم سقف‌دار تولید یا درآمد می‌گیرد. فروش از سر چاه ویژگی قرارداد امتیازی و عامل R ویژگی برخی PSCهاست.',
        en: 'Iran’s laws keep resource ownership with the state, so these contracts are service-type and the contractor receives costs and a fee from a capped share of production or revenue. Selling at the wellhead belongs to concessions, and the R-factor to some PSCs.',
      },
    },
    {
      q: {
        fa: 'مانده انتقالی ابتدای سال 5,000,000، هزینه قابل بازیافت جدید 15,000,000 و سقف سال 18,000,000 است. نفت هزینه و انتقالی پایان سال چیست؟',
        en: 'The opening carry-forward is 5,000,000, new recoverable cost is 15,000,000 and the year’s ceiling is 18,000,000. What are cost oil and the closing carry-forward?',
      },
      options: [
        { fa: 'نفت هزینه 15,000,000؛ انتقالی 5,000,000', en: 'Cost oil 15,000,000; carry-forward 5,000,000' },
        { fa: 'نفت هزینه 20,000,000؛ انتقالی صفر', en: 'Cost oil 20,000,000; carry-forward zero' },
        { fa: 'نفت هزینه 18,000,000؛ انتقالی 2,000,000', en: 'Cost oil 18,000,000; carry-forward 2,000,000' },
        { fa: 'نفت هزینه 18,000,000؛ انتقالی صفر', en: 'Cost oil 18,000,000; carry-forward zero' },
      ],
      answer: 2,
      explain: {
        fa: 'قابل بازیافت = 5,000,000 + 15,000,000 = 20,000,000؛ نفت هزینه کمترینِ 20,000,000 و 18,000,000 یعنی 18,000,000؛ انتقالی 2,000,000. گزینه اول مانده قبلی را نادیده گرفته و گزینه دوم سقف را.',
        en: 'Recoverable = 5,000,000 + 15,000,000 = 20,000,000; cost oil is the lower of 20,000,000 and 18,000,000, so 18,000,000; carry-forward 2,000,000. The first option ignores the opening balance and the second ignores the ceiling.',
      },
    },
    {
      q: {
        fa: 'کدام اطلاعات روی هر سطر هزینه در ERP لازم است تا صورت بازیافت هزینه به تفکیک دسته ساخته شود؟',
        en: 'What information must each ERP cost line carry so the cost-recovery statement can be built by category?',
      },
      options: [
        { fa: 'شیء هزینه با دسته هزینه و نشانگر بازیافت، و ارجاع به AFE', en: 'A cost object with its cost category and recoverable flag, and the AFE reference' },
        { fa: 'فقط مبلغ و تاریخ', en: 'Only the amount and date' },
        { fa: 'فقط نام تأمین‌کننده', en: 'Only the vendor’s name' },
        { fa: 'فقط کد حساب دفتر کل', en: 'Only the ledger account code' },
      ],
      answer: 0,
      explain: {
        fa: 'حساب دفتر کل نوع هزینه را می‌گوید، نه دسته قراردادی یا قابل بازیافت بودن آن. شیء هزینه (WBS، مرکز هزینه) با ویژگی‌های دسته و نشانگر بازیافت، و ارجاع به AFE، امکان جمع‌بندی درست و دفاع در حسابرسی را می‌دهد.',
        en: 'The ledger account tells the type of cost, not its contract category or recoverability. The cost object (WBS, cost centre) with its category and recoverable attributes, plus the AFE reference, allows correct totals and an audit defence.',
      },
    },
    {
      q: {
        fa: 'در سالی که سقف محدودکننده نیست، حسابرسی 1,000,000 هزینه را رد می‌کند و سهم پیمانکار از نفت سود 40٪ است. سهم استحقاقی پیمانکار چقدر کم می‌شود؟',
        en: 'In a year when the ceiling does not bind, an audit rejects 1,000,000 of cost and the contractor’s profit oil share is 40%. By how much does the contractor’s entitlement fall?',
      },
      options: [
        { fa: '1,000,000', en: '1,000,000' },
        { fa: '600,000', en: '600,000' },
        { fa: '400,000', en: '400,000' },
        { fa: 'صفر', en: 'Zero' },
      ],
      answer: 1,
      explain: {
        fa: 'نفت هزینه 1,000,000 کم و نفت سود 1,000,000 زیاد می‌شود؛ پیمانکار 40٪ آن (400,000) را از نفت سود پس می‌گیرد، پس زیان خالص 1,000,000 × 60٪ = 600,000 است. «صفر» فقط وقتی درست است که سقف محدودکننده باشد و اثر به آینده منتقل شود.',
        en: 'Cost oil falls by 1,000,000 and profit oil rises by 1,000,000; the contractor gets 40% of that (400,000) back as profit oil, so the net loss is 1,000,000 × 60% = 600,000. "Zero" is right only when the ceiling binds and the effect moves to later years.',
      },
    },
    {
      q: {
        fa: 'پیمانکار طبق IFRS چه مبلغی را درآمد فروش نفت می‌شناسد؟',
        en: 'What does the contractor recognise as oil sales revenue under IFRS?',
      },
      options: [
        { fa: 'ارزش کل تولید ناخالص میدان', en: 'The value of the field’s entire gross production' },
        { fa: 'فقط نفت هزینه', en: 'Only cost oil' },
        { fa: 'سهم استحقاقی خود (نفت هزینه به‌علاوه سهمش از نفت سود) که می‌فروشد', en: 'Its entitlement (cost oil plus its profit oil) that it sells' },
        { fa: 'کل نفت سود', en: 'All of the profit oil' },
      ],
      answer: 2,
      explain: {
        fa: 'بهره مالکانه و سهم دولت از نفت سود مال دولت‌اند، نه پیمانکار؛ پس پیمانکار فقط سهم استحقاقی خود را درآمد می‌شناسد و در مشارکت، هر شریک سهم خودش را. ثبت کل تولید، درآمد را بیش از واقع نشان می‌دهد.',
        en: 'The royalty and the state’s profit oil belong to the state, not the contractor, so the contractor recognises only its entitlement as revenue, and in a joint venture each partner its own share. Recording all production overstates revenue.',
      },
    },
  ],
}
