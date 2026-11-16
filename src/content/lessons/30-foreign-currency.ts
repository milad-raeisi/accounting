import type { Lesson } from '../types'

/*
 * Foreign currency under IAS 21, for an upstream oil and gas group (Masar Petroleum).
 * Fact checked on 16 November 2026: the Omani rial is pegged to the US dollar at USD 2.6008 per rial, unchanged since 1986
 * (Central Bank of Oman, fixed-peg page; Oman Observer report of the IMF review, November 2022; IMF 2023 Article IV press
 * release, January 2024, confirms the peg is maintained). Every EUR rate in this lesson is illustrative.
 * Journal amounts are in USD, the functional currency of Masar Petroleum (MP01).
 */

const ac = {
  bankUsd: { fa: '1110 موجودی نقد (بانک، حساب دلاری)', en: '1110 Cash at bank (USD account)' },
  bankEur: { fa: '1112 موجودی نقد (بانک، حساب یورویی)', en: '1112 Cash at bank (EUR account)' },
  ar: { fa: '1210 حساب‌های دریافتنی', en: '1210 Accounts receivable' },
  inventory: { fa: '1310 موجودی مواد و قطعات', en: '1310 Materials and spares inventory' },
  ap: { fa: '2110 حساب‌های پرداختنی', en: '2110 Accounts payable' },
  apGroup: { fa: '2115 حساب‌های پرداختنی به شرکت‌های گروه', en: '2115 Payables to group companies' },
  grir: { fa: '2120 حساب واسط رسید کالا و فاکتور (GR/IR)', en: '2120 GR/IR clearing account' },
  loan: { fa: '2410 وام بانکی یورویی', en: '2410 Bank loan (EUR)' },
  surplusSales: { fa: '4210 درآمد فروش مواد مازاد', en: '4210 Revenue from sale of surplus materials' },
  gainR: { fa: '4910 سود تسعیر ارز تحقق‌یافته', en: '4910 Realised exchange gain' },
  gainU: { fa: '4920 سود تسعیر ارز تحقق‌نیافته', en: '4920 Unrealised exchange gain' },
  repairs: { fa: '5120 هزینه تعمیر و نگهداری (CC-ARY-CMP)', en: '5120 Repairs and maintenance expense (CC-ARY-CMP)' },
  wellServices: { fa: '5130 هزینه خدمات چاه (CC-ARY-PRD)', en: '5130 Well services expense (CC-ARY-PRD)' },
  lossR: { fa: '5810 زیان تسعیر ارز تحقق‌یافته', en: '5810 Realised exchange loss' },
  lossU: { fa: '5820 زیان تسعیر ارز تحقق‌نیافته', en: '5820 Unrealised exchange loss' },
}

