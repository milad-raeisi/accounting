import type { Lesson } from '../../types'

const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'counting-inventory-control',
  number: 6,
  level: 'intermediate',
  minutes: 22,
  icon: 'ListChecks',
  tone: 'gold',
  title: { fa: 'شمارش موجودی و کنترل انبار', en: 'Counting and Inventory Control' },
  summary: {
    fa: 'موجودی واقعی قفسه‌ها باید با کاردکس سیستم یکی باشد. در این درس با مثال انبار میدان مسار پترولیوم، انبارگردانی و شمارش چرخه‌ای، بررسی و ثبت مغایرت‌ها و سند مالی آن‌ها، تحلیل ABC و XYZ، اقلام کم‌گردش و منسوخ و کاهش ارزش موجودی، و کنترل‌های داخلی انبار را یاد می‌گیرید.',
    en: 'What is on the shelves must match the stock ledger in the system. Using Masar Petroleum’s Field Warehouse, this lesson covers full and cycle counts, investigating and posting differences (and the Finance entry they create), ABC and XYZ analysis, slow-moving and obsolete stock and write-downs, and the internal controls a warehouse needs.',
  },
  objectives: [
    {
      fa: 'تفاوت انبارگردانی سالانه و شمارش چرخه‌ای را توضیح دهید و فرایند سند شمارش را گام‌به‌گام اجرا کنید.',
      en: 'Explain the difference between an annual physical inventory and cycle counting, and run the count-document process step by step.',
    },
    {
      fa: 'علت مغایرت‌های شمارش را بررسی کنید و ثبت خودکار مالی کسری و اضافی انبار را در ERP بشناسید.',
      en: 'Investigate count differences and recognise the automatic Finance entry the ERP posts for shortages and surpluses.',
    },
    {
      fa: 'اقلام را با تحلیل ABC و XYZ طبقه‌بندی کنید و برای هر گروه سیاست شمارش و کنترل تعیین کنید.',
      en: 'Classify items with ABC and XYZ analysis and set counting and control policies for each group.',
    },
    {
      fa: 'اقلام کم‌گردش و منسوخ را شناسایی کنید و کاهش ارزش موجودی را با سند حسابداری ثبت کنید.',
      en: 'Identify slow-moving and obsolete stock and record an inventory write-down.',
    },
    {
      fa: 'کنترل‌های داخلی و تفکیک وظایف لازم در انبار را طراحی کنید.',
      en: 'Design the internal controls and segregation of duties a warehouse needs.',
    },
  ],
  sections: [
    {
      id: 'why-counting',
      title: { fa: 'چرا شمارش لازم است: انبارگردانی و شمارش چرخه‌ای', en: 'Why we count: physical inventory and cycle counting' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'ساعت 2 بامداد، کمپرسور **K-201** در ایستگاه تقویت فشار میدان آریا از کار می‌افتد. برنامه‌ریز نگهداری در ERP نگاه می‌کند: **2 دست کیت سوپاپ** (کالای 300500) در قفس قطعات یدکی انبار میدان موجود است. انباردار قفس را باز می‌کند، اما قفس خالی است. بعداً معلوم می‌شود این دو کیت سه ماه پیش با یک یادداشت دستی به تعمیرکار داده شده و هیچ حواله انباری برایشان ثبت نشده است. کیت تازه از سازنده حدود 24 هفته زمان تأمین دارد و در این مدت گاز کمتری فشرده و فروخته می‌شود.',
            en: 'At 2 a.m. compressor **K-201** at the Arya field compressor station trips. The maintenance planner checks the ERP: **2 sets of valve kits** (material 300500) are in the spare-parts cage at the Field Warehouse. The storekeeper opens the cage and finds it empty. It later turns out that both kits were handed to a fitter three months ago against a handwritten note, and no goods issue was ever posted. A new kit takes about 24 weeks from the manufacturer, and until it arrives less gas is compressed and sold.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'این ماجرا نشان می‌دهد که موجودی سیستم فقط وقتی ارزش دارد که با موجودی واقعی یکی باشد. شمارش منظم سه هدف دارد:',
            en: 'The story shows that system stock is only worth something when it matches physical stock. Regular counting serves three purposes:',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**تداوم تولید**: برنامه‌ریز باید بتواند به عدد سیستم برای قطعات حیاتی اعتماد کند.',
              en: '**Production continuity**: planners must be able to trust the system figure for critical spares.',
            },
            {
              fa: '**صورت‌های مالی درست**: موجودی کالا در ترازنامه از کاردکس سیستم می‌آید؛ اگر کاردکس غلط باشد، دارایی‌ها و هزینه‌ها هم غلط‌اند.',
              en: '**Correct financial statements**: the inventory figure on the balance sheet comes from the stock ledger; if the ledger is wrong, so are assets and expenses.',
            },
            {
              fa: '**بازیافت هزینه و حسابرسی**: شرکا و حسابرسان طرف دولتی قرارداد نفتی می‌پرسند هر قلم کجا مصرف شده است. کالای گم‌شده‌ای که حواله ندارد، به هیچ چاه یا مرکز هزینه‌ای نرسیده و ادعای بازیافت بهای آن سخت است.',
              en: '**Cost recovery and audit**: partners and the government side’s auditors ask where each item was used. A missing item with no goods issue never reached any well or cost centre, and its cost is hard to claim.',
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'دو روش اصلی برای شمارش وجود دارد. در **انبارگردانی** (شمارش فیزیکی کامل)، همه اقلام انبار در یک بازه کوتاه، معمولاً پایان سال مالی، شمارش می‌شوند و در این مدت ورود و خروج کالا متوقف می‌شود. در **شمارش چرخه‌ای**، هر روز یا هر هفته بخش کوچکی از اقلام شمارش می‌شود، طوری که در طول سال همه اقلام دست‌کم یک بار و اقلام مهم‌تر چند بار شمرده شوند.',
            en: 'There are two main ways to count. In a **physical inventory** (a full, wall-to-wall count), every item is counted in a short window, usually at financial year-end, and receipts and issues stop while it runs. In **cycle counting**, a small slice of items is counted every day or week, so that over the year every item is counted at least once and the important ones several times.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'انبارگردانی سالانه', en: 'Annual physical inventory' },
            items: [
              { fa: 'همه اقلام، یک بار در سال', en: 'All items, once a year' },
              {
                fa: 'ورود و خروج کالا چند روز متوقف می‌شود؛ برای انبار میدانی که به دکل‌ها و ایستگاه خدمت می‌دهد پرهزینه است',
                en: 'Receipts and issues stop for several days, which is costly for a field warehouse serving rigs and the compressor station',
              },
              {
                fa: 'به نیروی زیاد و موقت نیاز دارد؛ شمارنده‌های کم‌تجربه خطای بیشتری دارند',
                en: 'Needs many temporary counters, and inexperienced counters make more errors',
              },
              { fa: 'خطاها تا پایان سال پنهان می‌مانند', en: 'Errors stay hidden until year-end' },
            ],
          },
          right: {
            title: { fa: 'شمارش چرخه‌ای', en: 'Cycle counting' },
            items: [
              { fa: 'هر روز چند قلم؛ اقلام مهم‌تر با تکرار بیشتر', en: 'A few items every day; important items more often' },
              {
                fa: 'عملیات انبار تقریباً متوقف نمی‌شود؛ فقط محل‌های در حال شمارش قفل می‌شوند',
                en: 'Operations hardly stop; only the bins being counted are blocked',
              },
              { fa: 'تیم ثابت و آموزش‌دیده؛ شمارش دقیق‌تر', en: 'A small trained team, so counts are more accurate' },
              { fa: 'خطاها زود کشف و علتشان رفع می‌شود', en: 'Errors are found early and their causes fixed' },
            ],
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در ایران بیشتر شرکت‌ها در پایان سال مالی انبارگردانی می‌کنند و حسابرس مستقل در آن **حضور** می‌یابد و نمونه‌هایی را دوباره می‌شمارد. شرکت‌هایی که برنامه شمارش چرخه‌ای مستند و قابل اتکا دارند، گاهی می‌توانند با توافق حسابرس، انبارگردانی پایان سال را محدودتر کنند. هم طبق IFRS و هم طبق استانداردهای حسابداری ایران، موجودی گزارش‌شده باید واقعاً وجود داشته باشد و سیستم دائمی جای شمارش را نمی‌گیرد: سیستم می‌گوید چه چیزی **باید** در انبار باشد و شمارش نشان می‌دهد چه چیزی **واقعاً** هست.',
            en: 'In Iran most companies run a full count at financial year-end, and the independent auditor **attends** it and re-counts a sample. Companies with a documented, reliable cycle-count programme can sometimes agree with the auditor to narrow the year-end count. Under IFRS and Iranian standards alike, the inventory you report must actually exist, and a perpetual system does not replace counting: the system says what **should** be there; the count shows what **is** there.',
          },
        },
      ],
    },
    {
      id: 'count-process',
      title: { fa: 'سند شمارش و مراحل شمارش', en: 'Count documents and the counting process' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'هر شمارش، چه سالانه و چه چرخه‌ای، با یک **سند شمارش** انجام می‌شود. سند شمارش فهرست اقلام و محل‌هایی است که باید شمرده شوند، به اضافه جای ثبت نتیجه، امضای شمارنده و تأییدها. بدون سند شمارش، شمارش فقط یک بازدید است و نمی‌توان چیزی را با آن اصلاح کرد.',
            en: 'Every count, annual or cycle, runs on a **count document**: a list of the items and bins to be counted, with space for the results, the counter’s signature and the approvals. Without a count document a count is only a walk-through, and nothing can be corrected from it.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'انتخاب اقلام', en: 'Select the items' },
              text: {
                fa: 'برنامه شمارش چرخه‌ای (مثلاً بر اساس کلاس ABC) اقلام امروز را تعیین می‌کند؛ در انبارگردانی، همه محل‌ها انتخاب می‌شوند.',
                en: 'The cycle-count plan (for example by ABC class) picks today’s items; in a full count every bin is selected.',
              },
            },
            {
              title: { fa: 'صدور سند شمارش', en: 'Create the count document' },
              text: {
                fa: 'کنترل موجودی سند PI-26-041 را در ERP صادر می‌کند. سیستم همان لحظه **مقدار دفتری** (مانده کاردکس) هر قلم را ثبت می‌کند.',
                en: 'The inventory controller creates count document PI-26-041 in the ERP. At that moment the system records each item’s **book quantity** (the stock-ledger balance).',
              },
            },
            {
              title: { fa: 'قفل کردن محل‌ها', en: 'Block the bins' },
              text: {
                fa: 'پیش از شروع، همه رسیدها و حواله‌های باز ثبت می‌شوند و تا پایان شمارش هیچ کالایی وارد این محل‌ها یا از آن‌ها خارج نمی‌شود. به این مرز زمانی **برش زمانی** می‌گوییم.',
                en: 'Before the start, every open receipt and issue is posted, and until the count ends nothing moves into or out of these bins. This time boundary is the **cut-off**.',
              },
            },
            {
              title: { fa: 'شمارش کور', en: 'Blind count' },
              text: {
                fa: 'شمارنده برگه‌ای می‌گیرد که مقدار دفتری را **نشان نمی‌دهد**. او فقط آنچه را می‌بیند می‌نویسد، پس وسوسه نمی‌شود عدد سیستم را تکرار کند.',
                en: 'The counter gets a sheet that **does not show** the book quantity. They write only what they see, so they are not tempted to copy the system figure.',
              },
            },
            {
              title: { fa: 'ورود نتایج', en: 'Enter the results' },
              text: {
                fa: 'مقدار شمارش‌شده در ERP وارد می‌شود و سیستم مغایرت هر قلم (شمارش‌شده منهای دفتری) را به تعداد و مبلغ نشان می‌دهد.',
                en: 'The counted quantities are entered in the ERP, which shows each item’s difference (counted minus book) in quantity and value.',
              },
            },
            {
              title: { fa: 'شمارش مجدد', en: 'Recount' },
              text: {
                fa: 'هر مغایرتی که از حد مجاز بیشتر باشد، به‌وسیله شخص دیگری دوباره شمرده می‌شود.',
                en: 'Any difference above the tolerance is recounted by a different person.',
              },
            },
            {
              title: { fa: 'بررسی و تأیید', en: 'Investigate and approve' },
              text: {
                fa: 'کنترل موجودی علت مغایرت‌ها را بررسی می‌کند و فهرست مغایرت‌ها بر اساس مبلغ، به تأیید مقام مجاز می‌رسد.',
                en: 'The inventory controller investigates the causes, and the difference list goes to the authorised approver according to its value.',
              },
            },
            {
              title: { fa: 'ثبت مغایرت', en: 'Post the differences' },
              text: {
                fa: 'با ثبت نهایی، کاردکس با موجودی واقعی یکی می‌شود و ERP سند مالی آن را خودکار صادر می‌کند. سند شمارش بسته و محل‌ها آزاد می‌شوند.',
                en: 'On final posting the stock ledger is brought into line with the physical stock and the ERP posts the Finance entry automatically. The count document is closed and the bins are released.',
              },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'محتوای سند شمارش PI-26-041', en: 'What count document PI-26-041 contains' },
          head: [
            { fa: 'بخش', en: 'Field' },
            { fa: 'محتوا', en: 'Content' },
            { fa: 'نمونه', en: 'Example' },
          ],
          rows: [
            [
              { fa: 'شماره و تاریخ سند', en: 'Number and date' },
              { fa: 'شماره پیاپی که سیستم می‌دهد؛ تاریخ شمارش که معمولاً تاریخ ثبت مغایرت هم هست', en: 'A sequential system number; the count date, usually also the posting date of differences' },
              { fa: 'PI-26-041، پایان ماه', en: 'PI-26-041, month-end' },
            ],
            [
              { fa: 'انبار و محل', en: 'Warehouse and bin' },
              { fa: 'کد انبار و آدرس قفسه یا محوطه', en: 'Warehouse code and shelf or yard address' },
              { fa: 'WH-20، قفس قطعات یدکی C-03', en: 'WH-20, spares cage C-03' },
            ],
            [
              { fa: 'کالا', en: 'Material' },
              { fa: 'شماره و شرح کالا از داده پایه کالا', en: 'Material number and description from the material master' },
              { fa: '300520 آب‌بند مکانیکی پمپ P-104', en: '300520 P-104 mechanical seal' },
            ],
            [
              { fa: 'واحد سنجش', en: 'Unit of measure' },
              { fa: 'همان واحدی که کاردکس با آن نگه داشته می‌شود', en: 'The same unit the stock ledger uses' },
              { fa: 'عدد، شاخه، بشکه، تن', en: 'each, joint, drum, tonne' },
            ],
            [
              { fa: 'بچ، شماره ذوب یا سریال', en: 'Batch, heat or serial number' },
              { fa: 'برای ردیابی و تطبیق با گواهی کیفیت', en: 'For traceability and matching to certificates' },
              { fa: 'شماره ذوب لوله، تاریخ انقضای بشکه', en: 'Pipe heat number, drum expiry date' },
            ],
            [
              { fa: 'مقدار دفتری', en: 'Book quantity' },
              { fa: 'در سیستم ثبت است اما روی برگه شمارش کور چاپ نمی‌شود', en: 'Held in the system but not printed on the blind count sheet' },
              { fa: '6 (پنهان)', en: '6 (hidden)' },
            ],
            [
              { fa: 'مقدار شمارش‌شده', en: 'Counted quantity' },
              { fa: 'عددی که شمارنده می‌بیند و می‌نویسد', en: 'What the counter sees and writes' },
              { fa: '5', en: '5' },
            ],
            [
              { fa: 'شمارنده و تأییدها', en: 'Counter and approvals' },
              { fa: 'نام و امضای شمارنده، شمارنده دوم و تأییدکننده', en: 'Name and signature of the counter, recounter and approver' },
              { fa: 'امضا، تاریخ و ساعت', en: 'Signatures, date and time' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'شمارش در انبار نفت و گاز', en: 'Counting in an oil and gas warehouse' },
          text: {
            fa: 'در **محوطه لوله**، لوله‌های جداری و مغزی به **شاخه** شمرده می‌شوند و فهرست طول شاخه‌ها و **شماره ذوب** هر دسته با گواهی کارخانه تطبیق داده می‌شود؛ شاخه‌ای که شماره ذوبش خوانا نیست، برای چاه قابل استفاده نیست. **مواد شیمیایی** به بشکه یا کیسه شمرده می‌شوند و بچ و تاریخ انقضای هر بشکه بررسی می‌شود. **قطعات یدکی حیاتی** مانند کیت سوپاپ K-201 با شماره سریال شمرده می‌شوند، نه فقط با تعداد.',
            en: 'In the **pipe yard**, casing and tubing are counted in **joints**, and the joint-length list (the pipe tally) and the **heat number** of each bundle are matched to the mill certificate; a joint whose heat number cannot be read cannot go into a well. **Chemicals** are counted by drum or sack, and each drum’s batch and expiry date are checked. **Critical spares** such as the K-201 valve kits are counted by serial number, not just by quantity.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'برش زمانی را جدی بگیرید', en: 'Take cut-off seriously' },
          text: {
            fa: 'اگر کامیونی ساعت 6 عصر 10 شاخه لوله برای دکل حفاری چاه AR-12 بار بزند اما حواله آن فردا صبح ثبت شود، شمارش امشب 10 شاخه کمتر از سیستم نشان می‌دهد. این **کسری واقعی نیست**؛ فقط ثبت حواله دیر شده است. پیش از شمارش همه رسیدها و حواله‌های باز را ثبت کنید و در طول شمارش هیچ کالایی را بدون سند جابه‌جا نکنید.',
            en: 'If a truck loads 10 joints for the rig drilling AR-12 at 6 p.m. but the goods issue is posted next morning, tonight’s count shows 10 joints fewer than the system. That is **not a real shortage**; the issue was simply posted late. Post every open receipt and issue before the count, and move nothing without a document while it runs.',
          },
        },
      ],
    },
    {
      id: 'differences',
      title: { fa: 'بررسی، تأیید و ثبت مغایرت‌ها در ERP', en: 'Investigating, approving and posting differences in the ERP' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**مغایرت شمارش** یعنی مقدار شمارش‌شده منهای مقدار دفتری. اگر شمارش‌شده کمتر باشد **کسری** داریم و اگر بیشتر باشد **اضافی**. مغایرت یک **نشانه** است، نه علت. پیش از ثبت باید پرسید چرا اتفاق افتاده است؛ بیشتر مغایرت‌ها خطای ثبت‌اند، نه گم شدن کالا.',
            en: 'A **count difference** is the counted quantity minus the book quantity. If the count is lower we have a **shortage**; if it is higher, a **surplus**. A difference is a **symptom**, not a cause. Before posting it, ask why it happened: most differences are recording errors, not lost goods.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'علت‌های رایج مغایرت و راه بررسی', en: 'Common causes of differences and how to check them' },
          head: [
            { fa: 'علت', en: 'Cause' },
            { fa: 'نشانه معمول', en: 'Typical sign' },
            { fa: 'بررسی و اصلاح', en: 'Check and fix' },
          ],
          rows: [
            [
              { fa: 'حواله یا رسید کالا (GRN) ثبت‌نشده', en: 'Unposted goods issue or GRN' },
              { fa: 'کسری (حواله) یا اضافی (رسید) به اندازه یک تحویل', en: 'A shortage (issue) or surplus (receipt) equal to one delivery' },
              { fa: 'رزروها، دستور کارها و رسیدهای باز را ببینید؛ سند جاافتاده را ثبت کنید، نه مغایرت را', en: 'Check open reservations, work orders and receipts; post the missing document, not a difference' },
            ],
            [
              { fa: 'واحد سنجش اشتباه', en: 'Wrong unit of measure' },
              { fa: 'اختلاف بسیار بزرگ و نامعقول، مثلاً متر به جای شاخه', en: 'A huge, implausible difference, e.g. metres entered as joints' },
              { fa: 'عدد را به واحد کاردکس تبدیل کنید و دوباره وارد کنید', en: 'Convert the figure to the ledger unit and re-enter it' },
            ],
            [
              { fa: 'محل اشتباه', en: 'Wrong bin' },
              { fa: 'کسری در یک محل و اضافی هم‌اندازه در محل دیگر', en: 'A shortage in one bin and an equal surplus in another' },
              { fa: 'جابه‌جایی را با سند انتقال داخلی اصلاح کنید', en: 'Correct it with an internal bin transfer' },
            ],
            [
              { fa: 'کد کالای اشتباه یا تکراری', en: 'Wrong or duplicate material code' },
              { fa: 'کسری در یک کد و اضافی در کدی مشابه', en: 'A shortage on one code and a surplus on a similar code' },
              { fa: 'با داده پایه کالا تطبیق دهید؛ واحد داده پایه کد تکراری را ادغام یا مسدود کند', en: 'Match against the material master; the master-data team merges or blocks the duplicate' },
            ],
            [
              { fa: 'خطای برش زمانی', en: 'Cut-off error' },
              { fa: 'کسری برابر کالایی که در حال ارسال بود', en: 'A shortage equal to goods that were being shipped' },
              { fa: 'حواله را در دوره درست ثبت کنید', en: 'Post the issue in the right period' },
            ],
            [
              { fa: 'آسیب، تبخیر یا تاریخ‌گذشتگی', en: 'Damage, evaporation or expiry' },
              { fa: 'کسری در مواد شیمیایی یا اقلام شکستنی', en: 'Shortages in chemicals or fragile items' },
              { fa: 'گزارش HSE را بخواهید؛ اقلام آسیب‌دیده را با سند اسقاط ثبت کنید', en: 'Ask for the HSE report; record damaged items with a scrap document' },
            ],
            [
              { fa: 'سرقت یا تحویل بدون سند', en: 'Theft or issue without a document' },
              { fa: 'کسری بی‌توضیح در اقلام کوچک و ارزشمند', en: 'Unexplained shortages of small, valuable items' },
              { fa: 'به حراست گزارش دهید و کنترل‌های فیزیکی را بازبینی کنید', en: 'Report to security and review physical controls' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'حد مجاز و شمارش مجدد (اعداد فرضی)', en: 'Tolerance and recount rules (illustrative)' },
          text: {
            fa: 'قاعده مسار پترولیوم این است: اگر مغایرت یک قلم بیش از **2% مقدار** یا بیش از **500 به مبلغ** باشد، یا قلم سریال‌دار یا حیاتی باشد، شخص دیگری آن را دوباره می‌شمارد و فقط نتیجه شمارش مجدد ملاک است. هر شرکت این مرزها را در دستورالعمل انبار خود تعیین می‌کند.',
            en: 'Masar Petroleum’s rule: if an item’s difference is more than **2% of the quantity** or more than **500 in value**, or the item is serialised or critical, a different person recounts it and only the recount result counts. Each company sets these limits in its warehouse procedure.',
          },
        },
        { type: 'h', text: { fa: 'در ERP: داده پایه، اسناد و نقش‌ها', en: 'In the ERP: master data, documents and roles' } },
        {
          type: 'list',
          items: [
            {
              fa: '**داده پایه کالا**: واحد سنجش، گروه ارزش‌گذاری (که حساب کل موجودی را تعیین می‌کند)، قیمت میانگین متحرک، شاخص ABC، شاخص شمارش چرخه‌ای و نشان «حیاتی».',
              en: '**Material master**: unit of measure, valuation class (which determines the inventory GL account), moving average price, ABC indicator, cycle-count indicator and a "critical" flag.',
            },
            {
              fa: '**داده پایه محل‌ها**: آدرس قفسه‌ها و محوطه‌ها، به همراه بچ‌ها و شماره‌سریال‌ها.',
              en: '**Bin master data**: shelf and yard addresses, plus batches and serial numbers.',
            },
            {
              fa: '**اسناد تراکنشی**: سند شمارش، ثبت نتیجه شمارش، شمارش مجدد و در پایان **ثبت مغایرت**، که خودش یک گردش کالا (مثل حواله یا رسید) است و موجودی و سند مالی را با هم تغییر می‌دهد.',
              en: '**Transaction documents**: the count document, count results, recounts and finally the **difference posting**, which is itself a goods movement (like an issue or a receipt) that changes stock and creates the Finance entry together.',
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'نقش‌ها در شمارش و ثبت مغایرت', en: 'Roles in counting and posting differences' },
          head: [
            { fa: 'نقش', en: 'Role' },
            { fa: 'چه می‌کند', en: 'Does' },
            { fa: 'چه نمی‌کند', en: 'Must not' },
          ],
          rows: [
            [
              { fa: 'شمارنده', en: 'Counter' },
              { fa: 'شمارش کور و امضای برگه', en: 'Blind count and signs the sheet' },
              { fa: 'محل‌هایی را که خودش امین آن‌هاست بشمارد', en: 'Count bins in their own custody' },
            ],
            [
              { fa: 'انباردار', en: 'Storekeeper' },
              { fa: 'محل‌ها را آماده می‌کند و اسناد باز را پیش از شمارش ثبت می‌کند', en: 'Prepares the bins and posts open documents before the count' },
              { fa: 'مغایرت را تأیید کند', en: 'Approve differences' },
            ],
            [
              { fa: 'کنترل موجودی', en: 'Inventory controller' },
              { fa: 'سند شمارش صادر می‌کند و علت مغایرت‌ها را بررسی و گزارش می‌کند', en: 'Creates the count document, investigates and reports causes' },
              { fa: 'مغایرت بالاتر از سقف اختیار خود را ثبت کند', en: 'Post differences above their limit' },
            ],
            [
              { fa: 'مدیر انبار', en: 'Warehouse manager' },
              { fa: 'مغایرت‌ها را در سقف اختیار خود تأیید می‌کند', en: 'Approves differences within their limit' },
              { fa: 'نتیجه شمارشی را که خودش وارد کرده تأیید کند', en: 'Approve a count they entered themselves' },
            ],
            [
              { fa: 'امور مالی', en: 'Finance' },
              { fa: 'سند خودکار را بررسی و با حساب کل تطبیق می‌دهد', en: 'Reviews the automatic entry and reconciles it to the general ledger' },
              { fa: 'سند دستی روی حساب‌های موجودی بزند', en: 'Post manual entries to inventory accounts' },
            ],
          ],
        },
        {
          type: 'table',
          caption: { fa: 'سقف تأیید مغایرت در مسار پترولیوم (اعداد فرضی)', en: 'Masar Petroleum approval limits for differences (illustrative)' },
          head: [
            { fa: 'جمع مبلغ مطلق مغایرت‌های یک سند', en: 'Absolute total of differences on one document' },
            { fa: 'تأییدکننده', en: 'Approver' },
          ],
          rows: [
            [{ fa: 'تا 1,000', en: 'Up to 1,000' }, { fa: 'کنترل موجودی', en: 'Inventory controller' }],
            [{ fa: 'از 1,000 تا 10,000', en: '1,000 to 10,000' }, { fa: 'مدیر انبار', en: 'Warehouse manager' }],
            [
              { fa: 'بیش از 10,000', en: 'Above 10,000' },
              { fa: 'مدیر مالی و مدیر عملیات؛ در صورت لزوم گزارش به کمیته عملیاتی شرکا', en: 'Finance manager and operations manager; reported to the partners’ operating committee if required' },
            ],
          ],
        },
        { type: 'h', text: { fa: 'مثال: شمارش چرخه‌ای PI-26-041 در انبار میدان', en: 'Example: cycle count PI-26-041 at the Field Warehouse' } },
        {
          type: 'table',
          caption: { fa: 'نتیجه شمارش مجدد در انبار میدان (WH-20)', en: 'Recount results at the Field Warehouse (WH-20)' },
          head: [
            { fa: 'کالا', en: 'Material' },
            { fa: 'مقدار دفتری', en: 'Book qty' },
            { fa: 'شمارش‌شده', en: 'Counted' },
            { fa: 'مغایرت', en: 'Difference' },
            { fa: 'قیمت میانگین', en: 'MAP' },
            { fa: 'مبلغ مغایرت', en: 'Difference value' },
          ],
          rows: [
            [{ fa: '200310 بازدارنده خوردگی (بشکه)', en: '200310 Corrosion inhibitor (drum)' }, 120, 116, { fa: 'کسری 4', en: '4 short' }, 650, 2600],
            [{ fa: '400700 واشر اسپیرال 4 اینچ (عدد)', en: '400700 Spiral-wound gasket 4" (each)' }, 400, 412, { fa: 'اضافی 12', en: '12 over' }, 15, 180],
            [{ fa: '300520 آب‌بند مکانیکی P-104 (عدد)', en: '300520 P-104 mechanical seal (each)' }, 6, 5, { fa: 'کسری 1', en: '1 short' }, 1200, 1200],
            [{ fa: '100120 لوله مغزی 3-1/2 اینچ (شاخه)', en: '100120 Tubing 3-1/2" (joint)' }, 260, 260, { fa: 'بدون مغایرت', en: 'none' }, 900, 0],
            [{ fa: 'جمع کسری', en: 'Total shortages' }, blank, blank, blank, blank, 3800],
            [{ fa: 'جمع اضافی', en: 'Total surpluses' }, blank, blank, blank, blank, 180],
            [{ fa: 'خالص کسری', en: 'Net shortage' }, blank, blank, blank, blank, 3620],
          ],
          numericCols: [1, 2, 4, 5],
        },
        {
          type: 'p',
          text: {
            fa: 'همه این مغایرت‌ها از حد مجاز بیشتر بودند (مثلاً 4 بشکه یعنی 3.3% مقدار)، پس شخص دیگری آن‌ها را دوباره شمرد و همان نتیجه به دست آمد. بررسی کنترل موجودی نشان داد: هیچ رسید یا حواله بازی وجود ندارد؛ **4 بشکه** بازدارنده در یک نشتی آسیب دیده و تیم HSE آن‌ها را جمع کرده اما سند اسقاط صادر نشده است؛ **1 آب‌بند** بدون توضیح کم است و به حراست گزارش شد؛ و **12 واشر اضافی** احتمالاً از حواله‌ای است که ماه‌ها پیش بیشتر از مقدار تحویل‌شده ثبت شده بود. جمع مبلغ مطلق مغایرت‌ها 3,980 است (2,600 + 180 + 1,200)، پس طبق جدول سقف تأیید، مدیر انبار آن را تأیید می‌کند.',
            en: 'Every one of these differences was above tolerance (4 drums is 3.3% of the quantity, for example), so a second person recounted them and got the same result. The inventory controller’s investigation found: no open receipts or issues; **4 drums** of inhibitor were damaged in a leak and removed by the HSE team, but no scrap document was raised; **1 seal** is missing with no explanation and was reported to security; and the **12 extra gaskets** most likely come from an issue months ago that was posted for more than was actually handed out. The absolute total of the differences is 3,980 (2,600 + 180 + 1,200), so under the approval table the warehouse manager approves it.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'سند مالی خودکار ثبت مغایرت PI-26-041', en: 'Automatic Finance entry for count PI-26-041' },
          entries: [
            {
              date: { fa: 'پایان ماه', en: 'Month-end' },
              lines: [
                { account: { fa: 'مغایرت موجودی انبار', en: 'Inventory differences' }, debit: 3800 },
                { account: { fa: 'موجودی مواد شیمیایی', en: 'Inventory: chemicals' }, credit: 2600 },
                { account: { fa: 'موجودی قطعات یدکی', en: 'Inventory: spare parts' }, credit: 1200 },
              ],
              memo: {
                fa: 'کسری 4 بشکه 200310 و 1 عدد 300520 به قیمت میانگین متحرک',
                en: 'Shortage of 4 drums of 200310 and 1 unit of 300520 at moving average price',
              },
            },
            {
              date: { fa: 'پایان ماه', en: 'Month-end' },
              lines: [
                { account: { fa: 'موجودی اقلام مصرفی عمومی', en: 'Inventory: general consumables' }, debit: 180 },
                { account: { fa: 'مغایرت موجودی انبار', en: 'Inventory differences' }, credit: 180 },
              ],
              memo: { fa: 'اضافی 12 عدد 400700 به قیمت میانگین متحرک', en: 'Surplus of 12 units of 400700 at moving average price' },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'ERP چه کاری را خودکار انجام می‌دهد؟', en: 'What the ERP does automatically' },
          text: {
            fa: 'وقتی مدیر انبار مغایرت را تأیید و ثبت می‌کند، ERP: (1) مقدار کاردکس را به مقدار شمارش‌شده تغییر می‌دهد؛ (2) هر مغایرت را با **قیمت میانگین متحرک** همان لحظه ارزش‌گذاری می‌کند؛ (3) حساب موجودی را از **گروه ارزش‌گذاری** هر کالا پیدا می‌کند (مواد شیمیایی، قطعات یدکی، اقلام مصرفی)؛ و (4) سند مالی را با ارجاع به سند شمارش ثبت می‌کند. حسابدار چیزی تایپ نمی‌کند؛ فقط سند را بررسی و تطبیق می‌دهد. اثر خالص: هزینه مغایرت 3,620 و کاهش موجودی به همین مبلغ.',
            en: 'When the warehouse manager approves and posts the differences, the ERP: (1) changes the ledger quantity to the counted quantity; (2) values each difference at the current **moving average price**; (3) finds the inventory account from each material’s **valuation class** (chemicals, spare parts, consumables); and (4) posts the Finance entry with a reference to the count document. The accountant types nothing; they review and reconcile. Net effect: an inventory-difference expense of 3,620 and inventory lower by the same amount.',
          },
        },
        {
          type: 'diagram',
          id: 'erp-modules',
          caption: {
            fa: 'ثبت مغایرت در ماژول موجودی، سند مالی را در ماژول مالی می‌سازد',
            en: 'A difference posted in the Inventory module creates the entry in Finance',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'پیوند با بازیافت هزینه', en: 'The cost-recovery link' },
          text: {
            fa: 'کسری انبار به هیچ چاه، دستور کار یا مجوز هزینه‌ای نرسیده است. بسیاری از قراردادهای نفتی و موافقت‌نامه‌های مشارکت، زیانی را که از **سهل‌انگاری یا سرقت** ناشی شده قابل بازیافت یا قابل شارژ به حساب مشترک نمی‌دانند، در حالی که آسیب مستند ناشی از یک حادثه عملیاتی ممکن است پذیرفته شود. قاعده دقیق به قرارداد بستگی دارد؛ اما در هر حال **گزارش بررسی**، گزارش HSE و تأییدها را کنار سند شمارش بایگانی کنید تا ثبت در حسابرسی شرکا قابل دفاع باشد.',
            en: 'A shortage never reached a well, work order or AFE. Many petroleum contracts and joint operating agreements do not accept losses caused by **negligence or theft** as recoverable or chargeable to the joint account, while documented damage from an operational incident may be accepted. The exact rule depends on the contract, but in every case file the **investigation report**, the HSE report and the approvals with the count document so the posting can be defended in a partner audit.',
          },
        },
      ],
    },
    {
      id: 'abc-xyz',
      title: { fa: 'تحلیل ABC و XYZ: همه اقلام یکسان نیستند', en: 'ABC and XYZ analysis: not all items are equal' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'انبار میدان آریا هزاران قلم کالا دارد؛ از لوله جداری گران‌قیمت تا واشر و پیچ. نمی‌توان همه را با یک دقت شمرد و کنترل کرد. **تحلیل ABC** اقلام را بر اساس **ارزش مصرف سالانه** گروه‌بندی می‌کند، با این ایده که معمولاً تعداد کمی از اقلام بیشتر ارزش را می‌سازند.',
            en: 'The Arya Field Warehouse holds thousands of items, from costly casing to gaskets and bolts. They cannot all be counted and controlled with the same care. **ABC analysis** groups items by **annual consumption value**, on the idea that a few items usually make up most of the value.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'ارزش مصرف سالانه = مقدار مصرف سالانه × قیمت میانگین متحرک',
            en: 'Annual consumption value = Annual usage × Moving average price',
          },
          note: {
            fa: 'قاعده این مثال: اقلام تا 80% ارزش تجمعی گروه A، تا 95% گروه B و بقیه گروه C. مرزها در شرکت‌ها ممکن است فرق کند.',
            en: 'Rule in this example: items up to 80% of cumulative value are A, up to 95% B, the rest C. Companies may set different limits.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'تحلیل ABC ده قلم انبار میدان (مرتب از بیشترین ارزش)', en: 'ABC analysis of ten Field Warehouse items (sorted by value)' },
          head: [
            { fa: 'کالا', en: 'Material' },
            { fa: 'مصرف سالانه', en: 'Annual usage' },
            { fa: 'قیمت میانگین', en: 'MAP' },
            { fa: 'ارزش سالانه', en: 'Annual value' },
            { fa: 'سهم', en: 'Share' },
            { fa: 'سهم تجمعی', en: 'Cumulative' },
            { fa: 'کلاس', en: 'Class' },
          ],
          rows: [
            [{ fa: '100100 لوله جداری 9-5/8 اینچ (شاخه)', en: '100100 Casing 9-5/8" (joint)' }, 160, 2400, 384000, { fa: '38.4%', en: '38.4%' }, { fa: '38.4%', en: '38.4%' }, { fa: 'A', en: 'A' }],
            [{ fa: '100120 لوله مغزی 3-1/2 اینچ (شاخه)', en: '100120 Tubing 3-1/2" (joint)' }, 400, 900, 360000, { fa: '36.0%', en: '36.0%' }, { fa: '74.4%', en: '74.4%' }, { fa: 'A', en: 'A' }],
            [{ fa: '200310 بازدارنده خوردگی (بشکه)', en: '200310 Corrosion inhibitor (drum)' }, 120, 650, 78000, { fa: '7.8%', en: '7.8%' }, { fa: '82.2%', en: '82.2%' }, { fa: 'B', en: 'B' }],
            [{ fa: '200300 باریت (تن)', en: '200300 Barite (tonne)' }, 200, 350, 70000, { fa: '7.0%', en: '7.0%' }, { fa: '89.2%', en: '89.2%' }, { fa: 'B', en: 'B' }],
            [{ fa: '200320 ماده امولسیون‌شکن (بشکه)', en: '200320 Demulsifier (drum)' }, 55, 800, 44000, { fa: '4.4%', en: '4.4%' }, { fa: '93.6%', en: '93.6%' }, { fa: 'B', en: 'B' }],
            [{ fa: '300540 شیر دروازه‌ای 4 اینچ (عدد)', en: '300540 Gate valve 4" (each)' }, 6, 3200, 19200, { fa: '1.9%', en: '1.9%' }, { fa: '95.5%', en: '95.5%' }, { fa: 'C', en: 'C' }],
            [{ fa: '300500 کیت سوپاپ K-201 (دست)', en: '300500 K-201 valve kit (set)' }, 4, 4500, 18000, { fa: '1.8%', en: '1.8%' }, { fa: '97.3%', en: '97.3%' }, { fa: 'C', en: 'C' }],
            [{ fa: '300520 آب‌بند مکانیکی P-104 (عدد)', en: '300520 P-104 mechanical seal (each)' }, 10, 1200, 12000, { fa: '1.2%', en: '1.2%' }, { fa: '98.5%', en: '98.5%' }, { fa: 'C', en: 'C' }],
            [{ fa: '400700 واشر اسپیرال 4 اینچ (عدد)', en: '400700 Spiral-wound gasket 4" (each)' }, 600, 15, 9000, { fa: '0.9%', en: '0.9%' }, { fa: '99.4%', en: '99.4%' }, { fa: 'C', en: 'C' }],
            [{ fa: '400710 پیچ دوسر 7/8 اینچ (عدد)', en: '400710 Stud bolt 7/8" (each)' }, 1450, 4, 5800, { fa: '0.6%', en: '0.6%' }, { fa: '100%', en: '100%' }, { fa: 'C', en: 'C' }],
            [{ fa: 'جمع', en: 'Total' }, blank, blank, 1000000, { fa: '100%', en: '100%' }, blank, blank],
          ],
          numericCols: [1, 2, 3, 4, 5],
        },
        {
          type: 'p',
          text: {
            fa: 'نتیجه: **گروه A** فقط 2 قلم (20% اقلام) است اما 74.4% ارزش مصرف را می‌سازد؛ **گروه B** سه قلم (30% اقلام) و 19.2% ارزش است؛ و **گروه C** پنج قلم (50% اقلام) و فقط 6.4% ارزش. پس بیشترین وقت شمارش و کنترل باید صرف لوله‌ها شود، نه واشرها.',
            en: 'Result: **class A** is just 2 items (20% of items) but 74.4% of consumption value; **class B** is 3 items (30%) and 19.2% of value; **class C** is 5 items (50%) and only 6.4% of value. Most counting and control effort should go to the pipe, not the gaskets.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**تحلیل XYZ** به پرسش دیگری جواب می‌دهد: مصرف یک قلم چقدر **قابل پیش‌بینی** است؟ برای این کار مصرف ماهانه را بررسی و **ضریب تغییرات** را حساب می‌کنیم. اقلام **X** مصرف یکنواخت دارند، اقلام **Y** نوسان متوسط و اقلام **Z** مصرف نامنظم و پراکنده.',
            en: '**XYZ analysis** answers a different question: how **predictable** is an item’s usage? We look at monthly usage and compute the **coefficient of variation**. **X** items have steady usage, **Y** items fluctuate moderately, and **Z** items are used irregularly and sporadically.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'ضریب تغییرات = انحراف معیار مصرف ماهانه ÷ میانگین مصرف ماهانه',
            en: 'Coefficient of variation = Standard deviation of monthly usage ÷ Mean monthly usage',
          },
          note: {
            fa: 'مرزهای این مثال: X تا 0.25، Y از 0.25 تا 0.75 و Z بیش از 0.75 (مرزها در شرکت‌ها متفاوت است).',
            en: 'Limits in this example: X up to 0.25, Y from 0.25 to 0.75, Z above 0.75 (companies use different limits).',
          },
        },
        {
          type: 'table',
          caption: { fa: 'مصرف شش ماه اخیر سه قلم (انحراف معیار جامعه)', en: 'Usage over the last six months for three items (population standard deviation)' },
          head: [
            { fa: 'کالا', en: 'Material' },
            { fa: 'مصرف ماهانه', en: 'Monthly usage' },
            { fa: 'میانگین', en: 'Mean' },
            { fa: 'انحراف معیار', en: 'Std deviation' },
            { fa: 'ضریب تغییرات', en: 'CV' },
            { fa: 'کلاس', en: 'Class' },
          ],
          rows: [
            [{ fa: '200310 بازدارنده خوردگی', en: '200310 Corrosion inhibitor' }, { fa: '10، 11، 9، 10، 10، 10', en: '10, 11, 9, 10, 10, 10' }, 10, 0.58, 0.06, { fa: 'X', en: 'X' }],
            [{ fa: '400700 واشر اسپیرال', en: '400700 Spiral-wound gasket' }, { fa: '40، 60، 20، 70، 80، 30', en: '40, 60, 20, 70, 80, 30' }, 50, 21.6, 0.43, { fa: 'Y', en: 'Y' }],
            [{ fa: '100100 لوله جداری 9-5/8 اینچ', en: '100100 Casing 9-5/8"' }, { fa: '0، 0، 80، 0، 0، 0', en: '0, 0, 80, 0, 0, 0' }, 13.33, 29.81, 2.24, { fa: 'Z', en: 'Z' }],
          ],
          numericCols: [2, 3, 4],
        },
        {
          type: 'table',
          caption: { fa: 'ماتریس ABC/XYZ و سیاست پیشنهادی (نمونه)', en: 'ABC/XYZ matrix and suggested policy (example)' },
          head: [
            { fa: 'کلاس', en: 'Class' },
            { fa: 'X (یکنواخت)', en: 'X (steady)' },
            { fa: 'Y (نوسانی)', en: 'Y (fluctuating)' },
            { fa: 'Z (پراکنده)', en: 'Z (sporadic)' },
          ],
          rows: [
            [
              { fa: 'A', en: 'A' },
              { fa: 'شمارش ماهانه؛ سفارش خودکار با نقطه سفارش و موجودی اطمینان کم', en: 'Count monthly; automatic reorder point with low safety stock' },
              { fa: 'شمارش ماهانه؛ پیش‌بینی دقیق و بازبینی ماهانه موجودی اطمینان', en: 'Count monthly; careful forecasting and a monthly safety-stock review' },
              { fa: 'شمارش ماهانه؛ خرید بر اساس برنامه حفاری و AFE، نه سابقه مصرف', en: 'Count monthly; buy against the drilling programme and AFE, not usage history' },
            ],
            [
              { fa: 'B', en: 'B' },
              { fa: 'شمارش فصلی؛ سفارش خودکار', en: 'Count quarterly; automatic reordering' },
              { fa: 'شمارش فصلی؛ حداقل و حداکثر با بازبینی دوره‌ای', en: 'Count quarterly; min/max with periodic review' },
              { fa: 'شمارش فصلی؛ خرید موردی با تأیید برنامه‌ریز', en: 'Count quarterly; buy case by case with planner approval' },
            ],
            [
              { fa: 'C', en: 'C' },
              { fa: 'شمارش سالانه؛ سفارش ساده و یکجا', en: 'Count yearly; simple bulk ordering' },
              { fa: 'شمارش سالانه؛ حداقل و حداکثر ساده', en: 'Count yearly; simple min/max' },
              { fa: 'شمارش سالانه؛ نگهداری فقط اگر حیاتی باشد', en: 'Count yearly; stock only if critical' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'ارزش کم، اهمیت زیاد', en: 'Low value, high importance' },
          text: {
            fa: 'کیت سوپاپ K-201 در تحلیل بالا در **گروه C** است، چون سالی فقط 4 دست مصرف می‌شود. اما توقف کمپرسور یعنی توقف بخشی از تولید گاز. **حیاتی بودن** محور جداگانه‌ای است: قطعات یدکی حیاتی، هر کلاسی که داشته باشند، باید مثل اقلام A ماهانه شمرده شوند، در قفس قفل‌دار بمانند و موجودی اطمینان داشته باشند. ERP این را با نشان «حیاتی» در داده پایه کالا مشخص می‌کند.',
            en: 'In the analysis above the K-201 valve kit is **class C**, because only 4 sets are used a year. But a compressor stop means part of the gas production stops. **Criticality** is a separate axis: critical spares, whatever their class, must be counted monthly like A items, kept in the locked cage and covered by safety stock. The ERP marks them with a "critical" flag in the material master.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در ERP شاخص ABC در داده پایه کالا ذخیره می‌شود و معمولاً سالی یک بار با داده مصرف واقعی دوباره محاسبه می‌شود. برنامه شمارش چرخه‌ای از همین شاخص استفاده می‌کند: مثلاً اگر انبار 150 قلم A (ماهانه)، 400 قلم B (فصلی) و 1,500 قلم C (سالانه) داشته باشد، در سال 1,800 + 1,600 + 1,500 = 4,900 شمارش لازم است؛ یعنی با حدود 245 روز کاری، روزی 20 قلم.',
            en: 'In the ERP the ABC indicator is stored in the material master and is usually recalculated once a year from actual usage. The cycle-count plan uses it: a warehouse with 150 A items (monthly), 400 B items (quarterly) and 1,500 C items (yearly) needs 1,800 + 1,600 + 1,500 = 4,900 counts a year, which over about 245 working days is 20 items a day.',
          },
        },
      ],
    },
    {
      id: 'slow-obsolete',
      title: { fa: 'اقلام کم‌گردش و منسوخ و کاهش ارزش موجودی', en: 'Slow-moving and obsolete stock and write-downs' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'کالایی که سال‌ها در انبار می‌ماند رایگان نیست: جا می‌گیرد، نگهداری و بیمه می‌خواهد، گاهی خراب می‌شود و پولی را که می‌توانست جای دیگری کار کند، حبس می‌کند. **قلم کم‌گردش** قلمی است که مدت طولانی (مثلاً 12 ماه) هیچ حواله‌ای نداشته است. **قلم منسوخ** قلمی است که دیگر مصرف قابل پیش‌بینی ندارد، مثلاً چون تجهیز مربوط به آن از رده خارج شده است. هر شرکت این مرزها را در سیاست خود تعیین می‌کند.',
            en: 'Stock that sits for years is not free: it takes space, needs care and insurance, sometimes deteriorates, and ties up money that could work elsewhere. A **slow-moving** item is one with no issues for a long time (for example 12 months). An **obsolete** item has no foreseeable use any more, for example because the equipment it belongs to has been retired. Each company sets these limits in its own policy.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**مازاد پروژه**: پس از بسته شدن AFE حفاری یک چاه، لوله و مواد اضافه به انبار برمی‌گردد و مصرف بعدی ندارد.',
              en: '**Project surplus**: after a well’s drilling AFE closes, extra pipe and materials come back to the warehouse with no next use.',
            },
            {
              fa: '**تجهیز از رده خارج‌شده**: قطعات یدکی پمپ یا کمپرسوری که تعویض شده، بی‌مصرف می‌شوند.',
              en: '**Retired equipment**: spares for a pump or compressor that has been replaced lose their use.',
            },
            {
              fa: '**خرید بیش از نیاز اقلام با زمان تأمین طولانی**: از ترس کمبود، بیشتر از نیاز سفارش داده شده است.',
              en: '**Over-ordered long-lead items**: bought in excess for fear of running out.',
            },
            {
              fa: '**تغییر مشخصات یا گواهی**: استاندارد طراحی یا الزام گواهی عوض شده و کالای قدیمی دیگر پذیرفته نمی‌شود.',
              en: '**Changed specification or certification**: the design standard or certification requirement changed and the old stock is no longer accepted.',
            },
            {
              fa: '**تاریخ‌گذشتگی**: مواد شیمیایی با عمر مفید محدود که به‌موقع مصرف نشده‌اند.',
              en: '**Expiry**: chemicals with a limited shelf life that were not used in time.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'قطعه بیمه‌ای منسوخ نیست', en: 'An insurance spare is not obsolete' },
          text: {
            fa: 'روتور یدکی کمپرسور K-201 ممکن است پنج سال بدون حواله در انبار بماند، چون فقط برای یک خرابی بزرگ نگه داشته می‌شود. این قلم **کم‌گردش** است اما **منسوخ نیست** و تا وقتی کمپرسور کار می‌کند، کاهش ارزش آن فقط به خاطر سن موجودی درست نیست. برخی قطعات یدکی اصلی و تجهیزات آماده به کار که تعریف دارایی ثابت را دارند، طبق IAS 16 ممکن است به‌جای موجودی، جزو دارایی‌های ثابت مشهود طبقه‌بندی و مستهلک شوند؛ این تصمیم تابع سیاست حسابداری شرکت است.',
            en: 'A spare rotor for compressor K-201 may sit for five years with no issue, because it is held only for a major failure. It is **slow-moving** but **not obsolete**, and while the compressor runs, writing it down on stock age alone is wrong. Some major spare parts and standby equipment that meet the definition of property, plant and equipment may, under IAS 16, be classified and depreciated as PP&E instead of inventory; that decision follows the company’s accounting policy.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'قاعده حسابداری ساده است: موجودی در ترازنامه به **اقل بهای تمام‌شده و خالص ارزش فروش** نشان داده می‌شود (IAS 2 و استاندارد حسابداری ایران درباره موجودی مواد و کالا). **خالص ارزش فروش** مبلغی است که انتظار داریم از فروش کالا به دست آوریم، منهای مخارج لازم برای فروش. اگر این مبلغ از بها کمتر باشد، تفاوت را به‌عنوان **کاهش ارزش موجودی** هزینه می‌کنیم.',
            en: 'The accounting rule is simple: inventory is shown on the balance sheet at the **lower of cost and net realisable value** (IAS 2, and the Iranian standard on inventories). **Net realisable value** (NRV) is what we expect to get by selling the item, minus the costs needed to make the sale. If it is below cost, the difference is expensed as an **inventory write-down**.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'کاهش ارزش موجودی = بهای تمام‌شده − خالص ارزش فروش (فقط وقتی خالص ارزش فروش کمتر است)',
            en: 'Write-down = Cost − NRV (only when NRV is lower)',
          },
          note: {
            fa: 'خالص ارزش فروش = قیمت فروش برآوردی − مخارج لازم برای فروش',
            en: 'NRV = Estimated selling price − Costs to sell',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'مثال: 8 شیر دروازه‌ای با مشخصات قدیمی', en: 'Example: 8 gate valves of a superseded specification' },
          text: {
            fa: 'در انبار میدان **8 عدد** شیر دروازه‌ای 300540 هست که پس از تغییر استاندارد طراحی خطوط جریان، دیگر اجازه نصب ندارند. بهای آن‌ها 8 × 3,200 = **25,600** است. یک خریدار تجهیزات دست‌دوم و ضایعات فلزی 4,500 پیشنهاد داده و مخارج بارگیری و حمل 500 برآورد شده است؛ پس خالص ارزش فروش **4,000** است. کاهش ارزش: 25,600 − 4,000 = **21,600**.',
            en: 'The Field Warehouse holds **8** gate valves (300540) that may no longer be installed after the flowline design standard changed. Their cost is 8 × 3,200 = **25,600**. A buyer of used equipment and scrap metal offers 4,500, and loading and transport are estimated at 500, so NRV is **4,000**. Write-down: 25,600 − 4,000 = **21,600**.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت کاهش ارزش و فروش بعدی شیرها', en: 'Write-down and later sale of the valves' },
          entries: [
            {
              date: { fa: 'پایان سال', en: 'Year-end' },
              lines: [
                { account: { fa: 'هزینه کاهش ارزش موجودی', en: 'Inventory write-down expense' }, debit: 21600 },
                { account: { fa: 'ذخیره کاهش ارزش موجودی', en: 'Allowance for inventory write-down' }, credit: 21600 },
              ],
              memo: {
                fa: 'شیرها هنوز در انبارند؛ کاردکس بهای 25,600 را نگه می‌دارد و ترازنامه خالص آن را 4,000 نشان می‌دهد',
                en: 'The valves are still in stock; the ledger keeps their cost of 25,600, and the balance sheet shows them net at 4,000',
              },
            },
            {
              date: { fa: 'سال بعد', en: 'Following year' },
              lines: [
                { account: { fa: 'موجودی نقد', en: 'Cash' }, debit: 4000 },
                { account: { fa: 'ذخیره کاهش ارزش موجودی', en: 'Allowance for inventory write-down' }, debit: 21600 },
                { account: { fa: 'موجودی قطعات یدکی', en: 'Inventory: spare parts' }, credit: 25600 },
              ],
              memo: {
                fa: 'فروش به 4,500 و پرداخت 500 هزینه حمل؛ خالص دریافتی 4,000 و سود یا زیان دیگری باقی نمی‌ماند',
                en: 'Sold for 4,500 with 500 paid for transport; net cash 4,000 and no further gain or loss',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'تأیید فروش و بازیافت هزینه', en: 'Disposal approval and cost recovery' },
          text: {
            fa: 'کاهش ارزش یک برآورد حسابداری است، نه مخارج واقعی عملیات؛ بنابراین در بسیاری از قراردادهای نفتی **قابل بازیافت نیست**. فروش یا اسقاط کالایی که برای عملیات مشترک خریده شده، معمولاً به تأیید کمیته عملیاتی شرکا و گاهی طرف دولتی قرارداد نیاز دارد، و درآمد فروش ممکن است باید به حساب مشترک یا حساب بازیافت هزینه بستانکار شود. قاعده دقیق را در قرارداد و روش حسابداری پیوست آن ببینید.',
            en: 'A write-down is an accounting estimate, not an actual operating cost, so under many petroleum contracts it is **not recoverable**. Selling or scrapping materials bought for the joint operation usually needs approval from the partners’ operating committee, sometimes from the government side too, and the proceeds may have to be credited to the joint account or the cost-recovery account. Check the contract and its accounting procedure for the exact rule.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'گزارش «سن موجودی» یا «اقلام بدون گردش» را هر فصل از ERP بگیرید و با واحد فنی مرور کنید: کدام قلم هنوز برای تجهیزی در حال کار لازم است، کدام را می‌توان به پروژه دیگری منتقل کرد و کدام باید فروخته یا اسقاط شود. در ایران، اثر مالیاتی کاهش ارزش و زیان اسقاط به قوانین مالیاتی روز بستگی دارد؛ پیش از اتکا به آن، با مشاور مالیاتی بررسی کنید.',
            en: 'Pull the stock-aging or no-movement report from the ERP every quarter and review it with engineering: which items are still needed for running equipment, which can move to another project, and which should be sold or scrapped. In Iran, the tax treatment of write-downs and scrapping losses depends on current tax law; check with a tax adviser before relying on it.',
          },
        },
      ],
    },
    {
      id: 'controls',
      title: { fa: 'کنترل‌های داخلی و تفکیک وظایف', en: 'Internal controls and segregation of duties' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'موجودی انبار، پول نقدی است که شکل کالا گرفته است. انبار میدان از دفتر مرکزی دور است، کالاهای ارزشمند و قابل فروش دارد و افراد زیادی با آن سروکار دارند. **کنترل داخلی** مجموعه قواعدی است که مطمئن می‌کند هر حرکت کالا مجاز، ثبت‌شده و درست است. مهم‌ترین آن‌ها **تفکیک وظایف** است: هیچ‌کس نباید بتواند یک اشتباه یا تقلب را از اول تا آخر به‌تنهایی انجام دهد و پنهان کند.',
            en: 'Inventory is cash in the shape of goods. The Field Warehouse is far from head office, holds valuable, saleable items, and many people handle it. **Internal control** is the set of rules that makes sure every movement of goods is authorised, recorded and correct. The most important is **segregation of duties**: no single person should be able to commit an error or a fraud from start to finish and hide it.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'وظایفی که نباید در دست یک نفر باشد', en: 'Duties that must not sit with one person' },
          head: [
            { fa: 'وظیفه اول', en: 'Duty 1' },
            { fa: 'وظیفه دوم', en: 'Duty 2' },
            { fa: 'خطر در صورت تجمیع', en: 'Risk if combined' },
          ],
          rows: [
            [
              { fa: 'نگهداری کالا (انباردار)', en: 'Custody of goods (storekeeper)' },
              { fa: 'تأیید مغایرت شمارش', en: 'Approving count differences' },
              { fa: 'کالا را بردارد و کسری را با تأیید خودش پاک کند', en: 'Takes goods and clears the shortage with their own approval' },
            ],
            [
              { fa: 'نگهداری کالا', en: 'Custody of goods' },
              { fa: 'شمارش همان محل‌ها', en: 'Counting the same bins' },
              { fa: 'عدد شمارش را با عدد سیستم «هماهنگ» کند', en: '"Aligns" the count with the system figure' },
            ],
            [
              { fa: 'ایجاد و تغییر داده پایه کالا', en: 'Creating and changing material master data' },
              { fa: 'ثبت رسید و حواله', en: 'Posting receipts and issues' },
              { fa: 'کد ساختگی بسازد یا واحد سنجش را عوض کند و حرکت کالا را پنهان کند', en: 'Creates a fake code or changes the unit of measure to hide movements' },
            ],
            [
              { fa: 'درخواست کالا (برنامه‌ریز)', en: 'Requesting materials (planner)' },
              { fa: 'تأیید درخواست برای مرکز هزینه', en: 'Approving the request for the cost centre' },
              { fa: 'کالا به نام یک دستور کار برداشته شود بی‌آنکه کسی نیاز را تأیید کند', en: 'Goods drawn against a work order with no one confirming the need' },
            ],
            [
              { fa: 'ثبت گردش کالا', en: 'Posting goods movements' },
              { fa: 'ثبت سند دستی در حساب‌های موجودی', en: 'Posting manual entries to inventory GL accounts' },
              { fa: 'اختلاف کاردکس و حساب کل با سند دستی پوشانده شود', en: 'A gap between the stock ledger and the GL is covered with a manual entry' },
            ],
          ],
        },
        {
          type: 'list',
          items: [
            {
              fa: '**قفس قفل‌دار** برای قطعات ارزشمند و حیاتی، با ورود ثبت‌شده با کلید یا کارت.',
              en: '**Locked cage** for valuable and critical spares, with logged key or card access.',
            },
            {
              fa: '**دوربین مداربسته** در درها و محوطه لوله، و نگهداری تصاویر برای مدت مشخص.',
              en: '**CCTV** at the gates and the pipe yard, with footage kept for a set period.',
            },
            {
              fa: '**برگه خروج** برای هر کالایی که از سایت خارج می‌شود؛ نگهبانی آن را با حواله انبار تطبیق می‌دهد.',
              en: '**Gate pass** for anything leaving the site, which security checks against the goods issue.',
            },
            {
              fa: '**انبار مواد شیمیایی** جدا و دیواره‌دار، با برگه اطلاعات ایمنی هر ماده؛ هم الزام HSE است و هم جلوی نشتی و هدررفت را می‌گیرد.',
              en: '**Chemical store** segregated and bunded, with a safety data sheet for each product: an HSE requirement that also prevents leaks and losses.',
            },
            {
              fa: '**کنترل داده پایه**: کد کالای تازه فقط با درخواست و تأیید واحد داده پایه ساخته می‌شود تا کد تکراری به وجود نیاید.',
              en: '**Master-data control**: new material codes are created only on request and with approval from the master-data team, so no duplicates appear.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در ERP، تفکیک وظایف با **نقش‌های دسترسی** اجرا می‌شود: نقش «انباردار» می‌تواند رسید و حواله ثبت کند اما مغایرت را تأیید نمی‌کند؛ نقش «تأییدکننده مغایرت» نمی‌تواند حواله ثبت کند. حسابرسی داخلی هر فصل گزارش **تعارض دسترسی‌ها** را بررسی می‌کند و دسترسی اضطراری (مثلاً در شیفت شب میدان) ثبت و بعداً بازبینی می‌شود. حساب‌های کل موجودی هم طوری تنظیم می‌شوند که فقط ثبت خودکار از ماژول موجودی را بپذیرند.',
            en: 'In the ERP, segregation of duties is enforced through **access roles**: the "storekeeper" role can post receipts and issues but cannot approve differences; the "difference approver" role cannot post issues. Internal audit reviews an **access-conflict report** every quarter, and emergency access (for example on the field night shift) is logged and reviewed afterwards. Inventory GL accounts are also set to accept only automatic postings from the Inventory module.',
          },
        },
        { type: 'h', text: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' } },
        {
          type: 'list',
          items: [
            {
              fa: '**ثبت مغایرت بدون شمارش مجدد و بررسی**: اول علت را پیدا کنید؛ بیشتر مغایرت‌ها با ثبت سند جاافتاده حل می‌شوند.',
              en: '**Posting differences without a recount and investigation**: find the cause first; most differences are solved by posting a missing document.',
            },
            {
              fa: '**یکی کردن کاردکس با شمارش فقط برای بستن کار**: علت پنهان می‌ماند و همان خطا ماه بعد تکرار می‌شود.',
              en: '**Forcing the ledger to match the count just to close the job**: the cause stays hidden and the same error returns next month.',
            },
            {
              fa: '**شمارش در حالی که حرکت کالا باز است**: محل‌ها را قفل کنید و برش زمانی را رعایت کنید.',
              en: '**Counting while movements are still open**: block the bins and respect cut-off.',
            },
            {
              fa: '**بی‌توجهی به واحد سنجش**: متر، شاخه، بشکه و لیتر را پیش از ورود عدد تبدیل کنید.',
              en: '**Ignoring the unit of measure**: convert metres, joints, drums and litres before entering the figure.',
            },
            {
              fa: '**کاهش ارزش قطعات بیمه‌ای فقط به خاطر سن**: کم‌گردش بودن با منسوخ بودن یکی نیست.',
              en: '**Writing down insurance spares on age alone**: slow-moving is not the same as obsolete.',
            },
            {
              fa: '**رایگان دانستن اضافی انبار**: اضافی هم باید بررسی شود؛ شاید کالای شخص دیگری، یک GRN ثبت‌نشده یا حواله‌ای باشد که دو بار ثبت شده است.',
              en: '**Treating a surplus as free stock**: surpluses need investigating too; they may be someone else’s goods, an unposted GRN or an issue posted twice.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'خط قرمز', en: 'The red line' },
          text: {
            fa: 'هیچ‌کس نباید مقدار دفتری را با سند دستی یا «ثبت مغایرت» تغییر دهد تا با عدد شمارش جور شود، مگر پس از شمارش مجدد، بررسی مستند و تأیید مقام مجاز. حسابرسان و شرکا دقیقاً همین ثبت‌ها را نمونه‌گیری می‌کنند.',
            en: 'No one should change a book quantity, through a manual entry or a difference posting, just to match the count, except after a recount, a documented investigation and approval by an authorised person. Auditors and partners sample exactly these postings.',
          },
        },
      ],
    },
    {
      id: 'practice',
      title: { fa: 'تمرین', en: 'Practice' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'چهار تمرین زیر از آسان به دشوار مرتب شده‌اند. پیش از دیدن پاسخ، هر کدام را خودتان حل کنید.',
            en: 'The four exercises below go from easy to hard. Try each one yourself before opening the solution.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'مغایرت باریت در انبار مرکزی', en: 'A barite difference at the Central Warehouse' },
          difficulty: 'easy',
          problem: {
            fa: 'در شمارش چرخه‌ای انبار مرکزی (WH-10)، مقدار دفتری باریت (کالای 200300) **85 تن** است و دو شمارش جداگانه **82 تن** را تأیید می‌کنند. قیمت میانگین متحرک 350 است. بررسی هیچ سند بازی پیدا نکرد و کسری به پاره شدن کیسه‌ها زیر باران نسبت داده شد. مبلغ مغایرت، تأییدکننده (طبق جدول سقف تأیید این درس) و سند مالی خودکار را تعیین کنید.',
            en: 'In a cycle count at the Central Warehouse (WH-10), the book quantity of barite (material 200300) is **85 tonnes**, and two separate counts confirm **82 tonnes**. The moving average price is 350. The investigation found no open documents, and the shortage was traced to sacks torn in the rain. Work out the difference value, the approver (using this lesson’s approval table) and the automatic Finance entry.',
          },
          hint: {
            fa: 'مغایرت = شمارش‌شده منهای دفتری؛ مبلغ = مقدار مغایرت × قیمت میانگین متحرک.',
            en: 'Difference = counted minus book; value = difference quantity × moving average price.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'مقدار مغایرت', en: 'Difference quantity' },
                  text: { fa: 'شمارش‌شده 82 و دفتری 85 است؛ پس **3 تن کسری** داریم.', en: 'Counted 82 against a book quantity of 85: a **3-tonne shortage**.' },
                },
                {
                  title: { fa: 'مبلغ', en: 'Value' },
                  text: { fa: '3 × 350 = **1,050**.', en: '3 × 350 = **1,050**.' },
                },
                {
                  title: { fa: 'تأییدکننده', en: 'Approver' },
                  text: {
                    fa: 'مبلغ بین 1,000 و 10,000 است، پس **مدیر انبار** تأیید می‌کند.',
                    en: 'The value is between 1,000 and 10,000, so the **warehouse manager** approves.',
                  },
                },
                {
                  title: { fa: 'حساب‌ها', en: 'Accounts' },
                  text: {
                    fa: 'باریت در گروه ارزش‌گذاری مواد شیمیایی است، پس ERP حساب «موجودی مواد شیمیایی» را بستانکار می‌کند.',
                    en: 'Barite is in the chemicals valuation class, so the ERP credits "Inventory: chemicals".',
                  },
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  lines: [
                    { account: { fa: 'مغایرت موجودی انبار', en: 'Inventory differences' }, debit: 1050 },
                    { account: { fa: 'موجودی مواد شیمیایی', en: 'Inventory: chemicals' }, credit: 1050 },
                  ],
                  memo: { fa: 'کسری 3 تن باریت در WH-10', en: 'Shortage of 3 tonnes of barite at WH-10' },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'برای جلوگیری از تکرار، کیسه‌های باریت باید روی پالت و زیر سقف یا پوشش ضدآب نگهداری شوند.',
                en: 'To stop it recurring, barite sacks should be stored on pallets under a roof or a waterproof cover.',
              },
            },
          ],
          answer: {
            fa: 'کسری 3 تن به مبلغ 1,050 با تأیید مدیر انبار؛ بدهکار مغایرت موجودی انبار و بستانکار موجودی مواد شیمیایی، هر کدام 1,050.',
            en: 'A 3-tonne shortage worth 1,050, approved by the warehouse manager: Dr Inventory differences 1,050, Cr Inventory: chemicals 1,050.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'طبقه‌بندی ABC شش قلم انبار مرکزی', en: 'ABC classification of six Central Warehouse items' },
          difficulty: 'medium',
          problem: {
            fa: 'جدول زیر مصرف سالانه و قیمت میانگین متحرک شش قلم انبار مرکزی را نشان می‌دهد. با قاعده این درس (A تا 80% ارزش تجمعی، B تا 95% و بقیه C) اقلام را طبقه‌بندی کنید. سپس بگویید کدام قلم با وجود کلاسش باید مثل اقلام A کنترل شود.',
            en: 'The table shows annual usage and moving average price for six Central Warehouse items. Using this lesson’s rule (A up to 80% of cumulative value, B up to 95%, the rest C), classify them. Then say which item must be controlled like an A item despite its class.',
          },
          given: {
            head: [
              { fa: 'کالا', en: 'Material' },
              { fa: 'مصرف سالانه', en: 'Annual usage' },
              { fa: 'قیمت میانگین', en: 'MAP' },
            ],
            rows: [
              [{ fa: 'کیت سوپاپ کمپرسور K-201 (دست)', en: 'K-201 compressor valve kit (set)' }, 4, 4500],
              [{ fa: 'سیمان حفاری کلاس G (تن)', en: 'Class G well cement (tonne)' }, 400, 300],
              [{ fa: 'کیت اورینگ (کیت)', en: 'O-ring kit (kit)' }, 200, 40],
              [{ fa: 'مته حفاری 12-1/4 اینچ (عدد)', en: '12-1/4" drill bit (each)' }, 10, 18000],
              [{ fa: 'فیلتر جداکننده (عدد)', en: 'Separator filter element (each)' }, 600, 40],
              [{ fa: 'بنتونیت (تن)', en: 'Bentonite (tonne)' }, 200, 250],
            ],
            numericCols: [1, 2],
          },
          hint: {
            fa: 'اول ارزش سالانه هر قلم را حساب کنید، از بزرگ به کوچک مرتب کنید و سهم تجمعی را بسازید.',
            en: 'Compute each item’s annual value first, sort from largest to smallest and build the cumulative share.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'ارزش سالانه، سهم و کلاس', en: 'Annual value, share and class' },
              head: [
                { fa: 'کالا', en: 'Material' },
                { fa: 'ارزش سالانه', en: 'Annual value' },
                { fa: 'سهم', en: 'Share' },
                { fa: 'سهم تجمعی', en: 'Cumulative' },
                { fa: 'کلاس', en: 'Class' },
              ],
              rows: [
                [{ fa: 'مته حفاری 12-1/4 اینچ', en: '12-1/4" drill bit' }, 180000, { fa: '45.0%', en: '45.0%' }, { fa: '45.0%', en: '45.0%' }, { fa: 'A', en: 'A' }],
                [{ fa: 'سیمان کلاس G', en: 'Class G cement' }, 120000, { fa: '30.0%', en: '30.0%' }, { fa: '75.0%', en: '75.0%' }, { fa: 'A', en: 'A' }],
                [{ fa: 'بنتونیت', en: 'Bentonite' }, 50000, { fa: '12.5%', en: '12.5%' }, { fa: '87.5%', en: '87.5%' }, { fa: 'B', en: 'B' }],
                [{ fa: 'فیلتر جداکننده', en: 'Separator filter element' }, 24000, { fa: '6.0%', en: '6.0%' }, { fa: '93.5%', en: '93.5%' }, { fa: 'B', en: 'B' }],
                [{ fa: 'کیت سوپاپ K-201', en: 'K-201 valve kit' }, 18000, { fa: '4.5%', en: '4.5%' }, { fa: '98.0%', en: '98.0%' }, { fa: 'C', en: 'C' }],
                [{ fa: 'کیت اورینگ', en: 'O-ring kit' }, 8000, { fa: '2.0%', en: '2.0%' }, { fa: '100%', en: '100%' }, { fa: 'C', en: 'C' }],
                [{ fa: 'جمع', en: 'Total' }, 400000, { fa: '100%', en: '100%' }, blank, blank],
              ],
              numericCols: [1, 2, 3],
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'ارزش کل', en: 'Total value' },
                  text: {
                    fa: '180,000 + 120,000 + 50,000 + 24,000 + 18,000 + 8,000 = **400,000**.',
                    en: '180,000 + 120,000 + 50,000 + 24,000 + 18,000 + 8,000 = **400,000**.',
                  },
                },
                {
                  title: { fa: 'گروه A', en: 'Class A' },
                  text: {
                    fa: 'مته و سیمان با هم 75% ارزش را می‌سازند (کمتر از 80%)، پس کلاس A هستند: 2 قلم از 6 قلم.',
                    en: 'Drill bits and cement together make 75% of value (under 80%), so they are class A: 2 items out of 6.',
                  },
                },
                {
                  title: { fa: 'گروه B و C', en: 'Classes B and C' },
                  text: {
                    fa: 'بنتونیت (87.5%) و فیلتر (93.5%) تا مرز 95% هستند و B می‌شوند؛ کیت سوپاپ (98%) و کیت اورینگ C هستند.',
                    en: 'Bentonite (87.5%) and filters (93.5%) fall within 95% and are B; the valve kit (98%) and the O-ring kit are C.',
                  },
                },
                {
                  title: { fa: 'استثنای حیاتی', en: 'The critical exception' },
                  text: {
                    fa: 'کیت سوپاپ K-201 کلاس C است اما **قطعه یدکی حیاتی** با زمان تأمین حدود 24 هفته است؛ باید ماهانه شمرده شود، در قفس قفل‌دار بماند و موجودی اطمینان داشته باشد.',
                    en: 'The K-201 valve kit is class C but is a **critical spare** with about 24 weeks’ lead time; it must be counted monthly, kept in the locked cage and covered by safety stock.',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: 'A: مته و سیمان (75% ارزش)؛ B: بنتونیت و فیلتر؛ C: کیت سوپاپ و کیت اورینگ؛ کیت سوپاپ K-201 چون حیاتی است مثل A کنترل می‌شود.',
            en: 'A: drill bits and cement (75% of value); B: bentonite and filters; C: valve kit and O-ring kit; the K-201 valve kit is controlled like an A item because it is critical.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'کسری 10 شاخه‌ای که واقعی نبود', en: 'A 10-joint shortage that was not real' },
          difficulty: 'medium',
          problem: {
            fa: 'سند شمارش PI-26-052 برای لوله جداری 9-5/8 اینچ (کالای 100100) در محوطه لوله انبار میدان، صبح روز آخر ماه صادر شد و مقدار دفتری **180 شاخه** را ثبت کرد. شمارنده روی برگه نوشت «2,040» و کنارش «متر». طبق فهرست طول شاخه‌ها، متوسط طول هر شاخه **12 متر** است. بررسی بیشتر نشان داد عصر روز قبل **10 شاخه** برای دکل حفاری چاه AR-12 (مجوز هزینه AFE-2026-012) بار زده و ارسال شده، اما حواله GI-26-0815 آن هنوز ثبت نشده است. قیمت میانگین متحرک 2,400 است. (الف) اگر 2,040 مستقیم به‌عنوان تعداد شاخه وارد شود چه می‌شود؟ (ب) مغایرت واقعی چقدر است؟ (ج) چه سندی باید ثبت شود و سند مالی آن چیست؟',
            en: 'Count document PI-26-052 for 9-5/8" casing (material 100100) in the Field Warehouse pipe yard was created on the morning of the last day of the month, recording a book quantity of **180 joints**. The counter wrote "2,040" on the sheet, with "metres" beside it. According to the joint-length list, the average joint is **12 metres**. Further checks showed that the previous evening **10 joints** were loaded and shipped to the rig drilling well AR-12 (AFE-2026-012), but goods issue GI-26-0815 had not yet been posted. The moving average price is 2,400. (a) What happens if 2,040 is entered directly as joints? (b) What is the real difference? (c) What document should be posted, and what is its Finance entry?',
          },
          hint: {
            fa: 'اول عدد را به واحد کاردکس (شاخه) تبدیل کنید، بعد ببینید آیا سندی جا افتاده است.',
            en: 'First convert the figure to the ledger unit (joints), then look for a missing document.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: '(الف) خطای واحد', en: '(a) The unit error' },
                  text: {
                    fa: 'اگر 2,040 به‌عنوان شاخه وارد شود، ERP اضافی 1,860 شاخه (2,040 − 180) به مبلغ 1,860 × 2,400 = **4,464,000** نشان می‌دهد؛ عددی نامعقول که فقط از خطای واحد سنجش می‌آید.',
                    en: 'Entered as joints, 2,040 makes the ERP show a surplus of 1,860 joints (2,040 − 180) worth 1,860 × 2,400 = **4,464,000**, an absurd figure caused purely by the unit error.',
                  },
                },
                {
                  title: { fa: '(ب) تبدیل واحد', en: '(b) Convert the unit' },
                  text: {
                    fa: '2,040 ÷ 12 = **170 شاخه**. پس شمارش واقعی 170 و دفتری 180 است: ظاهراً 10 شاخه کسری.',
                    en: '2,040 ÷ 12 = **170 joints**. So the real count is 170 against a book quantity of 180: an apparent 10-joint shortage.',
                  },
                },
                {
                  title: { fa: '(ب) برش زمانی', en: '(b) Cut-off' },
                  text: {
                    fa: 'همان 10 شاخه با کامیون به دکل AR-12 رفته‌اند و فقط حواله‌شان ثبت نشده است. پس **مغایرت واقعی صفر است** و نباید 10 × 2,400 = 24,000 به‌عنوان کسری ثبت شود.',
                    en: 'Those 10 joints went by truck to the AR-12 rig; only their goods issue is missing. So the **real difference is zero**, and 10 × 2,400 = 24,000 must not be posted as a shortage.',
                  },
                },
                {
                  title: { fa: '(ج) سند درست', en: '(c) The right document' },
                  text: {
                    fa: 'حواله GI-26-0815 با تاریخ همان ماه (روزی که کالا خارج شد) و با ارجاع به AFE-2026-012 و پروژه P-AR12 ثبت می‌شود. سپس مقدار دفتری سند شمارش به‌روز می‌شود (یا سند شمارش این قلم دوباره صادر می‌شود)، شمارش 170 با دفتری 170 برابر است و سند شمارش بدون مغایرت بسته می‌شود.',
                    en: 'Post GI-26-0815 dated in the same month (the day the goods left), referencing AFE-2026-012 and WBS P-AR12. The count document’s book quantity is then refreshed (or the item is re-counted on a new document), the count of 170 matches the book quantity of 170, and the document closes with no difference.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              title: { fa: 'سند مالی خودکار حواله GI-26-0815', en: 'Automatic Finance entry for GI-26-0815' },
              entries: [
                {
                  lines: [
                    { account: { fa: 'دارایی در جریان ساخت: چاه‌ها (AFE-2026-012)', en: 'Assets under construction: wells (AFE-2026-012)' }, debit: 24000 },
                    { account: { fa: 'موجودی لوله‌های جداری و مغزی (OCTG)', en: 'Inventory: OCTG (casing and tubing)' }, credit: 24000 },
                  ],
                  memo: { fa: '10 شاخه لوله جداری به چاه AR-12', en: '10 joints of casing to well AR-12' },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              text: {
                fa: 'با این حواله، بهای 24,000 به چاه AR-12 می‌رسد و معمولاً با مستندات حواله، به‌عنوان مخارج سرمایه‌ای توسعه در بازیافت هزینه قابل ادعاست. اگر به‌اشتباه کسری ثبت می‌شد، هم بهای چاه کمتر از واقع می‌شد و هم زیانی غیرقابل دفاع در حساب مغایرت انبار می‌ماند.',
                en: 'With this issue the 24,000 reaches well AR-12 and, backed by the goods issue, can usually be claimed as development capital cost under cost recovery. Had it been posted as a shortage, the well would be under-costed and an indefensible loss would sit in inventory differences.',
              },
            },
          ],
          answer: {
            fa: 'ورود 2,040 به‌عنوان شاخه اضافی کاذب 4,464,000 می‌سازد؛ شمارش واقعی 170 شاخه و مغایرت واقعی صفر است؛ حواله GI-26-0815 ثبت می‌شود: بدهکار دارایی در جریان ساخت (AFE-2026-012) و بستانکار موجودی OCTG، هر کدام 24,000.',
            en: 'Entering 2,040 as joints creates a false surplus of 4,464,000; the real count is 170 joints and the real difference is zero; post GI-26-0815: Dr Assets under construction (AFE-2026-012) 24,000, Cr Inventory: OCTG 24,000.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'ذخیره کاهش ارزش بر اساس سن موجودی', en: 'A write-down allowance based on stock age' },
          difficulty: 'hard',
          problem: {
            fa: 'گزارش سن موجودی انبار میدان در پایان سال (به بهای تمام‌شده) در جدول زیر آمده است. سیاست مسار پترولیوم (درصدها فرضی‌اند): اقلامی که 12 تا 24 ماه گردش نداشته‌اند 25%، 24 تا 36 ماه 50% و بیش از 36 ماه 100% ذخیره کاهش ارزش می‌گیرند، اما **قطعات بیمه‌ای** که تجهیزشان هنوز در کار است مستثنا هستند. در گروه 24 تا 36 ماه، یک روتور یدکی کمپرسور K-201 به بهای 30,000 هست. مانده فعلی حساب ذخیره کاهش ارزش موجودی **55,000** است. (الف) ذخیره لازم پایان سال را حساب کنید. (ب) سند تعدیل را بنویسید. (ج) خالص موجودی در ترازنامه چقدر است؟ (د) این مبلغ از نظر بازیافت هزینه چه وضعی دارد؟',
            en: 'The table shows the Field Warehouse stock-aging report at year-end (at cost). Masar Petroleum’s policy (illustrative percentages): items with no movement for 12 to 24 months carry a 25% write-down allowance, 24 to 36 months 50%, and over 36 months 100%, except **insurance spares** whose equipment is still running. The 24-to-36-month group includes a spare rotor for compressor K-201 costing 30,000. The Allowance for inventory write-down currently has a balance of **55,000**. (a) Compute the required year-end allowance. (b) Write the adjusting entry. (c) What is net inventory on the balance sheet? (d) How does this amount stand for cost recovery?',
          },
          given: {
            head: [
              { fa: 'بدون گردش', en: 'No movement for' },
              { fa: 'بهای تمام‌شده', en: 'Cost' },
              { fa: 'درصد سیاست', en: 'Policy rate' },
            ],
            rows: [
              [{ fa: 'کمتر از 12 ماه', en: 'Under 12 months' }, 1200000, { fa: '0%', en: '0%' }],
              [{ fa: '12 تا 24 ماه', en: '12 to 24 months' }, 160000, { fa: '25%', en: '25%' }],
              [{ fa: '24 تا 36 ماه', en: '24 to 36 months' }, 72000, { fa: '50%', en: '50%' }],
              [{ fa: 'بیش از 36 ماه', en: 'Over 36 months' }, 18000, { fa: '100%', en: '100%' }],
              [{ fa: 'جمع', en: 'Total' }, 1450000, blank],
            ],
            numericCols: [1],
          },
          hint: {
            fa: 'قطعه بیمه‌ای را پیش از اعمال درصد از گروه خودش کم کنید؛ سپس ذخیره لازم را با مانده فعلی مقایسه کنید.',
            en: 'Remove the insurance spare from its group before applying the rate, then compare the required allowance with the current balance.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'محاسبه ذخیره لازم', en: 'Required allowance' },
              head: [
                { fa: 'گروه', en: 'Group' },
                { fa: 'مبنا', en: 'Base' },
                { fa: 'درصد', en: 'Rate' },
                { fa: 'ذخیره لازم', en: 'Required allowance' },
              ],
              rows: [
                [{ fa: 'کمتر از 12 ماه', en: 'Under 12 months' }, 1200000, { fa: '0%', en: '0%' }, 0],
                [{ fa: '12 تا 24 ماه', en: '12 to 24 months' }, 160000, { fa: '25%', en: '25%' }, 40000],
                [{ fa: '24 تا 36 ماه (بدون روتور بیمه‌ای)', en: '24 to 36 months (excluding the insurance rotor)' }, 42000, { fa: '50%', en: '50%' }, 21000],
                [{ fa: 'بیش از 36 ماه', en: 'Over 36 months' }, 18000, { fa: '100%', en: '100%' }, 18000],
                [{ fa: 'جمع ذخیره لازم', en: 'Total required allowance' }, blank, blank, 79000],
              ],
              numericCols: [1, 3],
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: '(الف) ذخیره لازم', en: '(a) Required allowance' },
                  text: {
                    fa: '160,000 × 25% = 40,000؛ (72,000 − 30,000) × 50% = 21,000؛ 18,000 × 100% = 18,000. جمع: **79,000**.',
                    en: '160,000 × 25% = 40,000; (72,000 − 30,000) × 50% = 21,000; 18,000 × 100% = 18,000. Total: **79,000**.',
                  },
                },
                {
                  title: { fa: '(ب) تعدیل', en: '(b) Adjustment' },
                  text: {
                    fa: 'مانده فعلی 55,000 است، پس باید **24,000** (79,000 − 55,000) به ذخیره اضافه شود.',
                    en: 'The balance is 55,000, so **24,000** (79,000 − 55,000) must be added to the allowance.',
                  },
                },
                {
                  title: { fa: '(ج) خالص موجودی', en: '(c) Net inventory' },
                  text: {
                    fa: '1,450,000 − 79,000 = **1,371,000**. کاردکس همچنان بهای 1,450,000 را نشان می‌دهد؛ ذخیره در یک حساب کاهنده جداگانه نگهداری می‌شود.',
                    en: '1,450,000 − 79,000 = **1,371,000**. The stock ledger still shows the cost of 1,450,000; the allowance sits in a separate contra account.',
                  },
                },
                {
                  title: { fa: '(د) بازیافت هزینه', en: '(d) Cost recovery' },
                  text: {
                    fa: 'ذخیره 24,000 یک برآورد حسابداری است و به هیچ چاه یا مرکز هزینه‌ای نرسیده، پس در بسیاری از قراردادها قابل بازیافت نیست. اقلام فقط وقتی به عملیات حواله شوند (یا با تأیید شرکا فروخته یا اسقاط شوند)، طبق قرارداد وارد حساب بازیافت هزینه می‌شوند.',
                    en: 'The 24,000 is an accounting estimate that has not reached any well or cost centre, so under many contracts it is not recoverable. Items enter the cost-recovery account, under the contract’s rules, only when they are issued to operations (or sold or scrapped with partner approval).',
                  },
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'پایان سال', en: 'Year-end' },
                  lines: [
                    { account: { fa: 'هزینه کاهش ارزش موجودی', en: 'Inventory write-down expense' }, debit: 24000 },
                    { account: { fa: 'ذخیره کاهش ارزش موجودی', en: 'Allowance for inventory write-down' }, credit: 24000 },
                  ],
                  memo: { fa: 'افزایش ذخیره از 55,000 به 79,000', en: 'Allowance raised from 55,000 to 79,000' },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'درصدهای سنی یک روش عملی برای برآورد خالص ارزش فروش است. اقلام بزرگ و خاص را جداگانه بررسی کنید و سیاست را هر سال با واحد فنی و حسابرس مرور کنید.',
                en: 'Age-based rates are a practical way to estimate net realisable value. Review large or unusual items individually, and revisit the policy each year with engineering and the auditor.',
              },
            },
          ],
          answer: {
            fa: 'ذخیره لازم 79,000؛ سند تعدیل 24,000 (بدهکار هزینه کاهش ارزش موجودی، بستانکار ذخیره کاهش ارزش موجودی)؛ خالص موجودی 1,371,000؛ این ذخیره معمولاً قابل بازیافت نیست.',
            en: 'Required allowance 79,000; adjusting entry 24,000 (Dr Inventory write-down expense, Cr Allowance for inventory write-down); net inventory 1,371,000; the allowance is usually not recoverable.',
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
              fa: 'موجودی سیستم فقط وقتی قابل اعتماد است که با شمارش منظم تأیید شود؛ شمارش چرخه‌ای خطاها را زودتر از انبارگردانی سالانه کشف می‌کند.',
              en: 'System stock can be trusted only when regular counts confirm it; cycle counting finds errors sooner than an annual physical inventory.',
            },
            {
              fa: 'هر شمارش با سند شمارش، برش زمانی، شمارش کور و شمارش مجدد مغایرت‌های بالای حد مجاز انجام می‌شود.',
              en: 'Every count runs on a count document, with cut-off, a blind count and a recount of differences above tolerance.',
            },
            {
              fa: 'مغایرت نشانه است، نه علت: پیش از ثبت، سند جاافتاده، واحد سنجش، محل و کد کالا را بررسی کنید.',
              en: 'A difference is a symptom, not a cause: before posting, check for missing documents, unit of measure, bin and material code.',
            },
            {
              fa: 'با ثبت مغایرت تأییدشده، ERP خودکار سند می‌زند: برای کسری، بدهکار مغایرت موجودی انبار و بستانکار حساب موجودی؛ برای اضافی، برعکس.',
              en: 'When an approved difference is posted, the ERP creates the entry automatically: for a shortage, Dr Inventory differences and Cr the inventory account; for a surplus, the reverse.',
            },
            {
              fa: 'ABC اقلام را بر اساس ارزش مصرف و XYZ بر اساس پیش‌بینی‌پذیری مصرف گروه‌بندی می‌کند؛ حیاتی بودن محور سوم و جداگانه است.',
              en: 'ABC groups items by consumption value and XYZ by predictability of usage; criticality is a third, separate axis.',
            },
            {
              fa: 'اقلام منسوخ به اقل بهای تمام‌شده و خالص ارزش فروش کاهش ارزش می‌یابند؛ قطعات بیمه‌ای کم‌گردش‌اند اما منسوخ نیستند.',
              en: 'Obsolete items are written down to the lower of cost and NRV; insurance spares are slow-moving but not obsolete.',
            },
            {
              fa: 'تفکیک وظایف، نقش‌های دسترسی ERP و کنترل‌های فیزیکی از کالا و از ادعای بازیافت هزینه محافظت می‌کنند.',
              en: 'Segregation of duties, ERP access roles and physical controls protect both the goods and the cost-recovery claim.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'انبارگردانی', en: 'Physical inventory' },
              def: { fa: 'شمارش همه اقلام انبار در یک بازه کوتاه، معمولاً پایان سال، با توقف ورود و خروج کالا.', en: 'Counting every item in a short window, usually at year-end, with goods movements stopped.' },
            },
            {
              term: { fa: 'شمارش چرخه‌ای', en: 'Cycle counting' },
              def: { fa: 'شمارش پیوسته بخش کوچکی از اقلام در طول سال، با تکرار بیشتر برای اقلام مهم‌تر.', en: 'Continuous counting of a small slice of items through the year, more often for important items.' },
            },
            {
              term: { fa: 'سند شمارش', en: 'Count document' },
              def: { fa: 'سند ERP که اقلام و محل‌های شمارش، مقدار دفتری، نتیجه شمارش و تأییدها را نگه می‌دارد.', en: 'The ERP document holding the items and bins to count, book quantities, results and approvals.' },
            },
            {
              term: { fa: 'شمارش کور', en: 'Blind count' },
              def: { fa: 'شمارشی که در آن مقدار دفتری به شمارنده نشان داده نمی‌شود.', en: 'A count in which the counter is not shown the book quantity.' },
            },
            {
              term: { fa: 'مغایرت شمارش', en: 'Count difference' },
              def: { fa: 'مقدار شمارش‌شده منهای مقدار دفتری؛ کسری یا اضافی.', en: 'Counted quantity minus book quantity: a shortage or a surplus.' },
            },
            {
              term: { fa: 'برش زمانی', en: 'Cut-off' },
              def: { fa: 'مرز زمانی که همه رسیدها و حواله‌های پیش از آن ثبت شده‌اند و پس از آن تا پایان شمارش حرکتی نیست.', en: 'The point in time before which all receipts and issues are posted, and after which nothing moves until the count ends.' },
            },
            {
              term: { fa: 'تحلیل ABC', en: 'ABC analysis' },
              def: { fa: 'گروه‌بندی اقلام بر اساس ارزش مصرف سالانه.', en: 'Grouping items by annual consumption value.' },
            },
            {
              term: { fa: 'تحلیل XYZ', en: 'XYZ analysis' },
              def: { fa: 'گروه‌بندی اقلام بر اساس نوسان مصرف، با ضریب تغییرات.', en: 'Grouping items by usage variability, using the coefficient of variation.' },
            },
            {
              term: { fa: 'کم‌گردش و منسوخ', en: 'Slow-moving and obsolete' },
              def: { fa: 'کم‌گردش: مدت طولانی بدون حواله؛ منسوخ: بدون مصرف قابل پیش‌بینی.', en: 'Slow-moving: no issues for a long time; obsolete: no foreseeable use.' },
            },
            {
              term: { fa: 'خالص ارزش فروش', en: 'Net realisable value' },
              def: { fa: 'قیمت فروش برآوردی منهای مخارج لازم برای فروش.', en: 'Estimated selling price minus the costs needed to make the sale.' },
            },
            {
              term: { fa: 'ذخیره کاهش ارزش موجودی', en: 'Allowance for inventory write-down' },
              def: { fa: 'حساب کاهنده‌ای که موجودی را تا خالص ارزش فروش پایین می‌آورد، بی‌آنکه بهای کاردکس تغییر کند.', en: 'A contra account that brings inventory down to NRV without changing the cost in the stock ledger.' },
            },
            {
              term: { fa: 'تفکیک وظایف', en: 'Segregation of duties' },
              def: { fa: 'تقسیم وظایف ناسازگار (نگهداری، ثبت، تأیید) میان افراد مختلف.', en: 'Splitting incompatible duties (custody, recording, approval) between different people.' },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: {
        fa: 'مهم‌ترین مزیت شمارش چرخه‌ای نسبت به انبارگردانی سالانه چیست؟',
        en: 'What is the main advantage of cycle counting over an annual physical inventory?',
      },
      options: [
        { fa: 'دیگر به سیستم دائمی موجودی نیازی نیست', en: 'A perpetual inventory system is no longer needed' },
        { fa: 'همه اقلام فقط یک بار در سال شمرده می‌شوند', en: 'Every item is counted only once a year' },
        { fa: 'خطاها زودتر کشف می‌شوند و عملیات انبار متوقف نمی‌شود', en: 'Errors are found sooner and warehouse operations do not stop' },
        { fa: 'مغایرت‌ها بدون تأیید ثبت می‌شوند', en: 'Differences are posted without approval' },
      ],
      answer: 2,
      explain: {
        fa: 'در شمارش چرخه‌ای هر روز چند قلم شمرده می‌شود، پس خطا زود دیده و علتش رفع می‌شود و فقط محل‌های در حال شمارش قفل می‌شوند. «یک بار در سال» ویژگی انبارگردانی است؛ شمارش چرخه‌ای نه جای سیستم دائمی را می‌گیرد و نه تأیید مغایرت را حذف می‌کند.',
        en: 'Cycle counting checks a few items every day, so errors are seen and fixed early and only the bins being counted are blocked. "Once a year" describes a physical inventory, and cycle counting neither replaces the perpetual system nor removes the approval of differences.',
      },
    },
    {
      q: {
        fa: 'چرا در شمارش کور مقدار دفتری روی برگه شمارش چاپ نمی‌شود؟',
        en: 'Why is the book quantity left off a blind count sheet?',
      },
      options: [
        { fa: 'تا شمارنده فقط آنچه را می‌بیند بنویسد و عدد سیستم را تکرار نکند', en: 'So the counter writes only what they see instead of copying the system figure' },
        { fa: 'چون مقدار دفتری محرمانه است و فقط امور مالی باید آن را ببیند', en: 'Because the book quantity is confidential and only Finance may see it' },
        { fa: 'تا شمارش سریع‌تر تمام شود', en: 'So the count finishes faster' },
        { fa: 'چون ERP مقدار دفتری را تا پایان سال حساب نمی‌کند', en: 'Because the ERP does not compute the book quantity until year-end' },
      ],
      answer: 0,
      explain: {
        fa: 'اگر شمارنده عدد سیستم را ببیند، وسوسه می‌شود همان را بنویسد و مغایرت پنهان بماند. محرمانه بودن دلیل اصلی نیست (انباردار هم کاردکس را می‌بیند) و ERP مقدار دفتری را همیشه به‌روز دارد.',
        en: 'A counter who sees the system figure is tempted to write it down, and the difference stays hidden. Confidentiality is not the reason (the storekeeper sees the ledger anyway), and the ERP always has an up-to-date book quantity.',
      },
    },
    {
      q: {
        fa: 'مقدار دفتری بازدارنده خوردگی 50 بشکه و شمارش تأییدشده 47 بشکه است. قیمت میانگین متحرک 650 است. ERP چه سندی ثبت می‌کند؟',
        en: 'The book quantity of corrosion inhibitor is 50 drums and the confirmed count is 47. The moving average price is 650. What does the ERP post?',
      },
      options: [
        { fa: 'بدهکار موجودی مواد شیمیایی 1,950، بستانکار مغایرت موجودی انبار 1,950', en: 'Dr Inventory: chemicals 1,950, Cr Inventory differences 1,950' },
        { fa: 'بدهکار مغایرت موجودی انبار 1,950، بستانکار موجودی مواد شیمیایی 1,950', en: 'Dr Inventory differences 1,950, Cr Inventory: chemicals 1,950' },
        { fa: 'بدهکار مغایرت موجودی انبار 30,550، بستانکار موجودی مواد شیمیایی 30,550', en: 'Dr Inventory differences 30,550, Cr Inventory: chemicals 30,550' },
        { fa: 'بدهکار هزینه مواد شیمیایی تولید 1,950، بستانکار موجودی نقد 1,950', en: 'Dr Production chemicals expense 1,950, Cr Cash 1,950' },
      ],
      answer: 1,
      explain: {
        fa: 'کسری 3 بشکه × 650 = 1,950 است. کسری، موجودی را کم می‌کند (بستانکار موجودی) و هزینه مغایرت را بدهکار می‌کند. گزینه اول جهت را برعکس کرده و مخصوص اضافی است؛ 30,550 ارزش کل 47 بشکه است نه مغایرت؛ و کسری انبار هیچ پرداخت نقدی ندارد.',
        en: 'The shortage is 3 drums × 650 = 1,950. A shortage reduces inventory (credit inventory) and debits the inventory-difference expense. The first option is reversed and fits a surplus; 30,550 is the value of all 47 drums, not the difference; and a shortage involves no cash payment.',
      },
    },
    {
      q: {
        fa: 'ارزش مصرف سالانه کل انبار 2,000,000 است. لوله جداری با 900,000 و لوله مغزی با 700,000 دو قلم بزرگ اول‌اند. با قاعده «A تا 80% ارزش تجمعی»، سهم این دو قلم و کلاسشان چیست؟',
        en: 'Total annual consumption value is 2,000,000. Casing at 900,000 and tubing at 700,000 are the two largest items. Under the rule "A up to 80% of cumulative value", what is their share and class?',
      },
      options: [
        { fa: '45%؛ فقط لوله جداری A است', en: '45%; only casing is A' },
        { fa: '35%؛ هر دو B هستند', en: '35%; both are B' },
        { fa: '20%؛ هر دو C هستند', en: '20%; both are C' },
        { fa: '80%؛ هر دو A هستند', en: '80%; both are A' },
      ],
      answer: 3,
      explain: {
        fa: '(900,000 + 700,000) ÷ 2,000,000 = 80%. سهم تجمعی پس از قلم دوم دقیقاً به مرز 80% می‌رسد، پس هر دو کلاس A هستند. 45% سهم لوله جداری به‌تنهایی و 35% سهم لوله مغزی به‌تنهایی است؛ کلاس بر اساس سهم تجمعی تعیین می‌شود. 20% سهم بقیه اقلام است.',
        en: '(900,000 + 700,000) ÷ 2,000,000 = 80%. The cumulative share after the second item reaches exactly the 80% limit, so both are class A. 45% is casing alone and 35% is tubing alone; class is set by the cumulative share. 20% is the share of all the other items.',
      },
    },
    {
      q: {
        fa: 'میانگین مصرف ماهانه یک قلم 20 و انحراف معیار آن 18 است. با مرزهای این درس (X تا 0.25، Y تا 0.75 و بیشتر از آن Z)، کلاس XYZ آن چیست؟',
        en: 'An item’s mean monthly usage is 20 with a standard deviation of 18. Using this lesson’s limits (X up to 0.25, Y up to 0.75, above that Z), what is its XYZ class?',
      },
      options: [
        { fa: 'X، چون میانگین از انحراف معیار بزرگ‌تر است', en: 'X, because the mean is larger than the standard deviation' },
        { fa: 'Y، چون ضریب تغییرات 0.36 است', en: 'Y, because the coefficient of variation is 0.36' },
        { fa: 'Z، چون ضریب تغییرات 0.9 است', en: 'Z, because the coefficient of variation is 0.9' },
        { fa: 'A، چون مصرفش زیاد است', en: 'A, because its usage is high' },
      ],
      answer: 2,
      explain: {
        fa: 'ضریب تغییرات = 18 ÷ 20 = 0.9 که از 0.75 بیشتر است، پس قلم در گروه Z (پراکنده) است. بزرگ‌تر بودن میانگین کافی نیست؛ نسبت این دو مهم است. A، B و C کلاس‌های تحلیل ABC هستند، نه XYZ.',
        en: 'CV = 18 ÷ 20 = 0.9, which is above 0.75, so the item is Z (sporadic). A mean larger than the standard deviation is not enough; the ratio is what matters. A, B and C are ABC classes, not XYZ.',
      },
    },
    {
      q: {
        fa: 'کیت سوپاپ K-201 در تحلیل ABC کلاس C شده است. کدام برخورد درست است؟',
        en: 'The K-201 valve kit comes out as class C in the ABC analysis. Which treatment is right?',
      },
      options: [
        { fa: 'سالی یک بار شمرده شود، چون ارزش مصرفش کم است', en: 'Count it once a year, since its consumption value is low' },
        { fa: 'چون قطعه حیاتی است، مثل اقلام A ماهانه شمرده و در قفس قفل‌دار نگهداری شود', en: 'Because it is a critical spare, count it monthly like an A item and keep it in the locked cage' },
        { fa: 'موجودی آن صفر شود تا هزینه نگهداری کم شود', en: 'Run its stock down to zero to save holding cost' },
        { fa: 'به دلیل گردش کم، کاهش ارزش داده شود', en: 'Write it down because it moves slowly' },
      ],
      answer: 1,
      explain: {
        fa: 'حیاتی بودن محوری جدا از ارزش مصرف است. توقف K-201 تولید گاز را کم می‌کند و زمان تأمین کیت حدود 24 هفته است، پس باید با دقت اقلام A کنترل شود. کاهش ارزش فقط برای اقلام منسوخ است و صفر کردن موجودی قطعه حیاتی، تولید را به خطر می‌اندازد.',
        en: 'Criticality is an axis separate from consumption value. A K-201 stop cuts gas production and the kit takes about 24 weeks to arrive, so it needs A-level control. Write-downs are for obsolete items, and running a critical spare down to zero puts production at risk.',
      },
    },
    {
      q: {
        fa: 'بهای 5 عدد آب‌بند مکانیکی منسوخ 6,000 است. خریداری 1,800 پیشنهاد داده و مخارج حمل 300 است. کاهش ارزش چقدر است؟',
        en: 'Five obsolete mechanical seals cost 6,000. A buyer offers 1,800 and transport costs 300. What is the write-down?',
      },
      options: [
        { fa: '4,500', en: '4,500' },
        { fa: '4,200', en: '4,200' },
        { fa: '1,500', en: '1,500' },
        { fa: '6,000', en: '6,000' },
      ],
      answer: 0,
      explain: {
        fa: 'خالص ارزش فروش = 1,800 − 300 = 1,500 و کاهش ارزش = 6,000 − 1,500 = 4,500. عدد 4,200 مخارج فروش را فراموش کرده است؛ 1,500 خود خالص ارزش فروش است نه کاهش ارزش؛ و 6,000 یعنی کالا را بی‌ارزش فرض کرده‌ایم، در حالی که خریدار دارد.',
        en: 'NRV = 1,800 − 300 = 1,500, so the write-down is 6,000 − 1,500 = 4,500. 4,200 forgets the costs to sell; 1,500 is the NRV itself, not the write-down; and 6,000 treats the seals as worthless when there is a buyer.',
      },
    },
    {
      q: {
        fa: 'کدام ترکیب وظایف، تفکیک وظایف را نقض می‌کند؟',
        en: 'Which combination of duties breaks segregation of duties?',
      },
      options: [
        { fa: 'کنترل موجودی سند شمارش صادر می‌کند و مدیر انبار مغایرت را تأیید می‌کند', en: 'The inventory controller creates the count document and the warehouse manager approves differences' },
        { fa: 'شمارنده‌ای از واحد دیگر، قفس قطعات یدکی را می‌شمارد', en: 'A counter from another unit counts the spares cage' },
        { fa: 'امور مالی سند خودکار مغایرت را با حساب کل تطبیق می‌دهد', en: 'Finance reconciles the automatic difference entry to the general ledger' },
        { fa: 'انبارداری که کلید قفس را دارد، مغایرت‌های همان قفس را تأیید و ثبت می‌کند', en: 'The storekeeper who holds the cage key approves and posts differences for that cage' },
      ],
      answer: 3,
      explain: {
        fa: 'کسی که کالا را در اختیار دارد نباید مغایرت همان کالا را تأیید کند؛ وگرنه می‌تواند کالا را بردارد و کسری را خودش پاک کند. سه گزینه دیگر نمونه‌های درست تفکیک وظایف‌اند: صدور و تأیید در دست دو نفر، شمارنده مستقل و بازبینی امور مالی.',
        en: 'Whoever holds the goods must not approve differences on them, or they could take goods and clear the shortage themselves. The other three are sound segregation: creating and approving split between two people, an independent counter, and a Finance review.',
      },
    },
    {
      q: {
        fa: 'در شمارش، 12 بشکه کمتر از سیستم شمرده شده و معلوم می‌شود این 12 بشکه دیروز با کامیون به ایستگاه تقویت فشار رفته‌اند اما حواله‌شان ثبت نشده است. کار درست چیست؟',
        en: 'A count finds 12 drums fewer than the system, and it turns out they were trucked to the compressor station yesterday without a goods issue being posted. What is the right action?',
      },
      options: [
        { fa: '12 بشکه را به‌عنوان کسری انبار ثبت کنیم', en: 'Post the 12 drums as an inventory shortage' },
        { fa: 'حواله را با تاریخ ارسال و مرکز هزینه CC-ARY-CMP ثبت کنیم؛ مغایرت واقعی صفر است', en: 'Post the goods issue dated the day of shipment to cost centre CC-ARY-CMP; the real difference is zero' },
        { fa: 'مقدار شمارش را به عدد سیستم تغییر دهیم', en: 'Change the count to match the system' },
        { fa: 'تا انبارگردانی سالانه صبر کنیم', en: 'Wait for the annual physical inventory' },
      ],
      answer: 1,
      explain: {
        fa: 'این خطای برش زمانی است، نه گم شدن کالا. با ثبت حواله، هزینه به مرکز هزینه درست می‌رسد و برای بازیافت هزینه مستند می‌شود. ثبت کسری، هزینه را در حساب مغایرت گم می‌کند و دست بردن در عدد شمارش هم کنترل را بی‌اثر می‌کند.',
        en: 'This is a cut-off error, not lost goods. Posting the issue sends the cost to the right cost centre and documents it for cost recovery. Posting a shortage would bury the cost in inventory differences, and editing the count defeats the control.',
      },
    },
    {
      q: {
        fa: 'انباری 200 قلم A (شمارش ماهانه)، 500 قلم B (فصلی) و 2,000 قلم C (سالانه) دارد. در سال چند شمارش لازم است؟',
        en: 'A warehouse has 200 A items (counted monthly), 500 B items (quarterly) and 2,000 C items (yearly). How many counts are needed a year?',
      },
      options: [
        { fa: '2,700', en: '2,700' },
        { fa: '4,400', en: '4,400' },
        { fa: '6,400', en: '6,400' },
        { fa: '10,400', en: '10,400' },
      ],
      answer: 2,
      explain: {
        fa: '200 × 12 = 2,400، 500 × 4 = 2,000 و 2,000 × 1 = 2,000؛ جمع 6,400 شمارش، یعنی با حدود 250 روز کاری روزی حدود 26 قلم. عدد 2,700 فقط تعداد اقلام است، 4,400 اقلام C را جا انداخته و 10,400 اقلام B را ماهانه فرض کرده است.',
        en: '200 × 12 = 2,400, 500 × 4 = 2,000 and 2,000 × 1 = 2,000, a total of 6,400 counts, or about 26 items a day over some 250 working days. 2,700 is just the number of items, 4,400 leaves out the C items, and 10,400 treats the B items as monthly.',
      },
    },
  ],
}
