import type { Lesson } from '../../types'

const ac = {
  invSpares: { fa: 'موجودی قطعات یدکی: انبار مرکزی', en: 'Inventory: spare parts (Central Warehouse)' },
  invOctg: { fa: 'موجودی لوله‌های جداری و مغزی (OCTG): انبار میدان', en: 'Inventory: OCTG (Field Warehouse)' },
  invChem: { fa: 'موجودی مواد شیمیایی: انبار میدان', en: 'Inventory: chemicals (Field Warehouse)' },
  aucAR11: { fa: 'دارایی در جریان ساخت: چاه AR-07', en: 'Assets under construction: well AR-07' },
  aucAR12: { fa: 'دارایی در جریان ساخت: چاه AR-12', en: 'Assets under construction: well AR-12' },
  grir: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing account' },
  consumPrd: { fa: 'هزینه اقلام مصرفی (مرکز هزینه CC-ARY-PRD)', en: 'Consumables expense (cost centre CC-ARY-PRD)' },
  repairsWO: {
    fa: 'هزینه تعمیر و نگهداری (دستور کار WO-45188، کمپرسور K-102)',
    en: 'Repairs and maintenance expense (work order WO-45188, compressor K-102)',
  },
  wellRepairs: {
    fa: 'هزینه تعمیر و نگهداری چاه (دستور کار WO-45210، مرکز هزینه CC-ARY-PRD)',
    en: 'Well repairs and maintenance (work order WO-45210, cost centre CC-ARY-PRD)',
  },
  wellRepairsAR07: {
    fa: 'هزینه تعمیر و نگهداری چاه (دستور کار WO-45230، مرکز هزینه CC-ARY-PRD)',
    en: 'Well repairs and maintenance (work order WO-45230, cost centre CC-ARY-PRD)',
  },
  maintCmp: {
    fa: 'هزینه تعمیر و نگهداری (مرکز هزینه CC-ARY-CMP)',
    en: 'Repairs and maintenance expense (cost centre CC-ARY-CMP)',
  },
  inputVat: { fa: 'مالیات بر ارزش افزوده خرید', en: 'Input VAT receivable' },
  apToos: { fa: 'حساب‌های پرداختنی: فن‌آوران کمپرسور توس', en: 'Accounts payable: Toos Compressor Technologies' },
}

