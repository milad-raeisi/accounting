import type { Lesson } from '../../types'

const ac = {
  invSpares: { fa: 'موجودی قطعات یدکی: انبار مرکزی', en: 'Inventory: spare parts (Central Warehouse)' },
  grir: { fa: 'حساب واسط رسید کالا و فاکتور (GR/IR)', en: 'GR/IR clearing account' },
  inputVat: { fa: 'مالیات بر ارزش افزوده خرید', en: 'Input VAT receivable' },
  bank: { fa: 'موجودی نقد (بانک)', en: 'Cash at bank' },
  apToos: { fa: 'حساب‌های پرداختنی: فن‌آوران کمپرسور توس', en: 'Accounts payable: Toos Compressor Technologies' },
  wht: { fa: 'مالیات تکلیفی پرداختنی', en: 'Withholding tax payable' },
  insRet: { fa: 'سپرده بیمه پیمانکاران پرداختنی', en: 'Contractor insurance retention payable' },
  repairs188: {
    fa: 'هزینه تعمیر و نگهداری (دستور کار WO-45188، کمپرسور K-102)',
    en: 'Repairs and maintenance expense (work order WO-45188, compressor K-102)',
  },
  repairs240: {
    fa: 'هزینه تعمیر و نگهداری (دستور کار WO-45240، کمپرسور K-201)',
    en: 'Repairs and maintenance expense (work order WO-45240, compressor K-201)',
  },
  apPacking: { fa: 'حساب‌های پرداختنی: آب‌بندسازان اراک', en: 'Accounts payable: Arak Sealing Works' },
}

const blank = { fa: '', en: '' }
const ok = { fa: 'بدون تعارض', en: 'No conflict' }

