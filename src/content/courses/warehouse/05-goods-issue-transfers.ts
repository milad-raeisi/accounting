import type { Lesson } from '../../types'

const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'goods-issue-transfers',
  number: 5,
  level: 'intermediate',
  minutes: 22,
  icon: 'ArrowLeftRight',
  tone: 'expense',
  title: { fa: 'حواله انبار، انتقال و برگشت کالا', en: 'Goods Issue, Transfers and Returns' },
  summary: {
    fa: 'وقتی کالا از انبار خارج می‌شود، به هزینه یا بخشی از یک دارایی در حال ساخت تبدیل می‌شود. در این درس با مثال شرکت مسار پترولیوم، رزرو کالا، برداشت و حواله انبار، انتقال میان انبار مرکزی و انبار میدان و برگشت کالا را دنبال می‌کنیم و می‌بینیم ERP برای هر کدام چه ثبتی در مالی می‌سازد.',
    en: 'When material leaves the warehouse it becomes an expense or part of an asset under construction. Using Masar Petroleum, this lesson follows reservations, picking and goods issues, transfers between the Central and Field warehouses, and returns to stock, and shows the entry the ERP posts to Finance for each.',
  },
  objectives: [
    { fa: 'رزرو کالا را توضیح دهید و موجودی قابل استفاده را محاسبه کنید.', en: 'Explain reservations and calculate available stock.' },
    {
      fa: 'برداشت کالا و حواله انبار را با مدارک و کنترل‌های درست انجام دهید.',
      en: 'Carry out picking and a goods issue with the right documents and checks.',
    },
    {
      fa: 'برای هر حواله، موضوع هزینه (مرکز هزینه، دستور کار، پروژه یا AFE) و برچسب بازیافت هزینه درست را انتخاب کنید.',
      en: 'Choose the right cost object (cost centre, work order, project or AFE) and cost-recovery tag for each issue.',
    },
    {
      fa: 'ثبت‌هایی را که ERP برای حواله، انتقال و برگشت کالا در مالی می‌سازد بنویسید.',
      en: 'Write the entries the ERP posts to Finance for issues, transfers and returns.',
    },
    {
      fa: 'انتقال یک‌مرحله‌ای و دومرحله‌ای را از هم تشخیص دهید و برگشت کالا را درست ثبت کنید.',
      en: 'Tell one-step from two-step transfers and record returns to stock correctly.',
    },
  ],
  sections: [
    {
      id: 'issue-chain',
      title: { fa: 'از درخواست تا خروج کالا: چرا حواله انبار مهم است؟', en: 'From request to issue: why the goods issue matters' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'ساعت 6 صبح، کمپرسور **K-201** در ایستگاه تقویت فشار میدان آریا به دلیل شکستن یک سوپاپ از مدار خارج می‌شود. تیم تعمیرات فوراً **کیت سوپاپ** (کالای 300500) لازم دارد. انباردار انبار میدان کیت را تحویل می‌دهد و با خودش می‌گوید: «کاغذبازی‌اش بماند برای بعد». کمپرسور دوباره راه می‌افتد، اما سه مشکل پنهان می‌ماند: سیستم هنوز کیت را در انبار نشان می‌دهد و برنامه‌ریز مواد سفارش مجدد نمی‌دهد؛ هزینه 4,500 به مرکز هزینه ایستگاه (CC-ARY-CMP) نمی‌رسد و هزینه نگهداری کمپرسور کمتر از واقع گزارش می‌شود؛ و چون سندی برای مصرف وجود ندارد، این هزینه در ادعای بازیافت هزینه قابل دفاع نیست.',
            en: 'At 6 a.m., compressor **K-201** at the Arya field compressor station trips because a valve has broken. The maintenance crew needs a **valve kit** (material 300500) right away. The Field Warehouse storekeeper hands one over and thinks, "I’ll do the paperwork later." The compressor runs again, but three problems stay hidden: the system still shows the kit on the shelf, so the material planner does not reorder; the 4,500 cost never reaches the compressor station cost centre (CC-ARY-CMP), so the compressor’s maintenance cost is understated; and with no document proving the material was used, the cost is hard to defend in a cost-recovery claim.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**حواله انبار** سندی است که خروج کالا از انبار را ثبت می‌کند. این سند سه کار را هم‌زمان انجام می‌دهد: مقدار موجودی را کم می‌کند، ارزش موجودی را کاهش می‌دهد و همان ارزش را به یک **موضوع هزینه** (مرکز هزینه، دستور کار یا پروژه) منتقل می‌کند. پیش از حواله معمولاً یک **رزرو کالا** ثبت شده است و پس از آن گاهی **برگشت کالا** یا **انتقال** به انبار دیگر رخ می‌دهد. این درس همین زنجیره را از ابتدا تا ثبت در مالی دنبال می‌کند.',
            en: 'A **goods issue** is the document that records material leaving the warehouse. It does three things at once: it reduces the quantity in stock, reduces the stock value, and charges that value to a **cost object** (a cost centre, a work order or a project). A goods issue is usually preceded by a **reservation**, and is sometimes followed by a **return to stock** or a **transfer** to another warehouse. This lesson follows that chain from the start to the Finance posting.',
          },
        },
        {
          type: 'diagram',
          id: 'warehouse-flow',
          caption: {
            fa: 'جریان کالا در انبار. نیمه اول این جریان (رسید کالا (GRN)، بازرسی، جایابی و نگهداری) پیش از این درس آمده است؛ این درس روی نیمه دوم تمرکز دارد: رزرو و خروج کالا.',
            en: 'Material flow through the warehouse. The first half (goods received note (GRN), inspection, put-away and storage) came before this lesson; this lesson focuses on the second half: reservation and issue.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'چهار حرکت کالا در این درس', en: 'The four movements in this lesson' },
          head: [
            { fa: 'حرکت کالا', en: 'Movement' },
            { fa: 'آنچه در عمل رخ می‌دهد', en: 'What physically happens' },
            { fa: 'اثر بر موجودی', en: 'Effect on stock' },
            { fa: 'اثر در مالی', en: 'Effect in Finance' },
          ],
          rows: [
            [
              { fa: 'رزرو کالا', en: 'Reservation' },
              { fa: 'هیچ کالایی جابه‌جا نمی‌شود؛ فقط مقداری برای یک نیاز مشخص کنار گذاشته می‌شود', en: 'Nothing moves; a quantity is set aside for a specific need' },
              { fa: 'موجودی قابل استفاده کم می‌شود؛ موجودی فیزیکی تغییر نمی‌کند', en: 'Available stock falls; physical stock is unchanged' },
              { fa: 'بدون ثبت', en: 'No entry' },
            ],
            [
              { fa: 'حواله انبار', en: 'Goods issue' },
              { fa: 'کالا به مصرف‌کننده (دکل، کارگاه، ایستگاه) تحویل می‌شود', en: 'Material is handed to the user (rig, workshop, station)' },
              { fa: 'مقدار و ارزش کم می‌شود', en: 'Quantity and value fall' },
              { fa: 'بدهکار هزینه یا دارایی در جریان ساخت، بستانکار موجودی', en: 'Dr expense or assets under construction, Cr inventory' },
            ],
            [
              { fa: 'انتقال بین انبارها', en: 'Transfer between warehouses' },
              { fa: 'کالا از یک انبار به انبار دیگر می‌رود', en: 'Material moves from one warehouse to another' },
              { fa: 'محل نگهداری تغییر می‌کند', en: 'The storage location changes' },
              { fa: 'بدون ثبت (داخل یک حوزه ارزش‌گذاری) یا از طریق موجودی در راه', en: 'No entry (inside one valuation area) or through stock in transit' },
            ],
            [
              { fa: 'برگشت به انبار', en: 'Return to stock' },
              { fa: 'کالای مصرف‌نشده به انبار برمی‌گردد', en: 'Unused material comes back to the warehouse' },
              { fa: 'مقدار و ارزش زیاد می‌شود', en: 'Quantity and value rise' },
              { fa: 'عکس حواله: بدهکار موجودی، بستانکار همان موضوع هزینه', en: 'Reverse of the issue: Dr inventory, Cr the same cost object' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'قاعده طلایی', en: 'The golden rule' },
          text: {
            fa: 'هیچ کالایی **بدون سند تأییدشده** از انبار خارج نمی‌شود و هر سند **در همان نوبت کاری** که کالا جابه‌جا شده در سیستم ثبت می‌شود. در موارد اضطراری (مثل خرابی K-201) هم سند حذف نمی‌شود؛ فقط مسیر تأیید کوتاه‌تر می‌شود.',
            en: 'No material leaves the warehouse **without an approved document**, and every document is posted **in the same shift** as the physical movement. In emergencies (like the K-201 failure) the document is not skipped; only the approval path gets shorter.',
          },
        },
      ],
    },
    {
      id: 'reservations',
      title: { fa: 'رزرو کالا: نگه‌داشتن موجودی برای یک نیاز مشخص', en: 'Reservations: holding stock for a specific need' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**رزرو کالا** درخواستی است که در ERP ثبت می‌شود تا مقدار مشخصی از یک کالا برای یک نیاز مشخص و در تاریخ مشخص کنار گذاشته شود و دیگران آن را مصرف نکنند. رزرو کالا را جابه‌جا نمی‌کند و هیچ سندی در مالی نمی‌سازد؛ فقط به انباردار و برنامه‌ریز مواد می‌گوید این مقدار «صاحب دارد».',
            en: 'A **reservation** is a request recorded in the ERP that sets aside a specific quantity of a material for a specific need on a specific date, so that nobody else consumes it. A reservation moves nothing and creates no Finance entry; it simply tells the storekeeper and the material planner that this quantity is already spoken for.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**دستور کار نگهداری**: برنامه‌ریز نگهداری قطعات لازم را به دستور کار اضافه می‌کند (مثلاً دو کیت سوپاپ برای WO-45120، تعویض سوپاپ‌های K-201) و سیستم خودکار رزرو می‌سازد.',
              en: '**Maintenance work orders**: the maintenance planner adds the parts to the work order (for example two valve kits on WO-45120, the K-201 valve replacement) and the system creates the reservation automatically.',
            },
            {
              fa: '**پروژه و AFE**: مهندس حفاری لوله جداری و مغزی چاه AR-12 را برای پروژه P-AR12 (ذیل AFE-2026-012) رزرو می‌کند؛ معمولاً چند هفته پیش از آن‌که حفاری به آن بخش چاه برسد.',
              en: '**Projects and AFEs**: the drilling engineer reserves casing and tubing for well AR-12 against project P-AR12 (under AFE-2026-012), usually weeks before drilling reaches that section of the well.',
            },
            {
              fa: '**درخواست مرکز هزینه**: واحد بهره‌برداری برای مصرف جاری، مثلاً بازدارنده خوردگی چاه‌ها، درخواست کالا به نام مرکز هزینه CC-ARY-PRD ثبت می‌کند.',
              en: '**Cost-centre requests**: the production team raises a material request against cost centre CC-ARY-PRD for routine consumption, such as corrosion inhibitor for the wells.',
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'فیلدهای اصلی یک رزرو', en: 'The main fields of a reservation' },
          head: [
            { fa: 'فیلد', en: 'Field' },
            { fa: 'مثال: RES-50231', en: 'Example: RES-50231' },
          ],
          rows: [
            [{ fa: 'شماره رزرو', en: 'Reservation number' }, { fa: 'RES-50231', en: 'RES-50231' }],
            [{ fa: 'کالا', en: 'Material' }, { fa: '100100، لوله جداری 9-5/8 اینچ L80', en: '100100, casing 9-5/8" L80' }],
            [{ fa: 'مقدار', en: 'Quantity' }, { fa: '30 شاخه', en: '30 joints' }],
            [{ fa: 'تاریخ نیاز', en: 'Requirement date' }, { fa: 'روز 14 حفاری (شروع رانش لوله جداری)', en: 'Drilling day 14 (casing run starts)' }],
            [{ fa: 'انبار تحویل‌دهنده', en: 'Issuing warehouse' }, { fa: 'WH-20، انبار میدان (محوطه لوله)', en: 'WH-20, Field Warehouse (pipe yard)' }],
            [{ fa: 'موضوع هزینه', en: 'Cost object' }, { fa: 'پروژه P-AR12 ذیل AFE-2026-012', en: 'Project P-AR12 under AFE-2026-012' }],
            [{ fa: 'دسته بازیافت هزینه', en: 'Cost-recovery category' }, { fa: 'قابل بازیافت: هزینه سرمایه‌ای توسعه', en: 'Recoverable: development capex' }],
            [
              { fa: 'درخواست‌کننده و تأییدکننده', en: 'Requester and approver' },
              { fa: 'مهندس حفاری؛ مدیر حفاری (صاحب AFE)', en: 'Drilling engineer; drilling manager (AFE owner)' },
            ],
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'موجودی قابل استفاده = موجودی آزاد در انبار − رزروهای باز',
            en: 'Available stock = Unrestricted stock on hand − Open reservations',
          },
          note: {
            fa: 'کالایی که در بازرسی کیفی یا مسدود است جزو موجودی آزاد نیست. مثال: انبار میدان 40 شاخه لوله جداری 100100 دارد و 30 شاخه برای AR-12 رزرو شده است؛ پس فقط 10 شاخه قابل استفاده است. اگر تیم تعمیر چاه 15 شاخه بخواهد، سیستم هشدار می‌دهد که فقط 10 شاخه آزاد است.',
            en: 'Stock in quality inspection and blocked stock are not unrestricted. Example: the Field Warehouse holds 40 joints of casing 100100 and 30 are reserved for AR-12, so only 10 are available. If the workover team asks for 15, the system warns that only 10 are free.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: رزروهای کهنه', en: 'In practice: stale reservations' },
          text: {
            fa: 'رزروهای کهنه دشمن پنهان انبارند. اگر پروژه‌ای لغو یا عقب بیفتد و رزروش باز بماند، کالا «قفل» می‌شود، برنامه‌ریز گمان می‌کند کمبود داریم و دوباره خرید می‌کند. در شرکت‌های حرفه‌ای، کنترل موجودی هر هفته رزروهایی را که از تاریخ نیازشان مدتی مشخص (مثلاً 30 روز) گذشته بررسی و با تأیید صاحب موضوع هزینه می‌بندد. در بسیاری از شرکت‌های ایرانی، رزرو جای فرم کاغذی «درخواست کالا» را می‌گیرد، با این تفاوت مهم که از همان ابتدا به موضوع هزینه وصل است.',
            en: 'Stale reservations are a hidden enemy. If a project is cancelled or delayed and its reservation stays open, the stock is locked, the planner sees a shortage and buys again. Well-run operators have inventory control review every week the reservations that are a set time (for example 30 days) past their requirement date, and close them with the cost-object owner’s approval. In many Iranian companies the reservation replaces the paper "material request" form, with one important difference: it is linked to a cost object from the start.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          text: {
            fa: 'رزروهای باز ورودی برنامه‌ریزی تأمین هم هستند: ERP هنگام محاسبه نیاز خرید، موجودی رزروشده را آزاد حساب نمی‌کند. این پیوند را در درس «برنامه‌ریزی تأمین و سفارش مجدد» کامل می‌بینیم.',
            en: 'Open reservations also feed replenishment: when the ERP works out what to buy, it does not treat reserved stock as free. We look at this link in detail in the lesson "Replenishment Planning".',
          },
        },
      ],
    },
    {
      id: 'picking-issue',
      title: { fa: 'برداشت کالا و صدور حواله انبار', en: 'Picking and posting the goods issue' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**برداشت کالا** یعنی جمع‌آوری فیزیکی اقلام رزروشده از قفسه‌ها و محوطه‌ها. ERP از روی رزرو یک **فهرست برداشت** می‌سازد که برای هر قلم، کد کالا، مقدار، محل قفسه و در صورت لزوم شماره بچ یا سریال را نشان می‌دهد. پس از برداشت و تحویل، انباردار **حواله انبار** را در سیستم ثبت می‌کند.',
            en: '**Picking** is physically collecting the reserved items from the shelves and yards. From the reservation the ERP produces a **pick list** showing, for each line, the material number, quantity, bin location and, where relevant, the batch or serial number. After picking and handover, the storekeeper posts the **goods issue** in the system.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'دریافت درخواست تأییدشده', en: 'Receive the approved request' },
              text: {
                fa: 'انباردار فقط رزروی را اجرا می‌کند که در گردش کار تأیید شده و موضوع هزینه‌اش معتبر است: دستور کاری که برای اجرا آزاد شده، یا AFE بازی که هنوز بودجه دارد.',
                en: 'The storekeeper only executes a reservation that has passed the approval workflow and carries a valid cost object: a work order released for execution, or an open AFE with budget left.',
              },
            },
            {
              title: { fa: 'چاپ فهرست برداشت', en: 'Print the pick list' },
              text: {
                fa: 'فهرست برداشت ترتیب مسیر حرکت در انبار را رعایت می‌کند تا برداشت سریع‌تر و کم‌خطاتر باشد. برای اقلام سنگین مثل لوله، لیفتراک یا جرثقیل هم در همین مرحله هماهنگ می‌شود.',
                en: 'The pick list follows the walking route through the warehouse so picking is faster and less error-prone. For heavy items such as pipe, the forklift or crane is arranged at this point too.',
              },
            },
            {
              title: { fa: 'برداشت با قاعده درست', en: 'Pick by the right rule' },
              text: {
                fa: 'برای اقلام عمومی FIFO (اولین ورودی، اولین خروجی)؛ برای مواد شیمیایی دارای تاریخ انقضا مثل بازدارنده خوردگی FEFO (اولین انقضا، اولین خروجی)؛ و برای لوله‌های OCTG، اگر مهندسی بخواهد، شماره ذوب مشخص.',
                en: 'FIFO (first in, first out) for general items; FEFO (first expired, first out) for chemicals with an expiry date, such as corrosion inhibitor; and for OCTG, a specific heat number when engineering asks for one.',
              },
            },
            {
              title: { fa: 'کنترل و مستندسازی', en: 'Check and document' },
              text: {
                fa: 'مقدار، سلامت ظاهری و مدارک همراه کنترل می‌شود: گواهی آزمون کارخانه (MTC) برای لوله جداری، برگه اطلاعات ایمنی (SDS) برای مواد شیمیایی و شماره سریال برای قطعات یدکی حیاتی.',
                en: 'Quantity, visible condition and accompanying documents are checked: the mill test certificate (MTC) for casing, the safety data sheet (SDS) for chemicals and the serial number for critical spares.',
              },
            },
            {
              title: { fa: 'تحویل و امضا', en: 'Hand over and sign' },
              text: {
                fa: 'تحویل‌گیرنده با نام و شماره کارمندی امضا می‌کند. اگر کالا از سایت خارج می‌شود، **برگه خروج** و بارنامه هم صادر می‌شود.',
                en: 'The receiver signs with name and staff number. If the material leaves the site, a **gate pass** and a waybill are issued too.',
              },
            },
            {
              title: { fa: 'ثبت به‌موقع حواله', en: 'Post the issue on time' },
              text: {
                fa: 'حواله در همان نوبت کاری و با ارجاع به رزرو ثبت می‌شود. اگر فقط بخشی از مقدار تحویل شد، رزرو برای باقی‌مانده باز می‌ماند.',
                en: 'The goods issue is posted in the same shift, with reference to the reservation. If only part of the quantity was handed over, the reservation stays open for the rest.',
              },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'محتوای یک حواله انبار', en: 'What a goods issue document contains' },
          head: [
            { fa: 'بخش سند', en: 'Document field' },
            { fa: 'مثال: GI-26-0412', en: 'Example: GI-26-0412' },
          ],
          rows: [
            [
              { fa: 'شماره و تاریخ سند', en: 'Document number and date' },
              { fa: 'GI-26-0412، صادره از سیستم (ترتیبی و غیرقابل ویرایش)', en: 'GI-26-0412, system-generated (sequential, cannot be edited)' },
            ],
            [{ fa: 'انبار و محل', en: 'Warehouse and bin' }, { fa: 'WH-20، قفس قطعات یدکی، قفسه S-04', en: 'WH-20, spares cage, bin S-04' }],
            [{ fa: 'کالا و مقدار', en: 'Material and quantity' }, { fa: '300500 کیت سوپاپ K-201، 2 دست', en: '300500 K-201 valve kit, 2 sets' }],
            [{ fa: 'مرجع', en: 'Reference' }, { fa: 'رزرو RES-50188 از دستور کار WO-45120', en: 'Reservation RES-50188 from work order WO-45120' }],
            [{ fa: 'موضوع هزینه', en: 'Cost object' }, { fa: 'WO-45120 (تسویه به مرکز هزینه CC-ARY-CMP)', en: 'WO-45120 (settles to cost centre CC-ARY-CMP)' }],
            [
              { fa: 'ارزش', en: 'Value' },
              { fa: '2 × 4,500 = 9,000 (محاسبه سیستم با قیمت میانگین متحرک)', en: '2 × 4,500 = 9,000 (calculated by the system at moving average price)' },
            ],
            [{ fa: 'امضاها', en: 'Signatures' }, { fa: 'انباردار؛ تحویل‌گیرنده (سرپرست تعمیرات)', en: 'Storekeeper; receiver (maintenance supervisor)' }],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'خروج جزئی و خروج بیش از رزرو', en: 'Partial issues and over-issues' },
          text: {
            fa: 'اگر موجودی کافی نباشد، انبار همان مقدار موجود را تحویل می‌دهد و رزرو برای باقی‌مانده باز می‌ماند. برعکس، تحویل **بیش از مقدار رزرو** فقط با تأیید صاحب موضوع هزینه مجاز است؛ وگرنه اضافه‌ها در کارگاه یا کنار دکل می‌مانند و نه در سوابق انبار دیده می‌شوند و نه درست در هزینه.',
            en: 'If there is not enough stock, the warehouse issues what it has and the reservation stays open for the balance. Issuing **more than reserved** is allowed only with the cost-object owner’s approval; otherwise the extra ends up lying in the workshop or beside the rig, missing from the stock records and wrongly sitting in cost.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در شرکت‌های ایرانی حواله انبار سندی **پیش‌شماره و ترتیبی** است که چند نسخه دارد (انبار، تحویل‌گیرنده، حسابداری). در ERP شماره را سیستم می‌دهد و نسخه چاپی معمولاً بارکد یا کد QR دارد تا با سند سیستمی تطبیق داده شود. کاردکس انبار هم با ثبت حواله فوراً به‌روز می‌شود. برای مواد شیمیایی، مقررات HSE برچسب‌گذاری کالای خطرناک و همراه بودن برگه اطلاعات ایمنی را الزامی می‌کند.',
            en: 'In Iranian companies the goods issue form is **pre-numbered and sequential**, with several copies (warehouse, receiver, accounting). In an ERP the system assigns the number, and the printout usually carries a barcode or QR code so it can be matched to the system document. The stock card (kardex) updates the moment the issue is posted. For chemicals, HSE rules require dangerous-goods labelling and the safety data sheet to travel with the load.',
          },
        },
      ],
    },
    {
      id: 'cost-objects',
      title: { fa: 'خروج به نام چه کسی؟ موضوع هزینه و برچسب بازیافت هزینه', en: 'Issued to whom? Cost objects and cost-recovery tagging' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'هر حواله باید یک **موضوع هزینه** داشته باشد: «نشانی» که هزینه در آن می‌نشیند. موضوع هزینه تعیین می‌کند بهای کالا هزینه دوره شود یا جزو بهای یک دارایی، کدام تأسیسات یا چاه آن را مصرف کرده و آیا طبق قرارداد نفتی قابل بازیافت است یا نه. حواله‌ای که موضوع هزینه درستی ندارد، در گزارش‌ها گم می‌شود و در حسابرسی شرکا قابل دفاع نیست.',
            en: 'Every goods issue must carry a **cost object**: the "address" where the cost lands. The cost object decides whether the material becomes a period expense or part of an asset’s cost, which facility or well consumed it, and whether it is recoverable under the petroleum contract. An issue without the right cost object gets lost in the reports and cannot be defended in a partner audit.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'موضوع‌های هزینه در مسار پترولیوم', en: 'Cost objects at Masar Petroleum' },
          head: [
            { fa: 'موضوع هزینه', en: 'Cost object' },
            { fa: 'کاربرد', en: 'When used' },
            { fa: 'مثال', en: 'Example' },
            { fa: 'حساب بدهکار در مالی', en: 'Finance debit' },
            { fa: 'دسته بازیافت هزینه', en: 'Cost-recovery category' },
          ],
          rows: [
            [
              { fa: 'مرکز هزینه', en: 'Cost centre' },
              { fa: 'مصرف جاری یک واحد یا تأسیسات', en: 'Routine consumption by a unit or facility' },
              { fa: 'بازدارنده خوردگی برای CC-ARY-PRD', en: 'Corrosion inhibitor to CC-ARY-PRD' },
              { fa: 'هزینه مواد شیمیایی تولید', en: 'Production chemicals expense' },
              { fa: 'قابل بازیافت: هزینه عملیاتی', en: 'Recoverable: operating cost' },
            ],
            [
              { fa: 'دستور کار نگهداری', en: 'Maintenance work order' },
              { fa: 'تعمیر یا نگهداری یک تجهیز مشخص؛ در پایان ماه به مرکز هزینه تسویه می‌شود', en: 'Repair or maintenance of one piece of equipment; settled to a cost centre at month-end' },
              { fa: 'کیت سوپاپ برای WO-45120 (K-201)', en: 'Valve kits to WO-45120 (K-201)' },
              { fa: 'هزینه تعمیر و نگهداری', en: 'Repairs and maintenance expense' },
              { fa: 'قابل بازیافت: هزینه عملیاتی', en: 'Recoverable: operating cost' },
            ],
            [
              { fa: 'پروژه (WBS) ذیل AFE', en: 'Project (WBS) under an AFE' },
              { fa: 'کار سرمایه‌ای مثل حفاری چاه یا ساخت تأسیسات', en: 'Capital work such as drilling a well or building a facility' },
              { fa: 'لوله جداری برای P-AR12 (AFE-2026-012)', en: 'Casing to P-AR12 (AFE-2026-012)' },
              { fa: 'دارایی در جریان ساخت: چاه‌ها', en: 'Assets under construction: wells' },
              { fa: 'قابل بازیافت: هزینه سرمایه‌ای توسعه', en: 'Recoverable: development capex' },
            ],
            [
              { fa: 'مرکز هزینه غیرمشترک', en: 'Non-joint cost centre' },
              { fa: 'فعالیت خارج از عملیات مشارکت، مثل تعمیر ساختمان دفتر مرکزی', en: 'Activity outside the joint operation, such as repairs to the head-office building' },
              { fa: 'واشر برای تأسیسات ساختمان دفتر مرکزی', en: 'Gaskets for the head-office building services' },
              { fa: 'هزینه اقلام مصرفی', en: 'Consumables expense' },
              { fa: 'غیرقابل بازیافت (هزینه خود اپراتور)', en: 'Non-recoverable (operator’s own cost)' },
            ],
          ],
        },
        { type: 'h', text: { fa: 'هزینه یا دارایی؟', en: 'Expense or asset?' } },
        {
          type: 'p',
          text: {
            fa: 'قاعده ساده است: کالایی که **جزو یک دارایی بلندمدت تازه** می‌شود، سرمایه‌ای ثبت می‌شود. لوله جداری که در چاه AR-12 سیمان می‌شود سال‌ها بخشی از چاه است؛ پس بهایش به **دارایی در جریان ساخت** می‌رود و پس از تکمیل چاه به دارایی‌های ثابت منتقل و در طول عمر میدان مستهلک می‌شود. اما کالایی که در عملیات جاری یا نگهداری **مصرف** می‌شود (کیت سوپاپ، بازدارنده خوردگی، واشر) در همان دوره **هزینه** است. سیاست دقیق را واحد مالی و قرارداد تعیین می‌کنند؛ وظیفه انبار انتخاب موضوع هزینه درست است و ERP حساب را از روی نوع موضوع هزینه خودکار پیدا می‌کند.',
            en: 'The rule is simple: material that **becomes part of a new long-lived asset** is capitalised. Casing cemented into well AR-12 will be part of the well for years, so its cost goes to **assets under construction**; when the well is completed it moves to property, plant and equipment and is depreciated over the field’s life. Material **consumed** in operations or maintenance (valve kits, corrosion inhibitor, gaskets) is an **expense** of the period. Finance and the contract set the exact policy; the warehouse’s job is to pick the right cost object, and the ERP finds the account automatically from the type of cost object.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'برچسب بازیافت هزینه', en: 'Cost-recovery tagging' },
          text: {
            fa: 'در بسیاری از قراردادهای نفتی (قراردادهای مشارکت در تولید یا EPSA، و قراردادهای بیع متقابل و IPC در ایران) پیمانکار هزینه‌های مجاز را از محل تولید بازیافت می‌کند. معمولاً بهای کالا **وقتی** قابل بازیافت می‌شود که به عملیات منظور شود (یعنی با حواله مصرف شود)، نه وقتی در انبار نشسته است. به همین دلیل هر حواله سه برچسب لازم دارد: موضوع هزینه، دسته بازیافت هزینه (سرمایه‌ای توسعه، عملیاتی، غیرقابل بازیافت) و نشانگر مشارکت (هزینه مشترک با شرکا یا هزینه خود اپراتور). جزئیات به رویه حسابداری همان قرارداد بستگی دارد؛ آن را بررسی کنید.',
            en: 'Under many petroleum contracts (production sharing contracts or EPSAs, and Iran’s buy-back and IPC contracts) the contractor recovers allowable costs out of production. The cost of material usually becomes recoverable **when it is charged to operations** (issued and used), not while it sits in the warehouse. So every goods issue needs three tags: the cost object, the cost-recovery category (development capex, operating cost, non-recoverable) and the joint-venture indicator (shared with partners, or the operator’s own cost). The details depend on the accounting procedure of the contract in question; check it.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'مثال: سهم شرکا از یک حواله', en: 'Example: the partners’ share of one issue' },
          text: {
            fa: 'حواله GI-26-0412 (دو کیت سوپاپ به ارزش 9,000) مربوط به کمپرسور K-201 است که از تأسیسات مشترک مشارکت است. با سهم‌های فرضی این مثال (مسار پترولیوم 60%، انرژی البرز 25%، نفت دنا 15%)، سهم مسار پترولیوم 5,400، انرژی البرز 2,250 و نفت دنا 1,350 است و اپراتور سهم شرکا را در صورت‌حساب مشارکت از آن‌ها مطالبه می‌کند. اگر همین حواله اشتباهاً «هزینه خود اپراتور» برچسب بخورد، مسار پترولیوم کل 9,000 را به‌تنهایی می‌پردازد.',
            en: 'Goods issue GI-26-0412 (two valve kits worth 9,000) relates to compressor K-201, a joint-venture facility. With this example’s illustrative shares (Masar Petroleum 60%, Alborz Energy 25%, Dena Petroleum 15%), Masar Petroleum’s share is 5,400, Alborz Energy’s 2,250 and Dena Petroleum’s 1,350, and the operator bills the partners their shares through joint-interest billing. If the same issue were wrongly tagged as an operator-only cost, Masar Petroleum would carry the whole 9,000 alone.',
          },
        },
      ],
    },
    {
      id: 'erp-goods-issue',
      title: {
        fa: 'حواله انبار در ERP: داده پایه، اسناد، نقش‌ها و ثبت خودکار در مالی',
        en: 'Goods issue in the ERP: master data, documents, roles and the automatic Finance entry',
      },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در ERP انباردار سند حسابداری نمی‌نویسد. وقتی حواله ثبت می‌شود، سیستم هم‌زمان **دو سند** می‌سازد: **سند کالا** (چه کالایی، چه مقداری، از کدام انبار و قفسه) و **سند حسابداری** (چه مبلغی، کدام حساب‌ها، کدام موضوع هزینه). به این کار **ثبت یکپارچه** می‌گویند. مبلغ برابر است با مقدار × قیمت میانگین متحرک کالا در لحظه ثبت. این همان قیمتی است که با هر رسید کالا (GRN) به‌روز شده است: رسید کالا (GRN) موجودی را بدهکار و حساب واسط GR/IR را بستانکار کرد، و حواله اکنون همان موجودی را بستانکار می‌کند.',
            en: 'In the ERP the storekeeper never writes a journal entry. When the goods issue is posted, the system creates **two documents at once**: a **material document** (which material, how much, from which warehouse and bin) and an **accounting document** (what amount, which accounts, which cost object). This is called an **integration posting**. The amount is quantity × the material’s moving average price at the moment of posting. That is the price kept up to date by every goods received note (GRN): the GRN debited inventory and credited the GR/IR clearing account, and the goods issue now credits that same inventory.',
          },
        },
        {
          type: 'diagram',
          id: 'erp-modules',
          caption: {
            fa: 'حواله انبار نقطه تماس ماژول انبار با مالی، نگهداری (دستور کار) و پروژه‌ها (AFE) است.',
            en: 'The goods issue is where the Inventory module meets Finance, Maintenance (work orders) and Projects (AFEs).',
          },
        },
        {
          type: 'table',
          caption: { fa: 'داده‌های پایه‌ای که حواله از آن‌ها استفاده می‌کند', en: 'The master data a goods issue draws on' },
          head: [
            { fa: 'داده پایه', en: 'Master data' },
            { fa: 'چه چیزی به حواله می‌دهد', en: 'What it supplies to the issue' },
          ],
          rows: [
            [
              { fa: 'داده پایه کالا', en: 'Material master' },
              {
                fa: 'واحد سنجش، گروه ارزش‌گذاری (که حساب موجودی را تعیین می‌کند)، قیمت میانگین متحرک، مدیریت بچ و سریال، عمر انبارداری',
                en: 'Unit of measure, valuation class (which sets the inventory account), moving average price, batch and serial management, shelf life',
              },
            ],
            [{ fa: 'انبار و قفسه', en: 'Storage location and bin' }, { fa: 'محل برداشت کالا', en: 'Where the material is picked' }],
            [
              { fa: 'مرکز هزینه، دستور کار، پروژه (WBS) و AFE', en: 'Cost centre, work order, project (WBS) and AFE' },
              { fa: 'محل نشستن هزینه، باز یا بسته بودن آن و بودجه باقی‌مانده', en: 'Where the cost lands, whether it is open, and the budget left' },
            ],
            [
              { fa: 'تنظیمات تعیین حساب', en: 'Account-determination settings' },
              {
                fa: 'این‌که هر نوع حرکت کالا با هر گروه ارزش‌گذاری به کدام حساب هزینه یا دارایی برود',
                en: 'Which expense or asset account each type of movement and valuation class posts to',
              },
            ],
            [
              { fa: 'ویژگی‌های بازیافت هزینه روی موضوع هزینه', en: 'Cost-recovery attributes on the cost object' },
              { fa: 'دسته بازیافت و نشانگر صورت‌حساب شرکا', en: 'Recovery category and partner-billing indicator' },
            ],
          ],
        },
        {
          type: 'table',
          caption: { fa: 'نقش‌ها و تأییدها', en: 'Roles and approvals' },
          head: [
            { fa: 'نقش', en: 'Role' },
            { fa: 'چه می‌کند', en: 'Does' },
            { fa: 'تأیید و کنترل', en: 'Approves or controls' },
          ],
          rows: [
            [
              { fa: 'درخواست‌کننده (برنامه‌ریز نگهداری، مهندس حفاری، بهره‌برداری)', en: 'Requester (maintenance planner, drilling engineer, production)' },
              { fa: 'رزرو را ثبت می‌کند یا کالا را به دستور کار اضافه می‌کند', en: 'Creates the reservation or adds materials to the work order' },
              { fa: 'فقط درخواست می‌دهد؛ تأیید با دیگری است', en: 'Requests only; someone else approves' },
            ],
            [
              { fa: 'صاحب موضوع هزینه (مدیر مرکز هزینه، صاحب AFE)', en: 'Cost-object owner (cost-centre manager, AFE owner)' },
              { fa: 'رزرو را در گردش کار تأیید می‌کند', en: 'Approves the reservation in the workflow' },
              { fa: 'سقف بودجه و AFE را کنترل می‌کند', en: 'Controls the budget and AFE limits' },
            ],
            [
              { fa: 'انباردار', en: 'Storekeeper' },
              { fa: 'برداشت، تحویل و ثبت حواله', en: 'Picks, hands over and posts the goods issue' },
              { fa: 'نمی‌تواند موضوع هزینه یا قیمت را تغییر دهد', en: 'Cannot change the cost object or the price' },
            ],
            [
              { fa: 'سرپرست انبار', en: 'Warehouse supervisor' },
              { fa: 'خروج بیش از رزرو و فهرست‌های برداشتِ ثبت‌نشده را بررسی می‌کند', en: 'Reviews over-issues and pick lists not yet posted' },
              { fa: 'روزانه', en: 'Daily' },
            ],
            [
              { fa: 'کنترل موجودی و حسابدار بهای تمام‌شده', en: 'Inventory controller and cost accountant' },
              { fa: 'ثبت‌ها، تعیین حساب و تسویه دستور کارها را بررسی می‌کنند', en: 'Review postings, account determination and work-order settlement' },
              { fa: 'در پایان ماه', en: 'At month-end' },
            ],
          ],
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های خودکار ERP برای سه حواله در میدان آریا', en: 'The ERP’s automatic entries for three goods issues at Arya field' },
          entries: [
            {
              date: { fa: 'GI-26-0412', en: 'GI-26-0412' },
              lines: [
                {
                  account: { fa: 'هزینه تعمیر و نگهداری (دستور کار WO-45120، مرکز هزینه CC-ARY-CMP)', en: 'Repairs and maintenance expense (work order WO-45120, cost centre CC-ARY-CMP)' },
                  debit: 9000,
                },
                { account: { fa: 'موجودی قطعات یدکی', en: 'Inventory: spare parts' }, credit: 9000 },
              ],
              memo: { fa: 'دو کیت سوپاپ K-201: 2 × 4,500', en: 'Two K-201 valve kits: 2 × 4,500' },
            },
            {
              date: { fa: 'GI-26-0415', en: 'GI-26-0415' },
              lines: [
                { account: { fa: 'دارایی در جریان ساخت: چاه‌ها (پروژه P-AR12)', en: 'Assets under construction: wells (project P-AR12)' }, debit: 72000 },
                { account: { fa: 'موجودی لوله‌های جداری و مغزی (OCTG)', en: 'Inventory: OCTG (casing and tubing)' }, credit: 72000 },
              ],
              memo: { fa: '30 شاخه لوله جداری برای چاه AR-12: 30 × 2,400', en: '30 joints of casing for well AR-12: 30 × 2,400' },
            },
            {
              date: { fa: 'GI-26-0419', en: 'GI-26-0419' },
              lines: [
                { account: { fa: 'هزینه مواد شیمیایی تولید (مرکز هزینه CC-ARY-PRD)', en: 'Production chemicals expense (cost centre CC-ARY-PRD)' }, debit: 7800 },
                { account: { fa: 'موجودی مواد شیمیایی', en: 'Inventory: chemicals' }, credit: 7800 },
              ],
              memo: { fa: '12 بشکه بازدارنده خوردگی: 12 × 650', en: '12 drums of corrosion inhibitor: 12 × 650' },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: تسویه دستور کار', en: 'In practice: work-order settlement' },
          text: {
            fa: 'دستور کار WO-45120 در طول ماه همه هزینه‌های تعمیر را جمع می‌کند: کالا از انبار، ساعت کار تکنسین‌ها و خدمات پیمانکار. در پایان ماه، **تسویه** کل آن را به مرکز هزینه CC-ARY-CMP منتقل می‌کند و سابقه هزینه تجهیز K-201 هم کامل می‌شود. به همین دلیل مهندس قابلیت اطمینان می‌تواند ببیند K-201 در یک سال چند کیت سوپاپ مصرف کرده است.',
            en: 'Throughout the month, work order WO-45120 collects all the repair costs: material from the warehouse, technicians’ hours and contractor services. At month-end, **settlement** moves the total to cost centre CC-ARY-CMP, and the cost history of equipment K-201 is completed too. That is how the reliability engineer can see how many valve kits K-201 consumed in a year.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'حواله اشتباه را با سند دستی اصلاح نکنید', en: 'Never fix a wrong issue with a manual journal' },
          text: {
            fa: 'اگر حواله به موضوع هزینه اشتباه ثبت شد، آن را در ERP **ابطال** کنید و حواله درست را دوباره ثبت کنید. سند دستی در مالی، دفتر کل را عوض می‌کند اما کاردکس انبار و سابقه موضوع هزینه را نه؛ نتیجه، مغایرت میان دفتر معین موجودی و دفتر کل است که در درس «انبار در ERP و پیوند با مالی» به آن می‌پردازیم.',
            en: 'If an issue was posted to the wrong cost object, **reverse** it in the ERP and post the correct issue again. A manual journal in Finance changes the general ledger but not the stock card or the cost object’s history; the result is a gap between the stock ledger and the general ledger, which we deal with in the lesson "Warehouse in the ERP and Finance".',
          },
        },
      ],
    },
    {
      id: 'transfers-returns',
      title: { fa: 'انتقال بین انبارها و برگشت کالا به انبار', en: 'Transfers between warehouses and returns to stock' },
      blocks: [
        { type: 'h', text: { fa: 'انتقال از انبار مرکزی به انبار میدان', en: 'Transfers from the Central Warehouse to the Field Warehouse' } },
        {
          type: 'p',
          text: {
            fa: 'مسار پترولیوم بیشتر کالاهای وارداتی را با رسید کالا (GRN) در **انبار مرکزی** (WH-10) تحویل می‌گیرد و وقتی میدان نیاز دارد، آن‌ها را به **انبار میدان** (WH-20) می‌فرستد. انتقال، مصرف نیست؛ کالا هنوز دارایی شرکت است و فقط جایش عوض می‌شود. اگر جابه‌جایی داخل یک حوزه ارزش‌گذاری باشد (مثلاً بین دو ردیف محوطه لوله در WH-20)، فقط مقدار و محل تغییر می‌کند و **هیچ سندی در مالی** صادر نمی‌شود. اما WH-10 و WH-20 در ERP مسار پترولیوم دو حوزه ارزش‌گذاری جدا هستند، پس ارزش کالا هم باید از یکی به دیگری برود.',
            en: 'Masar Petroleum receives most imported material at the **Central Warehouse** (WH-10) on a goods received note (GRN) and sends it to the **Field Warehouse** (WH-20) when the field needs it. A transfer is not consumption: the material is still the company’s asset, it just changes place. If the move stays inside one valuation area (for example between two racks of the pipe yard in WH-20), only quantity and location change and **no Finance entry** is made. But in Masar Petroleum’s ERP, WH-10 and WH-20 are separate valuation areas, so the value has to move from one to the other as well.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'انتقال یک‌مرحله‌ای', en: 'One-step transfer' },
            items: [
              { fa: 'یک سند، خروج از مبدأ و ورود به مقصد را هم‌زمان ثبت می‌کند', en: 'One document posts the issue at the source and the receipt at the destination together' },
              { fa: 'مناسب جابه‌جایی کوتاه، مثلاً بین دو محوطه یک انبار', en: 'Suits short moves, such as between two yards of one warehouse' },
              { fa: 'خطر: کالایی که هنوز در جاده است، در انبار مقصد موجود نشان داده می‌شود', en: 'Risk: material still on the road already shows as on hand at the destination' },
            ],
          },
          right: {
            title: { fa: 'انتقال دومرحله‌ای', en: 'Two-step transfer' },
            items: [
              {
                fa: 'مرحله اول: خروج از WH-10 به موجودی در راه؛ مرحله دوم: رسید انتقال در WH-20 پس از رسیدن و کنترل بار',
                en: 'Step 1: issue from WH-10 into stock in transit; step 2: transfer receipt at WH-20 once the load arrives and is checked',
              },
              { fa: 'کالای در راه را جدا نشان می‌دهد و کسری یا آسیب حمل را آشکار می‌کند', en: 'Shows material on the road separately and exposes transport shortages or damage' },
              { fa: 'روش توصیه‌شده برای مسیر طولانی انبار مرکزی تا میدان', en: 'The recommended method for the long trip from the Central Warehouse to the field' },
            ],
          },
        },
        {
          type: 'journal',
          title: { fa: 'انتقال دومرحله‌ای TR-26-0207: 120 شاخه لوله مغزی از WH-10 به WH-20', en: 'Two-step transfer TR-26-0207: 120 joints of tubing from WH-10 to WH-20' },
          entries: [
            {
              date: { fa: 'روز 1: خروج از انبار مرکزی', en: 'Day 1: issue from the Central Warehouse' },
              lines: [
                { account: { fa: 'موجودی در راه بین انبارها', en: 'Stock in transit between warehouses' }, debit: 108000 },
                { account: { fa: 'موجودی لوله‌های جداری و مغزی (OCTG)، انبار WH-10', en: 'Inventory: OCTG (casing and tubing), WH-10' }, credit: 108000 },
              ],
              memo: { fa: '120 × 900 = 108,000', en: '120 × 900 = 108,000' },
            },
            {
              date: { fa: 'روز 3: رسید انتقال در انبار میدان', en: 'Day 3: transfer receipt at the Field Warehouse' },
              lines: [
                { account: { fa: 'موجودی لوله‌های جداری و مغزی (OCTG)، انبار WH-20', en: 'Inventory: OCTG (casing and tubing), WH-20' }, debit: 108000 },
                { account: { fa: 'موجودی در راه بین انبارها', en: 'Stock in transit between warehouses' }, credit: 108000 },
              ],
              memo: { fa: 'پس از رسید، مانده موجودی در راه برای این انتقال صفر می‌شود.', en: 'After the receipt, the stock-in-transit balance for this transfer is back to zero.' },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'حمل، HSE و کسری در راه', en: 'Transport, HSE and losses in transit' },
          text: {
            fa: 'هر انتقال بارنامه و برگه خروج دارد. لوله‌ها باید درست مهار شوند و مواد شیمیایی با مدارک کالای خطرناک حمل شوند. اگر در مقصد کسری یا آسیب دیده شود، انبار میدان فقط مقدار سالم را رسید می‌زند و باقی‌مانده در موجودی در راه می‌ماند تا بررسی شود: یا از پیمانکار حمل یا بیمه مطالبه می‌شود، یا با تأیید مسئولان از دفاتر حذف می‌شود. هزینه حمل هم طبق یک سیاست ثابت یا به مرکز هزینه انبار (CC-ARY-WHS) می‌رود یا به بهای کالا اضافه می‌شود.',
            en: 'Every transfer has a waybill and a gate pass. Pipe must be properly secured, and chemicals travel with their dangerous-goods documents. If a shortage or damage is found at the destination, the Field Warehouse receives only the sound quantity and the rest stays in stock in transit until it is investigated: it is either claimed from the carrier or the insurer, or written off with proper approval. Freight is either charged to the warehouse cost centre (CC-ARY-WHS) or added to the material cost, following one consistent policy.',
          },
        },
        { type: 'h', text: { fa: 'برگشت کالای مصرف‌نشده به انبار', en: 'Returning unused material to stock' } },
        {
          type: 'p',
          text: {
            fa: 'کالایی که تحویل شده اما مصرف نشده، باید با **سند برگشت** به انبار بازگردد. فرض کنید از 30 شاخه لوله جداری که با GI-26-0415 برای چاه AR-12 تحویل شد، فقط 27 شاخه در چاه رانده شد و 3 شاخه سالم ماند. سند برگشت RT-26-0033 **به حواله اصلی ارجاع می‌دهد** و همان موضوع هزینه (پروژه P-AR12) را بستانکار می‌کند تا هزینه AFE فقط به اندازه مصرف واقعی بماند. ERP معمولاً برگشت را با همان نرخ حواله اصلی ارزش‌گذاری می‌کند تا موضوع هزینه دقیقاً همان مبلغی را پس بگیرد که پرداخته بود.',
            en: 'Material that was issued but not used must come back to the warehouse on a **return document**. Suppose that of the 30 joints of casing issued on GI-26-0415 for well AR-12, only 27 were run into the well and 3 sound joints were left over. Return RT-26-0033 **refers to the original issue** and credits the same cost object (project P-AR12), so the AFE carries only what was actually used. The ERP usually values the return at the original issue’s price, so the cost object gets back exactly what it was charged.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'برگشت RT-26-0033: سه شاخه لوله جداری از پروژه P-AR12', en: 'Return RT-26-0033: three joints of casing from project P-AR12' },
          entries: [
            {
              lines: [
                { account: { fa: 'موجودی لوله‌های جداری و مغزی (OCTG)', en: 'Inventory: OCTG (casing and tubing)' }, debit: 7200 },
                { account: { fa: 'دارایی در جریان ساخت: چاه‌ها (پروژه P-AR12)', en: 'Assets under construction: wells (project P-AR12)' }, credit: 7200 },
              ],
              memo: {
                fa: '3 × 2,400 = 7,200. خالص هزینه لوله جداری روی AFE: 72,000 منهای 7,200 برابر 64,800، یعنی بهای 27 شاخه.',
                en: '3 × 2,400 = 7,200. Net casing cost on the AFE: 72,000 less 7,200 = 64,800, the cost of 27 joints.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: وضعیت کالای برگشتی', en: 'In practice: the condition of returned material' },
          text: {
            fa: 'کالای برگشتی پیش از قرار گرفتن در قفسه بازرسی می‌شود. کالای **نو و سالم** به موجودی آزاد برمی‌گردد؛ کالای **کارکرده اما قابل استفاده** (مثلاً لوله‌ای که از چاه بیرون کشیده و بازرسی شده) در وضعیتی جدا و با ارزش کمتر نگهداری می‌شود؛ و کالای **اسقاط** اصلاً به موجودی برنمی‌گردد و به محوطه ضایعات می‌رود. رویه حسابداری بسیاری از قراردادهای مشارکت، کالای منتقل‌شده یا برگشتی را بر اساس همین وضعیت‌ها قیمت‌گذاری می‌کند؛ درصدها را از قرارداد خودتان بخوانید. یک نکته مهم دیگر: کالای مصرف‌نشده را «برای دفعه بعد» کنار دکل یا در کارگاه نگه ندارید؛ چنین کالایی نه در موجودی دیده می‌شود و نه درست در هزینه.',
            en: 'Returned material is inspected before it goes back on the shelf. **New, sound** material returns to unrestricted stock; **used but serviceable** material (for example tubing pulled from a well and inspected) is held in a separate condition at a lower value; and **scrap** never returns to stock at all, it goes to the scrap yard. The accounting procedure of many joint operating agreements prices transferred or returned material by exactly these conditions; take the percentages from your own contract. One more point: do not keep unused material beside the rig or in the workshop "for next time"; such material is neither visible in stock nor correctly in cost.',
          },
        },
      ],
    },
    {
      id: 'practice',
      title: { fa: 'اشتباهات رایج و تمرین', en: 'Common mistakes and practice' },
      blocks: [
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباهات رایج', en: 'Common mistakes' },
          text: {
            fa: 'بیشتر خطاهای حواله و انتقال از عجله و «بعداً درستش می‌کنیم» می‌آیند. این‌ها را در انبارهای نفت و گاز زیاد می‌بینیم:',
            en: 'Most goods-issue and transfer errors come from haste and "we’ll fix it later". These are the ones seen most often in oil and gas warehouses:',
          },
        },
        {
          type: 'list',
          items: [
            { fa: '**اول تحویل، بعد سند** (یا هیچ‌وقت سند): کاردکس و هزینه هر دو غلط می‌شوند.', en: '**Issue first, document later** (or never): both the stock card and the cost go wrong.' },
            {
              fa: '**ثبت روی یک مرکز هزینه عمومی** «تا بعداً اصلاح شود»: هزینه به چاه یا AFE درست نمی‌رسد و بازیافت هزینه آسیب می‌بیند.',
              en: '**Charging a general cost centre** "to be corrected later": the cost never reaches the right well or AFE, and cost recovery suffers.',
            },
            {
              fa: '**جابه‌جا کردن سرمایه‌ای و جاری**: لوله جداری چاه تازه به هزینه تعمیرات، یا قطعه تعمیراتی به AFE حفاری.',
              en: '**Mixing capital and operating costs**: casing for a new well charged to repairs, or a repair part charged to the drilling AFE.',
            },
            {
              fa: '**انتقال یک‌مرحله‌ای برای مسیر طولانی**: کالای در جاده، در انبار میدان موجود نشان داده می‌شود و در شمارش مغایرت می‌سازد.',
              en: '**One-step transfers for long trips**: material still on the road shows as on hand at the field and causes count differences.',
            },
            {
              fa: '**برگشت بدون ارجاع به حواله اصلی**، یا ثبت آن مثل یک رسید کالا (GRN) تازه از تأمین‌کننده: موضوع هزینه بستانکار نمی‌شود یا کالا دو بار در موجودی می‌آید.',
              en: '**Returns without reference to the original issue**, or posting them like a new GRN from a supplier: the cost object is not credited, or the material is counted twice.',
            },
            {
              fa: '**اصلاح با سند دستی** به جای ابطال در ERP: دفتر معین موجودی و دفتر کل از هم فاصله می‌گیرند.',
              en: '**Fixing errors with manual journals** instead of reversing in the ERP: the stock ledger and the general ledger drift apart.',
            },
          ],
        },
        {
          type: 'exercise',
          title: { fa: 'موجودی قابل استفاده بازدارنده خوردگی', en: 'Available corrosion inhibitor' },
          difficulty: 'easy',
          problem: {
            fa: 'وضعیت کالای 200310 (بازدارنده خوردگی) در انبار میدان در جدول آمده است. ایستگاه تقویت فشار درخواست تازه‌ای برای 25 بشکه ثبت کرده است. چند بشکه قابل استفاده است و آیا می‌توان کل درخواست را همین حالا تحویل داد؟',
            en: 'The table shows the position of material 200310 (corrosion inhibitor) at the Field Warehouse. The compressor station has raised a new request for 25 drums. How many drums are available, and can the whole request be issued now?',
          },
          given: {
            head: [
              { fa: 'شرح', en: 'Item' },
              { fa: 'بشکه', en: 'Drums' },
            ],
            rows: [
              [{ fa: 'موجودی آزاد در انبار', en: 'Unrestricted stock on hand' }, 64],
              [{ fa: 'موجودی در بازرسی کیفی (رسید کالا (GRN) تازه، منتظر نتیجه آزمایشگاه)', en: 'Stock in quality inspection (new GRN awaiting lab results)' }, 6],
              [{ fa: 'رزرو باز: مصرف جاری چاه‌ها (CC-ARY-PRD)', en: 'Open reservation: routine well treatment (CC-ARY-PRD)' }, 24],
              [{ fa: 'رزرو باز: تزریق یک‌باره به چاه AR-09 (دستور کار WO-45161)', en: 'Open reservation: batch treatment of well AR-09 (work order WO-45161)' }, 18],
            ],
            numericCols: [1],
          },
          hint: { fa: 'موجودی در بازرسی کیفی هنوز آزاد نیست.', en: 'Stock in quality inspection is not yet unrestricted.' },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'موجودی آزاد را مشخص کنید', en: 'Identify unrestricted stock' },
                  text: {
                    fa: 'فقط 64 بشکه آزاد است. 6 بشکه در بازرسی کیفی تا تأیید آزمایشگاه قابل مصرف نیست.',
                    en: 'Only 64 drums are unrestricted. The 6 drums in quality inspection cannot be used until the lab releases them.',
                  },
                },
                {
                  title: { fa: 'رزروهای باز را جمع بزنید', en: 'Add up the open reservations' },
                  text: { fa: '24 + 18 = 42 بشکه.', en: '24 + 18 = 42 drums.' },
                },
                {
                  title: { fa: 'موجودی قابل استفاده را حساب کنید', en: 'Work out available stock' },
                  text: { fa: '64 منهای 42 برابر 22 بشکه است.', en: '64 − 42 = 22 drums.' },
                },
                {
                  title: { fa: 'با درخواست مقایسه کنید', en: 'Compare with the request' },
                  text: {
                    fa: 'درخواست 25 بشکه است؛ پس 3 بشکه کم داریم. انبار 22 بشکه را تحویل می‌دهد و رزرو برای 3 بشکه باز می‌ماند. پس از تأیید آزمایشگاه، 6 بشکه بازرسی کیفی آزاد می‌شود و کسری را پوشش می‌دهد. برداشتن از رزروهای دیگر فقط با توافق برنامه‌ریز و صاحبان آن رزروها مجاز است.',
                    en: 'The request is for 25 drums, so 3 are short. The warehouse issues 22 and the reservation stays open for 3. Once the lab releases them, the 6 drums in quality inspection cover the gap. Taking stock from other reservations is allowed only with the agreement of the planner and the owners of those reservations.',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: '22 بشکه قابل استفاده است؛ 22 بشکه اکنون و 3 بشکه پس از آزاد شدن موجودی بازرسی کیفی تحویل می‌شود.',
            en: '22 drums are available; issue 22 now and the other 3 once the quality-inspection stock is released.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'سه حواله و ثبت خودکار آن‌ها', en: 'Three goods issues and their automatic entries' },
          difficulty: 'medium',
          problem: {
            fa: 'انبار میدان امروز سه حواله ثبت کرده است (جدول). برای هر حواله، حساب بدهکار و دسته بازیافت هزینه را مشخص کنید و ثبتی را که ERP در مالی می‌سازد بنویسید.',
            en: 'The Field Warehouse posted three goods issues today (see the table). For each one, identify the debit account and the cost-recovery category, and write the entry the ERP posts to Finance.',
          },
          given: {
            head: [
              { fa: 'حواله', en: 'Issue' },
              { fa: 'کالا', en: 'Material' },
              { fa: 'مقدار', en: 'Quantity' },
              { fa: 'قیمت میانگین متحرک', en: 'Moving average price' },
              { fa: 'موضوع هزینه', en: 'Cost object' },
            ],
            rows: [
              [
                { fa: 'GI-26-0431', en: 'GI-26-0431' },
                { fa: 'آب‌بند مکانیکی P-104 (300520)', en: 'P-104 mechanical seal (300520)' },
                4,
                1200,
                { fa: 'دستور کار WO-45133 (تسویه به CC-ARY-PRD)', en: 'Work order WO-45133 (settles to CC-ARY-PRD)' },
              ],
              [
                { fa: 'GI-26-0432', en: 'GI-26-0432' },
                { fa: 'باریت (200300)، تن', en: 'Barite (200300), tonnes' },
                6,
                350,
                { fa: 'پروژه P-AR12، گل حفاری چاه AR-12', en: 'Project P-AR12, drilling mud for well AR-12' },
              ],
              [
                { fa: 'GI-26-0433', en: 'GI-26-0433' },
                { fa: 'واشر اسپیرال 4 اینچ (400700)', en: 'Spiral-wound gasket 4" (400700)' },
                40,
                15,
                { fa: 'مرکز هزینه CC-ARY-CMP، نگهداری جاری', en: 'Cost centre CC-ARY-CMP, routine maintenance' },
              ],
            ],
            numericCols: [2, 3],
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'حواله', en: 'Issue' },
                { fa: 'محاسبه', en: 'Calculation' },
                { fa: 'حساب بدهکار', en: 'Debit account' },
                { fa: 'دسته بازیافت', en: 'Recovery category' },
              ],
              rows: [
                [
                  { fa: 'GI-26-0431', en: 'GI-26-0431' },
                  { fa: '4 × 1,200 = 4,800', en: '4 × 1,200 = 4,800' },
                  { fa: 'هزینه تعمیر و نگهداری', en: 'Repairs and maintenance expense' },
                  { fa: 'قابل بازیافت: عملیاتی', en: 'Recoverable: operating cost' },
                ],
                [
                  { fa: 'GI-26-0432', en: 'GI-26-0432' },
                  { fa: '6 × 350 = 2,100', en: '6 × 350 = 2,100' },
                  { fa: 'دارایی در جریان ساخت: چاه‌ها', en: 'Assets under construction: wells' },
                  { fa: 'قابل بازیافت: سرمایه‌ای توسعه', en: 'Recoverable: development capex' },
                ],
                [
                  { fa: 'GI-26-0433', en: 'GI-26-0433' },
                  { fa: '40 × 15 = 600', en: '40 × 15 = 600' },
                  { fa: 'هزینه اقلام مصرفی', en: 'Consumables expense' },
                  { fa: 'قابل بازیافت: عملیاتی', en: 'Recoverable: operating cost' },
                ],
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'GI-26-0431', en: 'GI-26-0431' },
                  lines: [
                    { account: { fa: 'هزینه تعمیر و نگهداری (WO-45133، مرکز هزینه CC-ARY-PRD)', en: 'Repairs and maintenance expense (WO-45133, cost centre CC-ARY-PRD)' }, debit: 4800 },
                    { account: { fa: 'موجودی قطعات یدکی', en: 'Inventory: spare parts' }, credit: 4800 },
                  ],
                },
                {
                  date: { fa: 'GI-26-0432', en: 'GI-26-0432' },
                  lines: [
                    { account: { fa: 'دارایی در جریان ساخت: چاه‌ها (پروژه P-AR12)', en: 'Assets under construction: wells (project P-AR12)' }, debit: 2100 },
                    { account: { fa: 'موجودی مواد شیمیایی', en: 'Inventory: chemicals' }, credit: 2100 },
                  ],
                },
                {
                  date: { fa: 'GI-26-0433', en: 'GI-26-0433' },
                  lines: [
                    { account: { fa: 'هزینه اقلام مصرفی (مرکز هزینه CC-ARY-CMP)', en: 'Consumables expense (cost centre CC-ARY-CMP)' }, debit: 600 },
                    { account: { fa: 'موجودی اقلام مصرفی عمومی', en: 'Inventory: general consumables' }, credit: 600 },
                  ],
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'باریت ماده شیمیایی است، اما چون در حفاری چاه تازه مصرف می‌شود، جزو بهای سرمایه‌ای چاه می‌شود. **موضوع هزینه** تعیین‌کننده است، نه نوع کالا.',
                en: 'Barite is a chemical, but because it is used to drill a new well it becomes part of the well’s capitalised cost. **The cost object** decides, not the type of material.',
              },
            },
          ],
          answer: {
            fa: 'جمع ارزش حواله‌ها 7,500 است: هزینه تعمیر 4,800، دارایی در جریان ساخت 2,100 و هزینه اقلام مصرفی 600.',
            en: 'Total issued 7,500: repairs expense 4,800, assets under construction 2,100 and consumables expense 600.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'انتقال دومرحله‌ای با آسیب در راه', en: 'A two-step transfer with damage in transit' },
          difficulty: 'medium',
          problem: {
            fa: 'با انتقال TR-26-0219، ده شیر دروازه‌ای 4 اینچ (300540) با قیمت میانگین متحرک 3,200 از انبار مرکزی به انبار میدان فرستاده شد. در مقصد 9 شیر سالم بود و یک شیر به دلیل شکستگی فلنج رد شد. بررسی نشان داد آسیب ناشی از مهار نادرست بار توسط پیمانکار حمل بوده و پیمانکار مسئولیت آن را پذیرفته است. ثبت‌های مالی را بنویسید و بگویید مانده موجودی در راه پس از رسید انتقال چقدر است.',
            en: 'On transfer TR-26-0219, ten 4" gate valves (300540) at a moving average price of 3,200 were sent from the Central Warehouse to the Field Warehouse. At the destination 9 valves were sound and one was rejected with a cracked flange. The investigation showed the damage came from the carrier’s poor load securing, and the carrier accepted liability. Write the Finance entries and state the stock-in-transit balance after the transfer receipt.',
          },
          hint: {
            fa: 'فقط مقدار سالم رسید زده می‌شود؛ باقی‌مانده تا پایان بررسی در موجودی در راه می‌ماند.',
            en: 'Only the sound quantity is received; the rest stays in stock in transit until the investigation ends.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'خروج از انبار مرکزی', en: 'Issue from the Central Warehouse' },
                  text: { fa: '10 × 3,200 = 32,000 از موجودی WH-10 به موجودی در راه می‌رود.', en: '10 × 3,200 = 32,000 moves from WH-10 inventory into stock in transit.' },
                },
                {
                  title: { fa: 'رسید انتقال در انبار میدان', en: 'Transfer receipt at the Field Warehouse' },
                  text: {
                    fa: '9 × 3,200 = 28,800 رسید می‌شود. مانده موجودی در راه: 32,000 منهای 28,800 برابر 3,200.',
                    en: '9 × 3,200 = 28,800 is received. Stock in transit left: 32,000 − 28,800 = 3,200.',
                  },
                },
                {
                  title: { fa: 'تسویه پس از بررسی', en: 'Clear it after the investigation' },
                  text: {
                    fa: 'چون پیمانکار حمل مسئول است، 3,200 از او مطالبه می‌شود و موجودی در راه صفر می‌شود. این زیان به حساب مشترک شرکا یا ادعای بازیافت هزینه نمی‌رود، چون پیمانکار آن را جبران می‌کند.',
                    en: 'Because the carrier is liable, 3,200 is claimed from the carrier and stock in transit goes to zero. This loss is not charged to the joint account or claimed for cost recovery, because the carrier makes it good.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'روز 1: خروج از WH-10', en: 'Day 1: issue from WH-10' },
                  lines: [
                    { account: { fa: 'موجودی در راه بین انبارها', en: 'Stock in transit between warehouses' }, debit: 32000 },
                    { account: { fa: 'موجودی قطعات یدکی، انبار WH-10', en: 'Inventory: spare parts, WH-10' }, credit: 32000 },
                  ],
                },
                {
                  date: { fa: 'روز 4: رسید انتقال 9 شیر در WH-20', en: 'Day 4: transfer receipt of 9 valves at WH-20' },
                  lines: [
                    { account: { fa: 'موجودی قطعات یدکی، انبار WH-20', en: 'Inventory: spare parts, WH-20' }, debit: 28800 },
                    { account: { fa: 'موجودی در راه بین انبارها', en: 'Stock in transit between warehouses' }, credit: 28800 },
                  ],
                },
                {
                  date: { fa: 'پس از بررسی: مطالبه از پیمانکار حمل', en: 'After the investigation: claim on the carrier' },
                  lines: [
                    { account: { fa: 'سایر حساب‌های دریافتنی (پیمانکار حمل)', en: 'Other receivables: transport contractor' }, debit: 3200 },
                    { account: { fa: 'موجودی در راه بین انبارها', en: 'Stock in transit between warehouses' }, credit: 3200 },
                  ],
                },
              ],
            },
          ],
          answer: {
            fa: 'پس از رسید انتقال، 3,200 در موجودی در راه می‌ماند و با مطالبه از پیمانکار حمل تسویه می‌شود.',
            en: 'After the transfer receipt, 3,200 remains in stock in transit and is cleared by the claim on the carrier.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'هزینه خالص کالا برای تکمیل چاه AR-12 و سهم شرکا', en: 'Net material cost of completing well AR-12 and the partners’ shares' },
          difficulty: 'hard',
          problem: {
            fa: 'برای تکمیل چاه AR-12 (پروژه P-AR12 ذیل AFE-2026-012) این حرکت‌ها ثبت شد: حواله 260 شاخه لوله مغزی (100120) با نرخ 900؛ و حواله 4 بشکه بازدارنده خوردگی (200310) با نرخ 650 برای سیال پکر. پس از عملیات، 248 شاخه لوله در چاه رانده شده بود، 10 شاخه نو و سالم برگشت و 2 شاخه که رزوه‌شان هنگام رانش آسیب دیده بود به محوطه ضایعات رفت؛ 2 بشکه بازدارنده هم باز نشده برگشت. (الف) ثبت‌های خودکار ERP را بنویسید. (ب) هزینه خالص کالا روی AFE چقدر است؟ (ج) با سهم‌های فرضی 60%، 25% و 15%، سهم هر شریک را حساب کنید.',
            en: 'To complete well AR-12 (project P-AR12 under AFE-2026-012) these movements were posted: an issue of 260 joints of tubing (100120) at 900, and an issue of 4 drums of corrosion inhibitor (200310) at 650 for the packer fluid. After the job, 248 joints had been run into the well, 10 new and sound joints came back, and 2 joints whose threads were damaged while running went to the scrap yard; 2 drums of inhibitor came back unopened. (a) Write the ERP’s automatic entries. (b) What is the net material cost on the AFE? (c) Using illustrative shares of 60%, 25% and 15%, work out each partner’s share.',
          },
          hint: {
            fa: 'شاخه‌هایی که هنگام کار آسیب دیده‌اند مصرف عادی عملیات‌اند و به انبار برنمی‌گردند؛ پس بهایشان روی AFE می‌ماند.',
            en: 'Joints damaged during the job are a normal operating loss and do not return to stock, so their cost stays on the AFE.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'اثر هر حرکت بر AFE-2026-012', en: 'Effect of each movement on AFE-2026-012' },
              head: [
                { fa: 'حرکت', en: 'Movement' },
                { fa: 'محاسبه', en: 'Calculation' },
                { fa: 'بدهکار AFE', en: 'Debit to AFE' },
                { fa: 'بستانکار AFE', en: 'Credit to AFE' },
              ],
              rows: [
                [{ fa: 'حواله لوله مغزی', en: 'Tubing issue' }, { fa: '260 × 900', en: '260 × 900' }, 234000, blank],
                [{ fa: 'حواله بازدارنده خوردگی', en: 'Inhibitor issue' }, { fa: '4 × 650', en: '4 × 650' }, 2600, blank],
                [{ fa: 'برگشت 10 شاخه لوله نو', en: 'Return of 10 new joints' }, { fa: '10 × 900', en: '10 × 900' }, blank, 9000],
                [{ fa: 'برگشت 2 بشکه باز نشده', en: 'Return of 2 unopened drums' }, { fa: '2 × 650', en: '2 × 650' }, blank, 1300],
                [
                  { fa: '2 شاخه آسیب‌دیده به ضایعات', en: '2 damaged joints to scrap' },
                  { fa: 'سند برگشت ندارد؛ بهایش روی AFE می‌ماند', en: 'No return document; the cost stays on the AFE' },
                  blank,
                  blank,
                ],
                [{ fa: 'جمع', en: 'Total' }, blank, 236600, 10300],
              ],
              numericCols: [2, 3],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'حواله لوله مغزی', en: 'Tubing issue' },
                  lines: [
                    { account: { fa: 'دارایی در جریان ساخت: چاه‌ها (پروژه P-AR12)', en: 'Assets under construction: wells (project P-AR12)' }, debit: 234000 },
                    { account: { fa: 'موجودی لوله‌های جداری و مغزی (OCTG)', en: 'Inventory: OCTG (casing and tubing)' }, credit: 234000 },
                  ],
                },
                {
                  date: { fa: 'حواله بازدارنده خوردگی', en: 'Inhibitor issue' },
                  lines: [
                    { account: { fa: 'دارایی در جریان ساخت: چاه‌ها (پروژه P-AR12)', en: 'Assets under construction: wells (project P-AR12)' }, debit: 2600 },
                    { account: { fa: 'موجودی مواد شیمیایی', en: 'Inventory: chemicals' }, credit: 2600 },
                  ],
                },
                {
                  date: { fa: 'برگشت 10 شاخه لوله', en: 'Return of 10 joints' },
                  lines: [
                    { account: { fa: 'موجودی لوله‌های جداری و مغزی (OCTG)', en: 'Inventory: OCTG (casing and tubing)' }, debit: 9000 },
                    { account: { fa: 'دارایی در جریان ساخت: چاه‌ها (پروژه P-AR12)', en: 'Assets under construction: wells (project P-AR12)' }, credit: 9000 },
                  ],
                },
                {
                  date: { fa: 'برگشت 2 بشکه بازدارنده', en: 'Return of 2 drums' },
                  lines: [
                    { account: { fa: 'موجودی مواد شیمیایی', en: 'Inventory: chemicals' }, debit: 1300 },
                    { account: { fa: 'دارایی در جریان ساخت: چاه‌ها (پروژه P-AR12)', en: 'Assets under construction: wells (project P-AR12)' }, credit: 1300 },
                  ],
                },
              ],
            },
            {
              type: 'formula',
              text: {
                fa: 'هزینه خالص کالا روی AFE = 236,600 − 10,300 = 226,300',
                en: 'Net material cost on the AFE = 236,600 − 10,300 = 226,300',
              },
            },
            {
              type: 'table',
              caption: { fa: 'سهم شرکا (سهم‌ها فرضی‌اند)', en: 'Partners’ shares (illustrative shares)' },
              head: [
                { fa: 'شریک', en: 'Partner' },
                { fa: 'سهم فرضی', en: 'Illustrative share' },
                { fa: 'مبلغ', en: 'Amount' },
              ],
              rows: [
                [{ fa: 'مسار پترولیوم (اپراتور)', en: 'Masar Petroleum (operator)' }, { fa: '60%', en: '60%' }, 135780],
                [{ fa: 'انرژی البرز', en: 'Alborz Energy' }, { fa: '25%', en: '25%' }, 56575],
                [{ fa: 'نفت دنا', en: 'Dena Petroleum' }, { fa: '15%', en: '15%' }, 33945],
                [{ fa: 'جمع', en: 'Total' }, { fa: '100%', en: '100%' }, 226300],
              ],
              numericCols: [2],
            },
            {
              type: 'callout',
              tone: 'info',
              text: {
                fa: 'برگشت‌ها هزینه AFE و ادعای بازیافت هزینه را دقیقاً به اندازه مصرف واقعی کاهش می‌دهند. اگر 10 شاخه لوله کنار دکل می‌ماند و برگشت نمی‌خورد، 9,000 هزینه بیش از واقع روی AFE می‌نشست و ممکن بود در حسابرسی شرکا رد شود.',
                en: 'Returns bring the AFE cost and the cost-recovery claim down to exactly what was used. Had the 10 joints been left beside the rig without a return, 9,000 of overstated cost would sit on the AFE and could be rejected in a partner audit.',
              },
            },
          ],
          answer: {
            fa: 'هزینه خالص کالا روی AFE برابر 226,300 است: مسار پترولیوم 135,780، انرژی البرز 56,575 و نفت دنا 33,945.',
            en: 'Net material cost on the AFE is 226,300: Masar Petroleum 135,780, Alborz Energy 56,575 and Dena Petroleum 33,945.',
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
              fa: 'رزرو کالا مقداری را برای یک نیاز مشخص کنار می‌گذارد؛ نه کالا را جابه‌جا می‌کند و نه سندی در مالی می‌سازد. موجودی قابل استفاده برابر موجودی آزاد منهای رزروهای باز است.',
              en: 'A reservation sets a quantity aside for a specific need; it moves nothing and posts nothing to Finance. Available stock = unrestricted stock − open reservations.',
            },
            {
              fa: 'حواله انبار مقدار و ارزش موجودی را کم می‌کند و ارزش را (مقدار × قیمت میانگین متحرک) به یک موضوع هزینه می‌برد.',
              en: 'A goods issue reduces stock quantity and value and charges the value (quantity × moving average price) to a cost object.',
            },
            {
              fa: 'موضوع هزینه تعیین می‌کند کالا هزینه دوره شود (مرکز هزینه، دستور کار) یا جزو دارایی در جریان ساخت (پروژه ذیل AFE).',
              en: 'The cost object decides whether material becomes a period expense (cost centre, work order) or part of assets under construction (a project under an AFE).',
            },
            {
              fa: 'هر حواله برچسب بازیافت هزینه و نشانگر مشارکت دارد؛ بهای کالا معمولاً هنگام مصرف قابل بازیافت می‌شود، نه هنگام نگهداری در انبار.',
              en: 'Every issue carries a cost-recovery tag and a joint-venture indicator; material cost usually becomes recoverable when it is used, not while it is stored.',
            },
            {
              fa: 'ERP با هر حرکت کالا خودکار سند حسابداری می‌سازد؛ خطا را با ابطال در ERP اصلاح کنید، نه با سند دستی.',
              en: 'The ERP creates the accounting document automatically for every goods movement; correct errors by reversing in the ERP, not with manual journals.',
            },
            {
              fa: 'انتقال داخل یک حوزه ارزش‌گذاری ثبت مالی ندارد؛ انتقال دومرحله‌ای میان انبار مرکزی و انبار میدان از حساب موجودی در راه می‌گذرد.',
              en: 'A transfer inside one valuation area has no Finance entry; a two-step transfer between the Central and Field warehouses passes through stock in transit.',
            },
            {
              fa: 'برگشت کالا با ارجاع به حواله اصلی، همان موضوع هزینه را بستانکار می‌کند و وضعیت کالا (نو، کارکرده، اسقاط) را مشخص می‌کند.',
              en: 'A return, referring to the original issue, credits the same cost object and records the material’s condition (new, used, scrap).',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'رزرو کالا', en: 'Reservation' },
              def: { fa: 'کنار گذاشتن مقداری از کالا برای یک نیاز و تاریخ مشخص، بدون جابه‌جایی و بدون ثبت مالی.', en: 'Setting a quantity aside for a specific need and date, with no movement and no Finance entry.' },
            },
            {
              term: { fa: 'موجودی قابل استفاده', en: 'Available stock' },
              def: { fa: 'موجودی آزاد منهای رزروهای باز.', en: 'Unrestricted stock less open reservations.' },
            },
            {
              term: { fa: 'برداشت کالا', en: 'Picking' },
              def: { fa: 'جمع‌آوری فیزیکی اقلام از قفسه‌ها طبق فهرست برداشت.', en: 'Physically collecting items from the bins according to the pick list.' },
            },
            {
              term: { fa: 'حواله انبار', en: 'Goods issue' },
              def: { fa: 'سند خروج کالا که موجودی را کم و ارزش آن را به یک موضوع هزینه منتقل می‌کند.', en: 'The document for material leaving the warehouse; it reduces stock and charges the value to a cost object.' },
            },
            {
              term: { fa: 'موضوع هزینه', en: 'Cost object' },
              def: { fa: 'جایی که هزینه در آن می‌نشیند: مرکز هزینه، دستور کار، پروژه (WBS) یا AFE.', en: 'Where a cost lands: a cost centre, work order, project (WBS) or AFE.' },
            },
            {
              term: { fa: 'دارایی در جریان ساخت', en: 'Assets under construction' },
              def: { fa: 'حساب دارایی که بهای کار سرمایه‌ای ناتمام (مثل حفاری چاه) را تا تکمیل نگه می‌دارد.', en: 'An asset account holding the cost of unfinished capital work (such as drilling a well) until completion.' },
            },
            {
              term: { fa: 'برچسب بازیافت هزینه', en: 'Cost-recovery tag' },
              def: { fa: 'نشانگری روی حواله که دسته هزینه را طبق قرارداد نفتی مشخص می‌کند: سرمایه‌ای، عملیاتی یا غیرقابل بازیافت.', en: 'A marker on the issue that sets the cost’s category under the petroleum contract: capital, operating or non-recoverable.' },
            },
            {
              term: { fa: 'ثبت یکپارچه', en: 'Integration posting' },
              def: { fa: 'ساخته شدن خودکار سند حسابداری هم‌زمان با سند کالا در ERP.', en: 'The automatic creation of the accounting document together with the material document in the ERP.' },
            },
            {
              term: { fa: 'انتقال دومرحله‌ای', en: 'Two-step transfer' },
              def: { fa: 'انتقالی که خروج از مبدأ و رسید در مقصد را جدا ثبت می‌کند و کالای در راه را نشان می‌دهد.', en: 'A transfer that posts the issue at the source and the receipt at the destination separately, showing material on the road.' },
            },
            {
              term: { fa: 'موجودی در راه', en: 'Stock in transit' },
              def: { fa: 'حسابی که ارزش کالای خارج‌شده از یک انبار و هنوز رسیده‌نشده به انبار دیگر را نگه می‌دارد.', en: 'An account holding the value of material that has left one warehouse but not yet reached the other.' },
            },
            {
              term: { fa: 'برگشت به انبار', en: 'Return to stock' },
              def: { fa: 'بازگشت کالای مصرف‌نشده با ارجاع به حواله اصلی که همان موضوع هزینه را بستانکار می‌کند.', en: 'Bringing unused material back, with reference to the original issue, crediting the same cost object.' },
            },
            {
              term: { fa: 'FEFO', en: 'FEFO' },
              def: { fa: 'اولین انقضا، اولین خروجی: قاعده برداشت برای کالاهای دارای تاریخ انقضا.', en: 'First expired, first out: the picking rule for items with an expiry date.' },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: { fa: 'رزرو کالا در ERP چه کاری انجام می‌دهد؟', en: 'What does a reservation do in the ERP?' },
      options: [
        { fa: 'کالا را از انبار مرکزی به انبار میدان منتقل می‌کند', en: 'Moves the material from the Central Warehouse to the Field Warehouse' },
        { fa: 'مقداری از کالا را برای یک نیاز مشخص کنار می‌گذارد، بدون جابه‌جایی و بدون ثبت در مالی', en: 'Sets a quantity aside for a specific need, without moving it or posting to Finance' },
        { fa: 'هزینه کالا را به مرکز هزینه درخواست‌کننده منتقل می‌کند', en: 'Charges the material’s cost to the requesting cost centre' },
        { fa: 'سفارش خرید تازه‌ای برای تأمین‌کننده صادر می‌کند', en: 'Issues a new purchase order to the supplier' },
      ],
      answer: 1,
      explain: {
        fa: 'رزرو فقط مشخص می‌کند مقداری از موجودی «صاحب دارد» تا دیگران آن را مصرف نکنند. هزینه وقتی به موضوع هزینه می‌رود که حواله ثبت شود، نه هنگام رزرو؛ برای همین گزینه سوم وسوسه‌انگیز اما نادرست است.',
        en: 'A reservation only marks a quantity of stock as spoken for, so others don’t consume it. The cost reaches the cost object when the goods issue is posted, not at reservation, which is why the third option is tempting but wrong.',
      },
    },
    {
      q: {
        fa: 'انبار میدان 50 شاخه لوله جداری آزاد و 8 شاخه در بازرسی کیفی دارد. رزروهای باز این کالا 35 شاخه است. موجودی قابل استفاده چند شاخه است؟',
        en: 'The Field Warehouse has 50 joints of casing unrestricted and 8 joints in quality inspection. Open reservations total 35 joints. How many joints are available?',
      },
      options: [
        { fa: '15', en: '15' },
        { fa: '23', en: '23' },
        { fa: '50', en: '50' },
        { fa: '43', en: '43' },
      ],
      answer: 0,
      explain: {
        fa: 'موجودی قابل استفاده برابر موجودی آزاد منهای رزروهای باز است: 50 منهای 35 برابر 15. پاسخ 23 اشتباه است چون 8 شاخه در بازرسی کیفی را آزاد حساب کرده است؛ این شاخه‌ها تا تأیید کیفیت قابل مصرف نیستند.',
        en: 'Available stock = unrestricted stock − open reservations: 50 − 35 = 15. The answer 23 is wrong because it treats the 8 joints in quality inspection as free; they cannot be used until quality releases them.',
      },
    },
    {
      q: {
        fa: 'سه کیت سوپاپ K-201 با قیمت میانگین متحرک 4,500 با حواله به دستور کار WO-45120 تحویل می‌شود. ERP چه ثبتی می‌سازد؟',
        en: 'Three K-201 valve kits at a moving average price of 4,500 are issued to work order WO-45120. What entry does the ERP post?',
      },
      options: [
        { fa: 'بدهکار موجودی قطعات یدکی 13,500، بستانکار هزینه تعمیر و نگهداری 13,500', en: 'Dr Inventory: spare parts 13,500; Cr Repairs and maintenance expense 13,500' },
        { fa: 'بدهکار دارایی در جریان ساخت 13,500، بستانکار موجودی قطعات یدکی 13,500', en: 'Dr Assets under construction 13,500; Cr Inventory: spare parts 13,500' },
        { fa: 'بدهکار هزینه تعمیر و نگهداری 13,500، بستانکار حساب‌های پرداختنی 13,500', en: 'Dr Repairs and maintenance expense 13,500; Cr Accounts payable 13,500' },
        { fa: 'بدهکار هزینه تعمیر و نگهداری (WO-45120) 13,500، بستانکار موجودی قطعات یدکی 13,500', en: 'Dr Repairs and maintenance expense (WO-45120) 13,500; Cr Inventory: spare parts 13,500' },
      ],
      answer: 3,
      explain: {
        fa: '3 × 4,500 = 13,500. حواله، موجودی را بستانکار و موضوع هزینه را بدهکار می‌کند؛ چون دستور کار نگهداری است، حساب بدهکار هزینه تعمیر و نگهداری است. دارایی در جریان ساخت برای کار سرمایه‌ای ذیل AFE است و حساب‌های پرداختنی در ثبت فاکتور تأمین‌کننده درگیر می‌شود، نه در حواله.',
        en: '3 × 4,500 = 13,500. A goods issue credits inventory and debits the cost object; since this is a maintenance work order, the debit is repairs and maintenance expense. Assets under construction is for capital work under an AFE, and accounts payable belongs to the supplier invoice, not to a goods issue.',
      },
    },
    {
      q: {
        fa: 'لوله جداری که قرار است در چاه تازه AR-12 سیمان شود، با حواله به پروژه P-AR12 (ذیل AFE-2026-012) تحویل شده است. حساب بدهکار و دسته بازیافت هزینه کدام است؟',
        en: 'Casing to be cemented into the new well AR-12 is issued to project P-AR12 (under AFE-2026-012). Which debit account and cost-recovery category apply?',
      },
      options: [
        { fa: 'هزینه تعمیر و نگهداری؛ قابل بازیافت: عملیاتی', en: 'Repairs and maintenance expense; recoverable: operating cost' },
        { fa: 'موجودی لوله‌ها؛ هنوز قابل بازیافت نیست', en: 'Inventory: OCTG; not yet recoverable' },
        { fa: 'دارایی در جریان ساخت: چاه‌ها؛ قابل بازیافت: سرمایه‌ای توسعه', en: 'Assets under construction: wells; recoverable: development capex' },
        { fa: 'هزینه اقلام مصرفی؛ غیرقابل بازیافت', en: 'Consumables expense; non-recoverable' },
      ],
      answer: 2,
      explain: {
        fa: 'لوله جداری سال‌ها جزو چاه می‌ماند، پس بهایش سرمایه‌ای است و به دارایی در جریان ساخت می‌رود؛ دسته بازیافت آن هم هزینه سرمایه‌ای توسعه است. گزینه دوم اشتباه است چون پس از حواله، کالا دیگر در موجودی نیست؛ همین حواله است که آن را به عملیات منظور و معمولاً قابل بازیافت می‌کند.',
        en: 'Casing stays part of the well for years, so its cost is capitalised to assets under construction, and its recovery category is development capex. The second option is wrong because after the issue the material is no longer in inventory; it is the issue itself that charges it to operations and usually makes it recoverable.',
      },
    },
    {
      q: {
        fa: 'در یک انتقال دومرحله‌ای، 80 شاخه لوله مغزی با نرخ 900 روز 28 ماه از انبار مرکزی خارج شد و تا پایان ماه به انبار میدان نرسید. مانده حساب موجودی در راه در پایان ماه چقدر است؟',
        en: 'In a two-step transfer, 80 joints of tubing at 900 left the Central Warehouse on the 28th and had not reached the Field Warehouse by month-end. What is the stock-in-transit balance at month-end?',
      },
      options: [
        { fa: '72,000', en: '72,000' },
        { fa: 'صفر', en: 'Zero' },
        { fa: '144,000', en: '144,000' },
        { fa: '7,200', en: '7,200' },
      ],
      answer: 0,
      explain: {
        fa: '80 × 900 = 72,000. در مرحله اول ارزش از موجودی انبار مرکزی به موجودی در راه می‌رود و تا رسید انتقال در انبار میدان همان‌جا می‌ماند. «صفر» نتیجه روش یک‌مرحله‌ای است که کالای در جاده را پنهان می‌کند؛ 144,000 هم خروج و ورود را دو بار شمرده است.',
        en: '80 × 900 = 72,000. In step one the value moves from Central Warehouse inventory into stock in transit and stays there until the Field Warehouse posts the transfer receipt. "Zero" is what a one-step transfer would show, hiding the material on the road; 144,000 counts the issue and the receipt twice.',
      },
    },
    {
      q: {
        fa: 'پنج شاخه لوله جداری که با نرخ 2,400 به پروژه P-AR12 حواله شده بود، مصرف‌نشده و سالم برگشت. ثبت درست کدام است؟',
        en: 'Five joints of casing issued to project P-AR12 at 2,400 come back unused and sound. Which entry is correct?',
      },
      options: [
        { fa: 'بدهکار موجودی لوله‌ها 12,000، بستانکار حساب واسط رسید کالا و فاکتور (GR/IR) 12,000', en: 'Dr Inventory: OCTG 12,000; Cr GR/IR clearing 12,000' },
        { fa: 'بدهکار دارایی در جریان ساخت 12,000، بستانکار موجودی لوله‌ها 12,000', en: 'Dr Assets under construction 12,000; Cr Inventory: OCTG 12,000' },
        { fa: 'بدهکار موجودی لوله‌ها 12,000، بستانکار دارایی در جریان ساخت: چاه‌ها (P-AR12) 12,000', en: 'Dr Inventory: OCTG 12,000; Cr Assets under construction: wells (P-AR12) 12,000' },
        { fa: 'هیچ ثبتی لازم نیست؛ فقط مقدار انبار اصلاح می‌شود', en: 'No entry is needed; only the stock quantity is corrected' },
      ],
      answer: 2,
      explain: {
        fa: '5 × 2,400 = 12,000. برگشت، عکس حواله است و با ارجاع به حواله اصلی، **همان** موضوع هزینه را بستانکار می‌کند تا هزینه AFE به اندازه مصرف واقعی شود. ثبت آن مثل یک رسید کالا (GRN) از تأمین‌کننده (گزینه اول) کالا را دو بار در دفاتر می‌آورد و AFE را بیش از واقع نشان می‌دهد.',
        en: '5 × 2,400 = 12,000. A return is the reverse of an issue: referring to the original issue, it credits the **same** cost object, so the AFE carries only what was really used. Posting it like a supplier GRN (the first option) brings the material into the books twice and leaves the AFE overstated.',
      },
    },
    {
      q: {
        fa: 'حواله‌ای به ارزش 20,000 به تأسیسات مشترک مشارکت تعلق دارد. با سهم‌های فرضی مسار پترولیوم 60%، انرژی البرز 25% و نفت دنا 15%، اپراتور چه مبلغی از نفت دنا مطالبه می‌کند؟',
        en: 'A goods issue worth 20,000 belongs to a joint-venture facility. With illustrative shares of Masar Petroleum 60%, Alborz Energy 25% and Dena Petroleum 15%, how much does the operator bill Dena Petroleum?',
      },
      options: [
        { fa: '5,000', en: '5,000' },
        { fa: '3,000', en: '3,000' },
        { fa: '12,000', en: '12,000' },
        { fa: 'صفر؛ فقط اپراتور هزینه را می‌پردازد', en: 'Zero; only the operator pays' },
      ],
      answer: 1,
      explain: {
        fa: '20,000 × 15% = 3,000. مبلغ 5,000 سهم انرژی البرز (25%) و 12,000 سهم خود مسار پترولیوم است. «صفر» فقط وقتی درست است که هزینه واقعاً هزینه خود اپراتور باشد؛ اگر حواله مشترک اشتباهاً این برچسب را بخورد، اپراتور سهم شرکا را از دست می‌دهد.',
        en: '20,000 × 15% = 3,000. 5,000 is Alborz Energy’s share (25%) and 12,000 is Masar Petroleum’s own. "Zero" is right only when the cost truly is the operator’s own; if a joint issue is wrongly tagged that way, the operator loses the partners’ share.',
      },
    },
    {
      q: { fa: 'چرا بازدارنده خوردگی به روش FEFO برداشت می‌شود؟', en: 'Why is corrosion inhibitor picked on a FEFO basis?' },
      options: [
        { fa: 'چون ارزان‌ترین بشکه‌ها باید اول مصرف شوند', en: 'Because the cheapest drums should be used first' },
        { fa: 'چون ERP قیمت میانگین متحرک را فقط با FEFO حساب می‌کند', en: 'Because the ERP can only calculate the moving average price with FEFO' },
        { fa: 'چون بشکه‌های تازه‌تر کیفیت بهتری دارند و باید اول مصرف شوند', en: 'Because newer drums are better quality and should be used first' },
        {
          fa: 'چون این ماده تاریخ انقضا دارد و بشکه‌ای که زودتر منقضی می‌شود باید زودتر مصرف شود تا ضایع نشود',
          en: 'Because the chemical has an expiry date, and the drum that expires first must be used first so nothing goes to waste',
        },
      ],
      answer: 3,
      explain: {
        fa: 'FEFO یعنی «اولین انقضا، اولین خروجی». برای مواد شیمیایی دارای عمر انبارداری، این روش ضایعات و هزینه دفع را کم می‌کند. ترتیب برداشت فیزیکی ربطی به محاسبه قیمت میانگین متحرک ندارد؛ آن قیمت از رسیدهای کالا (GRN) حساب می‌شود، نه از ترتیب برداشت.',
        en: 'FEFO means "first expired, first out". For chemicals with a shelf life it cuts waste and disposal cost. The physical picking order has nothing to do with the moving average price; that price is driven by the GRNs, not by the picking order.',
      },
    },
    {
      q: { fa: 'کدام جابه‌جایی کالا در ERP مسار پترولیوم هیچ سندی در مالی نمی‌سازد؟', en: 'Which movement in Masar Petroleum’s ERP creates no Finance entry?' },
      options: [
        { fa: 'حواله لوله جداری به پروژه P-AR12', en: 'Issuing casing to project P-AR12' },
        { fa: 'جابه‌جایی لوله مغزی بین دو ردیف محوطه لوله در همان انبار WH-20', en: 'Moving tubing between two racks of the pipe yard within the same WH-20' },
        { fa: 'مرحله اول انتقال دومرحله‌ای از WH-10 به WH-20', en: 'Step one of a two-step transfer from WH-10 to WH-20' },
        { fa: 'برگشت کالای مصرف‌نشده از دستور کار WO-45133', en: 'Returning unused material from work order WO-45133' },
      ],
      answer: 1,
      explain: {
        fa: 'جابه‌جایی داخل یک حوزه ارزش‌گذاری فقط محل کالا را تغییر می‌دهد؛ ارزش و مالکیت همان است، پس ثبت مالی ندارد. اما WH-10 و WH-20 دو حوزه ارزش‌گذاری جدا هستند و مرحله اول انتقال میان آن‌ها ارزش را به موجودی در راه می‌برد؛ حواله و برگشت هم همیشه یک موضوع هزینه را تغییر می‌دهند.',
        en: 'A move inside one valuation area only changes where the material sits; its value and ownership are unchanged, so there is no Finance entry. WH-10 and WH-20, however, are separate valuation areas, and step one of a transfer between them moves the value into stock in transit; issues and returns always touch a cost object.',
      },
    },
    {
      q: {
        fa: 'برای AFE-2026-012 این حرکت‌ها ثبت شده است: حواله 30 شاخه لوله جداری به ارزش 72,000، حواله 10 تن باریت به ارزش 3,500 و برگشت 4 شاخه لوله جداری با نرخ 2,400. هزینه خالص کالا روی AFE چقدر است؟',
        en: 'These movements were posted against AFE-2026-012: an issue of 30 joints of casing worth 72,000, an issue of 10 tonnes of barite worth 3,500, and a return of 4 joints of casing at 2,400. What is the net material cost on the AFE?',
      },
      options: [
        { fa: '75,500', en: '75,500' },
        { fa: '85,100', en: '85,100' },
        { fa: '65,900', en: '65,900' },
        { fa: '62,400', en: '62,400' },
      ],
      answer: 2,
      explain: {
        fa: 'ارزش برگشت 4 × 2,400 = 9,600 است. جمع حواله‌ها 72,000 + 3,500 = 75,500 است و پس از کسر 9,600 به 65,900 می‌رسد. پاسخ 75,500 برگشت را نادیده گرفته، 85,100 آن را به‌جای کسر اضافه کرده و 62,400 باریت را از قلم انداخته است.',
        en: 'The return is worth 4 × 2,400 = 9,600. The issues total 72,000 + 3,500 = 75,500, and after deducting 9,600 the net is 65,900. 75,500 ignores the return, 85,100 adds it instead of deducting it, and 62,400 leaves out the barite.',
      },
    },
  ],
}
