import type { L, Lesson } from '../../types'

const t = (fa: string, en: string): L => ({ fa, en })

const ac = {
  auc: (wbs: string, ce: string) =>
    t(`1510 دارایی‌های در جریان تکمیل (WBS \`${wbs}\`، عنصر هزینه ${ce})`, `1510 Assets under construction (WBS \`${wbs}\`, cost element ${ce})`),
  grir: t('2120 حساب واسط رسید کالا و فاکتور (GR/IR)', '2120 GR/IR clearing account'),
  ap: t('2110 حساب‌های پرداختنی', '2110 Accounts payable'),
  accrued: t('2130 هزینه‌های تعهدی پرداختنی', '2130 Accrued liabilities'),
}

export const lesson: Lesson = {
  slug: 'budget-control-commitments',
  number: 5,
  level: 'intermediate',
  minutes: 30,
  icon: 'Scale',
  tone: 'liability',
  title: t('کنترل بودجه و تعهدات', 'Budget Control and Commitments'),
  summary: t(
    'بودجه وقتی واقعاً کنترل می‌شود که پیش از خرج شدن پول بررسی شود. در این درس تفاوت بودجه، تعهد و هزینه واقعی را می‌آموزید، می‌بینید درخواست و سفارش خرید چگونه تعهد می‌سازند و رسید کالا (GRN) و برگه ثبت خدمات (SES) چگونه آن را به هزینه واقعی AFE تبدیل می‌کنند، و با کنترل در دسترس بودن بودجه، انتقال و افزایش بودجه و پیش‌بینی ETC و EAC گزارش ماهانه چاه AR-07 را می‌سازید.',
    'A budget is only controlled if it is checked before the money is spent. This lesson separates budget, commitments and actuals, shows how requisitions and purchase orders create commitments and how a goods received note (GRN) or service entry sheet (SES) turns them into actual AFE cost, and uses availability control, budget transfers and supplements, and ETC/EAC forecasts to build the monthly control report for well AR-07.',
  ),
  objectives: [
    t(
      'تفاوت بودجه، تعهد و هزینه واقعی را توضیح دهید و بودجه در دسترس یک عنصر WBS را حساب کنید.',
      'Explain the difference between budget, commitments and actuals, and calculate the available budget of a WBS element.',
    ),
    t(
      'دنبال کنید درخواست خرید، سفارش خرید، GRN، SES و فاکتور هر کدام چه اثری بر تعهد، هزینه واقعی و دفتر کل دارند.',
      'Trace what a requisition, purchase order, GRN, SES and invoice each do to commitments, actuals and the general ledger.',
    ),
    t(
      'کنترل در دسترس بودن بودجه را با حدود تحمل هشدار و توقف قطعی تنظیم و تفسیر کنید.',
      'Set up and interpret availability control with warning and hard-stop tolerance limits.',
    ),
    t(
      'انتقال، افزایش و برگشت بودجه را از هم جدا کنید و مسیر تأیید هر کدام را بشناسید.',
      'Distinguish budget transfers, supplements and returns, and know the approval route for each.',
    ),
    t(
      'ETC، EAC و انحراف در تکمیل را حساب کنید و گزارش ماهانه کنترل AFE را بخوانید و بنویسید.',
      'Calculate ETC, EAC and variance at completion, and read and write a monthly AFE control report.',
    ),
  ],
  sections: [
    {
      id: 'why-control',
      title: t('چرا بودجه را پیش از خرج کنترل می‌کنیم؟', 'Why Control the Budget Before the Money Is Spent?'),
      blocks: [
        {
          type: 'p',
          text: t(
            'پایان ماه دوم پروژه چاه AR-07 در میدان آریا است. رشته حفاری در عمق 2,850 متری گیر کرده و سرپرست حفاری برای آزاد کردن آن و ادامه کار به 4 روز دکل بیشتر نیاز دارد؛ با نرخ روزانه 92,000 یعنی 368,000. او در ERP یک **درخواست خرید** ثبت می‌کند، اما سیستم آن را نمی‌پذیرد: «بودجه عنصر `AFE-2025-014.02.01` کافی نیست.» سرپرست تعجب می‌کند: «AFE این چاه 8,800,000 است و تا امروز فقط 4,000,000 خرج کرده‌ایم!» کنترل‌کننده پروژه توضیح می‌دهد که از این 8,800,000، مبلغ 4,000,000 واقعاً خرج شده، 2,136,000 دیگر با سفارش‌های خرید به تأمین‌کنندگان **قول داده شده** و روی ردیف دکل فقط 184,000 آزاد مانده است. این درس درباره همین گفت‌وگوست.',
            'It is the end of month 2 on the AR-07 well project in the Arya field. The drill string is stuck at 2,850 metres, and to free it and carry on the drilling superintendent needs 4 more rig days: at a day rate of 92,000, that is 368,000. He raises a **purchase requisition** in the ERP, and the system rejects it: “Budget exceeded on WBS element `AFE-2025-014.02.01`.” He is surprised: “This well’s AFE is 8,800,000 and we have only spent 4,000,000!” The project controller explains that of the 8,800,000, 4,000,000 has actually been spent, another 2,136,000 has already been **promised** to suppliers through purchase orders, and on the rig line only 184,000 is still free. This lesson is about that conversation.',
          ),
        },
        {
          type: 'p',
          text: t(
            'کنترل بودجه روی سه عدد بنا می‌شود. **بودجه** (Budget) سقف مصوب خرج برای یک عنصر WBS، AFE یا مرکز هزینه است. **تعهد** (Commitment) مبلغی است که شرکت با سندی تأییدشده، مثل درخواست یا سفارش خرید، قول خرجش را داده اما هنوز کالایش نرسیده یا خدمتش تأیید نشده است. **هزینه واقعی** (Actual) مبلغی است که با رسیدن کالا یا تأیید خدمت در دفتر کل ثبت شده است. پولی که هنوز آزاد است، **بودجه در دسترس** (Available budget) نام دارد.',
            'Budget control rests on three numbers. The **budget** is the approved spending ceiling for a WBS element, AFE or cost centre. A **commitment** is an amount the company has promised to spend through an approved document, such as a requisition or purchase order, where the goods have not yet arrived or the service has not yet been accepted. An **actual** is an amount already posted to the general ledger because goods were received or a service was accepted. The money that is still free is the **available budget**.',
          ),
        },
        {
          type: 'formula',
          text: t('بودجه در دسترس = بودجه − هزینه واقعی − تعهدات', 'Available budget = Budget − Actuals − Commitments'),
          note: t(
            'مجموع «هزینه واقعی + تعهدات» را **مبلغ تخصیص‌یافته** (Assigned) می‌گویند. ERP هر سند تازه را با همین مبلغ می‌سنجد، نه فقط با هزینه واقعی.',
            'Actuals plus commitments is called the **assigned** amount. The ERP checks every new document against it, not against actuals alone.',
          ),
        },
        {
          type: 'diagram',
          id: 'budget-control',
          caption: t(
            'هر عنصر WBS سه لایه دارد: هزینه واقعی، تعهدات و بودجه در دسترس. کنترل در دسترس بودن بودجه هر سند تازه را پیش از ذخیره با بخش آزاد مقایسه می‌کند.',
            'Each WBS element has three layers: actuals, commitments and available budget. Availability control compares every new document with the free part before it is saved.',
          ),
        },
        {
          type: 'table',
          caption: t('ردیف دکل چاه AR-07 در پایان ماه 2', 'The AR-07 rig line at the end of month 2'),
          head: [t('قلم', 'Item'), t('مبلغ', 'Amount'), t('توضیح', 'Explanation')],
          rows: [
            [t('بودجه عنصر `AFE-2025-014.02.01`', 'Budget of `AFE-2025-014.02.01`'), 2600000, t('انتقال و آماده‌سازی دکل 300,000 و 25 روز × 92,000', 'Rig mobilisation 300,000 plus 25 days × 92,000')],
            [t('هزینه واقعی', 'Actuals'), 2140000, t('انتقال دکل و 20 روز پذیرفته‌شده با SES', 'Mobilisation and 20 days accepted by SES')],
            [t('تعهدات', 'Commitments'), 276000, t('3 روز باقی‌مانده روی سفارش فراخوان دکل', '3 days left on the rig call-off order')],
            [t('بودجه در دسترس', 'Available'), 184000, t('2 روز ذخیره احتیاطی', '2 days of contingency')],
            [t('درخواست تازه', 'New requisition'), 368000, t('4 روز اضافه برای آزاد کردن لوله', '4 extra days to free the pipe')],
            [t('کسری', 'Shortfall'), 184000, t('ERP درخواست را متوقف می‌کند', 'The ERP blocks the requisition')],
          ],
          numericCols: [1],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('چرا فقط به هزینه واقعی نگاه نمی‌کنیم؟', 'Why not look at actuals alone?'),
          text: t(
            'اگر سرپرست فقط ستون هزینه واقعی را ببیند، روی ردیف دکل 460,000 جای خالی می‌بیند. اما 276,000 از آن را قرارداد دکل از پیش گرفته است: دکل سر چاه است و روزهای باقی‌مانده‌اش در هر حال صورت‌حساب می‌شود. بودجه‌ای که فقط هزینه واقعی را ببیند، همیشه دیر خبر می‌دهد؛ تعهدات هشدار زودهنگام‌اند.',
            'If the superintendent looks only at actuals, he sees 460,000 of room on the rig line. But 276,000 of that is already taken by the rig contract: the rig is on site and its remaining days will be billed regardless. A budget that only sees actuals always warns too late; commitments are the early warning.',
          ),
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('در عمل', 'In practice'),
          text: t(
            'در بسیاری از شرکت‌های ایرانی که هنوز ERP یکپارچه ندارند، کارشناس کنترل پروژه قراردادها و سفارش‌ها را در فایل اکسل جداگانه‌ای دنبال می‌کند و هر ماه آن را با گزارش حسابداری جمع می‌زند؛ همین فاصله باعث می‌شود تعهدات دیر دیده شوند. در ERP تعهد با تأیید سند ساخته می‌شود و همیشه به‌روز است. در مشارکت هم AFE مصوب شرکا سقف کار است: بهره‌برداری که بدون AFE تکمیلی از حد مجاز موافقت‌نامه عملیات مشترک (JOA) بگذرد، ممکن است برای گرفتن سهم شرکا از مبلغ اضافه با مشکل روبه‌رو شود.',
            'In many Iranian companies without an integrated ERP, the project controller tracks contracts and orders in a separate spreadsheet and adds them to the accounting report each month; that gap is exactly why commitments are seen late. In an ERP a commitment exists the moment a document is approved, so it is always current. In a joint venture the partner-approved AFE is also the ceiling: an operator that goes beyond the limit allowed by the joint operating agreement (JOA) without a supplementary AFE may struggle to collect the partners’ share of the excess.',
          ),
        },
      ],
    },
    {
      id: 'commitments',
      title: t('تعهد چگونه ساخته و به هزینه واقعی تبدیل می‌شود؟', 'How Commitments Are Created and Turned into Actuals'),
      blocks: [
        {
          type: 'p',
          text: t(
            'تعهد یک چرخه عمر دارد: با درخواست خرید متولد می‌شود، با سفارش خرید قطعی می‌شود و با رسید کالا یا برگه ثبت خدمات به هزینه واقعی تبدیل می‌شود. در هیچ‌کدام از این مراحل پول از بودجه «ناپدید» نمی‌شود؛ فقط از یک ستون به ستون دیگر می‌رود.',
            'A commitment has a life cycle: it is born with a purchase requisition, becomes firm with a purchase order, and turns into actual cost with a goods received note or service entry sheet. At no stage does money “disappear” from the budget; it only moves from one column to another.',
          ),
        },
        {
          type: 'steps',
          items: [
            {
              title: t('درخواست خرید (PR): تعهد اولیه', 'Purchase requisition (PR): pre-commitment'),
              text: t(
                'درخواست‌کننده نیاز را با برآورد قیمت و کد WBS ثبت می‌کند. بسیاری از ERPها از همین لحظه مبلغ برآوردی را به‌عنوان **تعهد اولیه** (Pre-commitment) از بودجه کنار می‌گذارند تا دو نفر یک پول را دو بار خرج نکنند. هیچ ثبتی در دفتر کل انجام نمی‌شود.',
                'The requester records the need with an estimated price and a WBS code. Many ERPs set the estimate aside as a **pre-commitment** from this moment, so two people cannot spend the same money twice. Nothing is posted to the general ledger.',
              ),
            },
            {
              title: t('سفارش خرید (PO): تعهد قطعی', 'Purchase order (PO): firm commitment'),
              text: t(
                'وقتی خریدار از درخواست تأییدشده سفارش می‌سازد، تعهد اولیه آزاد و به‌جای آن **تعهد سفارش** با قیمت قطعی ثبت می‌شود. اگر قیمت مذاکره‌شده کمتر از برآورد باشد، تفاوت به بودجه در دسترس برمی‌گردد. دفتر کل هنوز تغییری نمی‌کند.',
                'When the buyer converts the approved requisition into a PO, the pre-commitment is released and a **PO commitment** at the firm price takes its place. If the negotiated price is below the estimate, the difference returns to the available budget. The ledger still does not change.',
              ),
            },
            {
              title: t('رسید کالا (GRN) یا برگه ثبت خدمات (SES): تبدیل به هزینه واقعی', 'GRN or SES: conversion into actual cost'),
              text: t(
                'وقتی کالا در انبار میدان رسید می‌شود (**رسید کالا (GRN)**) یا ناظر کار، خدمات انجام‌شده را تأیید می‌کند (**برگه ثبت خدمات (SES)**)، تعهد به همان مبلغ کم و هزینه واقعی به همان مبلغ زیاد می‌شود. این نخستین لحظه‌ای است که ERP سند حسابداری می‌زند: بدهکار عنصر WBS (یا موجودی، اگر کالا برای انبار خریده شده باشد) و بستانکار حساب واسط رسید کالا و فاکتور (GR/IR).',
                'When goods are received at the Field Warehouse (**goods received note, GRN**) or the supervisor accepts the work done (**service entry sheet, SES**), the commitment falls and the actual rises by the same amount. This is the first moment the ERP posts an accounting document: debit the WBS element (or inventory, if the goods were bought for stock) and credit the GR/IR clearing account.',
              ),
            },
            {
              title: t('فاکتور: فقط تفاوت قیمت', 'Invoice: only the price difference'),
              text: t(
                'با تطبیق سه‌طرفه (سفارش، رسید، فاکتور)، فاکتور حساب GR/IR را صاف و بدهی به تأمین‌کننده را ثبت می‌کند. اگر مبلغ فاکتور با رسید فرق داشته باشد و تفاوت تأیید شود، فقط همان تفاوت به هزینه واقعی WBS اضافه یا از آن کم می‌شود.',
                'Through three-way matching (PO, receipt, invoice) the invoice clears GR/IR and records the payable. If the invoice differs from the receipt and the difference is approved, only that difference is added to or taken from the WBS actuals.',
              ),
            },
            {
              title: t('بستن سفارش: آزاد شدن مانده تعهد', 'Closing the PO: releasing what is left'),
              text: t(
                'اگر تأمین‌کننده کمتر از مقدار سفارش تحویل دهد یا بخشی از کار لازم نباشد، خریدار سفارش را با علامت «تحویل کامل» می‌بندد و مانده تعهد به بودجه در دسترس برمی‌گردد. سفارشی که بسته نشود، بودجه را بی‌دلیل قفل می‌کند.',
                'If the supplier delivers less than ordered or part of the work is not needed, the buyer closes the PO with a “delivery completed” flag and the remaining commitment returns to the available budget. A PO that is never closed locks budget for no reason.',
              ),
            },
          ],
        },
        {
          type: 'diagram',
          id: 'grn-ses',
          caption: t(
            'دو مسیر دریافت: کالا با رسید کالا (GRN) و خدمات با برگه ثبت خدمات (SES). هر دو تعهد سفارش را کم و هزینه واقعی WBS را زیاد می‌کنند و بستانکار GR/IR ثبت می‌شوند.',
            'Two receipt paths: goods through a GRN and services through an SES. Both reduce the PO commitment, increase WBS actuals and credit GR/IR.',
          ),
        },
        { type: 'h', text: t('مثال: لوله جداری روی `AFE-2025-014.02.03`', 'Example: casing on `AFE-2025-014.02.03`') },
        {
          type: 'table',
          caption: t(
            'عنصر لوله جداری و لوله‌های حفاری (OCTG، عنصر هزینه 6140) در ماه 2؛ بودجه 1,900,000. لوله‌ها مستقیم به حساب چاه سفارش داده شده‌اند، نه برای انبار.',
            'The casing and tubulars (OCTG, cost element 6140) element in month 2; budget 1,900,000. The pipe is ordered directly to the well, not to stock.',
          ),
          head: [t('گام', 'Step'), t('سند', 'Document'), t('تعهد اولیه', 'Pre-commitment'), t('تعهد سفارش', 'PO commitment'), t('هزینه واقعی', 'Actual'), t('در دسترس', 'Available')],
          rows: [
            [t('شروع', 'Start'), t('مانده‌ها: GRN لوله جداری 13-3/8 اینچ (410,000) و یک سفارش باز قدیمی 40,000 برای کفشک و طوقه', 'Balances: the 13-3/8" casing GRN (410,000) and an older open PO of 40,000 for float equipment'), 0, 40000, 410000, 1450000],
            [t('الف', 'a'), t('`PR-10021` لوله جداری 9-5/8 اینچ، برآورد 640,000', '`PR-10021` 9-5/8" casing, estimate 640,000'), 640000, 40000, 410000, 810000],
            [t('ب', 'b'), t('`PO-45210` از همان درخواست با قیمت مذاکره‌شده 620,000', '`PO-45210` from that PR at a negotiated 620,000'), 0, 660000, 410000, 830000],
            [t('ج', 'c'), t('`GRN-50318` رسید 60٪ لوله‌ها: 372,000', '`GRN-50318` receipt of 60% of the pipe: 372,000'), 0, 288000, 782000, 830000],
            [t('د', 'd'), t('فاکتور 372,000 تطبیق داده می‌شود', 'Invoice of 372,000 matched'), 0, 288000, 782000, 830000],
            [t('هـ', 'e'), t('`GRN-50331` رسید بقیه لوله‌ها: 248,000', '`GRN-50331` receipt of the rest: 248,000'), 0, 40000, 1030000, 830000],
            [t('و', 'f'), t('فاکتور 254,000 برای رسید 248,000؛ کرایه حمل اضافه 6,000 تأیید می‌شود', 'Invoice of 254,000 for the 248,000 receipt; 6,000 extra freight approved'), 0, 40000, 1036000, 824000],
            [t('ز', 'g'), t('`GRN-50340` رسید 32,000 روی سفارش قدیمی و بستن آن با «تحویل کامل»', '`GRN-50340` receipt of 32,000 on the old PO, closed as “delivery completed”'), 0, 0, 1068000, 832000],
          ],
          numericCols: [2, 3, 4, 5],
        },
        {
          type: 'p',
          text: t(
            'به ستون آخر نگاه کنید. بودجه در دسترس فقط در چهار جا تغییر کرد: وقتی تعهد تازه‌ای ساخته شد (الف)، وقتی قیمت سفارش از برآورد کمتر شد (ب، 20,000 آزاد شد)، وقتی فاکتور با رسید فرق داشت (و، 6,000 کم شد) و وقتی مانده سفارش قدیمی بسته شد (ز، 8,000 آزاد شد). رسید کالا به‌تنهایی (ج و هـ) و فاکتور بدون تفاوت (د) هیچ اثری بر بودجه در دسترس ندارند؛ فقط پول را از ستون تعهد به ستون واقعی می‌برند. تا پایان ماه، رسید کوچکی به مبلغ 2,000 برای مرکزکننده‌ها (Centralizer) و سفارش تازه `PO-45236` به مبلغ 660,000 برای لاینر 7 اینچ و لوله مغزی، این عنصر را به ارقام گزارش ماهانه می‌رساند: هزینه واقعی 1,070,000 و تعهد 660,000.',
            'Look at the last column. The available budget changed in only four places: when a new commitment was created (a), when the PO price came in below the estimate (b, 20,000 released), when the invoice differed from the receipt (f, 6,000 used) and when the old PO was closed (g, 8,000 released). A goods receipt on its own (c and e) and an invoice with no difference (d) do not touch the available budget; they only move money from the commitment column to the actual column. Before month end, a small receipt of 2,000 for centralisers and a new order `PO-45236` of 660,000 for the 7" liner and production tubing bring the element to the figures in the monthly report: actuals 1,070,000 and commitments 660,000.',
          ),
        },
        {
          type: 'journal',
          title: t('ثبت‌هایی که ERP در دفتر کل می‌زند (درخواست و سفارش هیچ ثبتی ندارند)', 'What the ERP posts to the general ledger (the PR and PO post nothing)'),
          entries: [
            {
              date: t('ج', 'c'),
              lines: [
                { account: ac.auc('AFE-2025-014.02.03', '6140'), debit: 372000 },
                { account: ac.grir, credit: 372000 },
              ],
              memo: t('`GRN-50318`: تعهد 372,000 کم و هزینه واقعی 372,000 زیاد می‌شود.', '`GRN-50318`: commitment down 372,000, actuals up 372,000.'),
            },
            {
              date: t('د', 'd'),
              lines: [
                { account: ac.grir, debit: 372000 },
                { account: ac.ap, credit: 372000 },
              ],
              memo: t('تطبیق سه‌طرفه؛ اثری بر بودجه ندارد.', 'Three-way match; no budget effect.'),
            },
            {
              date: t('هـ', 'e'),
              lines: [
                { account: ac.auc('AFE-2025-014.02.03', '6140'), debit: 248000 },
                { account: ac.grir, credit: 248000 },
              ],
              memo: t('`GRN-50331`', '`GRN-50331`'),
            },
            {
              date: t('و', 'f'),
              lines: [
                { account: ac.grir, debit: 248000 },
                { account: ac.auc('AFE-2025-014.02.03', '6140'), debit: 6000 },
                { account: ac.ap, credit: 254000 },
              ],
              memo: t('فقط تفاوت تأییدشده 6,000 به هزینه واقعی اضافه می‌شود.', 'Only the approved 6,000 difference is added to actuals.'),
            },
            {
              date: t('ز', 'g'),
              lines: [
                { account: ac.auc('AFE-2025-014.02.03', '6140'), debit: 32000 },
                { account: ac.grir, credit: 32000 },
              ],
              memo: t('بستن سفارش ثبت مالی ندارد؛ فقط 8,000 تعهد آزاد می‌شود.', 'Closing the PO posts nothing; it only releases 8,000 of commitment.'),
            },
          ],
        },
        { type: 'h', text: t('خدمات: برگه ثبت خدمات (SES) برای روزهای دکل', 'Services: the SES for rig days') },
        {
          type: 'p',
          text: t(
            'خدمات وارد انبار نمی‌شوند که بشود آن‌ها را شمرد. مسار پترولیوم دکل را با یک **سفارش فراخوان** از قرارداد حفاری گرفته است: `PO-45180` برای انتقال دکل (300,000) و 23 روز کار برنامه‌ریزی‌شده × 92,000، یعنی 2,416,000. هر هفته نماینده شرکت سر دکل (Company Man) گزارش‌های روزانه حفاری را با صورت‌وضعیت پیمانکار تطبیق می‌دهد، روزهای تأییدشده را به‌صورت **برگه ثبت خدمات (SES)** وارد می‌کند و مالک WBS آن را می‌پذیرد. پذیرش SES، مثل رسید کالا، تعهد سفارش را کم و هزینه واقعی را زیاد می‌کند.',
            'Services do not arrive at a warehouse where they can be counted. Masar Petroleum hires the rig through a **call-off order** under the drilling contract: `PO-45180` for mobilisation (300,000) and 23 planned days × 92,000, a total of 2,416,000. Each week the company man on the rig checks the daily drilling reports against the contractor’s statement, enters the accepted days as a **service entry sheet (SES)**, and the WBS owner accepts it. Accepting the SES, just like a goods receipt, reduces the PO commitment and increases actuals.',
          ),
        },
        {
          type: 'journal',
          title: t('پذیرش SES هفتگی دکل', 'Accepting the weekly rig SES'),
          entries: [
            {
              date: t('هفته 3 حفاری', 'Drilling week 3'),
              lines: [
                { account: ac.auc('AFE-2025-014.02.01', '6120'), debit: 644000 },
                { account: ac.grir, credit: 644000 },
              ],
              memo: t(
                '`SES-70412`: روزهای 14 تا 20، یعنی 7 روز × 92,000. تعهد `PO-45180` از 920,000 به 276,000 کم و هزینه واقعی از 1,496,000 به 2,140,000 زیاد می‌شود.',
                '`SES-70412`: days 14 to 20, 7 days × 92,000. The `PO-45180` commitment falls from 920,000 to 276,000 and actuals rise from 1,496,000 to 2,140,000.',
              ),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('کالای انباری و رزرو', 'Stock items and reservations'),
          text: t(
            'اگر کالا برای **انبار** خریده شود (مثل لوله مغزی استاندارد که برای چند چاه نگه داشته می‌شود)، GRN بدهکار 1310 موجودی مواد و قطعات و بستانکار GR/IR ثبت می‌شود و هنوز هیچ هزینه‌ای روی AFE نمی‌نشیند. هزینه واقعی AFE زمانی ایجاد می‌شود که انباردار کالا را با **حواله انبار** به WBS چاه صادر کند (بدهکار 1510 با WBS، بستانکار 1310). برخی ERPها رزرو کالا برای WBS را هم به‌عنوان تعهد نشان می‌دهند تا کنترل‌کننده بداند چه کالایی از انبار برای این چاه کنار گذاشته شده است.',
            'If goods are bought for **stock** (such as standard tubing held for several wells), the GRN debits 1310 Materials and spares inventory and credits GR/IR, and nothing lands on the AFE yet. The AFE actual arises when the storekeeper issues the goods to the well’s WBS with a **goods issue** (debit 1510 with the WBS, credit 1310). Some ERPs also show stock reservations for a WBS as commitments, so the controller can see which stock is set aside for this well.',
          ),
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل', 'In practice'),
          text: t(
            'در پروژه‌های ایران پیمانکار هر ماه «صورت‌وضعیت» می‌دهد و دستگاه نظارت مقادیر آن را تأیید می‌کند. در ERP همین مقادیر تأییدشده به‌صورت SES ثبت می‌شوند؛ پس SES جای امضای ناظر روی صورت‌وضعیت را می‌گیرد و سند پشتیبان آن (صورت‌وضعیت امضاشده و گزارش روزانه حفاری) باید پیوست شود تا در حسابرسی شرکا و بازیافت هزینه قابل دفاع باشد. جزئیات ثبت GRN و SES در درس رسید کالا و برگه ثبت خدمات در دوره تدارکات و خرید آمده است.',
            'On Iranian projects the contractor submits a monthly progress statement («صورت‌وضعیت») and the supervising engineer approves its quantities. In the ERP those approved quantities are entered as an SES, so the SES replaces the supervisor’s signature on the statement, and its evidence (the signed statement and the daily drilling reports) must be attached so the cost can be defended in partner audits and cost recovery. The detailed GRN and SES procedures are in the procurement course lesson on goods receipts and service entry sheets.',
          ),
        },
      ],
    },
    {
      id: 'availability-control',
      title: t('کنترل در دسترس بودن بودجه و حدود تحمل', 'Availability Control and Tolerance Limits'),
      blocks: [
        {
          type: 'p',
          text: t(
            '**کنترل در دسترس بودن بودجه** (Availability Control) قابلیتی در ERP است که هر سند تازه‌ای را که تعهد یا هزینه می‌سازد، پیش از ذخیره با بودجه در دسترس مقایسه می‌کند. معیار مقایسه **درصد مصرف** است: مبلغ تخصیص‌یافته به اضافه سند تازه، تقسیم بر بودجه. برای هر بازه یک **حد تحمل** (Tolerance limit) تعریف می‌شود و برای هر حد یک واکنش: هیچ، هشدار یا توقف قطعی.',
            '**Availability control** is the ERP function that compares every new document that creates a commitment or cost with the available budget before the document is saved. The yardstick is the **consumption percentage**: the assigned amount plus the new document, divided by the budget. A **tolerance limit** is defined for each range, with an action for each: nothing, a warning or a hard stop.',
          ),
        },
        {
          type: 'formula',
          text: t('درصد مصرف = (هزینه واقعی + تعهدات + سند تازه) ÷ بودجه × 100', 'Consumption % = (Actuals + Commitments + New document) ÷ Budget × 100'),
        },
        {
          type: 'table',
          caption: t('پروفایل تحمل مسار پترولیوم برای AFEهای سرمایه‌ای (ارقام نمونه)', 'Masar Petroleum tolerance profile for capital AFEs (illustrative)'),
          head: [t('درصد مصرف', 'Consumption'), t('واکنش ERP', 'ERP action'), t('چه اتفاقی می‌افتد', 'What happens')],
          rows: [
            [t('کمتر از 90٪', 'Below 90%'), t('بدون پیام', 'No message'), t('سند ذخیره و وارد گردش کار تأیید می‌شود.', 'The document is saved and enters the approval workflow.')],
            [t('از 90٪ تا 100٪', '90% to 100%'), t('هشدار', 'Warning'), t('سند ذخیره می‌شود، اما کاربر پیام می‌بیند و ایمیل خودکار برای مالک WBS و کنترل‌کننده پروژه فرستاده می‌شود.', 'The document is saved, but the user sees a message and an automatic email goes to the WBS owner and the project controller.')],
            [t('بیش از 100٪', 'Above 100%'), t('توقف قطعی (خطا)', 'Hard stop (error)'), t('سند ذخیره نمی‌شود تا بودجه با انتقال یا افزایش اصلاح شود.', 'The document cannot be saved until the budget is fixed by a transfer or supplement.')],
            [t('جمع AFE بیش از 100٪', 'AFE total above 100%'), t('توقف قطعی برای همه عناصر', 'Hard stop on every element'), t('حتی اگر عنصری بودجه آزاد داشته باشد، سند تازه‌ای روی این AFE پذیرفته نمی‌شود.', 'Even an element with free budget cannot take a new document on this AFE.')],
          ],
        },
        {
          type: 'p',
          text: t(
            'کدام سندها بررسی می‌شوند؟ معمولاً درخواست خرید، سفارش خرید، افزایش مبلغ سفارش، سند حسابداری دستی روی WBS و فاکتور بدون سفارش. GRN و SES که روی سفارش موجود و در سقف آن ثبت می‌شوند معمولاً دوباره بررسی نمی‌شوند، چون فقط تعهد را به هزینه واقعی تبدیل می‌کنند؛ اما اگر مبلغشان از سفارش بیشتر شود، مازاد بررسی می‌شود.',
            'Which documents are checked? Usually purchase requisitions, purchase orders, PO value increases, manual journal entries to a WBS and invoices without a PO. A GRN or SES posted against an existing PO and within its value is usually not checked again, because it only converts commitment into actual; any excess over the PO value is checked.',
          ),
        },
        {
          type: 'table',
          caption: t('دو درخواست جداگانه روی ردیف دکل (بودجه 2,600,000)', 'Two separate requests on the rig line (budget 2,600,000)'),
          head: [t('درخواست', 'Request'), t('تخصیص‌یافته پیش از آن', 'Assigned before'), t('سند تازه', 'New document'), t('درصد مصرف پس از آن', 'Consumption after'), t('واکنش ERP', 'ERP action')],
          rows: [
            [t('اجاره ابزار مانده‌یابی (Fishing tools)', 'Fishing tool rental'), 2416000, 150000, t('98.7٪', '98.7%'), t('هشدار؛ سند ذخیره می‌شود', 'Warning; the document is saved')],
            [t('4 روز دکل اضافه', '4 extra rig days'), 2416000, 368000, t('107.1٪', '107.1%'), t('توقف قطعی؛ سند ذخیره نمی‌شود', 'Hard stop; the document is not saved')],
          ],
          numericCols: [1, 2, 3],
        },
        {
          type: 'compare',
          left: {
            title: t('هشدار (Warning)', 'Warning'),
            items: [
              t('سند ذخیره می‌شود و کار ادامه می‌یابد.', 'The document is saved and work goes on.'),
              t('مالک WBS و کنترل‌کننده باخبر می‌شوند و فرصت دارند پیش‌بینی را به‌روز کنند.', 'The WBS owner and controller are informed and can update the forecast.'),
              t('مناسب بودجه‌های عملیاتی و عناصری که نوسان طبیعی دارند.', 'Suits operating budgets and elements with natural swings.'),
            ],
          },
          right: {
            title: t('توقف قطعی (Hard stop)', 'Hard stop'),
            items: [
              t('سند ذخیره نمی‌شود؛ کاربر باید سراغ کنترل‌کننده برود.', 'The document is not saved; the user must go to the controller.'),
              t('راه رسمی فقط یک سند بودجه است: انتقال، افزایش یا AFE تکمیلی.', 'The only formal fix is a budget document: transfer, supplement or supplementary AFE.'),
              t('مناسب AFEهای سرمایه‌ای که شرکا یا دولت سقفشان را تصویب کرده‌اند.', 'Suits capital AFEs whose ceiling was approved by partners or government.'),
            ],
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل', 'In practice'),
          text: t(
            'سطح کنترل را همان سطحی بگذارید که بودجه در آن تصویب شده و مالکش تصمیم می‌گیرد. اگر کنترل روی کوچک‌ترین عناصر WBS باشد، هر روز چند سند بی‌دلیل متوقف می‌شود و کاربران دنبال راه دور زدن می‌گردند؛ اگر فقط روی جمع AFE باشد، یک ردیف می‌تواند بی‌صدا بودجه بقیه را بخورد. برای وضعیت‌های اضطراری کنترل چاه و HSE هم رویه مکتوب اضطراری لازم است (مثلاً سفارش اضطراری با تأیید مدیر حفاری و سند بودجه ظرف 48 ساعت؛ ارقام نمونه)؛ اما «خاموش کردن کنترل» به دست واحد فناوری اطلاعات هرگز راه‌حل نیست.',
            'Set the control level where the budget was approved and where its owner makes decisions. Control on the smallest WBS elements blocks documents every day for no good reason and pushes users to look for workarounds; control only on the AFE total lets one line silently eat the others’ budget. Well-control and HSE emergencies need a written emergency procedure (for example an emergency PO approved by the drilling manager, with the budget document within 48 hours; illustrative), but having IT “switch off the control” is never the answer.',
          ),
        },
      ],
    },
    {
      id: 'budget-changes',
      title: t('انتقال، افزایش و برگشت بودجه', 'Budget Transfers, Supplements and Returns'),
      blocks: [
        {
          type: 'p',
          text: t(
            'بودجه مصوب ثابت نمی‌ماند، اما هر تغییرش باید با **سند بودجه** (Budget document) انجام شود: سندی با شماره، تاریخ، دلیل، پیوست و گردش کار تأیید. ERP همیشه **بودجه اولیه** (Original budget) را نگه می‌دارد و **بودجه جاری** (Current budget) را از آن حساب می‌کند تا هر کس ببیند AFE از روز تصویب چقدر و چرا تغییر کرده است.',
            'An approved budget does not stay fixed, but every change must go through a **budget document**: a numbered, dated document with a reason, attachments and an approval workflow. The ERP always keeps the **original budget** and derives the **current budget** from it, so anyone can see how much the AFE has changed since approval, and why.',
          ),
        },
        {
          type: 'formula',
          text: t('بودجه جاری = بودجه اولیه + افزایش‌ها − برگشت‌ها ± انتقال‌ها', 'Current budget = Original budget + Supplements − Returns ± Transfers'),
        },
        {
          type: 'table',
          head: [t('نوع', 'Type'), t('چه می‌کند', 'What it does'), t('جمع AFE', 'AFE total'), t('تأیید در مسار پترولیوم (نمونه)', 'Approval at Masar Petroleum (illustrative)')],
          rows: [
            [t('انتقال (Transfer)', 'Transfer'), t('بودجه را از یک عنصر WBS به عنصر دیگر می‌برد', 'Moves budget from one WBS element to another'), t('تغییر نمی‌کند', 'Unchanged'), t('مدیر پروژه در همان AFE؛ اطلاع به شرکا در گزارش ماهانه', 'Project manager within the same AFE; partners informed in the monthly report')],
            [t('افزایش (Supplement)', 'Supplement'), t('به بودجه یک یا چند عنصر اضافه می‌کند', 'Adds budget to one or more elements'), t('زیاد می‌شود', 'Increases'), t('تا 10٪ مجموع افزایش‌ها نسبت به AFE اولیه: مدیر دارایی؛ بیش از آن: AFE تکمیلی با تأیید شرکا', 'Cumulative supplements up to 10% of the original AFE: asset manager; beyond that: supplementary AFE approved by partners')],
            [t('برگشت (Return)', 'Return'), t('بودجه بی‌استفاده را آزاد می‌کند', 'Releases unused budget'), t('کم می‌شود', 'Decreases'), t('کنترل‌کننده پروژه؛ مبلغ به سرجمع WP&B برمی‌گردد', 'Project controller; the amount goes back to the WP&B pool')],
          ],
        },
        { type: 'h', text: t('تغییرات بودجه AR-07 پس از پیش‌بینی ماه 2', 'AR-07 budget changes after the month-2 forecast') },
        {
          type: 'p',
          text: t(
            'پیش‌بینی پایان ماه 2 (بخش بعد) نشان می‌دهد ردیف دکل 184,000 و ردیف خدمات حفاری (سیمان‌کاری و گل) 60,000 بیش از بودجه تمام می‌شوند، در حالی که آماده‌سازی محل 10,000 و لوله جداری 40,000 کمتر خرج می‌برند. کنترل‌کننده صرفه‌جویی‌ها را منتقل می‌کند و برای بقیه افزایش داخلی می‌گیرد:',
            'The month-2 forecast (next section) shows the rig line finishing 184,000 and the drilling services line (cementing and mud) 60,000 over budget, while site preparation will spend 10,000 and casing 40,000 less. The controller transfers the savings and obtains an internal supplement for the rest:',
          ),
        },
        {
          type: 'table',
          caption: t('سند بودجه `BD-2026-0207`؛ اعداد داخل پرانتز کاهش است', 'Budget document `BD-2026-0207`; figures in brackets are reductions'),
          head: [t('عنصر WBS', 'WBS element'), t('بودجه اولیه', 'Original'), t('انتقال', 'Transfer'), t('افزایش', 'Supplement'), t('بودجه جاری', 'Current')],
          rows: [
            [t('`.01` آماده‌سازی محل', '`.01` Site preparation'), 400000, t('(10,000)', '(10,000)'), 0, 390000],
            [t('`.02.01` دکل: انتقال و روزکار', '`.02.01` Rig: mobilisation and day rate'), 2600000, 50000, 134000, 2784000],
            [t('`.02.02` خدمات حفاری: سیمان‌کاری و گل', '`.02.02` Drilling services: cementing and mud'), 600000, 0, 60000, 660000],
            [t('`.02.03` لوله جداری و لوله‌های حفاری (OCTG)', '`.02.03` Casing and tubulars (OCTG)'), 1900000, t('(40,000)', '(40,000)'), 0, 1860000],
            [t('`.03` تکمیل و آزمایش چاه', '`.03` Completion and testing'), 2300000, 0, 0, 2300000],
            [t('`.04` خط جریان و اتصال', '`.04` Flowline and tie-in'), 1000000, 0, 0, 1000000],
            [t('جمع', 'Total'), 8800000, 0, 194000, 8994000],
          ],
          numericCols: [1, 2, 3, 4],
        },
        {
          type: 'p',
          text: t(
            'جمع انتقال‌ها صفر است: 50,000 از دو عنصر کم و به ردیف دکل اضافه شد. افزایش 194,000 برابر 2.2٪ AFE اولیه است (194,000 ÷ 8,800,000) و چون از حد 10٪ کمتر است، مدیر دارایی آن را تأیید می‌کند و شرکا در گزارش ماهانه باخبر می‌شوند. اگر بعداً مجموع افزایش‌ها از 880,000 (یعنی 10٪ از 8,800,000) بگذرد، پیش از هر تعهد تازه باید AFE تکمیلی به تأیید شرکا برسد.',
            'The transfers net to zero: 50,000 left two elements and went to the rig line. The 194,000 supplement is 2.2% of the original AFE (194,000 ÷ 8,800,000); since it is below the 10% limit, the asset manager approves it and the partners are informed in the monthly report. If cumulative supplements later pass 880,000 (10% of 8,800,000), a supplementary AFE must be approved by the partners before any new commitment.',
          ),
        },
        {
          type: 'callout',
          tone: 'warning',
          text: t(
            'انتقال را بر پایه **پیش‌بینی** انجام دهید، نه بر پایه بودجه در دسترس. عنصر لوله جداری 170,000 بودجه در دسترس دارد، اما پیش‌بینی می‌گوید 130,000 از آن هنوز برای لاینر و لوله مغزی لازم است؛ پس فقط 40,000 قابل انتقال است. کسی که همه 170,000 را منتقل کند، چند هفته بعد همین عنصر را متوقف می‌کند.',
            'Base transfers on the **forecast**, not on the available budget. The casing element has 170,000 available, but the forecast says 130,000 of it is still needed for the liner and tubing, so only 40,000 can be transferred. Whoever moves all 170,000 will block the same element a few weeks later.',
          ),
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('در عمل', 'In practice'),
          text: t(
            'برگشت بودجه هم به اندازه افزایش مهم است. وقتی عنصری تمام می‌شود و پولی از آن می‌ماند، آن را برگردانید تا در WP&B برای کار دیگری آزاد شود و AFE «ذخیره پنهان» نداشته باشد. در قراردادهای نفتی ایران، بودجه سالانه معمولاً به تأیید کارفرمای دولتی (شرکت ملی نفت یا شرکت تابعه آن) یا کمیته مدیریت مشترک می‌رسد؛ اینکه افزایش AFE هم به تأیید آن‌ها نیاز دارد یا نه، در قرارداد خودتان آمده است.',
            'Returning budget matters as much as supplementing it. When an element finishes with money left, return it so the WP&B can use it for other work and the AFE carries no “hidden reserve”. Under Iranian petroleum contracts the annual budget is usually approved by the state counterparty (the national oil company or its subsidiary) or a joint management committee; whether AFE supplements also need their approval is set in your own contract.',
          ),
        },
      ],
    },
    {
      id: 'forecast-report',
      title: t('پیش‌بینی و گزارش ماهانه کنترل', 'Forecasts and the Monthly Control Report'),
      blocks: [
        {
          type: 'p',
          text: t(
            '**برآورد هزینه تا تکمیل** (ETC: Estimate to Complete) مبلغی است که فکر می‌کنیم از امروز تا پایان کار باید خرج شود. ETC دو بخش دارد: تعهدات باز (که تقریباً قطعی‌اند) و کار باقی‌مانده‌ای که هنوز سفارشی برایش صادر نشده است. **برآورد هزینه در تکمیل** (EAC: Estimate at Completion) هزینه نهایی پیش‌بینی‌شده است و **انحراف در تکمیل** (VAC: Variance at Completion) فاصله آن با بودجه.',
            'The **estimate to complete (ETC)** is what we expect to spend from today until the work is finished. It has two parts: open commitments (which are almost certain) and remaining work for which no order has been placed yet. The **estimate at completion (EAC)** is the forecast final cost, and the **variance at completion (VAC)** is its gap to the budget.',
          ),
        },
        {
          type: 'formula',
          text: t('ETC = تعهدات باز + برآورد کار تعهدنشده؛   EAC = هزینه واقعی + ETC؛   VAC = بودجه − EAC', 'ETC = Open commitments + Uncommitted remaining work;   EAC = Actuals + ETC;   VAC = Budget − EAC'),
          note: t(
            'VAC مثبت یعنی پیش‌بینی کمتر از بودجه است (صرفه‌جویی) و VAC منفی یعنی پیش‌بینی بیش از بودجه است (فراتر رفتن از بودجه).',
            'A positive VAC means the forecast is below budget (a saving); a negative VAC means it is above budget (an overrun).',
          ),
        },
        {
          type: 'table',
          caption: t(
            'گزارش ماهانه کنترل `AFE-2025-014` (حفاری، تکمیل و اتصال چاه AR-07)، پایان ماه 2، بودجه اولیه',
            'Monthly control report `AFE-2025-014` (drill, complete and tie in well AR-07), end of month 2, original budget',
          ),
          head: [t('عنصر WBS', 'WBS element'), t('بودجه', 'Budget'), t('واقعی', 'Actual'), t('تعهد', 'Commitments'), t('در دسترس', 'Available'), t('مصرف', 'Consumed'), t('وضعیت', 'Status')],
          rows: [
            [t('`.01` آماده‌سازی محل', '`.01` Site preparation'), 400000, 390000, 0, 10000, t('97.5٪', '97.5%'), t('تمام‌شده؛ مانده قابل برگشت', 'Finished; balance can be released')],
            [t('`.02.01` دکل', '`.02.01` Rig'), 2600000, 2140000, 276000, 184000, t('92.9٪', '92.9%'), t('هشدار', 'Warning')],
            [t('`.02.02` خدمات حفاری', '`.02.02` Drilling services'), 600000, 400000, 100000, 100000, t('83.3٪', '83.3%'), t('عادی', 'Normal')],
            [t('`.02.03` لوله جداری و OCTG', '`.02.03` Casing and tubulars'), 1900000, 1070000, 660000, 170000, t('91.1٪', '91.1%'), t('هشدار', 'Warning')],
            [t('`.03` تکمیل و آزمایش', '`.03` Completion and testing'), 2300000, 0, 1100000, 1200000, t('47.8٪', '47.8%'), t('تجهیزات دیررس سفارش داده شده', 'Long-lead equipment ordered')],
            [t('`.04` خط جریان و اتصال', '`.04` Flowline and tie-in'), 1000000, 0, 0, 1000000, t('0.0٪', '0.0%'), t('شروع نشده', 'Not started')],
            [t('جمع', 'Total'), 8800000, 4000000, 2136000, 2664000, t('69.7٪', '69.7%'), blank()],
          ],
          numericCols: [1, 2, 3, 4, 5],
        },
        {
          type: 'table',
          caption: t('پیش‌بینی پایان ماه 2؛ اعداد داخل پرانتز فراتر رفتن از بودجه است', 'Forecast at the end of month 2; figures in brackets are overruns'),
          head: [t('عنصر WBS', 'WBS element'), t('واقعی', 'Actual'), t('تعهد باز', 'Open commitments'), t('کار تعهدنشده', 'Uncommitted work'), t('ETC', 'ETC'), t('EAC', 'EAC'), t('VAC', 'VAC')],
          rows: [
            [t('`.01`', '`.01`'), 390000, 0, 0, 0, 390000, 10000],
            [t('`.02.01` (4 روز اضافه)', '`.02.01` (4 extra days)'), 2140000, 276000, 368000, 644000, 2784000, t('(184,000)', '(184,000)')],
            [t('`.02.02` (سیمان‌کاری اضافه لاینر)', '`.02.02` (extra liner cement job)'), 400000, 100000, 160000, 260000, 660000, t('(60,000)', '(60,000)')],
            [t('`.02.03`', '`.02.03`'), 1070000, 660000, 130000, 790000, 1860000, 40000],
            [t('`.03`', '`.03`'), 0, 1100000, 1200000, 2300000, 2300000, 0],
            [t('`.04`', '`.04`'), 0, 0, 1000000, 1000000, 1000000, 0],
            [t('جمع', 'Total'), 4000000, 2136000, 2858000, 4994000, 8994000, t('(194,000)', '(194,000)')],
          ],
          numericCols: [1, 2, 3, 4, 5, 6],
        },
        {
          type: 'p',
          text: t(
            'این گزارش سه پیام دارد. یک: دو ردیف بیش از بودجه تمام می‌شوند: دکل (184,000، به دلیل 4 روز گیر کردن لوله) و خدمات حفاری (60,000، به دلیل یک عملیات سیمان‌کاری اضافه برای لاینر). دو: آماده‌سازی محل و لوله جداری با هم 50,000 صرفه‌جویی دارند. سه: جمع AFE حدود 194,000 یا 2.2٪ بیش از بودجه تمام می‌شود؛ همان مبلغی که در بخش قبل با انتقال و افزایش پوشش داده شد. همچنین دقت کنید عنصر تکمیل چاه با وجود هزینه واقعی صفر، 47.8٪ مصرف دارد: تجهیزات تکمیل اقلام دیررس (Long-lead) هستند و ماه‌ها پیش سفارش داده شده‌اند.',
            'The report carries three messages. One: two lines will overrun: the rig (184,000, from 4 days of stuck pipe) and drilling services (60,000, from an extra liner cement job). Two: site preparation and casing together save 50,000. Three: the AFE as a whole will finish about 194,000, or 2.2%, over budget; exactly the amount covered by the transfers and supplement in the previous section. Note also that completion shows 47.8% consumed with zero actuals: completion equipment is long-lead and was ordered months ago.',
          ),
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل', 'In practice'),
          text: t(
            'پیش‌بینی را هر ماه به‌روز کنید، نه فقط وقتی بودجه تمام می‌شود. پیش‌بینی خوب را کنترل‌کننده تنها نمی‌نویسد: مهندس حفاری روزهای باقی‌مانده را می‌دهد، خریدار قیمت‌های تازه را و مهندس تکمیل برنامه کار را. در مسار پترولیوم هر VAC بیش از 5٪ بودجه عنصر و بیش از 50,000 در گزارش ماهانه توضیح مکتوب می‌خواهد (ارقام نمونه).',
            'Update the forecast every month, not only when the budget runs out. A good forecast is not written by the controller alone: the drilling engineer supplies the remaining days, the buyer the latest prices and the completion engineer the work plan. At Masar Petroleum any VAC above 5% of the element budget and above 50,000 needs a written explanation in the monthly report (illustrative).',
          ),
        },
        {
          type: 'callout',
          tone: 'warning',
          text: t(
            'دو خطای رایج در خواندن گزارش: (1) بودجه در دسترس را صرفه‌جویی فرض کردن؛ عنصر خط جریان 1,000,000 در دسترس دارد، اما هنوز هیچ کاری نشده و همه‌اش لازم است. (2) هزینه واقعی را با پیشرفت کار یکی گرفتن؛ 45٪ بودجه خرج شده، اما این نمی‌گوید 45٪ کار انجام شده است. سنجش پیشرفت موضوع درس تحلیل انحراف و ارزش کسب‌شده است.',
            'Two common misreadings: (1) treating the available budget as a saving; the flowline element has 1,000,000 available, but no work has started and all of it is needed. (2) treating actual cost as progress; 45% of the budget is spent, but that does not mean 45% of the work is done. Measuring progress is the subject of the lesson on variance analysis and earned value.',
          ),
        },
      ],
    },
    {
      id: 'erp',
      title: t('در ERP: داده پایه، اسناد، نقش‌ها و ثبت‌های مالی', 'In the ERP: Master Data, Documents, Roles and Finance Postings'),
      blocks: [
        {
          type: 'p',
          text: t(
            'کنترل بودجه در ERP روی چند **داده پایه** بنا می‌شود که یک بار ساخته می‌شوند و چند **سند تراکنشی** که هر روز صادر می‌شوند. ماژول پروژه بودجه و تعهد را نگه می‌دارد، ماژول تدارکات و انبار اسناد خرید و رسید را، و ماژول مالی ثبت‌های دفتر کل را. هر سند هر سه را هم‌زمان به‌روز می‌کند.',
            'Budget control in the ERP rests on a few **master data** records that are set up once and a set of **transaction documents** created every day. The project module holds budgets and commitments, procurement and inventory hold the purchasing and receiving documents, and Finance holds the ledger postings. Each document updates all three at once.',
          ),
        },
        {
          type: 'table',
          caption: t('داده پایه', 'Master data'),
          head: [t('داده پایه', 'Master data'), t('نقش', 'Role'), t('نمونه مسار پترولیوم', 'Masar Petroleum example')],
          rows: [
            [t('عنصر WBS', 'WBS element'), t('شیء هزینه‌ای که بودجه، تعهد و هزینه روی آن جمع می‌شود؛ با مالک، وضعیت و پروفایل بودجه', 'The cost object that collects budget, commitments and cost; with an owner, a status and a budget profile'), t('`AFE-2025-014.02.01` دکل؛ مالک: سرپرست حفاری', '`AFE-2025-014.02.01` rig; owner: drilling superintendent')],
            [t('پروفایل بودجه و تحمل', 'Budget and tolerance profile'), t('سطح کنترل، حدود هشدار و توقف قطعی', 'Control level, warning and hard-stop limits'), t('هشدار 90٪، توقف بیش از 100٪، روی عناصر دارای بودجه و جمع AFE', 'Warning 90%, stop above 100%, on budgeted elements and the AFE total')],
            [t('رشته کدینگ هزینه', 'Cost-coding string'), t('شرکت، مرکز هزینه، WBS، حساب کل، نشانگر بازیافت و طبقه هزینه', 'Company, cost centre, WBS, GL account, recoverable flag and cost category'), t('`MP01 / CC-ARY-DRL / AFE-2025-014.02.03 / 6140 (1510) / R / Development`', '`MP01 / CC-ARY-DRL / AFE-2025-014.02.03 / 6140 (1510) / R / Development`')],
            [t('تأمین‌کننده، کالا و قرارداد', 'Vendor, material and contract'), t('مبنای قیمت سفارش و فراخوان', 'Basis for PO and call-off prices'), t('قرارداد حفاری با روزکار 92,000؛ کالای باریت', 'Drilling contract at 92,000 a day; barite material')],
            [t('حساب‌های کل', 'GL accounts'), t('تعیین حساب خودکار برای ثبت‌ها', 'Automatic account determination for postings'), t('عناصر هزینه پروژه 6110 تا 6160 روی 1510؛ و 1310، 2110، 2120، 2130', 'Project cost elements 6110 to 6160 on 1510; plus 1310, 2110, 2120, 2130')],
          ],
        },
        {
          type: 'table',
          caption: t('اسناد تراکنشی، نقش‌ها و ثبت مالی', 'Transaction documents, roles and Finance postings'),
          head: [t('سند', 'Document'), t('چه کسی', 'Who'), t('اثر بر بودجه', 'Budget effect'), t('ثبت در مالی', 'Finance posting')],
          rows: [
            [t('سند بودجه (اولیه، انتقال، افزایش، برگشت)', 'Budget document (original, transfer, supplement, return)'), t('کنترل‌کننده پروژه؛ تأیید طبق جدول اختیارات', 'Project controller; approved per the DOA'), t('بودجه را تغییر می‌دهد', 'Changes the budget'), t('ندارد', 'None')],
            [t('درخواست خرید', 'Purchase requisition'), t('مالک WBS یا برنامه‌ریز', 'WBS owner or planner'), t('تعهد اولیه', 'Pre-commitment'), t('ندارد', 'None')],
            [t('سفارش خرید یا فراخوان', 'Purchase order or call-off'), t('خریدار؛ تأیید طبق جدول اختیارات', 'Buyer; approved per the DOA'), t('تعهد سفارش', 'PO commitment'), t('ندارد', 'None')],
            [t('رسید کالا (GRN)', 'Goods received note (GRN)'), t('انباردار یا تحویل‌گیرنده سر چاه', 'Storekeeper or wellsite receiver'), t('تعهد کم، واقعی زیاد', 'Commitment down, actual up'), t('بدهکار 1510 (WBS) یا 1310؛ بستانکار 2120', 'Dr 1510 (WBS) or 1310; Cr 2120')],
            [t('برگه ثبت خدمات (SES)', 'Service entry sheet (SES)'), t('نماینده شرکت ثبت و مالک WBS تأیید می‌کند', 'Company man enters, WBS owner accepts'), t('تعهد کم، واقعی زیاد', 'Commitment down, actual up'), t('بدهکار 1510 (WBS)؛ بستانکار 2120', 'Dr 1510 (WBS); Cr 2120')],
            [t('فاکتور (تطبیق سه‌طرفه)', 'Invoice (three-way match)'), t('حساب‌های پرداختنی', 'Accounts payable'), t('فقط تفاوت قیمت', 'Price difference only'), t('بدهکار 2120 و تفاوت به WBS؛ بستانکار 2110', 'Dr 2120 and any difference to the WBS; Cr 2110')],
            [t('پرداخت', 'Payment'), t('خزانه‌داری', 'Treasury'), t('بی‌اثر', 'None'), t('بدهکار 2110؛ بستانکار 1110', 'Dr 2110; Cr 1110')],
            [t('تعهدی دستی پایان ماه', 'Manual month-end accrual'), t('حسابدار پروژه', 'Project accountant'), t('واقعی زیاد؛ تعهد خودبه‌خود کم نمی‌شود', 'Actual up; the commitment does not fall by itself'), t('بدهکار 1510؛ بستانکار 2130؛ برگشت خودکار روز اول ماه بعد', 'Dr 1510; Cr 2130; auto-reversed on day 1 of next month')],
          ],
        },
        { type: 'h', text: t('پایان ماه: GR/IR، تعهدی و گزارش تعهدات', 'Month end: GR/IR, accruals and the commitment report') },
        {
          type: 'p',
          text: t(
            'در پایان ماه دو فهرست کنار هم خوانده می‌شوند. **گزارش تعهدات** سفارش‌هایی را نشان می‌دهد که هنوز GRN یا SES نخورده‌اند: بدهی آینده. **مانده GR/IR** رسیدها و SESهایی را نشان می‌دهد که ثبت شده‌اند اما فاکتورشان هنوز نرسیده است: کالا یا خدمت دریافت شده و بدهی واقعاً ایجاد شده است. پس مانده بستانکار GR/IR خودش هزینه تعهدی «دریافت‌شده و فاکتورنشده» است و ثبت دستی نمی‌خواهد؛ به شرط آنکه همه GRNها و SESها پیش از بستن دوره ثبت شده باشند.',
            'At month end two lists are read side by side. The **commitment report** shows orders with no GRN or SES yet: future liabilities. The **GR/IR balance** shows receipts and SESs that are posted but not yet invoiced: the goods or services have been received and the liability really exists. So the GR/IR credit balance is itself the “received not invoiced” accrual and needs no manual entry, provided every GRN and SES was posted before the period closed.',
          ),
        },
        {
          type: 'journal',
          title: t('وقتی SES به موقع ثبت نشود (ماه 1، عنصر `.01`)', 'When an SES is not entered in time (month 1, element `.01`)'),
          entries: [
            {
              date: t('روز 30 ماه 1', 'Month 1, day 30'),
              lines: [
                { account: ac.auc('AFE-2025-014.01', '6110'), debit: 85000 },
                { account: ac.accrued, credit: 85000 },
              ],
              memo: t('آسفالت جاده دسترسی روز 30 تمام شد اما SES آن ثبت نشده است؛ حسابدار پروژه تعهدی دستی می‌زند.', 'Access-road surfacing finished on day 30 but its SES was not entered; the project accountant posts a manual accrual.'),
            },
            {
              date: t('روز 1 ماه 2', 'Month 2, day 1'),
              lines: [
                { account: ac.accrued, debit: 85000 },
                { account: ac.auc('AFE-2025-014.01', '6110'), credit: 85000 },
              ],
              memo: t('برگشت خودکار تعهدی.', 'Automatic reversal of the accrual.'),
            },
            {
              date: t('روز 3 ماه 2', 'Month 2, day 3'),
              lines: [
                { account: ac.auc('AFE-2025-014.01', '6110'), debit: 85000 },
                { account: ac.grir, credit: 85000 },
              ],
              memo: t('`SES-70388` ثبت می‌شود و تعهد سفارش پیمانکار راه‌سازی 85,000 کم می‌شود.', '`SES-70388` is entered and the road contractor’s PO commitment falls by 85,000.'),
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: t(
            'تعهدی دستی هزینه واقعی را درست می‌کند، اما در بیشتر ERPها تعهد سفارش را کم نمی‌کند؛ پس همان 85,000 در پایان ماه 1 هم در ستون واقعی و هم در ستون تعهد نشست و بودجه در دسترس 85,000 کمتر از واقع نشان داده شد. به همین دلیل بهترین روش این است که SES پیش از بستن دوره ثبت شود و تعهدی دستی فقط برای خدماتی بماند که سفارش ندارند.',
            'A manual accrual fixes actuals, but in most ERPs it does not reduce the PO commitment; so at the end of month 1 the same 85,000 sat in both the actual and the commitment columns, and the available budget looked 85,000 lower than it really was. That is why best practice is to enter the SES before the period closes and keep manual accruals for services that have no PO.',
          ),
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('پیوند با بازیافت هزینه', 'Link to cost recovery'),
          text: t(
            'هر GRN و SES کد WBS، نشانگر بازیافت (R) و طبقه هزینه (توسعه) را از سفارش به ارث می‌برد. حسابرس شرکا یا کارفرمای دولتی هر رقم صورت هزینه‌های قابل بازیافت را تا همین سندها دنبال می‌کند: سفارش، GRN یا SES همراه با گزارش روزانه حفاری و صورت‌وضعیت امضاشده، و فاکتور. هزینه‌ای که بدون سند یا با کد اشتباه ثبت شود، ممکن است در بازیافت هزینه پذیرفته نشود.',
            'Every GRN and SES inherits the WBS code, the recoverable flag (R) and the cost category (Development) from its PO. Partner and government auditors trace each figure in the cost-recovery statement back to these documents: the PO, the GRN or SES with the daily drilling report and the signed progress statement, and the invoice. A cost posted without documents or with the wrong code may be rejected in cost recovery.',
          ),
        },
      ],
    },
    {
      id: 'practice',
      title: t('اشتباه‌های رایج و تمرین', 'Common Mistakes and Practice'),
      blocks: [
        { type: 'h', text: t('اشتباه‌های رایج', 'Common mistakes') },
        {
          type: 'list',
          items: [
            t('**نگاه کردن فقط به هزینه واقعی**: بودجه را با هزینه واقعی مقایسه کردن و تعهدات را ندیدن. راه درست: بودجه در دسترس = بودجه − واقعی − تعهدات.', '**Looking at actuals only**: comparing budget with actuals and ignoring commitments. Fix: available = budget − actuals − commitments.'),
            t('**سفارش‌های باز فراموش‌شده**: سفارش‌هایی که کالایشان کامل رسیده یا کارشان لغو شده اما بسته نشده‌اند و بودجه را قفل کرده‌اند. راه درست: بازبینی ماهانه سفارش‌های باز قدیمی.', '**Forgotten open POs**: orders fully delivered or cancelled but never closed, locking budget. Fix: a monthly review of old open POs.'),
            t('**SES دیرهنگام**: ثبت خدمات دکل یا پیمانکار چند هفته پس از انجام کار؛ هزینه واقعی کم و تعهد زیاد نشان داده می‌شود و پیش‌بینی گمراه می‌شود. راه درست: SES هفتگی و پیش از بستن دوره.', '**Late SES**: entering rig or contractor services weeks after the work; actuals look low, commitments high and the forecast misleads. Fix: weekly SES, always before period close.'),
            t('**شکستن سفارش برای فرار از کنترل**: تقسیم یک خرید به چند سفارش کوچک یا ثبت آن روی WBS دیگری که بودجه دارد. این کار کنترل داخلی را دور می‌زند و هزینه را در صورت بازیافت هزینه به کد غلط می‌برد.', '**Splitting orders to dodge control**: breaking one purchase into small POs or charging another WBS that has budget. It bypasses internal control and puts the cost under the wrong code in cost recovery.'),
            t('**انتقال بر پایه مانده، نه پیش‌بینی**: خالی کردن عنصری که هنوز به پولش نیاز دارد.', '**Transferring on balance, not forecast**: emptying an element that still needs its money.'),
            t('**افزایش پس از خرج**: گرفتن AFE تکمیلی پس از اینکه پول خرج شده است. در مشارکت، شریک می‌تواند سهم خود از مبلغ مازاد بی‌مجوز را نپذیرد.', '**Supplement after the fact**: seeking a supplementary AFE after the money is spent. In a joint venture a partner may refuse its share of an unauthorised overrun.'),
          ],
        },
        { type: 'h', text: t('تمرین‌ها', 'Exercises') },
        {
          type: 'exercise',
          title: t('تمرین 1: بودجه در دسترس و واکنش ERP', 'Exercise 1: Available budget and the ERP response'),
          difficulty: 'easy',
          problem: t(
            'عنصر `AFE-2024-017.02` (خرید و نصب جداکننده آزمایش در ایستگاه تقویت فشار) وضعیت زیر را دارد. پروفایل تحمل: هشدار از 90٪ و توقف قطعی بیش از 100٪. (الف) بودجه در دسترس چقدر است؟ (ب) خریدار می‌خواهد سفارش تازه‌ای به مبلغ 150,000 برای عایق‌کاری ثبت کند (مستقل از درخواست باز). ERP چه واکنشی نشان می‌دهد؟ (ج) اگر به‌جای آن، همان درخواست باز 60,000 به سفارشی 90,000 تبدیل شود، چه می‌شود؟',
            'Element `AFE-2024-017.02` (buy and install a test separator at the compressor station) stands as below. Tolerance profile: warning from 90%, hard stop above 100%. (a) What is the available budget? (b) The buyer wants to create a new PO of 150,000 for insulation (separate from the open PR). How does the ERP respond? (c) If instead the open 60,000 PR is converted into a PO of 90,000, what happens?',
          ),
          given: {
            head: [t('قلم', 'Item'), t('مبلغ', 'Amount')],
            rows: [
              [t('بودجه', 'Budget'), 1200000],
              [t('هزینه واقعی', 'Actuals'), 640000],
              [t('تعهد سفارش‌های باز', 'Open PO commitments'), 380000],
              [t('درخواست خرید باز (تعهد اولیه)', 'Open requisition (pre-commitment)'), 60000],
            ],
          },
          hint: t(
            'تعهد اولیه درخواست خرید هم جزو مبلغ تخصیص‌یافته است. وقتی درخواست به سفارش تبدیل می‌شود، تعهد اولیه آزاد و تعهد سفارش جایگزین آن می‌شود.',
            'The requisition’s pre-commitment is part of the assigned amount. When the PR becomes a PO, the pre-commitment is released and the PO commitment replaces it.',
          ),
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: t('بودجه در دسترس', 'Available budget'),
                  text: t('1,200,000 − 640,000 − 380,000 − 60,000 = 120,000.', '1,200,000 − 640,000 − 380,000 − 60,000 = 120,000.'),
                },
                {
                  title: t('سفارش تازه 150,000', 'New PO of 150,000'),
                  text: t(
                    'درصد مصرف = (640,000 + 380,000 + 60,000 + 150,000) ÷ 1,200,000 = 1,230,000 ÷ 1,200,000 = 102.5٪. بیش از 100٪ است؛ توقف قطعی و سفارش ذخیره نمی‌شود. کسری 150,000 − 120,000 = 30,000 است.',
                    'Consumption = (640,000 + 380,000 + 60,000 + 150,000) ÷ 1,200,000 = 1,230,000 ÷ 1,200,000 = 102.5%. Above 100%: hard stop, the PO is not saved. The shortfall is 150,000 − 120,000 = 30,000.',
                  ),
                },
                {
                  title: t('تبدیل درخواست به سفارش 90,000', 'Converting the PR into a 90,000 PO'),
                  text: t(
                    'تعهد اولیه 60,000 آزاد و تعهد سفارش 90,000 ثبت می‌شود: (640,000 + 380,000 + 90,000) ÷ 1,200,000 = 1,110,000 ÷ 1,200,000 = 92.5٪. بین 90٪ و 100٪ است؛ سفارش با هشدار ذخیره می‌شود و بودجه در دسترس 90,000 می‌ماند.',
                    'The 60,000 pre-commitment is released and a 90,000 PO commitment is recorded: (640,000 + 380,000 + 90,000) ÷ 1,200,000 = 1,110,000 ÷ 1,200,000 = 92.5%. Between 90% and 100%: the PO is saved with a warning and 90,000 stays available.',
                  ),
                },
                {
                  title: t('چه باید کرد؟', 'What should be done?'),
                  text: t(
                    'برای سفارش عایق‌کاری باید یا 30,000 از عنصری با صرفه‌جویی پیش‌بینی‌شده منتقل شود یا افزایش بودجه تأیید شود. شکستن سفارش به دو سفارش کوچک‌تر راه‌حل نیست؛ ERP جمع را می‌سنجد و این کار دور زدن کنترل است.',
                    'For the insulation PO, either 30,000 is transferred from an element with a forecast saving or a supplement is approved. Splitting the PO into two smaller ones is no solution; the ERP checks the total and it would be a control bypass.',
                  ),
                },
              ],
            },
          ],
          answer: t('الف: 120,000؛ ب: 102.5٪ و توقف قطعی (کسری 30,000)؛ ج: 92.5٪ و هشدار.', '(a) 120,000; (b) 102.5% and a hard stop (30,000 short); (c) 92.5% and a warning.'),
        },
        {
          type: 'exercise',
          title: t('تمرین 2: تعهد، GRN و SES روی تکمیل چاه AR-09', 'Exercise 2: Commitments, GRN and SES on the AR-09 completion'),
          difficulty: 'medium',
          problem: t(
            'عنصر `AFE-2024-022.03` (تکمیل و آزمایش چاه AR-09) بودجه 1,500,000 دارد و هنوز هیچ هزینه یا تعهدی ندارد. رویدادهای ماه: (1) `PO-45302` تجهیزات تکمیل (پکر و آویزگاه لوله مغزی) 420,000، مستقیم به حساب WBS. (2) `PO-45330` فراخوان آزمایش چاه از قرارداد خدمات: 8 روز × 22,000. (3) `GRN-50402`: بخشی از تجهیزات به ارزش 300,000 رسید. (4) `SES-70455`: 5 روز آزمایش چاه پذیرفته شد. (5) فاکتور `GRN-50402` به مبلغ 306,000 رسید و 6,000 کرایه حمل اضافه تأیید شد. برای هر رویداد تعهد، هزینه واقعی و بودجه در دسترس را حساب کنید، ثبت‌های ERP را بنویسید و بگویید مانده GR/IR در پایان ماه چقدر است و چه معنایی دارد.',
            'Element `AFE-2024-022.03` (complete and test well AR-09) has a budget of 1,500,000 and no cost or commitment yet. The month’s events: (1) `PO-45302` completion equipment (packer and tubing hanger) 420,000, charged directly to the WBS. (2) `PO-45330` well-testing call-off under the services contract: 8 days × 22,000. (3) `GRN-50402`: part of the equipment worth 300,000 is received. (4) `SES-70455`: 5 days of well testing are accepted. (5) The invoice for `GRN-50402` arrives at 306,000 and 6,000 of extra freight is approved. For each event calculate commitments, actuals and available budget, write the ERP postings, and state the month-end GR/IR balance and what it means.',
          ),
          hint: t(
            'سفارش‌ها ثبت مالی ندارند. GRN و SES تعهد را به هزینه واقعی تبدیل می‌کنند و فاکتور فقط تفاوت قیمت را به هزینه اضافه می‌کند.',
            'POs post nothing. The GRN and SES convert commitment into actual, and the invoice adds only the price difference.',
          ),
          solution: [
            {
              type: 'table',
              head: [t('رویداد', 'Event'), t('تعهد', 'Commitment'), t('واقعی', 'Actual'), t('در دسترس', 'Available')],
              rows: [
                [t('1. `PO-45302`', '1. `PO-45302`'), 420000, 0, 1080000],
                [t('2. `PO-45330` (8 × 22,000 = 176,000)', '2. `PO-45330` (8 × 22,000 = 176,000)'), 596000, 0, 904000],
                [t('3. `GRN-50402`', '3. `GRN-50402`'), 296000, 300000, 904000],
                [t('4. `SES-70455` (5 × 22,000 = 110,000)', '4. `SES-70455` (5 × 22,000 = 110,000)'), 186000, 410000, 904000],
                [t('5. فاکتور 306,000', '5. Invoice 306,000'), 186000, 416000, 898000],
              ],
              numericCols: [1, 2, 3],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: t('3', '3'),
                  lines: [
                    { account: ac.auc('AFE-2024-022.03', '6150'), debit: 300000 },
                    { account: ac.grir, credit: 300000 },
                  ],
                  memo: t('`GRN-50402`', '`GRN-50402`'),
                },
                {
                  date: t('4', '4'),
                  lines: [
                    { account: ac.auc('AFE-2024-022.03', '6160'), debit: 110000 },
                    { account: ac.grir, credit: 110000 },
                  ],
                  memo: t('`SES-70455`', '`SES-70455`'),
                },
                {
                  date: t('5', '5'),
                  lines: [
                    { account: ac.grir, debit: 300000 },
                    { account: ac.auc('AFE-2024-022.03', '6150'), debit: 6000 },
                    { account: ac.ap, credit: 306000 },
                  ],
                  memo: t('تفاوت تأییدشده 6,000 به هزینه WBS اضافه می‌شود.', 'The approved 6,000 difference is added to the WBS cost.'),
                },
              ],
            },
            {
              type: 'steps',
              items: [
                {
                  title: t('مانده GR/IR', 'GR/IR balance'),
                  text: t(
                    '300,000 + 110,000 − 300,000 = 110,000 بستانکار؛ یعنی SES آزمایش چاه که خدمتش دریافت شده اما فاکتورش نرسیده است. این همان هزینه تعهدی «دریافت‌شده و فاکتورنشده» است و ثبت دستی نمی‌خواهد.',
                    '300,000 + 110,000 − 300,000 = 110,000 credit: the well-testing SES whose service was received but not yet invoiced. It is the “received not invoiced” accrual and needs no manual entry.',
                  ),
                },
                {
                  title: t('تعهد باقی‌مانده', 'Remaining commitment'),
                  text: t(
                    '186,000 = تجهیزات نرسیده 120,000 (420,000 − 300,000) + 3 روز آزمایش 66,000 (3 × 22,000).',
                    '186,000 = undelivered equipment 120,000 (420,000 − 300,000) + 3 testing days 66,000 (3 × 22,000).',
                  ),
                },
              ],
            },
          ],
          answer: t(
            'پایان ماه: تعهد 186,000، هزینه واقعی 416,000، بودجه در دسترس 898,000؛ مانده بستانکار GR/IR برابر 110,000 خدمات دریافت‌شده و فاکتورنشده است.',
            'Month end: commitments 186,000, actuals 416,000, available 898,000; the 110,000 GR/IR credit is services received but not yet invoiced.',
          ),
        },
        {
          type: 'exercise',
          title: t('تمرین 3: سند بودجه و مسیر تأیید', 'Exercise 3: Budget document and approval route'),
          difficulty: 'medium',
          problem: t(
            '`AFE-2024-022` (حفاری و تکمیل چاه AR-09) با بودجه اولیه 6,000,000 تصویب شده است: `.01` آماده‌سازی 400,000، `.02` حفاری 3,600,000، `.03` تکمیل 1,500,000 و `.04` خط جریان 500,000. سه درخواست تغییر رسیده است: (1) انتقال 120,000 از `.01` به `.02`؛ (2) افزایش 450,000 برای `.02` به دلیل هرزروی گل در یک لایه شکافدار؛ (3) برگشت 200,000 از `.04` چون مسیر خط جریان کوتاه‌تر شد. سیاست مسار پترولیوم: مجموع افزایش‌ها (بدون کسر برگشت‌ها) تا 10٪ AFE اولیه با تأیید مدیر دارایی؛ بیش از آن AFE تکمیلی با تأیید شرکا. (الف) بودجه جاری هر عنصر و جمع AFE را حساب کنید. (ب) مسیر تأیید افزایش را تعیین کنید. (ج) اگر ماه بعد افزایش دیگری به مبلغ 200,000 لازم شود، چه می‌شود؟',
            '`AFE-2024-022` (drill and complete well AR-09) was approved at an original 6,000,000: `.01` site preparation 400,000, `.02` drilling 3,600,000, `.03` completion 1,500,000 and `.04` flowline 500,000. Three change requests arrive: (1) transfer 120,000 from `.01` to `.02`; (2) a supplement of 450,000 for `.02` because of mud losses in a fractured zone; (3) a return of 200,000 from `.04` because the flowline route is shorter. Masar Petroleum policy: cumulative supplements (returns not netted) up to 10% of the original AFE are approved by the asset manager; beyond that a supplementary AFE needs partner approval. (a) Calculate the current budget of each element and of the AFE. (b) Determine the approval route for the supplement. (c) What happens if another 200,000 supplement is needed next month?',
          ),
          solution: [
            {
              type: 'table',
              caption: t('اعداد داخل پرانتز کاهش است', 'Figures in brackets are reductions'),
              head: [t('عنصر', 'Element'), t('اولیه', 'Original'), t('انتقال', 'Transfer'), t('افزایش', 'Supplement'), t('برگشت', 'Return'), t('جاری', 'Current')],
              rows: [
                [t('`.01`', '`.01`'), 400000, t('(120,000)', '(120,000)'), 0, 0, 280000],
                [t('`.02`', '`.02`'), 3600000, 120000, 450000, 0, 4170000],
                [t('`.03`', '`.03`'), 1500000, 0, 0, 0, 1500000],
                [t('`.04`', '`.04`'), 500000, 0, 0, t('(200,000)', '(200,000)'), 300000],
                [t('جمع', 'Total'), 6000000, 0, 450000, t('(200,000)', '(200,000)'), 6250000],
              ],
              numericCols: [1, 2, 3, 4, 5],
            },
            {
              type: 'steps',
              items: [
                {
                  title: t('مسیر تأیید', 'Approval route'),
                  text: t(
                    'مجموع افزایش‌ها 450,000 ÷ 6,000,000 = 7.5٪ است که از 10٪ کمتر است؛ مدیر دارایی تأیید می‌کند و شرکا در گزارش ماهانه باخبر می‌شوند. برگشت 200,000 از این درصد کم نمی‌شود، چون سیاست مجموع افزایش‌ها را جداگانه می‌سنجد.',
                    'Cumulative supplements are 450,000 ÷ 6,000,000 = 7.5%, below 10%; the asset manager approves and the partners are informed in the monthly report. The 200,000 return does not reduce this percentage, because the policy measures supplements on their own.',
                  ),
                },
                {
                  title: t('افزایش دوم', 'Second supplement'),
                  text: t(
                    '(450,000 + 200,000) ÷ 6,000,000 = 650,000 ÷ 6,000,000 = 10.8٪، بیش از 10٪. پیش از هر تعهد تازه روی این AFE، AFE تکمیلی باید به تأیید شرکا برسد؛ تا آن زمان کنترل در دسترس بودن بودجه سندهای اضافه را متوقف می‌کند.',
                    '(450,000 + 200,000) ÷ 6,000,000 = 650,000 ÷ 6,000,000 = 10.8%, above 10%. A supplementary AFE must be approved by the partners before any new commitment on this AFE; until then availability control blocks the extra documents.',
                  ),
                },
              ],
            },
          ],
          answer: t(
            'بودجه جاری 6,250,000؛ افزایش 7.5٪ با تأیید مدیر دارایی؛ افزایش دوم مجموع را به 10.8٪ می‌رساند و AFE تکمیلی با تأیید شرکا لازم است.',
            'Current budget 6,250,000; the 7.5% supplement is approved by the asset manager; a second one takes the total to 10.8% and needs a partner-approved supplementary AFE.',
          ),
        },
        {
          type: 'exercise',
          title: t('تمرین 4: پیش‌بینی، سفارش مرده و تصمیم بودجه', 'Exercise 4: Forecast, a dead PO and the budget decision'),
          difficulty: 'hard',
          problem: t(
            '`AFE-2024-019` (تعویض خنک‌کن گاز و اسکرابر ورودی ایستگاه تقویت فشار) بودجه 4,000,000 دارد. داده‌های پایان ماه در جدول آمده است. در بازبینی معلوم می‌شود 100,000 از تعهدات عنصر `.03` سفارش اجاره جرثقیلی است که دیگر لازم نیست (پیمانکار نصب طبق قراردادش جرثقیل خودش را می‌آورد)، اما هنوز بسته نشده است. (الف) ETC، EAC و VAC هر عنصر و جمع AFE را پیش و پس از بستن این سفارش حساب کنید. (ب) با سیاست 10٪ مسار پترولیوم، مسیر تأیید چیست؟ (ج) سندهای بودجه لازم را پیشنهاد دهید.',
            '`AFE-2024-019` (replace the gas cooler and inlet scrubber at the compressor station) has a budget of 4,000,000. The month-end data are in the table. A review finds that 100,000 of the `.03` commitments is a crane-rental PO that is no longer needed (the installation contractor brings its own crane under its contract) but has not been closed. (a) Calculate ETC, EAC and VAC for each element and for the AFE, before and after closing this PO. (b) Under Masar Petroleum’s 10% policy, what is the approval route? (c) Propose the budget documents needed.',
          ),
          given: {
            head: [t('عنصر', 'Element'), t('بودجه', 'Budget'), t('واقعی', 'Actual'), t('تعهد', 'Commitments'), t('کار تعهدنشده', 'Uncommitted work')],
            rows: [
              [t('`.01` مهندسی', '`.01` Engineering'), 400000, 380000, 0, 0],
              [t('`.02` بسته تجهیزات (به اضافه دستور تغییر فونداسیون)', '`.02` Equipment package (plus a foundation change order)'), 2200000, 1650000, 550000, 180000],
              [t('`.03` نصب و لوله‌کشی', '`.03` Installation and piping'), 1000000, 120000, 700000, 300000],
              [t('`.04` راه‌اندازی', '`.04` Commissioning'), 400000, 0, 0, 420000],
            ],
            numericCols: [1, 2, 3, 4],
          },
          hint: t('ETC = تعهد + کار تعهدنشده. سفارش مرده را از تعهدات کم کنید، نه از هزینه واقعی.', 'ETC = commitments + uncommitted work. Remove the dead PO from commitments, not from actuals.'),
          solution: [
            {
              type: 'table',
              caption: t('پیش از بستن سفارش جرثقیل؛ پرانتز یعنی فراتر رفتن از بودجه', 'Before closing the crane PO; brackets are overruns'),
              head: [t('عنصر', 'Element'), t('ETC', 'ETC'), t('EAC', 'EAC'), t('VAC', 'VAC')],
              rows: [
                [t('`.01`', '`.01`'), 0, 380000, 20000],
                [t('`.02`', '`.02`'), 730000, 2380000, t('(180,000)', '(180,000)')],
                [t('`.03`', '`.03`'), 1000000, 1120000, t('(120,000)', '(120,000)')],
                [t('`.04`', '`.04`'), 420000, 420000, t('(20,000)', '(20,000)')],
                [t('جمع', 'Total'), 2150000, 4300000, t('(300,000)', '(300,000)')],
              ],
              numericCols: [1, 2, 3],
            },
            {
              type: 'steps',
              items: [
                {
                  title: t('بستن سفارش مرده', 'Close the dead PO'),
                  text: t(
                    'خریدار سفارش جرثقیل را می‌بندد: تعهد `.03` از 700,000 به 600,000 می‌رسد. ETC عنصر `.03` = 600,000 + 300,000 = 900,000؛ EAC = 120,000 + 900,000 = 1,020,000؛ VAC = 1,000,000 − 1,020,000، یعنی 20,000 فراتر از بودجه.',
                    'The buyer closes the crane PO: `.03` commitments fall from 700,000 to 600,000. `.03` ETC = 600,000 + 300,000 = 900,000; EAC = 120,000 + 900,000 = 1,020,000; VAC = 1,000,000 − 1,020,000, an overrun of 20,000.',
                  ),
                },
                {
                  title: t('جمع AFE پس از اصلاح', 'AFE total after the fix'),
                  text: t(
                    'ETC = 2,150,000 − 100,000 = 2,050,000؛ EAC = 2,150,000 + 2,050,000 = 4,200,000؛ VAC = 4,000,000 − 4,200,000، یعنی 200,000 فراتر از بودجه یا 5٪. سفارش مرده پیش‌بینی را 100,000 بدتر از واقع نشان می‌داد.',
                    'ETC = 2,150,000 − 100,000 = 2,050,000; EAC = 2,150,000 + 2,050,000 = 4,200,000; VAC = 4,000,000 − 4,200,000, an overrun of 200,000, or 5%. The dead PO had made the forecast look 100,000 worse than reality.',
                  ),
                },
                {
                  title: t('مسیر تأیید', 'Approval route'),
                  text: t(
                    '200,000 ÷ 4,000,000 = 5٪، کمتر از 10٪؛ افزایش داخلی با تأیید مدیر دارایی و اطلاع به شرکا.',
                    '200,000 ÷ 4,000,000 = 5%, below 10%: an internal supplement approved by the asset manager, with the partners informed.',
                  ),
                },
                {
                  title: t('سندهای بودجه', 'Budget documents'),
                  text: t(
                    'انتقال 20,000 از `.01` (صرفه‌جویی قطعی) به `.03`؛ افزایش 180,000 برای `.02` و 20,000 برای `.04`. بودجه جاری: `.01` 380,000، `.02` 2,380,000، `.03` 1,020,000، `.04` 420,000؛ جمع 4,200,000 برابر EAC.',
                    'Transfer 20,000 from `.01` (a firm saving) to `.03`; supplement 180,000 for `.02` and 20,000 for `.04`. Current budget: `.01` 380,000, `.02` 2,380,000, `.03` 1,020,000, `.04` 420,000; total 4,200,000, equal to the EAC.',
                  ),
                },
              ],
            },
          ],
          answer: t(
            'پس از بستن سفارش جرثقیل: EAC = 4,200,000 و VAC برابر 200,000 فراتر از بودجه (5٪)؛ انتقال 20,000 از `.01` به `.03` و افزایش داخلی 200,000 (180,000 برای `.02` و 20,000 برای `.04`) با تأیید مدیر دارایی.',
            'After closing the crane PO: EAC = 4,200,000 and VAC is a 200,000 overrun (5%); transfer 20,000 from `.01` to `.03` and an internal supplement of 200,000 (180,000 to `.02`, 20,000 to `.04`) approved by the asset manager.',
          ),
        },
      ],
    },
    {
      id: 'summary',
      title: t('جمع‌بندی و واژه‌های کلیدی', 'Summary and Key Terms'),
      blocks: [
        {
          type: 'list',
          items: [
            t('بودجه در دسترس = بودجه − هزینه واقعی − تعهدات؛ ERP هر سند تازه را با مبلغ تخصیص‌یافته (واقعی + تعهد) می‌سنجد.', 'Available = budget − actuals − commitments; the ERP checks every new document against the assigned amount (actuals + commitments).'),
            t('درخواست خرید تعهد اولیه و سفارش خرید تعهد قطعی می‌سازد؛ هیچ‌کدام ثبتی در دفتر کل ندارند.', 'A requisition creates a pre-commitment and a PO a firm commitment; neither posts to the ledger.'),
            t('GRN برای کالا و SES برای خدمات تعهد را به هزینه واقعی تبدیل می‌کنند: بدهکار WBS (یا موجودی) و بستانکار GR/IR. فاکتور فقط تفاوت قیمت را جابه‌جا می‌کند.', 'A GRN for goods and an SES for services turn commitment into actual: debit the WBS (or inventory), credit GR/IR. The invoice only moves the price difference.'),
            t('مانده بستانکار GR/IR در پایان ماه همان هزینه دریافت‌شده و فاکتورنشده است؛ SES و GRN را پیش از بستن دوره ثبت کنید.', 'The month-end GR/IR credit is the received-not-invoiced accrual; post every GRN and SES before the period closes.'),
            t('کنترل در دسترس بودن بودجه با حدود تحمل هشدار و توقف قطعی کار می‌کند؛ تنها راه رسمی عبور از توقف، سند بودجه است.', 'Availability control works with warning and hard-stop tolerances; the only formal way past a hard stop is a budget document.'),
            t('انتقال جمع AFE را تغییر نمی‌دهد، افزایش آن را زیاد و برگشت آن را کم می‌کند؛ افزایش‌های بزرگ AFE تکمیلی با تأیید شرکا می‌خواهند.', 'A transfer leaves the AFE total unchanged, a supplement raises it and a return lowers it; large supplements need a partner-approved supplementary AFE.'),
            t('EAC = واقعی + ETC و VAC = بودجه − EAC؛ گزارش ماهانه بودجه، واقعی، تعهد، در دسترس و پیش‌بینی را کنار هم نشان می‌دهد.', 'EAC = actuals + ETC and VAC = budget − EAC; the monthly report shows budget, actuals, commitments, available and forecast side by side.'),
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            { term: t('تعهد (Commitment)', 'Commitment'), def: t('مبلغی که با سند تأییدشده قول خرجش داده شده اما کالایش نرسیده یا خدمتش تأیید نشده است.', 'An amount promised through an approved document whose goods have not arrived or service has not been accepted.') },
            { term: t('تعهد اولیه', 'Pre-commitment'), def: t('مبلغ برآوردی درخواست خرید که پیش از صدور سفارش از بودجه کنار گذاشته می‌شود.', 'The estimated value of a requisition, set aside from the budget before a PO is issued.') },
            { term: t('هزینه واقعی (Actual)', 'Actual cost'), def: t('هزینه‌ای که با GRN، SES، فاکتور یا سند حسابداری در دفتر کل ثبت شده است.', 'Cost posted to the ledger through a GRN, SES, invoice or journal entry.') },
            { term: t('بودجه در دسترس', 'Available budget'), def: t('بودجه منهای هزینه واقعی و تعهدات؛ پولی که هنوز آزاد است.', 'Budget less actuals and commitments; the money still free.') },
            { term: t('کنترل در دسترس بودن بودجه', 'Availability control'), def: t('بررسی خودکار هر سند تازه با بودجه در دسترس پیش از ذخیره.', 'The automatic check of every new document against the available budget before it is saved.') },
            { term: t('حد تحمل', 'Tolerance limit'), def: t('درصد مصرفی که از آن به بعد ERP هشدار می‌دهد یا سند را متوقف می‌کند.', 'The consumption percentage at which the ERP warns or blocks the document.') },
            { term: t('رسید کالا (GRN)', 'Goods received note (GRN)'), def: t('سند ثبت دریافت کالا که تعهد سفارش را کم و هزینه یا موجودی را زیاد می‌کند.', 'The document recording receipt of goods; it reduces the PO commitment and increases cost or inventory.') },
            { term: t('برگه ثبت خدمات (SES)', 'Service entry sheet (SES)'), def: t('سند تأیید خدمات انجام‌شده که برای خدمات همان نقش GRN را دارد.', 'The document accepting services performed; it plays the GRN’s role for services.') },
            { term: t('انتقال، افزایش و برگشت بودجه', 'Budget transfer, supplement and return'), def: t('سه نوع سند بودجه: جابه‌جایی میان عناصر، افزودن به جمع و آزاد کردن بودجه بی‌استفاده.', 'The three kinds of budget document: moving between elements, adding to the total and releasing unused budget.') },
            { term: t('AFE تکمیلی', 'Supplementary AFE'), def: t('مجوز افزایش AFE که وقتی افزایش از حد مجاز بگذرد، به تأیید شرکا نیاز دارد.', 'An AFE increase that needs partner approval once supplements exceed the allowed limit.') },
            { term: t('ETC و EAC', 'ETC and EAC'), def: t('برآورد هزینه از امروز تا تکمیل، و هزینه نهایی پیش‌بینی‌شده (واقعی + ETC).', 'The estimated cost from today to completion, and the forecast final cost (actuals + ETC).') },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: t('عنصری بودجه 2,600,000، هزینه واقعی 2,140,000 و تعهدات 276,000 دارد. بودجه در دسترس چقدر است؟', 'An element has a budget of 2,600,000, actuals of 2,140,000 and commitments of 276,000. What is the available budget?'),
      options: [t('460,000', '460,000'), t('184,000', '184,000'), t('2,324,000', '2,324,000'), t('276,000', '276,000')],
      answer: 1,
      explain: t(
        '2,600,000 − 2,140,000 − 276,000 = 184,000. پاسخ 460,000 وسوسه‌انگیز است، اما تعهدات را نادیده می‌گیرد؛ پولی که با سفارش قول داده شده دیگر آزاد نیست.',
        '2,600,000 − 2,140,000 − 276,000 = 184,000. 460,000 is tempting but ignores commitments; money promised through a PO is no longer free.',
      ),
    },
    {
      q: t('وقتی سفارش خرید 620,000 برای لوله جداری 9-5/8 اینچ روی WBS `AFE-2025-014.02.03` تأیید می‌شود، چه اتفاقی می‌افتد؟', 'When a 620,000 PO for 9-5/8" casing on WBS `AFE-2025-014.02.03` is approved, what happens?'),
      options: [
        t('بدهکار 1510 و بستانکار 2120، هر کدام 620,000', 'Debit 1510 and credit 2120, 620,000 each'),
        t('بدهکار 1510 و بستانکار 2110، هر کدام 620,000', 'Debit 1510 and credit 2110, 620,000 each'),
        t('تعهد سفارش 620,000 روی WBS ثبت می‌شود و دفتر کل تغییری نمی‌کند', 'A 620,000 PO commitment is recorded on the WBS and the ledger does not change'),
        t('هزینه واقعی WBS 620,000 زیاد می‌شود', 'WBS actuals rise by 620,000'),
      ],
      answer: 2,
      explain: t(
        'سفارش خرید هنوز رویداد مالی نیست؛ فقط تعهد می‌سازد. ثبت «بدهکار 1510، بستانکار 2120» درست است اما در لحظه GRN، نه هنگام تأیید سفارش. هزینه واقعی هم تا رسید کالا تغییر نمی‌کند.',
        'A PO is not yet a financial event; it only creates a commitment. “Debit 1510, credit 2120” is right, but at the GRN, not at PO approval. Actuals do not change until goods are received.',
      ),
    },
    {
      q: t('GRN به مبلغ 69,000 روی سفارشی ثبت می‌شود که تعهد آن 115,000 است. بودجه در دسترس WBS چه تغییری می‌کند؟', 'A GRN of 69,000 is posted against a PO with a 115,000 commitment. How does the WBS available budget change?'),
      options: [t('تغییر نمی‌کند', 'It does not change'), t('69,000 کم می‌شود', 'It falls by 69,000'), t('69,000 زیاد می‌شود', 'It rises by 69,000'), t('46,000 کم می‌شود', 'It falls by 46,000')],
      answer: 0,
      explain: t(
        'GRN تعهد را 69,000 کم و هزینه واقعی را 69,000 زیاد می‌کند؛ جمع این دو ثابت می‌ماند و بودجه در دسترس تغییر نمی‌کند. «69,000 کم می‌شود» خطای کسی است که فقط ستون واقعی را می‌بیند.',
        'The GRN lowers commitments by 69,000 and raises actuals by 69,000; their sum is unchanged, so the available budget does not move. “Falls by 69,000” is the mistake of someone who watches only the actual column.',
      ),
    },
    {
      q: t('بودجه 600,000، واقعی 400,000 و تعهد 100,000 است. درخواست تازه 70,000 ثبت می‌شود. با هشدار از 90٪ و توقف قطعی بیش از 100٪، ERP چه می‌کند؟', 'Budget is 600,000, actuals 400,000 and commitments 100,000. A new 70,000 requisition is entered. With a warning from 90% and a hard stop above 100%, what does the ERP do?'),
      options: [
        t('بدون پیام ذخیره می‌کند', 'Saves it with no message'),
        t('توقف قطعی، چون از بودجه در دسترس بیشتر است', 'Hard stop, because it exceeds the available budget'),
        t('توقف قطعی برای کل AFE', 'Hard stop on the whole AFE'),
        t('هشدار، چون مصرف 95٪ می‌شود', 'Warning, because consumption becomes 95%'),
      ],
      answer: 3,
      explain: t(
        '(400,000 + 100,000 + 70,000) ÷ 600,000 = 570,000 ÷ 600,000 = 95٪؛ بین 90٪ و 100٪، پس هشدار. بودجه در دسترس 100,000 است و 70,000 از آن بیشتر نیست، پس توقف قطعی رخ نمی‌دهد.',
        '(400,000 + 100,000 + 70,000) ÷ 600,000 = 570,000 ÷ 600,000 = 95%; between 90% and 100%, so a warning. The available budget is 100,000 and 70,000 does not exceed it, so there is no hard stop.',
      ),
    },
    {
      q: t('کدام سند بودجه جمع AFE را تغییر نمی‌دهد؟', 'Which budget document leaves the AFE total unchanged?'),
      options: [t('افزایش', 'Supplement'), t('انتقال', 'Transfer'), t('برگشت', 'Return'), t('AFE تکمیلی', 'Supplementary AFE')],
      answer: 1,
      explain: t(
        'انتقال بودجه را از یک عنصر کم و به عنصر دیگر اضافه می‌کند و جمع ثابت می‌ماند. افزایش و AFE تکمیلی جمع را زیاد و برگشت آن را کم می‌کند.',
        'A transfer takes budget from one element and gives it to another, so the total stays the same. A supplement and a supplementary AFE raise the total; a return lowers it.',
      ),
    },
    {
      q: t('عنصر خدمات حفاری: بودجه 600,000، واقعی 400,000، تعهد باز 100,000 و کار تعهدنشده 160,000. EAC و VAC کدام است؟', 'Drilling services element: budget 600,000, actuals 400,000, open commitments 100,000 and uncommitted work 160,000. What are EAC and VAC?'),
      options: [
        t('EAC برابر 500,000؛ صرفه‌جویی 100,000', 'EAC 500,000; saving 100,000'),
        t('EAC برابر 560,000؛ صرفه‌جویی 40,000', 'EAC 560,000; saving 40,000'),
        t('EAC برابر 660,000؛ فراتر از بودجه 60,000', 'EAC 660,000; overrun 60,000'),
        t('EAC برابر 760,000؛ فراتر از بودجه 160,000', 'EAC 760,000; overrun 160,000'),
      ],
      answer: 2,
      explain: t(
        'ETC = 100,000 + 160,000 = 260,000 و EAC = 400,000 + 260,000 = 660,000؛ VAC = 600,000 − 660,000، یعنی 60,000 فراتر از بودجه. گزینه 500,000 کار تعهدنشده را فراموش کرده است؛ همان خطایی که بودجه در دسترس را صرفه‌جویی می‌پندارد.',
        'ETC = 100,000 + 160,000 = 260,000 and EAC = 400,000 + 260,000 = 660,000; VAC = 600,000 − 660,000, a 60,000 overrun. 500,000 forgets the uncommitted work, the same error as treating available budget as a saving.',
      ),
    },
    {
      q: t('نماینده شرکت 7 روز دکل با نرخ 92,000 را در SES تأیید می‌کند. ERP چه ثبتی می‌زند؟', 'The company man accepts 7 rig days at 92,000 in an SES. What does the ERP post?'),
      options: [
        t('بدهکار 1510 (WBS دکل) و بستانکار 2120، هر کدام 644,000', 'Debit 1510 (rig WBS) and credit 2120, 644,000 each'),
        t('بدهکار 2120 و بستانکار 2110، هر کدام 644,000', 'Debit 2120 and credit 2110, 644,000 each'),
        t('هیچ ثبتی تا رسیدن فاکتور', 'Nothing until the invoice arrives'),
        t('بدهکار 5110 و بستانکار 1110، هر کدام 644,000', 'Debit 5110 and credit 1110, 644,000 each'),
      ],
      answer: 0,
      explain: t(
        'SES برای خدمات همان GRN است: 7 × 92,000 = 644,000 بدهکار WBS (دارایی در جریان تکمیل) و بستانکار GR/IR، و تعهد سفارش دکل به همین اندازه کم می‌شود. «بدهکار 2120، بستانکار 2110» ثبت فاکتور است که بعداً می‌آید.',
        'An SES is the GRN for services: 7 × 92,000 = 644,000 debited to the WBS (assets under construction) and credited to GR/IR, and the rig PO commitment falls by the same amount. “Debit 2120, credit 2110” is the invoice entry that comes later.',
      ),
    },
    {
      q: t('GRN به مبلغ 46,000 ثبت شده است. فاکتور 48,000 می‌رسد و تفاوت 2,000 (کرایه حمل) تأیید می‌شود. هزینه واقعی WBS در لحظه ثبت فاکتور چقدر تغییر می‌کند؟', 'A GRN of 46,000 has been posted. The invoice arrives at 48,000 and the 2,000 difference (freight) is approved. By how much do WBS actuals change when the invoice is posted?'),
      options: [t('48,000 افزایش', 'Up 48,000'), t('بدون تغییر', 'No change'), t('46,000 افزایش', 'Up 46,000'), t('2,000 افزایش', 'Up 2,000')],
      answer: 3,
      explain: t(
        '46,000 در لحظه GRN به هزینه رفته است. فاکتور 46,000 را از GR/IR صاف می‌کند و فقط تفاوت تأییدشده 2,000 را به WBS اضافه می‌کند. «48,000 افزایش» یعنی دو بار شمردن هزینه رسید.',
        'The 46,000 was charged at the GRN. The invoice clears 46,000 from GR/IR and adds only the approved 2,000 difference to the WBS. “Up 48,000” would count the receipt twice.',
      ),
    },
    {
      q: t('مانده بستانکار حساب GR/IR در پایان ماه چه چیزی را نشان می‌دهد؟', 'What does the month-end credit balance on GR/IR represent?'),
      options: [
        t('سفارش‌هایی که هنوز کالایشان نرسیده', 'POs whose goods have not yet arrived'),
        t('فاکتورهایی که پرداخت نشده‌اند', 'Invoices not yet paid'),
        t('کالا و خدماتی که با GRN یا SES دریافت شده‌اند اما فاکتورشان نرسیده است', 'Goods and services received through a GRN or SES but not yet invoiced'),
        t('بودجه آزاد پروژه', 'The project’s free budget'),
      ],
      answer: 2,
      explain: t(
        'GR/IR با GRN و SES بستانکار و با فاکتور بدهکار می‌شود؛ پس مانده آن دریافت‌شده و فاکتورنشده است، یعنی هزینه تعهدی. سفارش‌های نرسیده در گزارش تعهدات‌اند و فاکتورهای پرداخت‌نشده در حساب‌های پرداختنی.',
        'GR/IR is credited by GRNs and SESs and debited by invoices, so its balance is received but not invoiced: the accrual. Undelivered POs are in the commitment report, and unpaid invoices are in accounts payable.',
      ),
    },
    {
      q: t('AFE اولیه 6,000,000 است و تاکنون 450,000 افزایش داخلی گرفته شده است. حالا 200,000 دیگر لازم است. با سیاست «مجموع افزایش‌ها بیش از 10٪ نیازمند AFE تکمیلی با تأیید شرکا»، چه باید کرد؟', 'The original AFE is 6,000,000 and 450,000 of internal supplements have been approved. Another 200,000 is now needed. Under the policy “cumulative supplements above 10% need a partner-approved supplementary AFE”, what must happen?'),
      options: [
        t('مدیر دارایی تأیید می‌کند، چون 200,000 کمتر از 10٪ است', 'The asset manager approves, because 200,000 is below 10%'),
        t('AFE تکمیلی لازم است، چون مجموع افزایش‌ها 650,000 یعنی 10.8٪ می‌شود', 'A supplementary AFE is needed, because cumulative supplements become 650,000, or 10.8%'),
        t('تأیید لازم نیست، چون بودجه جاری هنوز تمام نشده است', 'No approval is needed while current budget remains'),
        t('با انتقال از هر عنصری که بودجه در دسترس دارد حل می‌شود', 'Transfer from any element that has available budget'),
      ],
      answer: 1,
      explain: t(
        'حد بر پایه مجموع افزایش‌ها سنجیده می‌شود: 650,000 ÷ 6,000,000 = 10.8٪. نگاه کردن به افزایش تازه به‌تنهایی (3.3٪) همان راه دور زدن سیاست است. انتقال فقط از عنصری درست است که صرفه‌جویی پیش‌بینی‌شده دارد، نه هر عنصری که بودجه در دسترس دارد.',
        'The limit is measured on cumulative supplements: 650,000 ÷ 6,000,000 = 10.8%. Looking at the new supplement alone (3.3%) is exactly how the policy gets bypassed. A transfer is only valid from an element with a forecast saving, not from any element that shows available budget.',
      ),
    },
  ],
}

function blank(): L {
  return { fa: '', en: '' }
}