export const lesson: Lesson = {
  slug: 'procurement-erp-controls',
  number: 9,
  level: 'advanced',
  minutes: 32,
  icon: 'ListChecks',
  tone: 'primary',
  title: {
    fa: 'فرایند کامل خرید در ERP و کنترل‌های داخلی',
    en: 'End-to-End Procure-to-Pay in the ERP and Internal Controls',
  },
  summary: {
    fa: 'این درس همه حلقه‌های دوره را به هم وصل می‌کند: یک کارتریج آب‌بند گاز خشک برای کمپرسور K-102 و خدمات مهندس سازنده روی همان دستور کار، از درخواست خرید تا پرداخت و بازیافت هزینه، با همه اسناد و ثبت‌ها. سپس کنترل‌های داخلی، تحلیل هزینه خرید و شاخص‌های عملکرد، سابقه حسابرسی و نقش اسناد خرید در حسابرسی بازیافت هزینه دولت و شرکا را می‌آموزید.',
    en: 'This lesson ties the whole course together: a dry gas seal cartridge for compressor K-102 and the manufacturer’s field engineer on the same work order, from requisition to payment and cost recovery, with every document and posting. It then covers internal controls, spend analysis and KPIs, the audit trail, and how procurement records support cost-recovery audits by the government and JV partners.',
  },
  objectives: [
    {
      fa: 'یک فرایند کامل تدارکات تا پرداخت را، با یک GRN و یک SES روی یک دستور کار، با همه اسناد، نقش‌ها و ثبت‌های خودکار دنبال کنید.',
      en: 'Trace a full procure-to-pay cycle, with a GRN and an SES on one work order, naming every document, role and automatic posting.',
    },
    {
      fa: 'تفکیک وظایف و حد اختیار را طراحی کنید و تعارض نقش‌ها را تشخیص دهید.',
      en: 'Design segregation of duties and approval limits, and spot role conflicts.',
    },
    {
      fa: 'کنترل‌های کلیدی را به کار ببرید: تطبیق سه‌طرفه (سفارش + GRN یا SES + فاکتور)، کنترل تغییر داده پایه تأمین‌کننده، کنترل فاکتور تکراری و کشف خرد کردن سفارش.',
      en: 'Apply the key controls: three-way match (PO + GRN or SES + invoice), vendor master change control, duplicate-invoice checks and split-order detection.',
    },
    {
      fa: 'هزینه خرید را تحلیل کنید و شاخص‌ها را حساب کنید: زمان چرخه، صرفه‌جویی، تحویل به‌موقع و کامل، و تطبیق در اولین بار.',
      en: 'Analyse spend and compute KPIs: cycle time, savings, on-time and in-full delivery, and first-pass match.',
    },
    {
      fa: 'توضیح دهید سابقه حسابرسی و اسناد خرید چگونه از ادعای بازیافت هزینه در برابر حسابرسی دولت و شرکا دفاع می‌کنند.',
      en: 'Explain how the audit trail and procurement records defend cost-recovery claims in government and partner audits.',
    },
  ],
  sections: [
    {
      id: 'why-controls',
      title: { fa: 'چرا کنترل‌های خرید مهم‌اند؟', en: 'Why Procurement Controls Matter' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'ایمیلی با سربرگ فن‌آوران کمپرسور توس به واحد حساب‌های پرداختنی مسار پترولیوم می‌رسد: «حساب بانکی ما عوض شده؛ لطفاً پرداخت‌ها را به حساب جدید بزنید.» کارمند حساب‌ها، که دسترسی تغییر داده پایه تأمین‌کننده هم دارد، شماره حساب را عوض می‌کند. اجرای پرداخت بعدی 92,400 را به حساب یک کلاهبردار می‌فرستد. همان ماه، حسابرس شرکای مشارکت 2٪ از هزینه‌های یک فصل را رد می‌کند، چون برای چند خرید نه سفارش تأییدشده بود و نه رسید. هر دو اتفاق یک ریشه دارند: **کنترل داخلی** ضعیف.',
            en: 'An email on Toos Compressor Technologies letterhead reaches Masar Petroleum’s accounts payable team: “Our bank account has changed; please pay the new one.” The AP clerk, who can also edit the vendor master, changes the account. The next payment run sends 92,400 to a fraudster. The same month, the JV partners’ auditor rejects 2% of a quarter’s costs because several purchases had neither an approved PO nor a receipt. Both events share one root cause: weak **internal control**.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**کنترل داخلی** مجموعه قواعد، نقش‌ها و بررسی‌هایی است که مطمئن می‌کند هر خرید مجاز، واقعی، درست ثبت‌شده و قابل اثبات است. در یک ERP، بیشتر این کنترل‌ها خودکارند: سیستم اجازه نمی‌دهد یک نفر هم سفارش بدهد و هم کالا را رسید کند، یا فاکتوری بدون GRN پرداخت شود. کنترل‌های خرید چهار هدف دارند:',
            en: '**Internal control** is the set of rules, roles and checks that makes sure every purchase is authorised, real, correctly recorded and provable. In an ERP most of these controls are automatic: the system does not let one person both order and receive goods, or pay an invoice without a GRN. Procurement controls have four goals:',
          },
        },
        {
          type: 'list',
          items: [
            { fa: '**پیشگیری از خطا و تقلب**: پرداخت تکراری، کالای نرسیده، حساب بانکی جعلی.', en: '**Prevent error and fraud**: duplicate payments, goods never received, fake bank accounts.' },
            { fa: '**ثبت قابل اتکا**: هر هزینه با مبلغ درست، در دوره درست و روی کد درست.', en: '**Reliable records**: every cost at the right amount, in the right period, on the right code.' },
            { fa: '**رعایت قانون و قرارداد**: آیین‌نامه معاملات، مالیات، و رویه حسابداری قرارداد نفتی.', en: '**Compliance**: the transactions regulation, tax law and the petroleum contract’s accounting procedure.' },
            { fa: '**قابل بازیافت بودن هزینه**: هر رقم صورت هزینه تا سند اولیه‌اش قابل ردیابی باشد.', en: '**Recoverable costs**: every figure in the cost statement traceable to its source document.' },
          ],
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'کنترل پیشگیرانه', en: 'Preventive controls' },
            items: [
              { fa: 'جلوی رخ دادن خطا یا تقلب را می‌گیرد', en: 'Stop an error or fraud from happening' },
              { fa: 'گردش کار تأیید سفارش طبق جدول اختیارات', en: 'PO approval workflow per the DOA' },
              { fa: 'قفل پرداخت فاکتورِ خارج از حد تحمل', en: 'Payment block on an out-of-tolerance invoice' },
              { fa: 'نقش‌های کاربری با تفکیک وظایف', en: 'User roles built on segregation of duties' },
            ],
          },
          right: {
            title: { fa: 'کنترل کشف‌کننده', en: 'Detective controls' },
            items: [
              { fa: 'خطا یا تقلبِ رخ‌داده را زود پیدا می‌کند', en: 'Find an error or fraud soon after it happens' },
              { fa: 'گزارش هفتگی تغییرات داده پایه تأمین‌کننده', en: 'Weekly vendor master change report' },
              { fa: 'تحلیل سنی ماهانه GR/IR', en: 'Monthly GR/IR ageing' },
              { fa: 'گزارش سفارش‌های پس از فاکتور و خرد کردن سفارش', en: 'After-the-fact PO and split-order reports' },
            ],
          },
        },
      ],
    },
    {
      id: 'end-to-end',
      title: { fa: 'سناریوی کامل: آب‌بند گاز خشک کمپرسور K-102', en: 'The Full Scenario: A Dry Gas Seal for Compressor K-102' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'کمپرسور گریز از مرکز K-102 در ایستگاه تقویت فشار میدان آریا دو **کارتریج آب‌بند گاز خشک** دارد؛ قطعه‌ای حیاتی با زمان تأمین حدود 20 هفته. داده پایه کالا (`300580`) حداقل موجودی 1 و حداکثر 2 را در انبار مرکزی (`WH-10`) تعیین می‌کند. پس از یک تعویض اضطراری، موجودی صفر شده است. هم‌زمان، برنامه‌ریز نگهداری دستور کار `WO-45188` را برای تعمیرات دوره‌ای K-102 باز کرده است که به مرکز هزینه `CC-ARY-CMP` تسویه می‌شود؛ کد کامل هزینه: `MP01 / CC-ARY-CMP / 5120 / R / عملیات`. این دستور کار یک کارتریج و 4 روز خدمات مهندس سازنده لازم دارد.',
            en: 'Centrifugal compressor K-102 at the Arya field compressor station has two **dry gas seal cartridges**, critical parts with a lead time of about 20 weeks. The material master (`300580`) sets a minimum of 1 and a maximum of 2 in the Central Warehouse (`WH-10`). After an emergency replacement, stock is zero. Meanwhile the maintenance planner has opened work order `WO-45188` for K-102’s planned maintenance, which settles to cost centre `CC-ARY-CMP`; full cost code: `MP01 / CC-ARY-CMP / 5120 / R / Operating`. The work order needs one cartridge and 4 days of the manufacturer’s field engineer.',
          },
        },
        {
          type: 'diagram',
          id: 'p2p-flow',
          caption: {
            fa: 'زنجیره کامل تدارکات تا پرداخت: درخواست، سفارش، GRN یا SES، فاکتور و پرداخت، با ثبت مالی هر گام.',
            en: 'The full procure-to-pay chain: requisition, PO, GRN or SES, invoice and payment, with the Finance posting at each step.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'گام‌به‌گام: سند، نقش و ثبت مالی', en: 'Step by step: document, role and Finance posting' },
          head: [
            { fa: 'گام و سند', en: 'Step and document' },
            { fa: 'چه کسی', en: 'Who' },
            { fa: 'اثر در ERP', en: 'ERP effect' },
          ],
          rows: [
            [
              { fa: '1. درخواست خرید `PR-26-0520`: 2 کارتریج، برآورد 2 × 45,000', en: '1. Requisition `PR-26-0520`: 2 cartridges, estimate 2 × 45,000' },
              { fa: 'MRP پیشنهاد می‌دهد؛ مدیر نگهداری تأیید می‌کند', en: 'MRP proposes; the maintenance manager approves' },
              { fa: 'بدون ثبت مالی', en: 'No Finance posting' },
            ],
            [
              { fa: '2. استعلام از 3 تأمین‌کننده و جدول مقایسه', en: '2. RFQ to 3 suppliers and a bid tabulation' },
              { fa: 'خریدار؛ ارزیابی فنی با مهندس تجهیزات دوار', en: 'Buyer; technical evaluation by the rotating-equipment engineer' },
              { fa: 'پیشنهادها و ارزیابی پیوست می‌شوند', en: 'Bids and evaluation are attached' },
            ],
            [
              { fa: '3. سفارش `PO-45012`: 2 × 42,000 = 84,000، تحویل در `WH-10`، 20 هفته', en: '3. `PO-45012`: 2 × 42,000 = 84,000, delivered to `WH-10`, 20 weeks' },
              { fa: 'خریدار می‌سازد؛ مدیر خرید تأیید می‌کند (10,001 تا 100,000)', en: 'Buyer creates; procurement manager approves (10,001 to 100,000)' },
              { fa: 'سفارش آزاد؛ کالای انباری، پس تعهدی روی دستور کار نیست', en: 'PO released; a stock item, so no commitment on the work order' },
            ],
            [
              { fa: '4. سفارش خدمات `PO-45013`: مهندس 4 روز × 2,500، سفر مقطوع 1,500، ردیف سقف 2,000؛ جمع 13,500', en: '4. Service PO `PO-45013`: engineer 4 days × 2,500, travel lump sum 1,500, limit line 2,000; total 13,500' },
              { fa: 'خریدار؛ تأیید مدیر خرید', en: 'Buyer; procurement manager approves' },
              { fa: 'تعهد 13,500 روی `WO-45188`', en: '13,500 commitment on `WO-45188`' },
            ],
            [
              { fa: '5. پیگیری، FAT با حضور بازرس و `IRN-2644`', en: '5. Expediting, FAT witnessed by TPI and `IRN-2644`' },
              { fa: 'پیگیر سفارش؛ بازرسی فنی آریان', en: 'Expeditor; Arian Technical Inspection' },
              { fa: 'وضعیت به‌روز و IRN پیوست', en: 'Status updated and IRN attached' },
            ],
            [
              { fa: '6. `GRN-26-0402`: 2 کارتریج با شماره سریال، تحت بازرسی و سپس آزاد', en: '6. `GRN-26-0402`: 2 cartridges with serial numbers, into inspection stock and then released' },
              { fa: 'انباردار؛ بازرس کیفیت', en: 'Storekeeper; QC inspector' },
              { fa: 'بدهکار موجودی 84,000، بستانکار GR/IR', en: 'Dr Inventory 84,000, Cr GR/IR' },
            ],
            [
              { fa: '7. فاکتور کالا: 84,000 به‌علاوه مالیات 8,400؛ تطبیق سه‌طرفه بدون اختلاف', en: '7. Goods invoice: 84,000 plus 8,400 VAT; clean three-way match' },
              { fa: 'کارمند حساب‌های پرداختنی', en: 'AP clerk' },
              { fa: 'تسویه GR/IR و ثبت بدهی 92,400', en: 'GR/IR cleared; 92,400 payable' },
            ],
            [
              { fa: '8. اجرای پرداخت در سررسید 30 روزه', en: '8. Payment run at the 30-day due date' },
              { fa: 'خزانه‌داری؛ دو امضای مجاز', en: 'Treasury; two authorised signatories' },
              { fa: 'بدهکار حساب‌های پرداختنی، بستانکار بانک', en: 'Dr AP, Cr Bank' },
            ],
            [
              { fa: '9. حواله `GI-26-0911`: 1 کارتریج به `WO-45188`', en: '9. Goods issue `GI-26-0911`: 1 cartridge to `WO-45188`' },
              { fa: 'انباردار، با رزرو دستور کار', en: 'Storekeeper, against the work-order reservation' },
              { fa: 'بدهکار هزینه دستور کار 42,000، بستانکار موجودی', en: 'Dr work-order cost 42,000, Cr Inventory' },
            ],
            [
              { fa: '10. `SES-26-0157`: 3 روز × 2,500 + سفر 1,500 = 9,000؛ SES نهایی', en: '10. `SES-26-0157`: 3 days × 2,500 + travel 1,500 = 9,000; final SES' },
              { fa: 'برنامه‌ریز ثبت می‌کند؛ سرپرست ایستگاه با برگه‌های کارکرد امضاشده می‌پذیرد', en: 'Planner enters it; the station supervisor accepts it against signed timesheets' },
              { fa: 'بدهکار هزینه دستور کار 9,000، بستانکار GR/IR؛ 4,500 تعهد آزاد', en: 'Dr work-order cost 9,000, Cr GR/IR; 4,500 commitment released' },
            ],
            [
              { fa: '11. فاکتور خدمات 9,000 + مالیات 900؛ کسر مالیات تکلیفی 3٪ و سپرده بیمه 5٪ (فرضی)', en: '11. Service invoice 9,000 + 900 VAT; 3% withholding and 5% insurance retention (illustrative)' },
              { fa: 'حساب‌های پرداختنی؛ خزانه‌داری', en: 'AP; treasury' },
              { fa: 'تسویه GR/IR؛ پرداخت خالص 9,180', en: 'GR/IR cleared; net payment 9,180' },
            ],
            [
              { fa: '12. تسویه دستور کار: 51,000 به `CC-ARY-CMP`', en: '12. Work-order settlement: 51,000 to `CC-ARY-CMP`' },
              { fa: 'کنترل هزینه', en: 'Cost controller' },
              { fa: 'هزینه عملیاتی قابل بازیافت در صورت هزینه فصل', en: 'Recoverable operating cost in the quarter’s cost statement' },
            ],
          ],
        },
        {
          type: 'journal',
          title: { fa: 'همه ثبت‌های خودکار سناریو', en: 'Every automatic posting in the scenario' },
          entries: [
            {
              date: { fa: 'گام 6: GRN', en: 'Step 6: GRN' },
              lines: [
                { account: ac.invSpares, debit: 84000 },
                { account: ac.grir, credit: 84000 },
              ],
            },
            {
              date: { fa: 'گام 7: فاکتور کالا', en: 'Step 7: goods invoice' },
              lines: [
                { account: ac.grir, debit: 84000 },
                { account: ac.inputVat, debit: 8400 },
                { account: ac.apToos, credit: 92400 },
              ],
              memo: { fa: 'مالیات بر ارزش افزوده با نرخ فرضی 10٪.', en: 'VAT at an illustrative 10%.' },
            },
            {
              date: { fa: 'گام 8: پرداخت', en: 'Step 8: payment' },
              lines: [
                { account: ac.apToos, debit: 92400 },
                { account: ac.bank, credit: 92400 },
              ],
            },
            {
              date: { fa: 'گام 9: حواله به دستور کار', en: 'Step 9: issue to the work order' },
              lines: [
                { account: ac.repairs188, debit: 42000 },
                { account: ac.invSpares, credit: 42000 },
              ],
              memo: { fa: 'با قیمت میانگین موزون متحرک 42,000.', en: 'At the moving average price of 42,000.' },
            },
            {
              date: { fa: 'گام 10: پذیرش SES', en: 'Step 10: SES accepted' },
              lines: [
                { account: ac.repairs188, debit: 9000 },
                { account: ac.grir, credit: 9000 },
              ],
            },
            {
              date: { fa: 'گام 11: فاکتور خدمات', en: 'Step 11: service invoice' },
              lines: [
                { account: ac.grir, debit: 9000 },
                { account: ac.inputVat, debit: 900 },
                { account: ac.apToos, credit: 9900 },
              ],
            },
            {
              date: { fa: 'گام 11: کسور', en: 'Step 11: deductions' },
              lines: [
                { account: ac.apToos, debit: 720 },
                { account: ac.wht, credit: 270 },
                { account: ac.insRet, credit: 450 },
              ],
              memo: { fa: '9,000 × 3٪ = 270؛ 9,000 × 5٪ = 450.', en: '9,000 × 3% = 270; 9,000 × 5% = 450.' },
            },
            {
              date: { fa: 'گام 11: پرداخت خدمات', en: 'Step 11: service payment' },
              lines: [
                { account: ac.apToos, debit: 9180 },
                { account: ac.bank, credit: 9180 },
              ],
            },
          ],
        },
        {
          type: 'tAccounts',
          title: { fa: 'مانده‌ها در پایان سناریو', en: 'Balances at the end of the scenario' },
          accounts: [
            { name: ac.grir, debits: [84000, 9000], credits: [84000, 9000] },
            { name: ac.invSpares, debits: [84000], credits: [42000] },
            { name: ac.repairs188, debits: [42000, 9000], credits: [] },
            { name: ac.apToos, debits: [92400, 720, 9180], credits: [92400, 9900] },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'کد هزینه روی هر سند', en: 'The cost code on each document' },
          head: [
            { fa: 'سند', en: 'Document' },
            { fa: 'موضوع هزینه', en: 'Cost object' },
            { fa: 'حساب', en: 'Account' },
            { fa: 'نشان و دسته', en: 'Flag and category' },
          ],
          rows: [
            [{ fa: '`GRN-26-0402`', en: '`GRN-26-0402`' }, { fa: 'انبار `WH-10` (هنوز هزینه نیست)', en: 'Stock `WH-10` (not yet a cost)' }, { fa: '`1430` موجودی قطعات یدکی', en: '`1430` spare parts inventory' }, { fa: 'هنگام حواله تعیین می‌شود', en: 'Set when issued' }],
            [{ fa: '`GI-26-0911`', en: '`GI-26-0911`' }, { fa: '`WO-45188` ← `CC-ARY-CMP`', en: '`WO-45188` → `CC-ARY-CMP`' }, { fa: '`5120` تعمیر و نگهداری', en: '`5120` repairs and maintenance' }, { fa: '`R`، عملیات', en: '`R`, Operating' }],
            [{ fa: '`SES-26-0157`', en: '`SES-26-0157`' }, { fa: '`WO-45188` ← `CC-ARY-CMP`', en: '`WO-45188` → `CC-ARY-CMP`' }, { fa: '`5120` تعمیر و نگهداری', en: '`5120` repairs and maintenance' }, { fa: '`R`، عملیات', en: '`R`, Operating' }],
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'هزینه `WO-45188` = قطعه حواله‌شده 42,000 + SES پذیرفته‌شده 9,000 = 51,000',
            en: '`WO-45188` cost = issued part 42,000 + accepted SES 9,000 = 51,000',
          },
          note: {
            fa: 'تعهد آزادشده سفارش خدمات: 13,500 − 9,000 = 4,500 (یک روز مهندس و ردیف سقف که استفاده نشد).',
            en: 'Service PO commitment released: 13,500 − 9,000 = 4,500 (one engineer day and the unused limit line).',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'نتیجه برای بازیافت هزینه', en: 'What it means for cost recovery' },
          text: {
            fa: 'دستور کار 51,000 (42,000 قطعه + 9,000 خدمات) هزینه دارد و با تسویه به `CC-ARY-CMP` می‌رود؛ چون حساب هزینه همان است، در بسیاری از ERPها این تسویه فقط در حسابداری بهای تمام‌شده دیده می‌شود. این 51,000 با نشان `R` و دسته «عملیات» در صورت هزینه فصل ادعا می‌شود. مالیات بر ارزش افزوده (9,300) اعتبار مالیاتی است، نه هزینه. کارتریج دوم (42,000) در انبار می‌ماند و طبق بسیاری از قراردادها هنگام حواله و مصرف قابل بازیافت می‌شود.',
            en: 'The work order carries 51,000 (42,000 part + 9,000 service) and settles to `CC-ARY-CMP`; because the expense account is the same, many ERPs show this settlement only in cost accounting. The 51,000 is claimed with flag `R` and category “Operating” in the quarter’s cost statement. The VAT (9,300) is a tax credit, not a cost. The second cartridge (42,000) stays in stock and, under many contracts, becomes recoverable when it is issued and used.',
          },
        },
      ],
    },
    {
      id: 'audit-trail',
      title: { fa: 'جریان اسناد و سابقه حسابرسی', en: 'Document Flow and the Audit Trail' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در ERP هر سند به سند قبلی خودش ارجاع می‌دهد: GRN به سفارش، سفارش به درخواست، فاکتور به سفارش و GRN، پرداخت به فاکتور. این زنجیره **جریان اسناد** (Document Flow) نام دارد. حسابرس می‌تواند از هر نقطه، مثلاً یک ردیف در صورت هزینه، شروع کند و با چند کلیک به درخواست خرید و پیشنهادهای مناقصه برسد. **سابقه حسابرسی** (Audit Trail) یعنی اینکه سیستم، علاوه بر خود اسناد، این‌ها را هم نگه می‌دارد:',
            en: 'In the ERP every document references its predecessor: the GRN points to the PO, the PO to the requisition, the invoice to the PO and GRN, the payment to the invoice. This chain is the **document flow**. An auditor can start anywhere, say a line in the cost statement, and reach the requisition and the tender bids in a few clicks. The **audit trail** means the system keeps, besides the documents themselves:',
          },
        },
        {
          type: 'table',
          head: [
            { fa: 'جزء سابقه', en: 'Trail element' },
            { fa: 'چه چیزی را نشان می‌دهد', en: 'What it shows' },
            { fa: 'نمونه در سناریو', en: 'Example in the scenario' },
          ],
          rows: [
            [{ fa: 'سابقه تغییرات', en: 'Change log' }, { fa: 'چه کسی، کی، چه فیلدی را از چه به چه تغییر داد', en: 'Who changed which field, when, from what to what' }, { fa: 'تغییر تاریخ تحویل `PO-45012` از هفته 20 به 21', en: '`PO-45012` delivery date moved from week 20 to 21' }],
            [{ fa: 'سابقه تأیید', en: 'Approval history' }, { fa: 'تأییدکننده، سطح اختیار و زمان تأیید', en: 'Approver, authority level and time of approval' }, { fa: 'تأیید مدیر خرید برای 84,000', en: 'Procurement manager’s approval of 84,000' }],
            [{ fa: 'کاربر و زمان ثبت', en: 'User and timestamp' }, { fa: 'تاریخ واقعی ورود، جدا از تاریخ سند', en: 'The real entry date, separate from the document date' }, { fa: 'SES با تاریخ کار روز 28، ثبت‌شده روز 3', en: 'SES dated day 28 (work date), entered on day 3' }],
            [{ fa: 'پیوست‌ها', en: 'Attachments' }, { fa: 'شواهد بیرونی', en: 'External evidence' }, { fa: 'جدول مقایسه پیشنهادها، IRN، برگه‌های کارکرد امضاشده', en: 'Bid tabulation, IRN, signed timesheets' }],
            [{ fa: 'سند معکوس', en: 'Reversal documents' }, { fa: 'هیچ سندی پاک نمی‌شود؛ اصلاح با سند معکوس دیده می‌شود', en: 'Nothing is deleted; corrections show as reversal documents' }, { fa: 'ابطال یک GRN اشتباه', en: 'Reversal of a wrong GRN' }],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'قانون مالیات‌ها و قرارداد نفتی هر کدام مدت نگهداری دفاتر و اسناد را تعیین می‌کنند و این مدت در قراردادهای نفتی معمولاً طولانی است، چون حسابرسی بازیافت هزینه ممکن است سال‌ها بعد انجام شود. مدت دقیق را از مقررات روز و متن قرارداد بررسی کنید. اسناد کاغذی امضاشده، مثل برگه‌های کارکرد روزانه، را اسکن و به سند ERP پیوست کنید و اصلشان را بایگانی کنید.',
            en: 'Tax law and the petroleum contract each set how long books and documents must be kept, and for petroleum contracts the period is usually long, because cost-recovery audits may happen years later. Check the exact period in current rules and the contract. Scan signed paper documents, such as daily field tickets, attach them to the ERP document and archive the originals.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'جریان اسناد', en: 'Document flow' },
            items: [
              { fa: 'به پرسش «چه اتفاقی افتاد؟» پاسخ می‌دهد', en: 'Answers “what happened?”' },
              { fa: 'درخواست ← سفارش ← GRN یا SES ← فاکتور ← پرداخت', en: 'PR → PO → GRN or SES → invoice → payment' },
              { fa: 'نشان می‌دهد هر مبلغ از کجا آمده است', en: 'Shows where each amount came from' },
            ],
          },
          right: {
            title: { fa: 'سابقه حسابرسی', en: 'Audit trail' },
            items: [
              { fa: 'به پرسش «چه کسی، کی و با چه اختیاری؟» پاسخ می‌دهد', en: 'Answers “who, when and with what authority?”' },
              { fa: 'سابقه تغییرات، تأییدها، کاربران و زمان‌ها', en: 'Change logs, approvals, users and timestamps' },
              { fa: 'نشان می‌دهد کنترل‌ها واقعاً اجرا شده‌اند', en: 'Shows the controls were actually applied' },
            ],
          },
        },
      ],
    },
    {
      id: 'internal-controls',
      title: { fa: 'کنترل‌های داخلی تدارکات تا پرداخت', en: 'Procure-to-Pay Internal Controls' },
      blocks: [
        { type: 'h', text: { fa: 'تفکیک وظایف', en: 'Segregation of duties' } },
        {
          type: 'p',
          text: {
            fa: '**تفکیک وظایف** (Segregation of Duties) یعنی هیچ‌کس نباید بتواند یک معامله را از اول تا آخر به‌تنهایی انجام دهد. در ERP این کار با **نقش‌های کاربری** انجام می‌شود و یک گزارش تعارض نقش‌ها، کاربرانی را که ترکیب ممنوع دارند نشان می‌دهد:',
            en: '**Segregation of duties** means no one should be able to carry a transaction from start to finish alone. In the ERP this is done with **user roles**, and a role-conflict report lists the users who hold forbidden combinations:',
          },
        },
        {
          type: 'table',
          head: [
            { fa: 'وظیفه', en: 'Function' },
            { fa: 'نقش معمول', en: 'Typical role' },
            { fa: 'نباید هم‌زمان', en: 'Must not also' },
          ],
          rows: [
            [{ fa: 'نگهداری داده پایه تأمین‌کننده', en: 'Maintain the vendor master' }, { fa: 'تیم داده پایه', en: 'Master data team' }, { fa: 'سفارش بدهد، فاکتور ثبت کند یا پرداخت کند', en: 'Create POs, post invoices or pay' }],
            [{ fa: 'ثبت سفارش خرید', en: 'Create POs' }, { fa: 'خریدار', en: 'Buyer' }, { fa: 'سفارش خودش را تأیید کند یا GRN و SES بپذیرد', en: 'Approve their own PO or post GRNs and accept SESs' }],
            [{ fa: 'ثبت GRN', en: 'Post GRNs' }, { fa: 'انباردار', en: 'Storekeeper' }, { fa: 'سفارش بدهد یا فاکتور ثبت کند', en: 'Create POs or post invoices' }],
            [{ fa: 'پذیرش SES', en: 'Accept SESs' }, { fa: 'نماینده کارفرما یا مسئول قرارداد', en: 'Site representative or contract holder' }, { fa: 'SES را خودش ثبت کرده باشد یا خریدار باشد', en: 'Have entered the SES themselves, or be the buyer' }],
            [{ fa: 'ثبت فاکتور', en: 'Post invoices' }, { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, { fa: 'داده پایه تأمین‌کننده را تغییر دهد یا پرداخت را آزاد کند', en: 'Change the vendor master or release payments' }],
            [{ fa: 'آزادسازی پرداخت', en: 'Release payments' }, { fa: 'خزانه‌داری، دو امضا', en: 'Treasury, two signatures' }, { fa: 'فاکتور ثبت کند یا داده پایه تأمین‌کننده را تغییر دهد', en: 'Post invoices or change the vendor master' }],
          ],
        },
        { type: 'h', text: { fa: 'حد اختیار و کنترل‌های کلیدی', en: 'Approval limits and key controls' } },
        {
          type: 'p',
          text: {
            fa: '**حد اختیار** همان جدول اختیارات معاملات است که در درس سفارش خرید دیدیم: تا 10,000 سرپرست خرید، تا 100,000 مدیر خرید، تا 1,000,000 مدیر زنجیره تأمین با امضای مدیر مالی، و بیش از آن کمیسیون معاملات و مدیرعامل (ارقام فرضی). کنترل‌های کلیدی دیگر و راه اجرای آن‌ها در ERP:',
            en: 'The **approval limits** are the delegation-of-authority table from the lesson on purchase orders: up to 10,000 the procurement supervisor, up to 100,000 the procurement manager, up to 1,000,000 the supply chain director co-signed by the finance director, and above that the tender committee and the CEO (illustrative figures). The other key controls and how the ERP enforces them:',
          },
        },
        {
          type: 'table',
          head: [
            { fa: 'کنترل', en: 'Control' },
            { fa: 'خطری که پوشش می‌دهد', en: 'Risk covered' },
            { fa: 'اجرا در ERP', en: 'How the ERP enforces it' },
          ],
          rows: [
            [{ fa: 'تطبیق سه‌طرفه: سفارش + GRN یا SES + فاکتور', en: 'Three-way match: PO + GRN or SES + invoice' }, { fa: 'پرداخت برای کالا یا کار نرسیده یا با قیمت بالاتر', en: 'Paying for goods or work not received, or at a higher price' }, { fa: 'حد تحمل و قفل پرداخت خودکار', en: 'Tolerances and automatic payment blocks' }],
            [{ fa: 'کنترل تغییر داده پایه تأمین‌کننده', en: 'Vendor master change control' }, { fa: 'حساب بانکی جعلی، تأمین‌کننده ساختگی', en: 'Fake bank accounts, fictitious vendors' }, { fa: 'تأیید دونفره، قفل پرداخت تا تأیید تلفنی، گزارش هفتگی تغییرات', en: 'Dual approval, payment block until phone verification, weekly change report' }],
            [{ fa: 'کنترل فاکتور تکراری', en: 'Duplicate-invoice check' }, { fa: 'پرداخت دوباره یک فاکتور', en: 'Paying the same invoice twice' }, { fa: 'هشدار یا توقف روی تأمین‌کننده، شماره، تاریخ و مبلغ یکسان', en: 'Warning or block on same vendor, number, date and amount' }],
            [{ fa: 'کشف خرد کردن سفارش', en: 'Split-order detection' }, { fa: 'دور زدن حد اختیار یا مناقصه', en: 'Getting around approval limits or tendering' }, { fa: 'گزارش سفارش‌های هم‌روز یا هم‌هفته یک تأمین‌کننده و یک کالا', en: 'Report of same-vendor, same-item POs on the same day or week' }],
            [{ fa: 'رویه خرید اضطراری و گزارش سفارش پس از فاکتور', en: 'Emergency procedure and after-the-fact PO report' }, { fa: 'دور زدن تأیید با بهانه اضطرار', en: 'Bypassing approval in the name of urgency' }, { fa: 'نوع سند جدا برای اضطرار و گزارش ماهانه به مدیریت', en: 'A separate document type for emergencies and a monthly report to management' }],
            [{ fa: 'قفل دوره و تحلیل سنی GR/IR', en: 'Period locks and GR/IR ageing' }, { fa: 'تاریخ‌گذاری به عقب، بدهی‌های فراموش‌شده', en: 'Backdating, forgotten liabilities' }, { fa: 'بستن دوره‌ها و بازبینی ماهانه اقلام باز', en: 'Closed periods and a monthly review of open items' }],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'تغییر حساب بانکی تأمین‌کننده', en: 'Supplier bank account changes' },
          text: {
            fa: 'هرگز به شماره تلفن یا ایمیل داخل همان نامه درخواست تغییر اعتماد نکنید. با شماره‌ای که از قبل در داده پایه ثبت شده تماس بگیرید، تغییر را دو نفر از تیم داده پایه تأیید کنند، و تا تأیید، تأمین‌کننده قفل پرداخت داشته باشد. کارمند حساب‌های پرداختنی هرگز نباید دسترسی تغییر حساب بانکی داشته باشد.',
            en: 'Never trust the phone number or email inside the change request itself. Call the number already held in the vendor master, have two people in the master data team approve the change, and keep the vendor on a payment block until it is verified. An AP clerk must never have access to change bank details.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'ماجرای آغاز درس، با کنترل‌ها', en: 'The opening case, with controls' },
          text: {
            fa: 'اگر کارمند حساب‌های پرداختنی دسترسی تغییر حساب بانکی نداشت (تفکیک وظایف)، اگر تیم داده پایه با شماره ثبت‌شده توس تماس می‌گرفت (تأیید تلفنی)، و اگر تأمین‌کننده تا تأیید قفل پرداخت داشت، 92,400 هرگز به حساب کلاهبردار نمی‌رفت. گزارش هفتگی تغییرات هم دست‌کم تقلب را چند روز بعد آشکار می‌کرد. خریدهای بدون سفارش و رسید هم با تطبیق سه‌طرفه و گزارش سفارش پس از فاکتور پیش از حسابرسی دیده می‌شدند.',
            en: 'Had the AP clerk lacked access to bank details (segregation of duties), had the master data team called Toos on the number on file (phone verification), and had the vendor been on a payment block until verified, the 92,400 would never have reached the fraudster. The weekly change report would at least have exposed the fraud within days. The purchases without a PO or receipt would also have surfaced before the audit through the three-way match and the after-the-fact PO report.',
          },
        },
      ],
    },
    {
      id: 'spend-kpis',
      title: { fa: 'تحلیل هزینه خرید و شاخص‌های عملکرد', en: 'Spend Analysis and Performance KPIs' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**تحلیل هزینه خرید** (Spend Analysis) یعنی همه خریدهای یک دوره را بر اساس گروه کالا، تأمین‌کننده و موضوع هزینه دسته‌بندی کنیم تا ببینیم پول کجا می‌رود. چون هر سفارش در ERP گروه کالا، تأمین‌کننده و کد هزینه دارد، این تحلیل مستقیم از داده‌های سفارش و فاکتور ساخته می‌شود:',
            en: '**Spend analysis** means grouping all of a period’s purchases by category, supplier and cost object to see where the money goes. Because every PO in the ERP carries a category, a supplier and a cost code, the analysis is built straight from PO and invoice data:',
          },
        },
        {
          type: 'table',
          caption: { fa: 'هزینه خرید سالانه مسار پترولیوم (ارقام فرضی)', en: 'Masar Petroleum annual spend (illustrative)' },
          head: [
            { fa: 'گروه', en: 'Category' },
            { fa: 'هزینه سالانه', en: 'Annual spend' },
            { fa: 'سهم (٪)', en: 'Share (%)' },
            { fa: 'تعداد تأمین‌کننده', en: 'Suppliers' },
          ],
          rows: [
            [{ fa: 'حفاری و خدمات چاه', en: 'Drilling and well services' }, 20000000, 50, 12],
            [{ fa: 'لوله جداری و مغزی (OCTG)', en: 'OCTG casing and tubing' }, 8000000, 20, 4],
            [{ fa: 'قطعات و خدمات تجهیزات دوار', en: 'Rotating-equipment spares and services' }, 4000000, 10, 9],
            [{ fa: 'مواد شیمیایی حفاری و تولید', en: 'Drilling and production chemicals' }, 3200000, 8, 3],
            [{ fa: 'حمل و لجستیک', en: 'Logistics and transport' }, 2800000, 7, 15],
            [{ fa: 'سایر (مصرفی، اداری، فناوری اطلاعات)', en: 'Other (MRO, office, IT)' }, 2000000, 5, 140],
            [{ fa: 'جمع', en: 'Total' }, 40000000, 100, 183],
          ],
          numericCols: [1, 2, 3],
        },
        {
          type: 'p',
          text: {
            fa: 'دو گروه اول 70٪ هزینه را با فقط 16 تأمین‌کننده می‌سازند؛ مذاکره و قرارداد چارچوب بلندمدت آنجا بیشترین اثر را دارد. در مقابل، 5٪ هزینه میان 140 تأمین‌کننده پخش شده است؛ این **خریدهای پراکنده کم‌مبلغ** هزینه اداری زیادی دارند و با سفارش باز یا تجمیع تأمین‌کنندگان ساده می‌شوند. شاخص‌های اصلی عملکرد خرید:',
            en: 'The first two categories make up 70% of spend with only 16 suppliers; negotiation and long-term framework agreements have the most impact there. By contrast, 5% of spend is scattered across 140 suppliers; this **tail spend** is costly to administer and is simplified with blanket POs or supplier consolidation. The main procurement KPIs:',
          },
        },
        {
          type: 'table',
          caption: { fa: 'شاخص‌های یک فصل (ارقام فرضی)', en: 'KPIs for one quarter (illustrative)' },
          head: [
            { fa: 'شاخص', en: 'KPI' },
            { fa: 'فرمول', en: 'Formula' },
            { fa: 'داده و نتیجه', en: 'Data and result' },
          ],
          rows: [
            [{ fa: 'زمان چرخه درخواست تا سفارش', en: 'Requisition-to-PO cycle time' }, { fa: 'میانگین روز از تأیید درخواست تا آزادشدن سفارش', en: 'Average days from approved PR to released PO' }, { fa: '(12 + 18 + 9 + 25 + 16) ÷ 5 = 16 روز', en: '(12 + 18 + 9 + 25 + 16) ÷ 5 = 16 days' }],
            [{ fa: 'تحویل به‌موقع', en: 'On-time delivery' }, { fa: 'ردیف‌های تحویل‌شده تا تاریخ قول ÷ کل ردیف‌ها', en: 'Lines delivered by the promised date ÷ all lines' }, { fa: '172 ÷ 200 = 86٪', en: '172 ÷ 200 = 86%' }],
            [{ fa: 'تحویل کامل و به‌موقع (OTIF)', en: 'On time in full (OTIF)' }, { fa: 'ردیف‌های به‌موقع و با مقدار کامل و سالم ÷ کل ردیف‌ها', en: 'Lines on time, complete and sound ÷ all lines' }, { fa: '160 ÷ 200 = 80٪', en: '160 ÷ 200 = 80%' }],
            [{ fa: 'صرفه‌جویی', en: 'Savings' }, { fa: '(مبنا − مبلغ قرارداد) ÷ مبنا؛ مبنا معمولاً آخرین قیمت خرید', en: '(baseline − awarded) ÷ baseline; baseline usually the last price paid' }, { fa: 'آب‌بند K-102: (87,500 − 84,000) ÷ 87,500 = 4٪', en: 'K-102 seal: (87,500 − 84,000) ÷ 87,500 = 4%' }],
            [{ fa: 'تطبیق در اولین بار', en: 'First-pass match rate' }, { fa: 'فاکتورهای ثبت‌شده بدون قفل ÷ کل فاکتورها', en: 'Invoices posted without a block ÷ all invoices' }, { fa: '1,140 ÷ 1,200 = 95٪', en: '1,140 ÷ 1,200 = 95%' }],
            [{ fa: 'هزینه زیر قرارداد', en: 'Spend under contract' }, { fa: 'هزینه از قراردادهای چارچوب ÷ کل هزینه', en: 'Spend through framework agreements ÷ total spend' }, { fa: '30,000,000 ÷ 40,000,000 = 75٪', en: '30,000,000 ÷ 40,000,000 = 75%' }],
            [{ fa: 'سفارش پس از فاکتور', en: 'After-the-fact POs' }, { fa: 'سفارش‌هایی که پس از فاکتور ساخته شده‌اند ÷ کل سفارش‌ها', en: 'POs created after the invoice ÷ all POs' }, { fa: '36 ÷ 1,200 = 3٪', en: '36 ÷ 1,200 = 3%' }],
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'OTIF = ردیف‌هایی که به‌موقع، با مقدار کامل و بدون NCR رسیده‌اند ÷ کل ردیف‌های تحویلی × 100',
            en: 'OTIF = lines delivered on time, in full and without an NCR ÷ all lines delivered × 100',
          },
          note: {
            fa: 'تاریخ و مقدار از GRN خوانده می‌شود؛ پس GRN دیرهنگام یا ناقص، شاخص را هم خراب می‌کند.',
            en: 'Dates and quantities come from the GRN, so a late or incomplete GRN spoils the KPI as well.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          text: {
            fa: 'شاخص‌ها را با هم بخوانید. صرفه‌جویی بالا با OTIF پایین شاید یعنی ارزان‌ترین تأمین‌کننده را انتخاب کرده‌ایم که دیر تحویل می‌دهد و دکل را منتظر می‌گذارد. و صرفه‌جویی را همیشه با مبنای مستند (آخرین قیمت یا برآورد مصوب) گزارش کنید، نه با قیمت اولیه‌ای که تأمین‌کننده عمداً بالا داده است.',
            en: 'Read KPIs together. High savings with low OTIF may mean we chose the cheapest supplier who delivers late and keeps the rig waiting. And always report savings against a documented baseline (last price or approved estimate), not against a first quote the supplier inflated on purpose.',
          },
        },
      ],
    },
    {
      id: 'cost-recovery-audits',
      title: { fa: 'اسناد خرید در حسابرسی بازیافت هزینه', en: 'Procurement Records in Cost-Recovery Audits' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'سه گروه هزینه‌های عملیات مشترک را حسابرسی می‌کنند: **نهاد دولتی طرف قرارداد نفتی**، که پیش از پذیرش بازیافت هزینه صورت هزینه‌ها را رسیدگی می‌کند؛ **شرکای غیرعامل مشارکت**، که طبق موافقت‌نامه عملیات مشترک حق حسابرسی حساب مشترک را دارند؛ و حسابرسان مستقل و مالیاتی. برای هر سه، اسناد خرید ستون اصلی شواهدند.',
            en: 'Three groups audit joint-operation costs: the **government party to the petroleum contract**, which reviews cost statements before accepting cost recovery; the **non-operating JV partners**, who have the right to audit the joint account under the joint operating agreement; and statutory and tax auditors. For all three, procurement records are the backbone of the evidence.',
          },
        },
        {
          type: 'diagram',
          id: 'cost-recovery',
          caption: {
            fa: 'هزینه‌ای که حسابرس رد کند از «نفت هزینه» بازیافت نمی‌شود و سهم پیمانکار از تولید را کم می‌کند؛ پس کیفیت اسناد خرید مستقیماً به پول تبدیل می‌شود.',
            en: 'A cost the auditor rejects is not recovered from cost oil and reduces the contractor’s share of production, so the quality of procurement records turns directly into money.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'نمونه‌گیری از صورت هزینه', en: 'Sample the cost statement' },
              text: { fa: 'حسابرس ردیف‌هایی از صورت هزینه‌های قابل بازیافت انتخاب می‌کند، معمولاً اقلام بزرگ و غیرعادی.', en: 'The auditor picks lines from the cost-recovery statement, usually large and unusual items.' },
            },
            {
              title: { fa: 'ردیابی تا سند حسابداری', en: 'Trace to the accounting document' },
              text: { fa: 'از کد هزینه (مثلاً `AFE-2025-014.02.03`) به ثبت دفتر کل و از آنجا به GRN یا SES.', en: 'From the cost code (e.g. `AFE-2025-014.02.03`) to the ledger posting and on to the GRN or SES.' },
            },
            {
              title: { fa: 'بررسی زنجیره خرید', en: 'Check the procurement chain' },
              text: { fa: 'سفارش تأییدشده طبق DOA، رقابت یا توجیه خرید انحصاری، IRN و گواهی‌ها، برگه‌های کارکرد امضاشده.', en: 'PO approved per DOA, competition or a sole-source justification, IRN and certificates, signed field tickets.' },
            },
            {
              title: { fa: 'بررسی پرداخت', en: 'Check the payment' },
              text: { fa: 'فاکتور معتبر، سند بانکی، و کسر خسارت تأخیر و اعلامیه‌های بستانکاری از ادعا.', en: 'Valid invoice, bank record, and LDs and credit notes deducted from the claim.' },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'یافته‌های رایج حسابرسی و پیشگیری', en: 'Common audit findings and their prevention' },
          head: [
            { fa: 'یافته', en: 'Finding' },
            { fa: 'علت', en: 'Cause' },
            { fa: 'پیشگیری', en: 'Prevention' },
          ],
          rows: [
            [{ fa: 'هزینه روی چاه یا AFE اشتباه', en: 'Cost on the wrong well or AFE' }, { fa: 'تخصیص اشتباه در سفارش یا GRN', en: 'Wrong assignment on the PO or GRN' }, { fa: 'تخصیص اجباری و بازبینی ماهانه AFE', en: 'Mandatory assignment and a monthly AFE review' }],
            [{ fa: 'خرید بدون رقابت و بدون توجیه', en: 'No competition and no justification' }, { fa: 'دور زدن آیین‌نامه معاملات', en: 'Bypassing the transactions regulation' }, { fa: 'توجیه مصوب خرید انحصاری پیوست سفارش', en: 'An approved sole-source justification attached to the PO' }],
            [{ fa: 'فاکتور بدون GRN یا SES', en: 'Invoice without a GRN or SES' }, { fa: 'سفارش پس از فاکتور، تطبیق دوطرفه نابجا', en: 'After-the-fact PO, misused two-way match' }, { fa: 'تطبیق سه‌طرفه و گزارش سفارش‌های پس از فاکتور', en: 'Three-way match and an after-the-fact PO report' }],
            [{ fa: 'موجودی انبار پیش از مصرف ادعا شده', en: 'Stock claimed before it was used' }, { fa: 'شارژ هنگام خرید به‌جای هنگام حواله', en: 'Charging at purchase instead of at issue' }, { fa: 'پیروی از رویه حسابداری قرارداد', en: 'Following the contract’s accounting procedure' }],
            [{ fa: 'پرداخت تکراری یا ردیف غیرقابل مطالبه', en: 'Duplicate payment or non-chargeable line' }, { fa: 'نبود کنترل تکرار، پذیرش SES بدون بررسی', en: 'No duplicate check, SES accepted without review' }, { fa: 'کنترل تکرار خودکار و تفکیک ثبت و پذیرش SES', en: 'Automatic duplicate check and separate SES entry and acceptance' }],
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'اثر مالی یک یافته کوچک', en: 'The money behind a small finding' },
          text: {
            fa: 'اگر حسابرس 2٪ از هزینه خرید سالانه 40,000,000 را رد کند، 800,000 از «نفت هزینه» بازیافت نمی‌شود. در مشارکت، این مبلغ را شرکا به نسبت سهمشان می‌پردازند و هیچ‌وقت پس نمی‌گیرند (ارقام فرضی‌اند؛ اثر دقیق به قرارداد بستگی دارد). هزینه ساختن کنترل‌ها و پرونده شواهد معمولاً بسیار کمتر از این مبلغ است.',
            en: 'If the auditor rejects 2% of the 40,000,000 annual spend, 800,000 is not recovered from cost oil. In a joint venture the partners bear it in proportion to their shares and never get it back (illustrative figures; the exact effect depends on the contract). Building the controls and evidence packs usually costs far less than that.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'در ایران، در قراردادهای بیع متقابل و IPC، شرکت ملی نفت ایران هزینه‌های پیمانکار را پیش از بازپرداخت رسیدگی می‌کند؛ در مشارکت‌ها، شرکا هم حق حسابرسی دارند. بهترین تمرین، نگه داشتن یک **پرونده شواهد** برای هر AFE و هر فصل است: فهرست سفارش‌ها، GRNها و SESها با پیوست‌هایشان، که از جریان اسناد ERP ساخته می‌شود. مهلت‌ها و حق حسابرسی دقیق را قرارداد تعیین می‌کند.',
            en: 'In Iran, under buy-back and IPC contracts, the National Iranian Oil Company reviews the contractor’s costs before reimbursement; in joint ventures, partners also have audit rights. Best practice is to keep an **evidence pack** per AFE and per quarter: the list of POs, GRNs and SESs with their attachments, built from the ERP document flow. The contract sets the exact deadlines and audit rights.',
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
              fa: '**نقش‌های «همه‌کاره»**: به یک کاربر برای راحتی همه دسترسی‌ها داده می‌شود. راه درست: نقش‌ها طبق جدول تفکیک وظایف و گزارش فصلی تعارض.',
              en: '**“Super-user” roles**: one user gets every access for convenience. Fix: roles per the segregation table and a quarterly conflict report.',
            },
            {
              fa: '**تغییر حساب بانکی با یک ایمیل**: راه درست: تماس با شماره ثبت‌شده، تأیید دونفره و قفل پرداخت تا تأیید.',
              en: '**Bank changes on one email**: fix: call the registered number, dual approval and a payment block until verified.',
            },
            {
              fa: '**خرد کردن سفارش**: دو سفارش 60,000 به جای یک سفارش 120,000 برای دور زدن حد اختیار. راه درست: گزارش کشف خرد کردن و بازبینی آن.',
              en: '**Order splitting**: two POs of 60,000 instead of one of 120,000 to stay under an approval limit. Fix: a split-order report and its review.',
            },
            {
              fa: '**شاخص‌های گمراه‌کننده**: صرفه‌جویی با مبنای ساختگی یا بدون نگاه به OTIF. راه درست: مبنای مستند و خواندن شاخص‌ها در کنار هم.',
              en: '**Misleading KPIs**: savings on an invented baseline, or without looking at OTIF. Fix: a documented baseline and reading KPIs together.',
            },
            {
              fa: '**پرونده شواهد ناقص**: اسناد در ایمیل‌ها و کشوها پراکنده‌اند. راه درست: پیوست هر سند به سند ERP و پرونده AFE به‌صورت ماهانه.',
              en: '**Incomplete evidence packs**: documents scattered in emails and drawers. Fix: attach every document to its ERP document and build the AFE pack monthly.',
            },
          ],
        },
        {
          type: 'exercise',
          title: { fa: 'تمرین 1: تعارض نقش‌ها', en: 'Exercise 1: Role conflicts' },
          difficulty: 'easy',
          problem: {
            fa: 'گزارش نقش‌های کاربری ERP مسار پترولیوم این دسترسی‌ها را نشان می‌دهد. کدام کاربران تعارض تفکیک وظایف دارند و چرا؟',
            en: 'Masar Petroleum’s ERP user-role report shows the access below. Which users have a segregation-of-duties conflict, and why?',
          },
          given: {
            head: [
              { fa: 'کاربر', en: 'User' },
              { fa: 'دسترسی‌ها', en: 'Access' },
            ],
            rows: [
              [{ fa: 'الف (خریدار)', en: 'A (buyer)' }, { fa: 'ثبت سفارش؛ ثبت GRN', en: 'Create POs; post GRNs' }],
              [{ fa: 'ب (حساب‌های پرداختنی)', en: 'B (AP clerk)' }, { fa: 'ثبت فاکتور؛ تغییر حساب بانکی تأمین‌کننده', en: 'Post invoices; change supplier bank details' }],
              [{ fa: 'ج (خزانه‌داری)', en: 'C (treasury)' }, { fa: 'تهیه پیشنهاد پرداخت؛ تأیید و ارسال فایل بانک به‌تنهایی', en: 'Prepare the payment proposal; approve and send the bank file alone' }],
              [{ fa: 'د (برنامه‌ریز نگهداری)', en: 'D (maintenance planner)' }, { fa: 'ثبت درخواست خرید؛ ثبت SES', en: 'Create PRs; enter SESs' }],
              [{ fa: 'ه (مدیر خرید)', en: 'E (procurement manager)' }, { fa: 'تأیید سفارش در حد اختیار؛ پذیرش SES', en: 'Approve POs within authority; accept SESs' }],
            ],
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'کاربر', en: 'User' },
                { fa: 'نتیجه', en: 'Result' },
                { fa: 'دلیل', en: 'Reason' },
              ],
              rows: [
                [{ fa: 'الف', en: 'A' }, { fa: 'تعارض', en: 'Conflict' }, { fa: 'می‌تواند سفارش ساختگی بدهد و رسیدش را هم بزند', en: 'Could create a fake PO and receive it too' }],
                [{ fa: 'ب', en: 'B' }, { fa: 'تعارض', en: 'Conflict' }, { fa: 'می‌تواند حساب بانکی را عوض کند و فاکتور را به آن بفرستد', en: 'Could change a bank account and route invoices to it' }],
                [{ fa: 'ج', en: 'C' }, { fa: 'تعارض', en: 'Conflict' }, { fa: 'پرداخت بدون امضای دوم انجام می‌شود', en: 'Payments leave without a second signature' }],
                [{ fa: 'د', en: 'D' }, ok, { fa: 'ثبت SES مجاز است، به شرط اینکه پذیرش با فرد دیگری باشد', en: 'Entering SESs is fine as long as someone else accepts them' }],
                [{ fa: 'ه', en: 'E' }, { fa: 'تعارض', en: 'Conflict' }, { fa: 'طرف خرید است و کار را ندیده؛ پذیرش SES باید با نماینده محل یا مسئول قرارداد باشد', en: 'On the buying side and did not see the work; SES acceptance belongs to the site representative or contract holder' }],
              ],
            },
          ],
          answer: {
            fa: 'الف، ب، ج و ه تعارض دارند؛ د بدون تعارض است.',
            en: 'A, B, C and E have conflicts; D has none.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تمرین 2: یک چرخه کامل کوچک با GRN و SES', en: 'Exercise 2: A small full cycle with a GRN and an SES' },
          difficulty: 'medium',
          problem: {
            fa: 'برای کمپرسور رفت‌وبرگشتی K-201، 10 دست آب‌بند میله پیستون × 1,200 از «آب‌بندسازان اراک» برای `WH-10` خریده می‌شود. رویدادها: GRN هر 10 دست؛ فاکتور 12,000 به‌علاوه مالیات 10٪ (فرضی) و پرداخت آن؛ حواله 4 دست به دستور کار `WO-45240`؛ و پذیرش SES تراشکار پیمانکار روی همان دستور کار: 2 روز × 1,500. تا پایان ماه فاکتور تراشکار نرسیده است. ثبت‌ها و مانده پایان ماه موجودی، GR/IR و هزینه دستور کار را بنویسید.',
            en: 'For reciprocating compressor K-201, 10 piston-rod packing sets × 1,200 are bought from Arak Sealing Works for `WH-10`. Events: GRN for all 10 sets; invoice for 12,000 plus 10% VAT (illustrative) and its payment; issue of 4 sets to work order `WO-45240`; and acceptance of an SES for a contract machinist on the same work order: 2 days × 1,500. By month end the machinist’s invoice has not arrived. Write the entries and the month-end balances of inventory, GR/IR and the work-order cost.',
          },
          solution: [
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'GRN', en: 'GRN' },
                  lines: [
                    { account: ac.invSpares, debit: 12000 },
                    { account: ac.grir, credit: 12000 },
                  ],
                },
                {
                  date: { fa: 'فاکتور', en: 'Invoice' },
                  lines: [
                    { account: ac.grir, debit: 12000 },
                    { account: ac.inputVat, debit: 1200 },
                    { account: ac.apPacking, credit: 13200 },
                  ],
                },
                {
                  date: { fa: 'پرداخت', en: 'Payment' },
                  lines: [
                    { account: ac.apPacking, debit: 13200 },
                    { account: ac.bank, credit: 13200 },
                  ],
                },
                {
                  date: { fa: 'حواله 4 دست', en: 'Issue of 4 sets' },
                  lines: [
                    { account: ac.repairs240, debit: 4800 },
                    { account: ac.invSpares, credit: 4800 },
                  ],
                },
                {
                  date: { fa: 'پذیرش SES', en: 'SES accepted' },
                  lines: [
                    { account: ac.repairs240, debit: 3000 },
                    { account: ac.grir, credit: 3000 },
                  ],
                },
              ],
            },
            {
              type: 'table',
              head: [
                { fa: 'حساب', en: 'Account' },
                { fa: 'محاسبه', en: 'Calculation' },
                { fa: 'مانده', en: 'Balance' },
              ],
              rows: [
                [{ fa: 'موجودی قطعات یدکی', en: 'Inventory: spare parts' }, { fa: '12,000 − 4,800', en: '12,000 − 4,800' }, 7200],
                [{ fa: 'GR/IR (بستانکار)', en: 'GR/IR (credit)' }, { fa: '12,000 − 12,000 + 3,000', en: '12,000 − 12,000 + 3,000' }, 3000],
                [{ fa: 'هزینه دستور کار WO-45240', en: 'Work order WO-45240 cost' }, { fa: '4,800 + 3,000', en: '4,800 + 3,000' }, 7800],
              ],
              numericCols: [2],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'مانده 3,000 GR/IR همان بدهی تحقق‌یافته خدمات تراشکار است؛ چون SES به‌موقع پذیرفته شده، هزینه این ماه کامل است و نیازی به ثبت دستی ذخیره نیست.',
                en: 'The 3,000 GR/IR balance is the accrued liability for the machinist; because the SES was accepted on time, this month’s cost is complete and no manual accrual is needed.',
              },
            },
          ],
          answer: {
            fa: 'موجودی 7,200؛ GR/IR بستانکار 3,000؛ هزینه دستور کار 7,800.',
            en: 'Inventory 7,200; GR/IR credit 3,000; work-order cost 7,800.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تمرین 3: محاسبه شاخص‌های فصل', en: 'Exercise 3: Calculating the quarter’s KPIs' },
          difficulty: 'medium',
          problem: {
            fa: 'داده‌های یک فصل: 250 ردیف سفارش تحویل شده که 215 ردیف تا تاریخ قول و 200 ردیف به‌موقع و کامل بوده‌اند؛ 900 فاکتور که 846 فاکتور بدون قفل ثبت شده‌اند؛ مبنای قیمت قراردادهای جدید 1,250,000 و مبلغ قراردادها 1,150,000؛ و از 450 سفارش، 27 سفارش پس از فاکتور ساخته شده‌اند. شاخص‌ها را حساب و تفسیر کنید.',
            en: 'One quarter’s data: 250 PO lines delivered, 215 by the promised date and 200 on time and in full; 900 invoices, 846 posted without a block; new contracts with a baseline of 1,250,000 awarded at 1,150,000; and of 450 POs, 27 were created after the invoice. Calculate and interpret the KPIs.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'شاخص', en: 'KPI' },
                { fa: 'محاسبه', en: 'Calculation' },
                { fa: 'نتیجه', en: 'Result' },
              ],
              rows: [
                [{ fa: 'تحویل به‌موقع', en: 'On-time delivery' }, { fa: '215 ÷ 250', en: '215 ÷ 250' }, { fa: '86٪', en: '86%' }],
                [{ fa: 'OTIF', en: 'OTIF' }, { fa: '200 ÷ 250', en: '200 ÷ 250' }, { fa: '80٪', en: '80%' }],
                [{ fa: 'تطبیق در اولین بار', en: 'First-pass match' }, { fa: '846 ÷ 900', en: '846 ÷ 900' }, { fa: '94٪', en: '94%' }],
                [{ fa: 'صرفه‌جویی', en: 'Savings' }, { fa: '(1,250,000 − 1,150,000) ÷ 1,250,000', en: '(1,250,000 − 1,150,000) ÷ 1,250,000' }, { fa: '100,000 یعنی 8٪', en: '100,000, i.e. 8%' }],
                [{ fa: 'سفارش پس از فاکتور', en: 'After-the-fact POs' }, { fa: '27 ÷ 450', en: '27 ÷ 450' }, { fa: '6٪', en: '6%' }],
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              text: {
                fa: 'تفسیر: صرفه‌جویی 8٪ خوب است، اما 6٪ سفارش پس از فاکتور یعنی تقریباً یک سفارش از هر 17 سفارش بدون تأیید پیشین انجام شده است؛ این ضعف کنترلی است که حسابرس بازیافت هزینه حتماً می‌بیند. فاصله 86٪ و 80٪ هم نشان می‌دهد 15 ردیف به‌موقع رسیده‌اند اما ناقص یا معیوب بوده‌اند.',
                en: 'Interpretation: 8% savings is good, but 6% after-the-fact POs means roughly one PO in 17 had no prior approval, a control weakness the cost-recovery auditor will surely see. The gap between 86% and 80% also shows 15 lines arrived on time but incomplete or defective.',
              },
            },
          ],
          answer: {
            fa: 'تحویل به‌موقع 86٪، OTIF 80٪، تطبیق در اولین بار 94٪، صرفه‌جویی 100,000 (8٪)، سفارش پس از فاکتور 6٪.',
            en: 'On-time 86%, OTIF 80%, first-pass match 94%, savings 100,000 (8%), after-the-fact POs 6%.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'تمرین 4: نمونه حسابرسی بازیافت هزینه', en: 'Exercise 4: A cost-recovery audit sample' },
          difficulty: 'hard',
          problem: {
            fa: 'حسابرس شرکا پنج قلم زیر را از صورت هزینه‌های قابل بازیافت یک فصل نمونه گرفته است. برای هر قلم نشان بازیافت (`R` یا `N`) را تعیین کنید، مبلغ پذیرفته و ردشده را حساب کنید و برای هر قلم ردشده اقدام اصلاحی بنویسید.',
            en: 'The partners’ auditor sampled the five items below from a quarter’s cost-recovery statement. Assign each a recoverable flag (`R` or `N`), calculate the accepted and rejected amounts, and give a corrective action for each rejected item.',
          },
          given: {
            head: [
              { fa: 'قلم', en: 'Item' },
              { fa: 'شرح و شواهد', en: 'Description and evidence' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            rows: [
              [{ fa: 'T1', en: 'T1' }, { fa: '`GRN-26-0318` لوله AR-07 روی `AFE-2025-014.02.03`؛ سفارش، IRN، گواهی کارخانه، فاکتور و پرداخت کامل', en: '`GRN-26-0318` AR-07 casing on `AFE-2025-014.02.03`; PO, IRN, mill certificates, invoice and payment complete' }, 180000],
              [{ fa: 'T2', en: 'T2' }, { fa: '`SES-26-0131` سیمان‌کاری AR-07؛ برگه‌های کارکرد امضاشده، پذیرش مسئول قرارداد', en: '`SES-26-0131` AR-07 cementing; signed field tickets, accepted by the contract holder' }, 45000],
              [{ fa: 'T3', en: 'T3' }, { fa: 'فاکتور قطعات کمپرسور روی `CC-ARY-CMP` بدون سفارش و بدون GRN؛ قطعات در سوابق انبار نیستند', en: 'Compressor parts invoice on `CC-ARY-CMP` with no PO and no GRN; the parts are not in stock records' }, 12600],
              [{ fa: 'T4', en: 'T4' }, { fa: 'SES نمودارگیری AR-09 شامل یک نوبت تکراری به دلیل خرابی ابزار پیمانکار که طبق قرارداد قابل مطالبه نیست', en: 'AR-09 logging SES including a re-run caused by the contractor’s tool failure, not chargeable under the contract' }, 3200],
              [{ fa: 'T5', en: 'T5' }, { fa: 'پرداخت دوم یک فاکتور حمل ترابری جنوب (فاکتور تکراری)', en: 'Second payment of a Jonoub Transport freight invoice (a duplicate)' }, 2750],
            ],
            numericCols: [2],
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'قلم', en: 'Item' },
                { fa: 'نشان', en: 'Flag' },
                { fa: 'پذیرفته', en: 'Accepted' },
                { fa: 'ردشده', en: 'Rejected' },
                { fa: 'اقدام اصلاحی', en: 'Corrective action' },
              ],
              rows: [
                [{ fa: 'T1', en: 'T1' }, { fa: 'R', en: 'R' }, 180000, 0, { fa: '-', en: '-' }],
                [{ fa: 'T2', en: 'T2' }, { fa: 'R', en: 'R' }, 45000, 0, { fa: '-', en: '-' }],
                [{ fa: 'T3', en: 'T3' }, { fa: 'N', en: 'N' }, 0, 12600, { fa: 'یافتن شاهد دریافت یا مطالبه از تأمین‌کننده؛ بررسی تقلب', en: 'Find evidence of receipt or reclaim from the supplier; investigate possible fraud' }],
                [{ fa: 'T4', en: 'T4' }, { fa: 'N', en: 'N' }, 0, 3200, { fa: 'مطالبه از پیمانکار با اعلامیه بستانکاری؛ آموزش پذیرش SES', en: 'Reclaim from the contractor by credit note; retrain SES approvers' }],
                [{ fa: 'T5', en: 'T5' }, { fa: 'N', en: 'N' }, 0, 2750, { fa: 'مطالبه وجه تکراری؛ فعال‌کردن کنترل فاکتور تکراری', en: 'Recover the duplicate; switch on the duplicate-invoice check' }],
                [{ fa: 'جمع', en: 'Total' }, blank, 225000, 18550, blank],
              ],
              numericCols: [2, 3],
            },
            {
              type: 'callout',
              tone: 'info',
              text: {
                fa: 'جمع ادعا 243,550 است: 225,000 پذیرفته و 18,550 رد می‌شود. مبالغ ردشده باید در دفاتر با نشان `N` اصلاح شوند تا در صورت هزینه بعدی دوباره ادعا نشوند؛ اگر بعداً از پیمانکار یا تأمین‌کننده پس گرفته شوند، هزینه هم به همان اندازه کم می‌شود.',
                en: 'The claim totals 243,550: 225,000 is accepted and 18,550 rejected. Rejected amounts must be re-flagged `N` in the books so they are not claimed again; if later recovered from the contractor or supplier, the cost falls by the same amount.',
              },
            },
          ],
          answer: {
            fa: 'T1 و T2 با نشان R (225,000) پذیرفته؛ T3، T4 و T5 با نشان N (18,550) رد می‌شوند.',
            en: 'T1 and T2 accepted as R (225,000); T3, T4 and T5 rejected as N (18,550).',
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
              fa: 'در یک چرخه کامل، GRN و SES هزینه واقعی و بدهی می‌سازند، فاکتور GR/IR را تسویه می‌کند، پرداخت بدهی را می‌بندد و دستور کار هزینه را با کد کامل به مرکز هزینه می‌برد.',
              en: 'In a full cycle, the GRN and SES create the actual cost and liability, the invoice clears GR/IR, the payment settles the debt, and the work order carries the cost with its full code to the cost centre.',
            },
            {
              fa: 'تفکیک وظایف و حد اختیار با نقش‌های کاربری در ERP اجرا می‌شوند و گزارش تعارض نقش‌ها باید مرتب بازبینی شود.',
              en: 'Segregation of duties and approval limits are enforced through ERP user roles, and the role-conflict report must be reviewed regularly.',
            },
            {
              fa: 'تطبیق سه‌طرفه (سفارش + GRN یا SES + فاکتور)، کنترل تغییر حساب بانکی، کنترل فاکتور تکراری و کشف خرد کردن سفارش، کنترل‌های کلیدی‌اند.',
              en: 'The three-way match (PO + GRN or SES + invoice), bank-change control, duplicate-invoice checks and split-order detection are the key controls.',
            },
            {
              fa: 'تحلیل هزینه خرید نشان می‌دهد پول کجا می‌رود؛ شاخص‌ها (زمان چرخه، صرفه‌جویی، OTIF، تطبیق در اولین بار) باید با هم و با مبنای مستند خوانده شوند.',
              en: 'Spend analysis shows where the money goes; KPIs (cycle time, savings, OTIF, first-pass match) must be read together and against documented baselines.',
            },
            {
              fa: 'جریان اسناد و سابقه حسابرسی، هر رقم صورت هزینه را تا سند اولیه‌اش قابل ردیابی می‌کنند؛ همین، هزینه را در برابر حسابرسی دولت و شرکا قابل بازیافت نگه می‌دارد.',
              en: 'Document flow and the audit trail make every cost-statement figure traceable to its source; that is what keeps costs recoverable in government and partner audits.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'کنترل داخلی', en: 'Internal control' },
              def: { fa: 'قواعد، نقش‌ها و بررسی‌هایی که مجاز، واقعی و درست بودن هر معامله را تضمین می‌کنند.', en: 'The rules, roles and checks that ensure each transaction is authorised, real and correct.' },
            },
            {
              term: { fa: 'تفکیک وظایف', en: 'Segregation of duties' },
              def: { fa: 'تقسیم مراحل یک معامله میان افراد مختلف تا هیچ‌کس به‌تنهایی آن را کامل نکند.', en: 'Splitting a transaction’s steps among different people so no one completes it alone.' },
            },
            {
              term: { fa: 'جریان اسناد', en: 'Document flow' },
              def: { fa: 'زنجیره ارجاع اسناد به یکدیگر از درخواست تا پرداخت.', en: 'The chain of documents referencing each other from requisition to payment.' },
            },
            {
              term: { fa: 'سابقه حسابرسی', en: 'Audit trail' },
              def: { fa: 'ثبت تغییرات، تأییدها، کاربران، زمان‌ها و پیوست‌ها کنار اسناد.', en: 'The record of changes, approvals, users, timestamps and attachments kept with the documents.' },
            },
            {
              term: { fa: 'خرد کردن سفارش', en: 'Order splitting' },
              def: { fa: 'تقسیم یک خرید به چند سفارش کوچک برای دور زدن حد اختیار یا مناقصه؛ ممنوع.', en: 'Breaking one purchase into several small POs to get around approval limits or tendering; prohibited.' },
            },
            {
              term: { fa: 'تحلیل هزینه خرید', en: 'Spend analysis' },
              def: { fa: 'دسته‌بندی خریدها بر اساس گروه، تأمین‌کننده و موضوع هزینه.', en: 'Grouping purchases by category, supplier and cost object.' },
            },
            {
              term: { fa: 'تحویل کامل و به‌موقع (OTIF)', en: 'On time in full (OTIF)' },
              def: { fa: 'درصد ردیف‌هایی که به‌موقع، کامل و سالم رسیده‌اند.', en: 'The share of lines delivered on time, complete and sound.' },
            },
            {
              term: { fa: 'تطبیق در اولین بار', en: 'First-pass match rate' },
              def: { fa: 'درصد فاکتورهایی که بدون قفل ثبت می‌شوند.', en: 'The share of invoices posted without a block.' },
            },
            {
              term: { fa: 'پرونده شواهد', en: 'Evidence pack' },
              def: { fa: 'مجموعه اسناد خرید هر AFE یا دوره برای حسابرسی بازیافت هزینه.', en: 'The set of procurement documents per AFE or period for cost-recovery audits.' },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: {
        fa: 'کدام ترکیب دسترسی، تعارض جدی تفکیک وظایف است؟',
        en: 'Which access combination is a serious segregation-of-duties conflict?',
      },
      options: [
        { fa: 'ثبت درخواست خرید و ثبت SES', en: 'Creating PRs and entering SESs' },
        { fa: 'تأیید سفارش در حد اختیار و دیدن گزارش تعهدات', en: 'Approving POs within authority and viewing commitment reports' },
        { fa: 'ثبت فاکتور و تغییر حساب بانکی تأمین‌کننده', en: 'Posting invoices and changing supplier bank details' },
        { fa: 'ثبت GRN و آزادسازی کالا از بازرسی کیفیت توسط بازرس', en: 'Posting GRNs, with QC release done by the inspector' },
      ],
      answer: 2,
      explain: {
        fa: 'کسی که هم فاکتور ثبت می‌کند و هم حساب بانکی را تغییر می‌دهد، می‌تواند پول را به حساب دلخواه بفرستد؛ همان تقلبی که در آغاز درس دیدیم. ثبت درخواست و SES با هم مشکلی ندارد، به شرط اینکه پذیرش SES با فرد دیگری باشد.',
        en: 'Someone who both posts invoices and changes bank details can route money to any account, the very fraud at the start of the lesson. Creating PRs and entering SESs is fine as long as someone else accepts the SES.',
      },
    },
    {
      q: {
        fa: 'طبق جدول فرضی اختیارات، سفارش 84,000 کارتریج آب‌بند را چه کسی تأیید می‌کند؟',
        en: 'Under the illustrative DOA, who approves the 84,000 seal-cartridge PO?',
      },
      options: [
        { fa: 'سرپرست خرید', en: 'Procurement supervisor' },
        { fa: 'مدیر خرید', en: 'Procurement manager' },
        { fa: 'مدیر زنجیره تأمین و مدیر مالی', en: 'Supply chain director and finance director' },
        { fa: 'کمیسیون معاملات', en: 'Tender committee' },
      ],
      answer: 1,
      explain: {
        fa: '84,000 در رده 10,001 تا 100,000 است که اختیار مدیر خرید است. سرپرست خرید فقط تا 10,000 اختیار دارد و رده‌های بالاتر برای مبالغ بیش از 100,000 است.',
        en: '84,000 falls in the 10,001 to 100,000 band, the procurement manager’s authority. The supervisor approves only up to 10,000, and the higher levels are for amounts above 100,000.',
      },
    },
    {
      q: {
        fa: 'ایمیلی از طرف یک تأمین‌کننده درخواست تغییر حساب بانکی دارد. کدام اقدام درست است؟',
        en: 'An email from a supplier asks to change its bank account. What is the right action?',
      },
      options: [
        { fa: 'با شماره تلفن داخل همان ایمیل تماس بگیریم و تغییر دهیم', en: 'Call the number in the same email and make the change' },
        { fa: 'کارمند حساب‌های پرداختنی فوراً تغییر دهد تا پرداخت دیر نشود', en: 'Have the AP clerk change it at once so payment is not late' },
        { fa: 'پرداخت‌ها را به هر دو حساب تقسیم کنیم', en: 'Split payments between both accounts' },
        { fa: 'با شماره ثبت‌شده در داده پایه تماس، تأیید دونفره تیم داده پایه و قفل پرداخت تا تأیید', en: 'Call the number already in the vendor master, get dual approval from the master data team, and block payments until verified' },
      ],
      answer: 3,
      explain: {
        fa: 'کلاهبردار شماره تماس خودش را در ایمیل می‌گذارد؛ پس فقط شماره ازپیش‌ثبت‌شده معتبر است. تغییر باید با تأیید دونفره و توسط تیم داده پایه، نه حساب‌های پرداختنی، انجام شود و تا تأیید، قفل پرداخت بماند.',
        en: 'A fraudster puts their own number in the email, so only the number already on file can be trusted. The change must be made by the master data team with dual approval, not by AP, and payments stay blocked until verified.',
      },
    },
    {
      q: {
        fa: 'تطبیق سه‌طرفه برای فاکتور خدمات مهندس سازنده روی `WO-45188` کدام اسناد را مقایسه می‌کند؟',
        en: 'For the manufacturer’s engineer invoice on `WO-45188`, which documents does the three-way match compare?',
      },
      options: [
        { fa: 'سفارش خدمات، SES پذیرفته‌شده و فاکتور', en: 'The service PO, the accepted SES and the invoice' },
        { fa: 'سفارش خدمات، GRN و فاکتور', en: 'The service PO, a GRN and the invoice' },
        { fa: 'درخواست خرید، سفارش و فاکتور', en: 'The PR, the PO and the invoice' },
        { fa: 'دستور کار، حواله انبار و فاکتور', en: 'The work order, the goods issue and the invoice' },
      ],
      answer: 0,
      explain: {
        fa: 'برای خدمات، SES نقش GRN را دارد؛ پس تطبیق سه‌طرفه یعنی سفارش + SES + فاکتور. GRN برای کالاست و درخواست خرید و حواله انبار جزء این تطبیق نیستند.',
        en: 'For services the SES plays the role of the GRN, so the three-way match is PO + SES + invoice. A GRN is for goods, and neither the PR nor the goods issue is part of this match.',
      },
    },
    {
      q: {
        fa: 'از 210 ردیف تحویل‌شده، 168 ردیف به‌موقع و کامل بوده‌اند. OTIF چقدر است؟',
        en: 'Of 210 lines delivered, 168 were on time and in full. What is OTIF?',
      },
      options: [
        { fa: '84٪', en: '84%' },
        { fa: '20٪', en: '20%' },
        { fa: '80٪', en: '80%' },
        { fa: '75٪', en: '75%' },
      ],
      answer: 2,
      explain: {
        fa: '168 ÷ 210 = 0.8 یعنی 80٪. گزینه 20٪ نسبت ردیف‌های ناموفق است (42 ÷ 210)، نه OTIF.',
        en: '168 ÷ 210 = 0.8, or 80%. 20% is the share of failed lines (42 ÷ 210), not OTIF.',
      },
    },
    {
      q: {
        fa: 'آخرین قیمت خرید کارتریج 43,750 بوده و سفارش جدید 2 عدد × 42,000 است. صرفه‌جویی چقدر است؟',
        en: 'The last price paid for the cartridge was 43,750 and the new PO is 2 × 42,000. What is the saving?',
      },
      options: [
        { fa: '1,750 یعنی 2٪', en: '1,750, i.e. 2%' },
        { fa: '6,000 یعنی 6.7٪', en: '6,000, i.e. 6.7%' },
        { fa: '3,500 یعنی 8٪', en: '3,500, i.e. 8%' },
        { fa: '3,500 یعنی 4٪', en: '3,500, i.e. 4%' },
      ],
      answer: 3,
      explain: {
        fa: 'مبنا 2 × 43,750 = 87,500 و صرفه‌جویی 87,500 − 84,000 = 3,500 است؛ 3,500 ÷ 87,500 = 4٪. گزینه 1,750 فقط یک عدد را حساب کرده و 6,000 مبنای برآورد درخواست (45,000) را به جای آخرین قیمت گرفته است.',
        en: 'Baseline 2 × 43,750 = 87,500 and saving 87,500 − 84,000 = 3,500; 3,500 ÷ 87,500 = 4%. 1,750 counts only one unit, and 6,000 uses the requisition estimate (45,000) instead of the last price.',
      },
    },
    {
      q: {
        fa: 'در سناریو، پس از GRN 84,000، فاکتور، پرداخت و حواله یک کارتریج به دستور کار، مانده موجودی قطعات یدکی چقدر است؟',
        en: 'In the scenario, after the 84,000 GRN, the invoice, the payment and the issue of one cartridge to the work order, what is the spare-parts inventory balance?',
      },
      options: [
        { fa: '42,000', en: '42,000' },
        { fa: '84,000', en: '84,000' },
        { fa: '0', en: '0' },
        { fa: '92,400', en: '92,400' },
      ],
      answer: 0,
      explain: {
        fa: 'GRN موجودی را 84,000 بدهکار کرد و حواله 42,000 بستانکار؛ مانده 42,000. فاکتور و پرداخت روی موجودی اثری ندارند و مالیات بر ارزش افزوده هم جزء موجودی نیست، پس 92,400 نادرست است.',
        en: 'The GRN debited inventory 84,000 and the issue credited 42,000, leaving 42,000. The invoice and payment do not touch inventory, and VAT is not part of it, so 92,400 is wrong.',
      },
    },
    {
      q: {
        fa: 'هزینه نهایی `WO-45188` که به `CC-ARY-CMP` تسویه می‌شود چقدر است؟ (قطعه 42,000؛ SES مهندس 9,000؛ مالیات بر ارزش افزوده خدمات 900)',
        en: 'What is the final cost of `WO-45188` settled to `CC-ARY-CMP`? (Part 42,000; engineer SES 9,000; service VAT 900)',
      },
      options: [
        { fa: '42,000', en: '42,000' },
        { fa: '51,000', en: '51,000' },
        { fa: '51,900', en: '51,900' },
        { fa: '55,500', en: '55,500' },
      ],
      answer: 1,
      explain: {
        fa: 'هزینه دستور کار = قطعه حواله‌شده 42,000 + SES پذیرفته‌شده 9,000 = 51,000. مالیات بر ارزش افزوده قابل استرداد هزینه نیست؛ پس 51,900 نادرست است. ردیف سقف و روز استفاده‌نشده مهندس (4,500) هم هزینه نشده و فقط تعهد آزاد شده است.',
        en: 'Work-order cost = issued part 42,000 + accepted SES 9,000 = 51,000. Recoverable VAT is not a cost, so 51,900 is wrong. The unused limit line and engineer day (4,500) were never incurred; only the commitment was released.',
      },
    },
    {
      q: {
        fa: 'در بسیاری از قراردادهای نفتی، قطعه‌ای که برای انبار خریده شده کی به حساب مشترک و صورت هزینه‌های قابل بازیافت می‌رود؟',
        en: 'Under many petroleum contracts, when does a part bought for stock reach the joint account and the cost-recovery statement?',
      },
      options: [
        { fa: 'هنگام صدور سفارش خرید', en: 'When the PO is issued' },
        { fa: 'هنگام پرداخت به تأمین‌کننده', en: 'When the supplier is paid' },
        { fa: 'هنگام حواله و مصرف در عملیات (رویه دقیق را قرارداد تعیین می‌کند)', en: 'When it is issued and used in operations (the contract sets the exact rule)' },
        { fa: 'هرگز؛ قطعات یدکی قابل بازیافت نیستند', en: 'Never; spare parts are not recoverable' },
      ],
      answer: 2,
      explain: {
        fa: 'در بسیاری از رویه‌های حسابداری قراردادها، کالای انبار تا مصرف نشده دارایی پیمانکار است و هنگام حواله به عملیات به حساب مشترک می‌رود. سفارش فقط تعهد است و پرداخت زمان ثبت هزینه را تعیین نمی‌کند. قطعات یدکی مصرف‌شده معمولاً قابل بازیافت‌اند.',
        en: 'Under many contract accounting procedures, stock remains the contractor’s asset until used and reaches the joint account when issued to operations. A PO is only a commitment, and payment does not decide when the cost is recognised. Spare parts that are used are usually recoverable.',
      },
    },
    {
      q: {
        fa: 'گزارش ERP دو سفارش 60,000 در یک روز، به یک تأمین‌کننده و برای یک کالا نشان می‌دهد؛ حد اختیار خریدار 100,000 است. این نشانه چیست؟',
        en: 'An ERP report shows two POs of 60,000 on the same day, to the same supplier, for the same item; the buyer’s limit is 100,000. What does this signal?',
      },
      options: [
        { fa: 'تحویل ناقص', en: 'A partial delivery' },
        { fa: 'فاکتور تکراری', en: 'A duplicate invoice' },
        { fa: 'انحراف قیمت', en: 'A price variance' },
        { fa: 'خرد کردن سفارش برای دور زدن حد اختیار', en: 'Order splitting to get around the approval limit' },
      ],
      answer: 3,
      explain: {
        fa: 'جمع دو سفارش 120,000 است و از حد 100,000 می‌گذرد؛ تقسیم آن به دو سفارش کوچک‌تر، تأیید رده بالاتر را دور زده است. گزارش کشف خرد کردن دقیقاً برای همین ساخته می‌شود. فاکتور تکراری یعنی یک فاکتور دو بار ثبت شود، نه دو سفارش جدا.',
        en: 'Together the two POs total 120,000, above the 100,000 limit; splitting them avoided the higher approval. The split-order report exists exactly for this. A duplicate invoice means one invoice posted twice, not two separate POs.',
      },
    },
  ],
}
