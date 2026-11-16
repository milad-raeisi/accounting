import type { Lesson } from '../../types'

/*
 * Running example: Masar Petroleum, Arya field.
 * K-101 overhaul in the turnaround: 2,400,000 (capital work order WO-70110).
 * AFE-2026-07: install a third compressor K-103 (budget 6,000,000).
 * Arya oil and gas properties: 72,000,000; proved developed reserves 24,000,000 boe; production 2,400,000 boe.
 */
const ac = {
  auc: { fa: 'دارایی در جریان تکمیل (AFE-2026-07)', en: 'Assets under construction (AFE-2026-07)' },
  aucOverhaul: { fa: 'دارایی در جریان تکمیل: تعمیر اساسی K-101', en: 'Assets under construction: K-101 overhaul' },
  aucGeneric: { fa: 'دارایی در جریان تکمیل', en: 'Assets under construction' },
  plant: { fa: 'ماشین‌آلات و تجهیزات', en: 'Plant and machinery' },
  plantK103: { fa: 'ماشین‌آلات و تجهیزات: کمپرسور K-103', en: 'Plant and machinery: compressor K-103' },
  plantOverhaul: { fa: 'ماشین‌آلات و تجهیزات: جزء تعمیر اساسی', en: 'Plant and machinery: overhaul component' },
  accDep: { fa: 'استهلاک انباشته ماشین‌آلات و تجهیزات', en: 'Accumulated depreciation: plant and machinery' },
  depExp: { fa: 'هزینه استهلاک (CC-3100)', en: 'Depreciation expense (CC-3100)' },
  depletionExp: { fa: 'هزینه استهلاک ذخایر', en: 'Depletion expense' },
  accDepletion: { fa: 'استهلاک انباشته ذخایر: دارایی‌های نفت و گاز', en: 'Accumulated depletion: oil and gas properties' },
  grir: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing account' },
  inventory: { fa: 'موجودی مواد و قطعات', en: 'Inventory: materials' },
  engLabour: { fa: 'دستمزد مهندسی تخصیص‌یافته', en: 'Engineering labour allocated' },
  training: { fa: 'هزینه آموزش', en: 'Training expense' },
  admin: { fa: 'هزینه‌های عمومی و اداری', en: 'General and administrative expense' },
  capitalisedMaint: { fa: 'هزینه نگهداری منتقل‌شده به دارایی (کاهنده هزینه)', en: 'Maintenance costs capitalised (contra expense)' },
  impLoss: { fa: 'زیان کاهش ارزش', en: 'Impairment loss' },
  accImp: { fa: 'کاهش ارزش انباشته', en: 'Accumulated impairment' },
  cash: { fa: 'موجودی نقد', en: 'Cash' },
  lossDisposal: { fa: 'زیان کنارگذاری دارایی', en: 'Loss on disposal of assets' },
}

