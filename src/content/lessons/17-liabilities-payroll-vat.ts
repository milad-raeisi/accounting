import type { Lesson } from '../types'

/* Account titles used in this lesson. */
const ac = {
  cash: { fa: 'موجودی نقد', en: 'Cash' },
  ar: { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' },
  inventory: { fa: 'موجودی کالا', en: 'Inventory' },
  officeEq: { fa: 'اثاثه و تجهیزات اداری', en: 'Office equipment' },
  ap: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
  np: { fa: 'اسناد پرداختنی', en: 'Notes payable' },
  accrued: { fa: 'هزینه‌های پرداختنی', en: 'Accrued expenses' },
  utilities: { fa: 'هزینه آب و برق', en: 'Utilities expense' },
  salaries: { fa: 'هزینه حقوق و دستمزد', en: 'Salaries and wages expense' },
  employerIns: { fa: 'هزینه بیمه سهم کارفرما', en: 'Employer’s social security expense' },
  ssPayable: { fa: 'حق بیمه پرداختنی', en: 'Social security payable' },
  taxPayable: { fa: 'مالیات حقوق پرداختنی', en: 'Payroll tax withheld payable' },
  salPayable: { fa: 'حقوق پرداختنی', en: 'Salaries payable' },
  sales: { fa: 'فروش', en: 'Sales' },
  inputVat: { fa: 'مالیات بر ارزش افزوده خرید', en: 'Input VAT' },
  outputVat: { fa: 'مالیات بر ارزش افزوده فروش', en: 'Output VAT' },
  vatPayable: { fa: 'مالیات بر ارزش افزوده پرداختنی', en: 'VAT payable' },
  vatReceivable: { fa: 'مالیات بر ارزش افزوده دریافتنی', en: 'VAT receivable' },
  advertising: { fa: 'هزینه تبلیغات', en: 'Advertising expense' },
  loan: { fa: 'وام بانکی پرداختنی', en: 'Bank loan payable' },
  currentLoan: { fa: 'حصه جاری وام بلندمدت', en: 'Current portion of long-term loan' },
  interestExp: { fa: 'هزینه بهره', en: 'Interest expense' },
  interestPayable: { fa: 'بهره پرداختنی', en: 'Interest payable' },
  warrantyExp: { fa: 'هزینه گارانتی', en: 'Warranty expense' },
  warrantyProv: { fa: 'ذخیره گارانتی', en: 'Warranty provision' },
}

const year = (n: number) => ({ fa: `سال ${n}`, en: `Year ${n}` })
const blank = { fa: '', en: '' }
const total = { fa: 'جمع', en: 'Total' }
const cur = { fa: 'جاری', en: 'Current' }

export const lesson: Lesson = {
  slug: 'liabilities-payroll-vat',
  number: 16,
  level: 'advanced',
  minutes: 35,
  icon: 'Percent',
  tone: 'liability',
  title: { fa: 'بدهی‌ها، حقوق و دستمزد و مالیات بر ارزش افزوده', en: 'Liabilities, Payroll and VAT' },
  summary: {
    fa: 'بدهی‌ها را بشناسید و طبقه‌بندی کنید؛ حقوق و دستمزد را با کسور بیمه و مالیات ثبت کنید؛ مالیات بر ارزش افزوده خرید و فروش را تهاتر کنید؛ جدول بازپرداخت وام و حصه جاری آن را بسازید و ذخیره گارانتی را از بدهی احتمالی تشخیص دهید.',
    en: 'Recognise and classify liabilities; record payroll with its insurance and tax deductions; offset input and output VAT; build a loan schedule with its current portion; and tell a warranty provision from a contingent liability.',
  },
  objectives: [
    {
      fa: 'بدهی‌ها را تعریف و به جاری و غیرجاری طبقه‌بندی کنید',
      en: 'Define liabilities and classify them as current or non-current',
    },
    {
      fa: 'حقوق ناخالص، کسورات، خالص پرداختی و سهم بیمه کارفرما را محاسبه و ثبت کنید',
      en: 'Compute and record gross pay, deductions, net pay and the employer’s insurance share',
    },
    {
      fa: 'مالیات بر ارزش افزوده خرید و فروش را ثبت و در پایان دوره تهاتر و پرداخت کنید',
      en: 'Record input and output VAT, then offset and settle them at period-end',
    },
    {
      fa: 'جدول بازپرداخت وام، بهره تحقق‌یافته و حصه جاری وام بلندمدت را تهیه کنید',
      en: 'Prepare a loan schedule, accrued interest and the current portion of long-term debt',
    },
    {
      fa: 'ذخیره را از بدهی احتمالی تشخیص دهید و ذخیره گارانتی را ثبت کنید',
      en: 'Distinguish a provision from a contingent liability and record a warranty provision',
    },
  ],
  sections: [
    /* ───────────────────────────── 1 ───────────────────────────── */
    {
      id: 'what-is-a-liability',
      title: { fa: 'بدهی چیست و چگونه طبقه‌بندی می‌شود؟', en: 'What Is a Liability?' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'رضا، صاحب فروشگاه لوازم خانگی مهر، در پایان فصل 180,000 در حساب بانکی می‌بیند و می‌خواهد ویترین فروشگاه را نو کند. حسابدار فهرستی جلوی او می‌گذارد: 13,000 مالیات بر ارزش افزوده‌ای که از مشتریان گرفته و باید به اداره مالیات بدهد، 36,000 حق بیمه کارکنان، 3,000 مالیات حقوق و 51,600 قسط وامی که ماه آینده سررسید می‌شود. یعنی 103,600، بیش از نیمی از موجودی بانک، از قبل متعلق به دیگران است. **بدهی‌ها** همین تعهدهای پنهان در پشت موجودی نقد هستند.',
            en: 'Reza, who owns Mehr Home Appliances, sees 180,000 in the bank at quarter-end and wants to refit the showroom. His accountant hands him a list: 13,000 of VAT collected from customers that must go to the tax office, 36,000 of social security for the staff, 3,000 of payroll tax and a 51,600 loan instalment due next month. That is 103,600, more than half the bank balance, which already belongs to others. **Liabilities** are exactly these obligations hiding behind the cash balance.',
          },
        },
        {
          type: 'p',
          text: {
            fa: '**بدهی** تعهد فعلی واحد تجاری است که از رویدادهای گذشته ناشی شده و انتظار می‌رود تسویه آن به خروج منابع (معمولاً وجه نقد) بینجامد. سه جزء دارد: **تعهد فعلی** (امروز وجود دارد، نه فقط قصد آینده)، **رویداد گذشته** (خرید انجام شده، کارکنان کار کرده‌اند، وام دریافت شده) و **خروج منابع** (پرداخت پول یا ارائه کالا و خدمت).',
            en: 'A **liability** is a present obligation of the business arising from past events, whose settlement is expected to result in an outflow of resources (usually cash). It has three parts: a **present obligation** (it exists today, not just a future intention), a **past event** (the goods were bought, the staff worked, the loan was received) and an **outflow** (paying money or providing goods or services).',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'بدهی‌ای **جاری** است که انتظار می‌رود ظرف **12 ماه** پس از تاریخ ترازنامه (یا در چرخه عادی عملیات) تسویه شود؛ بقیه **غیرجاری** (بلندمدت) هستند. یک وام پنج‌ساله در هر سال دو بخش دارد: اقساطی که ظرف 12 ماه آینده سررسید می‌شوند جاری‌اند و باقی غیرجاری. این طبقه‌بندی برای تحلیل نقدینگی حیاتی است، چون نشان می‌دهد چه مبلغی به‌زودی باید پرداخت شود.',
            en: 'A liability is **current** if it is expected to be settled within **12 months** after the balance-sheet date (or within the normal operating cycle); the rest are **non-current** (long-term). A five-year loan has two parts each year: instalments due within the next 12 months are current and the rest is non-current. This split is vital for liquidity analysis because it shows how much must be paid soon.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'بدهی‌های رایج و طبقه‌بندی آن‌ها', en: 'Common liabilities and how they are classified' },
          head: [
            { fa: 'بدهی', en: 'Liability' },
            { fa: 'رویداد ایجادکننده', en: 'Event that creates it' },
            { fa: 'طبقه‌بندی معمول', en: 'Usual classification' },
          ],
          rows: [
            [ac.ap, { fa: 'خرید نسیه کالا و خدمات', en: 'Buying goods and services on credit' }, cur],
            [ac.np, { fa: 'صدور چک مدت‌دار یا سفته برای فروشنده', en: 'Issuing a post-dated cheque or note to a supplier' }, cur],
            [
              { fa: 'حقوق، حق بیمه و مالیات حقوق پرداختنی', en: 'Salaries, social security and payroll tax payable' },
              { fa: 'کار کارکنان در ماه', en: 'The staff’s work during the month' },
              cur,
            ],
            [ac.vatPayable, { fa: 'فروش مشمول مالیات در دوره', en: 'Taxable sales in the period' }, cur],
            [
              { fa: 'اقساط وام که ظرف 12 ماه سررسید می‌شوند', en: 'Loan instalments due within 12 months' },
              { fa: 'قرارداد وام', en: 'The loan agreement' },
              cur,
            ],
            [
              { fa: 'اقساط بعدی همان وام', en: 'Later instalments of the same loan' },
              { fa: 'قرارداد وام', en: 'The loan agreement' },
              { fa: 'غیرجاری', en: 'Non-current' },
            ],
            [
              { fa: 'ذخیره مزایای پایان خدمت کارکنان', en: 'Provision for employees’ end-of-service benefits' },
              { fa: 'سابقه خدمت کارکنان', en: 'Employees’ years of service' },
              { fa: 'عمدتاً غیرجاری', en: 'Mostly non-current' },
            ],
            [
              ac.warrantyProv,
              { fa: 'فروش کالا با ضمانت', en: 'Selling goods with a warranty' },
              { fa: 'جاری یا تفکیک‌شده', en: 'Current, or split' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'پیوند با نوا', en: 'Link to Nova' },
          text: {
            fa: 'ترازنامه استودیو طراحی نوا در درس صورت‌های مالی 17,250 بدهی نشان داد: 2,250 بدهی جاری (حساب‌های پرداختنی 1,500، حقوق پرداختنی 600 و بهره پرداختنی 150) و وام بانکی 15,000 که غیرجاری طبقه‌بندی شد. در این درس همین حساب‌ها را در مقیاس یک شرکت واقعی‌تر می‌بینیم.',
            en: 'Nova Design Studio’s balance sheet in the lesson on financial statements showed 17,250 of liabilities: 2,250 current (accounts payable 1,500, salaries payable 600 and interest payable 150) and the 15,000 bank loan, classified as non-current. This lesson looks at the same accounts in a larger, more realistic business.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: کدینگ بدهی‌ها', en: 'In practice: coding liabilities' },
          text: {
            fa: 'در کدینگ سه‌سطحی، بدهی‌ها معمولاً در دو گروه جاری و غیرجاری قرار می‌گیرند. حساب کل «حساب‌های پرداختنی» برای هر تأمین‌کننده یک **حساب تفصیلی** دارد و حساب کل «وام‌ها» برای هر قرارداد وام. به این ترتیب در هر لحظه معلوم است به چه کسی، چقدر و بابت چه بدهکاریم.',
            en: 'In three-level coding, liabilities usually sit in two groups, current and non-current. The general account “Accounts payable” has a **detail account** for each supplier, and “Loans” has one for each loan contract. At any moment you can see whom we owe, how much and for what.',
          },
        },
      ],
    },
    /* ───────────────────────────── 2 ───────────────────────────── */
    {
      id: 'payables-accruals',
      title: { fa: 'حساب‌ها و اسناد پرداختنی و هزینه‌های پرداختنی', en: 'Payables and Accrued Liabilities' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**حساب‌های پرداختنی** مبالغی است که بابت خرید نسیه کالا و خدمات به تأمین‌کنندگان بدهکاریم و پشتوانه آن فاکتور فروشنده است. وقتی برای تسویه این بدهی **چک مدت‌دار** صادر می‌کنیم، بدهی مستند و سررسیددار می‌شود و از حساب‌های پرداختنی به **اسناد پرداختنی** منتقل می‌شود. وقتی بانک چک را در سررسید پرداخت کرد، اسناد پرداختنی بسته می‌شود.',
            en: '**Accounts payable** are amounts owed to suppliers for goods and services bought on credit, backed by the supplier’s invoice. When we settle such a debt with a **post-dated cheque**, the debt becomes documented and dated, so it moves from accounts payable to **notes payable**. When the bank honours the cheque on its due date, the note payable is closed.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'از خرید نسیه تا پاس شدن چک', en: 'From credit purchase to a cleared cheque' },
          entries: [
            {
              date: { fa: 'روز 3', en: 'Day 3' },
              lines: [
                { account: ac.inventory, debit: 40000 },
                { account: ac.ap, credit: 40000 },
              ],
              memo: {
                fa: 'خرید نسیه کالا (مالیات بر ارزش افزوده در این مثال نادیده گرفته شده است).',
                en: 'Goods bought on credit (VAT ignored in this example).',
              },
            },
            {
              date: { fa: 'روز 10', en: 'Day 10' },
              lines: [
                { account: ac.ap, debit: 40000 },
                { account: ac.np, credit: 40000 },
              ],
              memo: { fa: 'صدور چک 60 روزه برای تأمین‌کننده.', en: 'A 60-day cheque issued to the supplier.' },
            },
            {
              date: { fa: 'روز 70', en: 'Day 70' },
              lines: [
                { account: ac.np, debit: 40000 },
                { account: ac.cash, credit: 40000 },
              ],
              memo: { fa: 'چک در سررسید از حساب بانکی پرداخت شد.', en: 'The cheque is paid from the bank account on its due date.' },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: چک‌ها و سفته‌های تضمینی', en: 'In practice: cheques and guarantee notes' },
          text: {
            fa: 'از زمان اجرای قانون جدید چک، چک صادره باید در سامانه صیاد بانک مرکزی ثبت شود؛ رسید این ثبت پیوست مناسبی برای سند حسابداری است. چک یا سفته‌ای که فقط **برای تضمین** (مثلاً حسن انجام کار) داده می‌شود بدهی نیست، چون تعهد پرداختی ایجاد نکرده است؛ شرکت‌های ایرانی آن را در **حساب‌های انتظامی** ثبت می‌کنند تا فراموش نشود و در پایان قرارداد پس گرفته شود.',
            en: 'Since the new cheque law took effect, issued cheques must be registered in the Central Bank’s Sayad system; the registration slip is a good attachment to the voucher. A cheque or promissory note given only **as security** (for example, for performance) is not a liability, because no payment obligation has arisen; Iranian companies record it in **memorandum accounts** so it is not forgotten and is taken back when the contract ends.',
          },
        },
        {
          type: 'h',
          text: { fa: 'هزینه‌های پرداختنی (بدهی‌های تحقق‌یافته)', en: 'Accrued liabilities' },
        },
        {
          type: 'p',
          text: {
            fa: 'برخی هزینه‌ها در پایان دوره تحقق یافته‌اند اما هنوز فاکتوری برایشان نرسیده است: برق ماه آخر، بهره وام، حقوق روزهای پایانی ماه. همان‌طور که در درس ثبت‌های اصلاحی دیدیم، این‌ها با برآورد ثبت می‌شوند تا هزینه در دوره درست بنشیند. فروشگاه مهر برق ماه 12 را 1,800 برآورد می‌کند؛ قبض واقعی در ماه بعد 1,850 می‌رسد و پرداخت می‌شود.',
            en: 'Some expenses have been incurred by period-end but no invoice has arrived: the last month’s electricity, loan interest, wages for the final days. As in the lesson on adjusting entries, they are recorded at an estimate so the expense lands in the right period. Mehr estimates month 12’s electricity at 1,800; the actual bill of 1,850 arrives and is paid the next month.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'برآورد و تسویه هزینه برق', en: 'Accruing and settling electricity' },
          entries: [
            {
              date: { fa: 'پایان ماه 12', en: 'End of month 12' },
              lines: [
                { account: ac.utilities, debit: 1800 },
                { account: ac.accrued, credit: 1800 },
              ],
              memo: { fa: 'برآورد برق مصرفی ماه 12.', en: 'Estimated electricity used in month 12.' },
            },
            {
              date: { fa: 'ماه 1 سال بعد', en: 'Month 1, next year' },
              lines: [
                { account: ac.accrued, debit: 1800 },
                { account: ac.utilities, debit: 50 },
                { account: ac.cash, credit: 1850 },
              ],
              memo: {
                fa: 'پرداخت قبض واقعی؛ اختلاف کوچک برآورد (50) هزینه دوره جاری است.',
                en: 'Actual bill paid; the small estimation difference (50) is a current-period expense.',
              },
            },
          ],
        },
      ],
    },
    /* ───────────────────────────── 3 ───────────────────────────── */
    {
      id: 'payroll',
      title: { fa: 'حقوق و دستمزد', en: 'Payroll' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**حقوق ناخالص** همه مبالغی است که کارمند در ماه کسب کرده: حقوق پایه، اضافه‌کار و مزایای نقدی. کارفرما بخشی از آن را به‌عنوان **کسورات** نگه می‌دارد تا به جای کارمند به سازمان‌ها بپردازد: **سهم بیمه کارمند** به سازمان تأمین اجتماعی و **مالیات حقوق** به اداره مالیات. آنچه به حساب کارمند واریز می‌شود **خالص پرداختی** است. جدا از این‌ها، کارفرما **سهم بیمه کارفرما** را هم از جیب خودش می‌پردازد که هزینه اضافه شرکت است.',
            en: '**Gross pay** is everything an employee earned in the month: base salary, overtime and cash allowances. The employer keeps part of it as **deductions** to pay to authorities on the employee’s behalf: the **employee’s social security share** to the social security organisation and **income tax withheld** to the tax office. What reaches the employee’s account is **net pay**. On top of that, the employer pays its own **employer’s social security share**, an extra cost to the company.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'فرض‌های این درس (نرخ‌های نمونه)', en: 'Assumptions in this lesson (illustrative rates)' },
          text: {
            fa: 'در این درس فرض می‌کنیم: سهم بیمه کارمند 7٪ و سهم بیمه کارفرما 23٪ (20٪ بیمه به‌علاوه 3٪ بیمه بیکاری) از حقوق ناخالص است و کل حقوق مشمول بیمه است. مالیات حقوق را برای سادگی 10٪ مازاد حقوق ناخالص ماهانه بر 30,000 فرض می‌کنیم. قانون واقعی پلکان‌های مختلف، معافیت سالانه و اقلام کسرشدنی دارد و نرخ‌ها هر سال ممکن است تغییر کند؛ نرخ‌ها و سقف‌های رسمی را از قوانین روز بررسی کنید.',
            en: 'In this lesson we assume the employee’s social security share is 7% and the employer’s share is 23% (20% insurance plus 3% unemployment insurance) of gross pay, and that all pay is insurable. For simplicity, income tax withheld is 10% of monthly gross pay above 30,000. The real law has several brackets, a yearly exemption and deductible items, and rates can change every year; check the official rates and ceilings in current law.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'خالص پرداختی = حقوق ناخالص − سهم بیمه کارمند − مالیات حقوق − سایر کسور (وام، مساعده)',
            en: 'Net pay = Gross pay − Employee social security − Income tax withheld − Other deductions (loans, advances)',
          },
          note: {
            fa: 'بهای کل نیروی کار برای کارفرما = حقوق ناخالص + سهم بیمه کارفرما. کسورات کارمند هزینه کارفرما نیست؛ پولی امانی است که باید به سازمان‌ها برسد.',
            en: 'Total cost to the employer = Gross pay + Employer’s social security. Employee deductions are not an employer cost; they are money held in trust for the authorities.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'لیست حقوق ماه 6 فروشگاه مهر', en: 'Mehr Home Appliances: payroll sheet for month 6' },
          head: [
            { fa: 'کارمند', en: 'Employee' },
            { fa: 'حقوق ناخالص', en: 'Gross pay' },
            { fa: 'بیمه سهم کارمند 7٪', en: 'Employee SS 7%' },
            { fa: 'مالیات حقوق', en: 'Income tax withheld' },
            { fa: 'خالص پرداختی', en: 'Net pay' },
            { fa: 'بیمه سهم کارفرما 23٪', en: 'Employer SS 23%' },
          ],
          numericCols: [1, 2, 3, 4, 5],
          rows: [
            [{ fa: 'حسین', en: 'Hossein' }, 30000, 2100, 0, 27900, 6900],
            [{ fa: 'مریم', en: 'Maryam' }, 40000, 2800, 1000, 36200, 9200],
            [{ fa: 'علی', en: 'Ali' }, 50000, 3500, 2000, 44500, 11500],
            [total, 120000, 8400, 3000, 108600, 27600],
          ],
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های حقوق ماه 6', en: 'Payroll entries for month 6' },
          entries: [
            {
              date: { fa: 'پایان ماه 6', en: 'End of month 6' },
              lines: [
                { account: ac.salaries, debit: 120000 },
                { account: ac.ssPayable, credit: 8400 },
                { account: ac.taxPayable, credit: 3000 },
                { account: ac.salPayable, credit: 108600 },
              ],
              memo: {
                fa: '(1) ثبت حقوق ناخالص و کسورات کارکنان.',
                en: '(1) Gross pay and employee deductions.',
              },
            },
            {
              date: { fa: 'پایان ماه 6', en: 'End of month 6' },
              lines: [
                { account: ac.employerIns, debit: 27600 },
                { account: ac.ssPayable, credit: 27600 },
              ],
              memo: { fa: '(2) سهم بیمه کارفرما: 23٪ × 120,000.', en: '(2) Employer’s share: 23% × 120,000.' },
            },
            {
              date: { fa: 'پایان ماه 6', en: 'End of month 6' },
              lines: [
                { account: ac.salPayable, debit: 108600 },
                { account: ac.cash, credit: 108600 },
              ],
              memo: { fa: '(3) واریز خالص حقوق به حساب کارکنان.', en: '(3) Net pay transferred to employees’ accounts.' },
            },
            {
              date: { fa: 'ماه 7', en: 'Month 7' },
              lines: [
                { account: ac.ssPayable, debit: 36000 },
                { account: ac.taxPayable, debit: 3000 },
                { account: ac.cash, credit: 39000 },
              ],
              memo: {
                fa: '(4) پرداخت حق بیمه (8,400 + 27,600) و مالیات حقوق.',
                en: '(4) Social security (8,400 + 27,600) and payroll tax remitted.',
              },
            },
          ],
        },
        {
          type: 'tAccounts',
          title: { fa: 'حق بیمه پرداختنی پس از پرداخت ماه 7 صفر می‌شود', en: 'Social security payable is cleared by the month 7 payment' },
          accounts: [{ name: ac.ssPayable, debits: [36000], credits: [8400, 27600] }],
        },
        {
          type: 'formula',
          text: {
            fa: 'بهای کل حقوق ماه 6 برای فروشگاه = 120,000 + 27,600 = 147,600',
            en: 'Mehr’s total payroll cost for month 6 = 120,000 + 27,600 = 147,600',
          },
          note: {
            fa: 'از این مبلغ، 108,600 به کارکنان، 36,000 به تأمین اجتماعی و 3,000 به اداره مالیات می‌رسد: 108,600 + 36,000 + 3,000 = 147,600.',
            en: 'Of this, 108,600 goes to the staff, 36,000 to social security and 3,000 to the tax office: 108,600 + 36,000 + 3,000 = 147,600.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'کارکرد', en: 'Attendance' },
              text: {
                fa: 'کارکرد ماهانه (روزهای کار، اضافه‌کار، مرخصی و غیبت) از سیستم حضور و غیاب گرفته و تأیید می‌شود.',
                en: 'Monthly attendance (days worked, overtime, leave and absence) is taken from the time system and approved.',
              },
            },
            {
              title: { fa: 'محاسبه', en: 'Calculation' },
              text: {
                fa: 'نرم‌افزار حقوق، ناخالص، بیمه، مالیات، کسور دیگر و خالص هر نفر را محاسبه می‌کند و فیش حقوقی صادر می‌شود.',
                en: 'Payroll software computes each person’s gross, insurance, tax, other deductions and net pay, and payslips are issued.',
              },
            },
            {
              title: { fa: 'سند حسابداری', en: 'Voucher' },
              text: {
                fa: 'یک سند جمعی (ثبت‌های 1 و 2 بالا) با پیوست لیست حقوق امضاشده صادر می‌شود؛ هزینه حقوق معمولاً به تفکیک مرکز هزینه (فروش، اداری، تولید) ثبت می‌شود.',
                en: 'One summary voucher (entries 1 and 2 above) is posted with the signed payroll sheet attached; salary expense is usually split by cost centre (sales, admin, production).',
              },
            },
            {
              title: { fa: 'پرداخت و ارسال لیست‌ها', en: 'Payment and filings' },
              text: {
                fa: 'خالص حقوق با فایل گروهی بانک واریز می‌شود؛ لیست بیمه و لیست مالیات حقوق ارسال و مبالغ آن‌ها پرداخت می‌شود و حساب‌های پرداختنی مربوط صفر می‌شوند.',
                en: 'Net pay is sent by a bulk bank transfer; the insurance list and payroll-tax list are filed and paid, and the related payables are cleared to zero.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل در ایران', en: 'In practice in Iran' },
          text: {
            fa: 'لیست بیمه به سازمان تأمین اجتماعی و لیست مالیات حقوق به سازمان امور مالیاتی هر ماه ارسال می‌شود و مهلت آن‌ها معمولاً تا پایان ماه بعد است؛ مهلت‌ها را با مقررات روز تطبیق دهید. شرکت‌های حرفه‌ای **عیدی و پاداش**، **مرخصی استفاده‌نشده** و **مزایای پایان خدمت (سنوات)** را هم ماهانه ذخیره می‌کنند تا هر ماه سهم خود را از این هزینه‌ها داشته باشد. مبنای این ذخیره‌ها قانون کار و مصوبه سالانه دستمزد است.',
            en: 'The insurance list goes to the social security organisation and the payroll-tax list to the tax administration every month, usually by the end of the following month; check the deadlines against current rules. Well-run companies also accrue the **annual bonus (eydi)**, **unused leave** and **end-of-service benefits (sanavat)** monthly, so each month carries its share of these costs. These accruals follow the Labour Law and the yearly wage decision.',
          },
        },
      ],
    },
    /* ───────────────────────────── 4 ───────────────────────────── */
    {
      id: 'vat',
      title: { fa: 'مالیات بر ارزش افزوده', en: 'Value Added Tax (VAT)' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**مالیات بر ارزش افزوده** مالیاتی بر مصرف است که در هر مرحله از زنجیره تولید و توزیع گرفته می‌شود. هر فروشنده روی فروش خود مالیات می‌گیرد (**مالیات فروش** یا مالیات خروجی) و روی خریدهای خود مالیات می‌پردازد (**مالیات خرید** یا مالیات ورودی) و فقط **تفاوت** این دو را به اداره مالیات می‌پردازد. بار نهایی را مصرف‌کننده می‌کشد؛ کسب‌وکار فقط **جمع‌کننده** مالیات است. پس مالیات فروش درآمد شرکت نیست و مالیات خرید قابل کسر هم هزینه آن نیست.',
            en: '**Value added tax** is a tax on consumption collected at every stage of the production and distribution chain. Each seller charges tax on its sales (**output VAT**) and pays tax on its purchases (**input VAT**), and remits only the **difference** to the tax office. The final consumer bears the tax; the business is only a **collector**. So output VAT is not the company’s revenue, and reclaimable input VAT is not its expense.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'نرخ فرضی', en: 'Assumed rate' },
          text: {
            fa: 'در این درس نرخ مالیات بر ارزش افزوده را 10٪ فرض می‌کنیم؛ نرخ رسمی را از قوانین روز بررسی کنید.',
            en: 'In this lesson we assume a VAT rate of 10%; check the official rate in current law.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'زنجیره مالیات بر ارزش افزوده: هر مرحله فقط مالیات ارزشی را می‌پردازد که خودش افزوده است',
            en: 'The VAT chain: each stage pays tax only on the value it adds',
          },
          head: [
            { fa: 'مرحله', en: 'Stage' },
            { fa: 'قیمت فروش بدون مالیات', en: 'Sale price excl. VAT' },
            { fa: 'مالیات فروش', en: 'Output VAT' },
            { fa: 'مالیات خرید', en: 'Input VAT' },
            { fa: 'پرداختی به اداره مالیات', en: 'Paid to the tax office' },
          ],
          numericCols: [1, 2, 3, 4],
          rows: [
            [{ fa: 'تولیدکننده', en: 'Producer' }, 100000, 10000, 0, 10000],
            [{ fa: 'عمده‌فروش', en: 'Wholesaler' }, 150000, 15000, 10000, 5000],
            [{ fa: 'خرده‌فروش', en: 'Retailer' }, 200000, 20000, 15000, 5000],
            [total, blank, blank, blank, 20000],
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'مالیات بر ارزش افزوده پرداختنی (دریافتنی) = مالیات فروش دوره − مالیات خرید قابل کسر دوره',
            en: 'VAT payable (receivable) = Output VAT for the period − Reclaimable input VAT for the period',
          },
          note: {
            fa: 'مصرف‌کننده 220,000 می‌پردازد و کل مالیات وصول‌شده در زنجیره 20,000 است، یعنی 10٪ قیمت نهایی. اگر مالیات خرید از مالیات فروش بیشتر شود، تفاوت طلب شرکت است که طبق قانون به دوره بعد منتقل یا مسترد می‌شود.',
            en: 'The consumer pays 220,000 and the chain collects 20,000 of tax in total, 10% of the final price. If input VAT exceeds output VAT, the difference is a claim of the company, carried forward or refunded as the law allows.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'فروشگاه مهر در یک فصل: کالایی به بهای 300,000 به‌علاوه 30,000 مالیات نسیه می‌خرد؛ کالایی به مبلغ 450,000 به‌علاوه 45,000 مالیات نسیه می‌فروشد؛ و یک رایانه برای دفتر به بهای 20,000 به‌علاوه 2,000 مالیات نقدی می‌خرد. ثبت بهای تمام‌شده کالای فروش‌رفته را اینجا نمی‌آوریم (آن را در درس «موجودی کالا و بهای تمام‌شده کالای فروش‌رفته» دیدیم).',
            en: 'In one quarter Mehr buys goods for 300,000 plus 30,000 VAT on credit, sells goods for 450,000 plus 45,000 VAT on credit, and buys an office computer for 20,000 plus 2,000 VAT in cash. The cost-of-goods-sold entry is left out here (it was covered in the lesson “Inventory and Cost of Goods Sold”).',
          },
        },
        {
          type: 'journal',
          title: { fa: 'مالیات بر ارزش افزوده یک فصل فروشگاه مهر', en: 'Mehr’s VAT for one quarter' },
          entries: [
            {
              lines: [
                { account: ac.inventory, debit: 300000 },
                { account: ac.inputVat, debit: 30000 },
                { account: ac.ap, credit: 330000 },
              ],
              memo: { fa: '(1) خرید نسیه کالا.', en: '(1) Goods bought on credit.' },
            },
            {
              lines: [
                { account: ac.ar, debit: 495000 },
                { account: ac.sales, credit: 450000 },
                { account: ac.outputVat, credit: 45000 },
              ],
              memo: {
                fa: '(2) فروش نسیه؛ مشتری 495,000 بدهکار است، اما فقط 450,000 درآمد شرکت است.',
                en: '(2) Credit sale; the customer owes 495,000 but only 450,000 is the company’s revenue.',
              },
            },
            {
              lines: [
                { account: ac.officeEq, debit: 20000 },
                { account: ac.inputVat, debit: 2000 },
                { account: ac.cash, credit: 22000 },
              ],
              memo: { fa: '(3) خرید نقدی رایانه.', en: '(3) Computer bought for cash.' },
            },
            {
              date: { fa: 'پایان فصل', en: 'Quarter-end' },
              lines: [
                { account: ac.outputVat, debit: 45000 },
                { account: ac.inputVat, credit: 32000 },
                { account: ac.vatPayable, credit: 13000 },
              ],
              memo: {
                fa: '(4) تهاتر: 45,000 − (30,000 + 2,000) = 13,000 پرداختنی.',
                en: '(4) Offset: 45,000 − (30,000 + 2,000) = 13,000 payable.',
              },
            },
            {
              date: { fa: 'مهلت پرداخت', en: 'Due date' },
              lines: [
                { account: ac.vatPayable, debit: 13000 },
                { account: ac.cash, credit: 13000 },
              ],
              memo: { fa: '(5) پرداخت به اداره مالیات همراه با اظهارنامه.', en: '(5) Paid to the tax office with the return.' },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'چه وقت مالیات خرید هزینه می‌شود؟', en: 'When does input VAT become a cost?' },
          text: {
            fa: 'مالیات خرید فقط وقتی قابل کسر است که شرایط قانونی را داشته باشد؛ معمولاً صورت‌حساب معتبر از فروشنده ثبت‌نام‌شده و استفاده از کالا یا خدمت در فعالیت مشمول مالیات. اگر این شرایط نباشد (مثلاً فاکتور معتبر وجود ندارد یا شرکت کالای معاف می‌فروشد)، مالیات پرداختی جزو بهای کالا، دارایی یا هزینه مربوط ثبت می‌شود.',
            en: 'Input VAT is reclaimable only when legal conditions are met: usually a valid tax invoice from a registered seller and use of the goods or service in a taxable activity. If not (for example, there is no valid invoice or the company sells exempt goods), the VAT paid is added to the cost of the goods, the asset or the related expense.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل در ایران', en: 'In practice in Iran' },
          text: {
            fa: 'در بسیاری از کدینگ‌ها، مالیات و عوارض ارزش افزوده در حساب‌های معین جداگانه نگهداری می‌شوند. اظهارنامه به‌صورت دوره‌ای (معمولاً فصلی) در درگاه سازمان امور مالیاتی تسلیم می‌شود و صورت‌حساب‌ها به‌تدریج به **صورت‌حساب الکترونیکی** در **سامانه مؤدیان** منتقل شده‌اند. پیش از بستن هر دوره، مانده حساب‌های مالیات خرید و فروش را با اظهارنامه تطبیق دهید و مهلت‌ها و نرخ‌ها را از مقررات روز بررسی کنید.',
            en: 'Many charts of accounts keep the tax and the municipal-duty parts of VAT in separate subsidiary accounts. Returns are filed periodically (usually quarterly) on the tax administration’s portal, and invoices have been moving to **electronic invoices** in the **taxpayers’ system (samaneh-ye moadian)**. Before closing each period, agree the input and output VAT balances to the return, and check deadlines and rates in current regulations.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'قواعد عمان', en: 'Oman’s rules' },
          text: {
            fa: 'سازوکار ثبت در این بخش عمومی است و نرخ آن فرضی. برای نرخ‌ها، مهلت‌ها و قواعد عمان به درس‌های «مالیات بر ارزش افزوده در عمان»، «صورت‌حساب الکترونیکی در عمان» و «مالیات بر درآمد شرکت‌ها در عمان» مراجعه کنید.',
            en: 'The recording mechanics in this section are generic and the rate is assumed. For Oman’s rates, deadlines and rules, see the lessons “VAT in Oman”, “E-invoicing in Oman” and “Corporate income tax in Oman”.',
          },
        },
      ],
    },
    /* ───────────────────────────── 5 ───────────────────────────── */
    {
      id: 'loans',
      title: { fa: 'وام‌ها و حصه جاری', en: 'Loans and the Current Portion' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'هر وام سه جزء اصلی دارد: **اصل وام** (مبلغ دریافتی)، **نرخ بهره** سالانه و **برنامه بازپرداخت**. بهره هر دوره روی **مانده اصل** همان دوره محاسبه می‌شود: اصل × نرخ سالانه × مدت. دو الگوی رایج بازپرداخت داریم: **اقساط مساوی اصل** که بهره و قسط کل هر سال کمتر می‌شود، و **اقساط مساوی** که هر قسط ثابت است و سهم بهره در آن به‌تدریج کم می‌شود. هر قسط فقط بخش اصل خود را از بدهی کم می‌کند؛ بخش بهره هزینه است.',
            en: 'Every loan has three key parts: the **principal** (the amount received), the annual **interest rate** and the **repayment schedule**. Each period’s interest is charged on the **outstanding principal**: principal × annual rate × time. Two repayment patterns are common: **equal principal repayments**, where interest and the total payment fall each year, and **equal instalments**, where every payment is the same and the interest part shrinks over time. Each payment reduces the debt only by its principal part; the interest part is an expense.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: تسهیلات بانکی در ایران', en: 'In practice: bank facilities in Iran' },
          text: {
            fa: 'بانک‌های ایرانی وام را «تسهیلات» و هزینه آن را «سود و کارمزد تسهیلات» می‌نامند. از دید حسابداری، این مبلغ هزینه تأمین مالی است و در صورت سود و زیان زیر «هزینه‌های مالی» می‌آید؛ در این درس برای سادگی آن را «هزینه بهره» می‌نامیم. شرط‌هایی مانند سپرده مسدودی یا کارمزد ابتدای قرارداد، هزینه واقعی وام را از نرخ اسمی بیشتر می‌کنند؛ قرارداد را دقیق بخوانید.',
            en: 'Iranian banks call loans “facilities” (tashilat) and their cost “profit and fees”. For accounting, this is a finance cost and appears in the income statement under “finance costs”; this lesson simply calls it interest expense. Conditions such as a blocked deposit or an upfront fee push the real cost of a loan above the stated rate, so read the contract carefully.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'وام 120,000 فروشگاه مهر با نرخ 18٪، بازپرداخت در 4 قسط سالانه مساوی اصل (پایان هر سال)',
            en: 'Mehr’s 120,000 loan at 18%, repaid in 4 equal annual principal instalments (at each year-end)',
          },
          head: [
            { fa: 'سال', en: 'Year' },
            { fa: 'مانده ابتدای سال', en: 'Opening balance' },
            { fa: 'بهره 18٪', en: 'Interest 18%' },
            { fa: 'بازپرداخت اصل', en: 'Principal repaid' },
            { fa: 'قسط کل', en: 'Total payment' },
            { fa: 'مانده پایان سال', en: 'Closing balance' },
          ],
          numericCols: [1, 2, 3, 4, 5],
          rows: [
            [year(1), 120000, 21600, 30000, 51600, 90000],
            [year(2), 90000, 16200, 30000, 46200, 60000],
            [year(3), 60000, 10800, 30000, 40800, 30000],
            [year(4), 30000, 5400, 30000, 35400, 0],
            [total, blank, 54000, 120000, 174000, blank],
          ],
        },
        {
          type: 'journal',
          title: { fa: 'دریافت وام و پرداخت قسط اول', en: 'Receiving the loan and paying the first instalment' },
          entries: [
            {
              date: { fa: 'ابتدای سال 1', en: 'Start of Year 1' },
              lines: [
                { account: ac.cash, debit: 120000 },
                { account: ac.loan, credit: 120000 },
              ],
              memo: { fa: 'دریافت وام از بانک.', en: 'Loan received from the bank.' },
            },
            {
              date: { fa: 'پایان سال 1', en: 'End of Year 1' },
              lines: [
                { account: ac.loan, debit: 30000 },
                { account: ac.interestExp, debit: 21600 },
                { account: ac.cash, credit: 51600 },
              ],
              memo: { fa: 'قسط اول: 30,000 اصل و 21,600 بهره (120,000 × 18٪).', en: 'First instalment: 30,000 principal and 21,600 interest (120,000 × 18%).' },
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'در پایان سال 1، پس از پرداخت قسط، مانده وام 90,000 است. از این مبلغ، 30,000 در سال 2 پرداخت می‌شود، پس **حصه جاری** است؛ 60,000 باقیمانده غیرجاری است. بسیاری از شرکت‌ها این تفکیک را با یک ثبت انتقالی در دفاتر انجام می‌دهند و در ابتدای سال بعد آن را برمی‌گردانند یا مستقیماً از حساب حصه جاری پرداخت می‌کنند. اگر پایان سال مالی با تاریخ قسط یکی نباشد، بهره روزهای گذشته از آخرین قسط هم باید به‌صورت **بهره پرداختنی** ثبت شود.',
            en: 'At the end of Year 1, after the payment, the loan balance is 90,000. Of this, 30,000 will be paid in Year 2, so it is the **current portion**; the remaining 60,000 is non-current. Many companies make the split with a reclassification entry and either reverse it at the start of the next year or pay directly out of the current-portion account. If the year-end does not fall on a payment date, interest since the last payment must also be recorded as **interest payable**.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'انتقال حصه جاری در پایان سال 1', en: 'Reclassifying the current portion at the end of Year 1' },
          entries: [
            {
              date: { fa: 'پایان سال 1', en: 'End of Year 1' },
              lines: [
                { account: ac.loan, debit: 30000 },
                { account: ac.currentLoan, credit: 30000 },
              ],
              memo: {
                fa: 'ترازنامه: حصه جاری 30,000 در بدهی‌های جاری و وام بانکی 60,000 در بدهی‌های غیرجاری.',
                en: 'Balance sheet: current portion 30,000 under current liabilities; bank loan 60,000 under non-current liabilities.',
              },
            },
          ],
        },
      ],
    },
    /* ───────────────────────────── 6 ───────────────────────────── */
    {
      id: 'provisions',
      title: { fa: 'ذخیره‌ها و بدهی‌های احتمالی', en: 'Provisions and Contingent Liabilities' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**ذخیره** بدهی‌ای است که زمان یا مبلغ آن قطعی نیست. طبق IAS 37 ذخیره فقط وقتی شناسایی می‌شود که سه شرط با هم برقرار باشد: (1) **تعهد فعلی** ناشی از رویداد گذشته وجود دارد؛ (2) خروج منابع برای تسویه آن **محتمل** است (احتمالش بیشتر از نبودنش است)؛ و (3) مبلغ آن را بتوان **به‌طور قابل اتکا برآورد** کرد. اگر یکی از این شرط‌ها نباشد، با **بدهی احتمالی** سروکار داریم که ثبت نمی‌شود و فقط در یادداشت‌ها افشا می‌شود.',
            en: 'A **provision** is a liability of uncertain timing or amount. Under IAS 37 it is recognised only when all three conditions hold: (1) there is a **present obligation** from a past event; (2) an outflow to settle it is **probable** (more likely than not); and (3) the amount can be **reliably estimated**. If any condition fails, we have a **contingent liability**, which is not recorded but only disclosed in the notes.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'ذخیره یا بدهی احتمالی؟', en: 'Provision or contingent liability?' },
          head: [
            { fa: 'وضعیت', en: 'Situation' },
            { fa: 'اقدام', en: 'Treatment' },
            { fa: 'مثال', en: 'Example' },
          ],
          rows: [
            [
              { fa: 'خروج منابع محتمل و مبلغ قابل برآورد', en: 'Outflow probable and amount measurable' },
              { fa: 'ثبت ذخیره در دفاتر', en: 'Record a provision' },
              { fa: 'گارانتی کالاهای فروخته‌شده', en: 'Warranty on goods sold' },
            ],
            [
              { fa: 'خروج منابع ممکن، اما محتمل نیست', en: 'Outflow possible but not probable' },
              { fa: 'افشا در یادداشت‌ها، بدون ثبت', en: 'Disclose in the notes, no entry' },
              { fa: 'دعوای حقوقی که وکیل احتمال باخت آن را کم می‌داند', en: 'A lawsuit the lawyer thinks we will probably win' },
            ],
            [
              { fa: 'احتمال خروج منابع بسیار ناچیز', en: 'Outflow remote' },
              { fa: 'نه ثبت، نه افشا', en: 'Neither record nor disclose' },
              { fa: 'ادعای بی‌پایه‌ای که دادگاه قبلاً رد کرده است', en: 'A baseless claim a court has already dismissed' },
            ],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'فروشگاه مهر بخاری‌ها را با گارانتی یک‌ساله می‌فروشد. فروش سال 1 برابر 800,000 است و تجربه سال‌های قبل نشان می‌دهد هزینه تعمیرات گارانتی حدود 2٪ فروش است. تعهد از لحظه فروش ایجاد شده (رویداد گذشته)، تعمیر برخی دستگاه‌ها محتمل است و مبلغ قابل برآورد: 800,000 × 2٪ = 16,000. هزینه در همان سال فروش شناسایی می‌شود (اصل تطابق)، حتی اگر تعمیرها سال بعد انجام شوند. در طول سال 9,000 تعمیر انجام می‌شود: 6,000 قطعه از انبار و 3,000 دستمزد نقدی.',
            en: 'Mehr sells heaters with a one-year warranty. Year 1 sales are 800,000, and past experience shows warranty repairs cost about 2% of sales. The obligation arises at the moment of sale (past event), some repairs are probable and the amount can be estimated: 800,000 × 2% = 16,000. The expense is recognised in the year of sale (matching), even if repairs happen next year. During the year 9,000 of repairs are done: 6,000 of parts from stock and 3,000 of labour paid in cash.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ذخیره گارانتی', en: 'Warranty provision' },
          entries: [
            {
              date: { fa: 'سال 1، هنگام فروش (یا پایان دوره)', en: 'Year 1, on sale (or at period-end)' },
              lines: [
                { account: ac.warrantyExp, debit: 16000 },
                { account: ac.warrantyProv, credit: 16000 },
              ],
              memo: { fa: 'برآورد هزینه گارانتی: 2٪ × 800,000.', en: 'Estimated warranty cost: 2% × 800,000.' },
            },
            {
              date: { fa: 'طی سال 1', en: 'During Year 1' },
              lines: [
                { account: ac.warrantyProv, debit: 9000 },
                { account: ac.inventory, credit: 6000 },
                { account: ac.cash, credit: 3000 },
              ],
              memo: {
                fa: 'تعمیرات واقعی از ذخیره کسر می‌شود و دوباره هزینه نمی‌شود.',
                en: 'Actual repairs are charged against the provision, not expensed a second time.',
              },
            },
          ],
        },
        {
          type: 'tAccounts',
          title: { fa: 'ذخیره گارانتی: مانده 7,000 به سال 2 می‌رود', en: 'Warranty provision: a 7,000 balance carries into Year 2' },
          accounts: [{ name: ac.warrantyProv, debits: [9000], credits: [16000] }],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'دو معنای «ذخیره»', en: 'Two meanings of “zakhireh”' },
          text: {
            fa: 'در فارسی واژه «ذخیره» برای دو چیز متفاوت به کار می‌رود. **ذخیره گارانتی**، **ذخیره مزایای پایان خدمت** و **ذخیره مالیات** بدهی‌اند و در سمت بدهی‌های ترازنامه می‌آیند. اما **ذخیره مطالبات مشکوک‌الوصول** و **ذخیره کاهش ارزش موجودی** حساب کاهنده دارایی‌اند و از دارایی مربوط کسر می‌شوند. همیشه بپرسید: «این حساب، تعهدی به دیگران است یا کاهش ارزش یک دارایی؟»',
            en: 'In Persian the word “zakhireh” covers two different things. The **warranty provision**, the **provision for end-of-service benefits** and the **tax provision** are liabilities on the liabilities side of the balance sheet. But the **allowance for doubtful accounts** and the **inventory write-down allowance** are contra-asset accounts deducted from the related asset. Always ask: “Is this an obligation to others, or a reduction in an asset’s value?”',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'دعوای حقوقی', en: 'A lawsuit' },
          text: {
            fa: 'مشتری‌ای بابت آسیب ناشی از یک بخاری 50,000 خسارت مطالبه کرده است. اگر وکیل شرکت بگوید احتمال محکومیت کم است اما صفر نیست، فقط در یادداشت‌ها افشا می‌شود. اگر بگوید محکومیت محتمل است و بهترین برآورد 30,000 است، ذخیره 30,000 ثبت می‌شود (بدهکار هزینه دعاوی حقوقی، بستانکار ذخیره دعاوی حقوقی)، نه 50,000 که مبلغ ادعاست.',
            en: 'A customer claims 50,000 for damage caused by a heater. If the company’s lawyer says losing is unlikely but not impossible, it is only disclosed in the notes. If the lawyer says losing is probable and the best estimate is 30,000, a 30,000 provision is recorded (debit legal claims expense, credit provision for legal claims), not the 50,000 claimed.',
          },
        },
      ],
    },
    /* ───────────────────────────── 7 ───────────────────────────── */
    {
      id: 'month-end-mistakes',
      title: { fa: 'کنترل پایان دوره و اشتباهات رایج', en: 'Month-End Checks and Common Mistakes' },
      blocks: [
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'تأمین‌کنندگان', en: 'Suppliers' },
              text: {
                fa: 'صورت‌حساب تأمین‌کنندگان اصلی را با مانده حساب تفصیلی هر کدام تطبیق دهید و فاکتورهای رسیده‌ای را که ثبت نشده‌اند پیدا کنید.',
                en: 'Agree main suppliers’ statements to each detail account and find invoices received but not yet recorded.',
              },
            },
            {
              title: { fa: 'چک‌های صادره', en: 'Cheques issued' },
              text: {
                fa: 'فهرست چک‌های صادره سررسیدنشده را با مانده اسناد پرداختنی و دسته‌چک‌ها تطبیق دهید.',
                en: 'Agree the list of unpresented post-dated cheques to the notes-payable balance and the chequebooks.',
              },
            },
            {
              title: { fa: 'هزینه‌های تحقق‌یافته', en: 'Accruals' },
              text: {
                fa: 'آب، برق، بهره، حقوق و هر خدمتی که دریافت شده اما فاکتورش نرسیده را برآورد و ثبت کنید.',
                en: 'Estimate and record utilities, interest, wages and any service received but not yet invoiced.',
              },
            },
            {
              title: { fa: 'حقوق و مالیات', en: 'Payroll and taxes' },
              text: {
                fa: 'مانده حق بیمه، مالیات حقوق و مالیات بر ارزش افزوده را با لیست‌ها و اظهارنامه‌ها تطبیق دهید.',
                en: 'Agree social security, payroll tax and VAT balances to the filed lists and returns.',
              },
            },
            {
              title: { fa: 'وام‌ها و ذخیره‌ها', en: 'Loans and provisions' },
              text: {
                fa: 'مانده وام را با صورت‌حساب بانک تطبیق دهید، بهره تحقق‌یافته و حصه جاری را ثبت کنید و برآورد ذخیره‌ها را بازبینی کنید.',
                en: 'Agree loan balances to bank statements, record accrued interest and the current portion, and review provision estimates.',
              },
            },
          ],
        },
        {
          type: 'h',
          text: { fa: 'اشتباهات رایج', en: 'Common mistakes' },
        },
        {
          type: 'list',
          items: [
            {
              fa: 'ثبت کسورات کارمند (بیمه و مالیات) به‌عنوان درآمد یا کاهش هزینه شرکت؛ این‌ها بدهی‌اند تا پرداخت شوند.',
              en: 'Treating employee deductions (insurance and tax) as company income or a reduced expense; they are liabilities until paid.',
            },
            {
              fa: 'فراموش کردن **سهم بیمه کارفرما**، که هزینه واقعی نیروی کار را حدود یک‌چهارم کمتر نشان می‌دهد.',
              en: 'Forgetting the **employer’s social security share**, which understates the true cost of labour by roughly a quarter.',
            },
            {
              fa: 'ثبت کل مبلغ فاکتور فروش (با مالیات) به‌عنوان درآمد، یا ثبت مالیات خرید قابل کسر به‌عنوان هزینه.',
              en: 'Recording the whole invoice (including VAT) as revenue, or expensing reclaimable input VAT.',
            },
            {
              fa: 'ثبت کل قسط وام به‌عنوان هزینه، یا کل آن به‌عنوان کاهش وام؛ قسط را به اصل و بهره تفکیک کنید.',
              en: 'Expensing the whole loan instalment, or treating all of it as debt reduction; split it into principal and interest.',
            },
            {
              fa: 'نشان دادن کل وام بلندمدت در بدهی‌های غیرجاری و جدا نکردن حصه جاری آن.',
              en: 'Showing the whole long-term loan as non-current without separating its current portion.',
            },
            {
              fa: 'ثبت هزینه گارانتی فقط هنگام تعمیر (به‌جای سال فروش)، یا ثبت ذخیره برای دعوایی که فقط «ممکن» است.',
              en: 'Expensing warranty costs only when repairs happen (instead of in the year of sale), or providing for a lawsuit that is only “possible”.',
            },
            {
              fa: 'ثبت چک یا سفته تضمینی به‌عنوان بدهی به‌جای حساب‌های انتظامی.',
              en: 'Recording a guarantee cheque or note as a liability instead of in memorandum accounts.',
            },
          ],
        },
      ],
    },
    /* ───────────────────────────── 8 ───────────────────────────── */
    {
      id: 'exercises',
      title: { fa: 'تمرین‌ها', en: 'Exercises' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در همه تمرین‌ها همان نرخ‌های فرضی این درس را به کار ببرید: بیمه کارمند 7٪، بیمه کارفرما 23٪، مالیات حقوق 10٪ مازاد بر 30,000 و مالیات بر ارزش افزوده 10٪.',
            en: 'Use this lesson’s assumed rates throughout: employee insurance 7%, employer insurance 23%, payroll tax 10% above 30,000 and VAT 10%.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'ذخیره گارانتی جاروبرقی', en: 'A vacuum-cleaner warranty provision' },
          difficulty: 'easy',
          problem: {
            fa: 'شرکت آرام‌خانه در سال 1 تعداد 500 جاروبرقی به قیمت هر کدام 3,000 با گارانتی یک‌ساله می‌فروشد. تجربه نشان می‌دهد 4٪ دستگاه‌ها به تعمیر نیاز پیدا می‌کنند و هزینه هر تعمیر به‌طور متوسط 1,200 است. در سال 1 چهارده دستگاه تعمیر می‌شود: 10,800 قطعه از انبار و 6,000 دستمزد نقدی. جدا از این، مشتری‌ای شکایتی کرده که وکیل شرکت احتمال باخت آن را کم می‌داند. ثبت‌ها و مانده ذخیره پایان سال را به دست آورید.',
            en: 'Aram-Khaneh sells 500 vacuum cleaners at 3,000 each in Year 1, with a one-year warranty. Experience shows 4% of units need repair, at an average cost of 1,200 each. Fourteen units are repaired in Year 1: 10,800 of parts from stock and 6,000 of labour in cash. Separately, a customer has filed a claim the company’s lawyer thinks it will probably win. Record the entries and find the year-end provision balance.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'برآورد ذخیره', en: 'Estimate the provision' },
                  text: {
                    fa: '500 × 4٪ = 20 دستگاه؛ 20 × 1,200 = 24,000.',
                    en: '500 × 4% = 20 units; 20 × 1,200 = 24,000.',
                  },
                },
                {
                  title: { fa: 'تعمیرات واقعی', en: 'Actual repairs' },
                  text: {
                    fa: '10,800 + 6,000 = 16,800 (یعنی 14 × 1,200) از ذخیره کسر می‌شود.',
                    en: '10,800 + 6,000 = 16,800 (that is, 14 × 1,200) is charged against the provision.',
                  },
                },
                {
                  title: { fa: 'مانده پایان سال', en: 'Year-end balance' },
                  text: {
                    fa: '24,000 − 16,800 = 7,200 برای 6 دستگاهی که احتمالاً سال بعد تعمیر می‌شوند.',
                    en: '24,000 − 16,800 = 7,200 for the 6 units likely to be repaired next year.',
                  },
                },
                {
                  title: { fa: 'شکایت', en: 'The claim' },
                  text: {
                    fa: 'خروج منابع محتمل نیست، پس ذخیره‌ای ثبت نمی‌شود؛ اگر احتمال باخت ناچیز نباشد، در یادداشت‌ها به‌عنوان بدهی احتمالی افشا می‌شود.',
                    en: 'An outflow is not probable, so no provision is recorded; unless the chance of losing is remote, it is disclosed in the notes as a contingent liability.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'سال 1', en: 'Year 1' },
                  lines: [
                    { account: ac.warrantyExp, debit: 24000 },
                    { account: ac.warrantyProv, credit: 24000 },
                  ],
                },
                {
                  date: { fa: 'طی سال 1', en: 'During Year 1' },
                  lines: [
                    { account: ac.warrantyProv, debit: 16800 },
                    { account: ac.inventory, credit: 10800 },
                    { account: ac.cash, credit: 6000 },
                  ],
                },
              ],
            },
          ],
          answer: {
            fa: 'هزینه گارانتی سال 1: 24,000؛ مانده ذخیره پایان سال: 7,200؛ شکایت فقط افشا می‌شود.',
            en: 'Year 1 warranty expense: 24,000; year-end provision: 7,200; the claim is only disclosed.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'دو فصل مالیات بر ارزش افزوده', en: 'Two VAT quarters' },
          difficulty: 'medium',
          problem: {
            fa: 'فروشگاه ابزار پارس در فصل 1: کالا به مبلغ 600,000 نسیه می‌فروشد؛ کالا به بهای 380,000 نسیه می‌خرد؛ قفسه‌بندی فروشگاه به بهای 50,000 و تبلیغات به مبلغ 20,000 نقدی می‌خرد. همه مبالغ بدون مالیات‌اند و همه خریدها صورت‌حساب معتبر دارند. در فصل 2: فروش 200,000 و خرید کالا 300,000 است. ثبت‌های فصل 1، تهاتر و پرداخت آن، و تهاتر فصل 2 را بنویسید.',
            en: 'Pars Tools in quarter 1: sells goods for 600,000 on credit; buys goods for 380,000 on credit; buys shop shelving for 50,000 and advertising for 20,000 in cash. All amounts exclude VAT and every purchase has a valid tax invoice. In quarter 2: sales are 200,000 and goods purchased 300,000. Write the quarter 1 entries, its offset and payment, and the quarter 2 offset.',
          },
          hint: {
            fa: 'مالیات خرید دارایی ثابت و هزینه‌ها هم، اگر شرایط کسر را داشته باشد، قابل کسر است.',
            en: 'Input VAT on fixed assets and expenses is also reclaimable when the conditions are met.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'خلاصه مالیات فصل 1', en: 'Quarter 1 VAT summary' },
              head: [
                { fa: 'قلم', en: 'Item' },
                { fa: 'مبلغ بدون مالیات', en: 'Amount excl. VAT' },
                { fa: 'مالیات فروش', en: 'Output VAT' },
                { fa: 'مالیات خرید', en: 'Input VAT' },
              ],
              numericCols: [1, 2, 3],
              rows: [
                [ac.sales, 600000, 60000, blank],
                [{ fa: 'خرید کالا', en: 'Goods purchased' }, 380000, blank, 38000],
                [{ fa: 'قفسه‌بندی', en: 'Shelving' }, 50000, blank, 5000],
                [{ fa: 'تبلیغات', en: 'Advertising' }, 20000, blank, 2000],
                [total, blank, 60000, 45000],
              ],
            },
            {
              type: 'journal',
              title: { fa: 'فصل 1', en: 'Quarter 1' },
              entries: [
                {
                  lines: [
                    { account: ac.ar, debit: 660000 },
                    { account: ac.sales, credit: 600000 },
                    { account: ac.outputVat, credit: 60000 },
                  ],
                },
                {
                  lines: [
                    { account: ac.inventory, debit: 380000 },
                    { account: ac.inputVat, debit: 38000 },
                    { account: ac.ap, credit: 418000 },
                  ],
                },
                {
                  lines: [
                    { account: ac.officeEq, debit: 50000 },
                    { account: ac.advertising, debit: 20000 },
                    { account: ac.inputVat, debit: 7000 },
                    { account: ac.cash, credit: 77000 },
                  ],
                  memo: { fa: 'قفسه‌بندی و تبلیغات با مالیات 5,000 + 2,000.', en: 'Shelving and advertising with 5,000 + 2,000 VAT.' },
                },
                {
                  date: { fa: 'پایان فصل 1', en: 'End of quarter 1' },
                  lines: [
                    { account: ac.outputVat, debit: 60000 },
                    { account: ac.inputVat, credit: 45000 },
                    { account: ac.vatPayable, credit: 15000 },
                  ],
                },
                {
                  lines: [
                    { account: ac.vatPayable, debit: 15000 },
                    { account: ac.cash, credit: 15000 },
                  ],
                  memo: { fa: 'پرداخت با اظهارنامه فصل 1.', en: 'Paid with the quarter 1 return.' },
                },
              ],
            },
            {
              type: 'journal',
              title: { fa: 'تهاتر فصل 2: مالیات خرید بیشتر از فروش', en: 'Quarter 2 offset: input exceeds output' },
              entries: [
                {
                  date: { fa: 'پایان فصل 2', en: 'End of quarter 2' },
                  lines: [
                    { account: ac.outputVat, debit: 20000 },
                    { account: ac.vatReceivable, debit: 10000 },
                    { account: ac.inputVat, credit: 30000 },
                  ],
                  memo: {
                    fa: 'مالیات فروش 20,000 و مالیات خرید 30,000؛ 10,000 طلب شرکت که طبق قانون به دوره بعد منتقل یا مسترد می‌شود.',
                    en: 'Output 20,000 and input 30,000; the 10,000 is a claim carried forward or refunded as the law allows.',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: 'فصل 1: مالیات پرداختنی 15,000 (60,000 − 45,000)؛ فصل 2: طلب مالیاتی 10,000.',
            en: 'Quarter 1: VAT payable 15,000 (60,000 − 45,000); quarter 2: a 10,000 VAT receivable.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'یک ماه کامل حقوق و دستمزد', en: 'A full payroll month' },
          difficulty: 'medium',
          problem: {
            fa: 'شرکت طراحی نگار دو کارمند دارد: ندا با حقوق ناخالص 36,000 و حمید با حقوق ناخالص 44,000. با نرخ‌های فرضی درس، لیست حقوق را تهیه کنید، بهای کل نیروی کار را حساب کنید و ثبت‌های پایان ماه، پرداخت خالص حقوق و پرداخت بیمه و مالیات در ماه بعد را بنویسید.',
            en: 'Negar Design has two employees: Neda with gross pay of 36,000 and Hamid with 44,000. Using the lesson’s assumed rates, prepare the payroll sheet, compute the total labour cost, and write the month-end entries, the net-pay transfer and the next month’s payment of insurance and tax.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'لیست حقوق', en: 'Payroll sheet' },
              head: [
                { fa: 'کارمند', en: 'Employee' },
                { fa: 'ناخالص', en: 'Gross' },
                { fa: 'بیمه کارمند 7٪', en: 'Employee SS 7%' },
                { fa: 'مالیات', en: 'Tax' },
                { fa: 'خالص', en: 'Net' },
                { fa: 'بیمه کارفرما 23٪', en: 'Employer SS 23%' },
              ],
              numericCols: [1, 2, 3, 4, 5],
              rows: [
                [{ fa: 'ندا', en: 'Neda' }, 36000, 2520, 600, 32880, 8280],
                [{ fa: 'حمید', en: 'Hamid' }, 44000, 3080, 1400, 39520, 10120],
                [total, 80000, 5600, 2000, 72400, 18400],
              ],
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'مالیات', en: 'Tax' },
                  text: {
                    fa: 'ندا: (36,000 − 30,000) × 10٪ = 600. حمید: (44,000 − 30,000) × 10٪ = 1,400.',
                    en: 'Neda: (36,000 − 30,000) × 10% = 600. Hamid: (44,000 − 30,000) × 10% = 1,400.',
                  },
                },
                {
                  title: { fa: 'بهای کل', en: 'Total cost' },
                  text: {
                    fa: '80,000 + 18,400 = 98,400. پرداختنی به تأمین اجتماعی: 5,600 + 18,400 = 24,000.',
                    en: '80,000 + 18,400 = 98,400. Owed to social security: 5,600 + 18,400 = 24,000.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: { fa: 'پایان ماه', en: 'Month-end' },
                  lines: [
                    { account: ac.salaries, debit: 80000 },
                    { account: ac.ssPayable, credit: 5600 },
                    { account: ac.taxPayable, credit: 2000 },
                    { account: ac.salPayable, credit: 72400 },
                  ],
                },
                {
                  date: { fa: 'پایان ماه', en: 'Month-end' },
                  lines: [
                    { account: ac.employerIns, debit: 18400 },
                    { account: ac.ssPayable, credit: 18400 },
                  ],
                },
                {
                  date: { fa: 'پایان ماه', en: 'Month-end' },
                  lines: [
                    { account: ac.salPayable, debit: 72400 },
                    { account: ac.cash, credit: 72400 },
                  ],
                },
                {
                  date: { fa: 'ماه بعد', en: 'Next month' },
                  lines: [
                    { account: ac.ssPayable, debit: 24000 },
                    { account: ac.taxPayable, debit: 2000 },
                    { account: ac.cash, credit: 26000 },
                  ],
                },
              ],
            },
          ],
          answer: {
            fa: 'خالص پرداختی 72,400؛ بهای کل نیروی کار 98,400؛ پرداخت ماه بعد 26,000 (بیمه 24,000 و مالیات 2,000).',
            en: 'Net pay 72,400; total labour cost 98,400; next month’s payment 26,000 (insurance 24,000 and tax 2,000).',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'جدول وام، بهره تحقق‌یافته و حصه جاری', en: 'Loan schedule, accrued interest and current portion' },
          difficulty: 'hard',
          problem: {
            fa: 'شرکت حمل‌ونقل راهوار در ابتدای ماه 7 سال 1 وامی به مبلغ 200,000 با نرخ 18٪ دریافت می‌کند. وام در 4 قسط سالانه مساوی اصل (هر قسط 50,000 به‌علاوه بهره مانده) در سالگرد دریافت (ابتدای ماه 7) بازپرداخت می‌شود. سال مالی در پایان ماه 12 بسته می‌شود و شرکت بهره را فقط در پایان سال و هنگام پرداخت ثبت می‌کند. (الف) جدول بازپرداخت را تهیه کنید. (ب) ثبت‌های دریافت وام، پایان سال 1 و پرداخت قسط اول را بنویسید. (ج) وام و بهره را در ترازنامه پایان سال 1 طبقه‌بندی کنید.',
            en: 'Rahvar Transport receives a 200,000 loan at 18% at the start of month 7 of Year 1. It is repaid in 4 equal annual principal instalments (50,000 each plus interest on the balance) on each anniversary (the start of month 7). The financial year ends at the end of month 12, and the company records interest only at year-end and on payment. (a) Prepare the repayment schedule. (b) Record the loan receipt, the Year 1 year-end entry and the first instalment. (c) Classify the loan and interest on the Year 1 balance sheet.',
          },
          hint: {
            fa: 'از ابتدای ماه 7 تا پایان ماه 12 شش ماه است.',
            en: 'From the start of month 7 to the end of month 12 is six months.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: '(الف) جدول بازپرداخت (دوره‌های یک‌ساله از سالگرد وام)', en: '(a) Repayment schedule (one-year periods from the loan date)' },
              head: [
                { fa: 'قسط', en: 'Instalment' },
                { fa: 'مانده ابتدای دوره', en: 'Opening balance' },
                { fa: 'بهره 18٪', en: 'Interest 18%' },
                { fa: 'اصل', en: 'Principal' },
                { fa: 'قسط کل', en: 'Total payment' },
                { fa: 'مانده پایان دوره', en: 'Closing balance' },
              ],
              numericCols: [1, 2, 3, 4, 5],
              rows: [
                [{ fa: 'قسط 1', en: 'Instalment 1' }, 200000, 36000, 50000, 86000, 150000],
                [{ fa: 'قسط 2', en: 'Instalment 2' }, 150000, 27000, 50000, 77000, 100000],
                [{ fa: 'قسط 3', en: 'Instalment 3' }, 100000, 18000, 50000, 68000, 50000],
                [{ fa: 'قسط 4', en: 'Instalment 4' }, 50000, 9000, 50000, 59000, 0],
                [total, blank, 90000, 200000, 290000, blank],
              ],
            },
            {
              type: 'journal',
              title: { fa: '(ب) ثبت‌ها', en: '(b) Entries' },
              entries: [
                {
                  date: { fa: 'ابتدای ماه 7، سال 1', en: 'Start of month 7, Year 1' },
                  lines: [
                    { account: ac.cash, debit: 200000 },
                    { account: ac.loan, credit: 200000 },
                  ],
                },
                {
                  date: { fa: 'پایان ماه 12، سال 1', en: 'End of month 12, Year 1' },
                  lines: [
                    { account: ac.interestExp, debit: 18000 },
                    { account: ac.interestPayable, credit: 18000 },
                  ],
                  memo: { fa: 'بهره 6 ماه: 200,000 × 18٪ × 6/12.', en: 'Six months’ interest: 200,000 × 18% × 6/12.' },
                },
                {
                  date: { fa: 'ابتدای ماه 7، سال 2', en: 'Start of month 7, Year 2' },
                  lines: [
                    { account: ac.interestPayable, debit: 18000 },
                    { account: ac.interestExp, debit: 18000 },
                    { account: ac.loan, debit: 50000 },
                    { account: ac.cash, credit: 86000 },
                  ],
                  memo: {
                    fa: 'بهره سال 1 قبلاً ثبت شده؛ 18,000 بهره 6 ماه اول سال 2 است.',
                    en: 'Year 1’s share was already accrued; 18,000 is interest for the first six months of Year 2.',
                  },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: '(ج) ترازنامه پایان سال 1', en: '(c) Balance sheet at the end of Year 1' },
              head: [
                { fa: 'قلم', en: 'Item' },
                { fa: 'طبقه', en: 'Class' },
                { fa: 'مبلغ', en: 'Amount' },
              ],
              numericCols: [2],
              rows: [
                [ac.currentLoan, cur, 50000],
                [ac.interestPayable, cur, 18000],
                [ac.loan, { fa: 'غیرجاری', en: 'Non-current' }, 150000],
                [total, blank, 218000],
              ],
            },
          ],
          answer: {
            fa: 'بهره کل 90,000؛ بهره پرداختنی پایان سال 1: 18,000؛ حصه جاری 50,000 و بخش غیرجاری 150,000؛ قسط اول 86,000.',
            en: 'Total interest 90,000; Year 1 interest payable 18,000; current portion 50,000 and non-current 150,000; first instalment 86,000.',
          },
        },
      ],
    },
    /* ───────────────────────────── 9 ───────────────────────────── */
    {
      id: 'summary',
      title: { fa: 'جمع‌بندی', en: 'Summary' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              fa: 'بدهی تعهد فعلی ناشی از رویداد گذشته است؛ آنچه ظرف 12 ماه تسویه می‌شود جاری و بقیه غیرجاری است.',
              en: 'A liability is a present obligation from a past event; what is settled within 12 months is current, the rest non-current.',
            },
            {
              fa: 'چک مدت‌دار صادره بدهی را از حساب‌های پرداختنی به اسناد پرداختنی می‌برد؛ هزینه‌های تحقق‌یافته بدون فاکتور هم باید برآورد و ثبت شوند.',
              en: 'A post-dated cheque moves a debt from accounts payable to notes payable; incurred expenses without an invoice must still be estimated and recorded.',
            },
            {
              fa: 'خالص حقوق = ناخالص − کسورات؛ کسورات کارمند و سهم بیمه کارفرما تا زمان پرداخت بدهی‌اند و بهای کل نیروی کار = ناخالص + سهم کارفرما.',
              en: 'Net pay = gross − deductions; employee deductions and the employer’s share are liabilities until paid, and total labour cost = gross + employer’s share.',
            },
            {
              fa: 'مالیات فروش بدهی و مالیات خرید قابل کسر طلب است؛ در پایان دوره تهاتر می‌شوند و تفاوت پرداخت یا منتقل می‌شود.',
              en: 'Output VAT is a liability and reclaimable input VAT a claim; they are offset at period-end and the difference is paid or carried forward.',
            },
            {
              fa: 'هر قسط وام به اصل و بهره تفکیک می‌شود؛ اقساط 12 ماه آینده حصه جاری‌اند.',
              en: 'Each loan payment splits into principal and interest; instalments due in the next 12 months are the current portion.',
            },
            {
              fa: 'ذخیره وقتی ثبت می‌شود که تعهد فعلی، خروج محتمل و برآورد قابل اتکا وجود داشته باشد؛ در غیر این صورت بدهی احتمالی فقط افشا می‌شود.',
              en: 'A provision is recorded when there is a present obligation, a probable outflow and a reliable estimate; otherwise a contingent liability is only disclosed.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'بدهی', en: 'Liability' },
              def: {
                fa: 'تعهد فعلی ناشی از رویدادهای گذشته که تسویه آن به خروج منابع می‌انجامد.',
                en: 'A present obligation from past events whose settlement leads to an outflow of resources.',
              },
            },
            {
              term: { fa: 'بدهی جاری', en: 'Current liability' },
              def: {
                fa: 'بدهی‌ای که انتظار می‌رود ظرف 12 ماه یا چرخه عادی عملیات تسویه شود.',
                en: 'A liability expected to be settled within 12 months or the normal operating cycle.',
              },
            },
            {
              term: { fa: 'اسناد پرداختنی', en: 'Notes payable' },
              def: {
                fa: 'بدهی مستند به چک مدت‌دار یا سفته که سررسید مشخص دارد.',
                en: 'A debt evidenced by a post-dated cheque or promissory note with a fixed due date.',
              },
            },
            {
              term: { fa: 'هزینه‌های پرداختنی', en: 'Accrued expenses' },
              def: {
                fa: 'هزینه‌های تحقق‌یافته‌ای که تا پایان دوره پرداخت یا صورت‌حساب نشده‌اند.',
                en: 'Expenses incurred but not yet paid or invoiced at period-end.',
              },
            },
            {
              term: { fa: 'حقوق ناخالص و خالص', en: 'Gross and net pay' },
              def: {
                fa: 'ناخالص: کل حقوق و مزایای کسب‌شده؛ خالص: مبلغی که پس از کسورات به کارمند پرداخت می‌شود.',
                en: 'Gross: total pay earned; net: what the employee receives after deductions.',
              },
            },
            {
              term: { fa: 'بیمه تأمین اجتماعی (سهم کارمند و کارفرما)', en: 'Social security (employee and employer shares)' },
              def: {
                fa: 'سهم کارمند از حقوق او کسر می‌شود؛ سهم کارفرما هزینه اضافه شرکت است؛ هر دو به سازمان تأمین اجتماعی پرداخت می‌شوند.',
                en: 'The employee’s share is deducted from pay; the employer’s share is an extra company cost; both are paid to the social security organisation.',
              },
            },
            {
              term: { fa: 'مالیات بر ارزش افزوده فروش و خرید', en: 'Output and input VAT' },
              def: {
                fa: 'مالیات گرفته‌شده روی فروش (بدهی) و مالیات پرداخت‌شده روی خرید (قابل کسر).',
                en: 'Tax charged on sales (a liability) and tax paid on purchases (reclaimable).',
              },
            },
            {
              term: { fa: 'حصه جاری وام بلندمدت', en: 'Current portion of long-term debt' },
              def: {
                fa: 'بخشی از اصل وام بلندمدت که ظرف 12 ماه آینده سررسید می‌شود.',
                en: 'The part of a long-term loan’s principal due within the next 12 months.',
              },
            },
            {
              term: { fa: 'ذخیره', en: 'Provision' },
              def: {
                fa: 'بدهی با زمان یا مبلغ نامعین که شرایط شناخت را دارد، مانند ذخیره گارانتی.',
                en: 'A liability of uncertain timing or amount that meets the recognition criteria, such as a warranty provision.',
              },
            },
            {
              term: { fa: 'بدهی احتمالی', en: 'Contingent liability' },
              def: {
                fa: 'تعهد ممکنی که خروج منابع آن محتمل نیست یا قابل برآورد نیست؛ فقط افشا می‌شود.',
                en: 'A possible obligation whose outflow is not probable or not measurable; it is only disclosed.',
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
        fa: 'مانده وام پنج‌ساله شرکتی 100,000 است و 20,000 از اصل آن ظرف 12 ماه آینده پرداخت می‌شود. در ترازنامه چگونه نشان داده می‌شود؟',
        en: 'A company’s five-year loan has a 100,000 balance, and 20,000 of principal is due within the next 12 months. How is it shown on the balance sheet?',
      },
      options: [
        { fa: '100,000 بدهی غیرجاری', en: '100,000 non-current' },
        { fa: '100,000 بدهی جاری', en: '100,000 current' },
        { fa: '20,000 جاری و 80,000 غیرجاری', en: '20,000 current and 80,000 non-current' },
        { fa: '80,000 جاری و 20,000 غیرجاری', en: '80,000 current and 20,000 non-current' },
      ],
      answer: 2,
      explain: {
        fa: 'فقط بخشی که ظرف 12 ماه سررسید می‌شود (20,000) حصه جاری است و باقی (80,000) غیرجاری می‌ماند. نشان دادن کل وام در یک گروه، نقدینگی کوتاه‌مدت را اشتباه نشان می‌دهد.',
        en: 'Only the part due within 12 months (20,000) is the current portion; the rest (80,000) stays non-current. Putting the whole loan in one group misstates short-term liquidity.',
      },
    },
    {
      q: {
        fa: 'حقوق ناخالص کارمندی 50,000، سهم بیمه کارمند 7٪ و مالیات حقوق او 2,000 است. خالص پرداختی چقدر است؟',
        en: 'An employee’s gross pay is 50,000, the employee insurance share is 7% and income tax withheld is 2,000. What is net pay?',
      },
      options: [
        { fa: '44,500', en: '44,500' },
        { fa: '46,500', en: '46,500' },
        { fa: '48,000', en: '48,000' },
        { fa: '33,000', en: '33,000' },
      ],
      answer: 0,
      explain: {
        fa: '50,000 − (7٪ × 50,000 = 3,500) − 2,000 = 44,500. عدد 46,500 مالیات را فراموش کرده و 33,000 سهم بیمه کارفرما (23٪) را هم از حقوق کارمند کم کرده است؛ سهم کارفرما از حقوق کارمند کسر نمی‌شود.',
        en: '50,000 − (7% × 50,000 = 3,500) − 2,000 = 44,500. The 46,500 forgets the tax, and 33,000 also deducts the employer’s 23% from the employee; the employer’s share is never taken from the employee’s pay.',
      },
    },
    {
      q: {
        fa: 'با حقوق ناخالص 50,000 و سهم بیمه کارفرما 23٪، بهای کل این کارمند برای شرکت چقدر است؟',
        en: 'With gross pay of 50,000 and a 23% employer insurance share, what is this employee’s total cost to the company?',
      },
      options: [
        { fa: '50,000', en: '50,000' },
        { fa: '53,500', en: '53,500' },
        { fa: '61,500', en: '61,500' },
        { fa: '65,000', en: '65,000' },
      ],
      answer: 2,
      explain: {
        fa: 'بهای کل = ناخالص + سهم کارفرما = 50,000 + 11,500 = 61,500. سهم بیمه کارمند (7٪) بخشی از همان 50,000 است و هزینه اضافه نیست؛ پس 65,000 (افزودن 30٪) اشتباه است.',
        en: 'Total cost = gross + employer share = 50,000 + 11,500 = 61,500. The employee’s 7% is part of the 50,000 itself, not an extra cost, so 65,000 (adding 30%) is wrong.',
      },
    },
    {
      q: {
        fa: 'سهم بیمه‌ای که از حقوق کارمند کسر شده و هنوز به تأمین اجتماعی پرداخت نشده، در دفاتر شرکت چیست؟',
        en: 'The insurance share deducted from an employee’s pay and not yet paid to social security is, in the company’s books:',
      },
      options: [
        { fa: 'هزینه شرکت', en: 'A company expense' },
        { fa: 'بدهی شرکت تا زمان پرداخت', en: 'A company liability until paid' },
        { fa: 'درآمد شرکت', en: 'Company revenue' },
        { fa: 'کاهش هزینه حقوق', en: 'A reduction of salaries expense' },
      ],
      answer: 1,
      explain: {
        fa: 'این مبلغ پول کارمند است که شرکت امانت نگه داشته تا به سازمان بپردازد؛ پس بدهی است. هزینه حقوق با مبلغ ناخالص ثبت شده و کسر بیمه آن را کم نمی‌کند.',
        en: 'It is the employee’s money held in trust for the authority, so it is a liability. Salaries expense was recorded at gross, and the deduction does not reduce it.',
      },
    },
    {
      q: {
        fa: 'در یک فصل، مالیات بر ارزش افزوده فروش 70,000 و مالیات خرید قابل کسر 52,000 است. نتیجه چیست؟',
        en: 'In a quarter, output VAT is 70,000 and reclaimable input VAT is 52,000. What is the result?',
      },
      options: [
        { fa: '18,000 طلب از اداره مالیات', en: 'An 18,000 claim on the tax office' },
        { fa: '122,000 پرداختنی', en: '122,000 payable' },
        { fa: '7,000 پرداختنی', en: '7,000 payable' },
        { fa: '18,000 پرداختنی', en: '18,000 payable' },
      ],
      answer: 3,
      explain: {
        fa: 'پرداختنی = مالیات فروش − مالیات خرید = 70,000 − 52,000 = 18,000. چون مالیات فروش بیشتر است، شرکت بدهکار است نه طلبکار؛ و دو مبلغ جمع نمی‌شوند.',
        en: 'Payable = output − input = 70,000 − 52,000 = 18,000. Because output is larger, the company owes rather than claims; and the two amounts are never added.',
      },
    },
    {
      q: {
        fa: 'شرکتی کالایی با صورت‌حساب معتبر می‌خرد و مالیات بر ارزش افزوده آن قابل کسر است. این مالیات چگونه ثبت می‌شود؟',
        en: 'A company buys goods with a valid tax invoice, and the VAT on them is reclaimable. How is that VAT recorded?',
      },
      options: [
        {
          fa: 'بدهکار حساب مالیات بر ارزش افزوده خرید، تا از مالیات فروش کسر شود',
          en: 'Debit Input VAT, to be offset against output VAT',
        },
        { fa: 'به بهای موجودی کالا اضافه می‌شود', en: 'Added to the cost of inventory' },
        { fa: 'هزینه همان دوره است', en: 'An expense of the period' },
        { fa: 'بستانکار حساب مالیات بر ارزش افزوده فروش', en: 'Credit Output VAT' },
      ],
      answer: 0,
      explain: {
        fa: 'مالیات خرید قابل کسر طلبی است که با مالیات فروش تهاتر می‌شود؛ پس در حساب جداگانه بدهکار می‌شود. فقط اگر قابل کسر نباشد به بهای کالا یا هزینه اضافه می‌شود.',
        en: 'Reclaimable input VAT is a claim offset against output VAT, so it is debited to its own account. Only when it is not reclaimable is it added to the cost of the goods or to expense.',
      },
    },
    {
      q: {
        fa: 'مانده وامی 100,000 با نرخ سالانه 18٪ است. در پایان سال مالی 4 ماه از آخرین پرداخت بهره گذشته است. بهره تحقق‌یافته چقدر است؟',
        en: 'A loan of 100,000 carries 18% a year. At year-end, 4 months have passed since interest was last paid. How much interest has accrued?',
      },
      options: [
        { fa: '18,000', en: '18,000' },
        { fa: '6,000', en: '6,000' },
        { fa: '4,500', en: '4,500' },
        { fa: '1,500', en: '1,500' },
      ],
      answer: 1,
      explain: {
        fa: 'بهره = 100,000 × 18٪ × 4/12 = 6,000. عدد 18,000 بهره یک سال کامل است و 1,500 بهره یک ماه.',
        en: 'Interest = 100,000 × 18% × 4/12 = 6,000. The 18,000 is a full year and 1,500 is one month.',
      },
    },
    {
      q: {
        fa: 'وکیل شرکت می‌گوید باخت در یک دعوای حقوقی **محتمل** است و بهترین برآورد خسارت 30,000 است (ادعای طرف مقابل 50,000). چه باید کرد؟',
        en: 'The company’s lawyer says losing a lawsuit is **probable** and the best estimate of the loss is 30,000 (the claimant asks for 50,000). What should be done?',
      },
      options: [
        { fa: 'ذخیره 30,000 ثبت شود', en: 'Record a 30,000 provision' },
        { fa: 'فقط در یادداشت‌ها افشا شود', en: 'Disclose it in the notes only' },
        { fa: 'تا صدور حکم دادگاه هیچ اقدامی لازم نیست', en: 'Do nothing until the court rules' },
        { fa: 'ذخیره 50,000 ثبت شود', en: 'Record a 50,000 provision' },
      ],
      answer: 0,
      explain: {
        fa: 'هر سه شرط برقرار است: تعهد فعلی، خروج محتمل و برآورد قابل اتکا؛ پس ذخیره ثبت می‌شود و مبلغ آن بهترین برآورد (30,000) است، نه رقم ادعا. افشای صرف برای حالتی است که خروج فقط ممکن باشد.',
        en: 'All three conditions hold: a present obligation, a probable outflow and a reliable estimate, so a provision is recorded at the best estimate (30,000), not the amount claimed. Disclosure alone is for an outflow that is only possible.',
      },
    },
    {
      q: {
        fa: 'فروش سال 200,000 و هزینه گارانتی مورد انتظار 3٪ فروش است. در طول سال 4,500 تعمیر گارانتی انجام شده است. مانده ذخیره گارانتی پایان سال چقدر است؟',
        en: 'Sales for the year are 200,000 and expected warranty cost is 3% of sales. Warranty repairs of 4,500 were done during the year. What is the year-end warranty provision?',
      },
      options: [
        { fa: '6,000', en: '6,000' },
        { fa: '4,500', en: '4,500' },
        { fa: '1,500', en: '1,500' },
        { fa: '10,500', en: '10,500' },
      ],
      answer: 2,
      explain: {
        fa: 'ذخیره = 200,000 × 3٪ = 6,000؛ تعمیرات 4,500 از آن کسر می‌شود: 6,000 − 4,500 = 1,500. عدد 6,000 هزینه سال است نه مانده پایان سال، و 10,500 تعمیرات را دوباره به ذخیره افزوده است.',
        en: 'Provision = 200,000 × 3% = 6,000; the 4,500 of repairs is charged against it: 6,000 − 4,500 = 1,500. The 6,000 is the year’s expense, not the closing balance, and 10,500 wrongly adds the repairs.',
      },
    },
    {
      q: {
        fa: 'کدام یک از حساب‌های زیر **بدهی** است؟',
        en: 'Which of these accounts is a **liability**?',
      },
      options: [
        { fa: 'ذخیره مطالبات مشکوک‌الوصول', en: 'Allowance for doubtful accounts' },
        { fa: 'استهلاک انباشته', en: 'Accumulated depreciation' },
        { fa: 'ذخیره کاهش ارزش موجودی کالا', en: 'Inventory write-down allowance' },
        { fa: 'ذخیره گارانتی', en: 'Warranty provision' },
      ],
      answer: 3,
      explain: {
        fa: 'ذخیره گارانتی تعهدی به مشتریان است، پس بدهی است. سه گزینه دیگر حساب‌های کاهنده دارایی‌اند که ارزش دریافتنی‌ها، دارایی ثابت یا موجودی را کم می‌کنند، هرچند دو تای آن‌ها در فارسی «ذخیره» نامیده می‌شوند.',
        en: 'The warranty provision is an obligation to customers, so it is a liability. The other three are contra-asset accounts reducing receivables, fixed assets or inventory, even though two of them are called “zakhireh” in Persian.',
      },
    },
  ],
}
