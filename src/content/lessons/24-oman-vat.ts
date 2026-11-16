import type { Lesson } from '../types'

/*
 * VAT in Oman. Facts checked on 16 November 2026 against: VAT Law (Royal Decree 121/2020, OTA English translation),
 * Executive Regulations (Decision 53/2021) and amendments 456/2022, 521/2023, 189/2026, Decisions 223 to 225/2026,
 * the OTA oil and gas VAT guide (Deloitte summary), and PwC Worldwide Tax Summaries (Oman, reviewed 7 July 2026).
 * Running example: Wadi Oilfield Services LLC (fictional), Muscat. Amounts are Omani rials (OMR).
 */

const ac = {
  ar: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' },
  ap: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
  apForeign: { fa: 'حساب‌های پرداختنی (تأمین‌کننده خارجی)', en: 'Accounts payable (foreign supplier)' },
  cash: { fa: 'موجودی نقد (بانک)', en: 'Cash at bank' },
  vatOut: { fa: 'مالیات بر ارزش افزوده خروجی', en: 'Output VAT' },
  vatIn: { fa: 'مالیات بر ارزش افزوده ورودی', en: 'Input VAT' },
  vatPayable: { fa: 'مالیات بر ارزش افزوده پرداختنی به سازمان مالیات', en: 'VAT payable to the OTA' },
  revWell: { fa: 'درآمد خدمات چاه', en: 'Well services revenue' },
  revHire: { fa: 'درآمد اجاره تجهیزات', en: 'Equipment hire revenue' },
  revRepair: { fa: 'درآمد خدمات تعمیرات', en: 'Repair services revenue' },
  revService: { fa: 'درآمد خدمات', en: 'Service revenue' },
  salesAllow: { fa: 'برگشت از فروش و تخفیفات', en: 'Sales returns and allowances' },
  spares: { fa: 'موجودی قطعات یدکی', en: 'Spare parts inventory' },
  materials: { fa: 'موجودی مواد و لوازم', en: 'Materials inventory' },
  tools: { fa: 'موجودی ابزار درون‌چاهی', en: 'Downhole tools inventory' },
  equipment: { fa: 'تجهیزات', en: 'Equipment' },
  vehicles: { fa: 'وسایل نقلیه', en: 'Motor vehicles' },
  rentExp: { fa: 'هزینه اجاره', en: 'Rent expense' },
  entExp: { fa: 'هزینه پذیرایی و سرگرمی کارکنان', en: 'Staff entertainment expense' },
  engExp: { fa: 'هزینه خدمات مهندسی', en: 'Engineering services expense' },
  softExp: { fa: 'هزینه نرم‌افزار', en: 'Software expense' },
  hireExp: { fa: 'هزینه اجاره تجهیزات', en: 'Equipment hire expense' },
  advances: { fa: 'پیش‌دریافت از مشتریان', en: 'Customer advances' },
}

