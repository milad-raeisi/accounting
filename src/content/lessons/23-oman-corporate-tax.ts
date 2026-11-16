import type { Lesson } from '../types'

/*
 * Corporate income tax in the Sultanate of Oman, for accountants in an oil and gas company.
 * Facts checked on 16 November 2026 against the Oman Tax Authority portal (income tax FAQ),
 * PwC Worldwide Tax Summaries for Oman (last reviewed 7 July 2026), EY, KPMG and BDO tax alerts.
 * Legal thresholds are in Omani rials (OMR); every example figure is illustrative.
 */

const ac = {
  curTaxExp: { fa: 'هزینه مالیات بر درآمد جاری', en: 'Current income tax expense' },
  taxPayable: { fa: 'مالیات بر درآمد پرداختنی', en: 'Income tax payable' },
  bank: { fa: 'موجودی نقد (بانک)', en: 'Cash at bank' },
  whtPayable: { fa: 'مالیات تکلیفی پرداختنی', en: 'Withholding tax payable' },
  apForeign: { fa: 'حساب‌های پرداختنی (تأمین‌کننده خارجی)', en: 'Accounts payable (foreign supplier)' },
  engExp: { fa: 'هزینه خدمات مهندسی', en: 'Engineering services expense' },
  wellTestExp: { fa: 'هزینه پردازش داده‌های آزمایش چاه', en: 'Well-test data processing expense' },
  defTaxExp: { fa: 'هزینه مالیات انتقالی', en: 'Deferred tax expense' },
  defTaxInc: { fa: 'هزینه (درآمد) مالیات انتقالی', en: 'Deferred tax expense (income)' },
  dtl: { fa: 'بدهی مالیات انتقالی', en: 'Deferred tax liability' },
  dta: { fa: 'دارایی مالیات انتقالی', en: 'Deferred tax asset' },
}

const yr = (n: number) => ({ fa: `${n}`, en: `${n}` })

