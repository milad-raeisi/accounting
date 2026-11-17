import type { L, Lesson } from '../../types'

const t = (fa: string, en: string): L => ({ fa, en })

const ac = {
  auc: (wbs: string, ce?: string) =>
    ce
      ? t(`1510 دارایی‌های در جریان تکمیل (WBS \`${wbs}\`، عنصر هزینه ${ce})`, `1510 Assets under construction (WBS \`${wbs}\`, cost element ${ce})`)
      : t(`1510 دارایی‌های در جریان تکمیل (WBS \`${wbs}\`)`, `1510 Assets under construction (WBS \`${wbs}\`)`),
  well: t('1520 دارایی‌های نفت و گاز: چاه AR-07 (`FA-52007`)', '1520 Oil and gas properties: well AR-07 (`FA-52007`)'),
  grir: t('2120 حساب واسط رسید کالا و فاکتور (GR/IR)', '2120 GR/IR clearing account'),
  ap: t('2110 حساب‌های پرداختنی', '2110 Accounts payable'),
  bank: t('1110 موجودی نقد (بانک)', '1110 Cash at bank'),
  partnerAr: t('1700 حساب دریافتنی از شرکای مشارکت', '1700 Receivable from JV partners'),
  cashCalls: t('2140 پیش‌دریافت درخواست وجه از شرکا', '2140 Cash calls received from partners'),
  staff: t('5190 هزینه کارکنان منتقل‌شده به پروژه‌ها (`CC-ARY-DRL`)', '5190 Staff costs recharged to projects (`CC-ARY-DRL`)'),
  training: t('5130 هزینه ایمنی، بهداشت، محیط زیست و آموزش (`CC-ARY-PRD`)', '5130 HSE and training expense (`CC-ARY-PRD`)'),
}

const dash = t('ندارد', '–')

