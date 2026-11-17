import type { Lesson } from '../../types'

const t = (fa: string, en: string) => ({ fa, en })
const none = t('ندارد', 'None')

/* Account titles used in the Masar Petroleum examples (codes follow the accounting course's chart of accounts). */
const ac = {
  inventory: t('1310 موجودی مواد و قطعات', '1310 Materials and spares inventory'),
  aucCasing: t('1510 دارایی‌های در جریان تکمیل (WBS `AFE-2025-014.02.03`، عنصر هزینه 6140)', '1510 Assets under construction (WBS `AFE-2025-014.02.03`, cost element 6140)'),
  aucServices: t('1510 دارایی‌های در جریان تکمیل (WBS `AFE-2025-014.02.02`، عنصر هزینه 6130)', '1510 Assets under construction (WBS `AFE-2025-014.02.02`, cost element 6130)'),
  aucCompletion: t('1510 دارایی‌های در جریان تکمیل (WBS `AFE-2025-014.03.01`، عنصر هزینه 6150)', '1510 Assets under construction (WBS `AFE-2025-014.03.01`, cost element 6150)'),
  opexPrd: t('5110 هزینه عملیات تولید (مرکز هزینه `CC-ARY-PRD`)', '5110 Production operating expense (cost centre `CC-ARY-PRD`)'),
  fines: t('5910 جرائم و خسارات (مرکز هزینه `CC-ARY-PRD`، نشانگر N)', '5910 Fines and penalties (cost centre `CC-ARY-PRD`, flag N)'),
  grir: t('2120 حساب واسط رسید کالا و فاکتور (GR/IR)', '2120 GR/IR clearing'),
  ap: t('2110 حساب‌های پرداختنی', '2110 Accounts payable'),
}

