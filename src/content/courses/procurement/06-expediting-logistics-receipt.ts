import type { Lesson } from '../../types'

const ac = {
  invField: { fa: 'موجودی مواد و قطعات: انبار میدان', en: 'Materials inventory: Field Warehouse' },
  invCentral: { fa: 'موجودی مواد و قطعات: انبار مرکزی', en: 'Materials inventory: Central Warehouse' },
  aucAR11: { fa: 'دارایی در جریان ساخت: چاه AR-07', en: 'Assets under construction: well AR-07' },
  grir: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing account' },
  freightClr: { fa: 'حساب واسط هزینه حمل و بیمه', en: 'Freight and insurance clearing' },
  customsClr: { fa: 'حساب واسط حقوق گمرکی و ترخیص', en: 'Customs and clearance clearing' },
  inputVat: { fa: 'مالیات بر ارزش افزوده خرید', en: 'Input VAT receivable' },
  demurrage: { fa: 'هزینه دموراژ و خواب کالا', en: 'Demurrage expense' },
  bank: { fa: 'موجودی نقد (بانک)', en: 'Cash at bank' },
  ppd: { fa: 'تفاوت قیمت خرید', en: 'Purchase price differences' },
  apJonoub: { fa: 'حساب‌های پرداختنی: ترابری جنوب', en: 'Accounts payable: Jonoub Transport' },
  apBroker: { fa: 'حساب‌های پرداختنی: کارگزاری گمرکی بندر', en: 'Accounts payable: Bandar Customs Brokerage' },
}

