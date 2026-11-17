import type { Lesson } from '../types'

const t = (fa: string, en: string) => ({ fa, en })

/** Account title carrying the trading partner (the group company on the other side). */
const tp = (fa: string, en: string, code: string) => t(`${fa} (طرف معامله: \`${code}\`)`, `${en} (trading partner \`${code}\`)`)

/* Masar group: Masar Petroleum (MP01), Masar Drilling Services (MP02), Masar Petroleum Oman Services (MP03). */
const ac = {
  bank: t('1110 موجودی نقد (بانک)', '1110 Cash at bank'),
  inventory: t('1310 موجودی مواد و قطعات', '1310 Materials and spares inventory'),
  icRec02: tp('1810 دریافتنی بین شرکتی', '1810 Intercompany receivables', 'MP02'),
  icRec01: tp('1810 دریافتنی بین شرکتی', '1810 Intercompany receivables', 'MP01'),
  icRec03: tp('1810 دریافتنی بین شرکتی', '1810 Intercompany receivables', 'MP03'),
  icLoanRec: tp('1820 وام پرداختی به شرکت‌های گروه', '1820 Loans to group companies', 'MP02'),
  investment: t('1830 سرمایه‌گذاری در شرکت فرعی `MP02`', '1830 Investment in subsidiary `MP02`'),
  branchCurrent: t('1890 حساب جاری شعبه بندرعباس', '1890 Bandar Abbas branch current account'),
  grir: tp('2120 حساب واسط GR/IR', '2120 GR/IR clearing account', 'MP02'),
  icPay01: tp('2810 پرداختنی بین شرکتی', '2810 Intercompany payables', 'MP01'),
  icPay02: tp('2810 پرداختنی بین شرکتی', '2810 Intercompany payables', 'MP02'),
  icLoanPay: tp('2820 وام دریافتی از شرکت‌های گروه', '2820 Loans from group companies', 'MP01'),
  hoCurrent: t('2890 حساب جاری دفتر مرکزی (در دفاتر شعبه)', '2890 Head-office current account (in the branch books)'),
  bankLoans: t('2410 وام‌های بانکی', '2410 Bank loans'),
  shareCapital: t('3110 سرمایه (`MP02`)', '3110 Share capital (`MP02`)'),
  retained: t('3310 سود انباشته', '3310 Retained earnings'),
  nci: t('3510 منافع فاقد حق کنترل', '3510 Non-controlling interests'),
  interestIncome: tp('4410 درآمد بهره', '4410 Interest income', 'MP02'),
  feeIncome: tp('4510 درآمد خدمات مدیریت', '4510 Management fee income', 'MP02'),
  rechargeIncome: tp('4520 درآمد خدمات و بازپرداخت هزینه', '4520 Service and recharge income', 'MP03'),
  dividendIncome: tp('4610 درآمد سود سهام', '4610 Dividend income', 'MP02'),
  revenue02: t('4310 درآمد خدمات حفاری و تعمیر چاه (`MP02`)', '4310 Drilling and workover revenue (`MP02`)'),
  repairs: t('5120 هزینه تعمیر و نگهداری (`CC-ARY-PRD`، R، عملیاتی)', '5120 Repairs and maintenance expense (`CC-ARY-PRD`, R, Operating)'),
  ga01: tp('5900 هزینه‌های اداری و عمومی', '5900 General and administrative expense', 'MP01'),
  costOfSales: t('6100 بهای تمام‌شده خدمات و فروش', '6100 Cost of services and sales'),
  interestExp: tp('7110 هزینه بهره', '7110 Interest expense', 'MP01'),
  fx: t('5820 زیان تسعیر ارز تحقق‌نیافته', '5820 Unrealised exchange loss'),
}

const blank = t('', '')

