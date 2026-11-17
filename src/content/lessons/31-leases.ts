import type { Lesson } from '../types'

/*
 * Leases under IFRS 16 for a lessee, for an upstream oil and gas company (Masar Petroleum, MP01).
 * Checked on 16 November 2026: IFRS 16 effective from 1 January 2019; IFRS Interpretations Committee agenda decision
 * (March 2019) on liabilities in relation to a joint operator's interest in a joint operation (lease signed by the
 * lead operator as sole signatory). Discount rates and contract figures are illustrative.
 */

const ac = {
  bank: { fa: '1110 موجودی نقد (بانک)', en: '1110 Cash at bank' },
  auc: { fa: '1510 دارایی‌های در جریان تکمیل (WBS چاه AR-09)', en: '1510 Assets under construction (WBS of well AR-09)' },
  rou: { fa: '1550 دارایی حق استفاده', en: '1550 Right-of-use assets' },
  rouAccDep: { fa: '1591 استهلاک انباشته دارایی حق استفاده', en: '1591 Accumulated depreciation: right-of-use assets' },
  ap: { fa: '2110 حساب‌های پرداختنی', en: '2110 Accounts payable' },
  grir: { fa: '2120 حساب واسط رسید کالا و فاکتور (GR/IR)', en: '2120 GR/IR clearing account' },
  leaseLiab: { fa: '2420 بدهی اجاره', en: '2420 Lease liabilities' },
  shortTerm: { fa: '5170 هزینه اجاره کوتاه‌مدت و کم‌ارزش', en: '5170 Short-term and low-value lease expense' },
  rouDep: { fa: '5230 هزینه استهلاک دارایی حق استفاده', en: '5230 Depreciation of right-of-use assets' },
  interest: { fa: '7130 هزینه مالی: بهره بدهی اجاره', en: '7130 Finance cost: interest on lease liabilities' },
}

