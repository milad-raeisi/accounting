import type { Lesson } from '../types'

/* Account titles used in this lesson. */
const ac = {
  cash: { fa: 'موجودی نقد', en: 'Cash' },
  ap: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
  inputVat: { fa: 'مالیات بر ارزش افزوده خرید', en: 'Input VAT' },
  machinery: { fa: 'ماشین‌آلات', en: 'Machinery' },
  accDepMach: { fa: 'استهلاک انباشته ماشین‌آلات', en: 'Accumulated depreciation (machinery)' },
  accImpMach: { fa: 'کاهش ارزش انباشته ماشین‌آلات', en: 'Accumulated impairment (machinery)' },
  vehicles: { fa: 'وسایط نقلیه', en: 'Vehicles' },
  accDepVeh: { fa: 'استهلاک انباشته وسایط نقلیه', en: 'Accumulated depreciation (vehicles)' },
  equipment: { fa: 'تجهیزات', en: 'Equipment' },
  accDepEq: { fa: 'استهلاک انباشته تجهیزات', en: 'Accumulated depreciation (equipment)' },
  officeEq: { fa: 'اثاثه و تجهیزات اداری', en: 'Office equipment' },
  accDepOffice: { fa: 'استهلاک انباشته اثاثه و تجهیزات اداری', en: 'Accumulated depreciation (office equipment)' },
  land: { fa: 'زمین', en: 'Land' },
  revSurplus: { fa: 'مازاد تجدید ارزیابی', en: 'Revaluation surplus' },
  depExp: { fa: 'هزینه استهلاک', en: 'Depreciation expense' },
  repairs: { fa: 'هزینه تعمیر و نگهداری', en: 'Repairs and maintenance expense' },
  training: { fa: 'هزینه آموزش', en: 'Training expense' },
  fuel: { fa: 'هزینه سوخت و انرژی', en: 'Fuel and energy expense' },
  fines: { fa: 'هزینه جرائم', en: 'Fines and penalties expense' },
  gain: { fa: 'سود فروش دارایی ثابت', en: 'Gain on disposal of fixed assets' },
  loss: { fa: 'زیان فروش و کنارگذاری دارایی ثابت', en: 'Loss on disposal of fixed assets' },
  impLoss: { fa: 'زیان کاهش ارزش', en: 'Impairment loss' },
}

const year = (n: number) => ({ fa: `سال ${n}`, en: `Year ${n}` })
const blank = { fa: '', en: '' }
const total = { fa: 'جمع', en: 'Total' }

