import type { Lesson } from '../../types'

/* Masar Petroleum: accounts the ERP posts to in this lesson. */
const ac = {
  spares: { fa: 'موجودی قطعات یدکی', en: 'Inventory: spare parts' },
  chemicals: { fa: 'موجودی مواد شیمیایی', en: 'Inventory: chemicals' },
  octg: { fa: 'موجودی لوله‌های OCTG', en: 'Inventory: OCTG' },
  consumables: { fa: 'موجودی اقلام مصرفی', en: 'Inventory: consumables' },
  grir: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing account' },
  ap: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
  wellAR12: {
    fa: 'دارایی در جریان ساخت: چاه AR-12 (AFE-012)',
    en: 'Assets under construction: well AR-12 (AFE-012)',
  },
}

const t = (fa: string, en: string) => ({ fa, en })
const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'goods-receipt',
  number: 4,
  level: 'intermediate',
  minutes: 30,
  icon: 'FileCheck',
  tone: 'revenue',
  title: { fa: 'رسید کالا (GRN)', en: 'Goods Receipt (GRN)' },
  summary: {
    fa: 'کالا را درست تحویل بگیرید: دریافت در برابر سفارش خرید، بازرسی کمی و کیفی، کنترل گواهی آزمون کارخانه (MTC) و گواهی انطباق، قرنطینه و رد کالا، سند رسید کالا (GRN) در ERP و ثبت خودکار مالی آن (بدهکار موجودی، بستانکار GR/IR)، و رسید کالایی که مستقیم به چاه یا AFE منظور می‌شود، همراه با مستندات کاست ریکاوری.',
    en: 'Receive goods properly: receiving against a purchase order, quantity and quality inspection, checking mill test certificates (MTC) and certificates of conformity, quarantine and rejection, the goods received note (GRN) in the ERP and its automatic Finance posting (Dr Inventory, Cr GR/IR), and receipts charged directly to a well or AFE with their cost-recovery documentation.',
  },
  objectives: [
    {
      fa: 'مراحل دریافت کالا در برابر سفارش خرید را از ورود کامیون تا قرار دادن در جایگاه شرح دهید',
      en: 'Describe the receiving steps against a purchase order, from truck arrival to put-away',
    },
    {
      fa: 'مقدار پذیرفته‌شده و ارزش رسید کالا (GRN) را با توجه به کسری، ردی و حد مجاز سفارش محاسبه کنید',
      en: 'Calculate the accepted quantity and GRN value, allowing for shortages, rejections and PO tolerances',
    },
    {
      fa: 'گواهی آزمون کارخانه و گواهی انطباق را کنترل و با شماره ذوب تطبیق دهید',
      en: 'Check mill test certificates and certificates of conformity and match them to heat numbers',
    },
    {
      fa: 'ثبت‌های خودکار GRN، برگشت به فروشنده و فاکتور را بنویسید و مانده حساب GR/IR را تحلیل کنید',
      en: 'Write the automatic entries for a GRN, a return to vendor and an invoice, and analyse the GR/IR balance',
    },
    {
      fa: 'رسید مستقیم به چاه یا AFE و بسته مستندات کاست ریکاوری آن را توضیح دهید',
      en: 'Explain receipts charged directly to a well or AFE and their cost-recovery documentation pack',
    },
  ],
  sections: [
    {
      id: 'why-grn',
      title: { fa: 'چرا رسید کالا (GRN) مهم است؟', en: 'Why the Goods Received Note (GRN) Matters' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'صبح یک روز کاری دو کامیون به انبار مرکزی مسار پترولیوم می‌رسند. اولی 40 بشکه امولسیون‌شکن و 6 بسته آب‌بند K-201 را طبق سفارش خرید PO-0518 آورده است. دومی لوله جداری `9-5/8"` برای چاه AR-12 را طبق سفارش PO-0533 آورده که مستقیم به AFE-012 منظور می‌شود. پیش از اینکه انباردار چیزی را امضا کند، باید به چند پرسش پاسخ دهد: آیا این همان چیزی است که سفارش داده‌ایم؟ چه مقدار؟ سالم است؟ گواهی‌های درست را دارد؟ و به کجا می‌رود: موجودی یا چاه؟',
            en: 'One working morning two trucks pull into Masar Petroleum’s Central Warehouse. The first brings 40 drums of demulsifier and 6 K-201 seal kits on purchase order PO-0518. The second brings `9-5/8"` casing for well AR-12 on PO-0533, charged directly to AFE-012. Before the storekeeper signs anything, a few questions need answers: is this what we ordered? How much? Is it in good condition? Does it have the right certificates? And where does it go: into stock or onto the well?',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**رسید کالا (GRN، Goods Received Note)** رویداد و سندی است که با آن شرکت تأیید می‌کند کالا را در برابر یک سفارش خرید، با مقدار درست و کیفیت قابل قبول، به‌صورت فیزیکی تحویل گرفته است. ثبت GRN در ERP سه کار را همزمان انجام می‌دهد: موجودی را افزایش می‌دهد (یا هزینه را روی محل هزینه می‌نشاند)، سابقه سفارش خرید را به‌روز می‌کند و **خودکار** سند مالی می‌زند. GRN یکی از سه پایه **تطبیق سه‌طرفه** (سفارش، GRN، فاکتور) است که پرداخت را کنترل می‌کند.',
            en: 'A **goods received note (GRN)** is the event and the document by which the company confirms it has physically received goods against a purchase order, in the right quantity and of acceptable quality. Posting a GRN in the ERP does three things at once: it increases stock (or puts the cost on a cost object), updates the purchase order history, and posts a Finance document **automatically**. The GRN is one of the three legs of the **three-way match** (PO, GRN, invoice) that controls payment.',
          },
        },
        {
          type: 'diagram',
          id: 'grn-ses',
          caption: {
            fa: 'دو مسیر رسید: کالا با رسید کالا (GRN) و خدمات با پذیرش برگه ثبت خدمات (SES)، همراه با اسناد و ثبت مالی هر مرحله.',
            en: 'Two receipt paths: goods through a GRN and services through acceptance of a service entry sheet (SES), with the documents and postings at each step.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'GRN برای کالا، SES برای خدمات', en: 'GRN for goods, SES for services' },
          text: {
            fa: 'این درس درباره کالاست. خدماتی مانند سیمان‌کاری یا نمودارگیری چاه از انبار عبور نمی‌کنند؛ «رسید» آنها پذیرش **برگه ثبت خدمات (SES)** توسط کسی است که کار را دیده است. اثر مالی هر دو یکی است: هزینه یا دارایی بدهکار و حساب واسط GR/IR بستانکار. جزئیات SES در دوره تدارکات و خرید آمده است.',
            en: 'This lesson is about goods. Services such as cementing or wireline logging never pass through the warehouse; their “receipt” is the acceptance of a **service entry sheet (SES)** by someone who saw the work. The financial effect is the same: the cost or asset is debited and the GR/IR clearing account credited. The SES is covered in the Procurement course.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'چرا مالی به GRN اهمیت می‌دهد', en: 'Why Finance cares about the GRN' },
          text: {
            fa: 'GRN لحظه‌ای است که شرکت دارایی و تعهد را شناسایی می‌کند، حتی پیش از رسیدن فاکتور. بستانکار شدن حساب واسط GR/IR یعنی «کالا رسیده، فاکتور هنوز نه». پس هرگز پیش از شمارش و کنترل، زیر برگه تحویل «کالا سالم و کامل دریافت شد» را امضا نکنید؛ بنویسید «دریافت شد، با شرط بازرسی».',
            en: 'The GRN is the moment the company recognises the asset and the obligation, even before the invoice arrives. A credit on GR/IR means “goods received, not yet invoiced”. So never sign a delivery note “received complete and in good condition” before counting and checking; write “received, subject to inspection”.',
          },
        },
      ],
    },
    {
      id: 'receiving-inspection',
      title: { fa: 'دریافت در برابر سفارش خرید و بازرسی کمی و کیفی', en: 'Receiving Against a Purchase Order and Inspection' },
      blocks: [
        {
          type: 'steps',
          items: [
            {
              title: t('پیش از ورود', 'Before arrival'),
              text: t(
                'تأمین‌کننده اعلام ارسال و فهرست بسته‌بندی را می‌فرستد. انباردار سفارش باز را کنترل و نوبت تخلیه را تعیین می‌کند و کنترل کیفیت را از اقلامی که بازرسی لازم دارند باخبر می‌کند.',
                'The vendor sends a shipping notice and packing list. The storekeeper checks the open PO, books an unloading slot and alerts quality control to items needing inspection.',
              ),
            },
            {
              title: t('در ورودی', 'At the gate'),
              text: t(
                'شماره سفارش روی بارنامه و برگه تحویل با سفارش باز تطبیق داده می‌شود و سلامت پلمب‌ها و ایمنی بار کنترل می‌شود.',
                'The PO number on the waybill and delivery note is matched to an open PO, and seals and load safety are checked.',
              ),
            },
            {
              title: t('تخلیه ایمن', 'Safe unloading'),
              text: t(
                'بار با لیفتراک یا جرثقیل، و در صورت لزوم با طرح بلند کردن بار، تخلیه و در محوطه دریافت گذاشته می‌شود، نه مستقیم در قفسه.',
                'The load is unloaded by forklift or crane, with a lifting plan where needed, and placed in the receiving area, not straight into the racks.',
              ),
            },
            {
              title: t('کنترل کمی', 'Quantity check'),
              text: t(
                'شمارش، توزین یا اندازه‌گیری طول (Pipe tally) و مقایسه با برگه تحویل و سفارش.',
                'Count, weigh or measure (pipe tally), and compare with the delivery note and the PO.',
              ),
            },
            {
              title: t('کنترل کیفی', 'Quality check'),
              text: t(
                'وضعیت ظاهری، نشانه‌گذاری‌ها، مدارک و گواهی‌ها؛ برای اقلام حیاتی، بازرسی کنترل کیفیت یا بازرس شخص ثالث.',
                'Visual condition, markings, documents and certificates; for critical items, inspection by quality control or a third-party inspector.',
              ),
            },
            {
              title: t('ثبت GRN', 'Post the GRN'),
              text: t(
                'مقدار پذیرفته‌شده به موجودی آزاد، یا به موجودی در انتظار بازرسی یا مسدود، ثبت می‌شود.',
                'The accepted quantity is posted to unrestricted stock, or to quality-inspection or blocked stock.',
              ),
            },
            {
              title: t('قرار دادن و بایگانی', 'Put-away and filing'),
              text: t(
                'کالا با برچسب به جایگاه می‌رود و مدارک به GRN و بچ پیوست می‌شود.',
                'The goods go to their bin with a label, and the documents are attached to the GRN and the batch.',
              ),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: شمارش کور', en: 'In practice: blind counting' },
          text: {
            fa: 'در بسیاری از انبارهای منظم، صفحه دریافت مقدار سفارش را به شمارنده نشان نمی‌دهد تا او واقعاً بشمارد، نه اینکه عدد مورد انتظار را تأیید کند. در شرکت‌های ایرانی هم رسم خوبی است که یک نسخه از برگه تحویل با عبارت «دریافت با شرط بازرسی» امضا شود و GRN پس از شمارش و کنترل صادر شود.',
            en: 'Many well-run warehouses hide the PO quantity from the person counting, so they actually count instead of confirming the expected number. In Iranian companies it is also good practice to sign a copy of the delivery note “received subject to inspection” and issue the GRN only after counting and checking.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**حد مجاز تحویل** در سفارش خرید تعیین می‌کند چقدر بیشتر یا کمتر از مقدار سفارش پذیرفتنی است. برای مواد فله‌ای یا لوله که تحویل مقدار دقیق سخت است، حد مجاز چنددرصدی رایج است؛ برای اقلام سریال‌دار یا مهندسی معمولاً صفر است. تحویل خارج از حد مجاز فقط با تأیید کارشناس خرید پذیرفته می‌شود. **رسید بدون سفارش خرید** هم استثناست و فقط در موارد اضطراری و با تأیید مقام مجاز ثبت می‌شود.',
            en: 'The **delivery tolerance** on the PO sets how much over or under the ordered quantity is acceptable. For bulk materials or pipe, where exact delivery is hard, a tolerance of a few percent is common; for serialised or engineered items it is usually zero. Deliveries outside tolerance are accepted only with the buyer’s approval. A **receipt without a PO** is an exception too, allowed only in emergencies with an authorised approval.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'تحویل در برابر سفارش PO-0518', en: 'Delivery against PO-0518' },
          head: [
            t('ردیف', 'Line'),
            t('کالا', 'Material'),
            t('سفارش', 'Ordered'),
            t('تحویل', 'Delivered'),
            t('ردشده', 'Rejected'),
            t('پذیرفته', 'Accepted'),
            t('قیمت واحد', 'Unit price'),
            t('ارزش GRN', 'GRN value'),
          ],
          numericCols: [2, 3, 4, 5, 6, 7],
          rows: [
            [t('10', '10'), t('امولسیون‌شکن، بشکه 200 لیتری', 'Demulsifier, 200-litre drum'), 40, 40, 2, 38, 700, 26600],
            [t('20', '20'), t('بسته آب‌بند K-201', 'K-201 seal kit'), 6, 6, 0, 6, 1800, 10800],
            [t('جمع', 'Total'), blank, blank, blank, blank, blank, blank, 37400],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'دو بشکه در ورودی نشتی داشتند و همان‌جا به راننده برگردانده شدند؛ پس اصلاً وارد GRN نمی‌شوند. بسته‌های آب‌بند درجه بحرانی A دارند و طبق داده پایه، بازرسی کیفی دقیق لازم دارند؛ پس به **موجودی در انتظار بازرسی** رسید می‌شوند.',
            en: 'Two drums were leaking at the gate and were handed straight back to the driver, so they never enter the GRN. The seal kits are criticality A and, per the master data, need a detailed quality inspection, so they are received into **quality-inspection stock**.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'سطح بازرسی بر اساس درجه بحرانی بودن (رویه فرضی مسار پترولیوم)',
            en: 'Inspection level by criticality (Masar Petroleum’s illustrative procedure)',
          },
          head: [t('درجه', 'Criticality'), t('بازرسی در رسید', 'Inspection at receipt'), t('مدارک', 'Documents')],
          rows: [
            [
              t('A', 'A'),
              t(
                'کنترل کامل توسط کنترل کیفیت؛ اغلب بازرسی شخص ثالث در کارخانه سازنده پیش از ارسال',
                'Full check by QC; often third-party inspection at the manufacturer before shipment',
              ),
              t('همه گواهی‌ها، از نوعی که سفارش خواسته است', 'All certificates, of the type the PO requires'),
            ],
            [
              t('B', 'B'),
              t('نمونه‌برداری و کنترل ابعادی', 'Sampling and dimensional checks'),
              t('گواهی انطباق یا گواهی آزمون', 'Certificate of conformity or test certificate'),
            ],
            [t('C', 'C'), t('شمارش و کنترل ظاهری', 'Count and visual check'), t('برگه تحویل', 'Delivery note')],
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'اندازه‌گیری طول لوله‌ها برای PO-0533', en: 'The pipe tally for PO-0533' },
          text: {
            fa: 'سفارش: 1,400 متر لوله جداری `9-5/8"` گرید L80 به قیمت هر متر 250، با حد مجاز تحویل 2٪. تحویل: 118 شاخه با جمع طول اندازه‌گیری‌شده 1,416 متر (1.1٪ بیشتر از سفارش، در حد مجاز). در بازرسی، رزوه 3 شاخه به طول 36 متر آسیب دیده بود و رد شد. پذیرفته: 115 شاخه، 1,380 متر. ارزش GRN: 1,380 × 250 = 345,000. 20 متر باقی‌مانده سفارش با شاخه‌های جایگزین تحویل می‌شود.',
            en: 'Ordered: 1,400 m of `9-5/8"` L80 casing at 250 per metre, with a 2% delivery tolerance. Delivered: 118 joints with a measured total length of 1,416 m (1.1% over the order, within tolerance). Inspection found damaged threads on 3 joints totalling 36 m, which were rejected. Accepted: 115 joints, 1,380 m. GRN value: 1,380 × 250 = 345,000. The 20 m still open on the order will come as replacement joints.',
          },
        },
      ],
    },
    {
      id: 'certificates',
      title: {
        fa: 'گواهی‌ها: گواهی آزمون کارخانه (MTC) و گواهی انطباق (CoC)',
        en: 'Certificates: Mill Test Certificates (MTC) and Certificates of Conformity (CoC)',
      },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در نفت و گاز، کالای بدون مدرک کالای کامل نیست: لوله یا فلنجی که گواهی معتبر ندارد نباید در سرویس پرفشار نصب شود، حتی اگر ظاهرش بی‌عیب باشد. نوع گواهی لازم در سفارش خرید و در نمای کیفیت داده پایه کالا مشخص می‌شود.',
            en: 'In oil and gas, goods without their documents are not complete goods: a pipe or flange without a valid certificate must not go into high-pressure service, however good it looks. The certificate type required is stated on the PO and in the quality view of the material master.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'مدارک کیفی رایج در رسید کالا', en: 'Common quality documents at receipt' },
          head: [t('سند', 'Document'), t('صادرکننده', 'Issued by'), t('چه چیزی را ثابت می‌کند', 'What it proves'), t('اقلام معمول', 'Typical items')],
          rows: [
            [
              t('MTC نوع 3.1', 'MTC type 3.1'),
              t('نماینده بازرسی سازنده، مستقل از بخش تولید', 'The manufacturer’s inspection representative, independent of production'),
              t(
                'نتایج آزمون شیمیایی و مکانیکی همان ذوب یا بچ با استاندارد می‌خواند',
                'Chemical and mechanical test results of that very heat or batch meet the standard',
              ),
              t('لوله جداری و مغزی، فلنج، اتصالات، بدنه شیر', 'Casing, tubing, flanges, fittings, valve bodies'),
            ],
            [
              t('MTC نوع 3.2', 'MTC type 3.2'),
              t('نماینده سازنده به‌همراه بازرس خریدار یا بازرس رسمی', 'The manufacturer’s representative together with the purchaser’s or an official inspector'),
              t('همان نتایج 3.1، با تأیید بازرس مستقل', 'As 3.1, also validated by an independent inspector'),
              t('اقلام حیاتی پرفشار یا سرویس ترش، وقتی سفارش بخواهد', 'Critical high-pressure or sour-service items, when the PO requires it'),
            ],
            [
              t('گواهی انطباق (CoC)', 'Certificate of conformity (CoC)'),
              t('تأمین‌کننده یا سازنده', 'The supplier or manufacturer'),
              t(
                'کالا با سفارش و استاندارد مشخص‌شده انطباق دارد؛ معمولاً بدون نتایج آزمون',
                'The goods conform to the PO and the stated standard; usually without test results',
              ),
              t('ابزار دقیق، اقلام برقی، واشر، قطعات عمومی', 'Instruments, electrical items, gaskets, general spares'),
            ],
            [
              t('گواهی آنالیز (CoA)', 'Certificate of analysis (CoA)'),
              t('سازنده ماده شیمیایی', 'The chemical manufacturer'),
              t('نتایج آنالیز همان بچ (مثلاً غلظت و چگالی)', 'Analysis results for that batch (e.g. concentration, density)'),
              t('مواد شیمیایی', 'Chemicals'),
            ],
            [
              t('برگه اطلاعات ایمنی (SDS)', 'Safety data sheet (SDS)'),
              t('سازنده', 'The manufacturer'),
              t('خطرها، نگهداری، جابه‌جایی و اقدامات اضطراری', 'Hazards, storage, handling and emergency measures'),
              t('همه مواد شیمیایی', 'All chemicals'),
            ],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'انواع گواهی بر پایه استاندارد EN 10204 نام‌گذاری می‌شوند: نوع **2.1** فقط اظهارنامه انطباق و بدون نتایج آزمون است؛ نوع **2.2** نتایج آزمون غیراختصاصی (از تولید مشابه) را دارد؛ نوع **3.1** نتایج آزمون خود محصول تحویلی را دارد که نماینده بازرسی مستقل از تولید تأیید کرده است؛ و نوع **3.2** علاوه بر آن، تأیید بازرس خریدار یا بازرس رسمی را هم دارد. سفارش خرید باید نوع لازم را صریح بنویسد.',
            en: 'Certificate types are named after the EN 10204 standard: type **2.1** is a declaration of compliance with no test results; type **2.2** includes non-specific test results (from similar production); type **3.1** gives test results for the actual products delivered, validated by an inspection representative independent of production; and type **3.2** is additionally validated by the purchaser’s or an official inspector. The PO must state the required type explicitly.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: t('شماره ذوب', 'Heat number'),
              text: t(
                'شماره ذوب حک‌شده یا رنگ‌نوشته‌شده روی هر شاخه با یکی از شماره‌های ذوب در MTC یکی باشد.',
                'The heat number stamped or stencilled on each joint matches a heat number on the MTC.',
              ),
            },
            {
              title: t('استاندارد و گرید', 'Standard and grade'),
              text: t('استاندارد و گرید (مثلاً API 5CT گرید L80) با سفارش بخواند.', 'The standard and grade (e.g. API 5CT grade L80) match the PO.'),
            },
            {
              title: t('ابعاد و اتصال', 'Size and connection'),
              text: t('قطر، وزن در واحد طول و نوع اتصال با سفارش بخواند.', 'Diameter, weight per unit length and connection match the PO.'),
            },
            {
              title: t('نتایج آزمون', 'Test results'),
              text: t(
                'نتایج آزمون در محدوده استاندارد باشد؛ مثلاً برای گرید L80 نوع 1، سختی از 23 HRC بیشتر نباشد.',
                'Test results are within the standard’s limits; for example, for grade L80 type 1, hardness no higher than 23 HRC.',
              ),
            },
            {
              title: t('پوشش مقدار', 'Quantity covered'),
              text: t('همه ذوب‌ها و شاخه‌های تحویلی در گواهی‌ها پوشش داده شده باشند.', 'Every heat and joint delivered is covered by a certificate.'),
            },
            {
              title: t('اعتبار سند', 'Validity'),
              text: t(
                'نوع گواهی همان باشد که سفارش خواسته، و امضا، مهر و تاریخ داشته باشد.',
                'The certificate type is the one the PO asked for, and it is signed, stamped and dated.',
              ),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: گواهی را به بچ وصل کنید', en: 'In practice: link the certificate to the batch' },
          text: {
            fa: 'در ERP، شماره ذوب را به‌عنوان شماره بچ ثبت کنید و نسخه اسکن‌شده MTC را به همان بچ و به GRN پیوست کنید. این‌گونه وقتی یک شاخه در چاه AR-12 نصب می‌شود، می‌توان آن را تا گواهی آزمونش دنبال کرد. گواهی‌ای که فقط در یک زونکن باشد، در عمل گم شده است.',
            en: 'In the ERP, record the heat number as the batch and attach the scanned MTC to that batch and to the GRN. Then when a joint is run into well AR-12, it can be traced back to its test certificate. A certificate that lives only in a ring binder is, in practice, lost.',
          },
        },
      ],
    },
    {
      id: 'erp-grn',
      title: { fa: 'سند رسید کالا (GRN) در ERP و ثبت خودکار مالی', en: 'The GRN in the ERP and the Automatic Finance Posting' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'GRN در ERP یک سند انبار با سربرگ و ردیف‌هاست و هر ردیف به یک ردیف سفارش خرید ارجاع می‌دهد. GRN مربوط به PO-0518 این اطلاعات را دارد:',
            en: 'In the ERP a GRN is a material document with a header and lines, each line referring to a PO line. The GRN for PO-0518 holds:',
          },
        },
        {
          type: 'table',
          caption: { fa: 'فیلدهای سند GRN-5000231', en: 'Fields of document GRN-5000231' },
          head: [t('فیلد', 'Field'), t('مقدار', 'Value')],
          rows: [
            [t('شماره سند', 'Document number'), t('GRN-5000231', 'GRN-5000231')],
            [
              t('تاریخ سند و تاریخ ثبت', 'Document and posting date'),
              t('تاریخ تحویل؛ تاریخ ثبت، دوره مالی را تعیین می‌کند', 'The delivery date; the posting date decides the accounting period'),
            ],
            [t('سفارش و ردیف', 'PO and lines'), t('PO-0518، ردیف‌های 10 و 20', 'PO-0518, lines 10 and 20')],
            [t('تأمین‌کننده', 'Vendor'), t('V-2041', 'V-2041')],
            [t('برگه تحویل', 'Delivery note'), t('DN-88412', 'DN-88412')],
            [
              t('کالا، مقدار و واحد', 'Material, quantity and unit'),
              t(
                '`10006120` امولسیون‌شکن: 38 بشکه؛ `10006355` بسته آب‌بند K-201: 6 عدد',
                '`10006120` demulsifier: 38 drums; `10006355` K-201 seal kit: 6 each',
              ),
            ],
            [
              t('سایت، محل و وضعیت موجودی', 'Site, location and stock status'),
              t(
                'MP10/1003 آزاد (امولسیون‌شکن)؛ MP10/1001 در انتظار بازرسی (آب‌بند)',
                'MP10/1003 unrestricted (demulsifier); MP10/1001 quality inspection (seal kits)',
              ),
            ],
            [t('بچ', 'Batch'), t('DM-2611', 'DM-2611')],
            [t('دریافت‌کننده و تأییدکننده', 'Received and approved by'), t('انباردار؛ سرپرست انبار برای استثناها', 'Storekeeper; warehouse supervisor for exceptions')],
          ],
        },
        {
          type: 'formula',
          text: { fa: 'ارزش GRN = مقدار پذیرفته‌شده × قیمت خالص واحد در سفارش خرید', en: 'GRN value = accepted quantity × net unit price on the PO' },
          note: {
            fa: 'اگر هزینه حمل یا ترخیص در سفارش پیش‌بینی شده باشد، ERP آن را هم به ارزش رسید اضافه می‌کند.',
            en: 'If freight or clearance costs are planned on the PO, the ERP adds them to the receipt value as well.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت خودکار مالی GRN-5000231', en: 'Automatic Finance entry for GRN-5000231' },
          entries: [
            {
              date: { fa: 'ثبت رسید کالا (GRN)', en: 'GRN posted' },
              lines: [
                { account: ac.chemicals, debit: 26600 },
                { account: ac.spares, debit: 10800 },
                { account: ac.grir, credit: 37400 },
              ],
              memo: {
                fa: '38 × 700 و 6 × 1,800. موجودی در انتظار بازرسی هم ارزش‌گذاری می‌شود؛ فقط قابل حواله نیست.',
                en: '38 × 700 and 6 × 1,800. Quality-inspection stock is valued too; it just cannot be issued.',
              },
            },
          ],
        },
        {
          type: 'steps',
          items: [
            { title: t('انباردار', 'Storekeeper'), text: t('شمارش، ثبت GRN و قرار دادن کالا در جایگاه.', 'Counts, posts the GRN and puts the goods away.') },
            {
              title: t('بازرس کنترل کیفیت', 'QC inspector'),
              text: t(
                'بازرسی، ثبت نتیجه و آزادسازی یا رد موجودی در انتظار بازرسی.',
                'Inspects, records the result, and releases or rejects quality-inspection stock.',
              ),
            },
            {
              title: t('سرپرست انبار', 'Warehouse supervisor'),
              text: t(
                'تأیید استثناها: تحویل خارج از حد مجاز، رسید اضطراری بدون سفارش، برگشت به فروشنده.',
                'Approves exceptions: out-of-tolerance deliveries, emergency receipts without a PO, returns to vendor.',
              ),
            },
            {
              title: t('کارشناس خرید', 'Buyer'),
              text: t(
                'پیگیری کسری، کالای ردشده و گزارش عدم انطباق با تأمین‌کننده.',
                'Follows up shortages, rejected goods and nonconformance reports with the vendor.',
              ),
            },
            {
              title: t('حسابداری پرداختنی‌ها', 'Accounts payable'),
              text: t('ثبت فاکتور با تطبیق سه‌طرفه سفارش، GRN و فاکتور.', 'Posts the invoice with the three-way match of PO, GRN and invoice.'),
            },
            {
              title: t('حسابدار موجودی', 'Inventory accountant'),
              text: t('تحلیل ماهانه اقلام باز حساب GR/IR و پیگیری اقلام کهنه.', 'Analyses open GR/IR items monthly and chases old ones.'),
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'مانده **بستانکار** حساب واسط GR/IR یعنی کالایی رسیده که هنوز فاکتور نشده (یک بدهی تحقق‌یافته)؛ مانده **بدهکار** یعنی فاکتوری رسیده که کالایش هنوز نرسیده است. در پایان هر ماه، این مانده‌ها به تفکیک سفارش بررسی می‌شوند؛ قلم بازی که چند ماه مانده باشد، معمولاً یعنی GRN یا فاکتور اشتباه، یا کالایی که پس داده شده اما سند برگشت آن ثبت نشده است.',
            en: 'A **credit** balance on GR/IR means goods received but not yet invoiced (an accrued liability); a **debit** balance means an invoice has arrived for goods not yet received. At each month-end these balances are reviewed by PO; an item open for months usually means a wrong GRN or invoice, or goods sent back without a return document.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل (IFRS و ایران)', en: 'In practice (IFRS and Iran)' },
          text: {
            fa: 'طبق IAS 2، بهای تمام‌شده موجودی شامل قیمت خرید، حقوق گمرکی و مالیات‌های غیرقابل استرداد، و هزینه حمل و جابه‌جایی تا محل فعلی است. مالیات بر ارزش افزوده قابل استرداد جزو بهای کالا نیست و جداگانه به‌عنوان طلب از سازمان امور مالیاتی ثبت می‌شود. برای کالای وارداتی، حقوق ورودی و هزینه‌های ترخیص باید به بهای کالا اضافه شوند: یا از ابتدا در سفارش پیش‌بینی می‌شوند، یا بعداً با فاکتور هزینه‌های جانبی. نرخ‌ها و مقررات را از قوانین روز بررسی کنید.',
            en: 'Under IAS 2, the cost of inventory includes the purchase price, import duties and non-recoverable taxes, and transport and handling to bring it to its present location. Recoverable VAT is not part of the cost; it is recorded separately as a receivable from the tax authority. For imported goods, duties and clearance costs must be added to the cost, either planned on the PO from the start or added later with the invoice for those costs. Check current rates and rules in the latest regulations.',
          },
        },
      ],
    },
    {
      id: 'quarantine-return',
      title: { fa: 'قرنطینه، رد کالا و برگشت به فروشنده', en: 'Quarantine, Rejection and Return to Vendor' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'وقتی کالا قبول نمی‌شود، یا بازرسی‌اش هنوز تمام نشده، انبار باید آن را از کالای سالم جدا کند: هم **فیزیکی** (محوطه قرنطینه با حصار و برچسب) و هم **در سیستم** (وضعیت موجودی). در ERP چند گزینه وجود دارد:',
            en: 'When goods are not accepted, or their inspection is not finished, the warehouse must keep them apart from good stock, both **physically** (a fenced, labelled quarantine area) and **in the system** (stock status). The ERP offers several options:',
          },
        },
        {
          type: 'table',
          head: [t('گزینه', 'Option'), t('چه وقت', 'When'), t('قابل حواله؟', 'Can be issued?'), t('اثر مالی', 'Finance effect')],
          rows: [
            [t('GRN به موجودی آزاد', 'GRN to unrestricted stock'), t('همه کنترل‌ها قبول شده', 'Every check passed'), t('بله', 'Yes'), t('بدهکار موجودی، بستانکار GR/IR', 'Dr Inventory, Cr GR/IR')],
            [
              t('GRN به موجودی در انتظار بازرسی', 'GRN to quality-inspection stock'),
              t('بازرسی، گواهی یا آزمون آزمایشگاهی در جریان است', 'Inspection, certificates or a lab test pending'),
              t('خیر', 'No'),
              t('بدهکار موجودی، بستانکار GR/IR', 'Dr Inventory, Cr GR/IR'),
            ],
            [
              t('GRN به موجودی مسدود', 'GRN to blocked stock'),
              t('آسیب یا تردید، در انتظار تصمیم', 'Damage or doubt, decision pending'),
              t('خیر', 'No'),
              t('بدهکار موجودی، بستانکار GR/IR', 'Dr Inventory, Cr GR/IR'),
            ],
            [
              t('عدم پذیرش در ورودی', 'Refused at the gate'),
              t('کالای کاملاً اشتباه، آسیب آشکار یا بدون سفارش', 'Clearly wrong item, obvious damage, or no PO'),
              t('موضوعیت ندارد', 'Not applicable'),
              t('ثبتی ندارد؛ کالا با همان کامیون برمی‌گردد', 'No posting; the goods go back on the same truck'),
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: {
            fa: 'برخی ERPها یک «رسید بدون ارزش در انتظار پذیرش» هم دارند که فقط پس از قبول کالا ثبت مالی می‌کند. هر روشی که شرکت انتخاب کند، باید در رویه رسید کالا مکتوب و ثابت باشد تا همه انبارها یکسان عمل کنند.',
            en: 'Some ERPs also offer a non-valued “receipt pending acceptance” that posts to Finance only once the goods are accepted. Whichever method the company chooses must be written into the receiving procedure and applied the same way in every store.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: t('برچسب و جداسازی', 'Tag and segregate'),
              text: t(
                'کالا با برچسب «قرنطینه» به محوطه قرنطینه می‌رود و در ERP به موجودی مسدود یا در انتظار بازرسی منتقل می‌شود.',
                'The goods get a “quarantine” tag and go to the quarantine area; in the ERP they move to blocked or quality-inspection stock.',
              ),
            },
            {
              title: t('گزارش عدم انطباق (NCR)', 'Nonconformance report (NCR)'),
              text: t('کنترل کیفیت NCR را با شرح ایراد و عکس صادر می‌کند.', 'Quality control raises an NCR describing the defect, with photos.'),
            },
            {
              title: t('اطلاع به تأمین‌کننده', 'Notify the vendor'),
              text: t('کارشناس خرید NCR را برای تأمین‌کننده می‌فرستد.', 'The buyer sends the NCR to the vendor.'),
            },
            {
              title: t('تصمیم', 'Decision'),
              text: t(
                'کنترل کیفیت و مهندسی تصمیم می‌گیرند: برگشت به فروشنده، تعمیر توسط فروشنده، یا پذیرش با مجوز کتبی انحراف (Concession). انباردار هرگز به‌تنهایی کالای نامنطبق را نمی‌پذیرد.',
                'QC and engineering decide: return to vendor, repair by the vendor, or acceptance under a written concession. A storekeeper never accepts nonconforming goods alone.',
              ),
            },
            {
              title: t('ثبت در ERP', 'Post in the ERP'),
              text: t(
                'آزادسازی به موجودی آزاد، یا سند برگشت به فروشنده، یا اسقاط با تأیید.',
                'Release to unrestricted stock, a return-to-vendor document, or scrapping with approval.',
              ),
            },
            {
              title: t('بستن NCR', 'Close the NCR'),
              text: t(
                'NCR بسته و نتیجه در ارزیابی عملکرد تأمین‌کننده ثبت می‌شود.',
                'The NCR is closed and the outcome recorded in the vendor’s performance rating.',
              ),
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'در بازرسی دقیق بسته‌های آب‌بند PO-0518 معلوم شد جنس اورینگ‌های 2 بسته FKM است، در حالی که مشخصات سفارش HNBR خواسته بود. این 2 بسته با سند برگشت به فروشنده پس فرستاده شد و 4 بسته دیگر آزاد شدند. سپس فاکتور تأمین‌کننده برای 38 بشکه و 4 بسته رسید: 26,600 + 7,200 = 33,800.',
            en: 'Detailed inspection of the PO-0518 seal kits found that the O-rings in 2 kits were FKM, while the order specified HNBR. Those 2 kits were sent back with a return-to-vendor document and the other 4 were released. The vendor then invoiced 38 drums and 4 kits: 26,600 + 7,200 = 33,800.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'برگشت به فروشنده و ثبت فاکتور', en: 'Return to vendor and invoice posting' },
          entries: [
            {
              date: { fa: 'برگشت به فروشنده', en: 'Return to vendor' },
              lines: [
                { account: ac.grir, debit: 3600 },
                { account: ac.spares, credit: 3600 },
              ],
              memo: { fa: '2 بسته × 1,800؛ همین بخش از GRN برگردانده می‌شود.', en: '2 kits × 1,800; reverses that part of the GRN.' },
            },
            {
              date: { fa: 'فاکتور تأمین‌کننده (پس از تطبیق سه‌طرفه)', en: 'Vendor invoice (after the three-way match)' },
              lines: [
                { account: ac.grir, debit: 33800 },
                { account: ac.ap, credit: 33800 },
              ],
            },
          ],
        },
        {
          type: 'tAccounts',
          title: { fa: 'حساب واسط GR/IR برای PO-0518', en: 'GR/IR for PO-0518' },
          accounts: [{ name: ac.grir, debits: [3600, 33800], credits: [37400] }],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباهات رایج', en: 'Common mistakes' },
          text: {
            fa: 'ثبت GRN بر اساس عدد برگه تحویل و بدون شمارش؛ گذاشتن کالای مشکوک در موجودی آزاد «تا وقتی کنترل کیفیت برسد»؛ پذیرش کالای جایگزین یا نامنطبق توسط انباردار؛ پس دادن فیزیکی کالا بدون سند برگشت، که موجودی و GR/IR را غلط می‌کند؛ ثبت GRN با تأخیر و پس از فاکتور، که بستن ماه را به هم می‌ریزد؛ و ثبت رسید مستقیم چاه در موجودی، یا برعکس.',
            en: 'Posting the GRN from the delivery note figure without counting; putting doubtful goods into unrestricted stock “until QC turns up”; a storekeeper accepting substitute or nonconforming goods; physically sending goods back without a return document, which leaves stock and GR/IR wrong; posting the GRN late, after the invoice, which upsets the month-end close; and posting a direct-to-well receipt into stock, or the other way round.',
          },
        },
      ],
    },
    {
      id: 'direct-afe',
      title: {
        fa: 'رسید مستقیم به چاه یا AFE و مستندات کاست ریکاوری',
        en: 'Receipts Charged Directly to a Well or AFE, and Cost-Recovery Documentation',
      },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'بعضی کالاها برای یک چاه یا پروژه مشخص خریده می‌شوند. در این حالت ردیف سفارش خرید یک **تخصیص حساب** (Account assignment) دارد: AFE یا عنصر WBS، دستور کار یا مرکز هزینه. هنگام GRN، ERP هزینه را **مستقیم** روی همان محل هزینه می‌نشاند و موجودی آزادی ایجاد نمی‌شود. لوله جداری PO-0533 برای چاه AR-12 همین‌طور خریده شده است.',
            en: 'Some materials are bought for a specific well or project. The PO line then carries an **account assignment**: an AFE or WBS element, a work order or a cost centre. At the GRN, the ERP charges the cost **directly** to that cost object and no free stock is created. The PO-0533 casing for well AR-12 was bought this way.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'رسید به موجودی', en: 'Receipt into stock' },
            items: [
              t('سفارش بدون تخصیص حساب', 'PO without account assignment'),
              t('GRN موجودی را افزایش می‌دهد', 'The GRN increases stock'),
              t('هزینه چاه فقط هنگام حواله شناسایی می‌شود', 'The well is charged only at goods issue'),
              t('برای اقلام عمومی که چند چاه از آن مصرف می‌کنند', 'For common items used by many wells'),
            ],
          },
          right: {
            title: { fa: 'رسید مستقیم به AFE', en: 'Direct receipt to an AFE' },
            items: [
              t('سفارش با تخصیص به AFE یا WBS', 'PO assigned to an AFE or WBS'),
              t('GRN هزینه را مستقیم روی چاه می‌نشاند', 'The GRN charges the well directly'),
              t('کالا تا نصب در چاه فیزیکی ردیابی می‌شود (انبار سر دکل)', 'The goods are still tracked physically until run in the hole (rig-site store)'),
              t('مازاد باید با سند برگشت به موجودی برگردد', 'Any surplus must come back to stock with a return document'),
            ],
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های خودکار لوله جداری چاه AR-12', en: 'Automatic entries for the AR-12 casing' },
          entries: [
            {
              date: { fa: 'GRN مستقیم به AFE-012', en: 'GRN directly to AFE-012' },
              lines: [
                { account: ac.wellAR12, debit: 345000 },
                { account: ac.grir, credit: 345000 },
              ],
              memo: { fa: '1,380 متر × 250', en: '1,380 m × 250' },
            },
            {
              date: { fa: 'فاکتور تأمین‌کننده', en: 'Vendor invoice' },
              lines: [
                { account: ac.grir, debit: 345000 },
                { account: ac.ap, credit: 345000 },
              ],
              memo: { fa: 'فاکتور برای 1,380 متر پذیرفته‌شده', en: 'Invoice for the 1,380 m accepted' },
            },
            {
              date: { fa: 'برگشت مازاد به انبار مرکزی', en: 'Surplus returned to the Central Warehouse' },
              lines: [
                { account: ac.octg, debit: 6000 },
                { account: ac.wellAR12, credit: 6000 },
              ],
              memo: {
                fa: 'پس از نصب لوله‌ها، 2 شاخه به طول 24 متر استفاده نشد: 24 × 250 = 6,000 با سند برگشت از سر دکل به محوطه لوله برگشت.',
                en: 'After the casing was run, 2 joints totalling 24 m were not used: 24 × 250 = 6,000 came back from the rig site to the pipe yard with a return document.',
              },
            },
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'هزینه خالص مواد چاه = رسید مستقیم به AFE − مازاد برگشتی = 345,000 − 6,000 = 339,000',
            en: 'Net material cost of the well = direct receipts to the AFE − surplus returned = 345,000 − 6,000 = 339,000',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'ERP مبلغ سفارش را از لحظه صدور به‌صورت **تعهد** روی AFE نشان می‌دهد و با GRN آن را به هزینه واقعی تبدیل می‌کند. اگر بودجه مصوب لوله جداری در AFE-012 برابر 360,000 باشد، پس از این ثبت‌ها 360,000 − 339,000 = 21,000 باقی می‌ماند؛ اما تعهد 20 متر باقی‌مانده سفارش (20 × 250 = 5,000) هم هنوز روی AFE است، پس بودجه آزاد 21,000 − 5,000 = 16,000 است. اگر هزینه از بودجه AFE بیشتر شود، قرارداد عملیات مشترک معمولاً **AFE تکمیلی** با تأیید شرکا می‌خواهد.',
            en: 'The ERP shows the PO value as a **commitment** on the AFE from the moment the PO is issued, and turns it into actual cost at the GRN. If AFE-012’s approved budget for casing is 360,000, then after these entries 360,000 − 339,000 = 21,000 remains; but the commitment for the 20 m still due on the PO (20 × 250 = 5,000) is also on the AFE, so the free budget is 21,000 − 5,000 = 16,000. If spending would exceed the AFE, the joint operating agreement normally requires a **supplementary AFE** approved by the partners.',
          },
        },
        { type: 'h', text: { fa: 'بسته مستندات کاست ریکاوری', en: 'The cost-recovery documentation pack' } },
        {
          type: 'list',
          items: [
            t('AFE مصوب و بودجه آن', 'The approved AFE and its budget'),
            t('درخواست خرید و سفارش خرید با تأییدها', 'The purchase requisition and PO with their approvals'),
            t('برگه تحویل، بارنامه و رسید کالا (GRN)', 'The delivery note, waybill and GRN'),
            t('گزارش بازرسی و NCRهای بسته‌شده', 'The inspection report and closed NCRs'),
            t('MTC یا CoC متصل به شماره ذوب یا بچ', 'MTCs or CoCs linked to heat numbers or batches'),
            t('فاکتور تأمین‌کننده و نتیجه تطبیق سه‌طرفه', 'The vendor invoice and the three-way match result'),
            t('مدرک پرداخت', 'Proof of payment'),
            t('اسناد گمرکی برای کالای وارداتی', 'Customs documents for imported goods'),
            t(
              'فهرست شاخه‌های نصب‌شده در چاه (Running tally) و سند برگشت مازاد',
              'The running tally of joints installed in the well and the surplus return document',
            ),
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'سهم شریک', en: 'The partner’s share' },
          text: {
            fa: 'فرض کنید سهم مشارکت شریک مسار پترولیوم در میدان آریا 40٪ باشد (عددی فرضی). در صورت‌حساب عملیات مشترک، سهم شریک از هزینه خالص مواد چاه 40٪ × 339,000 = 135,600 است. اگر مازاد برگشت داده نمی‌شد، هزینه چاه 345,000 می‌ماند و از شریک 40٪ × 6,000 = 2,400 بیشتر مطالبه می‌شد؛ همان چیزی که حسابرسان شریک به‌دنبال آن می‌گردند.',
            en: 'Suppose Masar Petroleum’s partner holds a 40% working interest in the Arya field (an illustrative figure). In the joint-venture billing, the partner’s share of the well’s net material cost is 40% × 339,000 = 135,600. Had the surplus not been returned, the well would still show 345,000 and the partner would be overcharged 40% × 6,000 = 2,400, exactly what partner auditors look for.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: قراردادهای نفتی', en: 'In practice: petroleum contracts' },
          text: {
            fa: 'در قراردادهای مشارکت در تولید، قراردادهای بیع متقابل گذشته و قرارداد نفتی ایران (IPC)، هزینه‌ای که برای بازیافت ادعا می‌شود معمولاً باید واقعاً تحمل شده، برای عملیات لازم، به مرحله و محل درست (مثلاً توسعه چاه AR-12) منظور شده و با مدارک پشتیبانی شده باشد. جزئیات و درصدها در روش حسابداری هر قرارداد متفاوت است؛ همیشه متن قرارداد خود را ملاک قرار دهید.',
            en: 'Under production sharing contracts, the earlier buy-back contracts and the Iran Petroleum Contract (IPC), a cost claimed for recovery generally has to be actually incurred, necessary for operations, booked to the right phase and object (for example the development of well AR-12) and supported by documents. Details and percentages differ in each contract’s accounting procedure; always go by your own contract.',
          },
        },
      ],
    },
    {
      id: 'exercises',
      title: { fa: 'تمرین‌ها', en: 'Exercises' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'این تمرین‌ها از ساده به دشوار مرتب شده‌اند. اول خودتان حل کنید، بعد راه‌حل را ببینید.',
            en: 'These exercises go from easy to hard. Try each one yourself before opening the solution.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'مقدار و ارزش GRN', en: 'GRN quantity and value' },
          difficulty: 'easy',
          problem: {
            fa: 'سفارش PO-0602 برای انبار میدان شامل 120 المنت فیلتر به قیمت هر عدد 30 و 10 گیج فشار به قیمت هر عدد 85 است. در تحویل، 120 فیلتر آمده، اما 6 فیلتر در جعبه‌های له‌شده بودند و در ورودی پس داده شدند. هر 10 گیج سالم رسیده‌اند، ولی یکی گواهی کالیبراسیون ندارد؛ پس آن یکی به موجودی در انتظار بازرسی و 9 گیج دیگر به موجودی آزاد می‌روند. (الف) مقدار و ارزش GRN هر ردیف چقدر است؟ (ب) ثبت خودکار مالی را بنویسید. (فیلترها در کلاس اقلام مصرفی و گیج‌ها در کلاس قطعات یدکی‌اند.)',
            en: 'PO-0602 for the Field Warehouse covers 120 filter elements at 30 each and 10 pressure gauges at 85 each. On delivery, 120 filters arrive, but 6 are in crushed boxes and are refused at the gate. All 10 gauges arrive in good order, but one has no calibration certificate, so it goes to quality-inspection stock and the other 9 to unrestricted stock. (a) What are the GRN quantity and value for each line? (b) Write the automatic Finance entry. (Filters are in the consumables class, gauges in the spare parts class.)',
          },
          hint: {
            fa: 'کالایی که در ورودی پس داده می‌شود وارد GRN نمی‌شود؛ کالای در انتظار بازرسی وارد می‌شود و ارزش هم دارد.',
            en: 'Goods refused at the gate never enter the GRN; quality-inspection stock does, and it is valued.',
          },
          solution: [
            {
              type: 'table',
              head: [t('ردیف', 'Line'), t('مقدار GRN', 'GRN quantity'), t('قیمت', 'Price'), t('ارزش', 'Value'), t('وضعیت موجودی', 'Stock status')],
              numericCols: [1, 2, 3],
              rows: [
                [t('فیلتر', 'Filters'), 114, 30, 3420, t('آزاد', 'Unrestricted')],
                [t('گیج فشار', 'Pressure gauges'), 10, 85, 850, t('9 آزاد، 1 در انتظار بازرسی', '9 unrestricted, 1 quality inspection')],
                [t('جمع', 'Total'), blank, blank, 4270, blank],
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'ثبت GRN', en: 'GRN posted' },
                  lines: [
                    { account: ac.consumables, debit: 3420 },
                    { account: ac.spares, debit: 850 },
                    { account: ac.grir, credit: 4270 },
                  ],
                  memo: { fa: '114 × 30 و 10 × 85', en: '114 × 30 and 10 × 85' },
                },
              ],
            },
          ],
          answer: {
            fa: 'فیلتر 114 عدد به ارزش 3,420 و گیج 10 عدد به ارزش 850؛ بدهکار موجودی اقلام مصرفی 3,420 و موجودی قطعات یدکی 850، بستانکار GR/IR 4,270.',
            en: 'Filters 114 worth 3,420 and gauges 10 worth 850; Dr consumables 3,420 and spare parts 850, Cr GR/IR 4,270.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تطبیق سه‌طرفه', en: 'Three-way match' },
          difficulty: 'medium',
          problem: {
            fa: 'حسابداری پرداختنی‌ها فاکتور سفارش PO-0577 را دریافت کرده است. حد مجاز اختلاف قیمت در مسار پترولیوم 2٪ است (رویه فرضی) و مقدار فاکتور نباید از مقدار GRN بیشتر باشد. (الف) هر ردیف را تطبیق دهید و بگویید قابل پرداخت است یا مسدود. (ب) پس از GRN و پیش از فاکتور، مانده حساب GR/IR برای این سفارش چقدر بوده است؟',
            en: 'Accounts payable has received the invoice for PO-0577. Masar Petroleum’s price tolerance is 2% (an illustrative policy), and the invoiced quantity must not exceed the GRN quantity. (a) Match each line and say whether it can be paid or is blocked. (b) After the GRN and before the invoice, what was the GR/IR balance for this order?',
          },
          given: {
            head: [t('ردیف', 'Line'), t('سفارش (مقدار × قیمت)', 'PO (qty × price)'), t('GRN', 'GRN'), t('فاکتور', 'Invoice')],
            rows: [
              [t('بنتونیت (کیسه)', 'Bentonite (sacks)'), t('300 × 12', '300 × 12'), t('280 کیسه', '280 sacks'), t('300 × 12 = 3,600', '300 × 12 = 3,600')],
              [t('یاتاقان `6312-2Z`', 'Bearing `6312-2Z`'), t('10 × 54', '10 × 54'), t('10 عدد', '10 units'), t('10 × 57 = 570', '10 × 57 = 570')],
            ],
          },
          hint: {
            fa: 'GRN همیشه به قیمت سفارش ثبت می‌شود؛ مقدار فاکتور با GRN و قیمت فاکتور با سفارش مقایسه می‌شود.',
            en: 'The GRN always posts at the PO price; the invoice quantity is checked against the GRN and the invoice price against the PO.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: t('بنتونیت', 'Bentonite'),
                  text: t(
                    'فاکتور 300 کیسه است اما GRN فقط 280 کیسه. اختلاف مقدار 20 کیسه × 12 = 240؛ ردیف مسدود می‌شود تا تأمین‌کننده 20 کیسه باقی‌مانده را تحویل دهد یا اعلامیه بستانکار (Credit note) بفرستد. فقط 280 × 12 = 3,360 با GRN می‌خواند.',
                    'The invoice says 300 sacks but the GRN shows only 280. Quantity difference 20 sacks × 12 = 240; the line is blocked until the vendor delivers the remaining 20 sacks or sends a credit note. Only 280 × 12 = 3,360 matches the GRN.',
                  ),
                },
                {
                  title: t('یاتاقان', 'Bearings'),
                  text: t(
                    'مقدار می‌خواند، اما قیمت 57 به‌جای 54 است: (57 − 54) ÷ 54 = 5.6٪، بیشتر از حد مجاز 2٪. اختلاف 10 × 3 = 30؛ ردیف تا تأیید کارشناس خرید یا اصلاح فاکتور مسدود است.',
                    'The quantity matches, but the price is 57 instead of 54: (57 − 54) ÷ 54 = 5.6%, above the 2% tolerance. Difference 10 × 3 = 30; the line is blocked until the buyer approves or the invoice is corrected.',
                  ),
                },
                {
                  title: t('(ب) مانده GR/IR', '(b) GR/IR balance'),
                  text: t(
                    'GRN به قیمت سفارش ثبت شده است: 280 × 12 + 10 × 54 = 3,360 + 540 = 3,900 بستانکار.',
                    'The GRN posted at PO prices: 280 × 12 + 10 × 54 = 3,360 + 540 = 3,900 credit.',
                  ),
                },
              ],
            },
            {
              type: 'table',
              head: [t('ردیف', 'Line'), t('GRN (به قیمت سفارش)', 'GRN (at PO price)'), t('فاکتور', 'Invoice'), t('اختلاف', 'Difference'), t('نتیجه', 'Result')],
              numericCols: [1, 2, 3],
              rows: [
                [t('بنتونیت', 'Bentonite'), 3360, 3600, 240, t('مسدود: مقدار', 'Blocked: quantity')],
                [t('یاتاقان', 'Bearings'), 540, 570, 30, t('مسدود: قیمت', 'Blocked: price')],
                [t('جمع', 'Total'), 3900, 4170, 270, blank],
              ],
            },
          ],
          answer: {
            fa: 'هر دو ردیف مسدودند (بنتونیت به دلیل مقدار، یاتاقان به دلیل اختلاف قیمت 5.6٪)؛ مانده GR/IR پیش از فاکتور 3,900 بستانکار بوده است.',
            en: 'Both lines are blocked (bentonite on quantity, bearings on a 5.6% price difference); the GR/IR balance before the invoice was a 3,900 credit.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'کنترل گواهی آزمون کارخانه', en: 'Checking the mill test certificates' },
          difficulty: 'medium',
          problem: {
            fa: 'سفارش PO-0590 برای انبار مرکزی (کالای انباری): لوله مغزی `3-1/2"` گرید L80 نوع 1، به قیمت هر متر 60، با گواهی EN 10204 نوع 3.1. سه بسته رسیده است (جدول). MTC تأمین‌کننده ذوب‌های H-7710 و H-7711 را با سختی 21.5 و 22.4 HRC پوشش می‌دهد و ذوب H-7712 را هم دارد که اصلاً تحویل نشده است. حد سختی L80 نوع 1 حداکثر 23 HRC است. (الف) تصمیم شما برای هر بسته چیست؟ (ب) ارزش GRN را به تفکیک وضعیت موجودی حساب کنید و ثبت خودکار را بنویسید (مسار پترولیوم کالای مشکوک را به موجودی در انتظار بازرسی رسید می‌کند).',
            en: 'PO-0590 for the Central Warehouse (stock item): `3-1/2"` L80 type 1 tubing at 60 per metre, with an EN 10204 type 3.1 certificate. Three bundles have arrived (table). The vendor’s MTC covers heats H-7710 and H-7711 with hardness of 21.5 and 22.4 HRC, and also lists heat H-7712, which was not delivered at all. The L80 type 1 hardness limit is 23 HRC maximum. (a) What is your decision for each bundle? (b) Work out the GRN value by stock status and write the automatic entry (Masar Petroleum receives doubtful goods into quality-inspection stock).',
          },
          given: {
            head: [t('بسته', 'Bundle'), t('شماره ذوب روی لوله', 'Heat number on pipe'), t('شاخه', 'Joints'), t('طول اندازه‌گیری‌شده (متر)', 'Measured length (m)')],
            numericCols: [2, 3],
            rows: [
              [1, t('H-7710', 'H-7710'), 40, 384],
              [2, t('H-7711', 'H-7711'), 40, 386],
              [3, t('H-7719', 'H-7719'), 20, 192],
            ],
          },
          hint: {
            fa: 'شماره ذوب روی لوله باید در MTC باشد. ذوبی که در MTC هست ولی تحویل نشده، در پذیرش اثری ندارد اما باید به تأمین‌کننده گزارش شود.',
            en: 'The heat number on the pipe must appear on the MTC. A heat on the MTC that was not delivered does not affect acceptance, but should be reported to the vendor.',
          },
          solution: [
            {
              type: 'table',
              head: [t('بسته', 'Bundle'), t('کنترل', 'Check'), t('تصمیم', 'Decision'), t('طول (متر)', 'Length (m)'), t('ارزش', 'Value')],
              numericCols: [3, 4],
              rows: [
                [1, t('H-7710 در MTC هست؛ سختی 21.5، کمتر از 23', 'H-7710 is on the MTC; hardness 21.5, below 23'), t('پذیرش، موجودی آزاد', 'Accept, unrestricted'), 384, 23040],
                [2, t('H-7711 در MTC هست؛ سختی 22.4، کمتر از 23', 'H-7711 is on the MTC; hardness 22.4, below 23'), t('پذیرش، موجودی آزاد', 'Accept, unrestricted'), 386, 23160],
                [
                  3,
                  t('H-7719 در MTC نیست', 'H-7719 is not on the MTC'),
                  t('موجودی در انتظار بازرسی، NCR و درخواست MTC', 'Quality-inspection stock, NCR, request the MTC'),
                  192,
                  11520,
                ],
                [t('جمع', 'Total'), blank, blank, 962, 57720],
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'ثبت GRN', en: 'GRN posted' },
                  lines: [
                    { account: ac.octg, debit: 57720 },
                    { account: ac.grir, credit: 57720 },
                  ],
                  memo: {
                    fa: '46,200 آزاد (770 متر) و 11,520 در انتظار بازرسی (192 متر).',
                    en: '46,200 unrestricted (770 m) and 11,520 in quality inspection (192 m).',
                  },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'به تأمین‌کننده هم اطلاع دهید که MTC ذوب H-7712 را دارد که تحویل نشده و ذوب H-7719 را که تحویل شده ندارد؛ شاید گواهی اشتباه فرستاده شده باشد. تا رسیدن MTC درست، بسته 3 قابل حواله به چاه نیست.',
                en: 'Also tell the vendor that the MTC lists heat H-7712, which was not delivered, and omits H-7719, which was; the wrong certificate may have been sent. Until the right MTC arrives, bundle 3 cannot be issued to a well.',
              },
            },
          ],
          answer: {
            fa: 'بسته‌های 1 و 2 (770 متر، 46,200) به موجودی آزاد؛ بسته 3 (192 متر، 11,520) به موجودی در انتظار بازرسی با NCR؛ ثبت: بدهکار موجودی لوله‌های OCTG 57,720، بستانکار GR/IR 57,720.',
            en: 'Bundles 1 and 2 (770 m, 46,200) to unrestricted stock; bundle 3 (192 m, 11,520) to quality-inspection stock with an NCR; entry: Dr Inventory: OCTG 57,720, Cr GR/IR 57,720.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'لاینر چاه AR-12: از GRN تا صورت‌حساب شریک', en: 'The AR-12 liner: from GRN to partner billing' },
          difficulty: 'hard',
          problem: {
            fa: 'برای چاه AR-12، سفارش PO-0640 به مقدار 600 متر لوله `7"` (لاینر) به قیمت هر متر 200، با تخصیص مستقیم به AFE-012 و حد مجاز تحویل 3٪، صادر شده است. تحویل: 50 شاخه با طول اندازه‌گیری‌شده 606 متر. یک شاخه به طول 12.2 متر به دلیل فرورفتگی بدنه رد می‌شود. پس از نصب لاینر، 4 شاخه به طول 48.6 متر استفاده نمی‌شود و به انبار مرکزی برمی‌گردد. سهم شریک (فرضی) 40٪ است. (الف) آیا تحویل در حد مجاز است؟ (ب) مقدار و ارزش GRN چقدر است؟ (ج) ثبت‌های خودکار GRN و برگشت مازاد را بنویسید. (د) هزینه خالص مواد چاه و سهم شریک را حساب کنید و سه مدرک کلیدی کاست ریکاوری این کالا را نام ببرید.',
            en: 'For well AR-12, PO-0640 orders 600 m of `7"` pipe (liner) at 200 per metre, assigned directly to AFE-012, with a 3% delivery tolerance. Delivered: 50 joints with a measured length of 606 m. One joint of 12.2 m is rejected for a dented body. After the liner is run, 4 joints totalling 48.6 m are not used and go back to the Central Warehouse. The partner’s (illustrative) share is 40%. (a) Is the delivery within tolerance? (b) What are the GRN quantity and value? (c) Write the automatic entries for the GRN and the surplus return. (d) Work out the well’s net material cost and the partner’s share, and name three key cost-recovery documents for this material.',
          },
          hint: {
            fa: 'حد بالای تحویل = 600 × 1.03. ارزش GRN بر اساس طول پذیرفته‌شده است، نه طول سفارش.',
            en: 'Upper delivery limit = 600 × 1.03. The GRN value is based on the accepted length, not the ordered length.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: t('(الف) حد مجاز', '(a) Tolerance'),
                  text: t(
                    'حد بالا: 600 × 1.03 = 618 متر. تحویل 606 متر است، پس در حد مجاز است.',
                    'Upper limit: 600 × 1.03 = 618 m. 606 m was delivered, so it is within tolerance.',
                  ),
                },
                {
                  title: t('(ب) GRN', '(b) GRN'),
                  text: t(
                    'پذیرفته: 49 شاخه و 606 − 12.2 = 593.8 متر. ارزش GRN: 593.8 × 200 = 118,760.',
                    'Accepted: 49 joints and 606 − 12.2 = 593.8 m. GRN value: 593.8 × 200 = 118,760.',
                  ),
                },
                {
                  title: t('(د) هزینه خالص و سهم شریک', '(d) Net cost and partner’s share'),
                  text: t(
                    'مازاد: 48.6 × 200 = 9,720. هزینه خالص: 118,760 − 9,720 = 109,040. سهم شریک: 40٪ × 109,040 = 43,616.',
                    'Surplus: 48.6 × 200 = 9,720. Net cost: 118,760 − 9,720 = 109,040. Partner’s share: 40% × 109,040 = 43,616.',
                  ),
                },
                {
                  title: t('(د) مدارک', '(d) Documents'),
                  text: t(
                    'از جمله: AFE مصوب و سفارش خرید با تأییدها؛ GRN همراه با گزارش بازرسی و MTC متصل به شماره ذوب؛ فهرست شاخه‌های نصب‌شده و سند برگشت مازاد (و فاکتور با نتیجه تطبیق سه‌طرفه).',
                    'Among others: the approved AFE and the PO with approvals; the GRN with the inspection report and MTCs linked to heat numbers; the running tally of joints installed and the surplus return document (plus the invoice with its three-way match).',
                  ),
                },
              ],
            },
            {
              type: 'journal',
              title: { fa: '(ج) ثبت‌های خودکار', en: '(c) Automatic entries' },
              entries: [
                {
                  date: { fa: 'GRN مستقیم به AFE-012', en: 'GRN directly to AFE-012' },
                  lines: [
                    { account: ac.wellAR12, debit: 118760 },
                    { account: ac.grir, credit: 118760 },
                  ],
                },
                {
                  date: { fa: 'برگشت مازاد', en: 'Surplus return' },
                  lines: [
                    { account: ac.octg, debit: 9720 },
                    { account: ac.wellAR12, credit: 9720 },
                  ],
                },
              ],
            },
          ],
          answer: {
            fa: 'در حد مجاز (606 کمتر از 618)؛ GRN برابر 593.8 متر و 118,760؛ مازاد 9,720؛ هزینه خالص چاه 109,040 و سهم شریک 43,616.',
            en: 'Within tolerance (606 is below 618); GRN of 593.8 m worth 118,760; surplus 9,720; net well cost 109,040 and partner’s share 43,616.',
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
            t(
              'رسید کالا (GRN) تأیید می‌کند کالا در برابر سفارش خرید، با مقدار درست و کیفیت قابل قبول، تحویل گرفته شده است؛ خدمات با پذیرش SES تحویل گرفته می‌شوند.',
              'The GRN confirms goods were received against a PO in the right quantity and of acceptable quality; services are received by accepting an SES.',
            ),
            t(
              'دریافت یعنی کنترل در ورودی، شمارش یا اندازه‌گیری، بازرسی متناسب با درجه بحرانی بودن و رعایت حد مجاز تحویل.',
              'Receiving means gate checks, counting or measuring, inspection matched to criticality, and respecting the delivery tolerance.',
            ),
            t(
              'MTC و CoC باید با نوع خواسته‌شده در سفارش و با شماره ذوب یا بچ بخوانند و به بچ و GRN پیوست شوند.',
              'MTCs and CoCs must match the type the PO asks for and the heat or batch numbers, and be attached to the batch and the GRN.',
            ),
            t(
              'کالای مشکوک به موجودی در انتظار بازرسی یا مسدود می‌رود؛ تصمیم با کنترل کیفیت و مهندسی است و برگشت به فروشنده سند خودش را دارد.',
              'Doubtful goods go to quality-inspection or blocked stock; QC and engineering decide, and a return to vendor has its own document.',
            ),
            t(
              'ثبت خودکار GRN: بدهکار موجودی (یا محل هزینه)، بستانکار GR/IR؛ فاکتور: بدهکار GR/IR، بستانکار حساب‌های پرداختنی.',
              'Automatic GRN entry: Dr Inventory (or the cost object), Cr GR/IR; invoice: Dr GR/IR, Cr Accounts payable.',
            ),
            t(
              'رسید مستقیم به چاه یا AFE هزینه را همان لحظه روی چاه می‌نشاند؛ مازاد باید برگردد و مستندات کامل برای کاست ریکاوری و صورت‌حساب شرکا نگهداری شود.',
              'A direct receipt to a well or AFE charges the well at once; surplus must come back, and a full document trail is kept for cost recovery and partner billing.',
            ),
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: t('رسید کالا (GRN)', 'Goods received note (GRN)'),
              def: t(
                'سندی که دریافت فیزیکی کالا در برابر سفارش خرید را تأیید و موجودی و دفاتر مالی را به‌روز می‌کند.',
                'The document that confirms physical receipt of goods against a PO and updates stock and the books.',
              ),
            },
            {
              term: t('برگه ثبت خدمات (SES)', 'Service entry sheet (SES)'),
              def: t(
                'سندی که خدمات انجام‌شده را ثبت می‌کند؛ پذیرش آن معادل رسید کالا برای خدمات است.',
                'The document recording services performed; accepting it is the services equivalent of a GRN.',
              ),
            },
            {
              term: t('تطبیق سه‌طرفه', 'Three-way match'),
              def: t('مقایسه سفارش خرید، GRN و فاکتور پیش از پرداخت.', 'Comparing the PO, the GRN and the invoice before payment.'),
            },
            {
              term: t('حد مجاز تحویل', 'Delivery tolerance'),
              def: t(
                'درصدی که تحویل بیشتر یا کمتر از مقدار سفارش در آن پذیرفتنی است.',
                'The percentage by which a delivery may exceed or fall short of the ordered quantity.',
              ),
            },
            {
              term: t('شمارش کور', 'Blind count'),
              def: t(
                'شمارش در رسید بدون دیدن مقدار سفارش، تا شمارنده واقعاً بشمارد.',
                'Counting at receipt without seeing the PO quantity, so the counter actually counts.',
              ),
            },
            {
              term: t('گواهی آزمون کارخانه (MTC)', 'Mill test certificate (MTC)'),
              def: t(
                'گواهی سازنده با نتایج آزمون شیمیایی و مکانیکی یک ذوب یا بچ، معمولاً طبق EN 10204.',
                'The manufacturer’s certificate with chemical and mechanical test results for a heat or batch, usually to EN 10204.',
              ),
            },
            {
              term: t('گواهی انطباق (CoC)', 'Certificate of conformity (CoC)'),
              def: t(
                'اعلام تأمین‌کننده که کالا با سفارش و استاندارد مشخص‌شده انطباق دارد.',
                'The supplier’s statement that the goods conform to the PO and the stated standard.',
              ),
            },
            {
              term: t('شماره ذوب', 'Heat number'),
              def: t(
                'شناسه یک ذوب فولاد که روی لوله حک می‌شود و آن را به گواهی آزمونش وصل می‌کند.',
                'The identifier of a steel heat, marked on the pipe, that links it to its test certificate.',
              ),
            },
            {
              term: t('قرنطینه', 'Quarantine'),
              def: t(
                'جداسازی فیزیکی و سیستمی کالای مشکوک یا ردشده تا زمان تصمیم.',
                'Physical and system separation of doubtful or rejected goods until a decision is made.',
              ),
            },
            {
              term: t('گزارش عدم انطباق (NCR)', 'Nonconformance report (NCR)'),
              def: t('گزارش رسمی ایراد کالا نسبت به سفارش یا استاندارد.', 'A formal report of how goods fail the PO or the standard.'),
            },
            {
              term: t('مجوز انحراف (Concession)', 'Concession'),
              def: t(
                'تأیید کتبی کنترل کیفیت و مهندسی برای پذیرش کالای نامنطبق.',
                'Written approval by QC and engineering to accept nonconforming goods.',
              ),
            },
            {
              term: t('برگشت به فروشنده', 'Return to vendor'),
              def: t(
                'سندی که کالای پس‌فرستاده را از موجودی کم و ثبت GRN را به همان اندازه برمی‌گرداند.',
                'The document that takes returned goods out of stock and reverses the GRN to that extent.',
              ),
            },
            {
              term: t('تخصیص حساب', 'Account assignment'),
              def: t(
                'تعیین محل هزینه (AFE، WBS، دستور کار یا مرکز هزینه) روی ردیف سفارش، که GRN را مستقیم به آن می‌برد.',
                'The cost object (AFE, WBS, work order or cost centre) set on a PO line, which sends the GRN straight to it.',
              ),
            },
            {
              term: t('AFE تکمیلی', 'Supplementary AFE'),
              def: t(
                'مجوز اضافه‌ای که وقتی هزینه از بودجه AFE بیشتر می‌شود، با تأیید شرکا گرفته می‌شود.',
                'An additional authorisation, approved by the partners, when spending will exceed the AFE budget.',
              ),
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: {
        fa: 'وقتی GRN یک کالای انباری در برابر سفارش خرید ثبت می‌شود، ERP چه ثبتی در مالی انجام می‌دهد؟',
        en: 'When a GRN for a stock item is posted against a PO, what does the ERP post to Finance?',
      },
      options: [
        t('بدهکار GR/IR، بستانکار حساب‌های پرداختنی', 'Dr GR/IR, Cr Accounts payable'),
        t('بدهکار موجودی، بستانکار GR/IR', 'Dr Inventory, Cr GR/IR'),
        t('بدهکار موجودی، بستانکار حساب‌های پرداختنی', 'Dr Inventory, Cr Accounts payable'),
        t('بدهکار هزینه، بستانکار موجودی', 'Dr Expense, Cr Inventory'),
      ],
      answer: 1,
      explain: {
        fa: 'GRN دارایی را افزایش می‌دهد و تعهد «دریافت‌شده و فاکتورنشده» را در GR/IR می‌نشاند. ثبت بدهکار GR/IR و بستانکار حساب‌های پرداختنی مربوط به فاکتور است، نه GRN.',
        en: 'The GRN increases the asset and parks the “received, not invoiced” obligation in GR/IR. Dr GR/IR, Cr Accounts payable belongs to the invoice, not the GRN.',
      },
    },
    {
      q: {
        fa: '50 قطعه به قیمت هر عدد 120 تحویل می‌شود و 4 قطعه آسیب‌دیده در ورودی پس داده می‌شود. ارزش GRN چقدر است؟',
        en: '50 parts at 120 each are delivered and 4 damaged ones are refused at the gate. What is the GRN value?',
      },
      options: [t('6,000', '6,000'), t('480', '480'), t('5,400', '5,400'), t('5,520', '5,520')],
      answer: 3,
      explain: {
        fa: '50 − 4 = 46 قطعه پذیرفته می‌شود؛ 46 × 120 = 5,520. عدد 6,000 ارزش کل تحویل است و کالای پس‌داده‌شده هرگز وارد GRN نمی‌شود.',
        en: '50 − 4 = 46 parts are accepted; 46 × 120 = 5,520. 6,000 is the whole delivery, and refused goods never enter the GRN.',
      },
    },
    {
      q: {
        fa: 'در کدام نوع گواهی EN 10204، علاوه بر نماینده سازنده، بازرس خریدار یا بازرس رسمی هم نتایج را تأیید می‌کند؟',
        en: 'In which EN 10204 certificate type are the results validated by the purchaser’s or an official inspector as well as the manufacturer’s representative?',
      },
      options: [t('نوع 3.2', 'Type 3.2'), t('نوع 3.1', 'Type 3.1'), t('نوع 2.2', 'Type 2.2'), t('نوع 2.1', 'Type 2.1')],
      answer: 0,
      explain: {
        fa: 'نوع 3.2 تأیید دوگانه دارد. نوع 3.1 فقط تأیید نماینده بازرسی مستقل سازنده را دارد و انواع 2.1 و 2.2 نتایج آزمون اختصاصی همان محصول را ندارند.',
        en: 'Type 3.2 carries the double validation. Type 3.1 has only the manufacturer’s independent inspection representative, and types 2.1 and 2.2 do not give specific test results for the actual product.',
      },
    },
    {
      q: {
        fa: 'شماره ذوب روی یک بسته لوله در MTC تأمین‌کننده نیست. کار درست کدام است؟',
        en: 'The heat number on a pipe bundle does not appear on the vendor’s MTC. What is the right action?',
      },
      options: [
        t('پذیرش و حواله به چاه، چون گرید روی لوله درست است', 'Accept and issue it to the well, since the grade stencil is right'),
        t('اسقاط فوری بسته', 'Scrap the bundle at once'),
        t(
          'ثبت در موجودی در انتظار بازرسی یا مسدود، صدور NCR و درخواست MTC درست',
          'Post it to quality-inspection or blocked stock, raise an NCR and ask for the correct MTC',
        ),
        t('ثبت در موجودی آزاد و پیگیری گواهی در آینده', 'Post it to unrestricted stock and chase the certificate later'),
      ],
      answer: 2,
      explain: {
        fa: 'بدون گواهی معتبر، قابلیت ردیابی و اطمینان از جنس لوله وجود ندارد؛ پس کالا نباید قابل حواله باشد. اسقاط هم زودهنگام است، چون شاید فقط گواهی اشتباه فرستاده شده باشد.',
        en: 'Without a valid certificate there is no traceability or assurance of the pipe’s material, so it must not be issuable. Scrapping is premature, since the vendor may simply have sent the wrong certificate.',
      },
    },
    {
      q: {
        fa: 'در پایان ماه، جمع GRNهای یک سفارش 40,000 و جمع فاکتورهای ثبت‌شده آن 32,000 است. مانده GR/IR این سفارش چیست و چه معنایی دارد؟',
        en: 'At month-end, GRNs on a PO total 40,000 and invoices posted total 32,000. What is the PO’s GR/IR balance and what does it mean?',
      },
      options: [
        t('8,000 بدهکار؛ فاکتورشده و دریافت‌نشده', '8,000 debit; invoiced but not received'),
        t('72,000 بستانکار؛ کل بدهی به فروشنده', '72,000 credit; the total owed to the vendor'),
        t('8,000 بستانکار؛ دریافت‌شده و هنوز فاکتورنشده', '8,000 credit; received but not yet invoiced'),
        t('صفر، چون سفارش هنوز باز است', 'Zero, because the PO is still open'),
      ],
      answer: 2,
      explain: {
        fa: 'GRNها حساب را 40,000 بستانکار و فاکتورها 32,000 بدهکار کرده‌اند؛ مانده 8,000 بستانکار است، یعنی کالایی به این ارزش رسیده که هنوز فاکتورش نیامده. مانده بدهکار برعکس آن را نشان می‌داد.',
        en: 'The GRNs credited 40,000 and the invoices debited 32,000, leaving an 8,000 credit: goods worth that much have arrived without an invoice yet. A debit balance would mean the opposite.',
      },
    },
    {
      q: {
        fa: 'لوله‌ای که با سفارش دارای تخصیص به AFE-012 خریده شده، رسید می‌شود. ثبت خودکار کدام است؟',
        en: 'Pipe bought on a PO assigned to AFE-012 is received. What is the automatic entry?',
      },
      options: [
        t('بدهکار دارایی در جریان ساخت: چاه AR-12 (AFE-012)، بستانکار GR/IR', 'Dr Assets under construction: well AR-12 (AFE-012), Cr GR/IR'),
        t('بدهکار موجودی لوله‌های OCTG، بستانکار GR/IR', 'Dr Inventory: OCTG, Cr GR/IR'),
        t('بدهکار دارایی در جریان ساخت، بستانکار موجودی لوله‌های OCTG', 'Dr Assets under construction, Cr Inventory: OCTG'),
        t('تا نصب لوله در چاه ثبتی انجام نمی‌شود', 'No entry until the pipe is run in the well'),
      ],
      answer: 0,
      explain: {
        fa: 'سفارش با تخصیص حساب، GRN را مستقیم به محل هزینه می‌برد و موجودی آزادی ایجاد نمی‌کند. گزینه دوم مسیر کالای انباری است و گزینه سوم ثبت حواله از موجودی است.',
        en: 'A PO with an account assignment sends the GRN straight to the cost object and creates no free stock. The second option is the stock-item path, and the third is a goods issue from stock.',
      },
    },
    {
      q: {
        fa: 'سفارشی برای 1,000 متر لوله با حد مجاز تحویل 2٪ صادر شده است. حداکثر مقداری که بدون تأیید کارشناس خرید پذیرفتنی است چقدر است؟',
        en: 'A PO is for 1,000 m of pipe with a 2% delivery tolerance. What is the most that can be accepted without the buyer’s approval?',
      },
      options: [t('980 متر', '980 m'), t('1,002 متر', '1,002 m'), t('1,200 متر', '1,200 m'), t('1,020 متر', '1,020 m')],
      answer: 3,
      explain: {
        fa: '1,000 × 1.02 = 1,020 متر. عدد 980 حد پایین است و 1,002 از اشتباه گرفتن 2٪ با 2 متر به دست می‌آید.',
        en: '1,000 × 1.02 = 1,020 m. 980 is the lower limit, and 1,002 comes from mistaking 2% for 2 metres.',
      },
    },
    {
      q: {
        fa: 'چه کسی می‌تواند کالای نامنطبق را با «مجوز انحراف» (Concession) بپذیرد؟',
        en: 'Who can accept nonconforming goods under a concession?',
      },
      options: [
        t('انباردار، اگر کالا فوری لازم باشد', 'The storekeeper, if the goods are urgently needed'),
        t('کنترل کیفیت و مهندسی، با تأیید کتبی', 'Quality control and engineering, in writing'),
        t('راننده تأمین‌کننده', 'The vendor’s driver'),
        t('حسابداری پرداختنی‌ها هنگام ثبت فاکتور', 'Accounts payable when posting the invoice'),
      ],
      answer: 1,
      explain: {
        fa: 'پذیرش کالای نامنطبق یک تصمیم فنی با پیامد ایمنی است؛ پس فقط کنترل کیفیت و مهندسی، با تأیید مکتوب، می‌توانند آن را بپذیرند. فوریت کار هم این اختیار را به انباردار نمی‌دهد.',
        en: 'Accepting nonconforming goods is a technical decision with safety consequences, so only QC and engineering can approve it, in writing. Urgency does not give the storekeeper that authority.',
      },
    },
    {
      q: {
        fa: 'پس از نصب لوله در چاه، 3 شاخه هر کدام به طول 12 متر و قیمت هر متر 250 مازاد می‌ماند و به انبار برمی‌گردد. اثر آن بر هزینه چاه چیست؟',
        en: 'After casing is run, 3 joints of 12 m each at 250 per metre are surplus and returned to stock. What is the effect on the well’s cost?',
      },
      options: [t('افزایش 9,000', 'Up 9,000'), t('کاهش 3,000', 'Down 3,000'), t('کاهش 9,000', 'Down 9,000'), t('بدون تغییر', 'No change')],
      answer: 2,
      explain: {
        fa: '3 × 12 × 250 = 9,000؛ ثبت برگشت بدهکار موجودی لوله‌های OCTG و بستانکار هزینه چاه است، پس هزینه چاه 9,000 کم می‌شود. عدد 3,000 فقط ارزش 12 متر است.',
        en: '3 × 12 × 250 = 9,000; the return posts Dr Inventory: OCTG, Cr the well, so the well’s cost falls by 9,000. 3,000 is the value of only 12 m.',
      },
    },
    {
      q: { fa: 'تفاوت اصلی GRN و SES چیست؟', en: 'What is the main difference between a GRN and an SES?' },
      options: [
        t(
          'GRN رسید کالاست و SES پذیرش خدمات انجام‌شده؛ اثر مالی هر دو بدهکار هزینه یا دارایی و بستانکار GR/IR است',
          'A GRN receives goods and an SES accepts services performed; both debit a cost or asset and credit GR/IR',
        ),
        t('GRN سند مالی دارد و SES هرگز سند مالی ندارد', 'A GRN posts to Finance and an SES never does'),
        t('SES فقط برای کالای وارداتی است', 'An SES is only for imported goods'),
        t('GRN را تأمین‌کننده تأیید می‌کند و SES را انباردار', 'The vendor approves the GRN and the storekeeper approves the SES'),
      ],
      answer: 0,
      explain: {
        fa: 'خدمات از انبار عبور نمی‌کنند؛ «رسید» آنها پذیرش SES توسط کسی است که کار را دیده است. پذیرش SES هم، مانند GRN، همان لحظه سند مالی می‌زند.',
        en: 'Services never pass through the warehouse; their “receipt” is the acceptance of the SES by someone who saw the work. Accepting an SES posts to Finance at that moment, just like a GRN.',
      },
    },
  ],
}