export const lesson: Lesson = {
  slug: 'budget-erp-integration',
  number: 8,
  level: 'advanced',
  minutes: 35,
  icon: 'Library',
  tone: 'primary',
  title: t('بودجه و پروژه در ERP: سناریوی کامل', 'Budget and Projects in the ERP: End to End'),
  summary: t(
    'این درس همه دوره را در یک سناریو به هم وصل می‌کند: از ردیف WP&B و AFE چاه AR-07 تا بودجه WBS، تعهد با سفارش خرید، هزینه واقعی با GRN، SES، فاکتور و کارکرد، گزارش ماهانه، تسویه، صورت‌حساب شرکا و صورت هزینه‌های قابل بازیافت؛ با همه اسناد و ثبت‌های مالی، و در پایان کنترل‌ها، داشبوردها، کیفیت داده و چک‌لیست پایان ماه کنترل‌کننده پروژه.',
    'This lesson ties the whole course together in one scenario: from the WP&B line and the AR-07 AFE to the WBS budget, commitments through purchase orders, actuals through GRNs, SESs, invoices and timesheets, the monthly report, settlement, partner billing and the cost-recovery statement; with every document and Finance posting, and finally the controls, dashboards, data quality and month-end checklist of a project controller.',
  ),
  objectives: [
    t('زنجیره کامل برنامه تا بازیافت هزینه را با سند و ماژول هر حلقه شرح دهید.', 'Describe the full chain from plan to cost recovery, with the document and module of each link.'),
    t('ثبت‌های مالی GRN، SES، فاکتور، کارکرد، صورت‌حساب شرکا و تسویه را برای یک ماه واقعی پروژه بنویسید.', 'Write the Finance postings of GRNs, SESs, invoices, timesheets, partner billing and settlement for a real project month.'),
    t('گزارش ماهانه AFE را با ارقام ناخالص بسازید و آن را با دفاتر خالص بهره‌بردار آشتی دهید.', 'Build the monthly AFE report on gross figures and reconcile it with the operator’s net books.'),
    t('صورت‌حساب شرکا را با درخواست وجه تسویه و صورت هزینه‌های قابل بازیافت را از دفاتر استخراج کنید.', 'Settle partner billing against cash calls and extract the cost-recovery statement from the ledger.'),
    t('کنترل‌ها، داشبوردها، شاخص‌های کیفیت داده و چک‌لیست پایان ماه کنترل پروژه را طراحی و اجرا کنید.', 'Design and run the controls, dashboards, data-quality indicators and month-end checklist of project control.'),
  ],
  sections: [
    {
      id: 'why-integration',
      title: t('یک رویداد، چند ماژول', 'One Event, Many Modules'),
      blocks: [
        {
          type: 'p',
          text: t(
            'روز سوم کاری ماه 5 است. نماینده انرژی البرز سه چیز می‌خواهد: وضعیت AFE چاه AR-07، صورت‌حساب هزینه‌های ماه 4، و دلیل اینکه این هزینه‌ها قابل بازیافت‌اند. کنترل‌کننده پروژه مسار پترولیوم برای هیچ‌کدام فایل جداگانه‌ای نمی‌سازد؛ هر سه از **همان اسناد** در ERP بیرون می‌آیند. هر GRN، SES، فاکتور و برگه کارکرد یک بار ثبت می‌شود و هم‌زمان بودجه پروژه، دفتر کل، صورت‌حساب شرکا و طبقه بازیافت هزینه را به‌روز می‌کند. یکپارچگی یعنی همین: یک رویداد، یک سند، چند ماژول.',
            'It is the third working day of month 5. Alborz Energy’s representative wants three things: the status of the AR-07 AFE, the bill for month-4 costs, and evidence that those costs are recoverable. Masar Petroleum’s project controller builds no separate file for any of them; all three come from **the same documents** in the ERP. Each GRN, SES, invoice and timesheet is entered once and at the same moment updates the project budget, the general ledger, partner billing and the cost-recovery category. That is what integration means: one event, one document, many modules.',
          ),
        },
        {
          type: 'diagram',
          id: 'erp-modules',
          caption: t(
            'ماژول‌های ERP و جریان‌های یکپارچه میان آن‌ها: پروژه و بودجه، تدارکات، انبار، نگهداری، منابع انسانی و مالی. هر سند عملیاتی ثبت مالی خودکار می‌سازد.',
            'ERP modules and the integration flows between them: projects and budget, procurement, inventory, maintenance, HR and Finance. Every operational document creates an automatic Finance posting.',
          ),
        },
        {
          type: 'list',
          ordered: true,
          items: [
            t('**WP&B** (ماژول بودجه): ردیف سالانه چاه AR-07 با 8,800,000.', '**WP&B** (budget module): the annual AR-07 line of 8,800,000.'),
            t('**AFE** (پروژه): تصویب داخلی و رأی شرکا؛ برآورد پایه 8,000,000 و ذخیره احتیاطی 800,000.', '**AFE** (projects): internal approval and partner ballot; base estimate 8,000,000 plus 800,000 contingency.'),
            t('**بودجه WBS** (پروژه): سند بودجه اولیه روی نه عنصر سطح 3 و ذخیره در سطح 1.', '**WBS budget** (projects): the original budget document on nine level-3 elements, contingency at level 1.'),
            t('**تعهد** (تدارکات): درخواست خرید و سفارش خرید یا فراخوان؛ بدون ثبت مالی.', '**Commitment** (procurement): requisition and purchase order or call-off; no Finance posting.'),
            t('**هزینه واقعی** (انبار، تدارکات، منابع انسانی): GRN، SES، فاکتور و کارکرد؛ با ثبت مالی.', '**Actual cost** (inventory, procurement, HR): GRN, SES, invoice and timesheet; with Finance postings.'),
            t('**گزارش ماهانه و پیش‌بینی** (پروژه): بودجه، واقعی، تعهد، در دسترس، EAC.', '**Monthly report and forecast** (projects): budget, actual, commitments, available, EAC.'),
            t('**تسویه** (پروژه و دارایی): AUC به دارایی نهایی یا هزینه دوره.', '**Settlement** (projects and assets): AUC to the final asset or period expense.'),
            t('**صورت‌حساب شرکا** (حسابداری مشارکت): سهم شرکا از هزینه ناخالص، با کسر درخواست وجه.', '**Partner billing** (joint venture accounting): partners’ share of gross cost, net of cash calls.'),
            t('**صورت هزینه‌های قابل بازیافت** (گزارش مالی): هزینه به تفکیک طبقه و نشانگر R/N.', '**Cost-recovery statement** (Finance reporting): cost by category and R/N flag.'),
            t('**بستن** (پروژه): TECO، برگشت بودجه، گزارش بستن و بایگانی.', '**Close** (projects): TECO, budget return, close-out report and archiving.'),
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: t(
            'این درس خلاصه همه درس‌های قبلی این دوره روی یک چاه است. ارقام همان ارقام درس‌های قبل‌اند: برنامه بودجه، کدهای هزینه، طراحی WBS، چرخه AFE، کنترل بودجه و تعهدات، ارزش کسب‌شده و تسویه. ماه در کانون این درس **ماه 4** است؛ ماهی که تکمیل چاه انجام می‌شود و چاه به تولید می‌رسد.',
            'This lesson summarises every earlier lesson of the course on one well. The figures are the same as in those lessons: budget planning, cost codes, WBS design, the AFE lifecycle, budget control and commitments, earned value and settlement. The month in focus is **month 4**, when the well is completed and starts producing.',
          ),
        },
      ],
    },
    {
      id: 'plan-to-budget',
      title: t('از WP&B تا بودجه WBS', 'From WP&B to the WBS Budget'),
      blocks: [
        {
          type: 'p',
          text: t(
            'نیمه برنامه زنجیره هیچ ثبتی در دفتر کل ندارد، اما همه کنترل‌های بعدی به آن تکیه دارند. ردیف WP&B سال 2026 مبلغ 8,800,000 را برای چاه AR-07 در طبقه توسعه می‌گذارد. AFE همین مبلغ را با دامنه، برآورد کلاس 3، زمان‌بندی و کدها به تصویب داخلی و رأی کمیته عملیات مشترک می‌رساند. پس از تصویب، **سند بودجه اولیه** همان عددها را روی عناصر WBS می‌نشاند و وضعیت پروژه «آزادشده» می‌شود؛ از این لحظه کنترل در دسترس بودن بودجه فعال است.',
            'The planning half of the chain posts nothing to the general ledger, yet every later control depends on it. The 2026 WP&B line sets 8,800,000 for well AR-07 in the Development category. The AFE takes that amount, with its scope, Class 3 estimate, schedule and codes, through internal approval and the operating committee ballot. Once approved, the **original budget document** places the figures on the WBS elements and the project status becomes “released”; from that moment availability control is active.',
          ),
        },
        {
          type: 'table',
          caption: t('اسناد نیمه برنامه', 'Documents in the planning half'),
          head: [t('گام', 'Step'), t('سند ERP', 'ERP document'), t('چه کسی', 'Who'), t('ثبت مالی', 'Finance posting')],
          rows: [
            [t('WP&B', 'WP&B'), t('نسخه بودجه 2026 «مصوب»؛ ردیف AR-07 با 8,800,000', '2026 budget version “approved”; AR-07 line of 8,800,000'), t('کنترل پروژه؛ کمیته عملیات مشترک', 'Project controls; operating committee'), t('ندارد', 'None')],
            [t('AFE', 'AFE'), t('پروژه `AFE-2025-014` با برآورد، پیوست‌ها و برگه‌های رأی شرکا', 'Project `AFE-2025-014` with the estimate, attachments and partner ballots'), t('صاحب AFE (مدیر حفاری)؛ شرکا', 'AFE owner (drilling manager); partners'), t('ندارد', 'None')],
            [t('داده پایه WBS', 'WBS master data'), t('نه عنصر سطح 3 با مالک، عنصر هزینه، طبقه توسعه، نشانگر R و قاعده تسویه', 'Nine level-3 elements with owner, cost element, Development category, R flag and settlement rule'), t('کنترل‌کننده و حسابدار دارایی', 'Controller and asset accountant'), t('ندارد', 'None')],
            [t('بودجه اولیه', 'Original budget'), t('`BD-2026-0101`: 8,000,000 روی عناصر و 800,000 ذخیره در سطح 1', '`BD-2026-0101`: 8,000,000 on the elements and 800,000 contingency at level 1'), t('کنترل‌کننده پروژه', 'Project controller'), t('ندارد', 'None')],
            [t('درخواست وجه ماه 4', 'Month-4 cash call'), t('درخواست وجه بر پایه بودجه زمان‌بندی‌شده: 800,000 ناخالص؛ سهم شرکا 400,000', 'Cash call based on the phased budget: 800,000 gross; partners’ share 400,000'), t('حسابدار مشارکت', 'JV accountant'), t('بدهکار 1110؛ بستانکار 2140', 'Dr 1110; Cr 2140')],
          ],
        },
        {
          type: 'table',
          caption: t('رشته کدینگ سه سند ماه 4', 'Coding strings of three month-4 documents'),
          head: [t('سند', 'Document'), t('شرکت / مرکز هزینه / WBS', 'Company / cost centre / WBS'), t('عنصر هزینه (حساب)', 'Cost element (account)'), t('نشانگر و طبقه', 'Flag and category')],
          rows: [
            [t('GRN تجهیزات تکمیل', 'Completion equipment GRN'), t('`MP01 / CC-ARY-DRL / AFE-2025-014.03.01`', '`MP01 / CC-ARY-DRL / AFE-2025-014.03.01`'), t('6150 (1510)', '6150 (1510)'), t('R، توسعه', 'R, Development')],
            [t('SES آزمایش چاه', 'Well-testing SES'), t('`MP01 / CC-ARY-DRL / AFE-2025-014.03.02`', '`MP01 / CC-ARY-DRL / AFE-2025-014.03.02`'), t('6160 (1510)', '6160 (1510)'), t('R، توسعه', 'R, Development')],
            [t('کارکرد تیم نظارت', 'Supervision timesheets'), t('`MP01 / CC-ARY-DRL / AFE-2025-014.04.01`', '`MP01 / CC-ARY-DRL / AFE-2025-014.04.01`'), t('6210 (1510)', '6210 (1510)'), t('R، توسعه', 'R, Development')],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          text: t(
            'هیچ سفارشی بدون بودجه آزادشده صادر نمی‌شود و بودجه بدون تصویب کامل AFE آزاد نمی‌شود. برگه‌های رأی شرکا و تأیید کارفرمای دولتی (اگر قرارداد بخواهد) باید پیوست سند AFE در ERP باشند؛ حسابرس بازیافت هزینه پیش از هر عددی، همین پیوست‌ها را می‌خواهد.',
            'No order is issued without released budget, and no budget is released without full AFE approval. The partner ballots and the state counterparty’s approval (where the contract requires it) must be attached to the AFE document in the ERP; the cost-recovery auditor asks for these attachments before looking at any number.',
          ),
        },
      ],
    },
    {
      id: 'commit-to-actual',
      title: t('از تعهد تا هزینه واقعی در ماه 4', 'From Commitment to Actual in Month 4'),
      blocks: [
        {
          type: 'p',
          text: t(
            'در آغاز ماه 4 دو سفارش باز روی عنصرهای تکمیل است. روی `.03.01` تجهیزات تکمیل: 200,000 باقی‌مانده از `PO-45260` (سفارش 840,000 اقلام دیررس که 640,000 آن در ماه 3 رسید) و `PO-45281` به مبلغ 240,000 برای آداپتور سرچاهی و شیر ایمنی درون‌چاهی؛ جمع 440,000. روی `.03.02` آزمایش چاه: فراخوان `PO-45290` به مبلغ 760,000 (10 روز × 72,000 و یک سطر 40,000 برای آموزش اپراتورها و تحویل چاه) که 385,000 آن در ماه 3 با SES پذیرفته شده و 375,000 باقی مانده است. نظارت (`.04.01`) سفارش ندارد؛ هزینه‌اش از کارکرد کارکنان می‌آید.',
            'At the start of month 4 there are two open orders on the completion elements. On `.03.01` completion equipment: the 200,000 left on `PO-45260` (an 840,000 long-lead order, 640,000 of which arrived in month 3) and `PO-45281` for 240,000 for the wellhead adapter and subsurface safety valve; 440,000 in total. On `.03.02` well testing: call-off `PO-45290` for 760,000 (10 days × 72,000 plus a 40,000 line for operator training and well handover), of which 385,000 was accepted by SES in month 3 and 375,000 remains. Supervision (`.04.01`) has no PO; its cost comes from staff timesheets.',
          ),
        },
        {
          type: 'diagram',
          id: 'grn-ses',
          caption: t(
            'دو مسیر دریافت در ماه 4: تجهیزات تکمیل با رسید کالا (GRN) و آزمایش چاه با برگه ثبت خدمات (SES). هر دو تعهد را کم، هزینه WBS را زیاد و GR/IR را بستانکار می‌کنند.',
            'The two receipt paths in month 4: completion equipment through a GRN and well testing through an SES. Both reduce the commitment, increase the WBS cost and credit GR/IR.',
          ),
        },
        {
          type: 'table',
          caption: t('اسناد ماه 4 روی `AFE-2025-014` (ارقام ناخالص)', 'Month-4 documents on `AFE-2025-014` (gross figures)'),
          head: [t('روز', 'Day'), t('سند', 'Document'), t('اثر بر تعهد و واقعی', 'Effect on commitment and actual'), t('ثبت مالی', 'Finance posting')],
          rows: [
            [t('5', '5'), t('`GRN-50455` بقیه `PO-45260`: 200,000 روی `.03.01`', '`GRN-50455`, rest of `PO-45260`: 200,000 on `.03.01`'), t('تعهد 200,000 کم، واقعی 200,000 زیاد', 'Commitment down 200,000, actual up 200,000'), t('بدهکار 1510، بستانکار 2120', 'Dr 1510, Cr 2120')],
            [t('9', '9'), t('`GRN-50456` برای `PO-45281`: 240,000 روی `.03.01`', '`GRN-50456` for `PO-45281`: 240,000 on `.03.01`'), t('تعهد 240,000 کم، واقعی 240,000 زیاد', 'Commitment down 240,000, actual up 240,000'), t('بدهکار 1510، بستانکار 2120', 'Dr 1510, Cr 2120')],
            [t('12', '12'), t('فاکتور `GRN-50420` ماه 3: 640,000؛ تطبیق سه‌طرفه', 'Invoice for month-3 `GRN-50420`: 640,000; three-way match'), t('بی‌اثر', 'None'), t('بدهکار 2120، بستانکار 2110', 'Dr 2120, Cr 2110')],
            [t('15', '15'), t('فاکتور `SES-70610` ماه 3: 385,000', 'Invoice for month-3 `SES-70610`: 385,000'), t('بی‌اثر', 'None'), t('بدهکار 2120، بستانکار 2110', 'Dr 2120, Cr 2110')],
            [t('20', '20'), t('`SES-70655`: روزهای 6 تا 9 آزمایش (4 × 72,000 = 288,000) و آموزش 15,000؛ جمع 303,000 روی `.03.02`', '`SES-70655`: test days 6 to 9 (4 × 72,000 = 288,000) and training 15,000; 303,000 on `.03.02`'), t('تعهد 303,000 کم، واقعی 303,000 زیاد', 'Commitment down 303,000, actual up 303,000'), t('بدهکار 1510، بستانکار 2120', 'Dr 1510, Cr 2120')],
            [t('25', '25'), t('پرداخت فاکتور 640,000', 'Payment of the 640,000 invoice'), t('بی‌اثر', 'None'), t('بدهکار 2110، بستانکار 1110', 'Dr 2110, Cr 1110')],
            [t('30', '30'), t('کارکرد تأییدشده تیم نظارت: 680 ساعت × 100 = 68,000 روی `.04.01`', 'Approved supervision timesheets: 680 hours × 100 = 68,000 on `.04.01`'), t('واقعی 68,000 زیاد؛ تعهدی نداشت', 'Actual up 68,000; there was no commitment'), t('بدهکار 1510، بستانکار 5190', 'Dr 1510, Cr 5190')],
            [t('30', '30'), t('سند انتقال `BD-2026-0412`: 20,000 از ذخیره احتیاطی به `.04.01` (چهار روز تأخیر حفاری نظارت را طولانی‌تر کرد)', 'Transfer document `BD-2026-0412`: 20,000 from contingency to `.04.01` (the four-day drilling delay lengthened supervision)'), t('بودجه `.04.01` به 440,000؛ ذخیره به 640,000', '`.04.01` budget to 440,000; contingency to 640,000'), t('ندارد', 'None')],
          ],
        },
        {
          type: 'journal',
          title: t('ثبت‌های خودکار ماه 4 (ناخالص، پیش از صورت‌حساب شرکا)', 'Automatic month-4 postings (gross, before partner billing)'),
          entries: [
            {
              date: t('روز 5', 'Day 5'),
              lines: [
                { account: ac.auc('AFE-2025-014.03.01', '6150'), debit: 200000 },
                { account: ac.grir, credit: 200000 },
              ],
              memo: t('`GRN-50455`', '`GRN-50455`'),
            },
            {
              date: t('روز 9', 'Day 9'),
              lines: [
                { account: ac.auc('AFE-2025-014.03.01', '6150'), debit: 240000 },
                { account: ac.grir, credit: 240000 },
              ],
              memo: t('`GRN-50456`', '`GRN-50456`'),
            },
            {
              date: t('روزهای 12 و 15', 'Days 12 and 15'),
              lines: [
                { account: ac.grir, debit: 1025000 },
                { account: ac.ap, credit: 1025000 },
              ],
              memo: t('دو فاکتور ماه 3: 640,000 + 385,000.', 'The two month-3 invoices: 640,000 + 385,000.'),
            },
            {
              date: t('روز 20', 'Day 20'),
              lines: [
                { account: ac.auc('AFE-2025-014.03.02', '6160'), debit: 303000 },
                { account: ac.grir, credit: 303000 },
              ],
              memo: t('`SES-70655` با برگه‌های کار امضاشده سر چاه پیوست.', '`SES-70655` with the signed wellsite field tickets attached.'),
            },
            {
              date: t('روز 25', 'Day 25'),
              lines: [
                { account: ac.ap, debit: 640000 },
                { account: ac.bank, credit: 640000 },
              ],
            },
            {
              date: t('روز 30', 'Day 30'),
              lines: [
                { account: ac.auc('AFE-2025-014.04.01', '6210'), debit: 68000 },
                { account: ac.staff, credit: 68000 },
              ],
              memo: t('هزینه حقوق تیم نظارت از مرکز هزینه حفاری به پروژه منتقل می‌شود.', 'The supervision team’s payroll cost moves from the drilling cost centre to the project.'),
            },
          ],
        },
        {
          type: 'p',
          text: t(
            'جمع هزینه واقعی ماه 4: 200,000 + 240,000 + 303,000 + 68,000 = 811,000. در پایان ماه دو فهرست کنار هم خوانده می‌شوند. **گزارش تعهدات** فقط 72,000 نشان می‌دهد: روز دهم آزمایش چاه که هنوز انجام نشده است. **مانده GR/IR** این AFE برابر 200,000 + 240,000 + 303,000 = 743,000 بستانکار است: کالا و خدمتی که رسیده و پذیرفته شده اما فاکتورش نیامده است؛ همین مبلغ هزینه تعهدی «دریافت‌شده و فاکتورنشده» ماه است و ثبت دستی نمی‌خواهد.',
            'Month-4 actual cost totals 200,000 + 240,000 + 303,000 + 68,000 = 811,000. At month end two lists are read side by side. The **commitment report** shows only 72,000: test day 10, not yet performed. The AFE’s **GR/IR balance** is 200,000 + 240,000 + 303,000 = 743,000 credit: goods and services received and accepted but not yet invoiced; this is the month’s “received not invoiced” accrual and needs no manual entry.',
          ),
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل: کارکرد کارکنان', 'In practice: staff timesheets'),
          text: t(
            'کارکرد کارکنان داخلی سفارش و تعهد ندارد؛ پس مستقیم از بودجه در دسترس کم می‌شود و کنترل‌کننده باید آن را در پیش‌بینی جدا ببیند. نرخ ساعتی (اینجا 100) از بودجه مرکز هزینه و ساعات قابل‌تخصیص سالانه حساب می‌شود و باید مستند باشد، چون شرکا و حسابرس بازیافت هزینه آن را می‌پرسند. برگه کارکردی که تا پایان ماه تأیید نشود، AC را کم و ارزش کسب‌شده را گمراه‌کننده می‌کند.',
            'In-house staff time has no PO and no commitment, so it comes straight out of the available budget and the controller must see it separately in the forecast. The hourly rate (here 100) is worked out from the cost centre’s budget and its yearly chargeable hours and must be documented, because partners and the cost-recovery auditor ask about it. A timesheet not approved by month end understates AC and makes earned value misleading.',
          ),
        },
      ],
    },
    {
      id: 'month-report',
      title: t('گزارش ماه 4 و پیش‌بینی', 'The Month-4 Report and Forecast'),
      blocks: [
        {
          type: 'p',
          text: t(
            'روز سوم ماه 5، پس از بستن دوره، کنترل‌کننده گزارش AFE را اجرا می‌کند. بودجه جاری همان بودجه اولیه با دو سند انتقال است: 336,000 به نرخ روزانه دکل در ماه 2 (196,000 از صرفه‌جویی لوله و خدمات و 140,000 از ذخیره) و 20,000 به نظارت در ماه 4.',
            'On day 3 of month 5, after the period closes, the controller runs the AFE report. The current budget is the original budget with two transfer documents: 336,000 to the rig day rate in month 2 (196,000 from casing and services savings and 140,000 from contingency) and 20,000 to supervision in month 4.',
          ),
        },
        {
          type: 'formula',
          text: t(
            'در دسترس = بودجه جاری − واقعی − تعهد = 8,800,000 − 7,940,000 − 72,000 = 788,000',
            'Available = Current budget − Actual − Commitments = 8,800,000 − 7,940,000 − 72,000 = 788,000',
          ),
          note: t('انتقال‌ها جمع AFE را تغییر نمی‌دهند؛ بودجه جاری کل همان 8,800,000 است.', 'Transfers do not change the AFE total; the total current budget is still 8,800,000.'),
        },
        {
          type: 'table',
          caption: t('گزارش `AFE-2025-014` در پایان ماه 4 (ناخالص)', '`AFE-2025-014` report at the end of month 4 (gross)'),
          head: [t('عنصر WBS', 'WBS element'), t('بودجه جاری', 'Current budget'), t('واقعی', 'Actual'), t('تعهد', 'Commitments'), t('در دسترس', 'Available'), t('EAC', 'EAC')],
          rows: [
            [t('`.01` آماده‌سازی پیش از حفاری', '`.01` Pre-spud and site preparation'), 620000, 598000, 0, 22000, 598000],
            [t('`.02` حفاری', '`.02` Drilling'), 5040000, 5028000, 0, 12000, 5040000],
            [t('`.03.01` تجهیزات تکمیل', '`.03.01` Completion equipment'), 1100000, 1080000, 0, 20000, 1080000],
            [t('`.03.02` آزمایش چاه', '`.03.02` Well testing'), 780000, 688000, 72000, 20000, 760000],
            [t('`.04` مدیریت پروژه', '`.04` Project management'), 620000, 546000, 0, 74000, 620000],
            [t('ذخیره احتیاطی', 'Contingency'), 640000, 0, 0, 640000, 0],
            [t('جمع', 'Total'), 8800000, 7940000, 72000, 788000, 8098000],
          ],
          numericCols: [1, 2, 3, 4, 5],
        },
        {
          type: 'p',
          text: t(
            'پیام‌ها روشن‌اند. حفاری تمام شده و 12,000 باقی‌مانده آن برای تفاوت تأییدشده فاکتور سیمان‌کاری لاینر است که هنوز نرسیده. تکمیل تقریباً تمام است: تجهیزات 20,000 و آزمایش چاه 20,000 کمتر از بودجه. EAC کل 8,098,000 است: 98,000 یا 1.2٪ بیش از برآورد پایه 8,000,000 و 702,000 کمتر از AFE مصوب 8,800,000. از ذخیره احتیاطی 160,000 مصرف شده و 640,000 مانده که هنگام بستن برگشت داده می‌شود. ماه 5 فقط سه هزینه پایانی دارد: روز دهم آزمایش (72,000)، نظارت (44,000) و بستن مجوزها (30,000).',
            'The messages are clear. Drilling is finished, and its remaining 12,000 is for the approved difference on the liner cementing invoice that has not arrived yet. Completion is almost done: equipment 20,000 and well testing 20,000 under budget. The total EAC is 8,098,000: 98,000, or 1.2%, above the base estimate of 8,000,000 and 702,000 below the approved AFE of 8,800,000. Contingency used is 160,000, with 640,000 left to be returned at close. Month 5 has only three closing costs: test day 10 (72,000), supervision (44,000) and permit close-out (30,000).',
          ),
        },
        {
          type: 'callout',
          tone: 'warning',
          title: t('ناخالص در برابر خالص', 'Gross versus net'),
          text: t(
            'گزارش AFE و صورت‌حساب شرکا همیشه **ناخالص** (100٪) است، اما دفاتر خود مسار پترولیوم فقط سهم 50٪ آن را نگه می‌دارند. پس اگر کسی گزارش پروژه (7,940,000 تا پایان ماه 4) را با مانده 1510 در دفاتر مسار مقایسه کند، تقریباً نصف آن را می‌بیند. این اختلاف نیست؛ اثر صورت‌حساب ماهانه شرکاست که در بخش بعد می‌بینیم. آشتی درست این است: هزینه ناخالص گزارش پروژه = ثبت‌های ناخالص 1510 پیش از صورت‌حساب، و مبلغ صورت‌حساب = 50٪ همان هزینه.',
            'The AFE report and partner billing are always **gross** (100%), but Masar Petroleum’s own books keep only its 50% share. So anyone comparing the project report (7,940,000 to the end of month 4) with the 1510 balance in Masar’s books sees about half of it. That is not a difference; it is the effect of monthly partner billing, shown in the next section. The correct reconciliation is: gross cost in the project report = gross 1510 postings before billing, and the billed amount = 50% of that cost.',
          ),
        },
      ],
    },
    {
      id: 'settle-bill-recover',
      title: t('صورت‌حساب شرکا، تسویه و صورت بازیافت هزینه', 'Partner Billing, Settlement and the Cost-Recovery Statement'),
      blocks: [
        {
          type: 'p',
          text: t(
            'در پایان هر ماه، بهره‌بردار **صورت‌حساب هزینه‌های مشترک** (JIB: Joint Interest Billing) را برای هر شریک صادر می‌کند: سهم او از هزینه ناخالص ماه، به تفکیک AFE و طبقه، منهای درخواست وجهی که از پیش پرداخته است. در ERP این کار با اجرای **تقسیم سهم شرکا** (Cutback) انجام می‌شود: سهم شرکا از حساب‌های هزینه و AUC بیرون می‌رود و به حساب دریافتنی از شرکا یا پیش‌دریافت درخواست وجه می‌نشیند. سهم‌ها فرضی‌اند: مسار پترولیوم 50٪، انرژی البرز 30٪، نفت دنا 20٪.',
            'At the end of each month the operator issues a **joint interest billing (JIB)** statement to each partner: its share of the month’s gross cost, by AFE and category, less the cash call it has already paid. In the ERP this is done by the **cutback** run: the partners’ share is taken out of the cost and AUC accounts and moved to the partner receivable or the cash-call advance. The shares are illustrative: Masar Petroleum 50%, Alborz Energy 30%, Dena Petroleum 20%.',
          ),
        },
        {
          type: 'table',
          caption: t('صورت‌حساب ماه 4 برای `AFE-2025-014`', 'Month-4 billing for `AFE-2025-014`'),
          head: [t('قلم', 'Item'), t('ناخالص', 'Gross'), t('مسار پترولیوم 50٪', 'Masar Petroleum 50%'), t('انرژی البرز 30٪', 'Alborz Energy 30%'), t('نفت دنا 20٪', 'Dena Petroleum 20%')],
          rows: [
            [t('هزینه ماه 4', 'Month-4 cost'), 811000, 405500, 243300, 162200],
            [t('درخواست وجه دریافت‌شده', 'Cash call received'), 800000, dash, 240000, 160000],
            [t('مانده بدهی شریک', 'Balance due from the partner'), dash, dash, 3300, 2200],
          ],
          numericCols: [1, 2, 3, 4],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل: حسابداری مشارکت در ERP', 'In practice: joint venture accounting in the ERP'),
          text: t(
            'در ERP هر سطر هزینه، علاوه بر WBS، **مشارکت** (Venture) و **گروه سهم** (جدول درصد شرکا) را هم از داده پایه پروژه به ارث می‌برد؛ پس Cutback خودکار است و کسی سهم‌ها را دستی حساب نمی‌کند. JIB هر سطر را با شماره AFE، عنصر هزینه و شماره سند (GRN، SES، فاکتور، کارکرد) نشان می‌دهد تا شریک بتواند هر عدد را حسابرسی کند. اگر شریکی در یک عملیات مشارکت نکرده باشد، گروه سهم همان AFE جداگانه تعریف می‌شود.',
            'In the ERP every cost line inherits, besides the WBS, a **venture** and an **equity group** (the partners’ share table) from the project master data, so the cutback is automatic and nobody calculates shares by hand. The JIB shows every line with its AFE number, cost element and document number (GRN, SES, invoice, timesheet) so the partner can audit each figure. If a partner has opted out of an operation, that AFE gets its own equity group.',
          ),
        },
        {
          type: 'journal',
          title: t('ثبت‌ها در دفاتر مسار پترولیوم (خالص)', 'Postings in Masar Petroleum’s books (net)'),
          entries: [
            {
              date: t('روز 1 ماه 4', 'Month 4, day 1'),
              lines: [
                { account: ac.bank, debit: 400000 },
                { account: ac.cashCalls, credit: 400000 },
              ],
              memo: t('درخواست وجه شرکا: انرژی البرز 240,000 و نفت دنا 160,000.', 'Partners’ cash calls: Alborz Energy 240,000 and Dena Petroleum 160,000.'),
            },
            {
              date: t('پایان ماه 4: صورت‌حساب', 'End of month 4: billing'),
              lines: [
                { account: ac.cashCalls, debit: 400000 },
                { account: ac.partnerAr, debit: 5500 },
                { account: ac.auc('AFE-2025-014'), credit: 405500 },
              ],
              memo: t('سهم 50٪ شرکا از 811,000 از AUC بیرون می‌رود؛ 5,500 مانده (3,300 و 2,200) دریافتنی است.', 'The partners’ 50% of 811,000 leaves AUC; the 5,500 balance (3,300 and 2,200) is receivable.'),
            },
            {
              date: t('پایان ماه 4: تسویه دوره‌ای', 'End of month 4: periodic settlement'),
              lines: [
                { account: ac.training, debit: 7500 },
                { account: ac.auc('AFE-2025-014.03.02'), credit: 7500 },
              ],
              memo: t('سهم مسار از آموزش ماه 4: 50٪ × 15,000.', 'Masar’s share of month-4 training: 50% × 15,000.'),
            },
            {
              date: t('پایان ماه 4: سرمایه‌ای کردن جزئی', 'End of month 4: partial capitalisation'),
              lines: [
                { account: ac.well, debit: 3950000 },
                { account: ac.auc('AFE-2025-014'), credit: 3950000 },
              ],
              memo: t('سهم مسار از 7,900,000: چاه از ماه 4 آماده بهره‌برداری است.', 'Masar’s share of 7,900,000: the well is ready for use from month 4.'),
            },
          ],
        },
        {
          type: 'p',
          text: t(
            'آشتی 1510 در دفاتر مسار: هزینه ناخالص تا پایان ماه 4 برابر 7,940,000 بود و سهم 50٪ مسار 3,970,000 است. 12,500 از آن (50٪ آموزش ماه 3) در ماه 3 تسویه شده بود، پس پیش از تسویه‌های ماه 4 مانده 3,957,500 است. تسویه آموزش ماه 4 (7,500) و سرمایه‌ای کردن (3,950,000) آن را صفر می‌کنند: 3,957,500 − 7,500 − 3,950,000 = 0. انرژی البرز و نفت دنا سهم خود از همین چاه (30٪ و 20٪) را در دفاتر خودشان سرمایه‌ای می‌کنند.',
            'Reconciling 1510 in Masar’s books: gross cost to the end of month 4 was 7,940,000 and Masar’s 50% share is 3,970,000. Of that, 12,500 (50% of month-3 training) was settled in month 3, so the balance before the month-4 settlements is 3,957,500. Settling month-4 training (7,500) and capitalising (3,950,000) bring it to zero: 3,957,500 − 7,500 − 3,950,000 = 0. Alborz Energy and Dena Petroleum capitalise their own shares of the same well (30% and 20%) in their own books.',
          ),
        },
        {
          type: 'table',
          caption: t('بخشی از صورت هزینه‌های قابل بازیافت سال قراردادی 2026 (ناخالص، پس از تسویه نهایی)', 'Extract of the 2026 contract-year cost-recovery statement (gross, after final settlement)'),
          head: [t('طبقه', 'Category'), t('قلم', 'Item'), t('قابل بازیافت (R)', 'Recoverable (R)'), t('غیرقابل بازیافت (N)', 'Non-recoverable (N)')],
          rows: [
            [t('توسعه', 'Development'), t('چاه AR-07 (`FA-52007`)، `AFE-2025-014`', 'Well AR-07 (`FA-52007`), `AFE-2025-014`'), 8058000, 0],
            [t('عملیاتی', 'Operating'), t('آموزش اپراتورها و تحویل چاه (5130، `CC-ARY-PRD`)', 'Operator training and handover (5130, `CC-ARY-PRD`)'), 40000, 0],
            [t('ندارد', 'None'), t('بهره دیرکرد فاکتور آزمایش چاه (7110)', 'Late-payment interest on the well-testing invoice (7110)'), 0, 3000],
            [t('جمع', 'Total'), blank(), 8098000, 3000],
          ],
          numericCols: [2, 3],
        },
        {
          type: 'callout',
          tone: 'info',
          title: t('صورت بازیافت هزینه ثبت ندارد', 'The recovery statement posts nothing'),
          text: t(
            'صورت هزینه‌های قابل بازیافت یک گزارش آشتی‌شده از دفتر کل است، نه یک سند حسابداری. جمع R آن برای این AFE باید دقیقاً برابر هزینه نهایی AFE (8,098,000) باشد و اقلام N، مثل بهره دیرکرد که همیشه روی 7110 و با نشانگر N می‌نشیند، کنار گذاشته شوند. هر سطر باید تا سفارش، GRN یا SES با برگه‌های کار امضاشده، کارکرد تأییدشده و فاکتور قابل ردیابی باشد. بازیافت واقعی پول از راه سهم نفت هزینه یا پرداخت کارفرما، طبق قرارداد، در ثبت‌های فروش و تسویه با کارفرما دیده می‌شود.',
            'The cost-recovery statement is a reconciled report from the ledger, not an accounting document. Its R total for this AFE must equal the AFE’s final cost (8,098,000) exactly, and N items, such as late-payment interest, which always sits on 7110 with an N flag, are left out. Every line must trace back to a PO, a GRN or an SES with signed field tickets, an approved timesheet and an invoice. The actual recovery of money, through cost oil or payment by the state counterparty under the contract, appears in the sales and counterparty settlement entries.',
          ),
        },
      ],
    },
    {
      id: 'controls-dashboards',
      title: t('کنترل‌ها، داشبورد، کیفیت داده و چک‌لیست پایان ماه', 'Controls, Dashboards, Data Quality and the Month-End Checklist'),
      blocks: [
        {
          type: 'table',
          caption: t('کنترل‌های کلیدی', 'Key controls'),
          head: [t('کنترل', 'Control'), t('از چه جلوگیری می‌کند', 'What it prevents'), t('کجا در ERP', 'Where in the ERP')],
          rows: [
            [t('کنترل در دسترس بودن بودجه (90٪ هشدار، 100٪ توقف)', 'Availability control (90% warning, 100% stop)'), t('تعهد بدون بودجه', 'Commitment without budget'), t('ماژول پروژه', 'Project module')],
            [t('گردش کار تأیید طبق جدول اختیارات برای درخواست، سفارش و سند بودجه', 'DOA approval workflow for requisitions, POs and budget documents'), t('تعهد بی‌مجوز', 'Unauthorised commitments'), t('گردش کار', 'Workflow')],
            [t('تفکیک وظایف: درخواست‌کننده، تأییدکننده، تحویل‌گیرنده، حساب‌های پرداختنی و پرداخت‌کننده جدا', 'Segregation of duties: requester, approver, receiver, AP and payer are different people'), t('تقلب و خطای بی‌کنترل', 'Fraud and unchecked error'), t('نقش‌های کاربری', 'User roles')],
            [t('تطبیق سه‌طرفه: سفارش، GRN یا SES، فاکتور', 'Three-way match: PO, GRN or SES, invoice'), t('پرداخت کالا یا خدمتی که نرسیده', 'Paying for goods or services not received'), t('حساب‌های پرداختنی', 'Accounts payable')],
            [t('قواعد اعتبارسنجی کدینگ: عنصر هزینه پروژه فقط با WBS؛ WBS بدون طبقه بازیافت یا قاعده تسویه آزاد نمی‌شود؛ 5910 و 7110 همیشه N', 'Coding validation: project cost elements only with a WBS; no WBS release without recovery category and settlement rule; 5910 and 7110 always N'), t('کد غلط، دارایی غلط، ادعای غلط', 'Wrong code, wrong asset, wrong claim'), t('داده پایه و قواعد ثبت', 'Master data and posting rules')],
            [t('کنترل وضعیت: TECO و بسته', 'Status control: TECO and closed'), t('ثبت دیرهنگام بی‌ربط روی AFE قدیمی', 'Unrelated late postings on an old AFE'), t('ماژول پروژه', 'Project module')],
            [t('تاریخچه تغییر اسناد بودجه', 'Change log of budget documents'), t('جابه‌جایی پنهان بودجه', 'Hidden budget moves'), t('ردپای حسابرسی', 'Audit trail')],
          ],
        },
        {
          type: 'list',
          items: [
            t('**نمای کلی AFE**: بودجه، واقعی، تعهد، در دسترس، EAC، VAC و ذخیره احتیاطی باقی‌مانده.', '**AFE overview**: budget, actual, commitments, available, EAC, VAC and contingency left.'),
            t('**عناصر در هشدار یا توقف**: فهرست عنصرهای بالای 90٪ با مالک هر کدام.', '**Elements at warning or stop**: elements above 90% with their owners.'),
            t('**روند CPI و SPI**: منحنی ماهانه، نه فقط عدد امروز.', '**CPI and SPI trend**: the monthly curve, not just today’s number.'),
            t('**سن GR/IR و انباشت SES**: اقلام دریافت‌شده بدون فاکتور و خدمات انجام‌شده بدون SES.', '**GR/IR ageing and SES backlog**: items received but not invoiced and work done without an SES.'),
            t('**سن AUC**: مانده‌های 1510 با تاریخ آخرین ثبت و تاریخ آماده بهره‌برداری.', '**AUC ageing**: 1510 balances with last-posting and ready-for-use dates.'),
            t('**صورت‌حساب و درخواست وجه شرکا**: صادرشده، دریافت‌شده، معوق.', '**Partner billing and cash calls**: issued, received, overdue.'),
            t('**پوشش بازیافت هزینه**: درصد هزینه با طبقه و نشانگر معتبر و درصد اقلام N.', '**Cost-recovery coverage**: share of cost with a valid category and flag, and share of N items.'),
          ],
        },
        {
          type: 'table',
          caption: t('شاخص‌های کیفیت داده (اهداف نمونه)', 'Data-quality indicators (illustrative targets)'),
          head: [t('شاخص', 'Indicator'), t('هدف', 'Target'), t('یافته ماه 4 در AR-07', 'Month-4 finding on AR-07')],
          rows: [
            [t('ثبت‌های دارای WBS، طبقه و نشانگر معتبر', 'Postings with a valid WBS, category and flag'), t('100٪', '100%'), t('100٪؛ دو سند بی‌طبقه را قاعده اعتبارسنجی پیش از ثبت متوقف کرد', '100%; the validation rule stopped two documents without a category before posting')],
            [t('SESهای ثبت‌شده تا بستن دوره', 'SESs entered by period close'), t('دست‌کم 95٪', 'At least 95%'), t('100٪؛ `SES-70655` روز 20 ثبت شد', '100%; `SES-70655` entered on day 20')],
            [t('سفارش‌های باز بالای 180 روز بدون GRN', 'Open POs older than 180 days with no GRN'), t('صفر', 'Zero'), t('صفر', 'Zero')],
            [t('اقلام GR/IR بالای 60 روز', 'GR/IR items older than 60 days'), t('کمتر از 2٪ مانده', 'Under 2% of the balance'), t('صفر؛ فاکتورهای ماه 3 در ماه 4 تطبیق شدند', 'Zero; the month-3 invoices were matched in month 4')],
            [t('کارکردهای تأییدشده تا بستن دوره', 'Timesheets approved by period close'), t('100٪', '100%'), t('100٪؛ 680 ساعت روز 30 تأیید شد', '100%; 680 hours approved on day 30')],
          ],
        },
        { type: 'h', text: t('چک‌لیست پایان ماه کنترل‌کننده پروژه', 'The project controller’s month-end checklist') },
        {
          type: 'steps',
          items: [
            { title: t('3 روز پیش از بستن', '3 days before close'), text: t('یادآوری به مالکان WBS و نماینده‌های شرکت سر چاه: همه GRNها و SESها ثبت شوند؛ رسیدهای معوق پیگیری شوند.', 'Remind WBS owners and company men: every GRN and SES must be entered; chase overdue receipts.') },
            { title: t('1 روز پیش از بستن', '1 day before close'), text: t('کارکردها تأیید و کارتابل تأیید SESها خالی شود.', 'Approve timesheets and clear the SES approval inbox.') },
            { title: t('روز بستن', 'Close day'), text: t('دوره ثبت تدارکات بسته می‌شود؛ تعهدی دستی فقط برای خدمات بدون سفارش.', 'The procurement posting period closes; manual accruals only for services without a PO.') },
            { title: t('روز 1', 'Day 1'), text: t('بازبینی و سن‌سنجی GR/IR؛ بازبینی تعهدات و بستن سفارش‌های مرده.', 'Review and age GR/IR; review commitments and close dead POs.') },
            { title: t('روز 2', 'Day 2'), text: t('ثبت پیشرفت (EV)، به‌روزرسانی ETC و EAC با مهندسان، و سندهای انتقال یا افزایش لازم؛ اجرای تسویه (دوره‌ای، جزئی، نهایی) و بازبینی سن AUC.', 'Enter progress (EV), update ETC and EAC with the engineers, and raise any transfer or supplement documents; run settlement (periodic, partial, final) and review AUC ageing.') },
            { title: t('روز 3', 'Day 3'), text: t('اجرای صورت‌حساب شرکا (Cutback)، صدور JIB، آشتی درخواست وجه و محاسبه درخواست وجه ماه بعد.', 'Run partner billing (cutback), issue JIBs, reconcile cash calls and calculate next month’s cash call.') },
            { title: t('روز 4', 'Day 4'), text: t('گزارش AFE و توضیح انحراف‌ها؛ آشتی گزارش پروژه (ناخالص) با 1510 و مبلغ صورت‌حساب با سهم شرکا.', 'AFE report and variance commentary; reconcile the project report (gross) with 1510 and the billed amount with the partners’ share.') },
            { title: t('روز 5', 'Day 5'), text: t('بازبینی طبقه و نشانگر بازیافت، کامل بودن مستندات (برگه‌های کار امضاشده، کارکردها، فاکتورها) و ارسال گزارش‌ها به مدیریت و شرکا.', 'Check recovery categories and flags and the completeness of evidence (signed field tickets, timesheets, invoices), then send the reports to management and partners.') },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: t('در عمل', 'In practice'),
          text: t(
            'در بسیاری از شرکت‌های ایرانی بستن ماه پروژه هنوز با چند فایل اکسل و تماس تلفنی انجام می‌شود و همین است که گزارش شرکا دو هفته طول می‌کشد. در ERP همین چک‌لیست یک گردش کار با مسئول و مهلت برای هر گام است و داشبورد نشان می‌دهد کدام گام عقب است. هدف واقع‌بینانه برای بهره‌بردار باتجربه، گزارش AFE و JIB تا روز پنجم کاری است.',
            'In many Iranian companies the project month-end still runs on spreadsheets and phone calls, which is why the partner report takes two weeks. In an ERP the same checklist is a workflow with an owner and a deadline for each step, and a dashboard shows which step is late. A realistic target for an experienced operator is the AFE report and JIBs by the fifth working day.',
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
            t('**مقایسه گزارش ناخالص با دفاتر خالص**: و نتیجه گرفتن اینکه «نصف هزینه گم شده است». اثر صورت‌حساب شرکا را در آشتی بیاورید.', '**Comparing the gross report with net books**: and concluding “half the cost is missing”. Bring partner billing into the reconciliation.'),
            t('**صورت‌حساب پیش از بستن SESها**: هزینه‌ای که ماه بعد ثبت شود، در صورت‌حساب ماه بعد می‌آید و درخواست وجه را بی‌دقت می‌کند.', '**Billing before SESs are in**: cost posted next month lands on next month’s bill and distorts cash calls.'),
            t('**فراموش کردن کارکرد کارکنان**: کار بدون سفارش در گزارش تعهدات دیده نمی‌شود و بودجه را بی‌صدا می‌خورد.', '**Forgetting staff time**: work without a PO is invisible in the commitment report and silently eats budget.'),
            t('**ثبت دیرهنگام روی مرکز هزینه**: فاکتوری که پس از TECO می‌رسد روی WBS بنشیند و با تسویه بعدی به دارایی برود، نه به هزینه دوره.', '**Late postings to a cost centre**: an invoice arriving after TECO belongs on the WBS and goes to the asset by subsequent settlement, not to period expense.'),
            t('**طبقه یا نشانگر در پایان سال**: برچسب بازیافت را روز ساخت WBS بگذارید، نه هنگام تهیه صورت بازیافت.', '**Category or flag at year end**: set recovery labels when the WBS is created, not when the recovery statement is prepared.'),
            t('**دور زدن کنترل با اکسل**: گزارشی که خارج از ERP اصلاح شود، دیگر با دفتر کل و صورت‌حساب شرکا آشتی نمی‌شود.', '**Bypassing control in spreadsheets**: a report corrected outside the ERP no longer reconciles with the ledger or partner billing.'),
          ],
        },
        { type: 'h', text: t('تمرین‌ها', 'Exercises') },
        {
          type: 'exercise',
          title: t('تمرین 1: سند، اثر بودجه و ثبت مالی', 'Exercise 1: Document, budget effect and Finance posting'),
          difficulty: 'easy',
          problem: t(
            'برای هر رویداد زیر بگویید چه سندی در ERP ثبت می‌شود، چه اثری بر بودجه یا تعهد دارد و ERP در مالی چه ثبتی می‌زند (اگر می‌زند). همه روی یک AFE سرمایه‌ای در مشارکت است.',
            'For each event below, say which ERP document is recorded, what it does to the budget or commitments and what the ERP posts in Finance (if anything). All are on a capital AFE in the joint venture.',
          ),
          given: {
            head: [t('رویداد', 'Event'), t('شرح', 'Description')],
            rows: [
              [t('الف', 'a'), t('شرکا AFE را تصویب کرده‌اند و کنترل‌کننده بودجه را بارگذاری می‌کند.', 'The partners have approved the AFE and the controller loads the budget.')],
              [t('ب', 'b'), t('خریدار فراخوان 3 روز نمودارگیری با کابل (Wireline) را صادر می‌کند.', 'The buyer issues a call-off for 3 days of wireline logging.')],
              [t('ج', 'c'), t('انباردار پکرهایی را که مستقیم برای WBS سفارش داده شده‌اند تحویل می‌گیرد.', 'The storekeeper receives packers ordered directly for the WBS.')],
              [t('د', 'd'), t('نماینده شرکت 2 روز نمودارگیری را تأیید می‌کند.', 'The company man accepts 2 days of wireline logging.')],
              [t('هـ', 'e'), t('ساعات مهندسان روی WBS تأیید می‌شود.', 'Engineers’ hours on the WBS are approved.')],
              [t('و', 'f'), t('مسار پترولیوم صورت‌حساب ماه را برای شرکا صادر می‌کند.', 'Masar Petroleum issues the month’s bill to the partners.')],
            ],
          },
          solution: [
            {
              type: 'table',
              head: [t('رویداد', 'Event'), t('سند', 'Document'), t('اثر بودجه', 'Budget effect'), t('ثبت مالی', 'Finance posting')],
              rows: [
                [t('الف', 'a'), t('سند بودجه اولیه', 'Original budget document'), t('بودجه روی عناصر', 'Budget on the elements'), t('ندارد', 'None')],
                [t('ب', 'b'), t('سفارش فراخوان', 'Call-off order'), t('تعهد زیاد', 'Commitment up'), t('ندارد', 'None')],
                [t('ج', 'c'), t('رسید کالا (GRN)', 'Goods received note (GRN)'), t('تعهد کم، واقعی زیاد', 'Commitment down, actual up'), t('بدهکار 1510 (WBS)؛ بستانکار 2120', 'Dr 1510 (WBS); Cr 2120')],
                [t('د', 'd'), t('برگه ثبت خدمات (SES)', 'Service entry sheet (SES)'), t('تعهد کم، واقعی زیاد', 'Commitment down, actual up'), t('بدهکار 1510 (WBS)؛ بستانکار 2120', 'Dr 1510 (WBS); Cr 2120')],
                [t('هـ', 'e'), t('برگه کارکرد', 'Timesheet'), t('واقعی زیاد؛ تعهدی ندارد', 'Actual up; no commitment'), t('بدهکار 1510 (WBS)؛ بستانکار 5190', 'Dr 1510 (WBS); Cr 5190')],
                [t('و', 'f'), t('اجرای صورت‌حساب شرکا (JIB)', 'Partner billing run (JIB)'), t('بی‌اثر؛ گزارش AFE ناخالص می‌ماند', 'None; the AFE report stays gross'), t('بدهکار 2140 یا 1700؛ بستانکار 1510 (سهم شرکا)', 'Dr 2140 or 1700; Cr 1510 (partners’ share)')],
              ],
            },
          ],
          answer: t('فقط GRN، SES، کارکرد و صورت‌حساب شرکا ثبت مالی دارند؛ سند بودجه و سفارش فقط بودجه و تعهد را تغییر می‌دهند.', 'Only the GRN, SES, timesheet and partner billing post to Finance; the budget document and the order change only budget and commitments.'),
        },
        {
          type: 'exercise',
          title: t('تمرین 2: صورت‌حساب شرکا با درخواست وجه', 'Exercise 2: Partner billing against cash calls'),
          difficulty: 'medium',
          problem: t(
            'هزینه ناخالص یک ماه روی AFE برابر 840,000 است. سهم‌ها: مسار 50٪، انرژی البرز 30٪، نفت دنا 20٪. در آغاز ماه، انرژی البرز 240,000 و نفت دنا 170,000 درخواست وجه پرداخته‌اند. (الف) سهم هر شریک و مانده او را حساب کنید. (ب) ثبت صورت‌حساب پایان ماه را در دفاتر مسار بنویسید. (ج) با مازاد نفت دنا چه می‌کنید؟',
            'The month’s gross cost on an AFE is 840,000. Shares: Masar 50%, Alborz Energy 30%, Dena Petroleum 20%. At the start of the month Alborz Energy paid a cash call of 240,000 and Dena Petroleum 170,000. (a) Calculate each partner’s share and balance. (b) Write the month-end billing entry in Masar’s books. (c) What do you do with Dena Petroleum’s excess?',
          ),
          solution: [
            {
              type: 'table',
              head: [t('شریک', 'Partner'), t('سهم هزینه', 'Share of cost'), t('درخواست وجه پرداخته', 'Cash call paid'), t('مانده', 'Balance')],
              rows: [
                [t('انرژی البرز (30٪)', 'Alborz Energy (30%)'), 252000, 240000, t('12,000 بدهکار', '12,000 owed')],
                [t('نفت دنا (20٪)', 'Dena Petroleum (20%)'), 168000, 170000, t('2,000 پیش‌پرداخت اضافه', '2,000 overpaid')],
                [t('جمع شرکا', 'Partners total'), 420000, 410000, t('10,000 خالص بدهکار', '10,000 net owed')],
              ],
              numericCols: [1, 2, 3],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: t('پایان ماه', 'Month end'),
                  lines: [
                    { account: ac.cashCalls, debit: 408000 },
                    { account: ac.partnerAr, debit: 12000 },
                    { account: t('1510 دارایی‌های در جریان تکمیل (سهم شرکا)', '1510 Assets under construction (partners’ share)'), credit: 420000 },
                  ],
                  memo: t('408,000 = 240,000 از انرژی البرز + 168,000 از شریک ب؛ 12,000 بدهی انرژی البرز.', '408,000 = 240,000 from Alborz Energy + 168,000 from Dena Petroleum; 12,000 owed by Alborz Energy.'),
                },
              ],
            },
            {
              type: 'p',
              text: t(
                '2,000 اضافه نفت دنا در 2140 می‌ماند و از درخواست وجه ماه بعد او کسر می‌شود؛ پس نیازی به بازپرداخت نقدی نیست. سهم خود مسار (420,000) در 1510 می‌ماند.',
                'Dena Petroleum’s 2,000 excess stays in 2140 and is deducted from its next cash call, so no cash refund is needed. Masar’s own share (420,000) stays in 1510.',
              ),
            },
          ],
          answer: t('انرژی البرز 252,000 (12,000 بدهکار)، نفت دنا 168,000 (2,000 مازاد)؛ بستانکار 1510 به مبلغ 420,000.', 'Alborz Energy 252,000 (12,000 owed), Dena Petroleum 168,000 (2,000 excess); credit 1510 for 420,000.'),
        },
        {
          type: 'exercise',
          title: t('تمرین 3: پاک‌سازی پایان ماه', 'Exercise 3: Month-end clean-up'),
          difficulty: 'hard',
          problem: t(
            'گزارش پیش از پاک‌سازی `AFE-2024-034` (نصب فرازآوری با گاز روی چاه‌های AR-03 و AR-05) بودجه 2,000,000، هزینه واقعی 1,120,000، تعهدات 760,000 و بودجه در دسترس 120,000 نشان می‌دهد. چک‌لیست پایان ماه چهار یافته دارد: (1) SES خدمات چاه به مبلغ 95,000 برای کاری که روز 28 تمام شده، ثبت نشده است (سفارشش در تعهدات هست). (2) سفارش 60,000 اجاره جرثقیل دیگر لازم نیست ولی باز است. (3) GRN شیرهایی به مبلغ 30,000 که مال `AFE-2024-018` (چاه AR-08) است، به اشتباه روی این AFE نشسته است. (4) کارکرد 18,000 مهندسان دیر تأیید شده و هنوز ثبت نشده است. ثبت‌های لازم و گزارش پس از پاک‌سازی را بدهید.',
            'Before clean-up, the report for `AFE-2024-034` (gas-lift installation on wells AR-03 and AR-05) shows budget 2,000,000, actuals 1,120,000, commitments 760,000 and available 120,000. The month-end checklist has four findings: (1) a well-services SES of 95,000 for work finished on day 28 has not been entered (its PO is in commitments). (2) A 60,000 crane-rental PO is no longer needed but still open. (3) A 30,000 valve GRN belonging to `AFE-2024-018` (well AR-08) was wrongly charged to this AFE. (4) 18,000 of engineers’ timesheets were approved late and are not yet posted. Give the entries needed and the report after clean-up.',
          ),
          hint: t('برای هر یافته بپرسید: واقعی تغییر می‌کند؟ تعهد تغییر می‌کند؟ بودجه در دسترس چه؟', 'For each finding ask: do actuals change? Do commitments change? What about available budget?'),
          solution: [
            {
              type: 'table',
              head: [t('یافته', 'Finding'), t('واقعی', 'Actual'), t('تعهد', 'Commitments'), t('در دسترس', 'Available')],
              rows: [
                [t('پیش از پاک‌سازی', 'Before clean-up'), 1120000, 760000, 120000],
                [t('1. ثبت SES (95,000)', '1. Enter the SES (95,000)'), 1215000, 665000, 120000],
                [t('2. بستن سفارش جرثقیل (60,000)', '2. Close the crane PO (60,000)'), 1215000, 605000, 180000],
                [t('3. انتقال GRN اشتباه (30,000)', '3. Move the wrong GRN (30,000)'), 1185000, 605000, 210000],
                [t('4. ثبت کارکرد (18,000)', '4. Post the timesheets (18,000)'), 1203000, 605000, 192000],
              ],
              numericCols: [1, 2, 3],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: t('1', '1'),
                  lines: [
                    { account: ac.auc('AFE-2024-034', '6130'), debit: 95000 },
                    { account: ac.grir, credit: 95000 },
                  ],
                  memo: t('SES پیش از بستن دوره؛ تعهد خودکار کم می‌شود.', 'SES before period close; the commitment falls automatically.'),
                },
                {
                  date: t('3', '3'),
                  lines: [
                    { account: ac.auc('AFE-2024-018'), debit: 30000 },
                    { account: ac.auc('AFE-2024-034'), credit: 30000 },
                  ],
                  memo: t('انتقال هزینه به WBS درست با ارجاع به GRN اصلی.', 'Cost transfer to the right WBS, referencing the original GRN.'),
                },
                {
                  date: t('4', '4'),
                  lines: [
                    { account: ac.auc('AFE-2024-034', '6210'), debit: 18000 },
                    { account: ac.staff, credit: 18000 },
                  ],
                },
              ],
            },
            {
              type: 'p',
              text: t(
                'بستن سفارش جرثقیل (یافته 2) ثبت مالی ندارد. پس از پاک‌سازی: 2,000,000 − 1,203,000 − 605,000 = 192,000 بودجه در دسترس. یافته 3 روی `AFE-2024-018` هم 30,000 هزینه واقعی اضافه می‌کند و ممکن است آنجا هشدار بدهد؛ به مالکش اطلاع دهید.',
                'Closing the crane PO (finding 2) posts nothing. After clean-up: 2,000,000 − 1,203,000 − 605,000 = 192,000 available. Finding 3 also adds 30,000 of actual cost to `AFE-2024-018` and may trigger a warning there; tell its owner.',
              ),
            },
          ],
          answer: t('پس از پاک‌سازی: واقعی 1,203,000، تعهد 605,000، بودجه در دسترس 192,000.', 'After clean-up: actuals 1,203,000, commitments 605,000, available 192,000.'),
        },
        {
          type: 'exercise',
          title: t('تمرین 4: سناریوی کامل کوچک', 'Exercise 4: A small end-to-end scenario'),
          difficulty: 'hard',
          problem: t(
            '`AFE-2024-029` (حفاظت کاتدی خط لوله صادرات نفت میدان) با بودجه 300,000، طبقه توسعه و نشانگر R تصویب شده است؛ سهم‌ها 50/30/20. رویدادها: سفارش مواد 120,000 و GRN کامل آن؛ فاکتور 123,000 (3,000 تفاوت تأییدشده)؛ SES نصب 140,000؛ کارکرد مهندسان 15,000؛ صورت‌حساب شرکا در پایان ماه (بدون درخواست وجه)؛ سامانه آماده بهره‌برداری است و به دارایی `FA-57029` تسویه می‌شود. (الف) ثبت‌های دفاتر مسار را بنویسید. (ب) هزینه ناخالص، سهم هر شریک، بهای دارایی در دفاتر مسار و برگشت بودجه را حساب کنید. (ج) صورت بازیافت این AFE چه می‌گوید؟',
            '`AFE-2024-029` (cathodic protection for the field’s oil export pipeline) was approved at 300,000, Development category, flag R; shares 50/30/20. Events: a materials PO of 120,000 and its full GRN; an invoice of 123,000 (3,000 approved difference); an installation SES of 140,000; engineers’ timesheets of 15,000; partner billing at month end (no cash call); the system is ready for use and is settled to asset `FA-57029`. (a) Write the entries in Masar’s books. (b) Calculate the gross cost, each partner’s share, the asset value in Masar’s books and the budget return. (c) What does this AFE’s recovery statement say?',
          ),
          solution: [
            {
              type: 'journal',
              entries: [
                { date: t('GRN', 'GRN'), lines: [{ account: ac.auc('AFE-2024-029', '6310'), debit: 120000 }, { account: ac.grir, credit: 120000 }] },
                {
                  date: t('فاکتور', 'Invoice'),
                  lines: [
                    { account: ac.grir, debit: 120000 },
                    { account: ac.auc('AFE-2024-029', '6310'), debit: 3000 },
                    { account: ac.ap, credit: 123000 },
                  ],
                },
                { date: t('SES', 'SES'), lines: [{ account: ac.auc('AFE-2024-029', '6130'), debit: 140000 }, { account: ac.grir, credit: 140000 }] },
                { date: t('کارکرد', 'Timesheets'), lines: [{ account: ac.auc('AFE-2024-029', '6210'), debit: 15000 }, { account: ac.staff, credit: 15000 }] },
                {
                  date: t('صورت‌حساب شرکا', 'Partner billing'),
                  lines: [
                    { account: ac.partnerAr, debit: 139000 },
                    { account: ac.auc('AFE-2024-029'), credit: 139000 },
                  ],
                  memo: t('50٪ از 278,000: انرژی البرز 83,400 و نفت دنا 55,600.', '50% of 278,000: Alborz Energy 83,400 and Dena Petroleum 55,600.'),
                },
                {
                  date: t('تسویه', 'Settlement'),
                  lines: [
                    { account: t('1520 دارایی‌های نفت و گاز: حفاظت کاتدی خط صادرات (`FA-57029`)', '1520 Oil and gas properties: export-line cathodic protection (`FA-57029`)'), debit: 139000 },
                    { account: ac.auc('AFE-2024-029'), credit: 139000 },
                  ],
                },
              ],
            },
            {
              type: 'steps',
              items: [
                { title: t('هزینه ناخالص', 'Gross cost'), text: t('120,000 + 3,000 + 140,000 + 15,000 = 278,000.', '120,000 + 3,000 + 140,000 + 15,000 = 278,000.') },
                { title: t('سهم‌ها', 'Shares'), text: t('مسار 139,000؛ انرژی البرز 30٪ × 278,000 = 83,400؛ نفت دنا 20٪ × 278,000 = 55,600.', 'Masar 139,000; Alborz Energy 30% × 278,000 = 83,400; Dena Petroleum 20% × 278,000 = 55,600.') },
                { title: t('دارایی و برگشت', 'Asset and return'), text: t('بهای `FA-57029` در دفاتر مسار 139,000 است و مانده 1510 صفر می‌شود (278,000 − 139,000 − 139,000). برگشت بودجه: 300,000 − 278,000 = 22,000.', 'The cost of `FA-57029` in Masar’s books is 139,000 and 1510 returns to zero (278,000 − 139,000 − 139,000). Budget return: 300,000 − 278,000 = 22,000.') },
                { title: t('صورت بازیافت', 'Recovery statement'), text: t('طبقه توسعه، قابل بازیافت (R): 278,000 ناخالص؛ برابر هزینه نهایی AFE؛ بدون قلم N.', 'Development category, recoverable (R): 278,000 gross; equal to the AFE’s final cost; no N items.') },
              ],
            },
          ],
          answer: t('هزینه ناخالص 278,000؛ انرژی البرز 83,400، نفت دنا 55,600؛ دارایی مسار 139,000؛ برگشت 22,000؛ بازیافت توسعه R برابر 278,000.', 'Gross cost 278,000; Alborz Energy 83,400, Dena Petroleum 55,600; Masar’s asset 139,000; return 22,000; Development R recovery 278,000.'),
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
            t('زنجیره کامل: WP&B، AFE، بودجه WBS، تعهد، هزینه واقعی، گزارش، تسویه، صورت‌حساب شرکا، صورت بازیافت و بستن؛ نیمه برنامه ثبت مالی ندارد.', 'The full chain: WP&B, AFE, WBS budget, commitments, actuals, report, settlement, partner billing, recovery statement and close; the planning half posts nothing.'),
            t('GRN و SES تعهد را به هزینه واقعی تبدیل می‌کنند (بدهکار 1510، بستانکار 2120)؛ کارکرد بدون تعهد ثبت می‌شود (بدهکار 1510، بستانکار 5190).', 'GRNs and SESs turn commitments into actuals (Dr 1510, Cr 2120); timesheets post with no commitment (Dr 1510, Cr 5190).'),
            t('مانده GR/IR پایان ماه هزینه دریافت‌شده و فاکتورنشده است؛ در ماه 4 چاه AR-07 برابر 743,000.', 'The month-end GR/IR balance is the received-not-invoiced accrual; 743,000 on AR-07 in month 4.'),
            t('گزارش AFE و صورت‌حساب شرکا ناخالص‌اند؛ دفاتر بهره‌بردار پس از Cutback فقط سهم خودش را دارند.', 'The AFE report and partner billing are gross; after the cutback the operator’s books carry only its own share.'),
            t('صورت بازیافت گزارشی آشتی‌شده است: جمع R برابر هزینه نهایی AFE و اقلام N بیرون.', 'The recovery statement is a reconciled report: R total equals the AFE’s final cost, N items excluded.'),
            t('کنترل‌ها، داشبوردها و شاخص‌های کیفیت داده کمک می‌کنند خطا پیش از ثبت گرفته شود، نه در حسابرسی.', 'Controls, dashboards and data-quality indicators catch errors before posting, not at audit.'),
            t('چک‌لیست پایان ماه با مسئول و مهلت، گزارش AFE و JIB را تا روز پنجم کاری ممکن می‌کند.', 'A month-end checklist with owners and deadlines makes the AFE report and JIBs possible by the fifth working day.'),
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            { term: t('یکپارچگی ERP', 'ERP integration'), def: t('ثبت یک‌باره هر رویداد در یک سند که هم‌زمان همه ماژول‌های مرتبط را به‌روز می‌کند.', 'Recording each event once in one document that updates every related module at the same time.') },
            { term: t('صورت‌حساب هزینه‌های مشترک (JIB)', 'Joint interest billing (JIB)'), def: t('صورت‌حساب ماهانه بهره‌بردار به هر شریک برای سهم او از هزینه ناخالص.', 'The operator’s monthly bill to each partner for its share of gross cost.') },
            { term: t('تقسیم سهم شرکا (Cutback)', 'Cutback'), def: t('اجرای ERP که سهم شرکا را از هزینه و AUC به دریافتنی یا پیش‌دریافت شرکا منتقل می‌کند.', 'The ERP run that moves the partners’ share out of cost and AUC to the partner receivable or advance.') },
            { term: t('درخواست وجه (Cash call)', 'Cash call'), def: t('پیش‌دریافت سهم شرکا از هزینه‌های آینده بر پایه بودجه زمان‌بندی‌شده.', 'An advance of the partners’ share of future cost, based on the phased budget.') },
            { term: t('هزینه ناخالص و خالص', 'Gross and net cost'), def: t('ناخالص 100٪ هزینه پروژه است؛ خالص سهم یک شریک پس از Cutback.', 'Gross is 100% of the project cost; net is one partner’s share after the cutback.') },
            { term: t('برگه کارکرد', 'Timesheet'), def: t('سند ساعات کار کارکنان روی WBS که هزینه را از مرکز هزینه به پروژه منتقل می‌کند.', 'The record of staff hours on a WBS that moves cost from the cost centre to the project.') },
            { term: t('صورت هزینه‌های قابل بازیافت', 'Cost-recovery statement'), def: t('گزارش هزینه‌ها به تفکیک طبقه و نشانگر R/N برای ادعا طبق قرارداد نفتی.', 'A report of costs by category and R/N flag for claims under the petroleum contract.') },
            { term: t('قاعده اعتبارسنجی', 'Validation rule'), def: t('قاعده‌ای که ثبت یا آزادسازی ناقص (مثلاً WBS بدون طبقه بازیافت) را پیش از وقوع متوقف می‌کند.', 'A rule that stops an incomplete posting or release (for example a WBS without a recovery category) before it happens.') },
            { term: t('چک‌لیست پایان ماه', 'Month-end checklist'), def: t('گام‌های زمان‌بندی‌شده کنترل پروژه از یادآوری SES تا ارسال گزارش‌ها.', 'The timed project-control steps from SES reminders to sending the reports.') },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: t('در زنجیره AFE چاه AR-07، کدام سند نخستین ثبت را در دفتر کل می‌زند؟', 'In the AR-07 AFE chain, which document makes the first general-ledger posting?'),
      options: [t('تصویب AFE', 'AFE approval'), t('سفارش خرید', 'Purchase order'), t('GRN یا SES', 'GRN or SES'), t('سند بودجه اولیه', 'Original budget document')],
      answer: 2,
      explain: t(
        'WP&B، AFE، سند بودجه و سفارش خرید همه ثبت مالی ندارند؛ فقط بودجه و تعهد را تغییر می‌دهند. نخستین ثبت با GRN یا SES است: بدهکار 1510 و بستانکار GR/IR.',
        'The WP&B, AFE, budget document and purchase order post nothing; they only change budget and commitments. The first posting comes with the GRN or SES: debit 1510, credit GR/IR.',
      ),
    },
    {
      q: t('هزینه ناخالص ماه 4 روی AFE چاه AR-07 برابر 811,000 است. سهم انرژی البرز (30٪) در صورت‌حساب چقدر است؟', 'Gross month-4 cost on the AR-07 AFE is 811,000. What is Alborz Energy’s (30%) share on the bill?'),
      options: [t('405,500', '405,500'), t('162,200', '162,200'), t('811,000', '811,000'), t('243,300', '243,300')],
      answer: 3,
      explain: t(
        '30٪ × 811,000 = 243,300. 405,500 سهم کل شرکا (50٪) است و 162,200 سهم نفت دنا (20٪).',
        '30% × 811,000 = 243,300. 405,500 is the partners’ combined 50% share and 162,200 is Dena Petroleum’s 20%.',
      ),
    },
    {
      q: t('سرمایه‌ای کردن جزئی چاه AR-07 در ماه 4 روی 7,900,000 ناخالص است. چه مبلغی در دفاتر مسار پترولیوم به 1520 می‌رود؟', 'Partial capitalisation of AR-07 in month 4 is on 7,900,000 gross. What amount goes to 1520 in Masar Petroleum’s books?'),
      options: [t('3,950,000', '3,950,000'), t('7,900,000', '7,900,000'), t('2,370,000', '2,370,000'), t('3,970,000', '3,970,000')],
      answer: 0,
      explain: t(
        'پس از Cutback، دفاتر مسار فقط 50٪ را دارند: 50٪ × 7,900,000 = 3,950,000. 7,900,000 رقم ناخالص گزارش پروژه است و 3,970,000 سهم مسار از کل هزینه تا ماه 4 پیش از کسر آموزش.',
        'After the cutback Masar’s books hold only 50%: 50% × 7,900,000 = 3,950,000. 7,900,000 is the gross project figure, and 3,970,000 is Masar’s share of all cost to month 4 before training is taken out.',
      ),
    },
    {
      q: t('کارکرد 680 ساعت تیم نظارت روی `AFE-2025-014.04.01` تأیید می‌شود. ERP چه ثبتی می‌زند؟', 'Supervision timesheets of 680 hours on `AFE-2025-014.04.01` are approved. What does the ERP post?'),
      options: [
        t('بدهکار 5110، بستانکار 1110', 'Dr 5110, Cr 1110'),
        t('بدهکار 1510، بستانکار 2120', 'Dr 1510, Cr 2120'),
        t('بدهکار 1510 (WBS، عنصر 6210)، بستانکار 5190', 'Dr 1510 (WBS, element 6210), Cr 5190'),
        t('هیچ ثبتی؛ کارکرد فقط آماری است', 'Nothing; timesheets are only statistical'),
      ],
      answer: 2,
      explain: t(
        'کارکرد هزینه حقوق را از مرکز هزینه حفاری به پروژه منتقل می‌کند: بدهکار WBS سرمایه‌ای (1510) و بستانکار 5190 روی `CC-ARY-DRL`. GR/IR فقط برای GRN و SES است، چون کارکرد داخلی فاکتوری ندارد.',
        'A timesheet moves payroll cost from the drilling cost centre to the project: debit the capital WBS (1510) and credit 5190 on `CC-ARY-DRL`. GR/IR is only for GRNs and SESs, because in-house time has no invoice.',
      ),
    },
    {
      q: t('عنصر `.03.02` بودجه 780,000، واقعی 688,000 و تعهد 72,000 دارد. خریدار می‌خواهد سفارش را 25,000 افزایش دهد. با هشدار از 90٪ و توقف بیش از 100٪، ERP چه می‌کند؟', 'Element `.03.02` has a budget of 780,000, actuals of 688,000 and commitments of 72,000. The buyer wants to increase the PO by 25,000. With a warning from 90% and a stop above 100%, what does the ERP do?'),
      options: [t('بدون پیام ذخیره می‌کند', 'Saves it with no message'), t('هشدار می‌دهد و ذخیره می‌کند', 'Warns and saves it'), t('توقف قطعی؛ مصرف 100.6٪ می‌شود', 'Hard stop; consumption becomes 100.6%'), t('کل AFE را متوقف می‌کند', 'Stops the whole AFE')],
      answer: 2,
      explain: t(
        '(688,000 + 72,000 + 25,000) ÷ 780,000 = 785,000 ÷ 780,000 = 100.6٪؛ بیش از 100٪ است و سند ذخیره نمی‌شود. در دسترس فقط 20,000 است؛ پس یا 5,000 انتقال لازم است یا افزایش کمتر.',
        '(688,000 + 72,000 + 25,000) ÷ 780,000 = 785,000 ÷ 780,000 = 100.6%; above 100%, so the document is not saved. Only 20,000 is available, so either a 5,000 transfer or a smaller increase is needed.',
      ),
    },
    {
      q: t('ترتیب درست زنجیره کدام است؟', 'Which is the correct order of the chain?'),
      options: [
        t('WP&B، AFE، بودجه WBS، سفارش، GRN یا SES، گزارش، تسویه، صورت‌حساب شرکا، صورت بازیافت', 'WP&B, AFE, WBS budget, PO, GRN or SES, report, settlement, partner billing, recovery statement'),
        t('AFE، سفارش، WP&B، بودجه WBS، GRN یا SES، صورت بازیافت، گزارش، تسویه، صورت‌حساب شرکا', 'AFE, PO, WP&B, WBS budget, GRN or SES, recovery statement, report, settlement, partner billing'),
        t('سفارش، GRN یا SES، AFE، WP&B، بودجه WBS، گزارش، صورت‌حساب شرکا، تسویه، صورت بازیافت', 'PO, GRN or SES, AFE, WP&B, WBS budget, report, partner billing, settlement, recovery statement'),
        t('WP&B، بودجه WBS، GRN یا SES، سفارش، AFE، تسویه، گزارش، صورت بازیافت، صورت‌حساب شرکا', 'WP&B, WBS budget, GRN or SES, PO, AFE, settlement, report, recovery statement, partner billing'),
      ],
      answer: 0,
      explain: t(
        'اول برنامه و مجوز (WP&B و AFE)، بعد بودجه روی WBS، بعد تعهد (سفارش)، بعد هزینه واقعی (GRN یا SES)، بعد گزارش، تسویه و صورت‌حساب، و در پایان صورت بازیافت. سفارش پیش از AFE یعنی خرج بدون مجوز.',
        'First plan and authority (WP&B and AFE), then budget on the WBS, then commitment (PO), then actual cost (GRN or SES), then the report, settlement and billing, and finally the recovery statement. A PO before the AFE means spending without authority.',
      ),
    },
    {
      q: t('کدام کنترل بهترین راه جلوگیری از هزینه‌ای است که بدون طبقه بازیافت روی یک WBS تازه ثبت شود؟', 'Which control best prevents cost being posted without a recovery category on a new WBS?'),
      options: [
        t('بازبینی صورت بازیافت در پایان سال', 'Reviewing the recovery statement at year end'),
        t('کنترل در دسترس بودن بودجه', 'Availability control'),
        t('تطبیق سه‌طرفه', 'Three-way match'),
        t('قاعده اعتبارسنجی: WBS بدون طبقه و نشانگر آزاد نمی‌شود', 'A validation rule: a WBS without category and flag cannot be released'),
      ],
      answer: 3,
      explain: t(
        'قاعده اعتبارسنجی خطا را پیش از وقوع می‌گیرد: WBS ناقص اصلاً آزاد نمی‌شود و ثبتی رویش نمی‌نشیند. بازبینی پایان سال دیر است و کنترل بودجه و تطبیق سه‌طرفه به طبقه بازیافت کاری ندارند.',
        'A validation rule catches the error before it happens: an incomplete WBS cannot be released, so nothing can post to it. A year-end review is too late, and availability control and three-way match do not look at the recovery category.',
      ),
    },
    {
      q: t('شرکا برای ماه 4 مجموعاً 400,000 درخواست وجه پرداخته‌اند و سهمشان از هزینه ماه 405,500 است. مانده دریافتنی از شرکا چقدر است؟', 'The partners paid 400,000 of cash calls for month 4 and their share of the month’s cost is 405,500. What is the balance receivable from partners?'),
      options: [t('405,500', '405,500'), t('5,500', '5,500'), t('400,000', '400,000'), t('811,000', '811,000')],
      answer: 1,
      explain: t(
        '405,500 − 400,000 = 5,500 (انرژی البرز 3,300 و نفت دنا 2,200). صورت‌حساب ابتدا با پیش‌دریافت 2140 تسویه می‌شود و فقط مانده به 1700 می‌رود.',
        '405,500 − 400,000 = 5,500 (Alborz Energy 3,300 and Dena Petroleum 2,200). The bill is first settled against the 2140 advance, and only the balance goes to 1700.',
      ),
    },
    {
      q: t('چرا چک‌لیست پایان ماه اصرار دارد SES پیش از بستن دوره ثبت شود، به‌جای تعهدی دستی؟', 'Why does the month-end checklist insist that SESs are entered before close, instead of a manual accrual?'),
      options: [
        t('چون SES هم هزینه واقعی را با سند ثبت می‌کند و هم تعهد را کم می‌کند؛ تعهدی دستی تعهد را باز می‌گذارد', 'Because the SES records actual cost with evidence and also reduces the commitment; a manual accrual leaves the commitment open'),
        t('چون تعهدی دستی در IFRS مجاز نیست', 'Because manual accruals are not allowed under IFRS'),
        t('چون SES پرداخت را خودکار انجام می‌دهد', 'Because the SES pays the supplier automatically'),
        t('چون SES سهم شرکا را حساب می‌کند', 'Because the SES calculates the partners’ share'),
      ],
      answer: 0,
      explain: t(
        'SES هزینه را با پیوست (برگه‌های کار امضاشده) ثبت و تعهد سفارش را هم‌زمان کم می‌کند؛ تعهدی دستی هزینه را درست می‌کند اما تعهد را باز می‌گذارد و بودجه در دسترس را کمتر از واقع نشان می‌دهد. تعهدی در IFRS کاملاً مجاز است؛ مشکل فقط در کیفیت داده است.',
        'An SES records the cost with evidence (signed field tickets) and reduces the PO commitment at the same time; a manual accrual fixes the cost but leaves the commitment open and understates available budget. Accruals are entirely allowed under IFRS; the issue is data quality.',
      ),
    },
    {
      q: t('گزارش AFE تا پایان ماه 4 هزینه واقعی 7,940,000 نشان می‌دهد، اما مانده 1510 این AFE در دفاتر مسار پیش از تسویه‌های ماه 4 برابر 3,957,500 است. چرا؟', 'The AFE report shows actuals of 7,940,000 to the end of month 4, but the AFE’s 1510 balance in Masar’s books before the month-4 settlements is 3,957,500. Why?'),
      options: [
        t('خطای ثبت؛ باید اصلاح شود', 'A posting error that must be corrected'),
        t('دفتر کل GRNها را ثبت نمی‌کند', 'The ledger does not record GRNs'),
        t('Cutback سهم 50٪ شرکا را بیرون برده و 12,500 آموزش ماه 3 هم تسویه شده است', 'The cutback moved out the partners’ 50% and 12,500 of month-3 training was already settled'),
        t('گزارش AFE تعهدات را هم جزو واقعی آورده است', 'The AFE report includes commitments in actuals'),
      ],
      answer: 2,
      explain: t(
        '50٪ × 7,940,000 = 3,970,000؛ منهای 12,500 آموزش ماه 3 که به 5130 تسویه شد، 3,957,500. این آشتی است، نه خطا. گزارش پروژه ناخالص و دفاتر بهره‌بردار خالص‌اند.',
        '50% × 7,940,000 = 3,970,000; less the 12,500 of month-3 training settled to 5130 gives 3,957,500. This is a reconciliation, not an error: the project report is gross and the operator’s books are net.',
      ),
    },
  ],
}

function blank(): L {
  return { fa: '', en: '' }
}
