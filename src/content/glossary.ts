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
    related: ['share-capital', 'general-meeting', 'retained-earnings'],
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
    related: ['current-asset', 'working-capital', 'current-portion-of-long-term-debt'],
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
    related: ['allowance-for-doubtful-accounts', 'notes-receivable', 'receivables-turnover'],
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
    related: ['accumulated-depreciation', 'allowance-for-doubtful-accounts', 'purchase-returns-and-allowances'],
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
      fa: 'فهرست منظم و کدگذاری‌شده همه حساب‌هایی که واحد تجاری به کار می‌برد، معمولاً به ترتیب دارایی‌ها، بدهی‌ها، حقوق مالکانه، درآمدها و هزینه‌ها. رقم اول کد معمولاً نوع حساب را نشان می‌دهد (1 دارایی، 2 بدهی، 3 حقوق مالکانه، 4 درآمد، 5 هزینه) و در ایران حساب‌ها در سطوح کل، معین و تفصیلی کدگذاری می‌شوند.',
      en: 'An organized, numbered list of every account an entity uses, typically in the order assets, liabilities, equity, revenue and expenses. The first digit of the code usually shows the account type (1 assets, 2 liabilities, 3 equity, 4 revenue, 5 expenses), and in Iran accounts are coded at general, subsidiary and detail levels.',
    },
    related: ['account', 'account-coding', 'ledger'],
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
      fa: 'مدرک کاغذی یا الکترونیکی که وقوع یک رویداد مالی را نشان می‌دهد و مبنای ثبت آن است؛ مانند فاکتور خرید و فروش، رسید بانکی، چک، فیش حقوق و قرارداد. مدرک مثبته پیوست سند حسابداری می‌شود و حسابرسان و سازمان امور مالیاتی برای رسیدگی به آن استناد می‌کنند.',
      en: 'Paper or electronic evidence that a transaction took place and the basis for recording it, such as sales and purchase invoices, bank receipts, cheques, payslips and contracts. It is attached to the accounting voucher, and auditors and the tax authority rely on it as evidence.',
    },
    related: ['accounting-voucher', 'journal', 'accounting-cycle'],
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
    related: ['accounting-voucher', 'posting', 'legal-books'],
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
      fa: 'مجموعه همه حساب‌های واحد تجاری در سطح حساب کل که اطلاعات دفتر روزنامه بر اساس حساب در آن طبقه‌بندی می‌شود و گردش و مانده هر حساب را نشان می‌دهد. جزئیات هر حساب کل، مانند بدهی هر مشتری، در دفتر معین نگهداری می‌شود.',
      en: "The collection of all of an entity's accounts at the general-account level, where journal data is sorted by account to show each account's movements and balance. The detail behind each general account, such as what each customer owes, is kept in the subsidiary ledger.",
    },
    related: ['posting', 'journal', 'subsidiary-ledger'],
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
  {
    id: 'accounting-voucher',
    category: 'recording',
    term: { fa: 'سند حسابداری', en: 'Accounting Voucher' },
    def: {
      fa: 'برگه‌ای کاغذی یا الکترونیکی که ثبت حسابداری یک یا چند رویداد مالی روی آن انجام می‌شود و در رویه ایران، مبنای ثبت در دفاتر روزنامه، کل و معین است. هر سند شماره و تاریخ، شرح، کد و نام حساب‌ها (کل، معین و تفصیلی)، مبالغ بدهکار و بستانکار، مدارک مثبته پیوست و امضای تهیه‌کننده و تأییدکننده دارد و جمع بدهکار و بستانکار آن باید برابر باشد.',
      en: 'A paper or electronic form on which the accounting entry for one or more transactions is recorded; in Iranian practice it is the basis for the entries in the journal, the general ledger and the subsidiary ledgers. Each voucher carries a number and date, a description, account codes and names (general, subsidiary and detail), debit and credit amounts, the supporting source documents and the signatures of the preparer and approver, and its debits must equal its credits.',
    },
    related: ['source-document', 'account-coding', 'journal'],
  },
  {
    id: 'opening-voucher',
    category: 'recording',
    term: { fa: 'سند افتتاحیه', en: 'Opening Voucher (Opening Entry)' },
    def: {
      fa: 'نخستین سند حسابداری هر سال مالی که مانده حساب‌های دائمی (دارایی‌ها، بدهی‌ها و حقوق مالکانه) را از پایان سال قبل به دفاتر سال جدید می‌آورد: حساب‌های با مانده بدهکار، بدهکار و حساب‌های با مانده بستانکار، بستانکار می‌شوند. ارقام این سند باید دقیقاً با سند اختتامیه و ترازنامه پایان سال قبل یکی باشد.',
      en: "The first voucher of each financial year, which brings the balances of the permanent accounts (assets, liabilities and equity) from the end of the previous year into the new year's books: accounts with debit balances are debited and those with credit balances are credited. Its figures must match the previous year's closing voucher and closing balance sheet exactly.",
    },
    related: ['closing-voucher', 'permanent-accounts', 'accounting-voucher'],
  },
  {
    id: 'closing-voucher',
    category: 'recording',
    term: { fa: 'سند اختتامیه', en: 'Closing Voucher (Year-End Closing Entry)' },
    def: {
      fa: 'در رویه رایج ایران، آخرین سند سال مالی که پس از بستن حساب‌های موقت صادر می‌شود و مانده همه حساب‌های دائمی را صفر می‌کند: حساب‌های با مانده بدهکار، بستانکار و حساب‌های با مانده بستانکار، بدهکار می‌شوند. سال بعد، سند افتتاحیه همین مانده‌ها را دوباره باز می‌کند؛ در رویه رایج بین‌المللی چنین سندی صادر نمی‌شود و مانده‌ها مستقیماً به سال بعد منتقل می‌شوند.',
      en: "In common Iranian practice, the last voucher of the financial year, issued after the temporary accounts have been closed; it brings every permanent account to zero by crediting debit balances and debiting credit balances. The next year's opening voucher reopens the same balances; in common international practice no such entry is made and balances simply carry forward.",
    },
    related: ['opening-voucher', 'closing-entries', 'permanent-accounts'],
  },
  {
    id: 'general-account',
    category: 'recording',
    term: { fa: 'حساب کل', en: 'General Account (Control Account)' },
    def: {
      fa: 'سطح اصلی کدینگ حساب‌ها که در دفتر کل نگهداری و در صورت‌های مالی گزارش می‌شود؛ مانند موجودی نقد، حساب‌های دریافتنی یا هزینه‌های اداری. هر حساب کل به چند حساب معین تقسیم می‌شود و مانده آن برابر جمع مانده همان معین‌هاست.',
      en: 'The main level of the account-coding scheme, kept in the general ledger and reported in the financial statements, such as Cash, Accounts Receivable or Administrative Expenses. Each general account is divided into subsidiary accounts, and its balance equals the total of their balances.',
    },
    formula: {
      fa: 'مانده حساب کل = جمع مانده حساب‌های معین آن',
      en: 'General account balance = Sum of its subsidiary account balances',
    },
    related: ['subsidiary-account', 'account-coding', 'ledger'],
  },
  {
    id: 'subsidiary-account',
    category: 'recording',
    term: { fa: 'حساب معین', en: 'Subsidiary Account' },
    def: {
      fa: 'سطح دوم کدینگ که یک حساب کل را به اجزای معنادار تقسیم می‌کند؛ برای نمونه، حساب کل موجودی نقد به معین‌های صندوق، بانک‌ها و تنخواه‌گردان. گردش و مانده حساب‌های معین در دفتر معین نگهداری می‌شود و هر معین می‌تواند حساب‌های تفصیلی داشته باشد.',
      en: 'The second level of the coding scheme, which splits a general account into meaningful parts; for example, Cash into Cash on Hand, Bank Accounts and Petty Cash. Subsidiary account movements and balances are kept in the subsidiary ledger, and each one can have detail accounts beneath it.',
    },
    related: ['general-account', 'detail-account', 'subsidiary-ledger'],
  },
  {
    id: 'detail-account',
    category: 'recording',
    term: { fa: 'حساب تفصیلی', en: 'Detail Account' },
    def: {
      fa: 'پایین‌ترین سطح کدینگ که هر شخص، پروژه، حساب بانکی یا مرکز هزینه را جداگانه پیگیری می‌کند؛ مثلاً هر مشتری زیر حساب‌های دریافتنی تجاری یا هر حساب بانکی زیر معین بانک‌ها. در بسیاری از نرم‌افزارهای حسابداری ایرانی، یک حساب تفصیلی (مثلاً یک شخص) می‌تواند زیر چند معین به کار رود که به آن «تفصیلی شناور» می‌گویند.',
      en: 'The lowest level of the coding scheme, used to track each person, project, bank account or cost center separately, such as each customer under Trade Receivables or each bank account under Bank Accounts. Many Iranian accounting packages let one detail account, such as a person, be used under several subsidiary accounts, known as a "floating" detail account.',
    },
    related: ['subsidiary-account', 'account-coding', 'accounts-receivable'],
  },
  {
    id: 'account-coding',
    category: 'recording',
    term: { fa: 'کدگذاری حساب‌ها (کدینگ سه‌سطحی)', en: 'Account Coding (Three-Level Coding)' },
    def: {
      fa: 'اختصاص کد عددی منظم به هر حساب، به‌طوری که از روی کد بتوان نوع و سطح حساب را شناخت. ساختار رایج در ایران سه سطح کل، معین و تفصیلی است (گاهی با سطح «گروه» در بالای آن) و هر سطح چند رقم به کد سطح بالاتر اضافه می‌کند؛ کدینگ خوب، گزارش‌گیری در نرم‌افزار و پیدا کردن اسناد را ساده می‌کند.',
      en: "Giving every account a structured numeric code so that the code itself shows the account's type and level. The usual Iranian structure has three levels: general, subsidiary and detail (sometimes with a group level above them), each adding digits to the code above it; good coding makes software reporting and finding vouchers much easier.",
    },
    formula: {
      fa: 'نمونه: گروه 11 دارایی‌های جاری، کل 1101 موجودی نقد، معین 110102 بانک‌ها، تفصیلی 11010201 حساب جاری شماره 1',
      en: 'Example: group 11 Current assets, general 1101 Cash, subsidiary 110102 Bank accounts, detail 11010201 Current account no. 1',
    },
    related: ['chart-of-accounts', 'general-account', 'detail-account'],
  },
  {
    id: 'subsidiary-ledger',
    category: 'recording',
    term: { fa: 'دفتر معین', en: 'Subsidiary Ledger' },
    def: {
      fa: 'دفتری که گردش و مانده حساب‌های معین (و در نرم‌افزارها، حساب‌های تفصیلی) را جزءبه‌جزء نشان می‌دهد؛ مانند بدهی هر مشتری یا گردش هر حساب بانکی. جمع مانده‌های دفتر معین هر حساب باید با مانده همان حساب در دفتر کل برابر باشد و این مقایسه یکی از کنترل‌های مهم است.',
      en: "A ledger showing the detailed movements and balances of subsidiary accounts (and, in software, detail accounts), such as what each customer owes or the activity on each bank account. Its total for an account must agree with that account's balance in the general ledger, and checking this is an important control.",
    },
    related: ['ledger', 'subsidiary-account', 'general-account'],
  },
  {
    id: 'legal-books',
    category: 'recording',
    term: { fa: 'دفاتر قانونی (روزنامه و کل)', en: 'Legal (Statutory) Books' },
    def: {
      fa: 'دفاتری که قانون نگهداری آن‌ها را از شرکت‌ها و برخی بازرگانان و مؤدیان مالیاتی می‌خواهد؛ در عمل امروز ایران، دفتر روزنامه و دفتر کل. این دفاتر پیش از استفاده، و معمولاً پیش از شروع سال مالی، نزد اداره ثبت شرکت‌ها ثبت و پلمب می‌شوند (امروزه با درخواست الکترونیکی) و سازمان امور مالیاتی و حسابرسان به آن‌ها استناد می‌کنند. اینکه دقیقاً چه کسانی ملزم‌اند و مهلت‌ها چیست را از مقررات روز بررسی کنید.',
      en: 'Books the law requires companies, certain traders and taxpayers to keep; in current Iranian practice, the journal and the general ledger. They are registered and sealed at the Companies Registration Office before use, normally before the financial year starts (the request is now made electronically), and the tax authority and auditors rely on them. Check the current regulations for exactly who must keep them and the deadlines.',
    },
    related: ['journal', 'ledger', 'accounting-voucher'],
  },

  // journal-entry management in an ERP
  {
    id: 'parked-entry',
    category: 'recording',
    term: { fa: 'سند پیش‌نویس (Parked entry)', en: 'Parked Entry' },
    def: {
      fa: 'سند حسابداری که در ERP ذخیره شده اما هنوز در دفتر کل قطعی (ثبت نهایی) نشده است؛ روی مانده حساب‌ها اثری ندارد و هنوز می‌توان آن را ویرایش، تکمیل یا حذف کرد. معمولاً تهیه‌کننده سند را پیش‌نویس می‌کند و تأییدکننده پس از بررسی آن را قطعی می‌کند؛ پیش‌نویس‌های باز باید هنگام بستن دوره بررسی شوند.',
      en: 'An accounting voucher saved in the ERP but not yet posted to the general ledger; it does not affect account balances and can still be edited, completed or deleted. Typically the preparer parks the entry and an approver posts it after review; parked entries still open at period-end must be reviewed during the close.',
    },
    related: ['maker-checker', 'accounting-voucher', 'posting-period'],
  },
  {
    id: 'recurring-entry',
    category: 'recording',
    term: { fa: 'سند تکراری (Recurring entry)', en: 'Recurring Entry' },
    def: {
      fa: 'الگوی سندی که یک بار در ERP تعریف می‌شود و در فواصل منظم با همان حساب‌ها و مبلغ ثابت خودکار ثبت می‌شود، مانند اجاره ماهانه دفتر یا سهم ماهانه هزینه بیمه از پیش‌پرداخت. کار تکراری و خطای ورود را کم می‌کند، اما الگو باید با هر تغییر قرارداد بازبینی و در پایان مدت غیرفعال شود.',
      en: 'A voucher template defined once in the ERP and posted automatically at regular intervals with the same accounts and a fixed amount, such as monthly office rent or the monthly release of prepaid insurance. It saves repetitive work and keying errors, but the template must be reviewed whenever the contract changes and deactivated when its term ends.',
    },
    related: ['parked-entry', 'reversing-entries', 'prepaid-expense'],
  },
  {
    id: 'maker-checker',
    category: 'recording',
    term: { fa: 'اصل تهیه‌کننده و تأییدکننده (Maker-checker)', en: 'Maker-Checker (Four-Eyes Principle)' },
    def: {
      fa: 'کنترلی که در آن یک نفر سند یا تراکنش را تهیه می‌کند و نفر دوم، مستقل از او، پیش از قطعی شدن آن را بررسی و تأیید می‌کند؛ ERP باید جلوی تأیید سند توسط تهیه‌کننده خودش را بگیرد. این اصل یکی از ساده‌ترین و مؤثرترین شکل‌های تفکیک وظایف است، به‌ویژه برای اسناد دستی، پرداخت‌ها و تغییر داده پایه تأمین‌کننده.',
      en: 'A control in which one person prepares a voucher or transaction and a second, independent person reviews and approves it before it is posted; the ERP should prevent the preparer from approving their own entry. It is one of the simplest and most effective forms of segregation of duties, especially for manual journals, payments and changes to vendor master data.',
    },
    related: ['segregation-of-duties', 'parked-entry', 'internal-control'],
  },
  {
    id: 'validation-rule',
    category: 'recording',
    term: { fa: 'قاعده اعتبارسنجی (Validation rule)', en: 'Validation Rule' },
    def: {
      fa: 'شرطی که ERP هنگام ثبت سند بررسی می‌کند و اگر برقرار نباشد، خطا یا هشدار می‌دهد؛ مثلاً «ثبت روی حساب‌های مخارج سرمایه‌ای بدون عنصر WBS یا AFE مجاز نیست» یا «مرکز هزینه انبار نباید با حساب هزینه حفاری بیاید». قواعد اعتبارسنجی خطا را در لحظه ورود می‌گیرند، نه در حسابرسی پایان سال.',
      en: 'A condition the ERP checks when a voucher is entered and, if it fails, raises an error or warning; for example, "postings to capital expenditure accounts require a WBS element or AFE" or "the warehouse cost centre must not be combined with the drilling expense account". Validation rules catch errors at the moment of entry, not in the year-end audit.',
    },
    related: ['substitution-rule', 'internal-control', 'recoverable-flag'],
  },
  {
    id: 'substitution-rule',
    category: 'recording',
    term: { fa: 'قاعده جایگزینی (Substitution rule)', en: 'Substitution Rule' },
    def: {
      fa: 'قاعده‌ای که ERP با آن، هنگام ثبت سند، مقدار یک فیلد را بر پایه شرط‌های معین خودکار پر یا جایگزین می‌کند؛ مثلاً اگر شیء هزینه یک AFE حفاری باشد، نشانه «قابل بازیافت» و کد شریک خودکار پر می‌شوند. جایگزینی کار دستی و ناهماهنگی را کم می‌کند، اما چون بی‌صدا داده را تغییر می‌دهد، باید مستند، آزموده و تحت کنترل تغییرات باشد.',
      en: 'A rule by which the ERP automatically fills in or replaces the value of a field during posting, based on set conditions; for example, if the cost object is a drilling AFE, the "recoverable" flag and the partner code are filled in automatically. Substitution reduces manual work and inconsistency, but because it changes data silently it must be documented, tested and placed under change control.',
    },
    related: ['validation-rule', 'recoverable-flag'],
  },
  {
    id: 'posting-period',
    category: 'recording',
    term: { fa: 'دوره ثبت (Posting period)', en: 'Posting Period' },
    def: {
      fa: 'دوره‌ای از سال مالی (معمولاً یک ماه) که ERP اسناد با تاریخ آن را می‌پذیرد. پس از بستن ماه، دوره برای ثبت قفل می‌شود تا ارقام گزارش‌شده تغییر نکنند و معمولاً یک یا چند دوره ویژه پس از ماه آخر برای اصلاحات پایان سال در نظر گرفته می‌شود. باز کردن دوباره دوره بسته باید فقط با تأیید مسئول مالی و ثبت دلیل انجام شود.',
      en: "A period of the fiscal year (usually a month) for which the ERP accepts vouchers dated within it. After the month-end close the period is locked so reported figures cannot change, and one or more special periods after the last month are usually kept for year-end adjustments. Reopening a closed period should require the finance manager's approval and a recorded reason.",
    },
    related: ['time-period', 'closing-entries', 'audit-trail'],
  },
  {
    id: 'audit-trail',
    category: 'recording',
    term: { fa: 'ردپای حسابرسی (Audit trail)', en: 'Audit Trail' },
    def: {
      fa: 'سابقه کامل و غیرقابل حذف هر سند و هر تغییر در سیستم: چه کسی، چه زمانی، چه چیزی را ثبت، تغییر، تأیید یا برگشت داد و مقدار قبلی چه بود. در ERP سند قطعی حذف نمی‌شود و اصلاح آن با سند برگشتی انجام می‌شود تا ردپا بماند؛ حسابرسان، شرکای عملیات مشترک و طرف دولتی در حسابرسی بازیافت هزینه به همین ردپا تکیه می‌کنند.',
      en: 'A complete, undeletable record of every voucher and every change in the system: who entered, changed, approved or reversed what, when, and what the previous value was. In an ERP a posted voucher is never deleted but corrected with a reversal entry so the trail remains; auditors, joint-venture partners and the government side rely on this trail in cost recovery audits.',
    },
    related: ['source-document', 'maker-checker', 'posting-period'],
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
      fa: 'صورتی که تغییرات هر جزء حقوق مالکانه را طی دوره نشان می‌دهد: مانده ابتدای دوره، آورده جدید یا افزایش سرمایه، سود یا زیان، برداشت یا سود سهام، انتقال به اندوخته‌ها و مانده پایان دوره. این صورت پل میان صورت سود و زیان و ترازنامه است و در شرکت سهامی برای سرمایه، اندوخته قانونی، سایر اندوخته‌ها و سود انباشته ستون‌های جداگانه دارد.',
      en: 'Shows how each component of equity changed during the period: opening balance, new contributions or capital increases, profit or loss, drawings or dividends, transfers to reserves, and closing balance. It is the bridge between the income statement and the balance sheet, and for a company it has separate columns for share capital, legal reserve, other reserves and retained earnings.',
    },
    formula: {
      fa: 'مؤسسه انفرادی: سرمایه پایان دوره = سرمایه ابتدای دوره + سرمایه‌گذاری جدید + سود خالص − برداشت',
      en: 'Sole proprietorship: Ending capital = Beginning capital + New investment + Net income − Drawings',
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
    related: ['materiality', 'contingent-liability', 'ifrs'],
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
    related: ['adjusting-entries', 'accrued-liabilities', 'reversing-entries'],
  },
  {
    id: 'accrued-revenue',
    category: 'adjusting',
    term: { fa: 'درآمد تحقق‌یافته دریافت‌نشده (درآمد دریافتنی)', en: 'Accrued Revenue' },
    def: {
      fa: 'درآمدی که در دوره جاری کسب شده اما تا پایان دوره نه وجه آن دریافت شده و نه صورتحساب آن صادر شده است؛ مانند سود سپرده بانکی یا خدماتی که انجام شده اما هنوز صورتحساب ندارند. با ثبت اصلاحی، یک حساب دریافتنی بدهکار و درآمد بستانکار می‌شود.',
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

  // ───────────────────────────── cash ─────────────────────────────
  {
    id: 'cash',
    category: 'cash',
    term: { fa: 'موجودی نقد', en: 'Cash' },
    def: {
      fa: 'وجه نقد در صندوق، موجودی حساب‌های بانکی که هر زمان قابل برداشت است و تنخواه‌گردان؛ نقدشونده‌ترین دارایی واحد تجاری. چک‌های مدت‌داری که از مشتریان دریافت شده، تا زمان وصول جزو موجودی نقد نیستند و در اسناد دریافتنی ثبت می‌شوند.',
      en: 'Money on hand, bank balances that can be withdrawn at any time, and petty cash; the most liquid asset a business has. Post-dated cheques received from customers are not cash until they are collected: they are recorded in notes receivable.',
    },
    related: ['cash-equivalents', 'petty-cash', 'bank-reconciliation'],
  },
  {
    id: 'cash-equivalents',
    category: 'cash',
    term: { fa: 'معادل‌های وجه نقد', en: 'Cash Equivalents' },
    def: {
      fa: 'سرمایه‌گذاری‌های کوتاه‌مدت و بسیار نقدشونده که به‌سرعت و به مبلغ معلوم به وجه نقد تبدیل می‌شوند و خطر تغییر ارزش آن‌ها ناچیز است؛ معمولاً با سررسید سه ماه یا کمتر از تاریخ تحصیل، مانند سپرده‌های کوتاه‌مدت بانکی (IAS 7). در ترازنامه و صورت جریان‌های نقدی همراه با موجودی نقد گزارش می‌شوند.',
      en: 'Short-term, highly liquid investments that can be turned into a known amount of cash quickly and carry an insignificant risk of changes in value, typically maturing within three months of acquisition, such as short-term bank deposits (IAS 7). They are reported together with cash on the balance sheet and in the cash flow statement.',
    },
    related: ['cash', 'cash-flow-statement', 'current-asset'],
  },
  {
    id: 'petty-cash',
    category: 'cash',
    term: { fa: 'تنخواه‌گردان', en: 'Petty Cash (Imprest System)' },
    def: {
      fa: 'مبلغ ثابت و کوچکی از وجه نقد که برای پرداخت‌های جزئی روزمره، مانند کرایه پیک یا خرید لوازم مصرفی، به یک نفر (تنخواه‌دار) سپرده می‌شود. در روش تنخواه ثابت، هزینه‌ها هنگام تکمیل (شارژ) تنخواه و بر اساس رسیدها ثبت می‌شوند و خود حساب تنخواه‌گردان فقط وقتی تغییر می‌کند که مبلغ ثابت آن عوض شود.',
      en: 'A small fixed fund of cash entrusted to one person (the custodian) for minor day-to-day payments such as courier fares or office supplies. Under the imprest system, expenses are recorded when the fund is topped up against the receipts, and the Petty Cash account itself changes only when the fixed amount of the fund is changed.',
    },
    formula: {
      fa: 'مبلغ تکمیل تنخواه = مبلغ ثابت تنخواه − وجه نقد باقی‌مانده نزد تنخواه‌دار',
      en: 'Top-up amount = Fixed fund amount − Cash left in the fund',
    },
    related: ['cash', 'internal-control', 'source-document'],
  },
  {
    id: 'bank-reconciliation',
    category: 'cash',
    term: { fa: 'صورت مغایرت بانکی', en: 'Bank Reconciliation' },
    def: {
      fa: 'گزارشی که مانده حساب بانک در دفاتر را با مانده صورتحساب بانک در همان تاریخ مقایسه و علت هر تفاوت را مشخص می‌کند. اقلامی که بانک هنوز ثبت نکرده (وجوه در راه و چک‌های معوق) مانده بانک را اصلاح می‌کنند؛ اقلامی که فقط بانک ثبت کرده (کارمزد، سود سپرده، چک برگشتی) و خطاهای دفاتر، با سند اصلاحی در دفاتر ثبت می‌شوند.',
      en: "A schedule that compares the bank balance in the entity's books with the balance on the bank statement at the same date and explains every difference. Items the bank has not yet recorded (deposits in transit and outstanding cheques) adjust the bank's figure; items only the bank has recorded (charges, interest, returned cheques) and errors in the books are entered in the books with an adjusting voucher.",
    },
    formula: {
      fa: 'مانده اصلاح‌شده بانک = مانده صورتحساب + وجوه در راه − چک‌های معوق؛ مانده اصلاح‌شده دفاتر = مانده دفاتر + سود سپرده و وصولی‌های بانک − کارمزد و چک‌های برگشتی؛ این دو باید برابر باشند',
      en: 'Adjusted bank balance = Statement balance + Deposits in transit − Outstanding cheques; Adjusted book balance = Book balance + Interest and collections by the bank − Charges and returned cheques; the two must be equal',
    },
    related: ['deposit-in-transit', 'outstanding-cheque', 'bank-charges'],
  },
  {
    id: 'deposit-in-transit',
    category: 'cash',
    term: { fa: 'وجوه در راه (واریزی‌های در راه)', en: 'Deposit in Transit' },
    def: {
      fa: 'وجهی که واحد تجاری به حساب بانکی خود واریز و در دفاتر ثبت کرده، اما تا تاریخ صورتحساب هنوز در حساب بانک ثبت نشده است؛ مثلاً واریزی عصر آخرین روز ماه. در صورت مغایرت بانکی به مانده صورتحساب بانک اضافه می‌شود و سند اصلاحی در دفاتر لازم ندارد.',
      en: 'Money the entity has deposited and recorded in its books but that the bank has not yet credited by the statement date, for example a deposit made late on the last day of the month. In the bank reconciliation it is added to the bank statement balance and needs no entry in the books.',
    },
    related: ['bank-reconciliation', 'outstanding-cheque'],
  },
  {
    id: 'outstanding-cheque',
    category: 'cash',
    term: { fa: 'چک‌های معوق (صادرشده و پرداخت‌نشده)', en: 'Outstanding Cheque' },
    def: {
      fa: 'چکی که واحد تجاری صادر کرده و در دفاتر از حساب بانک کسر کرده، اما گیرنده هنوز آن را به بانک ارائه نکرده و از حساب برداشت نشده است. در صورت مغایرت بانکی از مانده صورتحساب بانک کسر می‌شود و سند اصلاحی در دفاتر لازم ندارد.',
      en: 'A cheque the entity has issued and already deducted from its bank account in the books, but that the payee has not yet presented, so the bank has not paid it. In the bank reconciliation it is deducted from the bank statement balance and needs no entry in the books.',
    },
    related: ['bank-reconciliation', 'deposit-in-transit', 'notes-payable'],
  },
  {
    id: 'bank-charges',
    category: 'cash',
    term: { fa: 'کارمزد بانکی', en: 'Bank Charges' },
    def: {
      fa: 'مبالغی که بانک بابت خدماتی مانند انتقال وجه، صدور دسته‌چک یا پیامک مستقیماً از حساب برداشت می‌کند. واحد تجاری معمولاً اولین بار آن را در صورتحساب بانک می‌بیند؛ پس در صورت مغایرت بانکی از مانده دفاتر کسر و با سند اصلاحی ثبت می‌شود.',
      en: 'Amounts the bank takes directly from the account for services such as transfers, chequebooks or SMS alerts. The entity usually first sees them on the bank statement, so in the bank reconciliation they are deducted from the book balance and recorded with an adjusting voucher.',
    },
    formula: {
      fa: 'ثبت: بدهکار هزینه کارمزد بانکی، بستانکار موجودی نقد (بانک)',
      en: 'Entry: Dr Bank charges expense, Cr Cash (bank)',
    },
    related: ['bank-reconciliation', 'expense'],
  },
  {
    id: 'dishonoured-cheque',
    category: 'cash',
    term: { fa: 'چک برگشتی', en: 'Returned (Dishonoured) Cheque' },
    def: {
      fa: 'چکی که بانک آن را به دلیل کافی نبودن موجودی حساب صادرکننده یا اشکال دیگر پرداخت نکرده و برگشت زده است. واحد تجاری مبلغ آن را دوباره به‌عنوان طلب از صادرکننده ثبت می‌کند، معمولاً در حسابی مانند «چک‌های برگشتی» زیر دریافتنی‌ها، و پیگیری وصول آن را آغاز می‌کند.',
      en: "A cheque the bank has refused to pay, usually because the drawer's account lacks funds, and has returned. The entity records the amount again as a claim on the drawer, often in a returned cheques account under receivables, and starts collection follow-up.",
    },
    formula: {
      fa: 'ثبت: بدهکار حساب‌های دریافتنی (چک‌های برگشتی)، بستانکار موجودی نقد (بانک) یا اسناد دریافتنی در جریان وصول',
      en: 'Entry: Dr Receivables (returned cheques), Cr Cash (bank) or Cheques in collection',
    },
    related: ['bank-reconciliation', 'notes-receivable', 'cheques-in-collection'],
  },
  {
    id: 'internal-control',
    category: 'cash',
    term: { fa: 'کنترل داخلی', en: 'Internal Control' },
    def: {
      fa: 'مجموعه سیاست‌ها و روش‌هایی که مدیریت برقرار می‌کند تا از دارایی‌ها محافظت شود، اطلاعات حسابداری قابل اتکا باشد و قوانین و دستورالعمل‌ها رعایت شود. نمونه‌ها: تفکیک وظایف، سندهای شماره‌دار و تأییدشده، واریز روزانه وجوه به بانک، تهیه ماهانه صورت مغایرت بانکی و شمارش سرزده صندوق و انبار.',
      en: 'The policies and procedures management puts in place to protect assets, keep accounting information reliable and make sure laws and internal rules are followed. Examples include segregation of duties, numbered and approved vouchers, banking receipts daily, monthly bank reconciliations and surprise counts of cash and stock.',
    },
    related: ['segregation-of-duties', 'bank-reconciliation', 'petty-cash'],
  },
  {
    id: 'segregation-of-duties',
    category: 'cash',
    term: { fa: 'تفکیک وظایف', en: 'Segregation of Duties' },
    def: {
      fa: 'اصلی از کنترل داخلی که می‌گوید هیچ فردی نباید به‌تنهایی همه مراحل یک رویداد را در دست داشته باشد: صدور مجوز، نگهداری دارایی و ثبت آن باید با افراد مختلف باشد. برای مثال، صندوقداری که وجه نقد را دریافت می‌کند نباید سند آن را ثبت یا صورت مغایرت بانکی را تهیه کند.',
      en: 'An internal-control principle that no single person should handle every stage of a transaction: authorizing it, holding the asset and recording it should be in different hands. For example, the cashier who receives cash should not record it or prepare the bank reconciliation.',
    },
    related: ['internal-control', 'bank-reconciliation'],
  },
  {
    id: 'notes-receivable',
    category: 'cash',
    term: { fa: 'اسناد دریافتنی', en: 'Notes (Cheques) Receivable' },
    def: {
      fa: 'چک‌ها و سفته‌هایی که واحد تجاری از مشتریان یا دیگران دریافت کرده و هنوز سررسید یا وصول نشده‌اند. در ایران بخش بزرگی از فروش نسیه با چک مدت‌دار (چکی با تاریخ آینده) تسویه می‌شود که تا سررسید در این حساب می‌ماند و با وصول یا برگشت خوردن، از آن خارج می‌شود.',
      en: 'Cheques and promissory notes received from customers or others that have not yet fallen due or been collected. In Iran much credit selling is settled with post-dated cheques, which stay in this account until their due date and leave it when they are collected or returned.',
    },
    formula: {
      fa: 'دریافت چک مدت‌دار از مشتری: بدهکار اسناد دریافتنی، بستانکار حساب‌های دریافتنی',
      en: 'Post-dated cheque received from a customer: Dr Notes receivable, Cr Accounts receivable',
    },
    related: ['accounts-receivable', 'cheques-in-collection', 'dishonoured-cheque'],
  },
  {
    id: 'cheques-in-collection',
    category: 'cash',
    term: { fa: 'اسناد دریافتنی در جریان وصول', en: 'Cheques in Collection' },
    def: {
      fa: 'چک‌های دریافتنی که برای وصول به بانک سپرده شده‌اند اما بانک هنوز وجه آن‌ها را به حساب واریز نکرده است. با سپردن چک به بانک، مبلغ از اسناد دریافتنی به این حساب منتقل می‌شود؛ پس از وصول به حساب بانک می‌رود و اگر چک برگشت بخورد، به چک‌های برگشتی منتقل می‌شود.',
      en: 'Received cheques that have been handed to the bank for collection but not yet credited to the account. When a cheque is lodged with the bank it moves from Notes Receivable to this account; once collected it moves to the bank account, and if it bounces it moves to returned cheques.',
    },
    formula: {
      fa: 'سپردن به بانک: بدهکار اسناد در جریان وصول، بستانکار اسناد دریافتنی؛ وصول: بدهکار موجودی نقد (بانک)، بستانکار اسناد در جریان وصول',
      en: 'Lodged with the bank: Dr Cheques in collection, Cr Notes receivable; Collected: Dr Cash (bank), Cr Cheques in collection',
    },
    related: ['notes-receivable', 'dishonoured-cheque', 'bank-reconciliation'],
  },
  {
    id: 'allowance-for-doubtful-accounts',
    category: 'cash',
    term: { fa: 'ذخیره مطالبات مشکوک‌الوصول', en: 'Allowance for Doubtful Accounts' },
    def: {
      fa: 'حساب کاهنده حساب‌های دریافتنی با مانده بستانکار که بخش برآوردی از مطالبات را که احتمالاً وصول نمی‌شود نشان می‌دهد. ایجاد یا افزایش آن، هزینه مطالبات مشکوک‌الوصول را در همان دوره فروش شناسایی می‌کند (روش ذخیره) و دریافتنی‌ها را به خالص مبلغ قابل وصول نشان می‌دهد؛ IFRS 9 آن را ذخیره زیان اعتباری مورد انتظار می‌نامد.',
      en: 'A contra-receivable account with a credit balance showing the estimated part of receivables that will probably not be collected. Creating or topping it up records bad-debt expense in the period of the sale (the allowance method) and leaves receivables at their net collectible amount; IFRS 9 calls it a loss allowance for expected credit losses.',
    },
    formula: {
      fa: 'ثبت: بدهکار هزینه مطالبات مشکوک‌الوصول، بستانکار ذخیره مطالبات مشکوک‌الوصول؛ خالص دریافتنی‌ها = حساب‌های دریافتنی − ذخیره',
      en: 'Entry: Dr Bad-debt expense, Cr Allowance for doubtful accounts; Net receivables = Accounts receivable − Allowance',
    },
    related: ['accounts-receivable', 'aging-of-receivables', 'bad-debt-write-off'],
  },
  {
    id: 'aging-of-receivables',
    category: 'cash',
    term: { fa: 'تحلیل سنی مطالبات', en: 'Aging of Receivables' },
    def: {
      fa: 'جدولی که مانده هر مشتری را بر اساس مدتی که از سررسید آن گذشته طبقه‌بندی می‌کند؛ مثلاً سررسیدنشده، 1 تا 30 روز، 31 تا 90 روز و بیش از 90 روز. با اعمال درصد برآوردی وصول‌نشدن به هر طبقه، مانده لازم ذخیره مطالبات مشکوک‌الوصول به دست می‌آید و هرچه مطالبه قدیمی‌تر باشد، درصد بالاتری می‌گیرد.',
      en: "A schedule that sorts each customer's balance by how long it is past due, for example not yet due, 1 to 30 days, 31 to 90 days and over 90 days. Applying an estimated loss percentage to each band gives the required balance of the allowance for doubtful accounts, with older balances getting higher percentages.",
    },
    formula: {
      fa: 'ذخیره لازم = جمع (مانده هر طبقه سنی × درصد برآوردی وصول‌نشدن)؛ مبلغ ثبت این دوره = ذخیره لازم − مانده بستانکار فعلی ذخیره',
      en: 'Required allowance = Sum of (balance in each age band × estimated loss %); Amount to record = Required allowance − Current credit balance of the allowance',
    },
    related: ['allowance-for-doubtful-accounts', 'accounts-receivable', 'receivables-turnover'],
  },
  {
    id: 'bad-debt-write-off',
    category: 'cash',
    term: { fa: 'حذف مطالبات سوخت‌شده', en: 'Bad-Debt Write-Off' },
    def: {
      fa: 'خارج کردن مطالبه‌ای از دفاتر که دیگر وصول نمی‌شود، مثلاً به دلیل ورشکستگی مشتری. در روش ذخیره، مبلغ حذف‌شده از ذخیره مطالبات مشکوک‌الوصول کم می‌شود و چون هزینه قبلاً شناسایی شده، سود دوره و خالص دریافتنی‌ها تغییر نمی‌کنند.',
      en: 'Removing from the books a receivable that will no longer be collected, for example because the customer has gone bankrupt. Under the allowance method the write-off is charged against the allowance, and because the expense was recognized earlier, neither profit nor net receivables change.',
    },
    formula: {
      fa: 'ثبت: بدهکار ذخیره مطالبات مشکوک‌الوصول، بستانکار حساب‌های دریافتنی',
      en: 'Entry: Dr Allowance for doubtful accounts, Cr Accounts receivable',
    },
    related: ['allowance-for-doubtful-accounts', 'bad-debt-recovery', 'direct-write-off-method'],
  },
  {
    id: 'bad-debt-recovery',
    category: 'cash',
    term: { fa: 'وصول مطالبات سوخت‌شده', en: 'Recovery of a Written-Off Receivable' },
    def: {
      fa: 'دریافت وجه از مشتری‌ای که مطالبه‌اش قبلاً حذف شده بود. ابتدا ثبت حذف به اندازه مبلغ وصول‌شده برگردانده می‌شود تا سابقه پرداخت در حساب مشتری دیده شود، سپس دریافت وجه مانند یک وصول عادی ثبت می‌شود.',
      en: "Collecting cash from a customer whose balance was previously written off. First the write-off is reversed for the amount recovered, so the payment shows in the customer's record, then the receipt is recorded like any normal collection.",
    },
    formula: {
      fa: 'برگرداندن: بدهکار حساب‌های دریافتنی، بستانکار ذخیره مطالبات مشکوک‌الوصول؛ وصول: بدهکار موجودی نقد، بستانکار حساب‌های دریافتنی',
      en: 'Reinstate: Dr Accounts receivable, Cr Allowance for doubtful accounts; Collect: Dr Cash, Cr Accounts receivable',
    },
    related: ['bad-debt-write-off', 'allowance-for-doubtful-accounts'],
  },
  {
    id: 'direct-write-off-method',
    category: 'cash',
    term: { fa: 'روش حذف مستقیم', en: 'Direct Write-Off Method' },
    def: {
      fa: 'روشی که هزینه مطالبات سوخت‌شده را فقط وقتی ثبت می‌کند که مطالبه مشخصی غیرقابل وصول شود و از قبل ذخیره‌ای نمی‌سازد. ساده است، اما هزینه را اغلب در دوره‌ای بعد از دوره فروش ثبت می‌کند و دریافتنی‌ها را بیش از مبلغ قابل وصول نشان می‌دهد؛ به همین دلیل وقتی مطالبات سوخت‌شده بااهمیت باشد، طبق استانداردها پذیرفتنی نیست.',
      en: 'Records bad-debt expense only when a specific receivable turns out to be uncollectible, with no allowance set up in advance. It is simple, but it often puts the expense in a later period than the sale and overstates receivables, so it is not acceptable under the standards when bad debts are material.',
    },
    formula: {
      fa: 'ثبت: بدهکار هزینه مطالبات سوخت‌شده، بستانکار حساب‌های دریافتنی',
      en: 'Entry: Dr Bad-debt expense, Cr Accounts receivable',
    },
    related: ['allowance-for-doubtful-accounts', 'bad-debt-write-off', 'matching-principle'],
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

  // ───────────────────────────── fixedAssets ─────────────────────────────
  {
    id: 'book-value',
    category: 'fixedAssets',
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
    category: 'fixedAssets',
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
    category: 'fixedAssets',
    term: { fa: 'عمر مفید', en: 'Useful Life' },
    def: {
      fa: 'دوره‌ای که انتظار می‌رود دارایی برای واحد تجاری قابل استفاده باشد، یا تعداد واحد تولید یا میزان کارکردی که از آن انتظار می‌رود. عمر مفید یک برآورد است، به میزان استفاده، فرسودگی و منسوخ شدن دارایی بستگی دارد و ممکن است از عمر فیزیکی آن کوتاه‌تر باشد.',
      en: 'The period over which an asset is expected to be available for use by the entity, or the number of units of output expected from it. It is an estimate shaped by usage, wear and tear and obsolescence, and may be shorter than the physical life.',
    },
    related: ['depreciation', 'salvage-value', 'straight-line-method'],
  },
  {
    id: 'straight-line-method',
    category: 'fixedAssets',
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
    category: 'fixedAssets',
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
    id: 'property-plant-equipment',
    category: 'fixedAssets',
    term: { fa: 'دارایی‌های ثابت مشهود', en: 'Property, Plant and Equipment (PP&E)' },
    def: {
      fa: 'دارایی‌های فیزیکی مانند زمین، ساختمان، ماشین‌آلات، وسایل نقلیه و اثاثه که برای تولید، ارائه خدمات یا امور اداری نگهداری می‌شوند و انتظار می‌رود بیش از یک دوره مالی استفاده شوند (IAS 16). این دارایی‌ها غیرجاری‌اند و در مدل بهای تمام‌شده، به بهای تمام‌شده منهای استهلاک انباشته و زیان کاهش ارزش گزارش می‌شوند.',
      en: 'Physical assets such as land, buildings, machinery, vehicles and furniture held for producing goods, supplying services or administration and expected to be used for more than one period (IAS 16). They are non-current assets and, under the cost model, are reported at cost less accumulated depreciation and impairment losses.',
    },
    related: ['asset-cost', 'depreciation', 'fixed-asset-register'],
  },
  {
    id: 'asset-cost',
    category: 'fixedAssets',
    term: { fa: 'بهای تمام‌شده دارایی ثابت', en: 'Cost of a Fixed Asset' },
    def: {
      fa: 'همه مخارج لازم برای خرید دارایی و آماده کردن آن برای استفاده مورد نظر: بهای خرید پس از کسر تخفیف، حقوق گمرکی و مالیات‌های غیرقابل استرداد، حمل، نصب و راه‌اندازی. مخارجی مانند آموزش کارکنان، تبلیغات یا تعمیر آسیبی که هنگام حمل وارد شده، جزو بهای دارایی نیستند و هزینه دوره‌اند.',
      en: 'Every cost needed to buy an asset and get it ready for its intended use: purchase price after discounts, import duties and non-refundable taxes, delivery, installation and testing. Costs such as staff training, advertising or repairing damage caused in transit are not part of the asset; they are expenses of the period.',
    },
    formula: {
      fa: 'بهای تمام‌شده = بهای خرید − تخفیف + حقوق گمرکی و مالیات غیرقابل استرداد + حمل + نصب و راه‌اندازی',
      en: 'Cost = Purchase price − Discounts + Duties and non-refundable taxes + Delivery + Installation and testing',
    },
    related: ['property-plant-equipment', 'capital-expenditure', 'historical-cost'],
  },
  {
    id: 'capital-expenditure',
    category: 'fixedAssets',
    term: { fa: 'مخارج سرمایه‌ای', en: 'Capital Expenditure' },
    def: {
      fa: 'مخارجی که منافع آن‌ها از دوره جاری فراتر می‌رود، مانند خرید دارایی ثابت یا افزودن یک طبقه به ساختمان، و مخارج بعدی که عمر مفید، ظرفیت یا کیفیت خروجی دارایی را افزایش می‌دهد. این مخارج به حساب دارایی اضافه (سرمایه‌ای) و طی عمر مفید مستهلک می‌شوند.',
      en: "Spending whose benefits last beyond the current period, such as buying a fixed asset or adding a floor to a building, and later spending that extends an asset's useful life or increases its capacity or output quality. It is added to the asset (capitalized) and depreciated over the useful life.",
    },
    related: ['revenue-expenditure', 'asset-cost', 'depreciation'],
  },
  {
    id: 'revenue-expenditure',
    category: 'fixedAssets',
    term: { fa: 'مخارج جاری (هزینه‌ای)', en: 'Revenue Expenditure' },
    def: {
      fa: 'مخارجی که فقط دارایی را در وضعیت کاری فعلی نگه می‌دارد و منافع آن به دوره جاری محدود است؛ مانند سرویس دوره‌ای، تعویض روغن و تعمیرات جزئی. این مخارج در همان دوره هزینه می‌شوند و اگر به اشتباه سرمایه‌ای شوند، سود و دارایی‌ها بیش از واقع نشان داده می‌شوند.',
      en: 'Spending that only keeps an asset in its existing working condition and benefits the current period only, such as routine servicing, oil changes and minor repairs. It is expensed in the same period; capitalizing it by mistake would overstate both profit and assets.',
    },
    related: ['capital-expenditure', 'expense', 'materiality'],
  },
  {
    id: 'units-of-production-method',
    category: 'fixedAssets',
    term: { fa: 'روش واحد تولید (بر اساس کارکرد)', en: 'Units-of-Production Method' },
    def: {
      fa: 'روش استهلاکی که مبلغ استهلاک‌پذیر را بر اساس میزان استفاده واقعی، مانند تعداد قطعه تولیدشده، ساعت کار ماشین یا مسافت پیموده‌شده، تقسیم می‌کند. سالی که دارایی بیشتر کار کند، استهلاک بیشتری می‌گیرد؛ این روش برای دارایی‌هایی مناسب است که بیشتر با کار فرسوده می‌شوند تا با گذر زمان.',
      en: 'A depreciation method that spreads the depreciable amount according to actual use, such as units produced, machine hours or distance driven. A year of heavier use carries more depreciation, which suits assets that wear out mainly through use rather than with time.',
    },
    formula: {
      fa: 'استهلاک هر واحد = (بهای تمام‌شده − ارزش اسقاط) ÷ کل تولید برآوردی؛ استهلاک دوره = استهلاک هر واحد × تولید دوره',
      en: 'Rate per unit = (Cost − Salvage value) ÷ Total estimated units; Period depreciation = Rate per unit × Units this period',
    },
    related: ['depreciation', 'straight-line-method', 'useful-life'],
  },
  {
    id: 'partial-year-depreciation',
    category: 'fixedAssets',
    term: { fa: 'استهلاک کسری از سال', en: 'Part-Year Depreciation' },
    def: {
      fa: 'استهلاک دارایی‌ای که در میانه سال مالی خریداری یا فروخته می‌شود و فقط برای ماه‌هایی محاسبه می‌شود که دارایی آماده استفاده بوده است. معمولاً محاسبه به ماه کامل گرد می‌شود؛ مهم این است که رویه انتخاب‌شده هر سال یکسان به کار رود.',
      en: 'Depreciation on an asset bought or sold partway through the financial year, charged only for the months the asset was available for use. The calculation is usually rounded to whole months; what matters is applying the chosen convention consistently every year.',
    },
    formula: {
      fa: 'استهلاک کسری از سال = استهلاک سالانه × تعداد ماه‌های استفاده ÷ 12',
      en: 'Part-year depreciation = Annual depreciation × Months in use ÷ 12',
    },
    related: ['straight-line-method', 'depreciation', 'disposal-gain-loss'],
  },
  {
    id: 'change-in-estimate',
    category: 'fixedAssets',
    term: { fa: 'تغییر در برآورد حسابداری', en: 'Change in Accounting Estimate' },
    def: {
      fa: 'بازنگری در برآوردهایی مانند عمر مفید، ارزش اسقاط یا الگوی استفاده از دارایی بر اساس اطلاعات تازه. تغییر برآورد به‌صورت آتی اعمال می‌شود: ارزش دفتری فعلی منهای ارزش اسقاط جدید، طی عمر مفید باقی‌مانده جدید مستهلک می‌شود و ارقام سال‌های قبل اصلاح نمی‌شوند (IAS 8).',
      en: 'A revision of estimates such as useful life, salvage value or the pattern of use of an asset in light of new information. It is applied prospectively: the current book value less the new salvage value is depreciated over the new remaining life, and prior years are not restated (IAS 8).',
    },
    formula: {
      fa: 'استهلاک سالانه جدید = (ارزش دفتری فعلی − ارزش اسقاط جدید) ÷ عمر مفید باقی‌مانده جدید',
      en: 'New annual depreciation = (Current book value − New salvage value) ÷ New remaining useful life',
    },
    related: ['useful-life', 'salvage-value', 'book-value'],
  },
  {
    id: 'disposal-gain-loss',
    category: 'fixedAssets',
    term: { fa: 'سود (زیان) فروش دارایی ثابت', en: 'Gain or Loss on Disposal' },
    def: {
      fa: 'تفاوت مبلغ دریافتی از فروش یا کنارگذاری دارایی ثابت با ارزش دفتری آن در تاریخ واگذاری. ابتدا استهلاک تا تاریخ واگذاری ثبت می‌شود، سپس بهای تمام‌شده و استهلاک انباشته دارایی از دفاتر خارج و تفاوت به‌عنوان سود یا زیان گزارش می‌شود، نه به‌عنوان درآمد عملیاتی.',
      en: "The difference between what is received on selling or scrapping a fixed asset and its book value at that date. Depreciation is first brought up to the disposal date; then the asset's cost and accumulated depreciation are removed from the books and the difference is reported as a gain or loss, not as revenue.",
    },
    formula: {
      fa: 'سود (زیان) فروش = مبلغ فروش − (بهای تمام‌شده − استهلاک انباشته)',
      en: 'Gain (loss) = Proceeds − (Cost − Accumulated depreciation)',
    },
    related: ['book-value', 'accumulated-depreciation', 'partial-year-depreciation'],
  },
  {
    id: 'impairment',
    category: 'fixedAssets',
    term: { fa: 'کاهش ارزش دارایی (زیان کاهش ارزش)', en: 'Impairment' },
    def: {
      fa: 'وضعیتی که مبلغ دفتری دارایی از مبلغ بازیافتنی آن بیشتر است؛ مبلغ بازیافتنی، ارزش منصفانه منهای مخارج فروش یا ارزش اقتصادی (ارزش فعلی جریان‌های نقدی آتی دارایی) است، هر کدام بیشتر باشد (IAS 36). مازاد به‌عنوان زیان کاهش ارزش به هزینه منظور و از مبلغ دفتری کم می‌شود؛ نشانه‌هایی مانند آسیب فیزیکی، منسوخ شدن یا افت شدید بازار این بررسی را لازم می‌کند.',
      en: "The situation where an asset's carrying amount is higher than its recoverable amount, which is the higher of fair value less costs to sell and value in use (the present value of the asset's future cash flows) (IAS 36). The excess is recognized as an impairment loss and deducted from the carrying amount; signs such as physical damage, obsolescence or a sharp market fall trigger the test.",
    },
    formula: {
      fa: 'زیان کاهش ارزش = مبلغ دفتری − مبلغ بازیافتنی (اگر مثبت باشد)',
      en: 'Impairment loss = Carrying amount − Recoverable amount (when positive)',
    },
    related: ['book-value', 'property-plant-equipment', 'revaluation-model'],
  },
  {
    id: 'revaluation-model',
    category: 'fixedAssets',
    term: { fa: 'مدل تجدید ارزیابی', en: 'Revaluation Model' },
    def: {
      fa: 'جایگزین مدل بهای تمام‌شده که در آن یک طبقه کامل از دارایی‌های ثابت مشهود، مانند زمین یا ساختمان، به ارزش منصفانه در تاریخ تجدید ارزیابی منهای استهلاک و کاهش ارزش بعدی گزارش می‌شود (IAS 16). افزایش ارزش به‌جای سود دوره، از طریق سایر اقلام سود و زیان جامع به «مازاد تجدید ارزیابی» در حقوق مالکانه می‌رود و تجدید ارزیابی باید به‌طور منظم تکرار شود.',
      en: 'The alternative to the cost model, under which an entire class of PP&E, such as land or buildings, is carried at fair value at the revaluation date less later depreciation and impairment (IAS 16). Increases go to a revaluation surplus in equity through other comprehensive income rather than to profit, and revaluations must be repeated regularly.',
    },
    related: ['property-plant-equipment', 'comprehensive-income', 'historical-cost'],
  },
  {
    id: 'fixed-asset-register',
    category: 'fixedAssets',
    term: { fa: 'دفتر اموال (فهرست دارایی‌های ثابت)', en: 'Fixed-Asset Register' },
    def: {
      fa: 'فهرست تفصیلی همه دارایی‌های ثابت که برای هر قلم، شماره اموال (برچسب)، شرح، محل استقرار، تحویل‌گیرنده، تاریخ و بهای خرید، روش و نرخ استهلاک، استهلاک انباشته و ارزش دفتری را نگه می‌دارد. جمع آن باید با حساب‌های دارایی ثابت و استهلاک انباشته در دفتر کل برابر باشد و با شمارش دوره‌ای اموال مقایسه شود.',
      en: 'A detailed list of every fixed asset that records, for each item, its asset tag number, description, location, custodian, purchase date and cost, depreciation method and rate, accumulated depreciation and book value. Its totals must agree with the fixed-asset and accumulated-depreciation accounts in the general ledger and be checked against periodic physical counts.',
    },
    related: ['property-plant-equipment', 'internal-control', 'subsidiary-ledger'],
  },

  // ───────────────────────────── liabilities ─────────────────────────────
  {
    id: 'notes-payable',
    category: 'liabilities',
    term: { fa: 'اسناد پرداختنی', en: 'Notes Payable' },
    def: {
      fa: 'چک‌های مدت‌دار و سفته‌هایی که واحد تجاری به تأمین‌کنندگان، وام‌دهندگان یا دیگران داده و هنوز سررسید و پرداخت نشده‌اند. در ایران خرید نسیه اغلب با چک مدت‌دار تسویه می‌شود: با صدور چک، مبلغ از حساب‌های پرداختنی به اسناد پرداختنی منتقل می‌شود و در سررسید، با پرداخت بانک بسته می‌شود.',
      en: 'Post-dated cheques and promissory notes the entity has given to suppliers, lenders or others that have not yet fallen due and been paid. In Iran credit purchases are often settled with post-dated cheques: issuing the cheque moves the amount from accounts payable to notes payable, and it is cleared when the bank pays it on the due date.',
    },
    formula: {
      fa: 'صدور چک مدت‌دار: بدهکار حساب‌های پرداختنی، بستانکار اسناد پرداختنی؛ سررسید: بدهکار اسناد پرداختنی، بستانکار موجودی نقد (بانک)',
      en: 'Issue post-dated cheque: Dr Accounts payable, Cr Notes payable; On the due date: Dr Notes payable, Cr Cash (bank)',
    },
    related: ['accounts-payable', 'notes-receivable', 'current-liability'],
  },
  {
    id: 'accrued-liabilities',
    category: 'liabilities',
    term: { fa: 'بدهی‌های تعهدی (هزینه‌های پرداختنی)', en: 'Accrued Liabilities' },
    def: {
      fa: 'بدهی‌هایی که در پایان دوره برای هزینه‌های تحقق‌یافته اما پرداخت‌نشده شناسایی می‌شوند؛ مانند حقوق، بهره، اجاره و قبض‌های آب و برق پرداختنی. این بدهی‌ها معمولاً با ثبت اصلاحی ایجاد می‌شوند و جزو بدهی‌های جاری‌اند.',
      en: 'Liabilities recognized at period end for expenses that have been incurred but not yet paid, such as wages, interest, rent and utilities payable. They are usually created by adjusting entries and are current liabilities.',
    },
    related: ['accrued-expense', 'current-liability', 'adjusting-entries'],
  },
  {
    id: 'payroll',
    category: 'liabilities',
    term: { fa: 'حقوق و دستمزد', en: 'Payroll' },
    def: {
      fa: 'فرایند محاسبه، ثبت و پرداخت حقوق کارکنان و کسورات آن در هر دوره (معمولاً ماهانه) و نیز فهرستی (لیست حقوق) که این ارقام را برای هر کارمند نشان می‌دهد. ثبت حقوق، هزینه حقوق ناخالص را شناسایی و آن را میان خالص پرداختی به کارمند و کسوراتی که باید به سازمان امور مالیاتی و تأمین اجتماعی پرداخت شود تقسیم می‌کند؛ سهم بیمه کارفرما هزینه جداگانه کارفرماست.',
      en: "The process of calculating, recording and paying employees' pay and deductions each period (usually monthly), and the payroll register showing these figures for each employee. The payroll entry recognizes gross salaries expense and splits it between net pay owed to employees and deductions owed to the tax authority and social security; the employer's share of insurance is a separate employer expense.",
    },
    formula: {
      fa: 'ثبت: بدهکار هزینه حقوق (ناخالص)؛ بستانکار مالیات حقوق پرداختنی، حق بیمه پرداختنی (سهم کارمند) و حقوق پرداختنی (خالص)',
      en: 'Entry: Dr Salaries expense (gross); Cr Salary tax payable, Insurance payable (employee share) and Salaries payable (net)',
    },
    related: ['gross-pay', 'net-pay', 'social-security-insurance'],
  },
  {
    id: 'gross-pay',
    category: 'liabilities',
    term: { fa: 'حقوق و مزایای ناخالص', en: 'Gross Pay' },
    def: {
      fa: 'کل مبلغی که کارمند پیش از هر کسری برای دوره کار خود به دست می‌آورد: حقوق پایه به‌اضافه مزایایی مانند اضافه‌کار، حق مسکن، بن خواربار، حق اولاد و پاداش. هزینه حقوق در صورت سود و زیان بر اساس حقوق ناخالص ثبت می‌شود، نه مبلغی که به حساب کارمند واریز می‌شود.',
      en: "The total an employee earns for the period before any deductions: base salary plus allowances such as overtime, housing and grocery allowances, child allowance and bonuses. Salaries expense on the income statement is based on gross pay, not on the amount paid into the employee's account.",
    },
    related: ['net-pay', 'payroll', 'salary-tax'],
  },
  {
    id: 'net-pay',
    category: 'liabilities',
    term: { fa: 'خالص پرداختی (حقوق خالص)', en: 'Net Pay (Take-Home Pay)' },
    def: {
      fa: 'مبلغی که پس از کسر همه کسورات، مانند مالیات حقوق، سهم کارمند از بیمه تأمین اجتماعی، اقساط وام و مساعده، واقعاً به کارمند پرداخت می‌شود. کسوراتی مانند مالیات و بیمه را واحد تجاری از طرف کارمند نگه می‌دارد و باید به سازمان امور مالیاتی و تأمین اجتماعی بپردازد؛ پس تا زمان پرداخت، بدهی است.',
      en: "The amount actually paid to the employee after all deductions, such as salary tax, the employee's share of social-security insurance, loan instalments and pay advances. Deductions such as tax and insurance are held by the business on the employee's behalf and must be paid to the tax authority and the Social Security Organization, so they are liabilities until paid.",
    },
    formula: {
      fa: 'خالص پرداختی = حقوق و مزایای ناخالص − کسورات',
      en: 'Net pay = Gross pay − Deductions',
    },
    related: ['gross-pay', 'salary-tax', 'social-security-insurance'],
  },
  {
    id: 'salary-tax',
    category: 'liabilities',
    term: { fa: 'مالیات حقوق', en: 'Withholding (Salary) Tax' },
    def: {
      fa: 'مالیات بر درآمد حقوق که کارفرما موظف است هر ماه از حقوق کارکنان کسر کند و به سازمان امور مالیاتی بپردازد. این مالیات با نرخ‌های پلکانی بر بخشی از حقوق که از معافیت سالانه بیشتر است محاسبه می‌شود؛ سقف معافیت و نرخ‌ها معمولاً هر سال در قانون بودجه تعیین می‌شوند، پس ارقام روز را بررسی کنید.',
      en: "Income tax on salaries that the employer must deduct from employees' pay every month and pay over to the tax authority. It is calculated at progressive rates on the part of pay above the annual exemption; the exemption and the brackets are usually set each year in the budget law, so check the current figures.",
    },
    related: ['net-pay', 'payroll', 'gross-pay'],
  },
  {
    id: 'social-security-insurance',
    category: 'liabilities',
    term: { fa: 'بیمه تأمین اجتماعی', en: 'Social Security Insurance' },
    def: {
      fa: 'حق بیمه‌ای که برای کارکنان مشمول قانون تأمین اجتماعی محاسبه و ماهانه همراه با فهرست بیمه به سازمان تأمین اجتماعی پرداخت می‌شود. بخشی از آن سهم کارمند است که از حقوقش کسر می‌شود و بخش دیگر سهم کارفرماست که هزینه کارفرماست. در مثال‌های این دوره سهم کارمند 7 درصد و سهم کارفرما 23 درصد حقوق مشمول فرض شده است؛ نرخ‌ها و سقف حقوق مشمول را از مقررات روز بررسی کنید.',
      en: "Insurance contributions calculated for employees covered by the Social Security Act and paid monthly, with the insurance list, to the Social Security Organization. Part is the employee's share, deducted from pay, and part is the employer's share, an expense of the employer. This course's examples assume 7% for the employee and 23% for the employer on insurable pay; check the current rates and ceilings.",
    },
    formula: {
      fa: 'حق بیمه کل = حقوق مشمول بیمه × (نرخ سهم کارمند + نرخ سهم کارفرما)',
      en: 'Total contribution = Insurable pay × (Employee rate + Employer rate)',
    },
    related: ['payroll', 'net-pay', 'gross-pay'],
  },
  {
    id: 'vat',
    category: 'liabilities',
    term: { fa: 'مالیات بر ارزش افزوده', en: 'Value Added Tax (VAT)' },
    def: {
      fa: 'مالیاتی غیرمستقیم که در هر مرحله از زنجیره تأمین روی فروش کالا و خدمات گرفته می‌شود و در نهایت مصرف‌کننده نهایی آن را می‌پردازد. واحد تجاری ثبت‌نام‌شده مالیات فروش را از مشتری می‌گیرد، مالیات خرید را از آن کسر می‌کند و تفاوت را به سازمان امور مالیاتی می‌پردازد؛ پس این مالیات نه درآمد اوست و نه هزینه‌اش. در مثال‌های این دوره نرخ آن 10 درصد فرض شده است؛ نرخ رسمی را از قوانین روز بررسی کنید.',
      en: 'An indirect tax charged at each stage of the supply chain on sales of goods and services and ultimately borne by the final consumer. A registered business collects output VAT from customers, deducts the input VAT it paid on purchases and pays the difference to the tax authority, so VAT is neither its revenue nor its expense. This course assumes a 10% rate in examples; check the current official rate.',
    },
    formula: {
      fa: 'مالیات بر ارزش افزوده پرداختنی = مالیات فروش (خروجی) − مالیات خرید (ورودی)',
      en: 'VAT payable = Output VAT − Input VAT',
    },
    related: ['output-vat', 'input-vat', 'current-liability'],
  },
  {
    id: 'input-vat',
    category: 'liabilities',
    term: { fa: 'مالیات بر ارزش افزوده خرید (اعتبار مالیاتی)', en: 'Input VAT' },
    def: {
      fa: 'مالیات بر ارزش افزوده‌ای که واحد تجاری هنگام خرید کالا و خدمات به فروشنده می‌پردازد. اگر قابل کسر باشد (یعنی صورتحساب معتبر و ثبت‌شده در سامانه مالیاتی داشته باشد)، جزو بهای خرید نیست و در حسابی جداگانه ثبت می‌شود که از مالیات فروش کم می‌شود.',
      en: 'The VAT a business pays to suppliers when it buys goods and services. If it is deductible (backed by a valid invoice registered in the tax system), it is not part of the purchase cost; it is recorded in a separate account and offset against output VAT.',
    },
    formula: {
      fa: 'خرید 1,000 با نرخ 10 درصد: بدهکار خرید (یا موجودی کالا) 1,000، بدهکار مالیات بر ارزش افزوده خرید 100، بستانکار حساب‌های پرداختنی 1,100',
      en: 'Purchase of 1,000 at 10%: Dr Purchases (or Inventory) 1,000, Dr Input VAT 100, Cr Accounts payable 1,100',
    },
    related: ['vat', 'output-vat', 'asset-cost'],
  },
  {
    id: 'output-vat',
    category: 'liabilities',
    term: { fa: 'مالیات بر ارزش افزوده فروش', en: 'Output VAT' },
    def: {
      fa: 'مالیات بر ارزش افزوده‌ای که واحد تجاری هنگام فروش کالا یا خدمات روی صورتحساب از مشتری می‌گیرد. این مبلغ درآمد نیست، بلکه بدهی به سازمان امور مالیاتی است که پس از کسر مالیات خرید، در مهلت قانونی پرداخت می‌شود.',
      en: 'The VAT a business adds to its sales invoices and collects from customers. It is not revenue but a liability to the tax authority, paid by the legal deadline after deducting input VAT.',
    },
    formula: {
      fa: 'فروش 2,000 با نرخ 10 درصد: بدهکار حساب‌های دریافتنی 2,200، بستانکار فروش 2,000، بستانکار مالیات بر ارزش افزوده فروش 200',
      en: 'Sale of 2,000 at 10%: Dr Accounts receivable 2,200, Cr Sales 2,000, Cr Output VAT 200',
    },
    related: ['vat', 'input-vat', 'revenue'],
  },
  {
    id: 'current-portion-of-long-term-debt',
    category: 'liabilities',
    term: { fa: 'حصه جاری بدهی‌های بلندمدت', en: 'Current Portion of Long-Term Debt' },
    def: {
      fa: 'بخشی از اصل وام یا بدهی بلندمدت که باید ظرف 12 ماه آینده پرداخت شود. این بخش در ترازنامه از بدهی بلندمدت جدا و جزو بدهی‌های جاری گزارش می‌شود تا نسبت جاری و سرمایه در گردش درست سنجیده شوند.',
      en: 'The part of the principal of a loan or other long-term debt that falls due within the next 12 months. It is separated from long-term debt and shown under current liabilities on the balance sheet so that the current ratio and working capital are measured correctly.',
    },
    formula: {
      fa: 'بخش بلندمدت در ترازنامه = کل مانده وام − حصه جاری',
      en: 'Non-current portion = Total loan balance − Current portion',
    },
    related: ['current-liability', 'working-capital', 'current-ratio'],
  },
  {
    id: 'provision',
    category: 'liabilities',
    term: { fa: 'ذخیره', en: 'Provision' },
    def: {
      fa: 'بدهی‌ای که زمان یا مبلغ آن قطعی نیست و وقتی شناسایی می‌شود که تعهد فعلی ناشی از رویداد گذشته وجود داشته باشد، خروج منابع محتمل باشد و مبلغ آن به‌طور اتکاپذیر برآورد شود (IAS 37)؛ مانند ذخیره تضمین محصولات یا ذخیره دعوای حقوقی‌ای که احتمالاً به پرداخت خسارت می‌انجامد. توجه کنید که «ذخیره مطالبات مشکوک‌الوصول» با وجود نامش، کاهنده دارایی است نه بدهی.',
      en: 'A liability of uncertain timing or amount, recognized when there is a present obligation from a past event, an outflow of resources is probable and the amount can be estimated reliably (IAS 37), such as a warranty provision or a provision for a lawsuit the entity will probably lose. Note that the Persian word for provision (ذخیره) is also used for the allowance for doubtful accounts, which is a contra-asset, not a liability.',
    },
    formula: {
      fa: 'ثبت: بدهکار هزینه مربوط، بستانکار ذخیره',
      en: 'Entry: Dr Related expense, Cr Provision',
    },
    related: ['warranty-provision', 'contingent-liability', 'liability'],
  },
  {
    id: 'warranty-provision',
    category: 'liabilities',
    term: { fa: 'ذخیره تضمین محصولات (گارانتی)', en: 'Warranty Provision' },
    def: {
      fa: 'ذخیره‌ای که فروشنده در دوره فروش برای هزینه برآوردی تعمیر یا تعویض کالاهای فروخته‌شده در دوره ضمانت ثبت می‌کند تا هزینه گارانتی با درآمد همان فروش تطابق یابد. هزینه‌های واقعی گارانتی بعداً از این ذخیره کسر می‌شوند و دوباره هزینه نمی‌شوند.',
      en: 'A provision the seller records in the period of sale for the estimated cost of repairing or replacing goods under warranty, so that warranty cost is matched with the revenue from those sales. Actual warranty costs are later charged against the provision rather than expensed again.',
    },
    formula: {
      fa: 'برآورد: بدهکار هزینه تضمین محصولات، بستانکار ذخیره تضمین؛ تعمیر واقعی: بدهکار ذخیره تضمین، بستانکار موجودی نقد یا قطعات',
      en: 'Estimate: Dr Warranty expense, Cr Warranty provision; Actual repair: Dr Warranty provision, Cr Cash or Parts',
    },
    related: ['provision', 'matching-principle', 'contingent-liability'],
  },
  {
    id: 'contingent-liability',
    category: 'liabilities',
    term: { fa: 'بدهی احتمالی', en: 'Contingent Liability' },
    def: {
      fa: 'تعهد ممکنی که وجود آن به رویدادهای نامطمئن آینده بستگی دارد، یا تعهد فعلی‌ای که خروج منابع برای آن محتمل نیست یا مبلغش به‌طور اتکاپذیر قابل برآورد نیست؛ مانند دعوای حقوقی با نتیجه نامعلوم یا ضمانت وام شخص دیگر. بدهی احتمالی در ترازنامه ثبت نمی‌شود و فقط در یادداشت‌های توضیحی افشا می‌شود، مگر اینکه احتمال خروج منابع بسیار کم باشد.',
      en: "A possible obligation whose existence depends on uncertain future events, or a present obligation where an outflow is not probable or cannot be measured reliably, such as a lawsuit with an uncertain outcome or a guarantee of someone else's loan. It is not recognized on the balance sheet but disclosed in the notes, unless the chance of an outflow is remote.",
    },
    related: ['provision', 'notes-to-financial-statements', 'warranty-provision'],
  },

  // ───────────────────────────── equity ─────────────────────────────
  {
    id: 'retained-earnings',
    category: 'equity',
    term: { fa: 'سود انباشته', en: 'Retained Earnings' },
    def: {
      fa: 'جمع سودهای خالص شرکت از آغاز فعالیت، پس از کسر زیان‌ها و سودهای تقسیم‌شده میان سهامداران؛ یعنی بخشی از سود که برای استفاده در عملیات در شرکت باقی مانده است. سود انباشته جزء حقوق مالکانه است و نباید آن را با وجه نقد یکی دانست.',
      en: "A corporation's cumulative net income since it began, less losses and dividends paid out; in other words, the profit kept in the business. It is part of equity and is not the same thing as cash.",
    },
    formula: {
      fa: 'سود انباشته پایان دوره = سود انباشته ابتدای دوره + سود خالص − سود سهام − انتقال به اندوخته‌ها',
      en: 'Ending retained earnings = Beginning retained earnings + Net income − Dividends − Transfers to reserves',
    },
    related: ['net-income', 'dividends', 'legal-reserve'],
  },
  {
    id: 'share-capital',
    category: 'equity',
    term: { fa: 'سرمایه (سهام)', en: 'Share Capital' },
    def: {
      fa: 'مبلغ اسمی سهامی که شرکت منتشر کرده و در اساسنامه آمده و نزد اداره ثبت شرکت‌ها ثبت شده است؛ یعنی تعداد سهام ضرب در ارزش اسمی هر سهم. سرمایه با بستانکار کردن حساب سرمایه ثبت می‌شود و تغییر آن فقط با تصویب مجمع عمومی فوق‌العاده و ثبت رسمی ممکن است.',
      en: 'The nominal amount of the shares a company has issued, as stated in its articles and registered with the Companies Registration Office: the number of shares times the nominal value per share. It is recorded by crediting Share Capital and can only be changed by an extraordinary general meeting resolution followed by official registration.',
    },
    formula: {
      fa: 'سرمایه = تعداد سهام × ارزش اسمی هر سهم',
      en: 'Share capital = Number of shares × Nominal value per share',
    },
    related: ['par-value', 'paid-in-capital', 'capital-increase'],
  },
  {
    id: 'par-value',
    category: 'equity',
    term: { fa: 'ارزش اسمی سهم', en: 'Nominal (Par) Value' },
    def: {
      fa: 'مبلغی که برای هر سهم در اساسنامه تعیین و روی برگه سهم نوشته می‌شود. ارزش اسمی ربطی به قیمت بازار سهم ندارد و فقط مبنای ثبت حساب سرمایه است؛ اگر سهم به مبلغی بیش از ارزش اسمی فروخته شود، مازاد آن صرف سهام نام دارد و جداگانه ثبت می‌شود.',
      en: 'The amount set for each share in the articles of association and printed on the share certificate. It has nothing to do with the market price and only serves as the basis for the Share Capital account; if shares are issued above it, the excess is share premium and is recorded separately.',
    },
    related: ['share-capital', 'share-premium', 'earnings-per-share'],
  },
  {
    id: 'share-premium',
    category: 'equity',
    term: { fa: 'صرف سهام', en: 'Share Premium' },
    def: {
      fa: 'مبلغی که سهامداران هنگام خرید سهام تازه‌منتشرشده بیش از ارزش اسمی آن می‌پردازند. صرف سهام جزو حقوق مالکانه است، نه درآمد، و در حسابی جدا از سرمایه ثبت می‌شود.',
      en: 'The amount shareholders pay above nominal value when buying newly issued shares. It is part of equity, not income, and is recorded in an account separate from share capital.',
    },
    formula: {
      fa: 'صرف سهام = (قیمت انتشار هر سهم − ارزش اسمی) × تعداد سهام منتشرشده',
      en: 'Share premium = (Issue price per share − Nominal value) × Number of shares issued',
    },
    related: ['par-value', 'share-capital', 'paid-in-capital'],
  },
  {
    id: 'subscribed-capital',
    category: 'equity',
    term: { fa: 'سرمایه تعهدشده', en: 'Subscribed Capital' },
    def: {
      fa: 'سرمایه‌ای که سهامداران پرداخت آن را تعهد کرده‌اند، چه پرداخت شده باشد چه نه. طبق قانون تجارت، هنگام تأسیس شرکت سهامی دست‌کم 35 درصد آن باید پرداخت شود؛ مبلغ پرداخت‌نشده طلب شرکت از سهامداران است و در ترازنامه معمولاً از سرمایه کسر می‌شود.',
      en: 'The capital that shareholders have committed to pay, whether or not it has been paid yet. Under the Iranian Commercial Code at least 35% must be paid when a joint-stock company is formed; the unpaid part is a claim on shareholders and is usually shown as a deduction from capital.',
    },
    formula: {
      fa: 'سرمایه پرداخت‌شده = سرمایه تعهدشده − مبلغ پرداخت‌نشده سهامداران',
      en: 'Paid-in capital = Subscribed capital − Amount still unpaid by shareholders',
    },
    related: ['paid-in-capital', 'share-capital'],
  },
  {
    id: 'paid-in-capital',
    category: 'equity',
    term: { fa: 'سرمایه پرداخت‌شده', en: 'Paid-in Capital' },
    def: {
      fa: 'بخشی از سرمایه تعهدشده که سهامداران واقعاً به شرکت پرداخت کرده‌اند، به‌صورت نقد یا آورده غیرنقدی. در معنای گسترده‌تر، به‌ویژه در متون انگلیسی، صرف سهام هم جزو آن است، چون آن هم آورده سهامداران است و از سود به دست نیامده است.',
      en: 'The part of subscribed capital that shareholders have actually paid in, in cash or in kind. In a wider sense, especially in English-language texts, it also includes share premium, since that too is contributed by shareholders rather than earned.',
    },
    related: ['subscribed-capital', 'share-capital', 'share-premium'],
  },
  {
    id: 'legal-reserve',
    category: 'equity',
    term: { fa: 'اندوخته قانونی', en: 'Legal Reserve' },
    def: {
      fa: 'بخشی از سود که طبق قانون تجارت باید در شرکت بماند: هر سال یک‌بیستم سود خالص (پس از جبران زیان‌های سال‌های قبل) به اندوخته قانونی منتقل می‌شود تا این اندوخته به یک‌دهم سرمایه برسد. اندوخته قانونی میان سهامداران تقسیم نمی‌شود و اگر سرمایه افزایش یابد، انتقال تا رسیدن به یک‌دهم سرمایه جدید ادامه پیدا می‌کند.',
      en: 'Part of profit that the Iranian Commercial Code requires a company to keep: each year one-twentieth of net profit (after covering losses of previous years) is transferred to the legal reserve until it reaches one-tenth of share capital. It cannot be distributed to shareholders, and if capital is increased the transfers continue until the reserve reaches one-tenth of the new capital.',
    },
    formula: {
      fa: 'انتقال سالانه = هر کدام کمتر است: سود خالص ÷ 20 یا (سرمایه ÷ 10 − اندوخته قانونی موجود)؛ ثبت: بدهکار سود انباشته، بستانکار اندوخته قانونی',
      en: 'Annual transfer = Lower of: Net profit ÷ 20 and (Share capital ÷ 10 − Existing legal reserve); Entry: Dr Retained earnings, Cr Legal reserve',
    },
    related: ['retained-earnings', 'optional-reserves', 'share-capital'],
  },
  {
    id: 'optional-reserves',
    category: 'equity',
    term: { fa: 'اندوخته‌های اختیاری', en: 'Optional (Voluntary) Reserves' },
    def: {
      fa: 'بخشی از سود که به پیشنهاد هیئت‌مدیره و تصویب مجمع عمومی، یا طبق اساسنامه، برای هدفی مانند طرح و توسعه یا جایگزینی دارایی‌ها در شرکت نگه داشته می‌شود. این اندوخته‌ها جزو حقوق مالکانه‌اند و وجه نقد جداگانه‌ای نیستند؛ مجمع می‌تواند بعداً آن‌ها را تقسیم یا به سرمایه منتقل کند.',
      en: "Part of profit set aside on the board's proposal and the general meeting's approval, or under the articles of association, for a purpose such as expansion or replacing assets. They are part of equity, not a separate pile of cash, and the general meeting can later distribute them or transfer them to capital.",
    },
    related: ['legal-reserve', 'retained-earnings', 'general-meeting'],
  },
  {
    id: 'dividends',
    category: 'equity',
    term: { fa: 'سود سهام (سود تقسیمی)', en: 'Dividends' },
    def: {
      fa: 'بخشی از سود که مجمع عمومی عادی تقسیم آن را میان سهامداران و به نسبت سهامشان تصویب می‌کند. سود سهام هزینه نیست و مستقیماً از سود انباشته کم می‌شود؛ طبق قانون تجارت، اگر سود قابل تقسیم وجود داشته باشد، تقسیم دست‌کم 10 درصد سود خالص سال الزامی است.',
      en: "The part of profit that the annual general meeting votes to distribute to shareholders in proportion to their shareholdings. Dividends are not an expense; they are deducted directly from retained earnings. Under the Iranian Commercial Code, if there is distributable profit, at least 10% of the year's net profit must be distributed.",
    },
    formula: {
      fa: 'ثبت تصویب: بدهکار سود انباشته، بستانکار سود سهام پرداختنی',
      en: 'On approval: Dr Retained earnings, Cr Dividends payable',
    },
    related: ['dividends-payable', 'retained-earnings', 'general-meeting'],
  },
  {
    id: 'dividends-payable',
    category: 'equity',
    term: { fa: 'سود سهام پرداختنی', en: 'Dividends Payable' },
    def: {
      fa: 'بدهی جاری شرکت به سهامداران بابت سودی که مجمع عمومی تقسیم آن را تصویب کرده اما هنوز پرداخت نشده است. طبق قانون تجارت، سود مصوب باید ظرف هشت ماه پس از تصمیم مجمع پرداخت شود.',
      en: "A current liability to shareholders for dividends the general meeting has approved but the company has not yet paid. Under the Iranian Commercial Code, approved dividends must be paid within eight months of the meeting's decision.",
    },
    formula: {
      fa: 'پرداخت: بدهکار سود سهام پرداختنی، بستانکار موجودی نقد',
      en: 'Payment: Dr Dividends payable, Cr Cash',
    },
    related: ['dividends', 'current-liability', 'general-meeting'],
  },
  {
    id: 'general-meeting',
    category: 'equity',
    term: { fa: 'مجمع عمومی صاحبان سهام', en: 'General Meeting (of Shareholders)' },
    def: {
      fa: 'بالاترین مرجع تصمیم‌گیری شرکت سهامی که از اجتماع سهامداران تشکیل می‌شود. مجمع عمومی عادی (سالانه) صورت‌های مالی را تصویب می‌کند، درباره تقسیم سود و اندوخته‌ها تصمیم می‌گیرد و هیئت‌مدیره و بازرس را انتخاب می‌کند؛ تغییر اساسنامه، افزایش یا کاهش سرمایه و انحلال شرکت در صلاحیت مجمع عمومی فوق‌العاده است.',
      en: 'The highest decision-making body of a joint-stock company, made up of its shareholders. The ordinary (annual) general meeting approves the financial statements, decides on dividends and reserves and elects the board and the statutory inspector (auditor); amending the articles, increasing or reducing capital and winding up the company belong to the extraordinary general meeting.',
    },
    related: ['dividends', 'capital-increase', 'legal-reserve'],
  },
  {
    id: 'capital-increase',
    category: 'equity',
    term: { fa: 'افزایش سرمایه', en: 'Capital Increase' },
    def: {
      fa: 'بالا بردن سرمایه ثبت‌شده شرکت با تصویب مجمع عمومی فوق‌العاده، از راه انتشار سهام جدید یا افزایش ارزش اسمی سهام موجود. منابع رایج آن آورده نقدی سهامداران، تبدیل مطالبات حال‌شده آن‌ها به سرمایه و انتقال سود انباشته یا اندوخته‌های اختیاری است؛ در حالت آخر فقط ترکیب حقوق مالکانه عوض می‌شود و جمع آن تغییر نمی‌کند.',
      en: "Raising a company's registered capital, approved by an extraordinary general meeting, by issuing new shares or increasing the nominal value of existing ones. Common sources are new cash from shareholders, converting amounts the company owes them into capital, and transferring retained earnings or optional reserves; in the last case only the make-up of equity changes, not its total.",
    },
    formula: {
      fa: 'از محل سود انباشته: بدهکار سود انباشته، بستانکار سرمایه',
      en: 'From retained earnings: Dr Retained earnings, Cr Share capital',
    },
    related: ['share-capital', 'general-meeting', 'retained-earnings'],
  },
  {
    id: 'earnings-per-share',
    category: 'equity',
    term: { fa: 'سود هر سهم (EPS)', en: 'Earnings per Share (EPS)' },
    def: {
      fa: 'سود خالص متعلق به سهامداران عادی تقسیم بر میانگین موزون تعداد سهام عادی در جریان طی دوره؛ یعنی سهم هر سهم از سود سال. EPS معیار رایج مقایسه سودآوری در بازار سرمایه است و با سود تقسیمی هر سهم (DPS) که فقط بخش پرداخت‌شده سود است، فرق دارد.',
      en: "Net profit attributable to ordinary shareholders divided by the weighted average number of ordinary shares outstanding during the period; in other words, each share's slice of the year's profit. It is a standard profitability measure in the stock market and differs from dividends per share (DPS), which is only the part paid out.",
    },
    formula: {
      fa: 'سود هر سهم = سود خالص متعلق به سهامداران عادی ÷ میانگین موزون تعداد سهام عادی',
      en: 'EPS = Net profit attributable to ordinary shareholders ÷ Weighted average number of ordinary shares',
    },
    related: ['net-income', 'dividends', 'share-capital'],
  },

  // ───────────────────────────── tax ─────────────────────────────
  {
    id: 'corporate-income-tax',
    category: 'tax',
    term: { fa: 'مالیات بر درآمد شرکت‌ها', en: 'Corporate Income Tax (CIT)' },
    def: {
      fa: 'مالیاتی که بر سود مشمول مالیات شرکت‌ها و شعبه‌ها گرفته می‌شود و پایه آن، سود حسابداری پس از تعدیل‌های قانون مالیاتی است. در قانون مالیات بر درآمد سلطنت عمان نرخ عمومی 15 درصد است و درآمد حاصل از فروش نفت نرخ ویژه 55 درصد دارد که در چارچوب قرارداد اکتشاف و مشارکت در تولید (EPSA) هر شرکت اعمال می‌شود. این نرخ‌ها طبق منابع حرفه‌ای سال 2026 است و ممکن است تغییر کند؛ نرخ روز را از سازمان مالیاتی عمان بررسی کنید.',
      en: "A tax on the taxable profit of companies and branches, calculated on accounting profit after the adjustments the tax law requires. Under Oman's income tax law the general rate is 15%, while income from selling petroleum carries a special 55% rate applied within each company's Exploration and Production Sharing Agreement (EPSA). These rates are as reported by professional guides in 2026 and may change; check the current rate with the Oman Tax Authority.",
    },
    formula: {
      fa: 'مالیات بر درآمد = درآمد مشمول مالیات × نرخ مالیات',
      en: 'Income tax = Taxable income × Tax rate',
    },
    related: ['taxable-income', 'permanent-establishment', 'deferred-tax'],
  },
  {
    id: 'taxable-income',
    category: 'tax',
    term: { fa: 'درآمد مشمول مالیات', en: 'Taxable Income' },
    def: {
      fa: 'مبلغی که نرخ مالیات روی آن اعمال می‌شود: سود حسابداری پس از افزودن هزینه‌هایی که قانون نمی‌پذیرد (مانند جریمه‌ها یا هزینه‌های بدون مدرک)، کسر درآمدهای معاف، جایگزینی استهلاک حسابداری با استهلاک مالیاتی و کسر زیان‌های قابل انتقال سال‌های قبل. به همین دلیل سود دفتری و درآمد مشمول مالیات تقریباً هیچ‌وقت برابر نیستند.',
      en: 'The amount the tax rate is applied to: accounting profit after adding back expenses the law does not allow (such as fines or undocumented costs), removing exempt income, replacing book depreciation with tax depreciation and deducting losses brought forward. That is why book profit and taxable income are almost never the same.',
    },
    formula: {
      fa: 'درآمد مشمول مالیات = سود حسابداری + هزینه‌های غیرقابل قبول − درآمدهای معاف ± تفاوت استهلاک حسابداری و مالیاتی − زیان‌های منتقل‌شده',
      en: 'Taxable income = Accounting profit + Non-deductible expenses − Exempt income ± Book vs tax depreciation difference − Losses brought forward',
    },
    related: ['corporate-income-tax', 'tax-depreciation', 'tax-loss-carry-forward'],
  },
  {
    id: 'permanent-establishment',
    category: 'tax',
    term: { fa: 'مقر دائم (PE)', en: 'Permanent Establishment (PE)' },
    def: {
      fa: 'محل ثابت کسب‌وکار، مانند شعبه، دفتر یا کارگاه، که شرکت خارجی از طریق آن در یک کشور فعالیت می‌کند؛ پروژه‌های ساخت، نصب یا خدمات حفاری که از مدت معینی طولانی‌تر شوند نیز ممکن است مقر دائم ایجاد کنند. سود منتسب به مقر دائم در همان کشور مشمول مالیات بر درآمد است؛ در عمان با نرخ عمومی شرکت‌ها. آستانه زمانی و شرایط دقیق را قانون داخلی و پیمان مالیاتی دو کشور تعیین می‌کند.',
      en: 'A fixed place of business, such as a branch, office or site, through which a foreign company operates in a country; construction, installation or drilling service projects that last beyond a set period may also create one. Profit attributable to the PE is taxed in that country, in Oman at the general corporate rate. The exact time thresholds and conditions come from domestic law and the relevant tax treaty.',
    },
    related: ['corporate-income-tax', 'withholding-tax'],
  },
  {
    id: 'withholding-tax',
    category: 'tax',
    term: { fa: 'مالیات تکلیفی (کسر در منبع)', en: 'Withholding Tax (WHT)' },
    def: {
      fa: 'مالیاتی که پرداخت‌کننده هنگام پرداخت از مبلغ کسر می‌کند و به نیابت از دریافت‌کننده به سازمان مالیاتی می‌پردازد. در عمان، طبق منابع حرفه‌ای سال 2026، برخی پرداخت‌ها به شرکت‌های خارجی بدون مقر دائم در عمان، مانند حق امتیاز، حق‌الزحمه مدیریت، هزینه استفاده از نرم‌افزار و برخی خدمات، مشمول 10 درصد مالیات تکلیفی از مبلغ ناخالص است. اگر پرداخت‌کننده این مالیات را کسر نکند، معمولاً خودش بدهکار آن می‌شود؛ فهرست و نرخ روز را بررسی کنید.',
      en: "Tax that the payer deducts from a payment and pays to the tax authority on the recipient's behalf. In Oman, as reported by professional guides in 2026, certain payments to foreign companies with no permanent establishment there, such as royalties, management fees, fees for using software and certain services, bear 10% withholding tax on the gross amount. If the payer fails to withhold, the tax usually becomes the payer's own liability; check the current list and rate.",
    },
    formula: {
      fa: 'مبلغ پرداختی به تأمین‌کننده = مبلغ ناخالص − مالیات تکلیفی',
      en: 'Net payment to supplier = Gross amount − Withholding tax',
    },
    related: ['permanent-establishment', 'salary-tax', 'accounts-payable'],
  },
  {
    id: 'tax-depreciation',
    category: 'tax',
    term: { fa: 'استهلاک مالیاتی', en: 'Tax Depreciation (Capital Allowances)' },
    def: {
      fa: 'استهلاکی که قانون مالیاتی برای کسر از درآمد مشمول مالیات می‌پذیرد و نرخ و روش آن معمولاً برای هر طبقه دارایی در قانون تعیین شده است. قانون عمان نیز برای طبقه‌هایی مانند ساختمان، خط لوله، ماشین‌آلات و تجهیزات حفاری نرخ‌های جداگانه دارد. تفاوت آن با استهلاک حسابداری یک تفاوت موقت است که مالیات انتقالی ایجاد می‌کند.',
      en: "The depreciation the tax law allows as a deduction from taxable income, usually at rates and methods the law sets for each asset class. Oman's law likewise sets separate rates for classes such as buildings, pipelines, machinery and drilling equipment. Its difference from book depreciation is a temporary difference that gives rise to deferred tax.",
    },
    related: ['depreciation', 'deferred-tax', 'taxable-income'],
  },
  {
    id: 'tax-loss-carry-forward',
    category: 'tax',
    term: { fa: 'انتقال زیان مالیاتی به سال‌های بعد', en: 'Tax Loss Carry-Forward' },
    def: {
      fa: 'اگر نتیجه مالیاتی یک سال زیان باشد، قانون معمولاً اجازه می‌دهد آن زیان از درآمد مشمول مالیات سال‌های بعد کسر شود. در عمان، طبق منابع حرفه‌ای سال 2026، این انتقال در حالت عادی حداکثر 5 سال است و انتقال به سال‌های قبل مجاز نیست؛ قواعد روز را بررسی کنید. زیان قابل انتقالی که احتمال استفاده از آن وجود دارد، دارایی مالیات انتقالی ایجاد می‌کند.',
      en: 'When a year ends with a tax loss, the law usually lets the business deduct it from the taxable income of later years. In Oman, as reported by professional guides in 2026, losses can normally be carried forward for up to 5 years and cannot be carried back; check the current rules. An unused loss that is likely to be used gives rise to a deferred tax asset.',
    },
    related: ['taxable-income', 'deferred-tax', 'corporate-income-tax'],
  },
  {
    id: 'deferred-tax',
    category: 'tax',
    term: { fa: 'مالیات انتقالی (مالیات معوق)', en: 'Deferred Tax' },
    def: {
      fa: 'اثر مالیاتی تفاوت‌های موقت میان مبلغ دفتری دارایی‌ها و بدهی‌ها و مبنای مالیاتی آن‌ها (IAS 12). اگر در آینده مالیات بیشتری پرداخت شود، مثلاً چون استهلاک مالیاتی از استهلاک دفتری جلوتر است، بدهی مالیات انتقالی ثبت می‌شود؛ و اگر کمتر پرداخت شود، مانند زیان قابل انتقال، دارایی مالیات انتقالی ثبت می‌شود، به شرط آنکه سود مشمول مالیات کافی در آینده محتمل باشد.',
      en: 'The tax effect of temporary differences between the carrying amounts of assets and liabilities and their tax bases (IAS 12). When more tax will be paid in the future, for example because tax depreciation runs ahead of book depreciation, a deferred tax liability is recognized; when less will be paid, as with unused tax losses, a deferred tax asset is recognized, provided enough future taxable profit is probable.',
    },
    formula: {
      fa: 'مالیات انتقالی = تفاوت موقت × نرخ مالیات',
      en: 'Deferred tax = Temporary difference × Tax rate',
    },
    related: ['tax-depreciation', 'tax-loss-carry-forward', 'corporate-income-tax'],
  },
  {
    id: 'vat-oman',
    category: 'tax',
    term: { fa: 'مالیات بر ارزش افزوده در عمان', en: 'Value Added Tax in Oman' },
    def: {
      fa: 'مالیات بر ارزش افزوده عمان بر پایه قانونی که با فرمان سلطانی 121/2020 صادر شد، از 16 آوریل 2021 اجرا می‌شود و سازمان مالیاتی عمان آن را اداره می‌کند. نرخ استاندارد آن 5 درصد است و برخی عرضه‌ها نرخ صفر دارند یا معاف‌اند؛ کسب‌وکاری که فروشش از آستانه ثبت‌نام بگذرد باید ثبت‌نام کند و اظهارنامه دوره‌ای بدهد. این ارقام طبق منابع حرفه‌ای سال 2026 است و ممکن است تغییر کند.',
      en: "Oman's VAT is charged under the VAT Law issued by Royal Decree 121/2020, has applied since 16 April 2021 and is administered by the Oman Tax Authority. The standard rate is 5%, with some supplies zero-rated or exempt; a business whose supplies exceed the registration threshold must register and file periodic returns. These figures are as reported by professional guides in 2026 and may change.",
    },
    related: ['vat', 'standard-rated-supply', 'vat-return'],
  },
  {
    id: 'standard-rated-supply',
    category: 'tax',
    term: { fa: 'عرضه مشمول نرخ استاندارد', en: 'Standard-Rated Supply' },
    def: {
      fa: 'فروش کالا یا خدمتی که مالیات بر ارزش افزوده با نرخ عادی قانون به آن تعلق می‌گیرد؛ بیشتر فروش‌های داخلی در این گروه‌اند. فروشنده مالیات فروش را روی صورت‌حساب می‌آورد و می‌تواند مالیات خریدهای مربوط را کسر کند.',
      en: 'A sale of goods or services charged with VAT at the normal statutory rate; most domestic sales fall in this group. The seller shows output VAT on the invoice and can recover the related input VAT.',
    },
    formula: {
      fa: 'مالیات فروش = مبلغ مشمول مالیات × نرخ استاندارد',
      en: 'Output VAT = Taxable amount × Standard rate',
    },
    related: ['zero-rated-supply', 'exempt-supply', 'output-vat'],
  },
  {
    id: 'zero-rated-supply',
    category: 'tax',
    term: { fa: 'عرضه با نرخ صفر', en: 'Zero-Rated Supply' },
    def: {
      fa: 'عرضه‌ای که مشمول مالیات بر ارزش افزوده است ولی نرخ آن صفر است: فروشنده از خریدار مالیاتی نمی‌گیرد، اما همچنان حق کسر مالیات خریدهای مربوط را دارد. صادرات معمولاً نرخ صفر دارد و قانون مالیات بر ارزش افزوده عمان نفت خام، فراورده‌های نفتی و گاز طبیعی را نیز در این گروه آورده است؛ فهرست دقیق را از قانون و آیین‌نامه روز بررسی کنید.',
      en: "A supply that is inside the VAT system but taxed at 0%: the seller charges the buyer no VAT yet keeps the right to recover input VAT on related purchases. Exports are usually zero-rated, and Oman's VAT Law also lists crude oil, petroleum products and natural gas in this group; check the exact list in the current law and regulations.",
    },
    related: ['exempt-supply', 'standard-rated-supply', 'input-tax-recovery'],
  },
  {
    id: 'exempt-supply',
    category: 'tax',
    term: { fa: 'عرضه معاف', en: 'Exempt Supply' },
    def: {
      fa: 'عرضه‌ای که بیرون از دایره مالیات بر ارزش افزوده است: فروشنده مالیاتی نمی‌گیرد و مالیات خریدهای مربوط را هم نمی‌تواند کسر کند، پس آن مالیات جزو بهای تمام‌شده او می‌شود. در عمان گروه‌هایی مانند برخی خدمات مالی، بهداشت و درمان و آموزش معاف‌اند. فرق اصلی آن با نرخ صفر همین از دست رفتن حق کسر مالیات خرید است.',
      en: 'A supply that sits outside the VAT charge: the seller charges no VAT and cannot recover the input VAT on related purchases, so that VAT becomes part of its cost. In Oman, groups such as certain financial services, healthcare and education are exempt. The key difference from zero-rating is exactly this loss of input VAT recovery.',
    },
    related: ['zero-rated-supply', 'input-tax-recovery'],
  },
  {
    id: 'input-tax-recovery',
    category: 'tax',
    term: { fa: 'کسر مالیات خرید (بازیافت مالیات ورودی)', en: 'Input Tax Recovery' },
    def: {
      fa: 'حق کسب‌وکار ثبت‌نام‌شده برای اینکه مالیات بر ارزش افزوده پرداختی روی خریدها را از مالیات فروش خود کسر کند. شرط‌های معمول: خرید برای عرضه‌های مشمول (از جمله نرخ صفر) به کار رود، صورت‌حساب مالیاتی معتبر موجود باشد و قلم در فهرست موارد غیرقابل کسر قانون نباشد. اگر خریدی هم برای عرضه مشمول و هم برای عرضه معاف به کار رود، فقط بخش متناسب آن کسر می‌شود.',
      en: "The right of a registered business to deduct the VAT it paid on purchases from its output VAT. The usual conditions: the purchase is used for taxable supplies (including zero-rated ones), a valid tax invoice is held, and the item is not on the law's list of blocked inputs. When a purchase serves both taxable and exempt supplies, only a proportionate share is recoverable.",
    },
    related: ['input-vat', 'tax-invoice', 'exempt-supply'],
  },
  {
    id: 'reverse-charge',
    category: 'tax',
    term: { fa: 'سازوکار محاسبه معکوس (Reverse charge)', en: 'Reverse Charge' },
    def: {
      fa: 'روشی که در آن خریدار ثبت‌نام‌شده، به جای فروشنده، مالیات بر ارزش افزوده را محاسبه و در اظهارنامه خود گزارش می‌کند؛ رایج‌ترین مورد، خدماتی است که از تأمین‌کننده خارجی ثبت‌نام‌نشده خریداری می‌شود، مانند خدمات مهندسی یا نرم‌افزار. خریدار همان مبلغ را به‌عنوان مالیات فروش ثبت می‌کند و اگر حق کسر داشته باشد، در همان اظهارنامه به‌عنوان مالیات خرید کسر می‌کند؛ پس اثر نقدی معمولاً صفر است، اما گزارش آن الزامی است.',
      en: 'A mechanism in which the registered buyer, instead of the seller, calculates VAT and reports it in its own return; the most common case is services bought from a foreign supplier that is not registered locally, such as engineering or software services. The buyer records the amount as output VAT and, if entitled, deducts it as input VAT in the same return, so the cash effect is often zero but reporting is mandatory.',
    },
    related: ['vat-return', 'input-tax-recovery', 'output-vat'],
  },
  {
    id: 'tax-invoice',
    category: 'tax',
    term: { fa: 'صورت‌حساب مالیاتی', en: 'Tax Invoice' },
    def: {
      fa: 'سندی که فروشنده ثبت‌نام‌شده برای عرضه مشمول مالیات صادر می‌کند و اطلاعاتی را که قانون تعیین کرده دارد: نام و شماره ثبت مالیاتی فروشنده (و در موارد لازم، خریدار)، تاریخ و شماره ردیف، شرح کالا یا خدمت، مبلغ مشمول مالیات، نرخ و مبلغ مالیات. خریدار بدون صورت‌حساب مالیاتی معتبر معمولاً نمی‌تواند مالیات خرید را کسر کند.',
      en: "The document a registered seller issues for a taxable supply, carrying the details the law requires: the seller's name and VAT number (and the buyer's where required), date and serial number, description of the goods or services, taxable amount, rate and VAT amount. Without a valid tax invoice the buyer usually cannot recover the input VAT.",
    },
    related: ['input-tax-recovery', 'e-invoicing', 'source-document'],
  },
  {
    id: 'vat-return',
    category: 'tax',
    term: { fa: 'اظهارنامه مالیات بر ارزش افزوده', en: 'VAT Return' },
    def: {
      fa: 'گزارشی که کسب‌وکار ثبت‌نام‌شده برای هر دوره مالیاتی به سازمان مالیاتی می‌دهد: جمع فروش‌ها به تفکیک نرخ استاندارد، نرخ صفر و معاف، مالیات فروش (از جمله مبالغ محاسبه معکوس)، مالیات خرید قابل کسر و خالص مبلغ پرداختنی یا قابل استرداد. ارقام آن باید با دفتر کل، به‌ویژه حساب‌های مالیات فروش و خرید، تطبیق داشته باشد.',
      en: 'The report a registered business files with the tax authority for each tax period: total sales split into standard-rated, zero-rated and exempt, output VAT (including reverse-charge amounts), recoverable input VAT and the net amount payable or refundable. Its figures must reconcile with the general ledger, especially the output and input VAT accounts.',
    },
    formula: {
      fa: 'خالص مالیات دوره = مالیات فروش (با احتساب محاسبه معکوس) − مالیات خرید قابل کسر',
      en: 'Net VAT for the period = Output VAT (including reverse charge) − Recoverable input VAT',
    },
    related: ['vat-oman', 'output-vat', 'input-vat'],
  },
  {
    id: 'e-invoicing',
    category: 'tax',
    term: { fa: 'صورت‌حساب الکترونیکی', en: 'E-Invoicing' },
    def: {
      fa: 'نظامی که در آن صورت‌حساب‌ها به شکل داده ساخت‌یافته صادر، ارسال و دریافت می‌شوند و اطلاعات آن‌ها هم‌زمان یا با فاصله کوتاه به سازمان مالیاتی می‌رسد. در عمان این برنامه «فوتره» (Fawtara) نام دارد، از طریق ارائه‌دهندگان خدمات تأییدشده کار می‌کند و به‌صورت مرحله‌ای، از مؤدیان بزرگ منتخب، اجرا می‌شود؛ زمان‌بندی مراحل را از اطلاعیه‌های روز سازمان مالیاتی عمان بررسی کنید.',
      en: "A system in which invoices are issued, sent and received as structured data, with their details reaching the tax authority in real time or shortly after. In Oman the programme is called Fawtara; it runs through accredited service providers and is being phased in, starting with selected large taxpayers. Check the Oman Tax Authority's latest announcements for the phase dates.",
    },
    related: ['structured-e-invoice', 'tax-invoice', 'vat-return'],
  },
  {
    id: 'structured-e-invoice',
    category: 'tax',
    term: { fa: 'صورت‌حساب الکترونیکی ساخت‌یافته', en: 'Structured E-Invoice' },
    def: {
      fa: 'صورت‌حسابی که به شکل داده استاندارد و ماشین‌خوان (معمولاً XML بر پایه استانداردی مانند UBL) ساخته می‌شود تا نرم‌افزار خریدار و سامانه مالیاتی بدون ورود دستی آن را بخوانند. فایل PDF یا تصویر اسکن‌شده‌ای که با ایمیل فرستاده می‌شود الکترونیکی است، اما ساخت‌یافته نیست. در ERP، داده‌های پایه درست (شماره مالیاتی، کد کالا، کد مالیاتی) شرط صدور صحیح آن است.',
      en: "An invoice built as standard, machine-readable data (typically XML based on a standard such as UBL), so the buyer's software and the tax system can read it without manual keying. A PDF or scanned image sent by email is electronic but not structured. In an ERP, accurate master data (tax numbers, item codes, tax codes) is a precondition for issuing it correctly.",
    },
    related: ['e-invoicing', 'tax-invoice', 'material-master'],
  },
  // ───────────────────────────── oilgas ─────────────────────────────
  {
    id: 'upstream',
    category: 'oilgas',
    term: { fa: 'بالادستی', en: 'Upstream' },
    def: {
      fa: 'بخش اکتشاف و تولید صنعت نفت و گاز: یافتن ذخایر، حفاری چاه‌ها، توسعه میدان و تولید نفت و گاز تا نقطه تحویل یا فروش. میان‌دستی به انتقال و ذخیره‌سازی (خط لوله، مخزن) و پایین‌دستی به پالایش، پخش و فروش می‌پردازد. حسابداری بالادستی موضوعات ویژه خود را دارد: مخارج اکتشاف، استهلاک بر پایه ذخایر، عملیات مشترک و قراردادهای نفتی.',
      en: 'The exploration and production (E&P) segment of the oil and gas industry: finding reserves, drilling wells, developing fields and producing oil and gas up to the point of delivery or sale. Midstream covers transport and storage (pipelines, tanks), and downstream covers refining, distribution and marketing. Upstream accounting has its own topics: exploration spending, reserve-based depletion, joint operations and petroleum contracts.',
    },
    related: ['exploration-and-evaluation', 'joint-operating-agreement', 'production-sharing-contract'],
  },
  {
    id: 'exploration-and-evaluation',
    category: 'oilgas',
    term: { fa: 'مخارج اکتشاف و ارزیابی (E&E)', en: 'Exploration and Evaluation (E&E) Expenditure' },
    def: {
      fa: 'مخارجی که پس از گرفتن حق قانونی اکتشاف و پیش از اثبات امکان‌پذیری فنی و تجاری بودن استخراج انجام می‌شود، مانند مطالعات زمین‌شناسی، لرزه‌نگاری، حفاری اکتشافی و آزمایش چاه (IFRS 6). شرکت باید رویه مشخصی برای سرمایه‌ای کردن یا هزینه کردن این مخارج انتخاب کند و به آن پایبند بماند. وقتی تجاری بودن میدان ثابت شد، دارایی E&E آزمون کاهش ارزش می‌شود و به دارایی‌های توسعه انتقال می‌یابد.',
      en: 'Costs incurred after obtaining the legal right to explore and before the technical feasibility and commercial viability of extraction are demonstrable, such as geological studies, seismic surveys, exploratory drilling and well testing (IFRS 6). A company must choose a policy on which of these costs it capitalizes and which it expenses, and apply it consistently. Once a field is shown to be commercial, the E&E asset is tested for impairment and transferred to development assets.',
    },
    related: ['successful-efforts-method', 'full-cost-method', 'impairment'],
  },
  {
    id: 'successful-efforts-method',
    category: 'oilgas',
    term: { fa: 'روش تلاش‌های موفق', en: 'Successful Efforts Method' },
    def: {
      fa: 'رویه حسابداری که فقط مخارجی را سرمایه‌ای می‌کند که به کشف ذخایر قابل تولید منجر شود؛ هزینه چاه اکتشافی خشک و معمولاً مطالعات عمومی زمین‌شناسی و ژئوفیزیک، هزینه همان دوره است. نتیجه آن سودی پرنوسان‌تر اما ترازنامه‌ای محتاطانه‌تر است و با قواعد عمومی IFRS سازگارتر است.',
      en: 'An accounting policy that capitalizes only the costs that lead to the discovery of producible reserves; the cost of a dry exploratory well, and usually general geological and geophysical studies, is expensed in the period. It produces more volatile profit but a more prudent balance sheet, and it sits more comfortably with general IFRS principles.',
    },
    related: ['full-cost-method', 'exploration-and-evaluation'],
  },
  {
    id: 'full-cost-method',
    category: 'oilgas',
    term: { fa: 'روش هزینه کامل', en: 'Full Cost Method' },
    def: {
      fa: 'رویه‌ای که همه مخارج اکتشاف و توسعه، چه به کشف برسد و چه به چاه خشک، در یک «استخر هزینه» (معمولاً برای هر کشور) سرمایه‌ای و سپس با روش واحد تولید مستهلک می‌شود. این روش در اصول پذیرفته‌شده حسابداری آمریکا (US GAAP) مجاز است؛ در IFRS کاربرد آن عملاً به مرحله اکتشاف و ارزیابی محدود است و پس از آن قواعد عمومی دارایی‌های ثابت مشهود اعمال می‌شود.',
      en: 'A policy in which all exploration and development costs, whether they lead to a discovery or a dry hole, are capitalized in a cost pool (usually one per country) and then depleted on a units-of-production basis. It is allowed under US GAAP; under IFRS its use is effectively limited to the exploration and evaluation stage, after which the general rules for property, plant and equipment apply.',
    },
    related: ['successful-efforts-method', 'depletion', 'exploration-and-evaluation'],
  },
  {
    id: 'depletion',
    category: 'oilgas',
    term: { fa: 'استهلاک ذخایر (تهی‌شدن)', en: 'Depletion' },
    def: {
      fa: 'تخصیص بهای تمام‌شده دارایی‌های نفت و گاز به دوره‌ها بر پایه مقدار تولید نسبت به ذخایر باقی‌مانده؛ همان روش واحد تولید که مبنای آن ذخایر (معمولاً ذخایر اثبات‌شده) است. با هر بشکه‌ای که تولید می‌شود بخشی از بهای میدان به هزینه منتقل می‌شود؛ پس اگر برآورد ذخایر تغییر کند، نرخ استهلاک دوره‌های بعد هم تغییر می‌کند.',
      en: "Allocating the cost of oil and gas assets to periods according to production relative to remaining reserves; it is the units-of-production method with reserves (usually proved reserves) as the base. Each barrel produced moves part of the field's cost to expense, so a change in the reserve estimate changes the depletion rate for later periods.",
    },
    formula: {
      fa: 'استهلاک دوره = (مبلغ دفتری دارایی − ارزش باقی‌مانده) × تولید دوره ÷ ذخایر ابتدای دوره',
      en: 'Depletion = (Carrying amount − Residual value) × Production for the period ÷ Reserves at the start of the period',
    },
    related: ['units-of-production-method', 'depreciation', 'full-cost-method'],
  },
  {
    id: 'decommissioning-provision',
    category: 'oilgas',
    term: { fa: 'ذخیره برچیدن تأسیسات و احیای محیط', en: 'Decommissioning Provision' },
    def: {
      fa: 'بدهی برآوردی برای تعهد به مسدود کردن چاه‌ها، برچیدن خطوط لوله و تأسیسات و احیای محیط در پایان عمر میدان (IAS 37). هنگام نصب، ارزش فعلی هزینه برآوردی به بهای تمام‌شده دارایی افزوده و هم‌زمان ذخیره ثبت می‌شود؛ سپس دارایی مستهلک می‌شود و ذخیره هر سال با آزاد شدن تنزیل، به‌عنوان هزینه مالی، افزایش می‌یابد.',
      en: "An estimated liability for the obligation to plug and abandon wells, remove pipelines and facilities and restore the site at the end of a field's life (IAS 37). At installation, the present value of the estimated cost is added to the asset's cost and a provision is recognized; the asset is then depreciated, and the provision grows each year as the discount unwinds, recorded as a finance cost.",
    },
    formula: {
      fa: 'هنگام شناسایی: بدهکار دارایی ثابت، بستانکار ذخیره برچیدن؛ هر سال: بدهکار هزینه مالی، بستانکار ذخیره برچیدن',
      en: 'On recognition: Dr Fixed asset, Cr Decommissioning provision; each year: Dr Finance cost, Cr Decommissioning provision',
    },
    related: ['provision', 'asset-cost', 'depletion'],
  },
  {
    id: 'joint-operating-agreement',
    category: 'oilgas',
    term: { fa: 'موافقت‌نامه عملیات مشترک (JOA)', en: 'Joint Operating Agreement (JOA)' },
    def: {
      fa: 'قرارداد میان شرکای یک بلوک یا میدان که قواعد همکاری آن‌ها را تعیین می‌کند: چه کسی اپراتور است، سهم مشارکت هر شریک، کمیته عملیاتی و نحوه رأی‌گیری، تصویب بودجه و AFE، درخواست تأمین وجه و رویه حسابداری مشترک. ERP باید بتواند هر هزینه را به حساب مشترک و سهم هر شریک تفکیک کند.',
      en: "The contract between the partners in a block or field that sets the rules of their cooperation: who the operator is, each partner's working interest, the operating committee and voting, approval of budgets and AFEs, cash calls and the joint accounting procedure. The ERP must be able to split every cost into the joint account and each partner's share.",
    },
    related: ['operator', 'working-interest', 'cash-call'],
  },
  {
    id: 'operator',
    category: 'oilgas',
    term: { fa: 'اپراتور (بهره‌بردار)', en: 'Operator' },
    def: {
      fa: 'شریکی که طبق موافقت‌نامه عملیات مشترک، عملیات روزانه را به نمایندگی از همه شرکا اداره می‌کند: قرارداد می‌بندد، خرید می‌کند، کارکنان را به کار می‌گیرد و هزینه‌ها را می‌پردازد. سپس سهم هر شریک را با صورت‌حساب مشارکت از او می‌گیرد؛ اصل کلی این است که اپراتور از نقش اپراتوری نه سود ببرد و نه زیان.',
      en: 'The partner that, under the joint operating agreement, runs day-to-day operations on behalf of all partners: it signs contracts, buys materials, employs staff and pays the costs. It then charges each partner its share through joint interest billing; the general principle is that the operator should neither profit nor lose from being operator.',
    },
    related: ['joint-operating-agreement', 'joint-interest-billing', 'cash-call'],
  },
  {
    id: 'working-interest',
    category: 'oilgas',
    term: { fa: 'سهم مشارکت (Working interest)', en: 'Working Interest' },
    def: {
      fa: 'درصد سهم هر شریک از حقوق و تعهدات عملیات مشترک؛ شریک به همین نسبت هزینه‌ها را می‌پردازد و از تولید سهم می‌برد، مگر قرارداد ترتیب دیگری گذاشته باشد. در گزارشگری IFRS برای عملیات مشترک، هر شریک سهم خود از دارایی‌ها، بدهی‌ها، درآمدها و هزینه‌ها را در دفاتر خود شناسایی می‌کند.',
      en: "Each partner's percentage share of the rights and obligations of a joint operation; the partner pays costs and takes production in that proportion unless the contract says otherwise. Under IFRS for joint operations, each partner recognizes its share of the assets, liabilities, revenue and expenses in its own books.",
    },
    formula: {
      fa: 'سهم شریک از هزینه = کل هزینه حساب مشترک × درصد سهم مشارکت',
      en: "Partner's share of cost = Total joint account cost × Working interest %",
    },
    related: ['joint-operating-agreement', 'cash-call', 'joint-interest-billing'],
  },
  {
    id: 'afe',
    category: 'oilgas',
    term: { fa: 'مجوز صرف هزینه (AFE)', en: 'Authorisation for Expenditure (AFE)' },
    def: {
      fa: 'سندی که بودجه یک کار مشخص، مانند حفاری چاه AR-07 یا ساخت یک خط لوله، را پیشنهاد و پس از تصویب (در عملیات مشترک، تصویب شرکا) مجاز می‌کند. هر هزینه مربوط با شماره AFE ثبت می‌شود تا هزینه واقعی با بودجه مقایسه شود و اگر از حد توافق‌شده بیشتر شد، AFE تکمیلی لازم باشد. ثبت درست هزینه روی AFE یکی از پایه‌های اثبات قابل بازیافت بودن آن است.',
      en: 'A document that proposes and, once approved (by the partners in a joint operation), authorizes the budget for a specific job, such as drilling well AR-07 or building a pipeline. Every related cost is recorded against the AFE number so actual spending can be compared with the budget, and an overrun beyond the agreed limit needs a supplementary AFE. Booking costs to the right AFE is one of the foundations for proving that a cost is recoverable.',
    },
    related: ['joint-operating-agreement', 'recoverable-cost', 'capital-expenditure'],
  },
  {
    id: 'cash-call',
    category: 'oilgas',
    term: { fa: 'درخواست تأمین وجه (Cash call)', en: 'Cash Call' },
    def: {
      fa: 'درخواستی که اپراتور، معمولاً ماهانه و بر پایه بودجه و AFEهای مصوب، برای پیش‌پرداخت سهم هر شریک از نیاز نقدی دوره بعد می‌فرستد. شریک غیراپراتور مبلغ پرداختی را ابتدا به‌عنوان پیش‌پرداخت به اپراتور (دارایی) ثبت می‌کند و وقتی صورت‌حساب مشارکت هزینه واقعی را نشان داد، آن را با هزینه یا دارایی مربوط تسویه می‌کند.',
      en: "A request the operator sends, usually monthly and based on the approved budget and AFEs, for each partner to advance its share of the next period's cash needs. A non-operating partner first records the payment as an advance to the operator (an asset) and clears it against the related expense or asset once joint interest billing shows the actual costs.",
    },
    formula: {
      fa: 'پرداخت: بدهکار پیش‌پرداخت به اپراتور، بستانکار موجودی نقد؛ دریافت صورت‌حساب: بدهکار هزینه یا دارایی، بستانکار پیش‌پرداخت به اپراتور',
      en: 'On payment: Dr Advance to operator, Cr Cash; on billing: Dr Expense or asset, Cr Advance to operator',
    },
    related: ['working-interest', 'joint-interest-billing', 'operator'],
  },
  {
    id: 'joint-interest-billing',
    category: 'oilgas',
    term: { fa: 'صورت‌حساب مشارکت (JIB)', en: 'Joint Interest Billing (JIB)' },
    def: {
      fa: 'صورت‌حساب دوره‌ای (معمولاً ماهانه) که اپراتور برای هر شریک می‌فرستد و هزینه‌های واقعی حساب مشترک را به تفکیک AFE، مرکز هزینه و نوع هزینه، سهم آن شریک بر پایه سهم مشارکت و تسویه آن با درخواست‌های وجه قبلی نشان می‌دهد. شرکا معمولاً حق حسابرسی این صورت‌حساب‌ها را دارند، پس هر قلم باید مدرک پشتوانه داشته باشد.',
      en: "The periodic (usually monthly) statement the operator sends each partner, showing the actual costs of the joint account by AFE, cost centre and cost type, that partner's share based on its working interest, and the offset against earlier cash calls. Partners usually have audit rights over these billings, so every line needs supporting documents.",
    },
    related: ['operator', 'cash-call', 'working-interest'],
  },
  {
    id: 'production-sharing-contract',
    category: 'oilgas',
    term: { fa: 'قرارداد مشارکت در تولید (PSC / EPSA)', en: 'Production Sharing Contract (PSC / EPSA)' },
    def: {
      fa: 'قراردادی که در آن مالکیت نفت و گاز نزد دولت می‌ماند و پیمانکار با سرمایه و ریسک خود اکتشاف و توسعه را انجام می‌دهد؛ اگر تولید آغاز شود، پیمانکار هزینه‌های قابل بازیافت را از بخشی از تولید (نفت هزینه) برمی‌دارد و باقی‌مانده (نفت سود) میان او و دولت تقسیم می‌شود. در عمان این قراردادها با نام «موافقت‌نامه اکتشاف و مشارکت در تولید» (EPSA) شناخته می‌شوند. سقف‌ها و نسبت‌های تقسیم را هر قرارداد جداگانه تعیین می‌کند.',
      en: 'A contract in which the state keeps ownership of the oil and gas and the contractor carries out exploration and development with its own capital and at its own risk; if production starts, the contractor recovers its recoverable costs from part of the production (cost oil) and the rest (profit oil) is shared with the state. In Oman these contracts are known as Exploration and Production Sharing Agreements (EPSAs). Ceilings and split percentages are set by each individual contract.',
    },
    related: ['cost-recovery', 'cost-oil', 'profit-oil'],
  },
  {
    id: 'buy-back-contract',
    category: 'oilgas',
    term: { fa: 'قرارداد بیع متقابل', en: 'Buy-Back Contract' },
    def: {
      fa: 'قرارداد خدماتی که ایران از دهه 1990 میلادی برای توسعه میدان‌ها به کار برده است: پیمانکار سرمایه و عملیات توسعه را تأمین می‌کند، میدان را پس از تکمیل به شرکت ملی نفت ایران تحویل می‌دهد و هزینه‌های سرمایه‌ای و غیرسرمایه‌ای، هزینه تأمین مالی و یک پاداش توافق‌شده را در دوره‌ای معین از محل تولید یا درآمد میدان دریافت می‌کند. پیمانکار مالک ذخایر نمی‌شود و در تولید بلندمدت میدان سهمی ندارد.',
      en: "A service-type contract Iran has used since the 1990s to develop fields: the contractor funds and carries out the development, hands the field over to the National Iranian Oil Company (NIOC) on completion, and is repaid its capital and non-capital costs, financing costs and an agreed remuneration fee over a set period from the field's production or revenue. The contractor never owns the reserves and has no share in the field's long-term production.",
    },
    related: ['ipc-contract', 'production-sharing-contract', 'cost-recovery'],
  },
  {
    id: 'ipc-contract',
    category: 'oilgas',
    term: { fa: 'قرارداد نفتی ایران (IPC)', en: 'Iran Petroleum Contract (IPC)' },
    def: {
      fa: 'الگوی قراردادی جدیدتر ایران که در دهه 2010 میلادی برای جایگزینی بیع متقابل در پروژه‌های تازه معرفی شد. به‌طور کلی مدت طولانی‌تری دارد و می‌تواند اکتشاف، توسعه و تولید را پوشش دهد؛ پیمانکار خارجی معمولاً همراه یک شرکت اکتشاف و تولید ایرانی کار می‌کند و هزینه‌ها و دستمزدی وابسته به تولید را از محل تولید میدان دریافت می‌کند. جزئیات هر قرارداد متفاوت است و باید از متن مصوب همان قرارداد خوانده شود.',
      en: "A newer Iranian contract model, introduced in the 2010s to replace buy-back for new projects. In general it runs for a longer term and can cover exploration, development and production; the foreign contractor usually works alongside an Iranian exploration and production company and is paid its costs and a production-linked fee out of the field's output. Terms differ from contract to contract and must be read from the approved contract itself.",
    },
    related: ['buy-back-contract', 'production-sharing-contract', 'cost-recovery'],
  },
  {
    id: 'cost-recovery',
    category: 'oilgas',
    term: { fa: 'بازیافت هزینه (کاست ریکاوری)', en: 'Cost Recovery' },
    def: {
      fa: 'سازوکاری در قراردادهای نفتی که پیمانکار با آن هزینه‌های قابل بازیافت خود را از محل تولید یا درآمد میدان پس می‌گیرد. در قرارداد مشارکت در تولید ترتیب معمول چنین است: نخست بهره مالکانه دولت (اگر باشد)، سپس نفت هزینه تا سقف قرارداد و در پایان تقسیم نفت سود. هزینه‌ای که با شیء هزینه درست (چاه، AFE، مرکز هزینه) و مدرک پشتوانه ثبت نشده باشد، ممکن است در حسابرسی طرف دولتی رد شود.',
      en: "The mechanism in petroleum contracts by which the contractor gets back its recoverable costs out of the field's production or revenue. In a production sharing contract the usual order is: the government royalty first (if any), then cost oil up to the contract ceiling, and finally the profit oil split. A cost not booked to the right cost object (well, AFE, cost centre) with supporting documents may be rejected in the government audit.",
    },
    related: ['recoverable-cost', 'cost-oil', 'cost-recovery-ceiling'],
  },
  {
    id: 'cost-oil',
    category: 'oilgas',
    term: { fa: 'نفت هزینه (Cost oil)', en: 'Cost Oil' },
    def: {
      fa: 'بخشی از تولید که به پیمانکار داده می‌شود تا هزینه‌های قابل بازیافت او جبران شود. مقدار آن در هر دوره برابر عدد کوچک‌تر از این دو است: هزینه‌های قابل بازیافت در انتظار (هزینه‌های این دوره به‌علاوه مانده منتقل‌شده) و سقف بازیافت هزینه.',
      en: "The part of production allocated to the contractor to reimburse its recoverable costs. In each period it equals the lower of two amounts: the recoverable costs awaiting recovery (this period's costs plus any balance carried forward) and the cost-recovery ceiling.",
    },
    formula: {
      fa: 'نفت هزینه = کمینه (هزینه‌های قابل بازیافت دوره + مانده منتقل‌شده، سقف بازیافت هزینه)',
      en: 'Cost oil = MIN(Recoverable costs this period + Unrecovered balance brought forward, Cost-recovery ceiling)',
    },
    related: ['cost-recovery-ceiling', 'profit-oil', 'recoverable-cost'],
  },
  {
    id: 'profit-oil',
    category: 'oilgas',
    term: { fa: 'نفت سود (Profit oil)', en: 'Profit Oil' },
    def: {
      fa: 'تولیدی که پس از کسر بهره مالکانه و نفت هزینه باقی می‌ماند و طبق قرارداد میان دولت و پیمانکار تقسیم می‌شود. نسبت تقسیم ممکن است ثابت باشد یا با سطح تولید یا شاخص سودآوری پیمانکار تغییر کند.',
      en: "The production left after royalty and cost oil, which is split between the state and the contractor as the contract specifies. The split may be fixed or may change with production levels or with a measure of the contractor's profitability.",
    },
    formula: {
      fa: 'نفت سود = ارزش تولید − بهره مالکانه − نفت هزینه؛ سهم پیمانکار = نفت سود × درصد سهم پیمانکار',
      en: "Profit oil = Production value − Royalty − Cost oil; Contractor's share = Profit oil × Contractor's split %",
    },
    related: ['cost-oil', 'production-sharing-contract', 'royalty'],
  },
  {
    id: 'cost-recovery-ceiling',
    category: 'oilgas',
    term: { fa: 'سقف بازیافت هزینه (سقف نفت هزینه)', en: 'Cost-Recovery Ceiling (Cost Oil Cap)' },
    def: {
      fa: 'حداکثر بخشی از تولید (معمولاً درصدی از تولید یا از تولید خالص پس از بهره مالکانه) که در هر دوره می‌تواند صرف بازیافت هزینه شود. این سقف تضمین می‌کند دولت از همان آغاز تولید سهمی بگیرد؛ هزینه‌ای که بیش از سقف باشد از بین نمی‌رود و به دوره بعد منتقل می‌شود. درصد سقف را هر قرارداد تعیین می‌کند.',
      en: 'The maximum share of production (usually a percentage of production, or of net production after royalty) that can go to cost recovery in a period. It ensures the state receives a share from the start of production; costs above the ceiling are not lost but carried forward. Each contract sets its own percentage.',
    },
    formula: {
      fa: 'سقف بازیافت هزینه = ارزش تولید خالص (پس از بهره مالکانه) × درصد سقف',
      en: 'Cost-recovery ceiling = Net production value (after royalty) × Ceiling %',
    },
    related: ['cost-oil', 'unrecovered-cost-carry-forward', 'cost-recovery'],
  },
  {
    id: 'recoverable-cost',
    category: 'oilgas',
    term: { fa: 'هزینه قابل بازیافت', en: 'Recoverable Cost' },
    def: {
      fa: 'هزینه‌ای که قرارداد نفتی اجازه بازیافت آن را از محل تولید می‌دهد؛ معمولاً به این شرط که در محدوده قرارداد باشد، در بودجه یا AFE مصوب آمده باشد، با شیء هزینه درست و مدرک پشتوانه ثبت شده باشد و در فهرست هزینه‌های غیرقابل بازیافت قرارداد (مانند جریمه‌ها) نباشد. ERP باید هر هزینه را از لحظه ایجاد با نشانه قابل بازیافت یا غیرقابل بازیافت ثبت کند.',
      en: "A cost that the petroleum contract allows to be recovered from production, usually provided it falls within the contract scope, is in an approved budget or AFE, is booked to the right cost object with supporting documents and is not on the contract's list of non-recoverable costs (such as fines). The ERP should flag every cost as recoverable or non-recoverable from the moment it is created.",
    },
    related: ['cost-recovery', 'afe', 'work-order-settlement'],
  },
  {
    id: 'unrecovered-cost-carry-forward',
    category: 'oilgas',
    term: { fa: 'انتقال هزینه‌های بازیافت‌نشده به دوره بعد', en: 'Carry-Forward of Unrecovered Costs' },
    def: {
      fa: 'وقتی هزینه‌های قابل بازیافت یک دوره از سقف بازیافت بیشتر باشد، مانده آن به دوره‌های بعد منتقل و از نفت هزینه آن دوره‌ها بازیافت می‌شود. این مانده باید در یک دفتر معین جداگانه (به تفکیک دوره و نوع هزینه) پیگیری شود؛ اگر قرارداد پیش از بازیافت کامل به پایان برسد، ریسک آن معمولاً با پیمانکار است.',
      en: 'When recoverable costs in a period exceed the cost-recovery ceiling, the excess is carried forward and recovered from the cost oil of later periods. The balance must be tracked in a separate subsidiary record (by period and cost type); if the contract ends before full recovery, the risk usually stays with the contractor.',
    },
    formula: {
      fa: 'مانده منتقل به دوره بعد = هزینه‌های قابل بازیافت در انتظار − نفت هزینه دوره',
      en: 'Balance carried forward = Recoverable costs awaiting recovery − Cost oil for the period',
    },
    related: ['cost-recovery-ceiling', 'cost-oil', 'recoverable-cost'],
  },
  {
    id: 'royalty',
    category: 'oilgas',
    term: { fa: 'بهره مالکانه (Royalty)', en: 'Royalty' },
    def: {
      fa: 'سهمی از تولید یا ارزش تولید که به‌عنوان مالک منابع به دولت تعلق می‌گیرد و معمولاً پیش از بازیافت هزینه و تقسیم نفت سود کسر می‌شود. معمولاً درصدی از تولید ناخالص است، پس حتی در دوره‌ای که پیمانکار سودی ندارد پرداخت می‌شود؛ برخی قراردادها بهره مالکانه جداگانه ندارند.',
      en: 'A share of production, or of its value, that goes to the state as owner of the resource, usually taken before cost recovery and the profit oil split. It is typically a percentage of gross production, so it is paid even in periods when the contractor makes no profit; some contracts have no separate royalty.',
    },
    formula: {
      fa: 'بهره مالکانه = ارزش تولید ناخالص × نرخ بهره مالکانه',
      en: 'Royalty = Gross production value × Royalty rate',
    },
    related: ['production-sharing-contract', 'cost-oil', 'profit-oil'],
  },
  // ───────────────────────────── warehouse ─────────────────────────────
  {
    id: 'material-master',
    category: 'warehouse',
    term: { fa: 'داده پایه کالا (Material master)', en: 'Material Master' },
    def: {
      fa: 'رکورد اصلی هر کالا در ERP که همه واحدها از آن استفاده می‌کنند: کد و شرح کالا، واحد اندازه‌گیری، گروه کالا، مشخصات فنی، روش ارزش‌گذاری، حساب‌های دفتر کل مرتبط و پارامترهای برنامه‌ریزی مانند نقطه سفارش. داده پایه یک بار ساخته می‌شود و در هزاران سند به کار می‌رود؛ پس یک اشتباه در آن (مثلاً واحد یا حساب نادرست) در همه رسیدها، حواله‌ها و ثبت‌های مالی تکرار می‌شود.',
      en: 'The central ERP record for each item, used by every department: code and description, unit of measure, material group, technical specifications, valuation method, linked general ledger accounts and planning parameters such as the reorder point. It is created once and reused in thousands of documents, so one error in it (a wrong unit or account, say) repeats in every receipt, issue and financial posting.',
    },
    related: ['material-code', 'unit-of-measure', 'moving-average-price'],
  },
  {
    id: 'material-code',
    category: 'warehouse',
    term: { fa: 'کد کالا', en: 'Material Code (Item Number)' },
    def: {
      fa: 'شناسه یکتایی که ERP برای هر کالا در داده پایه کالا نگه می‌دارد و همه اسناد با آن به کالا اشاره می‌کنند. کدگذاری خوب ساده و بدون تکرار است: هر کالا فقط یک کد دارد و شرح استاندارد (نوع، اندازه، جنس، استاندارد ساخت) جلوی ساخته شدن کد دوم برای همان قطعه را می‌گیرد.',
      en: 'The unique identifier the ERP holds for each item in the material master, used by every document to refer to it. Good coding is simple and free of duplicates: each item has exactly one code, and a standard description (type, size, material, manufacturing standard) prevents a second code from being created for the same part.',
    },
    related: ['material-master', 'account-coding'],
  },
  {
    id: 'unit-of-measure',
    category: 'warehouse',
    term: { fa: 'واحد اندازه‌گیری (UoM)', en: 'Unit of Measure (UoM)' },
    def: {
      fa: 'واحدی که مقدار کالا با آن شمرده می‌شود، مانند عدد، متر، کیلوگرم، بشکه یا شاخه لوله. ERP برای هر کالا یک واحد پایه در انبار نگه می‌دارد و برای خرید یا حواله ضریب تبدیل تعریف می‌کند (مثلاً خرید بر حسب کارتن و حواله بر حسب عدد)؛ ضریب تبدیل نادرست، مقدار و ارزش موجودی را مستقیماً غلط می‌کند.',
      en: 'The unit in which an item is counted, such as each, metre, kilogram, drum or joint of pipe. The ERP keeps one base unit per item for stock and defines conversion factors for purchasing or issuing (for example, bought by the carton and issued by the piece); a wrong conversion factor directly misstates both quantity and value.',
    },
    formula: {
      fa: 'مقدار به واحد پایه = مقدار به واحد خرید × ضریب تبدیل',
      en: 'Quantity in base unit = Quantity in purchase unit × Conversion factor',
    },
    related: ['material-master', 'goods-issue'],
  },
  {
    id: 'storage-location',
    category: 'warehouse',
    term: { fa: 'محل نگهداری (Storage location)', en: 'Storage Location' },
    def: {
      fa: 'تقسیم فیزیکی یا منطقی انبار در ERP که موجودی در سطح آن نگهداری و گزارش می‌شود، مانند انبار مرکزی، انبار میدان یا محوطه لوله‌ها. هر رسید، حواله و انتقال باید محل نگهداری مشخص داشته باشد تا بدانیم کالا دقیقاً کجاست و مسئول آن کیست.',
      en: 'A physical or logical subdivision of a warehouse in the ERP at which stock is held and reported, such as the Central Warehouse, the Field Warehouse or the pipe yard. Every receipt, issue and transfer must name a storage location so the system knows exactly where the stock is and who is responsible for it.',
    },
    related: ['bin', 'stock-transfer', 'goods-receipt'],
  },
  {
    id: 'bin',
    category: 'warehouse',
    term: { fa: 'جایگاه قفسه (Bin)', en: 'Bin (Bin Location)' },
    def: {
      fa: 'کوچک‌ترین نشانی نگهداری در انبار، مانند «ردیف 3، قفسه B، طبقه 2»، که جای دقیق کالا را درون محل نگهداری مشخص می‌کند. ثبت جایگاه قفسه، برداشت کالا، چیدن آن پس از رسید و شمارش چرخشی را سریع و دقیق می‌کند.',
      en: 'The smallest storage address in a warehouse, such as "aisle 3, rack B, shelf 2", that pinpoints where an item sits within a storage location. Recording bins makes picking, put-away after receipt and cycle counting fast and accurate.',
    },
    related: ['storage-location', 'cycle-count'],
  },
  {
    id: 'goods-receipt',
    category: 'warehouse',
    term: { fa: 'رسید انبار (Goods receipt)', en: 'Goods Receipt (GR)' },
    def: {
      fa: 'سندی که ورود کالا به انبار را، معمولاً با ارجاع به سفارش خرید، ثبت می‌کند و مقدار و ارزش موجودی را افزایش می‌دهد. در ERP رسید انبار خودکار ثبت مالی ایجاد می‌کند: بدهکار موجودی کالا و بستانکار حساب واسط رسید کالا و فاکتور (GR/IR)، به قیمت سفارش خرید.',
      en: 'The document that records goods entering the warehouse, usually with reference to a purchase order, increasing stock quantity and value. In an ERP it automatically creates a financial posting: debit Inventory and credit the GR/IR clearing account, at the purchase order price.',
    },
    formula: {
      fa: 'بدهکار موجودی کالا، بستانکار حساب واسط رسید کالا و فاکتور (GR/IR)',
      en: 'Dr Inventory, Cr GR/IR clearing account',
    },
    related: ['purchase-order', 'gr-ir-clearing-account', 'quality-inspection-stock'],
  },
  {
    id: 'goods-issue',
    category: 'warehouse',
    term: { fa: 'حواله انبار (Goods issue)', en: 'Goods Issue (GI)' },
    def: {
      fa: 'سندی که خروج کالا از انبار را ثبت می‌کند، مثلاً برای یک دستور کار نگهداری، حفاری یک چاه یا یک پروژه، و موجودی را کاهش می‌دهد. ERP خودکار شیء هزینه حواله (دستور کار، AFE یا مرکز هزینه) را بدهکار و موجودی کالا را به قیمت ارزش‌گذاری بستانکار می‌کند؛ انتخاب شیء هزینه درست برای بازیافت هزینه حیاتی است.',
      en: "The document that records goods leaving the warehouse, for example to a maintenance work order, the drilling of a well or a project, reducing stock. The ERP automatically debits the cost object on the issue (work order, AFE or cost centre) and credits Inventory at the item's valuation price; choosing the right cost object is vital for cost recovery.",
    },
    formula: {
      fa: 'بدهکار شیء هزینه (دستور کار، AFE یا مرکز هزینه)، بستانکار موجودی کالا',
      en: 'Dr Cost object (work order, AFE or cost centre), Cr Inventory',
    },
    related: ['reservation', 'maintenance-work-order', 'recoverable-cost'],
  },
  {
    id: 'reservation',
    category: 'warehouse',
    term: { fa: 'رزرو کالا', en: 'Reservation' },
    def: {
      fa: 'درخواستی در ERP که مقدار مشخصی از یک کالا را برای تاریخ و مصرف معینی، مانند یک دستور کار یا AFE، کنار می‌گذارد تا به مصرف دیگری نرسد. رزرو ثبت مالی ندارد و موجودی فیزیکی را کم نمی‌کند؛ فقط موجودی در دسترس را کاهش می‌دهد تا هنگام حواله، کالا آماده باشد.',
      en: 'A request in the ERP that sets aside a quantity of an item for a given date and purpose, such as a work order or an AFE, so it is not used elsewhere. A reservation creates no financial posting and does not reduce stock on hand; it only reduces available stock so the item is ready when it is issued.',
    },
    related: ['goods-issue', 'maintenance-work-order', 'safety-stock'],
  },
  {
    id: 'stock-transfer',
    category: 'warehouse',
    term: { fa: 'انتقال بین انبارها', en: 'Stock Transfer' },
    def: {
      fa: 'جابه‌جایی کالا از یک محل نگهداری یا انبار به دیگری، مثلاً از انبار مرکزی به انبار میدان. اگر هر دو محل در یک واحد ارزش‌گذاری باشند معمولاً ثبت مالی ندارد؛ اما میان دو واحد ارزش‌گذاری یا دو شرکت، ERP ثبت حسابداری ایجاد می‌کند و کالای در راه باید تا رسیدن به مقصد پیگیری شود.',
      en: 'Moving stock from one storage location or warehouse to another, for example from the Central Warehouse to the Field Warehouse. Within one valuation unit it usually has no financial posting; between valuation units or companies the ERP creates an accounting entry, and stock in transit must be tracked until it reaches its destination.',
    },
    related: ['storage-location', 'goods-issue', 'goods-receipt'],
  },
  {
    id: 'quality-inspection-stock',
    category: 'warehouse',
    term: { fa: 'موجودی در انتظار بازرسی (قرنطینه)', en: 'Quality-Inspection Stock' },
    def: {
      fa: 'کالایی که رسیده است اما تا تأیید بازرسی کیفی، مانند کنترل گواهی آزمون مواد (MTC) یا آزمون ابعادی لوله، قابل مصرف نیست. ERP آن را در وضعیت جداگانه نگه می‌دارد: دارایی شرکت و جزو موجودی ثبت‌شده است، ولی تا بازرسی آن را آزاد یا رد نکند، برای رزرو و حواله در دسترس نیست.',
      en: 'Goods that have been received but cannot be used until quality inspection approves them, for example by checking the mill test certificate (MTC) or the dimensions of pipe. The ERP holds them in a separate stock status: they are owned and recorded in inventory, but not available for reservation or issue until inspection releases or rejects them.',
    },
    related: ['goods-receipt', 'octg', 'critical-spares'],
  },
  {
    id: 'cycle-count',
    category: 'warehouse',
    term: { fa: 'شمارش چرخشی (Cycle count)', en: 'Cycle Count' },
    def: {
      fa: 'شمارش بخش کوچکی از اقلام انبار در فواصل منظم، به جای شمارش همه اقلام در یک روز، به گونه‌ای که در طول سال همه اقلام شمرده شوند. اقلام گروه A و قطعات حیاتی بیشتر شمرده می‌شوند. مغایرت‌ها بررسی و پس از تأیید با سند تعدیل انبار اصلاح می‌شوند که ثبت مالی سود یا زیان موجودی ایجاد می‌کند.',
      en: 'Counting a small portion of warehouse items at regular intervals, instead of everything on one day, so that every item is counted over the year. Class A items and critical spares are counted more often. Differences are investigated and, once approved, corrected with an inventory adjustment document that posts an inventory gain or loss.',
    },
    related: ['physical-inventory', 'abc-analysis', 'bin'],
  },
  {
    id: 'physical-inventory',
    category: 'warehouse',
    term: { fa: 'انبارگردانی', en: 'Physical Inventory (Stocktake)' },
    def: {
      fa: 'شمارش فیزیکی همه یا بخشی از موجودی و مقایسه آن با مانده دفتری ERP، معمولاً در پایان سال مالی و با حضور حسابرس. مقدار شمرده‌شده ملاک است: کسری یا اضافی پس از بررسی علت و تأیید، با سند تعدیل ثبت می‌شود.',
      en: 'Physically counting all or part of the stock and comparing it with the ERP book balance, usually at year-end and observed by the auditor. The counted quantity prevails: after the cause of any shortage or surplus is investigated and approved, it is posted with an adjustment document.',
    },
    formula: {
      fa: 'کسری انبار: بدهکار زیان کسری موجودی، بستانکار موجودی کالا',
      en: 'Stock shortage: Dr Inventory shortage loss, Cr Inventory',
    },
    related: ['cycle-count', 'perpetual-inventory-system', 'inventory'],
  },
  {
    id: 'abc-analysis',
    category: 'warehouse',
    term: { fa: 'تحلیل ABC', en: 'ABC Analysis' },
    def: {
      fa: 'طبقه‌بندی کالاها بر پایه ارزش مصرف سالانه: گروه A اقلام معدودی است که بیشتر ارزش را می‌سازند، گروه C اقلام فراوان کم‌ارزش و گروه B میان این دو. گروه A کنترل، شمارش و برنامه‌ریزی دقیق‌تری می‌گیرد؛ در نفت و گاز، درجه حیاتی بودن کالا هم کنار ارزش آن در نظر گرفته می‌شود، چون یک قطعه ارزان ممکن است کل تولید را متوقف کند.',
      en: 'Classifying items by annual consumption value: class A is the few items that make up most of the value, class C the many low-value items, and class B those in between. Class A gets tighter control, counting and planning; in oil and gas, criticality is weighed alongside value, because a cheap part can stop production.',
    },
    formula: {
      fa: 'ارزش مصرف سالانه = مقدار مصرف سالانه × قیمت واحد',
      en: 'Annual consumption value = Annual usage × Unit price',
    },
    related: ['cycle-count', 'critical-spares', 'criticality'],
  },
  {
    id: 'safety-stock',
    category: 'warehouse',
    term: { fa: 'موجودی اطمینان', en: 'Safety Stock' },
    def: {
      fa: 'مقداری موجودی که بیش از مصرف مورد انتظار در زمان تأمین نگه داشته می‌شود تا نوسان مصرف یا تأخیر در رسیدن کالا را پوشش دهد. موجودی اطمینان بیشتر احتمال کمبود را کم می‌کند، اما سرمایه بیشتری را در انبار نگه می‌دارد.',
      en: 'Extra stock held above the expected usage during the lead time to cover swings in demand or late deliveries. More safety stock lowers the risk of a stock-out but ties up more capital in the warehouse.',
    },
    formula: {
      fa: 'روش ساده: موجودی اطمینان = (بیشترین مصرف روزانه × بیشترین زمان تأمین) − (میانگین مصرف روزانه × میانگین زمان تأمین)',
      en: 'Simple method: Safety stock = (Max daily usage × Max lead time) − (Average daily usage × Average lead time)',
    },
    related: ['reorder-point', 'economic-order-quantity', 'critical-spares'],
  },
  {
    id: 'reorder-point',
    category: 'warehouse',
    term: { fa: 'نقطه سفارش', en: 'Reorder Point (ROP)' },
    def: {
      fa: 'سطحی از موجودی در دسترس که وقتی موجودی به آن برسد باید سفارش تازه داده شود تا کالا پیش از تمام شدن برسد. ERP معمولاً با رسیدن موجودی به این سطح، درخواست خرید را خودکار پیشنهاد یا ایجاد می‌کند.',
      en: 'The level of available stock at which a new order must be placed so the goods arrive before stock runs out. When stock reaches this level, the ERP usually proposes or creates a purchase requisition automatically.',
    },
    formula: {
      fa: 'نقطه سفارش = میانگین مصرف روزانه × زمان تأمین (روز) + موجودی اطمینان',
      en: 'Reorder point = Average daily usage × Lead time (days) + Safety stock',
    },
    related: ['safety-stock', 'purchase-requisition', 'economic-order-quantity'],
  },
  {
    id: 'economic-order-quantity',
    category: 'warehouse',
    term: { fa: 'مقدار اقتصادی سفارش (EOQ)', en: 'Economic Order Quantity (EOQ)' },
    def: {
      fa: 'مقدار هر سفارش که جمع سالانه هزینه سفارش‌دهی (هزینه ثابت هر سفارش) و هزینه نگهداری موجودی را به کمترین مقدار می‌رساند. سفارش‌های کوچک‌تر هزینه نگهداری را کم و تعداد سفارش‌ها را زیاد می‌کنند و سفارش‌های بزرگ‌تر برعکس؛ EOQ نقطه تعادل این دو است.',
      en: 'The order size that minimizes the yearly total of ordering costs (the fixed cost of each order) and holding costs. Smaller orders cut holding costs but increase the number of orders, and larger orders do the opposite; EOQ is the balance point.',
    },
    formula: {
      fa: 'EOQ = √(2 × تقاضای سالانه × هزینه هر سفارش ÷ هزینه نگهداری هر واحد در سال)',
      en: 'EOQ = √(2 × Annual demand × Cost per order ÷ Holding cost per unit per year)',
    },
    related: ['reorder-point', 'safety-stock'],
  },
  {
    id: 'slow-moving-stock',
    category: 'warehouse',
    term: { fa: 'کالای کم‌گردش و راکد', en: 'Slow-Moving and Obsolete Stock' },
    def: {
      fa: 'کالایی که در دوره‌ای طولانی (مثلاً یک یا دو سال، طبق رویه شرکت) مصرف نشده یا بسیار کم مصرف شده است. چنین کالایی سرمایه و فضای انبار را می‌گیرد و ممکن است ارزشش از بهای دفتری کمتر شود؛ در این صورت تا خالص ارزش فروش کاهش داده می‌شود. قطعات یدکی بیمه‌ای کم‌گردش‌اند اما راکد نیستند و نباید بدون بررسی حذف شوند.',
      en: 'Items that have had no or very little usage over a long period (for example one or two years, by company policy). They tie up capital and space and may be worth less than their book cost, in which case they are written down to net realizable value. Insurance spares are slow-moving by design but not obsolete, and must not be written off without review.',
    },
    related: ['net-realizable-value', 'inventory-turnover', 'critical-spares'],
  },
  {
    id: 'octg',
    category: 'warehouse',
    term: { fa: 'لوله‌های جداری و مغزی چاه (OCTG)', en: 'Oil Country Tubular Goods (OCTG)' },
    def: {
      fa: 'لوله‌هایی که در چاه به کار می‌روند: لوله جداری (Casing) برای پوشاندن دیواره چاه، لوله مغزی (Tubing) برای رساندن نفت و گاز به سطح، و لوله حفاری. این اقلام گران‌اند، زمان تأمین طولانی دارند و با مشخصات دقیق (قطر، وزن، گرید و نوع اتصال) و گواهی ساخت مدیریت می‌شوند؛ هر شاخه معمولاً با شماره قابل ردیابی است.',
      en: 'The pipe used in wells: casing to line the wellbore, tubing to bring oil and gas to the surface, and drill pipe. These items are expensive, have long lead times and are managed by exact specification (diameter, weight, grade and connection type) and mill certificates; each joint is usually traceable by number.',
    },
    related: ['long-lead-item', 'quality-inspection-stock', 'material-master'],
  },
  {
    id: 'critical-spares',
    category: 'warehouse',
    term: { fa: 'قطعات یدکی حیاتی (بیمه‌ای)', en: 'Critical (Insurance) Spares' },
    def: {
      fa: 'قطعاتی که اگر هنگام خرابی تجهیز در انبار نباشند، توقف تولید، خطر ایمنی یا زیان زیست‌محیطی بزرگ پیش می‌آید و زمان تأمینشان طولانی است، مانند آب‌بند کمپرسور یا روتور یدکی. این قطعات حتی با مصرف بسیار کم نگه داشته می‌شوند. طبق IAS 16، قطعات یدکی عمده و تجهیزات آماده‌به‌کاری که انتظار می‌رود بیش از یک دوره استفاده شوند، دارایی ثابت مشهود شناخته می‌شوند نه موجودی کالا.',
      en: 'Parts whose absence at the time of an equipment failure would cause a production shutdown, a safety hazard or major environmental damage, and which take a long time to obtain, such as a compressor seal or a spare rotor. They are held even with very low usage. Under IAS 16, major spare parts and standby equipment expected to be used for more than one period are recognized as property, plant and equipment rather than inventory.',
    },
    related: ['criticality', 'safety-stock', 'slow-moving-stock'],
  },
  {
    id: 'moving-average-price',
    category: 'warehouse',
    term: { fa: 'قیمت میانگین متحرک', en: 'Moving Average Price' },
    def: {
      fa: 'روش ارزش‌گذاری موجودی که در آن ERP پس از هر رسید، قیمت واحد کالا را با میانگین موزون ارزش موجودی قبلی و رسید جدید دوباره محاسبه می‌کند و حواله‌ها با همین قیمت جاری قیمت‌گذاری می‌شوند. این روش همان میانگین موزون در سیستم دائمی است و قیمت را به قیمت‌های واقعی خرید نزدیک نگه می‌دارد.',
      en: 'An inventory valuation method in which the ERP recalculates the unit price after every receipt as the weighted average of the existing stock value and the new receipt, and issues are priced at that current price. It is weighted-average costing under a perpetual system and keeps the price close to actual purchase prices.',
    },
    formula: {
      fa: 'قیمت جدید = (ارزش موجودی قبلی + ارزش رسید) ÷ (مقدار موجودی قبلی + مقدار رسید)',
      en: 'New price = (Existing stock value + Receipt value) ÷ (Existing quantity + Receipt quantity)',
    },
    related: ['weighted-average', 'standard-price', 'perpetual-inventory-system'],
  },
  {
    id: 'standard-price',
    category: 'warehouse',
    term: { fa: 'قیمت استاندارد', en: 'Standard Price' },
    def: {
      fa: 'روش ارزش‌گذاری که در آن کالا با قیمتی از پیش تعیین‌شده و ثابت (معمولاً برای یک سال) در موجودی ثبت و حواله می‌شود. تفاوت قیمت واقعی خرید با قیمت استاندارد به حساب انحراف قیمت می‌رود؛ این روش کنترل بودجه را آسان می‌کند، اما باید منظم بازبینی شود تا از واقعیت دور نشود.',
      en: 'A valuation method in which an item is held in stock and issued at a predetermined price that stays fixed (usually for a year). The difference between the actual purchase price and the standard price goes to a price variance account; it makes budget control easier but must be reviewed regularly so it does not drift from reality.',
    },
    formula: {
      fa: 'انحراف قیمت = (قیمت واقعی − قیمت استاندارد) × مقدار رسید',
      en: 'Price variance = (Actual price − Standard price) × Quantity received',
    },
    related: ['moving-average-price', 'material-master'],
  },
  // ───────────────────────────── maintenance ─────────────────────────────
  {
    id: 'asset-management',
    category: 'maintenance',
    term: { fa: 'مدیریت دارایی‌های فیزیکی (EAM)', en: 'Asset Management (EAM)' },
    def: {
      fa: 'مدیریت هماهنگ چرخه عمر دارایی‌های فیزیکی، از برنامه‌ریزی و خرید تا نصب، بهره‌برداری، نگهداری و کنارگذاری، با هدف گرفتن بیشترین ارزش با ریسک و هزینه قابل قبول (چارچوب ISO 55000). ماژول مدیریت دارایی (EAM) در ERP ساختار تجهیزات، اعلان‌ها، دستورهای کار و تاریخچه خرابی را نگه می‌دارد و هزینه‌ها را به مالی منتقل می‌کند.',
      en: 'The coordinated management of physical assets over their whole life, from planning and acquisition to installation, operation, maintenance and disposal, aiming to get the most value at acceptable risk and cost (the ISO 55000 framework). The ERP asset management (EAM) module holds the equipment structure, notifications, work orders and failure history, and passes costs to Finance.',
    },
    related: ['functional-location', 'maintenance-work-order', 'fixed-asset-register'],
  },
  {
    id: 'functional-location',
    category: 'maintenance',
    term: { fa: 'مکان عملیاتی (Functional location)', en: 'Functional Location' },
    def: {
      fa: 'نقطه‌ای در ساختار فنی تأسیسات که یک کارکرد در آن انجام می‌شود، مستقل از اینکه کدام دستگاه در آن نصب است؛ مانند «ایستگاه تقویت فشار / واحد کمپرسور 2 / سیستم روغن‌کاری». تجهیزات در مکان‌های عملیاتی نصب و از آن‌ها پیاده می‌شوند، اما تاریخچه آن نقطه سر جای خود می‌ماند.',
      en: 'A point in the technical structure of a facility where a function is performed, regardless of which unit is installed there, such as "Compressor station / Compressor unit 2 / Lube oil system". Equipment is installed in and removed from functional locations, but the history of that position stays in place.',
    },
    related: ['equipment', 'asset-hierarchy'],
  },
  {
    id: 'equipment',
    category: 'maintenance',
    term: { fa: 'تجهیز (Equipment)', en: 'Equipment' },
    def: {
      fa: 'یک دستگاه فیزیکی مشخص با شماره سریال، مانند پمپ، موتور یا شیر کنترلی، که در ERP رکورد جداگانه دارد و در یک مکان عملیاتی نصب می‌شود. تاریخچه تعمیرات و هزینه‌ها همراه خود تجهیز می‌ماند، حتی اگر به مکان دیگری منتقل شود؛ رکورد تجهیز می‌تواند به یک قلم در دفتر اموال پیوند داشته باشد.',
      en: 'A specific physical unit with a serial number, such as a pump, motor or control valve, that has its own record in the ERP and is installed in a functional location. Its maintenance and cost history travels with it even if it moves to another location; an equipment record can be linked to an item in the fixed-asset register.',
    },
    related: ['functional-location', 'fixed-asset-register', 'bill-of-materials'],
  },
  {
    id: 'asset-hierarchy',
    category: 'maintenance',
    term: { fa: 'ساختار سلسله‌مراتبی دارایی‌ها', en: 'Asset Hierarchy' },
    def: {
      fa: 'ساختار درختی که تأسیسات را از بالا به پایین تقسیم می‌کند: میدان، واحد یا ایستگاه، سیستم، زیرسیستم، تجهیز و قطعه. این ساختار امکان می‌دهد هزینه‌ها و خرابی‌ها در هر سطح جمع‌بندی شوند، مثلاً کل هزینه نگهداری سالانه ایستگاه تقویت فشار.',
      en: 'A tree structure that breaks a facility down from top to bottom: field, plant or station, system, subsystem, equipment and component. It lets costs and failures be rolled up at any level, for example the total yearly maintenance cost of the compressor station.',
    },
    related: ['functional-location', 'equipment', 'criticality'],
  },
  {
    id: 'criticality',
    category: 'maintenance',
    term: { fa: 'درجه حیاتی بودن (Criticality)', en: 'Criticality' },
    def: {
      fa: 'رتبه‌ای که نشان می‌دهد خرابی یک تجهیز چه پیامدی برای ایمنی، محیط زیست، تولید و هزینه دارد و معمولاً از ترکیب شدت پیامد و احتمال خرابی به دست می‌آید. تجهیزات با درجه حیاتی بالا راهبرد نگهداری سخت‌گیرانه‌تر، اولویت بالاتر در دستور کار و قطعات یدکی حیاتی در انبار می‌گیرند.',
      en: 'A ranking of what an equipment failure would mean for safety, the environment, production and cost, usually combining the severity of the consequence with the likelihood of failure. Highly critical equipment gets a stricter maintenance strategy, higher work-order priority and critical spares held in stock.',
    },
    formula: {
      fa: 'ریسک = احتمال خرابی × شدت پیامد',
      en: 'Risk = Likelihood of failure × Severity of consequence',
    },
    related: ['critical-spares', 'risk-based-inspection', 'rcm'],
  },
  {
    id: 'bill-of-materials',
    category: 'maintenance',
    term: { fa: 'فهرست قطعات (BOM)', en: 'Bill of Materials (BOM)' },
    def: {
      fa: 'فهرست ساخت‌یافته قطعات و موادی که یک تجهیز را تشکیل می‌دهند، با کد کالا و تعداد هر قطعه. در نگهداری، BOM تجهیز به برنامه‌ریز کمک می‌کند قطعات لازم یک دستور کار را سریع انتخاب و رزرو کند و نشان می‌دهد کدام قطعات یدکی باید در انبار باشند.',
      en: 'A structured list of the parts and materials that make up a piece of equipment, with the material code and quantity of each. In maintenance, the equipment BOM helps the planner pick and reserve the parts for a work order quickly and shows which spares should be kept in stock.',
    },
    related: ['equipment', 'reservation', 'critical-spares'],
  },
  {
    id: 'corrective-maintenance',
    category: 'maintenance',
    term: { fa: 'نگهداری اصلاحی (تعمیر پس از خرابی)', en: 'Corrective Maintenance' },
    def: {
      fa: 'تعمیری که پس از بروز خرابی یا نقص برای بازگرداندن تجهیز به کار انجام می‌شود. برای تجهیزات ارزان و کم‌اهمیت می‌تواند راهبردی آگاهانه باشد (کار تا خرابی)، اما برای تجهیزات حیاتی معمولاً پرهزینه‌ترین گزینه است، چون توقف تولید و تعمیر اضطراری را با هم دارد.',
      en: 'Repair carried out after a failure or defect to bring equipment back into service. For cheap, non-critical items it can be a deliberate strategy (run to failure), but for critical equipment it is usually the most expensive option, because it combines lost production with emergency repair.',
    },
    related: ['maintenance-notification', 'preventive-maintenance', 'mttr'],
  },
  {
    id: 'preventive-maintenance',
    category: 'maintenance',
    term: { fa: 'نگهداری پیشگیرانه', en: 'Preventive Maintenance (PM)' },
    def: {
      fa: 'کارهای برنامه‌ریزی‌شده‌ای که در فواصل زمانی یا کارکردی ثابت، مانند هر 3 ماه یا هر 8,000 ساعت کار، پیش از خرابی انجام می‌شوند: بازرسی، روغن‌کاری، تعویض فیلتر یا قطعات فرسوده. ERP بر پایه برنامه نگهداری، دستورهای کار را خودکار ایجاد می‌کند.',
      en: 'Planned work done at fixed time or usage intervals, such as every 3 months or every 8,000 running hours, before failure occurs: inspection, lubrication, replacing filters or worn parts. The ERP generates the work orders automatically from the maintenance plan.',
    },
    related: ['corrective-maintenance', 'predictive-maintenance', 'maintenance-work-order'],
  },
  {
    id: 'predictive-maintenance',
    category: 'maintenance',
    term: { fa: 'نگهداری پیش‌بینانه (بر پایه وضعیت)', en: 'Predictive (Condition-Based) Maintenance' },
    def: {
      fa: 'نگهداری‌ای که زمان آن را وضعیت واقعی تجهیز تعیین می‌کند، نه تقویم: با پایش ارتعاش، دما، آنالیز روغن یا ضخامت‌سنجی، نشانه‌های اولیه خرابی پیدا می‌شود و کار درست پیش از خرابی انجام می‌شود. برای تجهیزات دوار حیاتی مانند کمپرسورها، معمولاً هم از تعویض زودهنگام و هم از خرابی ناگهانی جلوگیری می‌کند.',
      en: "Maintenance timed by the equipment's actual condition rather than the calendar: monitoring vibration, temperature, oil analysis or wall thickness reveals early signs of failure, and the work is done just before failure. For critical rotating equipment such as compressors, it usually avoids both premature replacement and sudden breakdowns.",
    },
    related: ['preventive-maintenance', 'rcm', 'criticality'],
  },
  {
    id: 'rcm',
    category: 'maintenance',
    term: { fa: 'نگهداری مبتنی بر قابلیت اطمینان (RCM)', en: 'Reliability-Centred Maintenance (RCM)' },
    def: {
      fa: 'روشی ساخت‌یافته برای انتخاب راهبرد نگهداری هر تجهیز: کارکردهای آن، حالت‌های خرابی، پیامد هر خرابی و مناسب‌ترین کار برای پیشگیری یا مدیریت آن (پیش‌بینانه، پیشگیرانه، بازرسی یا کار تا خرابی) بررسی می‌شود. نتیجه، برنامه نگهداری‌ای است که پول را همان جایی خرج می‌کند که ریسک واقعاً هست.',
      en: 'A structured method for choosing the maintenance strategy for each asset: its functions, failure modes, the consequence of each failure and the most suitable task to prevent or manage it (predictive, preventive, inspection or run to failure) are analysed. The result is a maintenance plan that spends money where the risk actually is.',
    },
    related: ['criticality', 'preventive-maintenance', 'predictive-maintenance'],
  },
  {
    id: 'risk-based-inspection',
    category: 'maintenance',
    term: { fa: 'بازرسی مبتنی بر ریسک (RBI)', en: 'Risk-Based Inspection (RBI)' },
    def: {
      fa: 'روشی برای برنامه‌ریزی بازرسی تجهیزات ثابت تحت فشار، مانند مخازن، جداکننده‌ها و خطوط لوله، که در آن فاصله و نوع بازرسی بر پایه احتمال و پیامد خرابی (مثلاً بر اثر خوردگی) تعیین می‌شود، نه یک فاصله ثابت برای همه. استانداردهایی مانند API 580 و API 581 چارچوب آن را تعریف می‌کنند.',
      en: 'A method of planning inspections of static pressure equipment, such as vessels, separators and pipelines, in which the interval and type of inspection depend on the likelihood and consequence of failure (for example from corrosion) rather than one fixed interval for all. Standards such as API 580 and API 581 define the framework.',
    },
    related: ['criticality', 'rcm'],
  },
  {
    id: 'maintenance-notification',
    category: 'maintenance',
    term: { fa: 'اعلان (Notification)', en: 'Maintenance Notification' },
    def: {
      fa: 'سندی در ERP که یک خرابی، نقص یا درخواست کار را برای یک تجهیز یا مکان عملیاتی گزارش می‌کند: چه دیده شده، کجا، چه زمانی و با چه اولویتی. اعلان ثبت مالی ندارد؛ پس از بررسی ممکن است به دستور کار تبدیل شود و داده‌های آن (نوع و علت خرابی) پایه تحلیل قابلیت اطمینان است.',
      en: 'An ERP document that reports a failure, defect or request for work on a piece of equipment or functional location: what was seen, where, when and with what priority. It has no financial posting; after review it may be converted into a work order, and its data (failure type and cause) is the basis for reliability analysis.',
    },
    related: ['maintenance-work-order', 'corrective-maintenance', 'mtbf'],
  },
  {
    id: 'maintenance-work-order',
    category: 'maintenance',
    term: { fa: 'دستور کار نگهداری', en: 'Maintenance Work Order' },
    def: {
      fa: 'سند اصلی اجرای کار نگهداری در ERP که کار، عملیات، نیروی انسانی، قطعات (از طریق رزرو)، خدمات بیرونی (از طریق درخواست خرید) و بودجه را برنامه‌ریزی می‌کند. همه هزینه‌های واقعی، یعنی حواله‌های انبار، ساعت کار و فاکتورهای خدمات، روی دستور کار جمع می‌شوند و سپس با تسویه به شیء هزینه نهایی منتقل می‌شوند.',
      en: 'The main ERP document for carrying out maintenance, planning the job, its operations, labour, parts (through reservations), external services (through purchase requisitions) and budget. All actual costs, meaning goods issues, labour hours and service invoices, collect on the work order and are then moved to the final cost object through settlement.',
    },
    related: ['maintenance-notification', 'work-order-settlement', 'reservation'],
  },
  {
    id: 'work-order-settlement',
    category: 'maintenance',
    term: { fa: 'تسویه دستور کار', en: 'Work-Order Settlement' },
    def: {
      fa: 'انتقال هزینه‌های جمع‌شده روی دستور کار به شیء هزینه نهایی طبق قاعده تسویه آن: مرکز هزینه (هزینه نگهداری جاری)، دارایی در جریان تکمیل یا دارایی ثابت (مخارج سرمایه‌ای)، یا AFE و پروژه. قاعده تسویه درست تعیین می‌کند که هزینه سرمایه‌ای شود یا هزینه دوره، و آیا به گزارش بازیافت هزینه برسد.',
      en: 'Moving the costs collected on a work order to its final cost object according to its settlement rule: a cost centre (routine maintenance expense), an asset under construction or fixed asset (capital expenditure), or an AFE or project. The right settlement rule decides whether the cost is capitalized or expensed and whether it reaches the cost recovery report.',
    },
    formula: {
      fa: 'نمونه: بدهکار هزینه نگهداری (مرکز هزینه ایستگاه تقویت فشار)، بستانکار دستور کار',
      en: 'Example: Dr Maintenance expense (compressor station cost centre), Cr Work order',
    },
    related: ['maintenance-work-order', 'assets-under-construction', 'recoverable-cost'],
  },
  {
    id: 'mtbf',
    category: 'maintenance',
    term: { fa: 'میانگین زمان بین خرابی‌ها (MTBF)', en: 'Mean Time Between Failures (MTBF)' },
    def: {
      fa: 'میانگین زمان کارکرد یک تجهیز تعمیرپذیر میان دو خرابی پیاپی؛ شاخص قابلیت اطمینان است و هرچه بزرگ‌تر باشد بهتر است. داده آن از اعلان‌ها و دستورهای کار ثبت‌شده در ERP می‌آید، پس ثبت دقیق زمان خرابی اهمیت دارد.',
      en: 'The average running time of a repairable item between two consecutive failures; it measures reliability, and higher is better. Its data comes from the notifications and work orders recorded in the ERP, so accurate failure times matter.',
    },
    formula: {
      fa: 'MTBF = کل زمان کارکرد ÷ تعداد خرابی‌ها',
      en: 'MTBF = Total operating time ÷ Number of failures',
    },
    related: ['mttr', 'availability', 'maintenance-notification'],
  },
  {
    id: 'mttr',
    category: 'maintenance',
    term: { fa: 'میانگین زمان تعمیر (MTTR)', en: 'Mean Time to Repair (MTTR)' },
    def: {
      fa: 'میانگین زمانی که طول می‌کشد تا تجهیز خراب‌شده دوباره به کار برگردد، از تشخیص خرابی تا راه‌اندازی، از جمله زمان انتظار برای قطعه. شاخص تعمیرپذیری و سرعت واحد نگهداری است و هرچه کوچک‌تر باشد بهتر است؛ نبودن قطعه یدکی حیاتی در انبار اغلب بزرگ‌ترین عامل طولانی شدن آن است.',
      en: 'The average time it takes to bring a failed item back into service, from detecting the failure to restart, including waiting for parts. It measures maintainability and the speed of the maintenance team, and lower is better; a missing critical spare is often the biggest reason for a long MTTR.',
    },
    formula: {
      fa: 'MTTR = کل زمان توقف برای تعمیر ÷ تعداد تعمیرها',
      en: 'MTTR = Total repair downtime ÷ Number of repairs',
    },
    related: ['mtbf', 'availability', 'critical-spares'],
  },
  {
    id: 'availability',
    category: 'maintenance',
    term: { fa: 'دسترس‌پذیری', en: 'Availability' },
    def: {
      fa: 'درصد زمانی که تجهیز آماده کار است. از دید نگهداری به فاصله میان خرابی‌ها (MTBF) و سرعت تعمیر (MTTR) بستگی دارد؛ مثلاً با MTBF برابر 900 ساعت و MTTR برابر 100 ساعت، دسترس‌پذیری 90 درصد است.',
      en: 'The percentage of time equipment is ready to operate. From a maintenance view it depends on how long it runs between failures (MTBF) and how quickly it is repaired (MTTR); for example, with an MTBF of 900 hours and an MTTR of 100 hours, availability is 90%.',
    },
    formula: {
      fa: 'دسترس‌پذیری = MTBF ÷ (MTBF + MTTR)',
      en: 'Availability = MTBF ÷ (MTBF + MTTR)',
    },
    related: ['mtbf', 'mttr', 'oee'],
  },
  {
    id: 'oee',
    category: 'maintenance',
    term: { fa: 'اثربخشی کلی تجهیزات (OEE)', en: 'Overall Equipment Effectiveness (OEE)' },
    def: {
      fa: 'شاخصی که نشان می‌دهد تجهیز در زمان برنامه‌ریزی‌شده چه بخشی از توان خود را به تولید سالم تبدیل کرده است و از سه جزء ساخته می‌شود: دسترس‌پذیری، کارایی (سرعت نسبت به ظرفیت اسمی) و کیفیت. مثلاً 0.9 × 0.95 × 0.98 حدود 84 درصد می‌شود.',
      en: 'A measure of how much of its potential during planned time a piece of equipment turns into good output, built from three factors: availability, performance (speed relative to rated capacity) and quality. For example, 0.9 × 0.95 × 0.98 gives about 84%.',
    },
    formula: {
      fa: 'OEE = دسترس‌پذیری × کارایی × کیفیت',
      en: 'OEE = Availability × Performance × Quality',
    },
    related: ['availability', 'mtbf'],
  },
  {
    id: 'turnaround',
    category: 'maintenance',
    term: { fa: 'تعمیرات اساسی (Turnaround)', en: 'Turnaround (Major Shutdown)' },
    def: {
      fa: 'توقف برنامه‌ریزی‌شده و بزرگ یک واحد یا تأسیسات برای بازرسی، تعمیر و تعویض‌هایی که در حال کار ممکن نیست؛ ماه‌ها پیش‌تر برنامه‌ریزی و دامنه آن پیش از اجرا منجمد می‌شود. طبق IAS 16، هزینه بازرسی اساسی دوره‌ای که شرایط شناخت را دارد، به‌عنوان جزء جداگانه دارایی سرمایه‌ای و تا تعمیرات اساسی بعدی مستهلک می‌شود؛ تعمیرات روزمره هزینه دوره است.',
      en: 'A planned, major shutdown of a unit or facility for inspection, repair and replacement work that cannot be done while it runs; it is planned months ahead and its scope is frozen before execution. Under IAS 16, the cost of a major periodic inspection that meets the recognition criteria is capitalized as a separate component and depreciated until the next turnaround, while routine repairs are expensed.',
    },
    related: ['maintenance-work-order', 'capital-expenditure', 'revenue-expenditure'],
  },
  {
    id: 'assets-under-construction',
    category: 'maintenance',
    term: { fa: 'دارایی در جریان تکمیل (AuC)', en: 'Assets Under Construction (AuC)' },
    def: {
      fa: 'حسابی برای جمع کردن مخارج سرمایه‌ای پروژه‌ای که هنوز آماده بهره‌برداری نیست، مانند ساخت یک خط لوله یا نصب یک کمپرسور جدید. روی آن استهلاک گرفته نمی‌شود؛ وقتی دارایی آماده استفاده شد، مانده آن به دارایی ثابت نهایی منتقل و استهلاک از همان تاریخ آغاز می‌شود.',
      en: 'An account that collects the capital costs of a project not yet ready for use, such as building a pipeline or installing a new compressor. It is not depreciated; when the asset is ready for use, the balance is transferred to the final fixed asset and depreciation starts from that date.',
    },
    formula: {
      fa: 'هنگام آمادگی برای بهره‌برداری: بدهکار دارایی ثابت، بستانکار دارایی در جریان تکمیل',
      en: 'When ready for use: Dr Fixed asset, Cr Assets under construction',
    },
    related: ['capital-expenditure', 'work-order-settlement', 'property-plant-equipment'],
  },
  // ───────────────────────────── procurement ─────────────────────────────
  {
    id: 'procure-to-pay',
    category: 'procurement',
    term: { fa: 'چرخه درخواست تا پرداخت (P2P)', en: 'Procure-to-Pay (P2P)' },
    def: {
      fa: 'کل زنجیره خرید از نیاز تا پرداخت: درخواست خرید، انتخاب تأمین‌کننده، سفارش خرید، رسید انبار یا تأیید خدمات، ثبت فاکتور با تطبیق سه‌طرفه و پرداخت. در ERP هر مرحله سند خود را دارد و سندها به هم پیوند دارند (جریان اسناد)، پس از روی هر پرداخت می‌توان تا درخواست اولیه عقب رفت.',
      en: 'The whole purchasing chain from need to payment: purchase requisition, supplier selection, purchase order, goods receipt or service confirmation, invoice entry with three-way match, and payment. In an ERP each step has its own document and the documents are linked (document flow), so any payment can be traced back to the original request.',
    },
    related: ['purchase-requisition', 'purchase-order', 'three-way-match'],
  },
  {
    id: 'purchase-requisition',
    category: 'procurement',
    term: { fa: 'درخواست خرید (PR)', en: 'Purchase Requisition (PR)' },
    def: {
      fa: 'سند داخلی که نیاز به یک کالا یا خدمت را اعلام می‌کند: چه چیزی، چه مقدار، چه زمانی و برای کدام شیء هزینه (مرکز هزینه، دستور کار یا AFE). درخواست خرید تعهدی در برابر تأمین‌کننده ایجاد نمی‌کند و ثبت مالی ندارد، اما باید طبق جدول تفویض اختیار تأیید شود تا به سفارش خرید تبدیل شود.',
      en: 'An internal document that states a need for goods or services: what, how much, when and for which cost object (cost centre, work order or AFE). It creates no commitment to a supplier and no financial posting, but it must be approved under the delegation of authority before it can become a purchase order.',
    },
    related: ['purchase-order', 'delegation-of-authority', 'reorder-point'],
  },
  {
    id: 'request-for-quotation',
    category: 'procurement',
    term: { fa: 'درخواست استعلام قیمت (RFQ)', en: 'Request for Quotation (RFQ)' },
    def: {
      fa: 'سندی که برای چند تأمین‌کننده واجد شرایط فرستاده می‌شود تا برای کالا یا خدمتی با مشخصات معین، قیمت و شرایط پیشنهادی خود را اعلام کنند. برای خریدهای کوچک و متوسط به کار می‌رود و خریدهای بزرگ معمولاً مناقصه رسمی لازم دارند؛ سقف هر روش را خط‌مشی خرید شرکت یا قانون تعیین می‌کند.',
      en: 'A document sent to several qualified suppliers asking them to quote their price and terms for goods or services of a given specification. It is used for small and medium purchases, while large purchases usually need a formal tender; the threshold for each method is set by company policy or law.',
    },
    related: ['tender', 'bid-evaluation', 'approved-vendor-list'],
  },
  {
    id: 'tender',
    category: 'procurement',
    term: { fa: 'مناقصه', en: 'Tender' },
    def: {
      fa: 'فرایند رسمی و رقابتی خرید که در آن اسناد مناقصه (مشخصات فنی، شرایط قرارداد، معیارهای ارزیابی) به تأمین‌کنندگان واجد شرایط داده می‌شود و پیشنهادها تا مهلت معین، معمولاً در پاکت‌های لاک‌ومهرشده، دریافت و سپس گشوده می‌شوند. هدف، انتخابی منصفانه و قابل دفاع است؛ در ایران شرکت‌های دولتی تابع قانون برگزاری مناقصات‌اند.',
      en: 'A formal, competitive purchasing process in which tender documents (technical specifications, contract terms, evaluation criteria) are given to qualified suppliers, and bids are received by a deadline, usually sealed, and then opened. The aim is a fair and defensible selection; in Iran, state-owned companies must follow the Tenders Law.',
    },
    related: ['request-for-quotation', 'bid-evaluation', 'prequalification'],
  },
  {
    id: 'prequalification',
    category: 'procurement',
    term: { fa: 'ارزیابی کیفی (پیش‌صلاحیت)', en: 'Prequalification' },
    def: {
      fa: 'بررسی توان فنی و مالی، تجربه، گواهی‌ها و سابقه HSE تأمین‌کنندگان پیش از دعوت به مناقصه یا ورود به فهرست تأمین‌کنندگان تأییدشده. در صنعت نفت و گاز، برای تجهیزات تحت فشار و قطعات حیاتی، داشتن گواهی‌های لازم (مانند API یا ISO) معمولاً شرط اولیه است.',
      en: "Assessing suppliers' technical and financial capability, experience, certifications and HSE record before inviting them to tender or adding them to the approved vendor list. In oil and gas, holding the required certifications (such as API or ISO) is usually a precondition for pressure equipment and critical parts.",
    },
    related: ['approved-vendor-list', 'tender'],
  },
  {
    id: 'bid-evaluation',
    category: 'procurement',
    term: { fa: 'ارزیابی پیشنهادها', en: 'Bid Evaluation' },
    def: {
      fa: 'بررسی پیشنهادهای دریافتی بر پایه معیارهای اعلام‌شده در اسناد مناقصه، معمولاً در دو مرحله: ارزیابی فنی (انطباق با مشخصات، تجربه، HSE) و سپس ارزیابی مالی پیشنهادهایی که از نظر فنی پذیرفته شده‌اند. مقایسه باید بر پایه هزینه کل باشد، نه فقط قیمت: حمل، زمان تحویل، شرایط پرداخت و هزینه‌های طول عمر کالا.',
      en: 'Reviewing the bids received against the criteria announced in the tender documents, usually in two stages: technical evaluation (compliance with specifications, experience, HSE) and then commercial evaluation of the technically accepted bids. The comparison should be on total cost, not price alone: freight, delivery time, payment terms and life-cycle costs.',
    },
    related: ['tender', 'request-for-quotation', 'local-content'],
  },
  {
    id: 'approved-vendor-list',
    category: 'procurement',
    term: { fa: 'فهرست تأمین‌کنندگان تأییدشده (AVL)', en: 'Approved Vendor List (AVL)' },
    def: {
      fa: 'فهرست تأمین‌کنندگانی که ارزیابی کیفی را گذرانده‌اند و برای گروه‌های مشخصی از کالا یا خدمت مجاز به دریافت استعلام و سفارش‌اند. در ERP، نبودن تأمین‌کننده در این فهرست برای آن گروه کالا باید جلوی صدور سفارش را بگیرد؛ فهرست با ارزیابی دوره‌ای عملکرد به‌روز می‌شود.',
      en: 'The list of suppliers that have passed qualification and are allowed to receive enquiries and orders for specific groups of goods or services. In the ERP, a supplier missing from the list for that material group should block the purchase order; the list is updated through periodic performance reviews.',
    },
    related: ['prequalification', 'vendor-master', 'request-for-quotation'],
  },
  {
    id: 'vendor-master',
    category: 'procurement',
    term: { fa: 'داده پایه تأمین‌کننده (Vendor master)', en: 'Vendor Master' },
    def: {
      fa: 'رکورد اصلی هر تأمین‌کننده در ERP: نام قانونی، شماره ثبت و شماره مالیاتی، نشانی، حساب بانکی، شرایط پرداخت، حساب کنترل پرداختنی‌ها و وضعیت تأیید. چون پرداخت‌ها به حساب بانکی همین رکورد واریز می‌شود، هر تغییر در آن باید با تفکیک وظایف و تأیید جداگانه کنترل شود تا جلوی تقلب گرفته شود.',
      en: "The central ERP record for each supplier: legal name, registration and tax numbers, address, bank account, payment terms, payables control account and approval status. Because payments go to this record's bank account, every change to it must be controlled with segregation of duties and separate approval to prevent fraud.",
    },
    related: ['approved-vendor-list', 'accounts-payable', 'segregation-of-duties'],
  },
  {
    id: 'delegation-of-authority',
    category: 'procurement',
    term: { fa: 'جدول تفویض اختیار (DoA)', en: 'Delegation of Authority (DoA)' },
    def: {
      fa: 'سندی که مشخص می‌کند چه کسی، تا چه مبلغی و برای چه نوع تصمیمی (درخواست خرید، سفارش، قرارداد، پرداخت) اختیار تأیید دارد. ERP این جدول را در گردش کار تأیید پیاده می‌کند تا هر سند خودکار به تأییدکننده درست برسد؛ خرد کردن یک خرید به چند سفارش کوچک برای ماندن زیر سقف، نقض آشکار آن است.',
      en: 'A document that sets out who may approve what, up to what amount, for each type of decision (requisitions, orders, contracts, payments). The ERP builds it into the approval workflow so every document reaches the right approver automatically; splitting one purchase into several small orders to stay under a limit is a clear breach.',
    },
    related: ['purchase-requisition', 'internal-control', 'segregation-of-duties'],
  },
  {
    id: 'purchase-order',
    category: 'procurement',
    term: { fa: 'سفارش خرید (PO)', en: 'Purchase Order (PO)' },
    def: {
      fa: 'سند رسمی که شرکت با آن به تأمین‌کننده سفارش می‌دهد و از نظر حقوقی تعهد ایجاد می‌کند: کالا یا خدمت، مقدار، قیمت، شرایط تحویل (مانند اینکوترمز)، شرایط پرداخت و شیء هزینه. سفارش خرید ثبت مالی ندارد، ولی در بسیاری از ERPها به‌عنوان تعهد در برابر بودجه یا AFE دیده می‌شود.',
      en: 'The formal document by which the company orders from a supplier, creating a legal commitment: goods or services, quantity, price, delivery terms (such as Incoterms), payment terms and cost object. It has no financial posting, but many ERPs show it as a commitment against the budget or AFE.',
    },
    related: ['purchase-requisition', 'goods-receipt', 'commitment'],
  },
  {
    id: 'service-purchase-order',
    category: 'procurement',
    term: { fa: 'سفارش خرید خدمات (Service PO)', en: 'Service Purchase Order' },
    def: {
      fa: 'سفارش خریدی که به جای کالا، خدمات سفارش می‌دهد، مانند اجاره دستگاه حفاری، خدمات سیمان‌کاری چاه یا بازرسی؛ معمولاً با فهرست اقلام خدمت، نرخ واحد (روزانه، ساعتی، متری) و یک سقف مبلغ. چون خدمات انبار نمی‌شوند، به جای رسید انبار با برگه ثبت خدمات تأیید می‌شوند و هزینه آن‌ها مستقیماً به شیء هزینه (AFE، دستور کار یا مرکز هزینه) می‌رود.',
      en: 'A purchase order for services rather than goods, such as rig hire, well cementing or inspection services, usually with a list of service lines, unit rates (per day, per hour, per metre) and a value ceiling. Because services are not stocked, they are confirmed with a service entry sheet instead of a goods receipt, and the cost goes straight to the cost object (AFE, work order or cost centre).',
    },
    related: ['service-entry-sheet', 'purchase-order', 'field-ticket'],
  },
  {
    id: 'framework-agreement',
    category: 'procurement',
    term: { fa: 'قرارداد چارچوب', en: 'Framework Agreement' },
    def: {
      fa: 'قراردادی بلندمدت با یک تأمین‌کننده که قیمت‌ها یا نرخ‌ها، شرایط و گاهی سقف مبلغ را برای دوره‌ای معین (مثلاً دو سال) ثابت می‌کند، بی‌آنکه مقدار دقیق خرید را از پیش تعهد کند. خرید واقعی بعداً با سفارش‌های فراخوان انجام می‌شود؛ برای اقلام تکراری مانند مواد شیمیایی حفاری یا خدمات بازرسی، زمان و هزینه مناقصه‌های پیاپی را کم می‌کند.',
      en: 'A long-term contract with a supplier that fixes prices or rates, terms and sometimes a value ceiling for a set period (for example two years), without committing in advance to exact quantities. Actual purchases are made later through call-off orders; for recurring items such as drilling chemicals or inspection services it saves the time and cost of repeated tenders.',
    },
    related: ['call-off-order', 'purchase-order', 'tender'],
  },
  {
    id: 'call-off-order',
    category: 'procurement',
    term: { fa: 'سفارش فراخوان (Call-off)', en: 'Call-Off Order' },
    def: {
      fa: 'سفارشی برای خرید مقدار مشخصی از کالا یا خدمت که با ارجاع به قرارداد چارچوب و با همان قیمت‌ها و شرایط آن صادر می‌شود. ERP با هر فراخوان، مصرف سقف قرارداد را به‌روز می‌کند تا از سقف مصوب عبور نشود.',
      en: 'An order for a specific quantity of goods or services, issued with reference to a framework agreement at its prices and terms. The ERP updates the consumption of the agreement ceiling with each call-off so the approved ceiling is not exceeded.',
    },
    related: ['framework-agreement', 'purchase-order'],
  },
  {
    id: 'goods-received-note',
    category: 'procurement',
    term: { fa: 'برگه رسید کالا (GRN)', en: 'Goods Received Note (GRN)' },
    def: {
      fa: 'سند چاپی یا الکترونیکی که انباردار هنگام تحویل گرفتن کالا صادر و امضا می‌کند: شماره سفارش خرید، تأمین‌کننده، شماره بارنامه یا برگ تحویل، کالا، مقدار رسیده و وضعیت ظاهری. در ERP برگه رسید کالا خروجی ثبت رسید انبار است و شماره آن در تطبیق سه‌طرفه و پرونده بازیافت هزینه، مدرک دریافت کالا به شمار می‌آید.',
      en: 'The printed or electronic document the storekeeper issues and signs when taking delivery: purchase order number, supplier, delivery note or waybill number, items, quantity received and visible condition. In an ERP the GRN is the output of the goods receipt posting, and its number serves as proof of receipt in the three-way match and in the cost recovery file.',
    },
    related: ['goods-receipt', 'three-way-match', 'source-document'],
  },
  {
    id: 'service-entry-sheet',
    category: 'procurement',
    term: { fa: 'برگه ثبت خدمات (صورت‌وضعیت، SES)', en: 'Service Entry Sheet (SES)' },
    def: {
      fa: 'سندی که مقدار خدمات انجام‌شده طبق سفارش خرید یا قرارداد را ثبت می‌کند، مانند ساعت کار دستگاه حفاری یا متراژ لوله‌گذاری اجراشده. برای خدمات نقش رسید انبار را دارد: پس از پذیرش، ثبت مالی بدهکار شیء هزینه و بستانکار حساب واسط ایجاد می‌کند و پایه تطبیق سه‌طرفه فاکتور پیمانکار است.',
      en: "The document that records the quantity of services performed under a purchase order or contract, such as rig hours or metres of pipe laid. For services it plays the role of the goods receipt: once accepted, it posts a debit to the cost object and a credit to the clearing account, and it is the basis for the three-way match on the contractor's invoice.",
    },
    related: ['ses-acceptance', 'service-purchase-order', 'three-way-match'],
  },
  {
    id: 'ses-acceptance',
    category: 'procurement',
    term: { fa: 'پذیرش برگه ثبت خدمات (SES acceptance)', en: 'SES Acceptance' },
    def: {
      fa: 'گامی که در آن نماینده مجاز کارفرما، پس از مقایسه برگه ثبت خدمات با کار واقعاً انجام‌شده و برگه‌های کار میدانی، آن را در ERP می‌پذیرد. پیش از پذیرش، برگه فقط پیش‌نویس است و ثبت مالی ندارد؛ با پذیرش، ثبت بدهکار شیء هزینه و بستانکار حساب واسط ایجاد و فاکتور پیمانکار برای تطبیق سه‌طرفه آماده می‌شود. پذیرنده باید طبق جدول تفویض اختیار مجاز باشد و همان کسی نباشد که برگه را تهیه کرده است.',
      en: "The step in which the client's authorized representative, after checking the service entry sheet against the work actually done and the field tickets, accepts it in the ERP. Before acceptance the sheet is only a draft with no financial posting; on acceptance the ERP posts a debit to the cost object and a credit to the clearing account, and the contractor's invoice becomes ready for the three-way match. The approver must hold authority under the delegation of authority and must not be the person who prepared the sheet.",
    },
    formula: {
      fa: 'بدهکار شیء هزینه (AFE، دستور کار یا مرکز هزینه)، بستانکار حساب واسط رسید کالا و فاکتور (GR/IR)',
      en: 'Dr Cost object (AFE, work order or cost centre), Cr GR/IR clearing account',
    },
    related: ['service-entry-sheet', 'field-ticket', 'delegation-of-authority'],
  },
  {
    id: 'field-ticket',
    category: 'procurement',
    term: { fa: 'برگه کار میدانی (Field ticket)', en: 'Field Ticket' },
    def: {
      fa: 'برگه‌ای که پیمانکار خدمات در محل کار (سر چاه یا ایستگاه) تهیه می‌کند و نماینده کارفرما، مانند سرپرست حفاری، همان روز امضا می‌کند: تاریخ، چاه یا محل، نفرات و تجهیزات به‌کاررفته، ساعت‌ها، مواد مصرفی و نرخ‌ها. برگه‌های کار میدانی مدرک اولیه انجام خدمت و پایه برگه ثبت خدمات و فاکتور پیمانکارند؛ بدون آن‌ها دفاع از هزینه در حسابرسی شرکا یا طرف دولتی دشوار است.',
      en: "A sheet the service contractor prepares at the work site (wellsite or station) and the client's representative, such as the drilling supervisor, signs the same day: date, well or location, crew and equipment used, hours, consumables and rates. Field tickets are the primary evidence that the service was performed and the basis for the service entry sheet and the contractor's invoice; without them, defending the cost in a partner or government audit is difficult.",
    },
    related: ['service-entry-sheet', 'ses-acceptance', 'recoverable-cost'],
  },
  {
    id: 'three-way-match',
    category: 'procurement',
    term: { fa: 'تطبیق سه‌طرفه', en: 'Three-Way Match' },
    def: {
      fa: 'کنترلی که پیش از پرداخت سه سند را با هم مقایسه می‌کند: سفارش خرید (چه چیزی و به چه قیمتی سفارش دادیم)، رسید انبار یا برگه ثبت خدمات (چه مقدار واقعاً رسید) و فاکتور تأمین‌کننده (چه مبلغی خواسته شده). اگر مقدار یا قیمت بیش از حد مجاز تفاوت داشته باشد، ERP فاکتور را تا روشن شدن موضوع برای پرداخت مسدود می‌کند.',
      en: 'A control that compares three documents before payment: the purchase order (what we ordered and at what price), the goods receipt or service entry sheet (what actually arrived) and the supplier invoice (what is being charged). If quantity or price differs beyond the allowed tolerance, the ERP blocks the invoice for payment until the difference is resolved.',
    },
    formula: {
      fa: 'مقدار فاکتور ≤ مقدار رسیده، و قیمت فاکتور ≈ قیمت سفارش (در حد مجاز)',
      en: 'Invoice quantity ≤ Quantity received, and Invoice price ≈ PO price (within tolerance)',
    },
    related: ['purchase-order', 'goods-receipt', 'gr-ir-clearing-account'],
  },
  {
    id: 'evaluated-receipt-settlement',
    category: 'procurement',
    term: { fa: 'تسویه بر پایه رسید (ERS)', en: 'Evaluated Receipt Settlement (ERS)' },
    def: {
      fa: 'روشی که در آن تأمین‌کننده فاکتور نمی‌فرستد و ERP بدهی را مستقیماً از روی رسید انبار و قیمت سفارش خرید (یا قرارداد) محاسبه و ثبت می‌کند. برای تأمین‌کنندگان مطمئن با قیمت توافق‌شده، مانند تحویل منظم سوخت یا مواد شیمیایی، کار و خطای تطبیق فاکتور را کم می‌کند؛ اما به داده پایه قیمت دقیق، توافق کتبی با تأمین‌کننده و بررسی الزامات صورت‌حساب مالیاتی نیاز دارد.',
      en: 'A method in which the supplier sends no invoice and the ERP calculates and posts the liability directly from the goods receipt and the purchase order (or contract) price. For trusted suppliers with agreed prices, such as regular fuel or chemical deliveries, it cuts invoice-matching work and errors; but it requires accurate price master data, a written agreement with the supplier and a check of tax-invoice requirements.',
    },
    formula: {
      fa: 'بدهی به تأمین‌کننده = مقدار رسیده × قیمت سفارش (به‌علاوه مالیات مربوط)',
      en: 'Amount payable = Quantity received × PO price (plus any applicable tax)',
    },
    related: ['goods-receipt', 'three-way-match', 'tax-invoice'],
  },
  {
    id: 'gr-ir-clearing-account',
    category: 'procurement',
    term: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR Clearing Account' },
    def: {
      fa: 'حساب واسطی که میان رسید کالا و ثبت فاکتور پل می‌زند: رسید انبار آن را بستانکار و فاکتور آن را بدهکار می‌کند، پس در حالت عادی مانده آن صفر می‌شود. مانده باز آن یعنی کالای رسیده بدون فاکتور (بدهی تعهدی) یا فاکتور ثبت‌شده بدون رسید؛ بررسی این مانده بخشی از بستن ماهانه حساب‌هاست.',
      en: 'A clearing account that bridges goods receipt and invoice entry: the receipt credits it and the invoice debits it, so it normally nets to zero. An open balance means goods received but not invoiced (an accrued liability) or invoices posted without a receipt; reviewing it is part of the month-end close.',
    },
    formula: {
      fa: 'رسید: بدهکار موجودی کالا، بستانکار GR/IR؛ فاکتور: بدهکار GR/IR و مالیات خرید، بستانکار حساب‌های پرداختنی',
      en: 'Receipt: Dr Inventory, Cr GR/IR; Invoice: Dr GR/IR and Input VAT, Cr Accounts payable',
    },
    related: ['goods-receipt', 'gr-ir-reconciliation', 'accrued-liabilities'],
  },
  {
    id: 'gr-ir-reconciliation',
    category: 'procurement',
    term: { fa: 'تطبیق و تحلیل حساب GR/IR', en: 'GR/IR Reconciliation' },
    def: {
      fa: 'بررسی دوره‌ای (معمولاً در بستن ماهانه) مانده باز حساب واسط رسید کالا و فاکتور، سفارش به سفارش: کدام رسیدها هنوز فاکتور ندارند، کدام فاکتورها رسید ندارند و کدام اختلاف‌ها از تفاوت قیمت یا مقدار آمده‌اند. اقلام قدیمی پیگیری و اصلاح می‌شوند و مانده‌ها برای ارائه درست در ترازنامه، به بدهی تعهدی یا پیش‌پرداخت طبقه‌بندی می‌شوند.',
      en: 'A periodic review (usually at month-end close) of the open balance on the GR/IR clearing account, order by order: which receipts have no invoice yet, which invoices have no receipt, and which differences come from price or quantity mismatches. Old items are chased and corrected, and balances are reclassified as accrued liabilities or prepayments so the balance sheet presents them correctly.',
    },
    related: ['gr-ir-clearing-account', 'received-not-invoiced-accrual', 'three-way-match'],
  },
  {
    id: 'received-not-invoiced-accrual',
    category: 'procurement',
    term: { fa: 'بدهی تعهدی دریافت‌شده بدون فاکتور (RNI)', en: 'Received-Not-Invoiced (RNI) Accrual' },
    def: {
      fa: 'بدهی برای کالا یا خدماتی که تا پایان دوره رسیده یا انجام شده‌اند اما فاکتورشان هنوز نرسیده است. در ERP مانده بستانکار GR/IR همین بدهی را نشان می‌دهد؛ برای خدماتی که برگه تأییدشان هنوز ثبت نشده (مثلاً کار حفاری انجام‌شده تا آخر ماه) باید ثبت تعهدی دستی زد، که معمولاً در ابتدای دوره بعد معکوس می‌شود، تا هزینه در دوره درست شناسایی شود.',
      en: 'A liability for goods or services received or performed by period-end whose invoices have not yet arrived. In an ERP the credit balance on GR/IR represents this liability; for services whose entry sheets are not yet recorded (for example drilling work done up to month-end), a manual accrual is needed, usually reversed at the start of the next period, so the cost lands in the right period.',
    },
    formula: {
      fa: 'بدهکار هزینه یا AFE، بستانکار بدهی‌های تعهدی (هزینه‌های پرداختنی)',
      en: 'Dr Expense or AFE, Cr Accrued liabilities',
    },
    related: ['accrued-liabilities', 'gr-ir-reconciliation', 'reversing-entries'],
  },
  {
    id: 'incoterms',
    category: 'procurement',
    term: { fa: 'اینکوترمز (Incoterms)', en: 'Incoterms' },
    def: {
      fa: 'مجموعه قواعد استاندارد اتاق بازرگانی بین‌المللی (ICC) که با کدهای سه‌حرفی مانند EXW، FCA، CIF و DAP مشخص می‌کند هزینه حمل، بیمه و ترخیص با کیست و ریسک کالا در کدام نقطه از فروشنده به خریدار منتقل می‌شود. اینکوترمز مالکیت یا قیمت را تعیین نمی‌کند، اما بر بهای تمام‌شده کالا (هزینه حمل به داخل) و زمان شناسایی کالای در راه اثر دارد؛ نسخه به‌کاررفته باید همراه کد در سفارش خرید قید شود.',
      en: 'A set of standard rules from the International Chamber of Commerce (ICC) whose three-letter codes, such as EXW, FCA, CIF and DAP, state who pays for freight, insurance and customs clearance and at which point risk passes from seller to buyer. Incoterms do not decide ownership or price, but they affect the cost of goods (freight-in) and when goods in transit are recognized; the version used should be stated with the code on the purchase order.',
    },
    related: ['purchase-order', 'freight-in'],
  },
  {
    id: 'expediting',
    category: 'procurement',
    term: { fa: 'پیگیری سفارش (Expediting)', en: 'Expediting' },
    def: {
      fa: 'پیگیری فعال سفارش‌ها از صدور تا تحویل، به‌ویژه اقلام با زمان تأمین طولانی: بررسی پیشرفت ساخت، نقشه‌ها و مدارک فنی، بازرسی‌های کارخانه، آماده‌سازی حمل و ترخیص. هدف این است که تأخیر زود کشف شود، نه وقتی که دستگاه حفاری منتظر کالا مانده است.',
      en: 'Actively following orders from issue to delivery, especially long-lead items: checking manufacturing progress, drawings and technical documents, factory inspections, shipping and customs clearance. The aim is to spot delays early, not when the rig is already waiting for the goods.',
    },
    related: ['long-lead-item', 'purchase-order'],
  },
  {
    id: 'long-lead-item',
    category: 'procurement',
    term: { fa: 'کالای با زمان تأمین طولانی (Long-lead item)', en: 'Long-Lead Item' },
    def: {
      fa: 'کالا یا تجهیزی که ساخت و تحویل آن ماه‌ها طول می‌کشد، مانند کمپرسور، شیرهای سرچاهی، لوله جداری با گرید خاص یا ترانسفورماتور. این اقلام باید خیلی زودتر از زمان نیاز سفارش داده شوند، گاهی پیش از تصویب کامل پروژه، و به پیگیری و بازرسی ویژه نیاز دارند.',
      en: 'Goods or equipment that take months to manufacture and deliver, such as compressors, wellhead valves, special-grade casing or transformers. They must be ordered well before they are needed, sometimes before the project is fully sanctioned, and need special expediting and inspection.',
    },
    related: ['expediting', 'octg', 'critical-spares'],
  },
  {
    id: 'local-content',
    category: 'procurement',
    term: { fa: 'محتوای داخلی (Local content)', en: 'Local Content' },
    def: {
      fa: 'سیاست‌ها و الزام‌هایی که سهم کالا، خدمات، نیروی کار و شرکت‌های داخلی را در پروژه‌ها افزایش می‌دهند؛ قراردادهای نفتی یا قوانین کشور میزبان معمولاً آن را از پیمانکار می‌خواهند. ممکن است در ارزیابی پیشنهادها امتیاز یا اولویت جداگانه داشته باشد و گزارش آن به ثبت دقیق منشأ کالا و تأمین‌کننده در ERP نیاز دارد. نسبت‌ها و قواعد آن را قانون و قرارداد هر کشور تعیین می‌کند.',
      en: "Policies and requirements that increase the share of domestic goods, services, workforce and companies in projects; petroleum contracts or host-country laws commonly require it of the contractor. It may carry separate points or preference in bid evaluation, and reporting it requires recording each item's origin and supplier accurately in the ERP. The percentages and rules are set by each country's law and contract.",
    },
    related: ['bid-evaluation', 'tender', 'prequalification'],
  },
  // ───────────────────────────── budget ─────────────────────────────
  {
    id: 'work-programme-and-budget',
    category: 'budget',
    term: { fa: 'برنامه کاری و بودجه (WP&B)', en: 'Work Programme and Budget (WP&B)' },
    def: {
      fa: 'سند سالانه‌ای که اپراتور برای یک بلوک یا میدان تهیه می‌کند و کارهای برنامه‌ریزی‌شده (حفاری چاه‌ها، تعمیرات، پروژه‌ها) و بودجه هر یک را نشان می‌دهد؛ طبق موافقت‌نامه عملیات مشترک به تصویب کمیته عملیاتی شرکا و در بسیاری از قراردادهای نفتی به تأیید طرف دولتی می‌رسد. هزینه‌ای که در WP&B مصوب یا یک AFE نیامده باشد، ممکن است قابل بازیافت شناخته نشود.',
      en: "The annual document in which the operator sets out the planned work for a block or field (wells to drill, maintenance, projects) and the budget for each; under the joint operating agreement it is approved by the partners' operating committee and, under many petroleum contracts, by the government side. A cost that is not in the approved WP&B or an AFE may not be accepted as recoverable.",
    },
    related: ['afe', 'joint-operating-agreement', 'capex-opex-budget'],
  },
  {
    id: 'capex-opex-budget',
    category: 'budget',
    term: { fa: 'بودجه سرمایه‌ای و جاری (CAPEX / OPEX)', en: 'CAPEX and OPEX Budget' },
    def: {
      fa: 'تقسیم بودجه به دو بخش: بودجه سرمایه‌ای (CAPEX) برای مخارجی که دارایی می‌سازند یا عمر آن را افزایش می‌دهند، مانند حفاری چاه یا ساخت خط لوله جدید، و بودجه جاری (OPEX) برای هزینه‌های روزمره بهره‌برداری و نگهداری. این تفکیک باید با رویه سرمایه‌ای کردن در حسابداری یکی باشد؛ در قراردادهای نفتی هم CAPEX و OPEX اغلب قواعد بازیافت متفاوتی دارند.',
      en: 'Splitting the budget into two parts: the capital budget (CAPEX) for spending that creates assets or extends their life, such as drilling a well or building a new pipeline, and the operating budget (OPEX) for day-to-day operating and maintenance costs. The split must match the accounting capitalization policy; in petroleum contracts, CAPEX and OPEX often follow different recovery rules too.',
    },
    related: ['capital-expenditure', 'revenue-expenditure', 'work-programme-and-budget'],
  },
  {
    id: 'budget-version',
    category: 'budget',
    term: { fa: 'نسخه بودجه', en: 'Budget Version' },
    def: {
      fa: 'هر نسخه جداگانه از بودجه که در ERP با شناسه خود نگه داشته می‌شود، مانند بودجه اولیه مصوب، بودجه اصلاحی میان‌سال و پیش‌بینی پایان سال. نگه داشتن نسخه‌ها کنار هم نشان می‌دهد بودجه چگونه و با چه تصویبی تغییر کرده است؛ بودجه مصوب اولیه نباید بازنویسی شود.',
      en: 'Each separate version of the budget held in the ERP under its own identifier, such as the original approved budget, the mid-year revised budget and the year-end forecast. Keeping versions side by side shows how the budget changed and with what approval; the original approved budget should never be overwritten.',
    },
    related: ['work-programme-and-budget', 'budget-transfer', 'estimate-at-completion'],
  },
  {
    id: 'wbs',
    category: 'budget',
    term: { fa: 'ساختار شکست کار (WBS)', en: 'Work Breakdown Structure (WBS)' },
    def: {
      fa: 'تقسیم سلسله‌مراتبی کل دامنه یک پروژه به بخش‌های کوچک‌تر و قابل مدیریت، از کل پروژه تا بسته‌های کاری؛ مثلاً پروژه حفاری چاه AR-09 به آماده‌سازی محل، حفاری، لوله‌گذاری و سیمان‌کاری، تکمیل چاه و اتصال به خط جریان. در ERP، WBS اسکلت بودجه، ثبت هزینه، تعهدات و گزارش پیشرفت پروژه است.',
      en: 'The hierarchical breakdown of the whole scope of a project into smaller, manageable parts, from the full project down to work packages; for example, drilling well AR-09 broken into site preparation, drilling, casing and cementing, well completion and tie-in to the flowline. In an ERP the WBS is the skeleton for the project budget, cost postings, commitments and progress reporting.',
    },
    related: ['wbs-element', 'wbs-dictionary', 'hundred-percent-rule'],
  },
  {
    id: 'wbs-element',
    category: 'budget',
    term: { fa: 'عنصر WBS', en: 'WBS Element' },
    def: {
      fa: 'هر گره در ساختار شکست کار که در ERP نقش شیء هزینه را دارد: بودجه می‌گیرد، تعهد و هزینه واقعی روی آن ثبت می‌شود و در پایان به گیرنده نهایی، مانند دارایی در جریان تکمیل یا هزینه دوره، تسویه می‌شود. معمولاً فقط عناصر پایین‌ترین سطح ثبت هزینه می‌پذیرند و سطح‌های بالاتر جمع آن‌ها را نشان می‌دهند.',
      en: 'Each node in the work breakdown structure that acts as a cost object in the ERP: it receives budget, carries commitments and actual costs, and is finally settled to a receiver such as assets under construction or period expense. Usually only the lowest-level elements accept postings, and higher levels show their totals.',
    },
    related: ['wbs', 'settlement', 'assets-under-construction'],
  },
  {
    id: 'wbs-dictionary',
    category: 'budget',
    term: { fa: 'فرهنگ WBS (WBS dictionary)', en: 'WBS Dictionary' },
    def: {
      fa: 'سندی همراه ساختار شکست کار که برای هر عنصر، شرح دامنه کار، خروجی‌ها، مسئول، برآورد هزینه و زمان و معیار تکمیل را می‌نویسد. فرهنگ WBS ابهام را برطرف می‌کند تا هر هزینه دقیقاً به یک عنصر درست تخصیص یابد و دامنه پروژه بی‌صدا گسترش نیابد.',
      en: 'A document that accompanies the work breakdown structure and records, for each element, the scope description, deliverables, owner, cost and time estimate and completion criteria. It removes ambiguity so every cost is charged to exactly one correct element and the project scope does not quietly grow.',
    },
    related: ['wbs', 'wbs-element', 'cost-code'],
  },
  {
    id: 'hundred-percent-rule',
    category: 'budget',
    term: { fa: 'قاعده 100 درصد', en: '100% Rule' },
    def: {
      fa: 'اصل بنیادی ساختار شکست کار: مجموع کار عناصر زیرین هر سطح باید دقیقاً برابر 100 درصد کار عنصر بالاتر باشد؛ نه کاری بیرون از دامنه در آن بیاید و نه بخشی از دامنه جا بماند. همین قاعده برای بودجه هم برقرار است: جمع بودجه عناصر زیرین باید با بودجه عنصر بالاتر برابر باشد.',
      en: 'The basic principle of a work breakdown structure: the work of the child elements at each level must add up to exactly 100% of the work of their parent, with nothing outside the scope included and nothing in scope left out. The same rule applies to budget: the child budgets must sum to the parent budget.',
    },
    formula: {
      fa: 'بودجه عنصر بالاتر = جمع بودجه عناصر زیرین',
      en: 'Parent budget = Sum of child budgets',
    },
    related: ['wbs', 'wbs-element'],
  },
  {
    id: 'cost-code',
    category: 'budget',
    term: { fa: 'کد هزینه', en: 'Cost Code' },
    def: {
      fa: 'کد استانداردی که نوع فعالیت یا هزینه را در پروژه‌ها و عملیات مشخص می‌کند، مانند «حفاری»، «لوله جداری»، «سیمان‌کاری» یا «خدمات گل حفاری»، و در همه چاه‌ها و AFEها یکسان به کار می‌رود. با کدهای هزینه یکسان می‌توان هزینه چاه‌ها را با هم و با برآورد مقایسه کرد و دسته‌بندی‌های لازم برای گزارش بازیافت هزینه را تهیه کرد.',
      en: 'A standard code that identifies the type of activity or cost in projects and operations, such as "drilling", "casing", "cementing" or "mud services", used identically across all wells and AFEs. Consistent cost codes let you compare wells with each other and with estimates, and produce the categories the cost recovery report needs.',
    },
    related: ['afe', 'cost-element', 'wbs-dictionary'],
  },
  {
    id: 'cost-element',
    category: 'budget',
    term: { fa: 'عنصر هزینه (Cost element)', en: 'Cost Element' },
    def: {
      fa: 'دسته‌بندی هزینه در حسابداری مدیریت که نشان می‌دهد چه نوع هزینه‌ای رخ داده است (مواد، دستمزد، خدمات پیمانکار، استهلاک)؛ در بسیاری از ERPها هر حساب هزینه دفتر کل یک عنصر هزینه اولیه متناظر دارد. عنصر هزینه می‌گوید «چه» خرج شد و شیء هزینه، مانند مرکز هزینه یا عنصر WBS، می‌گوید «کجا» یا «برای چه».',
      en: 'A cost category in management accounting that shows what kind of cost was incurred (materials, labour, contractor services, depreciation); in many ERPs each general ledger expense account has a matching primary cost element. The cost element says what was spent, while the cost object, such as a cost centre or WBS element, says where or what for.',
    },
    related: ['cost-centre', 'cost-code', 'chart-of-accounts'],
  },
  {
    id: 'cost-centre',
    category: 'budget',
    term: { fa: 'مرکز هزینه', en: 'Cost Centre' },
    def: {
      fa: 'واحدی از سازمان که هزینه‌های جاری آن جداگانه جمع و کنترل می‌شود و مسئول مشخصی دارد، مانند ایستگاه تقویت فشار، انبار میدان یا واحد حراست. مرکز هزینه برای هزینه‌های تکراری و ماندگار است و بودجه سالانه می‌گیرد؛ کارهای موقت با تاریخ شروع و پایان بهتر است روی سفارش داخلی یا عنصر WBS ثبت شوند.',
      en: 'A unit of the organisation whose running costs are collected and controlled separately and which has a named owner, such as the compressor station, the Field Warehouse or the security department. Cost centres are for recurring, ongoing costs and receive an annual budget; temporary jobs with a start and end date are better recorded on an internal order or WBS element.',
    },
    related: ['cost-element', 'internal-order', 'wbs-element'],
  },
  {
    id: 'internal-order',
    category: 'budget',
    term: { fa: 'سفارش داخلی (Internal order)', en: 'Internal Order' },
    def: {
      fa: 'شیء هزینه موقت در ERP برای جمع کردن هزینه یک کار یا رویداد مشخص و کوتاه‌مدت، مانند یک دوره بازرسی ایمنی، یک مطالعه یا یک برنامه آموزشی. بودجه جداگانه می‌گیرد، هزینه واقعی روی آن جمع می‌شود و در پایان به مرکز هزینه، دارایی یا شیء دیگری تسویه و بسته می‌شود.',
      en: 'A temporary cost object in the ERP for collecting the cost of a specific, short-lived job or event, such as a safety inspection campaign, a study or a training programme. It gets its own budget, collects actual costs, and is finally settled to a cost centre, asset or other object and closed.',
    },
    related: ['cost-centre', 'settlement', 'wbs-element'],
  },
  {
    id: 'recoverable-flag',
    category: 'budget',
    term: { fa: 'نشانه قابل بازیافت بودن (Recoverable flag)', en: 'Recoverable Flag' },
    def: {
      fa: 'فیلد یا ویژگی‌ای در ERP، روی شیء هزینه، عنصر هزینه یا خود ثبت، که مشخص می‌کند هزینه طبق قرارداد نفتی قابل بازیافت است یا نه (و گاهی دسته بازیافت آن، مانند سرمایه‌ای یا جاری). اگر این نشانه از ابتدا، هنگام ساخت AFE یا مرکز هزینه، درست تنظیم شود، گزارش بازیافت هزینه خودکار و قابل حسابرسی تهیه می‌شود؛ اصلاح دستی آن در پایان سال پرخطاست.',
      en: 'A field or attribute in the ERP, on the cost object, the cost element or the posting itself, that marks whether a cost is recoverable under the petroleum contract (and sometimes its recovery category, such as capital or operating). Set correctly from the start, when the AFE or cost centre is created, it makes the cost recovery report automatic and auditable; fixing it by hand at year-end is error-prone.',
    },
    related: ['recoverable-cost', 'cost-recovery', 'afe'],
  },
  {
    id: 'supplementary-afe',
    category: 'budget',
    term: { fa: 'AFE تکمیلی (Supplementary AFE)', en: 'Supplementary AFE' },
    def: {
      fa: 'درخواست بودجه اضافه برای یک AFE مصوب، وقتی هزینه نهایی برآوردی از مبلغ مصوب به‌علاوه حد مجاز توافق‌شده بیشتر می‌شود یا دامنه کار تغییر می‌کند؛ مثلاً وقتی حفاری چاه با مشکل گیر کردن لوله روبه‌رو می‌شود. باید پیش از صرف هزینه اضافه، با ذکر علت و برآورد جدید، به تصویب همان مرجع AFE اصلی (در عملیات مشترک، شرکا) برسد.',
      en: 'A request for additional budget on an approved AFE when the estimated final cost will exceed the approved amount plus the agreed tolerance, or when the scope changes; for example, when drilling runs into a stuck-pipe problem. It must be approved, with the reason and a new estimate, by the same authority as the original AFE (the partners, in a joint operation) before the extra money is spent.',
    },
    related: ['afe', 'budget-tolerance', 'estimate-at-completion'],
  },
  {
    id: 'afe-close-out',
    category: 'budget',
    term: { fa: 'بستن AFE (AFE close-out)', en: 'AFE Close-Out' },
    def: {
      fa: 'فرایند بستن AFE پس از پایان کار: همه رسیدها، برگه‌های تأیید خدمات و فاکتورها ثبت و تعهدات باز لغو می‌شوند، مواد استفاده‌نشده به انبار برگشت داده می‌شود، هزینه نهایی با مبلغ مصوب مقایسه و انحراف‌ها توضیح داده می‌شوند و هزینه‌ها به دارایی یا هزینه دوره تسویه می‌شوند. سپس AFE برای ثبت جدید بسته و گزارش نهایی آن برای شرکا یا طرف دولتی فرستاده می‌شود.',
      en: 'The process of closing an AFE once the work is finished: all receipts, service entry sheets and invoices are posted and open commitments cancelled, unused materials are returned to the warehouse, the final cost is compared with the approved amount and variances are explained, and costs are settled to assets or period expense. The AFE is then blocked for new postings and its final report is sent to the partners or the government side.',
    },
    related: ['afe', 'settlement', 'commitment'],
  },
  {
    id: 'commitment',
    category: 'budget',
    term: { fa: 'تعهد (Commitment)', en: 'Commitment' },
    def: {
      fa: 'مبلغی که با صدور سفارش خرید یا قرارداد به آن متعهد شده‌ایم اما هنوز هزینه واقعی نشده است، چون کالا نرسیده یا خدمت انجام نشده است. تعهد در دفتر کل ثبت نمی‌شود، ولی ERP آن را روی شیء هزینه (AFE، عنصر WBS، مرکز هزینه) نشان می‌دهد تا بودجه آزاد واقعی دیده شود؛ با رسید کالا یا پذیرش خدمات، تعهد کاهش و هزینه واقعی افزایش می‌یابد.',
      en: 'An amount the company is bound to by an issued purchase order or contract that has not yet become an actual cost, because the goods have not arrived or the service has not been performed. It is not posted to the general ledger, but the ERP shows it against the cost object (AFE, WBS element, cost centre) so the truly free budget is visible; on goods receipt or service acceptance the commitment goes down and actual cost goes up.',
    },
    formula: {
      fa: 'بودجه آزاد = بودجه مصوب − هزینه واقعی − تعهدات باز',
      en: 'Available budget = Approved budget − Actual cost − Open commitments',
    },
    related: ['availability-control', 'purchase-order', 'afe'],
  },
  {
    id: 'availability-control',
    category: 'budget',
    term: { fa: 'کنترل بودجه در دسترس (Availability control)', en: 'Availability Control' },
    def: {
      fa: 'کنترلی در ERP که هنگام ثبت درخواست خرید، سفارش یا هزینه، بودجه آزاد شیء هزینه را بررسی می‌کند و اگر مبلغ از بودجه بیشتر شود، بسته به تنظیم، هشدار می‌دهد یا ثبت را متوقف می‌کند. این کنترل جلوی خرج بدون بودجه را پیش از وقوع می‌گیرد، نه پس از آن.',
      en: 'An ERP control that checks the free budget of the cost object when a requisition, order or cost is entered and, depending on its settings, warns or blocks the posting if the amount would exceed the budget. It stops unbudgeted spending before it happens, not after.',
    },
    related: ['commitment', 'budget-tolerance', 'afe'],
  },
  {
    id: 'budget-tolerance',
    category: 'budget',
    term: { fa: 'حد مجاز انحراف (Tolerance)', en: 'Budget Tolerance' },
    def: {
      fa: 'آستانه‌ای (درصد یا مبلغ) که ERP بر پایه آن تصمیم می‌گیرد مصرف بودجه یا اختلاف اسناد را بپذیرد، هشدار دهد یا ثبت را متوقف کند؛ در یک تنظیم فرضی، تا 90 درصد بودجه بدون پیام، از 90 تا 100 درصد با هشدار و بیش از 100 درصد با توقف ثبت. حد مجاز عبور از AFE را موافقت‌نامه عملیات مشترک یا خط‌مشی شرکت تعیین می‌کند و حدهای مجاز قیمت و مقدار در تطبیق سه‌طرفه هم به همین شکل کار می‌کنند.',
      en: 'A threshold (a percentage or amount) the ERP uses to decide whether to accept budget usage or a document mismatch, warn, or block the posting; in an illustrative setup, up to 90% of budget passes silently, 90% to 100% triggers a warning and anything above 100% is blocked. The AFE overrun tolerance is set by the joint operating agreement or company policy, and the price and quantity tolerances in the three-way match work the same way.',
    },
    related: ['availability-control', 'supplementary-afe', 'three-way-match'],
  },
  {
    id: 'budget-transfer',
    category: 'budget',
    term: { fa: 'جابه‌جایی بودجه (Budget transfer)', en: 'Budget Transfer' },
    def: {
      fa: 'انتقال بخشی از بودجه از یک شیء هزینه به دیگری، مثلاً از عنصر WBS «سیمان‌کاری» به «تکمیل چاه»، بدون تغییر کل بودجه مصوب. باید با سند و تأیید طبق جدول تفویض اختیار انجام و در ERP به‌صورت یک کاهش و یک افزایش هم‌مبلغ ثبت شود تا ردپای آن بماند؛ اگر کل بودجه بالا برود، دیگر جابه‌جایی نیست و افزایش بودجه یا AFE تکمیلی لازم است.',
      en: 'Moving part of a budget from one cost object to another, for example from the "cementing" WBS element to "well completion", without changing the total approved budget. It must be documented and approved under the delegation of authority, and recorded in the ERP as a matching decrease and increase so the trail remains; if the total goes up, it is no longer a transfer but a budget increase or supplementary AFE.',
    },
    related: ['budget-version', 'supplementary-afe', 'delegation-of-authority'],
  },
  {
    id: 'estimate-to-complete',
    category: 'budget',
    term: { fa: 'برآورد هزینه تا تکمیل (ETC)', en: 'Estimate to Complete (ETC)' },
    def: {
      fa: 'برآورد هزینه‌ای که از امروز تا پایان کار هنوز لازم است. بهترین برآورد از بازبینی کار باقی‌مانده به دست می‌آید؛ اگر فرض شود کارایی هزینه تا پایان مانند گذشته می‌ماند، می‌توان آن را با فرمول زیر هم تخمین زد.',
      en: 'The estimated cost still needed from today to finish the work. The best estimate comes from re-assessing the remaining work; if cost efficiency is assumed to continue as it has so far, it can also be approximated with the formula below.',
    },
    formula: {
      fa: 'ETC = (BAC − EV) ÷ CPI؛ BAC کل بودجه مصوب کار است',
      en: 'ETC = (BAC − EV) ÷ CPI, where BAC is the total approved budget for the work',
    },
    related: ['estimate-at-completion', 'cost-performance-index', 'earned-value'],
  },
  {
    id: 'estimate-at-completion',
    category: 'budget',
    term: { fa: 'برآورد هزینه در پایان کار (EAC)', en: 'Estimate at Completion (EAC)' },
    def: {
      fa: 'برآورد هزینه کل کار در زمان پایان آن: هزینه واقعی تا امروز به‌علاوه برآورد هزینه تا تکمیل. مقایسه EAC با کل بودجه مصوب (BAC) نشان می‌دهد پروژه یا AFE احتمالاً با چه انحرافی تمام می‌شود و آیا AFE تکمیلی لازم است.',
      en: 'The expected total cost of the work when it is finished: actual cost to date plus the estimate to complete. Comparing EAC with the total approved budget (BAC) shows the likely final variance of the project or AFE and whether a supplementary AFE is needed.',
    },
    formula: {
      fa: 'EAC = AC + ETC؛ انحراف در پایان کار = BAC − EAC',
      en: 'EAC = AC + ETC; Variance at completion = BAC − EAC',
    },
    related: ['estimate-to-complete', 'actual-cost', 'supplementary-afe'],
  },
  {
    id: 'earned-value-management',
    category: 'budget',
    term: { fa: 'مدیریت ارزش کسب‌شده (EVM)', en: 'Earned Value Management (EVM)' },
    def: {
      fa: 'روشی برای سنجش عملکرد پروژه که سه عدد را در یک تاریخ کنار هم می‌گذارد: ارزش برنامه‌ریزی‌شده (PV)، ارزش کسب‌شده (EV) و هزینه واقعی (AC). این سه عدد نشان می‌دهند پروژه از نظر هزینه و زمان جلوتر یا عقب‌تر از برنامه است؛ مقایسه ساده هزینه واقعی با بودجه این را نشان نمی‌دهد، چون مقدار کار انجام‌شده را در نظر نمی‌گیرد.',
      en: 'A method of measuring project performance that puts three numbers side by side at a given date: planned value (PV), earned value (EV) and actual cost (AC). Together they show whether the project is ahead of or behind plan on cost and on schedule; simply comparing actual cost with budget cannot show this, because it ignores how much work has been done.',
    },
    formula: {
      fa: 'انحراف هزینه = EV − AC؛ انحراف زمان‌بندی = EV − PV',
      en: 'Cost variance = EV − AC; Schedule variance = EV − PV',
    },
    related: ['planned-value', 'earned-value', 'actual-cost'],
  },
  {
    id: 'planned-value',
    category: 'budget',
    term: { fa: 'ارزش برنامه‌ریزی‌شده (PV)', en: 'Planned Value (PV)' },
    def: {
      fa: 'بودجه کاری که طبق برنامه زمان‌بندی باید تا یک تاریخ معین انجام می‌شد. مثلاً اگر بودجه حفاری یک چاه 1,000,000 و برنامه آن 40 روزه باشد و تا روز 20 باید نیمی از کار تمام شده باشد، PV در روز 20 برابر 500,000 است.',
      en: 'The budget for the work that, according to the schedule, should have been done by a given date. For example, if a well has a drilling budget of 1,000,000 over a 40-day plan and half the work should be done by day 20, PV on day 20 is 500,000.',
    },
    formula: {
      fa: 'PV = کل بودجه مصوب (BAC) × درصد پیشرفت برنامه‌ریزی‌شده',
      en: 'PV = BAC × Planned % complete',
    },
    related: ['earned-value', 'actual-cost', 'schedule-performance-index'],
  },
  {
    id: 'earned-value',
    category: 'budget',
    term: { fa: 'ارزش کسب‌شده (EV)', en: 'Earned Value (EV)' },
    def: {
      fa: 'ارزش بودجه‌ای کاری که تا یک تاریخ معین واقعاً انجام شده است، به نرخ بودجه و نه به هزینه واقعی. در همان مثال، اگر تا روز 20 فقط 40 درصد کار انجام شده باشد، EV برابر 400,000 است.',
      en: 'The budgeted value of the work actually done by a given date, measured at budget rates rather than actual cost. In the same example, if only 40% of the work is done by day 20, EV is 400,000.',
    },
    formula: {
      fa: 'EV = کل بودجه مصوب (BAC) × درصد پیشرفت واقعی',
      en: 'EV = BAC × Actual % complete',
    },
    related: ['planned-value', 'actual-cost', 'cost-performance-index'],
  },
  {
    id: 'actual-cost',
    category: 'budget',
    term: { fa: 'هزینه واقعی (AC)', en: 'Actual Cost (AC)' },
    def: {
      fa: 'هزینه‌ای که تا یک تاریخ معین واقعاً برای کار انجام‌شده ثبت شده است، شامل رسیدها، خدمات پذیرفته‌شده و بدهی‌های تعهدی؛ تعهدات باز جزو آن نیستند. در همان مثال، اگر تا روز 20 مبلغ 480,000 هزینه ثبت شده باشد، AC برابر 480,000 است.',
      en: 'The cost actually recorded by a given date for the work performed, including receipts, accepted services and accruals; open commitments are not part of it. In the same example, if 480,000 has been booked by day 20, AC is 480,000.',
    },
    related: ['earned-value', 'cost-performance-index', 'commitment'],
  },
  {
    id: 'cost-performance-index',
    category: 'budget',
    term: { fa: 'شاخص عملکرد هزینه (CPI)', en: 'Cost Performance Index (CPI)' },
    def: {
      fa: 'نسبت ارزش کسب‌شده به هزینه واقعی: نشان می‌دهد در برابر هر واحد پول خرج‌شده، چه مقدار کار به ارزش بودجه انجام شده است. CPI کمتر از 1 یعنی کار گران‌تر از بودجه پیش می‌رود؛ در همان مثال، 400,000 ÷ 480,000 حدود 0.83 است.',
      en: 'The ratio of earned value to actual cost: how much budgeted work was done for each unit of money spent. A CPI below 1 means the work is running over budget; in the same example, 400,000 ÷ 480,000 is about 0.83.',
    },
    formula: {
      fa: 'CPI = EV ÷ AC',
      en: 'CPI = EV ÷ AC',
    },
    related: ['earned-value', 'actual-cost', 'estimate-to-complete'],
  },
  {
    id: 'schedule-performance-index',
    category: 'budget',
    term: { fa: 'شاخص عملکرد زمان‌بندی (SPI)', en: 'Schedule Performance Index (SPI)' },
    def: {
      fa: 'نسبت ارزش کسب‌شده به ارزش برنامه‌ریزی‌شده: نشان می‌دهد کار نسبت به برنامه با چه سرعتی پیش می‌رود. SPI کمتر از 1 یعنی عقب‌تر از برنامه؛ در همان مثال، 400,000 ÷ 500,000 برابر 0.8 است.',
      en: 'The ratio of earned value to planned value: how fast work is progressing compared with the plan. An SPI below 1 means behind schedule; in the same example, 400,000 ÷ 500,000 is 0.8.',
    },
    formula: {
      fa: 'SPI = EV ÷ PV',
      en: 'SPI = EV ÷ PV',
    },
    related: ['earned-value', 'planned-value', 'cost-performance-index'],
  },
  {
    id: 'settlement',
    category: 'budget',
    term: { fa: 'تسویه هزینه (Settlement)', en: 'Settlement' },
    def: {
      fa: 'انتقال دوره‌ای یا پایانی هزینه‌های جمع‌شده روی یک شیء هزینه موقت، مانند عنصر WBS، سفارش داخلی یا دستور کار، به گیرنده نهایی طبق قاعده تسویه: دارایی در جریان تکمیل، دارایی ثابت، مرکز هزینه یا حساب سود و زیان. تسویه هزینه تازه‌ای نمی‌سازد؛ فقط هزینه را جابه‌جا و مانده شیء فرستنده را صفر می‌کند.',
      en: 'The periodic or final transfer of costs collected on a temporary cost object, such as a WBS element, internal order or work order, to its final receiver according to the settlement rule: assets under construction, a fixed asset, a cost centre or a profit-and-loss account. Settlement creates no new cost; it only moves cost and clears the sender to zero.',
    },
    formula: {
      fa: 'نمونه: بدهکار دارایی در جریان تکمیل، بستانکار عنصر WBS',
      en: 'Example: Dr Assets under construction, Cr WBS element',
    },
    related: ['work-order-settlement', 'assets-under-construction', 'wbs-element'],
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
      en: 'A liquidity ratio showing how many units of current assets stand behind each unit of current liabilities. A ratio above 1 is generally reassuring, but a very high one may point to idle resources such as excess inventory.',
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
  // ── Foreign currency (IAS 21) ──
  {
    id: 'functional-currency',
    category: 'statements',
    term: { fa: 'واحد پول عملیاتی', en: 'Functional Currency' },
    def: {
      fa: 'واحد پول محیط اقتصادی اصلی که واحد تجاری در آن فعالیت می‌کند؛ یعنی پولی که بیشتر قیمت‌ها، درآمدها و هزینه‌ها با آن تعیین می‌شوند. هر معامله با پول دیگر، معامله ارزی است. بسیاری از شرکت‌های نفت و گاز بالادستی واحد پول عملیاتی دلاری دارند، چون نفت به دلار قیمت‌گذاری و تأمین مالی می‌شود (IAS 21).',
      en: 'The currency of the primary economic environment in which the entity operates: the currency that mainly determines its prices, revenues and costs. Any transaction in another currency is a foreign-currency transaction. Many upstream oil and gas companies have a US dollar functional currency because oil is priced and financed in dollars (IAS 21).',
    },
    related: ['presentation-currency', 'monetary-item', 'exchange-difference'],
  },
  {
    id: 'presentation-currency',
    category: 'statements',
    term: { fa: 'واحد پول گزارشگری', en: 'Presentation Currency' },
    def: {
      fa: 'واحد پولی که صورت‌های مالی با آن ارائه می‌شود. می‌تواند با واحد پول عملیاتی فرق داشته باشد؛ در این صورت صورت‌ها به واحد پول گزارشگری تسعیر می‌شوند و تفاوت آن در اندوخته تسعیر ارز در حقوق مالکانه می‌نشیند.',
      en: 'The currency in which the financial statements are presented. It may differ from the functional currency; the statements are then translated into it and the resulting difference goes to the translation reserve in equity.',
    },
    related: ['functional-currency', 'translation-reserve'],
  },
  {
    id: 'monetary-item',
    category: 'accounts',
    term: { fa: 'اقلام پولی', en: 'Monetary Items' },
    def: {
      fa: 'وجه نقد و دارایی‌ها و بدهی‌هایی که با تعداد ثابت یا قابل تعیینی از واحد پول دریافت یا پرداخت می‌شوند، مثل حساب‌های دریافتنی، پرداختنی و وام. اقلام پولی ارزی در پایان دوره با نرخ پایان دوره تسعیر می‌شوند؛ اقلام غیرپولی مثل دارایی ثابت، موجودی کالا و پیش‌پرداخت با نرخ تاریخی می‌مانند.',
      en: 'Cash, and assets and liabilities to be received or paid in a fixed or determinable number of units of currency, such as receivables, payables and loans. Foreign-currency monetary items are retranslated at the closing rate at period end; non-monetary items such as fixed assets, inventory and prepayments stay at the historical rate.',
    },
    related: ['exchange-difference', 'fx-revaluation'],
  },
  {
    id: 'exchange-difference',
    category: 'adjusting',
    term: { fa: 'تفاوت تسعیر ارز', en: 'Exchange Difference' },
    def: {
      fa: 'تفاوتی که از تبدیل همان مبلغ ارزی با نرخ‌های متفاوت پدید می‌آید. اگر طلب یا بدهی ارزی تسویه شود، تفاوت «تحقق‌یافته» است؛ اگر در پایان دوره هنوز باز باشد و تسعیر شود، «تحقق‌نیافته» است. هر دو معمولاً در سود و زیان شناسایی می‌شوند.',
      en: 'The difference that arises from converting the same amount of foreign currency at different rates. On settlement of a foreign-currency receivable or payable it is realised; when an open balance is retranslated at period end it is unrealised. Both are normally recognised in profit or loss.',
    },
    formula: {
      fa: 'تفاوت تسعیر = مبلغ ارزی × (نرخ جدید − نرخ ثبت‌شده)',
      en: 'Exchange difference = Foreign amount × (New rate − Booked rate)',
    },
    related: ['monetary-item', 'fx-revaluation'],
  },
  {
    id: 'fx-revaluation',
    category: 'adjusting',
    term: { fa: 'تسعیر ارز پایان دوره', en: 'Period-End FX Revaluation' },
    def: {
      fa: 'اجرای پایان دوره در ERP که مانده‌های باز ارزی اقلام پولی (بانک، دریافتنی، پرداختنی، وام) را با نرخ پایان دوره از جدول نرخ ارز دوباره ارزیابی می‌کند و سود یا زیان تسعیر تحقق‌نیافته را ثبت می‌کند. سند آن معمولاً در روز اول دوره بعد خودکار برگشت می‌خورد.',
      en: 'An ERP period-end run that revalues open foreign-currency balances of monetary items (bank, receivables, payables, loans) at the closing rate from the exchange-rate table and posts the unrealised gain or loss. The entry usually reverses automatically on the first day of the next period.',
    },
    related: ['exchange-difference', 'monetary-item', 'close-calendar'],
  },
  {
    id: 'translation-reserve',
    category: 'equity',
    term: { fa: 'اندوخته تسعیر ارز عملیات خارجی', en: 'Foreign Currency Translation Reserve' },
    def: {
      fa: 'جزئی از حقوق مالکانه (سود و زیان جامع دیگر) که تفاوت تسعیر صورت‌های مالی یک عملیات خارجی به واحد پول گزارشگری را جمع می‌کند: دارایی‌ها و بدهی‌ها با نرخ پایان دوره و درآمدها و هزینه‌ها با نرخ معامله یا میانگین تسعیر می‌شوند. هنگام واگذاری عملیات خارجی به سود و زیان منتقل می‌شود.',
      en: "A component of equity (other comprehensive income) that collects the difference from translating a foreign operation's statements into the presentation currency: assets and liabilities at the closing rate, income and expenses at transaction or average rates. It is reclassified to profit or loss when the foreign operation is disposed of.",
    },
    related: ['presentation-currency', 'functional-currency'],
  },

  // ── Leases (IFRS 16) ──
  {
    id: 'lease',
    category: 'liabilities',
    term: { fa: 'اجاره (IFRS 16)', en: 'Lease (IFRS 16)' },
    def: {
      fa: 'قراردادی که حق کنترل استفاده از یک دارایی مشخص را برای یک دوره در ازای مابه‌ازا منتقل می‌کند. اجاره‌کننده برای هر اجاره، جز معافیت‌های کوتاه‌مدت و کم‌ارزش، یک دارایی حق استفاده و یک بدهی اجاره شناسایی می‌کند. در نفت و گاز، اجاره دکل، خودرو، دفتر و انبار نمونه‌اند؛ قرارداد دکل اغلب یک جزء اجاره و یک جزء خدمات حفاری دارد.',
      en: 'A contract that conveys the right to control the use of an identified asset for a period in exchange for consideration. For every lease, except the short-term and low-value exemptions, the lessee recognises a right-of-use asset and a lease liability. In oil and gas, rigs, vehicles, offices and warehouses are typical; a rig contract often contains a lease component and a drilling-services component.',
    },
    related: ['right-of-use-asset', 'lease-liability', 'lease-exemptions'],
  },
  {
    id: 'right-of-use-asset',
    category: 'fixedAssets',
    term: { fa: 'دارایی حق استفاده', en: 'Right-of-Use Asset' },
    def: {
      fa: 'دارایی اجاره‌کننده که حق استفاده از دارایی اجاره‌ای را نشان می‌دهد. در شروع اجاره برابر است با بدهی اجاره به‌علاوه پرداخت‌های پیش از شروع، مخارج مستقیم اولیه و برآورد مخارج برچیدن، منهای مشوق‌های دریافتی. سپس معمولاً به روش خط مستقیم طی مدت اجاره (یا عمر مفید) مستهلک می‌شود.',
      en: "The lessee's asset representing its right to use the leased asset. At commencement it equals the lease liability plus payments made before commencement, initial direct costs and estimated restoration costs, less incentives received. It is then usually depreciated straight-line over the lease term (or useful life).",
    },
    formula: {
      fa: 'دارایی حق استفاده = بدهی اجاره + پرداخت‌های پیش از شروع + مخارج مستقیم اولیه + مخارج برچیدن − مشوق‌ها',
      en: 'Right-of-use asset = Lease liability + Prepaid payments + Initial direct costs + Restoration costs − Incentives',
    },
    related: ['lease', 'lease-liability'],
  },
  {
    id: 'lease-liability',
    category: 'liabilities',
    term: { fa: 'بدهی اجاره', en: 'Lease Liability' },
    def: {
      fa: 'ارزش فعلی اجاره‌بهاهای پرداخت‌نشده، تنزیل‌شده با نرخ ضمنی اجاره یا اگر آن نرخ به‌آسانی تعیین‌پذیر نباشد، با نرخ استقراض فزاینده اجاره‌کننده. هر دوره هزینه بهره به آن اضافه و اجاره‌بهای پرداختی از آن کم می‌شود.',
      en: "The present value of the lease payments not yet paid, discounted at the rate implicit in the lease or, if that cannot be readily determined, the lessee's incremental borrowing rate. Each period interest is added to it and the payment made is deducted.",
    },
    formula: {
      fa: 'مانده پایان دوره = مانده اول دوره + (مانده اول دوره × نرخ) − اجاره‌بهای پرداختی',
      en: 'Closing balance = Opening balance + (Opening balance × Rate) − Payment',
    },
    related: ['lease', 'right-of-use-asset', 'incremental-borrowing-rate'],
  },
  {
    id: 'lease-exemptions',
    category: 'liabilities',
    term: { fa: 'معافیت اجاره کوتاه‌مدت و کم‌ارزش', en: 'Short-Term and Low-Value Lease Exemptions' },
    def: {
      fa: 'اجاره‌کننده می‌تواند برای اجاره‌های 12 ماه یا کمتر (بدون اختیار خرید) و اجاره دارایی‌های کم‌ارزش، دارایی حق استفاده و بدهی اجاره شناسایی نکند و اجاره‌بهای آن را به‌طور یکنواخت هزینه کند. انتخاب برای اجاره کوتاه‌مدت به تفکیک طبقه دارایی و برای کم‌ارزش به تفکیک هر اجاره است.',
      en: 'A lessee may choose not to recognise a right-of-use asset and lease liability for leases of 12 months or less (with no purchase option) and for leases of low-value assets, and instead expense the payments on a straight-line basis. The short-term election is made by class of asset; the low-value election lease by lease.',
    },
    related: ['lease', 'lease-liability'],
  },
  {
    id: 'incremental-borrowing-rate',
    category: 'liabilities',
    term: { fa: 'نرخ استقراض فزاینده', en: 'Incremental Borrowing Rate' },
    def: {
      fa: 'نرخ بهره‌ای که اجاره‌کننده باید بپردازد تا وجوه لازم برای تهیه دارایی‌ای با ارزش مشابه دارایی حق استفاده را با مدت و وثیقه مشابه و در محیط اقتصادی مشابه قرض بگیرد. وقتی نرخ ضمنی اجاره معلوم نیست، بدهی اجاره با این نرخ تنزیل می‌شود.',
      en: 'The rate the lessee would have to pay to borrow, over a similar term, with similar security and in a similar economic environment, the funds needed to obtain an asset of similar value to the right-of-use asset. When the rate implicit in the lease is not known, the lease liability is discounted at this rate.',
    },
    related: ['lease-liability'],
  },

  // ── Group accounts and consolidation ──
  {
    id: 'consolidated-financial-statements',
    category: 'statements',
    term: { fa: 'صورت‌های مالی تلفیقی', en: 'Consolidated Financial Statements' },
    def: {
      fa: 'صورت‌های مالی گروه که شرکت اصلی و شرکت‌های فرعی را مانند یک واحد اقتصادی نشان می‌دهد: اقلام سطر به سطر جمع می‌شوند و مانده‌ها، معاملات، سودهای تحقق‌نیافته درون‌گروهی و سرمایه‌گذاری شرکت اصلی در برابر حقوق مالکانه شرکت فرعی حذف می‌شوند (IFRS 10).',
      en: "The group's statements presenting the parent and its subsidiaries as a single economic entity: items are added line by line, and intragroup balances, transactions, unrealised profits and the parent's investment against the subsidiary's equity are eliminated (IFRS 10).",
    },
    related: ['elimination-entry', 'intercompany-transaction', 'non-controlling-interest'],
  },
  {
    id: 'intercompany-transaction',
    category: 'recording',
    term: { fa: 'معامله درون‌گروهی', en: 'Intercompany Transaction' },
    def: {
      fa: 'فروش، خدمات، وام یا بازپرداخت هزینه بین شرکت‌های یک گروه، مثل خدمات حفاری شرکت فرعی به شرکت اصلی. دو طرف باید آن را با مبلغ و تاریخ یکسان و با فیلد طرف معامله ثبت کنند تا در پایان دوره تطبیق و در تلفیق حذف شود.',
      en: "A sale, service, loan or cost recharge between companies in the same group, such as a subsidiary's drilling services to the parent. Both sides must record it with the same amount and date and with the trading-partner field, so it can be matched at period end and eliminated on consolidation.",
    },
    related: ['trading-partner', 'elimination-entry'],
  },
  {
    id: 'elimination-entry',
    category: 'recording',
    term: { fa: 'ثبت حذفی تلفیق', en: 'Elimination Entry' },
    def: {
      fa: 'ثبتی که فقط در کاربرگ یا دفتر تلفیق زده می‌شود، نه در دفاتر شرکت‌ها، و اثر معاملات درون‌گروهی را از صورت‌های تلفیقی پاک می‌کند: طلب و بدهی متقابل، درآمد و هزینه متقابل، سود تحقق‌نیافته در موجودی و سرمایه‌گذاری در برابر حقوق مالکانه شرکت فرعی.',
      en: "An entry made only in the consolidation worksheet or ledger, never in the companies' own books, that removes the effect of intragroup transactions from the consolidated statements: matching receivables and payables, matching revenue and expense, unrealised profit in inventory, and the investment against the subsidiary's equity.",
    },
    related: ['consolidated-financial-statements', 'intercompany-transaction'],
  },
  {
    id: 'non-controlling-interest',
    category: 'equity',
    term: { fa: 'منافع فاقد حق کنترل', en: 'Non-Controlling Interest (NCI)' },
    def: {
      fa: 'سهمی از حقوق مالکانه شرکت فرعی که به شرکت اصلی تعلق ندارد. اگر شرکت اصلی 80% سهام فرعی را داشته باشد، 20% خالص دارایی‌ها و 20% سود آن متعلق به منافع فاقد حق کنترل است و جداگانه در حقوق مالکانه تلفیقی نشان داده می‌شود.',
      en: "The part of a subsidiary's equity not attributable to the parent. If the parent owns 80% of the subsidiary, 20% of its net assets and of its profit belong to the non-controlling interest, shown separately within consolidated equity.",
    },
    formula: {
      fa: 'سهم منافع فاقد حق کنترل از سود = سود شرکت فرعی × درصد سهام سایرین',
      en: "NCI share of profit = Subsidiary's profit × Others' ownership %",
    },
    related: ['consolidated-financial-statements'],
  },
  {
    id: 'trading-partner',
    category: 'recording',
    term: { fa: 'طرف معامله درون‌گروهی', en: 'Trading Partner' },
    def: {
      fa: 'فیلدی در سند ERP که کد شرکت طرف مقابل در گروه (مثلاً MP02) را نگه می‌دارد. با این فیلد، سیستم مانده‌ها و معاملات درون‌گروهی را خودکار تطبیق می‌دهد و ثبت‌های حذفی را آماده می‌کند.',
      en: 'A field on ERP postings holding the company code of the group company on the other side (for example MP02). With it the system matches intragroup balances and transactions automatically and prepares the elimination entries.',
    },
    related: ['intercompany-transaction', 'elimination-entry'],
  },

  // ── Oil and gas revenue (IFRS 15) ──
  {
    id: 'five-step-model',
    category: 'statements',
    term: { fa: 'الگوی پنج‌مرحله‌ای درآمد (IFRS 15)', en: 'Five-Step Revenue Model (IFRS 15)' },
    def: {
      fa: 'چارچوب شناسایی درآمد از قرارداد با مشتری: شناسایی قرارداد، شناسایی تعهدهای عملکرد، تعیین مبلغ معامله، تخصیص مبلغ به تعهدها و شناسایی درآمد هنگام ایفای هر تعهد. در فروش نفت خام، کنترل معمولاً در نقطه بارگیری طبق شرایط تحویل منتقل می‌شود.',
      en: 'The framework for recognising revenue from contracts with customers: identify the contract, identify the performance obligations, determine the transaction price, allocate it to the obligations, and recognise revenue as each obligation is satisfied. In crude sales, control usually passes at the loading point under the delivery terms.',
    },
    related: ['performance-obligation', 'revenue-recognition'],
  },
  {
    id: 'performance-obligation',
    category: 'statements',
    term: { fa: 'تعهد عملکرد', en: 'Performance Obligation' },
    def: {
      fa: 'وعده‌ای در قرارداد با مشتری برای انتقال کالا یا خدمتی متمایز، مثل تحویل یک محموله نفت خام. درآمد زمانی (یا به تدریج همان‌طور که) تعهد ایفا می‌شود شناسایی می‌شود، یعنی وقتی کنترل به مشتری منتقل شده است.',
      en: 'A promise in a contract with a customer to transfer a distinct good or service, such as delivering a cargo of crude oil. Revenue is recognised when (or as) the obligation is satisfied, that is, when control passes to the customer.',
    },
    related: ['five-step-model', 'revenue-recognition'],
  },
  {
    id: 'entitlement',
    category: 'oilgas',
    term: { fa: 'سهم برداشت (Entitlement)', en: 'Entitlement' },
    def: {
      fa: 'سهمی از تولید که هر شریک یا پیمانکار حق دارد برداشت و بفروشد: در قرارداد عملیات مشترک برابر سهم مشارکت، و در قرارداد مشارکت در تولید برابر نفت هزینه به‌علاوه سهم نفت سود. درآمد بر اساس فروش واقعی شناسایی می‌شود و تفاوت برداشت با سهم، بیش‌برداشت یا کم‌برداشت است.',
      en: 'The share of production each partner or contractor is entitled to lift and sell: its working-interest share under a joint operating agreement, or cost oil plus its profit-oil share under a production sharing contract. Revenue follows actual sales, and the gap between liftings and entitlement is an overlift or underlift.',
    },
    related: ['lifting', 'overlift-underlift', 'working-interest'],
  },
  {
    id: 'lifting',
    category: 'oilgas',
    term: { fa: 'برداشت (Lifting)', en: 'Lifting' },
    def: {
      fa: 'بارگیری و تحویل فیزیکی نفت خام به خریدار توسط یک شریک، معمولاً در محموله‌های بزرگ نفتکش. چون برداشت‌ها دسته‌ای انجام می‌شوند، برداشت هر شریک در هر تاریخ به‌ندرت دقیقاً با سهمش برابر است.',
      en: "The physical loading and delivery of crude oil to a buyer by one partner, usually in large tanker cargoes. Because liftings happen in parcels, a partner's liftings rarely equal its entitlement on any given date.",
    },
    related: ['entitlement', 'overlift-underlift'],
  },
  {
    id: 'overlift-underlift',
    category: 'oilgas',
    term: { fa: 'بیش‌برداشت و کم‌برداشت', en: 'Overlift and Underlift' },
    def: {
      fa: 'بیش‌برداشت یعنی شریک بیشتر از سهمش برداشت کرده و به شرکای دیگر نفت بدهکار است؛ کم‌برداشت یعنی کمتر برداشته و از آن‌ها طلبکار است. بیش‌برداشت بدهی و کم‌برداشت دارایی ثبت می‌شود و با بهای تمام‌شده یا ارزش بازار، طبق رویه شرکت، اندازه‌گیری و در برداشت‌های بعدی یا نقدی تسویه می‌شود.',
      en: 'An overlift means a partner has lifted more than its entitlement and owes oil to the other partners; an underlift means it has lifted less and is owed. An overlift is recorded as a liability and an underlift as an asset, measured at cost or market value depending on company policy, and settled through later liftings or in cash.',
    },
    related: ['entitlement', 'lifting'],
  },

  // ── Cost allocation ──
  {
    id: 'allocation-base',
    category: 'budget',
    term: { fa: 'مبنای تسهیم', en: 'Allocation Base' },
    def: {
      fa: 'معیاری که هزینه غیرمستقیم با آن بین گیرندگان تقسیم می‌شود، مثل تعداد کارکنان، ساعت کار، متراژ، حجم تولید یا تعداد چاه. مبنای خوب همان چیزی است که هزینه را ایجاد می‌کند و باید مستند باشد، چون شرکا و دولت در حسابرسی کاست ریکاوری آن را بررسی می‌کنند.',
      en: 'The measure used to share an indirect cost among its receivers, such as headcount, labour hours, floor area, production volume or number of wells. A good base reflects what actually drives the cost, and it must be documented because partners and the government review it in cost-recovery audits.',
    },
    formula: {
      fa: 'سهم هر گیرنده = هزینه قابل تسهیم × (مبنای گیرنده ÷ جمع مبنا)',
      en: "Receiver's share = Cost to allocate × (Receiver's base ÷ Total base)",
    },
    related: ['step-down-allocation', 'cost-centre', 'overhead-rate'],
  },
  {
    id: 'step-down-allocation',
    category: 'budget',
    term: { fa: 'تسهیم مرحله‌ای (Step-down)', en: 'Step-Down Allocation' },
    def: {
      fa: 'روشی که هزینه مراکز خدماتی را یکی پس از دیگری به مراکز خدماتی باقی‌مانده و مراکز تولیدی تسهیم می‌کند. مرکزی که هزینه‌اش تسهیم شد دیگر هزینه‌ای دریافت نمی‌کند. از روش مستقیم دقیق‌تر است چون خدمات مراکز خدماتی به یکدیگر را هم در نظر می‌گیرد.',
      en: 'A method that allocates the costs of service cost centres one after another to the remaining service centres and to the production centres. Once a centre has been allocated it receives no further costs. It is more accurate than the direct method because it reflects services that service centres provide to each other.',
    },
    related: ['allocation-base', 'cost-centre'],
  },
  {
    id: 'overhead-rate',
    category: 'budget',
    term: { fa: 'نرخ سربار', en: 'Overhead Rate' },
    def: {
      fa: 'نرخی که سربار با آن به دستور کارها، پروژه‌ها یا چاه‌ها جذب می‌شود. نرخ از تقسیم سربار بودجه‌شده بر مبنای بودجه‌شده به دست می‌آید و سربار جذب‌شده برابر نرخ ضرب در مبنای واقعی است. در عملیات مشترک، سربار اپراتور طبق روش حسابداری قرارداد به شرکا شارژ می‌شود.',
      en: "The rate at which overhead is absorbed into work orders, projects or wells. It is budgeted overhead divided by the budgeted base, and absorbed overhead equals the rate times the actual base. In joint operations, the operator's overhead is charged to partners as the agreement's accounting procedure sets out.",
    },
    formula: {
      fa: 'نرخ سربار = سربار بودجه‌شده ÷ مبنای بودجه‌شده',
      en: 'Overhead rate = Budgeted overhead ÷ Budgeted base',
    },
    related: ['allocation-base', 'joint-interest-billing'],
  },
  {
    id: 'assessment-distribution',
    category: 'budget',
    term: { fa: 'تخصیص کلی و توزیع', en: 'Assessment and Distribution' },
    def: {
      fa: 'دو روش تسهیم دوره‌ای در ERP. در توزیع، هزینه با همان عنصر هزینه اولیه (مثلاً برق) به گیرنده می‌رود و جزئیات حفظ می‌شود. در تخصیص کلی، هزینه‌ها جمع شده و با یک عنصر هزینه ثانویه منتقل می‌شوند؛ ساده‌تر است ولی گیرنده جزئیات را نمی‌بیند. برخی ERPها (مثلاً SAP) همین نام‌ها را به کار می‌برند.',
      en: 'Two periodic allocation methods in an ERP. Distribution moves costs to receivers under their original primary cost elements (for example power), keeping the detail. Assessment groups the costs and moves them under one secondary cost element; it is simpler but the receiver loses the detail. Some ERPs (for example SAP) use these names.',
    },
    related: ['allocation-base', 'cost-centre'],
  },

  // ── Period close ──
  {
    id: 'close-calendar',
    category: 'adjusting',
    term: { fa: 'تقویم بستن دوره', en: 'Close Calendar' },
    def: {
      fa: 'برنامه زمانی کارهای بستن ماه، معمولاً از دو روز پیش از پایان ماه تا روز پنجم ماه بعد، با مسئول، وابستگی و مهلت هر کار: تفکیک دوره، ذخیره‌ها، استهلاک، تسویه دستور کارها و WBS، تسهیم، تسعیر ارز، تطبیق‌ها، گزارش‌ها و قفل دوره.',
      en: 'The schedule of month-end tasks, typically from two days before month end to the fifth day of the next month, with an owner, dependencies and a deadline for each: cut-off, accruals, depreciation, work-order and WBS settlement, allocations, FX revaluation, reconciliations, reporting and the period lock.',
    },
    related: ['cut-off', 'fx-revaluation', 'suspense-account'],
  },
  {
    id: 'cut-off',
    category: 'adjusting',
    term: { fa: 'تفکیک دوره (Cut-off)', en: 'Cut-Off' },
    def: {
      fa: 'اطمینان از اینکه هر معامله در دوره‌ای که رخ داده ثبت شود: کالای رسیده تا پایان دوره با GRN همان دوره، خدمات پذیرفته‌شده با SES همان دوره، و فروش و فاکتورها در دوره درست. خطای تفکیک دوره هر دو دوره را نادرست می‌کند.',
      en: 'Making sure each transaction is recorded in the period in which it happened: goods received by period end on a GRN dated in that period, services accepted on an SES in that period, and sales and invoices in the right period. A cut-off error misstates both periods.',
    },
    related: ['received-not-invoiced-accrual', 'gr-ir-reconciliation', 'close-calendar'],
  },
  {
    id: 'suspense-account',
    category: 'recording',
    term: { fa: 'حساب معلق', en: 'Suspense Account' },
    def: {
      fa: 'حساب موقتی که مبالغی را که هنوز طبقه‌بندی نشده‌اند نگه می‌دارد، مثل واریز بانکی ناشناخته. باید مرتب تسویه شود؛ مانده آن در پایان دوره باید بررسی و توضیح داده شود و رشد مداوم آن نشانه ضعف کنترل است.',
      en: 'A temporary account holding amounts that cannot yet be classified, such as an unidentified bank receipt. It must be cleared regularly; any period-end balance must be investigated and explained, and a growing balance is a sign of weak control.',
    },
    related: ['bank-reconciliation', 'internal-control', 'close-calendar'],
  },
]
