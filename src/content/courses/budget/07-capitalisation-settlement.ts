import type { L, Lesson } from '../../types'

const t = (fa: string, en: string): L => ({ fa, en })

const ac = {
  auc: (wbs: string) => t(`1510 دارایی‌های در جریان تکمیل (WBS \`${wbs}\`)`, `1510 Assets under construction (WBS \`${wbs}\`)`),
  well: t('1520 دارایی‌های نفت و گاز: چاه AR-07 (`FA-52007`)', '1520 Oil and gas properties: well AR-07 (`FA-52007`)'),
  training: t('5130 هزینه ایمنی، بهداشت، محیط زیست و آموزش (`CC-ARY-PRD`)', '5130 HSE and training expense (`CC-ARY-PRD`)'),
  ee: t('1530 دارایی‌های اکتشاف و ارزیابی', '1530 Exploration and evaluation assets'),
  dry: t('5410 هزینه اکتشاف: چاه خشک', '5410 Exploration expense: dry hole'),
  grir: t('2120 حساب واسط رسید کالا و فاکتور (GR/IR)', '2120 GR/IR clearing account'),
  ap: t('2110 حساب‌های پرداختنی', '2110 Accounts payable'),
}

export const lesson: Lesson = {
  slug: 'capitalisation-settlement',
  number: 7,
  level: 'advanced',
  minutes: 32,
  icon: 'Building2',
  tone: 'asset',
  title: t('سرمایه‌ای کردن و تسویه هزینه پروژه', 'Capitalisation and Settlement'),
  summary: t(
    'هزینه‌ای که روی WBS جمع شده باید سرانجام به خانه نهایی‌اش برسد: دارایی ثابت، هزینه دوره یا گیرنده‌ای دیگر. در این درس دارایی در جریان تکمیل، قاعده تسویه، تسویه دوره‌ای، جزئی و نهایی، چاه موفق و چاه خشک، نگاشت هزینه‌ها به طبقه‌های بازیافت هزینه، ثبت‌هایی که ERP می‌زند و بستن AFE و WBS را روی چاه AR-07 می‌آموزید.',
    'Cost collected on a WBS must eventually reach its final home: a fixed asset, a period expense or another receiver. This lesson covers assets under construction, settlement rules, periodic, partial and final settlement, successful wells and dry holes, mapping costs to cost-recovery categories, the postings the ERP makes, and closing the AFE and WBS, all on well AR-07.',
  ),
  objectives: [
    t('توضیح دهید چه هزینه‌ای در دارایی در جریان تکمیل (AUC) سرمایه‌ای می‌شود و چه هزینه‌ای نه، و استهلاک از کی شروع می‌شود.', 'Explain which costs are capitalised in assets under construction (AUC) and which are not, and when depreciation starts.'),
    t('قاعده تسویه را با گیرنده‌های دارایی، مرکز هزینه و سهم درصدی یا عددهای هم‌ارز تعریف کنید.', 'Define a settlement rule with asset and cost-centre receivers and percentage or equivalence-number shares.'),
    t('تسویه دوره‌ای، سرمایه‌ای کردن جزئی، تسویه نهایی و تسویه بعدی را با ثبت‌های ERP انجام دهید.', 'Carry out periodic settlement, partial capitalisation, final settlement and subsequent settlement with the ERP postings.'),
    t('رفتار حسابداری چاه موفق و چاه خشک را در روش تلاش‌های موفق و بهای تمام‌شده کامل مقایسه کنید.', 'Compare the accounting for successful wells and dry holes under the successful efforts and full cost methods.'),
    t('هزینه‌ها را به طبقه‌های بازیافت هزینه نگاشت کنید و AFE و WBS را درست ببندید.', 'Map costs to cost-recovery categories and close the AFE and WBS correctly.'),
  ],
  sections: [
    {
      id: 'why-capitalise',
      title: t('از هزینه پروژه تا دارایی ثابت', 'From Project Cost to Fixed Asset'),
      blocks: [
        {
          type: 'p',
          text: t(
            'اوایل ماه 4 است. چاه AR-07 تکمیل و آزمایش شده و به منیفولد تولید موجود وصل شده است؛ فقط چند هزینه پایانی (آخرین گزارش آزمایش چاه، نظارت و بستن مجوزها) مانده است. مدیر تولید خوشحال است، اما مدیر مالی مسار پترولیوم می‌پرسد: «چرا چاهی که تولید می‌کند هنوز در دارایی در جریان تکمیل است و استهلاک ندارد؟» حسابرس شریک الف هم می‌خواهد بداند از هزینه AFE چه مقدار به دارایی چاه و چه مقدار به هزینه دوره رفته است. پاسخ هر دو پرسش در **تسویه** (Settlement) است.',
            'It is early month 4. Well AR-07 has been completed, tested and tied into the existing production manifold; only a few final costs (the last well-testing report, supervision and permit close-out) remain. The production manager is pleased, but Masar Petroleum’s finance manager asks: “Why is a producing well still in assets under construction with no depreciation?” Partner A’s auditor also wants to know how much of the AFE cost has gone to the well asset and how much to period expense. The answer to both questions is **settlement**.',
          ),
        },
        {
          type: 'p',
          text: t(
            '**سرمایه‌ای کردن** (Capitalisation) یعنی ثبت یک هزینه به‌عنوان دارایی در ترازنامه به‌جای هزینه در صورت سود و زیان. **تسویه** کاری است که ERP با آن هزینه جمع‌شده روی یک شیء هزینه موقت (مثل عنصر WBS) را به **گیرنده** (Receiver) نهایی‌اش منتقل می‌کند: یک دارایی ثابت، یک مرکز هزینه یا یک WBS دیگر. WBS ظرف موقت است؛ دارایی ثابت خانه دائمی.',
            '**Capitalisation** means recording a cost as an asset on the balance sheet instead of an expense in the income statement. **Settlement** is the ERP process that moves cost collected on a temporary cost object (such as a WBS element) to its final **receiver**: a fixed asset, a cost centre or another WBS. The WBS is a temporary container; the fixed asset is the permanent home.',
          ),
        },
        {
          type: 'diagram',
          id: 'asset-lifecycle',
          caption: t(
            'چرخه عمر دارایی: برنامه و بودجه، خرید و ساخت روی WBS، سرمایه‌ای کردن با تسویه، بهره‌برداری و نگهداری، و کنارگذاری. این درس روی گام سرمایه‌ای کردن تمرکز دارد.',
            'The asset life cycle: plan and budget, acquire and build on a WBS, capitalise through settlement, operate and maintain, and dispose. This lesson focuses on the capitalise step.',
          ),
        },
        {
          type: 'list',
          items: [
            t('**صورت‌های مالی**: استهلاک فقط از وقتی شروع می‌شود که دارایی آماده بهره‌برداری است و از AUC به دارایی نهایی منتقل شده است.', '**Financial statements**: depreciation starts only when the asset is ready for use and has moved from AUC to the final asset.'),
            t('**ثبت دارایی و نگهداری**: دارایی نهایی به تجهیز و مکان عملیاتی در ماژول نگهداری وصل می‌شود تا هزینه تعمیرات بعدی روی همان چاه دیده شود.', '**Asset register and maintenance**: the final asset links to the equipment and functional location in the maintenance module, so later repair costs are seen on the same well.'),
            t('**شرکا و بازیافت هزینه**: هر ریال AFE باید در یک طبقه بازیافت (توسعه، عملیاتی، اکتشاف) و با نشانگر R یا N دیده شود.', '**Partners and cost recovery**: every unit of AFE cost must appear in a recovery category (Development, Operating, Exploration) with an R or N flag.'),
            t('**مالیات**: مبنای استهلاک مالیاتی همان بهای سرمایه‌ای‌شده است؛ قواعد آن را از قوانین روز بررسی کنید.', '**Tax**: the tax depreciation base is the capitalised cost; check the current rules for its treatment.'),
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('ارقام ناخالص و سهم مسار پترولیوم', 'Gross figures and Masar Petroleum’s share'),
          text: t(
            'چاه AR-07 در مشارکت است (مسار پترولیوم 50٪، شریک الف 30٪، شریک ب 20٪؛ سهم‌ها فرضی‌اند). ارقام این درس **ناخالص** (100٪) است، همان‌طور که در گزارش AFE دیده می‌شود. در دفاتر خود مسار پترولیوم، صورت‌حساب ماهانه شرکا سهم 50٪ آن‌ها را از 1510 به حساب دریافتنی از شرکا می‌برد؛ پس AUC و دارایی نهایی در دفاتر مسار فقط سهم 50٪ را نشان می‌دهند. این جزئیات در درس بودجه و پروژه در ERP: سناریوی کامل آمده است.',
            'Well AR-07 is in the joint venture (Masar Petroleum 50%, Partner A 30%, Partner B 20%; illustrative shares). The figures in this lesson are **gross** (100%), as they appear on the AFE report. In Masar Petroleum’s own books, the monthly partner billing moves the partners’ 50% out of 1510 to the partner receivable, so AUC and the final assets in Masar’s books carry only its 50% share. The detail is in the lesson on budget and projects in the ERP, end to end.',
          ),
        },
      ],
    },
    {
      id: 'auc',
      title: t('دارایی در جریان تکمیل (AUC)', 'Assets Under Construction (AUC)'),
      blocks: [
        {
          type: 'p',
          text: t(
            '**دارایی در جریان تکمیل** (AUC: Assets Under Construction؛ حساب 1510) جایی است که بهای دارایی در حال ساخت جمع می‌شود تا آماده بهره‌برداری شود. AUC مستهلک نمی‌شود، چون هنوز به کار گرفته نشده است. طبق استاندارد IAS 16، بهای دارایی شامل قیمت خرید و هر هزینه‌ای است که **مستقیماً** برای رساندن دارایی به محل و شرایط لازم برای بهره‌برداری صرف شده باشد.',
            '**Assets under construction** (AUC; account 1510) is where the cost of an asset being built is collected until it is ready for use. AUC is not depreciated, because it is not yet in use. Under IAS 16 the cost of an asset includes its purchase price and any cost **directly attributable** to bringing it to the location and condition needed for it to operate.',
          ),
        },
        {
          type: 'compare',
          left: {
            title: t('سرمایه‌ای می‌شود', 'Capitalised'),
            items: [
              t('آماده‌سازی محل، جاده دسترسی و انتقال دکل', 'Site preparation, access road and rig move'),
              t('روزکار دکل و خدمات حفاری، سیمان‌کاری و گل', 'Rig day rate and drilling, cementing and mud services'),
              t('لوله جداری، لوله مغزی و تجهیزات تکمیل', 'Casing, tubing and completion equipment'),
              t('آزمایش چاه لازم برای اثبات کارکرد درست', 'Well testing needed to prove it works properly'),
              t('ساعات مهندسان داخلی که مستقیماً روی پروژه کار کرده‌اند', 'Hours of in-house engineers who worked directly on the project'),
              t('برآورد اولیه هزینه برچیدن و بازسازی محل (ذخیره)', 'The initial estimate of dismantling and site restoration (provision)'),
            ],
          },
          right: {
            title: t('هزینه دوره می‌شود', 'Expensed'),
            items: [
              t('سربار عمومی و اداری دفتر مرکزی', 'Head-office general and administrative overhead'),
              t('آموزش کارکنان، از جمله آموزش اپراتورها برای تحویل چاه', 'Staff training, including operator training at handover'),
              t('اتلاف غیرعادی، مثل دوباره‌کاری به دلیل سهل‌انگاری پیمانکار', 'Abnormal waste, such as rework caused by contractor negligence'),
              t('هزینه‌های پس از آماده بهره‌برداری شدن دارایی', 'Costs after the asset is ready for use'),
              t('تعمیر و نگهداری عادی دارایی‌های در حال کار', 'Routine repair and maintenance of operating assets'),
            ],
          },
        },
        {
          type: 'p',
          text: t(
            'در مسار پترولیوم، طبق طراحی کدینگ هزینه، هر سند روی یک عنصر WBS سرمایه‌ای (GRN، SES، حواله انبار، کارکرد) مستقیماً بدهکار 1510 با همان WBS ثبت می‌شود و عنصر هزینه (6110 تا 6220) نوع هزینه را نشان می‌دهد. حساب‌های هزینه دوره (5110 تا 5130) روی WBS سرمایه‌ای مجاز نیستند. پس اگر بخشی از کار پروژه ذاتاً هزینه دوره است، مثل آموزش اپراتورها، اول روی WBS در 1510 می‌نشیند و قاعده تسویه آن را به مرکز هزینه می‌برد.',
            'At Masar Petroleum, by the design of its cost coding, every document on a capital WBS element (GRN, SES, goods issue, timesheet) posts straight to 1510 with that WBS, and the cost element (6110 to 6220) shows the type of cost. Period-expense accounts (5110 to 5130) are not allowed on a capital WBS. So if part of the project’s work is by nature a period expense, such as operator training, it first lands in 1510 on the WBS and the settlement rule moves it to a cost centre.',
          ),
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل: دو طراحی رایج', 'In practice: two common designs'),
          text: t(
            'در برخی ERPها هزینه پروژه ابتدا روی WBS با حساب‌های هزینه‌ای پروژه ثبت می‌شود و **تسویه دوره‌ای** پایان هر ماه آن را با ثبت «بدهکار 1510، بستانکار حساب تسویه هزینه پروژه» به AUC می‌برد. در طراحی مسار پترولیوم این گام لازم نیست، چون هزینه از همان ابتدا در 1510 می‌نشیند. نتیجه در ترازنامه پایان ماه یکی است؛ فقط باید بدانید سیستم شما کدام طراحی را دارد تا گزارش‌ها را درست بخوانید.',
            'In some ERPs project costs first post to project expense-type accounts on the WBS, and a month-end **periodic settlement** moves them to AUC with “debit 1510, credit project-cost settlement account”. Masar Petroleum’s design does not need this step, because the cost lands in 1510 from the start. The month-end balance sheet is the same either way; you only need to know which design your system uses to read the reports correctly.',
          ),
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('در عمل: ایران', 'In practice: Iran'),
          text: t(
            'در ایران، استاندارد حسابداری شماره 11 (دارایی‌های ثابت مشهود) همان منطق IAS 16 را دارد: بهای تمام‌شده شامل مخارج مستقیماً مرتبط است و استهلاک از زمان آماده بهره‌برداری شروع می‌شود؛ شرکت‌هایی که IFRS را به کار می‌برند مستقیماً از IAS 16 پیروی می‌کنند. استهلاک مالیاتی تابع جدول استهلاک قانون مالیات‌های مستقیم است و ممکن است با استهلاک دفتری فرق داشته باشد؛ نرخ‌ها و روش‌ها را از مقررات روز بررسی کنید.',
            'In Iran, Iranian Accounting Standard No. 11 (property, plant and equipment) follows the same logic as IAS 16: cost includes directly attributable spending and depreciation starts when the asset is ready for use; companies reporting under IFRS apply IAS 16 directly. Tax depreciation follows the depreciation table of the Direct Taxes Act and may differ from book depreciation; check the current rates and methods.',
          ),
        },
      ],
    },
    {
      id: 'settlement-rules',
      title: t('قاعده تسویه: هزینه به کجا می‌رود؟', 'Settlement Rules: Where Does the Cost Go?'),
      blocks: [
        {
          type: 'p',
          text: t(
            '**قاعده تسویه** (Settlement rule) مجموعه‌ای از سطرهای توزیع روی هر عنصر WBS است که می‌گوید هزینه آن به کدام **گیرنده** و با چه سهمی برود. گیرنده می‌تواند دارایی در جریان تکمیل، دارایی ثابت نهایی، مرکز هزینه (هزینه دوره)، حساب کل یا WBS دیگری باشد. سهم با درصد، مبلغ یا **عددهای هم‌ارز** (Equivalence numbers؛ مثلاً طول خط لوله هر چاه) تعیین می‌شود. قاعده تسویه پیش از نخستین ثبت روی WBS تعریف می‌شود، نه در روز بستن.',
            'A **settlement rule** is a set of distribution lines on each WBS element saying to which **receiver** its cost goes, and in what share. A receiver can be AUC, a final fixed asset, a cost centre (period expense), a GL account or another WBS. Shares are set by percentage, amount or **equivalence numbers** (for example each well’s pipeline length). The rule is defined before the first posting on the WBS, not on closing day.',
          ),
        },
        {
          type: 'table',
          caption: t('قاعده تسویه `AFE-2025-014` و هزینه نهایی هر عنصر', 'Settlement rule of `AFE-2025-014` and the final cost of each element'),
          head: [t('عنصر WBS', 'WBS element'), t('هزینه نهایی', 'Final cost'), t('گیرنده', 'Receiver'), t('سهم', 'Share')],
          rows: [
            [t('`.01.01` عملیات عمرانی محل و جاده', '`.01.01` Location and road civil works'), 371000, t('`FA-52007` چاه AR-07', '`FA-52007` well AR-07'), t('100٪', '100%')],
            [t('`.01.02` جابه‌جایی و استقرار دکل', '`.01.02` Rig move and mobilisation'), 227000, t('`FA-52007`', '`FA-52007`'), t('100٪', '100%')],
            [t('`.02.01` نرخ روزانه دکل (29 روز)', '`.02.01` Rig day rate (29 days)'), 2436000, t('`FA-52007`', '`FA-52007`'), t('100٪', '100%')],
            [t('`.02.02` خدمات حفاری', '`.02.02` Drilling services'), 1434000, t('`FA-52007`', '`FA-52007`'), t('100٪', '100%')],
            [t('`.02.03` لوله‌های جداری و مغزی', '`.02.03` Casing and tubulars'), 1170000, t('`FA-52007`', '`FA-52007`'), t('100٪', '100%')],
            [t('`.03.01` تجهیزات تکمیل چاه', '`.03.01` Completion equipment'), 1080000, t('`FA-52007`', '`FA-52007`'), t('100٪', '100%')],
            [t('`.03.02` آزمایش چاه', '`.03.02` Well testing'), 760000, t('سطر مبلغی: 40,000 به `CC-ARY-PRD` با حساب 5130؛ بقیه به `FA-52007`', 'Amount line: 40,000 to `CC-ARY-PRD` on account 5130; the rest to `FA-52007`'), t('40,000 و بقیه', '40,000 and rest')],
            [t('`.04.01` نظارت و تیم پروژه', '`.04.01` Supervision and project team'), 440000, t('`FA-52007`', '`FA-52007`'), t('100٪', '100%')],
            [t('`.04.02` بیمه و مجوزها', '`.04.02` Insurance and permits'), 180000, t('`FA-52007`', '`FA-52007`'), t('100٪', '100%')],
            [t('جمع', 'Total'), 8098000, t('چاه 8,058,000؛ هزینه دوره 40,000', 'Well 8,058,000; period expense 40,000'), blank()],
          ],
          numericCols: [1],
        },
        {
          type: 'p',
          text: t(
            'قرارداد آزمایش چاه یک سطر 40,000 برای آموزش اپراتورها و تحویل چاه داشت که با SES روی `.03.02` نشست. چون IAS 16 آموزش را جزو بهای دارایی نمی‌داند، قاعده تسویه این عنصر یک **سطر مبلغی** دارد که همین 40,000 را به مرکز هزینه `CC-ARY-PRD` و حساب 5130 می‌برد و بقیه را به چاه. هزینه نهایی AFE برابر 8,098,000 است: 8,058,000 به دارایی چاه و 40,000 به هزینه دوره. AR-07 یک دارایی است؛ اگر AFE اجزایی با عمر یا روش استهلاک متفاوت داشت (مثل یک خط لوله تازه)، هر جزء دارایی جدا و سطر جدا در قاعده تسویه می‌گرفت.',
            'The well-testing contract had a 40,000 line for operator training and well handover, which landed on `.03.02` through an SES. Because IAS 16 does not include training in an asset’s cost, this element’s settlement rule has an **amount line** that sends exactly that 40,000 to cost centre `CC-ARY-PRD` on account 5130, and the rest to the well. The AFE’s final cost is 8,098,000: 8,058,000 to the well asset and 40,000 to period expense. AR-07 is one asset; if the AFE had components with different lives or depreciation methods (such as a new pipeline), each would get its own asset and its own line in the settlement rule.',
          ),
        },
        {
          type: 'steps',
          items: [
            {
              title: t('تسویه دوره‌ای (ماه‌های 3 و 4)', 'Periodic settlement (months 3 and 4)'),
              text: t(
                'اجرای ماهانه تسویه، هزینه همان ماه هر عنصر را طبق قاعده‌اش منتقل می‌کند. در طراحی مسار پترولیوم کار اصلی آن جدا کردن هزینه‌های غیرسرمایه‌ای است: آموزش 25,000 در ماه 3 و 15,000 در ماه 4 از AUC به 5130 روی `CC-ARY-PRD` می‌رود تا ترازنامه بیش از واقع نشان داده نشود.',
                'The monthly settlement run moves each element’s cost for the month according to its rule. In Masar Petroleum’s design its main job is to take out non-capital costs: training of 25,000 in month 3 and 15,000 in month 4 moves from AUC to 5130 on `CC-ARY-PRD`, so the balance sheet is not overstated.',
              ),
            },
            {
              title: t('سرمایه‌ای کردن جزئی (ماه 4)', 'Partial capitalisation (month 4)'),
              text: t(
                'وقتی دارایی آماده بهره‌برداری می‌شود، هزینه‌ای که تا آن روز جمع شده به دارایی نهایی منتقل می‌شود، حتی اگر پروژه هنوز چند هزینه پایانی داشته باشد. چاه از ماه 4 تولید می‌کند؛ پس 7,900,000 هزینه سرمایه‌ای تا آن روز به `FA-52007` می‌رود و استهلاک شروع می‌شود.',
                'When the asset is ready for use, the cost collected so far moves to the final asset, even if the project still has some closing costs. The well produces from month 4, so the 7,900,000 of capital cost to that date moves to `FA-52007` and depreciation starts.',
              ),
            },
            {
              title: t('تسویه نهایی (ماه 5)', 'Final settlement (month 5)'),
              text: t(
                'هزینه‌های پایانی ماه 5 (SES نهایی آزمایش چاه 72,000، نظارت 44,000 و بستن مجوزها 30,000؛ جمع 146,000) به `FA-52007` می‌رود، مانده AUC این AFE صفر می‌شود و وضعیت WBS «تکمیل فنی» (TECO) می‌شود. از این پس فقط ثبت‌های دیرهنگام مثل فاکتورهای عقب‌مانده پذیرفته می‌شوند.',
                'The month-5 closing costs (the final well-testing SES 72,000, supervision 44,000 and permit close-out 30,000; 146,000 in total) move to `FA-52007`, the AFE’s AUC balance becomes zero and the WBS status becomes “technically complete” (TECO). From then on only late postings such as delayed invoices are accepted.',
              ),
            },
            {
              title: t('تسویه بعدی (ماه 6)', 'Subsequent settlement (month 6)'),
              text: t(
                'فاکتور سیمان‌کاری لاینر با 12,000 تفاوت تأییدشده می‌رسد و روی `.02.02` می‌نشیند. اجرای تسویه بعدی این 12,000 را هم به `FA-52007` می‌برد؛ بهای چاه 7,900,000 + 146,000 + 12,000 = 8,058,000 می‌شود و استهلاک از این ماه به بعد با بهای تازه حساب می‌شود.',
                'The liner cementing invoice arrives with an approved difference of 12,000 and lands on `.02.02`. A subsequent settlement run moves this 12,000 to `FA-52007` as well; the well’s cost becomes 7,900,000 + 146,000 + 12,000 = 8,058,000, and depreciation from this month on uses the new cost.',
              ),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: t(
            'سه خطای پرهزینه: (1) WBS بدون قاعده تسویه؛ اجرای تسویه خطا می‌دهد و هزینه ماه‌ها در AUC گیر می‌کند. (2) سرمایه‌ای کردن دیرهنگام؛ چاهی که تولید می‌کند ولی در AUC مانده، استهلاکش عقب می‌افتد و سود ماه‌های تولید بیش از واقع نشان داده می‌شود. (3) فرستادن همه هزینه به یک دارایی؛ وقتی اجزای یک پروژه (مثلاً چاه و یک خط لوله تازه) عمر و روش استهلاک متفاوت دارند، باید دارایی‌های جدا داشته باشند.',
            'Three costly mistakes: (1) a WBS with no settlement rule; the settlement run fails and cost sits in AUC for months. (2) Late capitalisation; a producing well left in AUC is depreciated late and the profit of the producing months is overstated. (3) Sending all cost to one asset; when a project’s components (for example a well and a new pipeline) have different lives and depreciation methods, they need separate assets.',
          ),
        },
      ],
    },
    {
      id: 'dry-hole',
      title: t('چاه موفق یا چاه خشک', 'Successful Well or Dry Hole'),
      blocks: [
        {
          type: 'p',
          text: t(
            'چاه توسعه‌ای AR-07 در مخزنی حفر شد که وجودش ثابت شده بود. اما **چاه اکتشافی** ممکن است به نفت یا گاز تجاری نرسد؛ به آن **چاه خشک** (Dry hole) می‌گویند. رفتار حسابداری آن به **رویه حسابداری** شرکت بستگی دارد. دو روش شناخته‌شده **تلاش‌های موفق** (Successful Efforts) و **بهای تمام‌شده کامل** (Full Cost) است. IFRS 6 اجازه می‌دهد هزینه‌های اکتشاف و ارزیابی تا روشن شدن نتیجه به‌عنوان **دارایی اکتشاف و ارزیابی** (E&E؛ حساب 1530) نگه داشته شوند و پیش از انتقال به دارایی توسعه، آزمون کاهش ارزش بخورند. رویه انتخاب‌شده باید پیوسته به کار رود.',
            'Development well AR-07 was drilled into a reservoir already proven to exist. An **exploration well**, however, may find no commercial oil or gas; it is then a **dry hole**. Its accounting depends on the company’s **accounting policy**. The two well-known methods are **successful efforts** and **full cost**. IFRS 6 allows exploration and evaluation costs to be held as **E&E assets** (account 1530) until the outcome is known, and requires an impairment test before they are moved to development assets. The chosen policy must be applied consistently.',
          ),
        },
        {
          type: 'table',
          caption: t('رفتار رایج دو روش (کلی؛ جزئیات به رویه شرکت بستگی دارد)', 'Typical treatment under the two methods (general; details depend on company policy)'),
          head: [t('وضعیت', 'Situation'), t('تلاش‌های موفق', 'Successful efforts'), t('بهای تمام‌شده کامل', 'Full cost')],
          rows: [
            [t('مطالعات زمین‌شناسی و ژئوفیزیک (G&G)', 'Geological and geophysical (G&G) studies'), t('معمولاً هزینه دوره', 'Usually expensed'), t('سرمایه‌ای در استخر هزینه', 'Capitalised in the cost pool')],
            [t('چاه اکتشافی با کشف تجاری', 'Exploration well with a commercial find'), t('سرمایه‌ای (E&E و سپس توسعه)', 'Capitalised (E&E, then development)'), t('سرمایه‌ای', 'Capitalised')],
            [t('چاه اکتشافی خشک', 'Dry exploration well'), t('هزینه دوره (حذف از E&E)', 'Expensed (written off from E&E)'), t('سرمایه‌ای در استخر هزینه', 'Capitalised in the cost pool')],
            [t('چاه توسعه‌ای خشک', 'Dry development well'), t('سرمایه‌ای؛ بخشی از بهای توسعه میدان', 'Capitalised; part of the field development cost'), t('سرمایه‌ای', 'Capitalised')],
          ],
        },
        { type: 'h', text: t('چاه اکتشافی ARN-1', 'Exploration well ARN-1') },
        {
          type: 'p',
          text: t(
            'مسار پترولیوم برای آزمودن یک مخزن عمیق‌تر و اثبات‌نشده در یال شمالی، چاه اکتشافی ARN-1 را روی پروژه `EXP-2025-004` حفر کرد. همه هزینه‌ها (3,400,000 ناخالص، شامل مسدودسازی و متروکه‌سازی چاه) طبق رویه تلاش‌های موفق در 1530 جمع شدند. نتیجه آزمایش: لایه آب‌دار، بدون هیدروکربن تجاری. چاه مسدود و متروکه شد و دارایی E&E باید حذف شود. اگر نتیجه مثبت بود، پس از آزمون کاهش ارزش، همین مبلغ به دارایی توسعه منتقل می‌شد.',
            'To test a deeper, unproven reservoir on the northern flank, Masar Petroleum drilled exploration well ARN-1 on project `EXP-2025-004`. All costs (3,400,000 gross, including plugging and abandonment) were collected in 1530 under the successful efforts policy. Test result: water-bearing, no commercial hydrocarbons. The well was plugged and abandoned, and the E&E asset must be written off. Had the result been positive, the same amount would have moved to development assets after an impairment test.',
          ),
        },
        {
          type: 'journal',
          title: t('دو نتیجه ممکن برای `EXP-2025-004` (ارقام ناخالص)', 'The two possible outcomes for `EXP-2025-004` (gross figures)'),
          entries: [
            {
              date: t('چاه خشک', 'Dry hole'),
              lines: [
                { account: ac.dry, debit: 3400000 },
                { account: ac.ee, credit: 3400000 },
              ],
              memo: t('روش تلاش‌های موفق: حذف دارایی E&E و شناسایی هزینه در همان دوره.', 'Successful efforts: write off the E&E asset and expense it in the period.'),
            },
            {
              date: t('کشف تجاری', 'Commercial find'),
              lines: [
                { account: t('1510 دارایی‌های در جریان تکمیل (WBS توسعه ARN-1)', '1510 Assets under construction (ARN-1 development WBS)'), debit: 3400000 },
                { account: ac.ee, credit: 3400000 },
              ],
              memo: t('پس از اعلام تجاری بودن و آزمون کاهش ارزش، به دارایی توسعه منتقل می‌شود.', 'After commerciality is declared and the impairment test is done, it moves to development assets.'),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('حسابداری و بازیافت هزینه دو پرسش جدا هستند', 'Accounting and cost recovery are two separate questions'),
          text: t(
            'اینکه هزینه‌ای در دفاتر به هزینه دوره برود یا سرمایه‌ای شود، تعیین نمی‌کند که در قرارداد نفتی قابل بازیافت است یا نه. هزینه چاه خشک در طبقه **اکتشاف** گزارش می‌شود؛ قابل بازیافت بودنش به قرارداد بستگی دارد. در بسیاری از قراردادها، از جمله مدل‌های خدماتی با ریسک اکتشاف، اگر کشف تجاری رخ ندهد پیمانکار هزینه اکتشاف را خودش تحمل می‌کند؛ اما اگر در همان محدوده قرارداد تولید تجاری شکل بگیرد، ممکن است این هزینه‌ها از محل تولید بازیافت شوند. شرط دقیق را در قرارداد خودتان ببینید.',
            'Whether a cost is expensed or capitalised in the books does not decide whether it is recoverable under the petroleum contract. A dry-hole cost is reported in the **Exploration** category; whether it is recoverable depends on the contract. Under many contracts, including risk-service models, if no commercial discovery is made the contractor bears the exploration cost itself; but if commercial production arises in the same contract area, these costs may be recovered from it. Check the exact terms in your own contract.',
          ),
        },
      ],
    },
    {
      id: 'cost-recovery-mapping',
      title: t('نگاشت هزینه‌ها به طبقه‌های بازیافت هزینه', 'Mapping Costs to Cost-Recovery Categories'),
      blocks: [
        {
          type: 'p',
          text: t(
            'صورت هزینه‌های قابل بازیافت هر هزینه را با دو برچسب می‌خواهد: **طبقه** (اکتشاف، توسعه، عملیاتی) و **نشانگر بازیافت** (R قابل بازیافت، N غیرقابل بازیافت). در مسار پترولیوم هر دو در داده پایه گذاشته می‌شوند: طبقه از نوع پروژه یا WBS و نشانگر از حساب یا عنصر هزینه؛ برخی حساب‌ها مثل 5910 جرائم و 7110 هزینه مالی همیشه N هستند. تسویه این برچسب‌ها را عوض نمی‌کند: هزینه‌ای که به دارایی نهایی می‌رود، در صورت بازیافت همچنان در طبقه توسعه می‌ماند.',
            'The cost-recovery statement needs two labels on every cost: a **category** (Exploration, Development, Operating) and a **recoverable flag** (R recoverable, N non-recoverable). At Masar Petroleum both sit in master data: the category comes from the project or WBS type and the flag from the account or cost element; some accounts, such as 5910 fines and 7110 finance costs, are always N. Settlement does not change these labels: cost that moves to a final asset stays in the Development category in the recovery statement.',
          ),
        },
        {
          type: 'diagram',
          id: 'cost-recovery',
          caption: t(
            'از تولید تا تقسیم: سهم دولت، نفت هزینه با سقف و تقسیم نفت سود. هزینه‌هایی که امسال بازیافت نشوند به سال بعد منتقل می‌شوند. هر عدد ورودی از طبقه و نشانگر هزینه‌های ثبت‌شده می‌آید.',
            'From production to split: the government share, capped cost oil and the profit-oil split. Costs not recovered this year carry forward. Every input comes from the category and flag of the recorded costs.',
          ),
        },
        {
          type: 'table',
          caption: t('نگاشت حسابداری و بازیافت چند قلم (نشانگرها نمونه‌اند؛ قرارداد خودتان را ببینید)', 'Accounting and recovery mapping of some items (flags are illustrative; check your contract)'),
          head: [t('قلم', 'Item'), t('مبلغ ناخالص', 'Gross amount'), t('رفتار حسابداری', 'Accounting'), t('طبقه بازیافت', 'Recovery category'), t('نشانگر', 'Flag')],
          rows: [
            [t('چاه AR-07 (`FA-52007`)', 'Well AR-07 (`FA-52007`)'), 8058000, t('سرمایه‌ای؛ استهلاک به روش واحد تولید', 'Capitalised; unit-of-production depreciation'), t('توسعه', 'Development'), t('R', 'R')],
            [t('آموزش اپراتورها (سطر مبلغی `.03.02`)', 'Operator training (`.03.02` amount line)'), 40000, t('هزینه دوره 5130', 'Expense 5130'), t('عملیاتی', 'Operating'), t('R', 'R')],
            [t('چاه اکتشافی خشک ARN-1', 'Dry exploration well ARN-1'), 3400000, t('هزینه دوره 5410 (تلاش‌های موفق)', 'Expense 5410 (successful efforts)'), t('اکتشاف', 'Exploration'), t('طبق قرارداد', 'Per contract')],
            [t('جریمه زیست‌محیطی نشت', 'Environmental fine for a spill'), 50000, t('هزینه دوره 5910', 'Expense 5910'), t('عملیاتی', 'Operating'), t('N', 'N')],
            [t('بهره وام شرکتی', 'Corporate loan interest'), t('طبق قرارداد وام', 'Per loan agreement'), t('هزینه مالی 7110', 'Finance cost 7110'), t('ندارد', 'None'), t('N', 'N')],
          ],
          numericCols: [1],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل', 'In practice'),
          text: t(
            'برچسب‌ها را هنگام ساخت AFE و WBS بگذارید، نه پایان سال. یک قاعده اعتبارسنجی ساده بسیاری از مشکلات را حل می‌کند: «WBS بدون طبقه بازیافت یا بدون قاعده تسویه نمی‌تواند آزاد شود.» و توجه کنید که استهلاک حسابداری و برنامه بازیافت دو جدول جدا هستند: قرارداد ممکن است هزینه توسعه را در چند سال مشخص بازیافت کند، در حالی که استهلاک دفتری به روش واحد تولید است؛ ERP معمولاً برای بازیافت یک دفتر یا گزارش جدا نگه می‌دارد.',
            'Set the labels when the AFE and WBS are created, not at year end. One simple validation rule solves many problems: “A WBS without a recovery category or a settlement rule cannot be released.” Note also that book depreciation and the recovery schedule are separate tables: the contract may recover development cost over a set number of years while book depreciation is unit-of-production; the ERP usually keeps a separate ledger or report for recovery.',
          ),
        },
      ],
    },
    {
      id: 'erp-postings',
      title: t('در ERP: ثبت‌های تسویه و بستن AFE', 'In the ERP: Settlement Postings and Closing the AFE'),
      blocks: [
        {
          type: 'table',
          caption: t('داده پایه، اسناد و نقش‌ها', 'Master data, documents and roles'),
          head: [t('جزء', 'Element'), t('چه کسی', 'Who'), t('نمونه', 'Example')],
          rows: [
            [t('قاعده تسویه روی هر عنصر WBS', 'Settlement rule on each WBS element'), t('حسابدار دارایی و کنترل‌کننده پروژه', 'Asset accountant and project controller'), t('سطر مبلغی 40,000 در `.03.02` به `CC-ARY-PRD`؛ همه بقیه به `FA-52007`', '40,000 amount line on `.03.02` to `CC-ARY-PRD`; everything else to `FA-52007`')],
            [t('داده پایه دارایی نهایی', 'Final asset master'), t('حسابدار دارایی', 'Asset accountant'), t('طبقه دارایی «چاه‌ها»، روش واحد تولید، مرکز هزینه `CC-ARY-PRD`، پیوند به مکان عملیاتی چاه در ماژول نگهداری', 'Asset class “Wells”, unit-of-production method, cost centre `CC-ARY-PRD`, link to the well’s functional location in maintenance')],
            [t('گواهی آماده بهره‌برداری', 'Ready-for-use certificate'), t('مدیر تولید', 'Production manager'), t('تاریخ شروع تولید چاه؛ مبنای تاریخ سرمایه‌ای کردن', 'The well’s first-production date; the basis for the capitalisation date')],
            [t('اجرای تسویه (دوره‌ای، جزئی، نهایی، بعدی)', 'Settlement run (periodic, partial, final, subsequent)'), t('حسابدار پروژه', 'Project accountant'), t('پایان هر ماه و در هر رویداد آماده بهره‌برداری', 'Every month end and at each ready-for-use event')],
            [t('وضعیت WBS: آزاد، TECO، بسته', 'WBS status: released, TECO, closed'), t('مدیر پروژه و کنترل‌کننده', 'Project manager and controller'), t('TECO در ماه 5؛ بسته پس از دوره انتظار فاکتورهای دیرهنگام', 'TECO in month 5; closed after the late-invoice holding period')],
          ],
        },
        {
          type: 'journal',
          title: t('ثبت‌هایی که اجرای تسویه و فاکتور دیرهنگام می‌سازند (ارقام ناخالص)', 'Postings created by settlement runs and the late invoice (gross figures)'),
          entries: [
            {
              date: t('پایان ماه 3', 'End of month 3'),
              lines: [
                { account: ac.training, debit: 25000 },
                { account: ac.auc('AFE-2025-014.03.02'), credit: 25000 },
              ],
              memo: t('تسویه دوره‌ای: آموزش اپراتورها به هزینه دوره.', 'Periodic settlement: operator training to period expense.'),
            },
            {
              date: t('پایان ماه 4', 'End of month 4'),
              lines: [
                { account: ac.training, debit: 15000 },
                { account: ac.auc('AFE-2025-014.03.02'), credit: 15000 },
              ],
              memo: t('تسویه دوره‌ای ماه 4.', 'Month-4 periodic settlement.'),
            },
            {
              date: t('ماه 4، آماده بهره‌برداری', 'Month 4, ready for use'),
              lines: [
                { account: ac.well, debit: 7900000 },
                { account: ac.auc('AFE-2025-014.01.01 تا .04.02'), credit: 7900000 },
              ],
              memo: t('سرمایه‌ای کردن جزئی چاه؛ استهلاک از تاریخ آماده بهره‌برداری شروع می‌شود.', 'Partial capitalisation of the well; depreciation starts from the ready-for-use date.'),
            },
            {
              date: t('ماه 5', 'Month 5'),
              lines: [
                { account: ac.well, debit: 146000 },
                { account: ac.auc('AFE-2025-014.03.02، .04.01 و .04.02'), credit: 146000 },
              ],
              memo: t('تسویه نهایی هزینه‌های پایانی ماه 5؛ مانده AUC این AFE صفر می‌شود و WBS به TECO می‌رود.', 'Final settlement of the month-5 closing costs; the AFE’s AUC balance becomes zero and the WBS goes to TECO.'),
            },
            {
              date: t('ماه 6، فاکتور', 'Month 6, invoice'),
              lines: [
                { account: ac.grir, debit: 180000 },
                { account: ac.auc('AFE-2025-014.02.02'), debit: 12000 },
                { account: ac.ap, credit: 192000 },
              ],
              memo: t('فاکتور SES سیمان‌کاری لاینر (180,000) با 12,000 افزودنی اضافه تأییدشده.', 'Invoice for the liner cementing SES (180,000) with 12,000 of approved extra additives.'),
            },
            {
              date: t('ماه 6، تسویه بعدی', 'Month 6, subsequent settlement'),
              lines: [
                { account: ac.well, debit: 12000 },
                { account: ac.auc('AFE-2025-014.02.02'), credit: 12000 },
              ],
              memo: t('بهای چاه به 8,058,000 می‌رسد؛ استهلاک از این ماه با بهای تازه.', 'The well’s cost becomes 8,058,000; depreciation uses the new cost from this month.'),
            },
          ],
        },
        {
          type: 'tAccounts',
          title: t('حساب 1510 برای `AFE-2025-014` از شروع تا پایان', 'Account 1510 for `AFE-2025-014` from start to finish'),
          accounts: [
            {
              name: t('1510 دارایی‌های در جریان تکمیل (AFE-2025-014)', '1510 Assets under construction (AFE-2025-014)'),
              debits: [7940000, 146000, 12000],
              credits: [25000, 15000, 7900000, 146000, 12000],
            },
          ],
        },
        {
          type: 'p',
          text: t(
            'بدهکارها: همه هزینه‌های AFE تا پایان ماه 4 (7,900,000 سرمایه‌ای + 40,000 آموزش = 7,940,000)، هزینه‌های پایانی ماه 5 (146,000) و تفاوت فاکتور دیرهنگام ماه 6 (12,000)؛ جمع 8,098,000. بستانکارها همین مبلغ را به دو گیرنده برده‌اند: 8,058,000 به چاه و 40,000 به هزینه دوره. مانده صفر است و این نخستین آزمون آمادگی برای بستن AFE است.',
            'Debits: all AFE cost to the end of month 4 (7,900,000 capital + 40,000 training = 7,940,000), the month-5 closing costs (146,000) and the month-6 late invoice difference (12,000); total 8,098,000. The credits moved the same amount to two receivers: 8,058,000 to the well and 40,000 to period expense. The balance is zero, the first test that the AFE is ready to close.',
          ),
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('گزارش سن AUC', 'The AUC ageing report'),
          text: t(
            'هر ماه فهرست مانده‌های 1510 را به تفکیک WBS با تاریخ آخرین ثبت و تاریخ آماده بهره‌برداری بخوانید. مانده‌ای که چند ماه تکان نخورده یا مال چاهی است که مدتی است تولید می‌کند، نشانه سرمایه‌ای کردن جاافتاده یا قاعده تسویه ناقص است. حسابرسان و شرکا معمولاً همین گزارش را اول می‌خواهند.',
            'Every month, read the list of 1510 balances by WBS with the last posting date and the ready-for-use date. A balance that has not moved for months, or that belongs to a well already producing for a while, signals a missed capitalisation or an incomplete settlement rule. Auditors and partners usually ask for this report first.',
          ),
        },
        { type: 'h', text: t('بستن AFE و WBS', 'Closing the AFE and the WBS') },
        {
          type: 'steps',
          items: [
            { title: t('تکمیل فیزیکی', 'Physical completion'), text: t('گواهی آماده بهره‌برداری و صورت‌جلسه تحویل به بهره‌برداری صادر شده است.', 'The ready-for-use certificate and the handover-to-operations minutes are issued.') },
            { title: t('صفر کردن تعهدات', 'Clear commitments'), text: t('همه GRNها و SESها ثبت و سفارش‌های باز با «تحویل کامل» بسته شده‌اند؛ تعهد AFE صفر است.', 'Every GRN and SES is posted and open POs are closed with “delivery completed”; the AFE commitment is zero.') },
            { title: t('فاکتورها و GR/IR', 'Invoices and GR/IR'), text: t('اقلام GR/IR این AFE تطبیق شده‌اند و برای هر فاکتور نرسیده، برآورد و پیگیری وجود دارد.', 'The AFE’s GR/IR items are matched, and every missing invoice has an estimate and a follow-up.') },
            { title: t('تسویه نهایی و TECO', 'Final settlement and TECO'), text: t('مانده 1510 برای AFE صفر است؛ وضعیت TECO فقط ثبت‌های دیرهنگام را می‌پذیرد.', 'The AFE’s 1510 balance is zero; TECO status accepts only late postings.') },
            {
              title: t('گزارش بستن AFE', 'AFE close-out report'),
              text: t(
                'هزینه نهایی 8,098,000 در برابر برآورد پایه 8,000,000 (1.2٪ بیشتر) و AFE مصوب 8,800,000؛ 160,000 از ذخیره احتیاطی مصرف شد (140,000 در ماه 2 برای دکل و 20,000 در ماه 4 برای نظارت)؛ برگشت 702,000 بودجه بی‌استفاده، شامل 640,000 ذخیره باقی‌مانده؛ توضیح انحراف‌ها؛ صورت‌حساب نهایی شرکا.',
                'Final cost 8,098,000 against the base estimate of 8,000,000 (1.2% over) and the approved AFE of 8,800,000; 160,000 of contingency was used (140,000 in month 2 for the rig and 20,000 in month 4 for supervision); return of 702,000 unused budget, including the 640,000 of contingency left; variance explanations; final partner statement.',
              ),
            },
            { title: t('بستن قطعی', 'Final close'), text: t('پس از دوره انتظار (مثلاً 3 تا 6 ماه؛ نمونه)، وضعیت «بسته» می‌شود، ثبت تازه مسدود و اسناد برای حسابرسی و بازیافت هزینه بایگانی می‌شوند.', 'After a holding period (for example 3 to 6 months; illustrative) the status becomes “closed”, new postings are blocked and documents are archived for audit and cost recovery.') },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: t(
            'هم بستن زودهنگام و هم بستن دیرهنگام خطرناک است. اگر WBS زود بسته شود، فاکتور دیرهنگام جایی برای نشستن ندارد و کاربر آن را به یک مرکز هزینه عملیاتی می‌زند: دارایی کم، هزینه دوره زیاد و طبقه بازیافت غلط. اگر دیر بسته شود، افراد هزینه‌های بی‌ربط را روی AFE قدیمی‌ای که هنوز بودجه دارد ثبت می‌کنند.',
            'Closing too early and closing too late are both dangerous. If the WBS closes early, a late invoice has nowhere to go and the user charges an operating cost centre: assets too low, period expense too high and the wrong recovery category. If it closes late, people post unrelated costs to an old AFE that still has budget.',
          ),
        },
      ],
    },
    {
      id: 'practice',
      title: t('اشتباه‌های رایج و تمرین', 'Common Mistakes and Practice'),
      blocks: [
        { type: 'h', text: t('اشتباه‌های رایج', 'Common mistakes') },
        {
          type: 'list',
          items: [
            t('**منتظر ماندن برای بستن AFE پیش از سرمایه‌ای کردن**: استهلاک از تاریخ آماده بهره‌برداری شروع می‌شود، نه از تاریخ بستن AFE.', '**Waiting for AFE close to capitalise**: depreciation starts at the ready-for-use date, not when the AFE closes.'),
            t('**سرمایه‌ای کردن هزینه‌های غیرمجاز**: آموزش، سربار اداری و دوباره‌کاری ناشی از سهل‌انگاری باید هزینه دوره شوند.', '**Capitalising non-qualifying costs**: training, admin overhead and rework from negligence must be expensed.'),
            t('**قاعده تسویه دیرهنگام**: قاعده را روز اول بگذارید، نه روز بستن.', '**A late settlement rule**: set the rule on day one, not on closing day.'),
            t('**یکی دانستن حسابداری و بازیافت**: چاه خشکی که به هزینه دوره رفته، ممکن است طبق قرارداد قابل بازیافت باشد یا نباشد؛ این دو را جدا بررسی کنید.', '**Treating accounting and recovery as one**: an expensed dry hole may or may not be recoverable under the contract; check the two separately.'),
            t('**ثبت فاکتور دیرهنگام روی مرکز هزینه**: آن را روی WBS (در وضعیت TECO) ثبت و با تسویه بعدی به دارایی ببرید.', '**Posting a late invoice to a cost centre**: post it to the WBS (in TECO status) and move it to the asset with a subsequent settlement.'),
          ],
        },
        { type: 'h', text: t('تمرین‌ها', 'Exercises') },
        {
          type: 'exercise',
          title: t('تمرین 1: سرمایه‌ای یا هزینه دوره؟', 'Exercise 1: Capitalise or expense?'),
          difficulty: 'easy',
          problem: t(
            'برای `AFE-2024-025` (خط لوله گاز سوخت از جداکننده‌های تولید تا ایستگاه تقویت فشار) هزینه‌های زیر ثبت شده است. هر قلم را سرمایه‌ای یا هزینه دوره کنید و جمع هر گروه را بدهید.',
            'For `AFE-2024-025` (fuel-gas pipeline from the production separators to the compressor station) the costs below have been recorded. Classify each as capitalised or expensed and give the total of each group.',
          ),
          given: {
            head: [t('قلم', 'Item'), t('مبلغ', 'Amount')],
            rows: [
              [t('لوله و اتصالات (GRN)', 'Line pipe and fittings (GRN)'), 420000],
              [t('جوشکاری و نصب پیمانکار (SES)', 'Contractor welding and installation (SES)'), 260000],
              [t('آزمایش هیدرواستاتیک خط', 'Hydrostatic test of the line'), 35000],
              [t('ساعات مهندسان داخلی روی پروژه', 'In-house engineers’ hours on the project'), 28000],
              [t('سهم سربار اداری دفتر مرکزی', 'Share of head-office admin overhead'), 30000],
              [t('آموزش اپراتورها برای کار با پیگ‌لانچر', 'Operator training on the pig launcher'), 12000],
              [t('دوباره‌کاری بخشی که پیمانکار با سهل‌انگاری آسیب زد', 'Rework of a section damaged by contractor negligence'), 18000],
            ],
          },
          solution: [
            {
              type: 'table',
              head: [t('قلم', 'Item'), t('رفتار', 'Treatment'), t('دلیل', 'Reason')],
              rows: [
                [t('لوله، نصب، آزمایش هیدرواستاتیک، ساعات مهندسان', 'Pipe, installation, hydrotest, engineers’ hours'), t('سرمایه‌ای', 'Capitalise'), t('مستقیماً برای رساندن خط به شرایط بهره‌برداری لازم‌اند', 'Directly needed to bring the line to working condition')],
                [t('سربار اداری', 'Admin overhead'), t('هزینه دوره', 'Expense'), t('مستقیماً به خط مربوط نیست', 'Not directly attributable')],
                [t('آموزش اپراتورها', 'Operator training'), t('هزینه دوره', 'Expense'), t('IAS 16 آموزش را سرمایه‌ای نمی‌کند', 'IAS 16 does not capitalise training')],
                [t('دوباره‌کاری ناشی از سهل‌انگاری', 'Rework from negligence'), t('هزینه دوره و ادعا از پیمانکار', 'Expense, and claim from the contractor'), t('اتلاف غیرعادی', 'Abnormal waste')],
              ],
            },
            {
              type: 'p',
              text: t('سرمایه‌ای: 420,000 + 260,000 + 35,000 + 28,000 = 743,000. هزینه دوره: 30,000 + 12,000 + 18,000 = 60,000. جمع: 803,000.', 'Capitalised: 420,000 + 260,000 + 35,000 + 28,000 = 743,000. Expensed: 30,000 + 12,000 + 18,000 = 60,000. Total: 803,000.'),
            },
          ],
          answer: t('سرمایه‌ای 743,000؛ هزینه دوره 60,000.', 'Capitalised 743,000; expensed 60,000.'),
        },
        {
          type: 'exercise',
          title: t('تمرین 2: تسویه با عددهای هم‌ارز', 'Exercise 2: Settlement by equivalence numbers'),
          difficulty: 'medium',
          problem: t(
            '`AFE-2024-027` یک منیفولد مرکزی و خطوط جمع‌آوری برای سه چاه AR-08، AR-09 و AR-10 ساخته است؛ هزینه نهایی 1,500,000 در AUC است. قاعده تسویه سهم هر چاه را با طول خط آن تعیین می‌کند: 2، 3 و 5 کیلومتر. سهم هر دارایی را حساب و ثبت تسویه نهایی را بنویسید.',
            '`AFE-2024-027` built a central manifold and gathering lines for three wells, AR-08, AR-09 and AR-10; the final cost of 1,500,000 sits in AUC. The settlement rule shares the cost by each well’s line length: 2, 3 and 5 km. Calculate each asset’s share and write the final settlement entry.',
          ),
          hint: t('سهم هر گیرنده = عدد هم‌ارز آن ÷ جمع عددها × هزینه.', 'Each receiver’s share = its equivalence number ÷ the sum of the numbers × the cost.'),
          solution: [
            {
              type: 'table',
              head: [t('دارایی', 'Asset'), t('عدد هم‌ارز', 'Equivalence number'), t('سهم', 'Share'), t('مبلغ', 'Amount')],
              rows: [
                [t('خط جمع‌آوری AR-08', 'AR-08 gathering line'), 2, t('2 ÷ 10', '2 ÷ 10'), 300000],
                [t('خط جمع‌آوری AR-09', 'AR-09 gathering line'), 3, t('3 ÷ 10', '3 ÷ 10'), 450000],
                [t('خط جمع‌آوری AR-10', 'AR-10 gathering line'), 5, t('5 ÷ 10', '5 ÷ 10'), 750000],
                [t('جمع', 'Total'), 10, t('10 ÷ 10', '10 ÷ 10'), 1500000],
              ],
              numericCols: [1, 3],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: t('تسویه نهایی', 'Final settlement'),
                  lines: [
                    { account: t('1520 دارایی‌های نفت و گاز: خط جمع‌آوری AR-08', '1520 Oil and gas properties: AR-08 gathering line'), debit: 300000 },
                    { account: t('1520 دارایی‌های نفت و گاز: خط جمع‌آوری AR-09', '1520 Oil and gas properties: AR-09 gathering line'), debit: 450000 },
                    { account: t('1520 دارایی‌های نفت و گاز: خط جمع‌آوری AR-10', '1520 Oil and gas properties: AR-10 gathering line'), debit: 750000 },
                    { account: ac.auc('AFE-2024-027'), credit: 1500000 },
                  ],
                },
              ],
            },
          ],
          answer: t('AR-08: 300,000؛ AR-09: 450,000؛ AR-10: 750,000.', 'AR-08: 300,000; AR-09: 450,000; AR-10: 750,000.'),
        },
        {
          type: 'exercise',
          title: t('تمرین 3: تسویه جزئی، نهایی و بعدی', 'Exercise 3: Partial, final and subsequent settlement'),
          difficulty: 'medium',
          problem: t(
            '`AFE-2024-028` یک بسته تصفیه آب همراه تولید می‌سازد. عنصر `.01` اسکید جداکننده (1,800,000) در ماه 9 آماده بهره‌برداری می‌شود؛ عنصر `.02` واحد فیلتر (600,000) در ماه 11؛ عنصر `.03` آموزش اپراتورها (40,000 در ماه 9 و 20,000 در ماه 10) با قاعده تسویه به `CC-ARY-PRD` و حساب 5130. در ماه 12 فاکتوری با 25,000 تفاوت تأییدشده برای واحد فیلتر روی `.02` می‌نشیند. همه ثبت‌های تسویه را بنویسید و بهای نهایی هر دارایی را بدهید.',
            '`AFE-2024-028` builds a produced-water treatment package. Element `.01`, the separator skid (1,800,000), is ready for use in month 9; element `.02`, the filter unit (600,000), in month 11; element `.03`, operator training (40,000 in month 9 and 20,000 in month 10), has a settlement rule to `CC-ARY-PRD` and account 5130. In month 12 an invoice with an approved 25,000 difference for the filter unit lands on `.02`. Write all the settlement entries and give each asset’s final cost.',
          ),
          solution: [
            {
              type: 'journal',
              entries: [
                {
                  date: t('ماه 9', 'Month 9'),
                  lines: [
                    { account: t('1520 دارایی‌های نفت و گاز: اسکید جداکننده', '1520 Oil and gas properties: separator skid'), debit: 1800000 },
                    { account: ac.training, debit: 40000 },
                    { account: ac.auc('AFE-2024-028.01 و .03'), credit: 1840000 },
                  ],
                  memo: t('سرمایه‌ای کردن جزئی اسکید و تسویه دوره‌ای آموزش.', 'Partial capitalisation of the skid and periodic settlement of training.'),
                },
                {
                  date: t('ماه 10', 'Month 10'),
                  lines: [
                    { account: ac.training, debit: 20000 },
                    { account: ac.auc('AFE-2024-028.03'), credit: 20000 },
                  ],
                },
                {
                  date: t('ماه 11', 'Month 11'),
                  lines: [
                    { account: t('1520 دارایی‌های نفت و گاز: واحد فیلتر', '1520 Oil and gas properties: filter unit'), debit: 600000 },
                    { account: ac.auc('AFE-2024-028.02'), credit: 600000 },
                  ],
                  memo: t('تسویه نهایی؛ WBS به TECO می‌رود.', 'Final settlement; the WBS goes to TECO.'),
                },
                {
                  date: t('ماه 12', 'Month 12'),
                  lines: [
                    { account: t('1520 دارایی‌های نفت و گاز: واحد فیلتر', '1520 Oil and gas properties: filter unit'), debit: 25000 },
                    { account: ac.auc('AFE-2024-028.02'), credit: 25000 },
                  ],
                  memo: t('تسویه بعدی تفاوت فاکتور دیرهنگام.', 'Subsequent settlement of the late invoice difference.'),
                },
              ],
            },
          ],
          answer: t('اسکید 1,800,000؛ واحد فیلتر 625,000؛ هزینه آموزش 60,000؛ مانده AUC صفر.', 'Skid 1,800,000; filter unit 625,000; training expense 60,000; AUC balance zero.'),
        },
        {
          type: 'exercise',
          title: t('تمرین 4: چاه خشک اکتشافی و توسعه‌ای', 'Exercise 4: Exploration and development dry holes'),
          difficulty: 'hard',
          problem: t(
            'مسار پترولیوم دو چاه خشک دارد. (1) چاه اکتشافی KV-1 در «بلوک اکتشافی کویر» که مسار 40٪ آن را دارد؛ هزینه ناخالص 5,600,000، که سهم مسار در 1530 نگه داشته شده است. (2) یک چاه توسعه‌ای پله‌ای در لبه جنوبی میدان آریا (`AFE-2024-033`، سهم مسار 50٪)؛ هزینه ناخالص 4,200,000 در 1510، که در لبه مخزن به لایه متراکم و بی‌بازده رسید. (الف) با روش تلاش‌های موفق، ثبت‌های دفاتر مسار را بنویسید. (ب) با روش بهای تمام‌شده کامل چه تفاوتی دارد؟ (ج) اثر هر چاه بر سود سال مسار در هر دو روش چیست؟ (د) طبقه بازیافت هر هزینه چیست؟',
            'Masar Petroleum has two dry holes. (1) Exploration well KV-1 in the “Kavir exploration block”, where Masar holds 40%; gross cost 5,600,000, with Masar’s share held in 1530. (2) A step-out development well on the southern edge of the Arya field (`AFE-2024-033`, Masar 50%); gross cost 4,200,000 in 1510, which reached a tight, non-productive zone at the edge of the reservoir. (a) Under successful efforts, write the entries in Masar’s books. (b) How does full cost differ? (c) What is each well’s effect on Masar’s profit for the year under each method? (d) What is the recovery category of each cost?',
          ),
          hint: t('در تلاش‌های موفق، چاه اکتشافی خشک هزینه می‌شود اما چاه توسعه‌ای خشک سرمایه‌ای می‌ماند. سهم مسار را حساب کنید.', 'Under successful efforts a dry exploration well is expensed but a dry development well stays capitalised. Work out Masar’s share.'),
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('سهم مسار', 'Masar’s shares'), text: t('KV-1: 40٪ × 5,600,000 = 2,240,000. چاه پله‌ای: 50٪ × 4,200,000 = 2,100,000.', 'KV-1: 40% × 5,600,000 = 2,240,000. Step-out well: 50% × 4,200,000 = 2,100,000.') },
              ],
            },
            {
              type: 'journal',
              title: t('تلاش‌های موفق (دفاتر مسار)', 'Successful efforts (Masar’s books)'),
              entries: [
                {
                  date: t('KV-1', 'KV-1'),
                  lines: [
                    { account: ac.dry, debit: 2240000 },
                    { account: ac.ee, credit: 2240000 },
                  ],
                  memo: t('چاه اکتشافی خشک: حذف از E&E.', 'Dry exploration well: written off from E&E.'),
                },
                {
                  date: t('چاه پله‌ای', 'Step-out well'),
                  lines: [
                    { account: t('1520 دارایی‌های نفت و گاز: بهای توسعه میدان آریا', '1520 Oil and gas properties: Arya field development cost'), debit: 2100000 },
                    { account: ac.auc('AFE-2024-033'), credit: 2100000 },
                  ],
                  memo: t('چاه توسعه‌ای خشک بخشی از بهای توسعه میدان است و با استهلاک واحد تولید میدان مستهلک می‌شود.', 'A dry development well is part of the field development cost and is depreciated with the field’s unit-of-production charge.'),
                },
              ],
            },
            {
              type: 'steps',
              items: [
                {
                  title: t('بهای تمام‌شده کامل', 'Full cost'),
                  text: t('هر دو چاه سرمایه‌ای می‌مانند: KV-1 در استخر هزینه کشور یا منطقه (با آزمون سقف ارزش) و چاه پله‌ای در دارایی‌های میدان. هیچ هزینه فوری در سود و زیان نمی‌نشیند.', 'Both wells stay capitalised: KV-1 in the country or area cost pool (subject to a ceiling test) and the step-out well in the field’s assets. Nothing is expensed immediately.'),
                },
                {
                  title: t('اثر بر سود سال', 'Effect on the year’s profit'),
                  text: t('تلاش‌های موفق: 2,240,000 کاهش سود به‌خاطر KV-1؛ چاه پله‌ای فقط از راه استهلاک آینده. بهای تمام‌شده کامل: کاهش فوری صفر؛ هر دو از راه استهلاک در سال‌های بعد.', 'Successful efforts: profit down 2,240,000 for KV-1; the step-out well only through future depreciation. Full cost: no immediate reduction; both through depreciation in later years.'),
                },
                {
                  title: t('طبقه بازیافت', 'Recovery category'),
                  text: t('KV-1 در طبقه اکتشاف؛ اگر بلوک کویر هرگز به تولید تجاری نرسد، در بسیاری از قراردادها بازیافت نمی‌شود. چاه پله‌ای در طبقه توسعه با نشانگر R. رفتار حسابداری هیچ‌کدام را عوض نمی‌کند.', 'KV-1 in Exploration; if the Kavir block never reaches commercial production, under many contracts it is not recovered. The step-out well in Development with flag R. The accounting treatment changes neither.'),
                },
              ],
            },
          ],
          answer: t(
            'تلاش‌های موفق: KV-1 هزینه 2,240,000 (بدهکار 5410)؛ چاه پله‌ای سرمایه‌ای 2,100,000 (بدهکار 1520). بهای تمام‌شده کامل: هر دو سرمایه‌ای.',
            'Successful efforts: KV-1 expensed 2,240,000 (debit 5410); step-out well capitalised 2,100,000 (debit 1520). Full cost: both capitalised.',
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
            t('AUC (حساب 1510) بهای دارایی در حال ساخت را جمع می‌کند و مستهلک نمی‌شود؛ فقط هزینه‌های مستقیماً مرتبط سرمایه‌ای می‌شوند.', 'AUC (account 1510) collects the cost of an asset being built and is not depreciated; only directly attributable costs are capitalised.'),
            t('قاعده تسویه گیرنده‌ها و سهم‌ها را تعیین می‌کند: دارایی نهایی، مرکز هزینه یا WBS دیگر؛ با درصد، مبلغ یا عدد هم‌ارز.', 'The settlement rule sets receivers and shares: final asset, cost centre or another WBS; by percentage, amount or equivalence number.'),
            t('تسویه دوره‌ای هزینه‌های غیرسرمایه‌ای را بیرون می‌برد، سرمایه‌ای کردن جزئی بخش آماده را به دارایی می‌برد، تسویه نهایی AUC را صفر می‌کند و تسویه بعدی ثبت‌های دیرهنگام را منتقل می‌کند.', 'Periodic settlement takes out non-capital costs, partial capitalisation moves the ready part to the asset, final settlement clears AUC and subsequent settlement moves late postings.'),
            t('استهلاک از تاریخ آماده بهره‌برداری شروع می‌شود؛ چاه AR-07 از ماه 4 با بهای 7,900,000، سپس 8,046,000 و پس از فاکتور دیرهنگام 8,058,000.', 'Depreciation starts at the ready-for-use date; well AR-07 from month 4 at 7,900,000, then 8,046,000, and 8,058,000 after the late invoice.'),
            t('در تلاش‌های موفق، چاه اکتشافی خشک هزینه می‌شود و چاه توسعه‌ای خشک سرمایه‌ای می‌ماند؛ در بهای تمام‌شده کامل هر دو سرمایه‌ای‌اند.', 'Under successful efforts a dry exploration well is expensed and a dry development well stays capitalised; under full cost both are capitalised.'),
            t('طبقه و نشانگر بازیافت در داده پایه گذاشته می‌شوند و با تسویه تغییر نمی‌کنند؛ حسابداری و بازیافت دو پرسش جدا هستند.', 'Recovery category and flag are set in master data and do not change with settlement; accounting and recovery are separate questions.'),
            t('بستن AFE: تعهد صفر، GR/IR تطبیق‌شده، AUC صفر، TECO، گزارش بستن و برگشت بودجه، و سپس بستن قطعی.', 'AFE close: zero commitments, matched GR/IR, zero AUC, TECO, close-out report and budget return, then final close.'),
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            { term: t('سرمایه‌ای کردن', 'Capitalisation'), def: t('ثبت هزینه به‌عنوان دارایی در ترازنامه به‌جای هزینه دوره.', 'Recording a cost as a balance-sheet asset instead of a period expense.') },
            { term: t('دارایی در جریان تکمیل (AUC)', 'Assets under construction (AUC)'), def: t('حساب موقتی که بهای دارایی در حال ساخت را تا آماده بهره‌برداری شدن جمع می‌کند.', 'The temporary account collecting the cost of an asset being built until it is ready for use.') },
            { term: t('تسویه', 'Settlement'), def: t('انتقال هزینه از شیء هزینه موقت (مثل WBS) به گیرنده نهایی.', 'Moving cost from a temporary cost object (such as a WBS) to its final receiver.') },
            { term: t('قاعده تسویه', 'Settlement rule'), def: t('سطرهای توزیع روی WBS که گیرنده و سهم هر کدام را تعیین می‌کنند.', 'Distribution lines on a WBS that set each receiver and its share.') },
            { term: t('عدد هم‌ارز', 'Equivalence number'), def: t('وزن نسبی هر گیرنده در قاعده تسویه، مثل طول خط لوله.', 'The relative weight of each receiver in a settlement rule, such as pipeline length.') },
            { term: t('تسویه بعدی', 'Subsequent settlement'), def: t('انتقال هزینه‌ای که پس از تسویه نهایی روی WBS نشسته است به همان دارایی.', 'Moving cost posted to a WBS after final settlement on to the same asset.') },
            { term: t('تکمیل فنی (TECO)', 'Technically complete (TECO)'), def: t('وضعیتی که کار فیزیکی تمام شده و فقط ثبت‌های دیرهنگام پذیرفته می‌شوند.', 'The status in which physical work is finished and only late postings are accepted.') },
            { term: t('دارایی اکتشاف و ارزیابی (E&E)', 'Exploration and evaluation (E&E) asset'), def: t('بهای اکتشاف که طبق IFRS 6 تا روشن شدن نتیجه نگه داشته می‌شود.', 'Exploration cost held under IFRS 6 until the outcome is known.') },
            { term: t('چاه خشک', 'Dry hole'), def: t('چاهی که به هیدروکربن تجاری نمی‌رسد.', 'A well that finds no commercial hydrocarbons.') },
            { term: t('تلاش‌های موفق و بهای تمام‌شده کامل', 'Successful efforts and full cost'), def: t('دو رویه حسابداری اکتشاف: اولی فقط تلاش موفق را سرمایه‌ای می‌کند، دومی همه را.', 'Two exploration accounting policies: the first capitalises only successful effort, the second capitalises all of it.') },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: t('چاه AR-07 از ماه 4 تولید می‌کند، آخرین هزینه‌ها در ماه 5 ثبت می‌شوند و AFE چند ماه بعد بسته می‌شود. استهلاک چاه از کی شروع می‌شود؟', 'Well AR-07 produces from month 4, the last costs post in month 5 and the AFE closes months later. When does the well’s depreciation start?'),
      options: [t('از تاریخ بستن AFE', 'From the AFE close date'), t('از نخستین فاکتور حفاری', 'From the first drilling invoice'), t('از تاریخ آماده بهره‌برداری در ماه 4', 'From the ready-for-use date in month 4'), t('از پایان سال مالی', 'From the financial year end')],
      answer: 2,
      explain: t(
        'استهلاک وقتی شروع می‌شود که دارایی آماده بهره‌برداری است؛ برای همین چاه در ماه 4 با سرمایه‌ای کردن جزئی به دارایی نهایی رفت. منتظر بستن AFE ماندن، استهلاک را عقب می‌اندازد و سود ماه‌های تولید را بیش از واقع نشان می‌دهد.',
        'Depreciation starts when the asset is ready for use; that is why the well moved to its final asset in month 4 through partial capitalisation. Waiting for the AFE to close delays depreciation and overstates the profit of the producing months.',
      ),
    },
    {
      q: t('کدام هزینه طبق IAS 16 سرمایه‌ای نمی‌شود؟', 'Which cost is NOT capitalised under IAS 16?'),
      options: [t('سیمان‌کاری لوله جداری', 'Casing cementing'), t('آموزش اپراتورها هنگام تحویل چاه', 'Operator training at well handover'), t('آزمایش چاه برای اثبات کارکرد', 'Well testing to prove it works'), t('ساعات مهندس حفاری روی همین چاه', 'Drilling engineer’s hours on this well')],
      answer: 1,
      explain: t(
        'IAS 16 آموزش کارکنان را جزو بهای دارایی نمی‌داند؛ به همین دلیل سطر مبلغی 40,000 در `.03.02` به `CC-ARY-PRD` تسویه شد. سیمان‌کاری، آزمایش لازم و ساعات مستقیم مهندس همه برای رساندن چاه به شرایط بهره‌برداری لازم‌اند.',
        'IAS 16 does not include staff training in an asset’s cost; that is why the 40,000 amount line on `.03.02` was settled to `CC-ARY-PRD`. Cementing, necessary testing and the engineer’s direct hours are all needed to bring the well to working condition.',
      ),
    },
    {
      q: t('هزینه 1,500,000 یک منیفولد با عددهای هم‌ارز 2، 3 و 5 میان AR-08، AR-09 و AR-10 تسویه می‌شود. سهم AR-09 چقدر است؟', 'A manifold cost of 1,500,000 is settled to AR-08, AR-09 and AR-10 with equivalence numbers 2, 3 and 5. What is AR-09’s share?'),
      options: [t('500,000', '500,000'), t('300,000', '300,000'), t('750,000', '750,000'), t('450,000', '450,000')],
      answer: 3,
      explain: t(
        '3 ÷ (2 + 3 + 5) × 1,500,000 = 450,000. پاسخ 500,000 حاصل تقسیم مساوی میان سه چاه است که عددهای هم‌ارز را نادیده می‌گیرد.',
        '3 ÷ (2 + 3 + 5) × 1,500,000 = 450,000. 500,000 is an equal split across three wells, which ignores the equivalence numbers.',
      ),
    },
    {
      q: t('ERP هنگام سرمایه‌ای کردن جزئی چاه AR-07 چه ثبتی می‌زند؟', 'What does the ERP post at the partial capitalisation of well AR-07?'),
      options: [
        t('بدهکار 1520 دارایی‌های نفت و گاز، بستانکار 1510 AUC', 'Debit 1520 Oil and gas properties, credit 1510 AUC'),
        t('بدهکار 1510 AUC، بستانکار 2120 GR/IR', 'Debit 1510 AUC, credit 2120 GR/IR'),
        t('بدهکار هزینه استهلاک، بستانکار 1510', 'Debit depreciation expense, credit 1510'),
        t('هیچ ثبتی؛ فقط وضعیت WBS عوض می‌شود', 'Nothing; only the WBS status changes'),
      ],
      answer: 0,
      explain: t(
        'سرمایه‌ای کردن بهای جمع‌شده را از AUC به دارایی نهایی می‌برد: بدهکار 1520 و بستانکار 1510. «بدهکار 1510، بستانکار GR/IR» ثبت GRN یا SES است، نه تسویه؛ و استهلاک بعداً روی دارایی نهایی حساب می‌شود، نه روی AUC.',
        'Capitalisation moves the collected cost from AUC to the final asset: debit 1520, credit 1510. “Debit 1510, credit GR/IR” is a GRN or SES posting, not settlement; and depreciation is later charged on the final asset, not on AUC.',
      ),
    },
    {
      q: t('هزینه نهایی AFE چاه AR-07 برابر 8,098,000 است که 40,000 آن آموزش اپراتورهاست. پس از همه تسویه‌ها، بهای دارایی `FA-52007` چقدر است؟', 'The final cost of the AR-07 AFE is 8,098,000, of which 40,000 is operator training. After all settlements, what is the cost of asset `FA-52007`?'),
      options: [t('8,098,000', '8,098,000'), t('8,058,000', '8,058,000'), t('7,900,000', '7,900,000'), t('8,000,000', '8,000,000')],
      answer: 1,
      explain: t(
        '8,098,000 − 40,000 = 8,058,000؛ یعنی 7,900,000 در سرمایه‌ای کردن جزئی، 146,000 در تسویه نهایی و 12,000 در تسویه بعدی. 8,098,000 آموزش را کم نکرده است و 7,900,000 فقط مبلغ ماه 4 است.',
        '8,098,000 − 40,000 = 8,058,000: 7,900,000 at partial capitalisation, 146,000 at final settlement and 12,000 at subsequent settlement. 8,098,000 forgets to deduct the training, and 7,900,000 is only the month-4 amount.',
      ),
    },
    {
      q: t('با روش تلاش‌های موفق، چاه اکتشافی خشک چگونه ثبت می‌شود؟', 'Under successful efforts, how is a dry exploration well recorded?'),
      options: [
        t('سرمایه‌ای در استخر هزینه', 'Capitalised in the cost pool'),
        t('سرمایه‌ای در دارایی‌های توسعه میدان', 'Capitalised in field development assets'),
        t('حذف از E&E و هزینه دوره', 'Written off from E&E and expensed'),
        t('در AUC می‌ماند تا AFE بسته شود', 'Left in AUC until the AFE closes'),
      ],
      answer: 2,
      explain: t(
        'در تلاش‌های موفق فقط تلاشی سرمایه‌ای می‌شود که به کشف تجاری برسد؛ چاه اکتشافی خشک از دارایی E&E حذف و هزینه می‌شود (بدهکار 5410). «استخر هزینه» مخصوص روش بهای تمام‌شده کامل است.',
        'Under successful efforts only effort that leads to a commercial find is capitalised; a dry exploration well is written off from E&E and expensed (debit 5410). The “cost pool” belongs to the full cost method.',
      ),
    },
    {
      q: t('با روش تلاش‌های موفق، چاه توسعه‌ای که در مخزن اثبات‌شده خشک از آب درآمده، چگونه ثبت می‌شود؟', 'Under successful efforts, how is a development well that turned out dry in a proven reservoir recorded?'),
      options: [
        t('سرمایه‌ای؛ بخشی از بهای توسعه میدان', 'Capitalised; part of the field development cost'),
        t('هزینه دوره مثل چاه اکتشافی خشک', 'Expensed like a dry exploration well'),
        t('به حساب دریافتنی از شرکا', 'To the partner receivable'),
        t('غیرقابل بازیافت و هزینه دوره', 'Non-recoverable and expensed'),
      ],
      answer: 0,
      explain: t(
        'در تلاش‌های موفق، چاه توسعه‌ای حتی اگر خشک باشد بخشی از هزینه لازم برای توسعه مخزن اثبات‌شده است و سرمایه‌ای می‌ماند. یکی دانستن آن با چاه اکتشافی خشک، خطای رایجی است.',
        'Under successful efforts a development well, even if dry, is part of the cost of developing a proven reservoir and stays capitalised. Treating it like a dry exploration well is a common mistake.',
      ),
    },
    {
      q: t('مسار پترولیوم 40٪ یک بلوک اکتشافی را دارد. چاه خشک آن 5,600,000 ناخالص هزینه داشته است. با تلاش‌های موفق، چه مبلغی به هزینه دوره مسار می‌رود؟', 'Masar Petroleum holds 40% of an exploration block. Its dry well cost 5,600,000 gross. Under successful efforts, how much goes to Masar’s period expense?'),
      options: [t('5,600,000', '5,600,000'), t('3,360,000', '3,360,000'), t('صفر', 'Zero'), t('2,240,000', '2,240,000')],
      answer: 3,
      explain: t(
        'هر شریک فقط سهم خودش را در دفاترش دارد: 40٪ × 5,600,000 = 2,240,000. 3,360,000 سهم شرکای دیگر (60٪) است و صفر پاسخ روش بهای تمام‌شده کامل.',
        'Each partner carries only its own share in its books: 40% × 5,600,000 = 2,240,000. 3,360,000 is the other partners’ 60% share, and zero is the full cost answer.',
      ),
    },
    {
      q: t('AFE مصوب چاه AR-07 برابر 8,800,000 (با ذخیره احتیاطی) و هزینه نهایی 8,098,000 است. هنگام بستن چه سندی و با چه مبلغی صادر می‌شود؟', 'The approved AR-07 AFE is 8,800,000 (including contingency) and the final cost is 8,098,000. What document is issued at close, and for how much?'),
      options: [t('افزایش 98,000', 'Supplement of 98,000'), t('برگشت 702,000', 'Return of 702,000'), t('انتقال 702,000 به AFE دیگر', 'Transfer of 702,000 to another AFE'), t('سندی لازم نیست', 'No document is needed')],
      answer: 1,
      explain: t(
        '8,800,000 − 8,098,000 = 702,000 بودجه بی‌استفاده (شامل 640,000 ذخیره احتیاطی باقی‌مانده) با سند برگشت آزاد می‌شود تا در WP&B به کار دیگری برسد. 98,000 فاصله هزینه نهایی با برآورد پایه است که ذخیره احتیاطی پوشش داده و در گزارش بستن توضیح داده می‌شود، نه سند افزایش تازه.',
        '8,800,000 − 8,098,000 = 702,000 of unused budget (including the 640,000 of contingency left) is released by a return document so the WP&B can use it elsewhere. 98,000 is the gap between final cost and the base estimate, covered by contingency and explained in the close-out report, not a new supplement.',
      ),
    },
    {
      q: t('یک ماه پس از TECO، فاکتوری با 12,000 تفاوت تأییدشده برای سیمان‌کاری چاه AR-07 می‌رسد. درست‌ترین کار چیست؟', 'A month after TECO, an invoice with an approved 12,000 difference for AR-07 cementing arrives. What is the right treatment?'),
      options: [
        t('ثبت روی مرکز هزینه تولید چون WBS تکمیل شده است', 'Post it to the production cost centre because the WBS is complete'),
        t('بازکردن دوباره AFE و گرفتن افزایش', 'Reopen the AFE and get a supplement'),
        t('ثبت روی همان WBS و تسویه بعدی به دارایی چاه', 'Post it to the same WBS and settle it to the well asset with a subsequent settlement'),
        t('نگه داشتن فاکتور تا پایان سال', 'Hold the invoice until year end'),
      ],
      answer: 2,
      explain: t(
        'وضعیت TECO دقیقاً برای همین ثبت‌های دیرهنگام است: فاکتور روی `.02.02` می‌نشیند و تسویه بعدی آن را به `FA-52007` می‌برد. ثبت روی مرکز هزینه، هم دارایی را کم و هزینه دوره را زیاد نشان می‌دهد و هم طبقه بازیافت را از توسعه به عملیاتی می‌برد.',
        'TECO status exists exactly for such late postings: the invoice lands on `.02.02` and a subsequent settlement moves it to `FA-52007`. Posting to a cost centre understates the asset, overstates period expense and moves the recovery category from Development to Operating.',
      ),
    },
  ],
}

function blank(): L {
  return { fa: '', en: '' }
}
