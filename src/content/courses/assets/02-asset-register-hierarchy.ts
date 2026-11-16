import type { L, Lesson } from '../../types'

/*
 * Running example (shared with the rest of the assets course): Masar Petroleum (MP01), Arya field.
 * Compressor station: centrifugal compressors K-101 and K-102 driven by gas turbines GT-101 and GT-102.
 * Production station: inlet separator V-201 with relief valve PSV-205. Cost centres: CC-3100 compressor
 * station, CC-3200 production station. New equipment in this lesson: chemical-injection pump P-160
 * (AFE-2026-04) and fuel-gas filter separator V-150 (AFE-2026-05).
 */

/** Short bilingual string helper. */
const t = (fa: string, en: string): L => ({ fa, en })
/** Empty table cell. */
const blank = t('', '')

const ac = {
  grir: t('حساب واسط رسید کالا و فاکتور (GR/IR)', 'GR/IR clearing account'),
  ap: t('حساب‌های پرداختنی', 'Accounts payable'),
  capMaint: t('هزینه نگهداری منتقل‌شده به دارایی (کاهنده هزینه)', 'Maintenance costs capitalised (contra expense)'),
}
const auc = (afe: string) => t(`دارایی در جریان تکمیل (${afe})`, `Assets under construction (${afe})`)
const ppe = (fa: string) => t(`ماشین‌آلات و تجهیزات (${fa})`, `Plant and machinery (${fa})`)

/** Class labels for the criticality tables. */
const A = t('A', 'A')
const B = t('B', 'B')
const C = t('C', 'C')