const d = (fa: string, en: string) => ({ fa, en })
/** Empty table cell. */
const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'oman-vat',
  number: 24,
  currency: 'omr',
  level: 'advanced',
  minutes: 40,
  icon: 'Percent',
  tone: 'revenue',
  title: { fa: 'مالیات بر ارزش افزوده در عمان', en: 'VAT in Oman' },
  summary: {
    fa: 'مالیات بر ارزش افزوده عمان را از پایه بیاموزید: نرخ‌ها، ثبت‌نام، صورت‌حساب، مالیات ورودی، سازوکار معکوس، واردات و اظهارنامه؛ سپس یک فصل مالیاتی کامل یک شرکت خدمات نفتی را در ERP ثبت، تطبیق و تسویه کنید.',
    en: 'Learn Oman’s VAT from the ground up: rates, registration, invoices, input tax, reverse charge, imports and returns; then record, reconcile and settle a complete VAT quarter for an oilfield services company in its ERP.',
  },
  objectives: [
    {
      fa: 'مبنای قانونی، تاریخ اجرا و نرخ استاندارد 5٪ را توضیح دهید و عرضه‌های نرخ صفر، معاف و خارج از شمول (از جمله نرخ صفر نفت و گاز) را از هم تشخیص دهید',
      en: 'Explain the legal basis, start date and 5% standard rate, and tell zero-rated, exempt and out-of-scope supplies apart (including the oil and gas zero rate)',
    },
    {
      fa: 'تشخیص دهید چه زمانی ثبت‌نام اجباری یا اختیاری است و صورت‌حساب مالیاتی، صورت‌حساب ساده‌شده و اعلامیه بستانکار چه اطلاعاتی لازم دارند',
      en: 'Decide when registration is mandatory or voluntary, and what a tax invoice, a simplified tax invoice and a credit note must contain',
    },
    {
      fa: 'مالیات ورودی قابل کسر را با در نظر گرفتن اقلام غیرقابل کسر، سازوکار معکوس خدمات وارداتی و مالیات واردات کالا محاسبه کنید',
      en: 'Work out deductible input VAT, taking into account blocked items, reverse charge on imported services and import VAT',
    },
    {
      fa: 'کدهای مالیاتی را در ERP طراحی کنید و فروش، خرید، سازوکار معکوس، اعلامیه بستانکار و تسویه پایان دوره را ثبت کنید',
      en: 'Design VAT tax codes in an ERP and record sales, purchases, reverse charge, credit notes and the period-end settlement',
    },
    {
      fa: 'اظهارنامه فصلی را تهیه و با دفتر کل تطبیق دهید و مهلت‌های تسلیم، پرداخت و نگهداری اسناد را بشناسید',
      en: 'Prepare a quarterly VAT return, reconcile it to the general ledger and know the filing, payment and record-keeping deadlines',
    },
  ],
  sections: [
    {
      id: 'vat-basics',
      title: { fa: 'مالیات بر ارزش افزوده عمان در یک نگاه', en: 'Oman VAT at a Glance' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**شرکت خدمات نفتی وادی** (Wadi Oilfield Services LLC، یک شرکت فرضی در مسقط) به شرکت‌های بهره‌بردار میدان‌های نفت و گاز خدمات چاه، اجاره تجهیزات و تعمیرات کارگاهی می‌فروشد. مدیر مالی تازه‌کار آن سه پرسش دارد: چرا روی برخی صورت‌حساب‌ها مالیات 5٪ است و روی برخی صفر؟ چرا برای خدمات یک مشاور انگلیسی که هیچ مالیاتی در صورت‌حسابش نیست، خودش باید مالیات حساب کند؟ و اظهارنامه این فصل را تا چه روزی باید بفرستد؟ این درس به همه این پرسش‌ها پاسخ می‌دهد. مبالغ قانونی و مبالغ مثال‌های این درس به **ریال عمانی (OMR)** است.',
            en: '**Wadi Oilfield Services LLC** (a fictional company in Muscat) sells well services, equipment hire and workshop repairs to oil and gas field operators. Its new finance manager has three questions: why do some invoices carry 5% VAT and others zero? Why must the company calculate VAT itself on a British consultant’s invoice that shows no VAT at all? And by what date must this quarter’s return be filed? This lesson answers all three. Legal amounts and all example amounts in this lesson are in **Omani rials (OMR)**.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**مالیات بر ارزش افزوده (VAT)** مالیاتی بر مصرف است که در هر مرحله از زنجیره عرضه گرفته می‌شود. فروشنده ثبت‌نام‌شده روی فروش خود مالیات می‌گیرد (**مالیات خروجی**) و مالیاتی را که روی خریدهایش پرداخته است (**مالیات ورودی**) از آن کم می‌کند. فقط مابه‌التفاوت به **سازمان مالیات عمان (OTA)** پرداخت می‌شود. به این ترتیب بار نهایی مالیات بر دوش مصرف‌کننده نهایی است، نه شرکت‌های میان زنجیره.',
            en: '**Value added tax (VAT)** is a tax on consumption collected at every stage of the supply chain. A registered seller charges VAT on its sales (**output VAT**) and deducts the VAT it paid on its purchases (**input VAT**). Only the difference is paid to the **Oman Tax Authority (OTA)**. The final burden therefore falls on the end consumer, not on the businesses in the middle of the chain.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'مالیات قابل پرداخت دوره = مالیات خروجی − مالیات ورودی قابل کسر',
            en: 'VAT payable for the period = Output VAT − Deductible input VAT',
          },
          note: {
            fa: 'اگر حاصل منفی باشد، مازاد به دوره‌های بعد منتقل می‌شود یا طبق شرایط قانون مسترد می‌شود (ماده 38 قانون).',
            en: 'If the result is negative, the excess is carried forward or refunded under the conditions of the law (Article 38 of the VAT Law).',
          },
        },
        {
          type: 'table',
          caption: { fa: 'مبنای قانونی و نکات کلیدی', en: 'Legal basis and key facts' },
          head: [
            { fa: 'موضوع', en: 'Topic' },
            { fa: 'حکم', en: 'Rule' },
          ],
          rows: [
            [
              { fa: 'قانون', en: 'Law' },
              {
                fa: 'قانون مالیات بر ارزش افزوده، صادرشده با فرمان سلطانی 121/2020 در 12 اکتبر 2020 و منتشرشده در روزنامه رسمی در 18 اکتبر 2020',
                en: 'VAT Law issued by Royal Decree 121/2020 on 12 October 2020 and published in the Official Gazette on 18 October 2020',
              },
            ],
            [
              { fa: 'تاریخ اجرا', en: 'Start date' },
              { fa: '16 آوریل 2021 (180 روز پس از انتشار)', en: '16 April 2021 (180 days after publication)' },
            ],
            [
              { fa: 'آیین‌نامه اجرایی', en: 'Executive Regulations' },
              {
                fa: 'تصمیم 53/2021 سازمان مالیات، با اصلاحیه‌های 456/2022، 521/2023 و 189/2026 (اصلاحیه صورت‌حساب الکترونیکی)',
                en: 'OTA Decision 53/2021, amended by Decisions 456/2022, 521/2023 and 189/2026 (the e-invoicing amendment)',
              },
            ],
            [
              { fa: 'نرخ استاندارد', en: 'Standard rate' },
              { fa: '5٪ ارزش مشمول مالیات (ماده 36 قانون)', en: '5% of the taxable value (Article 36)' },
            ],
            [
              { fa: 'نهاد اجرایی', en: 'Administered by' },
              { fa: 'سازمان مالیات عمان (OTA)، و برای واردات، اداره کل گمرک', en: 'Oman Tax Authority (OTA); on imports, the Directorate General of Customs' },
            ],
            [
              { fa: 'قیمت‌گذاری', en: 'Price display' },
              { fa: 'قیمت کالا و خدمات باید با احتساب مالیات اعلام شود (ماده 37)', en: 'Prices of goods and services must be shown inclusive of VAT (Article 37)' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'زنجیره کوچک: مالیات چگونه مرحله‌به‌مرحله جمع می‌شود', en: 'A small chain: how VAT is collected stage by stage' },
          text: {
            fa: 'یک تأمین‌کننده محلی قطعه‌ای را 1,000 به‌اضافه 50 مالیات به وادی می‌فروشد و 50 را به سازمان می‌پردازد. وادی با آن قطعه خدمتی به ارزش 3,000 به‌اضافه 150 مالیات به یک مشتری محلی می‌فروشد. وادی 150 مالیات خروجی دارد و 50 مالیات ورودی، پس 100 می‌پردازد. سازمان در کل 50 + 100 = 150 دریافت کرده است؛ یعنی دقیقاً 5٪ قیمت نهایی 3,000.',
            en: 'A local supplier sells a part to Wadi for 1,000 plus 50 VAT and pays the 50 to the OTA. Wadi uses the part in a service it sells to a local customer for 3,000 plus 150 VAT. Wadi has 150 of output VAT and 50 of input VAT, so it pays 100. In total the OTA has received 50 + 100 = 150, exactly 5% of the final price of 3,000.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'قوانین را همیشه از منبع رسمی تأیید کنید', en: 'Always confirm the rules with the official source' },
          text: {
            fa: 'نرخ‌ها، آستانه‌ها و مهلت‌های این درس در تاریخ 16 نوامبر 2026 از متن قانون، آیین‌نامه اجرایی و راهنماهای معتبر بررسی شده‌اند. قوانین مالیاتی تغییر می‌کنند؛ پیش از هر تصمیم واقعی، آخرین متن را در درگاه سازمان مالیات عمان (taxoman.gov.om) ببینید یا با مشاور مالیاتی مشورت کنید. اگر با مالیات بر ارزش افزوده ایران آشنا هستید، منطق «خروجی منهای ورودی» یکی است، اما نرخ، آستانه و قواعد صورت‌حساب عمان متفاوت است؛ قواعد ایران را به عمان تعمیم ندهید.',
            en: 'The rates, thresholds and deadlines in this lesson were checked on 16 November 2026 against the law, the Executive Regulations and reputable guides. Tax rules change: before any real decision, check the latest text on the Oman Tax Authority portal (taxoman.gov.om) or ask a tax adviser. If you know another country’s VAT, the “output minus input” logic is the same, but Oman’s rate, thresholds and invoice rules are its own; do not carry rules across borders.',
          },
        },
      ],
    },
    {
      id: 'rates-supplies',
      title: { fa: 'نرخ استاندارد، نرخ صفر، معاف و خارج از شمول', en: 'Standard-Rated, Zero-Rated, Exempt and Out of Scope' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'هر عرضه در عمان در یکی از چهار گروه قرار می‌گیرد. **نرخ استاندارد** یعنی 5٪ مالیات. **نرخ صفر** یعنی عرضه مشمول مالیات است اما نرخ آن صفر است؛ فروشنده مالیاتی نمی‌گیرد ولی مالیات ورودی مربوط را کسر می‌کند. **معاف** یعنی مالیاتی گرفته نمی‌شود و مالیات ورودی مربوط هم قابل کسر نیست. **خارج از شمول** یعنی اصلاً عرضه مشمول این قانون نیست؛ مثل حق‌الامتیاز (رویالتی) که به دولت پرداخت می‌شود.',
            en: 'Every supply in Oman falls into one of four groups. **Standard-rated** means 5% VAT. **Zero-rated** means the supply is taxable but at a 0% rate: the seller charges no VAT yet still deducts the related input VAT. **Exempt** means no VAT is charged and the related input VAT cannot be deducted. **Out of scope** means the transaction is not a supply under the law at all, such as royalties paid to the government.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'چهار گروه عرضه', en: 'The four supply groups' },
          head: [
            { fa: 'گروه', en: 'Group' },
            { fa: 'مالیات روی فروش', en: 'VAT on the sale' },
            { fa: 'کسر مالیات ورودی مربوط', en: 'Related input VAT' },
            { fa: 'نمونه', en: 'Examples' },
          ],
          rows: [
            [
              { fa: 'نرخ استاندارد', en: 'Standard-rated' },
              { fa: '5٪', en: '5%' },
              { fa: 'قابل کسر', en: 'Deductible' },
              {
                fa: 'بیشتر کالاها و خدمات، اجاره ملک تجاری، خدمات پیمانکار جزء به پیمانکار اصلی',
                en: 'Most goods and services, commercial rent, a subcontractor’s services to a contractor',
              },
            ],
            [
              { fa: 'نرخ صفر', en: 'Zero-rated' },
              { fa: '0٪', en: '0%' },
              { fa: 'قابل کسر', en: 'Deductible' },
              {
                fa: 'صادرات، حمل‌ونقل بین‌المللی، اقلام غذایی و دارویی فهرست‌شده، نفت و گاز با شرایط آیین‌نامه',
                en: 'Exports, international transport, listed food and medicines, oil and gas under the regulation’s conditions',
              },
            ],
            [
              { fa: 'معاف', en: 'Exempt' },
              { fa: 'ندارد', en: 'None' },
              { fa: 'غیرقابل کسر', en: 'Not deductible' },
              {
                fa: 'خدمات مالی (بهره و مانند آن)، بهداشت و درمان، آموزش، زمین بایر، فروش مجدد ملک مسکونی، حمل مسافر داخلی، اجاره ملک مسکونی',
                en: 'Financial services (interest and similar), healthcare, education, bare land, resale of residential property, local passenger transport, residential rent',
              },
            ],
            [
              { fa: 'خارج از شمول', en: 'Out of scope' },
              { fa: 'ندارد', en: 'None' },
              { fa: 'عرضه‌ای در کار نیست', en: 'No supply involved' },
              {
                fa: 'رویالتی و پرداخت‌های حاکمیتی به دولت، درخواست وجه (Cash call) میان شرکای مشارکت، عرضه میان اعضای یک گروه مالیاتی',
                en: 'Royalties and sovereign payments to the government, cash calls between joint venture partners, supplies within a VAT group',
              },
            ],
          ],
        },
        {
          type: 'list',
          items: [
            { fa: '**نرخ صفر طبق ماده 51 قانون**: اقلام غذایی تعیین‌شده، دارو و تجهیزات پزشکی تعیین‌شده، طلا، نقره و پلاتین سرمایه‌گذاری، حمل‌ونقل بین‌المللی و درون‌شورای همکاری کالا و مسافر و خدمات مرتبط، وسایل حمل‌ونقل تجاری مسافر و کالا، هواپیما و قایق نجات، و **عرضه نفت، فرآورده‌های نفتی و گاز طبیعی**.', en: '**Zero-rated under Article 51**: designated food items, designated medicines and medical equipment, investment gold, silver and platinum, international and intra-GCC transport of goods and passengers and related services, commercial means of transport, rescue aircraft and boats, and the **supply of oil, oil derivatives and natural gas**.' },
            { fa: '**نرخ صفر طبق ماده 52**: صادرات کالا، عرضه در رژیم‌های تعلیق گمرکی، صادرات مجدد کالای واردشده برای تعمیر، و خدماتی که به مشتری بدون محل اقامت در کشورهای شورای همکاری داده می‌شود و از آن بیرون از این کشورها بهره می‌برد.', en: '**Zero-rated under Article 52**: exports of goods, supplies within customs suspension regimes, re-export of goods imported for repair, and services to a customer with no place of residence in the GCC who benefits from them outside the GCC.' },
            { fa: '**معاف طبق ماده 47**: خدمات مالی، خدمات بهداشتی و درمانی، خدمات آموزشی، زمین بایر، فروش مجدد ملک مسکونی، حمل مسافر داخلی و اجاره ملک مسکونی؛ هر کدام با شرایطی که آیین‌نامه تعیین می‌کند.', en: '**Exempt under Article 47**: financial services, healthcare, education, bare land, resale of residential property, local passenger transport and residential rent, each under the conditions in the regulations.' },
          ],
        },
        {
          type: 'h',
          text: { fa: 'نرخ صفر در زنجیره نفت و گاز', en: 'The Zero Rate in the Oil and Gas Chain' },
        },
        {
          type: 'p',
          text: {
            fa: 'بند 7 ماده 51 عرضه نفت، فرآورده‌های نفتی و گاز طبیعی را نرخ صفر می‌داند و **ماده 93 آیین‌نامه اجرایی** شرط‌های آن را تعیین می‌کند. نرخ صفر شامل کالا و خدماتی است که به این عرضه‌ها مربوط‌اند، اما فقط در **بالادست** (اکتشاف، توسعه، تولید و خدمات مرتبط) و **میان‌دست** (انتقال، ذخیره‌سازی و خدمات مرتبط). **پایین‌دست** (پالایش، تولید فرآورده، بازاریابی و توزیع به مصرف‌کننده نهایی) شامل این نرخ صفر نیست و معمولاً 5٪ دارد.',
            en: 'Article 51(7) zero-rates the supply of oil, oil derivatives and natural gas, and **Article 93 of the Executive Regulations** sets the conditions. The zero rate covers goods and services related to these supplies, but only in the **upstream** stage (exploration, development, production and related services) and the **midstream** stage (transportation, storage and related services). **Downstream** activities (refining, manufacturing, marketing and distribution to the final consumer) are outside this zero rate and are normally taxed at 5%.',
          },
        },
        {
          type: 'list',
          ordered: true,
          items: [
            { fa: 'عرضه به زنجیره عرضه نفت خام، فرآورده‌ها و گاز در مرحله بالادست یا میان‌دست مربوط باشد.', en: 'The supply relates to the crude oil, derivatives and gas supply chain at the upstream or midstream stage.' },
            { fa: 'فروشنده و خریدار هر دو در مالیات بر ارزش افزوده ثبت‌نام کرده باشند.', en: 'Both supplier and customer are VAT-registered.' },
            { fa: 'هر دو برای فعالیت‌های بالادستی یا میان‌دستی نزد **وزارت انرژی و معادن** ثبت و دارای مجوز باشند.', en: 'Both are registered and licensed by the **Ministry of Energy and Minerals** for upstream or midstream activities.' },
            { fa: 'خریدار عرضه را برای همان فعالیت‌های بالادستی یا میان‌دستی دریافت کند.', en: 'The customer receives the supply for those upstream or midstream activities.' },
            { fa: 'عرضه از اقلامی نباشد که مالیات ورودی آن غیرقابل کسر است، و از خدمات هتل، رستوران، تهیه غذا و نوشیدنی، فرهنگی، ورزشی، آموزشی و سرگرمی، یا خدمات معاف نباشد.', en: 'The supply is not a blocked item, nor a hotel, restaurant, food and drink catering, cultural, sports, educational or entertainment service, nor an exempt service.' },
          ],
        },
        {
          type: 'table',
          caption: {
            fa: 'برداشت سازمان مالیات از ماده 93 در عمل (بر پایه راهنمای نفت و گاز سازمان، ژانویه 2022)',
            en: 'How the OTA applies Article 93 in practice (based on the OTA oil and gas guide, January 2022)',
          },
          head: [
            { fa: 'معامله', en: 'Transaction' },
            { fa: 'برخورد مالیاتی', en: 'VAT treatment' },
          ],
          rows: [
            [
              { fa: 'خدمات پیمانکار به بهره‌بردار دارای مجوز، برای استفاده انحصاری در بالادست', en: 'Contractor services to a licensed operator for exclusive upstream use' },
              { fa: 'نرخ صفر، اگر همه شرط‌ها و مدارک فراهم باشد', en: 'Zero-rated if all conditions and documents are in place' },
            ],
            [
              { fa: 'خدمات پیمانکار جزء به پیمانکار اصلی (حتی اگر مصرف نهایی در بالادست باشد)', en: 'A subcontractor’s supply to a contractor (even if the end use is upstream)' },
              { fa: '5٪؛ زنجیره نرخ صفر از اولین فروش پیمانکار به بهره‌بردار جلوتر نمی‌رود', en: '5%: the zero-rated chain stops at the first contractor-to-operator supply' },
            ],
            [
              { fa: 'شارژ مجدد هزینه‌های بالادستی از بهره‌بردار به شرکای غیرعامل', en: 'Recharge of upstream costs from the operator to non-operating partners' },
              { fa: 'نرخ صفر', en: 'Zero-rated' },
            ],
            [
              { fa: 'درخواست وجه (Cash call) بهره‌بردار از شرکای مشارکت', en: 'Cash calls from the operator to joint venture partners' },
              { fa: 'خارج از شمول؛ مشارکت خودش شخص مشمول جداگانه نیست', en: 'Not subject to VAT; the joint venture is not a separate taxable person' },
            ],
            [
              { fa: 'رویالتی، پاداش امضا و اجاره‌بهای پرداختی به دولت', en: 'Royalties, bonuses and rentals paid to the government' },
              { fa: 'خارج از شمول (ماهیت حاکمیتی)', en: 'Not subject to VAT (sovereign in nature)' },
            ],
            [
              { fa: 'واردات تجهیزات، حتی برای مصرف بالادستی', en: 'Imports of equipment, even for upstream use' },
              { fa: 'مالیات واردات 5٪؛ نرخ صفر ماده 93 در گمرک اعمال نمی‌شود', en: '5% import VAT; the Article 93 zero rate does not apply at import' },
            ],
            [
              { fa: 'خدمات خریداری‌شده از تأمین‌کننده غیرمقیم', en: 'Services bought from a non-resident supplier' },
              { fa: 'سازوکار معکوس با نرخ 5٪', en: 'Reverse charge at 5%' },
            ],
            [
              { fa: 'فروش فرآورده پالایش‌شده در بازار داخلی / صادرات آن', en: 'Refined products sold locally / exported' },
              { fa: '5٪ / نرخ صفر به‌عنوان صادرات، با مدارک خروج', en: '5% / zero-rated as an export, with proof of export' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'در عمل: مدارک نرخ صفر نفت و گاز', en: 'In practice: evidence for the oil and gas zero rate' },
          text: {
            fa: 'پیمانکار، گواهی ثبت در سامانه JSRS را به‌عنوان مدرک تأیید وزارت انرژی و معادن نگه می‌دارد. بهره‌بردار روی سفارش خرید یا گزارش دریافت خدمات تأیید می‌کند که خدمت «برای استفاده مستقیم و انحصاری در فعالیت بالادستی یا میان‌دستی نرخ صفر» دریافت شده است. این مدارک را در پرونده مشتری در ERP با تاریخ انقضا نگه دارید. اگر پیمانکار به اشتباه 5٪ گرفت، بهره‌بردار نباید صورت‌حساب را رد کند؛ طبق قواعد عادی آن را کسر می‌کند یا اصلاح آن را می‌خواهد.',
            en: 'The contractor keeps its JSRS registration certificate as proof of Ministry of Energy and Minerals certification. The operator confirms on the purchase order or service receipt that the service was “received for direct and exclusive use in zero-rated upstream or midstream activities”. Keep this evidence on the customer record in the ERP with an expiry date. If a contractor charges 5% in error, the operator should not reject the invoice; it recovers the VAT under the normal rules or asks for a correction.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'فهرست‌های تازه نرخ صفر از 1 اکتبر 2026', en: 'New zero-rated lists from 1 October 2026' },
          text: {
            fa: 'سازمان مالیات با تصمیم‌های 223، 224 و 225 سال 2026 فهرست اقلام نرخ صفر را بازنویسی کرد: اقلام غذایی پایه (جایگزین تصمیم 65/2021)، دارو و تجهیزات پزشکی (جایگزین تصمیم 59/2021) و فرآورده‌های دامپزشکی. این فهرست‌ها از 1 اکتبر 2026 اجرا می‌شوند. اگر چنین کالاهایی می‌فروشید، کد مالیاتی هر کالا را در داده پایه کالا با فهرست جدید مقایسه کنید.',
            en: 'With Decisions 223, 224 and 225 of 2026 the OTA rewrote the zero-rated lists: basic food items (replacing Decision 65/2021), medicines and medical equipment (replacing Decision 59/2021) and veterinary products. The lists apply from 1 October 2026. If you sell such goods, check each item’s tax code in the material master against the new lists.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'کدام نرخ؟', en: 'Which rate?' },
          difficulty: 'easy',
          problem: {
            fa: 'برای هر معامله زیر در عمان بگویید برخورد مالیاتی چیست (5٪، نرخ صفر، معاف یا خارج از شمول) و آیا مالیات ورودی هزینه‌های مربوط قابل کسر است.',
            en: 'For each transaction in Oman below, state the VAT treatment (5%, zero-rated, exempt or out of scope) and whether the input VAT on related costs is deductible.',
          },
          given: {
            head: [
              { fa: 'ردیف', en: 'Item' },
              { fa: 'معامله', en: 'Transaction' },
            ],
            rows: [
              [{ fa: 'الف', en: 'a' }, { fa: 'خدمات آزمایش چاه وادی به شرکت نفت رمل (بهره‌بردار دارای مجوز؛ هر دو ثبت‌نام‌شده و دارای مجوز وزارت؛ رمل استفاده انحصاری بالادستی را روی سفارش خرید تأیید کرده است)', en: 'Wadi’s well-testing services to Raml Petroleum (a licensed operator; both registered and ministry-licensed; Raml confirms exclusive upstream use on the PO)' }],
              [{ fa: 'ب', en: 'b' }, { fa: 'اجاره تجهیزات وادی به شرکت حفاری جبل، پیمانکاری که برای رمل کار می‌کند', en: 'Wadi’s equipment hire to Jabal Drilling, a contractor working for Raml' }],
              [{ fa: 'ج', en: 'c' }, { fa: 'درخواست وجه ماهانه رمل از شرکای مشارکت', en: 'Raml’s monthly cash call to its joint venture partners' }],
              [{ fa: 'د', en: 'd' }, { fa: 'بهره‌ای که بانک بابت وام وادی دریافت می‌کند', en: 'Interest a bank charges on Wadi’s loan' }],
              [{ fa: 'ه', en: 'e' }, { fa: 'مطالعه مهندسی وادی برای مشتری‌ای در هند که در کشورهای شورای همکاری اقامت ندارد و از خدمت بیرون از آن‌ها بهره می‌برد', en: 'Wadi’s engineering study for a customer in India with no residence in the GCC, who benefits from it outside the GCC' }],
              [{ fa: 'و', en: 'f' }, { fa: 'خدمات تهیه غذا که یک شرکت پذیرایی به کمپ میدانی رمل می‌دهد', en: 'Catering services a caterer supplies to Raml’s field camp' }],
            ],
          },
          hint: {
            fa: 'برای نفت و گاز، هر پنج شرط ماده 93 را چک کنید. زنجیره نرخ صفر از اولین فروش به بهره‌بردار جلوتر نمی‌رود.',
            en: 'For oil and gas, check all five Article 93 conditions. The zero-rated chain does not go beyond the first sale to the operator.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'ردیف', en: 'Item' },
                { fa: 'برخورد', en: 'Treatment' },
                { fa: 'دلیل', en: 'Reason' },
                { fa: 'مالیات ورودی', en: 'Input VAT' },
              ],
              rows: [
                [{ fa: 'الف', en: 'a' }, { fa: 'نرخ صفر', en: 'Zero-rated' }, { fa: 'ماده 51(7) و ماده 93 آیین‌نامه؛ همه شرط‌ها و مدارک فراهم است', en: 'Article 51(7) and Regulation 93; all conditions and evidence met' }, { fa: 'قابل کسر', en: 'Deductible' }],
                [{ fa: 'ب', en: 'b' }, { fa: '5٪', en: '5%' }, { fa: 'مشتری پیمانکار است، نه بهره‌بردار؛ عرضه پیمانکار جزء نرخ صفر نمی‌گیرد', en: 'The customer is a contractor, not an operator; subcontractor supplies are not zero-rated' }, { fa: 'قابل کسر', en: 'Deductible' }],
                [{ fa: 'ج', en: 'c' }, { fa: 'خارج از شمول', en: 'Out of scope' }, { fa: 'تأمین مالی مشارکت است، نه عرضه کالا یا خدمت', en: 'Funding of the joint venture, not a supply' }, { fa: 'موضوعیت ندارد', en: 'Not applicable' }],
                [{ fa: 'د', en: 'd' }, { fa: 'معاف', en: 'Exempt' }, { fa: 'خدمت مالی با مابه‌ازای بهره (ماده 47)', en: 'Financial service paid by interest (Article 47)' }, { fa: 'بانک نمی‌تواند کسر کند', en: 'The bank cannot deduct' }],
                [{ fa: 'ه', en: 'e' }, { fa: 'نرخ صفر', en: 'Zero-rated' }, { fa: 'صادرات خدمات (ماده 52)', en: 'Export of services (Article 52)' }, { fa: 'قابل کسر', en: 'Deductible' }],
                [{ fa: 'و', en: 'f' }, { fa: '5٪', en: '5%' }, { fa: 'تهیه غذا صراحتاً از نرخ صفر ماده 93 کنار گذاشته شده است', en: 'Catering is expressly excluded from the Regulation 93 zero rate' }, { fa: 'برای رمل غیرقابل کسر (قلم ممنوع)', en: 'Blocked for Raml' }],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'نکته کلیدی: نرخ صفر و معاف هر دو «بدون مالیات روی فروش» هستند، اما فقط نرخ صفر حق کسر مالیات ورودی را حفظ می‌کند.',
                en: 'Key point: zero-rated and exempt both mean “no VAT on the sale”, but only the zero rate keeps the right to deduct input VAT.',
              },
            },
          ],
          answer: {
            fa: 'الف: صفر؛ ب: 5٪؛ ج: خارج از شمول؛ د: معاف؛ ه: صفر (صادرات)؛ و: 5٪ (و برای رمل غیرقابل کسر).',
            en: 'a: zero; b: 5%; c: out of scope; d: exempt; e: zero (export); f: 5% (and blocked for Raml).',
          },
        },
      ],
    },
    {
      id: 'registration',
      title: { fa: 'ثبت‌نام: اجباری و اختیاری', en: 'Registration: Mandatory and Voluntary' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'هر شخصی که در عمان محل اقامت دارد و فعالیت اقتصادی انجام می‌دهد، باید ثبت‌نام کند اگر ارزش عرضه‌هایش در **12 ماه گذشته** (پایان هر ماه به‌اضافه 11 ماه پیش از آن) از آستانه اجباری بیشتر شود، یا انتظار برود در **12 ماه آینده** بیشتر شود (ماده 55). پس آزمون را باید **هر ماه** و در هر دو جهت انجام داد.',
            en: 'A person with a place of residence in Oman who carries on an economic activity must register if the value of its supplies over the **past 12 months** (the end of any month plus the 11 months before it) exceeds the mandatory threshold, or is expected to exceed it over the **next 12 months** (Article 55). The test must therefore be run **every month**, looking both back and forward.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'آستانه‌های ثبت‌نام (ریال عمانی)', en: 'Registration thresholds (OMR)' },
          head: [
            { fa: 'نوع ثبت‌نام', en: 'Registration' },
            { fa: 'آستانه', en: 'Threshold' },
            { fa: 'چه چیزی سنجیده می‌شود', en: 'What is measured' },
          ],
          rows: [
            [{ fa: 'اجباری (مقیم)', en: 'Mandatory (resident)' }, 38500, { fa: 'عرضه‌ها، 12 ماه گذشته یا آینده', en: 'Supplies, past or next 12 months' }],
            [{ fa: 'اختیاری (مقیم)', en: 'Voluntary (resident)' }, 19250, { fa: 'عرضه‌ها یا هزینه‌ها، 12 ماه گذشته یا آینده', en: 'Supplies or expenses, past or next 12 months' }],
            [{ fa: 'غیرمقیم', en: 'Non-resident' }, { fa: 'بدون آستانه', en: 'No threshold' }, { fa: 'از روزی که مکلف به پرداخت مالیات می‌شود (ماده 57)', en: 'From the date it becomes liable to pay VAT (Article 57)' }],
          ],
          numericCols: [1],
        },
        {
          type: 'list',
          items: [
            { fa: '**در آزمون حساب می‌شود** (ماده 56): عرضه‌های مشمول مالیات (5٪ و نرخ صفر) **به‌جز فروش دارایی‌های سرمایه‌ای**، ارزش خریدهایی که مشمول سازوکار معکوس‌اند، و عرضه‌های درون‌شورای همکاری.', en: '**Counted in the test** (Article 56): taxable supplies (5% and zero-rated) **except sales of capital assets**, purchases subject to the reverse charge, and intra-GCC supplies.' },
            { fa: '**حساب نمی‌شود**: عرضه‌های معاف، معاملات خارج از شمول و فروش دارایی‌های سرمایه‌ای.', en: '**Not counted**: exempt supplies, out-of-scope transactions and sales of capital assets.' },
            { fa: '**گروه مالیاتی** (ماده 58): دو یا چند شخص مرتبط می‌توانند یک ثبت‌نام مشترک داشته باشند؛ عرضه میان اعضا مشمول نیست و همه اعضا مسئولیت تضامنی دارند.', en: '**VAT group** (Article 58): two or more related persons may register as one; supplies between members are disregarded and all members are jointly and severally liable.' },
            { fa: '**فقط نرخ صفر** (ماده 60): کسی که فقط عرضه نرخ صفر دارد می‌تواند معافیت از ثبت‌نام بخواهد، اما در آن صورت نمی‌تواند مالیات ورودی را کسر کند. شرکت‌های خدمات نفتی که خرید تجهیزات و اجاره سنگینی دارند، معمولاً ترجیح می‌دهند ثبت‌نام کنند.', en: '**Zero-rated only** (Article 60): a person making only zero-rated supplies may apply for exemption from registration, but then cannot deduct input VAT. Oilfield service companies with heavy equipment purchases and rentals usually prefer to register.' },
          ],
        },
        {
          type: 'steps',
          items: [
            { title: { fa: 'آزمون ماهانه', en: 'Monthly test' }, text: { fa: 'در پایان هر ماه، جمع 12 ماه گذشته و پیش‌بینی 12 ماه آینده را با 38,500 مقایسه کنید.', en: 'At each month-end, compare the past 12 months and the forecast for the next 12 months with 38,500.' } },
            { title: { fa: 'درخواست در 30 روز', en: 'Apply within 30 days' }, text: { fa: 'درخواست ثبت‌نام را ظرف 30 روز از تحقق شرط به‌صورت الکترونیکی بفرستید (ماده 110 آیین‌نامه).', en: 'Submit the registration application online within 30 days of meeting the condition (Regulation 110).' } },
            { title: { fa: 'تاریخ اثر', en: 'Effective date' }, text: { fa: 'ثبت‌نام اجباری از روز اول **دومین ماه** پس از ماهی که شرط در آن محقق شد اثر دارد، مگر سازمان تاریخ دیگری در گواهی بنویسد.', en: 'Mandatory registration takes effect on the first day of the **second month** after the month in which the condition was met, unless the OTA sets another date in the certificate.' } },
            { title: { fa: 'شماره شناسایی مالیاتی', en: 'VAT number' }, text: { fa: 'شماره شناسایی مالیاتی (VATIN) را روی همه صورت‌حساب‌ها، مکاتبات و اظهارنامه‌ها بیاورید (ماده 64).', en: 'Show the VAT identification number (VATIN) on all invoices, correspondence and returns (Article 64).' } },
            { title: { fa: 'اعلام تغییرات', en: 'Report changes' }, text: { fa: 'هر تغییر در اطلاعات ثبت‌نام را ظرف 30 روز به سازمان اعلام کنید (ماده 65).', en: 'Notify the OTA of any change in registration details within 30 days (Article 65).' } },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'ثبت‌نام نکردن گران تمام می‌شود', en: 'Failing to register is expensive' },
          text: {
            fa: 'خودداری عمدی از ثبت‌نام جرم است: حبس 1 تا 3 سال و جریمه 5,000 تا 20,000 ریال عمانی، یا یکی از این دو (ماده 101). افزون بر این، اگر به‌موقع ثبت‌نام نکنید، مهلت سازمان برای تشخیص مالیات از 5 سال به 10 سال افزایش می‌یابد (ماده 72) و مالیات دوره‌های گذشته را باید از جیب خودتان بپردازید.',
            en: 'Deliberately failing to register is a crime: 1 to 3 years’ imprisonment and a fine of OMR 5,000 to 20,000, or either (Article 101). In addition, if you register late the OTA’s window to assess tax grows from 5 to 10 years (Article 72), and the VAT for past periods comes out of your own pocket.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'آزمون ثبت‌نام یک شرکت تازه', en: 'Registration test for a new company' },
          difficulty: 'easy',
          problem: {
            fa: 'شرکت «خدمات بازرسی خور» از 1 ژانویه 2026 در صحار شروع به کار کرد. ارقام ماهانه زیر را دارد. فرض کنید پیش‌بینی 12 ماه آینده در هیچ ماهی زودتر از آزمون گذشته از آستانه عبور نکرده است. (1) شرکت در پایان کدام ماه ملزم به ثبت‌نام شد؟ (2) تا چه روزی باید درخواست بدهد و ثبت‌نام از چه تاریخی اثر دارد؟ (3) از چه زمانی می‌توانست ثبت‌نام اختیاری کند؟',
            en: 'Khor Inspection Services started trading in Sohar on 1 January 2026 with the monthly figures below. Assume the forward-looking test never triggered earlier than the backward test. (1) At the end of which month did the company have to register? (2) By what date must it apply, and from when does registration take effect? (3) From when could it have registered voluntarily?',
          },
          given: {
            head: [
              { fa: 'ماه 2026', en: 'Month 2026' },
              { fa: 'خدمات مشمول 5٪', en: 'Standard-rated services' },
              { fa: 'خدمات وارداتی با سازوکار معکوس', en: 'Reverse-charge purchases' },
              { fa: 'فروش دارایی سرمایه‌ای', en: 'Sale of capital assets' },
            ],
            rows: [
              [{ fa: 'ژانویه', en: 'January' }, 2000, 0, 0],
              [{ fa: 'فوریه', en: 'February' }, 3000, 0, 0],
              [{ fa: 'مارس', en: 'March' }, 4000, 1500, 0],
              [{ fa: 'آوریل', en: 'April' }, 6000, 0, 0],
              [{ fa: 'مه', en: 'May' }, 8000, 0, 0],
              [{ fa: 'ژوئن', en: 'June' }, 9000, 0, 6000],
              [{ fa: 'ژوئیه', en: 'July' }, 9000, 0, 0],
            ],
            numericCols: [1, 2, 3],
          },
          hint: {
            fa: 'خرید با سازوکار معکوس حساب می‌شود، فروش دارایی سرمایه‌ای نه. «بیشتر شدن» یعنی عبور از آستانه، نه رسیدن به آن.',
            en: 'Reverse-charge purchases count; sales of capital assets do not. “Exceeds” means going above the threshold, not reaching it.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'جمع انباشته ارقام قابل احتساب', en: 'Running total of countable amounts' },
              head: [
                { fa: 'پایان ماه', en: 'Month-end' },
                { fa: 'قابل احتساب در ماه', en: 'Countable in month' },
                { fa: 'جمع انباشته', en: 'Running total' },
              ],
              rows: [
                [{ fa: 'ژانویه', en: 'January' }, 2000, 2000],
                [{ fa: 'فوریه', en: 'February' }, 3000, 5000],
                [{ fa: 'مارس', en: 'March' }, 5500, 10500],
                [{ fa: 'آوریل', en: 'April' }, 6000, 16500],
                [{ fa: 'مه', en: 'May' }, 8000, 24500],
                [{ fa: 'ژوئن', en: 'June' }, 9000, 33500],
                [{ fa: 'ژوئیه', en: 'July' }, 9000, 42500],
              ],
              numericCols: [1, 2],
            },
            {
              type: 'steps',
              items: [
                { title: { fa: 'آستانه اجباری', en: 'Mandatory threshold' }, text: { fa: 'جمع در پایان ژوئن 33,500 است (کمتر از 38,500) و در پایان ژوئیه 42,500 (بیشتر). پس شرط در **پایان ژوئیه 2026** محقق شده است. اگر فروش دارایی 6,000 را به اشتباه حساب کنید، جمع ژوئن 39,500 می‌شود و نتیجه غلط ژوئن را می‌گیرید.', en: 'The total is 33,500 at the end of June (below 38,500) and 42,500 at the end of July (above). The condition is met at the **end of July 2026**. If you wrongly counted the 6,000 asset sale, June would show 39,500 and give the wrong answer of June.' } },
                { title: { fa: 'مهلت و تاریخ اثر', en: 'Deadline and effective date' }, text: { fa: 'درخواست ظرف 30 روز، یعنی تا **30 اوت 2026**. تاریخ اثر: روز اول دومین ماه پس از ژوئیه، یعنی **1 سپتامبر 2026** (مگر سازمان تاریخ دیگری تعیین کند).', en: 'Apply within 30 days, i.e. by **30 August 2026**. Effective date: the first day of the second month after July, i.e. **1 September 2026** (unless the OTA sets another date).' } },
                { title: { fa: 'ثبت‌نام اختیاری', en: 'Voluntary registration' }, text: { fa: 'آستانه اختیاری 19,250 در **پایان مه** (24,500) رد شد؛ از آن زمان شرکت می‌توانست داوطلبانه ثبت‌نام کند تا مالیات ورودی خریدهایش را کسر کند.', en: 'The voluntary threshold of 19,250 was passed at the **end of May** (24,500); from then the company could have registered voluntarily to start deducting input VAT.' } },
              ],
            },
          ],
          answer: {
            fa: 'ثبت‌نام اجباری در پایان ژوئیه 2026؛ درخواست تا 30 اوت 2026؛ اثر از 1 سپتامبر 2026؛ ثبت‌نام اختیاری از پایان مه ممکن بود.',
            en: 'Mandatory at the end of July 2026; apply by 30 August 2026; effective 1 September 2026; voluntary registration was possible from the end of May.',
          },
        },
      ],
    },
    {
      id: 'invoices-supply',
      title: { fa: 'صورت‌حساب، اعلامیه بستانکار، زمان و محل عرضه', en: 'Tax Invoices, Credit Notes, Time and Place of Supply' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'شخص ثبت‌نام‌شده باید هنگام هر عرضه (از جمله عرضه فرضی، مثل هدیه‌ای که مالیات ورودی‌اش کسر شده) و هنگام دریافت پیش‌پرداخت، **صورت‌حساب مالیاتی** صادر کند؛ آن هم **ظرف 15 روز** از رویداد (ماده 143 آیین‌نامه، اصلاح‌شده در 2022). صورت‌حساب به زبان عربی است یا به انگلیسی همراه با ترجمه عربی (ماده 144). اگر صورت‌حساب به ارز خارجی باشد، مبلغ مالیات باید به ریال عمانی و با میانگین نرخ خرید و فروش اعلام‌شده بانک مرکزی عمان در تاریخ سررسید مالیات محاسبه شود (ماده 68 قانون). طبق تصمیم 189/2026، صورت‌حساب باید به‌صورت مرحله‌ای از 1 آوریل 2027 و 1 اکتبر 2027 در قالب الکترونیکی تأییدشده صادر شود؛ جزئیات آن در درس صورت‌حساب الکترونیکی در عمان آمده است.',
            en: 'A registered person must issue a **tax invoice** for every supply (including a deemed supply, such as a gift on which input VAT was deducted) and when it receives an advance payment, **within 15 days** of the event (Regulation 143, as amended in 2022). The invoice is in Arabic, or in English with an Arabic translation (Regulation 144). If it is in a foreign currency, the VAT must be shown in Omani rials, converted at the Central Bank of Oman’s average buying and selling rate on the tax due date (Article 68). Under Decision 189/2026, invoices must be issued in an approved electronic format in phases from 1 April 2027 and 1 October 2027; the lesson on e-invoicing in Oman covers this.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'اطلاعات لازم در صورت‌حساب مالیاتی کامل (ماده 144 آیین‌نامه)', en: 'Contents of a full tax invoice (Regulation 144)' },
          head: [
            { fa: 'گروه', en: 'Group' },
            { fa: 'اطلاعات', en: 'Details' },
          ],
          rows: [
            [{ fa: 'عنوان و شناسه', en: 'Title and identity' }, { fa: 'عبارت «صورت‌حساب مالیاتی»، شماره ترتیبی، تاریخ صدور، تاریخ عرضه و تاریخ پرداخت (اگر متفاوت باشند)', en: 'The words “Tax Invoice”, sequential number, issue date, date of supply and date of payment (if different)' }],
            [{ fa: 'فروشنده', en: 'Supplier' }, { fa: 'نام کامل، نشانی و شماره شناسایی مالیاتی', en: 'Full name, address and VATIN' }],
            [{ fa: 'خریدار', en: 'Customer' }, { fa: 'نام کامل، نشانی و شماره شناسایی مالیاتی (اگر دارد) یا شماره معادل در کشور اقامتش', en: 'Full name, address and VATIN (if any) or its equivalent in the customer’s country' }],
            [{ fa: 'کالا یا خدمت', en: 'Goods or services' }, { fa: 'شرح، مقدار، تاریخ پیش‌پرداخت (اگر بوده)', en: 'Description, quantity, date of any advance payment' }],
            [{ fa: 'مبالغ', en: 'Amounts' }, { fa: 'مبلغ بدون مالیات، تخفیف‌ها، نرخ مالیات، ارزش مشمول مالیات و مبلغ مالیات', en: 'Amount excluding VAT, discounts, VAT rate, taxable value and VAT amount' }],
          ],
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'صورت‌حساب مالیاتی کامل', en: 'Full tax invoice' },
            items: [
              { fa: 'برای هر عرضه‌ای مجاز است و برای فروش به اشخاص ثبت‌نام‌شده معمول است', en: 'Allowed for any supply; the normal document for registered customers' },
              { fa: 'نام، نشانی و شماره مالیاتی خریدار را دارد', en: 'Shows the customer’s name, address and VATIN' },
              { fa: 'صورت‌حساب تجمیعی ماهانه برای یک مشتری هم باید همه این اطلاعات را داشته باشد', en: 'A monthly summary invoice for one customer must carry the same details' },
            ],
          },
          right: {
            title: { fa: 'صورت‌حساب مالیاتی ساده‌شده', en: 'Simplified tax invoice' },
            items: [
              { fa: 'برای عرضه‌های کمتر از 500 ریال عمانی بدون مالیات، یا موارد دیگری که سازمان تعیین کند (ماده 146)', en: 'For supplies under OMR 500 excluding VAT, or other cases the OTA allows (Regulation 146)' },
              { fa: 'اطلاعات خریدار را لازم ندارد؛ بقیه اقلام اصلی (تاریخ، فروشنده، شرح، نرخ، مالیات) را دارد', en: 'Customer details not required; the other key items (dates, supplier, description, rate, VAT) are' },
              { fa: 'اگر مشتری بخواهد، صورت‌حساب کامل باید صادر شود', en: 'A full invoice must be issued if the customer asks for one' },
            ],
          },
        },
        {
          type: 'p',
          text: {
            fa: '**اعلامیه بستانکار و بدهکار.** صورت‌حساب صادرشده را نمی‌توان پاک یا ویرایش کرد. اگر عرضه لغو شود، کالا برگردد، قیمت کم یا زیاد شود، یا مابه‌ازا وصول نشود، فروشنده **سند اصلاحی** صادر می‌کند: **اعلامیه بستانکار** (Credit note) برای کاهش و **اعلامیه بدهکار** (Debit note) برای افزایش (ماده 40 قانون و ماده 155 آیین‌نامه). این سند همان اطلاعات صورت‌حساب را دارد و باید صورت‌حساب یا صورت‌حساب‌های اصلی و مبلغ مالیاتِ اصلاح‌شده را نشان دهد. فروشنده مالیات خروجی‌اش را کم می‌کند و خریدار ثبت‌نام‌شده مالیات ورودی‌اش را (ماده 45). اگر صورت‌حساب اصلی الکترونیکی بوده، اعلامیه هم باید الکترونیکی باشد.',
            en: '**Credit and debit notes.** An issued invoice cannot be deleted or edited. If a supply is cancelled, goods are returned, the price goes down or up, or the consideration is not collected, the supplier issues an **adjustment document**: a **credit note** to decrease and a **debit note** to increase (Article 40 and Regulation 155). It carries the same details as an invoice and must identify the original invoice or invoices and the VAT being adjusted. The supplier reduces its output VAT and a registered customer reduces its input VAT (Article 45). If the original invoice was electronic, the note must be electronic too.',
          },
        },
        {
          type: 'journal',
          title: {
            fa: 'وادی برای 2,000 تخفیف به شرکت حفاری جبل اعلامیه بستانکار صادر می‌کند (به‌اضافه 100 مالیات)',
            en: 'Wadi issues a credit note to Jabal Drilling for a 2,000 discount (plus 100 VAT)',
          },
          entries: [
            {
              date: { fa: 'دفاتر وادی', en: 'Wadi’s books' },
              lines: [
                { account: ac.salesAllow, debit: 2000 },
                { account: ac.vatOut, debit: 100 },
                { account: ac.ar, credit: 2100 },
              ],
              memo: { fa: 'مالیات خروجی 100 کاهش می‌یابد؛ اعلامیه به شماره صورت‌حساب اصلی ارجاع دارد.', en: 'Output VAT falls by 100; the note refers to the original invoice number.' },
            },
            {
              date: { fa: 'دفاتر جبل', en: 'Jabal’s books' },
              lines: [
                { account: ac.ap, debit: 2100 },
                { account: ac.hireExp, credit: 2000 },
                { account: ac.vatIn, credit: 100 },
              ],
              memo: { fa: 'خریدار مالیات ورودی‌اش را به همان اندازه کم می‌کند.', en: 'The customer reduces its input VAT by the same amount.' },
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: '**زمان عرضه (سررسید مالیات).** مالیات در **زودترین** این سه تاریخ سررسید می‌شود: تاریخ عرضه، تاریخ صدور صورت‌حساب، یا تاریخ دریافت تمام یا بخشی از مابه‌ازا (به اندازه مبلغ دریافتی) (ماده 26). در عرضه‌های مستمر که صورت‌حساب یا پرداخت آن‌ها پشت سر هم است (مثل قرارداد سالانه اجاره دکل یا نگهداری)، مالیات در تاریخ پرداخت مندرج در صورت‌حساب یا تاریخ پرداخت، هر کدام زودتر باشد، سررسید می‌شود و دست‌کم هر 12 ماه یک بار (ماده 27). هر کس مالیاتی را روی صورت‌حساب بنویسد، باید همان را بپردازد (ماده 30).',
            en: '**Time of supply (tax point).** VAT becomes due on the **earliest** of: the date of supply, the date of the tax invoice, or the date all or part of the consideration is received (to the extent received) (Article 26). For continuous supplies invoiced or paid in instalments (such as an annual rig-hire or maintenance contract), VAT is due on the payment date shown on the invoice or the date of payment, whichever is earlier, and at least once every 12 months (Article 27). Anyone who shows VAT on an invoice must pay it (Article 30).',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'پیش‌پرداخت پیش از عرضه', en: 'An advance before the supply' },
          text: {
            fa: 'شرکت حفاری جبل در 20 ژوئن 2026 مبلغ 21,000 (با مالیات) به‌عنوان پیش‌پرداخت اجاره‌ای می‌پردازد که از 5 ژوئیه شروع می‌شود. مالیاتِ داخل این مبلغ 21,000 × 5 ÷ 105 = 1,000 است و همان روز 20 ژوئن سررسید می‌شود؛ یعنی در اظهارنامه **فصل دوم** می‌آید، نه فصل سوم. وادی باید ظرف 15 روز صورت‌حساب پیش‌پرداخت صادر کند.',
            en: 'Jabal Drilling pays 21,000 (VAT-inclusive) on 20 June 2026 as an advance for a hire starting on 5 July. The VAT inside it is 21,000 × 5 ÷ 105 = 1,000, due on 20 June, so it belongs in the **second-quarter** return, not the third. Wadi must issue an advance-payment invoice within 15 days.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'محل عرضه: قواعد عمومی (مواد 21 تا 24)', en: 'Place of supply: the general rules (Articles 21 to 24)' },
          head: [
            { fa: 'نوع عرضه', en: 'Supply' },
            { fa: 'محل عرضه', en: 'Place of supply' },
          ],
          rows: [
            [{ fa: 'کالا بدون حمل', en: 'Goods without transport' }, { fa: 'جایی که کالا در اختیار مشتری قرار می‌گیرد', en: 'Where the goods are put at the customer’s disposal' }],
            [{ fa: 'کالا با حمل', en: 'Goods with transport' }, { fa: 'جایی که حمل شروع می‌شود', en: 'Where the transport begins' }],
            [{ fa: 'خدمات به مشتری ثبت‌نام‌شده در کشورهای شورای همکاری (قاعده عمومی)', en: 'Services to a customer registered in a GCC state (general rule)' }, { fa: 'محل اقامت مشتری', en: 'The customer’s place of residence' }],
            [{ fa: 'خدمات به مشتری غیرمشمول', en: 'Services to a non-taxable customer' }, { fa: 'محل اقامت فروشنده (اگر در عمان باشد)', en: 'The supplier’s place of residence (if in Oman)' }],
            [{ fa: 'استثناها: حمل‌ونقل / خدمات مربوط به ملک / مخابرات و خدمات الکترونیکی', en: 'Exceptions: transport / real estate services / telecoms and e-services' }, { fa: 'محل شروع حمل / محل ملک / محل استفاده واقعی', en: 'Where transport begins / where the property is / where actually used' }],
            [{ fa: 'نفت، گاز و آب از راه خط لوله، و برق', en: 'Oil, gas and water by pipeline, and electricity' }, { fa: 'قاعده ویژه ماده 22 (محل اقامت تاجر مشمول یا محل مصرف واقعی)', en: 'Special rule in Article 22 (the taxable trader’s residence or the actual place of consumption)' }],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: بند مالیات در قراردادهای بلندمدت', en: 'In practice: the VAT clause in long-term contracts' },
          text: {
            fa: 'در قراردادهایی که پیش از اجرای قانون بسته شده‌اند و درباره مالیات بر ارزش افزوده چیزی نگفته‌اند، مابه‌ازا **شامل مالیات** فرض می‌شود (ماده 105). یعنی پیمانکار 5٪ را از درآمد خودش می‌پردازد. به همین دلیل قراردادهای خدمات نفتی امروز همیشه بندی دارند که می‌گوید قیمت‌ها بدون مالیات است و مالیات قابل اعمال جداگانه اضافه می‌شود.',
            en: 'For contracts signed before the law took effect that are silent on VAT, the consideration is **deemed to include VAT** (Article 105), so the contractor pays the 5% out of its own revenue. That is why oilfield service contracts today always contain a clause stating that prices exclude VAT and any applicable VAT is added.',
          },
        },
      ],
    },
    {
      id: 'input-reverse-imports',
      title: { fa: 'مالیات ورودی، سازوکار معکوس و واردات', en: 'Input VAT, Reverse Charge and Imports' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'شخص ثبت‌نام‌شده مالیات ورودی را کسر می‌کند اگر خرید برای عرضه‌های مشمول (5٪ یا نرخ صفر) به کار رود (ماده 41) و مدرک درست داشته باشد: صورت‌حساب مالیاتی (کامل، ساده‌شده یا تجمیعی)، اسناد گمرکی واردات و پرداخت مالیات آن، یا سوابق اظهارنامه برای سازوکار معکوس و تعویق مالیات واردات (ماده 55 آیین‌نامه). کسر در اظهارنامه‌ای انجام می‌شود که همه شرط‌ها در آن دوره فراهم شده است. می‌توان کسر را به دوره بعد برد، اما **حق کسر 3 سال پس از پایان دوره‌ای که در آن ایجاد شده از بین می‌رود** (ماده 44).',
            en: 'A registered person deducts input VAT if the purchase is used for taxable supplies (5% or zero-rated) (Article 41) and it holds the right evidence: a tax invoice (full, simplified or summary), customs documents proving the import and the VAT paid, or return records for reverse-charge and deferred import VAT (Regulation 55). The deduction is made in the return for the period in which all conditions are met. It can be carried to a later period, but **the right expires 3 years after the end of the period in which it arose** (Article 44).',
          },
        },
        {
          type: 'table',
          caption: { fa: 'مالیات ورودی غیرقابل کسر (ماده 56 آیین‌نامه و ماده 43 قانون)', en: 'Blocked input VAT (Regulation 56 and Article 43)' },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'توضیح و نمونه نفت و گاز', en: 'Notes and oil and gas examples' },
          ],
          rows: [
            [{ fa: 'سرگرمی', en: 'Entertainment' }, { fa: 'مهمانی، جشن یا برنامه تفریحی کارکنان و مشتریان', en: 'Parties, celebrations or leisure events for staff and clients' }],
            [{ fa: 'خودرو در دسترس برای استفاده شخصی', en: 'Motor vehicles available for personal use' }, { fa: 'خودرو تا 10 سرنشین با راننده، و سوخت، تعمیر و بیمه آن، اگر برای استفاده شخصی در دسترس باشد. وانتی که فقط در میدان و برای کار استفاده می‌شود و در دسترس استفاده شخصی نیست، مشمول این منع نیست.', en: 'Vehicles for up to 10 people including the driver, and their fuel, repairs and insurance, if available for personal use. A pickup used only on site for work and not available for private use is not caught.' }],
            [{ fa: 'تهیه غذا و نوشیدنی (کترینگ)', en: 'Food and beverage catering' }, { fa: 'مثلاً کترینگ کمپ میدانی برای خدمه؛ مگر اینکه خودِ شرکت آن را در قالب عرضه مشمول دوباره بفروشد', en: 'For example catering at a field camp for crews, unless the company itself resupplies it as a taxable supply' }],
            [{ fa: 'کالای ممنوع', en: 'Prohibited goods' }, { fa: 'کالایی که واردات، عرضه یا صادرات آن قانوناً ممنوع است', en: 'Goods whose import, supply or export is prohibited by law' }],
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'درصد کسر = ارزش عرضه‌های مشمول ÷ (ارزش عرضه‌های مشمول + ارزش عرضه‌های معاف) × 100٪',
            en: 'Recovery % = Taxable supplies ÷ (Taxable supplies + Exempt supplies) × 100%',
          },
          note: {
            fa: 'برای مالیات ورودی هزینه‌های مشترکِ شرکتی که هم عرضه مشمول دارد هم معاف. این درصد هر دوره موقت حساب می‌شود و در پایان سال با درصد سالانه تعدیل می‌شود (مواد 58 تا 60 آیین‌نامه). مالیات ورودی هزینه‌ای که فقط برای عرضه معاف است، اصلاً کسر نمی‌شود.',
            en: 'Used for the input VAT on shared costs of a business that makes both taxable and exempt supplies. The percentage is applied provisionally each period and trued up with the annual percentage at year-end (Regulations 58 to 60). Input VAT on costs used only for exempt supplies is not deductible at all.',
          },
        },
        {
          type: 'h',
          text: { fa: 'سازوکار معکوس برای خدمات وارداتی', en: 'Reverse Charge on Imported Services' },
        },
        {
          type: 'p',
          text: {
            fa: 'وقتی وادی خدمتی را از تأمین‌کننده‌ای می‌خرد که در عمان محل اقامت ندارد (مثلاً مشاور مهندسی در لندن یا اشتراک نرم‌افزار ابری از خارج)، تأمین‌کننده مالیات عمان نمی‌گیرد. در عوض **خودِ وادی** مالیات 5٪ را به‌عنوان مالیات خروجی حساب می‌کند و اگر خدمت برای عرضه‌های مشمول به کار رود، همان مبلغ را در **همان اظهارنامه** به‌عنوان مالیات ورودی کسر می‌کند (مواد 12، 20 و 41). اثر نقدی صفر است، اما هر دو طرف باید گزارش شوند. وادی روی صورت‌حساب تأمین‌کننده خارجی مبلغ مالیات به ریال عمانی را می‌نویسد و ذکر می‌کند که عرضه مشمول سازوکار معکوس است (ماده 151 آیین‌نامه).',
            en: 'When Wadi buys a service from a supplier with no place of residence in Oman (an engineering consultant in London, or a cloud software subscription from abroad), the supplier charges no Omani VAT. Instead **Wadi itself** calculates 5% as output VAT and, if the service is used for taxable supplies, deducts the same amount as input VAT in the **same return** (Articles 12, 20 and 41). The cash effect is nil, but both sides must be reported. Wadi records the VAT amount in Omani rials on the foreign supplier’s invoice and notes that the supply is subject to the reverse charge (Regulation 151).',
          },
        },
        {
          type: 'journal',
          title: { fa: 'خدمات مشاوره مهندسی 30,000 از یک شرکت انگلیسی (سازوکار معکوس)', en: 'Engineering consultancy of 30,000 from a UK firm (reverse charge)' },
          entries: [
            {
              lines: [
                { account: ac.engExp, debit: 30000 },
                { account: ac.vatIn, debit: 1500 },
                { account: ac.apForeign, credit: 30000 },
                { account: ac.vatOut, credit: 1500 },
              ],
              memo: { fa: 'تأمین‌کننده فقط 30,000 دریافت می‌کند؛ 1,500 در هر دو طرف اظهارنامه می‌آید و یکدیگر را خنثی می‌کنند.', en: 'The supplier is paid only 30,000; the 1,500 appears on both sides of the return and nets to nil.' },
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: '**واردات کالا و گمرک.** مالیات واردات هنگام ورود کالا سررسید می‌شود و اداره کل گمرک آن را همراه حقوق گمرکی از راه اظهارنامه گمرکی (سامانه بیان) وصول می‌کند (مواد 29 و 84). **ارزش مشمول** واردات برابر ارزش گمرکی به‌اضافه حقوق گمرکی و سایر عوارض واردات است (ماده 34). وارد‌کننده ثبت‌نام‌شده این مالیات را با اسناد گمرکی به‌عنوان مالیات ورودی کسر می‌کند. شخص ثبت‌نام‌شده می‌تواند درخواست کند که پرداخت مالیات واردات تا اظهارنامه همان دوره **به تعویق** بیفتد (ماده 86 قانون و ماده 180 آیین‌نامه)؛ در این حالت مالیات در گمرک پرداخت نمی‌شود و در اظهارنامه هم خروجی و هم ورودی ثبت می‌شود. تعویق به تأیید سازمان و شرایط آن بستگی دارد.',
            en: '**Imports of goods and customs.** Import VAT is due when the goods enter and the Directorate General of Customs collects it with customs duty through the customs declaration (the Bayan system) (Articles 29 and 84). The **taxable value** of an import is the customs value plus customs duty and other import charges (Article 34). A registered importer deducts this VAT as input tax with the customs documents. A registered person may also ask to **defer** import VAT to the return for that period (Article 86 and Regulation 180): nothing is paid at customs and the return shows the amount as both output and input VAT. Deferral depends on OTA approval and its conditions.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'محاسبه مالیات واردات ابزار درون‌چاهی', en: 'Import VAT on downhole tools' },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          rows: [
            [{ fa: 'ارزش گمرکی (CIF)', en: 'Customs value (CIF)' }, 40000],
            [{ fa: 'حقوق گمرکی 5٪ (هزینه کالا می‌شود)', en: 'Customs duty at 5% (part of the cost of the goods)' }, 2000],
            [{ fa: 'ارزش مشمول مالیات واردات', en: 'Taxable value for import VAT' }, 42000],
            [{ fa: 'مالیات واردات 5٪ (قابل کسر)', en: 'Import VAT at 5% (deductible)' }, 2100],
          ],
          numericCols: [1],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'مطالبات سوخت‌شده', en: 'Bad debts' },
          text: {
            fa: 'اگر مشتری پول را نپردازد، فروشنده می‌تواند مالیات خروجی‌ای را که پرداخته است اصلاح کند، به شرط اینکه: دست‌کم 12 ماه از سررسید پرداخت گذشته باشد، مالیات قبلاً اظهار و پرداخت شده باشد، مطالبه در دفاتر سوخت شده باشد، مشتری شخص مرتبط نباشد، کتباً به مشتری اطلاع داده شود، و برای مبالغ بیش از 5,000 اقدام حقوقی لازم انجام شده باشد. این اصلاح باید ظرف 3 سال انجام شود (مواد 51 و 52 آیین‌نامه).',
            en: 'If a customer never pays, the supplier can adjust the output VAT it paid, provided that at least 12 months have passed since the payment due date, the VAT was declared and paid, the debt has been written off, the customer is not a related person, the customer is notified in writing, and for amounts over 5,000 the required legal steps were taken. The adjustment must be made within 3 years (Regulations 51 and 52).',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'مالیات ورودی قابل کسر در یک فصل', en: 'Deductible input VAT for a quarter' },
          difficulty: 'medium',
          problem: {
            fa: 'وادی در یک فصل خریدهای زیر را دارد. (1) مالیات ورودی قابل کسر این فصل چقدر است؟ (2) چه مبلغی باید به‌عنوان مالیات خروجی سازوکار معکوس اظهار شود؟ (3) چه مبلغی از مالیات به بهای تمام‌شده یا هزینه اضافه می‌شود؟ (4) ثبت‌های خودرو، نرم‌افزار و واردات را بنویسید.',
            en: 'Wadi has the purchases below in one quarter. (1) How much input VAT is deductible this quarter? (2) How much reverse-charge output VAT must be declared? (3) How much VAT is added to cost or expense? (4) Record the car, software and import entries.',
          },
          given: {
            head: [
              { fa: 'ردیف', en: 'Item' },
              { fa: 'خرید', en: 'Purchase' },
              { fa: 'مبلغ بدون مالیات', en: 'Net amount' },
              { fa: 'مالیات', en: 'VAT' },
            ],
            rows: [
              [{ fa: '1', en: '1' }, { fa: 'قطعات یدکی از فروشنده محلی (صورت‌حساب مالیاتی موجود است)', en: 'Spare parts from a local supplier (tax invoice held)' }, 24000, 1200],
              [{ fa: '2', en: '2' }, { fa: 'سواری برای مدیرعامل که برای استفاده شخصی هم در دسترس است', en: 'A saloon car for the general manager, also available for personal use' }, 14000, 700],
              [{ fa: '3', en: '3' }, { fa: 'شام جمعی کارکنان در رستوران', en: 'A staff team dinner at a restaurant' }, 800, 40],
              [{ fa: '4', en: '4' }, { fa: 'لایسنس نرم‌افزار از شرکتی آمریکایی بدون اقامت در عمان', en: 'A software licence from a US company with no residence in Oman' }, 10000, 0],
              [{ fa: '5', en: '5' }, { fa: 'واردات تجهیزات کنترل فشار: ارزش گمرکی 30,000 و حقوق گمرکی 5٪؛ مالیات در گمرک پرداخت شد', en: 'Imported pressure-control equipment: customs value 30,000 and 5% duty; VAT paid at customs' }, 30000, 0],
              [{ fa: '6', en: '6' }, { fa: 'خدمات نظافت دفتر؛ صورت‌حساب تا پایان فصل نرسیده است', en: 'Office cleaning; the invoice has not arrived by quarter-end' }, 2000, 100],
            ],
            numericCols: [2, 3],
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'ردیف', en: 'Item' },
                { fa: 'برخورد', en: 'Treatment' },
                { fa: 'ورودی قابل کسر', en: 'Deductible input' },
              ],
              rows: [
                [{ fa: '1', en: '1' }, { fa: 'کسر کامل', en: 'Fully deductible' }, 1200],
                [{ fa: '2', en: '2' }, { fa: 'غیرقابل کسر (خودرو در دسترس استفاده شخصی)؛ 700 به بهای خودرو اضافه می‌شود', en: 'Blocked (car available for personal use); 700 added to the car’s cost' }, 0],
                [{ fa: '3', en: '3' }, { fa: 'غیرقابل کسر (سرگرمی)؛ 40 هزینه می‌شود', en: 'Blocked (entertainment); 40 expensed' }, 0],
                [{ fa: '4', en: '4' }, { fa: 'سازوکار معکوس: 500 خروجی و 500 ورودی', en: 'Reverse charge: 500 output and 500 input' }, 500],
                [{ fa: '5', en: '5' }, { fa: 'پایه 30,000 + 1,500 = 31,500؛ مالیات 1,575', en: 'Base 30,000 + 1,500 = 31,500; VAT 1,575' }, 1575],
                [{ fa: '6', en: '6' }, { fa: 'بدون صورت‌حساب هنوز کسر نمی‌شود؛ در فصل دریافت صورت‌حساب (ظرف 3 سال)', en: 'Not yet deductible without the invoice; claim in the quarter it arrives (within 3 years)' }, 0],
                [{ fa: 'جمع', en: 'Total' }, blank, 3275],
              ],
              numericCols: [2],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'خودرو', en: 'Car' },
                  lines: [
                    { account: ac.vehicles, debit: 14700 },
                    { account: ac.ap, credit: 14700 },
                  ],
                  memo: { fa: 'مالیات غیرقابل کسر جزء بهای دارایی است.', en: 'Blocked VAT becomes part of the asset’s cost.' },
                },
                {
                  date: { fa: 'نرم‌افزار', en: 'Software' },
                  lines: [
                    { account: ac.softExp, debit: 10000 },
                    { account: ac.vatIn, debit: 500 },
                    { account: ac.apForeign, credit: 10000 },
                    { account: ac.vatOut, credit: 500 },
                  ],
                },
                {
                  date: { fa: 'واردات', en: 'Import' },
                  lines: [
                    { account: ac.equipment, debit: 31500 },
                    { account: ac.vatIn, debit: 1575 },
                    { account: ac.apForeign, credit: 30000 },
                    { account: ac.cash, credit: 3075 },
                  ],
                  memo: { fa: 'به گمرک 1,500 حقوق گمرکی و 1,575 مالیات پرداخت شد.', en: '1,500 duty and 1,575 VAT were paid to customs.' },
                },
              ],
            },
          ],
          answer: {
            fa: 'ورودی قابل کسر 3,275؛ خروجی سازوکار معکوس 500؛ 740 مالیات غیرقابل کسر به بها یا هزینه اضافه می‌شود؛ 100 نظافت به فصل بعد می‌رود.',
            en: 'Deductible input 3,275; reverse-charge output 500; 740 of blocked VAT goes to cost or expense; the 100 on cleaning moves to the next quarter.',
          },
        },
      ],
    },
    {
      id: 'returns-penalties',
      title: { fa: 'اظهارنامه، پرداخت، نگهداری اسناد و جریمه‌ها', en: 'Returns, Payment, Records and Penalties' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'دوره مالیاتی عادی **سه‌ماهه** و هم‌راستا با فصل‌های تقویمی است (ماده 160 آیین‌نامه)؛ دوره اول از تاریخ ثبت‌نام تا پایان همان فصل است. اظهارنامه به‌صورت الکترونیکی در درگاه سازمان و **ظرف 30 روز پس از پایان دوره** تسلیم می‌شود (ماده 72) و مالیات هم **تا همان روز** پرداخت می‌شود (ماده 82). اگر مهلت به تعطیلی بخورد، به اولین روز کاری بعد منتقل می‌شود.',
            en: 'The normal tax period is **quarterly**, aligned with calendar quarters (Regulation 160); the first period runs from the registration date to the end of that quarter. The return is filed online on the OTA portal **within 30 days after the end of the period** (Article 72) and the VAT is paid **by the same date** (Article 82). If the deadline falls on a weekend or holiday, it moves to the next working day.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'تقویم فصلی', en: 'Quarterly calendar' },
          head: [
            { fa: 'دوره', en: 'Period' },
            { fa: 'ماه‌ها', en: 'Months' },
            { fa: 'مهلت اظهارنامه و پرداخت', en: 'Return and payment due' },
          ],
          rows: [
            [{ fa: 'فصل اول', en: 'Q1' }, { fa: 'ژانویه تا مارس', en: 'January to March' }, { fa: '30 آوریل', en: '30 April' }],
            [{ fa: 'فصل دوم', en: 'Q2' }, { fa: 'آوریل تا ژوئن', en: 'April to June' }, { fa: '30 ژوئیه', en: '30 July' }],
            [{ fa: 'فصل سوم', en: 'Q3' }, { fa: 'ژوئیه تا سپتامبر', en: 'July to September' }, { fa: '30 اکتبر', en: '30 October' }],
            [{ fa: 'فصل چهارم', en: 'Q4' }, { fa: 'اکتبر تا دسامبر', en: 'October to December' }, { fa: '30 ژانویه سال بعد', en: '30 January of the next year' }],
          ],
        },
        {
          type: 'list',
          items: [
            { fa: '**محتوای اظهارنامه** (ماده 72 قانون و 162 آیین‌نامه): ارزش عرضه‌های مشمول و معاف، ارزش کالای وارداتی، مالیات خروجی دوره، مالیات ورودی مورد ادعا و مالیات قابل پرداخت.', en: '**Return contents** (Article 72 and Regulation 162): the value of taxable and exempt supplies, the value of imported goods, output VAT for the period, input VAT claimed and the VAT due.' },
            { fa: '**اصلاح اظهارنامه**: اگر خطا یا جاافتادگی پیدا کردید، ظرف 30 روز از کشف آن اظهارنامه اصلاحی بفرستید؛ این کار تا 3 سال پس از تسلیم و پیش از شروع رسیدگی سازمان ممکن است (ماده 73).', en: '**Corrections**: if you find an error or omission, file a revised return within 30 days of discovering it; this is possible up to 3 years after filing and before an OTA audit starts (Article 73).' },
            { fa: '**تشخیص سازمان**: سازمان تا 5 سال پس از مهلت اظهارنامه می‌تواند مالیات را تشخیص دهد؛ اگر ثبت‌نام به‌موقع نبوده، تا 10 سال (ماده 72).', en: '**OTA assessments**: the OTA can assess up to 5 years after the return deadline, or 10 years where registration was late (Article 72).' },
            { fa: '**مازاد ورودی**: اگر مالیات ورودی از خروجی بیشتر شود، مازاد به دوره بعد منتقل یا طبق شرایط مسترد می‌شود (مواد 38 و 87). شرکت‌های خدمات نفتی که بیشتر فروششان نرخ صفر است، اغلب در وضعیت استرداد هستند.', en: '**Excess input VAT**: if input exceeds output, the excess is carried forward or refunded under the conditions (Articles 38 and 87). Oilfield service companies with mostly zero-rated sales are often in a refund position.' },
          ],
        },
        {
          type: 'p',
          text: {
            fa: '**نگهداری اسناد.** صورت‌حساب‌ها، دفاتر و سوابق حسابداری، اسناد گمرکی و هر سند مرتبط باید به روشی امن **10 سال** پس از پایان سال مالیاتی‌ای که اظهارنامه در آن تسلیم شده نگهداری شوند؛ برای اسناد مربوط به املاک **15 سال** (ماده 70). نگهداری الکترونیکی مجاز است، به شرط اینکه سیستم اجازه تغییر، حذف یا افزودن به سوابق پس از تاریخ ثبت را ندهد، نسخه الکترونیکی رونوشت درست اصل باشد و راهنمای سیستم در دسترس باشد (ماده 157 آیین‌نامه). اسناد به هر زبانی مجازند، اما به درخواست سازمان باید به عربی ارائه شوند.',
            en: '**Record keeping.** Invoices, books and accounting records, customs documents and any related documents must be kept securely for **10 years** after the end of the tax year in which the return was filed, and **15 years** for real estate records (Article 70). Electronic records are allowed if the system does not permit changes, deletions or additions after the recording date, the electronic copy is a true copy, and a system manual is available (Regulation 157). Records may be in any language but must be made available in Arabic on request.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'جریمه‌ها در یک نگاه (مبالغ به ریال عمانی)', en: 'Penalties at a glance (amounts in OMR)' },
          head: [
            { fa: 'تخلف', en: 'Failure' },
            { fa: 'پیامد', en: 'Consequence' },
            { fa: 'مرجع', en: 'Source' },
          ],
          rows: [
            [{ fa: 'پرداخت دیرهنگام', en: 'Late payment' }, { fa: 'مالیات اضافی 1٪ برای هر ماه یا بخشی از ماه تأخیر', en: 'Additional tax of 1% for each month or part of a month late' }, { fa: 'مواد 1 و 82 قانون', en: 'Articles 1 and 82' }],
            [{ fa: 'تسلیم دیرهنگام اظهارنامه', en: 'Late filing' }, { fa: 'جریمه اداری 500 تا 5,000', en: 'Administrative penalty of 500 to 5,000' }, { fa: 'ماده 202 آیین‌نامه', en: 'Regulation 202' }],
            [{ fa: 'صادر نکردن صورت‌حساب معتبر', en: 'Not issuing a valid tax invoice' }, { fa: 'جریمه اداری 500 تا 5,000', en: 'Administrative penalty of 500 to 5,000' }, { fa: 'ماده 202 آیین‌نامه (اصلاحیه 2022)', en: 'Regulation 202 (2022 amendment)' }],
            [{ fa: 'اظهار کمتر از واقع', en: 'Under-declaration' }, { fa: '1٪ تا 25٪ مابه‌التفاوت مالیات', en: '1% to 25% of the tax difference' }, { fa: 'ماده 204 آیین‌نامه', en: 'Regulation 204' }],
            [{ fa: 'فرار مالیاتی', en: 'Tax evasion' }, { fa: 'جریمه 300٪ مالیات مربوط، افزون بر مجازات کیفری', en: 'A penalty of 300% of the tax involved, plus criminal penalties' }, { fa: 'ماده 205 آیین‌نامه، مواد 100 و 101 قانون', en: 'Regulation 205, Articles 100 and 101' }],
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'محاسبه مالیات اضافی تأخیر', en: 'Working out late-payment additional tax' },
          text: {
            fa: 'مالیات فصل سوم 8,000 است و باید تا 30 اکتبر پرداخت می‌شد، اما 15 دسامبر پرداخت شد. تأخیر یک ماه و 15 روز است؛ چون «بخشی از ماه» هم یک ماه حساب می‌شود، 2 ماه در نظر گرفته می‌شود: 8,000 × 1٪ × 2 = 160. سازمان می‌تواند طبق قواعد آیین‌نامه بخشی از مالیات اضافی را ببخشد، اما روی آن حساب نکنید.',
            en: 'Q3 VAT of 8,000 was due by 30 October but paid on 15 December. That is one month and 15 days late; since a part of a month counts as a month, 2 months apply: 8,000 × 1% × 2 = 160. The OTA may waive some additional tax under the regulations, but do not plan on it.',
          },
        },
      ],
    },
    {
      id: 'erp-vat',
      title: { fa: 'مالیات بر ارزش افزوده در ERP: کدهای مالیاتی و ثبت‌های خودکار', en: 'VAT in the ERP: Tax Codes and Automatic Postings' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در سیستم برنامه‌ریزی منابع سازمان (ERP)، کاربر حساب مالیات را دستی انتخاب نمی‌کند. هر سطر سفارش، صورت‌حساب فروش یا فاکتور خرید یک **کد مالیاتی** می‌گیرد که سیستم آن را از داده‌های پایه (مشتری یا تأمین‌کننده، کالا یا خدمت، نوع سند) تعیین می‌کند. کد مالیاتی سه چیز را مشخص می‌کند: **نرخ**، **حساب دفتر کل** و **سطر اظهارنامه**. پس اگر کد درست طراحی و انتخاب شود، ثبت حسابداری و گزارش اظهارنامه خودکار و درست خواهند بود.',
            en: 'In an ERP, users do not pick VAT accounts by hand. Every order, sales invoice or supplier invoice line gets a **tax code**, which the system derives from master data (customer or vendor, material or service, document type). The tax code fixes three things: the **rate**, the **general ledger account** and the **return line**. Design and assign the codes correctly and both the accounting entry and the return report come out right automatically.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'داده‌های پایه‌ای که مالیات را تعیین می‌کنند', en: 'Master data that drives VAT' },
          head: [
            { fa: 'داده پایه', en: 'Master data' },
            { fa: 'فیلدهای مالیاتی', en: 'Tax fields' },
            { fa: 'چرا مهم است', en: 'Why it matters' },
          ],
          rows: [
            [{ fa: 'مشتری', en: 'Customer' }, { fa: 'شماره مالیاتی، کشور و محل اقامت، مدرک نرخ صفر نفت و گاز (گواهی JSRS، تأیید استفاده انحصاری) با تاریخ انقضا', en: 'VATIN, country and residence, oil and gas zero-rating evidence (JSRS certificate, exclusive-use confirmation) with expiry date' }, { fa: 'تعیین 5٪، نرخ صفر یا صادرات', en: 'Decides 5%, zero rate or export' }],
            [{ fa: 'تأمین‌کننده', en: 'Vendor' }, { fa: 'شماره مالیاتی، مقیم یا غیرمقیم، ثبت‌نام‌شده یا نه', en: 'VATIN, resident or non-resident, registered or not' }, { fa: 'غیرمقیم یعنی سازوکار معکوس؛ تأمین‌کننده ثبت‌نام‌نشده حق گرفتن مالیات ندارد', en: 'Non-resident means reverse charge; an unregistered vendor may not charge VAT' }],
            [{ fa: 'کالا و خدمت', en: 'Material and service' }, { fa: 'گروه مالیاتی پیش‌فرض، کد تعرفه گمرکی (HS) برای کالا', en: 'Default tax category, HS code for goods' }, { fa: 'کالاهای نرخ صفر فهرست‌شده و واردات', en: 'Listed zero-rated goods and imports' }],
            [{ fa: 'حساب‌های دفتر کل', en: 'GL accounts' }, { fa: 'مالیات خروجی، مالیات ورودی، حساب تسویه مالیات', en: 'Output VAT, input VAT, VAT settlement account' }, { fa: 'هر کد مالیاتی به حساب درست ثبت می‌شود', en: 'Each tax code posts to the right account' }],
            [{ fa: 'شرکت', en: 'Company code' }, { fa: 'شماره مالیاتی شرکت، دوره سه‌ماهه، ریال عمانی به‌عنوان ارز گزارش مالیات', en: 'Company VATIN, quarterly period, OMR as VAT reporting currency' }, { fa: 'گزارش اظهارنامه و تبدیل ارز', en: 'Return reporting and currency conversion' }],
          ],
        },
        {
          type: 'table',
          caption: { fa: 'نمونه طراحی کدهای مالیاتی (نام کدها دلخواه است)', en: 'Sample tax code design (code names are your choice)' },
          head: [
            { fa: 'کد', en: 'Code' },
            { fa: 'کاربرد', en: 'Use' },
            { fa: 'نرخ٪', en: 'Rate %' },
            { fa: 'ثبت در دفتر کل', en: 'GL posting' },
            { fa: 'سطر اظهارنامه', en: 'Return line' },
          ],
          rows: [
            [{ fa: 'S5', en: 'S5' }, { fa: 'فروش با نرخ استاندارد', en: 'Standard-rated sales' }, 5, { fa: 'مالیات خروجی', en: 'Output VAT' }, { fa: 'عرضه‌های 5٪', en: 'Standard-rated supplies' }],
            [{ fa: 'Z0-OG', en: 'Z0-OG' }, { fa: 'فروش نرخ صفر نفت و گاز (ماده 93)', en: 'Zero-rated oil and gas sales (Regulation 93)' }, 0, { fa: 'فقط مبلغ پایه', en: 'Base amount only' }, { fa: 'عرضه‌های نرخ صفر', en: 'Zero-rated supplies' }],
            [{ fa: 'Z0-EX', en: 'Z0-EX' }, { fa: 'صادرات کالا و خدمات', en: 'Exports of goods and services' }, 0, { fa: 'فقط مبلغ پایه', en: 'Base amount only' }, { fa: 'عرضه‌های نرخ صفر', en: 'Zero-rated supplies' }],
            [{ fa: 'E0', en: 'E0' }, { fa: 'عرضه معاف', en: 'Exempt supplies' }, 0, { fa: 'فقط مبلغ پایه', en: 'Base amount only' }, { fa: 'عرضه‌های معاف', en: 'Exempt supplies' }],
            [{ fa: 'OS', en: 'OS' }, { fa: 'خارج از شمول (درخواست وجه، رویالتی)', en: 'Out of scope (cash calls, royalties)' }, 0, { fa: 'بدون مالیات', en: 'No VAT' }, { fa: 'گزارش نمی‌شود؛ برای تطبیق نگه دارید', en: 'Not reported; keep for reconciliation' }],
            [{ fa: 'P5', en: 'P5' }, { fa: 'خرید داخلی قابل کسر', en: 'Deductible local purchases' }, 5, { fa: 'مالیات ورودی', en: 'Input VAT' }, { fa: 'مالیات ورودی', en: 'Input VAT' }],
            [{ fa: 'PB5', en: 'PB5' }, { fa: 'خرید با مالیات غیرقابل کسر', en: 'Purchases with blocked VAT' }, 5, { fa: 'به همان هزینه یا دارایی', en: 'To the same expense or asset' }, { fa: 'ادعا نمی‌شود', en: 'Not claimed' }],
            [{ fa: 'RC5', en: 'RC5' }, { fa: 'خدمات وارداتی، سازوکار معکوس', en: 'Imported services, reverse charge' }, 5, { fa: 'خروجی و ورودی هم‌زمان', en: 'Output and input together' }, { fa: 'خرید با سازوکار معکوس و ورودی', en: 'Reverse-charge purchases and input' }],
            [{ fa: 'IM5', en: 'IM5' }, { fa: 'مالیات واردات پرداخت‌شده در گمرک', en: 'Import VAT paid at customs' }, 5, { fa: 'مالیات ورودی', en: 'Input VAT' }, { fa: 'واردات و ورودی', en: 'Imports and input' }],
            [{ fa: 'ID5', en: 'ID5' }, { fa: 'مالیات واردات معوق تا اظهارنامه', en: 'Import VAT deferred to the return' }, 5, { fa: 'خروجی و ورودی هم‌زمان', en: 'Output and input together' }, { fa: 'واردات معوق و ورودی', en: 'Deferred imports and input' }],
          ],
          numericCols: [2],
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌هایی که ERP با هر کد مالیاتی تولید می‌کند', en: 'The entries the ERP generates for each tax code' },
          entries: [
            {
              date: { fa: 'S5', en: 'S5' },
              lines: [
                { account: ac.ar, debit: 10500 },
                { account: ac.revRepair, credit: 10000 },
                { account: ac.vatOut, credit: 500 },
              ],
            },
            {
              date: { fa: 'Z0-OG', en: 'Z0-OG' },
              lines: [
                { account: ac.ar, debit: 50000 },
                { account: ac.revWell, credit: 50000 },
              ],
              memo: { fa: 'مالیات صفر است، اما 50,000 در سطر عرضه‌های نرخ صفر اظهارنامه می‌آید.', en: 'No VAT, but the 50,000 is reported in the zero-rated line of the return.' },
            },
            {
              date: { fa: 'P5', en: 'P5' },
              lines: [
                { account: ac.spares, debit: 8000 },
                { account: ac.vatIn, debit: 400 },
                { account: ac.ap, credit: 8400 },
              ],
            },
            {
              date: { fa: 'PB5', en: 'PB5' },
              lines: [
                { account: ac.entExp, debit: 1050 },
                { account: ac.ap, credit: 1050 },
              ],
              memo: { fa: 'مالیات 50 غیرقابل کسر است و جزء هزینه می‌شود.', en: 'The 50 of VAT is blocked and becomes part of the expense.' },
            },
          ],
        },
        {
          type: 'steps',
          items: [
            { title: { fa: 'مدیر مالیات', en: 'Tax manager' }, text: { fa: 'کدهای مالیاتی و قواعد تعیین خودکار را طراحی و تأیید می‌کند و فهرست‌های نرخ صفر را به‌روز نگه می‌دارد.', en: 'Designs and approves tax codes and determination rules, and keeps zero-rated lists up to date.' } },
            { title: { fa: 'تیم داده پایه', en: 'Master data team' }, text: { fa: 'شماره‌های مالیاتی، وضعیت اقامت و مدارک نرخ صفر را با تاریخ انقضا نگه می‌دارد.', en: 'Maintains VATINs, residence status and zero-rating evidence with expiry dates.' } },
            { title: { fa: 'حسابداران دریافتنی و پرداختنی', en: 'AR and AP accountants' }, text: { fa: 'سندها را ثبت می‌کنند؛ تغییر کد مالیاتی پیشنهادی سیستم فقط با گردش کار تأیید ممکن است.', en: 'Post documents; overriding the system’s proposed tax code requires an approval workflow.' } },
            { title: { fa: 'حسابدار مالیات', en: 'Tax accountant' }, text: { fa: 'در پایان فصل گزارش مالیات را اجرا، با دفتر کل تطبیق و اظهارنامه را آماده می‌کند.', en: 'At quarter-end runs the VAT report, reconciles it to the ledger and prepares the return.' } },
            { title: { fa: 'مدیر مالی و خزانه', en: 'Finance manager and treasury' }, text: { fa: 'اظهارنامه را تأیید و مالیات را پیش از مهلت پرداخت می‌کنند.', en: 'Approve the return and pay the VAT before the deadline.' } },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: پیوند با چرخه خرید و بازیافت هزینه', en: 'In practice: the link to procure-to-pay and cost recovery' },
          text: {
            fa: 'مالیات ورودی در زمان ثبت فاکتور خرید ثبت می‌شود، نه در زمان رسید کالا؛ حساب واسط رسید کالا و فاکتور (GR/IR) همیشه بدون مالیات است. در شرکت بهره‌بردار، هزینه‌ها با موضوع هزینه درست (چاه، مجوز هزینه یا AFE، مرکز هزینه) ثبت می‌شوند تا طبق قرارداد نفتی قابل بازیافت باشند. مالیات قابل کسر جزء هزینه بازیافتنی نیست، چون از سازمان پس گرفته می‌شود؛ اما مالیات غیرقابل کسر جزء همان هزینه می‌شود و اینکه طبق قرارداد قابل بازیافت باشد یا نه، به متن قرارداد بستگی دارد.',
            en: 'Input VAT is recorded when the supplier invoice is posted, not at goods receipt; the GR/IR clearing account is always net of VAT. At an operator, costs are posted to the right cost object (well, AFE, cost centre) so they can be recovered under the petroleum agreement. Deductible VAT is not part of the recoverable cost pool, because it comes back from the OTA; blocked VAT becomes part of the cost, and whether it is recoverable depends on the contract.',
          },
        },
      ],
    },
    {
      id: 'worked-quarter',
      title: { fa: 'مثال جامع: یک فصل مالیاتی شرکت خدمات نفتی وادی', en: 'Worked Example: One VAT Quarter at Wadi Oilfield Services' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'وادی ثبت‌نام‌شده است و اظهارنامه سه‌ماهه می‌دهد. فصل سوم 2026 از 1 ژوئیه تا 30 سپتامبر است؛ پس اظهارنامه و پرداخت تا **30 اکتبر 2026** مهلت دارند. معاملات فصل در جدول زیر آمده است. شرکت نفت رمل بهره‌بردار دارای مجوز است و مدارک نرخ صفر در پرونده موجود است؛ شرکت حفاری جبل پیمانکار است.',
            en: 'Wadi is registered and files quarterly. Q3 2026 runs from 1 July to 30 September, so the return and payment are due by **30 October 2026**. The quarter’s transactions are below. Raml Petroleum is a licensed operator and the zero-rating evidence is on file; Jabal Drilling is a contractor.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'معاملات فصل سوم 2026', en: 'Q3 2026 transactions' },
          head: [
            { fa: 'ردیف', en: '#' },
            { fa: 'معامله', en: 'Transaction' },
            { fa: 'مبلغ پایه', en: 'Base' },
            { fa: 'کد', en: 'Code' },
            { fa: 'مالیات', en: 'VAT' },
          ],
          rows: [
            [{ fa: '1', en: '1' }, { fa: 'خدمات مداخله در چاه برای رمل (10 ژوئیه)', en: 'Well-intervention services to Raml (10 July)' }, 180000, { fa: 'Z0-OG', en: 'Z0-OG' }, 0],
            [{ fa: '2', en: '2' }, { fa: 'اجاره تجهیزات به جبل (31 ژوئیه)', en: 'Equipment hire to Jabal (31 July)' }, 90000, { fa: 'S5', en: 'S5' }, 4500],
            [{ fa: '3', en: '3' }, { fa: 'تعمیرات کارگاهی برای یک شرکت ساختمانی (14 اوت)', en: 'Workshop repairs for a construction company (14 August)' }, 30000, { fa: 'S5', en: 'S5' }, 1500],
            [{ fa: '4', en: '4' }, { fa: 'اعلامیه بستانکار به جبل، کاهش روزهای اجاره (20 اوت)', en: 'Credit note to Jabal for fewer hire days (20 August)' }, 6000, { fa: 'S5', en: 'S5' }, 300],
            [{ fa: '5', en: '5' }, { fa: 'قطعات یدکی و لوازم مصرفی محلی (5 اوت)', en: 'Local spare parts and consumables (5 August)' }, 40000, { fa: 'P5', en: 'P5' }, 2000],
            [{ fa: '6', en: '6' }, { fa: 'اجاره سه‌ماهه کارگاه و محوطه (1 ژوئیه)', en: 'Quarterly rent of workshop and yard (1 July)' }, 12000, { fa: 'P5', en: 'P5' }, 600],
            [{ fa: '7', en: '7' }, { fa: 'برنامه تفریحی کارکنان (18 سپتامبر)', en: 'Staff entertainment event (18 September)' }, 2000, { fa: 'PB5', en: 'PB5' }, 100],
            [{ fa: '8', en: '8' }, { fa: 'مشاوره مهندسی از شرکتی انگلیسی (25 سپتامبر)', en: 'Engineering consultancy from a UK firm (25 September)' }, 30000, { fa: 'RC5', en: 'RC5' }, 1500],
            [{ fa: '9', en: '9' }, { fa: 'واردات ابزار درون‌چاهی: ارزش گمرکی 40,000 و حقوق گمرکی 2,000 (12 اوت)', en: 'Import of downhole tools: customs value 40,000 and duty 2,000 (12 August)' }, 42000, { fa: 'IM5', en: 'IM5' }, 2100],
          ],
          numericCols: [2, 4],
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های خودکار ERP در طول فصل', en: 'ERP postings during the quarter' },
          entries: [
            { date: d('10 ژوئیه', '10 Jul'), lines: [{ account: ac.ar, debit: 180000 }, { account: ac.revWell, credit: 180000 }], memo: { fa: '1: نرخ صفر نفت و گاز', en: '1: oil and gas zero rate' } },
            { date: d('31 ژوئیه', '31 Jul'), lines: [{ account: ac.ar, debit: 94500 }, { account: ac.revHire, credit: 90000 }, { account: ac.vatOut, credit: 4500 }], memo: { fa: '2: فروش 5٪ به پیمانکار', en: '2: 5% sale to a contractor' } },
            { date: d('14 اوت', '14 Aug'), lines: [{ account: ac.ar, debit: 31500 }, { account: ac.revRepair, credit: 30000 }, { account: ac.vatOut, credit: 1500 }], memo: { fa: '3: فروش 5٪', en: '3: 5% sale' } },
            { date: d('20 اوت', '20 Aug'), lines: [{ account: ac.salesAllow, debit: 6000 }, { account: ac.vatOut, debit: 300 }, { account: ac.ar, credit: 6300 }], memo: { fa: '4: اعلامیه بستانکار با ارجاع به صورت‌حساب 31 ژوئیه', en: '4: credit note referring to the 31 July invoice' } },
            { date: d('5 اوت', '5 Aug'), lines: [{ account: ac.spares, debit: 40000 }, { account: ac.vatIn, debit: 2000 }, { account: ac.ap, credit: 42000 }], memo: { fa: '5: خرید قابل کسر', en: '5: deductible purchase' } },
            { date: d('1 ژوئیه', '1 Jul'), lines: [{ account: ac.rentExp, debit: 12000 }, { account: ac.vatIn, debit: 600 }, { account: ac.ap, credit: 12600 }], memo: { fa: '6: اجاره ملک تجاری 5٪ دارد', en: '6: commercial rent carries 5%' } },
            { date: d('18 سپتامبر', '18 Sep'), lines: [{ account: ac.entExp, debit: 2100 }, { account: ac.ap, credit: 2100 }], memo: { fa: '7: مالیات غیرقابل کسر جزء هزینه', en: '7: blocked VAT included in the expense' } },
            { date: d('25 سپتامبر', '25 Sep'), lines: [{ account: ac.engExp, debit: 30000 }, { account: ac.vatIn, debit: 1500 }, { account: ac.apForeign, credit: 30000 }, { account: ac.vatOut, credit: 1500 }], memo: { fa: '8: سازوکار معکوس', en: '8: reverse charge' } },
            { date: d('12 اوت', '12 Aug'), lines: [{ account: ac.tools, debit: 42000 }, { account: ac.vatIn, debit: 2100 }, { account: ac.apForeign, credit: 40000 }, { account: ac.cash, credit: 4100 }], memo: { fa: '9: حقوق گمرکی 2,000 و مالیات 2,100 به گمرک پرداخت شد', en: '9: duty of 2,000 and VAT of 2,100 paid to customs' } },
          ],
        },
        {
          type: 'tAccounts',
          title: { fa: 'حساب‌های مالیات پیش از تسویه', en: 'VAT accounts before settlement' },
          accounts: [
            { name: ac.vatOut, debits: [300], credits: [4500, 1500, 1500] },
            { name: ac.vatIn, debits: [2000, 600, 1500, 2100], credits: [] },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'خلاصه اظهارنامه فصل سوم 2026 (محتوای الزامی ماده 72)', en: 'Q3 2026 return summary (the content Article 72 requires)' },
          head: [
            { fa: 'سطر', en: 'Line' },
            { fa: 'ارزش', en: 'Value' },
            { fa: 'مالیات', en: 'VAT' },
          ],
          rows: [
            [{ fa: 'عرضه‌های 5٪ پس از کسر اعلامیه بستانکار (90,000 + 30,000 منهای 6,000)', en: 'Standard-rated supplies net of the credit note (90,000 + 30,000 less 6,000)' }, 114000, 5700],
            [{ fa: 'عرضه‌های نرخ صفر', en: 'Zero-rated supplies' }, 180000, 0],
            [{ fa: 'عرضه‌های معاف', en: 'Exempt supplies' }, 0, 0],
            [{ fa: 'خرید با سازوکار معکوس (خروجی)', en: 'Reverse-charge purchases (output)' }, 30000, 1500],
            [{ fa: 'جمع مالیات خروجی', en: 'Total output VAT' }, blank, 7200],
            [{ fa: 'ورودی خریدهای داخلی (2,000 + 600)', en: 'Input on local purchases (2,000 + 600)' }, blank, 2600],
            [{ fa: 'ورودی سازوکار معکوس', en: 'Input on reverse-charge purchases' }, blank, 1500],
            [{ fa: 'کالای وارداتی و مالیات پرداخت‌شده در گمرک', en: 'Imported goods and VAT paid at customs' }, 42000, 2100],
            [{ fa: 'جمع مالیات ورودی', en: 'Total input VAT' }, blank, 6200],
            [{ fa: 'مالیات قابل پرداخت (7,200 منهای 6,200)', en: 'Net VAT payable (7,200 less 6,200)' }, blank, 1000],
          ],
          numericCols: [1, 2],
        },
        {
          type: 'journal',
          title: { fa: 'تسویه پایان دوره و پرداخت', en: 'Period-end settlement and payment' },
          entries: [
            {
              date: d('30 سپتامبر', '30 Sep'),
              lines: [
                { account: ac.vatOut, debit: 7200 },
                { account: ac.vatIn, credit: 6200 },
                { account: ac.vatPayable, credit: 1000 },
              ],
              memo: { fa: 'بستن حساب‌های خروجی و ورودی به حساب بدهی به سازمان', en: 'Clear output and input VAT into the liability to the OTA' },
            },
            {
              date: d('28 اکتبر', '28 Oct'),
              lines: [
                { account: ac.vatPayable, debit: 1000 },
                { account: ac.cash, credit: 1000 },
              ],
              memo: { fa: 'پرداخت پیش از مهلت 30 اکتبر', en: 'Paid before the 30 October deadline' },
            },
          ],
        },
        {
          type: 'steps',
          items: [
            { title: { fa: 'گزارش مالیات با دفتر کل', en: 'VAT report to ledger' }, text: { fa: 'جمع گزارش مالیات بر پایه کد (خروجی 7,200، ورودی 6,200) با مانده حساب‌های مالیات در دفتر کل برابر است.', en: 'The VAT report by tax code (output 7,200, input 6,200) equals the VAT account balances in the ledger.' } },
            { title: { fa: 'پایه ضربدر نرخ', en: 'Base times rate' }, text: { fa: '114,000 × 5٪ = 5,700 و 30,000 × 5٪ = 1,500؛ هیچ اختلاف گردکردنی نیست.', en: '114,000 × 5% = 5,700 and 30,000 × 5% = 1,500; no rounding differences.' } },
            { title: { fa: 'درآمد با عرضه‌ها', en: 'Revenue to supplies' }, text: { fa: 'درآمد دفتر کل 300,000 منهای 6,000 تخفیف = 294,000، برابر 114,000 عرضه 5٪ به‌اضافه 180,000 عرضه نرخ صفر.', en: 'Ledger revenue of 300,000 less 6,000 allowances = 294,000, equal to 114,000 standard-rated plus 180,000 zero-rated supplies.' } },
            { title: { fa: 'مدارک', en: 'Evidence' }, text: { fa: 'گواهی JSRS و تأیید استفاده انحصاری رمل برای 180,000؛ اظهارنامه گمرکی برای 2,100؛ صورت‌حساب شرکت انگلیسی با یادداشت سازوکار معکوس؛ اعلامیه بستانکار با ارجاع به صورت‌حساب اصلی.', en: 'JSRS certificate and Raml’s exclusive-use confirmation for the 180,000; customs declaration for the 2,100; UK invoice annotated for reverse charge; credit note referring to the original invoice.' } },
            { title: { fa: 'تسلیم و بایگانی', en: 'File and archive' }, text: { fa: 'اظهارنامه را پیش از 30 اکتبر تسلیم کنید، 1,000 را بپردازید و کاربرگ‌های تطبیق را 10 سال نگه دارید.', en: 'File before 30 October, pay the 1,000 and keep the reconciliation working papers for 10 years.' } },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'اگر مالیات واردات به تعویق افتاده بود', en: 'If the import VAT had been deferred' },
          text: {
            fa: 'با تعویق، وادی در اوت 2,100 به گمرک نمی‌پرداخت. در اظهارنامه 2,100 هم به خروجی اضافه می‌شد (جمع خروجی 9,300) و هم در ورودی می‌ماند (6,200)؛ مالیات قابل پرداخت در 30 اکتبر 3,100 می‌شد. کل پول پرداختی فصل در هر دو حالت 3,100 است (2,100 + 1,000 یا 3,100 یک‌جا)؛ تعویق فقط زمان پرداخت را عقب می‌برد و به نقدینگی کمک می‌کند.',
            en: 'With deferral, Wadi would not have paid 2,100 at customs in August. The return would add 2,100 to output (total output 9,300) while input stays at 6,200, so 3,100 would be payable on 30 October. Total VAT cash for the quarter is 3,100 either way (2,100 + 1,000, or 3,100 at once); deferral only delays the payment and helps cash flow.',
          },
        },
        {
          type: 'h',
          text: { fa: 'اشتباهات رایج', en: 'Common Mistakes' },
        },
        {
          type: 'list',
          items: [
            { fa: 'نرخ صفر دادن به هر فروشی که به یک شرکت نفتی مربوط است، بدون بررسی شرط‌های ماده 93 و مدارک آن؛ فروش پیمانکار جزء به پیمانکار اصلی 5٪ دارد.', en: 'Zero-rating every sale linked to an oil company without checking Regulation 93 and its evidence; a subcontractor’s supply to a contractor carries 5%.' },
            { fa: 'فراموش کردن سازوکار معکوس برای خدمات خارجی، مثل مشاوره، نرم‌افزار ابری و هزینه‌های شرکت مادر خارجی.', en: 'Forgetting the reverse charge on foreign services such as consultancy, cloud software and foreign head-office charges.' },
            { fa: 'حذف حقوق گمرکی از پایه مالیات واردات، یا ثبت مالیات واردات قابل کسر به‌عنوان بهای کالا.', en: 'Leaving customs duty out of the import VAT base, or recording deductible import VAT as part of inventory cost.' },
            { fa: 'کسر مالیات اقلام ممنوع: سرگرمی، خودروی در دسترس استفاده شخصی و کترینگ.', en: 'Deducting blocked VAT on entertainment, cars available for personal use and catering.' },
            { fa: 'ویرایش یا ابطال صورت‌حساب صادرشده به‌جای صدور اعلامیه بستانکار.', en: 'Editing or cancelling an issued invoice instead of issuing a credit note.' },
            { fa: 'ثبت مالیات ورودی هنگام رسید کالا یا بدون صورت‌حساب مالیاتی معتبر.', en: 'Posting input VAT at goods receipt or without a valid tax invoice.' },
            { fa: 'تسلیم اظهارنامه بدون تطبیق گزارش مالیات با دفتر کل، و پرداخت دیرهنگام (1٪ برای هر ماه یا بخشی از آن).', en: 'Filing without reconciling the VAT report to the ledger, and paying late (1% per month or part of a month).' },
          ],
        },
        {
          type: 'exercise',
          title: { fa: 'فصل چهارم یک شرکت خدمات خط لوله', en: 'Q4 for a pipeline services company' },
          difficulty: 'hard',
          problem: {
            fa: 'شرکت فرضی «خدمات خط لوله ساحل» ثبت‌نام‌شده است و در فصل چهارم 2026 معاملات زیر را دارد. (1) کد و مالیات هر ردیف را تعیین کنید. (2) خلاصه اظهارنامه را تهیه و مالیات قابل پرداخت را حساب کنید. (3) ثبت پیش‌دریافت، اعلامیه بستانکار تأمین‌کننده و تسویه پایان دوره را بنویسید. (4) مهلت تسلیم و پرداخت چه روزی است؟',
            en: 'The fictional Sahil Pipeline Services is registered and has the transactions below in Q4 2026. (1) Assign a code and VAT to each line. (2) Prepare the return summary and compute the VAT payable. (3) Record the advance, the supplier credit note and the period-end settlement. (4) When are the return and payment due?',
          },
          given: {
            head: [
              { fa: 'ردیف', en: '#' },
              { fa: 'معامله', en: 'Transaction' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            rows: [
              [{ fa: '1', en: '1' }, { fa: 'نگهداری خط لوله برای بهره‌بردار میان‌دستی دارای مجوز (همه شرط‌ها و مدارک فراهم است)', en: 'Pipeline maintenance for a licensed midstream operator (all conditions and evidence met)' }, 120000],
              [{ fa: '2', en: '2' }, { fa: 'خدمات بازرسی به یک پیمانکار پوشش لوله', en: 'Inspection services to a pipe-coating contractor' }, 40000],
              [{ fa: '3', en: '3' }, { fa: 'فروش دستگاه جوش کارکرده (دارایی سرمایه‌ای) به یک شرکت محلی', en: 'Sale of a used welding machine (capital asset) to a local company' }, 5000],
              [{ fa: '4', en: '4' }, { fa: 'پیش‌دریافت 10 دسامبر از مشتری محلی برای کار ژانویه، با مالیات', en: 'Advance received on 10 December from a local customer for January work, VAT-inclusive' }, 10500],
              [{ fa: '5', en: '5' }, { fa: 'خرید مواد از فروشنده محلی، بدون مالیات (به‌اضافه 5٪)', en: 'Materials from a local supplier, net (plus 5%)' }, 30000],
              [{ fa: '6', en: '6' }, { fa: 'کترینگ خدمه در کمپ، بدون مالیات (به‌اضافه 5٪)', en: 'Crew catering at the camp, net (plus 5%)' }, 8000],
              [{ fa: '7', en: '7' }, { fa: 'اشتراک نرم‌افزار ابری از شرکتی ایرلندی بدون اقامت در عمان', en: 'Cloud software subscription from an Irish company with no residence in Oman' }, 4000],
              [{ fa: '8', en: '8' }, { fa: 'واردات پمپ یدکی: ارزش گمرکی 20,000 و حقوق گمرکی 5٪، مالیات در گمرک پرداخت شد', en: 'Imported spare pumps: customs value 20,000 and 5% duty, VAT paid at customs' }, 20000],
              [{ fa: '9', en: '9' }, { fa: 'اعلامیه بستانکار فروشنده مواد برای کالای برگشتی، بدون مالیات (به‌اضافه 5٪)', en: 'Credit note from the materials supplier for returned goods, net (plus 5%)' }, 2000],
            ],
            numericCols: [2],
          },
          hint: {
            fa: 'فروش دارایی سرمایه‌ای در آزمون ثبت‌نام حساب نمی‌شود اما مشمول مالیات است. مالیات پیش‌دریافت در روز دریافت سررسید می‌شود. اعلامیه بستانکار خرید، مالیات ورودی را کم می‌کند.',
            en: 'A capital asset sale is ignored for the registration test but is still taxable. VAT on an advance is due on receipt. A purchase credit note reduces input VAT.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'کد و مالیات هر ردیف', en: 'Code and VAT per line' },
              head: [
                { fa: 'ردیف', en: '#' },
                { fa: 'کد', en: 'Code' },
                { fa: 'خروجی', en: 'Output' },
                { fa: 'ورودی', en: 'Input' },
              ],
              rows: [
                [{ fa: '1', en: '1' }, { fa: 'Z0-OG', en: 'Z0-OG' }, 0, 0],
                [{ fa: '2', en: '2' }, { fa: 'S5 (مشتری پیمانکار است)', en: 'S5 (customer is a contractor)' }, 2000, 0],
                [{ fa: '3', en: '3' }, { fa: 'S5', en: 'S5' }, 250, 0],
                [{ fa: '4', en: '4' }, { fa: 'S5: 10,500 × 5 ÷ 105', en: 'S5: 10,500 × 5 ÷ 105' }, 500, 0],
                [{ fa: '5', en: '5' }, { fa: 'P5', en: 'P5' }, 0, 1500],
                [{ fa: '6', en: '6' }, { fa: 'PB5 (کترینگ ممنوع است)', en: 'PB5 (catering is blocked)' }, 0, 0],
                [{ fa: '7', en: '7' }, { fa: 'RC5', en: 'RC5' }, 200, 200],
                [{ fa: '8', en: '8' }, { fa: 'IM5: (20,000 + 1,000) × 5٪', en: 'IM5: (20,000 + 1,000) × 5%' }, 0, 1050],
                [{ fa: '9', en: '9' }, { fa: 'کاهش P5 (در جمع کسر می‌شود)', en: 'P5 reduction (deducted in the total)' }, 0, 100],
                [{ fa: 'جمع', en: 'Total' }, { fa: 'ورودی: 1,500 + 200 + 1,050 منهای 100', en: 'Input: 1,500 + 200 + 1,050 less 100' }, 2950, 2650],
              ],
              numericCols: [2, 3],
            },
            {
              type: 'table',
              caption: { fa: 'خلاصه اظهارنامه فصل چهارم 2026', en: 'Q4 2026 return summary' },
              head: [
                { fa: 'سطر', en: 'Line' },
                { fa: 'ارزش', en: 'Value' },
                { fa: 'مالیات', en: 'VAT' },
              ],
              rows: [
                [{ fa: 'عرضه‌های 5٪ (40,000 + 5,000 + 10,000)', en: 'Standard-rated supplies (40,000 + 5,000 + 10,000)' }, 55000, 2750],
                [{ fa: 'عرضه‌های نرخ صفر', en: 'Zero-rated supplies' }, 120000, 0],
                [{ fa: 'خرید با سازوکار معکوس', en: 'Reverse-charge purchases' }, 4000, 200],
                [{ fa: 'جمع مالیات خروجی', en: 'Total output VAT' }, blank, 2950],
                [{ fa: 'کالای وارداتی', en: 'Imported goods' }, 21000, 1050],
                [{ fa: 'جمع مالیات ورودی', en: 'Total input VAT' }, blank, 2650],
                [{ fa: 'مالیات قابل پرداخت', en: 'Net VAT payable' }, blank, 300],
              ],
              numericCols: [1, 2],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: d('10 دسامبر', '10 Dec'),
                  lines: [
                    { account: ac.cash, debit: 10500 },
                    { account: ac.advances, credit: 10000 },
                    { account: ac.vatOut, credit: 500 },
                  ],
                  memo: { fa: 'مالیات پیش‌دریافت در فصل چهارم سررسید می‌شود.', en: 'VAT on the advance is due in Q4.' },
                },
                {
                  date: d('اعلامیه', 'Credit note'),
                  lines: [
                    { account: ac.ap, debit: 2100 },
                    { account: ac.materials, credit: 2000 },
                    { account: ac.vatIn, credit: 100 },
                  ],
                },
                {
                  date: d('31 دسامبر', '31 Dec'),
                  lines: [
                    { account: ac.vatOut, debit: 2950 },
                    { account: ac.vatIn, credit: 2650 },
                    { account: ac.vatPayable, credit: 300 },
                  ],
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'مهلت: فصل در 31 دسامبر 2026 تمام می‌شود، پس اظهارنامه و پرداخت تا 30 ژانویه 2027 (یا اولین روز کاری بعد اگر تعطیل باشد).',
                en: 'Deadline: the quarter ends on 31 December 2026, so the return and payment are due by 30 January 2027 (or the next working day if that is a holiday).',
              },
            },
          ],
          answer: {
            fa: 'خروجی 2,950، ورودی 2,650، مالیات قابل پرداخت 300، مهلت 30 ژانویه 2027.',
            en: 'Output 2,950, input 2,650, VAT payable 300, due 30 January 2027.',
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
            { fa: 'مالیات بر ارزش افزوده عمان از 16 آوریل 2021 با نرخ استاندارد 5٪ اجرا می‌شود (فرمان سلطانی 121/2020 و آیین‌نامه 53/2021).', en: 'Oman VAT has applied since 16 April 2021 at a standard rate of 5% (Royal Decree 121/2020 and Regulations 53/2021).' },
            { fa: 'نرخ صفر حق کسر مالیات ورودی را حفظ می‌کند، معاف نه. نفت، فرآورده‌ها و گاز در بالادست و میان‌دست فقط با شرط‌ها و مدارک ماده 93 نرخ صفر می‌گیرند.', en: 'The zero rate keeps input VAT recovery; exemption does not. Oil, derivatives and gas upstream and midstream are zero-rated only with the Regulation 93 conditions and evidence.' },
            { fa: 'ثبت‌نام اجباری بالای 38,500 و اختیاری بالای 19,250 ریال عمانی است؛ آزمون ماهانه و رو به گذشته و آینده است.', en: 'Registration is mandatory above OMR 38,500 and voluntary above OMR 19,250; the test is monthly, looking back and forward.' },
            { fa: 'صورت‌حساب مالیاتی ظرف 15 روز صادر می‌شود؛ صورت‌حساب صادرشده فقط با اعلامیه بستانکار یا بدهکار اصلاح می‌شود.', en: 'Tax invoices are issued within 15 days; an issued invoice is corrected only by a credit or debit note.' },
            { fa: 'مالیات در زودترین تاریخ عرضه، صدور صورت‌حساب یا دریافت وجه سررسید می‌شود.', en: 'VAT falls due on the earliest of supply, invoice or payment.' },
            { fa: 'خدمات وارداتی با سازوکار معکوس و واردات کالا با پایه «ارزش گمرکی به‌اضافه حقوق گمرکی» مالیات می‌خورند؛ سرگرمی، خودروی شخصی و کترینگ قابل کسر نیستند.', en: 'Imported services are reverse-charged and imported goods are taxed on customs value plus duty; entertainment, personal-use cars and catering are blocked.' },
            { fa: 'اظهارنامه فصلی و پرداخت ظرف 30 روز پس از پایان فصل است؛ تأخیر پرداخت 1٪ در ماه هزینه دارد و اسناد 10 سال نگهداری می‌شوند.', en: 'Quarterly returns and payment are due within 30 days of the quarter-end; late payment costs 1% a month and records are kept for 10 years.' },
            { fa: 'در ERP، کد مالیاتی نرخ، حساب و سطر اظهارنامه را تعیین می‌کند؛ پیش از تسلیم، گزارش مالیات را با دفتر کل و درآمد تطبیق دهید.', en: 'In the ERP the tax code sets the rate, account and return line; before filing, reconcile the VAT report to the ledger and to revenue.' },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            { term: { fa: 'مالیات خروجی', en: 'Output VAT' }, def: { fa: 'مالیاتی که فروشنده ثبت‌نام‌شده روی عرضه‌های مشمول خود حساب می‌کند.', en: 'The VAT a registered seller charges on its taxable supplies.' } },
            { term: { fa: 'مالیات ورودی', en: 'Input VAT' }, def: { fa: 'مالیاتی که روی خرید و واردات پرداخت شده و با شرایطی از مالیات خروجی کسر می‌شود.', en: 'The VAT paid on purchases and imports, deductible from output VAT under conditions.' } },
            { term: { fa: 'عرضه نرخ صفر', en: 'Zero-rated supply' }, def: { fa: 'عرضه مشمول با نرخ 0٪ که حق کسر مالیات ورودی را حفظ می‌کند.', en: 'A taxable supply at 0% that keeps the right to deduct input VAT.' } },
            { term: { fa: 'عرضه معاف', en: 'Exempt supply' }, def: { fa: 'عرضه بدون مالیات که مالیات ورودی مربوط به آن قابل کسر نیست.', en: 'A supply with no VAT whose related input VAT is not deductible.' } },
            { term: { fa: 'خارج از شمول', en: 'Out of scope' }, def: { fa: 'معامله‌ای که اصلاً عرضه مشمول این قانون نیست، مثل رویالتی یا درخواست وجه شرکا.', en: 'A transaction that is not a supply under the law, such as royalties or partner cash calls.' } },
            { term: { fa: 'سازوکار معکوس', en: 'Reverse charge' }, def: { fa: 'روشی که در آن خریدار ثبت‌نام‌شده، مالیات خرید از تأمین‌کننده غیرمقیم را خودش حساب و اظهار می‌کند.', en: 'The method by which a registered buyer self-accounts for VAT on purchases from a non-resident supplier.' } },
            { term: { fa: 'صورت‌حساب مالیاتی', en: 'Tax invoice' }, def: { fa: 'سندی با اطلاعات ماده 144 آیین‌نامه که ظرف 15 روز از عرضه صادر می‌شود.', en: 'A document with the Regulation 144 details, issued within 15 days of the supply.' } },
            { term: { fa: 'صورت‌حساب مالیاتی ساده‌شده', en: 'Simplified tax invoice' }, def: { fa: 'صورت‌حساب بدون اطلاعات خریدار برای عرضه‌های کمتر از 500 ریال عمانی بدون مالیات یا موارد مجاز دیگر.', en: 'An invoice without customer details for supplies under OMR 500 excluding VAT or other allowed cases.' } },
            { term: { fa: 'اعلامیه بستانکار', en: 'Credit note' }, def: { fa: 'سند اصلاحی که مبلغ و مالیات صورت‌حساب قبلی را کاهش می‌دهد و به آن ارجاع دارد.', en: 'An adjustment document that reduces the amount and VAT of an earlier invoice and refers to it.' } },
            { term: { fa: 'زمان عرضه', en: 'Time of supply' }, def: { fa: 'تاریخ سررسید مالیات: زودترین تاریخ عرضه، صدور صورت‌حساب یا دریافت وجه.', en: 'The tax point: the earliest of supply, invoice or payment.' } },
            { term: { fa: 'مالیات ورودی غیرقابل کسر', en: 'Blocked input VAT' }, def: { fa: 'مالیاتی که حتی با صورت‌حساب معتبر کسر نمی‌شود: سرگرمی، خودروی در دسترس استفاده شخصی، کترینگ.', en: 'VAT that cannot be deducted even with a valid invoice: entertainment, cars available for personal use, catering.' } },
            { term: { fa: 'تعویق مالیات واردات', en: 'Import VAT deferral' }, def: { fa: 'انتقال پرداخت مالیات واردات از گمرک به اظهارنامه، با تأیید سازمان.', en: 'Moving import VAT from customs to the VAT return, with OTA approval.' } },
            { term: { fa: 'کد مالیاتی', en: 'Tax code' }, def: { fa: 'کدی در ERP که نرخ، حساب دفتر کل و سطر اظهارنامه هر سطر سند را تعیین می‌کند.', en: 'An ERP code that sets the rate, GL account and return line of each document line.' } },
            { term: { fa: 'اظهارنامه مالیات بر ارزش افزوده', en: 'VAT return' }, def: { fa: 'گزارش دوره‌ای عرضه‌ها، واردات، مالیات خروجی و ورودی که ظرف 30 روز پس از دوره تسلیم می‌شود.', en: 'The periodic report of supplies, imports, output and input VAT, filed within 30 days after the period.' } },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: {
        fa: 'شرکتی مقیم عمان در 12 ماه گذشته این ارقام را داشته است: عرضه 5٪ برابر 30,000، عرضه معاف 6,000، خرید با سازوکار معکوس 5,000 و فروش یک دارایی سرمایه‌ای 4,000. وضعیت ثبت‌نام آن چیست؟',
        en: 'An Oman-resident company had, over the past 12 months: standard-rated supplies of 30,000, exempt supplies of 6,000, reverse-charge purchases of 5,000 and the sale of a capital asset for 4,000. What is its registration position?',
      },
      options: [
        { fa: 'ثبت‌نام اجباری است، چون جمع همه ارقام 45,000 است', en: 'Mandatory, because all the figures total 45,000' },
        { fa: 'ثبت‌نام اجباری است، چون 30,000 + 6,000 + 5,000 = 41,000', en: 'Mandatory, because 30,000 + 6,000 + 5,000 = 41,000' },
        { fa: 'اجباری نیست، چون رقم قابل احتساب 35,000 است؛ اما می‌تواند داوطلبانه ثبت‌نام کند', en: 'Not mandatory, since the countable figure is 35,000, but it may register voluntarily' },
        { fa: 'نه اجباری است نه اختیاری', en: 'Neither mandatory nor voluntary' },
      ],
      answer: 2,
      explain: {
        fa: 'در آزمون، عرضه مشمول (30,000) و خرید با سازوکار معکوس (5,000) حساب می‌شوند؛ عرضه معاف و فروش دارایی سرمایه‌ای نه. 35,000 از 38,500 کمتر و از 19,250 بیشتر است، پس ثبت‌نام اختیاری ممکن است. گزینه 41,000 اشتباه است چون عرضه معاف را حساب کرده است.',
        en: 'The test counts taxable supplies (30,000) and reverse-charge purchases (5,000), not exempt supplies or capital asset sales. 35,000 is below 38,500 but above 19,250, so voluntary registration is possible. The 41,000 option wrongly includes exempt supplies.',
      },
    },
    {
      q: {
        fa: 'تفاوت اصلی عرضه نرخ صفر با عرضه معاف چیست؟',
        en: 'What is the key difference between a zero-rated and an exempt supply?',
      },
      options: [
        { fa: 'در نرخ صفر مالیات ورودی مربوط قابل کسر است، در معاف نه', en: 'With zero-rating the related input VAT is deductible; with exemption it is not' },
        { fa: 'در معاف مشتری مالیات را خودش حساب می‌کند', en: 'With exemption the customer self-accounts for VAT' },
        { fa: 'هیچ تفاوتی ندارند؛ هر دو بدون مالیات‌اند', en: 'There is no difference; both carry no VAT' },
        { fa: 'عرضه نرخ صفر در اظهارنامه گزارش نمی‌شود', en: 'Zero-rated supplies are not reported in the return' },
      ],
      answer: 0,
      explain: {
        fa: 'هر دو روی فروش مالیاتی ندارند، اما نرخ صفر یک عرضه مشمول است و حق کسر مالیات ورودی را حفظ می‌کند؛ عرضه معاف این حق را از بین می‌برد. «هیچ تفاوتی ندارند» وسوسه‌انگیز است اما همین تفاوت در عمل بسیار پرهزینه است. عرضه نرخ صفر هم در اظهارنامه گزارش می‌شود.',
        en: 'Neither carries VAT on the sale, but a zero-rated supply is taxable and keeps input VAT recovery, while exemption removes it. “No difference” is tempting, but this difference is costly in practice. Zero-rated supplies are also reported in the return.',
      },
    },
    {
      q: {
        fa: 'ارزش گمرکی کالایی وارداتی 60,000 و حقوق گمرکی 5٪ است. مالیات بر ارزش افزوده واردات چقدر است؟',
        en: 'An import has a customs value of 60,000 and customs duty of 5%. What is the import VAT?',
      },
      options: [
        { fa: '3,000', en: '3,000' },
        { fa: '3,150', en: '3,150' },
        { fa: '3,300', en: '3,300' },
        { fa: '2,850', en: '2,850' },
      ],
      answer: 1,
      explain: {
        fa: 'پایه مالیات واردات ارزش گمرکی به‌اضافه حقوق گمرکی است: 60,000 + 3,000 = 63,000؛ مالیات 63,000 × 5٪ = 3,150. پاسخ 3,000 حقوق گمرکی را از پایه جا انداخته است.',
        en: 'The import VAT base is customs value plus duty: 60,000 + 3,000 = 63,000; VAT = 63,000 × 5% = 3,150. The 3,000 answer leaves the duty out of the base.',
      },
    },
    {
      q: {
        fa: 'یک پیمانکار جزء خدمات بازرسی را به پیمانکار اصلی می‌فروشد که برای یک بهره‌بردار بالادستی دارای مجوز کار می‌کند. برخورد مالیاتی چیست؟',
        en: 'A subcontractor sells inspection services to a contractor who works for a licensed upstream operator. What is the VAT treatment?',
      },
      options: [
        { fa: 'نرخ صفر، چون مصرف نهایی در بالادست است', en: 'Zero-rated, because the end use is upstream' },
        { fa: 'معاف', en: 'Exempt' },
        { fa: 'خارج از شمول', en: 'Out of scope' },
        { fa: '5٪، چون خریدار بهره‌بردار دارای مجوز نیست', en: '5%, because the customer is not a licensed operator' },
      ],
      answer: 3,
      explain: {
        fa: 'طبق ماده 93 و برداشت سازمان، فروشنده و خریدار هر دو باید دارای مجوز فعالیت بالادستی باشند و زنجیره نرخ صفر از اولین فروش پیمانکار به بهره‌بردار جلوتر نمی‌رود. «مصرف نهایی در بالادست» به‌تنهایی کافی نیست.',
        en: 'Under Regulation 93 as the OTA applies it, both parties must be licensed for upstream activity and the zero-rated chain stops at the first contractor-to-operator supply. Upstream end use alone is not enough.',
      },
    },
    {
      q: {
        fa: 'در یک فصل: فروش 5٪ برابر 240,000، خدمات خارجی با سازوکار معکوس 20,000، و مالیات خریدهای داخلی 7,500 که 400 از آن برای سرگرمی است. مالیات قابل پرداخت چقدر است؟',
        en: 'In a quarter: standard-rated sales of 240,000, reverse-charge foreign services of 20,000, and VAT on local purchases of 7,500, of which 400 relates to entertainment. What is the VAT payable?',
      },
      options: [
        { fa: '5,900', en: '5,900' },
        { fa: '4,500', en: '4,500' },
        { fa: '4,900', en: '4,900' },
        { fa: '3,900', en: '3,900' },
      ],
      answer: 2,
      explain: {
        fa: 'خروجی = 240,000 × 5٪ = 12,000 به‌اضافه 1,000 سازوکار معکوس = 13,000. ورودی = (7,500 منهای 400 سرگرمی) + 1,000 سازوکار معکوس = 8,100. قابل پرداخت = 13,000 − 8,100 = 4,900. پاسخ 4,500 مالیات سرگرمی را هم کسر کرده و پاسخ 5,900 ورودی سازوکار معکوس را جا انداخته است.',
        en: 'Output = 240,000 × 5% = 12,000 plus 1,000 reverse charge = 13,000. Input = (7,500 less 400 entertainment) + 1,000 reverse charge = 8,100. Payable = 13,000 − 8,100 = 4,900. The 4,500 answer also deducts the blocked entertainment VAT, and 5,900 forgets the reverse-charge input.',
      },
    },
    {
      q: {
        fa: 'اظهارنامه فصل دوم (آوریل تا ژوئن) تا چه روزی باید تسلیم و پرداخت شود؟',
        en: 'By when must the return for the second quarter (April to June) be filed and paid?',
      },
      options: [
        { fa: '30 ژوئیه', en: '30 July' },
        { fa: '30 ژوئن', en: '30 June' },
        { fa: '15 ژوئیه', en: '15 July' },
        { fa: '31 اوت', en: '31 August' },
      ],
      answer: 0,
      explain: {
        fa: 'اظهارنامه و پرداخت هر دو ظرف 30 روز پس از پایان دوره‌اند (مواد 72 و 82)؛ 30 ژوئن به‌اضافه 30 روز می‌شود 30 ژوئیه. 30 ژوئن خودِ پایان دوره است و 15 ژوئیه با مهلت 15 روزه صدور صورت‌حساب اشتباه گرفته شده است.',
        en: 'Both the return and the payment are due within 30 days after the period ends (Articles 72 and 82): 30 June plus 30 days is 30 July. 30 June is the period end itself, and 15 July confuses this with the 15-day invoicing deadline.',
      },
    },
    {
      q: {
        fa: 'مالیات 6,000 باید تا 30 آوریل پرداخت می‌شد اما 10 ژوئن پرداخت شد. مالیات اضافی تأخیر چقدر است؟',
        en: 'VAT of 6,000 was due by 30 April but paid on 10 June. How much late-payment additional tax applies?',
      },
      options: [
        { fa: '60', en: '60' },
        { fa: '120', en: '120' },
        { fa: '180', en: '180' },
        { fa: '600', en: '600' },
      ],
      answer: 1,
      explain: {
        fa: 'تأخیر یک ماه و 11 روز است و «بخشی از ماه» هم یک ماه کامل حساب می‌شود؛ پس 2 ماه: 6,000 × 1٪ × 2 = 120. پاسخ 60 فقط ماه کامل را شمرده است.',
        en: 'The delay is one month and 11 days, and a part of a month counts as a full month, so 2 months apply: 6,000 × 1% × 2 = 120. The 60 answer counts only the complete month.',
      },
    },
    {
      q: {
        fa: 'مشتری‌ای در 20 ژوئن پیش‌پرداخت خدمتی را می‌پردازد که در ژوئیه انجام می‌شود. مالیات این مبلغ چه زمانی سررسید می‌شود؟',
        en: 'A customer pays on 20 June in advance for a service performed in July. When is the VAT on that amount due?',
      },
      options: [
        { fa: 'وقتی خدمت در ژوئیه کامل شود', en: 'When the service is completed in July' },
        { fa: 'در پایان قرارداد', en: 'At the end of the contract' },
        { fa: 'وقتی صورت‌حساب نهایی صادر شود', en: 'When the final invoice is issued' },
        { fa: 'در 20 ژوئن، به اندازه مبلغ دریافتی', en: 'On 20 June, to the extent of the amount received' },
      ],
      answer: 3,
      explain: {
        fa: 'مالیات در زودترین تاریخ عرضه، صدور صورت‌حساب یا دریافت وجه سررسید می‌شود (ماده 26). دریافت در 20 ژوئن زودتر از همه است، پس مالیات مبلغ دریافتی در اظهارنامه فصل دوم می‌آید. «تکمیل خدمت» وسوسه‌انگیز است، اما فقط وقتی ملاک است که وجهی زودتر دریافت نشده باشد.',
        en: 'VAT is due on the earliest of supply, invoice or payment (Article 26). The 20 June receipt comes first, so VAT on the amount received goes in the Q2 return. “Completion of the service” is tempting but only applies when nothing was received earlier.',
      },
    },
    {
      q: {
        fa: 'وادی خدمات مشاوره‌ای را از شرکتی در لندن می‌خرد که در عمان اقامت ندارد. کدام جمله درست است؟',
        en: 'Wadi buys consultancy services from a London firm with no residence in Oman. Which statement is correct?',
      },
      options: [
        { fa: 'وادی 5٪ را به‌عنوان خروجی حساب می‌کند و اگر خدمت برای عرضه‌های مشمول باشد، همان را در همان اظهارنامه به‌عنوان ورودی کسر می‌کند', en: 'Wadi accounts for 5% as output VAT and, if the service is used for taxable supplies, deducts the same amount as input VAT in the same return' },
        { fa: 'شرکت لندنی باید 5٪ مالیات عمان روی صورت‌حساب بگیرد', en: 'The London firm must charge 5% Omani VAT on its invoice' },
        { fa: 'هیچ مالیاتی وجود ندارد، چون تأمین‌کننده خارجی است', en: 'There is no VAT because the supplier is foreign' },
        { fa: 'وادی 5٪ را می‌پردازد ولی هرگز نمی‌تواند آن را کسر کند', en: 'Wadi pays 5% but can never deduct it' },
      ],
      answer: 0,
      explain: {
        fa: 'این سازوکار معکوس است: خریدار ثبت‌نام‌شده مالیات را خودش حساب و اظهار می‌کند و اگر شرایط کسر فراهم باشد، اثر نقدی صفر است. «هیچ مالیاتی وجود ندارد» اشتباه رایجی است که در رسیدگی به جریمه می‌انجامد، حتی وقتی اثر خالص صفر است.',
        en: 'This is the reverse charge: the registered buyer self-accounts for the VAT and, if the deduction conditions are met, the cash effect is nil. “No VAT” is a common mistake that leads to penalties at audit even though the net effect is zero.',
      },
    },
    {
      q: {
        fa: 'صورت‌حساب‌ها و سوابق مالیات بر ارزش افزوده یک شرکت خدماتی (غیرملکی) چه مدت باید نگهداری شوند؟',
        en: 'How long must a service company (not real estate) keep its VAT invoices and records?',
      },
      options: [
        { fa: '5 سال از تاریخ صورت‌حساب', en: '5 years from the invoice date' },
        { fa: '3 سال پس از تسلیم اظهارنامه', en: '3 years after filing the return' },
        { fa: '10 سال پس از پایان سال مالیاتی‌ای که اظهارنامه در آن تسلیم شده', en: '10 years after the end of the tax year in which the return was filed' },
        { fa: '15 سال برای همه شرکت‌ها', en: '15 years for every business' },
      ],
      answer: 2,
      explain: {
        fa: 'ماده 70 نگهداری را 10 سال پس از پایان سال مالیاتی‌ای که اظهارنامه در آن تسلیم شده تعیین می‌کند؛ 15 سال فقط برای اسناد مربوط به املاک است. 5 سال مهلت عادی تشخیص سازمان است و 3 سال مهلت اصلاح اظهارنامه، نه مهلت نگهداری.',
        en: 'Article 70 sets 10 years after the end of the tax year in which the return was filed; 15 years applies only to real estate records. 5 years is the OTA’s normal assessment window and 3 years the return-correction window, not the retention period.',
      },
    },
  ],
}
