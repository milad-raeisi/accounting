import type { Lesson } from '../../types'

/* Account titles used in the Masar Petroleum examples. */
const ac = {
  inventory: { fa: 'موجودی مواد و قطعات', en: 'Materials and spares inventory' },
  auc09: { fa: 'دارایی در جریان تکمیل: چاه AR-09', en: 'Assets under construction: well AR-09' },
  repairs: { fa: 'هزینه تعمیر و نگهداری (مرکز هزینه CC-ARY-CMP)', en: 'Repairs and maintenance expense (cost centre CC-ARY-CMP)' },
  grir: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing' },
}

export const lesson: Lesson = {
  slug: 'requisitions-approvals',
  number: 2,
  level: 'beginner',
  minutes: 24,
  icon: 'NotebookPen',
  tone: 'asset',
  title: { fa: 'درخواست خرید و گردش کار تأیید', en: 'Purchase Requisitions and Approvals' },
  summary: {
    fa: 'ببینید یک نیاز چگونه به درخواست خرید تأییدشده تبدیل می‌شود: درخواست‌ها از کجا می‌آیند (کاربر، MRP، نگهداری و پروژه)، چه اطلاعاتی باید داشته باشند، بودجه و AFE چگونه کنترل می‌شود، گردش کار تأیید بر اساس مبلغ و گروه کالا چگونه کار می‌کند و چرا موضوع هزینه درست، بازیافت هزینه را ممکن می‌کند.',
    en: 'See how a need becomes an approved purchase requisition: where requisitions come from (users, MRP, maintenance and projects), what data they must carry, how budgets and AFEs are checked, how approval workflows route them by value and category, and why the right cost object makes cost recovery possible.',
  },
  objectives: [
    {
      fa: 'درخواست خرید را تعریف کنید و تفاوتش را با سفارش خرید توضیح دهید',
      en: 'Define a purchase requisition and explain how it differs from a purchase order',
    },
    {
      fa: 'منابع درخواست خرید را بشناسید: دستی، MRP، دستور کار نگهداری و برنامه پروژه',
      en: 'Recognise the sources of requisitions: manual, MRP, maintenance work orders and project plans',
    },
    {
      fa: 'اطلاعات لازم یک درخواست کامل، از جمله موضوع هزینه، را فهرست کنید',
      en: 'List the data a complete requisition needs, including the cost object',
    },
    {
      fa: 'مانده قابل استفاده بودجه یا AFE را محاسبه و درخواست را با آن کنترل کنید',
      en: 'Calculate the available budget or AFE and check a requisition against it',
    },
    {
      fa: 'مسیر تأیید یک درخواست را بر اساس مبلغ و گروه کالا تعیین کنید و اثر موضوع هزینه را بر ثبت مالی و بازیافت هزینه شرح دهید',
      en: 'Route a requisition by value and category, and explain how the cost object drives the finance posting and cost recovery',
    },
  ],
  sections: [
    {
      id: 'why-requisitions',
      title: { fa: 'چرا درخواست خرید مهم است؟', en: 'Why the Requisition Matters' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'مهندس حفاری چاه AR-09 در یک پیام کوتاه از کارشناس خرید می‌خواهد «فوری 120 عدد سنترالایزر لوله جداری» بخرد. کارشناس خرید تلفنی سفارش می‌دهد. سه هفته بعد فاکتوری 30,000 می‌رسد که نه شماره چاه دارد، نه AFE و نه تأییدی. واحد مالی آن را در یک حساب معلق نگه می‌دارد. در حسابرسی شرکا، انرژی البرز سهم خود را نمی‌پذیرد، چون درخواست تأییدشده‌ای وجود ندارد و هزینه به AFE چاه قابل ردیابی نیست.',
            en: 'The drilling engineer on well AR-09 sends the buyer a short message: “urgently need 120 casing centralisers.” The buyer orders by phone. Three weeks later an invoice for 30,000 arrives with no well number, no AFE and no approval. Finance parks it in a suspense account. At the partners’ audit, Alborz Energy refuses its share, because there is no approved requisition and the cost cannot be traced to the well’s AFE.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**درخواست خرید (Purchase requisition یا PR)** سندی داخلی است که با آن یک واحد از تدارکات می‌خواهد چیزی را تأمین کند. درخواست خرید هنوز هیچ تعهدی به تأمین‌کننده ایجاد نمی‌کند؛ فقط می‌گوید «به این قلم، با این مشخصات، تا این تاریخ، به حساب این موضوع هزینه نیاز داریم». همه کنترل‌های بعدی، یعنی بودجه، تأیید و بازیافت هزینه، روی همین سند بنا می‌شوند.',
            en: 'A **purchase requisition (PR)** is an internal document by which a department asks procurement to obtain something. A PR creates no commitment to any supplier yet; it simply says “we need this item, to this specification, by this date, charged to this cost object.” Every later control, budget, approval and cost recovery, is built on this document.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'درخواست خرید (PR)', en: 'Purchase requisition (PR)' },
            items: [
              { fa: 'سند داخلی', en: 'Internal document' },
              { fa: 'درخواست‌کننده یا سیستم آن را می‌سازد', en: 'Created by a requester or by the system' },
              { fa: 'هیچ تعهدی به تأمین‌کننده ندارد', en: 'No commitment to a supplier' },
              { fa: 'قیمت برآوردی است و تأمین‌کننده ممکن است مشخص نباشد', en: 'Price is an estimate; the supplier may be open' },
              { fa: 'صاحب بودجه آن را تأیید می‌کند', en: 'Approved by the budget holder' },
            ],
          },
          right: {
            title: { fa: 'سفارش خرید (PO)', en: 'Purchase order (PO)' },
            items: [
              { fa: 'سند بیرونی که برای تأمین‌کننده فرستاده می‌شود', en: 'External document sent to the supplier' },
              { fa: 'کارشناس خرید آن را از روی درخواست تأییدشده می‌سازد', en: 'Created by the buyer from an approved PR' },
              { fa: 'تعهد حقوقی الزام‌آور است', en: 'A binding legal commitment' },
              { fa: 'تأمین‌کننده، قیمت، شرایط و زمان تحویل قطعی است', en: 'Supplier, price, terms and delivery are fixed' },
              { fa: 'طبق جدول اختیارات امضا می‌شود', en: 'Signed according to the DoA' },
            ],
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'ارزان‌ترین جا برای اصلاح خطا', en: 'The cheapest place to fix an error' },
          text: {
            fa: 'موضوع هزینه اشتباه روی درخواست خرید با یک دقیقه کار اصلاح می‌شود. همان اشتباه روی فاکتور ثبت‌شده به سند اصلاحی نیاز دارد، و پس از حسابرسی شرکا ممکن است به قیمت از دست رفتن بازیافت کل مبلغ تمام شود.',
            en: 'A wrong cost object on a PR takes a minute to fix. The same mistake on a posted invoice needs a correcting entry, and after a partner audit it may cost the recovery of the whole amount.',
          },
        },
      ],
    },
    {
      id: 'pr-sources',
      title: { fa: 'درخواست‌های خرید از کجا می‌آیند؟', en: 'Where Requisitions Come From' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در یک شرکت بالادستی، درخواست خرید از چهار منبع می‌آید. منبع درخواست مهم است، چون تعیین می‌کند کالا به انبار برود یا مستقیماً به حساب یک کار خاص منظور شود.',
            en: 'In an upstream company, requisitions come from four sources. The source matters, because it decides whether the item goes into stock or is charged straight to a specific job.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'چهار منبع درخواست خرید در مسار پترولیوم', en: 'The four sources of requisitions at Masar Petroleum' },
          head: [
            { fa: 'منبع', en: 'Source' },
            { fa: 'اقلام نمونه', en: 'Typical items' },
            { fa: 'چه کسی یا چه چیزی می‌سازد', en: 'Created by' },
            { fa: 'تخصیص هزینه', en: 'Account assignment' },
          ],
          rows: [
            [
              { fa: 'دستی', en: 'Manual' },
              { fa: 'اقلام غیرانباری، خدمات و نیازهای یک‌باره (مثلاً مطالعه مشاور)', en: 'Non-stock items, services and one-off needs (for example a consultant’s study)' },
              { fa: 'کاربر واحد درخواست‌کننده', en: 'A user in the requesting department' },
              { fa: 'مرکز هزینه، چاه/AFE یا پروژه', en: 'Cost centre, well/AFE or project' },
            ],
            [
              { fa: 'MRP یا نقطه سفارش', en: 'MRP or reorder point' },
              { fa: 'اقلام انباری: شیر، واشر، باریت، فیلتر', en: 'Stock items: valves, gaskets, barite, filters' },
              { fa: 'اجرای شبانه سیستم، بررسی‌شده توسط برنامه‌ریز موجودی', en: 'An overnight system run, reviewed by the inventory planner' },
              { fa: 'انبار (موجودی)', en: 'Stock (inventory)' },
            ],
            [
              { fa: 'دستور کار نگهداری', en: 'Maintenance work order' },
              { fa: 'قطعات غیرانباری و خدمات بیرونی برای یک تعمیر مشخص', en: 'Non-stock parts and external services for a specific repair' },
              { fa: 'برنامه‌ریز نگهداری از روی فهرست قطعات دستور کار', en: 'The maintenance planner, from the work order’s parts list' },
              { fa: 'دستور کار (که بعداً به تجهیز یا مرکز هزینه تسویه می‌شود)', en: 'The work order (later settled to the equipment or cost centre)' },
            ],
            [
              { fa: 'برنامه پروژه یا AFE', en: 'Project plan or AFE' },
              { fa: 'اقلام بلندمدت و خدمات چاه‌ها و پروژه‌ها (لوله جداری، سرچاهی)', en: 'Long-lead items and services for wells and projects (casing, wellheads)' },
              { fa: 'مهندس پروژه از روی برنامه پروژه', en: 'The project engineer, from the project plan' },
              { fa: 'پروژه یا عنصر WBS متصل به AFE', en: 'Project or WBS element linked to the AFE' },
            ],
          ],
        },
        {
          type: 'h',
          text: { fa: 'درخواست خودکار MRP: یک مثال', en: 'An MRP-generated requisition: an example' },
        },
        {
          type: 'p',
          text: {
            fa: '**برنامه‌ریزی نیازمندی مواد (MRP)** در ساده‌ترین شکلش برای هر قلم انباری دو عدد دارد: **نقطه سفارش** (حداقلی که پایین‌تر از آن باید سفارش داد) و **حداکثر موجودی**. سیستم موجودی در دسترس را حساب می‌کند: موجودی فیزیکی، منهای مقداری که برای دستورهای کار رزرو شده، به‌علاوه مقداری که قبلاً سفارش داده شده و در راه است.',
            en: '**Material requirements planning (MRP)**, in its simplest form, holds two numbers for each stock item: a **reorder point** (the minimum below which we must reorder) and a **maximum stock**. The system calculates available stock: the physical quantity, minus what is reserved for work orders, plus what is already on order.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'موجودی در دسترس = موجودی فیزیکی − رزروشده + در راه (سفارش‌شده)؛ اگر کمتر از نقطه سفارش باشد: مقدار درخواست = حداکثر موجودی − موجودی در دسترس',
            en: 'Available stock = on hand − reserved + on order; if it is below the reorder point: requisition quantity = maximum stock − available stock',
          },
          note: {
            fa: 'شیر کشویی 2 اینچ در انبار مرکزی: موجودی 18، رزرو 6، در راه 0، نقطه سفارش 20، حداکثر 60. در دسترس = 18 − 6 + 0 = 12 که کمتر از 20 است؛ پس MRP درخواست 60 − 12 = 48 عدد را می‌سازد.',
            en: 'Two-inch gate valve in the Central Warehouse: on hand 18, reserved 6, on order 0, reorder point 20, maximum 60. Available = 18 − 6 + 0 = 12, below 20, so MRP creates a requisition for 60 − 12 = 48 units.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'برنامه‌ریز موجودی پیشنهادهای MRP را پیش از تبدیل به درخواست قطعی بررسی می‌کند، چون سیستم از برنامه حفاری سال بعد یا تعمیرات اساسی آینده خبر ندارد. برای **قطعات یدکی حیاتی** حتی اگر مصرف کم باشد حداقل موجودی تعیین می‌شود، چون نبودنشان گران‌تر از نگهداری‌شان است.',
            en: 'The inventory planner reviews MRP proposals before they become firm requisitions, because the system does not know about next year’s drilling programme or an upcoming major overhaul. **Critical spares** get a minimum stock even when usage is low, because not having them costs more than holding them.',
          },
        },
        {
          type: 'h',
          text: { fa: 'درخواست از دستور کار نگهداری', en: 'Requisitions from a maintenance work order' },
        },
        {
          type: 'p',
          text: {
            fa: 'برنامه‌ریز نگهداری برای تعمیر اساسی کمپرسور شماره 2 یک **دستور کار** باز می‌کند و فهرست قطعات را در آن وارد می‌کند. اقلامی که در انبار هستند رزرو می‌شوند؛ برای اقلام غیرانباری، مثل یک دست یاتاقان مخصوص، ERP خودکار درخواست خرید می‌سازد که تخصیص هزینه‌اش همان دستور کار است. وقتی قطعه می‌رسد، GRN آن مستقیم به دستور کار ثبت می‌شود، نه به انبار، و هزینه‌اش از دستور کار به مرکز هزینه ایستگاه تقویت فشار (CC-ARY-CMP) می‌نشیند.',
            en: 'The maintenance planner opens a **work order** for the overhaul of compressor No. 2 and lists the parts in it. Items held in stock are reserved; for non-stock items, such as a special bearing set, the ERP creates a requisition automatically with the work order as its account assignment. When the part arrives, its GRN is posted straight against the work order, not into stock, and its cost flows from the work order to the compressor station cost centre (CC-ARY-CMP).',
          },
        },
      ],
    },
    {
      id: 'pr-data',
      title: { fa: 'اطلاعات درخواست و موضوع هزینه', en: 'Requisition Data and the Cost Object' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'درخواست ناقص زمان همه را تلف می‌کند: کارشناس خرید باید تماس بگیرد و بپرسد، تأییدکننده نمی‌تواند تصمیم بگیرد و مالی نمی‌داند هزینه را کجا ثبت کند. جدول زیر درخواست سنترالایزرهای چاه AR-09 را، این بار درست و کامل، نشان می‌دهد.',
            en: 'An incomplete requisition wastes everyone’s time: the buyer has to call and ask, the approver cannot decide, and Finance does not know where to post the cost. The table below shows the AR-09 centraliser requisition, this time complete and correct.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'فیلدهای یک درخواست خرید کامل', en: 'The fields of a complete purchase requisition' },
          head: [
            { fa: 'فیلد', en: 'Field' },
            { fa: 'نمونه مسار پترولیوم', en: 'Masar Petroleum example' },
            { fa: 'چرا مهم است', en: 'Why it matters' },
          ],
          rows: [
            [
              { fa: 'کد کالا یا شرح خدمت', en: 'Material code or service description' },
              { fa: 'کالای 40012345: سنترالایزر فنری برای لوله جداری 9-5/8 اینچ', en: 'Material 40012345: bow-spring centraliser for 9-5/8 inch casing' },
              { fa: 'مشخصات، گروه کالا و سابقه خرید را وصل می‌کند', en: 'Links the specification, material group and purchase history' },
            ],
            [
              { fa: 'مقدار و واحد', en: 'Quantity and unit' },
              { fa: '120 عدد', en: '120 each' },
              { fa: 'مبنای سفارش و تطبیق سه‌طرفه', en: 'Basis of the order and the three-way match' },
            ],
            [
              { fa: 'تاریخ نیاز', en: 'Need date' },
              { fa: 'در محل دکل، 10 روز پیش از رانش لوله جداری', en: 'At the rig site, 10 days before the casing run' },
              { fa: 'روش خرید و پیگیری را تعیین می‌کند؛ باید زمان تحویل را در نظر بگیرد', en: 'Drives the sourcing method and expediting; must allow for lead time' },
            ],
            [
              { fa: 'محل تحویل', en: 'Delivery location' },
              { fa: 'انبار میدان، برای چاه AR-09', en: 'Field Warehouse, for well AR-09' },
              { fa: 'رسید کالا (GRN) همان‌جا ثبت می‌شود', en: 'Where the goods received note (GRN) is posted' },
            ],
            [
              { fa: 'نوع تخصیص هزینه', en: 'Account assignment category' },
              { fa: 'پروژه (AFE)', en: 'Project (AFE)' },
              { fa: 'تعیین می‌کند کالا به انبار برود یا مستقیم به حساب کار منظور شود', en: 'Decides whether the item goes to stock or is charged directly' },
            ],
            [
              { fa: 'موضوع هزینه', en: 'Cost object' },
              { fa: 'AFE-2024-022: حفاری و تکمیل چاه AR-09', en: 'AFE-2024-022: drilling and completion of well AR-09' },
              { fa: 'تعیین می‌کند چه کسی هزینه را می‌پردازد و آیا بازیافت می‌شود', en: 'Decides who bears the cost and whether it is recovered' },
            ],
            [
              { fa: 'قیمت و مبلغ برآوردی', en: 'Estimated price and value' },
              { fa: 'هر عدد 250؛ جمع 30,000', en: '250 each; 30,000 in total' },
              { fa: 'مسیر تأیید و کنترل بودجه بر اساس آن است', en: 'Drives the approval route and budget check' },
            ],
            [
              { fa: 'الزامات فنی و پیوست‌ها', en: 'Technical requirements and attachments' },
              { fa: 'مطابق API 10D، گواهی مواد، برگه مشخصات', en: 'To API 10D, material certificate, datasheet' },
              { fa: 'کارشناس خرید پیشنهادهای هم‌سطح را مقایسه می‌کند', en: 'Lets the buyer compare like with like' },
            ],
            [
              { fa: 'درخواست‌کننده و اولویت', en: 'Requester and priority' },
              { fa: 'مهندس حفاری؛ عادی', en: 'Drilling engineer; routine' },
              { fa: 'پاسخ‌گویی و پیگیری', en: 'Accountability and follow-up' },
            ],
          ],
        },
        {
          type: 'p',
          text: {
            fa: '**موضوع هزینه (Cost object)** هر چیزی است که می‌خواهیم هزینه‌اش را جداگانه بدانیم و گزارش کنیم. در مسار پترولیوم چهار نوع موضوع هزینه روی درخواست‌ها دیده می‌شود:',
            en: 'A **cost object** is anything whose cost we want to know and report separately. At Masar Petroleum four kinds of cost object appear on requisitions:',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**مرکز هزینه**: واحدی که مسئول هزینه‌های جاری است، مثل CC-ARY-CMP ایستگاه تقویت فشار. هزینه‌اش هزینه عملیاتی (Opex) است.',
              en: '**Cost centre**: a unit responsible for running costs, such as CC-ARY-CMP, the compressor station. Its costs are operating expenses (opex).',
            },
            {
              fa: '**چاه، پروژه یا AFE**: کار سرمایه‌ای روی یک چاه یا تأسیسات، مثل AFE-2024-022. هزینه‌اش ابتدا دارایی در جریان تکمیل (Capex) است.',
              en: '**Well, project or AFE**: capital work on a well or facility, such as AFE-2024-022. Its costs first become assets under construction (capex).',
            },
            {
              fa: '**دستور کار**: یک کار نگهداری که هزینه‌ها را جمع می‌کند و بعد به تجهیز یا مرکز هزینه تسویه می‌شود.',
              en: '**Work order**: a maintenance job that collects costs and later settles them to the equipment or cost centre.',
            },
            {
              fa: '**انبار**: هنوز موضوع هزینه‌ای ندارد؛ هزینه هنگام صدور حواله انبار به کار مصرف‌کننده منظور می‌شود.',
              en: '**Stock**: no cost object yet; the cost is assigned when the item is issued from the warehouse to the job that uses it.',
            },
          ],
        },
        {
          type: 'h',
          text: { fa: 'موضوع هزینه و بازیافت هزینه', en: 'The cost object and cost recovery' },
        },
        {
          type: 'p',
          text: {
            fa: 'سنترالایزرهای 30,000 که به AFE-2024-022 ثبت شوند، بخشی از بهای چاه می‌شوند و به نسبت سهم شرکا به حساب مشترک می‌روند: مسار پترولیوم 50٪ یعنی 15,000، انرژی البرز 30٪ یعنی 9,000 و نفت دنا 20٪ یعنی 6,000. اگر همین مبلغ اشتباهی به مرکز هزینه CC-ARY-CMP برود، AFE چاه 30,000 کمتر از واقع نشان داده می‌شود، بهای دارایی چاه کم و هزینه عملیاتی زیاد گزارش می‌شود و هزینه در دسته اشتباه بازیافت قرار می‌گیرد. در بسیاری از قراردادهای مشارکت در تولید، هزینه سرمایه‌ای طی چند سال و هزینه عملیاتی در همان سال بازیافت می‌شود؛ پس دسته اشتباه، زمان بازگشت پول را هم عوض می‌کند.',
            en: 'Centralisers worth 30,000 charged to AFE-2024-022 become part of the cost of the well and go to the joint account in proportion to the partners’ shares: Masar Petroleum 50%, or 15,000; Alborz Energy 30%, or 9,000; Dena Petroleum 20%, or 6,000. If the same amount goes to cost centre CC-ARY-CMP by mistake, the well’s AFE looks 30,000 under-spent, the well asset is understated, operating expense is overstated and the cost sits in the wrong recovery category. Under many production sharing contracts, capital costs are recovered over several years while operating costs are recovered in the year incurred, so the wrong category also changes when the money comes back.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'ERP قواعد اعتبارسنجی برای موضوع هزینه دارد: حساب‌های کل مواد چاه بدون AFE پذیرفته نمی‌شوند، روی AFE بسته‌شده ثبتی انجام نمی‌شود و هر مرکز هزینه فقط با حساب‌های مجاز خودش ترکیب می‌شود. در شرکت‌های ایرانی که پیش‌تر فرم کاغذی درخواست خرید با چند امضا داشتند، همین فرم حالا در ERP با تأیید الکترونیکی جایگزین شده و سیستم ثبت می‌کند چه کسی و چه زمانی تأیید کرده است؛ این سابقه برای حسابرسان و شرکا مدرک است.',
            en: 'The ERP holds validation rules for cost objects: well-material accounts are rejected without an AFE, nothing can be posted to a closed AFE, and each cost centre can only be combined with its allowed accounts. In Iranian companies that used to run a paper requisition form with several signatures, the ERP now replaces the form with electronic approvals and logs who approved and when; that log is evidence for auditors and partners.',
          },
        },
      ],
    },
    {
      id: 'budget-afe',
      title: { fa: 'کنترل بودجه و AFE', en: 'Budget and AFE Checks' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**بودجه** سقف هزینه مصوب یک مرکز هزینه یا پروژه برای یک دوره است. **مجوز هزینه (AFE: Authorization for Expenditure)** سندی است که برای یک کار مشخص، مثلاً حفاری و تکمیل چاه AR-09، برآورد هزینه را می‌آورد و مدیریت و، در مشارکت‌ها، شرکا آن را تصویب می‌کنند. تا AFE تصویب نشود، نباید هزینه‌ای برای آن کار تعهد شود. در ERP هر AFE معمولاً به یک پروژه یا عنصر WBS وصل است.',
            en: 'A **budget** is the approved spending limit of a cost centre or project for a period. An **AFE (authorization for expenditure)** is a document that sets out the estimated cost of a specific job, such as drilling and completing well AR-09, and is approved by management and, in joint ventures, by the partners. No cost should be committed to that job until the AFE is approved. In the ERP each AFE is usually linked to a project or WBS element.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'مانده قابل استفاده = بودجه یا AFE مصوب − هزینه واقعی ثبت‌شده − تعهدات باز',
            en: 'Available = approved budget or AFE − actual costs posted − open commitments',
          },
          note: {
            fa: 'تعهدات باز یعنی سفارش‌های خریدی که صادر شده‌اند اما هنوز GRN، SES یا فاکتورشان ثبت نشده است. بعضی شرکت‌ها درخواست‌های تأییدشده را هم کنار می‌گذارند.',
            en: 'Open commitments are POs that have been issued but not yet received or invoiced. Some companies also earmark approved requisitions.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'وضعیت AFE-2024-022 هنگام ثبت درخواست تکمیل چاه', en: 'Status of AFE-2024-022 when the completion requisition is raised' },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          numericCols: [1],
          rows: [
            [{ fa: 'AFE مصوب', en: 'Approved AFE' }, 6000000],
            [{ fa: 'کسر: هزینه واقعی ثبت‌شده', en: 'Less: actual costs posted' }, 3900000],
            [{ fa: 'کسر: تعهدات باز (سفارش‌های خرید)', en: 'Less: open commitments (POs)' }, 1500000],
            [{ fa: '**مانده قابل استفاده**', en: '**Available**' }, 600000],
            [{ fa: 'درخواست جدید: لوله مغزی و تجهیزات تکمیل', en: 'New PR: tubing and completion equipment' }, 750000],
            [{ fa: '**کسری**', en: '**Shortfall**' }, 150000],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'مانده قابل استفاده 6,000,000 − 3,900,000 − 1,500,000 = 600,000 است و درخواست 750,000، یعنی 150,000 بیشتر. ERP درخواست را با پیام خطا یا هشدار نگه می‌دارد. پیش‌بینی کل هزینه چاه حالا 3,900,000 + 1,500,000 + 750,000 = 6,150,000 است: 150,000 یا 2.5٪ بیش از AFE.',
            en: 'Available is 6,000,000 − 3,900,000 − 1,500,000 = 600,000, and the PR is for 750,000, 150,000 more. The ERP holds the PR with an error or a warning. The forecast total cost of the well is now 3,900,000 + 1,500,000 + 750,000 = 6,150,000: 150,000, or 2.5%, over the AFE.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'قاعده مسار پترولیوم (فرضی)', en: 'The Masar Petroleum rule (illustrative)' },
          text: {
            fa: 'خط‌مشی مسار پترولیوم می‌گوید پیش از هر تعهدی که از AFE بگذرد، باید **AFE تکمیلی (Supplementary AFE)** تصویب شود. موافقت‌نامه عملیات مشترک (در این مثال) فقط وقتی تصویب شرکا را لازم می‌داند که پیش‌بینی بیش‌خرج از 10٪ AFE اولیه بیشتر شود. اینجا بیش‌خرج 2.5٪ است: AFE تکمیلی داخلی لازم است، اما تصویب شرکا نه؛ هرچند شرکا باید در گزارش ماهانه AFE مطلع شوند.',
            en: 'Masar Petroleum’s policy says a **supplementary AFE** must be approved before any commitment that would exceed the AFE. The joint operating agreement (in this example) requires partner approval only when the forecast overrun exceeds 10% of the original AFE. Here the overrun is 2.5%: an internal supplementary AFE is needed, partner approval is not, although partners must be informed in the monthly AFE report.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'ERPها کنترل بودجه را به دو شکل اجرا می‌کنند: **توقف سخت** (درخواست بیش از مانده اصلاً ذخیره نمی‌شود) و **هشدار نرم** (تا یک درصد مجاز عبور می‌کند و به کنترل‌کننده هزینه خبر می‌دهد). برای مراکز هزینه عملیاتی معمولاً بودجه سالانه با تفکیک ماهانه کنترل می‌شود و برای AFEها کل عمر کار.',
            en: 'ERPs enforce budget checks in two ways: a **hard stop** (a PR above the available amount cannot be saved) and a **soft warning** (it passes up to a tolerance percentage and alerts the cost controller). Operating cost centres are usually checked against an annual budget phased by month; AFEs are checked over the whole life of the job.',
          },
        },
      ],
    },
    {
      id: 'approval-workflow',
      title: { fa: 'گردش کار تأیید بر اساس مبلغ و گروه کالا', en: 'Approval Workflows by Value and Category' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**گردش کار تأیید (Approval workflow)** مسیری است که ERP یک درخواست را بر اساس قواعد از پیش تعریف‌شده از کارتابل یک تأییدکننده به دیگری می‌فرستد. قواعد معمولاً به **مبلغ**، **گروه کالا**، **موضوع هزینه** و **واحد درخواست‌کننده** بستگی دارند. بسیاری از ERPها (مثلاً SAP) این قواعد را «استراتژی آزادسازی» (Release strategy) می‌نامند. آخرین تأییدکننده همان سطح جدول تفویض اختیار است و سطوح پایین‌تر پیش از او تأیید می‌کنند.',
            en: 'An **approval workflow** is the route along which the ERP sends a requisition from one approver’s inbox to the next, according to predefined rules. The rules usually depend on **value**, **material group**, **cost object** and **requesting department**. Many ERPs (for example SAP) call these rules a “release strategy”. The final approver is the level set by the delegation of authority, and lower levels approve before them.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'تأیید بر اساس مبلغ در مسار پترولیوم (سقف‌ها فرضی‌اند)', en: 'Value-based approval at Masar Petroleum (illustrative limits)' },
          head: [
            { fa: 'مبلغ درخواست', en: 'PR value' },
            { fa: 'مسیر تأیید به ترتیب', en: 'Approval route, in order' },
          ],
          rows: [
            [{ fa: 'تا 10,000', en: 'Up to 10,000' }, { fa: 'سرپرست بخش', en: 'Section head' }],
            [{ fa: 'بیش از 10,000 تا 100,000', en: 'Over 10,000 up to 100,000' }, { fa: 'مدیر واحد، سپس کنترل‌کننده هزینه', en: 'Department manager, then cost controller' }],
            [
              { fa: 'بیش از 100,000 تا 1,000,000', en: 'Over 100,000 up to 1,000,000' },
              { fa: 'مدیر واحد، کنترل‌کننده هزینه، سپس مدیر عملیات', en: 'Department manager, cost controller, then operations director' },
            ],
            [
              { fa: 'بیش از 1,000,000', en: 'Over 1,000,000' },
              { fa: 'مدیر واحد، کنترل‌کننده هزینه، مدیر عملیات، سپس مدیرعامل', en: 'Department manager, cost controller, operations director, then CEO' },
            ],
          ],
        },
        {
          type: 'table',
          caption: { fa: 'تأییدهای اضافه بر اساس گروه کالا', en: 'Extra approvals by category' },
          head: [
            { fa: 'گروه کالا یا خدمت', en: 'Category' },
            { fa: 'تأییدکننده اضافه', en: 'Extra approver' },
            { fa: 'چه چیزی را کنترل می‌کند', en: 'What they check' },
          ],
          rows: [
            [
              { fa: 'مواد شیمیایی خطرناک (مثلاً جاذب H2S، اسید)', en: 'Hazardous chemicals (for example H2S scavenger, acid)' },
              { fa: 'واحد HSE', en: 'HSE department' },
              { fa: 'برگه اطلاعات ایمنی، حمل و انبارش', en: 'Safety data sheet, transport and storage' },
            ],
            [
              { fa: 'تجهیزات تحت فشار و قطعات حیاتی', en: 'Pressure equipment and critical spares' },
              { fa: 'مرجع فنی (مهندس تجهیزات دوار یا ثابت)', en: 'Technical authority (rotating or static equipment engineer)' },
              { fa: 'مشخصات، استاندارد و قابلیت جایگزینی', en: 'Specification, standard and interchangeability' },
            ],
            [
              { fa: 'لوله‌های چاه (OCTG) و سرچاهی', en: 'OCTG and wellheads' },
              { fa: 'سرپرست مهندسی چاه', en: 'Well engineering superintendent' },
              { fa: 'گرید، اتصال و طراحی چاه', en: 'Grade, connection and well design' },
            ],
            [
              { fa: 'سخت‌افزار و نرم‌افزار', en: 'IT hardware and software' },
              { fa: 'واحد فناوری اطلاعات', en: 'IT department' },
              { fa: 'استانداردها و امنیت سایبری', en: 'Standards and cyber security' },
            ],
            [
              { fa: 'خدماتی که در محل انجام می‌شود', en: 'Services performed on site' },
              { fa: 'واحد HSE و صاحب قرارداد', en: 'HSE department and contract holder' },
              { fa: 'برنامه HSE پیمانکار و مجوز کار', en: 'Contractor’s HSE plan and permit to work' },
            ],
          ],
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'ثبت و کنترل خودکار', en: 'Submit and automatic checks' },
              text: {
                fa: 'مهندس تعمیرات درخواست 250,000 برای قطعات تعمیر اساسی کمپرسور شماره 2 را ثبت می‌کند. سیستم فیلدهای اجباری و بودجه مرکز هزینه CC-ARY-CMP را کنترل می‌کند.',
                en: 'The maintenance engineer submits a 250,000 PR for overhaul parts for compressor No. 2. The system checks the mandatory fields and the budget of cost centre CC-ARY-CMP.',
              },
            },
            {
              title: { fa: 'مدیر واحد', en: 'Department manager' },
              text: { fa: 'مدیر نگهداری نیاز و مقدار را تأیید می‌کند.', en: 'The maintenance manager confirms the need and the quantity.' },
            },
            {
              title: { fa: 'کنترل‌کننده هزینه و مرجع فنی (موازی)', en: 'Cost controller and technical authority (in parallel)' },
              text: {
                fa: 'کنترل‌کننده هزینه موضوع هزینه و بودجه را تأیید می‌کند؛ هم‌زمان مهندس تجهیزات دوار مشخصات قطعات حیاتی را تأیید می‌کند.',
                en: 'The cost controller confirms the cost object and budget; at the same time the rotating equipment engineer confirms the specification of the critical parts.',
              },
            },
            {
              title: { fa: 'مدیر عملیات', en: 'Operations director' },
              text: {
                fa: '250,000 در طبقه «بیش از 100,000 تا 1,000,000» است، پس تأیید نهایی با مدیر عملیات است.',
                en: '250,000 falls in the “over 100,000 up to 1,000,000” band, so the final approval sits with the operations director.',
              },
            },
            {
              title: { fa: 'آزاد شدن درخواست', en: 'Requisition released' },
              text: {
                fa: 'وضعیت درخواست «آزادشده» می‌شود و در کارتابل کارشناس خرید برای برگزاری مناقصه محدود قرار می‌گیرد.',
                en: 'The PR status becomes “released” and it lands in the buyer’s worklist for a limited tender.',
              },
            },
          ],
        },
        {
          type: 'list',
          items: [
            {
              fa: '**رد با توضیح**: درخواست ردشده با دلیل به درخواست‌کننده برمی‌گردد و ناپدید نمی‌شود.',
              en: '**Reject with a reason**: a rejected PR goes back to the requester with comments; it does not disappear.',
            },
            {
              fa: '**تغییر پس از تأیید**: افزایش مقدار یا قیمت بیش از حد مجاز (مثلاً 10٪، فرضی) یا تغییر موضوع هزینه، گردش کار را از نو شروع می‌کند.',
              en: '**Changes after approval**: raising quantity or price beyond a tolerance (say 10%, illustrative) or changing the cost object restarts the workflow.',
            },
            {
              fa: '**جانشین در مرخصی**: اختیار در سیستم و با تاریخ شروع و پایان به جانشین سپرده می‌شود؛ هرگز رمز عبور به کسی داده نمی‌شود.',
              en: '**Substitutes during leave**: authority is delegated in the system with start and end dates; passwords are never shared.',
            },
            {
              fa: '**رویه اضطراری**: در وضعیت واقعاً اضطراری (مثلاً کنترل فوران چاه)، فرد مجاز تأیید شفاهی می‌دهد و درخواست و سفارش در مهلت کوتاهی (مثلاً 24 ساعت، فرضی) با توجیه کتبی در سیستم ثبت و تأیید می‌شود. خریدهای اضطراری ماهانه گزارش می‌شوند.',
              en: '**Emergency procedure**: in a genuine emergency (for example well control), an authorised person gives verbal approval, and the PR and PO are entered and approved in the system within a short deadline (say 24 hours, illustrative) with a written justification. Emergency purchases are reported monthly.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' },
          text: {
            fa: '(1) تأیید بدون خواندن (مهر لاستیکی): تأییدکننده‌ای که موضوع هزینه را نگاه نمی‌کند، کنترلی انجام نداده است. (2) تأیید درخواست خود: هیچ‌کس نباید درخواست خودش را تأیید کند. (3) سوءاستفاده از برچسب «فوری» برای دور زدن مناقصه؛ فوری بودن ناشی از برنامه‌ریزی ضعیف، اضطرار نیست. (4) تاریخ نیاز غیرواقعی مثل «هرچه زودتر» که پیگیری را بی‌معنا می‌کند. (5) شرح مبهم مثل «شیر» به‌جای کد کالا و مشخصات کامل.',
            en: '(1) Rubber-stamping: an approver who never looks at the cost object has not controlled anything. (2) Approving your own PR: nobody should. (3) Using the “urgent” label to bypass tendering; urgency caused by poor planning is not an emergency. (4) Unrealistic need dates such as “ASAP”, which make expediting meaningless. (5) Vague descriptions like “valve” instead of a material code and full specification.',
          },
        },
      ],
    },
    {
      id: 'erp-requisitions',
      title: { fa: 'درخواست خرید در ERP و آنچه به مالی می‌رسد', en: 'Requisitions in the ERP and What Reaches Finance' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'درخواست خرید در ERP روی چند **داده پایه** بنا می‌شود: داده پایه کالا (شرح، واحد، گروه کالا و **کلاس ارزش‌گذاری** که حساب کل را تعیین می‌کند)، مراکز هزینه، پروژه‌ها و AFEها، حساب‌های کل، قواعد گردش کار و نقش‌های کاربری. خود درخواست یک **داده تراکنشی** است با شماره، تاریخ، اقلام و وضعیت.',
            en: 'In the ERP a requisition is built on several pieces of **master data**: the material master (description, unit, material group and the **valuation class** that determines the general ledger account), cost centres, projects and AFEs, general ledger accounts, workflow rules and user roles. The requisition itself is **transaction data** with a number, date, items and status.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'چه کسی با درخواست خرید چه می‌کند؟', en: 'Who does what with a requisition?' },
          head: [
            { fa: 'نقش', en: 'Role' },
            { fa: 'کار در سیستم', en: 'Task in the system' },
          ],
          rows: [
            [{ fa: 'درخواست‌کننده', en: 'Requester' }, { fa: 'ثبت درخواست دستی، پیوست مشخصات و پیگیری وضعیت', en: 'Creates manual PRs, attaches specifications and tracks status' }],
            [{ fa: 'برنامه‌ریز موجودی', en: 'Inventory planner' }, { fa: 'بررسی و تبدیل پیشنهادهای MRP به درخواست', en: 'Reviews MRP proposals and converts them into PRs' }],
            [{ fa: 'برنامه‌ریز نگهداری', en: 'Maintenance planner' }, { fa: 'درخواست از روی دستور کار', en: 'Generates PRs from work orders' }],
            [{ fa: 'تأییدکنندگان', en: 'Approvers' }, { fa: 'تأیید یا رد در کارتابل، با ثبت خودکار نام و زمان', en: 'Approve or reject in their inbox, with name and time logged automatically' }],
            [{ fa: 'کنترل‌کننده هزینه', en: 'Cost controller' }, { fa: 'کنترل موضوع هزینه، بودجه و AFE', en: 'Checks the cost object, budget and AFE' }],
            [{ fa: 'کارشناس خرید', en: 'Buyer' }, { fa: 'تبدیل درخواست آزادشده به استعلام یا سفارش خرید', en: 'Converts released PRs into RFQs or POs' }],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'وضعیت درخواست در طول عمرش تغییر می‌کند: پیش‌نویس، ارسال‌شده، در حال تأیید، آزادشده، بخشی سفارش‌شده و بسته. **جریان اسناد** هر درخواست را به استعلام، سفارش، GRN یا SES و فاکتور بعدی‌اش وصل می‌کند. خود درخواست **هیچ ثبتی در دفتر کل ندارد**. اما **تخصیص هزینه‌ای** که روی آن انتخاب می‌شود به سفارش خرید منتقل می‌شود و تعیین می‌کند ERP هنگام ثبت GRN (یا برای خدمات، هنگام پذیرش SES) چه ثبتی بسازد.',
            en: 'A requisition’s status changes over its life: draft, submitted, in approval, released, partly ordered and closed. The **document flow** links each PR to the RFQ, PO, GRN or SES, and invoice that follow. The PR itself creates **no general ledger entry**. But the **account assignment** chosen on it is copied to the PO and decides which entry the ERP creates when the GRN is posted (or, for services, when the SES is accepted).',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'سه درخواست، سه ثبت متفاوت', en: 'Three requisitions, three different entries' },
          text: {
            fa: '(1) درخواست MRP برای 48 شیر کشویی 2 اینچ برای انبار مرکزی به قیمت هر عدد 600: 48 × 600 = 28,800، تخصیص «انبار». (2) درخواست 120 سنترالایزر به قیمت 250: 30,000، تخصیص «AFE-2024-022». (3) درخواست یک دست یاتاقان از دستور کار کمپرسور شماره 2: 18,000، تخصیص «دستور کار» که به مرکز هزینه CC-ARY-CMP تسویه می‌شود. هر سه سفارش شده‌اند و کالاها رسیده است:',
            en: '(1) An MRP requisition for 48 two-inch gate valves for the Central Warehouse at 600 each: 48 × 600 = 28,800, assigned to “stock”. (2) A PR for 120 centralisers at 250: 30,000, assigned to “AFE-2024-022”. (3) A PR for a bearing set from the compressor No. 2 work order: 18,000, assigned to the work order, which settles to cost centre CC-ARY-CMP. All three have been ordered and the goods have arrived:',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های خودکار GRN، بر اساس تخصیص هزینه درخواست', en: 'Automatic GRN entries, driven by the PR’s account assignment' },
          entries: [
            {
              lines: [
                { account: ac.inventory, debit: 28800 },
                { account: ac.grir, credit: 28800 },
              ],
              memo: { fa: 'تخصیص «انبار»: 48 شیر به موجودی انبار مرکزی اضافه می‌شود.', en: 'Assigned to stock: 48 valves added to Central Warehouse inventory.' },
            },
            {
              lines: [
                { account: ac.auc09, debit: 30000 },
                { account: ac.grir, credit: 30000 },
              ],
              memo: { fa: 'تخصیص «AFE-2024-022»: سنترالایزرها بخشی از بهای چاه می‌شوند.', en: 'Assigned to AFE-2024-022: the centralisers become part of the cost of the well.' },
            },
            {
              lines: [
                { account: ac.repairs, debit: 18000 },
                { account: ac.grir, credit: 18000 },
              ],
              memo: { fa: 'تخصیص «دستور کار»: هزینه از دستور کار به مرکز هزینه ایستگاه تقویت فشار می‌رسد.', en: 'Assigned to the work order: the cost reaches the compressor station cost centre.' },
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'ثبت فاکتور و پرداخت برای هر سه مثل هم است (بدهکار GR/IR / بستانکار حساب‌های پرداختنی، سپس بدهکار حساب‌های پرداختنی / بستانکار بانک). تفاوت فقط در **سمت بدهکارِ GRN** است، و این سمت را همان انتخابی تعیین کرده که درخواست‌کننده روی درخواست خرید کرده است. برای خدمات، همین منطق هنگام پذیرش SES اجرا می‌شود؛ جزئیات GRN و SES در درس «رسید کالا (GRN) و برگه ثبت خدمات (SES)» آمده است.',
            en: 'The invoice and payment entries are the same for all three (Dr GR/IR / Cr Accounts payable, then Dr Accounts payable / Cr Cash at bank). The only difference is the **debit side of the GRN**, and that was decided by the choice the requester made on the PR. For services the same logic runs when the SES is accepted; the lesson on the goods received note (GRN) and service entry sheet (SES) covers both in detail.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'تعهد و هزینه واقعی سنترالایزرها روی AFE-2024-022', en: 'Commitment and actual cost of the centralisers on AFE-2024-022' },
          head: [
            { fa: 'لحظه', en: 'Moment' },
            { fa: 'تعهد باز', en: 'Open commitment' },
            { fa: 'هزینه واقعی', en: 'Actual cost' },
          ],
          numericCols: [1, 2],
          rows: [
            [{ fa: 'پس از تأیید درخواست', en: 'After the PR is approved' }, 0, 0],
            [{ fa: 'پس از صدور سفارش خرید', en: 'After the PO is issued' }, 30000, 0],
            [{ fa: 'پس از ثبت GRN', en: 'After the GRN' }, 0, 30000],
            [{ fa: 'پس از فاکتور با همان قیمت', en: 'After an invoice at the same price' }, 0, 30000],
          ],
        },
      ],
    },
    {
      id: 'exercises',
      title: { fa: 'تمرین‌ها', en: 'Exercises' },
      blocks: [
        {
          type: 'exercise',
          title: { fa: 'این درخواست چه کم دارد؟', en: 'What is wrong with this requisition?' },
          difficulty: 'easy',
          problem: {
            fa: 'درخواست زیر برای شیرهای سرچاهی چاه AR-09 ثبت شده است. مشکلات آن را پیدا کنید و بگویید هر کدام چگونه باید اصلاح شود.',
            en: 'The requisition below was raised for wellhead valves for well AR-09. Find its problems and say how each should be fixed.',
          },
          given: {
            head: [
              { fa: 'فیلد', en: 'Field' },
              { fa: 'مقدار ثبت‌شده', en: 'Value entered' },
            ],
            rows: [
              [{ fa: 'شرح', en: 'Description' }, { fa: 'شیر', en: 'Valves' }],
              [{ fa: 'مقدار', en: 'Quantity' }, { fa: '10', en: '10' }],
              [{ fa: 'تاریخ نیاز', en: 'Need date' }, { fa: 'هرچه زودتر', en: 'ASAP' }],
              [{ fa: 'محل تحویل', en: 'Delivery location' }, { fa: '(خالی)', en: '(blank)' }],
              [{ fa: 'موضوع هزینه', en: 'Cost object' }, { fa: 'CC-ARY-CMP ایستگاه تقویت فشار', en: 'CC-ARY-CMP compressor station' }],
              [{ fa: 'مبلغ برآوردی', en: 'Estimated value' }, { fa: '(خالی)', en: '(blank)' }],
              [{ fa: 'پیوست', en: 'Attachments' }, { fa: 'ندارد', en: 'None' }],
            ],
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'مشکل', en: 'Problem' },
                { fa: 'اصلاح', en: 'Fix' },
              ],
              rows: [
                [{ fa: 'شرح مبهم «شیر»', en: 'Vague description “valves”' }, { fa: 'کد کالا با نوع، اندازه، کلاس فشار و استاندارد (مثلاً API 6A)', en: 'Material code with type, size, pressure class and standard (for example API 6A)' }],
                [{ fa: 'تاریخ نیاز «هرچه زودتر»', en: 'Need date “ASAP”' }, { fa: 'تاریخ مشخص بر اساس برنامه حفاری و زمان تحویل', en: 'A specific date based on the drilling schedule and lead time' }],
                [{ fa: 'محل تحویل خالی', en: 'Blank delivery location' }, { fa: 'انبار میدان یا محل دکل چاه AR-09', en: 'Field Warehouse or the AR-09 rig site' }],
                [{ fa: 'موضوع هزینه اشتباه (مرکز هزینه عملیاتی)', en: 'Wrong cost object (an operating cost centre)' }, { fa: 'AFE-2024-022، چون برای حفاری چاه جدید است', en: 'AFE-2024-022, because it is for drilling a new well' }],
                [{ fa: 'مبلغ برآوردی خالی', en: 'Blank estimated value' }, { fa: 'برآورد از سابقه خرید؛ بدون آن مسیر تأیید و کنترل AFE ممکن نیست', en: 'Estimate from purchase history; without it neither the approval route nor the AFE check can work' }],
                [{ fa: 'بدون پیوست', en: 'No attachments' }, { fa: 'برگه مشخصات و الزام گواهی مواد', en: 'Datasheet and material certificate requirement' }],
              ],
            },
          ],
          answer: {
            fa: 'شش مشکل: شرح، تاریخ نیاز، محل تحویل، موضوع هزینه (باید AFE-2024-022 باشد)، مبلغ برآوردی و پیوست‌ها؛ مقدار تنها فیلد درست است.',
            en: 'Six problems: description, need date, delivery location, cost object (should be AFE-2024-022), estimated value and attachments; quantity is the only correct field.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'درخواست MRP برای باریت', en: 'An MRP requisition for barite' },
          difficulty: 'medium',
          problem: {
            fa: 'برای باریت در انبار میدان این اطلاعات را داریم. (الف) آیا MRP درخواست می‌سازد و برای چه مقداری؟ (ب) با قیمت هر تن 400، مبلغ درخواست و مسیر تأییدش چیست؟ (ج) اگر مقدار در راه 25 تن بود چه می‌شد؟',
            en: 'We have the data below for barite in the Field Warehouse. (a) Does MRP create a requisition, and for what quantity? (b) At 400 per tonne, what is the PR value and its approval route? (c) What if 25 tonnes were on order instead?',
          },
          given: {
            head: [
              { fa: 'داده', en: 'Data' },
              { fa: 'تن', en: 'Tonnes' },
            ],
            numericCols: [1],
            rows: [
              [{ fa: 'موجودی فیزیکی', en: 'On hand' }, 35],
              [{ fa: 'رزرو برای دستورهای کار', en: 'Reserved for work orders' }, 15],
              [{ fa: 'در راه (سفارش‌شده)', en: 'On order' }, 10],
              [{ fa: 'نقطه سفارش', en: 'Reorder point' }, 40],
              [{ fa: 'حداکثر موجودی', en: 'Maximum stock' }, 100],
            ],
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'موجودی در دسترس', en: 'Available stock' },
                  text: { fa: '35 − 15 + 10 = 30 تن، که کمتر از نقطه سفارش 40 است.', en: '35 − 15 + 10 = 30 tonnes, below the reorder point of 40.' },
                },
                {
                  title: { fa: 'مقدار درخواست', en: 'Requisition quantity' },
                  text: { fa: '100 − 30 = 70 تن.', en: '100 − 30 = 70 tonnes.' },
                },
                {
                  title: { fa: 'مبلغ و مسیر', en: 'Value and route' },
                  text: {
                    fa: '70 × 400 = 28,000؛ در طبقه «بیش از 10,000 تا 100,000»: مدیر واحد و کنترل‌کننده هزینه تأیید می‌کنند و دست‌کم سه پیشنهاد کتبی لازم است.',
                    en: '70 × 400 = 28,000; in the “over 10,000 up to 100,000” band: the department manager and cost controller approve, and at least three written quotations are needed.',
                  },
                },
                {
                  title: { fa: 'حالت (ج)', en: 'Case (c)' },
                  text: { fa: '35 − 15 + 25 = 45 تن که از 40 بیشتر است؛ MRP درخواستی نمی‌سازد.', en: '35 − 15 + 25 = 45 tonnes, above 40; MRP creates no requisition.' },
                },
              ],
            },
          ],
          answer: {
            fa: 'درخواست 70 تن به مبلغ 28,000 با تأیید مدیر واحد و کنترل‌کننده هزینه؛ با 25 تن در راه، درخواستی ساخته نمی‌شود.',
            en: 'A PR for 70 tonnes worth 28,000, approved by the department manager and cost controller; with 25 tonnes on order, no PR is created.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'کنترل AFE تعمیر چاه AR-04', en: 'AFE check for the AR-04 workover' },
          difficulty: 'medium',
          problem: {
            fa: 'AFE تعمیر چاه AR-04 مبلغ 800,000 تصویب شده است. هزینه واقعی ثبت‌شده 520,000 و تعهدات باز 180,000 است. درخواست تازه‌ای به مبلغ 140,000 برای خدمات اسیدکاری ثبت می‌شود. (الف) مانده قابل استفاده و کسری را حساب کنید. (ب) با قاعده مسار پترولیوم (AFE تکمیلی برای هر بیش‌خرج؛ تصویب شرکا برای بیش از 10٪)، چه تأییدی لازم است؟ (ج) اگر درخواست 200,000 بود چه؟',
            en: 'The AFE for the AR-04 workover is approved at 800,000. Actual costs posted are 520,000 and open commitments 180,000. A new PR for 140,000 of acid stimulation services is raised. (a) Calculate the available amount and the shortfall. (b) Under the Masar Petroleum rule (supplementary AFE for any overrun; partner approval above 10%), what approval is needed? (c) What if the PR were 200,000?',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'محاسبه', en: 'Calculation' },
                { fa: 'درخواست 140,000', en: 'PR of 140,000' },
                { fa: 'درخواست 200,000', en: 'PR of 200,000' },
              ],
              numericCols: [1, 2],
              rows: [
                [{ fa: 'AFE مصوب', en: 'Approved AFE' }, 800000, 800000],
                [{ fa: 'هزینه واقعی + تعهدات', en: 'Actual + commitments' }, 700000, 700000],
                [{ fa: 'مانده قابل استفاده', en: 'Available' }, 100000, 100000],
                [{ fa: 'کسری', en: 'Shortfall' }, 40000, 100000],
                [{ fa: 'پیش‌بینی کل هزینه', en: 'Forecast total cost' }, 840000, 900000],
              ],
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'درصد بیش‌خرج', en: 'Overrun percentage' },
                  text: { fa: '40,000 ÷ 800,000 = 5٪ و 100,000 ÷ 800,000 = 12.5٪.', en: '40,000 ÷ 800,000 = 5% and 100,000 ÷ 800,000 = 12.5%.' },
                },
                {
                  title: { fa: 'تأیید لازم', en: 'Approval needed' },
                  text: {
                    fa: 'با 140,000: AFE تکمیلی داخلی، بدون نیاز به تصویب شرکا (5٪ کمتر از 10٪ است). با 200,000: AFE تکمیلی که شرکا هم باید تصویب کنند (12.5٪ بیش از 10٪ است).',
                    en: 'With 140,000: an internal supplementary AFE, no partner approval (5% is below 10%). With 200,000: a supplementary AFE that the partners must also approve (12.5% is above 10%).',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: 'مانده 100,000 و کسری 40,000 (بیش‌خرج 5٪): AFE تکمیلی داخلی. با 200,000 کسری 100,000 (12.5٪): AFE تکمیلی با تصویب شرکا.',
            en: 'Available 100,000, shortfall 40,000 (5% overrun): an internal supplementary AFE. With 200,000 the shortfall is 100,000 (12.5%): a supplementary AFE approved by the partners.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'موضوع هزینه اشتباه و سند اصلاحی', en: 'A wrong cost object and the correcting entry' },
          difficulty: 'hard',
          problem: {
            fa: 'درخواست 120 سنترالایزر (30,000) اشتباهی با موضوع هزینه CC-ARY-CMP ثبت شد و GRN هزینه تعمیر و نگهداری را بدهکار کرد. در بررسی ماهانه AFE، کنترل‌کننده هزینه متوجه می‌شود. (الف) سند اصلاحی را بنویسید. (ب) سهم هر شریک از این هزینه چقدر است؟ (ج) اگر اصلاح نمی‌شد، چه اثری بر گزارش AFE و بازیافت هزینه داشت؟ (د) چه کنترلی جلوی تکرار را می‌گیرد؟',
            en: 'A PR for 120 centralisers (30,000) was raised against CC-ARY-CMP by mistake, and the GRN debited repairs and maintenance expense. The cost controller spots it in the monthly AFE review. (a) Write the correcting entry. (b) What is each partner’s share of this cost? (c) Had it not been corrected, how would it affect the AFE report and cost recovery? (d) What control would prevent a repeat?',
          },
          hint: {
            fa: 'سند اصلاحی هزینه را از جای اشتباه برمی‌دارد و به جای درست می‌برد؛ GR/IR و حساب‌های پرداختنی تغییری نمی‌کنند.',
            en: 'The correcting entry takes the cost out of the wrong place and puts it in the right one; GR/IR and payables do not change.',
          },
          solution: [
            {
              type: 'journal',
              entries: [
                {
                  lines: [
                    { account: ac.auc09, debit: 30000 },
                    { account: ac.repairs, credit: 30000 },
                  ],
                  memo: {
                    fa: 'انتقال هزینه سنترالایزرها از مرکز هزینه CC-ARY-CMP به AFE-2024-022.',
                    en: 'Reclassify the centraliser cost from cost centre CC-ARY-CMP to AFE-2024-022.',
                  },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'سهم شرکا از 30,000', en: 'Partner shares of 30,000' },
              head: [
                { fa: 'شریک', en: 'Partner' },
                { fa: 'سهم', en: 'Share' },
                { fa: 'مبلغ', en: 'Amount' },
              ],
              numericCols: [2],
              rows: [
                [{ fa: 'مسار پترولیوم', en: 'Masar Petroleum' }, { fa: '50٪', en: '50%' }, 15000],
                [{ fa: 'انرژی البرز', en: 'Alborz Energy' }, { fa: '30٪', en: '30%' }, 9000],
                [{ fa: 'نفت دنا', en: 'Dena Petroleum' }, { fa: '20٪', en: '20%' }, 6000],
                [{ fa: '**جمع**', en: '**Total**' }, { fa: '100٪', en: '100%' }, 30000],
              ],
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'اثر اصلاح‌نشدن', en: 'Effect if not corrected' },
                  text: {
                    fa: 'AFE-2024-022 به اندازه 30,000 کمتر از واقع خرج‌شده نشان داده می‌شد، بهای چاه کم و هزینه عملیاتی زیاد گزارش می‌شد، و هزینه در دسته عملیاتی بازیافت قرار می‌گرفت نه سرمایه‌ای؛ شرکا هم ممکن بود در حسابرسی آن را زیر سؤال ببرند.',
                    en: 'AFE-2024-022 would look 30,000 under-spent, the well cost would be understated and operating expense overstated, and the cost would sit in the operating rather than capital recovery category; partners might also challenge it at audit.',
                  },
                },
                {
                  title: { fa: 'کنترل پیشگیرانه', en: 'Preventive control' },
                  text: {
                    fa: 'قاعده اعتبارسنجی در ERP: گروه کالای «لوله و لوازم چاه» فقط با تخصیص AFE یا انبار پذیرفته شود؛ و کنترل‌کننده هزینه در گردش کار، موضوع هزینه را پیش از آزاد شدن درخواست تأیید کند.',
                    en: 'An ERP validation rule: the “well tubulars and accessories” material group is accepted only with an AFE or stock assignment; and the cost controller confirms the cost object in the workflow before the PR is released.',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: 'بدهکار دارایی در جریان تکمیل: چاه AR-09 مبلغ 30,000 / بستانکار هزینه تعمیر و نگهداری 30,000؛ سهم‌ها 15,000، 9,000 و 6,000.',
            en: 'Dr Assets under construction: well AR-09 30,000 / Cr Repairs and maintenance expense 30,000; shares 15,000, 9,000 and 6,000.',
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
              fa: 'درخواست خرید سند داخلی و نقطه شروع همه کنترل‌هاست؛ تعهدی به تأمین‌کننده ندارد و در دفتر کل ثبت نمی‌شود.',
              en: 'A PR is an internal document and the starting point of every control; it commits nothing to a supplier and posts nothing to the ledger.',
            },
            {
              fa: 'درخواست‌ها دستی، از MRP، از دستور کار نگهداری یا از برنامه پروژه می‌آیند؛ MRP مقدار را با موجودی در دسترس، نقطه سفارش و حداکثر موجودی حساب می‌کند.',
              en: 'PRs come from users, MRP, maintenance work orders or project plans; MRP sizes them from available stock, the reorder point and the maximum.',
            },
            {
              fa: 'درخواست کامل کد کالا، مقدار، تاریخ نیاز، محل تحویل، تخصیص و موضوع هزینه، مبلغ برآوردی و پیوست‌های فنی دارد.',
              en: 'A complete PR carries a material code, quantity, need date, delivery location, account assignment and cost object, estimated value and technical attachments.',
            },
            {
              fa: 'مانده قابل استفاده = بودجه یا AFE − هزینه واقعی − تعهدات باز؛ بیش‌خرج به AFE تکمیلی و گاهی تصویب شرکا نیاز دارد.',
              en: 'Available = budget or AFE − actual costs − open commitments; an overrun needs a supplementary AFE and sometimes partner approval.',
            },
            {
              fa: 'گردش کار تأیید بر اساس مبلغ و گروه کالا مسیر را تعیین می‌کند؛ تخصیص هزینه درخواست، سمت بدهکار GRN یا SES و در نتیجه بازیافت هزینه را تعیین می‌کند.',
              en: 'The approval workflow routes PRs by value and category; the PR’s account assignment decides the debit side of the GRN or SES and therefore cost recovery.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'درخواست خرید (PR)', en: 'Purchase requisition (PR)' },
              def: { fa: 'سند داخلی درخواست تأمین یک کالا یا خدمت، بدون تعهد به تأمین‌کننده.', en: 'An internal request to obtain goods or services, with no commitment to a supplier.' },
            },
            {
              term: { fa: 'برنامه‌ریزی نیازمندی مواد (MRP)', en: 'Material requirements planning (MRP)' },
              def: { fa: 'محاسبه خودکار نیاز اقلام انباری و ساخت پیشنهاد خرید.', en: 'Automatic calculation of stock-item needs that creates purchase proposals.' },
            },
            {
              term: { fa: 'نقطه سفارش', en: 'Reorder point' },
              def: { fa: 'سطح موجودی در دسترس که پایین‌تر از آن باید سفارش داد.', en: 'The available-stock level below which an item must be reordered.' },
            },
            {
              term: { fa: 'تخصیص هزینه (Account assignment)', en: 'Account assignment' },
              def: { fa: 'انتخاب اینکه کالا به انبار برود یا به کدام موضوع هزینه منظور شود.', en: 'The choice of whether an item goes to stock or to which cost object it is charged.' },
            },
            {
              term: { fa: 'موضوع هزینه (Cost object)', en: 'Cost object' },
              def: { fa: 'مرکز هزینه، چاه، پروژه/AFE یا دستور کاری که هزینه به آن تعلق می‌گیرد.', en: 'The cost centre, well, project/AFE or work order that bears a cost.' },
            },
            {
              term: { fa: 'مجوز هزینه (AFE)', en: 'Authorization for expenditure (AFE)' },
              def: { fa: 'برآورد مصوب هزینه یک کار مشخص که پیش از تعهد هزینه لازم است.', en: 'The approved cost estimate of a specific job, required before costs are committed.' },
            },
            {
              term: { fa: 'تعهد (Commitment)', en: 'Commitment' },
              def: { fa: 'مبلغ سفارش‌های باز که هنوز به هزینه واقعی تبدیل نشده و از بودجه کم می‌شود.', en: 'The value of open orders not yet turned into actual cost, deducted from the budget.' },
            },
            {
              term: { fa: 'گردش کار تأیید', en: 'Approval workflow' },
              def: { fa: 'مسیر خودکار تأیید یک سند بر اساس مبلغ، گروه کالا و موضوع هزینه.', en: 'The automatic route a document follows for approval, by value, category and cost object.' },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: {
        fa: 'کدام جمله درباره درخواست خرید و سفارش خرید درست است؟',
        en: 'Which statement about purchase requisitions and purchase orders is true?',
      },
      options: [
        { fa: 'درخواست خرید برای تأمین‌کننده فرستاده می‌شود و الزام‌آور است', en: 'A PR is sent to the supplier and is binding' },
        { fa: 'سفارش خرید سندی داخلی است و تعهدی ایجاد نمی‌کند', en: 'A PO is an internal document and creates no commitment' },
        { fa: 'درخواست خرید داخلی است؛ سفارش خرید تعهد حقوقی به تأمین‌کننده است', en: 'A PR is internal; a PO is a legal commitment to the supplier' },
        { fa: 'هر دو هنگام ثبت، حساب‌های پرداختنی را بستانکار می‌کنند', en: 'Both credit accounts payable when they are created' },
      ],
      answer: 2,
      explain: {
        fa: 'درخواست خرید درخواستی داخلی از تدارکات است؛ سفارش خرید سندی بیرونی و الزام‌آور برای تأمین‌کننده است. هیچ‌کدام حساب‌های پرداختنی را بستانکار نمی‌کنند؛ این کار فاکتور است.',
        en: 'A PR is an internal request to procurement; a PO is an external, binding document for the supplier. Neither credits accounts payable; the invoice does that.',
      },
    },
    {
      q: {
        fa: 'موجودی فیزیکی 50، رزرو 10، در راه 20، نقطه سفارش 70 و حداکثر 150 است. MRP چه درخواستی می‌سازد؟',
        en: 'On hand 50, reserved 10, on order 20, reorder point 70, maximum 150. What requisition does MRP create?',
      },
      options: [
        { fa: '90 عدد', en: '90 units' },
        { fa: '100 عدد', en: '100 units' },
        { fa: '80 عدد', en: '80 units' },
        { fa: 'هیچ درخواستی، چون 50 + 20 = 70', en: 'None, because 50 + 20 = 70' },
      ],
      answer: 0,
      explain: {
        fa: 'در دسترس = 50 − 10 + 20 = 60 که کمتر از 70 است؛ مقدار = 150 − 60 = 90. گزینه 100 رزرو و در راه را نادیده گرفته (150 − 50) و گزینه «هیچ» رزرو را فراموش کرده است.',
        en: 'Available = 50 − 10 + 20 = 60, below 70; quantity = 150 − 60 = 90. The 100 option ignores the reservation and the order in transit (150 − 50), and the “none” option forgets the reservation.',
      },
    },
    {
      q: {
        fa: 'برنامه‌ریز نگهداری برای تعمیر کمپرسور به یاتاقانی نیاز دارد که در انبار نگهداری نمی‌شود. تخصیص هزینه درخواست چه باید باشد؟',
        en: 'A maintenance planner needs a bearing that is not stocked, for a compressor repair. What should the PR’s account assignment be?',
      },
      options: [
        { fa: 'انبار مرکزی', en: 'Central Warehouse stock' },
        { fa: 'AFE حفاری چاه AR-09', en: 'The AR-09 drilling AFE' },
        { fa: 'هیچ؛ مالی بعداً تعیین می‌کند', en: 'None; Finance will decide later' },
        { fa: 'دستور کار تعمیر که به مرکز هزینه ایستگاه تسویه می‌شود', en: 'The repair work order, which settles to the station’s cost centre' },
      ],
      answer: 3,
      explain: {
        fa: 'قطعه غیرانباری برای یک کار مشخص مستقیماً به دستور کار تخصیص می‌یابد و هزینه‌اش از آنجا به مرکز هزینه ایستگاه تقویت فشار می‌رسد. فرستادن به انبار آن را بی‌دلیل موجودی می‌کند و AFE چاه هم ربطی به این تعمیر ندارد.',
        en: 'A non-stock part for a specific job is assigned straight to the work order, and its cost flows from there to the compressor station cost centre. Sending it to stock would make it inventory for no reason, and the well’s AFE has nothing to do with this repair.',
      },
    },
    {
      q: {
        fa: 'AFE مصوب 2,000,000، هزینه واقعی 1,200,000 و تعهدات باز 500,000 است. مانده قابل استفاده چقدر است؟',
        en: 'An AFE is approved at 2,000,000, with actual costs of 1,200,000 and open commitments of 500,000. What is the available amount?',
      },
      options: [
        { fa: '800,000', en: '800,000' },
        { fa: '300,000', en: '300,000' },
        { fa: '1,500,000', en: '1,500,000' },
        { fa: '700,000', en: '700,000' },
      ],
      answer: 1,
      explain: {
        fa: '2,000,000 − 1,200,000 − 500,000 = 300,000. گزینه 800,000 تعهدات باز را فراموش کرده است؛ سفارش‌های صادرشده هم بودجه را مصرف می‌کنند، حتی اگر هنوز کالایی نرسیده باشد.',
        en: '2,000,000 − 1,200,000 − 500,000 = 300,000. The 800,000 option forgets the open commitments; issued POs consume budget too, even before anything arrives.',
      },
    },
    {
      q: {
        fa: 'AFE اولیه 4,000,000 است و پیش‌بینی کل هزینه به 4,600,000 رسیده است. با قاعده مسار پترولیوم (تصویب شرکا برای بیش‌خرج بالای 10٪) چه لازم است؟',
        en: 'The original AFE is 4,000,000 and the forecast total cost has reached 4,600,000. Under the Masar Petroleum rule (partner approval above a 10% overrun), what is required?',
      },
      options: [
        { fa: 'بیش‌خرج 6٪؛ کاری لازم نیست', en: '6% overrun; nothing is required' },
        { fa: 'بیش‌خرج 15٪؛ فقط AFE تکمیلی داخلی', en: '15% overrun; an internal supplementary AFE only' },
        { fa: 'بیش‌خرج 15٪؛ AFE تکمیلی با تصویب شرکا', en: '15% overrun; a supplementary AFE approved by the partners' },
        { fa: 'بیش‌خرج 600,000؛ چون کمتر از 1,000,000 است مدیر عملیات کافی است', en: '600,000 overrun; under 1,000,000, so the operations director is enough' },
      ],
      answer: 2,
      explain: {
        fa: 'بیش‌خرج = 4,600,000 − 4,000,000 = 600,000 و 600,000 ÷ 4,000,000 = 15٪ که از 10٪ بیشتر است؛ پس AFE تکمیلی باید به تصویب شرکا هم برسد. گزینه آخر جدول اختیارات داخلی را با قاعده AFE در موافقت‌نامه شرکا اشتباه گرفته است.',
        en: 'Overrun = 4,600,000 − 4,000,000 = 600,000, and 600,000 ÷ 4,000,000 = 15%, above 10%; so the supplementary AFE also needs partner approval. The last option confuses the internal DoA with the AFE rule in the partners’ agreement.',
      },
    },
    {
      q: {
        fa: 'هزینه‌ای 30,000 به حساب مشترک میدان آریا ثبت شده است. سهم انرژی البرز (30٪) چقدر است؟',
        en: 'A cost of 30,000 is charged to the Arya field joint account. What is Alborz Energy’s (30%) share?',
      },
      options: [
        { fa: '9,000', en: '9,000' },
        { fa: '15,000', en: '15,000' },
        { fa: '6,000', en: '6,000' },
        { fa: '30,000', en: '30,000' },
      ],
      answer: 0,
      explain: {
        fa: '30,000 × 30٪ = 9,000. 15,000 سهم 50٪ مسار پترولیوم و 6,000 سهم 20٪ نفت دنا است. این تقسیم فقط وقتی درست انجام می‌شود که هزینه به موضوع هزینه مشترک درست ثبت شده باشد.',
        en: '30,000 × 30% = 9,000. 15,000 is Masar Petroleum’s 50% and 6,000 is Dena Petroleum’s 20%. The split only works if the cost was charged to the right joint cost object.',
      },
    },
    {
      q: {
        fa: 'درخواستی برای خرید جاذب H2S (ماده شیمیایی خطرناک) ثبت شده است. علاوه بر تأییدهای مبلغی، چه تأییدی لازم است؟',
        en: 'A PR is raised for H2S scavenger (a hazardous chemical). Besides the value-based approvals, which approval is needed?',
      },
      options: [
        { fa: 'واحد فناوری اطلاعات', en: 'The IT department' },
        { fa: 'سرپرست مهندسی چاه', en: 'The well engineering superintendent' },
        { fa: 'هیچ تأیید اضافه‌ای لازم نیست', en: 'No extra approval is needed' },
        { fa: 'واحد HSE، برای برگه اطلاعات ایمنی، حمل و انبارش', en: 'The HSE department, for the safety data sheet, transport and storage' },
      ],
      answer: 3,
      explain: {
        fa: 'گردش کار برای گروه «مواد شیمیایی خطرناک» تأیید HSE را اضافه می‌کند تا حمل و نگهداری ایمن پیش از خرید روشن باشد. مهندسی چاه برای OCTG و سرچاهی است و فناوری اطلاعات برای سخت‌افزار و نرم‌افزار.',
        en: 'The workflow adds HSE approval for the “hazardous chemicals” category so that safe transport and storage are settled before buying. Well engineering covers OCTG and wellheads, and IT covers hardware and software.',
      },
    },
    {
      q: {
        fa: 'درخواستی برای 120 عدد تأیید و آزاد شده است. درخواست‌کننده مقدار را به 200 تغییر می‌دهد. چه باید شود؟',
        en: 'A PR for 120 units has been approved and released. The requester changes the quantity to 200. What should happen?',
      },
      options: [
        { fa: 'هیچ؛ درخواست قبلاً تأیید شده است', en: 'Nothing; the PR is already approved' },
        { fa: 'گردش کار تأیید از نو شروع شود، چون افزایش از حد مجاز بیشتر است', en: 'The approval workflow restarts, because the increase exceeds the tolerance' },
        { fa: 'کارشناس خرید خودش تغییر را تأیید کند', en: 'The buyer approves the change himself' },
        { fa: 'فقط مالی باید مطلع شود', en: 'Only Finance needs to be informed' },
      ],
      answer: 1,
      explain: {
        fa: 'افزایش از 120 به 200 یعنی 80 عدد یا حدود 67٪ که خیلی بیش از حد مجاز (مثلاً 10٪) است. تأیید قبلی برای 120 عدد بود، نه 200؛ پس درخواست باید دوباره تأیید شود. کارشناس خرید هم اختیار تأیید درخواست را ندارد.',
        en: 'Going from 120 to 200 is 80 more units, about 67%, far beyond a tolerance such as 10%. The earlier approval was for 120, not 200, so the PR must be approved again. The buyer has no authority to approve requisitions either.',
      },
    },
    {
      q: {
        fa: 'سفارش 120 سنترالایزر به قیمت 250 با تخصیص AFE-2024-022 رسیده و پذیرفته شده است. ERP چه ثبتی می‌سازد؟',
        en: 'An order for 120 centralisers at 250, assigned to AFE-2024-022, is received and accepted. What entry does the ERP create?',
      },
      options: [
        { fa: 'بدهکار موجودی 30,000 / بستانکار GR/IR 30,000', en: 'Dr Inventory 30,000 / Cr GR/IR 30,000' },
        { fa: 'بدهکار هزینه تعمیر و نگهداری 30,000 / بستانکار GR/IR 30,000', en: 'Dr Repairs and maintenance expense 30,000 / Cr GR/IR 30,000' },
        { fa: 'بدهکار دارایی در جریان تکمیل: چاه AR-09 مبلغ 30,000 / بستانکار GR/IR 30,000', en: 'Dr Assets under construction: well AR-09 30,000 / Cr GR/IR 30,000' },
        { fa: 'بدهکار دارایی در جریان تکمیل 30,000 / بستانکار حساب‌های پرداختنی 30,000', en: 'Dr Assets under construction 30,000 / Cr Accounts payable 30,000' },
      ],
      answer: 2,
      explain: {
        fa: '120 × 250 = 30,000. تخصیص AFE یعنی هزینه مستقیم به بهای چاه می‌رود، نه به انبار یا هزینه عملیاتی. سمت بستانکار در GRN حساب GR/IR است؛ حساب‌های پرداختنی فقط با فاکتور بستانکار می‌شود.',
        en: '120 × 250 = 30,000. An AFE assignment sends the cost straight to the cost of the well, not to stock or operating expense. The credit at the GRN is GR/IR; accounts payable is credited only by the invoice.',
      },
    },
    {
      q: {
        fa: 'هنگام فوران چاه، تیم عملیات فوراً به خدمات کنترل چاه نیاز دارد. رویه درست کدام است؟',
        en: 'During a well-control incident, operations urgently needs well-control services. What is the correct procedure?',
      },
      options: [
        {
          fa: 'فرد مجاز تأیید شفاهی می‌دهد؛ درخواست و سفارش در مهلت کوتاه تعیین‌شده با توجیه کتبی ثبت و تأیید می‌شود',
          en: 'An authorised person gives verbal approval; the PR and PO are entered and approved within the set short deadline, with a written justification',
        },
        { fa: 'صبر برای مناقصه عمومی، چون مبلغ بالاست', en: 'Wait for an open tender, because the value is high' },
        { fa: 'خرید بدون هیچ سندی، چون اضطراری است', en: 'Buy without any documents, because it is an emergency' },
        { fa: 'خرید را به چند سفارش کوچک تقسیم کنند تا تأیید سریع‌تر شود', en: 'Split the purchase into small orders so approvals are faster' },
      ],
      answer: 0,
      explain: {
        fa: 'رویه اضطراری سرعت را با کنترل جمع می‌کند: اول اقدام با تأیید فرد مجاز، بعد ثبت کامل و مستند در سیستم. انتظار برای مناقصه در اضطرار خطرناک است و خرید بی‌سند یا خرد کردن سفارش، هزینه را غیرقابل دفاع و شاید غیرقابل بازیافت می‌کند.',
        en: 'The emergency procedure combines speed with control: act first on an authorised person’s approval, then record everything fully in the system. Waiting for a tender in an emergency is dangerous, and buying without documents or splitting orders makes the cost indefensible and possibly unrecoverable.',
      },
    },
  ],
}
