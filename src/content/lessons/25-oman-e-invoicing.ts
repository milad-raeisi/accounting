import type { Lesson } from '../types'

/*
 * E-invoicing in Oman (Fawtara). Status checked on 16 November 2026 against: OTA e-invoicing FAQ web page (last updated
 * 12 November 2026), OTA Fawtara FAQ PDF (30 June 2026), OTA service provider criteria page, Decision 189/2026 as reported
 * by KPMG (13 August 2026), Oman Observer (9 and 12 August 2026) and peppol.nu, the OpenPeppol PINT OM / TDD
 * specifications (docs.peppol.eu/poac/om, v1.0.1, July 2026), and Executive Regulations 53/2021 as amended by 456/2022.
 * Running example: Raml Petroleum (fictional operator) and Wadi Oilfield Services LLC (fictional contractor). Amounts in OMR.
 */

const ac = {
  ar: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' },
  ap: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
  apWadi: { fa: 'حساب‌های پرداختنی (وادی)', en: 'Accounts payable (Wadi)' },
  cash: { fa: 'موجودی نقد (بانک)', en: 'Cash at bank' },
  vatOut: { fa: 'مالیات بر ارزش افزوده خروجی', en: 'Output VAT' },
  vatIn: { fa: 'مالیات بر ارزش افزوده ورودی', en: 'Input VAT' },
  revWell: { fa: 'درآمد خدمات چاه', en: 'Well services revenue' },
  salesAllow: { fa: 'برگشت از فروش و تخفیفات', en: 'Sales returns and allowances' },
  hireExp: { fa: 'هزینه اجاره تجهیزات', en: 'Equipment hire expense' },
  grir: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing' },
  wellCost: { fa: 'هزینه مداخله در چاه (چاه RML-07، AFE)', en: 'Well intervention cost (well RML-07, AFE)' },
  itExp: { fa: 'هزینه خدمات فناوری اطلاعات', en: 'IT services expense' },
}