export const lesson: Lesson = {
  slug: 'intercompany-consolidation',
  number: 29,
  currency: 'usd',
  level: 'advanced',
  minutes: 50,
  icon: 'Users',
  tone: 'equity',
  title: t('معاملات بین شرکتی و تلفیق', 'Intercompany Transactions and Consolidation'),
  summary: t(
    'ساختار گروه در صنعت نفت و گاز (شرکت اصلی، شرکت‌های فرعی عملیاتی، شعبه‌ها)، معاملات بین شرکتی (خدمات، وام، بازپرداخت هزینه)، تطبیق و حذف آن‌ها، تلفیق ساده مسار پترولیوم و شرکت فرعی حفاری‌اش، منافع فاقد حق کنترل، و پشتیبانی ERP با فیلد طرف معامله و سندهای حذف.',
    'Group structures in oil and gas (parent, operating subsidiaries, branches), intercompany transactions (services, loans, recharges), matching and eliminating them, a simple consolidation of Masar Petroleum and its drilling subsidiary, non-controlling interests, and how the ERP supports them with the trading partner field and elimination entries.',
  ),
  objectives: [
    t('شرکت اصلی، شرکت فرعی، شعبه و عملیات مشترک را از هم تشخیص دهید و بگویید هر کدام چگونه در صورت‌های گروه می‌آید', 'Tell a parent, subsidiary, branch and joint operation apart and say how each appears in the group statements'),
    t('معاملات بین شرکتی را با فیلد طرف معامله در دفاتر هر دو طرف ثبت کنید', 'Record intercompany transactions in both companies’ books with the trading partner field'),
    t('مانده‌ها و معاملات بین شرکتی را تطبیق دهید و علت اختلاف‌ها را پیدا کنید', 'Match intercompany balances and transactions and find the causes of differences'),
    t('سندهای حذف را بنویسید و صورت‌های تلفیقی شرکت اصلی و یک شرکت فرعی را تهیه کنید', 'Write elimination entries and prepare consolidated statements for a parent and one subsidiary'),
    t('منافع فاقد حق کنترل را در ترازنامه و سود سال حساب کنید', 'Compute non-controlling interests in the balance sheet and in profit for the year'),
  ],
  sections: [
    {
      id: 'why-group',
      title: t('چرا صورت‌های تلفیقی؟', 'Why Consolidated Statements?'),
      blocks: [
        {
          type: 'p',
          text: t(
            'مسار پترولیوم اپراتور میدان آریا است، اما تنها نیست: شرکت خدمات حفاری مسار دکل‌های تعمیر چاه دارد، مسار پترولیوم خدمات عمان به اپراتورهای عمانی خدمات می‌دهد و یک شعبه در بندرعباس کالاهای وارداتی را ترخیص می‌کند. مسار پترولیوم به شرکت حفاری وام داده، از آن خدمات می‌خرد و برایش هزینه مدیریت صورت‌حساب می‌کند. اگر صورت‌های این شرکت‌ها را فقط با هم جمع کنیم، درآمدی که گروه از «خودش» گرفته، طلبی که از «خودش» دارد و سرمایه‌گذاری‌ای که در «خودش» کرده، همه بزرگ‌نمایی می‌شوند.',
            'Masar Petroleum operates the Arya field, but it does not stand alone: Masar Drilling Services owns workover rigs, Masar Petroleum Oman Services serves Omani operators, and a branch in Bandar Abbas clears imported goods. Masar Petroleum has lent money to the drilling company, buys services from it and bills it a management fee. If we simply add up these companies’ statements, the revenue the group earned from "itself", the receivable it holds on "itself" and the investment it made in "itself" are all overstated.',
          ),
        },
        {
          type: 'p',
          text: t(
            '**گروه** یعنی **شرکت اصلی** و **شرکت‌های فرعی** که کنترل می‌کند. **صورت‌های مالی تلفیقی** گروه را مانند **یک واحد اقتصادی** نشان می‌دهند. **معامله بین شرکتی** معامله‌ای بین دو عضو گروه است. در **تلفیق**، صورت‌های اعضا سطربه‌سطر جمع می‌شوند و سپس با **سندهای حذف** هر اثر معاملات درون گروه پاک می‌شود، تا فقط معامله با بیرون از گروه باقی بماند.',
            'A **group** is a **parent** and the **subsidiaries** it controls. **Consolidated financial statements** present the group as **a single economic entity**. An **intercompany transaction** is one between two members of the group. In **consolidation**, the members’ statements are added line by line, and then **elimination entries** remove every effect of transactions inside the group, so only dealings with the outside world remain.',
          ),
        },
        {
          type: 'list',
          items: [
            t('**درآمد و هزینه**: خدمات حفاری که `MP02` به `MP01` فروخته، فروش گروه به بیرون نیست.', '**Revenue and expense**: drilling services `MP02` sold to `MP01` are not a sale by the group to outsiders.'),
            t('**طلب و بدهی**: گروه نمی‌تواند از خودش طلبکار یا به خودش بدهکار باشد.', '**Receivables and payables**: a group cannot owe money to itself.'),
            t('**سرمایه‌گذاری و حقوق مالکانه**: سرمایه‌گذاری شرکت اصلی در شرکت فرعی با سهمش از حقوق مالکانه شرکت فرعی جایگزین می‌شود.', '**Investment and equity**: the parent’s investment in the subsidiary is replaced by its share of the subsidiary’s equity.'),
            t('**سود تحقق‌نیافته**: سودی که یک عضو با فروش کالا به عضو دیگر برده و کالا هنوز در گروه است، هنوز سود گروه نیست.', '**Unrealised profit**: profit one member made selling goods to another, while the goods are still in the group, is not yet group profit.'),
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: t('جمع ساده چقدر خطا دارد؟', 'How wrong is a simple sum?'),
          text: t(
            'در مثال تلفیق همین درس، اگر صورت‌های `MP01` و `MP02` را بدون حذف جمع کنیم، جمع دارایی‌ها 80,000,000 + 25,600,000 = 105,600,000 می‌شود، در حالی که دارایی واقعی گروه 87,000,000 است؛ و درآمد 61,000,000 به‌جای 59,000,000 گزارش می‌شود. 18,600,000 دارایی «ساختگی» همان سرمایه‌گذاری، وام و طلبی است که گروه از خودش دارد.',
            'In this lesson’s consolidation example, adding `MP01`’s and `MP02`’s statements without eliminations gives total assets of 80,000,000 + 25,600,000 = 105,600,000, while the group’s real assets are 87,000,000; and revenue is reported as 61,000,000 instead of 59,000,000. The 18,600,000 of "phantom" assets is exactly the investment, loan and receivable the group holds on itself.',
          ),
        },
      ],
    },
    {
      id: 'group-structure',
      title: t('ساختار گروه در نفت و گاز', 'Group Structures in Oil and Gas'),
      blocks: [
        {
          type: 'p',
          text: t(
            'طبق IFRS 10، شرکت اصلی وقتی **کنترل** دارد که سه شرط با هم برقرار باشد: **قدرت** بر فعالیت‌های مرتبط شرکت سرمایه‌پذیر، **در معرض بازده متغیر** بودن، و **توانایی استفاده از قدرت** برای اثر گذاشتن بر آن بازده. معمولاً بیش از نیمی از حق رأی کنترل می‌آورد، اما نه همیشه؛ آنچه مهم است قدرت واقعی است. استانداردهای حسابداری ایران هم استانداردی برای صورت‌های تلفیقی بر پایه همین اصول دارند. شرکت‌های بالادستی معمولاً یک شرکت اصلی (اغلب اپراتور)، چند شرکت فرعی عملیاتی (حفاری، خدمات، بازرگانی، شرکت‌های خارجی)، شعبه‌ها و سهم در مشارکت‌ها دارند.',
            'Under IFRS 10 a parent has **control** when three things hold together: **power** over the investee’s relevant activities, **exposure to variable returns**, and the **ability to use that power** to affect those returns. More than half of the votes usually brings control, but not always; what matters is real power. Iranian accounting standards also include a standard on consolidated statements built on the same principles. Upstream companies typically have a parent (often the operator), several operating subsidiaries (drilling, services, trading, foreign companies), branches and interests in joint ventures.',
          ),
        },
        {
          type: 'table',
          caption: t('گروه مسار (ارقام مالکیت برای این درس)', 'The Masar group (ownership figures for this lesson)'),
          head: [t('واحد', 'Entity'), t('نوع', 'Type'), t('مالکیت', 'Ownership'), t('در ERP', 'In the ERP'), t('در صورت‌های گروه', 'In the group statements')],
          rows: [
            [t('مسار پترولیوم', 'Masar Petroleum'), t('شرکت اصلی؛ اپراتور میدان آریا', 'Parent; operator of the Arya field'), blank, t('کد شرکت `MP01`', 'Company code `MP01`'), t('شرکت اصلی', 'The parent')],
            [t('شرکت خدمات حفاری مسار', 'Masar Drilling Services'), t('شرکت فرعی عملیاتی (دکل‌های تعمیر چاه)', 'Operating subsidiary (workover rigs)'), t('80٪؛ 20٪ سرمایه‌گذاری کیش', '80%; 20% Kish Investment'), t('کد شرکت `MP02`', 'Company code `MP02`'), t('تلفیق کامل با 20٪ منافع فاقد حق کنترل', 'Fully consolidated with 20% non-controlling interests')],
            [t('مسار پترولیوم خدمات عمان', 'Masar Petroleum Oman Services'), t('شرکت فرعی خارجی', 'Foreign subsidiary'), t('100٪ در این درس', '100% in this lesson'), t('کد شرکت `MP03`', 'Company code `MP03`'), t('تلفیق کامل پس از تسعیر از ارز عملیاتی‌اش', 'Fully consolidated after translation from its functional currency')],
            [t('شعبه بندرعباس', 'Bandar Abbas branch'), t('شعبه، بخشی از همان شخصیت حقوقی', 'Branch, part of the same legal entity'), t('بخشی از `MP01`', 'Part of `MP01`'), t('مرکز سود `PC-BND` درون `MP01`', 'Profit centre `PC-BND` inside `MP01`'), t('از قبل در صورت‌های خود `MP01` است', 'Already inside `MP01`’s own statements')],
            [t('مشارکت میدان آریا', 'Arya joint venture'), t('عملیات مشترک', 'Joint operation'), t('50٪', '50%'), t('کد مشارکت `JV-ARY` درون `MP01`', 'Venture code `JV-ARY` inside `MP01`'), t('سهم از دارایی‌ها، بدهی‌ها، درآمد و هزینه (IFRS 11)', 'Share of assets, liabilities, revenue and expenses (IFRS 11)')],
          ],
        },
        {
          type: 'compare',
          left: {
            title: t('شرکت فرعی', 'Subsidiary'),
            items: [
              t('شخصیت حقوقی جدا با دفاتر قانونی و حسابرسی خودش', 'A separate legal entity with its own legal books and audit'),
              t('ممکن است سهامدار اقلیت داشته باشد (منافع فاقد حق کنترل)', 'May have minority shareholders (non-controlling interests)'),
              t('در دفاتر شرکت اصلی به‌صورت «سرمایه‌گذاری» دیده می‌شود', 'Appears in the parent’s books as an "investment"'),
              t('فقط در صورت‌های تلفیقی با شرکت اصلی جمع می‌شود', 'Combined with the parent only in the consolidated statements'),
            ],
          },
          right: {
            title: t('شعبه', 'Branch'),
            items: [
              t('بخشی از همان شخصیت حقوقی', 'Part of the same legal entity'),
              t('سهامدار جدا ندارد', 'Has no separate shareholders'),
              t('با حساب جاری شعبه و حساب جاری دفتر مرکزی به شرکت وصل است', 'Linked to the company through branch and head-office current accounts'),
              t('همین حالا در صورت‌های خود شرکت است؛ حساب‌های جاری درون شرکت حذف می‌شوند', 'Already in the company’s own statements; the current accounts cancel within the company'),
            ],
          },
        },
        {
          type: 'p',
          text: t(
            'چرا گروه‌های نفتی این‌قدر شرکت دارند؟ بسیاری از قراردادهای نفتی و نظام‌های مالیاتی هزینه‌ها را **به تفکیک حوزه قراردادی جدا (Ring-fence)** می‌کنند: هزینه یک بلوک را نمی‌توان با درآمد بلوک دیگر جبران کرد. به همین دلیل گروه‌ها اغلب برای هر قرارداد یا هر کشور یک شرکت جدا می‌سازند، خدمات تخصصی مانند حفاری را در شرکت فرعی جدا نگه می‌دارند و ریسک‌های بزرگ را از شرکت اصلی دور می‌کنند. نتیجه، معاملات بین شرکتی زیاد و تلفیق پیچیده‌تر است.',
            'Why do oil groups have so many companies? Many petroleum contracts and tax regimes **ring-fence** costs by contract area: one block’s costs cannot be set against another block’s income. So groups often create a separate company for each contract or country, keep specialist services such as drilling in a separate subsidiary, and keep large risks away from the parent. The result is many intercompany transactions and a more complex consolidation.',
          ),
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('در عمل: ایران، عمان و IFRS', 'In practice: Iran, Oman and IFRS'),
          text: t(
            'هر شرکت فرعی دفاتر قانونی، صورت‌های مالی و حسابرسی خودش را در کشور خودش دارد؛ مسار پترولیوم خدمات عمان طبق قوانین عمان مالیات می‌دهد (درس «مالیات بر درآمد شرکت‌ها در عمان»). شرکت اصلی علاوه بر صورت‌های جداگانه خود، صورت‌های تلفیقی هم تهیه می‌کند؛ الزامات انتشار آن برای شرکت‌های بورسی ایران را از مقررات روز بررسی کنید. در حسابداری شعب در ایران، دو حساب «جاری شعبه» و «جاری مرکز» آینه یکدیگرند و در صورت‌های شرکت صفر می‌شوند.',
            'Each subsidiary keeps its own legal books, financial statements and audit in its own country; Masar Petroleum Oman Services pays tax under Omani law (see the lesson on corporate income tax in Oman). The parent prepares consolidated statements in addition to its own separate statements; check the current regulations for publication requirements for listed companies in Iran. In Iranian branch accounting, the "branch current" and "head-office current" accounts mirror each other and net to zero in the company’s statements.',
          ),
        },
      ],
    },
    {
      id: 'ic-transactions',
      title: t('معاملات بین شرکتی: خدمات، وام و بازپرداخت هزینه', 'Intercompany Transactions: Services, Loans and Recharges'),
      blocks: [
        {
          type: 'p',
          text: t(
            'هر معامله بین شرکتی **دو سند** دارد: یکی در دفاتر فروشنده و یکی در دفاتر خریدار. هر سطر این سندها فیلد **طرف معامله (Trading partner)** دارد که کد شرکت مقابل را نگه می‌دارد. همین فیلد است که بعداً تطبیق و حذف خودکار را ممکن می‌کند. معاملات رایج در گروه‌های نفتی:',
            'Every intercompany transaction has **two documents**: one in the seller’s books and one in the buyer’s. Every line of these documents carries the **trading partner** field, holding the code of the company on the other side. That field is what later makes automatic matching and elimination possible. Common transactions in oil groups:',
          ),
        },
        {
          type: 'table',
          caption: t('انواع معامله بین شرکتی در گروه مسار', 'Types of intercompany transaction in the Masar group'),
          head: [t('نوع', 'Type'), t('نمونه', 'Example'), t('نکته', 'Watch out for')],
          rows: [
            [t('خدمات', 'Services'), t('تعمیر چاه توسط `MP02` برای `MP01`؛ خدمات فنی `MP01` برای `MP03`', 'Workover by `MP02` for `MP01`; technical services by `MP01` for `MP03`'), t('SES و تطبیق سه‌طرفه مثل هر تأمین‌کننده؛ قیمت در حد معاملات مستقل', 'SES and three-way match like any vendor; arm’s-length price')],
            [t('وام و بهره', 'Loans and interest'), t('وام 10,000,000 `MP01` به `MP02` برای خرید دکل', '`MP01`’s 10,000,000 loan to `MP02` to buy a rig'), t('قرارداد وام، نرخ بهره و سررسید مکتوب', 'Written loan agreement, interest rate and maturity')],
            [t('هزینه مدیریت و بازپرداخت هزینه', 'Management fees and recharges'), t('هزینه مدیریت ماهانه 100,000 از `MP01` به `MP02`؛ بیمه و مجوز نرم‌افزار مشترک', 'A 100,000 monthly management fee from `MP01` to `MP02`; shared insurance and software licences'), t('مبنای تسهیم مستند، مثل درس «مراکز هزینه و تسهیم هزینه‌ها»', 'A documented allocation basis, as in the lesson on cost centres and cost allocation')],
            [t('فروش مواد و دارایی', 'Sale of materials and assets'), t('فروش قطعات یدکی `MP02` به `MP03`', '`MP02` selling spare parts to `MP03`'), t('سود تحقق‌نیافته در موجودی پایان دوره', 'Unrealised profit in closing stock')],
            [t('سود سهام', 'Dividends'), t('سود سهام `MP02` به سهامدارانش', '`MP02`’s dividend to its shareholders'), t('سهم شرکت اصلی حذف می‌شود؛ سهم اقلیت پرداخت واقعی به بیرون است', 'The parent’s share is eliminated; the minority’s share is a real payment to outsiders')],
          ],
        },
        {
          type: 'journal',
          title: t('هزینه مدیریت ماهانه در دفاتر دو طرف', 'The monthly management fee in both companies’ books'),
          entries: [
            {
              date: t('دفاتر `MP01` (فروشنده)', '`MP01` books (seller)'),
              lines: [
                { account: ac.icRec02, debit: 100000 },
                { account: ac.feeIncome, credit: 100000 },
              ],
              memo: t('فاکتور بین شرکتی هزینه مدیریت ماه؛ قرارداد خدمات و مبنای محاسبه پیوست.', 'Intercompany invoice for the month’s management fee; service agreement and calculation attached.'),
            },
            {
              date: t('دفاتر `MP02` (خریدار)', '`MP02` books (buyer)'),
              lines: [
                { account: ac.ga01, debit: 100000 },
                { account: ac.icPay01, credit: 100000 },
              ],
              memo: t('همان فاکتور که ERP خودکار به‌صورت فاکتور خرید در `MP02` ساخته است.', 'The same invoice, created automatically by the ERP as a vendor invoice in `MP02`.'),
            },
          ],
        },
        {
          type: 'journal',
          title: t('وام و بهره سالانه (نرخ فرضی 8 درصد)', 'The loan and a year’s interest (illustrative 8 percent rate)'),
          entries: [
            {
              date: t('`MP01`: پرداخت وام', '`MP01`: loan paid out'),
              lines: [
                { account: ac.icLoanRec, debit: 10000000 },
                { account: ac.bank, credit: 10000000 },
              ],
            },
            {
              date: t('`MP02`: دریافت وام', '`MP02`: loan received'),
              lines: [
                { account: ac.bank, debit: 10000000 },
                { account: ac.icLoanPay, credit: 10000000 },
              ],
            },
            {
              date: t('`MP01`: بهره سال', '`MP01`: interest for the year'),
              lines: [
                { account: ac.icRec02, debit: 800000 },
                { account: ac.interestIncome, credit: 800000 },
              ],
              memo: t('10,000,000 × 8٪ = 800,000', '10,000,000 × 8% = 800,000'),
            },
            {
              date: t('`MP02`: بهره سال', '`MP02`: interest for the year'),
              lines: [
                { account: ac.interestExp, debit: 800000 },
                { account: ac.icPay01, credit: 800000 },
              ],
            },
          ],
        },
        {
          type: 'p',
          text: t(
            'انتقال کالا از دفتر مرکزی به شعبه بندرعباس معامله بین شرکتی نیست، چون هر دو یک شخصیت حقوقی‌اند؛ اما اگر شعبه دفاتر جدا داشته باشد، با دو حساب جاری آینه‌ای ثبت می‌شود که در صورت‌های `MP01` یکدیگر را خنثی می‌کنند:',
            'Moving goods from head office to the Bandar Abbas branch is not an intercompany transaction, because both are one legal entity; but if the branch keeps separate books, it is recorded with two mirror current accounts that cancel out in `MP01`’s statements:',
          ),
        },
        {
          type: 'journal',
          title: t('ارسال کالا به شعبه', 'Sending goods to the branch'),
          entries: [
            {
              date: t('دفاتر دفتر مرکزی', 'Head-office books'),
              lines: [
                { account: ac.branchCurrent, debit: 400000 },
                { account: ac.inventory, credit: 400000 },
              ],
              memo: t('قطعات یدکی به انبار شعبه بندرعباس برای ارسال به میدان.', 'Spare parts to the Bandar Abbas branch store for shipment to the field.'),
            },
            {
              date: t('دفاتر شعبه', 'Branch books'),
              lines: [
                { account: ac.inventory, debit: 400000 },
                { account: ac.hoCurrent, credit: 400000 },
              ],
              memo: t('در صورت‌های `MP01`، 1890 و 2890 هر کدام 400,000 و آینه یکدیگرند و حذف می‌شوند.', 'In `MP01`’s statements, 1890 and 2890 are both 400,000, mirror each other and are eliminated.'),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('قیمت‌گذاری انتقالی', 'Transfer pricing'),
          text: t(
            'حذف در تلفیق مشکل مالیاتی را حل نمی‌کند. هر شرکت گروه جداگانه مالیات می‌دهد و مقامات مالیاتی معمولاً انتظار دارند معاملات با اشخاص وابسته **در حد معاملات مستقل (Arm’s length)** قیمت‌گذاری شوند. قرارداد، مبنای محاسبه و حاشیه سود هر خدمت یا وام بین شرکتی را مستند کنید و قواعد روز هر کشور را بررسی کنید.',
            'Elimination on consolidation does not solve the tax question. Each group company pays its own tax, and tax authorities generally expect related-party transactions to be priced **at arm’s length**. Document the contract, the basis of charge and the margin of every intercompany service or loan, and check each country’s current rules.',
          ),
        },
      ],
    },
    {
      id: 'matching-elimination',
      title: t('تطبیق و حذف', 'Matching and Elimination'),
      blocks: [
        {
          type: 'p',
          text: t(
            'پیش از هر تلفیق، هر **جفت** شرکت گروه باید مانده‌ها و گردش‌های بین خود را **تطبیق** دهد: طلب یکی با بدهی دیگری، درآمد یکی با هزینه دیگری. در مسار پترولیوم این کار هر ماه تا روز کاری سوم انجام می‌شود (درس «بستن ماه و سال در شرکت نفت و گاز») و در پایان سال با دقت بیشتر. گزارش تطبیق پایان سال جفت `MP01` و `MP02` پیش از اصلاح:',
            'Before any consolidation, each **pair** of group companies must **match** the balances and flows between them: one’s receivable against the other’s payable, one’s income against the other’s expense. At Masar Petroleum this is done every month by working day 3 (see the lesson on the month-end and year-end close) and with extra care at year-end. The year-end matching report for the `MP01` and `MP02` pair, before corrections:',
          ),
        },
        {
          type: 'table',
          caption: t('تطبیق `MP01` و `MP02` در پایان سال، پیش از اصلاح', 'Matching `MP01` and `MP02` at year-end, before corrections'),
          head: [t('قلم', 'Item'), t('در `MP01`', 'In `MP01`'), t('در `MP02`', 'In `MP02`'), t('اختلاف', 'Difference'), t('علت', 'Cause')],
          numericCols: [1, 2, 3],
          rows: [
            [t('وام (1820 در برابر 2820)', 'Loan (1820 against 2820)'), 10000000, 10000000, 0, t('تطبیق‌شده', 'Matched')],
            [t('طلب و بدهی جاری (1810 در برابر 2810)', 'Current receivable and payable (1810 against 2810)'), 600000, 500000, 100000, t('فاکتور هزینه مدیریت ماه آخر در `MP02` ثبت نشده', 'Last month’s management fee invoice not booked in `MP02`')],
            [t('درآمد و هزینه مدیریت (4510 در برابر 5900)', 'Management fee income and expense (4510 against 5900)'), 1200000, 1100000, 100000, t('همان فاکتور', 'The same invoice')],
            [t('درآمد و هزینه بهره (4410 در برابر 7110)', 'Interest income and expense (4410 against 7110)'), 800000, 800000, 0, t('تطبیق‌شده', 'Matched')],
          ],
        },
        {
          type: 'steps',
          items: [
            { title: t('رقم فروشنده ملاک است', 'The seller’s figure leads'), text: t('فاکتور صادرشده را فروشنده ثبت کرده است؛ خریدار سند جاافتاده را ثبت می‌کند یا در صورت اعتراض، اختلاف را رسماً اعلام می‌کند.', 'The seller has booked the invoice it issued; the buyer posts the missing document or formally raises a dispute.') },
            { title: t('تقویم قطع عملیات بین شرکتی', 'An intercompany cut-off calendar'), text: t('فاکتورهای بین شرکتی تا یک روز پیش از پایان ماه صادر می‌شوند تا هر دو طرف در همان دوره ثبت کنند.', 'Intercompany invoices are issued by the day before month-end, so both sides book them in the same period.') },
            { title: t('نرخ ارز گروه', 'Group exchange rates'), text: t('هر دو طرف برای اقلام ارزی بین شرکتی از جدول نرخ مصوب گروه استفاده می‌کنند.', 'Both sides use the approved group rate table for foreign-currency intercompany items.') },
            { title: t('طرف معامله اجباری', 'Mandatory trading partner'), text: t('حساب‌های 1810، 1820، 2810 و 2820 بدون فیلد طرف معامله ثبت نمی‌شوند.', 'Accounts 1810, 1820, 2810 and 2820 cannot be posted without the trading partner field.') },
            { title: t('مهلت و ارجاع', 'Deadline and escalation'), text: t('اختلافی که تا روز کاری سوم حل نشود، به کنترلرهای هر دو شرکت ارجاع می‌شود؛ هیچ اختلافی با عدد ساختگی پوشانده نمی‌شود.', 'A difference not resolved by working day 3 goes to both companies’ controllers; no difference is covered with a plug.') },
          ],
        },
        {
          type: 'journal',
          title: t('اصلاح در دفاتر `MP02`', 'The correction in `MP02`’s books'),
          entries: [
            {
              date: t('پایان سال، `MP02`', 'Year-end, `MP02`'),
              lines: [
                { account: ac.ga01, debit: 100000 },
                { account: ac.icPay01, credit: 100000 },
              ],
              memo: t('ثبت فاکتور جاافتاده هزینه مدیریت ماه آخر. پس از آن هر دو سطر تطبیق دارند: 600,000 و 1,200,000.', 'Booking the missing last-month management fee invoice. Afterwards both lines match: 600,000 and 1,200,000.'),
            },
          ],
        },
        {
          type: 'table',
          caption: t('انواع سند حذف در تلفیق', 'Types of elimination entry in consolidation'),
          head: [t('حذف', 'Elimination'), t('چه چیزی پاک می‌شود', 'What is removed'), t('اثر بر سود گروه', 'Effect on group profit')],
          rows: [
            [t('سرمایه‌گذاری در برابر حقوق مالکانه', 'Investment against equity'), t('سرمایه‌گذاری شرکت اصلی در برابر سرمایه (و اندوخته‌های پیش از تحصیل) شرکت فرعی؛ منافع فاقد حق کنترل ساخته می‌شود', 'The parent’s investment against the subsidiary’s share capital (and pre-acquisition reserves); non-controlling interests are set up'), t('ندارد', 'None')],
            [t('مانده‌های بین شرکتی', 'Intercompany balances'), t('طلب و بدهی، وام‌ها', 'Receivables and payables, loans'), t('ندارد', 'None')],
            [t('درآمد و هزینه بین شرکتی', 'Intercompany income and expense'), t('هزینه مدیریت، بهره، خدمات', 'Management fees, interest, services'), t('ندارد، اگر سودی در دارایی‌ها نمانده باشد', 'None, if no profit is left in assets')],
            [t('سود تحقق‌نیافته', 'Unrealised profit'), t('حاشیه سود در موجودی یا دارایی‌ای که هنوز در گروه است', 'The margin in stock or assets still inside the group'), t('کاهش', 'Reduces it')],
            [t('سود سهام بین شرکتی', 'Intercompany dividends'), t('درآمد سود سهام شرکت اصلی در برابر سود تقسیمی شرکت فرعی', 'The parent’s dividend income against the subsidiary’s dividend'), t('درآمد شرکت اصلی را حذف می‌کند', 'Removes the parent’s income')],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('تهاتر و تسویه منظم', 'Netting and regular settlement'),
          text: t(
            'مانده بین شرکتی که ماه‌ها تسویه نشود، احتمال اختلاف را بالا می‌برد. مسار پترولیوم هر ماه یک **اجرای تهاتر** دارد: طلب و بدهی هر جفت شرکت خالص می‌شود و فقط مانده خالص با یک انتقال بانکی پرداخت می‌شود. اقلام ارزی با نرخ گروه تسویه می‌شوند و تفاوت نرخ در دفاتر هر شرکت به سود و زیان تسعیر می‌رود.',
            'An intercompany balance left unsettled for months makes differences more likely. Masar Petroleum runs a monthly **netting run**: each pair’s receivables and payables are netted and only the net balance is paid with one bank transfer. Foreign-currency items are settled at the group rate, and any rate difference goes to FX gains and losses in each company’s books.',
          ),
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('سند حذف کجا ثبت می‌شود؟', 'Where are eliminations posted?'),
          text: t(
            'سندهای حذف فقط در **دفتر تلفیق** ثبت می‌شوند، نه در دفاتر هیچ‌یک از شرکت‌ها. دفاتر قانونی `MP01` و `MP02` همان می‌مانند که بودند، چون هر کدام شخصیت حقوقی جدا با صورت‌های مالی خودش است.',
            'Elimination entries are posted only in the **consolidation ledger**, never in any company’s books. The legal books of `MP01` and `MP02` stay exactly as they were, because each is a separate legal entity with its own financial statements.',
          ),
        },
      ],
    },
    {
      id: 'consolidation',
      title: t('تلفیق ساده: مسار پترولیوم و شرکت خدمات حفاری مسار', 'A Simple Consolidation: Masar Petroleum and Masar Drilling Services'),
      blocks: [
        {
          type: 'p',
          text: t(
            'شرکت خدمات حفاری مسار (`MP02`) ابتدای سال با سرمایه 10,000,000 تأسیس شد: مسار پترولیوم 8,000,000 (80 درصد) و سرمایه‌گذاری کیش 2,000,000 (20 درصد) پرداختند. پس اندوخته پیش از تحصیل و سرقفلی وجود ندارد. سود `MP02` در سال اول 3,000,000 است و سود سهامی تقسیم نشده. برای سادگی مالیات را نادیده می‌گیریم و `MP03` را کنار می‌گذاریم. مانده‌های بین شرکتی پس از اصلاح بالا تطبیق دارند. شش سند حذف:',
            'Masar Drilling Services (`MP02`) was formed at the start of the year with share capital of 10,000,000: Masar Petroleum paid 8,000,000 (80 percent) and Kish Investment 2,000,000 (20 percent). So there are no pre-acquisition reserves and no goodwill. `MP02`’s first-year profit is 3,000,000, and no dividend was paid. For simplicity we ignore tax and leave `MP03` out. The intercompany balances match after the correction above. The six elimination entries:',
          ),
        },
        {
          type: 'journal',
          title: t('سندهای حذف در دفتر تلفیق', 'Elimination entries in the consolidation ledger'),
          entries: [
            {
              date: t('حذف 1', 'Elimination 1'),
              lines: [
                { account: ac.shareCapital, debit: 10000000 },
                { account: ac.investment, credit: 8000000 },
                { account: ac.nci, credit: 2000000 },
              ],
              memo: t('سرمایه‌گذاری در برابر سرمایه؛ 20 درصد سرمایه سهم اقلیت است.', 'Investment against share capital; 20 percent of the capital belongs to the minority.'),
            },
            {
              date: t('حذف 2', 'Elimination 2'),
              lines: [
                { account: ac.retained, debit: 600000 },
                { account: ac.nci, credit: 600000 },
              ],
              memo: t('سهم اقلیت از سود سال `MP02`: 20٪ × 3,000,000. در صورت سود و زیان «سود قابل انتساب به منافع فاقد حق کنترل» است.', 'The minority’s share of `MP02`’s profit: 20% × 3,000,000. In the income statement it is "profit attributable to non-controlling interests".'),
            },
            {
              date: t('حذف 3', 'Elimination 3'),
              lines: [
                { account: ac.icLoanPay, debit: 10000000 },
                { account: ac.icLoanRec, credit: 10000000 },
              ],
              memo: t('وام بین شرکتی.', 'Intercompany loan.'),
            },
            {
              date: t('حذف 4', 'Elimination 4'),
              lines: [
                { account: ac.icPay01, debit: 600000 },
                { account: ac.icRec02, credit: 600000 },
              ],
              memo: t('طلب و بدهی جاری بین شرکتی.', 'Current intercompany receivable and payable.'),
            },
            {
              date: t('حذف 5', 'Elimination 5'),
              lines: [
                { account: ac.feeIncome, debit: 1200000 },
                { account: ac.ga01, credit: 1200000 },
              ],
              memo: t('هزینه مدیریت سال.', 'The year’s management fee.'),
            },
            {
              date: t('حذف 6', 'Elimination 6'),
              lines: [
                { account: ac.interestIncome, debit: 800000 },
                { account: ac.interestExp, credit: 800000 },
              ],
              memo: t('بهره وام سال.', 'The year’s loan interest.'),
            },
          ],
        },
        {
          type: 'table',
          caption: t('کاربرگ تلفیق: صورت سود و زیان', 'Consolidation worksheet: income statement'),
          head: [t('سطر', 'Line'), t('`MP01`', '`MP01`'), t('`MP02`', '`MP02`'), t('حذف‌ها', 'Eliminations'), t('گروه', 'Group')],
          numericCols: [1, 2, 3, 4],
          rows: [
            [t('درآمد از مشتریان بیرون از گروه', 'Revenue from customers outside the group'), 45000000, 14000000, 0, 59000000],
            [t('درآمد هزینه مدیریت و بهره بین شرکتی', 'Intercompany management fee and interest income'), 2000000, 0, -2000000, 0],
            [t('هزینه‌های عملیاتی', 'Operating expenses'), -31000000, -10200000, 1200000, -40000000],
            [t('هزینه بهره', 'Interest expense'), 0, -800000, 800000, 0],
            [t('**سود سال**', '**Profit for the year**'), 16000000, 3000000, 0, 19000000],
            [t('قابل انتساب به مالکان شرکت اصلی', 'Attributable to owners of the parent'), blank, blank, blank, 18400000],
            [t('قابل انتساب به منافع فاقد حق کنترل', 'Attributable to non-controlling interests'), blank, blank, blank, 600000],
          ],
        },
        {
          type: 'table',
          caption: t('کاربرگ تلفیق: ترازنامه پایان سال', 'Consolidation worksheet: year-end balance sheet'),
          head: [t('سطر', 'Line'), t('`MP01`', '`MP01`'), t('`MP02`', '`MP02`'), t('حذف‌ها', 'Eliminations'), t('گروه', 'Group')],
          numericCols: [1, 2, 3, 4],
          rows: [
            [t('سرمایه‌گذاری در `MP02`', 'Investment in `MP02`'), 8000000, 0, -8000000, 0],
            [t('وام به `MP02`', 'Loan to `MP02`'), 10000000, 0, -10000000, 0],
            [t('دریافتنی بین شرکتی', 'Intercompany receivable'), 600000, 0, -600000, 0],
            [t('سایر دارایی‌ها', 'Other assets'), 61400000, 25600000, 0, 87000000],
            [t('**جمع دارایی‌ها**', '**Total assets**'), 80000000, 25600000, -18600000, 87000000],
            [t('وام از `MP01`', 'Loan from `MP01`'), 0, 10000000, -10000000, 0],
            [t('پرداختنی بین شرکتی', 'Intercompany payable'), 0, 600000, -600000, 0],
            [t('سایر بدهی‌ها', 'Other liabilities'), 14000000, 2000000, 0, 16000000],
            [t('سرمایه', 'Share capital'), 40000000, 10000000, -10000000, 40000000],
            [t('سود انباشته', 'Retained earnings'), 26000000, 3000000, -600000, 28400000],
            [t('منافع فاقد حق کنترل', 'Non-controlling interests'), 0, 0, 2600000, 2600000],
            [t('**جمع بدهی‌ها و حقوق مالکانه**', '**Total liabilities and equity**'), 80000000, 25600000, -18600000, 87000000],
          ],
        },
        {
          type: 'steps',
          items: [
            { title: t('اقلام بین شرکتی صفر شدند', 'Intercompany lines are zero'), text: t('سرمایه‌گذاری، وام، طلب و بدهی و درآمد و هزینه بین شرکتی در ستون گروه صفرند؛ گروه نه از خودش طلب دارد نه به خودش درآمد داده.', 'Investment, loan, receivable and payable, and intercompany income and expense are all zero in the group column; the group neither owes itself nor earns from itself.') },
            { title: t('سود گروه تغییر نکرد', 'Group profit did not change'), text: t('16,000,000 + 3,000,000 = 19,000,000؛ حذف درآمد و هزینه بین شرکتی برابر است و سود را تغییر نمی‌دهد، فقط درآمد و هزینه را کوچک می‌کند.', '16,000,000 + 3,000,000 = 19,000,000; eliminating equal intercompany income and expense does not change profit, it only shrinks revenue and expenses.') },
            { title: t('سود انباشته گروه', 'Group retained earnings'), text: t('26,000,000 سود انباشته `MP01` + 80٪ × 3,000,000 = 28,400,000.', '`MP01`’s 26,000,000 + 80% × 3,000,000 = 28,400,000.') },
            { title: t('ترازنامه تراز است', 'The balance sheet balances'), text: t('16,000,000 + 40,000,000 + 28,400,000 + 2,600,000 = 87,000,000 = جمع دارایی‌ها.', '16,000,000 + 40,000,000 + 28,400,000 + 2,600,000 = 87,000,000 = total assets.') },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('خدمات `MP02` به مشارکت آریا', '`MP02`’s services to the Arya joint venture'),
          text: t(
            'برای سادگی، این مثال خدمات تعمیر چاه `MP02` به میدان آریا را کنار گذاشت. وقتی `MP02` برای مشارکت کار می‌کند، `MP01` هزینه را در حساب مشترک ثبت و 50 درصد آن را به البرز و دنا صورت‌حساب می‌کند. از دید گروه فقط سهم 50 درصدی مسار پترولیوم درون گروهی است؛ سهم شرکا فروش واقعی به بیرون است. پس گروه فقط سهم خودش از درآمد و هزینه را حذف می‌کند، و اگر هزینه سرمایه‌ای شده باشد، سود `MP02` در سهم خودش از دارایی را هم (طبق اصول IFRS 10 و IFRS 11).',
            'For simplicity this example left out `MP02`’s workover services to the Arya field. When `MP02` works for the joint venture, `MP01` books the cost in the joint account and bills 50 percent of it to Alborz and Dena. From the group’s view only Masar Petroleum’s 50 percent share is intragroup; the partners’ share is a real sale to outsiders. So the group eliminates only its own share of the revenue and cost, and, if the cost was capitalised, `MP02`’s profit in the group’s share of the asset too (under the principles of IFRS 10 and IFRS 11).',
          ),
        },
      ],
    },
    {
      id: 'nci',
      title: t('منافع فاقد حق کنترل', 'Non-Controlling Interests'),
      blocks: [
        {
          type: 'p',
          text: t(
            '**منافع فاقد حق کنترل (Non-controlling interests)** بخشی از حقوق مالکانه شرکت فرعی است که به شرکت اصلی تعلق ندارد؛ در گروه مسار، سهم 20 درصدی سرمایه‌گذاری کیش در `MP02`. چون شرکت اصلی شرکت فرعی را کنترل می‌کند، **همه** دارایی‌ها و بدهی‌های آن (نه 80 درصد) در ترازنامه گروه می‌آید و سهم اقلیت به‌صورت یک سطر جدا در **حقوق مالکانه** نشان داده می‌شود. سود سال هم بین مالکان شرکت اصلی و منافع فاقد حق کنترل تقسیم می‌شود.',
            '**Non-controlling interests (NCI)** are the part of a subsidiary’s equity that does not belong to the parent; in the Masar group, Kish Investment’s 20 percent of `MP02`. Because the parent controls the subsidiary, **all** of its assets and liabilities (not 80 percent) go into the group balance sheet, and the minority’s share appears as a separate line in **equity**. Profit for the year is also split between owners of the parent and non-controlling interests.',
          ),
        },
        {
          type: 'formula',
          text: t(
            'منافع فاقد حق کنترل = درصد اقلیت × خالص دارایی‌های شرکت فرعی؛ سود قابل انتساب به اقلیت = درصد اقلیت × سود شرکت فرعی',
            'NCI = Minority percentage × Subsidiary’s net assets; Profit attributable to NCI = Minority percentage × Subsidiary’s profit',
          ),
          note: t(
            '`MP02`: خالص دارایی 10,000,000 + 3,000,000 = 13,000,000؛ منافع فاقد حق کنترل 20٪ × 13,000,000 = 2,600,000؛ سهم سود 20٪ × 3,000,000 = 600,000 (بدون سرقفلی و تعدیل ارزش منصفانه).',
            '`MP02`: net assets 10,000,000 + 3,000,000 = 13,000,000; NCI 20% × 13,000,000 = 2,600,000; profit share 20% × 3,000,000 = 600,000 (no goodwill or fair-value adjustments).',
          ),
        },
        {
          type: 'table',
          caption: t('حقوق مالکانه در ترازنامه تلفیقی', 'Equity in the consolidated balance sheet'),
          head: [t('سطر', 'Line'), t('مبلغ', 'Amount')],
          numericCols: [1],
          rows: [
            [t('سرمایه', 'Share capital'), 40000000],
            [t('سود انباشته', 'Retained earnings'), 28400000],
            [t('منافع فاقد حق کنترل', 'Non-controlling interests'), 2600000],
            [t('**جمع حقوق مالکانه**', '**Total equity**'), 71000000],
          ],
        },
        {
          type: 'steps',
          items: [
            { title: t('حقوق مالکان شرکت اصلی', 'Equity of the parent’s owners'), text: t('40,000,000 + 28,400,000 = 68,400,000؛ منافع فاقد حق کنترل جدا و پس از آن می‌آید.', '40,000,000 + 28,400,000 = 68,400,000; NCI comes separately after it.') },
            { title: t('تقسیم سود سال', 'Splitting the year’s profit'), text: t('سود گروه 19,000,000: مالکان شرکت اصلی 18,400,000 و منافع فاقد حق کنترل 600,000.', 'Group profit 19,000,000: owners of the parent 18,400,000 and NCI 600,000.') },
            { title: t('آزمون', 'Check'), text: t('منافع فاقد حق کنترل پایان سال = سهم اولیه 2,000,000 + سهم سود 600,000 = 2,600,000.', 'Closing NCI = initial 2,000,000 + profit share 600,000 = 2,600,000.') },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('وقتی شرکت فرعی خریده شود', 'When a subsidiary is bought'),
          text: t(
            'در این مثال `MP02` را خود گروه تأسیس کرد. اگر شرکت فرعی **خریده** شود، طبق IFRS 3 دارایی‌ها و بدهی‌هایش به ارزش منصفانه شناسایی می‌شوند، مازاد بهای پرداختی بر سهم خالص دارایی‌ها **سرقفلی** است، و منافع فاقد حق کنترل را می‌توان به ارزش منصفانه یا به سهم متناسب از خالص دارایی‌ها اندازه گرفت. اگر `MP02` سود سهام بدهد، سهم شرکت اصلی با درآمد سود سهام آن حذف و سهم کیش از منافع فاقد حق کنترل کم می‌شود.',
            'In this example the group formed `MP02` itself. If a subsidiary is **bought**, IFRS 3 recognises its assets and liabilities at fair value, the excess of the price paid over the share of net assets is **goodwill**, and NCI may be measured at fair value or at its proportionate share of net assets. If `MP02` pays a dividend, the parent’s share is eliminated against its dividend income and Kish’s share reduces NCI.',
          ),
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('سه خطای رایج درباره منافع فاقد حق کنترل', 'Three common NCI errors'),
          text: t(
            'اول، فقط 80 درصد دارایی‌های شرکت فرعی را در ترازنامه آوردن؛ کنترل یعنی 100 درصد دارایی‌ها و بدهی‌ها، و سهم اقلیت جدا در حقوق مالکانه. دوم، نشان دادن منافع فاقد حق کنترل در بدهی‌ها؛ جای آن حقوق مالکانه است. سوم، فراموش کردن سهم اقلیت از سود تحقق‌نیافته وقتی فروشنده خود شرکت فرعی است (تمرین آخر همین درس).',
            'First, bringing only 80 percent of the subsidiary’s assets into the balance sheet; control means 100 percent of assets and liabilities, with the minority’s share shown separately in equity. Second, presenting NCI among liabilities; it belongs in equity. Third, forgetting the minority’s share of unrealised profit when the seller is the subsidiary itself (the last exercise in this lesson).',
          ),
        },
      ],
    },
    {
      id: 'erp-ic',
      title: t('ERP: فیلد طرف معامله، تطبیق و سندهای حذف', 'The ERP: Trading Partner Field, Matching and Elimination Entries'),
      blocks: [
        {
          type: 'p',
          text: t(
            'ERP کار بین شرکتی را از اول تا آخر پشتیبانی می‌کند: فیلد **طرف معامله** روی هر سطر سند، **صورت‌حساب بین شرکتی** که فاکتور فروشنده را خودکار به فاکتور خرید در دفاتر خریدار تبدیل می‌کند، ابزار **تطبیق** که مانده‌ها و گردش‌ها را بر اساس جفت شرکت مقایسه می‌کند، اجرای **تهاتر** که طلب و بدهی بین شرکتی را با یک انتقال بانکی تسویه می‌کند، و **ماژول تلفیق** که داده‌ها را جمع، تسعیر و بر اساس جفت طرف معامله خودکار حذف می‌کند و منافع فاقد حق کنترل را حساب می‌کند.',
            'The ERP supports intercompany work end to end: the **trading partner** field on every document line, **intercompany billing** that turns the seller’s invoice automatically into a vendor invoice in the buyer’s books, a **matching** tool that compares balances and flows by company pair, a **netting** run that settles intercompany receivables and payables with one bank transfer, and a **consolidation module** that collects and translates the data, eliminates automatically by trading partner pair and computes non-controlling interests.',
          ),
        },
        {
          type: 'table',
          caption: t('داده پایه بین شرکتی و تلفیق', 'Intercompany and consolidation master data'),
          head: [t('داده پایه', 'Master data'), t('نمونه در گروه مسار', 'Example in the Masar group')],
          rows: [
            [t('کد شرکت و واحد تلفیق', 'Company codes and consolidation units'), t('`MP01`، `MP02`، `MP03`', '`MP01`, `MP02`, `MP03`')],
            [t('پرونده مشتری و تأمین‌کننده برای شرکت‌های گروه', 'Customer and vendor records for group companies'), t('`MP01` در دفاتر `MP02` مشتری است و فیلد طرف معامله‌اش `MP01` است', '`MP01` is a customer in `MP02`’s books, with trading partner `MP01`')],
            [t('حساب‌های بین شرکتی', 'Intercompany accounts'), t('1810، 1820، 2810، 2820 با طرف معامله اجباری', '1810, 1820, 2810, 2820 with a mandatory trading partner')],
            [t('درصد مالکیت و تاریخ آن', 'Ownership percentages and dates'), t('`MP02`: 80٪ از ابتدای سال؛ `MP03`: 100٪', '`MP02`: 80% from the start of the year; `MP03`: 100%')],
            [t('نرخ‌های ارز گروه', 'Group exchange rates'), t('نرخ مصوب برای اقلام بین شرکتی و تسعیر `MP03`', 'Approved rates for intercompany items and translating `MP03`')],
            [t('قواعد حذف', 'Elimination rules'), t('4510 و 4520 در برابر 5900، 4410 در برابر 7110، 1810 در برابر 2810، 1820 در برابر 2820', '4510 and 4520 against 5900, 4410 against 7110, 1810 against 2810, 1820 against 2820')],
          ],
        },
        {
          type: 'table',
          caption: t('سندها و ثبت‌های خودکار', 'Documents and automatic postings'),
          head: [t('سند', 'Document'), t('کجا', 'Where'), t('ثبت خودکار', 'Automatic posting')],
          rows: [
            [t('صورت‌حساب خدمات تعمیر چاه', 'Workover service billing'), t('`MP02`', '`MP02`'), t('بدهکار 1810، بستانکار 4310، هر دو با طرف معامله `MP01`', 'Debit 1810, credit 4310, both with trading partner `MP01`')],
            [t('سفارش خرید بین شرکتی و SES', 'Intercompany PO and SES'), t('`MP01`', '`MP01`'), t('بدهکار شیء هزینه، بستانکار 2120 با طرف معامله `MP02`', 'Debit the cost object, credit 2120 with trading partner `MP02`')],
            [t('فاکتور خرید ساخته‌شده از صورت‌حساب `MP02`', 'Vendor invoice created from `MP02`’s billing'), t('`MP01`', '`MP01`'), t('بدهکار 2120، بستانکار 2810، طرف معامله `MP02`', 'Debit 2120, credit 2810, trading partner `MP02`')],
            [t('اجرای تهاتر', 'Netting run'), t('هر دو شرکت', 'Both companies'), t('تسویه 1810 و 2810 با یک انتقال بانکی', 'Clears 1810 and 2810 with one bank transfer')],
            [t('حذف خودکار', 'Automatic elimination'), t('فقط دفتر تلفیق', 'Consolidation ledger only'), t('سندهای حذف بر اساس جفت طرف معامله', 'Elimination entries by trading partner pair')],
            [t('محاسبه منافع فاقد حق کنترل', 'NCI calculation'), t('فقط دفتر تلفیق', 'Consolidation ledger only'), t('بدهکار سود انباشته، بستانکار 3510', 'Debit retained earnings, credit 3510')],
          ],
        },
        {
          type: 'table',
          caption: t('چه کسی چه می‌کند', 'Who does what'),
          head: [t('نقش', 'Role'), t('مسئولیت', 'Responsibility')],
          rows: [
            [t('حسابدار بین شرکتی هر شرکت', 'Each company’s intercompany accountant'), t('صدور و ثبت فاکتورهای بین شرکتی، تأیید مانده‌ها تا روز کاری سوم', 'Issues and books intercompany invoices, confirms balances by working day 3')],
            [t('حسابدار تلفیق گروه', 'Group consolidation accountant'), t('جمع‌آوری داده، تسعیر، اجرای حذف‌ها، بررسی اختلاف‌های باقی‌مانده', 'Collects data, translates, runs eliminations, reviews remaining differences')],
            [t('کنترلرهای دو شرکت', 'Both companies’ controllers'), t('حل اختلاف‌ها و تأیید گزارش تطبیق', 'Resolve differences and sign off the matching report')],
            [t('واحد مالیات', 'Tax team'), t('مستندسازی قیمت‌گذاری انتقالی', 'Transfer pricing documentation')],
            [t('مدیر سیستم', 'System administrator'), t('نگهداری طرف معامله، قواعد حذف و دسترسی‌ها با درخواست مصوب', 'Maintains trading partners, elimination rules and access on approved requests')],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('اشتباه‌های رایج', 'Common mistakes'),
          text: t('بیشتر مشکلات تلفیق پیش از تلفیق ساخته می‌شوند، در ثبت‌های روزمره شرکت‌ها:', 'Most consolidation problems are created before consolidation, in the companies’ day-to-day postings:'),
        },
        {
          type: 'list',
          items: [
            t('ثبت بدون فیلد طرف معامله یا با پرونده مشتری و تأمین‌کننده بیرونی؛ قلم بین شرکتی حذف نمی‌شود و درآمد و دارایی گروه بزرگ‌نمایی می‌شود.', 'Posting without the trading partner field or with an external customer or vendor record, so the item is not eliminated and group revenue and assets are overstated.'),
            t('ثبت در دفاتر یک طرف و جا ماندن در دفاتر طرف دیگر؛ سپس پوشاندن اختلاف با عدد ساختگی در تلفیق.', 'Booking in one side’s books but not the other’s, then covering the difference with a plug at consolidation.'),
            t('استفاده از نرخ‌های ارز متفاوت در دو طرف.', 'Using different exchange rates on the two sides.'),
            t('حذف مانده‌ها بدون حذف درآمد و هزینه، یا برعکس.', 'Eliminating balances without eliminating income and expense, or the reverse.'),
            t('فراموش کردن سهم اقلیت از سود، یا سهمش از سود تحقق‌نیافته وقتی فروشنده شرکت فرعی است.', 'Forgetting the minority’s share of profit, or its share of unrealised profit when the seller is the subsidiary.'),
            t('ثبت سندهای حذف در دفاتر قانونی شرکت‌ها به‌جای دفتر تلفیق.', 'Posting elimination entries in the companies’ legal books instead of the consolidation ledger.'),
            t('برخورد با شعبه مانند شرکت فرعی، یا با عملیات مشترک مانند شرکت فرعی.', 'Treating a branch, or a joint operation, as if it were a subsidiary.'),
          ],
        },
      ],
    },
    {
      id: 'exercises',
      title: t('تمرین‌ها', 'Exercises'),
      blocks: [
        {
          type: 'p',
          text: t(
            'تمرین‌ها از تشخیص نوع واحد شروع می‌شوند و به تطبیق، حذف و سود تحقق‌نیافته با منافع فاقد حق کنترل می‌رسند. ارقام فرضی‌اند و مالیات نادیده گرفته شده است. پیش از هر سند حذف بپرسید: «اگر گروه یک شرکت بود، این قلم اصلاً وجود داشت؟»',
            'The exercises start with identifying the type of entity and build up to matching, eliminations and unrealised profit with non-controlling interests. Figures are illustrative and tax is ignored. Before every elimination ask: "if the group were one company, would this item exist at all?"',
          ),
        },
        {
          type: 'exercise',
          title: t('این واحد چیست و چگونه در گروه می‌آید؟', 'What is this entity and how does it enter the group?'),
          difficulty: 'easy',
          problem: t(
            'برای هر واحد بگویید شرکت فرعی، شعبه، عملیات مشترک یا واحد تجاری وابسته است و در صورت‌های گروه مسار چگونه می‌آید.',
            'For each entity, say whether it is a subsidiary, a branch, a joint operation or an associate, and how it enters the Masar group’s statements.',
          ),
          given: {
            head: [t('واحد', 'Entity'), t('واقعیت‌ها', 'Facts')],
            rows: [
              [t('الف) شرکت خدمات حفاری مسار', 'a) Masar Drilling Services'), t('مسار 80 درصد سهام را دارد و هیئت‌مدیره را تعیین می‌کند', 'Masar holds 80 percent of the shares and appoints the board')],
              [t('ب) دفتر بندرعباس', 'b) Bandar Abbas office'), t('به‌عنوان شعبه مسار پترولیوم ثبت شده است', 'Registered as a branch of Masar Petroleum')],
              [t('ج) مشارکت میدان آریا', 'c) Arya field venture'), t('سهم 50 درصد؛ تصمیم‌های کلیدی با اتفاق آرای مسار، البرز و دنا؛ هر شریک بر دارایی‌ها حق و برای بدهی‌ها تعهد دارد', '50 percent interest; key decisions need the unanimous consent of Masar, Alborz and Dena; each party has rights to the assets and obligations for the liabilities')],
              [t('د) شرکت خطوط لوله جنوب', 'd) Southern Pipeline Company'), t('مسار 25 درصد سهام و یکی از پنج کرسی هیئت‌مدیره را دارد', 'Masar holds 25 percent and one of five board seats')],
              [t('هـ) شرکت پذیرایی آریا', 'e) Arya Catering Company'), t('مسار 60 درصد سهام دارد، اما طبق قرارداد سهامداران، دارنده 40 درصد هیئت‌مدیره را تعیین و همه فعالیت‌های مرتبط را هدایت می‌کند', 'Masar holds 60 percent, but under a shareholders’ agreement the 40 percent holder appoints the board and directs all relevant activities')],
            ],
          },
          hint: t('درصد سهام به‌تنهایی کنترل نمی‌آورد؛ دنبال قدرت واقعی بر فعالیت‌های مرتبط بگردید.', 'Percentage alone does not give control; look for real power over the relevant activities.'),
          solution: [
            {
              type: 'table',
              head: [t('واحد', 'Entity'), t('نوع', 'Type'), t('در صورت‌های گروه', 'In the group statements')],
              rows: [
                [t('الف', 'a'), t('شرکت فرعی', 'Subsidiary'), t('تلفیق کامل؛ 20 درصد منافع فاقد حق کنترل', 'Full consolidation; 20 percent non-controlling interests')],
                [t('ب', 'b'), t('شعبه', 'Branch'), t('از قبل بخشی از صورت‌های `MP01`؛ حساب‌های جاری حذف می‌شوند', 'Already part of `MP01`’s statements; current accounts cancel')],
                [t('ج', 'c'), t('عملیات مشترک', 'Joint operation'), t('سهم 50 درصدی از دارایی‌ها، بدهی‌ها، درآمد و هزینه (IFRS 11)', 'The 50 percent share of assets, liabilities, revenue and expenses (IFRS 11)')],
                [t('د', 'd'), t('واحد تجاری وابسته (نفوذ قابل ملاحظه)', 'Associate (significant influence)'), t('روش ارزش ویژه (IAS 28)، بدون تلفیق سطربه‌سطر', 'Equity method (IAS 28), no line-by-line consolidation')],
                [t('هـ', 'e'), t('شرکت فرعی نیست؛ احتمالاً وابسته', 'Not a subsidiary; probably an associate'), t('مسار قدرت ندارد، پس کنترل ندارد؛ نفوذ قابل ملاحظه بررسی شود', 'Masar lacks power, so it lacks control; assess significant influence')],
              ],
            },
          ],
          answer: t(
            'الف شرکت فرعی؛ ب شعبه؛ ج عملیات مشترک؛ د وابسته؛ هـ با وجود 60 درصد شرکت فرعی نیست، چون قدرت با سهامدار دیگر است.',
            'a subsidiary; b branch; c joint operation; d associate; e is not a subsidiary despite 60 percent, because power lies with the other shareholder.',
          ),
        },
        {
          type: 'exercise',
          title: t('تطبیق بین شرکتی ماه 6', 'Intercompany matching for month 6'),
          difficulty: 'medium',
          problem: t(
            'گزارش تطبیق ماه 6 سه اختلاف دارد. علت هر کدام در جدول آمده است. (الف) اختلاف هر قلم را حساب کنید. (ب) با قاعده «رقم فروشنده ملاک است»، سندهای اصلاحی را در دفاتر شرکت مسئول بنویسید.',
            'The month 6 matching report shows three differences, with their causes in the table. (a) Compute the difference on each item. (b) Using the rule "the seller’s figure leads", write the correcting entries in the responsible company’s books.',
          ),
          given: {
            head: [t('قلم', 'Item'), t('نزد فروشنده یا وام‌دهنده', 'Seller or lender shows'), t('نزد خریدار یا وام‌گیرنده', 'Buyer or borrower shows'), t('علت', 'Cause')],
            numericCols: [1, 2],
            rows: [
              [t('1) خدمات تعمیر چاه `MP02` به `MP01`', '1) `MP02` workover services to `MP01`'), 980000, 780000, t('فاکتور 200,000 روز 30 برای چاه AR-04 صادر شده؛ مهندس `MP01` هنوز SES را تأیید نکرده', 'A 200,000 invoice for well AR-04 was issued on day 30; `MP01`’s engineer has not yet accepted the SES')],
              [t('2) خدمات فنی `MP01` به `MP03`', '2) `MP01` technical services to `MP03`'), 420000, 405000, t('`MP03` نرخ بانک محلی را به‌جای نرخ گروه به کار برده؛ نرخ گروه 420,000 می‌دهد', '`MP03` used its local bank’s rate instead of the group rate; the group rate gives 420,000')],
              [t('3) وام `MP01` به `MP02`', '3) `MP01` loan to `MP02`'), 10000000, 0, t('`MP02` وام را در 2410 وام‌های بانکی و بدون طرف معامله ثبت کرده است', '`MP02` booked the loan in 2410 bank loans with no trading partner')],
            ],
          },
          hint: t('در هر مورد، شرکتی سند را اصلاح می‌کند که رقمش با واقعیت نمی‌خواند.', 'In each case, the company whose figure does not match the facts posts the correction.'),
          solution: [
            {
              type: 'table',
              head: [t('قلم', 'Item'), t('اختلاف', 'Difference'), t('اصلاح در', 'Corrected in')],
              numericCols: [1],
              rows: [
                [t('1', '1'), 200000, t('`MP01`: تأیید SES و ثبت فاکتور', '`MP01`: accept the SES and post the invoice')],
                [t('2', '2'), 15000, t('`MP03`: اعمال نرخ گروه', '`MP03`: apply the group rate')],
                [t('3', '3'), 10000000, t('`MP02`: طبقه‌بندی مجدد با طرف معامله', '`MP02`: reclassify with the trading partner')],
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: t('`MP02` (از قبل ثبت شده)', '`MP02` (already booked)'),
                  lines: [
                    { account: ac.icRec01, debit: 200000 },
                    { account: ac.revenue02, credit: 200000 },
                  ],
                  memo: t('فاکتور فروشنده که ملاک تطبیق است.', 'The seller’s invoice that the matching follows.'),
                },
                {
                  date: t('`MP01`: تأیید SES', '`MP01`: SES acceptance'),
                  lines: [
                    { account: ac.repairs, debit: 200000 },
                    { account: ac.grir, credit: 200000 },
                  ],
                  memo: t('تعمیر چاه AR-04 روی مشارکت آریا؛ 50 درصد آن بعداً به شرکا صورت‌حساب می‌شود.', 'Workover on well AR-04 on the Arya JV; 50 percent of it is later billed to the partners.'),
                },
                {
                  date: t('`MP01`: فاکتور', '`MP01`: invoice'),
                  lines: [
                    { account: ac.grir, debit: 200000 },
                    { account: ac.icPay02, credit: 200000 },
                  ],
                },
                {
                  date: t('`MP03`: نرخ گروه', '`MP03`: group rate'),
                  lines: [
                    { account: ac.fx, debit: 15000 },
                    { account: ac.icPay01, credit: 15000 },
                  ],
                  memo: t('بدهی به `MP01` با نرخ گروه به 420,000 می‌رسد.', 'The payable to `MP01` rises to 420,000 at the group rate.'),
                },
                {
                  date: t('`MP02`: طبقه‌بندی مجدد', '`MP02`: reclassification'),
                  lines: [
                    { account: ac.bankLoans, debit: 10000000 },
                    { account: ac.icLoanPay, credit: 10000000 },
                  ],
                  memo: t('وام از حساب بانکی به وام بین شرکتی با طرف معامله `MP01` منتقل می‌شود؛ بدون این کار در تلفیق حذف نمی‌شد.', 'The loan moves from bank loans to the intercompany loan with trading partner `MP01`; without this it would not be eliminated on consolidation.'),
                },
              ],
            },
          ],
          answer: t(
            'اختلاف‌ها 200,000، 15,000 و 10,000,000 است؛ `MP01` SES و فاکتور را ثبت می‌کند، `MP03` با نرخ گروه 15,000 تعدیل می‌کند و `MP02` وام را به 2820 با طرف معامله `MP01` می‌برد.',
            'The differences are 200,000, 15,000 and 10,000,000; `MP01` posts the SES and invoice, `MP03` adjusts by 15,000 at the group rate and `MP02` moves the loan to 2820 with trading partner `MP01`.',
          ),
        },
        {
          type: 'exercise',
          title: t('سندهای حذف با سود سهام شرکت فرعی', 'Eliminations including a subsidiary dividend'),
          difficulty: 'medium',
          problem: t(
            'در سال بعد این معاملات رخ داده است: (1) `MP01` هزینه‌های فناوری اطلاعات و بیمه را به مبلغ 360,000 به `MP03` بازپرداخت گرفته است؛ (2) بهره وام `MP02` به `MP01` برابر 800,000 است؛ (3) `MP02` مبلغ 1,000,000 سود سهام پرداخته که 800,000 آن به `MP01` و 200,000 به سرمایه‌گذاری کیش رسیده است؛ (4) در پایان سال `MP01` از `MP03` مبلغ 250,000 طلب دارد و وام 10,000,000 هنوز باز است. سندهای حذف را بنویسید و اثر هر کدام را بر سود گروه بگویید.',
            'The following happened the next year: (1) `MP01` recharged IT and insurance costs of 360,000 to `MP03`; (2) interest on `MP02`’s loan from `MP01` was 800,000; (3) `MP02` paid a dividend of 1,000,000, of which 800,000 went to `MP01` and 200,000 to Kish Investment; (4) at year-end `MP01` is owed 250,000 by `MP03` and the 10,000,000 loan is still open. Write the elimination entries and state the effect of each on group profit.',
          ),
          hint: t('سهم شرکت اصلی از سود سهام درون گروه است؛ سهم کیش پول واقعی است که از گروه بیرون رفته.', 'The parent’s share of the dividend is inside the group; Kish’s share is real cash that left the group.'),
          solution: [
            {
              type: 'journal',
              entries: [
                {
                  date: t('الف) بازپرداخت هزینه', 'a) Recharge'),
                  lines: [
                    { account: ac.rechargeIncome, debit: 360000 },
                    { account: ac.ga01, credit: 360000 },
                  ],
                  memo: t('اثری بر سود گروه ندارد.', 'No effect on group profit.'),
                },
                {
                  date: t('ب) بهره', 'b) Interest'),
                  lines: [
                    { account: ac.interestIncome, debit: 800000 },
                    { account: ac.interestExp, credit: 800000 },
                  ],
                  memo: t('اثری بر سود گروه ندارد.', 'No effect on group profit.'),
                },
                {
                  date: t('ج) سود سهام', 'c) Dividend'),
                  lines: [
                    { account: ac.dividendIncome, debit: 800000 },
                    { account: ac.nci, debit: 200000 },
                    { account: t('3310 سود انباشته (سود سهام تقسیمی `MP02`)', '3310 Retained earnings (`MP02` dividend paid)'), credit: 1000000 },
                  ],
                  memo: t('سود گروه 800,000 کمتر از جمع سودهای دو شرکت است، چون سود `MP02` یک بار در سود خودش آمده؛ منافع فاقد حق کنترل 200,000 کم می‌شود.', 'Group profit is 800,000 lower than the sum of the two companies’ profits, because `MP02`’s profit is already counted once in its own results; NCI falls by 200,000.'),
                },
                {
                  date: t('د) مانده جاری', 'd) Current balance'),
                  lines: [
                    { account: ac.icPay01, debit: 250000 },
                    { account: ac.icRec03, credit: 250000 },
                  ],
                },
                {
                  date: t('هـ) وام', 'e) Loan'),
                  lines: [
                    { account: ac.icLoanPay, debit: 10000000 },
                    { account: ac.icLoanRec, credit: 10000000 },
                  ],
                },
              ],
            },
          ],
          answer: t(
            'پنج سند حذف؛ فقط حذف سود سهام بر سود گروه اثر دارد (800,000 کاهش نسبت به جمع سود دو شرکت) و منافع فاقد حق کنترل را 200,000 کم می‌کند.',
            'Five elimination entries; only the dividend elimination affects group profit (800,000 lower than the sum of the two companies’ profits), and it reduces NCI by 200,000.',
          ),
        },
        {
          type: 'exercise',
          title: t('سود تحقق‌نیافته در موجودی و منافع فاقد حق کنترل', 'Unrealised profit in stock and non-controlling interests'),
          difficulty: 'hard',
          problem: t(
            '`MP02` (80 درصد) قطعات یدکی پمپ را به مبلغ 900,000 به `MP03` فروخته است؛ بهای تمام‌شده آن برای `MP02` برابر 720,000 بوده. در پایان سال قطعاتی به مبلغ 600,000 (به قیمت فروش) هنوز در انبار `MP03` است. سود `MP02` پیش از تعدیلات تلفیق 3,000,000 است. (الف) سندهای حذف را بنویسید. (ب) ارزش این قطعات در ترازنامه گروه چقدر است؟ (ج) سهم منافع فاقد حق کنترل از سود `MP02` چقدر است؟',
            '`MP02` (80 percent owned) sold pump spare parts to `MP03` for 900,000; their cost to `MP02` was 720,000. At year-end, parts worth 600,000 (at the selling price) are still in `MP03`’s store. `MP02`’s profit before consolidation adjustments is 3,000,000. (a) Write the elimination entries. (b) What are these parts worth in the group balance sheet? (c) What is the NCI share of `MP02`’s profit?',
          ),
          hint: t('حاشیه سود = (900,000 منهای 720,000) ÷ 900,000. فروشنده شرکت فرعی است، پس اقلیت هم در سود تحقق‌نیافته سهم دارد.', 'Margin = (900,000 minus 720,000) ÷ 900,000. The seller is the subsidiary, so the minority shares in the unrealised profit too.'),
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('حاشیه سود', 'Margin'), text: t('180,000 ÷ 900,000 = 20 درصد قیمت فروش.', '180,000 ÷ 900,000 = 20 percent of the selling price.') },
                { title: t('سود تحقق‌نیافته', 'Unrealised profit'), text: t('600,000 × 20٪ = 120,000 سودی است که هنوز در موجودی گروه مانده است.', '600,000 × 20% = 120,000 of profit still sitting in group stock.') },
                { title: t('ارزش موجودی برای گروه', 'Stock value for the group'), text: t('600,000 منهای 120,000 = 480,000؛ همان بهای تمام‌شده گروه: 720,000 × 600,000 ÷ 900,000.', '600,000 minus 120,000 = 480,000, the group’s own cost: 720,000 × 600,000 ÷ 900,000.') },
                { title: t('سهم اقلیت', 'Minority share'), text: t('سود تعدیل‌شده `MP02` = 3,000,000 منهای 120,000 = 2,880,000؛ منافع فاقد حق کنترل 20٪ × 2,880,000 = 576,000 (24,000 کمتر از 600,000)؛ سهم مالکان شرکت اصلی 2,304,000.', '`MP02`’s adjusted profit = 3,000,000 minus 120,000 = 2,880,000; NCI 20% × 2,880,000 = 576,000 (24,000 less than 600,000); owners of the parent 2,304,000.') },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: t('حذف فروش بین شرکتی', 'Eliminate the intercompany sale'),
                  lines: [
                    { account: t('4320 فروش مواد (`MP02`، طرف معامله `MP03`)', '4320 Sales of materials (`MP02`, trading partner `MP03`)'), debit: 900000 },
                    { account: ac.costOfSales, credit: 900000 },
                  ],
                },
                {
                  date: t('حذف سود تحقق‌نیافته', 'Eliminate the unrealised profit'),
                  lines: [
                    { account: ac.costOfSales, debit: 120000 },
                    { account: ac.inventory, credit: 120000 },
                  ],
                  memo: t('موجودی `MP03` به بهای تمام‌شده گروه برمی‌گردد.', '`MP03`’s stock returns to the group’s cost.'),
                },
              ],
            },
          ],
          answer: t(
            'سود تحقق‌نیافته 120,000؛ قطعات در ترازنامه گروه 480,000؛ منافع فاقد حق کنترل از سود `MP02` برابر 576,000.',
            'Unrealised profit 120,000; the parts are 480,000 in the group balance sheet; NCI’s share of `MP02`’s profit is 576,000.',
          ),
        },
      ],
    },
    {
      id: 'summary',
      title: t('جمع‌بندی و واژه‌های کلیدی', 'Summary and Key Terms'),
      blocks: [
        {
          type: 'list',
          items: [
            t('گروه، شرکت اصلی و شرکت‌های فرعی تحت کنترل آن است؛ کنترل یعنی قدرت، بازده متغیر و توانایی استفاده از قدرت، نه فقط درصد سهام.', 'A group is a parent and the subsidiaries it controls; control means power, variable returns and the ability to use power, not just a share percentage.'),
            t('شعبه بخشی از همان شخصیت حقوقی است و عملیات مشترک با سهم از دارایی‌ها و بدهی‌ها می‌آید؛ هیچ‌کدام شرکت فرعی نیستند.', 'A branch is part of the same legal entity and a joint operation enters through its share of assets and liabilities; neither is a subsidiary.'),
            t('هر معامله بین شرکتی دو سند با فیلد طرف معامله دارد و باید در حد معاملات مستقل قیمت‌گذاری شود.', 'Every intercompany transaction has two documents carrying the trading partner field and must be priced at arm’s length.'),
            t('پیش از تلفیق، مانده‌ها و گردش‌های هر جفت تطبیق و هر اختلاف با یافتن علت حل می‌شود؛ رقم فروشنده ملاک است.', 'Before consolidation, each pair’s balances and flows are matched and each difference is resolved at its cause; the seller’s figure leads.'),
            t('سندهای حذف (سرمایه‌گذاری، مانده‌ها، درآمد و هزینه، سود تحقق‌نیافته، سود سهام) فقط در دفتر تلفیق ثبت می‌شوند.', 'Elimination entries (investment, balances, income and expense, unrealised profit, dividends) are posted only in the consolidation ledger.'),
            t('در مثال مسار، جمع دارایی‌های گروه 87,000,000، سود سال 19,000,000 و منافع فاقد حق کنترل 2,600,000 شد.', 'In the Masar example, group total assets were 87,000,000, profit for the year 19,000,000 and NCI 2,600,000.'),
            t('منافع فاقد حق کنترل سهم اقلیت از خالص دارایی‌ها و سود شرکت فرعی است و جدا در حقوق مالکانه می‌آید.', 'Non-controlling interests are the minority’s share of the subsidiary’s net assets and profit, shown separately in equity.'),
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            { term: t('گروه', 'Group'), def: t('شرکت اصلی و همه شرکت‌های فرعی که کنترل می‌کند.', 'A parent and all the subsidiaries it controls.') },
            { term: t('شرکت فرعی', 'Subsidiary'), def: t('واحدی که شرکت دیگری آن را کنترل می‌کند.', 'An entity controlled by another entity.') },
            { term: t('کنترل', 'Control'), def: t('قدرت بر فعالیت‌های مرتبط، در معرض بازده متغیر بودن و توانایی استفاده از قدرت برای اثر بر بازده (IFRS 10).', 'Power over relevant activities, exposure to variable returns and the ability to use power to affect returns (IFRS 10).') },
            { term: t('شعبه', 'Branch'), def: t('بخشی از یک شخصیت حقوقی در مکان دیگر، بدون سهامدار جدا.', 'Part of one legal entity in another location, with no separate shareholders.') },
            { term: t('معامله بین شرکتی', 'Intercompany transaction'), def: t('معامله بین دو عضو یک گروه.', 'A transaction between two members of the same group.') },
            { term: t('طرف معامله (Trading partner)', 'Trading partner'), def: t('فیلدی در سطر سند که کد شرکت گروهی طرف مقابل را نگه می‌دارد.', 'A field on a document line holding the code of the group company on the other side.') },
            { term: t('تطبیق بین شرکتی', 'Intercompany matching'), def: t('مقایسه مانده‌ها و گردش‌های بین دو شرکت گروه و حل اختلاف‌ها.', 'Comparing the balances and flows between two group companies and resolving the differences.') },
            { term: t('سند حذف', 'Elimination entry'), def: t('سند دفتر تلفیق که اثر معاملات درون گروه را پاک می‌کند.', 'A consolidation-ledger entry that removes the effect of transactions inside the group.') },
            { term: t('صورت‌های مالی تلفیقی', 'Consolidated financial statements'), def: t('صورت‌های گروه به‌عنوان یک واحد اقتصادی.', 'The statements of a group presented as a single economic entity.') },
            { term: t('منافع فاقد حق کنترل', 'Non-controlling interests'), def: t('بخشی از حقوق مالکانه شرکت فرعی که به شرکت اصلی تعلق ندارد.', 'The part of a subsidiary’s equity that does not belong to the parent.') },
            { term: t('سود تحقق‌نیافته', 'Unrealised profit'), def: t('سود معامله درون گروه که دارایی آن هنوز در گروه است.', 'Profit on an intragroup transaction whose asset is still inside the group.') },
            { term: t('قیمت‌گذاری انتقالی', 'Transfer pricing'), def: t('قیمت‌گذاری معاملات بین اشخاص وابسته، که معمولاً باید در حد معاملات مستقل باشد.', 'Pricing transactions between related parties, which generally must be at arm’s length.') },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: t('طبق IFRS 10، شرکت اصلی چه زمانی شرکت دیگری را **کنترل** می‌کند؟', 'Under IFRS 10, when does a parent **control** another entity?'),
      options: [
        t('همیشه وقتی بیش از 50 درصد سهام را دارد', 'Always when it holds more than 50 percent of the shares'),
        t('وقتی بزرگ‌ترین سهامدار است', 'When it is the largest shareholder'),
        t('وقتی بر فعالیت‌های مرتبط قدرت دارد، در معرض بازده متغیر است و می‌تواند با قدرتش بر بازده اثر بگذارد', 'When it has power over the relevant activities, is exposed to variable returns and can use its power to affect those returns'),
        t('وقتی حسابرس آن را تعیین می‌کند', 'When it appoints its auditor'),
      ],
      answer: 2,
      explain: t(
        'کنترل سه جزء دارد که باید با هم باشند. بیش از نیمی از رأی معمولاً کنترل می‌آورد، اما اگر قرارداد قدرت را به دیگری بدهد (مانند شرکت پذیرایی آریا در تمرین)، کنترل نیست؛ بزرگ‌ترین سهامدار بودن یا تعیین حسابرس هم به‌تنهایی کافی نیست.',
        'Control has three parts that must hold together. More than half of the votes usually brings control, but if an agreement gives power to someone else (like Arya Catering in the exercise), there is no control; being the largest shareholder or appointing the auditor is not enough on its own.',
      ),
    },
    {
      q: t(
        'خالص دارایی‌های یک شرکت فرعی 15,000,000 است و شرکت اصلی 70 درصد آن را دارد (بدون سرقفلی). منافع فاقد حق کنترل چقدر است؟',
        'A subsidiary’s net assets are 15,000,000 and the parent owns 70 percent (no goodwill). What are the non-controlling interests?',
      ),
      options: [t('4,500,000', '4,500,000'), t('10,500,000', '10,500,000'), t('15,000,000', '15,000,000'), t('3,000,000', '3,000,000')],
      answer: 0,
      explain: t(
        'سهم اقلیت 30٪ × 15,000,000 = 4,500,000. عدد 10,500,000 سهم شرکت اصلی است، 15,000,000 کل خالص دارایی‌هاست که در ترازنامه گروه می‌آید، و 3,000,000 با درصد غلط 20 حساب شده است.',
        'The minority’s share is 30% × 15,000,000 = 4,500,000. 10,500,000 is the parent’s share, 15,000,000 is all the net assets that go into the group balance sheet, and 3,000,000 uses a wrong 20 percent.',
      ),
    },
    {
      q: t('کدام جمله درباره **شعبه** درست است؟', 'Which statement about a **branch** is correct?'),
      options: [
        t('شخصیت حقوقی جداست و با منافع فاقد حق کنترل تلفیق می‌شود', 'It is a separate legal entity, consolidated with non-controlling interests'),
        t('با روش ارزش ویژه حساب می‌شود', 'It is accounted for with the equity method'),
        t('باید سهامداران جدا داشته باشد', 'It must have its own shareholders'),
        t('بخشی از همان شخصیت حقوقی است و از قبل در صورت‌های شرکت آمده؛ حساب‌های جاری شعبه و مرکز یکدیگر را خنثی می‌کنند', 'It is part of the same legal entity and already in the company’s statements; the branch and head-office current accounts cancel each other'),
      ],
      answer: 3,
      explain: t(
        'شعبه شخصیت حقوقی جدا نیست؛ دفاتر جدای آن فقط با دو حساب جاری آینه‌ای به دفتر مرکزی وصل است و در صورت‌های خود شرکت حذف می‌شوند. تلفیق با منافع فاقد حق کنترل مخصوص شرکت فرعی و روش ارزش ویژه مخصوص واحد وابسته است.',
        'A branch is not a separate legal entity; its separate books link to head office only through two mirror current accounts, which cancel in the company’s own statements. Consolidation with NCI is for subsidiaries, and the equity method is for associates.',
      ),
    },
    {
      q: t(
        'درآمد شرکت اصلی 30,000,000 است که 2,000,000 آن خدمات به شرکت فرعی است. درآمد شرکت فرعی 10,000,000 و همه از مشتریان بیرونی است. درآمد گروه چقدر است؟',
        'The parent’s revenue is 30,000,000, of which 2,000,000 is services to its subsidiary. The subsidiary’s revenue is 10,000,000, all from outside customers. What is group revenue?',
      ),
      options: [t('40,000,000', '40,000,000'), t('38,000,000', '38,000,000'), t('36,000,000', '36,000,000'), t('28,000,000', '28,000,000')],
      answer: 1,
      explain: t(
        '30,000,000 + 10,000,000 منهای 2,000,000 درآمد درون گروهی = 38,000,000. عدد 40,000,000 حذف را فراموش کرده، 36,000,000 آن را دو بار کم کرده و 28,000,000 درآمد شرکت فرعی را جا انداخته است.',
        '30,000,000 + 10,000,000 minus 2,000,000 of intragroup revenue = 38,000,000. 40,000,000 forgets the elimination, 36,000,000 deducts it twice and 28,000,000 leaves out the subsidiary’s revenue.',
      ),
    },
    {
      q: t('فیلد **طرف معامله (Trading partner)** در ERP چه کاری می‌کند؟', 'What does the **trading partner** field do in the ERP?'),
      options: [
        t('نرخ مالیات معامله را تعیین می‌کند', 'It sets the transaction’s tax rate'),
        t('شرایط پرداخت را نگه می‌دارد', 'It holds the payment terms'),
        t('شرکت گروهی طرف مقابل را مشخص می‌کند تا اقلام بین شرکتی خودکار تطبیق و حذف شوند', 'It identifies the group company on the other side so intercompany items can be matched and eliminated automatically'),
        t('مرکز هزینه گیرنده را انتخاب می‌کند', 'It picks the receiving cost centre'),
      ],
      answer: 2,
      explain: t(
        'طرف معامله کد شرکت مقابل (مثلاً `MP02`) را روی هر سطر نگه می‌دارد؛ ابزار تطبیق و قواعد حذف بر اساس همین جفت‌ها کار می‌کنند. اگر خالی بماند، قلم بیرونی به نظر می‌رسد و حذف نمی‌شود. مالیات، شرایط پرداخت و مرکز هزینه فیلدهای دیگری‌اند.',
        'The trading partner holds the other company’s code (such as `MP02`) on each line; the matching tool and elimination rules work on these pairs. If it is blank, the item looks external and is not eliminated. Tax, payment terms and cost centre are other fields.',
      ),
    },
    {
      q: t(
        'شرکت فرعی کالایی با بهای تمام‌شده 400,000 را به 500,000 به شرکت اصلی فروخته و 40 درصد آن در پایان سال هنوز در انبار شرکت اصلی است. سود تحقق‌نیافته چقدر است؟',
        'A subsidiary sold goods costing 400,000 to its parent for 500,000, and 40 percent of them are still in the parent’s store at year-end. What is the unrealised profit?',
      ),
      options: [t('40,000', '40,000'), t('100,000', '100,000'), t('200,000', '200,000'), t('160,000', '160,000')],
      answer: 0,
      explain: t(
        'سود کل 100,000 است و فقط 40 درصد آن در کالایی مانده که هنوز در گروه است: 40٪ × 100,000 = 40,000. عدد 100,000 کل سود را حذف می‌کند در حالی که 60 درصد کالا به بیرون فروخته شده، 200,000 ارزش فروش موجودی مانده است و 160,000 بهای تمام‌شده آن.',
        'The total profit is 100,000, and only 40 percent of it remains in goods still in the group: 40% × 100,000 = 40,000. 100,000 eliminates all the profit although 60 percent of the goods were sold outside, 200,000 is the remaining stock at selling price and 160,000 its cost.',
      ),
    },
    {
      q: t('اگر اختلاف بین شرکتی پیش از تلفیق حل نشود، چه می‌شود؟', 'What happens if an intercompany difference is not resolved before consolidation?'),
      options: [
        t('اتفاقی نمی‌افتد؛ تلفیق آن را نادیده می‌گیرد', 'Nothing; consolidation ignores it'),
        t('ماژول تلفیق آن را خودکار و درست حذف می‌کند', 'The consolidation module eliminates it correctly by itself'),
        t('سود گروه دو برابر می‌شود', 'Group profit doubles'),
        t('پس از حذف، اختلافی باقی می‌ماند که صورت‌های گروه را نادرست می‌کند یا با عدد ساختگی پوشانده می‌شود', 'After elimination a residual difference remains, which misstates the group statements or gets covered with a plug'),
      ],
      answer: 3,
      explain: t(
        'حذف فقط وقتی کامل است که دو طرف یک عدد داشته باشند. با اختلاف، بخشی از قلم باقی می‌ماند و یا صورت‌ها نادرست می‌شوند یا کسی عدد ساختگی می‌زند. ماژول تلفیق علت را نمی‌داند و نمی‌تواند خودش درست کند؛ اثر هم معمولاً به اندازه اختلاف است، نه دو برابر سود.',
        'An elimination is complete only when both sides show the same number. With a difference, part of the item survives, and either the statements are wrong or someone posts a plug. The consolidation module does not know the cause and cannot fix it; the effect is usually the size of the difference, not double the profit.',
      ),
    },
    {
      q: t(
        'سود سال شرکت فرعی 4,000,000 است و سهم اقلیت 25 درصد. سود قابل انتساب به منافع فاقد حق کنترل چقدر است؟',
        'A subsidiary’s profit for the year is 4,000,000 and the minority holds 25 percent. What profit is attributable to non-controlling interests?',
      ),
      options: [t('3,000,000', '3,000,000'), t('1,000,000', '1,000,000'), t('4,000,000', '4,000,000'), t('صفر', 'Zero')],
      answer: 1,
      explain: t(
        '25٪ × 4,000,000 = 1,000,000. عدد 3,000,000 سهم مالکان شرکت اصلی است و 4,000,000 کل سود که در صورت سود و زیان گروه می‌آید. صفر نیست، چون گروه همه سود شرکت فرعی را نشان می‌دهد و بخشی از آن به اقلیت تعلق دارد.',
        '25% × 4,000,000 = 1,000,000. 3,000,000 is the parent owners’ share and 4,000,000 is the whole profit shown in the group income statement. It is not zero, because the group shows all the subsidiary’s profit and part of it belongs to the minority.',
      ),
    },
    {
      q: t('سندهای حذف تلفیق کجا ثبت می‌شوند؟', 'Where are consolidation elimination entries posted?'),
      options: [
        t('در دفاتر قانونی شرکت اصلی', 'In the parent’s legal books'),
        t('در دفاتر قانونی شرکت فرعی', 'In the subsidiary’s legal books'),
        t('فقط در دفتر تلفیق', 'Only in the consolidation ledger'),
        t('در دفاتر هر دو شرکت', 'In both companies’ books'),
      ],
      answer: 2,
      explain: t(
        'هر شرکت شخصیت حقوقی جداست و صورت‌های خودش درست‌اند؛ حذف فقط برای دیدگاه گروه لازم است و در دفتر تلفیق ثبت می‌شود. ثبت آن در دفاتر یکی از شرکت‌ها صورت‌های قانونی آن شرکت را خراب می‌کند.',
        'Each company is a separate legal entity and its own statements are right; elimination is needed only for the group view and is posted in the consolidation ledger. Posting it in either company’s books would spoil that company’s statutory statements.',
      ),
    },
    {
      q: t('شرکت فرعی 80 درصدی 1,000,000 سود سهام می‌پردازد. در تلفیق چه می‌شود؟', 'An 80 percent subsidiary pays a dividend of 1,000,000. What happens on consolidation?'),
      options: [
        t('کل 1,000,000 با درآمد سود سهام شرکت اصلی حذف می‌شود', 'The full 1,000,000 is eliminated against the parent’s dividend income'),
        t('هیچ حذفی لازم نیست', 'No elimination is needed'),
        t('درآمد سود سهام 1,000,000 در سود گروه می‌ماند', 'Dividend income of 1,000,000 stays in group profit'),
        t('800,000 درآمد سود سهام شرکت اصلی در برابر سود تقسیمی حذف و 200,000 از منافع فاقد حق کنترل کم می‌شود', 'The parent’s 800,000 dividend income is eliminated against the dividend, and 200,000 reduces non-controlling interests'),
      ],
      answer: 3,
      explain: t(
        'شرکت اصلی فقط 800,000 درآمد سود سهام ثبت کرده که درون گروه است و حذف می‌شود؛ 200,000 پول واقعی است که به سهامدار اقلیت رسیده و منافع فاقد حق کنترل را کم می‌کند. حذف کل 1,000,000 در برابر درآمد شرکت اصلی ممکن نیست، چون درآمدش فقط 800,000 است.',
        'The parent booked only 800,000 of dividend income, which is intragroup and eliminated; 200,000 is real cash paid to the minority shareholder and reduces NCI. Eliminating the full 1,000,000 against the parent’s income is impossible, because its income is only 800,000.',
      ),
    },
  ],
}
