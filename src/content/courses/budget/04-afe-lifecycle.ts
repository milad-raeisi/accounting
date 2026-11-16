import type { Lesson } from '../../types'

const t = (fa: string, en: string) => ({ fa, en })

/* Account titles used in the Masar Petroleum examples (codes follow the accounting course's chart of accounts). */
const ac = {
  aucAR07: t('1510 دارایی‌های در جریان تکمیل (WBS `AFE-2025-014.03.01`، عنصر هزینه 6150)', '1510 Assets under construction (WBS `AFE-2025-014.03.01`, cost element 6150)'),
  aucAR07Billed: t('1510 دارایی‌های در جریان تکمیل (سهم شرکا از `AFE-2025-014`)', '1510 Assets under construction (partners’ share of `AFE-2025-014`)'),
  grir: t('2120 حساب واسط رسید کالا و فاکتور (GR/IR)', '2120 GR/IR clearing'),
  ap: t('2110 حساب‌های پرداختنی', '2110 Accounts payable'),
  recA: t('1220 دریافتنی از شرکای مشارکت: شریک الف', '1220 Receivable from JV partners: Partner A'),
  recB: t('1220 دریافتنی از شرکای مشارکت: شریک ب', '1220 Receivable from JV partners: Partner B'),
  oilGasAR06: t('1520 دارایی‌های نفت و گاز (چاه AR-06)', '1520 Oil and gas properties (well AR-06)'),
  aucAR06: t('1510 دارایی‌های در جریان تکمیل (WBS `AFE-2024-011`)', '1510 Assets under construction (WBS `AFE-2024-011`)'),
  oilGasAR12: t('1520 دارایی‌های نفت و گاز (خط جریان AR-12)', '1520 Oil and gas properties (AR-12 flowline)'),
  aucAR12: t('1510 دارایی‌های در جریان تکمیل (WBS `AFE-2026-005`)', '1510 Assets under construction (WBS `AFE-2026-005`)'),
}