const t = (fa: string, en: string) => ({ fa, en })
/** Empty table cell. */
const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'foreign-currency',
  number: 30,
  currency: 'usd',
  level: 'advanced',
  minutes: 35,
  icon: 'ArrowLeftRight',
  tone: 'asset',
  title: { fa: 'حسابداری ارز و تسعیر (IAS 21)', en: 'Foreign Currency Accounting (IAS 21)' },
  summary: {
    fa: 'بیاموزید یک شرکت نفت و گاز معاملات ارزی را چگونه ثبت و در پایان دوره تسعیر می‌کند: واحد پول عملیاتی و گزارشگری، نرخ تاریخ معامله، اقلام پولی و غیرپولی، تفاوت تسعیر تحقق‌یافته و تحقق‌نیافته، تبدیل صورت‌های مالی شرکت تابعه خارجی، و جدول نرخ ارز و اجرای تسعیر در ERP؛ با مثال شرکت مسار پترولیوم در فضای دلار آمریکا و ریال عمان.',
    en: 'Learn how an oil and gas company records foreign currency transactions and revalues them at period end: functional and presentation currency, transaction-date rates, monetary and non-monetary items, realised and unrealised exchange differences, translating a foreign subsidiary, and the exchange-rate table and revaluation run in the ERP, all through Masar Petroleum in a US dollar and Omani rial setting.',
  },
  objectives: [
    {
      fa: 'واحد پول عملیاتی یک شرکت را با شاخص‌های IAS 21 تعیین کنید و آن را از واحد پول گزارشگری جدا کنید',
      en: 'Determine an entity’s functional currency with the IAS 21 indicators and tell it apart from the presentation currency',
    },
    {
      fa: 'معاملات ارزی را با نرخ تاریخ معامله ثبت کنید و اقلام پولی و غیرپولی را از هم تشخیص دهید',
      en: 'Record foreign currency transactions at the transaction-date rate and tell monetary from non-monetary items',
    },
    {
      fa: 'تفاوت تسعیر تحقق‌نیافته پایان دوره و تفاوت تسعیر تحقق‌یافته هنگام تسویه را محاسبه و ثبت کنید',
      en: 'Compute and record unrealised exchange differences at period end and realised differences on settlement',
    },
    {
      fa: 'روش تبدیل صورت‌های مالی یک عملیات خارجی و جای اندوخته تسعیر را توضیح دهید',
      en: 'Explain how a foreign operation’s statements are translated and where the translation reserve goes',
    },
    {
      fa: 'جدول نرخ ارز، اجرای تسعیر، نقش‌ها و ثبت‌های خودکار ERP را برای ارز شرح دهید',
      en: 'Describe the ERP’s exchange-rate table, revaluation run, roles and automatic postings for foreign currency',
    },
  ],
  sections: [
    /* ------------------------------------------------------------------ */
    {
      id: 'why-fx',
      title: { fa: 'چرا ارز مهم است؟', en: 'Why Foreign Currency Matters' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'شرکت مسار پترولیوم (کد شرکت `MP01`) اپراتور مشارکت میدان آریاست. نفت خام را به دلار آمریکا می‌فروشد، قطعات یدکی کمپرسور را از یک سازنده اروپایی به یورو می‌خرد، برای تعمیر اساسی کمپرسور K-101 از شرکت تابعه خودش در عمان فاکتور به ریال عمان می‌گیرد و یک وام یورویی هم دارد. روز آخر ماه، پس از **اجرای تسعیر** در ERP، دو سطر تازه در تراز آزمایشی دیده می‌شود: **سود تسعیر ارز تحقق‌نیافته 24,000** و **زیان تسعیر ارز تحقق‌نیافته 500**. هیچ پولی جابه‌جا نشده است. این اعداد از کجا آمده‌اند و آیا درست‌اند؟',
            en: 'Masar Petroleum (company code `MP01`) is the operator of the Arya field joint venture. It sells crude oil in US dollars, buys compressor spares from a European manufacturer in euros, receives an invoice in Omani rials from its own subsidiary in Oman for the overhaul of compressor K-101, and carries a euro loan. On the last day of the month, after the ERP’s **revaluation run**, two new lines appear in the trial balance: **unrealised exchange gain 24,000** and **unrealised exchange loss 500**. No cash has moved. Where do these numbers come from, and are they right?',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'استاندارد **IAS 21 «آثار تغییر در نرخ‌های ارز»** به همین پرسش‌ها پاسخ می‌دهد. این درس چهار پرسش اصلی آن را گام‌به‌گام باز می‌کند:',
            en: 'The standard **IAS 21 “The Effects of Changes in Foreign Exchange Rates”** answers exactly these questions. This lesson works through its four main questions step by step:',
          },
        },
        {
          type: 'list',
          ordered: true,
          items: [
            { fa: 'دفاتر شرکت با کدام واحد پول نگهداری می‌شود؟ (واحد پول عملیاتی)', en: 'In which currency are the books kept? (the functional currency)' },
            { fa: 'هر معامله ارزی در روز وقوع با چه نرخی ثبت می‌شود؟', en: 'At which rate is each foreign currency transaction first recorded?' },
            { fa: 'وقتی نرخ ارز تغییر می‌کند، با مانده‌های ارزی چه می‌کنیم؟', en: 'What happens to foreign currency balances when rates move?' },
            { fa: 'صورت‌های مالی یک شرکت تابعه خارجی چگونه به واحد پول گروه تبدیل می‌شود؟', en: 'How are a foreign subsidiary’s statements brought into the group’s currency?' },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'شرکت‌های گروه مسار پترولیوم در این درس (کدهای MP02 و MP03 فرضی‌اند)', en: 'Masar Petroleum group companies in this lesson (codes MP02 and MP03 are illustrative)' },
          head: [
            { fa: 'شرکت', en: 'Company' },
            { fa: 'کد شرکت', en: 'Company code' },
            { fa: 'فعالیت اصلی', en: 'Main activity' },
            { fa: 'واحد پول عملیاتی', en: 'Functional currency' },
          ],
          rows: [
            [t('مسار پترولیوم', 'Masar Petroleum'), t('MP01', 'MP01'), t('اپراتور میدان آریا، فروش نفت خام', 'Operator of the Arya field, sells crude oil'), t('دلار آمریکا (USD)', 'US dollar (USD)')],
            [t('مسار پترولیوم خدمات عمان', 'Masar Petroleum Oman Services'), t('MP02', 'MP02'), t('خدمات تعمیر چاه و نگهداری کمپرسور در عمان', 'Well-workover and compressor maintenance services in Oman'), t('ریال عمان (OMR)', 'Omani rial (OMR)')],
            [t('مسار پترولیوم اروپا', 'Masar Petroleum Europe'), t('MP03', 'MP03'), t('مرکز خرید و مهندسی تجهیزات در اروپا', 'Equipment procurement and engineering hub in Europe'), t('یورو (EUR)', 'Euro (EUR)')],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'درباره اعداد این درس', en: 'About the numbers in this lesson' },
          text: {
            fa: 'همه نرخ‌های یورو در این درس **فرضی و آموزشی‌اند**. نرخ ریال عمان همان نرخ رسمی ثابت است (بخش بعد). مبالغ ثبت‌ها به دلار آمریکا، یعنی واحد پول عملیاتی مسار پترولیوم، است؛ هر جا مبلغی به ارز دیگر باشد، در شرح یا سرستون جدول گفته شده است.',
            en: 'Every euro rate in this lesson is **illustrative**. The Omani rial rate is the official fixed rate (next section). Journal amounts are in US dollars, the functional currency of Masar Petroleum; wherever an amount is in another currency, the description or the column head says so.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'functional-currency',
      title: { fa: 'واحد پول عملیاتی و واحد پول گزارشگری', en: 'Functional and Presentation Currency' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**واحد پول عملیاتی** (Functional currency) واحد پول محیط اقتصادی اصلی است که شرکت در آن فعالیت می‌کند؛ یعنی پولی که شرکت بیشتر با آن درآمد می‌گیرد و هزینه می‌پردازد. هر واحد پول دیگر برای آن شرکت **ارز** (Foreign currency) است. **واحد پول گزارشگری** (Presentation currency) واحد پولی است که صورت‌های مالی با آن ارائه می‌شود. شرکت واحد پول عملیاتی را **انتخاب نمی‌کند**؛ آن را از روی واقعیت‌های کسب‌وکار **تشخیص می‌دهد**. اما واحد پول گزارشگری را می‌تواند انتخاب کند.',
            en: 'The **functional currency** is the currency of the primary economic environment in which an entity operates: the money it mainly earns and spends. Every other currency is a **foreign currency** for that entity. The **presentation currency** is the currency in which the financial statements are presented. An entity does **not choose** its functional currency; it **determines** it from the facts of its business. It may, however, choose its presentation currency.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'شاخص‌های IAS 21 برای تعیین واحد پول عملیاتی، با پاسخ دو شرکت گروه', en: 'IAS 21 indicators of the functional currency, answered for two group companies' },
          head: [
            { fa: 'شاخص', en: 'Indicator' },
            { fa: 'مسار پترولیوم (MP01)', en: 'Masar Petroleum (MP01)' },
            { fa: 'مسار پترولیوم خدمات عمان (MP02)', en: 'Masar Petroleum Oman Services (MP02)' },
          ],
          rows: [
            [
              t('**اصلی:** قیمت فروش بیشتر با کدام پول تعیین و تسویه می‌شود؟', '**Primary:** which currency mainly sets and settles sales prices?'),
              t('دلار: نفت خام با شاخص‌های جهانی دلاری قیمت‌گذاری می‌شود', 'USD: crude is priced off global US dollar benchmarks'),
              t('ریال عمان: قراردادهای خدمات با اپراتورهای عمانی', 'OMR: service contracts with Omani operators'),
            ],
            [
              t('**اصلی:** رقابت و مقررات کدام کشور قیمت را تعیین می‌کند؟', '**Primary:** whose competitive forces and regulations mainly determine prices?'),
              t('بازار جهانی نفت', 'The global oil market'),
              t('بازار خدمات نفتی عمان', 'The Omani oilfield services market'),
            ],
            [
              t('**اصلی:** هزینه‌های کارکنان، مواد و خدمات بیشتر با کدام پول است؟', '**Primary:** which currency mainly drives labour, material and other costs?'),
              t('دلار: دکل، لوله‌های جداری و مغزی (OCTG) و خدمات چاه', 'USD: rigs, OCTG and well services'),
              t('ریال عمان: حقوق کارکنان محلی و اجاره کارگاه', 'OMR: local staff salaries and workshop rent'),
            ],
            [
              t('**فرعی:** تأمین مالی با کدام پول است؟', '**Secondary:** in which currency is financing raised?'),
              t('بیشتر دلار (و یک وام یورویی)', 'Mostly USD (plus one EUR loan)'),
              t('ریال عمان', 'OMR'),
            ],
            [
              t('**نتیجه**', '**Conclusion**'),
              t('**دلار آمریکا**', '**US dollar**'),
              t('**ریال عمان**', '**Omani rial**'),
            ],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'چرا بسیاری از شرکت‌های نفت و گاز بالادستی واحد پول عملیاتی دلاری دارند، حتی اگر در کشوری با پول ملی دیگر کار کنند؟ چون نفت خام و میعانات در بازار جهانی به دلار خرید و فروش می‌شوند، اجاره دکل، تجهیزات و خدمات تخصصی بیشتر به دلار قیمت دارند و وام‌های پروژه هم معمولاً دلاری است. با این حال این یک قاعده خودکار نیست: شرکتی مثل MP02 که درآمد و هزینه‌اش محلی است، واحد پول عملیاتی محلی دارد.',
            en: 'Why do many upstream oil and gas companies have a US dollar functional currency, even when they operate in a country with another national currency? Because crude oil and condensate trade worldwide in dollars, rigs, equipment and specialist services are mostly priced in dollars, and project loans are usually in dollars too. It is not automatic, though: a company like MP02, whose revenue and costs are local, has a local functional currency.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'واحد پول عملیاتی', en: 'Functional currency' },
            items: [
              { fa: 'از واقعیت‌های اقتصادی تشخیص داده می‌شود، انتخاب نمی‌شود', en: 'Determined from economic facts, not chosen' },
              { fa: 'دفاتر و ثبت‌ها با آن نگهداری می‌شود', en: 'The books and entries are kept in it' },
              { fa: 'تفاوت تسعیر معاملات ارزی در سود و زیان می‌رود', en: 'Exchange differences on foreign transactions go to profit or loss' },
              { fa: 'فقط با تغییر واقعیت‌ها عوض می‌شود و از تاریخ تغییر به بعد اعمال می‌شود', en: 'Changes only when the facts change, applied from the date of change onwards' },
            ],
          },
          right: {
            title: { fa: 'واحد پول گزارشگری', en: 'Presentation currency' },
            items: [
              { fa: 'شرکت می‌تواند آن را انتخاب کند', en: 'The entity may choose it' },
              { fa: 'فقط صورت‌های مالی با آن ارائه می‌شود', en: 'Only the financial statements are presented in it' },
              { fa: 'تفاوت ناشی از تبدیل در سود و زیان جامع دیگر (OCI) می‌رود', en: 'The difference from translating goes to other comprehensive income (OCI)' },
              { fa: 'مثال: گروه مسار صورت‌های تلفیقی را به دلار ارائه می‌کند', en: 'Example: the Masar group presents consolidated statements in USD' },
            ],
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'ریال عمان به دلار گره خورده است', en: 'The Omani rial is pegged to the US dollar' },
          text: {
            fa: 'به گفته بانک مرکزی عمان، ریال عمان از سال 1986 با نرخ ثابت **2.6008 دلار برای هر ریال** به دلار آمریکا گره خورده است (حدود 0.3845 ریال برای هر دلار). صندوق بین‌المللی پول هم در بررسی سال 2024 حفظ این نرخ ثابت را تأیید کرده است. این واقعیت در 16 نوامبر 2026 بررسی شد. نرخ ثابت یک سیاست پولی است، نه قانون طبیعت؛ پس همیشه نرخ رسمی روز را از جدول نرخ ارز بگیرید.',
            en: 'According to the Central Bank of Oman, the Omani rial has been pegged to the US dollar since 1986 at a fixed **USD 2.6008 per rial** (about 0.3845 rials per dollar). The IMF’s 2024 review also confirmed that the peg is maintained. This fact was checked on 16 November 2026. A peg is a monetary policy, not a law of nature, so always take the official rate of the day from the exchange-rate table.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'تعیین واحد پول عملیاتی با یک **یادداشت فنی** مستند می‌شود: واقعیت‌ها، شاخص‌ها، نتیجه و تأیید مدیر مالی و حسابرس. سپس در ERP به‌عنوان **ارز کد شرکت** تنظیم می‌شود و تغییر آن بعدها کار ساده‌ای نیست. در ایران موضوع ارز در استاندارد حسابداری شماره 16 «آثار تغییر در نرخ ارز» آمده است که از نظر مفهومی به IAS 21 نزدیک است اما در جزئیات تفاوت دارد. وقتی برای یک ارز چند نرخ رسمی و غیررسمی وجود دارد، IAS 21 می‌گوید نرخی را به کار ببرید که جریان نقدی در آن تاریخ واقعاً با آن تسویه می‌شد.',
            en: 'The functional currency decision is documented in a **technical memo**: the facts, the indicators, the conclusion, and sign-off by the CFO and the auditor. It is then set in the ERP as the **company code currency**, and changing it later is not a simple task. In Iran the topic is covered by Accounting Standard 16, “Effects of Changes in Foreign Exchange Rates”, which is close to IAS 21 in concept but differs in details. When a currency has several official and unofficial rates, IAS 21 says to use the rate at which the cash flow would actually have been settled on that date.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' },
          text: {
            fa: 'واحد پول عملیاتی را بر اساس کشور ثبت شرکت یا پول پرداخت مالیات تعیین نکنید؛ ملاک، پول درآمدها و هزینه‌هاست. واحد پول عملیاتی و گزارشگری را هم یکی نگیرید: یک شرکت دلاری می‌تواند برای گزارش محلی صورت‌های مالی به پول دیگری هم تهیه کند، بی‌آنکه دفاترش عوض شود.',
            en: 'Do not set the functional currency by the country of registration or by the currency in which tax is paid; what counts is the currency of revenue and costs. Do not confuse functional and presentation currency either: a dollar company may also prepare statements in another currency for local reporting without changing its books.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'transaction-date',
      title: { fa: 'ثبت اولیه با نرخ تاریخ معامله', en: 'Initial Recording at the Transaction-Date Rate' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'قاعده ساده است: هر معامله ارزی در **تاریخ معامله** (روزی که اولین بار شرایط شناسایی را پیدا می‌کند) با **نرخ روز** آن تاریخ به واحد پول عملیاتی تبدیل و ثبت می‌شود. برای خرید کالا، این تاریخ معمولاً روز ثبت رسید کالا (GRN) است؛ برای خدمات، روز تأیید برگه ثبت خدمات (SES). اگر نرخ‌ها در یک دوره نوسان چشمگیری نداشته باشند، می‌توان برای راحتی از **نرخ میانگین** هفته یا ماه استفاده کرد.',
            en: 'The rule is simple: each foreign currency transaction is translated into the functional currency at the **spot rate** on the **transaction date** (the day it first qualifies for recognition). For a purchase of goods, that is usually the day the goods received note (GRN) is posted; for services, the day the service entry sheet (SES) is accepted. If rates do not fluctuate significantly during a period, an **average rate** for the week or month may be used for convenience.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'مبلغ به واحد پول عملیاتی = مبلغ ارزی × نرخ (تعداد واحد پول عملیاتی برای هر واحد ارز)',
            en: 'Amount in functional currency = Foreign currency amount × Rate (functional units per one foreign unit)',
          },
          note: {
            fa: 'مثال: 200,000 یورو × 1.10 = 220,000 دلار؛ و 50,000 ریال عمان × 2.6008 = 130,040 دلار.',
            en: 'Example: EUR 200,000 × 1.10 = USD 220,000; and OMR 50,000 × 2.6008 = USD 130,040.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'جهت نرخ را چک کنید', en: 'Check the direction of the rate' },
          text: {
            fa: 'نرخ را می‌توان دو جور نوشت: «1 یورو = 1.10 دلار» یا «1 دلار = 0.3845 ریال عمان». در حالت اول ضرب می‌کنید و در حالت دوم تقسیم. یک آزمون سریع: یک ریال عمان از یک دلار گران‌تر است، پس 50,000 ریال باید **بیشتر** از 50,000 دلار شود. اگر عدد کوچک‌تر درآمد، جهت نرخ را اشتباه گرفته‌اید.',
            en: 'A rate can be written two ways: “1 EUR = 1.10 USD” or “1 USD = 0.3845 OMR”. In the first case you multiply, in the second you divide. A quick test: one Omani rial is worth more than one dollar, so OMR 50,000 must become **more** than USD 50,000. If you get a smaller number, you have the rate upside down.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'مثال مسار پترولیوم در مارس (نرخ‌های یورو فرضی): در 10 مارس قطعات یدکی کمپرسور به ارزش 200,000 یورو در انبار مرکزی رسید شد و فاکتور سازنده اروپایی همان روز رسید؛ نرخ آن روز 1.10 دلار برای هر یورو بود. در 12 مارس شرکت تابعه عمانی تعمیر اساسی کمپرسور K-101 را تمام کرد؛ برگه ثبت خدمات به مبلغ 50,000 ریال عمان تأیید و فاکتور آن ثبت شد. هزینه با مرکز هزینه ایستگاه تقویت فشار و نشان بازیافت‌پذیر ثبت می‌شود تا طبق قرارداد نفتی قابل بازیافت باشد.',
            en: 'Masar Petroleum’s March example (euro rates illustrative): on 10 March compressor spares worth EUR 200,000 were received at the Central Warehouse and the European manufacturer’s invoice arrived the same day; the rate that day was 1.10 dollars per euro. On 12 March the Omani subsidiary finished the overhaul of compressor K-101; the service entry sheet for OMR 50,000 was accepted and its invoice posted. The cost carries the compressor station cost centre and the recoverable flag so that it can be recovered under the petroleum contract.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های اولیه با نرخ تاریخ معامله (به دلار)', en: 'Initial entries at the transaction-date rate (in USD)' },
          entries: [
            {
              date: t('10 مارس', '10 Mar'),
              lines: [
                { account: ac.inventory, debit: 220000 },
                { account: ac.grir, credit: 220000 },
              ],
              memo: t('رسید کالا (GRN): 200,000 یورو × 1.10', 'GRN: EUR 200,000 × 1.10'),
            },
            {
              date: t('10 مارس', '10 Mar'),
              lines: [
                { account: ac.grir, debit: 220000 },
                { account: ac.ap, credit: 220000 },
              ],
              memo: t('فاکتور سازنده اروپایی، مبلغ ارزی 200,000 یورو روی سند ذخیره می‌شود', 'European manufacturer’s invoice; the foreign amount EUR 200,000 is stored on the document'),
            },
            {
              date: t('12 مارس', '12 Mar'),
              lines: [
                { account: ac.repairs, debit: 130040 },
                { account: ac.grir, credit: 130040 },
              ],
              memo: t('تأیید SES تعمیر اساسی K-101: 50,000 ریال عمان × 2.6008؛ نشان بازیافت R', 'SES accepted for the K-101 overhaul: OMR 50,000 × 2.6008; recoverable flag R'),
            },
            {
              date: t('12 مارس', '12 Mar'),
              lines: [
                { account: ac.grir, debit: 130040 },
                { account: ac.apGroup, credit: 130040 },
              ],
              memo: t('فاکتور مسار پترولیوم خدمات عمان', 'Invoice from Masar Petroleum Oman Services'),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'ERP روی هر سطر سند دو مبلغ نگه می‌دارد: مبلغ ارزی (200,000 یورو) و مبلغ به واحد پول عملیاتی (220,000 دلار). تسعیر پایان دوره از همین دو عدد استفاده می‌کند. اگر فاکتور روزی برسد که نرخ با روز رسید کالا فرق دارد، تفاوت مربوط به بدهی ارزی است و باید به حساب تفاوت تسعیر برود؛ تنظیمات ERP را طوری بچینید که این تفاوت به اشتباه به بهای موجودی اضافه نشود.',
            en: 'The ERP keeps two amounts on every document line: the foreign amount (EUR 200,000) and the functional currency amount (USD 220,000). The period-end revaluation uses exactly these two figures. If the invoice arrives on a day when the rate differs from the GRN date, the difference relates to the foreign currency liability and belongs in an exchange difference account; set up the ERP so that it does not end up in the inventory cost by mistake.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'monetary-items',
      title: { fa: 'اقلام پولی و غیرپولی', en: 'Monetary and Non-Monetary Items' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در پایان دوره همه مانده‌های ارزی تسعیر نمی‌شوند. معیار IAS 21 این است: **قلم پولی** حقِ دریافت یا تعهدِ پرداختِ تعداد **ثابت یا قابل تعیینی** واحد پول است. اگر قرار است در آینده دقیقاً 200,000 یورو بپردازیم، ارزش دلاری آن با نرخ ارز تغییر می‌کند؛ پس باید تسعیر شود. **قلم غیرپولی** چنین حق یا تعهدی ندارد؛ مثلاً قطعه یدکی در انبار قرار نیست به تعداد معینی یورو تبدیل شود.',
            en: 'Not every foreign currency balance is revalued at period end. The IAS 21 test is this: a **monetary item** is a right to receive, or an obligation to deliver, a **fixed or determinable** number of units of currency. If we must pay exactly EUR 200,000 in future, its dollar value moves with the rate, so it is revalued. A **non-monetary item** carries no such right or obligation; a spare part in the warehouse, for example, will not turn into a set number of euros.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'اقلام ارزی یک شرکت نفت و گاز در پایان دوره', en: 'An oil and gas company’s foreign currency items at period end' },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'پولی یا غیرپولی؟', en: 'Monetary or non-monetary?' },
            { fa: 'در پایان دوره', en: 'At period end' },
          ],
          rows: [
            [t('موجودی بانک ارزی', 'Foreign currency bank balance'), t('پولی', 'Monetary'), t('تسعیر با نرخ پایان دوره', 'Revalued at the closing rate')],
            [t('حساب‌های دریافتنی از خریدار نفت یا شریک', 'Receivables from a crude buyer or a partner'), t('پولی', 'Monetary'), t('تسعیر با نرخ پایان دوره', 'Revalued at the closing rate')],
            [t('حساب‌های پرداختنی، GR/IR و هزینه‌های تعهدی ارزی', 'Foreign currency payables, GR/IR and accruals'), t('پولی', 'Monetary'), t('تسعیر با نرخ پایان دوره', 'Revalued at the closing rate')],
            [t('وام بانکی و بدهی اجاره ارزی', 'Foreign currency bank loans and lease liabilities'), t('پولی', 'Monetary'), t('تسعیر با نرخ پایان دوره', 'Revalued at the closing rate')],
            [t('ذخیره‌ای که با پول نقد تسویه می‌شود (مثل ذخیره برچیدن تأسیسات)', 'Provisions settled in cash (such as a decommissioning provision)'), t('پولی', 'Monetary'), t('تسعیر با نرخ پایان دوره', 'Revalued at the closing rate')],
            [t('موجودی مواد و قطعات، OCTG', 'Materials and spares inventory, OCTG'), t('غیرپولی', 'Non-monetary'), t('همان نرخ تاریخ معامله؛ تسعیر نمی‌شود', 'Stays at the transaction-date rate; not revalued')],
            [t('دارایی‌های نفت و گاز، دارایی‌های ثابت و دارایی حق استفاده', 'Oil and gas properties, PP&E and right-of-use assets'), t('غیرپولی', 'Non-monetary'), t('همان نرخ تاریخ معامله؛ تسعیر نمی‌شود', 'Stays at the transaction-date rate; not revalued')],
            [t('پیش‌پرداخت به تأمین‌کننده برای کالا یا خدمات', 'Advances paid to suppliers for goods or services'), t('غیرپولی', 'Non-monetary'), t('همان نرخ روز پرداخت؛ تسعیر نمی‌شود', 'Stays at the payment-date rate; not revalued')],
          ],
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'اقلام پولی', en: 'Monetary items' },
            items: [
              { fa: 'در هر تاریخ گزارشگری با **نرخ پایان دوره** تسعیر می‌شوند', en: 'Revalued at the **closing rate** at each reporting date' },
              { fa: 'تفاوت تسعیر در **سود و زیان** همان دوره شناسایی می‌شود', en: 'The exchange difference goes to **profit or loss** of the period' },
              { fa: 'هنگام تسویه، تفاوت نهایی هم در سود و زیان می‌رود', en: 'On settlement, the final difference also goes to profit or loss' },
            ],
          },
          right: {
            title: { fa: 'اقلام غیرپولی', en: 'Non-monetary items' },
            items: [
              { fa: 'اگر به بهای تمام‌شده ثبت شده‌اند، با **نرخ تاریخ معامله** می‌مانند', en: 'If carried at cost, they stay at the **transaction-date rate**' },
              { fa: 'اگر به ارزش منصفانه ثبت می‌شوند، با نرخ تاریخ اندازه‌گیری ارزش منصفانه', en: 'If carried at fair value, at the rate on the date fair value is measured' },
              { fa: 'تسعیر پایان دوره روی آن‌ها اجرا نمی‌شود', en: 'The period-end revaluation run does not touch them' },
            ],
          },
        },
        {
          type: 'p',
          text: {
            fa: 'به مثال 10 مارس برگردیم. یک فاکتور، دو رفتار: **بدهی** 200,000 یورویی به سازنده قلم پولی است و هر ماه تسعیر می‌شود؛ اما **قطعات یدکی** همان فاکتور، قلم غیرپولی‌اند و تا مصرف یا فروش با همان 220,000 دلار در دفاتر می‌مانند، هر قدر هم یورو بالا و پایین برود.',
            en: 'Back to the 10 March example. One invoice, two treatments: the EUR 200,000 **liability** to the manufacturer is monetary and is revalued every month; the **spares** on the same invoice are non-monetary and stay in the books at USD 220,000 until they are used or sold, however much the euro moves.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'پیش‌پرداخت ارزی (IFRIC 22)', en: 'Advance payments in foreign currency (IFRIC 22)' },
          text: {
            fa: 'اگر مسار پیش از تحویل، 40,000 یورو پیش‌پرداخت به سازنده کمپرسور بدهد، پیش‌پرداخت یک قلم غیرپولی است: حق دریافت کالاست، نه حق دریافت یورو. طبق IFRIC 22، نرخ روز پرداخت پیش‌پرداخت، بهای آن بخش از کالا را قطعی می‌کند. پس هنگام رسیدن کالا، آن بخش با نرخ روز پیش‌پرداخت به بهای موجودی منتقل می‌شود و فقط مانده پرداخت‌نشده با نرخ روز رسید ثبت می‌شود.',
            en: 'If Masar pays the compressor manufacturer an advance of EUR 40,000 before delivery, the advance is non-monetary: it is a right to receive goods, not a right to receive euros. Under IFRIC 22, the rate on the day the advance is paid fixes the cost of that part of the goods. So when the goods arrive, that part moves into inventory at the advance-date rate, and only the unpaid balance is recorded at the receipt-date rate.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' },
          text: {
            fa: 'تسعیر موجودی کالا، دارایی‌های ثابت یا پیش‌پرداخت‌ها؛ فراموش کردن حساب واسط GR/IR و هزینه‌های تعهدی ارزی که پولی‌اند؛ و تسعیر مانده‌های دلاری در شرکتی که واحد پول عملیاتی‌اش خود دلار است. برای شرکت MP01 دلار ارز نیست و هیچ تفاوت تسعیری ندارد.',
            en: 'Revaluing inventory, fixed assets or advances; forgetting the GR/IR account and foreign currency accruals, which are monetary; and revaluing dollar balances in a company whose functional currency is the dollar itself. For MP01 the dollar is not a foreign currency and has no exchange difference.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'revaluation',
      title: { fa: 'تسعیر پایان دوره؛ تحقق‌یافته و تحقق‌نیافته', en: 'Period-End Revaluation; Realised and Unrealised' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در پایان هر دوره (برای مسار، پایان هر ماه) همه اقلام پولی ارزی با **نرخ پایان دوره** (Closing rate) دوباره اندازه‌گیری می‌شوند. فاصله مبلغ جدید با مبلغ دفتری فعلی **تفاوت تسعیر** است و در سود و زیان همان دوره شناسایی می‌شود. به این کار **تسعیر مانده‌های ارزی** یا ارزیابی مجدد می‌گوییم.',
            en: 'At the end of each period (for Masar, every month-end) every foreign currency monetary item is remeasured at the **closing rate**. The gap between the new amount and the current carrying amount is the **exchange difference**, recognised in profit or loss of that period. This is called the **revaluation** of foreign currency balances.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'تفاوت تسعیر = (مبلغ ارزی × نرخ پایان دوره) منهای مبلغ دفتری به واحد پول عملیاتی',
            en: 'Exchange difference = (Foreign amount × Closing rate) minus Carrying amount in functional currency',
          },
          note: {
            fa: 'برای دارایی، افزایش یعنی سود و کاهش یعنی زیان؛ برای بدهی برعکس: کاهش بدهی سود است و افزایش آن زیان.',
            en: 'For an asset, an increase is a gain and a decrease a loss; for a liability it is the other way round: a smaller liability is a gain and a larger one a loss.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'جدول تسعیر MP01 در 31 مارس؛ نرخ پایان دوره یورو 1.08 (فرضی) و ریال عمان 2.6008 (نرخ ثابت رسمی)',
            en: 'MP01 revaluation at 31 March; closing rates EUR 1.08 (illustrative) and OMR 2.6008 (official peg)',
          },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'مبلغ ارزی', en: 'Foreign amount' },
            { fa: 'مبلغ دفتری (دلار)', en: 'Carrying amount (USD)' },
            { fa: 'با نرخ پایان دوره (دلار)', en: 'At closing rate (USD)' },
            { fa: 'تفاوت تسعیر', en: 'Exchange difference' },
          ],
          numericCols: [2, 3],
          rows: [
            [t('بدهی به سازنده اروپایی (نرخ ثبت 1.10)', 'Payable to the European manufacturer (booked at 1.10)'), t('200,000 یورو', 'EUR 200,000'), 220000, 216000, t('سود 4,000', 'gain 4,000')],
            [t('حساب بانکی یورویی (نرخ دفتری 1.09)', 'EUR bank account (carried at 1.09)'), t('50,000 یورو', 'EUR 50,000'), 54500, 54000, t('زیان 500', 'loss 500')],
            [t('وام یورویی (نرخ دفتری 1.10)', 'EUR loan (carried at 1.10)'), t('1,000,000 یورو', 'EUR 1,000,000'), 1100000, 1080000, t('سود 20,000', 'gain 20,000')],
            [t('بدهی به مسار پترولیوم خدمات عمان', 'Payable to Masar Petroleum Oman Services'), t('50,000 ریال عمان', 'OMR 50,000'), 130040, 130040, t('صفر (نرخ ثابت)', 'nil (pegged rate)')],
            [t('قطعات یدکی در انبار (غیرپولی)', 'Spares in the warehouse (non-monetary)'), t('200,000 یورو', 'EUR 200,000'), 220000, 220000, t('تسعیر نمی‌شود', 'not revalued')],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'خواندن جدول: یورو از 1.10 به 1.08 دلار ضعیف شده است. پس بدهی‌های یورویی ارزان‌تر شده‌اند (سود 4,000 و 20,000) و دارایی یورویی کم‌ارزش‌تر شده است (زیان 500). جمع: سود 24,000 و زیان 500، یعنی سود خالص 23,500؛ همان اعدادی که در ابتدای درس در تراز آزمایشی دیدیم. بدهی ریالی به دلیل نرخ ثابت تفاوتی ندارد.',
            en: 'Reading the table: the euro has weakened from 1.10 to 1.08 dollars. So euro liabilities have become cheaper (gains of 4,000 and 20,000) and the euro asset is worth less (a loss of 500). In total: gains of 24,000 and a loss of 500, a net gain of 23,500; the very figures we saw in the trial balance at the start of the lesson. The rial payable has no difference because of the peg.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت تسعیر پایان ماه (به دلار)', en: 'Month-end revaluation entry (in USD)' },
          entries: [
            {
              date: t('31 مارس', '31 Mar'),
              lines: [
                { account: ac.ap, debit: 4000 },
                { account: ac.loan, debit: 20000 },
                { account: ac.lossU, debit: 500 },
                { account: ac.bankEur, credit: 500 },
                { account: ac.gainU, credit: 24000 },
              ],
              memo: t('تسعیر اقلام پولی یورویی با نرخ 1.08', 'Revaluation of euro monetary items at 1.08'),
            },
          ],
        },
        {
          type: 'h',
          text: { fa: 'تحقق‌یافته یا تحقق‌نیافته؟', en: 'Realised or unrealised?' },
        },
        {
          type: 'p',
          text: {
            fa: '**تفاوت تسعیر تحقق‌نیافته** از تسعیر مانده‌های باز در پایان دوره می‌آید؛ هنوز پولی رد و بدل نشده است. **تفاوت تسعیر تحقق‌یافته** هنگام تسویه (پرداخت یا دریافت) ایجاد می‌شود. IAS 21 این دو را از هم جدا نمی‌کند: هر دو در سود و زیان می‌روند. اما مدیران، ممیزان مالیاتی و گزارش‌های داخلی معمولاً می‌خواهند آن‌ها را جدا ببینند؛ برای همین ERP آن‌ها را در حساب‌های جداگانه ثبت می‌کند.',
            en: 'An **unrealised exchange difference** comes from revaluing open balances at period end; no cash has changed hands yet. A **realised exchange difference** arises on settlement (payment or collection). IAS 21 does not separate the two: both go to profit or loss. But managers, tax auditors and internal reports usually want to see them apart, so the ERP posts them to separate accounts.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'در 20 آوریل مسار بدهی 200,000 یورویی را می‌پردازد. نرخ آن روز 1.09 است، پس بانک برای خرید 200,000 یورو، 218,000 دلار از حساب دلاری برداشت می‌کند. مبلغ دفتری بدهی پس از تسعیر مارس 216,000 دلار است؛ 2,000 دلار بیشتر پرداخت شده است.',
            en: 'On 20 April Masar pays the EUR 200,000 payable. The rate that day is 1.09, so the bank takes USD 218,000 from the dollar account to buy EUR 200,000. The payable’s carrying amount after the March revaluation is USD 216,000; 2,000 more has been paid.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'پرداخت و تفاوت تسعیر تحقق‌یافته (به دلار)', en: 'Payment and the realised exchange difference (in USD)' },
          entries: [
            {
              date: t('20 آوریل', '20 Apr'),
              lines: [
                { account: ac.ap, debit: 216000 },
                { account: ac.lossR, debit: 2000 },
                { account: ac.bankUsd, credit: 218000 },
              ],
              memo: t('پرداخت 200,000 یورو با نرخ 1.09', 'Payment of EUR 200,000 at 1.09'),
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'اثر این بدهی بر سود و زیان هر ماه (دلار)', en: 'Effect of this payable on each month’s profit or loss (USD)' },
          head: [
            { fa: 'ماه', en: 'Month' },
            { fa: 'نوع', en: 'Type' },
            { fa: 'سود', en: 'Gain' },
            { fa: 'زیان', en: 'Loss' },
          ],
          numericCols: [2, 3],
          rows: [
            [t('مارس', 'March'), t('تحقق‌نیافته (220,000 به 216,000)', 'Unrealised (220,000 to 216,000)'), 4000, blank],
            [t('آوریل', 'April'), t('تحقق‌یافته (216,000 به 218,000)', 'Realised (216,000 to 218,000)'), blank, 2000],
            [t('خالص کل دوره عمر بدهی', 'Net over the life of the payable'), t('220,000 ثبت شد، 218,000 پرداخت شد', 'Booked 220,000, paid 218,000'), 2000, blank],
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'بسیاری از ERPها ثبت تسعیر پایان ماه را **با برگشت خودکار** در روز اول ماه بعد انجام می‌دهند؛ بعضی دیگر مبلغ دفتری را به‌روز نگه می‌دارند (مثل این درس). جمع اثر بر سود و زیان در هر دو روش یکی است و فقط تفکیک تحقق‌یافته و تحقق‌نیافته فرق می‌کند (بخش ERP). از دوره‌های سالانه‌ای که از 1 ژانویه 2027 شروع می‌شوند، استاندارد IFRS 18 جای IAS 1 را می‌گیرد و تفاوت تسعیر را در همان طبقه‌ای از صورت سود و زیان نشان می‌دهد که درآمد و هزینه آن قلم در آن است: تفاوت تسعیر وام در طبقه تأمین مالی و تفاوت تسعیر بدهی تجاری در طبقه عملیاتی.',
            en: 'Many ERPs post the month-end revaluation **with an automatic reversal** on the first day of the next month; others keep the carrying amount updated (as in this lesson). The total effect on profit or loss is the same under both, and only the realised/unrealised split differs (see the ERP section). For annual periods beginning on or after 1 January 2027, IFRS 18 replaces IAS 1 and places exchange differences in the same category of the income statement as the income and expenses of the item that caused them: differences on a loan in the financing category, differences on a trade payable in the operating category.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' },
          text: {
            fa: 'سود تسعیر تحقق‌نیافته را پول نقد یا قابل تقسیم فرض نکنید. برای مانده‌های پایان دوره از نرخ میانگین استفاده نکنید؛ نرخ پایان دوره لازم است. حساب‌های بانکی ارزی را فراموش نکنید. و هنگام تسویه، تفاوت را با مبلغ **دفتری پس از آخرین تسعیر** بسنجید، نه با مبلغ ثبت اولیه؛ وگرنه یک سود یا زیان را دو بار ثبت کرده‌اید.',
            en: 'Do not treat an unrealised exchange gain as cash or as distributable. Do not use the average rate for period-end balances; the closing rate is required. Do not forget foreign currency bank accounts. And on settlement, measure the difference against the **carrying amount after the latest revaluation**, not the original booking; otherwise you record the same gain or loss twice.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'translation',
      title: { fa: 'تبدیل صورت‌های مالی عملیات خارجی', en: 'Translating a Foreign Operation' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**عملیات خارجی** یک شرکت تابعه، شعبه، شرکت وابسته یا مشارکت است که فعالیتش در کشوری دیگر یا با واحد پولی غیر از واحد پول شرکت گزارشگر انجام می‌شود. شرکت تابعه دفاتر خودش را با واحد پول عملیاتی خودش نگه می‌دارد (MP02 به ریال عمان و MP03 به یورو). برای تهیه صورت‌های مالی تلفیقی گروه مسار به دلار، صورت‌های آن‌ها باید **تبدیل** (Translation) شوند. این کار با تسعیر معاملات ارزی فرق دارد و تفاوتش هم به جای دیگری می‌رود.',
            en: 'A **foreign operation** is a subsidiary, branch, associate or joint arrangement whose activities are based or conducted in a country or currency other than those of the reporting entity. The subsidiary keeps its own books in its own functional currency (MP02 in Omani rials, MP03 in euros). To prepare the Masar group’s consolidated statements in dollars, their statements must be **translated**. This is different from revaluing foreign transactions, and its difference goes somewhere else.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'دارایی‌ها و بدهی‌ها', en: 'Assets and liabilities' },
              text: { fa: 'با **نرخ پایان دوره** تبدیل می‌شوند (همه آن‌ها، چه پولی و چه غیرپولی).', en: 'Translated at the **closing rate** (all of them, monetary and non-monetary).' },
            },
            {
              title: { fa: 'درآمدها و هزینه‌ها', en: 'Income and expenses' },
              text: { fa: 'با نرخ تاریخ هر معامله؛ در عمل اگر نوسان زیاد نباشد، با **نرخ میانگین** دوره.', en: 'At the rate on each transaction date; in practice at the period’s **average rate** if rates do not fluctuate much.' },
            },
            {
              title: { fa: 'اقلام حقوق مالکانه', en: 'Equity items' },
              text: { fa: 'سرمایه و اندوخته‌های زمان تحصیل با **نرخ تاریخی** می‌مانند.', en: 'Share capital and reserves at acquisition stay at **historical rates**.' },
            },
            {
              title: { fa: 'تفاوت تبدیل', en: 'Translation difference' },
              text: { fa: 'تفاوت حاصل در **سود و زیان جامع دیگر (OCI)** شناسایی و در **اندوخته تسعیر عملیات خارجی** در حقوق مالکانه انباشته می‌شود.', en: 'The resulting difference is recognised in **other comprehensive income (OCI)** and accumulated in the **foreign currency translation reserve** in equity.' },
            },
            {
              title: { fa: 'واگذاری', en: 'Disposal' },
              text: { fa: 'وقتی گروه عملیات خارجی را واگذار می‌کند، مانده اندوخته تسعیر آن به سود و زیان منتقل (طبقه‌بندی مجدد) می‌شود.', en: 'When the group disposes of the foreign operation, its translation reserve is reclassified to profit or loss.' },
            },
          ],
        },
        {
          type: 'table',
          caption: {
            fa: 'تبدیل صورت‌های مالی مسار پترولیوم اروپا (MP03) برای سال 2026؛ نرخ‌ها دلار برای هر یورو و فرضی‌اند',
            en: 'Translating Masar Petroleum Europe (MP03) for 2026; rates are USD per EUR and illustrative',
          },
          head: [
            { fa: 'قلم', en: 'Line' },
            { fa: 'یورو', en: 'EUR' },
            { fa: 'نرخ', en: 'Rate' },
            { fa: 'دلار', en: 'USD' },
          ],
          numericCols: [1, 3],
          rows: [
            [t('دارایی‌ها', 'Assets'), 1500000, t('پایان دوره 1.05', 'closing 1.05'), 1575000],
            [t('بدهی‌ها', 'Liabilities'), 300000, t('پایان دوره 1.05', 'closing 1.05'), 315000],
            [t('**خالص دارایی‌ها**', '**Net assets**'), 1200000, blank, 1260000],
            [t('خالص دارایی‌های ابتدای سال', 'Net assets at the start of the year'), 1000000, t('ابتدای سال 1.10', 'opening 1.10'), 1100000],
            [t('سود سال', 'Profit for the year'), 200000, t('میانگین 1.08', 'average 1.08'), 216000],
            [t('کسر می‌شود: زیان تبدیل (OCI)', 'Less: translation loss (OCI)'), blank, blank, 56000],
            [t('**حقوق مالکانه پایان سال**', '**Equity at year end**'), 1200000, blank, 1260000],
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'تفاوت تبدیل = 1,260,000 منهای (1,100,000 + 216,000) = زیان 56,000',
            en: 'Translation difference = 1,260,000 minus (1,100,000 + 216,000) = loss of 56,000',
          },
          note: {
            fa: 'تجزیه: خالص دارایی ابتدای سال 1,000,000 × (1.10 منهای 1.05) = 50,000؛ سود سال 200,000 × (1.08 منهای 1.05) = 6,000؛ جمع زیان 56,000.',
            en: 'Breakdown: opening net assets 1,000,000 × (1.10 minus 1.05) = 50,000; profit 200,000 × (1.08 minus 1.05) = 6,000; total loss 56,000.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'برای MP02 در عمان، نرخ ابتدای سال، میانگین و پایان دوره همه 2.6008 است؛ پس تفاوت تبدیل تقریباً صفر می‌شود. ماژول تلفیق باز هم همان گام‌ها را اجرا می‌کند، چون روش به نرخ ثابت وابسته نیست. اگر نرخ ثابت روزی تغییر کند، همین ساختار تفاوت را درست نشان می‌دهد.',
            en: 'For MP02 in Oman, the opening, average and closing rates are all 2.6008, so the translation difference is close to zero. The consolidation module still runs the same steps, because the method does not depend on the peg. If the peg ever changes, the same structure will show the difference correctly.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          text: {
            fa: 'همین روش وقتی هم به کار می‌رود که یک شرکت صورت‌های مالی خودش را به واحد پولی غیر از واحد پول عملیاتی ارائه کند. اگر واحد پول عملیاتی متعلق به اقتصادی با تورم بسیار بالا (ابرتورمی) باشد، پیش از تبدیل ابتدا IAS 29 اعمال می‌شود؛ این موضوع خارج از این درس است.',
            en: 'The same method applies when an entity presents its own statements in a currency other than its functional currency. If the functional currency is that of a hyperinflationary economy, IAS 29 is applied first, before translation; that topic is beyond this lesson.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'erp-fx',
      title: { fa: 'ارز در سیستم ERP', en: 'Foreign Currency in the ERP' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در ERP هر سطر سند می‌تواند سه مبلغ داشته باشد: **ارز سند** (پولی که فاکتور با آن صادر شده)، **ارز کد شرکت** (واحد پول عملیاتی، برای MP01 دلار) و **ارز گروه** (برای تلفیق، در گروه مسار دلار). تسعیر و تبدیل همه روی همین سه لایه کار می‌کنند. داده‌های پایه زیر باید پیش از اولین سند درست تنظیم شوند:',
            en: 'In the ERP each document line can carry three amounts: the **document currency** (the currency of the invoice), the **company code currency** (the functional currency, USD for MP01) and the **group currency** (for consolidation, USD in the Masar group). Revaluation and translation both work on these three layers. The following master data must be right before the first document is posted:',
          },
        },
        {
          type: 'table',
          caption: { fa: 'داده‌های پایه ارز در ERP', en: 'Foreign currency master data in the ERP' },
          head: [
            { fa: 'داده پایه', en: 'Master data' },
            { fa: 'نمونه در مسار پترولیوم', en: 'Example at Masar Petroleum' },
          ],
          rows: [
            [t('کدهای ارز (استاندارد ISO 4217) و تعداد اعشار', 'Currency codes (ISO 4217) and decimals'), t('USD و EUR با دو رقم اعشار؛ OMR با سه رقم اعشار (هر ریال 1,000 بیسه است)', 'USD and EUR with two decimals; OMR with three (one rial is 1,000 baisa)')],
            [t('انواع نرخ ارز', 'Exchange-rate types'), t('نرخ روزانه معاملات، نرخ پایان ماه، نرخ میانگین ماه، نرخ خرید و فروش بانک', 'Daily transaction rate, month-end closing rate, monthly average rate, bank buying and selling rates')],
            [t('ارز کد شرکت', 'Company code currency'), t('MP01 دلار؛ MP02 ریال عمان؛ MP03 یورو', 'MP01 USD; MP02 OMR; MP03 EUR')],
            [t('تنظیم حساب‌های کل', 'GL account settings'), t('کدام حساب‌ها تسعیر شوند: حساب‌های دریافتنی و پرداختنی، GR/IR، بانک و وام؛ موجودی و دارایی‌ها تسعیر نشوند', 'Which accounts are revalued: receivables, payables, GR/IR, bank and loans; inventory and assets are not')],
            [t('ارز پیش‌فرض تأمین‌کننده و مشتری', 'Default vendor and customer currency'), t('سازنده اروپایی: EUR؛ خریدار نفت خام: USD؛ MP02: OMR', 'European manufacturer: EUR; crude buyer: USD; MP02: OMR')],
            [t('نگاشت حساب‌های تفاوت تسعیر', 'Exchange difference account mapping'), t('4910 و 5810 برای تحقق‌یافته؛ 4920 و 5820 برای تحقق‌نیافته', '4910 and 5810 for realised; 4920 and 5820 for unrealised')],
          ],
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: '1. بارگذاری نرخ‌ها', en: '1. Load the rates' },
              text: {
                fa: 'خزانه‌داری هر روز نرخ‌ها را از منبع مصوب (برای ریال عمان نرخ رسمی بانک مرکزی عمان، برای یورو یک نرخ مرجع مصوب) در جدول نرخ ارز بارگذاری می‌کند؛ نرخ پایان ماه را نفر دوم تأیید می‌کند.',
                en: 'Treasury loads the rates daily from the approved source (the Central Bank of Oman’s official rate for the rial, an approved reference rate for the euro) into the exchange-rate table; a second person approves the month-end rate.',
              },
            },
            {
              title: { fa: '2. اجرای آزمایشی', en: '2. Test run' },
              text: {
                fa: 'حسابدار دفتر کل تسعیر را در حالت آزمایشی برای MP01 و تاریخ 31 مارس اجرا می‌کند و گزارش آن را (قلم به قلم، مثل جدول بخش قبل) بررسی می‌کند.',
                en: 'The GL accountant runs the revaluation in test mode for MP01 at 31 March and reviews the item-by-item report (like the table in the previous section).',
              },
            },
            {
              title: { fa: '3. ثبت', en: '3. Post' },
              text: {
                fa: 'پس از بررسی، تسعیر ثبت می‌شود؛ در روش برگشت خودکار، ERP سند برگشت را برای روز اول ماه بعد هم می‌سازد.',
                en: 'After review, the revaluation is posted; under the automatic-reversal method the ERP also creates the reversal for the first day of the next month.',
              },
            },
            {
              title: { fa: '4. تسویه‌ها', en: '4. Settlements' },
              text: {
                fa: 'هنگام پرداخت یا دریافت، ERP تفاوت تسعیر تحقق‌یافته را خودکار به حساب 4910 یا 5810 می‌برد؛ کاربر آن را دستی محاسبه نمی‌کند.',
                en: 'On payment or collection, the ERP posts the realised difference to 4910 or 5810 automatically; nobody calculates it by hand.',
              },
            },
            {
              title: { fa: '5. تلفیق و بررسی', en: '5. Consolidate and review' },
              text: {
                fa: 'ماژول تلفیق MP02 و MP03 را با نرخ پایان دوره و میانگین تبدیل می‌کند. کنترلر مالی سود و زیان ارزی را با یک آزمون تحلیلی ساده (مانده ارزی × تغییر نرخ) مقایسه و تأیید می‌کند.',
                en: 'The consolidation module translates MP02 and MP03 at closing and average rates. The financial controller compares the FX result with a simple analytical test (foreign balance × rate change) and approves it.',
              },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'چه کسی چه می‌کند؟', en: 'Who does what?' },
          head: [
            { fa: 'نقش', en: 'Role' },
            { fa: 'مسئولیت', en: 'Responsibility' },
          ],
          rows: [
            [t('خزانه‌داری', 'Treasury'), t('بارگذاری و تأیید نرخ‌ها، خرید و فروش ارز، مدیریت ریسک ارزی', 'Loads and approves rates, buys and sells currency, manages FX risk')],
            [t('حسابدار دفتر کل', 'GL accountant'), t('اجرای آزمایشی و نهایی تسعیر، بررسی گزارش، ثبت توضیح در پرونده بستن ماه', 'Test and final revaluation runs, reviews the report, documents it in the month-end file')],
            [t('حسابداران پرداختنی و دریافتنی', 'AP and AR accountants'), t('ثبت فاکتورها با ارز درست و تسویه با تفاوت تحقق‌یافته', 'Post invoices in the right currency and settle with the realised difference')],
            [t('کنترلر مالی', 'Financial controller'), t('تأیید نتیجه تسعیر و تبدیل، بررسی تحلیلی', 'Approves revaluation and translation results, analytical review')],
            [t('کاربر کلیدی ERP', 'ERP key user'), t('نگهداری تنظیمات حساب‌ها و انواع نرخ؛ هیچ تغییر نرخی بدون گردش کار تأیید', 'Maintains account settings and rate types; no rate change without the approval workflow')],
          ],
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های خودکار ERP در روش برگشت خودکار، برای بدهی 200,000 یورویی (به دلار)', en: 'ERP automatic postings under the automatic-reversal method, for the EUR 200,000 payable (in USD)' },
          entries: [
            {
              date: t('31 مارس', '31 Mar'),
              lines: [
                { account: ac.ap, debit: 4000 },
                { account: ac.gainU, credit: 4000 },
              ],
              memo: t('اجرای تسعیر با نرخ 1.08؛ برگشت خودکار در 1 آوریل', 'Revaluation run at 1.08; auto-reversal on 1 April'),
            },
            {
              date: t('1 آوریل', '1 Apr'),
              lines: [
                { account: ac.gainU, debit: 4000 },
                { account: ac.ap, credit: 4000 },
              ],
              memo: t('برگشت خودکار؛ بدهی دوباره 220,000 می‌شود', 'Automatic reversal; the payable is back at 220,000'),
            },
            {
              date: t('20 آوریل', '20 Apr'),
              lines: [
                { account: ac.ap, debit: 220000 },
                { account: ac.bankUsd, credit: 218000 },
                { account: ac.gainR, credit: 2000 },
              ],
              memo: t('پرداخت با نرخ 1.09؛ تفاوت با مبلغ ثبت اولیه (220,000) سنجیده می‌شود', 'Payment at 1.09; the difference is measured against the original booking (220,000)'),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'در عمل: ارز و بازیافت هزینه', en: 'In practice: foreign currency and cost recovery' },
          text: {
            fa: 'حساب‌های قرارداد نفتی معمولاً به یک ارز قراردادی (اغلب دلار) نگهداری می‌شود. روش حسابداری قرارداد معمولاً می‌گوید هزینه‌هایی که با ارزهای دیگر پرداخت شده‌اند با کدام نرخ تبدیل شوند و آیا سود و زیان تسعیر قابل بازیافت است یا نه؛ متن قرارداد خودتان را بخوانید. در ERP، حساب‌های تفاوت تسعیر هم باید طبق همان قاعده کد هزینه و نشان بازیافت بگیرند، مثلاً `MP01 / CC-ARY-CMP / 5810 / N / Operating`، و مدرک نرخ هر روز نگهداری شود.',
            en: 'Petroleum contract accounts are usually kept in a contract currency (often the US dollar). The contract’s accounting procedure usually says which rate converts costs paid in other currencies and whether exchange gains and losses are recoverable; read your own contract. In the ERP, exchange difference accounts must also carry a cost code and recoverable flag under that rule, for example `MP01 / CC-ARY-CMP / 5810 / N / Operating`, and the evidence of each day’s rate must be kept.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'نقاط کنترل', en: 'Control points' },
          text: {
            fa: 'نرخ‌های قدیمی که به‌روز نشده‌اند؛ تغییر دستی نرخ روی سند بدون تأیید؛ اجرای دوباره تسعیر برای یک تاریخ؛ و حساب‌هایی که به اشتباه برای تسعیر علامت خورده‌اند (مثل موجودی کالا). گزارش «نرخ‌های تغییریافته» و «اسناد با نرخ دستی» را هر ماه بررسی کنید.',
            en: 'Stale rates that were never updated; manual rate overrides on documents without approval; running the revaluation twice for the same date; and accounts wrongly flagged for revaluation (such as inventory). Review the “changed rates” and “documents with manual rates” reports every month.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'practice',
      title: { fa: 'تمرین', en: 'Practice' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در همه تمرین‌ها شرکت مسار پترولیوم (MP01) با واحد پول عملیاتی دلار است، مگر خلافش گفته شود. نرخ‌های یورو فرضی‌اند و به صورت «دلار برای هر یورو» آمده‌اند؛ ریال عمان با نرخ ثابت 2.6008 دلار تبدیل می‌شود. اول خودتان حل کنید، بعد راه‌حل را باز کنید.',
            en: 'In every exercise the company is Masar Petroleum (MP01) with a US dollar functional currency, unless stated otherwise. Euro rates are illustrative and quoted as dollars per euro; the Omani rial converts at the fixed 2.6008. Solve it yourself first, then open the solution.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'ثبت با نرخ تاریخ معامله', en: 'Recording at the transaction-date rate' },
          difficulty: 'easy',
          problem: {
            fa: 'در 5 مه: (الف) مواد شیمیایی حفاری به ارزش 80,000 یورو از یک تأمین‌کننده اروپایی در انبار میدان رسید شد و فاکتور همان روز رسید؛ نرخ روز 1.12 است. (ب) برگه ثبت خدمات MP02 برای خدمات چاه AR-04 به مبلغ 15,000 ریال عمان تأیید و فاکتور آن ثبت شد. ثبت‌های MP01 را به دلار بنویسید.',
            en: 'On 5 May: (a) drilling chemicals worth EUR 80,000 from a European supplier were received at the Field Warehouse and the invoice arrived the same day; the rate is 1.12. (b) MP02’s service entry sheet for well services on AR-04 for OMR 15,000 was accepted and its invoice posted. Write MP01’s entries in USD.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('یورو', 'Euro'), text: t('80,000 × 1.12 = 89,600 دلار', '80,000 × 1.12 = USD 89,600') },
                { title: t('ریال عمان', 'Omani rial'), text: t('15,000 × 2.6008 = 39,012 دلار (عدد بزرگ‌تر از 15,000؛ جهت نرخ درست است)', '15,000 × 2.6008 = USD 39,012 (bigger than 15,000, so the rate direction is right)') },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: t('5 مه', '5 May'),
                  lines: [
                    { account: ac.inventory, debit: 89600 },
                    { account: ac.grir, credit: 89600 },
                  ],
                  memo: t('GRN مواد شیمیایی', 'GRN for the chemicals'),
                },
                {
                  date: t('5 مه', '5 May'),
                  lines: [
                    { account: ac.grir, debit: 89600 },
                    { account: ac.ap, credit: 89600 },
                  ],
                  memo: t('فاکتور تأمین‌کننده اروپایی (80,000 یورو)', 'European supplier’s invoice (EUR 80,000)'),
                },
                {
                  date: t('5 مه', '5 May'),
                  lines: [
                    { account: ac.wellServices, debit: 39012 },
                    { account: ac.grir, credit: 39012 },
                  ],
                  memo: t('تأیید SES خدمات چاه AR-04؛ نشان بازیافت R', 'SES accepted for well services on AR-04; recoverable flag R'),
                },
                {
                  date: t('5 مه', '5 May'),
                  lines: [
                    { account: ac.grir, debit: 39012 },
                    { account: ac.apGroup, credit: 39012 },
                  ],
                  memo: t('فاکتور MP02 (15,000 ریال عمان)', 'MP02 invoice (OMR 15,000)'),
                },
              ],
            },
          ],
          answer: {
            fa: 'مواد شیمیایی 89,600 و خدمات چاه 39,012 دلار ثبت می‌شوند؛ مبالغ ارزی روی اسناد می‌ماند.',
            en: 'The chemicals are recorded at USD 89,600 and the well services at USD 39,012; the foreign amounts stay on the documents.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'کدام اقلام تسعیر می‌شوند؟', en: 'Which items are revalued?' },
          difficulty: 'medium',
          problem: {
            fa: 'مانده‌های یورویی MP01 در 30 ژوئن در جدول آمده است؛ همه با نرخ 1.10 ثبت شده‌اند. نرخ پایان دوره 1.12 است. اقلام پولی را تسعیر کنید، اثر هر یک را بگویید و ثبت پایان ماه را بنویسید.',
            en: 'MP01’s euro balances at 30 June are in the table; all were booked at 1.10. The closing rate is 1.12. Revalue the monetary items, state the effect of each and write the month-end entry.',
          },
          given: {
            head: [
              { fa: 'قلم', en: 'Item' },
              { fa: 'یورو', en: 'EUR' },
              { fa: 'مبلغ دفتری (دلار)', en: 'Carrying amount (USD)' },
            ],
            numericCols: [1, 2],
            rows: [
              [t('حساب بانکی یورویی', 'EUR bank account'), 100000, 110000],
              [t('پیش‌پرداخت به سازنده کمپرسور', 'Advance paid to the compressor manufacturer'), 40000, 44000],
              [t('قطعات یدکی در انبار', 'Spares in the warehouse'), 60000, 66000],
              [t('حساب پرداختنی به تأمین‌کننده', 'Payable to a supplier'), 150000, 165000],
              [t('وام یورویی', 'EUR loan'), 500000, 550000],
            ],
          },
          hint: {
            fa: 'اول هر قلم را پولی یا غیرپولی کنید. یورو قوی شده است: دارایی پولی سود می‌دهد و بدهی پولی زیان.',
            en: 'First label each item monetary or non-monetary. The euro has strengthened: monetary assets gain and monetary liabilities lose.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'قلم', en: 'Item' },
                { fa: 'نوع', en: 'Type' },
                { fa: 'با نرخ 1.12', en: 'At 1.12' },
                { fa: 'اثر', en: 'Effect' },
              ],
              numericCols: [2],
              rows: [
                [t('بانک یورویی', 'EUR bank'), t('پولی', 'Monetary'), 112000, t('سود 2,000', 'gain 2,000')],
                [t('پیش‌پرداخت', 'Advance'), t('غیرپولی', 'Non-monetary'), 44000, t('تسعیر نمی‌شود', 'not revalued')],
                [t('قطعات یدکی', 'Spares'), t('غیرپولی', 'Non-monetary'), 66000, t('تسعیر نمی‌شود', 'not revalued')],
                [t('حساب پرداختنی', 'Payable'), t('پولی', 'Monetary'), 168000, t('زیان 3,000', 'loss 3,000')],
                [t('وام یورویی', 'EUR loan'), t('پولی', 'Monetary'), 560000, t('زیان 10,000', 'loss 10,000')],
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: t('30 ژوئن', '30 Jun'),
                  lines: [
                    { account: ac.bankEur, debit: 2000 },
                    { account: ac.gainU, credit: 2000 },
                  ],
                  memo: t('تسعیر بانک یورویی', 'Revaluation of the EUR bank account'),
                },
                {
                  date: t('30 ژوئن', '30 Jun'),
                  lines: [
                    { account: ac.lossU, debit: 13000 },
                    { account: ac.ap, credit: 3000 },
                    { account: ac.loan, credit: 10000 },
                  ],
                  memo: t('تسعیر حساب پرداختنی و وام یورویی', 'Revaluation of the EUR payable and loan'),
                },
              ],
            },
          ],
          answer: {
            fa: 'سود تحقق‌نیافته 2,000 و زیان تحقق‌نیافته 13,000، یعنی زیان خالص 11,000؛ پیش‌پرداخت و قطعات یدکی تسعیر نمی‌شوند.',
            en: 'Unrealised gain 2,000 and unrealised loss 13,000, a net loss of 11,000; the advance and the spares are not revalued.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'چرخه کامل یک حساب دریافتنی ارزی', en: 'The full cycle of a foreign currency receivable' },
          difficulty: 'medium',
          problem: {
            fa: 'در 10 نوامبر MP01 لوله‌های جداری مازاد (OCTG) را به یک اپراتور اروپایی به مبلغ 300,000 یورو فروخت (نرخ 1.10). نرخ 30 نوامبر 1.12 است و مشتری در 15 دسامبر 300,000 یورو به حساب بانکی یورویی مسار واریز کرد (نرخ 1.11). ثبت‌های فروش، تسعیر پایان نوامبر و وصول را بنویسید. (ثبت بهای تمام‌شده لوله‌ها جزو این تمرین نیست.)',
            en: 'On 10 November MP01 sold surplus casing (OCTG) to a European operator for EUR 300,000 (rate 1.10). The rate at 30 November is 1.12, and the customer paid EUR 300,000 into Masar’s euro bank account on 15 December (rate 1.11). Record the sale, the end-of-November revaluation and the collection. (The cost-of-sales entry for the pipes is not part of this exercise.)',
          },
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('فروش', 'Sale'), text: t('300,000 × 1.10 = 330,000', '300,000 × 1.10 = 330,000') },
                { title: t('30 نوامبر', '30 Nov'), text: t('300,000 × 1.12 = 336,000؛ دارایی 6,000 افزایش یافته: سود تحقق‌نیافته 6,000', '300,000 × 1.12 = 336,000; the asset grew by 6,000: unrealised gain 6,000') },
                { title: t('وصول', 'Collection'), text: t('300,000 × 1.11 = 333,000؛ مبلغ دفتری 336,000 است: زیان تحقق‌یافته 3,000', '300,000 × 1.11 = 333,000; the carrying amount is 336,000: realised loss 3,000') },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: t('10 نوامبر', '10 Nov'),
                  lines: [
                    { account: ac.ar, debit: 330000 },
                    { account: ac.surplusSales, credit: 330000 },
                  ],
                },
                {
                  date: t('30 نوامبر', '30 Nov'),
                  lines: [
                    { account: ac.ar, debit: 6000 },
                    { account: ac.gainU, credit: 6000 },
                  ],
                },
                {
                  date: t('15 دسامبر', '15 Dec'),
                  lines: [
                    { account: ac.bankEur, debit: 333000 },
                    { account: ac.lossR, debit: 3000 },
                    { account: ac.ar, credit: 336000 },
                  ],
                },
              ],
            },
          ],
          answer: {
            fa: 'نوامبر: سود تحقق‌نیافته 6,000؛ دسامبر: زیان تحقق‌یافته 3,000؛ اثر خالص سود 3,000 (333,000 منهای 330,000).',
            en: 'November: unrealised gain 6,000; December: realised loss 3,000; net effect a gain of 3,000 (333,000 minus 330,000).',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'روش برگشت خودکار', en: 'The automatic-reversal method' },
          difficulty: 'hard',
          problem: {
            fa: 'تمرین قبل را دوباره حل کنید، این بار با فرض اینکه ERP تسعیر پایان ماه را در روز اول ماه بعد خودکار برگشت می‌زند. ثبت‌ها را بنویسید و نشان دهید اثر هر ماه بر سود و زیان با روش قبلی یکی است.',
            en: 'Solve the previous exercise again, this time assuming the ERP automatically reverses the month-end revaluation on the first day of the next month. Write the entries and show that each month’s effect on profit or loss is the same as before.',
          },
          hint: {
            fa: 'پس از برگشت، مبلغ دفتری حساب دریافتنی دوباره 330,000 است؛ تفاوت وصول با همین عدد سنجیده می‌شود.',
            en: 'After the reversal the receivable is back at 330,000; the collection difference is measured against that figure.',
          },
          solution: [
            {
              type: 'journal',
              entries: [
                {
                  date: t('30 نوامبر', '30 Nov'),
                  lines: [
                    { account: ac.ar, debit: 6000 },
                    { account: ac.gainU, credit: 6000 },
                  ],
                  memo: t('تسعیر با برگشت خودکار', 'Revaluation with auto-reversal'),
                },
                {
                  date: t('1 دسامبر', '1 Dec'),
                  lines: [
                    { account: ac.gainU, debit: 6000 },
                    { account: ac.ar, credit: 6000 },
                  ],
                  memo: t('برگشت خودکار', 'Automatic reversal'),
                },
                {
                  date: t('15 دسامبر', '15 Dec'),
                  lines: [
                    { account: ac.bankEur, debit: 333000 },
                    { account: ac.ar, credit: 330000 },
                    { account: ac.gainR, credit: 3000 },
                  ],
                  memo: t('وصول با نرخ 1.11 در برابر مبلغ ثبت اولیه', 'Collection at 1.11 against the original booking'),
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'مقایسه اثر بر سود و زیان (مثبت یعنی سود)', en: 'Comparing the effect on profit or loss' },
              head: [
                { fa: 'ماه', en: 'Month' },
                { fa: 'بدون برگشت', en: 'No reversal' },
                { fa: 'با برگشت خودکار', en: 'Automatic reversal' },
              ],
              rows: [
                [t('نوامبر', 'November'), t('سود تحقق‌نیافته 6,000', 'Unrealised gain 6,000'), t('سود تحقق‌نیافته 6,000', 'Unrealised gain 6,000')],
                [t('دسامبر', 'December'), t('زیان تحقق‌یافته 3,000', 'Realised loss 3,000'), t('برگشت 6,000 و سود تحقق‌یافته 3,000: خالص زیان 3,000', 'Reversal 6,000 and realised gain 3,000: net loss 3,000')],
                [t('جمع', 'Total'), t('سود 3,000', 'Gain 3,000'), t('سود 3,000', 'Gain 3,000')],
              ],
            },
          ],
          answer: {
            fa: 'در هر دو روش نوامبر سود 6,000 و دسامبر زیان خالص 3,000 دارد؛ فقط برچسب تحقق‌یافته و تحقق‌نیافته فرق می‌کند.',
            en: 'Under both methods November shows a gain of 6,000 and December a net loss of 3,000; only the realised/unrealised labels differ.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تبدیل شرکت تابعه اروپایی در سال بعد', en: 'Translating the European subsidiary the next year' },
          difficulty: 'hard',
          problem: {
            fa: 'در سال 2027، خالص دارایی‌های ابتدای سال MP03 همان 1,200,000 یورو است که با نرخ 1.05 به 1,260,000 دلار تبدیل شده بود. سود سال 150,000 یورو است (نرخ میانگین 1.08) و سود سهامی پرداخت نشده است. نرخ پایان سال 1.10 است. تفاوت تبدیل سال 2027 و مانده اندوخته تسعیر پایان سال را حساب کنید (مانده ابتدای سال: زیان 56,000).',
            en: 'In 2027, MP03’s opening net assets are the same EUR 1,200,000, translated at 1.05 into USD 1,260,000. Profit for the year is EUR 150,000 (average rate 1.08) and no dividend is paid. The closing rate is 1.10. Compute the 2027 translation difference and the year-end translation reserve (opening balance: a loss of 56,000).',
          },
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('خالص دارایی پایان سال', 'Closing net assets'), text: t('1,200,000 + 150,000 = 1,350,000 یورو × 1.10 = 1,485,000 دلار', '1,200,000 + 150,000 = EUR 1,350,000 × 1.10 = USD 1,485,000') },
                { title: t('سود سال به دلار', 'Profit in USD'), text: t('150,000 × 1.08 = 162,000', '150,000 × 1.08 = 162,000') },
                { title: t('تفاوت تبدیل', 'Translation difference'), text: t('1,485,000 منهای (1,260,000 + 162,000) = سود 63,000 در OCI', '1,485,000 minus (1,260,000 + 162,000) = gain of 63,000 in OCI') },
                { title: t('کنترل با تجزیه', 'Check by breakdown'), text: t('1,200,000 × (1.10 منهای 1.05) = 60,000؛ 150,000 × (1.10 منهای 1.08) = 3,000؛ جمع 63,000', '1,200,000 × (1.10 minus 1.05) = 60,000; 150,000 × (1.10 minus 1.08) = 3,000; total 63,000') },
                { title: t('اندوخته تسعیر', 'Translation reserve'), text: t('زیان 56,000 ابتدای سال با سود 63,000 امسال: مانده بستانکار 7,000 (سود انباشته تبدیل)', 'Opening loss of 56,000 plus this year’s gain of 63,000: a credit balance of 7,000 (cumulative translation gain)') },
              ],
            },
          ],
          answer: {
            fa: 'سود تبدیل 63,000 در OCI؛ مانده اندوخته تسعیر پایان 2027 بستانکار 7,000 است.',
            en: 'A translation gain of 63,000 in OCI; the translation reserve at the end of 2027 is a credit of 7,000.',
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
              fa: 'واحد پول عملیاتی از واقعیت‌های اقتصادی (پول درآمد، هزینه و تأمین مالی) تشخیص داده می‌شود؛ بسیاری از شرکت‌های بالادستی دلاری‌اند. واحد پول گزارشگری قابل انتخاب است.',
              en: 'The functional currency is determined from economic facts (the currency of revenue, costs and financing); many upstream companies are dollar companies. The presentation currency can be chosen.',
            },
            {
              fa: 'هر معامله ارزی با نرخ روز تاریخ معامله ثبت می‌شود؛ نرخ میانگین فقط وقتی مجاز است که نوسان نرخ چشمگیر نباشد.',
              en: 'Each foreign currency transaction is recorded at the spot rate on its transaction date; an average rate is allowed only when rates do not fluctuate significantly.',
            },
            {
              fa: 'در پایان دوره فقط اقلام پولی (بانک، دریافتنی، پرداختنی، GR/IR، وام) با نرخ پایان دوره تسعیر می‌شوند و تفاوت به سود و زیان می‌رود؛ موجودی، دارایی‌های ثابت و پیش‌پرداخت تسعیر نمی‌شوند.',
              en: 'At period end only monetary items (bank, receivables, payables, GR/IR, loans) are revalued at the closing rate, with the difference in profit or loss; inventory, fixed assets and advances are not revalued.',
            },
            {
              fa: 'تفاوت تحقق‌نیافته از تسعیر مانده‌های باز و تفاوت تحقق‌یافته از تسویه می‌آید؛ IAS 21 هر دو را در سود و زیان می‌برد.',
              en: 'Unrealised differences come from revaluing open balances and realised differences from settlement; IAS 21 puts both in profit or loss.',
            },
            {
              fa: 'در تبدیل عملیات خارجی، دارایی و بدهی با نرخ پایان دوره و درآمد و هزینه با نرخ میانگین تبدیل می‌شوند و تفاوت به OCI و اندوخته تسعیر می‌رود.',
              en: 'When translating a foreign operation, assets and liabilities use the closing rate and income and expenses the average rate, with the difference in OCI and the translation reserve.',
            },
            {
              fa: 'ریال عمان با نرخ ثابت 2.6008 دلار به دلار گره خورده است؛ پس تفاوت‌های دلار و ریال کوچک است، اما ERP همچنان باید نرخ رسمی روز را بارگذاری و تسعیر را اجرا کند.',
              en: 'The Omani rial is pegged at USD 2.6008, so USD/OMR differences are small, but the ERP must still load the official daily rate and run the revaluation.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'واحد پول عملیاتی', en: 'Functional currency' },
              def: { fa: 'واحد پول محیط اقتصادی اصلی که شرکت در آن فعالیت می‌کند.', en: 'The currency of the primary economic environment in which the entity operates.' },
            },
            {
              term: { fa: 'واحد پول گزارشگری', en: 'Presentation currency' },
              def: { fa: 'واحد پولی که صورت‌های مالی با آن ارائه می‌شود.', en: 'The currency in which the financial statements are presented.' },
            },
            {
              term: { fa: 'نرخ روز (نرخ لحظه‌ای)', en: 'Spot rate' },
              def: { fa: 'نرخ تبدیل برای تحویل فوری در یک تاریخ معین؛ پایه ثبت اولیه.', en: 'The exchange rate for immediate delivery on a given date; the basis of initial recording.' },
            },
            {
              term: { fa: 'نرخ پایان دوره', en: 'Closing rate' },
              def: { fa: 'نرخ روز در پایان دوره گزارشگری؛ برای تسعیر اقلام پولی.', en: 'The spot rate at the end of the reporting period; used to revalue monetary items.' },
            },
            {
              term: { fa: 'قلم پولی', en: 'Monetary item' },
              def: { fa: 'حق دریافت یا تعهد پرداخت تعداد ثابت یا قابل تعیینی واحد پول.', en: 'A right to receive or an obligation to deliver a fixed or determinable number of currency units.' },
            },
            {
              term: { fa: 'تفاوت تسعیر ارز', en: 'Exchange difference' },
              def: { fa: 'تفاوتی که از تبدیل یک مبلغ ارزی با نرخ‌های متفاوت پدید می‌آید.', en: 'The difference that arises from translating a foreign amount at different rates.' },
            },
            {
              term: { fa: 'تحقق‌یافته / تحقق‌نیافته', en: 'Realised / unrealised' },
              def: { fa: 'تفاوت هنگام تسویه / تفاوت ناشی از تسعیر مانده‌های باز در پایان دوره.', en: 'The difference on settlement / the difference from revaluing open balances at period end.' },
            },
            {
              term: { fa: 'عملیات خارجی', en: 'Foreign operation' },
              def: { fa: 'شرکت تابعه، شعبه، وابسته یا مشارکتی که فعالیتش در کشور یا واحد پولی غیر از شرکت گزارشگر است.', en: 'A subsidiary, branch, associate or joint arrangement whose activities are in a country or currency other than the reporting entity’s.' },
            },
            {
              term: { fa: 'اندوخته تسعیر عملیات خارجی', en: 'Foreign currency translation reserve' },
              def: { fa: 'جزئی از حقوق مالکانه که تفاوت‌های تبدیل انباشته در OCI را نگه می‌دارد.', en: 'The equity component that accumulates translation differences recognised in OCI.' },
            },
            {
              term: { fa: 'اجرای تسعیر', en: 'Revaluation run' },
              def: { fa: 'برنامه پایان دوره ERP که مانده‌های پولی ارزی را با نرخ پایان دوره تسعیر و ثبت می‌کند.', en: 'The ERP period-end program that revalues foreign currency monetary balances at the closing rate and posts the result.' },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: { fa: 'واحد پول عملیاتی یک شرکت چیست؟', en: 'What is an entity’s functional currency?' },
      options: [
        { fa: 'پول کشوری که شرکت در آن ثبت شده است', en: 'The currency of the country where it is registered' },
        { fa: 'پولی که سهامداران برای صورت‌های مالی انتخاب می‌کنند', en: 'The currency its shareholders choose for the financial statements' },
        { fa: 'پول محیط اقتصادی اصلی که شرکت در آن فعالیت می‌کند', en: 'The currency of the primary economic environment in which it operates' },
        { fa: 'همیشه پولی که مالیات با آن پرداخت می‌شود', en: 'Always the currency in which tax is paid' },
      ],
      answer: 2,
      explain: {
        fa: 'واحد پول عملیاتی از واقعیت‌ها تشخیص داده می‌شود: پولی که بیشتر با آن درآمد کسب و هزینه پرداخت می‌شود. کشور ثبت یا پول مالیات ملاک نیست. پولی که سهامداران انتخاب می‌کنند واحد پول گزارشگری است، نه عملیاتی.',
        en: 'The functional currency is determined from the facts: the currency mainly earned and spent. The country of registration or the tax currency is not the test. The currency shareholders choose is the presentation currency, not the functional one.',
      },
    },
    {
      q: {
        fa: 'MP01 در 1 ژوئن فاکتوری به مبلغ 100,000 یورو با نرخ 1.10 (یعنی 110,000 دلار) ثبت کرده است. نرخ 30 ژوئن 1.08 است و فاکتور هنوز پرداخت نشده. تسعیر پایان ماه چه ثبت می‌کند؟',
        en: 'On 1 June MP01 recorded a EUR 100,000 supplier invoice at 1.10 (USD 110,000). At 30 June the rate is 1.08 and the invoice is still unpaid. What does the month-end revaluation post?',
      },
      options: [
        { fa: 'زیان تحقق‌نیافته 2,000', en: 'Unrealised loss 2,000' },
        { fa: 'سود تحقق‌نیافته 2,000', en: 'Unrealised gain 2,000' },
        { fa: 'هیچ ثبتی تا زمان پرداخت', en: 'Nothing until the invoice is paid' },
        { fa: 'سود تحقق‌یافته 2,000', en: 'Realised gain 2,000' },
      ],
      answer: 1,
      explain: {
        fa: 'بدهی با نرخ جدید 108,000 است و 2,000 کمتر از 110,000 شده؛ کاهش بدهی سود است. چون هنوز پرداختی نشده، سود تحقق‌نیافته است. صبر کردن تا پرداخت درست نیست، چون IAS 21 تسعیر اقلام پولی را در هر تاریخ گزارشگری می‌خواهد.',
        en: 'At the new rate the liability is 108,000, 2,000 less than 110,000; a smaller liability is a gain. Since nothing has been paid, it is unrealised. Waiting until payment is wrong, because IAS 21 requires monetary items to be revalued at every reporting date.',
      },
    },
    {
      q: { fa: 'کدام قلم در پایان دوره با نرخ پایان دوره تسعیر **نمی‌شود**؟', en: 'Which item is **not** revalued at the closing rate at period end?' },
      options: [
        { fa: 'حساب بانکی یورویی', en: 'A euro bank account' },
        { fa: 'وام یورویی', en: 'A euro loan' },
        { fa: 'پیش‌پرداخت یورویی به سازنده کمپرسور برای قطعاتی که هنوز تحویل نشده', en: 'A euro advance paid to the compressor manufacturer for parts not yet delivered' },
        { fa: 'حساب دریافتنی یورویی از یک مشتری اروپایی', en: 'A euro receivable from a European customer' },
      ],
      answer: 2,
      explain: {
        fa: 'پیش‌پرداخت حق دریافت کالاست، نه حق دریافت یورو؛ پس غیرپولی است و با نرخ روز پرداخت می‌ماند (IFRIC 22). بانک، وام و حساب دریافتنی همه حق یا تعهد تعداد معینی یورو هستند و تسعیر می‌شوند.',
        en: 'An advance is a right to receive goods, not euros, so it is non-monetary and stays at the payment-date rate (IFRIC 22). The bank balance, loan and receivable are all rights or obligations for a set number of euros and are revalued.',
      },
    },
    {
      q: {
        fa: 'MP01 (دلاری) فاکتوری به مبلغ 20,000 ریال عمان دریافت می‌کند. با نرخ ثابت 2.6008 دلار برای هر ریال، مبلغ ثبت به دلار چقدر است؟',
        en: 'MP01 (a dollar company) receives an invoice for OMR 20,000. At the fixed USD 2.6008 per rial, what is the amount recorded in dollars?',
      },
      options: [
        { fa: '52,016', en: '52,016' },
        { fa: '7,690', en: '7,690' },
        { fa: '20,000', en: '20,000' },
        { fa: 'تا پرداخت به ریال، هیچ مبلغی ثبت نمی‌شود', en: 'Nothing until it is paid in rials' },
      ],
      answer: 0,
      explain: {
        fa: '20,000 × 2.6008 = 52,016. عدد 7,690 یعنی جهت نرخ برعکس گرفته شده (تقسیم به جای ضرب)؛ ریال از دلار گران‌تر است، پس مبلغ دلاری باید بزرگ‌تر باشد. فاکتور ارزی هم مثل هر فاکتوری در تاریخ معامله ثبت می‌شود.',
        en: '20,000 × 2.6008 = 52,016. The figure 7,690 means the rate was used upside down (dividing instead of multiplying); the rial is worth more than the dollar, so the dollar amount must be bigger. A foreign currency invoice is recorded on the transaction date like any other.',
      },
    },
    {
      q: {
        fa: 'بدهی 200,000 یورویی پس از تسعیر ماه قبل 216,000 دلار مبلغ دفتری دارد (ثبت اولیه 220,000). مسار آن را با 218,000 دلار پرداخت می‌کند. در روش بدون برگشت، چه ثبت می‌شود؟',
        en: 'A EUR 200,000 payable is carried at USD 216,000 after last month’s revaluation (originally booked at 220,000). Masar pays it with USD 218,000. Under the no-reversal method, what is posted?',
      },
      options: [
        { fa: 'سود تحقق‌یافته 2,000', en: 'Realised gain 2,000' },
        { fa: 'زیان تحقق‌نیافته 2,000', en: 'Unrealised loss 2,000' },
        { fa: 'زیان تحقق‌یافته 4,000', en: 'Realised loss 4,000' },
        { fa: 'زیان تحقق‌یافته 2,000', en: 'Realised loss 2,000' },
      ],
      answer: 3,
      explain: {
        fa: 'تفاوت هنگام تسویه با مبلغ دفتری پس از آخرین تسعیر سنجیده می‌شود: 218,000 منهای 216,000 = زیان 2,000، و چون پرداخت انجام شده، تحقق‌یافته است. «سود 2,000» مقایسه با ثبت اولیه است که در روش بدون برگشت درست نیست، چون سود 4,000 ماه قبل قبلاً شناسایی شده است.',
        en: 'On settlement the difference is measured against the carrying amount after the latest revaluation: 218,000 minus 216,000 = a loss of 2,000, realised because payment has been made. “Gain 2,000” compares with the original booking, which is wrong under the no-reversal method because last month’s 4,000 gain has already been recognised.',
      },
    },
    {
      q: {
        fa: 'در صورت‌های مالی تلفیقی، تفاوت ناشی از تبدیل خالص دارایی‌های یک شرکت تابعه خارجی کجا شناسایی می‌شود؟',
        en: 'In consolidated statements, where is the difference from translating a foreign subsidiary’s net assets recognised?',
      },
      options: [
        { fa: 'در سود و زیان همان دوره', en: 'In profit or loss of the period' },
        { fa: 'در سود و زیان جامع دیگر (OCI) و اندوخته تسعیر در حقوق مالکانه', en: 'In other comprehensive income (OCI) and the translation reserve in equity' },
        { fa: 'مستقیم در سود انباشته، بدون افشا', en: 'Directly in retained earnings, without disclosure' },
        { fa: 'به بهای موجودی شرکت تابعه اضافه می‌شود', en: 'Added to the subsidiary’s inventory cost' },
      ],
      answer: 1,
      explain: {
        fa: 'تفاوت تبدیل در OCI شناسایی و در اندوخته تسعیر انباشته می‌شود و فقط هنگام واگذاری عملیات خارجی به سود و زیان منتقل می‌شود. تفاوت تسعیر معاملات ارزی خود شرکت است که به سود و زیان می‌رود؛ این دو را قاطی نکنید.',
        en: 'The translation difference is recognised in OCI and accumulated in the translation reserve, and moves to profit or loss only when the foreign operation is disposed of. It is the exchange difference on an entity’s own foreign transactions that goes to profit or loss; do not mix the two.',
      },
    },
    {
      q: {
        fa: 'یک شرکت تابعه با واحد پول عملیاتی یورو در تمام سال 400,000 یورو خالص دارایی دارد و سود یا زیانی ندارد. نرخ از 1.20 به 1.15 دلار برای هر یورو می‌رسد. اثر در صورت‌های دلاری گروه چیست؟',
        en: 'A subsidiary with a euro functional currency has net assets of EUR 400,000 all year and no profit or loss. The rate moves from 1.20 to 1.15 dollars per euro. What is the effect in the group’s dollar statements?',
      },
      options: [
        { fa: 'زیان تبدیل 20,000 در OCI', en: 'A translation loss of 20,000 in OCI' },
        { fa: 'زیان 20,000 در سود و زیان', en: 'A loss of 20,000 in profit or loss' },
        { fa: 'سود تبدیل 20,000 در OCI', en: 'A translation gain of 20,000 in OCI' },
        { fa: 'هیچ اثری، چون شرکت تابعه سودی نداشته است', en: 'No effect, because the subsidiary made no profit' },
      ],
      answer: 0,
      explain: {
        fa: '400,000 × (1.20 منهای 1.15) = 20,000. خالص دارایی‌ها از 480,000 به 460,000 دلار رسیده، پس زیان است و چون تبدیل عملیات خارجی است، در OCI می‌رود نه در سود و زیان. نبودن سود اثری ندارد، چون خالص دارایی‌ها خودشان تبدیل می‌شوند.',
        en: '400,000 × (1.20 minus 1.15) = 20,000. Net assets fall from USD 480,000 to 460,000, so it is a loss, and because it is the translation of a foreign operation it goes to OCI, not profit or loss. Having no profit changes nothing, because the net assets themselves are translated.',
      },
    },
    {
      q: {
        fa: 'مسار چه زمانی می‌تواند فاکتورهای یورویی یک ماه را به جای نرخ هر روز، با نرخ میانگین ماه ثبت کند؟',
        en: 'When may Masar record a month’s euro invoices at the monthly average rate instead of each day’s rate?',
      },
      options: [
        { fa: 'هرگز؛ IAS 21 نرخ میانگین را ممنوع کرده است', en: 'Never: IAS 21 forbids average rates' },
        { fa: 'هر وقت که در وقت صرفه‌جویی شود', en: 'Whenever it saves time' },
        { fa: 'فقط برای مبالغ کمتر از سقفی که سازمان مالیاتی تعیین می‌کند', en: 'Only for amounts below a threshold set by the tax office' },
        { fa: 'وقتی نرخ در آن دوره نوسان چشمگیری ندارد و میانگین تقریب مناسبی است', en: 'When rates do not fluctuate significantly in the period, so the average is a fair approximation' },
      ],
      answer: 3,
      explain: {
        fa: 'IAS 21 نرخ میانگین را به‌عنوان یک تقریب عملی مجاز می‌داند، به شرط اینکه نوسان نرخ چشمگیر نباشد. صرفه‌جویی در وقت به‌تنهایی کافی نیست، و سقف مالیاتی هم ربطی به این قاعده ندارد. توجه کنید که برای مانده‌های پایان دوره همیشه نرخ پایان دوره لازم است.',
        en: 'IAS 21 allows an average rate as a practical approximation, provided rates do not fluctuate significantly. Saving time alone is not enough, and a tax threshold has nothing to do with the rule. Note that period-end balances always need the closing rate.',
      },
    },
    {
      q: { fa: 'اجرای تسعیر پایان ماه در MP01 باید کدام مانده‌ها را انتخاب کند؟', en: 'Which balances should MP01’s month-end revaluation run select?' },
      options: [
        { fa: 'همه حساب‌های ترازنامه، حتی موجودی و دارایی‌های ثابت', en: 'Every balance sheet account, including inventory and fixed assets' },
        { fa: 'فقط حساب‌های بانکی', en: 'Only bank accounts' },
        { fa: 'اقلام پولی ارزی باز: دریافتنی، پرداختنی، GR/IR، بانک و وام', en: 'Open foreign currency monetary items: receivables, payables, GR/IR, bank and loans' },
        { fa: 'فقط مانده‌های دلاری، چون دلار واحد پول عملیاتی است', en: 'Only dollar balances, because the dollar is the functional currency' },
      ],
      answer: 2,
      explain: {
        fa: 'تسعیر فقط برای اقلام پولی به ارز خارجی است. موجودی و دارایی‌های ثابت غیرپولی‌اند. فقط بانک کافی نیست، چون دریافتنی، پرداختنی، GR/IR و وام هم پولی‌اند. مانده‌های دلاری برای یک شرکت دلاری اصلاً ارز نیستند.',
        en: 'Revaluation applies only to monetary items in foreign currency. Inventory and fixed assets are non-monetary. Bank alone is not enough, because receivables, payables, GR/IR and loans are monetary too. Dollar balances are not foreign currency at all for a dollar company.',
      },
    },
    {
      q: {
        fa: 'چرا بدهی 50,000 ریالی MP01 به MP02 در پایان ماه تقریباً هیچ تفاوت تسعیری ندارد؟',
        en: 'Why does MP01’s OMR 50,000 payable to MP02 show almost no exchange difference at month-end?',
      },
      options: [
        { fa: 'چون بدهی‌های ریالی غیرپولی‌اند', en: 'Because rial payables are non-monetary' },
        { fa: 'چون نرخ رسمی 2.6008 ثابت مانده و نرخ پایان دوره با نرخ ثبت برابر است؛ تفاوت‌های کوچک فقط از نرخ خرید و فروش بانک می‌آید', en: 'Because the official rate has stayed at 2.6008, so the closing rate equals the booking rate; small differences come only from bank buying and selling rates' },
        { fa: 'چون IAS 21 پول‌های کشورهای خلیج فارس را معاف کرده است', en: 'Because IAS 21 exempts Gulf currencies' },
        { fa: 'چون مانده‌های درون‌گروهی هرگز تسعیر نمی‌شوند', en: 'Because intercompany balances are never revalued' },
      ],
      answer: 1,
      explain: {
        fa: 'بدهی ریالی قلم پولی است و تسعیر می‌شود، اما چون ریال با نرخ ثابت به دلار گره خورده، نرخ پایان دوره همان نرخ ثبت است. IAS 21 هیچ پولی را معاف نکرده است. مانده‌های درون‌گروهی هم در دفاتر هر شرکت تسعیر می‌شوند؛ حذف آن‌ها فقط در تلفیق است.',
        en: 'The rial payable is monetary and is revalued, but because the rial is pegged to the dollar, the closing rate equals the booking rate. IAS 21 exempts no currency. Intercompany balances are also revalued in each company’s books; they are eliminated only on consolidation.',
      },
    },
  ],
}