export const lesson: Lesson = {
  slug: 'expediting-logistics-receipt',
  number: 6,
  level: 'intermediate',
  minutes: 24,
  icon: 'CalendarClock',
  tone: 'gold',
  title: { fa: 'پیگیری سفارش، حمل و دریافت کالا', en: 'Expediting, Logistics and Receipt' },
  summary: {
    fa: 'سفارش صادرشده تا وقتی کالا سالم و به‌موقع در انبار یا روی دکل نرسیده، کاری انجام نداده است. در این درس پیگیری اقلام دیرتأمین، بازرسی شخص ثالث و گواهی ترخیص، حمل و ترخیص گمرکی، تحویل به انبار مرکزی، انبار میدان یا محل دکل، سپردن کالا به رسید کالا (GRN)، و ثبت خودکار مالی رسید همراه با هزینه‌های حمل و گمرک را می‌آموزید.',
    en: 'An order has achieved nothing until the goods reach the warehouse or the rig, on time and in good condition. This lesson covers expediting long-lead items, third-party inspection and release notes, shipping and customs clearance, delivery to the central or field warehouse or the rig site, the handover to the goods received note (GRN), and the automatic Finance posting at receipt together with freight and customs costs.',
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
      fa: 'تحویل در انبار یا محل دکل را سازمان دهید، آسیب حمل را درست ثبت کنید و کالا را با مدارک کامل به رسید کالا (GRN) بسپارید.',
      en: 'Organise delivery to the warehouse or rig site, record transit damage correctly, and hand goods over to the goods received note (GRN) with complete documents.',
    },
    {
      fa: 'ثبت مالی‌ای را که ERP هنگام GRN می‌سازد بنویسید (بدهکار موجودی یا موضوع هزینه، بستانکار GR/IR و حساب‌های واسط حمل و گمرک) و این حساب‌ها را با فاکتورها تسویه کنید.',
      en: 'Write the Finance entry the ERP generates at GRN (debit inventory or the cost object, credit GR/IR and the freight and customs clearing accounts) and clear those accounts with the invoices.',
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
            fa: 'سه هفته مانده به حفاری بخش 13-3/8 اینچ چاه AR-07، معلوم می‌شود ردیف 20 سفارش لوله جداری هنوز در کارخانه منتظر بازرسی است. اگر لوله به‌موقع نرسد، دکل باید منتظر بماند. با هزینه آماده‌به‌کار (Standby) فرضی 35,000 در روز، پنج روز انتظار یعنی 175,000؛ بیشتر از ارزش کل همان ردیف (108,000). در مقابل، یک بازدید پیگیری از کارخانه فقط چند هزار هزینه دارد.',
            en: 'Three weeks before drilling the 13-3/8" section of well AR-07, it turns out that line 20 of the casing order is still at the mill waiting for inspection. If the pipe is late, the rig waits. At an illustrative standby rate of 35,000 a day, five days of waiting cost 175,000, more than the whole line is worth (108,000). A visit to the mill to chase the order costs only a few thousand.',
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
            [{ fa: 'تأیید نقشه‌ها توسط مسار پترولیوم', en: 'Drawings approved by Masar Petroleum' }, 6, 8, { fa: 'با 2 هفته تأخیر', en: 'Done, 2 weeks late' }],
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
            fa: 'دو هفته از تأخیر این سفارش به خود مسار پترولیوم برمی‌گردد: تأیید نقشه‌ها به‌جای هفته 6 در هفته 8 انجام شد. شرکت نمی‌تواند برای تأخیری که خودش ایجاد کرده خسارت تأخیر بگیرد. گزارش پیگیری مستند و تاریخ‌دار همین را روشن می‌کند و از اختلاف بعدی با تأمین‌کننده جلوگیری می‌کند.',
            en: 'Two weeks of this delay belong to Masar Petroleum itself: drawings were approved in week 8 instead of week 6. The company cannot claim liquidated damages for delay it caused. A documented, dated expediting report makes this clear and prevents a later dispute with the supplier.',
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
            { fa: 'مسار پترولیوم', en: 'Masar Petroleum' },
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
            fa: 'در ایران، بازرسی شخص ثالث معمولاً به شرکت‌های بازرسی فنی دارای صلاحیت سپرده می‌شود و برای آن یک سفارش خدمات جداگانه صادر و کار با برگه ثبت خدمات (SES) پذیرفته می‌شود. هزینه بازرسی طبق سیاست شرکت یا به بهای تمام‌شده کالا اضافه می‌شود یا به پروژه می‌رود؛ در هر حال گزارش بازرسی و IRN را کنار سفارش نگه دارید.',
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
            fa: 'طبق IFRS (استاندارد IAS 2) و استاندارد حسابداری ایران درباره موجودی‌ها، بهای تمام‌شده کالا شامل قیمت خرید، حقوق ورودی و مالیات‌های **غیرقابل استرداد**، حمل، تخلیه و سایر مخارجی است که مستقیماً برای رساندن کالا به محل و وضعیت فعلی‌اش انجام شده است. مالیات‌های قابل استرداد، مانند مالیات بر ارزش افزوده‌ای که اعتبار آن قابل استفاده است، جزء بهای تمام‌شده نیستند. مسار پترولیوم 8 شیر کنترل برای ایستگاه تقویت فشار وارد کرده است:',
            en: 'Under IFRS (IAS 2) and the Iranian standard on inventories, the cost of goods includes the purchase price, import duties and **non-recoverable** taxes, transport, handling and other costs directly incurred to bring the goods to their present location and condition. Recoverable taxes, such as VAT that can be claimed back as a credit, are not part of cost. Masar Petroleum has imported 8 control valves for the compressor station:',
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
      title: {
        fa: 'تحویل در انبار یا محل دکل، و سپردن کالا به رسید',
        en: 'Delivery to the Warehouse or Rig Site, and Handover to Receipt',
      },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'محل تحویل در سفارش تعیین شده است. قطعات یدکی حیاتی و کالای وارداتی معمولاً به **انبار مرکزی** (`WH-10`) می‌روند؛ موجودی عملیاتی نزدیک چاه‌ها در **انبار میدان** (`WH-20`) نگهداری می‌شود؛ و کالایی که برای یک چاه خاص خریده شده، مثل لوله جداری AR-07، ممکن است مستقیم به انبار میدان یا محل دکل برسد. کار لجستیک در این نقطه تمام و کار دریافت آغاز می‌شود:',
            en: 'The delivery point is set in the PO. Critical spares and imported goods usually go to the **Central Warehouse** (`WH-10`); operating stock near the wells is kept in the **Field Warehouse** (`WH-20`); and goods bought for one specific well, like the AR-07 casing, may go straight to the Field Warehouse or the rig site. This is where logistics ends and receiving begins:',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'کنترل مدارک', en: 'Check the paperwork' },
              text: {
                fa: 'شماره سفارش و ردیف روی نشانه‌گذاری بسته‌ها و برگه تحویل با سفارش مقایسه می‌شود؛ IRN، گواهی‌ها و فهرست عدل‌بندی باید همراه باشند.',
                en: 'The PO and line numbers on the package marking and delivery note are compared with the PO; the IRN, certificates and packing list must be present.',
              },
            },
            {
              title: { fa: 'تخلیه، شمارش و بازدید ظاهری', en: 'Unload, count and inspect visually' },
              text: {
                fa: 'بسته‌ها شمارش می‌شوند و هر آسیب حمل همان لحظه روی بارنامه یادداشت و از آن عکس گرفته می‌شود.',
                en: 'Packages are counted, and any transport damage is noted on the consignment note and photographed on the spot.',
              },
            },
            {
              title: { fa: 'ثبت رسید کالا (GRN)', en: 'Post the goods received note (GRN)' },
              text: {
                fa: 'انباردار GRN را با ارجاع به سفارش ثبت می‌کند؛ کالایی که بازرسی ورودی لازم دارد به موجودی تحت بازرسی کیفیت می‌رود.',
                en: 'The storekeeper posts the GRN against the PO; items needing incoming inspection go into quality-inspection stock.',
              },
            },
            {
              title: { fa: 'بازرسی ورودی', en: 'Incoming inspection' },
              text: {
                fa: 'کالای سالم آزاد می‌شود؛ کالای معیوب با NCR رد و به تأمین‌کننده مرجوع می‌شود.',
                en: 'Good items are released; defective items are rejected with an NCR and returned to the supplier.',
              },
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'اگر کالا در راه آسیب ببیند، اینکوترمز تعیین می‌کند ضرر با کیست. در **FCA** و **CIF** ریسک هنگام تحویل به حمل‌کننده یا بارگیری در مبدأ به خریدار منتقل شده است؛ پس مسار پترولیوم باید از بیمه‌گر محموله (در CIF، بیمه‌ای که فروشنده به نفع خریدار گرفته) یا از حمل‌کننده خسارت بگیرد، نه از فروشنده. در **DAP** ریسک تا تحویل در مقصد با فروشنده است و او باید کالای سالم جایگزین بفرستد. یادداشت روی بارنامه و عکس‌ها، پایه هر ادعای خسارت‌اند.',
            en: 'If goods are damaged in transit, the Incoterms rule decides who bears the loss. Under **FCA** and **CIF** the risk passed to the buyer on handover to the carrier or loading at origin, so Masar Petroleum must claim from the cargo insurer (under CIF, the policy the seller bought for the buyer) or from the carrier, not from the seller. Under **DAP** the risk stays with the seller until delivery at destination, and the seller must send sound replacements. The note on the consignment note and the photos are the basis of any claim.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'رسید کالا و برگه ثبت خدمات', en: 'GRN and SES in full' },
          text: {
            fa: 'داده‌های رسید کالا (GRN)، تحویل ناقص و حد تحمل، مرجوعی و ابطال رسید، و برای خدمات، برگه ثبت خدمات (SES) و پذیرش آن، در درس «رسید کالا (GRN) و برگه ثبت خدمات (SES)» کامل آمده‌اند. در این درس فقط ثبت مالی رسید را در کنار هزینه‌های حمل و گمرک می‌بینیم.',
            en: 'GRN data, partial deliveries and tolerances, returns and GRN reversals, and for services the service entry sheet (SES) and its acceptance, are covered in full in the lesson on goods received notes (GRN) and service entry sheets (SES). Here we look only at the receipt posting together with freight and customs costs.',
          },
        },
      ],
    },
    {
      id: 'erp-logistics',
      title: {
        fa: 'در ERP: پیگیری محموله، رسید و هزینه‌های حمل',
        en: 'In the ERP: Shipment Tracking, Receipt and Delivery Costs',
      },
      blocks: [
        {
          type: 'diagram',
          id: 'erp-modules',
          caption: {
            fa: 'رسید کالا نقطه تلاقی ماژول‌هاست: خرید (سفارش و پیگیری)، انبار (مقدار و محل)، کیفیت (بازرسی)، پروژه (AFE) و مالی (ثبت خودکار و حساب‌های واسط).',
            en: 'The goods received note (GRN) is where modules meet: Procurement (the PO and expediting), Inventory (quantity and location), Quality (inspection), Projects (the AFE) and Finance (the automatic posting and clearing accounts).',
          },
        },
        {
          type: 'table',
          head: [
            { fa: 'جزء', en: 'Element' },
            { fa: 'در پیگیری، حمل و رسید', en: 'In expediting, shipping and receipt' },
          ],
          rows: [
            [
              { fa: 'داده پایه', en: 'Master data' },
              {
                fa: 'تأمین‌کننده کالا، حمل‌کننده و ترخیص‌کار (هر کدام داده پایه تأمین‌کننده)، داده پایه کالا، اینکوترمز و هزینه‌های برنامه‌ریزی‌شده تحویل در شرایط سفارش، محل‌های انبار',
                en: 'The goods supplier, the forwarder and the customs broker (each a vendor master), the material master, Incoterms and planned delivery costs in the PO conditions, storage locations',
              },
            ],
            [
              { fa: 'اسناد تراکنشی', en: 'Transaction documents' },
              {
                fa: 'تأییدیه سفارش، اعلام ارسال (Inbound Delivery) با تاریخ پیش‌بینی، وضعیت پیگیری، پیوست IRN، رسید کالا (GRN)، فاکتورهای حمل و ترخیص',
                en: 'PO confirmation, inbound delivery with its expected date, expediting status, IRN attachment, goods received note (GRN), freight and customs invoices',
              },
            ],
            [
              { fa: 'نقش‌ها', en: 'Roles' },
              {
                fa: 'پیگیر سفارش تاریخ‌ها و وضعیت را به‌روز می‌کند؛ هماهنگ‌کننده لجستیک با حمل‌کننده و ترخیص‌کار کار می‌کند؛ انباردار GRN را ثبت می‌کند؛ حساب‌های پرداختنی فاکتورهای حمل و ترخیص را ثبت می‌کند؛ واحد مالی حساب‌های واسط را پایش می‌کند',
                en: 'The expeditor updates dates and status; the logistics coordinator works with the forwarder and broker; the storekeeper posts the GRN; AP posts freight and customs invoices; Finance monitors the clearing accounts',
              },
            ],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'GRN با **قیمت سفارش** ثبت می‌شود و طرف بستانکار آن **حساب واسط رسید کالا و فاکتور (GR/IR)** است. اگر هزینه‌های حمل و گمرک از پیش در شرایط سفارش تعریف شده باشند، ERP هنگام GRN آن‌ها را هم به بهای تمام‌شده کالا اضافه می‌کند و هر کدام را در یک **حساب واسط** جداگانه بستانکار می‌کند تا بعداً با فاکتور حمل‌کننده و ترخیص‌کار تسویه شوند:',
            en: 'A GRN is valued at the **PO price** and credits the **GR/IR clearing account**. If freight and customs costs were defined in advance in the PO conditions, the ERP also adds them to the cost of the goods at GRN, crediting each to its own **clearing account**, to be cleared later by the forwarder’s and broker’s invoices:',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های خودکار ERP: رسید و هزینه‌های تحویل', en: 'Automatic ERP postings: receipt and delivery costs' },
          entries: [
            {
              date: { fa: 'GRN لوله مغزی (انبار میدان)', en: 'GRN for tubing (Field Warehouse)' },
              lines: [
                { account: ac.invField, debit: 72000 },
                { account: ac.grir, credit: 72000 },
              ],
              memo: { fa: '180 شاخه × 400 با قیمت سفارش `PO-45031`.', en: '180 joints × 400 at the `PO-45031` price.' },
            },
            {
              date: { fa: 'GRN شیرهای کنترل وارداتی', en: 'GRN for imported control valves' },
              lines: [
                { account: ac.invCentral, debit: 49000 },
                { account: ac.grir, credit: 40000 },
                { account: ac.freightClr, credit: 4200 },
                { account: ac.customsClr, credit: 4800 },
              ],
              memo: {
                fa: 'حمل برنامه‌ریزی‌شده 3,200 + 1,000 و گمرک 4,000 + 800؛ بهای تمام‌شده کل 49,000.',
                en: 'Planned freight 3,200 + 1,000 and customs 4,000 + 800; total landed cost 49,000.',
              },
            },
            {
              date: { fa: 'فاکتور حمل‌کننده', en: 'Forwarder’s invoice' },
              lines: [
                { account: ac.freightClr, debit: 4200 },
                { account: ac.apJonoub, credit: 4200 },
              ],
              memo: { fa: 'برای سادگی، مالیات بر ارزش افزوده در نظر گرفته نشده است.', en: 'VAT is left out for simplicity.' },
            },
            {
              date: { fa: 'فاکتور ترخیص‌کار', en: 'Customs broker’s invoice' },
              lines: [
                { account: ac.customsClr, debit: 4800 },
                { account: ac.apBroker, credit: 4800 },
              ],
              memo: { fa: 'حقوق ورودی 4,000 و کارمزد و هزینه بندری 800.', en: 'Import duties 4,000 plus fees and port charges 800.' },
            },
          ],
        },
        {
          type: 'tAccounts',
          title: { fa: 'حساب‌های واسط پس از فاکتورها', en: 'Clearing accounts after the invoices' },
          accounts: [
            { name: ac.freightClr, debits: [4200], credits: [4200] },
            { name: ac.customsClr, debits: [4800], credits: [4800] },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'هر دو حساب واسط صفر شده‌اند؛ اگر فاکتوری با مبلغ دیگری برسد، اختلاف مثل تفاوت قیمت کالا رفتار می‌کند. **انتقال بین انبارها**، مثلاً از انبار مرکزی به انبار میدان، فقط محل کالا را عوض می‌کند: اگر هر دو انبار در یک واحد ارزش‌گذاری باشند ثبت مالی ندارد، و اگر جدا باشند موجودی انبار میدان بدهکار و موجودی انبار مرکزی با همان بها بستانکار می‌شود. هیچ‌کدام سود و زیان ندارد.',
            en: 'Both clearing accounts are now zero; if an invoice arrives at a different amount, the difference behaves like a price difference on the goods. A **stock transfer**, for example from the Central to the Field Warehouse, only changes location: within one valuation area there is no Finance posting, and between separate areas Field Warehouse inventory is debited and Central Warehouse inventory credited at the same cost. Neither affects profit or loss.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'پیوند با بازیافت هزینه', en: 'Link to cost recovery' },
          text: {
            fa: 'تاریخ رسید و موضوع هزینه روی آن تعیین می‌کنند هزینه کی و کجا شناسایی شود. خرید با تخصیص مستقیم از لحظه GRN روی AFE یا چاه می‌نشیند؛ خرید برای انبار طبق بسیاری از رویه‌های حسابداری قراردادهای نفتی هنگام **حواله و مصرف** به حساب عملیات مشترک می‌رود (رویه دقیق را قرارداد تعیین می‌کند). هزینه‌های حمل و گمرک همراه کالا به همان چاه یا مرکز هزینه می‌رسند؛ پس فاکتور حمل‌کننده، اظهارنامه گمرکی و رسید پرداخت حقوق ورودی هم جزء پرونده شواهد حسابرس‌اند.',
            en: 'The receipt date and the cost object on it decide when and where a cost is recognised. Direct-charge purchases land on the AFE or well at GRN; under many petroleum-contract accounting procedures, stock purchases reach the joint account when **issued and used** (the contract sets the exact rule). Freight and customs costs travel with the goods to the same well or cost centre, so the forwarder’s invoice, the customs declaration and the duty payment receipt are also part of the auditor’s evidence.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در ایران اسناد واردات (ثبت سفارش، اظهارنامه گمرکی، قبض پرداخت حقوق ورودی و پروانه گمرکی) را به سفارش خرید در ERP پیوست کنید. اگر قرارداد نفتی برای کالای عملیات نفتی معافیت گمرکی دارد، همین اسناد شاهد استفاده درست از معافیت‌اند. فیلدهای تاریخ پیگیری (آمادگی، حمل، ورود به بندر) را به‌روز نگه دارید تا گزارش اقلام دیرکرد خودکار ساخته شود.',
            en: 'In Iran, attach the import documents (order registration, customs declaration, duty payment receipt and customs release permit) to the PO in the ERP. If the petroleum contract gives customs exemptions for goods used in petroleum operations, these documents prove the exemption was used properly. Keep the expediting date fields (ready, shipped, arrived at port) up to date so the late-items report builds itself.',
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
              fa: '**ارسال بدون IRN یا با NCR باز**: کالایی که بازرسی نشده وارد انبار می‌شود. راه درست: ارسال و رسید قطعی فقط با IRN معتبر.',
              en: '**Shipping without an IRN or with an open NCR**: uninspected goods enter the warehouse. Fix: shipment and final receipt only with a valid IRN.',
            },
            {
              fa: '**اسناد حمل ناقص**: فهرست عدل‌بندی با نشانه‌گذاری نمی‌خواند یا گواهی مبدأ نیست؛ نتیجه، توقف در گمرک و دموراژ. راه درست: فهرست کنترل اسناد پیش از ارسال.',
              en: '**Incomplete shipping documents**: the packing list does not match the marking or the certificate of origin is missing, leading to customs holds and demurrage. Fix: a document checklist before shipment.',
            },
            {
              fa: '**رسید پیش از ورود فیزیکی کالا**: برای بستن ماه یا کمک به پرداخت زودتر به تأمین‌کننده. این کار موجودی و بدهی ساختگی می‌سازد و نشانه خطر تقلب است.',
              en: '**Receipting before the goods arrive**: to close the month or help the supplier get paid sooner. This creates fictitious inventory and liabilities and is a fraud red flag.',
            },
            {
              fa: '**امضای «بدون ایراد» بارنامه**: آسیب حمل یادداشت نمی‌شود و ادعای بیمه از دست می‌رود. راه درست: یادداشت و عکس همان لحظه.',
              en: '**Signing the consignment note “clean”**: transit damage is not noted and the insurance claim is lost. Fix: note and photograph it on the spot.',
            },
            {
              fa: '**بهای تمام‌شده اشتباه**: افزودن مالیات بر ارزش افزوده قابل استرداد یا دموراژ به موجودی. راه درست: فقط مخارج مستقیم و غیرقابل استرداد.',
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
            fa: 'مسار پترولیوم 20 یاتاقان کمپرسور برای انبار مرکزی وارد کرده است. بهای تمام‌شده کل و هر یاتاقان را حساب کنید، اقلامی را که نباید به موجودی اضافه شوند جدا کنید و ثبت‌ها را بنویسید. مالیات بر ارزش افزوده گمرکی قابل استرداد است و دموراژ به دلیل تأخیر خود شرکت در تحویل مدارک ایجاد شده است.',
            en: 'Masar Petroleum imported 20 compressor bearings for the Central Warehouse. Calculate the total landed cost and the cost per bearing, separate the items that must not go into inventory, and write the entries. The import VAT is recoverable, and the demurrage arose from the company’s own delay in submitting documents.',
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
                  text: { fa: '22,000 + 1,800 + 2,600 + 400 + 200 = 27,000.', en: '22,000 + 1,800 + 2,600 + 400 + 200 = 27,000.' },
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
                  date: { fa: 'GRN در انبار مرکزی', en: 'GRN at the Central Warehouse' },
                  lines: [
                    { account: ac.invCentral, debit: 27000 },
                    { account: ac.grir, credit: 22000 },
                    { account: ac.freightClr, credit: 2000 },
                    { account: ac.customsClr, credit: 3000 },
                  ],
                  memo: { fa: 'حمل: 1,800 + 200؛ گمرک و ترخیص: 2,600 + 400.', en: 'Freight: 1,800 + 200; customs and clearance: 2,600 + 400.' },
                },
                {
                  date: { fa: 'پرداخت در گمرک', en: 'Paid at customs' },
                  lines: [
                    { account: ac.inputVat, debit: 2700 },
                    { account: ac.demurrage, debit: 500 },
                    { account: ac.bank, credit: 3200 },
                  ],
                  memo: { fa: 'مالیات قابل استرداد و دموراژ، جدا از موجودی.', en: 'Recoverable VAT and demurrage, kept out of inventory.' },
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
          title: { fa: 'تمرین 3: سرچاهی AR-12 و تصمیم حمل هوایی', en: 'Exercise 3: The AR-12 wellhead and the air-freight decision' },
          difficulty: 'medium',
          problem: {
            fa: 'سرچاهی و تاج چاه AR-12 (روی `AFE-2026-012`) باید هفته 40 در محل دکل باشد. زمان‌ها: تأیید نقشه‌ها 4 هفته، ساخت 22، بازرسی و FAT 2، حمل دریایی و ترخیص 5، حمل داخلی 1. (الف) آخرین هفته مجاز صدور سفارش چه بود؟ (ب) به دلیل طولانی شدن مناقصه، سفارش هفته 9 صادر شده است. کالا کی می‌رسد و اگر کاری نکنیم، هزینه آماده‌به‌کار دکل با نرخ فرضی 35,000 در روز چقدر می‌شود؟ (ج) دو راه هست: حمل هوایی که حمل و ترخیص را به 1 هفته می‌رساند و 90,000 هزینه اضافه دارد، یا پرداخت 60,000 به سازنده تا ساخت 2 هفته کوتاه شود. کدام بهتر است؟',
            en: 'The AR-12 wellhead and tree (on `AFE-2026-012`) must be at the rig site in week 40. Durations: drawing approval 4 weeks, manufacturing 22, inspection and FAT 2, sea freight and clearance 5, inland transport 1. (a) What was the latest week to issue the PO? (b) Because the tender ran long, the PO was issued in week 9. When will the goods arrive, and if nothing is done, what rig standby cost results at an illustrative 35,000 a day? (c) There are two options: air freight, which cuts freight and clearance to 1 week at an extra 90,000, or paying the manufacturer 60,000 to shorten manufacturing by 2 weeks. Which is better?',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'آخرین هفته سفارش', en: 'Latest PO week' },
                  text: { fa: '40 − 4 − 22 − 2 − 5 − 1 = 6.', en: '40 − 4 − 22 − 2 − 5 − 1 = 6.' },
                },
                {
                  title: { fa: 'ورود بدون اقدام', en: 'Arrival with no action' },
                  text: {
                    fa: '9 + 4 + 22 + 2 + 5 + 1 = 43؛ یعنی 3 هفته دیر. هزینه انتظار: 21 روز × 35,000 = 735,000.',
                    en: '9 + 4 + 22 + 2 + 5 + 1 = 43, three weeks late. Standby: 21 days × 35,000 = 735,000.',
                  },
                },
                {
                  title: { fa: 'مقایسه گزینه‌ها', en: 'Compare the options' },
                  text: {
                    fa: 'حمل هوایی: 9 + 4 + 22 + 2 + 1 + 1 = 39، به‌موقع. تسریع ساخت: 9 + 4 + 20 + 2 + 5 + 1 = 41، یک هفته دیر: 7 × 35,000 = 245,000 به‌علاوه 60,000.',
                    en: 'Air freight: 9 + 4 + 22 + 2 + 1 + 1 = 39, on time. Faster manufacturing: 9 + 4 + 20 + 2 + 5 + 1 = 41, one week late: 7 × 35,000 = 245,000 plus 60,000.',
                  },
                },
              ],
            },
            {
              type: 'table',
              head: [
                { fa: 'گزینه', en: 'Option' },
                { fa: 'هفته ورود', en: 'Arrival week' },
                { fa: 'هزینه اضافه', en: 'Extra cost' },
                { fa: 'هزینه انتظار دکل', en: 'Rig standby' },
                { fa: 'جمع', en: 'Total' },
              ],
              rows: [
                [{ fa: 'بدون اقدام', en: 'No action' }, 43, 0, 735000, 735000],
                [{ fa: 'حمل هوایی', en: 'Air freight' }, 39, 90000, 0, 90000],
                [{ fa: 'تسریع ساخت', en: 'Faster manufacturing' }, 41, 60000, 245000, 305000],
              ],
              numericCols: [1, 2, 3, 4],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'هزینه حمل هوایی جزء بهای چاه AR-12 (دارایی در جریان ساخت روی `AFE-2026-012`) است و با یادداشت تصمیم مستند معمولاً قابل بازیافت است؛ اما شرکا ممکن است علت ریشه‌ای، یعنی تأخیر مناقصه، را بپرسند. پس دلیل تصمیم و مقایسه گزینه‌ها را پیوست سفارش کنید.',
                en: 'The air freight is part of the cost of well AR-12 (assets under construction on `AFE-2026-012`) and, with a documented decision memo, is usually recoverable; but partners may ask about the root cause, the late tender. Attach the reasoning and the option comparison to the PO.',
              },
            },
          ],
          answer: {
            fa: 'آخرین هفته سفارش 6؛ بدون اقدام ورود هفته 43 و هزینه انتظار 735,000؛ حمل هوایی با 90,000 بهترین گزینه است.',
            en: 'Latest PO week 6; with no action, arrival in week 43 and 735,000 of standby; air freight at 90,000 is the best option.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تمرین 4: تسویه هزینه‌های تحویل با اختلاف', en: 'Exercise 4: Clearing delivery costs with a difference' },
          difficulty: 'hard',
          problem: {
            fa: 'GRN هشت شیر کنترل وارداتی با هزینه‌های برنامه‌ریزی‌شده ثبت شده است: حمل و بیمه 4,200 و گمرک و ترخیص 4,800 (همان ثبت‌های بخش ERP؛ هر شیر 6,125). اکنون فاکتورها می‌رسند: ترابری جنوب 4,500 (300 بیشتر از برنامه، به دلیل افزایش کرایه دریایی که پذیرفته شده است) و کارگزاری گمرکی بندر 4,800. تا این زمان 2 شیر به دستور کار `WO-45188` کمپرسور K-102 حواله شده و 6 شیر هنوز در انبار مرکزی است. کالا با میانگین موزون متحرک ارزش‌گذاری می‌شود. (الف) ثبت دو فاکتور را بنویسید (مالیات بر ارزش افزوده را نادیده بگیرید). (ب) ارزش 6 شیر باقی‌مانده پس از ثبت چقدر است؟ (ج) مانده حساب‌های واسط چقدر است؟',
            en: 'The GRN for eight imported control valves was posted with planned delivery costs: freight and insurance 4,200 and customs and clearance 4,800 (the entries in the ERP section; 6,125 per valve). Now the invoices arrive: Jonoub Transport 4,500 (300 above plan because of an accepted sea-freight increase) and Bandar Customs Brokerage 4,800. By now 2 valves have been issued to work order `WO-45188` for compressor K-102 and 6 are still in the Central Warehouse. Stock is valued at moving average. (a) Write the entries for both invoices (ignore VAT). (b) What is the value of the 6 remaining valves after posting? (c) What are the clearing-account balances?',
          },
          hint: {
            fa: 'اختلاف را به نسبت کالای موجود و مصرف‌شده تقسیم کنید.',
            en: 'Split the difference between stock on hand and stock already used.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'اختلاف', en: 'The difference' },
                  text: { fa: '4,500 − 4,200 = 300.', en: '4,500 − 4,200 = 300.' },
                },
                {
                  title: { fa: 'تقسیم', en: 'Split' },
                  text: {
                    fa: 'سهم 6 شیر موجود: 300 × 6 ÷ 8 = 225 به موجودی. سهم 2 شیر مصرف‌شده: 300 × 2 ÷ 8 = 75 به تفاوت قیمت خرید.',
                    en: 'Share of the 6 valves on hand: 300 × 6 ÷ 8 = 225 to inventory. Share of the 2 used valves: 300 × 2 ÷ 8 = 75 to purchase price differences.',
                  },
                },
                {
                  title: { fa: 'ارزش باقی‌مانده', en: 'Remaining value' },
                  text: {
                    fa: 'پیش از فاکتور: 6 × 6,125 = 36,750. پس از آن: 36,750 + 225 = 36,975.',
                    en: 'Before the invoice: 6 × 6,125 = 36,750. After it: 36,750 + 225 = 36,975.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'فاکتور ترابری جنوب', en: 'Jonoub Transport invoice' },
                  lines: [
                    { account: ac.freightClr, debit: 4200 },
                    { account: ac.invCentral, debit: 225 },
                    { account: ac.ppd, debit: 75 },
                    { account: ac.apJonoub, credit: 4500 },
                  ],
                },
                {
                  date: { fa: 'فاکتور کارگزاری گمرکی بندر', en: 'Bandar Customs Brokerage invoice' },
                  lines: [
                    { account: ac.customsClr, debit: 4800 },
                    { account: ac.apBroker, credit: 4800 },
                  ],
                },
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              text: {
                fa: 'هر دو حساب واسط صفر می‌شوند. اگر اختلاف از حد تحمل بیشتر بود، فاکتور حمل‌کننده هم مثل فاکتور کالا متوقف می‌شد تا خریدار افزایش کرایه را تأیید کند.',
                en: 'Both clearing accounts go to zero. Had the difference exceeded the tolerance, the forwarder’s invoice would have been blocked like a goods invoice until the buyer approved the freight increase.',
              },
            },
          ],
          answer: {
            fa: 'اختلاف 300: 225 به موجودی و 75 به تفاوت قیمت خرید؛ ارزش 6 شیر 36,975؛ هر دو حساب واسط صفر.',
            en: 'The 300 difference: 225 to inventory and 75 to purchase price differences; the 6 valves are worth 36,975; both clearing accounts are zero.',
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
              fa: 'رسید کالا (GRN) با قیمت سفارش ثبت می‌شود: بدهکار موجودی یا موضوع هزینه، بستانکار GR/IR؛ هزینه‌های برنامه‌ریزی‌شده حمل و گمرک حساب واسط خودشان را دارند و با فاکتور تسویه می‌شوند.',
              en: 'The GRN is valued at the PO price: debit inventory or the cost object, credit GR/IR; planned freight and customs costs have their own clearing accounts, cleared by the invoices.',
            },
            {
              fa: 'آسیب حمل همان لحظه ثبت می‌شود؛ اینکوترمز تعیین می‌کند خسارت از فروشنده، بیمه‌گر یا حمل‌کننده گرفته شود.',
              en: 'Transit damage is recorded on the spot; the Incoterms rule decides whether to claim from the seller, the insurer or the carrier.',
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
              term: { fa: 'هزینه‌های برنامه‌ریزی‌شده تحویل', en: 'Planned delivery costs' },
              def: { fa: 'حمل، بیمه و گمرکی که از پیش در سفارش تعریف می‌شوند و هنگام GRN به بهای کالا اضافه و در حساب واسط بستانکار می‌شوند.', en: 'Freight, insurance and customs defined in the PO in advance, added to the goods’ cost at GRN and credited to clearing accounts.' },
            },
            {
              term: { fa: 'رسید کالا (GRN)', en: 'Goods received note (GRN)' },
              def: { fa: 'سندی که ورود کالا به انبار یا موضوع هزینه را با ارجاع به سفارش ثبت می‌کند.', en: 'The document that records goods arriving into stock or a cost object, with reference to the PO.' },
            },
            {
              term: { fa: 'دموراژ', en: 'Demurrage' },
              def: { fa: 'هزینه نگهداری کالا یا کانتینر به دلیل تأخیر در ترخیص یا تخلیه؛ هزینه دوره است، نه بهای کالا.', en: 'Charges for holding goods or containers because clearance or unloading was late; a period expense, not part of the goods’ cost.' },
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
      q: { fa: 'گواهی ترخیص بازرسی (IRN) چیست؟', en: 'What is an inspection release note (IRN)?' },
      options: [
        { fa: 'سند گمرک برای آزادکردن کالا', en: 'The customs document that releases goods' },
        { fa: 'سندی که بازرس پس از تکمیل نقاط توقف و بررسی مدارک صادر می‌کند و اجازه ارسال می‌دهد', en: 'The document the inspector issues after hold points and document review, authorising shipment' },
        { fa: 'رسید انبار پس از ورود کالا', en: 'The warehouse receipt after the goods arrive' },
        { fa: 'تأییدیه پرداخت فاکتور', en: 'Approval to pay the invoice' },
      ],
      answer: 1,
      explain: {
        fa: 'IRN را بازرس شخص ثالث صادر می‌کند و می‌گوید کالا آزمون‌های لازم را گذرانده و می‌تواند ارسال شود. ترخیص گمرکی، رسید کالا و تأیید پرداخت هر کدام سند جداگانه‌ای در زنجیره‌اند.',
        en: 'The IRN is issued by the third-party inspector and says the goods passed the required tests and may ship. Customs release, the GRN and payment approval are separate documents in the chain.',
      },
    },
    {
      q: { fa: 'تفاوت نقطه توقف (Hold) با نقطه مشاهده (Witness) چیست؟', en: 'What is the difference between a hold point and a witness point?' },
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
        fa: 'ثبت خودکار ERP هنگام رسید کالا (GRN) برای یک قطعه یدکی در انبار مرکزی کدام است؟',
        en: 'Which automatic ERP entry is made when a GRN is posted for a spare part received into the Central Warehouse?',
      },
      options: [
        { fa: 'بدهکار هزینه تعمیر، بستانکار حساب‌های پرداختنی', en: 'Debit Repairs expense, credit Accounts payable' },
        { fa: 'بدهکار موجودی، بستانکار حساب‌های پرداختنی', en: 'Debit Inventory, credit Accounts payable' },
        { fa: 'بدهکار موجودی، بستانکار GR/IR با قیمت سفارش', en: 'Debit Inventory, credit GR/IR at the PO price' },
        { fa: 'ثبتی ندارد تا فاکتور برسد', en: 'No entry until the invoice arrives' },
      ],
      answer: 2,
      explain: {
        fa: 'GRN موجودی را با قیمت سفارش بدهکار و GR/IR را بستانکار می‌کند. حساب‌های پرداختنی فقط با ثبت فاکتور بستانکار می‌شود، چون هنوز صورتحسابی نرسیده است. هزینه تعمیر هم هنگام حواله قطعه به دستور کار ثبت می‌شود، نه هنگام رسید.',
        en: 'The GRN debits Inventory at the PO price and credits GR/IR. Accounts payable is credited only when the invoice is posted, since no invoice exists yet. Repairs expense comes when the part is issued to a work order, not at receipt.',
      },
    },
    {
      q: {
        fa: 'محموله‌ای با شرط CIF در دریا آسیب می‌بیند. مسار پترولیوم باید خسارت را از کجا بگیرد؟',
        en: 'A CIF shipment is damaged at sea. Where should Masar Petroleum seek compensation?',
      },
      options: [
        { fa: 'از بیمه‌گر محموله، با بیمه‌نامه‌ای که فروشنده به نفع خریدار گرفته است؛ چون ریسک هنگام بارگیری منتقل شده', en: 'From the cargo insurer, under the policy the seller bought for the buyer, because risk passed at loading' },
        { fa: 'از فروشنده؛ او باید رایگان جایگزین بفرستد', en: 'From the seller, who must replace the goods free of charge' },
        { fa: 'همیشه از شرکت حمل', en: 'Always from the shipping line' },
        { fa: 'از هیچ‌کس؛ ضرر به هزینه می‌رود', en: 'From nobody; the loss is simply expensed' },
      ],
      answer: 0,
      explain: {
        fa: 'در CIF فروشنده کرایه و بیمه را تا بندر مقصد می‌پردازد، اما ریسک هنگام بارگیری در مبدأ به خریدار منتقل می‌شود. پس خریدار با بیمه‌نامه‌ای که به نفعش صادر شده ادعا می‌کند. فروشنده فقط در قواعدی مثل DAP تا مقصد مسئول آسیب است.',
        en: 'Under CIF the seller pays freight and insurance to the destination port, but risk passes to the buyer on loading at origin. The buyer therefore claims under the policy issued in its favour. The seller bears transit damage to destination only under rules such as DAP.',
      },
    },
    {
      q: {
        fa: 'به دلیل تأخیر خود شرکت در ارائه مدارک، 500 دموراژ پرداخت شده است. این مبلغ چگونه ثبت می‌شود؟',
        en: 'Because the company submitted documents late, 500 of demurrage was paid. How is it recorded?',
      },
      options: [
        { fa: 'به بهای تمام‌شده موجودی اضافه می‌شود', en: 'Added to the inventory cost' },
        { fa: 'هزینه غیرعادی دوره است و به موجودی اضافه نمی‌شود', en: 'An abnormal period expense, not added to inventory' },
        { fa: 'به دارایی در جریان ساخت چاه اضافه می‌شود', en: 'Added to assets under construction for the well' },
        { fa: 'از تأمین‌کننده کالا مطالبه می‌شود', en: 'Claimed from the goods supplier' },
      ],
      answer: 1,
      explain: {
        fa: 'IAS 2 هزینه‌های غیرعادی را از بهای تمام‌شده موجودی خارج می‌کند؛ دموراژ ناشی از تأخیر خود شرکت برای رساندن کالا به محل لازم نبوده است. مطالبه از تأمین‌کننده هم معنا ندارد، چون تقصیر با شرکت بوده است.',
        en: 'IAS 2 excludes abnormal amounts from inventory cost; demurrage caused by the company’s own delay was not needed to bring the goods to their location. Claiming it from the supplier makes no sense, because the fault was the company’s.',
      },
    },
    {
      q: {
        fa: 'تأخیر یک کالا 6 روز توقف دکل با هزینه روزانه 35,000 ایجاد می‌کند. حمل هوایی با 80,000 هزینه اضافه این تأخیر را کاملاً حذف می‌کند. صرفه‌جویی خالص حمل هوایی چقدر است؟',
        en: 'A late item would idle the rig for 6 days at 35,000 a day. Air freight at an extra 80,000 removes the delay completely. What is the net saving from air freight?',
      },
      options: [
        { fa: '80,000', en: '80,000' },
        { fa: '210,000', en: '210,000' },
        { fa: '130,000', en: '130,000' },
        { fa: '290,000', en: '290,000' },
      ],
      answer: 2,
      explain: {
        fa: 'هزینه انتظار 6 × 35,000 = 210,000 است. با کسر 80,000 هزینه حمل هوایی، صرفه‌جویی خالص 130,000 می‌شود. 210,000 هزینه حمل هوایی را کم نکرده و 290,000 آن را اشتباهاً جمع کرده است.',
        en: 'Standby would cost 6 × 35,000 = 210,000. Less the 80,000 air freight, the net saving is 130,000. 210,000 ignores the air-freight cost and 290,000 wrongly adds it.',
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
        fa: 'هنگام GRN، حمل برنامه‌ریزی‌شده 4,200 در حساب واسط حمل بستانکار شد. فاکتور حمل‌کننده 4,500 است و همه کالا هنوز در انبار است (میانگین موزون متحرک). اختلاف 300 کجا می‌رود؟',
        en: 'At GRN, planned freight of 4,200 was credited to the freight clearing account. The forwarder invoices 4,500 and all the goods are still in stock (moving average). Where does the 300 difference go?',
      },
      options: [
        { fa: 'به حساب تفاوت قیمت خرید', en: 'To purchase price differences' },
        { fa: 'کل 4,500 دوباره به موجودی اضافه می‌شود', en: 'The full 4,500 is added to inventory again' },
        { fa: 'روی حساب واسط حمل باقی می‌ماند', en: 'It stays on the freight clearing account' },
        { fa: 'به موجودی اضافه می‌شود', en: 'It is added to inventory' },
      ],
      answer: 3,
      explain: {
        fa: 'حساب واسط فقط با همان 4,200 برنامه‌ریزی‌شده تسویه می‌شود. چون همه کالا هنوز در انبار است، اختلاف 300 به ارزش موجودی اضافه می‌شود؛ فقط سهم کالای مصرف‌شده به تفاوت قیمت خرید می‌رفت. افزودن دوباره کل 4,500، حمل را دو بار حساب می‌کند.',
        en: 'The clearing account is cleared with the same planned 4,200. Because all the goods are still in stock, the 300 difference is added to inventory; only the share of goods already used would go to price differences. Adding the full 4,500 again would count freight twice.',
      },
    },
  ],
}
