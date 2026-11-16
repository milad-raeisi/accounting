import type { Lesson } from '../types'

/** Empty table cell. */
const blank = { fa: '', en: '' }
const same = (s: string) => ({ fa: s, en: s })
const day = (n: number) => ({ fa: `روز ${n}`, en: `Day ${n}` })
const year = (n: number) => ({ fa: `سال ${n}`, en: `Year ${n}` })
const total = { fa: 'جمع', en: 'Total' }
/** Customer detail account under Accounts receivable. */
const arOf = (fa: string, en: string) => ({ fa: `حساب‌های دریافتنی: ${fa}`, en: `Accounts receivable: ${en}` })

const ac = {
  sales: { fa: 'فروش', en: 'Sales' },
  bank: { fa: 'موجودی نقد: بانک', en: 'Cash: bank' },
  returns: { fa: 'برگشت از فروش و تخفیفات', en: 'Sales returns and allowances' },
  discounts: { fa: 'تخفیف نقدی فروش', en: 'Sales discounts' },
  bdExp: { fa: 'هزینه مطالبات مشکوک‌الوصول', en: 'Doubtful accounts expense' },
  allowance: { fa: 'ذخیره مطالبات مشکوک‌الوصول', en: 'Allowance for doubtful accounts' },
  nr: { fa: 'اسناد دریافتنی', en: 'Notes (cheques) receivable' },
  inColl: { fa: 'اسناد در جریان وصول', en: 'Cheques in collection' },
  returned: { fa: 'چک‌های دریافتنی برگشتی', en: 'Returned cheques receivable' },
  ap: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
  np: { fa: 'اسناد پرداختنی', en: 'Notes (cheques) payable' },
  paper: { fa: 'موجودی مواد: کاغذ', en: 'Materials inventory: paper' },
}