export const lesson: Lesson = {
  slug: 'fixed-assets',
  number: 15,
  level: 'advanced',
  minutes: 35,
  icon: 'Building2',
  tone: 'asset',
  title: { fa: 'دارایی‌های ثابت مشهود و استهلاک', en: 'Property, Plant and Equipment' },
  summary: {
    fa: 'از خرید تا کنارگذاری یک دارایی ثابت را دنبال کنید: بهای تمام‌شده را درست بسازید، با سه روش استهلاک بگیرید، تغییر برآورد را ثبت کنید، سود یا زیان فروش را بسنجید و با کاهش ارزش، تجدید ارزیابی و دفتر اموال آشنا شوید.',
    en: 'Follow a fixed asset from purchase to disposal: build its cost correctly, depreciate it by three methods, handle a change in estimate, measure the gain or loss on sale, and meet impairment, revaluation and the fixed-asset register.',
  },
  objectives: [
    {
      fa: 'تشخیص دهید چه مخارجی جزو بهای تمام‌شده دارایی ثابت است و چه مخارجی هزینه دوره',
      en: 'Decide which costs belong in the cost of a fixed asset and which are expenses of the period',
    },
    {
      fa: 'استهلاک را به روش‌های خط مستقیم، نزولی و واحد تولید محاسبه و مقایسه کنید',
      en: 'Compute and compare depreciation by the straight-line, declining-balance and units-of-production methods',
    },
    {
      fa: 'استهلاک بخشی از سال و اثر تغییر در برآورد عمر مفید یا ارزش اسقاط را محاسبه کنید',
      en: 'Compute part-year depreciation and the effect of a change in useful life or residual value',
    },
    {
      fa: 'فروش و اسقاط دارایی ثابت را با سود یا زیان آن ثبت کنید',
      en: 'Record the sale and scrapping of a fixed asset, with its gain or loss',
    },
    {
      fa: 'کاهش ارزش، مدل تجدید ارزیابی و کار با دفتر اموال را در سطح مقدماتی توضیح دهید',
      en: 'Explain impairment, the revaluation model and the fixed-asset register at an introductory level',
    },
  ],
  sections: [
    /* ───────────────────────────── 1 ───────────────────────────── */
    {
      id: 'what-is-ppe',
      title: { fa: 'دارایی ثابت مشهود چیست؟', en: 'What Is Property, Plant and Equipment?' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'نانوایی شیرین هر ماه حدود 15,000 سود دارد. این ماه یک فر صنعتی به بهای 90,000 می‌خرد که دست‌کم 6 سال کار می‌کند. اگر کل 90,000 را هزینه همین ماه بدانیم، نانوایی در ماه خرید زیانی معادل 75,000 نشان می‌دهد و در 71 ماه بعد، که فر همچنان نان می‌پزد، سودی بیش از واقع. راه درست این است که فر را **دارایی** ثبت کنیم و بهای آن را با **استهلاک** میان ماه‌هایی که از آن استفاده می‌شود پخش کنیم: 90,000 ÷ 72 ماه = 1,250 در ماه.',
            en: 'Shirin Bakery earns about 15,000 a month. This month it buys an industrial oven for 90,000 that will work for at least 6 years. If the whole 90,000 were treated as this month’s expense, the bakery would report a 75,000 loss in the month of purchase and overstated profits for the next 71 months while the oven keeps baking. The right way is to record the oven as an **asset** and spread its cost over the months that use it through **depreciation**: 90,000 ÷ 72 months = 1,250 a month.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**دارایی‌های ثابت مشهود** اقلام فیزیکی‌ای هستند که واحد تجاری آن‌ها را برای تولید یا عرضه کالا و خدمات، اجاره دادن به دیگران یا کارهای اداری نگه می‌دارد و انتظار دارد **بیش از یک دوره مالی** از آن‌ها استفاده کند. یک قلم فقط وقتی دارایی ثابت شناسایی می‌شود که (1) جریان منافع اقتصادی آینده از آن به واحد تجاری **محتمل** باشد و (2) بهای تمام‌شده آن **به‌طور قابل اتکا** اندازه‌گیری شود.',
            en: '**Property, plant and equipment (PP&E)** are physical items a business holds to produce or supply goods and services, to rent to others or for administrative use, and expects to use for **more than one period**. An item is recognised as PP&E only when (1) future economic benefits from it are **probable** and (2) its cost can be **measured reliably**.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**زمین**: محل کارخانه، دفتر یا انبار. زمین عمر محدود ندارد و مستهلک نمی‌شود.',
              en: '**Land**: the site of a factory, office or warehouse. Land has no limited life and is not depreciated.',
            },
            {
              fa: '**ساختمان**: کارخانه، انبار، دفتر مرکزی، فروشگاه.',
              en: '**Buildings**: factory, warehouse, head office, shop.',
            },
            {
              fa: '**ماشین‌آلات و تجهیزات**: خط تولید، دستگاه بسته‌بندی، فر صنعتی، ابزار کارگاه.',
              en: '**Machinery and equipment**: production line, packaging machine, industrial oven, workshop tools.',
            },
            {
              fa: '**وسایط نقلیه**: وانت پخش، کامیون، لیفتراک.',
              en: '**Vehicles**: delivery van, truck, forklift.',
            },
            {
              fa: '**اثاثه و تجهیزات اداری**: میز و صندلی، رایانه، سرور، چاپگر.',
              en: '**Furniture and office equipment**: desks and chairs, computers, servers, printers.',
            },
          ],
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'دارایی ثابت مشهود', en: 'Property, plant and equipment' },
            items: [
              { fa: 'برای **استفاده** در کسب‌وکار نگهداری می‌شود', en: 'Held to be **used** in the business' },
              { fa: 'بیش از یک دوره مالی استفاده می‌شود', en: 'Used for more than one period' },
              { fa: 'بهای آن با استهلاک به هزینه تبدیل می‌شود', en: 'Its cost becomes expense through depreciation' },
              { fa: 'مثال: وانتی که یک شرکت پخش با آن کالا می‌رساند', en: 'Example: the van a distributor uses to deliver goods' },
            ],
          },
          right: {
            title: { fa: 'موجودی کالا', en: 'Inventory' },
            items: [
              { fa: 'برای **فروش** نگهداری می‌شود', en: 'Held to be **sold**' },
              { fa: 'معمولاً در همان دوره یا دوره بعد فروخته می‌شود', en: 'Usually sold within the period or the next one' },
              { fa: 'هنگام فروش به بهای تمام‌شده کالای فروش‌رفته تبدیل می‌شود', en: 'Becomes cost of goods sold when sold' },
              { fa: 'مثال: همان وانت در نمایشگاه فروش خودرو', en: 'Example: the same van on a car dealer’s lot' },
            ],
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: سقف اهمیت', en: 'In practice: a capitalisation threshold' },
          text: {
            fa: 'منگنه و ماشین‌حساب هم چند سال کار می‌کنند، اما ثبت آن‌ها به‌عنوان دارایی و محاسبه استهلاک برایشان ارزش زحمتش را ندارد. شرکت‌ها در **رویه حسابداری** خود سقفی تعیین می‌کنند (مثلاً اقلام زیر 2,000) و اقلام کوچک‌تر را مستقیماً هزینه می‌کنند. این سقف باید مکتوب باشد و هر سال یکسان اجرا شود.',
            en: 'A stapler and a calculator also last for years, but recording them as assets and depreciating them is not worth the effort. Companies set a threshold in their **accounting policy** (for example, items under 2,000) and expense smaller items directly. The threshold should be written down and applied the same way every year.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'پیوند با درس‌های قبل', en: 'Link to earlier lessons' },
          text: {
            fa: 'در درس ثبت‌های اصلاحی، تجهیزات 20,000 استودیو طراحی نوا را با روش خط مستقیم ماهی 300 مستهلک کردیم. این درس همان ایده را کامل می‌کند: بهای تمام‌شده دقیقاً چیست، روش‌های دیگر کدام‌اند و وقتی دارایی فروخته یا کنار گذاشته می‌شود چه ثبتی لازم است.',
            en: 'In the lesson on adjusting entries we depreciated Nova Design Studio’s 20,000 of equipment by 300 a month on a straight-line basis. This lesson completes the idea: what exactly cost includes, which other methods exist, and what to record when an asset is sold or retired.',
          },
        },
      ],
    },
    /* ───────────────────────────── 2 ───────────────────────────── */
    {
      id: 'cost',
      title: { fa: 'بهای تمام‌شده دارایی ثابت', en: 'Measuring the Cost of an Asset' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'دارایی ثابت در زمان خرید به **بهای تمام‌شده** ثبت می‌شود: همه مخارجی که برای رساندن دارایی به **محل** و **وضعیت آماده بهره‌برداری** لازم است. هر مخارجی که پس از آماده شدن دارایی رخ دهد، یا ربطی به آماده کردن آن نداشته باشد، هزینه دوره است.',
            en: 'A fixed asset is recorded at **cost** when acquired: every outlay needed to bring it to its **location** and **working condition**. Anything spent after the asset is ready, or not needed to make it ready, is an expense of the period.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'بهای تمام‌شده = قیمت خرید − تخفیف تجاری + حقوق گمرکی و مالیات‌های غیرقابل استرداد + مخارج مستقیم آماده‌سازی',
            en: 'Cost = Purchase price − Trade discounts + Non-refundable duties and taxes + Directly attributable costs',
          },
          note: {
            fa: 'مخارج مستقیم آماده‌سازی: حمل، بیمه در مسیر، آماده‌سازی محل، نصب و راه‌اندازی، آزمایش و حق‌الزحمه مهندسان نصب.',
            en: 'Directly attributable costs: freight, insurance in transit, site preparation, installation and assembly, testing and the fees of installation engineers.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'جزو بهای تمام‌شده (سرمایه‌ای)', en: 'Part of cost (capitalised)' },
            items: [
              { fa: 'قیمت خرید پس از کسر تخفیف تجاری', en: 'Purchase price net of trade discounts' },
              { fa: 'حقوق ورودی و مالیاتی که قابل استرداد یا کسر نیست', en: 'Import duties and taxes that cannot be recovered' },
              { fa: 'حمل و بیمه تا محل نصب', en: 'Freight and insurance to the site' },
              { fa: 'فونداسیون، نصب، راه‌اندازی و آزمایش', en: 'Foundations, installation, commissioning and testing' },
            ],
          },
          right: {
            title: { fa: 'جزو بهای تمام‌شده نیست (هزینه)', en: 'Not part of cost (expensed)' },
            items: [
              {
                fa: 'مالیات بر ارزش افزوده‌ای که قابل کسر از مالیات فروش است',
                en: 'VAT that can be reclaimed against output VAT',
              },
              { fa: 'آموزش کارکنان برای کار با دستگاه', en: 'Training staff to use the machine' },
              {
                fa: 'خسارت ناشی از بی‌احتیاطی، جریمه‌ها و تعمیر آسیب‌های بین راه',
                en: 'Damage from carelessness, fines and repairs of damage in transit',
              },
              {
                fa: 'سربار اداری عمومی و هزینه‌های پس از آماده بهره‌برداری (برق، مواد، بیمه سالانه)',
                en: 'General overheads and running costs after the asset is ready (power, materials, annual insurance)',
              },
            ],
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'شرکت تولیدی البرز: بهای تمام‌شده دستگاه پرکن (در این مثال نرخ مالیات بر ارزش افزوده 10٪ فرض شده و قابل کسر است)',
            en: 'Alborz Manufacturing: cost of a filling machine (VAT is assumed at 10% in this example and is reclaimable)',
          },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'مبلغ', en: 'Amount' },
            { fa: 'جزو بها؟', en: 'In cost?' },
            { fa: 'بهای تمام‌شده', en: 'Cost' },
          ],
          numericCols: [1, 3],
          rows: [
            [
              { fa: 'قیمت فهرست 160,000 منهای تخفیف تجاری 5٪ (8,000)', en: 'List price 160,000 less a 5% trade discount (8,000)' },
              152000,
              { fa: 'بله', en: 'Yes' },
              152000,
            ],
            [{ fa: 'مالیات بر ارزش افزوده (10٪ × 152,000)', en: 'VAT (10% × 152,000)' }, 15200, { fa: 'خیر، قابل کسر است', en: 'No, reclaimable' }, blank],
            [{ fa: 'حمل تا کارخانه', en: 'Freight to the factory' }, 3000, { fa: 'بله', en: 'Yes' }, 3000],
            [{ fa: 'بیمه در مسیر', en: 'Insurance in transit' }, 1000, { fa: 'بله', en: 'Yes' }, 1000],
            [{ fa: 'نصب و فونداسیون', en: 'Installation and foundation' }, 2500, { fa: 'بله', en: 'Yes' }, 2500],
            [{ fa: 'آزمایش و راه‌اندازی', en: 'Testing and commissioning' }, 1500, { fa: 'بله', en: 'Yes' }, 1500],
            [{ fa: 'آموزش اپراتورها', en: 'Operator training' }, 2000, { fa: 'خیر، هزینه', en: 'No, expense' }, blank],
            [
              { fa: 'تعمیر آسیب ناشی از تخلیه بی‌احتیاط', en: 'Repair of damage from careless unloading' },
              800,
              { fa: 'خیر، هزینه', en: 'No, expense' },
              blank,
            ],
            [{ fa: 'بهای تمام‌شده دستگاه', en: 'Cost of the machine' }, blank, blank, 160000],
          ],
        },
        {
          type: 'journal',
          title: { fa: 'ثبت خرید دستگاه پرکن', en: 'Recording the filling machine' },
          entries: [
            {
              lines: [
                { account: ac.machinery, debit: 160000 },
                { account: ac.inputVat, debit: 15200 },
                { account: ac.training, debit: 2000 },
                { account: ac.repairs, debit: 800 },
                { account: ac.ap, credit: 167200 },
                { account: ac.cash, credit: 10800 },
              ],
              memo: {
                fa: 'دستگاه و مالیات آن (152,000 + 15,200) نسیه از فروشنده؛ حمل، بیمه، نصب، آزمایش، آموزش و تعمیر (10,800) نقدی.',
                en: 'Machine and its VAT (152,000 + 15,200) on account with the supplier; freight, insurance, installation, testing, training and repair (10,800) in cash.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'مالیات بر ارزش افزوده خرید', en: 'VAT on the purchase' },
          text: {
            fa: 'اگر شرکت بتواند مالیات بر ارزش افزوده خرید را از مالیات فروش خود کسر کند، این مبلغ هزینه یا بخشی از بهای دارایی نیست، بلکه طلبی از اداره مالیات است. اگر قابل کسر نباشد (مثلاً صورت‌حساب معتبر ندارد یا فعالیت شرکت معاف است)، به بهای تمام‌شده دارایی اضافه می‌شود. جزئیات را در درس «بدهی‌ها، حقوق و دستمزد و مالیات بر ارزش افزوده» می‌بینید.',
            en: 'If the company can deduct the input VAT from its output VAT, that amount is neither an expense nor part of the asset’s cost: it is a claim on the tax office. If it cannot be deducted (for example, there is no valid tax invoice or the company’s activity is exempt), it is added to the asset’s cost. The details are in the lesson “Liabilities, Payroll and VAT”.',
          },
        },
        {
          type: 'h',
          text: { fa: 'زمین و خرید یکجا', en: 'Land and lump-sum purchases' },
        },
        {
          type: 'p',
          text: {
            fa: 'بهای **زمین** شامل قیمت خرید، هزینه‌های انتقال سند و دفترخانه، کمیسیون مشاور املاک، تسطیح و تخریب ساختمان کهنه (منهای فروش مصالح آن) است. زمین مستهلک نمی‌شود، اما ساختمانِ روی آن مستهلک می‌شود؛ پس اگر زمین و ساختمان **یکجا** خریده شوند، باید بها را به نسبت ارزش منصفانه هر جزء میان آن‌ها تقسیم کنیم. مثال: شرکتی زمین و ساختمانی را یکجا 900,000 می‌خرد و کارشناس رسمی ارزش زمین را 400,000 و ساختمان را 600,000 برآورد می‌کند.',
            en: 'The cost of **land** includes the price, title-transfer and notary fees, the estate agent’s commission, levelling, and demolishing any old building (less the salvage sold). Land is not depreciated but the building on it is, so when land and building are bought **for one price**, the cost must be split in proportion to each part’s fair value. Example: a company buys land and a building together for 900,000; a licensed appraiser values the land at 400,000 and the building at 600,000.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'تخصیص بهای خرید یکجا', en: 'Allocating a lump-sum price' },
          head: [
            { fa: 'جزء', en: 'Part' },
            { fa: 'ارزش کارشناسی', en: 'Appraised value' },
            { fa: 'سهم', en: 'Share' },
            { fa: 'بهای تخصیص‌یافته', en: 'Cost allocated' },
          ],
          numericCols: [1, 3],
          rows: [
            [ac.land, 400000, { fa: '40٪', en: '40%' }, 360000],
            [{ fa: 'ساختمان', en: 'Building' }, 600000, { fa: '60٪', en: '60%' }, 540000],
            [total, 1000000, { fa: '100٪', en: '100%' }, 900000],
          ],
        },
        {
          type: 'h',
          text: { fa: 'مخارج سرمایه‌ای و مخارج جاری', en: 'Capital vs revenue expenditure' },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'مخارج سرمایه‌ای: به حساب دارایی', en: 'Capital expenditure: added to the asset' },
            items: [
              { fa: 'عمر مفید را افزایش می‌دهد', en: 'Extends the useful life' },
              { fa: 'ظرفیت یا کیفیت خروجی را بالا می‌برد', en: 'Increases capacity or output quality' },
              { fa: 'هزینه‌های عملیاتی آینده را به‌طور محسوس کم می‌کند', en: 'Substantially cuts future operating costs' },
              { fa: 'مثال: تعویض موتور، افزودن طبقه، ارتقای خط تولید', en: 'Examples: engine replacement, an added floor, a production-line upgrade' },
            ],
          },
          right: {
            title: { fa: 'مخارج جاری: هزینه همان دوره', en: 'Revenue expenditure: expensed now' },
            items: [
              { fa: 'دارایی را فقط در وضعیت فعلی نگه می‌دارد', en: 'Only keeps the asset in its current condition' },
              { fa: 'تکرارشونده و معمولاً کوچک است', en: 'Recurring and usually small' },
              { fa: 'عمر یا ظرفیت را افزایش نمی‌دهد', en: 'Adds no life or capacity' },
              { fa: 'مثال: تعویض روغن، لاستیک، رنگ‌آمیزی، سرویس دوره‌ای', en: 'Examples: oil change, tyres, repainting, routine service' },
            ],
          },
        },
        {
          type: 'journal',
          title: { fa: 'وانت پخش: تعمیر جاری در برابر تعویض موتور', en: 'Delivery van: routine repair vs engine replacement' },
          entries: [
            {
              lines: [
                { account: ac.repairs, debit: 2500 },
                { account: ac.cash, credit: 2500 },
              ],
              memo: { fa: 'تعویض روغن و لاستیک: مخارج جاری.', en: 'Oil change and tyres: revenue expenditure.' },
            },
            {
              lines: [
                { account: ac.vehicles, debit: 18000 },
                { account: ac.cash, credit: 18000 },
              ],
              memo: {
                fa: 'تعویض موتور که عمر وانت را 3 سال افزایش می‌دهد: مخارج سرمایه‌ای. (طبق IFRS، اگر موتور قدیمی هنوز ارزش دفتری داشته باشد، آن مبلغ از دفاتر حذف می‌شود.)',
                en: 'Engine replacement that adds 3 years to the van’s life: capital expenditure. (Under IFRS, any remaining book value of the old engine is removed from the books.)',
              },
            },
          ],
        },
      ],
    },
    /* ───────────────────────────── 3 ───────────────────────────── */
    {
      id: 'methods',
      title: { fa: 'روش‌های استهلاک', en: 'Depreciation Methods' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**استهلاک** تخصیص منظم **مبلغ استهلاک‌پذیر** دارایی در طول **عمر مفید** آن است. مبلغ استهلاک‌پذیر یعنی بهای تمام‌شده منهای **ارزش اسقاط** (ارزش باقیمانده: مبلغی که انتظار داریم در پایان عمر مفید از فروش دارایی به دست آید). عمر مفید را می‌توان به سال یا به مقدار کار (ساعت کار، کیلومتر، تعداد تولید) بیان کرد. استهلاک از زمانی آغاز می‌شود که دارایی **آماده بهره‌برداری** است، نه از روز خرید. استهلاک روشی برای تخصیص بهاست و قیمت بازار دارایی را دنبال نمی‌کند.',
            en: '**Depreciation** is the systematic allocation of an asset’s **depreciable amount** over its **useful life**. The depreciable amount is cost minus **residual value** (also called salvage value: what we expect to get for the asset at the end of its useful life). Useful life can be expressed in years or in units of work (machine hours, kilometres, units produced). Depreciation starts when the asset is **available for use**, not on the purchase date. It is a cost-allocation method; it does not track the asset’s market price.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'مبلغ استهلاک‌پذیر = بهای تمام‌شده − ارزش اسقاط = 160,000 − 10,000 = 150,000',
            en: 'Depreciable amount = Cost − Residual value = 160,000 − 10,000 = 150,000',
          },
          note: {
            fa: 'دستگاه پرکن البرز در ابتدای سال 1 آماده بهره‌برداری شد. عمر مفید: 5 سال، یا تولید 300,000 واحد محصول.',
            en: 'Alborz’s filling machine became ready for use at the start of Year 1. Useful life: 5 years, or 300,000 units of output.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'خط مستقیم: استهلاک سالانه = (بهای تمام‌شده − ارزش اسقاط) ÷ عمر مفید = 150,000 ÷ 5 = 30,000',
            en: 'Straight-line: annual depreciation = (Cost − Residual value) ÷ Useful life = 150,000 ÷ 5 = 30,000',
          },
          note: {
            fa: 'هر سال مبلغی یکسان؛ مناسب دارایی‌هایی که منافعشان به‌طور یکنواخت مصرف می‌شود.',
            en: 'The same charge every year; suits assets whose benefits are used up evenly.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'در **روش نزولی**، نرخ ثابتی هر سال روی **ارزش دفتری ابتدای سال** اعمال می‌شود؛ پس استهلاک سال‌های اول بیشتر است و به‌تدریج کم می‌شود. رایج‌ترین شکل آن **نزولی مضاعف** است که نرخش دو برابر نرخ خط مستقیم است: 2 ÷ 5 = 40٪. در این روش ارزش اسقاط هنگام ضرب کسر نمی‌شود، اما ارزش دفتری هرگز نباید از آن پایین‌تر برود؛ پس استهلاک سال آخر عددی است که ارزش دفتری را دقیقاً به 10,000 برساند.',
            en: 'Under the **declining-balance method**, a fixed rate is applied each year to the **opening book value**, so depreciation is highest in the first years and then falls. Its most common form is **double-declining balance**, whose rate is twice the straight-line rate: 2 ÷ 5 = 40%. Residual value is not deducted before applying the rate, but book value must never fall below it, so the final year’s charge is whatever brings book value to exactly 10,000.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'نزولی مضاعف: استهلاک سال = ارزش دفتری ابتدای سال × (2 ÷ عمر مفید)',
            en: 'Double-declining balance: depreciation = Opening book value × (2 ÷ Useful life)',
          },
          note: {
            fa: 'سال 1: 160,000 × 40٪ = 64,000. سال 2: (160,000 − 64,000) × 40٪ = 96,000 × 40٪ = 38,400.',
            en: 'Year 1: 160,000 × 40% = 64,000. Year 2: (160,000 − 64,000) × 40% = 96,000 × 40% = 38,400.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'واحد تولید: نرخ هر واحد = مبلغ استهلاک‌پذیر ÷ کل تولید مورد انتظار = 150,000 ÷ 300,000 = 0.5',
            en: 'Units of production: rate per unit = Depreciable amount ÷ Total expected output = 150,000 ÷ 300,000 = 0.5',
          },
          note: {
            fa: 'استهلاک سال = تولید همان سال × 0.5. سال 1 با 80,000 واحد تولید: 80,000 × 0.5 = 40,000.',
            en: 'Depreciation for a year = that year’s output × 0.5. Year 1 with 80,000 units: 80,000 × 0.5 = 40,000.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'دستگاه پرکن البرز: استهلاک و ارزش دفتری پایان سال به سه روش (تولید سالانه: 80,000، 70,000، 60,000، 50,000 و 40,000 واحد)',
            en: 'Alborz’s filling machine: depreciation and year-end book value by three methods (output: 80,000, 70,000, 60,000, 50,000 and 40,000 units)',
          },
          head: [
            { fa: 'سال', en: 'Year' },
            { fa: 'خط مستقیم', en: 'Straight-line' },
            { fa: 'ارزش دفتری', en: 'Book value' },
            { fa: 'نزولی مضاعف', en: 'Double-declining' },
            { fa: 'ارزش دفتری', en: 'Book value' },
            { fa: 'واحد تولید', en: 'Units of production' },
            { fa: 'ارزش دفتری', en: 'Book value' },
          ],
          numericCols: [1, 2, 3, 4, 5, 6],
          rows: [
            [year(1), 30000, 130000, 64000, 96000, 40000, 120000],
            [year(2), 30000, 100000, 38400, 57600, 35000, 85000],
            [year(3), 30000, 70000, 23040, 34560, 30000, 55000],
            [year(4), 30000, 40000, 13824, 20736, 25000, 30000],
            [year(5), 30000, 10000, 10736, 10000, 20000, 10000],
            [total, 150000, blank, 150000, blank, 150000, blank],
          ],
        },
        {
          type: 'table',
          caption: { fa: 'مقایسه سه روش استهلاک', en: 'Comparing the three methods' },
          head: [
            { fa: 'روش', en: 'Method' },
            { fa: 'مبنای محاسبه', en: 'Basis' },
            { fa: 'الگوی هزینه', en: 'Expense pattern' },
            { fa: 'مناسب برای', en: 'Suits' },
          ],
          rows: [
            [
              { fa: 'خط مستقیم', en: 'Straight-line' },
              { fa: 'مبلغ استهلاک‌پذیر ÷ سال‌های عمر', en: 'Depreciable amount ÷ years of life' },
              { fa: 'یکسان در هر سال', en: 'Equal every year' },
              { fa: 'ساختمان، اثاثه، بیشتر دارایی‌ها', en: 'Buildings, furniture, most assets' },
            ],
            [
              { fa: 'نزولی (مضاعف)', en: 'Declining (double)' },
              { fa: 'نرخ ثابت × ارزش دفتری ابتدای سال', en: 'Fixed rate × opening book value' },
              { fa: 'زیاد در آغاز، کاهنده', en: 'High early, then falling' },
              { fa: 'خودرو، رایانه، فناوری‌ای که زود کهنه می‌شود', en: 'Vehicles, computers, technology that ages fast' },
            ],
            [
              { fa: 'واحد تولید', en: 'Units of production' },
              { fa: 'نرخ هر واحد × کار انجام‌شده', en: 'Rate per unit × work done' },
              { fa: 'تابع میزان استفاده', en: 'Follows actual use' },
              { fa: 'ماشین‌آلات تولید، کامیون (بر حسب کیلومتر)', en: 'Production machines, trucks (per kilometre)' },
            ],
          ],
        },
        {
          type: 'diagram',
          id: 'depreciation',
          caption: {
            fa: 'با لغزنده‌ها بهای تمام‌شده، ارزش اسقاط و عمر مفید را تغییر دهید و منحنی ارزش دفتری را در روش خط مستقیم و نزولی مضاعف مقایسه کنید. هر دو منحنی به ارزش اسقاط می‌رسند؛ فقط مسیرشان فرق دارد.',
            en: 'Use the sliders to change cost, residual value and useful life, and compare the book-value curves under straight-line and double-declining balance. Both curves end at the residual value; only the path differs.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت استهلاک سال 1 (خط مستقیم)', en: 'Recording Year 1 depreciation (straight-line)' },
          entries: [
            {
              date: { fa: 'پایان سال 1', en: 'End of Year 1' },
              lines: [
                { account: ac.depExp, debit: 30000 },
                { account: ac.accDepMach, credit: 30000 },
              ],
              memo: {
                fa: 'در ترازنامه: ماشین‌آلات 160,000 منهای استهلاک انباشته 30,000 = ارزش دفتری 130,000.',
                en: 'On the balance sheet: Machinery 160,000 less accumulated depreciation 30,000 = book value 130,000.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: استهلاک دفتری و مالیاتی', en: 'In practice: book vs tax depreciation' },
          text: {
            fa: 'طبق استانداردهای حسابداری (IAS 16 و استاندارد حسابداری شماره 11 ایران)، روش استهلاک باید الگوی مصرف منافع دارایی را نشان دهد و عمر مفید، ارزش اسقاط و روش دست‌کم در پایان هر سال بازبینی شوند. برای مالیات، **جدول استهلاکات** موضوع قانون مالیات‌های مستقیم نرخ یا مدت هر گروه دارایی را تعیین می‌کند. بسیاری از شرکت‌های ایرانی برای سادگی همان نرخ‌ها را در دفاتر به کار می‌برند؛ این کار فقط وقتی درست است که با عمر واقعی دارایی سازگار باشد. نرخ‌های جدول را از آخرین نسخه آن بررسی کنید.',
            en: 'Under accounting standards (IAS 16 and Iran’s accounting standard No. 11), the depreciation method must reflect how the asset’s benefits are consumed, and useful life, residual value and method are reviewed at least at each year-end. For tax, the **depreciation table** issued under Iran’s Direct Taxes Act sets a rate or a period for each asset group. Many Iranian companies use those rates in their books for simplicity; that is acceptable only when they fit the asset’s real life. Check the rates in the latest version of the table.',
          },
        },
      ],
    },
    /* ───────────────────────────── 4 ───────────────────────────── */
    {
      id: 'part-year-estimates',
      title: { fa: 'استهلاک بخشی از سال و تغییر برآورد', en: 'Part-Year Depreciation and Changes in Estimate' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'دارایی‌ها همیشه روز اول سال آماده بهره‌برداری نمی‌شوند. فرض کنید دستگاه پرکن البرز به‌جای ابتدای سال، در **ابتدای ماه 4** آماده شده باشد. در سال 1 فقط 9 ماه از آن استفاده شده است، پس استهلاک سال 1 هم فقط برای 9 ماه محاسبه می‌شود.',
            en: 'Assets are not always ready on the first day of the year. Suppose Alborz’s filling machine had been ready at the **start of month 4** instead. It was used for only 9 months of Year 1, so Year 1 depreciation covers only 9 months.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'استهلاک بخشی از سال = استهلاک یک سال کامل × تعداد ماه‌های استفاده ÷ 12',
            en: 'Part-year depreciation = Full-year depreciation × Months in use ÷ 12',
          },
          note: {
            fa: 'خط مستقیم: 30,000 × 9/12 = 22,500. نزولی مضاعف: 64,000 × 9/12 = 48,000. در روش واحد تولید نیازی به این تناسب نیست، چون تولید واقعی همان 9 ماه مبنای محاسبه است.',
            en: 'Straight-line: 30,000 × 9/12 = 22,500. Double-declining: 64,000 × 9/12 = 48,000. Units of production needs no proration, because the actual output of those 9 months is the base.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'دستگاه آماده‌شده در ابتدای ماه 4: دو سال نخست',
            en: 'Machine ready at the start of month 4: the first two years',
          },
          head: [
            { fa: 'سال', en: 'Year' },
            { fa: 'خط مستقیم', en: 'Straight-line' },
            { fa: 'محاسبه نزولی مضاعف', en: 'Double-declining working' },
            { fa: 'نزولی مضاعف', en: 'Double-declining' },
          ],
          numericCols: [1, 3],
          rows: [
            [year(1), 22500, { fa: '160,000 × 40٪ × 9/12', en: '160,000 × 40% × 9/12' }, 48000],
            [year(2), 30000, { fa: '(160,000 − 48,000) × 40٪', en: '(160,000 − 48,000) × 40%' }, 44800],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: استهلاک ماهانه', en: 'In practice: monthly depreciation' },
          text: {
            fa: 'نرم‌افزارهای حسابداری ایرانی معمولاً استهلاک را **ماهانه** محاسبه می‌کنند و هر ماه یک سند استهلاک صادر می‌کنند. بسیاری از شرکت‌ها استهلاک را از ماهی آغاز می‌کنند که دارایی آماده بهره‌برداری شده است؛ برخی دیگر قاعده «نیم‌سال» را به کار می‌برند. هر رویه‌ای که انتخاب می‌کنید باید مکتوب و یکنواخت باشد. قواعد مالیاتی شروع استهلاک را هم از آخرین مقررات بررسی کنید.',
            en: 'Iranian accounting software usually calculates depreciation **monthly** and posts one depreciation voucher each month. Many companies start depreciation in the month the asset becomes ready for use; others use a half-year convention. Whatever policy you choose must be written down and applied consistently. Check the tax rules on when depreciation starts in the latest regulations.',
          },
        },
        {
          type: 'h',
          text: { fa: 'تغییر در برآورد', en: 'Changes in estimate' },
        },
        {
          type: 'p',
          text: {
            fa: 'عمر مفید و ارزش اسقاط **برآورد** هستند و ممکن است با اطلاعات تازه تغییر کنند. تغییر برآورد **آینده‌نگر** ثبت می‌شود: استهلاک سال‌های گذشته اصلاح نمی‌شود؛ ارزش دفتری فعلی، منهای ارزش اسقاط جدید، بر عمر باقیمانده جدید تقسیم می‌شود. مثال: در پایان سال 2 (روش خط مستقیم، استهلاک انباشته 60,000، ارزش دفتری 100,000) مهندسان البرز اعلام می‌کنند دستگاه از ابتدای سال 3، **4 سال دیگر** کار می‌کند (نه 3 سال) و ارزش اسقاط آن **4,000** خواهد بود (نه 10,000).',
            en: 'Useful life and residual value are **estimates** and may change as new information arrives. A change in estimate is applied **prospectively**: past depreciation is not corrected; the current book value, less the new residual value, is spread over the new remaining life. Example: at the end of Year 2 (straight-line, accumulated depreciation 60,000, book value 100,000), Alborz’s engineers report that from the start of Year 3 the machine will work **4 more years** (not 3) and its residual value will be **4,000** (not 10,000).',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'استهلاک جدید = (ارزش دفتری در زمان تغییر − ارزش اسقاط جدید) ÷ عمر باقیمانده جدید = (100,000 − 4,000) ÷ 4 = 24,000',
            en: 'New depreciation = (Book value at the change − New residual value) ÷ New remaining life = (100,000 − 4,000) ÷ 4 = 24,000',
          },
          note: {
            fa: 'سال 1 و 2 با همان 30,000 باقی می‌مانند. از سال 3 تا 6 هر سال 24,000 و در پایان سال 6 ارزش دفتری 4,000 است.',
            en: 'Years 1 and 2 stay at 30,000. Years 3 to 6 each carry 24,000, and book value at the end of Year 6 is 4,000.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'استهلاک سال 3 پس از تغییر برآورد', en: 'Year 3 depreciation after the change in estimate' },
          entries: [
            {
              date: { fa: 'پایان سال 3', en: 'End of Year 3' },
              lines: [
                { account: ac.depExp, debit: 24000 },
                { account: ac.accDepMach, credit: 24000 },
              ],
              memo: {
                fa: 'برای سال‌های 1 و 2 هیچ ثبت اصلاحی لازم نیست.',
                en: 'No correcting entry is needed for Years 1 and 2.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'تغییر برآورد با اشتباه یکی نیست', en: 'A change in estimate is not an error' },
          text: {
            fa: 'اگر برآورد قبلی با اطلاعات آن زمان معقول بوده، تغییرش آینده‌نگر است. اما اگر استهلاک گذشته **اشتباه** محاسبه شده باشد (مثلاً عدد غلط وارد شده یا دارایی اصلاً مستهلک نشده)، این **اصلاح اشتباه** است و طبق استانداردها با تجدید ارائه ارقام دوره‌های قبل اصلاح می‌شود، نه با تقسیم روی سال‌های آینده.',
            en: 'If the old estimate was reasonable given what was known then, changing it is prospective. But if past depreciation was **wrong** (a wrong figure was keyed in, or the asset was never depreciated), that is the **correction of an error**, and the standards require the prior-period figures to be restated, not spread over future years.',
          },
        },
      ],
    },
    /* ───────────────────────────── 5 ───────────────────────────── */
    {
      id: 'disposal',
      title: { fa: 'کنارگذاری: فروش و اسقاط', en: 'Disposal: Sale and Scrapping' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'وقتی دارایی فروخته، اسقاط یا به هر دلیل کنار گذاشته می‌شود، باید هم **بهای تمام‌شده** و هم **استهلاک انباشته** آن از دفاتر حذف شود. تفاوت مبلغ دریافتی با ارزش دفتری، **سود یا زیان فروش دارایی ثابت** است که در صورت سود و زیان جزو سایر درآمدها یا هزینه‌ها گزارش می‌شود، نه جزو درآمد عملیاتی.',
            en: 'When an asset is sold, scrapped or otherwise retired, both its **cost** and its **accumulated depreciation** must be removed from the books. The difference between what is received and the book value is the **gain or loss on disposal**, reported in the income statement under other income or expenses, not as operating revenue.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'به‌روز کردن استهلاک', en: 'Bring depreciation up to date' },
              text: {
                fa: 'استهلاک را تا تاریخ کنارگذاری ثبت کنید. البرز دستگاه را در پایان ماه 6 سال 4 می‌فروشد: 30,000 × 6/12 = 15,000.',
                en: 'Record depreciation up to the disposal date. Alborz sells the machine at the end of month 6 of Year 4: 30,000 × 6/12 = 15,000.',
              },
            },
            {
              title: { fa: 'محاسبه ارزش دفتری', en: 'Find the book value' },
              text: {
                fa: 'استهلاک انباشته = 3 × 30,000 + 15,000 = 105,000. ارزش دفتری = 160,000 − 105,000 = 55,000.',
                en: 'Accumulated depreciation = 3 × 30,000 + 15,000 = 105,000. Book value = 160,000 − 105,000 = 55,000.',
              },
            },
            {
              title: { fa: 'مقایسه با مبلغ فروش', en: 'Compare with the proceeds' },
              text: {
                fa: 'اگر دستگاه 62,000 فروخته شود، سود 7,000 است؛ اگر 50,000 فروخته شود، زیان 5,000.',
                en: 'Sold for 62,000, there is a 7,000 gain; sold for 50,000, a 5,000 loss.',
              },
            },
            {
              title: { fa: 'ثبت کنارگذاری', en: 'Record the disposal' },
              text: {
                fa: 'وجه دریافتی را بدهکار، استهلاک انباشته را بدهکار، بهای دارایی را بستانکار و تفاوت را به سود (بستانکار) یا زیان (بدهکار) منظور کنید.',
                en: 'Debit the cash received, debit accumulated depreciation, credit the asset’s cost, and put the difference to a gain (credit) or a loss (debit).',
              },
            },
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'سود (زیان) فروش = مبلغ فروش − ارزش دفتری در تاریخ فروش',
            en: 'Gain (loss) on disposal = Proceeds − Book value at the disposal date',
          },
          note: {
            fa: '62,000 − 55,000 = سود 7,000؛ 50,000 − 55,000 = زیان 5,000.',
            en: '62,000 − 55,000 = 7,000 gain; 50,000 − 55,000 = 5,000 loss.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'فروش دستگاه به 62,000 (با سود)', en: 'Selling the machine for 62,000 (a gain)' },
          entries: [
            {
              date: { fa: 'پایان ماه 6، سال 4', en: 'End of month 6, Year 4' },
              lines: [
                { account: ac.depExp, debit: 15000 },
                { account: ac.accDepMach, credit: 15000 },
              ],
              memo: { fa: 'استهلاک 6 ماه سال 4.', en: 'Six months of Year 4 depreciation.' },
            },
            {
              date: { fa: 'پایان ماه 6، سال 4', en: 'End of month 6, Year 4' },
              lines: [
                { account: ac.cash, debit: 62000 },
                { account: ac.accDepMach, debit: 105000 },
                { account: ac.machinery, credit: 160000 },
                { account: ac.gain, credit: 7000 },
              ],
              memo: {
                fa: 'حذف بها و استهلاک انباشته؛ مالیات بر ارزش افزوده فروش برای سادگی نادیده گرفته شده است.',
                en: 'Cost and accumulated depreciation removed; VAT on the sale is ignored for simplicity.',
              },
            },
          ],
        },
        {
          type: 'journal',
          title: { fa: 'حالت دیگر: فروش به 50,000 (با زیان)', en: 'Alternative: selling for 50,000 (a loss)' },
          entries: [
            {
              date: { fa: 'پایان ماه 6، سال 4', en: 'End of month 6, Year 4' },
              lines: [
                { account: ac.cash, debit: 50000 },
                { account: ac.accDepMach, debit: 105000 },
                { account: ac.loss, debit: 5000 },
                { account: ac.machinery, credit: 160000 },
              ],
              memo: {
                fa: 'ثبت به‌روزرسانی استهلاک (15,000) در این حالت هم لازم است.',
                en: 'The 15,000 depreciation update is needed in this case too.',
              },
            },
          ],
        },
        {
          type: 'tAccounts',
          title: {
            fa: 'پس از فروش (حالت سود): هر دو حساب صفر می‌شوند',
            en: 'After the sale (gain case): both accounts are cleared to zero',
          },
          accounts: [
            { name: ac.machinery, debits: [160000], credits: [160000] },
            { name: ac.accDepMach, debits: [105000], credits: [30000, 30000, 30000, 15000] },
          ],
        },
        {
          type: 'journal',
          title: { fa: 'اسقاط: کنارگذاری بدون فروش یا با فروش ضایعات', en: 'Scrapping: retiring with no sale or for scrap' },
          entries: [
            {
              lines: [
                { account: ac.cash, debit: 1000 },
                { account: ac.accDepOffice, debit: 24000 },
                { account: ac.loss, debit: 5000 },
                { account: ac.officeEq, credit: 30000 },
              ],
              memo: {
                fa: 'سرور قدیمی با بهای 30,000 و استهلاک انباشته 24,000 به‌عنوان ضایعات 1,000 فروخته شد: زیان 6,000 − 1,000 = 5,000.',
                en: 'An old server costing 30,000 with 24,000 of accumulated depreciation is sold as scrap for 1,000: loss 6,000 − 1,000 = 5,000.',
              },
            },
            {
              lines: [
                { account: ac.accDepOffice, debit: 12000 },
                { account: ac.officeEq, credit: 12000 },
              ],
              memo: {
                fa: 'چاپگری با بهای 12,000 که کاملاً مستهلک شده بود دور ریخته شد: ارزش دفتری صفر، بدون سود و زیان.',
                en: 'A printer costing 12,000, fully depreciated, is thrown away: zero book value, no gain or loss.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'دارایی کاملاً مستهلک‌شده‌ای که هنوز کار می‌کند', en: 'Fully depreciated but still working' },
          text: {
            fa: 'اگر دارایی کاملاً مستهلک شده اما هنوز استفاده می‌شود، همچنان با بهای تمام‌شده و استهلاک انباشته برابر در دفاتر می‌ماند و دیگر استهلاکی برای آن ثبت نمی‌شود. اگر چنین دارایی‌هایی زیاد باشند، نشانه آن است که عمر مفید در گذشته کوتاه برآورد شده و باید برآوردها بازبینی شوند.',
            en: 'An asset that is fully depreciated but still in use stays in the books at cost with equal accumulated depreciation, and no further depreciation is recorded. Many such assets signal that useful lives were set too short, so the estimates should be reviewed.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: مستندات کنارگذاری', en: 'In practice: disposal paperwork' },
          text: {
            fa: 'در شرکت‌های ایرانی فروش یا اسقاط دارایی معمولاً با **صورت‌جلسه** کمیسیون معاملات یا کمیسیون اسقاط، با امضای مدیران مجاز، انجام می‌شود. سند حسابداری کنارگذاری به این صورت‌جلسه، فاکتور فروش و رسید وجه پیوست می‌شود و پلاک دارایی در دفتر اموال «خارج‌شده» علامت می‌خورد. اینکه فروش دارایی مشمول مالیات بر ارزش افزوده است یا نه را با مقررات روز بررسی کنید.',
            en: 'In Iranian companies a sale or scrapping is usually approved in the **minutes** of a transactions or scrapping committee, signed by authorised managers. The disposal voucher is attached to those minutes, the sales invoice and the cash receipt, and the asset’s tag is marked “disposed” in the fixed-asset register. Check current rules on whether the sale is subject to VAT.',
          },
        },
      ],
    },
    /* ───────────────────────────── 6 ───────────────────────────── */
    {
      id: 'impairment-revaluation',
      title: { fa: 'کاهش ارزش و مدل تجدید ارزیابی', en: 'Impairment and the Revaluation Model' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'استهلاک مصرف عادی دارایی را نشان می‌دهد. اما گاهی دارایی ناگهان بخش بزرگی از ارزشش را از دست می‌دهد: آسیب فیزیکی، فناوری جدید رقیب، توقف محصولی که با آن ساخته می‌شود یا افت شدید بازار. در این حالت دارایی دچار **کاهش ارزش** شده است و نباید در ترازنامه بیش از مبلغی نشان داده شود که از آن قابل بازیافت است (IAS 36).',
            en: 'Depreciation reflects normal wear. Sometimes, though, an asset suddenly loses much of its value: physical damage, a competitor’s new technology, a discontinued product it was built for, or a sharp market fall. The asset is then **impaired** and must not be carried on the balance sheet above the amount that can be recovered from it (IAS 36).',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'مبلغ بازیافتنی = بیشترِ (ارزش منصفانه پس از کسر مخارج فروش، ارزش اقتصادی)؛ زیان کاهش ارزش = ارزش دفتری − مبلغ بازیافتنی',
            en: 'Recoverable amount = higher of (Fair value less costs of disposal, Value in use); Impairment loss = Carrying amount − Recoverable amount',
          },
          note: {
            fa: 'ارزش اقتصادی (ارزش استفاده) یعنی ارزش فعلی جریان‌های نقدی که انتظار داریم از ادامه استفاده دارایی به دست آید. اگر مبلغ بازیافتنی از ارزش دفتری بیشتر باشد، کاهش ارزشی وجود ندارد.',
            en: 'Value in use is the present value of the cash flows expected from continuing to use the asset. If the recoverable amount exceeds the carrying amount, there is no impairment.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'دستگاه بسته‌بندی یک شرکت غذایی', en: 'A food company’s packaging machine' },
          text: {
            fa: 'بهای تمام‌شده 150,000، استهلاک انباشته 50,000، ارزش دفتری 100,000؛ عمر باقیمانده 3 سال و ارزش اسقاط 10,000. رقیب دستگاهی بسیار سریع‌تر به بازار آورده است. ارزش منصفانه پس از کسر مخارج فروش 72,000 و ارزش اقتصادی 79,000 برآورد می‌شود. مبلغ بازیافتنی بیشترِ این دو، یعنی 79,000 است و زیان کاهش ارزش 100,000 − 79,000 = 21,000.',
            en: 'Cost 150,000, accumulated depreciation 50,000, carrying amount 100,000; 3 years of life left and a 10,000 residual value. A competitor has launched a much faster machine. Fair value less costs of disposal is estimated at 72,000 and value in use at 79,000. The recoverable amount is the higher, 79,000, so the impairment loss is 100,000 − 79,000 = 21,000.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت زیان کاهش ارزش', en: 'Recording the impairment loss' },
          entries: [
            {
              lines: [
                { account: ac.impLoss, debit: 21000 },
                { account: ac.accImpMach, credit: 21000 },
              ],
              memo: {
                fa: 'حساب کاهنده جداگانه؛ برخی شرکت‌ها آن را با استهلاک انباشته در یک حساب «استهلاک و کاهش ارزش انباشته» نگه می‌دارند. استهلاک سال‌های بعد: (79,000 − 10,000) ÷ 3 = 23,000.',
                en: 'A separate contra account; some companies combine it with accumulated depreciation as “accumulated depreciation and impairment”. Depreciation from now on: (79,000 − 10,000) ÷ 3 = 23,000.',
              },
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'IAS 16 برای اندازه‌گیری پس از شناخت اولیه دو مدل را مجاز می‌داند. در **مدل بهای تمام‌شده** (رایج‌ترین مدل) دارایی با بهای تمام‌شده منهای استهلاک انباشته و کاهش ارزش انباشته نشان داده می‌شود. در **مدل تجدید ارزیابی** دارایی به **ارزش منصفانه** در تاریخ تجدید ارزیابی، منهای استهلاک و کاهش ارزش بعدی، نشان داده می‌شود. مدل انتخاب‌شده باید برای **کل یک طبقه** از دارایی‌ها (مثلاً همه زمین‌ها) اجرا شود و تجدید ارزیابی باید به‌قدر کافی منظم تکرار شود.',
            en: 'IAS 16 allows two models after initial recognition. Under the **cost model** (the most common), an asset is carried at cost less accumulated depreciation and impairment. Under the **revaluation model**, it is carried at **fair value** at the revaluation date, less later depreciation and impairment. The chosen model must be applied to an **entire class** of assets (for example, all land), and revaluations must be repeated regularly enough.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'افزایش ارزش در تجدید ارزیابی', en: 'A revaluation increase' },
            items: [
              { fa: 'به سود و زیان نمی‌رود', en: 'Does not go to profit or loss' },
              {
                fa: 'در سود و زیان جامع دیگر شناسایی و در حقوق مالکانه زیر «مازاد تجدید ارزیابی» انباشته می‌شود',
                en: 'Recognised in other comprehensive income and accumulated in equity as “revaluation surplus”',
              },
              {
                fa: 'استثنا: اگر کاهش قبلیِ همان دارایی را که به سود و زیان رفته جبران کند، تا آن مبلغ درآمد است',
                en: 'Exception: to the extent it reverses an earlier decrease charged to profit or loss, it is income',
              },
            ],
          },
          right: {
            title: { fa: 'کاهش ارزش در تجدید ارزیابی', en: 'A revaluation decrease' },
            items: [
              { fa: 'ابتدا از مازاد تجدید ارزیابی همان دارایی کم می‌شود', en: 'First reduces that asset’s revaluation surplus' },
              { fa: 'مازاد بر آن به‌عنوان هزینه در سود و زیان می‌رود', en: 'Any excess is an expense in profit or loss' },
              {
                fa: 'استهلاک دوره‌های بعد بر مبنای مبلغ تجدید ارزیابی‌شده محاسبه می‌شود',
                en: 'Later depreciation is based on the revalued amount',
              },
            ],
          },
        },
        {
          type: 'journal',
          title: { fa: 'تجدید ارزیابی زمین (زمین مستهلک نمی‌شود)', en: 'Revaluing land (land is not depreciated)' },
          entries: [
            {
              date: { fa: 'پایان سال 1', en: 'End of Year 1' },
              lines: [
                { account: ac.land, debit: 150000 },
                { account: ac.revSurplus, credit: 150000 },
              ],
              memo: {
                fa: 'زمینی با بهای 500,000 به ارزش منصفانه 650,000 تجدید ارزیابی شد.',
                en: 'Land costing 500,000 is revalued to its fair value of 650,000.',
              },
            },
            {
              date: { fa: 'پایان سال 3', en: 'End of Year 3' },
              lines: [
                { account: ac.revSurplus, debit: 50000 },
                { account: ac.land, credit: 50000 },
              ],
              memo: {
                fa: 'ارزش منصفانه به 600,000 کاهش یافت؛ کاهش 50,000 از مازاد موجود کسر شد و به سود و زیان نرفت.',
                en: 'Fair value falls to 600,000; the 50,000 decrease is taken against the existing surplus, not profit or loss.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل در ایران', en: 'In practice in Iran' },
          text: {
            fa: 'استانداردهای حسابداری ایران هم برای دارایی‌های ثابت مشهود و کاهش ارزش دارایی‌ها استانداردهای جداگانه دارند و اصول آن‌ها به IFRS نزدیک است. تجدید ارزیابی دارایی‌ها در ایران بارها با مقررات مالیاتی ویژه و افزایش سرمایه شرکت‌ها گره خورده است؛ این موضوعی تخصصی است و پیش از هر اقدامی باید آخرین قوانین و استانداردها بررسی شود.',
            en: 'Iran’s accounting standards also have separate standards for PP&E and for impairment, with principles close to IFRS. Asset revaluation in Iran has repeatedly been tied to special tax provisions and to companies’ capital increases; this is a specialist area, so check the latest laws and standards before acting.',
          },
        },
      ],
    },
    /* ───────────────────────────── 7 ───────────────────────────── */
    {
      id: 'register-practice',
      title: { fa: 'دفتر اموال و کار حرفه‌ای', en: 'The Fixed-Asset Register in Practice' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'حساب کل «ماشین‌آلات» فقط یک عدد نشان می‌دهد. اما مدیر مالی باید بداند این عدد از کدام دستگاه‌ها تشکیل شده، هر کدام کجاست، دست چه کسی است و چقدر از عمرش باقی مانده. این اطلاعات در **دفتر اموال** (دفتر دارایی‌های ثابت) نگهداری می‌شود: فهرستی که برای هر دارایی یک ردیف دارد و جمع آن باید همیشه با مانده حساب‌های کل برابر باشد.',
            en: 'The general-ledger account “Machinery” shows only one number. A finance manager needs to know which machines make it up, where each one is, who is responsible for it and how much life it has left. That is kept in the **fixed-asset register**: one line per asset, whose totals must always agree with the general-ledger balances.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'نمونه دفتر اموال شرکت تولیدی البرز (پایان سال 1)', en: 'Sample fixed-asset register, Alborz Manufacturing (end of Year 1)' },
          head: [
            { fa: 'پلاک', en: 'Tag' },
            { fa: 'دارایی', en: 'Asset' },
            { fa: 'محل / مسئول', en: 'Location / custodian' },
            { fa: 'روش و عمر', en: 'Method and life' },
            { fa: 'بهای تمام‌شده', en: 'Cost' },
            { fa: 'استهلاک انباشته', en: 'Accum. depreciation' },
            { fa: 'ارزش دفتری', en: 'Book value' },
          ],
          numericCols: [4, 5, 6],
          rows: [
            [
              { fa: 'MCH-007', en: 'MCH-007' },
              { fa: 'دستگاه پرکن', en: 'Filling machine' },
              { fa: 'سالن تولید / مدیر تولید', en: 'Production hall / production manager' },
              { fa: 'خط مستقیم، 5 سال', en: 'Straight-line, 5 years' },
              160000,
              30000,
              130000,
            ],
            [
              { fa: 'VEH-002', en: 'VEH-002' },
              { fa: 'وانت پخش', en: 'Delivery van' },
              { fa: 'واحد توزیع / راننده', en: 'Distribution / driver' },
              { fa: 'خط مستقیم، 6 سال', en: 'Straight-line, 6 years' },
              90000,
              14000,
              76000,
            ],
            [
              { fa: 'IT-031', en: 'IT-031' },
              { fa: 'رایانه همراه', en: 'Laptop' },
              { fa: 'واحد مالی / حسابدار ارشد', en: 'Finance / senior accountant' },
              { fa: 'خط مستقیم، 4 سال', en: 'Straight-line, 4 years' },
              24000,
              6000,
              18000,
            ],
            [total, blank, blank, blank, 274000, 50000, 224000],
          ],
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'تحویل و پلاک‌گذاری', en: 'Receive and tag' },
              text: {
                fa: 'دارایی با رسید انبار یا صورت‌جلسه تحویل گرفته می‌شود و یک **پلاک اموال** (برچسب فلزی یا بارکد) با شماره یکتا روی آن نصب می‌شود.',
                en: 'The asset is received against a goods-received note or handover minutes, and an **asset tag** (metal plate or barcode) with a unique number is fixed to it.',
              },
            },
            {
              title: { fa: 'ثبت در دفتر اموال', en: 'Enter it in the register' },
              text: {
                fa: 'پلاک، شرح، فروشنده و شماره فاکتور، تاریخ آماده بهره‌برداری، بها، روش، عمر، ارزش اسقاط، محل و تحویل‌گیرنده ثبت می‌شود. تحویل‌گیرنده فرم تحویل اموال را امضا می‌کند.',
                en: 'Record the tag, description, supplier and invoice number, available-for-use date, cost, method, life, residual value, location and custodian. The custodian signs an asset handover form.',
              },
            },
            {
              title: { fa: 'استهلاک دوره‌ای', en: 'Periodic depreciation' },
              text: {
                fa: 'نرم‌افزار (سیستم اموال) هر ماه استهلاک هر پلاک را محاسبه و یک سند جمعی به دفتر کل ارسال می‌کند.',
                en: 'The software’s fixed-asset module calculates each tag’s depreciation every month and posts one summary voucher to the general ledger.',
              },
            },
            {
              title: { fa: 'شمارش و تطبیق', en: 'Count and reconcile' },
              text: {
                fa: 'دست‌کم سالی یک بار اموال شمارش می‌شود: هر پلاک باید در محل ثبت‌شده پیدا شود. جمع دفتر اموال با مانده حساب‌های کل دارایی و استهلاک انباشته تطبیق داده می‌شود و مغایرت‌ها پیگیری می‌شود.',
                en: 'At least once a year the assets are counted: every tag must be found where the register says. The register totals are agreed to the general-ledger balances for cost and accumulated depreciation, and any difference is investigated.',
              },
            },
            {
              title: { fa: 'انتقال یا کنارگذاری', en: 'Transfer or dispose' },
              text: {
                fa: 'جابه‌جایی دارایی میان واحدها با فرم انتقال و کنارگذاری با صورت‌جلسه ثبت می‌شود تا دفتر اموال همیشه با واقعیت یکی باشد.',
                en: 'Moves between departments are recorded on a transfer form and disposals with approved minutes, so the register always matches reality.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: کدینگ سه‌سطحی', en: 'In practice: three-level coding' },
          text: {
            fa: 'در کدینگ رایج ایرانی، «دارایی‌های ثابت مشهود» **حساب کل** است، «ماشین‌آلات»، «وسایط نقلیه» و «اثاثه و تجهیزات اداری» **حساب‌های معین** هستند و هر پلاک یا هر مرکز هزینه یک **حساب تفصیلی**. برای هر معین دارایی یک معین «استهلاک انباشته» هم تعریف می‌شود. به این ترتیب گزارش هزینه استهلاک به تفکیک دستگاه یا واحد با یک گزارش تفصیلی به دست می‌آید.',
            en: 'In the usual Iranian chart of accounts, “Property, plant and equipment” is a **general account**; “Machinery”, “Vehicles” and “Office equipment” are **subsidiary accounts**; and each tag or cost centre is a **detail account**. Each asset subsidiary has a matching “accumulated depreciation” subsidiary. A depreciation report by machine or department is then one detail-level report away.',
          },
        },
        {
          type: 'h',
          text: { fa: 'اشتباهات رایج', en: 'Common mistakes' },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**هزینه کردن یک دارایی بزرگ** در ماه خرید، یا برعکس، **سرمایه‌ای کردن تعمیرات جاری** برای بزرگ‌تر نشان دادن سود.',
              en: '**Expensing a major asset** in the month of purchase or, the reverse, **capitalising routine repairs** to make profit look bigger.',
            },
            {
              fa: 'جا انداختن حمل، نصب و آزمایش از بهای تمام‌شده؛ یا افزودن آموزش، جریمه و مالیات قابل کسر به آن.',
              en: 'Leaving freight, installation and testing out of cost; or adding training, fines and reclaimable VAT to it.',
            },
            {
              fa: '**مستهلک کردن زمین**، یا مستهلک نکردن ساختمانی که روی زمین است چون «یکجا خریده شده».',
              en: '**Depreciating land**, or not depreciating the building on it because “it was bought in one price”.',
            },
            {
              fa: 'کسر ارزش اسقاط پیش از اعمال نرخ نزولی، یا مستهلک کردن دارایی تا زیر ارزش اسقاط.',
              en: 'Deducting residual value before applying the declining rate, or depreciating below residual value.',
            },
            {
              fa: 'بستانکار کردن مستقیم حساب دارایی برای استهلاک به‌جای حساب استهلاک انباشته.',
              en: 'Crediting the asset account directly for depreciation instead of accumulated depreciation.',
            },
            {
              fa: 'فراموش کردن استهلاک ماه‌های سال جاری پیش از ثبت فروش، که سود یا زیان فروش را اشتباه می‌کند.',
              en: 'Forgetting the current year’s depreciation up to the sale date, which misstates the gain or loss.',
            },
            {
              fa: 'اصلاح سال‌های گذشته برای یک **تغییر برآورد**؛ تغییر برآورد فقط آینده را تغییر می‌دهد.',
              en: 'Restating past years for a **change in estimate**; a change in estimate only affects the future.',
            },
          ],
        },
      ],
    },
    /* ───────────────────────────── 8 ───────────────────────────── */
    {
      id: 'exercises',
      title: { fa: 'تمرین‌ها', en: 'Exercises' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'هر تمرین را ابتدا خودتان حل کنید و بعد پاسخ را باز کنید. ارقام هر تمرین مستقل است.',
            en: 'Try each exercise yourself before opening the solution. Each exercise has its own figures.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'بهای تمام‌شده فر صنعتی', en: 'Cost of an industrial oven' },
          difficulty: 'easy',
          problem: {
            fa: 'رستوران سبز یک فر صنعتی می‌خرد و همه مبالغ زیر را نقدی می‌پردازد. نرخ مالیات بر ارزش افزوده در این تمرین 10٪ فرض شده و رستوران می‌تواند آن را از مالیات فروش خود کسر کند. بهای تمام‌شده فر را محاسبه و ثبت روزنامه را بنویسید.',
            en: 'Sabz Restaurant buys an industrial oven and pays all the amounts below in cash. VAT is assumed at 10% in this exercise, and the restaurant can deduct it from its output VAT. Compute the oven’s cost and write the journal entry.',
          },
          given: {
            head: [
              { fa: 'قلم', en: 'Item' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            numericCols: [1],
            rows: [
              [{ fa: 'قیمت فر پس از تخفیف تجاری', en: 'Oven price after trade discount' }, 80000],
              [{ fa: 'مالیات بر ارزش افزوده (10٪)', en: 'VAT (10%)' }, 8000],
              [{ fa: 'حمل تا رستوران', en: 'Delivery to the restaurant' }, 1500],
              [{ fa: 'بیمه در مسیر', en: 'Insurance in transit' }, 400],
              [{ fa: 'نصب لوله گاز و هود', en: 'Gas line and hood installation' }, 3500],
              [{ fa: 'آموزش آشپزها', en: 'Training the chefs' }, 1200],
              [{ fa: 'گاز مصرفی ماه اول پخت', en: 'Gas used in the first month of cooking' }, 600],
              [{ fa: 'جریمه توقف غیرمجاز کامیون حمل', en: 'Parking fine for the delivery truck' }, 300],
            ],
          },
          hint: {
            fa: 'از هر قلم بپرسید: «آیا برای رساندن فر به محل و وضعیت آماده کار لازم بود؟»',
            en: 'Ask of each item: “Was it needed to bring the oven to its place and a working condition?”',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'اقلام سرمایه‌ای', en: 'Capitalised items' },
                  text: {
                    fa: 'قیمت 80,000 + حمل 1,500 + بیمه در مسیر 400 + نصب 3,500 = 85,400.',
                    en: 'Price 80,000 + delivery 1,500 + transit insurance 400 + installation 3,500 = 85,400.',
                  },
                },
                {
                  title: { fa: 'اقلام غیرسرمایه‌ای', en: 'Items not capitalised' },
                  text: {
                    fa: 'مالیات بر ارزش افزوده 8,000 قابل کسر است (طلب از اداره مالیات)؛ آموزش 1,200، گاز 600 و جریمه 300 هزینه دوره‌اند.',
                    en: 'The 8,000 VAT is reclaimable (a claim on the tax office); training 1,200, gas 600 and the 300 fine are period expenses.',
                  },
                },
                {
                  title: { fa: 'کنترل', en: 'Check' },
                  text: {
                    fa: 'جمع پرداخت نقدی: 85,400 + 8,000 + 1,200 + 600 + 300 = 95,500.',
                    en: 'Total cash paid: 85,400 + 8,000 + 1,200 + 600 + 300 = 95,500.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  lines: [
                    { account: ac.equipment, debit: 85400 },
                    { account: ac.inputVat, debit: 8000 },
                    { account: ac.training, debit: 1200 },
                    { account: ac.fuel, debit: 600 },
                    { account: ac.fines, debit: 300 },
                    { account: ac.cash, credit: 95500 },
                  ],
                  memo: { fa: 'خرید و راه‌اندازی فر صنعتی.', en: 'Purchase and set-up of the industrial oven.' },
                },
              ],
            },
          ],
          answer: { fa: 'بهای تمام‌شده فر: 85,400.', en: 'Cost of the oven: 85,400.' },
        },
        {
          type: 'exercise',
          title: { fa: 'جدول استهلاک به سه روش', en: 'A depreciation schedule by three methods' },
          difficulty: 'medium',
          problem: {
            fa: 'چاپخانه پیام در ابتدای سال 1 یک دستگاه چاپ دیجیتال به بهای 50,000 می‌خرد. ارزش اسقاط 5,000، عمر مفید 4 سال یا 9,000 ساعت کار است. ساعت کار واقعی: سال 1: 3,000؛ سال 2: 2,400؛ سال 3: 2,100؛ سال 4: 1,500. استهلاک و ارزش دفتری پایان هر سال را به روش خط مستقیم، نزولی مضاعف و واحد تولید (ساعت کار) محاسبه کنید.',
            en: 'Payam Print Shop buys a digital press for 50,000 at the start of Year 1. Residual value 5,000; useful life 4 years or 9,000 machine hours. Actual hours: Year 1: 3,000; Year 2: 2,400; Year 3: 2,100; Year 4: 1,500. Compute each year’s depreciation and year-end book value by straight-line, double-declining balance and units of production (machine hours).',
          },
          hint: {
            fa: 'نرخ نزولی مضاعف = 2 ÷ 4 = 50٪. در سال آخر فقط تا ارزش اسقاط مستهلک کنید.',
            en: 'Double-declining rate = 2 ÷ 4 = 50%. In the last year depreciate only down to residual value.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'خط مستقیم', en: 'Straight-line' },
                  text: {
                    fa: '(50,000 − 5,000) ÷ 4 = 11,250 در هر سال.',
                    en: '(50,000 − 5,000) ÷ 4 = 11,250 a year.',
                  },
                },
                {
                  title: { fa: 'نزولی مضاعف', en: 'Double-declining' },
                  text: {
                    fa: 'سال 1: 50,000 × 50٪ = 25,000. سال 2: 25,000 × 50٪ = 12,500. سال 3: 12,500 × 50٪ = 6,250. سال 4: فقط 6,250 − 5,000 = 1,250 (نه 3,125) تا ارزش دفتری به 5,000 برسد.',
                    en: 'Year 1: 50,000 × 50% = 25,000. Year 2: 25,000 × 50% = 12,500. Year 3: 12,500 × 50% = 6,250. Year 4: only 6,250 − 5,000 = 1,250 (not 3,125) so book value lands on 5,000.',
                  },
                },
                {
                  title: { fa: 'واحد تولید', en: 'Units of production' },
                  text: {
                    fa: 'نرخ هر ساعت = 45,000 ÷ 9,000 = 5. سال 1: 3,000 × 5 = 15,000؛ سال 2: 12,000؛ سال 3: 10,500؛ سال 4: 7,500.',
                    en: 'Rate per hour = 45,000 ÷ 9,000 = 5. Year 1: 3,000 × 5 = 15,000; Year 2: 12,000; Year 3: 10,500; Year 4: 7,500.',
                  },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'استهلاک (و ارزش دفتری پایان سال)', en: 'Depreciation (and year-end book value)' },
              head: [
                { fa: 'سال', en: 'Year' },
                { fa: 'خط مستقیم', en: 'Straight-line' },
                { fa: 'ارزش دفتری', en: 'Book value' },
                { fa: 'نزولی مضاعف', en: 'Double-declining' },
                { fa: 'ارزش دفتری', en: 'Book value' },
                { fa: 'واحد تولید', en: 'Units of production' },
                { fa: 'ارزش دفتری', en: 'Book value' },
              ],
              numericCols: [1, 2, 3, 4, 5, 6],
              rows: [
                [year(1), 11250, 38750, 25000, 25000, 15000, 35000],
                [year(2), 11250, 27500, 12500, 12500, 12000, 23000],
                [year(3), 11250, 16250, 6250, 6250, 10500, 12500],
                [year(4), 11250, 5000, 1250, 5000, 7500, 5000],
                [total, 45000, blank, 45000, blank, 45000, blank],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'هر سه روش در مجموع همان 45,000 را مستهلک می‌کنند و به ارزش اسقاط 5,000 می‌رسند؛ فقط زمان‌بندی هزینه فرق دارد.',
                en: 'All three methods charge the same 45,000 in total and end at the 5,000 residual value; only the timing of the expense differs.',
              },
            },
          ],
          answer: {
            fa: 'استهلاک سال 1: خط مستقیم 11,250، نزولی مضاعف 25,000، واحد تولید 15,000؛ جمع هر روش 45,000.',
            en: 'Year 1 depreciation: straight-line 11,250, double-declining 25,000, units of production 15,000; each method totals 45,000.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'فروش کامیون با سود یا زیان', en: 'Selling a truck at a gain or a loss' },
          difficulty: 'medium',
          problem: {
            fa: 'شرکت پخش آسمان در ابتدای سال 1 کامیونی به بهای 90,000 خریده است: ارزش اسقاط 6,000، عمر مفید 6 سال، روش خط مستقیم. کامیون در پایان ماه 3 سال 4 فروخته می‌شود. ثبت‌های لازم را بنویسید، اگر (الف) مبلغ فروش 48,000 و (ب) مبلغ فروش 40,000 باشد. مالیات بر ارزش افزوده را نادیده بگیرید.',
            en: 'Aseman Distribution bought a truck for 90,000 at the start of Year 1: residual value 6,000, useful life 6 years, straight-line. The truck is sold at the end of month 3 of Year 4. Write the entries if it is sold for (a) 48,000 and (b) 40,000. Ignore VAT.',
          },
          hint: {
            fa: 'اول استهلاک 3 ماه سال 4 را ثبت کنید.',
            en: 'Record the 3 months of Year 4 depreciation first.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'استهلاک سالانه', en: 'Annual depreciation' },
                  text: {
                    fa: '(90,000 − 6,000) ÷ 6 = 14,000. سه ماه سال 4: 14,000 × 3/12 = 3,500.',
                    en: '(90,000 − 6,000) ÷ 6 = 14,000. Three months of Year 4: 14,000 × 3/12 = 3,500.',
                  },
                },
                {
                  title: { fa: 'ارزش دفتری در تاریخ فروش', en: 'Book value at the sale date' },
                  text: {
                    fa: 'استهلاک انباشته = 3 × 14,000 + 3,500 = 45,500؛ ارزش دفتری = 90,000 − 45,500 = 44,500.',
                    en: 'Accumulated depreciation = 3 × 14,000 + 3,500 = 45,500; book value = 90,000 − 45,500 = 44,500.',
                  },
                },
                {
                  title: { fa: 'سود یا زیان', en: 'Gain or loss' },
                  text: {
                    fa: '(الف) 48,000 − 44,500 = سود 3,500. (ب) 40,000 − 44,500 = زیان 4,500.',
                    en: '(a) 48,000 − 44,500 = 3,500 gain. (b) 40,000 − 44,500 = 4,500 loss.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'پایان ماه 3، سال 4', en: 'End of month 3, Year 4' },
                  lines: [
                    { account: ac.depExp, debit: 3500 },
                    { account: ac.accDepVeh, credit: 3500 },
                  ],
                  memo: { fa: 'به‌روزرسانی استهلاک (هر دو حالت).', en: 'Depreciation update (both cases).' },
                },
                {
                  date: { fa: '(الف) فروش به 48,000', en: '(a) Sold for 48,000' },
                  lines: [
                    { account: ac.cash, debit: 48000 },
                    { account: ac.accDepVeh, debit: 45500 },
                    { account: ac.vehicles, credit: 90000 },
                    { account: ac.gain, credit: 3500 },
                  ],
                },
                {
                  date: { fa: '(ب) فروش به 40,000', en: '(b) Sold for 40,000' },
                  lines: [
                    { account: ac.cash, debit: 40000 },
                    { account: ac.accDepVeh, debit: 45500 },
                    { account: ac.loss, debit: 4500 },
                    { account: ac.vehicles, credit: 90000 },
                  ],
                },
              ],
            },
          ],
          answer: {
            fa: 'ارزش دفتری 44,500؛ (الف) سود فروش 3,500؛ (ب) زیان فروش 4,500.',
            en: 'Book value 44,500; (a) gain of 3,500; (b) loss of 4,500.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تغییر برآورد عمر مفید و ارزش اسقاط', en: 'A change in useful life and residual value' },
          difficulty: 'hard',
          problem: {
            fa: 'شرکت نرم‌افزاری داده‌پرداز در ابتدای سال 1 سرورهایی به بهای 72,000 خرید: ارزش اسقاط صفر، عمر مفید 6 سال، خط مستقیم. در ابتدای سال 3 مدیر فناوری اعلام می‌کند سرورها در مجموع فقط 5 سال کار خواهند کرد و در پایان می‌توان آن‌ها را 3,000 فروخت. استهلاک سال 3 را محاسبه و ثبت کنید و ارزش دفتری پایان سال 3 و پایان سال 5 را به دست آورید.',
            en: 'Dadeh-Pardaz Software bought servers for 72,000 at the start of Year 1: zero residual value, 6-year life, straight-line. At the start of Year 3 the IT manager reports that the servers will last only 5 years in total and can be sold for 3,000 at the end. Compute and record Year 3 depreciation, and find book value at the end of Years 3 and 5.',
          },
          hint: {
            fa: 'عمر باقیمانده جدید = 5 سال کل − 2 سال گذشته.',
            en: 'New remaining life = 5 years in total − 2 years already used.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'دو سال اول', en: 'The first two years' },
                  text: {
                    fa: '72,000 ÷ 6 = 12,000 در سال؛ استهلاک انباشته پایان سال 2 = 24,000؛ ارزش دفتری = 48,000.',
                    en: '72,000 ÷ 6 = 12,000 a year; accumulated depreciation at the end of Year 2 = 24,000; book value = 48,000.',
                  },
                },
                {
                  title: { fa: 'عمر باقیمانده', en: 'Remaining life' },
                  text: { fa: '5 − 2 = 3 سال.', en: '5 − 2 = 3 years.' },
                },
                {
                  title: { fa: 'استهلاک جدید', en: 'New depreciation' },
                  text: {
                    fa: '(48,000 − 3,000) ÷ 3 = 15,000 در هر یک از سال‌های 3، 4 و 5.',
                    en: '(48,000 − 3,000) ÷ 3 = 15,000 for each of Years 3, 4 and 5.',
                  },
                },
                {
                  title: { fa: 'ارزش دفتری', en: 'Book values' },
                  text: {
                    fa: 'پایان سال 3: 48,000 − 15,000 = 33,000. پایان سال 5: 33,000 − 2 × 15,000 = 3,000 (همان ارزش اسقاط جدید).',
                    en: 'End of Year 3: 48,000 − 15,000 = 33,000. End of Year 5: 33,000 − 2 × 15,000 = 3,000 (the new residual value).',
                  },
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'پایان سال 3', en: 'End of Year 3' },
                  lines: [
                    { account: ac.depExp, debit: 15000 },
                    { account: ac.accDepEq, credit: 15000 },
                  ],
                  memo: {
                    fa: 'تغییر برآورد آینده‌نگر است؛ استهلاک سال‌های 1 و 2 دست نمی‌خورد.',
                    en: 'The change is prospective; Years 1 and 2 are left untouched.',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: 'استهلاک سال‌های 3 تا 5: هر سال 15,000؛ ارزش دفتری پایان سال 3: 33,000 و پایان سال 5: 3,000.',
            en: 'Depreciation for Years 3 to 5: 15,000 a year; book value 33,000 at the end of Year 3 and 3,000 at the end of Year 5.',
          },
        },
      ],
    },
    /* ───────────────────────────── 9 ───────────────────────────── */
    {
      id: 'summary',
      title: { fa: 'جمع‌بندی', en: 'Summary' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              fa: 'دارایی ثابت مشهود برای استفاده (نه فروش) و برای بیش از یک دوره نگهداری می‌شود و به بهای تمام‌شده ثبت می‌شود: قیمت خرید منهای تخفیف، به‌علاوه مالیات‌های غیرقابل استرداد و مخارج مستقیم آماده‌سازی.',
              en: 'PP&E is held for use (not sale) over more than one period and is recorded at cost: price less discounts, plus non-refundable taxes and directly attributable costs.',
            },
            {
              fa: 'مخارجی که عمر یا ظرفیت را افزایش می‌دهند سرمایه‌ای و تعمیرات عادی هزینه دوره‌اند.',
              en: 'Spending that adds life or capacity is capitalised; routine repairs are expensed.',
            },
            {
              fa: 'خط مستقیم، نزولی و واحد تولید همه یک مبلغ استهلاک‌پذیر را تخصیص می‌دهند؛ فقط الگوی زمانی متفاوت است. زمین مستهلک نمی‌شود.',
              en: 'Straight-line, declining balance and units of production all allocate the same depreciable amount; only the timing differs. Land is not depreciated.',
            },
            {
              fa: 'استهلاک از زمان آماده بهره‌برداری و به نسبت ماه‌ها محاسبه می‌شود؛ تغییر برآورد آینده‌نگر است.',
              en: 'Depreciation runs from the available-for-use date, prorated by month; a change in estimate is prospective.',
            },
            {
              fa: 'در کنارگذاری، استهلاک را به‌روز کنید، بها و استهلاک انباشته را حذف کنید و تفاوت مبلغ دریافتی با ارزش دفتری را سود یا زیان بشناسید.',
              en: 'On disposal, update depreciation, remove cost and accumulated depreciation, and recognise proceeds minus book value as a gain or loss.',
            },
            {
              fa: 'اگر مبلغ بازیافتنی کمتر از ارزش دفتری باشد، زیان کاهش ارزش ثبت می‌شود؛ در مدل تجدید ارزیابی، افزایش ارزش به مازاد تجدید ارزیابی در حقوق مالکانه می‌رود.',
              en: 'If the recoverable amount is below carrying amount, an impairment loss is recorded; under the revaluation model, increases go to a revaluation surplus in equity.',
            },
            {
              fa: 'دفتر اموال با پلاک‌گذاری، شمارش سالانه و تطبیق با دفتر کل، پشتوانه همه این ارقام است.',
              en: 'The fixed-asset register, with tagging, annual counts and reconciliation to the ledger, backs up every one of these figures.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'دارایی‌های ثابت مشهود', en: 'Property, plant and equipment' },
              def: {
                fa: 'اقلام فیزیکی که برای استفاده در تولید، عرضه خدمات، اجاره یا امور اداری و برای بیش از یک دوره نگهداری می‌شوند.',
                en: 'Physical items held for use in production, supply of services, rental or administration over more than one period.',
              },
            },
            {
              term: { fa: 'بهای تمام‌شده', en: 'Cost' },
              def: {
                fa: 'همه مخارج لازم برای رساندن دارایی به محل و وضعیت آماده بهره‌برداری.',
                en: 'All outlays needed to bring an asset to its location and working condition.',
              },
            },
            {
              term: { fa: 'مخارج سرمایه‌ای', en: 'Capital expenditure' },
              def: {
                fa: 'مخارجی که عمر، ظرفیت یا کارایی دارایی را افزایش می‌دهد و به بهای آن اضافه می‌شود.',
                en: 'Spending that increases an asset’s life, capacity or efficiency and is added to its cost.',
              },
            },
            {
              term: { fa: 'مبلغ استهلاک‌پذیر', en: 'Depreciable amount' },
              def: { fa: 'بهای تمام‌شده منهای ارزش اسقاط.', en: 'Cost minus residual value.' },
            },
            {
              term: { fa: 'ارزش اسقاط (ارزش باقیمانده)', en: 'Residual (salvage) value' },
              def: {
                fa: 'مبلغ برآوردی که در پایان عمر مفید از فروش دارایی به دست می‌آید.',
                en: 'The estimated amount to be obtained for the asset at the end of its useful life.',
              },
            },
            {
              term: { fa: 'روش نزولی مضاعف', en: 'Double-declining balance' },
              def: {
                fa: 'روش شتابانی که نرخ دو برابر خط مستقیم را روی ارزش دفتری ابتدای هر سال اعمال می‌کند.',
                en: 'An accelerated method applying twice the straight-line rate to each year’s opening book value.',
              },
            },
            {
              term: { fa: 'روش واحد تولید', en: 'Units-of-production method' },
              def: {
                fa: 'استهلاک بر اساس کار واقعی دارایی (ساعت، کیلومتر، تعداد تولید).',
                en: 'Depreciation based on the asset’s actual work (hours, kilometres, units produced).',
              },
            },
            {
              term: { fa: 'تغییر برآورد', en: 'Change in estimate' },
              def: {
                fa: 'بازنگری عمر مفید، ارزش اسقاط یا روش که فقط بر دوره جاری و آینده اثر می‌گذارد.',
                en: 'A revision of useful life, residual value or method that affects only current and future periods.',
              },
            },
            {
              term: { fa: 'سود (زیان) فروش دارایی ثابت', en: 'Gain (loss) on disposal' },
              def: {
                fa: 'تفاوت مبلغ دریافتی از فروش با ارزش دفتری دارایی در تاریخ فروش.',
                en: 'Proceeds minus the asset’s book value at the disposal date.',
              },
            },
            {
              term: { fa: 'کاهش ارزش', en: 'Impairment' },
              def: {
                fa: 'وضعیتی که ارزش دفتری دارایی از مبلغ بازیافتنی آن بیشتر است.',
                en: 'When an asset’s carrying amount exceeds its recoverable amount.',
              },
            },
            {
              term: { fa: 'مازاد تجدید ارزیابی', en: 'Revaluation surplus' },
              def: {
                fa: 'افزایش ارزش دارایی در مدل تجدید ارزیابی که در حقوق مالکانه انباشته می‌شود.',
                en: 'The increase in an asset’s value under the revaluation model, accumulated in equity.',
              },
            },
            {
              term: { fa: 'دفتر اموال', en: 'Fixed-asset register' },
              def: {
                fa: 'فهرست تفصیلی دارایی‌ها با پلاک، محل، مسئول، بها و استهلاک هر قلم که با دفتر کل تطبیق داده می‌شود.',
                en: 'A detailed list of assets with each item’s tag, location, custodian, cost and depreciation, reconciled to the ledger.',
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
        fa: 'کدام یک از مخارج زیر، که پس از خرید یک وانت انجام شده، باید به بهای دارایی اضافه شود؟',
        en: 'Which of these costs, incurred after a van was bought, should be added to the asset’s cost?',
      },
      options: [
        { fa: 'تعویض روغن و فیلتر', en: 'An oil and filter change' },
        { fa: 'رنگ‌آمیزی یک خراش روی بدنه', en: 'Repainting a scratch on the body' },
        { fa: 'تعویض موتور که عمر وانت را 3 سال افزایش می‌دهد', en: 'An engine replacement that adds 3 years to the van’s life' },
        { fa: 'بیمه بدنه سال آینده', en: 'Next year’s vehicle insurance' },
      ],
      answer: 2,
      explain: {
        fa: 'فقط مخارجی که عمر، ظرفیت یا کارایی را افزایش می‌دهند سرمایه‌ای‌اند. تعویض موتور عمر را 3 سال بیشتر می‌کند. تعویض روغن و رنگ‌آمیزی فقط وضعیت فعلی را حفظ می‌کنند و بیمه سال آینده پیش‌پرداخت هزینه است، نه بخشی از بهای وانت.',
        en: 'Only spending that adds life, capacity or efficiency is capitalised. The engine adds 3 years. The oil change and repaint only maintain the van, and next year’s insurance is a prepaid expense, not part of the van’s cost.',
      },
    },
    {
      q: {
        fa: 'قیمت دستگاه 50,000، مالیات بر ارزش افزوده قابل کسر 5,000، حمل 2,000، نصب 3,000 و قرارداد نگهداری یک‌ساله 1,000 است. بهای تمام‌شده دستگاه چقدر است؟',
        en: 'A machine’s price is 50,000, reclaimable VAT 5,000, freight 2,000, installation 3,000 and a one-year maintenance contract 1,000. What is the machine’s cost?',
      },
      options: [
        { fa: '61,000', en: '61,000' },
        { fa: '55,000', en: '55,000' },
        { fa: '60,000', en: '60,000' },
        { fa: '56,000', en: '56,000' },
      ],
      answer: 1,
      explain: {
        fa: 'بها = 50,000 + 2,000 + 3,000 = 55,000. مالیات قابل کسر طلب از اداره مالیات است (گزینه 60,000 آن را اشتباهاً افزوده) و قرارداد نگهداری مربوط به دوره پس از آماده شدن دستگاه و هزینه است (گزینه 56,000).',
        en: 'Cost = 50,000 + 2,000 + 3,000 = 55,000. Reclaimable VAT is a claim on the tax office (60,000 wrongly adds it), and the maintenance contract covers the period after the machine is ready, so it is an expense (56,000 wrongly adds it).',
      },
    },
    {
      q: {
        fa: 'بهای دارایی 40,000، ارزش اسقاط 4,000 و عمر مفید 6 سال است. استهلاک سالانه به روش خط مستقیم چقدر است؟',
        en: 'An asset costs 40,000 with a 4,000 residual value and a 6-year life. What is annual straight-line depreciation?',
      },
      options: [
        { fa: '6,667', en: '6,667' },
        { fa: '4,000', en: '4,000' },
        { fa: '6,000', en: '6,000' },
        { fa: '7,333', en: '7,333' },
      ],
      answer: 2,
      explain: {
        fa: '(40,000 − 4,000) ÷ 6 = 6,000. عدد 6,667 از فراموش کردن کسر ارزش اسقاط (40,000 ÷ 6) به دست می‌آید و 7,333 از جمع کردن آن به‌جای کسر.',
        en: '(40,000 − 4,000) ÷ 6 = 6,000. The 6,667 comes from forgetting to deduct residual value (40,000 ÷ 6), and 7,333 from adding it instead of deducting.',
      },
    },
    {
      q: {
        fa: 'بهای دارایی 50,000، ارزش اسقاط 5,000 و عمر مفید 5 سال است. استهلاک سال 2 به روش نزولی مضاعف چقدر است؟',
        en: 'An asset costs 50,000 with a 5,000 residual value and a 5-year life. What is Year 2 depreciation under double-declining balance?',
      },
      options: [
        { fa: '12,000', en: '12,000' },
        { fa: '10,800', en: '10,800' },
        { fa: '9,000', en: '9,000' },
        { fa: '20,000', en: '20,000' },
      ],
      answer: 0,
      explain: {
        fa: 'نرخ 2 ÷ 5 = 40٪. سال 1: 50,000 × 40٪ = 20,000؛ ارزش دفتری 30,000. سال 2: 30,000 × 40٪ = 12,000. عدد 10,800 از کسر ارزش اسقاط پیش از اعمال نرخ به دست می‌آید که در این روش درست نیست؛ 9,000 استهلاک خط مستقیم است.',
        en: 'Rate 2 ÷ 5 = 40%. Year 1: 50,000 × 40% = 20,000; book value 30,000. Year 2: 30,000 × 40% = 12,000. The 10,800 comes from deducting residual value before applying the rate, which this method does not do; 9,000 is straight-line.',
      },
    },
    {
      q: {
        fa: 'بهای دستگاهی 30,000، ارزش اسقاط صفر و کل تولید مورد انتظار آن 100,000 واحد است. امسال 18,000 واحد تولید کرده است. استهلاک امسال به روش واحد تولید چقدر است؟',
        en: 'A machine costs 30,000, has zero residual value and is expected to produce 100,000 units in total. It produced 18,000 units this year. What is this year’s units-of-production depreciation?',
      },
      options: [
        { fa: '6,000', en: '6,000' },
        { fa: '3,000', en: '3,000' },
        { fa: '1,800', en: '1,800' },
        { fa: '5,400', en: '5,400' },
      ],
      answer: 3,
      explain: {
        fa: 'نرخ هر واحد = 30,000 ÷ 100,000 = 0.3؛ استهلاک = 18,000 × 0.3 = 5,400. عدد 6,000 استهلاک خط مستقیم با عمر 5 سال است که به میزان استفاده توجه نمی‌کند.',
        en: 'Rate per unit = 30,000 ÷ 100,000 = 0.3; depreciation = 18,000 × 0.3 = 5,400. The 6,000 is straight-line over 5 years, which ignores actual use.',
      },
    },
    {
      q: {
        fa: 'دارایی‌ای با بهای 36,000، ارزش اسقاط صفر و عمر 5 سال در ابتدای ماه 5 سال مالی آماده بهره‌برداری شده است. استهلاک خط مستقیم سال اول چقدر است؟',
        en: 'An asset costing 36,000, with zero residual value and a 5-year life, became ready for use at the start of month 5 of the financial year. What is first-year straight-line depreciation?',
      },
      options: [
        { fa: '7,200', en: '7,200' },
        { fa: '4,800', en: '4,800' },
        { fa: '2,400', en: '2,400' },
        { fa: '3,000', en: '3,000' },
      ],
      answer: 1,
      explain: {
        fa: 'استهلاک سال کامل 36,000 ÷ 5 = 7,200 است. از ابتدای ماه 5 تا پایان ماه 12 هشت ماه است: 7,200 × 8/12 = 4,800. عدد 7,200 سال کامل را حساب می‌کند و 2,400 فقط چهار ماه را.',
        en: 'A full year is 36,000 ÷ 5 = 7,200. From the start of month 5 to the end of month 12 is eight months: 7,200 × 8/12 = 4,800. The 7,200 charges a full year and 2,400 only four months.',
      },
    },
    {
      q: {
        fa: 'پس از دو سال، عمر مفید باقیمانده یک دستگاه از 3 سال به 5 سال افزایش برآورد می‌شود. این تغییر چگونه ثبت می‌شود؟',
        en: 'After two years, a machine’s remaining useful life is re-estimated from 3 to 5 years. How is this change recorded?',
      },
      options: [
        { fa: 'استهلاک دو سال گذشته اصلاح و تجدید ارائه می‌شود', en: 'The past two years’ depreciation is corrected and restated' },
        { fa: 'تفاوت استهلاک گذشته یکجا در سال جاری درآمد شناسایی می‌شود', en: 'The difference in past depreciation is taken to income at once this year' },
        { fa: 'تا پایان عمر اولیه تغییری داده نمی‌شود', en: 'Nothing changes until the original life ends' },
        {
          fa: 'ارزش دفتری فعلی منهای ارزش اسقاط، از این پس بر 5 سال باقیمانده تقسیم می‌شود',
          en: 'Current book value less residual value is spread over the 5 remaining years from now on',
        },
      ],
      answer: 3,
      explain: {
        fa: 'تغییر برآورد آینده‌نگر است: گذشته دست نمی‌خورد و مبلغ باقیمانده بر عمر جدید تقسیم می‌شود. تجدید ارائه فقط برای اصلاح اشتباه است و صبر کردن تا پایان عمر اولیه ارقام سال‌های آینده را تحریف می‌کند.',
        en: 'A change in estimate is prospective: the past is left alone and the remaining amount is spread over the new life. Restatement is only for correcting errors, and waiting for the original life to end would misstate the coming years.',
      },
    },
    {
      q: {
        fa: 'دارایی‌ای با بهای 70,000 و استهلاک انباشته 52,000 به مبلغ 15,000 فروخته می‌شود. نتیجه چیست؟',
        en: 'An asset with a cost of 70,000 and accumulated depreciation of 52,000 is sold for 15,000. What is the result?',
      },
      options: [
        { fa: 'سود 3,000', en: 'A 3,000 gain' },
        { fa: 'سود 15,000', en: 'A 15,000 gain' },
        { fa: 'زیان 3,000', en: 'A 3,000 loss' },
        { fa: 'زیان 18,000', en: 'An 18,000 loss' },
      ],
      answer: 2,
      explain: {
        fa: 'ارزش دفتری = 70,000 − 52,000 = 18,000. مبلغ فروش 15,000 کمتر از ارزش دفتری است، پس زیان 3,000. کل مبلغ فروش سود نیست، چون ارزش دفتری دارایی هم از دفاتر خارج می‌شود.',
        en: 'Book value = 70,000 − 52,000 = 18,000. Proceeds of 15,000 are below book value, so there is a 3,000 loss. The proceeds are not all gain, because the asset’s book value leaves the books too.',
      },
    },
    {
      q: {
        fa: 'ارزش دفتری دارایی‌ای 90,000 است. ارزش منصفانه پس از کسر مخارج فروش 70,000 و ارزش اقتصادی آن 75,000 است. زیان کاهش ارزش چقدر است؟',
        en: 'An asset’s carrying amount is 90,000. Its fair value less costs of disposal is 70,000 and its value in use is 75,000. What is the impairment loss?',
      },
      options: [
        { fa: '15,000', en: '15,000' },
        { fa: '20,000', en: '20,000' },
        { fa: 'صفر', en: 'Zero' },
        { fa: '5,000', en: '5,000' },
      ],
      answer: 0,
      explain: {
        fa: 'مبلغ بازیافتنی **بیشترِ** دو عدد است، یعنی 75,000؛ زیان = 90,000 − 75,000 = 15,000. عدد 20,000 از مبنا قرار دادن عدد کمتر به دست می‌آید، در حالی که شرکت راهی را انتخاب می‌کند که پول بیشتری بازمی‌گرداند.',
        en: 'Recoverable amount is the **higher** of the two, 75,000; loss = 90,000 − 75,000 = 15,000. The 20,000 uses the lower figure, but a business would choose the route that recovers more.',
      },
    },
    {
      q: {
        fa: 'شرکتی که مدل تجدید ارزیابی را به کار می‌برد، زمینی با بهای 500,000 را به 650,000 تجدید ارزیابی می‌کند (بدون کاهش ارزش قبلی). افزایش 150,000 کجا ثبت می‌شود؟',
        en: 'A company using the revaluation model revalues land costing 500,000 to 650,000 (with no earlier decrease). Where does the 150,000 increase go?',
      },
      options: [
        { fa: 'درآمد عملیاتی در صورت سود و زیان', en: 'Operating revenue in the income statement' },
        {
          fa: 'مازاد تجدید ارزیابی در حقوق مالکانه (از طریق سود و زیان جامع دیگر)',
          en: 'Revaluation surplus in equity (through other comprehensive income)',
        },
        { fa: 'کاهش استهلاک انباشته زمین', en: 'A reduction of the land’s accumulated depreciation' },
        { fa: 'هیچ ثبتی لازم نیست؛ فقط در یادداشت‌ها افشا می‌شود', en: 'No entry; it is only disclosed in the notes' },
      ],
      answer: 1,
      explain: {
        fa: 'افزایش ناشی از تجدید ارزیابی سود تحقق‌یافته عملیاتی نیست و در مازاد تجدید ارزیابی در حقوق مالکانه انباشته می‌شود. زمین مستهلک نمی‌شود، پس استهلاک انباشته‌ای ندارد؛ و در مدل تجدید ارزیابی، دارایی واقعاً به ارزش جدید ثبت می‌شود.',
        en: 'A revaluation increase is not realised operating profit; it builds up in a revaluation surplus in equity. Land is not depreciated, so it has no accumulated depreciation, and under the revaluation model the asset really is restated to the new value.',
      },
    },
  ],
}
