import type { Lesson } from '../../types'

/* Account titles used in the Masar Petroleum examples. */
const ac = {
  inventory: { fa: 'موجودی مواد و قطعات', en: 'Materials and spares inventory' },
  auc09: { fa: 'دارایی در جریان تکمیل: چاه AR-09', en: 'Assets under construction: well AR-09' },
  grir: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing' },
  ap: { fa: 'حساب‌های پرداختنی: تأمین‌کنندگان داخلی', en: 'Accounts payable: domestic suppliers' },
  advances: { fa: 'پیش‌پرداخت به تأمین‌کنندگان', en: 'Advances to suppliers' },
  bank: { fa: 'موجودی نقد (بانک)', en: 'Cash at bank' },
}

const day = (n: number) => ({ fa: `روز ${n}`, en: `Day ${n}` })
const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'supplier-management',
  number: 3,
  level: 'intermediate',
  minutes: 26,
  icon: 'Users',
  tone: 'gold',
  title: { fa: 'مدیریت تأمین‌کنندگان', en: 'Supplier Management' },
  summary: {
    fa: 'ببینید مسار پترولیوم چگونه تأمین‌کنندگان را ثبت می‌کند و داده پایه آن‌ها را سالم نگه می‌دارد، صلاحیت فنی، مالی، HSE و کیفی را می‌سنجد، فهرست تأمین‌کنندگان تأییدشده را با توجه به ساخت داخل می‌سازد، عملکرد را با شاخص‌ها اندازه می‌گیرد و تأمین‌کننده پرریسک را مسدود می‌کند؛ و اینکه داده پایه تأمین‌کننده چگونه ثبت‌های حساب‌های پرداختنی را در مالی هدایت می‌کند.',
    en: 'See how Masar Petroleum registers suppliers and keeps their master data clean, assesses technical, financial, HSE and quality capability, builds approved vendor lists with local content in mind, measures performance with KPIs and blocks risky suppliers; and how the vendor master drives the accounts payable postings in Finance.',
  },
  objectives: [
    {
      fa: 'چرخه عمر تأمین‌کننده را از ثبت‌نام تا خروج شرح دهید',
      en: 'Describe the supplier lifecycle from registration to exit',
    },
    {
      fa: 'داده‌های پایه تأمین‌کننده در ERP و مسئول نگهداری هر بخش را بشناسید',
      en: 'Identify the vendor master data in an ERP and who should maintain each part',
    },
    {
      fa: 'صلاحیت یک تأمین‌کننده را با معیارهای وزنی فنی، مالی، HSE و کیفیت ارزیابی کنید',
      en: 'Prequalify a supplier with weighted technical, financial, HSE and quality criteria',
    },
    {
      fa: 'شاخص‌های عملکرد تأمین‌کننده را محاسبه و به رتبه و اقدام تبدیل کنید',
      en: 'Calculate supplier performance KPIs and turn them into a rating and an action',
    },
    {
      fa: 'اثر تنظیمات داده پایه (حساب کنترل، شرایط پرداخت، انسداد) را بر ثبت‌های مالی و راه‌های حفظ کیفیت داده را توضیح دهید',
      en: 'Explain how vendor master settings (control account, payment terms, blocks) drive Finance postings, and how to keep vendor data clean',
    },
  ],
  sections: [
    {
      id: 'why-suppliers',
      title: { fa: 'چرا تأمین‌کنندگان را مدیریت کنیم؟', en: 'Why Manage Suppliers?' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در یک ماه دو اتفاق در مسار پترولیوم می‌افتد. اول: محموله‌ای شیر کشویی از تأمین‌کننده‌ای تازه، بدون گواهی مواد می‌رسد؛ بازرسی آن را رد می‌کند و دکل چاه AR-09 سه روز منتظر می‌ماند. با هزینه روزانه فرضی 45,000 برای دکل و خدمات وابسته، این انتظار 3 × 45,000 = 135,000 خرج دارد؛ بیشتر از قیمت خود شیرها. دوم: واحد حساب‌های پرداختنی کشف می‌کند یک شرکت با دو کد V-1007 و V-1093 در سیستم ثبت شده و یک فاکتور 36,000 دو بار پرداخت شده است.',
            en: 'Two things happen at Masar Petroleum in one month. First, a batch of gate valves from a new supplier arrives without material certificates; inspection rejects it and the AR-09 rig waits three days. At an illustrative 45,000 a day for the rig and related services, the wait costs 3 × 45,000 = 135,000, more than the valves themselves. Second, accounts payable discovers that one company exists in the system under two codes, V-1007 and V-1093, and an invoice of 36,000 was paid twice.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**مدیریت تأمین‌کنندگان (Supplier management)** یعنی مدیریت کل رابطه با تأمین‌کنندگان: چه کسی اجازه دارد به ما بفروشد، چگونه در سیستم ثبت می‌شود، چگونه کار می‌کند و چه زمانی دیگر با او کار نمی‌کنیم. هر دو اتفاق بالا از ضعف همین مدیریت بود: تأمین‌کننده‌ای بدون ارزیابی کیفیت وارد شد، و داده پایه‌ای بدون کنترل تکراری ساخته شد.',
            en: '**Supplier management** is managing the whole relationship with suppliers: who is allowed to sell to us, how they are recorded in the system, how they perform, and when we stop working with them. Both events above came from weak supplier management: a supplier got in without a quality assessment, and a master record was created without a duplicate check.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'ثبت‌نام', en: 'Registration' },
              text: { fa: 'تأمین‌کننده مدارک قانونی، مالی و فنی را از درگاه یا فرم ثبت‌نام می‌فرستد.', en: 'The supplier submits legal, financial and technical documents through a portal or registration form.' },
            },
            {
              title: { fa: 'ارزیابی صلاحیت', en: 'Prequalification' },
              text: { fa: 'توان فنی، مالی، HSE و کیفیت سنجیده می‌شود.', en: 'Technical, financial, HSE and quality capability are assessed.' },
            },
            {
              title: { fa: 'تأیید و درج در فهرست', en: 'Approval and listing' },
              text: { fa: 'تأمین‌کننده برای گروه‌های کالای مشخص در فهرست تأمین‌کنندگان تأییدشده قرار می‌گیرد.', en: 'The supplier is added to the approved vendor list for specific material groups.' },
            },
            {
              title: { fa: 'همکاری', en: 'Use' },
              text: { fa: 'استعلام، سفارش خرید و قرارداد دریافت می‌کند.', en: 'It receives RFQs, purchase orders and contracts.' },
            },
            {
              title: { fa: 'ارزیابی عملکرد', en: 'Performance evaluation' },
              text: { fa: 'هر فصل با شاخص‌های عینی از داده‌های ERP سنجیده می‌شود.', en: 'It is measured every quarter with objective KPIs from ERP data.' },
            },
            {
              title: { fa: 'بهبود یا اقدام اصلاحی', en: 'Development or corrective action' },
              text: { fa: 'ضعف‌ها با برنامه اصلاحی برطرف می‌شوند.', en: 'Weaknesses are addressed with a corrective action plan.' },
            },
            {
              title: { fa: 'مسدودسازی یا خروج', en: 'Blocking or exit' },
              text: { fa: 'تأمین‌کننده پرریسک یا غیرفعال مسدود یا بایگانی می‌شود.', en: 'A high-risk or inactive supplier is blocked or archived.' },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در بسیاری از شرکت‌های نفتی ایران، ثبت در **فهرست تأمین‌کنندگان شرکت (Vendor List)** پیش‌شرط دریافت استعلام است و شرکت‌ها برای هر گروه کالا فهرست جداگانه دارند. برای اشخاص حقوقی، **شناسه ملی** و **کد اقتصادی** ثبت می‌شود و صاحبان امضای مجاز از روی آگهی‌های **روزنامه رسمی** کنترل می‌شوند.',
            en: 'In many Iranian oil companies, registration in the company’s **vendor list** is a precondition for receiving RFQs, with a separate list for each material group. For legal entities, the **national ID** and **economic code** are recorded, and authorised signatories are checked against notices in the **Official Gazette**.',
          },
        },
      ],
    },
    {
      id: 'vendor-master',
      title: { fa: 'ثبت تأمین‌کننده و داده پایه', en: 'Registration and Vendor Master Data' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**داده پایه تأمین‌کننده (Vendor master)** رکوردی واحد برای هر تأمین‌کننده در ERP است که هم تدارکات از آن استفاده می‌کند و هم مالی. هر سفارش، GRN، SES، فاکتور و پرداخت به این رکورد ارجاع می‌دهد؛ پس یک اشتباه در آن، در هزاران سند تکرار می‌شود. داده پایه معمولاً در چند **نما (View)** سازمان‌دهی می‌شود که هر کدام صاحب جداگانه دارد.',
            en: 'The **vendor master** is the single record for each supplier in the ERP, used by both Procurement and Finance. Every PO, GRN, SES, invoice and payment points to it, so one error in it is repeated across thousands of documents. The record is usually organised into several **views**, each with its own owner.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'نماهای داده پایه تأمین‌کننده', en: 'Views of the vendor master' },
          head: [
            { fa: 'نما', en: 'View' },
            { fa: 'فیلدهای نمونه', en: 'Example fields' },
            { fa: 'مسئول نگهداری', en: 'Maintained by' },
          ],
          rows: [
            [
              { fa: 'عمومی', en: 'General' },
              {
                fa: 'نام قانونی، شماره ثبت، شناسه ملی، کد اقتصادی، نشانی، تماس‌ها، مالکان واقعی',
                en: 'Legal name, registration number, national ID, economic code, address, contacts, beneficial owners',
              },
              { fa: 'تیم داده پایه، از روی مدارک ثبت‌نام', en: 'Master data team, from the registration documents' },
            ],
            [
              { fa: 'خرید', en: 'Purchasing' },
              {
                fa: 'ارز سفارش، شرایط تحویل (Incoterms)، گروه‌های کالای مجاز، وضعیت در فهرست تأییدشده',
                en: 'Order currency, delivery terms (Incoterms), approved material groups, approved-list status',
              },
              { fa: 'تدارکات', en: 'Procurement' },
            ],
            [
              { fa: 'حسابداری', en: 'Accounting' },
              {
                fa: '**حساب کنترل** (حساب‌های پرداختنی)، شرایط و روش پرداخت، حساب بانکی (شبا)، وضعیت کسر مالیات',
                en: '**Reconciliation (control) account** (accounts payable), payment terms and method, bank account (IBAN), withholding tax status',
              },
              { fa: 'مالی؛ حساب بانکی با تماس تأییدی', en: 'Finance; bank details verified by call-back' },
            ],
            [
              { fa: 'انطباق و گواهی‌ها', en: 'Compliance and certificates' },
              {
                fa: 'گواهی‌های ISO 9001، 14001 و 45001، مجوزهای API، بیمه‌نامه‌ها و تاریخ انقضای هر کدام',
                en: 'ISO 9001, 14001 and 45001 certificates, API licences, insurance policies and each one’s expiry date',
              },
              { fa: 'تضمین کیفیت و HSE، همراه تدارکات', en: 'Quality assurance and HSE, with procurement' },
            ],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'قاعده طلایی: **کسی که داده پایه تأمین‌کننده را تغییر می‌دهد، نباید پرداخت را اجرا کند**، و کارشناس خرید نباید به اطلاعات بانکی دسترسی تغییر داشته باشد. هر تغییر حساب بانکی باید با **کنترل دونفره** تأیید شود و با تماس به شماره‌ای که از قبل در سیستم ثبت است، نه شماره‌ای که در نامه درخواست تغییر آمده، از خود تأمین‌کننده پرسیده شود.',
            en: 'The golden rule: **whoever changes vendor master data must not run payments**, and buyers must not be able to change bank details. Every bank change needs **dual control** and a call-back to the supplier on the number already held in the system, not the number printed on the change request.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'کلاهبرداری با تغییر حساب بانکی', en: 'Bank-detail change fraud' },
          text: {
            fa: 'نامه یا ایمیلی با سربرگ تأمین‌کننده می‌رسد: «حساب بانکی ما عوض شده؛ از این پس به این شماره شبا واریز کنید.» اگر کسی بدون تماس تأییدی آن را در سیستم وارد کند، پرداخت بعدی به حساب کلاهبردار می‌رود و معمولاً برنمی‌گردد. کنترل‌ها: تماس تأییدی، تأیید دونفره، اطلاع‌رسانی به نشانی قبلی تأمین‌کننده، و **انسداد پرداخت** خودکار تا وقتی تغییر تأیید شود.',
            en: 'A letter or email on the supplier’s letterhead arrives: “Our bank account has changed; please pay this IBAN from now on.” If someone keys it in without a call-back, the next payment goes to the fraudster and is rarely recovered. Controls: a call-back, dual approval, a notice to the supplier’s old address, and an automatic **payment block** until the change is verified.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در ایران حساب بانکی با **شماره شبا** مشخص می‌شود و بانک‌ها خدمت **استعلام شبا** دارند که نام صاحب حساب را برمی‌گرداند. پیش از ذخیره حساب بانکی، این نام باید با نام قانونی تأمین‌کننده در داده پایه یکی باشد. پرداخت به حساب شخصی مدیر یا کارمند تأمین‌کننده، به‌جای حساب شرکت، نشانه هشدار است.',
            en: 'In Iran a bank account is identified by its **Sheba (IBAN) number**, and banks offer a **Sheba inquiry** that returns the account holder’s name. Before a bank account is saved, that name must match the supplier’s legal name in the master record. Paying into the personal account of a supplier’s manager or employee, instead of the company’s account, is a red flag.',
          },
        },
      ],
    },
    {
      id: 'prequalification',
      title: { fa: 'ارزیابی صلاحیت (پیش‌صلاحیت)', en: 'Prequalification' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**ارزیابی صلاحیت (Prequalification)** یعنی پیش از آنکه به تأمین‌کننده اجازه پیشنهاد دادن بدهیم، بسنجیم که از عهده کار برمی‌آید: از نظر فنی، مالی، ایمنی و کیفیت. ارزیابی برای هر گروه کالا یک بار انجام می‌شود و به‌طور دوره‌ای (مثلاً هر دو یا سه سال) یا با انقضای گواهی‌ها تجدید می‌شود.',
            en: '**Prequalification** means checking, before a supplier is allowed to bid, that it can do the job: technically, financially, safely and with the right quality. It is done once per material group and renewed periodically (say every two or three years) or when certificates expire.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'چهار معیار ارزیابی صلاحیت', en: 'The four prequalification criteria' },
          head: [
            { fa: 'معیار', en: 'Criterion' },
            { fa: 'چه چیزی سنجیده می‌شود', en: 'What is checked' },
            { fa: 'مدرک', en: 'Evidence' },
          ],
          rows: [
            [
              { fa: 'فنی', en: 'Technical' },
              { fa: 'توان ساخت یا اجرا، ظرفیت، تجهیزات، سابقه کار مشابه در نفت و گاز', en: 'Manufacturing or service capability, capacity, equipment, similar oil and gas experience' },
              { fa: 'فهرست پروژه‌ها، معرفی‌نامه‌ها، بازدید از کارخانه، مجوزهای API', en: 'Project list, references, factory audit, API licences' },
            ],
            [
              { fa: 'مالی', en: 'Financial' },
              { fa: 'توان تأمین مالی کار و ثبات مالی', en: 'Ability to finance the work and financial stability' },
              { fa: 'صورت‌های مالی حسابرسی‌شده دو یا سه سال، نسبت جاری، نسبت بدهی، گردش سالانه', en: 'Two or three years of audited financial statements, current ratio, debt ratio, annual turnover' },
            ],
            [
              { fa: 'HSE', en: 'HSE' },
              { fa: 'نظام مدیریت HSE، سابقه حوادث، برنامه HSE', en: 'HSE management system, incident record, HSE plan' },
              { fa: 'گواهی ISO 45001 و 14001، آمار LTIF و TRIR، گزارش حوادث', en: 'ISO 45001 and 14001 certificates, LTIF and TRIR statistics, incident reports' },
            ],
            [
              { fa: 'کیفیت', en: 'Quality' },
              { fa: 'نظام مدیریت کیفیت، برنامه بازرسی و آزمون، ردیابی، سابقه عدم انطباق', en: 'Quality management system, inspection and test plans, traceability, non-conformance history' },
              { fa: 'گواهی ISO 9001، دستورالعمل کیفیت، نمونه برنامه بازرسی و آزمون', en: 'ISO 9001 certificate, quality manual, a sample inspection and test plan' },
            ],
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'امتیاز وزنی = Σ (وزن هر معیار × امتیاز آن معیار)',
            en: 'Weighted score = Σ (weight of each criterion × score on that criterion)',
          },
          note: {
            fa: 'قاعده قبولی مسار پترولیوم برای گروه «شیرآلات و تجهیزات سرچاهی» (فرضی): امتیاز کل دست‌کم 70 و هیچ معیاری کمتر از 60 نباشد.',
            en: 'Masar Petroleum’s pass rule for the “valves and wellhead equipment” group (illustrative): a total of at least 70 and no criterion below 60.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'ارزیابی صلاحیت دو تأمین‌کننده شیرآلات', en: 'Prequalification of two valve suppliers' },
          head: [
            { fa: 'معیار', en: 'Criterion' },
            { fa: 'وزن (٪)', en: 'Weight (%)' },
            { fa: 'امتیاز V-1001', en: 'V-1001 score' },
            { fa: 'وزنی V-1001', en: 'V-1001 weighted' },
            { fa: 'امتیاز V-1002', en: 'V-1002 score' },
            { fa: 'وزنی V-1002', en: 'V-1002 weighted' },
          ],
          numericCols: [1, 2, 3, 4, 5],
          rows: [
            [{ fa: 'فنی', en: 'Technical' }, 30, 80, 24, 90, 27],
            [{ fa: 'مالی', en: 'Financial' }, 20, 65, 13, 85, 17],
            [{ fa: 'HSE', en: 'HSE' }, 25, 72, 18, 55, 13.75],
            [{ fa: 'کیفیت', en: 'Quality' }, 25, 90, 22.5, 88, 22],
            [{ fa: '**جمع**', en: '**Total**' }, 100, blank, 77.5, blank, 79.75],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'V-1002 امتیاز کل بالاتری دارد (79.75)، اما **رد می‌شود**، چون امتیاز HSE آن 55 و کمتر از حداقل 60 است. V-1001 با 77.5 و همه معیارها بالای 60 **قبول** است. حداقل جداگانه برای هر معیار (معیار حذفی) نمی‌گذارد امتیاز فنی خوب، سابقه ایمنی ضعیف را بپوشاند.',
            en: 'V-1002 has the higher total (79.75) but **fails**, because its HSE score of 55 is below the minimum of 60. V-1001, at 77.5 with every criterion above 60, **passes**. A separate minimum for each criterion (a knock-out rule) stops a strong technical score from hiding a weak safety record.',
          },
        },
        {
          type: 'h',
          text: { fa: 'دو آزمون عددی رایج', en: 'Two common numeric tests' },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**توان مالی**: یک قاعده رایج (فرضی) می‌گوید میانگین گردش سالانه تأمین‌کننده دست‌کم دو برابر مبلغ سالانه قرارداد باشد. تأمین‌کننده‌ای با گردش 2,400,000 برای قراردادی سالانه 1,500,000 کافی نیست (2,400,000 ÷ 1,500,000 = 1.6 که کمتر از 2 است)، اما برای قراردادهای تا 2,400,000 ÷ 2 = 1,200,000 پذیرفتنی است.',
              en: '**Financial capacity**: a common rule (illustrative) is that the supplier’s average annual turnover should be at least twice the annual contract value. A supplier turning over 2,400,000 is not enough for a 1,500,000-a-year contract (2,400,000 ÷ 1,500,000 = 1.6, below 2), but is acceptable for contracts up to 2,400,000 ÷ 2 = 1,200,000.',
            },
            {
              fa: '**نرخ تکرار حوادث منجر به توقف کار (LTIF)** = تعداد حوادث منجر به از دست رفتن روز کاری × 1,000,000 ÷ نفرساعت کار. پیمانکاری با 3 حادثه در 1,500,000 نفرساعت: 3 × 1,000,000 ÷ 1,500,000 = 2.0. اگر سقف مسار پترولیوم برای پیمانکاران در محل 1.5 باشد (فرضی)، این پیمانکار بدون برنامه بهبود HSE پذیرفته نمی‌شود.',
              en: '**Lost time injury frequency (LTIF)** = lost-time injuries × 1,000,000 ÷ hours worked. A contractor with 3 injuries in 1,500,000 hours: 3 × 1,000,000 ÷ 1,500,000 = 2.0. If Masar Petroleum’s limit for on-site contractors is 1.5 (illustrative), this contractor is not accepted without an HSE improvement plan.',
            },
          ],
        },
      ],
    },
    {
      id: 'avl-local-content',
      title: { fa: 'فهرست تأمین‌کنندگان تأییدشده و ساخت داخل', en: 'Approved Vendor Lists and Local Content' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**فهرست تأمین‌کنندگان تأییدشده (Approved Vendor List یا AVL)** فهرست تأمین‌کنندگانی است که برای هر گروه کالا صلاحیتشان تأیید شده است. کارشناس خرید استعلام و دعوت‌نامه مناقصه محدود را فقط برای همین تأمین‌کنندگان می‌فرستد. در مناقصه عمومی، ارزیابی صلاحیت در خود فرایند مناقصه انجام می‌شود.',
            en: 'An **approved vendor list (AVL)** lists the suppliers whose capability has been approved for each material group. Buyers send RFQs and limited-tender invitations only to these suppliers. In an open tender, prequalification is done within the tender process itself.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'وضعیت‌های تأمین‌کننده در فهرست', en: 'Supplier statuses on the list' },
          head: [
            { fa: 'وضعیت', en: 'Status' },
            { fa: 'معنا', en: 'Meaning' },
            { fa: 'استعلام و سفارش می‌گیرد؟', en: 'Receives RFQs and POs?' },
          ],
          rows: [
            [{ fa: 'ثبت‌نام‌شده', en: 'Registered' }, { fa: 'مدارک رسیده، هنوز ارزیابی نشده', en: 'Documents received, not yet assessed' }, { fa: 'خیر', en: 'No' }],
            [{ fa: 'تأییدشده', en: 'Approved' }, { fa: 'ارزیابی را برای گروه‌های کالای مشخص گذرانده', en: 'Passed prequalification for the listed material groups' }, { fa: 'بله، برای همان گروه‌ها', en: 'Yes, for those groups' }],
            [
              { fa: 'تأیید مشروط', en: 'Conditionally approved' },
              { fa: 'تأیید با برنامه اصلاحی یا محدودیت (مثلاً سقف مبلغ سفارش)', en: 'Approved with a corrective plan or limits (for example a maximum order value)' },
              { fa: 'بله، در همان محدوده', en: 'Yes, within the limits' },
            ],
            [
              { fa: 'معلق یا مسدود', en: 'Suspended or blocked' },
              { fa: 'مشکل جدی عملکرد، HSE، کیفیت یا انطباق', en: 'Serious performance, HSE, quality or compliance issue' },
              { fa: 'خیر', en: 'No' },
            ],
            [
              { fa: 'غیرفعال', en: 'Inactive' },
              { fa: 'مدت طولانی (مثلاً 24 ماه) بدون معامله', en: 'No transactions for a long time (say 24 months)' },
              { fa: 'خیر؛ فعال‌سازی دوباره نیاز به بازبینی دارد', en: 'No; reactivation requires a review' },
            ],
          ],
        },
        {
          type: 'h',
          text: { fa: 'ساخت داخل', en: 'Local content' },
        },
        {
          type: 'p',
          text: {
            fa: '**ساخت داخل (Local content)** سهمی از ارزش یک قرارداد است که در کشور میزبان خرج می‌شود: کالای ساخت داخل، خدمات شرکت‌های داخلی و نیروی کار محلی. بسیاری از کشورهای نفت‌خیز قواعدی برای حمایت از آن دارند. در ایران، **قانون حداکثر استفاده از توان تولیدی و خدماتی کشور** دستگاه‌ها و شرکت‌های مشمول را موظف می‌کند در صورت وجود توان داخلی کافی، از کالا و خدمات داخلی استفاده کنند. جزئیات و فهرست‌های این قانون تغییر می‌کنند؛ پس همیشه آخرین مقررات را بررسی کنید.',
            en: '**Local content** is the share of a contract’s value spent in the host country: locally made goods, services from local companies and local labour. Many oil-producing countries have rules to promote it. In Iran, the **Law on Maximum Use of the Country’s Production and Service Capacity** requires covered bodies and companies to use domestic goods and services where adequate local capacity exists. The details and lists under this law change, so always check the latest regulations.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'درصد ساخت داخل = ارزش داخلی ÷ کل مبلغ قرارداد × 100',
            en: 'Local content % = local value ÷ total contract value × 100',
          },
          note: {
            fa: 'قراردادی 2,000,000: کالای ساخت داخل 900,000، خدمات و نیروی کار داخلی 300,000 و اقلام وارداتی 800,000. ارزش داخلی = 1,200,000 و درصد ساخت داخل = 1,200,000 ÷ 2,000,000 × 100 = 60٪.',
            en: 'A 2,000,000 contract: locally made goods 900,000, local services and labour 300,000 and imported items 800,000. Local value = 1,200,000, and local content = 1,200,000 ÷ 2,000,000 × 100 = 60%.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'تعادل درست', en: 'Getting the balance right' },
          text: {
            fa: 'ساخت داخل نباید الزامات فنی و ایمنی را کنار بزند: شیری که برای فشار چاه طراحی شده، باید استاندارد را برآورده کند، هر جا ساخته شده باشد. **برنامه توسعه تأمین‌کننده** به سازندگان داخلی کمک می‌کند به استانداردهایی مثل API برسند. تعهد ساخت داخل در پیشنهاد هم باید هنگام تحویل با گواهی مبدأ و فاکتورها راستی‌آزمایی شود.',
            en: 'Local content must not override technical and safety requirements: a valve designed for well pressure must meet the standard wherever it is made. **Supplier development programmes** help local manufacturers reach standards such as API. Local content promised in a bid must also be verified on delivery against certificates of origin and invoices.',
          },
        },
      ],
    },
    {
      id: 'performance-risk',
      title: { fa: 'ارزیابی عملکرد، ریسک و مسدودسازی', en: 'Performance, Risk and Blocking' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'ارزیابی عملکرد باید بر **داده** تکیه کند، نه بر حس. ERP بیشتر داده‌های لازم را دارد: تاریخ GRN را با تاریخ تحویل سفارش، نتیجه بازرسی را با مقدار رسیده، و فاکتورهای مسدودشده را با کل فاکتورها مقایسه می‌کند. برای پیمانکاران خدماتی، SESهای ردشده یا اصلاح‌شده نشانه کیفیت کارند. نحوه ثبت بازرسی، GRN و SES در درس «رسید کالا (GRN) و برگه ثبت خدمات (SES)» آمده است.',
            en: 'Performance evaluation should rest on **data**, not on feelings. The ERP already holds most of what is needed: it compares the GRN date with the PO delivery date, inspection results with quantities received, and blocked invoices with all invoices. For service contractors, rejected or corrected SESs are a signal of work quality. How inspections, GRNs and SESs are recorded is covered in the lesson on the goods received note (GRN) and service entry sheet (SES).',
          },
        },
        {
          type: 'table',
          caption: { fa: 'شاخص‌های کلیدی عملکرد تأمین‌کننده', en: 'Supplier key performance indicators' },
          head: [
            { fa: 'شاخص', en: 'KPI' },
            { fa: 'فرمول', en: 'Formula' },
            { fa: 'منبع داده در ERP', en: 'ERP data source' },
          ],
          rows: [
            [
              { fa: 'تحویل به‌موقع (OTD)', en: 'On-time delivery (OTD)' },
              { fa: 'تحویل‌های به‌موقع ÷ کل تحویل‌ها × 100', en: 'On-time deliveries ÷ all deliveries × 100' },
              { fa: 'تاریخ GRN در برابر تاریخ تحویل سفارش', en: 'GRN date vs PO delivery date' },
            ],
            [
              { fa: 'پذیرش کیفی', en: 'Quality acceptance' },
              { fa: 'مقدار پذیرفته‌شده ÷ مقدار رسیده × 100', en: 'Quantity accepted ÷ quantity received × 100' },
              { fa: 'نتایج بازرسی و گزارش‌های عدم انطباق (NCR)', en: 'Inspection results and non-conformance reports (NCRs)' },
            ],
            [
              { fa: 'کامل بودن مدارک', en: 'Documentation' },
              { fa: 'تحویل‌های با گواهی کامل ÷ کل تحویل‌ها × 100', en: 'Deliveries with complete certificates ÷ all deliveries × 100' },
              { fa: 'چک‌لیست GRN', en: 'GRN checklist' },
            ],
            [
              { fa: 'HSE', en: 'HSE' },
              { fa: 'حوادث و LTIF پیمانکاران در محل', en: 'Incidents and LTIF of on-site contractors' },
              { fa: 'گزارش‌های HSE', en: 'HSE reports' },
            ],
            [
              { fa: 'دقت فاکتور', en: 'Invoice accuracy' },
              { fa: 'فاکتورهای بدون خطای تطبیق ÷ کل فاکتورها × 100', en: 'Invoices without match errors ÷ all invoices × 100' },
              { fa: 'فاکتورهای مسدودشده در حساب‌های پرداختنی', en: 'Blocked invoices in accounts payable' },
            ],
          ],
        },
        {
          type: 'table',
          caption: { fa: 'کارنامه فصلی تأمین‌کننده V-1001', en: 'Quarterly scorecard of supplier V-1001' },
          head: [
            { fa: 'شاخص', en: 'KPI' },
            { fa: 'داده خام', en: 'Raw data' },
            { fa: 'امتیاز', en: 'Score' },
            { fa: 'وزن (٪)', en: 'Weight (%)' },
            { fa: 'امتیاز وزنی', en: 'Weighted' },
          ],
          numericCols: [2, 3, 4],
          rows: [
            [{ fa: 'تحویل به‌موقع', en: 'On-time delivery' }, { fa: '34 از 40 تحویل', en: '34 of 40 deliveries' }, 85, 35, 29.75],
            [{ fa: 'پذیرش کیفی', en: 'Quality acceptance' }, { fa: '1,164 از 1,200 عدد', en: '1,164 of 1,200 units' }, 97, 35, 33.95],
            [{ fa: 'HSE', en: 'HSE' }, { fa: 'یک حادثه ثبت‌شدنی هنگام تحویل در محل', en: 'One recordable incident during a site delivery' }, 70, 20, 14],
            [{ fa: 'مدارک و فاکتور', en: 'Documents and invoices' }, { fa: 'طبق چک‌لیست', en: 'Per checklist' }, 80, 10, 8],
            [{ fa: '**جمع**', en: '**Total**' }, blank, blank, 100, 85.7],
          ],
        },
        {
          type: 'table',
          caption: { fa: 'رتبه و اقدام (مرزها فرضی‌اند)', en: 'Rating and action (illustrative bands)' },
          head: [
            { fa: 'رتبه', en: 'Rating' },
            { fa: 'امتیاز', en: 'Score' },
            { fa: 'اقدام', en: 'Action' },
          ],
          rows: [
            [{ fa: 'A', en: 'A' }, { fa: '90 و بیشتر', en: '90 and above' }, { fa: 'تأمین‌کننده ترجیحی؛ دعوت به قراردادهای بلندمدت', en: 'Preferred supplier; invited to long-term agreements' }],
            [{ fa: 'B', en: 'B' }, { fa: '75 تا کمتر از 90', en: '75 to under 90' }, { fa: 'تأییدشده؛ بازخورد درباره نقاط ضعف', en: 'Approved; feedback on weak points' }],
            [{ fa: 'C', en: 'C' }, { fa: '60 تا کمتر از 75', en: '60 to under 75' }, { fa: 'برنامه اقدام اصلاحی با مهلت مشخص', en: 'Corrective action plan with a deadline' }],
            [{ fa: 'D', en: 'D' }, { fa: 'کمتر از 60', en: 'Under 60' }, { fa: 'تعلیق سفارش‌های تازه و بازبینی صلاحیت', en: 'Suspend new orders and review the approval' }],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'V-1001 با 85.7 در رتبه B است. امتیاز کیفیت خوب است، اما 6 تحویل دیرهنگام از 40 تحویل باید در جلسه بازخورد بررسی شود؛ برای اقلام حیاتی، دیرکرد می‌تواند از کیفیت هم پرهزینه‌تر باشد.',
            en: 'V-1001 scores 85.7, a B rating. Quality is strong, but 6 late deliveries out of 40 should be discussed in the feedback meeting; for critical items, lateness can cost even more than poor quality.',
          },
        },
        {
          type: 'h',
          text: { fa: 'ریسک تأمین‌کننده', en: 'Supplier risk' },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**ریسک وابستگی**: تنها یک سازنده (مثلاً سازنده اصلی کمپرسور) قطعه حیاتی را می‌سازد؛ راه‌حل: موجودی اطمینان و قرارداد بلندمدت.',
              en: '**Dependency risk**: only one maker (for example the compressor’s original manufacturer) supplies a critical spare; response: safety stock and a long-term agreement.',
            },
            {
              fa: '**ریسک مالی**: تأمین‌کننده در بحران مالی است و پیش‌پرداخت در خطر؛ راه‌حل: ضمانت‌نامه پیش‌پرداخت و پایش صورت‌های مالی.',
              en: '**Financial risk**: the supplier is in financial distress and advances are at risk; response: an advance payment guarantee and monitoring of its financial statements.',
            },
            {
              fa: '**ریسک انطباق**: محدودیت‌های تجاری و صادراتی، فساد، یا مالکیت پنهان مرتبط با کارکنان؛ راه‌حل: غربالگری هنگام ثبت‌نام و به‌طور دوره‌ای.',
              en: '**Compliance risk**: trade and export restrictions, corruption, or hidden ownership linked to employees; response: screening at registration and periodically.',
            },
            {
              fa: '**ریسک HSE و کیفیت**: عدم انطباق‌ها یا حوادث تکراری؛ راه‌حل: اقدام اصلاحی، بازرسی بیشتر یا تعلیق.',
              en: '**HSE and quality risk**: repeated non-conformances or incidents; response: corrective action, more inspection or suspension.',
            },
            {
              fa: '**ریسک حمل و دسترسی**: مسیرهای طولانی و محدودیت واردات؛ راه‌حل: سفارش زودتر و پرورش جایگزین داخلی.',
              en: '**Logistics and access risk**: long routes and import restrictions; response: earlier ordering and developing local alternatives.',
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'انواع انسداد در ERP', en: 'Types of block in the ERP' },
          head: [
            { fa: 'انسداد', en: 'Block' },
            { fa: 'اثر', en: 'Effect' },
            { fa: 'دلیل رایج', en: 'Typical reason' },
          ],
          rows: [
            [{ fa: 'انسداد خرید', en: 'Purchasing block' }, { fa: 'استعلام و سفارش تازه صادر نمی‌شود', en: 'No new RFQs or POs' }, { fa: 'عملکرد ضعیف، گواهی منقضی', en: 'Poor performance, expired certificate' }],
            [{ fa: 'انسداد ثبت', en: 'Posting block' }, { fa: 'هیچ سندی، حتی فاکتور، ثبت نمی‌شود', en: 'No documents at all, not even invoices, can be posted' }, { fa: 'رکورد تکراری، تأمین‌کننده تحت بررسی', en: 'Duplicate record, supplier under investigation' }],
            [{ fa: 'انسداد پرداخت', en: 'Payment block' }, { fa: 'فاکتور ثبت می‌شود اما پرداخت نمی‌شود', en: 'Invoices can be posted but not paid' }, { fa: 'تحویل مورد اختلاف، NCR باز، تغییر حساب بانکی تأییدنشده', en: 'Disputed delivery, open NCR, unverified bank change' }],
            [{ fa: 'علامت حذف', en: 'Deletion flag' }, { fa: 'رکورد بایگانی می‌شود', en: 'The record is archived' }, { fa: 'بدون معامله و با مانده صفر', en: 'No activity and a zero balance' }],
          ],
        },
      ],
    },
    {
      id: 'erp-vendor',
      title: { fa: 'تأمین‌کننده در ERP و ثبت‌های مالی', en: 'The Supplier in the ERP and in Finance' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در ERP، **داده پایه** این بخش شامل رکورد تأمین‌کننده با نماهایش، گروه‌های کالای مجاز در فهرست تأییدشده، گواهی‌ها با تاریخ انقضا و الگوهای ارزیابی است. **داده تراکنشی** شامل درخواست ثبت تأمین‌کننده، گردش کار تأیید ایجاد و تغییر، کارنامه‌های ارزیابی و ثبت انسدادهاست. نقش‌ها: تدارکات درخواست می‌دهد و ارزیابی می‌کند، تیم داده پایه رکورد را می‌سازد یا تغییر می‌دهد، مالی حساب بانکی و داده حسابداری را تأیید می‌کند و واحدهای کیفیت و HSE در ارزیابی صلاحیت نظر می‌دهند.',
            en: 'In the ERP, the **master data** here is the vendor record with its views, the approved material groups on the AVL, certificates with expiry dates and evaluation templates. The **transaction data** is the vendor registration request, the approval workflow for creations and changes, evaluation scorecards and block records. Roles: procurement requests and evaluates, the master data team creates or changes records, Finance verifies bank and accounting data, and the quality and HSE units contribute to prequalification.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'پیوند مهم با مالی، **حساب کنترل (Reconciliation account)** است. هر فاکتوری که به حساب یک تأمین‌کننده ثبت می‌شود، خودکار حساب کنترل حساب‌های پرداختنی در دفتر کل را هم به‌روز می‌کند؛ پس جمع مانده‌های همه تأمین‌کنندگان همیشه با مانده حساب کل برابر است. در کدینگ سه‌سطحی رایج در ایران، «حساب‌های پرداختنی» **حساب کل**، «تأمین‌کنندگان داخلی» **حساب معین** و هر تأمین‌کننده یک **حساب تفصیلی** است. **شرایط پرداخت** تاریخ سررسید را می‌سازد و **انسداد پرداخت** فاکتور را از اجرای پرداخت بیرون نگه می‌دارد.',
            en: 'The key link to Finance is the **reconciliation (control) account**. Every invoice posted to a supplier’s account automatically updates the accounts payable control account in the general ledger, so the total of all supplier balances always equals the ledger balance. In the three-level coding common in Iran, “Accounts payable” is the **general account**, “Domestic suppliers” the **subsidiary account** and each supplier a **detail account**. **Payment terms** produce the due date, and a **payment block** keeps an invoice out of the payment run.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'پیش‌پرداخت برای یک قلم بلندمدت', en: 'An advance for a long-lead item' },
          text: {
            fa: 'مسار پترولیوم سرچاهی و تاج چاه AR-09 را به مبلغ 200,000 از تأمین‌کننده V-1015 سفارش می‌دهد (پس از مناقصه محدود). شرایط: 30٪ پیش‌پرداخت در برابر ضمانت‌نامه پیش‌پرداخت، یعنی 60,000، و مانده 30 روز پس از تحویل. GRN کالا با تخصیص AFE-AR09 ثبت می‌شود. ERP این ثبت‌ها را می‌سازد:',
            en: 'Masar Petroleum orders the wellhead and Christmas tree for AR-09 from supplier V-1015 for 200,000 (after a limited tender). Terms: a 30% advance against an advance payment guarantee, that is 60,000, and the balance 30 days after delivery. The GRN is posted against AFE-AR09. The ERP creates these entries:',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های خودکار برای تأمین‌کننده V-1015', en: 'Automatic entries for supplier V-1015' },
          entries: [
            {
              date: day(1),
              lines: [
                { account: ac.advances, debit: 60000 },
                { account: ac.bank, credit: 60000 },
              ],
              memo: { fa: 'پیش‌پرداخت 30٪ در برابر ضمانت‌نامه.', en: 'A 30% advance against the guarantee.' },
            },
            {
              date: day(90),
              lines: [
                { account: ac.auc09, debit: 200000 },
                { account: ac.grir, credit: 200000 },
              ],
              memo: { fa: 'GRN سرچاهی و تاج چاه به AFE-AR09.', en: 'GRN for the wellhead and tree against AFE-AR09.' },
            },
            {
              date: day(92),
              lines: [
                { account: ac.grir, debit: 200000 },
                { account: ac.ap, credit: 200000 },
              ],
              memo: { fa: 'فاکتور کامل پس از تطبیق سه‌طرفه.', en: 'Full invoice after the three-way match.' },
            },
            {
              date: day(92),
              lines: [
                { account: ac.ap, debit: 60000 },
                { account: ac.advances, credit: 60000 },
              ],
              memo: { fa: 'تسویه پیش‌پرداخت با فاکتور.', en: 'Advance cleared against the invoice.' },
            },
            {
              date: day(120),
              lines: [
                { account: ac.ap, debit: 140000 },
                { account: ac.bank, credit: 140000 },
              ],
              memo: { fa: 'پرداخت مانده در سررسید.', en: 'Balance paid on the due date.' },
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'پیش‌پرداخت هزینه نیست؛ **دارایی** است، یعنی طلبی از تأمین‌کننده که تا رسیدن کالا در حساب «پیش‌پرداخت به تأمین‌کنندگان» می‌ماند. در پایان، مانده حساب V-1015 صفر است: 200,000 − 60,000 − 140,000 = 0. اگر کالا نمی‌رسید، مسار پترولیوم ضمانت‌نامه پیش‌پرداخت را برای پس گرفتن 60,000 به بانک ارائه می‌کرد.',
            en: 'An advance is not an expense; it is an **asset**, a claim on the supplier that sits in “Advances to suppliers” until the goods arrive. At the end, V-1015’s balance is zero: 200,000 − 60,000 − 140,000 = 0. Had the goods not arrived, Masar Petroleum would have called the advance payment guarantee at the bank to recover the 60,000.',
          },
        },
        {
          type: 'h',
          text: { fa: 'کیفیت داده پایه', en: 'Master data quality' },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**جلوگیری از تکرار**: هنگام ایجاد، سیستم شناسه ملی، کد اقتصادی و شماره شبا را با رکوردهای موجود مقایسه کند.',
              en: '**Prevent duplicates**: at creation, the system compares the national ID, economic code and IBAN with existing records.',
            },
            {
              fa: '**فیلدهای اجباری و قرارداد نام‌گذاری**: نام قانونی دقیقاً مطابق مدارک ثبت، بدون نام‌های خودمانی.',
              en: '**Mandatory fields and naming rules**: the legal name exactly as registered, no nicknames.',
            },
            {
              fa: '**هشدار انقضای گواهی‌ها** پیش از آنکه تأمین‌کننده با گواهی منقضی سفارش بگیرد.',
              en: '**Certificate expiry alerts** before a supplier with an expired certificate gets an order.',
            },
            {
              fa: '**پاک‌سازی دوره‌ای** تأمین‌کنندگان غیرفعال و استفاده از رکورد «تأمین‌کننده یک‌باره» برای پرداخت‌های موردی.',
              en: '**Periodic clean-up** of inactive suppliers, and a “one-time vendor” record for occasional payees.',
            },
            {
              fa: '**سابقه تغییرات**: سیستم ثبت کند چه کسی، چه زمانی، چه فیلدی را تغییر داده است.',
              en: '**Change log**: the system records who changed which field and when.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' },
          text: {
            fa: '(1) ساختن رکورد تازه به‌جای جست‌وجو؛ نتیجه‌اش رکورد تکراری و پرداخت دوباره است. (2) دسترسی کارشناس خرید به تغییر اطلاعات بانکی. (3) نادیده گرفتن انقضای گواهی‌ها. (4) ارزیابی عملکرد بر اساس حس به‌جای داده ERP. (5) فهرست تأییدشده‌ای که هیچ‌وقت به‌روز نمی‌شود و به باشگاهی بسته تبدیل می‌شود و رقابت را از بین می‌برد. (6) مسدود کردن تأمین‌کننده بدون هماهنگی با حساب‌های پرداختنی درباره فاکتورهای باز.',
            en: '(1) Creating a new record instead of searching, which leads to duplicates and double payments. (2) Letting buyers change bank details. (3) Ignoring certificate expiry. (4) Rating performance on gut feeling instead of ERP data. (5) An approved list that is never refreshed and turns into a closed club that kills competition. (6) Blocking a supplier without telling accounts payable about its open invoices.',
          },
        },
      ],
    },
    {
      id: 'exercises',
      title: { fa: 'تمرین‌ها', en: 'Exercises' },
      blocks: [
        {
          type: 'exercise',
          title: { fa: 'ارزیابی صلاحیت پیمانکار آزمایش چاه', en: 'Prequalifying a well-testing contractor' },
          difficulty: 'easy',
          problem: {
            fa: 'برای خدمات آزمایش چاه که در محل انجام می‌شود، مسار پترولیوم وزن HSE را بیشتر کرده است: فنی 30٪، مالی 15٪، HSE 35٪ و کیفیت 20٪. قاعده قبولی: امتیاز کل دست‌کم 70 و هیچ معیاری کمتر از 60. کدام پیمانکار قبول می‌شود؟',
            en: 'For well-testing services performed on site, Masar Petroleum has raised the HSE weight: technical 30%, financial 15%, HSE 35% and quality 20%. Pass rule: total at least 70 and no criterion below 60. Which contractor passes?',
          },
          given: {
            head: [
              { fa: 'معیار', en: 'Criterion' },
              { fa: 'وزن (٪)', en: 'Weight (%)' },
              { fa: 'پیمانکار X', en: 'Contractor X' },
              { fa: 'پیمانکار Y', en: 'Contractor Y' },
            ],
            numericCols: [1, 2, 3],
            rows: [
              [{ fa: 'فنی', en: 'Technical' }, 30, 75, 92],
              [{ fa: 'مالی', en: 'Financial' }, 15, 70, 58],
              [{ fa: 'HSE', en: 'HSE' }, 35, 82, 88],
              [{ fa: 'کیفیت', en: 'Quality' }, 20, 68, 85],
            ],
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'معیار', en: 'Criterion' },
                { fa: 'وزنی X', en: 'X weighted' },
                { fa: 'وزنی Y', en: 'Y weighted' },
              ],
              numericCols: [1, 2],
              rows: [
                [{ fa: 'فنی', en: 'Technical' }, 22.5, 27.6],
                [{ fa: 'مالی', en: 'Financial' }, 10.5, 8.7],
                [{ fa: 'HSE', en: 'HSE' }, 28.7, 30.8],
                [{ fa: 'کیفیت', en: 'Quality' }, 13.6, 17],
                [{ fa: '**جمع**', en: '**Total**' }, 75.3, 84.1],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'Y امتیاز کل بالاتری دارد، اما امتیاز مالی 58 آن کمتر از حداقل 60 است؛ پس رد می‌شود یا در بهترین حالت، پس از بررسی مالی دقیق‌تر، تأیید مشروط با سقف قرارداد می‌گیرد. X با 75.3 و همه معیارها بالای 60 قبول است.',
                en: 'Y has the higher total, but its financial score of 58 is below the minimum of 60, so it fails or, at best, after a closer financial review, gets conditional approval with a contract-value cap. X, at 75.3 with every criterion above 60, passes.',
              },
            },
          ],
          answer: {
            fa: 'X با 75.3 قبول؛ Y با 84.1 به دلیل امتیاز مالی 58 رد می‌شود.',
            en: 'X passes with 75.3; Y, at 84.1, fails on its financial score of 58.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'کارنامه فصلی تأمین‌کننده مواد حفاری', en: 'Quarterly scorecard for a drilling-chemicals supplier' },
          difficulty: 'medium',
          problem: {
            fa: 'داده‌های فصل گذشته تأمین‌کننده V-1020 از ERP استخراج شده است. با وزن‌های 35٪ تحویل، 35٪ کیفیت، 20٪ HSE و 10٪ مدارک و فاکتور، امتیاز کل، رتبه و اقدام را تعیین کنید.',
            en: 'Last quarter’s data for supplier V-1020 has been pulled from the ERP. Using weights of 35% delivery, 35% quality, 20% HSE and 10% documents and invoices, find the total score, the rating and the action.',
          },
          given: {
            head: [
              { fa: 'داده', en: 'Data' },
              { fa: 'مقدار', en: 'Value' },
            ],
            rows: [
              [{ fa: 'تحویل‌ها', en: 'Deliveries' }, { fa: '25 تحویل، 14 به‌موقع', en: '25 deliveries, 14 on time' }],
              [{ fa: 'کیفیت', en: 'Quality' }, { fa: '500 تن رسیده، 450 تن پذیرفته', en: '500 tonnes received, 450 tonnes accepted' }],
              [{ fa: 'امتیاز HSE', en: 'HSE score' }, { fa: '90', en: '90' }],
              [{ fa: 'امتیاز مدارک و فاکتور', en: 'Documents and invoices score' }, { fa: '50', en: '50' }],
            ],
          },
          solution: [
            {
              type: 'steps',
              items: [
                { title: { fa: 'تحویل به‌موقع', en: 'On-time delivery' }, text: { fa: '14 ÷ 25 × 100 = 56؛ وزنی: 56 × 35٪ = 19.6', en: '14 ÷ 25 × 100 = 56; weighted: 56 × 35% = 19.6' } },
                { title: { fa: 'پذیرش کیفی', en: 'Quality acceptance' }, text: { fa: '450 ÷ 500 × 100 = 90؛ وزنی: 90 × 35٪ = 31.5', en: '450 ÷ 500 × 100 = 90; weighted: 90 × 35% = 31.5' } },
                { title: { fa: 'HSE', en: 'HSE' }, text: { fa: '90 × 20٪ = 18', en: '90 × 20% = 18' } },
                { title: { fa: 'مدارک و فاکتور', en: 'Documents and invoices' }, text: { fa: '50 × 10٪ = 5', en: '50 × 10% = 5' } },
                {
                  title: { fa: 'جمع و رتبه', en: 'Total and rating' },
                  text: {
                    fa: '19.6 + 31.5 + 18 + 5 = 74.1، یعنی رتبه C (60 تا کمتر از 75).',
                    en: '19.6 + 31.5 + 18 + 5 = 74.1, a C rating (60 to under 75).',
                  },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              text: {
                fa: 'اقدام: برنامه اقدام اصلاحی با مهلت مشخص، با تمرکز روی تحویل (11 تحویل دیرهنگام) و مدارک. چون باریت و مواد حفاری برای دکل حیاتی‌اند، تا بهبود عملکرد، موجودی اطمینان انبار میدان را هم بازبینی کنید.',
                en: 'Action: a corrective action plan with a deadline, focused on delivery (11 late deliveries) and documents. Because barite and drilling chemicals are critical for the rig, also review the Field Warehouse safety stock until performance improves.',
              },
            },
          ],
          answer: {
            fa: 'امتیاز کل 74.1، رتبه C: برنامه اقدام اصلاحی.',
            en: 'Total 74.1, rating C: corrective action plan.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'پاک‌سازی داده پایه', en: 'Cleaning up the vendor master' },
          difficulty: 'medium',
          problem: {
            fa: 'گزارش بررسی داده پایه تأمین‌کنندگان این موارد را نشان می‌دهد. برای هر کدام، مشکل و اقدام درست را بنویسید.',
            en: 'A vendor master review report shows the cases below. For each one, state the problem and the right action.',
          },
          given: {
            head: [
              { fa: 'کد', en: 'Code' },
              { fa: 'یافته', en: 'Finding' },
            ],
            rows: [
              [{ fa: 'V-1007 و V-1093', en: 'V-1007 and V-1093' }, { fa: 'نام‌ها کمی متفاوت، اما شناسه ملی و شبا یکسان', en: 'Slightly different names, but the same national ID and IBAN' }],
              [{ fa: 'V-1040', en: 'V-1040' }, { fa: 'شماره شبا دیروز توسط یک کاربر خرید تغییر کرده؛ تماس تأییدی ثبت نشده', en: 'IBAN changed yesterday by a purchasing user; no call-back recorded' }],
              [{ fa: 'V-1055', en: 'V-1055' }, { fa: 'تأییدشده برای قطعات حیاتی، اما گواهی ISO 9001 دو ماه پیش منقضی شده', en: 'Approved for critical spares, but its ISO 9001 certificate expired two months ago' }],
              [{ fa: 'V-1068', en: 'V-1068' }, { fa: '30 ماه بدون معامله، مانده صفر', en: 'No transactions for 30 months, zero balance' }],
            ],
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'کد', en: 'Code' },
                { fa: 'مشکل', en: 'Problem' },
                { fa: 'اقدام', en: 'Action' },
              ],
              rows: [
                [
                  { fa: 'V-1007 و V-1093', en: 'V-1007 and V-1093' },
                  { fa: 'رکورد تکراری؛ خطر پرداخت دوباره', en: 'Duplicate record; risk of double payment' },
                  { fa: 'انسداد ثبت روی V-1093، انتقال اقلام باز به V-1007، بررسی پرداخت‌های دوباره و علامت حذف', en: 'Posting block on V-1093, move open items to V-1007, check for double payments, set the deletion flag' },
                ],
                [
                  { fa: 'V-1040', en: 'V-1040' },
                  { fa: 'تغییر بانکی تأییدنشده و نقض تفکیک وظایف', en: 'Unverified bank change and a breach of segregation of duties' },
                  { fa: 'انسداد پرداخت فوری، تماس تأییدی با شماره ثبت‌شده قبلی، گرفتن دسترسی تغییر بانکی از نقش خرید', en: 'Immediate payment block, call back on the number already on file, remove bank-change access from the purchasing role' },
                ],
                [
                  { fa: 'V-1055', en: 'V-1055' },
                  { fa: 'گواهی منقضی برای گروه حیاتی', en: 'Expired certificate for a critical group' },
                  { fa: 'درخواست گواهی تمدیدشده با مهلت؛ تا آن زمان تأیید مشروط یا انسداد خرید برای قطعات حیاتی', en: 'Request the renewed certificate with a deadline; meanwhile conditional approval or a purchasing block for critical spares' },
                ],
                [
                  { fa: 'V-1068', en: 'V-1068' },
                  { fa: 'رکورد غیرفعال', en: 'Inactive record' },
                  { fa: 'تغییر وضعیت به غیرفعال و بایگانی؛ فعال‌سازی دوباره فقط پس از بازبینی', en: 'Set to inactive and archive; reactivate only after a review' },
                ],
              ],
            },
          ],
          answer: {
            fa: 'تکراری: ادغام و انسداد ثبت؛ تغییر بانکی: انسداد پرداخت و تماس تأییدی؛ گواهی منقضی: تمدید یا انسداد خرید؛ غیرفعال: بایگانی.',
            en: 'Duplicate: merge and posting block; bank change: payment block and call-back; expired certificate: renewal or purchasing block; inactive: archive.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'پیش‌پرداخت، کالای ردشده و مانده تأمین‌کننده', en: 'Advance, rejected goods and the supplier balance' },
          difficulty: 'hard',
          problem: {
            fa: 'مسار پترولیوم یک مجموعه قطعات یدکی حیاتی کمپرسور را به مبلغ 150,000 برای انبار مرکزی از V-1030 سفارش می‌دهد؛ 20٪ پیش‌پرداخت. روز 1: پیش‌پرداخت. روز 40: محموله می‌رسد، اما بازرسی اقلامی به ارزش 15,000 را رد و مرجوع می‌کند؛ فقط برای اقلام پذیرفته‌شده GRN ثبت می‌شود. روز 45: فاکتور اقلام پذیرفته‌شده ثبت و پیش‌پرداخت تسویه می‌شود. روز 75: مانده آن فاکتور پرداخت می‌شود. روز 80: اقلام جایگزین می‌رسند و پذیرفته می‌شوند. روز 82: فاکتور آن‌ها ثبت می‌شود. ثبت‌ها را بنویسید و مانده حساب V-1030 را در روز 82 پیدا کنید.',
            en: 'Masar Petroleum orders a critical compressor spares kit for 150,000 from V-1030 for the Central Warehouse, with a 20% advance. Day 1: advance paid. Day 40: the shipment arrives, but inspection rejects and returns items worth 15,000; a GRN is posted only for the accepted items. Day 45: the invoice for the accepted items is posted and the advance cleared. Day 75: the balance of that invoice is paid. Day 80: replacement items arrive and are accepted. Day 82: their invoice is posted. Write the entries and find V-1030’s balance on Day 82.',
          },
          hint: {
            fa: 'پیش‌پرداخت = 150,000 × 20٪. برای اقلام ردشده GRN ثبت نمی‌شود، پس GR/IR فقط با ارزش پذیرفته‌شده بستانکار می‌شود.',
            en: 'Advance = 150,000 × 20%. No GRN is posted for rejected items, so GR/IR is credited only with the accepted value.',
          },
          solution: [
            {
              type: 'journal',
              entries: [
                {
                  date: day(1),
                  lines: [
                    { account: ac.advances, debit: 30000 },
                    { account: ac.bank, credit: 30000 },
                  ],
                  memo: { fa: 'پیش‌پرداخت: 150,000 × 20٪ = 30,000.', en: 'Advance: 150,000 × 20% = 30,000.' },
                },
                {
                  date: day(40),
                  lines: [
                    { account: ac.inventory, debit: 135000 },
                    { account: ac.grir, credit: 135000 },
                  ],
                  memo: { fa: 'GRN اقلام پذیرفته‌شده: 150,000 − 15,000 = 135,000.', en: 'GRN for the accepted items: 150,000 − 15,000 = 135,000.' },
                },
                {
                  date: day(45),
                  lines: [
                    { account: ac.grir, debit: 135000 },
                    { account: ac.ap, credit: 135000 },
                  ],
                  memo: { fa: 'فاکتور اقلام پذیرفته‌شده.', en: 'Invoice for the accepted items.' },
                },
                {
                  date: day(45),
                  lines: [
                    { account: ac.ap, debit: 30000 },
                    { account: ac.advances, credit: 30000 },
                  ],
                  memo: { fa: 'تسویه پیش‌پرداخت.', en: 'Advance cleared.' },
                },
                {
                  date: day(75),
                  lines: [
                    { account: ac.ap, debit: 105000 },
                    { account: ac.bank, credit: 105000 },
                  ],
                  memo: { fa: 'پرداخت مانده: 135,000 − 30,000 = 105,000.', en: 'Balance paid: 135,000 − 30,000 = 105,000.' },
                },
                {
                  date: day(80),
                  lines: [
                    { account: ac.inventory, debit: 15000 },
                    { account: ac.grir, credit: 15000 },
                  ],
                  memo: { fa: 'GRN اقلام جایگزین.', en: 'GRN for the replacement items.' },
                },
                {
                  date: day(82),
                  lines: [
                    { account: ac.grir, debit: 15000 },
                    { account: ac.ap, credit: 15000 },
                  ],
                  memo: { fa: 'فاکتور اقلام جایگزین.', en: 'Invoice for the replacement items.' },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'حساب V-1030 در حساب‌های پرداختنی', en: 'V-1030’s accounts payable account' },
              head: [
                { fa: 'روز', en: 'Day' },
                { fa: 'بدهکار', en: 'Debit' },
                { fa: 'بستانکار', en: 'Credit' },
                { fa: 'مانده بستانکار', en: 'Credit balance' },
              ],
              numericCols: [1, 2, 3],
              rows: [
                [day(45), 0, 135000, 135000],
                [day(45), 30000, 0, 105000],
                [day(75), 105000, 0, 0],
                [day(82), 0, 15000, 15000],
              ],
            },
          ],
          answer: {
            fa: 'در روز 82، بدهی به V-1030 برابر 15,000 است (فاکتور اقلام جایگزین)؛ GR/IR و پیش‌پرداخت صفرند و موجودی انبار 150,000 افزایش یافته است.',
            en: 'On Day 82, Masar Petroleum owes V-1030 15,000 (the replacement-items invoice); GR/IR and advances are zero, and inventory has risen by 150,000.',
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
              fa: 'مدیریت تأمین‌کننده کل چرخه است: ثبت‌نام، ارزیابی صلاحیت، درج در فهرست، همکاری، ارزیابی عملکرد، بهبود و خروج.',
              en: 'Supplier management covers the whole cycle: registration, prequalification, listing, use, performance evaluation, development and exit.',
            },
            {
              fa: 'داده پایه تأمین‌کننده نماهای عمومی، خرید، حسابداری و انطباق دارد؛ اطلاعات بانکی را فقط مالی و با کنترل دونفره و تماس تأییدی تغییر می‌دهد.',
              en: 'The vendor master has general, purchasing, accounting and compliance views; only Finance changes bank details, with dual control and a call-back.',
            },
            {
              fa: 'ارزیابی صلاحیت با امتیاز وزنی فنی، مالی، HSE و کیفیت انجام می‌شود و حداقل هر معیار جلوی پنهان شدن ضعف‌ها را می‌گیرد.',
              en: 'Prequalification uses a weighted technical, financial, HSE and quality score, with a minimum per criterion so weaknesses cannot hide.',
            },
            {
              fa: 'فهرست تأییدشده بر اساس گروه کالاست؛ ساخت داخل با درصد ارزش داخلی سنجیده می‌شود و نباید الزامات فنی و ایمنی را کنار بزند.',
              en: 'The AVL is organised by material group; local content is measured as a percentage of local value and must not override technical and safety requirements.',
            },
            {
              fa: 'شاخص‌های عملکرد از داده ERP به رتبه و اقدام تبدیل می‌شوند؛ انسداد خرید، ثبت و پرداخت ابزار مهار ریسک‌اند و حساب کنترل، هر فاکتور تأمین‌کننده را خودکار به دفتر کل می‌برد.',
              en: 'KPIs from ERP data become a rating and an action; purchasing, posting and payment blocks control risk, and the control account carries every supplier invoice into the general ledger automatically.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'داده پایه تأمین‌کننده', en: 'Vendor master' },
              def: { fa: 'رکورد واحد هر تأمین‌کننده در ERP با نماهای عمومی، خرید، حسابداری و انطباق.', en: 'The single ERP record for each supplier, with general, purchasing, accounting and compliance views.' },
            },
            {
              term: { fa: 'ارزیابی صلاحیت (پیش‌صلاحیت)', en: 'Prequalification' },
              def: { fa: 'سنجش توان فنی، مالی، HSE و کیفی پیش از اجازه پیشنهاد دادن.', en: 'Assessing technical, financial, HSE and quality capability before a supplier may bid.' },
            },
            {
              term: { fa: 'فهرست تأمین‌کنندگان تأییدشده (AVL)', en: 'Approved vendor list (AVL)' },
              def: { fa: 'فهرست تأمین‌کنندگان دارای صلاحیت برای هر گروه کالا.', en: 'The list of suppliers approved for each material group.' },
            },
            {
              term: { fa: 'ساخت داخل', en: 'Local content' },
              def: { fa: 'سهمی از ارزش قرارداد که صرف کالا، خدمات و نیروی کار داخلی می‌شود.', en: 'The share of contract value spent on local goods, services and labour.' },
            },
            {
              term: { fa: 'تحویل به‌موقع (OTD)', en: 'On-time delivery (OTD)' },
              def: { fa: 'درصد تحویل‌هایی که تا تاریخ تحویل سفارش انجام شده‌اند.', en: 'The percentage of deliveries made by the PO delivery date.' },
            },
            {
              term: { fa: 'نرخ تکرار حوادث منجر به توقف کار (LTIF)', en: 'Lost time injury frequency (LTIF)' },
              def: { fa: 'تعداد حوادث منجر به از دست رفتن روز کاری به ازای هر یک میلیون نفرساعت.', en: 'Lost-time injuries per one million hours worked.' },
            },
            {
              term: { fa: 'حساب کنترل (Reconciliation account)', en: 'Reconciliation (control) account' },
              def: { fa: 'حساب کل حساب‌های پرداختنی که با هر ثبت روی حساب تأمین‌کننده خودکار به‌روز می‌شود.', en: 'The accounts payable ledger account updated automatically by every posting to a supplier account.' },
            },
            {
              term: { fa: 'انسداد پرداخت', en: 'Payment block' },
              def: { fa: 'علامتی که اجازه ثبت فاکتور را می‌دهد اما آن را از اجرای پرداخت بیرون نگه می‌دارد.', en: 'A flag that allows invoices to be posted but keeps them out of the payment run.' },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: {
        fa: 'کدام بخش از داده پایه تأمین‌کننده را باید مالی نگهداری کند، نه کارشناس خرید؟',
        en: 'Which part of the vendor master should Finance maintain, not the buyer?',
      },
      options: [
        { fa: 'گروه‌های کالای مجاز تأمین‌کننده', en: 'The supplier’s approved material groups' },
        { fa: 'حساب بانکی (شبا) و حساب کنترل', en: 'The bank account (IBAN) and control account' },
        { fa: 'ارز سفارش و شرایط تحویل', en: 'Order currency and delivery terms' },
        { fa: 'نام شخص تماس فروش', en: 'The sales contact’s name' },
      ],
      answer: 1,
      explain: {
        fa: 'اطلاعات بانکی و حساب کنترل مستقیماً پرداخت و دفتر کل را تعیین می‌کنند، پس با تفکیک وظایف در اختیار مالی‌اند. اگر کارشناس خرید هم تأمین‌کننده را انتخاب کند و هم حساب بانکی را تغییر دهد، راه کلاهبرداری باز است. گروه کالا و شرایط تحویل درست در نمای خرید و با تدارکات است.',
        en: 'Bank details and the control account directly decide payments and the ledger, so segregation of duties puts them with Finance. If a buyer could both pick suppliers and change bank details, the door to fraud would be open. Material groups and delivery terms rightly sit in the purchasing view with procurement.',
      },
    },
    {
      q: {
        fa: 'وزن‌ها: فنی 40٪، مالی 20٪، HSE 20٪ و کیفیت 20٪. امتیازها: 80، 70، 60 و 90. امتیاز وزنی کل چقدر است؟',
        en: 'Weights: technical 40%, financial 20%, HSE 20%, quality 20%. Scores: 80, 70, 60 and 90. What is the total weighted score?',
      },
      options: [
        { fa: '75', en: '75' },
        { fa: '80', en: '80' },
        { fa: '70', en: '70' },
        { fa: '76', en: '76' },
      ],
      answer: 3,
      explain: {
        fa: '80 × 40٪ + 70 × 20٪ + 60 × 20٪ + 90 × 20٪ = 32 + 14 + 12 + 18 = 76. گزینه 75 میانگین ساده بدون وزن است: (80 + 70 + 60 + 90) ÷ 4 = 75؛ اما وزن بیشتر معیار فنی، نتیجه را بالا می‌برد.',
        en: '80 × 40% + 70 × 20% + 60 × 20% + 90 × 20% = 32 + 14 + 12 + 18 = 76. The 75 option is the simple unweighted average, (80 + 70 + 60 + 90) ÷ 4 = 75; the heavier technical weight pulls the result up.',
      },
    },
    {
      q: {
        fa: 'تأمین‌کننده‌ای امتیاز کل 82 دارد، اما امتیاز HSE آن 50 است. قاعده: کل دست‌کم 70 و هیچ معیاری کمتر از 60. نتیجه چیست؟',
        en: 'A supplier totals 82 but scores 50 on HSE. Rule: total at least 70 and no criterion below 60. What is the outcome?',
      },
      options: [
        { fa: 'رد می‌شود، چون HSE کمتر از حداقل 60 است', en: 'It fails, because HSE is below the minimum of 60' },
        { fa: 'قبول می‌شود، چون کل از 70 بیشتر است', en: 'It passes, because the total is above 70' },
        { fa: 'قبول می‌شود، به شرط پایین‌ترین قیمت', en: 'It passes if it has the lowest price' },
        { fa: 'قبول می‌شود و رتبه A می‌گیرد', en: 'It passes with an A rating' },
      ],
      answer: 0,
      explain: {
        fa: 'معیار حذفی جدا از امتیاز کل اعمال می‌شود؛ HSE برابر 50 کمتر از 60 است، پس تأمین‌کننده رد می‌شود، هرچند کل 82 باشد. قیمت در ارزیابی صلاحیت نقشی ندارد و رتبه A مربوط به ارزیابی عملکرد است.',
        en: 'The knock-out rule applies separately from the total; HSE at 50 is below 60, so the supplier fails even with a total of 82. Price plays no part in prequalification, and an A rating belongs to performance evaluation.',
      },
    },
    {
      q: {
        fa: 'پیمانکاری در 800,000 نفرساعت 2 حادثه منجر به از دست رفتن روز کاری داشته است. LTIF چقدر است؟',
        en: 'A contractor had 2 lost-time injuries in 800,000 hours worked. What is its LTIF?',
      },
      options: [
        { fa: '0.4', en: '0.4' },
        { fa: '1.6', en: '1.6' },
        { fa: '2.5', en: '2.5' },
        { fa: '25', en: '25' },
      ],
      answer: 2,
      explain: {
        fa: 'LTIF = 2 × 1,000,000 ÷ 800,000 = 2.5 حادثه در هر میلیون نفرساعت. گزینه 0.4 نسبت را وارونه کرده (800,000 ÷ 2,000,000) و 25 ضریب را اشتباه 10,000,000 گرفته است.',
        en: 'LTIF = 2 × 1,000,000 ÷ 800,000 = 2.5 injuries per million hours. The 0.4 option inverts the ratio (800,000 ÷ 2,000,000), and 25 uses a wrong factor of 10,000,000.',
      },
    },
    {
      q: {
        fa: 'قراردادی 5,000,000 شامل 1,500,000 کالای ساخت داخل و 1,000,000 خدمات داخلی است و باقی وارداتی است. درصد ساخت داخل چقدر است؟',
        en: 'A 5,000,000 contract includes 1,500,000 of locally made goods and 1,000,000 of local services; the rest is imported. What is the local content?',
      },
      options: [
        { fa: '30٪', en: '30%' },
        { fa: '50٪', en: '50%' },
        { fa: '20٪', en: '20%' },
        { fa: '70٪', en: '70%' },
      ],
      answer: 1,
      explain: {
        fa: 'ارزش داخلی = 1,500,000 + 1,000,000 = 2,500,000 و 2,500,000 ÷ 5,000,000 = 50٪. گزینه 30٪ فقط کالا را شمرده و خدمات و نیروی کار داخلی را که بخشی از ساخت داخل‌اند جا انداخته است.',
        en: 'Local value = 1,500,000 + 1,000,000 = 2,500,000, and 2,500,000 ÷ 5,000,000 = 50%. The 30% option counts only goods and leaves out local services and labour, which are part of local content.',
      },
    },
    {
      q: {
        fa: 'تأمین‌کننده‌ای در یک فصل 48 تحویل داشته که 6 تای آن دیرهنگام بوده است. نرخ تحویل به‌موقع چقدر است؟',
        en: 'A supplier made 48 deliveries in a quarter, 6 of them late. What is its on-time delivery rate?',
      },
      options: [
        { fa: '87.5٪', en: '87.5%' },
        { fa: '12.5٪', en: '12.5%' },
        { fa: '6٪', en: '6%' },
        { fa: '94٪', en: '94%' },
      ],
      answer: 0,
      explain: {
        fa: 'تحویل به‌موقع = 48 − 6 = 42 و 42 ÷ 48 × 100 = 87.5٪. گزینه 12.5٪ نرخ دیرکرد است (6 ÷ 48) و 94٪ با کم کردن 6 از 100 به دست آمده که تعداد را با درصد اشتباه گرفته است.',
        en: 'On-time deliveries = 48 − 6 = 42, and 42 ÷ 48 × 100 = 87.5%. The 12.5% option is the late rate (6 ÷ 48), and 94% comes from subtracting 6 from 100, confusing a count with a percentage.',
      },
    },
    {
      q: {
        fa: 'ایمیلی با سربرگ یک تأمین‌کننده اعلام می‌کند حساب بانکی‌اش عوض شده است. کار درست چیست؟',
        en: 'An email on a supplier’s letterhead says its bank account has changed. What is the right action?',
      },
      options: [
        { fa: 'حساب تازه را فوراً وارد کنید تا پرداخت بعدی دیر نشود', en: 'Enter the new account at once so the next payment is not late' },
        { fa: 'با شماره تلفنی که در همان ایمیل آمده تماس بگیرید', en: 'Call the phone number given in the same email' },
        { fa: 'کارشناس خرید تغییر را وارد کند، چون تأمین‌کننده را می‌شناسد', en: 'Let the buyer enter the change, since he knows the supplier' },
        { fa: 'انسداد پرداخت، تماس تأییدی با شماره ثبت‌شده قبلی و تأیید دونفره در مالی', en: 'Payment block, a call-back on the number already on file, and dual approval in Finance' },
      ],
      answer: 3,
      explain: {
        fa: 'کلاهبردار می‌تواند شماره تلفن خودش را در ایمیل بگذارد؛ پس تماس تأییدی باید با شماره‌ای باشد که از قبل در سیستم ثبت است. تا تأیید تغییر، انسداد پرداخت مانع واریز به حساب اشتباه می‌شود. کارشناس خرید هم نباید اطلاعات بانکی را تغییر دهد.',
        en: 'A fraudster can put their own phone number in the email, so the call-back must use the number already held in the system. Until the change is verified, a payment block prevents money going to the wrong account. Buyers must not change bank details either.',
      },
    },
    {
      q: {
        fa: 'به خاطر یک گزارش عدم انطباق باز، می‌خواهید فاکتورهای یک تأمین‌کننده ثبت شوند اما پرداخت نشوند. کدام انسداد مناسب است؟',
        en: 'Because of an open non-conformance report, you want a supplier’s invoices to be posted but not paid. Which block fits?',
      },
      options: [
        { fa: 'انسداد خرید', en: 'Purchasing block' },
        { fa: 'انسداد ثبت', en: 'Posting block' },
        { fa: 'انسداد پرداخت', en: 'Payment block' },
        { fa: 'علامت حذف', en: 'Deletion flag' },
      ],
      answer: 2,
      explain: {
        fa: 'انسداد پرداخت اجازه ثبت فاکتور را می‌دهد، پس بدهی در دفاتر درست دیده می‌شود، اما فاکتور را از اجرای پرداخت بیرون نگه می‌دارد. انسداد ثبت جلوی ثبت فاکتور را هم می‌گیرد و بدهی را از دفاتر پنهان می‌کند؛ انسداد خرید فقط سفارش تازه را متوقف می‌کند.',
        en: 'A payment block lets invoices be posted, so the liability shows correctly in the books, but keeps them out of the payment run. A posting block would stop the invoice being recorded at all and hide the liability; a purchasing block only stops new orders.',
      },
    },
    {
      q: {
        fa: 'برای سفارشی 200,000 مبلغ 60,000 پیش‌پرداخت شده است. فاکتور کامل ثبت و پیش‌پرداخت تسویه می‌شود. چه مبلغی باید پرداخت شود؟',
        en: 'An advance of 60,000 was paid on a 200,000 order. The full invoice is posted and the advance cleared. How much remains to be paid?',
      },
      options: [
        { fa: '200,000', en: '200,000' },
        { fa: '140,000', en: '140,000' },
        { fa: '260,000', en: '260,000' },
        { fa: '60,000', en: '60,000' },
      ],
      answer: 1,
      explain: {
        fa: 'فاکتور 200,000 حساب تأمین‌کننده را بستانکار می‌کند و تسویه پیش‌پرداخت 60,000 آن را بدهکار؛ مانده 200,000 − 60,000 = 140,000 است. پرداخت 200,000 یعنی پرداخت دوباره همان 60,000.',
        en: 'The 200,000 invoice credits the supplier account and clearing the 60,000 advance debits it, leaving 200,000 − 60,000 = 140,000. Paying 200,000 would pay the 60,000 twice.',
      },
    },
    {
      q: {
        fa: 'چرا رکورد تکراری تأمین‌کننده خطرناک است؟',
        en: 'Why is a duplicate vendor record dangerous?',
      },
      options: [
        {
          fa: 'پرداخت دوباره ممکن می‌شود، سابقه عملکرد و هزینه‌کرد دو تکه می‌شود و انسداد یک رکورد با رکورد دیگر دور زده می‌شود',
          en: 'It makes double payment possible, splits the performance and spend history, and lets a block on one record be bypassed through the other',
        },
        { fa: 'فقط فضای پایگاه داده را اشغال می‌کند', en: 'It only takes up database space' },
        { fa: 'خطری ندارد، چون هر دو رکورد به یک شرکت تعلق دارند', en: 'There is no risk, since both records belong to one company' },
        { fa: 'فقط گزارش‌های تدارکات را کمی شلوغ می‌کند', en: 'It only makes procurement reports a little cluttered' },
      ],
      answer: 0,
      explain: {
        fa: 'سیستم کنترل فاکتور تکراری را معمولاً برای هر تأمین‌کننده جدا انجام می‌دهد؛ با دو رکورد، یک فاکتور می‌تواند دو بار پرداخت شود، همان‌طور که در V-1007 و V-1093 رخ داد. افزون بر این، تأمین‌کننده مسدودشده می‌تواند با رکورد دوم سفارش بگیرد. «یک شرکت بودن» دقیقاً همان مشکل است، نه دلیل بی‌خطری.',
        en: 'The duplicate-invoice check usually runs per supplier; with two records one invoice can be paid twice, exactly as happened with V-1007 and V-1093. A blocked supplier can also keep getting orders through the second record. “Being one company” is the problem itself, not a reason it is harmless.',
      },
    },
  ],
}
