import type { Lesson } from '../../types'

const ac = {
  invField: { fa: 'موجودی مواد و قطعات: انبار میدان', en: 'Materials inventory: Field Warehouse' },
  invCentral: { fa: 'موجودی مواد و قطعات: انبار مرکزی', en: 'Materials inventory: Central Warehouse' },
  aucAR11: { fa: 'دارایی در جریان تکمیل: چاه AR-11', en: 'Assets under construction: well AR-11' },
  grir: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing account' },
  freightClr: { fa: 'حساب واسط هزینه حمل و بیمه', en: 'Freight and insurance clearing' },
  customsClr: { fa: 'حساب واسط حقوق گمرکی و ترخیص', en: 'Customs and clearance clearing' },
  inputVat: { fa: 'مالیات بر ارزش افزوده خرید', en: 'Input VAT receivable' },
  demurrage: { fa: 'هزینه دموراژ و خواب کالا', en: 'Demurrage expense' },
  bank: { fa: 'موجودی نقد (بانک)', en: 'Cash at bank' },
}

const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'expediting-logistics-receipt',
  number: 6,
  level: 'intermediate',
  minutes: 24,
  icon: 'CalendarClock',
  tone: 'gold',
  title: { fa: 'پیگیری سفارش، حمل و دریافت کالا', en: 'Expediting, Logistics and Receipt' },
  summary: {
    fa: 'سفارش صادرشده تا وقتی کالا سالم و به‌موقع در انبار یا روی دکل نرسیده، کاری انجام نداده است. در این درس پیگیری اقلام دیرتأمین، بازرسی شخص ثالث و گواهی ترخیص، حمل و ترخیص گمرکی، تحویل به انبار مرکزی یا میدان، رسید کالا و تأیید خدمات، تحویل ناقص و مرجوعی، و ثبت خودکار مالی هنگام رسید را می‌آموزید.',
    en: 'An order has achieved nothing until the goods reach the warehouse or the rig, on time and in good condition. This lesson covers expediting long-lead items, third-party inspection and release notes, shipping and customs clearance, delivery to the central or field warehouse, goods receipt and service acceptance, partial deliveries and rejections, and the automatic Finance posting at receipt.',
  },
  objectives: [
    {
      fa: 'پیگیری سفارش‌ها را بر اساس اهمیت سطح‌بندی کنید و اقلام دیرتأمین را با گزارش مراحل کلیدی دنبال کنید.',
      en: 'Plan expediting by criticality and track long-lead items with milestone reports.',
    },
    {
      fa: 'نقش بازرسی شخص ثالث، برنامه بازرسی و آزمون (ITP)، نقاط توقف و مشاهده، آزمون کارخانه‌ای و گواهی ترخیص را توضیح دهید.',
      en: 'Explain third-party inspection, the inspection and test plan (ITP), hold and witness points, the factory acceptance test and the inspection release note.',
    },
    {
      fa: 'اسناد حمل، ترخیص گمرکی و بهای تمام‌شده کالای وارداتی را به‌طور کلی شرح دهید و محاسبه کنید.',
      en: 'Describe shipping documents and customs clearance in general terms, and calculate landed cost.',
    },
    {
      fa: 'رسید کالا و تأیید خدمات را، همراه با تحویل ناقص، رد کالا و مرجوعی، درست ثبت کنید.',
      en: 'Post goods receipts and service acceptance correctly, including partial deliveries, rejections and returns.',
    },
    {
      fa: 'ثبت مالی‌ای را که ERP هنگام رسید می‌سازد بنویسید: بدهکار موجودی یا موضوع هزینه، بستانکار GR/IR.',
      en: 'Write the Finance entry the ERP generates at receipt: debit inventory or the cost object, credit GR/IR.',
    },
  ],
  sections: [
    {
      id: 'why-expediting',
      title: { fa: 'چرا پیگیری سفارش این‌قدر مهم است؟', en: 'Why Expediting Matters' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'سه هفته مانده به حفاری بخش 13-3/8 اینچ چاه AR-11، معلوم می‌شود ردیف 20 سفارش لوله جداری هنوز در کارخانه منتظر بازرسی است. اگر لوله به‌موقع نرسد، دکل باید منتظر بماند. با هزینه آماده‌به‌کار (Standby) فرضی 35,000 در روز، پنج روز انتظار یعنی 175,000؛ بیشتر از ارزش کل همان ردیف (108,000). در مقابل، یک بازدید پیگیری از کارخانه فقط چند هزار هزینه دارد.',
            en: 'Three weeks before drilling the 13-3/8" section of well AR-11, it turns out that line 20 of the casing order is still at the mill waiting for inspection. If the pipe is late, the rig waits. At an illustrative standby rate of 35,000 a day, five days of waiting cost 175,000, more than the whole line is worth (108,000). A visit to the mill to chase the order costs only a few thousand.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**پیگیری سفارش** (Expediting) یعنی پایش فعال سفارش از لحظه صدور تا تحویل، تا مطمئن شویم تأمین‌کننده طبق برنامه پیش می‌رود و اگر نمی‌رود، زود بفهمیم و اقدام کنیم. پیگیری فقط تماس گرفتن و پرسیدن «کی می‌رسد؟» نیست؛ یعنی دیدن شواهد: نقشه‌های تأییدشده، رسید مواد اولیه در کارخانه، پیشرفت ساخت و نتیجه آزمون‌ها.',
            en: '**Expediting** means actively monitoring an order from issue to delivery, to make sure the supplier is on schedule and, if not, to find out early and act. It is not just phoning to ask “when will it arrive?”; it means seeing evidence: approved drawings, raw material received at the works, manufacturing progress and test results.',
          },
        },
        { type: 'h', text: { fa: 'اقلام دیرتأمین', en: 'Long-lead items' } },
        {
          type: 'table',
          caption: {
            fa: 'زمان تأمین نمونه برای اقلام دیرتأمین بالادستی (بازه‌ها فرضی‌اند و به بازار بستگی دارند)',
            en: 'Typical lead times for upstream long-lead items (illustrative ranges; they depend on the market)',
          },
          head: [
            { fa: 'کالا', en: 'Item' },
            { fa: 'زمان تأمین (هفته)', en: 'Lead time (weeks)' },
            { fa: 'چرا طولانی است', en: 'Why it takes long' },
          ],
          rows: [
            [
              { fa: 'روتور یدکی و بسته کمپرسور گاز', en: 'Gas compressor spare rotor or package' },
              { fa: '36 تا 60', en: '36 to 60' },
              { fa: 'ساخت سفارشی؛ صف تولید سازنده اصلی (OEM)', en: 'Engineered to order; the OEM’s production queue' },
            ],
            [
              { fa: 'سرچاهی و تاج چاه (X-mas Tree)', en: 'Wellhead and Christmas tree' },
              { fa: '20 تا 36', en: '20 to 36' },
              { fa: 'قطعات آهنگری، رده فشار، آزمون‌های API 6A', en: 'Forgings, pressure rating, API 6A testing' },
            ],
            [
              { fa: 'شیرآلات بزرگ پرفشار', en: 'Large high-pressure valves' },
              { fa: '16 تا 30', en: '16 to 30' },
              { fa: 'آهنگری، ماشین‌کاری، آزمون فشار', en: 'Forging, machining, pressure testing' },
            ],
            [
              { fa: 'لوله جداری و مغزی با گرید یا اتصال ویژه', en: 'Casing and tubing in special grades or premium connections' },
              { fa: '12 تا 26', en: '12 to 26' },
              { fa: 'برنامه نورد کارخانه، عملیات حرارتی', en: 'Mill rolling schedule, heat treatment' },
            ],
            [
              { fa: 'کارتریج آب‌بند گاز خشک کمپرسور', en: 'Compressor dry gas seal cartridge' },
              { fa: '16 تا 24', en: '16 to 24' },
              { fa: 'قطعه دقیق و مختص سازنده اصلی', en: 'Precision part specific to the OEM' },
            ],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'برای اقلام دیرتأمین، برنامه را از **تاریخ نیاز** به عقب می‌چینیم تا بدانیم سفارش حداکثر تا کی باید صادر شود. اگر روتور یدکی در هفته 52 در ایستگاه تقویت فشار لازم باشد:',
            en: 'For long-lead items we schedule backwards from the **need date** to find the latest date the PO can be issued. If a spare rotor is needed at the compressor station in week 52:',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'آخرین هفته صدور سفارش = 52 − 4 (حمل و ترخیص) − 2 (بازرسی) − 30 (ساخت) − 6 (تأیید نقشه‌ها) = 10',
            en: 'Latest PO week = 52 − 4 (transport and clearance) − 2 (inspection) − 30 (manufacturing) − 6 (drawing approval) = 10',
          },
          note: {
            fa: 'هر هفته تأخیر در صدور سفارش، یک هفته از حاشیه اطمینان برنامه کم می‌کند.',
            en: 'Every week of delay in issuing the PO eats one week of schedule float.',
          },
        },
      ],
    },
    {
      id: 'expediting',
      title: { fa: 'پیگیری در عمل: سطح‌بندی و گزارش پیشرفت', en: 'Expediting in Practice: Levels and Progress Reports' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'شرکت نمی‌تواند همه سفارش‌ها را با یک شدت پیگیری کند. پس سفارش‌ها بر اساس **اهمیت** (اثر تأخیر بر تولید، حفاری یا ایمنی) و **زمان تأمین** سطح‌بندی می‌شوند:',
            en: 'A company cannot chase every order with the same intensity. Orders are therefore ranked by **criticality** (the effect of a delay on production, drilling or safety) and by **lead time**:',
          },
        },
        {
          type: 'table',
          head: [
            { fa: 'سطح', en: 'Level' },
            { fa: 'برای چه اقلامی', en: 'Applies to' },
            { fa: 'روش پیگیری', en: 'Method' },
          ],
          rows: [
            [
              { fa: 'A: بحرانی', en: 'A: critical' },
              {
                fa: 'اقلامی که تأخیرشان تولید یا حفاری را متوقف می‌کند؛ زمان تأمین بیش از 16 هفته',
                en: 'Items whose delay stops production or drilling; lead time over 16 weeks',
              },
              {
                fa: 'بازدید ماهانه از کارخانه، گزارش هفتگی تأمین‌کننده، حضور در آزمون‌های کلیدی',
                en: 'Monthly visits to the works, weekly supplier reports, attendance at key tests',
              },
            ],
            [
              { fa: 'B: مهم', en: 'B: important' },
              { fa: 'اقلام مهندسی‌شده معمولی', en: 'Standard engineered items' },
              { fa: 'پیگیری دفتری هر دو هفته، بررسی اسناد فنی', en: 'Desk follow-up every two weeks, document review' },
            ],
            [
              { fa: 'C: عادی', en: 'C: routine' },
              { fa: 'کالاهای کاتالوگی و مصرفی', en: 'Catalogue items and consumables' },
              { fa: 'تأیید پذیرش سفارش و یک یادآوری پیش از سررسید', en: 'Confirm acknowledgement and one reminder before the due date' },
            ],
          ],
        },
        {
          type: 'table',
          caption: {
            fa: 'گزارش مراحل کلیدی: روتور یدکی کمپرسور K-102، فن‌آوران کمپرسور توس، سفارش `PO-45020` (شماره هفته از تاریخ سفارش)',
            en: 'Milestone report: spare rotor for compressor K-102, Toos Compressor Technologies, `PO-45020` (week numbers from the PO date)',
          },
          head: [
            { fa: 'مرحله', en: 'Milestone' },
            { fa: 'برنامه', en: 'Planned' },
            { fa: 'پیش‌بینی/واقعی', en: 'Forecast/actual' },
            { fa: 'وضعیت', en: 'Status' },
          ],
          rows: [
            [{ fa: 'پذیرش سفارش', en: 'PO acknowledged' }, 1, 1, { fa: 'انجام شد', en: 'Done' }],
            [{ fa: 'ارسال نقشه‌ها', en: 'Drawings submitted' }, 4, 4, { fa: 'انجام شد', en: 'Done' }],
            [{ fa: 'تأیید نقشه‌ها توسط پارس‌آریا', en: 'Drawings approved by Pars Arya' }, 6, 8, { fa: 'با 2 هفته تأخیر', en: 'Done, 2 weeks late' }],
            [{ fa: 'رسید قطعات آهنگری در کارخانه', en: 'Forgings received at works' }, 12, 14, { fa: 'انجام شد', en: 'Done' }],
            [{ fa: 'پایان ماشین‌کاری', en: 'Machining complete' }, 24, 26, { fa: 'در جریان', en: 'In progress' }],
            [{ fa: 'بالانس و آزمون کارخانه‌ای (FAT)', en: 'Balancing and factory acceptance test (FAT)' }, 30, 32, { fa: 'برنامه‌ریزی‌شده', en: 'Planned' }],
            [{ fa: 'صدور گواهی ترخیص بازرسی', en: 'Inspection release note issued' }, 31, 33, { fa: 'برنامه‌ریزی‌شده', en: 'Planned' }],
            [{ fa: 'تحویل در انبار مرکزی', en: 'Delivered to the Central Warehouse' }, 34, 36, { fa: 'برنامه‌ریزی‌شده', en: 'Planned' }],
          ],
          numericCols: [1, 2],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'تأخیر از کیست؟', en: 'Whose delay is it?' },
          text: {
            fa: 'دو هفته از تأخیر این سفارش به خود پارس‌آریا برمی‌گردد: تأیید نقشه‌ها به‌جای هفته 6 در هفته 8 انجام شد. شرکت نمی‌تواند برای تأخیری که خودش ایجاد کرده خسارت تأخیر بگیرد. گزارش پیگیری مستند و تاریخ‌دار همین را روشن می‌کند و از اختلاف بعدی با تأمین‌کننده جلوگیری می‌کند.',
            en: 'Two weeks of this delay belong to Pars Arya itself: drawings were approved in week 8 instead of week 6. The company cannot claim liquidated damages for delay it caused. A documented, dated expediting report makes this clear and prevents a later dispute with the supplier.',
          },
        },
        { type: 'h', text: { fa: 'اسناد فنی تأمین‌کننده', en: 'Vendor documents' } },
        {
          type: 'p',
          text: {
            fa: 'هر سفارش مهندسی‌شده یک **فهرست اسناد مورد نیاز از تأمین‌کننده** (VDRL) دارد: نقشه‌ها، برگه‌های مشخصات، برنامه بازرسی و آزمون، دستورالعمل‌ها، گواهی مواد و در پایان **پرونده ساخت** (Manufacturing Record Book). پیگیر سفارش، ارسال و تأیید این اسناد را هم مثل خود کالا دنبال می‌کند؛ زیرا بدون پرونده ساخت، تحویل کامل نیست و در بسیاری از قراردادها پرداخت آخر به آن بسته است.',
            en: 'Every engineered order has a **vendor document requirements list (VDRL)**: drawings, data sheets, the inspection and test plan, procedures, material certificates and finally the **manufacturing record book (MRB)**. The expeditor chases these documents just like the goods, because without the MRB delivery is not complete, and in many contracts the final payment depends on it.',
          },
        },
      ],
    },
    {
      id: 'inspection',
      title: { fa: 'بازرسی شخص ثالث و گواهی ترخیص', en: 'Third-Party Inspection and the Release Note' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'برای اقلام بحرانی، شرکت به گفته تأمین‌کننده بسنده نمی‌کند. یک **شرکت بازرسی شخص ثالث** (TPI)، مثلاً «بازرسی فنی آریان»، از طرف خریدار در کارخانه حاضر می‌شود و طبق **برنامه بازرسی و آزمون** (Inspection and Test Plan یا ITP) کار را کنترل می‌کند. در ITP برای هر فعالیت مشخص است چه کسی چه نقشی دارد:',
            en: 'For critical items the company does not rely on the supplier’s word. A **third-party inspection (TPI)** company, for example Arian Technical Inspection, attends the works on the buyer’s behalf and checks the work against the **inspection and test plan (ITP)**. For every activity the ITP states who does what:',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'بخشی از ITP روتور یدکی K-102. P: انجام؛ H: نقطه توقف؛ W: نقطه مشاهده؛ R: بررسی مدارک',
            en: 'Extract from the ITP for the K-102 spare rotor. P: perform; H: hold point; W: witness point; R: document review',
          },
          head: [
            { fa: 'فعالیت', en: 'Activity' },
            { fa: 'سازنده', en: 'Manufacturer' },
            { fa: 'بازرس شخص ثالث', en: 'TPI' },
            { fa: 'پارس‌آریا', en: 'Pars Arya' },
          ],
          rows: [
            [{ fa: 'بررسی گواهی مواد (EN 10204 نوع 3.1)', en: 'Material certificate review (EN 10204 type 3.1)' }, { fa: 'P', en: 'P' }, { fa: 'R', en: 'R' }, { fa: 'R', en: 'R' }],
            [{ fa: 'کنترل ابعادی', en: 'Dimensional check' }, { fa: 'P', en: 'P' }, { fa: 'W', en: 'W' }, { fa: 'R', en: 'R' }],
            [{ fa: 'بالانس دینامیکی روتور', en: 'Rotor dynamic balancing' }, { fa: 'P', en: 'P' }, { fa: 'H', en: 'H' }, { fa: 'W', en: 'W' }],
            [{ fa: 'آزمون کارخانه‌ای (FAT)', en: 'Factory acceptance test (FAT)' }, { fa: 'P', en: 'P' }, { fa: 'H', en: 'H' }, { fa: 'W', en: 'W' }],
            [{ fa: 'بسته‌بندی و نشانه‌گذاری نهایی', en: 'Final packing and marking' }, { fa: 'P', en: 'P' }, { fa: 'W', en: 'W' }, { fa: '-', en: '-' }],
            [{ fa: 'پرونده ساخت (MRB)', en: 'Manufacturing record book (MRB)' }, { fa: 'P', en: 'P' }, { fa: 'R', en: 'R' }, { fa: 'R', en: 'R' }],
          ],
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'نقطه توقف (Hold)', en: 'Hold point' },
            items: [
              { fa: 'کار بدون حضور یا تأیید بازرس ادامه پیدا نمی‌کند', en: 'Work cannot continue without the inspector’s presence or approval' },
              { fa: 'برای آزمون‌هایی که بعداً قابل تکرار یا دیدن نیستند', en: 'Used for tests that cannot be repeated or seen later' },
              { fa: 'نمونه: بالانس روتور، آزمون فشار، FAT', en: 'Examples: rotor balancing, pressure test, FAT' },
            ],
          },
          right: {
            title: { fa: 'نقطه مشاهده (Witness)', en: 'Witness point' },
            items: [
              { fa: 'بازرس دعوت می‌شود، اما اگر نیاید کار ادامه می‌یابد', en: 'The inspector is invited, but work proceeds if they do not attend' },
              { fa: 'برای کنترل‌هایی که سوابقشان بعداً قابل بررسی است', en: 'Used for checks whose records can be reviewed later' },
              { fa: 'نمونه: کنترل ابعادی، بسته‌بندی', en: 'Examples: dimensional check, packing' },
            ],
          },
        },
        {
          type: 'p',
          text: {
            fa: 'وقتی همه نقاط توقف با موفقیت انجام و مدارک بررسی شد، بازرس **گواهی ترخیص بازرسی** (Inspection Release Note یا IRN) صادر می‌کند؛ سندی که می‌گوید کالا اجازه ارسال دارد. بدون IRN، تأمین‌کننده نباید بار بزند و انبار هم نباید رسید قطعی ثبت کند. IRN همراه سفارش بایگانی می‌شود و بعدها در حسابرسی بازیافت هزینه نشان می‌دهد شرکت برای کیفیت کالا هزینه درستی کرده است.',
            en: 'When all hold points have been passed and the documents reviewed, the inspector issues an **inspection release note (IRN)**, the document that says the goods may be shipped. Without an IRN the supplier should not ship and the warehouse should not post a final receipt. The IRN is filed with the PO and later shows cost-recovery auditors that the company spent money properly on verified quality.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          text: {
            fa: 'اگر آزمونی رد شود، بازرس **گزارش عدم انطباق** (NCR) صادر می‌کند. تأمین‌کننده باید اصلاح کند و آزمون تکرار شود؛ IRN فقط پس از بستن NCR صادر می‌شود. برای اقلام بحرانی، پیشنهاد «حالا بفرستیم، بعداً درستش می‌کنیم» را نپذیرید: تعمیر روتور در میدان چند برابر گران‌تر و خطرناک‌تر است.',
            en: 'If a test fails, the inspector raises a **non-conformance report (NCR)**. The supplier must correct the problem and repeat the test; the IRN is issued only once the NCR is closed. For critical items, do not accept “ship now, fix later”: repairing a rotor in the field is many times more expensive and more dangerous.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در ایران، بازرسی شخص ثالث معمولاً به شرکت‌های بازرسی فنی دارای صلاحیت سپرده می‌شود و برای آن یک سفارش خدمات جداگانه با صورت‌وضعیت صادر می‌شود. هزینه بازرسی طبق سیاست شرکت یا به بهای تمام‌شده کالا اضافه می‌شود یا به پروژه می‌رود؛ در هر حال گزارش بازرسی و IRN را کنار سفارش نگه دارید.',
            en: 'In Iran, third-party inspection is usually given to qualified technical inspection companies under a separate service PO with its own SES. Per company policy, the inspection cost is either added to the cost of the item or charged to the project; either way, keep the inspection report and IRN with the PO.',
          },
        },
      ],
    },
    {
      id: 'shipping-customs',
      title: { fa: 'حمل، ترخیص گمرکی و بهای تمام‌شده کالای وارداتی', en: 'Shipping, Customs Clearance and Landed Cost' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'پس از IRN، کالا بسته‌بندی، نشانه‌گذاری (با شماره سفارش و ردیف) و ارسال می‌شود. همراه هر محموله مجموعه‌ای از اسناد می‌آید که انبار، گمرک و واحد مالی هر کدام به بخشی از آن نیاز دارند:',
            en: 'After the IRN, the goods are packed, marked (with the PO and line number) and shipped. Each shipment travels with a set of documents, and the warehouse, customs and Finance each need part of it:',
          },
        },
        {
          type: 'table',
          head: [
            { fa: 'سند', en: 'Document' },
            { fa: 'چه چیزی را نشان می‌دهد', en: 'What it shows' },
          ],
          rows: [
            [{ fa: 'فهرست عدل‌بندی (Packing List)', en: 'Packing list' }, { fa: 'محتوای هر بسته، وزن و ابعاد', en: 'Contents, weight and dimensions of each package' }],
            [{ fa: 'سیاهه تجاری (Commercial Invoice)', en: 'Commercial invoice' }, { fa: 'ارزش کالا برای گمرک و پرداخت', en: 'Value of the goods for customs and payment' }],
            [
              { fa: 'بارنامه دریایی، هوایی یا جاده‌ای', en: 'Bill of lading, air waybill or road consignment note' },
              { fa: 'تحویل کالا به حمل‌کننده و شرایط حمل', en: 'Handover to the carrier and the terms of carriage' },
            ],
            [{ fa: 'گواهی مبدأ و بیمه‌نامه', en: 'Certificate of origin and insurance certificate' }, { fa: 'کشور سازنده و پوشش بیمه حمل', en: 'Country of manufacture and transit insurance cover' }],
            [{ fa: 'IRN و گواهی‌های مواد', en: 'IRN and material certificates' }, { fa: 'کیفیت تأییدشده و قابلیت ردیابی', en: 'Verified quality and traceability' }],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'در واردات، کالا پیش از تحویل باید از گمرک **ترخیص** شود: اظهارنامه گمرکی ثبت می‌شود، حقوق ورودی و مالیات‌ها پرداخت می‌شود و کالا پس از بررسی گمرک آزاد می‌شود. در ایران معمولاً پیش از حمل، **ثبت سفارش** در سامانه جامع تجارت لازم است و ترخیص را یک ترخیص‌کار (کارگزار گمرکی) انجام می‌دهد. برخی قراردادهای نفتی برای کالای عملیات نفتی معافیت یا ترتیبات ورود موقت دارند. مقررات ارزی، تعرفه‌ها و معافیت‌ها پیوسته تغییر می‌کنند؛ رویه روز را از مقررات جاری و متن قرارداد بررسی کنید.',
            en: 'For imports, goods must be **cleared** through customs before delivery: a customs declaration is filed, import duties and taxes are paid, and the goods are released after customs checks. In Iran, **order registration** in the national trade system is usually required before shipment, and clearance is handled by a licensed customs broker. Some petroleum contracts give exemptions or temporary-import arrangements for goods used in petroleum operations. Currency rules, tariffs and exemptions change often; check current regulations and the contract itself.',
          },
        },
        { type: 'h', text: { fa: 'بهای تمام‌شده کالای وارداتی (Landed Cost)', en: 'Landed cost' } },
        {
          type: 'p',
          text: {
            fa: 'طبق IFRS (استاندارد IAS 2) و استاندارد حسابداری ایران درباره موجودی‌ها، بهای تمام‌شده کالا شامل قیمت خرید، حقوق ورودی و مالیات‌های **غیرقابل استرداد**، حمل، تخلیه و سایر مخارجی است که مستقیماً برای رساندن کالا به محل و وضعیت فعلی‌اش انجام شده است. مالیات‌های قابل استرداد، مانند مالیات بر ارزش افزوده‌ای که اعتبار آن قابل استفاده است، جزء بهای تمام‌شده نیستند. پارس‌آریا 8 شیر کنترل برای ایستگاه تقویت فشار وارد کرده است:',
            en: 'Under IFRS (IAS 2) and the Iranian standard on inventories, the cost of goods includes the purchase price, import duties and **non-recoverable** taxes, transport, handling and other costs directly incurred to bring the goods to their present location and condition. Recoverable taxes, such as VAT that can be claimed back as a credit, are not part of cost. Pars Arya has imported 8 control valves for the compressor station:',
          },
        },
        {
          type: 'table',
          caption: { fa: 'بهای تمام‌شده 8 شیر کنترل وارداتی (ارقام فرضی)', en: 'Landed cost of 8 imported control valves (illustrative)' },
          head: [
            { fa: 'جزء', en: 'Component' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          rows: [
            [{ fa: 'قیمت خرید (FCA): 8 × 5,000', en: 'Purchase price (FCA): 8 × 5,000' }, 40000],
            [{ fa: 'کرایه و بیمه دریایی', en: 'Sea freight and insurance' }, 3200],
            [{ fa: 'حقوق ورودی و عوارض گمرکی', en: 'Import duties and customs fees' }, 4000],
            [{ fa: 'کارمزد ترخیص‌کار و هزینه‌های بندری', en: 'Customs broker and port charges' }, 800],
            [{ fa: 'حمل داخلی تا انبار مرکزی', en: 'Inland transport to the Central Warehouse' }, 1000],
            [{ fa: 'بهای تمام‌شده کل', en: 'Total landed cost' }, 49000],
            [{ fa: 'بهای تمام‌شده هر شیر (49,000 ÷ 8)', en: 'Cost per valve (49,000 ÷ 8)' }, 6125],
          ],
          numericCols: [1],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: {
            fa: 'دو قلم را به موجودی اضافه نکنید: (1) مالیات بر ارزش افزوده پرداختی در گمرک، اگر اعتبار آن قابل استفاده باشد؛ این مبلغ به حساب مالیات بر ارزش افزوده خرید می‌رود. (2) **دموراژ** و هزینه خواب کالا به دلیل تأخیر خود شرکت در ترخیص؛ این‌ها هزینه غیرعادی‌اند و به هزینه دوره می‌روند، و ممکن است در حسابرسی بازیافت هزینه هم پذیرفته نشوند.',
            en: 'Do not add two items to inventory: (1) VAT paid at customs, when the credit can be claimed; it goes to Input VAT receivable. (2) **Demurrage** and storage charges caused by the company’s own delay in clearance; these are abnormal costs, expensed in the period, and may also be rejected in a cost-recovery audit.',
          },
        },
      ],
    },
    {
      id: 'receipt',
      title: { fa: 'تحویل، رسید کالا و تأیید خدمات', en: 'Delivery, Goods Receipt and Service Acceptance' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'محل تحویل در سفارش تعیین شده است. قطعات یدکی حیاتی و کالای وارداتی معمولاً به **انبار مرکزی** می‌روند؛ موجودی عملیاتی نزدیک چاه‌ها در **انبار میدان** نگهداری می‌شود؛ و کالایی که برای یک چاه خاص خریده شده، مثل لوله جداری AR-11، ممکن است مستقیم به انبار میدان یا محل دکل برسد. فرایند دریافت در هر سه حالت یکی است:',
            en: 'The delivery point is set in the PO. Critical spares and imported goods usually go to the **Central Warehouse**; operating stock near the wells is kept in the **Field Warehouse**; and goods bought for one specific well, like the AR-11 casing, may go straight to the Field Warehouse or the rig site. The receiving process is the same in all three cases:',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'کنترل مدارک', en: 'Check the paperwork' },
              text: {
                fa: 'شماره سفارش، ردیف‌ها و مقدار روی برگه تحویل با سفارش مقایسه می‌شود؛ IRN و گواهی‌ها باید همراه باشند.',
                en: 'The PO number, lines and quantities on the delivery note are compared with the PO; the IRN and certificates must be present.',
              },
            },
            {
              title: { fa: 'تخلیه، شمارش و بازدید ظاهری', en: 'Unload, count and inspect visually' },
              text: {
                fa: 'بسته‌ها شمارش و از نظر آسیب حمل بررسی می‌شوند؛ آسیب روی بارنامه یادداشت می‌شود.',
                en: 'Packages are counted and checked for transport damage; any damage is noted on the consignment note.',
              },
            },
            {
              title: { fa: 'ثبت رسید در ERP', en: 'Post the goods receipt in the ERP' },
              text: {
                fa: 'رسید با ارجاع به سفارش ثبت می‌شود؛ اگر بازرسی ورودی لازم است، کالا در وضعیت «موجودی تحت بازرسی» قرار می‌گیرد.',
                en: 'The receipt is posted with reference to the PO; if incoming inspection is required, the goods go into “quality inspection stock”.',
              },
            },
            {
              title: { fa: 'بازرسی ورودی', en: 'Incoming inspection' },
              text: {
                fa: 'کنترل کیفیت ابعاد، رزوه‌ها (برای لوله)، و تطابق شماره ذوب با گواهی‌ها را بررسی می‌کند.',
                en: 'Quality control checks dimensions, threads (for pipe) and that heat numbers match the certificates.',
              },
            },
            {
              title: { fa: 'آزادسازی یا رد', en: 'Release or reject' },
              text: {
                fa: 'کالای سالم به موجودی آزاد منتقل می‌شود؛ کالای معیوب با NCR رد و مرجوع می‌شود.',
                en: 'Good items move to unrestricted stock; defective items are rejected with an NCR and returned.',
              },
            },
            {
              title: { fa: 'جانمایی و برچسب', en: 'Put away and label' },
              text: {
                fa: 'کالا با شماره کالا و محل قفسه برچسب می‌خورد و در محل تعیین‌شده چیده می‌شود.',
                en: 'Items are labelled with the material number and bin location and stored in place.',
              },
            },
          ],
        },
        { type: 'h', text: { fa: 'تحویل ناقص و مرجوعی', en: 'Partial deliveries and rejections' } },
        {
          type: 'p',
          text: {
            fa: 'سفارش `PO-45031`: 300 شاخه لوله مغزی 4-1/2 اینچ با قیمت 400 برای موجودی انبار میدان. محموله اول 180 شاخه است و رسید آن ثبت می‌شود. در بازرسی ورودی، رزوه 6 شاخه آسیب‌دیده است؛ NCR صادر و این 6 شاخه به تأمین‌کننده مرجوع می‌شود. سفارش برای مانده باز می‌ماند:',
            en: '`PO-45031`: 300 joints of 4-1/2" tubing at 400 each for Field Warehouse stock. The first shipment of 180 joints is received and posted. At incoming inspection, 6 joints have damaged threads; an NCR is raised and the 6 joints are returned to the supplier. The PO stays open for the balance:',
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
            [{ fa: 'رسید محموله اول', en: 'First shipment received' }, 180, 72000, 120],
            [{ fa: 'مرجوعی شاخه‌های معیوب', en: 'Defective joints returned' }, 6, 2400, 126],
            [{ fa: 'خالص دریافتی', en: 'Net received' }, 174, 69600, 126],
          ],
          numericCols: [1, 2, 3],
        },
        {
          type: 'callout',
          tone: 'tip',
          text: {
            fa: 'برای هر ردیف سفارش **حد تحمل تحویل** تعریف کنید؛ مثلاً صفر برای اقلام مهندسی‌شده و 5٪ برای مواد فله مانند باریت. اگر تأمین‌کننده باقی‌مانده را تحویل نمی‌دهد و نیاز هم برطرف شده، ردیف را «تحویل تکمیل» علامت بزنید تا مانده باز بسته شود و تعهد آزاد شود.',
            en: 'Set a **delivery tolerance** for each PO line, for example zero for engineered items and 5% for bulk materials such as barite. If the supplier will not deliver the balance and the need has gone, flag the line “delivery completed” so the open quantity closes and the commitment is released.',
          },
        },
        { type: 'h', text: { fa: 'تأیید خدمات', en: 'Service acceptance' } },
        {
          type: 'p',
          text: {
            fa: 'برای خدمات، «رسید» همان تأیید صورت‌وضعیت (SES) است. کسی باید تأیید کند که کار را دیده است: سرپرست حفاری روی دکل یا مهندس مسئول عملیات، نه خریدار و نه پیمانکار. صورت‌وضعیت سیمان‌کاری جداری سطحی AR-11 به مبلغ 45,000 را سرپرست حفاری پس از مقایسه با برگه‌های کار روزانه تأیید کرد و همان لحظه هزینه روی AFE-AR11 نشست.',
            en: 'For services, the “receipt” is the approval of the service entry sheet (SES). Someone who saw the work must approve it: the drilling supervisor on the rig or the responsible operations engineer, not the buyer and not the contractor. The 45,000 SES for cementing the AR-11 surface casing was approved by the drilling supervisor after checking it against the daily field tickets, and the cost landed on AFE-AR11 at that moment.',
          },
        },
      ],
    },
    {
      id: 'erp-receipt',
      title: { fa: 'در ERP: رسید کالا و ثبت خودکار مالی', en: 'In the ERP: Goods Receipt and Its Finance Posting' },
      blocks: [
        {
          type: 'diagram',
          id: 'erp-modules',
          caption: {
            fa: 'رسید کالا نقطه تلاقی ماژول‌هاست: خرید (سفارش)، انبار (مقدار و محل)، کیفیت (بازرسی)، پروژه (AFE) و مالی (ثبت خودکار).',
            en: 'The goods receipt is where modules meet: Procurement (the PO), Inventory (quantity and location), Quality (inspection), Projects (the AFE) and Finance (the automatic posting).',
          },
        },
        {
          type: 'table',
          head: [
            { fa: 'جزء', en: 'Element' },
            { fa: 'در رسید کالا', en: 'At goods receipt' },
          ],
          rows: [
            [
              { fa: 'داده پایه', en: 'Master data' },
              {
                fa: 'داده پایه کالا (گروه ارزش‌گذاری که حساب موجودی را تعیین می‌کند، روش قیمت‌گذاری)، محل‌های انبار (مرکزی، میدان)، تنظیمات بازرسی کیفیت، موضوع‌های هزینه',
                en: 'Material master (valuation class, which sets the inventory account; price control), storage locations (Central, Field), quality inspection settings, cost objects',
              },
            ],
            [
              { fa: 'اسناد تراکنشی', en: 'Transaction documents' },
              {
                fa: 'رسید کالا (سند کالا و سند حسابداری)، مرجوعی به تأمین‌کننده، SES، انتقال بین انبارها',
                en: 'Goods receipt (material document and accounting document), return to vendor, SES, stock transfer',
              },
            ],
            [
              { fa: 'نقش‌ها', en: 'Roles' },
              {
                fa: 'انباردار رسید را ثبت می‌کند؛ بازرس کیفیت آزاد یا رد می‌کند؛ نماینده محل SES را تأیید می‌کند؛ خریدار NCR را با تأمین‌کننده پیگیری می‌کند؛ واحد مالی حساب GR/IR را پایش می‌کند',
                en: 'Storekeeper posts the receipt; QC inspector releases or rejects; the site representative approves the SES; the buyer handles the NCR with the supplier; Finance monitors GR/IR',
              },
            ],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'هر رسید کالا در ERP دو سند می‌سازد: **سند کالا** (کدام کالا، چه مقدار، کدام انبار) و **سند حسابداری** (چه مبلغی، کدام حساب‌ها). مبلغ از **قیمت سفارش خرید** خوانده می‌شود، نه از فاکتور؛ چون فاکتور هنوز نرسیده است. طرف بستانکار همیشه **حساب واسط رسید کالا و فاکتور (GR/IR)** است: بدهی‌ای که می‌دانیم وجود دارد، اما فاکتورش هنوز نیامده است.',
            en: 'Every goods receipt in the ERP creates two documents: a **material document** (which item, how many, which warehouse) and an **accounting document** (what amount, which accounts). The amount comes from the **PO price**, not the invoice, because the invoice has not arrived yet. The credit side is always the **GR/IR clearing account**: a liability we know exists but have not yet been invoiced for.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های خودکار ERP هنگام رسید', en: 'Automatic ERP postings at receipt' },
          entries: [
            {
              date: { fa: 'رسید لوله مغزی (انبار)', en: 'Tubing received (stock)' },
              lines: [
                { account: ac.invField, debit: 72000 },
                { account: ac.grir, credit: 72000 },
              ],
              memo: { fa: '180 شاخه × 400 با قیمت سفارش `PO-45031`.', en: '180 joints × 400 at the `PO-45031` price.' },
            },
            {
              date: { fa: 'مرجوعی 6 شاخه معیوب', en: 'Return of 6 defective joints' },
              lines: [
                { account: ac.grir, debit: 2400 },
                { account: ac.invField, credit: 2400 },
              ],
              memo: { fa: 'برعکس رسید، با همان قیمت: 6 × 400.', en: 'Reverses the receipt at the same price: 6 × 400.' },
            },
            {
              date: { fa: 'رسید لوله جداری (تخصیص مستقیم)', en: 'Casing received (direct charge)' },
              lines: [
                { account: ac.aucAR11, debit: 180000 },
                { account: ac.grir, credit: 180000 },
              ],
              memo: { fa: 'ردیف 10 سفارش `PO-45007`، 150 × 1,200 روی AFE-AR11.', en: '`PO-45007` line 10, 150 × 1,200 on AFE-AR11.' },
            },
            {
              date: { fa: 'تأیید SES سیمان‌کاری', en: 'Cementing SES approved' },
              lines: [
                { account: ac.aucAR11, debit: 45000 },
                { account: ac.grir, credit: 45000 },
              ],
              memo: { fa: 'خدمات چاه البرز، روی AFE-AR11.', en: 'Alborz Well Services, on AFE-AR11.' },
            },
            {
              date: { fa: 'رسید شیرهای کنترل وارداتی', en: 'Imported control valves received' },
              lines: [
                { account: ac.invCentral, debit: 49000 },
                { account: ac.grir, credit: 40000 },
                { account: ac.freightClr, credit: 4200 },
                { account: ac.customsClr, credit: 4800 },
              ],
              memo: {
                fa: 'هزینه‌های برنامه‌ریزی‌شده حمل (3,200 + 1,000) و گمرک (4,000 + 800) در سفارش تعریف شده‌اند و هر کدام حساب واسط خودشان را دارند تا با فاکتور حمل‌کننده و ترخیص‌کار تسویه شوند.',
                en: 'Planned freight (3,200 + 1,000) and customs (4,000 + 800) costs are defined in the PO, each with its own clearing account, to be cleared by the forwarder’s and broker’s invoices.',
              },
            },
          ],
        },
        {
          type: 'tAccounts',
          title: { fa: 'حساب GR/IR پس از این رسیدها', en: 'GR/IR after these receipts' },
          accounts: [
            {
              name: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing account' },
              debits: [2400],
              credits: [72000, 180000, 45000, 40000],
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'مانده بستانکار 334,600 یعنی «کالا و خدمت دریافت شده، فاکتور هنوز نرسیده». با ثبت فاکتورها، که در درس تطبیق فاکتور و پرداخت می‌بینیم، این مانده تسویه می‌شود. **انتقال بین انبارها**، مثلاً از انبار مرکزی به انبار میدان، فقط محل کالا را عوض می‌کند: اگر هر دو انبار در یک واحد ارزش‌گذاری باشند ثبت مالی ندارد، و اگر جدا باشند موجودی انبار میدان بدهکار و موجودی انبار مرکزی با همان بها بستانکار می‌شود. هیچ‌کدام سود و زیان ندارد.',
            en: 'The credit balance of 334,600 means “goods and services received, not yet invoiced”. Posting the invoices, covered in the lesson on invoice verification and payment, clears it. A **stock transfer**, for example from the Central to the Field Warehouse, only changes location: if both warehouses are in the same valuation area there is no Finance posting; if they are separate, Field Warehouse inventory is debited and Central Warehouse inventory credited at the same cost. Neither affects profit or loss.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'پیوند با بازیافت هزینه', en: 'Link to cost recovery' },
          text: {
            fa: 'تاریخ رسید و موضوع هزینه روی آن تعیین می‌کنند هزینه کی و کجا شناسایی شود. خرید با تخصیص مستقیم از لحظه رسید روی AFE یا چاه می‌نشیند؛ خرید برای انبار طبق بسیاری از رویه‌های حسابداری قراردادهای نفتی هنگام **حواله و مصرف** به حساب عملیات مشترک می‌رود، نه هنگام خرید (رویه دقیق را قرارداد تعیین می‌کند). رسید، برگه تحویل، IRN و NCR شواهد اصلی حسابرس‌اند.',
            en: 'The receipt date and the cost object on it decide when and where a cost is recognised. Direct-charge purchases land on the AFE or well at receipt; under many petroleum-contract accounting procedures, stock purchases reach the joint account when **issued and used**, not when bought (the contract sets the exact rule). The receipt, delivery note, IRN and NCR are the auditor’s key evidence.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'بسیاری از شرکت‌های ایرانی هنگام ورود کالا **رسید موقت** صادر می‌کنند و پس از تأیید کنترل کیفیت **رسید قطعی**. در ERP همین منطق با «موجودی تحت بازرسی» و آزادسازی آن پیاده می‌شود. مهم این است که بدهی (GR/IR) و موجودی از لحظه ورود فیزیکی کالا دیده شوند، نه از لحظه امضای آخرین برگه.',
            en: 'Many Iranian companies issue a **temporary receipt** when goods arrive and a **final receipt** after QC approval. In the ERP the same logic is implemented with quality inspection stock and its release. What matters is that the liability (GR/IR) and the inventory are visible from the moment the goods physically arrive, not from the last signature.',
          },
        },
      ],
    },
    {
      id: 'practice',
      title: { fa: 'اشتباه‌های رایج و تمرین', en: 'Common Mistakes and Practice' },
      blocks: [
        { type: 'h', text: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' } },
        {
          type: 'list',
          items: [
            {
              fa: '**پیگیری فقط با تلفن**: پذیرفتن «هفته بعد می‌رسد» بدون دیدن شواهد. راه درست: گزارش مراحل کلیدی با عکس، گزارش آزمون و بازدید برای اقلام سطح A.',
              en: '**Expediting by phone only**: accepting “it ships next week” without evidence. Fix: milestone reports with photos, test reports and visits for level A items.',
            },
            {
              fa: '**ارسال بدون IRN یا با NCR باز**: کالایی که بازرسی نشده وارد انبار می‌شود. راه درست: رسید قطعی فقط با IRN معتبر.',
              en: '**Shipping without an IRN or with an open NCR**: uninspected goods enter the warehouse. Fix: final receipt only with a valid IRN.',
            },
            {
              fa: '**رسید پیش از ورود فیزیکی کالا**: برای بستن ماه یا کمک به پرداخت زودتر به تأمین‌کننده. این کار موجودی و بدهی ساختگی می‌سازد و نشانه خطر تقلب است. راه درست: رسید فقط پس از شمارش واقعی.',
              en: '**Receipting before the goods arrive**: to close the month or help the supplier get paid sooner. This creates fictitious inventory and liabilities and is a fraud red flag. Fix: receipt only after a physical count.',
            },
            {
              fa: '**رسید روی ردیف، انبار یا موضوع هزینه اشتباه**: لوله AR-11 روی سفارش AR-10. راه درست: رسید همیشه با ارجاع به سفارش و ردیف درست.',
              en: '**Receipt on the wrong line, warehouse or cost object**: AR-11 pipe received on the AR-10 order. Fix: always receive against the correct PO and line.',
            },
            {
              fa: '**ثبت‌نکردن مرجوعی**: کالای ردشده برگشت داده می‌شود اما رسیدش باقی می‌ماند و بعداً فاکتورش پرداخت می‌شود. راه درست: مرجوعی در ERP همان روز ثبت شود.',
              en: '**Not posting returns**: rejected goods go back but the receipt stays, and the invoice gets paid later. Fix: post the return in the ERP the same day.',
            },
            {
              fa: '**بهای تمام‌شده اشتباه**: اضافه‌کردن مالیات بر ارزش افزوده قابل استرداد یا دموراژ به موجودی. راه درست: فقط مخارج مستقیم و غیرقابل استرداد.',
              en: '**Wrong landed cost**: adding recoverable VAT or demurrage to inventory. Fix: only direct, non-recoverable costs.',
            },
          ],
        },
        {
          type: 'exercise',
          title: { fa: 'تمرین 1: سطح پیگیری', en: 'Exercise 1: Expediting level' },
          difficulty: 'easy',
          problem: {
            fa: 'برای هر سفارش زیر سطح پیگیری (A، B یا C) و روش مناسب را تعیین کنید.',
            en: 'Assign an expediting level (A, B or C) and a suitable method to each order below.',
          },
          given: {
            head: [
              { fa: 'سفارش', en: 'Order' },
              { fa: 'زمان تأمین (هفته)', en: 'Lead time (weeks)' },
              { fa: 'اثر تأخیر', en: 'Effect of delay' },
            ],
            rows: [
              [{ fa: 'الف: روتور یدکی کمپرسور K-102', en: 'a: spare rotor, compressor K-102' }, 36, { fa: 'کاهش ظرفیت ایستگاه تقویت فشار', en: 'Lost compressor station capacity' }],
              [
                { fa: 'ب: لوله مغزی برای موجودی تعمیر چاه', en: 'b: tubing for workover stock' },
                10,
                { fa: 'دکل تعمیر منتظر می‌ماند، اما موجودی جایگزین در انبار مرکزی هست', en: 'Workover rig could wait, but alternative stock exists at the Central Warehouse' },
              ],
              [{ fa: 'ج: دستکش ایمنی (سفارش باز)', en: 'c: safety gloves (blanket PO)' }, 1, { fa: 'تقریباً هیچ؛ تأمین‌کننده زیاد است', en: 'Almost none; many suppliers' }],
              [{ fa: 'د: سرچاهی چاه AR-12', en: 'd: wellhead for well AR-12' }, 28, { fa: 'دکل حفاری منتظر می‌ماند', en: 'The drilling rig waits' }],
            ],
            numericCols: [1],
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'سفارش', en: 'Order' },
                { fa: 'سطح', en: 'Level' },
                { fa: 'روش', en: 'Method' },
              ],
              rows: [
                [{ fa: 'الف', en: 'a' }, { fa: 'A', en: 'A' }, { fa: 'بازدید ماهانه، گزارش هفتگی، حضور در بالانس و FAT', en: 'Monthly visits, weekly reports, attend balancing and FAT' }],
                [{ fa: 'ب', en: 'b' }, { fa: 'B', en: 'B' }, { fa: 'پیگیری دفتری دو هفته یک بار؛ موجودی جایگزین ریسک را کم کرده است', en: 'Desk follow-up every two weeks; alternative stock lowers the risk' }],
                [{ fa: 'ج', en: 'c' }, { fa: 'C', en: 'C' }, { fa: 'تأیید پذیرش سفارش و یک یادآوری', en: 'Confirm acknowledgement and one reminder' }],
                [{ fa: 'د', en: 'd' }, { fa: 'A', en: 'A' }, { fa: 'مثل الف؛ به‌علاوه زمان‌بندی معکوس از تاریخ شروع حفاری', en: 'As for a, plus backward scheduling from the spud date' }],
              ],
            },
          ],
          answer: { fa: 'الف: A؛ ب: B؛ ج: C؛ د: A.', en: 'a: A; b: B; c: C; d: A.' },
        },
        {
          type: 'exercise',
          title: { fa: 'تمرین 2: بهای تمام‌شده یاتاقان‌های وارداتی', en: 'Exercise 2: Landed cost of imported bearings' },
          difficulty: 'medium',
          problem: {
            fa: 'پارس‌آریا 20 یاتاقان کمپرسور برای انبار مرکزی وارد کرده است. بهای تمام‌شده کل و هر یاتاقان را حساب کنید، اقلامی را که نباید به موجودی اضافه شوند جدا کنید و ثبت‌ها را بنویسید. مالیات بر ارزش افزوده گمرکی قابل استرداد است و دموراژ به دلیل تأخیر خود شرکت در تحویل مدارک ایجاد شده است.',
            en: 'Pars Arya imported 20 compressor bearings for the Central Warehouse. Calculate the total landed cost and the cost per bearing, separate the items that must not go into inventory, and write the entries. The import VAT is recoverable, and the demurrage arose from the company’s own delay in submitting documents.',
          },
          given: {
            head: [
              { fa: 'قلم', en: 'Item' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            rows: [
              [{ fa: 'قیمت خرید (FCA): 20 × 1,100', en: 'Purchase price (FCA): 20 × 1,100' }, 22000],
              [{ fa: 'کرایه و بیمه دریایی', en: 'Sea freight and insurance' }, 1800],
              [{ fa: 'حقوق ورودی', en: 'Import duties' }, 2600],
              [{ fa: 'ترخیص‌کار و هزینه بندری', en: 'Customs broker and port charges' }, 400],
              [{ fa: 'حمل داخلی', en: 'Inland transport' }, 200],
              [{ fa: 'مالیات بر ارزش افزوده گمرکی (فرضی)', en: 'Import VAT (illustrative)' }, 2700],
              [{ fa: 'دموراژ', en: 'Demurrage' }, 500],
            ],
            numericCols: [1],
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'اقلام بهای تمام‌شده', en: 'Cost components' },
                  text: {
                    fa: '22,000 + 1,800 + 2,600 + 400 + 200 = 27,000.',
                    en: '22,000 + 1,800 + 2,600 + 400 + 200 = 27,000.',
                  },
                },
                {
                  title: { fa: 'هر یاتاقان', en: 'Per bearing' },
                  text: { fa: '27,000 ÷ 20 = 1,350.', en: '27,000 ÷ 20 = 1,350.' },
                },
                {
                  title: { fa: 'اقلام خارج از موجودی', en: 'Items kept out of inventory' },
                  text: {
                    fa: 'مالیات بر ارزش افزوده 2,700 قابل استرداد است و به حساب مالیات بر ارزش افزوده خرید می‌رود. دموراژ 500 هزینه غیرعادی است و به هزینه دوره می‌رود.',
                    en: 'The 2,700 VAT is recoverable and goes to Input VAT receivable. The 500 demurrage is an abnormal cost and is expensed.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'رسید در انبار مرکزی', en: 'Receipt at the Central Warehouse' },
                  lines: [
                    { account: ac.invCentral, debit: 27000 },
                    { account: ac.grir, credit: 22000 },
                    { account: ac.freightClr, credit: 2000 },
                    { account: ac.customsClr, credit: 3000 },
                  ],
                  memo: {
                    fa: 'حمل: 1,800 + 200؛ گمرک و ترخیص: 2,600 + 400.',
                    en: 'Freight: 1,800 + 200; customs and clearance: 2,600 + 400.',
                  },
                },
                {
                  date: { fa: 'پرداخت در گمرک', en: 'Paid at customs' },
                  lines: [
                    { account: ac.inputVat, debit: 2700 },
                    { account: ac.demurrage, debit: 500 },
                    { account: ac.bank, credit: 3200 },
                  ],
                  memo: {
                    fa: 'مالیات قابل استرداد و دموراژ، جدا از موجودی.',
                    en: 'Recoverable VAT and demurrage, kept out of inventory.',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: 'بهای تمام‌شده 27,000 (هر یاتاقان 1,350)؛ مالیات بر ارزش افزوده 2,700 و دموراژ 500 جزء موجودی نیستند.',
            en: 'Landed cost 27,000 (1,350 per bearing); the 2,700 VAT and 500 demurrage are not inventory.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تمرین 3: تحویل ناقص و مرجوعی', en: 'Exercise 3: Partial delivery and a return' },
          difficulty: 'medium',
          problem: {
            fa: 'سفارش `PO-45026`: 40 کیت سوپاپ کمپرسور × 750 برای انبار مرکزی. محموله اول 25 کیت است و رسیدش ثبت می‌شود. بازرسی ورودی 2 کیت را به دلیل جنس نادرست فنر (مغایر با گواهی) رد می‌کند و آن‌ها مرجوع می‌شوند. محموله دوم 17 کیت است (شامل 2 کیت جایگزین) و همه پذیرفته می‌شوند. ثبت‌ها، مانده باز سفارش پس از هر رویداد و مانده نهایی GR/IR را به دست آورید.',
            en: '`PO-45026`: 40 compressor valve kits × 750 for the Central Warehouse. The first shipment of 25 kits is received. Incoming inspection rejects 2 kits for the wrong spring material (not matching the certificate) and they are returned. The second shipment of 17 kits (including 2 replacements) is fully accepted. Write the entries, the PO open quantity after each event, and the final GR/IR balance.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'رویداد', en: 'Event' },
                { fa: 'مقدار', en: 'Qty' },
                { fa: 'مبلغ', en: 'Value' },
                { fa: 'مانده باز سفارش', en: 'PO open qty' },
              ],
              rows: [
                [{ fa: 'رسید محموله اول', en: 'First receipt' }, 25, 18750, 15],
                [{ fa: 'مرجوعی', en: 'Return' }, 2, 1500, 17],
                [{ fa: 'رسید محموله دوم', en: 'Second receipt' }, 17, 12750, 0],
              ],
              numericCols: [1, 2, 3],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'رسید اول', en: 'First receipt' },
                  lines: [
                    { account: ac.invCentral, debit: 18750 },
                    { account: ac.grir, credit: 18750 },
                  ],
                  memo: { fa: '25 × 750.', en: '25 × 750.' },
                },
                {
                  date: { fa: 'مرجوعی', en: 'Return' },
                  lines: [
                    { account: ac.grir, debit: 1500 },
                    { account: ac.invCentral, credit: 1500 },
                  ],
                  memo: { fa: '2 × 750؛ با NCR.', en: '2 × 750; with an NCR.' },
                },
                {
                  date: { fa: 'رسید دوم', en: 'Second receipt' },
                  lines: [
                    { account: ac.invCentral, debit: 12750 },
                    { account: ac.grir, credit: 12750 },
                  ],
                  memo: { fa: '17 × 750.', en: '17 × 750.' },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'کنترل: موجودی = 18,750 − 1,500 + 12,750 = 30,000 = 40 × 750. مانده GR/IR هم بستانکار 30,000 است و منتظر فاکتور تأمین‌کننده برای 40 کیت.',
                en: 'Check: inventory = 18,750 − 1,500 + 12,750 = 30,000 = 40 × 750. GR/IR also shows a 30,000 credit, awaiting the supplier’s invoice for 40 kits.',
              },
            },
          ],
          answer: {
            fa: 'مانده باز: 15، سپس 17، سپس صفر؛ موجودی 30,000 و GR/IR بستانکار 30,000.',
            en: 'Open qty: 15, then 17, then zero; inventory 30,000 and a GR/IR credit of 30,000.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تمرین 4: تأیید SES با ردیف مورد اختلاف', en: 'Exercise 4: Approving an SES with a disputed line' },
          difficulty: 'hard',
          problem: {
            fa: 'خدمات چاه البرز برای نمودارگیری چاه AR-11 برگه کار زیر را داده است. سفارش خدمات این کار 30,000 است. طبق قرارداد، تکرار نمودارگیری به دلیل خرابی ابزار پیمانکار قابل مطالبه نیست و یکی از سه نوبت نمودارگیری دقیقاً همین بوده است. (الف) مبلغ قابل تأیید SES را حساب کنید. (ب) ثبت خودکار ERP را بنویسید. (ج) اگر کار تمام شده باشد، با مانده سفارش چه باید کرد؟',
            en: 'Alborz Well Services submitted the field ticket below for wireline logging on well AR-11. The service PO for this job is 30,000. Under the contract, a re-run caused by failure of the contractor’s own tool is not chargeable, and one of the three runs was exactly that. (a) Calculate the SES amount to approve. (b) Write the automatic ERP entry. (c) If the job is finished, what should be done with the remaining PO value?',
          },
          given: {
            head: [
              { fa: 'ردیف', en: 'Line' },
              { fa: 'محاسبه', en: 'Calculation' },
              { fa: 'مبلغ ادعایی', en: 'Amount claimed' },
            ],
            rows: [
              [{ fa: 'دستگاه نمودارگیری و خدمه', en: 'Logging unit and crew' }, { fa: '2 روز × 4,500', en: '2 days × 4,500' }, 9000],
              [{ fa: 'نوبت‌های نمودارگیری', en: 'Logging runs' }, { fa: '3 نوبت × 3,200', en: '3 runs × 3,200' }, 9600],
              [{ fa: 'هزینه عمق', en: 'Depth charge' }, { fa: '2,400 متر × 2', en: '2,400 m × 2' }, 4800],
              [{ fa: 'تجهیز کارگاه', en: 'Mobilisation' }, { fa: 'مقطوع', en: 'Lump sum' }, 2600],
              [{ fa: 'جمع ادعا', en: 'Total claimed' }, blank, 26000],
            ],
            numericCols: [2],
          },
          hint: {
            fa: 'فقط ردیف نوبت‌ها تغییر می‌کند؛ هزینه عمق و دستگاه بابت کار مفید انجام شده‌اند.',
            en: 'Only the runs line changes; the unit and depth charges relate to useful work.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'حذف ردیف غیرقابل مطالبه', en: 'Remove the non-chargeable run' },
                  text: {
                    fa: 'نوبت‌های قابل قبول: 2 × 3,200 = 6,400. مبلغ SES = 9,000 + 6,400 + 4,800 + 2,600 = 22,800 (یعنی 26,000 − 3,200).',
                    en: 'Acceptable runs: 2 × 3,200 = 6,400. SES amount = 9,000 + 6,400 + 4,800 + 2,600 = 22,800 (that is 26,000 − 3,200).',
                  },
                },
                {
                  title: { fa: 'اثر بر تعهد', en: 'Effect on the commitment' },
                  text: {
                    fa: 'تعهد سفارش از 30,000 به 7,200 کم می‌شود و 22,800 به هزینه واقعی AFE-AR11 می‌رود.',
                    en: 'The PO commitment falls from 30,000 to 7,200, and 22,800 moves to AFE-AR11 actuals.',
                  },
                },
                {
                  title: { fa: 'بستن سفارش', en: 'Close the PO' },
                  text: {
                    fa: 'اگر کار تمام شده، SES را «نهایی» علامت بزنید یا ردیف را بسته اعلام کنید تا تعهد 7,200 آزاد شود و مانده AFE واقعی دیده شود.',
                    en: 'If the job is finished, mark the SES “final” or close the line so the 7,200 commitment is released and the AFE remaining is shown correctly.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'تأیید SES', en: 'SES approved' },
                  lines: [
                    { account: ac.aucAR11, debit: 22800 },
                    { account: ac.grir, credit: 22800 },
                  ],
                  memo: {
                    fa: 'نمودارگیری AR-11 بدون نوبت تکراری.',
                    en: 'AR-11 wireline logging, excluding the re-run.',
                  },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              text: {
                fa: 'اگر نوبت تکراری تأیید و پرداخت می‌شد، حسابرس شرکا یا دولت احتمالاً آن را غیرقابل بازیافت اعلام می‌کرد؛ یعنی هزینه را پارس‌آریا به‌تنهایی می‌پرداخت.',
                en: 'Had the re-run been approved and paid, the partners’ or government’s auditor would likely disallow it, leaving Pars Arya to carry the cost alone.',
              },
            },
          ],
          answer: {
            fa: 'SES قابل تأیید 22,800: بدهکار دارایی در جریان تکمیل AR-11 و بستانکار GR/IR؛ تعهد باقی‌مانده 7,200 با بستن سفارش آزاد می‌شود.',
            en: 'Approve an SES of 22,800: debit AUC well AR-11, credit GR/IR; the remaining 7,200 commitment is released by closing the PO.',
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
              fa: 'پیگیری سفارش بر اساس اهمیت سطح‌بندی می‌شود و برای اقلام دیرتأمین با زمان‌بندی معکوس و گزارش مراحل کلیدی انجام می‌شود.',
              en: 'Expediting is tiered by criticality; for long-lead items it relies on backward scheduling and milestone reports.',
            },
            {
              fa: 'بازرس شخص ثالث طبق ITP در نقاط توقف و مشاهده حاضر می‌شود و پس از تکمیل آن‌ها IRN صادر می‌کند؛ بدون IRN ارسال و رسید قطعی ممنوع است.',
              en: 'TPI attends hold and witness points per the ITP and issues the IRN once they are complete; no shipment or final receipt without an IRN.',
            },
            {
              fa: 'بهای تمام‌شده کالای وارداتی شامل قیمت، حمل، بیمه، حقوق ورودی و هزینه‌های ترخیص است؛ مالیات قابل استرداد و هزینه‌های غیرعادی جزء آن نیستند.',
              en: 'Landed cost includes price, freight, insurance, duties and clearance costs; recoverable taxes and abnormal costs are excluded.',
            },
            {
              fa: 'رسید کالا با قیمت سفارش ثبت می‌شود: بدهکار موجودی (یا موضوع هزینه در تخصیص مستقیم) و بستانکار GR/IR؛ مرجوعی دقیقاً برعکس آن است.',
              en: 'The goods receipt is valued at the PO price: debit inventory (or the cost object for direct charges), credit GR/IR; a return is the exact reverse.',
            },
            {
              fa: 'تأیید SES رسید خدمات است و باید توسط کسی انجام شود که کار را دیده است؛ ردیف‌های غیرقابل مطالبه تأیید نمی‌شوند.',
              en: 'SES approval is the receipt for services and must be done by someone who saw the work; non-chargeable lines are not approved.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'پیگیری سفارش (Expediting)', en: 'Expediting' },
              def: { fa: 'پایش فعال سفارش از صدور تا تحویل بر پایه شواهد پیشرفت.', en: 'Active monitoring of an order from issue to delivery, based on evidence of progress.' },
            },
            {
              term: { fa: 'کالای دیرتأمین', en: 'Long-lead item' },
              def: { fa: 'کالایی که زمان ساخت و تحویل آن طولانی است و باید زودتر سفارش داده شود.', en: 'An item with a long manufacturing and delivery time that must be ordered early.' },
            },
            {
              term: { fa: 'بازرسی شخص ثالث (TPI)', en: 'Third-party inspection (TPI)' },
              def: { fa: 'بازرسی مستقل در کارخانه سازنده از طرف خریدار.', en: 'Independent inspection at the manufacturer’s works on the buyer’s behalf.' },
            },
            {
              term: { fa: 'برنامه بازرسی و آزمون (ITP)', en: 'Inspection and test plan (ITP)' },
              def: { fa: 'فهرست فعالیت‌های بازرسی با نقش هر طرف و نقاط توقف و مشاهده.', en: 'The list of inspection activities with each party’s role and the hold and witness points.' },
            },
            {
              term: { fa: 'گواهی ترخیص بازرسی (IRN)', en: 'Inspection release note (IRN)' },
              def: { fa: 'سندی که بازرس پس از تکمیل بازرسی صادر می‌کند و اجازه ارسال کالا را می‌دهد.', en: 'The document issued by the inspector after inspection that authorises shipment.' },
            },
            {
              term: { fa: 'گزارش عدم انطباق (NCR)', en: 'Non-conformance report (NCR)' },
              def: { fa: 'گزارش رسمی مغایرت کالا با الزامات که باید پیش از پذیرش بسته شود.', en: 'A formal report that goods do not meet requirements; it must be closed before acceptance.' },
            },
            {
              term: { fa: 'بهای تمام‌شده وارداتی (Landed Cost)', en: 'Landed cost' },
              def: { fa: 'قیمت خرید به‌علاوه همه مخارج مستقیم و غیرقابل استرداد تا رسیدن کالا به انبار.', en: 'Purchase price plus all direct, non-recoverable costs until the goods reach the warehouse.' },
            },
            {
              term: { fa: 'رسید کالا', en: 'Goods receipt' },
              def: { fa: 'سندی که ورود کالا به انبار یا موضوع هزینه را با ارجاع به سفارش ثبت می‌کند.', en: 'The document that records goods arriving into stock or a cost object, with reference to the PO.' },
            },
            {
              term: { fa: 'حساب واسط GR/IR', en: 'GR/IR clearing account' },
              def: { fa: 'حسابی که هنگام رسید بستانکار و هنگام ثبت فاکتور بدهکار می‌شود تا رسید و فاکتور با هم تطبیق یابند.', en: 'The account credited at receipt and debited at invoice posting, so that receipts and invoices can be matched.' },
            },
            {
              term: { fa: 'مرجوعی به تأمین‌کننده', en: 'Return to vendor' },
              def: { fa: 'سندی که کالای ردشده را برمی‌گرداند و رسید آن را برعکس می‌کند.', en: 'The document that sends rejected goods back and reverses their receipt.' },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: {
        fa: 'کالایی در هفته 48 در محل لازم است. حمل و ترخیص 3 هفته، بازرسی 2 هفته، ساخت 26 هفته و تأیید نقشه‌ها 5 هفته طول می‌کشد. سفارش حداکثر تا کدام هفته باید صادر شود؟',
        en: 'An item is needed on site in week 48. Transport and clearance take 3 weeks, inspection 2, manufacturing 26 and drawing approval 5. What is the latest week to issue the PO?',
      },
      options: [
        { fa: 'هفته 17', en: 'Week 17' },
        { fa: 'هفته 22', en: 'Week 22' },
        { fa: 'هفته 12', en: 'Week 12' },
        { fa: 'هفته 10', en: 'Week 10' },
      ],
      answer: 2,
      explain: {
        fa: '48 − 3 − 2 − 26 − 5 = 12. گزینه 17 تأیید نقشه‌ها را فراموش کرده و گزینه 22 ساخت را کامل حساب نکرده است. زمان‌بندی معکوس باید همه مراحل، از جمله کارهای خود خریدار، را در بر بگیرد.',
        en: '48 − 3 − 2 − 26 − 5 = 12. Week 17 forgets drawing approval and week 22 does not count manufacturing fully. Backward scheduling must include every step, including the buyer’s own tasks.',
      },
    },
    {
      q: {
        fa: 'گواهی ترخیص بازرسی (IRN) چیست؟',
        en: 'What is an inspection release note (IRN)?',
      },
      options: [
        { fa: 'سند گمرک برای آزادکردن کالا', en: 'The customs document that releases goods' },
        { fa: 'سندی که بازرس پس از تکمیل نقاط توقف و بررسی مدارک صادر می‌کند و اجازه ارسال می‌دهد', en: 'The document the inspector issues after hold points and document review, authorising shipment' },
        { fa: 'رسید انبار پس از ورود کالا', en: 'The warehouse receipt after the goods arrive' },
        { fa: 'تأییدیه پرداخت فاکتور', en: 'Approval to pay the invoice' },
      ],
      answer: 1,
      explain: {
        fa: 'IRN را بازرس شخص ثالث صادر می‌کند و می‌گوید کالا آزمون‌های لازم را گذرانده و می‌تواند ارسال شود. ترخیص گمرکی، رسید انبار و تأیید پرداخت هر کدام سند جداگانه‌ای در زنجیره‌اند.',
        en: 'The IRN is issued by the third-party inspector and says the goods passed the required tests and may ship. Customs release, the warehouse receipt and payment approval are separate documents in the chain.',
      },
    },
    {
      q: {
        fa: 'تفاوت نقطه توقف (Hold) با نقطه مشاهده (Witness) چیست؟',
        en: 'What is the difference between a hold point and a witness point?',
      },
      options: [
        { fa: 'در نقطه توقف، کار بدون حضور یا تأیید بازرس ادامه نمی‌یابد؛ در نقطه مشاهده، اگر بازرس نیاید کار ادامه می‌یابد', en: 'At a hold point work cannot proceed without the inspector; at a witness point work continues if the inspector does not attend' },
        { fa: 'هیچ تفاوتی ندارند', en: 'There is no difference' },
        { fa: 'نقطه مشاهده سخت‌گیرانه‌تر است', en: 'A witness point is stricter' },
        { fa: 'نقطه توقف فقط برای بررسی مدارک است', en: 'A hold point is only for document review' },
      ],
      answer: 0,
      explain: {
        fa: 'نقطه توقف برای آزمون‌هایی است که بعداً قابل دیدن یا تکرار نیستند، پس کار باید منتظر بازرس بماند. نقطه مشاهده فقط دعوت به حضور است. بررسی مدارک با کد R مشخص می‌شود، نه H.',
        en: 'A hold point is for tests that cannot be seen or repeated later, so work must wait for the inspector. A witness point is only an invitation to attend. Document review is coded R, not H.',
      },
    },
    {
      q: {
        fa: 'قیمت خرید کالای وارداتی 60,000، کرایه و بیمه 4,000، حقوق ورودی 5,000، حمل داخلی 1,000 و مالیات بر ارزش افزوده قابل استرداد 6,900 است. بهای تمام‌شده موجودی چقدر است؟',
        en: 'An import costs 60,000; freight and insurance are 4,000, duties 5,000, inland transport 1,000, and recoverable VAT 6,900. What is the inventory cost?',
      },
      options: [
        { fa: '76,900', en: '76,900' },
        { fa: '64,000', en: '64,000' },
        { fa: '75,000', en: '75,000' },
        { fa: '70,000', en: '70,000' },
      ],
      answer: 3,
      explain: {
        fa: '60,000 + 4,000 + 5,000 + 1,000 = 70,000. مالیات بر ارزش افزوده قابل استرداد جزء بهای تمام‌شده نیست و به حساب مالیات خرید می‌رود؛ پس 76,900 اشتباه است. 64,000 هم حقوق ورودی و حمل داخلی را جا انداخته است.',
        en: '60,000 + 4,000 + 5,000 + 1,000 = 70,000. Recoverable VAT is not part of cost; it goes to Input VAT, so 76,900 is wrong. 64,000 leaves out the duties and inland transport.',
      },
    },
    {
      q: {
        fa: 'ثبت خودکار ERP هنگام رسید یک قطعه یدکی برای انبار مرکزی کدام است؟',
        en: 'Which automatic ERP entry is made when a spare part is received into the Central Warehouse?',
      },
      options: [
        { fa: 'بدهکار هزینه تعمیر، بستانکار حساب‌های پرداختنی', en: 'Debit Repairs expense, credit Accounts payable' },
        { fa: 'بدهکار موجودی، بستانکار حساب‌های پرداختنی', en: 'Debit Inventory, credit Accounts payable' },
        { fa: 'بدهکار موجودی، بستانکار GR/IR با قیمت سفارش', en: 'Debit Inventory, credit GR/IR at the PO price' },
        { fa: 'ثبتی ندارد تا فاکتور برسد', en: 'No entry until the invoice arrives' },
      ],
      answer: 2,
      explain: {
        fa: 'رسید کالا موجودی را با قیمت سفارش بدهکار و GR/IR را بستانکار می‌کند. حساب‌های پرداختنی فقط با ثبت فاکتور بستانکار می‌شود، چون هنوز صورتحسابی از تأمین‌کننده نرسیده است. هزینه تعمیر هم هنگام حواله قطعه به دستور کار ثبت می‌شود، نه هنگام رسید.',
        en: 'The receipt debits Inventory at the PO price and credits GR/IR. Accounts payable is credited only when the invoice is posted, since no invoice exists yet. Repairs expense comes when the part is issued to a work order, not at receipt.',
      },
    },
    {
      q: {
        fa: 'سفارش 500 واحد است؛ 320 واحد رسید شده و 15 واحد معیوب مرجوع شده است. مانده باز سفارش چند واحد است؟',
        en: 'A PO is for 500 units; 320 have been received and 15 defective units returned. What is the open quantity?',
      },
      options: [
        { fa: '180', en: '180' },
        { fa: '165', en: '165' },
        { fa: '195', en: '195' },
        { fa: '485', en: '485' },
      ],
      answer: 2,
      explain: {
        fa: 'خالص دریافتی 320 − 15 = 305 و مانده باز 500 − 305 = 195 است. مرجوعی مانده باز را زیاد می‌کند، چون تأمین‌کننده هنوز باید آن 15 واحد را تحویل دهد. 180 مرجوعی را نادیده گرفته و 165 آن را اشتباهاً کم کرده است.',
        en: 'Net received is 320 − 15 = 305, so the open quantity is 500 − 305 = 195. A return increases the open quantity, because the supplier still owes those 15 units. 180 ignores the return and 165 subtracts it the wrong way.',
      },
    },
    {
      q: {
        fa: 'چه کسی باید صورت‌وضعیت (SES) سیمان‌کاری روی دکل را تأیید کند؟',
        en: 'Who should approve the SES for a cementing job on the rig?',
      },
      options: [
        { fa: 'خریداری که سفارش را صادر کرده است', en: 'The buyer who issued the PO' },
        { fa: 'نماینده شرکت در محل که کار را دیده است، مثلاً سرپرست حفاری', en: 'The company’s site representative who saw the work, such as the drilling supervisor' },
        { fa: 'سرپرست پیمانکار', en: 'The contractor’s supervisor' },
        { fa: 'کارمند حساب‌های پرداختنی', en: 'The accounts payable clerk' },
      ],
      answer: 1,
      explain: {
        fa: 'تأیید SES یعنی گواهی انجام کار؛ پس باید کسی تأیید کند که کار را دیده و با برگه کار روزانه مقایسه کرده است. اگر خریدار یا کارمند پرداخت تأیید کند، تفکیک وظایف از بین می‌رود؛ و پیمانکار نمی‌تواند کار خودش را تأیید کند.',
        en: 'Approving an SES certifies the work was done, so it must be someone who saw it and checked the field tickets. If the buyer or the AP clerk approves, segregation of duties is lost; and the contractor cannot approve its own work.',
      },
    },
    {
      q: {
        fa: 'مبلغ رسید کالا در ERP از کجا خوانده می‌شود؟',
        en: 'Where does the ERP take the goods receipt value from?',
      },
      options: [
        { fa: 'از فاکتور تأمین‌کننده', en: 'From the supplier’s invoice' },
        { fa: 'از قیمت روز بازار', en: 'From the current market price' },
        { fa: 'از برآورد درخواست خرید', en: 'From the requisition estimate' },
        { fa: 'از قیمت سفارش خرید', en: 'From the PO price' },
      ],
      answer: 3,
      explain: {
        fa: 'هنگام رسید، فاکتور معمولاً هنوز نرسیده است؛ پس ERP قیمت توافق‌شده در سفارش را به کار می‌برد. اگر فاکتور بعداً قیمت دیگری داشته باشد، اختلاف هنگام تطبیق فاکتور بررسی می‌شود. برآورد درخواست خرید فقط برای بودجه‌ریزی اولیه است.',
        en: 'At receipt the invoice has usually not arrived, so the ERP uses the price agreed in the PO. If the invoice later shows another price, the difference is handled during invoice matching. The requisition estimate is only for early budgeting.',
      },
    },
    {
      q: {
        fa: 'انتقال 50 شاخه لوله مغزی از انبار مرکزی به انبار میدان، در یک واحد ارزش‌گذاری، چه اثری بر سود و زیان دارد؟',
        en: 'Transferring 50 tubing joints from the Central to the Field Warehouse, within one valuation area, has what effect on profit or loss?',
      },
      options: [
        { fa: 'هیچ اثری؛ فقط محل کالا عوض می‌شود', en: 'None; only the location changes' },
        { fa: 'هزینه حمل مساوی ارزش لوله‌ها شناسایی می‌شود', en: 'A transport expense equal to the pipe value is recognised' },
        { fa: 'درآمد انتقال برای انبار مرکزی', en: 'Transfer revenue for the Central Warehouse' },
        { fa: 'هزینه مصرف لوله ثبت می‌شود', en: 'Tubing consumption expense is recorded' },
      ],
      answer: 0,
      explain: {
        fa: 'انتقال بین انبارها مصرف نیست؛ کالا هنوز در اختیار شرکت است. در یک واحد ارزش‌گذاری ثبت مالی ندارد و در واحدهای جدا فقط دو حساب موجودی جابه‌جا می‌شوند. هزینه مصرف فقط هنگام حواله به دستور کار یا چاه ثبت می‌شود.',
        en: 'A transfer is not consumption; the company still holds the goods. Within one valuation area there is no Finance posting, and between separate areas only two inventory accounts move. Consumption expense arises only when goods are issued to a work order or well.',
      },
    },
    {
      q: {
        fa: '6 شاخه لوله مغزی با قیمت سفارش 400 پس از رسید رد و مرجوع می‌شوند. ثبت ERP کدام است؟',
        en: '6 tubing joints at a PO price of 400 are rejected after receipt and returned. What does the ERP post?',
      },
      options: [
        { fa: 'بدهکار هزینه ضایعات 2,400، بستانکار موجودی 2,400', en: 'Debit Scrap expense 2,400, credit Inventory 2,400' },
        { fa: 'بدهکار حساب‌های پرداختنی 2,400، بستانکار موجودی 2,400', en: 'Debit Accounts payable 2,400, credit Inventory 2,400' },
        { fa: 'بدهکار GR/IR 2,400، بستانکار موجودی 2,400', en: 'Debit GR/IR 2,400, credit Inventory 2,400' },
        { fa: 'هیچ؛ فقط NCR صادر می‌شود', en: 'Nothing; only an NCR is raised' },
      ],
      answer: 2,
      explain: {
        fa: 'مرجوعی دقیقاً برعکس رسید است: 6 × 400 = 2,400 از موجودی کم و از مانده بستانکار GR/IR کم می‌شود. هنوز فاکتوری ثبت نشده، پس حساب‌های پرداختنی درگیر نیست؛ و کالا ضایعات شرکت نیست، چون به تأمین‌کننده برمی‌گردد.',
        en: 'A return is the exact reverse of the receipt: 6 × 400 = 2,400 comes off inventory and off the GR/IR credit. No invoice has been posted, so Accounts payable is not involved; and it is not the company’s scrap, because it goes back to the supplier.',
      },
    },
  ],
}