export const lesson: Lesson = {
  slug: 'oman-corporate-tax',
  number: 30,
  currency: 'omr',
  level: 'advanced',
  minutes: 40,
  icon: 'Landmark',
  tone: 'liability',
  title: { fa: 'مالیات بر درآمد شرکت‌ها در عمان', en: 'Corporate Income Tax in Oman' },
  summary: {
    fa: 'قانون مالیات بر درآمد عمان را برای یک شرکت نفت و گاز گام‌به‌گام یاد بگیرید: چه کسی و با چه نرخی مالیات می‌دهد، سود حسابداری چگونه به درآمد مشمول مالیات تبدیل می‌شود، مالیات تکلیفی پرداخت به غیرمقیم‌ها، اظهارنامه و مهلت‌ها، رژیم ویژه قراردادهای EPSA و ثبت مالیات جاری و انتقالی در ERP.',
    en: 'Learn Oman’s income tax law step by step for an oil and gas company: who pays and at what rate, how accounting profit becomes taxable income, withholding tax on payments to non-residents, returns and deadlines, the special EPSA regime, and how current and deferred tax are recorded in the ERP.',
  },
  objectives: [
    {
      fa: 'چارچوب قانونی مالیات بر درآمد عمان را توضیح دهید و تشخیص دهید چه کسی با چه نرخی مشمول مالیات است',
      en: 'Explain the legal framework of Omani income tax and identify who is taxable and at which rate',
    },
    {
      fa: 'سود حسابداری را با تعدیل‌های لازم به درآمد مشمول مالیات تبدیل کنید و مالیات را حساب کنید',
      en: 'Turn accounting profit into taxable income with the right adjustments and compute the tax',
    },
    {
      fa: 'قواعد استهلاک مالیاتی و انتقال زیان را به کار ببرید',
      en: 'Apply the tax depreciation and loss carry-forward rules',
    },
    {
      fa: 'مالیات تکلیفی پرداخت به غیرمقیم‌ها را محاسبه، ثبت و به‌موقع واریز کنید',
      en: 'Compute, record and pay over withholding tax on payments to non-residents on time',
    },
    {
      fa: 'مالیات جاری و مالیات انتقالی (IAS 12) را در ERP ثبت کنید و رژیم مالیاتی قراردادهای EPSA را توضیح دهید',
      en: 'Record current and deferred tax (IAS 12) in the ERP and explain how tax works under EPSAs',
    },
  ],
  sections: [
    /* ------------------------------------------------------------------ */
    {
      id: 'framework',
      title: { fa: 'چارچوب قانونی و اینکه چه کسی مالیات می‌دهد', en: 'The Legal Framework and Who Pays' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'شرکت مسار پترولیوم در عمان یک شرکت با مسئولیت محدود به نام **مسار پترولیوم خدمات عمان** دارد. این شرکت برای اپراتورهای میدان‌های نفتی عمان خدمات تعمیر چاه و نگهداری ایستگاه تقویت فشار انجام می‌دهد. سال 2026 تمام شده و مدیر مالی سه سؤال دارد: چقدر مالیات بدهیم؟ تا چه تاریخی؟ و در سیستم ERP چه سندهایی ثبت کنیم؟ این درس به این سه سؤال گام‌به‌گام پاسخ می‌دهد.',
            en: 'Masar Petroleum owns a limited liability company in Oman, **Masar Petroleum Oman Services LLC**. It provides well-workover services and compressor-station maintenance to the operators of Omani oil fields. The year 2026 has closed and the finance manager has three questions: how much tax do we owe, by when, and which entries do we post in the ERP? This lesson answers all three, step by step.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**قانون مالیات بر درآمد عمان**: با فرمان سلطانی شماره 28/2009 صادر شده و چند بار اصلاح شده است. مهم‌ترین اصلاحیه‌ها فرمان سلطانی 9/2017 (نرخ عمومی 15٪ و گسترش مالیات تکلیفی) و فرمان سلطانی 118/2020 (یک اظهارنامه سالانه به‌جای دو اظهارنامه) هستند.',
              en: '**Oman Income Tax Law**: issued by Royal Decree 28/2009 and amended several times. The key amendments are Royal Decree 9/2017 (the 15% standard rate and a wider withholding tax) and Royal Decree 118/2020 (one annual return instead of two).',
            },
            {
              fa: '**آیین‌نامه اجرایی**: با تصمیم وزارتی 30/2012 صادر شده و بعدها اصلاح شده است (برای نمونه تصمیم 14/2019 که فهرست خدمات مستثنا از مالیات تکلیفی را اضافه کرد). جزئیات اجرای قانون در آیین‌نامه است.',
              en: '**Executive Regulations**: issued by Ministerial Decision 30/2012 and amended since (for example Decision 14/2019, which added the list of services excluded from withholding tax). The detail of how the law is applied lives here.',
            },
            {
              fa: '**سازمان مالیات عمان (Oman Tax Authority)**: نهادی که با فرمان سلطانی 66/2019 تشکیل شد و ثبت‌نام، دریافت اظهارنامه، رسیدگی و وصول مالیات را بر عهده دارد. بیشتر کارها از درگاه الکترونیکی سازمان (tms.taxoman.gov.om) انجام می‌شود.',
              en: '**Oman Tax Authority (OTA)**: established by Royal Decree 66/2019; it handles registration, returns, audits and collection. Most work is done through its online portal (tms.taxoman.gov.om).',
            },
            {
              fa: '**قراردادهای نفتی و پیمان‌های مالیاتی**: برای شرکت‌های اکتشاف و تولید، قرارداد اکتشاف و مشارکت در تولید (EPSA) نحوه محاسبه و تسویه مالیات را مشخص می‌کند. پیمان‌های اجتناب از اخذ مالیات مضاعف هم ممکن است مالیات پرداخت به خارجی‌ها را کم کنند.',
              en: '**Petroleum agreements and tax treaties**: for exploration and production companies, the Exploration and Production Sharing Agreement (EPSA) sets how tax is computed and settled. Double tax treaties may reduce tax on payments to foreign parties.',
            },
          ],
        },
        { type: 'h', text: { fa: 'چه کسی مشمول مالیات است؟', en: 'Who is taxable?' } },
        {
          type: 'table',
          caption: { fa: 'چهار حالت اصلی', en: 'The four main cases' },
          head: [
            { fa: 'نوع شخص', en: 'Type of person' },
            { fa: 'چه درآمدی مشمول است', en: 'What income is taxed' },
            { fa: 'چگونه مالیات می‌دهد', en: 'How it is taxed' },
          ],
          rows: [
            [
              { fa: 'شرکت تشکیل‌شده در عمان (مثل مسار پترولیوم خدمات عمان)', en: 'Company formed in Oman (such as Masar Petroleum Oman Services)' },
              { fa: 'درآمد جهانی: درآمد داخل و خارج عمان', en: 'Worldwide income: income from inside and outside Oman' },
              {
                fa: 'اظهارنامه سالانه؛ برای مالیات پرداخت‌شده در خارج، اعتبار مالیاتی تا سقف مالیات عمانی همان درآمد',
                en: 'Annual return; credit for foreign tax paid, capped at the Omani tax on that income',
              },
            ],
            [
              { fa: 'شعبه یا مقر دائم شرکت خارجی', en: 'Branch or permanent establishment (PE) of a foreign company' },
              { fa: 'فقط درآمدی که منشأ آن عمان است', en: 'Only income with an Omani source' },
              { fa: 'مانند شرکت عمانی، با اظهارنامه سالانه', en: 'Like an Omani company, with an annual return' },
            ],
            [
              { fa: 'شرکت خارجی بدون مقر دائم در عمان', en: 'Foreign company with no PE in Oman' },
              {
                fa: 'برخی پرداخت‌هایی که از عمان دریافت می‌کند (حق امتیاز، خدمات و مانند آن)',
                en: 'Certain payments it receives from Oman (royalties, services and the like)',
              },
              {
                fa: 'مالیات تکلیفی 10٪ که پرداخت‌کننده عمانی کسر و واریز می‌کند',
                en: '10% withholding tax, deducted and paid over by the Omani payer',
              },
            ],
            [
              { fa: 'پیمانکار قرارداد EPSA (فروش نفت)', en: 'EPSA contractor (sale of petroleum)' },
              { fa: 'درآمدی که طبق هر قرارداد EPSA تعیین می‌شود', en: 'Income as determined under each EPSA' },
              {
                fa: 'نرخ ویژه 55٪ که دولت از سهم خود از تولید تسویه می‌کند',
                en: 'Special 55% rate, settled by the government out of its share of production',
              },
            ],
          ],
        },
        {
          type: 'p',
          text: {
            fa: '**مقر دائم** (Permanent Establishment) یعنی حضور تجاری کافی یک شرکت خارجی در عمان که آن را مشمول مالیات عمان می‌کند. نمونه‌های رایج: شعبه، دفتر یا هر محل ثابت کسب‌وکار؛ کارگاه ساخت، نصب یا مونتاژ که از آستانه 90 روز بگذرد؛ ارائه خدمات در عمان به‌وسیله کارکنان که در هر دوره 12 ماهه از آستانه 90 روز بگذرد؛ و نماینده وابسته‌ای که از طرف شرکت کار می‌کند. پیمان مالیاتی میان عمان و کشور آن شرکت ممکن است این تعریف را محدودتر کند؛ پس پیمان را هم بخوانید.',
            en: 'A **permanent establishment** (PE) is enough business presence in Oman to make a foreign company taxable there. Common examples: a branch, office or other fixed place of business; a construction, installation or assembly site that passes a 90-day threshold; services provided in Oman through employees that pass a 90-day threshold within any 12-month period; and a dependent agent acting for the company. A tax treaty between Oman and the company’s home country may narrow this definition, so read the treaty too.',
          },
        },
        { type: 'h', text: { fa: 'نرخ‌ها', en: 'Rates' } },
        {
          type: 'table',
          caption: { fa: 'نرخ‌های مالیات بر درآمد در عمان', en: 'Income tax rates in Oman' },
          head: [
            { fa: 'نرخ', en: 'Rate' },
            { fa: 'کجا اعمال می‌شود', en: 'Where it applies' },
            { fa: 'نکته', en: 'Note' },
          ],
          rows: [
            [
              { fa: '15٪', en: '15%' },
              { fa: 'نرخ عمومی: همه شرکت‌ها و مقرهای دائم', en: 'Standard rate: all companies and PEs' },
              { fa: 'برای سال‌های مالیاتی از 2017 به بعد', en: 'For tax years from 2017 onwards' },
            ],
            [
              { fa: '3٪', en: '3%' },
              {
                fa: 'مؤسسات انفرادی عمانی و شرکت‌های با مسئولیت محدودی که همه شرایط مؤسسه کوچک را دارند',
                en: 'Omani sole proprietorships and LLCs that meet every small-enterprise condition',
              },
              { fa: 'شرایط در فهرست زیر آمده است', en: 'Conditions listed below' },
            ],
            [
              { fa: '55٪', en: '55%' },
              { fa: 'درآمد حاصل از فروش نفت', en: 'Income from the sale of petroleum' },
              { fa: 'روی درآمدی که طبق هر قرارداد EPSA تعیین می‌شود', en: 'On income as determined under each EPSA' },
            ],
            [
              { fa: '10٪', en: '10%' },
              {
                fa: 'مالیات تکلیفی بر برخی پرداخت‌ها به غیرمقیم‌های بدون مقر دائم',
                en: 'Withholding tax on certain payments to non-residents with no PE',
              },
              { fa: 'روی مبلغ ناخالص؛ در بخش مالیات تکلیفی', en: 'On the gross amount; see the withholding tax section' },
            ],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'نرخ 3٪ فقط وقتی اعمال می‌شود که **همه** شرایط زیر با هم برقرار باشد (طبق پرسش‌وپاسخ سازمان مالیات عمان و خلاصه PwC):',
            en: 'The 3% rate applies only when **all** of these conditions are met together (per the Oman Tax Authority’s FAQ and PwC’s summary):',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: 'سرمایه ثبت‌شده در ابتدای سال مالیاتی بیش از 60,000 ریال عمانی نباشد.',
              en: 'Registered capital at the start of the tax year is no more than OMR 60,000.',
            },
            {
              fa: 'درآمد ناخالص سال بیش از 150,000 ریال عمانی نباشد.',
              en: 'Gross income for the year is no more than OMR 150,000.',
            },
            {
              fa: 'میانگین تعداد کارکنان در طول سال بیش از 25 نفر نباشد.',
              en: 'The average number of employees during the year is no more than 25.',
            },
            {
              fa: 'فعالیت جزو فعالیت‌های مستثنا نباشد؛ از جمله حمل‌ونقل هوایی و دریایی، **استخراج منابع طبیعی**، بانک و بیمه و خدمات مالی، امتیاز خدمات عمومی و فعالیت‌های حرفه‌ای. پس شرکت اکتشاف و تولید نفت و گاز هیچ‌وقت با نرخ 3٪ مالیات نمی‌دهد.',
              en: 'The activity is not on the excluded list, which includes air and sea transport, **extraction of natural resources**, banking, insurance and financial services, public-utility concessions and professional activities. So an oil and gas exploration and production company never pays tax at 3%.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'حداقل مالیات جهانی (رکن دوم)', en: 'Global minimum tax (Pillar Two)' },
          text: {
            fa: 'از 1 ژانویه 2025، قانون مالیات تکمیلی (فرمان سلطانی 70/2024) برای گروه‌های چندملیتی بزرگ اجرا می‌شود؛ یعنی گروه‌هایی که درآمد تلفیقی آن‌ها دست‌کم 750 میلیون یورو است. هدف این است که نرخ مؤثر مالیات این گروه‌ها در عمان کمتر از 15٪ نشود. این قانون در اواخر اکتبر 2026 با فرمان سلطانی 101/2026 اصلاح شد و در تاریخ بررسی این درس، آیین‌نامه اجرایی آن هنوز منتشر نشده بود. اگر شرکت شما عضو چنین گروهی است، با تیم مالیات گروه هماهنگ کنید.',
            en: 'From 1 January 2025, a top-up tax law (Royal Decree 70/2024) applies to large multinational groups, those with consolidated revenue of at least EUR 750 million, so that their effective tax rate in Oman does not fall below 15%. The law was amended by Royal Decree 101/2026 in late October 2026, and on the date this lesson was checked its executive regulations had not yet been issued. If your company belongs to such a group, coordinate with the group tax team.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'قانون مالیات تغییر می‌کند', en: 'Tax law changes' },
          text: {
            fa: 'نرخ‌ها، آستانه‌ها و مهلت‌های این درس در تاریخ 16 نوامبر 2026 با منابع رسمی و راهنماهای معتبر حرفه‌ای بررسی شده‌اند. برای نمونه، تصمیم 180/2026 سازمان مالیات از سال مالیاتی 2027 شرط‌های تازه‌ای برای کسر برخی هزینه‌ها گذاشته که دامنه آن هنوز در حال روشن شدن است. پیش از هر تصمیم واقعی، قواعد روز را از سازمان مالیات عمان (taxoman.gov.om) یا مشاور مالیاتی دارای مجوز بپرسید. آستانه‌های قانونی به ریال عمانی است و اعداد مثال‌های این درس فرضی‌اند.',
            en: 'The rates, thresholds and deadlines in this lesson were checked on 16 November 2026 against official sources and reputable professional guides. For example, Tax Authority Decision 180/2026 adds new conditions for deducting certain expenses from tax year 2027, and its scope is still being clarified. Before any real decision, confirm the current rules with the Oman Tax Authority (taxoman.gov.om) or a licensed tax adviser. Legal thresholds are in Omani rials; the example figures in this lesson are illustrative.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'taxable-income',
      title: { fa: 'از سود حسابداری تا درآمد مشمول مالیات', en: 'From Accounting Profit to Taxable Income' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'مالیات روی **درآمد مشمول مالیات** حساب می‌شود، نه مستقیم روی سود حسابداری. سود حسابداری طبق IFRS تهیه می‌شود، اما قانون مالیات بعضی هزینه‌ها را نمی‌پذیرد (مثل جریمه‌ها)، بعضی درآمدها را معاف می‌کند (مثل سود سهام دریافتی از شرکت‌های عمانی) و برای بعضی اقلام زمان دیگری دارد (مثل استهلاک و ذخیره‌ها). پس کار ما این است: از **سود قبل از مالیات** در صورت‌های مالی حسابرسی‌شده شروع کنیم و آن را تعدیل کنیم.',
            en: 'Tax is charged on **taxable income**, not directly on accounting profit. Accounting profit follows IFRS, but tax law refuses some expenses (such as fines), exempts some income (such as dividends from Omani companies) and times some items differently (such as depreciation and provisions). So the job is to start from **profit before tax** in the audited financial statements and adjust it.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'درآمد مشمول مالیات = سود قبل از مالیات + هزینه‌های غیرقابل قبول − درآمدهای معاف ± تعدیل‌های زمانی − زیان‌های قابل انتقال',
            en: 'Taxable income = Profit before tax + Non-deductible expenses − Exempt income ± Timing adjustments − Losses brought forward',
          },
          note: {
            fa: 'مالیات جاری = درآمد مشمول مالیات × نرخ مالیات (برای مسار پترولیوم خدمات عمان 15٪)',
            en: 'Current tax = Taxable income × Tax rate (15% for Masar Petroleum Oman Services)',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'معمولاً قابل قبول (قابل کسر)', en: 'Usually deductible' },
            items: [
              {
                fa: 'هزینه‌هایی که برای کسب درآمد مشمول مالیات انجام شده و مستند است',
                en: 'Expenses incurred to earn taxable income and properly documented',
              },
              {
                fa: 'استهلاک مالیاتی با نرخ‌های قانونی (به‌جای استهلاک دفتری)',
                en: 'Tax depreciation at the legal rates (instead of book depreciation)',
              },
              {
                fa: 'مطالبات سوخت‌شده، وقتی واقعاً از دفاتر حذف شود و شرایط آیین‌نامه را داشته باشد',
                en: 'Bad debts when actually written off and the conditions in the regulations are met',
              },
              {
                fa: 'کمک نقدی یا غیرنقدی به نهادهای مجاز، تا سقف 5٪ درآمد ناخالص',
                en: 'Cash or in-kind donations to approved bodies, up to 5% of gross income',
              },
              {
                fa: 'اجاره‌های پرداختی واقعی (به‌جای استهلاک حق استفاده و بهره اجاره طبق IFRS 16)',
                en: 'Actual lease payments (instead of IFRS 16 right-of-use depreciation and lease interest)',
              },
              { fa: 'بهره وام از بانک‌ها و وام‌دهندگان غیرمرتبط', en: 'Interest on loans from banks and unrelated lenders' },
            ],
          },
          right: {
            title: { fa: 'غیرقابل قبول (باید برگشت داده شود)', en: 'Not deductible (add back)' },
            items: [
              { fa: 'جریمه‌ها، رشوه و پرداخت‌های غیرقانونی', en: 'Fines and penalties, bribes and other illegal payments' },
              { fa: 'خود مالیات بر درآمد، چه عمانی چه خارجی', en: 'Income tax itself, Omani or foreign' },
              {
                fa: 'ذخیره‌ها (مطالبات مشکوک‌الوصول، کالای راکد، تضمین) تا زمان حذف یا مصرف واقعی',
                en: 'Provisions (doubtful debts, slow-moving stock, warranties) until actually written off or used',
              },
              { fa: 'هزینه‌های مربوط به درآمد معاف', en: 'Expenses relating to exempt income' },
              { fa: 'کمک به نهادهای غیرمجاز یا مازاد بر سقف', en: 'Donations to unapproved bodies, or above the cap' },
              {
                fa: 'بهره وام اشخاص مرتبط، در بخشی که نسبت بدهی به حقوق مالکانه از 2 به 1 بیشتر شود',
                en: 'Related-party interest on the part of the debt above a 2:1 debt-to-equity ratio',
              },
            ],
          },
        },
        {
          type: 'h',
          text: { fa: 'مثال کامل: مسار پترولیوم خدمات عمان، سال 2026', en: 'Worked example: Masar Petroleum Oman Services, 2026' },
        },
        {
          type: 'table',
          caption: {
            fa: 'کاربرگ محاسبه مالیات سال 2026 (اعداد فرضی)',
            en: '2026 tax computation working paper (illustrative figures)',
          },
          head: [
            { fa: 'شرح', en: 'Item' },
            { fa: 'مبلغ', en: 'Amount' },
            { fa: 'اثر و دلیل', en: 'Effect and reason' },
          ],
          numericCols: [1],
          rows: [
            [
              { fa: 'سود قبل از مالیات (صورت‌های مالی حسابرسی‌شده)', en: 'Profit before tax (audited financial statements)' },
              1200000,
              { fa: 'نقطه شروع', en: 'Starting point' },
            ],
            [
              { fa: 'استهلاک دفتری', en: 'Book depreciation' },
              380000,
              { fa: 'اضافه: جای آن استهلاک مالیاتی می‌آید', en: 'Add: replaced by tax depreciation' },
            ],
            [
              { fa: 'ذخیره قطعات یدکی کم‌گردش و راکد', en: 'Provision for slow-moving spares' },
              45000,
              { fa: 'اضافه: تا حذف واقعی قابل قبول نیست', en: 'Add: not deductible until actually written off' },
            ],
            [
              { fa: 'ذخیره مطالبات مشکوک‌الوصول (هزینه امسال)', en: 'Allowance for doubtful accounts (this year’s charge)' },
              30000,
              { fa: 'اضافه: به همان دلیل', en: 'Add: same reason' },
            ],
            [
              { fa: 'جریمه‌های پرداختی به نهادهای دولتی', en: 'Fines paid to government bodies' },
              12000,
              { fa: 'اضافه: جریمه هرگز قابل قبول نیست', en: 'Add: fines are never deductible' },
            ],
            [
              { fa: 'کمک به نهادی که مجاز نیست', en: 'Donation to an unapproved body' },
              8000,
              { fa: 'اضافه: فقط کمک به نهادهای مجاز قابل کسر است', en: 'Add: only donations to approved bodies are deductible' },
            ],
            [
              { fa: 'استهلاک دارایی حق استفاده (IFRS 16)', en: 'Right-of-use asset depreciation (IFRS 16)' },
              90000,
              { fa: 'اضافه: جای آن اجاره واقعی می‌آید', en: 'Add: replaced by actual lease payments' },
            ],
            [
              { fa: 'هزینه بهره اجاره (IFRS 16)', en: 'Lease interest expense (IFRS 16)' },
              15000,
              { fa: 'اضافه: به همان دلیل', en: 'Add: same reason' },
            ],
            [
              { fa: 'استهلاک مالیاتی طبق نرخ‌های قانونی', en: 'Tax depreciation at the legal rates' },
              420000,
              { fa: 'کسر', en: 'Deduct' },
            ],
            [
              {
                fa: 'مطالباتی که امسال از محل ذخیره واقعاً حذف شد',
                en: 'Receivables actually written off this year against the allowance',
              },
              10000,
              { fa: 'کسر: اکنون قابل قبول است', en: 'Deduct: now deductible' },
            ],
            [
              { fa: 'سود سهام دریافتی از یک شرکت عمانی', en: 'Dividend received from an Omani company' },
              25000,
              { fa: 'کسر: درآمد معاف', en: 'Deduct: exempt income' },
            ],
            [
              { fa: 'اجاره‌های پرداختی واقعی', en: 'Actual lease payments' },
              100000,
              { fa: 'کسر', en: 'Deduct' },
            ],
            [
              { fa: 'جمع: درآمد مشمول پیش از کسر زیان', en: 'Total: taxable income before losses' },
              1225000,
              { fa: '1,200,000 + 580,000 − 555,000', en: '1,200,000 + 580,000 − 555,000' },
            ],
            [
              { fa: 'زیان مالیاتی سال 2023 (هنوز در مهلت 5 ساله)', en: 'Tax loss from 2023 (still within 5 years)' },
              125000,
              { fa: 'کسر', en: 'Deduct' },
            ],
            [
              { fa: 'خالص درآمد مشمول مالیات', en: 'Net taxable income' },
              1100000,
              { fa: '1,225,000 − 125,000', en: '1,225,000 − 125,000' },
            ],
            [
              { fa: 'مالیات بر درآمد جاری (15٪)', en: 'Current income tax (15%)' },
              165000,
              { fa: '1,100,000 × 15٪', en: '1,100,000 × 15%' },
            ],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'جمع اقلام اضافه‌شونده 580,000 و جمع اقلام کسرشونده 555,000 است. دقت کنید که ذخیره مطالبات (30,000) برگشت داده شده، اما 10,000 مطالباتی که امسال واقعاً حذف شد کسر شده است. قانون این هزینه را رد نمی‌کند؛ فقط زمان کسر آن را به لحظه حذف واقعی منتقل می‌کند.',
            en: 'The add-backs total 580,000 and the deductions 555,000. Notice that the 30,000 allowance charge is added back, while the 10,000 of receivables actually written off this year is deducted. The law does not reject this cost; it only moves the deduction to the moment of the actual write-off.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'یک آزمون سریع: نرخ مؤثر', en: 'A quick test: the effective rate' },
          text: {
            fa: 'نرخ مؤثر مالیات جاری = 165,000 ÷ 1,200,000 = 13.75٪. این نرخ از 15٪ کمتر است، چون زیان سال‌های قبل و درآمد معاف آن را پایین آورده‌اند؛ جریمه‌ها و کمک غیرمجاز آن را کمی بالا برده‌اند. اگر نرخ مؤثر شما بی‌دلیل خیلی کمتر یا بیشتر از 15٪ شد، کاربرگ را دوباره بررسی کنید.',
            en: 'Effective current tax rate = 165,000 ÷ 1,200,000 = 13.75%. It is below 15% because prior-year losses and exempt income pull it down; the fines and the unapproved donation push it up a little. If your effective rate is far from 15% for no clear reason, review the working paper again.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'حسابدار مالیات یک **کاربرگ محاسبه مالیات** (tax computation) تهیه می‌کند که هر ردیف آن به حساب‌های دفتر کل و مدارک پشتیبان (فاکتور، قرارداد، رسید جریمه، صورت‌جلسه حذف کالا) ارجاع دارد. این کاربرگ همراه اظهارنامه و صورت‌های مالی حسابرسی‌شده بایگانی می‌شود، چون در رسیدگی سازمان مالیات به آن نیاز پیدا می‌کنید.',
            en: 'The tax accountant prepares a **tax computation** working paper in which every line refers to general-ledger accounts and supporting documents (invoice, contract, fine receipt, stock write-off minutes). It is filed with the return and the audited financial statements, because you will need it when the Tax Authority audits the year.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'دو محدودیت دیگر', en: 'Two more limits' },
          text: {
            fa: '(1) بهره وامی که از اشخاص مرتبط گرفته می‌شود فقط وقتی قابل قبول است که شرایط آن با بازار برابر باشد و فقط تا جایی که نسبت بدهی به حقوق مالکانه از 2 به 1 بیشتر نشود؛ بانک‌ها، بیمه‌ها و مقرهای دائم شرکت‌های خارجی از این قاعده مستثنا هستند. (2) هزینه‌هایی که دفتر مرکزی یا شرکت‌های گروه به شعبه سرشکن می‌کنند معمولاً حداکثر تا 3٪ درآمد ناخالص قابل قبول است (برای بانک‌ها و بیمه‌ها 5٪).',
            en: '(1) Interest on loans from related parties is deductible only on arm’s length terms and only up to a 2:1 debt-to-equity ratio; banks, insurers and PEs of foreign companies are outside this rule. (2) Charges allocated to a branch by its head office or other group companies are generally deductible only up to 3% of gross income (5% for banks and insurers).',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'depreciation-losses',
      title: { fa: 'استهلاک مالیاتی و انتقال زیان', en: 'Tax Depreciation and Tax Losses' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در دفاتر، استهلاک را طبق IFRS و بر اساس عمر مفید برآوردی ثبت می‌کنیم؛ اما قانون مالیات نرخ‌های خودش را دارد. پس هر دارایی دو رقم استهلاک دارد: **استهلاک دفتری** که در صورت سود و زیان می‌آید، و **استهلاک مالیاتی** که در کاربرگ مالیات کسر می‌شود. بعضی دارایی‌ها به روش خط مستقیم مستهلک می‌شوند و بعضی در **گروه‌های هم‌نرخ (pool)** و به روش نزولی روی مانده مستهلک‌نشده.',
            en: 'In the books we depreciate under IFRS over the estimated useful life, but tax law has its own rates. So every asset has two depreciation figures: **book depreciation**, which goes to the income statement, and **tax depreciation**, which is deducted in the tax computation. Some assets are depreciated straight-line; others sit in **pools** of same-rate assets and are depreciated on the declining written-down value.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'نرخ‌های استهلاک مالیاتی (طبق خلاصه PwC، بازبینی 7 جولای 2026)',
            en: 'Tax depreciation rates (per PwC’s summary, reviewed 7 July 2026)',
          },
          head: [
            { fa: 'گروه دارایی', en: 'Asset class' },
            { fa: 'نرخ سالانه', en: 'Annual rate' },
            { fa: 'روش', en: 'Method' },
          ],
          rows: [
            [
              { fa: 'ساختمان‌های دائمی', en: 'Permanent buildings' },
              { fa: '4٪', en: '4%' },
              { fa: 'خط مستقیم (برای ساختمان‌های صنعتی دو برابر)', en: 'Straight-line (doubled for industrial buildings)' },
            ],
            [
              { fa: 'ساختمان‌های نیمه‌دائمی', en: 'Semi-permanent buildings' },
              { fa: '15٪', en: '15%' },
              { fa: 'خط مستقیم', en: 'Straight-line' },
            ],
            [
              { fa: 'خطوط لوله، جاده‌ها، اسکله‌ها و موج‌شکن‌ها', en: 'Pipelines, roads, docks, quays and sea barriers' },
              { fa: '10٪', en: '10%' },
              { fa: 'خط مستقیم', en: 'Straight-line' },
            ],
            [
              { fa: 'هواپیما و کشتی', en: 'Aircraft and ships' },
              { fa: '15٪', en: '15%' },
              { fa: 'خط مستقیم', en: 'Straight-line' },
            ],
            [
              {
                fa: 'گروه 1: ماشین‌آلات سنگین (جرثقیل، تراکتور)، وسایل نقلیه، مبلمان، رایانه و نرم‌افزار، حقوق مالکیت فکری',
                en: 'Pool 1: heavy machinery (cranes, tractors), vehicles, furniture, computers and software, IP rights',
              },
              { fa: '33.33٪', en: '33.33%' },
              { fa: 'گروهی، روی مانده مستهلک‌نشده', en: 'Pooled, on written-down value' },
            ],
            [
              { fa: 'گروه 2: تجهیزات حفاری', en: 'Pool 2: drilling equipment' },
              { fa: '10٪', en: '10%' },
              { fa: 'گروهی، روی مانده مستهلک‌نشده', en: 'Pooled, on written-down value' },
            ],
            [
              { fa: 'گروه 3: سایر ماشین‌آلات و تجهیزات', en: 'Pool 3: other machinery and equipment' },
              { fa: '15٪', en: '15%' },
              { fa: 'گروهی، روی مانده مستهلک‌نشده', en: 'Pooled, on written-down value' },
            ],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'مثال: مسار پترولیوم خدمات عمان در 1 ژانویه 2026 تجهیزات کارگاهی و تست به بهای 400,000 خرید. در دفاتر، عمر مفید 10 سال و ارزش اسقاط صفر است؛ پس استهلاک خط مستقیم 40,000 در سال است. از نظر مالیاتی، این تجهیزات در گروه 3 (سایر ماشین‌آلات و تجهیزات) با نرخ 15٪ روی مانده مستهلک‌نشده قرار می‌گیرد.',
            en: 'Example: on 1 January 2026 Masar Petroleum Oman Services bought workshop and testing equipment for 400,000. In the books the useful life is 10 years with no residual value, so straight-line depreciation is 40,000 a year. For tax, the equipment goes into Pool 3 (other machinery and equipment) at 15% on the written-down value.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'یک دارایی، دو دفتر استهلاک', en: 'One asset, two depreciation books' },
          head: [
            { fa: 'سال', en: 'Year' },
            { fa: 'استهلاک دفتری', en: 'Book depreciation' },
            { fa: 'مبلغ دفتری پایان سال', en: 'Carrying amount at year-end' },
            { fa: 'استهلاک مالیاتی', en: 'Tax depreciation' },
            { fa: 'مبنای مالیاتی پایان سال', en: 'Tax written-down value at year-end' },
          ],
          numericCols: [1, 2, 3, 4],
          rows: [
            [yr(2026), 40000, 360000, 60000, 340000],
            [yr(2027), 40000, 320000, 51000, 289000],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'سال 2026: 400,000 × 15٪ = 60,000. سال 2027: 340,000 × 15٪ = 51,000. در سال‌های اول، استهلاک مالیاتی بیشتر است و مالیات کمتری می‌دهیم؛ بعدها برعکس می‌شود. این تفاوت **موقت** است و در بخش حسابداری مالیات دوباره به آن برمی‌گردیم. قواعد دقیق دارایی‌هایی که در میانه سال اضافه می‌شوند و فروش دارایی‌های یک گروه در آیین‌نامه آمده است؛ پیش از محاسبه واقعی آن‌ها را بخوانید.',
            en: '2026: 400,000 × 15% = 60,000. 2027: 340,000 × 15% = 51,000. In the early years tax depreciation is higher and we pay less tax; later the position reverses. The difference is **temporary**, and we come back to it in the section on accounting for tax. The exact rules for assets added mid-year and for disposals out of a pool are in the regulations; read them before a real computation.',
          },
        },
        { type: 'h', text: { fa: 'انتقال زیان', en: 'Carrying losses forward' } },
        {
          type: 'list',
          items: [
            {
              fa: 'زیان مالیاتی هر سال را می‌توان تا **5 سال بعد** منتقل کرد و از درآمد مشمول مالیات آن سال‌ها کم کرد.',
              en: 'A tax loss can be carried forward for **5 years** and set off against taxable income of those years.',
            },
            {
              fa: 'انتقال زیان به سال‌های **قبل** (carry back) مجاز نیست.',
              en: 'Carrying a loss **back** to earlier years is not allowed.',
            },
            {
              fa: 'زیانی که تا پایان سال پنجم استفاده نشود از بین می‌رود؛ پس زیان‌های قدیمی‌تر را زودتر مصرف کنید.',
              en: 'Any loss still unused at the end of the fifth year expires, so use the oldest losses first.',
            },
            {
              fa: 'برای فعالیت‌های معاف از مالیات و دوره‌های معافیت، قواعد خاصی وجود دارد که باید جداگانه بررسی شود.',
              en: 'Special rules apply to tax-exempt activities and exemption periods; check them separately.',
            },
          ],
        },
        {
          type: 'table',
          caption: {
            fa: 'زیان 300,000 سال 2021 در پنج سال بعد؛ 30,000 باقی‌مانده پس از 2026 از بین می‌رود',
            en: 'A 2021 loss of 300,000 over the next five years; the 30,000 left after 2026 expires',
          },
          head: [
            { fa: 'سال', en: 'Year' },
            { fa: 'درآمد مشمول پیش از زیان', en: 'Taxable income before loss' },
            { fa: 'زیان استفاده‌شده', en: 'Loss used' },
            { fa: 'درآمد مشمول پس از زیان', en: 'Taxable income after loss' },
            { fa: 'مانده زیان 2021', en: '2021 loss remaining' },
          ],
          numericCols: [1, 2, 3, 4],
          rows: [
            [yr(2022), 40000, 40000, 0, 260000],
            [yr(2023), 60000, 60000, 0, 200000],
            [yr(2024), 50000, 50000, 0, 150000],
            [yr(2025), 70000, 70000, 0, 80000],
            [yr(2026), 50000, 50000, 0, 30000],
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'یک جدول زیان به تفکیک سال نگه دارید (سال ایجاد، مبلغ، مبلغ استفاده‌شده، سال انقضا) و آن را با اظهارنامه‌ها و برگ‌های تشخیص سازمان مالیات تطبیق دهید. اگر سازمان در رسیدگی زیان یک سال را کم کرده باشد، فقط مبلغ پذیرفته‌شده را منتقل کنید.',
            en: 'Keep a loss schedule by year (year incurred, amount, amount used, expiry year) and reconcile it to your returns and the Tax Authority’s assessments. If an audit reduced a year’s loss, carry forward only the accepted amount.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'withholding-tax',
      title: { fa: 'مالیات تکلیفی بر پرداخت به غیرمقیم‌ها', en: 'Withholding Tax on Payments to Non-residents' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'مسار پترولیوم خدمات عمان برای ارتقای ایستگاه تقویت فشار، بازبینی طراحی مهندسی را به یک شرکت خارجی سپرده است. آن شرکت در عمان شعبه یا مقر دائم ندارد و کار را از دفتر خودش انجام می‌دهد. آیا عمان از این درآمد مالیات می‌گیرد؟ بله، از راه **مالیات تکلیفی** (withholding tax): شرکت عمانی که پول را می‌پردازد، 10٪ مبلغ ناخالص را کسر می‌کند و به سازمان مالیات واریز می‌کند. مسئولیت کسر و واریز با پرداخت‌کننده عمانی است.',
            en: 'To upgrade its compressor station, Masar Petroleum Oman Services has hired a foreign company to review the engineering design. That company has no branch or PE in Oman and works from its own office. Does Oman tax this income? Yes, through **withholding tax** (WHT): the Omani company making the payment deducts 10% of the gross amount and pays it to the Tax Authority. The duty to deduct and pay over sits with the Omani payer.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'وضعیت مالیات تکلیفی در تاریخ بررسی (پرداخت به غیرمقیم بدون مقر دائم)',
            en: 'WHT position on the date checked (payments to a non-resident with no PE)',
          },
          head: [
            { fa: 'نوع پرداخت', en: 'Type of payment' },
            { fa: 'وضعیت', en: 'Position' },
          ],
          rows: [
            [{ fa: 'حق امتیاز (royalty)', en: 'Royalties' }, { fa: '10٪', en: '10%' }],
            [{ fa: 'مابه‌ازای تحقیق و توسعه', en: 'Consideration for research and development' }, { fa: '10٪', en: '10%' }],
            [{ fa: 'حق استفاده از نرم‌افزار رایانه‌ای', en: 'Use of, or right to use, computer software' }, { fa: '10٪', en: '10%' }],
            [{ fa: 'حق‌الزحمه مدیریت (management fees)', en: 'Management fees' }, { fa: '10٪', en: '10%' }],
            [{ fa: 'انجام خدمات (به جز خدمات مستثنا)', en: 'Performance of services (except excluded services)' }, { fa: '10٪', en: '10%' }],
            [
              { fa: 'سود سهام و بهره', en: 'Dividends and interest' },
              { fa: 'معلق با دستور سلطانی 11 ژانویه 2023', en: 'Suspended by the Royal Directive of 11 January 2023' },
            ],
            [
              { fa: 'اجاره کشتی، هواپیما و موتور هواپیما', en: 'Lease of ships, aircraft and aircraft engines' },
              { fa: 'معلق از 29 دسامبر 2022', en: 'Suspended from 29 December 2022' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'خدمات مستثنا', en: 'Excluded services' },
          text: {
            fa: 'طبق پرسش‌وپاسخ سازمان مالیات، این خدمات مشمول مالیات تکلیفی نیستند: شرکت در همایش‌ها و سمینارها، آموزش، حمل و بیمه کالا، بلیت هواپیما و اقامت خارج از عمان، جلسات هیئت‌مدیره، بیمه اتکایی، و خدماتی که به فعالیت یا دارایی خارج از عمان مربوط است. بازبینی طراحی ایستگاهی که در عمان است در این فهرست نیست؛ پس مشمول است.',
            en: 'Per the Tax Authority’s FAQ, these services are outside WHT: attending conferences and seminars, training, transport and insurance of goods, air tickets and accommodation outside Oman, board meetings, reinsurance, and services relating to activities or property outside Oman. A design review for a station located in Oman is not on this list, so it is caught.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'تشخیص', en: 'Identify' },
              text: {
                fa: 'آیا دریافت‌کننده غیرمقیم است و در عمان مقر دائم ندارد؟ آیا نوع پرداخت در فهرست مشمول است و جزو مستثناها نیست؟',
                en: 'Is the payee a non-resident with no PE in Oman? Is the payment on the taxable list and not excluded?',
              },
            },
            {
              title: { fa: 'محاسبه', en: 'Compute' },
              text: {
                fa: '10٪ مبلغ ناخالص فاکتور را حساب کنید. تأمین‌کننده خالص را دریافت می‌کند.',
                en: 'Take 10% of the gross invoice amount. The supplier receives the net.',
              },
            },
            {
              title: { fa: 'ثبت', en: 'Record' },
              text: {
                fa: 'هنگام ثبت فاکتور، تأمین‌کننده را به مبلغ خالص و مالیات تکلیفی پرداختنی را به مبلغ مالیات بستانکار کنید.',
                en: 'When the invoice is posted, credit the supplier with the net amount and WHT payable with the tax.',
              },
            },
            {
              title: { fa: 'واریز', en: 'Pay over' },
              text: {
                fa: 'مالیات را تا روز 14 ماه بعد از ماهی که مبلغ پرداخت شده یا به حساب طرف بستانکار شده (هرکدام زودتر بوده) همراه با فرم مربوط به سازمان واریز کنید.',
                en: 'Pay the tax, with the required statement, within 14 days after the end of the month in which the amount was paid or credited to the payee, whichever came first.',
              },
            },
            {
              title: { fa: 'پیمان مالیاتی', en: 'Tax treaty' },
              text: {
                fa: 'اگر کشور طرف با عمان پیمان مالیاتی دارد، ممکن است نرخ کمتر یا صفر باشد. معمولاً گواهی اقامت مالیاتی طرف لازم است؛ روش روز را از سازمان بپرسید.',
                en: 'If the payee’s country has a tax treaty with Oman, the rate may be lower or nil. A tax residence certificate is usually needed; confirm the current procedure with the Tax Authority.',
              },
            },
            {
              title: { fa: 'بایگانی', en: 'File' },
              text: {
                fa: 'قرارداد، فاکتور، رسید واریز و فرم ارسالی را کنار هم بایگانی کنید.',
                en: 'Keep the contract, invoice, payment receipt and the submitted statement together.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'محاسبه نمونه', en: 'Worked figures' },
          text: {
            fa: 'فاکتور بازبینی طراحی 200,000 است: مالیات تکلیفی 200,000 × 10٪ = 20,000 و پرداخت به تأمین‌کننده 180,000. فاکتور در 18 مارس 2026 در ERP ثبت شد و مبلغ در 2 آوریل پرداخت شد. چون فاکتور زودتر (در مارس) به حساب طرف بستانکار شده، مهلت واریز 14 آوریل 2026 است، نه 14 مه.',
            en: 'The design-review invoice is 200,000: WHT = 200,000 × 10% = 20,000, and the supplier is paid 180,000. The invoice was posted in the ERP on 18 March 2026 and paid on 2 April. Because the supplier was credited first (in March), the deadline is 14 April 2026, not 14 May.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'مسئولیت با پرداخت‌کننده است', en: 'The payer carries the risk' },
          text: {
            fa: 'اگر شرکت عمانی مالیات را کسر نکند یا دیر واریز کند، خودش در برابر سازمان مسئول است: ممکن است ناچار شود مالیات را از منابع خودش بپردازد و برای هر ماه تأخیر 1٪ مالیات اضافی هم بدهد. اگر قرارداد بگوید شرکت عمانی بار مالیات را تحمل می‌کند، این مبلغ هزینه شرکت می‌شود؛ پس بند مالیاتی قراردادهای خارجی را پیش از امضا بخوانید.',
            en: 'If the Omani company fails to deduct or pays over late, it answers to the Tax Authority itself: it may have to pay the tax out of its own funds, plus an extra 1% for each month of delay. If the contract says the Omani company bears the tax, that cost falls on the company, so read the tax clause of every foreign contract before signing.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'returns-compliance',
      title: { fa: 'اظهارنامه، پرداخت، جریمه و سوابق', en: 'Returns, Payment, Penalties and Records' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'برای سال‌های پیش از 2020 شرکت‌ها دو اظهارنامه می‌دادند: **اظهارنامه موقت** ظرف 3 ماه و **اظهارنامه نهایی** ظرف 6 ماه پس از پایان سال. فرمان سلطانی 118/2020 برای سال‌های مالیاتی از 1 ژانویه 2020 به بعد این دو را به یک **اظهارنامه سالانه** تبدیل کرد که باید ظرف 4 ماه پس از پایان سال داده شود و مالیات هم همراه آن پرداخت شود. اگر در منابع قدیمی «اظهارنامه موقت» دیدید، بدانید که دیگر لازم نیست.',
            en: 'For years before 2020 companies filed two returns: a **provisional return** within 3 months and a **final return** within 6 months of the year-end. Royal Decree 118/2020 replaced them, for tax years starting on or after 1 January 2020, with a single **annual return** due within 4 months of the year-end, with the tax paid alongside it. If an older source mentions a provisional return, it no longer applies.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'تقویم مالیاتی برای سال مالی منتهی به 31 دسامبر 2026',
            en: 'Tax calendar for a financial year ending 31 December 2026',
          },
          head: [
            { fa: 'کار', en: 'Task' },
            { fa: 'مهلت', en: 'Deadline' },
            { fa: 'نکته', en: 'Note' },
          ],
          rows: [
            [
              { fa: 'واریز مالیات تکلیفی', en: 'Pay over withholding tax' },
              { fa: 'روز 14 ماه بعد', en: '14th of the following month' },
              {
                fa: 'از پایان ماهی که مبلغ پرداخت یا بستانکار شده (هرکدام زودتر)',
                en: 'From the end of the month the amount was paid or credited, whichever is earlier',
              },
            ],
            [
              { fa: 'اظهارنامه مؤسسات مشمول نرخ 3٪', en: 'Return for 3% small enterprises' },
              { fa: 'ظرف 3 ماه: 31 مارس 2027', en: 'Within 3 months: 31 March 2027' },
              { fa: 'همراه صورت سود و زیان ساده', en: 'With a simplified income statement' },
            ],
            [
              { fa: 'اظهارنامه سالانه شرکت‌های مشمول 15٪', en: 'Annual return for 15% taxpayers' },
              { fa: 'ظرف 4 ماه: 30 آوریل 2027', en: 'Within 4 months: 30 April 2027' },
              {
                fa: 'همراه صورت‌های مالی حسابرسی‌شده به امضای حسابرس ثبت‌شده در عمان',
                en: 'With financial statements audited by an Oman-registered auditor',
              },
            ],
            [
              { fa: 'پرداخت مالیات سال', en: 'Pay the year’s tax' },
              { fa: 'همراه اظهارنامه: 30 آوریل 2027', en: 'With the return: 30 April 2027' },
              {
                fa: 'تقسیط فقط با شرایط مقرر و تأیید قبلی سازمان',
                en: 'Instalments only if conditions are met and the Authority approves in advance',
              },
            ],
            [
              { fa: 'نگهداری سوابق', en: 'Keep records' },
              { fa: '10 سال پس از پایان دوره', en: '10 years after the end of the period' },
              { fa: 'دفاتر حسابداری و مدارک پشتیبان', en: 'Accounting records and supporting documents' },
            ],
          ],
        },
        {
          type: 'list',
          items: [
            {
              fa: '**دیرکرد پرداخت**: 1٪ در ماه روی مالیات پرداخت‌نشده، از سررسید تا روز پرداخت.',
              en: '**Late payment**: 1% a month on the unpaid tax, from the due date until it is paid.',
            },
            {
              fa: '**ندادن اظهارنامه**: جریمه 100 تا 2,000 ریال عمانی، به‌علاوه احتمال تشخیص برآوردی درآمد به‌وسیله سازمان.',
              en: '**Failure to file**: a penalty of OMR 100 to OMR 2,000, plus a possible estimated assessment by the Authority.',
            },
            {
              fa: '**اظهار کمتر از واقع**: جریمه 1٪ تا 25٪ تفاوت میان مالیات درست و مالیات اظهارشده.',
              en: '**Under-declaration**: a penalty of 1% to 25% of the difference between the correct tax and the tax declared.',
            },
            {
              fa: '**تمدید مهلت**: سازمان ممکن است به صلاحدید خود مهلت اظهارنامه را تمدید کند، اما این کار مهلت پرداخت را عقب نمی‌اندازد.',
              en: '**Extensions**: the Authority may extend the filing date at its discretion, but that does not defer payment.',
            },
          ],
        },
        { type: 'h', text: { fa: 'رسیدگی، مرور زمان و ثبت‌نام', en: 'Audits, time limits and registration' } },
        {
          type: 'list',
          items: [
            {
              fa: 'نظام **خوداظهاری** است: شرکت خودش مالیات را حساب و اظهار می‌کند و سازمان پرونده‌ها را به‌صورت نمونه‌ای رسیدگی می‌کند.',
              en: 'The system is **self-assessment**: the company computes and declares its own tax, and the Authority audits returns on a sample basis.',
            },
            {
              fa: '**مرور زمان**: سازمان معمولاً تا 3 سال پس از پایان سالی که اظهارنامه در آن داده شده می‌تواند مالیات را تشخیص دهد؛ اگر اظهارنامه داده نشده یا تقلب در کار باشد، این مهلت طولانی‌تر است.',
              en: '**Time limit**: the Authority can generally assess within 3 years from the end of the year in which the return was filed; the period is longer where no return was filed or there was fraud.',
            },
            {
              fa: '**استرداد**: درخواست استرداد مالیات اضافه‌پرداختی باید ظرف 5 سال از پایان سال مربوط داده شود.',
              en: '**Refunds**: a claim for overpaid tax must be made within 5 years of the end of the relevant tax year.',
            },
            {
              fa: '**ثبت‌نام و کارت مالیاتی**: همه دارندگان سجل تجاری باید برای مالیات بر درآمد ثبت‌نام کنند. **کارت مالیاتی** گواهی ثبت‌نام و انجام تعهدات مالیاتی است و طبق پرسش‌وپاسخ سازمان، دو سال اعتبار دارد.',
              en: '**Registration and tax card**: every holder of a commercial registration must register for income tax. The **tax card** proves registration and compliance and, per the Authority’s FAQ, is valid for two years.',
            },
          ],
        },
        { type: 'h', text: { fa: 'قیمت‌گذاری انتقالی', en: 'Transfer pricing' } },
        {
          type: 'p',
          text: {
            fa: 'وقتی مسار پترولیوم خدمات عمان از شرکت مادر یا شرکت‌های هم‌گروه خدمت می‌خرد، به آن‌ها بهره می‌پردازد یا به آن‌ها خدمت می‌فروشد، قانون می‌گوید مبلغ باید **با قیمت بازار** (اصل معامله مستقل یا arm’s length) باشد؛ یعنی همان قیمتی که دو شرکت مستقل با هم توافق می‌کردند. سازمان مالیات پرداخت‌های درون‌گروهی را با دقت بررسی می‌کند. قانون روش مشخصی برای تعیین قیمت بازار تعیین نکرده است، پس مستندسازی (قرارداد، مبنای محاسبه، مقایسه با بازار) اهمیت زیادی دارد. گروه‌های چندملیتی بزرگ از سال 2020 مشمول گزارش کشوربه‌کشور (CbCR) هم هستند.',
            en: 'When Masar Petroleum Oman Services buys services from its parent or other group companies, pays them interest or sells them services, the law requires the price to be **at arm’s length**: the price two independent companies would have agreed. The Tax Authority scrutinises inter-company payments closely. The law does not prescribe a specific method, so documentation (contract, basis of charge, market comparison) matters a great deal. Large multinational groups have also been subject to country-by-country reporting (CbCR) since 2020.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'چون اظهارنامه باید ظرف 4 ماه و همراه صورت‌های مالی حسابرسی‌شده داده شود، برنامه بستن حساب‌ها را طوری بچینید که حسابرسی پیش از پایان ماه چهارم تمام شود. کاربرگ مالیات را هم‌زمان با بستن حساب‌ها آماده کنید، نه بعد از گزارش حسابرس؛ و یک فهرست کنترل ماهانه برای مالیات تکلیفی داشته باشید.',
            en: 'Because the return is due within 4 months together with audited financial statements, plan the year-end close so the audit finishes before the end of the fourth month. Prepare the tax computation during the close, not after the audit report, and keep a monthly checklist for withholding tax.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'petroleum-epsa',
      title: { fa: 'درآمد نفتی و قراردادهای EPSA', en: 'Petroleum Income and EPSAs' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در عمان، شرکت‌های اکتشاف و تولید معمولاً با دولت **قرارداد اکتشاف و مشارکت در تولید (EPSA)** می‌بندند. در این نوع قرارداد، پیمانکار هزینه‌های اکتشاف و توسعه را می‌پردازد، هزینه‌هایش را از محل بخشی از تولید بازیافت می‌کند (**نفت هزینه** یا cost oil) و در باقی‌مانده تولید (**نفت سود** یا profit oil) با دولت شریک می‌شود. قانون مالیات برای درآمد حاصل از فروش نفت یک رژیم ویژه دارد.',
            en: 'In Oman, exploration and production companies usually sign an **Exploration and Production Sharing Agreement (EPSA)** with the government. The contractor funds exploration and development, recovers its costs from part of the production (**cost oil**) and shares the rest (**profit oil**) with the government. The tax law has a special regime for income from the sale of petroleum.',
          },
        },
        {
          type: 'diagram',
          id: 'cost-recovery',
          caption: {
            fa: 'طرح کلی تقسیم تولید در قراردادهای مشارکت در تولید. جزئیات (وجود یا نبود بهره مالکانه، سقف نفت هزینه، نسبت تقسیم) در هر قرارداد فرق می‌کند و اعداد نمودار فرضی‌اند.',
            en: 'The general production split under a production sharing contract. The details (whether there is a royalty, the cost-oil cap, the split) differ by contract, and the figures are illustrative.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: 'نرخ مالیات بر درآمد حاصل از فروش نفت **55٪** است.',
              en: 'The tax rate on income from the sale of petroleum is **55%**.',
            },
            {
              fa: 'این نرخ روی درآمدی اعمال می‌شود که **طبق همان قرارداد EPSA** تعیین می‌شود؛ هر قرارداد روش محاسبه درآمد مشمول و تسویه مالیات را مشخص می‌کند.',
              en: 'The rate applies to income as determined **under that EPSA**; each agreement sets how taxable income is computed and how the tax is settled.',
            },
            {
              fa: 'طبق این قراردادها، **دولت مالیات پیمانکار را از سهم خودش از تولید می‌پردازد**؛ به همین دلیل بار مالیات در عمل بر دوش پیمانکار نیست.',
              en: 'Under these agreements **the government pays the contractor’s tax out of its own share of production**, so in practice the contractor does not bear the tax.',
            },
            {
              fa: 'این رژیم فقط برای درآمد نفتی تحت قرارداد است؛ برای هر درآمد دیگر پیمانکار، بررسی کنید کدام قاعده قانون اعمال می‌شود.',
              en: 'The regime covers only petroleum income under the agreement; for any other income of the contractor, check which rule of the law applies.',
            },
          ],
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'پیمانکار EPSA (اکتشاف و تولید)', en: 'EPSA contractor (exploration and production)' },
            items: [
              { fa: 'درآمد فروش نفت طبق قرارداد، با نرخ 55٪', en: 'Petroleum sales income under the agreement, at 55%' },
              { fa: 'دولت مالیات را از سهم خود تسویه می‌کند', en: 'The government settles the tax from its own share' },
              {
                fa: 'هزینه‌ها باید با موضوع هزینه درست (چاه، AFE، مرکز هزینه) ثبت شوند تا طبق قرارداد قابل بازیافت باشند',
                en: 'Costs must carry the right cost object (well, AFE, cost centre) to be recoverable under the agreement',
              },
              {
                fa: 'نحوه نمایش مالیات در صورت‌های مالی طبق رویه گروه و نظر حسابرس',
                en: 'Presentation of the tax in the financial statements follows group policy and the auditor’s view',
              },
            ],
          },
          right: {
            title: { fa: 'شرکت خدمات نفتی (مثل مسار پترولیوم خدمات عمان)', en: 'Oilfield services company (such as Masar Petroleum Oman Services)' },
            items: [
              { fa: 'درآمد پیمانکاری از اپراتورها، با نرخ عمومی 15٪', en: 'Contract income from operators, at the standard 15%' },
              { fa: 'خودش مالیات را حساب، اظهار و پرداخت می‌کند', en: 'Computes, files and pays its own tax' },
              {
                fa: 'هنگام پرداخت به پیمانکاران فرعی خارجی بدون مقر دائم، مالیات تکلیفی 10٪ را کسر می‌کند',
                en: 'Withholds 10% when paying foreign subcontractors with no PE',
              },
              {
                fa: 'استهلاک مالیاتی تجهیزات حفاری، وسایل نقلیه و ماشین‌آلات با نرخ‌های قانونی',
                en: 'Claims tax depreciation on drilling equipment, vehicles and machinery at the legal rates',
              },
            ],
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'چون دولت مالیات پیمانکار را از سهم خود می‌پردازد، شرکت‌ها برای نمایش آن رویه‌های متفاوتی دارند: بعضی مالیات پرداخت‌شده از طرف خود را هم به‌عنوان درآمد و هم به‌عنوان هزینه مالیات نشان می‌دهند و بعضی هیچ‌کدام را نشان نمی‌دهند. رویه را از سیاست‌های حسابداری گروه و حسابرس بگیرید و در یادداشت‌ها افشا کنید. مدارک تسویه مالیات را هم نگه دارید، چون ممکن است برای ادعای اعتبار مالیاتی در کشور شرکت مادر لازم شود.',
            en: 'Because the government pays the contractor’s tax from its own share, companies present it in different ways: some show the tax paid on their behalf both as revenue and as tax expense, others show neither. Take the policy from the group accounting manual and the auditor, and disclose it in the notes. Keep the evidence of tax settlement, because it may be needed to claim a foreign tax credit in the parent company’s country.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'دو رژیم را قاطی نکنید', en: 'Do not mix the two regimes' },
          text: {
            fa: 'شرکت خدماتی که برای اپراتور یک قرارداد EPSA کار می‌کند، طرف آن قرارداد نیست: مشمول 55٪ نیست و دولت هم مالیاتش را نمی‌پردازد. نرخ 55٪ و تسویه از سهم دولت فقط برای طرف‌های خود قرارداد EPSA است.',
            en: 'A service company working for an EPSA operator is not a party to that agreement: it is not taxed at 55%, and the government does not pay its tax. The 55% rate and settlement from the government’s share apply only to the parties to the EPSA itself.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'accounting-erp',
      title: { fa: 'حسابداری مالیات در ERP', en: 'Accounting for Tax in the ERP' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'طبق استاندارد IAS 12، هزینه مالیات بر درآمد در صورت سود و زیان دو جزء دارد: **مالیات جاری**، یعنی مالیاتی که برای همین سال به سازمان بدهکاریم، و **مالیات انتقالی** (معوق)، یعنی اثر مالیاتی تفاوت‌های موقتی که در سال‌های آینده برمی‌گردند. در سیستم ERP، ماژول مالی، ماژول دارایی‌های ثابت و ماژول پرداختنی‌ها هرکدام بخشی از این کار را انجام می‌دهند.',
            en: 'Under IAS 12, income tax expense in the income statement has two parts: **current tax**, the tax we owe the Authority for this year, and **deferred tax**, the tax effect of temporary differences that will reverse in future years. In the ERP, the Finance, Fixed Assets and Payables modules each carry part of the work.',
          },
        },
        { type: 'h', text: { fa: 'داده‌های پایه و تنظیمات', en: 'Master data and set-up' } },
        {
          type: 'table',
          head: [
            { fa: 'داده پایه یا تنظیم', en: 'Master data or setting' },
            { fa: 'چه چیزی نگه می‌دارد', en: 'What it holds' },
            { fa: 'چرا مهم است', en: 'Why it matters' },
          ],
          rows: [
            [
              { fa: 'حساب‌های کل مالیات', en: 'Tax general-ledger accounts' },
              {
                fa: 'هزینه مالیات جاری، هزینه مالیات انتقالی، مالیات بر درآمد پرداختنی، مالیات تکلیفی پرداختنی، دارایی و بدهی مالیات انتقالی',
                en: 'Current tax expense, deferred tax expense, income tax payable, WHT payable, deferred tax asset and liability',
              },
              { fa: 'هر جزء مالیات جدا دیده و تطبیق می‌شود', en: 'Each part of the tax is seen and reconciled separately' },
            ],
            [
              { fa: 'داده پایه تأمین‌کننده', en: 'Supplier master data' },
              {
                fa: 'مقیم یا غیرمقیم، داشتن مقر دائم، کد مالیات تکلیفی (خدمات، حق امتیاز، مدیریت)، گواهی اقامت مالیاتی و تاریخ اعتبار آن',
                en: 'Resident or non-resident, PE status, WHT code (services, royalties, management fees), tax residence certificate and its expiry date',
              },
              {
                fa: 'سیستم هنگام ثبت فاکتور 10٪ را خودکار کسر می‌کند',
                en: 'The system deducts the 10% automatically when the invoice is posted',
              },
            ],
            [
              { fa: 'دفتر استهلاک مالیاتی در ماژول دارایی ثابت', en: 'Tax depreciation book in Fixed Assets' },
              {
                fa: 'گروه مالیاتی هر دارایی (مثلاً گروه 2، تجهیزات حفاری، 10٪)؛ بسیاری از ERPها، مثلاً SAP، به آن ناحیه استهلاک می‌گویند',
                en: 'Each asset’s tax class (for example Pool 2, drilling equipment, 10%); many ERPs, SAP for example, call this a depreciation area',
              },
              {
                fa: 'استهلاک مالیاتی و مبنای مالیاتی بدون کار دستی به دست می‌آید',
                en: 'Tax depreciation and tax base come out without manual work',
              },
            ],
            [
              { fa: 'نگاشت حساب‌ها به ردیف‌های کاربرگ مالیات', en: 'Mapping of accounts to tax computation lines' },
              {
                fa: 'مثلاً حساب «جریمه‌ها» به ردیف «غیرقابل قبول»',
                en: 'For example the “Fines” account to the “non-deductible” line',
              },
              {
                fa: 'کاربرگ مالیات مستقیم از تراز آزمایشی ساخته می‌شود',
                en: 'The tax computation is built straight from the trial balance',
              },
            ],
            [
              { fa: 'موضوع هزینه (مرکز هزینه، AFE، چاه)', en: 'Cost object (cost centre, AFE, well)' },
              { fa: 'هزینه کجا و برای چه ایجاد شده است', en: 'Where and why the cost arose' },
              {
                fa: 'پشتیبان کسر هزینه در مالیات و بازیافت هزینه در قراردادهای نفتی',
                en: 'Supports the tax deduction and cost recovery under petroleum agreements',
              },
            ],
          ],
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'حسابدار مالیات', en: 'Tax accountant' },
              text: {
                fa: 'کاربرگ مالیات را از تراز آزمایشی و دفتر استهلاک مالیاتی می‌سازد و جدول تفاوت‌های موقت را تهیه می‌کند.',
                en: 'Builds the tax computation from the trial balance and the tax depreciation book, and prepares the temporary differences schedule.',
              },
            },
            {
              title: { fa: 'مدیر مالی', en: 'Finance manager' },
              text: {
                fa: 'تعدیل‌ها و مدارک پشتیبان را بازبینی می‌کند.',
                en: 'Reviews the adjustments and the supporting documents.',
              },
            },
            {
              title: { fa: 'گردش کار تأیید', en: 'Approval workflow' },
              text: {
                fa: 'سند ذخیره مالیات جاری و انتقالی پس از تأیید مدیر مالی ارشد در ماژول مالی ثبت می‌شود.',
                en: 'The current and deferred tax journals are posted in Finance after the CFO approves them.',
              },
            },
            {
              title: { fa: 'خزانه‌داری', en: 'Treasury' },
              text: {
                fa: 'مالیات را پیش از مهلت از درگاه سازمان می‌پردازد و سند پرداخت ثبت می‌شود.',
                en: 'Pays the tax through the Authority’s portal before the deadline, and the payment is posted.',
              },
            },
            {
              title: { fa: 'تطبیق', en: 'Reconciliation' },
              text: {
                fa: 'مانده مالیات پرداختنی و مالیات تکلیفی پرداختنی هر ماه با اظهارنامه‌ها و رسیدهای سازمان تطبیق داده می‌شود.',
                en: 'Income tax payable and WHT payable are reconciled monthly to the returns and the Authority’s receipts.',
              },
            },
          ],
        },
        {
          type: 'journal',
          title: { fa: 'مالیات جاری مسار پترولیوم خدمات عمان', en: 'Current tax of Masar Petroleum Oman Services' },
          entries: [
            {
              date: { fa: '31 دسامبر 2026', en: '31 Dec 2026' },
              lines: [
                { account: ac.curTaxExp, debit: 165000 },
                { account: ac.taxPayable, credit: 165000 },
              ],
              memo: { fa: 'ذخیره مالیات سال 2026 طبق کاربرگ مالیات', en: 'Tax provision for 2026 per the tax computation' },
            },
            {
              date: { fa: '28 آوریل 2027', en: '28 Apr 2027' },
              lines: [
                { account: ac.taxPayable, debit: 165000 },
                { account: ac.bank, credit: 165000 },
              ],
              memo: {
                fa: 'پرداخت همراه اظهارنامه سالانه، پیش از مهلت 30 آوریل',
                en: 'Paid with the annual return, before the 30 April deadline',
              },
            },
          ],
        },
        {
          type: 'journal',
          title: {
            fa: 'سندهایی که ERP برای فاکتور خدمات خارجی ثبت می‌کند',
            en: 'The entries the ERP posts for a foreign service invoice',
          },
          entries: [
            {
              date: { fa: '18 مارس 2026', en: '18 Mar 2026' },
              lines: [
                { account: ac.engExp, debit: 200000 },
                { account: ac.apForeign, credit: 180000 },
                { account: ac.whtPayable, credit: 20000 },
              ],
              memo: {
                fa: 'ثبت فاکتور؛ کد مالیات تکلیفی خدمات 10٪ از داده پایه تأمین‌کننده می‌آید',
                en: 'Invoice posted; the 10% services WHT code comes from the supplier master',
              },
            },
            {
              date: { fa: '2 آوریل 2026', en: '2 Apr 2026' },
              lines: [
                { account: ac.apForeign, debit: 180000 },
                { account: ac.bank, credit: 180000 },
              ],
              memo: { fa: 'پرداخت خالص به تأمین‌کننده', en: 'Net payment to the supplier' },
            },
            {
              date: { fa: '12 آوریل 2026', en: '12 Apr 2026' },
              lines: [
                { account: ac.whtPayable, debit: 20000 },
                { account: ac.bank, credit: 20000 },
              ],
              memo: {
                fa: 'واریز به سازمان مالیات پیش از مهلت 14 آوریل',
                en: 'Paid to the Tax Authority before the 14 April deadline',
              },
            },
          ],
        },
        { type: 'h', text: { fa: 'مالیات انتقالی (IAS 12): یک مقدمه ساده', en: 'Deferred tax (IAS 12): a simple introduction' } },
        {
          type: 'p',
          text: {
            fa: '**مبلغ دفتری** یک دارایی، مانده آن در دفاتر است. **مبنای مالیاتی** مبلغی است که قانون مالیات برای آن دارایی می‌شناسد؛ برای تجهیزات یعنی بهای تمام‌شده منهای استهلاک مالیاتی. اختلاف این دو **تفاوت موقت** است، چون در طول عمر دارایی از بین می‌رود. اگر مبلغ دفتری دارایی از مبنای مالیاتی بیشتر باشد، در آینده مالیات بیشتری می‌دهیم و **بدهی مالیات انتقالی** داریم؛ اگر کمتر باشد، **دارایی مالیات انتقالی** داریم. اقلامی مثل جریمه که هرگز قابل کسر نیستند **تفاوت دائمی** هستند و مالیات انتقالی ندارند.',
            en: 'An asset’s **carrying amount** is its balance in the books. Its **tax base** is the amount tax law recognises for it; for equipment, cost less tax depreciation. The gap between the two is a **temporary difference**, because it disappears over the asset’s life. If an asset’s carrying amount is above its tax base, we will pay more tax later and have a **deferred tax liability**; if it is below, we have a **deferred tax asset**. Items that are never deductible, such as fines, are **permanent differences** and carry no deferred tax.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'مالیات انتقالی = تفاوت موقت × نرخ مالیات',
            en: 'Deferred tax = Temporary difference × Tax rate',
          },
          note: {
            fa: 'نرخی که انتظار می‌رود هنگام برگشت تفاوت اعمال شود؛ در این مثال 15٪. هزینه کل مالیات = مالیات جاری + مالیات انتقالی.',
            en: 'The rate expected to apply when the difference reverses; 15% here. Total tax expense = current tax + deferred tax.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'مالیات انتقالی تجهیزات کارگاهی در پایان 2026',
            en: 'Deferred tax on the workshop equipment at the end of 2026',
          },
          head: [
            { fa: 'شرح', en: 'Item' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          numericCols: [1],
          rows: [
            [{ fa: 'مبلغ دفتری (400,000 منهای 40,000)', en: 'Carrying amount (400,000 less 40,000)' }, 360000],
            [{ fa: 'مبنای مالیاتی (400,000 منهای 60,000)', en: 'Tax base (400,000 less 60,000)' }, 340000],
            [{ fa: 'تفاوت موقت مشمول مالیات', en: 'Taxable temporary difference' }, 20000],
            [{ fa: 'بدهی مالیات انتقالی (20,000 × 15٪)', en: 'Deferred tax liability (20,000 × 15%)' }, 3000],
          ],
        },
        {
          type: 'journal',
          title: { fa: 'ثبت بدهی مالیات انتقالی', en: 'Recording the deferred tax liability' },
          entries: [
            {
              date: { fa: '31 دسامبر 2026', en: '31 Dec 2026' },
              lines: [
                { account: ac.defTaxExp, debit: 3000 },
                { account: ac.dtl, credit: 3000 },
              ],
              memo: {
                fa: 'امسال مالیات کمتری پرداختیم؛ این بدهی در سال‌های بعد که استهلاک مالیاتی کمتر می‌شود برمی‌گردد',
                en: 'Less tax was paid this year; the liability reverses in later years when tax depreciation is lower',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'نمونه دارایی مالیات انتقالی', en: 'A deferred tax asset example' },
          text: {
            fa: 'ذخیره قطعات یدکی راکد (45,000) امسال در دفاتر هزینه شده، اما از نظر مالیاتی فقط وقتی قابل کسر است که قطعات واقعاً حذف شوند. پس مبلغ دفتری موجودی از مبنای مالیاتی آن کمتر است و یک تفاوت موقت قابل کسر داریم: دارایی مالیات انتقالی = 45,000 × 15٪ = 6,750 (بدهکار دارایی مالیات انتقالی، بستانکار هزینه مالیات انتقالی). دارایی مالیات انتقالی فقط وقتی شناسایی می‌شود که سود مشمول مالیات کافی در آینده محتمل باشد.',
            en: 'The 45,000 provision for slow-moving spares is an expense in the books this year, but for tax it is deductible only when the spares are actually written off. So the inventory’s carrying amount is below its tax base, a deductible temporary difference: deferred tax asset = 45,000 × 15% = 6,750 (debit Deferred tax asset, credit Deferred tax expense). A deferred tax asset is recognised only when enough future taxable profit is probable.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'آنچه ERP خودکار ثبت می‌کند: سند مالیات تکلیفی هنگام ثبت فاکتور، و استهلاک هر دو دفتر دفتری و مالیاتی. آنچه معمولاً دستی است: سند مالیات جاری و مالیات انتقالی که از کاربرگ مالیات و جدول تفاوت‌های موقت می‌آید و با گردش کار تأیید ثبت می‌شود. اگر خدمت خارجی بخشی از یک پروژه سرمایه‌ای باشد، به‌جای حساب هزینه، دارایی در جریان تکمیل با کد پروژه (AFE) بدهکار می‌شود؛ مالیات تکلیفی همان است.',
            en: 'What the ERP posts automatically: the WHT entry when the invoice is posted, and depreciation in both the book and the tax books. What is usually manual: the current and deferred tax journals, which come from the tax computation and the temporary differences schedule and go through the approval workflow. If the foreign service is part of a capital project, the debit goes to assets under construction with the project (AFE) code instead of an expense; the WHT is the same.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'mistakes-practice',
      title: { fa: 'اشتباه‌های رایج و تمرین', en: 'Common Mistakes and Practice' },
      blocks: [
        { type: 'h', text: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' } },
        {
          type: 'list',
          items: [
            {
              fa: '**ضرب 15٪ در سود حسابداری.** همیشه از کاربرگ تعدیل شروع کنید: هزینه‌های غیرقابل قبول، درآمدهای معاف، استهلاک مالیاتی و زیان‌ها.',
              en: '**Multiplying accounting profit by 15%.** Always work through the adjustments: non-deductible expenses, exempt income, tax depreciation and losses.',
            },
            {
              fa: '**کسر ذخیره‌ها در همان سال.** ذخیره مطالبات و کالای راکد تا حذف واقعی قابل قبول نیست.',
              en: '**Deducting provisions when booked.** Doubtful-debt and slow-moving stock provisions are not deductible until the actual write-off.',
            },
            {
              fa: '**فراموش کردن مالیات تکلیفی** روی فاکتورهای خدمات، نرم‌افزار و حق‌الزحمه مدیریت خارجی، یا پرداخت کامل فاکتور به طرف خارجی؛ در این صورت 10٪ از منابع خود شرکت پرداخت می‌شود.',
              en: '**Forgetting WHT** on foreign service, software and management-fee invoices, or paying the foreign party in full; the 10% then comes out of the company’s own funds.',
            },
            {
              fa: '**شمردن مهلت از تاریخ پرداخت** وقتی فاکتور زودتر بستانکار شده است. مهلت از پایان ماهی شمرده می‌شود که هرکدام زودتر رخ داده است.',
              en: '**Counting the deadline from the payment date** when the invoice was credited earlier. The clock runs from the end of the month of whichever came first.',
            },
            {
              fa: '**استفاده از زیان قدیمی‌تر از 5 سال** یا انتقال زیان به سال‌های قبل.',
              en: '**Using losses older than 5 years**, or carrying losses back.',
            },
            {
              fa: '**اعمال نرخ 55٪ به شرکت خدماتی** یا این فرض که دولت مالیات آن را می‌پردازد.',
              en: '**Applying 55% to a service company**, or assuming the government pays its tax.',
            },
            {
              fa: '**یک دفتر استهلاک برای همه چیز.** بدون دفتر مالیاتی جدا در ERP، استهلاک مالیاتی و مالیات انتقالی دستی و پرخطا حساب می‌شود.',
              en: '**One depreciation book for everything.** Without a separate tax book in the ERP, tax depreciation and deferred tax become manual and error-prone.',
            },
            {
              fa: '**مالیات انتقالی برای تفاوت‌های دائمی** مثل جریمه‌ها.',
              en: '**Deferred tax on permanent differences** such as fines.',
            },
            {
              fa: '**تکیه بر منابع قدیمی**: اظهارنامه موقت از سال 2020 حذف شده و مالیات تکلیفی سود سهام و بهره معلق است.',
              en: '**Relying on old sources**: the provisional return was abolished from 2020, and WHT on dividends and interest is suspended.',
            },
          ],
        },
        { type: 'h', text: { fa: 'تمرین‌ها', en: 'Exercises' } },
        {
          type: 'exercise',
          title: { fa: 'مالیات تکلیفی فاکتور خدمات خارجی', en: 'Withholding on a foreign service invoice' },
          difficulty: 'easy',
          problem: {
            fa: 'مسار پترولیوم خدمات عمان از یک شرکت خارجی که در عمان مقر دائم ندارد و کشورش با عمان پیمان مالیاتی ندارد، خدمات پردازش داده‌های آزمایش چاه برای یکی از میدان‌های عمان خریده است. فاکتور 80,000 در 20 مارس 2026 در ERP ثبت شد و مبلغ در 5 آوریل 2026 پرداخت شد. (الف) مالیات تکلیفی و مبلغ پرداختی به شرکت خارجی را حساب کنید. (ب) آخرین مهلت واریز مالیات را تعیین کنید. (ج) سه سند لازم را بنویسید.',
            en: 'Masar Petroleum Oman Services bought well-test data processing for an Omani field from a foreign company that has no PE in Oman and whose country has no tax treaty with Oman. The 80,000 invoice was posted in the ERP on 20 March 2026 and paid on 5 April 2026. (a) Compute the WHT and the amount paid to the foreign company. (b) Find the last day to pay the WHT over. (c) Write the three entries.',
          },
          hint: {
            fa: 'پرداخت یا بستانکار کردن تأمین‌کننده: کدام زودتر رخ داده است؟',
            en: 'Payment or crediting the supplier: which came first?',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'آیا مشمول است؟', en: 'Is it caught?' },
                  text: {
                    fa: 'دریافت‌کننده غیرمقیم و بدون مقر دائم است، خدمت به میدانی در عمان مربوط است و در فهرست مستثناها نیست، و پیمانی هم وجود ندارد. پس نرخ 10٪ است.',
                    en: 'The payee is a non-resident with no PE, the service relates to a field in Oman and is not excluded, and there is no treaty. So the rate is 10%.',
                  },
                },
                {
                  title: { fa: 'محاسبه', en: 'Compute' },
                  text: {
                    fa: 'مالیات تکلیفی = 80,000 × 10٪ = 8,000. پرداخت به شرکت خارجی = 80,000 − 8,000 = 72,000.',
                    en: 'WHT = 80,000 × 10% = 8,000. Payment to the foreign company = 80,000 − 8,000 = 72,000.',
                  },
                },
                {
                  title: { fa: 'مهلت', en: 'Deadline' },
                  text: {
                    fa: 'فاکتور در 20 مارس بستانکار شده که زودتر از پرداخت (5 آوریل) است. پس مهلت 14 روز پس از پایان مارس، یعنی 14 آوریل 2026 است.',
                    en: 'The supplier was credited on 20 March, before the 5 April payment. So the deadline is 14 days after the end of March: 14 April 2026.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: '20 مارس 2026', en: '20 Mar 2026' },
                  lines: [
                    { account: ac.wellTestExp, debit: 80000 },
                    { account: ac.apForeign, credit: 72000 },
                    { account: ac.whtPayable, credit: 8000 },
                  ],
                  memo: { fa: 'ثبت فاکتور با کسر 10٪', en: 'Invoice posted with 10% withheld' },
                },
                {
                  date: { fa: '5 آوریل 2026', en: '5 Apr 2026' },
                  lines: [
                    { account: ac.apForeign, debit: 72000 },
                    { account: ac.bank, credit: 72000 },
                  ],
                  memo: { fa: 'پرداخت خالص', en: 'Net payment' },
                },
                {
                  date: { fa: '10 آوریل 2026', en: '10 Apr 2026' },
                  lines: [
                    { account: ac.whtPayable, debit: 8000 },
                    { account: ac.bank, credit: 8000 },
                  ],
                  memo: { fa: 'واریز به سازمان مالیات', en: 'Paid over to the Tax Authority' },
                },
              ],
            },
          ],
          answer: {
            fa: 'مالیات تکلیفی 8,000؛ پرداخت به شرکت خارجی 72,000؛ مهلت واریز 14 آوریل 2026.',
            en: 'WHT 8,000; payment to the foreign company 72,000; pay-over deadline 14 April 2026.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'درآمد مشمول مالیات و مالیات سال', en: 'Taxable income and the year’s tax' },
          difficulty: 'medium',
          problem: {
            fa: 'شرکت خدمات چاه واحه (یک شرکت با مسئولیت محدود عمانی، نرخ 15٪) برای سال 2026 اطلاعات زیر را دارد. درآمد مشمول مالیات و مالیات جاری را حساب کنید.',
            en: 'Waha Well Services LLC (an Omani LLC taxed at 15%) has the following data for 2026. Compute its taxable income and current tax.',
          },
          given: {
            head: [
              { fa: 'قلم', en: 'Item' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            numericCols: [1],
            rows: [
              [{ fa: 'سود قبل از مالیات', en: 'Profit before tax' }, 500000],
              [{ fa: 'استهلاک دفتری', en: 'Book depreciation' }, 120000],
              [{ fa: 'استهلاک مالیاتی طبق نرخ‌های قانونی', en: 'Tax depreciation at the legal rates' }, 150000],
              [{ fa: 'ذخیره مطالبات مشکوک‌الوصول (هزینه امسال)', en: 'Allowance for doubtful accounts (this year’s charge)' }, 18000],
              [{ fa: 'مطالباتی که امسال از محل ذخیره واقعاً حذف شد', en: 'Receivables actually written off this year against the allowance' }, 6000],
              [{ fa: 'جریمه‌های راهنمایی و رانندگی و زیست‌محیطی', en: 'Traffic and environmental fines' }, 4000],
              [{ fa: 'کمک به یک نهاد خیریه مجاز عمانی (زیر سقف 5٪)', en: 'Donation to an approved Omani charity (within the 5% cap)' }, 15000],
              [{ fa: 'سود سهام دریافتی از یک شرکت عمانی (در سود منظور شده)', en: 'Dividend from an Omani company (included in profit)' }, 10000],
              [{ fa: 'زیان مالیاتی استفاده‌نشده سال 2019', en: 'Unused tax loss from 2019' }, 30000],
              [{ fa: 'زیان مالیاتی استفاده‌نشده سال 2023', en: 'Unused tax loss from 2023' }, 20000],
            ],
          },
          hint: {
            fa: 'کمک مجاز زیر سقف، هم در سود کسر شده و هم قابل قبول است. زیان 2019 تا کدام سال قابل استفاده بود؟',
            en: 'An approved donation within the cap is already deducted in profit and is allowed. Until which year could the 2019 loss be used?',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'شرح', en: 'Item' },
                { fa: 'مبلغ', en: 'Amount' },
                { fa: 'اثر', en: 'Effect' },
              ],
              numericCols: [1],
              rows: [
                [{ fa: 'سود قبل از مالیات', en: 'Profit before tax' }, 500000, { fa: 'نقطه شروع', en: 'Start' }],
                [{ fa: 'استهلاک دفتری', en: 'Book depreciation' }, 120000, { fa: 'اضافه', en: 'Add' }],
                [{ fa: 'ذخیره مطالبات مشکوک‌الوصول', en: 'Doubtful-debt allowance charge' }, 18000, { fa: 'اضافه', en: 'Add' }],
                [{ fa: 'جریمه‌ها', en: 'Fines' }, 4000, { fa: 'اضافه', en: 'Add' }],
                [{ fa: 'استهلاک مالیاتی', en: 'Tax depreciation' }, 150000, { fa: 'کسر', en: 'Deduct' }],
                [{ fa: 'مطالبات حذف‌شده', en: 'Receivables written off' }, 6000, { fa: 'کسر', en: 'Deduct' }],
                [{ fa: 'سود سهام معاف', en: 'Exempt dividend' }, 10000, { fa: 'کسر', en: 'Deduct' }],
                [
                  { fa: 'جمع: درآمد مشمول پیش از زیان', en: 'Total: taxable income before losses' },
                  476000,
                  { fa: '500,000 + 142,000 − 166,000', en: '500,000 + 142,000 − 166,000' },
                ],
                [{ fa: 'زیان سال 2023', en: '2023 loss' }, 20000, { fa: 'کسر', en: 'Deduct' }],
                [{ fa: 'خالص درآمد مشمول مالیات', en: 'Net taxable income' }, 456000, { fa: 'نتیجه', en: 'Result' }],
                [{ fa: 'مالیات جاری (15٪)', en: 'Current tax (15%)' }, 68400, { fa: '456,000 × 15٪', en: '456,000 × 15%' }],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'کمک 15,000 به نهاد مجاز زیر سقف است و در سود قبل از مالیات کسر شده؛ پس تعدیلی لازم ندارد. زیان 2019 فقط تا سال 2024 قابل استفاده بود و منقضی شده است؛ زیان 2023 تا سال 2028 مهلت دارد.',
                en: 'The 15,000 donation to an approved body is within the cap and already deducted in profit before tax, so it needs no adjustment. The 2019 loss could be used only up to 2024 and has expired; the 2023 loss is usable until 2028.',
              },
            },
          ],
          answer: {
            fa: 'درآمد مشمول مالیات 456,000 و مالیات جاری 68,400.',
            en: 'Taxable income 456,000; current tax 68,400.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'استهلاک مالیاتی و دارایی مالیات انتقالی', en: 'Tax depreciation and a deferred tax asset' },
          difficulty: 'medium',
          problem: {
            fa: 'شرکت دکل‌های تعمیر چاه صحرا (نرخ 15٪) در 1 ژانویه 2026 قطعات یک دکل تعمیر چاه را به بهای 500,000 خرید و به کار گرفت. از نظر مالیاتی این قطعات «تجهیزات حفاری» (گروه 2، نرخ 10٪) هستند. در دفاتر، عمر مفید 8 سال و ارزش اسقاط صفر است. (الف) استهلاک دفتری و مالیاتی سال 2026 را حساب کنید. (ب) اثر آن بر درآمد مشمول مالیات چیست؟ (ج) تفاوت موقت و مالیات انتقالی را تعیین کنید و بگویید دارایی است یا بدهی. (د) سند مالیات انتقالی را بنویسید.',
            en: 'Sahra Workover Rigs LLC (taxed at 15%) bought and started using workover-rig components for 500,000 on 1 January 2026. For tax they are “drilling equipment” (Pool 2, 10%). In the books the useful life is 8 years with no residual value. (a) Compute 2026 book and tax depreciation. (b) What is the effect on taxable income? (c) Find the temporary difference and the deferred tax, and say whether it is an asset or a liability. (d) Write the deferred tax entry.',
          },
          hint: {
            fa: 'اینجا استهلاک دفتری از استهلاک مالیاتی بیشتر است.',
            en: 'Here book depreciation is higher than tax depreciation.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'شرح', en: 'Item' },
                { fa: 'دفتری', en: 'Book' },
                { fa: 'مالیاتی', en: 'Tax' },
              ],
              numericCols: [1, 2],
              rows: [
                [{ fa: 'بهای تمام‌شده', en: 'Cost' }, 500000, 500000],
                [{ fa: 'استهلاک 2026 (500,000 ÷ 8؛ 500,000 × 10٪)', en: '2026 depreciation (500,000 ÷ 8; 500,000 × 10%)' }, 62500, 50000],
                [{ fa: 'مانده پایان 2026', en: 'Balance at end of 2026' }, 437500, 450000],
              ],
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'اثر بر درآمد مشمول', en: 'Effect on taxable income' },
                  text: {
                    fa: '62,500 برگشت داده می‌شود و 50,000 کسر می‌شود؛ پس درآمد مشمول 12,500 افزایش می‌یابد و مالیات جاری 12,500 × 15٪ = 1,875 بیشتر می‌شود.',
                    en: '62,500 is added back and 50,000 deducted, so taxable income rises by 12,500 and current tax by 12,500 × 15% = 1,875.',
                  },
                },
                {
                  title: { fa: 'تفاوت موقت', en: 'Temporary difference' },
                  text: {
                    fa: 'مبلغ دفتری 437,500 از مبنای مالیاتی 450,000 کمتر است؛ تفاوت موقت قابل کسر 12,500 داریم. این مبلغ در سال‌های آینده به‌صورت استهلاک مالیاتی بیشتر کسر می‌شود.',
                    en: 'The 437,500 carrying amount is below the 450,000 tax base: a deductible temporary difference of 12,500, which will be deducted as extra tax depreciation in later years.',
                  },
                },
                {
                  title: { fa: 'مالیات انتقالی', en: 'Deferred tax' },
                  text: {
                    fa: 'دارایی مالیات انتقالی = 12,500 × 15٪ = 1,875 (با فرض اینکه سود مشمول آینده محتمل است).',
                    en: 'Deferred tax asset = 12,500 × 15% = 1,875 (assuming future taxable profit is probable).',
                  },
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: '31 دسامبر 2026', en: '31 Dec 2026' },
                  lines: [
                    { account: ac.dta, debit: 1875 },
                    { account: ac.defTaxInc, credit: 1875 },
                  ],
                  memo: {
                    fa: 'مالیات جاری 1,875 بیشتر و مالیات انتقالی 1,875 کمتر؛ هزینه کل مالیات تغییری نمی‌کند',
                    en: 'Current tax up 1,875 and deferred tax down 1,875; total tax expense is unchanged',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: 'استهلاک دفتری 62,500 و مالیاتی 50,000؛ دارایی مالیات انتقالی 1,875.',
            en: 'Book depreciation 62,500 and tax depreciation 50,000; deferred tax asset 1,875.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'مالیات جاری، مالیات انتقالی و سندهای پایان سال', en: 'Current tax, deferred tax and year-end entries' },
          difficulty: 'hard',
          problem: {
            fa: 'شرکت خدمات تراکم گاز نجم (یک شرکت با مسئولیت محدود عمانی، نرخ 15٪) فعالیتش را در سال 2026 شروع کرده و مانده افتتاحیه مالیات انتقالی ندارد. (الف) درآمد مشمول و مالیات جاری را حساب کنید. (ب) مالیات انتقالی هر تفاوت را تعیین کنید. (ج) هزینه کل مالیات و نرخ مؤثر را حساب کنید. (د) سندهای پایان سال را بنویسید. (هـ) جواب را با یک آزمون ساده کنترل کنید.',
            en: 'Najm Gas Compression Services LLC (an Omani LLC taxed at 15%) started business in 2026 and has no opening deferred tax balances. (a) Compute taxable income and current tax. (b) Find the deferred tax on each difference. (c) Compute total tax expense and the effective rate. (d) Write the year-end entries. (e) Check the answer with a simple test.',
          },
          given: {
            head: [
              { fa: 'قلم', en: 'Item' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            numericCols: [1],
            rows: [
              [{ fa: 'سود قبل از مالیات', en: 'Profit before tax' }, 800000],
              [{ fa: 'استهلاک دفتری (همه دارایی‌ها امسال خریده شده‌اند)', en: 'Book depreciation (all assets bought this year)' }, 200000],
              [{ fa: 'استهلاک مالیاتی', en: 'Tax depreciation' }, 260000],
              [{ fa: 'ذخیره قطعات یدکی راکد (هنوز چیزی حذف نشده)', en: 'Provision for slow-moving spares (nothing written off yet)' }, 40000],
              [{ fa: 'جریمه یک نهاد دولتی', en: 'Fine from a government body' }, 10000],
            ],
          },
          hint: {
            fa: 'جریمه تفاوت دائمی است. برای کنترل، (سود قبل از مالیات + تفاوت‌های دائمی) × 15٪ را با هزینه کل مالیات مقایسه کنید.',
            en: 'The fine is a permanent difference. To check, compare (profit before tax + permanent differences) × 15% with total tax expense.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'الف) مالیات جاری', en: '(a) Current tax' },
              head: [
                { fa: 'شرح', en: 'Item' },
                { fa: 'مبلغ', en: 'Amount' },
              ],
              numericCols: [1],
              rows: [
                [{ fa: 'سود قبل از مالیات', en: 'Profit before tax' }, 800000],
                [{ fa: 'اضافه: استهلاک دفتری', en: 'Add: book depreciation' }, 200000],
                [{ fa: 'اضافه: ذخیره قطعات راکد', en: 'Add: slow-moving spares provision' }, 40000],
                [{ fa: 'اضافه: جریمه', en: 'Add: fine' }, 10000],
                [{ fa: 'کسر: استهلاک مالیاتی', en: 'Deduct: tax depreciation' }, 260000],
                [{ fa: 'خالص درآمد مشمول مالیات', en: 'Net taxable income' }, 790000],
                [{ fa: 'مالیات جاری (15٪)', en: 'Current tax (15%)' }, 118500],
              ],
            },
            {
              type: 'table',
              caption: { fa: 'ب) مالیات انتقالی', en: '(b) Deferred tax' },
              head: [
                { fa: 'تفاوت', en: 'Difference' },
                { fa: 'مبلغ تفاوت', en: 'Difference amount' },
                { fa: 'مالیات انتقالی', en: 'Deferred tax' },
                { fa: 'نوع', en: 'Type' },
              ],
              numericCols: [1, 2],
              rows: [
                [
                  { fa: 'دارایی‌های ثابت (استهلاک مالیاتی 60,000 بیشتر)', en: 'Fixed assets (tax depreciation 60,000 higher)' },
                  60000,
                  9000,
                  { fa: 'بدهی', en: 'Liability' },
                ],
                [{ fa: 'ذخیره قطعات راکد', en: 'Slow-moving spares provision' }, 40000, 6000, { fa: 'دارایی', en: 'Asset' }],
                [{ fa: 'جریمه (تفاوت دائمی)', en: 'Fine (permanent difference)' }, 10000, 0, { fa: 'ندارد', en: 'None' }],
                [{ fa: 'خالص: هزینه مالیات انتقالی', en: 'Net: deferred tax expense' }, 20000, 3000, { fa: '9,000 − 6,000', en: '9,000 − 6,000' }],
              ],
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'ج) هزینه کل و نرخ مؤثر', en: '(c) Total expense and effective rate' },
                  text: {
                    fa: 'هزینه کل مالیات = 118,500 + 3,000 = 121,500. نرخ مؤثر = 121,500 ÷ 800,000 = حدود 15.19٪.',
                    en: 'Total tax expense = 118,500 + 3,000 = 121,500. Effective rate = 121,500 ÷ 800,000 = about 15.19%.',
                  },
                },
                {
                  title: { fa: 'هـ) آزمون کنترل', en: '(e) Check' },
                  text: {
                    fa: '(800,000 + 10,000) × 15٪ = 121,500. برابر است؛ تفاوت‌های موقت فقط زمان مالیات را جابه‌جا می‌کنند و نرخ مؤثر را فقط تفاوت دائمی (جریمه) از 15٪ بالاتر برده است.',
                    en: '(800,000 + 10,000) × 15% = 121,500. It matches: temporary differences only shift the timing of tax, and only the permanent difference (the fine) lifts the effective rate above 15%.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              title: { fa: 'د) سندهای 31 دسامبر 2026', en: '(d) Entries on 31 December 2026' },
              entries: [
                {
                  lines: [
                    { account: ac.curTaxExp, debit: 118500 },
                    { account: ac.taxPayable, credit: 118500 },
                  ],
                  memo: { fa: 'مالیات جاری', en: 'Current tax' },
                },
                {
                  lines: [
                    { account: ac.defTaxExp, debit: 9000 },
                    { account: ac.dtl, credit: 9000 },
                  ],
                  memo: { fa: 'بدهی مالیات انتقالی دارایی‌های ثابت', en: 'Deferred tax liability on fixed assets' },
                },
                {
                  lines: [
                    { account: ac.dta, debit: 6000 },
                    { account: ac.defTaxInc, credit: 6000 },
                  ],
                  memo: { fa: 'دارایی مالیات انتقالی ذخیره قطعات', en: 'Deferred tax asset on the spares provision' },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              text: {
                fa: 'در ترازنامه، دارایی و بدهی مالیات انتقالی را فقط وقتی می‌توان با هم تهاتر کرد که شرایط IAS 12 برقرار باشد؛ از جمله اینکه هر دو به یک مرجع مالیاتی مربوط باشند و حق قانونی تهاتر وجود داشته باشد.',
                en: 'In the balance sheet, deferred tax assets and liabilities may be offset only when the IAS 12 conditions are met, including that both relate to the same tax authority and there is a legal right of set-off.',
              },
            },
          ],
          answer: {
            fa: 'مالیات جاری 118,500؛ هزینه مالیات انتقالی خالص 3,000؛ هزینه کل مالیات 121,500 (نرخ مؤثر حدود 15.19٪).',
            en: 'Current tax 118,500; net deferred tax expense 3,000; total tax expense 121,500 (effective rate about 15.19%).',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'summary',
      title: { fa: 'جمع‌بندی', en: 'Summary' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              fa: 'پایه کار قانون مالیات بر درآمد (فرمان سلطانی 28/2009 و اصلاحیه‌ها)، آیین‌نامه اجرایی و سازمان مالیات عمان است؛ تغییرات را دنبال کنید.',
              en: 'The foundation is the Income Tax Law (Royal Decree 28/2009 as amended), its Executive Regulations and the Oman Tax Authority; keep up with changes.',
            },
            {
              fa: 'شرکت عمانی بر درآمد جهانی و مقر دائم شرکت خارجی بر درآمد عمانی مالیات می‌دهد. نرخ عمومی 15٪، مؤسسه کوچک واجد شرایط 3٪ و درآمد نفتی EPSA با نرخ 55٪.',
              en: 'An Omani company is taxed on worldwide income and a foreign company’s PE on Omani income. The standard rate is 15%, qualifying small enterprises pay 3%, and EPSA petroleum income 55%.',
            },
            {
              fa: 'درآمد مشمول = سود قبل از مالیات + هزینه‌های غیرقابل قبول − درآمدهای معاف ± تعدیل‌های زمانی − زیان‌های قابل انتقال.',
              en: 'Taxable income = profit before tax + non-deductible expenses − exempt income ± timing adjustments − losses brought forward.',
            },
            {
              fa: 'استهلاک مالیاتی با نرخ‌های قانون حساب می‌شود؛ زیان تا 5 سال منتقل می‌شود و به عقب برنمی‌گردد.',
              en: 'Tax depreciation follows the legal rates; losses carry forward for 5 years and never back.',
            },
            {
              fa: 'مالیات تکلیفی 10٪ روی حق امتیاز، تحقیق و توسعه، نرم‌افزار، حق‌الزحمه مدیریت و خدمات غیرمقیم‌ها؛ واریز تا روز 14 ماه بعد از پرداخت یا بستانکار شدن (هرکدام زودتر). سود سهام و بهره معلق است.',
              en: '10% WHT on non-residents’ royalties, R&D, software, management fees and services; pay over by the 14th of the month after payment or crediting, whichever is earlier. Dividends and interest are suspended.',
            },
            {
              fa: 'یک اظهارنامه سالانه ظرف 4 ماه (مؤسسات 3٪ ظرف 3 ماه) همراه پرداخت مالیات؛ دیرکرد 1٪ در ماه؛ نگهداری سوابق 10 سال.',
              en: 'One annual return within 4 months (3 months for 3% enterprises), paid with the return; late payment costs 1% a month; keep records for 10 years.',
            },
            {
              fa: 'در قرارداد EPSA دولت مالیات پیمانکار را از سهم خود می‌پردازد؛ شرکت‌های خدمات نفتی تابع رژیم عادی 15٪ هستند.',
              en: 'Under an EPSA the government pays the contractor’s tax from its own share; oilfield service companies follow the normal 15% regime.',
            },
            {
              fa: 'هزینه کل مالیات = مالیات جاری + مالیات انتقالی. در ERP دفتر استهلاک مالیاتی جدا، کد مالیات تکلیفی در داده پایه تأمین‌کننده و نگاشت حساب‌ها به کاربرگ مالیات را تنظیم کنید.',
              en: 'Total tax expense = current tax + deferred tax. In the ERP, set up a separate tax depreciation book, WHT codes in the supplier master and a mapping of accounts to the tax computation.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'منابع و تاریخ بررسی', en: 'Sources and date checked' },
          text: {
            fa: 'این درس در 16 نوامبر 2026 با این منابع بررسی شده است: درگاه سازمان مالیات عمان (پرسش‌وپاسخ مالیات بر درآمد)؛ خلاصه‌های مالیاتی PwC برای عمان (بازبینی 7 جولای 2026)؛ هشدارهای مالیاتی EY درباره فرمان 118/2020، آیین‌نامه 14/2019 و قانون مالیات تکمیلی؛ هشدار KPMG درباره فرمان 101/2026؛ و گزارش‌های Oxford Business Group درباره رژیم نفتی. نرخ‌های استهلاک و سقف‌ها از خلاصه PwC گرفته شده‌اند؛ پیش از استفاده واقعی، آن‌ها را با متن آیین‌نامه و سازمان مالیات تطبیق دهید.',
            en: 'This lesson was checked on 16 November 2026 against: the Oman Tax Authority portal (income tax FAQ); PwC Worldwide Tax Summaries for Oman (reviewed 7 July 2026); EY tax alerts on Royal Decree 118/2020, Decision 14/2019 and the top-up tax law; KPMG’s alert on Royal Decree 101/2026; and Oxford Business Group reports on the petroleum regime. Depreciation rates and caps come from PwC’s summary; check them against the regulations and the Tax Authority before real use.',
          },
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'درآمد مشمول مالیات', en: 'Taxable income' },
              def: {
                fa: 'سود حسابداری پس از تعدیل‌های قانون مالیات و کسر زیان‌های قابل انتقال؛ مبنای محاسبه مالیات.',
                en: 'Accounting profit after the tax-law adjustments and losses brought forward; the base the tax is charged on.',
              },
            },
            {
              term: { fa: 'مقر دائم', en: 'Permanent establishment (PE)' },
              def: {
                fa: 'حضور تجاری کافی یک شرکت خارجی در عمان (شعبه، کارگاه یا خدمات بالای آستانه 90 روز، نماینده وابسته) که آن را مشمول مالیات عمان می‌کند.',
                en: 'Enough business presence of a foreign company in Oman (branch, site or services above the 90-day threshold, dependent agent) to make it taxable there.',
              },
            },
            {
              term: { fa: 'مالیات تکلیفی', en: 'Withholding tax (WHT)' },
              def: {
                fa: 'مالیاتی که پرداخت‌کننده عمانی از پرداخت به غیرمقیم کسر و به سازمان واریز می‌کند؛ در عمان 10٪ مبلغ ناخالص.',
                en: 'Tax the Omani payer deducts from a payment to a non-resident and pays to the Authority; 10% of the gross amount in Oman.',
              },
            },
            {
              term: { fa: 'هزینه غیرقابل قبول', en: 'Non-deductible expense' },
              def: {
                fa: 'هزینه‌ای که در سود حسابداری کسر شده اما قانون مالیات آن را نمی‌پذیرد و باید برگشت داده شود.',
                en: 'An expense deducted in accounting profit that tax law does not allow, so it is added back.',
              },
            },
            {
              term: { fa: 'استهلاک مالیاتی', en: 'Tax depreciation' },
              def: {
                fa: 'استهلاکی که با نرخ‌ها و روش‌های قانون مالیات حساب و در کاربرگ مالیات کسر می‌شود.',
                en: 'Depreciation computed with the tax law’s rates and methods and deducted in the tax computation.',
              },
            },
            {
              term: { fa: 'انتقال زیان', en: 'Loss carry-forward' },
              def: {
                fa: 'کسر زیان مالیاتی یک سال از درآمد مشمول سال‌های بعد؛ در عمان حداکثر 5 سال.',
                en: 'Setting a year’s tax loss against taxable income of later years; up to 5 years in Oman.',
              },
            },
            {
              term: { fa: 'اظهارنامه سالانه', en: 'Annual return' },
              def: {
                fa: 'گزارش رسمی درآمد و مالیات سال که ظرف 4 ماه پس از پایان سال همراه صورت‌های مالی حسابرسی‌شده داده می‌شود.',
                en: 'The formal report of the year’s income and tax, due within 4 months of the year-end with audited financial statements.',
              },
            },
            {
              term: { fa: 'اصل معامله مستقل', en: 'Arm’s length principle' },
              def: {
                fa: 'قیمت معامله با اشخاص مرتبط باید همان قیمتی باشد که دو طرف مستقل توافق می‌کردند.',
                en: 'Prices between related parties must equal what independent parties would have agreed.',
              },
            },
            {
              term: { fa: 'قرارداد اکتشاف و مشارکت در تولید', en: 'Exploration and Production Sharing Agreement (EPSA)' },
              def: {
                fa: 'قرارداد دولت عمان با شرکت اکتشاف و تولید که بازیافت هزینه، تقسیم تولید و تسویه مالیات را مشخص می‌کند.',
                en: 'The agreement between Oman’s government and an E&P company that sets cost recovery, production sharing and tax settlement.',
              },
            },
            {
              term: { fa: 'مالیات جاری', en: 'Current tax' },
              def: {
                fa: 'مالیات قابل پرداخت بابت درآمد مشمول همین سال.',
                en: 'Tax payable on this year’s taxable income.',
              },
            },
            {
              term: { fa: 'مالیات انتقالی', en: 'Deferred tax' },
              def: {
                fa: 'اثر مالیاتی تفاوت‌های موقت که در آینده برمی‌گردد؛ به‌صورت دارایی یا بدهی مالیات انتقالی ثبت می‌شود.',
                en: 'The tax effect of temporary differences that reverse in the future; recorded as a deferred tax asset or liability.',
              },
            },
            {
              term: { fa: 'مبنای مالیاتی', en: 'Tax base' },
              def: {
                fa: 'مبلغی که قانون مالیات برای یک دارایی یا بدهی می‌شناسد؛ برای تجهیزات، بهای تمام‌شده منهای استهلاک مالیاتی.',
                en: 'The amount tax law attributes to an asset or liability; for equipment, cost less tax depreciation.',
              },
            },
            {
              term: { fa: 'تفاوت موقت', en: 'Temporary difference' },
              def: {
                fa: 'اختلاف مبلغ دفتری و مبنای مالیاتی که در طول زمان از بین می‌رود.',
                en: 'The gap between carrying amount and tax base that reverses over time.',
              },
            },
            {
              term: { fa: 'تفاوت دائمی', en: 'Permanent difference' },
              def: {
                fa: 'قلمی که هرگز در مالیات اثر ندارد، مثل جریمه یا درآمد معاف؛ مالیات انتقالی ندارد.',
                en: 'An item that never counts for tax, such as a fine or exempt income; it carries no deferred tax.',
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
        fa: 'نرخ عمومی مالیات بر درآمد برای شرکتی مثل مسار پترولیوم خدمات عمان چند درصد است؟',
        en: 'What is the standard income tax rate for a company such as Masar Petroleum Oman Services?',
      },
      options: [
        { fa: '3٪', en: '3%' },
        { fa: '10٪', en: '10%' },
        { fa: '15٪', en: '15%' },
        { fa: '55٪', en: '55%' },
      ],
      answer: 2,
      explain: {
        fa: 'نرخ عمومی 15٪ است. نرخ 3٪ فقط برای مؤسسات کوچکی است که همه شرایط را دارند، 10٪ نرخ مالیات تکلیفی غیرمقیم‌هاست و 55٪ فقط برای درآمد فروش نفت طرف‌های قرارداد EPSA است، نه برای یک شرکت خدماتی.',
        en: 'The standard rate is 15%. 3% is only for small enterprises meeting every condition, 10% is the WHT rate for non-residents, and 55% applies only to petroleum sales income of EPSA parties, not to a service company.',
      },
    },
    {
      q: {
        fa: 'شرکت مادر خارجی (بدون مقر دائم در عمان) فاکتور 150,000 حق‌الزحمه مدیریت برای شرکت عمانی صادر کرده است. شرکت عمانی چه مبلغی به شرکت مادر پرداخت می‌کند؟',
        en: 'A foreign parent (no PE in Oman) invoices its Omani subsidiary 150,000 of management fees. How much does the Omani company pay the parent?',
      },
      options: [
        { fa: '135,000', en: '135,000' },
        { fa: '150,000', en: '150,000' },
        { fa: '127,500', en: '127,500' },
        { fa: '142,500', en: '142,500' },
      ],
      answer: 0,
      explain: {
        fa: 'حق‌الزحمه مدیریت مشمول مالیات تکلیفی 10٪ است: 150,000 × 10٪ = 15,000 کسر و به سازمان واریز می‌شود و 135,000 به شرکت مادر پرداخت می‌شود. 127,500 از اشتباه گرفتن نرخ 15٪ مالیات شرکت‌ها به دست می‌آید و پرداخت کامل 150,000 یعنی شرکت عمانی 10٪ را از منابع خودش بدهد.',
        en: 'Management fees bear 10% WHT: 150,000 × 10% = 15,000 is withheld and paid to the Authority, and 135,000 goes to the parent. 127,500 comes from wrongly using the 15% corporate rate, and paying the full 150,000 leaves the Omani company bearing the 10% itself.',
      },
    },
    {
      q: {
        fa: 'فاکتور خدمات یک شرکت خارجی بدون مقر دائم در 25 ژوئن ثبت و تأمین‌کننده بستانکار شد و مبلغ در 10 ژوئیه پرداخت شد. آخرین مهلت واریز مالیات تکلیفی کدام است؟',
        en: 'A foreign supplier with no PE was credited when its service invoice was posted on 25 June, and paid on 10 July. What is the last day to pay over the WHT?',
      },
      options: [
        { fa: '25 ژوئیه', en: '25 July' },
        { fa: '14 اوت', en: '14 August' },
        { fa: '10 ژوئیه', en: '10 July' },
        { fa: '14 ژوئیه', en: '14 July' },
      ],
      answer: 3,
      explain: {
        fa: 'مهلت 14 روز پس از پایان ماهی است که مبلغ پرداخت یا بستانکار شده، هرکدام زودتر. بستانکار شدن در ژوئن رخ داده؛ پس مهلت 14 ژوئیه است. 14 اوت وقتی به دست می‌آید که اشتباهاً از تاریخ پرداخت شمرده شود.',
        en: 'The deadline is 14 days after the end of the month in which the amount was paid or credited, whichever is earlier. Crediting happened in June, so the deadline is 14 July. 14 August is what you get by wrongly counting from the payment date.',
      },
    },
    {
      q: {
        fa: 'سود قبل از مالیات 400,000 است. در آن، 5,000 جریمه، 20,000 هزینه ذخیره مطالبات مشکوک‌الوصول (بدون هیچ حذف واقعی) و 15,000 سود سهام دریافتی از یک شرکت عمانی منظور شده است. مالیات جاری با نرخ 15٪ چقدر است؟',
        en: 'Profit before tax is 400,000. It includes 5,000 of fines, a 20,000 doubtful-debt allowance charge (no actual write-offs) and 15,000 of dividends from an Omani company. What is current tax at 15%?',
      },
      options: [
        { fa: '60,000', en: '60,000' },
        { fa: '61,500', en: '61,500' },
        { fa: '63,750', en: '63,750' },
        { fa: '57,750', en: '57,750' },
      ],
      answer: 1,
      explain: {
        fa: 'درآمد مشمول = 400,000 + 5,000 + 20,000 − 15,000 = 410,000 و مالیات = 410,000 × 15٪ = 61,500. عدد 63,750 یعنی سود سهام معاف کسر نشده و 60,000 یعنی هیچ تعدیلی انجام نشده است.',
        en: 'Taxable income = 400,000 + 5,000 + 20,000 − 15,000 = 410,000, and tax = 410,000 × 15% = 61,500. 63,750 forgets to remove the exempt dividend, and 60,000 makes no adjustments at all.',
      },
    },
    {
      q: {
        fa: 'زیان مالیاتی سال 2021 حداکثر تا درآمد مشمول کدام سال قابل کسر است؟',
        en: 'A 2021 tax loss can be set against taxable income up to which year at the latest?',
      },
      options: [
        { fa: '2023', en: '2023' },
        { fa: '2025', en: '2025' },
        { fa: '2026', en: '2026' },
        { fa: 'بدون محدودیت زمانی', en: 'With no time limit' },
      ],
      answer: 2,
      explain: {
        fa: 'زیان تا 5 سال بعد منتقل می‌شود: 2022، 2023، 2024، 2025 و 2026. پس آخرین سال 2026 است. انتقال بدون محدودیت قاعده عمومی نیست و فقط در موارد خاص قانون پیش می‌آید.',
        en: 'A loss carries forward for 5 years: 2022, 2023, 2024, 2025 and 2026, so the last year is 2026. Unlimited carry-forward is not the general rule; it arises only in special cases under the law.',
      },
    },
    {
      q: {
        fa: 'شرکتی با سال مالی منتهی به 31 دسامبر 2026 که مشمول نرخ 15٪ است، اظهارنامه سالانه را تا چه تاریخی باید بدهد؟',
        en: 'A 15% taxpayer with a 31 December 2026 year-end must file its annual return by which date?',
      },
      options: [
        { fa: '30 آوریل 2027، همراه پرداخت مالیات', en: '30 April 2027, with payment of the tax' },
        { fa: '31 مارس 2027', en: '31 March 2027' },
        { fa: '30 ژوئن 2027', en: '30 June 2027' },
        { fa: '31 دسامبر 2027', en: '31 December 2027' },
      ],
      answer: 0,
      explain: {
        fa: 'از سال 2020، یک اظهارنامه سالانه ظرف 4 ماه داده می‌شود و مالیات هم همراه آن پرداخت می‌شود؛ یعنی 30 آوریل 2027. مهلت 3 ماهه (31 مارس) مخصوص مؤسسات 3٪ است و 30 ژوئن مهلت اظهارنامه نهایی در نظام قدیمی بود.',
        en: 'Since 2020, a single annual return is due within 4 months, with the tax paid alongside it: 30 April 2027. The 3-month date (31 March) is for 3% enterprises, and 30 June was the old final-return deadline.',
      },
    },
    {
      q: {
        fa: 'طبق قراردادهای EPSA در عمان، مالیات 55٪ درآمد نفتی پیمانکار معمولاً چگونه تسویه می‌شود؟',
        en: 'Under Omani EPSAs, how is the contractor’s 55% petroleum income tax usually settled?',
      },
      options: [
        { fa: 'پیمانکار ماهانه به‌صورت نقدی می‌پردازد', en: 'The contractor pays it in cash every month' },
        { fa: 'از نفت هزینه پیمانکار کسر می‌شود', en: 'It is deducted from the contractor’s cost oil' },
        { fa: 'شرکت‌های خدماتی طرف قرارداد آن را می‌پردازند', en: 'The service companies on the contract pay it' },
        { fa: 'دولت آن را از سهم خودش از تولید می‌پردازد', en: 'The government pays it out of its own share of production' },
      ],
      answer: 3,
      explain: {
        fa: 'طبق این قراردادها، دولت مالیات پیمانکار را از سهم خودش از تولید می‌پردازد و بار مالیات در عمل بر دوش پیمانکار نیست. نفت هزینه برای بازیافت هزینه‌هاست و شرکت‌های خدماتی طرف EPSA نیستند و تابع رژیم عادی 15٪ هستند.',
        en: 'Under these agreements the government pays the contractor’s tax out of its own production share, so the contractor does not bear it in practice. Cost oil is for recovering costs, and service companies are not EPSA parties; they follow the normal 15% regime.',
      },
    },
    {
      q: {
        fa: 'مبلغ دفتری یک دکل تعمیر چاه 500,000 و مبنای مالیاتی آن 420,000 است. با نرخ 15٪ کدام گزینه درست است؟',
        en: 'A workover rig has a carrying amount of 500,000 and a tax base of 420,000. At 15%, which is correct?',
      },
      options: [
        { fa: 'دارایی مالیات انتقالی 12,000', en: 'Deferred tax asset of 12,000' },
        { fa: 'بدهی مالیات انتقالی 12,000', en: 'Deferred tax liability of 12,000' },
        { fa: 'بدهی مالیات انتقالی 75,000', en: 'Deferred tax liability of 75,000' },
        { fa: 'مالیات انتقالی ندارد، چون تفاوت دائمی است', en: 'No deferred tax, because it is a permanent difference' },
      ],
      answer: 1,
      explain: {
        fa: 'مبلغ دفتری دارایی 80,000 از مبنای مالیاتی بیشتر است، یعنی استهلاک مالیاتی تاکنون بیشتر بوده و در آینده مالیات بیشتری پرداخت می‌شود: بدهی مالیات انتقالی = 80,000 × 15٪ = 12,000. اگر مبلغ دفتری کمتر بود، دارایی مالیات انتقالی داشتیم. 75,000 یعنی نرخ روی کل مبلغ دفتری اعمال شده است.',
        en: 'The carrying amount is 80,000 above the tax base: tax depreciation has run ahead, so more tax will be paid later. Deferred tax liability = 80,000 × 15% = 12,000. A carrying amount below the tax base would give an asset. 75,000 wrongly applies the rate to the whole carrying amount.',
      },
    },
    {
      q: {
        fa: 'ذخیره کالای راکد از نظر مالیات عمان چه زمانی قابل کسر است؟',
        en: 'For Omani tax, when is a provision for slow-moving stock deductible?',
      },
      options: [
        { fa: 'در همان سالی که در دفاتر ثبت می‌شود', en: 'In the year it is booked' },
        { fa: 'هرگز', en: 'Never' },
        { fa: 'وقتی کالا واقعاً حذف یا کنار گذاشته شود', en: 'When the stock is actually written off or disposed of' },
        { fa: 'فقط با تأیید حسابرس مستقل', en: 'Only with the external auditor’s approval' },
      ],
      answer: 2,
      explain: {
        fa: 'ذخیره‌ها هنگام ثبت در دفاتر قابل قبول نیستند و کسر آن‌ها به زمان حذف واقعی منتقل می‌شود. پس «هرگز» درست نیست (هزینه رد نمی‌شود، فقط زمانش عوض می‌شود) و همین تفاوت زمانی است که دارایی مالیات انتقالی می‌سازد.',
        en: 'Provisions are not deductible when booked; the deduction moves to the actual write-off. So “never” is wrong (the cost is not rejected, only re-timed), and this timing gap is what creates a deferred tax asset.',
      },
    },
    {
      q: {
        fa: 'کدام پرداخت به شخص غیرمقیم بدون مقر دائم، در وضعیت فعلی مشمول مالیات تکلیفی 10٪ **نیست**؟',
        en: 'Which payment to a non-resident with no PE is currently **not** subject to 10% WHT?',
      },
      options: [
        { fa: 'حق استفاده از نرم‌افزار', en: 'Software licence fees' },
        { fa: 'حق‌الزحمه مدیریت', en: 'Management fees' },
        { fa: 'خدمات مهندسی برای ایستگاهی در عمان', en: 'Engineering services for a station in Oman' },
        { fa: 'سود سهام پرداختی به سهامدار خارجی', en: 'Dividends paid to a foreign shareholder' },
      ],
      answer: 3,
      explain: {
        fa: 'مالیات تکلیفی سود سهام و بهره با دستور سلطانی 11 ژانویه 2023 معلق شده است. نرم‌افزار، حق‌الزحمه مدیریت و خدماتی که به فعالیت یا دارایی در عمان مربوط است همچنان 10٪ دارند.',
        en: 'WHT on dividends and interest was suspended by the Royal Directive of 11 January 2023. Software, management fees and services relating to activity or property in Oman still bear 10%.',
      },
    },
  ],
}
