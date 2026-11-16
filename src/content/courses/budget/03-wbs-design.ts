import type { Lesson } from '../../types'

const t = (fa: string, en: string) => ({ fa, en })

/* Account titles used in the Masar Petroleum examples (codes follow the accounting course's chart of accounts). */
const ac = {
  inventory: t('1310 موجودی مواد و قطعات (انبار مرکزی)', '1310 Materials and spares inventory (Central Warehouse)'),
  aucCasing: t('1510 دارایی‌های در جریان تکمیل (WBS `AFE-2025-014.02.03`، عنصر هزینه 6140)', '1510 Assets under construction (WBS `AFE-2025-014.02.03`, cost element 6140)'),
  aucRig: t('1510 دارایی‌های در جریان تکمیل (WBS `AFE-2025-014.02.01`، عنصر هزینه 6120)', '1510 Assets under construction (WBS `AFE-2025-014.02.01`, cost element 6120)'),
  grir: t('2120 حساب واسط رسید کالا و فاکتور (GR/IR)', '2120 GR/IR clearing'),
  ap: t('2110 حساب‌های پرداختنی', '2110 Accounts payable'),
}

export const lesson: Lesson = {
  slug: 'wbs-design',
  number: 3,
  level: 'intermediate',
  minutes: 30,
  icon: 'ListChecks',
  tone: 'gold',
  title: t('طراحی ساختار شکست کار (WBS)', 'Designing a Work Breakdown Structure (WBS)'),
  summary: t(
    'ساختار شکست کار (WBS) کل کار یک پروژه را به اجزای کوچک و قابل کنترل می‌شکند تا بودجه، زمان‌بندی، تدارکات و هزینه واقعی روی یک اسکلت مشترک بنشینند. در این درس اصول طراحی WBS (قاعده 100٪، تحویل‌محور بودن، سطح جزئیات)، فرهنگ‌نامه WBS، WBS حفاری چاه AR-07 و ارتقای ایستگاه تقویت فشار، پیوند WBS با AFE، کدهای هزینه، زمان‌بندی و تدارکات، و انواع عنصر و وضعیت‌های WBS در ERP را می‌آموزید.',
    'A work breakdown structure (WBS) breaks a project’s total work into small, controllable parts so that budget, schedule, procurement and actual cost all sit on one shared skeleton. This lesson covers WBS design principles (the 100% rule, deliverable orientation, level of detail), the WBS dictionary, the WBS for drilling well AR-07 and for the compressor station upgrade, how the WBS links to the AFE, cost codes, schedule and procurement, and WBS element types and statuses in the ERP.',
  ),
  objectives: [
    t('توضیح دهید WBS چیست، چه نیست و سطح‌های آن چه نقشی دارند', 'Explain what a WBS is, what it is not and the role of its levels'),
    t('قاعده 100٪، تحویل‌محور بودن و سطح جزئیات مناسب را در طراحی WBS به کار ببرید و جمع بودجه سطح‌ها را کنترل کنید', 'Apply the 100% rule, deliverable orientation and the right level of detail, and check budget roll-ups between levels'),
    t('برای یک چاه حفاری و یک پروژه تأسیسات WBS و فرهنگ‌نامه آن را بنویسید', 'Write a WBS and its dictionary for a drilling well and a facilities project'),
    t('پیوند WBS با AFE، کدهای هزینه، زمان‌بندی، تدارکات و حسابداری دارایی را شرح دهید', 'Describe how the WBS links to the AFE, cost codes, schedule, procurement and asset accounting'),
    t('انواع عنصر WBS و وضعیت‌های آن در ERP و ثبت‌هایی را که روی WBS می‌نشینند بشناسید', 'Recognise WBS element types and statuses in the ERP and the postings that land on a WBS'),
  ],
  sections: [
    {
      id: 'what-is-wbs',
      title: t('ساختار شکست کار چیست؟', 'What a Work Breakdown Structure Is'),
      blocks: [
        {
          type: 'p',
          text: t(
            'دو هفته پیش از شروع حفاری چاه AR-07، نماینده شریک الف در جلسه کمیته عملیات می‌پرسد: «از 8,000,000 بودجه پایه این چاه، سهم لوله‌های جداری چقدر است؟ آزمایش چاه با کیست؟ اگر حفاری گیر کند، کدام بخش بودجه فشار می‌خورد؟» اگر بودجه فقط یک عدد کلی باشد، هیچ‌کدام از این پرسش‌ها جواب ندارد. **ساختار شکست کار** همان ابزاری است که این عدد را به اجزای قابل پاسخ‌گویی می‌شکند.',
            'Two weeks before well AR-07 spuds, Partner A’s representative asks in the operating committee: “Of this well’s 8,000,000 base budget, how much is casing? Who owns well testing? If drilling gets stuck, which part of the budget takes the hit?” If the budget is just one total, none of these questions has an answer. The **work breakdown structure** is the tool that breaks that number into accountable parts.',
          ),
        },
        {
          type: 'p',
          text: t(
            '**ساختار شکست کار (Work Breakdown Structure یا WBS)** تقسیم سلسله‌مراتبی **کل دامنه کار** یک پروژه به اجزای کوچک‌تر است. هر سطح پایین‌تر جزئیات بیشتری دارد. پایین‌ترین سطح، **بسته کاری (Work package)** است: آن‌قدر کوچک که بتوان برایش برآورد، زمان‌بندی، مسئول، روش تأمین و کنترل هزینه تعیین کرد. هر جزء WBS را **عنصر WBS** می‌نامیم.',
            'A **work breakdown structure (WBS)** is a hierarchical breakdown of the **total scope** of a project into smaller parts. Each lower level holds more detail. The lowest level is the **work package**: small enough to be estimated, scheduled, assigned an owner and a procurement route, and cost-controlled. Each part of the WBS is called a **WBS element**.',
          ),
        },
        {
          type: 'compare',
          left: {
            title: t('WBS هست', 'A WBS is'),
            items: [
              t('فهرست سلسله‌مراتبی همه **تحویل‌دادنی‌های** پروژه', 'A hierarchy of all the project’s **deliverables**'),
              t('اسکلتی که بودجه، هزینه و مسئولیت روی آن می‌نشیند', 'The skeleton on which budget, cost and responsibility sit'),
              t('مبنای مشترک برآورد، زمان‌بندی، تدارکات و گزارش شرکا', 'The common basis for estimate, schedule, procurement and partner reports'),
            ],
          },
          right: {
            title: t('WBS نیست', 'A WBS is not'),
            items: [
              t('برنامه زمان‌بندی (ترتیب و تاریخ فعالیت‌ها)', 'A schedule (the order and dates of activities)'),
              t('نمودار سازمانی (چه کسی زیر دست چه کسی است)', 'An organisation chart (who reports to whom)'),
              t('کدینگ حساب‌ها (کجای صورت‌های مالی)', 'A chart of accounts (where in the financial statements)'),
            ],
          },
        },
        {
          type: 'table',
          caption: t('سطح‌های WBS در مسار پترولیوم', 'WBS levels at Masar Petroleum'),
          head: [t('سطح', 'Level'), t('محتوا', 'Content'), t('نمونه در AR-07', 'AR-07 example'), t('نقش در ERP', 'Role in the ERP')],
          rows: [
            [t('1', '1'), t('کل پروژه = یک AFE', 'Whole project = one AFE'), t('`AFE-2025-014` حفاری و تکمیل AR-07', '`AFE-2025-014` drill and complete AR-07'), t('عنصر برنامه‌ریزی؛ بودجه کل AFE و ذخیره احتیاطی', 'Planning element; total AFE budget and contingency')],
            [t('2', '2'), t('تحویل‌دادنی‌های اصلی', 'Main deliverables'), t('`.02` حفاری', '`.02` Drilling'), t('عنصر برنامه‌ریزی و بودجه؛ حساب کنترل', 'Planning and budget element; control account')],
            [t('3', '3'), t('بسته‌های کاری', 'Work packages'), t('`.02.03` لوله‌های جداری و مغزی (OCTG)', '`.02.03` Casing and tubulars (OCTG)'), t('عنصر ثبت هزینه (محل تخصیص هزینه)', 'Posting element (account assignment)')],
            [t('4 (اختیاری)', '4 (optional)'), t('فعالیت‌ها', 'Activities'), t('راندن رشته جداری 9⅝ اینچ', 'Run the 9⅝-inch casing string'), t('در نرم‌افزار زمان‌بندی، نه در WBS هزینه', 'In the scheduling tool, not the cost WBS')],
          ],
        },
        {
          type: 'p',
          text: t(
            'شماره هر عنصر مسیرش را نشان می‌دهد: `AFE-2025-014.02.03` یعنی پروژه `AFE-2025-014`، بخش 02 (حفاری)، بسته 03 (لوله‌ها). کسی که این کد را روی یک فاکتور می‌بیند، بدون باز کردن سیستم می‌داند هزینه کجا نشسته است.',
            'Each element’s number shows its path: `AFE-2025-014.02.03` means project `AFE-2025-014`, part 02 (drilling), package 03 (tubulars). Anyone who sees this code on an invoice knows where the cost sits without opening the system.',
          ),
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل: حساب کنترل', 'In practice: the control account'),
          text: t(
            'نقطه‌ای که بودجه، زمان‌بندی و مسئولیت به هم می‌رسند **حساب کنترل (Control account)** نام دارد. در مسار پترولیوم عناصر سطح 2 حساب کنترل‌اند و هر کدام یک **مدیر حساب کنترل** دارد؛ مثلاً سرپرست حفاری مسئول `.02` است. گزارش ماهانه به شرکا هم در همین سطح تهیه می‌شود.',
            'The point where budget, schedule and responsibility meet is the **control account**. At Masar Petroleum the level 2 elements are control accounts and each has a **control account manager**; for example the drilling superintendent owns `.02`. The monthly partner report is prepared at this level too.',
          ),
        },
      ],
    },
    {
      id: 'principles',
      title: t('اصول طراحی WBS', 'WBS Design Principles'),
      blocks: [
        {
          type: 'p',
          text: t(
            'مهم‌ترین اصل، **قاعده 100٪** است: WBS باید 100٪ دامنه کار پروژه را بپوشاند، نه کمتر و نه بیشتر؛ و فرزندان هر عنصر با هم دقیقاً 100٪ کار پدرشان هستند. نتیجه مستقیم آن برای بودجه این است که بودجه توزیع‌شده هر عنصر پدر برابر جمع بودجه فرزندانش است. کاری که در WBS نیست، بودجه ندارد و هزینه‌اش جایی برای نشستن ندارد؛ کاری که دو بار آمده، دو بار بودجه گرفته است.',
            'The most important principle is the **100% rule**: the WBS must cover 100% of the project’s scope, no less and no more, and the children of each element together are exactly 100% of their parent’s work. The direct consequence for budgets is that a parent element’s distributed budget equals the sum of its children’s budgets. Work missing from the WBS has no budget and nowhere for its cost to land; work that appears twice gets budget twice.',
          ),
        },
        {
          type: 'formula',
          text: t('بودجه عنصر پدر = جمع بودجه عناصر فرزند', 'Parent element budget = sum of child element budgets'),
          note: t(
            'مثال: حفاری `.02` = 2,100,000 (دکل) + 1,450,000 (خدمات حفاری) + 1,350,000 (لوله‌ها) = 4,900,000.',
            'Example: drilling `.02` = 2,100,000 (rig) + 1,450,000 (drilling services) + 1,350,000 (tubulars) = 4,900,000.',
          ),
        },
        {
          type: 'list',
          items: [
            t('**تحویل‌محور**: عناصر را با اسم تحویل‌دادنی نام ببرید («لوله‌های جداری و مغزی»، «آزمایش چاه»)، نه با فعل («خرید»، «نصب»).', '**Deliverable-oriented**: name elements after deliverables (“Casing and tubulars”, “Well testing”), not verbs (“Buy”, “Install”).'),
            t('**بدون هم‌پوشانی**: هر کار فقط در یک عنصر باشد؛ مرز عناصر را در فرهنگ‌نامه با «شامل» و «شامل نیست» بنویسید.', '**Mutually exclusive**: each piece of work sits in one element only; write element boundaries in the dictionary as “includes” and “excludes”.'),
            t('**سطح جزئیات مناسب**: بسته کاری باید یک مسئول، یک روش تأمین غالب و چند هفته تا چند ماه کار داشته باشد؛ ریزتر از آن، هزینه اداری بی‌فایده می‌سازد.', '**Right level of detail**: a work package should have one owner, one main procurement route and a few weeks to a few months of work; finer than that creates useless admin.'),
            t('**هماهنگ با جمع‌آوری هزینه**: هر بسته باید با یک یا چند عنصر هزینه و قرارداد مشخص پر شود تا هزینه واقعی بی‌دردسر به آن برسد.', '**Aligned with cost capture**: each package should be fed by one or a few cost elements and known contracts, so actual cost reaches it without effort.'),
            t('**هماهنگ با دارایی‌ها**: در پروژه‌های سرمایه‌ای، اجزای سطح 2 یا 3 باید به اجزای دارایی ثابت بخورند تا تسویه و سرمایه‌ای کردن ساده باشد.', '**Aligned with assets**: on capital projects, level 2 or 3 parts should match fixed asset components, so settlement and capitalisation are simple.'),
            t('**پایدار**: پس از تصویب AFE، ساختار را تغییر ندهید؛ تغییر ساختار مقایسه بودجه و واقعی را می‌شکند.', '**Stable**: after the AFE is approved, do not change the structure; restructuring breaks the budget-to-actual comparison.'),
          ],
        },
        {
          type: 'compare',
          left: {
            title: t('تحویل‌محور (درست)', 'Deliverable-oriented (right)'),
            items: [
              t('`.02.03` لوله‌های جداری و مغزی (OCTG)', '`.02.03` Casing and tubulars (OCTG)'),
              t('`.03.02` آزمایش چاه', '`.03.02` Well testing'),
              t('`.01.01` عملیات عمرانی محل و جاده', '`.01.01` Location and road civil works'),
            ],
          },
          right: {
            title: t('فعالیت‌محور (نادرست)', 'Activity-oriented (wrong)'),
            items: [
              t('«خرید لوله»، «حمل لوله»، «راندن لوله» به‌عنوان سه عنصر جدا', '“Buy pipe”, “Haul pipe”, “Run pipe” as three separate elements'),
              t('«کارهای متفرقه»', '“Miscellaneous works”'),
              t('«هزینه‌های ماه مهر»', '“October costs”'),
            ],
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('هم‌پوشانی یعنی بودجه دوبل', 'Overlap means double budget'),
          text: t(
            'اگر سیمان‌کاری هم در «خدمات حفاری» `.02.02` و هم در یک عنصر جدا به نام «سیمان‌کاری» برآورد شود، بودجه آن دو بار در AFE می‌آید و شرکا پول بیشتری تصویب می‌کنند. هزینه واقعی هم معلوم نیست کجا بنشیند. راه پیشگیری، نوشتن «شامل» و «شامل نیست» برای هر عنصر در فرهنگ‌نامه WBS است.',
            'If cementing is estimated both inside “Drilling services” `.02.02` and in a separate “Cementing” element, its budget appears twice in the AFE and the partners approve more money than needed. Actual cost has no clear home either. The cure is writing “includes” and “excludes” for every element in the WBS dictionary.',
          ),
        },
        {
          type: 'p',
          text: t(
            '**فرهنگ‌نامه WBS (WBS dictionary)** سندی است که برای هر عنصر توضیح می‌دهد دقیقاً چه چیزی را پوشش می‌دهد: دامنه کار، تحویل‌دادنی‌ها، آنچه شامل نیست، مسئول، بودجه، بازه زمانی، عنصر هزینه و کدهای پیش‌فرض، بسته‌های تدارکاتی و معیار پذیرش. نمودار WBS نشان می‌دهد عناصر چه هستند؛ فرهنگ‌نامه نشان می‌دهد مرز هر عنصر کجاست.',
            'The **WBS dictionary** is the document that explains exactly what each element covers: scope, deliverables, exclusions, owner, budget, time window, default cost element and codes, procurement packages and acceptance criteria. The WBS chart shows what the elements are; the dictionary shows where each element’s boundary lies.',
          ),
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل: الگوی استاندارد WBS چاه', 'In practice: a standard well WBS template'),
          text: t(
            'مسار پترولیوم برای همه چاه‌ها یک **الگوی WBS** ثابت دارد: همان سطح 2 (آماده‌سازی، حفاری، تکمیل و آزمایش، مدیریت پروژه) و همان بسته‌های سطح 3. پروژه هر چاه جدید از روی الگو ساخته می‌شود. نتیجه: هزینه لوله‌های AR-07 را می‌توان مستقیم با AR-11 و چاه‌های سال‌های قبل مقایسه کرد و برآورد چاه بعدی دقیق‌تر می‌شود.',
            'Masar Petroleum has one fixed **WBS template** for all wells: the same level 2 (site preparation, drilling, completion and testing, project management) and the same level 3 packages. Each new well project is created from the template. Result: AR-07’s tubulars cost can be compared directly with AR-11 and earlier wells, and the next well’s estimate gets better.',
          ),
        },
      ],
    },
    {
      id: 'drilling-wbs',
      title: t('WBS حفاری چاه AR-07', 'The WBS for Drilling Well AR-07'),
      blocks: [
        {
          type: 'p',
          text: t(
            'AFE چاه AR-07 (`AFE-2025-014`) بودجه پایه 8,000,000 دارد که بین بسته‌های کاری توزیع شده است، و یک **ذخیره احتیاطی** 800,000 (10٪ بودجه پایه) که در سطح 1 نگه داشته می‌شود و توزیع نمی‌شود. مبلغ کل AFE: 8,000,000 + 800,000 = 8,800,000؛ همان رقمی که در WP&B سال 2026 آمده است.',
            'The AR-07 AFE (`AFE-2025-014`) has a base budget of 8,000,000 distributed across the work packages, plus a **contingency** of 800,000 (10% of the base) held at level 1 and not distributed. Total AFE amount: 8,000,000 + 800,000 = 8,800,000; the same figure that appears in the 2026 WP&B.',
          ),
        },
        {
          type: 'table',
          caption: t('WBS پروژه `AFE-2025-014` حفاری و تکمیل چاه AR-07', 'WBS of project `AFE-2025-014` drill and complete well AR-07'),
          head: [t('کد', 'Code'), t('عنصر', 'Element'), t('سطح', 'Level'), t('عنصر هزینه', 'Cost element'), t('فعالیت', 'Activity'), t('بودجه', 'Budget')],
          numericCols: [5],
          rows: [
            [t('`.01`', '`.01`'), t('آماده‌سازی پیش از حفاری', 'Pre-spud and site preparation'), t('2', '2'), t('', ''), t('`SIT`', '`SIT`'), 620000],
            [t('`.01.01`', '`.01.01`'), t('عملیات عمرانی محل و جاده', 'Location and road civil works'), t('3', '3'), t('6110 خدمات پیمانکاری عمرانی', '6110 Civil contract services'), t('`SIT`', '`SIT`'), 380000],
            [t('`.01.02`', '`.01.02`'), t('جابه‌جایی و استقرار دکل', 'Rig move and mobilisation'), t('3', '3'), t('6120 اجاره دکل حفاری', '6120 Drilling rig hire'), t('`SIT`', '`SIT`'), 240000],
            [t('`.02`', '`.02`'), t('حفاری', 'Drilling'), t('2', '2'), t('', ''), t('`DRL`', '`DRL`'), 4900000],
            [t('`.02.01`', '`.02.01`'), t('نرخ روزانه دکل', 'Rig day rate'), t('3', '3'), t('6120 اجاره دکل حفاری', '6120 Drilling rig hire'), t('`DRL`', '`DRL`'), 2100000],
            [t('`.02.02`', '`.02.02`'), t('خدمات حفاری (گل، جهت‌دار، سیمان‌کاری)', 'Drilling services (mud, directional, cementing)'), t('3', '3'), t('6130 خدمات حفاری', '6130 Drilling services'), t('`DRL`', '`DRL`'), 1450000],
            [t('`.02.03`', '`.02.03`'), t('لوله‌های جداری و مغزی (OCTG)', 'Casing and tubulars (OCTG)'), t('3', '3'), t('6140 کالای حفاری (OCTG)', '6140 Drilling materials (OCTG)'), t('`DRL`', '`DRL`'), 1350000],
            [t('`.03`', '`.03`'), t('تکمیل و آزمایش چاه', 'Completion and testing'), t('2', '2'), t('', ''), t('`CMP`', '`CMP`'), 1880000],
            [t('`.03.01`', '`.03.01`'), t('تجهیزات تکمیل چاه', 'Completion equipment'), t('3', '3'), t('6150 تجهیزات تکمیل چاه', '6150 Completion equipment'), t('`CMP`', '`CMP`'), 1100000],
            [t('`.03.02`', '`.03.02`'), t('آزمایش چاه', 'Well testing'), t('3', '3'), t('6160 خدمات آزمایش چاه', '6160 Well-testing services'), t('`CMP`', '`CMP`'), 780000],
            [t('`.04`', '`.04`'), t('مدیریت پروژه', 'Project management'), t('2', '2'), t('', ''), t('`PMT`', '`PMT`'), 600000],
            [t('`.04.01`', '`.04.01`'), t('نظارت و تیم پروژه', 'Supervision and project team'), t('3', '3'), t('6210 هزینه کارکنان تخصیصی', '6210 Allocated staff costs'), t('`PMT`', '`PMT`'), 420000],
            [t('`.04.02`', '`.04.02`'), t('بیمه و مجوزها', 'Insurance and permits'), t('3', '3'), t('6220 بیمه و مجوزها', '6220 Insurance and permits'), t('`PMT`', '`PMT`'), 180000],
            [t('**جمع توزیع‌شده**', '**Distributed total**'), t('بودجه پایه', 'Base budget'), t('', ''), t('', ''), t('', ''), 8000000],
            [t('`AFE-2025-014`', '`AFE-2025-014`'), t('ذخیره احتیاطی توزیع‌نشده', 'Undistributed contingency'), t('1', '1'), t('', ''), t('', ''), 800000],
            [t('**مبلغ کل AFE**', '**Total AFE amount**'), t('', ''), t('', ''), t('', ''), t('', ''), 8800000],
          ],
        },
        {
          type: 'diagram',
          id: 'wbs-tree',
          caption: t(
            'WBS چاه AR-07 در میانه حفاری: روی هر عنصر کلیک کنید تا بودجه، تعهد و هزینه واقعی آن و کد هزینه‌اش را ببینید؛ جمع هر سطح از سطح پایین‌تر به دست می‌آید.',
            'The AR-07 WBS midway through drilling: click any element to see its budget, commitments, actual cost and cost code; each level is the roll-up of the level below.',
          ),
        },
        {
          type: 'p',
          text: t(
            'کنترل قاعده 100٪: `.01` = 380,000 + 240,000 = 620,000؛ `.02` = 4,900,000؛ `.03` = 1,100,000 + 780,000 = 1,880,000؛ `.04` = 420,000 + 180,000 = 600,000. جمع سطح 2: 620,000 + 4,900,000 + 1,880,000 + 600,000 = 8,000,000، برابر بودجه پایه. به ذخیره احتیاطی دست نزده‌ایم؛ صاحب AFE فقط وقتی ریسکی رخ دهد، با سند **انتقال بودجه** بخشی از آن را به عنصر نیازمند منتقل می‌کند.',
            'Checking the 100% rule: `.01` = 380,000 + 240,000 = 620,000; `.02` = 4,900,000; `.03` = 1,100,000 + 780,000 = 1,880,000; `.04` = 420,000 + 180,000 = 600,000. Level 2 total: 620,000 + 4,900,000 + 1,880,000 + 600,000 = 8,000,000, equal to the base budget. Contingency is untouched; only when a risk materialises does the AFE owner move part of it to the element that needs it, with a **budget transfer** document.',
          ),
        },
        {
          type: 'table',
          caption: t('فرهنگ‌نامه WBS: عنصر `AFE-2025-014.02.03`', 'WBS dictionary: element `AFE-2025-014.02.03`'),
          head: [t('فیلد', 'Field'), t('محتوا', 'Content')],
          rows: [
            [t('نام و پدر', 'Name and parent'), t('لوله‌های جداری و مغزی (OCTG)؛ زیر `.02` حفاری', 'Casing and tubulars (OCTG); under `.02` Drilling')],
            [t('دامنه کار (شامل)', 'Scope (includes)'), t('تأمین لوله‌های جداری سطحی، میانی و تولیدی و لوله مغزی، اتصالات، کفشک و تجهیزات شناور، بازرسی شخص ثالث لوله‌ها', 'Supply of surface, intermediate and production casing and tubing, couplings, shoes and float equipment, third-party pipe inspection')],
            [t('شامل نیست', 'Excludes'), t('زمان دکل (`.02.01`)، خدمات سیمان‌کاری و راندن لوله (`.02.02`)، تجهیزات تکمیل درون چاه (`.03.01`)', 'Rig time (`.02.01`), cementing and casing-running services (`.02.02`), downhole completion equipment (`.03.01`)')],
            [t('تحویل‌دادنی', 'Deliverable'), t('لوله‌های بازرسی‌شده با گواهی مواد، تحویل‌شده به سکوی دکل', 'Inspected pipe with mill test certificates, delivered to the rig site')],
            [t('مسئول و مرکز مسئول', 'Owner and responsible centre'), t('سرپرست حفاری؛ `CC-ARY-DRL`', 'Drilling superintendent; `CC-ARY-DRL`')],
            [t('کدهای پیش‌فرض', 'Default codes'), t('عنصر هزینه 6140، فعالیت `DRL`، R، توسعه', 'Cost element 6140, activity `DRL`, R, Development')],
            [t('بودجه و زمان', 'Budget and timing'), t('1,350,000؛ سفارش 16 هفته پیش از شروع حفاری، مصرف روزهای 5 تا 38 حفاری', '1,350,000; order 16 weeks before spud, used on drilling days 5 to 38')],
            [t('بسته تدارکاتی', 'Procurement package'), t('سفارش خرید لوله (قلم دیرتحویل) از قرارداد چارچوب OCTG؛ دریافت با رسید کالا (GRN) در انبار مرکزی', 'Pipe PO (long-lead item) under the OCTG framework agreement; received with a goods received note (GRN) at the Central Warehouse')],
            [t('معیار پذیرش', 'Acceptance criteria'), t('گزارش بازرسی تأییدشده و تطبیق شماره ذوب با گواهی مواد', 'Approved inspection report and heat numbers matched to the certificates')],
          ],
        },
        {
          type: 'table',
          caption: t('وضعیت WBS در میانه حفاری (همان ارقام نمودار، جمع سطح 2)', 'WBS status midway through drilling (same figures as the diagram, level 2 roll-up)'),
          head: [t('عنصر', 'Element'), t('بودجه', 'Budget'), t('هزینه واقعی', 'Actual'), t('تعهدات', 'Commitments'), t('جمع مصرف‌شده', 'Assigned'), t('در دسترس', 'Available')],
          numericCols: [1, 2, 3, 4, 5],
          rows: [
            [t('`.01` آماده‌سازی', '`.01` Site preparation'), 620000, 598000, 0, 598000, 22000],
            [t('`.02` حفاری', '`.02` Drilling'), 4900000, 3410000, 1230000, 4640000, 260000],
            [t('`.03` تکمیل و آزمایش', '`.03` Completion and testing'), 1880000, 0, 840000, 840000, 1040000],
            [t('`.04` مدیریت پروژه', '`.04` Project management'), 600000, 310000, 0, 310000, 290000],
            [t('**جمع**', '**Total**'), 8000000, 4318000, 2070000, 6388000, 1612000],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('چرا ذخیره احتیاطی توزیع نمی‌شود؟', 'Why is contingency not distributed?'),
          text: t(
            'اگر 800,000 ذخیره بین بسته‌ها پخش شود، هر بسته «جای اضافه» دارد و مصرف آن دیده نمی‌شود. وقتی ذخیره در سطح 1 بماند، هر برداشت از آن یک تصمیم آشکار و ثبت‌شده است: چه کسی، چرا و برای کدام عنصر. شرکا هم در گزارش ماهانه می‌بینند چقدر از ذخیره مانده است.',
            'If the 800,000 contingency is spread across packages, each package has hidden “spare room” and its use cannot be seen. When contingency stays at level 1, every draw on it is a visible, recorded decision: who, why and for which element. Partners also see in the monthly report how much contingency is left.',
          ),
        },
      ],
    },
    {
      id: 'compressor-wbs',
      title: t('WBS ارتقای ایستگاه تقویت فشار', 'The WBS for the Compressor Station Upgrade'),
      blocks: [
        {
          type: 'p',
          text: t(
            'پروژه `AFE-2025-021` یک واحد کمپرسور سوم به ایستگاه تقویت فشار اضافه می‌کند. بودجه پایه 5,500,000 و ذخیره احتیاطی 500,000 است؛ جمع 6,000,000، برابر رقم WP&B. چنین پروژه تأسیساتی را می‌توان به دو شکل شکست: **مرحله‌محور** (مهندسی، تأمین، ساخت، راه‌اندازی) یا **تحویل‌محور** (بسته کمپرسور، کولر، سامانه کنترل، ...). مسار پترولیوم سطح 2 را تحویل‌محور گذاشته و فقط جایی که لازم بوده، مراحل را در سطح 3 آورده است.',
            'Project `AFE-2025-021` adds a third compressor unit to the compressor station. The base budget is 5,500,000 and contingency 500,000; total 6,000,000, equal to the WP&B figure. A facilities project like this can be broken down two ways: **by phase** (engineering, procurement, construction, commissioning) or **by deliverable** (compressor package, cooler, control system, …). Masar Petroleum made level 2 deliverable-oriented and brought phases in at level 3 only where needed.',
          ),
        },
        {
          type: 'table',
          caption: t('WBS پروژه `AFE-2025-021` ارتقای ایستگاه تقویت فشار', 'WBS of project `AFE-2025-021` compressor station upgrade'),
          head: [t('کد', 'Code'), t('عنصر', 'Element'), t('عنصر هزینه', 'Cost element'), t('روش تأمین', 'Procurement route'), t('بودجه', 'Budget')],
          numericCols: [4],
          rows: [
            [t('`.01`', '`.01`'), t('بسته کمپرسور واحد 3', 'Compressor unit 3 package'), t('', ''), t('', ''), 3200000],
            [t('`.01.01`', '`.01.01`'), t('مهندسی و مدارک سازنده', 'Engineering and vendor data'), t('6330 خدمات مهندسی', '6330 Engineering services'), t('قرارداد خدمات مهندسی (SES)', 'Engineering services contract (SES)'), 200000],
            [t('`.01.02`', '`.01.02`'), t('تأمین بسته کمپرسور (دیرتحویل)', 'Package supply (long-lead)'), t('6310 تجهیزات تأسیسات', '6310 Facilities equipment'), t('سفارش خرید با پرداخت مرحله‌ای؛ GRN در محل', 'PO with milestone payments; GRN at site'), 2700000],
            [t('`.01.03`', '`.01.03`'), t('نصب', 'Installation'), t('6320 قراردادهای ساخت و نصب', '6320 Construction contracts'), t('قرارداد ساخت (SES)', 'Construction contract (SES)'), 300000],
            [t('`.02`', '`.02`'), t('کولر گازی و اسکرابر', 'Gas cooler and scrubber'), t('6310 / 6320', '6310 / 6320'), t('سفارش خرید و قرارداد ساخت', 'PO and construction contract'), 700000],
            [t('`.03`', '`.03`'), t('ارتقای سامانه کنترل و ایمنی', 'Control and safety systems upgrade'), t('6310 / 6330', '6310 / 6330'), t('سفارش خرید و خدمات مهندسی', 'PO and engineering services'), 600000],
            [t('`.04`', '`.04`'), t('برق و تأمین توان', 'Electrical and power supply'), t('6310 / 6320', '6310 / 6320'), t('سفارش خرید و قرارداد ساخت', 'PO and construction contract'), 400000],
            [t('`.05`', '`.05`'), t('اتصالات و لوله‌کشی', 'Tie-ins and piping'), t('6320', '6320'), t('قرارداد ساخت (SES)', 'Construction contract (SES)'), 300000],
            [t('`.06`', '`.06`'), t('پیش‌راه‌اندازی و راه‌اندازی', 'Commissioning and start-up'), t('6340 خدمات راه‌اندازی', '6340 Commissioning services'), t('خدمات سازنده (SES)', 'Vendor services (SES)'), 200000],
            [t('`.07`', '`.07`'), t('مدیریت پروژه', 'Project management'), t('6210 هزینه کارکنان تخصیصی', '6210 Allocated staff costs'), t('کارکنان مسار پترولیوم', 'Masar Petroleum staff'), 100000],
            [t('**جمع توزیع‌شده**', '**Distributed total**'), t('', ''), t('', ''), t('', ''), 5500000],
            [t('`AFE-2025-021`', '`AFE-2025-021`'), t('ذخیره احتیاطی توزیع‌نشده', 'Undistributed contingency'), t('', ''), t('', ''), 500000],
            [t('**مبلغ کل AFE**', '**Total AFE amount**'), t('', ''), t('', ''), t('', ''), 6000000],
          ],
        },
        {
          type: 'p',
          text: t(
            'کنترل قاعده 100٪: `.01` = 200,000 + 2,700,000 + 300,000 = 3,200,000؛ و سطح 2: 3,200,000 + 700,000 + 600,000 + 400,000 + 300,000 + 200,000 + 100,000 = 5,500,000. با ذخیره: 5,500,000 + 500,000 = 6,000,000.',
            'Checking the 100% rule: `.01` = 200,000 + 2,700,000 + 300,000 = 3,200,000; and level 2: 3,200,000 + 700,000 + 600,000 + 400,000 + 300,000 + 200,000 + 100,000 = 5,500,000. With contingency: 5,500,000 + 500,000 = 6,000,000.',
          ),
        },
        {
          type: 'compare',
          left: {
            title: t('مرحله‌محور در سطح 2', 'Phase-based level 2'),
            items: [
              t('مهندسی، تأمین، ساخت، راه‌اندازی', 'Engineering, procurement, construction, commissioning'),
              t('با قراردادهای EPC و برنامه زمان‌بندی خوب جور است', 'Fits EPC contracts and the schedule well'),
              t('بهای تمام‌شده هر جزء دارایی (کمپرسور، کولر، سامانه کنترل) را جدا نشان نمی‌دهد', 'Does not show the cost of each asset component (compressor, cooler, control system) separately'),
              t('در تسویه باید هزینه را دستی بین اجزای دارایی پخش کرد', 'At settlement cost must be split across asset components by hand'),
            ],
          },
          right: {
            title: t('تحویل‌محور در سطح 2 (انتخاب مسار پترولیوم)', 'Deliverable-based level 2 (Masar Petroleum’s choice)'),
            items: [
              t('هر عنصر یک جزء دارایی با عمر مفید خودش است', 'Each element is an asset component with its own useful life'),
              t('تسویه به دارایی‌ها و اجزای آن (طبق IAS 16) مستقیم است', 'Settlement to assets and their components (under IAS 16) is direct'),
              t('قلم دیرتحویل (`.01.02`) هنوز جدا و قابل پیگیری است', 'The long-lead item (`.01.02`) is still separate and trackable'),
              t('مراحل در سطح 3 یا در نرم‌افزار زمان‌بندی دیده می‌شوند', 'Phases show up at level 3 or in the scheduling tool'),
            ],
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل: اقلام دیرتحویل عنصر خودشان را دارند', 'In practice: long-lead items get their own element'),
          text: t(
            'بسته کمپرسور ممکن است ده‌ها هفته زمان ساخت داشته باشد. چون عنصر جدای `.01.02` دارد، سفارش آن بلافاصله پس از تصویب AFE ثبت می‌شود، تعهد بزرگش در همان عنصر دیده می‌شود، پرداخت‌های مرحله‌ای سازنده روی آن کنترل می‌شود و واحد تدارکات پیگیری ساخت و حمل را با همان کد گزارش می‌کند.',
            'A compressor package can take dozens of weeks to build. Because it has its own element `.01.02`, its PO is placed right after AFE approval, its large commitment shows in that element, the vendor’s milestone payments are controlled against it, and procurement reports expediting and shipping under the same code.',
          ),
        },
      ],
    },
    {
      id: 'linking',
      title: t('پیوند WBS با AFE، کدهای هزینه، زمان‌بندی و تدارکات', 'Linking the WBS to the AFE, Cost Codes, Schedule and Procurement'),
      blocks: [
        {
          type: 'p',
          text: t(
            'WBS ستون فقرات پروژه است: یک ساختار، با چند کاربرد. اگر برآورد AFE، برنامه زمان‌بندی، سفارش‌های خرید و گزارش هزینه هر کدام تقسیم‌بندی خودشان را داشته باشند، هیچ‌کس نمی‌تواند پیشرفت کار را با هزینه مقایسه کند. پس همه آن‌ها باید به همان کدهای WBS گره بخورند.',
            'The WBS is the project’s backbone: one structure, many uses. If the AFE estimate, the schedule, the purchase orders and the cost report each used their own breakdown, nobody could compare progress with cost. So all of them must be tied to the same WBS codes.',
          ),
        },
        {
          type: 'table',
          caption: t('نقشه پیوندهای WBS', 'Map of WBS links'),
          head: [t('پیوند با', 'Linked to'), t('چگونه', 'How'), t('نمونه در AR-07', 'AR-07 example')],
          rows: [
            [t('AFE', 'AFE'), t('ردیف‌های برآورد AFE همان عناصر سطح 2 و 3 است؛ مبلغ مصوب AFE بودجه سطح 1 می‌شود', 'The AFE estimate lines are the level 2 and 3 elements; the approved AFE amount becomes the level 1 budget'), t('8,800,000 روی `AFE-2025-014`', '8,800,000 on `AFE-2025-014`')],
            [t('کدهای هزینه', 'Cost codes'), t('هر عنصر ثبت، عنصر هزینه، کد فعالیت، R/N، طبقه و مرکز مسئول پیش‌فرض دارد', 'Each posting element carries a default cost element, activity code, R/N, category and responsible centre'), t('`.02.03` ← 6140، `DRL`، R، توسعه', '`.02.03` → 6140, `DRL`, R, Development')],
            [t('زمان‌بندی', 'Schedule'), t('فعالیت‌های نرم‌افزار زمان‌بندی به بسته‌های کاری وصل‌اند؛ تاریخ‌ها مبنای زمان‌بندی بودجه می‌شوند', 'Activities in the scheduling tool link to work packages; their dates drive budget phasing'), t('راندن رشته 9⅝ اینچ ← `.02.03` و `.02.02`', 'Run 9⅝-inch string → `.02.03` and `.02.02`')],
            [t('تدارکات', 'Procurement'), t('درخواست و سفارش خرید کد WBS دارند؛ GRN و SES آن را به ارث می‌برند', 'Requisitions and POs carry the WBS code; the GRN and SES inherit it'), t('سفارش لوله روی `.02.03`؛ سفارش آزمایش چاه روی `.03.02`', 'Pipe PO on `.02.03`; well-testing order on `.03.02`')],
            [t('انبار', 'Warehouse'), t('رزرو و حواله کالا از انبار به عنصر WBS', 'Reservations and goods issues from stock to the WBS element'), t('حواله لوله از انبار مرکزی به `.02.03`', 'Pipe issued from the Central Warehouse to `.02.03`')],
            [t('گزارش شرکا', 'Partner reporting'), t('گزارش هزینه AFE در سطح 2 هر ماه به کمیته عملیات', 'AFE cost report at level 2 to the operating committee every month'), t('جدول وضعیت همین درس', 'This lesson’s status table')],
            [t('حسابداری دارایی', 'Asset accounting'), t('در پایان، هر عنصر به دارایی یا جزء دارایی تسویه می‌شود', 'At the end, each element settles to an asset or asset component'), t('کل AR-07 ← دارایی «چاه AR-07» در 1520', 'All of AR-07 → asset “Well AR-07” in 1520')],
          ],
        },
        {
          type: 'steps',
          items: [
            { title: t('درخواست خرید', 'Requisition'), text: t('مهندس حفاری درخواست لوله را روی `.02.03` ثبت می‌کند.', 'The drilling engineer raises the pipe requisition on `.02.03`.') },
            { title: t('کنترل بودجه', 'Budget check'), text: t('ERP مبلغ را با بودجه در دسترس `.02.03` مقایسه می‌کند.', 'The ERP checks the amount against the available budget on `.02.03`.') },
            { title: t('سفارش خرید', 'Purchase order'), text: t('سفارش تعهد می‌سازد؛ هنوز سند مالی ندارد.', 'The PO creates a commitment; no financial document yet.') },
            { title: t('رسید کالا (GRN)', 'Goods received note (GRN)'), text: t('لوله‌ها پس از بازرسی با GRN وارد انبار مرکزی می‌شوند و برای AR-07 رزرو می‌مانند.', 'After inspection the pipe enters the Central Warehouse with a GRN and stays reserved for AR-07.') },
            { title: t('حواله به WBS', 'Issue to the WBS'), text: t('وقتی لوله به سکوی دکل می‌رود، حواله انبار هزینه را روی `.02.03` می‌نشاند.', 'When the pipe goes to the rig site, the goods issue puts the cost on `.02.03`.') },
            { title: t('گزارش', 'Report'), text: t('گزارش AFE، گزارش شرکا و پیش‌بینی هزینه همه با همان کد به‌روز می‌شوند.', 'The AFE report, partner report and cost forecast all update under the same code.') },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('سه ساختار، صفر کنترل', 'Three structures, zero control'),
          text: t(
            'یک خطای رایج: مهندس هزینه برآورد را با یک تقسیم‌بندی، برنامه‌ریز زمان‌بندی را با تقسیم‌بندی دیگر و کارشناس خرید سفارش‌ها را روی یک WBS کلی ثبت می‌کند. در پایان ماه هیچ گزارشی نمی‌گوید «حفاری 70٪ پیشرفت کرده و 75٪ بودجه‌اش مصرف شده است». یک WBS، چند نما.',
            'A common error: the cost engineer builds the estimate with one breakdown, the planner builds the schedule with another, and buyers post orders to one catch-all WBS. At month-end no report can say “drilling is 70% complete and has used 75% of its budget”. One WBS, many views.',
          ),
        },
      ],
    },
    {
      id: 'wbs-in-erp',
      title: t('WBS در ERP: انواع عنصر و وضعیت‌ها', 'The WBS in the ERP: Element Types and Statuses'),
      blocks: [
        {
          type: 'p',
          text: t(
            'در ERP هر پروژه یک **سربرگ پروژه** دارد (کد شرکت `MP01`، مرکز سود `PC-ARYA`، نوع پروژه که طبقه هزینه را تعیین می‌کند، تاریخ‌ها و مسئول) و زیر آن عناصر WBS. هر عنصر چند **ویژگی** دارد که می‌گوید با آن چه کاری می‌توان کرد. این‌ها داده پایه‌اند و کنترل پروژه آن‌ها را از روی الگو می‌سازد.',
            'In the ERP each project has a **project header** (company code `MP01`, profit centre `PC-ARYA`, project type which sets the cost category, dates and owner) with the WBS elements beneath it. Each element has a few **attributes** that say what can be done with it. These are master data, and project controls creates them from the template.',
          ),
        },
        {
          type: 'table',
          caption: t('ویژگی‌های عنصر WBS', 'WBS element attributes'),
          head: [t('ویژگی', 'Attribute'), t('معنا', 'Meaning'), t('در مسار پترولیوم', 'At Masar Petroleum')],
          rows: [
            [t('عنصر برنامه‌ریزی', 'Planning element'), t('می‌تواند هزینه برنامه‌ریزی‌شده و بودجه بگیرد', 'Can hold planned cost and budget'), t('سطح 1 و 2 (و 3)', 'Levels 1 and 2 (and 3)')],
            [t('عنصر تخصیص هزینه (ثبت)', 'Account assignment (posting) element'), t('سفارش، GRN، SES، حواله و سند مالی می‌تواند روی آن بنشیند', 'Orders, GRNs, SESs, goods issues and journals can be posted to it'), t('فقط سطح 3', 'Level 3 only')],
            [t('عنصر صورت‌حساب', 'Billing element'), t('درآمد و صورت‌حساب به اشخاص ثالث روی آن ثبت می‌شود', 'Revenue and third-party billing are posted to it'), t('به‌ندرت؛ مثلاً خدمات به یک میدان همسایه', 'Rarely; for example services to a neighbouring field')],
          ],
        },
        {
          type: 'table',
          caption: t('وضعیت‌های WBS و کارهای مجاز', 'WBS statuses and allowed transactions'),
          head: [t('وضعیت', 'Status'), t('برنامه و بودجه', 'Plan and budget'), t('درخواست و سفارش جدید', 'New requisitions and POs'), t('GRN، SES، حواله و فاکتور', 'GRN, SES, issues and invoices'), t('تسویه', 'Settlement')],
          rows: [
            [t('ایجادشده', 'Created'), t('مجاز', 'Allowed'), t('ممنوع', 'Blocked'), t('ممنوع', 'Blocked'), t('ممنوع', 'Blocked')],
            [t('آزادشده', 'Released'), t('مجاز', 'Allowed'), t('مجاز (با کنترل بودجه)', 'Allowed (budget-checked)'), t('مجاز', 'Allowed'), t('مجاز', 'Allowed')],
            [t('تکمیل فنی', 'Technically complete'), t('فقط برگشت بودجه', 'Budget return only'), t('ممنوع', 'Blocked'), t('مجاز برای سفارش‌های موجود', 'Allowed for existing orders'), t('مجاز', 'Allowed')],
            [t('بسته', 'Closed'), t('ممنوع', 'Blocked'), t('ممنوع', 'Blocked'), t('ممنوع', 'Blocked'), t('ممنوع (همه چیز تسویه شده)', 'Blocked (all settled)')],
          ],
        },
        {
          type: 'steps',
          items: [
            { title: t('ساخت از الگو', 'Create from the template'), text: t('کنترل پروژه پروژه را از الگوی WBS چاه می‌سازد؛ وضعیت «ایجادشده».', 'Project controls creates the project from the well WBS template; status “Created”.') },
            { title: t('کدها و برنامه هزینه', 'Codes and cost plan'), text: t('کدهای پیش‌فرض و برآورد هر بسته وارد می‌شود؛ این همان پیوست برآورد AFE است.', 'Default codes and each package’s estimate are entered; this is the AFE estimate annex.') },
            { title: t('بودجه پس از تصویب AFE', 'Budget after AFE approval'), text: t('پس از تصویب AFE، بودجه 8,000,000 بین عناصر توزیع و 800,000 در سطح 1 نگه داشته می‌شود.', 'After AFE approval, 8,000,000 is distributed to the elements and 800,000 held at level 1.') },
            { title: t('آزادسازی', 'Release'), text: t('وضعیت «آزادشده»: سفارش‌ها و هزینه‌ها مجاز و کنترل بودجه فعال می‌شود.', 'Status “Released”: orders and costs are allowed and budget control goes live.') },
            { title: t('تکمیل فنی، تسویه و بستن', 'Technical completion, settlement and closing'), text: t('پس از پایان کار، «تکمیل فنی»، سپس تسویه به دارایی و در پایان «بسته».', 'When the work is done, “Technically complete”, then settlement to the asset and finally “Closed”.') },
          ],
        },
        {
          type: 'h',
          text: t('مالی چه می‌بیند؟', 'What does Finance see?'),
        },
        {
          type: 'journal',
          title: t('ثبت‌هایی که ERP روی WBS چاه AR-07 می‌سازد', 'Postings the ERP creates on the AR-07 WBS'),
          entries: [
            {
              date: t('روز 3', 'Day 3'),
              lines: [
                { account: ac.inventory, debit: 600000 },
                { account: ac.grir, credit: 600000 },
              ],
              memo: t('رسید کالا (GRN): 240 شاخه لوله جداری 9⅝ اینچ، هر شاخه 2,500، وارد انبار مرکزی و رزروشده برای AR-07.', 'Goods received note (GRN): 240 joints of 9⅝-inch casing at 2,500 each into the Central Warehouse, reserved for AR-07.'),
            },
            {
              date: t('روز 9', 'Day 9'),
              lines: [
                { account: ac.aucCasing, debit: 600000 },
                { account: ac.inventory, credit: 600000 },
              ],
              memo: t('حواله انبار: 240 شاخه به سکوی دکل؛ هزینه روی `.02.03` می‌نشیند (`DRL`، R، توسعه).', 'Goods issue: 240 joints to the rig site; the cost lands on `.02.03` (`DRL`, R, Development).'),
            },
            {
              date: t('روز 20', 'Day 20'),
              lines: [
                { account: ac.aucRig, debit: 840000 },
                { account: ac.grir, credit: 840000 },
              ],
              memo: t('پذیرش برگه ثبت خدمات (SES): 10 روز دکل، 10 × 84,000.', 'Service entry sheet (SES) accepted: 10 rig days, 10 × 84,000.'),
            },
            {
              date: t('روز 26', 'Day 26'),
              lines: [
                { account: ac.grir, debit: 840000 },
                { account: ac.ap, credit: 840000 },
              ],
              memo: t('فاکتور پیمانکار دکل پس از تطبیق با سفارش و SES؛ هزینه WBS تغییر نمی‌کند.', 'Rig contractor invoice after matching with the PO and SES; WBS cost does not change.'),
            },
          ],
        },
        {
          type: 'p',
          text: t(
            'به ترتیب ثبت‌ها دقت کنید. چون لوله برای انبار خریده شده، GRN فقط موجودی را بالا می‌برد و هزینه هنگام **حواله** روی `.02.03` می‌نشیند. اگر سفارش مستقیماً به WBS تخصیص داده شده بود (همان‌طور که در درس «ساختار کدهای هزینه» دیدیم)، خود GRN هزینه را روی WBS می‌نشاند. برای خدمات همیشه **پذیرش SES** لحظه تبدیل تعهد به هزینه واقعی است؛ فاکتور فقط GR/IR را با حساب‌های پرداختنی تسویه می‌کند. در پایان پروژه، تسویه، مانده 1510 را به 1520 دارایی‌های نفت و گاز می‌برد؛ این مرحله در درس «چرخه عمر AFE» می‌آید.',
            'Notice the order of the postings. Because the pipe was bought for stock, the GRN only raises inventory and the cost lands on `.02.03` at the **goods issue**. Had the PO been charged directly to the WBS (as in the lesson on the cost-coding structure), the GRN itself would have put the cost on the WBS. For services, **SES acceptance** is always the moment a commitment becomes actual cost; the invoice only clears GR/IR against accounts payable. At the end of the project, settlement moves the 1510 balance to 1520 Oil and gas properties; that step comes in the lesson “The AFE Lifecycle”.',
          ),
        },
        {
          type: 'h',
          text: t('اشتباه‌های رایج', 'Common mistakes'),
        },
        {
          type: 'list',
          items: [
            t('**WBS بیش از حد ریز**: صدها عنصر برای یک چاه یعنی کدگذاری کند، خطای زیاد و گزارشی که کسی نمی‌خواند.', '**An over-detailed WBS**: hundreds of elements for one well mean slow coding, many errors and reports nobody reads.'),
            t('**عنصر «متفرقه»**: هر چیزی که جای مشخص ندارد آنجا می‌رود و قاعده 100٪ عملاً شکسته می‌شود.', '**A “miscellaneous” element**: anything without a clear home lands there and the 100% rule is effectively broken.'),
            t('**ثبت روی عنصرهای سطح 1 یا 2**: هزینه باید روی بسته کاری (سطح 3) بنشیند؛ وگرنه نمی‌دانیم کدام بسته مصرف کرده است.', '**Posting to level 1 or 2 elements**: cost must sit on a work package (level 3); otherwise nobody knows which package consumed it.'),
            t('**پخش ذخیره احتیاطی در بسته‌ها**: مصرف ذخیره نامرئی می‌شود.', '**Spreading contingency into packages**: its consumption becomes invisible.'),
            t('**تغییر ساختار پس از تصویب AFE**: مقایسه با برآورد مصوب از دست می‌رود؛ اگر لازم شد، فقط عنصر جدید اضافه کنید و مستند کنید.', '**Restructuring after AFE approval**: the comparison with the approved estimate is lost; if needed, only add new elements and document them.'),
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
          text: t('تمرین‌ها را به ترتیب حل کنید؛ ارقام فرضی‌اند.', 'Work through the exercises in order; all figures are illustrative.'),
        },
        {
          type: 'exercise',
          title: t('قاعده 100٪ در WBS خط جریان AR-12', 'The 100% rule on the AR-12 flowline WBS'),
          difficulty: 'easy',
          problem: t(
            'پیش‌نویس WBS پروژه `AFE-2026-005` (خط جریان جدید از چاه AR-12 تا جداکننده) بودجه پایه 1,800,000 دارد. فرهنگ‌نامه می‌گوید پروژه شامل لوله و اتصالات، ساخت و نصب، بازرسی و آزمایش هیدرواستاتیک، و مدیریت پروژه است. (الف) آیا قاعده 100٪ رعایت شده است؟ (ب) چه چیزی کم است؟ (ج) در فرهنگ‌نامه قرارداد ساخت «شامل آزمایش هیدرواستاتیک» نوشته شده است؛ چه مشکلی پیش می‌آید؟',
            'The draft WBS of project `AFE-2026-005` (a new flowline from well AR-12 to the separator) has a base budget of 1,800,000. The dictionary says the project covers pipe and fittings, construction and installation, inspection and hydrotest, and project management. (a) Is the 100% rule met? (b) What is missing? (c) The dictionary also says the construction contract “includes the hydrotest”; what problem does that cause?',
          ),
          given: {
            head: [t('کد', 'Code'), t('عنصر', 'Element'), t('بودجه', 'Budget')],
            numericCols: [2],
            rows: [
              [t('`.01`', '`.01`'), t('لوله و اتصالات', 'Line pipe and fittings'), 700000],
              [t('`.02`', '`.02`'), t('ساخت و نصب', 'Construction and installation'), 900000],
              [t('`.03`', '`.03`'), t('بازرسی و آزمایش هیدرواستاتیک', 'Inspection and hydrotest'), 150000],
            ],
          },
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('جمع فرزندان', 'Sum the children'), text: t('700,000 + 900,000 + 150,000 = 1,750,000.', '700,000 + 900,000 + 150,000 = 1,750,000.') },
                { title: t('(الف) مقایسه با پدر', '(a) Compare with the parent'), text: t('1,800,000 − 1,750,000 = 50,000 کسری؛ قاعده 100٪ رعایت نشده است.', '1,800,000 − 1,750,000 = 50,000 short; the 100% rule is not met.') },
                { title: t('(ب) عنصر گمشده', '(b) The missing element'), text: t('مدیریت پروژه در دامنه هست اما عنصر ندارد: `.04` مدیریت پروژه با بودجه 50,000 اضافه شود.', 'Project management is in scope but has no element: add `.04` Project management with a budget of 50,000.') },
                { title: t('(ج) هم‌پوشانی', '(c) The overlap'), text: t('آزمایش هیدرواستاتیک هم در `.02` و هم در `.03` آمده است؛ بودجه‌اش دو بار حساب می‌شود و معلوم نیست SES آن روی کدام عنصر بنشیند. یکی را با «شامل نیست» اصلاح کنید.', 'The hydrotest sits in both `.02` and `.03`; its budget is counted twice and nobody knows which element its SES should hit. Fix one of them with an “excludes”.') },
              ],
            },
          ],
          answer: t('خیر؛ 50,000 کسری است. عنصر `.04` مدیریت پروژه (50,000) اضافه و مرز آزمایش هیدرواستاتیک بین `.02` و `.03` روشن شود.', 'No; it is 50,000 short. Add `.04` Project management (50,000) and settle the hydrotest boundary between `.02` and `.03`.'),
        },
        {
          type: 'exercise',
          title: t('از فهرست فعالیت به WBS تحویل‌محور', 'From an activity list to a deliverable WBS'),
          difficulty: 'medium',
          problem: t(
            'برای پروژه ایستگاه پمپ تزریق آب، کارشناس برآورد فهرستی فعالیت‌محور داده است. آن را به یک WBS سطح 2 تحویل‌محور تبدیل کنید و بودجه هر عنصر و جمع کل را حساب کنید.',
            'For a water-injection pump station project, the estimator has supplied an activity-based list. Turn it into a deliverable-oriented level 2 WBS and calculate each element’s budget and the total.',
          ),
          given: {
            head: [t('ردیف برآورد', 'Estimate line'), t('مبلغ', 'Amount')],
            numericCols: [1],
            rows: [
              [t('مهندسی پمپ‌ها', 'Pump engineering'), 80000],
              [t('خرید پمپ‌ها', 'Buy pumps'), 1200000],
              [t('نصب پمپ‌ها', 'Install pumps'), 150000],
              [t('مهندسی مخزن آب', 'Water tank engineering'), 30000],
              [t('ساخت مخزن آب', 'Build water tank'), 420000],
              [t('لوله‌کشی و اتصالات', 'Piping and tie-ins'), 260000],
              [t('برق و کنترل', 'Electrical and controls'), 310000],
              [t('راه‌اندازی', 'Commissioning'), 90000],
              [t('مدیریت پروژه', 'Project management'), 160000],
            ],
          },
          hint: t('ردیف‌هایی را که یک تحویل‌دادنی می‌سازند زیر یک عنصر جمع کنید.', 'Group the lines that produce one deliverable under one element.'),
          solution: [
            {
              type: 'table',
              head: [t('عنصر سطح 2', 'Level 2 element'), t('ردیف‌ها', 'Lines'), t('بودجه', 'Budget')],
              numericCols: [2],
              rows: [
                [t('`.01` پمپ‌های تزریق', '`.01` Injection pumps'), t('80,000 + 1,200,000 + 150,000', '80,000 + 1,200,000 + 150,000'), 1430000],
                [t('`.02` مخزن آب', '`.02` Water tank'), t('30,000 + 420,000', '30,000 + 420,000'), 450000],
                [t('`.03` لوله‌کشی و اتصالات', '`.03` Piping and tie-ins'), t('260,000', '260,000'), 260000],
                [t('`.04` برق و کنترل', '`.04` Electrical and controls'), t('310,000', '310,000'), 310000],
                [t('`.05` راه‌اندازی', '`.05` Commissioning'), t('90,000', '90,000'), 90000],
                [t('`.06` مدیریت پروژه', '`.06` Project management'), t('160,000', '160,000'), 160000],
                [t('**جمع**', '**Total**'), t('جمع همه ردیف‌ها', 'All lines'), 2700000],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: t(
                'مهندسی، خرید و نصب پمپ‌ها حالا بسته‌های سطح 3 زیر `.01` هستند. هزینه هر جزء دارایی (پمپ‌ها، مخزن) در پایان مستقیم به دارایی خودش تسویه می‌شود. کنترل: 1,430,000 + 450,000 + 260,000 + 310,000 + 90,000 + 160,000 = 2,700,000.',
                'Pump engineering, supply and installation are now level 3 packages under `.01`. Each asset component’s cost (pumps, tank) settles straight to its own asset at the end. Check: 1,430,000 + 450,000 + 260,000 + 310,000 + 90,000 + 160,000 = 2,700,000.',
              ),
            },
          ],
          answer: t('شش عنصر سطح 2: پمپ‌ها 1,430,000، مخزن 450,000، لوله‌کشی 260,000، برق و کنترل 310,000، راه‌اندازی 90,000، مدیریت پروژه 160,000؛ جمع 2,700,000.', 'Six level 2 elements: pumps 1,430,000, tank 450,000, piping 260,000, electrical and controls 310,000, commissioning 90,000, project management 160,000; total 2,700,000.'),
        },
        {
          type: 'exercise',
          title: t('مجاز یا ممنوع؟', 'Allowed or blocked?'),
          difficulty: 'medium',
          problem: t('برای هر رویداد بگویید ERP آن را می‌پذیرد یا رد می‌کند و چرا.', 'For each event, say whether the ERP accepts or rejects it, and why.'),
          given: {
            head: [t('رویداد', 'Event'), t('عنصر و وضعیت', 'Element and status')],
            rows: [
              [t('1. درخواست خرید لوله جداری', '1. Requisition for casing'), t('`.02.03`، ایجادشده', '`.02.03`, Created')],
              [t('2. ورود برنامه هزینه آزمایش چاه', '2. Entering the well-testing cost plan'), t('`.03.02`، ایجادشده', '`.03.02`, Created')],
              [t('3. پذیرش SES روزهای دکل', '3. Accepting an SES for rig days'), t('`.02.01`، آزادشده', '`.02.01`, Released')],
              [t('4. سفارش جدید خدمات آزمایش', '4. New order for testing services'), t('`.03.02`، تکمیل فنی', '`.03.02`, Technically complete')],
              [t('5. فاکتور نهایی یک سفارش موجود', '5. Final invoice for an existing order'), t('`.03.01`، تکمیل فنی', '`.03.01`, Technically complete')],
              [t('6. سند اصلاحی', '6. A correction journal'), t('`.01.02`، بسته', '`.01.02`, Closed')],
            ],
          },
          solution: [
            {
              type: 'table',
              head: [t('رویداد', 'Event'), t('نتیجه', 'Result'), t('دلیل', 'Reason')],
              rows: [
                [t('1', '1'), t('ممنوع', 'Blocked'), t('عنصر هنوز آزاد نشده است', 'The element is not released yet')],
                [t('2', '2'), t('مجاز', 'Allowed'), t('برنامه‌ریزی در وضعیت ایجادشده مجاز است', 'Planning is allowed in Created status')],
                [t('3', '3'), t('مجاز', 'Allowed'), t('عنصر آزادشده هزینه واقعی می‌پذیرد', 'A released element accepts actual cost')],
                [t('4', '4'), t('ممنوع', 'Blocked'), t('تکمیل فنی تعهد جدید نمی‌پذیرد', 'Technically complete accepts no new commitments')],
                [t('5', '5'), t('مجاز', 'Allowed'), t('فاکتور سفارش‌های موجود هنوز مجاز است', 'Invoices for existing orders are still allowed')],
                [t('6', '6'), t('ممنوع', 'Blocked'), t('عنصر بسته هیچ ثبتی نمی‌پذیرد؛ فقط با بازگشایی مصوب', 'A closed element takes no postings; only after an approved reopening')],
              ],
            },
          ],
          answer: t('مجاز: 2، 3 و 5. ممنوع: 1، 4 و 6.', 'Allowed: 2, 3 and 5. Blocked: 1, 4 and 6.'),
        },
        {
          type: 'exercise',
          title: t('جمع‌زدن WBS و تصمیم درباره ذخیره احتیاطی', 'Rolling up the WBS and deciding on contingency'),
          difficulty: 'hard',
          problem: t(
            'ارقام سطح 3 چاه AR-07 در میانه حفاری در جدول آمده است (همان ارقام نمودار). (الف) بودجه، هزینه واقعی، تعهدات و مانده در دسترس عنصر `.02` حفاری را حساب کنید. (ب) مهندس حفاری برآورد می‌کند تا پایان حفاری 400,000 بیش از تعهدات فعلی دیگر لازم است. چه مقدار باید از ذخیره احتیاطی منتقل شود و چقدر ذخیره می‌ماند؟',
            'The AR-07 level 3 figures midway through drilling are in the table (the same figures as the diagram). (a) Calculate the budget, actual, commitments and available amount of element `.02` Drilling. (b) The drilling engineer estimates that another 400,000 beyond current commitments is needed to finish drilling. How much must be transferred from contingency, and how much contingency is left?',
          ),
          given: {
            head: [t('عنصر', 'Element'), t('بودجه', 'Budget'), t('هزینه واقعی', 'Actual'), t('تعهدات', 'Commitments')],
            numericCols: [1, 2, 3],
            rows: [
              [t('`.02.01` نرخ روزانه دکل', '`.02.01` Rig day rate'), 2100000, 1520000, 580000],
              [t('`.02.02` خدمات حفاری', '`.02.02` Drilling services'), 1450000, 980000, 390000],
              [t('`.02.03` لوله‌های جداری و مغزی', '`.02.03` Casing and tubulars'), 1350000, 910000, 260000],
            ],
          },
          hint: t('در دسترس = بودجه − واقعی − تعهدات. نیاز اضافه را با در دسترس مقایسه کنید.', 'Available = budget − actual − commitments. Compare the extra need with what is available.'),
          solution: [
            {
              type: 'table',
              caption: t('جمع سطح 2', 'Level 2 roll-up'),
              head: [t('عنصر', 'Element'), t('بودجه', 'Budget'), t('واقعی', 'Actual'), t('تعهدات', 'Commitments'), t('در دسترس', 'Available')],
              numericCols: [1, 2, 3, 4],
              rows: [
                [t('`.02.01`', '`.02.01`'), 2100000, 1520000, 580000, 0],
                [t('`.02.02`', '`.02.02`'), 1450000, 980000, 390000, 80000],
                [t('`.02.03`', '`.02.03`'), 1350000, 910000, 260000, 180000],
                [t('**`.02` حفاری**', '**`.02` Drilling**'), 4900000, 3410000, 1230000, 260000],
              ],
            },
            {
              type: 'steps',
              items: [
                { title: t('(الف) جمع‌ها', '(a) Totals'), text: t('بودجه 2,100,000 + 1,450,000 + 1,350,000 = 4,900,000؛ واقعی 3,410,000؛ تعهدات 1,230,000؛ در دسترس 4,900,000 − 3,410,000 − 1,230,000 = 260,000.', 'Budget 2,100,000 + 1,450,000 + 1,350,000 = 4,900,000; actual 3,410,000; commitments 1,230,000; available 4,900,000 − 3,410,000 − 1,230,000 = 260,000.') },
                { title: t('(ب) کسری', '(b) Shortfall'), text: t('نیاز 400,000 و در دسترس 260,000 است: 400,000 − 260,000 = 140,000 کسری.', 'Need 400,000, available 260,000: 400,000 − 260,000 = 140,000 short.') },
                { title: t('انتقال از ذخیره', 'Transfer from contingency'), text: t('صاحب AFE با سند انتقال بودجه 140,000 از سطح 1 به `.02` منتقل می‌کند. ذخیره باقی‌مانده: 800,000 − 140,000 = 660,000.', 'The AFE owner moves 140,000 from level 1 to `.02` with a budget transfer document. Contingency left: 800,000 − 140,000 = 660,000.') },
                { title: t('یک نکته', 'One note'), text: t('`.02.01` هیچ جایی ندارد (در دسترس صفر)؛ اگر روزهای دکل بیشتر شود، اولین سفارش بعدی در کنترل بودجه گیر می‌کند.', '`.02.01` has no room at all (zero available); if rig days increase, the next order will stop at the budget check.') },
              ],
            },
          ],
          answer: t('`.02`: بودجه 4,900,000، واقعی 3,410,000، تعهدات 1,230,000، در دسترس 260,000؛ انتقال 140,000 از ذخیره و 660,000 ذخیره باقی می‌ماند.', '`.02`: budget 4,900,000, actual 3,410,000, commitments 1,230,000, available 260,000; transfer 140,000 from contingency, leaving 660,000.'),
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
            t('WBS کل دامنه کار را به تحویل‌دادنی‌ها و بسته‌های کاری می‌شکند؛ برنامه زمان‌بندی، نمودار سازمانی یا کدینگ حساب‌ها نیست.', 'A WBS breaks the total scope into deliverables and work packages; it is not a schedule, an org chart or a chart of accounts.'),
            t('قاعده 100٪: فرزندان هر عنصر دقیقاً کار و بودجه پدرشان‌اند؛ هم‌پوشانی بودجه دوبل و جاافتادگی هزینه بی‌جا می‌سازد.', 'The 100% rule: an element’s children are exactly its work and budget; overlaps double the budget and gaps leave costs homeless.'),
            t('عناصر را تحویل‌محور، بدون هم‌پوشانی، با جزئیات مناسب و هماهنگ با اجزای دارایی طراحی کنید و مرزها را در فرهنگ‌نامه بنویسید.', 'Design elements deliverable-oriented, non-overlapping, at the right detail and aligned with asset components, and write boundaries in the dictionary.'),
            t('AR-07: بودجه پایه 8,000,000 در چهار عنصر سطح 2 و ذخیره 800,000 در سطح 1؛ ایستگاه: 5,500,000 در هفت عنصر و ذخیره 500,000.', 'AR-07: base 8,000,000 in four level 2 elements plus 800,000 contingency at level 1; station: 5,500,000 in seven elements plus 500,000 contingency.'),
            t('WBS به AFE، کدهای هزینه، زمان‌بندی، تدارکات، انبار، گزارش شرکا و حسابداری دارایی وصل است: یک ساختار، چند نما.', 'The WBS links the AFE, cost codes, schedule, procurement, warehouse, partner reports and asset accounting: one structure, many views.'),
            t('در ERP عناصر برنامه‌ریزی، ثبت و صورت‌حساب‌اند و وضعیت‌های ایجادشده، آزادشده، تکمیل فنی و بسته تعیین می‌کنند چه کاری مجاز است.', 'In the ERP elements are planning, posting and billing elements, and the statuses created, released, technically complete and closed decide what is allowed.'),
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            { term: t('ساختار شکست کار (WBS)', 'Work breakdown structure (WBS)'), def: t('تقسیم سلسله‌مراتبی کل دامنه کار پروژه به تحویل‌دادنی‌ها و بسته‌های کاری.', 'A hierarchical breakdown of a project’s total scope into deliverables and work packages.') },
            { term: t('بسته کاری (Work package)', 'Work package'), def: t('پایین‌ترین سطح WBS که برآورد، مسئول، زمان و هزینه واقعی دارد.', 'The lowest WBS level, with its own estimate, owner, timing and actual cost.') },
            { term: t('قاعده 100٪', '100% rule'), def: t('WBS کل دامنه کار را می‌پوشاند و فرزندان هر عنصر با هم دقیقاً برابر پدرشان‌اند.', 'The WBS covers all of the scope, and each element’s children together equal exactly their parent.') },
            { term: t('فرهنگ‌نامه WBS', 'WBS dictionary'), def: t('شرح هر عنصر: دامنه، شامل نیست، مسئول، بودجه، زمان، کدها، تدارکات و معیار پذیرش.', 'A description of each element: scope, exclusions, owner, budget, timing, codes, procurement and acceptance criteria.') },
            { term: t('حساب کنترل (Control account)', 'Control account'), def: t('سطحی از WBS که بودجه، زمان‌بندی و مسئولیت در آن به هم می‌رسند.', 'The WBS level where budget, schedule and responsibility meet.') },
            { term: t('ذخیره احتیاطی (Contingency)', 'Contingency'), def: t('مبلغی از AFE برای ریسک‌های شناخته‌شده که در سطح 1 نگه داشته و با انتقال بودجه مصرف می‌شود.', 'Part of the AFE for known risks, held at level 1 and used through budget transfers.') },
            { term: t('عنصر تخصیص هزینه', 'Account assignment element'), def: t('عنصر WBS که هزینه، سفارش، GRN و SES می‌تواند روی آن ثبت شود.', 'A WBS element that can receive costs, orders, GRNs and SESs.') },
            { term: t('تکمیل فنی (Technically complete)', 'Technically complete'), def: t('وضعیتی که سفارش جدید را می‌بندد اما فاکتورهای باقی‌مانده و تسویه را مجاز می‌گذارد.', 'A status that blocks new orders but still allows remaining invoices and settlement.') },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: t('قاعده 100٪ در طراحی WBS چه می‌گوید؟', 'What does the 100% rule say in WBS design?'),
      options: [
        t('هر عنصر باید 100٪ بودجه‌اش را مصرف کند', 'Every element must use 100% of its budget'),
        t('WBS کل دامنه کار را می‌پوشاند و فرزندان هر عنصر با هم دقیقاً برابر کار پدرشان‌اند', 'The WBS covers the whole scope, and each element’s children together equal exactly their parent’s work'),
        t('100٪ هزینه‌ها باید روی سطح 1 ثبت شود', '100% of costs must be posted at level 1'),
        t('ذخیره احتیاطی باید 100٪ توزیع شود', 'Contingency must be 100% distributed'),
      ],
      answer: 1,
      explain: t(
        'قاعده 100٪ درباره پوشش کامل دامنه است، نه مصرف بودجه. نتیجه‌اش این است که بودجه پدر برابر جمع فرزندان است. هزینه روی بسته‌های سطح 3 ثبت می‌شود و ذخیره احتیاطی عمداً توزیع نمی‌شود.',
        'The 100% rule is about complete scope coverage, not budget use. Its consequence is that a parent’s budget equals the sum of its children. Costs post to level 3 packages, and contingency is deliberately not distributed.',
      ),
    },
    {
      q: t('بسته‌های `.01.01` و `.01.02` به ترتیب 380,000 و 240,000 بودجه دارند. بودجه عنصر `.01` چقدر است؟', 'Packages `.01.01` and `.01.02` have budgets of 380,000 and 240,000. What is element `.01`’s budget?'),
      options: [t('380,000', '380,000'), t('140,000', '140,000'), t('620,000', '620,000'), t('760,000', '760,000')],
      answer: 2,
      explain: t('بودجه پدر = جمع فرزندان: 380,000 + 240,000 = 620,000. 140,000 تفاضل است و معنایی ندارد.', 'Parent budget = sum of children: 380,000 + 240,000 = 620,000. 140,000 is the difference and means nothing here.'),
    },
    {
      q: t('کدام نام عنصر WBS تحویل‌محور است؟', 'Which WBS element name is deliverable-oriented?'),
      options: [
        t('خرید لوله', 'Buy pipe'),
        t('هزینه‌های ماه مهر', 'October costs'),
        t('کارهای متفرقه', 'Miscellaneous works'),
        t('لوله‌های جداری و مغزی (OCTG)', 'Casing and tubulars (OCTG)'),
      ],
      answer: 3,
      explain: t(
        'عنصر تحویل‌محور با اسم یک تحویل‌دادنی نام می‌گیرد. «خرید لوله» یک فعالیت است، «ماه مهر» یک دوره زمانی، و «متفرقه» قاعده 100٪ را عملاً می‌شکند.',
        'A deliverable-oriented element is named after a deliverable. “Buy pipe” is an activity, “October” is a time period, and “miscellaneous” effectively breaks the 100% rule.',
      ),
    },
    {
      q: t('بودجه پایه یک چاه 8,000,000 و ذخیره احتیاطی 10٪ بودجه پایه است. مبلغ کل AFE چقدر است؟', 'A well’s base budget is 8,000,000 and contingency is 10% of the base. What is the total AFE amount?'),
      options: [t('8,800,000', '8,800,000'), t('8,000,000', '8,000,000'), t('8,080,000', '8,080,000'), t('7,200,000', '7,200,000')],
      answer: 0,
      explain: t('ذخیره = 8,000,000 × 10٪ = 800,000؛ AFE = 8,000,000 + 800,000 = 8,800,000. گزینه 7,200,000 ذخیره را کم کرده است.', 'Contingency = 8,000,000 × 10% = 800,000; AFE = 8,000,000 + 800,000 = 8,800,000. 7,200,000 subtracts the contingency instead.'),
    },
    {
      q: t('کاربرد اصلی فرهنگ‌نامه WBS چیست؟', 'What is the main use of a WBS dictionary?'),
      options: [
        t('ترجمه نام عناصر به زبان‌های دیگر', 'Translating element names into other languages'),
        t('تعریف دقیق دامنه، مرز (شامل نیست)، مسئول، بودجه، کدها و معیار پذیرش هر عنصر', 'Defining each element’s scope, boundary (exclusions), owner, budget, codes and acceptance criteria'),
        t('ثبت تاریخ‌های هر فعالیت', 'Recording the dates of each activity'),
        t('فهرست حساب‌های دفتر کل پروژه', 'Listing the project’s GL accounts'),
      ],
      answer: 1,
      explain: t('فرهنگ‌نامه مرز هر عنصر را روشن می‌کند و جلوی هم‌پوشانی را می‌گیرد. تاریخ فعالیت‌ها در برنامه زمان‌بندی است و حساب‌ها در کدینگ حساب‌ها.', 'The dictionary makes each element’s boundary clear and prevents overlaps. Activity dates live in the schedule and accounts in the chart of accounts.'),
    },
    {
      q: t('عنصر WBS در وضعیت «تکمیل فنی» است. کدام کار هنوز مجاز است؟', 'A WBS element is “technically complete”. What is still allowed?'),
      options: [
        t('ثبت فاکتور نهایی یک سفارش موجود', 'Posting the final invoice of an existing order'),
        t('صدور سفارش خرید جدید', 'Issuing a new purchase order'),
        t('ثبت درخواست خرید جدید', 'Raising a new requisition'),
        t('افزایش بودجه برای کار جدید', 'Increasing the budget for new work'),
      ],
      answer: 0,
      explain: t('تکمیل فنی یعنی کار تمام شده و تعهد جدید ممنوع است، اما فاکتورهای باقی‌مانده سفارش‌های موجود و تسویه هنوز مجازند. برای کار جدید باید عنصر دوباره آزاد شود.', 'Technically complete means the work is done and new commitments are blocked, but remaining invoices on existing orders and settlement are still allowed. New work would need the element released again.'),
    },
    {
      q: t('عنصر `.02` بودجه 4,900,000، هزینه واقعی 3,410,000 و تعهدات 1,230,000 دارد. مانده در دسترس چقدر است؟', 'Element `.02` has a budget of 4,900,000, actual 3,410,000 and commitments 1,230,000. What is available?'),
      options: [t('1,490,000', '1,490,000'), t('260,000', '260,000'), t('3,670,000', '3,670,000'), t('1,230,000', '1,230,000')],
      answer: 1,
      explain: t('4,900,000 − 3,410,000 − 1,230,000 = 260,000. گزینه 1,490,000 تعهدات را نادیده گرفته است.', '4,900,000 − 3,410,000 − 1,230,000 = 260,000. 1,490,000 ignores the commitments.'),
    },
    {
      q: t('در مسار پترولیوم هزینه‌ها روی کدام عناصر WBS ثبت می‌شوند؟', 'At Masar Petroleum, which WBS elements receive costs?'),
      options: [
        t('فقط سطح 1، تا گزارش ساده بماند', 'Level 1 only, to keep reporting simple'),
        t('هر سطحی که کاربر ترجیح دهد', 'Any level the user prefers'),
        t('سطح 2، چون حساب کنترل است', 'Level 2, because it is the control account'),
        t('بسته‌های سطح 3 که عنصر تخصیص هزینه‌اند', 'Level 3 packages, which are the account assignment elements'),
      ],
      answer: 3,
      explain: t('هزینه روی بسته‌های کاری سطح 3 می‌نشیند و به سطح‌های بالاتر جمع می‌شود. سطح 2 حساب کنترل و محل گزارش است، نه محل ثبت. ثبت روی سطح‌های بالا معلوم نمی‌کند کدام بسته مصرف کرده است.', 'Cost sits on level 3 work packages and rolls up. Level 2 is the control account and reporting level, not the posting level. Posting higher up hides which package consumed the money.'),
    },
    {
      q: t('چرا مسار پترولیوم سطح 2 WBS ارتقای ایستگاه تقویت فشار را تحویل‌محور (بسته کمپرسور، کولر، سامانه کنترل...) گذاشته است؟', 'Why did Masar Petroleum make level 2 of the compressor station upgrade WBS deliverable-based (compressor package, cooler, control system…)?'),
      options: [
        t('چون ERP ساختار مرحله‌محور را نمی‌پذیرد', 'Because the ERP cannot handle a phase-based structure'),
        t('تا تعداد عناصر بیشتر شود', 'To have more elements'),
        t('چون هر عنصر به یک جزء دارایی می‌خورد و تسویه و سرمایه‌ای کردن مستقیم می‌شود', 'Because each element matches an asset component, making settlement and capitalisation direct'),
        t('چون قراردادهای EPC را ممنوع می‌کند', 'Because it prohibits EPC contracts'),
      ],
      answer: 2,
      explain: t('ساختار تحویل‌محور هزینه هر جزء دارایی را جدا جمع می‌کند و تسویه به اجزای دارایی با عمرهای مفید متفاوت را ساده می‌کند. ساختار مرحله‌محور ممکن و رایج است، اما این مزیت را ندارد.', 'A deliverable-based structure collects each asset component’s cost separately, which simplifies settlement to components with different useful lives. A phase-based structure is possible and common, but lacks this advantage.'),
    },
    {
      q: t('بودجه پایه پروژه ایستگاه 5,500,000 است. جمع عناصر سطح 2 به جز «راه‌اندازی» 5,300,000 است. بودجه عنصر راه‌اندازی طبق قاعده 100٪ چقدر است؟', 'The station project’s base budget is 5,500,000. Level 2 elements other than “commissioning” total 5,300,000. Under the 100% rule, what is the commissioning budget?'),
      options: [t('500,000', '500,000'), t('300,000', '300,000'), t('5,500,000', '5,500,000'), t('200,000', '200,000')],
      answer: 3,
      explain: t('5,500,000 − 5,300,000 = 200,000. گزینه 500,000 ذخیره احتیاطی است که جزء بودجه پایه نیست.', '5,500,000 − 5,300,000 = 200,000. 500,000 is the contingency, which is not part of the base budget.'),
    },
  ],
}
