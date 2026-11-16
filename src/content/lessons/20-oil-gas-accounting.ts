import type { Lesson } from '../types'

/* Account titles used by Pars Arya Oil & Gas (codes from its chart of accounts). */
const ac = {
  bank: { fa: '1110 موجودی نقد (بانک)', en: '1110 Cash at bank' },
  inventory: { fa: '1310 موجودی مواد و قطعات', en: '1310 Materials and spares inventory' },
  ee: { fa: '1505 دارایی‌های اکتشاف و ارزیابی', en: '1505 Exploration and evaluation assets' },
  auc: { fa: '1510 دارایی‌های در جریان تکمیل', en: '1510 Assets under construction' },
  ogp: { fa: '1520 دارایی‌های نفت و گاز', en: '1520 Oil and gas properties' },
  accDepl: { fa: '1595 استهلاک انباشته ذخایر', en: '1595 Accumulated depletion' },
  ap: { fa: '2110 حساب‌های پرداختنی', en: '2110 Accounts payable' },
  grir: { fa: '2120 حساب واسط رسید کالا و فاکتور (GR/IR)', en: '2120 GR/IR clearing account' },
  provision: { fa: '2510 ذخیره برچیدن تأسیسات', en: '2510 Decommissioning provision' },
  explExp: { fa: '5610 هزینه اکتشاف', en: '5610 Exploration expense' },
  depletion: { fa: '5220 هزینه استهلاک ذخایر', en: '5220 Depletion expense' },
  finance: { fa: '5710 هزینه مالی (آزادسازی تنزیل)', en: '5710 Finance cost (unwinding of discount)' },
  loss: { fa: '5720 زیان برچیدن تأسیسات', en: '5720 Loss on decommissioning' },
}