const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'grn-ses',
  number: 7,
  level: 'intermediate',
  minutes: 30,
  icon: 'FileCheck',
  tone: 'revenue',
  title: {
    fa: 'رسید کالا (GRN) و برگه ثبت خدمات (SES)',
    en: 'Goods Received Notes (GRN) and Service Entry Sheets (SES)',
  },
  summary: {
    fa: 'رسید کالا (GRN) و برگه ثبت خدمات (SES) لحظه‌ای را ثبت می‌کنند که کالا واقعاً می‌رسد یا خدمت واقعاً انجام می‌شود. در این درس داده‌ها و انواع GRN، تحویل ناقص و حد تحمل، مرجوعی و ابطال، سفارش خدمات و تبدیل برگه کارکرد روزانه به SES، تأیید و تفکیک وظایف، نرخ روزانه و قرارداد مقطوع، ثبت‌های مالی، تعهد و تفکیک دوره، GR/IR و شواهد بازیافت هزینه را می‌آموزید.',
    en: 'The goods received note (GRN) and the service entry sheet (SES) record the moment goods actually arrive or a service is actually performed. This lesson covers GRN data and types, partial deliveries and tolerances, returns and reversals, service POs and turning daily field tickets into an SES, approval and segregation of duties, day rates and lump sums, Finance postings, commitments and cut-off, GR/IR, and the evidence behind recoverable costs.',
  },
  objectives: [
    {
      fa: 'داده‌های یک GRN را بشناسید و رسید را برای انبار، مرکز هزینه، WBS یا AFE و دستور کار درست ثبت کنید.',
      en: 'Know the data on a GRN and post receipts correctly to stock, a cost centre, a WBS or AFE, and a work order.',
    },
    {
      fa: 'تحویل ناقص، حد تحمل، رد کالا، مرجوعی به تأمین‌کننده و ابطال رسید را از هم تشخیص دهید و ثبت کنید.',
      en: 'Distinguish and post partial deliveries, tolerances, rejections, returns to vendor and GRN reversals.',
    },
    {
      fa: 'برگه‌های کارکرد روزانه را به SES تبدیل کنید و پذیرش خدمات را با حد اختیار و تفکیک وظایف کنترل کنید.',
      en: 'Turn daily field tickets into an SES and control service acceptance with approval limits and segregation of duties.',
    },
    {
      fa: 'ثبت‌های مالی GRN و SES، تفاوت قیمت در فاکتور، ابطال‌ها، تبدیل تعهد به هزینه واقعی و تحلیل GR/IR در پایان ماه را انجام دهید.',
      en: 'Make the GRN and SES postings, price differences at invoice, reversals, the commitment-to-actual conversion and the month-end GR/IR analysis.',
    },
    {
      fa: 'توضیح دهید چرا GRN و SES با کد هزینه درست و مدارک امضاشده، شاهد اصلی هزینه قابل بازیافت‌اند.',
      en: 'Explain why GRNs and SESs with the right cost codes and signed documents are the core evidence for recoverable costs.',
    },
  ],
  sections: [
    {
      id: 'why-receipts',
      title: { fa: 'چرا رسید کالا و برگه ثبت خدمات مهم‌اند؟', en: 'Why GRNs and SESs Matter' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'روز 30 ماه است و واحد مالی مسار پترولیوم گزارش هزینه `AFE-2025-014` (حفاری چاه AR-07) را می‌بندد. گزارش نشان می‌دهد سیمان‌کاری جداری سطحی هنوز «تعهد» است، نه «هزینه واقعی»؛ در حالی که کار دو هفته پیش انجام شده و برگه‌های کارکرد روزانه‌اش امضا شده است. فقط کسی برگه ثبت خدمات را در ERP ثبت نکرده است. هم‌زمان، 60 شاخه لوله‌ای که برای چاه AR-12 آمده، با رسید روی سفارش AR-07 نشسته است. نتیجه: هزینه ماه کمتر از واقع، بدهی ناقص، دو AFE نادرست، و حسابرس شرکا که می‌پرسد «برگه کارکرد امضاشده این مبلغ کجاست؟»',
            en: 'It is day 30 and Masar Petroleum’s Finance team is closing the cost report for `AFE-2025-014` (drilling well AR-07). The report still shows the surface casing cement job as a “commitment”, not an “actual”, although the work was done two weeks ago and its daily field tickets are signed. Nobody entered the service entry sheet in the ERP. Meanwhile, 60 joints of pipe that arrived for well AR-12 were received against the AR-07 order. The result: the month’s costs are understated, liabilities are incomplete, two AFEs are wrong, and the partners’ auditor asks, “Where is the signed field ticket for this amount?”',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**رسید کالا (GRN)** (Goods Received Note) سندی است که ورود فیزیکی کالا را با ارجاع به سفارش خرید ثبت می‌کند. **برگه ثبت خدمات (SES)** (Service Entry Sheet) سندی است که انجام‌شدن یک خدمت را، که چیزی برای شمردن در انبار ندارد، با ارجاع به سفارش خدمات ثبت می‌کند و پس از **پذیرش خدمات** قطعی می‌شود. این دو، اسناد «دریافت» زنجیره تدارکات تا پرداخت‌اند: لحظه‌ای که هزینه واقعی و بدهی پدید می‌آید، و پایه دوم **تطبیق سه‌طرفه** (سفارش + GRN یا SES + فاکتور).',
            en: 'A **goods received note (GRN)** records the physical arrival of goods with reference to a purchase order. A **service entry sheet (SES)** records that a service, which leaves nothing to count in a warehouse, has been performed, with reference to a service PO; it becomes final once the **service acceptance** is given. These are the “receipt” documents of procure-to-pay: the moment the actual cost and the liability arise, and the second leg of the **three-way match** (PO + GRN or SES + invoice).',
          },
        },
        {
          type: 'diagram',
          id: 'grn-ses',
          caption: {
            fa: 'دو مسیر دریافت: کالا با GRN (کنترل، بازرسی، رسید، بدهکار موجودی یا موضوع هزینه) و خدمت با SES (برگه کارکرد، ثبت، پذیرش، بدهکار موضوع هزینه)؛ هر دو حساب GR/IR را بستانکار می‌کنند.',
            en: 'Two receipt paths: goods via GRN (check, inspect, receive, debit inventory or a cost object) and services via SES (field ticket, entry, acceptance, debit a cost object); both credit GR/IR.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'رسید کالا (GRN)', en: 'Goods received note (GRN)' },
            items: [
              { fa: 'شاهد: کالایی که دیده و شمرده می‌شود', en: 'Evidence: goods you can see and count' },
              { fa: 'ثبت‌کننده: انباردار یا مسئول دریافت در محل', en: 'Entered by: the storekeeper or the receiving person on site' },
              { fa: 'مقصد: انبار، یا مستقیم یک موضوع هزینه', en: 'Destination: stock, or a cost object directly' },
              { fa: 'پیوست: برگه تحویل، IRN، گواهی مواد', en: 'Attachments: delivery note, IRN, material certificates' },
            ],
          },
          right: {
            title: { fa: 'برگه ثبت خدمات (SES)', en: 'Service entry sheet (SES)' },
            items: [
              { fa: 'شاهد: کاری که انجام شده و دیگر دیده نمی‌شود', en: 'Evidence: work that was done and can no longer be seen' },
              { fa: 'ثبت‌کننده: مهندس قرارداد یا پیمانکار در درگاه؛ تأییدکننده: نماینده کارفرما', en: 'Entered by: the contract engineer or the contractor via a portal; approved by the company representative' },
              { fa: 'مقصد: همیشه یک موضوع هزینه', en: 'Destination: always a cost object' },
              { fa: 'پیوست: برگه کارکرد روزانه امضاشده، گزارش روزانه، صورت‌وضعیت', en: 'Attachments: signed daily field tickets, daily reports, progress statement' },
            ],
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در قراردادهای ایرانی، گزارش دوره‌ای پیمانکار از کار انجام‌شده و مبلغ آن **صورت‌وضعیت** نام دارد. صورت‌وضعیت سند پیمانکار است؛ SES سند ERP کارفرماست که محتوای پذیرفته‌شده آن را ثبت می‌کند. در انبار هم بسیاری از شرکت‌ها هنگام ورود کالا «رسید موقت» و پس از بازرسی «رسید قطعی» صادر می‌کنند؛ در ERP این همان GRN به موجودی تحت بازرسی و سپس آزادسازی آن است.',
            en: 'In Iranian contracts, the contractor’s periodic report of work done and its value is called a **progress statement** (sorat-vaziat). The statement is the contractor’s document; the SES is the company’s ERP document recording what was accepted from it. In the warehouse, many companies issue a “temporary receipt” on arrival and a “final receipt” after inspection; in the ERP this is a GRN into quality-inspection stock followed by its release.',
          },
        },
      ],
    },
    {
      id: 'grn',
      title: { fa: 'رسید کالا (GRN): داده‌ها، وضعیت موجودی و انواع', en: 'The GRN: Data, Stock Types and Variants' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'GRN را کسی ثبت می‌کند که کالا را واقعاً تحویل گرفته است: انباردار انبار مرکزی (`WH-10`) یا انبار میدان (`WH-20`)، و برای کالایی که مستقیم به محل دکل می‌رسد، مسئول کالای دکل یا نماینده کارفرما. ERP بیشتر داده‌ها را از سفارش می‌خواند؛ دریافت‌کننده مقدار واقعی، شماره‌های ردیابی و محل را اضافه می‌کند.',
            en: 'The GRN is entered by whoever actually took delivery: the storekeeper of the Central Warehouse (`WH-10`) or the Field Warehouse (`WH-20`), and for goods delivered straight to the rig site, the rig materials coordinator or the company representative. The ERP reads most data from the PO; the receiver adds the actual quantity, the traceability numbers and the location.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'داده‌های رسید `GRN-26-0318`: لوله جداری چاه AR-07',
            en: 'Data on `GRN-26-0318`: casing for well AR-07',
          },
          head: [
            { fa: 'داده', en: 'Field' },
            { fa: 'چرا لازم است', en: 'Why it matters' },
            { fa: 'نمونه', en: 'Example' },
          ],
          rows: [
            [
              { fa: 'سفارش و ردیف', en: 'PO and line' },
              { fa: 'قیمت، تأمین‌کننده و تخصیص هزینه از آن خوانده می‌شود', en: 'Price, supplier and account assignment come from it' },
              { fa: '`PO-45007`، ردیف 10', en: '`PO-45007`, line 10' },
            ],
            [
              { fa: 'کالا و مقدار', en: 'Material and quantity' },
              { fa: 'مقدار واقعی شمرده‌شده، نه عدد برگه تحویل', en: 'The quantity actually counted, not the delivery-note figure' },
              { fa: 'لوله جداری 9-5/8 اینچ، 150 شاخه', en: '9-5/8" casing, 150 joints' },
            ],
            [
              { fa: 'بچ یا شماره سریال', en: 'Batch or serial number' },
              { fa: 'ردیابی کیفیت، تاریخ انقضا و ضمانت', en: 'Quality traceability, shelf life and warranty' },
              { fa: 'برای لوله: شماره ذوب؛ برای کمپرسور: سریال', en: 'Pipe: heat number; compressor parts: serial' },
            ],
            [
              { fa: 'شماره ذوب و گواهی‌ها', en: 'Heat numbers and certificates' },
              { fa: 'اثبات انطباق با API 5CT و گواهی کارخانه 3.1', en: 'Proof of compliance with API 5CT and the 3.1 mill certificate' },
              { fa: 'ذوب H-77120 و H-77121؛ گواهی‌ها و `IRN-2611` پیوست', en: 'Heats H-77120 and H-77121; certificates and `IRN-2611` attached' },
            ],
            [
              { fa: 'محل یا وضعیت موجودی', en: 'Location or stock type' },
              { fa: 'کجا نگهداری می‌شود و آیا قابل مصرف است', en: 'Where it is kept and whether it can be used' },
              { fa: 'محوطه لوله انبار میدان (`WH-20`)', en: 'Pipe yard, Field Warehouse (`WH-20`)' },
            ],
            [
              { fa: 'موضوع هزینه', en: 'Cost object' },
              { fa: 'هزینه به کدام چاه، پروژه یا مرکز هزینه می‌رود', en: 'Which well, project or cost centre bears the cost' },
              { fa: '`AFE-2025-014.02.03` (لوله‌گذاری و سیمان‌کاری AR-07)', en: '`AFE-2025-014.02.03` (AR-07 casing and cementing)' },
            ],
            [
              { fa: 'تاریخ سند و تاریخ ثبت', en: 'Document and posting dates' },
              { fa: 'روز دریافت واقعی؛ تعیین‌کننده دوره مالی', en: 'The actual receipt day; it decides the accounting period' },
              { fa: 'روز 18 ماه', en: 'Day 18 of the month' },
            ],
          ],
        },
        {
          type: 'table',
          caption: { fa: 'وضعیت‌های موجودی پس از GRN', en: 'Stock types after a GRN' },
          head: [
            { fa: 'وضعیت', en: 'Stock type' },
            { fa: 'قابل حواله؟', en: 'Can it be issued?' },
            { fa: 'کاربرد', en: 'Used when' },
          ],
          rows: [
            [
              { fa: 'موجودی تحت بازرسی کیفیت', en: 'Quality-inspection stock' },
              { fa: 'خیر، تا آزادسازی', en: 'No, until released' },
              { fa: 'کالایی که بازرسی ورودی لازم دارد، مثل لوله و قطعات بحرانی', en: 'Items needing incoming inspection, such as pipe and critical spares' },
            ],
            [
              { fa: 'موجودی آزاد', en: 'Unrestricted stock' },
              { fa: 'بله', en: 'Yes' },
              { fa: 'کالای کاتالوگی یا کالایی که بازرسی‌اش تمام شده', en: 'Catalogue items, or items that passed inspection' },
            ],
            [
              { fa: 'موجودی مسدود', en: 'Blocked stock' },
              { fa: 'خیر', en: 'No' },
              { fa: 'کالای آسیب‌دیده یا مورد اختلاف، تا تعیین تکلیف', en: 'Damaged or disputed items, until a decision is made' },
            ],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'هر سه وضعیت ارزش‌گذاری می‌شوند و جزء موجودی شرکت‌اند؛ پس GRN به موجودی تحت بازرسی همان ثبت مالی GRN عادی را دارد. انتقال از «تحت بازرسی» به «آزاد» فقط وضعیت را عوض می‌کند و ثبت مالی ندارد. اما **تخصیص هزینه** ردیف سفارش، نوع GRN و ثبت مالی آن را تعیین می‌کند:',
            en: 'All three types are valued and belong to the company’s inventory, so a GRN into quality-inspection stock has the same Finance posting as a normal GRN. Moving from “inspection” to “unrestricted” only changes the status and posts nothing. The **account assignment** of the PO line, however, decides the kind of GRN and its posting:',
          },
        },
        {
          type: 'table',
          head: [
            { fa: 'تخصیص ردیف سفارش', en: 'PO line assignment' },
            { fa: 'ثبت GRN', en: 'GRN posting' },
            { fa: 'نمونه مسار پترولیوم', en: 'Masar Petroleum example' },
          ],
          rows: [
            [
              { fa: 'انبار', en: 'Stock' },
              { fa: 'بدهکار موجودی، بستانکار GR/IR', en: 'Dr Inventory, Cr GR/IR' },
              { fa: '4 کیت سوپاپ کمپرسور K-201 به `WH-10`', en: '4 compressor K-201 valve kits into `WH-10`' },
            ],
            [
              { fa: 'مرکز هزینه (کالای غیرانباری)', en: 'Cost centre (non-stock item)' },
              { fa: 'بدهکار هزینه مرکز هزینه، بستانکار GR/IR', en: 'Dr cost-centre expense, Cr GR/IR' },
              { fa: 'لوازم ایمنی برای `CC-ARY-PRD`', en: 'Safety supplies for `CC-ARY-PRD`' },
            ],
            [
              { fa: 'WBS یا AFE (سرمایه‌ای)', en: 'WBS or AFE (capital)' },
              { fa: 'بدهکار دارایی در جریان ساخت، بستانکار GR/IR', en: 'Dr Assets under construction, Cr GR/IR' },
              { fa: 'لوله جداری روی `AFE-2025-014.02.03`', en: 'Casing on `AFE-2025-014.02.03`' },
            ],
            [
              { fa: 'دستور کار', en: 'Work order' },
              { fa: 'بدهکار هزینه دستور کار (بعداً به مرکز هزینه تسویه می‌شود)، بستانکار GR/IR', en: 'Dr work-order cost (settled later to a cost centre), Cr GR/IR' },
              { fa: 'یاتاقان کف‌گرد K-102 روی `WO-45188`', en: 'K-102 thrust bearing set on `WO-45188`' },
            ],
            [
              { fa: 'فراخوان از قرارداد چارچوب', en: 'Call-off from a framework' },
              { fa: 'مثل سفارش استاندارد، با تخصیص همان فراخوان', en: 'As for a standard PO, with the call-off’s assignment' },
              { fa: 'باریت فراخوان AR-12 به `WH-20` یا مستقیم به `AFE-2026-012.02.02`', en: 'Barite on the AR-12 call-off into `WH-20` or straight to `AFE-2026-012.02.02`' },
            ],
            [
              { fa: 'سفارش باز', en: 'Blanket PO' },
              { fa: 'اغلب بدون GRN (تطبیق دوطرفه)؛ اگر رویه بخواهد، GRN برای هر تحویل', en: 'Often no GRN (two-way match); a GRN per delivery if company rules require it' },
              { fa: 'لوازم مصرفی انبار میدان', en: 'Field Warehouse consumables' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          text: {
            fa: 'GRN کالای سرمایه‌ای، مثل لوله جداری یا سرچاهی یک چاه توسعه‌ای، مستقیم به **دارایی در جریان ساخت** روی WBS آن چاه می‌رود. وقتی چاه تکمیل و به بهره‌برداری رسید، مانده دارایی در جریان ساخت به دارایی ثابت (چاه) منتقل می‌شود؛ این مرحله در دوره مدیریت دارایی‌ها آمده است.',
            en: 'A GRN for a capital item, such as casing or the wellhead of a development well, goes straight to **assets under construction** on that well’s WBS. When the well is completed and put on stream, the AUC balance is transferred to a fixed asset (the well); that step is covered in the asset management course.',
          },
        },
      ],
    },
    {
      id: 'grn-exceptions',
      title: {
        fa: 'تحویل ناقص، حد تحمل، مرجوعی و ابطال رسید',
        en: 'Partial Deliveries, Tolerances, Returns and Reversals',
      },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'سفارش `PO-45031`: 300 شاخه لوله مغزی 4-1/2 اینچ با قیمت 400 برای موجودی انبار میدان. محموله اول 180 شاخه است و با GRN به موجودی تحت بازرسی می‌رود. بازرسی ورودی رزوه 6 شاخه را آسیب‌دیده می‌یابد؛ گزارش عدم انطباق (NCR) صادر و این 6 شاخه به تأمین‌کننده **مرجوع** می‌شود. 174 شاخه سالم آزاد می‌شود و سفارش برای باقی‌مانده باز می‌ماند:',
            en: '`PO-45031`: 300 joints of 4-1/2" tubing at 400 for Field Warehouse stock. The first shipment of 180 joints is received by GRN into quality-inspection stock. Incoming inspection finds damaged threads on 6 joints; a non-conformance report (NCR) is raised and those 6 joints are **returned** to the supplier. The 174 good joints are released and the PO stays open for the balance:',
          },
        },
        {
          type: 'table',
          head: [
            { fa: 'رویداد', en: 'Event' },
            { fa: 'مقدار (شاخه)', en: 'Qty (joints)' },
            { fa: 'مبلغ', en: 'Value' },
            { fa: 'مانده باز سفارش', en: 'PO open qty after' },
          ],
          rows: [
            [{ fa: 'GRN محموله اول', en: 'GRN, first shipment' }, 180, 72000, 120],
            [{ fa: 'مرجوعی شاخه‌های معیوب', en: 'Defective joints returned' }, 6, 2400, 126],
            [{ fa: 'آزادسازی از بازرسی (بدون ثبت مالی)', en: 'Released from inspection (no posting)' }, 174, 0, 126],
          ],
          numericCols: [1, 2, 3],
        },
        {
          type: 'p',
          text: {
            fa: '**حد تحمل تحویل** تعیین می‌کند ERP چقدر بیشتر یا کمتر از مقدار سفارش را بپذیرد. برای اقلام مهندسی‌شده معمولاً صفر است؛ برای مواد فله، مثل سیمان یا باریت، چند درصد مجاز است. اگر تأمین‌کننده باقی‌مانده را نمی‌فرستد و نیاز هم برطرف شده، ردیف «تحویل تکمیل» علامت می‌خورد تا مانده باز بسته شود و تعهد آزاد شود.',
            en: 'A **delivery tolerance** sets how much more or less than the ordered quantity the ERP accepts. For engineered items it is usually zero; for bulk materials such as cement or barite a few percent is allowed. If the supplier will not ship the balance and the need has gone, the line is flagged “delivery completed” so the open quantity closes and the commitment is released.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'حداکثر مقدار قابل پذیرش = مقدار سفارش × (1 + حد تحمل اضافه‌تحویل)؛ نمونه: 2,000 کیسه سیمان × 1.03 = 2,060 کیسه',
            en: 'Maximum acceptable quantity = PO quantity × (1 + over-delivery tolerance); e.g. 2,000 sacks of cement × 1.03 = 2,060 sacks',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'مرجوعی به تأمین‌کننده (Return)', en: 'Return to vendor' },
            items: [
              { fa: 'کالا واقعاً رسیده، اما معیوب یا نامنطبق است', en: 'The goods really arrived but are defective or non-conforming' },
              { fa: 'GRN درست بوده و باقی می‌ماند', en: 'The GRN was correct and stays' },
              { fa: 'سند مرجوعی با ارجاع به GRN و NCR؛ کالا فیزیکی برمی‌گردد', en: 'A return document referencing the GRN and NCR; the goods go back physically' },
              { fa: 'تأمین‌کننده معمولاً جایگزین می‌فرستد؛ مانده باز سفارش زیاد می‌شود', en: 'The supplier usually replaces them; the PO open quantity increases' },
            ],
          },
          right: {
            title: { fa: 'ابطال رسید (Reversal)', en: 'GRN reversal (cancellation)' },
            items: [
              { fa: 'خود GRN اشتباه بوده است', en: 'The GRN itself was a mistake' },
              { fa: 'سفارش یا ردیف اشتباه، مقدار اشتباه، موضوع هزینه اشتباه، ثبت تکراری', en: 'Wrong PO or line, wrong quantity, wrong cost object, duplicate posting' },
              { fa: 'ERP سند معکوس دقیق می‌زند؛ سپس GRN درست ثبت می‌شود', en: 'The ERP posts an exact mirror document; then the correct GRN is posted' },
              { fa: 'اگر فاکتور ثبت شده، اول باید تکلیف فاکتور روشن شود', en: 'If an invoice is already posted, it must be dealt with first' },
            ],
          },
        },
        {
          type: 'journal',
          title: { fa: 'مرجوعی و ابطال در ERP', en: 'Return and reversal in the ERP' },
          entries: [
            {
              date: { fa: 'مرجوعی 6 شاخه', en: 'Return of 6 joints' },
              lines: [
                { account: ac.grir, debit: 2400 },
                { account: ac.invOctg, credit: 2400 },
              ],
              memo: { fa: '6 × 400؛ برعکس بخشی از GRN، با همان قیمت سفارش.', en: '6 × 400; reverses part of the GRN at the same PO price.' },
            },
            {
              date: { fa: 'ابطال GRN روی ردیف اشتباه', en: 'Reversal of a GRN on the wrong line' },
              lines: [
                { account: ac.grir, debit: 108000 },
                { account: ac.aucAR11, credit: 108000 },
              ],
              memo: {
                fa: '60 شاخه × 1,800 که برای چاه AR-12 بود، اشتباهی روی سفارش AR-07 رسید شده بود.',
                en: '60 joints × 1,800 meant for well AR-12 had been received on the AR-07 order by mistake.',
              },
            },
            {
              date: { fa: 'GRN درست', en: 'Correct GRN' },
              lines: [
                { account: ac.aucAR12, debit: 108000 },
                { account: ac.grir, credit: 108000 },
              ],
              memo: { fa: 'روی سفارش AR-12 با تخصیص `AFE-2026-012.02.03`.', en: 'On the AR-12 order, assigned to `AFE-2026-012.02.03`.' },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: {
            fa: 'برای اصلاح GRN اشتباه، ثبت دستی در دفتر کل نزنید؛ GRN را در خود ERP باطل کنید تا مقدار انبار، تعهد سفارش، GR/IR و سابقه سند با هم درست شوند. اگر دوره مالی بسته شده باشد، ابطال در دوره جاری ثبت می‌شود و باید در گزارش ماه توضیح داده شود.',
            en: 'Never fix a wrong GRN with a manual general-ledger entry; reverse the GRN in the ERP itself so that stock quantity, PO commitment, GR/IR and the document history are all corrected together. If the period is closed, the reversal posts in the current period and must be explained in the month’s report.',
          },
        },
      ],
    },
    {
      id: 'ses',
      title: { fa: 'برگه ثبت خدمات (SES): از برگه کارکرد تا پذیرش', en: 'The SES: From Field Ticket to Acceptance' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'خدمت چیزی برای شمردن در انبار باقی نمی‌گذارد: سیمان در چاه است و خدمه رفته‌اند. پس شاهد خدمت، **سند** است. **سفارش خدمات** دو نوع ردیف دارد: **ردیف‌های برنامه‌ریزی‌شده** که از فهرست نرخ قرارداد با مقدار برآوردی می‌آیند، و **ردیف سقف** (Limit Line) که مبلغی برای خدمات پیش‌بینی‌نشده کنار می‌گذارد. SES فقط در چارچوب همین ردیف‌ها و نرخ‌ها پذیرفته می‌شود.',
            en: 'A service leaves nothing to count in a warehouse: the cement is in the well and the crew has gone. The evidence of a service is therefore a **document**. A **service PO** has two kinds of line: **planned lines** taken from the contract rate schedule with estimated quantities, and a **limit line** that sets aside an amount for unplanned services. An SES is accepted only within these lines and rates.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'سفارش خدمات `PO-45090`: سیمان‌کاری جداری سطحی AR-07، خدمات چاه البرز (فراخوان از قرارداد چارچوب خدمات چاه)',
            en: 'Service PO `PO-45090`: AR-07 surface casing cement job, Alborz Well Services (call-off under the well-services framework)',
          },
          head: [
            { fa: 'ردیف', en: 'Line' },
            { fa: 'خدمت', en: 'Service' },
            { fa: 'مقدار برآوردی', en: 'Est. qty' },
            { fa: 'نرخ', en: 'Rate' },
            { fa: 'مبلغ', en: 'Value' },
          ],
          rows: [
            [10, { fa: 'دستگاه سیمان‌کاری و خدمه (روز)', en: 'Cementing unit and crew (day)' }, 2, 6500, 13000],
            [20, { fa: 'سیمان کلاس G (کیسه)', en: 'Class G cement (sack)' }, 800, 30, 24000],
            [30, { fa: 'افزودنی‌ها (مقطوع)', en: 'Additives (lump sum)' }, 1, 5000, 5000],
            [40, { fa: 'تجهیز کارگاه (مقطوع)', en: 'Mobilisation (lump sum)' }, 1, 3000, 3000],
            [50, { fa: 'ردیف سقف: خدمات پیش‌بینی‌نشده', en: 'Limit line: unplanned services' }, blank, blank, 10000],
            [{ fa: 'جمع سفارش', en: 'Total PO' }, blank, blank, blank, 55000],
          ],
          numericCols: [0, 2, 3, 4],
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'برگه کارکرد روزانه', en: 'Daily field ticket' },
              text: {
                fa: 'پیمانکار هر روز خدمه، تجهیزات، ساعت‌ها و مواد مصرفی را در **برگه کارکرد روزانه** می‌نویسد و نماینده کارفرما (سرپرست حفاری روی دکل) همان روز امضا می‌کند. برای خدمات زمان‌محور، برگه حضور و کارکرد (Timesheet) و برای کارهای مقداری، صورت‌جلسه اندازه‌گیری همین نقش را دارد.',
                en: 'Each day the contractor records crew, equipment, hours and materials on a **daily field ticket**, and the company representative (the drilling supervisor on the rig) signs it the same day. For time-based services a timesheet, and for measured work a measurement record, plays the same role.',
              },
            },
            {
              title: { fa: 'صورت‌وضعیت پیمانکار', en: 'Contractor’s progress statement' },
              text: {
                fa: 'در پایان کار یا ماه، پیمانکار برگه‌ها را با نرخ‌های قرارداد قیمت‌گذاری می‌کند و صورت‌وضعیت می‌دهد.',
                en: 'At the end of the job or month, the contractor prices the tickets at contract rates and submits a progress statement.',
              },
            },
            {
              title: { fa: 'ثبت SES', en: 'Enter the SES' },
              text: {
                fa: 'مهندس قرارداد (یا پیمانکار در درگاه تأمین‌کنندگان) SES را روی ردیف‌های سفارش ثبت و برگه‌های امضاشده را پیوست می‌کند.',
                en: 'The contract engineer (or the contractor via the supplier portal) enters the SES against the PO lines and attaches the signed tickets.',
              },
            },
            {
              title: { fa: 'کنترل‌های خودکار', en: 'Automatic checks' },
              text: {
                fa: 'ERP نرخ‌ها را با قرارداد، مقدارها را با ردیف‌ها و جمع را با مانده سفارش و ردیف سقف مقایسه می‌کند.',
                en: 'The ERP checks rates against the contract, quantities against the lines, and the total against the PO balance and the limit line.',
              },
            },
            {
              title: { fa: 'پذیرش خدمات', en: 'Service acceptance' },
              text: {
                fa: 'تأییدکننده مجاز، که کار را دیده یا مسئول قرارداد است، SES را می‌پذیرد یا با دلیل رد می‌کند. با پذیرش، ثبت مالی خودکار انجام می‌شود.',
                en: 'An authorised approver who saw the work or holds the contract accepts the SES or rejects it with a reason. Acceptance triggers the automatic Finance posting.',
              },
            },
            {
              title: { fa: 'فاکتور', en: 'Invoice' },
              text: {
                fa: 'پیمانکار با ذکر شماره SES فاکتور می‌دهد و تطبیق سه‌طرفه سفارش + SES + فاکتور انجام می‌شود.',
                en: 'The contractor invoices quoting the SES number, and the three-way match PO + SES + invoice is performed.',
              },
            },
          ],
        },
        {
          type: 'table',
          caption: {
            fa: 'حد اختیار پذیرش SES در مسار پترولیوم (ارقام فرضی)',
            en: 'SES acceptance limits at Masar Petroleum (illustrative figures)',
          },
          head: [
            { fa: 'مبلغ SES', en: 'SES value' },
            { fa: 'تأییدکننده', en: 'Approver' },
          ],
          rows: [
            [{ fa: 'تا 25,000', en: 'Up to 25,000' }, { fa: 'نماینده کارفرما در محل (سرپرست دکل یا ایستگاه)', en: 'Company site representative (rig or station supervisor)' }],
            [{ fa: '25,001 تا 250,000', en: '25,001 to 250,000' }, { fa: 'مسئول قرارداد (مثلاً سرپرست عملیات حفاری)', en: 'Contract holder (e.g. drilling superintendent)' }],
            [{ fa: 'بیش از 250,000', en: 'Above 250,000' }, { fa: 'مدیر عملیات', en: 'Operations manager' }],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'تفکیک وظایف در SES', en: 'Segregation of duties on the SES' },
          text: {
            fa: 'کسی که SES را ثبت می‌کند نباید تنها تأییدکننده آن باشد؛ خریدار و کارمند حساب‌های پرداختنی نباید SES را بپذیرند؛ و پیمانکار هرگز کار خودش را تأیید نمی‌کند. ERP باید این ترکیب‌ها را با نقش‌های کاربری مسدود کند، نه فقط با دستورالعمل کاغذی.',
            en: 'The person who enters an SES must not be its only approver; the buyer and the AP clerk must not accept SESs; and the contractor never approves its own work. The ERP should block these combinations through user roles, not just through a written procedure.',
          },
        },
      ],
    },
    {
      id: 'ses-cases',
      title: {
        fa: 'SES در قراردادهای واقعی: نرخ روزانه، مقطوع، پیشرفت و اصلاح',
        en: 'SES in Real Contracts: Day Rates, Lump Sums, Progress and Corrections',
      },
      blocks: [
        { type: 'h', text: { fa: 'نرخ روزانه دکل تعمیر چاه', en: 'Workover rig day rate' } },
        {
          type: 'p',
          text: {
            fa: 'دکل تعمیر چاه «حفاری زاگرس» با سفارش فراخوان `PO-45110` از قرارداد چارچوب دکل‌های تعمیر، چاه AR-04 را تعمیر می‌کند. هزینه روی دستور کار `WO-45210` می‌نشیند که به مرکز هزینه `CC-ARY-PRD` تسویه می‌شود. نرخ‌ها: جابه‌جایی دکل مقطوع 18,000، نرخ کار روزانه 12,000، نرخ آماده‌به‌کار با خدمه 9,000 و زمان تعمیر تجهیزات خود دکل بدون هزینه. گزارش‌های روزانه حفاری که سرپرست کارفرما امضا کرده، این روزها را نشان می‌دهند:',
            en: 'Zagros Drilling’s workover rig is repairing well AR-04 under call-off `PO-45110` from the workover rig framework. The cost goes to work order `WO-45210`, which settles to cost centre `CC-ARY-PRD`. Rates: rig move lump sum 18,000; operating day rate 12,000; standby with crew 9,000; repair time on the rig’s own equipment at zero rate. The daily drilling reports signed by the company supervisor show:',
          },
        },
        {
          type: 'table',
          caption: { fa: 'SES-26-0141: دکل تعمیر چاه AR-04', en: 'SES-26-0141: AR-04 workover rig' },
          head: [
            { fa: 'ردیف', en: 'Line' },
            { fa: 'روز', en: 'Days' },
            { fa: 'نرخ', en: 'Rate' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          rows: [
            [{ fa: 'جابه‌جایی دکل (مقطوع)', en: 'Rig move (lump sum)' }, 1, 18000, 18000],
            [{ fa: 'کار', en: 'Operating' }, 9, 12000, 108000],
            [{ fa: 'آماده‌به‌کار: انتظار لوله مغزی که تأمینش با کارفرما بود', en: 'Standby: waiting for company-supplied tubing' }, 2, 9000, 18000],
            [{ fa: 'تعمیر پمپ گل خود دکل', en: 'Repair of the rig’s own mud pump' }, 1, 0, 0],
            [{ fa: 'جمع SES', en: 'SES total' }, 13, blank, 144000],
          ],
          numericCols: [1, 2, 3],
        },
        {
          type: 'p',
          text: {
            fa: 'روزهای آماده‌به‌کار قابل پرداخت‌اند، چون علت آن‌ها کارفرما بود؛ روز تعمیر دکل نه. مبلغ 144,000 در حد اختیار مسئول قرارداد است (25,001 تا 250,000). در **فراخوان خدمات چاه**، مثل نمودارگیری یا اسیدکاری، همین منطق برای هر کار جداگانه تکرار می‌شود: یک فراخوان، یک یا چند SES، هر کدام با کد چاه خودش.',
            en: 'Standby days are payable because the company caused them; the rig repair day is not. The 144,000 falls within the contract holder’s authority (25,001 to 250,000). For **well-services call-offs**, such as logging or acid jobs, the same logic repeats for each job: one call-off, one or more SESs, each with its own well code.',
          },
        },
        { type: 'h', text: { fa: 'قرارداد مقطوع با مراحل، و SES پیشرفت کار', en: 'Lump-sum milestones and progress SESs' } },
        {
          type: 'table',
          caption: {
            fa: 'پوشش ضدخوردگی خطوط ایستگاه تقویت فشار، «پوشش‌گستر پارس»، مقطوع 90,000، روی `CC-ARY-CMP`',
            en: 'Anti-corrosion coating of compressor station piping, Pars Coating, lump sum 90,000, on `CC-ARY-CMP`',
          },
          head: [
            { fa: 'مرحله', en: 'Milestone' },
            { fa: 'شاهد تکمیل', en: 'Evidence of completion' },
            { fa: 'درصد', en: 'Percent' },
            { fa: 'مبلغ SES', en: 'SES value' },
          ],
          rows: [
            [{ fa: 'م1: آماده‌سازی سطح', en: 'M1: surface preparation' }, { fa: 'گزارش بازرسی تمیزی سطح', en: 'Surface cleanliness inspection report' }, 30, 27000],
            [{ fa: 'م2: اجرای پوشش', en: 'M2: coating applied' }, { fa: 'آزمون ضخامت فیلم خشک (DFT) قبول', en: 'Dry film thickness (DFT) test passed' }, 50, 45000],
            [{ fa: 'م3: تحویل نهایی', en: 'M3: final acceptance' }, { fa: 'بسته‌شدن فهرست نواقص', en: 'Punch list closed' }, 20, 18000],
            [{ fa: 'جمع', en: 'Total' }, blank, 100, 90000],
          ],
          numericCols: [2, 3],
        },
        {
          type: 'formula',
          text: {
            fa: 'SES پیشرفت این دوره = ارزش تجمعی کار انجام‌شده تا امروز − جمع SESهای پذیرفته‌شده قبلی',
            en: 'Progress SES this period = cumulative value of work done to date − SESs already accepted',
          },
          note: {
            fa: 'نمونه: قرارداد 200,000؛ پیشرفت تجمعی 65٪ یعنی 130,000؛ قبلاً 80,000 پذیرفته شده؛ SES این ماه 50,000.',
            en: 'Example: contract 200,000; cumulative progress 65%, i.e. 130,000; 80,000 already accepted; this month’s SES 50,000.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'سپرده و SES', en: 'Retentions and the SES' },
          text: {
            fa: 'SES همیشه **ارزش کامل** کار پذیرفته‌شده را ثبت می‌کند. سپرده حسن انجام کار، سپرده بیمه و مالیات تکلیفی هنگام فاکتور و پرداخت کسر می‌شوند و هزینه کار را کم نمی‌کنند؛ جزئیات آن‌ها در درس تطبیق فاکتور و پرداخت آمده است.',
            en: 'An SES always records the **full value** of the accepted work. Performance retention, insurance retention and withholding tax are deducted at invoice and payment and do not reduce the cost of the work; they are covered in the lesson on invoice verification and payment.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**SES ردشده یا اصلاحی**: اگر نرخ در قرارداد نیست، برگه کارکرد امضا ندارد یا مقدار با اندازه‌گیری نمی‌خواند، تأییدکننده SES را با دلیل رد می‌کند و نسخه اصلاحی ثبت می‌شود؛ هرگز «فعلاً تأیید کن، بعداً درستش می‌کنیم». اگر SES اشتباهی پذیرفته شده و هنوز فاکتور نخورده، پذیرش آن **باطل** می‌شود. مثلاً SES مرحله م2 دو بار ثبت و پذیرفته شده بود:',
            en: '**Rejected or revised SES**: if a rate is not in the contract, a field ticket is unsigned or a quantity does not match the measurement, the approver rejects the SES with a reason and a revised version is entered; never “approve now, fix later”. If an SES was accepted by mistake and not yet invoiced, its acceptance is **reversed**. For example, the M2 SES was entered and accepted twice:',
          },
        },
        {
          type: 'journal',
          entries: [
            {
              date: { fa: 'ابطال SES تکراری م2', en: 'Reversal of the duplicate M2 SES' },
              lines: [
                { account: ac.grir, debit: 45000 },
                { account: ac.maintCmp, credit: 45000 },
              ],
              memo: {
                fa: 'سند معکوس خودکار؛ هزینه ایستگاه و GR/IR هر دو به اندازه 45,000 اصلاح می‌شوند.',
                en: 'An automatic mirror document; both the station cost and GR/IR are corrected by 45,000.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'erp-postings',
      title: {
        fa: 'در ERP: ثبت‌های مالی، تعهد، تفکیک دوره و GR/IR',
        en: 'In the ERP: Postings, Commitments, Cut-Off and GR/IR',
      },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'داده‌های پایه درگیر: داده پایه کالا (گروه ارزش‌گذاری و قیمت میانگین موزون متحرک)، داده پایه تأمین‌کننده، قرارداد و فهرست نرخ، محل‌های انبار، و موضوع‌های هزینه. نقش‌ها: انباردار GRN را ثبت می‌کند، بازرس کیفیت آزاد یا رد می‌کند، مهندس قرارداد SES را ثبت و نماینده کارفرما یا مسئول قرارداد آن را می‌پذیرد، و واحد مالی GR/IR را پایش می‌کند. مبلغ هر ثبت از **قیمت سفارش** خوانده می‌شود، نه از فاکتور:',
            en: 'Master data involved: the material master (valuation class and moving average price), the vendor master, the contract and rate schedule, storage locations and cost objects. Roles: the storekeeper posts the GRN, the QC inspector releases or rejects, the contract engineer enters the SES and the site representative or contract holder accepts it, and Finance monitors GR/IR. Every amount is taken from the **PO price**, not the invoice:',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های خودکار GRN', en: 'Automatic GRN postings' },
          entries: [
            {
              date: { fa: 'GRN-26-0207: انبار', en: 'GRN-26-0207: stock' },
              lines: [
                { account: ac.invSpares, debit: 18000 },
                { account: ac.grir, credit: 18000 },
              ],
              memo: { fa: '4 کیت سوپاپ K-201 × 4,500.', en: '4 K-201 valve kits × 4,500.' },
            },
            {
              date: { fa: 'GRN-26-0219: مرکز هزینه', en: 'GRN-26-0219: cost centre' },
              lines: [
                { account: ac.consumPrd, debit: 2400 },
                { account: ac.grir, credit: 2400 },
              ],
              memo: { fa: 'لوازم ایمنی غیرانباری برای تولید میدان.', en: 'Non-stock safety supplies for field production.' },
            },
            {
              date: { fa: 'GRN-26-0318: AFE سرمایه‌ای', en: 'GRN-26-0318: capital AFE' },
              lines: [
                { account: ac.aucAR11, debit: 180000 },
                { account: ac.grir, credit: 180000 },
              ],
              memo: { fa: '150 شاخه × 1,200 روی `AFE-2025-014.02.03`.', en: '150 joints × 1,200 on `AFE-2025-014.02.03`.' },
            },
            {
              date: { fa: 'GRN-26-0322: دستور کار', en: 'GRN-26-0322: work order' },
              lines: [
                { account: ac.repairsWO, debit: 9600 },
                { account: ac.grir, credit: 9600 },
              ],
              memo: { fa: 'یاتاقان کف‌گرد غیرانباری، مستقیم به دستور کار.', en: 'Non-stock thrust bearing set, straight to the work order.' },
            },
          ],
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های خودکار پذیرش SES', en: 'Automatic SES acceptance postings' },
          entries: [
            {
              date: { fa: 'SES-26-0131: سیمان‌کاری AR-07', en: 'SES-26-0131: AR-07 cementing' },
              lines: [
                { account: ac.aucAR11, debit: 45000 },
                { account: ac.grir, credit: 45000 },
              ],
              memo: { fa: 'ردیف‌های 10 تا 40 سفارش `PO-45090`؛ ردیف سقف استفاده نشد.', en: 'Lines 10 to 40 of `PO-45090`; the limit line was not used.' },
            },
            {
              date: { fa: 'SES-26-0141: دکل تعمیر AR-04', en: 'SES-26-0141: AR-04 workover rig' },
              lines: [
                { account: ac.wellRepairs, debit: 144000 },
                { account: ac.grir, credit: 144000 },
              ],
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: '**تفاوت قیمت در فاکتور**: فاکتور 4 کیت سوپاپ با قیمت 4,560 می‌رسد (1.33٪ بالاتر، در حد تحمل). GR/IR با همان 18,000 رسید تسویه می‌شود و چون هر 4 کیت هنوز در انبارند، اختلاف 240 به موجودی اضافه می‌شود. اگر کالا مصرف شده بود، اختلاف به حساب تفاوت قیمت خرید می‌رفت.',
            en: '**Price difference at invoice**: the invoice for the 4 valve kits arrives at 4,560 each (1.33% higher, within tolerance). GR/IR is cleared with the same 18,000 as the GRN, and because all 4 kits are still in stock the 240 difference is added to inventory. Had the kits been used, it would go to purchase price differences.',
          },
        },
        {
          type: 'journal',
          entries: [
            {
              date: { fa: 'ثبت فاکتور', en: 'Invoice posted' },
              lines: [
                { account: ac.grir, debit: 18000 },
                { account: ac.invSpares, debit: 240 },
                { account: ac.inputVat, debit: 1824 },
                { account: ac.apToos, credit: 20064 },
              ],
              memo: {
                fa: '4 × 4,560 = 18,240؛ مالیات با نرخ فرضی 10٪: 1,824.',
                en: '4 × 4,560 = 18,240; VAT at an illustrative 10%: 1,824.',
              },
            },
          ],
        },
        { type: 'h', text: { fa: 'از تعهد به هزینه واقعی، و تفکیک دوره', en: 'From commitment to actual, and cut-off' } },
        {
          type: 'table',
          caption: {
            fa: 'عنصر `AFE-2025-014.02.03` (لوله‌گذاری و سیمان‌کاری AR-07)؛ بودجه 680,000 (فرضی)',
            en: 'Element `AFE-2025-014.02.03` (AR-07 casing and cementing); budget 680,000 (illustrative)',
          },
          head: [
            { fa: 'پس از', en: 'After' },
            { fa: 'واقعی', en: 'Actual' },
            { fa: 'تعهد', en: 'Commitment' },
            { fa: 'مانده', en: 'Remaining' },
          ],
          rows: [
            [{ fa: 'شروع (سفارش لوله 288,000 و سفارش سیمان‌کاری 55,000)', en: 'Start (casing PO 288,000 and cementing PO 55,000)' }, 25000, 343000, 312000],
            [{ fa: 'GRN-26-0318', en: 'GRN-26-0318' }, 205000, 163000, 312000],
            [{ fa: 'SES-26-0131', en: 'SES-26-0131' }, 250000, 118000, 312000],
            [{ fa: 'بستن سفارش سیمان‌کاری (آزادشدن ردیف سقف 10,000)', en: 'Cementing PO closed (10,000 limit line released)' }, 250000, 108000, 322000],
          ],
          numericCols: [1, 2, 3],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'تاریخ GRN و SES مهم است', en: 'GRN and SES dates matter' },
          text: {
            fa: 'GRN باید با تاریخ دریافت واقعی و SES با تاریخ انجام کار، در همان دوره ثبت شوند. کاری که روز 28 انجام شده ولی SES آن ماه بعد ثبت شود، هزینه و بدهی این ماه را کمتر و گزارش AFE را خوش‌بینانه نشان می‌دهد. برعکس، **تاریخ‌گذاری به عقب** یعنی ثبت SES با تاریخی پیش از انجام واقعی کار، یا ثبت در دوره بسته، دست‌کاری در تفکیک دوره است و ERP باید جلویش را بگیرد.',
            en: 'A GRN must carry the actual receipt date and an SES the date the work was done, in that same period. Work done on day 28 but entered next month understates this month’s costs and liabilities and makes the AFE report look rosy. Conversely, **backdating**, entering an SES with a date before the work was really done or posting into a closed period, manipulates cut-off and the ERP should prevent it.',
          },
        },
        { type: 'h', text: { fa: 'هزینه‌های تحقق‌یافته پایان ماه و تحلیل GR/IR', en: 'Month-end accruals and GR/IR reconciliation' } },
        {
          type: 'p',
          text: {
            fa: 'برای خریدهای دارای سفارش، مانده بستانکار GR/IR خودش همان **بدهی تحقق‌یافته** (دریافت‌شده، فاکتورنشده) است؛ لازم نیست کسی دستی ذخیره هزینه بزند، به شرط اینکه GRN و SES به‌موقع ثبت شده باشند. ثبت دستی فقط برای کاری لازم است که انجام شده اما SES آن هنوز ممکن نیست و باید با برآورد مستند ثبت و ماه بعد برگشت داده شود. هر ماه اقلام باز GR/IR بر اساس سن تحلیل می‌شوند:',
            en: 'For PO-based purchases, the GR/IR credit balance is itself the **accrued liability** (received, not invoiced); nobody needs to post a manual accrual, provided GRNs and SESs were entered on time. A manual accrual is needed only for work that was done but cannot yet be entered as an SES; it must be based on a documented estimate and reversed next month. Each month the open GR/IR items are analysed by age:',
          },
        },
        {
          type: 'table',
          caption: { fa: 'تحلیل سنی GR/IR در روز 30 (نمونه)', en: 'GR/IR ageing on day 30 (sample)' },
          head: [
            { fa: 'سند', en: 'Document' },
            { fa: 'دریافت‌شده، فاکتورنشده', en: 'Received, not invoiced' },
            { fa: 'فاکتورشده، دریافت‌نشده', en: 'Invoiced, not received' },
            { fa: 'سن (روز)', en: 'Age (days)' },
            { fa: 'اقدام', en: 'Action' },
          ],
          rows: [
            [{ fa: 'GRN-26-0318 لوله AR-07', en: 'GRN-26-0318 AR-07 casing' }, 180000, 0, 12, { fa: 'عادی؛ منتظر فاکتور', en: 'Normal; awaiting invoice' }],
            [{ fa: 'SES-26-0141 دکل AR-04', en: 'SES-26-0141 AR-04 rig' }, 144000, 0, 5, { fa: 'عادی', en: 'Normal' }],
            [{ fa: 'GRN-26-0119 شیر دروازه‌ای', en: 'GRN-26-0119 gate valves' }, 9600, 0, 96, { fa: 'پیگیری تأمین‌کننده؛ شاید فاکتور روی سفارش دیگری ثبت شده', en: 'Chase the supplier; the invoice may sit on another PO' }],
            [{ fa: 'فاکتور مواد شیمیایی `PO-45127`', en: 'Chemicals invoice `PO-45127`' }, 0, 12000, 41, { fa: 'کالا در راه است یا GRN جا مانده؛ با `WH-20` بررسی شود', en: 'Goods in transit or a missing GRN; check with `WH-20`' }],
            [{ fa: 'جمع', en: 'Total' }, 333600, 12000, blank, { fa: 'مانده خالص بستانکار 321,600', en: 'Net credit balance 321,600' }],
          ],
          numericCols: [1, 2, 3],
        },
        {
          type: 'p',
          text: {
            fa: '**تطبیق سه‌طرفه و تسویه خودکار بر اساس رسید (ERS)**: در تطبیق سه‌طرفه، فاکتور با سفارش (قیمت) و GRN یا SES (مقدار) مقایسه می‌شود. در **ERS** یا صورتحساب‌گیری توسط خریدار (Self-billing)، تأمین‌کننده اصلاً فاکتور نمی‌فرستد: ERP از روی GRN یا SES و قیمت سفارش، سند بدهی را خودش می‌سازد. این روش برای قیمت‌های پایدار، مثل نرخ روزانه دکل یا نرخ‌های قرارداد چارچوب، کار را سریع می‌کند؛ اما به توافق کتبی تأمین‌کننده و داده پایه دقیق نیاز دارد. در ایران صورتحساب مالیاتی را فروشنده باید در سامانه مؤدیان صادر کند؛ پس پیش از استفاده از ERS، اثر مالیاتی آن را با مقررات روز بررسی کنید.',
            en: '**Three-way match and evaluated receipt settlement (ERS)**: in a three-way match, the invoice is compared with the PO (price) and the GRN or SES (quantity). Under **ERS**, or self-billing, the supplier sends no invoice at all: the ERP creates the payable itself from the GRN or SES and the PO price. It speeds things up for stable prices such as rig day rates or framework rates, but it needs the supplier’s written agreement and precise master data. In Iran the seller must issue the tax invoice in the Taxpayers’ System, so check the tax effect against current rules before using ERS.',
          },
        },
      ],
    },
    {
      id: 'evidence-practice',
      title: {
        fa: 'شواهد بازیافت هزینه، کنترل‌ها و تمرین',
        en: 'Cost-Recovery Evidence, Controls and Practice',
      },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'حسابرس دولت یا شرکای مشارکت، هر رقم صورت هزینه‌های قابل بازیافت را تا GRN یا SES آن دنبال می‌کند. سه چیز را می‌خواهد: **کد درست**، **سند امضاشده** و **گواهی‌ها**. کدگذاری مشترک همه دوره‌های دفتر چنین است:',
            en: 'The government’s or JV partners’ auditor traces each figure in the cost-recovery statement back to its GRN or SES. They want three things: the **right code**, a **signed document** and the **certificates**. The shared coding convention across all Daftar courses is:',
          },
        },
        {
          type: 'table',
          head: [
            { fa: 'سطح', en: 'Level' },
            { fa: 'نمونه', en: 'Example' },
            { fa: 'معنا', en: 'Meaning' },
          ],
          rows: [
            [{ fa: 'کد شرکت', en: 'Company code' }, { fa: '`MP01`', en: '`MP01`' }, { fa: 'مسار پترولیوم، اپراتور مشارکت میدان آریا', en: 'Masar Petroleum, operator of the Arya field JV' }],
            [{ fa: 'مرکز هزینه', en: 'Cost centre' }, { fa: '`CC-ARY-PRD`، `CC-ARY-CMP`', en: '`CC-ARY-PRD`, `CC-ARY-CMP`' }, { fa: 'تولید میدان؛ ایستگاه تقویت فشار', en: 'Field production; compressor station' }],
            [{ fa: 'عنصر WBS (AFE)', en: 'WBS element (AFE)' }, { fa: '`AFE-2025-014.02.03`', en: '`AFE-2025-014.02.03`' }, { fa: 'حفاری AR-07: لوله‌گذاری و سیمان‌کاری', en: 'AR-07 drilling: casing and cementing' }],
            [{ fa: 'عنصر هزینه یا حساب کل', en: 'Cost element or GL account' }, { fa: '`6140`، `5120`', en: '`6140`, `5120`' }, { fa: 'دارایی در جریان ساخت چاه‌ها؛ تعمیر و نگهداری', en: 'AUC wells; repairs and maintenance' }],
            [{ fa: 'نشان بازیافت', en: 'Recoverable flag' }, { fa: '`R` یا `N`', en: '`R` or `N`' }, { fa: 'قابل بازیافت یا غیرقابل بازیافت', en: 'Recoverable or non-recoverable' }],
            [{ fa: 'دسته هزینه', en: 'Cost category' }, { fa: 'اکتشاف، توسعه، عملیات', en: 'Exploration, Development, Operating' }, { fa: 'دسته بازیافت طبق قرارداد', en: 'Recovery category per the contract' }],
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          text: {
            fa: 'GRN-26-0318 با کد `MP01 / AFE-2025-014.02.03 / 6140 / R / توسعه` و پیوست گواهی‌های کارخانه با شماره‌های ذوب و IRN، و SES-26-0141 با کد `MP01 / CC-ARY-PRD (WO-45210) / 5120 / R / عملیات` و پیوست 13 گزارش روزانه امضاشده، دقیقاً همان شواهدی‌اند که حسابرس می‌خواهد. اگر برگه کارکرد امضا نداشته باشد یا کد اشتباه باشد، حتی هزینه واقعی هم ممکن است رد شود.',
            en: 'GRN-26-0318 coded `MP01 / AFE-2025-014.02.03 / 6140 / R / Development` with the mill certificates, heat numbers and IRN attached, and SES-26-0141 coded `MP01 / CC-ARY-PRD (WO-45210) / 5120 / R / Operating` with 13 signed daily reports attached, are exactly the evidence the auditor wants. If a field ticket is unsigned or the code is wrong, even a real cost may be disallowed.',
          },
        },
        { type: 'h', text: { fa: 'کنترل‌ها و اشتباه‌های رایج', en: 'Controls and common mistakes' } },
        {
          type: 'list',
          items: [
            {
              fa: '**دریافت بدون سفارش**: کالا یا خدمتی که بدون سفارش تأییدشده تحویل گرفته می‌شود. کنترل: ERP بدون سفارش باز GRN یا SES نمی‌پذیرد؛ استثنا فقط رویه مستند خرید اضطراری.',
              en: '**Receiving without a PO**: goods or services taken in with no approved PO. Control: the ERP accepts no GRN or SES without an open PO; the only exception is the documented emergency procedure.',
            },
            {
              fa: '**SES با تأیید یک نفر**: درخواست‌کننده خودش ثبت و تأیید می‌کند، بدون مقایسه با برگه‌های امضاشده. کنترل: تفکیک نقش ثبت و پذیرش و حد اختیار.',
              en: '**SES approved by one person**: the requester enters and approves alone, with no check against signed tickets. Control: separate entry and acceptance roles, plus approval limits.',
            },
            {
              fa: '**SES با تاریخ به عقب**: برای جا دادن هزینه در دوره‌ای که بسته شده یا بودجه‌اش مانده دارد. کنترل: قفل دوره و ثبت تاریخ واقعی ورود در سابقه سند.',
              en: '**Backdated SES**: to squeeze cost into a closed period or one with budget left. Control: period locks and the real entry date in the document history.',
            },
            {
              fa: '**SES بیش از سقف سفارش**: پذیرش کار بیش از مبلغ سفارش یا ردیف سقف. کنترل: ERP متوقف می‌کند؛ راه درست اصلاحیه سفارش با تأیید، نه سفارش جدید برای مازاد.',
              en: '**SES above the PO limit**: accepting more work than the PO or its limit line. Control: the ERP blocks it; the fix is an approved PO amendment, not a new PO for the excess.',
            },
            {
              fa: '**GRN روی موضوع هزینه اشتباه**: لوله AR-12 روی سفارش AR-07. کنترل: انتخاب سفارش با اسکن برچسب و بازبینی ماهانه AFE؛ اصلاح فقط با ابطال و ثبت دوباره.',
              en: '**GRN to the wrong cost object**: AR-12 pipe on the AR-07 order. Control: PO selection by label scan and a monthly AFE review; fix only by reversal and re-posting.',
            },
            {
              fa: '**اقلام کهنه GR/IR**: مانده‌هایی که ماه‌ها بی‌توضیح می‌مانند. کنترل: تحلیل سنی ماهانه و پیگیری اقلام بالای 90 روز.',
              en: '**Ageing GR/IR items**: balances left unexplained for months. Control: monthly ageing and follow-up of items over 90 days.',
            },
          ],
        },
        {
          type: 'exercise',
          title: { fa: 'تمرین 1: کدام سند، کدام ثبت؟', en: 'Exercise 1: Which document, which posting?' },
          difficulty: 'easy',
          problem: {
            fa: 'برای هر رویداد، سند دریافت (GRN یا SES)، وضعیت یا تخصیص، و حساب بدهکار ثبت خودکار را تعیین کنید.',
            en: 'For each event, name the receipt document (GRN or SES), the stock type or assignment, and the account debited by the automatic posting.',
          },
          given: {
            head: [
              { fa: 'رویداد', en: 'Event' },
              { fa: 'شرح', en: 'Description' },
            ],
            rows: [
              [{ fa: 'الف', en: 'a' }, { fa: '120 تن باریت از فراخوان قرارداد چارچوب برای موجودی `WH-20`', en: '120 t of barite on a framework call-off, for `WH-20` stock' }],
              [{ fa: 'ب', en: 'b' }, { fa: '3 روز خدمات اسلیک‌لاین روی چاه AR-03 از فراخوان خدمات چاه؛ دستور کار به `CC-ARY-PRD` تسویه می‌شود', en: '3 days of slickline on well AR-03 under a well-services call-off; the work order settles to `CC-ARY-PRD`' }],
              [{ fa: 'ج', en: 'c' }, { fa: 'سرچاهی چاه AR-12 که مستقیم به محل دکل می‌رسد، روی `AFE-2026-012`', en: 'The AR-12 wellhead delivered straight to the rig site, on `AFE-2026-012`' }],
              [{ fa: 'د', en: 'd' }, { fa: 'کیت‌های سوپاپ K-201 که پیش از مصرف بازرسی ورودی لازم دارند', en: 'K-201 valve kits that need incoming inspection before use' }],
            ],
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'رویداد', en: 'Event' },
                { fa: 'سند', en: 'Document' },
                { fa: 'وضعیت یا تخصیص', en: 'Stock type or assignment' },
                { fa: 'حساب بدهکار', en: 'Account debited' },
              ],
              rows: [
                [{ fa: 'الف', en: 'a' }, { fa: 'GRN', en: 'GRN' }, { fa: 'انبار، موجودی آزاد', en: 'Stock, unrestricted' }, { fa: 'موجودی مواد شیمیایی', en: 'Inventory: chemicals' }],
                [{ fa: 'ب', en: 'b' }, { fa: 'SES', en: 'SES' }, { fa: 'دستور کار چاه AR-03', en: 'AR-03 work order' }, { fa: 'هزینه تعمیر و نگهداری چاه (دستور کار)', en: 'Well repairs and maintenance (work order)' }],
                [{ fa: 'ج', en: 'c' }, { fa: 'GRN', en: 'GRN' }, { fa: 'WBS چاه AR-12 (سرمایه‌ای)', en: 'AR-12 WBS (capital)' }, { fa: 'دارایی در جریان ساخت: چاه AR-12', en: 'Assets under construction: well AR-12' }],
                [{ fa: 'د', en: 'd' }, { fa: 'GRN', en: 'GRN' }, { fa: 'موجودی تحت بازرسی کیفیت', en: 'Quality-inspection stock' }, { fa: 'موجودی قطعات یدکی (ارزش‌گذاری‌شده، تا آزادسازی غیرقابل حواله)', en: 'Inventory: spare parts (valued, not issuable until released)' }],
              ],
            },
          ],
          answer: {
            fa: 'الف، ج، د: GRN (موجودی شیمیایی، دارایی در جریان ساخت AR-12، موجودی قطعات تحت بازرسی)؛ ب: SES روی دستور کار AR-03. در همه، بستانکار GR/IR.',
            en: 'a, c, d: GRN (chemicals inventory, AUC AR-12, spare parts in inspection stock); b: SES on the AR-03 work order. Credit GR/IR in every case.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تمرین 2: حد تحمل و مرجوعی باریت', en: 'Exercise 2: Barite tolerance and return' },
          difficulty: 'medium',
          problem: {
            fa: 'فراخوان باریت برای `WH-20`: 200 تن × 350، حد تحمل اضافه‌تحویل 5٪. محموله اول 120 تن است و GRN می‌شود. سپس 3 تن از آن کلوخه و خیس تشخیص داده و مرجوع می‌شود. محموله دوم 96 تن است. (الف) از محموله دوم چند تن پذیرفته می‌شود؟ (ب) ثبت‌ها را بنویسید. (ج) مانده GR/IR این فراخوان چقدر است؟',
            en: 'Barite call-off for `WH-20`: 200 t × 350, over-delivery tolerance 5%. The first shipment of 120 t is received by GRN. Then 3 t of it are found caked and wet and returned. The second shipment is 96 t. (a) How many tonnes of the second shipment can be accepted? (b) Write the entries. (c) What is the GR/IR balance for this call-off?',
          },
          hint: {
            fa: 'حد تحمل روی مقدار خالص دریافتی (پس از مرجوعی) سنجیده می‌شود.',
            en: 'The tolerance is measured on the net quantity received (after returns).',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'سقف قابل پذیرش', en: 'Acceptable maximum' },
                  text: { fa: '200 × 1.05 = 210 تن.', en: '200 × 1.05 = 210 t.' },
                },
                {
                  title: { fa: 'خالص تا پیش از محموله دوم', en: 'Net before the second shipment' },
                  text: { fa: '120 − 3 = 117 تن.', en: '120 − 3 = 117 t.' },
                },
                {
                  title: { fa: 'پذیرش محموله دوم', en: 'Accepting the second shipment' },
                  text: {
                    fa: '210 − 117 = 93 تن پذیرفته می‌شود؛ 3 تن مازاد همان‌جا رد و به تأمین‌کننده برگردانده می‌شود و GRN نمی‌خورد.',
                    en: '210 − 117 = 93 t are accepted; the 3 t excess is refused at the gate and goes back to the supplier without a GRN.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'GRN اول', en: 'First GRN' },
                  lines: [
                    { account: ac.invChem, debit: 42000 },
                    { account: ac.grir, credit: 42000 },
                  ],
                  memo: { fa: '120 × 350.', en: '120 × 350.' },
                },
                {
                  date: { fa: 'مرجوعی', en: 'Return' },
                  lines: [
                    { account: ac.grir, debit: 1050 },
                    { account: ac.invChem, credit: 1050 },
                  ],
                  memo: { fa: '3 × 350؛ با NCR.', en: '3 × 350; with an NCR.' },
                },
                {
                  date: { fa: 'GRN دوم', en: 'Second GRN' },
                  lines: [
                    { account: ac.invChem, debit: 32550 },
                    { account: ac.grir, credit: 32550 },
                  ],
                  memo: { fa: '93 × 350.', en: '93 × 350.' },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'کنترل: 42,000 − 1,050 = 40,950 و 40,950 + 32,550 = 73,500 = 210 × 350. مانده بستانکار GR/IR تا رسیدن فاکتور 73,500 است.',
                en: 'Check: 42,000 − 1,050 = 40,950, and 40,950 + 32,550 = 73,500 = 210 × 350. The GR/IR credit balance is 73,500 until the invoice arrives.',
              },
            },
          ],
          answer: {
            fa: '93 تن پذیرفته می‌شود؛ مانده GR/IR بستانکار 73,500 (210 تن × 350).',
            en: '93 t accepted; GR/IR credit balance 73,500 (210 t × 350).',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تمرین 3: SES لوله مغزی سیار (Coiled Tubing)', en: 'Exercise 3: Coiled tubing SES' },
          difficulty: 'medium',
          problem: {
            fa: 'برای اسیدکاری چاه AR-03، فراخوان خدمات `PO-45131` به خدمات چاه البرز داده شده است. ردیف‌های برنامه‌ریزی‌شده: کار دستگاه 3 روز × 7,500، نیتروژن 12 واحد × 900 و تجهیز کارگاه 6,000؛ به‌علاوه ردیف سقف 5,000. برگه‌های کارکرد این ردیف‌ها را دارند: کار 3 روز، نیتروژن 12 واحد، تجهیز کارگاه، 1 روز آماده‌به‌کار با نرخ قرارداد 4,000 به دلیل دیر رسیدن اسید که تأمینش با کارفرما بود، و نیم روز آماده‌به‌کار با مبلغ 2,000 به دلیل تعمیر سر تزریق خود پیمانکار. (الف) مبلغ قابل پذیرش SES را حساب کنید. (ب) چه کسی تأیید می‌کند؟ (ج) ثبت خودکار و مانده تعهد را بنویسید. هزینه روی دستور کار `WO-45230` می‌نشیند.',
            en: 'For the acid job on well AR-03, call-off `PO-45131` was issued to Alborz Well Services. Planned lines: unit operating 3 days × 7,500, nitrogen 12 units × 900 and mobilisation 6,000; plus a 5,000 limit line. The field tickets show: 3 operating days, 12 units of nitrogen, mobilisation, 1 standby day at the contract rate of 4,000 because company-supplied acid arrived late, and half a standby day billed at 2,000 because the contractor’s own injector head was under repair. (a) Calculate the acceptable SES amount. (b) Who approves it? (c) Write the automatic entry and the remaining commitment. The cost goes to work order `WO-45230`.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'ردیف', en: 'Line' },
                { fa: 'محاسبه', en: 'Calculation' },
                { fa: 'پذیرفته', en: 'Accepted' },
              ],
              rows: [
                [{ fa: 'کار دستگاه', en: 'Unit operating' }, { fa: '3 × 7,500', en: '3 × 7,500' }, 22500],
                [{ fa: 'نیتروژن', en: 'Nitrogen' }, { fa: '12 × 900', en: '12 × 900' }, 10800],
                [{ fa: 'تجهیز کارگاه', en: 'Mobilisation' }, { fa: 'مقطوع', en: 'Lump sum' }, 6000],
                [{ fa: 'آماده‌به‌کار (علت کارفرما)، از ردیف سقف', en: 'Standby (company cause), from the limit line' }, { fa: '1 × 4,000', en: '1 × 4,000' }, 4000],
                [{ fa: 'آماده‌به‌کار (تعمیر تجهیز پیمانکار)', en: 'Standby (contractor’s repair)' }, { fa: 'غیرقابل مطالبه', en: 'Not chargeable' }, 0],
                [{ fa: 'جمع SES', en: 'SES total' }, blank, 43300],
              ],
              numericCols: [2],
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'تأییدکننده', en: 'Approver' },
                  text: {
                    fa: '43,300 بیش از 25,000 است، پس مسئول قرارداد تأیید می‌کند، نه فقط نماینده محل.',
                    en: '43,300 is above 25,000, so the contract holder approves, not just the site representative.',
                  },
                },
                {
                  title: { fa: 'تعهد', en: 'Commitment' },
                  text: {
                    fa: 'ارزش سفارش: 22,500 + 10,800 + 6,000 + 5,000 = 44,300. پس از SES، 1,000 از ردیف سقف می‌ماند که با بستن سفارش آزاد می‌شود.',
                    en: 'PO value: 22,500 + 10,800 + 6,000 + 5,000 = 44,300. After the SES, 1,000 of the limit line remains and is released when the PO is closed.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'پذیرش SES', en: 'SES accepted' },
                  lines: [
                    { account: ac.wellRepairsAR07, debit: 43300 },
                    { account: ac.grir, credit: 43300 },
                  ],
                },
              ],
            },
          ],
          answer: {
            fa: 'SES قابل پذیرش 43,300 (2,000 رد می‌شود)؛ تأیید مسئول قرارداد؛ مانده تعهد 1,000 که با بستن سفارش آزاد می‌شود.',
            en: 'Acceptable SES 43,300 (2,000 rejected); approved by the contract holder; 1,000 commitment left, released on closing the PO.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تمرین 4: تفکیک دوره در روز 30', en: 'Exercise 4: Cut-off on day 30' },
          difficulty: 'hard',
          problem: {
            fa: 'امروز روز 30 و آخرین روز ماه است؛ دوره تا روز 5 ماه بعد باز می‌ماند. چهار رویداد زیر را بررسی کنید: (الف) ردیف 20 لوله جداری AR-07 (60 شاخه × 1,800) امروز در `WH-20` رسیده است. (ب) مرحله م2 پوشش ایستگاه (45,000) روز 28 تکمیل و آزمون DFT آن قبول شده، اما مهندس قرارداد می‌خواهد SES را روز 3 ماه بعد ثبت کند. (ج) دکل تعمیر چاه AR-04 در این ماه 4 روز با نرخ 12,000 کار کرده و گزارش‌های روزانه امضا شده‌اند. (د) فاکتور 12,000 مواد شیمیایی ثبت شده اما کالا نرسیده است. کدام ثبت‌ها با چه تاریخی در این ماه لازم‌اند؟ مانده خالص GR/IR این اقلام و اثر ثبت دیرهنگام ب و ج را حساب کنید.',
            en: 'Today is day 30, the last day of the month; the period stays open until day 5 of next month. Review four events: (a) line 20 of the AR-07 casing (60 joints × 1,800) arrived at `WH-20` today. (b) Station coating milestone M2 (45,000) was completed on day 28 and passed its DFT test, but the contract engineer plans to enter the SES on day 3 of next month. (c) The AR-04 workover rig worked 4 days this month at 12,000 and the daily reports are signed. (d) A 12,000 chemicals invoice was posted but the goods have not arrived. Which postings belong in this month, with which dates? Calculate the net GR/IR balance from these items and the effect of posting b and c late.',
          },
          solution: [
            {
              type: 'journal',
              title: { fa: 'ثبت‌های این ماه', en: 'Postings for this month' },
              entries: [
                {
                  date: { fa: 'الف: GRN روز 30', en: 'a: GRN dated day 30' },
                  lines: [
                    { account: ac.aucAR11, debit: 108000 },
                    { account: ac.grir, credit: 108000 },
                  ],
                },
                {
                  date: { fa: 'ب: SES با تاریخ انجام کار، روز 28', en: 'b: SES dated day 28, when the work was done' },
                  lines: [
                    { account: ac.maintCmp, debit: 45000 },
                    { account: ac.grir, credit: 45000 },
                  ],
                  memo: {
                    fa: 'دوره هنوز باز است؛ ثبت روز 3 با تاریخ 28 تاریخ‌گذاری به عقب نیست، چون کار واقعاً روز 28 انجام شده است.',
                    en: 'The period is still open; entering it on day 3 dated day 28 is not backdating, because the work really was done on day 28.',
                  },
                },
                {
                  date: { fa: 'ج: SES پیشرفت، روز 30', en: 'c: progress SES dated day 30' },
                  lines: [
                    { account: ac.wellRepairs, debit: 48000 },
                    { account: ac.grir, credit: 48000 },
                  ],
                  memo: { fa: '4 × 12,000 بر پایه گزارش‌های روزانه امضاشده.', en: '4 × 12,000 based on the signed daily reports.' },
                },
              ],
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'رویداد د', en: 'Event d' },
                  text: {
                    fa: 'ثبت تازه‌ای ندارد؛ فاکتور قبلاً GR/IR را 12,000 بدهکار کرده است. باید با `WH-20` بررسی شود که کالا در راه است یا GRN آن جا مانده.',
                    en: 'No new posting; the invoice already debited GR/IR by 12,000. Check with `WH-20` whether the goods are in transit or the GRN is missing.',
                  },
                },
                {
                  title: { fa: 'مانده خالص GR/IR', en: 'Net GR/IR balance' },
                  text: {
                    fa: '108,000 + 45,000 + 48,000 − 12,000 = 189,000 بستانکار؛ یعنی بدهی تحقق‌یافته‌ای که هنوز فاکتور ندارد.',
                    en: '108,000 + 45,000 + 48,000 − 12,000 = 189,000 credit: an accrued liability not yet invoiced.',
                  },
                },
                {
                  title: { fa: 'اثر ثبت دیرهنگام', en: 'Effect of late posting' },
                  text: {
                    fa: 'اگر ب و ج ماه بعد ثبت شوند، هزینه عملیاتی و بدهی این ماه هر کدام 93,000 (45,000 + 48,000) کمتر از واقع گزارش می‌شوند و صورت هزینه‌های قابل بازیافت این دوره هم ناقص می‌ماند. رویداد الف تعهد AFE را 108,000 کم و هزینه واقعی آن را 108,000 زیاد می‌کند.',
                    en: 'If b and c were posted next month, this month’s operating costs and liabilities would each be understated by 93,000 (45,000 + 48,000), and this period’s cost-recovery statement would be incomplete. Event a lowers the AFE commitment by 108,000 and raises its actual by 108,000.',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: 'الف، ب و ج در این ماه ثبت می‌شوند؛ مانده خالص GR/IR بستانکار 189,000؛ ثبت دیرهنگام ب و ج هزینه و بدهی را 93,000 کمتر نشان می‌دهد.',
            en: 'Post a, b and c this month; net GR/IR credit 189,000; posting b and c late would understate costs and liabilities by 93,000.',
          },
        },
      ],
    },
    {
      id: 'summary',
      title: { fa: 'جمع‌بندی و واژه‌های کلیدی', en: 'Summary and Key Terms' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              fa: 'GRN ورود فیزیکی کالا و SES انجام خدمت را با ارجاع به سفارش ثبت می‌کنند؛ هر دو پایه دوم تطبیق سه‌طرفه‌اند.',
              en: 'The GRN records the physical arrival of goods and the SES the performance of a service, both against a PO; both are the second leg of the three-way match.',
            },
            {
              fa: 'تخصیص ردیف سفارش ثبت GRN را تعیین می‌کند: موجودی، هزینه مرکز هزینه، دارایی در جریان ساخت روی WBS، یا دستور کار؛ همیشه در برابر GR/IR.',
              en: 'The PO line’s assignment decides the GRN posting: inventory, cost-centre expense, AUC on a WBS, or a work order; always against GR/IR.',
            },
            {
              fa: 'مرجوعی برای کالای معیوب است و ابطال برای GRN یا SES اشتباه؛ اصلاح همیشه در ERP، نه با ثبت دستی.',
              en: 'A return is for defective goods; a reversal is for a wrong GRN or SES; corrections are always made in the ERP, never by a manual entry.',
            },
            {
              fa: 'SES از برگه‌های کارکرد امضاشده ساخته می‌شود، در چارچوب ردیف‌ها و ردیف سقف سفارش، و با تفکیک وظایف و حد اختیار پذیرفته می‌شود.',
              en: 'An SES is built from signed field tickets, within the PO’s lines and limit line, and accepted with segregation of duties and approval limits.',
            },
            {
              fa: 'GRN و SES تعهد را به هزینه واقعی تبدیل می‌کنند؛ تاریخ درست آن‌ها تفکیک دوره، GR/IR و صورت هزینه‌های قابل بازیافت را درست نگه می‌دارد.',
              en: 'GRNs and SESs turn commitments into actual costs; their correct dates keep cut-off, GR/IR and the cost-recovery statement right.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'رسید کالا (GRN)', en: 'Goods received note (GRN)' },
              def: { fa: 'سند ثبت ورود فیزیکی کالا با ارجاع به سفارش خرید.', en: 'The document recording the physical arrival of goods against a PO.' },
            },
            {
              term: { fa: 'برگه ثبت خدمات (SES)', en: 'Service entry sheet (SES)' },
              def: { fa: 'سند ERP که خدمت انجام‌شده را با ارجاع به سفارش خدمات ثبت می‌کند.', en: 'The ERP document recording a service performed against a service PO.' },
            },
            {
              term: { fa: 'پذیرش خدمات', en: 'Service acceptance' },
              def: { fa: 'تأیید SES توسط فرد مجاز که ثبت مالی را فعال می‌کند.', en: 'Approval of the SES by an authorised person, which triggers the Finance posting.' },
            },
            {
              term: { fa: 'برگه کارکرد روزانه', en: 'Daily field ticket' },
              def: { fa: 'گزارش روزانه پیمانکار از خدمه، تجهیزات و مواد که نماینده کارفرما امضا می‌کند.', en: 'The contractor’s daily record of crew, equipment and materials, signed by the company representative.' },
            },
            {
              term: { fa: 'صورت‌وضعیت', en: 'Progress statement' },
              def: { fa: 'گزارش دوره‌ای پیمانکار از کار انجام‌شده و مبلغ آن.', en: 'The contractor’s periodic report of work done and its value.' },
            },
            {
              term: { fa: 'ردیف سقف', en: 'Limit line' },
              def: { fa: 'ردیف سفارش خدمات برای خدمات پیش‌بینی‌نشده، با سقف مبلغ.', en: 'A service PO line for unplanned services, with a value cap.' },
            },
            {
              term: { fa: 'موجودی تحت بازرسی کیفیت', en: 'Quality-inspection stock' },
              def: { fa: 'کالای رسیدشده و ارزش‌گذاری‌شده که تا آزادسازی قابل حواله نیست.', en: 'Received, valued stock that cannot be issued until released.' },
            },
            {
              term: { fa: 'حد تحمل تحویل', en: 'Delivery tolerance' },
              def: { fa: 'درصد مجاز تحویل بیشتر یا کمتر از مقدار سفارش.', en: 'The allowed percentage of delivery above or below the ordered quantity.' },
            },
            {
              term: { fa: 'ابطال رسید', en: 'GRN reversal' },
              def: { fa: 'سند معکوس دقیق برای GRN یا SES اشتباه.', en: 'An exact mirror document for a wrong GRN or SES.' },
            },
            {
              term: { fa: 'تفکیک دوره (Cut-off)', en: 'Cut-off' },
              def: { fa: 'ثبت هر رویداد در دوره‌ای که واقعاً رخ داده است.', en: 'Recording each event in the period in which it really happened.' },
            },
            {
              term: { fa: 'تسویه خودکار بر اساس رسید (ERS)', en: 'Evaluated receipt settlement (ERS)' },
              def: { fa: 'ساخت خودکار سند بدهی از GRN یا SES و قیمت سفارش، بدون فاکتور تأمین‌کننده.', en: 'Creating the payable automatically from the GRN or SES and the PO price, with no supplier invoice.' },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: {
        fa: 'ثبت خودکار GRN برای قطعه یدکی که به موجودی انبار مرکزی وارد می‌شود کدام است؟',
        en: 'What is the automatic posting of a GRN for a spare part received into Central Warehouse stock?',
      },
      options: [
        { fa: 'بدهکار هزینه تعمیر، بستانکار GR/IR', en: 'Dr Repairs expense, Cr GR/IR' },
        { fa: 'بدهکار موجودی، بستانکار حساب‌های پرداختنی', en: 'Dr Inventory, Cr Accounts payable' },
        { fa: 'بدهکار موجودی، بستانکار GR/IR با قیمت سفارش', en: 'Dr Inventory, Cr GR/IR at the PO price' },
        { fa: 'ثبتی ندارد تا قطعه مصرف شود', en: 'No posting until the part is used' },
      ],
      answer: 2,
      explain: {
        fa: 'GRN برای کالای انباری موجودی را با قیمت سفارش بدهکار و GR/IR را بستانکار می‌کند. حساب‌های پرداختنی با فاکتور بستانکار می‌شود، نه با GRN؛ و هزینه تعمیر هنگام حواله قطعه به دستور کار ثبت می‌شود.',
        en: 'A stock GRN debits Inventory at the PO price and credits GR/IR. Accounts payable is credited by the invoice, not the GRN; and repairs expense arises when the part is issued to a work order.',
      },
    },
    {
      q: {
        fa: 'کالایی با GRN به «موجودی تحت بازرسی کیفیت» رفته است. کدام جمله درست است؟',
        en: 'Goods were received by GRN into quality-inspection stock. Which statement is true?',
      },
      options: [
        { fa: 'ارزش‌گذاری شده و جزء موجودی است، اما تا آزادسازی قابل حواله نیست', en: 'They are valued and part of inventory, but cannot be issued until released' },
        { fa: 'هنوز جزء موجودی نیست و ثبت مالی ندارد', en: 'They are not yet inventory and have no posting' },
        { fa: 'می‌توان آن‌ها را بلافاصله به دستور کار حواله کرد', en: 'They can be issued to a work order immediately' },
        { fa: 'آزادسازی آن‌ها سند حسابداری تازه‌ای می‌سازد', en: 'Releasing them creates a new accounting document' },
      ],
      answer: 0,
      explain: {
        fa: 'GRN به موجودی تحت بازرسی همان ثبت مالی GRN عادی را دارد؛ فقط حواله آن تا قبول بازرسی مسدود است. آزادسازی فقط وضعیت را عوض می‌کند و ثبت مالی ندارد.',
        en: 'A GRN into inspection stock has the same posting as a normal GRN; only issuing is blocked until inspection passes. Release only changes the status and posts nothing.',
      },
    },
    {
      q: {
        fa: 'سفارش 80 تن سیمان با حد تحمل اضافه‌تحویل 5٪ است. تأمین‌کننده 86 تن می‌آورد. چند تن با GRN پذیرفته می‌شود؟',
        en: 'A PO is for 80 t of cement with a 5% over-delivery tolerance. The supplier delivers 86 t. How many tonnes are accepted by GRN?',
      },
      options: [
        { fa: '80', en: '80' },
        { fa: '86', en: '86' },
        { fa: '76', en: '76' },
        { fa: '84', en: '84' },
      ],
      answer: 3,
      explain: {
        fa: '80 × 1.05 = 84 تن سقف قابل پذیرش است؛ 2 تن مازاد رد می‌شود. پذیرفتن 86 تن از حد تحمل می‌گذرد و ERP آن را متوقف می‌کند؛ محدود کردن به 80 تن هم بی‌دلیل سخت‌گیرانه است.',
        en: '80 × 1.05 = 84 t is the acceptable maximum; the 2 t excess is refused. Accepting 86 t breaks the tolerance and the ERP blocks it; limiting to 80 t is needlessly strict.',
      },
    },
    {
      q: {
        fa: 'انباردار GRN 60 شاخه لوله را اشتباهی روی سفارش چاه AR-07 ثبت کرده، در حالی که لوله‌ها برای AR-12 بوده‌اند. هنوز فاکتوری ثبت نشده است. راه درست چیست؟',
        en: 'A storekeeper posted a GRN for 60 joints on the AR-07 order by mistake; the pipe was for AR-12. No invoice has been posted. What is the right fix?',
      },
      options: [
        { fa: 'سند مرجوعی به تأمین‌کننده صادر کنیم', en: 'Issue a return to vendor' },
        { fa: 'GRN را در ERP باطل کنیم و GRN درست را روی سفارش AR-12 ثبت کنیم', en: 'Reverse the GRN in the ERP and post the correct GRN on the AR-12 order' },
        { fa: 'یک ثبت دستی دفتر کل از AR-07 به AR-12 بزنیم', en: 'Post a manual ledger entry from AR-07 to AR-12' },
        { fa: 'کاری نکنیم؛ در پایان پروژه اصلاح می‌شود', en: 'Do nothing; it will be fixed at project close' },
      ],
      answer: 1,
      explain: {
        fa: 'لوله‌ها معیوب نیستند، پس مرجوعی معنا ندارد. GRN خودش اشتباه است و باید باطل شود تا مقدار، تعهد هر دو سفارش، GR/IR و سابقه سند با هم درست شوند. ثبت دستی فقط دفتر کل را اصلاح می‌کند و سفارش‌ها و انبار را ناهماهنگ می‌گذارد.',
        en: 'The pipe is not defective, so a return makes no sense. The GRN itself is wrong and must be reversed so that quantities, both POs’ commitments, GR/IR and the history are corrected together. A manual entry fixes only the ledger and leaves the POs and stock out of step.',
      },
    },
    {
      q: {
        fa: 'تعهد عنصر `AFE-2025-014.02.03` برابر 343,000 و هزینه واقعی 25,000 است. GRN لوله به مبلغ 180,000 روی آن ثبت می‌شود. تعهد و واقعی جدید چقدر است؟',
        en: 'Element `AFE-2025-014.02.03` shows commitments of 343,000 and actuals of 25,000. A casing GRN of 180,000 is posted to it. What are the new commitment and actual?',
      },
      options: [
        { fa: 'تعهد 343,000؛ واقعی 205,000', en: 'Commitment 343,000; actual 205,000' },
        { fa: 'تعهد 523,000؛ واقعی 25,000', en: 'Commitment 523,000; actual 25,000' },
        { fa: 'تعهد 163,000؛ واقعی 205,000', en: 'Commitment 163,000; actual 205,000' },
        { fa: 'تعهد 163,000؛ واقعی 25,000', en: 'Commitment 163,000; actual 25,000' },
      ],
      answer: 2,
      explain: {
        fa: 'GRN مبلغ را از تعهد به واقعی منتقل می‌کند: 343,000 − 180,000 = 163,000 و 25,000 + 180,000 = 205,000. اگر تعهد کم نمی‌شد، همان هزینه دو بار از بودجه کم می‌شد.',
        en: 'The GRN moves the amount from commitment to actual: 343,000 − 180,000 = 163,000 and 25,000 + 180,000 = 205,000. If the commitment did not fall, the same cost would use the budget twice.',
      },
    },
    {
      q: {
        fa: 'کدام ترکیب برای پذیرش SES سیمان‌کاری درست است؟',
        en: 'Which arrangement is right for accepting a cementing SES?',
      },
      options: [
        { fa: 'سرپرست پیمانکار ثبت و تأیید می‌کند', en: 'The contractor’s supervisor enters and approves it' },
        { fa: 'خریدار ثبت می‌کند و کارمند حساب‌های پرداختنی تأیید می‌کند', en: 'The buyer enters it and the AP clerk approves it' },
        { fa: 'درخواست‌کننده به‌تنهایی ثبت و تأیید می‌کند', en: 'The requester enters and approves it alone' },
        { fa: 'مهندس قرارداد ثبت می‌کند و نماینده کارفرما یا مسئول قرارداد، در حد اختیار، پس از مقایسه با برگه‌های امضاشده می‌پذیرد', en: 'The contract engineer enters it and the site representative or contract holder, within their limit, accepts it after checking the signed tickets' },
      ],
      answer: 3,
      explain: {
        fa: 'پذیرش باید جدا از ثبت، توسط کسی با اختیار کافی و آگاه از کار انجام‌شده باشد. پیمانکار نمی‌تواند کار خودش را تأیید کند؛ خریدار و حساب‌های پرداختنی کار را ندیده‌اند؛ و تأیید یک‌نفره تفکیک وظایف را از بین می‌برد.',
        en: 'Acceptance must be separate from entry, by someone with enough authority who knows the work was done. The contractor cannot approve its own work; the buyer and AP have not seen the work; and one-person approval destroys segregation of duties.',
      },
    },
    {
      q: {
        fa: 'گزارش‌های روزانه یک دکل تعمیر: 1 جابه‌جایی مقطوع 15,000، 6 روز کار با نرخ 10,000 و 2 روز آماده‌به‌کار با نرخ 7,000 به علت کارفرما. مبلغ SES چقدر است؟',
        en: 'A workover rig’s daily reports show: 1 rig move at a 15,000 lump sum, 6 operating days at 10,000 and 2 standby days at 7,000 caused by the company. What is the SES amount?',
      },
      options: [
        { fa: '75,000', en: '75,000' },
        { fa: '89,000', en: '89,000' },
        { fa: '74,000', en: '74,000' },
        { fa: '95,000', en: '95,000' },
      ],
      answer: 1,
      explain: {
        fa: '15,000 + 6 × 10,000 + 2 × 7,000 = 15,000 + 60,000 + 14,000 = 89,000. روزهای آماده‌به‌کار با علت کارفرما قابل پرداخت‌اند؛ گزینه 75,000 آن‌ها را جا انداخته است.',
        en: '15,000 + 6 × 10,000 + 2 × 7,000 = 15,000 + 60,000 + 14,000 = 89,000. Standby days caused by the company are payable; 75,000 leaves them out.',
      },
    },
    {
      q: {
        fa: 'قرارداد خدماتی 150,000 است. پیشرفت تجمعی 70٪ است و قبلاً 60,000 SES پذیرفته شده است. SES این دوره چقدر است؟',
        en: 'A service contract is worth 150,000. Cumulative progress is 70% and 60,000 of SESs were accepted earlier. What is this period’s SES?',
      },
      options: [
        { fa: '105,000', en: '105,000' },
        { fa: '45,000', en: '45,000' },
        { fa: '60,000', en: '60,000' },
        { fa: '15,000', en: '15,000' },
      ],
      answer: 1,
      explain: {
        fa: 'ارزش تجمعی 150,000 × 70٪ = 105,000؛ منهای 60,000 پذیرفته‌شده قبلی = 45,000. گزینه 105,000 کل کار تا امروز است و اگر ثبت شود، 60,000 دو بار هزینه می‌شود.',
        en: 'Cumulative value 150,000 × 70% = 105,000, less the 60,000 already accepted = 45,000. 105,000 is the total to date; posting it would charge 60,000 twice.',
      },
    },
    {
      q: {
        fa: 'در پایان ماه، کالا با GRN رسیده اما فاکتورش نیامده است. این بدهی کجا دیده می‌شود؟',
        en: 'At month end goods have been received by GRN but not invoiced. Where does this liability show?',
      },
      options: [
        { fa: 'جایی دیده نمی‌شود تا فاکتور برسد', en: 'Nowhere until the invoice arrives' },
        { fa: 'در حساب‌های پرداختنی تأمین‌کننده', en: 'In the supplier’s accounts payable' },
        { fa: 'به‌صورت مانده بستانکار GR/IR، یعنی بدهی تحقق‌یافته', en: 'As a credit balance on GR/IR, i.e. an accrued liability' },
        { fa: 'فقط در گزارش تعهدات پروژه', en: 'Only in the project commitment report' },
      ],
      answer: 2,
      explain: {
        fa: 'GRN همان لحظه GR/IR را بستانکار کرده است؛ این مانده بدهی «دریافت‌شده، فاکتورنشده» است و نیازی به ثبت دستی ذخیره ندارد. حساب‌های پرداختنی فقط با فاکتور بستانکار می‌شود و تعهد با GRN به هزینه واقعی تبدیل شده است.',
        en: 'The GRN credited GR/IR immediately; that balance is the “received, not invoiced” liability and needs no manual accrual. Accounts payable is credited only by the invoice, and the commitment has already turned into an actual cost.',
      },
    },
    {
      q: {
        fa: 'تسویه خودکار بر اساس رسید (ERS) چیست؟',
        en: 'What is evaluated receipt settlement (ERS)?',
      },
      options: [
        { fa: 'ERP سند بدهی را از GRN یا SES و قیمت سفارش می‌سازد و تأمین‌کننده فاکتور نمی‌فرستد', en: 'The ERP creates the payable from the GRN or SES and the PO price, and the supplier sends no invoice' },
        { fa: 'پرداخت پیش از دریافت کالا', en: 'Paying before the goods arrive' },
        { fa: 'تطبیق دوطرفه بدون GRN', en: 'A two-way match without a GRN' },
        { fa: 'ابطال خودکار GRNهای قدیمی', en: 'Automatic reversal of old GRNs' },
      ],
      answer: 0,
      explain: {
        fa: 'در ERS، رسید پایه بدهی است و فاکتور تأمین‌کننده حذف می‌شود؛ به همین دلیل به توافق تأمین‌کننده، قیمت‌های پایدار و داده پایه دقیق نیاز دارد. تطبیق دوطرفه برعکس، رسید را حذف می‌کند و فاکتور را نگه می‌دارد.',
        en: 'Under ERS the receipt is the basis of the payable and the supplier invoice disappears, which is why it needs the supplier’s agreement, stable prices and accurate master data. A two-way match is the opposite: it drops the receipt and keeps the invoice.',
      },
    },
  ],
}
