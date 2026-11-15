import type { GlossaryTerm } from './types'

export const glossary: GlossaryTerm[] = [
  // ───────────────────────────── basics ─────────────────────────────
  {
    id: 'accounting',
    category: 'basics',
    term: { fa: 'حسابداری', en: 'Accounting' },
    def: {
      fa: 'فرایند شناسایی، اندازه‌گیری، ثبت، طبقه‌بندی و تلخیص رویدادهای مالی یک واحد تجاری و گزارش نتایج آن به استفاده‌کنندگان. هدف حسابداری فراهم کردن اطلاعات مفید برای تصمیم‌گیری‌های اقتصادی است؛ به همین دلیل آن را «زبان تجارت» می‌نامند.',
      en: "The process of identifying, measuring, recording, classifying and summarizing an entity's financial transactions and communicating the results to users. Its purpose is to provide information that is useful for economic decisions, which is why it is often called the language of business.",
    },
    related: ['accounting-equation', 'users-of-financial-information', 'accounting-cycle'],
  },
  {
    id: 'accounting-equation',
    category: 'basics',
    term: { fa: 'معادله حسابداری', en: 'Accounting Equation' },
    def: {
      fa: 'رابطه بنیادینی که پایه حسابداری دوطرفه است: منابع اقتصادی واحد تجاری (دارایی‌ها) همواره با ادعای اعتباردهندگان (بدهی‌ها) و مالکان (حقوق مالکانه) نسبت به آن منابع برابر است. هر رویداد مالی دست‌کم دو قلم از این معادله را تغییر می‌دهد، اما توازن آن هرگز به هم نمی‌خورد.',
      en: "The fundamental relationship behind double-entry bookkeeping: a business's economic resources (assets) always equal the claims on them by creditors (liabilities) and owners (equity). Every transaction changes at least two items, yet the equation always stays in balance.",
    },
    formula: {
      fa: 'دارایی‌ها = بدهی‌ها + حقوق مالکانه؛ شکل گسترده: دارایی‌ها = بدهی‌ها + سرمایه − برداشت + درآمدها − هزینه‌ها',
      en: 'Assets = Liabilities + Equity; expanded: Assets = Liabilities + Capital − Drawings + Revenue − Expenses',
    },
    related: ['asset', 'liability', 'equity'],
  },
  {
    id: 'economic-entity',
    category: 'basics',
    term: { fa: 'فرض شخصیت حسابداری (تفکیک شخصیت)', en: 'Economic Entity Assumption' },
    def: {
      fa: 'طبق این فرض، واحد تجاری شخصیتی جدا و مستقل از مالکان خود و از سایر واحدها دارد و فقط رویدادهای مربوط به خود آن در دفاترش ثبت می‌شود. برای نمونه، خرید خودروی شخصی مالک نباید در حساب‌های مؤسسه ثبت شود.',
      en: "Treats the business as a unit separate from its owners and from other businesses, so only the entity's own transactions are recorded in its books. For example, the owner buying a family car is not a business transaction.",
    },
    related: ['sole-proprietorship', 'drawings', 'going-concern'],
  },
  {
    id: 'going-concern',
    category: 'basics',
    term: { fa: 'تداوم فعالیت', en: 'Going Concern' },
    def: {
      fa: 'فرض بر این است که واحد تجاری در آینده قابل پیش‌بینی به فعالیت خود ادامه می‌دهد و نه قصد انحلال یا توقف عملیات را دارد و نه ناگزیر از آن است. همین فرض است که ثبت دارایی‌ها به بهای تمام‌شده و تقسیم بهای آن‌ها میان دوره‌های آتی، مانند استهلاک، را توجیه می‌کند.',
      en: 'The assumption that the entity will keep operating for the foreseeable future, with neither the intention nor the need to liquidate or significantly curtail its operations. It is what justifies carrying assets at cost and spreading that cost over future periods, as with depreciation.',
    },
    related: ['historical-cost', 'depreciation', 'economic-entity'],
  },
  {
    id: 'monetary-unit',
    category: 'basics',
    term: { fa: 'فرض واحد پولی (واحد اندازه‌گیری)', en: 'Monetary Unit Assumption' },
    def: {
      fa: 'فقط رویدادهایی در حسابداری ثبت می‌شوند که بتوان آن‌ها را بر حسب پول اندازه‌گیری کرد و واحد پول، معیار مشترک اندازه‌گیری همه اقلام است. در حسابداری سنتی فرض می‌شود قدرت خرید پول نسبتاً ثابت است؛ فرضی که در شرایط تورم بالا محدودیتی جدی به شمار می‌آید.',
      en: "Only events that can be expressed in money are recorded, and money serves as the common yardstick for every item. Traditional accounting also assumes the currency's purchasing power is reasonably stable, an assumption that becomes a serious limitation under high inflation.",
    },
    related: ['historical-cost', 'economic-entity'],
  },
  {
    id: 'time-period',
    category: 'basics',
    term: { fa: 'فرض دوره مالی (دوره زمانی)', en: 'Time Period Assumption' },
    def: {
      fa: 'عمر واحد تجاری به دوره‌های زمانی مساوی و قراردادی مانند ماه، فصل یا سال مالی تقسیم می‌شود تا بتوان عملکرد آن را به‌موقع گزارش کرد. همین تقسیم‌بندی است که ثبت‌های اصلاحی را در پایان هر دوره ضروری می‌کند.',
      en: 'The life of a business is divided into artificial, equal-length periods (months, quarters or a fiscal year) so that performance can be reported on a timely basis. This division is what makes period-end adjusting entries necessary.',
    },
    related: ['adjusting-entries', 'accrual-basis', 'closing-entries'],
  },
  {
    id: 'historical-cost',
    category: 'basics',
    term: { fa: 'اصل بهای تمام‌شده تاریخی', en: 'Historical Cost Principle' },
    def: {
      fa: 'دارایی‌ها در زمان تحصیل به بهای تمام‌شده، یعنی مبلغی که واقعاً برای به‌دست آوردن آن‌ها پرداخت یا تعهد شده است، ثبت می‌شوند. این مبلغ عینی و قابل رسیدگی است؛ هرچند IFRS برای برخی اقلام، اندازه‌گیری به ارزش منصفانه را نیز مجاز یا الزامی می‌داند.',
      en: 'Assets are recorded at cost when acquired, meaning the amount actually paid or committed to obtain them. Cost is objective and verifiable, although IFRS permits or requires fair-value measurement for certain items.',
    },
    related: ['going-concern', 'monetary-unit', 'book-value'],
  },
  {
    id: 'revenue-recognition',
    category: 'basics',
    term: { fa: 'اصل شناخت درآمد (تحقق درآمد)', en: 'Revenue Recognition Principle' },
    def: {
      fa: 'درآمد زمانی شناسایی می‌شود که واحد تجاری تعهد عملکرد خود را ایفا کند، یعنی کنترل کالا یا خدمت را به مشتری منتقل کند (IFRS 15)، نه لزوماً هنگامی که وجه نقد دریافت می‌شود. این اصل همراه با اصل تطابق، هسته مبنای تعهدی است.',
      en: 'Revenue is recognized when the entity satisfies a performance obligation, that is, when control of goods or services passes to the customer (IFRS 15), not necessarily when cash is received. Together with the matching principle, it forms the core of accrual accounting.',
    },
    related: ['matching-principle', 'accrual-basis', 'unearned-revenue'],
  },
  {
    id: 'matching-principle',
    category: 'basics',
    term: { fa: 'اصل تطابق (تطابق هزینه با درآمد)', en: 'Matching Principle' },
    def: {
      fa: 'هزینه‌ها در همان دوره‌ای شناسایی می‌شوند که درآمدهای مرتبط با آن‌ها شناسایی شده است تا سود هر دوره به‌درستی اندازه‌گیری شود. برای مثال، بهای تمام‌شده کالایی که امسال فروخته شده، هزینه امسال است؛ حتی اگر خرید آن سال گذشته انجام شده باشد.',
      en: "Expenses are recognized in the same period as the revenues they help generate, so that each period's profit is measured properly. For example, the cost of goods sold this year is this year's expense, even if the goods were bought last year.",
    },
    related: ['revenue-recognition', 'accrual-basis', 'depreciation'],
  },
  {
    id: 'materiality',
    category: 'basics',
    term: { fa: 'اهمیت', en: 'Materiality' },
    def: {
      fa: 'اطلاعاتی بااهمیت تلقی می‌شود که بتوان به‌طور معقول انتظار داشت حذف، تحریف یا مبهم‌ساختن آن بر تصمیم‌های استفاده‌کنندگان صورت‌های مالی اثر بگذارد. اهمیت هم به مبلغ و هم به ماهیت قلم بستگی دارد؛ از همین رو اقلام جزئی، مانند خرید یک منگنه، به‌جای ثبت به‌عنوان دارایی و استهلاک، مستقیماً به هزینه منظور می‌شوند.',
      en: 'Information is material if omitting, misstating or obscuring it could reasonably be expected to influence the decisions of financial-statement users. Materiality depends on both size and nature, which is why trivial items such as a stapler are simply expensed rather than capitalized and depreciated.',
    },
    related: ['users-of-financial-information', 'notes-to-financial-statements'],
  },
  {
    id: 'ifrs',
    category: 'basics',
    term: {
      fa: 'استانداردهای بین‌المللی گزارشگری مالی (IFRS)',
      en: 'International Financial Reporting Standards (IFRS)',
    },
    def: {
      fa: 'مجموعه استانداردهایی که هیئت استانداردهای بین‌المللی حسابداری (IASB) تدوین می‌کند و در بیش از 140 کشور و حوزه قضایی الزامی یا مجاز است. هدف آن تهیه صورت‌های مالی شفاف و قابل مقایسه در سطح جهانی است. در آمریکا US GAAP به کار می‌رود و در ایران، استانداردهای ملی را سازمان حسابرسی تدوین می‌کند و برخی شرکت‌های بزرگ و پذیرفته‌شده در بورس به‌صورت مرحله‌ای ملزم به تهیه صورت‌های مالی طبق IFRS شده‌اند.',
      en: 'The accounting standards issued by the International Accounting Standards Board (IASB), required or permitted in more than 140 jurisdictions. They aim to make financial statements transparent and comparable worldwide. The United States uses its own US GAAP, while in Iran national standards are set by the Audit Organization and certain large and listed companies have been required, in phases, to report under IFRS.',
    },
    related: ['users-of-financial-information', 'lifo', 'comprehensive-income'],
  },
  {
    id: 'users-of-financial-information',
    category: 'basics',
    term: { fa: 'استفاده‌کنندگان اطلاعات مالی', en: 'Users of Financial Information' },
    def: {
      fa: 'اشخاص و گروه‌هایی که برای تصمیم‌گیری به اطلاعات حسابداری نیاز دارند. استفاده‌کنندگان برون‌سازمانی شامل سرمایه‌گذاران، وام‌دهندگان و تأمین‌کنندگان، سازمان امور مالیاتی، نهادهای ناظر و عموم مردم هستند و مدیران، استفاده‌کنندگان درون‌سازمانی به شمار می‌آیند. صورت‌های مالی با مقاصد عمومی، اساساً برای سرمایه‌گذاران و اعتباردهندگان تهیه می‌شوند.',
      en: 'The people and groups who rely on accounting information to make decisions. External users include investors, lenders and suppliers, tax authorities, regulators and the public, while managers are the main internal users. General-purpose financial statements are aimed primarily at investors and creditors.',
    },
    related: ['accounting', 'balance-sheet', 'materiality'],
  },
  {
    id: 'sole-proprietorship',
    category: 'basics',
    term: { fa: 'مؤسسه انفرادی (تک‌مالکی)', en: 'Sole Proprietorship' },
    def: {
      fa: 'واحد تجاری‌ای که مالکیت آن در اختیار یک نفر است. از نظر حسابداری، مؤسسه شخصیتی جدا از مالک دارد، اما از نظر حقوقی مالک در برابر بدهی‌های آن مسئولیت نامحدود دارد؛ حقوق مالکانه در این نوع واحد با حساب‌های سرمایه و برداشت نشان داده می‌شود.',
      en: "A business owned by a single person. For accounting purposes it is separate from its owner, yet legally the owner has unlimited liability for its debts; equity is shown through the owner's Capital and Drawings accounts.",
    },
    related: ['partnership', 'corporation', 'capital'],
  },
  {
    id: 'partnership',
    category: 'basics',
    term: { fa: 'شرکت تضامنی (شراکت)', en: 'Partnership' },
    def: {
      fa: 'واحد تجاری‌ای که دو یا چند نفر بر اساس قرارداد شراکت مالک آن هستند و سود و زیان را طبق توافق میان خود تقسیم می‌کنند. برای هر شریک، حساب سرمایه و برداشت جداگانه نگهداری می‌شود و شرکا معمولاً به‌طور تضامنی مسئول بدهی‌های شرکت‌اند.',
      en: "A business co-owned by two or more people under a partnership agreement, who share profits and losses as agreed. Each partner has separate Capital and Drawings accounts, and partners are generally jointly liable for the firm's debts.",
    },
    related: ['sole-proprietorship', 'corporation', 'drawings'],
  },
  {
    id: 'corporation',
    category: 'basics',
    term: { fa: 'شرکت سهامی', en: 'Corporation' },
    def: {
      fa: 'واحد تجاری‌ای با شخصیت حقوقی مستقل که سرمایه آن به سهام تقسیم شده و مسئولیت صاحبان سهام به مبلغ سرمایه‌گذاری آن‌ها محدود است. حقوق مالکانه در شرکت سهامی عمدتاً به سرمایه (سهام) و سود انباشته تفکیک می‌شود و به‌جای برداشت، سود سهام میان سهامداران تقسیم می‌شود.',
      en: "A legal entity separate from its owners, whose capital is divided into shares and whose shareholders' liability is limited to what they invested. Its equity is mainly split into share capital and retained earnings, and owners receive dividends rather than making drawings.",
    },
    related: ['retained-earnings', 'equity', 'sole-proprietorship'],
  },

  // ───────────────────────────── accounts ─────────────────────────────
  {
    id: 'account',
    category: 'accounts',
    term: { fa: 'حساب', en: 'Account' },
    def: {
      fa: 'واحد پایه ثبت و طبقه‌بندی اطلاعات حسابداری که افزایش‌ها، کاهش‌ها و مانده یک قلم مشخص، مانند وجه نقد یا حساب‌های پرداختنی، را نشان می‌دهد. هر حساب یک طرف بدهکار و یک طرف بستانکار دارد و مانده آن، تفاوت جمع این دو طرف است.',
      en: 'The basic unit for recording and classifying accounting data, showing the increases, decreases and balance of one specific item such as Cash or Accounts Payable. Every account has a debit (left) side and a credit (right) side, and its balance is the difference between the two totals.',
    },
    related: ['t-account', 'ledger', 'chart-of-accounts'],
  },
  {
    id: 'asset',
    category: 'accounts',
    term: { fa: 'دارایی', en: 'Asset' },
    def: {
      fa: 'منبع اقتصادی فعلی که در نتیجه رویدادهای گذشته تحت کنترل واحد تجاری است و توان ایجاد منافع اقتصادی را دارد؛ مانند وجه نقد، حساب‌های دریافتنی، موجودی کالا و ماشین‌آلات. دارایی‌ها با ثبت بدهکار افزایش می‌یابند و مانده عادی آن‌ها بدهکار است.',
      en: 'A present economic resource controlled by the entity as a result of past events and capable of producing economic benefits, such as cash, receivables, inventory and equipment. Assets increase with debits and carry a normal debit balance.',
    },
    related: ['current-asset', 'liability', 'accounting-equation'],
  },
  {
    id: 'current-asset',
    category: 'accounts',
    term: { fa: 'دارایی جاری', en: 'Current Asset' },
    def: {
      fa: 'دارایی‌ای که انتظار می‌رود ظرف یک سال یا یک چرخه عملیاتی عادی (هر کدام طولانی‌تر باشد) به وجه نقد تبدیل، فروخته یا مصرف شود؛ مانند وجه نقد، سرمایه‌گذاری‌های کوتاه‌مدت، حساب‌های دریافتنی، موجودی کالا و پیش‌پرداخت‌ها. سایر دارایی‌ها، مانند زمین، ساختمان و دارایی‌های نامشهود، غیرجاری به شمار می‌آیند.',
      en: 'An asset expected to be turned into cash, sold or consumed within one year or the normal operating cycle, whichever is longer, such as cash, short-term investments, receivables, inventory and prepayments. All other assets, such as land, buildings and intangibles, are non-current.',
    },
    related: ['current-liability', 'working-capital', 'current-ratio'],
  },
  {
    id: 'liability',
    category: 'accounts',
    term: { fa: 'بدهی', en: 'Liability' },
    def: {
      fa: 'تعهد فعلی واحد تجاری به انتقال منابع اقتصادی که از رویدادهای گذشته ناشی شده است؛ مانند حساب‌های پرداختنی، وام‌های بانکی، حقوق پرداختنی و پیش‌دریافت‌ها. بدهی‌ها با ثبت بستانکار افزایش می‌یابند و مانده عادی آن‌ها بستانکار است.',
      en: 'A present obligation of the entity to transfer an economic resource as a result of past events, such as accounts payable, bank loans, wages payable and unearned revenue. Liabilities increase with credits and carry a normal credit balance.',
    },
    related: ['current-liability', 'asset', 'accounts-payable'],
  },
  {
    id: 'current-liability',
    category: 'accounts',
    term: { fa: 'بدهی جاری', en: 'Current Liability' },
    def: {
      fa: 'بدهی‌ای که انتظار می‌رود ظرف یک سال یا یک چرخه عملیاتی عادی تسویه شود؛ مانند حساب‌های پرداختنی، حقوق و دستمزد پرداختنی، مالیات پرداختنی و بخش جاری وام‌های بلندمدت. بدهی‌هایی که سررسید آن‌ها بیش از این مدت است، غیرجاری (بلندمدت) طبقه‌بندی می‌شوند.',
      en: 'An obligation expected to be settled within one year or the normal operating cycle, such as accounts payable, wages payable, taxes payable and the current portion of long-term debt. Obligations falling due later are classified as non-current (long-term).',
    },
    related: ['current-asset', 'working-capital', 'current-ratio'],
  },
  {
    id: 'equity',
    category: 'accounts',
    term: { fa: 'حقوق مالکانه', en: 'Equity' },
    def: {
      fa: 'منافع باقی‌مانده مالکان در دارایی‌های واحد تجاری پس از کسر همه بدهی‌ها؛ در شرکت‌های سهامی به آن حقوق صاحبان سهام نیز می‌گویند. حقوق مالکانه با سرمایه‌گذاری مالکان و کسب سود افزایش و با برداشت (یا تقسیم سود) و زیان کاهش می‌یابد و مانده عادی آن بستانکار است.',
      en: "The owners' residual interest in the entity's assets after deducting all its liabilities; in a corporation it is called shareholders' equity. Equity grows with owner investment and profit, shrinks with drawings (or dividends) and losses, and carries a normal credit balance.",
    },
    formula: {
      fa: 'حقوق مالکانه = دارایی‌ها − بدهی‌ها',
      en: 'Equity = Assets − Liabilities',
    },
    related: ['capital', 'retained-earnings', 'accounting-equation'],
  },
  {
    id: 'capital',
    category: 'accounts',
    term: { fa: 'سرمایه', en: 'Capital' },
    def: {
      fa: 'حسابی در بخش حقوق مالکانه که مبلغ سرمایه‌گذاری مالک یا مالکان را در واحد تجاری، چه به‌صورت وجه نقد و چه به‌صورت سایر دارایی‌ها، نشان می‌دهد. سرمایه با ثبت بستانکار افزایش می‌یابد و در مؤسسات انفرادی، سود خالص و برداشت‌ها در پایان دوره به این حساب بسته می‌شوند.',
      en: 'The equity account recording what the owner or owners have invested in the business, whether in cash or other assets. It increases with credits, and in a sole proprietorship net income and drawings are closed into it at period end.',
    },
    related: ['equity', 'drawings', 'closing-entries'],
  },
  {
    id: 'drawings',
    category: 'accounts',
    term: { fa: 'برداشت', en: 'Drawings' },
    def: {
      fa: 'وجه نقد یا دارایی دیگری که مالک برای استفاده شخصی از واحد تجاری خارج می‌کند. برداشت هزینه نیست و در صورت سود و زیان نمی‌آید، بلکه مستقیماً حقوق مالکانه را کاهش می‌دهد؛ این حساب موقت است، مانده عادی بدهکار دارد و در پایان دوره به حساب سرمایه بسته می‌شود.',
      en: 'Cash or other assets the owner withdraws from the business for personal use. Drawings are not an expense and never appear on the income statement; they reduce equity directly, carry a normal debit balance and are closed to Capital at period end.',
    },
    related: ['capital', 'temporary-accounts', 'expense'],
  },
  {
    id: 'revenue',
    category: 'accounts',
    term: { fa: 'درآمد', en: 'Revenue' },
    def: {
      fa: 'افزایش در منافع اقتصادی که از فعالیت‌های عادی واحد تجاری، مانند فروش کالا یا ارائه خدمات، حاصل می‌شود و به‌جز آورده مالکان، حقوق مالکانه را افزایش می‌دهد. درآمد حسابی موقت با مانده عادی بستانکار است.',
      en: 'The increase in economic benefits arising from ordinary activities, such as selling goods or providing services, that raises equity other than through contributions from owners. Revenue accounts are temporary and carry a normal credit balance.',
    },
    related: ['expense', 'revenue-recognition', 'income-statement'],
  },
  {
    id: 'expense',
    category: 'accounts',
    term: { fa: 'هزینه', en: 'Expense' },
    def: {
      fa: 'کاهش در منافع اقتصادی، به‌صورت خروج یا مصرف دارایی‌ها یا ایجاد بدهی، که در جریان کسب درآمد رخ می‌دهد و به‌جز توزیع میان مالکان، حقوق مالکانه را کاهش می‌دهد؛ مانند حقوق کارکنان، اجاره و استهلاک. هزینه حسابی موقت با مانده عادی بدهکار است.',
      en: 'A decrease in economic benefits, through outflows or the using up of assets or the incurring of liabilities, in the course of earning revenue; it reduces equity other than through distributions to owners. Examples include wages, rent and depreciation; expense accounts are temporary with a normal debit balance.',
    },
    related: ['revenue', 'matching-principle', 'drawings'],
  },
  {
    id: 'accounts-receivable',
    category: 'accounts',
    term: { fa: 'حساب‌های دریافتنی', en: 'Accounts Receivable' },
    def: {
      fa: 'مبالغی که مشتریان بابت خرید نسیه کالا یا خدمات به واحد تجاری بدهکارند. حساب‌های دریافتنی دارایی جاری است و برای نشان دادن مبلغ قابل وصول، ذخیره مطالبات مشکوک‌الوصول (زیان کاهش ارزش) از آن کسر می‌شود.',
      en: 'Amounts owed to the business by customers who bought goods or services on credit. Receivables are a current asset, reported net of an allowance for doubtful accounts (expected credit losses) to show the amount expected to be collected.',
    },
    related: ['receivables-turnover', 'contra-account', 'accrued-revenue'],
  },
  {
    id: 'accounts-payable',
    category: 'accounts',
    term: { fa: 'حساب‌های پرداختنی', en: 'Accounts Payable' },
    def: {
      fa: 'مبالغی که واحد تجاری بابت خرید نسیه کالا یا خدمات به تأمین‌کنندگان بدهکار است. حساب‌های پرداختنی بدهی جاری با مانده عادی بستانکار است و معمولاً بدون بهره و طی چند هفته تسویه می‌شود.',
      en: 'Amounts the business owes suppliers for goods or services bought on credit. Accounts payable is a current liability with a normal credit balance, usually interest-free and settled within weeks.',
    },
    related: ['current-liability', 'accounts-receivable', 'purchase-discounts'],
  },
  {
    id: 'contra-account',
    category: 'accounts',
    term: { fa: 'حساب کاهنده (حساب مقابل)', en: 'Contra Account' },
    def: {
      fa: 'حسابی که مانده آن برخلاف مانده حساب اصلی مرتبط است و برای کاهش مبلغ گزارش‌شده آن به کار می‌رود. نمونه‌ها: استهلاک انباشته (کاهنده دارایی ثابت)، ذخیره مطالبات مشکوک‌الوصول (کاهنده حساب‌های دریافتنی) و برگشت از فروش و تخفیفات (کاهنده فروش).',
      en: "An account whose balance is opposite to that of the related main account, used to reduce that account's reported amount. Examples include Accumulated Depreciation (against equipment), Allowance for Doubtful Accounts (against receivables) and Sales Returns and Allowances (against sales).",
    },
    related: ['accumulated-depreciation', 'accounts-receivable', 'purchase-returns-and-allowances'],
  },
  {
    id: 'accumulated-depreciation',
    category: 'accounts',
    term: { fa: 'استهلاک انباشته', en: 'Accumulated Depreciation' },
    def: {
      fa: 'جمع استهلاکی که از تاریخ تحصیل تا کنون برای یک دارایی ثابت شناسایی شده است. این حساب، کاهنده دارایی و دارای مانده عادی بستانکار است و از بهای تمام‌شده دارایی کسر می‌شود تا بهای اولیه، دست‌نخورده در دفاتر باقی بماند.',
      en: "The total depreciation recognized on a fixed asset since it was acquired. It is a contra-asset account with a normal credit balance, deducted from the asset's cost so that the original cost stays visible in the books.",
    },
    related: ['depreciation', 'book-value', 'contra-account'],
  },
  {
    id: 'chart-of-accounts',
    category: 'accounts',
    term: { fa: 'فهرست حساب‌ها (کدینگ حساب‌ها)', en: 'Chart of Accounts' },
    def: {
      fa: 'فهرست منظم و کدگذاری‌شده همه حساب‌هایی که واحد تجاری در دفتر کل به کار می‌برد، معمولاً به ترتیب دارایی‌ها، بدهی‌ها، حقوق مالکانه، درآمدها و هزینه‌ها. در ایران حساب‌ها معمولاً در سطوح گروه، کل، معین و تفصیلی کدگذاری می‌شوند.',
      en: 'An organized, numbered list of every account an entity uses in its ledger, typically ordered assets, liabilities, equity, revenue and expenses. A common scheme gives each type a leading digit (1 assets, 2 liabilities, 3 equity, 4 revenue, 5 expenses) and adds digits for more detailed accounts.',
    },
    related: ['account', 'ledger', 'permanent-accounts'],
  },
  {
    id: 'permanent-accounts',
    category: 'accounts',
    term: { fa: 'حساب‌های دائمی', en: 'Permanent (Real) Accounts' },
    def: {
      fa: 'حساب‌های ترازنامه‌ای، یعنی دارایی‌ها، بدهی‌ها و حساب‌های حقوق مالکانه مانند سرمایه و سود انباشته، که در پایان دوره بسته نمی‌شوند و مانده آن‌ها به دوره بعد منتقل می‌شود. به این حساب‌ها حساب‌های واقعی نیز می‌گویند.',
      en: 'Balance-sheet accounts (assets, liabilities and equity accounts such as Capital or Retained Earnings) that are not closed at period end; their balances carry forward into the next period. They are also called real accounts.',
    },
    related: ['temporary-accounts', 'balance-sheet', 'closing-entries'],
  },
  {
    id: 'temporary-accounts',
    category: 'accounts',
    term: { fa: 'حساب‌های موقت', en: 'Temporary (Nominal) Accounts' },
    def: {
      fa: 'حساب‌های درآمد، هزینه و برداشت (و در شرکت‌های سهامی، سود سهام) که فقط اطلاعات یک دوره مالی را گردآوری می‌کنند. این حساب‌ها در پایان هر دوره بسته و مانده‌شان صفر می‌شود تا دوره بعد از صفر آغاز شود؛ به آن‌ها حساب‌های اسمی نیز می‌گویند.',
      en: 'Revenue, expense and drawings (or dividends) accounts, which accumulate data for a single period only. They are closed to zero at the end of each period so the next one starts fresh, and are also called nominal accounts.',
    },
    related: ['permanent-accounts', 'closing-entries', 'income-summary'],
  },

  // ───────────────────────────── recording ─────────────────────────────
  {
    id: 'source-document',
    category: 'recording',
    term: { fa: 'مدرک مثبته (مدرک پشتوانه)', en: 'Source Document' },
    def: {
      fa: 'مدرک کاغذی یا الکترونیکی که وقوع یک رویداد مالی را تأیید می‌کند و مبنای ثبت آن قرار می‌گیرد؛ مانند فاکتور خرید و فروش، رسید بانکی، چک و قرارداد. مدارک مثبته شواهد عینی لازم برای رسیدگی حسابرسان را فراهم می‌کنند.',
      en: 'The paper or electronic evidence that a transaction took place and the basis for recording it, such as sales and purchase invoices, bank receipts, checks and contracts. Source documents supply the objective evidence auditors rely on.',
    },
    related: ['journal', 'accounting-cycle'],
  },
  {
    id: 'debit',
    category: 'recording',
    term: { fa: 'بدهکار', en: 'Debit (Dr)' },
    def: {
      fa: 'یکی از دو طرف هر حساب و هر ثبت حسابداری. ثبت بدهکار، دارایی‌ها، هزینه‌ها و برداشت را افزایش و بدهی‌ها، حقوق مالکانه و درآمدها را کاهش می‌دهد؛ «بدهکار» در حسابداری به معنای خوب یا بد نیست و فقط یک طرف حساب را نشان می‌دهد.',
      en: 'The left side of any account or journal entry. A debit increases assets, expenses and drawings, and decreases liabilities, equity and revenue; it simply means left, not good or bad.',
    },
    related: ['credit', 'normal-balance', 'double-entry'],
  },
  {
    id: 'credit',
    category: 'recording',
    term: { fa: 'بستانکار', en: 'Credit (Cr)' },
    def: {
      fa: 'طرف دیگر هر حساب و هر ثبت حسابداری. ثبت بستانکار، بدهی‌ها، حقوق مالکانه و درآمدها را افزایش و دارایی‌ها، هزینه‌ها و برداشت را کاهش می‌دهد. در هر ثبت، جمع مبالغ بستانکار باید با جمع مبالغ بدهکار برابر باشد.',
      en: 'The right side of any account or journal entry. A credit increases liabilities, equity and revenue, and decreases assets, expenses and drawings. In every entry, total credits must equal total debits.',
    },
    related: ['debit', 'normal-balance', 'double-entry'],
  },
  {
    id: 'double-entry',
    category: 'recording',
    term: { fa: 'حسابداری دوطرفه', en: 'Double-Entry Bookkeeping' },
    def: {
      fa: 'نظامی که در آن هر رویداد مالی دست‌کم در دو حساب، یکی بدهکار و دیگری بستانکار، با مبالغ مساوی ثبت می‌شود. این نظام توازن معادله حسابداری را حفظ می‌کند و امکان کشف بسیاری از خطاها را از طریق تراز آزمایشی فراهم می‌سازد.',
      en: 'The system in which every transaction is recorded in at least two accounts, with equal debits and credits. It keeps the accounting equation in balance and lets many errors be caught through the trial balance.',
    },
    formula: {
      fa: 'جمع بدهکار = جمع بستانکار',
      en: 'Total debits = Total credits',
    },
    related: ['accounting-equation', 'debit', 'trial-balance'],
  },
  {
    id: 'normal-balance',
    category: 'recording',
    term: { fa: 'مانده عادی', en: 'Normal Balance' },
    def: {
      fa: 'طرفی (بدهکار یا بستانکار) که افزایش‌های یک حساب در آن ثبت می‌شود و انتظار می‌رود مانده حساب نیز در همان طرف باشد. دارایی‌ها، هزینه‌ها و برداشت مانده عادی بدهکار و بدهی‌ها، حقوق مالکانه و درآمدها مانده عادی بستانکار دارند؛ مانده غیرعادی اغلب نشانه خطاست.',
      en: "The side, debit or credit, on which an account's increases are recorded and where its balance is therefore expected to be. Assets, expenses and drawings normally have debit balances; liabilities, equity and revenue normally have credit balances. An abnormal balance often signals an error.",
    },
    related: ['debit', 'credit', 'trial-balance'],
  },
  {
    id: 'journal',
    category: 'recording',
    term: { fa: 'دفتر روزنامه', en: 'Journal' },
    def: {
      fa: 'دفتری که رویدادهای مالی ابتدا و به ترتیب تاریخ وقوع در آن ثبت می‌شوند؛ از این رو به آن «دفتر ثبت اولیه» نیز می‌گویند. هر ثبت روزنامه شامل تاریخ، نام حساب‌های بدهکار و بستانکار، مبالغ و شرح مختصر رویداد است.',
      en: 'The book of original entry, where transactions are first recorded in chronological order. Each journal entry shows the date, the accounts debited and credited, the amounts and a brief explanation.',
    },
    related: ['posting', 'ledger', 'compound-entry'],
  },
  {
    id: 'compound-entry',
    category: 'recording',
    term: { fa: 'ثبت مرکب', en: 'Compound Entry' },
    def: {
      fa: 'ثبتی در دفتر روزنامه که بیش از دو حساب را درگیر می‌کند؛ مثلاً خرید تجهیزاتی که بخشی از بهای آن نقدی و بخشی نسیه پرداخت می‌شود. در ثبت مرکب نیز جمع بدهکارها باید با جمع بستانکارها برابر باشد.',
      en: 'A journal entry involving more than two accounts, for example buying equipment partly for cash and partly on credit. As with any entry, total debits must equal total credits.',
    },
    related: ['journal', 'double-entry'],
  },
  {
    id: 'ledger',
    category: 'recording',
    term: { fa: 'دفتر کل', en: 'General Ledger' },
    def: {
      fa: 'مجموعه همه حساب‌های واحد تجاری که اطلاعات ثبت‌شده در دفتر روزنامه بر اساس حساب در آن طبقه‌بندی می‌شود و مانده هر حساب را نشان می‌دهد. جزئیات حساب‌هایی مانند حساب‌های دریافتنی (به تفکیک هر مشتری) در دفتر معین نگهداری می‌شود.',
      en: "The collection of all of an entity's accounts, where journal data is sorted by account to show each account's balance. The detail behind control accounts, such as receivables by individual customer, is kept in subsidiary ledgers.",
    },
    related: ['posting', 'journal', 'account'],
  },
  {
    id: 'posting',
    category: 'recording',
    term: { fa: 'انتقال به دفتر کل', en: 'Posting' },
    def: {
      fa: 'انتقال مبالغ بدهکار و بستانکار هر ثبت از دفتر روزنامه به حساب‌های مربوط در دفتر کل. با درج شماره صفحه یا کد حساب در ستون عطف، می‌توان مسیر هر رقم را از دفتر روزنامه تا دفتر کل و برعکس دنبال کرد.',
      en: 'Transferring the debit and credit amounts of each journal entry to the related accounts in the ledger. Cross-references (journal page and account numbers) let every figure be traced from journal to ledger and back.',
    },
    related: ['journal', 'ledger', 't-account'],
  },
  {
    id: 't-account',
    category: 'recording',
    term: { fa: 'حساب T شکل', en: 'T-Account' },
    def: {
      fa: 'شکل ساده‌شده یک حساب به صورت حرف T که نام حساب بالای آن نوشته می‌شود و بدهکارها در یک طرف و بستانکارها در طرف دیگر قرار می‌گیرند. حساب T شکل ابزار آموزشی و تحلیلی سریعی برای دنبال کردن اثر رویدادها و محاسبه مانده است.',
      en: 'A simplified, T-shaped picture of an account, with the account name on top, debits on the left and credits on the right. It is a quick teaching and analysis tool for tracing transactions and working out balances.',
    },
    related: ['account', 'debit', 'credit'],
  },
  {
    id: 'trial-balance',
    category: 'recording',
    term: { fa: 'تراز آزمایشی', en: 'Trial Balance' },
    def: {
      fa: 'فهرست همه حساب‌های دفتر کل با مانده بدهکار یا بستانکار آن‌ها در یک تاریخ معین که برای اطمینان از برابری جمع بدهکارها و بستانکارها تهیه می‌شود. برابری تراز آزمایشی نبود خطا را ثابت نمی‌کند؛ برای مثال، ثبت در حساب نادرست یا از قلم افتادن کامل یک رویداد را نشان نمی‌دهد. در چرخه حسابداری معمولاً سه تراز آزمایشی تهیه می‌شود: پیش از اصلاحات، تعدیل‌شده و پس از بستن حساب‌ها.',
      en: 'A list of all ledger accounts with their debit or credit balances at a given date, prepared to check that total debits equal total credits. A balanced trial balance does not prove the books are error-free: posting to the wrong account or omitting a transaction entirely goes undetected. The cycle usually produces three: unadjusted, adjusted and post-closing.',
    },
    formula: {
      fa: 'جمع مانده‌های بدهکار = جمع مانده‌های بستانکار',
      en: 'Sum of debit balances = Sum of credit balances',
    },
    related: ['ledger', 'normal-balance', 'adjusting-entries'],
  },
  {
    id: 'accounting-cycle',
    category: 'recording',
    term: { fa: 'چرخه حسابداری', en: 'Accounting Cycle' },
    def: {
      fa: 'مراحلی که در هر دوره مالی تکرار می‌شود: تجزیه و تحلیل رویدادها، ثبت در دفتر روزنامه، انتقال به دفتر کل، تهیه تراز آزمایشی، ثبت‌های اصلاحی، تهیه تراز آزمایشی تعدیل‌شده و صورت‌های مالی، ثبت‌های بستن حساب‌ها، تهیه تراز آزمایشی پس از بستن و در صورت نیاز، ثبت‌های معکوس.',
      en: 'The steps repeated every period: analyze transactions, journalize, post to the ledger, prepare a trial balance, record adjusting entries, prepare an adjusted trial balance and the financial statements, record closing entries, prepare a post-closing trial balance and, optionally, record reversing entries.',
    },
    related: ['journal', 'adjusting-entries', 'closing-entries'],
  },

  // ───────────────────────────── statements ─────────────────────────────
  {
    id: 'balance-sheet',
    category: 'statements',
    term: {
      fa: 'ترازنامه (صورت وضعیت مالی)',
      en: 'Balance Sheet (Statement of Financial Position)',
    },
    def: {
      fa: 'صورتی که دارایی‌ها، بدهی‌ها و حقوق مالکانه واحد تجاری را در یک **تاریخ معین** نشان می‌دهد؛ مانند عکسی از وضعیت مالی در یک لحظه. ترازنامه همان معادله حسابداری در قالب گزارش است و اقلام آن معمولاً به جاری و غیرجاری طبقه‌بندی می‌شوند.',
      en: "A statement showing the entity's assets, liabilities and equity at a **specific date**, like a snapshot of its financial position. It is the accounting equation in report form, with items usually classified as current and non-current.",
    },
    related: ['accounting-equation', 'income-statement', 'permanent-accounts'],
  },
  {
    id: 'income-statement',
    category: 'statements',
    term: { fa: 'صورت سود و زیان', en: 'Income Statement (Profit or Loss)' },
    def: {
      fa: 'صورتی که درآمدها و هزینه‌های واحد تجاری را **طی یک دوره** گزارش می‌کند و سود یا زیان خالص آن دوره را نشان می‌دهد. در شرکت‌های بازرگانی، صورت سود و زیان معمولاً به‌صورت چندمرحله‌ای ارائه می‌شود: فروش خالص، سود ناخالص، سود عملیاتی و در نهایت سود خالص.',
      en: 'The statement reporting revenues and expenses **over a period** and the resulting net income or loss. Merchandisers usually present it in several steps: net sales, gross profit, operating profit and finally net income.',
    },
    formula: {
      fa: 'سود (زیان) خالص = درآمدها − هزینه‌ها',
      en: 'Net income (loss) = Revenues − Expenses',
    },
    related: ['net-income', 'gross-profit', 'comprehensive-income'],
  },
  {
    id: 'statement-of-changes-in-equity',
    category: 'statements',
    term: { fa: 'صورت تغییرات در حقوق مالکانه', en: 'Statement of Changes in Equity' },
    def: {
      fa: 'صورتی که تغییرات حقوق مالکانه را طی دوره نشان می‌دهد: مانده ابتدای دوره، سرمایه‌گذاری جدید مالکان، سود یا زیان خالص، برداشت یا سود سهام و مانده پایان دوره. این صورت، پل ارتباطی میان صورت سود و زیان و ترازنامه است.',
      en: 'Shows how equity changed during the period: opening balance, new owner investment, net income or loss, drawings or dividends, and closing balance. It is the bridge between the income statement and the balance sheet.',
    },
    formula: {
      fa: 'سرمایه پایان دوره = سرمایه ابتدای دوره + سرمایه‌گذاری جدید + سود خالص − برداشت',
      en: 'Ending capital = Beginning capital + New investment + Net income − Drawings',
    },
    related: ['income-statement', 'balance-sheet', 'retained-earnings'],
  },
  {
    id: 'cash-flow-statement',
    category: 'statements',
    term: { fa: 'صورت جریان‌های نقدی', en: 'Cash Flow Statement' },
    def: {
      fa: 'صورتی که دریافت‌ها و پرداخت‌های نقدی دوره را در سه طبقه فعالیت‌های عملیاتی، سرمایه‌گذاری و تأمین مالی گزارش می‌کند. چون بر مبنای نقدی تهیه می‌شود، نشان می‌دهد سود تعهدی تا چه اندازه به وجه نقد واقعی تبدیل شده است؛ جریان نقدی عملیاتی را می‌توان به روش مستقیم یا غیرمستقیم ارائه کرد.',
      en: "Reports the period's cash receipts and payments in three categories: operating, investing and financing activities. Because it is cash-based, it reveals how much of accrual profit has turned into real cash; operating cash flow may be presented using the direct or the indirect method.",
    },
    formula: {
      fa: 'تغییر خالص وجه نقد = جریان نقدی عملیاتی + جریان نقدی سرمایه‌گذاری + جریان نقدی تأمین مالی',
      en: 'Net change in cash = Operating + Investing + Financing cash flows',
    },
    related: ['operating-activities', 'investing-activities', 'financing-activities'],
  },
  {
    id: 'operating-activities',
    category: 'statements',
    term: { fa: 'فعالیت‌های عملیاتی', en: 'Operating Activities' },
    def: {
      fa: 'فعالیت‌های اصلی درآمدزای واحد تجاری که جریان‌های نقدی ناشی از آن‌ها، مانند دریافت از مشتریان و پرداخت به تأمین‌کنندگان و کارکنان و بابت مالیات، در این طبقه گزارش می‌شود. جریان نقدی عملیاتی مثبت و پایدار نشان می‌دهد کسب‌وکار اصلی به‌تنهایی توان تولید وجه نقد دارد.',
      en: 'The principal revenue-producing activities of the entity; their cash flows, such as receipts from customers and payments to suppliers, employees and tax authorities, are reported in this section. Sustained positive operating cash flow shows the core business can generate cash on its own.',
    },
    related: ['cash-flow-statement', 'investing-activities', 'net-income'],
  },
  {
    id: 'investing-activities',
    category: 'statements',
    term: { fa: 'فعالیت‌های سرمایه‌گذاری', en: 'Investing Activities' },
    def: {
      fa: 'تحصیل و واگذاری دارایی‌های بلندمدت و سرمایه‌گذاری‌هایی که جزو معادل‌های وجه نقد نیستند؛ مانند خرید یا فروش زمین، ساختمان، ماشین‌آلات و سهام شرکت‌های دیگر. خروج وجه نقد در این بخش معمولاً نشانه سرمایه‌گذاری برای رشد آینده است.',
      en: 'Acquiring and disposing of long-term assets and of investments that are not cash equivalents, such as buying or selling land, buildings, machinery or shares in other companies. Cash outflows here usually signal investment in future growth.',
    },
    related: ['cash-flow-statement', 'financing-activities', 'operating-activities'],
  },
  {
    id: 'financing-activities',
    category: 'statements',
    term: { fa: 'فعالیت‌های تأمین مالی', en: 'Financing Activities' },
    def: {
      fa: 'فعالیت‌هایی که اندازه و ترکیب حقوق مالکانه و استقراض واحد تجاری را تغییر می‌دهند؛ مانند دریافت وام، بازپرداخت اصل وام، انتشار سهام، آورده یا برداشت مالکان و پرداخت سود سهام. این بخش نشان می‌دهد واحد تجاری منابع مالی خود را از کجا تأمین کرده است.',
      en: "Activities that change the size and make-up of the entity's equity and borrowings, such as taking out or repaying loans, issuing shares, owner contributions or withdrawals and paying dividends. This section shows where the business sourced its funding.",
    },
    related: ['cash-flow-statement', 'investing-activities', 'debt-to-equity-ratio'],
  },
  {
    id: 'notes-to-financial-statements',
    category: 'statements',
    term: { fa: 'یادداشت‌های توضیحی', en: 'Notes to the Financial Statements' },
    def: {
      fa: 'بخش جدایی‌ناپذیر صورت‌های مالی که رویه‌های حسابداری مهم، جزئیات اقلام گزارش‌شده و اطلاعاتی مانند بدهی‌های احتمالی و رویدادهای پس از تاریخ ترازنامه را افشا می‌کند. بدون یادداشت‌های توضیحی، ارقام صورت‌های مالی به‌طور کامل قابل درک نیستند.',
      en: 'An integral part of the financial statements that discloses significant accounting policies, breakdowns of reported figures and other information such as contingent liabilities and events after the reporting date. Without the notes, the numbers cannot be fully understood.',
    },
    related: ['materiality', 'balance-sheet', 'ifrs'],
  },
  {
    id: 'retained-earnings',
    category: 'statements',
    term: { fa: 'سود انباشته', en: 'Retained Earnings' },
    def: {
      fa: 'جمع سودهای خالص شرکت از آغاز فعالیت، پس از کسر زیان‌ها و سودهای تقسیم‌شده میان سهامداران؛ یعنی بخشی از سود که برای استفاده در عملیات در شرکت باقی مانده است. سود انباشته جزء حقوق مالکانه است و نباید آن را با وجه نقد یکی دانست.',
      en: "A corporation's cumulative net income since it began, less losses and dividends paid out; in other words, the profit kept in the business. It is part of equity and is not the same thing as cash.",
    },
    formula: {
      fa: 'سود انباشته پایان دوره = سود انباشته ابتدای دوره + سود خالص − سود سهام',
      en: 'Ending retained earnings = Beginning retained earnings + Net income − Dividends',
    },
    related: ['net-income', 'corporation', 'statement-of-changes-in-equity'],
  },
  {
    id: 'net-income',
    category: 'statements',
    term: { fa: 'سود خالص', en: 'Net Income (Net Profit)' },
    def: {
      fa: 'مبلغی که پس از کسر همه هزینه‌ها، از جمله بهای تمام‌شده کالای فروش‌رفته، هزینه‌های عملیاتی، هزینه مالی و مالیات، از درآمدها باقی می‌ماند. اگر هزینه‌ها از درآمدها بیشتر باشد، نتیجه زیان خالص است؛ سود خالص در پایان دوره به سرمایه یا سود انباشته بسته می‌شود.',
      en: 'What remains of revenues after deducting all expenses, including cost of goods sold, operating expenses, finance costs and taxes. If expenses exceed revenues the result is a net loss; net income is closed to Capital or Retained Earnings at period end.',
    },
    formula: {
      fa: 'سود خالص = درآمدها − هزینه‌ها',
      en: 'Net income = Revenues − Expenses',
    },
    related: ['income-statement', 'retained-earnings', 'net-profit-margin'],
  },
  {
    id: 'comprehensive-income',
    category: 'statements',
    term: { fa: 'سود و زیان جامع', en: 'Comprehensive Income' },
    def: {
      fa: 'کل تغییرات حقوق مالکانه طی دوره، به‌جز تغییرات ناشی از معاملات با مالکان (آورده و توزیع). سود و زیان جامع از سود یا زیان خالص به‌علاوه سایر اقلام سود و زیان جامع، مانند مازاد تجدید ارزیابی دارایی‌ها و تفاوت تسعیر ارز عملیات خارجی، تشکیل می‌شود.',
      en: 'The total change in equity during a period other than from transactions with owners (contributions and distributions). It equals profit or loss plus other comprehensive income (OCI), such as revaluation surpluses and foreign-currency translation differences.',
    },
    formula: {
      fa: 'سود و زیان جامع = سود (زیان) خالص + سایر اقلام سود و زیان جامع',
      en: 'Comprehensive income = Net income + Other comprehensive income',
    },
    related: ['net-income', 'income-statement', 'ifrs'],
  },

  // ───────────────────────────── adjusting ─────────────────────────────
  {
    id: 'accrual-basis',
    category: 'adjusting',
    term: { fa: 'مبنای تعهدی', en: 'Accrual Basis' },
    def: {
      fa: 'روشی که اثر رویدادها را در دوره‌ای ثبت می‌کند که رخ داده‌اند، نه هنگام دریافت یا پرداخت وجه نقد: درآمد هنگام کسب و هزینه هنگام تحمل شناسایی می‌شود. IFRS تهیه همه صورت‌های مالی، به‌جز صورت جریان‌های نقدی، را بر مبنای تعهدی الزامی می‌داند.',
      en: 'Records the effects of transactions in the periods in which they occur rather than when cash changes hands: revenue when earned, expenses when incurred. IFRS requires the accrual basis for all financial statements except the cash flow statement.',
    },
    related: ['cash-basis', 'revenue-recognition', 'adjusting-entries'],
  },
  {
    id: 'cash-basis',
    category: 'adjusting',
    term: { fa: 'مبنای نقدی', en: 'Cash Basis' },
    def: {
      fa: 'روشی که درآمد را فقط هنگام دریافت وجه نقد و هزینه را فقط هنگام پرداخت آن ثبت می‌کند. این روش ساده است، اما ممکن است تصویر نادرستی از عملکرد دوره ارائه دهد و برای صورت‌های مالی با مقاصد عمومی، طبق استانداردهای حسابداری پذیرفتنی نیست.',
      en: "Records revenue only when cash is received and expenses only when cash is paid. It is simple but can misstate a period's performance, and it is not acceptable for general-purpose financial statements under IFRS or GAAP.",
    },
    related: ['accrual-basis', 'matching-principle', 'cash-flow-statement'],
  },
  {
    id: 'adjusting-entries',
    category: 'adjusting',
    term: { fa: 'ثبت‌های اصلاحی (تعدیلی)', en: 'Adjusting Entries' },
    def: {
      fa: 'ثبت‌هایی که در پایان دوره و پیش از تهیه صورت‌های مالی انجام می‌شوند تا درآمدها و هزینه‌ها در دوره درست شناسایی شوند و دارایی‌ها و بدهی‌ها با مبلغ صحیح گزارش شوند. چهار گروه اصلی آن‌ها پیش‌پرداخت هزینه، پیش‌دریافت درآمد، هزینه‌های تحقق‌یافته پرداخت‌نشده و درآمدهای تحقق‌یافته دریافت‌نشده است. هر ثبت اصلاحی یک حساب صورت سود و زیان و یک حساب ترازنامه را درگیر می‌کند و تقریباً هیچ‌گاه وجه نقد در آن نقشی ندارد.',
      en: 'Entries made at period end, before the statements are prepared, so that revenues and expenses land in the correct period and assets and liabilities are stated correctly. The four main types are prepaid expenses, unearned revenue, accrued expenses and accrued revenue. Each adjustment touches one income-statement account and one balance-sheet account, and Cash is almost never involved.',
    },
    related: ['accrual-basis', 'prepaid-expense', 'accrued-expense'],
  },
  {
    id: 'prepaid-expense',
    category: 'adjusting',
    term: { fa: 'پیش‌پرداخت هزینه', en: 'Prepaid Expense' },
    def: {
      fa: 'هزینه‌ای که وجه آن پیش از مصرف یا دریافت خدمت پرداخت شده است، مانند اجاره یا بیمه پیش‌پرداخت. در زمان پرداخت، دارایی ثبت می‌شود و در پایان دوره، بخش مصرف‌شده با ثبت اصلاحی به هزینه منتقل می‌شود.',
      en: 'A cost paid before it is used up, such as rent or insurance paid in advance. It is recorded as an asset when paid, and at period end the portion consumed is moved to expense through an adjusting entry.',
    },
    formula: {
      fa: 'ثبت اصلاحی: بدهکار هزینه، بستانکار پیش‌پرداخت هزینه',
      en: 'Adjusting entry: Dr Expense, Cr Prepaid expense',
    },
    related: ['adjusting-entries', 'unearned-revenue', 'current-asset'],
  },
  {
    id: 'unearned-revenue',
    category: 'adjusting',
    term: { fa: 'پیش‌دریافت درآمد', en: 'Unearned Revenue' },
    def: {
      fa: 'وجهی که پیش از تحویل کالا یا ارائه خدمت از مشتری دریافت شده است، مانند حق اشتراک سالانه‌ای که از ابتدا دریافت می‌شود. تا زمانی که تعهد انجام نشده، بدهی است و با ایفای تعهد، بخش کسب‌شده با ثبت اصلاحی به درآمد منتقل می‌شود.',
      en: 'Cash received from customers before goods or services are delivered, such as an annual subscription collected up front. It is a liability until the obligation is fulfilled; as it is earned, an adjusting entry moves that portion to revenue.',
    },
    formula: {
      fa: 'ثبت اصلاحی: بدهکار پیش‌دریافت درآمد، بستانکار درآمد',
      en: 'Adjusting entry: Dr Unearned revenue, Cr Revenue',
    },
    related: ['adjusting-entries', 'revenue-recognition', 'liability'],
  },
  {
    id: 'accrued-expense',
    category: 'adjusting',
    term: { fa: 'هزینه تحقق‌یافته پرداخت‌نشده (هزینه پرداختنی)', en: 'Accrued Expense' },
    def: {
      fa: 'هزینه‌ای که در دوره جاری تحمل شده اما هنوز پرداخت یا ثبت نشده است، مانند حقوق روزهای پایانی ماه یا بهره وام. با ثبت اصلاحی، هزینه بدهکار و یک بدهی، مثلاً حقوق پرداختنی، بستانکار می‌شود.',
      en: 'An expense incurred in the current period but not yet paid or recorded, such as wages for the last days of the month or interest on a loan. The adjusting entry debits the expense and credits a liability such as Wages Payable.',
    },
    formula: {
      fa: 'ثبت اصلاحی: بدهکار هزینه، بستانکار بدهی (پرداختنی)',
      en: 'Adjusting entry: Dr Expense, Cr Liability (payable)',
    },
    related: ['adjusting-entries', 'accrued-revenue', 'reversing-entries'],
  },
  {
    id: 'accrued-revenue',
    category: 'adjusting',
    term: { fa: 'درآمد تحقق‌یافته دریافت‌نشده (درآمد دریافتنی)', en: 'Accrued Revenue' },
    def: {
      fa: 'درآمدی که در دوره جاری کسب شده اما هنوز وجه آن دریافت نشده و صورتحساب آن نیز صادر نشده است؛ مانند سود سپرده بانکی یا خدمات انجام‌شده‌ای که هنوز برای آن‌ها صورتحساب صادر نشده است. با ثبت اصلاحی، یک حساب دریافتنی بدهکار و درآمد بستانکار می‌شود.',
      en: 'Revenue earned in the current period but not yet received or billed, such as interest on a bank deposit or services performed but not yet invoiced. The adjusting entry debits a receivable and credits revenue.',
    },
    formula: {
      fa: 'ثبت اصلاحی: بدهکار حساب دریافتنی، بستانکار درآمد',
      en: 'Adjusting entry: Dr Receivable, Cr Revenue',
    },
    related: ['adjusting-entries', 'accrued-expense', 'accounts-receivable'],
  },
  {
    id: 'depreciation',
    category: 'adjusting',
    term: { fa: 'استهلاک', en: 'Depreciation' },
    def: {
      fa: 'تخصیص نظام‌مند مبلغ استهلاک‌پذیر یک دارایی ثابت مشهود (بهای تمام‌شده منهای ارزش اسقاط) به دوره‌های عمر مفید آن. استهلاک فرایند تخصیص بهاست، نه ارزش‌گذاری، و زمین مستهلک نمی‌شود. روش‌های رایج آن خط مستقیم، نزولی و واحد تولید (بر اساس کارکرد) است.',
      en: "The systematic allocation of a tangible fixed asset's depreciable amount (cost minus salvage value) over its useful life. It is a cost-allocation process, not a valuation, and land is not depreciated. Common methods are straight-line, declining-balance and units-of-production.",
    },
    formula: {
      fa: 'ثبت: بدهکار هزینه استهلاک، بستانکار استهلاک انباشته',
      en: 'Entry: Dr Depreciation expense, Cr Accumulated depreciation',
    },
    related: ['accumulated-depreciation', 'straight-line-method', 'useful-life'],
  },
  {
    id: 'book-value',
    category: 'adjusting',
    term: { fa: 'ارزش دفتری (مبلغ دفتری)', en: 'Book Value (Carrying Amount)' },
    def: {
      fa: 'مبلغی که یک دارایی با آن در دفاتر و ترازنامه گزارش می‌شود؛ برای دارایی ثابت، بهای تمام‌شده منهای استهلاک انباشته. ارزش دفتری لزوماً با ارزش بازار برابر نیست.',
      en: 'The amount at which an asset is carried in the books and on the balance sheet; for a fixed asset, cost less accumulated depreciation. It need not equal market value.',
    },
    formula: {
      fa: 'ارزش دفتری = بهای تمام‌شده − استهلاک انباشته',
      en: 'Book value = Cost − Accumulated depreciation',
    },
    related: ['accumulated-depreciation', 'depreciation', 'salvage-value'],
  },
  {
    id: 'salvage-value',
    category: 'adjusting',
    term: { fa: 'ارزش اسقاط', en: 'Salvage (Residual) Value' },
    def: {
      fa: 'مبلغ برآوردی که انتظار می‌رود واحد تجاری در پایان عمر مفید دارایی، پس از کسر مخارج واگذاری، از فروش آن به دست آورد. ارزش اسقاط از بهای تمام‌شده کسر می‌شود تا مبلغ استهلاک‌پذیر به دست آید و دارایی هرگز به کمتر از این مبلغ مستهلک نمی‌شود.',
      en: 'The estimated amount the entity expects to obtain from disposing of an asset at the end of its useful life, after disposal costs. It is subtracted from cost to give the depreciable amount, and an asset is never depreciated below it.',
    },
    formula: {
      fa: 'مبلغ استهلاک‌پذیر = بهای تمام‌شده − ارزش اسقاط',
      en: 'Depreciable amount = Cost − Salvage value',
    },
    related: ['depreciation', 'useful-life', 'book-value'],
  },
  {
    id: 'useful-life',
    category: 'adjusting',
    term: { fa: 'عمر مفید', en: 'Useful Life' },
    def: {
      fa: 'دوره‌ای که انتظار می‌رود دارایی برای واحد تجاری قابل استفاده باشد، یا تعداد واحد تولید یا میزان کارکردی که از آن انتظار می‌رود. عمر مفید یک برآورد است، به میزان استفاده، فرسودگی و منسوخ شدن دارایی بستگی دارد و ممکن است از عمر فیزیکی آن کوتاه‌تر باشد.',
      en: 'The period over which an asset is expected to be available for use by the entity, or the number of units of output expected from it. It is an estimate shaped by usage, wear and tear and obsolescence, and may be shorter than the physical life.',
    },
    related: ['depreciation', 'salvage-value', 'straight-line-method'],
  },
  {
    id: 'straight-line-method',
    category: 'adjusting',
    term: { fa: 'روش خط مستقیم', en: 'Straight-Line Method' },
    def: {
      fa: 'روش استهلاکی که مبلغ استهلاک‌پذیر را به‌طور مساوی میان سال‌های عمر مفید تقسیم می‌کند؛ بنابراین هزینه استهلاک هر سال ثابت است و ارزش دفتری به‌صورت خطی کاهش می‌یابد. ساده‌ترین و رایج‌ترین روش استهلاک است.',
      en: 'Spreads the depreciable amount evenly over the useful life, so every year carries the same depreciation expense and book value falls in a straight line. It is the simplest and most widely used method.',
    },
    formula: {
      fa: 'استهلاک سالانه = (بهای تمام‌شده − ارزش اسقاط) ÷ عمر مفید',
      en: 'Annual depreciation = (Cost − Salvage value) ÷ Useful life',
    },
    related: ['depreciation', 'declining-balance-method', 'useful-life'],
  },
  {
    id: 'declining-balance-method',
    category: 'adjusting',
    term: { fa: 'روش نزولی (مانده نزولی)', en: 'Declining-Balance Method' },
    def: {
      fa: 'روش استهلاک شتابانی که هر سال نرخ ثابتی را در ارزش دفتری ابتدای سال ضرب می‌کند؛ در نتیجه استهلاک سال‌های نخست بیشتر است و به‌تدریج کاهش می‌یابد. در روش نزولی دوبرابر، نرخ دو برابر نرخ خط مستقیم است و ارزش اسقاط در محاسبه سالانه کسر نمی‌شود، اما ارزش دفتری نباید از آن کمتر شود.',
      en: "An accelerated method that applies a fixed rate to the asset's book value at the start of each year, so depreciation is highest early on and declines over time. Under double-declining balance the rate is twice the straight-line rate; salvage value is ignored in the yearly calculation, but book value may not fall below it.",
    },
    formula: {
      fa: 'استهلاک سال (نزولی دوبرابر) = ارزش دفتری ابتدای سال × (2 ÷ عمر مفید)',
      en: 'Depreciation (double-declining) = Beginning book value × (2 ÷ Useful life)',
    },
    related: ['depreciation', 'straight-line-method', 'book-value'],
  },
  {
    id: 'closing-entries',
    category: 'adjusting',
    term: { fa: 'ثبت‌های بستن حساب‌ها', en: 'Closing Entries' },
    def: {
      fa: 'ثبت‌هایی که در پایان دوره، مانده حساب‌های موقت را صفر و آن را به حقوق مالکانه منتقل می‌کنند. ترتیب معمول: بستن درآمدها و هزینه‌ها به خلاصه سود و زیان، بستن خلاصه سود و زیان به سرمایه (یا سود انباشته) و در پایان، بستن برداشت به سرمایه (یا سود سهام به سود انباشته).',
      en: 'Period-end entries that reset temporary accounts to zero and transfer their balances to equity. The usual order: close revenues and expenses to Income Summary, close Income Summary to Capital (or Retained Earnings), then close Drawings to Capital (or Dividends to Retained Earnings).',
    },
    related: ['temporary-accounts', 'income-summary', 'reversing-entries'],
  },
  {
    id: 'income-summary',
    category: 'adjusting',
    term: { fa: 'خلاصه سود و زیان', en: 'Income Summary' },
    def: {
      fa: 'حساب موقتی که فقط هنگام بستن حساب‌ها به کار می‌رود: درآمدها به طرف بستانکار و هزینه‌ها به طرف بدهکار آن بسته می‌شوند و مانده آن برابر سود یا زیان خالص دوره است. سپس این مانده به سرمایه یا سود انباشته بسته می‌شود.',
      en: "A temporary account used only during closing: revenues are closed to its credit side and expenses to its debit side, so its balance equals the period's net income or loss. That balance is then closed to Capital or Retained Earnings.",
    },
    related: ['closing-entries', 'net-income', 'temporary-accounts'],
  },
  {
    id: 'reversing-entries',
    category: 'adjusting',
    term: { fa: 'ثبت‌های معکوس', en: 'Reversing Entries' },
    def: {
      fa: 'ثبت‌های اختیاری در نخستین روز دوره جدید که دقیقاً عکس برخی ثبت‌های اصلاحی دوره قبل، به‌ویژه هزینه‌ها و درآمدهای تحقق‌یافته، هستند. هدف آن‌ها ساده‌سازی ثبت رویدادهای بعدی است تا هنگام پرداخت یا دریافت، نیازی به تفکیک مبلغ میان دو دوره نباشد.',
      en: 'Optional entries on the first day of a new period that exactly reverse certain adjustments of the previous period, typically accruals. They simplify later bookkeeping, since the subsequent payment or receipt can be recorded routinely without splitting it between periods.',
    },
    related: ['adjusting-entries', 'accrued-expense', 'closing-entries'],
  },

  // ───────────────────────────── inventory ─────────────────────────────
  {
    id: 'inventory',
    category: 'inventory',
    term: { fa: 'موجودی کالا', en: 'Inventory' },
    def: {
      fa: 'کالاهایی که برای فروش در روال عادی کسب‌وکار نگهداری می‌شوند و در شرکت‌های تولیدی، مواد اولیه و کالای در جریان ساخت را نیز شامل می‌شوند. موجودی کالا دارایی جاری است و به اقل بهای تمام‌شده و خالص ارزش فروش اندازه‌گیری می‌شود (IAS 2).',
      en: 'Goods held for sale in the ordinary course of business and, for manufacturers, raw materials and work in progress. Inventory is a current asset measured at the lower of cost and net realizable value (IAS 2).',
    },
    related: ['cost-of-goods-sold', 'net-realizable-value', 'inventory-turnover'],
  },
  {
    id: 'cost-of-goods-sold',
    category: 'inventory',
    term: { fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of Goods Sold (COGS)' },
    def: {
      fa: 'بهای تمام‌شده کالاهایی که طی دوره فروخته شده‌اند و معمولاً بزرگ‌ترین هزینه شرکت‌های بازرگانی است. در سیستم ادواری با فرمول زیر محاسبه می‌شود و در سیستم دائمی هم‌زمان با هر فروش ثبت می‌شود. جمع موجودی ابتدای دوره و بهای کالای خریداری‌شده را «کالای آماده برای فروش» می‌نامند.',
      en: "The cost of the goods sold during the period, usually a merchandiser's largest expense. Under a periodic system it is derived with the formula below; under a perpetual system it is recorded with every sale. Beginning inventory plus the cost of goods purchased is called goods available for sale.",
    },
    formula: {
      fa: 'بهای تمام‌شده کالای فروش‌رفته = موجودی کالای ابتدای دوره + بهای کالای خریداری‌شده − موجودی کالای پایان دوره',
      en: 'COGS = Beginning inventory + Cost of goods purchased − Ending inventory',
    },
    related: ['inventory', 'gross-profit', 'periodic-inventory-system'],
  },
  {
    id: 'gross-profit',
    category: 'inventory',
    term: { fa: 'سود ناخالص', en: 'Gross Profit' },
    def: {
      fa: 'تفاوت فروش خالص و بهای تمام‌شده کالای فروش‌رفته؛ یعنی مبلغی که پس از پوشش بهای کالا برای پوشش هزینه‌های عملیاتی و ایجاد سود باقی می‌ماند. فروش خالص برابر است با فروش منهای برگشت از فروش و تخفیفات و تخفیفات نقدی فروش.',
      en: 'Net sales minus cost of goods sold: what is left, after paying for the merchandise, to cover operating expenses and produce a profit. Net sales equals sales less sales returns and allowances and sales discounts.',
    },
    formula: {
      fa: 'سود ناخالص = فروش خالص − بهای تمام‌شده کالای فروش‌رفته',
      en: 'Gross profit = Net sales − COGS',
    },
    related: ['cost-of-goods-sold', 'gross-profit-margin', 'income-statement'],
  },
  {
    id: 'perpetual-inventory-system',
    category: 'inventory',
    term: { fa: 'سیستم دائمی موجودی کالا', en: 'Perpetual Inventory System' },
    def: {
      fa: 'سیستمی که حساب موجودی کالا و بهای تمام‌شده کالای فروش‌رفته را با هر خرید و فروش به‌روز می‌کند، بنابراین مانده موجودی در هر لحظه مشخص است. در این سیستم خریدها مستقیماً به حساب موجودی کالا بدهکار می‌شوند و برای هر فروش دو ثبت انجام می‌گیرد: یکی برای فروش و دیگری برای بهای تمام‌شده آن.',
      en: 'Updates the Inventory and COGS accounts with every purchase and sale, so the inventory balance is known at all times. Purchases are debited directly to Inventory, and each sale needs two entries: one for the sale and one for its cost.',
    },
    related: ['periodic-inventory-system', 'inventory', 'cost-of-goods-sold'],
  },
  {
    id: 'periodic-inventory-system',
    category: 'inventory',
    term: { fa: 'سیستم ادواری موجودی کالا', en: 'Periodic Inventory System' },
    def: {
      fa: 'سیستمی که در طول دوره، خریدها را در حساب خرید کالا ثبت می‌کند و موجودی پایان دوره و بهای تمام‌شده کالای فروش‌رفته را فقط در پایان دوره و با شمارش فیزیکی تعیین می‌کند. این سیستم ساده‌تر و کم‌هزینه‌تر است، اما کنترل لحظه‌ای بر موجودی فراهم نمی‌کند.',
      en: 'Records purchases in a Purchases account during the period and determines ending inventory and COGS only at period end, through a physical count. It is simpler and cheaper but offers no real-time control over stock.',
    },
    related: ['perpetual-inventory-system', 'cost-of-goods-sold', 'inventory'],
  },
  {
    id: 'fifo',
    category: 'inventory',
    term: { fa: 'اولین صادره از اولین وارده (FIFO)', en: 'First-In, First-Out (FIFO)' },
    def: {
      fa: 'روش ارزیابی موجودی که فرض می‌کند کالاهایی که زودتر خریداری شده‌اند، زودتر فروخته می‌شوند؛ بنابراین موجودی پایان دوره از آخرین خریدها تشکیل می‌شود. در دوره افزایش قیمت‌ها، FIFO بهای تمام‌شده کمتر و سود بیشتری نشان می‌دهد و موجودی پایان دوره به قیمت‌های جاری نزدیک‌تر است.',
      en: 'A cost-flow assumption that the earliest goods purchased are the first ones sold, so ending inventory consists of the most recent purchases. When prices are rising, FIFO reports lower COGS, higher profit and an ending inventory closer to current prices.',
    },
    related: ['weighted-average', 'lifo', 'cost-of-goods-sold'],
  },
  {
    id: 'weighted-average',
    category: 'inventory',
    term: { fa: 'میانگین موزون', en: 'Weighted Average Cost' },
    def: {
      fa: 'روش ارزیابی موجودی که بهای هر واحد را از تقسیم بهای کل کالای آماده برای فروش بر تعداد واحدهای آن به دست می‌آورد و همین بهای میانگین را برای کالای فروش‌رفته و موجودی پایان دوره به کار می‌برد. در سیستم دائمی، میانگین پس از هر خرید دوباره محاسبه می‌شود (میانگین متحرک).',
      en: 'Assigns every unit the same average cost, the total cost of goods available for sale divided by the units available, for both COGS and ending inventory. Under a perpetual system the average is recalculated after each purchase (moving average).',
    },
    formula: {
      fa: 'بهای میانگین هر واحد = بهای کالای آماده برای فروش ÷ تعداد واحدهای آماده برای فروش',
      en: 'Average unit cost = Cost of goods available for sale ÷ Units available for sale',
    },
    related: ['fifo', 'lifo', 'inventory'],
  },
  {
    id: 'lifo',
    category: 'inventory',
    term: { fa: 'اولین صادره از آخرین وارده (LIFO)', en: 'Last-In, First-Out (LIFO)' },
    def: {
      fa: 'روشی که فرض می‌کند آخرین کالاهای خریداری‌شده، زودتر فروخته می‌شوند؛ بنابراین موجودی پایان دوره به قیمت‌های قدیمی‌تر ارزیابی می‌شود و در دوره افزایش قیمت‌ها، بهای تمام‌شده بیشتر و سود کمتری گزارش می‌شود. استفاده از LIFO **طبق IFRS (استاندارد IAS 2) مجاز نیست** و عمدتاً در آمریکا و طبق US GAAP کاربرد دارد.',
      en: 'Assumes the most recently purchased goods are sold first, leaving ending inventory at older costs; when prices are rising it reports higher COGS and lower profit. **LIFO is not permitted under IFRS (IAS 2)** and is used mainly in the United States under US GAAP.',
    },
    related: ['fifo', 'weighted-average', 'ifrs'],
  },
  {
    id: 'net-realizable-value',
    category: 'inventory',
    term: { fa: 'خالص ارزش فروش', en: 'Net Realizable Value (NRV)' },
    def: {
      fa: 'بهای فروش برآوردی کالا در روال عادی کسب‌وکار، منهای مخارج برآوردی تکمیل و مخارج لازم برای فروش. طبق IAS 2، موجودی کالا به **اقل بهای تمام‌شده و خالص ارزش فروش** گزارش می‌شود و اگر خالص ارزش فروش کمتر باشد، تفاوت به‌عنوان کاهش ارزش موجودی به هزینه منظور می‌شود.',
      en: 'The estimated selling price in the ordinary course of business less the estimated costs of completion and the costs needed to make the sale. Under IAS 2 inventory is carried at the **lower of cost and NRV**, and any shortfall is recognized as a write-down expense.',
    },
    formula: {
      fa: 'خالص ارزش فروش = بهای فروش برآوردی − مخارج تکمیل − مخارج فروش',
      en: 'NRV = Estimated selling price − Costs to complete − Costs to sell',
    },
    related: ['inventory', 'ifrs', 'cost-of-goods-sold'],
  },
  {
    id: 'purchase-returns-and-allowances',
    category: 'inventory',
    term: { fa: 'برگشت از خرید و تخفیفات', en: 'Purchase Returns and Allowances' },
    def: {
      fa: 'کالای خریداری‌شده‌ای که به فروشنده برگشت داده می‌شود یا تخفیفی که فروشنده به دلیل نقص یا مغایرت کالا اعطا می‌کند. در سیستم ادواری، حسابی کاهنده خرید با مانده بستانکار است و در سیستم دائمی مستقیماً به بستانکار حساب موجودی کالا منظور می‌شود.',
      en: 'Goods sent back to the supplier, or a price reduction granted for damaged or unsatisfactory goods. Under a periodic system it is a contra-purchases account with a credit balance; under a perpetual system the reduction is credited directly to Inventory.',
    },
    related: ['purchase-discounts', 'freight-in', 'contra-account'],
  },
  {
    id: 'purchase-discounts',
    category: 'inventory',
    term: { fa: 'تخفیفات نقدی خرید', en: 'Purchase Discounts' },
    def: {
      fa: 'تخفیفی که فروشنده برای پرداخت زودهنگام بدهی ناشی از خرید نسیه اعطا می‌کند؛ مثلاً شرط 2/10, n/30 یعنی 2 درصد تخفیف در صورت پرداخت ظرف 10 روز و در غیر این صورت، پرداخت کامل مبلغ ظرف 30 روز. تخفیف نقدی بهای کالای خریداری‌شده را کاهش می‌دهد و با تخفیف تجاری که اصلاً جداگانه ثبت نمی‌شود، تفاوت دارد.',
      en: 'A reduction the supplier offers for paying a credit purchase early; for example, terms of 2/10, n/30 mean a 2% discount if paid within 10 days, otherwise the full amount is due within 30 days. It lowers the cost of goods purchased and differs from a trade discount, which is never recorded separately.',
    },
    formula: {
      fa: 'خرید خالص = خرید − برگشت از خرید و تخفیفات − تخفیفات نقدی خرید',
      en: 'Net purchases = Purchases − Purchase returns and allowances − Purchase discounts',
    },
    related: ['purchase-returns-and-allowances', 'accounts-payable', 'freight-in'],
  },
  {
    id: 'freight-in',
    category: 'inventory',
    term: { fa: 'هزینه حمل کالای خریداری‌شده (حمل به داخل)', en: 'Freight-In (Transportation-In)' },
    def: {
      fa: 'هزینه حمل کالای خریداری‌شده تا انبار خریدار که جزء بهای تمام‌شده موجودی کالا محسوب می‌شود، نه هزینه دوره. در مقابل، هزینه حمل کالای فروش‌رفته به مشتری (حمل به خارج) هزینه توزیع و فروش است. اینکه کدام طرف هزینه حمل را بپردازد، به شرایط تحویل (FOB مبدأ یا FOB مقصد) بستگی دارد.',
      en: "The cost of shipping purchased goods to the buyer's premises; it is part of the cost of inventory, not a period expense. Freight-out on goods delivered to customers is, by contrast, a selling expense. Who bears the freight depends on the shipping terms (FOB shipping point or FOB destination).",
    },
    formula: {
      fa: 'بهای کالای خریداری‌شده = خرید خالص + هزینه حمل کالای خریداری‌شده',
      en: 'Cost of goods purchased = Net purchases + Freight-in',
    },
    related: ['inventory', 'cost-of-goods-sold', 'purchase-discounts'],
  },

  // ───────────────────────────── analysis ─────────────────────────────
  {
    id: 'working-capital',
    category: 'analysis',
    term: { fa: 'سرمایه در گردش (خالص سرمایه در گردش)', en: 'Working Capital' },
    def: {
      fa: 'تفاوت دارایی‌های جاری و بدهی‌های جاری که توان واحد تجاری را در پرداخت تعهدات کوتاه‌مدت و تأمین مالی عملیات روزمره نشان می‌دهد. سرمایه در گردش منفی می‌تواند نشانه مشکل نقدینگی باشد.',
      en: 'Current assets minus current liabilities: the cushion available to meet short-term obligations and fund day-to-day operations. Negative working capital can signal liquidity problems.',
    },
    formula: {
      fa: 'سرمایه در گردش = دارایی‌های جاری − بدهی‌های جاری',
      en: 'Working capital = Current assets − Current liabilities',
    },
    related: ['current-ratio', 'current-asset', 'current-liability'],
  },
  {
    id: 'current-ratio',
    category: 'analysis',
    term: { fa: 'نسبت جاری', en: 'Current Ratio' },
    def: {
      fa: 'نسبت نقدینگی که نشان می‌دهد در برابر هر واحد بدهی جاری، چند واحد دارایی جاری وجود دارد. نسبت بیشتر از 1 معمولاً اطمینان‌بخش است، اما نسبت بسیار بالا ممکن است نشانه منابع بلااستفاده، مثلاً انباشت موجودی کالا، باشد.',
      en: 'A liquidity ratio showing how many dollars of current assets stand behind each dollar of current liabilities. A ratio above 1 is generally reassuring, but a very high one may point to idle resources such as excess inventory.',
    },
    formula: {
      fa: 'نسبت جاری = دارایی‌های جاری ÷ بدهی‌های جاری',
      en: 'Current ratio = Current assets ÷ Current liabilities',
    },
    related: ['quick-ratio', 'working-capital', 'current-asset'],
  },
  {
    id: 'quick-ratio',
    category: 'analysis',
    term: { fa: 'نسبت آنی (نسبت سریع)', en: 'Quick (Acid-Test) Ratio' },
    def: {
      fa: 'نسبت نقدینگی سخت‌گیرانه‌تری از نسبت جاری که موجودی کالا و پیش‌پرداخت‌ها را کنار می‌گذارد، زیرا تبدیل آن‌ها به وجه نقد زمان‌بر یا ناممکن است. این نسبت نشان می‌دهد واحد تجاری بدون اتکا به فروش موجودی کالا تا چه حد می‌تواند بدهی‌های جاری خود را بپردازد.',
      en: 'A stricter liquidity test than the current ratio that leaves out inventory and prepaid expenses, which cannot be turned into cash quickly. It shows how well the entity could pay its current liabilities without relying on selling inventory.',
    },
    formula: {
      fa: 'نسبت آنی = (دارایی‌های جاری − موجودی کالا − پیش‌پرداخت‌ها) ÷ بدهی‌های جاری',
      en: 'Quick ratio = (Current assets − Inventory − Prepaid expenses) ÷ Current liabilities',
    },
    related: ['current-ratio', 'working-capital', 'inventory'],
  },
  {
    id: 'gross-profit-margin',
    category: 'analysis',
    term: { fa: 'حاشیه سود ناخالص', en: 'Gross Profit Margin' },
    def: {
      fa: 'نسبت سودآوری که نشان می‌دهد چند درصد از فروش خالص پس از کسر بهای تمام‌شده کالای فروش‌رفته باقی می‌ماند. این نسبت توان قیمت‌گذاری و کنترل بهای خرید یا تولید را می‌سنجد.',
      en: 'A profitability ratio showing what percentage of net sales remains after cost of goods sold. It reflects pricing power and control over purchasing or production costs.',
    },
    formula: {
      fa: 'حاشیه سود ناخالص = سود ناخالص ÷ فروش خالص × 100',
      en: 'Gross profit margin = Gross profit ÷ Net sales × 100',
    },
    related: ['gross-profit', 'net-profit-margin', 'cost-of-goods-sold'],
  },
  {
    id: 'net-profit-margin',
    category: 'analysis',
    term: { fa: 'حاشیه سود خالص', en: 'Net Profit Margin' },
    def: {
      fa: 'درصدی از فروش خالص که پس از کسر همه هزینه‌ها به‌صورت سود خالص باقی می‌ماند. این نسبت کارایی کلی کنترل هزینه‌ها را خلاصه می‌کند و بهتر است با سال‌های قبل و شرکت‌های هم‌صنعت مقایسه شود.',
      en: 'The percentage of net sales left as net income once every expense has been deducted. It sums up overall cost control and is most meaningful when compared with prior years and industry peers.',
    },
    formula: {
      fa: 'حاشیه سود خالص = سود خالص ÷ فروش خالص × 100',
      en: 'Net profit margin = Net income ÷ Net sales × 100',
    },
    related: ['net-income', 'gross-profit-margin', 'return-on-assets'],
  },
  {
    id: 'return-on-assets',
    category: 'analysis',
    term: { fa: 'بازده دارایی‌ها (ROA)', en: 'Return on Assets (ROA)' },
    def: {
      fa: 'نسبتی که نشان می‌دهد مدیریت با هر واحد دارایی چه مقدار سود خالص ایجاد کرده است و کارایی کلی استفاده از منابع را می‌سنجد. در مخرج معمولاً میانگین جمع دارایی‌های ابتدا و پایان دوره به کار می‌رود.',
      en: 'Measures how much net income management generates from each unit of assets, an overall gauge of how efficiently resources are used. Average total assets (beginning plus ending, divided by 2) is normally used as the denominator.',
    },
    formula: {
      fa: 'بازده دارایی‌ها = سود خالص ÷ میانگین جمع دارایی‌ها × 100',
      en: 'ROA = Net income ÷ Average total assets × 100',
    },
    related: ['return-on-equity', 'asset-turnover', 'net-profit-margin'],
  },
  {
    id: 'return-on-equity',
    category: 'analysis',
    term: { fa: 'بازده حقوق مالکانه (بازده حقوق صاحبان سهام)', en: 'Return on Equity (ROE)' },
    def: {
      fa: 'نسبتی که بازده سرمایه‌گذاری مالکان را نشان می‌دهد: در برابر هر واحد حقوق مالکانه چه مقدار سود خالص به دست آمده است. استفاده از بدهی (اهرم مالی) می‌تواند بازده حقوق مالکانه را از بازده دارایی‌ها بالاتر ببرد، اما ریسک را نیز افزایش می‌دهد.',
      en: "Shows the return earned on the owners' investment, that is, net income per unit of equity. Borrowing (financial leverage) can lift ROE above ROA, but it also increases risk.",
    },
    formula: {
      fa: 'بازده حقوق مالکانه = سود خالص ÷ میانگین حقوق مالکانه × 100',
      en: 'ROE = Net income ÷ Average equity × 100',
    },
    related: ['return-on-assets', 'debt-to-equity-ratio', 'net-income'],
  },
  {
    id: 'debt-ratio',
    category: 'analysis',
    term: { fa: 'نسبت بدهی', en: 'Debt Ratio' },
    def: {
      fa: 'نسبت اهرمی که نشان می‌دهد چه بخشی از دارایی‌ها از محل بدهی تأمین مالی شده است. هرچه این نسبت بالاتر باشد، ریسک مالی واحد تجاری و فشار بازپرداخت بیشتر است.',
      en: "A leverage ratio showing what share of total assets is financed by creditors. The higher it is, the greater the entity's financial risk and repayment burden.",
    },
    formula: {
      fa: 'نسبت بدهی = جمع بدهی‌ها ÷ جمع دارایی‌ها',
      en: 'Debt ratio = Total liabilities ÷ Total assets',
    },
    related: ['debt-to-equity-ratio', 'interest-coverage-ratio', 'liability'],
  },
  {
    id: 'debt-to-equity-ratio',
    category: 'analysis',
    term: { fa: 'نسبت بدهی به حقوق مالکانه', en: 'Debt-to-Equity Ratio' },
    def: {
      fa: 'نسبت اهرمی که جمع بدهی‌ها را با حقوق مالکانه مقایسه می‌کند و نشان می‌دهد سهم اعتباردهندگان در تأمین مالی در برابر سهم مالکان چقدر است. نسبت بیشتر از 1 یعنی بدهی‌ها از حقوق مالکانه بیشترند.',
      en: 'A leverage ratio comparing total liabilities with equity, showing how much creditors have provided relative to owners. A ratio above 1 means the business is financed more by debt than by equity.',
    },
    formula: {
      fa: 'نسبت بدهی به حقوق مالکانه = جمع بدهی‌ها ÷ جمع حقوق مالکانه',
      en: 'Debt-to-equity = Total liabilities ÷ Total equity',
    },
    related: ['debt-ratio', 'return-on-equity', 'equity'],
  },
  {
    id: 'interest-coverage-ratio',
    category: 'analysis',
    term: { fa: 'نسبت پوشش هزینه بهره', en: 'Interest Coverage Ratio (Times Interest Earned)' },
    def: {
      fa: 'نسبتی که نشان می‌دهد سود قبل از بهره و مالیات چند برابر هزینه بهره است و توان واحد تجاری را در پرداخت هزینه‌های مالی می‌سنجد. نسبت نزدیک به 1 یعنی سود عملیاتی به‌سختی کفاف بهره را می‌دهد و هشداری برای وام‌دهندگان است.',
      en: 'Shows how many times EBIT covers interest expense, measuring the ability to service debt. A ratio close to 1 means operating profit barely covers interest, a warning sign for lenders.',
    },
    formula: {
      fa: 'نسبت پوشش هزینه بهره = سود قبل از بهره و مالیات ÷ هزینه بهره',
      en: 'Interest coverage = EBIT ÷ Interest expense',
    },
    related: ['ebit', 'debt-ratio', 'debt-to-equity-ratio'],
  },
  {
    id: 'inventory-turnover',
    category: 'analysis',
    term: { fa: 'گردش موجودی کالا', en: 'Inventory Turnover' },
    def: {
      fa: 'نسبت کارایی که نشان می‌دهد موجودی کالا طی دوره چند بار فروخته و جایگزین شده است. گردش بالاتر یعنی کالا سریع‌تر به فروش می‌رسد؛ تقسیم 365 بر این نسبت، دوره گردش موجودی کالا (میانگین روزهای نگهداری کالا) را به دست می‌دهد.',
      en: "An efficiency ratio showing how many times inventory was sold and replaced during the period. Higher turnover means goods sell faster; dividing 365 by the ratio gives days' sales in inventory.",
    },
    formula: {
      fa: 'گردش موجودی کالا = بهای تمام‌شده کالای فروش‌رفته ÷ میانگین موجودی کالا',
      en: 'Inventory turnover = COGS ÷ Average inventory',
    },
    related: ['inventory', 'cost-of-goods-sold', 'receivables-turnover'],
  },
  {
    id: 'receivables-turnover',
    category: 'analysis',
    term: { fa: 'گردش حساب‌های دریافتنی', en: 'Receivables Turnover' },
    def: {
      fa: 'نسبت کارایی که نشان می‌دهد حساب‌های دریافتنی طی دوره چند بار وصول شده‌اند. تقسیم 365 بر این نسبت، دوره وصول مطالبات (میانگین روزهای وصول) را به دست می‌دهد و دوره کوتاه‌تر نشانه سیاست اعتباری و وصول کارآمدتر است.',
      en: 'An efficiency ratio showing how many times receivables were collected during the period. Dividing 365 by the ratio gives the average collection period in days; a shorter period indicates more effective credit and collection policies.',
    },
    formula: {
      fa: 'گردش حساب‌های دریافتنی = فروش نسیه خالص ÷ میانگین حساب‌های دریافتنی',
      en: 'Receivables turnover = Net credit sales ÷ Average accounts receivable',
    },
    related: ['accounts-receivable', 'inventory-turnover', 'asset-turnover'],
  },
  {
    id: 'asset-turnover',
    category: 'analysis',
    term: { fa: 'گردش دارایی‌ها', en: 'Asset Turnover' },
    def: {
      fa: 'نسبت کارایی که نشان می‌دهد در برابر هر واحد دارایی، چند واحد فروش ایجاد شده است. حاصل‌ضرب این نسبت در حاشیه سود خالص، برابر بازده دارایی‌هاست.',
      en: 'An efficiency ratio showing how many units of sales each unit of assets generates. Multiplied by net profit margin, it gives return on assets.',
    },
    formula: {
      fa: 'گردش دارایی‌ها = فروش خالص ÷ میانگین جمع دارایی‌ها',
      en: 'Asset turnover = Net sales ÷ Average total assets',
    },
    related: ['return-on-assets', 'net-profit-margin', 'receivables-turnover'],
  },
  {
    id: 'horizontal-analysis',
    category: 'analysis',
    term: { fa: 'تجزیه و تحلیل افقی (روند)', en: 'Horizontal (Trend) Analysis' },
    def: {
      fa: 'مقایسه اقلام صورت‌های مالی در چند دوره متوالی برای تعیین مبلغ و درصد تغییرات و شناسایی روندها. برای مثال، اگر فروش از 800 به 1000 برسد، رشد آن 25 درصد است.',
      en: 'Comparing financial-statement items across successive periods to measure the amount and percentage of change and to spot trends. For example, sales rising from 800 to 1000 is a 25% increase.',
    },
    formula: {
      fa: 'درصد تغییر = (مبلغ سال جاری − مبلغ سال پایه) ÷ مبلغ سال پایه × 100',
      en: '% change = (Current year − Base year) ÷ Base year × 100',
    },
    related: ['vertical-analysis', 'income-statement', 'balance-sheet'],
  },
  {
    id: 'vertical-analysis',
    category: 'analysis',
    term: { fa: 'تجزیه و تحلیل عمودی (درصدی)', en: 'Vertical (Common-Size) Analysis' },
    def: {
      fa: 'بیان هر قلم صورت مالی به‌صورت درصدی از یک مبنای واحد در همان دوره: در صورت سود و زیان، فروش خالص و در ترازنامه، جمع دارایی‌ها. صورت‌های مالی هم‌مقیاس حاصل، مقایسه شرکت‌هایی با اندازه‌های متفاوت را ممکن می‌کنند.',
      en: 'Expressing each line of a statement as a percentage of a base figure for the same period: net sales on the income statement, total assets on the balance sheet. The resulting common-size statements make companies of different sizes comparable.',
    },
    formula: {
      fa: 'درصد عمودی = مبلغ قلم ÷ مبلغ مبنا × 100',
      en: 'Common-size % = Item ÷ Base amount × 100',
    },
    related: ['horizontal-analysis', 'balance-sheet', 'gross-profit-margin'],
  },
  {
    id: 'break-even-point',
    category: 'analysis',
    term: { fa: 'نقطه سربه‌سر', en: 'Break-Even Point' },
    def: {
      fa: 'سطحی از فروش که در آن درآمد کل دقیقاً با جمع هزینه‌های ثابت و متغیر برابر و سود یا زیان صفر است. حاشیه فروش (حاشیه مشارکت) هر واحد، یعنی قیمت فروش منهای هزینه متغیر هر واحد، ابتدا صرف پوشش هزینه‌های ثابت می‌شود و پس از نقطه سربه‌سر به سود تبدیل می‌شود.',
      en: "The level of sales at which total revenue exactly equals total fixed and variable costs, so profit is zero. Each unit's contribution margin (selling price minus variable cost per unit) first covers fixed costs; beyond break-even it turns into profit.",
    },
    formula: {
      fa: 'نقطه سربه‌سر (تعداد) = هزینه‌های ثابت ÷ (قیمت فروش هر واحد − هزینه متغیر هر واحد)',
      en: 'Break-even units = Fixed costs ÷ (Price per unit − Variable cost per unit)',
    },
    related: ['ebit', 'net-income'],
  },
  {
    id: 'ebit',
    category: 'analysis',
    term: { fa: 'سود قبل از بهره و مالیات (EBIT)', en: 'Earnings Before Interest and Taxes (EBIT)' },
    def: {
      fa: 'سود واحد تجاری پیش از کسر هزینه بهره (هزینه مالی) و مالیات بر درآمد که معمولاً به سود عملیاتی بسیار نزدیک است. EBIT عملکرد عملیات اصلی را جدا از نحوه تأمین مالی و وضعیت مالیاتی نشان می‌دهد و صورت کسر نسبت پوشش هزینه بهره است.',
      en: 'Profit before deducting interest (finance costs) and income tax, usually very close to operating profit. It shows how the core operations perform regardless of financing structure and tax position, and it is the numerator of the interest coverage ratio.',
    },
    formula: {
      fa: 'سود قبل از بهره و مالیات = سود خالص + هزینه بهره + هزینه مالیات بر درآمد',
      en: 'EBIT = Net income + Interest expense + Income tax expense',
    },
    related: ['interest-coverage-ratio', 'net-income', 'income-statement'],
  },
]