export const lesson: Lesson = {
  slug: 'asset-accounting-capex',
  number: 7,
  level: 'advanced',
  minutes: 35,
  icon: 'Building2',
  tone: 'equity',
  title: { fa: 'حسابداری دارایی‌ها و هزینه‌های سرمایه‌ای', en: 'Asset Accounting and CAPEX' },
  summary: {
    fa: 'تصمیم بگیرید هر مخارج نگهداری سرمایه‌ای است یا جاری، پروژه‌ها و AFEها را از دارایی در جریان تکمیل تا دارایی نهایی دنبال کنید، استهلاک و استهلاک ذخایر به روش واحد تولید را حساب کنید، اجزای عمده، کاهش ارزش و کنارگذاری را ثبت کنید و دفتر معین دارایی‌های ثابت را در ERP بشناسید.',
    en: 'Decide whether maintenance spend is CAPEX or OPEX, follow projects and AFEs from assets under construction to final assets, compute depreciation and units-of-production depletion, record components, impairment and retirement, and get to know the fixed-asset sub-ledger in the ERP.',
  },
  objectives: [
    {
      fa: 'با قاعده شناخت دارایی، مخارج نگهداری را به سرمایه‌ای و جاری تفکیک کنید',
      en: 'Split maintenance spend into CAPEX and OPEX using the asset recognition rule',
    },
    {
      fa: 'گردش مخارج پروژه را از AFE و دارایی در جریان تکمیل تا دارایی آماده بهره‌برداری ثبت کنید',
      en: 'Record project spend from the AFE and assets under construction to the asset ready for use',
    },
    {
      fa: 'استهلاک خط مستقیم و استهلاک ذخایر به روش واحد تولید را حساب کنید',
      en: 'Compute straight-line depreciation and units-of-production depletion',
    },
    {
      fa: 'اجزای عمده، تعویض تعمیر اساسی، کاهش ارزش و کنارگذاری دارایی را با ثبت‌هایشان حسابداری کنید',
      en: 'Account for components, overhaul replacement, impairment and retirement, with their entries',
    },
    {
      fa: 'داده پایه، اسناد و ثبت‌های خودکار دفتر معین دارایی‌های ثابت در ERP را توضیح دهید',
      en: 'Explain the master data, documents and automatic postings of the fixed-asset sub-ledger in the ERP',
    },
  ],
  sections: [
    {
      id: 'why-capex',
      title: { fa: 'سرمایه‌ای یا جاری: چرا مهم است؟', en: 'CAPEX or OPEX: Why It Matters' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'تعمیر اساسی کمپرسور K-101 در تعمیرات اساسی ایستگاه 2,400,000 هزینه داشت. اگر آن را **هزینه جاری (OPEX)** بدانیم، سود امسال 2,400,000 کم می‌شود. اگر آن را **مخارج سرمایه‌ای (CAPEX)** بدانیم، دارایی 2,400,000 زیاد می‌شود و هزینه در 5 سال تا تعمیر اساسی بعدی، سالی 480,000، از راه استهلاک به سود و زیان می‌رود. این یک تصمیم کوچک دفتری نیست: سود، ترازنامه، مالیات، شاخص‌های هزینه، روش تأیید بودجه و زمان بازیافت هزینه در قرارداد نفتی همه به آن بستگی دارند.',
            en: 'The K-101 overhaul in the station turnaround cost 2,400,000. Treat it as **OPEX** and this year’s profit falls by 2,400,000. Treat it as **CAPEX** and assets rise by 2,400,000, with the cost reaching profit or loss through depreciation, 480,000 a year over the 5 years until the next overhaul. This is no small bookkeeping choice: profit, the balance sheet, tax, cost KPIs, how the budget is approved and when the cost is recovered under the petroleum contract all depend on it.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'هزینه جاری (OPEX)', en: 'OPEX (operating expenditure)' },
            items: [
              { fa: 'برای نگه‌داشتن دارایی در وضعیت عادی کار', en: 'Keeps the asset in its normal working condition' },
              { fa: 'همان دوره در سود و زیان هزینه می‌شود', en: 'Expensed in profit or loss in the same period' },
              { fa: 'با بودجه عملیاتی سالانه کنترل می‌شود', en: 'Controlled through the annual operating budget' },
              { fa: 'مثال: تعویض فیلتر، تعمیر آب‌بند، رنگ‌آمیزی', en: 'Examples: filter change, seal repair, repainting' },
            ],
          },
          right: {
            title: { fa: 'مخارج سرمایه‌ای (CAPEX)', en: 'CAPEX (capital expenditure)' },
            items: [
              { fa: 'دارایی می‌سازد، جزء عمده‌ای را جایگزین می‌کند یا منافع آینده را افزایش می‌دهد', en: 'Creates an asset, replaces a significant part or adds future benefits' },
              { fa: 'در ترازنامه ثبت و در طول عمر مفید مستهلک می‌شود', en: 'Recorded on the balance sheet and depreciated over its useful life' },
              { fa: 'با AFE و پروژه تأیید و کنترل می‌شود', en: 'Approved and controlled through an AFE and a project' },
              { fa: 'مثال: کمپرسور جدید، تعمیر اساسی دوره‌ای، افزایش ظرفیت', en: 'Examples: a new compressor, a periodic major overhaul, a capacity upgrade' },
            ],
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'اثر 2,400,000 تعمیر اساسی بر صورت‌های مالی امسال (فرض: انجام در ابتدای سال، استهلاک کامل یک سال)',
            en: 'Effect of the 2,400,000 overhaul on this year’s statements (assume done at the start of the year, a full year of depreciation)',
          },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'اگر هزینه جاری شود', en: 'If expensed' },
            { fa: 'اگر سرمایه‌ای شود', en: 'If capitalised' },
          ],
          rows: [
            [{ fa: 'هزینه در صورت سود و زیان امسال', en: 'Expense in this year’s income statement' }, 2400000, 480000],
            [{ fa: 'دارایی در ترازنامه پایان سال', en: 'Asset on the year-end balance sheet' }, 0, 1920000],
            [{ fa: 'کاهش سود امسال', en: 'Reduction in this year’s profit' }, 2400000, 480000],
          ],
          numericCols: [1, 2],
        },
        {
          type: 'diagram',
          id: 'asset-lifecycle',
          caption: {
            fa: 'چرخه عمر دارایی: برنامه‌ریزی، تأمین، نصب و سرمایه‌ای کردن، بهره‌برداری و نگهداری، کنارگذاری؛ با ماژول ERP هر مرحله.',
            en: 'The asset lifecycle: plan, acquire, install and capitalise, operate and maintain, dispose; with the ERP module for each stage.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: IFRS و ایران', en: 'In practice: IFRS and Iran' },
          text: {
            fa: 'در IFRS این موضوع را **IAS 16** (دارایی‌های ثابت مشهود) پوشش می‌دهد و **استاندارد حسابداری شماره 11 ایران** (دارایی‌های ثابت مشهود) بر اصول مشابهی استوار است. استهلاک مالیاتی در ایران تابع جدول استهلاکات موضوع ماده 149 قانون مالیات‌های مستقیم است که ممکن است با استهلاک دفتری فرق کند. نسخه‌های جاری استانداردها و مقررات را بررسی کنید.',
            en: 'Under IFRS this is covered by **IAS 16** (Property, Plant and Equipment), and **Iranian Accounting Standard No. 11** (Tangible Fixed Assets) rests on similar principles. Tax depreciation in Iran follows the official depreciation table under Article 149 of the Direct Taxes Act, which can differ from book depreciation. Check the current versions of the standards and regulations.',
          },
        },
      ],
    },
    {
      id: 'capex-opex-rules',
      title: { fa: 'قاعده سرمایه‌ای کردن مخارج نگهداری', en: 'The Capitalisation Rule for Maintenance Spend' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'قاعده پایه IAS 16 ساده است: یک مخارج زمانی دارایی شناخته می‌شود که (1) جریان منافع اقتصادی آینده از آن محتمل باشد و (2) بهای آن به‌طور قابل اتکا اندازه‌گیری شود. **نگهداری روزمره** (دستمزد، مواد مصرفی، قطعات کوچک) همان دوره هزینه می‌شود. **تعویض یک جزء عمده** اگر این دو شرط را داشته باشد سرمایه‌ای می‌شود و ارزش دفتری جزء قدیمی از دفاتر حذف می‌شود. **بازرسی اساسی یا تعمیر اساسی دوره‌ای** هم به‌عنوان جزئی جداگانه سرمایه‌ای و تا بازرسی بعدی مستهلک می‌شود.',
            en: 'The basic IAS 16 rule is simple: spend is recognised as an asset when (1) future economic benefits are probable and (2) its cost can be measured reliably. **Day-to-day servicing** (labour, consumables, small parts) is expensed in the period. **Replacing a significant part** is capitalised when it meets the two tests, and the old part’s carrying amount is removed from the books. A **major inspection or periodic overhaul** is also capitalised as a separate component and depreciated until the next one.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'نگهداری روزمره است؟', en: 'Is it day-to-day servicing?' },
              text: {
                fa: 'اگر فقط دارایی را در وضعیت عادی کار نگه می‌دارد: هزینه جاری.',
                en: 'If it only keeps the asset in its normal working condition: OPEX.',
              },
            },
            {
              title: { fa: 'جزئی عمده با عمر جداگانه را جایگزین می‌کند؟', en: 'Does it replace a significant part with its own life?' },
              text: {
                fa: 'سرمایه‌ای؛ و جزء قدیمی (بها و استهلاک انباشته‌اش) از دفاتر حذف می‌شود.',
                en: 'CAPEX; and the old part (its cost and accumulated depreciation) is removed from the books.',
              },
            },
            {
              title: { fa: 'تعمیر اساسی دوره‌ای و لازم برای ادامه کار است؟', en: 'Is it a recurring major overhaul needed to keep operating?' },
              text: {
                fa: 'سرمایه‌ای، به‌عنوان «جزء تعمیر اساسی» که تا تعمیر اساسی بعدی مستهلک می‌شود.',
                en: 'CAPEX, as an “overhaul component” depreciated until the next overhaul.',
              },
            },
            {
              title: { fa: 'عمر، ظرفیت یا عملکرد را از سطح اولیه بالاتر می‌برد؟', en: 'Does it extend life, capacity or performance beyond the original?' },
              text: { fa: 'سرمایه‌ای.', en: 'CAPEX.' },
            },
            {
              title: { fa: 'از آستانه سرمایه‌ای کردن شرکت بیشتر است؟', en: 'Is it above the company’s capitalisation threshold?' },
              text: {
                fa: 'اقلام کوچک‌تر از آستانه (مثلاً 50,000، رقم نمونه) طبق سیاست اهمیت، هزینه می‌شوند.',
                en: 'Items below the threshold (e.g. 50,000, an illustrative figure) are expensed under the materiality policy.',
              },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'تصمیم‌های نمونه در میدان آریا', en: 'Sample decisions at the Arya field' },
          head: [
            { fa: 'مخارج', en: 'Spend' },
            { fa: 'مبلغ', en: 'Amount' },
            { fa: 'تصمیم', en: 'Decision' },
            { fa: 'چرا', en: 'Why' },
          ],
          rows: [
            [{ fa: 'تعویض فیلترهای روغن K-101', en: 'Replace K-101 lube oil filters' }, 2600, { fa: 'جاری', en: 'OPEX' }, { fa: 'نگهداری روزمره', en: 'Routine servicing' }],
            [{ fa: 'تعویض آب‌بند پمپ P-120', en: 'Replace the P-120 pump seal' }, 60000, { fa: 'جاری', en: 'OPEX' }, { fa: 'وضعیت عادی را برمی‌گرداند؛ جزء جداگانه نیست', en: 'Restores normal condition; not a separate component' }],
            [{ fa: 'تعمیر اساسی 5 ساله K-101', en: 'K-101 five-yearly major overhaul' }, 2400000, { fa: 'سرمایه‌ای: جزء تعمیر اساسی', en: 'CAPEX: overhaul component' }, { fa: 'دوره‌ای و لازم برای ادامه کار', en: 'Recurring and needed to keep operating' }],
            [{ fa: 'جایگزینی توربین گازی K-102 با واحد جدید', en: 'Replace the K-102 gas turbine with a new unit' }, 4100000, { fa: 'سرمایه‌ای؛ توربین قدیمی حذف شود', en: 'CAPEX; derecognise the old turbine' }, { fa: 'جزء عمده جایگزین شده', en: 'Significant part replaced' }],
            [{ fa: 'تغییر پروانه‌ها برای 15٪ ظرفیت بیشتر', en: 'Re-rate impellers for 15% more capacity' }, 900000, { fa: 'سرمایه‌ای', en: 'CAPEX' }, { fa: 'ظرفیت را افزایش می‌دهد', en: 'Increases capacity' }],
            [{ fa: 'رنگ‌آمیزی و ترمیم عایق', en: 'Repainting and insulation repair' }, 140000, { fa: 'جاری', en: 'OPEX' }, { fa: 'وضعیت را حفظ می‌کند، منفعت تازه نمی‌سازد', en: 'Maintains condition; adds no new benefit' }],
            [{ fa: 'تعمیر چاه AR-04 برای بازگرداندن تولید از همان لایه', en: 'Workover of well AR-04 to restore output from the same zone' }, 650000, { fa: 'معمولاً جاری (طبق سیاست شرکت)', en: 'Usually OPEX (per company policy)' }, { fa: 'بازگرداندن است؛ تکمیل در لایه جدید ممکن است سرمایه‌ای شود', en: 'It restores; recompletion in a new zone may be capitalised' }],
          ],
          numericCols: [1],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'شرکت‌های جدی یک **سیاست مکتوب سرمایه‌ای کردن** دارند: آستانه مبلغ، فهرست اجزای عمده هر کلاس دارایی، و قاعده روشن برای تعمیر چاه‌ها. این سیاست با حسابرس توافق و به‌طور یکنواخت اجرا می‌شود. در ERP همین تصمیم در زمان برنامه‌ریزی گرفته می‌شود: نوع دستور کار «تعمیر اساسی سرمایه‌ای» با «تعمیر» فرق دارد و گیرنده تسویه‌اش دارایی در جریان تکمیل است، نه مرکز هزینه.',
            en: 'Serious companies have a **written capitalisation policy**: an amount threshold, a list of significant components per asset class, and a clear rule for well workovers. It is agreed with the auditors and applied consistently. In the ERP the decision is taken at planning time: a “capital overhaul” work order type differs from a “repair”, and its settlement receiver is an asset under construction, not a cost centre.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'سرمایه‌ای کردن برای زیباتر کردن سود', en: 'Capitalising to make profit look better' },
          text: {
            fa: 'سرمایه‌ای کردن تعمیرات عادی سود امسال را بیشتر نشان می‌دهد و همین آن را به هدف بازبینی حسابرسان و سازمان امور مالیاتی تبدیل می‌کند. قواعد بازیافت هزینه در قرارداد نفتی هم ممکن است سرمایه‌ای و جاری را جدا تعریف کند. تصمیم را بر پایه ماهیت مخارج بگیرید، نه اثرش بر سود.',
            en: 'Capitalising ordinary repairs makes this year’s profit look higher, which is exactly why auditors and the tax authority scrutinise it. The petroleum contract’s cost-recovery rules may also define capital and operating costs separately. Decide by the nature of the spend, not its effect on profit.',
          },
        },
      ],
    },
    {
      id: 'auc-afe',
      title: { fa: 'دارایی در جریان تکمیل و AFE', en: 'Assets Under Construction and AFEs' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**AFE (Authority for Expenditure)** سند رسمی تأیید بودجه یک پروژه سرمایه‌ای است: حفاری یک چاه، نصب یک کمپرسور، ساخت یک خط لوله. در مشارکت (JV)، شرکت عامل AFE را طبق موافقت‌نامه عملیات مشترک (JOA) برای تأیید به شرکا می‌فرستد. پس از تأیید، پروژه با شماره AFE و بودجه‌اش در ERP باز می‌شود و همه مخارج روی آن جمع می‌شود.',
            en: 'An **AFE (authority for expenditure)** is the formal approval of a capital project’s budget: drilling a well, installing a compressor, building a pipeline. In a joint venture, the operator sends the AFE to the partners for approval under the joint operating agreement (JOA). Once approved, the project is opened in the ERP with its AFE number and budget, and every cost is collected on it.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'تا وقتی دارایی برای استفاده آماده نیست، مخارج پروژه در **دارایی در جریان تکمیل (AUC)** جمع می‌شود: یک حساب ترازنامه‌ای که **مستهلک نمی‌شود**. وقتی دارایی برای استفاده مورد نظر آماده شد (راه‌اندازی شد)، مانده AUC به دارایی نهایی منتقل (سرمایه‌ای) می‌شود و استهلاک از همان تاریخ شروع می‌شود.',
            en: 'Until the asset is ready for use, project costs are collected in **assets under construction (AUC)**, a balance-sheet account that is **not depreciated**. When the asset is ready for its intended use (commissioned), the AUC balance is transferred (capitalised) to the final asset, and depreciation starts from that date.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'AFE-2026-07: نصب کمپرسور سوم K-103 (بودجه 6,000,000)', en: 'AFE-2026-07: install a third compressor K-103 (budget 6,000,000)' },
          head: [
            { fa: 'مخارج', en: 'Cost' },
            { fa: 'مبلغ', en: 'Amount' },
            { fa: 'سرمایه‌ای می‌شود؟', en: 'Capitalised?' },
          ],
          rows: [
            [{ fa: 'پکیج کمپرسور (فروشنده)', en: 'Compressor package (vendor)' }, 3900000, { fa: 'بله', en: 'Yes' }],
            [{ fa: 'پیمانکار نصب', en: 'Installation contractor' }, 1100000, { fa: 'بله', en: 'Yes' }],
            [{ fa: 'لوله و شیرآلات از انبار مرکزی', en: 'Piping and valves from the Central Warehouse' }, 360000, { fa: 'بله', en: 'Yes' }],
            [{ fa: 'ساعات مهندسی داخلی پروژه', en: 'Internal engineering hours on the project' }, 240000, { fa: 'بله (مستقیماً قابل انتساب)', en: 'Yes (directly attributable)' }],
            [{ fa: 'راه‌اندازی و آزمون', en: 'Commissioning and testing' }, 150000, { fa: 'بله', en: 'Yes' }],
            [{ fa: 'آموزش اپراتورها', en: 'Operator training' }, 50000, { fa: 'خیر: هزینه', en: 'No: expense' }],
            [{ fa: 'جمع مخارج پروژه', en: 'Total project spend' }, 5800000, { fa: '96.7٪ بودجه AFE', en: '96.7% of the AFE budget' }],
            [{ fa: 'مبلغ سرمایه‌ای‌شده', en: 'Amount capitalised' }, 5750000, { fa: '', en: '' }],
          ],
          numericCols: [1],
        },
        {
          type: 'list',
          items: [
            {
              fa: '**جزو بهای دارایی**: قیمت خرید و حقوق گمرکی، آماده‌سازی محل، حمل و جابه‌جایی، نصب و مونتاژ، آزمون، حق‌الزحمه‌های تخصصی و برآورد اولیه مخارج برچیدن و بازسازی محل.',
              en: '**Part of the asset’s cost**: purchase price and import duties, site preparation, delivery and handling, installation and assembly, testing, professional fees and the initial estimate of dismantling and site-restoration costs.',
            },
            {
              fa: '**جزو بهای دارایی نیست**: آموزش کارکنان، سربار عمومی و اداری، مراسم افتتاح و زیان‌های عملیاتی دوره آغاز به کار.',
              en: '**Not part of the asset’s cost**: staff training, general and administrative overheads, opening ceremonies and early operating losses.',
            },
          ],
        },
        {
          type: 'journal',
          title: { fa: 'گردش AFE-2026-07 در دفاتر', en: 'AFE-2026-07 through the books' },
          entries: [
            {
              date: { fa: 'رسید پکیج کمپرسور', en: 'Compressor package receipt' },
              lines: [
                { account: ac.auc, debit: 3900000 },
                { account: ac.grir, credit: 3900000 },
              ],
            },
            {
              date: { fa: 'تأیید SESهای پیمانکاران', en: 'Contractor SESs approved' },
              lines: [
                { account: ac.auc, debit: 1250000 },
                { account: ac.grir, credit: 1250000 },
              ],
              memo: { fa: 'نصب 1,100,000 و راه‌اندازی 150,000.', en: 'Installation 1,100,000 and commissioning 150,000.' },
            },
            {
              date: { fa: 'حواله انبار به پروژه', en: 'Goods issue to the project' },
              lines: [
                { account: ac.auc, debit: 360000 },
                { account: ac.inventory, credit: 360000 },
              ],
            },
            {
              date: { fa: 'ساعات مهندسی', en: 'Engineering hours' },
              lines: [
                { account: ac.auc, debit: 240000 },
                { account: ac.engLabour, credit: 240000 },
              ],
            },
            {
              date: { fa: 'آموزش اپراتورها', en: 'Operator training' },
              lines: [
                { account: ac.training, debit: 50000 },
                { account: ac.grir, credit: 50000 },
              ],
              memo: { fa: 'روی همان پروژه پیگیری می‌شود، اما هزینه است نه دارایی.', en: 'Tracked on the same project, but an expense, not an asset.' },
            },
            {
              date: { fa: 'راه‌اندازی و سرمایه‌ای کردن', en: 'Ready for use: capitalisation' },
              lines: [
                { account: ac.plantK103, debit: 5750000 },
                { account: ac.auc, credit: 5750000 },
              ],
              memo: { fa: 'مانده AUC به دارایی نهایی منتقل شد و استهلاک از این تاریخ شروع می‌شود.', en: 'The AUC balance moves to the final asset; depreciation starts from this date.' },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'دو مسیر فنی، یک نتیجه', en: 'Two technical routes, one result' },
          text: {
            fa: 'برخی ERPها مخارج پروژه را ابتدا روی حساب‌های هزینه پروژه ثبت می‌کنند و در پایان هر ماه با **تسویه** آن را به AUC منتقل می‌کنند؛ برخی دیگر از همان ابتدا AUC را بدهکار می‌کنند. نتیجه یکسان است: در پایان هر ماه، مخارج سرمایه‌ای پروژه در ترازنامه به‌صورت AUC دیده می‌شود.',
            en: 'Some ERPs first post project costs to cost accounts on the project and move them to AUC in a month-end **settlement**; others debit AUC from the start. The result is the same: at each month-end, the project’s capital spend sits on the balance sheet as AUC.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: AFE در مشارکت', en: 'In practice: AFEs in a joint venture' },
          text: {
            fa: 'اگر مخارج از بودجه AFE بیش از حد مجاز در JOA (مثلاً 10٪، رقم نمونه) بیشتر شود، شرکت عامل باید **AFE تکمیلی** بگیرد و شرکا آن را تأیید کنند. AUCهایی که ماه‌ها گردشی ندارند را بررسی کنید: پروژه متوقف‌شده باید کاهش ارزش یابد یا از دفاتر حذف شود.',
            en: 'If spend exceeds the AFE by more than the tolerance in the JOA (e.g. 10%, an illustrative figure), the operator must obtain a **supplementary AFE** approved by the partners. Review AUC balances with no activity for months: an abandoned project must be impaired or written off.',
          },
        },
      ],
    },
    {
      id: 'depreciation-depletion',
      title: { fa: 'استهلاک و استهلاک ذخایر', en: 'Depreciation and Depletion' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**استهلاک** بهای دارایی را در طول عمر مفیدش تخصیص می‌دهد. برای دارایی‌های عمومی مانند ساختمان، خودرو و تجهیزات اداری، روش **خط مستقیم** رایج است. اما دارایی‌های نفت و گاز (چاه‌ها، خطوط جریان، تأسیسات اختصاصی میدان) با تولید ذخایر مصرف می‌شوند، نه با گذشت تقویم. برای آن‌ها روش **واحد تولید (UOP)** به کار می‌رود که در صنعت نفت معمولاً **استهلاک ذخایر (Depletion)** نامیده می‌شود. مجموع این‌ها را گاهی DD&A می‌نامند.',
            en: '**Depreciation** allocates an asset’s cost over its useful life. For general assets such as buildings, vehicles and office equipment, the **straight-line** method is common. But oil and gas assets (wells, flowlines, field-dedicated facilities) are used up as reserves are produced, not as the calendar turns. For them, the **units-of-production (UOP)** method is used, usually called **depletion** in the oil industry. Together these are often reported as DD&A.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'استهلاک خط مستقیم = (بهای تمام‌شده − ارزش اسقاط) ÷ عمر مفید',
            en: 'Straight-line depreciation = (cost − residual value) ÷ useful life',
          },
          note: {
            fa: 'ساختمان دفتر میدان: (1,800,000 − 200,000) ÷ 40 سال = 40,000 در سال.',
            en: 'Field office building: (1,800,000 − 200,000) ÷ 40 years = 40,000 a year.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'نرخ واحد تولید = (بهای تمام‌شده − ارزش اسقاط − استهلاک انباشته) ÷ ذخایر باقی‌مانده ابتدای دوره؛ استهلاک ذخایر دوره = نرخ × تولید دوره',
            en: 'UOP rate = (cost − residual − accumulated depletion) ÷ remaining reserves at the start of the period; period depletion = rate × production in the period',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'دارایی‌های نفت و گاز میدان آریا', en: 'Arya field oil and gas properties' },
          text: {
            fa: 'بهای سرمایه‌ای‌شده چاه‌های AR-01 تا AR-12، خطوط جریان و تأسیسات جمع‌آوری 72,000,000 است. ذخایر اثبات‌شده توسعه‌یافته در ابتدای سال 24,000,000 بشکه معادل نفت (boe) است. نرخ = 72,000,000 ÷ 24,000,000 = 3.0 در هر boe. تولید امسال 2,400,000 boe است، پس استهلاک ذخایر امسال = 3.0 × 2,400,000 = 7,200,000.',
            en: 'The capitalised cost of wells AR-01 to AR-12, flowlines and gathering facilities is 72,000,000. Proved developed reserves at the start of the year are 24,000,000 barrels of oil equivalent (boe). Rate = 72,000,000 ÷ 24,000,000 = 3.0 per boe. This year’s production is 2,400,000 boe, so this year’s depletion = 3.0 × 2,400,000 = 7,200,000.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'واحد تولید در برابر خط مستقیم 10 ساله برای همان 72,000,000 (بدون تجدیدنظر در ذخایر)',
            en: 'UOP vs 10-year straight-line for the same 72,000,000 (no reserve revisions)',
          },
          head: [
            { fa: 'سال', en: 'Year' },
            { fa: 'تولید (boe)', en: 'Production (boe)' },
            { fa: 'استهلاک ذخایر (UOP)', en: 'Depletion (UOP)' },
            { fa: 'خط مستقیم', en: 'Straight-line' },
          ],
          rows: [
            [{ fa: 'سال 1', en: 'Year 1' }, 2400000, 7200000, 7200000],
            [{ fa: 'سال 2', en: 'Year 2' }, 3000000, 9000000, 7200000],
            [{ fa: 'سال 3', en: 'Year 3' }, 2700000, 8100000, 7200000],
          ],
          numericCols: [1, 2, 3],
        },
        {
          type: 'diagram',
          id: 'depreciation',
          caption: {
            fa: 'ارزش دفتری در طول زمان: خط مستقیم یکنواخت و روش نزولی ابتدا تندتر کاهش می‌یابد. روش واحد تولید (در نمودار نیست) به جای تقویم، از نیمرخ تولید پیروی می‌کند.',
            en: 'Book value over time: straight-line falls evenly and declining balance falls faster at first. Units-of-production (not shown) follows the production profile instead of the calendar.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'ذخایر هر سال دوباره برآورد می‌شوند. تجدیدنظر در ذخایر **تغییر برآورد** است و آینده‌نگر اعمال می‌شود: سال‌های گذشته اصلاح نمی‌شوند؛ ارزش دفتری باقی‌مانده بر ذخایر باقی‌مانده جدید تقسیم و نرخ تازه حساب می‌شود.',
            en: 'Reserves are re-estimated every year. A reserves revision is a **change in estimate** applied prospectively: past years are not restated; the remaining book value is divided by the new remaining reserves to give a fresh rate.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'چه کسی مالک دارایی است؟', en: 'Who owns the asset?' },
          text: {
            fa: 'در این دوره فرض می‌کنیم مسار پترولیوم به‌عنوان شرکت عامل و شریک مشارکت، سهم خود از دارایی‌ها را در دفاترش نگه می‌دارد. اما در برخی قراردادهای ایران (مانند بیع متقابل و IPC) تأسیسات متعلق به شرکت ملی نفت است و پیمانکار مخارج خود را از محل قرارداد بازیافت می‌کند. آنجا حسابداری پیمانکار به شرایط قرارداد بستگی دارد و باید با حسابرس تصمیم‌گیری شود؛ قواعد این درس را بی‌بررسی به آن قراردادها تعمیم ندهید.',
            en: 'In this course we assume Masar Petroleum, as operator and joint-venture partner, carries its share of the assets on its books. But under some Iranian contracts (such as buy-back and the IPC) the facilities belong to the National Iranian Oil Company and the contractor recovers its spend under the contract. The contractor’s accounting then depends on the contract terms and must be settled with the auditors; don’t apply this lesson’s rules to those contracts without checking.',
          },
        },
      ],
    },
    {
      id: 'components-impairment-retirement',
      title: { fa: 'اجزای عمده، کاهش ارزش و کنارگذاری', en: 'Components, Impairment and Retirement' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'طبق IAS 16، هر جزء از دارایی که بهایش نسبت به کل قابل توجه است و عمر متفاوتی دارد، **جداگانه مستهلک** می‌شود. کمپرسور K-103 یک «دستگاه» است، اما برای حسابداری چهار جزء دارد. حتی هزینه برآوردی نخستین تعمیر اساسی هم از بهای خرید جدا و به‌عنوان یک جزء ثبت می‌شود.',
            en: 'Under IAS 16, each part of an asset whose cost is significant to the total and whose life differs is **depreciated separately**. Compressor K-103 is one “machine”, but for accounting it has four components. Even the estimated cost of the first major overhaul is split out of the purchase cost as its own component.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'اجزای کمپرسور K-103 (ارزش اسقاط برای سادگی صفر)', en: 'Components of compressor K-103 (residual value nil for simplicity)' },
          head: [
            { fa: 'جزء', en: 'Component' },
            { fa: 'بها', en: 'Cost' },
            { fa: 'عمر (سال)', en: 'Life (years)' },
            { fa: 'استهلاک سالانه', en: 'Annual depreciation' },
          ],
          rows: [
            [{ fa: 'بدنه و پوسته کمپرسور', en: 'Compressor body and casing' }, 2500000, 25, 100000],
            [{ fa: 'توربین گازی محرک', en: 'Gas turbine driver' }, 2000000, 10, 200000],
            [{ fa: 'سامانه کنترل', en: 'Control system' }, 750000, 6, 125000],
            [{ fa: 'نخستین تعمیر اساسی', en: 'First major overhaul' }, 500000, 5, 100000],
            [{ fa: 'جمع', en: 'Total' }, 5750000, { fa: '', en: '' }, 525000],
          ],
          numericCols: [1, 2, 3],
        },
        {
          type: 'p',
          text: {
            fa: 'اگر K-103 یک دارایی واحد با عمر 20 سال بود، استهلاک سالانه 5,750,000 ÷ 20 = 287,500 می‌شد. رویکرد اجزا 525,000 در سال نشان می‌دهد، چون اجزای کوتاه‌عمر سریع‌تر مصرف می‌شوند؛ تصویری واقعی‌تر. پس از 5 سال، جزء تعمیر اساسی کاملاً مستهلک شده است (بها 500,000، استهلاک انباشته 500,000). تعمیر اساسی دوم با بهای 600,000 جزء تازه‌ای می‌شود و جزء قدیمی از دفاتر حذف می‌شود.',
            en: 'If K-103 were one asset with a 20-year life, annual depreciation would be 5,750,000 ÷ 20 = 287,500. The component approach shows 525,000 a year because short-lived parts are used up faster, a truer picture. After 5 years the overhaul component is fully depreciated (cost 500,000, accumulated depreciation 500,000). The second overhaul, costing 600,000, becomes a new component and the old one is removed.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'تعویض جزء تعمیر اساسی K-103', en: 'Replacing the K-103 overhaul component' },
          entries: [
            {
              date: { fa: 'حذف جزء قدیمی', en: 'Derecognise the old component' },
              lines: [
                { account: ac.accDep, debit: 500000 },
                { account: ac.plantOverhaul, credit: 500000 },
              ],
              memo: { fa: 'کاملاً مستهلک شده؛ سود یا زیانی ندارد.', en: 'Fully depreciated, so no gain or loss.' },
            },
            {
              date: { fa: 'سرمایه‌ای کردن تعمیر اساسی دوم', en: 'Capitalise the second overhaul' },
              lines: [
                { account: ac.plantOverhaul, debit: 600000 },
                { account: ac.aucGeneric, credit: 600000 },
              ],
              memo: { fa: 'از دستور کار سرمایه‌ای و AUC؛ سالی 120,000 تا تعمیر بعدی مستهلک می‌شود.', en: 'From the capital work order via AUC; depreciated at 120,000 a year until the next overhaul.' },
            },
          ],
        },
        {
          type: 'h',
          text: { fa: 'کاهش ارزش (Impairment)', en: 'Impairment' },
        },
        {
          type: 'p',
          text: {
            fa: 'دارایی نباید در دفاتر بیشتر از مبلغی باشد که می‌تواند بازیافت کند. نشانه‌های کاهش ارزش: افت شدید قیمت نفت یا گاز، کاهش برآورد ذخایر، آسیب فیزیکی، تغییر نامطلوب مقررات یا عملکرد ضعیف‌تر از انتظار. اگر نشانه‌ای باشد، **مبلغ بازیافتنی** محاسبه می‌شود: بیشترِ **ارزش منصفانه منهای مخارج واگذاری** و **ارزش اقتصادی (ارزش حاصل از استفاده)**. آزمون معمولاً در سطح **واحد مولد وجه نقد** انجام می‌شود، مثلاً کل سامانه صادرات گاز (IAS 36).',
            en: 'An asset must not be carried above what it can recover. Impairment indicators: a sharp fall in oil or gas prices, a reserves downgrade, physical damage, an adverse regulatory change or performance below expectations. If there is an indicator, the **recoverable amount** is computed: the higher of **fair value less costs of disposal** and **value in use**. The test is usually done at the level of a **cash-generating unit**, for example the whole gas export system (IAS 36).',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'زیان کاهش ارزش = مبلغ دفتری − مبلغ بازیافتنی (اگر مثبت باشد)؛ مبلغ بازیافتنی = بیشترِ ارزش منصفانه منهای مخارج واگذاری و ارزش اقتصادی',
            en: 'Impairment loss = carrying amount − recoverable amount (if positive); recoverable amount = the higher of fair value less costs of disposal and value in use',
          },
          note: {
            fa: 'سامانه صادرات گاز آریا (ایستگاه تقویت فشار، خط لوله صادرات و ایستگاه اندازه‌گیری): مبلغ دفتری 18,000,000؛ پس از کاهش قیمت و حجم قراردادی، ارزش منصفانه منهای مخارج واگذاری 14,200,000 و ارزش اقتصادی 15,500,000. مبلغ بازیافتنی 15,500,000 و زیان کاهش ارزش 2,500,000 است.',
            en: 'Arya gas export system (compressor station, export pipeline and metering station): carrying amount 18,000,000; after lower prices and contracted volumes, fair value less costs of disposal 14,200,000 and value in use 15,500,000. Recoverable amount 15,500,000; impairment loss 2,500,000.',
          },
        },
        {
          type: 'h',
          text: { fa: 'کنارگذاری و فروش', en: 'Retirement and disposal' },
        },
        {
          type: 'p',
          text: {
            fa: 'وقتی دارایی از رده خارج، فروخته یا اسقاط می‌شود، بها و استهلاک انباشته‌اش از دفاتر حذف می‌شود و تفاوت ارزش دفتری با مبلغ دریافتی، سود یا زیان کنارگذاری است. کمپرسور قدیمی K-100 با بهای 3,200,000 و استهلاک انباشته 2,900,000 (ارزش دفتری 300,000) به‌صورت اسقاط به 120,000 فروخته شد؛ زیان 180,000.',
            en: 'When an asset is retired, sold or scrapped, its cost and accumulated depreciation are removed, and the difference between book value and proceeds is the gain or loss on disposal. The old compressor K-100, cost 3,200,000 and accumulated depreciation 2,900,000 (book value 300,000), was sold as scrap for 120,000: a loss of 180,000.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'کاهش ارزش و کنارگذاری', en: 'Impairment and disposal' },
          entries: [
            {
              date: { fa: 'کاهش ارزش', en: 'Impairment' },
              lines: [
                { account: ac.impLoss, debit: 2500000 },
                { account: ac.accImp, credit: 2500000 },
              ],
              memo: { fa: 'سامانه صادرات گاز: 18,000,000 − 15,500,000.', en: 'Gas export system: 18,000,000 − 15,500,000.' },
            },
            {
              date: { fa: 'فروش K-100 به‌صورت اسقاط', en: 'K-100 sold as scrap' },
              lines: [
                { account: ac.cash, debit: 120000 },
                { account: ac.accDep, debit: 2900000 },
                { account: ac.lossDisposal, debit: 180000 },
                { account: ac.plant, credit: 3200000 },
              ],
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'تعهد برچیدن و بازسازی', en: 'Decommissioning obligations' },
          text: {
            fa: 'چاه‌ها و تأسیسات نفت و گاز در پایان عمر باید مسدود، برچیده و محلشان بازسازی شود. ارزش فعلی برآورد این مخارج هنگام ساخت دارایی به بهای آن افزوده و هم‌زمان یک **ذخیره** شناسایی می‌شود (IAS 16 و IAS 37). جزئیات آن خارج از این درس است، اما بدانید چنین تعهدی بخشی از بهای دارایی‌های نفتی است.',
            en: 'Oil and gas wells and facilities must be plugged, removed and the site restored at the end of their life. The present value of the estimated cost is added to the asset’s cost when it is built, with a matching **provision** (IAS 16 and IAS 37). The details are beyond this lesson, but know that such an obligation is part of the cost of petroleum assets.',
          },
        },
      ],
    },
    {
      id: 'erp-fixed-assets',
      title: { fa: 'در ERP: دفتر معین دارایی‌های ثابت و ثبت‌های خودکار', en: 'In the ERP: The Fixed-Asset Sub-Ledger and Automatic Postings' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در ERP هر دارایی یک **رکورد دارایی** در **دفتر معین دارایی‌های ثابت** دارد. جمع رکوردهای هر کلاس دارایی همیشه با **حساب کنترل** آن در دفتر کل برابر است، چون هیچ‌کس مستقیم روی این حساب‌ها سند نمی‌زند؛ همه ثبت‌ها از راه تراکنش‌های دارایی (تحصیل، انتقال، استهلاک، کنارگذاری) انجام می‌شوند.',
            en: 'In the ERP each asset has an **asset record** in the **fixed-asset sub-ledger**. The records of each asset class always add up to its **control account** in the general ledger, because nobody posts to those accounts directly; every posting comes from an asset transaction (acquisition, transfer, depreciation, retirement).',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'تجهیز (شیء فنی، ماژول نگهداری)', en: 'Equipment (technical object, maintenance module)' },
            items: [
              { fa: 'شماره سریال، سازنده، مشخصات فنی', en: 'Serial number, manufacturer, technical data' },
              { fa: 'سابقه خرابی و دستورهای کار', en: 'Failure and work order history' },
              { fa: 'نصب‌شده در یک محل عملیاتی', en: 'Installed at a functional location' },
              { fa: 'مالک: مهندسی نگهداری', en: 'Owner: maintenance engineering' },
            ],
          },
          right: {
            title: { fa: 'دارایی (شیء مالی، ماژول مالی)', en: 'Asset (financial object, Finance module)' },
            items: [
              { fa: 'بها، استهلاک انباشته، ارزش دفتری', en: 'Cost, accumulated depreciation, book value' },
              { fa: 'کلاس دارایی، عمر مفید، روش استهلاک', en: 'Asset class, useful life, depreciation method' },
              { fa: 'مرکز هزینه‌ای که استهلاک را می‌گیرد', en: 'The cost centre that receives depreciation' },
              { fa: 'مالک: حسابداری دارایی‌ها', en: 'Owner: asset accounting' },
            ],
          },
        },
        {
          type: 'p',
          text: {
            fa: 'این دو با هم پیوند دارند، اما یکی نیستند: دارایی K-103 چهار جزء مالی دارد، در حالی که در نگهداری چند تجهیز (توربین، کمپرسور، سامانه کنترل) است. وقتی تجهیزی جابه‌جا یا تعویض می‌شود، پیوندش با دارایی هم باید به‌روز شود؛ وگرنه دفتر دارایی‌ها و واقعیت میدان از هم فاصله می‌گیرند.',
            en: 'The two are linked but not the same: asset K-103 has four financial components, while maintenance sees several pieces of equipment (turbine, compressor, control system). When equipment is moved or replaced, its link to the asset must be updated too; otherwise the asset register and the field drift apart.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'داده پایه، اسناد و نقش‌ها در حسابداری دارایی‌ها', en: 'Master data, documents and roles in asset accounting' },
          head: [
            { fa: 'مورد', en: 'Item' },
            { fa: 'نوع', en: 'Type' },
            { fa: 'چه کسی', en: 'Who' },
          ],
          rows: [
            [{ fa: 'کلاس دارایی (حساب‌های دفتر کل، عمر و روش پیش‌فرض)', en: 'Asset class (GL accounts, default life and method)' }, { fa: 'داده پایه', en: 'Master data' }, { fa: 'مالی', en: 'Finance' }],
            [{ fa: 'رکورد دارایی با پیوند به تجهیز و مرکز هزینه', en: 'Asset record linked to equipment and a cost centre' }, { fa: 'داده پایه', en: 'Master data' }, { fa: 'حسابدار دارایی‌ها', en: 'Asset accountant' }],
            [{ fa: 'نواحی استهلاک: دفتری (IFRS)، مالیاتی، گزارش مشارکت', en: 'Depreciation areas: book (IFRS), tax, joint-venture reporting' }, { fa: 'داده پایه', en: 'Master data' }, { fa: 'مالی', en: 'Finance' }],
            [{ fa: 'AFE و پروژه با بودجه و قاعده تسویه', en: 'AFE and project with budget and settlement rule' }, { fa: 'داده پایه', en: 'Master data' }, { fa: 'مهندس پروژه؛ کنترلر هزینه', en: 'Project engineer; cost controller' }],
            [{ fa: 'تأیید AFE', en: 'AFE approval' }, { fa: 'سند (گردش کار)', en: 'Document (workflow)' }, { fa: 'مدیریت؛ کمیته عملیاتی شرکا', en: 'Management; partners’ operating committee' }],
            [{ fa: 'تسویه پروژه یا دستور کار سرمایه‌ای به AUC', en: 'Settlement of project or capital work order to AUC' }, { fa: 'سند پایان ماه', en: 'Month-end document' }, { fa: 'کنترلر هزینه', en: 'Cost controller' }],
            [{ fa: 'سرمایه‌ای کردن AUC به دارایی نهایی', en: 'Capitalising AUC to the final asset' }, { fa: 'سند', en: 'Document' }, { fa: 'حسابدار دارایی‌ها', en: 'Asset accountant' }],
            [{ fa: 'اجرای ماهانه استهلاک', en: 'Monthly depreciation run' }, { fa: 'سند خودکار', en: 'Automatic document' }, { fa: 'مالی؛ تأیید مدیر مالی', en: 'Finance; approved by the Finance manager' }],
            [{ fa: 'کنارگذاری و کاهش ارزش', en: 'Retirement and impairment' }, { fa: 'سند با تأیید', en: 'Approved document' }, { fa: 'حسابدار دارایی‌ها؛ مدیر مالی', en: 'Asset accountant; Finance manager' }],
          ],
        },
        {
          type: 'table',
          caption: { fa: 'گزیده دفتر معین دارایی‌های ایستگاه تقویت فشار در پایان سال', en: 'Extract of the compressor station asset sub-ledger at year-end' },
          head: [
            { fa: 'شماره', en: 'Asset no.' },
            { fa: 'شرح', en: 'Description' },
            { fa: 'بها', en: 'Cost' },
            { fa: 'استهلاک انباشته', en: 'Accum. dep.' },
            { fa: 'ارزش دفتری', en: 'Book value' },
          ],
          rows: [
            [{ fa: 'A-100230', en: 'A-100230' }, { fa: 'پکیج کمپرسور K-101', en: 'K-101 compressor package' }, 4800000, 2880000, 1920000],
            [{ fa: 'A-100231', en: 'A-100231' }, { fa: 'جزء تعمیر اساسی K-101 (6 ماه)', en: 'K-101 overhaul component (6 months)' }, 2400000, 240000, 2160000],
            [{ fa: 'A-100232', en: 'A-100232' }, { fa: 'پکیج کمپرسور K-102', en: 'K-102 compressor package' }, 4800000, 2640000, 2160000],
            [{ fa: 'A-100245', en: 'A-100245' }, { fa: 'کمپرسور K-103 (4 جزء، سال اول)', en: 'K-103 compressor (4 components, year 1)' }, 5750000, 525000, 5225000],
            [{ fa: 'A-900012', en: 'A-900012' }, { fa: 'AUC: ارتقای کولر گاز (AFE-2026-11)', en: 'AUC: gas cooler upgrade (AFE-2026-11)' }, 830000, 0, 830000],
            [{ fa: '', en: '' }, { fa: 'جمع', en: 'Total' }, 18580000, 6285000, 12295000],
          ],
          numericCols: [2, 3, 4],
        },
        {
          type: 'p',
          text: {
            fa: 'تعمیر اساسی K-101 با دستور کار سرمایه‌ای `WO-70110` اجرا شد. هزینه‌های قطعه، پیمانکار و دستمزد ابتدا روی دستور کار نشستند؛ در پایان ماه، قاعده تسویه آن‌ها را به AUC برد و پس از راه‌اندازی، AUC به جزء تعمیر اساسی منتقل شد. اجرای ماهانه استهلاک هم برای K-103 (525,000 ÷ 12 = 43,750) و جزء تعمیر اساسی K-101 (2,400,000 ÷ 60 ماه = 40,000) ثبت خودکار می‌سازد:',
            en: 'The K-101 overhaul ran on capital work order `WO-70110`. Parts, contractor and labour costs first landed on the work order; at month-end its settlement rule moved them to AUC, and after recommissioning the AUC was transferred to the overhaul component. The monthly depreciation run then posts automatically for K-103 (525,000 ÷ 12 = 43,750) and the K-101 overhaul component (2,400,000 ÷ 60 months = 40,000):',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های خودکار مالی در حسابداری دارایی‌ها', en: 'Automatic Finance postings in asset accounting' },
          entries: [
            {
              date: { fa: 'تسویه WO-70110', en: 'WO-70110 settlement' },
              lines: [
                { account: ac.aucOverhaul, debit: 2400000 },
                { account: ac.capitalisedMaint, credit: 2400000 },
              ],
              memo: {
                fa: 'هزینه‌هایی که روی دستور کار ثبت شده بود از سود و زیان خارج و به ترازنامه منتقل شد.',
                en: 'Costs recorded on the work order leave profit or loss and move to the balance sheet.',
              },
            },
            {
              date: { fa: 'سرمایه‌ای کردن', en: 'Capitalisation' },
              lines: [
                { account: ac.plantOverhaul, debit: 2400000 },
                { account: ac.aucOverhaul, credit: 2400000 },
              ],
            },
            {
              date: { fa: 'اجرای ماهانه استهلاک', en: 'Monthly depreciation run' },
              lines: [
                { account: ac.depExp, debit: 83750 },
                { account: ac.accDep, credit: 83750 },
              ],
              memo: { fa: '43,750 + 40,000.', en: '43,750 + 40,000.' },
            },
            {
              date: { fa: 'استهلاک ذخایر سالانه', en: 'Annual depletion' },
              lines: [
                { account: ac.depletionExp, debit: 7200000 },
                { account: ac.accDepletion, credit: 7200000 },
              ],
              memo: { fa: '3.0 × 2,400,000 boe (در عمل ماهانه و با تولید هر ماه ثبت می‌شود).', en: '3.0 × 2,400,000 boe (in practice posted monthly on each month’s production).' },
            },
          ],
        },
        {
          type: 'h',
          text: { fa: 'کنترل‌ها و اشتباهات رایج', en: 'Controls and common mistakes' },
        },
        {
          type: 'list',
          items: [
            {
              fa: 'رها کردن پروژه تمام‌شده در AUC: استهلاک شروع نمی‌شود، سود بیشتر و دارایی‌ها بیش از واقع نشان داده می‌شوند. AUC را ماهانه سن‌بندی و بررسی کنید.',
              en: 'Leaving a finished project in AUC: depreciation never starts, so profit and assets are overstated. Age and review AUC every month.',
            },
            {
              fa: 'تسویه دستور کار تعمیر اساسی سرمایه‌ای به مرکز هزینه: دارایی کمتر و هزینه بیشتر از واقع.',
              en: 'Settling a capital overhaul work order to a cost centre: assets understated and expenses overstated.',
            },
            {
              fa: 'فراموش کردن حذف جزء قدیمی هنگام تعویض: یک دارایی دو بار در دفاتر می‌ماند.',
              en: 'Forgetting to derecognise the old part on replacement: the same asset sits in the books twice.',
            },
            {
              fa: 'ثبت دستی سند روی حساب کنترل دارایی‌ها: دفتر معین و دفتر کل از هم جدا می‌شوند.',
              en: 'Posting manual journals to the asset control accounts: the sub-ledger and the general ledger drift apart.',
            },
            {
              fa: 'سرمایه‌ای کردن آموزش و سربار اداری پروژه: این‌ها مستقیماً قابل انتساب نیستند و هزینه‌اند.',
              en: 'Capitalising project training and admin overheads: they are not directly attributable and must be expensed.',
            },
          ],
        },
      ],
    },
    {
      id: 'practice',
      title: { fa: 'تمرین‌ها', en: 'Exercises' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'چهار تمرین از ساده به دشوار، هر کدام با موقعیتی تازه در مسار پترولیوم. ثبت‌ها را کامل بنویسید و تراز بودنشان را کنترل کنید.',
            en: 'Four exercises from easy to hard, each a new situation at Masar Petroleum. Write the entries in full and check that they balance.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'سرمایه‌ای یا جاری؟', en: 'CAPEX or OPEX?' },
          difficulty: 'easy',
          problem: {
            fa: 'هر قلم را سرمایه‌ای یا جاری طبقه‌بندی کنید و جمع هر گروه را حساب کنید.',
            en: 'Classify each item as CAPEX or OPEX and total each group.',
          },
          given: {
            head: [
              { fa: 'قلم', en: 'Item' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            rows: [
              [{ fa: 'الف: تعویض بلبرینگ فرسوده در تعمیر عادی پمپ P-140', en: 'a: Replace worn bearings in a routine repair of pump P-140' }, 18000],
              [{ fa: 'ب: نصب سامانه جدید آشکارساز گاز که بازنگری HSE الزامی کرده است', en: 'b: Install a new gas detection system required by the HSE review' }, 220000],
              [{ fa: 'ج: تعمیر اساسی 4 ساله توربین گازی K-102', en: 'c: Four-yearly major overhaul of the K-102 gas turbine' }, 1600000],
              [{ fa: 'د: رنگ‌آمیزی مخازن ذخیره', en: 'd: Repaint the storage tanks' }, 45000],
              [{ fa: 'ه: آموزش اپراتورها برای سامانه کنترل جدید', en: 'e: Train operators on the new control system' }, 30000],
              [{ fa: 'و: تغییر پروانه‌های K-102 برای 15٪ ظرفیت بیشتر', en: 'f: Re-rate K-102 impellers for 15% more capacity' }, 900000],
            ],
            numericCols: [1],
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'قلم', en: 'Item' },
                { fa: 'طبقه', en: 'Class' },
                { fa: 'دلیل', en: 'Reason' },
              ],
              rows: [
                [{ fa: 'الف', en: 'a' }, { fa: 'جاری', en: 'OPEX' }, { fa: 'نگهداری روزمره', en: 'Day-to-day servicing' }],
                [{ fa: 'ب', en: 'b' }, { fa: 'سرمایه‌ای', en: 'CAPEX' }, { fa: 'دارایی ایمنی لازم برای ادامه بهره‌برداری از سایر دارایی‌ها', en: 'Safety equipment needed to keep operating the other assets' }],
                [{ fa: 'ج', en: 'c' }, { fa: 'سرمایه‌ای', en: 'CAPEX' }, { fa: 'جزء تعمیر اساسی دوره‌ای', en: 'Periodic overhaul component' }],
                [{ fa: 'د', en: 'd' }, { fa: 'جاری', en: 'OPEX' }, { fa: 'حفظ وضعیت', en: 'Maintains condition' }],
                [{ fa: 'ه', en: 'e' }, { fa: 'جاری', en: 'OPEX' }, { fa: 'آموزش هرگز جزو بهای دارایی نیست', en: 'Training is never part of an asset’s cost' }],
                [{ fa: 'و', en: 'f' }, { fa: 'سرمایه‌ای', en: 'CAPEX' }, { fa: 'افزایش ظرفیت', en: 'Increases capacity' }],
              ],
            },
            {
              type: 'steps',
              items: [
                { title: { fa: 'جمع سرمایه‌ای', en: 'CAPEX total' }, text: { fa: '220,000 + 1,600,000 + 900,000 = 2,720,000.', en: '220,000 + 1,600,000 + 900,000 = 2,720,000.' } },
                { title: { fa: 'جمع جاری', en: 'OPEX total' }, text: { fa: '18,000 + 45,000 + 30,000 = 93,000.', en: '18,000 + 45,000 + 30,000 = 93,000.' } },
              ],
            },
          ],
          answer: { fa: 'سرمایه‌ای 2,720,000 (ب، ج، و)؛ جاری 93,000 (الف، د، ه).', en: 'CAPEX 2,720,000 (b, c, f); OPEX 93,000 (a, d, e).' },
        },
        {
          type: 'exercise',
          title: { fa: 'AFE جداکننده جدید V-202', en: 'The AFE for new separator V-202' },
          difficulty: 'medium',
          problem: {
            fa: 'AFE نصب جداکننده V-202 با بودجه 1,700,000 تأیید شده است. مبلغ AUC در زمان راه‌اندازی، ثبت‌های خلاصه و ثبت سرمایه‌ای کردن را بنویسید و درصد مصرف بودجه AFE را حساب کنید. اگر JOA (در این مثال) برای مازاد بیش از 10٪ AFE تکمیلی بخواهد، آیا لازم است؟',
            en: 'An AFE to install separator V-202 was approved for 1,700,000. Give the AUC balance at commissioning, the summary entries and the capitalisation entry, and compute the share of the AFE budget used. If the JOA (in this example) requires a supplementary AFE for overruns above 10%, is one needed?',
          },
          given: {
            head: [
              { fa: 'مخارج', en: 'Cost' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            rows: [
              [{ fa: 'تجهیز (رسید کالا)', en: 'Equipment (goods receipt)' }, 1200000],
              [{ fa: 'پیمانکار نصب', en: 'Installation contractor' }, 380000],
              [{ fa: 'مواد از انبار', en: 'Materials from the warehouse' }, 95000],
              [{ fa: 'ساعات مهندسی داخلی', en: 'Internal engineering hours' }, 60000],
              [{ fa: 'راه‌اندازی', en: 'Commissioning' }, 25000],
              [{ fa: 'مراسم افتتاح و سربار اداری', en: 'Opening event and admin overhead' }, 15000],
            ],
            numericCols: [1],
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'مبلغ AUC', en: 'AUC balance' },
                  text: {
                    fa: '1,200,000 + 380,000 + 95,000 + 60,000 + 25,000 = 1,760,000. مراسم و سربار (15,000) هزینه است.',
                    en: '1,200,000 + 380,000 + 95,000 + 60,000 + 25,000 = 1,760,000. The event and overhead (15,000) are expenses.',
                  },
                },
                {
                  title: { fa: 'مقایسه با AFE', en: 'Against the AFE' },
                  text: {
                    fa: 'کل مخارج 1,775,000؛ 1,775,000 ÷ 1,700,000 ≈ 104.4٪. مازاد 75,000 (حدود 4.4٪) کمتر از 10٪ است؛ AFE تکمیلی لازم نیست، اما مازاد باید به شرکا گزارش شود.',
                    en: 'Total spend 1,775,000; 1,775,000 ÷ 1,700,000 ≈ 104.4%. The 75,000 overrun (about 4.4%) is under 10%, so no supplementary AFE is needed, but the overrun must be reported to the partners.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'رسید و خدمات', en: 'Receipts and services' },
                  lines: [
                    { account: ac.aucGeneric, debit: 1605000 },
                    { account: ac.grir, credit: 1605000 },
                  ],
                  memo: { fa: '1,200,000 + 380,000 + 25,000.', en: '1,200,000 + 380,000 + 25,000.' },
                },
                {
                  date: { fa: 'حواله انبار', en: 'Goods issue' },
                  lines: [
                    { account: ac.aucGeneric, debit: 95000 },
                    { account: ac.inventory, credit: 95000 },
                  ],
                },
                {
                  date: { fa: 'ساعات مهندسی', en: 'Engineering hours' },
                  lines: [
                    { account: ac.aucGeneric, debit: 60000 },
                    { account: ac.engLabour, credit: 60000 },
                  ],
                },
                {
                  date: { fa: 'مراسم و سربار', en: 'Event and overhead' },
                  lines: [
                    { account: ac.admin, debit: 15000 },
                    { account: ac.grir, credit: 15000 },
                  ],
                },
                {
                  date: { fa: 'سرمایه‌ای کردن', en: 'Capitalisation' },
                  lines: [
                    { account: ac.plant, debit: 1760000 },
                    { account: ac.aucGeneric, credit: 1760000 },
                  ],
                },
              ],
            },
          ],
          answer: {
            fa: 'AUC و دارایی سرمایه‌ای‌شده 1,760,000؛ مصرف AFE حدود 104.4٪؛ AFE تکمیلی لازم نیست.',
            en: 'AUC and capitalised asset 1,760,000; about 104.4% of the AFE used; no supplementary AFE needed.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'استهلاک ذخایر با تجدیدنظر در ذخایر', en: 'Depletion with a reserves revision' },
          difficulty: 'medium',
          problem: {
            fa: 'بهای سرمایه‌ای‌شده دارایی‌های نفت و گاز میدان بهار 45,000,000 است (ارزش اسقاط صفر). ذخایر اثبات‌شده توسعه‌یافته ابتدای سال 1 برابر 15,000,000 boe و تولید سال 1 برابر 1,800,000 boe است. در ابتدای سال 2، ذخایر باقی‌مانده از 13,200,000 به 12,000,000 boe کاهش برآورد می‌شود. تولید سال 2 برابر 2,000,000 boe است. استهلاک ذخایر هر دو سال و ثبت‌ها را بنویسید.',
            en: 'The Bahar field’s capitalised oil and gas properties cost 45,000,000 (nil residual). Proved developed reserves at the start of year 1 are 15,000,000 boe and year-1 production is 1,800,000 boe. At the start of year 2, remaining reserves are revised down from 13,200,000 to 12,000,000 boe. Year-2 production is 2,000,000 boe. Compute depletion for both years and write the entries.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                { title: { fa: 'نرخ سال 1', en: 'Year-1 rate' }, text: { fa: '45,000,000 ÷ 15,000,000 = 3.0 در هر boe.', en: '45,000,000 ÷ 15,000,000 = 3.0 per boe.' } },
                { title: { fa: 'استهلاک ذخایر سال 1', en: 'Year-1 depletion' }, text: { fa: '3.0 × 1,800,000 = 5,400,000.', en: '3.0 × 1,800,000 = 5,400,000.' } },
                {
                  title: { fa: 'ارزش دفتری ابتدای سال 2', en: 'Book value at the start of year 2' },
                  text: { fa: '45,000,000 − 5,400,000 = 39,600,000.', en: '45,000,000 − 5,400,000 = 39,600,000.' },
                },
                {
                  title: { fa: 'نرخ جدید (آینده‌نگر)', en: 'New rate (prospective)' },
                  text: { fa: '39,600,000 ÷ 12,000,000 = 3.30 در هر boe. سال 1 اصلاح نمی‌شود.', en: '39,600,000 ÷ 12,000,000 = 3.30 per boe. Year 1 is not restated.' },
                },
                { title: { fa: 'استهلاک ذخایر سال 2', en: 'Year-2 depletion' }, text: { fa: '3.30 × 2,000,000 = 6,600,000.', en: '3.30 × 2,000,000 = 6,600,000.' } },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'پایان سال 1', en: 'End of year 1' },
                  lines: [
                    { account: ac.depletionExp, debit: 5400000 },
                    { account: ac.accDepletion, credit: 5400000 },
                  ],
                },
                {
                  date: { fa: 'پایان سال 2', en: 'End of year 2' },
                  lines: [
                    { account: ac.depletionExp, debit: 6600000 },
                    { account: ac.accDepletion, credit: 6600000 },
                  ],
                },
              ],
            },
          ],
          answer: { fa: 'سال 1: 5,400,000؛ سال 2: 6,600,000 (نرخ 3.30).', en: 'Year 1: 5,400,000; year 2: 6,600,000 (rate 3.30).' },
        },
        {
          type: 'exercise',
          title: { fa: 'تعمیر اساسی زودهنگام و فروش تابلو قدیمی', en: 'An early overhaul and a scrapped panel' },
          difficulty: 'hard',
          problem: {
            fa: 'جزء تعمیر اساسی K-102 با بهای 400,000 و عمر 5 سال، پس از 4 سال (استهلاک انباشته 320,000) با تعمیر اساسی جدیدی به بهای 520,000 جایگزین می‌شود (از دستور کار سرمایه‌ای و AUC). هم‌زمان تابلو کنترل قدیمی توربین با بهای 150,000 و استهلاک انباشته 130,000 به‌صورت اسقاط به 5,000 نقد فروخته می‌شود. ثبت‌ها، جمع زیان‌ها و استهلاک سالانه جزء جدید (عمر 5 سال، اسقاط صفر) را بنویسید.',
            en: 'The K-102 overhaul component (cost 400,000, 5-year life) is replaced after 4 years (accumulated depreciation 320,000) by a new overhaul costing 520,000 (via a capital work order and AUC). At the same time, the turbine’s old control panel (cost 150,000, accumulated depreciation 130,000) is sold as scrap for 5,000 cash. Write the entries, total the losses and give the new component’s annual depreciation (5-year life, nil residual).',
          },
          hint: {
            fa: 'جزء قدیمی هنوز 80,000 ارزش دفتری دارد که با تعویض از بین می‌رود.',
            en: 'The old component still has a book value of 80,000, which is lost on replacement.',
          },
          solution: [
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'حذف جزء قدیمی', en: 'Derecognise the old component' },
                  lines: [
                    { account: ac.accDep, debit: 320000 },
                    { account: ac.lossDisposal, debit: 80000 },
                    { account: ac.plantOverhaul, credit: 400000 },
                  ],
                },
                {
                  date: { fa: 'سرمایه‌ای کردن تعمیر اساسی جدید', en: 'Capitalise the new overhaul' },
                  lines: [
                    { account: ac.plantOverhaul, debit: 520000 },
                    { account: ac.aucGeneric, credit: 520000 },
                  ],
                },
                {
                  date: { fa: 'فروش تابلو به‌صورت اسقاط', en: 'Scrap sale of the panel' },
                  lines: [
                    { account: ac.cash, debit: 5000 },
                    { account: ac.accDep, debit: 130000 },
                    { account: ac.lossDisposal, debit: 15000 },
                    { account: ac.plant, credit: 150000 },
                  ],
                },
              ],
            },
            {
              type: 'steps',
              items: [
                { title: { fa: 'زیان جزء قدیمی', en: 'Loss on the old component' }, text: { fa: '400,000 − 320,000 = 80,000.', en: '400,000 − 320,000 = 80,000.' } },
                { title: { fa: 'زیان تابلو', en: 'Loss on the panel' }, text: { fa: 'ارزش دفتری 20,000 − دریافتی 5,000 = 15,000.', en: 'Book value 20,000 − proceeds 5,000 = 15,000.' } },
                { title: { fa: 'جمع زیان‌ها', en: 'Total losses' }, text: { fa: '80,000 + 15,000 = 95,000.', en: '80,000 + 15,000 = 95,000.' } },
                { title: { fa: 'استهلاک جزء جدید', en: 'New component depreciation' }, text: { fa: '520,000 ÷ 5 = 104,000 در سال.', en: '520,000 ÷ 5 = 104,000 a year.' } },
              ],
            },
          ],
          answer: { fa: 'جمع زیان 95,000؛ استهلاک سالانه جزء جدید 104,000.', en: 'Total losses 95,000; new component depreciation 104,000 a year.' },
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
            {
              fa: 'نگهداری روزمره هزینه جاری است؛ تعویض جزء عمده، تعمیر اساسی دوره‌ای و افزایش ظرفیت سرمایه‌ای‌اند (IAS 16 و استاندارد حسابداری شماره 11 ایران).',
              en: 'Day-to-day servicing is OPEX; replacing significant parts, periodic overhauls and capacity upgrades are CAPEX (IAS 16 and Iranian Accounting Standard No. 11).',
            },
            {
              fa: 'مخارج پروژه زیر AFE در AUC جمع می‌شود، مستهلک نمی‌شود و هنگام آماده شدن برای استفاده به دارایی نهایی منتقل می‌شود.',
              en: 'Project spend under an AFE collects in AUC, is not depreciated and moves to the final asset when ready for use.',
            },
            {
              fa: 'دارایی‌های نفت و گاز با روش واحد تولید مستهلک می‌شوند: نرخ = ارزش دفتری ÷ ذخایر باقی‌مانده؛ تجدیدنظر در ذخایر آینده‌نگر است.',
              en: 'Oil and gas properties are depleted by units of production: rate = book value ÷ remaining reserves; reserves revisions apply prospectively.',
            },
            {
              fa: 'اجزای عمده جداگانه مستهلک می‌شوند و با تعویض، جزء قدیمی حذف می‌شود.',
              en: 'Significant components are depreciated separately, and the old part is derecognised on replacement.',
            },
            {
              fa: 'زیان کاهش ارزش = مبلغ دفتری − بیشترِ ارزش منصفانه منهای مخارج واگذاری و ارزش اقتصادی؛ در کنارگذاری، تفاوت ارزش دفتری و دریافتی سود یا زیان است.',
              en: 'Impairment = carrying amount − the higher of fair value less costs of disposal and value in use; on disposal, book value vs proceeds gives the gain or loss.',
            },
            {
              fa: 'در ERP دفتر معین دارایی‌ها با حساب کنترل دفتر کل برابر است؛ تسویه دستور کار سرمایه‌ای به AUC، سرمایه‌ای کردن و اجرای استهلاک ثبت‌های خودکار مالی می‌سازند.',
              en: 'In the ERP the asset sub-ledger equals the GL control account; capital work order settlement to AUC, capitalisation and the depreciation run create automatic Finance postings.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            { term: { fa: 'مخارج سرمایه‌ای (CAPEX)', en: 'Capital expenditure (CAPEX)' }, def: { fa: 'مخارجی که دارایی می‌سازد یا منافع آینده آن را افزایش می‌دهد و در ترازنامه ثبت می‌شود.', en: 'Spend that creates an asset or adds to its future benefits, recorded on the balance sheet.' } },
            { term: { fa: 'هزینه جاری (OPEX)', en: 'Operating expenditure (OPEX)' }, def: { fa: 'مخارج نگه‌داشتن دارایی در وضعیت عادی کار که همان دوره هزینه می‌شود.', en: 'Spend to keep an asset in normal working condition, expensed in the period.' } },
            { term: { fa: 'AFE', en: 'AFE (authority for expenditure)' }, def: { fa: 'سند رسمی تأیید بودجه یک پروژه سرمایه‌ای، در مشارکت با تأیید شرکا.', en: 'The formal approval of a capital project’s budget, approved by the partners in a joint venture.' } },
            { term: { fa: 'دارایی در جریان تکمیل (AUC)', en: 'Assets under construction (AUC)' }, def: { fa: 'حساب ترازنامه‌ای برای مخارج پروژه‌ای که هنوز آماده استفاده نیست؛ مستهلک نمی‌شود.', en: 'A balance-sheet account for project costs not yet ready for use; not depreciated.' } },
            { term: { fa: 'سرمایه‌ای کردن', en: 'Capitalisation' }, def: { fa: 'انتقال مخارج از AUC یا دستور کار به دارایی نهایی.', en: 'Transferring costs from AUC or a work order to the final asset.' } },
            { term: { fa: 'استهلاک ذخایر (Depletion)', en: 'Depletion' }, def: { fa: 'تخصیص بهای دارایی‌های نفت و گاز به نسبت ذخایر تولیدشده.', en: 'Allocating the cost of oil and gas properties in proportion to reserves produced.' } },
            { term: { fa: 'روش واحد تولید (UOP)', en: 'Units of production (UOP)' }, def: { fa: 'روشی که استهلاک را بر پایه تولید دوره، نه گذشت زمان، حساب می‌کند.', en: 'A method that charges depreciation on the period’s output rather than time.' } },
            { term: { fa: 'جزء عمده', en: 'Component' }, def: { fa: 'بخشی از دارایی با بهای قابل توجه و عمر متفاوت که جداگانه مستهلک می‌شود.', en: 'A part of an asset with significant cost and a different life, depreciated separately.' } },
            { term: { fa: 'کاهش ارزش', en: 'Impairment' }, def: { fa: 'کاهش مبلغ دفتری دارایی به مبلغ بازیافتنی آن.', en: 'Writing an asset’s carrying amount down to its recoverable amount.' } },
            { term: { fa: 'مبلغ بازیافتنی', en: 'Recoverable amount' }, def: { fa: 'بیشترِ ارزش منصفانه منهای مخارج واگذاری و ارزش اقتصادی.', en: 'The higher of fair value less costs of disposal and value in use.' } },
            { term: { fa: 'دفتر معین دارایی‌های ثابت', en: 'Fixed-asset sub-ledger' }, def: { fa: 'مجموعه رکوردهای دارایی که جمعشان با حساب کنترل دفتر کل برابر است.', en: 'The set of asset records whose total equals the GL control account.' } },
            { term: { fa: 'کنارگذاری', en: 'Retirement' }, def: { fa: 'حذف بها و استهلاک انباشته دارایی فروخته‌شده یا اسقاط‌شده از دفاتر.', en: 'Removing the cost and accumulated depreciation of a sold or scrapped asset from the books.' } },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: {
        fa: 'کدام یک از این مخارج نگهداری باید سرمایه‌ای شود؟',
        en: 'Which of these maintenance costs should be capitalised?',
      },
      options: [
        { fa: 'تعویض فیلترهای روغن به مبلغ 2,600', en: 'Replacing lube oil filters for 2,600' },
        { fa: 'رنگ‌آمیزی تأسیسات به مبلغ 140,000', en: 'Repainting the facilities for 140,000' },
        { fa: 'تعمیر اساسی 5 ساله کمپرسور به مبلغ 2,400,000 به‌عنوان جزء جداگانه', en: 'A five-yearly compressor overhaul of 2,400,000 as a separate component' },
        { fa: 'تعمیر عادی آب‌بند پمپ به مبلغ 60,000', en: 'A routine pump seal repair for 60,000' },
      ],
      answer: 2,
      explain: {
        fa: 'تعمیر اساسی دوره‌ای که برای ادامه کار لازم است، طبق IAS 16 جزء جداگانه‌ای سرمایه‌ای می‌شود و تا تعمیر بعدی مستهلک می‌شود. تعمیر آب‌بند با وجود مبلغ بالا فقط وضعیت عادی را برمی‌گرداند؛ پس جاری است. مبلغ به‌تنهایی معیار نیست، ماهیت مخارج است.',
        en: 'A recurring overhaul needed to keep operating is capitalised under IAS 16 as a separate component and depreciated until the next one. The seal repair, despite its size, only restores normal condition, so it is OPEX. Size alone is not the test; the nature of the spend is.',
      },
    },
    {
      q: {
        fa: 'بهای دارایی‌های نفت و گاز یک میدان 30,000,000 و ذخایر ابتدای سال 10,000,000 boe است. تولید سال 800,000 boe است. استهلاک ذخایر سال چقدر است؟',
        en: 'A field’s oil and gas properties cost 30,000,000 and reserves at the start of the year are 10,000,000 boe. Production for the year is 800,000 boe. What is the year’s depletion?',
      },
      options: [
        { fa: '3,000,000', en: '3,000,000' },
        { fa: '2,400,000', en: '2,400,000' },
        { fa: '3.0', en: '3.0' },
        { fa: '24,000,000', en: '24,000,000' },
      ],
      answer: 1,
      explain: {
        fa: 'نرخ = 30,000,000 ÷ 10,000,000 = 3.0 در هر boe و استهلاک ذخایر = 3.0 × 800,000 = 2,400,000. عدد 3.0 فقط نرخ است، نه هزینه سال؛ 3,000,000 هم بها را مثل خط مستقیم بر 10 سال تقسیم کرده است.',
        en: 'Rate = 30,000,000 ÷ 10,000,000 = 3.0 per boe, and depletion = 3.0 × 800,000 = 2,400,000. 3.0 is only the rate, not the year’s charge; 3,000,000 divides cost by 10 years as if it were straight-line.',
      },
    },
    {
      q: {
        fa: 'دارایی‌ای با بهای 1,000,000 و استهلاک انباشته 850,000 به 100,000 فروخته می‌شود. نتیجه چیست؟',
        en: 'An asset with cost 1,000,000 and accumulated depreciation 850,000 is sold for 100,000. What is the result?',
      },
      options: [
        { fa: 'سود 100,000', en: 'A gain of 100,000' },
        { fa: 'زیان 150,000', en: 'A loss of 150,000' },
        { fa: 'سود 50,000', en: 'A gain of 50,000' },
        { fa: 'زیان 50,000', en: 'A loss of 50,000' },
      ],
      answer: 3,
      explain: {
        fa: 'ارزش دفتری = 1,000,000 − 850,000 = 150,000. دریافتی 100,000 کمتر از آن است، پس زیان 50,000. «زیان 150,000» کل ارزش دفتری را زیان گرفته و مبلغ فروش را نادیده گرفته است.',
        en: 'Book value = 1,000,000 − 850,000 = 150,000. Proceeds of 100,000 are lower, so the loss is 50,000. “A loss of 150,000” ignores the sale proceeds.',
      },
    },
    {
      q: {
        fa: 'مبلغ دفتری یک واحد مولد وجه نقد 8,000,000، ارزش منصفانه منهای مخارج واگذاری 6,000,000 و ارزش اقتصادی 6,800,000 است. زیان کاهش ارزش چقدر است؟',
        en: 'A cash-generating unit has a carrying amount of 8,000,000, fair value less costs of disposal of 6,000,000 and value in use of 6,800,000. What is the impairment loss?',
      },
      options: [
        { fa: '1,200,000', en: '1,200,000' },
        { fa: '2,000,000', en: '2,000,000' },
        { fa: '800,000', en: '800,000' },
        { fa: 'کاهش ارزشی وجود ندارد', en: 'No impairment' },
      ],
      answer: 0,
      explain: {
        fa: 'مبلغ بازیافتنی بیشترِ دو عدد است: 6,800,000. زیان = 8,000,000 − 6,800,000 = 1,200,000. گزینه 2,000,000 از عدد کمتر استفاده کرده است؛ اما شرکت راهی را انتخاب می‌کند که ارزش بیشتری به دست می‌دهد.',
        en: 'The recoverable amount is the higher figure: 6,800,000. Loss = 8,000,000 − 6,800,000 = 1,200,000. 2,000,000 uses the lower figure, but a company would choose the route that recovers more.',
      },
    },
    {
      q: {
        fa: 'مانده دارایی در جریان تکمیل چه زمانی به دارایی نهایی منتقل می‌شود و استهلاک شروع می‌شود؟',
        en: 'When is an AUC balance transferred to the final asset and depreciation started?',
      },
      options: [
        { fa: 'وقتی AFE تأیید می‌شود', en: 'When the AFE is approved' },
        { fa: 'وقتی دارایی برای استفاده مورد نظر آماده است (راه‌اندازی شده)', en: 'When the asset is ready for its intended use (commissioned)' },
        { fa: 'وقتی آخرین فاکتور پیمانکار پرداخت می‌شود', en: 'When the contractor’s last invoice is paid' },
        { fa: 'همیشه در پایان سال مالی', en: 'Always at the financial year-end' },
      ],
      answer: 1,
      explain: {
        fa: 'معیار، آمادگی برای استفاده است، نه پرداخت یا پایان سال. پرداخت آخرین فاکتور ممکن است ماه‌ها بعد باشد؛ صبر کردن برای آن استهلاک را عقب می‌اندازد و سود را بیشتر از واقع نشان می‌دهد.',
        en: 'The test is readiness for use, not payment or the year-end. The last invoice may be paid months later; waiting for it delays depreciation and overstates profit.',
      },
    },
    {
      q: {
        fa: 'آموزش 50,000 برای اپراتورهای کمپرسور جدید K-103 چگونه ثبت می‌شود؟',
        en: 'How is 50,000 of training for the operators of the new compressor K-103 recorded?',
      },
      options: [
        { fa: 'به بهای K-103 افزوده می‌شود', en: 'Added to the cost of K-103' },
        { fa: 'تا راه‌اندازی در AUC می‌ماند', en: 'Held in AUC until commissioning' },
        { fa: 'به‌عنوان موجودی کالا ثبت می‌شود', en: 'Recorded as inventory' },
        { fa: 'همان دوره هزینه می‌شود', en: 'Expensed in the period' },
      ],
      answer: 3,
      explain: {
        fa: 'IAS 16 آموزش کارکنان را صراحتاً جزو بهای دارایی نمی‌داند، چون دارایی را آماده استفاده نمی‌کند. ممکن است روی همان پروژه پیگیری شود، اما در AUC نمی‌ماند و هزینه است.',
        en: 'IAS 16 explicitly excludes staff training from an asset’s cost, because it does not make the asset ready for use. It may be tracked on the same project, but it does not sit in AUC; it is an expense.',
      },
    },
    {
      q: {
        fa: 'دارایی‌ای 2,000,000 بها دارد: جزء تعمیر اساسی 600,000 با عمر 5 سال و بقیه 1,400,000 با عمر 20 سال (اسقاط صفر). استهلاک سالانه با رویکرد اجزا چقدر است؟',
        en: 'An asset costs 2,000,000: an overhaul component of 600,000 with a 5-year life and the remaining 1,400,000 with a 20-year life (nil residual). What is annual depreciation under the component approach?',
      },
      options: [
        { fa: '100,000', en: '100,000' },
        { fa: '120,000', en: '120,000' },
        { fa: '190,000', en: '190,000' },
        { fa: '70,000', en: '70,000' },
      ],
      answer: 2,
      explain: {
        fa: '600,000 ÷ 5 + 1,400,000 ÷ 20 = 120,000 + 70,000 = 190,000. عدد 100,000 کل دارایی را یکجا بر 20 سال تقسیم می‌کند و مصرف سریع جزء کوتاه‌عمر را نمی‌بیند.',
        en: '600,000 ÷ 5 + 1,400,000 ÷ 20 = 120,000 + 70,000 = 190,000. 100,000 divides the whole asset by 20 years and misses the faster use of the short-lived part.',
      },
    },
    {
      q: {
        fa: 'کدام جمله درباره دفتر معین دارایی‌های ثابت در ERP درست است؟',
        en: 'Which statement about the fixed-asset sub-ledger in the ERP is true?',
      },
      options: [
        { fa: 'جمع رکوردهای دارایی هر کلاس با حساب کنترل آن در دفتر کل برابر است و همه ثبت‌ها از راه تراکنش‌های دارایی انجام می‌شوند', en: 'The asset records of each class add up to its GL control account, and all postings come through asset transactions' },
        { fa: 'حسابداران برای اصلاح سریع، مستقیم روی حساب کنترل دارایی‌ها سند دستی می‌زنند', en: 'Accountants post manual journals straight to the asset control account for quick fixes' },
        { fa: 'دفتر معین دارایی‌ها همان فهرست تجهیزات نگهداری است', en: 'The asset sub-ledger is the same as the maintenance equipment list' },
        { fa: 'دفتر معین دارایی‌ها فقط برای گزارش مالیاتی است', en: 'The asset sub-ledger is only for tax reporting' },
      ],
      answer: 0,
      explain: {
        fa: 'حساب کنترل فقط از راه تراکنش‌های دارایی تغییر می‌کند و همین تطبیق دفتر معین و دفتر کل را تضمین می‌کند. سند دستی روی حساب کنترل این پیوند را می‌شکند. تجهیز شیء فنی است و دارایی شیء مالی؛ به هم وصل‌اند اما یکی نیستند.',
        en: 'The control account changes only through asset transactions, which guarantees that sub-ledger and ledger agree. A manual journal on the control account breaks that link. Equipment is a technical object and an asset a financial one; they are linked but not the same.',
      },
    },
    {
      q: {
        fa: 'تفاوت اصلی استهلاک ذخایر (Depletion) و استهلاک عادی چیست؟',
        en: 'What is the main difference between depletion and ordinary depreciation?',
      },
      options: [
        { fa: 'استهلاک ذخایر فقط برای خودروهاست', en: 'Depletion is only for vehicles' },
        { fa: 'استهلاک ذخایر بهای دارایی‌های نفت و گاز را به نسبت ذخایر تولیدشده تخصیص می‌دهد؛ استهلاک عادی معمولاً بر پایه زمان است', en: 'Depletion allocates the cost of oil and gas properties in proportion to reserves produced; ordinary depreciation is usually time-based' },
        { fa: 'هر دو همیشه خط مستقیم‌اند و فقط نامشان فرق دارد', en: 'Both are always straight-line; only the name differs' },
        { fa: 'استهلاک ذخایر فقط در اظهارنامه مالیاتی ثبت می‌شود', en: 'Depletion is recorded only in the tax return' },
      ],
      answer: 1,
      explain: {
        fa: 'دارایی نفتی با تولید مصرف می‌شود؛ پس هزینه آن با روش واحد تولید و به نسبت ذخایر تولیدشده تخصیص می‌یابد. در سال پرتولید هزینه بیشتر و در سال کم‌تولید کمتر است، در حالی که خط مستقیم هر سال یکسان است.',
        en: 'A petroleum asset is used up by production, so its cost is allocated by units of production in proportion to reserves produced. A high-output year carries more cost and a low-output year less, while straight-line is the same every year.',
      },
    },
    {
      q: {
        fa: 'پروژه نصب یک کمپرسور 8 ماه پیش راه‌اندازی شده، اما مانده آن هنوز در AUC است. پیامد چیست؟',
        en: 'A compressor project was commissioned 8 months ago, but its balance is still in AUC. What is the consequence?',
      },
      options: [
        { fa: 'پیامدی ندارد، چون AUC هم دارایی است', en: 'None, because AUC is an asset too' },
        { fa: 'هزینه نگهداری بیشتر از واقع نشان داده می‌شود', en: 'Maintenance expense is overstated' },
        { fa: 'استهلاک 8 ماه ثبت نشده؛ سود و ارزش دارایی‌ها بیشتر از واقع است و باید سرمایه‌ای کردن و استهلاک عقب‌افتاده ثبت شود', en: '8 months of depreciation are missing; profit and asset values are overstated, and the capitalisation and catch-up depreciation must be posted' },
        { fa: 'بدهی به فروشنده دو بار ثبت شده است', en: 'The vendor liability has been recorded twice' },
      ],
      answer: 2,
      explain: {
        fa: 'AUC مستهلک نمی‌شود؛ پس هر ماه تأخیر یعنی استهلاک ثبت‌نشده و سود بیشتر از واقع. به همین دلیل بررسی ماهانه سن AUC یک کنترل کلیدی است. گزینه اول درست به نظر می‌رسد چون AUC دارایی است، اما دارایی آماده استفاده باید مستهلک شود.',
        en: 'AUC is not depreciated, so every month of delay means missing depreciation and overstated profit. That is why a monthly AUC ageing review is a key control. The first option sounds right because AUC is an asset, but an asset in use must be depreciated.',
      },
    },
  ],
}
