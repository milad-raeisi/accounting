import type { Lesson } from '../../types'

const t = (fa: string, en: string) => ({ fa, en })

/* Account titles used in the Masar Petroleum examples (codes follow the accounting course's chart of accounts). */
const ac = {
  inventory: t('1310 موجودی مواد و قطعات', '1310 Materials and spares inventory'),
  auc: t('1510 دارایی‌های در جریان تکمیل (WBS `AFE-2025-014.02.01`، عنصر هزینه 6120)', '1510 Assets under construction (WBS `AFE-2025-014.02.01`, cost element 6120)'),
  opex: t('5110 هزینه عملیات تولید (مرکز هزینه `CC-ARY-CMP`)', '5110 Production operating expense (cost centre `CC-ARY-CMP`)'),
  grir: t('2120 حساب واسط رسید کالا و فاکتور (GR/IR)', '2120 GR/IR clearing'),
}

export const lesson: Lesson = {
  slug: 'budgeting-fundamentals',
  number: 1,
  level: 'beginner',
  minutes: 26,
  icon: 'BookOpen',
  tone: 'primary',
  title: t('مبانی بودجه‌ریزی در شرکت نفت و گاز', 'Budgeting Fundamentals in Upstream Oil & Gas'),
  summary: t(
    'ببینید چرا یک شرکت نفت و گاز بالادستی بدون بودجه مصوب حتی یک چاه هم حفر نمی‌کند: برنامه کاری و بودجه سالانه (WP&B) و مسیر تصویب آن نزد مدیریت، شرکا و دولت، تفاوت بودجه سرمایه‌ای و عملیاتی، روش بالا به پایین و پایین به بالا، تقویم و مسئولان بودجه، و اینکه بودجه در ERP با نسخه، دوره و شیء هزینه چگونه نگهداری می‌شود.',
    'See why an upstream oil and gas company does not drill a single well without an approved budget: the annual work programme and budget (WP&B) and its approval by management, partners and government, CAPEX versus OPEX budgets, top-down and bottom-up budgeting, the budget calendar and budget owners, and how the ERP holds the budget by version, period and cost object.',
  ),
  objectives: [
    t(
      'توضیح دهید بودجه در یک شرکت نفت و گاز بالادستی چه کارهایی می‌کند و چرا بدون آن نه می‌توان هزینه کرد و نه هزینه را بازیافت کرد',
      'Explain what a budget does in an upstream oil and gas company and why, without it, costs can be neither incurred nor recovered',
    ),
    t(
      'اجزای برنامه کاری و بودجه سالانه (WP&B) و مسیر تصویب آن نزد مدیریت، شرکا و دولت یا شرکت ملی نفت را شرح دهید',
      'Describe the parts of the annual work programme and budget (WP&B) and its approval route through management, partners and the government or national oil company',
    ),
    t(
      'اقلام بودجه را به سرمایه‌ای، عملیاتی یا اکتشافی طبقه‌بندی کنید و اثر هر طبقه را بر حساب‌ها بگویید',
      'Classify budget items as CAPEX, OPEX or exploration and state the accounting effect of each',
    ),
    t(
      'بودجه را به روش پایین به بالا بسازید، با سقف بالا به پایین آشتی دهید و آن را در تقویم بودجه زمان‌بندی کنید',
      'Build a budget bottom-up, reconcile it with a top-down ceiling and place it on the budget calendar',
    ),
    t(
      'نسخه، دوره و شیء هزینه بودجه در ERP را بشناسید و گزارش بودجه، واقعی، تعهد و مانده در دسترس را بخوانید',
      'Recognise budget versions, periods and cost objects in the ERP and read a budget, actual, commitment and available report',
    ),
  ],
  sections: [
    {
      id: 'why-budgets',
      title: t('چرا بودجه مهم است؟', 'Why Budgets Matter'),
      blocks: [
        {
          type: 'p',
          text: t(
            'مهر ماه است. مدیر حفاری **شرکت مسار پترولیوم** می‌خواهد قرارداد دکل حفاری چاه جدید AR-07 را برای سال آینده امضا کند، چون دکل‌های خوب زود رزرو می‌شوند. مدیر مالی می‌گوید: «هنوز نه. تا برنامه کاری و بودجه سال آینده را شرکا و کارفرمای دولتی تصویب نکنند، این هزینه نه از شرکا قابل مطالبه است و نه در بازیافت هزینه پذیرفته می‌شود؛ ERP هم بدون بودجه روی AFE این چاه اجازه صدور سفارش نمی‌دهد.» این گفت‌وگو خلاصه کل این دوره است: در صنعت نفت و گاز بالادستی، **پول بدون بودجه مصوب خرج نمی‌شود**.',
            'It is October. The drilling manager at **Masar Petroleum** wants to sign the rig contract for the new well AR-07 for next year, because good rigs are booked early. The finance manager says: “Not yet. Until the partners and the state counterparty approve next year’s work programme and budget, we cannot bill this cost to the partners or claim it in cost recovery, and the ERP will not release a purchase order without a budget on this well’s AFE.” That conversation sums up this whole course: in upstream oil and gas, **money is not spent without an approved budget**.',
          ),
        },
        {
          type: 'p',
          text: t(
            '**بودجه (Budget)** برنامه‌ای است که به زبان پول نوشته شده است: برای یک دوره مشخص (معمولاً یک سال) می‌گوید چه کارهایی انجام می‌دهیم، هر کار چقدر هزینه دارد، کی خرج می‌شود و چه کسی مسئول آن است، و کسانی که اختیار دارند آن را **تصویب** کرده‌اند. بودجه با «پیش‌بینی» فرق دارد: پیش‌بینی (Forecast) آخرین برآورد ما از آینده است و هر ماه عوض می‌شود؛ بودجه هدف مصوب است و فقط با تصویب دوباره تغییر می‌کند.',
            'A **budget** is a plan written in money: for a given period (usually a year) it says what we will do, what each activity will cost, when the money will be spent and who is responsible, and it has been **approved** by people with the authority to do so. A budget is not a forecast: a forecast is our latest estimate of the future and changes every month; the budget is the approved target and changes only through a new approval.',
          ),
        },
        {
          type: 'list',
          items: [
            t('**برنامه‌ریزی**: کارهای سال (حفاری، تعمیر چاه، تأسیسات، مطالعات) را با منابع و پول هماهنگ می‌کند.', '**Plan**: lines up the year’s work (drilling, workovers, facilities, studies) with people, equipment and money.'),
            t('**مجوز دادن**: هزینه‌ای که در بودجه مصوب آمده، اجازه شروع دارد؛ هزینه بیرون از بودجه باید جداگانه تصویب شود.', '**Authorise**: spending that is in the approved budget may start; anything outside it needs its own approval.'),
            t('**کنترل**: هزینه واقعی و تعهدات هر ماه با بودجه مقایسه می‌شود تا انحراف زود دیده شود.', '**Control**: actual costs and commitments are compared with the budget every month so variances show up early.'),
            t('**تأمین مالی**: در مشارکت، بهره‌بردار بر پایه بودجه زمان‌بندی‌شده از شرکا **درخواست وجه (Cash call)** می‌کند.', '**Fund**: in a joint venture the operator issues **cash calls** to the partners based on the phased budget.'),
            t('**بازیافت هزینه**: در بسیاری از قراردادهای نفتی، هزینه‌ای قابل بازیافت است که در برنامه و بودجه مصوب آمده و با شیء هزینه درست ثبت شده باشد.', '**Recover**: under many petroleum contracts a cost is recoverable only if it was in the approved programme and budget and was recorded on the right cost object.'),
            t('**سنجش عملکرد**: مدیران با مقایسه واقعی و بودجه ارزیابی می‌شوند.', '**Measure**: managers are assessed by comparing actuals with budget.'),
          ],
        },
        {
          type: 'table',
          caption: t('مثال جاری این دوره: شرکت مسار پترولیوم', 'The running example of this course: Masar Petroleum'),
          head: [t('مورد', 'Item'), t('شرح', 'Description')],
          rows: [
            [t('شرکت', 'Company'), t('شرکت مسار پترولیوم، بهره‌بردار (Operator) مشارکت میدان آریا؛ کد شرکت در ERP: `MP01`', 'Masar Petroleum, operator of the Arya field joint venture; ERP company code `MP01`')],
            [t('میدان و چاه‌ها', 'Field and wells'), t('میدان خشکی آریا با چاه‌های AR-01 تا AR-12؛ چاه AR-07 برای سال 2026 برنامه‌ریزی شده است', 'The onshore Arya field with wells AR-01 to AR-12; well AR-07 is planned for 2026')],
            [t('تأسیسات', 'Facilities'), t('جداکننده‌ها، خطوط جریان و ایستگاه تقویت فشار گاز با دو واحد کمپرسور', 'Separators, flowlines and a gas compressor station with two compressor units')],
            [t('انبارها', 'Warehouses'), t('انبار مرکزی و انبار میدان', 'Central Warehouse and Field Warehouse')],
            [t('شرکا (سهم‌ها فرضی‌اند)', 'Partners (illustrative shares)'), t('مسار پترولیوم 50٪، شریک الف 30٪، شریک ب 20٪', 'Masar Petroleum 50%, Partner A 30%, Partner B 20%')],
            [t('کدگذاری هزینه', 'Cost coding'), t('کد شرکت، مرکز هزینه (مثلاً `CC-ARY-PRD`)، عنصر WBS (مثلاً `AFE-2025-014.02.03`)، عنصر هزینه یا حساب کل، نشانگر قابل بازیافت (R/N) و طبقه هزینه', 'Company code, cost centre (for example `CC-ARY-PRD`), WBS element (for example `AFE-2025-014.02.03`), cost element or GL account, recoverable flag (R/N) and cost category')],
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: t('هر شریک چقدر می‌پردازد؟', 'How much does each partner pay?'),
          text: t(
            'بودجه سال 2026 میدان آریا 34,000,000 است (ارقام این دوره فرضی‌اند). با سهم‌های مشارکت: مسار پترولیوم 34,000,000 × 50٪ = 17,000,000، شریک الف 34,000,000 × 30٪ = 10,200,000 و شریک ب 34,000,000 × 20٪ = 6,800,000. جمع سه سهم دوباره 34,000,000 می‌شود. هر شریک پیش از تصویب، سهم خودش را با دقت بررسی می‌کند؛ برای همین بودجه در مشارکت یک سند مذاکره است، نه فقط یک جدول داخلی.',
            'The 2026 budget for the Arya field is 34,000,000 (all figures in this course are illustrative). With the joint-venture shares: Masar Petroleum 34,000,000 × 50% = 17,000,000, Partner A 34,000,000 × 30% = 10,200,000 and Partner B 34,000,000 × 20% = 6,800,000. The three shares add back to 34,000,000. Each partner checks its own share carefully before approving, which is why a joint-venture budget is a negotiated document, not just an internal spreadsheet.',
          ),
        },
      ],
    },
    {
      id: 'wpb',
      title: t('برنامه کاری و بودجه سالانه (WP&B)', 'The Annual Work Programme and Budget (WP&B)'),
      blocks: [
        {
          type: 'p',
          text: t(
            '**برنامه کاری و بودجه سالانه (Work Programme and Budget یا WP&B)** سند اصلی برنامه‌ریزی یک میدان است و دو نیمه دارد. **برنامه کاری** کارهای فیزیکی سال را می‌گوید: چند چاه حفر یا تعمیر می‌شود، کدام تأسیسات ساخته یا ارتقا می‌یابد، چه مطالعاتی انجام می‌شود و هدف تولید چقدر است. **بودجه** همان کارها را به پول تبدیل می‌کند و به تفکیک طبقه هزینه و فصل نشان می‌دهد. در مشارکت، بهره‌بردار WP&B را تهیه می‌کند و **کمیته عملیات (Operating Committee)** شرکا آن را تصویب می‌کند؛ در بسیاری از قراردادهای نفتی، کارفرمای دولتی یا شرکت ملی نفت نیز باید آن را تأیید کند.',
            'The **annual work programme and budget (WP&B)** is the main planning document of a field, and it has two halves. The **work programme** states the physical work of the year: how many wells will be drilled or worked over, which facilities will be built or upgraded, which studies will be done and what the production target is. The **budget** turns that same work into money, broken down by cost category and quarter. In a joint venture the operator prepares the WP&B and the partners’ **operating committee** approves it; under many petroleum contracts the state counterparty or national oil company must approve it too.',
          ),
        },
        {
          type: 'table',
          caption: t('بخشی از WP&B سال 2026 میدان آریا (ارقام فرضی)', 'Extract from the Arya field 2026 WP&B (illustrative)'),
          head: [t('فعالیت', 'Activity'), t('مقدار فیزیکی', 'Physical scope'), t('طبقه هزینه', 'Cost category'), t('بودجه', 'Budget')],
          numericCols: [3],
          rows: [
            [t('بازپردازش لرزه‌نگاری سه‌بعدی و مطالعات زمین‌شناسی', '3D seismic reprocessing and G&G studies'), t('یال شمالی میدان', 'Northern flank of the field'), t('اکتشاف', 'Exploration'), 1200000],
            [t('حفاری و تکمیل چاه AR-07 (`AFE-2025-014`)', 'Drill and complete well AR-07 (`AFE-2025-014`)'), t('یک چاه توسعه‌ای', 'One development well'), t('توسعه', 'Development'), 8800000],
            [t('ارتقای ایستگاه تقویت فشار (`AFE-2025-021`)', 'Compressor station upgrade (`AFE-2025-021`)'), t('نصب واحد کمپرسور سوم', 'Install a third compressor unit'), t('توسعه', 'Development'), 6000000],
            [t('تعمیر چاه (Workover)', 'Well workovers'), t('چاه‌های AR-03 و AR-05', 'Wells AR-03 and AR-05'), t('عملیاتی', 'Operating'), 1400000],
            [t('عملیات تولید میدان (`CC-ARY-PRD`)', 'Field production operations (`CC-ARY-PRD`)'), t('هدف تولید: میانگین 12,000 بشکه در روز', 'Target: average 12,000 barrels per day'), t('عملیاتی', 'Operating'), 9600000],
            [t('بهره‌برداری ایستگاه تقویت فشار (`CC-ARY-CMP`)', 'Compressor station operations (`CC-ARY-CMP`)'), t('دو واحد در سرویس', 'Two units in service'), t('عملیاتی', 'Operating'), 2400000],
            [t('نگهداری و تعمیرات میدان (`CC-ARY-MNT`)', 'Field maintenance (`CC-ARY-MNT`)'), t('برنامه نگهداری پیشگیرانه', 'Preventive maintenance plan'), t('عملیاتی', 'Operating'), 3000000],
            [t('هزینه‌های عمومی و اداری تخصیص‌یافته', 'Allocated general and administrative costs'), t('دفتر مرکزی و پشتیبانی', 'Head office and support'), t('عملیاتی', 'Operating'), 1600000],
            [t('**جمع**', '**Total**'), t('', ''), t('', ''), 34000000],
          ],
        },
        {
          type: 'p',
          text: t(
            'از این 34,000,000، بخش اکتشاف 1,200,000، بخش توسعه 8,800,000 + 6,000,000 = 14,800,000 و بخش عملیاتی 1,400,000 + 9,600,000 + 2,400,000 + 3,000,000 + 1,600,000 = 18,000,000 است. جمع سه طبقه: 1,200,000 + 14,800,000 + 18,000,000 = 34,000,000.',
            'Of this 34,000,000, exploration is 1,200,000, development is 8,800,000 + 6,000,000 = 14,800,000 and operating is 1,400,000 + 9,600,000 + 2,400,000 + 3,000,000 + 1,600,000 = 18,000,000. The three categories add up to 1,200,000 + 14,800,000 + 18,000,000 = 34,000,000.',
          ),
        },
        {
          type: 'steps',
          items: [
            {
              title: t('تهیه و بررسی داخلی', 'Internal preparation and review'),
              text: t(
                'مسئولان بودجه درخواست‌ها را می‌سازند، واحد برنامه‌ریزی و کنترل پروژه آن‌ها را یکجا می‌کند و مدیریت مسار پترولیوم با سقف کلی مقایسه می‌کند.',
                'Budget owners build their requests, planning and project controls consolidate them, and Masar Petroleum’s management checks them against the overall ceiling.',
              ),
            },
            {
              title: t('تصویب در بهره‌بردار', 'Approval inside the operator'),
              text: t(
                'مدیرعامل و هیئت‌مدیره مسار پترولیوم، طبق جدول تفویض اختیار، پیش‌نویس WP&B را تأیید می‌کنند.',
                'Masar Petroleum’s CEO and board approve the draft WP&B under the delegation of authority.',
              ),
            },
            {
              title: t('تصویب شرکا', 'Partner approval'),
              text: t(
                'WP&B با توضیح هر ردیف به کمیته عملیات فرستاده می‌شود. شرکا سؤال می‌پرسند، گاهی کاهش می‌خواهند و سپس طبق قواعد رأی‌گیری **موافقت‌نامه عملیات مشترک (JOA)** رأی می‌دهند.',
                'The WP&B goes to the operating committee with an explanation for every line. Partners ask questions, sometimes demand cuts, and then vote under the rules of the **joint operating agreement (JOA)**.',
              ),
            },
            {
              title: t('تأیید دولت یا شرکت ملی نفت', 'Government or NOC approval'),
              text: t(
                'اگر قرارداد نفتی لازم بداند، WP&B به کارفرمای دولتی یا کمیته مدیریت مشترک می‌رود تا تأیید شود.',
                'Where the petroleum contract requires it, the WP&B goes to the state counterparty or a joint management committee for approval.',
              ),
            },
            {
              title: t('بارگذاری در ERP', 'Loading into the ERP'),
              text: t(
                'نسخه مصوب در ERP روی مراکز هزینه و عناصر WBS ثبت و آزاد می‌شود؛ از این لحظه کنترل بودجه شروع می‌شود.',
                'The approved version is entered on cost centres and WBS elements in the ERP and released; budget control starts from that moment.',
              ),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('نقش دولت و شرکت ملی نفت', 'The role of the government and the national oil company'),
          text: t(
            'در بیشتر قراردادهای نفتی، از قراردادهای مشارکت در تولید (PSC یا EPSA) تا قراردادهای بیع متقابل و قرارداد نفتی ایران (IPC) و قراردادهای خدماتی، کارفرمای دولتی (در ایران، شرکت ملی نفت یا شرکت‌های تابعه آن) یا یک کمیته مدیریت مشترک، برنامه و بودجه سالانه را بررسی و تأیید می‌کند. جزئیات (مهلت‌ها، سطح جزئیات و اثر عدم تأیید) را خود قرارداد تعیین می‌کند. قاعده کلی ساده است: هزینه‌ای که بیرون از برنامه و بودجه مصوب یا بدون تأیید لازم انجام شود، ممکن است در بازیافت هزینه پذیرفته نشود.',
            'Under most petroleum contracts, from production sharing contracts (PSC or EPSA) to buy-back contracts, Iran’s petroleum contract (IPC) and service contracts, the state counterparty (in Iran, the national oil company or its subsidiaries) or a joint management committee reviews and approves the annual programme and budget. The details (deadlines, level of detail and the effect of non-approval) come from the contract itself. The general rule is simple: a cost incurred outside the approved programme and budget, or without the required approval, may be refused in cost recovery.',
          ),
        },
        {
          type: 'compare',
          left: {
            title: t('WP&B: برنامه یک سال', 'WP&B: the plan for one year'),
            items: [
              t('همه فعالیت‌های میدان در یک سال را پوشش می‌دهد', 'Covers all of the field’s activities for one year'),
              t('هم سرمایه‌ای، هم عملیاتی، هم اکتشافی', 'CAPEX, OPEX and exploration together'),
              t('سالی یک بار تصویب و در صورت نیاز در میانه سال بازنگری می‌شود', 'Approved once a year, revised mid-year if needed'),
              t('مبنای درخواست وجه از شرکا و گزارش به دولت', 'Basis for cash calls and reports to the government'),
            ],
          },
          right: {
            title: t('AFE: مجوز یک کار مشخص', 'AFE: authority for one specific job'),
            items: [
              t('یک پروژه یا چاه مشخص، مثلاً حفاری AR-07', 'One specific project or well, for example drilling AR-07'),
              t('معمولاً سرمایه‌ای و بالاتر از یک سقف مبلغ', 'Usually capital and above a value threshold'),
              t('برای کل عمر کار، حتی اگر از یک سال بگذرد', 'For the whole life of the job, even across years'),
              t('در درس «چرخه عمر AFE» کامل بررسی می‌شود', 'Covered fully in the lesson “The AFE Lifecycle”'),
            ],
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل', 'In practice'),
          text: t(
            'بسته WP&B که به کمیته عملیات می‌رود معمولاً شامل پیش‌بینی تولید، برنامه حفاری و تعمیر چاه، برنامه HSE، نیروی انسانی، بودجه به تفکیک طبقه و فصل و توضیح هر ردیف مهم است. بهره‌بردارهای باتجربه یک «کتاب بودجه» نگه می‌دارند: برای هر ردیف، مبنای محاسبه (مقدار × نرخ)، فرض‌ها و مسئول آن. شریکی که مبنای عددی را ببیند، سریع‌تر رأی می‌دهد.',
            'The WP&B pack sent to the operating committee usually holds the production forecast, the drilling and workover plan, the HSE plan, manpower, the budget by category and quarter, and an explanation of each major line. Experienced operators keep a “budget book”: for every line, the basis of calculation (quantity × rate), the assumptions and the owner. A partner who can see the basis of a number votes faster.',
          ),
        },
      ],
    },
    {
      id: 'capex-opex',
      title: t('بودجه سرمایه‌ای و بودجه عملیاتی', 'CAPEX and OPEX Budgets'),
      blocks: [
        {
          type: 'p',
          text: t(
            '**هزینه سرمایه‌ای (CAPEX)** خرجی است که دارایی جدیدی می‌سازد یا دارایی موجود را بهبود می‌دهد و بیش از یک سال سود می‌رساند: حفاری چاه توسعه‌ای، ساخت خط جریان، نصب کمپرسور جدید. این هزینه‌ها در ERP روی یک **عنصر WBS** جمع می‌شوند و در حساب 1510 دارایی‌های در جریان تکمیل می‌نشینند؛ وقتی کار تمام شد، به 1520 دارایی‌های نفت و گاز منتقل و در سال‌های بعد مستهلک می‌شوند. **هزینه عملیاتی (OPEX)** هزینه گرداندن روزانه میدان است: مواد شیمیایی، سوخت، حقوق اپراتورها، نگهداری عادی. این‌ها روی **مرکز هزینه** ثبت می‌شوند و همان سال به هزینه می‌روند.',
            '**Capital expenditure (CAPEX)** is spending that creates a new asset or improves an existing one and benefits more than one year: drilling a development well, building a flowline, installing a new compressor. In the ERP these costs collect on a **WBS element** and sit in account 1510 Assets under construction; when the job is finished they move to 1520 Oil and gas properties and are depreciated over the following years. **Operating expenditure (OPEX)** is the cost of running the field day to day: chemicals, fuel, operators’ salaries, routine maintenance. These are posted to a **cost centre** and expensed in the same year.',
          ),
        },
        {
          type: 'compare',
          left: {
            title: t('بودجه سرمایه‌ای (CAPEX)', 'CAPEX budget'),
            items: [
              t('حفاری و تکمیل چاه AR-07', 'Drilling and completing well AR-07'),
              t('واحد کمپرسور سوم ایستگاه تقویت فشار', 'The third compressor unit at the compressor station'),
              t('شیء هزینه: عنصر WBS یا AFE', 'Cost object: WBS element or AFE'),
              t('حساب: 1510 و سپس 1520؛ هزینه از راه استهلاک', 'Account: 1510, then 1520; expensed through depreciation'),
              t('معمولاً با AFE جداگانه تصویب می‌شود', 'Usually approved through its own AFE'),
            ],
          },
          right: {
            title: t('بودجه عملیاتی (OPEX)', 'OPEX budget'),
            items: [
              t('ضد امولسیون و بازدارنده خوردگی جداکننده‌ها', 'Demulsifier and corrosion inhibitor for the separators'),
              t('روغن روانکاری و سوخت کمپرسورها', 'Lube oil and fuel gas for the compressors'),
              t('شیء هزینه: مرکز هزینه (مثلاً `CC-ARY-PRD`)', 'Cost object: cost centre (for example `CC-ARY-PRD`)'),
              t('حساب: 5110 یا 5120؛ هزینه همان دوره', 'Account: 5110 or 5120; expensed in the period'),
              t('با WP&B سالانه تصویب می‌شود', 'Approved through the annual WP&B'),
            ],
          },
        },
        {
          type: 'p',
          text: t(
            'یک طبقه سوم هم داریم: **اکتشاف**. هزینه لرزه‌نگاری، مطالعات زمین‌شناسی و ژئوفیزیک (G&G) و چاه‌های اکتشافی جدا بودجه‌ریزی می‌شود، چون شرکا و دولت آن را جداگانه تصویب می‌کنند و قرارداد نفتی ممکن است قواعد بازیافت متفاوتی برایش داشته باشد. اینکه هزینه اکتشاف در دفاتر سرمایه‌ای شود یا به هزینه برود، به **رویه حسابداری** شرکت بستگی دارد (IFRS 6 اجازه انتخاب رویه می‌دهد)؛ بودجه باید با همان رویه سازگار باشد.',
            'There is a third category: **exploration**. Seismic, geological and geophysical (G&G) studies and exploration wells are budgeted separately because partners and government approve them separately and the petroleum contract may treat their recovery differently. Whether exploration cost is capitalised or expensed in the books depends on the company’s **accounting policy** (IFRS 6 allows a choice of policy); the budget must follow that same policy.',
          ),
        },
        {
          type: 'callout',
          tone: 'example',
          title: t('اگر یک قلم سرمایه‌ای اشتباهی عملیاتی بودجه شود', 'If a capital item is budgeted as OPEX by mistake'),
          text: t(
            'فرض کنید کولر گازی جدید ایستگاه تقویت فشار به مبلغ 600,000 اشتباهی در بودجه عملیاتی `CC-ARY-CMP` بیاید. سود آن سال 600,000 کم می‌شود، بودجه عملیاتی ایستگاه بی‌دلیل «بیش از حد» به نظر می‌رسد و هزینه در صورت بازیافت هزینه در طبقه غلط ادعا می‌شود. اگر درست سرمایه‌ای شود و عمر مفیدش 10 سال باشد، هزینه هر سال از راه استهلاک 600,000 ÷ 10 = 60,000 است.',
            'Suppose the compressor station’s new gas cooler, costing 600,000, is wrongly placed in the `CC-ARY-CMP` operating budget. That year’s profit drops by 600,000, the station’s OPEX looks overspent for no reason and the cost is claimed under the wrong category in the cost-recovery statement. Capitalised correctly with a 10-year useful life, the yearly charge through depreciation is 600,000 ÷ 10 = 60,000.',
          ),
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('موارد مرزی', 'Grey areas'),
          text: t(
            'تعمیر چاهی که فقط تولید از دست رفته را برمی‌گرداند معمولاً عملیاتی است؛ اما تعمیری که لایه تولیدی جدیدی باز می‌کند یا ذخیره جدیدی در دسترس می‌گذارد ممکن است سرمایه‌ای باشد. تعمیر اساسی کمپرسور که عمر آن را چند سال افزایش می‌دهد هم ممکن است، طبق IAS 16، به‌عنوان یک جزء دارایی سرمایه‌ای شود. این تصمیم را **هنگام بودجه‌ریزی** و طبق رویه مکتوب حسابداری بگیرید، نه هنگام ثبت فاکتور.',
            'A workover that only restores lost production is usually OPEX; one that opens a new producing zone or brings new reserves on stream may be CAPEX. A major compressor overhaul that extends its life by several years may also be capitalised as a component under IAS 16. Make this call **at budgeting time** and under the written accounting policy, not when the invoice is posted.',
          ),
        },
      ],
    },
    {
      id: 'top-down-bottom-up',
      title: t('بودجه‌ریزی بالا به پایین و پایین به بالا', 'Top-Down and Bottom-Up Budgeting'),
      blocks: [
        {
          type: 'p',
          text: t(
            'در روش **بالا به پایین (Top-down)**، مدیریت ارشد یک **سقف کلی** تعیین می‌کند؛ مثلاً بر پایه قیمت فرضی نفت، تولید مورد انتظار، نقدینگی و تمایل شرکا می‌گوید «کل بودجه میدان آریا در سال 2026 از 34,000,000 بیشتر نشود». در روش **پایین به بالا (Bottom-up)**، کسانی که کار را انجام می‌دهند بودجه را از جزء به کل می‌سازند: مقدار هر فعالیت را در نرخ آن ضرب می‌کنند و جمع می‌زنند.',
            'In **top-down** budgeting, senior management sets an **overall ceiling**; for example, from an assumed oil price, expected production, cash position and partner appetite it says “the total Arya field budget for 2026 must not exceed 34,000,000”. In **bottom-up** budgeting, the people who do the work build the budget from the detail up: they multiply the quantity of each activity by its rate and add up.',
          ),
        },
        {
          type: 'formula',
          text: t('بودجه هر ردیف (پایین به بالا) = مقدار × نرخ', 'Line budget (bottom-up) = quantity × rate'),
          note: t(
            'مثال: دکل حفاری چاه AR-07 برای 25 روز با نرخ روزانه 84,000: 25 × 84,000 = 2,100,000.',
            'Example: the AR-07 drilling rig for 25 days at a day rate of 84,000: 25 × 84,000 = 2,100,000.',
          ),
        },
        {
          type: 'compare',
          left: {
            title: t('بالا به پایین', 'Top-down'),
            items: [
              t('سریع است و با توان مالی شرکت و شرکا هماهنگ است', 'Fast, and in line with what the company and partners can afford'),
              t('اولویت‌های راهبردی را روشن می‌کند', 'Makes strategic priorities clear'),
              t('ممکن است با واقعیت فنی کار نخواند', 'May not match the technical reality of the work'),
              t('مسئولان بودجه احساس مالکیت کمتری دارند', 'Budget owners feel less ownership'),
            ],
          },
          right: {
            title: t('پایین به بالا', 'Bottom-up'),
            items: [
              t('دقیق است و مبنای هر عدد روشن است', 'Accurate, with a clear basis for every number'),
              t('مسئولان بودجه به آن متعهدترند', 'Budget owners are more committed to it'),
              t('کند است و جمعش معمولاً از توان مالی بیشتر می‌شود', 'Slow, and its total usually exceeds what can be afforded'),
              t('خطر «احتیاط اضافه» در هر ردیف وجود دارد', 'Risk of padding in every line'),
            ],
          },
        },
        {
          type: 'p',
          text: t(
            'در عمل هر دو روش با هم به کار می‌روند: مدیریت سقف را اعلام می‌کند، مسئولان بودجه درخواست جزئی می‌سازند و سپس در چند دور گفت‌وگو این دو به هم می‌رسند. در مسار پترولیوم، دور اول درخواست‌ها 36,500,000 شد؛ یعنی 36,500,000 − 34,000,000 = 2,500,000 بیشتر از سقف.',
            'In practice the two are used together: management announces the ceiling, budget owners build detailed requests, and the two meet after a few rounds of discussion. At Masar Petroleum the first round of requests came to 36,500,000, which is 36,500,000 − 34,000,000 = 2,500,000 above the ceiling.',
          ),
        },
        {
          type: 'table',
          caption: t('آشتی درخواست‌های پایین به بالا با سقف بالا به پایین', 'Reconciling bottom-up requests with the top-down ceiling'),
          head: [t('ردیف', 'Line'), t('درخواست دور اول', 'First-round request'), t('کاهش', 'Reduction'), t('بودجه نهایی', 'Final budget'), t('تصمیم', 'Decision')],
          numericCols: [1, 2, 3],
          rows: [
            [t('مطالعات اکتشافی', 'Exploration studies'), 2000000, 800000, 1200000, t('فقط یال شمالی بازپردازش شود', 'Reprocess the northern flank only')],
            [t('حفاری AR-07', 'Drill AR-07'), 8800000, 0, 8800000, t('بدون تغییر؛ ارزش‌آفرین‌ترین ردیف', 'Unchanged; highest-value line')],
            [t('ارتقای ایستگاه تقویت فشار', 'Compressor station upgrade'), 6000000, 0, 6000000, t('بدون تغییر؛ قرارداد اقلام دیرتحویل امضا شده', 'Unchanged; long-lead order already signed')],
            [t('تعمیر چاه', 'Workovers'), 2100000, 700000, 1400000, t('تعمیر AR-10 به سال بعد منتقل شد', 'AR-10 workover deferred to next year')],
            [t('عملیات تولید', 'Production operations'), 9600000, 0, 9600000, t('بدون تغییر', 'Unchanged')],
            [t('بهره‌برداری ایستگاه', 'Compressor operations'), 2400000, 0, 2400000, t('بدون تغییر', 'Unchanged')],
            [t('نگهداری و تعمیرات', 'Maintenance'), 3600000, 600000, 3000000, t('رنگ‌آمیزی غیرضروری حذف شد', 'Non-essential painting removed')],
            [t('عمومی و اداری', 'General and administrative'), 2000000, 400000, 1600000, t('سفرها و مشاوره کم شد', 'Travel and consultancy cut')],
            [t('**جمع**', '**Total**'), 36500000, 2500000, 34000000, t('برابر سقف', 'Equals the ceiling')],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل: کدام ردیف اول کم شود؟', 'In practice: which line goes first?'),
          text: t(
            'بهره‌بردارها ردیف‌ها را رتبه‌بندی می‌کنند: (1) الزامی: ایمنی، محیط زیست، الزامات قانونی و یکپارچگی تأسیسات؛ (2) متعهدشده: قراردادهای امضاشده؛ (3) ارزش‌آفرین: فعالیت‌هایی با ارزش فعلی خالص (NPV) مثبت مثل حفاری؛ (4) قابل تعویق. کاهش‌ها از پایین فهرست شروع می‌شود. هزینه ایمنی و یکپارچگی را هرگز برای رسیدن به سقف حذف نکنید.',
            'Operators rank lines: (1) mandatory: safety, environment, legal and asset-integrity work; (2) committed: signed contracts; (3) value-adding: activities with a positive net present value (NPV), such as drilling; (4) deferrable. Cuts start from the bottom of the list. Never remove safety or integrity spending just to meet the ceiling.',
          ),
        },
      ],
    },
    {
      id: 'calendar-owners',
      title: t('تقویم بودجه و مسئولان بودجه', 'The Budget Calendar and Budget Owners'),
      blocks: [
        {
          type: 'p',
          text: t(
            '**تقویم بودجه (Budget calendar)** جدول زمانی مصوبی است که می‌گوید هر مرحله تهیه بودجه کی شروع و کی تمام می‌شود و چه کسی مسئول آن است. چون WP&B باید پیش از شروع سال مالی به تصویب شرکا و دولت برسد، کار تهیه آن چند ماه زودتر شروع می‌شود.',
            'The **budget calendar** is the approved timetable stating when each step of budget preparation starts and ends and who is responsible for it. Because the WP&B must be approved by partners and government before the financial year starts, preparation begins several months earlier.',
          ),
        },
        {
          type: 'table',
          caption: t('تقویم بودجه مسار پترولیوم (زمان‌ها نسبت به شروع سال مالی)', 'Masar Petroleum budget calendar (timing relative to the start of the financial year)'),
          head: [t('مرحله', 'Step'), t('زمان', 'Timing'), t('مسئول', 'Owner'), t('خروجی', 'Output')],
          rows: [
            [t('ابلاغ دستورالعمل و فرض‌ها', 'Issue instructions and assumptions'), t('6 ماه پیش از شروع سال', '6 months before year start'), t('مدیر برنامه‌ریزی و بودجه', 'Planning and budget manager'), t('قیمت فرضی نفت، نرخ‌ها، سقف کلی، قالب‌ها', 'Oil price assumption, rates, overall ceiling, templates')],
            [t('تهیه درخواست‌ها', 'Prepare requests'), t('5 ماه پیش', '5 months before'), t('مسئولان مراکز هزینه و مدیران پروژه', 'Cost-centre managers and project managers'), t('درخواست پایین به بالا با مبنای محاسبه', 'Bottom-up requests with calculation basis')],
            [t('یکپارچه‌سازی و آشتی با سقف', 'Consolidate and reconcile with the ceiling'), t('4 ماه پیش', '4 months before'), t('کنترل پروژه و واحد مالی', 'Project controls and finance'), t('پیش‌نویس WP&B', 'Draft WP&B')],
            [t('تصویب داخلی', 'Internal approval'), t('3.5 ماه پیش', '3.5 months before'), t('مدیرعامل و هیئت‌مدیره', 'CEO and board'), t('WP&B تأییدشده بهره‌بردار', 'Operator-approved WP&B')],
            [t('کمیته عملیات شرکا', 'Partners’ operating committee'), t('3 ماه پیش', '3 months before'), t('بهره‌بردار و شرکا', 'Operator and partners'), t('WP&B مصوب شرکا', 'Partner-approved WP&B')],
            [t('تأیید دولت یا شرکت ملی نفت', 'Government or NOC approval'), t('طبق مهلت قرارداد', 'By the contract deadline'), t('بهره‌بردار و کارفرمای دولتی', 'Operator and state counterparty'), t('WP&B نهایی', 'Final WP&B')],
            [t('بارگذاری و آزادسازی در ERP', 'Load and release in the ERP'), t('2 هفته پیش', '2 weeks before'), t('واحد مالی (کنترل بودجه)', 'Finance (budget control)'), t('نسخه مصوب روی مراکز هزینه و WBS', 'Approved version on cost centres and WBS')],
          ],
        },
        {
          type: 'p',
          text: t(
            '**مسئول بودجه (Budget owner)** کسی است که پاسخ‌گوی یک ردیف بودجه است: آن را می‌سازد، از آن دفاع می‌کند، هزینه‌ها را تأیید می‌کند و انحراف‌ها را توضیح می‌دهد. برای بودجه عملیاتی، مسئول معمولاً رئیس همان مرکز هزینه است؛ برای بودجه سرمایه‌ای، مدیر پروژه یا **صاحب AFE**. واحد مالی مسئول بودجه نیست؛ هماهنگ‌کننده، نگهبان قواعد و صاحب داده‌های ERP است.',
            'A **budget owner** is the person accountable for a budget line: they build it, defend it, approve spending against it and explain variances. For OPEX the owner is usually the head of that cost centre; for CAPEX it is the project manager or **AFE owner**. Finance does not own the budget; it coordinates, guards the rules and owns the ERP data.',
          ),
        },
        {
          type: 'table',
          caption: t('مسئولان بودجه میدان آریا', 'Budget owners for the Arya field'),
          head: [t('بودجه', 'Budget'), t('شیء هزینه در ERP', 'ERP cost object'), t('مسئول بودجه', 'Budget owner')],
          rows: [
            [t('عملیات تولید میدان', 'Field production operations'), t('`CC-ARY-PRD`', '`CC-ARY-PRD`'), t('مدیر تولید میدان', 'Field production manager')],
            [t('بهره‌برداری ایستگاه تقویت فشار', 'Compressor station operations'), t('`CC-ARY-CMP`', '`CC-ARY-CMP`'), t('سرپرست ایستگاه تقویت فشار', 'Compressor station superintendent')],
            [t('نگهداری و تعمیرات میدان', 'Field maintenance'), t('`CC-ARY-MNT`', '`CC-ARY-MNT`'), t('مدیر نگهداری و تعمیرات', 'Maintenance manager')],
            [t('حفاری و تکمیل AR-07', 'Drill and complete AR-07'), t('پروژه `AFE-2025-014`', 'Project `AFE-2025-014`'), t('مدیر حفاری (صاحب AFE)', 'Drilling manager (AFE owner)')],
            [t('ارتقای ایستگاه تقویت فشار', 'Compressor station upgrade'), t('پروژه `AFE-2025-021`', 'Project `AFE-2025-021`'), t('مدیر پروژه تأسیسات', 'Facilities project manager')],
          ],
        },
        {
          type: 'p',
          text: t(
            'بودجه سالانه باید **زمان‌بندی (Phasing)** هم بشود، یعنی بین ماه‌ها یا فصل‌ها پخش شود. زمان‌بندی دو کاربرد دارد: مقایسه ماهانه واقعی با بودجه، و محاسبه درخواست وجه از شرکا. پخش مساوی (یک‌دوازدهم در هر ماه) فقط وقتی درست است که هزینه واقعاً یکنواخت باشد.',
            'The annual budget must also be **phased**, that is spread across months or quarters. Phasing has two uses: comparing actuals with budget each month, and calculating cash calls to the partners. An even spread (one twelfth per month) is only right when the cost really is even.',
          ),
        },
        {
          type: 'table',
          caption: t('زمان‌بندی فصلی بودجه `CC-ARY-CMP`', 'Quarterly phasing of the `CC-ARY-CMP` budget'),
          head: [t('فصل', 'Quarter'), t('بودجه', 'Budget'), t('دلیل', 'Reason')],
          numericCols: [1],
          rows: [
            [t('فصل 1', 'Q1'), 550000, t('بار عادی', 'Normal load')],
            [t('فصل 2', 'Q2'), 550000, t('بار عادی', 'Normal load')],
            [t('فصل 3', 'Q3'), 650000, t('گرمای تابستان: سوخت و خنک‌کاری بیشتر', 'Summer heat: more fuel and cooling')],
            [t('فصل 4', 'Q4'), 650000, t('سرویس سالانه واحدها', 'Annual unit servicing')],
            [t('**جمع سال**', '**Year total**'), 2400000, t('برابر WP&B', 'Equals the WP&B')],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل: زمان‌بندی و درخواست وجه', 'In practice: phasing and cash calls'),
          text: t(
            'بهره‌بردار معمولاً هر ماه بر پایه بودجه زمان‌بندی‌شده و پیش‌بینی تازه، سهم هر شریک را از هزینه‌های ماه بعد درخواست می‌کند. اگر زمان‌بندی غلط باشد، یا پول شرکا بی‌کار در حساب بهره‌بردار می‌ماند یا بهره‌بردار ناچار می‌شود سهم شرکا را از جیب خودش بپردازد. پس زمان‌بندی فقط یک کار گزارشی نیست؛ مستقیماً به نقدینگی مربوط است.',
            'Each month the operator usually calls each partner’s share of next month’s costs, based on the phased budget and the latest forecast. If the phasing is wrong, either the partners’ money sits idle in the operator’s account or the operator has to fund the partners’ share from its own pocket. Phasing is not just a reporting exercise; it drives cash.',
          ),
        },
      ],
    },
    {
      id: 'erp-budget',
      title: t('بودجه در ERP: نسخه، دوره و شیء هزینه', 'The Budget in the ERP: Versions, Periods and Cost Objects'),
      blocks: [
        {
          type: 'p',
          text: t(
            'در **سیستم برنامه‌ریزی منابع سازمان (ERP)** هر عدد بودجه چند «نشانی» دارد: **نسخه** (کدام بودجه: پیش‌نویس، مصوب یا بازنگری‌شده)، **دوره** (کدام سال و کدام ماه)، **شیء هزینه** (کدام مرکز هزینه یا عنصر WBS) و برای بودجه عملیاتی، **عنصر هزینه** (چه نوع هزینه‌ای، مثلاً 5110). ماژول بودجه و کنترل پروژه این اعداد را نگه می‌دارد و هر سند تدارکات، انبار، نگهداری و مالی که به آن شیء هزینه برسد، با آن مقایسه می‌شود.',
            'In an **enterprise resource planning (ERP)** system every budget figure has several “addresses”: a **version** (which budget: draft, approved or revised), a **period** (which year and which month), a **cost object** (which cost centre or WBS element) and, for OPEX, a **cost element** (what kind of cost, for example 5110). The budget and project control module holds these figures, and every procurement, inventory, maintenance and finance document that reaches that cost object is compared with them.',
          ),
        },
        {
          type: 'diagram',
          id: 'erp-modules',
          caption: t(
            'ماژول‌های ERP و جریان‌های یکپارچه؛ بودجه روی مراکز هزینه و پروژه‌ها نشسته و اسناد همه ماژول‌ها آن را مصرف می‌کنند.',
            'The ERP modules and their integration flows; the budget sits on cost centres and projects and is consumed by documents from every module.',
          ),
        },
        {
          type: 'table',
          caption: t('نسخه‌های بودجه در ERP مسار پترولیوم', 'Budget versions in the Masar Petroleum ERP'),
          head: [t('نسخه', 'Version'), t('کاربرد', 'Purpose'), t('چه کسی ثبت می‌کند', 'Entered by'), t('الزام‌آور برای کنترل؟', 'Binding for control?')],
          rows: [
            [t('برنامه (پیش‌نویس)', 'Plan (draft)'), t('درخواست‌های پایین به بالا و سناریوها', 'Bottom-up requests and scenarios'), t('مسئولان بودجه', 'Budget owners'), t('خیر', 'No')],
            [t('بودجه اولیه مصوب', 'Approved original budget'), t('WP&B مصوب، روی هر شیء هزینه', 'Approved WP&B, per cost object'), t('واحد مالی پس از تصویب', 'Finance, after approval'), t('بله', 'Yes')],
            [t('متمم (Supplement)', 'Supplement'), t('افزایش مصوب در میانه سال', 'Approved mid-year increase'), t('واحد مالی با سند متمم', 'Finance, with a supplement document'), t('بله', 'Yes')],
            [t('برگشت (Return)', 'Return'), t('کاهش یا آزادسازی بودجه استفاده‌نشده', 'Reduction or release of unused budget'), t('واحد مالی با سند برگشت', 'Finance, with a return document'), t('بله', 'Yes')],
            [t('پیش‌بینی', 'Forecast'), t('برآورد تازه تا پایان سال', 'Latest estimate to year-end'), t('مسئولان بودجه', 'Budget owners'), t('خیر', 'No')],
          ],
        },
        {
          type: 'formula',
          text: t('بودجه جاری = بودجه اولیه + متمم‌ها − برگشت‌ها', 'Current budget = original budget + supplements − returns'),
          note: t(
            'ERP بودجه جاری را برای کنترل در دسترس بودن بودجه به کار می‌برد، نه بودجه اولیه را.',
            'The ERP uses the current budget, not the original one, for availability control.',
          ),
        },
        {
          type: 'compare',
          left: {
            title: t('داده پایه (Master Data)', 'Master data'),
            items: [
              t('مراکز هزینه و سلسله‌مراتب آن‌ها', 'Cost centres and their hierarchy'),
              t('عناصر هزینه و حساب‌های کل', 'Cost elements and GL accounts'),
              t('پروژه‌ها و عناصر WBS', 'Projects and WBS elements'),
              t('سال مالی و 12 دوره آن', 'The financial year and its 12 periods'),
              t('پروفایل بودجه و حدود تحمل کنترل', 'Budget profile and control tolerances'),
            ],
          },
          right: {
            title: t('داده تراکنشی', 'Transaction data'),
            items: [
              t('سند ثبت بودجه اولیه', 'Original budget entry document'),
              t('سندهای متمم، برگشت و انتقال بودجه', 'Supplement, return and transfer documents'),
              t('سفارش خرید (تعهد)', 'Purchase orders (commitments)'),
              t('رسید کالا (GRN)، برگه ثبت خدمات (SES) و حواله انبار (هزینه واقعی)', 'Goods received notes (GRN), service entry sheets (SES) and goods issues (actuals)'),
              t('سندهای دستی مالی روی شیء هزینه', 'Manual finance journals on a cost object'),
            ],
          },
        },
        {
          type: 'steps',
          items: [
            { title: t('ورود برنامه', 'Enter the plan'), text: t('مسئول بودجه درخواستش را در نسخه برنامه روی شیء هزینه و دوره‌ها وارد می‌کند.', 'The budget owner enters the request in the plan version, by cost object and period.') },
            { title: t('بررسی', 'Review'), text: t('کنترل پروژه و واحد مالی جمع‌ها را با سقف و با WP&B مقایسه می‌کنند.', 'Project controls and finance compare the totals with the ceiling and the WP&B.') },
            { title: t('تصویب در گردش کار', 'Approve in the workflow'), text: t('مدیر مالی و مدیرعامل در **گردش کار تأیید** ERP تأیید می‌کنند؛ هر تأیید با نام و زمان ثبت می‌شود.', 'The CFO and CEO approve in the ERP **approval workflow**; each approval is logged with name and time.') },
            { title: t('کپی به نسخه بودجه و قفل', 'Copy to the budget version and lock'), text: t('پس از تصویب شرکا، اعداد به نسخه بودجه مصوب منتقل و نسخه برنامه قفل می‌شود.', 'After partner approval the figures are copied to the approved budget version and the plan version is locked.') },
            { title: t('آزادسازی', 'Release'), text: t('بودجه آزاد می‌شود و از این لحظه هر سفارش و هزینه با آن کنترل می‌شود.', 'The budget is released and from then on every order and cost is checked against it.') },
          ],
        },
        {
          type: 'h',
          text: t('مالی چه می‌بیند؟', 'What does Finance see?'),
        },
        {
          type: 'p',
          text: t(
            'ثبت بودجه در ERP **هیچ سندی در دفتر کل نمی‌سازد**؛ بودجه عددی برای کنترل است، نه رویداد مالی. دفتر کل فقط وقتی تغییر می‌کند که رویداد واقعی رخ دهد: **رسید کالا (GRN)** برای کالای سفارش‌داده‌شده، پذیرش **برگه ثبت خدمات (SES)** برای خدمات، حواله انبار، فاکتور بدون سفارش یا سند دستی. همین سندها به‌طور خودکار بودجه شیء هزینه را **مصرف** می‌کنند. در ژانویه دو رویداد زیر در میدان آریا ثبت شد:',
            'Entering a budget in the ERP **creates no general ledger document**; a budget is a control figure, not a financial event. The ledger changes only when a real event happens: a **goods received note (GRN)** for ordered goods, an accepted **service entry sheet (SES)** for services, a goods issue, an invoice without a PO, or a manual journal. Those same documents automatically **consume** the budget of their cost object. In January the following two events were posted at the Arya field:',
          ),
        },
        {
          type: 'journal',
          title: t('ثبت‌هایی که ERP خودکار به مالی می‌فرستد', 'Postings the ERP sends to Finance automatically'),
          entries: [
            {
              date: t('5 ژانویه', '5 January'),
              lines: [
                { account: ac.opex, debit: 42000 },
                { account: ac.inventory, credit: 42000 },
              ],
              memo: t(
                'حواله انبار: روغن روانکاری کمپرسورها از انبار میدان به مرکز هزینه ایستگاه (نشانگر R، طبقه عملیاتی).',
                'Goods issue: compressor lube oil from the Field Warehouse to the station cost centre (flag R, Operating category).',
              ),
            },
            {
              date: t('31 ژانویه', '31 January'),
              lines: [
                { account: ac.auc, debit: 252000 },
                { account: ac.grir, credit: 252000 },
              ],
              memo: t(
                'پذیرش SES: سه روز نرخ روزانه دکل AR-07 (3 × 84,000) روی عنصر WBS حفاری (نشانگر R، طبقه توسعه).',
                'SES accepted: three rig days on AR-07 (3 × 84,000) on the drilling WBS element (flag R, Development category).',
              ),
            },
          ],
        },
        {
          type: 'table',
          caption: t('گزارش بودجه `CC-ARY-CMP` در پایان فصل 1', '`CC-ARY-CMP` budget report at the end of Q1'),
          head: [t('بودجه فصل', 'Quarter budget'), t('هزینه واقعی', 'Actual'), t('تعهدات (سفارش باز)', 'Commitments (open POs)'), t('جمع مصرف‌شده', 'Total assigned'), t('مانده در دسترس', 'Available')],
          numericCols: [0, 1, 2, 3, 4],
          rows: [[550000, 410000, 90000, 500000, 50000]],
        },
        {
          type: 'p',
          text: t(
            'بودجه را دو چیز مصرف می‌کند: هزینه واقعی (410,000) و **تعهد**، یعنی سفارش خریدی که صادر شده اما هنوز نه رسید کالا (GRN) برایش ثبت شده و نه برگه ثبت خدمات (SES) آن پذیرفته شده است (90,000). مانده در دسترس = 550,000 − 410,000 − 90,000 = 50,000. سرپرست ایستگاه اگر فقط هزینه واقعی را ببیند، فکر می‌کند 140,000 جا دارد و بیش از بودجه سفارش می‌دهد. درس‌های بعدی این دوره تعهدات و کنترل در دسترس بودن بودجه را کامل باز می‌کنند.',
            'Two things consume the budget: actual cost (410,000) and **commitments**, meaning purchase orders issued but with no goods received note (GRN) posted or service entry sheet (SES) accepted yet (90,000). Available = 550,000 − 410,000 − 90,000 = 50,000. A superintendent who looks only at actuals thinks there is 140,000 of room and over-orders. Later lessons in this course cover commitments and availability control in full.',
          ),
        },
        {
          type: 'h',
          text: t('اشتباه‌های رایج', 'Common mistakes'),
        },
        {
          type: 'list',
          items: [
            t('**بودجه را با پیش‌بینی یکی گرفتن**: بودجه هدف مصوب است؛ اگر هر ماه آن را با واقعی «به‌روز» کنید، دیگر انحرافی نمی‌بینید.', '**Treating the budget as a forecast**: the budget is the approved target; if you “update” it to actuals every month you will never see a variance.'),
            t('**احتیاط اضافه در هر ردیف**: اگر هر مسئول 10٪ اضافه بگذارد، کل بودجه بی‌دلیل بزرگ می‌شود؛ ذخیره احتیاطی را آشکار و در یک جا نگه دارید.', '**Padding every line**: if each owner adds 10%, the whole budget swells for no reason; keep contingency visible and in one place.'),
            t('**«خرج کن وگرنه از دست می‌رود»**: خرید عجولانه در ماه آخر سال برای مصرف بودجه، هم پول شرکا را هدر می‌دهد و هم در حسابرسی دیده می‌شود.', '**“Use it or lose it”**: rushed year-end buying to burn budget wastes the partners’ money and shows up in audits.'),
            t('**پخش مساوی بودجه**: هزینه فصلی (مثل سرویس سالانه) را یک‌دوازدهم پخش نکنید؛ گزارش ماهانه و درخواست وجه غلط می‌شود.', '**Spreading the budget evenly**: do not spread seasonal costs (such as annual servicing) one twelfth per month; monthly reports and cash calls will be wrong.'),
            t('**بودجه بدون شیء هزینه**: عددی که روی مرکز هزینه یا WBS ننشسته، در ERP قابل کنترل نیست و هزینه‌اش هم قابل ردیابی برای بازیافت نیست.', '**A budget with no cost object**: a figure not placed on a cost centre or WBS element cannot be controlled in the ERP, and its costs cannot be traced for recovery.'),
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
            'هر تمرین را اول خودتان حل کنید و بعد راه‌حل را باز کنید. ارقام فرضی‌اند.',
            'Try each exercise yourself before opening the solution. All figures are illustrative.',
          ),
        },
        {
          type: 'exercise',
          title: t('سرمایه‌ای، عملیاتی یا اکتشافی؟', 'CAPEX, OPEX or exploration?'),
          difficulty: 'easy',
          problem: t(
            'برای هر قلم زیر بگویید در کدام طبقه هزینه قرار می‌گیرد و در ERP روی چه نوع شیء هزینه‌ای بودجه‌ریزی می‌شود.',
            'For each item, state its cost category and the kind of ERP cost object it is budgeted on.',
          ),
          given: {
            head: [t('قلم', 'Item'), t('شرح', 'Description')],
            rows: [
              [t('الف', 'a'), t('20 روز دکل برای حفاری چاه توسعه‌ای جدید AR-11', '20 rig days to drill the new development well AR-11')],
              [t('ب', 'b'), t('ضد امولسیون برای جداکننده‌های میدان', 'Demulsifier for the field separators')],
              [t('ج', 'c'), t('بازپردازش داده‌های لرزه‌نگاری یال جنوبی', 'Reprocessing seismic data over the southern flank')],
              [t('د', 'd'), t('حقوق اپراتورهای ایستگاه تقویت فشار', 'Salaries of the compressor station operators')],
              [t('ه', 'e'), t('کولر گازی جدید برای واحد کمپرسور سوم', 'A new gas cooler for the third compressor unit')],
              [t('و', 'f'), t('تعویض دوره‌ای فیلترهای کمپرسور', 'Routine replacement of compressor filters')],
            ],
          },
          hint: t(
            'بپرسید: آیا این خرج دارایی جدیدی می‌سازد که بیش از یک سال سود می‌دهد؟ آیا برای یافتن ذخیره جدید است؟',
            'Ask: does this spending create a new asset that benefits more than one year? Is it for finding new reserves?',
          ),
          solution: [
            {
              type: 'table',
              head: [t('قلم', 'Item'), t('طبقه', 'Category'), t('شیء هزینه', 'Cost object'), t('دلیل', 'Reason')],
              rows: [
                [t('الف', 'a'), t('توسعه (سرمایه‌ای)', 'Development (CAPEX)'), t('عنصر WBS در AFE چاه AR-11', 'WBS element in the AR-11 AFE'), t('چاه توسعه‌ای دارایی چندساله است', 'A development well is a multi-year asset')],
                [t('ب', 'b'), t('عملیاتی', 'Operating'), t('`CC-ARY-PRD`', '`CC-ARY-PRD`'), t('مصرف روزانه تولید', 'Day-to-day production consumable')],
                [t('ج', 'c'), t('اکتشاف', 'Exploration'), t('WBS پروژه اکتشافی', 'Exploration project WBS'), t('برای یافتن و ارزیابی ذخیره', 'To find and evaluate reserves')],
                [t('د', 'd'), t('عملیاتی', 'Operating'), t('`CC-ARY-CMP`', '`CC-ARY-CMP`'), t('هزینه گرداندن ایستگاه', 'Cost of running the station')],
                [t('ه', 'e'), t('توسعه (سرمایه‌ای)', 'Development (CAPEX)'), t('عنصر WBS در `AFE-2025-021`', 'WBS element in `AFE-2025-021`'), t('بخشی از دارایی جدید', 'Part of a new asset')],
                [t('و', 'f'), t('عملیاتی', 'Operating'), t('دستور کار نگهداری که به `CC-ARY-CMP` تسویه می‌شود', 'Maintenance order settled to `CC-ARY-CMP`'), t('نگهداری عادی عمر دارایی را افزایش نمی‌دهد', 'Routine upkeep does not extend asset life')],
              ],
            },
          ],
          answer: t(
            'سرمایه‌ای: الف و ه (روی WBS)؛ عملیاتی: ب، د و و (روی مرکز هزینه یا دستور کار)؛ اکتشافی: ج.',
            'CAPEX: a and e (on WBS); OPEX: b, d and f (on a cost centre or order); exploration: c.',
          ),
        },
        {
          type: 'exercise',
          title: t('بودجه پایین به بالای تعمیر چاه AR-05', 'Bottom-up budget for the AR-05 workover'),
          difficulty: 'medium',
          problem: t(
            'مهندس بهره‌برداری بودجه تعمیر چاه AR-05 را از جزء به کل می‌سازد. با داده‌های زیر، بودجه پایه و بودجه کل را حساب کنید و بگویید آیا با رقم 700,000 که برای هر تعمیر چاه در WP&B آمده سازگار است. ذخیره احتیاطی را 60,000 فرض کنید.',
            'The production engineer builds the AR-05 workover budget from the detail up. Using the data below, calculate the base budget and the total budget, and say whether it fits the 700,000 per workover in the WP&B. Assume a contingency of 60,000.',
          ),
          given: {
            head: [t('ردیف', 'Line'), t('مقدار', 'Quantity'), t('نرخ', 'Rate')],
            numericCols: [1, 2],
            rows: [
              [t('دکل تعمیر چاه (روز)', 'Workover rig (days)'), 8, 45000],
              [t('خدمات لوله مغزی سیار (مقطوع)', 'Coiled tubing service (lump sum)'), 1, 140000],
              [t('اسید برای اسیدکاری (مترمکعب)', 'Acid for stimulation (cubic metres)'), 80, 1500],
              [t('نظارت (روز)', 'Supervision (days)'), 10, 2000],
            ],
          },
          hint: t('هر ردیف = مقدار × نرخ. بودجه کل = بودجه پایه + ذخیره احتیاطی.', 'Each line = quantity × rate. Total = base + contingency.'),
          solution: [
            {
              type: 'table',
              head: [t('ردیف', 'Line'), t('محاسبه', 'Calculation'), t('مبلغ', 'Amount')],
              numericCols: [2],
              rows: [
                [t('دکل تعمیر چاه', 'Workover rig'), t('8 × 45,000', '8 × 45,000'), 360000],
                [t('لوله مغزی سیار', 'Coiled tubing'), t('1 × 140,000', '1 × 140,000'), 140000],
                [t('اسید', 'Acid'), t('80 × 1,500', '80 × 1,500'), 120000],
                [t('نظارت', 'Supervision'), t('10 × 2,000', '10 × 2,000'), 20000],
                [t('**بودجه پایه**', '**Base budget**'), t('جمع چهار ردیف', 'Sum of the four lines'), 640000],
                [t('ذخیره احتیاطی', 'Contingency'), t('فرض مسئله', 'Given'), 60000],
                [t('**بودجه کل**', '**Total budget**'), t('640,000 + 60,000', '640,000 + 60,000'), 700000],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: t(
                'ذخیره احتیاطی 60,000 تقریباً 60,000 ÷ 640,000 ≈ 9.4٪ بودجه پایه است. آن را جدا نشان دهید تا شرکا ببینند چقدر از بودجه برای ریسک کنار گذاشته شده است.',
                'The 60,000 contingency is about 60,000 ÷ 640,000 ≈ 9.4% of the base. Show it separately so the partners can see how much is set aside for risk.',
              ),
            },
          ],
          answer: t(
            'بودجه پایه 640,000 و بودجه کل 700,000 است؛ دقیقاً برابر رقم هر تعمیر چاه در WP&B.',
            'Base budget 640,000 and total 700,000; exactly the per-workover figure in the WP&B.',
          ),
        },
        {
          type: 'exercise',
          title: t('رساندن درخواست‌ها به سقف', 'Bringing requests down to the ceiling'),
          difficulty: 'medium',
          problem: t(
            'سقف بالا به پایین برای واحد نگهداری و تعمیرات 3,000,000 است. درخواست‌های پایین به بالا در جدول آمده است. با قاعده رتبه‌بندی (الزامی، متعهدشده، ارزش‌آفرین، قابل تعویق) بگویید کدام ردیف‌ها و چقدر باید کم شوند.',
            'The top-down ceiling for the maintenance department is 3,000,000. The bottom-up requests are in the table. Using the ranking rule (mandatory, committed, value-adding, deferrable), decide which lines are cut and by how much.',
          ),
          given: {
            head: [t('ردیف', 'Line'), t('رتبه', 'Rank'), t('درخواست', 'Request')],
            numericCols: [2],
            rows: [
              [t('بازرسی یکپارچگی خطوط جریان و مخازن تحت فشار', 'Integrity inspection of flowlines and pressure vessels'), t('الزامی', 'Mandatory'), 900000],
              [t('قرارداد امضاشده نگهداری کمپرسورها', 'Signed compressor maintenance contract'), t('متعهدشده', 'Committed'), 1100000],
              [t('ارتقای شیرهای کمپرسور برای کاهش توقف', 'Compressor valve upgrade to reduce trips'), t('ارزش‌آفرین', 'Value-adding'), 600000],
              [t('رنگ‌آمیزی سازه‌های غیرحیاتی', 'Painting of non-critical structures'), t('قابل تعویق', 'Deferrable'), 350000],
              [t('ابزار جدید کارگاه', 'New workshop tools'), t('قابل تعویق', 'Deferrable'), 500000],
            ],
          },
          hint: t('اول اختلاف درخواست‌ها با سقف را حساب کنید؛ بعد از پایین فهرست کم کنید.', 'First find the gap between requests and the ceiling; then cut from the bottom of the list.'),
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: t('جمع درخواست‌ها', 'Total the requests'),
                  text: t('900,000 + 1,100,000 + 600,000 + 350,000 + 500,000 = 3,450,000.', '900,000 + 1,100,000 + 600,000 + 350,000 + 500,000 = 3,450,000.'),
                },
                {
                  title: t('اختلاف با سقف', 'Gap to the ceiling'),
                  text: t('3,450,000 − 3,000,000 = 450,000 باید کم شود.', '3,450,000 − 3,000,000 = 450,000 must be cut.'),
                },
                {
                  title: t('کاهش از ردیف‌های قابل تعویق', 'Cut the deferrable lines'),
                  text: t(
                    'رنگ‌آمیزی کامل به سال بعد می‌رود (350,000). مانده 450,000 − 350,000 = 100,000 از ابزار کارگاه کم می‌شود: 500,000 − 100,000 = 400,000.',
                    'Painting is deferred in full (350,000). The remaining 450,000 − 350,000 = 100,000 comes off workshop tools: 500,000 − 100,000 = 400,000.',
                  ),
                },
                {
                  title: t('ردیف‌های بالا دست‌نخورده می‌مانند', 'The top lines stay intact'),
                  text: t(
                    'بازرسی یکپارچگی، قرارداد متعهدشده و ارتقای ارزش‌آفرین تغییر نمی‌کنند. جمع نهایی: 900,000 + 1,100,000 + 600,000 + 0 + 400,000 = 3,000,000.',
                    'Integrity inspection, the committed contract and the value-adding upgrade are untouched. Final total: 900,000 + 1,100,000 + 600,000 + 0 + 400,000 = 3,000,000.',
                  ),
                },
              ],
            },
          ],
          answer: t(
            'رنگ‌آمیزی (350,000) حذف و ابزار کارگاه 100,000 کم می‌شود (به 400,000)؛ بودجه نهایی دقیقاً 3,000,000.',
            'Painting (350,000) is removed and workshop tools are cut by 100,000 (to 400,000); final budget exactly 3,000,000.',
          ),
        },
        {
          type: 'exercise',
          title: t('بودجه جاری و مانده در دسترس در ERP', 'Current budget and available amount in the ERP'),
          difficulty: 'hard',
          problem: t(
            'برای مرکز هزینه `CC-ARY-CMP` در سال 2026 این رویدادها در ERP ثبت شده است: بودجه اولیه مصوب 2,400,000؛ در تیر ماه متمم 300,000 برای تعمیر اضطراری تصویب شد؛ در مهر ماه 100,000 بودجه استفاده‌نشده برگشت داده شد. تا پایان آبان، هزینه واقعی 1,750,000 و سفارش‌های خرید باز 420,000 است. (الف) بودجه جاری، (ب) جمع مصرف‌شده، (ج) مانده در دسترس و (د) درصد مصرف را حساب کنید. (ه) کدام یک از این رویدادها سند دفتر کل ساخته‌اند؟',
            'For cost centre `CC-ARY-CMP` in 2026 the ERP shows: approved original budget 2,400,000; in July a supplement of 300,000 was approved for an emergency repair; in October 100,000 of unused budget was returned. By the end of November actual cost is 1,750,000 and open purchase orders total 420,000. Calculate (a) the current budget, (b) the total assigned, (c) the available amount and (d) the percentage used. (e) Which of these events created general ledger documents?',
          ),
          hint: t('جمع مصرف‌شده = واقعی + تعهدات. درصد مصرف را بر بودجه جاری بگیرید.', 'Total assigned = actuals + commitments. Take the percentage on the current budget.'),
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('(الف) بودجه جاری', '(a) Current budget'), text: t('2,400,000 + 300,000 − 100,000 = 2,600,000.', '2,400,000 + 300,000 − 100,000 = 2,600,000.') },
                { title: t('(ب) جمع مصرف‌شده', '(b) Total assigned'), text: t('1,750,000 + 420,000 = 2,170,000.', '1,750,000 + 420,000 = 2,170,000.') },
                { title: t('(ج) مانده در دسترس', '(c) Available'), text: t('2,600,000 − 2,170,000 = 430,000.', '2,600,000 − 2,170,000 = 430,000.') },
                { title: t('(د) درصد مصرف', '(d) Percentage used'), text: t('2,170,000 ÷ 2,600,000 ≈ 83.5٪.', '2,170,000 ÷ 2,600,000 ≈ 83.5%.') },
                {
                  title: t('(ه) سندهای دفتر کل', '(e) Ledger documents'),
                  text: t(
                    'بودجه اولیه، متمم و برگشت فقط اسناد بودجه‌اند و در دفتر کل ثبتی ندارند. سفارش‌های باز هم فقط تعهدند. فقط 1,750,000 هزینه واقعی (حواله‌های انبار، رسیدهای کالا (GRN)، برگه‌های ثبت خدمات (SES) پذیرفته‌شده و فاکتورهای بدون سفارش) سند دفتر کل ساخته است.',
                    'The original budget, supplement and return are budget documents only and post nothing to the ledger. Open POs are only commitments. Only the 1,750,000 of actual cost (goods issues, GRNs, accepted SESs and non-PO invoices) created ledger documents.',
                  ),
                },
              ],
            },
            {
              type: 'table',
              caption: t('گزارش بودجه `CC-ARY-CMP` تا پایان آبان', '`CC-ARY-CMP` budget report to end of November'),
              head: [t('بودجه جاری', 'Current budget'), t('واقعی', 'Actual'), t('تعهدات', 'Commitments'), t('جمع مصرف‌شده', 'Assigned'), t('در دسترس', 'Available')],
              numericCols: [0, 1, 2, 3, 4],
              rows: [[2600000, 1750000, 420000, 2170000, 430000]],
            },
          ],
          answer: t(
            'بودجه جاری 2,600,000؛ مصرف‌شده 2,170,000؛ در دسترس 430,000؛ حدود 83.5٪ مصرف؛ فقط هزینه‌های واقعی در دفتر کل ثبت شده‌اند.',
            'Current budget 2,600,000; assigned 2,170,000; available 430,000; about 83.5% used; only the actual costs reached the general ledger.',
          ),
        },
      ],
    },
    {
      id: 'summary',
      title: t('جمع‌بندی', 'Summary'),
      blocks: [
        {
          type: 'list',
          items: [
            t('بودجه برنامه مصوب به زبان پول است و در نفت و گاز بالادستی پایه مجوز، کنترل، درخواست وجه از شرکا و بازیافت هزینه است.', 'A budget is an approved plan in money; in upstream oil and gas it is the basis for authority, control, cash calls and cost recovery.'),
            t('WP&B برنامه کاری سال و بودجه آن است؛ بهره‌بردار تهیه می‌کند، کمیته عملیات شرکا تصویب می‌کند و اغلب دولت یا شرکت ملی نفت هم تأیید می‌کند.', 'The WP&B is the year’s work programme plus its budget; the operator prepares it, the partners’ operating committee approves it and often the government or national oil company approves it too.'),
            t('CAPEX روی WBS جمع و سرمایه‌ای می‌شود؛ OPEX روی مرکز هزینه و همان سال هزینه می‌شود؛ اکتشاف طبقه جداگانه‌ای است.', 'CAPEX collects on a WBS and is capitalised; OPEX goes to a cost centre and is expensed in the year; exploration is a separate category.'),
            t('سقف بالا به پایین و درخواست پایین به بالا در چند دور به هم می‌رسند؛ کاهش‌ها از ردیف‌های قابل تعویق شروع می‌شود.', 'The top-down ceiling and bottom-up requests meet over several rounds; cuts start with deferrable lines.'),
            t('تقویم بودجه زمان هر مرحله را تعیین می‌کند و هر ردیف یک مسئول بودجه دارد؛ واحد مالی هماهنگ‌کننده است، نه مالک.', 'The budget calendar sets the timing of each step and every line has a budget owner; finance coordinates but does not own it.'),
            t('در ERP بودجه نسخه، دوره و شیء هزینه دارد؛ ثبت بودجه سند دفتر کل نمی‌سازد، اما هزینه واقعی و تعهدات آن را مصرف می‌کنند.', 'In the ERP a budget has a version, a period and a cost object; entering it posts nothing to the ledger, but actuals and commitments consume it.'),
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            { term: t('بودجه (Budget)', 'Budget'), def: t('برنامه مصوب برای یک دوره که به زبان پول نوشته شده است.', 'An approved plan for a period, expressed in money.') },
            { term: t('برنامه کاری و بودجه سالانه (WP&B)', 'Work programme and budget (WP&B)'), def: t('سند سالانه کارهای فیزیکی میدان و بودجه آن‌ها که شرکا و اغلب دولت تصویب می‌کنند.', 'The annual document of a field’s physical work and its budget, approved by the partners and often the government.') },
            { term: t('کمیته عملیات (Operating Committee)', 'Operating committee'), def: t('نهاد تصمیم‌گیر شرکای مشارکت که طبق JOA رأی می‌دهد.', 'The joint-venture partners’ decision body, voting under the JOA.') },
            { term: t('هزینه سرمایه‌ای (CAPEX)', 'Capital expenditure (CAPEX)'), def: t('خرجی که دارایی چندساله می‌سازد یا بهبود می‌دهد و سرمایه‌ای می‌شود.', 'Spending that creates or improves a multi-year asset and is capitalised.') },
            { term: t('هزینه عملیاتی (OPEX)', 'Operating expenditure (OPEX)'), def: t('هزینه گرداندن روزانه میدان که در همان دوره به هزینه می‌رود.', 'The day-to-day cost of running the field, expensed in the period.') },
            { term: t('بالا به پایین و پایین به بالا', 'Top-down and bottom-up'), def: t('تعیین سقف کلی توسط مدیریت، در برابر ساختن بودجه از مقدار × نرخ هر فعالیت.', 'A ceiling set by management, versus building the budget from quantity × rate for each activity.') },
            { term: t('مسئول بودجه (Budget owner)', 'Budget owner'), def: t('کسی که پاسخ‌گوی یک ردیف بودجه است و هزینه‌ها و انحراف‌های آن را تأیید و توضیح می‌دهد.', 'The person accountable for a budget line, who approves its spending and explains its variances.') },
            { term: t('زمان‌بندی بودجه (Phasing)', 'Phasing'), def: t('پخش بودجه سالانه بین ماه‌ها یا فصل‌ها بر پایه زمان واقعی خرج.', 'Spreading the annual budget across months or quarters according to when the money is really spent.') },
            { term: t('نسخه بودجه', 'Budget version'), def: t('لایه‌ای از اعداد بودجه در ERP، مثل پیش‌نویس، مصوب، متمم یا پیش‌بینی.', 'A layer of budget figures in the ERP, such as draft, approved, supplement or forecast.') },
            { term: t('تعهد (Commitment)', 'Commitment'), def: t('سفارش خرید صادرشده‌ای که هنوز با رسید کالا (GRN) یا پذیرش برگه ثبت خدمات (SES) به هزینه واقعی تبدیل نشده، اما بودجه را مصرف می‌کند.', 'An issued purchase order not yet turned into actual cost by a GRN or an accepted SES, which already consumes budget.') },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: t('برنامه کاری و بودجه سالانه (WP&B) دقیقاً چیست؟', 'What exactly is the annual work programme and budget (WP&B)?'),
      options: [
        t('صورت سود و زیان پیش‌بینی‌شده شرکت برای سال آینده', 'The company’s forecast income statement for next year'),
        t('مجوز هزینه یک پروژه مشخص، مثل حفاری یک چاه', 'The spending authority for one specific project, such as drilling a well'),
        t('سند سالانه کارهای فیزیکی میدان به همراه بودجه آن‌ها که شرکا و اغلب دولت تصویب می‌کنند', 'The annual document of the field’s physical work plus its budget, approved by the partners and often the government'),
        t('گزارش هزینه‌های واقعی سال گذشته', 'The report of last year’s actual costs'),
      ],
      answer: 2,
      explain: t(
        'WP&B دو نیمه دارد: برنامه کاری (چه کارهایی) و بودجه (چقدر پول). گزینه دوم تعریف AFE است که یک کار مشخص را مجاز می‌کند؛ WP&B همه کارهای یک سال را پوشش می‌دهد.',
        'The WP&B has two halves: the work programme (what work) and the budget (how much money). The second option defines an AFE, which authorises one specific job; the WP&B covers all of a year’s work.',
      ),
    },
    {
      q: t('بودجه سالانه میدان 34,000,000 و سهم شریک الف 30٪ است. سهم شریک الف از بودجه چقدر است؟', 'The field’s annual budget is 34,000,000 and Partner A holds 30%. What is Partner A’s share of the budget?'),
      options: [t('6,800,000', '6,800,000'), t('10,200,000', '10,200,000'), t('17,000,000', '17,000,000'), t('3,400,000', '3,400,000')],
      answer: 1,
      explain: t(
        '34,000,000 × 30٪ = 10,200,000. رقم 6,800,000 سهم 20٪ شریک ب و 17,000,000 سهم 50٪ مسار پترولیوم است.',
        '34,000,000 × 30% = 10,200,000. 6,800,000 is Partner B’s 20% share and 17,000,000 is Masar Petroleum’s 50%.',
      ),
    },
    {
      q: t('کدام قلم در بودجه سرمایه‌ای (CAPEX) قرار می‌گیرد؟', 'Which item belongs in the CAPEX budget?'),
      options: [
        t('سوخت گازی کمپرسورها', 'Fuel gas for the compressors'),
        t('حقوق اپراتورهای جداکننده', 'Salaries of the separator operators'),
        t('تعویض دوره‌ای فیلترها', 'Routine filter replacement'),
        t('نصب واحد کمپرسور سوم در ایستگاه تقویت فشار', 'Installing a third compressor unit at the compressor station'),
      ],
      answer: 3,
      explain: t(
        'واحد کمپرسور جدید دارایی‌ای است که سال‌ها سود می‌دهد، پس روی WBS جمع و سرمایه‌ای می‌شود. سوخت، حقوق و تعویض فیلتر هزینه گرداندن روزانه‌اند و عملیاتی‌اند، حتی اگر مبلغشان زیاد باشد.',
        'A new compressor unit is an asset that benefits many years, so it collects on a WBS and is capitalised. Fuel, salaries and filter changes are day-to-day running costs and are OPEX, however large.',
      ),
    },
    {
      q: t('برای چاه AR-11 دکل حفاری 30 روز با نرخ روزانه 92,000 لازم است. بودجه پایین به بالای دکل چقدر است؟', 'Well AR-11 needs a drilling rig for 30 days at a day rate of 92,000. What is the bottom-up rig budget?'),
      options: [t('2,760,000', '2,760,000'), t('2,668,000', '2,668,000'), t('920,000', '920,000'), t('3,680,000', '3,680,000')],
      answer: 0,
      explain: t(
        'مقدار × نرخ = 30 × 92,000 = 2,760,000. گزینه‌های دیگر از ضرب در تعداد روز اشتباه (29 یا 10 یا 40) به دست می‌آیند.',
        'Quantity × rate = 30 × 92,000 = 2,760,000. The other options come from multiplying by the wrong number of days (29, 10 or 40).',
      ),
    },
    {
      q: t('سقف بالا به پایین 34,000,000 و جمع درخواست‌های پایین به بالا 36,500,000 است. چه مبلغی باید کاهش یابد؟', 'The top-down ceiling is 34,000,000 and bottom-up requests total 36,500,000. How much must be cut?'),
      options: [t('3,400,000', '3,400,000'), t('1,500,000', '1,500,000'), t('2,500,000', '2,500,000'), t('36,500,000', '36,500,000')],
      answer: 2,
      explain: t(
        '36,500,000 − 34,000,000 = 2,500,000. کاهش‌ها از ردیف‌های قابل تعویق شروع می‌شود، نه از هزینه‌های ایمنی و یکپارچگی.',
        '36,500,000 − 34,000,000 = 2,500,000. Cuts start with deferrable lines, not with safety and integrity spending.',
      ),
    },
    {
      q: t('مسئول بودجه مرکز هزینه `CC-ARY-CMP` (بهره‌برداری ایستگاه تقویت فشار) کیست؟', 'Who is the budget owner of cost centre `CC-ARY-CMP` (compressor station operations)?'),
      options: [
        t('مدیر مالی، چون بودجه را در ERP وارد می‌کند', 'The CFO, because finance enters the budget in the ERP'),
        t('سرپرست ایستگاه تقویت فشار', 'The compressor station superintendent'),
        t('کمیته عملیات شرکا', 'The partners’ operating committee'),
        t('مدیر تدارکات، چون سفارش‌ها را صادر می‌کند', 'The procurement manager, because procurement issues the orders'),
      ],
      answer: 1,
      explain: t(
        'مسئول بودجه کسی است که هزینه را ایجاد و تأیید می‌کند و انحراف را توضیح می‌دهد؛ برای یک مرکز هزینه عملیاتی، رئیس همان مرکز است. واحد مالی هماهنگ‌کننده و نگهبان داده‌هاست، و کمیته عملیات بودجه را تصویب می‌کند اما مالک ردیف نیست.',
        'The budget owner creates and approves the spending and explains variances; for an operating cost centre that is its head. Finance coordinates and guards the data, and the operating committee approves the budget but does not own a line.',
      ),
    },
    {
      q: t('بودجه اولیه 2,400,000، متمم 300,000 و برگشت 100,000 است. بودجه جاری چقدر است؟', 'The original budget is 2,400,000, a supplement is 300,000 and a return is 100,000. What is the current budget?'),
      options: [t('2,700,000', '2,700,000'), t('2,400,000', '2,400,000'), t('2,800,000', '2,800,000'), t('2,600,000', '2,600,000')],
      answer: 3,
      explain: t(
        'بودجه جاری = 2,400,000 + 300,000 − 100,000 = 2,600,000. گزینه 2,700,000 برگشت را فراموش کرده و 2,800,000 آن را به‌جای کم کردن اضافه کرده است.',
        'Current budget = 2,400,000 + 300,000 − 100,000 = 2,600,000. 2,700,000 forgets the return and 2,800,000 adds it instead of deducting it.',
      ),
    },
    {
      q: t('بودجه فصل 550,000، هزینه واقعی 410,000 و سفارش‌های باز 90,000 است. مانده در دسترس چقدر است؟', 'The quarter budget is 550,000, actual cost 410,000 and open POs 90,000. What is the available amount?'),
      options: [t('50,000', '50,000'), t('140,000', '140,000'), t('460,000', '460,000'), t('90,000', '90,000')],
      answer: 0,
      explain: t(
        '550,000 − 410,000 − 90,000 = 50,000. گزینه 140,000 وسوسه‌انگیز است، اما تعهدات را نادیده می‌گیرد؛ سفارش باز هم بودجه را مصرف کرده است.',
        '550,000 − 410,000 − 90,000 = 50,000. 140,000 is tempting but ignores commitments; an open PO has already consumed budget.',
      ),
    },
    {
      q: t('وقتی واحد مالی بودجه مصوب را در ERP روی مراکز هزینه ثبت می‌کند، در دفتر کل چه اتفاقی می‌افتد؟', 'When finance enters the approved budget on cost centres in the ERP, what happens in the general ledger?'),
      options: [
        t('هزینه بدهکار و بودجه بستانکار می‌شود', 'Expense is debited and a budget account is credited'),
        t('حساب‌های پرداختنی به اندازه بودجه بستانکار می‌شود', 'Accounts payable is credited by the budget amount'),
        t('هیچ سندی در دفتر کل ثبت نمی‌شود؛ بودجه فقط عدد کنترلی است', 'No ledger document is created; the budget is only a control figure'),
        t('دارایی‌های در جریان تکمیل بدهکار می‌شود', 'Assets under construction is debited'),
      ],
      answer: 2,
      explain: t(
        'بودجه رویداد مالی نیست و در دفتر کل ثبت نمی‌شود. فقط رویدادهای واقعی مثل رسید کالا (GRN)، پذیرش برگه ثبت خدمات (SES) و حواله انبار سند دفتر کل می‌سازند و هم‌زمان بودجه را مصرف می‌کنند.',
        'A budget is not a financial event and posts nothing to the ledger. Only real events such as a goods received note (GRN), an accepted service entry sheet (SES) or a goods issue create ledger documents, and they consume the budget at the same time.',
      ),
    },
    {
      q: t('چرا تأیید WP&B توسط دولت یا شرکت ملی نفت (در جایی که قرارداد لازم بداند) برای واحد مالی مهم است؟', 'Why does government or NOC approval of the WP&B (where the contract requires it) matter to finance?'),
      options: [
        t('چون بدون آن ERP بودجه را نمی‌پذیرد', 'Because the ERP will not accept the budget without it'),
        t('چون هزینه‌ای که بیرون از برنامه و بودجه مصوب انجام شود ممکن است در بازیافت هزینه پذیرفته نشود', 'Because costs incurred outside the approved programme and budget may be refused in cost recovery'),
        t('چون نرخ مالیات را تعیین می‌کند', 'Because it sets the tax rate'),
        t('چون سهم شرکا را تغییر می‌دهد', 'Because it changes the partners’ shares'),
      ],
      answer: 1,
      explain: t(
        'در بسیاری از قراردادهای نفتی، بازیافت هزینه به برنامه و بودجه مصوب گره خورده است. ERP قاعده‌ای درباره دولت ندارد، و تأیید دولت سهم شرکا یا نرخ مالیات را تغییر نمی‌دهد.',
        'Under many petroleum contracts cost recovery is tied to the approved programme and budget. The ERP has no such rule about government, and government approval does not change partner shares or tax rates.',
      ),
    },
  ],
}