export const lesson: Lesson = {
  slug: 'afe-lifecycle',
  number: 4,
  level: 'intermediate',
  minutes: 32,
  icon: 'FileCheck',
  tone: 'equity',
  title: t('چرخه عمر AFE (مجوز هزینه)', 'The AFE Lifecycle'),
  summary: t(
    'مجوز هزینه (AFE) سندی است که پیش از خرج کردن پول یک پروژه مشخص، دامنه، برآورد، زمان‌بندی و کدهای هزینه آن را به تصویب مدیریت، شرکا و در صورت لزوم دولت می‌رساند. در این درس محتوای AFE، کلاس‌های برآورد و ذخیره احتیاطی، تأیید داخلی با جدول تفویض اختیار، تأیید شرکا طبق JOA، تأیید دولت یا شرکت ملی نفت، AFE تکمیلی و فراتر رفتن از بودجه، بستن AFE و گزارش هزینه نهایی، و AFE در ERP با بودجه و کنترل در دسترس بودن بودجه را می‌آموزید.',
    'An authorisation for expenditure (AFE) is the document that, before a specific project spends any money, takes its scope, estimate, schedule and cost codes to management, the partners and, where required, the government for approval. This lesson covers AFE contents, estimate classes and contingency, internal approval under the delegation of authority, partner approval under the JOA, government or NOC approval, supplementary AFEs and overruns, AFE close-out and the final cost report, and the AFE in the ERP with budget and availability control.',
  ),
  objectives: [
    t('هدف AFE و تفاوت آن با WP&B را توضیح دهید و اجزای یک AFE کامل را نام ببرید', 'Explain the purpose of an AFE and how it differs from the WP&B, and list the parts of a complete AFE'),
    t('کلاس برآورد مناسب را انتخاب کنید، بازه دقت آن را حساب کنید و ذخیره احتیاطی را درست بگذارید', 'Choose the right estimate class, calculate its accuracy range and set contingency correctly'),
    t('مسیر تأیید AFE را از جدول تفویض اختیار تا رأی شرکا و تأیید دولت تعیین کنید', 'Work out an AFE’s approval route from the delegation of authority to the partner ballot and government approval'),
    t('پیش‌بینی هزینه نهایی را حساب کنید و تشخیص دهید کی AFE تکمیلی لازم است', 'Calculate the forecast final cost and recognise when a supplementary AFE is needed'),
    t('AFE را ببندید، گزارش هزینه نهایی بسازید و ثبت‌های ERP از تعهد تا سرمایه‌ای کردن را بنویسید', 'Close out an AFE, build the final cost report and write the ERP postings from commitment to capitalisation'),
  ],
  sections: [
    {
      id: 'why-afe',
      title: t('AFE چیست و چرا لازم است؟', 'What an AFE Is and Why It Is Needed'),
      blocks: [
        {
          type: 'p',
          text: t(
            'WP&B سال 2026 میدان آریا تصویب شده و حفاری چاه AR-07 با 8,800,000 در آن آمده است. با این حال مدیر حفاری هنوز نمی‌تواند قرارداد دکل را فراخوان کند. WP&B گفته است «امسال یک چاه حفر می‌کنیم»؛ اما شرکا پیش از آنکه پولشان خرج شود می‌خواهند بدانند **دقیقاً** چه چیزی، با چه برآوردی، در چه زمانی و با چه ریسک‌هایی ساخته می‌شود. سندی که این پاسخ را می‌دهد و مجوز خرج را صادر می‌کند، **AFE** است.',
            'The Arya field’s 2026 WP&B is approved and drilling well AR-07 appears in it at 8,800,000. Even so, the drilling manager cannot yet call off the rig contract. The WP&B said “we will drill one well this year”; before their money is spent, the partners want to know **exactly** what will be built, on what estimate, when and with what risks. The document that answers this and grants the authority to spend is the **AFE**.',
          ),
        },
        {
          type: 'p',
          text: t(
            '**مجوز هزینه (Authorisation for Expenditure یا AFE)** سند مصوبی است که سقف مبلغ مجاز برای یک کار مشخص (یک چاه، یک پروژه تأسیسات، یک مطالعه بزرگ) را همراه با دامنه کار، برآورد، زمان‌بندی، کدهای هزینه و ریسک‌ها تعیین می‌کند. در مشارکت، AFE هم مجوز داخلی بهره‌بردار است و هم رضایت مکتوب شرکا برای پرداخت سهمشان. پس از تصویب، AFE مبنای کنترل هزینه، درخواست وجه از شرکا، گزارش ماهانه و در پایان، گزارش هزینه نهایی و سرمایه‌ای کردن است.',
            'An **authorisation for expenditure (AFE)** is an approved document that sets the maximum amount authorised for a specific job (a well, a facilities project, a major study) together with its scope, estimate, schedule, cost codes and risks. In a joint venture the AFE is both the operator’s internal authority and the partners’ written consent to pay their share. Once approved, the AFE is the basis for cost control, cash calls, monthly reports and, at the end, the final cost report and capitalisation.',
          ),
        },
        {
          type: 'list',
          items: [
            t('**مجوز**: هیچ تعهدی (درخواست، سفارش، فراخوان) روی پروژه پیش از تصویب AFE ثبت نمی‌شود.', '**Authority**: no commitment (requisition, PO, call-off) is placed on the project before the AFE is approved.'),
            t('**سقف**: مبلغ AFE سقف خرج است؛ فراتر رفتن از حد مجاز، AFE تکمیلی می‌خواهد.', '**Ceiling**: the AFE amount caps spending; going beyond the allowed tolerance needs a supplementary AFE.'),
            t('**رضایت شرکا**: امضای شرکا یعنی تعهد به پرداخت سهمشان از هزینه‌های همین کار.', '**Partner consent**: the partners’ signature commits them to pay their share of this job’s costs.'),
            t('**پایه بازیافت هزینه**: هزینه‌ای که روی AFE مصوب و با کد درست ثبت شده، با مدارک قابل دفاع است.', '**Basis for cost recovery**: a cost posted to an approved AFE with the right code can be defended with evidence.'),
            t('**پایه کنترل**: ردیف‌های AFE همان عناصر WBS است و هر ماه با هزینه واقعی مقایسه می‌شود.', '**Basis for control**: the AFE lines are the WBS elements and are compared with actual cost every month.'),
          ],
        },
        {
          type: 'diagram',
          id: 'afe-lifecycle',
          caption: t(
            'چرخه عمر AFE در ERP: تهیه، تأیید داخلی، تأیید شرکا و دولت، آزادسازی بودجه، تعهد، هزینه واقعی با GRN و SES، AFE تکمیلی و بستن.',
            'The AFE lifecycle in the ERP: prepare, internal approval, partner and government approval, budget release, commitment, actual cost through GRN and SES, supplement and close-out.',
          ),
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل: شماره و صاحب AFE', 'In practice: the AFE number and owner'),
          text: t(
            'هر AFE یک شماره یکتا دارد که سال تصویب را نشان می‌دهد (`AFE-2025-014`) و همان شماره کد پروژه در ERP می‌شود؛ پس روی هر سفارش، GRN، SES، فاکتور و گزارش شرکا دیده می‌شود. هر AFE یک **صاحب** دارد (برای AR-07، مدیر حفاری) که پاسخ‌گوی دامنه، هزینه و پیش‌بینی آن است. یک AFE نباید چند کار بی‌ربط را با هم بپوشاند؛ هر کار، AFE خودش.',
            'Every AFE has a unique number that shows its approval year (`AFE-2025-014`), and that number becomes the project code in the ERP, so it appears on every PO, GRN, SES, invoice and partner report. Every AFE has an **owner** (for AR-07, the drilling manager) who answers for its scope, cost and forecast. One AFE should not cover several unrelated jobs; each job gets its own AFE.',
          ),
        },
      ],
    },
    {
      id: 'afe-contents',
      title: t('محتوای AFE: دامنه، برآورد و ذخیره احتیاطی', 'AFE Contents: Scope, Estimate and Contingency'),
      blocks: [
        {
          type: 'list',
          items: [
            t('**دامنه و هدف**: چه چیزی ساخته می‌شود و چرا (مثلاً چاه توسعه‌ای AR-07 تا عمق هدف، با تکمیل و اتصال به جداکننده)؛ گزینه‌های بررسی‌شده.', '**Scope and purpose**: what will be built and why (for example development well AR-07 to target depth, completed and tied in to the separator); options considered.'),
            t('**برآورد هزینه**: به تفکیک عناصر WBS، با مبنای هر عدد (مقدار × نرخ) و **کلاس برآورد**.', '**Cost estimate**: by WBS element, with the basis of each figure (quantity × rate) and the **estimate class**.'),
            t('**ذخیره احتیاطی**: مبلغ و دلیل آن (ریسک‌های شناخته‌شده).', '**Contingency**: the amount and the reason for it (known risks).'),
            t('**زمان‌بندی**: تاریخ شروع، مدت، نقاط کلیدی و زمان‌بندی خرج (برای درخواست وجه).', '**Schedule**: start date, duration, key milestones and spending phasing (for cash calls).'),
            t('**کدهای هزینه**: شماره پروژه، عناصر WBS، طبقه هزینه (توسعه)، نشانگر R/N، مرکز هزینه مسئول.', '**Cost codes**: project number, WBS elements, cost category (development), R/N flag, responsible cost centre.'),
            t('**ریسک‌ها و HSE**: ریسک‌های فنی (گیر کردن لوله، هرزروی گل)، ایمنی و محیط زیست، و برنامه کاهش آن‌ها.', '**Risks and HSE**: technical risks (stuck pipe, lost circulation), safety and environment, and how they are mitigated.'),
            t('**اقتصاد پروژه**: تولید مورد انتظار، ارزش فعلی خالص و دوره بازگشت سرمایه.', '**Economics**: expected production, net present value and payback.'),
            t('**سهم شرکا و امضاها**: سهم هر شریک از مبلغ AFE، و جای امضای تأییدکنندگان داخلی و شرکا.', '**Partner shares and signatures**: each partner’s share of the AFE amount, and signature blocks for internal approvers and partners.'),
          ],
        },
        {
          type: 'table',
          caption: t('خلاصه برآورد `AFE-2025-014` حفاری و تکمیل چاه AR-07', 'Estimate summary of `AFE-2025-014` drill and complete well AR-07'),
          head: [t('عنصر WBS', 'WBS element'), t('مبنای برآورد', 'Estimate basis'), t('برآورد', 'Estimate')],
          numericCols: [2],
          rows: [
            [t('`.01` آماده‌سازی پیش از حفاری', '`.01` Pre-spud and site preparation'), t('قرارداد عمرانی و جابه‌جایی دکل', 'Civil contract and rig move'), 620000],
            [t('`.02` حفاری', '`.02` Drilling'), t('روزهای دکل، خدمات حفاری و لوله‌ها', 'Rig days, drilling services and tubulars'), 4900000],
            [t('`.03` تکمیل و آزمایش چاه', '`.03` Completion and testing'), t('تجهیزات تکمیل و خدمات آزمایش', 'Completion equipment and testing services'), 1880000],
            [t('`.04` مدیریت پروژه', '`.04` Project management'), t('تیم نظارت، بیمه و مجوزها', 'Supervision team, insurance and permits'), 600000],
            [t('**برآورد پایه**', '**Base estimate**'), t('جمع ردیف‌ها', 'Sum of lines'), 8000000],
            [t('ذخیره احتیاطی', 'Contingency'), t('10٪ برآورد پایه', '10% of base estimate'), 800000],
            [t('**مبلغ AFE**', '**AFE amount**'), t('برآورد پایه + ذخیره', 'Base + contingency'), 8800000],
          ],
        },
        {
          type: 'table',
          caption: t('سهم شرکا از مبلغ AFE (سهم‌ها فرضی‌اند)', 'Partner shares of the AFE amount (illustrative shares)'),
          head: [t('شریک', 'Partner'), t('سهم مشارکت', 'Interest'), t('سهم از 8,800,000', 'Share of 8,800,000')],
          numericCols: [2],
          rows: [
            [t('مسار پترولیوم (بهره‌بردار)', 'Masar Petroleum (operator)'), t('50٪', '50%'), 4400000],
            [t('شریک الف', 'Partner A'), t('30٪', '30%'), 2640000],
            [t('شریک ب', 'Partner B'), t('20٪', '20%'), 1760000],
            [t('**جمع**', '**Total**'), t('100٪', '100%'), 8800000],
          ],
        },
        {
          type: 'p',
          text: t(
            '**ذخیره احتیاطی (Contingency)** مبلغی است برای ریسک‌های **شناخته‌شده‌ای** که احتمال دارد رخ دهند اما مقدارشان معلوم نیست، مثل چند روز دکل اضافه برای گیر کردن لوله. ذخیره احتیاطی جزء مبلغ AFE است و شرکا آن را تصویب می‌کنند. آن را با «احتیاط اضافه» پنهان در ردیف‌ها یکی نگیرید؛ ذخیره باید آشکار، مستدل و جدا باشد. **کلاس برآورد** میزان پختگی تعریف پروژه و دقت مورد انتظار برآورد را نشان می‌دهد.',
            '**Contingency** is an amount for **known** risks that are likely to occur but whose size is uncertain, such as a few extra rig days for stuck pipe. Contingency is part of the AFE amount and the partners approve it. Do not confuse it with padding hidden inside lines; contingency must be visible, justified and separate. The **estimate class** shows how mature the project definition is and how accurate the estimate is expected to be.',
          ),
        },
        {
          type: 'table',
          caption: t('کلاس‌های برآورد (بازه‌های تقریبی بر پایه رویه رایج صنعت، مانند طبقه‌بندی AACE International؛ هر شرکت بازه‌های خودش را تعیین می‌کند)', 'Estimate classes (indicative ranges based on common industry practice, such as the AACE International classification; each company sets its own)'),
          head: [t('کلاس', 'Class'), t('پختگی تعریف پروژه', 'Project definition'), t('کاربرد', 'Typical use'), t('بازه دقت تقریبی', 'Indicative accuracy')],
          rows: [
            [t('5', '5'), t('0٪ تا 2٪', '0% to 2%'), t('غربال ایده', 'Concept screening'), t('20٪ تا 50٪ کمتر / 30٪ تا 100٪ بیشتر', '−20% to −50% / +30% to +100%')],
            [t('4', '4'), t('1٪ تا 15٪', '1% to 15%'), t('مطالعه امکان‌سنجی', 'Feasibility study'), t('15٪ تا 30٪ کمتر / 20٪ تا 50٪ بیشتر', '−15% to −30% / +20% to +50%')],
            [t('3', '3'), t('10٪ تا 40٪', '10% to 40%'), t('تصویب بودجه و AFE', 'Budget authorisation and AFE'), t('10٪ تا 20٪ کمتر / 10٪ تا 30٪ بیشتر', '−10% to −20% / +10% to +30%')],
            [t('2', '2'), t('30٪ تا 75٪', '30% to 75%'), t('کنترل یا مناقصه', 'Control or tender'), t('5٪ تا 15٪ کمتر / 5٪ تا 20٪ بیشتر', '−5% to −15% / +5% to +20%')],
            [t('1', '1'), t('65٪ تا 100٪', '65% to 100%'), t('برآورد کنترلی یا پیشنهاد نهایی', 'Check estimate or final bid'), t('3٪ تا 10٪ کمتر / 3٪ تا 15٪ بیشتر', '−3% to −10% / +3% to +15%')],
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: t('بازه دقت برآورد AR-07', 'The accuracy range of the AR-07 estimate'),
          text: t(
            'برآورد پایه AR-07 کلاس 3 است. با بازه تقریبی کلاس 3، هزینه واقعی ممکن است از 8,000,000 × 80٪ = 6,400,000 تا 8,000,000 × 90٪ = 7,200,000 در سمت پایین، و از 8,000,000 × 110٪ = 8,800,000 تا 8,000,000 × 130٪ = 10,400,000 در سمت بالا باشد. ذخیره 10٪ فقط تا 8,800,000 را می‌پوشاند؛ پس اگر ریسک‌های بزرگ رخ دهند، باید منتظر AFE تکمیلی بود.',
            'The AR-07 base estimate is Class 3. Using the indicative Class 3 range, actual cost could fall between 8,000,000 × 80% = 6,400,000 and 8,000,000 × 90% = 7,200,000 on the low side, and between 8,000,000 × 110% = 8,800,000 and 8,000,000 × 130% = 10,400,000 on the high side. The 10% contingency only covers up to 8,800,000, so if major risks materialise, expect a supplementary AFE.',
          ),
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('برآورد خوش‌بینانه برای گرفتن تصویب', 'An optimistic estimate to win approval'),
          text: t(
            'یک وسوسه رایج این است که برآورد را پایین بنویسند تا AFE زیر سقف یک سطح اختیار بماند یا شرکا راحت‌تر رأی دهند. نتیجه تقریباً همیشه یک AFE تکمیلی است که اعتماد شرکا را کم می‌کند. برآورد را با مبنای روشن، کلاس مناسب و ذخیره واقع‌بینانه بنویسید.',
            'A common temptation is to write the estimate low so the AFE stays under an authority threshold or the partners vote more easily. The result is almost always a supplementary AFE that erodes partner trust. Write the estimate with a clear basis, the right class and a realistic contingency.',
          ),
        },
      ],
    },
    {
      id: 'approvals',
      title: t('مسیر تأیید: مدیریت، شرکا و دولت', 'The Approval Route: Management, Partners and Government'),
      blocks: [
        {
          type: 'p',
          text: t(
            'AFE از سه لایه تأیید می‌گذرد. **تأیید داخلی** بهره‌بردار طبق **جدول تفویض اختیار (DoA)**؛ **تأیید شرکا** طبق **موافقت‌نامه عملیات مشترک (JOA)**؛ و در جایی که قرارداد نفتی لازم بداند، **تأیید دولت یا شرکت ملی نفت**. ترتیب معمول همین است: بهره‌بردار تا وقتی خودش AFE را تأیید نکرده، آن را برای شرکا نمی‌فرستد.',
            'An AFE passes through three layers of approval: the operator’s **internal approval** under the **delegation of authority (DoA)**; **partner approval** under the **joint operating agreement (JOA)**; and, where the petroleum contract requires it, **government or national oil company approval**. That is also the usual order: the operator does not send an AFE to the partners until it has approved it itself.',
          ),
        },
        {
          type: 'table',
          caption: t('جدول تفویض اختیار AFE در مسار پترولیوم (سقف‌ها فرضی‌اند)', 'Masar Petroleum AFE delegation of authority (illustrative limits)'),
          head: [t('مبلغ AFE', 'AFE amount'), t('تأییدکننده نهایی داخلی', 'Final internal approver'), t('بررسی‌های لازم پیش از آن', 'Reviews required first')],
          rows: [
            [t('تا 1,000,000', 'Up to 1,000,000'), t('مدیر دارایی میدان آریا', 'Arya field asset manager'), t('کنترل پروژه و مالی', 'Project controls and finance')],
            [t('بیش از 1,000,000 تا 5,000,000', 'Over 1,000,000 to 5,000,000'), t('مدیرعامل', 'CEO'), t('مدیر دارایی، مدیر مالی', 'Asset manager, CFO')],
            [t('بیش از 5,000,000', 'Over 5,000,000'), t('هیئت‌مدیره', 'Board of directors'), t('مدیر دارایی، مدیر مالی، مدیرعامل', 'Asset manager, CFO, CEO')],
          ],
        },
        {
          type: 'p',
          text: t(
            'در JOA مسار پترولیوم (ارقام فرضی)، هر AFE سرمایه‌ای بالاتر از 500,000 باید به **رأی کمیته عملیات** برسد؛ حتی اگر کار در WP&B مصوب آمده باشد. AFE با رأی شرکایی تصویب می‌شود که روی هم دست‌کم 65٪ سهم مشارکت را دارند. JOA مهلت پاسخ و قالب **برگه رأی AFE** را هم تعیین می‌کند. بسیاری از JOAها به شریکی که با برخی عملیات مخالف است اجازه می‌دهند در آن شرکت نکند (**عدم مشارکت** یا **ریسک انفرادی**) و در صورت موفقیت عملیات، جریمه‌ای در قالب سهم بیشتر برای شرکت‌کنندگان در نظر می‌گیرند؛ جزئیات کاملاً به قرارداد بستگی دارد.',
            'Under Masar Petroleum’s JOA (illustrative figures), every capital AFE above 500,000 must go to an **operating committee ballot**, even when the work is in the approved WP&B. An AFE is approved by the votes of partners holding together at least 65% of the participating interest. The JOA also sets the response deadline and the format of the **AFE ballot**. Many JOAs let a partner that opposes certain operations stay out of them (**non-consent** or **sole risk**), with a penalty in the form of a larger share for the participants if the operation succeeds; the details depend entirely on the contract.',
          ),
        },
        {
          type: 'table',
          caption: t('رأی‌گیری AFE چاه AR-07 (آستانه تصویب 65٪)', 'AR-07 AFE ballot (approval threshold 65%)'),
          head: [t('شریک', 'Partner'), t('سهم', 'Interest'), t('رأی', 'Vote'), t('سهم موافق', 'Interest in favour')],
          rows: [
            [t('مسار پترولیوم', 'Masar Petroleum'), t('50٪', '50%'), t('موافق', 'For'), t('50٪', '50%')],
            [t('شریک الف', 'Partner A'), t('30٪', '30%'), t('موافق', 'For'), t('30٪', '30%')],
            [t('شریک ب', 'Partner B'), t('20٪', '20%'), t('مخالف', 'Against'), t('0٪', '0%')],
            [t('**نتیجه**', '**Result**'), t('100٪', '100%'), t('80٪ ≥ 65٪', '80% ≥ 65%'), t('تصویب شد', 'Approved')],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('تأیید دولت یا شرکت ملی نفت', 'Government or national oil company approval'),
          text: t(
            'در برخی قراردادهای نفتی، علاوه بر WP&B سالانه، AFEها یا هزینه‌های بالاتر از یک سقف، یا انواع خاصی از کار (مثلاً حفاری چاه جدید یا قراردادهای بزرگ) باید به تأیید کارفرمای دولتی یا یک کمیته مدیریت مشترک برسند. در ایران، بسته به نوع قرارداد (بیع متقابل، IPC یا خدماتی)، این نقش با شرکت ملی نفت یا شرکت‌های تابعه آن است. اگر قرارداد چنین تأییدی را لازم بداند و گرفته نشود، هزینه ممکن است در بازیافت هزینه پذیرفته نشود؛ پس واحد مالی پیش از آزادسازی بودجه، وجود این تأیید را کنترل می‌کند.',
            'Under some petroleum contracts, beyond the annual WP&B, AFEs or costs above a threshold, or certain kinds of work (for example drilling a new well or large contracts), need the approval of the state counterparty or a joint management committee. In Iran, depending on the contract type (buy-back, IPC or service), that role sits with the national oil company or its subsidiaries. If the contract requires such approval and it is not obtained, the cost may be refused in cost recovery; so finance checks that the approval exists before the budget is released.',
          ),
        },
        {
          type: 'steps',
          items: [
            { title: t('تهیه و بررسی فنی', 'Preparation and technical review'), text: t('مهندس حفاری و مهندس هزینه AFE را می‌نویسند؛ کنترل پروژه WBS و کدها را می‌سازد.', 'The drilling engineer and cost engineer write the AFE; project controls builds the WBS and codes.') },
            { title: t('بررسی مالی', 'Finance review'), text: t('مالی بررسی می‌کند: آیا در WP&B هست؟ طبقه و نشانگر R درست است؟ سهم‌ها درست حساب شده؟', 'Finance checks: is it in the WP&B? Are the category and R flag right? Are the shares calculated correctly?') },
            { title: t('تأیید داخلی', 'Internal approval'), text: t('8,800,000 بیش از 5,000,000 است: مدیر دارایی، مدیر مالی و مدیرعامل بررسی و هیئت‌مدیره تصویب می‌کند.', '8,800,000 is over 5,000,000: the asset manager, CFO and CEO review and the board approves.') },
            { title: t('رأی شرکا', 'Partner ballot'), text: t('برگه رأی برای شرکا فرستاده می‌شود؛ با 80٪ موافق تصویب می‌شود.', 'The ballot goes to the partners; it passes with 80% in favour.') },
            { title: t('تأیید دولت (در صورت لزوم)', 'Government approval (if required)'), text: t('اگر قرارداد برای چاه جدید تأیید کارفرمای دولتی بخواهد، AFE با مدارک فنی ارسال و تأیید می‌شود.', 'If the contract requires state approval for a new well, the AFE is submitted with its technical file and approved.') },
            { title: t('آزادسازی در ERP', 'Release in the ERP'), text: t('بودجه 8,800,000 روی پروژه بارگذاری و آزاد می‌شود؛ از این لحظه می‌توان سفارش داد.', 'The 8,800,000 budget is loaded on the project and released; orders can be placed from this moment.') },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل: مخالفت یک شریک همه را متوقف نمی‌کند', 'In practice: one partner’s “no” does not stop everyone'),
          text: t(
            'شریک ب با 20٪ مخالف بود، اما AFE با 80٪ تصویب شد. اینکه شریک ب باز هم باید سهمش را بپردازد یا می‌تواند از این عملیات بیرون بماند، به قواعد JOA برای این نوع عملیات بستگی دارد. واحد عملیات مشترک باید این وضعیت را پیش از اولین درخواست وجه روشن کند تا صورت‌حساب‌ها درست صادر شوند.',
            'Partner B, with 20%, voted against, but the AFE passed with 80%. Whether Partner B must still pay its share or may stay out of this operation depends on the JOA’s rules for this kind of operation. Joint-venture accounting must settle this before the first cash call so that bills are issued correctly.',
          ),
        },
      ],
    },
    {
      id: 'tracking-supplements',
      title: t('پیگیری هزینه، فراتر رفتن از بودجه و AFE تکمیلی', 'Tracking Cost, Overruns and Supplementary AFEs'),
      blocks: [
        {
          type: 'p',
          text: t(
            'پس از تصویب، صاحب AFE هر ماه سه عدد را دنبال می‌کند: **هزینه واقعی** (آنچه با GRN، SES، حواله و فاکتور ثبت شده)، **تعهدات** (سفارش‌هایی که هنوز GRN یا SES پذیرفته‌شده ندارند) و **برآورد تا تکمیل (ETC)**، یعنی کارهایی که هنوز سفارش هم داده نشده‌اند. جمع این سه، **پیش‌بینی هزینه نهایی** است. برای دیدن یک AFE کامل از آغاز تا پایان، پرونده چاه AR-06 (`AFE-2024-011`) را دنبال می‌کنیم که پیش از AR-07 حفر شد. AFE آن 8,000,000 بود: برآورد پایه 7,200,000 و ذخیره احتیاطی 800,000.',
            'After approval, the AFE owner follows three numbers every month: **actual cost** (what has been posted through GRNs, SESs, goods issues and invoices), **commitments** (orders with no GRN or accepted SES yet) and the **estimate to complete (ETC)**, meaning work not even ordered yet. Their sum is the **forecast final cost**. To see a whole AFE from start to finish, we follow the file of well AR-06 (`AFE-2024-011`), drilled before AR-07. Its AFE was 8,000,000: base estimate 7,200,000 plus contingency 800,000.',
          ),
        },
        {
          type: 'formula',
          text: t('پیش‌بینی هزینه نهایی = هزینه واقعی + تعهدات + برآورد تا تکمیل', 'Forecast final cost = actual cost + commitments + estimate to complete'),
          note: t('درصد فراتر رفتن = (پیش‌بینی نهایی − مبلغ AFE) ÷ مبلغ AFE', 'Overrun % = (forecast final cost − AFE amount) ÷ AFE amount'),
        },
        {
          type: 'table',
          caption: t('گزارش AFE چاه AR-06 در ماه سوم، پس از گیر کردن لوله و حفاری انحرافی', 'AR-06 AFE report in month 3, after stuck pipe and a sidetrack'),
          head: [t('عنصر', 'Element'), t('برآورد پایه', 'Base estimate'), t('واقعی', 'Actual'), t('تعهدات', 'Commitments'), t('برآورد تا تکمیل', 'ETC'), t('پیش‌بینی نهایی', 'Forecast final')],
          numericCols: [1, 2, 3, 4, 5],
          rows: [
            [t('`.01` آماده‌سازی', '`.01` Site preparation'), 600000, 600000, 0, 0, 600000],
            [t('`.02` حفاری', '`.02` Drilling'), 4400000, 4300000, 500000, 1100000, 5900000],
            [t('`.03` تکمیل و آزمایش', '`.03` Completion and testing'), 1700000, 0, 900000, 980000, 1880000],
            [t('`.04` مدیریت پروژه', '`.04` Project management'), 500000, 380000, 0, 240000, 620000],
            [t('**جمع**', '**Total**'), 7200000, 5280000, 1400000, 2320000, 9000000],
          ],
        },
        {
          type: 'p',
          text: t(
            'پیش‌بینی نهایی 9,000,000 است در برابر AFE 8,000,000: فراتر رفتن 9,000,000 − 8,000,000 = 1,000,000، یعنی 1,000,000 ÷ 8,000,000 = 12.5٪. ذخیره احتیاطی کاملاً مصرف شده و هنوز 1,000,000 کم است. JOA مسار پترولیوم (فرضی) اجازه می‌دهد بهره‌بردار تا 10٪ از AFE فراتر رود و فقط به شرکا اطلاع دهد؛ بیش از 10٪، پیش از هر تعهد تازه **AFE تکمیلی** لازم است. 12.5٪ از 10٪ بیشتر است، پس AFE تکمیلی لازم است. توجه کنید که جمع مصرف‌شده (5,280,000 + 1,400,000 = 6,680,000) فقط 83.5٪ AFE است و ERP هنوز هشداری نداده است؛ این **پیش‌بینی** است که مشکل را زود نشان می‌دهد.',
            'The forecast final cost is 9,000,000 against an AFE of 8,000,000: an overrun of 9,000,000 − 8,000,000 = 1,000,000, or 1,000,000 ÷ 8,000,000 = 12.5%. Contingency is fully used and 1,000,000 is still missing. Masar Petroleum’s JOA (illustrative) lets the operator exceed an AFE by up to 10% with only a notice to partners; above 10%, a **supplementary AFE** is required before any new commitment. 12.5% is above 10%, so a supplementary AFE is needed. Note that the amount assigned (5,280,000 + 1,400,000 = 6,680,000) is only 83.5% of the AFE and the ERP has not warned yet; it is the **forecast** that shows the problem early.',
          ),
        },
        {
          type: 'table',
          caption: t('AFE تکمیلی `AFE-2024-011-S1`', 'Supplementary AFE `AFE-2024-011-S1`'),
          head: [t('قلم', 'Item'), t('مبلغ', 'Amount'), t('مسار پترولیوم 50٪', 'Masar Petroleum 50%'), t('شریک الف 30٪', 'Partner A 30%'), t('شریک ب 20٪', 'Partner B 20%')],
          numericCols: [1, 2, 3, 4],
          rows: [
            [t('کسری پیش‌بینی‌شده', 'Forecast shortfall'), 1000000, 500000, 300000, 200000],
            [t('ذخیره احتیاطی تازه برای تکمیل چاه', 'New contingency for the completion'), 200000, 100000, 60000, 40000],
            [t('**مبلغ AFE تکمیلی**', '**Supplement amount**'), 1200000, 600000, 360000, 240000],
            [t('AFE اولیه', 'Original AFE'), 8000000, 4000000, 2400000, 1600000],
            [t('**AFE بازنگری‌شده**', '**Revised AFE**'), 9200000, 4600000, 2760000, 1840000],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('AFE تکمیلی پیش از خرج، نه پس از آن', 'A supplement before spending, not after'),
          text: t(
            'AFE تکمیلی باید **به محض اینکه پیش‌بینی** از حد مجاز گذشت تهیه شود، نه وقتی فاکتورها رسیده‌اند. محتوای آن مثل AFE اصلی است: دلیل افزایش (گیر کردن لوله و حفاری انحرافی)، برآورد تازه، ذخیره تازه و سهم شرکا؛ و از همان مسیر تأیید می‌گذرد. خرد کردن افزایش به چند تکه زیر 10٪ برای فرار از رأی شرکا، تخلف است و در حسابرسی شرکا و دولت دیده می‌شود.',
            'A supplementary AFE must be prepared **as soon as the forecast** crosses the tolerance, not when the invoices arrive. Its content mirrors the original AFE: the reason for the increase (stuck pipe and sidetrack), the new estimate, new contingency and partner shares; and it follows the same approval route. Splitting the increase into several pieces under 10% to avoid a partner ballot is a breach and shows up in partner and government audits.',
          ),
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل: گزارش ماهانه AFE به شرکا', 'In practice: the monthly AFE report to partners'),
          text: t(
            'بهره‌بردار هر ماه برای هر AFE فعال گزارشی می‌فرستد: مبلغ AFE، هزینه واقعی تا امروز، تعهدات، پیش‌بینی نهایی، انحراف و توضیح هر انحراف بزرگ، و مانده ذخیره احتیاطی. شریکی که هر ماه پیش‌بینی صادقانه دیده، از AFE تکمیلی شگفت‌زده نمی‌شود و سریع‌تر رأی می‌دهد.',
            'Each month the operator sends a report for every active AFE: AFE amount, actual cost to date, commitments, forecast final cost, variance with an explanation of each large variance, and remaining contingency. A partner who has seen an honest forecast every month is not surprised by a supplement and votes faster.',
          ),
        },
      ],
    },
    {
      id: 'close-out',
      title: t('بستن AFE و گزارش هزینه نهایی', 'AFE Close-out and the Final Cost Report'),
      blocks: [
        {
          type: 'steps',
          items: [
            { title: t('تکمیل فنی', 'Technical completion'), text: t('چاه به بهره‌برداری تحویل و دکل آزاد می‌شود؛ WBS به وضعیت «تکمیل فنی» می‌رود و سفارش تازه ممنوع می‌شود.', 'The well is handed over to production and the rig released; the WBS moves to “technically complete” and new orders are blocked.') },
            { title: t('جمع کردن هزینه‌های باقی‌مانده', 'Collect the remaining costs'), text: t('آخرین GRNها و SESها پذیرفته، مانده سفارش‌های بلااستفاده لغو و تعهدات باز صفر می‌شود.', 'The last GRNs and SESs are accepted, unused PO balances are cancelled and open commitments go to zero.') },
            { title: t('تسویه GR/IR و تعهدی‌ها', 'Clear GR/IR and accruals'), text: t('GRN و SES فاکتورنشده از قبل در GR/IR ثبت شده‌اند و سند دستی نمی‌خواهند؛ فقط هزینه‌ای که هیچ GRN یا SES ندارد با سند تعهدی دستی ثبت می‌شود.', 'GRNs and SESs not yet invoiced are already in GR/IR and need no manual entry; only a cost with no GRN or SES is accrued with a manual journal.') },
            { title: t('گزارش هزینه نهایی', 'Final cost report'), text: t('مقایسه AFE و هزینه نهایی برای هر عنصر با توضیح انحراف‌ها؛ برای شرکا و در صورت لزوم دولت.', 'AFE versus final cost for each element with variance explanations; for the partners and, where required, the government.') },
            { title: t('صورت‌حساب نهایی شرکا', 'Final partner billing'), text: t('سهم هر شریک از هزینه نهایی با آنچه قبلاً صورت‌حساب شده تطبیق و اختلاف تسویه می‌شود.', 'Each partner’s share of the final cost is reconciled with what was billed before and the difference settled.') },
            { title: t('تسویه به دارایی و برگشت بودجه', 'Settle to the asset and return budget'), text: t('مانده 1510 به 1520 دارایی‌های نفت و گاز منتقل و بودجه استفاده‌نشده برگشت داده می‌شود.', 'The 1510 balance moves to 1520 Oil and gas properties and the unused budget is returned.') },
            { title: t('بستن و درس‌آموخته‌ها', 'Close and lessons learned'), text: t('WBS «بسته» می‌شود؛ هزینه‌های واقعی به بانک اطلاعات برآورد اضافه می‌شوند تا AFE بعدی دقیق‌تر شود.', 'The WBS is set to “closed”; the actual costs go into the estimating database so the next AFE is more accurate.') },
          ],
        },
        {
          type: 'table',
          caption: t('گزارش هزینه نهایی `AFE-2024-011` چاه AR-06', 'Final cost report `AFE-2024-011` well AR-06'),
          head: [t('عنصر', 'Element'), t('برآورد پایه', 'Base estimate'), t('هزینه نهایی', 'Final cost'), t('بیش از برآورد', 'Over estimate'), t('کمتر از برآورد', 'Under estimate'), t('دلیل اصلی', 'Main reason')],
          numericCols: [1, 2, 3, 4],
          rows: [
            [t('`.01` آماده‌سازی', '`.01` Site preparation'), 600000, 600000, 0, 0, t('طبق برآورد', 'As estimated')],
            [t('`.02` حفاری', '`.02` Drilling'), 4400000, 5850000, 1450000, 0, t('گیر کردن لوله و حفاری انحرافی: 14 روز دکل اضافه', 'Stuck pipe and sidetrack: 14 extra rig days')],
            [t('`.03` تکمیل و آزمایش', '`.03` Completion and testing'), 1700000, 1900000, 200000, 0, t('آزمایش چاه طولانی‌تر', 'Longer well test')],
            [t('`.04` مدیریت پروژه', '`.04` Project management'), 500000, 610000, 110000, 0, t('نظارت در روزهای اضافه', 'Supervision on the extra days')],
            [t('**جمع**', '**Total**'), 7200000, 8960000, 1760000, 0, t('', '')],
          ],
        },
        {
          type: 'p',
          text: t(
            'هزینه نهایی 8,960,000 است. نسبت به برآورد پایه 8,960,000 − 7,200,000 = 1,760,000 بیشتر شده که از محل ذخیره اولیه (800,000) و AFE تکمیلی (1,200,000)، یعنی جمعاً 2,000,000، تأمین شده است. نسبت به AFE بازنگری‌شده 9,200,000 − 8,960,000 = 240,000 کمتر خرج شده و این مبلغ در ERP **برگشت** داده می‌شود. نسبت به AFE اولیه، فراتر رفتن 8,960,000 − 8,000,000 = 960,000، یعنی 12٪ بوده است. سهم نهایی شرکا: مسار پترولیوم 8,960,000 × 50٪ = 4,480,000، شریک الف × 30٪ = 2,688,000 و شریک ب × 20٪ = 1,792,000.',
            'The final cost is 8,960,000. Against the base estimate it is 8,960,000 − 7,200,000 = 1,760,000 higher, funded from the original contingency (800,000) and the supplement (1,200,000), together 2,000,000. Against the revised AFE, 9,200,000 − 8,960,000 = 240,000 was not spent, and this amount is **returned** in the ERP. Against the original AFE, the overrun was 8,960,000 − 8,000,000 = 960,000, or 12%. Final partner shares: Masar Petroleum 8,960,000 × 50% = 4,480,000, Partner A × 30% = 2,688,000 and Partner B × 20% = 1,792,000.',
          ),
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('گزارش هزینه نهایی، پرونده بازیافت هزینه است', 'The final cost report is the cost-recovery file'),
          text: t(
            'گزارش هزینه نهایی همراه با AFE اولیه، AFE تکمیلی، رأی‌های شرکا، تأیید دولت (در صورت لزوم) و مدارک هر هزینه (سفارش، GRN، SES با برگه‌های کارکرد امضاشده، فاکتور) یک پرونده کامل می‌سازد. حسابرس شرکا و حسابرس دولت در بازیافت هزینه همین پرونده را می‌خواهند. هزینه‌ای که در این پرونده پشتوانه ندارد، ممکن است در صورت بازیافت هزینه رد شود.',
            'The final cost report, together with the original AFE, the supplement, the partner ballots, government approval (where required) and the evidence for each cost (PO, GRN, SES with signed field tickets, invoice), makes a complete file. The partners’ auditors and the government’s cost-recovery auditors ask for exactly this file. A cost without support in it may be rejected in the cost-recovery statement.',
          ),
        },
      ],
    },
    {
      id: 'afe-in-erp',
      title: t('AFE در ERP: پروژه، بودجه و کنترل در دسترس بودن بودجه', 'The AFE in the ERP: Project, Budget and Availability Control'),
      blocks: [
        {
          type: 'p',
          text: t(
            'در ERP، AFE یک **پروژه با عناصر WBS** است. پس از تصویب، مبلغ AFE با یک **سند بودجه اولیه** روی پروژه بارگذاری می‌شود (برای AR-07: 8,000,000 بین عناصر و 800,000 ذخیره در سطح 1)؛ AFE تکمیلی با **سند افزایش بودجه** و مانده استفاده‌نشده در پایان با **سند برگشت** ثبت می‌شود. **کنترل در دسترس بودن بودجه (Availability control)** هر سند تازه را پیش از ذخیره با بودجه آزاد مقایسه می‌کند. پروفایل نمونه مسار پترولیوم: زیر 90٪ مصرف بدون پیام؛ از 90٪ تا 100٪ هشدار؛ بیش از 100٪ توقف قطعی.',
            'In the ERP an AFE is a **project with WBS elements**. After approval the AFE amount is loaded on the project with an **original budget document** (for AR-07: 8,000,000 across the elements and 800,000 contingency at level 1); a supplementary AFE is entered with a **budget supplement document**, and the unused balance at the end with a **return document**. **Availability control** compares every new document with the free budget before it is saved. Masar Petroleum’s illustrative profile: below 90% consumption, no message; from 90% to 100%, a warning; above 100%, a hard stop.',
          ),
        },
        {
          type: 'table',
          caption: t('رویدادهای AFE، سندهای ERP و اثر آن‌ها در مالی', 'AFE events, ERP documents and their effect in Finance'),
          head: [t('رویداد', 'Event'), t('سند ERP', 'ERP document'), t('مسئول', 'Who'), t('ثبت در دفتر کل', 'General ledger posting')],
          rows: [
            [t('تهیه AFE', 'Prepare the AFE'), t('پروژه و WBS با برنامه هزینه', 'Project and WBS with cost plan'), t('کنترل پروژه', 'Project controls'), t('ندارد', 'None')],
            [t('تصویب و آزادسازی', 'Approve and release'), t('سند بودجه اولیه؛ وضعیت «آزادشده»', 'Original budget document; status “released”'), t('کنترل‌کننده پروژه', 'Project controller'), t('ندارد', 'None')],
            [t('تعهد', 'Commit'), t('درخواست و سفارش خرید روی WBS', 'Requisition and PO on the WBS'), t('کارشناس خرید', 'Buyer'), t('ندارد (فقط تعهد)', 'None (commitment only)')],
            [t('دریافت کالا یا خدمات', 'Receive goods or services'), t('رسید کالا (GRN) یا پذیرش برگه ثبت خدمات (SES)', 'Goods received note (GRN) or accepted service entry sheet (SES)'), t('انباردار یا مسئول قرارداد', 'Storekeeper or contract holder'), t('بدهکار 1510 روی WBS، بستانکار 2120 GR/IR', 'Dr 1510 on the WBS, Cr 2120 GR/IR')],
            [t('فاکتور', 'Invoice'), t('فاکتور تطبیق‌شده با سفارش و GRN/SES', 'Invoice matched to the PO and GRN/SES'), t('حساب‌های پرداختنی', 'Accounts payable'), t('بدهکار 2120، بستانکار 2110', 'Dr 2120, Cr 2110')],
            [t('صورت‌حساب شرکا', 'Partner billing'), t('صورت‌حساب ماهانه سهم شرکا', 'Monthly joint interest billing'), t('حسابداری عملیات مشترک', 'Joint-venture accounting'), t('بدهکار 1220 شرکا، بستانکار 1510 (سهم شرکا)', 'Dr 1220 partners, Cr 1510 (partners’ share)')],
            [t('AFE تکمیلی', 'Supplementary AFE'), t('سند افزایش بودجه', 'Budget supplement document'), t('کنترل‌کننده پروژه', 'Project controller'), t('ندارد', 'None')],
            [t('بستن', 'Close-out'), t('سند تسویه و سند برگشت بودجه؛ وضعیت «بسته»', 'Settlement document and budget return; status “closed”'), t('حسابداری دارایی', 'Asset accounting'), t('بدهکار 1520، بستانکار 1510', 'Dr 1520, Cr 1510')],
          ],
        },
        {
          type: 'journal',
          title: t('ثبت‌هایی که ERP برای AFE می‌سازد', 'Postings the ERP creates for an AFE'),
          entries: [
            {
              date: t('AR-07، روز 40', 'AR-07, Day 40'),
              lines: [
                { account: ac.aucAR07, debit: 450000 },
                { account: ac.grir, credit: 450000 },
              ],
              memo: t('رسید کالا (GRN): پکر و آویز لوله مغزی با تخصیص مستقیم به WBS؛ تعهد سفارش به همین اندازه کم می‌شود.', 'Goods received note (GRN): packer and tubing hanger charged directly to the WBS; the PO commitment falls by the same amount.'),
            },
            {
              date: t('AR-07، روز 52', 'AR-07, Day 52'),
              lines: [
                { account: ac.grir, debit: 450000 },
                { account: ac.ap, credit: 450000 },
              ],
              memo: t('فاکتور تأمین‌کننده پس از تطبیق سه‌طرفه سفارش، GRN و فاکتور.', 'Supplier invoice after the three-way match of PO, GRN and invoice.'),
            },
            {
              date: t('AR-07، پایان ماه', 'AR-07, month-end'),
              lines: [
                { account: ac.recA, debit: 135000 },
                { account: ac.recB, debit: 90000 },
                { account: ac.aucAR07Billed, credit: 225000 },
              ],
              memo: t('صورت‌حساب شرکا برای همین هزینه: الف 450,000 × 30٪ و ب 450,000 × 20٪ (ساده‌شده).', 'Partner billing for this cost: A 450,000 × 30% and B 450,000 × 20% (simplified).'),
            },
            {
              date: t('AR-06، بستن AFE', 'AR-06, AFE close-out'),
              lines: [
                { account: ac.oilGasAR06, debit: 4480000 },
                { account: ac.aucAR06, credit: 4480000 },
              ],
              memo: t('تسویه: سهم 50٪ مسار پترولیوم از هزینه نهایی 8,960,000 به دارایی‌های نفت و گاز منتقل می‌شود.', 'Settlement: Masar Petroleum’s 50% share of the 8,960,000 final cost moves to oil and gas properties.'),
            },
          ],
        },
        {
          type: 'p',
          text: t(
            'چرا تسویه AR-06 فقط 4,480,000 است و نه 8,960,000؟ چون بهره‌بردار در طول پروژه 100٪ هزینه را روی 1510 ثبت کرده و هر ماه سهم شرکا (50٪) را با صورت‌حساب از همان حساب بیرون برده است. آنچه در 1510 مانده سهم خود مسار پترولیوم است و همان دارایی او می‌شود؛ 50٪ دیگر در دفاتر شرکا سرمایه‌ای می‌شود.',
            'Why is the AR-06 settlement only 4,480,000 and not 8,960,000? Because during the project the operator posted 100% of the cost to 1510 and each month billed the partners’ share (50%) out of the same account. What remains in 1510 is Masar Petroleum’s own share and becomes its asset; the other 50% is capitalised in the partners’ books.',
          ),
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('ساده‌سازی صورت‌حساب شرکا', 'A simplified view of partner billing'),
          text: t(
            'در عمل بسیاری از بهره‌بردارها یک **حساب مشترک** جدا نگه می‌دارند، از شرکا پیش‌پرداخت (**درخواست وجه**) می‌گیرند و ماهانه آن را با هزینه واقعی تطبیق می‌دهند. نتیجه در دفاتر خود بهره‌بردار همان است: فقط سهم خودش دارایی او می‌شود. جزئیات حسابداری عملیات مشترک در درس‌های مربوط در دوره حسابداری مالی آمده است.',
            'In practice many operators keep a separate **joint account**, collect advances (**cash calls**) from the partners and reconcile them with actual cost each month. The result in the operator’s own books is the same: only its own share becomes its asset. Joint-operations accounting is covered in detail in the related lessons of the financial accounting course.',
          ),
        },
        {
          type: 'h',
          text: t('اشتباه‌های رایج', 'Common mistakes'),
        },
        {
          type: 'list',
          items: [
            t('**سفارش پیش از تصویب AFE**: «بعداً AFE را می‌گیریم» یعنی تعهد بدون مجوز؛ شرکا می‌توانند سهمشان را نپردازند.', '**Ordering before the AFE is approved**: “we will get the AFE later” means a commitment without authority; the partners may refuse to pay their share.'),
            t('**دیدن فقط هزینه واقعی**: AFE با تعهدات و برآورد تا تکمیل کنترل می‌شود؛ هزینه واقعی همیشه دیر خبر می‌دهد.', '**Watching only actual cost**: an AFE is controlled through commitments and ETC; actual cost always reports late.'),
            t('**AFE تکمیلی دیرهنگام**: درخواست افزایش پس از خرج پول، اعتماد شرکا را از بین می‌برد و بازیافت هزینه را به خطر می‌اندازد.', '**A late supplement**: asking for more after the money is spent destroys partner trust and puts cost recovery at risk.'),
            t('**باز ماندن AFE پس از پایان کار**: پروژه‌ای که تکمیل فنی نشده، هزینه‌های بی‌ربط جذب می‌کند و سرمایه‌ای کردن را عقب می‌اندازد.', '**Leaving the AFE open after the work ends**: a project not set to technically complete attracts unrelated costs and delays capitalisation.'),
            t('**جابه‌جا کردن هزینه بین AFEها**: انتقال هزینه یک چاه پرهزینه به AFE چاه دیگر برای پنهان کردن فراتر رفتن، تخلف جدی است.', '**Moving cost between AFEs**: shifting an over-budget well’s cost onto another well’s AFE to hide an overrun is a serious breach.'),
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
            'در همه تمرین‌ها از جدول تفویض اختیار، قواعد JOA (رأی برای AFE بالاتر از 500,000، آستانه تصویب 65٪، حد مجاز فراتر رفتن 10٪) و سهم‌های 50٪، 30٪ و 20٪ همین درس استفاده کنید. ارقام فرضی‌اند.',
            'In every exercise use this lesson’s delegation of authority, JOA rules (ballot for AFEs above 500,000, 65% approval threshold, 10% overrun tolerance) and the 50%, 30% and 20% shares. All figures are illustrative.',
          ),
        },
        {
          type: 'exercise',
          title: t('مسیر تأیید سه AFE', 'The approval route of three AFEs'),
          difficulty: 'easy',
          problem: t(
            'برای هر AFE، تأییدکننده نهایی داخلی را تعیین کنید و بگویید آیا رأی کمیته عملیات لازم است. برای AFE (ب) رأی‌ها این است: مسار پترولیوم موافق، شریک الف مخالف، شریک ب موافق. نتیجه رأی‌گیری چیست؟',
            'For each AFE, name the final internal approver and say whether an operating committee ballot is needed. For AFE (b) the votes are: Masar Petroleum for, Partner A against, Partner B for. What is the ballot result?',
          ),
          given: {
            head: [t('AFE', 'AFE'), t('شرح', 'Description'), t('مبلغ', 'Amount')],
            numericCols: [2],
            rows: [
              [t('الف', 'a'), t('تعمیر خط جریان چاه AR-02 (سرمایه‌ای)', 'Repair of the AR-02 flowline (capital)'), 350000],
              [t('ب', 'b'), t('ارتقای ایستگاه پمپ تزریق آب', 'Water-injection pump station upgrade'), 2400000],
              [t('ج', 'c'), t('حفاری و تکمیل چاه AR-07', 'Drill and complete well AR-07'), 8800000],
            ],
          },
          solution: [
            {
              type: 'table',
              head: [t('AFE', 'AFE'), t('تأییدکننده نهایی داخلی', 'Final internal approver'), t('رأی شرکا؟', 'Partner ballot?')],
              rows: [
                [t('الف (350,000)', 'a (350,000)'), t('مدیر دارایی میدان', 'Field asset manager'), t('خیر؛ زیر 500,000 (در گزارش ماهانه اطلاع داده می‌شود)', 'No; under 500,000 (reported in the monthly report)')],
                [t('ب (2,400,000)', 'b (2,400,000)'), t('مدیرعامل', 'CEO'), t('بله', 'Yes')],
                [t('ج (8,800,000)', 'c (8,800,000)'), t('هیئت‌مدیره', 'Board of directors'), t('بله؛ و تأیید دولت اگر قرارداد برای چاه جدید لازم بداند', 'Yes; plus government approval if the contract requires it for a new well')],
              ],
            },
            {
              type: 'steps',
              items: [
                { title: t('رأی AFE (ب)', 'Ballot on AFE (b)'), text: t('سهم موافق: 50٪ + 20٪ = 70٪. چون 70٪ ≥ 65٪، AFE تصویب می‌شود.', 'Interest in favour: 50% + 20% = 70%. Since 70% ≥ 65%, the AFE is approved.') },
                { title: t('اگر شریک ب هم مخالف بود', 'If Partner B also voted against'), text: t('فقط 50٪ موافق بود و 50٪ < 65٪؛ AFE رد می‌شد، حتی با رأی موافق بهره‌بردار.', 'Only 50% would be in favour, and 50% < 65%; the AFE would fail, even with the operator voting for it.') },
              ],
            },
          ],
          answer: t('الف: مدیر دارایی، بدون رأی؛ ب: مدیرعامل و رأی شرکا (70٪، تصویب)؛ ج: هیئت‌مدیره، رأی شرکا و در صورت لزوم دولت.', 'a: asset manager, no ballot; b: CEO and partner ballot (70%, approved); c: board, partner ballot and government where required.'),
        },
        {
          type: 'exercise',
          title: t('کلاس برآورد و مبلغ AFE', 'Estimate class and AFE amount'),
          difficulty: 'medium',
          problem: t(
            'برای ارتقای واحد نم‌زدایی گاز، برآورد پایه کلاس 3 برابر 4,000,000 است. (الف) با بازه تقریبی کلاس 3 (10٪ تا 20٪ کمتر، 10٪ تا 30٪ بیشتر)، محدوده پایین و بالای هزینه احتمالی را حساب کنید. (ب) ذخیره احتیاطی 12٪ برآورد پایه است؛ مبلغ AFE چقدر است؟ (ج) سهم هر شریک و (د) تأییدکننده نهایی داخلی را تعیین کنید.',
            'For a gas dehydration unit upgrade, the Class 3 base estimate is 4,000,000. (a) Using the indicative Class 3 range (10% to 20% lower, 10% to 30% higher), find the low and high bounds of likely cost. (b) Contingency is 12% of the base; what is the AFE amount? (c) Find each partner’s share and (d) the final internal approver.',
          ),
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('(الف) سمت پایین', '(a) Low side'), text: t('4,000,000 × 80٪ = 3,200,000 تا 4,000,000 × 90٪ = 3,600,000.', '4,000,000 × 80% = 3,200,000 to 4,000,000 × 90% = 3,600,000.') },
                { title: t('(الف) سمت بالا', '(a) High side'), text: t('4,000,000 × 110٪ = 4,400,000 تا 4,000,000 × 130٪ = 5,200,000.', '4,000,000 × 110% = 4,400,000 to 4,000,000 × 130% = 5,200,000.') },
                { title: t('(ب) مبلغ AFE', '(b) AFE amount'), text: t('ذخیره = 4,000,000 × 12٪ = 480,000؛ AFE = 4,000,000 + 480,000 = 4,480,000.', 'Contingency = 4,000,000 × 12% = 480,000; AFE = 4,000,000 + 480,000 = 4,480,000.') },
                { title: t('(ج) سهم شرکا', '(c) Partner shares'), text: t('مسار پترولیوم 4,480,000 × 50٪ = 2,240,000؛ الف × 30٪ = 1,344,000؛ ب × 20٪ = 896,000. جمع: 4,480,000.', 'Masar Petroleum 4,480,000 × 50% = 2,240,000; A × 30% = 1,344,000; B × 20% = 896,000. Total: 4,480,000.') },
                { title: t('(د) تأیید داخلی', '(d) Internal approval'), text: t('4,480,000 بین 1,000,000 و 5,000,000 است: مدیرعامل. چون بیش از 500,000 است، رأی شرکا هم لازم است.', '4,480,000 is between 1,000,000 and 5,000,000: the CEO. Since it exceeds 500,000, a partner ballot is also needed.') },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: t(
                'ذخیره 12٪ فقط تا 4,480,000 را می‌پوشاند، در حالی که سمت بالای بازه تا 5,200,000 می‌رسد. این را در بخش ریسک AFE صادقانه بنویسید تا شرکا بدانند AFE تکمیلی ممکن است.',
                'The 12% contingency covers only up to 4,480,000, while the high side of the range reaches 5,200,000. Say so honestly in the AFE’s risk section, so the partners know a supplement is possible.',
              ),
            },
          ],
          answer: t('بازه: 3,200,000 تا 3,600,000 در پایین و 4,400,000 تا 5,200,000 در بالا؛ AFE 4,480,000 (2,240,000 / 1,344,000 / 896,000)؛ مدیرعامل و رأی شرکا.', 'Range: 3,200,000 to 3,600,000 low and 4,400,000 to 5,200,000 high; AFE 4,480,000 (2,240,000 / 1,344,000 / 896,000); CEO plus partner ballot.'),
        },
        {
          type: 'exercise',
          title: t('آیا AFE تکمیلی لازم است؟', 'Is a supplementary AFE needed?'),
          difficulty: 'medium',
          problem: t(
            'AFE ایستگاه پمپ تزریق آب (`AFE-2026-009`) با مبلغ 3,000,000 (برآورد پایه 2,700,000 و ذخیره 300,000) تصویب شده است. اکنون هزینه واقعی 2,450,000، تعهدات 380,000 و برآورد تا تکمیل 520,000 است. (الف) پیش‌بینی نهایی و درصد فراتر رفتن را حساب کنید. (ب) آیا AFE تکمیلی لازم است؟ (ج) اگر 50,000 ذخیره تازه هم بخواهید، مبلغ AFE تکمیلی و سهم هر شریک چقدر است؟ (د) کنترل در دسترس بودن بودجه اکنون چه پیامی می‌دهد؟',
            'The water-injection pump station AFE (`AFE-2026-009`) was approved at 3,000,000 (base 2,700,000 plus contingency 300,000). Actual cost is now 2,450,000, commitments 380,000 and ETC 520,000. (a) Find the forecast final cost and overrun percentage. (b) Is a supplementary AFE needed? (c) If you also want 50,000 of new contingency, what is the supplement amount and each partner’s share? (d) What message does availability control give now?',
          ),
          hint: t('درصد مصرف برای کنترل بودجه = (واقعی + تعهدات) ÷ بودجه.', 'Consumption for availability control = (actual + commitments) ÷ budget.'),
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('(الف) پیش‌بینی نهایی', '(a) Forecast final cost'), text: t('2,450,000 + 380,000 + 520,000 = 3,350,000. فراتر رفتن: 3,350,000 − 3,000,000 = 350,000؛ 350,000 ÷ 3,000,000 ≈ 11.7٪.', '2,450,000 + 380,000 + 520,000 = 3,350,000. Overrun: 3,350,000 − 3,000,000 = 350,000; 350,000 ÷ 3,000,000 ≈ 11.7%.') },
                { title: t('(ب) تصمیم', '(b) Decision'), text: t('11.7٪ از حد مجاز 10٪ بیشتر است؛ پیش از تعهد تازه، AFE تکمیلی لازم است.', '11.7% is above the 10% tolerance; a supplementary AFE is needed before any new commitment.') },
                { title: t('(ج) مبلغ و سهم‌ها', '(c) Amount and shares'), text: t('350,000 + 50,000 = 400,000؛ AFE بازنگری‌شده 3,400,000. سهم‌ها از تکمیلی: مسار پترولیوم 200,000، الف 120,000، ب 80,000.', '350,000 + 50,000 = 400,000; revised AFE 3,400,000. Shares of the supplement: Masar Petroleum 200,000, A 120,000, B 80,000.') },
                { title: t('(د) کنترل در دسترس بودن بودجه', '(d) Availability control'), text: t('(2,450,000 + 380,000) ÷ 3,000,000 = 2,830,000 ÷ 3,000,000 ≈ 94.3٪؛ بین 90٪ و 100٪، پس سندهای تازه با هشدار ذخیره می‌شوند. اما پیش‌بینی نشان می‌دهد سقف خواهد شکست.', '(2,450,000 + 380,000) ÷ 3,000,000 = 2,830,000 ÷ 3,000,000 ≈ 94.3%; between 90% and 100%, so new documents save with a warning. The forecast, however, shows the ceiling will be broken.') },
              ],
            },
          ],
          answer: t('پیش‌بینی 3,350,000 و فراتر رفتن حدود 11.7٪؛ AFE تکمیلی 400,000 (200,000 / 120,000 / 80,000) لازم است؛ ERP اکنون در محدوده هشدار (حدود 94.3٪) است.', 'Forecast 3,350,000, overrun about 11.7%; a 400,000 supplement (200,000 / 120,000 / 80,000) is needed; the ERP is now in the warning band (about 94.3%).'),
        },
        {
          type: 'exercise',
          title: t('بستن AFE خط جریان AR-12', 'Closing the AR-12 flowline AFE'),
          difficulty: 'hard',
          problem: t(
            'پروژه `AFE-2026-005` (خط جریان جدید از چاه AR-12 تا جداکننده) تمام شده است. AFE 2,000,000 بود: برآورد پایه 1,800,000 و ذخیره 200,000. هزینه‌های نهایی در جدول آمده است. یک SES آزمایش هیدرواستاتیک به مبلغ 40,000 پذیرفته شده اما فاکتورش نرسیده است. (الف) گزارش هزینه نهایی را بسازید. (ب) چقدر از ذخیره مصرف و چقدر بودجه برگشت داده می‌شود؟ (ج) آیا برای SES فاکتورنشده سند تعهدی دستی لازم است؟ (د) جمع صورت‌حساب شرکا و ثبت تسویه را بنویسید.',
            'Project `AFE-2026-005` (a new flowline from well AR-12 to the separator) is finished. The AFE was 2,000,000: base 1,800,000 plus contingency 200,000. Final costs are in the table. A hydrotest SES of 40,000 has been accepted but its invoice has not arrived. (a) Build the final cost report. (b) How much contingency was used and how much budget is returned? (c) Is a manual accrual needed for the uninvoiced SES? (d) Write the total partner billing and the settlement entry.',
          ),
          given: {
            head: [t('عنصر', 'Element'), t('برآورد پایه', 'Base estimate'), t('هزینه نهایی', 'Final cost')],
            numericCols: [1, 2],
            rows: [
              [t('`.01` لوله و اتصالات', '`.01` Line pipe and fittings'), 700000, 720000],
              [t('`.02` ساخت و نصب', '`.02` Construction and installation'), 900000, 980000],
              [t('`.03` بازرسی و آزمایش هیدرواستاتیک', '`.03` Inspection and hydrotest'), 150000, 140000],
              [t('`.04` مدیریت پروژه', '`.04` Project management'), 50000, 60000],
            ],
          },
          solution: [
            {
              type: 'table',
              caption: t('(الف) گزارش هزینه نهایی', '(a) Final cost report'),
              head: [t('عنصر', 'Element'), t('برآورد پایه', 'Base'), t('نهایی', 'Final'), t('بیش از برآورد', 'Over'), t('کمتر از برآورد', 'Under')],
              numericCols: [1, 2, 3, 4],
              rows: [
                [t('`.01`', '`.01`'), 700000, 720000, 20000, 0],
                [t('`.02`', '`.02`'), 900000, 980000, 80000, 0],
                [t('`.03`', '`.03`'), 150000, 140000, 0, 10000],
                [t('`.04`', '`.04`'), 50000, 60000, 10000, 0],
                [t('**جمع**', '**Total**'), 1800000, 1900000, 110000, 10000],
              ],
            },
            {
              type: 'steps',
              items: [
                { title: t('(ب) ذخیره و برگشت', '(b) Contingency and return'), text: t('انحراف خالص: 110,000 − 10,000 = 100,000 بیش از برآورد پایه که از ذخیره 200,000 تأمین شد. برگشت: 2,000,000 − 1,900,000 = 100,000.', 'Net variance: 110,000 − 10,000 = 100,000 over base, funded from the 200,000 contingency. Return: 2,000,000 − 1,900,000 = 100,000.') },
                { title: t('(ج) SES فاکتورنشده', '(c) The uninvoiced SES'), text: t('خیر. پذیرش SES همان لحظه بدهکار 1510 و بستانکار GR/IR را ثبت کرده است؛ 40,000 هم در هزینه نهایی است و هم در اقلام باز GR/IR. فقط باید پیگیری شود که فاکتور برسد و تطبیق شود.', 'No. Accepting the SES already posted Dr 1510 and Cr GR/IR; the 40,000 is both in the final cost and in the open GR/IR items. It only needs follow-up so the invoice arrives and is matched.') },
                { title: t('(د) صورت‌حساب شرکا', '(d) Partner billing'), text: t('شریک الف 1,900,000 × 30٪ = 570,000؛ شریک ب 1,900,000 × 20٪ = 380,000؛ جمع 950,000 از 1510 بیرون رفته و سهم مسار پترولیوم 1,900,000 × 50٪ = 950,000 در 1510 مانده است.', 'Partner A 1,900,000 × 30% = 570,000; Partner B 1,900,000 × 20% = 380,000; together 950,000 billed out of 1510, leaving Masar Petroleum’s 1,900,000 × 50% = 950,000 in 1510.') },
              ],
            },
            {
              type: 'journal',
              title: t('(د) ثبت‌ها (جمع کل دوره پروژه برای صورت‌حساب شرکا)', '(d) Entries (partner billing shown as the project total)'),
              entries: [
                {
                  date: t('صورت‌حساب شرکا', 'Partner billing'),
                  lines: [
                    { account: ac.recA, debit: 570000 },
                    { account: ac.recB, debit: 380000 },
                    { account: ac.aucAR12, credit: 950000 },
                  ],
                  memo: t('سهم 30٪ و 20٪ شرکا از هزینه نهایی 1,900,000.', 'Partners’ 30% and 20% shares of the 1,900,000 final cost.'),
                },
                {
                  date: t('تسویه در بستن AFE', 'Settlement at close-out'),
                  lines: [
                    { account: ac.oilGasAR12, debit: 950000 },
                    { account: ac.aucAR12, credit: 950000 },
                  ],
                  memo: t('سهم 50٪ مسار پترولیوم سرمایه‌ای می‌شود؛ سپس WBS بسته و 100,000 بودجه برگشت داده می‌شود.', 'Masar Petroleum’s 50% share is capitalised; then the WBS is closed and 100,000 of budget returned.'),
                },
              ],
            },
          ],
          answer: t('هزینه نهایی 1,900,000؛ 100,000 از ذخیره مصرف و 100,000 برگشت؛ سند تعهدی دستی لازم نیست؛ صورت‌حساب شرکا 950,000 و تسویه بدهکار 1520 / بستانکار 1510 به مبلغ 950,000.', 'Final cost 1,900,000; 100,000 of contingency used and 100,000 returned; no manual accrual needed; partner billing 950,000 and settlement Dr 1520 / Cr 1510 of 950,000.'),
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
            t('AFE مجوز خرج یک کار مشخص است؛ WP&B می‌گوید چه کاری در سال انجام می‌شود و AFE اجازه خرج همان کار را می‌دهد.', 'An AFE authorises spending on one specific job; the WP&B says what work happens in the year and the AFE grants authority to spend on it.'),
            t('AFE کامل دامنه، برآورد به تفکیک WBS با کلاس برآورد، ذخیره احتیاطی آشکار، زمان‌بندی، کدهای هزینه، ریسک‌ها، اقتصاد پروژه و سهم شرکا را دارد.', 'A complete AFE has scope, an estimate by WBS with its class, visible contingency, schedule, cost codes, risks, economics and partner shares.'),
            t('تأیید سه لایه دارد: جدول تفویض اختیار، رأی شرکا طبق JOA و در صورت لزوم دولت یا شرکت ملی نفت.', 'Approval has three layers: the delegation of authority, the partner ballot under the JOA and, where required, the government or NOC.'),
            t('پیش‌بینی نهایی = واقعی + تعهدات + برآورد تا تکمیل؛ وقتی از حد مجاز گذشت، AFE تکمیلی پیش از تعهد تازه لازم است.', 'Forecast final cost = actual + commitments + ETC; once it exceeds the tolerance, a supplementary AFE is needed before new commitments.'),
            t('بستن AFE: تکمیل فنی، جمع کردن هزینه‌ها، تسویه GR/IR، گزارش هزینه نهایی، صورت‌حساب نهایی شرکا، تسویه به دارایی، برگشت بودجه و بستن.', 'Close-out: technical completion, collect costs, clear GR/IR, final cost report, final partner billing, settle to the asset, return budget and close.'),
            t('در ERP، AFE پروژه‌ای با بودجه و کنترل در دسترس بودن بودجه است؛ GRN و SES هزینه را روی WBS می‌نشانند و تسویه 1510 را به 1520 می‌برد.', 'In the ERP an AFE is a project with a budget and availability control; GRNs and SESs put cost on the WBS and settlement moves 1510 to 1520.'),
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            { term: t('مجوز هزینه (AFE)', 'Authorisation for expenditure (AFE)'), def: t('سند مصوب سقف مبلغ، دامنه، برآورد و کدهای هزینه یک کار مشخص که شرکا هم امضا می‌کنند.', 'An approved document setting the maximum amount, scope, estimate and cost codes of a specific job, also signed by the partners.') },
            { term: t('کلاس برآورد', 'Estimate class'), def: t('درجه‌بندی برآورد بر پایه پختگی تعریف پروژه و دقت مورد انتظار؛ AFE معمولاً کلاس 3 است.', 'A grading of an estimate by project definition and expected accuracy; an AFE is usually Class 3.') },
            { term: t('ذخیره احتیاطی (Contingency)', 'Contingency'), def: t('مبلغ آشکار و مصوب برای ریسک‌های شناخته‌شده با اندازه نامعلوم.', 'A visible, approved amount for known risks of uncertain size.') },
            { term: t('جدول تفویض اختیار (DoA)', 'Delegation of authority (DoA)'), def: t('سند مصوبی که سقف تأیید هر سمت را تعیین می‌کند.', 'An approved document setting each position’s approval limit.') },
            { term: t('رأی AFE (AFE ballot)', 'AFE ballot'), def: t('رأی‌گیری مکتوب کمیته عملیات درباره یک AFE طبق آستانه تصویب JOA.', 'The operating committee’s written vote on an AFE under the JOA approval threshold.') },
            { term: t('عدم مشارکت / ریسک انفرادی', 'Non-consent / sole risk'), def: t('حق شریک، طبق برخی JOAها، برای بیرون ماندن از یک عملیات با پیامدهای قراردادی.', 'A partner’s right, under some JOAs, to stay out of an operation with contractual consequences.') },
            { term: t('برآورد تا تکمیل (ETC)', 'Estimate to complete (ETC)'), def: t('هزینه کارهایی که هنوز سفارش داده نشده‌اند تا پایان پروژه.', 'The cost of work not yet ordered, through to the end of the project.') },
            { term: t('AFE تکمیلی', 'Supplementary AFE'), def: t('AFE دوم برای افزایش مبلغ مجاز وقتی پیش‌بینی از حد مجاز می‌گذرد؛ از همان مسیر تأیید.', 'A second AFE raising the authorised amount when the forecast exceeds the tolerance; same approval route.') },
            { term: t('گزارش هزینه نهایی', 'Final cost report'), def: t('مقایسه AFE با هزینه نهایی هر عنصر و توضیح انحراف‌ها در بستن AFE.', 'The comparison of the AFE with each element’s final cost and the variance explanations at close-out.') },
            { term: t('کنترل در دسترس بودن بودجه', 'Availability control'), def: t('مقایسه خودکار هر سند تازه با بودجه آزاد در ERP، با هشدار و توقف قطعی.', 'The ERP’s automatic check of every new document against free budget, with a warning and a hard stop.') },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: t('تفاوت اصلی AFE با WP&B چیست؟', 'What is the main difference between an AFE and the WP&B?'),
      options: [
        t('AFE فقط برای هزینه‌های عملیاتی است', 'An AFE is only for operating costs'),
        t('WP&B را شرکا تصویب نمی‌کنند', 'The partners do not approve the WP&B'),
        t('WP&B برنامه کارهای یک سال است و AFE مجوز خرج یک کار مشخص با دامنه و برآورد دقیق آن', 'The WP&B is the year’s programme and the AFE authorises spending on one specific job with its detailed scope and estimate'),
        t('هیچ تفاوتی ندارند', 'There is no difference'),
      ],
      answer: 2,
      explain: t(
        'WP&B همه کارهای سال را در سطح کلی تصویب می‌کند؛ AFE برای یک کار مشخص دامنه، برآورد، ریسک‌ها و سهم شرکا را با جزئیات می‌آورد و مجوز خرج آن را می‌دهد. AFE بیشتر برای کارهای سرمایه‌ای است و شرکا هر دو را تصویب می‌کنند.',
        'The WP&B approves the whole year’s work at a high level; the AFE gives one job’s scope, estimate, risks and partner shares in detail and authorises its spending. AFEs are mostly for capital work, and the partners approve both.',
      ),
    },
    {
      q: t('مبلغ AFE چاه AR-07 برابر 8,800,000 است. سهم شریک ب (20٪) چقدر است؟', 'The AR-07 AFE is 8,800,000. What is Partner B’s 20% share?'),
      options: [t('2,640,000', '2,640,000'), t('1,760,000', '1,760,000'), t('1,600,000', '1,600,000'), t('4,400,000', '4,400,000')],
      answer: 1,
      explain: t('8,800,000 × 20٪ = 1,760,000. رقم 1,600,000 فقط 20٪ برآورد پایه است و ذخیره را جا انداخته؛ شرکا سهمشان را از کل مبلغ AFE تصویب می‌کنند.', '8,800,000 × 20% = 1,760,000. 1,600,000 is 20% of the base only and leaves out contingency; partners approve their share of the full AFE amount.'),
    },
    {
      q: t('برآورد پشتوانه یک AFE معمولاً در کدام کلاس است؟', 'Which estimate class usually supports an AFE?'),
      options: [t('کلاس 5', 'Class 5'), t('کلاس 4', 'Class 4'), t('کلاس 1', 'Class 1'), t('کلاس 3', 'Class 3')],
      answer: 3,
      explain: t('کلاس 3 برای تصویب بودجه و AFE به کار می‌رود. کلاس 5 و 4 برای غربال و امکان‌سنجی‌اند و برای مجوز خرج دقت کافی ندارند؛ کلاس 1 معمولاً برای برآورد کنترلی یا پیشنهاد نهایی است.', 'Class 3 is used for budget authorisation and AFEs. Classes 5 and 4 are for screening and feasibility and are not accurate enough to authorise spending; Class 1 is usually a check estimate or final bid.'),
    },
    {
      q: t('طبق جدول تفویض اختیار مسار پترولیوم، تأییدکننده نهایی داخلی یک AFE به مبلغ 2,400,000 کیست؟', 'Under Masar Petroleum’s delegation of authority, who is the final internal approver of a 2,400,000 AFE?'),
      options: [t('مدیرعامل', 'CEO'), t('مدیر دارایی میدان', 'Field asset manager'), t('هیئت‌مدیره', 'Board of directors'), t('مدیر تدارکات', 'Procurement manager')],
      answer: 0,
      explain: t('2,400,000 بین 1,000,000 و 5,000,000 است، پس مدیرعامل. مدیر دارایی فقط تا 1,000,000 اختیار دارد و هیئت‌مدیره برای بیش از 5,000,000 است.', '2,400,000 is between 1,000,000 and 5,000,000, so the CEO. The asset manager’s limit is 1,000,000 and the board is for amounts over 5,000,000.'),
    },
    {
      q: t('آستانه تصویب 65٪ است. مسار پترولیوم (50٪) موافق و شریک الف (30٪) و شریک ب (20٪) مخالف‌اند. نتیجه چیست؟', 'The approval threshold is 65%. Masar Petroleum (50%) votes for; Partner A (30%) and Partner B (20%) vote against. What is the result?'),
      options: [
        t('تصویب، چون بهره‌بردار بزرگ‌ترین سهم را دارد', 'Approved, because the operator has the largest share'),
        t('رد، چون فقط 50٪ موافق است و 50٪ < 65٪', 'Rejected, because only 50% is in favour and 50% < 65%'),
        t('تصویب، چون 50٪ نصف است', 'Approved, because 50% is half'),
        t('رد، چون هر شریک حق وتو دارد', 'Rejected, because every partner has a veto'),
      ],
      answer: 1,
      explain: t('سهم موافق 50٪ است و به آستانه 65٪ نمی‌رسد. بزرگ‌ترین سهم به‌تنهایی کافی نیست. وتوی تک‌تک شرکا هم قاعده این JOA نیست؛ اگر شریک ب موافق بود، 70٪ می‌شد و تصویب می‌شد.', 'Interest in favour is 50%, short of the 65% threshold. Having the largest share is not enough on its own. Nor does this JOA give each partner a veto; had Partner B voted for, it would be 70% and pass.'),
    },
    {
      q: t('AFE برابر 8,000,000 و پیش‌بینی هزینه نهایی 9,000,000 است. حد مجاز فراتر رفتن 10٪ است. چه باید کرد؟', 'The AFE is 8,000,000 and the forecast final cost is 9,000,000. The overrun tolerance is 10%. What must happen?'),
      options: [
        t('هیچ کاری؛ تا فاکتورها نرسیده‌اند صبر کنید', 'Nothing; wait until the invoices arrive'),
        t('فقط به شرکا اطلاع دهید، چون زیر 15٪ است', 'Just notify the partners, since it is under 15%'),
        t('هزینه اضافه را به AFE چاه دیگری منتقل کنید', 'Move the extra cost to another well’s AFE'),
        t('فراتر رفتن 12.5٪ است؛ پیش از تعهد تازه AFE تکمیلی بگیرید', 'The overrun is 12.5%; get a supplementary AFE before any new commitment'),
      ],
      answer: 3,
      explain: t('(9,000,000 − 8,000,000) ÷ 8,000,000 = 12.5٪ که از 10٪ بیشتر است. صبر تا رسیدن فاکتورها یعنی AFE تکمیلی دیرهنگام، و انتقال هزینه به AFE دیگر تخلف جدی است.', '(9,000,000 − 8,000,000) ÷ 8,000,000 = 12.5%, above 10%. Waiting for invoices means a late supplement, and moving cost to another AFE is a serious breach.'),
    },
    {
      q: t('در یک AFE، واقعی و تعهدات با هم 83.5٪ بودجه است و ERP هشداری نداده، اما پیش‌بینی نهایی 12.5٪ بیش از AFE است. کدام جمله درست است؟', 'On an AFE, actual plus commitments is 83.5% of budget and the ERP has given no warning, but the forecast final cost is 12.5% over the AFE. Which statement is right?'),
      options: [
        t('چون ERP هشدار نداده، مشکلی نیست', 'Since the ERP has not warned, there is no problem'),
        t('کنترل در دسترس بودن بودجه فقط واقعی و تعهدات را می‌بیند؛ پیش‌بینی، فراتر رفتن آینده را زودتر نشان می‌دهد و باید بر پایه آن عمل کرد', 'Availability control sees only actuals and commitments; the forecast shows the future overrun earlier and must be acted on'),
        t('باید ذخیره احتیاطی را حذف کرد تا درصد مصرف بالا برود', 'Remove the contingency so the consumption percentage rises'),
        t('پیش‌بینی مهم نیست، چون سند مالی ندارد', 'The forecast does not matter because it has no financial document'),
      ],
      answer: 1,
      explain: t('ERP فقط سندهای ثبت‌شده (واقعی و تعهد) را با بودجه می‌سنجد و کار سفارش‌داده‌نشده را نمی‌بیند. صاحب AFE با پیش‌بینی، پیش از رسیدن به توقف قطعی، AFE تکمیلی را آغاز می‌کند.', 'The ERP only measures posted documents (actuals and commitments) against budget and cannot see unordered work. The AFE owner uses the forecast to start a supplement before reaching the hard stop.'),
    },
    {
      q: t('AFE بازنگری‌شده 9,200,000 و هزینه نهایی 8,960,000 است. در بستن AFE چه مبلغی برگشت داده می‌شود؟', 'The revised AFE is 9,200,000 and the final cost is 8,960,000. How much budget is returned at close-out?'),
      options: [t('960,000', '960,000'), t('1,200,000', '1,200,000'), t('240,000', '240,000'), t('0', '0')],
      answer: 2,
      explain: t('9,200,000 − 8,960,000 = 240,000. رقم 960,000 فراتر رفتن نسبت به AFE اولیه 8,000,000 است و 1,200,000 مبلغ AFE تکمیلی.', '9,200,000 − 8,960,000 = 240,000. 960,000 is the overrun against the original 8,000,000 AFE and 1,200,000 is the supplement amount.'),
    },
    {
      q: t('در بستن AFE یک چاه موفق، ERP کدام ثبت را می‌سازد؟', 'At the close-out of a successful well’s AFE, which entry does the ERP create?'),
      options: [
        t('بدهکار 1520 دارایی‌های نفت و گاز، بستانکار 1510 دارایی‌های در جریان تکمیل', 'Dr 1520 Oil and gas properties, Cr 1510 Assets under construction'),
        t('بدهکار 1510، بستانکار 2110 حساب‌های پرداختنی', 'Dr 1510, Cr 2110 Accounts payable'),
        t('بدهکار هزینه حفاری، بستانکار 1510', 'Dr Drilling expense, Cr 1510'),
        t('هیچ ثبتی؛ فقط وضعیت WBS بسته می‌شود', 'No entry; only the WBS status changes to closed'),
      ],
      answer: 0,
      explain: t('تسویه، مانده دارایی در جریان تکمیل را به دارایی نفت و گاز منتقل (سرمایه‌ای) می‌کند. ثبت 1510 در برابر 2110 مربوط به خرید است، نه بستن؛ بردن به هزینه برای چاه موفق نادرست است؛ و بستن بدون تسویه، دارایی را برای همیشه «در جریان تکمیل» نگه می‌دارد.', 'Settlement moves the assets-under-construction balance into oil and gas properties (capitalisation). 1510 against 2110 belongs to purchasing, not close-out; expensing a successful well is wrong; and closing without settlement would leave the asset “under construction” forever.'),
    },
    {
      q: t('کدام کار با قواعد AFE سازگار است؟', 'Which action is consistent with AFE rules?'),
      options: [
        t('صدور سفارش دکل پیش از تصویب AFE و گرفتن AFE پس از شروع حفاری', 'Issuing the rig order before the AFE is approved and getting the AFE after spud'),
        t('تقسیم یک افزایش 12٪ به دو AFE تکمیلی 6٪ تا رأی شرکا لازم نشود', 'Splitting a 12% increase into two 6% supplements to avoid a partner ballot'),
        t('تهیه AFE تکمیلی به محض اینکه پیش‌بینی از حد مجاز گذشت و پیش از تعهد تازه', 'Preparing a supplementary AFE as soon as the forecast crosses the tolerance, before new commitments'),
        t('نگه داشتن AFE باز پس از تحویل چاه برای ثبت هزینه‌های چاه بعدی', 'Keeping the AFE open after the well is handed over to post the next well’s costs'),
      ],
      answer: 2,
      explain: t('AFE تکمیلی باید زود و پیش از تعهد تازه تهیه شود. سفارش پیش از تصویب، تعهد بدون مجوز است؛ خرد کردن افزایش برای فرار از رأی تخلف است؛ و استفاده از AFE باز برای کار دیگر، هزینه‌ها را روی موضوع غلط می‌نشاند.', 'A supplement must come early, before new commitments. Ordering before approval is a commitment without authority; splitting an increase to avoid a ballot is a breach; and using an open AFE for other work puts costs on the wrong object.'),
    },
  ],
}
