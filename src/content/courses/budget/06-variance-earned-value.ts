import type { L, Lesson } from '../../types'

const t = (fa: string, en: string): L => ({ fa, en })
const na = t('ندارد', 'n/a')

const ac = {
  auc: (wbs: string, ce: string) =>
    t(`1510 دارایی‌های در جریان تکمیل (WBS \`${wbs}\`، عنصر هزینه ${ce})`, `1510 Assets under construction (WBS \`${wbs}\`, cost element ${ce})`),
  accrued: t('2130 هزینه‌های تعهدی پرداختنی', '2130 Accrued liabilities'),
}

export const lesson: Lesson = {
  slug: 'variance-earned-value',
  number: 6,
  level: 'advanced',
  minutes: 32,
  icon: 'TrendingUp',
  tone: 'revenue',
  title: t('تحلیل انحراف و مدیریت ارزش کسب‌شده', 'Variance Analysis and Earned Value'),
  summary: t(
    'مقایسه ساده بودجه با هزینه واقعی می‌تواند گمراه‌کننده باشد: پروژه‌ای که «کمتر از بودجه» خرج کرده، ممکن است هم عقب باشد و هم گران. در این درس انحراف قیمت، مقدار و زمان را از هم جدا می‌کنید، مدیریت ارزش کسب‌شده (PV، EV، AC، CPI، SPI و EAC) را روی AFE چاه AR-07 با عدد کامل به کار می‌برید و یاد می‌گیرید انحراف را برای مدیریت و شرکا روشن و قابل دفاع توضیح دهید.',
    'A plain budget-versus-actual comparison can mislead: a project that has spent “less than budget” may be both late and expensive. In this lesson you separate price, quantity and timing variances, apply earned value management (PV, EV, AC, CPI, SPI and EAC) with full numbers to the AR-07 well AFE, and learn to explain variances to management and partners clearly and defensibly.',
  ),
  objectives: [
    t('انحراف کل را به انحراف قیمت، مقدار و زمان‌بندی تجزیه کنید و صاحب هر کدام را بشناسید.', 'Break a total variance into price, quantity and timing variances and identify who owns each.'),
    t('ارزش برنامه‌ریزی‌شده (PV)، ارزش کسب‌شده (EV) و هزینه واقعی (AC) را تعریف و EV را با روش مناسب سنجش پیشرفت حساب کنید.', 'Define planned value (PV), earned value (EV) and actual cost (AC), and calculate EV with a suitable progress method.'),
    t('CV، SV، CPI، SPI، EAC، ETC، VAC و TCPI را حساب و تفسیر کنید.', 'Calculate and interpret CV, SV, CPI, SPI, EAC, ETC, VAC and TCPI.'),
    t('پیش‌بینی پایین به بالا را با پیش‌بینی‌های مبتنی بر شاخص مقایسه کنید و دامنه‌ای واقع‌بینانه گزارش دهید.', 'Compare a bottom-up forecast with index-based forecasts and report a realistic range.'),
    t('تقویم گزارش‌دهی را بشناسید و انحراف را با ساختار «چه، چرا، اثر، اقدام، مسئول» برای مدیریت و شرکا توضیح دهید.', 'Know the reporting cadence and explain a variance to management and partners as “what, why, impact, action, owner”.'),
  ],
  sections: [
    {
      id: 'why-ev',
      title: t('خرج کردن با پیشرفت کار یکی نیست', 'Spending Is Not Progress'),
      blocks: [
        {
          type: 'p',
          text: t(
            'جلسه ماهانه کمیته عملیات مشترک است. مهندس هزینه شریک الف گزارش AFE چاه AR-07 را ورق می‌زند: «طبق برنامه تا پایان ماه 2 قرار بود 4,400,000 خرج شود و شما 4,000,000 خرج کرده‌اید. یعنی 400,000 زیر بودجه‌اید؛ تبریک!» کنترل‌کننده پروژه مسار پترولیوم سر تکان می‌دهد: «نه. ما هم عقب‌تر از برنامه‌ایم و هم برای کاری که انجام داده‌ایم بیش از بودجه‌اش خرج کرده‌ایم.» هر دو یک گزارش را می‌خوانند؛ فرقشان در یک عدد سوم است: **ارزش کاری که واقعاً انجام شده است**.',
            'It is the monthly operating committee meeting. Partner A’s cost engineer leafs through the AR-07 AFE report: “The plan said 4,400,000 would be spent by the end of month 2 and you have spent 4,000,000. So you are 400,000 under budget; congratulations!” Masar Petroleum’s project controller shakes his head: “No. We are behind schedule, and we have spent more than budget for the work we have done.” Both are reading the same report; the difference is a third number: **the value of the work actually done**.',
          ),
        },
        {
          type: 'p',
          text: t(
            'مقایسه «برنامه تا امروز» با «هزینه تا امروز» دو پرسش جدا را با هم قاطی می‌کند: آیا به اندازه برنامه کار کرده‌ایم (زمان‌بندی)؟ و آیا کار انجام‌شده را با هزینه بودجه‌شده‌اش انجام داده‌ایم (هزینه)؟ پروژه‌ای که عقب افتاده، طبیعتاً کمتر خرج می‌کند؛ این «صرفه‌جویی» نیست. **مدیریت ارزش کسب‌شده** (EVM: Earned Value Management) روشی استاندارد در کنترل پروژه است که با افزودن ارزش کار انجام‌شده، این دو پرسش را از هم جدا می‌کند.',
            'Comparing “plan to date” with “cost to date” mixes two separate questions: have we done as much work as planned (schedule)? And did the work we did cost what it was budgeted to cost (cost)? A late project naturally spends less; that is not a “saving”. **Earned value management (EVM)** is a standard project-control method that separates the two questions by adding the value of the work performed.',
          ),
        },
        {
          type: 'compare',
          left: {
            title: t('آنچه مقایسه بودجه با واقعی می‌گوید', 'What budget versus actual says'),
            items: [
              t('برنامه تا امروز 4,400,000؛ واقعی 4,000,000.', 'Plan to date 4,400,000; actual 4,000,000.'),
              t('«انحراف مطلوب» 400,000.', '“Favourable variance” of 400,000.'),
              t('نتیجه: همه چیز خوب است.', 'Conclusion: all is well.'),
            ],
          },
          right: {
            title: t('آنچه ارزش کسب‌شده می‌گوید', 'What earned value says'),
            items: [
              t('ارزش کار انجام‌شده فقط 3,520,000 است.', 'The work done is worth only 3,520,000.'),
              t('برای کاری به ارزش 3,520,000، مبلغ 4,000,000 خرج شده: 480,000 گران‌تر.', '4,000,000 was spent for work worth 3,520,000: 480,000 too expensive.'),
              t('کار انجام‌شده 880,000 کمتر از برنامه است: عقب‌افتادگی.', 'Work done is 880,000 behind the plan: a schedule slip.'),
            ],
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('در عمل', 'In practice'),
          text: t(
            'EVM در پروژه‌های بزرگ نفت و گاز، به‌ویژه پروژه‌های تأسیساتی و پیمان‌های EPC، رایج است و کارفرما معمولاً از پیمانکار گزارش ماهانه پیشرفت با منحنی S (منحنی تجمعی برنامه و واقعی) می‌خواهد. در حفاری، که هزینه بیشتر به زمان وابسته است، بهره‌بردارها معمولاً منحنی «عمق در برابر روز» و «هزینه در برابر روز» را دنبال می‌کنند؛ منطق آن همان EVM است.',
            'EVM is common on large oil and gas projects, especially facilities projects and EPC contracts, and owners usually require a monthly progress report with an S-curve (cumulative plan versus actual). In drilling, where cost is mostly driven by time, operators usually track “depth versus days” and “cost versus days” curves; the logic is the same as EVM.',
          ),
        },
      ],
    },
    {
      id: 'variance-types',
      title: t('انحراف‌ها: قیمت، مقدار و زمان‌بندی', 'Variances: Price, Quantity and Timing'),
      blocks: [
        {
          type: 'p',
          text: t(
            '**انحراف** (Variance) فاصله هزینه واقعی با هزینه بودجه‌شده است. در این دوره انحراف را **مطلوب** (F) می‌گوییم وقتی واقعی کمتر از بودجه است و **نامطلوب** (U) وقتی بیشتر است. یک عدد انحراف به‌تنهایی به کار مدیر نمی‌آید؛ باید بداند انحراف **از کجا** آمده، چون هر ریشه صاحب و راه‌حل خودش را دارد.',
            'A **variance** is the gap between actual cost and budgeted cost. In this course a variance is **favourable** (F) when actual is below budget and **unfavourable** (U) when it is above. A single variance number is of little use to a manager; they need to know **where** it came from, because each cause has its own owner and fix.',
          ),
        },
        {
          type: 'formula',
          text: t(
            'انحراف قیمت = (قیمت واقعی − قیمت بودجه) × مقدار واقعی؛   انحراف مقدار = (مقدار واقعی − مقدار بودجه) × قیمت بودجه',
            'Price variance = (Actual price − Budget price) × Actual quantity;   Quantity variance = (Actual quantity − Budget quantity) × Budget price',
          ),
          note: t('جمع این دو برابر انحراف کل است: هزینه واقعی − هزینه بودجه. مقدار بودجه باید برای **کار واقعاً انجام‌شده** باشد.', 'The two add up to the total variance: actual cost − budget cost. The budget quantity must be for the **work actually done**.'),
        },
        { type: 'h', text: t('مثال: باریت در مقطع 12-1/4 اینچ چاه AR-07', 'Example: barite in the AR-07 12-1/4" section') },
        {
          type: 'table',
          caption: t('قرارداد خدمات گل، باریت را با نرخ واحد صورت‌حساب می‌کند (عنصر `.02.02`)', 'The mud services contract bills barite at a unit rate (element `.02.02`)'),
          head: [t('قلم', 'Item'), t('مقدار (تن)', 'Quantity (t)'), t('نرخ', 'Rate'), t('مبلغ', 'Amount')],
          rows: [
            [t('بودجه برای مقطع حفرشده (طبق برنامه گل)', 'Budget for the section drilled (mud programme)'), 500, 400, 200000],
            [t('واقعی', 'Actual'), 560, 425, 238000],
            [t('انحراف قیمت: (425 − 400) × 560', 'Price variance: (425 − 400) × 560'), t('', ''), t('', ''), t('14,000 U', '14,000 U')],
            [t('انحراف مقدار: (560 − 500) × 400', 'Quantity variance: (560 − 500) × 400'), t('', ''), t('', ''), t('24,000 U', '24,000 U')],
            [t('انحراف کل: 238,000 − 200,000', 'Total variance: 238,000 − 200,000'), t('', ''), t('', ''), t('38,000 U', '38,000 U')],
          ],
          numericCols: [1, 2, 3],
        },
        {
          type: 'p',
          text: t(
            'دو انحراف، دو صاحب. انحراف قیمت 14,000 مال تدارکات است: پیمانکار گل به دلیل افزایش هزینه حمل، نرخ را بر پایه بند تعدیل قرارداد بالا برده است؛ پرسش این است که آیا تعدیل طبق قرارداد بوده است. انحراف مقدار 24,000 مال مهندسی حفاری است: هرزروی گل در یک لایه شکافدار باعث شد وزن گل بیشتر و باریت بیشتری لازم شود. اگر هر دو را با هم «38,000 بیش از بودجه» گزارش کنید، هیچ‌کس نمی‌داند باید چه کند.',
            'Two variances, two owners. The 14,000 price variance belongs to procurement: the mud contractor raised the rate under the contract’s adjustment clause because of higher transport costs; the question is whether the adjustment followed the contract. The 24,000 quantity variance belongs to drilling engineering: losses into a fractured zone required a heavier mud and more barite. Report both together as “38,000 over budget” and nobody knows what to do.',
          ),
        },
        { type: 'h', text: t('انحراف زمان‌بندی: پولی که دیر یا زود خرج می‌شود', 'Timing variance: money spent early or late') },
        {
          type: 'p',
          text: t(
            '**انحراف زمان‌بندی** (Timing variance) وقتی پیش می‌آید که هزینه زودتر یا دیرتر از ماهی که در بودجه زمان‌بندی‌شده آمده، رخ دهد؛ مبلغ نهایی تغییر نمی‌کند. مثال: در بودجه 2026 مرکز هزینه `CC-ARY-PRD`، بررسی سالانه یکپارچگی چاه‌ها (120,000) برای ماه 3 زمان‌بندی شده، اما پیمانکار آن را در ماه 5 انجام می‌دهد. گزارش ماه 3 مرکز هزینه 120,000 «صرفه‌جویی» نشان می‌دهد و گزارش ماه 5 همان‌قدر «اضافه‌خرج». هیچ‌کدام واقعی نیست. انحراف زمان‌بندی را باید جدا گزارش کرد تا با صرفه‌جویی یا اضافه‌خرج دائمی اشتباه نشود.',
            'A **timing variance** arises when a cost happens earlier or later than the month it was phased in the budget; the final amount does not change. Example: in the 2026 budget of cost centre `CC-ARY-PRD`, the annual well-integrity survey (120,000) is phased in month 3, but the contractor will do it in month 5. The month-3 cost-centre report shows a 120,000 “saving” and month 5 shows the same amount “overspent”. Neither is real. Timing variances must be reported separately so they are not mistaken for permanent savings or overruns.',
          ),
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل', 'In practice'),
          text: t(
            'در توضیح انحراف ماهانه، هر عدد را با یکی از این برچسب‌ها همراه کنید: **قیمت** (نرخ قرارداد، ارز، تعدیل)، **مقدار** (مصرف یا روز بیشتر)، **محدوده** (کار تازه‌ای که در AFE نبوده)، یا **زمان‌بندی** (جابه‌جایی در تقویم). در حفاری، بزرگ‌ترین قلم معمولاً «روز دکل × نرخ روزانه» است؛ پس انحراف دکل را همیشه به «روز اضافه» (مقدار) و «تغییر نرخ» (قیمت) تجزیه کنید.',
            'In the monthly variance commentary, tag every number with one of these labels: **price** (contract rate, currency, escalation), **quantity** (more usage or more days), **scope** (new work that was not in the AFE) or **timing** (a shift in the calendar). In drilling, the biggest item is usually “rig days × day rate”, so always split a rig variance into “extra days” (quantity) and “rate change” (price).',
          ),
        },
      ],
    },
    {
      id: 'ev-basics',
      title: t('سه عدد پایه: PV، EV و AC', 'The Three Base Numbers: PV, EV and AC'),
      blocks: [
        {
          type: 'p',
          text: t(
            'EVM با سه عدد کار می‌کند که همگی با واحد پول بیان می‌شوند. **بودجه در تکمیل** (BAC: Budget at Completion) بودجه کل کار است؛ برای AFE چاه AR-07 همان 8,800,000. **ارزش برنامه‌ریزی‌شده** (PV: Planned Value) بودجه کاری است که طبق برنامه پایه باید تا امروز انجام می‌شد. **ارزش کسب‌شده** (EV: Earned Value) بودجه کاری است که واقعاً انجام شده است. **هزینه واقعی** (AC: Actual Cost) پولی است که برای همان کار در دفتر کل ثبت شده است.',
            'EVM works with three numbers, all in money. The **budget at completion (BAC)** is the total budget of the work; for the AR-07 AFE it is 8,800,000. **Planned value (PV)** is the budget of the work the baseline plan says should be done by today. **Earned value (EV)** is the budget of the work actually done. **Actual cost (AC)** is the money posted to the ledger for that work.',
          ),
        },
        {
          type: 'formula',
          text: t('EV = درصد پیشرفت واقعی × BAC عنصر', 'EV = Actual % complete × element BAC'),
          note: t('EV را با بودجه می‌سنجیم، نه با هزینه واقعی؛ برای همین می‌توان آن را با PV و AC مقایسه کرد.', 'EV is measured in budget terms, not actual cost; that is what makes it comparable with both PV and AC.'),
        },
        {
          type: 'table',
          caption: t('روش‌های سنجش پیشرفت', 'Progress measurement methods'),
          head: [t('روش', 'Method'), t('چگونه', 'How'), t('نمونه نفت و گاز', 'Oil and gas example')],
          rows: [
            [t('نقاط عطف وزن‌دار', 'Weighted milestones'), t('هر نقطه عطف وزنی دارد؛ با رسیدن به آن، وزنش کسب می‌شود', 'Each milestone carries a weight, earned when it is reached'), t('مقاطع چاه: نصب لوله جداری هر مقطع', 'Well sections: each casing string set')],
            [t('واحدهای تکمیل‌شده', 'Units completed'), t('مقدار انجام‌شده ÷ مقدار کل', 'Quantity done ÷ total quantity'), t('متر خط لوله جوشکاری‌شده، تعداد شیر نصب‌شده', 'Metres of pipeline welded, valves installed')],
            [t('درصد تخمینی', 'Estimated percent'), t('برآورد مهندس مسئول، با شواهد', 'The responsible engineer’s estimate, with evidence'), t('مهندسی طراحی تأسیسات', 'Facilities design engineering')],
            [t('صفر/صد یا 50/50', '0/100 or 50/50'), t('صفر تا پایان کار، یا نصف در شروع و نصف در پایان', 'Nothing until finished, or half at start and half at finish'), t('آزمایش چاه کوتاه، بازرسی', 'A short well test, an inspection')],
            [t('سطح تلاش (LOE)', 'Level of effort (LOE)'), t('EV برابر PV؛ پیشرفت مستقل ندارد', 'EV equals PV; no independent progress'), t('مدیریت و نظارت پروژه', 'Project management and supervision')],
          ],
        },
        { type: 'h', text: t('سنجش پیشرفت حفاری AR-07 با نقاط عطف', 'Measuring AR-07 drilling progress with milestones') },
        {
          type: 'table',
          caption: t('وزن نقاط عطف عنصر دکل `.02.01` (تجمعی)', 'Milestone weights for the rig element `.02.01` (cumulative)'),
          head: [t('نقطه عطف', 'Milestone'), t('وزن تجمعی', 'Cumulative weight'), t('وضعیت در پایان ماه 2', 'Status at end of month 2')],
          rows: [
            [t('انتقال دکل، نصب و شروع حفاری (Spud)', 'Rig move, rig-up and spud'), t('15٪', '15%'), t('انجام شد', 'Done')],
            [t('مقطع 17-1/2 اینچ و نصب لوله جداری 13-3/8 اینچ', '17-1/2" section and 13-3/8" casing set'), t('35٪', '35%'), t('انجام شد', 'Done')],
            [t('مقطع 12-1/4 اینچ و نصب لوله جداری 9-5/8 اینچ', '12-1/4" section and 9-5/8" casing set'), t('60٪', '60%'), t('انجام شد', 'Done')],
            [t('حفاری مقطع 8-1/2 اینچ تا عمق نهایی (TD)', '8-1/2" section drilled to total depth (TD)'), t('85٪', '85%'), t('در جریان؛ لوله در 2,850 متری گیر کرده', 'In progress; pipe stuck at 2,850 m')],
            [t('نمودارگیری، نصب و سیمان‌کاری لاینر 7 اینچ، آزادسازی دکل', 'Logging, 7" liner run and cemented, rig release'), t('100٪', '100%'), t('مانده', 'Remaining')],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: t(
            'AC باید کامل و هم‌زمان با EV باشد: همه GRNها، SESها، کارکردها و تعهدی‌های کار انجام‌شده تا تاریخ گزارش ثبت شده باشند. **تعهدات جزو AC نیستند**؛ سفارشی که هنوز تحویل نشده، کاری انجام نداده است. اگر SES روزهای آخر ماه دیر ثبت شود، AC کم نشان داده می‌شود و CPI به‌ظاهر خوب می‌شود.',
            'AC must be complete and aligned with EV: every GRN, SES, timesheet and accrual for work done up to the report date must be posted. **Commitments are not part of AC**; an order not yet delivered has done no work. If the SES for the last days of the month is entered late, AC is understated and CPI looks better than it is.',
          ),
        },
      ],
    },
    {
      id: 'ev-formulas',
      title: t('انحراف‌ها، شاخص‌ها و پیش‌بینی', 'Variances, Indices and Forecasts'),
      blocks: [
        {
          type: 'formula',
          text: t('انحراف هزینه CV = EV − AC؛   انحراف زمان‌بندی SV = EV − PV', 'Cost variance CV = EV − AC;   Schedule variance SV = EV − PV'),
          note: t('مقدار منفی یعنی نامطلوب: CV منفی گران‌تر از بودجه، SV منفی عقب‌تر از برنامه.', 'A negative value is unfavourable: negative CV means over cost, negative SV means behind schedule.'),
        },
        {
          type: 'formula',
          text: t('شاخص عملکرد هزینه CPI = EV ÷ AC؛   شاخص عملکرد زمان‌بندی SPI = EV ÷ PV', 'Cost performance index CPI = EV ÷ AC;   Schedule performance index SPI = EV ÷ PV'),
        },
        {
          type: 'formula',
          text: t(
            'EAC = BAC ÷ CPI؛   EAC = AC + (BAC − EV)؛   EAC = AC + (BAC − EV) ÷ (CPI × SPI)؛   EAC = AC + ETC پایین به بالا',
            'EAC = BAC ÷ CPI;   EAC = AC + (BAC − EV);   EAC = AC + (BAC − EV) ÷ (CPI × SPI);   EAC = AC + bottom-up ETC',
          ),
          note: t(
            'فرمول اول فرض می‌کند کارایی گذشته ادامه می‌یابد؛ دومی فرض می‌کند بقیه کار با نرخ بودجه انجام می‌شود؛ سومی فرض می‌کند فشار زمان‌بندی هم هزینه را بالا می‌برد؛ چهارمی برآورد تازه مهندسان است.',
            'The first assumes past efficiency continues; the second that the rest of the work is done at budget rates; the third that schedule pressure also drives cost; the fourth is the engineers’ fresh estimate.',
          ),
        },
        {
          type: 'formula',
          text: t('ETC = EAC − AC؛   VAC = BAC − EAC؛   TCPI = (BAC − EV) ÷ (BAC − AC)', 'ETC = EAC − AC;   VAC = BAC − EAC;   TCPI = (BAC − EV) ÷ (BAC − AC)'),
          note: t(
            '**TCPI** (شاخص عملکرد لازم برای تکمیل) می‌گوید از امروز به بعد با چه کارایی باید کار کنیم تا در BAC تمام شود. TCPI بالاتر از حدود 1.1 معمولاً واقع‌بینانه نیست.',
            '**TCPI** (to-complete performance index) says what efficiency the remaining work needs to finish within BAC. A TCPI above about 1.1 is rarely realistic.',
          ),
        },
        {
          type: 'table',
          caption: t('تفسیر شاخص‌ها', 'Reading the indices'),
          head: [t('مقدار', 'Value'), t('CPI', 'CPI'), t('SPI', 'SPI')],
          rows: [
            [t('بیشتر از 1', 'Above 1'), t('ارزان‌تر از بودجه: هر 1 خرج، بیش از 1 ارزش کار داده است', 'Under cost: each 1 spent earned more than 1 of work'), t('جلوتر از برنامه', 'Ahead of schedule')],
            [t('برابر 1', 'Equal to 1'), t('طبق بودجه', 'On budget'), t('طبق برنامه', 'On schedule')],
            [t('کمتر از 1', 'Below 1'), t('گران‌تر از بودجه: CPI برابر 0.88 یعنی هر 1 خرج، 0.88 ارزش کار داده است', 'Over cost: a CPI of 0.88 means each 1 spent earned 0.88 of work'), t('عقب‌تر از برنامه: SPI برابر 0.80 یعنی 80٪ کار برنامه‌ریزی‌شده انجام شده است', 'Behind schedule: an SPI of 0.80 means 80% of the planned work is done')],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: t(
            'SPI محدودیتی دارد: در پایان پروژه، EV و PV هر دو به BAC می‌رسند و SPI خودبه‌خود 1 می‌شود، حتی اگر پروژه ماه‌ها دیر تمام شده باشد. پس برای زمان، SPI را کنار برنامه زمان‌بندی (مسیر بحرانی و تاریخ نقاط عطف) بخوانید، نه به‌جای آن.',
            'SPI has a limit: at the end of a project EV and PV both reach BAC and SPI becomes 1, even if the project finished months late. For time, read SPI alongside the schedule (critical path and milestone dates), not instead of it.',
          ),
        },
      ],
    },
    {
      id: 'ar07-example',
      title: t('مثال کامل: AFE چاه AR-07', 'Full Example: the AR-07 Well AFE'),
      blocks: [
        {
          type: 'p',
          text: t(
            'وضعیت `AFE-2025-014` در پایان ماه 2 را با EVM می‌خوانیم. BAC همان بودجه اولیه 8,800,000 است. PV از برنامه پایه‌ای می‌آید که هنگام تصویب AFE ثابت شد؛ EV از وضعیت نقاط عطف و درصد پیشرفت هر عنصر؛ و AC همان هزینه واقعی گزارش ماهانه در درس کنترل بودجه و تعهدات است.',
            'We read `AFE-2025-014` at the end of month 2 with EVM. BAC is the original budget of 8,800,000. PV comes from the baseline plan frozen at AFE approval; EV from the milestone status and percent complete of each element; and AC is the actual cost from the monthly report in the lesson on budget control and commitments.',
          ),
        },
        {
          type: 'table',
          caption: t('PV، EV و AC به تفکیک عنصر WBS در پایان ماه 2', 'PV, EV and AC by WBS element at the end of month 2'),
          head: [t('عنصر WBS', 'WBS element'), t('BAC', 'BAC'), t('PV', 'PV'), t('پیشرفت', 'Progress'), t('EV', 'EV'), t('AC', 'AC')],
          rows: [
            [t('`.01` آماده‌سازی محل', '`.01` Site preparation'), 400000, 400000, t('100٪', '100%'), 400000, 390000],
            [t('`.02.01` دکل', '`.02.01` Rig'), 2600000, 2140000, t('60٪', '60%'), 1560000, 2140000],
            [t('`.02.02` خدمات حفاری', '`.02.02` Drilling services'), 600000, 480000, t('70٪', '70%'), 420000, 400000],
            [t('`.02.03` لوله جداری و OCTG', '`.02.03` Casing and tubulars'), 1900000, 1380000, t('60٪', '60%'), 1140000, 1070000],
            [t('`.03` تکمیل و آزمایش', '`.03` Completion and testing'), 2300000, 0, t('0٪', '0%'), 0, 0],
            [t('`.04` خط جریان و اتصال', '`.04` Flowline and tie-in'), 1000000, 0, t('0٪', '0%'), 0, 0],
            [t('جمع', 'Total'), 8800000, 4400000, t('40٪', '40%'), 3520000, 4000000],
          ],
          numericCols: [1, 2, 3, 4, 5],
        },
        {
          type: 'table',
          caption: t('انحراف‌ها و شاخص‌ها؛ اعداد داخل پرانتز نامطلوب است', 'Variances and indices; figures in brackets are unfavourable'),
          head: [t('عنصر WBS', 'WBS element'), t('CV = EV − AC', 'CV = EV − AC'), t('SV = EV − PV', 'SV = EV − PV'), t('CPI', 'CPI'), t('SPI', 'SPI')],
          rows: [
            [t('`.01`', '`.01`'), 10000, 0, 1.03, 1.0],
            [t('`.02.01`', '`.02.01`'), t('(580,000)', '(580,000)'), t('(580,000)', '(580,000)'), 0.73, 0.73],
            [t('`.02.02`', '`.02.02`'), 20000, t('(60,000)', '(60,000)'), 1.05, 0.88],
            [t('`.02.03`', '`.02.03`'), 70000, t('(240,000)', '(240,000)'), 1.07, 0.83],
            [t('`.03` و `.04`', '`.03` and `.04`'), 0, 0, na, na],
            [t('جمع', 'Total'), t('(480,000)', '(480,000)'), t('(880,000)', '(880,000)'), 0.88, 0.8],
          ],
          numericCols: [1, 2, 3, 4],
        },
        {
          type: 'steps',
          items: [
            {
              title: t('انحراف‌ها', 'Variances'),
              text: t(
                'CV = 3,520,000 − 4,000,000، یعنی منفی 480,000: برای کار انجام‌شده 480,000 بیش از بودجه‌اش خرج شده است. SV = 3,520,000 − 4,400,000، یعنی منفی 880,000: کاری به ارزش 880,000 از برنامه عقب است.',
                'CV = 3,520,000 − 4,000,000 = −480,000: the work done cost 480,000 more than its budget. SV = 3,520,000 − 4,400,000 = −880,000: work worth 880,000 is behind the plan.',
              ),
            },
            {
              title: t('شاخص‌ها', 'Indices'),
              text: t('CPI = 3,520,000 ÷ 4,000,000 = 0.88؛ SPI = 3,520,000 ÷ 4,400,000 = 0.80.', 'CPI = 3,520,000 ÷ 4,000,000 = 0.88; SPI = 3,520,000 ÷ 4,400,000 = 0.80.'),
            },
            {
              title: t('سه EAC مبتنی بر شاخص', 'Three index-based EACs'),
              text: t(
                'BAC ÷ CPI = 8,800,000 ÷ 0.88 = 10,000,000. AC + (BAC − EV) = 4,000,000 + 5,280,000 = 9,280,000. AC + (BAC − EV) ÷ (CPI × SPI) = 4,000,000 + 5,280,000 ÷ 0.704 = 4,000,000 + 7,500,000 = 11,500,000.',
                'BAC ÷ CPI = 8,800,000 ÷ 0.88 = 10,000,000. AC + (BAC − EV) = 4,000,000 + 5,280,000 = 9,280,000. AC + (BAC − EV) ÷ (CPI × SPI) = 4,000,000 + 5,280,000 ÷ 0.704 = 4,000,000 + 7,500,000 = 11,500,000.',
              ),
            },
            {
              title: t('ETC، VAC و TCPI', 'ETC, VAC and TCPI'),
              text: t(
                'با EAC برابر 10,000,000: ETC = 10,000,000 − 4,000,000 = 6,000,000 و VAC = 8,800,000 − 10,000,000، یعنی منفی 1,200,000. TCPI = (8,800,000 − 3,520,000) ÷ (8,800,000 − 4,000,000) = 5,280,000 ÷ 4,800,000 = 1.10.',
                'With an EAC of 10,000,000: ETC = 10,000,000 − 4,000,000 = 6,000,000 and VAC = 8,800,000 − 10,000,000 = −1,200,000. TCPI = (8,800,000 − 3,520,000) ÷ (8,800,000 − 4,000,000) = 5,280,000 ÷ 4,800,000 = 1.10.',
              ),
            },
          ],
        },
        {
          type: 'table',
          caption: t('مقایسه پیش‌بینی‌ها؛ اعداد داخل پرانتز فراتر رفتن از بودجه است', 'Comparing the forecasts; figures in brackets are overruns'),
          head: [t('روش', 'Method'), t('EAC', 'EAC'), t('VAC', 'VAC'), t('فرض اصلی', 'Key assumption')],
          rows: [
            [t('پایین به بالا (گزارش ماهانه)', 'Bottom-up (monthly report)'), 8994000, t('(194,000)', '(194,000)'), t('4 روز دکل اضافه و سیمان‌کاری اضافه لاینر؛ بقیه طبق قرارداد', '4 extra rig days and an extra liner cement job; the rest per contract')],
            [t('AC + (BAC − EV)', 'AC + (BAC − EV)'), 9280000, t('(480,000)', '(480,000)'), t('بقیه کار با نرخ بودجه', 'Remaining work at budget rates')],
            [t('BAC ÷ CPI', 'BAC ÷ CPI'), 10000000, t('(1,200,000)', '(1,200,000)'), t('ناکارایی تا امروز ادامه می‌یابد', 'Inefficiency so far continues')],
            [t('با CPI × SPI', 'With CPI × SPI'), 11500000, t('(2,700,000)', '(2,700,000)'), t('عقب‌افتادگی هم هزینه را بالا می‌برد', 'Delay also drives cost up')],
          ],
          numericCols: [1, 2],
        },
        {
          type: 'p',
          text: t(
            'تفسیر حرفه‌ای این است: مشکل تقریباً همه در ردیف دکل است (CV منفی 580,000 از کل منفی 480,000؛ بقیه عناصر کمی مطلوب‌اند). PV و AC دکل هر دو 2,140,000 است؛ یعنی مقایسه ساده بودجه با واقعی روی این ردیف «صفر انحراف» نشان می‌دهد، در حالی که 20 روز دکل فقط 60٪ ارزش کار داده است. پیش‌بینی پایین به بالا (8,994,000) از EAC دوم (9,280,000) کمتر است؛ دلیلش این است که روش نقاط عطف برای مقطع 8-1/2 اینچ که تا 2,850 متر حفر شده هیچ اعتباری نمی‌دهد و EV دکل را کمتر از واقع نشان می‌دهد. پس کنترل‌کننده EAC رسمی را 8,994,000 گزارش می‌کند، اما دامنه ریسک تا 10,000,000 را هم کنار آن می‌گذارد و یادآوری می‌کند که برای ماندن در بودجه اولیه، بقیه کار باید با کارایی 1.10 انجام شود که واقع‌بینانه نیست.',
            'The professional reading: almost the whole problem is the rig line (CV of −580,000 against a total of −480,000; the other elements are slightly favourable). PV and AC on the rig are both 2,140,000, so a plain budget-versus-actual comparison shows “zero variance” on this line, while 20 rig days have earned only 60% of the work. The bottom-up forecast (8,994,000) is below the second EAC (9,280,000) because the milestone method gives no credit for the 8-1/2" section already drilled to 2,850 m and so understates the rig’s EV. The controller therefore reports an official EAC of 8,994,000, shows a risk range up to 10,000,000 next to it, and points out that staying within the original budget would need a TCPI of 1.10, which is not realistic.',
          ),
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('حفاری: هزینه تابع زمان است', 'Drilling: cost follows time'),
          text: t(
            'در قرارداد روزکار، هزینه دکل و خدمات وابسته (نماینده شرکت، گل، نمودارگیری گل، اردوگاه) هر روز می‌چرخد، چه پیشرفت باشد چه نباشد. پس در حفاری، SPI پایین تقریباً همیشه CPI را هم پایین می‌کشد. اینکه CPI ردیف دکل دقیقاً برابر SPI آن است (0.73) تصادفی نیست: AC دکل همان PV آن است، چون هزینه دقیقاً به اندازه روزهای برنامه‌ریزی‌شده خرج شده، اما پیشرفت نه.',
            'Under a day-rate contract, the rig and its spread (company man, mud, mud logging, camp) cost money every day whether or not there is progress. So in drilling a low SPI almost always drags CPI down too. It is no coincidence that the rig line’s CPI equals its SPI (0.73): the rig’s AC equals its PV, because exactly the planned days were spent, but not the planned progress.',
          ),
        },
      ],
    },
    {
      id: 'reporting',
      title: t('ERP، تقویم گزارش و توضیح انحراف به مدیریت و شرکا', 'The ERP, Reporting Cadence and Explaining Variances'),
      blocks: [
        {
          type: 'p',
          text: t(
            'EVM خودش هیچ ثبتی در دفتر کل ندارد؛ یک لایه گزارشی روی داده‌های ERP است. اما کیفیتش کاملاً به کیفیت همان داده‌ها وابسته است: PV از نسخه برنامه پایه، EV از ثبت پیشرفت و AC از ماژول مالی.',
            'EVM posts nothing to the general ledger; it is a reporting layer on top of ERP data. Its quality, however, depends entirely on that data: PV from the baseline plan version, EV from progress entry and AC from Finance.',
          ),
        },
        {
          type: 'table',
          caption: t('منبع هر عدد در ERP', 'Where each number comes from in the ERP'),
          head: [t('عدد', 'Number'), t('منبع در ERP', 'Source in the ERP'), t('چه کسی', 'Who'), t('ثبت مالی', 'Finance posting')],
          rows: [
            [t('BAC و PV', 'BAC and PV'), t('نسخه بودجه «پایه 0» که هنگام تصویب AFE ثابت می‌شود، با زمان‌بندی ماهانه', 'Budget version “baseline 0”, frozen at AFE approval, phased by month'), t('کنترل‌کننده پروژه', 'Project controller'), t('ندارد', 'None')],
            [t('EV', 'EV'), t('ثبت پیشرفت روی عنصر WBS یا فعالیت: تاریخ نقاط عطف یا درصد پیشرفت', 'Progress entry on the WBS element or activity: milestone dates or percent complete'), t('مهندس حفاری یا نماینده شرکت', 'Drilling engineer or company man'), t('ندارد', 'None')],
            [t('AC', 'AC'), t('GRN، SES، فاکتور، کارکرد و تعهدی روی WBS', 'GRNs, SESs, invoices, timesheets and accruals on the WBS'), t('انبار، مالک WBS، حساب‌های پرداختنی، حسابدار پروژه', 'Warehouse, WBS owner, accounts payable, project accountant'), t('دارد', 'Yes')],
            [t('ETC و EAC', 'ETC and EAC'), t('نسخه پیش‌بینی که هر ماه به‌روز می‌شود', 'A forecast version updated every month'), t('کنترل‌کننده با مهندسان', 'Controller with the engineers'), t('ندارد', 'None')],
          ],
        },
        {
          type: 'journal',
          title: t('تعهدی پایان ماه برای کامل کردن AC (خدمتی بدون سفارش)', 'Month-end accrual to complete AC (a service without a PO)'),
          entries: [
            {
              date: t('روز 30 ماه 2', 'Month 2, day 30'),
              lines: [
                { account: ac.auc('AFE-2025-014.02.02', '6130'), debit: 18000 },
                { account: ac.accrued, credit: 18000 },
              ],
              memo: t(
                'خدمات اضطراری نمودارگیری گل در 3 روز آخر ماه، بدون سفارش و بنابراین بدون SES؛ این مبلغ در AC برابر 4,000,000 گنجانده شده است.',
                'Emergency mud-logging services in the last 3 days of the month, with no PO and therefore no SES; this amount is included in the AC of 4,000,000.',
              ),
            },
            {
              date: t('روز 1 ماه 3', 'Month 3, day 1'),
              lines: [
                { account: ac.accrued, debit: 18000 },
                { account: ac.auc('AFE-2025-014.02.02', '6130'), credit: 18000 },
              ],
              memo: t('برگشت خودکار؛ فاکتور واقعی در ماه 3 ثبت می‌شود.', 'Automatic reversal; the real invoice is posted in month 3.'),
            },
          ],
        },
        {
          type: 'table',
          caption: t('تقویم گزارش‌دهی AFE چاه AR-07', 'Reporting cadence for the AR-07 AFE'),
          head: [t('دوره', 'Frequency'), t('گزارش', 'Report'), t('مخاطب', 'Audience'), t('محتوا', 'Content')],
          rows: [
            [t('روزانه', 'Daily'), t('گزارش روزانه حفاری (DDR) با برآورد هزینه روز', 'Daily drilling report (DDR) with the day’s cost estimate'), t('سرپرست و مدیر حفاری', 'Drilling superintendent and manager'), t('عمق، روز، هزینه روز و هزینه تجمعی برآوردی', 'Depth, days, daily and cumulative estimated cost')],
            [t('هفتگی', 'Weekly'), t('گزارش سریع هزینه و پیشرفت', 'Cost and progress flash'), t('مدیر پروژه و مدیر دارایی', 'Project and asset managers'), t('روزهای دکل، SESهای ثبت‌نشده، تعهدات تازه', 'Rig days, SESs not yet entered, new commitments')],
            [t('ماهانه', 'Monthly'), t('گزارش AFE و EVM پس از بستن ماه', 'AFE and EVM report after month-end close'), t('مدیریت و شرکا', 'Management and partners'), t('بودجه، واقعی، تعهد، EAC، CPI، SPI و توضیح انحراف‌ها', 'Budget, actuals, commitments, EAC, CPI, SPI and variance commentary')],
            [t('فصلی', 'Quarterly'), t('جلسه کمیته عملیات مشترک', 'Operating committee meeting'), t('شرکا', 'Partners'), t('وضعیت AFEها، افزایش‌ها و پیشرفت WP&B', 'AFE status, supplements and WP&B progress')],
            [t('سالانه', 'Annual'), t('عملکرد WP&B و WP&B سال بعد', 'WP&B performance and next year’s WP&B'), t('شرکا و کارفرمای دولتی', 'Partners and the state counterparty'), t('بودجه در برابر واقعی به تفکیک طبقه و هزینه‌های قابل بازیافت', 'Budget versus actual by category, and recoverable costs')],
          ],
        },
        { type: 'h', text: t('چگونه یک انحراف را توضیح دهیم', 'How to explain a variance') },
        {
          type: 'steps',
          items: [
            { title: t('چه', 'What'), text: t('مبلغ و درصد، با برچسب مطلوب یا نامطلوب و نام عنصر WBS.', 'Amount and percentage, labelled favourable or unfavourable, with the WBS element.') },
            { title: t('چرا', 'Why'), text: t('ریشه، با برچسب قیمت، مقدار، محدوده یا زمان‌بندی؛ با واقعیت فنی، نه کلی‌گویی.', 'The root cause, tagged price, quantity, scope or timing; with technical facts, not generalities.') },
            { title: t('اثر', 'Impact'), text: t('اثر بر EAC، تاریخ تولید، شرکا، تأیید لازم و بازیافت هزینه.', 'Effect on EAC, first-production date, partners, approvals needed and cost recovery.') },
            { title: t('اقدام', 'Action'), text: t('چه کرده‌ایم و چه خواهیم کرد؛ از جمله سند بودجه لازم.', 'What we have done and will do, including any budget document needed.') },
            { title: t('مسئول و تاریخ', 'Owner and date'), text: t('چه کسی، تا کی.', 'Who, and by when.') },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: t('توضیح انحراف ردیف دکل در گزارش ماهانه', 'Rig-line variance comment in the monthly report'),
          text: t(
            '**چه**: `.02.01` دکل؛ CV منفی 580,000 و SV منفی 580,000 (CPI و SPI برابر 0.73). **چرا**: گیر کردن لوله در عمق 2,850 متری مقطع 8-1/2 اینچ از روز 17؛ انحراف مقدار (روز اضافه) با نرخ قراردادی 92,000؛ انحراف قیمت ندارد. **اثر**: 4 روز دکل اضافه (368,000)؛ EAC عنصر 2,784,000 (184,000 بیش از بودجه)؛ EAC کل AFE برابر 8,994,000 (2.2٪ بیش از بودجه) با دامنه ریسک تا 10,000,000؛ شروع تولید حدود 4 روز دیرتر. **اقدام**: انتقال 50,000 و افزایش داخلی 134,000 با تأیید مدیر دارایی؛ بازبینی روش حفاری در لایه‌های ناپایدار. **مسئول**: سرپرست حفاری، تا پایان ماه 3.',
            '**What**: `.02.01` rig; CV −580,000 and SV −580,000 (CPI and SPI 0.73). **Why**: stuck pipe at 2,850 m in the 8-1/2" section from day 17; a quantity variance (extra days) at the contract rate of 92,000; no price variance. **Impact**: 4 extra rig days (368,000); element EAC 2,784,000 (184,000 over budget); AFE EAC 8,994,000 (2.2% over) with a risk range up to 10,000,000; first production about 4 days late. **Action**: transfer of 50,000 and internal supplement of 134,000 approved by the asset manager; review of the drilling practice in unstable formations. **Owner**: drilling superintendent, by the end of month 3.',
          ),
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('در عمل: شرکا و کارفرمای دولتی', 'In practice: partners and the state counterparty'),
          text: t(
            'شرکا طبق JOA حق حسابرسی دارند و انحراف‌های بزرگ را دقیق می‌خوانند؛ گزارش زودهنگام و صادقانه اعتماد می‌سازد و پنهان کردن انحراف تا جلسه بعد، آن را از بین می‌برد. بسیاری از بهره‌بردارها آستانه‌ای برای توضیح اجباری دارند (مثلاً انحراف بیش از 10٪ و بیش از 50,000؛ ارقام نمونه). در قراردادهای نفتی ایران، گزارش عملکرد بودجه سالانه و صورت هزینه‌های قابل بازیافت معمولاً به کارفرمای دولتی یا کمیته مدیریت مشترک داده می‌شود و هزینه‌ای که بدون توضیح و سند از بودجه مصوب فراتر رفته، ممکن است در بازیافت هزینه پذیرفته نشود؛ جزئیات را در قرارداد خودتان ببینید.',
            'Under the JOA partners have audit rights and read large variances carefully; early, honest reporting builds trust, while hiding a variance until the next meeting destroys it. Many operators set a threshold for mandatory explanation (for example variances above 10% and above 50,000; illustrative). Under Iranian petroleum contracts, the annual budget performance report and the cost-recovery statement usually go to the state counterparty or a joint management committee, and cost that exceeded the approved budget without explanation and evidence may be rejected in cost recovery; check the details in your own contract.',
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
            t('**کم‌خرجی را صرفه‌جویی دانستن**: کمتر از برنامه خرج کردن ممکن است فقط عقب‌افتادگی باشد. همیشه EV را کنار PV و AC بگذارید.', '**Calling underspend a saving**: spending less than plan may just mean being late. Always put EV next to PV and AC.'),
            t('**گذاشتن تعهدات در AC**: سفارش تحویل‌نشده کاری انجام نداده است؛ AC فقط GRN، SES، کارکرد و تعهدی کار انجام‌شده است.', '**Putting commitments into AC**: an undelivered order has done no work; AC is only GRNs, SESs, timesheets and accruals for work done.'),
            t('**درصد پیشرفت بر پایه پول خرج‌شده**: «50٪ بودجه خرج شده، پس 50٪ کار انجام شده» EV را برابر AC می‌کند و CPI را همیشه 1 نشان می‌دهد.', '**Percent complete from money spent**: “50% of budget spent, so 50% done” makes EV equal AC and CPI always 1.'),
            t('**جابه‌جا کردن نشانه‌ها**: CV = EV − AC و SV = EV − PV؛ همیشه EV اول می‌آید.', '**Mixing up the signs**: CV = EV − AC and SV = EV − PV; EV always comes first.'),
            t('**قاطی کردن انحراف زمان‌بندی با دائمی**: کاری که به ماه بعد رفته، صرفه‌جویی نیست.', '**Mixing timing and permanent variances**: work moved to next month is not a saving.'),
            t('**گزارش فقط یک EAC**: پیش‌بینی بدون دامنه، ریسک را پنهان می‌کند. EAC رسمی را با دامنه مبتنی بر شاخص گزارش دهید.', '**Reporting a single EAC**: a forecast without a range hides risk. Report the official EAC with an index-based range.'),
          ],
        },
        { type: 'h', text: t('تمرین‌ها', 'Exercises') },
        {
          type: 'exercise',
          title: t('تمرین 1: انحراف قیمت و مقدار سیمان', 'Exercise 1: Cement price and quantity variances'),
          difficulty: 'easy',
          problem: t(
            'برای سیمان‌کاری لوله جداری 9-5/8 اینچ چاه AR-09، برنامه 900 کیسه سیمان با نرخ 30 پیش‌بینی کرده بود. پیمانکار 1,050 کیسه با نرخ 28 مصرف و صورت‌حساب کرد (حجم چاه به دلیل ریزش دیواره بیشتر شد). انحراف قیمت، مقدار و کل را حساب کنید و صاحب هر کدام را بگویید.',
            'For cementing the 9-5/8" casing on well AR-09, the programme planned 900 sacks at a rate of 30. The contractor used and billed 1,050 sacks at 28 (the hole volume was larger because of washouts). Calculate the price, quantity and total variances, and name the owner of each.',
          ),
          solution: [
            {
              type: 'table',
              head: [t('قلم', 'Item'), t('محاسبه', 'Calculation'), t('نتیجه', 'Result')],
              rows: [
                [t('بودجه', 'Budget'), t('900 × 30', '900 × 30'), 27000],
                [t('واقعی', 'Actual'), t('1,050 × 28', '1,050 × 28'), 29400],
                [t('انحراف قیمت', 'Price variance'), t('(28 − 30) × 1,050', '(28 − 30) × 1,050'), t('2,100 F', '2,100 F')],
                [t('انحراف مقدار', 'Quantity variance'), t('(1,050 − 900) × 30', '(1,050 − 900) × 30'), t('4,500 U', '4,500 U')],
                [t('انحراف کل', 'Total variance'), t('29,400 − 27,000', '29,400 − 27,000'), t('2,400 U', '2,400 U')],
              ],
              numericCols: [2],
            },
            {
              type: 'p',
              text: t(
                'انحراف قیمت مطلوب (2,100) کار تدارکات است که نرخ بهتری گرفته است؛ انحراف مقدار نامطلوب (4,500) مال مهندسی حفاری است، چون ریزش دیواره حجم چاه را زیاد کرد. جمع: 4,500 − 2,100 = 2,400 نامطلوب، برابر 29,400 − 27,000.',
                'The favourable price variance (2,100) is procurement’s, which secured a better rate; the unfavourable quantity variance (4,500) is drilling engineering’s, because washouts enlarged the hole. Net: 4,500 − 2,100 = 2,400 unfavourable, equal to 29,400 − 27,000.',
              ),
            },
          ],
          answer: t('انحراف قیمت 2,100 مطلوب، انحراف مقدار 4,500 نامطلوب، انحراف کل 2,400 نامطلوب.', 'Price variance 2,100 F, quantity variance 4,500 U, total 2,400 U.'),
        },
        {
          type: 'exercise',
          title: t('تمرین 2: EV با نقاط عطف و شاخص‌ها', 'Exercise 2: EV from milestones, and the indices'),
          difficulty: 'medium',
          problem: t(
            'عنصر حفاری `AFE-2024-022.02` چاه AR-09 بودجه 2,400,000 دارد. وزن تجمعی نقاط عطف: شروع حفاری 10٪، لوله جداری سطحی 30٪، لوله جداری میانی 55٪، عمق نهایی 85٪، لاینر و آزادسازی دکل 100٪. در تاریخ گزارش، لوله جداری میانی نصب شده و حفاری مقطع آخر در جریان است. PV طبق برنامه پایه 1,650,000 و AC برابر 1,500,000 است. EV، CV، SV، CPI و SPI را حساب و وضعیت را تفسیر کنید.',
            'Drilling element `AFE-2024-022.02` on well AR-09 has a budget of 2,400,000. Cumulative milestone weights: spud 10%, surface casing 30%, intermediate casing 55%, total depth 85%, liner and rig release 100%. At the report date the intermediate casing is set and the last section is being drilled. PV from the baseline is 1,650,000 and AC is 1,500,000. Calculate EV, CV, SV, CPI and SPI and interpret the position.',
          ),
          hint: t('در روش نقاط عطف، فقط نقطه عطفی که کامل شده اعتبار دارد.', 'With milestones, only completed milestones earn credit.'),
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('EV', 'EV'), text: t('آخرین نقطه عطف کامل‌شده لوله جداری میانی (55٪) است: EV = 55٪ × 2,400,000 = 1,320,000.', 'The last completed milestone is intermediate casing (55%): EV = 55% × 2,400,000 = 1,320,000.') },
                { title: t('انحراف‌ها', 'Variances'), text: t('CV = 1,320,000 − 1,500,000، یعنی منفی 180,000. SV = 1,320,000 − 1,650,000، یعنی منفی 330,000.', 'CV = 1,320,000 − 1,500,000 = −180,000. SV = 1,320,000 − 1,650,000 = −330,000.') },
                { title: t('شاخص‌ها', 'Indices'), text: t('CPI = 1,320,000 ÷ 1,500,000 = 0.88؛ SPI = 1,320,000 ÷ 1,650,000 = 0.80.', 'CPI = 1,320,000 ÷ 1,500,000 = 0.88; SPI = 1,320,000 ÷ 1,650,000 = 0.80.') },
                {
                  title: t('تفسیر', 'Interpretation'),
                  text: t(
                    'هم گران‌تر و هم عقب‌تر از برنامه. اما چون حفاری مقطع آخر در جریان است و روش نقاط عطف به آن اعتباری نمی‌دهد، EV کمی کمتر از واقع است؛ پیش از نتیجه‌گیری، عمق فعلی را با عمق نهایی مقایسه کنید. با این حال در حفاری روزکار، SPI برابر 0.80 هشدار جدی برای CPI ماه‌های بعد است.',
                    'Both over cost and behind schedule. But because the last section is being drilled and milestones give it no credit, EV is somewhat understated; compare the current depth with total depth before concluding. Even so, under a day-rate contract an SPI of 0.80 is a serious warning for next months’ CPI.',
                  ),
                },
              ],
            },
          ],
          answer: t('EV = 1,320,000؛ CV منفی 180,000؛ SV منفی 330,000؛ CPI = 0.88؛ SPI = 0.80.', 'EV = 1,320,000; CV = −180,000; SV = −330,000; CPI = 0.88; SPI = 0.80.'),
        },
        {
          type: 'exercise',
          title: t('تمرین 3: کدام EAC را گزارش کنیم؟', 'Exercise 3: Which EAC should we report?'),
          difficulty: 'medium',
          problem: t(
            '`AFE-2024-030` (ارتقای واحد نم‌زدایی گاز با گلایکول در ایستگاه تقویت فشار) BAC برابر 4,000,000 دارد. در پایان ماه 6: PV = 2,500,000، EV = 2,000,000 و AC = 2,500,000. پیمانکار و مهندس پروژه برای بقیه کار ETC پایین به بالای 1,900,000 داده‌اند. (الف) CPI، SPI، سه EAC مبتنی بر شاخص و TCPI را حساب کنید. (ب) EAC پایین به بالا را حساب و نقد کنید. (ج) با سیاست 10٪ مسار پترولیوم، چه پیشنهادی به مدیریت می‌دهید؟',
            '`AFE-2024-030` (upgrade of the glycol gas dehydration unit at the compressor station) has a BAC of 4,000,000. At the end of month 6: PV = 2,500,000, EV = 2,000,000 and AC = 2,500,000. The contractor and project engineer give a bottom-up ETC of 1,900,000 for the remaining work. (a) Calculate CPI, SPI, the three index-based EACs and TCPI. (b) Calculate and challenge the bottom-up EAC. (c) Under Masar Petroleum’s 10% policy, what do you recommend to management?',
          ),
          solution: [
            {
              type: 'steps',
              items: [
                { title: t('شاخص‌ها', 'Indices'), text: t('CPI = 2,000,000 ÷ 2,500,000 = 0.80؛ SPI = 2,000,000 ÷ 2,500,000 = 0.80.', 'CPI = 2,000,000 ÷ 2,500,000 = 0.80; SPI = 2,000,000 ÷ 2,500,000 = 0.80.') },
                {
                  title: t('EACهای مبتنی بر شاخص', 'Index-based EACs'),
                  text: t(
                    'BAC ÷ CPI = 4,000,000 ÷ 0.80 = 5,000,000. AC + (BAC − EV) = 2,500,000 + 2,000,000 = 4,500,000. AC + (BAC − EV) ÷ (CPI × SPI) = 2,500,000 + 2,000,000 ÷ 0.64 = 2,500,000 + 3,125,000 = 5,625,000.',
                    'BAC ÷ CPI = 4,000,000 ÷ 0.80 = 5,000,000. AC + (BAC − EV) = 2,500,000 + 2,000,000 = 4,500,000. AC + (BAC − EV) ÷ (CPI × SPI) = 2,500,000 + 2,000,000 ÷ 0.64 = 2,500,000 + 3,125,000 = 5,625,000.',
                  ),
                },
                { title: t('TCPI', 'TCPI'), text: t('(4,000,000 − 2,000,000) ÷ (4,000,000 − 2,500,000) = 2,000,000 ÷ 1,500,000 = 1.33؛ دست‌نیافتنی.', '(4,000,000 − 2,000,000) ÷ (4,000,000 − 2,500,000) = 2,000,000 ÷ 1,500,000 = 1.33; unachievable.') },
                {
                  title: t('نقد پیش‌بینی پایین به بالا', 'Challenge the bottom-up forecast'),
                  text: t(
                    'EAC = 2,500,000 + 1,900,000 = 4,400,000؛ حتی کمتر از 4,500,000 که فرض می‌کند بقیه کار درست با نرخ بودجه انجام شود. یعنی برآورد می‌گوید کار باقی‌مانده 100,000 ارزان‌تر از بودجه‌اش تمام می‌شود، در حالی که تا امروز CPI برابر 0.80 بوده است. باید دلیل بخواهید: آیا بخش گران کار تمام شده؟ آیا قیمت‌ها قفل شده‌اند؟ اگر دلیل محکمی نباشد، این برآورد خوش‌بینانه است.',
                    'EAC = 2,500,000 + 1,900,000 = 4,400,000; even below the 4,500,000 that assumes the remaining work at exactly budget rates. So the estimate says the remaining work will cost 100,000 less than its budget, while CPI so far has been 0.80. Ask for the reason: has the expensive part finished? Are prices locked? Without a solid reason, the estimate is optimistic.',
                  ),
                },
                {
                  title: t('پیشنهاد', 'Recommendation'),
                  text: t(
                    'دامنه واقع‌بینانه 4,500,000 تا 5,000,000 است؛ یعنی 500,000 تا 1,000,000 بیش از بودجه (12.5٪ تا 25٪). حتی پایین دامنه از 10٪ بیشتر است؛ پس پیش از هر تعهد تازه، AFE تکمیلی با توضیح کامل انحراف به تأیید شرکا برسد.',
                    'A realistic range is 4,500,000 to 5,000,000, that is 500,000 to 1,000,000 over budget (12.5% to 25%). Even the bottom of the range exceeds 10%, so a supplementary AFE with a full variance explanation must be approved by the partners before any new commitment.',
                  ),
                },
              ],
            },
          ],
          answer: t(
            'CPI = SPI = 0.80؛ EACها 5,000,000، 4,500,000 و 5,625,000؛ TCPI = 1.33؛ EAC پایین به بالا 4,400,000 خوش‌بینانه است؛ AFE تکمیلی لازم است.',
            'CPI = SPI = 0.80; EACs of 5,000,000, 4,500,000 and 5,625,000; TCPI = 1.33; the bottom-up EAC of 4,400,000 is optimistic; a supplementary AFE is needed.',
          ),
        },
        {
          type: 'exercise',
          title: t('تمرین 4: کم‌خرجی که در واقع اضافه‌خرج است', 'Exercise 4: An underspend that is really an overspend'),
          difficulty: 'hard',
          problem: t(
            'گزارش چهار ماه اول سال 2025 مرکز هزینه `CC-ARY-MNT` (نگهداری و تعمیرات میدان) در جدول آمده است. تعمیر اساسی پمپ آب آتش‌نشانی که برای ماه 3 زمان‌بندی شده بود، به ماه 7 رفته است. قطعات یدکی شامل 35,000 برای تعمیر اضطراری آب‌بند یک پمپ است که در برنامه نبود. (الف) انحراف کل چقدر است و ظاهر گزارش چه می‌گوید؟ (ب) انحراف روغن را به قیمت و مقدار تجزیه کنید. (ج) هر انحراف را برچسب بزنید و انحراف «واقعی» بدون اثر زمان‌بندی را حساب کنید. (د) یک توضیح یک‌خطی برای گزارش بنویسید.',
            'The first-four-months 2025 report for cost centre `CC-ARY-MNT` (field maintenance) is in the table. The fire-water pump overhaul phased for month 3 has moved to month 7. Spare parts include 35,000 for an emergency pump-seal repair that was not planned. (a) What is the total variance, and what does the report appear to say? (b) Split the lube-oil variance into price and quantity. (c) Tag each variance and calculate the “real” variance without the timing effect. (d) Write a one-line comment for the report.',
          ),
          given: {
            head: [t('قلم', 'Item'), t('بودجه تا پایان ماه 4', 'Budget to month 4'), t('واقعی تا پایان ماه 4', 'Actual to month 4')],
            rows: [
              [t('تعمیر اساسی پمپ آب آتش‌نشانی', 'Fire-water pump overhaul'), 180000, 0],
              [t('روغن روانکاری (بودجه 40 بشکه × 1,500؛ واقعی 46 بشکه × 1,600)', 'Lube oil (budget 40 drums × 1,500; actual 46 drums × 1,600)'), 60000, 73600],
              [t('تکنسین‌های پیمانکار', 'Contract technicians'), 120000, 120000],
              [t('قطعات یدکی', 'Spare parts'), 50000, 85000],
              [t('جمع', 'Total'), 410000, 278600],
            ],
            numericCols: [1, 2],
          },
          solution: [
            {
              type: 'table',
              head: [t('قلم', 'Item'), t('انحراف', 'Variance'), t('برچسب', 'Tag')],
              rows: [
                [t('تعمیر اساسی پمپ', 'Pump overhaul'), t('180,000 F', '180,000 F'), t('زمان‌بندی؛ در ماه 7 خرج می‌شود', 'Timing; spent in month 7')],
                [t('روغن: قیمت (1,600 − 1,500) × 46', 'Lube oil: price (1,600 − 1,500) × 46'), t('4,600 U', '4,600 U'), t('قیمت؛ دائمی', 'Price; permanent')],
                [t('روغن: مقدار (46 − 40) × 1,500', 'Lube oil: quantity (46 − 40) × 1,500'), t('9,000 U', '9,000 U'), t('مقدار؛ دائمی', 'Quantity; permanent')],
                [t('تکنسین‌ها', 'Technicians'), t('0', '0'), t('بدون انحراف', 'No variance')],
                [t('قطعات: تعمیر اضطراری آب‌بند', 'Spares: emergency seal repair'), t('35,000 U', '35,000 U'), t('محدوده؛ دائمی', 'Scope; permanent')],
              ],
            },
            {
              type: 'steps',
              items: [
                { title: t('انحراف کل', 'Total variance'), text: t('410,000 − 278,600 = 131,400 مطلوب. ظاهر گزارش: «مرکز هزینه 131,400 صرفه‌جویی کرده است».', '410,000 − 278,600 = 131,400 favourable. The report appears to say: “the cost centre has saved 131,400”.') },
                { title: t('روغن', 'Lube oil'), text: t('انحراف کل روغن 73,600 − 60,000 = 13,600 نامطلوب = 4,600 قیمت + 9,000 مقدار.', 'Total lube-oil variance 73,600 − 60,000 = 13,600 U = 4,600 price + 9,000 quantity.') },
                {
                  title: t('انحراف واقعی', 'The real variance'),
                  text: t(
                    'با کنار گذاشتن 180,000 زمان‌بندی: 131,400 − 180,000، یعنی 48,600 نامطلوب = 13,600 روغن + 35,000 تعمیر اضطراری. «صرفه‌جویی» در واقع 48,600 اضافه‌خرج دائمی است.',
                    'Removing the 180,000 timing effect: 131,400 − 180,000 = 48,600 unfavourable = 13,600 lube oil + 35,000 emergency repair. The “saving” is really a 48,600 permanent overspend.',
                  ),
                },
                {
                  title: t('توضیح یک‌خطی', 'One-line comment'),
                  text: t(
                    '«کم‌خرجی 131,400 ناشی از انتقال تعمیر اساسی پمپ آب آتش‌نشانی (180,000) به ماه 7 است؛ بدون آن، مرکز هزینه 48,600 بیش از بودجه است: تعمیر اضطراری آب‌بند 35,000 (محدوده) و روغن 13,600 (مقدار 9,000، قیمت 4,600). پیش‌بینی سالانه 48,600 افزایش یافت؛ مسئول: مدیر نگهداری.»',
                    '“The 131,400 underspend comes from moving the fire-water pump overhaul (180,000) to month 7; without it the cost centre is 48,600 over budget: emergency seal repair 35,000 (scope) and lube oil 13,600 (quantity 9,000, price 4,600). The full-year forecast has been raised by 48,600; owner: maintenance manager.”',
                  ),
                },
              ],
            },
          ],
          answer: t(
            'انحراف ظاهری 131,400 مطلوب است، اما بدون اثر زمان‌بندی 180,000، مرکز هزینه 48,600 بیش از بودجه است.',
            'The apparent variance is 131,400 F, but without the 180,000 timing effect the cost centre is 48,600 over budget.',
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
            t('مقایسه برنامه با واقعی زمان‌بندی و هزینه را قاطی می‌کند؛ EV این دو را جدا می‌کند.', 'Plan versus actual mixes schedule and cost; EV separates them.'),
            t('انحراف کل را به قیمت، مقدار، محدوده و زمان‌بندی تجزیه کنید؛ هر کدام صاحب خودش را دارد.', 'Split the total variance into price, quantity, scope and timing; each has its own owner.'),
            t('CV = EV − AC و SV = EV − PV؛ CPI = EV ÷ AC و SPI = EV ÷ PV.', 'CV = EV − AC and SV = EV − PV; CPI = EV ÷ AC and SPI = EV ÷ PV.'),
            t('EACها فرض‌های متفاوت دارند؛ EAC رسمی پایین به بالا را با دامنه مبتنی بر شاخص و TCPI گزارش دهید.', 'EACs rest on different assumptions; report the official bottom-up EAC with an index-based range and TCPI.'),
            t('در AFE چاه AR-07: EV برابر 3,520,000، CPI برابر 0.88، SPI برابر 0.80 و EAC رسمی 8,994,000 با دامنه ریسک تا 10,000,000.', 'For the AR-07 AFE: EV 3,520,000, CPI 0.88, SPI 0.80 and an official EAC of 8,994,000 with a risk range up to 10,000,000.'),
            t('EVM ثبت مالی ندارد، اما به AC کامل نیاز دارد: GRN، SES، کارکرد و تعهدی‌ها پیش از بستن ماه.', 'EVM posts nothing, but it needs a complete AC: GRNs, SESs, timesheets and accruals before month-end close.'),
            t('هر انحراف مهم را با «چه، چرا، اثر، اقدام، مسئول» توضیح دهید.', 'Explain every significant variance as “what, why, impact, action, owner”.'),
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            { term: t('انحراف قیمت', 'Price variance'), def: t('(قیمت واقعی − قیمت بودجه) × مقدار واقعی.', '(Actual price − budget price) × actual quantity.') },
            { term: t('انحراف مقدار', 'Quantity variance'), def: t('(مقدار واقعی − مقدار بودجه) × قیمت بودجه.', '(Actual quantity − budget quantity) × budget price.') },
            { term: t('انحراف زمان‌بندی', 'Timing variance'), def: t('اختلافی که فقط از جابه‌جایی ماه خرج می‌آید و مبلغ نهایی را تغییر نمی‌دهد.', 'A difference caused only by spending in a different month; the final amount is unchanged.') },
            { term: t('BAC', 'BAC'), def: t('بودجه در تکمیل؛ بودجه کل کار.', 'Budget at completion; the total budget of the work.') },
            { term: t('PV', 'PV'), def: t('ارزش برنامه‌ریزی‌شده؛ بودجه کاری که طبق برنامه پایه باید تا امروز انجام می‌شد.', 'Planned value; the budget of the work the baseline says should be done by today.') },
            { term: t('EV', 'EV'), def: t('ارزش کسب‌شده؛ بودجه کاری که واقعاً انجام شده است.', 'Earned value; the budget of the work actually done.') },
            { term: t('AC', 'AC'), def: t('هزینه واقعی ثبت‌شده برای کار انجام‌شده؛ بدون تعهدات.', 'Actual cost posted for the work done; excluding commitments.') },
            { term: t('CPI و SPI', 'CPI and SPI'), def: t('شاخص عملکرد هزینه (EV ÷ AC) و زمان‌بندی (EV ÷ PV).', 'Cost performance index (EV ÷ AC) and schedule performance index (EV ÷ PV).') },
            { term: t('TCPI', 'TCPI'), def: t('کارایی لازم برای بقیه کار تا در بودجه تمام شود: (BAC − EV) ÷ (BAC − AC).', 'The efficiency the remaining work needs to finish within budget: (BAC − EV) ÷ (BAC − AC).') },
            { term: t('سطح تلاش (LOE)', 'Level of effort (LOE)'), def: t('کاری مثل مدیریت پروژه که پیشرفت مستقل ندارد و EV آن برابر PV گرفته می‌شود.', 'Work such as project management with no independent progress; its EV is taken as equal to PV.') },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: t('EV برابر 3,520,000 و AC برابر 4,000,000 است. CV چقدر است؟', 'EV is 3,520,000 and AC is 4,000,000. What is CV?'),
      options: [t('مثبت 480,000', '+480,000'), t('منفی 880,000', '−880,000'), t('منفی 480,000', '−480,000'), t('مثبت 400,000', '+400,000')],
      answer: 2,
      explain: t(
        'CV = EV − AC = 3,520,000 − 4,000,000، یعنی منفی 480,000: کار انجام‌شده 480,000 گران‌تر از بودجه‌اش تمام شده است. مثبت 480,000 از جابه‌جا کردن ترتیب می‌آید؛ همیشه EV اول است.',
        'CV = EV − AC = 3,520,000 − 4,000,000 = −480,000: the work done cost 480,000 more than its budget. +480,000 comes from reversing the order; EV always comes first.',
      ),
    },
    {
      q: t('EV برابر 3,520,000 و PV برابر 4,400,000 است. SPI چقدر است؟', 'EV is 3,520,000 and PV is 4,400,000. What is SPI?'),
      options: [t('0.80', '0.80'), t('1.25', '1.25'), t('0.88', '0.88'), t('1.10', '1.10')],
      answer: 0,
      explain: t(
        'SPI = EV ÷ PV = 3,520,000 ÷ 4,400,000 = 0.80؛ یعنی 80٪ کار برنامه‌ریزی‌شده انجام شده است. 1.25 حاصل PV ÷ EV است و 0.88 همان CPI.',
        'SPI = EV ÷ PV = 3,520,000 ÷ 4,400,000 = 0.80: 80% of the planned work is done. 1.25 is PV ÷ EV, and 0.88 is the CPI.',
      ),
    },
    {
      q: t('BAC برابر 8,800,000 و CPI برابر 0.88 است. EAC با فرض ادامه کارایی فعلی چقدر است؟', 'BAC is 8,800,000 and CPI is 0.88. What is the EAC if current efficiency continues?'),
      options: [t('7,744,000', '7,744,000'), t('9,280,000', '9,280,000'), t('8,800,000', '8,800,000'), t('10,000,000', '10,000,000')],
      answer: 3,
      explain: t(
        'EAC = BAC ÷ CPI = 8,800,000 ÷ 0.88 = 10,000,000. 7,744,000 از ضرب به‌جای تقسیم می‌آید و 9,280,000 فرمول دیگری است که فرض می‌کند بقیه کار با نرخ بودجه انجام شود.',
        'EAC = BAC ÷ CPI = 8,800,000 ÷ 0.88 = 10,000,000. 7,744,000 comes from multiplying instead of dividing, and 9,280,000 is a different formula that assumes the rest of the work at budget rates.',
      ),
    },
    {
      q: t('برای مقطعی از چاه، 500 تن باریت با نرخ 400 بودجه شده و 560 تن با نرخ 425 مصرف شده است. انحراف قیمت چقدر است؟', 'For a well section, 500 t of barite at 400 was budgeted and 560 t at 425 was used. What is the price variance?'),
      options: [t('12,500 نامطلوب', '12,500 U'), t('14,000 نامطلوب', '14,000 U'), t('24,000 نامطلوب', '24,000 U'), t('38,000 نامطلوب', '38,000 U')],
      answer: 1,
      explain: t(
        'انحراف قیمت = (425 − 400) × 560 = 14,000 نامطلوب. 12,500 از ضرب در مقدار بودجه (500) می‌آید، که نادرست است؛ 24,000 انحراف مقدار است و 38,000 انحراف کل.',
        'Price variance = (425 − 400) × 560 = 14,000 U. 12,500 multiplies by the budget quantity (500), which is wrong; 24,000 is the quantity variance and 38,000 the total.',
      ),
    },
    {
      q: t('کدام قلم جزو AC نیست؟', 'Which item is NOT part of AC?'),
      options: [
        t('SES پذیرفته‌شده برای روزهای دکل', 'An accepted SES for rig days'),
        t('تعهد سفارش باز برای لاینری که هنوز نرسیده است', 'The open PO commitment for a liner not yet delivered'),
        t('تعهدی پایان ماه برای خدمتی که انجام شده و سفارش ندارد', 'A month-end accrual for a service performed without a PO'),
        t('کارکرد تأییدشده مهندسان روی WBS', 'Approved engineers’ timesheets on the WBS'),
      ],
      answer: 1,
      explain: t(
        'AC هزینه کار انجام‌شده است. سفارش باز تا GRN نخورد، کاری انجام نداده و فقط تعهد است. SES، تعهدی کار انجام‌شده و کارکرد همگی هزینه واقعی‌اند.',
        'AC is the cost of work done. An open PO has done no work until its GRN; it is only a commitment. The SES, the accrual for work done and the timesheets are all actual cost.',
      ),
    },
    {
      q: t('بررسی سالانه یکپارچگی چاه‌ها (120,000) از ماه 3 به ماه 5 رفته است. گزارش ماه 3 چه باید بگوید؟', 'The annual well-integrity survey (120,000) has moved from month 3 to month 5. What should the month-3 report say?'),
      options: [
        t('120,000 صرفه‌جویی دائمی', 'A permanent saving of 120,000'),
        t('120,000 انحراف قیمت مطلوب', 'A favourable price variance of 120,000'),
        t('بودجه سالانه 120,000 کاهش یابد', 'Cut the annual budget by 120,000'),
        t('120,000 انحراف زمان‌بندی؛ پیش‌بینی سالانه تغییر نمی‌کند', 'A timing variance of 120,000; the full-year forecast is unchanged'),
      ],
      answer: 3,
      explain: t(
        'کار حذف نشده، فقط جابه‌جا شده است؛ پس انحراف زمان‌بندی است و پیش‌بینی سالانه ثابت می‌ماند. «صرفه‌جویی دائمی» همان خطایی است که ماه 5 را به‌ظاهر اضافه‌خرج نشان می‌دهد.',
        'The work was not removed, only moved; it is a timing variance and the full-year forecast stays the same. “Permanent saving” is the mistake that makes month 5 look overspent.',
      ),
    },
    {
      q: t('برای مدیریت و نظارت پروژه، که پیشرفت فیزیکی مستقلی ندارد، کدام روش سنجش EV مناسب است؟', 'Which EV method suits project management and supervision, which have no independent physical progress?'),
      options: [t('سطح تلاش (EV برابر PV)', 'Level of effort (EV equals PV)'), t('صفر/صد', '0/100'), t('واحدهای تکمیل‌شده', 'Units completed'), t('درصد هزینه خرج‌شده', 'Percent of cost spent')],
      answer: 0,
      explain: t(
        'کار LOE با گذشت زمان «کسب» می‌شود، پس EV را برابر PV می‌گیرند. صفر/صد برای کار کوتاه با پایان روشن است و «درصد هزینه خرج‌شده» EV را برابر AC می‌کند و CPI را بی‌معنا.',
        'LOE work is “earned” with the passage of time, so EV is taken as PV. 0/100 suits short tasks with a clear finish, and “percent of cost spent” makes EV equal AC and CPI meaningless.',
      ),
    },
    {
      q: t('BAC = 8,800,000، EV = 3,520,000 و AC = 4,000,000. TCPI برای تمام کردن در BAC چقدر است؟', 'BAC = 8,800,000, EV = 3,520,000 and AC = 4,000,000. What TCPI is needed to finish within BAC?'),
      options: [t('0.88', '0.88'), t('0.91', '0.91'), t('1.10', '1.10'), t('1.25', '1.25')],
      answer: 2,
      explain: t(
        'TCPI = (BAC − EV) ÷ (BAC − AC) = 5,280,000 ÷ 4,800,000 = 1.10؛ بقیه کار باید 10٪ کاراتر از بودجه انجام شود، در حالی که تا امروز 12٪ ناکاراتر بوده است. 0.91 معکوس همین نسبت است.',
        'TCPI = (BAC − EV) ÷ (BAC − AC) = 5,280,000 ÷ 4,800,000 = 1.10: the rest of the work must be 10% more efficient than budget, while so far it has been 12% less efficient. 0.91 is the inverse ratio.',
      ),
    },
    {
      q: t('در حفاری با قرارداد روزکار، SPI به 0.75 افتاده است. چه انتظاری از CPI دارید؟', 'In drilling under a day-rate contract, SPI has fallen to 0.75. What do you expect of CPI?'),
      options: [
        t('CPI بالا می‌رود، چون کار کمتری انجام شده است', 'CPI rises, because less work was done'),
        t('CPI هم پایین می‌آید، چون هزینه روزانه بدون پیشرفت ادامه دارد', 'CPI falls too, because daily cost continues without progress'),
        t('CPI به SPI ربطی ندارد', 'CPI is unrelated to SPI'),
        t('CPI برابر 1 می‌ماند، چون نرخ روزانه ثابت است', 'CPI stays at 1, because the day rate is fixed'),
      ],
      answer: 1,
      explain: t(
        'در روزکار، دکل و خدمات وابسته هر روز هزینه می‌سازند؛ اگر پیشرفت (EV) عقب بماند، AC جلو می‌رود و CPI پایین می‌آید. نرخ ثابت فقط انحراف قیمت را صفر می‌کند، نه انحراف مقدار (روز اضافه) را.',
        'Under a day rate the rig and its spread cost money every day; if progress (EV) lags, AC keeps rising and CPI falls. A fixed rate removes only the price variance, not the quantity variance (extra days).',
      ),
    },
    {
      q: t('کدام توضیح انحراف برای گزارش ماهانه به شرکا مناسب‌تر است؟', 'Which variance comment best suits the monthly partner report?'),
      options: [
        t('«ردیف دکل 184,000 بیش از بودجه است.»', '“The rig line is 184,000 over budget.”'),
        t('«به دلیل شرایط عملیاتی، هزینه‌ها کمی افزایش یافت.»', '“Due to operating conditions, costs rose slightly.”'),
        t('«بعداً توضیح داده می‌شود.»', '“Will be explained later.”'),
        t('«دکل 184,000 بیش از بودجه (7٪): گیر کردن لوله، 4 روز اضافه × 92,000؛ EAC کل 8,994,000؛ افزایش داخلی تأیید شد؛ مسئول: سرپرست حفاری.»', '“Rig 184,000 over (7%): stuck pipe, 4 extra days × 92,000; total EAC 8,994,000; internal supplement approved; owner: drilling superintendent.”'),
      ],
      answer: 3,
      explain: t(
        'توضیح خوب هر پنج جزء را دارد: چه (مبلغ و درصد)، چرا (ریشه فنی و نوع انحراف)، اثر (EAC)، اقدام و مسئول. گزینه اول فقط «چه» را دارد و گزینه دوم کلی‌گویی است که شریک را قانع نمی‌کند.',
        'A good comment has all five parts: what (amount and percent), why (technical cause and variance type), impact (EAC), action and owner. The first option has only “what”, and the second is a generality that will not satisfy a partner.',
      ),
    },
  ],
}