export const lesson: Lesson = {
  slug: 'asset-register-hierarchy',
  number: 2,
  level: 'beginner',
  minutes: 26,
  icon: 'FolderTree',
  tone: 'asset',
  title: t('فهرست دارایی‌ها و ساختار سلسله‌مراتبی', 'The Asset Register and Hierarchy'),
  summary: t(
    'فهرست فنی دارایی‌های میدان آریا را بسازید: مکان عملیاتی و تجهیز را از هم جدا کنید، ساختار میدان، ایستگاه، سامانه و تجهیز را طراحی کنید، تگ‌گذاری، بحرانیت، فهرست قطعات و مشخصات فنی را بیاموزید و ببینید فهرست فنی چطور به دفتر دارایی‌های ثابت مالی وصل می‌شود.',
    'Build the technical asset register for the Arya field: tell functional locations from equipment, design the field, station, system and equipment hierarchy, learn tagging, criticality, bills of materials and technical attributes, and see how the technical register links to Finance’s fixed-asset register.',
  ),
  objectives: [
    t('تفاوت مکان عملیاتی و تجهیز را توضیح دهید و جابه‌جایی تجهیز را ثبت کنید', 'Explain the difference between a functional location and equipment, and record an equipment swap'),
    t('ساختار سلسله‌مراتبی یک میدان نفت و گاز را با کدگذاری یکدست طراحی کنید', 'Design an oil and gas field hierarchy with consistent coding'),
    t('بحرانیت تجهیزات را با امتیاز پیامد و احتمال رتبه‌بندی کنید', 'Rank equipment criticality using consequence and likelihood scores'),
    t('فهرست قطعات (BOM) و مشخصات فنی یک تجهیز را تعریف کنید', 'Define an equipment bill of materials (BOM) and technical attributes'),
    t('فهرست فنی دارایی‌ها را با دفتر دارایی‌های ثابت مقایسه کنید و پیوند آن‌ها را در ERP توضیح دهید', 'Compare the technical asset register with the fixed-asset register and explain how the ERP links them'),
  ],
  sections: [
    {
      id: 'register-basics',
      title: t('فهرست دارایی‌ها: مکان عملیاتی و تجهیز', 'The Register: Functional Locations and Equipment'),
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'حسابرس یکی از شرکای مشارکت از مسار پترولیوم می‌پرسد: «هزینه نگهداری کمپرسور K-101 در سه سال گذشته چقدر بوده است؟» تیم نگهداری در ERP سه رکورد پیدا می‌کند: «کمپرسور 1»، «COMP-A» و «K101». بخشی از هزینه‌ها روی هیچ‌کدام نیست و روی مرکز هزینه کل میدان نشسته است. پاسخ یک سؤال ساده دو هفته کار دستی می‌برد. مشکل از تعمیرات نیست؛ از **فهرست دارایی‌ها** است.',
            en: 'An auditor from one of the joint-venture partners asks Masar Petroleum: "What did compressor K-101 cost to maintain over the last three years?" The maintenance team finds three records in the ERP: "Compressor 1", "COMP-A" and "K101". Some costs sit on none of them and landed on the field’s general cost centre. Answering a simple question takes two weeks of manual work. The problem is not the repairs; it is the **asset register**.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**فهرست فنی دارایی‌ها (Technical Asset Register)** فهرست کامل و ساختاریافته همه دارایی‌های فیزیکی است: هر دارایی کجاست، چیست، چه مشخصاتی دارد، چقدر مهم است و چه بر سرش آمده است. برنامه‌های نگهداری، دستور کارها، قطعات یدکی و گزارش‌های هزینه همه روی این فهرست بنا می‌شوند.',
            en: 'The **technical asset register** is the complete, structured list of all physical assets: where each one is, what it is, its specifications, how important it is and what has happened to it. Maintenance plans, work orders, spare parts and cost reports are all built on it.',
          },
        },
        { type: 'h', text: t('مکان عملیاتی در برابر تجهیز', 'Functional Location vs Equipment') },
        {
          type: 'p',
          text: {
            fa: 'ERPها دو نوع رکورد جدا دارند. **مکان عملیاتی (Functional Location)** یک **جایگاه** در تأسیسات است که کار مشخصی در آن انجام می‌شود؛ مثلاً «جایگاه توربین گازی که کمپرسور K-101 را می‌چرخاند». **تجهیز (Equipment)** **قلم فیزیکی** مشخصی است که با شماره سریال خودش در آن جایگاه نصب می‌شود. مثل جایگاه شغلی در نمودار سازمانی و کارمندی که آن را اشغال کرده است: کارمند ممکن است عوض شود، اما جایگاه می‌ماند.',
            en: 'ERPs keep two separate kinds of record. A **functional location** is a **position** in the facility where a specific function is performed, for example "the gas-turbine position that drives compressor K-101". **Equipment** is the specific **physical item**, with its own serial number, installed at that position. Think of a job position in an org chart and the employee who holds it: the employee may change, but the position stays.',
          },
        },
        {
          type: 'compare',
          left: {
            title: t('مکان عملیاتی', 'Functional location'),
            items: [
              t('جایگاه و کارکرد را نشان می‌دهد', 'Represents a position and its function'),
              t('از نقشه‌های فرایندی (P&ID) می‌آید و تگ مهندسی دارد', 'Comes from the process drawings (P&IDs) and carries the engineering tag'),
              t('تا وقتی تأسیسات هست، ثابت می‌ماند', 'Stays fixed as long as the facility exists'),
              t('تاریخچه‌اش نشان می‌دهد در این جایگاه چه گذشته است', 'Its history shows what happened at this position'),
            ],
          },
          right: {
            title: t('تجهیز', 'Equipment'),
            items: [
              t('قلم فیزیکی با سازنده، مدل و شماره سریال', 'A physical item with manufacturer, model and serial number'),
              t('می‌تواند پیاده، تعمیر و در جای دیگری نصب شود', 'Can be removed, repaired and installed elsewhere'),
              t('ساعت کارکرد و تاریخچه تعمیرش را با خود می‌برد', 'Carries its own running hours and repair history'),
              t('معمولاً به یک شماره دارایی ثابت در مالی وصل است', 'Is usually linked to a fixed-asset number in Finance'),
            ],
          },
        },
        {
          type: 'table',
          caption: t('تعویض موتور توربین گازی در جایگاه ARY-CS-GC-GT101', 'An engine swap at position ARY-CS-GC-GT101'),
          head: [t('زمان', 'When'), t('رویداد', 'Event'), t('تجهیز نصب‌شده در جایگاه', 'Equipment at the position'), t('EQ-100246 کجاست؟', 'Where is EQ-100246?')],
          rows: [
            [t('ماه 1', 'Month 1'), t('نصب اولیه', 'Original installation'), t('EQ-100246 (سریال GT-5521)', 'EQ-100246 (serial GT-5521)'), t('نصب در جایگاه GT-101', 'Installed at position GT-101')],
            [
              t('ماه 7', 'Month 7'),
              t('پیاده کردن برای تعمیر اساسی نزد سازنده؛ نصب موتور جایگزین', 'Removed for overhaul at the OEM; exchange engine installed'),
              t('EQ-100388 (سریال GT-6034)', 'EQ-100388 (serial GT-6034)'),
              t('کارگاه سازنده، در حال تعمیر', 'OEM workshop, under repair'),
            ],
            [t('ماه 9', 'Month 9'), t('پایان تعمیر اساسی', 'Overhaul finished'), t('EQ-100388', 'EQ-100388'), t('انبار مرکزی، آماده به‌عنوان یدکی', 'Central Warehouse, ready as the spare')],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('دو تاریخچه، دو سؤال', 'Two histories, two questions'),
          text: {
            fa: 'تاریخچه **مکان عملیاتی** پاسخ می‌دهد: «جایگاه GT-101 چند بار از کار افتاده است؟» تاریخچه **تجهیز** پاسخ می‌دهد: «موتور با سریال GT-5521 در کل عمرش چند ساعت کار کرده و چند بار تعمیر شده است؟» ERP هر دو را نگه می‌دارد، به شرط آنکه هر نصب و پیاده کردن را ثبت کنید.',
            en: 'The **functional location** history answers: "How many times has the GT-101 position failed?" The **equipment** history answers: "How many hours has the engine with serial GT-5521 run in its whole life and how often was it repaired?" The ERP keeps both, as long as you record every installation and removal.',
          },
        },
      ],
    },
    {
      id: 'arya-hierarchy',
      title: t('ساختار سلسله‌مراتبی و تگ‌گذاری میدان آریا', 'The Arya Field Hierarchy and Tagging'),
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'مکان‌های عملیاتی در یک **ساختار سلسله‌مراتبی (Asset Hierarchy)** مرتب می‌شوند؛ مثل پوشه‌های تودرتو. مسار پترولیوم چهار سطح دارد: **میدان، ایستگاه، سامانه و تجهیز**. کد هر سطح، کد سطح بالاتر را با خود دارد؛ پس از روی کد می‌فهمید هر جایگاه کجاست.',
            en: 'Functional locations are arranged in an **asset hierarchy**, like nested folders. Masar Petroleum uses four levels: **field → station → system → equipment**. Each level’s code carries the code of the level above, so the code alone tells you where a position is.',
          },
        },
        {
          type: 'table',
          caption: t('بخشی از ساختار مکان‌های عملیاتی میدان آریا', 'Part of the Arya field functional-location hierarchy'),
          head: [t('کد مکان عملیاتی', 'Functional location code'), t('نام', 'Name'), t('سطح', 'Level')],
          rows: [
            [t('ARY', 'ARY'), t('میدان آریا', 'Arya field'), t('میدان', 'Field')],
            [t('ARY-CS', 'ARY-CS'), t('ایستگاه تقویت فشار', 'Compressor station'), t('ایستگاه', 'Station')],
            [t('ARY-CS-GC', 'ARY-CS-GC'), t('سامانه تراکم گاز', 'Gas-compression system'), t('سامانه', 'System')],
            [t('ARY-CS-GC-K101', 'ARY-CS-GC-K101'), t('کمپرسور گریز از مرکز K-101', 'Centrifugal compressor K-101'), t('تجهیز', 'Equipment')],
            [t('ARY-CS-GC-GT101', 'ARY-CS-GC-GT101'), t('توربین گازی GT-101 (محرک K-101)', 'Gas turbine GT-101 (drives K-101)'), t('تجهیز', 'Equipment')],
            [t('ARY-CS-GC-K102', 'ARY-CS-GC-K102'), t('کمپرسور گریز از مرکز K-102', 'Centrifugal compressor K-102'), t('تجهیز', 'Equipment')],
            [t('ARY-CS-LO', 'ARY-CS-LO'), t('سامانه روغن‌کاری', 'Lube-oil system'), t('سامانه', 'System')],
            [t('ARY-PS', 'ARY-PS'), t('ایستگاه بهره‌برداری', 'Production station'), t('ایستگاه', 'Station')],
            [t('ARY-PS-SEP', 'ARY-PS-SEP'), t('سامانه جداسازی', 'Separation system'), t('سامانه', 'System')],
            [t('ARY-PS-SEP-V201', 'ARY-PS-SEP-V201'), t('جداکننده ورودی V-201', 'Inlet separator V-201'), t('تجهیز', 'Equipment')],
            [t('ARY-PS-SEP-PSV205', 'ARY-PS-SEP-PSV205'), t('شیر اطمینان PSV-205 روی V-201', 'Pressure safety valve PSV-205 on V-201'), t('تجهیز', 'Equipment')],
            [t('ARY-WS', 'ARY-WS'), t('محل چاه‌ها', 'Well sites'), t('ایستگاه', 'Station')],
            [t('ARY-WS-AR07', 'ARY-WS-AR07'), t('چاه AR-07', 'Well AR-07'), t('سامانه', 'System')],
            [t('ARY-WS-AR07-WH', 'ARY-WS-AR07-WH'), t('سرچاهی و تاج چاه AR-07', 'Wellhead and christmas tree of AR-07'), t('تجهیز', 'Equipment')],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('چاه به‌عنوان سامانه', 'A well as a system'),
          text: {
            fa: 'در ساختار مسار پترولیوم هر چاه یک «سامانه» زیر «محل چاه‌ها» است. این کار به نگهداری و مالی هر دو کمک می‌کند: هزینه سرچاهی، لوله مغزی و شیر ایمنی درون‌چاهی همه زیر کد همان چاه جمع می‌شود، و چاه یکی از مهم‌ترین موضوع‌های هزینه در قرارداد نفتی است.',
            en: 'In Masar Petroleum’s hierarchy each well is a "system" under "well sites". This helps both maintenance and Finance: the costs of the wellhead, the tubing and the downhole safety valve all roll up under that well’s code, and the well is one of the most important cost objects under the petroleum contract.',
          },
        },
        { type: 'h', text: t('قاعده‌های یک ساختار خوب', 'Rules for a Good Hierarchy') },
        {
          type: 'list',
          items: [
            t('سطح‌ها همه‌جا یک معنی دارند؛ «سامانه» در ایستگاه تقویت فشار همان معنایی را دارد که در ایستگاه بهره‌برداری.', 'Levels mean the same everywhere: a "system" in the compressor station means the same as in the production station.'),
            t('ساختار را کم‌عمق نگه دارید؛ چهار تا شش سطح برای بیشتر میدان‌ها کافی است.', 'Keep it shallow; four to six levels are enough for most fields.'),
            t(
              'ساختار را بر اساس نحوه برنامه‌ریزی، گزارش و هزینه‌یابی بسازید، نه نمودار سازمانی که هر سال عوض می‌شود.',
              'Build it around how you plan, report and cost the work, not around the org chart, which changes every year.',
            ),
            t('هر تجهیز نصب‌شده باید زیر یک مکان عملیاتی باشد؛ هزینه تجهیز «بی‌جا» گم می‌شود.', 'Every installed equipment item sits under a functional location; the costs of "homeless" equipment get lost.'),
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('در عمل: ISO 14224', 'In practice: ISO 14224'),
          text: {
            fa: 'استاندارد ISO 14224 برای صنعت نفت و گاز یک طبقه‌بندی سلسله‌مراتبی پیشنهاد می‌کند که از صنعت و تأسیسات شروع می‌شود و به واحد تجهیز، زیرواحد و قطعه قابل نگهداری می‌رسد. لازم نیست دقیقاً همان سطح‌ها را بسازید، اما هم‌خوانی با آن مقایسه داده‌های خرابی با میدان‌های دیگر را آسان می‌کند.',
            en: 'ISO 14224 proposes a hierarchical taxonomy for the oil and gas industry that starts at industry and installation and goes down to equipment unit, subunit and maintainable item. You need not copy its levels exactly, but staying compatible makes it easy to compare failure data with other fields.',
          },
        },
        { type: 'h', text: t('تگ‌گذاری و شناسه‌های یک قلم', 'Tagging and the Identities of One Item') },
        {
          type: 'p',
          text: {
            fa: '**تگ (Tag)** شناسه مهندسی یک جایگاه است که روی نقشه‌های فرایندی (P&ID) و روی پلاک فلزی کنار تجهیز نوشته می‌شود. معمولاً از یک پیشوند حرفی برای نوع تجهیز و یک شماره ساخته می‌شود. پیشوندها را استاندارد مهندسی هر شرکت تعیین می‌کند؛ برای ابزار دقیق اغلب از الگوی ISA-5.1 پیروی می‌شود.',
            en: 'A **tag** is the engineering identifier of a position, written on the process drawings (P&IDs) and on a metal plate next to the equipment. It is usually a letter prefix for the equipment type plus a number. Each company’s engineering standard sets the prefixes; instruments often follow the ISA-5.1 pattern.',
          },
        },
        {
          type: 'table',
          caption: t('پیشوندهای رایج تگ در مسار پترولیوم', 'Common tag prefixes at Masar Petroleum'),
          head: [t('پیشوند', 'Prefix'), t('نوع تجهیز', 'Equipment type'), t('نمونه در آریا', 'Example at Arya')],
          rows: [
            [t('K', 'K'), t('کمپرسور', 'Compressor'), t('K-101', 'K-101')],
            [t('GT', 'GT'), t('توربین گازی', 'Gas turbine'), t('GT-101', 'GT-101')],
            [t('P', 'P'), t('پمپ', 'Pump'), t('P-120', 'P-120')],
            [t('V', 'V'), t('ظرف تحت فشار، جداکننده', 'Pressure vessel, separator'), t('V-201', 'V-201')],
            [t('E', 'E'), t('مبدل حرارتی، کولر', 'Heat exchanger, cooler'), t('E-130', 'E-130')],
            [t('PSV', 'PSV'), t('شیر اطمینان فشار', 'Pressure safety valve'), t('PSV-205', 'PSV-205')],
            [t('LT / PT', 'LT / PT'), t('فرستنده سطح / فرستنده فشار', 'Level / pressure transmitter'), t('LT-201، PT-118', 'LT-201, PT-118')],
          ],
        },
        {
          type: 'table',
          caption: t('شناسه‌های یک کمپرسور', 'The identities of one compressor'),
          head: [t('شناسه', 'Identifier'), t('مقدار', 'Value'), t('مالک', 'Owner'), t('همراه چه می‌ماند؟', 'Stays with')],
          rows: [
            [t('تگ مهندسی', 'Engineering tag'), t('K-101', 'K-101'), t('مهندسی', 'Engineering'), t('جایگاه', 'The position')],
            [t('مکان عملیاتی', 'Functional location'), t('ARY-CS-GC-K101', 'ARY-CS-GC-K101'), t('نگهداری', 'Maintenance'), t('جایگاه', 'The position')],
            [t('شماره تجهیز', 'Equipment number'), t('EQ-100245', 'EQ-100245'), t('نگهداری', 'Maintenance'), t('دستگاه', 'The unit')],
            [t('شماره سریال سازنده', 'Manufacturer serial'), t('SN-7781', 'SN-7781'), t('سازنده', 'Manufacturer'), t('دستگاه', 'The unit')],
            [t('شماره دارایی ثابت', 'Fixed-asset number'), t('FA-30071', 'FA-30071'), t('مالی', 'Finance'), t('دارایی حسابداری', 'The accounting asset')],
            [t('پلاک اموال', 'Property tag'), t('0458812', '0458812'), t('مالی (واحد اموال)', 'Finance (property unit)'), t('دستگاه', 'The unit')],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('دو قاعده طلایی کدگذاری', 'Two golden coding rules'),
          text: {
            fa: 'یک: هرگز تگ یا کد یک جایگاه را برای کارکرد دیگری دوباره به کار نبرید؛ تاریخچه‌ها قاطی می‌شوند. دو: اطلاعات متغیر (مانند نام سازنده یا اندازه) را داخل کد نگذارید؛ جای آن‌ها در مشخصات فنی است. کد باید کوتاه، یکتا و پایدار باشد.',
            en: 'One: never reuse a position’s tag or code for a different function; the histories get mixed. Two: never put changeable information (such as the manufacturer or size) inside the code; it belongs in the technical attributes. A code must be short, unique and stable.',
          },
        },
      ],
    },
    {
      id: 'criticality',
      title: t('رتبه‌بندی بحرانیت', 'Criticality Ranking'),
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'میدان آریا بیش از هزار تجهیز دارد و منابع نگهداری محدود است. **بحرانیت (Criticality)** نشان می‌دهد خرابی هر تجهیز چقدر برای شرکت گران تمام می‌شود، تا توجه و بودجه به تجهیزات مهم‌تر برسد. بحرانیت را تیمی از بهره‌برداری، نگهداری، بازرسی فنی و HSE تعیین می‌کند، نه یک نفر.',
            en: 'The Arya field has more than a thousand equipment items and limited maintenance resources. **Criticality** shows how costly the failure of each item would be, so that attention and budget go to the items that matter most. It is set by a team from operations, maintenance, technical inspection and HSE, not by one person.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: t('پیامد را در چهار بُعد امتیاز دهید', 'Score the consequence in four dimensions'),
              text: t('ایمنی، محیط زیست، تولید و هزینه تعمیر؛ هر کدام از 1 (ناچیز) تا 5 (بسیار شدید).', 'Safety, environment, production and repair cost, each from 1 (negligible) to 5 (severe).'),
            },
            {
              title: t('بیشترین پیامد را بردارید', 'Take the highest consequence'),
              text: t('یک پیامد شدید کافی است؛ میانگین گرفتن، ریسک ایمنی را پنهان می‌کند.', 'One severe consequence is enough; averaging would hide a safety risk.'),
            },
            {
              title: t('احتمال خرابی را امتیاز دهید', 'Score the likelihood of failure'),
              text: t('از 1 (نادر) تا 5 (مکرر)، بر پایه تاریخچه خرابی و تجربه.', 'From 1 (rare) to 5 (frequent), based on failure history and experience.'),
            },
            {
              title: t('امتیاز و رده را تعیین کنید', 'Set the score and class'),
              text: t('امتیاز = بیشترین پیامد × احتمال. رده A: 15 و بیشتر؛ رده B: 8 تا 14؛ رده C: 7 و کمتر.', 'Score = highest consequence × likelihood. Class A: 15 or more; class B: 8 to 14; class C: 7 or less.'),
            },
            {
              title: t('استثناها را اعمال کنید', 'Apply overrides'),
              text: t(
                '**عناصر حیاتی ایمنی** (مانند شیرهای اطمینان و سامانه آب آتش‌نشانی) بدون توجه به امتیاز، رده A می‌گیرند.',
                '**Safety-critical elements** (such as relief valves and the fire-water system) are class A whatever their score.',
              ),
            },
          ],
        },
        {
          type: 'formula',
          text: t('امتیاز بحرانیت = بیشترین پیامد × احتمال خرابی', 'Criticality score = highest consequence × likelihood of failure'),
          note: t(
            'این قاعده نمونه‌ای از روش فرضی مسار پترولیوم است؛ هر شرکت ماتریس و آستانه‌های خودش را تعریف می‌کند.',
            'This is Masar Petroleum’s illustrative rule; every company defines its own matrix and thresholds.',
          ),
        },
        {
          type: 'table',
          caption: t('برگه بحرانیت چند تجهیز میدان آریا', 'Criticality worksheet for some Arya equipment'),
          head: [
            t('تجهیز', 'Equipment'),
            t('ایمنی', 'Safety'),
            t('محیط زیست', 'Environment'),
            t('تولید', 'Production'),
            t('هزینه', 'Cost'),
            t('بیشترین', 'Highest'),
            t('احتمال', 'Likelihood'),
            t('امتیاز', 'Score'),
            t('رده', 'Class'),
          ],
          rows: [
            [t('کمپرسور K-101', 'Compressor K-101'), 3, 4, 5, 4, 5, 3, 15, A],
            [t('جداکننده V-201', 'Separator V-201'), 5, 4, 5, 3, 5, 2, 10, B],
            [t('شیر اطمینان PSV-205', 'Relief valve PSV-205'), 5, 4, 2, 1, 5, 2, 10, t('A (عنصر حیاتی ایمنی)', 'A (safety-critical)')],
            [t('پمپ روغن P-131A (با پمپ آماده‌به‌کار)', 'Lube-oil pump P-131A (with standby)'), 2, 2, 2, 2, 2, 3, 6, C],
            [t('کولر گازی دفتر', 'Office air conditioner'), 1, 1, 1, 1, 1, 3, 3, C],
          ],
          numericCols: [1, 2, 3, 4, 5, 6, 7],
        },
        {
          type: 'p',
          text: {
            fa: 'کمپرسور K-101 با امتیاز 15 در رده A است: توقف آن تولید را مستقیم کم می‌کند. کنار پمپ روغن P-131A یک پمپ آماده‌به‌کار (P-131B) هست که خودکار راه می‌افتد؛ خرابی‌اش تولید را متوقف نمی‌کند، پس رده C است. PSV-205 با امتیاز 10 در رده B می‌افتد، اما چون عنصر حیاتی ایمنی است به A ارتقا می‌یابد.',
            en: 'Compressor K-101 scores 15 and is class A: stopping it cuts production directly. Lube-oil pump P-131A has a standby pump (P-131B) that starts automatically; its failure does not stop production, so it is class C. PSV-205 scores 10, which is class B, but because it is a safety-critical element it is raised to A.',
          },
        },
        {
          type: 'table',
          caption: t('بحرانیت چه تصمیم‌هایی را تعیین می‌کند؟', 'What criticality drives'),
          head: [t('تصمیم', 'Decision'), t('رده A', 'Class A'), t('رده B', 'Class B'), t('رده C', 'Class C')],
          rows: [
            [
              t('راهبرد نگهداری', 'Maintenance strategy'),
              t('پایش وضعیت و پیشگیرانه، تحلیل RCM', 'Condition monitoring and preventive, RCM analysis'),
              t('پیشگیرانه زمانی یا کارکردی', 'Time- or usage-based preventive'),
              t('معمولاً کارکرد تا خرابی', 'Usually run to failure'),
            ],
            [t('اولویت دستور کار', 'Work-order priority'), t('فوری؛ در همان شیفت', 'Immediate; same shift'), t('ظرف یک هفته', 'Within a week'), t('در برنامه عادی', 'In the normal schedule')],
            [t('قطعات یدکی', 'Spare parts'), t('قطعات حیاتی در انبار', 'Critical spares in stock'), t('قطعات پرمصرف در انبار', 'Fast-moving parts in stock'), t('خرید هنگام نیاز', 'Bought when needed')],
            [t('کیفیت داده', 'Data quality'), t('BOM و مشخصات کامل الزامی', 'Full BOM and attributes mandatory'), t('BOM اصلی الزامی', 'Main BOM required'), t('حداقل داده', 'Minimum data')],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('در عمل', 'In practice'),
          text: {
            fa: 'بحرانیت را هر چند سال یک بار یا پس از هر تغییر مهم (مثلاً حذف پمپ آماده‌به‌کار یا افزایش تولید) بازبینی کنید. در ERP، بحرانیت یک فیلد در رکورد تجهیز یا مکان عملیاتی است که روی اولویت دستور کار، سیاست انبار و گزارش‌ها اثر می‌گذارد.',
            en: 'Review criticality every few years or after any major change (for example removing a standby pump or raising production). In the ERP, criticality is a field on the equipment or functional-location record that drives work-order priority, stocking policy and reports.',
          },
        },
      ],
    },
    {
      id: 'bom-attributes',
      title: t('فهرست قطعات و مشخصات فنی', 'Bills of Materials and Technical Attributes'),
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**فهرست قطعات (Bill of Materials یا BOM)** فهرست قطعات یدکی و موادی است که یک تجهیز از آن‌ها ساخته شده یا برای نگهداری‌اش لازم است. هر ردیف BOM به یک **کالای پایه (Material Master)** در ماژول انبار اشاره می‌کند؛ پس وقتی برنامه‌ریز دستور کار می‌سازد، به‌جای جست‌وجو در هزاران کالا، قطعه را از BOM همان تجهیز انتخاب می‌کند.',
            en: 'A **bill of materials (BOM)** lists the spare parts and materials an equipment item is built from or needs for maintenance. Each BOM line points to a **material master** in the Inventory module, so when a planner builds a work order they pick the part from that equipment’s BOM instead of searching thousands of materials.',
          },
        },
        {
          type: 'table',
          caption: t('فهرست قطعات نگهداری K-101 (بخشی)', 'Maintenance BOM of K-101 (extract)'),
          head: [
            t('ردیف', 'Item'),
            t('شماره کالا', 'Material number'),
            t('شرح', 'Description'),
            t('تعداد', 'Quantity'),
            t('قطعه حیاتی', 'Critical spare'),
            t('بهای واحد', 'Unit price'),
            t('ارزش ردیف', 'Line value'),
          ],
          rows: [
            [t('10', '10'), t('MAT-500300', 'MAT-500300'), t('کارتریج آب‌بند گاز خشک', 'Dry gas seal cartridge'), 2, t('بله', 'Yes'), 210000, 420000],
            [t('20', '20'), t('MAT-500310', 'MAT-500310'), t('ست یاتاقان ژورنال', 'Journal bearing set'), 2, t('بله', 'Yes'), 12000, 24000],
            [t('30', '30'), t('MAT-500320', 'MAT-500320'), t('ست لنت یاتاقان کف‌گرد', 'Thrust pad set'), 1, t('بله', 'Yes'), 8000, 8000],
            [t('40', '40'), t('MAT-500330', 'MAT-500330'), t('بسته اورینگ و آب‌بند', 'O-ring and seal kit'), 2, t('خیر', 'No'), 600, 1200],
            [t('50', '50'), t('MAT-500200', 'MAT-500200'), t('المنت فیلتر روغن', 'Lube-oil filter element'), 4, t('خیر', 'No'), 450, 1800],
            [t('جمع', 'Total'), blank, blank, blank, blank, blank, 455000],
          ],
          numericCols: [3, 5, 6],
        },
        {
          type: 'p',
          text: {
            fa: 'ستون «قطعه حیاتی» به انبار و تدارکات می‌گوید این قلم باید همیشه در انبار باشد، حتی اگر کم مصرف شود؛ چون نبودنش یک تجهیز رده A را هفته‌ها متوقف می‌کند. بسیاری از این قطعات **با زمان تحویل طولانی (Long-lead)** هستند؛ مثلاً کارتریج آب‌بند گاز خشک حدود 20 هفته زمان تحویل دارد و از سازنده اصلی (OEM) با گواهی کیفیت خریده می‌شود. محاسبه اینکه چند عدد نگه داریم را در درس «برنامه‌ریزی نگهداری و قطعات یدکی» می‌بینیم.',
            en: 'The "critical spare" column tells the warehouse and procurement that this item must always be in stock, even if it is rarely used, because without it a class-A item could be down for weeks. Many of these parts are **long-lead items**; the dry gas seal cartridge, for example, has a lead time of about 20 weeks and is bought from the original equipment manufacturer (OEM) with quality certificates. How many to hold is worked out in the lesson on maintenance planning and spare parts.',
          },
        },
        { type: 'h', text: t('مشخصات فنی', 'Technical Attributes') },
        {
          type: 'p',
          text: {
            fa: 'هر تجهیز به یک **کلاس** (مثلاً «کمپرسور گریز از مرکز») تعلق دارد و هر کلاس فهرست ثابتی از **مشخصات فنی (Technical Attributes)** دارد. مقدارها از برگه اطلاعات سازنده (Datasheet) و اسناد تحویل پروژه وارد می‌شوند. مشخصات استاندارد، جست‌وجو و مقایسه را ممکن می‌کند؛ مثلاً: «همه کمپرسورهای با محرک بالای 5,000 کیلووات در منطقه خطر Zone 2».',
            en: 'Every equipment item belongs to a **class** (for example "centrifugal compressor") and each class has a fixed list of **technical attributes**. Values come from the manufacturer’s datasheet and the project handover documents. Standard attributes make searching and comparing possible, for example: "all compressors with drivers above 5,000 kW in hazardous-area Zone 2".',
          },
        },
        {
          type: 'table',
          caption: t('مشخصات فنی تجهیز EQ-100245 (کمپرسور K-101)', 'Technical attributes of equipment EQ-100245 (compressor K-101)'),
          head: [t('مشخصه', 'Attribute'), t('مقدار', 'Value')],
          rows: [
            [t('کلاس', 'Class'), t('کمپرسور گریز از مرکز', 'Centrifugal compressor')],
            [t('سازنده و مدل', 'Manufacturer and model'), t('شرکت نمونه (فرضی)، مدل CC-24', 'Sample Compressors Ltd (fictional), model CC-24')],
            [t('شماره سریال', 'Serial number'), t('SN-7781', 'SN-7781')],
            [t('محرک و توان نامی', 'Driver and rated power'), t('توربین گازی GT-101، 7,500 kW', 'Gas turbine GT-101, 7,500 kW')],
            [t('فشار مکش / رانش', 'Suction / discharge pressure'), t('18 bar / 70 bar', '18 bar / 70 bar')],
            [t('نوع آب‌بند محور', 'Shaft seal type'), t('آب‌بند گاز خشک دوتایی', 'Tandem dry gas seals')],
            [t('طبقه‌بندی منطقه خطر', 'Hazardous-area classification'), t('Zone 2', 'Zone 2')],
            [t('سال نصب', 'Year installed'), t('1395', '2016')],
            [t('ساعت کارکرد (شمارنده)', 'Running hours (counter)'), t('61,250', '61,250')],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل', 'In practice'),
          text: {
            fa: 'مقدار مشخصات را از فهرست بسته (Picklist) انتخاب کنید، نه متن آزاد. «Zone2»، «زون 2» و «Z-2» برای ERP سه مقدار متفاوت‌اند و گزارش را خراب می‌کنند. در پروژه‌های جدید، پیمانکار را در قرارداد ملزم کنید داده‌های تجهیزات را در قالب استاندارد شرکت تحویل دهد.',
            en: 'Choose attribute values from a picklist, not free text. To the ERP, "Zone2", "zone 2" and "Z-2" are three different values that break reports. On new projects, require the contractor by contract to hand over equipment data in the company’s standard template.',
          },
        },
      ],
    },
    {
      id: 'two-registers',
      title: t('فهرست فنی و دفتر دارایی‌های ثابت', 'The Technical Register and the Fixed-Asset Register'),
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'شرکت دو فهرست از دارایی‌ها دارد که اغلب با هم اشتباه گرفته می‌شوند. **فهرست فنی دارایی‌ها** برای نگهداری و بهره‌برداری است. **دفتر دارایی‌های ثابت (Fixed-Asset Register)** برای مالی است و بهای تمام‌شده، استهلاک و ارزش دفتری هر قلم از دارایی‌های ثابت مشهود را نگه می‌دارد. این دو جایگزین هم نیستند؛ باید به هم **وصل** باشند.',
            en: 'A company keeps two lists of assets that are often confused. The **technical asset register** serves maintenance and operations. The **fixed-asset register** serves Finance: it holds the cost, depreciation and book value of each item of property, plant and equipment. Neither replaces the other; they must be **linked**.',
          },
        },
        {
          type: 'compare',
          left: {
            title: t('فهرست فنی دارایی‌ها', 'Technical asset register'),
            items: [
              t('مالک: نگهداری و مهندسی', 'Owner: maintenance and engineering'),
              t('واحد ثبت: جایگاه و قلم قابل نگهداری', 'Unit: position and maintainable item'),
              t('داده: تگ، مشخصات فنی، بحرانیت، BOM، تاریخچه خرابی', 'Data: tag, attributes, criticality, BOM, failure history'),
              t('تغییر: با هر نصب، پیاده کردن یا تعمیر', 'Changes: with every installation, removal or repair'),
              t('اقلام کم‌ارزش را هم شامل می‌شود (مثلاً یک فرستنده)', 'Includes low-value items too (for example a transmitter)'),
            ],
          },
          right: {
            title: t('دفتر دارایی‌های ثابت', 'Fixed-asset register'),
            items: [
              t('مالک: مالی', 'Owner: Finance'),
              t('واحد ثبت: دارایی حسابداری یا جزء آن (IAS 16)', 'Unit: accounting asset or component (IAS 16)'),
              t('داده: بهای تمام‌شده، تاریخ بهره‌برداری، عمر مفید، استهلاک انباشته، ارزش دفتری، مرکز هزینه', 'Data: cost, in-service date, useful life, accumulated depreciation, book value, cost centre'),
              t('تغییر: با سرمایه‌ای کردن، استهلاک ماهانه، کاهش ارزش و کنارگذاری', 'Changes: on capitalisation, monthly depreciation, impairment and disposal'),
              t('اقلام زیر سقف سرمایه‌ای کردن را شامل نمی‌شود', 'Excludes items below the capitalisation threshold'),
            ],
          },
        },
        {
          type: 'p',
          text: {
            fa: 'پیوند معمولاً در **رکورد تجهیز** است: فیلدی به نام «شماره دارایی ثابت». رابطه همیشه یک‌به‌یک نیست: یک دارایی ثابت می‌تواند چند تجهیز را پوشش دهد و بعضی تجهیزات اصلاً دارایی ثابت جداگانه ندارند.',
            en: 'The link usually lives in the **equipment record**: a field called "fixed-asset number". The relationship is not always one-to-one: one fixed asset can cover several equipment items, and some equipment has no fixed asset of its own.',
          },
        },
        {
          type: 'table',
          caption: t('پیوند دو فهرست در مسار پترولیوم', 'How the two registers link at Masar Petroleum'),
          head: [t('دارایی ثابت (مالی)', 'Fixed asset (Finance)'), t('تجهیزات (نگهداری)', 'Equipment (maintenance)'), t('رابطه', 'Relationship')],
          rows: [
            [
              t('FA-30071 ردیف تراکم K-101', 'FA-30071 Compression train K-101'),
              t('EQ-100245 کمپرسور، EQ-100247 کنسول روغن‌کاری، EQ-100248 کولر گاز E-130', 'EQ-100245 compressor, EQ-100247 lube-oil console, EQ-100248 gas cooler E-130'),
              t('یک دارایی، چند تجهیز', 'One asset, several equipment items'),
            ],
            [
              t('FA-30090 جداکننده ورودی V-201', 'FA-30090 Inlet separator V-201'),
              t('EQ-100310 جداکننده و EQ-100311 شیر اطمینان PSV-205', 'EQ-100310 separator and EQ-100311 relief valve PSV-205'),
              t('شیر اطمینان جزء بهای جداکننده سرمایه‌ای شده است', 'The relief valve was capitalised as part of the separator'),
            ],
            [
              t('(ندارد)', '(none)'),
              t('EQ-100512 فرستنده فشار PT-118', 'EQ-100512 pressure transmitter PT-118'),
              t('زیر سقف سرمایه‌ای کردن؛ به هزینه برده شده است', 'Below the capitalisation threshold; expensed'),
            ],
          ],
        },
        { type: 'h', text: t('در ERP: ورود یک تجهیز جدید', 'In the ERP: Bringing In New Equipment') },
        {
          type: 'p',
          text: {
            fa: 'مسار پترولیوم برای تزریق بازدارنده خوردگی به چاه‌ها یک پمپ تزریق مواد شیمیایی (`P-160`) را با مجوز هزینه‌کرد **AFE-2026-04** می‌خرد. ببینید داده پایه، اسناد و نقش‌ها چطور کنار هم قرار می‌گیرند:',
            en: 'To inject corrosion inhibitor into the wells, Masar Petroleum buys a chemical-injection pump (`P-160`) under **AFE-2026-04**. See how master data, documents and roles fit together:',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: t('مهندسی: ساخت مکان عملیاتی', 'Engineering: create the functional location'),
              text: t(
                'جایگاه `ARY-PS-CHM-P160` زیر سامانه تزریق مواد شیمیایی ساخته می‌شود؛ پیش از رسیدن پمپ.',
                'Position `ARY-PS-CHM-P160` is created under the chemical-injection system, before the pump arrives.',
              ),
            },
            {
              title: t('تدارکات و انبار: سفارش خرید سرمایه‌ای و GRN', 'Procurement and warehouse: capital purchase order and GRN'),
              text: t(
                'سفارش خرید با تخصیص به AFE-2026-04 ثبت می‌شود، نه به یک مرکز هزینه. انباردار با **رسید کالا (GRN)** دریافت پمپ را ثبت می‌کند و چون کالا مستقیم به AFE می‌رود، بها به «دارایی در جریان تکمیل» می‌نشیند.',
                'The purchase order is assigned to AFE-2026-04, not to a cost centre. The storekeeper records the pump’s arrival with a **goods received note (GRN)**; because it is charged directly to the AFE, the cost lands on "assets under construction".',
              ),
            },
            {
              title: t('نگهداری: دستور کار نصب', 'Maintenance: installation work order'),
              text: t('دستور کار سرمایه‌ای `WO-40021` برای نصب و راه‌اندازی باز می‌شود که به همان AFE تسویه می‌شود.', 'Capital work order `WO-40021` for installation and commissioning is opened and settled to the same AFE.'),
            },
            {
              title: t('مالی: سرمایه‌ای کردن', 'Finance: capitalisation'),
              text: t(
                'پس از راه‌اندازی، مالی دارایی ثابت `FA-30120` را می‌سازد و مانده دارایی در جریان تکمیل را به آن منتقل می‌کند؛ استهلاک از زمانی که دارایی آماده بهره‌برداری است شروع می‌شود.',
                'After commissioning, Finance creates fixed asset `FA-30120` and transfers the assets-under-construction balance to it; depreciation starts when the asset is ready for use.',
              ),
            },
            {
              title: t('نگهداری: تکمیل داده پایه', 'Maintenance: complete the master data'),
              text: t(
                'رکورد تجهیز `EQ-100402` با سریال، مشخصات فنی، BOM، بحرانیت و شماره دارایی FA-30120 ساخته و در جایگاه P-160 نصب می‌شود؛ سپس برنامه نگهداری آن تعریف می‌شود.',
                'Equipment record `EQ-100402` is created with serial number, attributes, BOM, criticality and asset number FA-30120, and installed at position P-160; then its maintenance plan is set up.',
              ),
            },
          ],
        },
        {
          type: 'journal',
          title: t('سندهای خودکار ERP برای پمپ P-160', 'Automatic ERP postings for pump P-160'),
          entries: [
            {
              date: t('رسید کالا (GRN)', 'Goods received note (GRN)'),
              lines: [
                { account: auc('AFE-2026-04'), debit: 48000 },
                { account: ac.grir, credit: 48000 },
              ],
              memo: t('دریافت پمپ با سفارش خرید سرمایه‌ای؛ تعهد سفارش به هزینه واقعی AFE تبدیل می‌شود', 'Pump received on the capital purchase order; the PO commitment becomes an actual cost on the AFE'),
            },
            {
              date: t('فاکتور فروشنده', 'Vendor invoice'),
              lines: [
                { account: ac.grir, debit: 48000 },
                { account: ac.ap, credit: 48000 },
              ],
              memo: t('تطبیق سه‌طرفه: سفارش خرید، GRN و فاکتور', 'Three-way match: purchase order, GRN and invoice'),
            },
            {
              date: t('تسویه دستور کار نصب WO-40021', 'Settlement of installation work order WO-40021'),
              lines: [
                { account: auc('AFE-2026-04'), debit: 12000 },
                { account: ac.capMaint, credit: 12000 },
              ],
              memo: t('دستمزد و مواد نصب که روی دستور کار ثبت شده بود، از هزینه به دارایی منتقل می‌شود', 'Installation labour and materials posted on the work order move from expense to the asset'),
            },
            {
              date: t('سرمایه‌ای کردن', 'Capitalisation'),
              lines: [
                { account: ppe('FA-30120'), debit: 60000 },
                { account: auc('AFE-2026-04'), credit: 60000 },
              ],
              memo: t('48,000 + 12,000 = 60,000؛ پرچم بازیافت R، طبقه هزینه توسعه', '48,000 + 12,000 = 60,000; recovery flag R, cost category Development'),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('پیوند با بازیافت هزینه', 'The cost-recovery link'),
          text: {
            fa: 'در بسیاری از قراردادهای نفتی، هزینه‌های سرمایه‌ای (مانند همین پمپ) طی چند سال بازیافت می‌شوند و هزینه‌های عملیاتی (مانند تعمیرات عادی) در همان سالی که رخ می‌دهند. پس اینکه یک هزینه روی AFE سرمایه‌ای بنشیند یا روی مرکز هزینه عملیاتی، هم صورت‌های مالی و هم زمان بازیافت را عوض می‌کند. GRN، فاکتور و گزارش راه‌اندازی، مدارک بازیافت این پمپ‌اند. قاعده دقیق را از روش حسابداری پیوست قرارداد بخوانید.',
            en: 'Under many petroleum contracts, capital costs (like this pump) are recovered over several years and operating costs (like routine repairs) in the year they occur. So whether a cost lands on a capital AFE or an operating cost centre changes both the financial statements and the timing of recovery. The GRN, the invoice and the commissioning report are this pump’s recovery evidence. Read the exact rule in the contract’s accounting procedure.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل: تطبیق دو فهرست', 'In practice: reconciling the two registers'),
          text: {
            fa: 'سالی یک بار، مالی و نگهداری دو فهرست را با هم و با واقعیت میدان تطبیق می‌دهند: هر دارایی ثابت باید دست‌کم یک تجهیز فعال داشته باشد و هر تجهیز سرمایه‌ای باید شماره دارایی داشته باشد. در شرکت‌های ایرانی این کار معمولاً همراه با شمارش اموال و کنترل **پلاک اموال** انجام می‌شود. دارایی‌ای که در میدان پیدا نشود، باید بررسی و در صورت لزوم از دفاتر حذف شود.',
            en: 'Once a year Finance and maintenance reconcile the two registers with each other and with the field: every fixed asset must have at least one active equipment item, and every capital equipment item must carry an asset number. In Iranian companies this is usually done together with the physical count of property and a check of the **property tags** («پلاک اموال»). An asset that cannot be found in the field must be investigated and, if necessary, removed from the books.',
          },
        },
      ],
    },
    {
      id: 'data-quality',
      title: t('کیفیت داده پایه و اشتباه‌های رایج', 'Master-Data Quality and Common Mistakes'),
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'ERP فقط به اندازه داده پایه‌اش خوب است. داده پایه باکیفیت پنج ویژگی دارد: **کامل** (فیلدهای الزامی پر است)، **درست** (با واقعیت میدان می‌خواند)، **یکدست** (همه از یک قالب و فهرست بسته استفاده می‌کنند)، **یکتا** (هر قلم فقط یک رکورد دارد) و **دارای مالک** (معلوم است چه کسی مسئول به‌روز نگه‌داشتن آن است).',
            en: 'An ERP is only as good as its master data. Good master data has five qualities: **complete** (mandatory fields are filled), **accurate** (it matches the field), **consistent** (everyone uses one template and picklists), **unique** (one record per item) and **owned** (someone is responsible for keeping it current).',
          },
        },
        {
          type: 'table',
          caption: t('شاخص‌های کیفیت داده فهرست فنی میدان آریا', 'Data-quality indicators for the Arya technical register'),
          head: [t('شاخص', 'Indicator'), t('تعداد', 'Count'), t('پایه', 'Base'), t('نتیجه (٪)', 'Result (%)'), t('هدف (٪)', 'Target (%)')],
          rows: [
            [t('تجهیزات دارای رده بحرانیت', 'Equipment with a criticality class'), 1054, 1240, 85, 95],
            [t('تجهیزات رده A و B دارای BOM', 'Class A and B equipment with a BOM'), 248, 310, 80, 100],
            [t('تجهیزات سرمایه‌ای دارای شماره دارایی ثابت', 'Capital equipment with a fixed-asset number'), 722, 760, 95, 100],
            [t('رکوردهای تکراری', 'Duplicate records'), 37, 1240, 2.98, 0],
          ],
          numericCols: [1, 2, 3, 4],
        },
        {
          type: 'p',
          text: {
            fa: 'برای نمونه: 1,054 ÷ 1,240 = 85٪ و 248 ÷ 310 = 80٪. تیم مسار پترولیوم اولویت را به 62 تجهیز رده A و B بدون BOM (310 − 248) می‌دهد، چون اگر همین تجهیزات خراب شوند، برنامه‌ریز نمی‌داند چه قطعه‌ای لازم است.',
            en: 'For example: 1,054 ÷ 1,240 = 85% and 248 ÷ 310 = 80%. Masar Petroleum’s team puts the 62 class A and B items without a BOM (310 − 248) first, because if these fail the planner will not know which parts are needed.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('در عمل: حاکمیت داده', 'In practice: data governance'),
          text: {
            fa: 'در شرکت‌های بزرگ، ساخت یا تغییر داده پایه با **گردش کار تأیید** انجام می‌شود: کاربر درخواست می‌دهد، تیم داده پایه قالب و تکراری نبودن را کنترل می‌کند و مالک داده (مثلاً مهندس نگهداری) تأیید می‌کند. هیچ‌کس به‌تنهایی تجهیز جدید نمی‌سازد.',
            en: 'In large companies, creating or changing master data runs through an **approval workflow**: a user requests, the master-data team checks the template and duplicates, and the data owner (for example the maintenance engineer) approves. Nobody creates a new equipment record alone.',
          },
        },
        { type: 'h', text: t('اشتباه‌های رایج', 'Common Mistakes') },
        {
          type: 'list',
          items: [
            t(
              '**یکی دانستن مکان عملیاتی و تجهیز.** اگر هر بار که موتور یا کمپرسوری عوض می‌شود رکورد تازه بسازید و قبلی را حذف کنید، تاریخچه جایگاه و دستگاه هر دو از بین می‌رود.',
              '**Treating functional location and equipment as one.** If you create a new record and delete the old one every time an engine or compressor is swapped, both the position history and the unit history are lost.',
            ),
            t(
              '**شرح متن آزاد.** «پمپ»، «پمپ میعانات» و «Cond. pump» سه رکورد جدا می‌شوند و تکراری‌ها زیاد می‌شوند.',
              '**Free-text descriptions.** "Pump", "condensate pump" and "Cond. pump" become three separate records and duplicates multiply.',
            ),
            t('**همه را رده A کردن.** وقتی همه چیز بحرانی باشد، هیچ چیز بحرانی نیست و منابع پخش می‌شوند.', '**Making everything class A.** When everything is critical, nothing is, and resources are spread thin.'),
            t(
              '**کپی کردن BOM تجهیز مشابه بدون کنترل.** مدل یا اندازه متفاوت یعنی قطعه اشتباه در روز خرابی.',
              '**Copying a similar item’s BOM without checking.** A different model or size means the wrong part on the day of the failure.',
            ),
            t(
              '**بی‌توجهی به پیوند با دفتر دارایی‌های ثابت.** تجهیزی که شماره دارایی ندارد، هنگام کنارگذاری یا فروش در دفاتر مالی باقی می‌ماند.',
              '**Ignoring the link to the fixed-asset register.** Equipment without an asset number stays on the books when it is retired or sold.',
            ),
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('یادتان باشد', 'Remember'),
          text: {
            fa: 'تحویل پروژه بهترین فرصت برای داده پایه است. اگر داده تجهیزات جدید همان ابتدا کامل و درست وارد نشود، جمع‌آوری آن از میدان در آینده چند برابر گران‌تر تمام می‌شود.',
            en: 'Project handover is the best moment for master data. If new equipment data is not captured completely and correctly at the start, collecting it from the field later costs many times more.',
          },
        },
      ],
    },
    {
      id: 'exercises',
      title: t('تمرین‌ها', 'Exercises'),
      blocks: [
        {
          type: 'exercise',
          title: t('مکان عملیاتی یا تجهیز؟', 'Functional location or equipment?'),
          difficulty: 'easy',
          problem: t('هر مورد زیر یک مکان عملیاتی است یا یک تجهیز؟ دلیل بیاورید.', 'Is each item below a functional location or equipment? Give a reason.'),
          given: {
            head: [t('ردیف', 'No.'), t('مورد', 'Item')],
            rows: [
              [t('1', '1'), t('ARY-CS-GC-K102 (جایگاه کمپرسور K-102)', 'ARY-CS-GC-K102 (compressor K-102 position)')],
              [t('2', '2'), t('موتور توربین گازی با سریال GT-6034 که اکنون در انبار مرکزی است', 'A gas-turbine engine with serial GT-6034 now in the Central Warehouse')],
              [t('3', '3'), t('سامانه روغن‌کاری ARY-CS-LO', 'Lube-oil system ARY-CS-LO')],
              [t('4', '4'), t('فرستنده فشار نو با سریال 55109 که هنوز نصب نشده است', 'A new pressure transmitter, serial 55109, not yet installed')],
              [t('5', '5'), t('جایگاه سرچاهی چاه AR-07', 'The wellhead position of well AR-07')],
              [t('6', '6'), t('ست یاتاقانی که از K-101 پیاده و برای بازسازی به کارگاه فرستاده شده است', 'A bearing set removed from K-101 and sent to the workshop for refurbishment')],
            ],
          },
          hint: t('بپرسید: اگر این را از جایش بردارید، هنوز وجود دارد؟ اگر بله، قلم فیزیکی است.', 'Ask: if you take it away from its place, does it still exist? If yes, it is a physical item.'),
          solution: [
            {
              type: 'table',
              head: [t('ردیف', 'No.'), t('پاسخ', 'Answer'), t('دلیل', 'Reason')],
              rows: [
                [t('1', '1'), t('مکان عملیاتی', 'Functional location'), t('یک جایگاه در سامانه تراکم است', 'A position in the compression system')],
                [t('2', '2'), t('تجهیز', 'Equipment'), t('قلم فیزیکی با سریال؛ حتی بدون جایگاه وجود دارد', 'A physical item with a serial; exists even without a position')],
                [t('3', '3'), t('مکان عملیاتی', 'Functional location'), t('سطح «سامانه» در ساختار سلسله‌مراتبی', 'The "system" level of the hierarchy')],
                [t('4', '4'), t('تجهیز', 'Equipment'), t('قلم فیزیکی در انبار، هنوز بدون جایگاه', 'A physical item in store, not yet at a position')],
                [t('5', '5'), t('مکان عملیاتی', 'Functional location'), t('جایگاه؛ سرچاهی نصب‌شده در آن یک تجهیز است', 'A position; the wellhead installed there is equipment')],
                [
                  t('6', '6'),
                  t('قلم فیزیکی (تجهیز یا قطعه قابل بازسازی)', 'Physical item (equipment or repairable part)'),
                  t('جابه‌جا شده و اگر سریال دارد، تاریخچه‌اش را با خود می‌برد', 'It has moved, and if serialised it takes its history with it'),
                ],
              ],
            },
          ],
          answer: t('مکان عملیاتی: 1، 3، 5؛ اقلام فیزیکی: 2، 4، 6', 'Functional locations: 1, 3, 5; physical items: 2, 4, 6'),
        },
        {
          type: 'exercise',
          title: t('رده‌بندی بحرانیت', 'Ranking criticality'),
          difficulty: 'medium',
          problem: t(
            'با قاعده مسار پترولیوم (امتیاز = بیشترین پیامد × احتمال؛ A: 15 و بیشتر، B: 8 تا 14، C: 7 و کمتر؛ عناصر حیاتی ایمنی همیشه A) رده هر تجهیز را تعیین کنید.',
            'Using Masar Petroleum’s rule (score = highest consequence × likelihood; A: 15 or more, B: 8 to 14, C: 7 or less; safety-critical elements always A), find each item’s class.',
          ),
          given: {
            head: [t('تجهیز', 'Equipment'), t('ایمنی', 'Safety'), t('محیط زیست', 'Environment'), t('تولید', 'Production'), t('هزینه', 'Cost'), t('احتمال', 'Likelihood')],
            rows: [
              [t('کولر گاز E-130', 'Gas cooler E-130'), 2, 3, 4, 3, 3],
              [t('پمپ آب آتش‌نشانی P-901 (عنصر حیاتی ایمنی)', 'Fire-water pump P-901 (safety-critical)'), 5, 2, 1, 2, 2],
              [t('ژنراتور گازسوز G-401 (بدون پشتیبان)', 'Gas-engine generator G-401 (no backup)'), 2, 1, 5, 4, 4],
              [t('جرثقیل سقفی کارگاه', 'Workshop overhead crane'), 3, 1, 1, 2, 2],
            ],
            numericCols: [1, 2, 3, 4, 5],
          },
          solution: [
            {
              type: 'table',
              head: [t('تجهیز', 'Equipment'), t('بیشترین پیامد', 'Highest consequence'), t('احتمال', 'Likelihood'), t('امتیاز', 'Score'), t('رده', 'Class')],
              rows: [
                [t('E-130', 'E-130'), 4, 3, 12, B],
                [t('P-901', 'P-901'), 5, 2, 10, t('A (استثنای ایمنی)', 'A (safety override)')],
                [t('G-401', 'G-401'), 5, 4, 20, A],
                [t('جرثقیل کارگاه', 'Workshop crane'), 3, 2, 6, C],
              ],
              numericCols: [1, 2, 3],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: t(
                'P-901 با امتیاز 10 به‌تنهایی رده B می‌گیرد؛ اما پمپ آب آتش‌نشانی عنصر حیاتی ایمنی است و باید همیشه آماده باشد، پس A می‌شود. G-401 پشتیبان ندارد و توقفش کل میدان را بی‌برق می‌کند؛ امتیاز 20 آن را بالاترین اولویت می‌کند.',
                'P-901 scores 10, which alone would be class B; but a fire-water pump is a safety-critical element and must always be ready, so it is A. G-401 has no backup and its failure blacks out the field; its score of 20 makes it the top priority.',
              ),
            },
          ],
          answer: t('G-401: A (20)؛ P-901: A (استثنای ایمنی، امتیاز 10)؛ E-130: B (12)؛ جرثقیل: C (6)', 'G-401: A (20); P-901: A (safety override, score 10); E-130: B (12); crane: C (6)'),
        },
        {
          type: 'exercise',
          title: t('شاخص‌های کیفیت داده', 'Data-quality indicators'),
          difficulty: 'medium',
          problem: t(
            'فهرست فنی میدان آریا پس از یک سال پاک‌سازی این وضعیت را دارد. درصد هر شاخص را حساب کنید، با هدف مقایسه کنید و بگویید تیم داده بعد از این چه کاری را اول انجام دهد.',
            'After a year of clean-up, the Arya technical register looks like this. Calculate each indicator’s percentage, compare it with the target, and say what the data team should do first.',
          ),
          given: {
            head: [t('شاخص', 'Indicator'), t('تعداد', 'Count'), t('پایه', 'Base'), t('هدف (٪)', 'Target (%)')],
            rows: [
              [t('تجهیزات دارای رده بحرانیت', 'Equipment with a criticality class'), 1190, 1250, 95],
              [t('تجهیزات رده A و B دارای BOM', 'Class A and B equipment with a BOM'), 297, 330, 100],
              [t('تجهیزات سرمایه‌ای دارای شماره دارایی ثابت', 'Capital equipment with a fixed-asset number'), 776, 800, 100],
              [t('رکوردهای تکراری', 'Duplicate records'), 10, 1250, 0],
            ],
            numericCols: [1, 2, 3],
          },
          solution: [
            {
              type: 'table',
              head: [t('شاخص', 'Indicator'), t('محاسبه', 'Calculation'), t('نتیجه (٪)', 'Result (%)'), t('فاصله تا هدف', 'Gap to target')],
              rows: [
                [t('بحرانیت', 'Criticality'), t('1,190 ÷ 1,250', '1,190 ÷ 1,250'), 95.2, t('برآورده شده', 'Met')],
                [t('BOM رده A و B', 'BOM for class A and B'), t('297 ÷ 330', '297 ÷ 330'), 90, t('33 تجهیز بدون BOM', '33 items without a BOM')],
                [t('پیوند دارایی ثابت', 'Fixed-asset link'), t('776 ÷ 800', '776 ÷ 800'), 97, t('24 تجهیز بدون شماره دارایی', '24 items without an asset number')],
                [t('تکراری', 'Duplicates'), t('10 ÷ 1,250', '10 ÷ 1,250'), 0.8, t('10 رکورد برای ادغام', '10 records to merge')],
              ],
              numericCols: [2],
            },
            {
              type: 'steps',
              items: [
                { title: t('اولویت اول', 'First priority'), text: t('33 تجهیز رده A و B بدون BOM؛ ریسک توقف طولانی در روز خرابی.', 'The 33 class A and B items without a BOM; risk of a long outage on the day of failure.') },
                { title: t('اولویت دوم', 'Second priority'), text: t('24 تجهیز سرمایه‌ای بدون شماره دارایی؛ با مالی تطبیق دهید.', 'The 24 capital items without an asset number; reconcile with Finance.') },
                { title: t('اولویت سوم', 'Third priority'), text: t('ادغام 10 رکورد تکراری و انتقال تاریخچه به رکورد درست.', 'Merge the 10 duplicates and move their history to the correct record.') },
              ],
            },
          ],
          answer: t('95.2٪ (برآورده)، 90٪ (33 BOM کم)، 97٪ (24 پیوند کم)، 0.8٪ تکراری (10 رکورد)', '95.2% (met), 90% (33 BOMs missing), 97% (24 links missing), 0.8% duplicates (10 records)'),
        },
        {
          type: 'exercise',
          title: t('سرمایه‌ای کردن یک فیلتر جداکننده جدید', 'Capitalising a new filter separator'),
          difficulty: 'hard',
          problem: t(
            'فیلتر جداکننده جدید گاز سوخت `V-150` در ایستگاه تقویت فشار با AFE-2026-05 نصب شده است. همه هزینه‌های زیر روی AFE (دارایی در جریان تکمیل) نشسته‌اند. طبق IAS 16 مبلغ قابل سرمایه‌ای کردن را تعیین کنید، سند اصلاح و سند سرمایه‌ای کردن را بنویسید و بگویید در فهرست فنی چه رکوردهایی باید ساخته شود.',
            'A new fuel-gas filter separator `V-150` was installed at the compressor station under AFE-2026-05. All the costs below sit on the AFE (assets under construction). Under IAS 16, determine the amount to capitalise, write the correcting entry and the capitalisation entry, and say which records must be created in the technical register.',
          ),
          given: {
            head: [t('هزینه', 'Cost'), t('مبلغ', 'Amount')],
            rows: [
              [t('بهای خرید (GRN)', 'Purchase price (GRN)'), 180000],
              [t('حمل تا میدان (SES حمل‌کننده)', 'Freight to the field (carrier’s SES)'), 9000],
              [t('دستور کار نصب (دستمزد و مواد)', 'Installation work order (labour and materials)'), 26000],
              [t('خدمات راه‌اندازی پیمانکار (SES)', 'Contractor commissioning service (SES)'), 15000],
              [t('آموزش اپراتورها', 'Operator training'), 6000],
              [t('جمع', 'Total'), 236000],
            ],
            numericCols: [1],
          },
          hint: t('IAS 16 مخارج لازم برای رساندن دارایی به محل و وضعیت قابل استفاده را سرمایه‌ای می‌کند؛ آموزش کارکنان جزء آن نیست.', 'IAS 16 capitalises the costs needed to bring the asset to its location and working condition; staff training is not one of them.'),
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: t('هزینه‌های قابل سرمایه‌ای کردن', 'Costs to capitalise'),
                  text: t('بها، حمل، نصب و راه‌اندازی: 180,000 + 9,000 + 26,000 + 15,000 = 230,000.', 'Price, freight, installation and commissioning: 180,000 + 9,000 + 26,000 + 15,000 = 230,000.'),
                },
                {
                  title: t('هزینه غیرقابل سرمایه‌ای کردن', 'Cost not capitalised'),
                  text: t('IAS 16 هزینه آموزش کارکنان را جزء بهای دارایی نمی‌داند؛ 6,000 به هزینه دوره می‌رود.', 'IAS 16 excludes staff training from the asset’s cost; the 6,000 is a period expense.'),
                },
                {
                  title: t('ترتیب سندها', 'Order of entries'),
                  text: t('ابتدا آموزش را از AFE خارج می‌کنیم، سپس مانده 230,000 را سرمایه‌ای می‌کنیم.', 'First move the training out of the AFE, then capitalise the remaining 230,000.'),
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: t('اصلاح', 'Correction'),
                  lines: [
                    { account: t('هزینه آموزش (CC-3100، طبقه عملیاتی)', 'Training expense (CC-3100, Operating)'), debit: 6000 },
                    { account: auc('AFE-2026-05'), credit: 6000 },
                  ],
                  memo: t('آموزش هزینه دوره است، نه بخشی از بهای دارایی', 'Training is a period expense, not part of the asset’s cost'),
                },
                {
                  date: t('سرمایه‌ای کردن', 'Capitalisation'),
                  lines: [
                    { account: ppe('FA-30131'), debit: 230000 },
                    { account: auc('AFE-2026-05'), credit: 230000 },
                  ],
                  memo: t('236,000 − 6,000 = 230,000؛ پرچم بازیافت R، طبقه هزینه توسعه', '236,000 − 6,000 = 230,000; recovery flag R, cost category Development'),
                },
              ],
            },
            {
              type: 'list',
              items: [
                t('مکان عملیاتی `ARY-CS-FG-V150` زیر سامانه گاز سوخت', 'Functional location `ARY-CS-FG-V150` under the fuel-gas system'),
                t('رکورد تجهیز با سریال، مشخصات فنی و پیوند به FA-30131', 'An equipment record with serial number, attributes and the link to FA-30131'),
                t('BOM، رده بحرانیت و برنامه نگهداری و بازرسی', 'The BOM, criticality class and maintenance and inspection plan'),
              ],
            },
          ],
          answer: t('سرمایه‌ای: 230,000 (FA-30131)؛ آموزش 6,000 به هزینه دوره', 'Capitalised: 230,000 (FA-30131); training of 6,000 expensed'),
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
            t('فهرست فنی دارایی‌ها پایه همه برنامه‌ها، دستور کارها و گزارش‌های هزینه است.', 'The technical asset register is the foundation of every plan, work order and cost report.'),
            t(
              'مکان عملیاتی جایگاه و کارکرد است و ثابت می‌ماند؛ تجهیز قلم فیزیکی است که جابه‌جا می‌شود و تاریخچه خودش را دارد.',
              'A functional location is a position and function and stays fixed; equipment is a physical item that moves and has its own history.',
            ),
            t('ساختار میدان آریا: میدان، ایستگاه، سامانه، تجهیز؛ کد هر سطح، کد سطح بالاتر را دارد.', 'The Arya hierarchy: field, station, system, equipment; each code carries the code of the level above.'),
            t('یک قلم چند شناسه دارد: تگ، مکان عملیاتی، شماره تجهیز، سریال سازنده و شماره دارایی ثابت.', 'One item has several identities: tag, functional location, equipment number, manufacturer serial and fixed-asset number.'),
            t(
              'بحرانیت = بیشترین پیامد × احتمال، و عناصر حیاتی ایمنی همیشه A. بحرانیت راهبرد، اولویت، قطعات یدکی و سطح داده را تعیین می‌کند.',
              'Criticality = highest consequence × likelihood, and safety-critical elements are always A. Criticality drives strategy, priority, spares and data requirements.',
            ),
            t('BOM تجهیز را به کالاهای انبار وصل می‌کند؛ مشخصات فنی استاندارد، جست‌وجو و مقایسه را ممکن می‌کند.', 'The BOM links equipment to warehouse materials; standard attributes make searching and comparing possible.'),
            t(
              'دفتر دارایی‌های ثابت مال مالی است و از طریق شماره دارایی در رکورد تجهیز به فهرست فنی وصل می‌شود؛ تجهیز جدید با GRN روی AFE و دارایی در جریان تکمیل می‌نشیند و سپس سرمایه‌ای می‌شود.',
              'The fixed-asset register belongs to Finance and links to the technical register through the asset number on the equipment record; new equipment lands on the AFE and assets under construction through the GRN, then is capitalised.',
            ),
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            { term: t('فهرست فنی دارایی‌ها', 'Technical asset register'), def: t('فهرست ساختاریافته همه دارایی‌های فیزیکی با جایگاه، مشخصات، بحرانیت و تاریخچه', 'A structured list of all physical assets with location, attributes, criticality and history') },
            { term: t('مکان عملیاتی', 'Functional location'), def: t('جایگاهی در تأسیسات که کارکرد مشخصی در آن انجام می‌شود', 'A position in a facility where a specific function is performed') },
            { term: t('تجهیز', 'Equipment'), def: t('قلم فیزیکی مشخص با سریال که در یک مکان عملیاتی نصب می‌شود', 'A specific physical item with a serial number, installed at a functional location') },
            { term: t('ساختار سلسله‌مراتبی دارایی', 'Asset hierarchy'), def: t('چیدمان تودرتوی مکان‌های عملیاتی، مثلاً میدان، ایستگاه، سامانه، تجهیز', 'The nested arrangement of functional locations, e.g. field, station, system, equipment') },
            { term: t('تگ', 'Tag'), def: t('شناسه مهندسی یک جایگاه روی نقشه‌های فرایندی و پلاک تجهیز', 'The engineering identifier of a position on the P&IDs and the equipment plate') },
            { term: t('بحرانیت', 'Criticality'), def: t('میزان اهمیت خرابی یک تجهیز بر پایه پیامد و احتمال', 'How much an item’s failure matters, based on consequence and likelihood') },
            { term: t('عنصر حیاتی ایمنی', 'Safety-critical element'), def: t('تجهیزی که برای جلوگیری از حادثه یا کاهش پیامد آن لازم است', 'Equipment needed to prevent a major accident or limit its consequences') },
            { term: t('فهرست قطعات (BOM)', 'Bill of materials (BOM)'), def: t('فهرست قطعات و موادی که برای ساخت یا نگهداری یک تجهیز لازم است', 'The list of parts and materials an item is built from or needs for maintenance') },
            { term: t('قطعه یدکی حیاتی', 'Critical spare'), def: t('قطعه‌ای که باید همیشه در انبار باشد چون نبودنش توقف طولانی می‌سازد', 'A part that must always be in stock because its absence causes a long outage') },
            { term: t('مشخصات فنی', 'Technical attributes'), def: t('ویژگی‌های استاندارد هر کلاس تجهیز مانند توان، فشار و منطقه خطر', 'Standard characteristics of an equipment class such as power, pressure and hazardous area') },
            { term: t('دفتر دارایی‌های ثابت', 'Fixed-asset register'), def: t('ثبت مالی بها، استهلاک و ارزش دفتری دارایی‌های ثابت مشهود', 'Finance’s record of cost, depreciation and book value of property, plant and equipment') },
            { term: t('دارایی در جریان تکمیل', 'Assets under construction'), def: t('حسابی که بهای یک دارایی را تا آماده شدن برای بهره‌برداری نگه می‌دارد', 'An account that holds an asset’s cost until it is ready for use') },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: t('کدام جمله «مکان عملیاتی» را درست تعریف می‌کند؟', 'Which statement correctly defines a "functional location"?'),
      options: [
        t('دستگاهی با شماره سریال که می‌تواند جابه‌جا شود', 'A unit with a serial number that can be moved'),
        t('شماره‌ای که مالی برای استهلاک به دارایی می‌دهد', 'The number Finance gives an asset for depreciation'),
        t('جایگاهی در تأسیسات با کارکرد مشخص که با تعویض دستگاه ثابت می‌ماند', 'A position in the facility with a specific function that stays the same when the unit is swapped'),
        t('فهرست قطعات یدکی یک تجهیز', 'The list of spare parts of an item'),
      ],
      answer: 2,
      explain: t(
        'مکان عملیاتی جایگاه است، نه دستگاه. گزینه اول تعریف تجهیز است، گزینه دوم شماره دارایی ثابت و گزینه آخر BOM.',
        'A functional location is a position, not a unit. The first option defines equipment, the second the fixed-asset number and the last the BOM.',
      ),
    },
    {
      q: t(
        'موتور توربین گازی EQ-100246 برای تعمیر اساسی از جایگاه GT-101 پیاده و موتور جایگزین EQ-100388 نصب می‌شود. در ERP چه باید ثبت شود؟',
        'Gas-turbine engine EQ-100246 is removed from position GT-101 for overhaul and exchange engine EQ-100388 is installed. What should be recorded in the ERP?',
      ),
      options: [
        t('پیاده کردن EQ-100246 و نصب EQ-100388 در همان مکان عملیاتی؛ هر دو تاریخچه ادامه می‌یابند', 'Remove EQ-100246 and install EQ-100388 at the same functional location; both histories continue'),
        t('حذف رکورد EQ-100246 و ساختن مکان عملیاتی تازه', 'Delete EQ-100246 and create a new functional location'),
        t('تغییر سریال EQ-100246 به سریال موتور جایگزین', 'Change EQ-100246’s serial to the exchange engine’s serial'),
        t('هیچ چیز؛ این فقط یک جابه‌جایی فیزیکی است', 'Nothing; it is only a physical move'),
      ],
      answer: 0,
      explain: t(
        'جایگاه ثابت می‌ماند و فقط تجهیز نصب‌شده عوض می‌شود. حذف رکورد یا تغییر سریال، تاریخچه دستگاه را از بین می‌برد و ثبت نکردن، تاریخچه جایگاه را نادرست می‌کند.',
        'The position stays; only the installed equipment changes. Deleting the record or changing the serial destroys the unit history, and recording nothing makes the position history wrong.',
      ),
    },
    {
      q: t(
        'بیشترین پیامد یک تجهیز 4 و احتمال خرابی آن 4 است. با قاعده مسار پترولیوم (A: 15 و بیشتر، B: 8 تا 14، C: 7 و کمتر) رده آن چیست؟',
        'An item’s highest consequence is 4 and its likelihood is 4. Under Masar Petroleum’s rule (A: 15 or more, B: 8 to 14, C: 7 or less), what is its class?',
      ),
      options: [t('B با امتیاز 16', 'B with a score of 16'), t('C با امتیاز 4', 'C with a score of 4'), t('B با امتیاز 8', 'B with a score of 8'), t('A با امتیاز 16', 'A with a score of 16')],
      answer: 3,
      explain: t(
        'امتیاز = 4 × 4 = 16 که از 15 بیشتر است، پس رده A. امتیاز 8 نتیجه جمع کردن به‌جای ضرب است.',
        'Score = 4 × 4 = 16, which is 15 or more, so class A. A score of 8 comes from adding instead of multiplying.',
      ),
    },
    {
      q: t(
        'BOM یک پمپ: 6 عدد آب‌بند با بهای واحد 3,500 و 2 عدد یاتاقان با بهای واحد 12,000. ارزش کل این BOM چقدر است؟',
        'A pump’s BOM: 6 seals at 3,500 each and 2 bearings at 12,000 each. What is the total value of this BOM?',
      ),
      options: [t('15,500', '15,500'), t('45,000', '45,000'), t('31,000', '31,000'), t('42,000', '42,000')],
      answer: 1,
      explain: t(
        '(6 × 3,500) + (2 × 12,000) = 21,000 + 24,000 = 45,000. عدد 15,500 فقط بهای واحدها را جمع کرده است.',
        '(6 × 3,500) + (2 × 12,000) = 21,000 + 24,000 = 45,000. The 15,500 option only adds the unit prices.',
      ),
    },
    {
      q: t('از 1,240 تجهیز میدان، 930 تجهیز رده بحرانیت دارند. درصد پوشش بحرانیت چقدر است؟', 'Of 1,240 equipment items, 930 have a criticality class. What is the criticality coverage?'),
      options: [t('25٪', '25%'), t('80٪', '80%'), t('75٪', '75%'), t('70٪', '70%')],
      answer: 2,
      explain: t('930 ÷ 1,240 = 0.75، یعنی 75٪. عدد 25٪ سهم تجهیزات بدون بحرانیت است.', '930 ÷ 1,240 = 0.75, so 75%. The 25% figure is the share without a class.'),
    },
    {
      q: t(
        'بهای خرید یک پمپ 300,000، هزینه نصب و راه‌اندازی 50,000 و هزینه آموزش اپراتورها 10,000 است. طبق IAS 16 چه مبلغی سرمایه‌ای می‌شود؟',
        'A pump costs 300,000; installation and commissioning cost 50,000; operator training costs 10,000. Under IAS 16, how much is capitalised?',
      ),
      options: [t('300,000', '300,000'), t('360,000', '360,000'), t('310,000', '310,000'), t('350,000', '350,000')],
      answer: 3,
      explain: t(
        'بها و نصب برای آماده‌سازی دارایی لازم‌اند: 300,000 + 50,000 = 350,000. آموزش کارکنان طبق IAS 16 هزینه دوره است، پس 360,000 نادرست است.',
        'Price and installation are needed to make the asset ready: 300,000 + 50,000 = 350,000. Staff training is a period expense under IAS 16, so 360,000 is wrong.',
      ),
    },
    {
      q: t('کدام داده در دفتر دارایی‌های ثابت نگه‌داری می‌شود و نه در فهرست فنی؟', 'Which data is held in the fixed-asset register rather than the technical register?'),
      options: [
        t('رده بحرانیت', 'Criticality class'),
        t('استهلاک انباشته و ارزش دفتری', 'Accumulated depreciation and book value'),
        t('تاریخچه خرابی', 'Failure history'),
        t('فهرست قطعات (BOM)', 'Bill of materials (BOM)'),
      ],
      answer: 1,
      explain: t(
        'استهلاک انباشته و ارزش دفتری داده‌های مالی‌اند. بحرانیت، تاریخچه خرابی و BOM داده‌های فنی‌اند که نگهداری از آن‌ها استفاده می‌کند.',
        'Accumulated depreciation and book value are financial data. Criticality, failure history and the BOM are technical data used by maintenance.',
      ),
    },
    {
      q: t('وقتی دستگاه یک جایگاه تعویض می‌شود، کدام شناسه با جایگاه می‌ماند؟', 'When the unit at a position is swapped, which identifier stays with the position?'),
      options: [t('شماره سریال سازنده', 'Manufacturer serial number'), t('شماره تجهیز', 'Equipment number'), t('تگ مهندسی', 'Engineering tag'), t('پلاک اموال', 'Property tag')],
      answer: 2,
      explain: t(
        'تگ مهندسی (و مکان عملیاتی) به جایگاه روی P&ID تعلق دارد. سریال، شماره تجهیز و پلاک اموال روی دستگاه‌اند و همراه آن جابه‌جا می‌شوند.',
        'The engineering tag (and the functional location) belongs to the position on the P&ID. The serial, equipment number and property tag belong to the unit and move with it.',
      ),
    },
    {
      q: t('امتیاز بحرانیت یک شیر اطمینان 8 است. با قاعده مسار پترولیوم رده آن چیست؟', 'A relief valve has a criticality score of 8. Under Masar Petroleum’s rule, what is its class?'),
      options: [
        t('B، چون 8 در بازه 8 تا 14 است', 'B, because 8 is in the 8 to 14 band'),
        t('A، چون شیرهای اطمینان عنصر حیاتی ایمنی‌اند', 'A, because relief valves are safety-critical elements'),
        t('C، چون در کار عادی کاری نمی‌کند', 'C, because it does nothing in normal operation'),
        t('رده ندارد، چون قطعه کوچکی است', 'No class, because it is a small part'),
      ],
      answer: 1,
      explain: t(
        'امتیاز به‌تنهایی B می‌دهد، اما قاعده استثنا می‌گوید عناصر حیاتی ایمنی همیشه A هستند. اینکه شیر در کار عادی کاری نمی‌کند، دلیل بیشتری برای توجه است، نه کمتر.',
        'The score alone gives B, but the override says safety-critical elements are always A. The fact that the valve does nothing in normal operation is a reason for more attention, not less.',
      ),
    },
    {
      q: t('در فهرستی با 1,240 رکورد، 31 رکورد تکراری پیدا شده است. نرخ تکرار چقدر است؟', 'A register of 1,240 records contains 31 duplicates. What is the duplicate rate?'),
      options: [t('2.5٪', '2.5%'), t('3.1٪', '3.1%'), t('0.25٪', '0.25%'), t('4.0٪', '4.0%')],
      answer: 0,
      explain: t('31 ÷ 1,240 = 0.025، یعنی 2.5٪. عدد 3.1٪ از تقسیم بر 1,000 به‌جای 1,240 به دست می‌آید.', '31 ÷ 1,240 = 0.025, so 2.5%. The 3.1% option divides by 1,000 instead of 1,240.'),
    },
  ],
}