export const lesson: Lesson = {
  slug: 'cost-codes-structure',
  number: 2,
  level: 'beginner',
  minutes: 28,
  icon: 'FolderTree',
  tone: 'asset',
  title: t('ساختار کدهای هزینه', 'The Cost-Coding Structure'),
  summary: t(
    'هر ریال هزینه در یک شرکت نفت و گاز باید بگوید از کدام شرکت، برای کدام واحد، روی کدام پروژه یا چاه، از چه نوعی، قابل بازیافت یا نه، و در کدام طبقه است. در این درس کد شرکت، حساب‌های دفتر کل و عناصر هزینه، مرکز هزینه، مرکز سود، عنصر WBS، سفارش داخلی، کد فعالیت، نشانگر قابل بازیافت و طبقه هزینه را می‌شناسید، ماتریس کامل کدگذاری میدان آریا را می‌خوانید و می‌بینید قواعد اعتبارسنجی ERP چگونه کنترل بودجه، صورت‌حساب شرکا و بازیافت هزینه را درست نگه می‌دارند.',
    'Every unit of cost in an oil and gas company must say which company paid it, for which unit, on which project or well, of what type, whether it is recoverable, and in which category. This lesson covers the company code, GL accounts and cost elements, cost centres, profit centres, WBS elements, internal orders, activity codes, the recoverable flag and cost categories, walks through the complete coding matrix of the Arya field and shows how ERP validation rules keep budget control, partner billing and cost recovery right.',
  ),
  objectives: [
    t('توضیح دهید هر جزء کد هزینه به چه پرسشی پاسخ می‌دهد و زنجیره کامل کدگذاری را بنویسید', 'Explain the question each part of the cost code answers and write the full coding chain'),
    t('حساب دفتر کل را از عنصر هزینه و عنصر هزینه اولیه را از ثانویه جدا کنید', 'Tell a GL account from a cost element, and a primary cost element from a secondary one'),
    t('برای هر هزینه، شیء هزینه درست (مرکز هزینه، WBS، سفارش داخلی یا دستور کار) را انتخاب کنید', 'Choose the right cost object (cost centre, WBS, internal order or work order) for each cost'),
    t('نشانگر قابل بازیافت و طبقه هزینه (اکتشاف، توسعه، عملیاتی) را درست تعیین کنید', 'Set the recoverable flag and the cost category (exploration, development, operating) correctly'),
    t('قواعد اعتبارسنجی ERP را به کار ببرید و اثر کدگذاری غلط را بر بودجه، صورت‌حساب شرکا و بازیافت هزینه بسنجید و اصلاح کنید', 'Apply ERP validation rules, and measure and correct the effect of wrong coding on budgets, partner billing and cost recovery'),
  ],
  sections: [
    {
      id: 'why-coding',
      title: t('چرا کدگذاری هزینه؟', 'Why Cost Coding Matters'),
      blocks: [
        {
          type: 'p',
          text: t(
            'فاکتوری 240,000 از پیمانکار سیمان‌کاری به واحد حساب‌های پرداختنی مسار پترولیوم می‌رسد. برای ثبت آن، سیستم باید شش پرسش را جواب دهد: کدام شرکت بدهکار است؟ کدام واحد مسئول این خرج است؟ روی کدام پروژه یا چاه نشسته؟ چه نوع هزینه‌ای است؟ آیا از دولت قابل بازیافت است و سهم شرکا چقدر است؟ در صورت بازیافت هزینه در کدام طبقه می‌رود؟ پاسخ این شش پرسش، **کد هزینه** آن فاکتور است. اگر حتی یکی غلط باشد، گزارش بودجه، صورت‌حساب شرکا یا ادعای بازیافت هزینه غلط می‌شود.',
            'A 240,000 invoice from the cementing contractor reaches Masar Petroleum’s accounts payable. To post it, the system must answer six questions: which company owes it? Which unit is responsible for the spending? Which project or well does it sit on? What type of cost is it? Is it recoverable from the government, and what is the partners’ share? In which category does it go in the cost-recovery statement? The answers to those six questions are the invoice’s **cost code**. Get even one wrong, and the budget report, the partner bill or the cost-recovery claim is wrong.',
          ),
        },
        {
          type: 'table',
          caption: t('هر جزء کد به چه پرسشی پاسخ می‌دهد؟', 'Which question does each part of the code answer?'),
          head: [t('جزء کد', 'Code part'), t('پرسش', 'Question'), t('نمونه در مسار پترولیوم', 'Masar Petroleum example')],
          rows: [
            [t('کد شرکت', 'Company code'), t('کدام شخصیت حقوقی دفاتر را نگه می‌دارد؟', 'Which legal entity keeps the books?'), t('`MP01` مسار پترولیوم', '`MP01` Masar Petroleum')],
            [t('مرکز هزینه', 'Cost centre'), t('کدام واحد مسئول است؟', 'Which unit is responsible?'), t('`CC-ARY-PRD` تولید میدان', '`CC-ARY-PRD` field production')],
            [t('عنصر WBS یا سفارش', 'WBS element or order'), t('روی کدام پروژه، چاه یا کار موقت؟', 'On which project, well or temporary job?'), t('`AFE-2025-014.02.03` لوله جداری AR-07', '`AFE-2025-014.02.03` AR-07 casing')],
            [t('عنصر هزینه و حساب دفتر کل', 'Cost element and GL account'), t('چه نوع هزینه‌ای و کجای صورت‌های مالی؟', 'What type of cost, and where in the financial statements?'), t('6140 کالای حفاری، روی حساب 1510', '6140 Drilling materials, on account 1510')],
            [t('کد فعالیت', 'Activity code'), t('چه نوع کاری؟ (برای مقایسه بین پروژه‌ها)', 'What kind of work? (for comparison across projects)'), t('`DRL` حفاری', '`DRL` drilling')],
            [t('نشانگر قابل بازیافت', 'Recoverable flag'), t('در بازیافت هزینه ادعا می‌شود یا نه؟', 'Is it claimed in cost recovery or not?'), t('R قابل بازیافت / N غیرقابل بازیافت', 'R recoverable / N non-recoverable')],
            [t('طبقه هزینه', 'Cost category'), t('اکتشاف، توسعه یا عملیاتی؟', 'Exploration, development or operating?'), t('توسعه', 'Development')],
          ],
        },
        {
          type: 'formula',
          text: t(
            'کد کامل = کد شرکت ← مرکز هزینه ← عنصر WBS ← عنصر هزینه / حساب دفتر کل ← نشانگر R/N ← طبقه هزینه',
            'Full code = company code → cost centre → WBS element → cost element / GL account → R/N flag → cost category',
          ),
          note: t(
            'مثال: `MP01` ← `CC-ARY-DRL` ← `AFE-2025-014.02.03` ← 6140 / 1510 ← R ← توسعه. این قرارداد کدگذاری در همه دوره‌های دفتر یکسان است.',
            'Example: `MP01` → `CC-ARY-DRL` → `AFE-2025-014.02.03` → 6140 / 1510 → R → Development. This coding convention is the same in every Daftar course.',
          ),
        },
        {
          type: 'p',
          text: t(
            'کاربر همه این اجزا را دستی وارد نمی‌کند. معمولاً فقط **شیء هزینه** (مثلاً عنصر WBS) و نوع کالا یا خدمت را انتخاب می‌کند و ERP بقیه را از داده‌های پایه **استخراج** می‌کند: کد شرکت از پروژه، مرکز هزینه مسئول و مرکز سود از عنصر WBS، عنصر هزینه از گروه کالا، و نشانگر و طبقه از نوع پروژه. هر چه سهم کاربر کمتر باشد، خطا کمتر است.',
            'Users do not type all of these by hand. Usually they pick only the **cost object** (for example a WBS element) and the type of goods or service, and the ERP **derives** the rest from master data: the company code from the project, the responsible cost centre and profit centre from the WBS element, the cost element from the material group, and the flag and category from the project type. The less the user types, the fewer the errors.',
          ),
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل: کدینگ سه‌سطحی و ERP', 'In practice: three-level coding and the ERP'),
          text: t(
            'در نرم‌افزارهای حسابداری رایج در ایران، حساب‌ها سه سطح دارند: **حساب کل**، **حساب معین** و **حساب تفصیلی**؛ مراکز هزینه و پروژه‌ها معمولاً به‌صورت تفصیلی (یا «تفصیلی شناور») کنار حساب معین می‌نشینند. در ERP همین اطلاعات به جای سطح‌های تودرتوی یک حساب، در **ابعاد جداگانه** نگه داشته می‌شود: حساب دفتر کل یک بعد است، مرکز هزینه بعد دیگر و WBS بعد سوم. نتیجه این است که با چند ده حساب دفتر کل و چند صد شیء هزینه می‌توان هزاران ترکیب گزارش ساخت، بی‌آنکه کدینگ حساب‌ها منفجر شود.',
            'In accounting software common in Iran, accounts have three levels: **general**, **subsidiary** and **detail** accounts (kol, moein and tafsili); cost centres and projects usually sit as detail accounts (or “floating details”) under a subsidiary account. An ERP keeps the same information in **separate dimensions** instead of nested levels of one account: the GL account is one dimension, the cost centre another and the WBS a third. With a few dozen GL accounts and a few hundred cost objects you can then build thousands of report combinations without the chart of accounts exploding.',
          ),
        },
      ],
    },
    {
      id: 'accounts-elements',
      title: t('کد شرکت، حساب‌های دفتر کل و عناصر هزینه', 'Company Code, GL Accounts and Cost Elements'),
      blocks: [
        {
          type: 'p',
          text: t(
            '**کد شرکت (Company code)** کوچک‌ترین واحدی است که ترازنامه و صورت سود و زیان کامل و مستقل دارد؛ معمولاً همان شخصیت حقوقی ثبت‌شده. مسار پترولیوم در ERP کد `MP01` دارد. مشارکت میدان آریا یک شرکت جدا نیست: مسار پترولیوم به‌عنوان بهره‌بردار همه هزینه‌ها را در `MP01` ثبت می‌کند و با یک فیلد **مشارکت** (مثلاً `JV-ARY`) نشان می‌دهد کدام هزینه‌ها مشترک‌اند و باید بین شرکا تقسیم شوند. دفاتر انرژی البرز و نفت دنا در ERP خودشان نگه داشته می‌شود.',
            'The **company code** is the smallest unit with a complete, self-contained balance sheet and income statement; usually the registered legal entity. Masar Petroleum is `MP01` in the ERP. The Arya joint venture is not a separate company: as operator, Masar Petroleum records all costs in `MP01` and uses a **joint venture** field (for example `JV-ARY`) to show which costs are joint and must be shared among the partners. Alborz Energy’s and Dena Petroleum’s books are kept in their own systems.',
          ),
        },
        {
          type: 'p',
          text: t(
            '**حساب دفتر کل (GL account)** می‌گوید یک مبلغ در صورت‌های مالی کجا می‌نشیند. **عنصر هزینه (Cost element)** می‌گوید در حسابداری بهای تمام‌شده این مبلغ **چه نوع هزینه‌ای** است. **عنصر هزینه اولیه** هزینه‌ای است که از بیرون می‌آید (خرید، حقوق، مواد مصرفی)؛ برای هزینه‌های عملیاتی، عنصر هزینه همان حساب هزینه دفتر کل است (مثلاً 5110). مسار پترولیوم برای پروژه‌ها **عناصر هزینه پروژه** (محدوده 6100 تا 6400) دارد: روی یک WBS سرمایه‌ای، کاربر مثلاً 6120 اجاره دکل را می‌بیند و ERP حساب 1510 دارایی‌های در جریان تکمیل را خودکار انتخاب می‌کند. **عنصر هزینه ثانویه** (محدوده 9000) فقط برای جابه‌جایی داخلی هزینه است، مثل تسویه سفارش داخلی به مرکز هزینه یا تسهیم سربار، و جمع هزینه‌های شرکت را تغییر نمی‌دهد.',
            'A **GL account** says where an amount sits in the financial statements. A **cost element** says, in cost accounting, **what type of cost** the amount is. A **primary cost element** is a cost that comes from outside (purchases, salaries, consumables); for operating costs the cost element is the same as the GL expense account (for example 5110). Masar Petroleum has **project cost elements** (range 6100 to 6400) for projects: on a capital WBS the user sees, say, 6120 Drilling rig hire, and the ERP automatically picks account 1510 Assets under construction. A **secondary cost element** (9000 range) is used only for moving cost internally, such as settling an internal order to a cost centre or allocating overhead, and does not change the company’s total cost.',
          ),
        },
        {
          type: 'table',
          caption: t('بخشی از حساب‌ها و عناصر هزینه مسار پترولیوم', 'Extract of Masar Petroleum’s accounts and cost elements'),
          head: [t('کد', 'Code'), t('عنوان', 'Name'), t('نوع', 'Type'), t('شیء هزینه معمول', 'Usual cost object')],
          rows: [
            [t('1310', '1310'), t('موجودی مواد و قطعات', 'Materials and spares inventory'), t('حساب ترازنامه', 'Balance sheet account'), none],
            [t('1510', '1510'), t('دارایی‌های در جریان تکمیل', 'Assets under construction'), t('حساب ترازنامه (از WBS سرمایه‌ای)', 'Balance sheet account (from a capital WBS)'), t('عنصر WBS', 'WBS element')],
            [t('1520', '1520'), t('دارایی‌های نفت و گاز', 'Oil and gas properties'), t('حساب ترازنامه', 'Balance sheet account'), t('دارایی', 'Asset')],
            [t('2110 / 2120', '2110 / 2120'), t('حساب‌های پرداختنی / حساب واسط GR/IR', 'Accounts payable / GR/IR clearing'), t('حساب ترازنامه', 'Balance sheet account'), none],
            [t('5110', '5110'), t('هزینه عملیات تولید', 'Production operating expense'), t('عنصر هزینه اولیه = حساب هزینه', 'Primary cost element = expense account'), t('مرکز هزینه', 'Cost centre')],
            [t('5120', '5120'), t('هزینه تعمیر و نگهداری', 'Repairs and maintenance expense'), t('عنصر هزینه اولیه = حساب هزینه', 'Primary cost element = expense account'), t('دستور کار نگهداری', 'Maintenance work order')],
            [t('5130', '5130'), t('هزینه ایمنی، بهداشت، محیط زیست و آموزش', 'HSE and training expense'), t('عنصر هزینه اولیه = حساب هزینه', 'Primary cost element = expense account'), t('سفارش داخلی یا مرکز هزینه', 'Internal order or cost centre')],
            [t('5610', '5610'), t('هزینه اکتشاف (زمین‌شناسی و ژئوفیزیک)', 'Exploration expense (G&G)'), t('عنصر هزینه اولیه = حساب هزینه', 'Primary cost element = expense account'), t('WBS پروژه اکتشافی', 'Exploration project WBS')],
            [t('5910', '5910'), t('جرائم و خسارات', 'Fines and penalties'), t('عنصر هزینه اولیه؛ همیشه N', 'Primary cost element; always N'), t('مرکز هزینه', 'Cost centre')],
            [t('7110', '7110'), t('هزینه مالی (بهره وام)', 'Finance costs (loan interest)'), t('حساب هزینه؛ بیرون از حسابداری بهای تمام‌شده میدان', 'Expense account; outside field cost accounting'), t('مرکز هزینه دفتر مرکزی', 'Head-office cost centre')],
            [t('6120 / 6130 / 6140', '6120 / 6130 / 6140'), t('اجاره دکل / خدمات حفاری / کالای حفاری (OCTG)', 'Drilling rig hire / drilling services / drilling materials (OCTG)'), t('عنصر هزینه پروژه (حساب: 1510)', 'Project cost element (account: 1510)'), t('عنصر WBS', 'WBS element')],
            [t('6150 / 6160', '6150 / 6160'), t('تجهیزات تکمیل چاه / خدمات آزمایش چاه', 'Completion equipment / well-testing services'), t('عنصر هزینه پروژه (حساب: 1510)', 'Project cost element (account: 1510)'), t('عنصر WBS', 'WBS element')],
            [t('6310', '6310'), t('تجهیزات تأسیسات', 'Facilities equipment'), t('عنصر هزینه پروژه (حساب: 1510)', 'Project cost element (account: 1510)'), t('عنصر WBS', 'WBS element')],
            [t('9410', '9410'), t('تسویه سفارش‌ها', 'Order settlement'), t('عنصر هزینه ثانویه', 'Secondary cost element'), t('سفارش ← مرکز هزینه', 'Order → cost centre')],
            [t('9510', '9510'), t('تسهیم سربار', 'Overhead allocation'), t('عنصر هزینه ثانویه', 'Secondary cost element'), t('مرکز هزینه ← مرکز هزینه', 'Cost centre → cost centre')],
          ],
        },
        {
          type: 'compare',
          left: {
            title: t('حساب دفتر کل', 'GL account'),
            items: [
              t('برای صورت‌های مالی و گزارش قانونی', 'For the financial statements and statutory reporting'),
              t('تعداد کم و پایدار', 'Few and stable'),
              t('در اختیار واحد حسابداری مالی', 'Owned by financial accounting'),
              t('مثال: 1510، 5110، 2120', 'Examples: 1510, 5110, 2120'),
            ],
          },
          right: {
            title: t('عنصر هزینه', 'Cost element'),
            items: [
              t('برای حسابداری بهای تمام‌شده، بودجه و گزارش مدیریتی', 'For cost accounting, budgets and management reports'),
              t('نوع هزینه را روی شیء هزینه نشان می‌دهد', 'Shows the type of cost on a cost object'),
              t('اولیه (از بیرون) یا ثانویه (جابه‌جایی داخلی)', 'Primary (from outside) or secondary (internal flow)'),
              t('مثال: 6120، 5110، 9410', 'Examples: 6120, 5110, 9410'),
            ],
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('دو طراحی رایج برای هزینه پروژه', 'Two common designs for project costs'),
          text: t(
            'در برخی ERPها هزینه پروژه مستقیماً در حساب ترازنامه 1510 با شیء هزینه WBS ثبت می‌شود و عنصر هزینه پروژه (مثلاً 6140) فقط نوع آن را نشان می‌دهد؛ مسار پترولیوم این طراحی را دارد. در برخی دیگر هزینه ابتدا در حساب‌های هزینه‌ای پروژه (مثلاً 6140) روی WBS ثبت می‌شود و در پایان هر ماه **تسویه** آن را به 1510 منتقل می‌کند. در پایان ماه ترازنامه در هر دو طراحی یکی است؛ فقط باید بدانید سیستم شما کدام را به کار می‌برد.',
            'In some ERPs project costs post straight to the balance sheet account 1510 with the WBS as cost object, and the project cost element (for example 6140) only shows the type of cost; Masar Petroleum uses this design. In others, costs first post to project expense-type accounts (for example 6140) on the WBS, and a month-end **settlement** moves them to 1510. At month-end the balance sheet is the same under both designs; you only need to know which one your system uses.',
          ),
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('برای هر چاه حساب جدید نسازید', 'Do not open a new GL account per well'),
          text: t(
            'یک اشتباه رایج این است که برای هر چاه یا پروژه، حساب دفتر کل جدید باز شود («1510-AR07»، «1510-AR11»...). در ERP جای این اطلاعات **شیء هزینه** است، نه حساب. حساب‌های اضافی گزارش‌گیری را سخت، تعیین خودکار حساب را شکننده و بستن پروژه را دشوار می‌کنند.',
            'A common mistake is opening a new GL account for every well or project (“1510-AR07”, “1510-AR11”…). In an ERP that information belongs in the **cost object**, not the account. Extra accounts make reporting harder, automatic account determination fragile and project close-out difficult.',
          ),
        },
      ],
    },
    {
      id: 'cost-objects',
      title: t('اشیای هزینه: مرکز هزینه، مرکز سود، WBS و سفارش داخلی', 'Cost Objects: Cost Centres, Profit Centres, WBS Elements and Internal Orders'),
      blocks: [
        {
          type: 'p',
          text: t(
            '**شیء هزینه (Cost object)** چیزی است که می‌خواهیم بدانیم چقدر برایش خرج شده است. **مرکز هزینه** یک واحد مسئولیت دائمی است، مثل تولید میدان یا ایستگاه تقویت فشار؛ هزینه‌های جاری و عملیاتی روی آن می‌نشیند. **عنصر WBS** جزئی از یک پروژه موقت با آغاز و پایان است، مثل حفاری چاه AR-07؛ هزینه‌های سرمایه‌ای روی آن جمع می‌شود. **سفارش داخلی (Internal order)** یک کار موقت کوچک‌تر است، مثل یک کمپین آموزشی HSE یا یک مطالعه، که هزینه‌اش را جدا جمع می‌کنیم و در پایان به یک مرکز هزینه **تسویه** می‌کنیم. **دستور کار نگهداری** هم همین رفتار را دارد و به مرکز هزینه یا تجهیز تسویه می‌شود. **مرکز سود** واحدی است که درآمد و هزینه هر دو را دارد؛ در مسار پترولیوم کل میدان آریا مرکز سود `PC-ARYA` است.',
            'A **cost object** is anything whose cost we want to know. A **cost centre** is a permanent area of responsibility, such as field production or the compressor station; running and operating costs sit on it. A **WBS element** is part of a temporary project with a start and an end, such as drilling well AR-07; capital costs collect on it. An **internal order** is a smaller temporary job, such as an HSE training campaign or a study, whose cost we collect separately and **settle** to a cost centre at the end. A **maintenance work order** behaves the same way and settles to a cost centre or piece of equipment. A **profit centre** is a unit that has both revenue and cost; at Masar Petroleum the whole Arya field is profit centre `PC-ARYA`.',
          ),
        },
        {
          type: 'table',
          caption: t('مراکز هزینه میدان آریا و دفتر مرکزی', 'Cost centres of the Arya field and head office'),
          head: [t('کد', 'Code'), t('واحد', 'Unit'), t('مسئول', 'Owner'), t('هزینه‌های معمول', 'Typical costs')],
          rows: [
            [t('`CC-ARY-PRD`', '`CC-ARY-PRD`'), t('تولید میدان', 'Field production'), t('مدیر تولید میدان', 'Field production manager'), t('مواد شیمیایی، برق اردوگاه، اپراتورها', 'Chemicals, camp power, operators')],
            [t('`CC-ARY-CMP`', '`CC-ARY-CMP`'), t('ایستگاه تقویت فشار', 'Compressor station'), t('سرپرست ایستگاه', 'Station superintendent'), t('روغن، سوخت، اپراتورهای ایستگاه', 'Lube oil, fuel gas, station operators')],
            [t('`CC-ARY-MNT`', '`CC-ARY-MNT`'), t('نگهداری و تعمیرات میدان', 'Field maintenance'), t('مدیر نگهداری', 'Maintenance manager'), t('کارگاه، تعمیرکاران، ابزار', 'Workshop, technicians, tools')],
            [t('`CC-ARY-DRL`', '`CC-ARY-DRL`'), t('حفاری و چاه‌ها', 'Drilling and wells'), t('مدیر حفاری', 'Drilling manager'), t('تیم حفاری؛ مرکز مسئول AFEهای چاه', 'Drilling team; responsible centre for well AFEs')],
            [t('`CC-ARY-WHS`', '`CC-ARY-WHS`'), t('انبار مرکزی و انبار میدان', 'Central and Field Warehouses'), t('رئیس انبارها', 'Head of stores'), t('انبارداران، لیفتراک، اجاره محوطه', 'Storekeepers, forklifts, yard rental')],
            [t('`CC-HQ-EXP`', '`CC-HQ-EXP`'), t('اکتشاف (دفتر مرکزی)', 'Exploration (head office)'), t('مدیر اکتشاف', 'Exploration manager'), t('زمین‌شناسان؛ مرکز مسئول پروژه‌های اکتشافی', 'Geoscientists; responsible centre for exploration projects')],
            [t('`CC-HQ-FIN`', '`CC-HQ-FIN`'), t('مالی دفتر مرکزی', 'Head-office finance'), t('مدیر مالی', 'CFO'), t('حقوق کارکنان مالی، بهره وام', 'Finance staff, loan interest')],
          ],
        },
        {
          type: 'table',
          caption: t('اشیای هزینه موقت و مرکز سود', 'Temporary cost objects and the profit centre'),
          head: [t('نوع', 'Type'), t('کد', 'Code'), t('شرح', 'Description'), t('به کجا تسویه می‌شود', 'Settles to')],
          rows: [
            [t('پروژه / AFE', 'Project / AFE'), t('`AFE-2025-014`', '`AFE-2025-014`'), t('حفاری و تکمیل چاه AR-07', 'Drill and complete well AR-07'), t('1520 دارایی‌های نفت و گاز (چاه AR-07)', '1520 Oil and gas properties (well AR-07)')],
            [t('پروژه / AFE', 'Project / AFE'), t('`AFE-2025-021`', '`AFE-2025-021`'), t('ارتقای ایستگاه تقویت فشار (واحد سوم)', 'Compressor station upgrade (third unit)'), t('1520 (اجزای دارایی ایستگاه)', '1520 (station asset components)')],
            [t('پروژه اکتشافی', 'Exploration project'), t('`EXP-2026-003`', '`EXP-2026-003`'), t('بازپردازش لرزه‌نگاری یال شمالی', 'Northern flank seismic reprocessing'), t('5610 هزینه اکتشاف (طبق رویه)', '5610 Exploration expense (per policy)')],
            [t('سفارش داخلی', 'Internal order'), t('`IO-26-0012`', '`IO-26-0012`'), t('کمپین آموزش HSE سال 2026', '2026 HSE training campaign'), t('`CC-ARY-PRD`', '`CC-ARY-PRD`')],
            [t('دستور کار نگهداری', 'Maintenance work order'), t('`WO-26-0410`', '`WO-26-0410`'), t('تعمیر اساسی واحد کمپرسور 1', 'Overhaul of compressor unit 1'), t('`CC-ARY-CMP`', '`CC-ARY-CMP`')],
            [t('مرکز سود', 'Profit centre'), t('`PC-ARYA`', '`PC-ARYA`'), t('کل میدان آریا: درآمد فروش و هزینه‌ها', 'The whole Arya field: sales revenue and costs'), t('تسویه نمی‌شود؛ خودکار استخراج می‌شود', 'Not settled; derived automatically')],
          ],
        },
        {
          type: 'compare',
          left: {
            title: t('مرکز هزینه', 'Cost centre'),
            items: [
              t('دائمی؛ سال‌ها باز می‌ماند', 'Permanent; stays open for years'),
              t('بودجه سالانه (OPEX)', 'Annual budget (OPEX)'),
              t('پرسش: اداره این واحد ماهانه چقدر خرج دارد؟', 'Question: what does this unit cost to run each month?'),
              t('هزینه همان دوره به سود و زیان می‌رود', 'Cost goes to profit or loss in the period'),
            ],
          },
          right: {
            title: t('عنصر WBS', 'WBS element'),
            items: [
              t('موقت؛ با پایان پروژه بسته می‌شود', 'Temporary; closed when the project ends'),
              t('بودجه کل عمر پروژه (AFE)', 'Budget for the life of the project (AFE)'),
              t('پرسش: این پروژه تا امروز چقدر هزینه داشته؟', 'Question: what has this project cost so far?'),
              t('هزینه سرمایه‌ای می‌شود و بعد مستهلک', 'Cost is capitalised, then depreciated'),
            ],
          },
        },
        {
          type: 'p',
          text: t(
            'یک قاعده کلیدی: هر سطر هزینه فقط **یک شیء هزینه واقعی** دارد. اگر سطری روی عنصر WBS `AFE-2025-014.02.03` بنشیند، مرکز هزینه `CC-ARY-DRL` و مرکز سود `PC-ARYA` فقط از روی آن **استخراج** و برای گزارش نمایش داده می‌شوند؛ هزینه دوبار ثبت نمی‌شود. به این اشیای همراه، **شیء آماری** هم می‌گویند.',
            'A key rule: every cost line has only **one real cost object**. If a line sits on WBS element `AFE-2025-014.02.03`, cost centre `CC-ARY-DRL` and profit centre `PC-ARYA` are only **derived** from it and shown for reporting; the cost is not posted twice. These companion objects are also called **statistical** objects.',
          ),
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل: سلسله‌مراتب مراکز هزینه', 'In practice: the cost centre hierarchy'),
          text: t(
            'مراکز هزینه در یک **سلسله‌مراتب استاندارد** چیده می‌شوند: `MP01` ← میدان آریا ← تولید، ایستگاه، نگهداری، حفاری، انبارها؛ و دفتر مرکزی ← مالی، اداری. بودجه و گزارش هر سطح، جمع سطح‌های زیرین است. پیش از ساختن یک مرکز هزینه جدید بپرسید: آیا یک مسئول مشخص و بودجه سالانه جدا دارد؟ اگر نه، احتمالاً سفارش داخلی کافی است.',
            'Cost centres are arranged in a **standard hierarchy**: `MP01` → Arya field → production, compressor station, maintenance, drilling, warehouses; and head office → finance, administration. The budget and report of each level is the sum of the levels below. Before creating a new cost centre ask: does it have a named owner and its own annual budget? If not, an internal order is probably enough.',
          ),
        },
      ],
    },
    {
      id: 'codes-flags-categories',
      title: t('کد فعالیت، نشانگر قابل بازیافت و طبقه هزینه', 'Activity Codes, the Recoverable Flag and Cost Categories'),
      blocks: [
        {
          type: 'p',
          text: t(
            '**کد فعالیت (Activity code)** نوع کار را با یک فهرست استاندارد نشان می‌دهد که در همه پروژه‌ها و مراکز هزینه یکی است. WBS هر پروژه با پروژه دیگر فرق دارد، اما کد فعالیت ثابت است؛ پس با آن می‌توان پرسید «هزینه حفاری همه چاه‌های امسال چقدر بود؟» یا «هزینه هر متر حفاری AR-07 در برابر AR-11 چقدر است؟». کد فعالیت معمولاً از عنصر WBS یا مرکز هزینه استخراج می‌شود.',
            'An **activity code** shows the kind of work from a standard list that is the same across every project and cost centre. Each project’s WBS differs, but the activity code is fixed; so it lets you ask “what did drilling cost across all wells this year?” or “what is the cost per metre drilled on AR-07 versus AR-11?”. The activity code is usually derived from the WBS element or cost centre.',
          ),
        },
        {
          type: 'table',
          caption: t('کدهای فعالیت مسار پترولیوم', 'Masar Petroleum activity codes'),
          head: [t('کد', 'Code'), t('فعالیت', 'Activity'), t('معمولاً روی', 'Usually on')],
          rows: [
            [t('`SIT`', '`SIT`'), t('آماده‌سازی محل و جاده', 'Site and road preparation'), t('WBS چاه', 'Well WBS')],
            [t('`DRL`', '`DRL`'), t('حفاری', 'Drilling'), t('WBS چاه', 'Well WBS')],
            [t('`CMP`', '`CMP`'), t('تکمیل و آزمایش چاه', 'Completion and testing'), t('WBS چاه', 'Well WBS')],
            [t('`FAC`', '`FAC`'), t('ساخت و نصب تأسیسات', 'Facilities construction'), t('WBS تأسیسات', 'Facilities WBS')],
            [t('`PMT`', '`PMT`'), t('مدیریت و نظارت پروژه', 'Project management and supervision'), t('WBS هر پروژه', 'Any project WBS')],
            [t('`GGS`', '`GGS`'), t('زمین‌شناسی و ژئوفیزیک', 'Geology and geophysics'), t('WBS اکتشافی', 'Exploration WBS')],
            [t('`OPS`', '`OPS`'), t('عملیات تولید', 'Production operations'), t('مرکز هزینه', 'Cost centre')],
            [t('`MNT`', '`MNT`'), t('نگهداری و تعمیرات', 'Maintenance'), t('دستور کار نگهداری', 'Maintenance work order')],
            [t('`HSE`', '`HSE`'), t('ایمنی، بهداشت و محیط زیست', 'Health, safety and environment'), t('سفارش داخلی یا مرکز هزینه', 'Internal order or cost centre')],
            [t('`GNA`', '`GNA`'), t('عمومی و اداری', 'General and administrative'), t('مرکز هزینه دفتر مرکزی', 'Head-office cost centre')],
          ],
        },
        {
          type: 'p',
          text: t(
            '**نشانگر قابل بازیافت** دو مقدار دارد: **R** یعنی هزینه طبق قرارداد نفتی قابل بازیافت است و در صورت بازیافت هزینه ادعا می‌شود؛ **N** یعنی نیست. فهرست دقیق را **خود قرارداد** و آیین‌نامه حسابداری پیوست آن تعیین می‌کند. اقلامی که معمولاً غیرقابل بازیافت‌اند: جرائم و خسارات، هزینه ناشی از قصور شدید یا تخلف عمدی، هزینه‌ای که بدون تأیید لازم یا بیرون از بودجه مصوب انجام شده، هزینه تأمین مالی مگر قرارداد صریحاً اجازه دهد، و هزینه‌های شرکتی بیش از سقف مجاز. همیشه قرارداد خودتان را بررسی کنید.',
            'The **recoverable flag** has two values: **R** means the cost is recoverable under the petroleum contract and is claimed in the cost-recovery statement; **N** means it is not. The exact list comes from **the contract itself** and its accounting procedure. Items commonly treated as non-recoverable: fines and penalties, costs caused by gross negligence or wilful misconduct, costs incurred without the required approval or outside the approved budget, financing costs unless the contract expressly allows them, and corporate costs above the permitted cap. Always check your own contract.',
          ),
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('قابل بازیافت از دولت با قابل تقسیم بین شرکا یکی نیست', 'Recoverable from the government is not the same as chargeable to partners'),
          text: t(
            'نشانگر R/N به **قرارداد نفتی با دولت** مربوط است. اینکه هزینه‌ای بین شرکا تقسیم شود یا نه را **موافقت‌نامه عملیات مشترک (JOA)** و آیین‌نامه حسابداری آن تعیین می‌کند. مثلاً جریمه زیست‌محیطی یک نشت معمولی در عملیات عادی ممکن است طبق JOA هزینه مشترک باشد و شرکا سهمشان را بپردازند، اما طبق قرارداد نفتی غیرقابل بازیافت (N) باشد. بهره وام شرکتی مسار پترولیوم نه هزینه مشترک است و نه قابل بازیافت.',
            'The R/N flag concerns the **petroleum contract with the government**. Whether a cost is shared among the partners is decided by the **joint operating agreement (JOA)** and its accounting procedure. For example, an environmental fine for an ordinary spill during normal operations may be a joint cost under the JOA, with each partner paying its share, yet be non-recoverable (N) under the petroleum contract. Masar Petroleum’s corporate loan interest is neither a joint cost nor recoverable.',
          ),
        },
        {
          type: 'p',
          text: t(
            '**طبقه هزینه** هر هزینه را در یکی از سه گروه می‌گذارد: **اکتشاف** (یافتن و ارزیابی ذخیره: لرزه‌نگاری، مطالعات، چاه اکتشافی)، **توسعه** (آماده کردن میدان برای تولید: چاه توسعه‌ای، تأسیسات، خطوط لوله) و **عملیاتی** (گرداندن روزانه تولید). صورت بازیافت هزینه معمولاً هزینه‌ها را به همین گروه‌ها جدا می‌کند و بسیاری از قراردادها برای هر گروه قاعده جدا دارند؛ مثلاً هزینه‌های سرمایه‌ای در چند سال و هزینه‌های عملیاتی در همان سال بازیافت می‌شوند (قاعده دقیق را قرارداد تعیین می‌کند).',
            'The **cost category** puts each cost in one of three groups: **exploration** (finding and evaluating reserves: seismic, studies, exploration wells), **development** (making the field ready to produce: development wells, facilities, pipelines) and **operating** (running production day to day). The cost-recovery statement usually splits costs into these groups, and many contracts have separate rules for each; for example capital costs recovered over several years and operating costs in the year incurred (the contract sets the exact rule).',
          ),
        },
        {
          type: 'table',
          caption: t('سه طبقه هزینه در مسار پترولیوم', 'The three cost categories at Masar Petroleum'),
          head: [t('طبقه', 'Category'), t('نمونه', 'Examples'), t('شیء هزینه', 'Cost object'), t('حساب معمول', 'Usual account')],
          rows: [
            [t('اکتشاف', 'Exploration'), t('بازپردازش لرزه‌نگاری، مطالعات G&G، چاه اکتشافی', 'Seismic reprocessing, G&G studies, exploration wells'), t('WBS پروژه `EXP-*`', '`EXP-*` project WBS'), t('5610 یا دارایی اکتشاف و ارزیابی، طبق رویه', '5610 or E&E asset, per policy')],
            [t('توسعه', 'Development'), t('چاه AR-07، واحد کمپرسور سوم، خط جریان', 'Well AR-07, third compressor unit, flowline'), t('WBS پروژه `AFE-*`', '`AFE-*` project WBS'), t('1510 و سپس 1520', '1510, then 1520')],
            [t('عملیاتی', 'Operating'), t('مواد شیمیایی، روغن، نگهداری، اپراتورها', 'Chemicals, lube oil, maintenance, operators'), t('مرکز هزینه، سفارش داخلی، دستور کار', 'Cost centre, internal order, work order'), t('5110، 5120، 5130', '5110, 5120, 5130')],
          ],
        },
        {
          type: 'diagram',
          id: 'cost-recovery',
          caption: t(
            'فقط هزینه‌هایی که نشانگر R و طبقه درست دارند وارد «هزینه‌های قابل بازیافت» می‌شوند و از محل نفت هزینه برمی‌گردند؛ هزینه N هرگز وارد این جریان نمی‌شود.',
            'Only costs flagged R with the right category enter “recoverable costs” and come back through cost oil; an N cost never enters this flow.',
          ),
        },
      ],
    },
    {
      id: 'coding-matrix',
      title: t('ماتریس کامل کدگذاری میدان آریا', 'The Complete Coding Matrix for the Arya Field'),
      blocks: [
        {
          type: 'p',
          text: t(
            'جدول زیر **ماتریس کدگذاری** مسار پترولیوم است: برای هر نوع هزینه رایج، همه اجزای کد را کنار هم نشان می‌دهد. واحد کنترل مالی آن را نگه می‌دارد و در «راهنمای کدگذاری» شرکت منتشر می‌کند تا کارشناس خرید، انباردار، مسئول قرارداد و حسابدار همه یک زبان داشته باشند. در ستون مرکز هزینه، عددی که داخل پرانتز است مرکز هزینه مسئولی است که فقط از WBS استخراج می‌شود.',
            'The table below is Masar Petroleum’s **coding matrix**: for each common type of cost it shows every part of the code side by side. Finance controlling maintains it and publishes it in the company “coding manual”, so that buyers, storekeepers, contract holders and accountants all speak the same language. In the cost centre column, a code in parentheses is the responsible cost centre that is only derived from the WBS.',
          ),
        },
        {
          type: 'table',
          caption: t('ماتریس کدگذاری میدان آریا (کد شرکت همه سطرها `MP01`)', 'Arya field coding matrix (company code `MP01` on every row)'),
          head: [
            t('هزینه', 'Cost'),
            t('مرکز هزینه', 'Cost centre'),
            t('WBS یا سفارش', 'WBS or order'),
            t('عنصر هزینه ← حساب', 'Cost element → account'),
            t('فعالیت', 'Activity'),
            t('R/N', 'R/N'),
            t('طبقه', 'Category'),
          ],
          rows: [
            [t('نرخ روزانه دکل AR-07 (SES)', 'AR-07 rig day rate (SES)'), t('(`CC-ARY-DRL`)', '(`CC-ARY-DRL`)'), t('`AFE-2025-014.02.01`', '`AFE-2025-014.02.01`'), t('6120 ← 1510', '6120 → 1510'), t('`DRL`', '`DRL`'), t('R', 'R'), t('توسعه', 'Development')],
            [t('سیمان‌کاری و گل حفاری AR-07 (SES)', 'AR-07 cementing and mud (SES)'), t('(`CC-ARY-DRL`)', '(`CC-ARY-DRL`)'), t('`AFE-2025-014.02.02`', '`AFE-2025-014.02.02`'), t('6130 ← 1510', '6130 → 1510'), t('`DRL`', '`DRL`'), t('R', 'R'), t('توسعه', 'Development')],
            [t('لوله جداری AR-07 (GRN)', 'AR-07 casing (GRN)'), t('(`CC-ARY-DRL`)', '(`CC-ARY-DRL`)'), t('`AFE-2025-014.02.03`', '`AFE-2025-014.02.03`'), t('6140 ← 1510', '6140 → 1510'), t('`DRL`', '`DRL`'), t('R', 'R'), t('توسعه', 'Development')],
            [t('تجهیزات تکمیل AR-07 (حواله انبار)', 'AR-07 completion equipment (goods issue)'), t('(`CC-ARY-DRL`)', '(`CC-ARY-DRL`)'), t('`AFE-2025-014.03.01`', '`AFE-2025-014.03.01`'), t('6150 ← 1510', '6150 → 1510'), t('`CMP`', '`CMP`'), t('R', 'R'), t('توسعه', 'Development')],
            [t('بسته کمپرسور واحد 3 (GRN)', 'Compressor unit 3 package (GRN)'), t('(`CC-ARY-CMP`)', '(`CC-ARY-CMP`)'), t('`AFE-2025-021.01.02`', '`AFE-2025-021.01.02`'), t('6310 ← 1510', '6310 → 1510'), t('`FAC`', '`FAC`'), t('R', 'R'), t('توسعه', 'Development')],
            [t('بازپردازش لرزه‌نگاری (SES)', 'Seismic reprocessing (SES)'), t('(`CC-HQ-EXP`)', '(`CC-HQ-EXP`)'), t('`EXP-2026-003.01`', '`EXP-2026-003.01`'), t('5610 ← 5610', '5610 → 5610'), t('`GGS`', '`GGS`'), t('R', 'R'), t('اکتشاف', 'Exploration')],
            [t('ضد امولسیون جداکننده‌ها (حواله انبار)', 'Separator demulsifier (goods issue)'), t('`CC-ARY-PRD`', '`CC-ARY-PRD`'), none, t('5110 ← 5110', '5110 → 5110'), t('`OPS`', '`OPS`'), t('R', 'R'), t('عملیاتی', 'Operating')],
            [t('روغن روانکاری کمپرسورها', 'Compressor lube oil'), t('`CC-ARY-CMP`', '`CC-ARY-CMP`'), none, t('5110 ← 5110', '5110 → 5110'), t('`OPS`', '`OPS`'), t('R', 'R'), t('عملیاتی', 'Operating')],
            [t('تعمیر اساسی واحد کمپرسور 1', 'Overhaul of compressor unit 1'), t('`CC-ARY-CMP` (گیرنده تسویه)', '`CC-ARY-CMP` (settlement receiver)'), t('`WO-26-0410`', '`WO-26-0410`'), t('5120 ← 5120', '5120 → 5120'), t('`MNT`', '`MNT`'), t('R', 'R'), t('عملیاتی', 'Operating')],
            [t('کمپین آموزش HSE', 'HSE training campaign'), t('`CC-ARY-PRD` (گیرنده تسویه)', '`CC-ARY-PRD` (settlement receiver)'), t('`IO-26-0012`', '`IO-26-0012`'), t('5130 ← 5130', '5130 → 5130'), t('`HSE`', '`HSE`'), t('R', 'R'), t('عملیاتی', 'Operating')],
            [t('جریمه زیست‌محیطی نشت', 'Environmental fine for a spill'), t('`CC-ARY-PRD`', '`CC-ARY-PRD`'), none, t('5910 ← 5910', '5910 → 5910'), t('`OPS`', '`OPS`'), t('N', 'N'), t('عملیاتی', 'Operating')],
            [t('بهره وام شرکتی', 'Corporate loan interest'), t('`CC-HQ-FIN`', '`CC-HQ-FIN`'), none, t('7110 ← 7110', '7110 → 7110'), t('`GNA`', '`GNA`'), t('N', 'N'), t('ندارد (هزینه مشترک نیست)', 'None (not a joint cost)')],
          ],
        },
        {
          type: 'list',
          items: [
            t('**سطرهای WBS**: هزینه روی عنصر WBS می‌نشیند و حساب 1510 خودکار انتخاب می‌شود؛ مرکز هزینه داخل پرانتز فقط برای گزارش مسئولیت است.', '**WBS rows**: the cost sits on the WBS element and account 1510 is picked automatically; the cost centre in parentheses is for responsibility reporting only.'),
            t('**دستور کار و سفارش داخلی**: هزینه اول روی سفارش جمع می‌شود و در پایان ماه با عنصر هزینه ثانویه 9410 به مرکز هزینه گیرنده تسویه می‌شود.', '**Work orders and internal orders**: cost first collects on the order and is settled at month-end to the receiving cost centre with secondary cost element 9410.'),
            t('**پروژه اکتشافی**: در این مثال رویه مسار پترولیوم هزینه G&G را مستقیم به هزینه (5610) می‌برد؛ با رویه دیگر ممکن است دارایی اکتشاف و ارزیابی شود.', '**Exploration project**: in this example Masar Petroleum’s policy expenses G&G directly (5610); under another policy it could be an exploration and evaluation asset.'),
            t('**N همیشه با دلیل**: جریمه و بهره به‌خاطر حساب‌شان N می‌گیرند، نه به تشخیص کاربر.', '**N always has a reason**: the fine and interest are N because of their accounts, not the user’s judgement.'),
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل: ماتریس داده پایه است', 'In practice: the matrix is master data'),
          text: t(
            'ماتریس کدگذاری یک فایل اکسل کنار میز حسابدار نیست؛ در ERP به شکل داده‌های پایه و قواعد استخراج پیاده می‌شود. هر تغییر در آن (مثلاً عنصر هزینه جدید یا تغییر طبقه یک پروژه) با درخواست مکتوب، تأیید مدیر کنترل مالی و تاریخ اجرا انجام می‌شود، چون روی گزارش‌های شرکا و صورت بازیافت هزینه اثر دارد.',
            'The coding matrix is not a spreadsheet next to an accountant’s desk; in the ERP it is implemented as master data and derivation rules. Every change to it (for example a new cost element or a change to a project’s category) goes through a written request, approval by the head of finance controlling and an effective date, because it affects partner reports and the cost-recovery statement.',
          ),
        },
      ],
    },
    {
      id: 'validation-erp',
      title: t('قواعد اعتبارسنجی و کدگذاری در ERP', 'Validation Rules and Coding in the ERP'),
      blocks: [
        {
          type: 'p',
          text: t(
            'ERP با دو ابزار کدگذاری را درست نگه می‌دارد. **قاعده استخراج (Derivation)** اجزای وابسته را از روی اجزای انتخاب‌شده پر می‌کند. **قاعده اعتبارسنجی (Validation)** ترکیب‌های غلط را هنگام ثبت رد می‌کند یا هشدار می‌دهد. نقش‌ها هم روشن است: کنترل مالی مراکز هزینه، عناصر هزینه و قواعد را می‌سازد؛ کنترل پروژه پروژه‌ها و عناصر WBS را؛ و کاربران عملیاتی فقط از این داده‌ها استفاده می‌کنند.',
            'The ERP keeps coding right with two tools. A **derivation rule** fills in dependent parts from the parts the user chose. A **validation rule** rejects or warns about wrong combinations at posting time. Roles are clear too: finance controlling creates cost centres, cost elements and rules; project controls creates projects and WBS elements; and operational users only use this data.',
          ),
        },
        {
          type: 'table',
          caption: t('قواعد اعتبارسنجی مسار پترولیوم', 'Masar Petroleum validation rules'),
          head: [t('قاعده', 'Rule'), t('نمونه‌ای که رد می‌شود', 'Example that fails'), t('پاسخ سیستم', 'System response')],
          rows: [
            [t('عناصر هزینه پروژه (6100 تا 6400) فقط با عنصر WBS', 'Project cost elements (6100 to 6400) only with a WBS element'), t('اجاره دکل با مرکز هزینه `CC-ARY-DRL` و بدون WBS', 'Rig hire on cost centre `CC-ARY-DRL` with no WBS'), t('خطا؛ ثبت انجام نمی‌شود', 'Error; posting blocked')],
            [t('حساب‌های 5110 تا 5130 روی WBS سرمایه‌ای مجاز نیست', 'Accounts 5110 to 5130 not allowed on a capital WBS'), t('روغن کمپرسور روی `AFE-2025-021.01.03`', 'Compressor lube oil on `AFE-2025-021.01.03`'), t('خطا؛ مرکز هزینه یا دستور کار بخواهید', 'Error; ask for a cost centre or work order')],
            [t('عنصر WBS باید در وضعیت «آزادشده» باشد', 'The WBS element must be in “released” status'), t('فاکتور روی WBS در وضعیت «بسته»', 'Invoice on a WBS in “closed” status'), t('خطا؛ فقط با بازگشایی مصوب', 'Error; only after an approved reopening')],
            [t('طبقه هزینه از نوع پروژه استخراج می‌شود', 'The cost category is derived from the project type'), t('کاربر برای `EXP-2026-003` طبقه «توسعه» وارد می‌کند', 'User enters “Development” for `EXP-2026-003`'), t('فیلد قفل؛ «اکتشاف» نوشته می‌شود', 'Field locked; “Exploration” is written')],
            [t('حساب‌های 5910 و 7110 همیشه N', 'Accounts 5910 and 7110 are always N'), t('جریمه با نشانگر R', 'A fine flagged R'), t('نشانگر خودکار N می‌شود', 'Flag forced to N')],
            [t('مرکز هزینه باید متعلق به `MP01` و در تاریخ ثبت معتبر باشد', 'The cost centre must belong to `MP01` and be valid on the posting date'), t('ثبت روی مرکز هزینه منقضی‌شده', 'Posting to an expired cost centre'), t('خطا', 'Error')],
            [t('هزینه بالای 50,000 روی مرکز هزینه نیاز به شرح کامل دارد', 'Costs over 50,000 on a cost centre need full text'), t('سند دستی بدون شرح', 'Manual journal with no text'), t('هشدار؛ تأییدکننده باید بررسی کند', 'Warning; the approver must review')],
          ],
        },
        {
          type: 'steps',
          items: [
            { title: t('انتخاب نوع تخصیص', 'Choose the account assignment'), text: t('کارشناس خرید در ردیف سفارش «پروژه» را انتخاب می‌کند و `AFE-2025-014.02.03` را می‌نویسد.', 'The buyer selects “project” on the PO line and enters `AFE-2025-014.02.03`.') },
            { title: t('استخراج خودکار', 'Automatic derivation'), text: t('ERP از گروه کالا عنصر هزینه 6140 و حساب 1510، از WBS مرکز هزینه `CC-ARY-DRL` و مرکز سود `PC-ARYA`، و از نوع پروژه نشانگر R و طبقه توسعه را پر می‌کند.', 'From the material group the ERP fills cost element 6140 and account 1510; from the WBS, cost centre `CC-ARY-DRL` and profit centre `PC-ARYA`; from the project type, flag R and category Development.') },
            { title: t('اعتبارسنجی', 'Validation'), text: t('سیستم وضعیت WBS («آزادشده») و ترکیب عنصر هزینه و شیء هزینه را بررسی می‌کند.', 'The system checks the WBS status (“released”) and the cost element and cost object combination.') },
            { title: t('کنترل بودجه', 'Budget check'), text: t('مبلغ سفارش با بودجه در دسترس عنصر WBS مقایسه و به‌عنوان تعهد ثبت می‌شود.', 'The PO value is checked against the WBS element’s available budget and recorded as a commitment.') },
            { title: t('همراهی کد تا آخر', 'The code travels to the end'), text: t('رسید کالا (GRN)، فاکتور و پرداخت همان کد را از سفارش به ارث می‌برند؛ کسی دوباره کد وارد نمی‌کند.', 'The goods received note (GRN), invoice and payment inherit the same code from the PO; nobody keys it again.') },
          ],
        },
        {
          type: 'h',
          text: t('مالی چه می‌بیند؟', 'What does Finance see?'),
        },
        {
          type: 'journal',
          title: t('ثبت‌های ERP با کد کامل (یک ماه در میدان آریا)', 'ERP postings with the full code (one month at the Arya field)'),
          entries: [
            {
              date: t('روز 4', 'Day 4'),
              lines: [
                { account: ac.aucCasing, debit: 410000 },
                { account: ac.grir, credit: 410000 },
              ],
              memo: t('رسید کالا (GRN): لوله جداری با تخصیص مستقیم به WBS؛ `DRL`، R، توسعه.', 'Goods received note (GRN): casing charged directly to the WBS; `DRL`, R, Development.'),
            },
            {
              date: t('روز 11', 'Day 11'),
              lines: [
                { account: ac.aucServices, debit: 240000 },
                { account: ac.grir, credit: 240000 },
              ],
              memo: t('پذیرش برگه ثبت خدمات (SES): سیمان‌کاری رشته جداری؛ `DRL`، R، توسعه.', 'Service entry sheet (SES) accepted: cementing of the casing string; `DRL`, R, Development.'),
            },
            {
              date: t('روز 15', 'Day 15'),
              lines: [
                { account: ac.opexPrd, debit: 36000 },
                { account: ac.inventory, credit: 36000 },
              ],
              memo: t('حواله انبار: ضد امولسیون از انبار میدان؛ `OPS`، R، عملیاتی.', 'Goods issue: demulsifier from the Field Warehouse; `OPS`, R, Operating.'),
            },
            {
              date: t('روز 22', 'Day 22'),
              lines: [
                { account: ac.fines, debit: 50000 },
                { account: ac.ap, credit: 50000 },
              ],
              memo: t('فاکتور بدون سفارش: جریمه زیست‌محیطی یک نشت؛ `OPS`، N، عملیاتی.', 'Non-PO invoice: environmental fine for a spill; `OPS`, N, Operating.'),
            },
          ],
        },
        {
          type: 'p',
          text: t(
            'هر کد در چند گزارش هم‌زمان اثر می‌گذارد و به همین دلیل یکنواختی کدگذاری مهم است. جدول زیر همان چهار سند را در چهار گزارش نشان می‌دهد. فرض کنید جریمه در عملیات عادی رخ داده و طبق JOA هزینه مشترک است.',
            'Each code feeds several reports at once, which is why consistent coding matters. The table below follows the same four documents into four reports. Assume the fine arose in normal operations and is a joint cost under the JOA.',
          ),
        },
        {
          type: 'table',
          caption: t('یک کد، چهار گزارش', 'One code, four reports'),
          head: [t('سند', 'Document'), t('مبلغ', 'Amount'), t('گزارش بودجه', 'Budget report'), t('سهم انرژی البرز (30٪)', 'Alborz Energy share (30%)'), t('سهم نفت دنا (20٪)', 'Dena Petroleum share (20%)'), t('صورت بازیافت هزینه', 'Cost-recovery statement')],
          numericCols: [1, 3, 4],
          rows: [
            [t('GRN لوله جداری', 'Casing GRN'), 410000, t('AFE ردیف .02.03', 'AFE line .02.03'), 123000, 82000, t('توسعه', 'Development')],
            [t('SES سیمان‌کاری', 'Cementing SES'), 240000, t('AFE ردیف .02.02', 'AFE line .02.02'), 72000, 48000, t('توسعه', 'Development')],
            [t('حواله ضد امولسیون', 'Demulsifier issue'), 36000, t('`CC-ARY-PRD`', '`CC-ARY-PRD`'), 10800, 7200, t('عملیاتی', 'Operating')],
            [t('جریمه', 'Fine'), 50000, t('`CC-ARY-PRD`', '`CC-ARY-PRD`'), 15000, 10000, t('وارد نمی‌شود (N)', 'Excluded (N)')],
            [t('**جمع**', '**Total**'), 736000, t('', ''), 220800, 147200, t('686,000 قابل بازیافت', '686,000 recoverable')],
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: t('هزینه یک کد غلط', 'The cost of one wrong code'),
          text: t(
            'اگر GRN لوله جداری (410,000) به‌جای WBS روی `CC-ARY-PRD` با حساب 5110 می‌نشست: گزارش AFE چاه AR-07، 410,000 کمتر از واقع نشان می‌داد و مدیر حفاری فکر می‌کرد جا دارد؛ بودجه عملیاتی تولید 410,000 بیش از حد نشان می‌داد؛ سود سال 410,000 کمتر و دارایی 410,000 کمتر می‌شد؛ و در صورت بازیافت هزینه، مبلغ در طبقه عملیاتی به‌جای توسعه ادعا می‌شد که ممکن است در حسابرسی دولت رد شود. سهم شرکا در جمع تغییر نمی‌کرد، اما گزارش AFE آن‌ها غلط بود.',
            'If the casing GRN (410,000) had landed on `CC-ARY-PRD` with account 5110 instead of the WBS: the AR-07 AFE report would show 410,000 too little and the drilling manager would think there was room; the production OPEX budget would look 410,000 overspent; the year’s profit and assets would both be 410,000 lower; and the cost-recovery statement would claim it under operating instead of development, which a government audit may reject. The partners’ total share would not change, but their AFE report would be wrong.',
          ),
        },
        {
          type: 'h',
          text: t('اشتباه‌های رایج', 'Common mistakes'),
        },
        {
          type: 'list',
          items: [
            t('**«یک کد عمومی برای همه»**: ثبت همه چیز روی یک مرکز هزینه کلی مثل «متفرقه میدان» تا کار سریع‌تر شود؛ نتیجه، گزارشی است که هیچ تصمیمی با آن گرفته نمی‌شود.', '**“One general code for everything”**: posting everything to a catch-all cost centre such as “field miscellaneous” to save time; the result is a report no decision can be made from.'),
            t('**کدگذاری در فاکتور به‌جای سفارش**: اگر کد در سفارش خرید درست نباشد، تعهد روی بودجه غلط نشسته و GRN و SES هم همان کد غلط را می‌گیرند.', '**Coding at the invoice instead of the PO**: if the PO code is wrong, the commitment sits on the wrong budget and the GRN and SES inherit the same wrong code.'),
            t('**تغییر دستی نشانگر R/N یا طبقه**: این‌ها باید از قاعده بیایند، نه از سلیقه کاربر.', '**Changing the R/N flag or category by hand**: these must come from rules, not user preference.'),
            t('**بستن دیرهنگام یا زودهنگام WBS**: WBS باز مانده هزینه‌های بی‌ربط جذب می‌کند؛ WBS زود بسته‌شده فاکتورهای واقعی را رد می‌کند.', '**Closing a WBS too late or too early**: a WBS left open attracts unrelated costs; one closed too early rejects genuine invoices.'),
            t('**اصلاح با سند دستی بدون پیوند**: برای جابه‌جایی هزینه، سند اصلی را برگردانید یا سند جابه‌جایی با ارجاع بزنید تا رد سند برای حسابرس شرکا روشن بماند.', '**Correcting with an unlinked manual journal**: to move a cost, reverse the original document or post a reclassification with a reference, so the audit trail stays clear for the partners’ auditors.'),
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
          text: t('برای هر تمرین از ماتریس کدگذاری و قواعد اعتبارسنجی همین درس استفاده کنید. ارقام فرضی‌اند.', 'Use this lesson’s coding matrix and validation rules for each exercise. All figures are illustrative.'),
        },
        {
          type: 'exercise',
          title: t('کدام شیء هزینه؟', 'Which cost object?'),
          difficulty: 'easy',
          problem: t('برای هر هزینه، نوع شیء هزینه، کد مناسب و طبقه هزینه را تعیین کنید.', 'For each cost, give the type of cost object, a suitable code and the cost category.'),
          given: {
            head: [t('قلم', 'Item'), t('هزینه', 'Cost')],
            rows: [
              [t('الف', 'a'), t('40 شاخه لوله مغزی برای تکمیل چاه AR-07', '40 joints of tubing for the AR-07 completion')],
              [t('ب', 'b'), t('برق ماهانه اردوگاه میدان', 'Monthly power for the field camp')],
              [t('ج', 'c'), t('کمپین سه‌ماهه آموزش ایمنی کار در ارتفاع', 'A three-month working-at-height safety campaign')],
              [t('د', 'd'), t('تعویض یاتاقان‌های واحد کمپرسور 2 پس از هشدار لرزش', 'Replacing compressor unit 2 bearings after a vibration alarm')],
              [t('ه', 'e'), t('بازپردازش لرزه‌نگاری یال شمالی', 'Northern flank seismic reprocessing')],
              [t('و', 'f'), t('جوشکاری اتصالات لوله واحد کمپرسور سوم', 'Welding the piping tie-ins of the third compressor unit')],
            ],
          },
          hint: t('بپرسید: کار دائمی است یا موقت؟ سرمایه‌ای است یا عملیاتی؟ برای یافتن ذخیره است؟', 'Ask: is the work permanent or temporary? Capital or operating? Is it for finding reserves?'),
          solution: [
            {
              type: 'table',
              head: [t('قلم', 'Item'), t('شیء هزینه', 'Cost object'), t('کد', 'Code'), t('طبقه', 'Category')],
              rows: [
                [t('الف', 'a'), t('عنصر WBS', 'WBS element'), t('`AFE-2025-014.03.01` (6150)', '`AFE-2025-014.03.01` (6150)'), t('توسعه', 'Development')],
                [t('ب', 'b'), t('مرکز هزینه', 'Cost centre'), t('`CC-ARY-PRD` (5110)', '`CC-ARY-PRD` (5110)'), t('عملیاتی', 'Operating')],
                [t('ج', 'c'), t('سفارش داخلی که به مرکز هزینه تسویه می‌شود', 'Internal order settled to a cost centre'), t('سفارش داخلی جدید HSE (5130) ← `CC-ARY-PRD`', 'New HSE internal order (5130) → `CC-ARY-PRD`'), t('عملیاتی', 'Operating')],
                [t('د', 'd'), t('دستور کار نگهداری', 'Maintenance work order'), t('دستور کار جدید (5120) ← `CC-ARY-CMP`', 'New work order (5120) → `CC-ARY-CMP`'), t('عملیاتی', 'Operating')],
                [t('ه', 'e'), t('عنصر WBS اکتشافی', 'Exploration WBS element'), t('`EXP-2026-003.01` (5610)', '`EXP-2026-003.01` (5610)'), t('اکتشاف', 'Exploration')],
                [t('و', 'f'), t('عنصر WBS', 'WBS element'), t('`AFE-2025-021.05` اتصالات و لوله‌کشی', '`AFE-2025-021.05` tie-ins and piping'), t('توسعه', 'Development')],
              ],
            },
          ],
          answer: t('الف و و: WBS توسعه؛ ب: مرکز هزینه؛ ج: سفارش داخلی؛ د: دستور کار نگهداری؛ ه: WBS اکتشافی.', 'a and f: development WBS; b: cost centre; c: internal order; d: maintenance work order; e: exploration WBS.'),
        },
        {
          type: 'exercise',
          title: t('خطاهای کدگذاری را پیدا کنید', 'Find the coding errors'),
          difficulty: 'medium',
          problem: t('پنج سطر زیر پیش از ثبت به بازبینی رسیده‌اند. برای هر سطر بگویید کدام قاعده نقض شده و کد درست چیست.', 'The five lines below reached review before posting. For each, say which rule is broken and what the correct code is.'),
          given: {
            head: [t('سطر', 'Line'), t('شرح', 'Description'), t('مبلغ', 'Amount'), t('کد واردشده', 'Code entered')],
            numericCols: [2],
            rows: [
              [t('1', '1'), t('دو روز نرخ روزانه دکل AR-07', 'Two AR-07 rig days'), 168000, t('`CC-ARY-DRL`، 5110، بدون WBS', '`CC-ARY-DRL`, 5110, no WBS')],
              [t('2', '2'), t('روغن کمپرسورهای در حال کار', 'Lube oil for the running compressors'), 12000, t('`AFE-2025-021.01.03`، 5110', '`AFE-2025-021.01.03`, 5110')],
              [t('3', '3'), t('جریمه زیست‌محیطی', 'Environmental fine'), 50000, t('`CC-ARY-PRD`، 5910، R', '`CC-ARY-PRD`, 5910, R')],
              [t('4', '4'), t('بازپردازش لرزه‌نگاری', 'Seismic reprocessing'), 90000, t('`EXP-2026-003.01`، طبقه توسعه', '`EXP-2026-003.01`, category Development')],
              [t('5', '5'), t('فاکتور دیررسیده تعمیر چاه AR-03', 'Late invoice for the AR-03 workover'), 25000, t('WBS در وضعیت «بسته»', 'WBS in “closed” status')],
            ],
          },
          solution: [
            {
              type: 'table',
              head: [t('سطر', 'Line'), t('قاعده نقض‌شده', 'Rule broken'), t('کد درست', 'Correct code')],
              rows: [
                [t('1', '1'), t('هزینه پروژه فقط با WBS', 'Project cost only with a WBS'), t('`AFE-2025-014.02.01`، 6120 ← 1510، `DRL`، R، توسعه', '`AFE-2025-014.02.01`, 6120 → 1510, `DRL`, R, Development')],
                [t('2', '2'), t('هزینه عملیاتی روی WBS سرمایه‌ای ممنوع', 'Operating cost not allowed on a capital WBS'), t('`CC-ARY-CMP`، 5110، `OPS`، R، عملیاتی', '`CC-ARY-CMP`, 5110, `OPS`, R, Operating')],
                [t('3', '3'), t('حساب 5910 همیشه N', 'Account 5910 is always N'), t('`CC-ARY-PRD`، 5910، `OPS`، N، عملیاتی', '`CC-ARY-PRD`, 5910, `OPS`, N, Operating')],
                [t('4', '4'), t('طبقه از نوع پروژه استخراج می‌شود', 'Category is derived from the project type'), t('`EXP-2026-003.01`، 5610، `GGS`، R، اکتشاف', '`EXP-2026-003.01`, 5410, `GGS`, R, Exploration')],
                [t('5', '5'), t('ثبت روی WBS بسته ممنوع', 'No posting to a closed WBS'), t('بازگشایی مصوب WBS، ثبت فاکتور، تسویه و بستن دوباره', 'Approved reopening of the WBS, post the invoice, settle and close again')],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: t(
                'سطر 5 درس بزرگ‌تری دارد: پیش از بستن WBS، تعهدات باز و GRN/SESهای فاکتورنشده را بررسی کنید. وضعیت «تکمیل فنی» برای همین است: سفارش جدید ممنوع، اما فاکتورهای باقی‌مانده مجاز.',
                'Line 5 has a bigger lesson: before closing a WBS, check open commitments and GRNs/SESs not yet invoiced. The “technically complete” status exists for this: no new orders, but remaining invoices still allowed.',
              ),
            },
          ],
          answer: t('1: WBS حفاری؛ 2: مرکز هزینه ایستگاه؛ 3: نشانگر N؛ 4: طبقه اکتشاف؛ 5: بازگشایی مصوب WBS.', '1: drilling WBS; 2: station cost centre; 3: flag N; 4: Exploration category; 5: approved WBS reopening.'),
        },
        {
          type: 'exercise',
          title: t('صورت‌حساب شرکا و هزینه قابل بازیافت یک ماه', 'One month’s partner billing and recoverable cost'),
          difficulty: 'medium',
          problem: t(
            'هزینه‌های کدگذاری‌شده یک ماه مسار پترولیوم در جدول آمده است. (الف) جمع هزینه‌های مشترک و سهم هر شریک (مسار پترولیوم 50٪، الف 30٪، ب 20٪) را حساب کنید. (ب) هزینه قابل بازیافت هر طبقه و (ج) جمع هزینه غیرقابل بازیافت را بیابید.',
            'Masar Petroleum’s coded costs for one month are in the table. (a) Find total joint costs and each partner’s share (Masar Petroleum 50%, A 30%, B 20%). (b) Find recoverable cost by category and (c) total non-recoverable cost.',
          ),
          given: {
            head: [t('هزینه', 'Cost'), t('مبلغ', 'Amount'), t('مشترک؟', 'Joint?'), t('R/N', 'R/N'), t('طبقه', 'Category')],
            numericCols: [1],
            rows: [
              [t('SES نرخ روزانه دکل AR-07', 'AR-07 rig day rate SES'), 840000, t('بله', 'Yes'), t('R', 'R'), t('توسعه', 'Development')],
              [t('GRN لوله جداری AR-07', 'AR-07 casing GRN'), 410000, t('بله', 'Yes'), t('R', 'R'), t('توسعه', 'Development')],
              [t('حواله ضد امولسیون', 'Demulsifier issue'), 36000, t('بله', 'Yes'), t('R', 'R'), t('عملیاتی', 'Operating')],
              [t('تعمیر اساسی کمپرسور (تسویه به `CC-ARY-CMP`)', 'Compressor overhaul (settled to `CC-ARY-CMP`)'), 120000, t('بله', 'Yes'), t('R', 'R'), t('عملیاتی', 'Operating')],
              [t('SES بازپردازش لرزه‌نگاری', 'Seismic reprocessing SES'), 90000, t('بله', 'Yes'), t('R', 'R'), t('اکتشاف', 'Exploration')],
              [t('جریمه زیست‌محیطی', 'Environmental fine'), 50000, t('بله', 'Yes'), t('N', 'N'), t('عملیاتی', 'Operating')],
              [t('بهره وام شرکتی', 'Corporate loan interest'), 64000, t('خیر', 'No'), t('N', 'N'), t('ندارد', 'None')],
            ],
          },
          hint: t('سهم شرکا را فقط از هزینه‌های مشترک بگیرید؛ بازیافت را فقط از سطرهای R.', 'Take partner shares from joint costs only; recovery from R lines only.'),
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('جمع هزینه‌های مشترک', 'Total joint costs'), text: t('840,000 + 410,000 + 36,000 + 120,000 + 90,000 + 50,000 = 1,546,000. بهره (64,000) هزینه خود مسار پترولیوم است.', '840,000 + 410,000 + 36,000 + 120,000 + 90,000 + 50,000 = 1,546,000. Interest (64,000) is Masar Petroleum’s own cost.') },
                { title: t('سهم شرکا', 'Partner shares'), text: t('مسار پترولیوم 1,546,000 × 50٪ = 773,000؛ انرژی البرز × 30٪ = 463,800؛ نفت دنا × 20٪ = 309,200. جمع: 1,546,000.', 'Masar Petroleum 1,546,000 × 50% = 773,000; Alborz Energy × 30% = 463,800; Dena Petroleum × 20% = 309,200. Total: 1,546,000.') },
                { title: t('قابل بازیافت به تفکیک طبقه', 'Recoverable by category'), text: t('توسعه: 840,000 + 410,000 = 1,250,000؛ عملیاتی: 36,000 + 120,000 = 156,000؛ اکتشاف: 90,000. جمع: 1,496,000.', 'Development: 840,000 + 410,000 = 1,250,000; operating: 36,000 + 120,000 = 156,000; exploration: 90,000. Total: 1,496,000.') },
                { title: t('غیرقابل بازیافت', 'Non-recoverable'), text: t('50,000 + 64,000 = 114,000. کنترل: 1,496,000 + 114,000 = 1,610,000 که برابر جمع همه هزینه‌هاست.', '50,000 + 64,000 = 114,000. Check: 1,496,000 + 114,000 = 1,610,000, equal to all costs.') },
              ],
            },
            {
              type: 'table',
              caption: t('خلاصه', 'Summary'),
              head: [t('گزارش', 'Report'), t('مبلغ', 'Amount')],
              numericCols: [1],
              rows: [
                [t('صورت‌حساب انرژی البرز', 'Bill to Alborz Energy'), 463800],
                [t('صورت‌حساب نفت دنا', 'Bill to Dena Petroleum'), 309200],
                [t('بازیافت: توسعه', 'Recovery: development'), 1250000],
                [t('بازیافت: عملیاتی', 'Recovery: operating'), 156000],
                [t('بازیافت: اکتشاف', 'Recovery: exploration'), 90000],
                [t('غیرقابل بازیافت', 'Non-recoverable'), 114000],
              ],
            },
          ],
          answer: t(
            'هزینه مشترک 1,546,000 (الف 463,800، ب 309,200، مسار پترولیوم 773,000)؛ قابل بازیافت 1,496,000 (توسعه 1,250,000، عملیاتی 156,000، اکتشاف 90,000)؛ غیرقابل بازیافت 114,000.',
            'Joint cost 1,546,000 (A 463,800, B 309,200, Masar Petroleum 773,000); recoverable 1,496,000 (development 1,250,000, operating 156,000, exploration 90,000); non-recoverable 114,000.',
          ),
        },
        {
          type: 'exercise',
          title: t('اصلاح یک حواله اشتباه', 'Correcting a wrong goods issue'),
          difficulty: 'hard',
          problem: t(
            'انباردار تجهیزات تکمیل چاه (پکر و آویز لوله مغزی) به ارزش 180,000 را از انبار مرکزی برای AR-07 حواله کرده، اما به اشتباه مرکز هزینه `CC-ARY-PRD` را زده است. (الف) ثبتی که ERP ساخته را بنویسید. (ب) اصلاح را با برگشت حواله و حواله دوباره به WBS درست ثبت کنید. (ج) اثر خطا را پیش از اصلاح بر گزارش‌ها توضیح دهید.',
            'A storekeeper issued completion equipment (packer and tubing hanger) worth 180,000 from the Central Warehouse for AR-07 but entered cost centre `CC-ARY-PRD` by mistake. (a) Write the entry the ERP created. (b) Correct it by reversing the issue and re-issuing to the right WBS. (c) Explain the error’s effect on the reports before correction.',
          ),
          hint: t('WBS درست ردیف تجهیزات تکمیل چاه است: `AFE-2025-014.03.01` با عنصر هزینه 6150.', 'The right WBS is the completion equipment line: `AFE-2025-014.03.01` with cost element 6150.'),
          solution: [
            {
              type: 'journal',
              title: t('(الف) ثبت اشتباه و (ب) اصلاح', '(a) The wrong entry and (b) the correction'),
              entries: [
                {
                  date: t('ثبت اشتباه', 'Wrong entry'),
                  lines: [
                    { account: ac.opexPrd, debit: 180000 },
                    { account: ac.inventory, credit: 180000 },
                  ],
                  memo: t('حواله به مرکز هزینه تولید؛ طبقه عملیاتی.', 'Issue to the production cost centre; Operating category.'),
                },
                {
                  date: t('برگشت حواله', 'Reverse the issue'),
                  lines: [
                    { account: ac.inventory, debit: 180000 },
                    { account: ac.opexPrd, credit: 180000 },
                  ],
                  memo: t('سند برگشت با ارجاع به حواله اصلی.', 'Reversal document referencing the original issue.'),
                },
                {
                  date: t('حواله دوباره', 'Re-issue'),
                  lines: [
                    { account: ac.aucCompletion, debit: 180000 },
                    { account: ac.inventory, credit: 180000 },
                  ],
                  memo: t('حواله به WBS درست؛ `CMP`، R، توسعه.', 'Issue to the correct WBS; `CMP`, R, Development.'),
                },
              ],
            },
            {
              type: 'list',
              items: [
                t('**گزارش مرکز هزینه**: هزینه واقعی `CC-ARY-PRD` 180,000 بیش از واقع بود و ممکن بود سفارش‌های بعدی آن به سقف بودجه بخورند.', '**Cost centre report**: `CC-ARY-PRD` actuals were 180,000 too high, and its next orders could have hit the budget limit.'),
                t('**گزارش AFE**: ردیف .03.01 چاه AR-07، 180,000 کمتر نشان می‌داد.', '**AFE report**: AR-07 line .03.01 showed 180,000 too little.'),
                t('**صورت‌های مالی**: هزینه 180,000 بیشتر و دارایی‌های در جریان تکمیل 180,000 کمتر؛ پس سود 180,000 کمتر از واقع.', '**Financial statements**: expense 180,000 too high and assets under construction 180,000 too low, so profit understated by 180,000.'),
                t('**بازیافت هزینه**: مبلغ در طبقه عملیاتی به‌جای توسعه می‌رفت.', '**Cost recovery**: the amount would go under operating instead of development.'),
                t('**شرکا**: جمع صورت‌حساب تغییر نمی‌کرد (هر دو هزینه مشترک‌اند)، اما گزارش AFE و طبقه ادعا غلط بود.', '**Partners**: the bill total would not change (both are joint costs), but the AFE report and claim category would be wrong.'),
              ],
            },
          ],
          answer: t(
            'اثر خالص اصلاح: بدهکار 1510 روی `AFE-2025-014.03.01` و بستانکار 5110 روی `CC-ARY-PRD`، هر کدام 180,000؛ هزینه و سود سال 180,000 اصلاح و طبقه از عملیاتی به توسعه برمی‌گردد.',
            'Net effect of the correction: debit 1510 on `AFE-2025-014.03.01` and credit 5110 on `CC-ARY-PRD`, 180,000 each; expense and profit are corrected by 180,000 and the category moves from operating to development.',
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
            t('کد کامل هزینه: کد شرکت ← مرکز هزینه ← عنصر WBS ← عنصر هزینه / حساب ← R/N ← طبقه؛ کاربر کم وارد می‌کند و ERP بقیه را استخراج می‌کند.', 'The full cost code: company code → cost centre → WBS element → cost element / account → R/N → category; the user enters little and the ERP derives the rest.'),
            t('حساب دفتر کل جای مبلغ در صورت‌های مالی است؛ عنصر هزینه نوع هزینه در حسابداری بهای تمام‌شده؛ عنصر ثانویه فقط جابه‌جایی داخلی است.', 'The GL account places the amount in the financial statements; the cost element gives its type in cost accounting; a secondary element only moves cost internally.'),
            t('مرکز هزینه برای واحدهای دائمی و OPEX، WBS برای پروژه‌ها و CAPEX، سفارش داخلی و دستور کار برای کارهای موقت؛ هر سطر یک شیء هزینه واقعی دارد.', 'Cost centres for permanent units and OPEX, WBS for projects and CAPEX, internal orders and work orders for temporary jobs; each line has one real cost object.'),
            t('نشانگر R/N به قرارداد نفتی برمی‌گردد و تقسیم بین شرکا به JOA؛ این دو را یکی نگیرید.', 'The R/N flag comes from the petroleum contract and partner sharing from the JOA; do not confuse them.'),
            t('قواعد اعتبارسنجی ترکیب‌های غلط را می‌گیرند؛ کد درست در سفارش خرید به GRN، SES، فاکتور و پرداخت منتقل می‌شود.', 'Validation rules catch wrong combinations; the right code on the PO flows to the GRN, SES, invoice and payment.'),
            t('یک کد غلط هم‌زمان گزارش بودجه، صورت‌های مالی، صورت‌حساب شرکا و بازیافت هزینه را خراب می‌کند.', 'One wrong code breaks the budget report, the financial statements, partner billing and cost recovery at once.'),
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            { term: t('کد شرکت (Company code)', 'Company code'), def: t('شخصیت حقوقی با ترازنامه و سود و زیان کامل در ERP.', 'A legal entity with a complete balance sheet and income statement in the ERP.') },
            { term: t('عنصر هزینه (Cost element)', 'Cost element'), def: t('نوع هزینه در حسابداری بهای تمام‌شده؛ اولیه (از بیرون) یا ثانویه (جابه‌جایی داخلی).', 'The type of cost in cost accounting; primary (from outside) or secondary (internal flow).') },
            { term: t('مرکز هزینه', 'Cost centre'), def: t('واحد مسئولیت دائمی که هزینه‌های جاری روی آن ثبت و بودجه‌ریزی می‌شود.', 'A permanent area of responsibility on which running costs are budgeted and posted.') },
            { term: t('مرکز سود', 'Profit centre'), def: t('واحدی که درآمد و هزینه هر دو را دارد؛ معمولاً خودکار استخراج می‌شود.', 'A unit with both revenue and cost; usually derived automatically.') },
            { term: t('عنصر WBS', 'WBS element'), def: t('جزئی از یک پروژه موقت که هزینه و بودجه پروژه روی آن جمع می‌شود.', 'Part of a temporary project on which project cost and budget collect.') },
            { term: t('سفارش داخلی (Internal order)', 'Internal order'), def: t('شیء هزینه موقت برای یک کار کوچک که در پایان به مرکز هزینه تسویه می‌شود.', 'A temporary cost object for a small job, settled to a cost centre at the end.') },
            { term: t('کد فعالیت (Activity code)', 'Activity code'), def: t('کد استاندارد نوع کار که در همه پروژه‌ها یکسان است و مقایسه را ممکن می‌کند.', 'A standard code for the kind of work, the same across projects, that makes comparison possible.') },
            { term: t('نشانگر قابل بازیافت (R/N)', 'Recoverable flag (R/N)'), def: t('نشان می‌دهد هزینه طبق قرارداد نفتی قابل بازیافت هست یا نه.', 'Shows whether a cost is recoverable under the petroleum contract.') },
            { term: t('طبقه هزینه', 'Cost category'), def: t('اکتشاف، توسعه یا عملیاتی؛ مبنای گروه‌بندی در صورت بازیافت هزینه.', 'Exploration, development or operating; the grouping used in the cost-recovery statement.') },
            { term: t('قاعده اعتبارسنجی و استخراج', 'Validation and derivation rules'), def: t('قواعد ERP که ترکیب‌های غلط را رد می‌کنند و اجزای وابسته کد را خودکار پر می‌کنند.', 'ERP rules that reject wrong combinations and fill in dependent parts of the code automatically.') },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: t('تفاوت اصلی حساب دفتر کل و عنصر هزینه چیست؟', 'What is the main difference between a GL account and a cost element?'),
      options: [
        t('حساب دفتر کل فقط برای دارایی‌هاست و عنصر هزینه فقط برای بدهی‌ها', 'GL accounts are only for assets and cost elements only for liabilities'),
        t('حساب دفتر کل جای مبلغ در صورت‌های مالی را تعیین می‌کند و عنصر هزینه نوع هزینه را در حسابداری بهای تمام‌شده', 'The GL account places the amount in the financial statements; the cost element gives the type of cost in cost accounting'),
        t('هیچ تفاوتی ندارند؛ دو نام برای یک چیزند', 'There is no difference; they are two names for the same thing'),
        t('عنصر هزینه همیشه به یک چاه مشخص اشاره می‌کند', 'A cost element always points to a specific well'),
      ],
      answer: 1,
      explain: t(
        'حساب دفتر کل برای صورت‌های مالی است و عنصر هزینه برای گزارش مدیریتی و بودجه. برای هزینه‌های عملیاتی این دو اغلب یک کد دارند، اما عناصر ثانویه حساب دفتر کل ندارند. چاه با شیء هزینه (WBS) مشخص می‌شود، نه با عنصر هزینه.',
        'The GL account serves the financial statements; the cost element serves management reporting and budgets. For operating costs they often share a code, but secondary elements have no GL account. A well is identified by a cost object (WBS), not a cost element.',
      ),
    },
    {
      q: t('بسته کمپرسور واحد 3 با GRN تحویل گرفته می‌شود. روی کدام شیء هزینه می‌نشیند؟', 'The compressor unit 3 package is received with a GRN. Which cost object does it sit on?'),
      options: [
        t('مرکز هزینه `CC-ARY-CMP` با حساب 5110', 'Cost centre `CC-ARY-CMP` with account 5110'),
        t('دستور کار نگهداری `WO-26-0410`', 'Maintenance work order `WO-26-0410`'),
        t('سفارش داخلی `IO-26-0012`', 'Internal order `IO-26-0012`'),
        t('عنصر WBS `AFE-2025-021.01.02` با عنصر هزینه 6310', 'WBS element `AFE-2025-021.01.02` with cost element 6310'),
      ],
      answer: 3,
      explain: t(
        'بسته کمپرسور جدید بخشی از پروژه سرمایه‌ای ارتقای ایستگاه است و روی WBS آن می‌نشیند (حساب 1510). مرکز هزینه ایستگاه فقط مرکز مسئول استخراج‌شده است؛ ثبت روی آن هزینه سرمایه‌ای را عملیاتی می‌کند.',
        'The new compressor package is part of the station upgrade capital project and sits on its WBS (account 1510). The station cost centre is only the derived responsible centre; posting to it would turn a capital cost into OPEX.',
      ),
    },
    {
      q: t('یک هزینه مشترک 410,000 است. سهم نفت دنا (20٪) چقدر است؟', 'A joint cost is 410,000. What is Dena Petroleum’s 20% share?'),
      options: [t('82,000', '82,000'), t('123,000', '123,000'), t('205,000', '205,000'), t('41,000', '41,000')],
      answer: 0,
      explain: t(
        '410,000 × 20٪ = 82,000. رقم 123,000 سهم 30٪ انرژی البرز و 205,000 سهم 50٪ مسار پترولیوم است.',
        '410,000 × 20% = 82,000. 123,000 is Alborz Energy’s 30% and 205,000 is Masar Petroleum’s 50%.',
      ),
    },
    {
      q: t('هزینه‌های یک ماه 900,000 است که 70,000 آن نشانگر N دارد. چه مبلغی در صورت بازیافت هزینه ادعا می‌شود؟', 'A month’s costs are 900,000, of which 70,000 is flagged N. How much is claimed in the cost-recovery statement?'),
      options: [t('900,000', '900,000'), t('970,000', '970,000'), t('830,000', '830,000'), t('70,000', '70,000')],
      answer: 2,
      explain: t(
        'فقط سطرهای R ادعا می‌شوند: 900,000 − 70,000 = 830,000. ادعای کل 900,000 یعنی هزینه غیرقابل بازیافت هم ادعا شده که در حسابرسی رد می‌شود.',
        'Only R lines are claimed: 900,000 − 70,000 = 830,000. Claiming the full 900,000 would include non-recoverable cost, which an audit would reject.',
      ),
    },
    {
      q: t('عنصر هزینه ثانویه (مثلاً 9410 تسویه سفارش‌ها) چه کاری می‌کند؟', 'What does a secondary cost element (for example 9410 order settlement) do?'),
      options: [
        t('هزینه را درون شرکت از یک شیء هزینه به شیء دیگر می‌برد و جمع هزینه شرکت را تغییر نمی‌دهد', 'Moves cost inside the company from one cost object to another without changing total company cost'),
        t('هزینه خرید از تأمین‌کننده را ثبت می‌کند', 'Records the cost of buying from a supplier'),
        t('درآمد فروش نفت را ثبت می‌کند', 'Records oil sales revenue'),
        t('بدهی به شرکا را نشان می‌دهد', 'Shows the liability to partners'),
      ],
      answer: 0,
      explain: t(
        'عنصر ثانویه برای جریان‌های داخلی است: تسویه، تسهیم و نرخ فعالیت. هزینه‌ای که از بیرون می‌آید (مثل خرید) با عنصر اولیه ثبت می‌شود.',
        'A secondary element is for internal flows: settlement, allocation and activity charges. A cost from outside (such as a purchase) is posted with a primary element.',
      ),
    },
    {
      q: t('فاکتوری برای عنصر WBS در وضعیت «بسته» وارد می‌شود. ERP چه می‌کند؟', 'An invoice is entered for a WBS element in “closed” status. What does the ERP do?'),
      options: [
        t('ثبت می‌کند و فقط هشدار می‌دهد', 'Posts it with only a warning'),
        t('آن را خودکار به مرکز هزینه مسئول می‌برد', 'Moves it automatically to the responsible cost centre'),
        t('ثبت را رد می‌کند؛ فقط پس از بازگشایی مصوب امکان ثبت هست', 'Rejects the posting; it can be posted only after an approved reopening'),
        t('آن را به حساب 5910 می‌برد', 'Sends it to account 5910'),
      ],
      answer: 2,
      explain: t(
        'وضعیت «بسته» یعنی پروژه تمام و تسویه شده است و هیچ ثبتی مجاز نیست. بردن خودکار به مرکز هزینه هزینه سرمایه‌ای را عملیاتی و گزارش AFE را ناقص می‌کرد.',
        '“Closed” means the project is finished and settled and no posting is allowed. Moving it automatically to a cost centre would turn a capital cost into OPEX and leave the AFE report incomplete.',
      ),
    },
    {
      q: t('تجهیزات سرمایه‌ای 180,000 اشتباهی روی مرکز هزینه با حساب 5110 ثبت شده است. سود سال تا پیش از اصلاح چه وضعی دارد؟', 'Capital equipment worth 180,000 was wrongly posted to a cost centre with account 5110. Before correction, what is the effect on the year’s profit?'),
      options: [
        t('180,000 بیشتر از واقع', '180,000 too high'),
        t('تغییری نمی‌کند', 'No change'),
        t('360,000 کمتر از واقع', '360,000 too low'),
        t('180,000 کمتر از واقع', '180,000 too low'),
      ],
      answer: 3,
      explain: t(
        'هزینه 180,000 بیشتر ثبت شده، پس سود 180,000 کمتر است و دارایی‌های در جریان تکمیل هم 180,000 کمتر. رقم 360,000 اثر را دوبار شمرده است.',
        'Expense is overstated by 180,000, so profit is 180,000 too low, and assets under construction are 180,000 too low as well. 360,000 counts the effect twice.',
      ),
    },
    {
      q: t('کاربر سفارشی را روی `AFE-2025-014.02.03` ثبت می‌کند. مرکز سود `PC-ARYA` چگونه روی آن می‌نشیند؟', 'A user places an order on `AFE-2025-014.02.03`. How does profit centre `PC-ARYA` get onto it?'),
      options: [
        t('کاربر باید آن را دستی وارد کند', 'The user must type it in'),
        t('ERP آن را از داده پایه عنصر WBS استخراج می‌کند', 'The ERP derives it from the WBS element’s master data'),
        t('پس از فاکتور، حسابدار آن را اضافه می‌کند', 'An accountant adds it after the invoice'),
        t('مرکز سود فقط برای درآمد است و روی هزینه نمی‌نشیند', 'Profit centres are only for revenue and never sit on costs'),
      ],
      answer: 1,
      explain: t(
        'مرکز سود، مرکز هزینه مسئول، کد شرکت و طبقه از داده پایه WBS استخراج می‌شوند. ورود دستی خطا می‌سازد و مرکز سود هم درآمد و هم هزینه را دارد.',
        'The profit centre, responsible cost centre, company code and category are derived from the WBS master data. Manual entry invites errors, and a profit centre carries both revenue and cost.',
      ),
    },
    {
      q: t('هزینه‌های R یک ماه: توسعه 1,250,000، عملیاتی 156,000 و اکتشاف 90,000. جمع هزینه قابل بازیافت چقدر است؟', 'A month’s R costs: development 1,250,000, operating 156,000 and exploration 90,000. What is total recoverable cost?'),
      options: [t('1,406,000', '1,406,000'), t('1,340,000', '1,340,000'), t('1,610,000', '1,610,000'), t('1,496,000', '1,496,000')],
      answer: 3,
      explain: t(
        '1,250,000 + 156,000 + 90,000 = 1,496,000. گزینه 1,406,000 اکتشاف را جا انداخته و 1,610,000 هزینه‌های N را هم شمرده است.',
        '1,250,000 + 156,000 + 90,000 = 1,496,000. 1,406,000 leaves out exploration and 1,610,000 also counts the N costs.',
      ),
    },
    {
      q: t('جریمه زیست‌محیطی یک نشت معمولی در عملیات عادی طبق JOA هزینه مشترک است. کدگذاری درست کدام است؟', 'An environmental fine for an ordinary spill in normal operations is a joint cost under the JOA. What is the right coding?'),
      options: [
        t('مشترک (بین شرکا تقسیم می‌شود)، اما نشانگر N', 'Joint (shared among partners), but flagged N'),
        t('مشترک و نشانگر R، چون شرکا آن را می‌پردازند', 'Joint and flagged R, because the partners pay it'),
        t('غیرمشترک و نشانگر R', 'Not joint and flagged R'),
        t('روی WBS چاه AR-07 با طبقه توسعه', 'On the AR-07 WBS with category Development'),
      ],
      answer: 0,
      explain: t(
        'تقسیم بین شرکا را JOA تعیین می‌کند و قابل بازیافت بودن را قرارداد نفتی. جریمه معمولاً غیرقابل بازیافت است (N) حتی اگر شرکا سهمشان را بپردازند. گزینه دوم این دو مفهوم را یکی گرفته است.',
        'Partner sharing is decided by the JOA and recoverability by the petroleum contract. A fine is usually non-recoverable (N) even if the partners pay their share. The second option confuses the two ideas.',
      ),
    },
  ],
}
