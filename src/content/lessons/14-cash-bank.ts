import type { Lesson } from '../types'

/** Empty table cell. */
const blank = { fa: '', en: '' }
const day = (n: number) => ({ fa: `روز ${n}`, en: `Day ${n}` })
const total = { fa: 'جمع', en: 'Total' }
const yes = { fa: 'بله', en: 'Yes' }

const ac = {
  bank: { fa: 'موجودی نقد: بانک الف', en: 'Cash: Bank A' },
  petty: { fa: 'تنخواه‌گردان', en: 'Petty cash' },
  cash: { fa: 'موجودی نقد', en: 'Cash' },
  postage: { fa: 'هزینه پست و پیک', en: 'Postage and courier expense' },
  officeSupplies: { fa: 'هزینه ملزومات اداری', en: 'Office supplies expense' },
  transport: { fa: 'هزینه ایاب و ذهاب', en: 'Transport expense' },
  refreshments: { fa: 'هزینه پذیرایی', en: 'Refreshments expense' },
  repairs: { fa: 'هزینه تعمیرات و نگهداری', en: 'Repairs and maintenance expense' },
  shortOver: { fa: 'کسری و اضافه صندوق', en: 'Cash short and over' },
  depositIncome: { fa: 'درآمد سود سپرده بانکی', en: 'Deposit profit (interest) income' },
  bankCharges: { fa: 'هزینه کارمزد بانکی', en: 'Bank charges expense' },
  ap: { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
  sales: { fa: 'فروش', en: 'Sales' },
}

export const lesson: Lesson = {
  slug: 'cash-bank',
  number: 12,
  level: 'intermediate',
  minutes: 32,
  icon: 'Landmark',
  tone: 'asset',
  title: { fa: 'وجه نقد، بانک و صورت مغایرت بانکی', en: 'Cash, Banks and Bank Reconciliation' },
  summary: {
    fa: 'وجه نقد را با کنترل داخلی محافظت کنید، تنخواه‌گردان را به روش تنخواه ثابت اداره کنید و صورت مغایرت بانکی را گام‌به‌گام تهیه کنید تا دفاتر و صورت‌حساب بانک به یک رقم درست برسند.',
    en: 'Protect cash with internal control, run a petty-cash fund on the imprest system, and prepare a bank reconciliation step by step so that the books and the bank statement agree on one correct figure.',
  },
  objectives: [
    {
      fa: 'وجه نقد و معادل‌های نقد را تعریف کنید و اقلامی را که نقد نیستند تشخیص دهید',
      en: 'Define cash and cash equivalents and recognise items that are not cash',
    },
    {
      fa: 'اصول کنترل داخلی وجه نقد را توضیح دهید و ضعف‌های کنترلی را پیدا کنید',
      en: 'Explain the principles of internal control over cash and find control weaknesses',
    },
    {
      fa: 'تنخواه‌گردان را برقرار، مصرف و تأمین کنید و ثبت‌های آن را بنویسید',
      en: 'Establish, use and replenish a petty-cash fund and record its entries',
    },
    {
      fa: 'صورت مغایرت بانکی کامل تهیه و ثبت‌های لازم را در دفاتر شرکت انجام دهید',
      en: 'Prepare a complete bank reconciliation and record the entries the company needs',
    },
    {
      fa: 'کسری و اضافه صندوق را شناسایی و ثبت کنید',
      en: 'Identify and record cash shortages and overages',
    },
  ],
  sections: [
    {
      id: 'what-is-cash',
      title: { fa: 'وجه نقد چیست و چرا مراقبت ویژه می‌خواهد؟', en: 'What Counts as Cash, and Why It Needs Special Care' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'مدیر شرکت خدمات فنی آرتا در پایان ماه دو عدد متفاوت جلوی خود دارد: دفاتر شرکت می‌گوید در حساب جاری 45,470 داریم، اما صورت‌حساب بانک 48,600 نشان می‌دهد. کدام درست است؟ هیچ‌کدام! در این درس می‌بینیم چرا این دو رقم تقریباً هیچ‌وقت برابر نیستند، چطور رقم درست را پیدا کنیم و چطور جلوی گم شدن یا سوءاستفاده از وجه نقد را بگیریم.',
            en: 'At month-end the manager of Arta Technical Services has two different numbers in front of her: the company’s books say the current account holds 45,470, but the bank statement shows 48,600. Which is right? Neither! In this lesson we see why the two figures almost never agree, how to find the correct one, and how to keep cash from going missing or being misused.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'در حسابداری، **موجودی نقد** فقط اسکناس داخل صندوق نیست. هر چیزی که شرکت می‌تواند هر لحظه و به ارزش اسمی خرج یا برداشت کند، جزو موجودی نقد است: وجه نقد صندوق، تنخواه‌گردان، مانده حساب‌های جاری و سپرده‌های کوتاه‌مدتی که هر زمان قابل برداشت‌اند. **معادل‌های نقد** سرمایه‌گذاری‌های بسیار کوتاه‌مدت و نقدشونده‌ای‌اند که به مبلغ معلومی نقد می‌شوند و خطر تغییر ارزششان ناچیز است؛ معمولاً سررسیدشان از تاریخ خرید سه ماه یا کمتر است (IAS 7).',
            en: 'In accounting, **cash** is more than the notes in the cash box. It covers anything the company can spend or withdraw at any moment at face value: cash on hand, petty cash, current-account balances and short-term deposits that can be withdrawn at any time. **Cash equivalents** are very short-term, highly liquid investments that convert to a known amount of cash with an insignificant risk of change in value; usually they mature within three months of purchase (IAS 7).',
          },
        },
        {
          type: 'table',
          caption: { fa: 'نقد است یا نه؟', en: 'Is it cash?' },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'طبقه‌بندی', en: 'Classification' },
            { fa: 'دلیل', en: 'Why' },
          ],
          rows: [
            [
              { fa: 'وجه نقد صندوق و تنخواه‌گردان', en: 'Cash on hand and petty cash' },
              { fa: 'موجودی نقد', en: 'Cash' },
              { fa: 'در اختیار شرکت و فوراً قابل خرج', en: 'Held by the company and spendable at once' },
            ],
            [
              { fa: 'مانده حساب جاری بانکی', en: 'Current-account balance' },
              { fa: 'موجودی نقد', en: 'Cash' },
              { fa: 'هر لحظه قابل برداشت', en: 'Withdrawable at any moment' },
            ],
            [
              { fa: 'سپرده کوتاه‌مدت قابل برداشت در هر زمان', en: 'Short-term deposit withdrawable at any time' },
              { fa: 'موجودی نقد', en: 'Cash' },
              { fa: 'برداشت بدون محدودیت', en: 'No restriction on withdrawal' },
            ],
            [
              {
                fa: 'اوراق بسیار کوتاه‌مدت با سررسید سه ماه یا کمتر از تاریخ خرید (مثلاً اسناد خزانه)',
                en: 'Very short-term securities maturing within three months of purchase (e.g. treasury bills)',
              },
              { fa: 'معادل نقد', en: 'Cash equivalent' },
              { fa: 'نقدشونده، با مبلغ معلوم و خطر ناچیز', en: 'Liquid, known amount, insignificant risk' },
            ],
            [
              { fa: 'سپرده بلندمدت یک‌ساله', en: 'One-year term deposit' },
              { fa: 'سرمایه‌گذاری کوتاه‌مدت', en: 'Short-term investment' },
              { fa: 'پیش از سررسید به‌راحتی قابل برداشت نیست', en: 'Not freely withdrawable before maturity' },
            ],
            [
              { fa: 'چک مدت‌دار دریافتی از مشتری', en: 'Post-dated cheque from a customer' },
              { fa: 'اسناد دریافتنی', en: 'Notes receivable' },
              { fa: 'تا سررسید وصول نمی‌شود؛ درس حساب‌ها و اسناد دریافتنی و چک', en: 'Not collectable before its date; see the lesson on receivables and cheques' },
            ],
            [
              { fa: 'سپرده مسدودشده بابت ضمانت‌نامه بانکی', en: 'Deposit blocked as security for a bank guarantee' },
              { fa: 'سپرده محدودشده (نقد نیست)', en: 'Restricted deposit (not cash)' },
              { fa: 'شرکت آزادانه نمی‌تواند از آن استفاده کند', en: 'The company cannot use it freely' },
            ],
            [
              { fa: 'تمبر پستی', en: 'Postage stamps' },
              { fa: 'پیش‌پرداخت یا ملزومات', en: 'Prepaid expense or supplies' },
              { fa: 'برای مصرف است، نه برای سپرده‌گذاری', en: 'Meant to be used up, not deposited' },
            ],
            [
              { fa: 'رسید مساعده کارمند در صندوق', en: 'An employee’s IOU in the cash box' },
              { fa: 'سایر حساب‌های دریافتنی', en: 'Other receivables' },
              { fa: 'طلب از کارمند است، نه پول', en: 'A claim on the employee, not money' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'چرا وجه نقد مراقبت ویژه می‌خواهد؟', en: 'Why cash needs special care' },
          text: {
            fa: 'وجه نقد کوچک، بی‌نام و جابه‌جاشدنی است و تقریباً همه رویدادهای شرکت از آن می‌گذرند؛ پس بیشترین خطر خطا و سوءاستفاده را دارد. از سوی دیگر، کمبود وجه نقد حتی یک شرکت سودآور را هم زمین‌گیر می‌کند. به همین دلیل، وجه نقد دو عادت جدی می‌خواهد: **کنترل داخلی** و **تطبیق منظم با بانک**.',
            en: 'Cash is small, anonymous and easy to move, and nearly every transaction passes through it, so it carries the highest risk of error and misuse. At the same time, running out of cash can stop even a profitable company. That is why cash needs two serious habits: **internal control** and **regular reconciliation with the bank**.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در عمل: هر حساب بانکی یک تفصیلی', en: 'In practice: one detail account per bank account' },
          text: {
            fa: 'در کدینگ سه‌سطحی، موجودی نقد معمولاً معین‌های صندوق، بانک‌ها و تنخواه‌گردان دارد و هر حساب بانکی یک تفصیلی جدا (درس سند حسابداری و کدینگ سه‌سطحی). در ترازنامه همه آن‌ها یک‌جا با عنوان «موجودی نقد» گزارش می‌شوند، اما مغایرت‌گیری برای هر حساب بانکی جداگانه انجام می‌شود.',
            en: 'In three-level coding, Cash usually has subsidiaries for the cash box, banks and petty cash, and each bank account has its own detail code (see the lesson on vouchers and three-level coding). On the balance sheet they are all reported together as “Cash”, but each bank account is reconciled separately.',
          },
        },
      ],
    },
    {
      id: 'internal-control',
      title: { fa: 'کنترل داخلی وجه نقد', en: 'Internal Control over Cash' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**کنترل داخلی** مجموعه روش‌ها و تقسیم کارهایی است که مدیریت برقرار می‌کند تا دارایی‌ها حفاظت شوند، ثبت‌ها درست و به‌موقع باشند و قوانین و سیاست‌ها رعایت شوند. کنترل داخلی به معنای بی‌اعتمادی به کارکنان نیست؛ کار را طوری می‌چیند که خطای یک نفر را نفر دیگر ببیند و سوءاستفاده بدون تبانی دشوار شود.',
            en: '**Internal control** is the set of procedures and division of work that management puts in place so that assets are safeguarded, records are accurate and timely, and laws and policies are followed. It does not mean distrusting staff; it arranges the work so that one person’s mistake is seen by another and misuse is hard without collusion.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'شش اصل کنترل داخلی وجه نقد', en: 'Six principles of internal control over cash' },
          head: [
            { fa: 'اصل', en: 'Principle' },
            { fa: 'در عمل برای وجه نقد', en: 'Applied to cash' },
            { fa: 'جلوی چه چیزی را می‌گیرد', en: 'What it prevents' },
          ],
          rows: [
            [
              { fa: '**تفکیک وظایف**', en: '**Segregation of duties**' },
              {
                fa: 'کسی که وجه دریافت می‌کند، آن را ثبت نمی‌کند؛ کسی که چک امضا می‌کند، مغایرت بانکی نمی‌گیرد',
                en: 'Whoever receives cash does not record it; whoever signs cheques does not reconcile the bank',
              },
              { fa: 'پنهان کردن برداشت با دست‌کاری دفاتر', en: 'Hiding a theft by altering the books' },
            ],
            [
              { fa: '**مجوز و حد اختیار**', en: '**Authorisation and limits**' },
              {
                fa: 'هر پرداخت سند تأییدشده دارد؛ چک را صاحبان امضای مجاز امضا می‌کنند (اغلب دو امضا و مهر شرکت)',
                en: 'Every payment has an approved voucher; cheques are signed by the authorised signatories (often two signatures plus the company seal)',
              },
              { fa: 'پرداخت بدون مجوز یا بیش از حد اختیار', en: 'Unauthorised or over-limit payments' },
            ],
            [
              { fa: '**مستندسازی**', en: '**Documentation**' },
              {
                fa: 'رسید و چک با شماره چاپی پیاپی؛ مدارک پرداخت‌شده با مهر «پرداخت شد» باطل می‌شوند',
                en: 'Pre-numbered receipts and cheques; paid documents are stamped “paid” so they cannot be used again',
              },
              { fa: 'پرداخت دوباره یک فاکتور، رسیدهای گم‌شده', en: 'Paying an invoice twice, missing receipts' },
            ],
            [
              { fa: '**حفاظت فیزیکی**', en: '**Physical safeguards**' },
              {
                fa: 'گاوصندوق، دسترسی محدود، دسته‌چک در جای قفل‌دار، رمز دومرحله‌ای بانکداری اینترنتی',
                en: 'A safe, limited access, cheque books under lock, two-step login for internet banking',
              },
              { fa: 'سرقت و استفاده غیرمجاز از دسته‌چک یا رمز', en: 'Theft and misuse of cheque books or passwords' },
            ],
            [
              { fa: '**واریز روزانه و دست‌نخورده**', en: '**Daily, intact deposits**' },
              {
                fa: 'همه دریافت‌ها همان روز و کامل به بانک واریز می‌شوند؛ هیچ هزینه‌ای از محل دریافت‌ها پرداخت نمی‌شود',
                en: 'All receipts are banked the same day, in full; no expenses are paid out of the takings',
              },
              { fa: '«قرض» موقت از صندوق و گم شدن ردّ دریافت‌ها', en: 'Temporary “borrowing” from the takings and a lost trail of receipts' },
            ],
            [
              { fa: '**رسیدگی مستقل**', en: '**Independent checks**' },
              {
                fa: 'صورت مغایرت بانکی ماهانه توسط فردی مستقل؛ شمارش سرزده صندوق و تنخواه',
                en: 'A monthly bank reconciliation by an independent person; surprise counts of the cash box and petty cash',
              },
              { fa: 'خطاها و برداشت‌هایی که ماه‌ها پنهان می‌مانند', en: 'Errors and thefts that stay hidden for months' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'یک ترفند رایج: جابه‌جا کردن دریافت‌ها', en: 'A classic fraud: lapping' },
          text: {
            fa: 'صندوق‌داری که هم وجه مشتریان را می‌گیرد و هم حساب آن‌ها را ثبت می‌کند، 2,000 از پرداخت مشتری الف را برمی‌دارد. چند روز بعد، پرداخت مشتری ب را به حساب الف می‌زند و بعد پرداخت مشتری ج را به حساب ب. کسری همیشه یک قدم عقب‌تر جابه‌جا می‌شود و تا وقتی وظایف تفکیک نشود یا از مشتریان تأییدیه مانده گرفته نشود، دیده نمی‌شود.',
            en: 'A cashier who both receives customer payments and records customer accounts pockets 2,000 of customer A’s payment. A few days later she credits customer B’s payment to A’s account, then C’s payment to B’s. The shortfall keeps moving one step behind and stays invisible until duties are separated or customers are asked to confirm their balances.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل ایران', en: 'In practice in Iran' },
          text: {
            fa: 'چک شرکت با امضای صاحبان امضای مجاز که در اساسنامه و آگهی روزنامه رسمی تعیین شده‌اند معتبر است؛ اغلب دو امضا به‌همراه مهر شرکت. در بانکداری اینترنتی شرکتی، معمولاً یک کاربر انتقال (پایا یا ساتنا) را تعریف و کاربر دیگری تأیید می‌کند. چک‌های صیادی هم باید در سامانه صیاد ثبت و توسط گیرنده تأیید شوند. جزئیات این مقررات تغییر می‌کند؛ آخرین ضوابط بانک مرکزی و بانک خود را بررسی کنید.',
            en: 'A company cheque is valid only with the signatures of the authorised signatories named in the articles of association and the official-gazette notice, often two signatures plus the company seal. In corporate internet banking, one user usually sets up a transfer (PAYA or SATNA) and another approves it. Sayad cheques must also be registered in the Sayad system and confirmed by the payee. These rules change; check the latest Central Bank and bank requirements.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'کنترل داخلی تضمین مطلق نیست', en: 'Internal control is no absolute guarantee' },
          text: {
            fa: 'دو نفر می‌توانند تبانی کنند، مدیر می‌تواند کنترل‌ها را دور بزند و هزینه برخی کنترل‌ها از منفعتشان بیشتر است. در شرکت کوچکی که تفکیک کامل وظایف ممکن نیست، مالک باید خودش صورت‌حساب بانک را ببیند و چک‌ها را امضا کند.',
            en: 'Two people can collude, a manager can override controls, and some controls cost more than they save. In a small firm where full segregation is impossible, the owner should personally review the bank statement and sign the cheques.',
          },
        },
      ],
    },
    {
      id: 'petty-cash',
      title: { fa: 'تنخواه‌گردان', en: 'Petty Cash' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'پرداخت با چک یا انتقال بانکی بهترین کنترل را دارد، اما برای هر کرایه پیک یا بسته چای نمی‌شود چک نوشت. راه‌حل **تنخواه‌گردان** است: مبلغ ثابتی که به یک نفر (**تنخواه‌دار**) سپرده می‌شود تا هزینه‌های کوچک را بپردازد. در **روش تنخواه ثابت**، مانده حساب تنخواه‌گردان در دفاتر همیشه همان مبلغ ثابت است و فقط هنگام برقراری، افزایش یا کاهش سقف تغییر می‌کند.',
            en: 'Paying by cheque or transfer gives the best control, but nobody writes a cheque for a courier fare or a box of tea. The answer is a **petty-cash fund**: a fixed amount entrusted to one person (the **custodian**, «تنخواه‌دار») to pay small expenses. Under the **imprest system**, the Petty cash account in the books always shows that fixed amount; it changes only when the fund is established, increased or reduced.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'برقراری', en: 'Establish' },
              text: {
                fa: 'مدیر سقف تنخواه را تعیین می‌کند (مثلاً 5,000) و چکی به نام تنخواه‌دار صادر می‌شود. ثبت: بدهکار تنخواه‌گردان، بستانکار بانک.',
                en: 'Management sets the fund (say 5,000) and a cheque is issued to the custodian. Entry: Dr Petty cash, Cr Bank.',
              },
            },
            {
              title: { fa: 'پرداخت', en: 'Pay' },
              text: {
                fa: 'برای هر پرداخت رسید یا فاکتور گرفته و در برگ تنخواه نوشته می‌شود. در این مرحله **هیچ ثبتی** در دفاتر انجام نمی‌شود: وجه نقد کم و رسیدها زیاد می‌شوند، ولی جمع آن‌ها همان 5,000 است.',
                en: 'Every payment is supported by a receipt or invoice and listed on the petty-cash sheet. **No entry** is made in the books at this stage: cash goes down and receipts go up, but together they still total 5,000.',
              },
            },
            {
              title: { fa: 'تأمین (شارژ)', en: 'Replenish' },
              text: {
                fa: 'وقتی وجه کم شد، و همیشه در پایان دوره، تنخواه‌دار صورت‌حساب تنخواه را با رسیدها تحویل می‌دهد. پس از رسیدگی، هزینه‌ها ثبت و چکی به اندازه وجه خرج‌شده صادر می‌شود تا تنخواه دوباره به 5,000 برسد. ثبت: بدهکار هزینه‌ها، بستانکار بانک.',
                en: 'When cash runs low, and always at period-end, the custodian hands in a petty-cash report with the receipts. After review, the expenses are recorded and a cheque for the amount spent restores the fund to 5,000. Entry: Dr the expenses, Cr Bank.',
              },
            },
          ],
        },
        {
          type: 'h',
          text: { fa: 'مثال: تنخواه‌گردان آرتا', en: 'Example: Arta’s petty cash' },
        },
        {
          type: 'p',
          text: {
            fa: 'روز 1، آرتا تنخواه‌گردانی به مبلغ 5,000 برقرار می‌کند. روز 30، تنخواه‌دار رسیدهای زیر را تحویل می‌دهد و شمارش نشان می‌دهد 290 وجه نقد در تنخواه مانده است.',
            en: 'On Day 1 Arta sets up a 5,000 petty-cash fund. On Day 30 the custodian hands in the receipts below, and a count shows 290 of cash left in the fund.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'صورت‌حساب تنخواه آرتا، روز 30', en: 'Arta’s petty-cash report, Day 30' },
          head: [
            { fa: 'شرح رسیدها', en: 'Receipts' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          numericCols: [1],
          rows: [
            [{ fa: 'پیک و ارسال مرسوله', en: 'Courier and postage' }, 650],
            [{ fa: 'ملزومات اداری', en: 'Office supplies' }, 1200],
            [{ fa: 'کرایه تاکسی و حمل', en: 'Taxis and transport' }, 900],
            [{ fa: 'پذیرایی', en: 'Refreshments' }, 780],
            [{ fa: 'تعمیرات جزئی', en: 'Minor repairs' }, 1150],
            [{ fa: 'جمع رسیدها', en: 'Total receipts' }, 4680],
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'مبلغ تأمین تنخواه = سقف تنخواه − وجه نقد باقی‌مانده = 5,000 − 290 = 4,710',
            en: 'Replenishment = fund amount − cash left = 5,000 − 290 = 4,710',
          },
          note: {
            fa: 'رسیدها 4,680 است؛ پس 30 وجه نقد بدون رسید کم شده است: 5,000 − (4,680 + 290) = 30 کسری.',
            en: 'Receipts total 4,680, so 30 of cash is missing without a receipt: 5,000 − (4,680 + 290) = 30 short.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های تنخواه‌گردان آرتا', en: 'Arta’s petty-cash entries' },
          entries: [
            {
              date: day(1),
              lines: [
                { account: ac.petty, debit: 5000 },
                { account: ac.bank, credit: 5000 },
              ],
              memo: { fa: 'برقراری تنخواه‌گردان با چک به نام تنخواه‌دار.', en: 'Fund established by a cheque to the custodian.' },
            },
            {
              date: day(30),
              lines: [
                { account: ac.postage, debit: 650 },
                { account: ac.officeSupplies, debit: 1200 },
                { account: ac.transport, debit: 900 },
                { account: ac.refreshments, debit: 780 },
                { account: ac.repairs, debit: 1150 },
                { account: ac.shortOver, debit: 30 },
                { account: ac.bank, credit: 4710 },
              ],
              memo: {
                fa: 'تأمین تنخواه. پس از این ثبت، وجه نقد تنخواه دوباره 5,000 است (290 + 4,710) و حساب تنخواه‌گردان در دفاتر دست نخورده است.',
                en: 'Replenishment. Afterwards the fund again holds 5,000 in cash (290 + 4,710), and the Petty cash account in the books is unchanged.',
              },
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'اگر سقف تنخواه کم باشد، افزایش آن جداگانه ثبت می‌شود: افزایش از 5,000 به 7,000 یعنی بدهکار تنخواه‌گردان 2,000 و بستانکار بانک 2,000. فقط در همین حالت، و هنگام کاهش یا بستن تنخواه، حساب تنخواه‌گردان تغییر می‌کند.',
            en: 'If the fund is too small, the increase is recorded separately: raising it from 5,000 to 7,000 means Dr Petty cash 2,000, Cr Bank 2,000. Only then, and when the fund is reduced or closed, does the Petty cash account change.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل ایران', en: 'In Iranian practice' },
          text: {
            fa: 'در بسیاری از شرکت‌ها تنخواه‌گردان یک معین زیر موجودی نقد است و هر تنخواه‌دار یک تفصیلی دارد. تنخواه‌دار صورت‌حساب تنخواه را با رسیدهای شماره‌خورده تحویل می‌دهد و حسابداری پس از رسیدگی، سند تأمین تنخواه صادر می‌کند. فاکتور رسمی با مشخصات فروشنده را بر رسید دست‌نویس ترجیح دهید، چون برای پذیرش هزینه از نظر مالیاتی اهمیت دارد.',
            en: 'In many companies petty cash is a subsidiary under Cash, and each custodian has a detail account. The custodian submits a petty-cash report with numbered receipts, and after review accounting issues a replenishment voucher. Prefer formal invoices showing the seller’s details to handwritten notes, because they matter for the tax deductibility of the expense.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'تنخواه پایان دوره', en: 'Petty cash at period-end' },
          text: {
            fa: 'اگر در پایان دوره تنخواه تأمین نشود، هزینه‌هایی که پرداخت شده‌اند در دفاتر نیامده‌اند: هزینه‌ها کمتر و موجودی نقد بیشتر از واقع گزارش می‌شوند. پس در پایان هر دوره، حتی اگر وجه کافی باقی مانده باشد، رسیدها را ثبت کنید.',
            en: 'If the fund is not replenished at period-end, expenses already paid are missing from the books: expenses are understated and cash overstated. So at the end of every period, record the receipts even if plenty of cash is left.',
          },
        },
      ],
    },
    {
      id: 'bank-accounts',
      title: { fa: 'حساب بانکی در عمل', en: 'Bank Accounts in Practice' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'بیشتر پول شرکت در بانک است. **حساب جاری** دسته‌چک دارد، برای دریافت و پرداخت روزانه است و در ایران معمولاً سودی به آن تعلق نمی‌گیرد. **حساب سپرده کوتاه‌مدت** سود سپرده می‌گیرد و بیشتر برای نگهداری موقت پول است. بانک هر ماه، یا هر زمان که بخواهید، **صورت‌حساب بانکی** می‌دهد: فهرست همه واریزها، برداشت‌ها و مانده حساب از نگاه بانک.',
            en: 'Most of a company’s money is in the bank. A **current account** comes with a cheque book, is used for day-to-day receipts and payments, and in Iran usually earns nothing. A **short-term deposit account** earns deposit profit and is mostly for parking money. Every month, or whenever you ask, the bank provides a **bank statement**: a list of all deposits, withdrawals and the balance, from the bank’s point of view.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'بدهکار و بستانکار از نگاه بانک', en: 'Debit and credit from the bank’s side' },
          text: {
            fa: 'برای بانک، پول شرکت **بدهی** است: بانک آن را به شرکت بدهکار است. پس وقتی پول واریز می‌کنید، بانک حساب شما را **بستانکار** می‌کند و وقتی برداشت می‌کنید، **بدهکار**. در دفاتر شرکت درست برعکس است: واریز، حساب بانک را بدهکار می‌کند. از دیدن «بستانکار» کنار واریزهایتان در صورت‌حساب بانکی تعجب نکنید.',
            en: 'To the bank, your money is a **liability**: the bank owes it to you. So when you deposit, the bank **credits** your account, and when you withdraw, it **debits** it. In the company’s books it is the other way round: a deposit debits the Bank account. Don’t be surprised to see “credit” next to your deposits on the bank statement.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'حساب بانک در دفاتر شرکت', en: 'The Bank account in the company’s books' },
            items: [
              { fa: 'واریز: بدهکار', en: 'Deposits: debit' },
              { fa: 'چک و انتقال صادره: بستانکار', en: 'Cheques and transfers out: credit' },
              { fa: 'هنگام صدور چک یا انجام واریز ثبت می‌شود', en: 'Recorded when a cheque is written or a deposit made' },
              { fa: 'از کارمزد و سود تا رسیدن اعلامیه خبر ندارد', en: 'Knows nothing of fees or profit until the bank’s notice arrives' },
            ],
          },
          right: {
            title: { fa: 'صورت‌حساب بانک', en: 'The bank statement' },
            items: [
              { fa: 'واریز: بستانکار', en: 'Deposits: credit' },
              { fa: 'برداشت و چک پرداخت‌شده: بدهکار', en: 'Withdrawals and paid cheques: debit' },
              { fa: 'وقتی ثبت می‌شود که پول واقعاً جابه‌جا شود', en: 'Recorded when money actually moves' },
              { fa: 'از چک‌هایی که هنوز به بانک ارائه نشده‌اند خبر ندارد', en: 'Knows nothing of cheques not yet presented' },
            ],
          },
        },
        {
          type: 'table',
          caption: { fa: 'اعلامیه‌های بانک و اثرشان', en: 'Bank notices and their effect' },
          head: [
            { fa: 'اعلامیه بانک', en: 'Bank notice' },
            { fa: 'معنا برای شرکت', en: 'Meaning for the company' },
            { fa: 'نمونه', en: 'Examples' },
          ],
          rows: [
            [
              { fa: '**اعلامیه بستانکار**', en: '**Credit advice**' },
              { fa: 'بانک مانده شما را افزایش داده است', en: 'The bank has increased your balance' },
              { fa: 'سود سپرده، وصول چک، واریز مستقیم مشتری', en: 'Deposit profit, a collected cheque, a direct transfer from a customer' },
            ],
            [
              { fa: '**اعلامیه بدهکار**', en: '**Debit advice**' },
              { fa: 'بانک مانده شما را کاهش داده است', en: 'The bank has reduced your balance' },
              {
                fa: 'کارمزد، چک برگشتی مشتری، قسط وامی که خودکار برداشت شده',
                en: 'Fees, a customer cheque returned unpaid, a loan instalment taken automatically',
              },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'جابه‌جایی پول در ایران', en: 'How money moves in Iran' },
          text: {
            fa: 'در ایران پول با چک صیادی، کارت‌به‌کارت، **پایا** (انتقال بین‌بانکی گروهی که در چند نوبت در روز تسویه می‌شود)، **ساتنا** (انتقال آنی مبالغ بزرگ‌تر میان بانک‌ها) و کارتخوان فروشگاهی جابه‌جا می‌شود که وجه آن معمولاً تا روز کاری بعد به حساب می‌نشیند. همین فاصله‌های زمانی یکی از دلایل اختلاف دفاتر و صورت‌حساب بانکی است. سقف‌ها و زمان‌بندی‌های روز را از بانک خود بپرسید.',
            en: 'In Iran money moves by Sayad cheque, card-to-card transfer, **PAYA** (batch inter-bank transfers settled in several cycles a day), **SATNA** (real-time transfers of larger amounts between banks) and shop card terminals, whose takings usually reach the account by the next working day. These time lags are one reason the books and the bank statement differ. Ask your bank for the current limits and timings.',
          },
        },
      ],
    },
    {
      id: 'bank-reconciliation',
      title: { fa: 'صورت مغایرت بانکی گام‌به‌گام', en: 'Bank Reconciliation, Step by Step' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**صورت مغایرت بانکی** گزارشی است که مانده حساب بانک در دفاتر شرکت را با مانده صورت‌حساب بانک در همان تاریخ مقایسه می‌کند، دلیل هر اختلاف را نشان می‌دهد و هر دو را به یک **مانده اصلاح‌شده (واقعی)** می‌رساند. این گزارش معمولاً ماهانه و برای هر حساب بانکی جداگانه تهیه می‌شود.',
            en: 'A **bank reconciliation** compares the Bank balance in the company’s books with the bank-statement balance on the same date, explains every difference, and brings both to one **adjusted (true) balance**. It is usually prepared monthly, for each bank account separately.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'چرا دو مانده با هم فرق دارند؟', en: 'Why the two balances differ' },
          head: [
            { fa: 'قلم مغایرت', en: 'Item' },
            { fa: 'کجا ثبت شده', en: 'Recorded where' },
            { fa: 'اصلاح در کدام طرف', en: 'Adjust which side' },
            { fa: 'ثبت در دفاتر شرکت؟', en: 'Company entry?' },
          ],
          rows: [
            [
              { fa: '**واریز در راه**', en: '**Deposit in transit**' },
              { fa: 'در دفاتر شرکت، هنوز نه در بانک', en: 'In the books, not yet at the bank' },
              { fa: 'طرف بانک: افزوده می‌شود', en: 'Bank side: add' },
              { fa: 'خیر', en: 'No' },
            ],
            [
              { fa: '**چک‌های معوق** (صادره و هنوز وصول‌نشده)', en: '**Outstanding cheques**' },
              { fa: 'در دفاتر شرکت، هنوز نه در بانک', en: 'In the books, not yet at the bank' },
              { fa: 'طرف بانک: کسر می‌شود', en: 'Bank side: deduct' },
              { fa: 'خیر', en: 'No' },
            ],
            [
              { fa: '**کارمزد بانکی**', en: '**Bank charges**' },
              { fa: 'در بانک، هنوز نه در دفاتر', en: 'At the bank, not yet in the books' },
              { fa: 'طرف دفاتر: کسر می‌شود', en: 'Book side: deduct' },
              yes,
            ],
            [
              { fa: '**سود سپرده**', en: '**Deposit profit (interest earned)**' },
              { fa: 'در بانک، هنوز نه در دفاتر', en: 'At the bank, not yet in the books' },
              { fa: 'طرف دفاتر: افزوده می‌شود', en: 'Book side: add' },
              yes,
            ],
            [
              { fa: '**واریز مستقیم مشتری** یا وصول توسط بانک', en: '**Direct customer transfer** or collection by the bank' },
              { fa: 'در بانک، هنوز نه در دفاتر', en: 'At the bank, not yet in the books' },
              { fa: 'طرف دفاتر: افزوده می‌شود', en: 'Book side: add' },
              yes,
            ],
            [
              { fa: '**چک برگشتی مشتری**', en: '**Customer cheque returned unpaid**' },
              { fa: 'در بانک، هنوز نه در دفاتر', en: 'At the bank, not yet in the books' },
              { fa: 'طرف دفاتر: کسر می‌شود', en: 'Book side: deduct' },
              yes,
            ],
            [
              { fa: '**خطای شرکت**', en: '**Company error**' },
              { fa: 'دفاتر نادرست است', en: 'The books are wrong' },
              { fa: 'طرف دفاتر: اصلاح می‌شود', en: 'Book side: correct' },
              yes,
            ],
            [
              { fa: '**خطای بانک**', en: '**Bank error**' },
              { fa: 'صورت‌حساب نادرست است', en: 'The statement is wrong' },
              { fa: 'طرف بانک: اصلاح می‌شود', en: 'Bank side: correct' },
              { fa: 'خیر؛ به بانک اطلاع داده می‌شود', en: 'No; tell the bank' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'یک قاعده ساده', en: 'One simple rule' },
          text: {
            fa: 'هر قلمی که **شرکت از آن خبر داشته و بانک نه**، در طرف بانک اصلاح می‌شود و ثبتی نمی‌خواهد. هر قلمی که **بانک از آن خبر داشته و شرکت نه**، در طرف دفاتر اصلاح می‌شود و **حتماً باید در دفاتر ثبت شود**. هر خطا را همان طرفی اصلاح می‌کند که مرتکبش شده است.',
            en: 'Anything **the company knew about but the bank did not** is adjusted on the bank side and needs no entry. Anything **the bank knew about but the company did not** is adjusted on the book side and **must be recorded in the books**. Each error is corrected on the side that made it.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'مدارک را جمع کنید', en: 'Gather the documents' },
              text: {
                fa: 'صورت‌حساب بانک، گردش تفصیلی همان حساب بانکی در دفاتر و صورت مغایرت ماه قبل.',
                en: 'The bank statement, the ledger detail for that bank account and last month’s reconciliation.',
              },
            },
            {
              title: { fa: 'اقلام مشترک را تیک بزنید', en: 'Tick the matches' },
              text: {
                fa: 'هر واریز و چکی را که در هر دو آمده علامت بزنید. اقلام معوق ماه قبل را هم پیدا کنید که این ماه به بانک رسیده‌اند.',
                en: 'Tick each deposit and cheque that appears in both. Also look for last month’s outstanding items that cleared this month.',
              },
            },
            {
              title: { fa: 'اقلامی که فقط در دفاتر است', en: 'Items only in the books' },
              text: {
                fa: 'واریزهای در راه و چک‌های معوق را فهرست کنید؛ این‌ها مانده بانک را اصلاح می‌کنند.',
                en: 'List deposits in transit and outstanding cheques; they adjust the bank balance.',
              },
            },
            {
              title: { fa: 'اقلامی که فقط در بانک است', en: 'Items only at the bank' },
              text: {
                fa: 'کارمزد، سود سپرده، واریز مستقیم و چک برگشتی را فهرست کنید؛ این‌ها مانده دفاتر را اصلاح می‌کنند.',
                en: 'List fees, deposit profit, direct transfers and returned cheques; they adjust the book balance.',
              },
            },
            {
              title: { fa: 'خطاها را پیدا کنید', en: 'Find the errors' },
              text: {
                fa: 'مبالغی را که در دو طرف فرق دارند با مدرک مقایسه کنید. اختلافی که بر 9 بخش‌پذیر است، اغلب از جابه‌جایی ارقام می‌آید؛ مثلاً 1,640 که 1,460 نوشته شده است.',
                en: 'Compare amounts that differ between the two with the documents. A difference divisible by 9 often comes from transposed digits, such as 1,640 written as 1,460.',
              },
            },
            {
              title: { fa: 'دو مانده اصلاح‌شده را برابر کنید', en: 'Agree the adjusted balances' },
              text: {
                fa: 'اگر برابر نشدند، قلمی جا افتاده است؛ سطر به سطر دوباره بررسی کنید و هرگز اختلاف را با رقم «سایر» نپوشانید.',
                en: 'If they don’t agree, something is missing; check again line by line, and never plug the gap with an “other” figure.',
              },
            },
            {
              title: { fa: 'اقلام طرف دفاتر را ثبت کنید', en: 'Record the book-side items' },
              text: {
                fa: 'برای اقلام طرف دفاتر سند صادر کنید تا مانده دفاتر به مانده اصلاح‌شده برسد.',
                en: 'Issue vouchers for the book-side items so that the book balance becomes the adjusted balance.',
              },
            },
          ],
        },
        {
          type: 'h',
          text: { fa: 'مثال کامل: حساب جاری آرتا در پایان ماه', en: 'Complete example: Arta’s current account at month-end' },
        },
        {
          type: 'p',
          text: {
            fa: 'مانده ابتدای ماه در دفاتر و در بانک 42,000 بوده و صورت مغایرت ماه قبل هیچ قلم بازی نداشته است. در این مثال فرض کرده‌ایم حساب شرکت سود ماهانه می‌گیرد تا همه انواع اقلام را یک‌جا ببینید؛ در ایران معمولاً حساب‌های جاری سود ندارند و سود به سپرده‌ها تعلق می‌گیرد.',
            en: 'The opening balance was 42,000 both in the books and at the bank, and last month’s reconciliation had no open items. We assume the account earns a monthly return so that you can see every kind of item at once; in Iran current accounts usually earn nothing and profit is paid on deposit accounts.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'دفاتر آرتا: حساب جاری بانک الف (مانده ابتدای ماه 42,000)',
            en: 'Arta’s books: Bank A current account (opening balance 42,000)',
          },
          head: [
            { fa: 'تاریخ', en: 'Date' },
            { fa: 'شرح', en: 'Description' },
            { fa: 'بدهکار (واریز)', en: 'Debit (in)' },
            { fa: 'بستانکار (برداشت)', en: 'Credit (out)' },
            { fa: 'در صورت‌حساب بانک؟', en: 'On the bank statement?' },
          ],
          numericCols: [2, 3],
          rows: [
            [day(5), { fa: 'واریز دریافتی‌ها', en: 'Receipts deposited' }, 12000, blank, yes],
            [day(8), { fa: 'چک 351: پرداخت به تأمین‌کننده', en: 'Cheque 351: supplier' }, blank, 4800, yes],
            [day(12), { fa: 'چک 352: اجاره', en: 'Cheque 352: rent' }, blank, 3200, { fa: 'خیر: معوق', en: 'No: outstanding' }],
            [day(14), { fa: 'واریز دریافتی‌ها', en: 'Receipts deposited' }, 9500, blank, yes],
            [day(16), { fa: 'چک 353: خرید قطعات', en: 'Cheque 353: spare parts' }, blank, 7300, yes],
            [
              day(19),
              { fa: 'چک 354: پرداخت به تأمین‌کننده', en: 'Cheque 354: supplier' },
              blank,
              1460,
              { fa: 'بله، ولی بانک 1,640 پرداخته', en: 'Yes, but the bank paid 1,640' },
            ],
            [
              day(22),
              { fa: 'واریز چک مشتری: شرکت پارسه', en: 'Customer cheque deposited: Parseh Co.' },
              2500,
              blank,
              { fa: 'بله، ولی برگشت خورده', en: 'Yes, but returned unpaid' },
            ],
            [day(25), { fa: 'چک 355: بیمه', en: 'Cheque 355: insurance' }, blank, 5700, { fa: 'خیر: معوق', en: 'No: outstanding' }],
            [day(27), { fa: 'چک 356: آب و برق', en: 'Cheque 356: utilities' }, blank, 2320, yes],
            [day(29), { fa: 'چک 357: ملزومات', en: 'Cheque 357: supplies' }, blank, 2150, { fa: 'خیر: معوق', en: 'No: outstanding' }],
            [day(30), { fa: 'واریز دریافتی‌های روز آخر', en: 'Last day’s receipts deposited' }, 6400, blank, { fa: 'خیر: در راه', en: 'No: in transit' }],
            [total, blank, 30400, 26930, blank],
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'مانده دفاتر = 42,000 + 30,400 − 26,930 = 45,470',
            en: 'Book balance = 42,000 + 30,400 − 26,930 = 45,470',
          },
        },
        {
          type: 'table',
          caption: { fa: 'صورت‌حساب بانک الف (مانده ابتدای ماه 42,000)', en: 'Bank A statement (opening balance 42,000)' },
          head: [
            { fa: 'تاریخ', en: 'Date' },
            { fa: 'شرح', en: 'Description' },
            { fa: 'بدهکار (برداشت)', en: 'Debit (out)' },
            { fa: 'بستانکار (واریز)', en: 'Credit (in)' },
          ],
          numericCols: [2, 3],
          rows: [
            [day(5), { fa: 'واریز', en: 'Deposit' }, blank, 12000],
            [day(9), { fa: 'چک 351', en: 'Cheque 351' }, 4800, blank],
            [day(14), { fa: 'واریز', en: 'Deposit' }, blank, 9500],
            [day(17), { fa: 'چک 353', en: 'Cheque 353' }, 7300, blank],
            [day(18), { fa: 'انتقال پایا از هتل آسمان', en: 'PAYA transfer from Aseman Hotel' }, blank, 1800],
            [day(21), { fa: 'چک 354', en: 'Cheque 354' }, 1640, blank],
            [day(22), { fa: 'واریز چک', en: 'Cheque deposited' }, blank, 2500],
            [day(24), { fa: 'چک برگشتی: شرکت پارسه', en: 'Returned cheque: Parseh Co.' }, 2500, blank],
            [day(26), { fa: 'چک 1872', en: 'Cheque 1872' }, 900, blank],
            [day(28), { fa: 'چک 356', en: 'Cheque 356' }, 2320, blank],
            [day(30), { fa: 'کارمزد خدمات بانکی و پیامک', en: 'Service and SMS fees' }, 120, blank],
            [day(30), { fa: 'سود سپرده', en: 'Deposit profit' }, blank, 380],
            [total, blank, 19580, 26180],
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'مانده صورت‌حساب بانک = 42,000 + 26,180 − 19,580 = 48,600',
            en: 'Bank statement balance = 42,000 + 26,180 − 19,580 = 48,600',
          },
        },
        {
          type: 'list',
          items: [
            { fa: 'واریز روز 30 (6,400) هنوز به بانک نرسیده است: **واریز در راه**.', en: 'The Day 30 deposit (6,400) has not reached the bank yet: a **deposit in transit**.' },
            {
              fa: 'چک‌های 352 (3,200)، 355 (5,700) و 357 (2,150) هنوز به بانک ارائه نشده‌اند: **چک‌های معوق** به جمع 11,050.',
              en: 'Cheques 352 (3,200), 355 (5,700) and 357 (2,150) have not been presented yet: **outstanding cheques** totalling 11,050.',
            },
            {
              fa: 'چک 354 در واقع 1,640 بوده و در دفاتر 1,460 ثبت شده است: **خطای شرکت** به مبلغ 180 (بر 9 بخش‌پذیر است).',
              en: 'Cheque 354 was really 1,640 but was recorded as 1,460: a **company error** of 180 (divisible by 9).',
            },
            { fa: 'آرتا چکی با شماره 1872 صادر نکرده است؛ این چک مال حساب دیگری است: **خطای بانک** به مبلغ 900.', en: 'Arta never wrote cheque 1872; it belongs to another account: a **bank error** of 900.' },
            {
              fa: 'انتقال پایای هتل آسمان (1,800)، سود سپرده (380)، کارمزد (120) و چک برگشتی شرکت پارسه (2,500) را فقط بانک می‌دانست.',
              en: 'The Aseman Hotel PAYA transfer (1,800), the deposit profit (380), the fees (120) and Parseh Co.’s returned cheque (2,500) were known only to the bank.',
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'صورت مغایرت بانکی آرتا، پایان ماه', en: 'Arta’s bank reconciliation, month-end' },
          head: [
            { fa: 'شرح', en: 'Item' },
            { fa: 'طرف بانک', en: 'Bank side' },
            { fa: 'طرف دفاتر', en: 'Book side' },
          ],
          numericCols: [1, 2],
          rows: [
            [{ fa: 'مانده پایان ماه', en: 'Month-end balance' }, 48600, 45470],
            [{ fa: 'افزوده می‌شود: واریز در راه (روز 30)', en: 'Add: deposit in transit (Day 30)' }, 6400, blank],
            [{ fa: 'افزوده می‌شود: خطای بانک، چک 1872 متعلق به حساب دیگر', en: 'Add: bank error, cheque 1872 belongs to another account' }, 900, blank],
            [{ fa: 'کسر می‌شود: چک‌های معوق 352، 355 و 357', en: 'Less: outstanding cheques 352, 355 and 357' }, 11050, blank],
            [{ fa: 'افزوده می‌شود: سود سپرده', en: 'Add: deposit profit' }, blank, 380],
            [{ fa: 'افزوده می‌شود: انتقال پایای هتل آسمان', en: 'Add: PAYA transfer from Aseman Hotel' }, blank, 1800],
            [{ fa: 'کسر می‌شود: کارمزد بانکی', en: 'Less: bank charges' }, blank, 120],
            [{ fa: 'کسر می‌شود: چک برگشتی شرکت پارسه', en: 'Less: Parseh Co.’s returned cheque' }, blank, 2500],
            [{ fa: 'کسر می‌شود: خطای ثبت چک 354 (1,640 به‌جای 1,460)', en: 'Less: error on cheque 354 (1,640, not 1,460)' }, blank, 180],
            [{ fa: '**مانده اصلاح‌شده (واقعی)**', en: '**Adjusted (true) balance**' }, 44850, 44850],
          ],
        },
        {
          type: 'formula',
          text: {
            fa: 'طرف بانک: 48,600 + 6,400 + 900 − 11,050 = 44,850',
            en: 'Bank side: 48,600 + 6,400 + 900 − 11,050 = 44,850',
          },
          note: {
            fa: 'طرف دفاتر: 45,470 + 380 + 1,800 − 120 − 2,500 − 180 = 44,850. دو طرف برابرند، پس مغایرت‌گیری کامل است.',
            en: 'Book side: 45,470 + 380 + 1,800 − 120 − 2,500 − 180 = 44,850. Both sides agree, so the reconciliation is complete.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'ثبت‌های آرتا پس از مغایرت‌گیری (فقط اقلام طرف دفاتر)', en: 'Arta’s entries after reconciling (book-side items only)' },
          entries: [
            {
              date: day(30),
              lines: [
                { account: ac.bank, debit: 380 },
                { account: ac.depositIncome, credit: 380 },
              ],
              memo: { fa: 'سود سپرده طبق صورت‌حساب بانک.', en: 'Deposit profit per the bank statement.' },
            },
            {
              date: day(30),
              lines: [
                { account: ac.bank, debit: 1800 },
                { account: { fa: 'حساب‌های دریافتنی: هتل آسمان', en: 'Accounts receivable: Aseman Hotel' }, credit: 1800 },
              ],
              memo: { fa: 'وصول طلب از هتل آسمان با انتقال پایا.', en: 'Collection from Aseman Hotel by PAYA transfer.' },
            },
            {
              date: day(30),
              lines: [
                { account: ac.bankCharges, debit: 120 },
                { account: ac.bank, credit: 120 },
              ],
              memo: { fa: 'کارمزد خدمات بانکی ماه.', en: 'Bank service fees for the month.' },
            },
            {
              date: day(30),
              lines: [
                { account: { fa: 'حساب‌های دریافتنی: شرکت پارسه (چک برگشتی)', en: 'Accounts receivable: Parseh Co. (returned cheque)' }, debit: 2500 },
                { account: ac.bank, credit: 2500 },
              ],
              memo: {
                fa: 'طلب از شرکت پارسه دوباره برقرار می‌شود. پیگیری چک برگشتی در درس حساب‌ها و اسناد دریافتنی و چک.',
                en: 'The claim on Parseh Co. is reinstated. Following up returned cheques is covered in the lesson on receivables and cheques.',
              },
            },
            {
              date: day(30),
              lines: [
                { account: ac.ap, debit: 180 },
                { account: ac.bank, credit: 180 },
              ],
              memo: {
                fa: 'اصلاح ثبت چک 354 که بابت بدهی به تأمین‌کننده بوده است: 1,640 − 1,460 = 180.',
                en: 'Correction of cheque 354, which paid a supplier: 1,640 − 1,460 = 180.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'بعد از مغایرت‌گیری', en: 'After the reconciliation' },
          text: {
            fa: 'پس از این پنج ثبت، مانده بانک در دفاتر 44,850 است؛ همان مانده اصلاح‌شده که در ترازنامه گزارش می‌شود. برای واریز در راه، چک‌های معوق و خطای بانک هیچ ثبتی لازم نیست؛ ماه بعد بررسی کنید که به بانک رسیده‌اند و بانک خطایش را اصلاح کرده است. چکی که چند ماه معوق بماند هم پیگیری می‌خواهد: شاید گم شده یا گیرنده آن را ارائه نکرده است.',
            en: 'After these five entries the Bank balance in the books is 44,850, the adjusted balance reported on the balance sheet. Deposits in transit, outstanding cheques and the bank error need no entry; next month, check that they have cleared and that the bank has fixed its error. A cheque that stays outstanding for months also needs follow-up: it may be lost, or the payee has not presented it.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'در عمل', en: 'In practice' },
          text: {
            fa: 'برخی شرکت‌ها صورت مغایرت را یک‌طرفه تهیه می‌کنند: از مانده صورت‌حساب بانک شروع و با افزودن و کسر همه اقلام به مانده دفاتر می‌رسند. نتیجه یکی است، اما روش دوطرفه بالا مانده واقعی و فهرست ثبت‌های لازم را مستقیم نشان می‌دهد. نرم‌افزارهای حسابداری امروز فایل صورت‌حساب بانک را می‌خوانند و اقلام هم‌مبلغ و هم‌شماره را خودکار تطبیق می‌دهند؛ حسابدار فقط اقلام تطبیق‌نیافته را بررسی می‌کند. مغایرت‌گیری را ماهانه انجام دهید؛ هرچه دیرتر، پیدا کردن دلیل اختلاف سخت‌تر.',
            en: 'Some companies prepare a one-sided reconciliation: they start from the bank-statement balance and add and deduct every item until they reach the book balance. The result is the same, but the two-sided format above shows the true balance and the list of required entries directly. Modern accounting software imports the bank statement file and matches items with the same amount and number automatically; the accountant reviews only the unmatched items. Reconcile monthly; the longer you wait, the harder the differences are to explain.',
          },
        },
      ],
    },
    {
      id: 'cash-count',
      title: { fa: 'شمارش صندوق، کسری و اضافه', en: 'Cash Counts, Shortages and Overages' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در کسب‌وکارهایی که وجه نقد دریافت می‌کنند (فروشگاه، رستوران، باجه فروش)، پایان هر روز وجه صندوق شمرده و با مبلغی مقایسه می‌شود که باید باشد: فروش نقدی ثبت‌شده در صندوق فروشگاهی یا نرم‌افزار فروش. اختلاف کوچک طبیعی است، مثلاً اشتباه در پس دادن بقیه پول، اما باید ثبت و پیگیری شود. حساب **کسری و اضافه صندوق** همین اختلاف‌ها را نگه می‌دارد.',
            en: 'In businesses that take cash (shops, restaurants, ticket counters), the cash is counted at the end of each day and compared with what should be there: the cash sales recorded by the till or the sales software. Small differences are normal, such as wrong change given, but they must be recorded and followed up. The **cash short and over** account holds them.',
          },
        },
        {
          type: 'journal',
          title: { fa: 'یک فروشگاه: دو روز با کسری و اضافه', en: 'A shop: two days with a shortage and an overage' },
          entries: [
            {
              date: day(1),
              lines: [
                { account: ac.cash, debit: 8420 },
                { account: ac.shortOver, debit: 30 },
                { account: ac.sales, credit: 8450 },
              ],
              memo: { fa: 'فروش نقدی طبق صندوق 8,450؛ وجه شمارش‌شده 8,420؛ کسری 30.', en: 'Cash sales per the till 8,450; cash counted 8,420; 30 short.' },
            },
            {
              date: day(2),
              lines: [
                { account: ac.cash, debit: 6220 },
                { account: ac.sales, credit: 6200 },
                { account: ac.shortOver, credit: 20 },
              ],
              memo: { fa: 'فروش نقدی طبق صندوق 6,200؛ وجه شمارش‌شده 6,220؛ اضافه 20.', en: 'Cash sales per the till 6,200; cash counted 6,220; 20 over.' },
            },
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'فروش همیشه به مبلغ ثبت‌شده در صندوق فروشگاهی ثبت می‌شود، نه به مبلغ شمارش‌شده؛ اختلاف به حساب کسری و اضافه صندوق می‌رود. در پایان دوره، اگر این حساب مانده بدهکار داشته باشد هزینه متفرقه است و اگر بستانکار باشد درآمد متفرقه. در مثال بالا مانده 10 بدهکار است (30 − 20).',
            en: 'Sales are always recorded at the amount the till registered, not the amount counted; the difference goes to cash short and over. At period-end a debit balance in this account is a miscellaneous expense and a credit balance is miscellaneous income. In the example above the balance is a 10 debit (30 − 20).',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'صورت‌جلسه شمارش', en: 'The cash-count record' },
          text: {
            fa: 'شمارش سرزده صندوق یا تنخواه معمولاً با حضور صندوق‌دار و یک نفر از حسابداری یا حسابرسی داخلی انجام می‌شود. نتیجه در **صورت‌جلسه شمارش** نوشته و امضا می‌شود: اسکناس و سکه به تفکیک، رسیدهای داخل صندوق، مانده طبق دفاتر و اختلاف. رسید مساعده یا چک شخصی داخل صندوق وجه نقد نیست و جداگانه نوشته می‌شود.',
            en: 'A surprise count of the cash box or petty cash is usually done with the cashier present and someone from accounting or internal audit. The result is written up and signed in a **cash-count record**: notes and coins by denomination, receipts in the box, the balance per the books, and the difference. An employee’s IOU or a personal cheque in the box is not cash and is listed separately.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'کسری تکراری علامت هشدار است', en: 'Repeated shortages are a warning sign' },
          text: {
            fa: 'کسری‌های کوچک و تکراری رقمی بی‌اهمیت نیستند؛ شاید نشانه بی‌دقتی یا برداشت تدریجی باشند. اگر کسری به یک صندوق‌دار مشخص مربوط باشد و طبق مقررات شرکت از او گرفتنی باشد، به‌جای حساب کسری و اضافه صندوق، طلب از کارمند ثبت می‌شود (سایر حساب‌های دریافتنی با تفصیلی همان کارمند). کسری بزرگ را هرگز بدون بررسی هزینه نکنید.',
            en: 'Small, repeated shortages are not trivial; they may signal carelessness or gradual theft. If a shortage belongs to a specific cashier and company rules make it recoverable from them, record a claim on the employee (Other receivables, with that employee’s detail code) instead of cash short and over. Never expense a large shortage without investigating it.',
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
          title: { fa: 'نقد است یا نه؟', en: 'Cash or not?' },
          difficulty: 'easy',
          problem: {
            fa: 'شرکت پخش نیکان در پایان سال اقلام زیر را دارد. «موجودی نقد و معادل‌های نقد» را حساب کنید و بگویید بقیه اقلام کجا گزارش می‌شوند.',
            en: 'Nikan Distribution holds the items below at year-end. Calculate “cash and cash equivalents” and say where the other items are reported.',
          },
          given: {
            head: [
              { fa: 'قلم', en: 'Item' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            numericCols: [1],
            rows: [
              [{ fa: 'اسکناس و سکه در صندوق', en: 'Notes and coins in the cash box' }, 3200],
              [{ fa: 'مانده حساب جاری', en: 'Current-account balance' }, 41000],
              [{ fa: 'سپرده کوتاه‌مدت قابل برداشت در هر زمان', en: 'Short-term deposit, withdrawable at any time' }, 25000],
              [{ fa: 'اسناد خزانه با سررسید دو ماه از تاریخ خرید', en: 'Treasury bills maturing two months after purchase' }, 10000],
              [{ fa: 'سپرده یک‌ساله که هفت ماه دیگر سررسید می‌شود', en: 'One-year deposit maturing in seven months' }, 50000],
              [{ fa: 'چک مدت‌دار مشتری با سررسید ماه آینده', en: 'Customer’s post-dated cheque due next month' }, 8000],
              [{ fa: 'سپرده مسدود بابت ضمانت‌نامه بانکی', en: 'Deposit blocked for a bank guarantee' }, 12000],
              [{ fa: 'تمبر پستی', en: 'Postage stamps' }, 300],
              [{ fa: 'رسید مساعده کارمند در صندوق', en: 'Employee’s IOU in the cash box' }, 1500],
            ],
          },
          hint: {
            fa: 'از خود بپرسید: آیا شرکت می‌تواند همین امروز و به مبلغ معلوم با آن پرداخت کند؟',
            en: 'Ask yourself: can the company pay with it today, at a known amount?',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'قلم', en: 'Item' },
                { fa: 'طبقه‌بندی', en: 'Classification' },
                { fa: 'در نقد و معادل نقد', en: 'In cash and equivalents' },
              ],
              numericCols: [2],
              rows: [
                [{ fa: 'صندوق', en: 'Cash box' }, { fa: 'موجودی نقد', en: 'Cash' }, 3200],
                [{ fa: 'حساب جاری', en: 'Current account' }, { fa: 'موجودی نقد', en: 'Cash' }, 41000],
                [{ fa: 'سپرده کوتاه‌مدت', en: 'Short-term deposit' }, { fa: 'موجودی نقد', en: 'Cash' }, 25000],
                [{ fa: 'اسناد خزانه دوماهه', en: 'Two-month treasury bills' }, { fa: 'معادل نقد', en: 'Cash equivalent' }, 10000],
                [{ fa: 'سپرده یک‌ساله', en: 'One-year deposit' }, { fa: 'سرمایه‌گذاری کوتاه‌مدت', en: 'Short-term investment' }, blank],
                [{ fa: 'چک مدت‌دار مشتری', en: 'Post-dated customer cheque' }, { fa: 'اسناد دریافتنی', en: 'Notes receivable' }, blank],
                [{ fa: 'سپرده مسدود', en: 'Blocked deposit' }, { fa: 'سپرده محدودشده، جدا از نقد', en: 'Restricted deposit, outside cash' }, blank],
                [{ fa: 'تمبر', en: 'Stamps' }, { fa: 'پیش‌پرداخت یا ملزومات', en: 'Prepaid expense or supplies' }, blank],
                [{ fa: 'رسید مساعده', en: 'IOU' }, { fa: 'سایر حساب‌های دریافتنی', en: 'Other receivables' }, blank],
                [total, blank, 79200],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'سپرده یک‌ساله با اینکه هفت ماه دیگر سررسید می‌شود معادل نقد نیست، چون سررسید آن از تاریخ خرید بیش از سه ماه بوده است. چک مدت‌دار هم تا روز وصول طلب است، نه پول.',
                en: 'The one-year deposit is not a cash equivalent even though it matures in seven months, because its maturity at purchase was more than three months. A post-dated cheque is a claim until it is collected, not money.',
              },
            },
          ],
          answer: {
            fa: 'موجودی نقد و معادل‌های نقد = 3,200 + 41,000 + 25,000 + 10,000 = 79,200.',
            en: 'Cash and cash equivalents = 3,200 + 41,000 + 25,000 + 10,000 = 79,200.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'چهار ضعف کنترلی', en: 'Four control weaknesses' },
          difficulty: 'medium',
          problem: {
            fa: 'برای هر مورد زیر، ضعف کنترل داخلی را نام ببرید و راه رفع آن را پیشنهاد کنید.',
            en: 'For each case below, name the internal-control weakness and suggest a fix.',
          },
          given: {
            head: [
              { fa: 'مورد', en: 'Case' },
              { fa: 'شرح', en: 'Description' },
            ],
            rows: [
              [
                { fa: 'الف', en: '(a)' },
                {
                  fa: 'در یک فروشگاه، صندوق‌دار هم پول مشتریان را می‌گیرد، هم فروش روز را در نرم‌افزار ثبت می‌کند و هم پول را، گاهی هر چند روز یک بار، به بانک می‌برد.',
                  en: 'In a shop, the cashier takes customers’ money, records the day’s sales in the software and takes the cash to the bank, sometimes only every few days.',
                },
              ],
              [
                { fa: 'ب', en: '(b)' },
                {
                  fa: 'حسابدار شرکت دسته‌چک را نگه می‌دارد، چک‌ها را با امضای خودش صادر می‌کند و صورت مغایرت بانکی را هم خودش تهیه می‌کند.',
                  en: 'The company accountant keeps the cheque book, signs cheques alone and also prepares the bank reconciliation.',
                },
              ],
              [
                { fa: 'ج', en: '(c)' },
                {
                  fa: 'مدیر برای سرعت، رمز هر دو کاربر بانکداری اینترنتی را به یک کارمند داده تا هم انتقال را تعریف کند و هم تأیید.',
                  en: 'To save time, the manager gave one employee the passwords of both internet-banking users, so the employee both sets up and approves transfers.',
                },
              ],
              [
                { fa: 'د', en: '(d)' },
                {
                  fa: 'تنخواه‌دار هزینه‌ها را با برگه‌های دست‌نویس بدون مشخصات فروشنده گزارش می‌دهد و رسیدها پس از تأمین تنخواه باطل نمی‌شوند.',
                  en: 'The petty-cash custodian reports expenses on handwritten slips without the seller’s details, and receipts are not cancelled after replenishment.',
                },
              ],
            ],
          },
          hint: {
            fa: 'جدول شش اصل کنترل داخلی را مرور کنید و برای هر مورد ببینید کدام اصل زیر پا گذاشته شده است.',
            en: 'Review the table of six internal-control principles and see which one each case breaks.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'مورد', en: 'Case' },
                { fa: 'ضعف', en: 'Weakness' },
                { fa: 'راه رفع', en: 'Fix' },
              ],
              rows: [
                [
                  { fa: 'الف', en: '(a)' },
                  { fa: 'نبود تفکیک وظایف و واریز نکردن روزانه', en: 'No segregation of duties; no daily deposits' },
                  {
                    fa: 'فروش با صندوق فروشگاهی یا کارتخوان ثبت شود، پول هر روز کامل به بانک برود و فرد دیگری گزارش فروش را با فیش واریز تطبیق دهد',
                    en: 'Record sales through the till or card terminal, bank the takings in full every day, and have someone else match the sales report with the deposit slip',
                  },
                ],
                [
                  { fa: 'ب', en: '(b)' },
                  { fa: 'یک نفر هم چک صادر می‌کند و هم مغایرت می‌گیرد؛ می‌تواند برداشت را پنهان کند', en: 'One person both writes cheques and reconciles, so a theft can be hidden' },
                  {
                    fa: 'امضای چک طبق صاحبان امضای مجاز (دو امضا)، دسته‌چک در گاوصندوق، و مغایرت‌گیری توسط فردی مستقل که صورت‌حساب را مستقیم از بانک می‌گیرد',
                    en: 'Cheques signed by the authorised signatories (two signatures), cheque book in the safe, and reconciliation by an independent person who receives the statement directly from the bank',
                  },
                ],
                [
                  { fa: 'ج', en: '(c)' },
                  { fa: 'از بین رفتن کنترل دوکاربره و اشتراک رمز', en: 'The two-user control is defeated and passwords are shared' },
                  {
                    fa: 'هر کاربر رمز شخصی خودش را داشته باشد؛ تعریف و تأیید انتقال با دو نفر، همراه با سقف مبلغ',
                    en: 'Each user keeps a personal password; set-up and approval by two people, with amount limits',
                  },
                ],
                [
                  { fa: 'د', en: '(d)' },
                  { fa: 'مستندسازی ضعیف؛ امکان استفاده دوباره از یک رسید', en: 'Weak documentation; a receipt can be used twice' },
                  {
                    fa: 'فاکتور یا رسید رسمی با مشخصات فروشنده، مهر «پرداخت شد» روی رسیدها پس از تأمین، و شمارش سرزده تنخواه',
                    en: 'Formal invoices or receipts with the seller’s details, a “paid” stamp on receipts after replenishment, and surprise counts of the fund',
                  },
                ],
              ],
            },
          ],
          answer: {
            fa: 'الف و ب: نبود تفکیک وظایف (و واریز نکردن روزانه در الف)؛ ج: از بین رفتن مجوز دونفره؛ د: مستندسازی ضعیف و باطل نکردن رسیدها.',
            en: '(a) and (b): no segregation of duties (and no daily deposits in a); (c): two-person authorisation defeated; (d): weak documentation and receipts not cancelled.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'چرخه تنخواه‌گردان دفتر معماری سپهر', en: 'A petty-cash cycle at Sepehr Architects' },
          difficulty: 'medium',
          problem: {
            fa: 'دفتر معماری سپهر روز 1 تنخواه‌گردانی به مبلغ 8,000 برقرار می‌کند. روز 28 تنخواه‌دار رسیدهای زیر را تحویل می‌دهد و شمارش نشان می‌دهد 760 وجه نقد مانده است. همان روز تنخواه تأمین می‌شود و مدیر تصمیم می‌گیرد سقف آن را به 10,000 برساند. همه ثبت‌ها را بنویسید و بگویید پس از این کارها مانده حساب تنخواه‌گردان در دفاتر و وجه نقد نزد تنخواه‌دار چقدر است.',
            en: 'Sepehr Architects sets up an 8,000 petty-cash fund on Day 1. On Day 28 the custodian hands in the receipts below, and a count shows 760 of cash left. The fund is replenished that day, and the manager decides to raise it to 10,000. Write all the entries and state the Petty cash account balance and the cash held by the custodian afterwards.',
          },
          given: {
            head: [
              { fa: 'رسید', en: 'Receipt' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            numericCols: [1],
            rows: [
              [{ fa: 'پیک و ارسال نقشه‌ها', en: 'Courier for drawings' }, 1350],
              [{ fa: 'ملزومات اداری', en: 'Office supplies' }, 2240],
              [{ fa: 'پذیرایی جلسات', en: 'Meeting refreshments' }, 1180],
              [{ fa: 'تاکسی بازدید کارگاه', en: 'Taxis for site visits' }, 1560],
              [{ fa: 'تعمیر جزئی چاپگر', en: 'Minor printer repair' }, 950],
              [total, 7280],
            ],
          },
          hint: {
            fa: 'اول رسیدها و وجه باقی‌مانده را با سقف 8,000 مقایسه کنید: کسری دارید یا اضافه؟',
            en: 'First compare the receipts plus the cash left with the 8,000 fund: is there a shortage or an overage?',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'کسری یا اضافه', en: 'Short or over' },
                  text: {
                    fa: 'رسیدها + وجه باقی‌مانده = 7,280 + 760 = 8,040؛ یعنی 40 بیش از سقف 8,000: **اضافه صندوق** 40.',
                    en: 'Receipts + cash left = 7,280 + 760 = 8,040, which is 40 more than the 8,000 fund: an **overage** of 40.',
                  },
                },
                {
                  title: { fa: 'مبلغ تأمین', en: 'Replenishment amount' },
                  text: {
                    fa: 'چک تأمین = 8,000 − 760 = 7,240. هزینه‌ها 7,280 بدهکار، اضافه صندوق 40 بستانکار و بانک 7,240 بستانکار می‌شود.',
                    en: 'Replenishment cheque = 8,000 − 760 = 7,240. Debit expenses 7,280, credit cash short and over 40 and credit Bank 7,240.',
                  },
                },
                {
                  title: { fa: 'افزایش سقف', en: 'Raise the fund' },
                  text: {
                    fa: 'افزایش از 8,000 به 10,000 یک ثبت جداگانه 2,000 است. می‌توان هر دو مبلغ را با یک چک 9,240 پرداخت کرد، ولی ثبت آن‌ها جدا می‌ماند.',
                    en: 'Raising the fund from 8,000 to 10,000 is a separate 2,000 entry. Both amounts may be paid with one 9,240 cheque, but they are still recorded separately.',
                  },
                },
              ],
            },
            {
              type: 'journal',
              entries: [
                {
                  date: day(1),
                  lines: [
                    { account: ac.petty, debit: 8000 },
                    { account: { fa: 'موجودی نقد: بانک', en: 'Cash: bank' }, credit: 8000 },
                  ],
                  memo: { fa: 'برقراری تنخواه‌گردان.', en: 'Fund established.' },
                },
                {
                  date: day(28),
                  lines: [
                    { account: ac.postage, debit: 1350 },
                    { account: ac.officeSupplies, debit: 2240 },
                    { account: ac.refreshments, debit: 1180 },
                    { account: ac.transport, debit: 1560 },
                    { account: ac.repairs, debit: 950 },
                    { account: ac.shortOver, credit: 40 },
                    { account: { fa: 'موجودی نقد: بانک', en: 'Cash: bank' }, credit: 7240 },
                  ],
                  memo: { fa: 'تأمین تنخواه با 40 اضافه صندوق.', en: 'Replenishment, with a 40 overage.' },
                },
                {
                  date: day(28),
                  lines: [
                    { account: ac.petty, debit: 2000 },
                    { account: { fa: 'موجودی نقد: بانک', en: 'Cash: bank' }, credit: 2000 },
                  ],
                  memo: { fa: 'افزایش سقف تنخواه از 8,000 به 10,000.', en: 'Fund raised from 8,000 to 10,000.' },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              text: {
                fa: 'مانده حساب تنخواه‌گردان = 8,000 + 2,000 = 10,000. وجه نقد نزد تنخواه‌دار = 760 + 7,240 + 2,000 = 10,000. دو رقم برابرند؛ روش تنخواه ثابت درست اجرا شده است.',
                en: 'Petty cash account = 8,000 + 2,000 = 10,000. Cash held by the custodian = 760 + 7,240 + 2,000 = 10,000. The two agree, so the imprest system is working.',
              },
            },
          ],
          answer: {
            fa: 'چک تأمین 7,240، اضافه صندوق 40 (بستانکار)، افزایش 2,000؛ مانده حساب تنخواه‌گردان و وجه نزد تنخواه‌دار هر دو 10,000.',
            en: 'Replenishment cheque 7,240, overage 40 (credit), increase 2,000; the Petty cash account and the cash on hand both end at 10,000.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'صورت مغایرت کامل شرکت مهندسی تابان', en: 'A full bank reconciliation for Taban Engineering' },
          difficulty: 'hard',
          problem: {
            fa: 'حسابدار شرکت مهندسی تابان در پایان ماه، پس از تطبیق صورت‌حساب بانک با دفاتر، به اطلاعات زیر رسیده است. صورت مغایرت دوطرفه را تهیه کنید، مانده اصلاح‌شده را به دست آورید و ثبت‌های لازم در دفاتر تابان را بنویسید.',
            en: 'After matching the bank statement with the books at month-end, Taban Engineering’s accountant has found the facts below. Prepare a two-sided reconciliation, find the adjusted balance and write the entries Taban must record.',
          },
          given: {
            head: [
              { fa: 'اطلاعات', en: 'Fact' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            numericCols: [1],
            rows: [
              [{ fa: 'مانده صورت‌حساب بانک در پایان ماه', en: 'Bank statement balance at month-end' }, 63420],
              [{ fa: 'مانده حساب بانک در دفاتر تابان', en: 'Bank balance in Taban’s books' }, 61660],
              [{ fa: 'واریز روز آخر ماه که در صورت‌حساب نیامده است', en: 'Last-day deposit not on the statement' }, 7850],
              [{ fa: 'چک صادره 812 که هنوز به بانک ارائه نشده', en: 'Cheque 812 issued, not yet presented' }, 4300],
              [{ fa: 'چک صادره 815 که هنوز به بانک ارائه نشده', en: 'Cheque 815 issued, not yet presented' }, 2960],
              [{ fa: 'چک صادره 816 که هنوز به بانک ارائه نشده', en: 'Cheque 816 issued, not yet presented' }, 1175],
              [{ fa: 'سود سپرده طبق صورت‌حساب', en: 'Deposit profit per the statement' }, 410],
              [{ fa: 'کارمزد بانکی طبق صورت‌حساب', en: 'Bank charges per the statement' }, 85],
              [{ fa: 'انتقال پایای شرکت ساختمانی البرز که در دفاتر ثبت نشده', en: 'PAYA transfer from Alborz Construction, not recorded' }, 3600],
              [{ fa: 'چک مشتری (شرکت ماهان) که برگشت خورده است', en: 'Customer cheque (Mahan Co.) returned unpaid' }, 4200],
              [
                { fa: 'واریز روز 12 بابت وصول از شرکت رسا: در بانک 6,830، در دفاتر 6,380', en: 'Day 12 deposit from Rasa Co.: 6,830 at the bank, 6,380 in the books' },
                450,
              ],
              [{ fa: 'واریزی که بانک به‌اشتباه به حساب تابان زده است', en: 'A deposit the bank credited to Taban by mistake' }, 1000],
            ],
          },
          hint: {
            fa: 'برای هر قلم بپرسید: چه کسی از آن خبر نداشته؟ اگر بانک، طرف بانک؛ اگر تابان، طرف دفاتر. خطای بانک در این مسئله مانده بانک را بیش از واقع کرده است.',
            en: 'For each item ask: who did not know about it? If the bank, adjust the bank side; if Taban, the book side. The bank’s error here has overstated the bank balance.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'طرف بانک', en: 'Bank side' },
                  text: {
                    fa: 'واریز در راه 7,850 افزوده؛ چک‌های معوق 4,300 + 2,960 + 1,175 = 8,435 کسر؛ واریز اشتباه بانک 1,000 کسر می‌شود (به بانک اطلاع دهید).',
                    en: 'Add the 7,850 deposit in transit; deduct outstanding cheques 4,300 + 2,960 + 1,175 = 8,435; deduct the bank’s mistaken 1,000 deposit (tell the bank).',
                  },
                },
                {
                  title: { fa: 'طرف دفاتر', en: 'Book side' },
                  text: {
                    fa: 'سود سپرده 410، انتقال البرز 3,600 و خطای ثبت واریز رسا 450 (6,830 − 6,380) افزوده؛ کارمزد 85 و چک برگشتی ماهان 4,200 کسر می‌شود.',
                    en: 'Add deposit profit 410, the Alborz transfer 3,600 and the Rasa recording error 450 (6,830 − 6,380); deduct fees 85 and Mahan’s returned cheque 4,200.',
                  },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'صورت مغایرت بانکی تابان، پایان ماه', en: 'Taban’s bank reconciliation, month-end' },
              head: [
                { fa: 'شرح', en: 'Item' },
                { fa: 'طرف بانک', en: 'Bank side' },
                { fa: 'طرف دفاتر', en: 'Book side' },
              ],
              numericCols: [1, 2],
              rows: [
                [{ fa: 'مانده پایان ماه', en: 'Month-end balance' }, 63420, 61660],
                [{ fa: 'افزوده می‌شود: واریز در راه', en: 'Add: deposit in transit' }, 7850, blank],
                [{ fa: 'کسر می‌شود: چک‌های معوق 812، 815 و 816', en: 'Less: outstanding cheques 812, 815 and 816' }, 8435, blank],
                [{ fa: 'کسر می‌شود: واریز اشتباه بانک', en: 'Less: bank’s mistaken deposit' }, 1000, blank],
                [{ fa: 'افزوده می‌شود: سود سپرده', en: 'Add: deposit profit' }, blank, 410],
                [{ fa: 'افزوده می‌شود: انتقال پایای البرز', en: 'Add: PAYA transfer from Alborz' }, blank, 3600],
                [{ fa: 'افزوده می‌شود: خطای ثبت واریز رسا', en: 'Add: error on the Rasa deposit' }, blank, 450],
                [{ fa: 'کسر می‌شود: کارمزد بانکی', en: 'Less: bank charges' }, blank, 85],
                [{ fa: 'کسر می‌شود: چک برگشتی ماهان', en: 'Less: Mahan’s returned cheque' }, blank, 4200],
                [{ fa: '**مانده اصلاح‌شده**', en: '**Adjusted balance**' }, 61835, 61835],
              ],
            },
            {
              type: 'journal',
              title: { fa: 'ثبت‌های تابان', en: 'Taban’s entries' },
              entries: [
                {
                  lines: [
                    { account: { fa: 'موجودی نقد: بانک', en: 'Cash: bank' }, debit: 410 },
                    { account: ac.depositIncome, credit: 410 },
                  ],
                  memo: { fa: 'سود سپرده.', en: 'Deposit profit.' },
                },
                {
                  lines: [
                    { account: { fa: 'موجودی نقد: بانک', en: 'Cash: bank' }, debit: 3600 },
                    { account: { fa: 'حساب‌های دریافتنی: شرکت ساختمانی البرز', en: 'Accounts receivable: Alborz Construction' }, credit: 3600 },
                  ],
                  memo: { fa: 'وصول طلب با انتقال پایا.', en: 'Collection by PAYA transfer.' },
                },
                {
                  lines: [
                    { account: { fa: 'موجودی نقد: بانک', en: 'Cash: bank' }, debit: 450 },
                    { account: { fa: 'حساب‌های دریافتنی: شرکت رسا', en: 'Accounts receivable: Rasa Co.' }, credit: 450 },
                  ],
                  memo: { fa: 'اصلاح ثبت واریز روز 12 (6,830 به‌جای 6,380).', en: 'Correction of the Day 12 deposit (6,830, not 6,380).' },
                },
                {
                  lines: [
                    { account: ac.bankCharges, debit: 85 },
                    { account: { fa: 'موجودی نقد: بانک', en: 'Cash: bank' }, credit: 85 },
                  ],
                  memo: { fa: 'کارمزد بانکی.', en: 'Bank charges.' },
                },
                {
                  lines: [
                    { account: { fa: 'حساب‌های دریافتنی: شرکت ماهان (چک برگشتی)', en: 'Accounts receivable: Mahan Co. (returned cheque)' }, debit: 4200 },
                    { account: { fa: 'موجودی نقد: بانک', en: 'Cash: bank' }, credit: 4200 },
                  ],
                  memo: { fa: 'برگشت چک مشتری.', en: 'Customer cheque returned unpaid.' },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'آزمون نهایی: 61,660 + 410 + 3,600 + 450 − 85 − 4,200 = 61,835، همان مانده اصلاح‌شده. اثر خالص ثبت‌ها بر حساب بانک 175 افزایش است. برای واریز در راه، چک‌های معوق و خطای بانک ثبتی لازم نیست.',
                en: 'Final check: 61,660 + 410 + 3,600 + 450 − 85 − 4,200 = 61,835, the adjusted balance. The entries increase the Bank account by a net 175. Deposits in transit, outstanding cheques and the bank error need no entry.',
              },
            },
          ],
          answer: {
            fa: 'مانده اصلاح‌شده 61,835 در هر دو طرف؛ پنج ثبت در دفاتر تابان که مانده بانک را روی‌هم 175 افزایش می‌دهند.',
            en: 'Adjusted balance 61,835 on both sides; five entries in Taban’s books that raise the Bank balance by a net 175.',
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
              fa: 'موجودی نقد شامل صندوق، تنخواه، حساب‌های جاری و سپرده‌های قابل برداشت است؛ معادل‌های نقد سرمایه‌گذاری‌های بسیار کوتاه‌مدت و کم‌خطرند. چک مدت‌دار و سپرده مسدود نقد نیستند.',
              en: 'Cash covers the cash box, petty cash, current accounts and withdrawable deposits; cash equivalents are very short-term, low-risk investments. Post-dated cheques and blocked deposits are not cash.',
            },
            {
              fa: 'کنترل داخلی وجه نقد بر تفکیک وظایف، مجوز، مستندسازی، حفاظت فیزیکی، واریز روزانه و رسیدگی مستقل استوار است.',
              en: 'Internal control over cash rests on segregation of duties, authorisation, documentation, physical safeguards, daily deposits and independent checks.',
            },
            {
              fa: 'در روش تنخواه ثابت، هزینه‌ها هنگام تأمین تنخواه ثبت می‌شوند و حساب تنخواه‌گردان فقط با تغییر سقف عوض می‌شود.',
              en: 'Under the imprest system, expenses are recorded when the fund is replenished, and the Petty cash account changes only when the fund size changes.',
            },
            {
              fa: 'صورت مغایرت بانکی هر دو مانده را به مانده اصلاح‌شده می‌رساند: اقلامی که بانک نمی‌دانست طرف بانک، و اقلامی که شرکت نمی‌دانست طرف دفاتر.',
              en: 'A bank reconciliation brings both balances to the adjusted balance: items the bank did not know go on the bank side, items the company did not know go on the book side.',
            },
            {
              fa: 'فقط اقلام طرف دفاتر (کارمزد، سود، واریز مستقیم، چک برگشتی و خطاهای شرکت) در دفاتر ثبت می‌شوند.',
              en: 'Only book-side items (fees, profit, direct transfers, returned cheques and company errors) are recorded in the books.',
            },
            {
              fa: 'فروش به مبلغ ثبت‌شده در صندوق فروشگاهی ثبت می‌شود و اختلاف شمارش به حساب کسری و اضافه صندوق می‌رود.',
              en: 'Sales are recorded at the till amount, and counting differences go to cash short and over.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'اشتباهات رایج', en: 'Common mistakes' },
          text: {
            fa: 'ثبت واریز در راه یا چک‌های معوق در دفاتر؛ فراموش کردن ثبت اقلام طرف دفاتر پس از مغایرت‌گیری؛ اصلاح خطای بانک در دفاتر شرکت؛ پوشاندن اختلاف با رقم «سایر»؛ نقد حساب کردن چک مدت‌دار؛ تأمین نکردن تنخواه در پایان دوره؛ مغایرت‌گیری توسط همان کسی که با وجه نقد سروکار دارد؛ و خواندن «بستانکار» صورت‌حساب بانک به معنای کاهش مانده.',
            en: 'Recording deposits in transit or outstanding cheques in the books; forgetting to record the book-side items after reconciling; correcting a bank error in the company’s books; plugging a difference with an “other” figure; treating post-dated cheques as cash; not replenishing petty cash at period-end; letting someone who handles cash do the reconciliation; and reading “credit” on a bank statement as a decrease.',
          },
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'موجودی نقد', en: 'Cash' },
              def: {
                fa: 'وجه صندوق، تنخواه‌گردان، مانده حساب‌های جاری و سپرده‌هایی که هر زمان قابل برداشت‌اند.',
                en: 'Cash on hand, petty cash, current-account balances and deposits withdrawable at any time.',
              },
            },
            {
              term: { fa: 'معادل نقد', en: 'Cash equivalent' },
              def: {
                fa: 'سرمایه‌گذاری بسیار کوتاه‌مدت و نقدشونده با مبلغ معلوم و خطر ناچیز، معمولاً با سررسید سه ماه یا کمتر از تاریخ خرید.',
                en: 'A very short-term, liquid investment with a known amount and insignificant risk, usually maturing within three months of purchase.',
              },
            },
            {
              term: { fa: 'کنترل داخلی', en: 'Internal control' },
              def: {
                fa: 'روش‌ها و تقسیم کارهایی که دارایی‌ها را حفاظت و درستی ثبت‌ها را تضمین می‌کنند.',
                en: 'The procedures and division of work that safeguard assets and keep records accurate.',
              },
            },
            {
              term: { fa: 'تفکیک وظایف', en: 'Segregation of duties' },
              def: {
                fa: 'جدا کردن نگهداری دارایی، ثبت و تأیید میان افراد مختلف تا خطا یا سوءاستفاده یک نفر دیده شود.',
                en: 'Splitting custody, recording and approval among different people so one person’s error or misuse is caught.',
              },
            },
            {
              term: { fa: 'تنخواه‌گردان', en: 'Petty cash' },
              def: {
                fa: 'مبلغ ثابتی که نزد تنخواه‌دار نگه داشته می‌شود تا هزینه‌های کوچک پرداخت شود.',
                en: 'A fixed amount held by a custodian to pay small expenses.',
              },
            },
            {
              term: { fa: 'روش تنخواه ثابت', en: 'Imprest system' },
              def: {
                fa: 'روشی که در آن هزینه‌ها هنگام تأمین تنخواه ثبت می‌شوند و مانده حساب تنخواه‌گردان ثابت می‌ماند.',
                en: 'A method in which expenses are recorded at replenishment and the Petty cash account stays fixed.',
              },
            },
            {
              term: { fa: 'صورت‌حساب بانکی', en: 'Bank statement' },
              def: {
                fa: 'فهرست واریزها، برداشت‌ها و مانده حساب از نگاه بانک.',
                en: 'The bank’s list of deposits, withdrawals and the account balance.',
              },
            },
            {
              term: { fa: 'صورت مغایرت بانکی', en: 'Bank reconciliation' },
              def: {
                fa: 'گزارشی که اختلاف مانده دفاتر و صورت‌حساب بانک را توضیح می‌دهد و هر دو را به مانده اصلاح‌شده می‌رساند.',
                en: 'A report that explains the difference between the book and bank balances and brings both to the adjusted balance.',
              },
            },
            {
              term: { fa: 'واریز در راه', en: 'Deposit in transit' },
              def: {
                fa: 'واریزی که در دفاتر ثبت شده ولی هنوز در صورت‌حساب بانک نیامده است.',
                en: 'A deposit recorded in the books but not yet on the bank statement.',
              },
            },
            {
              term: { fa: 'چک معوق', en: 'Outstanding cheque' },
              def: {
                fa: 'چک صادره‌ای که در دفاتر ثبت شده ولی هنوز به بانک ارائه و پرداخت نشده است.',
                en: 'A cheque recorded in the books but not yet presented to and paid by the bank.',
              },
            },
            {
              term: { fa: 'چک برگشتی', en: 'Returned (dishonoured) cheque' },
              def: {
                fa: 'چکی که بانک به دلیل کافی نبودن موجودی یا ایراد دیگر پرداخت نکرده است.',
                en: 'A cheque the bank refused to pay, for lack of funds or another defect.',
              },
            },
            {
              term: { fa: 'اعلامیه بدهکار و بستانکار', en: 'Debit and credit advice' },
              def: {
                fa: 'اطلاعیه بانک درباره کاهش (بدهکار) یا افزایش (بستانکار) مانده حساب شرکت.',
                en: 'The bank’s notice that it has reduced (debit) or increased (credit) the company’s balance.',
              },
            },
            {
              term: { fa: 'کسری و اضافه صندوق', en: 'Cash short and over' },
              def: {
                fa: 'حسابی که اختلاف وجه شمارش‌شده با مبلغ مورد انتظار را نگه می‌دارد.',
                en: 'An account holding differences between cash counted and cash expected.',
              },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: { fa: 'کدام قلم جزو موجودی نقد و معادل‌های نقد **نیست**؟', en: 'Which item is **not** part of cash and cash equivalents?' },
      options: [
        { fa: 'مانده حساب جاری بانکی', en: 'A current-account balance' },
        { fa: 'وجه نقد تنخواه‌گردان', en: 'Petty cash' },
        { fa: 'اسناد خزانه‌ای که دو ماه پس از خرید سررسید می‌شوند', en: 'Treasury bills maturing two months after purchase' },
        { fa: 'چک مدت‌دار مشتری با سررسید ماه آینده', en: 'A customer’s post-dated cheque due next month' },
      ],
      answer: 3,
      explain: {
        fa: 'چک مدت‌دار تا سررسید قابل وصول نیست، پس طلب است و در اسناد دریافتنی گزارش می‌شود. اسناد خزانه با سررسید دوماهه از تاریخ خرید، معادل نقد است؛ حساب جاری و تنخواه هم موجودی نقدند.',
        en: 'A post-dated cheque cannot be collected before its date, so it is a claim reported in notes receivable. Treasury bills maturing two months after purchase are a cash equivalent; the current account and petty cash are cash.',
      },
    },
    {
      q: {
        fa: 'سقف تنخواه 5,000 است. رسیدها روی‌هم 4,680 و وجه نقد شمارش‌شده 290 است. چک تأمین تنخواه چند است؟',
        en: 'A petty-cash fund is 5,000. Receipts total 4,680 and the cash counted is 290. What is the replenishment cheque?',
      },
      options: [
        { fa: '4,680', en: '4,680' },
        { fa: '4,710', en: '4,710' },
        { fa: '4,970', en: '4,970' },
        { fa: '5,000', en: '5,000' },
      ],
      answer: 1,
      explain: {
        fa: 'چک تأمین باید وجه را به سقف برگرداند: 5,000 − 290 = 4,710. این مبلغ 4,680 رسید و 30 کسری صندوق را می‌پوشاند. پرداخت فقط 4,680 تنخواه را 30 کمتر از سقف نگه می‌داشت.',
        en: 'The cheque must restore the fund: 5,000 − 290 = 4,710. It covers the 4,680 of receipts plus a 30 shortage. Paying only 4,680 would leave the fund 30 below its fixed amount.',
      },
    },
    {
      q: {
        fa: 'در روش تنخواه ثابت، پرداخت‌های تنخواه‌دار در طول ماه چه زمانی در دفاتر ثبت می‌شوند؟',
        en: 'Under the imprest system, when are the custodian’s payments recorded in the books?',
      },
      options: [
        { fa: 'هنگام تأمین تنخواه، بر اساس رسیدها', en: 'When the fund is replenished, from the receipts' },
        { fa: 'همان لحظه هر پرداخت', en: 'At the moment of each payment' },
        { fa: 'هرگز، چون مبالغ کوچک‌اند', en: 'Never, because the amounts are small' },
        { fa: 'فقط در پایان سال مالی', en: 'Only at the end of the fiscal year' },
      ],
      answer: 0,
      explain: {
        fa: 'در روش تنخواه ثابت، هنگام پرداخت ثبتی انجام نمی‌شود؛ هزینه‌ها هنگام تأمین تنخواه و بر اساس رسیدها ثبت می‌شوند. تأمین باید دست‌کم در پایان هر دوره انجام شود، نه فقط پایان سال، وگرنه هزینه‌های دوره کمتر از واقع گزارش می‌شوند.',
        en: 'No entry is made at the time of payment; the expenses are recorded at replenishment, from the receipts. Replenishment must happen at least at the end of every period, not only at year-end, or the period’s expenses are understated.',
      },
    },
    {
      q: {
        fa: 'مانده صورت‌حساب بانک 30,000 است. واریز در راه 4,000، چک‌های معوق 6,500 و بانک به‌اشتباه 300 از حساب شرکت برداشت کرده است. مانده اصلاح‌شده چقدر است؟',
        en: 'The bank statement shows 30,000. Deposits in transit are 4,000, outstanding cheques 6,500, and the bank wrongly took 300 from the company’s account. What is the adjusted balance?',
      },
      options: [
        { fa: '27,200', en: '27,200' },
        { fa: '27,500', en: '27,500' },
        { fa: '27,800', en: '27,800' },
        { fa: '40,800', en: '40,800' },
      ],
      answer: 2,
      explain: {
        fa: '30,000 + 4,000 − 6,500 + 300 = 27,800. برداشت اشتباه بانک مانده بانک را کمتر از واقع کرده، پس افزوده می‌شود. 27,200 این خطا را با علامت غلط اعمال کرده و 27,500 آن را نادیده گرفته است.',
        en: '30,000 + 4,000 − 6,500 + 300 = 27,800. The bank’s wrongful withdrawal understated the bank balance, so it is added back. 27,200 applies the error with the wrong sign and 27,500 ignores it.',
      },
    },
    {
      q: {
        fa: 'مانده بانک در دفاتر 25,000 است. صورت‌حساب بانک سود سپرده 200، کارمزد 150 و یک چک برگشتی مشتری به مبلغ 1,200 نشان می‌دهد. مانده اصلاح‌شده دفاتر چقدر است؟',
        en: 'The Bank balance in the books is 25,000. The statement shows deposit profit of 200, charges of 150 and a 1,200 customer cheque returned unpaid. What is the adjusted book balance?',
      },
      options: [
        { fa: '25,000', en: '25,000' },
        { fa: '26,150', en: '26,150' },
        { fa: '24,000', en: '24,000' },
        { fa: '23,850', en: '23,850' },
      ],
      answer: 3,
      explain: {
        fa: '25,000 + 200 − 150 − 1,200 = 23,850. سود سپرده مانده را افزایش و کارمزد و چک برگشتی آن را کاهش می‌دهند. 26,150 همه علامت‌ها را برعکس کرده و 24,000 کارمزد را از قلم انداخته است.',
        en: '25,000 + 200 − 150 − 1,200 = 23,850. Profit increases the balance; fees and the returned cheque reduce it. 26,150 reverses every sign and 24,000 leaves out the fees.',
      },
    },
    {
      q: {
        fa: 'پس از تهیه صورت مغایرت، کدام قلم به ثبت در دفاتر شرکت **نیاز دارد**؟',
        en: 'After the reconciliation, which item **requires** an entry in the company’s books?',
      },
      options: [
        { fa: 'واریز در راه', en: 'A deposit in transit' },
        { fa: 'کارمزد بانکی که فقط در صورت‌حساب آمده است', en: 'Bank charges shown only on the statement' },
        { fa: 'چک‌های معوق', en: 'Outstanding cheques' },
        { fa: 'خطای بانک در برداشت از حساب شرکت', en: 'A bank error withdrawing from the company’s account' },
      ],
      answer: 1,
      explain: {
        fa: 'کارمزد را بانک می‌دانست و شرکت نه؛ پس قلم طرف دفاتر است و باید ثبت شود. واریز در راه و چک‌های معوق قبلاً در دفاتر ثبت شده‌اند و خطای بانک را بانک اصلاح می‌کند.',
        en: 'The bank knew about the charges and the company did not, so they are a book-side item that must be recorded. Deposits in transit and outstanding cheques are already in the books, and the bank corrects its own error.',
      },
    },
    {
      q: {
        fa: 'در صورت‌حساب بانکی، کنار واریز 1,800 یک مشتری نوشته شده «بستانکار». یعنی چه؟',
        en: 'On the bank statement, a customer’s 1,800 deposit is marked “credit”. What does that mean?',
      },
      options: [
        {
          fa: 'بانک مانده شرکت را افزایش داده؛ بدهی بانک به شرکت بیشتر شده است',
          en: 'The bank increased the company’s balance; it now owes the company more',
        },
        { fa: 'بانک مانده شرکت را کاهش داده است', en: 'The bank reduced the company’s balance' },
        { fa: 'شرکت 1,800 به بانک بدهکار شده است', en: 'The company now owes the bank 1,800' },
        { fa: 'واریز برگشت خورده است', en: 'The deposit was reversed' },
      ],
      answer: 0,
      explain: {
        fa: 'برای بانک، سپرده شرکت بدهی است؛ پس افزایش آن بستانکار ثبت می‌شود. در دفاتر شرکت همین واریز، حساب بانک را بدهکار می‌کند. «بستانکار» در صورت‌حساب بانک به معنای کاهش نیست.',
        en: 'To the bank, the company’s deposit is a liability, so an increase is a credit. In the company’s books the same deposit debits the Bank account. “Credit” on a bank statement does not mean a decrease.',
      },
    },
    {
      q: {
        fa: 'فروش نقدی ثبت‌شده در صندوق فروشگاهی 8,450 و وجه شمارش‌شده 8,420 است. ثبت درست کدام است؟',
        en: 'The till shows cash sales of 8,450, and the cash counted is 8,420. Which entry is right?',
      },
      options: [
        { fa: 'بدهکار موجودی نقد 8,450 / بستانکار فروش 8,450', en: 'Dr Cash 8,450 / Cr Sales 8,450' },
        { fa: 'بدهکار موجودی نقد 8,420 / بستانکار فروش 8,420', en: 'Dr Cash 8,420 / Cr Sales 8,420' },
        {
          fa: 'بدهکار موجودی نقد 8,420 و کسری و اضافه صندوق 30 / بستانکار فروش 8,450',
          en: 'Dr Cash 8,420 and Cash short and over 30 / Cr Sales 8,450',
        },
        {
          fa: 'بدهکار موجودی نقد 8,420 / بستانکار فروش 8,390 و کسری و اضافه صندوق 30',
          en: 'Dr Cash 8,420 / Cr Sales 8,390 and Cash short and over 30',
        },
      ],
      answer: 2,
      explain: {
        fa: 'فروش به مبلغ ثبت‌شده در صندوق (8,450) و وجه نقد به مبلغ شمارش‌شده (8,420) ثبت می‌شود؛ کسری 30 به بدهکار حساب کسری و اضافه صندوق می‌رود. ثبت فروش به 8,420 کسری را پنهان می‌کند و گزینه آخر حتی متوازن هم نیست.',
        en: 'Sales are recorded at the till amount (8,450) and cash at the amount counted (8,420); the 30 shortage is debited to cash short and over. Recording sales at 8,420 hides the shortage, and the last option does not even balance.',
      },
    },
    {
      q: { fa: 'کدام ترتیب، کنترل داخلی بهتری بر وجه نقد ایجاد می‌کند؟', en: 'Which arrangement gives the best internal control over cash?' },
      options: [
        { fa: 'صندوق‌دار هم وجه را می‌گیرد و هم حساب مشتریان را ثبت می‌کند', en: 'The cashier both receives cash and records customer accounts' },
        { fa: 'حسابداری که چک‌ها را صادر می‌کند، صورت مغایرت را هم تهیه می‌کند', en: 'The accountant who writes the cheques also prepares the reconciliation' },
        {
          fa: 'دریافت‌های روزانه هر چند روز یک بار و پس از کسر هزینه‌های جزئی به بانک واریز می‌شود',
          en: 'Daily takings are banked every few days, after small expenses are paid out of them',
        },
        {
          fa: 'کسی که نه با وجه نقد سروکار دارد و نه چک امضا می‌کند، صورت مغایرت ماهانه را تهیه می‌کند',
          en: 'Someone who neither handles cash nor signs cheques prepares the monthly reconciliation',
        },
      ],
      answer: 3,
      explain: {
        fa: 'رسیدگی مستقل یعنی مغایرت‌گیری توسط کسی که در دریافت، پرداخت و امضا نقشی ندارد. سه گزینه دیگر یا تفکیک وظایف را زیر پا می‌گذارند (و راه را برای جابه‌جا کردن دریافت‌ها باز می‌کنند) یا اصل واریز روزانه و دست‌نخورده را.',
        en: 'An independent check means the reconciliation is done by someone with no role in receipts, payments or signing. The other three break either segregation of duties (opening the door to lapping) or the rule of daily, intact deposits.',
      },
    },
    {
      q: { fa: 'چک 1,640 در دفاتر 1,460 ثبت شده است. کدام گزاره درست است؟', en: 'A 1,640 cheque was recorded in the books as 1,460. Which statement is true?' },
      options: [
        { fa: 'مانده دفاتر 180 کمتر از واقع است و باید افزایش یابد', en: 'The book balance is 180 too low and must be increased' },
        {
          fa: 'مانده دفاتر 180 بیش از واقع است و باید با یک ثبت 180 کاهش یابد',
          en: 'The book balance is 180 too high and must be reduced by a 180 entry',
        },
        { fa: 'بانک اشتباه کرده و باید به بانک اطلاع داد', en: 'The bank made the error and must be told' },
        { fa: 'اختلاف بر 9 بخش‌پذیر است و اهمیتی ندارد', en: 'The difference is divisible by 9, so it does not matter' },
      ],
      answer: 1,
      explain: {
        fa: 'شرکت پرداخت را 180 کمتر ثبت کرده، پس مانده دفاتر 180 بیش از واقع است: 1,640 − 1,460 = 180. ثبت اصلاحی بانک را 180 بستانکار می‌کند. بخش‌پذیری بر 9 فقط سرنخ جابه‌جایی ارقام است، نه دلیلی برای نادیده گرفتن خطا.',
        en: 'The company recorded the payment 180 too low, so its book balance is 180 too high: 1,640 − 1,460 = 180. The correcting entry credits Bank 180. Divisibility by 9 is only a clue to transposed digits, not a reason to ignore the error.',
      },
    },
  ],
}