const t = (fa: string, en: string) => ({ fa, en })
const yr = (n: number) => ({ fa: `سال ${n}`, en: `Year ${n}` })
/** Empty table cell. */
const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'leases',
  number: 24,
  currency: 'usd',
  level: 'advanced',
  minutes: 35,
  icon: 'Building2',
  tone: 'liability',
  title: { fa: 'اجاره‌ها از دید مستأجر (IFRS 16)', en: 'Leases for the Lessee (IFRS 16)' },
  summary: {
    fa: 'بیاموزید یک شرکت نفت و گاز قراردادهای اجاره را طبق IFRS 16 چگونه شناسایی و ثبت می‌کند: تشخیص اجاره در قرارداد دکل حفاری، خودرو، دفتر و انبار؛ معافیت‌های کوتاه‌مدت و کم‌ارزش؛ اندازه‌گیری بدهی اجاره و دارایی حق استفاده؛ جدول بازپرداخت با بهره و استهلاک؛ تغییر قرارداد، نحوه نمایش، اجاره‌هایی که اپراتور مشارکت امضا می‌کند و مدیریت قراردادهای اجاره در ERP.',
    en: 'Learn how an oil and gas company identifies and records leases under IFRS 16: spotting the lease in rig, vehicle, office and warehouse contracts; the short-term and low-value exemptions; measuring the lease liability and right-of-use asset; the repayment schedule with interest and depreciation; modifications, presentation, leases signed by a joint-venture operator, and lease contracts in the ERP.',
  },
  objectives: [
    {
      fa: 'با سه آزمون IFRS 16 تشخیص دهید یک قرارداد (مثلاً قرارداد دکل حفاری) اجاره دارد یا نه و جزء اجاره را از خدمات جدا کنید',
      en: 'Use the three IFRS 16 tests to decide whether a contract (such as a rig contract) contains a lease, and separate the lease from the services',
    },
    {
      fa: 'معافیت‌های اجاره کوتاه‌مدت و دارایی کم‌ارزش را درست به کار ببرید',
      en: 'Apply the short-term and low-value exemptions correctly',
    },
    {
      fa: 'بدهی اجاره را با ارزش فعلی پرداخت‌ها و دارایی حق استفاده را در روز شروع اجاره اندازه‌گیری و ثبت کنید',
      en: 'Measure and record the lease liability at the present value of payments and the right-of-use asset at commencement',
    },
    {
      fa: 'جدول بازپرداخت بدهی اجاره، بهره و استهلاک را بسازید و اثر آن را در صورت‌های مالی نشان دهید',
      en: 'Build the lease liability schedule with interest and depreciation and show its effect on the financial statements',
    },
    {
      fa: 'داده‌های پایه، گردش کار و ثبت‌های خودکار قرارداد اجاره در ERP و پیوند آن با بازیافت هزینه را شرح دهید',
      en: 'Describe the master data, workflow and automatic postings of a lease contract in the ERP and its link to cost recovery',
    },
  ],
  sections: [
    /* ------------------------------------------------------------------ */
    {
      id: 'why-leases',
      title: { fa: 'چرا اجاره‌ها مهم‌اند؟', en: 'Why Leases Matter' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'شرکت مسار پترولیوم (MP01) برای میدان آریا تقریباً هیچ دکل حفاری، اتوبوس یا ساختمانی نخریده است؛ بیشترشان را اجاره کرده است. دکل حفاری R-27 برای 18 ماه، محوطه نگهداری لوله کنار میدان برای 4 سال، 12 اتوبوس کارکنان، یک طبقه دفتر مرکزی، 40 لپ‌تاپ و یک جرثقیل برای 3 ماه. تا پیش از سال 2019 بیشتر این قراردادها فقط «هزینه اجاره» بودند و در ترازنامه هیچ اثری نداشتند. از 1 ژانویه 2019، استاندارد **IFRS 16** مستأجر را موظف کرده تقریباً همه اجاره‌ها را در ترازنامه بیاورد: یک **دارایی حق استفاده** و یک **بدهی اجاره**.',
            en: 'Masar Petroleum (MP01) has bought almost none of the rigs, buses or buildings it uses in the Arya field; it leases most of them. Rig R-27 for 18 months, a pipe yard next to the field for 4 years, 12 crew buses, a floor of the head office, 40 laptops and a crane for 3 months. Before 2019 most of these contracts were just “rent expense” and left no trace on the balance sheet. Since 1 January 2019, **IFRS 16** has required the lessee to bring almost every lease onto the balance sheet: a **right-of-use asset** and a **lease liability**.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'قراردادهای مسار و پاسخی که در این درس به آن می‌رسیم', en: 'Masar’s contracts and the answer this lesson reaches' },
          head: [
            { fa: 'قرارداد', en: 'Contract' },
            { fa: 'مدت', en: 'Term' },
            { fa: 'نتیجه طبق IFRS 16', en: 'Outcome under IFRS 16' },
          ],
          rows: [
            [t('دکل حفاری R-27 با خدمه پیمانکار', 'Rig R-27 with the contractor’s crew'), t('18 ماه', '18 months'), t('اجاره دکل به‌علاوه خدمات حفاری؛ جزء اجاره در ترازنامه', 'Lease of the rig plus drilling services; the lease part on the balance sheet')],
            [t('محوطه و انبار نگهداری لوله', 'Pipe yard and warehouse'), t('4 سال', '4 years'), t('اجاره؛ دارایی حق استفاده و بدهی اجاره', 'Lease; right-of-use asset and lease liability')],
            [t('12 اتوبوس کارکنان با پلاک مشخص', '12 crew buses with specified plates'), t('3 سال', '3 years'), t('اجاره؛ در ترازنامه', 'Lease; on the balance sheet')],
            [t('یک طبقه دفتر مرکزی', 'One floor of the head office'), t('5 سال', '5 years'), t('اجاره؛ در ترازنامه', 'Lease; on the balance sheet')],
            [t('40 لپ‌تاپ', '40 laptops'), t('2 سال', '2 years'), t('معافیت دارایی کم‌ارزش؛ هزینه دوره', 'Low-value exemption; expensed')],
            [t('جرثقیل برای نصب کمپرسور', 'Crane to install a compressor'), t('3 ماه', '3 months'), t('معافیت اجاره کوتاه‌مدت؛ هزینه دوره', 'Short-term exemption; expensed')],
          ],
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'پیش از IFRS 16 (اجاره عملیاتی طبق IAS 17)', en: 'Before IFRS 16 (operating lease under IAS 17)' },
            items: [
              { fa: 'فقط هزینه اجاره، به‌طور یکنواخت', en: 'Only rent expense, on a straight-line basis' },
              { fa: 'تعهدات چندساله در ترازنامه دیده نمی‌شد', en: 'Multi-year commitments were invisible on the balance sheet' },
              { fa: 'مقایسه شرکتی که دکل را خریده با شرکتی که اجاره کرده سخت بود', en: 'Comparing a company that buys rigs with one that leases them was hard' },
            ],
          },
          right: {
            title: { fa: 'از 2019 (مستأجر طبق IFRS 16)', en: 'From 2019 (lessee under IFRS 16)' },
            items: [
              { fa: 'دارایی حق استفاده و بدهی اجاره در ترازنامه', en: 'A right-of-use asset and a lease liability on the balance sheet' },
              { fa: 'به جای هزینه اجاره: هزینه استهلاک و هزینه بهره', en: 'Instead of rent: depreciation and interest expense' },
              { fa: 'فقط اجاره‌های کوتاه‌مدت و کم‌ارزش می‌توانند بیرون بمانند', en: 'Only short-term and low-value leases may stay off the balance sheet' },
            ],
          },
        },
        {
          type: 'callout',
          tone: 'info',
          text: {
            fa: 'این درس درباره **مستأجر** (اجاره‌کننده) است. اجاره‌دهنده هنوز اجاره‌ها را به تأمین مالی و عملیاتی تقسیم می‌کند که موضوع این درس نیست. نرخ‌های تنزیل و مبالغ قراردادها فرضی و آموزشی‌اند.',
            en: 'This lesson is about the **lessee**. A lessor still classifies leases as finance or operating, which is not covered here. Discount rates and contract amounts are illustrative.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'identify',
      title: { fa: 'آیا این قرارداد اجاره است؟', en: 'Is This Contract a Lease?' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'طبق IFRS 16، قراردادی **اجاره است یا اجاره دارد** که **حق کنترل استفاده از یک دارایی مشخص** را برای یک دوره زمانی در برابر مابه‌ازا منتقل کند. نام قرارداد مهم نیست؛ قراردادی که اسمش «قرارداد خدمات حفاری» است ممکن است یک اجاره در دل خودش داشته باشد. سه پرسش زیر را به ترتیب بپرسید:',
            en: 'Under IFRS 16 a contract **is, or contains, a lease** if it conveys **the right to control the use of an identified asset** for a period of time in exchange for consideration. The contract’s title does not matter; a contract called a “drilling services agreement” may well contain a lease. Ask the three questions below in order:',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: '1. دارایی مشخص است؟', en: '1. Is there an identified asset?' },
              text: {
                fa: 'دارایی در قرارداد نام برده شده یا عملاً معین است (مثلاً دکل R-27 یا اتوبوس با پلاک مشخص) و تأمین‌کننده **حق جایگزینی اساسی** ندارد؛ یعنی نمی‌تواند و برایش صرفه ندارد که هر وقت خواست دارایی دیگری بگذارد. بخشی از ظرفیت یک خط لوله فقط وقتی دارایی مشخص است که از نظر فیزیکی جدا باشد یا تقریباً تمام ظرفیت را شامل شود.',
                en: 'The asset is named in the contract or implicitly specified (such as rig R-27 or a bus with a given plate), and the supplier has no **substantive substitution right**: it cannot, or would not benefit from, swapping in another asset whenever it wishes. A share of a pipeline’s capacity is an identified asset only if it is physically distinct or is substantially all of the capacity.',
              },
            },
            {
              title: { fa: '2. تقریباً همه منافع اقتصادی استفاده مال مشتری است؟', en: '2. Does the customer get substantially all the economic benefits from use?' },
              text: {
                fa: 'در طول دوره، مشتری تقریباً همه منافع استفاده از دارایی را می‌برد؛ مثلاً دکل فقط چاه‌های مسار را حفاری می‌کند.',
                en: 'Throughout the period, the customer obtains substantially all the benefits of using the asset; for example, the rig drills only Masar’s wells.',
              },
            },
            {
              title: { fa: '3. مشتری استفاده را هدایت می‌کند؟', en: '3. Does the customer direct the use?' },
              text: {
                fa: 'مشتری تصمیم می‌گیرد دارایی **چگونه و برای چه هدفی** استفاده شود: کدام چاه، کجا و چه زمانی. اینکه خدمه پیمانکار دکل را می‌گردانند و نگهداری می‌کنند، به‌تنهایی این حق را از مشتری نمی‌گیرد.',
                en: 'The customer decides **how and for what purpose** the asset is used: which well, where and when. The fact that the contractor’s crew operates and maintains the rig does not, by itself, take that right away from the customer.',
              },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'نمونه‌های نفت و گاز', en: 'Oil and gas examples' },
          head: [
            { fa: 'قرارداد', en: 'Contract' },
            { fa: 'نتیجه', en: 'Outcome' },
            { fa: 'دلیل', en: 'Why' },
          ],
          rows: [
            [t('دکل R-27 با نام در قرارداد؛ مسار چاه، محل و زمان حفاری را تعیین می‌کند', 'Rig R-27 named in the contract; Masar chooses the wells, location and timing'), t('اجاره به‌علاوه خدمات', 'Lease plus services'), t('دارایی مشخص، منافع و هدایت استفاده با مسار', 'Identified asset; benefits and direction of use with Masar')],
            [t('12 اتوبوس با پلاک مشخص فقط برای مسار', '12 buses with given plates, for Masar only'), t('اجاره', 'Lease'), t('هر سه آزمون برقرار است', 'All three tests are met')],
            [t('طبقه دفتر مرکزی و محوطه نگهداری لوله', 'Head-office floor and pipe yard'), t('اجاره', 'Lease'), t('فضای مشخص و تحت کنترل مسار', 'Specified space controlled by Masar')],
            [t('حمل بار: تأمین‌کننده هر کامیونی از ناوگانش را می‌فرستد و عملاً جابه‌جا می‌کند', 'Haulage: the supplier sends any truck from its fleet and swaps them in practice'), t('خدمت، نه اجاره', 'Service, not a lease'), t('حق جایگزینی اساسی؛ دارایی مشخص نیست', 'Substantive substitution right; no identified asset')],
            [t('20٪ ظرفیت یک خط لوله مشترک، بدون بخش فیزیکی جدا', '20% of a shared pipeline’s capacity, not physically distinct'), t('خدمت، نه اجاره', 'Service, not a lease'), t('بخشی از ظرفیت، نه دارایی مشخص', 'A capacity portion, not an identified asset')],
            [t('حق اکتشاف و تولید نفت در یک بلوک (قرارداد نفتی)', 'The right to explore for and produce oil in a block (petroleum contract)'), t('خارج از دامنه IFRS 16', 'Outside IFRS 16'), t('اجاره برای اکتشاف یا استفاده از نفت و گاز از دامنه استاندارد خارج است', 'Leases to explore for or use oil and gas are excluded from the standard')],
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'در عمل: چرا قرارداد دکل معمولاً اجاره به‌علاوه خدمات است', en: 'In practice: why a rig contract is usually a lease plus services' },
          text: {
            fa: 'پیمانکار حفاری فقط دکل را نمی‌دهد؛ خدمه، نگهداری، تأمین غذا و گاهی خدمات گل حفاری را هم می‌دهد. اگر دکل در قرارداد مشخص باشد و مسار تصمیم بگیرد کجا و کی حفاری شود، **جزء اجاره** (حق استفاده از دکل) و **اجزای غیراجاره‌ای** (خدمات) دو چیز جدا هستند. فقط جزء اجاره به بدهی اجاره می‌رود؛ خدمات مثل هر خرید خدمت با برگه ثبت خدمات (SES) ثبت می‌شوند. بسیاری از شرکت‌های نفت و گاز پس از اجرای IFRS 16 به همین نتیجه رسیدند، اما نتیجه به متن هر قرارداد بستگی دارد.',
            en: 'A drilling contractor provides more than the rig: crew, maintenance, catering and sometimes mud services. If the rig is specified and Masar decides where and when to drill, the **lease component** (the right to use the rig) and the **non-lease components** (the services) are separate. Only the lease component goes into the lease liability; the services are recorded like any purchased service, through a service entry sheet (SES). Many oil and gas companies reached this conclusion when they adopted IFRS 16, but the outcome depends on each contract’s wording.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'سهم جزء اجاره = مابه‌ازای کل × (قیمت مستقل اجاره ÷ جمع قیمت‌های مستقل همه اجزا)',
            en: 'Lease component = Total consideration × (Stand-alone price of the lease ÷ Sum of stand-alone prices of all components)',
          },
          note: {
            fa: 'مستأجر می‌تواند برای یک گروه دارایی (مثلاً دکل‌ها) از راهکار عملی «جدا نکردن» استفاده کند و کل مبلغ را اجاره بداند؛ اما بدهی اجاره بزرگ‌تر می‌شود، پس این انتخاب باید آگاهانه باشد.',
            en: 'A lessee may elect, by class of asset (for example rigs), the practical expedient of not separating and treat the whole amount as lease; but the lease liability gets bigger, so the choice should be deliberate.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' },
          text: {
            fa: 'فرض اینکه «قرارداد خدمات» هرگز اجاره ندارد؛ جا انداختن اجاره‌های پنهان، مثل واحد تقویت فشار یا مخزن ذخیره‌ای که فقط به مسار اختصاص دارد؛ و پذیرفتن هر بند جایگزینی در قرارداد بدون بررسی اینکه آیا در عمل اساسی است یا نه.',
            en: 'Assuming a “services contract” never contains a lease; missing embedded leases, such as a compression unit or storage tank dedicated to Masar; and accepting any substitution clause without checking whether it is substantive in practice.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'exemptions',
      title: { fa: 'معافیت‌های کوتاه‌مدت و کم‌ارزش', en: 'Short-Term and Low-Value Exemptions' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'IFRS 16 دو معافیت اختیاری دارد. اگر مستأجر آن‌ها را انتخاب کند، دارایی و بدهی شناسایی نمی‌شود و پرداخت‌ها معمولاً به‌طور یکنواخت در طول مدت اجاره هزینه می‌شوند. هزینه این اجاره‌ها باید در یادداشت‌ها افشا شود.',
            en: 'IFRS 16 offers two optional exemptions. If the lessee elects them, no asset or liability is recognised and the payments are usually expensed on a straight-line basis over the lease term. The expense for these leases must be disclosed in the notes.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'اجاره کوتاه‌مدت', en: 'Short-term lease' },
            items: [
              { fa: 'مدت اجاره در روز شروع **12 ماه یا کمتر**', en: 'Lease term of **12 months or less** at commencement' },
              { fa: 'بدون اختیار خرید', en: 'No purchase option' },
              { fa: 'مدت اجاره شامل دوره‌های تمدیدی است که استفاده از آن‌ها **به‌طور معقول قطعی** است', en: 'The term includes extension periods that are **reasonably certain** to be used' },
              { fa: 'انتخاب برای هر **گروه دارایی** (مثلاً همه جرثقیل‌ها)', en: 'Elected by **class of asset** (for example all cranes)' },
            ],
          },
          right: {
            title: { fa: 'دارایی کم‌ارزش', en: 'Low-value asset' },
            items: [
              { fa: 'ارزش دارایی **وقتی نو است** کم باشد، مستقل از اندازه شرکت', en: 'The asset’s value **when new** is low, regardless of the company’s size' },
              { fa: 'هیئت استانداردها در مبانی نتیجه‌گیری به دارایی‌هایی در حدود 5,000 دلار یا کمتر اشاره کرده است', en: 'The Board referred in its basis for conclusions to assets of around USD 5,000 or less' },
              { fa: 'مثال: لپ‌تاپ، تلفن، مبلمان کوچک اداری؛ خودرو کم‌ارزش نیست', en: 'Examples: laptops, phones, small office furniture; a car is not low-value' },
              { fa: 'انتخاب **برای هر قرارداد** جداگانه', en: 'Elected **lease by lease**' },
            ],
          },
        },
        {
          type: 'table',
          caption: { fa: 'کدام اجاره‌های مسار معاف‌اند؟', en: 'Which of Masar’s leases are exempt?' },
          head: [
            { fa: 'قرارداد', en: 'Contract' },
            { fa: 'معاف؟', en: 'Exempt?' },
          ],
          rows: [
            [t('جرثقیل 3 ماهه برای نصب کمپرسور K-102، بدون تمدید', '3-month crane to install compressor K-102, no extension'), t('بله، کوتاه‌مدت', 'Yes, short-term')],
            [t('دکل تعمیر چاه 10 ماهه، بدون اختیار تمدید یا خرید', '10-month workover rig, no extension or purchase option'), t('بله، کوتاه‌مدت', 'Yes, short-term')],
            [t('دکل 9 ماهه با اختیار تمدید 12 ماهه که مسار به‌طور معقول مطمئن است از آن استفاده می‌کند', '9-month rig with a 12-month extension Masar is reasonably certain to use'), t('خیر؛ مدت اجاره 21 ماه است', 'No; the lease term is 21 months')],
            [t('40 لپ‌تاپ برای دفتر میدان', '40 laptops for the field office'), t('بله، کم‌ارزش (هر لپ‌تاپ جداگانه سنجیده می‌شود)', 'Yes, low-value (each laptop is judged on its own)')],
            [t('12 اتوبوس کارکنان', '12 crew buses'), t('خیر؛ اتوبوس کم‌ارزش نیست', 'No; a bus is not low-value')],
          ],
        },
        {
          type: 'journal',
          title: { fa: 'ثبت ماهانه اجاره جرثقیل (معافیت کوتاه‌مدت)', en: 'Monthly entry for the crane hire (short-term exemption)' },
          entries: [
            {
              date: t('پایان هر ماه', 'Each month-end'),
              lines: [
                { account: ac.shortTerm, debit: 20000 },
                { account: ac.ap, credit: 20000 },
              ],
              memo: t('اجاره جرثقیل روی مرکز هزینه CC-ARY-CMP؛ در ترازنامه دارایی و بدهی اجاره‌ای شناسایی نمی‌شود', 'Crane hire on cost centre CC-ARY-CMP; no lease asset or liability on the balance sheet'),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' },
          text: {
            fa: 'سنجیدن «12 ماه» از امروز به جای روز شروع اجاره؛ نادیده گرفتن اختیار تمدیدی که قطعاً استفاده می‌شود؛ سنجیدن «کم‌ارزش» با مبلغ اجاره ماهانه به جای ارزش دارایی نو؛ و یکی گرفتن «کم‌ارزش» با «غیرمهم». دکلی که هر سه ماه یک بار با قرارداد تازه تمدید می‌شود هم ممکن است در واقع یک اجاره بلندمدت باشد.',
            en: 'Measuring “12 months” from today instead of from commencement; ignoring an extension option that will surely be used; judging “low-value” by the monthly rent instead of the value of the new asset; and confusing “low-value” with “immaterial”. A rig renewed every three months with a fresh contract may in substance be a long-term lease too.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'initial-measurement',
      title: { fa: 'اندازه‌گیری اولیه: بدهی اجاره و دارایی حق استفاده', en: 'Initial Measurement: Lease Liability and Right-of-Use Asset' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در **روز شروع اجاره** (روزی که اجاره‌دهنده دارایی را در اختیار می‌گذارد)، **بدهی اجاره** برابر **ارزش فعلی** پرداخت‌های اجاره‌ای است که هنوز پرداخت نشده‌اند. نرخ تنزیل، **نرخ ضمنی اجاره** است اگر به‌آسانی قابل تعیین باشد؛ وگرنه **نرخ استقراض اضافی** مستأجر، یعنی نرخی که مستأجر برای قرض گرفتن مبلغی مشابه، برای مدتی مشابه و با وثیقه‌ای مشابه می‌پرداخت. مستأجرها نرخ ضمنی را معمولاً نمی‌دانند، پس در عمل نرخ استقراض اضافی رایج‌تر است.',
            en: 'At the **commencement date** (when the lessor makes the asset available), the **lease liability** equals the **present value** of the lease payments not yet paid. The discount rate is the **interest rate implicit in the lease** if it can be readily determined; otherwise the lessee’s **incremental borrowing rate**, the rate it would pay to borrow a similar amount, for a similar term, with similar security. Lessees rarely know the implicit rate, so in practice the incremental borrowing rate is more common.',
          },
        },
        {
          type: 'list',
          items: [
            { fa: '**در بدهی می‌آید:** پرداخت‌های ثابت (منهای مشوق‌های دریافتنی)، پرداخت‌های متغیری که به یک شاخص یا نرخ وابسته‌اند (مثل شاخص قیمت)، مبالغ مورد انتظار تضمین ارزش باقی‌مانده، قیمت اختیار خرید اگر استفاده از آن به‌طور معقول قطعی باشد، و جریمه فسخ اگر مدت اجاره فسخ را فرض کرده باشد.', en: '**Included in the liability:** fixed payments (less incentives receivable), variable payments that depend on an index or rate (such as a price index), amounts expected under residual value guarantees, a purchase option price if reasonably certain to be exercised, and termination penalties if the lease term assumes termination.' },
            { fa: '**در بدهی نمی‌آید:** پرداخت‌های متغیری که به استفاده یا عملکرد وابسته‌اند (مثلاً پاداش متراژ حفاری)، که هنگام وقوع هزینه می‌شوند؛ و اجزای خدماتی، مگر راهکار جدا نکردن انتخاب شده باشد.', en: '**Not included:** variable payments linked to use or performance (for example a drilling footage bonus), which are expensed as incurred; and service components, unless the non-separation expedient was elected.' },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'مثال اصلی درس: مسار در 1 ژانویه 2026 محوطه و انبار نگهداری لوله را کنار میدان آریا برای **4 سال** اجاره می‌کند. اجاره سالانه **146,410** در **پایان هر سال** پرداخت می‌شود. نرخ ضمنی معلوم نیست و نرخ استقراض اضافی مسار **10٪** است (فرضی). هزینه حقوقی تنظیم قرارداد (مخارج مستقیم اولیه) **3,900** نقد پرداخت شد. اختیار تمدید یا خرید وجود ندارد و قرارداد تعهد بازسازی محوطه ندارد. هزینه روی مرکز هزینه انبار `CC-ARY-WHS` ثبت می‌شود.',
            en: 'The lesson’s main example: on 1 January 2026 Masar leases a pipe yard and warehouse next to the Arya field for **4 years**. The annual rent of **146,410** is paid at the **end of each year**. The implicit rate is unknown and Masar’s incremental borrowing rate is **10%** (illustrative). Legal fees to arrange the contract (initial direct costs) of **3,900** were paid in cash. There is no extension or purchase option, and the contract has no restoration obligation. Costs go to the warehouse cost centre `CC-ARY-WHS`.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'ارزش فعلی پرداخت‌ها با نرخ 10٪', en: 'Present value of the payments at 10%' },
          head: [
            { fa: 'پرداخت', en: 'Payment' },
            { fa: 'مبلغ', en: 'Amount' },
            { fa: 'تنزیل', en: 'Discounting' },
            { fa: 'ارزش فعلی', en: 'Present value' },
          ],
          numericCols: [1, 3],
          rows: [
            [t('پایان سال 1', 'End of year 1'), 146410, t('÷ 1.10', '÷ 1.10'), 133100],
            [t('پایان سال 2', 'End of year 2'), 146410, t('÷ 1.21', '÷ 1.21'), 121000],
            [t('پایان سال 3', 'End of year 3'), 146410, t('÷ 1.331', '÷ 1.331'), 110000],
            [t('پایان سال 4', 'End of year 4'), 146410, t('÷ 1.4641', '÷ 1.4641'), 100000],
            [t('**جمع (بدهی اجاره)**', '**Total (lease liability)**'), 585640, blank, 464100],
          ],
        },
        {
          type: 'table',
          caption: { fa: 'ساختن بهای دارایی حق استفاده', en: 'Building up the cost of the right-of-use asset' },
          head: [
            { fa: 'جزء', en: 'Component' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          numericCols: [1],
          rows: [
            [t('مبلغ اولیه بدهی اجاره', 'Initial lease liability'), 464100],
            [t('به‌علاوه: پرداخت‌های اجاره در روز شروع یا پیش از آن', 'Plus: lease payments made at or before commencement'), 0],
            [t('به‌علاوه: مخارج مستقیم اولیه (هزینه حقوقی)', 'Plus: initial direct costs (legal fees)'), 3900],
            [t('منهای: مشوق‌های اجاره دریافت‌شده', 'Less: lease incentives received'), 0],
            [t('به‌علاوه: برآورد مخارج بازسازی یا برچیدن (طبق IAS 37)', 'Plus: estimated restoration or dismantling costs (under IAS 37)'), 0],
            [t('**بهای دارایی حق استفاده**', '**Cost of the right-of-use asset**'), 468000],
          ],
        },
        {
          type: 'journal',
          title: { fa: 'ثبت روز شروع اجاره', en: 'Entries at commencement' },
          entries: [
            {
              date: t('1 ژانویه 2026', '1 Jan 2026'),
              lines: [
                { account: ac.rou, debit: 464100 },
                { account: ac.leaseLiab, credit: 464100 },
              ],
              memo: t('شناسایی اجاره محوطه لوله با ارزش فعلی پرداخت‌ها', 'Pipe-yard lease recognised at the present value of payments'),
            },
            {
              date: t('1 ژانویه 2026', '1 Jan 2026'),
              lines: [
                { account: ac.rou, debit: 3900 },
                { account: ac.bank, credit: 3900 },
              ],
              memo: t('مخارج مستقیم اولیه به بهای دارایی اضافه می‌شود', 'Initial direct costs are added to the asset'),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'خزانه‌داری یک **جدول نرخ استقراض اضافی** بر اساس ارز و مدت (مثلاً دلار، 1 تا 3 سال، 3 تا 5 سال) نگه می‌دارد و هر فصل به‌روز می‌کند؛ حسابدار اجاره نرخ را از همین جدول برمی‌دارد و مستند می‌کند. در محوطه‌ها و زمین‌های میدان، تعهد بازسازی زمین در پایان اجاره رایج است؛ اگر باشد، برآوردش طبق IAS 37 به بهای دارایی حق استفاده اضافه و ذخیره آن شناسایی می‌شود. در ایران، استاندارد ملی حسابداری شماره 21 «حسابداری اجاره‌ها» بر پایه الگوی قدیمی است که مستأجر اجاره‌ها را به سرمایه‌ای و عملیاتی تقسیم می‌کند؛ اگر شرکت شما طبق استانداردهای ملی گزارش می‌دهد، آخرین نسخه آن را بررسی کنید.',
            en: 'Treasury keeps an **incremental borrowing rate table** by currency and term (for example USD, 1 to 3 years, 3 to 5 years) and updates it each quarter; the lease accountant takes the rate from that table and documents it. For yards and land at the field, an obligation to restore the land at the end of the lease is common; if there is one, its estimate is added to the right-of-use asset and a provision is recognised under IAS 37. In Iran, national Accounting Standard 21, “Accounting for Leases”, follows the older model in which the lessee classifies leases as finance or operating; if your company reports under national standards, check its latest version.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'schedule',
      title: { fa: 'جدول بازپرداخت، بهره و استهلاک', en: 'The Schedule: Interest and Depreciation' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'پس از روز شروع، دو حساب جداگانه زندگی می‌کنند. **بدهی اجاره** مثل یک وام رفتار می‌کند: هر سال به اندازه بهره (مانده اول دوره × نرخ) زیاد و به اندازه پرداخت کم می‌شود. **دارایی حق استفاده** مثل یک دارایی ثابت مستهلک می‌شود: به روش خط مستقیم در مدت کوتاه‌تر از مدت اجاره و عمر مفید (اگر مالکیت در پایان منتقل شود یا اختیار خرید به‌طور معقول قطعی باشد، در عمر مفید).',
            en: 'After commencement, two separate accounts live their own lives. The **lease liability** behaves like a loan: each year it grows by interest (opening balance × rate) and shrinks by the payment. The **right-of-use asset** is depreciated like a fixed asset: straight-line over the shorter of the lease term and the useful life (over the useful life if ownership transfers at the end or a purchase option is reasonably certain).',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'بهره سال = مانده اول دوره × 10٪   |   مانده پایان دوره = مانده اول دوره + بهره منهای پرداخت',
            en: 'Interest = Opening balance × 10%   |   Closing balance = Opening + Interest minus Payment',
          },
        },
        {
          type: 'table',
          caption: { fa: 'جدول کامل بازپرداخت بدهی اجاره محوطه لوله', en: 'Full repayment schedule of the pipe-yard lease liability' },
          head: [
            { fa: 'سال', en: 'Year' },
            { fa: 'مانده اول دوره', en: 'Opening balance' },
            { fa: 'بهره 10٪', en: 'Interest 10%' },
            { fa: 'پرداخت', en: 'Payment' },
            { fa: 'کاهش اصل بدهی', en: 'Principal repaid' },
            { fa: 'مانده پایان دوره', en: 'Closing balance' },
          ],
          numericCols: [1, 2, 3, 4, 5],
          rows: [
            [yr(1), 464100, 46410, 146410, 100000, 364100],
            [yr(2), 364100, 36410, 146410, 110000, 254100],
            [yr(3), 254100, 25410, 146410, 121000, 133100],
            [yr(4), 133100, 13310, 146410, 133100, 0],
            [t('**جمع**', '**Total**'), blank, 121540, 585640, 464100, blank],
          ],
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های سال 1 (در ERP ماهانه ثبت می‌شوند؛ اینجا سالانه آمده است)', en: 'Year 1 entries (the ERP posts them monthly; shown yearly here)' },
          entries: [
            {
              date: t('طی سال 1', 'During year 1'),
              lines: [
                { account: ac.interest, debit: 46410 },
                { account: ac.leaseLiab, credit: 46410 },
              ],
              memo: t('بهره: 464,100 × 10٪', 'Interest: 464,100 × 10%'),
            },
            {
              date: t('31 دسامبر 2026', '31 Dec 2026'),
              lines: [
                { account: ac.leaseLiab, debit: 146410 },
                { account: ac.bank, credit: 146410 },
              ],
              memo: t('پرداخت اجاره سال 1', 'Year 1 rent paid'),
            },
            {
              date: t('طی سال 1', 'During year 1'),
              lines: [
                { account: ac.rouDep, debit: 117000 },
                { account: ac.rouAccDep, credit: 117000 },
              ],
              memo: t('استهلاک: 468,000 ÷ 4 سال، روی CC-ARY-WHS', 'Depreciation: 468,000 ÷ 4 years, on CC-ARY-WHS'),
            },
          ],
        },
        {
          type: 'tAccounts',
          title: { fa: 'حساب بدهی اجاره در طول 4 سال', en: 'The lease liability account over 4 years' },
          accounts: [
            {
              name: ac.leaseLiab,
              debits: [146410, 146410, 146410, 146410],
              credits: [464100, 46410, 36410, 25410, 13310],
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'هزینه در سود و زیان در برابر پول پرداختی', en: 'Expense in profit or loss versus cash paid' },
          head: [
            { fa: 'سال', en: 'Year' },
            { fa: 'بهره', en: 'Interest' },
            { fa: 'استهلاک', en: 'Depreciation' },
            { fa: 'جمع هزینه', en: 'Total expense' },
            { fa: 'پرداخت نقدی اجاره', en: 'Cash rent paid' },
          ],
          numericCols: [1, 2, 3, 4],
          rows: [
            [yr(1), 46410, 117000, 163410, 146410],
            [yr(2), 36410, 117000, 153410, 146410],
            [yr(3), 25410, 117000, 142410, 146410],
            [yr(4), 13310, 117000, 130310, 146410],
            [t('**جمع**', '**Total**'), 121540, 468000, 589540, 585640],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'دو نکته از این جدول: اول، هزینه کل (589,540) با پرداخت‌ها (585,640) به‌علاوه هزینه حقوقی (3,900) برابر است؛ IFRS 16 هزینه کل را عوض نمی‌کند، فقط **زمان‌بندی** و **نام** آن را. دوم، هزینه در سال‌های اول بیشتر است (163,410 در برابر 130,310)، چون بهره روی مانده بزرگ‌تر حساب می‌شود. همچنین چون اجاره دیگر هزینه عملیاتی نیست و به استهلاک و بهره تبدیل شده، **EBITDA** شرکت بالاتر نشان داده می‌شود؛ تحلیلگرها این را می‌دانند و شما هم باید بدانید.',
            en: 'Two points from this table: first, total expense (589,540) equals the payments (585,640) plus the legal fees (3,900); IFRS 16 does not change the total cost, only its **timing** and its **name**. Second, the expense is higher in the early years (163,410 against 130,310), because interest is charged on a larger balance. Also, because rent is no longer an operating expense but depreciation and interest, the company’s **EBITDA** looks higher; analysts know this, and so should you.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'modifications-presentation',
      title: { fa: 'تغییر قرارداد، نمایش و اجاره در مشارکت', en: 'Modifications, Presentation and Joint-Venture Leases' },
      blocks: [
        {
          type: 'h',
          text: { fa: 'تغییر قرارداد اجاره (آشنایی)', en: 'Lease modifications (introduction)' },
        },
        {
          type: 'p',
          text: {
            fa: '**تغییر قرارداد اجاره** (Lease modification) یعنی تغییری در دامنه یا مبلغ اجاره که در قرارداد اولیه پیش‌بینی نشده بود؛ مثلاً تمدید، افزودن زمین بیشتر یا کاهش اجاره. دو حالت دارد: (1) اگر **حق استفاده از دارایی تازه‌ای** اضافه شود و مبلغ به اندازه قیمت مستقل آن بالا برود، یک **اجاره جداگانه** است و از روز خودش ثبت می‌شود. (2) در غیر این صورت، بدهی اجاره با پرداخت‌های جدید و **نرخ تنزیل تجدیدنظرشده** در تاریخ تغییر دوباره اندازه‌گیری و تفاوت آن به دارایی حق استفاده اضافه یا از آن کم می‌شود. اگر دامنه اجاره کم شود، بخشی از دارایی و بدهی هم برداشته و سود یا زیانش شناسایی می‌شود.',
            en: 'A **lease modification** is a change in the scope or price of a lease that was not part of the original terms; for example an extension, adding more land or a rent reduction. There are two cases: (1) if it adds **the right to use an additional asset** and the price rises by that asset’s stand-alone price, it is a **separate lease**, recorded from its own date. (2) Otherwise the lease liability is remeasured with the new payments and a **revised discount rate** at the modification date, and the difference is added to or deducted from the right-of-use asset. If the scope decreases, part of the asset and liability is also removed and a gain or loss is recognised.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'مثال کوتاه', en: 'A short example' },
          text: {
            fa: 'در ابتدای سال 3، مسار و اجاره‌دهنده توافق می‌کنند محوطه لوله 2 سال بیشتر، با همان اجاره سالانه، در اختیار مسار بماند. دارایی تازه‌ای اضافه نشده، پس اجاره جداگانه نیست: بدهی با 4 پرداخت باقی‌مانده و نرخ جدید دوباره اندازه‌گیری می‌شود و افزایش آن به دارایی حق استفاده اضافه می‌شود. محاسبه کامل را در تمرین آخر این درس می‌بینید.',
            en: 'At the start of year 3, Masar and the lessor agree that Masar keeps the pipe yard for 2 more years at the same annual rent. No new asset is added, so it is not a separate lease: the liability is remeasured with the 4 remaining payments and the new rate, and the increase is added to the right-of-use asset. The full calculation is in the last exercise of this lesson.',
          },
        },
        {
          type: 'h',
          text: { fa: 'نمایش در صورت‌های مالی', en: 'Presentation in the financial statements' },
        },
        {
          type: 'table',
          caption: { fa: 'اجاره محوطه لوله در صورت‌های مالی پایان سال 1', en: 'The pipe-yard lease in the year 1 financial statements' },
          head: [
            { fa: 'صورت', en: 'Statement' },
            { fa: 'چه چیزی و کجا', en: 'What and where' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          numericCols: [2],
          rows: [
            [t('صورت وضعیت مالی', 'Statement of financial position'), t('دارایی حق استفاده (جدا یا در یادداشت دارایی‌های ثابت): 468,000 منهای 117,000', 'Right-of-use asset (separately or in the PP&E note): 468,000 minus 117,000'), 351000],
            [t('صورت وضعیت مالی', 'Statement of financial position'), t('بدهی اجاره جاری (اصل بدهی که در سال 2 پرداخت می‌شود)', 'Current lease liability (principal repaid in year 2)'), 110000],
            [t('صورت وضعیت مالی', 'Statement of financial position'), t('بدهی اجاره غیرجاری', 'Non-current lease liability'), 254100],
            [t('صورت سود و زیان', 'Income statement'), t('هزینه استهلاک دارایی حق استفاده', 'Depreciation of right-of-use assets'), 117000],
            [t('صورت سود و زیان', 'Income statement'), t('بهره بدهی اجاره، جزو هزینه‌های مالی', 'Interest on lease liabilities, within finance costs'), 46410],
            [t('صورت جریان‌های نقدی', 'Cash flow statement'), t('بازپرداخت اصل بدهی اجاره: فعالیت‌های تأمین مالی', 'Principal repaid: financing activities'), 100000],
            [t('صورت جریان‌های نقدی', 'Cash flow statement'), t('بهره پرداختی: طبق رویه IAS 7 (بخش زیر)', 'Interest paid: per the IAS 7 policy (see below)'), 46410],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: {
            fa: 'پرداخت‌های اجاره کوتاه‌مدت، کم‌ارزش و پرداخت‌های متغیرِ خارج از بدهی در فعالیت‌های عملیاتی می‌آیند. برای بهره پرداختی، IAS 7 تاکنون انتخاب میان عملیاتی و تأمین مالی را مجاز می‌دانست؛ با اصلاحاتی که IFRS 18 در IAS 7 داده (برای دوره‌هایی که از 1 ژانویه 2027 شروع می‌شوند)، بیشتر شرکت‌ها بهره پرداختی را در فعالیت‌های تأمین مالی نشان می‌دهند. یادداشت‌ها هم باید تحلیل سررسید بدهی اجاره و هزینه اجاره‌های معاف را نشان دهند.',
            en: 'Payments for short-term and low-value leases, and variable payments outside the liability, go in operating activities. For interest paid, IAS 7 has so far allowed a choice between operating and financing; with the amendments IFRS 18 makes to IAS 7 (for periods beginning on or after 1 January 2027), most companies show interest paid in financing activities. The notes must also give a maturity analysis of lease liabilities and the expense of exempt leases.',
          },
        },
        {
          type: 'h',
          text: { fa: 'اجاره‌ای که اپراتور مشارکت امضا می‌کند (آشنایی)', en: 'Leases signed by the joint-venture operator (introduction)' },
        },
        {
          type: 'p',
          text: {
            fa: 'در مشارکت میدان آریا، مسار (50٪) اپراتور است و البرز (30٪) و دنا (20٪) شرکای غیرعامل‌اند. قرارداد دکل R-27 را **فقط مسار** امضا کرده و در برابر پیمانکار مسئولیت اصلی پرداخت با اوست، اما دکل برای چاه‌های مشترک کار می‌کند و هزینه‌اش با صورت‌حساب سهم شرکا (JIB) میان شرکا تقسیم می‌شود. کمیته تفسیر IFRS در مارس 2019 گفت که شریک عملیات مشترک بدهی‌هایی را که خودش بابت سهمش ایجاد کرده، از جمله بدهی‌هایی که **مسئولیت اصلی** آن‌ها را دارد، شناسایی می‌کند. پس امضاکننده تنها معمولاً **100٪ بدهی اجاره** را ثبت می‌کند و سپس باید بررسی کند که آیا با مشارکت یک **اجاره فرعی** (Sublease) دارد یا نه؛ پاسخ به واقعیت‌ها و متن JOA بستگی دارد.',
            en: 'In the Arya field joint venture, Masar (50%) is the operator and Alborz (30%) and Dena (20%) are non-operators. **Only Masar** signed the rig R-27 contract and carries primary responsibility for paying the contractor, but the rig works on joint wells and its cost is split among the partners through joint interest billing (JIB). In March 2019 the IFRS Interpretations Committee said that a joint operator recognises the liabilities it incurs in relation to its interest, including those for which it has **primary responsibility**. So the sole signatory usually recognises **100% of the lease liability** and must then assess whether it has a **sublease** to the joint operation; the answer depends on the facts and the JOA’s wording.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'اپراتور امضاکننده (مسار)', en: 'Signing operator (Masar)' },
            items: [
              { fa: 'معمولاً 100٪ بدهی اجاره و دارایی حق استفاده', en: 'Usually 100% of the lease liability and right-of-use asset' },
              { fa: 'اگر اجاره فرعی به مشارکت داشته باشد: بخشی از دارایی را برمی‌دارد و طلب اجاره فرعی از شرکا (50٪) ثبت می‌کند', en: 'If there is a sublease to the joint operation: removes part of the asset and records a sublease receivable for the partners’ 50%' },
              { fa: 'اگر نداشته باشد: سهم شرکا از صورت‌حساب‌ها طبق رویه گروه ثبت می‌شود', en: 'If not: the partners’ share of billings is recorded under the group’s policy' },
            ],
          },
          right: {
            title: { fa: 'شرکای غیرعامل (البرز، دنا)', en: 'Non-operators (Alborz, Dena)' },
            items: [
              { fa: 'معمولاً بدهی اجاره شناسایی نمی‌کنند، مگر امضاکننده باشند یا JOA آن‌ها را مستقیم مسئول کند', en: 'Usually recognise no lease liability unless they co-signed or the JOA makes them directly liable' },
              { fa: 'سهم خود از هزینه‌های صورت‌حساب‌شده را ثبت می‌کنند', en: 'Record their share of the billed costs' },
              { fa: 'در صورت اجاره فرعی، ممکن است خودشان مستأجر فرعی باشند', en: 'Under a sublease, they may themselves be sub-lessees' },
            ],
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'رویه‌ها متفاوت است', en: 'Practice varies' },
          text: {
            fa: 'حسابداری اجاره‌هایی که اپراتور برای مشارکت امضا می‌کند یکی از موضوعات پرقضاوت IFRS 16 در صنعت نفت و گاز است و شرکت‌ها به نتیجه‌های متفاوتی رسیده‌اند. رویه گروه را بخوانید، تحلیل هر قرارداد مهم (بخصوص دکل‌ها) را مستند کنید، آن را با حسابرس هماهنگ کنید و همان را در همه دوره‌ها به کار ببرید.',
            en: 'Accounting for leases an operator signs for a joint venture is one of the most judgemental IFRS 16 areas in oil and gas, and companies have reached different conclusions. Read the group policy, document the analysis of each significant contract (especially rigs), agree it with the auditor and apply it consistently in every period.',
          },
        },
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'erp-leases',
      title: { fa: 'قراردادهای اجاره در ERP', en: 'Lease Contracts in the ERP' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'شرکتی مثل مسار ده‌ها قرارداد اجاره دارد و هر کدام هر ماه بهره، استهلاک و پرداخت دارد. این کار با صفحه‌گسترده قابل کنترل نیست؛ ERP یک **دفتر معین قراردادهای اجاره** دارد که داده پایه هر قرارداد را نگه می‌دارد، جدول بازپرداخت را می‌سازد و ثبت‌ها را خودکار به ماژول مالی می‌فرستد.',
            en: 'A company like Masar has dozens of leases, each with interest, depreciation and payments every month. That cannot be controlled in a spreadsheet; the ERP has a **lease contract sub-ledger** that keeps each contract’s master data, builds the schedule and sends the postings to Finance automatically.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'داده پایه قرارداد اجاره محوطه لوله در ERP', en: 'Master data of the pipe-yard lease in the ERP' },
          head: [
            { fa: 'فیلد', en: 'Field' },
            { fa: 'مقدار', en: 'Value' },
          ],
          rows: [
            [t('اجاره‌دهنده (تأمین‌کننده در داده پایه)', 'Lessor (vendor master)'), t('شرکت محلی مالک زمین', 'The local landowning company')],
            [t('گروه دارایی', 'Asset class'), t('زمین و ساختمان؛ گروه‌های دیگر: دکل، خودرو، تجهیزات', 'Land and buildings; other classes: rigs, vehicles, equipment')],
            [t('تاریخ شروع، مدت و اختیارها', 'Commencement, term and options'), t('1 ژانویه 2026؛ 4 سال؛ بدون اختیار تمدید یا خرید', '1 Jan 2026; 4 years; no extension or purchase option')],
            [t('برنامه پرداخت', 'Payment plan'), t('146,410 در پایان هر سال', '146,410 at the end of each year')],
            [t('نرخ تنزیل', 'Discount rate'), t('10٪ از جدول نرخ استقراض اضافی خزانه‌داری', '10% from treasury’s incremental borrowing rate table')],
            [t('اجزا و معافیت‌ها', 'Components and exemptions'), t('فقط جزء اجاره؛ معافیت ندارد', 'Lease component only; no exemption')],
            [t('کد هزینه', 'Cost coding'), t('`MP01 / CC-ARY-WHS / 5230 / R / Operating`', '`MP01 / CC-ARY-WHS / 5230 / R / Operating`')],
          ],
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: '1. ثبت قرارداد', en: '1. Register the contract' },
              text: { fa: 'واحد تدارکات یا حقوقی قرارداد امضاشده را در ERP بارگذاری می‌کند؛ هیچ اجاره‌ای نباید بیرون از سیستم امضا شود.', en: 'Procurement or legal uploads the signed contract to the ERP; no lease should be signed outside the system.' },
            },
            {
              title: { fa: '2. تحلیل و طبقه‌بندی', en: '2. Analyse and classify' },
              text: { fa: 'حسابدار اجاره سه آزمون، اجزا و معافیت‌ها را بررسی و نتیجه را در قرارداد ثبت می‌کند؛ خزانه‌داری نرخ را می‌دهد.', en: 'The lease accountant runs the three tests, components and exemptions and records the result; treasury provides the rate.' },
            },
            {
              title: { fa: '3. تأیید', en: '3. Approve' },
              text: { fa: 'کنترلر مالی در گردش کار تأیید، تحلیل و نرخ را تأیید می‌کند. سپس ERP جدول بازپرداخت را می‌سازد و ثبت روز شروع را انجام می‌دهد.', en: 'The financial controller approves the analysis and rate in the approval workflow. The ERP then builds the schedule and posts the commencement entry.' },
            },
            {
              title: { fa: '4. ثبت‌های ماهانه', en: '4. Monthly postings' },
              text: { fa: 'اجرای ماهانه اجاره، بهره و استهلاک را ثبت می‌کند؛ فاکتور اجاره‌دهنده از ماژول پرداختنی‌ها **بدهی اجاره** را کم می‌کند، نه اینکه هزینه اجاره بسازد.', en: 'The monthly lease run posts interest and depreciation; the lessor’s invoice in accounts payable reduces the **lease liability** instead of creating rent expense.' },
            },
            {
              title: { fa: '5. تطبیق و گزارش', en: '5. Reconcile and report' },
              text: { fa: 'مانده دفتر معین اجاره با دفتر کل تطبیق داده می‌شود و گزارش‌های افشا (سررسید، هزینه‌ها، جریان نقدی) از همان داده ساخته می‌شود. هر تغییر قرارداد از همین گردش کار دوباره می‌گذرد.', en: 'The lease sub-ledger is reconciled to the general ledger, and the disclosure reports (maturity, expenses, cash flows) come from the same data. Every modification goes through the same workflow again.' },
            },
          ],
        },
        {
          type: 'journal',
          title: { fa: 'آنچه ERP در پایان سال 1 ثبت می‌کند', en: 'What the ERP posts at the end of year 1' },
          entries: [
            {
              date: t('31 دسامبر 2026', '31 Dec 2026'),
              lines: [
                { account: ac.leaseLiab, debit: 146410 },
                { account: ac.ap, credit: 146410 },
              ],
              memo: t('فاکتور اجاره‌دهنده با ارجاع به قرارداد اجاره: بدهی اجاره به حساب پرداختنی منتقل می‌شود', 'Lessor invoice referencing the lease contract: the lease liability moves to accounts payable'),
            },
            {
              date: t('31 دسامبر 2026', '31 Dec 2026'),
              lines: [
                { account: ac.ap, debit: 146410 },
                { account: ac.bank, credit: 146410 },
              ],
              memo: t('پرداخت از اجرای پرداخت ماژول پرداختنی‌ها', 'Payment through the accounts payable payment run'),
            },
            {
              date: t('31 دسامبر 2026', '31 Dec 2026'),
              lines: [
                { account: ac.rouDep, debit: 9750 },
                { account: ac.rouAccDep, credit: 9750 },
              ],
              memo: t('استهلاک ماه دسامبر: 117,000 ÷ 12', 'December depreciation: 117,000 ÷ 12'),
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'دکل R-27 در ERP همین‌طور کار می‌کند، با دو تفاوت. اول، فاکتور ماهانه 900,000 پیمانکار دو بخش دارد: 540,000 جزء اجاره که بدهی اجاره را کم می‌کند و 360,000 خدمات حفاری که با SES تأیید شده است. دوم، چون دکل چاه‌های توسعه‌ای را حفاری می‌کند، خدمات و استهلاک دارایی حق استفاده دکل به **WBS چاه** در دارایی‌های در جریان تکمیل می‌رود، نه به هزینه دوره.',
            en: 'Rig R-27 works the same way in the ERP, with two differences. First, the contractor’s monthly invoice of 900,000 has two parts: 540,000 lease component that reduces the lease liability, and 360,000 of drilling services accepted through an SES. Second, because the rig drills development wells, the services and the depreciation of the rig’s right-of-use asset go to the **well’s WBS** in assets under construction, not to period expense.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های ماهانه دکل R-27 برای چاه AR-09', en: 'Monthly rig R-27 postings for well AR-09' },
          entries: [
            {
              date: t('پایان ماه', 'Month-end'),
              lines: [
                { account: ac.auc, debit: 360000 },
                { account: ac.grir, credit: 360000 },
              ],
              memo: t('تأیید SES خدمات حفاری با گزارش‌های روزانه حفاری امضاشده', 'SES for drilling services accepted, backed by signed daily drilling reports'),
            },
            {
              date: t('پایان ماه', 'Month-end'),
              lines: [
                { account: ac.grir, debit: 360000 },
                { account: ac.leaseLiab, debit: 540000 },
                { account: ac.ap, credit: 900000 },
              ],
              memo: t('فاکتور پیمانکار: بخش خدمات و بخش اجاره', 'Contractor invoice: services part and lease part'),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'در عمل: دید IFRS و دید قرارداد', en: 'In practice: the IFRS view and the contract view' },
          text: {
            fa: 'روش حسابداری بسیاری از قراردادهای نفتی و JOAها هزینه قابل شارژ و قابل بازیافت را با قواعد خودشان تعریف می‌کند و معمولاً خود پرداخت‌های اجاره را به حساب مشترک و بازیافت هزینه می‌برد، نه استهلاک و بهره IFRS 16 را. پس ERP باید دو دید را با هم نگه دارد: دید IFRS برای صورت‌های مالی و دید قرارداد برای صورت‌حساب شرکا و گزارش بازیافت هزینه. متن قرارداد خودتان را بخوانید و قرارداد اجاره را با کد هزینه، کد مشارکت و نشان بازیافت درست تعریف کنید.',
            en: 'The accounting procedures of many petroleum contracts and JOAs define chargeable and recoverable costs by their own rules, and usually charge the lease payments themselves to the joint account and cost recovery, not IFRS 16 depreciation and interest. So the ERP must keep two views side by side: the IFRS view for the financial statements and the contract view for partner billing and cost recovery reports. Read your own contract, and set up each lease with the right cost code, joint-venture code and recoverable flag.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'خطاهای پرهزینه', en: 'Costly errors' },
          text: {
            fa: 'ثبت فاکتور اجاره‌دهنده به هزینه اجاره در حالی که بدهی اجاره هم ثبت شده است (هزینه دو بار ثبت می‌شود)؛ قراردادهایی که بیرون از واحد تدارکات امضا شده و هرگز وارد دفتر معین اجاره نشده‌اند؛ تمدیدها و تغییراتی که در ERP ثبت نشده‌اند؛ و نرخ تنزیلی که بدون تأیید دستی وارد شده است.',
            en: 'Posting the lessor’s invoice to rent expense while the lease liability is also recorded (the cost is booked twice); contracts signed outside procurement that never reach the lease sub-ledger; extensions and changes never entered in the ERP; and discount rates keyed in manually without approval.',
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
            fa: 'همه نرخ‌ها و مبالغ فرضی‌اند. پرداخت‌ها در پایان هر دوره انجام می‌شوند، مگر خلافش گفته شود. اول خودتان حل کنید.',
            en: 'All rates and amounts are illustrative. Payments are made at the end of each period unless stated otherwise. Try it yourself first.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'اجاره، معاف یا بیرون از دامنه؟', en: 'Lease, exempt or out of scope?' },
          difficulty: 'easy',
          problem: {
            fa: 'برای هر قرارداد مسار بگویید: اجاره در ترازنامه، معافیت (کدام)، خدمت یا بیرون از دامنه IFRS 16. (الف) دکل تعمیر چاه با نام مشخص برای 3 ماه، بدون تمدید. (ب) 50 تلفن همراه برای کارکنان میدان. (ج) 10 وانت با شماره شاسی مشخص برای 5 سال، فقط برای مسار. (د) حمل لوله از بندر؛ پیمانکار هر کامیونی را می‌فرستد و عملاً جابه‌جا می‌کند. (ه) حق تولید نفت در یک بلوک طبق قرارداد نفتی.',
            en: 'For each Masar contract, say: lease on the balance sheet, exemption (which), service, or outside IFRS 16. (a) A named workover rig for 3 months, no extension. (b) 50 mobile phones for field staff. (c) 10 pickups with specified chassis numbers for 5 years, for Masar only. (d) Pipe haulage from the port; the contractor sends any truck and swaps them in practice. (e) The right to produce oil in a block under a petroleum contract.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'قرارداد', en: 'Contract' },
                { fa: 'نتیجه', en: 'Outcome' },
                { fa: 'دلیل', en: 'Reason' },
              ],
              rows: [
                [t('(الف)', '(a)'), t('معافیت کوتاه‌مدت (اگر برای این گروه انتخاب شده باشد)', 'Short-term exemption (if elected for this class)'), t('اجاره است ولی 12 ماه یا کمتر و بدون اختیار خرید', 'It is a lease, but 12 months or less with no purchase option')],
                [t('(ب)', '(b)'), t('معافیت دارایی کم‌ارزش', 'Low-value exemption'), t('ارزش هر تلفن نو کم است', 'Each phone has a low value when new')],
                [t('(ج)', '(c)'), t('اجاره در ترازنامه', 'Lease on the balance sheet'), t('دارایی مشخص، منافع و هدایت با مسار، 5 سال', 'Identified assets, benefits and direction with Masar, 5 years')],
                [t('(د)', '(d)'), t('خدمت', 'Service'), t('حق جایگزینی اساسی؛ دارایی مشخص نیست', 'Substantive substitution right; no identified asset')],
                [t('(ه)', '(e)'), t('بیرون از دامنه IFRS 16', 'Outside IFRS 16'), t('اجاره برای اکتشاف یا استفاده از نفت و گاز مستثناست', 'Leases to explore for or use oil and gas are excluded')],
              ],
            },
          ],
          answer: {
            fa: 'فقط (ج) در ترازنامه می‌آید؛ (الف) کوتاه‌مدت، (ب) کم‌ارزش، (د) خدمت و (ه) بیرون از دامنه است.',
            en: 'Only (c) goes on the balance sheet; (a) is short-term, (b) low-value, (d) a service and (e) out of scope.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'اندازه‌گیری اولیه اجاره اتوبوس‌ها', en: 'Initial measurement of the bus lease' },
          difficulty: 'medium',
          problem: {
            fa: 'مسار 12 اتوبوس کارکنان را برای 3 سال اجاره می‌کند. اجاره سالانه 133,100 در پایان هر سال، نرخ استقراض اضافی 10٪. مسار 2,000 هزینه کارگزاری (مخارج مستقیم اولیه) پرداخت کرد و اجاره‌دهنده در روز شروع 3,000 نقد به‌عنوان مشوق به مسار داد. بدهی اجاره و بهای دارایی حق استفاده را حساب و ثبت کنید.',
            en: 'Masar leases the 12 crew buses for 3 years. Annual rent is 133,100 at the end of each year, and the incremental borrowing rate is 10%. Masar paid a 2,000 brokerage fee (initial direct costs) and the lessor paid Masar 3,000 in cash at commencement as an incentive. Compute and record the lease liability and the cost of the right-of-use asset.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'پرداخت', en: 'Payment' },
                { fa: 'تنزیل', en: 'Discounting' },
                { fa: 'ارزش فعلی', en: 'Present value' },
              ],
              numericCols: [2],
              rows: [
                [t('پایان سال 1: 133,100', 'End of year 1: 133,100'), t('÷ 1.10', '÷ 1.10'), 121000],
                [t('پایان سال 2: 133,100', 'End of year 2: 133,100'), t('÷ 1.21', '÷ 1.21'), 110000],
                [t('پایان سال 3: 133,100', 'End of year 3: 133,100'), t('÷ 1.331', '÷ 1.331'), 100000],
                [t('**بدهی اجاره**', '**Lease liability**'), blank, 331000],
              ],
            },
            {
              type: 'formula',
              text: {
                fa: 'دارایی حق استفاده = 331,000 + 2,000 منهای 3,000 = 330,000',
                en: 'Right-of-use asset = 331,000 + 2,000 minus 3,000 = 330,000',
              },
            },
            {
              type: 'journal',
              entries: [
                {
                  date: t('روز شروع', 'Commencement'),
                  lines: [
                    { account: ac.rou, debit: 331000 },
                    { account: ac.leaseLiab, credit: 331000 },
                  ],
                },
                {
                  date: t('روز شروع', 'Commencement'),
                  lines: [
                    { account: ac.rou, debit: 2000 },
                    { account: ac.bank, credit: 2000 },
                  ],
                  memo: t('مخارج مستقیم اولیه', 'Initial direct costs'),
                },
                {
                  date: t('روز شروع', 'Commencement'),
                  lines: [
                    { account: ac.bank, debit: 3000 },
                    { account: ac.rou, credit: 3000 },
                  ],
                  memo: t('مشوق دریافتی از بهای دارایی کم می‌شود', 'The incentive received reduces the asset'),
                },
              ],
            },
          ],
          answer: {
            fa: 'بدهی اجاره 331,000 و دارایی حق استفاده 330,000؛ استهلاک سالانه 110,000.',
            en: 'Lease liability 331,000 and right-of-use asset 330,000; annual depreciation 110,000.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'جدول بازپرداخت و ثبت‌های سال 1 اتوبوس‌ها', en: 'Schedule and year 1 entries for the buses' },
          difficulty: 'medium',
          problem: {
            fa: 'با اطلاعات تمرین قبل: (الف) جدول بازپرداخت 3 ساله را بسازید. (ب) ثبت‌های سال 1 را بنویسید. (ج) هزینه کل سال 1 در سود و زیان چقدر است؟ (د) بدهی پایان سال 1 را به جاری و غیرجاری تقسیم کنید.',
            en: 'Using the previous exercise: (a) build the 3-year schedule. (b) Write the year 1 entries. (c) What is the total year 1 expense in profit or loss? (d) Split the year-end liability into current and non-current.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'سال', en: 'Year' },
                { fa: 'مانده اول', en: 'Opening' },
                { fa: 'بهره 10٪', en: 'Interest 10%' },
                { fa: 'پرداخت', en: 'Payment' },
                { fa: 'مانده پایان', en: 'Closing' },
              ],
              numericCols: [1, 2, 3, 4],
              rows: [
                [yr(1), 331000, 33100, 133100, 231000],
                [yr(2), 231000, 23100, 133100, 121000],
                [yr(3), 121000, 12100, 133100, 0],
                [t('**جمع**', '**Total**'), blank, 68300, 399300, blank],
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: t('طی سال 1', 'During year 1'),
                  lines: [
                    { account: ac.interest, debit: 33100 },
                    { account: ac.leaseLiab, credit: 33100 },
                  ],
                },
                {
                  date: t('پایان سال 1', 'End of year 1'),
                  lines: [
                    { account: ac.leaseLiab, debit: 133100 },
                    { account: ac.bank, credit: 133100 },
                  ],
                },
                {
                  date: t('طی سال 1', 'During year 1'),
                  lines: [
                    { account: ac.rouDep, debit: 110000 },
                    { account: ac.rouAccDep, credit: 110000 },
                  ],
                  memo: t('330,000 ÷ 3 سال', '330,000 ÷ 3 years'),
                },
              ],
            },
            {
              type: 'steps',
              items: [
                { title: t('هزینه سال 1', 'Year 1 expense'), text: t('بهره 33,100 + استهلاک 110,000 = 143,100', 'Interest 33,100 + depreciation 110,000 = 143,100') },
                { title: t('بخش جاری', 'Current portion'), text: t('اصل بدهی که در سال 2 پرداخت می‌شود: 133,100 منهای 23,100 = 110,000', 'Principal repaid in year 2: 133,100 minus 23,100 = 110,000') },
                { title: t('بخش غیرجاری', 'Non-current portion'), text: t('231,000 منهای 110,000 = 121,000', '231,000 minus 110,000 = 121,000') },
              ],
            },
          ],
          answer: {
            fa: 'هزینه سال 1 برابر 143,100؛ بدهی پایان سال 1 برابر 231,000 که 110,000 آن جاری و 121,000 غیرجاری است.',
            en: 'Year 1 expense is 143,100; the year-end liability of 231,000 is 110,000 current and 121,000 non-current.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'جدا کردن اجاره از خدمات در قرارداد دکل', en: 'Separating the lease from services in the rig contract' },
          difficulty: 'medium',
          problem: {
            fa: 'فاکتور ماهانه دکل R-27 برابر 900,000 است و شامل اجاره دکل و خدمات حفاری (خدمه، نگهداری، غذا) می‌شود. قیمت‌های مستقل در بازار (فرضی): اجاره دکل بدون خدمه 600,000 و خدمات 400,000 در ماه. (الف) سهم هر جزء را حساب کنید. (ب) کدام بخش در بدهی اجاره می‌آید؟ (ج) اگر مسار راهکار جدا نکردن را برای گروه دکل‌ها انتخاب کند، چه تغییری می‌کند؟',
            en: 'Rig R-27’s monthly invoice is 900,000 and covers the rig lease and drilling services (crew, maintenance, catering). Market stand-alone prices (illustrative): bare rig rental 600,000 and services 400,000 a month. (a) Allocate the fee. (b) Which part enters the lease liability? (c) What changes if Masar elects the non-separation expedient for the rig class?',
          },
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('جمع قیمت‌های مستقل', 'Total stand-alone prices'), text: t('600,000 + 400,000 = 1,000,000', '600,000 + 400,000 = 1,000,000') },
                { title: t('جزء اجاره', 'Lease component'), text: t('900,000 × 600,000 ÷ 1,000,000 = 540,000', '900,000 × 600,000 ÷ 1,000,000 = 540,000') },
                { title: t('خدمات', 'Services'), text: t('900,000 × 400,000 ÷ 1,000,000 = 360,000', '900,000 × 400,000 ÷ 1,000,000 = 360,000') },
                { title: t('بدهی اجاره', 'Lease liability'), text: t('ارزش فعلی 18 پرداخت ماهانه 540,000؛ خدمات با SES به WBS چاه می‌روند', 'The present value of 18 monthly payments of 540,000; the services go to the well WBS through SES') },
                { title: t('راهکار جدا نکردن', 'Non-separation expedient'), text: t('کل 900,000 پرداخت اجاره حساب می‌شود؛ بدهی و دارایی به اندازه ارزش فعلی 18 × 360,000 بزرگ‌تر می‌شوند', 'The full 900,000 counts as lease payments; the liability and asset grow by the present value of 18 × 360,000') },
              ],
            },
          ],
          answer: {
            fa: 'جزء اجاره 540,000 و خدمات 360,000 در ماه؛ با راهکار جدا نکردن، کل 900,000 وارد بدهی اجاره می‌شود.',
            en: 'Lease component 540,000 and services 360,000 a month; under the expedient the full 900,000 enters the lease liability.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تمدید اجاره محوطه لوله', en: 'Extending the pipe-yard lease' },
          difficulty: 'hard',
          problem: {
            fa: 'در ابتدای سال 3 (پس از پرداخت سال 2)، مسار و اجاره‌دهنده توافق می‌کنند اجاره محوطه لوله 2 سال تمدید شود؛ یعنی 4 پرداخت باقی‌مانده 146,410 در پایان سال‌های 3 تا 6. نرخ تجدیدنظرشده در تاریخ تغییر را برای ساده شدن همان 10٪ فرض کنید. (الف) آیا اجاره جداگانه است؟ (ب) بدهی را دوباره اندازه‌گیری و ثبت کنید. (ج) استهلاک سالانه جدید را حساب کنید.',
            en: 'At the start of year 3 (after the year 2 payment), Masar and the lessor agree to extend the pipe-yard lease by 2 years, giving 4 remaining payments of 146,410 at the end of years 3 to 6. Assume, for simplicity, that the revised rate at the modification date is still 10%. (a) Is it a separate lease? (b) Remeasure and record the liability. (c) Compute the new annual depreciation.',
          },
          hint: {
            fa: 'مانده بدهی و دارایی در ابتدای سال 3 را از جدول بازپرداخت و ثبت‌های استهلاک بردارید.',
            en: 'Take the liability and asset balances at the start of year 3 from the schedule and the depreciation entries.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('اجاره جداگانه؟', 'Separate lease?'), text: t('خیر؛ دارایی تازه‌ای اضافه نشده و فقط مدت بیشتر شده است', 'No; no additional asset is added, only the term is longer') },
                { title: t('بدهی جدید', 'New liability'), text: t('ارزش فعلی 4 پرداخت 146,410 با 10٪ = 133,100 + 121,000 + 110,000 + 100,000 = 464,100', 'PV of 4 payments of 146,410 at 10% = 133,100 + 121,000 + 110,000 + 100,000 = 464,100') },
                { title: t('مانده فعلی بدهی', 'Current liability balance'), text: t('مانده پایان سال 2 در جدول: 254,100', 'Closing balance of year 2 in the schedule: 254,100') },
                { title: t('افزایش', 'Increase'), text: t('464,100 منهای 254,100 = 210,000، به دارایی حق استفاده اضافه می‌شود', '464,100 minus 254,100 = 210,000, added to the right-of-use asset') },
                { title: t('دارایی جدید', 'New asset'), text: t('ارزش دفتری 468,000 منهای 234,000 = 234,000؛ به‌علاوه 210,000 = 444,000', 'Carrying amount 468,000 minus 234,000 = 234,000; plus 210,000 = 444,000') },
                { title: t('استهلاک جدید', 'New depreciation'), text: t('444,000 ÷ 4 سال باقی‌مانده = 111,000 در سال', '444,000 ÷ 4 remaining years = 111,000 a year') },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: t('ابتدای سال 3', 'Start of year 3'),
                  lines: [
                    { account: ac.rou, debit: 210000 },
                    { account: ac.leaseLiab, credit: 210000 },
                  ],
                  memo: t('اندازه‌گیری مجدد بدهی اجاره به دلیل تمدید', 'Remeasurement of the lease liability for the extension'),
                },
              ],
            },
          ],
          answer: {
            fa: 'اجاره جداگانه نیست؛ بدهی و دارایی هر دو 210,000 افزایش می‌یابند و استهلاک جدید 111,000 در سال است.',
            en: 'It is not a separate lease; the liability and the asset both rise by 210,000, and the new depreciation is 111,000 a year.',
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
              fa: 'قراردادی اجاره است که حق کنترل استفاده از یک دارایی مشخص را برای مدتی در برابر مابه‌ازا بدهد؛ قرارداد دکل معمولاً اجاره دکل به‌علاوه خدمات است.',
              en: 'A contract is a lease if it gives the right to control the use of an identified asset for a period in exchange for consideration; a rig contract is usually a rig lease plus services.',
            },
            {
              fa: 'اجاره‌های 12 ماه یا کمتر (بدون اختیار خرید) و اجاره دارایی‌های کم‌ارزش می‌توانند هزینه دوره شوند.',
              en: 'Leases of 12 months or less (with no purchase option) and leases of low-value assets may be expensed.',
            },
            {
              fa: 'بدهی اجاره ارزش فعلی پرداخت‌های آینده است (با نرخ ضمنی یا نرخ استقراض اضافی)؛ دارایی حق استفاده همان مبلغ به‌علاوه مخارج مستقیم اولیه و پرداخت‌های پیش از شروع، منهای مشوق‌ها، به‌علاوه برآورد بازسازی است.',
              en: 'The lease liability is the present value of future payments (at the implicit rate or the incremental borrowing rate); the right-of-use asset is that amount plus initial direct costs and early payments, less incentives, plus estimated restoration.',
            },
            {
              fa: 'بدهی با بهره زیاد و با پرداخت کم می‌شود؛ دارایی به‌طور خط مستقیم مستهلک می‌شود؛ هزینه کل تغییر نمی‌کند ولی در سال‌های اول بیشتر است.',
              en: 'The liability grows with interest and falls with payments; the asset is depreciated straight-line; total cost is unchanged but higher in the early years.',
            },
            {
              fa: 'تغییر قرارداد یا اجاره جداگانه است یا بدهی را با نرخ تجدیدنظرشده دوباره اندازه‌گیری می‌کند؛ اجاره‌ای که اپراتور به‌تنهایی امضا می‌کند معمولاً 100٪ در دفاتر اوست و حسابداری بعدی آن رویه‌های متفاوتی دارد.',
              en: 'A modification is either a separate lease or a remeasurement at a revised rate; a lease signed by the operator alone is usually 100% in its books, and the accounting after that varies in practice.',
            },
            {
              fa: 'ERP قرارداد اجاره را با داده پایه کامل نگه می‌دارد، جدول و ثبت‌ها را خودکار می‌سازد و باید دید IFRS و دید قرارداد نفتی را با هم داشته باشد.',
              en: 'The ERP keeps each lease with full master data, builds the schedule and postings automatically, and must hold both the IFRS view and the petroleum contract view.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'اجاره', en: 'Lease' },
              def: { fa: 'قراردادی که حق کنترل استفاده از یک دارایی مشخص را برای یک دوره در برابر مابه‌ازا منتقل می‌کند.', en: 'A contract that conveys the right to control the use of an identified asset for a period in exchange for consideration.' },
            },
            {
              term: { fa: 'دارایی حق استفاده', en: 'Right-of-use asset' },
              def: { fa: 'دارایی مستأجر که حق استفاده از دارایی اجاره‌ای را در طول مدت اجاره نشان می‌دهد.', en: 'The lessee’s asset representing its right to use the leased asset over the lease term.' },
            },
            {
              term: { fa: 'بدهی اجاره', en: 'Lease liability' },
              def: { fa: 'ارزش فعلی پرداخت‌های اجاره‌ای که هنوز پرداخت نشده‌اند.', en: 'The present value of the lease payments not yet paid.' },
            },
            {
              term: { fa: 'نرخ استقراض اضافی', en: 'Incremental borrowing rate' },
              def: { fa: 'نرخی که مستأجر برای قرض گرفتن مبلغی مشابه، برای مدتی مشابه و با وثیقه‌ای مشابه می‌پرداخت.', en: 'The rate the lessee would pay to borrow a similar amount, over a similar term, with similar security.' },
            },
            {
              term: { fa: 'مدت اجاره', en: 'Lease term' },
              def: { fa: 'دوره غیرقابل فسخ به‌علاوه دوره‌های تمدید یا فسخی که استفاده یا عدم استفاده از آن‌ها به‌طور معقول قطعی است.', en: 'The non-cancellable period plus extension or termination periods whose use or non-use is reasonably certain.' },
            },
            {
              term: { fa: 'مخارج مستقیم اولیه', en: 'Initial direct costs' },
              def: { fa: 'مخارج اضافی که فقط به دلیل بستن اجاره پیش می‌آید، مثل کارمزد کارگزار یا هزینه حقوقی.', en: 'Incremental costs incurred only because the lease was obtained, such as brokerage or legal fees.' },
            },
            {
              term: { fa: 'جزء غیراجاره‌ای', en: 'Non-lease component' },
              def: { fa: 'بخشی از قرارداد که خدمت است، مثل خدمه و نگهداری دکل.', en: 'A part of the contract that is a service, such as the rig crew and maintenance.' },
            },
            {
              term: { fa: 'تغییر قرارداد اجاره', en: 'Lease modification' },
              def: { fa: 'تغییر در دامنه یا مبلغ اجاره که در قرارداد اولیه نبود.', en: 'A change in the scope or price of a lease that was not part of the original terms.' },
            },
            {
              term: { fa: 'اجاره فرعی', en: 'Sublease' },
              def: { fa: 'اجاره‌ای که مستأجر اصلی دارایی را به طرف سومی (مثلاً مشارکت) می‌دهد.', en: 'A lease in which the original lessee passes the asset on to a third party (for example a joint operation).' },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: { fa: 'طبق IFRS 16 کدام قرارداد «اجاره است یا اجاره دارد»؟', en: 'Under IFRS 16, which contract “is, or contains, a lease”?' },
      options: [
        { fa: 'هر قراردادی که نامش «قرارداد اجاره» باشد', en: 'Any contract titled “lease agreement”' },
        { fa: 'قراردادی که حق کنترل استفاده از یک دارایی مشخص را برای یک دوره در برابر مابه‌ازا منتقل کند', en: 'A contract that conveys the right to control the use of an identified asset for a period in exchange for consideration' },
        { fa: 'هر قرارداد خدماتی بیش از 12 ماه', en: 'Any services contract longer than 12 months' },
        { fa: 'فقط قراردادهایی که در پایان آن مالکیت منتقل می‌شود', en: 'Only contracts where ownership transfers at the end' },
      ],
      answer: 1,
      explain: {
        fa: 'محتوا مهم است نه عنوان: دارایی مشخص، منافع اقتصادی و حق هدایت استفاده. قرارداد خدماتی بلندمدت بدون دارایی مشخص اجاره نیست، و انتقال مالکیت شرط اجاره نیست؛ بیشتر اجاره‌ها اصلاً مالکیت را منتقل نمی‌کنند.',
        en: 'Substance counts, not the title: an identified asset, the economic benefits and the right to direct its use. A long services contract with no identified asset is not a lease, and ownership transfer is not required; most leases never transfer ownership.',
      },
    },
    {
      q: {
        fa: 'در قرارداد دکل R-27، دکل با نام مشخص شده، مسار چاه و زمان حفاری را تعیین می‌کند و خدمه پیمانکار دکل را می‌گرداند. نتیجه چیست؟',
        en: 'In the rig R-27 contract, the rig is named, Masar decides the wells and timing, and the contractor’s crew operates it. What is the outcome?',
      },
      options: [
        { fa: 'کل قرارداد خدمت است، چون خدمه پیمانکار دکل را می‌گرداند', en: 'The whole contract is a service, because the contractor’s crew runs the rig' },
        { fa: 'کل مبلغ قرارداد باید اجاره ثبت شود', en: 'The whole contract amount must be recorded as a lease' },
        { fa: 'قرارداد بیرون از دامنه IFRS 16 است، چون به نفت و گاز مربوط است', en: 'The contract is outside IFRS 16 because it relates to oil and gas' },
        { fa: 'جزء اجاره دکل و جزء خدمات دارد که به نسبت قیمت‌های مستقل جدا می‌شوند', en: 'It contains a rig lease component and a services component, separated by relative stand-alone prices' },
      ],
      answer: 3,
      explain: {
        fa: 'دارایی مشخص است و مسار چگونگی و هدف استفاده را تعیین می‌کند، پس اجاره دکل وجود دارد؛ خدمه و نگهداری خدمات‌اند. گرداندن دکل به‌وسیله پیمانکار حق هدایت را از مسار نمی‌گیرد. استثنای نفت و گاز فقط برای حق اکتشاف و استفاده از خود منابع است، نه برای دکل.',
        en: 'The asset is identified and Masar decides how and for what purpose it is used, so there is a rig lease; crew and maintenance are services. The contractor operating the rig does not take the right to direct away from Masar. The oil and gas exclusion covers rights to explore for and use the resources themselves, not rigs.',
      },
    },
    {
      q: { fa: 'ارزش فعلی دو پرداخت سالانه 121,000 در پایان سال‌های 1 و 2 با نرخ 10٪ چقدر است؟', en: 'What is the present value of two annual payments of 121,000 at the end of years 1 and 2 at 10%?' },
      options: [
        { fa: '210,000', en: '210,000' },
        { fa: '242,000', en: '242,000' },
        { fa: '220,000', en: '220,000' },
        { fa: '200,000', en: '200,000' },
      ],
      answer: 0,
      explain: {
        fa: '121,000 ÷ 1.10 = 110,000 و 121,000 ÷ 1.21 = 100,000؛ جمع 210,000. عدد 242,000 جمع ساده بدون تنزیل است و 220,000 یعنی هر دو پرداخت فقط یک سال تنزیل شده‌اند.',
        en: '121,000 ÷ 1.10 = 110,000 and 121,000 ÷ 1.21 = 100,000; total 210,000. The figure 242,000 is the plain sum with no discounting, and 220,000 discounts both payments by only one year.',
      },
    },
    {
      q: {
        fa: 'مانده اول سال بدهی اجاره 364,100، نرخ 10٪ و پرداخت پایان سال 146,410 است. مانده پایان سال چقدر است؟',
        en: 'The lease liability opens the year at 364,100, the rate is 10% and the year-end payment is 146,410. What is the closing balance?',
      },
      options: [
        { fa: '217,690', en: '217,690' },
        { fa: '400,510', en: '400,510' },
        { fa: '254,100', en: '254,100' },
        { fa: '110,000', en: '110,000' },
      ],
      answer: 2,
      explain: {
        fa: '364,100 + بهره 36,410 منهای 146,410 = 254,100. عدد 217,690 بهره را جا انداخته، 400,510 پرداخت را، و 110,000 فقط کاهش اصل بدهی است، نه مانده.',
        en: '364,100 + interest of 36,410 minus 146,410 = 254,100. The figure 217,690 leaves out the interest, 400,510 leaves out the payment, and 110,000 is only the principal repaid, not the balance.',
      },
    },
    {
      q: {
        fa: 'بهای دارایی حق استفاده 468,000، مدت اجاره 4 سال و عمر مفید دارایی 10 سال است؛ مالکیت منتقل نمی‌شود و اختیار خرید ندارد. استهلاک سالانه چقدر است؟',
        en: 'A right-of-use asset costs 468,000, the lease term is 4 years and the asset’s useful life is 10 years; ownership does not transfer and there is no purchase option. What is the annual depreciation?',
      },
      options: [
        { fa: '46,800', en: '46,800' },
        { fa: '117,000', en: '117,000' },
        { fa: '146,410', en: '146,410' },
        { fa: 'صفر؛ دارایی حق استفاده مستهلک نمی‌شود', en: 'Nil; right-of-use assets are not depreciated' },
      ],
      answer: 1,
      explain: {
        fa: 'استهلاک در مدت کوتاه‌تر از مدت اجاره و عمر مفید است: 468,000 ÷ 4 = 117,000. عدد 46,800 عمر 10 ساله را به کار برده که فقط با انتقال مالکیت یا اختیار خرید قطعی درست است. 146,410 مبلغ اجاره است، نه استهلاک.',
        en: 'Depreciation runs over the shorter of the lease term and useful life: 468,000 ÷ 4 = 117,000. The figure 46,800 uses the 10-year life, which is right only if ownership transfers or a purchase option is reasonably certain. 146,410 is the rent, not depreciation.',
      },
    },
    {
      q: { fa: 'کدام قرارداد واجد معافیت اجاره کوتاه‌مدت است؟', en: 'Which contract qualifies for the short-term lease exemption?' },
      options: [
        { fa: 'اجاره 12 ماهه تجهیزات با اختیار خرید در پایان دوره', en: 'A 12-month equipment lease with a purchase option at the end' },
        { fa: 'اجاره 9 ماهه دکل با اختیار تمدید 2 ساله که استفاده از آن به‌طور معقول قطعی است', en: 'A 9-month rig lease with a 2-year extension that is reasonably certain to be used' },
        { fa: 'اجاره 10 ماهه جرثقیل بدون اختیار خرید یا تمدید', en: 'A 10-month crane hire with no purchase or extension option' },
        { fa: 'اجاره 5 ساله خودرو که فقط 11 ماه از آن مانده است', en: 'A 5-year car lease with only 11 months left to run' },
      ],
      answer: 2,
      explain: {
        fa: 'اجاره کوتاه‌مدت در روز شروع 12 ماه یا کمتر است و اختیار خرید ندارد. اجاره دارای اختیار خرید کوتاه‌مدت نیست، تمدید قطعی مدت را 33 ماه می‌کند، و مدت باقی‌مانده یک اجاره قدیمی ملاک نیست؛ مدت در روز شروع سنجیده می‌شود.',
        en: 'A short-term lease is 12 months or less at commencement with no purchase option. A lease with a purchase option is not short-term, a reasonably certain extension makes the term 33 months, and the remaining term of an old lease is not the test; the term is measured at commencement.',
      },
    },
    {
      q: { fa: 'بخش اصل بدهی از پرداخت‌های اجاره در صورت جریان‌های نقدی کجا نشان داده می‌شود؟', en: 'Where does the principal portion of lease payments appear in the cash flow statement?' },
      options: [
        { fa: 'فعالیت‌های عملیاتی', en: 'Operating activities' },
        { fa: 'فعالیت‌های سرمایه‌گذاری', en: 'Investing activities' },
        { fa: 'نشان داده نمی‌شود، چون غیرنقدی است', en: 'It is not shown, because it is non-cash' },
        { fa: 'فعالیت‌های تأمین مالی', en: 'Financing activities' },
      ],
      answer: 3,
      explain: {
        fa: 'بازپرداخت اصل بدهی اجاره مثل بازپرداخت وام است و در فعالیت‌های تأمین مالی می‌آید. پرداخت‌های اجاره کوتاه‌مدت و کم‌ارزش عملیاتی‌اند. خود شناسایی اولیه اجاره غیرنقدی است، اما پرداخت‌های بعدی نقدی‌اند و باید نشان داده شوند.',
        en: 'Repaying lease principal is like repaying a loan and goes in financing activities. Short-term and low-value lease payments are operating. The initial recognition of the lease is non-cash, but the later payments are cash and must be shown.',
      },
    },
    {
      q: {
        fa: 'مسار به‌عنوان اپراتور مشارکت (50٪)، قرارداد اجاره دکل را به‌تنهایی امضا کرده و مسئولیت اصلی پرداخت با اوست. طبق نظر کمیته تفسیر IFRS (2019)، مسار چه بدهی‌ای شناسایی می‌کند؟',
        en: 'As operator (50%), Masar signed the rig lease alone and carries primary responsibility for paying. Following the IFRS Interpretations Committee (2019), what liability does Masar recognise?',
      },
      options: [
        { fa: 'معمولاً 100٪ بدهی اجاره، و سپس بررسی می‌کند که آیا با مشارکت اجاره فرعی دارد', en: 'Usually 100% of the lease liability, then it assesses whether it has a sublease to the joint operation' },
        { fa: 'فقط 50٪، برابر سهم مشارکتش', en: 'Only 50%, equal to its working interest' },
        { fa: 'هیچ بدهی‌ای، چون دکل برای مشارکت کار می‌کند', en: 'None, because the rig works for the joint venture' },
        { fa: 'هر سه شریک 100٪ بدهی را ثبت می‌کنند', en: 'All three partners record 100% of the liability' },
      ],
      answer: 0,
      explain: {
        fa: 'شریک عملیات مشترک بدهی‌هایی را که مسئولیت اصلی آن‌ها را دارد شناسایی می‌کند؛ امضاکننده تنها معمولاً کل بدهی را ثبت می‌کند. ثبت فقط 50٪ ممکن است وسوسه‌انگیز باشد، اما مسئولیت در برابر پیمانکار 100٪ با مساری است که امضا کرده است. حسابداری بعدی (اجاره فرعی و بازیافت از شرکا) به واقعیت‌ها بستگی دارد و رویه‌ها متفاوت است.',
        en: 'A joint operator recognises the liabilities for which it has primary responsibility; the sole signatory usually records the whole liability. Recording only 50% is tempting, but the obligation to the contractor is 100% Masar’s as the signatory. The accounting after that (sublease and recoveries from partners) depends on the facts, and practice varies.',
      },
    },
    {
      q: {
        fa: 'در سال 1 اجاره محوطه لوله، بهره 46,410، استهلاک 117,000 و اجاره پرداختی 146,410 است. هزینه کل این اجاره در سود و زیان سال 1 چقدر است؟',
        en: 'In year 1 of the pipe-yard lease, interest is 46,410, depreciation 117,000 and rent paid 146,410. What is the total expense for this lease in year 1 profit or loss?',
      },
      options: [
        { fa: '146,410', en: '146,410' },
        { fa: '163,410', en: '163,410' },
        { fa: '117,000', en: '117,000' },
        { fa: '309,820', en: '309,820' },
      ],
      answer: 1,
      explain: {
        fa: 'هزینه طبق IFRS 16 بهره به‌علاوه استهلاک است: 46,410 + 117,000 = 163,410. عدد 146,410 پول پرداختی است که بخشی از آن بدهی را کم می‌کند و هزینه نیست. 309,820 پرداخت را هم با هزینه جمع کرده و هزینه را دو بار شمرده است.',
        en: 'The IFRS 16 expense is interest plus depreciation: 46,410 + 117,000 = 163,410. The figure 146,410 is the cash paid, which reduces the liability and is not an expense. 309,820 adds the payment on top of the expense and counts the cost twice.',
      },
    },
    {
      q: {
        fa: 'وقتی فاکتور اجاره‌دهنده برای قراردادی که در دفتر معین اجاره ثبت شده می‌رسد، ERP چه ثبتی باید بزند؟',
        en: 'When the lessor’s invoice arrives for a contract held in the lease sub-ledger, what should the ERP post?',
      },
      options: [
        { fa: 'بدهکار هزینه اجاره، بستانکار حساب‌های پرداختنی', en: 'Debit rent expense, credit accounts payable' },
        { fa: 'بدهکار دارایی حق استفاده، بستانکار حساب‌های پرداختنی', en: 'Debit right-of-use asset, credit accounts payable' },
        { fa: 'بدهکار بدهی اجاره، بستانکار حساب‌های پرداختنی', en: 'Debit lease liability, credit accounts payable' },
        { fa: 'بدهکار هزینه بهره، بستانکار حساب‌های پرداختنی', en: 'Debit interest expense, credit accounts payable' },
      ],
      answer: 2,
      explain: {
        fa: 'فاکتور، بدهی اجاره‌ای را که قبلاً شناسایی شده به حساب پرداختنی منتقل می‌کند؛ بهره و استهلاک جداگانه در اجرای ماهانه ثبت می‌شوند. ثبت به هزینه اجاره هزینه را دو بار ثبت می‌کند، و ثبت به دارایی یا بهره، دارایی یا بهره را بیش از واقع نشان می‌دهد.',
        en: 'The invoice moves the already recognised lease liability into accounts payable; interest and depreciation are posted separately by the monthly run. Posting to rent expense books the cost twice, and posting to the asset or to interest overstates them.',
      },
    },
  ],
}