const d = (fa: string, en: string) => ({ fa, en })
/** Empty table cell. */
const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'oman-e-invoicing',
  number: 25,
  currency: 'omr',
  level: 'advanced',
  minutes: 35,
  icon: 'FileCheck',
  tone: 'primary',
  title: { fa: 'صورت‌حساب الکترونیکی در عمان (فوترة)', en: 'E-Invoicing in Oman (Fawtara)' },
  summary: {
    fa: 'با صورت‌حساب الکترونیکی و کنترل پیوسته تراکنش‌ها آشنا شوید، برنامه «فوترة» سازمان مالیات عمان را بشناسید (مدل پنج‌گوشه پپول، مراحل اجرا و دامنه)، مسیر یک صورت‌حساب را از ERP فروشنده تا خریدار و سازمان مالیات دنبال کنید و برای یک شرکت نفت و گاز برنامه آمادگی ERP بنویسید.',
    en: 'Understand e-invoicing and continuous transaction controls, get to know the Oman Tax Authority’s Fawtara programme (Peppol five-corner model, phases and scope), follow an invoice from the seller’s ERP to the buyer and the tax authority, and build an ERP readiness plan for an oil and gas company.',
  },
  objectives: [
    {
      fa: 'توضیح دهید صورت‌حساب الکترونیکی و کنترل پیوسته تراکنش‌ها چیست و مدل گزارش‌دهی با مدل تأیید پیشینی چه فرقی دارد',
      en: 'Explain what an e-invoice and continuous transaction controls are, and how a reporting model differs from a clearance model',
    },
    {
      fa: 'برنامه فوترة را همان‌طور که اعلام شده توصیف کنید: مبنای قانونی، مدل پنج‌گوشه، ارائه‌دهندگان خدمات معتمد، مراحل و دامنه',
      en: 'Describe Fawtara as announced: legal basis, five-corner model, accredited service providers, phases and scope',
    },
    {
      fa: 'داده‌های کلیدی صورت‌حساب الکترونیکی عمان (PINT OM) را بشناسید: شناسه یکتا، نوع تراکنش، گروه مالیاتی، دلیل نرخ صفر و ارجاع اعلامیه بستانکار',
      en: 'Identify the key data in an Oman e-invoice (PINT OM): UUID, transaction type, VAT category, zero-rating reason and credit note reference',
    },
    {
      fa: 'مسیر صورت‌حساب، اعتبارسنجی، گزارش به سازمان، اصلاح و بایگانی را دنبال کنید',
      en: 'Trace the invoice flow, validation, reporting to the authority, corrections and archiving',
    },
    {
      fa: 'برای یک شرکت نفت و گاز برنامه آمادگی ERP بنویسید و صورت‌حساب الکترونیکی را به اظهارنامه مالیاتی و چرخه خرید تا پرداخت وصل کنید',
      en: 'Plan ERP readiness for an oil and gas company and connect e-invoicing to the VAT return and the procure-to-pay cycle',
    },
  ],
  sections: [
    {
      id: 'what-is-einvoicing',
      title: { fa: 'صورت‌حساب الکترونیکی و کنترل پیوسته تراکنش‌ها', en: 'E-Invoicing and Continuous Transaction Controls' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**شرکت نفت رمل** (Raml Petroleum، بهره‌برداری فرضی در عمان) هر ماه حدود 3,000 صورت‌حساب از تأمین‌کنندگانش می‌گیرد؛ بیشتر به‌صورت PDF در ایمیل و برخی کاغذی از میدان. کارمندان حساب‌های پرداختنی آن‌ها را دستی وارد ERP می‌کنند، شماره سفارش خرید را پیدا می‌کنند و گاهی مبلغ یا شماره مالیاتی را اشتباه تایپ می‌کنند. صورت‌حساب الکترونیکی این کار را عوض می‌کند: صورت‌حساب به‌صورت داده‌ای که سیستم می‌خواند مستقیم از ERP فروشنده به ERP خریدار می‌رسد و داده‌های مالیاتی آن هم‌زمان به سازمان مالیات گزارش می‌شود.',
            en: '**Raml Petroleum** (a fictional operator in Oman) receives about 3,000 supplier invoices a month, mostly as PDFs by email and some on paper from the field. Accounts payable clerks key them into the ERP by hand, hunt for the purchase order number and sometimes mistype an amount or a VAT number. E-invoicing changes this: the invoice travels as machine-readable data straight from the seller’s ERP to the buyer’s ERP, and its tax data is reported to the tax authority at the same time.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**صورت‌حساب الکترونیکی** صورت‌حسابی است که در یک **قالب ساختاریافته و استاندارد** (در عمان XML) صادر، ارسال، دریافت و نگهداری می‌شود، به‌طوری که نرم‌افزار بدون دخالت انسان آن را می‌خواند. سازمان مالیات عمان صریحاً می‌گوید **فایل PDF صورت‌حساب الکترونیکی نیست**؛ تصویر اسکن‌شده یا صورت‌حسابی که با ایمیل فرستاده شود هم نیست.',
            en: 'An **e-invoice** is an invoice issued, sent, received and stored in a **structured, standard format** (XML in Oman) that software can read without human help. The Oman Tax Authority states plainly that **a PDF invoice is not an e-invoice**; neither is a scanned image or an invoice sent by email.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'PDF یا کاغذ', en: 'PDF or paper' },
            items: [
              { fa: 'برای چشم انسان طراحی شده است', en: 'Designed for human eyes' },
              { fa: 'خریدار باید داده‌ها را دوباره وارد کند', en: 'The buyer must re-key the data' },
              { fa: 'سازمان مالیات فقط در اظهارنامه یا رسیدگی آن را می‌بیند', en: 'The tax authority sees it only through returns or audits' },
              { fa: 'جعل یا تکرار آن آسان‌تر است', en: 'Easier to fake or duplicate' },
            ],
          },
          right: {
            title: { fa: 'صورت‌حساب الکترونیکی ساختاریافته', en: 'Structured e-invoice' },
            items: [
              { fa: 'برای خواندن ماشین طراحی شده است (XML)', en: 'Designed for machines to read (XML)' },
              { fa: 'مستقیم وارد سیستم خریدار و تطبیق خودکار می‌شود', en: 'Lands directly in the buyer’s system for automatic matching' },
              { fa: 'داده مالیاتی آن تقریباً هم‌زمان به سازمان می‌رسد', en: 'Its tax data reaches the authority almost in real time' },
              { fa: 'شناسه یکتا و قواعد اعتبارسنجی دارد', en: 'Carries a unique identifier and passes validation rules' },
            ],
          },
        },
        {
          type: 'p',
          text: {
            fa: '**کنترل پیوسته تراکنش‌ها (CTC)** یعنی سازمان مالیات داده‌های صورت‌حساب را **در زمان معامله یا نزدیک به آن** دریافت کند، نه فقط چند ماه بعد از راه اظهارنامه یا رسیدگی. کشورها CTC را با مدل‌های گوناگون اجرا می‌کنند؛ تفاوت اصلی در این است که آیا سازمان باید پیش از رسیدن صورت‌حساب به خریدار آن را تأیید کند یا فقط داده‌ها را دریافت می‌کند.',
            en: '**Continuous transaction controls (CTC)** mean the tax authority receives invoice data **at or near the time of the transaction**, not only months later through returns or audits. Countries implement CTC through different models; the main difference is whether the authority must approve an invoice before the buyer receives it, or simply receives the data.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'مدل‌های رایج', en: 'Common models' },
          head: [
            { fa: 'مدل', en: 'Model' },
            { fa: 'چگونه کار می‌کند', en: 'How it works' },
            { fa: 'نقش سازمان مالیات', en: 'Tax authority’s role' },
          ],
          rows: [
            [{ fa: 'رسیدگی پسینی (سنتی)', en: 'Post-audit (traditional)' }, { fa: 'صورت‌حساب مستقیم میان طرفین؛ سازمان فقط اظهارنامه دوره‌ای را می‌بیند', en: 'Invoices go directly between the parties; the authority sees only periodic returns' }, { fa: 'رسیدگی بعدی', en: 'Audits afterwards' }],
            [{ fa: 'گزارش‌دهی پیوسته', en: 'Real-time reporting' }, { fa: 'صورت‌حساب میان طرفین مبادله می‌شود و داده آن هم‌زمان یا بلافاصله گزارش می‌شود', en: 'Invoices are exchanged between the parties and their data is reported at once or shortly after' }, { fa: 'دریافت و پایش داده', en: 'Receives and monitors data' }],
            [{ fa: 'تأیید پیشینی (Clearance)', en: 'Clearance' }, { fa: 'صورت‌حساب پیش از رسیدن به خریدار باید از سامانه سازمان بگذرد و تأیید شود', en: 'The invoice must pass through and be approved by the authority’s platform before the buyer receives it' }, { fa: 'تأیید هر صورت‌حساب', en: 'Approves each invoice' }],
            [{ fa: 'مدل غیرمتمرکز پنج‌گوشه (پپول)', en: 'Decentralised five-corner model (Peppol)' }, { fa: 'ارائه‌دهندگان خدمات معتمد صورت‌حساب را اعتبارسنجی و میان طرفین مبادله و داده مالیاتی را به سازمان گزارش می‌کنند', en: 'Accredited service providers validate and exchange invoices between the parties and report tax data to the authority' }, { fa: 'گوشه پنجم: دریافت داده مالیاتی', en: 'The fifth corner: receives tax data' }],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'برای خوانندگان ایرانی', en: 'For readers who know Iran’s system' },
          text: {
            fa: 'اگر با «سامانه مودیان» و صورت‌حساب الکترونیکی در ایران کار کرده‌اید، ایده «شرکت معتمد» که داده را از طرف مودی به سازمان می‌فرستد برایتان آشناست. نقش ارائه‌دهنده خدمات معتمد در عمان شبیه آن است، اما معماری، استاندارد داده (پپول)، زمان‌بندی و قواعد عمان کاملاً جداست؛ تجربه ایران را راهنمای قواعد عمان قرار ندهید.',
            en: 'If you have worked with another country’s e-invoicing platform where a certified intermediary sends data on the taxpayer’s behalf, the idea of an accredited service provider will feel familiar. Oman’s architecture, data standard (Peppol), timing and rules are its own, so do not use another system’s rules as a guide to Oman.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'برنامه‌ای تازه و در حال تغییر', en: 'A new programme that is still changing' },
          text: {
            fa: 'آنچه در این درس می‌خوانید وضعیت برنامه در **16 نوامبر 2026** است، بر پایه تصمیم 189/2026، پرسش‌های متداول سازمان مالیات (آخرین به‌روزرسانی صفحه: 12 نوامبر 2026) و مشخصات فنی منتشرشده. هرجا موضوعی هنوز «برنامه‌ریزی‌شده» یا نامشخص است، صریحاً گفته‌ایم. پیش از هر تصمیم، آخرین قواعد را در درگاه مالیاتی سازمان (tms.taxoman.gov.om) و پرتال فوترة ببینید یا از نشانی fawtara@taxoman.gov.om بپرسید.',
            en: 'What you read here is the status on **16 November 2026**, based on Decision 189/2026, the OTA’s FAQ (page last updated 12 November 2026) and the published technical specifications. Where something is still planned or unclear, we say so. Before any decision, check the latest rules on the OTA Tax Portal (tms.taxoman.gov.om) and the Fawtara portal, or ask fawtara@taxoman.gov.om.',
          },
        },
      ],
    },
    {
      id: 'fawtara',
      title: { fa: 'برنامه فوترة: چارچوب، مدل و زمان‌بندی', en: 'Fawtara: Framework, Model and Timeline' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'سازمان مالیات عمان (OTA) برنامه صورت‌حساب الکترونیکی را **«فوترة»** (Fawtara) نامیده است. ماده 67 قانون مالیات بر ارزش افزوده اجازه می‌دهد صورت‌حساب الکترونیکی باشد و جزئیات را به آیین‌نامه می‌سپارد. اصلاحیه 456/2022 آیین‌نامه، «صورت‌حساب مالیاتی الکترونیکی» را تعریف کرد. سپس **تصمیم 189/2026** که در **9 اوت 2026** در روزنامه رسمی منتشر شد، آیین‌نامه را دوباره اصلاح کرد و صدور صورت‌حساب در **قالب الکترونیکی تأییدشده و امن** را الزامی کرد. سازمان مالیات در این برنامه نقش «مرجع پپول» (Peppol Authority) عمان را هم دارد.',
            en: 'The Oman Tax Authority (OTA) calls its e-invoicing programme **Fawtara**. Article 67 of the VAT Law allows invoices to be electronic and leaves the detail to the regulations. The 2022 amendment (Decision 456/2022) defined the “electronic tax invoice”. Then **Decision 189/2026**, published in the Official Gazette on **9 August 2026**, amended the regulations again and made issuing invoices in an **approved and secured electronic format** mandatory. The OTA also acts as Oman’s Peppol Authority.',
          },
        },
        {
          type: 'list',
          items: [
            { fa: '**ماده 143 (اصلاحی)**: صورت‌حساب مالیاتی در قالب الکترونیکی تأییدشده و امن، با **شماره یکتا** برای هر صورت‌حساب، صادر می‌شود؛ از جمله برای فروش به اشخاص غیرمشمول (B2C)، عرضه فرضی و پیش‌دریافت.', en: '**Article 143 (amended)**: tax invoices are issued in an approved, secured electronic format with a **unique number** for each invoice, including supplies to non-taxable persons (B2C), deemed supplies and advance payments.' },
            { fa: '**ماده 143 مکرر**: مودی باید از **ارائه‌دهنده خدمات معتمدِ** تأییدشده سازمان استفاده کند؛ سازمان فهرست آن‌ها را اعلام می‌کند.', en: '**Article 143 bis**: taxpayers must use a service provider **accredited by the OTA**; the OTA publishes the list.' },
            { fa: '**ماده 143 مکرر 1**: سیستم صدور باید امن و مطابق مشخصات فنی سازمان باشد، در برابر نفوذ و دسترسی غیرمجاز محافظت شود و برای خرابی و شرایط اضطراری، از جمله بازیابی داده، روش داشته باشد. مسئولیت امنیت با خودِ مودی است.', en: '**Article 143 bis 1**: the issuing system must be secure and meet the OTA’s technical specifications, be protected against breaches and unauthorised access, and have procedures for breakdowns and emergencies, including data recovery. Security is the taxpayer’s responsibility.' },
            { fa: '**ماده 143 مکرر 2**: رئیس سازمان می‌تواند با درخواست مستند، معافیت **موقت** بدهد؛ مودی معاف همچنان باید اظهارنامه بدهد و مالیات را به‌موقع بپردازد.', en: '**Article 143 bis 2**: the OTA Chairman may grant a **temporary** exemption on a documented request; an exempt taxpayer must still file and pay on time.' },
            { fa: '**ماده 146**: صورت‌حساب ساده‌شده هم تابع همان مهلت‌های ماده 143 است.', en: '**Article 146**: simplified tax invoices follow the same deadlines as Article 143.' },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'مراحل اجرا (وضعیت در 16 نوامبر 2026)', en: 'Rollout phases (status on 16 November 2026)' },
          head: [
            { fa: 'گروه', en: 'Group' },
            { fa: 'تاریخ', en: 'Date' },
            { fa: 'وضعیت', en: 'Status' },
          ],
          rows: [
            [{ fa: 'آزمایشی: حدود 100 مودی بزرگ منتخب', en: 'Pilot: about 100 selected large taxpayers' }, { fa: 'از اوت 2026؛ سازمان تشویق کرد تا اکتبر 2026 فعال شوند', en: 'From August 2026; the OTA encouraged go-live by October 2026' }, { fa: 'داوطلبانه؛ طبق اعلام کارگاه سازمان، جریمه صورت‌حساب الکترونیکی برای آن‌ها تا 31 مارس 2027 اعمال نمی‌شود', en: 'Voluntary; per an OTA workshop, no e-invoicing penalties for them up to 31 March 2027' }],
            [{ fa: 'مرحله 1: عرضه سالانه بیش از 5 میلیون ریال عمانی', en: 'Phase 1: annual supplies above OMR 5 million' }, { fa: '1 آوریل 2027', en: '1 April 2027' }, { fa: 'الزامی طبق تصمیم 189/2026', en: 'Mandatory under Decision 189/2026' }],
            [{ fa: 'مرحله 2: عرضه سالانه 5 میلیون یا کمتر (همه مودیان ثبت‌نام‌شده دیگر)', en: 'Phase 2: annual supplies of OMR 5 million or less (all other registered taxpayers)' }, { fa: '1 اکتبر 2027', en: '1 October 2027' }, { fa: 'الزامی طبق تصمیم 189/2026', en: 'Mandatory under Decision 189/2026' }],
            [{ fa: 'نهادهای دولتی و وزارتخانه‌ها', en: 'Government entities and ministries' }, { fa: 'در تصمیم تعیین نشده است (برنامه‌های قبلی 2028 را گفته بودند)', en: 'Not set in the decision (earlier plans mentioned 2028)' }, { fa: 'برنامه‌ریزی‌شده؛ نامشخص', en: 'Planned; unclear' }],
          ],
        },
        {
          type: 'p',
          text: {
            fa: '**آزمون 5 میلیون ریال** طبق پرسش‌های متداول سازمان: اگر عرضه‌های واقعی از آوریل 2026 تا 31 مارس 2027 **یا** عرضه‌های پیش‌بینی‌شده از 1 آوریل 2027 تا 31 مارس 2028 بیش از 5,000,000 ریال عمانی باشد، شرکت از 1 آوریل 2027 ملزم است؛ وگرنه از 1 اکتبر 2027. در این آزمون همان اقلام آزمون ثبت‌نام حساب می‌شوند: عرضه‌های مشمول **به‌جز فروش دارایی سرمایه‌ای**، خریدهای مشمول سازوکار معکوس و عرضه‌های درون‌شورای همکاری. **گروه مالیاتی** در سطح گروه سنجیده می‌شود و مودی غیرمقیم فقط عرضه‌هایش در عمان را حساب می‌کند.',
            en: '**The OMR 5 million test** per the OTA FAQ: if actual supplies from April 2026 to 31 March 2027 **or** expected supplies from 1 April 2027 to 31 March 2028 exceed OMR 5,000,000, the company must comply from 1 April 2027; otherwise from 1 October 2027. The test counts the same items as the registration test: taxable supplies **excluding capital asset sales**, reverse-charge purchases and intra-GCC supplies. A **VAT group** is tested at group level, and a non-resident counts only its supplies in Oman.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'زمان‌بندی قدیمی را کنار بگذارید', en: 'Discard the old schedule' },
          text: {
            fa: 'نسخه‌های قبلی پرسش‌های متداول (مثلاً نسخه 30 ژوئن 2026) چهار مرحله داشتند: اوت 2026، فوریه 2027، اوت 2027 (همراه شرکت‌های کوچک و متوسط) و بعد نهادهای دولتی. برخی صفحه‌های سازمان هنوز از «مرحله سوم برای شرکت‌های کوچک و متوسط» حرف می‌زنند. ملاک قانونی امروز دو تاریخ تصمیم 189/2026 است. اگر مقاله یا فروشنده نرم‌افزاری تاریخ دیگری گفت، آن را با متن تصمیم و اطلاعیه‌های سازمان مقایسه کنید.',
            en: 'Earlier FAQ versions (for example 30 June 2026) showed four rollouts: August 2026, February 2027, August 2027 (including SMEs) and then government entities. Some OTA pages still mention “a third phase for SMEs”. The legal reference today is the two dates in Decision 189/2026. If an article or a software vendor quotes other dates, check them against the decision and OTA notices.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'مدل پنج‌گوشه فوترة', en: 'Fawtara’s five-corner model' },
          head: [
            { fa: 'گوشه', en: 'Corner' },
            { fa: 'چه کسی', en: 'Who' },
            { fa: 'نقش', en: 'Role' },
          ],
          rows: [
            [{ fa: 'C1', en: 'C1' }, { fa: 'فروشنده (ERP یا سیستم صدور صورت‌حساب)', en: 'Supplier (ERP or billing system)' }, { fa: 'صورت‌حساب را می‌سازد و به ارائه‌دهنده خود می‌فرستد', en: 'Creates the invoice and sends it to its provider' }],
            [{ fa: 'C2', en: 'C2' }, { fa: 'ارائه‌دهنده خدمات معتمد فروشنده', en: 'Supplier’s accredited service provider' }, { fa: 'اعتبارسنجی، ارسال از راه شبکه پپول، گزارش داده مالیاتی', en: 'Validates, sends over the Peppol network, reports tax data' }],
            [{ fa: 'C3', en: 'C3' }, { fa: 'ارائه‌دهنده خدمات معتمد خریدار', en: 'Buyer’s accredited service provider' }, { fa: 'دریافت و تحویل به خریدار، گزارش دریافت به سازمان', en: 'Receives and delivers to the buyer, reports receipt to the OTA' }],
            [{ fa: 'C4', en: 'C4' }, { fa: 'خریدار (ERP حساب‌های پرداختنی)', en: 'Buyer (accounts payable ERP)' }, { fa: 'صورت‌حساب را دریافت، تطبیق و ثبت می‌کند', en: 'Receives, matches and posts the invoice' }],
            [{ fa: 'C5', en: 'C5' }, { fa: 'سازمان مالیات عمان', en: 'Oman Tax Authority' }, { fa: 'داده مالیاتی هر صورت‌حساب صادره و دریافتی را دریافت می‌کند', en: 'Receives the tax data of every issued and received invoice' }],
          ],
        },
        {
          type: 'p',
          text: {
            fa: '**ارائه‌دهنده خدمات معتمد (ASP)** شرکتی است که سازمان آن را برای کار به‌عنوان نقطه دسترسی پپول در شبکه فوترة تأیید کرده است. معیارهای اعلام‌شده سازمان شامل ثبت تجاری در سرزمین اصلی عمان با فعالیت فناوری اطلاعات، سرمایه پرداخت‌شده دست‌کم 6,000 ریال عمانی، دست‌کم 2 سال سابقه (برای دارندگان کارت ریاده 1 سال)، گواهی ISO/IEC 27001 و قبولی در آزمون‌های eDelivery و PINT OM پپول است. شرکت بزرگ می‌تواند با داشتن این شرایط ارائه‌دهنده خودش هم باشد. هر مودی در هر لحظه فقط به **یک** ارائه‌دهنده وصل است و اتصال، قطع و تعویض آن از پرتال فوترة انجام می‌شود. سازمان خودش هزینه‌ای نمی‌گیرد؛ قیمت خدمات ارائه‌دهنده تجاری است. طبق اعلام مدیر پروژه، صورت‌حساب باید از سیستمی صادر شود که به ارائه‌دهنده معتمد وصل است؛ ERP مستقیم به سازمان وصل نمی‌شود.',
            en: 'An **accredited service provider (ASP)** is a company the OTA has approved to act as a Peppol access point in the Fawtara network. The OTA’s published criteria include a mainland Omani commercial registration with an IT activity, paid-up capital of at least OMR 6,000, at least 2 years of experience (1 year for Riyada card holders), ISO/IEC 27001 certification, and passing Peppol’s eDelivery and PINT OM test suites. A large company that meets the criteria can be its own provider. A taxpayer is linked to **one** provider at a time, and connects, disconnects or switches through the Fawtara portal. The OTA charges no fees; provider pricing is commercial. According to the project director, invoices must be issued from a system linked to an accredited provider; the ERP does not connect directly to the OTA.',
          },
        },
        {
          type: 'list',
          items: [
            { fa: '**دامنه**: فروش به کسب‌وکار (B2B)، به دولت (B2G) و به مصرف‌کننده (B2C) هم‌زمان؛ استثنای صنعتی وجود ندارد.', en: '**Scope**: business-to-business (B2B), business-to-government (B2G) and business-to-consumer (B2C) at the same time; there are no industry exceptions.' },
            { fa: '**صادرات**: فروشنده صورت‌حساب را مثل امروز به مشتری خارجی می‌دهد، اما داده مالیاتی از مسیر C1 به C2 به C5 گزارش می‌شود.', en: '**Exports**: the seller gives the invoice to the foreign customer as today, but the tax data is reported through C1 to C2 to C5.' },
            { fa: '**واردات کالا و خدمات**: واردکننده آن را با **خودصدوری (Self-billing)** گزارش می‌کند.', en: '**Imports of goods and services**: the importer reports them through **self-billing**.' },
            { fa: '**عرضه‌های معاف و خارج از شمول**: پرسش‌های متداول قبلی گفته بود صدور صورت‌حساب الکترونیکی برای عرضه خارج از شمول الزامی نیست، اما نسخه جدید فقط به قانون ارجاع می‌دهد؛ این موضوع هنوز روشن نیست.', en: '**Exempt and out-of-scope supplies**: an earlier FAQ said e-invoices were not mandatory for out-of-scope supplies, but the newer version only refers to the law; this point is not yet clear.' },
            { fa: '**صورت‌حساب‌های قدیمی**: صورت‌حساب‌های پیش از تاریخ الزام دوباره فرستاده نمی‌شوند.', en: '**Historical invoices**: invoices issued before the mandate date are not resubmitted.' },
          ],
        },
        {
          type: 'exercise',
          title: { fa: 'هر شرکت در کدام مرحله است؟', en: 'Which phase is each company in?' },
          difficulty: 'easy',
          problem: {
            fa: 'برای هر شرکت ثبت‌نام‌شده زیر تعیین کنید صورت‌حساب الکترونیکی از چه تاریخی برایش الزامی است. ارقام به ریال عمانی است؛ «واقعی» یعنی آوریل 2026 تا مارس 2027 و «پیش‌بینی» یعنی آوریل 2027 تا مارس 2028.',
            en: 'For each registered company below, decide from which date e-invoicing is mandatory. Amounts are OMR; “actual” means April 2026 to March 2027 and “expected” means April 2027 to March 2028.',
          },
          given: {
            head: [
              { fa: 'شرکت', en: 'Company' },
              { fa: 'اطلاعات', en: 'Facts' },
            ],
            rows: [
              [{ fa: 'الف) نفت رمل', en: 'a) Raml Petroleum' }, { fa: 'عرضه واقعی 85,000,000', en: 'Actual supplies 85,000,000' }],
              [{ fa: 'ب) خدمات نفتی وادی', en: 'b) Wadi Oilfield Services' }, { fa: 'واقعی 1,200,000؛ پیش‌بینی 1,400,000', en: 'Actual 1,200,000; expected 1,400,000' }],
              [{ fa: 'ج) مهندسی صلاله', en: 'c) Salalah Engineering' }, { fa: 'واقعی: خدمات 4,100,000 و فروش یک کمپ (دارایی سرمایه‌ای) 500,000؛ پیش‌بینی 5,300,000 به دلیل قرارداد تازه', en: 'Actual: services 4,100,000 and sale of a camp (capital asset) 500,000; expected 5,300,000 because of a new contract' }],
              [{ fa: 'د) یک گروه مالیاتی سه‌عضوی', en: 'd) A three-member VAT group' }, { fa: 'عرضه واقعی اعضا: 2,100,000 و 1,800,000 و 1,600,000؛ پیش‌بینی مشابه', en: 'Members’ actual supplies: 2,100,000, 1,800,000 and 1,600,000; similar forecast' }],
            ],
          },
          hint: {
            fa: 'آزمون دو طرف دارد (واقعی یا پیش‌بینی). دارایی سرمایه‌ای حساب نمی‌شود و گروه یک‌جا سنجیده می‌شود.',
            en: 'The test has two limbs (actual or expected). Capital assets are excluded and a group is tested as one.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'شرکت', en: 'Company' },
                { fa: 'محاسبه', en: 'Working' },
                { fa: 'تاریخ الزام', en: 'Mandatory from' },
              ],
              rows: [
                [{ fa: 'الف', en: 'a' }, { fa: '85,000,000 بیش از 5,000,000', en: '85,000,000 exceeds 5,000,000' }, { fa: '1 آوریل 2027', en: '1 April 2027' }],
                [{ fa: 'ب', en: 'b' }, { fa: 'هر دو رقم کمتر از 5,000,000', en: 'Both figures below 5,000,000' }, { fa: '1 اکتبر 2027', en: '1 October 2027' }],
                [{ fa: 'ج', en: 'c' }, { fa: 'واقعی قابل احتساب 4,100,000 (کمتر)، اما پیش‌بینی 5,300,000 (بیشتر)', en: 'Countable actual 4,100,000 (below), but expected 5,300,000 (above)' }, { fa: '1 آوریل 2027', en: '1 April 2027' }],
                [{ fa: 'د', en: 'd' }, { fa: '2,100,000 + 1,800,000 + 1,600,000 = 5,500,000 در سطح گروه', en: '2,100,000 + 1,800,000 + 1,600,000 = 5,500,000 at group level' }, { fa: '1 آوریل 2027', en: '1 April 2027' }],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'دام رایج در «ج»: فقط به رقم واقعی نگاه کردن. در «د»: سنجیدن تک‌تک اعضا.',
                en: 'The usual trap in (c) is looking only at the actual figure; in (d) it is testing each member separately.',
              },
            },
          ],
          answer: {
            fa: 'الف، ج و د از 1 آوریل 2027؛ ب از 1 اکتبر 2027.',
            en: 'a, c and d from 1 April 2027; b from 1 October 2027.',
          },
        },
      ],
    },
    {
      id: 'data-format',
      title: { fa: 'داده‌های صورت‌حساب و قالب استاندارد', en: 'Invoice Data and the Standard Format' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'صورت‌حساب الکترونیکی عمان یک فایل **XML** است که از مشخصات **PINT OM** پیروی می‌کند؛ نسخه عمانی «صورت‌حساب بین‌المللی پپول» که OpenPeppol برای سازمان مالیات منتشر کرده است. سه مشخصه اصلی (نسخه 1.0.1، منتشرشده در ژوئیه 2026) وجود دارد: **PINT OM Billing** برای صورت‌حساب و اعلامیه بستانکار، **PINT OM Self-Billing** برای خودصدوری، و **سند داده مالیاتی (TDD)** برای گزارش به سازمان. صورت‌حساب باید همه اطلاعاتی را که قانون و آیین‌نامه می‌خواهند به‌اضافه فیلدهای فنی سازمان داشته باشد و ارائه‌دهنده آن را با **قواعد اعتبارسنجی عمان (Schematron)** کنترل می‌کند.',
            en: 'An Oman e-invoice is an **XML** file that follows the **PINT OM** specification, the Omani version of the Peppol International invoice that OpenPeppol published for the OTA. There are three main specifications (version 1.0.1, published July 2026): **PINT OM Billing** for invoices and credit notes, **PINT OM Self-Billing**, and the **Tax Data Document (TDD)** for reporting to the authority. The invoice must contain everything the law and regulations require plus the OTA’s technical fields, and the provider checks it against the **Oman validation rules (Schematron)**.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'فیلدهای کلیدی در PINT OM', en: 'Key fields in PINT OM' },
          head: [
            { fa: 'فیلد', en: 'Field' },
            { fa: 'شناسه', en: 'ID' },
            { fa: 'توضیح', en: 'Notes' },
          ],
          rows: [
            [{ fa: 'شماره صورت‌حساب', en: 'Invoice number' }, { fa: 'IBT-001', en: 'IBT-001' }, { fa: 'شماره ترتیبی فروشنده', en: 'The seller’s sequential number' }],
            [{ fa: 'تاریخ و زمان صدور', en: 'Issue date and time' }, { fa: 'IBT-002 / IBT-168', en: 'IBT-002 / IBT-168' }, { fa: 'زمان برای B2C و ترتیب گزارش مهم است', en: 'Time matters for B2C and reporting order' }],
            [{ fa: 'کد نوع سند', en: 'Document type code' }, { fa: 'IBT-003', en: 'IBT-003' }, { fa: 'از فهرست UN/CEFACT؛ مثلاً 380 صورت‌حساب تجاری و 381 اعلامیه بستانکار', en: 'From the UN/CEFACT list, e.g. 380 commercial invoice and 381 credit note' }],
            [{ fa: 'شناسه یکتا (UUID)', en: 'Unique identifier (UUID)' }, { fa: 'BTOM-002', en: 'BTOM-002' }, { fa: 'UUID نسخه 5؛ هر صورت‌حساب یکتاست', en: 'A version 5 UUID; unique per invoice' }],
            [{ fa: 'نوع تراکنش', en: 'Transaction type' }, { fa: 'BTOM-001', en: 'BTOM-001' }, { fa: 'رشته 20 رقمی از 0 و 1 (جدول پایین)', en: 'A 20-character string of 0s and 1s (table below)' }],
            [{ fa: 'ارز و نرخ تبدیل', en: 'Currency and exchange rate' }, { fa: 'IBT-005 / BTOM-003', en: 'IBT-005 / BTOM-003' }, { fa: 'صورت‌حساب دلاری مجاز است، اما مالیات به ریال عمانی هم لازم است', en: 'USD invoices are allowed, but VAT in OMR is also required' }],
            [{ fa: 'شماره مالیاتی فروشنده و خریدار', en: 'Seller and buyer VATIN' }, { fa: 'IBT-031 / IBT-048', en: 'IBT-031 / IBT-048' }, { fa: 'شماره خریدار ثبت‌نام‌شده نباید خالی یا غلط باشد', en: 'A registered buyer’s number must not be missing or wrong' }],
            [{ fa: 'گروه مالیاتی سطر', en: 'Line VAT category' }, { fa: 'IBT-151', en: 'IBT-151' }, { fa: 'S، Z، E یا O', en: 'S, Z, E or O' }],
            [{ fa: 'خلاصه مالیات', en: 'VAT breakdown' }, { fa: 'IBG-23', en: 'IBG-23' }, { fa: 'برای هر گروه: مبلغ مشمول (IBT-116)، مالیات (IBT-117)، کد گروه (IBT-118)', en: 'Per category: taxable amount (IBT-116), VAT (IBT-117), category code (IBT-118)' }],
            [{ fa: 'ارجاع به صورت‌حساب قبلی', en: 'Preceding invoice reference' }, { fa: 'IBT-025 / BTOM-031 / BTOM-032', en: 'IBT-025 / BTOM-031 / BTOM-032' }, { fa: 'در اعلامیه بستانکار و بدهکار: شماره و UUID صورت‌حساب اصلی و کد دلیل', en: 'On credit and debit notes: the original invoice number and UUID and the reason code' }],
          ],
        },
        {
          type: 'table',
          caption: { fa: 'گروه‌های مالیاتی PINT OM و نگاشت به کدهای ERP درس قبل', en: 'PINT OM VAT categories and mapping to the ERP codes from the VAT lesson' },
          head: [
            { fa: 'کد', en: 'Code' },
            { fa: 'معنا', en: 'Meaning' },
            { fa: 'کدهای ERP', en: 'ERP tax codes' },
          ],
          rows: [
            [{ fa: 'S', en: 'S' }, { fa: 'نرخ استاندارد', en: 'Standard rate' }, { fa: 'S5؛ و در خودصدوری واردات خدمات، RC5', en: 'S5; and RC5 on self-billed imported services' }],
            [{ fa: 'Z', en: 'Z' }, { fa: 'نرخ صفر (همراه کد دلیل)', en: 'Zero rated (with a reason code)' }, { fa: 'Z0-OG، Z0-EX', en: 'Z0-OG, Z0-EX' }],
            [{ fa: 'E', en: 'E' }, { fa: 'معاف', en: 'Exempt' }, { fa: 'E0', en: 'E0' }],
            [{ fa: 'O', en: 'O' }, { fa: 'خارج از شمول یا غیرمشمول', en: 'Outside the scope / not subject to VAT' }, { fa: 'OS', en: 'OS' }],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'هر سطر نرخ صفر باید **کد دلیل** داشته باشد. برای مثال در فهرست کدهای فعلی، VATZR-OM-08 یعنی «عرضه نفت، فرآورده‌های نفتی و گاز طبیعی»، VATZR-OM-09 صادرات خدمات، VATZR-OM-10 صادرات مستقیم کالا و VATZR-OM-04 حمل‌ونقل بین‌المللی. نگاشت هر کد مالیاتی ERP به کد دلیل را مدیر مالیات تأیید می‌کند. **نوع تراکنش** هم یک رشته 20 رقمی است که هر جایگاه آن یک ویژگی را با 1 (دارد) یا 0 (ندارد) نشان می‌دهد و چند جایگاه می‌توانند هم‌زمان 1 باشند. صورت‌حساب مالیاتی کامل ساده چنین است: `10000000000000000000`.',
            en: 'Every zero-rated line must carry a **reason code**. In the current code list, for example, VATZR-OM-08 means “supply of oil, oil derivatives and natural gas”, VATZR-OM-09 export of services, VATZR-OM-10 direct export of goods and VATZR-OM-04 international transport. The tax manager signs off the mapping from each ERP tax code to a reason code. The **transaction type** is a 20-character string in which each position flags one characteristic with 1 (yes) or 0 (no), and several positions can be 1 at once. A plain full tax invoice is `10000000000000000000`.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'جایگاه‌های پرکاربرد در نوع تراکنش', en: 'Commonly used transaction type positions' },
          head: [
            { fa: 'جایگاه', en: 'Position' },
            { fa: 'ویژگی', en: 'Characteristic' },
          ],
          rows: [
            [1, { fa: 'صورت‌حساب مالیاتی کامل', en: 'Full tax invoice' }],
            [2, { fa: 'صورت‌حساب مالیاتی ساده‌شده (معمولاً B2C)', en: 'Simplified tax invoice (usually B2C)' }],
            [3, { fa: 'خودصدوری (خریدار به نیابت از فروشنده)', en: 'Self-billed invoice (issued by the buyer for the supplier)' }],
            [5, { fa: 'صورت‌حساب تجمیعی ماهانه یک مشتری', en: 'Monthly summary invoice for one customer' }],
            [6, { fa: 'عرضه مستمر', en: 'Continuous supply' }],
            [7, { fa: 'صادرات', en: 'Export' }],
            [9, { fa: 'واردات خدمات (سازوکار معکوس)', en: 'Import of services (reverse charge)' }],
            [13, { fa: 'واردات کالا', en: 'Import of goods' }],
            [15, { fa: 'صورت‌حساب پیش‌پرداخت', en: 'Prepayment invoice' }],
          ],
          numericCols: [0],
        },
        {
          type: 'list',
          items: [
            { fa: '**کد QR** برای همه معاملات B2C (کامل یا ساده‌شده) الزامی است؛ فروشنده (C1) آن را می‌سازد و فقط روی نسخه قابل‌خواندن برای انسان چاپ می‌شود، نه داخل XML. سازمان در آینده از آن برای راستی‌آزمایی با اپلیکیشن موبایل استفاده می‌کند.', en: 'A **QR code** is mandatory for all B2C transactions (full or simplified); the seller (C1) generates it and it appears only on the human-readable copy, not inside the XML. The OTA plans to use it for verification through a mobile app.' },
            { fa: '**صورت‌حساب تجمیعی برای B2C مجاز نیست**؛ هر فروش صورت‌حساب الکترونیکی جداگانه دارد.', en: '**Consolidated invoices are not allowed for B2C**; every sale needs its own e-invoice.' },
            { fa: 'پس از اجرا فقط در B2C می‌توان در کنار نسخه الکترونیکی، نسخه کاغذی هم به مصرف‌کننده داد.', en: 'After go-live, only B2C invoices may also be given to consumers on paper, alongside the electronic version.' },
            { fa: 'صورت‌حساب دوزبانه مجاز است، به شرطی که با قانون مالیات بر ارزش افزوده سازگار باشد.', en: 'Bilingual invoices are allowed as long as they comply with the VAT legislation.' },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'صورت‌حساب وادی به رمل، به زبان داده', en: 'Wadi’s invoice to Raml, as data' },
          text: {
            fa: 'شماره WOS-2027-01044، تاریخ و زمان صدور، UUID یکتا، نوع تراکنش `10000000000000000000`، ارز OMR، شماره مالیاتی وادی و رمل، شماره سفارش خرید رمل و شماره گزارش دریافت خدمات. سطر: «خدمات مداخله در چاه RML-07»، مبلغ 48,000، گروه Z با دلیل VATZR-OM-08، مالیات 0. خلاصه مالیات: گروه Z، مبلغ مشمول 48,000، مالیات 0. همین داده‌هاست که در ERP رمل خودکار با سفارش خرید و رسید خدمات تطبیق داده می‌شود.',
            en: 'Number WOS-2027-01044, issue date and time, a unique UUID, transaction type `10000000000000000000`, currency OMR, Wadi’s and Raml’s VATINs, Raml’s purchase order number and service entry number. Line: “Well intervention services, well RML-07”, amount 48,000, category Z with reason VATZR-OM-08, VAT 0. VAT breakdown: category Z, taxable amount 48,000, VAT 0. It is exactly this data that Raml’s ERP matches automatically to the purchase order and service entry.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'کد درست را انتخاب کنید', en: 'Pick the right codes' },
          difficulty: 'medium',
          problem: {
            fa: 'وادی پس از پیوستن به فوترة چهار سند زیر را دارد. برای هر کدام گروه مالیاتی، کد دلیل (اگر لازم است)، جایگاه‌های نوع تراکنش که 1 می‌شوند و نکته گزارش را بنویسید.',
            en: 'After joining Fawtara, Wadi has the four documents below. For each, give the VAT category, the reason code (if needed), the transaction type positions set to 1 and a reporting note.',
          },
          given: {
            head: [
              { fa: 'سند', en: 'Document' },
              { fa: 'شرح', en: 'Description' },
            ],
            rows: [
              [{ fa: 'الف', en: 'a' }, { fa: 'خدمات مداخله در چاه به رمل، 48,000، با همه شرط‌های نرخ صفر نفت و گاز', en: 'Well intervention services to Raml, 48,000, meeting all oil and gas zero-rating conditions' }],
              [{ fa: 'ب', en: 'b' }, { fa: 'مطالعه مهندسی برای مشتری‌ای در هند، 15,000 (صادرات خدمات)', en: 'An engineering study for a customer in India, 15,000 (export of services)' }],
              [{ fa: 'ج', en: 'c' }, { fa: 'پشتیبانی نرم‌افزار از شرکتی انگلیسی، 10,000 (سازوکار معکوس)', en: 'Software support from a UK company, 10,000 (reverse charge)' }],
              [{ fa: 'د', en: 'd' }, { fa: 'فروش یک قطعه کوچک در کارگاه به یک فرد، 300 به‌اضافه 15 مالیات', en: 'Sale of a small part at the workshop to an individual, 300 plus 15 VAT' }],
            ],
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'سند', en: 'Doc' },
                { fa: 'گروه', en: 'Category' },
                { fa: 'دلیل', en: 'Reason' },
                { fa: 'جایگاه‌ها', en: 'Positions' },
                { fa: 'نکته', en: 'Note' },
              ],
              rows: [
                [{ fa: 'الف', en: 'a' }, { fa: 'Z', en: 'Z' }, { fa: 'VATZR-OM-08', en: 'VATZR-OM-08' }, { fa: '1', en: '1' }, { fa: 'B2B؛ ارسال بی‌درنگ از راه C2 به C3 و گزارش به C5', en: 'B2B; real-time via C2 to C3 and reported to C5' }],
                [{ fa: 'ب', en: 'b' }, { fa: 'Z', en: 'Z' }, { fa: 'VATZR-OM-09', en: 'VATZR-OM-09' }, { fa: '1 و 7', en: '1 and 7' }, { fa: 'مسیر C1 به C2 به C5؛ مشتری خارجی صورت‌حساب را مثل امروز می‌گیرد', en: 'Route C1 to C2 to C5; the foreign customer gets the invoice as today' }],
                [{ fa: 'ج', en: 'c' }, { fa: 'S (مالیات 500 را خود وادی حساب می‌کند)', en: 'S (Wadi self-assesses 500 VAT)' }, { fa: 'ندارد', en: 'None' }, { fa: '9', en: '9' }, { fa: 'خودصدوری واردات خدمات؛ 500 خروجی و 500 ورودی', en: 'Self-billed import of services; 500 output and 500 input' }],
                [{ fa: 'د', en: 'd' }, { fa: 'S', en: 'S' }, { fa: 'ندارد', en: 'None' }, { fa: '2', en: '2' }, { fa: 'B2C؛ کد QR روی نسخه چاپی؛ گزارش ظرف 24 ساعت', en: 'B2C; QR code on the printed copy; reported within 24 hours' }],
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              text: {
                fa: 'نگاشت دقیق کدها را با آخرین فهرست کدهای PINT OM و ارائه‌دهنده‌تان تأیید کنید؛ فهرست‌ها ممکن است در نسخه‌های بعدی تغییر کنند.',
                en: 'Confirm the exact mappings against the latest PINT OM code lists and with your provider; the lists may change in later versions.',
              },
            },
          ],
          answer: {
            fa: 'الف: Z، VATZR-OM-08، جایگاه 1؛ ب: Z، VATZR-OM-09، جایگاه‌های 1 و 7؛ ج: S، جایگاه 9؛ د: S، جایگاه 2 با QR.',
            en: 'a: Z, VATZR-OM-08, position 1; b: Z, VATZR-OM-09, positions 1 and 7; c: S, position 9; d: S, position 2 with a QR code.',
          },
        },
      ],
    },
    {
      id: 'flow',
      title: { fa: 'مسیر یک صورت‌حساب: از ERP فروشنده تا خریدار و سازمان', en: 'The Journey of an E-Invoice' },
      blocks: [
        {
          type: 'steps',
          items: [
            { title: { fa: 'C1 صورت‌حساب را می‌سازد', en: 'C1 creates the invoice' }, text: { fa: 'ERP وادی صورت‌حساب را ثبت می‌کند: شماره، UUID، کد مالیاتی، نوع تراکنش و برای B2C کد QR. سند حسابداری در همین لحظه ثبت می‌شود.', en: 'Wadi’s ERP posts the invoice: number, UUID, tax code, transaction type and, for B2C, the QR code. The accounting entry is posted at the same moment.' } },
            { title: { fa: 'C2 اعتبارسنجی می‌کند', en: 'C2 validates' }, text: { fa: 'داده از راه API یا رابط به ارائه‌دهنده وادی می‌رود. ارائه‌دهنده آن را به XML قالب PINT OM تبدیل (در صورت نیاز) و با قواعد قالب، قواعد تجاری و Schematron عمان کنترل می‌کند. اگر خطا باشد، رد می‌شود و به وادی برمی‌گردد.', en: 'The data goes to Wadi’s provider via an API or connector. The provider converts it to PINT OM XML if needed and checks it against format, business and Oman Schematron rules. If it fails, it is rejected back to Wadi.' } },
            { title: { fa: 'ارسال از شبکه پپول', en: 'Sent over Peppol' }, text: { fa: 'C2 نشانی خریدار را در فهرست مرکزی شرکت‌کنندگان (SMP) که سازمان اداره می‌کند پیدا می‌کند و صورت‌حساب را به ارائه‌دهنده رمل (C3) می‌فرستد.', en: 'C2 looks the buyer up in the central participant directory (SMP) run by the OTA and sends the invoice to Raml’s provider (C3).' } },
            { title: { fa: 'C3 تحویل می‌دهد', en: 'C3 delivers' }, text: { fa: 'ارائه‌دهنده رمل صورت‌حساب را به صندوق حساب‌های پرداختنی ERP رمل (C4) می‌رساند.', en: 'Raml’s provider delivers the invoice to the accounts payable inbox in Raml’s ERP (C4).' } },
            { title: { fa: 'گزارش به سازمان (C5)', en: 'Reporting to the OTA (C5)' }, text: { fa: 'C2 برای صورت‌حساب صادره و C3 برای صورت‌حساب دریافتی یک **سند داده مالیاتی (TDD)** به سازمان می‌فرستند؛ شامل داده‌های کلیدی و خود صورت‌حساب (بدون پیوست‌ها).', en: 'C2 for the issued invoice and C3 for the received invoice each send a **Tax Data Document (TDD)** to the OTA, containing key data and the invoice itself (without attachments).' } },
            { title: { fa: 'زمان', en: 'Timing' }, text: { fa: 'طبق پرسش‌های متداول سازمان: B2B بی‌درنگ (Real-time) و B2C ظرف 24 ساعت.', en: 'Per the OTA FAQ: B2B in real time and B2C within 24 hours.' } },
          ],
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'ارائه‌دهنده کنترل می‌کند', en: 'The provider checks' },
            items: [
              { fa: 'ساختار XML و فیلدهای الزامی', en: 'XML structure and mandatory fields' },
              { fa: 'قواعد تجاری و Schematron عمان (مثلاً جمع‌ها، کدها، UUID)', en: 'Business and Oman Schematron rules (totals, codes, UUID)' },
              { fa: 'ارسال امن و گزارش TDD', en: 'Secure delivery and TDD reporting' },
            ],
          },
          right: {
            title: { fa: 'مسئولیت مودی می‌ماند', en: 'The taxpayer remains responsible for' },
            items: [
              { fa: 'درستی برخورد مالیاتی (مثلاً آیا نرخ صفر واقعاً مجاز است)', en: 'The correct VAT treatment (e.g. is the zero rate really allowed?)' },
              { fa: 'درستی مبلغ، تاریخ عرضه و صدور به‌موقع', en: 'Correct amounts, supply dates and timely issue' },
              { fa: 'نگهداری اسناد و امنیت سیستم خود', en: 'Record keeping and the security of its own system' },
            ],
          },
        },
        {
          type: 'table',
          caption: { fa: 'مسیرهای خاص', en: 'Special routes' },
          head: [
            { fa: 'وضعیت', en: 'Situation' },
            { fa: 'چه اتفاقی می‌افتد', en: 'What happens' },
          ],
          rows: [
            [{ fa: 'صادرات', en: 'Export' }, { fa: 'C1 به C2 به C5؛ صورت‌حساب به روش فعلی به مشتری خارجی داده می‌شود', en: 'C1 to C2 to C5; the invoice reaches the foreign customer the usual way' }],
            [{ fa: 'واردات کالا یا خدمات', en: 'Import of goods or services' }, { fa: 'واردکننده با خودصدوری گزارش می‌کند', en: 'The importer reports through self-billing' }],
            [{ fa: 'خریدار هنوز در فوترة نیست', en: 'Buyer not yet in Fawtara' }, { fa: 'فروشنده باز هم از ارائه‌دهنده‌اش می‌فرستد تا TDD گزارش شود؛ تحویل به خریدار با روش فعلی', en: 'The seller still submits through its provider so the TDD is reported; delivery to the buyer uses the current method' }],
            [{ fa: 'فروشنده هنوز در فوترة نیست', en: 'Seller not yet in Fawtara' }, { fa: 'صورت‌حساب‌های فعلی، اگر با قانون سازگار باشند، معتبرند و خریدار مالیات ورودی را مثل امروز کسر می‌کند', en: 'Current invoices remain valid if they comply with the law, and the buyer deducts input VAT as today' }],
            [{ fa: 'فروشنده ثبت‌نام‌نشده که مالیات گرفته است', en: 'Unregistered seller charging VAT' }, { fa: 'حق گرفتن مالیات ندارد؛ خریدار نمی‌تواند کسر کند و می‌تواند به سازمان گزارش دهد', en: 'It may not charge VAT; the buyer cannot deduct it and may report the case to the OTA' }],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'در این مدل، صورت‌حساب برای **تأیید پیشینی** در سامانه سازمان نگه داشته نمی‌شود؛ ارائه‌دهنده آن را اعتبارسنجی می‌کند و داده مالیاتی تقریباً هم‌زمان به سازمان می‌رسد. نتیجه عملی این است که سازمان داده‌های هر صورت‌حساب صادره و دریافتی را دارد و می‌تواند آن را با اظهارنامه شما مقایسه کند؛ پس هر اختلاف میان ERP، ارائه‌دهنده و اظهارنامه دیده می‌شود.',
            en: 'In this model the invoice is not held for **clearance** on the authority’s platform; the provider validates it and the tax data reaches the OTA almost in real time. The practical result is that the OTA holds the data of every invoice issued and received and can compare it with your return, so any gap between the ERP, the provider and the return becomes visible.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: صف صورت‌حساب‌های ردشده', en: 'In practice: the rejection queue' },
          text: {
            fa: 'صورت‌حسابی که ارائه‌دهنده رد کرده، هنوز به‌عنوان صورت‌حساب الکترونیکی معتبر صادر نشده است، حتی اگر در ERP ثبت شده باشد. هر روز صف ردشده‌ها را بررسی کنید، علت (مثلاً شماره مالیاتی خالی خریدار) را در داده پایه درست کنید و دوباره بفرستید. یادتان باشد مهلت صدور صورت‌حساب 15 روز از رویداد است و B2B باید بی‌درنگ ارسال شود.',
            en: 'An invoice the provider rejected has not yet been validly issued as an e-invoice, even if it is posted in the ERP. Review the rejection queue daily, fix the cause (for example a missing buyer VATIN) in master data and resubmit. Remember the invoice must be issued within 15 days of the event and B2B must be sent in real time.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'شش ماه با دو کانال ورودی', en: 'Six months with two inbound channels' },
          text: {
            fa: 'رمل با عرضه سالانه بالای 5 میلیون از 1 آوریل 2027 ملزم است و وادی با حدود 1.2 میلیون از 1 اکتبر 2027. پس از آوریل تا اکتبر 2027، رمل صورت‌حساب‌های خودش (مثلاً شارژ مجدد هزینه به شرکا یا فروش ضایعات) را الکترونیکی صادر می‌کند، اما صورت‌حساب‌های وادی را هنوز به‌صورت PDF می‌گیرد. حساب‌های پرداختنی رمل باید در این شش ماه هم صندوق پپول را اداره کند و هم ورود دستی را، و هر دو را با یک کنترل تطبیق دهد.',
            en: 'With annual supplies above OMR 5 million, Raml must comply from 1 April 2027; Wadi, at about 1.2 million, from 1 October 2027. Between April and October 2027 Raml issues its own invoices (for example partner recharges or scrap sales) electronically but still receives Wadi’s invoices as PDFs. For those six months Raml’s accounts payable team must run both the Peppol inbox and manual entry, and reconcile both under one control.',
          },
        },
      ],
    },
    {
      id: 'corrections-archiving',
      title: { fa: 'اصلاح، اعلامیه بستانکار و بایگانی', en: 'Corrections, Credit Notes and Archiving' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'صورت‌حساب الکترونیکی پس از صدور **ابطال یا ویرایش نمی‌شود**. هر اصلاحی با **اعلامیه بستانکار یا بدهکار الکترونیکی** انجام می‌شود (پرسش‌های متداول سازمان؛ ماده 155 آیین‌نامه: اگر صورت‌حساب اصلی الکترونیکی است، سند اصلاحی هم باید الکترونیکی باشد). اعلامیه در PINT OM کد نوع سند خودش را دارد (مثلاً 381 برای اعلامیه بستانکار)، به شماره و UUID صورت‌حساب اصلی ارجاع می‌دهد و یک **کد دلیل** دارد. مالیات اصلاح‌شده در دوره‌ای اظهار می‌شود که اعلامیه صادر شده است.',
            en: 'An e-invoice **cannot be cancelled or edited** after issue. Any correction is made with an **electronic credit or debit note** (OTA FAQ; Regulation 155: if the original invoice is electronic, the adjustment must be too). In PINT OM the note has its own document type code (for example 381 for a credit note), refers to the original invoice number and UUID, and carries a **reason code**. The VAT adjustment is reported in the period in which the note is issued.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'کدهای دلیل اعلامیه بستانکار و بدهکار (فهرست CL-02-OM)', en: 'Credit and debit note reason codes (code list CL-02-OM)' },
          head: [
            { fa: 'کد', en: 'Code' },
            { fa: 'معنا', en: 'Meaning' },
            { fa: 'نمونه نفت و گاز', en: 'Oil and gas example' },
          ],
          rows: [
            [{ fa: 'CAN', en: 'CAN' }, { fa: 'لغو یا برگشت', en: 'Cancellation or return' }, { fa: 'برگشت لوله جداری معیوب به فروشنده', en: 'Defective casing returned to the supplier' }],
            [{ fa: 'VAT', en: 'VAT' }, { fa: 'تغییر برخورد مالیاتی', en: 'Change in VAT treatment' }, { fa: '5٪ به اشتباه روی خدمت نرخ صفر بالادستی', en: '5% charged in error on a zero-rated upstream service' }],
            [{ fa: 'VAL', en: 'VAL' }, { fa: 'تغییر مبلغ (قیمت، تخفیف، هزینه اضافه)', en: 'Change in value (price, discount, extra charges)' }, { fa: 'تخفیف عملکرد در قرارداد حفاری', en: 'A performance discount on a drilling contract' }],
            [{ fa: 'QTY', en: 'QTY' }, { fa: 'تغییر مقدار', en: 'Change in quantity' }, { fa: 'روزهای اجاره دکل کمتر از صورت‌حساب', en: 'Fewer rig-hire days than invoiced' }],
            [{ fa: 'OTH', en: 'OTH' }, { fa: 'سایر', en: 'Other' }, { fa: 'هر دلیل دیگری که در بالا نیست', en: 'Any other reason not listed above' }],
          ],
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'ردشده پیش از تحویل', en: 'Rejected before delivery' },
            items: [
              { fa: 'ارائه‌دهنده آن را نپذیرفته و به خریدار نرسیده است', en: 'The provider did not accept it and the buyer never received it' },
              { fa: 'صورت‌حساب الکترونیکی معتبری صادر نشده است', en: 'No valid e-invoice has been issued' },
              { fa: 'داده را درست کنید و طبق روال ارائه‌دهنده دوباره بفرستید؛ اعلامیه لازم نیست', en: 'Fix the data and resubmit following the provider’s procedure; no credit note is needed' },
            ],
          },
          right: {
            title: { fa: 'پذیرفته‌شده، اما نادرست', en: 'Accepted, but wrong' },
            items: [
              { fa: 'به خریدار رسیده و به سازمان گزارش شده است', en: 'It reached the buyer and was reported to the OTA' },
              { fa: 'دیگر قابل ویرایش یا ابطال نیست', en: 'It can no longer be edited or cancelled' },
              { fa: 'اعلامیه بستانکار یا بدهکار الکترونیکی با ارجاع و کد دلیل؛ در صورت نیاز صورت‌حساب تازه', en: 'An electronic credit or debit note with reference and reason code; a new invoice if needed' },
            ],
          },
        },
        {
          type: 'journal',
          title: {
            fa: 'اعلامیه بستانکار با کد QTY: وادی 10 روز اجاره (20,000 به‌اضافه 1,000) صورت‌حساب کرده بود، اما جبل 8 روز استفاده کرد',
            en: 'Credit note with code QTY: Wadi invoiced 10 hire days (20,000 plus 1,000) but Jabal used 8',
          },
          entries: [
            {
              date: d('دفاتر وادی', 'Wadi’s books'),
              lines: [
                { account: ac.salesAllow, debit: 4000 },
                { account: ac.vatOut, debit: 200 },
                { account: ac.ar, credit: 4200 },
              ],
              memo: { fa: 'اعلامیه الکترونیکی با ارجاع به UUID صورت‌حساب اصلی', en: 'Electronic note referring to the original invoice UUID' },
            },
            {
              date: d('دفاتر جبل', 'Jabal’s books'),
              lines: [
                { account: ac.ap, debit: 4200 },
                { account: ac.hireExp, credit: 4000 },
                { account: ac.vatIn, credit: 200 },
              ],
              memo: { fa: 'اعلامیه از راه C3 خودکار در ERP جبل ثبت می‌شود', en: 'The note arrives via C3 and posts automatically in Jabal’s ERP' },
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: '**بایگانی.** مسئولیت نگهداری صورت‌حساب‌های الکترونیکی با **خودِ مودی** است، طبق قانون مالیات بر ارزش افزوده: **10 سال** پس از پایان سال مالیاتی‌ای که اظهارنامه در آن تسلیم شده و برای املاک 15 سال (ماده 70). سازمان صراحتاً گفته است اطلاعات صورت‌حساب را به مودیان یا ارائه‌دهندگان نمی‌دهد و شبکه پپول هم اسناد را ذخیره نمی‌کند. سیستم نگهداری باید اجازه تغییر پس از ثبت را ندهد، رونوشت درست نگه دارد و روش بازیابی داده داشته باشد (ماده 157 و ماده 143 مکرر 1 آیین‌نامه). سازمان تاکنون درباره محل نگهداری داده (داخل یا خارج عمان) قاعده روشنی منتشر نکرده است؛ پیش از انتخاب فضای ابری بپرسید.',
            en: '**Archiving.** Storing e-invoices is **the taxpayer’s responsibility** under the VAT law: **10 years** after the end of the tax year in which the return was filed, and 15 years for real estate (Article 70). The OTA has said it will not provide invoice information to taxpayers or providers, and the Peppol network does not store documents. The storage system must prevent changes after recording, keep true copies and have data recovery procedures (Regulation 157 and Article 143 bis 1). The OTA has not yet published a clear rule on where data must be stored (inside or outside Oman); ask before choosing a cloud location.',
          },
        },
        {
          type: 'list',
          items: [
            { fa: 'XML ارسالی و دریافتی را همان‌طور که مبادله شده نگه دارید، همراه وضعیت پذیرش یا رد و نسخه قابل‌خواندن (PDF) آن.', en: 'Keep the sent and received XML exactly as exchanged, with its accepted or rejected status and the human-readable (PDF) copy.' },
            { fa: 'هر فایل را به شماره سند ERP، شماره صورت‌حساب و UUID وصل کنید تا با جست‌وجوی شماره مالیاتی، تاریخ یا UUID پیدا شود.', en: 'Link each file to the ERP document number, invoice number and UUID so it can be found by VATIN, date or UUID.' },
            { fa: 'پشتیبان‌گیری، بازیابی پس از حادثه و دسترسی بر پایه نقش را تعریف و آزمایش کنید.', en: 'Define and test backups, disaster recovery and role-based access.' },
            { fa: 'برنامه نگهداری 10 ساله (15 سال برای املاک) را در قرارداد ارائه‌دهنده یا آرشیو داخلی بنویسید و نسخه عربی را در صورت درخواست سازمان آماده کنید.', en: 'Write the 10-year (15 for real estate) retention schedule into the provider contract or internal archive, and be ready to provide Arabic versions on request.' },
          ],
        },
        {
          type: 'exercise',
          title: { fa: 'اصلاح نرخ اشتباه', en: 'Correcting a wrong rate' },
          difficulty: 'medium',
          problem: {
            fa: 'وادی برای خدمات بالادستی که همه شرط‌های نرخ صفر را دارد، صورت‌حساب الکترونیکی 40,000 به‌اضافه 2,000 مالیات (5٪) به رمل صادر کرده است. صورت‌حساب پذیرفته و تحویل شده است. (1) وادی چه سندی صادر کند و با چه کد دلیلی؟ (2) ثبت‌های وادی و رمل را بنویسید. (3) اثر بر اظهارنامه هر دو چیست؟',
            en: 'Wadi issued Raml an e-invoice for 40,000 plus 2,000 VAT (5%) for upstream services that meet every zero-rating condition. The invoice was accepted and delivered. (1) What document should Wadi issue, with what reason code? (2) Record the entries for Wadi and Raml. (3) What is the effect on each return?',
          },
          hint: {
            fa: 'صورت‌حساب پذیرفته‌شده ویرایش نمی‌شود. اعلامیه کامل بزنید و صورت‌حساب درست را دوباره صادر کنید.',
            en: 'An accepted invoice cannot be edited. Credit it in full and issue the correct invoice again.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                { title: { fa: 'سند', en: 'Document' }, text: { fa: 'اعلامیه بستانکار الکترونیکی برای کل 42,000 با کد دلیل **VAT** (تغییر برخورد مالیاتی) و ارجاع به شماره و UUID صورت‌حساب اصلی؛ سپس صورت‌حساب تازه 40,000 با گروه Z و دلیل VATZR-OM-08.', en: 'An electronic credit note for the full 42,000 with reason code **VAT** (change in VAT treatment), referring to the original invoice number and UUID; then a new 40,000 invoice with category Z and reason VATZR-OM-08.' } },
                { title: { fa: 'اثر بر اظهارنامه', en: 'Return effect' }, text: { fa: 'مالیات خروجی وادی و مالیات ورودی رمل هر دو در دوره صدور اعلامیه 2,000 کم می‌شوند. اگر رمل 2,000 را قبلاً کسر کرده بود، دیگر حق آن را ندارد.', en: 'Wadi’s output VAT and Raml’s input VAT each fall by 2,000 in the period the note is issued. If Raml had already deducted the 2,000, it no longer may.' } },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: d('وادی: اعلامیه', 'Wadi: note'),
                  lines: [
                    { account: ac.revWell, debit: 40000 },
                    { account: ac.vatOut, debit: 2000 },
                    { account: ac.ar, credit: 42000 },
                  ],
                },
                {
                  date: d('وادی: صورت‌حساب تازه', 'Wadi: new invoice'),
                  lines: [
                    { account: ac.ar, debit: 40000 },
                    { account: ac.revWell, credit: 40000 },
                  ],
                },
                {
                  date: d('رمل: اعلامیه', 'Raml: note'),
                  lines: [
                    { account: ac.apWadi, debit: 42000 },
                    { account: ac.wellCost, credit: 40000 },
                    { account: ac.vatIn, credit: 2000 },
                  ],
                },
                {
                  date: d('رمل: صورت‌حساب تازه', 'Raml: new invoice'),
                  lines: [
                    { account: ac.wellCost, debit: 40000 },
                    { account: ac.apWadi, credit: 40000 },
                  ],
                },
              ],
            },
          ],
          answer: {
            fa: 'اعلامیه بستانکار الکترونیکی 42,000 با کد VAT و صورت‌حساب تازه نرخ صفر 40,000؛ خروجی وادی و ورودی رمل هر کدام 2,000 کم می‌شود.',
            en: 'An electronic credit note for 42,000 with code VAT and a new zero-rated invoice for 40,000; Wadi’s output and Raml’s input each fall by 2,000.',
          },
        },
      ],
    },
    {
      id: 'erp-readiness',
      title: { fa: 'برنامه آمادگی ERP برای یک شرکت نفت و گاز', en: 'ERP Readiness Plan for an Oil and Gas Company' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'امروز 16 نوامبر 2026 است و رمل باید از **1 آوریل 2027** آماده باشد؛ یعنی حدود چهار ماه و نیم. برنامه را از تاریخ شروع به عقب بچینید: انتخاب ارائه‌دهنده و تحلیل شکاف در نوامبر، پاک‌سازی داده پایه و نگاشت در دسامبر، ساخت رابط در ژانویه، آزمون با ارائه‌دهنده در فوریه، اجرای موازی و انتقال در مارس، و پشتیبانی فشرده پس از شروع. سازمان می‌گوید لازم نیست ERP عوض شود؛ ERP می‌تواند بماند، به شرط اتصال درست به ارائه‌دهنده معتمد.',
            en: 'Today is 16 November 2026 and Raml must be ready by **1 April 2027**, about four and a half months away. Plan backwards from go-live: provider selection and gap analysis in November, master data cleansing and mapping in December, interface build in January, testing with the provider in February, parallel run and cutover in March, then hypercare. The OTA says the ERP need not be replaced; it can stay, provided it connects properly to an accredited provider.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'حوزه‌های کار و مسئولان', en: 'Workstreams and owners' },
          head: [
            { fa: 'حوزه', en: 'Workstream' },
            { fa: 'کارهای اصلی', en: 'Main tasks' },
            { fa: 'مسئول', en: 'Owner' },
          ],
          rows: [
            [{ fa: 'راهبری', en: 'Governance' }, { fa: 'کمیته پروژه، بودجه، برنامه زمانی، گزارش ریسک به مدیریت', en: 'Steering committee, budget, timeline, risk reporting' }, { fa: 'مدیر مالی', en: 'CFO' }],
            [{ fa: 'ارائه‌دهنده معتمد', en: 'Service provider' }, { fa: 'انتخاب از فهرست پرتال فوترة، قرارداد با سطح خدمات، زمان در دسترس بودن، پشتیبانی و بایگانی', en: 'Select from the Fawtara portal list; contract with service levels, uptime, support and archiving' }, { fa: 'مالی و فناوری اطلاعات', en: 'Finance and IT' }],
            [{ fa: 'داده پایه', en: 'Master data' }, { fa: 'شماره مالیاتی مشتری و تأمین‌کننده، شناسه پپول، نشانی و کد کشور، کد HS و نوع خدمت', en: 'Customer and vendor VATINs, Peppol IDs, addresses and country codes, HS and service type codes' }, { fa: 'تیم داده پایه', en: 'Master data team' }],
            [{ fa: 'تعیین مالیات', en: 'Tax determination' }, { fa: 'نگاشت کدهای مالیاتی به S، Z، E، O و کدهای دلیل؛ نوع تراکنش برای هر نوع سند', en: 'Map tax codes to S, Z, E, O and reason codes; transaction type per document type' }, { fa: 'مدیر مالیات', en: 'Tax manager' }],
            [{ fa: 'یکپارچه‌سازی', en: 'Integration' }, { fa: 'رابط خروجی ERP به ارائه‌دهنده، رابط ورودی به حساب‌های پرداختنی، بازگشت وضعیت پذیرش یا رد', en: 'Outbound ERP-to-provider interface, inbound interface to AP, status feedback (accepted or rejected)' }, { fa: 'فناوری اطلاعات', en: 'IT' }],
            [{ fa: 'آزمون و انتقال', en: 'Testing and cutover' }, { fa: 'سناریوهای آزمون، اجرای موازی، چک‌لیست شروع', en: 'Test scenarios, parallel run, go-live checklist' }, { fa: 'مالی، فناوری اطلاعات و ارائه‌دهنده', en: 'Finance, IT and provider' }],
            [{ fa: 'آموزش و تغییر', en: 'Training and change' }, { fa: 'آموزش کاربران فروش، دریافتنی، پرداختنی، خرید و تأمین‌کنندگان اصلی', en: 'Train sales, AR, AP, procurement users and key suppliers' }, { fa: 'مالی و تدارکات', en: 'Finance and procurement' }],
          ],
        },
        {
          type: 'list',
          items: [
            { fa: '**شماره مالیاتی**: همه مشتریان و تأمین‌کنندگان ثبت‌نام‌شده؛ فرمت و درستی را کنترل کنید. شماره خالی یا غلط بیشترین علت رد است.', en: '**VATINs** for every registered customer and vendor; check format and validity. Missing or wrong numbers are the top cause of rejection.' },
            { fa: '**نشانی و کد کشور و استان** طبق فهرست‌های PINT OM؛ و **وضعیت اقامت** تأمین‌کننده برای سازوکار معکوس و خودصدوری.', en: '**Addresses, country and subdivision codes** per the PINT OM lists, and the vendor’s **residence status** for reverse charge and self-billing.' },
            { fa: '**داده پایه کالا و خدمت**: کد HS برای کالا، کد نوع خدمت و طبقه‌بندی فعالیت (ISIC) در جایی که مشخصات می‌خواهد، و واحد سنجش استاندارد.', en: '**Material and service master**: HS codes for goods, service type and activity (ISIC) codes where the specification requires them, and standard units of measure.' },
            { fa: '**مدارک نرخ صفر** نفت و گاز با تاریخ انقضا روی پرونده مشتری، تا کد Z فقط وقتی پیشنهاد شود که مدرک معتبر است.', en: '**Oil and gas zero-rating evidence** with expiry dates on the customer record, so code Z is proposed only while the evidence is valid.' },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'سناریوهای سند که در یک شرکت نفت و گاز باید نگاشت و آزمون شوند', en: 'Document scenarios to map and test at an oil and gas company' },
          head: [
            { fa: 'سناریو', en: 'Scenario' },
            { fa: 'نکته فوترة', en: 'Fawtara point' },
          ],
          rows: [
            [{ fa: 'فروش نفت خام یا گاز در داخل', en: 'Domestic sale of crude oil or gas' }, { fa: 'Z با دلیل نفت و گاز، اگر شرایط برقرار است', en: 'Z with the oil and gas reason, if the conditions are met' }],
            [{ fa: 'صادرات محموله', en: 'Export cargo' }, { fa: 'Z با دلیل صادرات، جایگاه 7، مسیر C1 به C2 به C5', en: 'Z with an export reason, position 7, route C1 to C2 to C5' }],
            [{ fa: 'شارژ مجدد هزینه‌های بالادستی به شرکای غیرعامل', en: 'Recharging upstream costs to non-operating partners' }, { fa: 'Z طبق راهنمای سازمان؛ درخواست وجه شرکا عرضه نیست', en: 'Z per the OTA guide; partner cash calls are not supplies' }],
            [{ fa: 'فروش ضایعات و مازاد کالا به اشخاص ثالث', en: 'Sales of scrap and surplus materials to third parties' }, { fa: 'معمولاً S (5٪)', en: 'Usually S (5%)' }],
            [{ fa: 'صورت‌حساب پیش‌پرداخت و قراردادهای مرحله‌ای', en: 'Prepayment invoices and milestone contracts' }, { fa: 'جایگاه 15 یا 6؛ ارجاع صورت‌حساب نهایی به پیش‌پرداخت', en: 'Position 15 or 6; the final invoice refers to the prepayment' }],
            [{ fa: 'واردات تجهیزات و خدمات خارجی', en: 'Imported equipment and foreign services' }, { fa: 'خودصدوری؛ جایگاه 13 یا 9', en: 'Self-billing; position 13 or 9' }],
            [{ fa: 'صورت‌حساب دلاری', en: 'USD invoices' }, { fa: 'نرخ تبدیل و مالیات به ریال عمانی', en: 'Exchange rate and VAT in OMR' }],
            [{ fa: 'اعلامیه بستانکار و بدهکار', en: 'Credit and debit notes' }, { fa: 'ارجاع به UUID و کد دلیل؛ اعلامیه برای صورت‌حساب‌های پیش از شروع هم آزمون شود', en: 'UUID reference and reason code; test notes against pre-go-live invoices too' }],
          ],
        },
        {
          type: 'steps',
          items: [
            { title: { fa: 'آزمون واحد', en: 'Unit tests' }, text: { fa: 'برای هر سناریوی جدول بالا یک سند بسازید و XML را با مشخصات PINT OM مقایسه کنید.', en: 'Create one document per scenario above and compare the XML with the PINT OM specification.' } },
            { title: { fa: 'آزمون یکپارچه با ارائه‌دهنده', en: 'Integration test with the provider' }, text: { fa: 'ارسال واقعی در محیط آزمون پپول، دریافت وضعیت و ورود صورت‌حساب‌های دریافتی به حساب‌های پرداختنی.', en: 'Real submissions in the Peppol test environment, status feedback, and inbound invoices landing in AP.' } },
            { title: { fa: 'آزمون منفی', en: 'Negative tests' }, text: { fa: 'شماره مالیاتی خالی، گروه مالیاتی غلط، جمع‌های ناسازگار، گردکردن؛ مطمئن شوید رد شدن دیده و پیگیری می‌شود.', en: 'Missing VATIN, wrong category, inconsistent totals, rounding; make sure rejections are seen and followed up.' } },
            { title: { fa: 'آزمون کاربر و حجم', en: 'User and volume tests' }, text: { fa: 'کاربران دریافتنی و پرداختنی سناریوهای روزانه را اجرا کنند؛ حجم پایان ماه را آزمایش کنید.', en: 'AR and AP users run daily scenarios; test month-end volumes.' } },
            { title: { fa: 'انتقال و پشتیبانی', en: 'Cutover and hypercare' }, text: { fa: 'سری شماره‌گذاری تازه، اسناد باز، اجرای موازی کوتاه و پشتیبانی فشرده در هفته‌های اول.', en: 'New numbering series, open documents, a short parallel run and close support in the first weeks.' } },
          ],
        },
        {
          type: 'list',
          items: [
            { fa: '**هیچ صورت‌حسابی بیرون از سیستم متصل** صادر نشود (نه Word، نه Excel).', en: '**No invoice outside the connected system** (no Word, no Excel).' },
            { fa: '**تفکیک وظایف**: تغییر کد مالیاتی یا نگاشت فقط با تأیید مدیر مالیات.', en: '**Segregation of duties**: tax code or mapping changes only with the tax manager’s approval.' },
            { fa: '**تطبیق روزانه**: اسناد ثبت‌شده در ERP با پذیرفته‌شده و ردشده نزد ارائه‌دهنده؛ هر اختلاف در یک صف با مهلت رسیدگی.', en: '**Daily reconciliation**: documents posted in the ERP against those accepted and rejected by the provider; every gap in a queue with a resolution deadline.' },
            { fa: '**پایش مهلت 15 روزه** صدور صورت‌حساب، به‌خصوص برای گزارش‌های کار میدانی که دیر تأیید می‌شوند.', en: '**Monitor the 15-day issue deadline**, especially for field tickets approved late.' },
            { fa: '**امنیت و تداوم کسب‌وکار** (ماده 143 مکرر 1): دسترسی بر پایه نقش، ثبت رویدادها، روش قطعی ارائه‌دهنده (صف و ارسال دوباره) و بازیابی داده.', en: '**Security and business continuity** (Article 143 bis 1): role-based access, logging, a provider-outage procedure (queue and resend) and data recovery.' },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: صورت‌حساب الکترونیکی و بازیافت هزینه', en: 'In practice: e-invoices and cost recovery' },
          text: {
            fa: 'از تأمین‌کنندگان بخواهید شماره سفارش خرید و شماره گزارش دریافت خدمات را در صورت‌حساب بیاورند. آن وقت صورت‌حساب خودکار روی موضوع هزینه درست (چاه، AFE، مرکز هزینه) می‌نشیند. داده ساختاریافته و ردپای کامل سند، رسیدگی شرکا و دولت به هزینه‌های قابل بازیافت قرارداد نفتی را ساده‌تر می‌کند؛ صورت‌حسابی که به موضوع هزینه وصل نیست، در رسیدگی بازیافت هزینه دردسر می‌سازد.',
            en: 'Ask suppliers to include the purchase order number and service entry number on the invoice; the invoice then lands automatically on the right cost object (well, AFE, cost centre). Structured data and a complete document trail make partner and government audits of recoverable costs under the petroleum agreement easier; an invoice not tied to a cost object causes trouble in cost recovery audits.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'دام‌های رایج پروژه', en: 'Common project pitfalls' },
          text: {
            fa: 'شروع از فناوری به‌جای داده؛ سپردن نگاشت مالیاتی فقط به تیم فناوری اطلاعات؛ فراموش کردن سمت دریافت (حساب‌های پرداختنی)؛ آزمون نکردن اعلامیه بستانکار، خودصدوری واردات و صورت‌حساب دلاری؛ و این فرض اشتباه که ارائه‌دهنده مسئولیت درستی مالیات را می‌پذیرد. مسئولیت همیشه با مودی می‌ماند.',
            en: 'Starting with technology instead of data; leaving tax mapping to IT alone; forgetting the receiving side (AP); not testing credit notes, self-billed imports and USD invoices; and wrongly assuming the provider takes responsibility for VAT correctness. Responsibility always stays with the taxpayer.',
          },
        },
      ],
    },
    {
      id: 'vat-p2p',
      title: { fa: 'پیوند با اظهارنامه مالیاتی و چرخه خرید تا پرداخت', en: 'Links to the VAT Return and Procure-to-Pay' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'صورت‌حساب الکترونیکی جای اظهارنامه را نمی‌گیرد. مودی همچنان اظهارنامه سه‌ماهه را خودش تهیه و ظرف 30 روز تسلیم می‌کند. اما اکنون سازمان داده هر صورت‌حساب را دارد؛ پس مالیات خروجی اظهارنامه باید با صورت‌حساب‌ها و اعلامیه‌های **پذیرفته‌شده** به‌اضافه خودصدوری‌ها و اصلاحات مستند جور درآید. بهترین کار این است که این تطبیق **ماهانه** انجام شود، نه فقط در پایان فصل.',
            en: 'E-invoicing does not replace the VAT return. The taxpayer still prepares and files the quarterly return within 30 days. But the OTA now holds every invoice’s data, so output VAT in the return must agree with **accepted** invoices and credit notes plus self-billed documents and documented adjustments. Best practice is to reconcile **monthly**, not just at quarter-end.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'تطبیق سه‌طرفه پیش از اظهارنامه', en: 'Three-way check before filing' },
          head: [
            { fa: 'منبع', en: 'Source' },
            { fa: 'چه نشان می‌دهد', en: 'What it shows' },
            { fa: 'باید برابر باشد با', en: 'Must agree with' },
          ],
          rows: [
            [{ fa: 'گزارش مالیات ERP بر پایه کد', en: 'ERP VAT report by tax code' }, { fa: 'همه اسناد ثبت‌شده: صورت‌حساب، اعلامیه، خودصدوری', en: 'All posted documents: invoices, notes, self-billing' }, { fa: 'مانده حساب‌های مالیات در دفتر کل', en: 'VAT account balances in the ledger' }],
            [{ fa: 'گزارش وضعیت ارائه‌دهنده', en: 'Provider status report' }, { fa: 'اسناد پذیرفته‌شده و ردشده و TDDهای گزارش‌شده', en: 'Accepted and rejected documents and reported TDDs' }, { fa: 'گزارش ERP (اختلاف یعنی ردشده یا ارسال‌نشده)', en: 'The ERP report (a gap means rejected or unsent)' }],
            [{ fa: 'دفتر کل', en: 'General ledger' }, { fa: 'مانده مالیات خروجی و ورودی، شامل ثبت‌های دستی', en: 'Output and input VAT balances, including manual journals' }, { fa: 'اظهارنامه پس از رفع اختلاف‌ها', en: 'The return after resolving differences' }],
          ],
        },
        {
          type: 'diagram',
          id: 'p2p-flow',
          caption: {
            fa: 'چرخه خرید تا پرداخت: در فوترة، صورت‌حساب الکترونیکی تأمین‌کننده از راه C3 مستقیم به مرحله فاکتور می‌رسد و با سفارش خرید و رسید تطبیق داده می‌شود.',
            en: 'Procure-to-pay: under Fawtara the supplier’s e-invoice arrives through C3 straight at the invoice step and is matched with the purchase order and receipt.',
          },
        },
        {
          type: 'steps',
          items: [
            { title: { fa: 'درخواست و سفارش خرید', en: 'Requisition and purchase order' }, text: { fa: 'سفارش خرید رمل کد مالیاتی پیش‌بینی‌شده و موضوع هزینه (چاه RML-07، AFE) را دارد.', en: 'Raml’s purchase order carries the expected tax code and cost object (well RML-07, AFE).' } },
            { title: { fa: 'رسید خدمات', en: 'Service entry' }, text: { fa: 'گزارش کار میدانی وادی تأیید و رسید خدمات ثبت می‌شود؛ هزینه بدون مالیات به حساب واسط GR/IR می‌رود.', en: 'Wadi’s field ticket is approved and a service entry is posted; the cost, net of VAT, goes to GR/IR.' } },
            { title: { fa: 'دریافت صورت‌حساب الکترونیکی', en: 'E-invoice received' }, text: { fa: 'از اکتبر 2027، صورت‌حساب وادی از راه C3 با شماره سفارش خرید به صندوق حساب‌های پرداختنی می‌رسد.', en: 'From October 2027, Wadi’s invoice arrives via C3 in the AP inbox with the purchase order number.' } },
            { title: { fa: 'تطبیق سه‌طرفه خودکار', en: 'Automatic three-way match' }, text: { fa: 'سفارش، رسید و صورت‌حساب از نظر مقدار، قیمت و گروه مالیاتی مقایسه می‌شوند؛ اختلاف به گردش کار تأیید می‌رود.', en: 'Order, receipt and invoice are compared for quantity, price and VAT category; differences go to an approval workflow.' } },
            { title: { fa: 'ثبت و پرداخت', en: 'Posting and payment' }, text: { fa: 'مالیات ورودی فقط با صورت‌حساب معتبر ثبت می‌شود؛ سپس پرداخت طبق شرایط قرارداد.', en: 'Input VAT is posted only on a valid invoice; then payment follows the contract terms.' } },
          ],
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌هایی که ERP رمل تولید می‌کند (نوامبر 2027)', en: 'Entries Raml’s ERP generates (November 2027)' },
          entries: [
            {
              date: d('رسید خدمات', 'Service entry'),
              lines: [
                { account: ac.wellCost, debit: 48000 },
                { account: ac.grir, credit: 48000 },
              ],
            },
            {
              date: d('صورت‌حساب وادی', 'Wadi invoice'),
              lines: [
                { account: ac.grir, debit: 48000 },
                { account: ac.apWadi, credit: 48000 },
              ],
              memo: { fa: 'گروه Z؛ مالیات صفر', en: 'Category Z; no VAT' },
            },
            {
              date: d('رسید خدمات IT', 'IT service entry'),
              lines: [
                { account: ac.itExp, debit: 10000 },
                { account: ac.grir, credit: 10000 },
              ],
            },
            {
              date: d('صورت‌حساب IT', 'IT invoice'),
              lines: [
                { account: ac.grir, debit: 10000 },
                { account: ac.vatIn, debit: 500 },
                { account: ac.ap, credit: 10500 },
              ],
              memo: { fa: 'گروه S؛ مالیات ورودی در زمان صورت‌حساب', en: 'Category S; input VAT at invoice time' },
            },
            {
              date: d('پرداخت', 'Payment'),
              lines: [
                { account: ac.apWadi, debit: 48000 },
                { account: ac.cash, credit: 48000 },
              ],
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'کنترل‌های سمت خریدار', en: 'Buyer-side controls' },
          text: {
            fa: 'صورت‌حسابی را که فروشنده ثبت‌نام‌نشده در آن مالیات گرفته کسر نکنید و می‌توانید به سازمان گزارش دهید. گروه Z با دلیل نفت و گاز را فقط وقتی بپذیرید که خودتان استفاده انحصاری بالادستی را تأیید کرده‌اید. مالیات ورودی را در دوره‌ای کسر کنید که صورت‌حساب معتبر رسیده و تطبیق شده است.',
            en: 'Do not deduct VAT charged by an unregistered seller; you may report it to the OTA. Accept category Z with the oil and gas reason only where you have confirmed exclusive upstream use. Deduct input VAT in the period in which a valid invoice has arrived and been matched.',
          },
        },
        {
          type: 'h',
          text: { fa: 'اشتباهات رایج', en: 'Common Mistakes' },
        },
        {
          type: 'list',
          items: [
            { fa: 'فرستادن PDF با ایمیل و فرض اینکه «الکترونیکی» است.', en: 'Emailing a PDF and assuming it is an “e-invoice”.' },
            { fa: 'ویرایش یا ابطال صورت‌حساب پذیرفته‌شده به‌جای صدور اعلامیه الکترونیکی.', en: 'Editing or cancelling an accepted invoice instead of issuing an electronic note.' },
            { fa: 'رها کردن صورت‌حساب‌های ردشده؛ مالیات عرضه همچنان سررسید شده است.', en: 'Leaving rejected invoices unresolved; the VAT on the supply is still due.' },
            { fa: 'کاستن مالیات خروجی با ثبت دستی در دفتر کل، بدون اعلامیه بستانکار.', en: 'Reducing output VAT with a manual ledger journal and no credit note.' },
            { fa: 'تکیه بر سازمان یا ارائه‌دهنده برای بایگانی؛ نگهداری 10 ساله با خود مودی است.', en: 'Relying on the OTA or the provider for archiving; 10-year storage is the taxpayer’s job.' },
            { fa: 'ثبت مالیات ورودی هنگام رسید کالا یا پیش از رسیدن صورت‌حساب معتبر.', en: 'Posting input VAT at goods receipt or before a valid invoice arrives.' },
          ],
        },
        {
          type: 'exercise',
          title: { fa: 'تطبیق پیش از اظهارنامه', en: 'Reconciling before filing' },
          difficulty: 'hard',
          problem: {
            fa: 'وادی برای فصل چهارم 2027 (اولین فصل پس از پیوستن) سه گزارش درباره عرضه‌های 5٪ دارد. (1) هر اختلاف را توضیح دهید. (2) چه ارزش و مالیات خروجی‌ای برای عرضه‌های 5٪ در اظهارنامه می‌آید؟ (3) چه اقدام‌ها و چه ثبت اصلاحی‌ای لازم است؟',
            en: 'For Q4 2027 (its first quarter in Fawtara) Wadi has three reports on its standard-rated supplies. (1) Explain each difference. (2) What value and output VAT go in the return for standard-rated supplies? (3) What actions and correcting entry are needed?',
          },
          given: {
            head: [
              { fa: 'منبع', en: 'Source' },
              { fa: 'ارزش', en: 'Value' },
              { fa: 'مالیات', en: 'VAT' },
            ],
            rows: [
              [{ fa: 'ERP: صورت‌حساب‌ها', en: 'ERP: invoices' }, 200000, 10000],
              [{ fa: 'ERP: اعلامیه‌های بستانکار', en: 'ERP: credit notes' }, 5000, 250],
              [{ fa: 'ارائه‌دهنده: صورت‌حساب‌های پذیرفته‌شده', en: 'Provider: accepted invoices' }, 192000, 9600],
              [{ fa: 'ارائه‌دهنده: یک صورت‌حساب ردشده (شماره مالیاتی خریدار خالی)', en: 'Provider: one rejected invoice (buyer VATIN missing)' }, 8000, 400],
              [{ fa: 'ارائه‌دهنده: اعلامیه‌های پذیرفته‌شده', en: 'Provider: accepted credit notes' }, 5000, 250],
              [{ fa: 'دفتر کل: مانده مالیات خروجی (کد S5)', en: 'Ledger: output VAT balance (code S5)' }, blank, 9650],
            ],
            numericCols: [1, 2],
          },
          hint: {
            fa: 'دفتر کل یک ثبت دستی دارد: کسی 2,000 تخفیف قول‌داده‌شده به یک مشتری را بدون صدور اعلامیه، مستقیم ثبت کرده است.',
            en: 'The ledger contains a manual journal: someone posted a 2,000 discount promised to a customer directly, without issuing a credit note.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'مقایسه', en: 'Comparison' },
                { fa: 'مالیات', en: 'VAT' },
                { fa: 'توضیح', en: 'Explanation' },
              ],
              rows: [
                [{ fa: 'ERP خالص: 10,000 منهای 250', en: 'ERP net: 10,000 less 250' }, 9750, { fa: 'عرضه‌های واقعی: 195,000 × 5٪', en: 'Actual supplies: 195,000 × 5%' }],
                [{ fa: 'ارائه‌دهنده خالص: 9,600 منهای 250', en: 'Provider net: 9,600 less 250' }, 9350, { fa: 'اختلاف 400 = صورت‌حساب ردشده', en: 'Gap of 400 = the rejected invoice' }],
                [{ fa: 'دفتر کل', en: 'Ledger' }, 9650, { fa: 'اختلاف 100 با ERP = ثبت دستی بدون اعلامیه', en: 'Gap of 100 to the ERP = manual journal without a credit note' }],
              ],
              numericCols: [1],
            },
            {
              type: 'steps',
              items: [
                { title: { fa: 'صورت‌حساب ردشده', en: 'Rejected invoice' }, text: { fa: 'عرضه انجام شده، پس مالیات 400 سررسید شده است. شماره مالیاتی خریدار را در داده پایه وارد کنید و صورت‌حساب را فوراً دوباره بفرستید.', en: 'The supply happened, so the 400 is due. Add the buyer’s VATIN to master data and resubmit the invoice at once.' } },
                { title: { fa: 'ثبت دستی', en: 'Manual journal' }, text: { fa: 'بدون اعلامیه بستانکار نمی‌توان مالیات خروجی را کم کرد. ثبت دستی را برگردانید؛ اگر تخفیف واقعی است، اعلامیه الکترونیکی از راه ارائه‌دهنده صادر کنید و کاهش را در دوره صدور آن اظهار کنید.', en: 'Output VAT cannot be reduced without a credit note. Reverse the manual journal; if the discount is genuine, issue an electronic credit note through the provider and report the reduction in the period it is issued.' } },
                { title: { fa: 'اظهارنامه', en: 'Return' }, text: { fa: 'عرضه‌های 5٪: ارزش 195,000 و مالیات خروجی 9,750.', en: 'Standard-rated supplies: value 195,000 and output VAT 9,750.' } },
              ],
            },
            {
              type: 'journal',
              title: { fa: 'برگرداندن ثبت دستی', en: 'Reversing the manual journal' },
              entries: [
                {
                  lines: [
                    { account: ac.ar, debit: 2100 },
                    { account: ac.salesAllow, credit: 2000 },
                    { account: ac.vatOut, credit: 100 },
                  ],
                  memo: { fa: 'پس از این ثبت، مانده مالیات خروجی دفتر کل 9,750 می‌شود و با ERP برابر است.', en: 'After this entry the ledger output VAT balance is 9,750, equal to the ERP.' },
                },
              ],
            },
          ],
          answer: {
            fa: 'ارزش 195,000 و مالیات خروجی 9,750؛ صورت‌حساب 8,000 را با شماره مالیاتی درست دوباره بفرستید و ثبت دستی 100 را برگردانید (یا اعلامیه الکترونیکی صادر کنید).',
            en: 'Value 195,000 and output VAT 9,750; resubmit the 8,000 invoice with the correct VATIN and reverse the 100 manual journal (or issue an electronic credit note).',
          },
        },
      ],
    },
    {
      id: 'summary',
      title: { fa: 'جمع‌بندی و اصطلاحات کلیدی', en: 'Summary and Key Terms' },
      blocks: [
        {
          type: 'list',
          items: [
            { fa: 'صورت‌حساب الکترونیکی داده ساختاریافته (XML) است؛ PDF یا ایمیل صورت‌حساب الکترونیکی نیست.', en: 'An e-invoice is structured data (XML); a PDF or an email is not an e-invoice.' },
            { fa: 'فوترة برنامه سازمان مالیات عمان است بر پایه مدل پنج‌گوشه پپول: فروشنده، ارائه‌دهنده فروشنده، ارائه‌دهنده خریدار، خریدار و سازمان.', en: 'Fawtara is the OTA programme built on the Peppol five-corner model: seller, seller’s provider, buyer’s provider, buyer and the OTA.' },
            { fa: 'طبق تصمیم 189/2026: عرضه سالانه بیش از 5 میلیون ریال از 1 آوریل 2027 و بقیه از 1 اکتبر 2027؛ زمان نهادهای دولتی هنوز تعیین نشده است.', en: 'Under Decision 189/2026: annual supplies above OMR 5 million from 1 April 2027 and everyone else from 1 October 2027; the date for government entities is not yet set.' },
            { fa: 'قالب PINT OM شامل UUID، نوع تراکنش 20 رقمی، گروه‌های S، Z، E، O و کد دلیل نرخ صفر است؛ B2C کد QR لازم دارد.', en: 'PINT OM includes a UUID, a 20-position transaction type, categories S, Z, E, O and zero-rating reason codes; B2C needs a QR code.' },
            { fa: 'ارائه‌دهنده اعتبارسنجی می‌کند و داده مالیاتی (TDD) را گزارش می‌دهد، اما مسئولیت درستی مالیات و بایگانی 10 ساله با مودی است.', en: 'The provider validates and reports tax data (TDD), but the taxpayer remains responsible for VAT correctness and 10-year archiving.' },
            { fa: 'صورت‌حساب پذیرفته‌شده فقط با اعلامیه الکترونیکی دارای ارجاع و کد دلیل اصلاح می‌شود.', en: 'An accepted invoice is corrected only by an electronic note with a reference and reason code.' },
            { fa: 'آمادگی ERP از داده پایه و نگاشت مالیاتی شروع می‌شود، سمت دریافت را هم می‌پوشاند و با تطبیق روزانه و ماهانه کنترل می‌شود.', en: 'ERP readiness starts with master data and tax mapping, covers the receiving side too, and is controlled by daily and monthly reconciliation.' },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            { term: { fa: 'صورت‌حساب الکترونیکی', en: 'E-invoice' }, def: { fa: 'صورت‌حسابی در قالب ساختاریافته استاندارد که نرم‌افزار بدون دخالت انسان می‌خواند.', en: 'An invoice in a standard structured format that software reads without human input.' } },
            { term: { fa: 'کنترل پیوسته تراکنش‌ها (CTC)', en: 'Continuous transaction controls (CTC)' }, def: { fa: 'دریافت داده صورت‌حساب توسط سازمان مالیات در زمان معامله یا نزدیک به آن.', en: 'The tax authority receiving invoice data at or near the time of the transaction.' } },
            { term: { fa: 'تأیید پیشینی (Clearance)', en: 'Clearance' }, def: { fa: 'مدلی که سازمان باید هر صورت‌حساب را پیش از رسیدن به خریدار تأیید کند.', en: 'A model in which the authority must approve each invoice before the buyer receives it.' } },
            { term: { fa: 'فوترة', en: 'Fawtara' }, def: { fa: 'برنامه صورت‌حساب الکترونیکی سازمان مالیات عمان.', en: 'The Oman Tax Authority’s e-invoicing programme.' } },
            { term: { fa: 'مدل پنج‌گوشه', en: 'Five-corner model' }, def: { fa: 'فروشنده و خریدار از راه ارائه‌دهندگان خود مبادله می‌کنند و سازمان، گوشه پنجم، داده مالیاتی را می‌گیرد.', en: 'Seller and buyer exchange through their providers, and the authority, the fifth corner, receives tax data.' } },
            { term: { fa: 'پپول (Peppol)', en: 'Peppol' }, def: { fa: 'شبکه و چارچوب استاندارد بین‌المللی برای مبادله امن اسناد تجاری الکترونیکی.', en: 'An international network and standards framework for the secure exchange of electronic business documents.' } },
            { term: { fa: 'ارائه‌دهنده خدمات معتمد (ASP)', en: 'Accredited service provider (ASP)' }, def: { fa: 'شرکتی که سازمان برای اعتبارسنجی، مبادله و گزارش صورت‌حساب‌ها در شبکه فوترة تأیید کرده است.', en: 'A company the OTA has accredited to validate, exchange and report invoices in the Fawtara network.' } },
            { term: { fa: 'PINT OM', en: 'PINT OM' }, def: { fa: 'مشخصات عمانی صورت‌حساب بین‌المللی پپول که داده‌ها، کدها و قواعد صورت‌حساب را تعیین می‌کند.', en: 'The Omani Peppol International invoice specification that defines invoice data, codes and rules.' } },
            { term: { fa: 'سند داده مالیاتی (TDD)', en: 'Tax Data Document (TDD)' }, def: { fa: 'گزارشی که ارائه‌دهنده فروشنده و خریدار برای هر صورت‌حساب به سازمان می‌فرستند.', en: 'The report the seller’s and buyer’s providers send to the OTA for each invoice.' } },
            { term: { fa: 'شناسه یکتا (UUID)', en: 'UUID' }, def: { fa: 'شناسه‌ای که هر صورت‌حساب الکترونیکی را به‌طور یکتا مشخص می‌کند.', en: 'An identifier that uniquely identifies each e-invoice.' } },
            { term: { fa: 'نوع تراکنش', en: 'Transaction type' }, def: { fa: 'رشته 20 رقمی از 0 و 1 که ویژگی‌های صورت‌حساب (کامل، ساده‌شده، صادرات، واردات...) را نشان می‌دهد.', en: 'A 20-character string of 0s and 1s flagging the invoice’s characteristics (full, simplified, export, import...).' } },
            { term: { fa: 'خودصدوری', en: 'Self-billing' }, def: { fa: 'صدور صورت‌حساب توسط خریدار؛ در فوترة برای گزارش واردات کالا و خدمات به کار می‌رود.', en: 'The buyer issuing the invoice; in Fawtara it is used to report imports of goods and services.' } },
            { term: { fa: 'اعلامیه بستانکار الکترونیکی', en: 'Electronic credit note' }, def: { fa: 'سند اصلاحی الکترونیکی با ارجاع به UUID صورت‌حساب اصلی و کد دلیل.', en: 'An electronic adjustment document referring to the original invoice UUID with a reason code.' } },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: {
        fa: 'وادی صورت‌حساب خود را به‌صورت PDF امضاشده با ایمیل برای مشتری می‌فرستد. پس از تاریخ الزام، آیا این صورت‌حساب الکترونیکی معتبر است؟',
        en: 'Wadi emails its customer a signed PDF invoice. After its mandate date, is this a valid e-invoice?',
      },
      options: [
        { fa: 'بله، چون امضای دیجیتال دارد', en: 'Yes, because it is digitally signed' },
        { fa: 'نه؛ صورت‌حساب الکترونیکی XML ساختاریافته‌ای است که از راه ارائه‌دهنده معتمد صادر و مبادله می‌شود', en: 'No; an e-invoice is structured XML issued and exchanged through an accredited provider' },
        { fa: 'بله، اگر ظرف 15 روز فرستاده شود', en: 'Yes, if sent within 15 days' },
        { fa: 'فقط برای B2C معتبر است', en: 'It is valid only for B2C' },
      ],
      answer: 1,
      explain: {
        fa: 'سازمان صریحاً می‌گوید PDF صورت‌حساب الکترونیکی نیست. صورت‌حساب باید در قالب XML تأییدشده و از سیستمی متصل به ارائه‌دهنده معتمد صادر شود. امضای دیجیتال یا مهلت 15 روزه این قاعده را عوض نمی‌کند.',
        en: 'The OTA states that a PDF is not an e-invoice. The invoice must be in the approved XML format and issued from a system connected to an accredited provider. A digital signature or the 15-day deadline does not change that.',
      },
    },
    {
      q: {
        fa: 'شرکتی از آوریل 2026 تا مارس 2027 خدمات مشمول 4,500,000 و فروش یک دارایی سرمایه‌ای 600,000 داشته و برای 12 ماه بعد 4,900,000 پیش‌بینی می‌کند. صورت‌حساب الکترونیکی از چه تاریخی برایش الزامی است؟',
        en: 'From April 2026 to March 2027 a company had taxable services of 4,500,000 and sold a capital asset for 600,000; it expects 4,900,000 for the next 12 months. From when is e-invoicing mandatory for it?',
      },
      options: [
        { fa: '1 آوریل 2027، چون 5,100,000 از 5 میلیون بیشتر است', en: '1 April 2027, because 5,100,000 exceeds 5 million' },
        { fa: 'اوت 2026', en: 'August 2026' },
        { fa: '1 اکتبر 2027', en: '1 October 2027' },
        { fa: 'هرگز، چون زیر 5 میلیون است', en: 'Never, because it is below 5 million' },
      ],
      answer: 2,
      explain: {
        fa: 'فروش دارایی سرمایه‌ای در آزمون حساب نمی‌شود؛ رقم واقعی 4,500,000 و پیش‌بینی 4,900,000 هر دو زیر 5,000,000 است، پس مرحله 2 یعنی 1 اکتبر 2027. پاسخ 5,100,000 دارایی سرمایه‌ای را اشتباهاً حساب کرده و «هرگز» غلط است چون همه مودیان ثبت‌نام‌شده در مرحله 2 قرار می‌گیرند.',
        en: 'Capital asset sales are excluded; actual 4,500,000 and expected 4,900,000 are both below 5,000,000, so Phase 2 applies: 1 October 2027. The 5,100,000 answer wrongly counts the asset sale, and “never” is wrong because all registered taxpayers fall into Phase 2.',
      },
    },
    {
      q: {
        fa: 'چه کسی صورت‌حساب را با قواعد اعتبارسنجی (Schematron) عمان کنترل می‌کند؟',
        en: 'Who checks the invoice against the Oman validation (Schematron) rules?',
      },
      options: [
        { fa: 'ارائه‌دهنده خدمات معتمد فروشنده (C2)', en: 'The seller’s accredited service provider (C2)' },
        { fa: 'سازمان مالیات، پیش از تحویل به خریدار', en: 'The OTA, before delivery to the buyer' },
        { fa: 'ارائه‌دهنده خریدار (C3)', en: 'The buyer’s provider (C3)' },
        { fa: 'خودِ خریدار هنگام پرداخت', en: 'The buyer at payment time' },
      ],
      answer: 0,
      explain: {
        fa: 'طبق پرسش‌های متداول، ارائه‌دهنده صادرکننده صورت‌حساب را با قواعد Schematron عمان اعتبارسنجی می‌کند. فوترة مدل تأیید پیشینی نیست، پس سازمان صورت‌حساب را پیش از تحویل نگه نمی‌دارد.',
        en: 'Per the FAQ, the issuer’s provider validates the invoice against the Oman Schematron rules. Fawtara is not a clearance model, so the OTA does not hold the invoice before delivery.',
      },
    },
    {
      q: {
        fa: 'یک صورت‌حساب B2C ساعت 10:00 روز 3 مه صادر می‌شود. طبق پرسش‌های متداول سازمان، دیرترین زمان ارسال آن کی است؟',
        en: 'A B2C invoice is issued at 10:00 on 3 May. Per the OTA FAQ, what is the latest time to submit it?',
      },
      options: [
        { fa: 'بی‌درنگ، مثل B2B', en: 'Immediately, like B2B' },
        { fa: 'تا ساعت 10:00 روز 4 مه (24 ساعت)', en: 'By 10:00 on 4 May (24 hours)' },
        { fa: 'تا پایان فصل', en: 'By the end of the quarter' },
        { fa: 'ظرف 15 روز', en: 'Within 15 days' },
      ],
      answer: 1,
      explain: {
        fa: 'پرسش‌های متداول برای B2B «بی‌درنگ» و برای B2C «24 ساعت» گفته است؛ 3 مه ساعت 10:00 به‌اضافه 24 ساعت می‌شود 4 مه ساعت 10:00. مهلت 15 روزه مربوط به صدور صورت‌حساب پس از عرضه است، نه ارسال پس از صدور.',
        en: 'The FAQ says “real time” for B2B and “24 hours” for B2C; 10:00 on 3 May plus 24 hours is 10:00 on 4 May. The 15-day rule is about issuing an invoice after the supply, not submitting it after issue.',
      },
    },
    {
      q: {
        fa: 'صورت‌حساب 30,000 به‌اضافه 1,500 مالیات پذیرفته شده است. بعداً قیمت 10٪ کاهش می‌یابد. مالیات روی اعلامیه بستانکار و مالیات خالص این عرضه چقدر است؟',
        en: 'An invoice for 30,000 plus 1,500 VAT was accepted. Later the price is cut by 10%. What is the VAT on the credit note and the net VAT on the supply?',
      },
      options: [
        { fa: '300؛ خالص 1,200', en: '300; net 1,200' },
        { fa: '150؛ خالص 1,650', en: '150; net 1,650' },
        { fa: '1,500؛ خالص صفر', en: '1,500; net zero' },
        { fa: '150؛ خالص 1,350', en: '150; net 1,350' },
      ],
      answer: 3,
      explain: {
        fa: 'کاهش 10٪ یعنی 3,000 و مالیات آن 3,000 × 5٪ = 150؛ مالیات خالص 1,500 منهای 150 = 1,350. اعلامیه با کد VAL و ارجاع به UUID صادر می‌شود. پاسخ 1,650 اعلامیه را به‌جای کم کردن اضافه کرده است.',
        en: 'A 10% cut is 3,000 and its VAT is 3,000 × 5% = 150; net VAT is 1,500 less 150 = 1,350. The note is issued with code VAL and the UUID reference. The 1,650 answer adds the note instead of subtracting it.',
      },
    },
    {
      q: {
        fa: 'در مدل پنج‌گوشه فوترة، گوشه پنجم (C5) کیست؟',
        en: 'In Fawtara’s five-corner model, who is the fifth corner (C5)?',
      },
      options: [
        { fa: 'ارائه‌دهنده خریدار', en: 'The buyer’s provider' },
        { fa: 'سازمان مالیات عمان که داده مالیاتی را دریافت می‌کند', en: 'The Oman Tax Authority, which receives the tax data' },
        { fa: 'فهرست مرکزی SMP', en: 'The central SMP directory' },
        { fa: 'اداره گمرک', en: 'The customs directorate' },
      ],
      answer: 1,
      explain: {
        fa: 'C1 فروشنده، C2 و C3 ارائه‌دهندگان، C4 خریدار و C5 سازمان مالیات است که TDD صورت‌حساب‌های صادره و دریافتی را می‌گیرد. SMP فقط برای پیدا کردن نشانی گیرنده است و خودش یک «گوشه» نیست.',
        en: 'C1 is the seller, C2 and C3 the providers, C4 the buyer and C5 the OTA, which receives TDDs for issued and received invoices. The SMP is only used to find the recipient and is not a “corner”.',
      },
    },
    {
      q: {
        fa: 'یک گروه مالیاتی سه عضو با عرضه سالانه 2,200,000 و 1,900,000 و 1,400,000 دارد. صورت‌حساب الکترونیکی برای آن از چه زمانی الزامی است؟',
        en: 'A VAT group has three members with annual supplies of 2,200,000, 1,900,000 and 1,400,000. From when is e-invoicing mandatory?',
      },
      options: [
        { fa: 'هر عضو جداگانه از 1 اکتبر 2027', en: 'Each member separately from 1 October 2027' },
        { fa: 'فقط بزرگ‌ترین عضو از 1 آوریل 2027', en: 'Only the largest member from 1 April 2027' },
        { fa: 'کل گروه از 1 آوریل 2027، چون جمع 5,500,000 است', en: 'The whole group from 1 April 2027, as the total is 5,500,000' },
        { fa: 'کل گروه از 1 اکتبر 2027، چون هیچ عضوی از 5 میلیون بیشتر نیست', en: 'The whole group from 1 October 2027, as no member exceeds 5 million' },
      ],
      answer: 2,
      explain: {
        fa: 'آستانه در سطح گروه سنجیده می‌شود: 2,200,000 + 1,900,000 + 1,400,000 = 5,500,000 که از 5,000,000 بیشتر است. سنجیدن تک‌تک اعضا دام رایج است.',
        en: 'The threshold is tested at group level: 2,200,000 + 1,900,000 + 1,400,000 = 5,500,000, above 5,000,000. Testing each member separately is the usual trap.',
      },
    },
    {
      q: {
        fa: 'چه کسی مسئول نگهداری صورت‌حساب‌های الکترونیکی است؟',
        en: 'Who is responsible for storing e-invoices?',
      },
      options: [
        { fa: 'سازمان مالیات؛ هر وقت لازم شد نسخه می‌دهد', en: 'The OTA; it provides copies when needed' },
        { fa: 'ارائه‌دهنده معتمد، به‌طور خودکار برای 10 سال', en: 'The accredited provider, automatically for 10 years' },
        { fa: 'هیچ‌کس؛ TDD نزد سازمان کافی است', en: 'Nobody; the TDD held by the OTA is enough' },
        { fa: 'خودِ مودی، طبق قانون مالیات بر ارزش افزوده (معمولاً 10 سال)', en: 'The taxpayer itself, under the VAT law (normally 10 years)' },
      ],
      answer: 3,
      explain: {
        fa: 'سازمان گفته است مسئولیت نگهداری و بایگانی با مودی است و اطلاعات صورت‌حساب را به مودی نمی‌دهد. ارائه‌دهنده فقط اگر در قرارداد آمده باشد بایگانی می‌کند و پپول هم سند ذخیره نمی‌کند.',
        en: 'The OTA has said storage and archiving are the taxpayer’s responsibility and it will not provide invoice information. A provider archives only if the contract says so, and Peppol does not store documents.',
      },
    },
    {
      q: {
        fa: 'گزارش ERP مالیات خروجی خالص فصل را 12,400 نشان می‌دهد، اما اسناد پذیرفته‌شده نزد ارائه‌دهنده 11,900 است؛ اختلاف یک صورت‌حساب 10,000 به‌اضافه 500 است که رد شده. در اظهارنامه چه مالیات خروجی‌ای می‌آید؟',
        en: 'The ERP shows net output VAT of 12,400 for the quarter, but accepted documents at the provider total 11,900; the gap is one rejected invoice of 10,000 plus 500. What output VAT goes in the return?',
      },
      options: [
        { fa: '12,400؛ و صورت‌حساب ردشده باید اصلاح و دوباره ارسال شود', en: '12,400; and the rejected invoice must be fixed and resubmitted' },
        { fa: '11,900، چون فقط اسناد پذیرفته‌شده حساب می‌شوند', en: '11,900, because only accepted documents count' },
        { fa: '11,400', en: '11,400' },
        { fa: '12,900', en: '12,900' },
      ],
      answer: 0,
      explain: {
        fa: 'مالیات با عرضه سررسید می‌شود، نه با پذیرش ارائه‌دهنده؛ عرضه انجام شده، پس 500 باید اظهار شود: 11,900 + 500 = 12,400. گزینه 11,900 وسوسه‌انگیز است، اما رد شدن فنی بدهی مالیاتی را از بین نمی‌برد؛ فقط صورت‌حساب باید فوراً درست و دوباره ارسال شود.',
        en: 'VAT is due because of the supply, not because the provider accepted the document; the supply took place, so the 500 must be declared: 11,900 + 500 = 12,400. 11,900 is tempting, but a technical rejection does not remove the tax liability; the invoice must simply be fixed and resent quickly.',
      },
    },
    {
      q: {
        fa: 'در چرخه خرید تا پرداخت رمل، مالیات ورودی خرید خدمات IT چه زمانی ثبت می‌شود؟',
        en: 'In Raml’s procure-to-pay cycle, when is input VAT on an IT services purchase recorded?',
      },
      options: [
        { fa: 'هنگام تأیید سفارش خرید', en: 'When the purchase order is approved' },
        { fa: 'هنگام ثبت رسید خدمات', en: 'When the service entry is posted' },
        { fa: 'هنگام پرداخت به تأمین‌کننده', en: 'When the supplier is paid' },
        { fa: 'هنگام رسیدن و تطبیق صورت‌حساب مالیاتی معتبر', en: 'When a valid tax invoice has arrived and been matched' },
      ],
      answer: 3,
      explain: {
        fa: 'رسید خدمات فقط هزینه بدون مالیات را به حساب واسط GR/IR می‌برد. شرط کسر، داشتن صورت‌حساب مالیاتی معتبر است؛ پس مالیات ورودی هنگام ثبت صورت‌حساب تطبیق‌شده ثبت می‌شود. پرداخت ربطی به زمان کسر ندارد.',
        en: 'The service entry only posts the net cost to GR/IR. Deduction requires a valid tax invoice, so input VAT is recorded when the matched invoice is posted. Payment has no bearing on the timing of the deduction.',
      },
    },
  ],
}