const t = (fa: string, en: string) => ({ fa, en })
const yr = (n: number) => ({ fa: `سال ${n}`, en: `Year ${n}` })
const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'oil-gas-accounting',
  number: 20,
  level: 'advanced',
  minutes: 32,
  icon: 'Building2',
  tone: 'asset',
  title: { fa: 'حسابداری نفت و گاز بالادستی', en: 'Upstream Oil and Gas Accounting' },
  summary: {
    fa: 'از اکتشاف تا برچیدن: هزینه‌های اکتشاف و ارزیابی طبق IFRS 6، روش تلاش‌های موفق و روش بهای کامل، دارایی‌های نفت و گاز، استهلاک ذخایر به روش واحد تولید، ذخیره برچیدن تأسیسات طبق IAS 37 و نقش چاه و AFE به‌عنوان شیء هزینه در ERP.',
    en: 'From exploration to decommissioning: exploration and evaluation costs under IFRS 6, successful efforts and full cost, oil and gas properties, depletion by the units-of-production method, decommissioning provisions under IAS 37, and wells and AFEs as cost objects in the ERP.',
  },
  objectives: [
    {
      fa: 'مراحل عمر یک میدان و رفتار حسابداری هزینه‌های هر مرحله را توضیح دهید',
      en: 'Describe the phases of a field’s life and how the costs of each phase are accounted for',
    },
    {
      fa: 'قواعد IFRS 6 برای هزینه‌های اکتشاف و ارزیابی و تفاوت روش تلاش‌های موفق و بهای کامل را بیان کنید',
      en: 'State the IFRS 6 rules for exploration and evaluation costs and the difference between successful efforts and full cost',
    },
    {
      fa: 'استهلاک ذخایر را به روش واحد تولید محاسبه و ثبت کنید، از جمله پس از تجدیدنظر در برآورد ذخایر',
      en: 'Calculate and record depletion by the units-of-production method, including after a reserves revision',
    },
    {
      fa: 'ذخیره برچیدن تأسیسات را اندازه‌گیری و ثبت کنید و آزادسازی تنزیل را محاسبه کنید',
      en: 'Measure and record a decommissioning provision and compute the unwinding of the discount',
    },
    {
      fa: 'ساختار چاه، پروژه، WBS و AFE را در ERP برای جمع‌آوری و سرمایه‌ای کردن هزینه‌ها به کار ببرید',
      en: 'Use the well, project, WBS and AFE structure in the ERP to collect and capitalise costs',
    },
  ],
  sections: [
    {
      id: 'why-different',
      title: { fa: 'چرا حسابداری نفت و گاز متفاوت است؟', en: 'Why Oil and Gas Accounting Is Different' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'شرکت نفت و گاز پارس‌آریا در بلوک آریا دو چاه اکتشافی حفر کرد. چاه AR-X1 به نفت رسید و چاه AR-X2 با 8,000,000 هزینه **خشک** درآمد. حالا مدیر مالی باید تصمیم بگیرد: 8,000,000 چاه خشک دارایی است یا هزینه؟ میدان آریا پیش از تولید اولین بشکه ده‌ها میلیون هزینه توسعه می‌خواهد، پانزده تا بیست سال تولید می‌کند و در پایان، چاه‌ها باید مسدود و محل پاک‌سازی شود. هر یک از این واقعیت‌ها یک پرسش حسابداری است که در این درس پاسخ می‌دهیم.',
            en: 'Pars Arya Oil & Gas drilled two exploration wells in the Arya block. Well AR-X1 found oil, while AR-X2 came in **dry** after costing 8,000,000. Now the finance manager must decide: is the 8,000,000 dry hole an asset or an expense? The Arya field needs tens of millions of development spending before its first barrel, will produce for fifteen to twenty years, and at the end its wells must be plugged and the site restored. Each of these facts is an accounting question, and this lesson answers them.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'صنعت نفت و گاز سه بخش دارد: **بالادستی** (اکتشاف و تولید، یا E&P)، **میان‌دستی** (انتقال و ذخیره‌سازی با خط لوله و پایانه) و **پایین‌دستی** (پالایش و فروش فرآورده‌ها). این درس فقط درباره بالادستی است؛ جایی که پارس‌آریا کار می‌کند.',
            en: 'The oil and gas industry has three segments: **upstream** (exploration and production, or E&P), **midstream** (transport and storage by pipeline and terminal) and **downstream** (refining and marketing of products). This lesson is only about upstream, where Pars Arya works.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'مراحل عمر یک میدان و رفتار حسابداری معمول', en: 'The phases of a field’s life and their usual accounting' },
          head: [
            { fa: 'مرحله', en: 'Phase' },
            { fa: 'فعالیت‌ها', en: 'Activities' },
            { fa: 'رفتار حسابداری معمول (IFRS)', en: 'Usual accounting (IFRS)' },
          ],
          rows: [
            [t('پیش از اخذ مجوز', 'Pre-licence'), t('مطالعات منطقه‌ای پیش از گرفتن حق اکتشاف', 'Regional studies before the right to explore is obtained'), t('هزینه دوره؛ خارج از IFRS 6', 'Expensed; outside IFRS 6')],
            [t('اکتشاف و ارزیابی', 'Exploration and evaluation'), t('لرزه‌نگاری، چاه اکتشافی و چاه ارزیابی', 'Seismic, exploration and appraisal wells'), t('طبق رویه شرکت ذیل IFRS 6: دارایی اکتشاف و ارزیابی یا هزینه', 'Per the company’s IFRS 6 policy: E&E asset or expense')],
            [t('توسعه', 'Development'), t('چاه‌های توسعه‌ای، جداکننده‌ها، خطوط جریان، خط لوله', 'Development wells, separators, flowlines, pipeline'), t('سرمایه‌ای: ابتدا در جریان تکمیل، سپس دارایی‌های نفت و گاز', 'Capitalised: first under construction, then oil and gas properties')],
            [t('تولید', 'Production'), t('بهره‌برداری، فرآورش، نگهداری روزانه', 'Lifting, treatment, routine maintenance'), t('هزینه‌های عملیاتی؛ دارایی‌ها مستهلک می‌شوند', 'Operating costs expensed; assets depleted')],
            [t('برچیدن', 'Decommissioning'), t('مسدودسازی چاه‌ها، جمع‌آوری تأسیسات، احیای محل', 'Plugging wells, removing facilities, restoring the site'), t('ذخیره از ابتدا شناسایی و به بهای دارایی اضافه می‌شود (IAS 37)', 'Provision recognised up front and added to the asset’s cost (IAS 37)')],
          ],
        },
        {
          type: 'list',
          items: [
            {
              fa: '**ریسک زیاد**: بخش قابل توجهی از چاه‌های اکتشافی خشک درمی‌آیند؛ پس پرسش «دارایی یا هزینه؟» همیشه مطرح است.',
              en: '**High risk**: a large share of exploration wells come in dry, so the question "asset or expense?" is always there.',
            },
            {
              fa: '**سرمایه زیاد و فاصله طولانی تا درآمد**: سال‌ها خرج پیش از اولین فروش.',
              en: '**Large capital and a long wait for revenue**: years of spending before the first sale.',
            },
            {
              fa: '**ذخایر برآوردی**: مقدار نفت قابل استحصال برآورد است و مرتب بازنگری می‌شود؛ استهلاک به آن وابسته است.',
              en: '**Estimated reserves**: recoverable volumes are estimates, revised regularly, and depletion depends on them.',
            },
            {
              fa: '**مشارکت و قرارداد نفتی**: هزینه‌ها میان شرکا تقسیم و طبق قرارداد بازیافت می‌شوند.',
              en: '**Joint ventures and petroleum contracts**: costs are shared among partners and recovered under the contract.',
            },
            {
              fa: '**تعهد پایان عمر**: هزینه برچیدن، سال‌ها بعد پرداخت می‌شود ولی امروز ایجاد شده است.',
              en: '**End-of-life obligations**: decommissioning is paid years later but is created today.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: کدام چارچوب؟', en: 'In practice: which framework?' },
          text: {
            fa: 'در ایران استانداردهای حسابداری ملی را سازمان حسابرسی منتشر می‌کند و برخی واحدها (برای نمونه بسیاری از شرکت‌های پذیرفته‌شده در بورس) باید صورت‌های مالی IFRS هم تهیه کنند. این درس با اصطلاحات IFRS پیش می‌رود؛ چارچوب الزامی شرکت خود و الزامات روز را بررسی کنید.',
            en: 'In Iran the national accounting standards are issued by the Audit Organization, and some entities (for example many listed companies) must also prepare IFRS financial statements. This lesson uses IFRS terms; check which framework your company must follow and the current requirements.',
          },
        },
      ],
    },
    {
      id: 'exploration-ifrs6',
      title: { fa: 'اکتشاف و ارزیابی: IFRS 6', en: 'Exploration and Evaluation: IFRS 6' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'استاندارد **IFRS 6 (اکتشاف و ارزیابی منابع معدنی)** فقط یک بازه زمانی را پوشش می‌دهد: از زمانی که شرکت **حق قانونی اکتشاف** را به دست می‌آورد تا زمانی که **امکان‌پذیری فنی و توجیه تجاری** استخراج نشان داده شود. هزینه‌های پیش از این بازه (مطالعات پیش از مجوز) و پس از آن (توسعه) مشمول IFRS 6 نیستند.',
            en: '**IFRS 6 (Exploration for and Evaluation of Mineral Resources)** covers one window of time only: from when the company obtains the **legal right to explore** until the **technical feasibility and commercial viability** of extraction are demonstrable. Costs before this window (pre-licence studies) and after it (development) are outside IFRS 6.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'IFRS 6 یک روش واحد تحمیل نمی‌کند. به شرکت اجازه می‌دهد **رویه حسابداری** خودش را تعیین کند (یا رویه قبلی‌اش را ادامه دهد): مشخص کند کدام هزینه‌های اکتشاف و ارزیابی دارایی شناخته می‌شوند و همان رویه را ثابت به کار ببرد و افشا کند. هزینه‌هایی که ممکن است طبق رویه سرمایه‌ای شوند، از این قبیل‌اند:',
            en: 'IFRS 6 does not impose one method. It lets the company set its own **accounting policy** (or continue its existing one): specify which exploration and evaluation (E&E) costs are recognised as assets, apply that policy consistently and disclose it. Costs that a policy may capitalise include:',
          },
        },
        {
          type: 'list',
          items: [
            { fa: 'تحصیل حق اکتشاف', en: 'Acquiring the rights to explore' },
            { fa: 'مطالعات توپوگرافی، زمین‌شناسی، ژئوشیمیایی و ژئوفیزیکی (از جمله لرزه‌نگاری)', en: 'Topographical, geological, geochemical and geophysical studies (including seismic)' },
            { fa: 'حفاری اکتشافی و حفاری ارزیابی', en: 'Exploratory and appraisal drilling' },
            { fa: 'نمونه‌برداری و آزمایش‌ها', en: 'Sampling and testing' },
            { fa: 'فعالیت‌های ارزیابی امکان‌پذیری فنی و توجیه تجاری', en: 'Activities to evaluate technical feasibility and commercial viability' },
          ],
        },
        {
          type: 'steps',
          items: [
            {
              title: t('شناخت اولیه به بهای تمام‌شده', 'Initial recognition at cost'),
              text: t(
                'هزینه‌هایی که رویه شرکت سرمایه‌ای می‌داند، به بهای تمام‌شده در «دارایی‌های اکتشاف و ارزیابی» ثبت می‌شوند؛ به تفکیک چاه یا محدوده و بسته به ماهیت، مشهود (مثل تجهیزات) یا نامشهود (مثل حق اکتشاف).',
                'Costs that the policy capitalises are recorded at cost in "E&E assets", by well or area, and classified by nature as tangible (such as equipment) or intangible (such as drilling rights).',
              ),
            },
            {
              title: t('پس از شناخت', 'After recognition'),
              text: t('شرکت مدل بهای تمام‌شده یا مدل تجدید ارزیابی را به کار می‌برد؛ در عمل بیشتر شرکت‌ها مدل بهای تمام‌شده را برمی‌گزینند.', 'The company applies the cost model or the revaluation model; in practice most companies use the cost model.'),
            },
            {
              title: t('مراقبت از نشانه‌های کاهش ارزش', 'Watch for impairment indicators'),
              text: t(
                'مثلاً: حق اکتشاف منقضی شده یا به‌زودی بدون تمدید منقضی می‌شود؛ هزینه اکتشاف بیشتری بودجه‌ریزی یا برنامه‌ریزی نشده است؛ کشف تجاری نشده و شرکت تصمیم به توقف گرفته است؛ یا داده‌ها نشان می‌دهند مبلغ دفتری از راه توسعه یا فروش کامل بازیافت نمی‌شود. در این صورت کاهش ارزش طبق IAS 36 اندازه‌گیری می‌شود.',
                'For example: the right to explore has expired or will soon expire without renewal; no further substantive exploration is budgeted or planned; no commercial discovery was made and the company has decided to stop; or data show the carrying amount is unlikely to be recovered in full by development or sale. Impairment is then measured under IAS 36.',
              ),
            },
            {
              title: t('پایان مرحله', 'End of the phase'),
              text: t(
                'اگر امکان‌پذیری فنی و توجیه تجاری نشان داده شود، دارایی ابتدا برای کاهش ارزش آزمون و سپس به دارایی‌های توسعه منتقل می‌شود. اگر چاه خشک باشد یا محدوده رها شود، مبلغ آن به هزینه منظور می‌شود.',
                'If technical feasibility and commercial viability are demonstrated, the asset is first tested for impairment and then reclassified to development assets. If a well is dry or the area is abandoned, its amount is written off to expense.',
              ),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'مرزها را جابه‌جا نکنید', en: 'Do not move the boundaries' },
          text: {
            fa: 'هزینه‌های پیش از گرفتن حق اکتشاف را نمی‌توان با استناد به IFRS 6 دارایی کرد و IFRS 6 اجازه نمی‌دهد هزینه‌های توسعه را «دارایی اکتشاف و ارزیابی» بنامید؛ توسعه تابع IAS 16 و IAS 38 است.',
            en: 'Costs incurred before the right to explore is obtained cannot be capitalised by pointing to IFRS 6, and IFRS 6 does not allow development costs to be called "E&E assets"; development follows IAS 16 and IAS 38.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: وضعیت چاه در ERP', en: 'In practice: well status in the ERP' },
          text: {
            fa: 'در پارس‌آریا هر چاه اکتشافی یک AFE و یک عنصر WBS دارد و یک فیلد «وضعیت»: در حال حفاری، معلق در انتظار ارزیابی، خشک، کشف. حسابدار هر فصل فهرست چاه‌های «معلق» را با مهندسان مخزن بازبینی می‌کند؛ چاهی که مدت‌ها بدون برنامه ارزیابی معلق مانده، نشانه کاهش ارزش است.',
            en: 'At Pars Arya each exploration well has an AFE, a WBS element and a "status" field: drilling, suspended pending evaluation, dry, discovery. Each quarter the accountant reviews the list of "suspended" wells with the reservoir engineers; a well left suspended for a long time with no evaluation plan is an impairment indicator.',
          },
        },
      ],
    },
    {
      id: 'se-vs-fc',
      title: { fa: 'روش تلاش‌های موفق در برابر روش بهای کامل', en: 'Successful Efforts vs Full Cost' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'دو رویکرد سنتی، که از عرف صنعت در آمریکا آمده‌اند، به پرسش «چاه خشک دارایی است یا هزینه؟» دو پاسخ متفاوت می‌دهند. در **روش تلاش‌های موفق (Successful Efforts)** فقط هزینه‌هایی که به کشف ذخایر می‌انجامند دارایی می‌شوند. در **روش بهای کامل (Full Cost)** همه هزینه‌های یافتن ذخایر، موفق یا ناموفق، در یک انباره بهای بزرگ دارایی می‌شوند، چون هزینه یافتن نفت شامل چاه‌های خشک هم هست.',
            en: 'Two traditional approaches, from US industry practice, give different answers to "is a dry hole an asset or an expense?". Under **successful efforts**, only costs that lead to finding reserves are capitalised. Under **full cost**, all costs of finding reserves, successful or not, are capitalised in a large cost pool, on the view that the cost of finding oil includes the dry holes.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'تلاش‌های موفق', en: 'Successful efforts' },
            items: [
              { fa: 'چاه اکتشافی خشک: هزینه، هنگام مشخص شدن نتیجه', en: 'Dry exploration well: expensed when the result is known' },
              { fa: 'لرزه‌نگاری و مطالعات زمین‌شناسی: معمولاً هزینه', en: 'Seismic and geological studies: usually expensed' },
              { fa: 'چاه موفق: دارایی', en: 'Successful well: capitalised' },
              { fa: 'سود نوسان بیشتری دارد', en: 'Profit is more volatile' },
              { fa: 'دارایی معمولاً در سطح میدان', en: 'Assets usually at field level' },
            ],
          },
          right: {
            title: { fa: 'بهای کامل', en: 'Full cost' },
            items: [
              { fa: 'چاه اکتشافی خشک: دارایی', en: 'Dry exploration well: capitalised' },
              { fa: 'لرزه‌نگاری و مطالعات: دارایی', en: 'Seismic and studies: capitalised' },
              { fa: 'چاه موفق: دارایی', en: 'Successful well: capitalised' },
              { fa: 'سود هموارتر، دارایی و استهلاک بعدی بزرگ‌تر', en: 'Smoother profit, larger assets and later depletion' },
              { fa: 'انباره بهای بزرگ، در آمریکا در سطح کشور', en: 'A large cost pool, country-wide in the US' },
            ],
          },
        },
        {
          type: 'p',
          text: {
            fa: 'برنامه اکتشاف پارس‌آریا را با هر دو روش ببینیم: لرزه‌نگاری سه‌بعدی 3,000,000، چاه AR-X1 (کشف) 12,000,000 و چاه AR-X2 (خشک) 8,000,000.',
            en: 'Let’s look at Pars Arya’s exploration programme under both methods: 3D seismic 3,000,000, well AR-X1 (discovery) 12,000,000 and well AR-X2 (dry) 8,000,000.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'برنامه اکتشاف پارس‌آریا با دو روش', en: 'Pars Arya’s exploration programme under the two methods' },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'مبلغ', en: 'Amount' },
            { fa: 'تلاش‌های موفق', en: 'Successful efforts' },
            { fa: 'بهای کامل', en: 'Full cost' },
          ],
          numericCols: [1],
          rows: [
            [t('لرزه‌نگاری سه‌بعدی', '3D seismic'), 3000000, t('هزینه', 'Expense'), t('دارایی', 'Capitalise')],
            [t('چاه AR-X1 (کشف)', 'Well AR-X1 (discovery)'), 12000000, t('دارایی', 'Capitalise'), t('دارایی', 'Capitalise')],
            [t('چاه AR-X2 (خشک)', 'Well AR-X2 (dry)'), 8000000, t('هزینه', 'Expense'), t('دارایی', 'Capitalise')],
            [t('جمع هزینه دوره', 'Total expensed'), blank, t('11,000,000', '11,000,000'), t('0', '0')],
            [t('جمع دارایی', 'Total capitalised'), blank, t('12,000,000', '12,000,000'), t('23,000,000', '23,000,000')],
          ],
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌ها با روش تلاش‌های موفق (خلاصه)', en: 'Entries under successful efforts (summarised)' },
          entries: [
            {
              date: t('حین حفاری', 'During drilling'),
              lines: [
                { account: t('1505 دارایی‌های اکتشاف و ارزیابی (AFE-101، چاه AR-X1)', '1505 E&E assets (AFE-101, well AR-X1)'), debit: 12000000 },
                { account: t('1505 دارایی‌های اکتشاف و ارزیابی (AFE-102، چاه AR-X2)', '1505 E&E assets (AFE-102, well AR-X2)'), debit: 8000000 },
                { account: ac.grir, credit: 20000000 },
              ],
              memo: {
                fa: 'هزینه هر دو چاه تا روشن شدن نتیجه روی AFE خودش معلق می‌ماند.',
                en: 'Each well’s cost is held on its own AFE until the result is known.',
              },
            },
            {
              date: t('حین مطالعات', 'During the survey'),
              lines: [
                { account: t('5610 هزینه اکتشاف (لرزه‌نگاری)', '5610 Exploration expense (seismic)'), debit: 3000000 },
                { account: ac.grir, credit: 3000000 },
              ],
              memo: { fa: 'با این رویه، لرزه‌نگاری هزینه دوره است.', en: 'Under this policy, seismic is a period expense.' },
            },
            {
              date: t('اعلام خشک بودن', 'Declared dry'),
              lines: [
                { account: t('5610 هزینه اکتشاف (چاه خشک)', '5610 Exploration expense (dry hole)'), debit: 8000000 },
                { account: t('1505 دارایی‌های اکتشاف و ارزیابی (AFE-102)', '1505 E&E assets (AFE-102)'), credit: 8000000 },
              ],
              memo: { fa: 'چاه AR-X2 خشک اعلام شد.', en: 'Well AR-X2 is declared dry.' },
            },
            {
              date: t('اعلام تجاری بودن', 'Declared commercial'),
              lines: [
                { account: t('1510 دارایی‌های در جریان تکمیل (توسعه میدان آریا)', '1510 Assets under construction (Arya field development)'), debit: 12000000 },
                { account: t('1505 دارایی‌های اکتشاف و ارزیابی (AFE-101)', '1505 E&E assets (AFE-101)'), credit: 12000000 },
              ],
              memo: {
                fa: 'پس از آزمون کاهش ارزش، AR-X1 به دارایی‌های توسعه منتقل می‌شود.',
                en: 'After an impairment test, AR-X1 is reclassified to development assets.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'جایگاه این دو روش در IFRS', en: 'Where the two methods stand under IFRS' },
          text: {
            fa: 'اصول پذیرفته‌شده حسابداری آمریکا هر دو روش را می‌پذیرد. در IFRS، استاندارد IFRS 6 اجازه می‌دهد شرکت در مرحله اکتشاف و ارزیابی رویه‌ای نزدیک به هر کدام داشته باشد؛ اما از مرحله توسعه به بعد، IAS 16، IAS 38 و IAS 36 در سطح میدان (واحد مولد وجه نقد) اعمال می‌شوند، پس انباره بهای کامل در سطح کشور در IFRS پذیرفته نیست. در عمل بیشتر شرکت‌هایی که IFRS به کار می‌برند، رویه‌ای نزدیک به تلاش‌های موفق دارند.',
            en: 'US GAAP accepts both methods. Under IFRS, IFRS 6 lets a company follow a policy close to either one during exploration and evaluation; but from development onward, IAS 16, IAS 38 and IAS 36 apply at field (cash-generating unit) level, so a country-wide full-cost pool is not acceptable under IFRS. In practice most IFRS reporters use a policy close to successful efforts.',
          },
        },
      ],
    },
    {
      id: 'development',
      title: { fa: 'توسعه و دارایی‌های نفت و گاز', en: 'Development Costs and Oil and Gas Properties' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'پس از اعلام کشف تجاری و تصویب **طرح توسعه میدان**، مرحله توسعه آغاز می‌شود. هزینه چاه‌های توسعه‌ای (حتی چاه توسعه‌ای که خشک درآید)، تأسیسات فرآورش مانند جداکننده‌ها، خطوط جریان و خط لوله تا نقطه تحویل، ابتدا روی عنصر WBS هر چاه یا تأسیسات در حساب **دارایی‌های در جریان تکمیل** جمع می‌شود و وقتی دارایی آماده بهره‌برداری شد، به **دارایی‌های نفت و گاز** منتقل می‌شود. این دارایی‌ها تابع IAS 16 هستند.',
            en: 'Once a commercial discovery is declared and the **field development plan** approved, development begins. The costs of development wells (even a development well that turns out dry), processing facilities such as separators, flowlines and the pipeline to the delivery point first collect on the WBS element of each well or facility in **assets under construction**, and move to **oil and gas properties** when the asset is ready for use. These assets follow IAS 16.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'کدام هزینه دارایی است و کدام هزینه دوره؟', en: 'Which costs are capitalised and which are expensed?' },
          head: [
            { fa: 'قلم هزینه', en: 'Cost item' },
            { fa: 'مرحله', en: 'Phase' },
            { fa: 'رفتار (رویه تلاش‌های موفق)', en: 'Treatment (successful efforts policy)' },
          ],
          rows: [
            [t('چاه ارزیابی موفق', 'Successful appraisal well'), t('ارزیابی', 'Evaluation'), t('دارایی اکتشاف و ارزیابی، سپس انتقال', 'E&E asset, then reclassified')],
            [t('چاه توسعه‌ای، حتی اگر خشک درآید', 'Development well, even if it turns out dry'), t('توسعه', 'Development'), t('دارایی', 'Capitalise')],
            [t('جداکننده و خطوط جریان', 'Separators and flowlines'), t('توسعه', 'Development'), t('دارایی', 'Capitalise')],
            [t('ایستگاه تقویت فشار', 'Compressor station'), t('توسعه', 'Development'), t('دارایی؛ اگر عمرش با میدان فرق کند، می‌تواند جدا و به روش خط مستقیم مستهلک شود', 'Capitalise; if its life differs from the field’s, it may be a separate asset depreciated straight-line')],
            [t('مواد شیمیایی، حقوق اپراتورها، برق', 'Chemicals, operators’ salaries, power'), t('تولید', 'Production'), t('هزینه عملیاتی (بهای تولید)', 'Operating expense (production cost)')],
            [t('تعمیر چاه برای بازگرداندن تولید عادی', 'Routine workover to restore normal output'), t('تولید', 'Production'), t('هزینه دوره', 'Expense')],
            [t('تعمیر اساسی چاه که ذخایر یا عمر را افزایش می‌دهد', 'Major workover that adds reserves or extends life'), t('تولید', 'Production'), t('دارایی، طبق رویه شرکت', 'Capitalise, per company policy')],
            [t('برآورد هزینه برچیدن', 'Decommissioning estimate'), t('توسعه', 'Development'), t('دارایی همراه با ذخیره', 'Capitalised with a provision')],
          ],
        },
        {
          type: 'table',
          caption: {
            fa: 'دارایی‌های نفت و گاز میدان آریا در شروع تولید',
            en: 'Arya field oil and gas properties at the start of production',
          },
          head: [
            { fa: 'جزء', en: 'Component' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          numericCols: [1],
          rows: [
            [t('چاه AR-X1، منتقل‌شده از اکتشاف و ارزیابی', 'Well AR-X1, reclassified from E&E'), 12000000],
            [t('چاه‌های توسعه‌ای AR-01 تا AR-06', 'Development wells AR-01 to AR-06'), 22000000],
            [t('جداکننده‌ها و خطوط جریان', 'Separators and flowlines'), 14000000],
            [t('جمع', 'Total'), 48000000],
          ],
        },
        {
          type: 'journal',
          title: { fa: 'سرمایه‌ای کردن در شروع تولید', en: 'Capitalisation at the start of production' },
          entries: [
            {
              date: t('شروع تولید', 'First oil'),
              lines: [
                { account: t('1520 دارایی‌های نفت و گاز (میدان آریا)', '1520 Oil and gas properties (Arya field)'), debit: 48000000 },
                { account: ac.auc, credit: 48000000 },
              ],
              memo: {
                fa: 'تسویه عناصر WBS پروژه توسعه به دارایی نهایی؛ از این لحظه استهلاک ذخایر شروع می‌شود.',
                en: 'Settlement of the development project’s WBS elements to the final asset; depletion starts from now.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: هزینه سرمایه‌ای یا عملیاتی؟', en: 'In practice: capital or operating?' },
          text: {
            fa: 'مرز سرمایه‌ای و عملیاتی فقط بر سود اثر ندارد؛ در قرارداد نفتی هم دسته هزینه (توسعه یا عملیاتی) زمان بازیافت را تغییر می‌دهد. پارس‌آریا این مرز را در یک دستورالعمل مکتوب تعریف کرده و در ERP آن را با نوع شیء هزینه پیاده می‌کند: هزینه روی WBS پروژه، سرمایه‌ای و روی مرکز هزینه، عملیاتی است.',
            en: 'The capital/operating boundary does not only affect profit; under the petroleum contract, the cost category (development or operating) also changes when the cost is recovered. Pars Arya defines the boundary in a written policy and implements it in the ERP through the type of cost object: costs on a project WBS are capital, costs on a cost centre are operating.',
          },
        },
      ],
    },
    {
      id: 'depletion',
      title: { fa: 'استهلاک ذخایر به روش واحد تولید', en: 'Depletion by the Units-of-Production Method' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'دارایی‌های نفت و گاز با گذشت زمان مصرف نمی‌شوند؛ با **برداشت نفت** مصرف می‌شوند. اگر امسال تولید کم باشد، سهم کمتری از بها باید هزینه شود. به همین دلیل این دارایی‌ها معمولاً به **روش واحد تولید (Units of Production)** مستهلک می‌شوند که به آن **استهلاک ذخایر (Depletion)** می‌گویند. رویه شرکت مبنای ذخایر را تعیین می‌کند: برای هزینه‌های توسعه معمولاً **ذخایر اثبات‌شده توسعه‌یافته** و گاهی ذخایر اثبات‌شده یا اثبات‌شده و احتمالی؛ مهم این است که ثابت به کار رود.',
            en: 'Oil and gas properties are not used up by the passing of time; they are used up by **producing oil**. If output is low this year, a smaller share of their cost should be expensed. That is why these assets are usually depreciated by the **units-of-production** method, called **depletion**. The company’s policy sets the reserves base: for development costs usually **proved developed reserves**, sometimes proved or proved plus probable reserves; what matters is applying it consistently.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'نرخ استهلاک ذخایر = بهای قابل استهلاک ÷ ذخایر در ابتدای دوره؛ استهلاک دوره = نرخ × تولید دوره',
            en: 'Depletion rate = Depletable cost ÷ Reserves at the start of the period; Depletion = Rate × Production for the period',
          },
          note: {
            fa: 'سال 1 میدان آریا: 48,000,000 ÷ 12,000,000 بشکه = 4 برای هر بشکه؛ تولید 1,500,000 بشکه × 4 = 6,000,000.',
            en: 'Arya field, Year 1: 48,000,000 ÷ 12,000,000 barrels = 4 per barrel; production 1,500,000 barrels × 4 = 6,000,000.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'در ابتدای سال 2، داده‌های جدید مخزن نشان می‌دهد ذخایر باقیمانده به‌جای 10,500,000 بشکه، 9,000,000 بشکه است. همچنین یک واحد تصفیه آب همراه به بهای 3,000,000 در ابتدای سال 2 به بهره‌برداری می‌رسد. طبق IAS 8 این **تغییر در برآورد** است: سال 1 اصلاح نمی‌شود و نرخ جدید از سال 2 به بعد به کار می‌رود.',
            en: 'At the start of Year 2, new reservoir data show remaining reserves of 9,000,000 barrels instead of 10,500,000. A produced-water treatment unit costing 3,000,000 is also brought into use at the start of Year 2. Under IAS 8 this is a **change in estimate**: Year 1 is not restated, and the new rate applies from Year 2 onward.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'جدول استهلاک ذخایر میدان آریا', en: 'Arya field depletion schedule' },
          head: [
            { fa: 'سال', en: 'Year' },
            { fa: 'بهای قابل استهلاک', en: 'Depletable cost' },
            { fa: 'ذخایر ابتدای سال (بشکه)', en: 'Reserves at start (bbl)' },
            { fa: 'نرخ هر بشکه', en: 'Rate per bbl' },
            { fa: 'تولید (بشکه)', en: 'Production (bbl)' },
            { fa: 'استهلاک ذخایر', en: 'Depletion' },
            { fa: 'ارزش دفتری پایان سال', en: 'Closing book value' },
          ],
          numericCols: [1, 2, 3, 4, 5, 6],
          rows: [
            [yr(1), 48000000, 12000000, 4, 1500000, 6000000, 42000000],
            [yr(2), 45000000, 9000000, 5, 1800000, 9000000, 36000000],
          ],
        },
        {
          type: 'journal',
          title: { fa: 'ثبت استهلاک ذخایر سال 1', en: 'Year 1 depletion entry' },
          entries: [
            {
              date: yr(1),
              lines: [
                { account: ac.depletion, debit: 6000000 },
                { account: ac.accDepl, credit: 6000000 },
              ],
              memo: {
                fa: '1,500,000 بشکه × 4. در ERP، اجرای استهلاک تولید ماهانه را از گزارش تولید میدان می‌خواند.',
                en: '1,500,000 barrels × 4. In the ERP the depreciation run reads monthly production from the field production report.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'استهلاک ذخایر و موجودی نفت', en: 'Depletion and crude inventory' },
          text: {
            fa: 'استهلاک ذخایر بخشی از بهای تولید است. اگر بخشی از نفت تولیدشده در پایان دوره هنوز در مخازن ذخیره باشد و فروخته نشده باشد، سهم آن از بهای تولید (از جمله استهلاک ذخایر) در موجودی نفت خام می‌ماند و هنگام فروش به بهای فروش منتقل می‌شود. در این درس برای سادگی فرض کرده‌ایم همه تولید فروخته شده است.',
            en: 'Depletion is part of the cost of production. If some oil produced is still in storage tanks, unsold, at period-end, its share of production cost (including depletion) stays in crude oil inventory and moves to cost of sales when sold. In this lesson we assume, for simplicity, that all production is sold.',
          },
        },
      ],
    },
    {
      id: 'decommissioning',
      title: { fa: 'ذخیره برچیدن تأسیسات (IAS 37)', en: 'Decommissioning Provisions (IAS 37)' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در پایان عمر میدان، پارس‌آریا باید چاه‌ها را **مسدود و متروک** کند، تأسیسات را جمع کند و محل را احیا کند. این تعهد امروز ایجاد شده است، چون چاه حفر و تأسیسات نصب شده‌اند، حتی اگر پرداخت سال‌ها بعد باشد. طبق **IAS 37** وقتی (1) تعهد فعلی قانونی یا عرفی ناشی از رویداد گذشته وجود دارد، (2) خروج منابع محتمل است و (3) مبلغ قابل برآورد اتکاپذیر است، **ذخیره (Provision)** شناسایی می‌شود.',
            en: 'At the end of the field’s life Pars Arya must **plug and abandon** the wells, remove the facilities and restore the site. The obligation exists today, because the wells have been drilled and the facilities installed, even though payment is years away. Under **IAS 37** a **provision** is recognised when (1) there is a present legal or constructive obligation from a past event, (2) an outflow of resources is probable and (3) the amount can be estimated reliably.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'چون پرداخت سال‌ها بعد است، ذخیره به **ارزش فعلی** برآورد هزینه آینده اندازه‌گیری می‌شود؛ با نرخ تنزیل قبل از مالیات که ارزش زمانی پول و ریسک‌های خاص این بدهی را نشان می‌دهد. همان مبلغ به **بهای دارایی** اضافه می‌شود (IAS 16) و همراه آن مستهلک می‌شود. سپس هر سال ذخیره با گذشت زمان بزرگ‌تر می‌شود؛ این افزایش را **آزادسازی تنزیل (Unwinding)** می‌گویند و هزینه مالی است، نه هزینه عملیاتی.',
            en: 'Because payment is years away, the provision is measured at the **present value** of the expected future cost, using a pre-tax discount rate that reflects the time value of money and the risks specific to the liability. The same amount is added to the **cost of the asset** (IAS 16) and depreciated with it. Each year the provision then grows with the passage of time; this increase is the **unwinding of the discount**, and it is a finance cost, not an operating expense.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'ارزش فعلی = هزینه مورد انتظار ÷ (1 + نرخ تنزیل) به توان سال‌ها = 1,610,510 ÷ 1.1 به توان 5 = 1,000,000',
            en: 'Present value = Expected cost ÷ (1 + discount rate)^years = 1,610,510 ÷ 1.1^5 = 1,000,000',
          },
          note: {
            fa: 'برای کوتاه ماندن محاسبه، فرض می‌کنیم برچیدن تأسیسات فعلی 5 سال دیگر با هزینه 1,610,510 انجام شود و نرخ تنزیل 10٪ باشد؛ عمر واقعی میدان بلندتر است. در مثال استهلاک ذخایر بالا، برای سادگی این دارایی را کنار گذاشتیم.',
            en: 'To keep the arithmetic short, we assume the current facilities are decommissioned in 5 years at a cost of 1,610,510 and the discount rate is 10%; a real field lives longer. The depletion example above left this asset out for simplicity.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'شناسایی ذخیره و آزادسازی تنزیل سال 1', en: 'Recognising the provision and Year 1 unwinding' },
          entries: [
            {
              date: t('روز نصب', 'Installation date'),
              lines: [
                { account: t('1520 دارایی‌های نفت و گاز (دارایی برچیدن)', '1520 Oil and gas properties (decommissioning asset)'), debit: 1000000 },
                { account: ac.provision, credit: 1000000 },
              ],
              memo: { fa: 'ارزش فعلی هزینه برچیدن به بهای دارایی اضافه می‌شود.', en: 'The present value of decommissioning is added to the asset’s cost.' },
            },
            {
              date: yr(1),
              lines: [
                { account: ac.finance, debit: 100000 },
                { account: ac.provision, credit: 100000 },
              ],
              memo: { fa: '1,000,000 × 10٪.', en: '1,000,000 × 10%.' },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'جدول آزادسازی تنزیل ذخیره برچیدن', en: 'Unwinding schedule of the decommissioning provision' },
          head: [
            { fa: 'سال', en: 'Year' },
            { fa: 'ذخیره ابتدای سال', en: 'Opening provision' },
            { fa: 'آزادسازی تنزیل (10٪)', en: 'Unwinding (10%)' },
            { fa: 'ذخیره پایان سال', en: 'Closing provision' },
          ],
          numericCols: [1, 2, 3],
          rows: [
            [yr(1), 1000000, 100000, 1100000],
            [yr(2), 1100000, 110000, 1210000],
            [yr(3), 1210000, 121000, 1331000],
            [yr(4), 1331000, 133100, 1464100],
            [yr(5), 1464100, 146410, 1610510],
            [t('جمع', 'Total'), blank, 610510, blank],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'در پایان سال 5، ذخیره دقیقاً برابر هزینه مورد انتظار (1,610,510) است. هنگام انجام کار، ذخیره بدهکار و بانک یا حساب پرداختنی بستانکار می‌شود؛ اگر هزینه واقعی بیشتر یا کمتر باشد، تفاوت به سود و زیان می‌رود. اگر پیش از آن برآورد هزینه، زمان یا نرخ تنزیل تغییر کند، در مدل بهای تمام‌شده هم ذخیره و هم بهای دارایی تعدیل می‌شوند، نه سود دوره.',
            en: 'At the end of Year 5 the provision exactly equals the expected cost (1,610,510). When the work is done, the provision is debited and cash or payables credited; if the actual cost is higher or lower, the difference goes to profit or loss. If the estimate of cost, timing or discount rate changes before then, under the cost model both the provision and the asset’s cost are adjusted, not the period’s profit.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: قرارداد و مشارکت', en: 'In practice: the contract and the partners' },
          text: {
            fa: 'تعهد برچیدن معمولاً از قرارداد نفتی و مقررات زیست‌محیطی می‌آید. برخی قراردادها پرداخت به یک **صندوق برچیدن** را در طول تولید الزامی می‌کنند و آن را جزو هزینه‌های قابل بازیافت می‌دانند؛ متن قرارداد خود را بخوانید. در مشارکت، هر شریک سهم خود را از ذخیره و دارایی ثبت می‌کند.',
            en: 'The decommissioning obligation usually comes from the petroleum contract and environmental regulations. Some contracts require payments into a **decommissioning fund** during production and treat them as recoverable costs; read your contract. In a joint venture, each partner records its own share of the provision and the asset.',
          },
        },
      ],
    },
    {
      id: 'erp-wells-afe',
      title: { fa: 'چاه و AFE به‌عنوان شیء هزینه در ERP', en: 'Wells and AFEs as Cost Objects in the ERP' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'همه آنچه تا اینجا دیدید (دارایی اکتشاف و ارزیابی، دارایی در جریان تکمیل، سرمایه‌ای کردن، استهلاک ذخایر) به یک پیش‌شرط وابسته است: هزینه باید از روز اول روی **چاه درست** جمع شود. در ERP پارس‌آریا این کار با ساختار پروژه، عناصر WBS و AFE انجام می‌شود.',
            en: 'Everything you have seen so far (E&E assets, assets under construction, capitalisation, depletion) depends on one precondition: cost must collect on the **right well** from day one. In Pars Arya’s ERP this is done with a structure of projects, WBS elements and AFEs.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'ساختار اشیای هزینه میدان آریا در ERP', en: 'The Arya field cost-object structure in the ERP' },
          head: [
            { fa: 'سطح', en: 'Level' },
            { fa: 'کد', en: 'Code' },
            { fa: 'شرح', en: 'Description' },
            { fa: 'ویژگی‌های کلیدی', en: 'Key attributes' },
          ],
          rows: [
            [t('مرکز سود', 'Profit centre'), t('PC-ARYA', 'PC-ARYA'), t('میدان آریا', 'Arya field'), t('درآمد و هزینه میدان', 'Field revenue and cost')],
            [t('پروژه', 'Project'), t('P-ARYA-EXP', 'P-ARYA-EXP'), t('برنامه اکتشاف آریا', 'Arya exploration programme'), t('مرحله: اکتشاف؛ رویه IFRS 6', 'Phase: exploration; IFRS 6 policy')],
            [t('عنصر WBS', 'WBS element'), t('AR-X2', 'AR-X2'), t('چاه اکتشافی AR-X2', 'Exploration well AR-X2'), t('AFE-102؛ وضعیت: خشک، هزینه شد', 'AFE-102; status: dry, written off')],
            [t('پروژه', 'Project'), t('P-ARYA-DEV', 'P-ARYA-DEV'), t('توسعه میدان آریا', 'Arya field development'), t('مرحله: توسعه', 'Phase: development')],
            [t('عنصر WBS', 'WBS element'), t('AR-07', 'AR-07'), t('حفاری و تکمیل چاه AR-07', 'Drill and complete well AR-07'), t('AFE-207؛ بودجه 9,000,000؛ قابل بازیافت؛ مشارکتی', 'AFE-207; budget 9,000,000; recoverable; joint venture')],
            [t('مرکز هزینه', 'Cost centre'), t('CC-110', 'CC-110'), t('عملیات میدان آریا', 'Arya field operations'), t('هزینه عملیاتی؛ قابل بازیافت', 'Operating cost; recoverable')],
          ],
        },
        {
          type: 'steps',
          items: [
            {
              title: t('تهیه AFE', 'Prepare the AFE'),
              text: t('مهندس حفاری برآورد هزینه چاه AR-07 را به تفکیک دسته (دکل، لوله، گل حفاری، خدمات) تهیه می‌کند.', 'The drilling engineer prepares the cost estimate for well AR-07 by category (rig, tubulars, mud, services).'),
            },
            {
              title: t('تصویب', 'Approve'),
              text: t('مدیریت و، چون میدان مشارکتی است، شرکا AFE-207 را تصویب می‌کنند.', 'Management and, because the field is a joint venture, the partners approve AFE-207.'),
            },
            {
              title: t('ساخت در ERP', 'Set up in the ERP'),
              text: t('واحد مالی عنصر WBS را می‌سازد، AFE و بودجه را به آن وصل می‌کند و نشانگرهای «توسعه» و «قابل بازیافت» را تنظیم می‌کند.', 'Finance creates the WBS element, links the AFE and budget, and sets the "development" and "recoverable" flags.'),
            },
            {
              title: t('جمع‌آوری هزینه', 'Collect costs'),
              text: t('سفارش‌های خرید، رزروهای انبار، تأیید خدمات و برگه‌های کارکرد به WBS چاه ارجاع دارند؛ کنترل بودجه، تعهدها را با AFE مقایسه می‌کند.', 'Purchase orders, warehouse reservations, service entries and timesheets reference the well’s WBS; budget control compares commitments with the AFE.'),
            },
            {
              title: t('گزارش ماهانه', 'Report monthly'),
              text: t('گزارش AFE در برابر واقعی، صورت‌حساب شرکا و گزارش بازیافت هزینه از همین داده‌ها ساخته می‌شوند.', 'The AFE-versus-actual report, partner billing and the cost-recovery report are built from the same data.'),
            },
            {
              title: t('تسویه و بستن AFE', 'Settle and close the AFE'),
              text: t('پس از تکمیل فنی چاه، هزینه به دارایی نهایی تسویه می‌شود و با شروع تولید، استهلاک ذخایر آغاز می‌شود. اگر هزینه از آستانه مجاز فراتر رود، AFE تکمیلی لازم است.', 'When the well is technically complete, its cost is settled to the final asset and depletion starts with production. If cost goes beyond the allowed threshold, a supplementary AFE is needed.'),
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'AFE-207: بودجه در برابر واقعی چاه AR-07', en: 'AFE-207: budget versus actual for well AR-07' },
          head: [
            { fa: 'دسته هزینه', en: 'Cost category' },
            { fa: 'بودجه AFE', en: 'AFE budget' },
            { fa: 'واقعی', en: 'Actual' },
            { fa: 'اختلاف (بیش‌خرج مثبت)', en: 'Variance (overrun positive)' },
          ],
          numericCols: [1, 2, 3],
          rows: [
            [t('اجاره دکل', 'Rig hire'), 3600000, 3850000, 250000],
            [t('لوله جداری و مغزی', 'Casing and tubing'), 1800000, 1750000, -50000],
            [t('گل و مواد شیمیایی حفاری', 'Drilling fluids and chemicals'), 900000, 960000, 60000],
            [t('سیمان‌کاری', 'Cementing'), 450000, 430000, -20000],
            [t('خدمات (نمودارگیری، مشبک‌کاری)', 'Services (logging, perforating)'), 1200000, 1150000, -50000],
            [t('آماده‌سازی محل و سایر', 'Site preparation and other'), 1050000, 1000000, -50000],
            [t('جمع', 'Total'), 9000000, 9140000, 140000],
          ],
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌هایی که ERP برای چاه AR-07 می‌سازد (خلاصه)', en: 'Entries the ERP posts for well AR-07 (summarised)' },
          entries: [
            {
              date: t('حین حفاری', 'During drilling'),
              lines: [
                { account: t('1510 دارایی‌های در جریان تکمیل (WBS AR-07)', '1510 Assets under construction (WBS AR-07)'), debit: 1750000 },
                { account: ac.inventory, credit: 1750000 },
              ],
              memo: { fa: 'حواله لوله جداری و مغزی از انبار مرکزی.', en: 'Casing and tubing issued from the Central Warehouse.' },
            },
            {
              date: t('حین حفاری', 'During drilling'),
              lines: [
                { account: t('1510 دارایی‌های در جریان تکمیل (WBS AR-07)', '1510 Assets under construction (WBS AR-07)'), debit: 3850000 },
                { account: ac.grir, credit: 3850000 },
              ],
              memo: { fa: 'تأیید خدمات روزانه دکل.', en: 'Daily rig service entries.' },
            },
            {
              date: t('تکمیل چاه', 'Well completed'),
              lines: [
                { account: t('1520 دارایی‌های نفت و گاز (چاه AR-07)', '1520 Oil and gas properties (well AR-07)'), debit: 9140000 },
                { account: t('1510 دارایی‌های در جریان تکمیل (WBS AR-07)', '1510 Assets under construction (WBS AR-07)'), credit: 9140000 },
              ],
              memo: { fa: 'تسویه کل هزینه واقعی AFE-207 به دارایی نهایی.', en: 'Settlement of the full AFE-207 actual cost to the final asset.' },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'بیش‌خرج 140,000: AFE تکمیلی لازم است؟', en: 'A 140,000 overrun: is a supplementary AFE needed?' },
          text: {
            fa: 'بیش‌خرج 140,000 روی بودجه 9,000,000 حدود 1.6٪ است. اگر آستانه AFE تکمیلی در موافقت‌نامه مشارکت 10٪ باشد (عدد فرضی)، AFE تکمیلی لازم نیست، اما بیش‌خرج اجاره دکل (250,000) باید در گزارش ماهانه توضیح داده شود. همه این هزینه‌ها با نشانگر «توسعه» و «قابل بازیافت» ثبت شده‌اند، پس در صورت‌حساب شرکا و صورت بازیافت هزینه در جای درست دیده می‌شوند.',
            en: 'A 140,000 overrun on a 9,000,000 budget is about 1.6%. If the supplementary-AFE threshold in the joint operating agreement is 10% (an illustrative figure), no supplementary AFE is needed, but the rig-hire overrun (250,000) must be explained in the monthly report. All these costs carry the "development" and "recoverable" flags, so they appear in the right place in the partner billing and the cost-recovery statement.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' },
          text: {
            fa: 'این خطاها را در حسابداری بالادستی زیاد می‌بینید:',
            en: 'These errors are common in upstream accounting:',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: 'سرمایه‌ای کردن هزینه‌های پیش از مجوز یا معلق نگه داشتن چاه خشک در دارایی‌ها.',
              en: 'Capitalising pre-licence costs, or leaving a dry well sitting in assets.',
            },
            {
              fa: 'محاسبه استهلاک ذخایر با ذخایر پایان دوره به‌جای ابتدای دوره، یا اصلاح سال‌های گذشته پس از تجدیدنظر ذخایر.',
              en: 'Computing depletion with end-of-period instead of start-of-period reserves, or restating past years after a reserves revision.',
            },
            {
              fa: 'ثبت هزینه برچیدن فقط هنگام انجام کار، یا فراموش کردن آزادسازی تنزیل سالانه.',
              en: 'Recording decommissioning only when the work is done, or forgetting the annual unwinding.',
            },
            {
              fa: 'ثبت آزادسازی تنزیل به‌عنوان هزینه عملیاتی به‌جای هزینه مالی.',
              en: 'Recording the unwinding as an operating expense instead of a finance cost.',
            },
            {
              fa: 'جمع کردن هزینه چاه روی مرکز هزینه به‌جای WBS و AFE آن؛ نتیجه، دارایی کمتر و بازیافت هزینه نادرست است.',
              en: 'Collecting a well’s cost on a cost centre instead of its WBS and AFE, which understates assets and distorts cost recovery.',
            },
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
            fa: 'در همه تمرین‌ها رویه شرکت تلاش‌های موفق است و ارقام برای آموزش ساده شده‌اند.',
            en: 'In all exercises the company follows a successful efforts policy, and the figures are simplified for teaching.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'دارایی یا هزینه؟', en: 'Asset or expense?' },
          difficulty: 'easy',
          problem: {
            fa: 'پارس‌آریا با رویه تلاش‌های موفق، اقلام زیر را دارد. هر قلم را دارایی یا هزینه دوره بدانید و جمع هر گروه را حساب کنید.',
            en: 'Pars Arya, following successful efforts, has the items below. Classify each as an asset or a period expense and total each group.',
          },
          given: {
            head: [{ fa: 'قلم', en: 'Item' }, { fa: 'مبلغ', en: 'Amount' }],
            numericCols: [1],
            rows: [
              [t('1. لرزه‌نگاری در بلوک جدید', '1. Seismic over a new block'), 2500000],
              [t('2. چاه اکتشافی AR-X3 با کشف تجاری', '2. Exploration well AR-X3, commercial discovery'), 9000000],
              [t('3. چاه اکتشافی AR-X4، خشک', '3. Exploration well AR-X4, dry'), 6000000],
              [t('4. چاه توسعه‌ای AR-10 که خشک درآمد', '4. Development well AR-10, turned out dry'), 4000000],
              [t('5. مواد شیمیایی تزریق‌شده در چاه‌های تولیدی این ماه', '5. Chemicals injected into producing wells this month'), 300000],
              [t('6. مطالعه منطقه‌ای پیش از دریافت مجوز', '6. Regional study before the licence was granted'), 400000],
            ],
          },
          hint: {
            fa: 'چاه توسعه‌ای حتی اگر خشک باشد، بخشی از هزینه توسعه میدان است.',
            en: 'A development well is part of the field’s development cost even if it is dry.',
          },
          solution: [
            {
              type: 'table',
              head: [{ fa: 'قلم', en: 'Item' }, { fa: 'رفتار', en: 'Treatment' }, { fa: 'دلیل', en: 'Reason' }],
              rows: [
                [t('1', '1'), t('هزینه', 'Expense'), t('در تلاش‌های موفق، لرزه‌نگاری هزینه است', 'Under successful efforts, seismic is expensed')],
                [t('2', '2'), t('دارایی', 'Asset'), t('دارایی اکتشاف و ارزیابی، سپس انتقال به توسعه', 'E&E asset, then reclassified to development')],
                [t('3', '3'), t('هزینه', 'Expense'), t('چاه اکتشافی خشک', 'Dry exploration well')],
                [t('4', '4'), t('دارایی', 'Asset'), t('چاه توسعه‌ای، حتی خشک، سرمایه‌ای است', 'A development well, even dry, is capitalised')],
                [t('5', '5'), t('هزینه', 'Expense'), t('هزینه عملیاتی تولید', 'Production operating cost')],
                [t('6', '6'), t('هزینه', 'Expense'), t('پیش از مجوز؛ خارج از IFRS 6', 'Pre-licence; outside IFRS 6')],
              ],
            },
            {
              type: 'formula',
              text: {
                fa: 'هزینه = 2,500,000 + 6,000,000 + 300,000 + 400,000 = 9,200,000؛ دارایی = 9,000,000 + 4,000,000 = 13,000,000',
                en: 'Expense = 2,500,000 + 6,000,000 + 300,000 + 400,000 = 9,200,000; Asset = 9,000,000 + 4,000,000 = 13,000,000',
              },
            },
          ],
          answer: {
            fa: 'هزینه دوره 9,200,000 (اقلام 1، 3، 5، 6) و دارایی 13,000,000 (اقلام 2 و 4).',
            en: 'Expense 9,200,000 (items 1, 3, 5, 6) and asset 13,000,000 (items 2 and 4).',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'استهلاک ذخایر و تجدیدنظر در ذخایر', en: 'Depletion and a reserves revision' },
          difficulty: 'medium',
          problem: {
            fa: 'بهای قابل استهلاک یک میدان در شروع سال 1 برابر 30,000,000 و ذخایر اثبات‌شده توسعه‌یافته 7,500,000 بشکه است. تولید سال 1 برابر 900,000 بشکه است. در ابتدای سال 2، ذخایر باقیمانده به 6,000,000 بشکه کاهش داده می‌شود و تولید سال 2 برابر 1,000,000 بشکه است. استهلاک ذخایر هر دو سال و ثبت سال 1 را تهیه کنید.',
            en: 'A field’s depletable cost at the start of Year 1 is 30,000,000 and its proved developed reserves are 7,500,000 barrels. Year 1 production is 900,000 barrels. At the start of Year 2 remaining reserves are revised down to 6,000,000 barrels, and Year 2 production is 1,000,000 barrels. Compute depletion for both years and record Year 1.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('نرخ سال 1', 'Year 1 rate'), text: t('30,000,000 ÷ 7,500,000 = 4 برای هر بشکه', '30,000,000 ÷ 7,500,000 = 4 per barrel') },
                { title: t('استهلاک سال 1', 'Year 1 depletion'), text: t('900,000 × 4 = 3,600,000؛ ارزش دفتری 26,400,000', '900,000 × 4 = 3,600,000; book value 26,400,000') },
                { title: t('نرخ سال 2', 'Year 2 rate'), text: t('26,400,000 ÷ 6,000,000 = 4.4 برای هر بشکه (تغییر برآورد، آینده‌نگر)', '26,400,000 ÷ 6,000,000 = 4.4 per barrel (change in estimate, prospective)') },
                { title: t('استهلاک سال 2', 'Year 2 depletion'), text: t('1,000,000 × 4.4 = 4,400,000؛ ارزش دفتری 22,000,000', '1,000,000 × 4.4 = 4,400,000; book value 22,000,000') },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: yr(1),
                  lines: [
                    { account: ac.depletion, debit: 3600000 },
                    { account: ac.accDepl, credit: 3600000 },
                  ],
                },
              ],
            },
          ],
          answer: {
            fa: 'سال 1: 3,600,000 (نرخ 4)؛ سال 2: 4,400,000 (نرخ 4.4).',
            en: 'Year 1: 3,600,000 (rate 4); Year 2: 4,400,000 (rate 4.4).',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'ذخیره برچیدن یک خط لوله', en: 'Decommissioning a flowline' },
          difficulty: 'medium',
          problem: {
            fa: 'پارس‌آریا خط جریانی نصب می‌کند که باید 2 سال بعد جمع شود. هزینه مورد انتظار 2,420,000 و نرخ تنزیل 10٪ است. (الف) ثبت شناسایی اولیه، (ب) آزادسازی تنزیل هر سال و (ج) ثبت پایان کار را بنویسید، اگر هزینه واقعی 2,500,000 باشد و نقدی پرداخت شود.',
            en: 'Pars Arya installs a flowline that must be removed in 2 years. The expected cost is 2,420,000 and the discount rate is 10%. Record (a) initial recognition, (b) each year’s unwinding and (c) the final entry if the actual cost is 2,500,000, paid in cash.',
          },
          hint: { fa: '1.1 × 1.1 = 1.21', en: '1.1 × 1.1 = 1.21' },
          solution: [
            {
              type: 'formula',
              text: {
                fa: 'ارزش فعلی = 2,420,000 ÷ 1.21 = 2,000,000؛ آزادسازی: سال 1 برابر 200,000 و سال 2 برابر 220,000',
                en: 'Present value = 2,420,000 ÷ 1.21 = 2,000,000; unwinding: Year 1 200,000 and Year 2 220,000',
              },
            },
            {
              type: 'journal',
              entries: [
                {
                  date: t('نصب', 'Installation'),
                  lines: [
                    { account: t('1520 دارایی‌های نفت و گاز (دارایی برچیدن)', '1520 Oil and gas properties (decommissioning asset)'), debit: 2000000 },
                    { account: ac.provision, credit: 2000000 },
                  ],
                },
                {
                  date: yr(1),
                  lines: [
                    { account: ac.finance, debit: 200000 },
                    { account: ac.provision, credit: 200000 },
                  ],
                  memo: { fa: '2,000,000 × 10٪؛ ذخیره 2,200,000.', en: '2,000,000 × 10%; provision 2,200,000.' },
                },
                {
                  date: yr(2),
                  lines: [
                    { account: ac.finance, debit: 220000 },
                    { account: ac.provision, credit: 220000 },
                  ],
                  memo: { fa: '2,200,000 × 10٪؛ ذخیره 2,420,000.', en: '2,200,000 × 10%; provision 2,420,000.' },
                },
                {
                  date: t('پایان کار', 'Work done'),
                  lines: [
                    { account: ac.provision, debit: 2420000 },
                    { account: ac.loss, debit: 80000 },
                    { account: ac.bank, credit: 2500000 },
                  ],
                  memo: { fa: 'هزینه واقعی 80,000 بیش از ذخیره بود.', en: 'Actual cost exceeded the provision by 80,000.' },
                },
              ],
            },
          ],
          answer: {
            fa: 'ذخیره اولیه 2,000,000؛ آزادسازی 200,000 و 220,000؛ زیان 80,000 هنگام انجام کار.',
            en: 'Initial provision 2,000,000; unwinding 200,000 and 220,000; an 80,000 loss when the work is done.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'از اکتشاف تا اولین سال تولید', en: 'From exploration to the first year of production' },
          difficulty: 'hard',
          problem: {
            fa: 'در بلوک جدید پارس‌آریا، دارایی‌های اکتشاف و ارزیابی 15,000,000 است: چاه AR-X3 برابر 9,000,000 (کشف تجاری) و چاه AR-X4 برابر 6,000,000 (خشک). پس از تصویب طرح توسعه، 27,000,000 هزینه توسعه انجام می‌شود. ذخایر اثبات‌شده توسعه‌یافته در شروع تولید 9,000,000 بشکه و تولید سال 1 برابر 1,200,000 بشکه است. (الف) ثبت‌های پایان مرحله اکتشاف، (ب) بهای قابل استهلاک و نرخ، (ج) استهلاک سال 1 و ارزش دفتری پایان سال و (د) اثر کل این رویدادها بر سود سال 1 را تعیین کنید.',
            en: 'In Pars Arya’s new block, E&E assets are 15,000,000: well AR-X3 at 9,000,000 (commercial discovery) and well AR-X4 at 6,000,000 (dry). After the development plan is approved, 27,000,000 of development cost is spent. Proved developed reserves at first production are 9,000,000 barrels and Year 1 production is 1,200,000 barrels. Determine (a) the entries at the end of exploration, (b) the depletable cost and rate, (c) Year 1 depletion and closing book value, and (d) the total effect of these events on Year 1 profit.',
          },
          solution: [
            {
              type: 'journal',
              title: { fa: '(الف) پایان مرحله اکتشاف', en: '(a) End of the exploration phase' },
              entries: [
                {
                  lines: [
                    { account: t('5610 هزینه اکتشاف (چاه خشک AR-X4)', '5610 Exploration expense (dry well AR-X4)'), debit: 6000000 },
                    { account: ac.ee, credit: 6000000 },
                  ],
                },
                {
                  lines: [
                    { account: ac.auc, debit: 9000000 },
                    { account: ac.ee, credit: 9000000 },
                  ],
                  memo: { fa: 'انتقال AR-X3 پس از آزمون کاهش ارزش.', en: 'AR-X3 reclassified after an impairment test.' },
                },
              ],
            },
            {
              type: 'steps',
              items: [
                { title: t('(ب) بهای قابل استهلاک', '(b) Depletable cost'), text: t('9,000,000 + 27,000,000 = 36,000,000؛ نرخ = 36,000,000 ÷ 9,000,000 = 4 برای هر بشکه', '9,000,000 + 27,000,000 = 36,000,000; rate = 36,000,000 ÷ 9,000,000 = 4 per barrel') },
                { title: t('(ج) استهلاک سال 1', '(c) Year 1 depletion'), text: t('1,200,000 × 4 = 4,800,000؛ ارزش دفتری 36,000,000 منهای 4,800,000 برابر 31,200,000', '1,200,000 × 4 = 4,800,000; book value 36,000,000 minus 4,800,000 = 31,200,000') },
                { title: t('(د) اثر بر سود', '(d) Effect on profit'), text: t('چاه خشک 6,000,000 و استهلاک ذخایر 4,800,000: جمعاً 10,800,000 کاهش سود (پیش از درآمد فروش).', 'Dry well 6,000,000 and depletion 4,800,000: profit falls by 10,800,000 in total (before sales revenue).') },
              ],
            },
            {
              type: 'journal',
              title: { fa: '(ج) استهلاک سال 1', en: '(c) Year 1 depletion' },
              entries: [
                {
                  date: yr(1),
                  lines: [
                    { account: ac.depletion, debit: 4800000 },
                    { account: ac.accDepl, credit: 4800000 },
                  ],
                },
              ],
            },
          ],
          answer: {
            fa: 'بهای قابل استهلاک 36,000,000 با نرخ 4؛ استهلاک سال 1 برابر 4,800,000؛ ارزش دفتری 31,200,000؛ اثر بر سود 10,800,000 کاهش.',
            en: 'Depletable cost 36,000,000 at a rate of 4; Year 1 depletion 4,800,000; book value 31,200,000; profit reduced by 10,800,000.',
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
              fa: 'عمر میدان پنج مرحله دارد: پیش از مجوز، اکتشاف و ارزیابی، توسعه، تولید و برچیدن؛ هر مرحله رفتار حسابداری خودش را دارد.',
              en: 'A field’s life has five phases: pre-licence, exploration and evaluation, development, production and decommissioning, each with its own accounting.',
            },
            {
              fa: 'IFRS 6 فقط بازه اکتشاف و ارزیابی را پوشش می‌دهد، رویه سرمایه‌ای کردن را به شرکت می‌سپارد و آزمون کاهش ارزش را با نشانه‌های مشخص الزامی می‌کند.',
              en: 'IFRS 6 covers only the E&E window, leaves the capitalisation policy to the company and requires impairment testing on specific indicators.',
            },
            {
              fa: 'در تلاش‌های موفق چاه اکتشافی خشک هزینه می‌شود؛ در بهای کامل دارایی می‌شود. در IFRS پس از مرحله اکتشاف، انباره بهای کامل در سطح کشور پذیرفته نیست.',
              en: 'Under successful efforts a dry exploration well is expensed; under full cost it is capitalised. Under IFRS, after exploration, a country-wide full-cost pool is not accepted.',
            },
            {
              fa: 'استهلاک ذخایر = (بهای قابل استهلاک ÷ ذخایر ابتدای دوره) × تولید؛ تجدیدنظر در ذخایر آینده‌نگر اعمال می‌شود.',
              en: 'Depletion = (depletable cost ÷ reserves at the start of the period) × production; reserves revisions apply prospectively.',
            },
            {
              fa: 'ذخیره برچیدن به ارزش فعلی شناسایی، به بهای دارایی اضافه و هر سال با آزادسازی تنزیل (هزینه مالی) بزرگ‌تر می‌شود.',
              en: 'A decommissioning provision is recognised at present value, added to the asset’s cost, and grows each year by the unwinding of the discount (a finance cost).',
            },
            {
              fa: 'در ERP هر چاه یک WBS و یک AFE دارد؛ جمع‌آوری درست هزینه روی آن، پایه سرمایه‌ای کردن، صورت‌حساب شرکا و بازیافت هزینه است.',
              en: 'In the ERP each well has a WBS element and an AFE; collecting cost correctly on it is the basis of capitalisation, partner billing and cost recovery.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'دارایی‌های اکتشاف و ارزیابی', en: 'Exploration and evaluation (E&E) assets' },
              def: {
                fa: 'هزینه‌های اکتشاف و ارزیابی که طبق رویه شرکت ذیل IFRS 6 دارایی شناخته شده‌اند.',
                en: 'Exploration and evaluation costs recognised as assets under the company’s IFRS 6 policy.',
              },
            },
            {
              term: { fa: 'روش تلاش‌های موفق', en: 'Successful efforts' },
              def: {
                fa: 'رویه‌ای که فقط هزینه‌های منتهی به کشف ذخایر را دارایی می‌کند و چاه اکتشافی خشک را هزینه می‌کند.',
                en: 'A policy that capitalises only costs that lead to finding reserves and expenses dry exploration wells.',
              },
            },
            {
              term: { fa: 'روش بهای کامل', en: 'Full cost' },
              def: {
                fa: 'رویه‌ای که همه هزینه‌های یافتن و توسعه ذخایر، از جمله چاه‌های خشک، را در یک انباره بها دارایی می‌کند.',
                en: 'A policy that capitalises all costs of finding and developing reserves, dry holes included, in a cost pool.',
              },
            },
            {
              term: { fa: 'دارایی‌های نفت و گاز', en: 'Oil and gas properties' },
              def: {
                fa: 'چاه‌ها، تأسیسات و سایر دارایی‌های توسعه‌یافته یک میدان که تابع IAS 16 هستند.',
                en: 'A field’s developed wells, facilities and related assets, accounted for under IAS 16.',
              },
            },
            {
              term: { fa: 'استهلاک ذخایر (روش واحد تولید)', en: 'Depletion (units of production)' },
              def: {
                fa: 'تخصیص بهای دارایی‌های نفت و گاز به دوره‌ها به نسبت تولید به ذخایر.',
                en: 'Allocating the cost of oil and gas properties to periods in proportion to production over reserves.',
              },
            },
            {
              term: { fa: 'ذخایر اثبات‌شده توسعه‌یافته', en: 'Proved developed reserves' },
              def: {
                fa: 'ذخایر اثبات‌شده‌ای که با چاه‌ها و تأسیسات موجود قابل برداشت‌اند.',
                en: 'Proved reserves that can be recovered through existing wells and facilities.',
              },
            },
            {
              term: { fa: 'ذخیره برچیدن تأسیسات', en: 'Decommissioning provision' },
              def: {
                fa: 'بدهی برای مسدودسازی چاه‌ها، جمع‌آوری تأسیسات و احیای محل، به ارزش فعلی.',
                en: 'A liability, at present value, for plugging wells, removing facilities and restoring the site.',
              },
            },
            {
              term: { fa: 'آزادسازی تنزیل', en: 'Unwinding of the discount' },
              def: {
                fa: 'افزایش سالانه ذخیره تنزیل‌شده با گذشت زمان که به‌عنوان هزینه مالی ثبت می‌شود.',
                en: 'The yearly increase of a discounted provision as time passes, recorded as a finance cost.',
              },
            },
            {
              term: { fa: 'مجوز هزینه (AFE)', en: 'Authorization for expenditure (AFE)' },
              def: {
                fa: 'بودجه مصوب یک کار مشخص مانند حفاری یک چاه که در ERP به WBS آن وصل است.',
                en: 'The approved budget for a specific job such as drilling a well, linked to its WBS in the ERP.',
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
        fa: 'کدام هزینه در دامنه IFRS 6 قرار می‌گیرد؟',
        en: 'Which cost falls within the scope of IFRS 6?',
      },
      options: [
        { fa: 'مطالعه منطقه‌ای پیش از دریافت حق اکتشاف', en: 'A regional study before the right to explore is obtained' },
        { fa: 'حفاری چاه توسعه‌ای پس از تصویب طرح توسعه', en: 'Drilling a development well after the development plan is approved' },
        { fa: 'حفاری چاه ارزیابی پس از دریافت مجوز و پیش از اثبات توجیه تجاری', en: 'Drilling an appraisal well after the licence and before commercial viability is shown' },
        { fa: 'حقوق اپراتورهای ایستگاه تقویت فشار در دوره تولید', en: 'Salaries of compressor station operators during production' },
      ],
      answer: 2,
      explain: {
        fa: 'IFRS 6 فقط بازه میان دریافت حق قانونی اکتشاف و نشان داده شدن امکان‌پذیری فنی و توجیه تجاری را پوشش می‌دهد. چاه ارزیابی دقیقاً در این بازه است. مطالعه پیش از مجوز قبل از بازه و چاه توسعه‌ای و هزینه تولید پس از آن هستند.',
        en: 'IFRS 6 covers only the window between obtaining the legal right to explore and demonstrating technical feasibility and commercial viability. An appraisal well sits exactly in that window. The pre-licence study comes before it; the development well and production costs come after.',
      },
    },
    {
      q: {
        fa: 'با رویه تلاش‌های موفق، چاه اکتشافی AR-X2 به بهای 8,000,000 خشک اعلام می‌شود. ثبت درست کدام است؟',
        en: 'Under successful efforts, exploration well AR-X2, costing 8,000,000, is declared dry. What is the correct entry?',
      },
      options: [
        { fa: 'بدهکار هزینه اکتشاف 8,000,000 / بستانکار دارایی‌های اکتشاف و ارزیابی 8,000,000', en: 'Dr Exploration expense 8,000,000 / Cr E&E assets 8,000,000' },
        { fa: 'بدهکار دارایی‌های نفت و گاز 8,000,000 / بستانکار دارایی‌های اکتشاف و ارزیابی 8,000,000', en: 'Dr Oil and gas properties 8,000,000 / Cr E&E assets 8,000,000' },
        { fa: 'هیچ ثبتی تا پایان عمر میدان لازم نیست', en: 'No entry is needed until the end of the field’s life' },
        { fa: 'بدهکار ذخیره برچیدن 8,000,000 / بستانکار دارایی‌های اکتشاف و ارزیابی 8,000,000', en: 'Dr Decommissioning provision 8,000,000 / Cr E&E assets 8,000,000' },
      ],
      answer: 0,
      explain: {
        fa: 'در تلاش‌های موفق فقط تلاش‌های منتهی به کشف دارایی می‌مانند؛ چاه خشک هنگام مشخص شدن نتیجه از دارایی خارج و هزینه می‌شود. انتقال آن به دارایی‌های نفت و گاز همان کاری است که روش بهای کامل انجام می‌دهد.',
        en: 'Under successful efforts only efforts that find reserves stay as assets; a dry well is removed from assets and expensed when the result is known. Moving it into oil and gas properties is what full cost would do.',
      },
    },
    {
      q: {
        fa: 'لرزه‌نگاری 2,000,000، چاه اکتشافی خشک 5,000,000 و چاه اکتشافی موفق 10,000,000. با تلاش‌های موفق چه مبلغی هزینه دوره می‌شود؟',
        en: 'Seismic 2,000,000, a dry exploration well 5,000,000 and a successful exploration well 10,000,000. Under successful efforts, how much is expensed?',
      },
      options: [
        { fa: '17,000,000', en: '17,000,000' },
        { fa: '5,000,000', en: '5,000,000' },
        { fa: 'صفر', en: 'Zero' },
        { fa: '7,000,000', en: '7,000,000' },
      ],
      answer: 3,
      explain: {
        fa: 'لرزه‌نگاری (2,000,000) و چاه خشک (5,000,000) هزینه می‌شوند: جمعاً 7,000,000. چاه موفق دارایی است. صفر پاسخ روش بهای کامل است و 5,000,000 لرزه‌نگاری را جا انداخته است.',
        en: 'Seismic (2,000,000) and the dry well (5,000,000) are expensed: 7,000,000 in total. The successful well is an asset. Zero is the full cost answer, and 5,000,000 leaves out the seismic.',
      },
    },
    {
      q: {
        fa: 'بهای قابل استهلاک 60,000,000، ذخایر ابتدای سال 15,000,000 بشکه و تولید سال 2,000,000 بشکه است. استهلاک ذخایر سال چقدر است؟',
        en: 'Depletable cost is 60,000,000, reserves at the start of the year 15,000,000 barrels and production 2,000,000 barrels. What is the year’s depletion?',
      },
      options: [
        { fa: '4,000,000', en: '4,000,000' },
        { fa: '8,000,000', en: '8,000,000' },
        { fa: '30,000,000', en: '30,000,000' },
        { fa: '6,000,000', en: '6,000,000' },
      ],
      answer: 1,
      explain: {
        fa: 'نرخ = 60,000,000 ÷ 15,000,000 = 4 برای هر بشکه؛ استهلاک = 2,000,000 × 4 = 8,000,000. عدد 4,000,000 نرخ را با تعداد بشکه اشتباه گرفته است.',
        en: 'Rate = 60,000,000 ÷ 15,000,000 = 4 per barrel; depletion = 2,000,000 × 4 = 8,000,000. 4,000,000 confuses the rate with a barrel count.',
      },
    },
    {
      q: {
        fa: 'در ابتدای سال 2 برآورد ذخایر کاهش می‌یابد. حسابدار باید چه کند؟',
        en: 'At the start of Year 2 the reserves estimate is revised down. What should the accountant do?',
      },
      options: [
        { fa: 'استهلاک سال 1 را با ذخایر جدید دوباره محاسبه و اصلاح کند', en: 'Recalculate and restate Year 1 depletion with the new reserves' },
        { fa: 'تا پایان عمر میدان نرخ قبلی را نگه دارد', en: 'Keep the old rate until the end of the field’s life' },
        { fa: 'از سال 2 به بعد نرخ جدید را با ارزش دفتری و ذخایر جدید محاسبه کند', en: 'Compute a new rate from Year 2 onward using the book value and the new reserves' },
        { fa: 'تفاوت را مستقیم به سود انباشته ببرد', en: 'Take the difference straight to retained earnings' },
      ],
      answer: 2,
      explain: {
        fa: 'تجدیدنظر در ذخایر تغییر در برآورد است و طبق IAS 8 آینده‌نگر اعمال می‌شود: ارزش دفتری باقیمانده بر ذخایر جدید تقسیم می‌شود. اصلاح سال‌های گذشته فقط برای اشتباه یا تغییر رویه است، نه تغییر برآورد.',
        en: 'A reserves revision is a change in estimate and applies prospectively under IAS 8: the remaining book value is divided by the new reserves. Restating past years is for errors or policy changes, not estimate changes.',
      },
    },
    {
      q: {
        fa: 'هزینه برچیدن مورد انتظار 1,331,000 است که 3 سال بعد پرداخت می‌شود و نرخ تنزیل 10٪ است. ذخیره اولیه چقدر است؟',
        en: 'Expected decommissioning cost is 1,331,000, payable in 3 years, and the discount rate is 10%. What is the initial provision?',
      },
      options: [
        { fa: '1,000,000', en: '1,000,000' },
        { fa: '1,331,000', en: '1,331,000' },
        { fa: '1,210,000', en: '1,210,000' },
        { fa: '931,700', en: '931,700' },
      ],
      answer: 0,
      explain: {
        fa: '1.1 × 1.1 × 1.1 = 1.331؛ پس ارزش فعلی 1,331,000 ÷ 1.331 = 1,000,000. ثبت 1,331,000 یعنی تنزیل نکردن؛ 1,210,000 فقط یک سال تنزیل شده و 931,700 از کم کردن ساده 30٪ به دست آمده است.',
        en: '1.1 × 1.1 × 1.1 = 1.331, so the present value is 1,331,000 ÷ 1.331 = 1,000,000. Recording 1,331,000 ignores discounting; 1,210,000 discounts only one year; 931,700 just deducts a flat 30%.',
      },
    },
    {
      q: {
        fa: 'ذخیره برچیدن در ابتدای سال 2 برابر 1,100,000 و نرخ تنزیل 10٪ است. ثبت سال 2 کدام است؟',
        en: 'The decommissioning provision is 1,100,000 at the start of Year 2 and the discount rate is 10%. What is the Year 2 entry?',
      },
      options: [
        { fa: 'بدهکار هزینه استهلاک ذخایر 110,000 / بستانکار ذخیره 110,000', en: 'Dr Depletion expense 110,000 / Cr Provision 110,000' },
        { fa: 'بدهکار هزینه مالی 100,000 / بستانکار ذخیره 100,000', en: 'Dr Finance cost 100,000 / Cr Provision 100,000' },
        { fa: 'بدهکار ذخیره 110,000 / بستانکار هزینه مالی 110,000', en: 'Dr Provision 110,000 / Cr Finance cost 110,000' },
        { fa: 'بدهکار هزینه مالی 110,000 / بستانکار ذخیره 110,000', en: 'Dr Finance cost 110,000 / Cr Provision 110,000' },
      ],
      answer: 3,
      explain: {
        fa: 'آزادسازی تنزیل روی مانده ابتدای همان سال محاسبه می‌شود: 1,100,000 × 10٪ = 110,000، و هزینه مالی است که ذخیره را افزایش می‌دهد. 100,000 آزادسازی سال 1 بود و استهلاک ذخایر حساب نادرستی برای این مبلغ است.',
        en: 'Unwinding is computed on that year’s opening balance: 1,100,000 × 10% = 110,000, a finance cost that increases the provision. 100,000 was Year 1’s unwinding, and depletion expense is the wrong account for it.',
      },
    },
    {
      q: {
        fa: 'هنگام شناسایی اولیه ذخیره برچیدن، طرف بدهکار ثبت کدام است؟',
        en: 'When a decommissioning provision is first recognised, what is debited?',
      },
      options: [
        { fa: 'هزینه عملیاتی همان سال', en: 'That year’s operating expense' },
        { fa: 'بهای دارایی مربوط (دارایی‌های نفت و گاز)', en: 'The cost of the related asset (oil and gas properties)' },
        { fa: 'سود انباشته', en: 'Retained earnings' },
        { fa: 'هزینه مالی', en: 'Finance cost' },
      ],
      answer: 1,
      explain: {
        fa: 'طبق IAS 16 برآورد هزینه برچیدن جزو بهای دارایی است؛ پس دارایی بدهکار و ذخیره بستانکار می‌شود و این بها با استهلاک ذخایر در طول تولید به هزینه می‌رود. هزینه مالی فقط برای آزادسازی سالانه تنزیل است.',
        en: 'Under IAS 16 the estimated decommissioning cost is part of the asset’s cost, so the asset is debited and the provision credited; that cost then reaches expense through depletion over production. Finance cost is only for the yearly unwinding.',
      },
    },
    {
      q: {
        fa: 'بودجه AFE-207 برابر 9,000,000 و هزینه واقعی 9,140,000 است. آستانه AFE تکمیلی در این مثال 10٪ است. کدام درست است؟',
        en: 'AFE-207’s budget is 9,000,000 and actual cost is 9,140,000. In this example the supplementary-AFE threshold is 10%. Which is correct?',
      },
      options: [
        { fa: 'بیش‌خرج 1,400,000 است و AFE تکمیلی لازم است', en: 'The overrun is 1,400,000 and a supplementary AFE is needed' },
        { fa: 'بیش‌خرج 140,000 (حدود 15٪) است و AFE تکمیلی لازم است', en: 'The overrun is 140,000 (about 15%) and a supplementary AFE is needed' },
        { fa: 'بیش‌خرج 140,000 (حدود 1.6٪) است و AFE تکمیلی لازم نیست', en: 'The overrun is 140,000 (about 1.6%) and no supplementary AFE is needed' },
        { fa: 'بیش‌خرجی وجود ندارد', en: 'There is no overrun' },
      ],
      answer: 2,
      explain: {
        fa: '9,140,000 منهای 9,000,000 برابر 140,000 است و 140,000 ÷ 9,000,000 حدود 1.6٪ می‌شود که کمتر از آستانه 10٪ است. با این حال بیش‌خرج باید در گزارش ماهانه توضیح داده شود. 1,400,000 ده برابر رقم درست است.',
        en: '9,140,000 minus 9,000,000 is 140,000, and 140,000 ÷ 9,000,000 is about 1.6%, below the 10% threshold. The overrun must still be explained in the monthly report. 1,400,000 is ten times the right figure.',
      },
    },
    {
      q: {
        fa: 'کدام مورد طبق IFRS 6 نشانه کاهش ارزش دارایی اکتشاف و ارزیابی است؟',
        en: 'Which of these is an impairment indicator for an E&E asset under IFRS 6?',
      },
      options: [
        { fa: 'حق اکتشاف به‌زودی منقضی می‌شود و انتظار تمدید آن نمی‌رود', en: 'The right to explore will soon expire and is not expected to be renewed' },
        { fa: 'قیمت نفت امروز کمی بالا رفته است', en: 'The oil price rose slightly today' },
        { fa: 'شرکا AFE حفاری را تصویب کرده‌اند', en: 'The partners have approved the drilling AFE' },
        { fa: 'لرزه‌نگاری جدید ساختار امیدوارکننده‌ای نشان داده است', en: 'A new seismic survey shows a promising structure' },
      ],
      answer: 0,
      explain: {
        fa: 'IFRS 6 انقضای حق اکتشاف بدون انتظار تمدید را صراحتاً نشانه کاهش ارزش می‌داند؛ نشانه‌های دیگر نبود بودجه برای اکتشاف بیشتر، تصمیم به توقف پس از نیافتن ذخایر تجاری و داده‌های حاکی از بازیافت‌نشدن مبلغ دفتری است. سایر گزینه‌ها خبرهای خوب یا خنثی هستند.',
        en: 'IFRS 6 names expiry of the right to explore without expected renewal as an impairment indicator; others are no budget for further exploration, a decision to stop after finding no commercial reserves, and data suggesting the carrying amount will not be recovered. The other options are good or neutral news.',
      },
    },
  ],
}