export const lesson: Lesson = {
  slug: 'receivables-cheques',
  number: 13,
  level: 'intermediate',
  minutes: 34,
  icon: 'ReceiptText',
  tone: 'revenue',
  title: { fa: 'حساب‌ها و اسناد دریافتنی و چک', en: 'Receivables, Bad Debts and Cheques' },
  summary: {
    fa: 'فروش نسیه را ثبت و طلب هر مشتری را پیگیری کنید، مطالبات مشکوک‌الوصول را با روش ذخیره و تحلیل سنی برآورد کنید و چرخه کامل چک‌های دریافتی را، از دریافت چک مدت‌دار تا وصول یا برگشت آن، در دفاتر ثبت کنید.',
    en: 'Record credit sales and follow each customer’s balance, estimate doubtful accounts with the allowance method and an ageing analysis, and record the full life of a cheque received, from a post-dated cheque to its collection or return.',
  },
  objectives: [
    {
      fa: 'فروش نسیه، برگشت از فروش و تخفیف نقدی را ثبت کنید',
      en: 'Record credit sales, sales returns and cash discounts',
    },
    {
      fa: 'روش حذف مستقیم و روش ذخیره را مقایسه کنید و بگویید چرا روش ذخیره پذیرفته‌شده است',
      en: 'Compare the direct write-off and allowance methods and explain why the allowance method is the accepted one',
    },
    {
      fa: 'ذخیره مطالبات مشکوک‌الوصول را با درصد فروش و تحلیل سنی برآورد و ثبت کنید',
      en: 'Estimate and record the allowance with the percentage-of-sales method and an ageing analysis',
    },
    {
      fa: 'حذف طلب سوخت‌شده و بازیافت آن را ثبت کنید',
      en: 'Record the write-off of an uncollectible account and its recovery',
    },
    {
      fa: 'چرخه چک دریافتی (اسناد دریافتنی، در جریان وصول، وصول یا برگشت) و چک پرداختی را ثبت کنید',
      en: 'Record the life cycle of cheques received (receivable, in collection, collected or returned) and of cheques issued',
    },
  ],
  sections: [
    {
      id: 'credit-sales',
      title: { fa: 'فروش نسیه و حساب‌های دریافتنی', en: 'Credit Sales and Accounts Receivable' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'شرکت چاپ مهرگان برای ناشران، فروشگاه‌ها و آموزشگاه‌ها کار چاپی انجام می‌دهد و تقریباً همه فروشش نسیه است: مشتریان یا 30 تا 60 روز بعد پول می‌دهند، یا چک مدت‌دار می‌دهند. مهرگان سودآور است، اما مدیرش شکایت دارد که «پول در حساب نیست». مشکل در **مطالبات** است: چه کسی چقدر بدهکار است، از چه زمانی، و چه بخشی از آن هرگز وصول نمی‌شود؟',
            en: 'Mehregan Print Co. prints for publishers, shops and schools, and almost all of its sales are on credit: customers pay 30 to 60 days later or hand over post-dated cheques. Mehregan is profitable, yet its manager complains that “there’s no money in the account”. The problem lies in its **receivables**: who owes how much, since when, and how much of it will never be collected?',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**حساب‌های دریافتنی** مبالغی است که مشتریان بابت کالا یا خدمتی که نسیه گرفته‌اند به شرکت بدهکارند. معمولاً ظرف چند هفته تا چند ماه وصول می‌شوند و دارایی جاری‌اند. **دریافتنی‌های تجاری** از فروش اصلی شرکت می‌آیند و **سایر دریافتنی‌ها** از جای دیگر، مثل مساعده کارکنان. در صورت‌های مالی ایران معمولاً با عنوان «دریافتنی‌های تجاری و سایر دریافتنی‌ها» گزارش می‌شوند که اسناد دریافتنی (چک‌های دریافتی) را هم در بر می‌گیرد.',
            en: '**Accounts receivable** are amounts customers owe the company for goods or services bought on credit. They are usually collected within weeks or a few months and are current assets. **Trade receivables** arise from the company’s main sales; **other receivables** come from elsewhere, such as staff advances. Iranian financial statements usually report them as “trade and other receivables”, a line that also includes notes receivable (cheques received).',
          },
        },
        {
          type: 'journal',
          title: { fa: 'فروش نسیه و وصول آن', en: 'A credit sale and its collection' },
          entries: [
            {
              date: day(3),
              lines: [
                { account: arOf('فروشگاه کتاب سپهر', 'Sepehr Bookstore'), debit: 18000 },
                { account: ac.sales, credit: 18000 },
              ],
              memo: { fa: 'فاکتور چاپ کاتالوگ، مهلت پرداخت 30 روز.', en: 'Invoice for printing a catalogue, 30 days to pay.' },
            },
            {
              date: day(33),
              lines: [
                { account: ac.bank, debit: 18000 },
                { account: arOf('فروشگاه کتاب سپهر', 'Sepehr Bookstore'), credit: 18000 },
              ],
              memo: { fa: 'وصول با انتقال بانکی؛ طلب از سپهر صفر شد.', en: 'Collected by bank transfer; Sepehr’s balance is now zero.' },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'دو ساده‌سازی در این درس', en: 'Two simplifications in this lesson' },
          text: {
            fa: 'در عمل، فاکتور فروش در ایران معمولاً مالیات بر ارزش افزوده هم دارد و طلب از مشتری شامل آن است. برای اینکه تمرکز روی دریافتنی‌ها بماند، اینجا مالیات بر ارزش افزوده را کنار گذاشته‌ایم؛ ثبت آن را در درس بدهی‌ها، حقوق و مالیات بر ارزش افزوده می‌بینید. بهای تمام‌شده کالای فروش‌رفته را هم در درس موجودی کالا می‌بینید.',
            en: 'In practice, a sales invoice in Iran usually carries VAT, and the amount owed by the customer includes it. To keep the focus on receivables we leave VAT out here; you will record it in the lesson on liabilities, payroll and VAT. The cost of goods sold is covered in the lesson on inventory.',
          },
        },
        {
          type: 'h',
          text: { fa: 'برگشت از فروش و تخفیف (به‌اختصار)', en: 'Sales returns and discounts (briefly)' },
        },
        {
          type: 'p',
          text: {
            fa: '**برگشت از فروش و تخفیفات**: مشتری کالای معیوب را برمی‌گرداند یا به‌جای برگرداندن، تخفیف قیمت می‌گیرد. **تخفیف نقدی فروش**: تخفیفی برای پرداخت زودتر از موعد؛ مثلاً شرط «2/10، خالص 30» یعنی اگر مشتری ظرف 10 روز بپردازد 2٪ تخفیف می‌گیرد، وگرنه کل مبلغ را تا 30 روز می‌پردازد. هر دو **حساب کاهنده درآمد**ند: به‌جای بدهکار کردن مستقیم حساب فروش، جداگانه نگه داشته می‌شوند تا مدیر ببیند چقدر از فروش برگشته یا تخفیف داده شده است.',
            en: '**Sales returns and allowances**: the customer sends back faulty goods, or keeps them in exchange for a price reduction. **Sales discounts**: a reduction for paying early; terms of “2/10, net 30” mean the customer gets 2% off by paying within 10 days, or pays the full amount within 30. Both are **contra-revenue accounts**: rather than debiting Sales directly, they are kept separately so that management can see how much of sales came back or was discounted.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'فروش با شرط 2/10، خالص 30', en: 'A sale on 2/10, net 30' },
          entries: [
            {
              date: day(5),
              lines: [
                { account: arOf('نشر آوند', 'Avand Publishing'), debit: 20000 },
                { account: ac.sales, credit: 20000 },
              ],
              memo: { fa: 'چاپ 2,000 جلد کتاب، شرط 2/10، خالص 30.', en: 'Printing 2,000 books, terms 2/10, net 30.' },
            },
            {
              date: day(8),
              lines: [
                { account: ac.returns, debit: 2000 },
                { account: arOf('نشر آوند', 'Avand Publishing'), credit: 2000 },
              ],
              memo: { fa: '200 جلد با صحافی معیوب برگشت داده شد.', en: '200 books with faulty binding were returned.' },
            },
            {
              date: day(14),
              lines: [
                { account: ac.bank, debit: 17640 },
                { account: ac.discounts, debit: 360 },
                { account: arOf('نشر آوند', 'Avand Publishing'), credit: 18000 },
              ],
              memo: {
                fa: 'پرداخت در مهلت 10 روزه: تخفیف = 18,000 × 2٪ = 360؛ وجه دریافتی 17,640.',
                en: 'Paid within 10 days: discount = 18,000 × 2% = 360; cash received 17,640.',
              },
            },
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'فروش خالص = فروش − برگشت از فروش و تخفیفات − تخفیف نقدی فروش = 20,000 − 2,000 − 360 = 17,640',
            en: 'Net sales = Sales − Returns and allowances − Sales discounts = 20,000 − 2,000 − 360 = 17,640',
          },
          note: {
            fa: 'تخفیف فقط به مانده پس از برگشت (18,000) تعلق می‌گیرد، نه به کل فاکتور.',
            en: 'The discount applies only to the balance after the return (18,000), not to the whole invoice.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'از نگاه IFRS', en: 'From an IFRS perspective' },
          text: {
            fa: 'طبق IFRS 15، درآمد به مبلغی شناسایی می‌شود که شرکت انتظار دارد واقعاً دریافت کند. اگر برگشت‌ها یا تخفیف‌ها زیاد و قابل پیش‌بینی باشند، باید هنگام فروش برآورد و از درآمد کسر شوند. وقتی این مبالغ کم‌اهمیت‌اند، ثبت آن‌ها هنگام وقوع، مثل مثال بالا، روشی ساده و رایج است.',
            en: 'Under IFRS 15, revenue is recognised at the amount the company expects to actually receive. If returns or discounts are large and predictable, they must be estimated at the time of sale and deducted from revenue. When they are immaterial, recording them as they happen, as above, is a simple and common approach.',
          },
        },
      ],
    },
    {
      id: 'customer-accounts',
      title: { fa: 'حساب تفصیلی مشتریان و مدیریت اعتبار', en: 'Customer Detail Accounts and Credit Management' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'حساب کل دریافتنی‌ها فقط جمع را نشان می‌دهد. همان‌طور که در درس سند حسابداری و کدینگ سه‌سطحی دیدید، هر مشتری یک **حساب تفصیلی** دارد و جمع تفصیلی‌ها همیشه برابر حساب معین و کل است. برای دریافتنی‌ها، این تفصیلی‌ها پایه همه کارهای مدیریت اعتبار است. جدول زیر مانده مشتریان مهرگان را در پایان سال نشان می‌دهد.',
            en: 'The Accounts receivable general account shows only the total. As you saw in the lesson on vouchers and three-level coding, each customer has its own **detail account**, and the details always add up to the subsidiary and general accounts. For receivables, these details are the basis of all credit management. The table below shows Mehregan’s customer balances at year-end.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'مانده مشتریان مهرگان در پایان سال', en: 'Mehregan’s customer balances at year-end' },
          head: [
            { fa: 'کد تفصیلی', en: 'Detail code' },
            { fa: 'مشتری', en: 'Customer' },
            { fa: 'مانده', en: 'Balance' },
            { fa: 'سقف اعتبار', en: 'Credit limit' },
            { fa: 'وضعیت', en: 'Status' },
          ],
          numericCols: [2, 3],
          rows: [
            [same('2001'), { fa: 'فروشگاه کتاب سپهر', en: 'Sepehr Bookstore' }, 46000, 60000, { fa: 'عادی', en: 'Normal' }],
            [same('2002'), { fa: 'شرکت پخش البرز', en: 'Alborz Distribution' }, 52000, 50000, { fa: 'بیش از سقف اعتبار', en: 'Over its credit limit' }],
            [same('2003'), { fa: 'کافه نارنج', en: 'Narenj Café' }, 14000, 20000, { fa: 'دیرکرد', en: 'Paying late' }],
            [same('2004'), { fa: 'آموزشگاه پویا', en: 'Pouya Institute' }, 5000, 15000, { fa: 'بیش از 90 روز سررسیدگذشته', en: 'Over 90 days past due' }],
            [{ fa: 'سایر', en: 'Others' }, { fa: 'سایر مشتریان', en: 'Other customers' }, 63000, blank, blank],
            [total, blank, 180000, blank, blank],
          ],
        },
        {
          type: 'list',
          items: [
            {
              fa: '**سقف اعتبار**: پیش از فروش نسیه، برای هر مشتری سقفی تعیین و رعایت آن کنترل می‌شود. تأیید اعتبار کار واحد مالی است، نه واحد فروش که به فروش بیشتر پاداش می‌گیرد.',
              en: '**Credit limits**: before selling on credit, each customer gets a limit and compliance is checked. Credit approval belongs to finance, not to the sales team whose bonuses depend on selling more.',
            },
            {
              fa: '**صورت‌حساب و تأییدیه**: هر ماه یا فصل، گردش حساب برای مشتری فرستاده و مانده از او تأیید گرفته می‌شود. ترفند جابه‌جا کردن دریافت‌ها با همین تأییدیه‌ها کشف می‌شود.',
              en: '**Statements and confirmations**: every month or quarter, customers receive a statement and confirm their balance. These confirmations are how lapping frauds are caught.',
            },
            {
              fa: '**پیگیری منظم**: فهرست مطالبات سررسیدگذشته هر هفته بررسی و با مشتری تماس گرفته می‌شود؛ هرچه طلب قدیمی‌تر، وصولش سخت‌تر.',
              en: '**Regular follow-up**: the list of overdue balances is reviewed weekly and customers are called; the older a debt, the harder it is to collect.',
            },
            {
              fa: '**تضمین**: از مشتری تازه یا پرریسک، تضمین (مثلاً چک یا سفته تضمینی) گرفته می‌شود.',
              en: '**Security**: new or high-risk customers are asked for security, such as a guarantee cheque or promissory note.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'نرم‌افزارهای حسابداری از روی تفصیلی‌ها «گردش حساب مشتری» و «گزارش سنی مطالبات» را خودکار می‌سازند. اگر مشتری هم حساب دریافتنی دارد و هم چک در جریان وصول، تفصیلی شناور او همه را در یک گزارش نشان می‌دهد؛ مثلاً البرز در جدول بالا ممکن است جدا از این 52,000، چک‌هایی هم در اسناد دریافتنی داشته باشد که آن را از سقف اعتبارش دورتر می‌کند.',
            en: 'Accounting software builds customer statements and the receivables ageing report automatically from the detail accounts. If a customer has both an open balance and cheques in collection, its floating detail account shows everything in one report; Alborz in the table above, for example, may also have cheques in notes receivable on top of the 52,000, pushing it even further past its limit.',
          },
        },
      ],
    },
    {
      id: 'bad-debts',
      title: { fa: 'مطالبات مشکوک‌الوصول: حذف مستقیم یا ذخیره؟', en: 'Bad Debts: Direct Write-off or Allowance?' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'هر شرکتی که نسیه می‌فروشد، دیر یا زود به مشتری‌ای برمی‌خورد که نمی‌پردازد: ورشکسته می‌شود، ناپدید می‌شود یا سر مبلغ اختلاف دارد. طلبی که دیگر انتظار وصولش نمی‌رود **سوخت‌شده** است و زیان آن در حساب **هزینه مطالبات مشکوک‌الوصول** ثبت می‌شود. پرسش اصلی این است: این هزینه را **چه زمانی** ثبت کنیم؟',
            en: 'Every company that sells on credit sooner or later meets a customer who does not pay: it goes bankrupt, disappears or disputes the amount. A receivable that is no longer expected to be collected is **uncollectible**, and the loss is recorded as **doubtful accounts expense** (bad debt expense). The key question is **when** to record that expense.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'روش حذف مستقیم', en: 'Direct write-off method' },
            items: [
              { fa: 'هیچ برآوردی انجام نمی‌شود', en: 'No estimate is made' },
              { fa: 'هزینه وقتی ثبت می‌شود که طلب قطعاً سوخت شود؛ گاهی یک سال بعد', en: 'The expense is recorded when a debt is finally lost, sometimes a year later' },
              { fa: 'درآمد و هزینه مربوط در دو دوره متفاوت می‌افتند', en: 'Revenue and the related expense fall in different periods' },
              { fa: 'حساب‌های دریافتنی بیش از مبلغ قابل وصول نشان داده می‌شود', en: 'Receivables are shown above the amount that will be collected' },
              { fa: 'فقط وقتی پذیرفتنی است که مبالغ ناچیز باشد', en: 'Acceptable only when the amounts are immaterial' },
            ],
          },
          right: {
            title: { fa: 'روش ذخیره', en: 'Allowance method' },
            items: [
              { fa: 'در پایان هر دوره، زیان احتمالی برآورد می‌شود', en: 'The likely loss is estimated at the end of each period' },
              { fa: 'هزینه در همان دوره فروش ثبت می‌شود (اصل تطابق)', en: 'The expense is recorded in the period of the sale (matching)' },
              { fa: 'دریافتنی‌ها به مبلغ قابل وصول گزارش می‌شوند', en: 'Receivables are reported at the amount expected to be collected' },
              { fa: 'حذف طلب در آینده اثری بر سود ندارد', en: 'A later write-off has no effect on profit' },
              { fa: 'با مبنای تعهدی و استانداردها، از جمله IFRS 9، سازگار است', en: 'Consistent with accrual accounting and standards, including IFRS 9' },
            ],
          },
        },
        {
          type: 'journal',
          title: { fa: 'مقایسه دو روش برای یک طلب 5,000', en: 'The two methods for one 5,000 receivable' },
          entries: [
            {
              date: year(1),
              lines: [
                { account: ac.bdExp, debit: 5000 },
                { account: ac.allowance, credit: 5000 },
              ],
              memo: {
                fa: 'روش ذخیره، پایان سال 1: برآورد زیان در همان سال فروش (فرض کنید برآورد دقیقاً همین طلب را پوشانده است).',
                en: 'Allowance method, end of Year 1: the loss is estimated in the year of the sale (assume the estimate covered exactly this debt).',
              },
            },
            {
              date: year(2),
              lines: [
                { account: ac.allowance, debit: 5000 },
                { account: arOf('مشتری', 'customer'), credit: 5000 },
              ],
              memo: {
                fa: 'روش ذخیره، سال 2: حذف طلب؛ هزینه تازه‌ای ثبت نمی‌شود.',
                en: 'Allowance method, Year 2: the debt is written off; no new expense.',
              },
            },
            {
              date: year(2),
              lines: [
                { account: ac.bdExp, debit: 5000 },
                { account: arOf('مشتری', 'customer'), credit: 5000 },
              ],
              memo: {
                fa: 'روش حذف مستقیم، سال 2: کل هزینه یک سال دیرتر از فروش ثبت می‌شود.',
                en: 'Direct write-off, Year 2: the whole expense lands a year after the sale.',
              },
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: '**ذخیره مطالبات مشکوک‌الوصول** یک **حساب کاهنده دارایی** است، مثل استهلاک انباشته: مانده بستانکار دارد و از حساب‌های دریافتنی کسر می‌شود. چرا هنگام برآورد مستقیماً حساب‌های دریافتنی را بستانکار نمی‌کنیم؟ چون هنوز نمی‌دانیم **کدام** مشتری نخواهد پرداخت و نمی‌توانیم تفصیلی هیچ مشتری‌ای را کم کنیم. پس برآورد در حسابی جداگانه می‌نشیند.',
            en: 'The **allowance for doubtful accounts** is a **contra-asset account**, like accumulated depreciation: it carries a credit balance and is deducted from accounts receivable. Why not credit Accounts receivable directly when estimating? Because we do not yet know **which** customer will fail to pay, so we cannot reduce any customer’s detail account. The estimate therefore sits in a separate account.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'خالص حساب‌های دریافتنی (مبلغ قابل وصول) = حساب‌های دریافتنی − ذخیره مطالبات مشکوک‌الوصول',
            en: 'Net receivables (amount expected to be collected) = Accounts receivable − Allowance for doubtful accounts',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'IFRS 9 و مالیات', en: 'IFRS 9 and tax' },
          text: {
            fa: 'در IFRS 9 این برآورد «زیان اعتباری مورد انتظار» نام دارد و برای دریافتنی‌های تجاری معمولاً با جدولی شبیه تحلیل سنی همین درس (ماتریس ذخیره) محاسبه می‌شود. از نظر مالیاتی در ایران، پذیرش هزینه مطالبات مشکوک‌الوصول شرایط ویژه‌ای دارد، مثلاً مستندات پیگیری و اقامه دعوا؛ شرایط روز را از قانون مالیات‌های مستقیم و آیین‌نامه‌های آن بررسی کنید. رقم حسابداری و رقم پذیرفته‌شده مالیاتی ممکن است با هم فرق داشته باشند.',
            en: 'IFRS 9 calls this estimate the “expected credit loss”, and for trade receivables it is usually computed with a table much like this lesson’s ageing analysis (a provision matrix). For Iranian tax purposes, deducting doubtful accounts expense is subject to special conditions, such as evidence of collection efforts and legal action; check the current Direct Taxes Act and its regulations. The accounting figure and the tax-deductible figure may differ.',
          },
        },
      ],
    },
    {
      id: 'estimating-allowance',
      title: { fa: 'برآورد ذخیره: درصد فروش و تحلیل سنی', en: 'Estimating the Allowance: Percentage of Sales and Ageing' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'برای برآورد ذخیره دو روش رایج است. **روش درصد فروش** از صورت سود و زیان شروع می‌کند: چند درصد فروش نسیه این دوره سوخت می‌شود؟ **روش تحلیل سنی** از ترازنامه شروع می‌کند: از طلب‌هایی که امروز داریم، چقدر وصول نمی‌شود؟',
            en: 'There are two common ways to estimate the allowance. The **percentage-of-sales method** starts from the income statement: what share of this period’s credit sales will go bad? The **ageing method** starts from the balance sheet: of the receivables we hold today, how much will not be collected?',
          },
        },
        {
          type: 'h',
          text: { fa: 'روش درصد فروش نسیه', en: 'Percentage of credit sales' },
        },
        {
          type: 'formula',
          text: {
            fa: 'هزینه مطالبات مشکوک‌الوصول دوره = درصد تجربی × فروش نسیه دوره = 1٪ × 640,000 = 6,400',
            en: 'Doubtful accounts expense = historical rate × credit sales for the period = 1% × 640,000 = 6,400',
          },
          note: {
            fa: 'در این روش، مانده فعلی حساب ذخیره در محاسبه هزینه دخالتی ندارد. اگر ذخیره مهرگان پیش از اصلاح 2,300 مانده بستانکار داشته باشد، پس از ثبت 6,400 به 8,700 می‌رسد.',
            en: 'In this method the existing allowance balance plays no part in the expense. If Mehregan’s allowance had a 2,300 credit balance before adjustment, it would reach 8,700 after recording 6,400.',
          },
        },
        {
          type: 'h',
          text: { fa: 'روش تحلیل سنی مطالبات', en: 'The ageing method' },
        },
        {
          type: 'p',
          text: {
            fa: 'در **تحلیل سنی**، طلب هر مشتری بر اساس مدتی که از سررسیدش گذشته در چند ستون دسته‌بندی می‌شود. هرچه طلب قدیمی‌تر باشد احتمال وصولش کمتر است، پس برای هر دسته درصد بالاتری در نظر گرفته می‌شود. درصدها از تجربه سال‌های قبل و شرایط روز (مثلاً رکود بازار) می‌آیند. حاصل، **مانده لازم** حساب ذخیره در پایان دوره است.',
            en: 'In an **ageing analysis**, each customer’s balance is sorted into columns by how long it is past its due date. The older a debt, the less likely it is to be collected, so each band gets a higher rate. The rates come from past experience and current conditions (a market slowdown, for example). The result is the **required ending balance** of the allowance.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'تحلیل سنی مطالبات مهرگان در پایان سال', en: 'Mehregan’s receivables ageing at year-end' },
          head: [
            { fa: 'مشتری', en: 'Customer' },
            { fa: 'جمع', en: 'Total' },
            { fa: 'سررسیدنشده', en: 'Not yet due' },
            { fa: '1 تا 30 روز', en: '1 to 30 days' },
            { fa: '31 تا 60 روز', en: '31 to 60 days' },
            { fa: '61 تا 90 روز', en: '61 to 90 days' },
            { fa: 'بیش از 90 روز', en: 'Over 90 days' },
          ],
          numericCols: [1, 2, 3, 4, 5, 6],
          rows: [
            [{ fa: 'فروشگاه کتاب سپهر', en: 'Sepehr Bookstore' }, 46000, 40000, 6000, blank, blank, blank],
            [{ fa: 'شرکت پخش البرز', en: 'Alborz Distribution' }, 52000, 30000, 18000, 4000, blank, blank],
            [{ fa: 'کافه نارنج', en: 'Narenj Café' }, 14000, blank, 5000, 6000, 3000, blank],
            [{ fa: 'آموزشگاه پویا', en: 'Pouya Institute' }, 5000, blank, blank, blank, blank, 5000],
            [{ fa: 'سایر مشتریان', en: 'Other customers' }, 63000, 40000, 11000, 6000, 6000, blank],
            [total, 180000, 110000, 40000, 16000, 9000, 5000],
          ],
        },
        {
          type: 'table',
          caption: { fa: 'محاسبه مانده لازم ذخیره', en: 'Required allowance' },
          head: [
            { fa: 'دسته سنی', en: 'Age band' },
            { fa: 'مانده', en: 'Balance' },
            { fa: 'درصد برآوردی سوخت', en: 'Estimated loss rate' },
            { fa: 'ذخیره لازم', en: 'Allowance needed' },
          ],
          numericCols: [1, 2, 3],
          rows: [
            [{ fa: 'سررسیدنشده', en: 'Not yet due' }, 110000, { fa: '1٪', en: '1%' }, 1100],
            [{ fa: '1 تا 30 روز', en: '1 to 30 days' }, 40000, { fa: '4٪', en: '4%' }, 1600],
            [{ fa: '31 تا 60 روز', en: '31 to 60 days' }, 16000, { fa: '10٪', en: '10%' }, 1600],
            [{ fa: '61 تا 90 روز', en: '61 to 90 days' }, 9000, { fa: '25٪', en: '25%' }, 2250],
            [{ fa: 'بیش از 90 روز', en: 'Over 90 days' }, 5000, { fa: '50٪', en: '50%' }, 2500],
            [total, 180000, blank, 9050],
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'هزینه دوره = مانده لازم ذخیره − مانده بستانکار فعلی ذخیره = 9,050 − 2,300 = 6,750',
            en: 'Expense for the period = required allowance − existing credit balance = 9,050 − 2,300 = 6,750',
          },
          note: {
            fa: 'اگر حساب ذخیره پیش از اصلاح مانده **بدهکار** 700 داشت (حذف‌های سال بیش از برآورد قبلی بوده)، هزینه 9,050 + 700 = 9,750 می‌شد. هدف همیشه رسیدن به مانده لازم است.',
            en: 'Had the allowance shown a 700 **debit** balance before adjustment (write-offs exceeded the earlier estimate), the expense would be 9,050 + 700 = 9,750. The aim is always to reach the required balance.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت اصلاحی پایان سال مهرگان (روش تحلیل سنی)', en: 'Mehregan’s year-end adjusting entry (ageing method)' },
          entries: [
            {
              date: { fa: 'پایان سال', en: 'Year-end' },
              lines: [
                { account: ac.bdExp, debit: 6750 },
                { account: ac.allowance, credit: 6750 },
              ],
              memo: { fa: 'رساندن ذخیره از 2,300 به 9,050.', en: 'Brings the allowance from 2,300 to 9,050.' },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'نمایش در ترازنامه مهرگان', en: 'Presentation on Mehregan’s balance sheet' },
          head: [
            { fa: 'شرح', en: 'Item' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          numericCols: [1],
          rows: [
            [{ fa: 'حساب‌های دریافتنی تجاری', en: 'Trade accounts receivable' }, 180000],
            [{ fa: 'کسر می‌شود: ذخیره مطالبات مشکوک‌الوصول', en: 'Less: allowance for doubtful accounts' }, 9050],
            [{ fa: 'خالص حساب‌های دریافتنی', en: 'Net accounts receivable' }, 170950],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'کدام روش؟', en: 'Which method?' },
          text: {
            fa: 'دو روش لزوماً یک عدد نمی‌دهند: در مثال مهرگان، درصد فروش ذخیره را به 8,700 می‌رساند و تحلیل سنی به 9,050. روش درصد فروش ساده است و بر تطابق هزینه با فروش تمرکز دارد؛ تحلیل سنی دقیق‌تر است و مبلغ قابل وصول در ترازنامه را بهتر نشان می‌دهد. بسیاری از شرکت‌ها در طول سال درصد فروش را به کار می‌برند و در پایان سال، با تحلیل سنی ذخیره را به مانده لازم می‌رسانند.',
            en: 'The two methods need not agree: for Mehregan, percentage of sales takes the allowance to 8,700, ageing to 9,050. Percentage of sales is simple and focuses on matching the expense with sales; ageing is more precise and gives a better collectable amount on the balance sheet. Many companies use percentage of sales during the year and top the allowance up to the ageing figure at year-end.',
          },
        },
      ],
    },
    {
      id: 'write-off-recovery',
      title: { fa: 'حذف و بازیافت طلب سوخت‌شده', en: 'Writing Off and Recovering an Account' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'آموزشگاه پویا تعطیل شده و مدیرش در دسترس نیست. مدیر مالی مهرگان پس از پیگیری‌های مستند تصمیم می‌گیرد طلب 5,000 پویا را **حذف (سوخت) کند**. در روش ذخیره، این حذف هزینه تازه‌ای نمی‌سازد؛ هزینه پیش‌تر، هنگام برآورد ذخیره، ثبت شده است. حذف فقط بخشی از برآورد کلی را به یک مشتری مشخص نسبت می‌دهد.',
            en: 'Pouya Institute has closed and its manager cannot be reached. After documented collection efforts, Mehregan’s financial manager decides to **write off** Pouya’s 5,000 balance. Under the allowance method the write-off creates no new expense; the expense was recorded earlier, when the allowance was estimated. The write-off simply assigns part of the general estimate to one specific customer.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'حذف طلب آموزشگاه پویا', en: 'Writing off Pouya Institute' },
          entries: [
            {
              date: { fa: 'سال بعد، روز 20', en: 'Next year, Day 20' },
              lines: [
                { account: ac.allowance, debit: 5000 },
                { account: arOf('آموزشگاه پویا', 'Pouya Institute'), credit: 5000 },
              ],
              memo: { fa: 'حذف طلب سوخت‌شده با مجوز مدیر مالی؛ مستندات پیگیری پیوست است.', en: 'Uncollectible balance written off with the financial manager’s approval; collection records attached.' },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'اثر حذف بر ترازنامه', en: 'Effect of the write-off on the balance sheet' },
          head: [
            { fa: 'شرح', en: 'Item' },
            { fa: 'پیش از حذف', en: 'Before write-off' },
            { fa: 'پس از حذف', en: 'After write-off' },
          ],
          numericCols: [1, 2],
          rows: [
            [{ fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, 180000, 175000],
            [{ fa: 'کسر می‌شود: ذخیره مطالبات مشکوک‌الوصول', en: 'Less: allowance for doubtful accounts' }, 9050, 4050],
            [{ fa: 'خالص حساب‌های دریافتنی', en: 'Net accounts receivable' }, 170950, 170950],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          text: {
            fa: 'حذف طلب نه سود را تغییر می‌دهد و نه خالص دریافتنی‌ها را: هر دو طرف (حساب‌های دریافتنی و ذخیره) 5,000 کم می‌شوند. سود در سال قبل، هنگام برآورد، کاهش یافته بود.',
            en: 'The write-off changes neither profit nor net receivables: both receivables and the allowance fall by 5,000. Profit was reduced in the previous year, when the estimate was made.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'شش ماه بعد، مدیر پویا آموزشگاه را دوباره راه می‌اندازد و 2,000 از بدهی‌اش را می‌پردازد؛ بقیه هنوز وصول‌نشدنی است. **بازیافت** دو ثبت دارد: اول، طلب به همان اندازه دوباره **برقرار** می‌شود تا سابقه پرداخت مشتری در تفصیلی او بماند؛ دوم، وصول به‌صورت عادی ثبت می‌شود.',
            en: 'Six months later Pouya’s manager reopens the institute and pays 2,000 of the debt; the rest is still uncollectible. A **recovery** takes two entries: first the receivable is **reinstated** for that amount, so the payment shows in the customer’s history; then the collection is recorded as usual.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'بازیافت 2,000 از طلب حذف‌شده', en: 'Recovering 2,000 of the written-off debt' },
          entries: [
            {
              date: { fa: 'سال بعد، روز 200', en: 'Next year, Day 200' },
              lines: [
                { account: arOf('آموزشگاه پویا', 'Pouya Institute'), debit: 2000 },
                { account: ac.allowance, credit: 2000 },
              ],
              memo: { fa: 'برقراری دوباره بخشی از طلب که وصول می‌شود.', en: 'Reinstates the part of the debt being collected.' },
            },
            {
              date: { fa: 'سال بعد، روز 200', en: 'Next year, Day 200' },
              lines: [
                { account: ac.bank, debit: 2000 },
                { account: arOf('آموزشگاه پویا', 'Pouya Institute'), credit: 2000 },
              ],
              memo: { fa: 'وصول وجه.', en: 'Cash collected.' },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'حذف طلب بخشیدن آن نیست', en: 'Writing off is not forgiving' },
          text: {
            fa: 'حذف طلب از دفاتر یعنی دیگر آن را دارایی نمی‌دانیم، نه اینکه از آن گذشته‌ایم؛ پیگیری حقوقی ادامه پیدا می‌کند. تصمیم حذف باید با مجوز مدیر مالی (نه فروشنده یا صندوق‌دار) و با مستندات پیگیری گرفته شود؛ وگرنه حذف طلب راهی برای پنهان کردن برداشت از وجوهی می‌شود که مشتری واقعاً پرداخته است.',
            en: 'Writing a debt off the books means we no longer count it as an asset, not that we have given up on it; legal follow-up continues. A write-off needs the financial manager’s approval (not a salesperson’s or cashier’s) and documented collection efforts; otherwise write-offs become a way to hide the theft of money a customer actually paid.',
          },
        },
      ],
    },
    {
      id: 'cheques-receivable',
      title: { fa: 'چک‌های دریافتی و اسناد دریافتنی در ایران', en: 'Cheques and Notes Receivable in Iran' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در ایران بخش بزرگی از فروش نسیه با **چک مدت‌دار (وعده‌دار)** تسویه می‌شود: مشتری امروز چکی با تاریخ دو یا سه ماه بعد می‌دهد. چک مدت‌دار تا سررسید پول نیست؛ سند طلبی است که در سررسید می‌توان آن را به بانک داد. در حسابداری، چک‌های دریافتیِ وصول‌نشده در حساب **اسناد دریافتنی** نگهداری می‌شوند و چکی که به بانک سپرده شده و هنوز وجهش نیامده، در حساب **اسناد در جریان وصول**.',
            en: 'In Iran a large share of credit sales is settled with **post-dated cheques**: the customer hands over a cheque dated two or three months ahead. A post-dated cheque is not money until its date; it is a claim that can be presented to the bank when due. In the books, uncollected cheques received are held in **notes (cheques) receivable** («اسناد دریافتنی»), and a cheque handed to the bank whose funds have not yet arrived sits in **cheques in collection** («اسناد در جریان وصول»).',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'دریافت چک', en: 'Receive the cheque' },
              text: {
                fa: 'مبلغ، تاریخ، نام گیرنده و امضا را بررسی کنید و چک صیادی را در سامانه صیاد تأیید کنید. ثبت: بدهکار اسناد دریافتنی، بستانکار حساب‌های دریافتنی.',
                en: 'Check the amount, date, payee and signature, and confirm the Sayad cheque in the Sayad system. Entry: Dr Notes receivable, Cr Accounts receivable.',
              },
            },
            {
              title: { fa: 'نگهداری', en: 'Safekeeping' },
              text: {
                fa: 'چک در گاوصندوق و در دفتر یا زیرسیستم «چک‌های دریافتی» با شماره، بانک، سررسید و نام مشتری ثبت می‌شود.',
                en: 'The cheque goes in the safe and into the cheques-received register or module, with its number, bank, due date and customer.',
              },
            },
            {
              title: { fa: 'سپردن به بانک برای وصول', en: 'Deposit for collection' },
              text: {
                fa: 'نزدیک سررسید، چک به بانک سپرده می‌شود. ثبت: بدهکار اسناد در جریان وصول، بستانکار اسناد دریافتنی.',
                en: 'Near the due date, the cheque is deposited with the bank. Entry: Dr Cheques in collection, Cr Notes receivable.',
              },
            },
            {
              title: { fa: 'وصول', en: 'Collection' },
              text: {
                fa: 'وقتی بانک وجه را به حساب می‌نشاند: بدهکار بانک، بستانکار اسناد در جریان وصول.',
                en: 'When the bank credits the funds: Dr Bank, Cr Cheques in collection.',
              },
            },
            {
              title: { fa: 'یا برگشت', en: 'Or return' },
              text: {
                fa: 'اگر حساب صادرکننده موجودی کافی نداشته باشد، بانک چک را برگشت می‌زند و گواهی عدم پرداخت صادر می‌کند. ثبت: بدهکار چک‌های دریافتنی برگشتی، بستانکار اسناد در جریان وصول.',
                en: 'If the drawer’s account lacks funds, the bank returns the cheque and issues a certificate of non-payment. Entry: Dr Returned cheques receivable, Cr Cheques in collection.',
              },
            },
          ],
        },
        {
          type: 'h',
          text: { fa: 'مثال: دو چک شرکت پخش البرز', en: 'Example: two cheques from Alborz Distribution' },
        },
        {
          type: 'p',
          text: {
            fa: 'روز 3، مهرگان 24,000 کار چاپی نسیه به شرکت پخش البرز فروخت. روز 10، البرز دو چک 12,000 داد: چک 5011 با سررسید روز 40 و چک 5012 با سررسید روز 70. چک اول وصول شد، اما چک دوم برگشت خورد و البرز روز 85 مبلغ آن را با انتقال پایا پرداخت و چک را پس گرفت.',
            en: 'On Day 3 Mehregan sold 24,000 of printing to Alborz Distribution on credit. On Day 10 Alborz handed over two cheques of 12,000: no. 5011 due on Day 40 and no. 5012 due on Day 70. The first was collected, but the second bounced; on Day 85 Alborz paid its amount by PAYA transfer and took the cheque back.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'چرخه کامل دو چک', en: 'The full life of two cheques' },
          entries: [
            {
              date: day(3),
              lines: [
                { account: arOf('شرکت پخش البرز', 'Alborz Distribution'), debit: 24000 },
                { account: ac.sales, credit: 24000 },
              ],
              memo: { fa: 'فروش نسیه.', en: 'Credit sale.' },
            },
            {
              date: day(10),
              lines: [
                { account: { fa: 'اسناد دریافتنی: البرز', en: 'Notes receivable: Alborz' }, debit: 24000 },
                { account: arOf('شرکت پخش البرز', 'Alborz Distribution'), credit: 24000 },
              ],
              memo: { fa: 'دریافت چک‌های 5011 و 5012؛ طلب از حساب دریافتنی به اسناد دریافتنی منتقل شد.', en: 'Cheques 5011 and 5012 received; the claim moves from accounts to notes receivable.' },
            },
            {
              date: day(38),
              lines: [
                { account: ac.inColl, debit: 12000 },
                { account: { fa: 'اسناد دریافتنی: البرز', en: 'Notes receivable: Alborz' }, credit: 12000 },
              ],
              memo: { fa: 'چک 5011 برای وصول به بانک سپرده شد.', en: 'Cheque 5011 deposited for collection.' },
            },
            {
              date: day(41),
              lines: [
                { account: ac.bank, debit: 12000 },
                { account: ac.inColl, credit: 12000 },
              ],
              memo: { fa: 'وصول چک 5011.', en: 'Cheque 5011 collected.' },
            },
            {
              date: day(68),
              lines: [
                { account: ac.inColl, debit: 12000 },
                { account: { fa: 'اسناد دریافتنی: البرز', en: 'Notes receivable: Alborz' }, credit: 12000 },
              ],
              memo: { fa: 'چک 5012 برای وصول به بانک سپرده شد.', en: 'Cheque 5012 deposited for collection.' },
            },
            {
              date: day(71),
              lines: [
                { account: { fa: 'چک‌های دریافتنی برگشتی: البرز', en: 'Returned cheques receivable: Alborz' }, debit: 12000 },
                { account: ac.inColl, credit: 12000 },
              ],
              memo: { fa: 'برگشت چک 5012 به دلیل کافی نبودن موجودی؛ گواهی عدم پرداخت دریافت شد.', en: 'Cheque 5012 returned for insufficient funds; certificate of non-payment received.' },
            },
            {
              date: day(85),
              lines: [
                { account: ac.bank, debit: 12000 },
                { account: { fa: 'چک‌های دریافتنی برگشتی: البرز', en: 'Returned cheques receivable: Alborz' }, credit: 12000 },
              ],
              memo: { fa: 'البرز مبلغ چک برگشتی را با پایا پرداخت کرد و چک به او پس داده شد.', en: 'Alborz paid the returned cheque by PAYA, and the cheque was handed back.' },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'مانده حساب‌ها پس از هر مرحله (فقط همین مثال)', en: 'Balances after each step (this example only)' },
          head: [
            { fa: 'تاریخ', en: 'Date' },
            { fa: 'اسناد دریافتنی', en: 'Notes receivable' },
            { fa: 'در جریان وصول', en: 'In collection' },
            { fa: 'چک برگشتی', en: 'Returned cheques' },
            { fa: 'وجه وصول‌شده', en: 'Cash collected' },
          ],
          numericCols: [1, 2, 3, 4],
          rows: [
            [day(10), 24000, 0, 0, 0],
            [day(38), 12000, 12000, 0, 0],
            [day(41), 12000, 0, 0, 12000],
            [day(68), 0, 12000, 0, 12000],
            [day(71), 0, 0, 12000, 12000],
            [day(85), 0, 0, 0, 24000],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'چک برگشتی در عمل ایران', en: 'Returned cheques in Iranian practice' },
          text: {
            fa: 'پس از برگشت چک، بانک گواهی عدم پرداخت صادر می‌کند و سابقه آن برای صادرکننده در سامانه‌های بانکی ثبت می‌شود. دارنده می‌تواند وجه را از راه‌هایی که قانون صدور چک پیش‌بینی کرده پیگیری کند؛ جزئیات این روند را از قانون روز و مشاور حقوقی بپرسید. بسیاری از شرکت‌ها چک برگشتی را در معین جداگانه‌ای مثل «چک‌های دریافتنی برگشتی» نگه می‌دارند تا از طلب عادی جدا دیده شود؛ برخی آن را به حساب‌های دریافتنی همان مشتری برمی‌گردانند. در هر دو حالت تفصیلی مشتری همان است و چک‌های برگشتی باید در تحلیل سنی و برآورد ذخیره هم دیده شوند.',
            en: 'After a cheque bounces, the bank issues a certificate of non-payment and the event is recorded against the drawer in the banking systems. The holder can pursue payment through the routes set out in the Cheque Law; ask a legal adviser about the current procedure. Many companies keep returned cheques in a separate subsidiary such as “Returned cheques receivable”, so they stand apart from ordinary receivables; others move them back to the customer’s accounts receivable. Either way the customer’s detail code is the same, and returned cheques must be included in the ageing and the allowance estimate.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'خرج کردن چک مشتری', en: 'Passing a customer’s cheque to a supplier' },
          text: {
            fa: 'در ایران رایج است که شرکت چک دریافتی از مشتری را به‌جای پول به تأمین‌کننده خود بدهد. ثبت: بدهکار حساب‌های پرداختنی (تأمین‌کننده)، بستانکار اسناد دریافتنی (مشتری). برای چک صیادی، انتقال باید در سامانه صیاد هم ثبت شود. یادتان باشد ظهرنویس در برابر دارنده چک مسئولیت تضامنی دارد: اگر چک برگشت بخورد، تأمین‌کننده می‌تواند به شما مراجعه کند. پس فهرست چک‌های واگذارشده را تا روز وصول نگه دارید.',
            en: 'In Iran it is common to hand a customer’s cheque to a supplier instead of paying in cash. Entry: Dr Accounts payable (supplier), Cr Notes receivable (customer). For a Sayad cheque the transfer must also be registered in the Sayad system. Remember that an endorser is jointly liable to the holder: if the cheque bounces, the supplier can come back to you. So keep a list of cheques passed on until they are paid.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'سفته تضمینی و حساب‌های انتظامی', en: 'Guarantee notes and memorandum accounts' },
          text: {
            fa: 'سفته در ایران بیشتر به‌عنوان **تضمین** گرفته می‌شود، مثلاً برای حسن انجام کار یا بازپرداخت، نه برای تسویه طلب. چون چنین سندی طلب تازه‌ای ایجاد نمی‌کند، در حساب‌های دارایی ثبت نمی‌شود؛ آن را در **حساب‌های انتظامی** (حساب‌های یادداشتی خارج از ترازنامه، مثل «اسناد تضمینی دریافتی» و طرف مقابل آن) نگه می‌دارند تا فراموش نشود و در پایان قرارداد پس داده شود.',
            en: 'In Iran a promissory note («سفته») is mostly taken as **security**, for example for performance or repayment, not to settle a debt. Because it creates no new claim, it is not recorded as an asset; it is kept in **memorandum accounts** («حساب‌های انتظامی»: off-balance-sheet tracking accounts such as “guarantee notes received” and its contra) so that it is not forgotten and is returned when the contract ends.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در ترازنامه', en: 'On the balance sheet' },
          text: {
            fa: 'اسناد دریافتنی، اسناد در جریان وصول و چک‌های برگشتی، همراه حساب‌های دریافتنی و پس از کسر ذخیره، در «دریافتنی‌های تجاری و سایر دریافتنی‌ها» گزارش می‌شوند. هیچ‌کدام تا روز وصول جزو موجودی نقد نیستند.',
            en: 'Notes receivable, cheques in collection and returned cheques are reported with accounts receivable, net of the allowance, under “trade and other receivables”. None of them is cash until collected.',
          },
        },
      ],
    },
    {
      id: 'notes-payable',
      title: { fa: 'طرف صادرکننده: اسناد پرداختنی', en: 'The Issuer’s Side: Notes Payable' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'وقتی خود شرکت به تأمین‌کننده چک مدت‌دار می‌دهد، تصویر آینه‌ای همین چرخه را می‌بیند. تا سررسید، پولی از حساب بانکی خارج نشده است؛ پس بدهی از «حساب‌های پرداختنی» به **«اسناد پرداختنی»** منتقل می‌شود و بانک فقط روزی بستانکار می‌شود که چک واقعاً پرداخت شود.',
            en: 'When the company itself gives a supplier a post-dated cheque, it sees the mirror image of the same cycle. No money leaves the bank account until the due date, so the debt moves from accounts payable to **notes (cheques) payable** («اسناد پرداختنی»), and Bank is credited only on the day the cheque is actually paid.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'خرید کاغذ و پرداخت با چک مدت‌دار', en: 'Buying paper and paying with a post-dated cheque' },
          entries: [
            {
              date: day(2),
              lines: [
                { account: ac.paper, debit: 30000 },
                { account: { fa: 'حساب‌های پرداختنی: کاغذ پارس', en: 'Accounts payable: Pars Paper' }, credit: 30000 },
              ],
              memo: { fa: 'خرید نسیه کاغذ.', en: 'Paper bought on credit.' },
            },
            {
              date: day(5),
              lines: [
                { account: { fa: 'حساب‌های پرداختنی: کاغذ پارس', en: 'Accounts payable: Pars Paper' }, debit: 30000 },
                { account: { fa: 'اسناد پرداختنی: کاغذ پارس', en: 'Notes payable: Pars Paper' }, credit: 30000 },
              ],
              memo: { fa: 'صدور چک 7021 با سررسید روز 60؛ بانک هنوز دست نخورده است.', en: 'Cheque 7021 issued, due Day 60; Bank is not touched yet.' },
            },
            {
              date: day(60),
              lines: [
                { account: { fa: 'اسناد پرداختنی: کاغذ پارس', en: 'Notes payable: Pars Paper' }, debit: 30000 },
                { account: ac.bank, credit: 30000 },
              ],
              memo: { fa: 'پرداخت چک 7021 توسط بانک در سررسید.', en: 'Cheque 7021 paid by the bank on its due date.' },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباه رایج: بستانکار کردن بانک در روز صدور', en: 'Common error: crediting Bank on the day of issue' },
          text: {
            fa: 'اگر روز صدور چک مدت‌دار بانک را بستانکار کنید، مانده بانک در دفاتر کمتر از پولی می‌شود که واقعاً در حساب است و بدهی واقعی به تأمین‌کننده از دید پنهان می‌ماند. نتیجه: تصمیم‌های نقدی اشتباه و صورت مغایرت بانکی پر از «چک معوق» که ماه‌ها باز می‌ماند.',
            en: 'Crediting Bank on the day a post-dated cheque is written makes the book balance lower than the money actually in the account and hides the real debt to the supplier. The result: poor cash decisions and a bank reconciliation full of “outstanding cheques” that stay open for months.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**دفتر چک‌های صادره**: هر چک با شماره، مبلغ، سررسید و گیرنده ثبت می‌شود؛ برگ‌های باطل‌شده هم ثبت و نگهداری می‌شوند.',
              en: '**Cheques-issued register**: every cheque is logged with its number, amount, due date and payee; spoiled cheques are logged and kept too.',
            },
            {
              fa: '**برنامه نقدی بر اساس سررسیدها**: هر هفته ببینید کدام چک‌ها سررسید می‌شوند و آیا حساب موجودی کافی دارد.',
              en: '**Cash plan by due date**: each week, check which cheques fall due and whether the account will have enough funds.',
            },
            {
              fa: '**امضا و ثبت**: چک را صاحبان امضای مجاز امضا می‌کنند و در سامانه صیاد ثبت می‌شود.',
              en: '**Signing and registration**: cheques are signed by the authorised signatories and registered in the Sayad system.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'پیامد چک بی‌محل', en: 'Consequences of a bounced cheque' },
          text: {
            fa: 'صدور چکی که در سررسید موجودی کافی ندارد، برای صادرکننده پیامدهای حقوقی و بانکی جدی دارد؛ از جمله محدودیت در خدمات بانکی تا زمان رفع سوءاثر. جزئیات را از قانون صدور چک و مقررات روز بانک مرکزی بررسی کنید.',
            en: 'Issuing a cheque that cannot be paid on its due date has serious legal and banking consequences for the drawer, including restrictions on banking services until the record is cleared. Check the current Cheque Law and Central Bank rules for details.',
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
            fa: 'چهار تمرین زیر از آسان به دشوار مرتب شده‌اند و هر کدام یک کسب‌وکار تازه است. اول خودتان حل کنید، بعد پاسخ را باز کنید.',
            en: 'The four exercises below run from easy to hard, each with a new business. Solve each one yourself first, then open the solution.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'فروش نسیه، برگشت و تخفیف', en: 'Credit sale, return and discount' },
          difficulty: 'easy',
          problem: {
            fa: 'شرکت پخش لوازم اداری آرین روز 2 لوازم اداری به مبلغ 50,000 با شرط «2/10، خالص 30» به دفتر وکالت سینا فروخت. روز 6 سینا 4,000 کالای آسیب‌دیده را برگرداند و روز 11 مانده را پرداخت. ثبت‌ها را بنویسید و فروش خالص را حساب کنید.',
            en: 'On Day 2 Arian Office Supplies sold 50,000 of goods to Sina Law Office on terms of 2/10, net 30. On Day 6 Sina returned 4,000 of damaged goods, and on Day 11 it paid the balance. Write the entries and compute net sales.',
          },
          hint: {
            fa: 'روز 11 هنوز در مهلت 10 روزه است (از روز 2). تخفیف را روی مانده پس از برگشت حساب کنید.',
            en: 'Day 11 is still within 10 days of Day 2. Compute the discount on the balance after the return.',
          },
          solution: [
            {
              type: 'journal',
              entries: [
                {
                  date: day(2),
                  lines: [
                    { account: arOf('دفتر وکالت سینا', 'Sina Law Office'), debit: 50000 },
                    { account: ac.sales, credit: 50000 },
                  ],
                },
                {
                  date: day(6),
                  lines: [
                    { account: ac.returns, debit: 4000 },
                    { account: arOf('دفتر وکالت سینا', 'Sina Law Office'), credit: 4000 },
                  ],
                },
                {
                  date: day(11),
                  lines: [
                    { account: ac.bank, debit: 45080 },
                    { account: ac.discounts, debit: 920 },
                    { account: arOf('دفتر وکالت سینا', 'Sina Law Office'), credit: 46000 },
                  ],
                  memo: { fa: 'مانده 46,000؛ تخفیف 46,000 × 2٪ = 920؛ وجه 45,080.', en: 'Balance 46,000; discount 46,000 × 2% = 920; cash 45,080.' },
                },
              ],
            },
            {
              type: 'formula',
              text: {
                fa: 'فروش خالص = 50,000 − 4,000 − 920 = 45,080',
                en: 'Net sales = 50,000 − 4,000 − 920 = 45,080',
              },
            },
          ],
          answer: {
            fa: 'وجه دریافتی و فروش خالص هر دو 45,080؛ تخفیف 920 و برگشت 4,000 جداگانه در حساب‌های کاهنده ثبت می‌شوند.',
            en: 'Cash received and net sales are both 45,080; the 920 discount and 4,000 return go to separate contra-revenue accounts.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'ذخیره با تحلیل سنی', en: 'The allowance by ageing' },
          difficulty: 'medium',
          problem: {
            fa: 'شرکت تجهیزات پزشکی آریا در پایان سال تحلیل سنی زیر را دارد. حساب ذخیره پیش از اصلاح 600 مانده **بدهکار** دارد. (الف) مانده لازم ذخیره و ثبت پایان سال را به دست آورید. (ب) خالص حساب‌های دریافتنی را حساب کنید. (ج) اگر آریا به‌جای تحلیل سنی، 1٪ فروش نسیه سال (820,000) را هزینه می‌کرد، هزینه و مانده ذخیره چقدر می‌شد؟',
            en: 'Aria Medical Supplies has the ageing below at year-end. Before adjustment the allowance has a 600 **debit** balance. (a) Find the required allowance and the year-end entry. (b) Compute net receivables. (c) If Aria instead expensed 1% of the year’s credit sales (820,000), what would the expense and the allowance balance be?',
          },
          given: {
            head: [
              { fa: 'دسته سنی', en: 'Age band' },
              { fa: 'مانده', en: 'Balance' },
              { fa: 'درصد برآوردی سوخت', en: 'Estimated loss rate' },
            ],
            numericCols: [1],
            rows: [
              [{ fa: 'سررسیدنشده', en: 'Not yet due' }, 85000, { fa: '2٪', en: '2%' }],
              [{ fa: '1 تا 30 روز', en: '1 to 30 days' }, 30000, { fa: '5٪', en: '5%' }],
              [{ fa: '31 تا 60 روز', en: '31 to 60 days' }, 12000, { fa: '15٪', en: '15%' }],
              [{ fa: '61 تا 90 روز', en: '61 to 90 days' }, 6000, { fa: '30٪', en: '30%' }],
              [{ fa: 'بیش از 90 روز', en: 'Over 90 days' }, 4000, { fa: '60٪', en: '60%' }],
              [total, 137000, blank],
            ],
          },
          hint: {
            fa: 'مانده بدهکار یعنی ذخیره فعلاً «منفی» است؛ برای رسیدن به مانده لازم، باید آن را هم جبران کنید.',
            en: 'A debit balance means the allowance is currently “negative”; reaching the required balance means making that up too.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'محاسبه ذخیره لازم', en: 'Required allowance' },
              head: [
                { fa: 'دسته سنی', en: 'Age band' },
                { fa: 'محاسبه', en: 'Working' },
                { fa: 'ذخیره لازم', en: 'Allowance needed' },
              ],
              numericCols: [2],
              rows: [
                [{ fa: 'سررسیدنشده', en: 'Not yet due' }, same('85,000 × 2%'), 1700],
                [{ fa: '1 تا 30 روز', en: '1 to 30 days' }, same('30,000 × 5%'), 1500],
                [{ fa: '31 تا 60 روز', en: '31 to 60 days' }, same('12,000 × 15%'), 1800],
                [{ fa: '61 تا 90 روز', en: '61 to 90 days' }, same('6,000 × 30%'), 1800],
                [{ fa: 'بیش از 90 روز', en: 'Over 90 days' }, same('4,000 × 60%'), 2400],
                [total, blank, 9200],
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'پایان سال', en: 'Year-end' },
                  lines: [
                    { account: ac.bdExp, debit: 9800 },
                    { account: ac.allowance, credit: 9800 },
                  ],
                  memo: { fa: '(الف) هزینه = 9,200 + 600 = 9,800؛ ذخیره از 600 بدهکار به 9,200 بستانکار می‌رسد.', en: '(a) Expense = 9,200 + 600 = 9,800; the allowance goes from a 600 debit to a 9,200 credit.' },
                },
              ],
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: '(ب) خالص دریافتنی‌ها', en: '(b) Net receivables' },
                  text: { fa: '137,000 − 9,200 = 127,800.', en: '137,000 − 9,200 = 127,800.' },
                },
                {
                  title: { fa: '(ج) روش درصد فروش', en: '(c) Percentage of sales' },
                  text: {
                    fa: 'هزینه = 1٪ × 820,000 = 8,200، بدون توجه به مانده فعلی. مانده ذخیره = 8,200 − 600 = 7,600 بستانکار؛ 1,600 کمتر از نیاز تحلیل سنی.',
                    en: 'Expense = 1% × 820,000 = 8,200, ignoring the existing balance. Allowance = 8,200 − 600 = 7,600 credit, which is 1,600 below what the ageing requires.',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: 'ذخیره لازم 9,200؛ هزینه 9,800؛ خالص دریافتنی‌ها 127,800. با درصد فروش: هزینه 8,200 و ذخیره 7,600.',
            en: 'Required allowance 9,200; expense 9,800; net receivables 127,800. With percentage of sales: expense 8,200 and allowance 7,600.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'حذف و بازیافت، با دو روش', en: 'Write-off and recovery, both methods' },
          difficulty: 'medium',
          problem: {
            fa: 'شرکت نرم‌افزاری دانا 120,000 حساب دریافتنی و 6,000 ذخیره (مانده بستانکار) دارد. روز 40 طلب 4,500 فروشگاه ستاره سوخت‌شده تشخیص داده و حذف می‌شود. روز 150 همان سال، ستاره 3,000 از بدهی‌اش را می‌پردازد و بقیه وصول‌نشدنی می‌ماند. (الف) ثبت‌ها را با روش ذخیره بنویسید. (ب) خالص دریافتنی‌ها را پیش و پس از حذف حساب کنید. (ج) همین رویدادها را با روش حذف مستقیم ثبت کنید.',
            en: 'Dana Software has 120,000 of accounts receivable and a 6,000 allowance (credit balance). On Day 40 Setareh Store’s 4,500 balance is judged uncollectible and written off. On Day 150 of the same year Setareh pays 3,000 of it; the rest stays uncollectible. (a) Record the events under the allowance method. (b) Compute net receivables before and after the write-off. (c) Record the same events under the direct write-off method.',
          },
          hint: {
            fa: 'در بازیافت، اول طلب را به اندازه مبلغ وصولی دوباره برقرار کنید و بعد وصول را ثبت کنید.',
            en: 'For the recovery, first reinstate the receivable for the amount collected, then record the collection.',
          },
          solution: [
            {
              type: 'journal',
              title: { fa: '(الف) روش ذخیره', en: '(a) Allowance method' },
              entries: [
                {
                  date: day(40),
                  lines: [
                    { account: ac.allowance, debit: 4500 },
                    { account: arOf('فروشگاه ستاره', 'Setareh Store'), credit: 4500 },
                  ],
                  memo: { fa: 'حذف طلب.', en: 'Write-off.' },
                },
                {
                  date: day(150),
                  lines: [
                    { account: arOf('فروشگاه ستاره', 'Setareh Store'), debit: 3000 },
                    { account: ac.allowance, credit: 3000 },
                  ],
                  memo: { fa: 'برقراری دوباره 3,000.', en: 'Reinstate 3,000.' },
                },
                {
                  date: day(150),
                  lines: [
                    { account: ac.bank, debit: 3000 },
                    { account: arOf('فروشگاه ستاره', 'Setareh Store'), credit: 3000 },
                  ],
                  memo: { fa: 'وصول.', en: 'Collection.' },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: '(ب) خالص دریافتنی‌ها', en: '(b) Net receivables' },
              head: [
                { fa: 'شرح', en: 'Item' },
                { fa: 'پیش از حذف', en: 'Before write-off' },
                { fa: 'پس از حذف', en: 'After write-off' },
              ],
              numericCols: [1, 2],
              rows: [
                [{ fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, 120000, 115500],
                [{ fa: 'کسر می‌شود: ذخیره', en: 'Less: allowance' }, 6000, 1500],
                [{ fa: 'خالص', en: 'Net' }, 114000, 114000],
              ],
            },
            {
              type: 'journal',
              title: { fa: '(ج) روش حذف مستقیم', en: '(c) Direct write-off method' },
              entries: [
                {
                  date: day(40),
                  lines: [
                    { account: ac.bdExp, debit: 4500 },
                    { account: arOf('فروشگاه ستاره', 'Setareh Store'), credit: 4500 },
                  ],
                  memo: { fa: 'کل زیان همین حالا هزینه می‌شود.', en: 'The whole loss is expensed now.' },
                },
                {
                  date: day(150),
                  lines: [
                    { account: arOf('فروشگاه ستاره', 'Setareh Store'), debit: 3000 },
                    { account: ac.bdExp, credit: 3000 },
                  ],
                  memo: {
                    fa: 'برقراری دوباره در همان سال، با کاهش هزینه؛ اگر سال بعد بود، درآمد متفرقه (بازیافت مطالبات) بستانکار می‌شد.',
                    en: 'Reinstated in the same year by reducing the expense; in a later year, miscellaneous income (bad debts recovered) would be credited.',
                  },
                },
                {
                  date: day(150),
                  lines: [
                    { account: ac.bank, debit: 3000 },
                    { account: arOf('فروشگاه ستاره', 'Setareh Store'), credit: 3000 },
                  ],
                  memo: { fa: 'وصول.', en: 'Collection.' },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'در روش ذخیره، حذف و بازیافت هیچ‌کدام هزینه نمی‌سازند و فقط ذخیره را جابه‌جا می‌کنند. در روش حذف مستقیم، هزینه این سال 1,500 است (4,500 − 3,000)، اما فروشی که این طلب از آن آمده شاید سال قبل ثبت شده باشد؛ همان مشکل تطابق.',
                en: 'Under the allowance method neither the write-off nor the recovery creates an expense; they only move the allowance. Under direct write-off this year bears 1,500 of expense (4,500 − 3,000), though the sale behind it may have been recorded last year: the matching problem.',
              },
            },
          ],
          answer: {
            fa: 'روش ذخیره: حذف (بدهکار ذخیره 4,500)، برقراری و وصول 3,000؛ خالص دریافتنی‌ها پیش و پس از حذف 114,000. روش حذف مستقیم: هزینه خالص سال 1,500.',
            en: 'Allowance method: write-off (Dr Allowance 4,500), reinstate and collect 3,000; net receivables 114,000 before and after. Direct write-off: net expense for the year 1,500.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'چرخه کامل سه چک', en: 'The full life of three cheques' },
          difficulty: 'hard',
          problem: {
            fa: 'شرکت تجهیزات پزشکی آریا روز 1 تجهیزاتی به مبلغ 45,000 نسیه به کلینیک سپید فروخت. روز 5 سپید سه چک 15,000 داد: چک 101 با سررسید روز 30، چک 102 با سررسید روز 60 و چک 103 با سررسید روز 90. روز 20 آریا چک 103 را بابت بدهی 15,000 به تأمین‌کالای رهاورد واگذار کرد. روز 28 چک 101 به بانک سپرده و روز 30 وصول شد. روز 58 چک 102 به بانک سپرده شد و روز 61 برگشت خورد. روز 70 سپید مبلغ چک برگشتی را با انتقال پایا پرداخت و چک را پس گرفت. همه ثبت‌ها را بنویسید و مانده نهایی حساب‌های مربوط به سپید را نشان دهید. چه ریسکی تا روز 90 باقی می‌ماند؟',
            en: 'On Day 1 Aria Medical Supplies sold 45,000 of equipment on credit to Sepid Clinic. On Day 5 Sepid handed over three cheques of 15,000: no. 101 due Day 30, no. 102 due Day 60 and no. 103 due Day 90. On Day 20 Aria passed cheque 103 to its supplier Rahavard Supplies to settle 15,000 of debt. Cheque 101 was deposited on Day 28 and collected on Day 30. Cheque 102 was deposited on Day 58 and bounced on Day 61. On Day 70 Sepid paid the returned cheque by PAYA transfer and took it back. Write all the entries and show the final balances of Sepid’s accounts. What risk remains until Day 90?',
          },
          hint: {
            fa: 'برای هر رویداد بپرسید: چک الان کجاست؟ نزد آریا (اسناد دریافتنی)، در بانک (در جریان وصول)، برگشت‌خورده، یا نزد تأمین‌کننده؟',
            en: 'For each event ask: where is the cheque now? With Aria (notes receivable), at the bank (in collection), returned, or with the supplier?',
          },
          solution: [
            {
              type: 'journal',
              entries: [
                {
                  date: day(1),
                  lines: [
                    { account: arOf('کلینیک سپید', 'Sepid Clinic'), debit: 45000 },
                    { account: ac.sales, credit: 45000 },
                  ],
                  memo: { fa: 'فروش نسیه.', en: 'Credit sale.' },
                },
                {
                  date: day(5),
                  lines: [
                    { account: { fa: 'اسناد دریافتنی: سپید', en: 'Notes receivable: Sepid' }, debit: 45000 },
                    { account: arOf('کلینیک سپید', 'Sepid Clinic'), credit: 45000 },
                  ],
                  memo: { fa: 'دریافت چک‌های 101، 102 و 103.', en: 'Cheques 101, 102 and 103 received.' },
                },
                {
                  date: day(20),
                  lines: [
                    { account: { fa: 'حساب‌های پرداختنی: رهاورد', en: 'Accounts payable: Rahavard' }, debit: 15000 },
                    { account: { fa: 'اسناد دریافتنی: سپید', en: 'Notes receivable: Sepid' }, credit: 15000 },
                  ],
                  memo: { fa: 'واگذاری چک 103 به تأمین‌کننده (ثبت انتقال در سامانه صیاد).', en: 'Cheque 103 passed to the supplier (transfer registered in Sayad).' },
                },
                {
                  date: day(28),
                  lines: [
                    { account: ac.inColl, debit: 15000 },
                    { account: { fa: 'اسناد دریافتنی: سپید', en: 'Notes receivable: Sepid' }, credit: 15000 },
                  ],
                  memo: { fa: 'چک 101 برای وصول.', en: 'Cheque 101 deposited for collection.' },
                },
                {
                  date: day(30),
                  lines: [
                    { account: ac.bank, debit: 15000 },
                    { account: ac.inColl, credit: 15000 },
                  ],
                  memo: { fa: 'وصول چک 101.', en: 'Cheque 101 collected.' },
                },
                {
                  date: day(58),
                  lines: [
                    { account: ac.inColl, debit: 15000 },
                    { account: { fa: 'اسناد دریافتنی: سپید', en: 'Notes receivable: Sepid' }, credit: 15000 },
                  ],
                  memo: { fa: 'چک 102 برای وصول.', en: 'Cheque 102 deposited for collection.' },
                },
                {
                  date: day(61),
                  lines: [
                    { account: { fa: 'چک‌های دریافتنی برگشتی: سپید', en: 'Returned cheques receivable: Sepid' }, debit: 15000 },
                    { account: ac.inColl, credit: 15000 },
                  ],
                  memo: { fa: 'برگشت چک 102.', en: 'Cheque 102 returned unpaid.' },
                },
                {
                  date: day(70),
                  lines: [
                    { account: ac.bank, debit: 15000 },
                    { account: { fa: 'چک‌های دریافتنی برگشتی: سپید', en: 'Returned cheques receivable: Sepid' }, credit: 15000 },
                  ],
                  memo: { fa: 'تسویه چک برگشتی با پایا؛ چک به سپید پس داده شد.', en: 'Returned cheque settled by PAYA; the cheque is handed back to Sepid.' },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'مانده‌های نهایی (روز 70)', en: 'Final balances (Day 70)' },
              head: [
                { fa: 'حساب', en: 'Account' },
                { fa: 'بدهکار', en: 'Debits' },
                { fa: 'بستانکار', en: 'Credits' },
                { fa: 'مانده', en: 'Balance' },
              ],
              numericCols: [1, 2, 3],
              rows: [
                [{ fa: 'حساب‌های دریافتنی: سپید', en: 'Accounts receivable: Sepid' }, 45000, 45000, 0],
                [{ fa: 'اسناد دریافتنی: سپید', en: 'Notes receivable: Sepid' }, 45000, 45000, 0],
                [{ fa: 'اسناد در جریان وصول', en: 'Cheques in collection' }, 30000, 30000, 0],
                [{ fa: 'چک‌های دریافتنی برگشتی: سپید', en: 'Returned cheques receivable: Sepid' }, 15000, 15000, 0],
                [{ fa: 'موجودی نقد: بانک (افزایش)', en: 'Cash: bank (increase)' }, 30000, blank, 30000],
                [{ fa: 'حساب‌های پرداختنی: رهاورد (کاهش)', en: 'Accounts payable: Rahavard (decrease)' }, 15000, blank, 15000],
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              title: { fa: 'ریسک باقی‌مانده', en: 'The remaining risk' },
              text: {
                fa: 'چک 103 اکنون نزد رهاورد است و تا روز 90 وصول نشده است. آریا به‌عنوان ظهرنویس مسئولیت تضامنی دارد: اگر این چک برگشت بخورد، رهاورد دوباره طلبکار آریا می‌شود و آریا باید از سپید پیگیری کند. پس آریا این چک را در فهرست «چک‌های واگذارشده سررسیدنشده» نگه می‌دارد و اگر مبلغ با اهمیت باشد، در یادداشت‌های صورت‌های مالی افشا می‌کند.',
                en: 'Cheque 103 is now with Rahavard and unpaid until Day 90. As endorser, Aria is jointly liable: if it bounces, Rahavard becomes Aria’s creditor again and Aria must pursue Sepid. So Aria keeps the cheque on its list of “cheques passed on, not yet due” and, if the amount is material, discloses it in the notes to the financial statements.',
              },
            },
          ],
          answer: {
            fa: 'همه حساب‌های سپید صفر می‌شوند؛ بانک 30,000 افزایش و بدهی به رهاورد 15,000 کاهش می‌یابد. تا روز 90، ریسک برگشت چک 103 به‌عنوان مسئولیت ظهرنویس باقی است.',
            en: 'All of Sepid’s accounts end at zero; Bank rises by 30,000 and the debt to Rahavard falls by 15,000. Until Day 90, the risk that cheque 103 bounces remains as an endorser’s liability.',
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
              fa: 'فروش نسیه حساب‌های دریافتنی را بدهکار می‌کند؛ برگشت از فروش و تخفیف نقدی در حساب‌های کاهنده درآمد ثبت می‌شوند و فروش خالص را می‌سازند.',
              en: 'Credit sales debit accounts receivable; returns and cash discounts go to contra-revenue accounts and produce net sales.',
            },
            {
              fa: 'هر مشتری یک حساب تفصیلی دارد که پایه سقف اعتبار، صورت‌حساب، تأییدیه و تحلیل سنی است.',
              en: 'Each customer has a detail account that underpins credit limits, statements, confirmations and the ageing.',
            },
            {
              fa: 'روش ذخیره، زیان مطالبات را در دوره فروش برآورد می‌کند و دریافتنی‌ها را به مبلغ قابل وصول نشان می‌دهد؛ روش حذف مستقیم فقط برای مبالغ ناچیز پذیرفتنی است.',
              en: 'The allowance method estimates bad debts in the period of sale and shows receivables at their collectable amount; direct write-off is acceptable only for immaterial amounts.',
            },
            {
              fa: 'روش درصد فروش، هزینه را مستقیم حساب می‌کند؛ تحلیل سنی مانده لازم ذخیره را می‌دهد و هزینه، فاصله تا آن مانده است.',
              en: 'Percentage of sales computes the expense directly; ageing gives the required allowance, and the expense is whatever closes the gap to it.',
            },
            {
              fa: 'حذف طلب، ذخیره را بدهکار می‌کند و اثری بر سود و خالص دریافتنی‌ها ندارد؛ بازیافت ابتدا طلب را برقرار و سپس وصول را ثبت می‌کند.',
              en: 'A write-off debits the allowance and leaves profit and net receivables unchanged; a recovery first reinstates the receivable, then records the collection.',
            },
            {
              fa: 'چک دریافتی از اسناد دریافتنی به اسناد در جریان وصول و سپس به بانک می‌رود، یا به چک‌های برگشتی؛ چک صادره مدت‌دار تا روز پرداخت در اسناد پرداختنی می‌ماند.',
              en: 'A cheque received moves from notes receivable to cheques in collection and then to the bank, or to returned cheques; a post-dated cheque issued stays in notes payable until it is paid.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباهات رایج', en: 'Common mistakes' },
          text: {
            fa: 'نقد حساب کردن چک مدت‌دار؛ بستانکار کردن بانک در روز صدور چک مدت‌دار؛ ثبت هزینه هنگام حذف طلب در روش ذخیره (هزینه دوباره ثبت می‌شود)؛ نادیده گرفتن مانده فعلی ذخیره در تحلیل سنی یا لحاظ کردن آن در روش درصد فروش؛ بستانکار کردن مستقیم حساب‌های دریافتنی هنگام برآورد ذخیره؛ فراموش کردن چک‌های برگشتی و واگذارشده در پیگیری و برآورد ذخیره؛ و سپردن تأیید اعتبار و حذف طلب به واحد فروش.',
            en: 'Treating post-dated cheques as cash; crediting Bank on the day a post-dated cheque is issued; debiting an expense on write-off under the allowance method (double-counting the expense); ignoring the existing allowance balance in the ageing method, or using it in percentage of sales; crediting accounts receivable directly when estimating the allowance; forgetting returned and endorsed cheques in follow-up and in the estimate; and letting the sales team approve credit or write-offs.',
          },
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' },
              def: { fa: 'مبالغی که مشتریان بابت فروش نسیه به شرکت بدهکارند.', en: 'Amounts customers owe the company for credit sales.' },
            },
            {
              term: { fa: 'برگشت از فروش و تخفیفات', en: 'Sales returns and allowances' },
              def: {
                fa: 'حساب کاهنده درآمد برای کالای برگشتی یا تخفیف قیمت بابت کالای معیوب.',
                en: 'A contra-revenue account for goods returned or price reductions for faulty goods.',
              },
            },
            {
              term: { fa: 'تخفیف نقدی فروش', en: 'Sales discount' },
              def: { fa: 'تخفیفی که برای پرداخت زودتر از موعد به مشتری داده می‌شود.', en: 'A reduction given to a customer for paying early.' },
            },
            {
              term: { fa: 'روش حذف مستقیم', en: 'Direct write-off method' },
              def: {
                fa: 'ثبت هزینه مطالبات فقط هنگامی که طلب قطعاً سوخت شود؛ با اصل تطابق سازگار نیست.',
                en: 'Recording bad debts only when a debt is finally lost; inconsistent with matching.',
              },
            },
            {
              term: { fa: 'روش ذخیره', en: 'Allowance method' },
              def: {
                fa: 'برآورد زیان مطالبات در پایان هر دوره و ثبت آن در همان دوره فروش.',
                en: 'Estimating bad debts at the end of each period and recording them in the period of sale.',
              },
            },
            {
              term: { fa: 'ذخیره مطالبات مشکوک‌الوصول', en: 'Allowance for doubtful accounts' },
              def: {
                fa: 'حساب کاهنده دارایی که بخش برآوردی وصول‌نشدنی دریافتنی‌ها را نشان می‌دهد.',
                en: 'A contra-asset account holding the estimated uncollectable part of receivables.',
              },
            },
            {
              term: { fa: 'هزینه مطالبات مشکوک‌الوصول', en: 'Doubtful accounts expense' },
              def: { fa: 'هزینه دوره بابت زیان برآوردی از طلب‌هایی که وصول نمی‌شوند.', en: 'The period’s expense for estimated losses on receivables.' },
            },
            {
              term: { fa: 'تحلیل سنی مطالبات', en: 'Ageing of receivables' },
              def: {
                fa: 'دسته‌بندی طلب مشتریان بر اساس مدت گذشته از سررسید، برای برآورد ذخیره و پیگیری وصول.',
                en: 'Sorting customer balances by time past due, to estimate the allowance and drive collection.',
              },
            },
            {
              term: { fa: 'خالص حساب‌های دریافتنی', en: 'Net receivables' },
              def: { fa: 'حساب‌های دریافتنی منهای ذخیره؛ مبلغی که انتظار وصولش می‌رود.', en: 'Receivables less the allowance: the amount expected to be collected.' },
            },
            {
              term: { fa: 'اسناد دریافتنی', en: 'Notes (cheques) receivable' },
              def: {
                fa: 'چک‌ها و اسنادی که از مشتریان دریافت شده و هنوز وصول نشده‌اند.',
                en: 'Cheques and notes received from customers and not yet collected.',
              },
            },
            {
              term: { fa: 'اسناد در جریان وصول', en: 'Cheques in collection' },
              def: {
                fa: 'چک‌هایی که برای وصول به بانک سپرده شده‌اند و وجهشان هنوز به حساب نیامده است.',
                en: 'Cheques handed to the bank for collection whose funds have not yet arrived.',
              },
            },
            {
              term: { fa: 'چک برگشتی', en: 'Returned (dishonoured) cheque' },
              def: {
                fa: 'چکی که بانک در سررسید پرداخت نکرده و گواهی عدم پرداخت برایش صادر شده است.',
                en: 'A cheque the bank refused to pay when due, with a certificate of non-payment.',
              },
            },
            {
              term: { fa: 'اسناد پرداختنی', en: 'Notes (cheques) payable' },
              def: {
                fa: 'چک‌های مدت‌دار و اسنادی که شرکت صادر کرده و هنوز پرداخت نشده‌اند.',
                en: 'Post-dated cheques and notes the company has issued that are not yet paid.',
              },
            },
            {
              term: { fa: 'حساب‌های انتظامی', en: 'Memorandum accounts' },
              def: {
                fa: 'حساب‌های یادداشتی خارج از ترازنامه برای پیگیری تضمین‌های دریافتی و پرداختی، مثل سفته تضمینی.',
                en: 'Off-balance-sheet tracking accounts for guarantees received or given, such as guarantee notes.',
              },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: {
        fa: 'فروش نسیه 30,000 با شرط 2/10، خالص 30 انجام شده است. مشتری 5,000 کالا برمی‌گرداند و مانده را روز هشتم می‌پردازد. چقدر وجه دریافت می‌شود؟',
        en: 'A 30,000 credit sale is made on 2/10, net 30. The customer returns 5,000 of goods and pays the balance on day eight. How much cash is received?',
      },
      options: [
        { fa: '29,400', en: '29,400' },
        { fa: '25,000', en: '25,000' },
        { fa: '24,500', en: '24,500' },
        { fa: '24,400', en: '24,400' },
      ],
      answer: 2,
      explain: {
        fa: 'مانده پس از برگشت 30,000 − 5,000 = 25,000 است و چون پرداخت در مهلت 10 روزه بوده، 2٪ تخفیف دارد: 25,000 × 98٪ = 24,500. رقم 29,400 تخفیف را روی کل فاکتور حساب کرده و برگشت را نادیده گرفته است.',
        en: 'The balance after the return is 30,000 − 5,000 = 25,000, and payment within 10 days earns 2%: 25,000 × 98% = 24,500. 29,400 applies the discount to the whole invoice and ignores the return.',
      },
    },
    {
      q: { fa: 'در روش ذخیره، هزینه مطالبات مشکوک‌الوصول چه زمانی ثبت می‌شود؟', en: 'Under the allowance method, when is doubtful accounts expense recorded?' },
      options: [
        { fa: 'در پایان دوره‌ای که فروش انجام شده، بر اساس برآورد', en: 'At the end of the period of the sale, based on an estimate' },
        { fa: 'وقتی مشتری رسماً ورشکسته اعلام شود', en: 'When the customer is formally declared bankrupt' },
        { fa: 'هنگام حذف طلب هر مشتری', en: 'When each customer’s balance is written off' },
        { fa: 'فقط وقتی اداره مالیات آن را بپذیرد', en: 'Only once the tax office accepts it' },
      ],
      answer: 0,
      explain: {
        fa: 'روش ذخیره برای رعایت اصل تطابق، زیان را در همان دوره فروش برآورد و ثبت می‌کند. حذف بعدی فقط ذخیره را مصرف می‌کند و هزینه تازه نمی‌سازد. پذیرش مالیاتی موضوع جداگانه‌ای است و زمان ثبت حسابداری را تعیین نمی‌کند.',
        en: 'To honour matching, the allowance method estimates and records the loss in the period of the sale. A later write-off only uses up the allowance and creates no new expense. Tax deductibility is a separate matter and does not set the accounting date.',
      },
    },
    {
      q: {
        fa: 'فروش نسیه سال 500,000 است و شرکت 1.5٪ آن را سوخت‌شدنی برآورد می‌کند. ذخیره پیش از اصلاح 2,000 مانده بستانکار دارد. با روش درصد فروش، هزینه سال چقدر است؟',
        en: 'Credit sales for the year are 500,000, and the company expects 1.5% to go bad. The allowance has a 2,000 credit balance before adjustment. Under percentage of sales, what is the year’s expense?',
      },
      options: [
        { fa: '5,500', en: '5,500' },
        { fa: '9,500', en: '9,500' },
        { fa: '2,000', en: '2,000' },
        { fa: '7,500', en: '7,500' },
      ],
      answer: 3,
      explain: {
        fa: 'در روش درصد فروش، هزینه مستقیماً 1.5٪ × 500,000 = 7,500 است و مانده فعلی در آن دخالتی ندارد؛ ذخیره پس از ثبت به 9,500 می‌رسد. کم کردن 2,000 (5,500) کار روش تحلیل سنی است، نه درصد فروش.',
        en: 'With percentage of sales the expense is simply 1.5% × 500,000 = 7,500, regardless of the existing balance; the allowance then reaches 9,500. Subtracting the 2,000 (5,500) belongs to the ageing method, not percentage of sales.',
      },
    },
    {
      q: {
        fa: 'تحلیل سنی، ذخیره لازم را 12,400 نشان می‌دهد. حساب ذخیره پیش از اصلاح 800 مانده **بدهکار** دارد. هزینه دوره چقدر است؟',
        en: 'The ageing shows a required allowance of 12,400. Before adjustment the allowance has an 800 **debit** balance. What is the expense?',
      },
      options: [
        { fa: '11,600', en: '11,600' },
        { fa: '13,200', en: '13,200' },
        { fa: '12,400', en: '12,400' },
        { fa: '800', en: '800' },
      ],
      answer: 1,
      explain: {
        fa: 'برای رسیدن از 800 بدهکار به 12,400 بستانکار، باید 12,400 + 800 = 13,200 بستانکار کرد. رقم 11,600 مانده را بستانکار فرض کرده است و 12,400 مانده فعلی را نادیده گرفته است.',
        en: 'Going from an 800 debit to a 12,400 credit takes a 12,400 + 800 = 13,200 credit. 11,600 treats the balance as a credit, and 12,400 ignores the existing balance.',
      },
    },
    {
      q: {
        fa: 'حساب‌های دریافتنی 180,000 و ذخیره 9,050 است. طلب 5,000 یک مشتری با روش ذخیره حذف می‌شود. خالص دریافتنی‌ها پس از حذف چقدر است؟',
        en: 'Receivables are 180,000 and the allowance is 9,050. A customer’s 5,000 balance is written off under the allowance method. What are net receivables afterwards?',
      },
      options: [
        { fa: '170,950', en: '170,950' },
        { fa: '165,950', en: '165,950' },
        { fa: '175,000', en: '175,000' },
        { fa: '175,950', en: '175,950' },
      ],
      answer: 0,
      explain: {
        fa: 'هر دو طرف 5,000 کم می‌شوند: 175,000 − 4,050 = 170,950؛ همان خالص پیش از حذف (180,000 − 9,050). رقم 165,950 حذف را دو بار کم کرده و 175,000 ذخیره را فراموش کرده است.',
        en: 'Both sides fall by 5,000: 175,000 − 4,050 = 170,950, the same as before (180,000 − 9,050). 165,950 deducts the write-off twice and 175,000 forgets the allowance.',
      },
    },
    {
      q: { fa: 'ثبت حذف طلب 5,000 با روش ذخیره کدام است؟', en: 'Which entry writes off a 5,000 balance under the allowance method?' },
      options: [
        { fa: 'بدهکار هزینه مطالبات مشکوک‌الوصول / بستانکار حساب‌های دریافتنی', en: 'Dr Doubtful accounts expense / Cr Accounts receivable' },
        { fa: 'بدهکار هزینه مطالبات مشکوک‌الوصول / بستانکار ذخیره مطالبات', en: 'Dr Doubtful accounts expense / Cr Allowance' },
        {
          fa: 'بدهکار ذخیره مطالبات مشکوک‌الوصول / بستانکار حساب‌های دریافتنی (تفصیلی همان مشتری)',
          en: 'Dr Allowance for doubtful accounts / Cr Accounts receivable (that customer’s detail)',
        },
        { fa: 'بدهکار حساب‌های دریافتنی / بستانکار ذخیره مطالبات', en: 'Dr Accounts receivable / Cr Allowance' },
      ],
      answer: 2,
      explain: {
        fa: 'هزینه پیش‌تر هنگام برآورد ثبت شده است؛ حذف فقط ذخیره را مصرف و طلب همان مشتری را صفر می‌کند. گزینه اول ثبت روش حذف مستقیم است، دومی ثبت برآورد پایان دوره و چهارمی ثبت برقراری دوباره در بازیافت.',
        en: 'The expense was recorded when the estimate was made; the write-off just uses the allowance and clears that customer’s balance. The first option is the direct write-off entry, the second is the period-end estimate, and the fourth is the reinstatement in a recovery.',
      },
    },
    {
      q: {
        fa: 'مشتری بابت طلب 20,000 چکی با سررسید دو ماه بعد می‌دهد. ثبت روز دریافت چک کدام است؟',
        en: 'A customer settles a 20,000 balance with a cheque dated two months ahead. What is the entry on the day it is received?',
      },
      options: [
        { fa: 'بدهکار موجودی نقد / بستانکار حساب‌های دریافتنی', en: 'Dr Cash / Cr Accounts receivable' },
        { fa: 'بدهکار اسناد در جریان وصول / بستانکار فروش', en: 'Dr Cheques in collection / Cr Sales' },
        { fa: 'تا سررسید هیچ ثبتی لازم نیست', en: 'No entry until the due date' },
        { fa: 'بدهکار اسناد دریافتنی / بستانکار حساب‌های دریافتنی', en: 'Dr Notes receivable / Cr Accounts receivable' },
      ],
      answer: 3,
      explain: {
        fa: 'چک مدت‌دار پول نیست، اما شکل طلب را عوض می‌کند: از حساب دریافتنی به اسناد دریافتنی. ثبت نکردن آن چک را از کنترل حسابداری بیرون می‌گذارد، و بدهکار کردن موجودی نقد، نقد را بیش از واقع نشان می‌دهد. فروش هم پیش‌تر ثبت شده است.',
        en: 'A post-dated cheque is not cash, but it changes the form of the claim, from accounts to notes receivable. Not recording it leaves the cheque outside accounting control, and debiting Cash overstates cash. The sale was recorded earlier.',
      },
    },
    {
      q: { fa: 'چکی که برای وصول به بانک سپرده شده بود برگشت می‌خورد. ثبت درست کدام است؟', en: 'A cheque deposited for collection is returned unpaid. Which entry is right?' },
      options: [
        { fa: 'بدهکار هزینه مطالبات مشکوک‌الوصول / بستانکار اسناد دریافتنی', en: 'Dr Doubtful accounts expense / Cr Notes receivable' },
        {
          fa: 'بدهکار چک‌های دریافتنی برگشتی (تفصیلی مشتری) / بستانکار اسناد در جریان وصول',
          en: 'Dr Returned cheques receivable (customer’s detail) / Cr Cheques in collection',
        },
        { fa: 'بدهکار بانک / بستانکار اسناد در جریان وصول', en: 'Dr Bank / Cr Cheques in collection' },
        { fa: 'ثبتی لازم نیست؛ فقط چک به مشتری پس داده می‌شود', en: 'No entry; just give the cheque back to the customer' },
      ],
      answer: 1,
      explain: {
        fa: 'چک دیگر در بانک نیست و وجهی هم نیامده؛ طلب از مشتری همچنان باقی است، این بار به شکل چک برگشتی. هزینه کردن آن زود است چون پیگیری تازه شروع شده، و بدهکار کردن بانک یعنی وصولی که رخ نداده است.',
        en: 'The cheque is no longer at the bank and no money arrived; the claim on the customer remains, now as a returned cheque. Expensing it is premature because collection efforts have just begun, and debiting Bank records a collection that never happened.',
      },
    },
    {
      q: {
        fa: 'شرکت به تأمین‌کننده چکی با سررسید 45 روز بعد بابت بدهی 30,000 می‌دهد. ثبت روز صدور چک کدام است؟',
        en: 'The company gives a supplier a cheque due in 45 days for a 30,000 debt. What is the entry on the day of issue?',
      },
      options: [
        { fa: 'بدهکار حساب‌های پرداختنی / بستانکار اسناد پرداختنی', en: 'Dr Accounts payable / Cr Notes payable' },
        { fa: 'بدهکار حساب‌های پرداختنی / بستانکار بانک', en: 'Dr Accounts payable / Cr Bank' },
        { fa: 'بدهکار اسناد پرداختنی / بستانکار بانک', en: 'Dr Notes payable / Cr Bank' },
        { fa: 'بدهکار اسناد دریافتنی / بستانکار حساب‌های پرداختنی', en: 'Dr Notes receivable / Cr Accounts payable' },
      ],
      answer: 0,
      explain: {
        fa: 'تا سررسید پولی از بانک خارج نمی‌شود؛ فقط شکل بدهی از حساب پرداختنی به اسناد پرداختنی تغییر می‌کند. بستانکار کردن بانک در این روز مانده بانک را کمتر از واقع نشان می‌دهد. ثبت سوم مربوط به روز پرداخت چک در سررسید است.',
        en: 'No money leaves the bank until the due date; only the form of the debt changes, from accounts payable to notes payable. Crediting Bank now understates the bank balance. The third entry belongs to the day the cheque is paid.',
      },
    },
    {
      q: {
        fa: 'شرکت سفته‌ای به مبلغ 50,000 به‌عنوان تضمین حسن انجام کار از پیمانکار می‌گیرد. این سفته در دفاتر چگونه نگه داشته می‌شود؟',
        en: 'The company takes a 50,000 promissory note from a contractor as a performance guarantee. How is it kept in the books?',
      },
      options: [
        { fa: 'بدهکار اسناد دریافتنی / بستانکار درآمد', en: 'Dr Notes receivable / Cr Revenue' },
        { fa: 'بدهکار موجودی نقد / بستانکار پیش‌دریافت', en: 'Dr Cash / Cr Unearned revenue' },
        { fa: 'در حساب‌های انتظامی (یادداشتی) خارج از ترازنامه', en: 'In memorandum (off-balance-sheet) accounts' },
        { fa: 'هیچ سابقه‌ای لازم نیست', en: 'No record is needed' },
      ],
      answer: 2,
      explain: {
        fa: 'سفته تضمینی طلب تازه‌ای ایجاد نمی‌کند، پس دارایی یا درآمد نیست؛ اما باید سابقه‌اش بماند تا در پایان قرارداد پس داده شود یا در صورت تخلف به کار رود. جای آن حساب‌های انتظامی است.',
        en: 'A guarantee note creates no new claim, so it is neither an asset nor revenue; but it must be tracked so it can be returned at the end of the contract or used if the contractor defaults. It belongs in memorandum accounts.',
      },
    },
  ],
}
