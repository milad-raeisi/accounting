import type { Lesson } from '../types'

const blank = { fa: '', en: '' }

/** Where each adjusted-trial-balance account goes. */
const toIS = { fa: 'سود و زیان', en: 'Income statement' }
const toSCE = { fa: 'تغییرات حقوق مالکانه', en: 'Changes in equity' }
const toBS = { fa: 'ترازنامه', en: 'Balance sheet' }

export const lesson: Lesson = {
  slug: 'financial-statements',
  number: 9,
  level: 'intermediate',
  minutes: 45,
  icon: 'FileSpreadsheet',
  tone: 'revenue',
  title: { fa: 'صورت‌های مالی', en: 'Financial Statements' },
  summary: {
    fa: 'صورت‌های مالی محصول نهایی فرایند حسابداری‌اند. در این درس، قدم‌به‌قدم و از روی تراز آزمایشی تعدیل‌شده، صورت سود و زیان، صورت تغییرات در حقوق مالکانه، ترازنامه طبقه‌بندی‌شده و صورت جریان‌های نقدی (به روش مستقیم و غیرمستقیم) استودیو طراحی نوا را تهیه می‌کنیم و یاد می‌گیریم این صورت‌ها چگونه با هم کنترل می‌شوند.',
    en: 'Financial statements are the finished product of the accounting process. Working step by step from the adjusted trial balance, this lesson prepares Nova Design Studio’s income statement, statement of changes in equity, classified balance sheet and cash flow statement (by both the direct and the indirect method), and shows how the statements check one another.',
  },
  objectives: [
    {
      fa: 'هدف صورت‌های مالی، استفاده‌کنندگان آن‌ها و اجزای مجموعه کامل صورت‌ها را توضیح دهید.',
      en: 'Explain the purpose of financial statements, who uses them and what a complete set contains.',
    },
    {
      fa: 'از روی تراز آزمایشی تعدیل‌شده، صورت سود و زیان، صورت تغییرات در حقوق مالکانه و ترازنامه طبقه‌بندی‌شده را قدم‌به‌قدم تهیه کنید.',
      en: 'Prepare an income statement, a statement of changes in equity and a classified balance sheet, step by step, from an adjusted trial balance.',
    },
    {
      fa: 'جریان‌های نقدی را طبقه‌بندی کنید و صورت جریان‌های نقدی را به روش مستقیم و غیرمستقیم بسازید و سود خالص را با وجه نقد عملیاتی تطبیق دهید.',
      en: 'Classify cash flows, build a cash flow statement by the direct and the indirect method, and reconcile net income to operating cash flow.',
    },
    {
      fa: 'ارتباط میان صورت‌ها را ردیابی کنید، سه کنترل متقابل را انجام دهید و نقش یادداشت‌های توضیحی را بشناسید.',
      en: 'Trace the links between the statements, run the three cross-checks and understand the role of the notes.',
    },
    {
      fa: 'یک مجموعه کامل صورت‌های مالی را برای یک کسب‌وکار کوچک تازه‌تأسیس تهیه کنید و از اشتباه‌های رایج ارائه دوری کنید.',
      en: 'Prepare a complete set of statements for a new small business and avoid the common presentation mistakes.',
    },
  ],
  sections: [
    // ─────────────────────────────────────────────────────────────
    {
      id: 'purpose',
      title: { fa: 'صورت‌های مالی برای چه و برای چه کسانی؟', en: 'Why financial statements matter' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'پایان نخستین ماه فعالیت نواست. سارا می‌خواهد از بانک وام بیشتری بگیرد و کارشناس اعتباری بانک فقط یک جمله می‌گوید: «صورت‌های مالی‌تان را بیاورید.» سارا یک دفتر کل پر از حساب دارد، اما بانک فرصت ندارد بیست حساب را یکی‌یکی بخواند. بانک چند صفحه کوتاه می‌خواهد که به سه پرسش پاسخ دهد: **آیا سود کرده‌اید؟ چه دارید و چه بدهکارید؟ وجه نقدتان از کجا آمد و به کجا رفت؟** صورت‌های مالی دقیقاً همین چند صفحه‌اند.',
            en: 'It is the end of Nova’s first month. Sara wants a bigger loan, and the bank’s credit officer says just one thing: “Bring me your financial statements.” Sara has a ledger full of accounts, but the bank has no time to read twenty accounts one by one. It wants a few short pages that answer three questions: **Did you make a profit? What do you own and what do you owe? Where did your cash come from and where did it go?** Those pages are the financial statements.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'تا اینجا معاملات نوا را تجزیه‌وتحلیل کردیم، در دفتر روزنامه ثبت کردیم، به دفتر کل انتقال دادیم و در پایان ماه تعدیل کردیم. همه این کارها برای رسیدن به یک خروجی است: **صورت‌های مالی**؛ یعنی گزارش ساختاریافته‌ای از **وضعیت مالی**، **عملکرد مالی** و **جریان‌های نقدی** یک واحد تجاری که به استفاده‌کنندگان کمک می‌کند تصمیم اقتصادی بهتری بگیرند.',
            en: 'So far we have analysed Nova’s transactions, journalized them, posted them to the ledger and adjusted the accounts at month-end. All of that work exists to produce one thing: **financial statements**, a structured report of an entity’s **financial position**, **financial performance** and **cash flows**, designed to help people make better economic decisions.',
          },
        },
        { type: 'h', text: { fa: 'چه کسانی از صورت‌های مالی استفاده می‌کنند؟', en: 'Who uses them?' } },
        {
          type: 'list',
          items: [
            {
              fa: '**مالکان و سرمایه‌گذاران**: آیا کسب‌وکار سودآور است و ارزش ادامه سرمایه‌گذاری را دارد؟',
              en: '**Owners and investors**: is the business profitable, and is it worth investing more?',
            },
            {
              fa: '**بانک‌ها و اعتباردهندگان**: آیا واحد تجاری توان بازپرداخت اصل و بهره وام را به‌موقع دارد؟',
              en: '**Banks and other lenders**: can the business repay principal and interest on time?',
            },
            {
              fa: '**مدیران**: کدام فعالیت‌ها سودآورند و منابع را از این پس کجا باید به کار گرفت؟',
              en: '**Managers**: which activities make money, and where should resources go next?',
            },
            {
              fa: '**تأمین‌کنندگان و مشتریان**: آیا می‌توان به این واحد نسیه فروخت یا روی تداوم فعالیتش حساب کرد؟',
              en: '**Suppliers and customers**: is it safe to sell on credit, or to depend on this business long-term?',
            },
            {
              fa: '**سازمان امور مالیاتی و نهادهای ناظر**: مبنایی برای تعیین مالیات و نظارت بر رعایت مقررات.',
              en: '**Tax authorities and regulators**: a basis for assessing tax and checking compliance.',
            },
            {
              fa: '**کارکنان و تحلیلگران**: ثبات شغلی، توان پرداخت حقوق و چشم‌انداز آینده.',
              en: '**Employees and analysts**: job security, the ability to pay wages, and future prospects.',
            },
          ],
        },
        { type: 'h', text: { fa: 'مجموعه کامل صورت‌های مالی', en: 'The complete set' } },
        {
          type: 'list',
          ordered: true,
          items: [
            {
              fa: '**صورت سود و زیان**: عملکرد طی دوره؛ درآمدها منهای هزینه‌ها.',
              en: '**Income statement**: performance over the period: revenues minus expenses.',
            },
            {
              fa: '**صورت تغییرات در حقوق مالکانه**: اینکه سرمایه مالک چرا از ابتدا تا پایان دوره تغییر کرده است.',
              en: '**Statement of changes in equity**: why the owner’s equity moved between the start and end of the period.',
            },
            {
              fa: '**ترازنامه (صورت وضعیت مالی)**: دارایی‌ها، بدهی‌ها و حقوق مالکانه در یک تاریخ معین.',
              en: '**Balance sheet (statement of financial position)**: assets, liabilities and equity at a specific date.',
            },
            {
              fa: '**صورت جریان‌های نقدی**: ورود و خروج وجه نقد طی دوره، به تفکیک نوع فعالیت.',
              en: '**Cash flow statement**: cash coming in and going out during the period, grouped by activity.',
            },
            {
              fa: '**یادداشت‌های توضیحی**: رویه‌های حسابداری و جزئیاتی که پشت ارقام قرار دارد.',
              en: '**Notes to the financial statements**: accounting policies and the detail behind the numbers.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: استانداردها چه می‌گویند؟', en: 'In practice: what the standards say' },
          text: {
            fa: 'در ایران **استاندارد حسابداری شماره 1** («ارائه صورت‌های مالی») و در سطح بین‌المللی **IAS 1** تعیین می‌کنند مجموعه کامل صورت‌ها چه اجزایی دارد و حداقل چه اقلامی باید افشا شود. IAS 1 برای دوره‌های مالی که از 1 ژانویه 2027 به بعد شروع می‌شوند جای خود را به **IFRS 18** می‌دهد. عنوان‌ها کمی فرق دارند (IFRS به‌جای «ترازنامه» می‌گوید «صورت وضعیت مالی»)، اما منطق یکی است. صورت‌های منتشرشده معمولاً ارقام **دوره قبل** را هم کنار ارقام دوره جاری نشان می‌دهند تا مقایسه ممکن شود.',
            en: 'In Iran, **National Accounting Standard No. 1** (“Presentation of Financial Statements”) and internationally **IAS 1** set out what a complete set contains and the minimum line items to disclose. IAS 1 is replaced by **IFRS 18** for periods beginning on or after 1 January 2027. Titles vary a little (IFRS says “statement of financial position” rather than “balance sheet”), but the logic is the same. Published statements normally show the **prior period** next to the current one so readers can compare.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'اطلاعات مالی مفید چه ویژگی‌هایی دارد؟', en: 'What makes financial information useful?' },
          text: {
            fa: 'چارچوب مفهومی دو ویژگی بنیادی را برمی‌شمارد: **مربوط بودن** (اطلاعات بتواند بر تصمیم اثر بگذارد) و **بیان صادقانه** (کامل، بی‌طرفانه و عاری از اشتباه باشد). قابلیت مقایسه، تأییدپذیری، به‌موقع بودن و قابل‌فهم بودن نیز این دو ویژگی را تقویت می‌کنند.',
            en: 'The Conceptual Framework names two fundamental qualities: **relevance** (the information can make a difference to a decision) and **faithful representation** (it is complete, neutral and free from error). Comparability, verifiability, timeliness and understandability enhance them.',
          },
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    {
      id: 'order',
      title: { fa: 'از تراز آزمایشی تعدیل‌شده تا صورت‌ها', en: 'From the adjusted trial balance to the statements' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'صورت‌های مالی از **تراز آزمایشی تعدیل‌شده** تهیه می‌شوند، نه از تراز تعدیل‌نشده؛ چون فقط پس از ثبت‌های اصلاحی است که درآمدها و هزینه‌ها کامل و درست‌اند. نخستین کار این است که کنار هر حساب بنویسیم به کدام صورت می‌رود. قاعده ساده است: **حساب‌های درآمد و هزینه** به صورت سود و زیان، **سرمایه و برداشت** به صورت تغییرات در حقوق مالکانه و **دارایی‌ها و بدهی‌ها** به ترازنامه.',
            en: 'The statements are prepared from the **adjusted trial balance**, never the unadjusted one, because only after the adjusting entries are revenues and expenses complete and correct. The first job is to mark next to each account which statement it feeds. The rule is simple: **revenue and expense accounts** go to the income statement, **capital and drawings** to the statement of changes in equity, and **assets and liabilities** to the balance sheet.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'استودیو طراحی نوا: تراز آزمایشی تعدیل‌شده، روز 30، و مقصد هر حساب',
            en: 'Nova Design Studio: adjusted trial balance, Day 30, and where each account goes',
          },
          head: [
            { fa: 'کد', en: 'Code' },
            { fa: 'حساب', en: 'Account' },
            { fa: 'بدهکار', en: 'Debit' },
            { fa: 'بستانکار', en: 'Credit' },
            { fa: 'می‌رود به', en: 'Goes to' },
          ],
          rows: [
            [{ fa: '1010', en: '1010' }, { fa: 'موجودی نقد', en: 'Cash' }, 46300, blank, toBS],
            [{ fa: '1020', en: '1020' }, { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, 2200, blank, toBS],
            [{ fa: '1030', en: '1030' }, { fa: 'ملزومات', en: 'Supplies' }, 1800, blank, toBS],
            [{ fa: '1040', en: '1040' }, { fa: 'پیش‌پرداخت بیمه', en: 'Prepaid insurance' }, 1100, blank, toBS],
            [{ fa: '1510', en: '1510' }, { fa: 'تجهیزات', en: 'Equipment' }, 20000, blank, toBS],
            [{ fa: '1520', en: '1520' }, { fa: 'استهلاک انباشته تجهیزات', en: 'Accumulated depreciation' }, blank, 300, toBS],
            [{ fa: '2010', en: '2010' }, { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, blank, 1500, toBS],
            [{ fa: '2020', en: '2020' }, { fa: 'حقوق پرداختنی', en: 'Salaries payable' }, blank, 600, toBS],
            [{ fa: '2030', en: '2030' }, { fa: 'بهره پرداختنی', en: 'Interest payable' }, blank, 150, toBS],
            [{ fa: '2510', en: '2510' }, { fa: 'وام پرداختنی', en: 'Loan payable' }, blank, 15000, toBS],
            [{ fa: '3010', en: '3010' }, { fa: 'سرمایه سارا', en: 'Capital (Sara)' }, blank, 50000, toSCE],
            [{ fa: '3020', en: '3020' }, { fa: 'برداشت سارا', en: 'Drawings (Sara)' }, 1000, blank, toSCE],
            [{ fa: '4010', en: '4010' }, { fa: 'درآمد خدمات', en: 'Service revenue' }, blank, 12700, toIS],
            [{ fa: '5010', en: '5010' }, { fa: 'هزینه اجاره', en: 'Rent expense' }, 2500, blank, toIS],
            [{ fa: '5020', en: '5020' }, { fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' }, 3600, blank, toIS],
            [{ fa: '5030', en: '5030' }, { fa: 'هزینه ملزومات', en: 'Supplies expense' }, 1200, blank, toIS],
            [{ fa: '5040', en: '5040' }, { fa: 'هزینه بیمه', en: 'Insurance expense' }, 100, blank, toIS],
            [{ fa: '5050', en: '5050' }, { fa: 'هزینه استهلاک', en: 'Depreciation expense' }, 300, blank, toIS],
            [{ fa: '5060', en: '5060' }, { fa: 'هزینه بهره', en: 'Interest expense' }, 150, blank, toIS],
            [{ fa: '**جمع**', en: '**Total**' }, blank, 80250, 80250, blank],
          ],
          numericCols: [2, 3],
        },
        {
          type: 'p',
          text: {
            fa: 'ترتیب تهیه صورت‌ها هم اتفاقی نیست: هر صورت رقمی تولید می‌کند که صورت بعدی به آن نیاز دارد. اگر این ترتیب را رعایت کنید، صورت‌ها مثل حلقه‌های یک زنجیر در هم قفل می‌شوند.',
            en: 'The order of preparation is not arbitrary either: each statement produces a figure the next one needs. Follow the order and the statements lock together like links in a chain.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'صورت سود و زیان', en: 'Income statement' },
              text: {
                fa: 'حساب‌های 4xxx و 5xxx تراز را برمی‌داریم و درآمدها را در برابر هزینه‌ها قرار می‌دهیم. خروجی: **سود خالص 4,850**.',
                en: 'Take the 4xxx and 5xxx accounts from the trial balance and match revenues against expenses. Output: **net income of 4,850**.',
              },
            },
            {
              title: { fa: 'صورت تغییرات در حقوق مالکانه', en: 'Statement of changes in equity' },
              text: {
                fa: 'سرمایه و برداشت را از تراز و سود خالص را از گام قبل برمی‌داریم. خروجی: **سرمایه پایان دوره 53,850**.',
                en: 'Take capital and drawings from the trial balance and net income from the previous step. Output: **ending capital of 53,850**.',
              },
            },
            {
              title: { fa: 'ترازنامه', en: 'Balance sheet' },
              text: {
                fa: 'دارایی‌ها و بدهی‌ها را از تراز و سرمایه پایان دوره را از گام قبل برمی‌داریم. معادله حسابداری باید برقرار شود: **71,100 = 17,250 + 53,850**.',
                en: 'Take assets and liabilities from the trial balance and ending capital from the previous step. The accounting equation must close: **71,100 = 17,250 + 53,850**.',
              },
            },
            {
              title: { fa: 'صورت جریان‌های نقدی', en: 'Cash flow statement' },
              text: {
                fa: 'از حساب موجودی نقد و تغییر سایر اقلام ترازنامه استفاده می‌کنیم. وجه نقد پایان دوره در این صورت (**46,300**) باید با موجودی نقد ترازنامه برابر باشد.',
                en: 'Use the Cash account and the changes in the other balance-sheet items. Its closing cash figure (**46,300**) must equal cash on the balance sheet.',
              },
            },
          ],
        },
        {
          type: 'diagram',
          id: 'statements-flow',
          caption: {
            fa: 'سود خالص از صورت سود و زیان به صورت تغییرات در حقوق مالکانه می‌رود، سرمایه پایان دوره به ترازنامه منتقل می‌شود و صورت جریان‌های نقدی تغییر موجودی نقد ترازنامه را توضیح می‌دهد.',
            en: 'Net income flows into the statement of changes in equity, ending capital flows into the balance sheet, and the cash flow statement explains the balance sheet’s change in cash.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'سه کنترل متقابل', en: 'Three cross-checks' },
          text: {
            fa: 'پیش از نهایی کردن صورت‌ها همیشه این سه برابری را کنترل کنید: (1) سود خالص صورت سود و زیان = سود خالص در صورت تغییرات در حقوق مالکانه؛ (2) سرمایه پایان دوره = حقوق مالکانه در ترازنامه؛ (3) وجه نقد پایان دوره در صورت جریان‌های نقدی = موجودی نقد ترازنامه.',
            en: 'Before finalising the statements, always confirm three equalities: (1) net income on the income statement = net income in the statement of changes in equity; (2) ending capital = equity on the balance sheet; (3) ending cash on the cash flow statement = cash on the balance sheet.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'صورت‌های دوره‌ای («برای ماه منتهی به …»)', en: 'Period statements (“for the month ended …”)' },
            items: [
              { fa: 'صورت سود و زیان', en: 'Income statement' },
              { fa: 'صورت تغییرات در حقوق مالکانه', en: 'Statement of changes in equity' },
              { fa: 'صورت جریان‌های نقدی', en: 'Cash flow statement' },
              { fa: 'مانند فیلمی از رویدادهای کل دوره', en: 'Like a video of the whole period' },
            ],
          },
          right: {
            title: { fa: 'صورت لحظه‌ای («در تاریخ …»)', en: 'Point-in-time statement (“as at …”)' },
            items: [
              { fa: 'ترازنامه (صورت وضعیت مالی)', en: 'Balance sheet (statement of financial position)' },
              { fa: 'مانند عکسی در روز پایان دوره', en: 'Like a photograph taken on the closing date' },
              { fa: 'مانده‌هایش به دوره بعد منتقل می‌شوند', en: 'Its balances carry forward into the next period' },
            ],
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: سرفصل سه‌سطری', en: 'In practice: the three-line heading' },
          text: {
            fa: 'هر صورت مالی با سه سطر شروع می‌شود: **نام واحد تجاری**، **نام صورت** و **تاریخ یا دوره**. مثلاً «استودیو طراحی نوا / صورت سود و زیان / برای ماه منتهی به روز 30» و برای ترازنامه «در تاریخ روز 30». بیشتر شرکت‌های ایرانی سال مالی را در پایان اسفند می‌بندند؛ پس عنوان‌هایی مانند «برای سال مالی منتهی به 29 اسفند» و «در تاریخ 29 اسفند» را زیاد خواهید دید.',
            en: 'Every statement opens with three lines: **the entity’s name**, **the statement’s title** and **the date or period**, e.g. “Nova Design Studio / Income Statement / For the month ended Day 30”, and for the balance sheet “As at Day 30”. Most Iranian companies end their financial year at the end of Esfand, so you will often see headings such as “for the year ended 29 Esfand” and “as at 29 Esfand”.',
          },
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    {
      id: 'income-statement',
      title: { fa: 'صورت سود و زیان', en: 'The income statement' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'صورت سود و زیان نشان می‌دهد واحد تجاری طی دوره چقدر درآمد کسب کرده، برای کسب آن چه هزینه‌هایی متحمل شده و در نتیجه چقدر سود (یا زیان) داشته است. طبق مبنای تعهدی، درآمد زمانی شناسایی می‌شود که کسب شود و هزینه زمانی که تحمل شود؛ نه لزوماً زمانی که پولی جابه‌جا می‌شود.',
            en: 'The income statement shows how much revenue the business earned during the period, what it cost to earn it, and therefore how much profit (or loss) resulted. Under the accrual basis, revenue is recognised when earned and expenses when incurred, not necessarily when cash changes hands.',
          },
        },
        {
          type: 'formula',
          text: { fa: 'سود خالص = درآمدها − هزینه‌ها', en: 'Net income = Revenues − Expenses' },
          note: {
            fa: 'اگر هزینه‌ها از درآمدها بیشتر باشد، نتیجه **زیان خالص** است.',
            en: 'If expenses exceed revenues, the result is a **net loss**.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'سرفصل را بنویسید', en: 'Write the heading' },
              text: {
                fa: 'نام واحد، «صورت سود و زیان» و دوره: «برای ماه منتهی به روز 30».',
                en: 'The entity’s name, “Income Statement” and the period: “for the month ended Day 30”.',
              },
            },
            {
              title: { fa: 'درآمدها را فهرست کنید', en: 'List the revenues' },
              text: {
                fa: 'همه حساب‌های درآمد (مانده بستانکار در گروه 4) را بیاورید. نوا فقط یک حساب دارد: درآمد خدمات 12,700.',
                en: 'Bring in every revenue account (credit balances in the 4xxx group). Nova has just one: service revenue of 12,700.',
              },
            },
            {
              title: { fa: 'هزینه‌ها را فهرست کنید', en: 'List the expenses' },
              text: {
                fa: 'همه حساب‌های هزینه (مانده بدهکار در گروه 5) را، معمولاً از بزرگ به کوچک، بیاورید و جمع بزنید: 7,850.',
                en: 'Bring in every expense account (debit balances in the 5xxx group), usually largest first, and total them: 7,850.',
              },
            },
            {
              title: { fa: 'سود خالص را حساب و کنترل کنید', en: 'Compute and check net income' },
              text: {
                fa: '12,700 − 7,850 = 4,850. کنترل: هیچ حساب دارایی، بدهی، سرمایه یا برداشتی نباید در این صورت آمده باشد.',
                en: '12,700 − 7,850 = 4,850. Check: no asset, liability, capital or drawings account should appear on this statement.',
              },
            },
          ],
        },
        {
          type: 'table',
          caption: {
            fa: 'استودیو طراحی نوا: صورت سود و زیان (یک‌مرحله‌ای) برای ماه منتهی به روز 30',
            en: 'Nova Design Studio: Income statement (single-step) for the month ended Day 30',
          },
          head: [
            { fa: 'شرح', en: 'Item' },
            { fa: 'مبلغ', en: 'Amount' },
            { fa: 'جمع', en: 'Total' },
          ],
          rows: [
            [{ fa: 'درآمد خدمات', en: 'Service revenue' }, blank, 12700],
            [{ fa: '**هزینه‌ها:**', en: '**Expenses:**' }, blank, blank],
            [{ fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' }, 3600, blank],
            [{ fa: 'هزینه اجاره', en: 'Rent expense' }, 2500, blank],
            [{ fa: 'هزینه ملزومات', en: 'Supplies expense' }, 1200, blank],
            [{ fa: 'هزینه استهلاک', en: 'Depreciation expense' }, 300, blank],
            [{ fa: 'هزینه بهره', en: 'Interest expense' }, 150, blank],
            [{ fa: 'هزینه بیمه', en: 'Insurance expense' }, 100, blank],
            [{ fa: 'جمع هزینه‌ها', en: 'Total expenses' }, blank, 7850],
            [{ fa: '**سود خالص**', en: '**Net income**' }, blank, 4850],
          ],
          numericCols: [1, 2],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'آنچه در صورت سود و زیان جایی ندارد', en: 'What does NOT belong here' },
          text: {
            fa: 'برداشت 1,000 سارا هزینه نیست؛ انتقال دارایی به مالک است و در صورت تغییرات در حقوق مالکانه می‌آید. خرید تجهیزات 20,000 هم هزینه نیست، بلکه دارایی است و فقط استهلاک این ماه آن (300) هزینه می‌شود. دریافت وام نیز درآمد نیست؛ بدهی ایجاد می‌کند. و بازپرداخت اصل وام هم هزینه نیست؛ فقط بهره آن هزینه است.',
            en: 'Sara’s 1,000 drawings are not an expense: they are a distribution to the owner and appear in the statement of changes in equity. The 20,000 equipment purchase is not an expense either: it is an asset, and only this month’s depreciation (300) is expensed. Borrowing is not revenue; it creates a liability. And repaying loan principal is not an expense; only the interest is.',
          },
        },
        { type: 'h', text: { fa: 'یک‌مرحله‌ای یا چندمرحله‌ای؟', en: 'Single-step or multi-step?' } },
        {
          type: 'compare',
          left: {
            title: { fa: 'صورت سود و زیان یک‌مرحله‌ای', en: 'Single-step income statement' },
            items: [
              { fa: 'همه درآمدها در یک گروه و همه هزینه‌ها در گروهی دیگر', en: 'All revenues in one group, all expenses in another' },
              { fa: 'سود خالص با یک تفریق به دست می‌آید', en: 'Net income is found with a single subtraction' },
              { fa: 'ساده و سریع؛ مناسب کسب‌وکارهای خدماتی کوچک مانند نوا', en: 'Simple and quick: suits small service firms like Nova' },
              { fa: 'سودهای میانی مانند سود عملیاتی را نشان نمی‌دهد', en: 'Shows no intermediate subtotals such as operating profit' },
            ],
          },
          right: {
            title: { fa: 'صورت سود و زیان چندمرحله‌ای', en: 'Multi-step income statement' },
            items: [
              { fa: 'فروش منهای بهای تمام‌شده کالای فروش‌رفته = سود ناخالص', en: 'Sales minus cost of goods sold = gross profit' },
              { fa: 'سود ناخالص منهای هزینه‌های عملیاتی = سود عملیاتی', en: 'Gross profit minus operating expenses = operating profit' },
              { fa: 'اقلام غیرعملیاتی مانند هزینه بهره جداگانه نشان داده می‌شوند', en: 'Non-operating items such as interest are shown separately' },
              { fa: 'اطلاعات بیشتری برای تحلیل می‌دهد؛ رایج در شرکت‌های بازرگانی و تولیدی', en: 'More informative for analysis, standard for merchandisers and manufacturers' },
            ],
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'صورت سود و زیان نوا در قالب چندمرحله‌ای (نوا خدماتی است و بهای تمام‌شده کالای فروش‌رفته ندارد)',
            en: 'Nova’s income statement in multi-step form (a service business, so there is no cost of goods sold)',
          },
          head: [
            { fa: 'شرح', en: 'Item' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          rows: [
            [{ fa: 'درآمد خدمات', en: 'Service revenue' }, 12700],
            [
              { fa: 'کسر می‌شود: هزینه‌های عملیاتی (حقوق، اجاره، ملزومات، استهلاک، بیمه)', en: 'Less: operating expenses (salaries, rent, supplies, depreciation, insurance)' },
              7700,
            ],
            [{ fa: '**سود عملیاتی**', en: '**Operating profit**' }, 5000],
            [{ fa: 'کسر می‌شود: هزینه بهره (غیرعملیاتی)', en: 'Less: interest expense (non-operating)' }, 150],
            [{ fa: '**سود خالص**', en: '**Net income**' }, 4850],
          ],
          numericCols: [1],
        },
        {
          type: 'p',
          text: {
            fa: 'هر دو قالب به یک سود خالص (4,850) می‌رسند؛ تفاوت فقط در میزان اطلاعاتی است که در مسیر ارائه می‌شود. سود عملیاتی 5,000 همان رقمی است که در درس تحلیل صورت‌های مالی و نسبت‌های مالی برای محاسبه «نسبت پوشش بهره» به کار می‌رود.',
            en: 'Both layouts arrive at the same net income (4,850); they differ only in how much they reveal along the way. The 5,000 operating profit is the figure used for interest coverage in the lesson on financial statement and ratio analysis.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: صورت سود و زیان شرکت‌های ایرانی', en: 'In practice: Iranian company income statements' },
          text: {
            fa: 'در صورت‌های مالی منتشرشده شرکت‌های ایرانی معمولاً این ترتیب را می‌بینید: درآمدهای عملیاتی، بهای تمام‌شده درآمدهای عملیاتی، **سود ناخالص**، هزینه‌های فروش، اداری و عمومی، **سود عملیاتی**، هزینه‌های مالی، سایر درآمدها و هزینه‌های غیرعملیاتی، سود قبل از مالیات، مالیات بر درآمد و **سود خالص**. IFRS 18 نیز نمایش جمع میانی «سود عملیاتی» را الزامی می‌کند. پس قالب چندمرحله‌ای همان زبانی است که در گزارش‌های واقعی با آن روبه‌رو می‌شوید.',
            en: 'In the published statements of Iranian companies you will usually see this order: operating revenue, cost of operating revenue, **gross profit**, selling, general and administrative expenses, **operating profit**, finance costs, other non-operating income and expenses, profit before tax, income tax and **net profit**. IFRS 18 also makes an “operating profit” subtotal compulsory. The multi-step layout is the language of real-world reports.',
          },
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    {
      id: 'equity-balance-sheet',
      title: { fa: 'صورت تغییرات در حقوق مالکانه و ترازنامه', en: 'Changes in equity and the balance sheet' },
      blocks: [
        { type: 'h', text: { fa: 'صورت تغییرات در حقوق مالکانه', en: 'Statement of changes in equity' } },
        {
          type: 'p',
          text: {
            fa: 'این صورت پل میان صورت سود و زیان و ترازنامه است و نشان می‌دهد سرمایه مالک چرا و چگونه طی دوره تغییر کرده است. در یک مؤسسه انفرادی مانند نوا، سرمایه با آورده مالک و سود خالص افزایش و با برداشت و زیان خالص کاهش می‌یابد.',
            en: 'This statement is the bridge between the income statement and the balance sheet: it shows why and how the owner’s equity changed during the period. In a sole proprietorship like Nova, capital rises with owner contributions and net income, and falls with drawings and net losses.',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'سرمایه پایان دوره = سرمایه ابتدای دوره + آورده مالک + سود خالص − برداشت',
            en: 'Ending capital = Beginning capital + Owner contributions + Net income − Drawings',
          },
          note: {
            fa: 'در شرکت‌های سهامی، به‌جای برداشت، **سود سهام** از **سود انباشته** کسر می‌شود؛ جزئیات آن در درس حقوق مالکانه شرکت‌ها می‌آید.',
            en: 'In a company, **dividends** are deducted from **retained earnings** instead of drawings; the lesson on company equity covers the details.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'استودیو طراحی نوا: صورت تغییرات در حقوق مالکانه برای ماه منتهی به روز 30',
            en: 'Nova Design Studio: Statement of changes in equity for the month ended Day 30',
          },
          head: [
            { fa: 'شرح', en: 'Item' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          rows: [
            [{ fa: 'سرمایه سارا، ابتدای دوره', en: 'Capital (Sara), beginning of month' }, 0],
            [{ fa: 'آورده سارا', en: 'Owner investment' }, 50000],
            [{ fa: 'سود خالص دوره', en: 'Net income for the month' }, 4850],
            [{ fa: 'برداشت سارا', en: 'Drawings' }, -1000],
            [{ fa: '**سرمایه سارا، پایان دوره**', en: '**Capital (Sara), end of month**' }, 53850],
          ],
          numericCols: [1],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'اگر ماه بعد زیان کنیم؟', en: 'What if next month is a loss?' },
          text: {
            fa: 'سرمایه پایان ماه اول (53,850) سرمایه ابتدای ماه دوم است. فرض کنید نوا در ماه دوم 2,000 زیان خالص داشته باشد و سارا باز 1,000 برداشت کند: سرمایه پایان ماه دوم = 53,850 − 2,000 − 1,000 = 50,850. زیان خالص، درست مانند برداشت، سرمایه را کم می‌کند؛ اما برداشت تصمیم مالک است و زیان نتیجه عملکرد.',
            en: 'Month one’s ending capital (53,850) is month two’s beginning capital. Suppose Nova makes a net loss of 2,000 in month two and Sara again withdraws 1,000: ending capital = 53,850 − 2,000 − 1,000 = 50,850. A net loss reduces capital just as drawings do, but drawings are the owner’s choice while a loss is the result of operations.',
          },
        },
        { type: 'h', text: { fa: 'ترازنامه طبقه‌بندی‌شده', en: 'The classified balance sheet' } },
        {
          type: 'p',
          text: {
            fa: 'ترازنامه تصویری از وضعیت مالی در **یک تاریخ معین** است. در ترازنامه طبقه‌بندی‌شده، دارایی‌ها و بدهی‌ها به دو گروه **جاری** و **غیرجاری** تقسیم می‌شوند. دارایی جاری دارایی‌ای است که انتظار می‌رود ظرف 12 ماه (یا یک چرخه عملیاتی، هر کدام طولانی‌تر باشد) به نقد تبدیل یا مصرف شود؛ بدهی جاری نیز بدهی‌ای است که باید ظرف همین مدت تسویه شود.',
            en: 'The balance sheet is a snapshot of financial position at **a single date**. A classified balance sheet splits assets and liabilities into **current** and **non-current** groups. A current asset is expected to be turned into cash or used up within 12 months (or one operating cycle, if longer); a current liability falls due for settlement within the same horizon.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**دارایی‌های جاری** معمولاً به ترتیب نقدشوندگی: موجودی نقد، سرمایه‌گذاری‌های کوتاه‌مدت، حساب‌ها و اسناد دریافتنی، موجودی کالا، ملزومات و پیش‌پرداخت‌ها.',
              en: '**Current assets**, usually in order of liquidity: cash, short-term investments, accounts and notes receivable, inventory, supplies and prepayments.',
            },
            {
              fa: '**دارایی‌های غیرجاری**: دارایی‌های ثابت مشهود (مانند تجهیزات) به ارزش دفتری، دارایی‌های نامشهود و سرمایه‌گذاری‌های بلندمدت.',
              en: '**Non-current assets**: property, plant and equipment at book value, intangible assets and long-term investments.',
            },
            {
              fa: '**بدهی‌های جاری**: حساب‌ها و اسناد پرداختنی، هزینه‌های تحقق‌یافته پرداخت‌نشده (حقوق، بهره)، پیش‌دریافت درآمد و **حصه جاری** وام‌های بلندمدت.',
              en: '**Current liabilities**: accounts and notes payable, accrued expenses (salaries, interest), unearned revenue and the **current portion** of long-term loans.',
            },
            {
              fa: '**بدهی‌های غیرجاری**: وام‌ها و تعهداتی که بعد از 12 ماه آینده سررسید می‌شوند.',
              en: '**Non-current liabilities**: loans and obligations that fall due after the next 12 months.',
            },
            {
              fa: '**حقوق مالکانه**: در مؤسسه انفرادی، سرمایه پایان دوره که از صورت تغییرات در حقوق مالکانه می‌آید.',
              en: '**Equity**: in a sole proprietorship, the ending capital taken from the statement of changes in equity.',
            },
          ],
        },
        {
          type: 'table',
          caption: {
            fa: 'استودیو طراحی نوا: ترازنامه در تاریخ روز 30',
            en: 'Nova Design Studio: Balance sheet as at Day 30',
          },
          head: [
            { fa: 'شرح', en: 'Item' },
            { fa: 'مبلغ', en: 'Amount' },
            { fa: 'جمع', en: 'Total' },
          ],
          rows: [
            [{ fa: '**دارایی‌های جاری**', en: '**Current assets**' }, blank, blank],
            [{ fa: 'موجودی نقد', en: 'Cash' }, 46300, blank],
            [{ fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, 2200, blank],
            [{ fa: 'ملزومات', en: 'Supplies' }, 1800, blank],
            [{ fa: 'پیش‌پرداخت بیمه', en: 'Prepaid insurance' }, 1100, blank],
            [{ fa: 'جمع دارایی‌های جاری', en: 'Total current assets' }, blank, 51400],
            [{ fa: '**دارایی‌های غیرجاری**', en: '**Non-current assets**' }, blank, blank],
            [{ fa: 'تجهیزات (بهای تمام‌شده)', en: 'Equipment, at cost' }, 20000, blank],
            [{ fa: 'کسر می‌شود: استهلاک انباشته تجهیزات', en: 'Less: accumulated depreciation' }, -300, blank],
            [{ fa: 'تجهیزات، ارزش دفتری', en: 'Equipment, book value' }, blank, 19700],
            [{ fa: '**جمع دارایی‌ها**', en: '**Total assets**' }, blank, 71100],
            [{ fa: '**بدهی‌های جاری**', en: '**Current liabilities**' }, blank, blank],
            [{ fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, 1500, blank],
            [{ fa: 'حقوق پرداختنی', en: 'Salaries payable' }, 600, blank],
            [{ fa: 'بهره پرداختنی', en: 'Interest payable' }, 150, blank],
            [{ fa: 'جمع بدهی‌های جاری', en: 'Total current liabilities' }, blank, 2250],
            [{ fa: '**بدهی‌های غیرجاری**', en: '**Non-current liabilities**' }, blank, blank],
            [{ fa: 'وام پرداختنی', en: 'Loan payable' }, blank, 15000],
            [{ fa: '**جمع بدهی‌ها**', en: '**Total liabilities**' }, blank, 17250],
            [{ fa: '**حقوق مالکانه**', en: '**Owner’s equity**' }, blank, blank],
            [{ fa: 'سرمایه سارا', en: 'Capital (Sara)' }, blank, 53850],
            [{ fa: '**جمع بدهی‌ها و حقوق مالکانه**', en: '**Total liabilities and equity**' }, blank, 71100],
          ],
          numericCols: [1, 2],
        },
        {
          type: 'formula',
          text: {
            fa: 'دارایی‌ها = بدهی‌ها + حقوق مالکانه ← 71,100 = 17,250 + 53,850',
            en: 'Assets = Liabilities + Equity → 71,100 = 17,250 + 53,850',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'دو نکته ظریف', en: 'Two subtleties' },
          text: {
            fa: '**استهلاک انباشته** یک حساب کاهنده دارایی است: تجهیزات را به بهای تمام‌شده (20,000) نشان می‌دهیم و استهلاک انباشته (300) را از آن کم می‌کنیم تا **ارزش دفتری** 19,700 به دست آید؛ آن را نه در بدهی‌ها می‌آوریم و نه به دارایی‌ها اضافه می‌کنیم. همچنین اگر بخشی از وام 15,000 ظرف 12 ماه آینده سررسید شود، همان بخش باید به‌عنوان «حصه جاری» در بدهی‌های جاری گزارش شود. در این مثال فرض کرده‌ایم کل وام بلندمدت است.',
            en: '**Accumulated depreciation** is a contra-asset: equipment is shown at cost (20,000) less accumulated depreciation (300), giving a **book value** of 19,700; it is neither listed with the liabilities nor added to the assets. And if any part of the 15,000 loan falls due within the next 12 months, that portion must be reported as the “current portion” under current liabilities. Here we assume the whole loan is long-term.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: ترتیب اقلام فرق می‌کند، طبقه‌بندی نه', en: 'In practice: the order varies, the classification does not' },
          text: {
            fa: 'ما برای آموزش، دارایی‌های جاری را اول آوردیم. در صورت‌های مالی منتشرشده بسیاری از شرکت‌های ایرانی و شرکت‌های تابع IFRS معمولاً **دارایی‌های غیرجاری پیش از دارایی‌های جاری** و **حقوق مالکانه پیش از بدهی‌ها** می‌آیند. ترازنامه را هم می‌توان «گزارشی» (زیر هم) یا «حسابی» (دارایی‌ها در یک طرف، بدهی‌ها و حقوق مالکانه در طرف دیگر) نوشت. ترتیب هرچه باشد، جمع‌ها و طبقه‌بندی جاری و غیرجاری یکی است.',
            en: 'For teaching we listed current assets first. In the published statements of many Iranian and IFRS companies, **non-current assets usually come before current assets** and **equity before liabilities**. A balance sheet can also be laid out in “report form” (one list) or “account form” (assets on one side, liabilities and equity on the other). Whatever the order, the totals and the current/non-current split are the same.',
          },
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    {
      id: 'cash-flow',
      title: { fa: 'صورت جریان‌های نقدی: سه طبقه و روش مستقیم', en: 'The cash flow statement: three activities and the direct method' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'نوا در ماه اول 4,850 سود کرده است، اما این به آن معنا نیست که 4,850 وجه نقد به دست آورده است. بخشی از درآمد هنوز وصول نشده، بخشی از هزینه‌ها هنوز پرداخت نشده و پرداخت‌هایی مانند خرید تجهیزات اصلاً هزینه این ماه نیستند. صورت جریان‌های نقدی دقیقاً همین فاصله را پر می‌کند و نشان می‌دهد وجه نقد از کجا آمد و به کجا رفت. یک کسب‌وکار سودآور هم اگر وجه نقد کافی نداشته باشد، نمی‌تواند حقوق و اجاره‌اش را بپردازد.',
            en: 'Nova earned a profit of 4,850 in its first month, but that does not mean it generated 4,850 of cash. Some revenue has not been collected yet, some expenses have not been paid, and some payments, like the equipment, are not expenses of this month at all. The cash flow statement fills that gap: it shows where cash came from and where it went. Even a profitable business cannot pay salaries and rent if it runs out of cash.',
          },
        },
        {
          type: 'diagram',
          id: 'cash-flow-categories',
          caption: {
            fa: 'هر ورود یا خروج وجه نقد دقیقاً در یکی از سه گروه فعالیت قرار می‌گیرد.',
            en: 'Every cash inflow or outflow belongs to exactly one of three activity groups.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**فعالیت‌های عملیاتی**: جریان‌های نقدی ناشی از فعالیت اصلی درآمدزا؛ مانند دریافت از مشتریان و پرداخت به کارکنان، موجر و تأمین‌کنندگان.',
              en: '**Operating activities**: cash from the main revenue-producing activity: collections from customers and payments to employees, the landlord and suppliers.',
            },
            {
              fa: '**فعالیت‌های سرمایه‌گذاری**: خرید و فروش دارایی‌های بلندمدت مانند تجهیزات، ساختمان و سرمایه‌گذاری‌ها.',
              en: '**Investing activities**: buying and selling long-term assets such as equipment, buildings and investments.',
            },
            {
              fa: '**فعالیت‌های تأمین مالی**: معاملات با مالکان و وام‌دهندگان؛ مانند آورده مالک، برداشت، دریافت و بازپرداخت اصل وام.',
              en: '**Financing activities**: transactions with owners and lenders: owner contributions, drawings, and borrowing or repaying loan principal.',
            },
          ],
        },
        { type: 'h', text: { fa: 'روش مستقیم: هر سطر را از کجا بیاوریم؟', en: 'The direct method: where does each line come from?' } },
        {
          type: 'p',
          text: {
            fa: 'در **روش مستقیم**، دریافت‌ها و پرداخت‌های نقدی عملیاتی را یکی‌یکی فهرست می‌کنیم. اگر حساب موجودی نقد را در دفتر کل داشته باشیم، می‌توانیم آن‌ها را مستقیم بخوانیم. راه دوم، که در عمل زیاد به کار می‌رود، این است که هر رقم صورت سود و زیان را با تغییر حساب ترازنامه‌ای مرتبطش اصلاح کنیم:',
            en: 'The **direct method** lists the operating cash receipts and payments one by one. With the Cash ledger account in hand we could simply read them off. The second route, widely used in practice, is to adjust each income-statement figure by the change in its related balance-sheet account:',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'استخراج سطرهای روش مستقیم نوا از صورت سود و زیان و ترازنامه',
            en: 'Deriving Nova’s direct-method lines from the income statement and balance sheet',
          },
          head: [
            { fa: 'سطر', en: 'Line' },
            { fa: 'محاسبه', en: 'Calculation' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          rows: [
            [
              { fa: 'دریافت از مشتریان', en: 'Received from customers' },
              { fa: 'درآمد 12,700 منهای افزایش حساب‌های دریافتنی 2,200', en: 'Revenue 12,700 less the increase in receivables 2,200' },
              10500,
            ],
            [
              { fa: 'پرداخت حقوق', en: 'Salaries paid' },
              { fa: 'هزینه حقوق 3,600 منهای افزایش حقوق پرداختنی 600', en: 'Salaries expense 3,600 less the increase in salaries payable 600' },
              3000,
            ],
            [
              { fa: 'پرداخت اجاره', en: 'Rent paid' },
              { fa: 'هزینه اجاره 2,500؛ پیش‌پرداخت یا بدهی اجاره‌ای وجود ندارد', en: 'Rent expense 2,500; no prepaid or accrued rent' },
              2500,
            ],
            [
              { fa: 'پرداخت بیمه', en: 'Insurance paid' },
              { fa: 'هزینه بیمه 100 به‌علاوه افزایش پیش‌پرداخت بیمه 1,100', en: 'Insurance expense 100 plus the increase in prepaid insurance 1,100' },
              1200,
            ],
            [
              { fa: 'پرداخت به تأمین‌کننده ملزومات', en: 'Paid to the supplies vendor' },
              {
                fa: 'هزینه ملزومات 1,200 به‌علاوه افزایش ملزومات 1,800 منهای افزایش حساب‌های پرداختنی 1,500',
                en: 'Supplies expense 1,200 plus the increase in supplies 1,800 less the increase in payables 1,500',
              },
              1500,
            ],
            [
              { fa: 'پرداخت بهره', en: 'Interest paid' },
              { fa: 'هزینه بهره 150 منهای افزایش بهره پرداختنی 150', en: 'Interest expense 150 less the increase in interest payable 150' },
              0,
            ],
            [{ fa: 'هزینه استهلاک', en: 'Depreciation' }, { fa: 'غیرنقدی است؛ هیچ پرداختی ندارد', en: 'Non-cash: no payment at all' }, 0],
          ],
          numericCols: [2],
        },
        {
          type: 'table',
          caption: {
            fa: 'استودیو طراحی نوا: صورت جریان‌های نقدی (روش مستقیم) برای ماه منتهی به روز 30',
            en: 'Nova Design Studio: Cash flow statement (direct method) for the month ended Day 30',
          },
          head: [
            { fa: 'شرح', en: 'Item' },
            { fa: 'مبلغ', en: 'Amount' },
            { fa: 'جمع', en: 'Total' },
          ],
          rows: [
            [{ fa: '**فعالیت‌های عملیاتی**', en: '**Operating activities**' }, blank, blank],
            [{ fa: 'دریافت از مشتریان (8,000 + 2,500)', en: 'Cash received from customers (8,000 + 2,500)' }, 10500, blank],
            [{ fa: 'پرداخت اجاره', en: 'Rent paid' }, -2500, blank],
            [{ fa: 'پرداخت حقوق و دستمزد', en: 'Salaries paid' }, -3000, blank],
            [{ fa: 'پرداخت بیمه', en: 'Insurance paid' }, -1200, blank],
            [{ fa: 'پرداخت به تأمین‌کننده ملزومات', en: 'Paid to the supplies vendor' }, -1500, blank],
            [{ fa: 'خالص وجه نقد حاصل از فعالیت‌های عملیاتی', en: 'Net cash from operating activities' }, blank, 2300],
            [{ fa: '**فعالیت‌های سرمایه‌گذاری**', en: '**Investing activities**' }, blank, blank],
            [{ fa: 'خرید تجهیزات', en: 'Purchase of equipment' }, -20000, blank],
            [{ fa: 'خالص وجه نقد مصرف‌شده در فعالیت‌های سرمایه‌گذاری', en: 'Net cash used in investing activities' }, blank, -20000],
            [{ fa: '**فعالیت‌های تأمین مالی**', en: '**Financing activities**' }, blank, blank],
            [{ fa: 'آورده سارا', en: 'Owner investment' }, 50000, blank],
            [{ fa: 'دریافت وام بانکی', en: 'Bank loan received' }, 15000, blank],
            [{ fa: 'برداشت سارا', en: 'Drawings' }, -1000, blank],
            [{ fa: 'خالص وجه نقد حاصل از فعالیت‌های تأمین مالی', en: 'Net cash from financing activities' }, blank, 64000],
            [{ fa: '**خالص افزایش در وجه نقد**', en: '**Net increase in cash**' }, blank, 46300],
            [{ fa: 'وجه نقد ابتدای دوره', en: 'Cash at the beginning of the month' }, blank, 0],
            [{ fa: '**وجه نقد پایان دوره**', en: '**Cash at the end of the month**' }, blank, 46300],
          ],
          numericCols: [1, 2],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'کنترل نهایی', en: 'The final check' },
          text: {
            fa: 'وجه نقد پایان دوره در صورت جریان‌های نقدی (46,300) دقیقاً با موجودی نقد ترازنامه برابر است. اگر این دو رقم برابر نباشند، جایی در طبقه‌بندی یا محاسبه اشتباه رخ داده است.',
            en: 'Ending cash on the cash flow statement (46,300) matches cash on the balance sheet exactly. If the two ever differ, something has been misclassified or miscalculated.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: بهره و طبقه‌بندی در استانداردها', en: 'In practice: interest and classification under the standards' },
          text: {
            fa: 'IAS 7 و استاندارد حسابداری شماره 2 ایران («صورت جریان‌های نقدی») هر دو سه طبقه اصلی دارند. برای برخی اقلام، مانند **بهره پرداختی**، انتخاب وجود دارد (عملیاتی یا تأمین مالی)؛ واحد تجاری یک رویه را انتخاب می‌کند و هر سال یکسان به کار می‌برد. در صورت‌های مالی قدیمی‌تر شرکت‌های ایرانی ممکن است طبقه‌های جداگانه‌ای مانند «بازده سرمایه‌گذاری‌ها و سود پرداختی بابت تأمین مالی» و «مالیات بر درآمد» ببینید؛ اگر با گزارش‌های قدیمی کار می‌کنید، این تفاوت را در نظر بگیرید.',
            en: 'IAS 7 and Iran’s Accounting Standard No. 2 (“Cash Flow Statement”) both use three main categories. For some items, such as **interest paid**, there is a choice (operating or financing); the entity picks a policy and applies it the same way every year. Older statements of Iranian companies may show extra headings such as “returns on investments and servicing of finance” and “income tax”; keep that in mind when you work with older reports.',
          },
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    {
      id: 'indirect',
      title: { fa: 'روش غیرمستقیم و تطبیق سود با وجه نقد', en: 'The indirect method: reconciling profit to cash' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'بیشتر شرکت‌ها جریان نقد عملیاتی را به **روش غیرمستقیم** گزارش می‌کنند. این روش از سود خالص شروع می‌کند و قدم‌به‌قدم توضیح می‌دهد چرا وجه نقد عملیاتی با سود فرق دارد. برای مدیر و بانک همین توضیح ارزشمند است: «سود کردیم، پس پولش کجاست؟» بخش‌های سرمایه‌گذاری و تأمین مالی در هر دو روش دقیقاً یکسان‌اند.',
            en: 'Most companies report operating cash flow using the **indirect method**. It starts from net income and explains, step by step, why operating cash differs from profit. That explanation is exactly what a manager or a bank wants: “We made a profit, so where is the money?” The investing and financing sections are identical under both methods.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'از سود خالص شروع کنید', en: 'Start with net income' },
              text: {
                fa: 'رقم پایانی صورت سود و زیان؛ برای نوا 4,850.',
                en: 'The bottom line of the income statement: 4,850 for Nova.',
              },
            },
            {
              title: { fa: 'اقلام غیرنقدی را برگردانید', en: 'Add back non-cash items' },
              text: {
                fa: 'استهلاک از سود کم شده اما پولی پرداخت نشده؛ پس به سود اضافه می‌شود. سود یا زیان فروش دارایی ثابت هم از این بخش حذف می‌شود، چون کل وجه فروش در فعالیت‌های سرمایه‌گذاری می‌آید.',
                en: 'Depreciation reduced profit but used no cash, so add it back. Gains or losses on selling fixed assets are removed here too, because the full sale proceeds belong in investing activities.',
              },
            },
            {
              title: { fa: 'اثر تغییر سرمایه در گردش را اعمال کنید', en: 'Adjust for working-capital changes' },
              text: {
                fa: 'تغییر هر دارایی جاری (غیر از وجه نقد) و هر بدهی جاری عملیاتی را طبق جدول زیر اعمال کنید.',
                en: 'Apply the change in every current asset (other than cash) and every operating current liability, using the table below.',
              },
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'قاعده علامت‌ها در روش غیرمستقیم', en: 'The sign rules of the indirect method' },
          head: [
            { fa: 'تغییر', en: 'Change' },
            { fa: 'اثر بر وجه نقد عملیاتی', en: 'Effect on operating cash' },
            { fa: 'نمونه در نوا', en: 'Nova example' },
          ],
          rows: [
            [
              { fa: 'افزایش دارایی جاری', en: 'Increase in a current asset' },
              { fa: 'کسر می‌شود', en: 'Subtract' },
              { fa: 'حساب‌های دریافتنی 2,200 افزایش یافت', en: 'Receivables rose by 2,200' },
            ],
            [
              { fa: 'کاهش دارایی جاری', en: 'Decrease in a current asset' },
              { fa: 'اضافه می‌شود', en: 'Add' },
              { fa: 'ندارد (ماه اول است)', en: 'None (first month)' },
            ],
            [
              { fa: 'افزایش بدهی جاری', en: 'Increase in a current liability' },
              { fa: 'اضافه می‌شود', en: 'Add' },
              { fa: 'حساب‌های پرداختنی 1,500 افزایش یافت', en: 'Payables rose by 1,500' },
            ],
            [
              { fa: 'کاهش بدهی جاری', en: 'Decrease in a current liability' },
              { fa: 'کسر می‌شود', en: 'Subtract' },
              { fa: 'ندارد (ماه اول است)', en: 'None (first month)' },
            ],
            [
              { fa: 'هزینه غیرنقدی (استهلاک)', en: 'Non-cash expense (depreciation)' },
              { fa: 'اضافه می‌شود', en: 'Add' },
              { fa: 'استهلاک 300', en: 'Depreciation of 300' },
            ],
          ],
        },
        {
          type: 'table',
          caption: {
            fa: 'تطبیق سود خالص نوا با جریان نقد عملیاتی (روش غیرمستقیم)',
            en: 'Reconciling Nova’s net income to operating cash flow (indirect method)',
          },
          head: [
            { fa: 'شرح', en: 'Item' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          rows: [
            [{ fa: 'سود خالص', en: 'Net income' }, 4850],
            [{ fa: 'اضافه می‌شود: هزینه استهلاک (غیرنقدی)', en: 'Add back: depreciation (non-cash)' }, 300],
            [{ fa: 'افزایش حساب‌های دریافتنی', en: 'Increase in accounts receivable' }, -2200],
            [{ fa: 'افزایش ملزومات', en: 'Increase in supplies' }, -1800],
            [{ fa: 'افزایش پیش‌پرداخت بیمه', en: 'Increase in prepaid insurance' }, -1100],
            [{ fa: 'افزایش حساب‌های پرداختنی', en: 'Increase in accounts payable' }, 1500],
            [{ fa: 'افزایش حقوق پرداختنی', en: 'Increase in salaries payable' }, 600],
            [{ fa: 'افزایش بهره پرداختنی', en: 'Increase in interest payable' }, 150],
            [{ fa: '**خالص وجه نقد حاصل از فعالیت‌های عملیاتی**', en: '**Net cash from operating activities**' }, 2300],
          ],
          numericCols: [1],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'چرا افزایش دریافتنی‌ها کسر می‌شود؟', en: 'Why is an increase in receivables subtracted?' },
          text: {
            fa: 'سود خالص کل درآمد 12,700 را حساب کرده است، اما 2,200 از آن هنوز از مشتریان وصول نشده و در حساب‌های دریافتنی مانده است. پس وجه نقد واقعی 2,200 کمتر از درآمد است: 12,700 − 2,200 = 10,500؛ همان رقم «دریافت از مشتریان» در روش مستقیم. منطق بدهی‌ها برعکس است: 600 حقوق پرداختنی هزینه شده ولی هنوز پرداخت نشده، پس وجه نقد 600 بیشتر از آن چیزی است که سود نشان می‌دهد.',
            en: 'Net income counts the full 12,700 of revenue, but 2,200 of it has not been collected and sits in receivables. Actual cash is therefore 2,200 lower than revenue: 12,700 − 2,200 = 10,500, the same “received from customers” figure as in the direct method. Liabilities work the other way: the 600 of salaries payable was expensed but not yet paid, so cash is 600 higher than profit suggests.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'روش مستقیم', en: 'Direct method' },
            items: [
              { fa: 'دریافت‌ها و پرداخت‌های واقعی را فهرست می‌کند', en: 'Lists the actual receipts and payments' },
              { fa: 'برای خواننده غیرمتخصص قابل‌فهم‌تر است', en: 'Easier for a non-specialist to read' },
              { fa: 'IAS 7 آن را تشویق می‌کند', en: 'Encouraged by IAS 7' },
              { fa: 'نوا: 10,500 دریافت منهای 8,200 پرداخت = 2,300', en: 'Nova: 10,500 received less 8,200 paid = 2,300' },
            ],
          },
          right: {
            title: { fa: 'روش غیرمستقیم', en: 'Indirect method' },
            items: [
              { fa: 'از سود خالص شروع و آن را تعدیل می‌کند', en: 'Starts from net income and adjusts it' },
              { fa: 'فاصله سود و وجه نقد را توضیح می‌دهد', en: 'Explains the gap between profit and cash' },
              { fa: 'در عمل رایج‌تر است و از ترازنامه مقایسه‌ای ساخته می‌شود', en: 'More common in practice; built from comparative balance sheets' },
              { fa: 'نوا: 4,850 سود پس از تعدیلات = 2,300', en: 'Nova: 4,850 profit after adjustments = 2,300' },
            ],
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'خالص تغییر وجه نقد = عملیاتی + سرمایه‌گذاری + تأمین مالی ← 2,300 − 20,000 + 64,000 = 46,300',
            en: 'Net change in cash = Operating + Investing + Financing → 2,300 − 20,000 + 64,000 = 46,300',
          },
          note: {
            fa: 'هر دو روش در بخش عملیاتی به 2,300 می‌رسند؛ اگر نرسیدند، یکی از تعدیلات اشتباه است.',
            en: 'Both methods must reach 2,300 for operating activities; if they do not, one of the adjustments is wrong.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'معاملات غیرنقدی کجا می‌روند؟', en: 'Where do non-cash transactions go?' },
          text: {
            fa: 'برخی معاملات سرمایه‌گذاری یا تأمین مالی هیچ وجه نقدی جابه‌جا نمی‌کنند؛ مثلاً خرید یک دستگاه 8,000 در برابر صدور سفته (سند پرداختنی) یا تبدیل وام به سرمایه. این معاملات **در صورت جریان‌های نقدی نمی‌آیند**، اما در یادداشت‌های توضیحی افشا می‌شوند. نوا در ماه اول چنین معامله‌ای نداشت؛ خرید نسیه ملزومات هم یک معامله عملیاتی است که اثرش از راه افزایش حساب‌های پرداختنی در روش غیرمستقیم دیده می‌شود.',
            en: 'Some investing or financing transactions move no cash at all, e.g. buying an 8,000 machine by signing a note payable, or converting a loan into capital. They are **left out of the cash flow statement** but disclosed in the notes. Nova had none in its first month; buying supplies on account is an operating transaction, and its effect shows up through the increase in accounts payable in the indirect method.',
          },
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    {
      id: 'notes-mistakes',
      title: { fa: 'یادداشت‌ها، صورت‌های مالی در عمل و اشتباه‌های رایج', en: 'Notes, statements in practice and common mistakes' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'ارقام صورت‌های مالی به‌تنهایی داستان کامل را نمی‌گویند. **یادداشت‌های توضیحی** جزء جدایی‌ناپذیر صورت‌های مالی‌اند و رویه‌های حسابداری، برآوردها و قضاوت‌های مدیریت و جزئیات اقلام را شرح می‌دهند. برای نوا، یادداشت‌ها دست‌کم این موارد را افشا می‌کنند:',
            en: 'The numbers alone never tell the whole story. The **notes to the financial statements** are an integral part of the statements: they explain accounting policies, management’s estimates and judgements, and the detail behind the line items. For Nova, the notes would disclose at least the following:',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**رویه استهلاک**: روش استهلاک، عمر مفید و ارزش باقی‌مانده برآوردی تجهیزات.',
              en: '**Depreciation policy**: the method used and the equipment’s estimated useful life and residual value.',
            },
            {
              fa: '**شرایط وام**: اصل 15,000، نرخ بهره سالانه 12 درصد، تاریخ سررسید و وثیقه‌ها؛ و اینکه چه بخشی از آن ظرف 12 ماه آینده سررسید می‌شود.',
              en: '**Loan terms**: 15,000 principal at 12% a year, the maturity date and any collateral, and how much falls due within the next 12 months.',
            },
            {
              fa: '**ترکیب حساب‌های دریافتنی**: از جمله 700 درآمد کسب‌شده‌ای که هنوز صورت‌حساب آن صادر نشده است.',
              en: '**Composition of receivables**: including 700 of revenue earned but not yet billed.',
            },
            {
              fa: '**تعهدات، بدهی‌های احتمالی و رویدادهای پس از تاریخ ترازنامه** که بر تصمیم استفاده‌کنندگان اثر می‌گذارند.',
              en: '**Commitments, contingent liabilities and events after the reporting date** that could affect users’ decisions.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'همیشه یادداشت‌ها را بخوانید', en: 'Always read the notes' },
          text: {
            fa: 'دو واحد تجاری با ارقام یکسان ممکن است وضعیت کاملاً متفاوتی داشته باشند؛ مثلاً یکی وامی دارد که ماه آینده سررسید می‌شود یا با دعوای حقوقی بزرگی روبه‌روست. چنین اطلاعاتی معمولاً فقط در یادداشت‌ها پیدا می‌شود.',
            en: 'Two businesses with identical numbers can be in very different situations: one may have a loan maturing next month, or be facing a major lawsuit. That kind of information usually appears only in the notes.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: صورت‌های مالی در ایران به کجا می‌روند؟', en: 'In practice: where statements go in Iran' },
          text: {
            fa: 'صورت‌های مالی سالانه پیوست **اظهارنامه مالیاتی** به سازمان امور مالیاتی ارائه می‌شوند؛ مهلت و شرایط را از قانون روز بررسی کنید. شرکت‌های سهامی صورت‌ها را به **بازرس قانونی** و در بسیاری موارد به **حسابرس مستقل** می‌دهند و شرکت‌های پذیرفته‌شده در بورس آن‌ها را در **سامانه کدال** منتشر می‌کنند. ارقام صورت‌ها باید با مانده‌های **دفاتر قانونی** (روزنامه و کل) هم‌خوانی داشته باشند. نرم‌افزارهای حسابداری صورت‌ها را از تراز تعدیل‌شده می‌سازند، اما طبقه‌بندی حساب‌ها (مثلاً جاری یا غیرجاری بودن یک وام) را حسابدار باید درست تنظیم و کنترل کند.',
            en: 'Annual statements are filed with the tax authority as part of the **income tax return**; check the current law for deadlines and requirements. Joint-stock companies give their statements to a **statutory inspector** and often to an **independent auditor**, and listed companies publish them on the **Codal** disclosure system. The figures must agree with the **legal books** (journal and general ledger). Accounting software builds the statements from the adjusted trial balance, but the accountant must set up and check the classification of accounts, such as whether a loan is current or non-current.',
          },
        },
        { type: 'h', text: { fa: 'اشتباه‌های رایج', en: 'Common mistakes' } },
        {
          type: 'list',
          items: [
            {
              fa: '**تهیه صورت‌ها از تراز تعدیل‌نشده**: هزینه‌های تحقق‌یافته و درآمدهای صورت‌حساب‌نشده جا می‌مانند و سود اشتباه می‌شود.',
              en: '**Preparing statements from the unadjusted trial balance**: accrued expenses and unbilled revenue are left out and profit is wrong.',
            },
            {
              fa: '**آوردن برداشت، خرید دارایی یا بازپرداخت اصل وام در صورت سود و زیان**: هیچ‌کدام هزینه نیستند.',
              en: '**Putting drawings, asset purchases or loan principal repayments on the income statement**: none of them is an expense.',
            },
            {
              fa: '**آوردن سرمایه ابتدای دوره (50,000) در ترازنامه** به‌جای سرمایه پایان دوره (53,850)؛ نتیجه‌اش ترازنامه‌ای است که تراز نمی‌شود.',
              en: '**Showing beginning capital (50,000) on the balance sheet** instead of ending capital (53,850): the balance sheet will not balance.',
            },
            {
              fa: '**آوردن استهلاک انباشته در بدهی‌ها** یا جمع کردن آن با دارایی‌ها؛ این حساب از بهای دارایی کسر می‌شود.',
              en: '**Listing accumulated depreciation as a liability**, or adding it to assets: it is deducted from the asset’s cost.',
            },
            {
              fa: '**غیرجاری نشان دادن کل وام** در حالی که بخشی از آن ظرف 12 ماه آینده سررسید می‌شود.',
              en: '**Showing the whole loan as non-current** when part of it falls due within the next 12 months.',
            },
            {
              fa: '**تاریخ‌گذاری اشتباه**: «برای ماه منتهی به» روی ترازنامه یا «در تاریخ» روی صورت سود و زیان.',
              en: '**Wrong dating**: “for the month ended” on the balance sheet, or “as at” on the income statement.',
            },
            {
              fa: '**اشتباه علامت در روش غیرمستقیم**: افزایش حساب‌های دریافتنی را اضافه کردن یا استهلاک را برنگرداندن.',
              en: '**Sign errors in the indirect method**: adding an increase in receivables, or forgetting to add back depreciation.',
            },
            {
              fa: '**طبقه‌بندی نادرست جریان‌های نقدی**: خرید تجهیزات در بخش عملیاتی، یا آوردن معامله غیرنقدی در صورت جریان‌های نقدی.',
              en: '**Misclassifying cash flows**: equipment purchases under operating, or a non-cash transaction inside the cash flow statement.',
            },
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    {
      id: 'exercises',
      title: { fa: 'تمرین‌ها', en: 'Exercises' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'هر تمرین یک کسب‌وکار تازه است. اول خودتان حل کنید، بعد راه‌حل را باز کنید. برای هر صورت، سرفصل سه‌سطری و سه کنترل متقابل را فراموش نکنید.',
            en: 'Each exercise is a new business. Solve it yourself first, then open the solution. For every statement, remember the three-line heading and the three cross-checks.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'هر قلم کجا می‌رود؟', en: 'Where does each item go?' },
          difficulty: 'easy',
          problem: {
            fa: '«تعمیرگاه دوچرخه رکاب» متعلق به آقای کامران است. برای هر قلم زیر بگویید در کدام صورت مالی می‌آید و در کدام طبقه.',
            en: 'Rekab Bike Repair is owned by Kamran. For each item below, state which financial statement it appears in and under which heading.',
          },
          given: {
            head: [
              { fa: 'ردیف', en: 'No.' },
              { fa: 'قلم', en: 'Item' },
            ],
            rows: [
              [1, { fa: 'درآمد تعمیرات', en: 'Repair revenue' }],
              [2, { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }],
              [3, { fa: 'ابزار و تجهیزات کارگاه', en: 'Workshop tools and equipment' }],
              [4, { fa: 'استهلاک انباشته ابزار', en: 'Accumulated depreciation, tools' }],
              [5, { fa: 'دستمزد پرداختنی', en: 'Wages payable' }],
              [6, { fa: 'وام بانکی با سررسید 3 سال بعد', en: 'Bank loan due in 3 years' }],
              [7, { fa: 'برداشت کامران', en: 'Drawings (Kamran)' }],
              [8, { fa: 'هزینه استهلاک', en: 'Depreciation expense' }],
              [9, { fa: 'پیش‌دریافت از مشتریان', en: 'Customer deposits (unearned revenue)' }],
              [10, { fa: 'پیش‌پرداخت اجاره 6 ماهه', en: 'Six months of prepaid rent' }],
              [11, { fa: 'وجه پرداخت‌شده برای خرید کمپرسور جدید', en: 'Cash paid for a new compressor' }],
              [12, { fa: 'بازپرداخت نقدی بخشی از اصل وام', en: 'Cash repayment of part of the loan principal' }],
            ],
          },
          hint: {
            fa: 'درآمد و هزینه → صورت سود و زیان؛ سرمایه و برداشت → صورت تغییرات در حقوق مالکانه؛ دارایی و بدهی → ترازنامه؛ خود جابه‌جایی پول → صورت جریان‌های نقدی.',
            en: 'Revenue and expense → income statement; capital and drawings → changes in equity; assets and liabilities → balance sheet; the movement of cash itself → cash flow statement.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'ردیف', en: 'No.' },
                { fa: 'صورت', en: 'Statement' },
                { fa: 'طبقه', en: 'Heading' },
              ],
              rows: [
                [1, { fa: 'سود و زیان', en: 'Income statement' }, { fa: 'درآمد', en: 'Revenue' }],
                [2, { fa: 'ترازنامه', en: 'Balance sheet' }, { fa: 'دارایی جاری', en: 'Current asset' }],
                [3, { fa: 'ترازنامه', en: 'Balance sheet' }, { fa: 'دارایی غیرجاری', en: 'Non-current asset' }],
                [4, { fa: 'ترازنامه', en: 'Balance sheet' }, { fa: 'کاهنده دارایی غیرجاری (از بهای ابزار کسر می‌شود)', en: 'Contra non-current asset (deducted from the tools’ cost)' }],
                [5, { fa: 'ترازنامه', en: 'Balance sheet' }, { fa: 'بدهی جاری', en: 'Current liability' }],
                [6, { fa: 'ترازنامه', en: 'Balance sheet' }, { fa: 'بدهی غیرجاری', en: 'Non-current liability' }],
                [7, { fa: 'تغییرات حقوق مالکانه', en: 'Changes in equity' }, { fa: 'کاهش سرمایه', en: 'Reduction of capital' }],
                [8, { fa: 'سود و زیان', en: 'Income statement' }, { fa: 'هزینه', en: 'Expense' }],
                [9, { fa: 'ترازنامه', en: 'Balance sheet' }, { fa: 'بدهی جاری', en: 'Current liability' }],
                [10, { fa: 'ترازنامه', en: 'Balance sheet' }, { fa: 'دارایی جاری', en: 'Current asset' }],
                [11, { fa: 'جریان‌های نقدی', en: 'Cash flow statement' }, { fa: 'خروجی فعالیت‌های سرمایه‌گذاری', en: 'Investing outflow' }],
                [12, { fa: 'جریان‌های نقدی', en: 'Cash flow statement' }, { fa: 'خروجی فعالیت‌های تأمین مالی', en: 'Financing outflow' }],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'برداشت (ردیف 7) علاوه بر صورت تغییرات در حقوق مالکانه، به‌عنوان خروجی تأمین مالی در صورت جریان‌های نقدی هم می‌آید. پیش‌دریافت از مشتریان (ردیف 9) بدهی است، نه درآمد، تا زمانی که کار انجام شود.',
                en: 'Drawings (item 7) also appear as a financing outflow in the cash flow statement. Customer deposits (item 9) are a liability, not revenue, until the work is done.',
              },
            },
          ],
          answer: {
            fa: 'سود و زیان: 1 و 8؛ تغییرات حقوق مالکانه: 7؛ ترازنامه: 2، 3، 4، 5، 6، 9 و 10؛ جریان‌های نقدی: 11 (سرمایه‌گذاری) و 12 (تأمین مالی).',
            en: 'Income statement: 1 and 8; changes in equity: 7; balance sheet: 2, 3, 4, 5, 6, 9 and 10; cash flow statement: 11 (investing) and 12 (financing).',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'ماهی که با زیان تمام شد', en: 'A month that ended in a loss' },
          difficulty: 'easy',
          problem: {
            fa: '«آتلیه عکاسی نگاه» متعلق به رضا است. سرمایه رضا در ابتدای ماه 40,000 بود و در روز 10 ماه، 5,000 دیگر آورده نقدی گذاشت. مانده‌های تعدیل‌شده پایان ماه در جدول آمده است. صورت سود و زیان و صورت تغییرات در حقوق مالکانه را تهیه کنید.',
            en: 'Negah Photo Studio is owned by Reza. Reza’s capital was 40,000 at the start of the month, and on Day 10 he invested another 5,000 in cash. The adjusted month-end balances are below. Prepare the income statement and the statement of changes in equity.',
          },
          given: {
            head: [
              { fa: 'حساب', en: 'Account' },
              { fa: 'مانده', en: 'Balance' },
            ],
            rows: [
              [{ fa: 'درآمد عکاسی', en: 'Photography revenue' }, 9000],
              [{ fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' }, 6000],
              [{ fa: 'هزینه اجاره', en: 'Rent expense' }, 3000],
              [{ fa: 'هزینه تبلیغات', en: 'Advertising expense' }, 1200],
              [{ fa: 'هزینه استهلاک', en: 'Depreciation expense' }, 700],
              [{ fa: 'هزینه آب، برق و اینترنت', en: 'Utilities expense' }, 500],
              [{ fa: 'سرمایه رضا (شامل 5,000 آورده این ماه)', en: 'Capital, Reza (includes this month’s 5,000)' }, 45000],
              [{ fa: 'برداشت رضا', en: 'Drawings, Reza' }, 1000],
            ],
            numericCols: [1],
          },
          hint: {
            fa: 'مانده 45,000 سرمایه در تراز، سرمایه ابتدای دوره به‌علاوه آورده است. اگر هزینه‌ها از درآمد بیشتر باشد، زیان خالص سرمایه را کم می‌کند.',
            en: 'The 45,000 capital balance is beginning capital plus the new investment. If expenses exceed revenue, the net loss reduces capital.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'آتلیه عکاسی نگاه: صورت سود و زیان برای ماه', en: 'Negah Photo Studio: Income statement for the month' },
              head: [
                { fa: 'شرح', en: 'Item' },
                { fa: 'مبلغ', en: 'Amount' },
                { fa: 'جمع', en: 'Total' },
              ],
              rows: [
                [{ fa: 'درآمد عکاسی', en: 'Photography revenue' }, blank, 9000],
                [{ fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' }, 6000, blank],
                [{ fa: 'هزینه اجاره', en: 'Rent expense' }, 3000, blank],
                [{ fa: 'هزینه تبلیغات', en: 'Advertising expense' }, 1200, blank],
                [{ fa: 'هزینه استهلاک', en: 'Depreciation expense' }, 700, blank],
                [{ fa: 'هزینه آب، برق و اینترنت', en: 'Utilities expense' }, 500, blank],
                [{ fa: 'جمع هزینه‌ها', en: 'Total expenses' }, blank, 11400],
                [{ fa: '**زیان خالص**', en: '**Net loss**' }, blank, -2400],
              ],
              numericCols: [1, 2],
            },
            {
              type: 'table',
              caption: { fa: 'آتلیه عکاسی نگاه: صورت تغییرات در حقوق مالکانه', en: 'Negah Photo Studio: Statement of changes in equity' },
              head: [
                { fa: 'شرح', en: 'Item' },
                { fa: 'مبلغ', en: 'Amount' },
              ],
              rows: [
                [{ fa: 'سرمایه رضا، ابتدای ماه', en: 'Capital, Reza, beginning of month' }, 40000],
                [{ fa: 'آورده رضا', en: 'Owner investment' }, 5000],
                [{ fa: 'زیان خالص ماه', en: 'Net loss for the month' }, -2400],
                [{ fa: 'برداشت رضا', en: 'Drawings' }, -1000],
                [{ fa: '**سرمایه رضا، پایان ماه**', en: '**Capital, Reza, end of month**' }, 41600],
              ],
              numericCols: [1],
            },
            {
              type: 'callout',
              tone: 'warning',
              text: {
                fa: 'اشتباه رایج: شروع صورت تغییرات در حقوق مالکانه از 45,000. در این صورت آورده 5,000 دو بار حساب می‌شود و سرمایه پایان ماه 46,600 درمی‌آید.',
                en: 'Common slip: starting the statement of changes in equity at 45,000. That counts the 5,000 investment twice and gives ending capital of 46,600.',
              },
            },
          ],
          answer: {
            fa: 'زیان خالص 2,400 (11,400 − 9,000)؛ سرمایه پایان ماه 40,000 + 5,000 − 2,400 − 1,000 = 41,600.',
            en: 'Net loss of 2,400 (11,400 − 9,000); ending capital 40,000 + 5,000 − 2,400 − 1,000 = 41,600.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'طبقه‌بندی جریان‌های نقدی یک کافه', en: 'Classifying a café’s cash flows' },
          difficulty: 'medium',
          problem: {
            fa: '«کافه دانه» ماه را با 6,000 وجه نقد شروع کرد. دریافت‌ها و پرداخت‌های نقدی ماه در جدول آمده است. صورت جریان‌های نقدی (روش مستقیم) را تهیه کنید و وجه نقد پایان ماه را به دست آورید. کافه بهره پرداختی را جزو فعالیت‌های عملیاتی طبقه‌بندی می‌کند.',
            en: 'Daneh Café began the month with 6,000 of cash. Its cash receipts and payments for the month are listed below. Prepare a cash flow statement (direct method) and find the month-end cash balance. The café classifies interest paid as operating.',
          },
          given: {
            head: [
              { fa: 'رویداد نقدی', en: 'Cash event' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            rows: [
              [{ fa: 'دریافت از مشتریان', en: 'Collected from customers' }, 31000],
              [{ fa: 'پرداخت به تأمین‌کنندگان قهوه و مواد', en: 'Paid to coffee and food suppliers' }, 12500],
              [{ fa: 'پرداخت دستمزد', en: 'Wages paid' }, 8000],
              [{ fa: 'پرداخت اجاره', en: 'Rent paid' }, 4000],
              [{ fa: 'پرداخت بهره وام', en: 'Interest paid on the loan' }, 300],
              [{ fa: 'خرید دستگاه اسپرسو', en: 'Purchase of an espresso machine' }, 9000],
              [{ fa: 'فروش مبلمان قدیمی', en: 'Sale of old furniture' }, 1200],
              [{ fa: 'دریافت وام بانکی', en: 'Bank loan received' }, 10000],
              [{ fa: 'بازپرداخت اصل وام', en: 'Repayment of loan principal' }, 2000],
              [{ fa: 'برداشت مالک', en: 'Owner drawings' }, 2500],
            ],
            numericCols: [1],
          },
          hint: {
            fa: 'هر رویداد را بپرسید: به فعالیت اصلی کافه مربوط است، به دارایی بلندمدت، یا به مالک و وام‌دهنده؟ اصل وام تأمین مالی است، بهره آن (طبق رویه کافه) عملیاتی.',
            en: 'Ask of each event: is it the café’s main activity, a long-term asset, or a deal with the owner or a lender? Loan principal is financing; the interest (under the café’s policy) is operating.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'کافه دانه: صورت جریان‌های نقدی (روش مستقیم)', en: 'Daneh Café: Cash flow statement (direct method)' },
              head: [
                { fa: 'شرح', en: 'Item' },
                { fa: 'مبلغ', en: 'Amount' },
                { fa: 'جمع', en: 'Total' },
              ],
              rows: [
                [{ fa: '**فعالیت‌های عملیاتی**', en: '**Operating activities**' }, blank, blank],
                [{ fa: 'دریافت از مشتریان', en: 'Collected from customers' }, 31000, blank],
                [{ fa: 'پرداخت به تأمین‌کنندگان', en: 'Paid to suppliers' }, -12500, blank],
                [{ fa: 'پرداخت دستمزد', en: 'Wages paid' }, -8000, blank],
                [{ fa: 'پرداخت اجاره', en: 'Rent paid' }, -4000, blank],
                [{ fa: 'پرداخت بهره', en: 'Interest paid' }, -300, blank],
                [{ fa: 'خالص وجه نقد حاصل از فعالیت‌های عملیاتی', en: 'Net cash from operating activities' }, blank, 6200],
                [{ fa: '**فعالیت‌های سرمایه‌گذاری**', en: '**Investing activities**' }, blank, blank],
                [{ fa: 'خرید دستگاه اسپرسو', en: 'Purchase of espresso machine' }, -9000, blank],
                [{ fa: 'فروش مبلمان قدیمی', en: 'Sale of old furniture' }, 1200, blank],
                [{ fa: 'خالص وجه نقد مصرف‌شده در فعالیت‌های سرمایه‌گذاری', en: 'Net cash used in investing activities' }, blank, -7800],
                [{ fa: '**فعالیت‌های تأمین مالی**', en: '**Financing activities**' }, blank, blank],
                [{ fa: 'دریافت وام بانکی', en: 'Bank loan received' }, 10000, blank],
                [{ fa: 'بازپرداخت اصل وام', en: 'Loan principal repaid' }, -2000, blank],
                [{ fa: 'برداشت مالک', en: 'Owner drawings' }, -2500, blank],
                [{ fa: 'خالص وجه نقد حاصل از فعالیت‌های تأمین مالی', en: 'Net cash from financing activities' }, blank, 5500],
                [{ fa: '**خالص افزایش در وجه نقد**', en: '**Net increase in cash**' }, blank, 3900],
                [{ fa: 'وجه نقد ابتدای ماه', en: 'Cash at the beginning of the month' }, blank, 6000],
                [{ fa: '**وجه نقد پایان ماه**', en: '**Cash at the end of the month**' }, blank, 9900],
              ],
              numericCols: [1, 2],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'فروش مبلمان قدیمی ورودی **سرمایه‌گذاری** است، نه درآمد عملیاتی، چون کافه کارش فروش مبلمان نیست. اگر کافه رویه طبقه‌بندی بهره در تأمین مالی را برگزیده بود، عملیاتی 6,500 و تأمین مالی 5,200 می‌شد؛ خالص تغییر وجه نقد همان 3,900 می‌ماند.',
                en: 'Selling old furniture is an **investing** inflow, not operating revenue, because the café is not in the furniture business. Had the café chosen to classify interest as financing, operating would be 6,500 and financing 5,200; the net change in cash would still be 3,900.',
              },
            },
          ],
          answer: {
            fa: 'عملیاتی 6,200؛ سرمایه‌گذاری 7,800 خروجی خالص؛ تأمین مالی 5,500؛ افزایش وجه نقد 3,900 و وجه نقد پایان ماه 9,900.',
            en: 'Operating 6,200; investing a net outflow of 7,800; financing 5,500; cash up by 3,900 to a month-end balance of 9,900.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'روش غیرمستقیم برای یک لوازم‌التحریر فروشی', en: 'The indirect method for a stationery shop' },
          difficulty: 'medium',
          problem: {
            fa: 'سود خالص سال «فروشگاه لوازم‌التحریر قلم» 18,000 و هزینه استهلاک آن 4,000 بوده است. مانده اقلام جاری در ابتدا و پایان سال در جدول آمده است. خالص وجه نقد حاصل از فعالیت‌های عملیاتی را به روش غیرمستقیم محاسبه کنید و توضیح دهید چرا از سود خالص بیشتر است.',
            en: 'Ghalam Stationery earned net income of 18,000 for the year, after 4,000 of depreciation. Its current items at the start and end of the year are below. Compute net cash from operating activities by the indirect method and explain why it is higher than net income.',
          },
          given: {
            head: [
              { fa: 'قلم', en: 'Item' },
              { fa: 'ابتدای سال', en: 'Start of year' },
              { fa: 'پایان سال', en: 'End of year' },
            ],
            rows: [
              [{ fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, 9000, 12500],
              [{ fa: 'موجودی کالا', en: 'Inventory' }, 15000, 13000],
              [{ fa: 'پیش‌پرداخت‌ها', en: 'Prepaid expenses' }, 1200, 1500],
              [{ fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, 7000, 5800],
              [{ fa: 'دستمزد پرداختنی', en: 'Wages payable' }, 900, 1400],
            ],
            numericCols: [1, 2],
          },
          hint: {
            fa: 'برای هر قلم، اول جهت تغییر (افزایش یا کاهش) را بنویسید، بعد قاعده علامت‌ها را به کار ببرید.',
            en: 'For each item, first write down the direction of the change (increase or decrease), then apply the sign rules.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'فروشگاه قلم: تطبیق سود خالص با وجه نقد عملیاتی', en: 'Ghalam Stationery: reconciling net income to operating cash' },
              head: [
                { fa: 'شرح', en: 'Item' },
                { fa: 'مبلغ', en: 'Amount' },
              ],
              rows: [
                [{ fa: 'سود خالص', en: 'Net income' }, 18000],
                [{ fa: 'اضافه می‌شود: استهلاک', en: 'Add back: depreciation' }, 4000],
                [{ fa: 'افزایش حساب‌های دریافتنی (12,500 − 9,000)', en: 'Increase in receivables (12,500 − 9,000)' }, -3500],
                [{ fa: 'کاهش موجودی کالا (15,000 − 13,000)', en: 'Decrease in inventory (15,000 − 13,000)' }, 2000],
                [{ fa: 'افزایش پیش‌پرداخت‌ها (1,500 − 1,200)', en: 'Increase in prepaid expenses (1,500 − 1,200)' }, -300],
                [{ fa: 'کاهش حساب‌های پرداختنی (7,000 − 5,800)', en: 'Decrease in accounts payable (7,000 − 5,800)' }, -1200],
                [{ fa: 'افزایش دستمزد پرداختنی (1,400 − 900)', en: 'Increase in wages payable (1,400 − 900)' }, 500],
                [{ fa: '**خالص وجه نقد حاصل از فعالیت‌های عملیاتی**', en: '**Net cash from operating activities**' }, 19500],
              ],
              numericCols: [1],
            },
            {
              type: 'p',
              text: {
                fa: 'وجه نقد عملیاتی 1,500 بیشتر از سود است، عمدتاً به این دلیل که 4,000 استهلاک غیرنقدی بوده و فروشگاه 2,000 از موجودی کالایش را فروخته بدون آنکه دوباره بخرد. در مقابل، کندتر شدن وصول از مشتریان (3,500) و پرداخت بخشی از بدهی به تأمین‌کنندگان (1,200) بخشی از این مازاد را خنثی کرده است.',
                en: 'Operating cash is 1,500 higher than profit, mainly because the 4,000 of depreciation used no cash and the shop sold 2,000 of inventory without replacing it. Against that, slower collections from customers (3,500) and paying down suppliers (1,200) absorbed part of the surplus.',
              },
            },
          ],
          answer: {
            fa: 'خالص وجه نقد حاصل از فعالیت‌های عملیاتی 19,500 است؛ یعنی 1,500 بیشتر از سود خالص.',
            en: 'Net cash from operating activities is 19,500, which is 1,500 more than net income.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'مجموعه کامل صورت‌ها برای یک کسب‌وکار تازه', en: 'A complete set of statements for a new business' },
          difficulty: 'hard',
          problem: {
            fa: 'مریم «خدمات نظافتی بهار» را این ماه راه انداخت. تراز آزمایشی تعدیل‌شده پایان نخستین ماه در جدول آمده است (همه مانده‌های ابتدای دوره صفر بوده‌اند). جریان‌های نقدی سرمایه‌گذاری و تأمین مالی ماه فقط این‌ها بوده‌اند: مریم 25,000 آورده نقدی گذاشت؛ 6,000 وام دوساله با سفته گرفت؛ تجهیزات نظافت را 12,000 نقد خرید؛ و 1,500 برداشت کرد. (1) صورت سود و زیان، (2) صورت تغییرات در حقوق مالکانه، (3) ترازنامه طبقه‌بندی‌شده و (4) صورت جریان‌های نقدی به روش غیرمستقیم را تهیه کنید و سه کنترل متقابل را انجام دهید.',
            en: 'Maryam started Bahar Cleaning Services this month. The adjusted trial balance at the end of the first month is below (every opening balance was zero). The only investing and financing cash flows were: Maryam invested 25,000 in cash; she borrowed 6,000 on a two-year note; she bought cleaning equipment for 12,000 in cash; and she withdrew 1,500. Prepare (1) the income statement, (2) the statement of changes in equity, (3) a classified balance sheet and (4) a cash flow statement by the indirect method, and run the three cross-checks.',
          },
          given: {
            head: [
              { fa: 'حساب', en: 'Account' },
              { fa: 'بدهکار', en: 'Debit' },
              { fa: 'بستانکار', en: 'Credit' },
            ],
            rows: [
              [{ fa: 'موجودی نقد', en: 'Cash' }, 20750, blank],
              [{ fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, 3200, blank],
              [{ fa: 'ملزومات نظافت', en: 'Cleaning supplies' }, 900, blank],
              [{ fa: 'پیش‌پرداخت اجاره', en: 'Prepaid rent' }, 1600, blank],
              [{ fa: 'تجهیزات', en: 'Equipment' }, 12000, blank],
              [{ fa: 'استهلاک انباشته تجهیزات', en: 'Accumulated depreciation' }, blank, 200],
              [{ fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, blank, 1100],
              [{ fa: 'دستمزد پرداختنی', en: 'Wages payable' }, blank, 400],
              [{ fa: 'پیش‌دریافت درآمد', en: 'Unearned revenue' }, blank, 600],
              [{ fa: 'بهره پرداختنی', en: 'Interest payable' }, blank, 60],
              [{ fa: 'سفته پرداختنی (سررسید 2 سال بعد)', en: 'Note payable (due in 2 years)' }, blank, 6000],
              [{ fa: 'سرمایه مریم', en: 'Capital, Maryam' }, blank, 25000],
              [{ fa: 'برداشت مریم', en: 'Drawings, Maryam' }, 1500, blank],
              [{ fa: 'درآمد خدمات نظافت', en: 'Cleaning revenue' }, blank, 14800],
              [{ fa: 'هزینه دستمزد', en: 'Wages expense' }, 5400, blank],
              [{ fa: 'هزینه ملزومات', en: 'Supplies expense' }, 1300, blank],
              [{ fa: 'هزینه اجاره', en: 'Rent expense' }, 800, blank],
              [{ fa: 'هزینه آب، برق و اینترنت', en: 'Utilities expense' }, 450, blank],
              [{ fa: 'هزینه استهلاک', en: 'Depreciation expense' }, 200, blank],
              [{ fa: 'هزینه بهره', en: 'Interest expense' }, 60, blank],
              [{ fa: '**جمع**', en: '**Total**' }, 48160, 48160],
            ],
            numericCols: [1, 2],
          },
          hint: {
            fa: 'ترتیب را رعایت کنید: سود و زیان، تغییرات حقوق مالکانه، ترازنامه، جریان‌های نقدی. چون ماه اول است، تغییر هر قلم جاری همان مانده پایان دوره آن است. پیش‌دریافت درآمد یک بدهی جاری است و افزایشش به وجه نقد عملیاتی اضافه می‌شود.',
            en: 'Keep the order: income statement, changes in equity, balance sheet, cash flows. Because this is the first month, the change in each current item equals its ending balance. Unearned revenue is a current liability, and its increase is added to operating cash.',
          },
          solution: [
            {
              type: 'table',
              caption: {
                fa: '(1) خدمات نظافتی بهار: صورت سود و زیان برای نخستین ماه',
                en: '(1) Bahar Cleaning Services: Income statement for the first month',
              },
              head: [
                { fa: 'شرح', en: 'Item' },
                { fa: 'مبلغ', en: 'Amount' },
                { fa: 'جمع', en: 'Total' },
              ],
              rows: [
                [{ fa: 'درآمد خدمات نظافت', en: 'Cleaning revenue' }, blank, 14800],
                [{ fa: 'هزینه دستمزد', en: 'Wages expense' }, 5400, blank],
                [{ fa: 'هزینه ملزومات', en: 'Supplies expense' }, 1300, blank],
                [{ fa: 'هزینه اجاره', en: 'Rent expense' }, 800, blank],
                [{ fa: 'هزینه آب، برق و اینترنت', en: 'Utilities expense' }, 450, blank],
                [{ fa: 'هزینه استهلاک', en: 'Depreciation expense' }, 200, blank],
                [{ fa: 'هزینه بهره', en: 'Interest expense' }, 60, blank],
                [{ fa: 'جمع هزینه‌ها', en: 'Total expenses' }, blank, 8210],
                [{ fa: '**سود خالص**', en: '**Net income**' }, blank, 6590],
              ],
              numericCols: [1, 2],
            },
            {
              type: 'table',
              caption: {
                fa: '(2) خدمات نظافتی بهار: صورت تغییرات در حقوق مالکانه',
                en: '(2) Bahar Cleaning Services: Statement of changes in equity',
              },
              head: [
                { fa: 'شرح', en: 'Item' },
                { fa: 'مبلغ', en: 'Amount' },
              ],
              rows: [
                [{ fa: 'سرمایه مریم، ابتدای ماه', en: 'Capital, Maryam, beginning of month' }, 0],
                [{ fa: 'آورده مریم', en: 'Owner investment' }, 25000],
                [{ fa: 'سود خالص', en: 'Net income' }, 6590],
                [{ fa: 'برداشت مریم', en: 'Drawings' }, -1500],
                [{ fa: '**سرمایه مریم، پایان ماه**', en: '**Capital, Maryam, end of month**' }, 30090],
              ],
              numericCols: [1],
            },
            {
              type: 'table',
              caption: {
                fa: '(3) خدمات نظافتی بهار: ترازنامه در پایان نخستین ماه',
                en: '(3) Bahar Cleaning Services: Balance sheet at the end of the first month',
              },
              head: [
                { fa: 'شرح', en: 'Item' },
                { fa: 'مبلغ', en: 'Amount' },
                { fa: 'جمع', en: 'Total' },
              ],
              rows: [
                [{ fa: '**دارایی‌های جاری**', en: '**Current assets**' }, blank, blank],
                [{ fa: 'موجودی نقد', en: 'Cash' }, 20750, blank],
                [{ fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, 3200, blank],
                [{ fa: 'ملزومات نظافت', en: 'Cleaning supplies' }, 900, blank],
                [{ fa: 'پیش‌پرداخت اجاره', en: 'Prepaid rent' }, 1600, blank],
                [{ fa: 'جمع دارایی‌های جاری', en: 'Total current assets' }, blank, 26450],
                [{ fa: '**دارایی‌های غیرجاری**', en: '**Non-current assets**' }, blank, blank],
                [{ fa: 'تجهیزات (بهای تمام‌شده)', en: 'Equipment, at cost' }, 12000, blank],
                [{ fa: 'کسر می‌شود: استهلاک انباشته', en: 'Less: accumulated depreciation' }, -200, blank],
                [{ fa: 'تجهیزات، ارزش دفتری', en: 'Equipment, book value' }, blank, 11800],
                [{ fa: '**جمع دارایی‌ها**', en: '**Total assets**' }, blank, 38250],
                [{ fa: '**بدهی‌های جاری**', en: '**Current liabilities**' }, blank, blank],
                [{ fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, 1100, blank],
                [{ fa: 'دستمزد پرداختنی', en: 'Wages payable' }, 400, blank],
                [{ fa: 'پیش‌دریافت درآمد', en: 'Unearned revenue' }, 600, blank],
                [{ fa: 'بهره پرداختنی', en: 'Interest payable' }, 60, blank],
                [{ fa: 'جمع بدهی‌های جاری', en: 'Total current liabilities' }, blank, 2160],
                [{ fa: '**بدهی‌های غیرجاری**', en: '**Non-current liabilities**' }, blank, blank],
                [{ fa: 'سفته پرداختنی', en: 'Note payable' }, blank, 6000],
                [{ fa: '**جمع بدهی‌ها**', en: '**Total liabilities**' }, blank, 8160],
                [{ fa: '**حقوق مالکانه**', en: '**Owner’s equity**' }, blank, blank],
                [{ fa: 'سرمایه مریم', en: 'Capital, Maryam' }, blank, 30090],
                [{ fa: '**جمع بدهی‌ها و حقوق مالکانه**', en: '**Total liabilities and equity**' }, blank, 38250],
              ],
              numericCols: [1, 2],
            },
            {
              type: 'table',
              caption: {
                fa: '(4) خدمات نظافتی بهار: صورت جریان‌های نقدی (روش غیرمستقیم)',
                en: '(4) Bahar Cleaning Services: Cash flow statement (indirect method)',
              },
              head: [
                { fa: 'شرح', en: 'Item' },
                { fa: 'مبلغ', en: 'Amount' },
                { fa: 'جمع', en: 'Total' },
              ],
              rows: [
                [{ fa: '**فعالیت‌های عملیاتی**', en: '**Operating activities**' }, blank, blank],
                [{ fa: 'سود خالص', en: 'Net income' }, 6590, blank],
                [{ fa: 'اضافه می‌شود: استهلاک', en: 'Add back: depreciation' }, 200, blank],
                [{ fa: 'افزایش حساب‌های دریافتنی', en: 'Increase in accounts receivable' }, -3200, blank],
                [{ fa: 'افزایش ملزومات', en: 'Increase in supplies' }, -900, blank],
                [{ fa: 'افزایش پیش‌پرداخت اجاره', en: 'Increase in prepaid rent' }, -1600, blank],
                [{ fa: 'افزایش حساب‌های پرداختنی', en: 'Increase in accounts payable' }, 1100, blank],
                [{ fa: 'افزایش دستمزد پرداختنی', en: 'Increase in wages payable' }, 400, blank],
                [{ fa: 'افزایش پیش‌دریافت درآمد', en: 'Increase in unearned revenue' }, 600, blank],
                [{ fa: 'افزایش بهره پرداختنی', en: 'Increase in interest payable' }, 60, blank],
                [{ fa: 'خالص وجه نقد حاصل از فعالیت‌های عملیاتی', en: 'Net cash from operating activities' }, blank, 3250],
                [{ fa: '**فعالیت‌های سرمایه‌گذاری**', en: '**Investing activities**' }, blank, blank],
                [{ fa: 'خرید تجهیزات', en: 'Purchase of equipment' }, -12000, blank],
                [{ fa: 'خالص وجه نقد مصرف‌شده در فعالیت‌های سرمایه‌گذاری', en: 'Net cash used in investing activities' }, blank, -12000],
                [{ fa: '**فعالیت‌های تأمین مالی**', en: '**Financing activities**' }, blank, blank],
                [{ fa: 'آورده مریم', en: 'Owner investment' }, 25000, blank],
                [{ fa: 'دریافت وام (سفته)', en: 'Note payable issued for cash' }, 6000, blank],
                [{ fa: 'برداشت مریم', en: 'Drawings' }, -1500, blank],
                [{ fa: 'خالص وجه نقد حاصل از فعالیت‌های تأمین مالی', en: 'Net cash from financing activities' }, blank, 29500],
                [{ fa: '**خالص افزایش در وجه نقد**', en: '**Net increase in cash**' }, blank, 20750],
                [{ fa: 'وجه نقد ابتدای ماه', en: 'Cash at the beginning of the month' }, blank, 0],
                [{ fa: '**وجه نقد پایان ماه**', en: '**Cash at the end of the month**' }, blank, 20750],
              ],
              numericCols: [1, 2],
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'کنترل 1: سود خالص', en: 'Check 1: net income' },
                  text: {
                    fa: 'سود 6,590 در صورت سود و زیان همان رقمی است که به صورت تغییرات در حقوق مالکانه رفته است.',
                    en: 'The 6,590 profit on the income statement is the same figure carried into the statement of changes in equity.',
                  },
                },
                {
                  title: { fa: 'کنترل 2: سرمایه پایان دوره', en: 'Check 2: ending capital' },
                  text: {
                    fa: 'سرمایه 30,090 در ترازنامه آمده و ترازنامه تراز است: 38,250 = 8,160 + 30,090.',
                    en: 'The 30,090 capital appears on the balance sheet, and it balances: 38,250 = 8,160 + 30,090.',
                  },
                },
                {
                  title: { fa: 'کنترل 3: وجه نقد', en: 'Check 3: cash' },
                  text: {
                    fa: 'وجه نقد پایان ماه در صورت جریان‌های نقدی (20,750) با موجودی نقد ترازنامه برابر است.',
                    en: 'Month-end cash on the cash flow statement (20,750) equals cash on the balance sheet.',
                  },
                },
                {
                  title: { fa: 'کنترل اضافی با روش مستقیم', en: 'Extra check with the direct method' },
                  text: {
                    fa: 'دریافت از مشتریان = 14,800 − 3,200 + 600 = 12,200. پرداخت‌ها: دستمزد 5,000، اجاره 2,400 (سه ماه)، ملزومات 1,100، آب و برق 450؛ جمعاً 8,950. خالص: 12,200 − 8,950 = 3,250، همان رقم روش غیرمستقیم.',
                    en: 'Received from customers = 14,800 − 3,200 + 600 = 12,200. Payments: wages 5,000, rent 2,400 (three months), supplies 1,100, utilities 450: 8,950 in total. Net: 12,200 − 8,950 = 3,250, the same as the indirect method.',
                  },
                },
              ],
            },
          ],
          answer: {
            fa: 'سود خالص 6,590؛ سرمایه پایان ماه 30,090؛ جمع دارایی‌ها 38,250؛ وجه نقد عملیاتی 3,250؛ وجه نقد پایان ماه 20,750.',
            en: 'Net income 6,590; ending capital 30,090; total assets 38,250; operating cash flow 3,250; month-end cash 20,750.',
          },
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    {
      id: 'summary',
      title: { fa: 'جمع‌بندی', en: 'Summary' },
      blocks: [
        {
          type: 'list',
          items: [
            {
              fa: 'صورت‌های مالی از **تراز آزمایشی تعدیل‌شده** تهیه می‌شوند و هر حساب دقیقاً به یک صورت می‌رود.',
              en: 'Statements are prepared from the **adjusted trial balance**, and every account goes to exactly one statement.',
            },
            {
              fa: 'ترتیب تهیه: سود و زیان ← تغییرات حقوق مالکانه ← ترازنامه ← جریان‌های نقدی؛ هر صورت رقمی به صورت بعدی می‌دهد.',
              en: 'Order: income statement → changes in equity → balance sheet → cash flows; each one hands a figure to the next.',
            },
            {
              fa: 'صورت سود و زیان عملکرد یک دوره است: درآمدها منهای هزینه‌ها. برداشت، خرید دارایی و وام در آن جایی ندارند. نوا: سود خالص 4,850.',
              en: 'The income statement measures one period: revenues minus expenses. Drawings, asset purchases and loans do not belong there. Nova: net income 4,850.',
            },
            {
              fa: 'سرمایه پایان دوره = سرمایه ابتدای دوره + آورده + سود خالص − برداشت. نوا: 53,850.',
              en: 'Ending capital = beginning capital + contributions + net income − drawings. Nova: 53,850.',
            },
            {
              fa: 'ترازنامه طبقه‌بندی‌شده دارایی‌ها و بدهی‌ها را به جاری و غیرجاری تقسیم می‌کند و همیشه تراز است: 71,100 = 17,250 + 53,850.',
              en: 'The classified balance sheet splits assets and liabilities into current and non-current, and it always balances: 71,100 = 17,250 + 53,850.',
            },
            {
              fa: 'صورت جریان‌های نقدی سه طبقه دارد. روش مستقیم دریافت‌ها و پرداخت‌ها را فهرست می‌کند و روش غیرمستقیم از سود خالص شروع می‌کند؛ هر دو برای نوا به 2,300 می‌رسند.',
              en: 'The cash flow statement has three sections. The direct method lists receipts and payments; the indirect method starts from net income; both give Nova 2,300.',
            },
            {
              fa: 'یادداشت‌های توضیحی جزء صورت‌های مالی‌اند؛ پیش از نهایی کردن، سه کنترل متقابل را انجام دهید.',
              en: 'The notes are part of the statements; run the three cross-checks before you finalise.',
            },
          ],
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'صورت‌های مالی', en: 'Financial statements' },
              def: {
                fa: 'گزارش‌های ساختاریافته‌ای که وضعیت مالی، عملکرد و جریان‌های نقدی واحد تجاری را برای استفاده‌کنندگان خلاصه می‌کنند.',
                en: 'Structured reports summarising an entity’s financial position, performance and cash flows for users.',
              },
            },
            {
              term: { fa: 'تراز آزمایشی تعدیل‌شده', en: 'Adjusted trial balance' },
              def: {
                fa: 'فهرست مانده حساب‌ها پس از ثبت‌های اصلاحی؛ منبع مستقیم تهیه صورت‌های مالی.',
                en: 'The list of account balances after the adjusting entries: the direct source of the financial statements.',
              },
            },
            {
              term: { fa: 'صورت سود و زیان', en: 'Income statement' },
              def: {
                fa: 'صورتی که درآمدها و هزینه‌های یک دوره و سود یا زیان خالص حاصل از آن‌ها را نشان می‌دهد.',
                en: 'Reports a period’s revenues and expenses and the resulting net income or loss.',
              },
            },
            {
              term: { fa: 'صورت سود و زیان چندمرحله‌ای', en: 'Multi-step income statement' },
              def: {
                fa: 'قالبی که سودهای میانی مانند سود ناخالص و سود عملیاتی را پیش از سود خالص نشان می‌دهد.',
                en: 'A layout that shows intermediate subtotals such as gross profit and operating profit before net income.',
              },
            },
            {
              term: { fa: 'صورت تغییرات در حقوق مالکانه', en: 'Statement of changes in equity' },
              def: {
                fa: 'صورتی که تغییر سرمایه مالک را از ابتدا تا پایان دوره توضیح می‌دهد: آورده، سود یا زیان خالص و برداشت.',
                en: 'Explains how owner’s equity moved over the period: contributions, net income or loss, and drawings.',
              },
            },
            {
              term: { fa: 'ترازنامه (صورت وضعیت مالی)', en: 'Balance sheet (statement of financial position)' },
              def: {
                fa: 'فهرست دارایی‌ها، بدهی‌ها و حقوق مالکانه در یک تاریخ معین؛ همواره دارایی‌ها = بدهی‌ها + حقوق مالکانه.',
                en: 'Lists assets, liabilities and equity at a specific date; assets always equal liabilities plus equity.',
              },
            },
            {
              term: { fa: 'ترازنامه طبقه‌بندی‌شده', en: 'Classified balance sheet' },
              def: {
                fa: 'ترازنامه‌ای که دارایی‌ها و بدهی‌ها را به جاری و غیرجاری تفکیک می‌کند.',
                en: 'A balance sheet that separates assets and liabilities into current and non-current groups.',
              },
            },
            {
              term: { fa: 'دارایی‌های جاری', en: 'Current assets' },
              def: {
                fa: 'دارایی‌هایی که انتظار می‌رود ظرف 12 ماه یا یک چرخه عملیاتی به نقد تبدیل یا مصرف شوند.',
                en: 'Assets expected to be turned into cash or used up within 12 months or one operating cycle.',
              },
            },
            {
              term: { fa: 'حصه جاری بدهی بلندمدت', en: 'Current portion of long-term debt' },
              def: {
                fa: 'بخشی از یک وام بلندمدت که ظرف 12 ماه آینده سررسید می‌شود و در بدهی‌های جاری گزارش می‌شود.',
                en: 'The part of a long-term loan that falls due within the next 12 months, reported under current liabilities.',
              },
            },
            {
              term: { fa: 'ارزش دفتری', en: 'Book value' },
              def: {
                fa: 'بهای تمام‌شده یک دارایی منهای استهلاک انباشته آن؛ برای تجهیزات نوا 19,700.',
                en: 'An asset’s cost less its accumulated depreciation: 19,700 for Nova’s equipment.',
              },
            },
            {
              term: { fa: 'صورت جریان‌های نقدی', en: 'Cash flow statement' },
              def: {
                fa: 'صورتی که ورود و خروج وجه نقد را در سه گروه فعالیت‌های عملیاتی، سرمایه‌گذاری و تأمین مالی نشان می‌دهد.',
                en: 'Shows cash inflows and outflows grouped into operating, investing and financing activities.',
              },
            },
            {
              term: { fa: 'فعالیت‌های عملیاتی، سرمایه‌گذاری و تأمین مالی', en: 'Operating, investing and financing activities' },
              def: {
                fa: 'سه طبقه صورت جریان‌های نقدی: فعالیت اصلی درآمدزا؛ خرید و فروش دارایی‌های بلندمدت؛ و معاملات با مالکان و وام‌دهندگان.',
                en: 'The three sections of the cash flow statement: the main revenue-producing activity; buying and selling long-term assets; and dealings with owners and lenders.',
              },
            },
            {
              term: { fa: 'روش مستقیم', en: 'Direct method' },
              def: {
                fa: 'گزارش جریان نقد عملیاتی با فهرست کردن مستقیم دریافت‌ها و پرداخت‌های نقدی.',
                en: 'Reports operating cash flow by listing the actual cash receipts and payments.',
              },
            },
            {
              term: { fa: 'روش غیرمستقیم', en: 'Indirect method' },
              def: {
                fa: 'محاسبه جریان نقد عملیاتی با شروع از سود خالص و تعدیل اقلام غیرنقدی و تغییرات سرمایه در گردش.',
                en: 'Derives operating cash flow from net income, adjusting for non-cash items and working-capital changes.',
              },
            },
            {
              term: { fa: 'معامله غیرنقدی', en: 'Non-cash transaction' },
              def: {
                fa: 'معامله سرمایه‌گذاری یا تأمین مالی که وجه نقدی جابه‌جا نمی‌کند؛ در یادداشت‌ها افشا می‌شود، نه در صورت جریان‌های نقدی.',
                en: 'An investing or financing transaction that moves no cash; disclosed in the notes, not in the cash flow statement.',
              },
            },
            {
              term: { fa: 'یادداشت‌های توضیحی', en: 'Notes to the financial statements' },
              def: {
                fa: 'توضیحات و جزئیات تکمیلی که جزء جدایی‌ناپذیر صورت‌های مالی‌اند؛ مانند رویه‌ها، برآوردها و تعهدات.',
                en: 'Supplementary explanations that form an integral part of the statements: policies, estimates, commitments.',
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
        fa: 'کدام صورت مالی باید پیش از همه تهیه شود، چون رقم کلیدی آن در صورت‌های دیگر به کار می‌رود؟',
        en: 'Which statement must be prepared first, because its key figure feeds the others?',
      },
      options: [
        { fa: 'ترازنامه', en: 'Balance sheet' },
        { fa: 'صورت جریان‌های نقدی', en: 'Cash flow statement' },
        { fa: 'صورت سود و زیان', en: 'Income statement' },
        { fa: 'صورت تغییرات در حقوق مالکانه', en: 'Statement of changes in equity' },
      ],
      answer: 2,
      explain: {
        fa: 'سود خالص صورت سود و زیان در صورت تغییرات در حقوق مالکانه به کار می‌رود و سرمایه پایان دوره حاصل از آن در ترازنامه می‌نشیند. ترازنامه وسوسه‌انگیز است چون «مهم‌ترین» صورت به نظر می‌رسد، اما بدون سرمایه پایان دوره نمی‌توان آن را کامل کرد.',
        en: 'Net income from the income statement is needed for the statement of changes in equity, whose ending capital then goes into the balance sheet. The balance sheet is tempting because it feels like the “main” statement, but it cannot be completed without ending capital.',
      },
    },
    {
      q: {
        fa: 'سرمایه پایان دوره سارا (53,850) چگونه محاسبه می‌شود؟',
        en: 'How is Sara’s ending capital of 53,850 calculated?',
      },
      options: [
        { fa: '50,000 + 4,850 = 54,850', en: '50,000 + 4,850 = 54,850' },
        { fa: '50,000 + 4,850 − 1,000 = 53,850', en: '50,000 + 4,850 − 1,000 = 53,850' },
        { fa: '50,000 − 1,000 = 49,000', en: '50,000 − 1,000 = 49,000' },
        { fa: '50,000 + 12,700 − 1,000 = 61,700', en: '50,000 + 12,700 − 1,000 = 61,700' },
      ],
      answer: 1,
      explain: {
        fa: 'سرمایه پایان دوره = سرمایه ابتدای دوره (0) + آورده (50,000) + سود خالص (4,850) − برداشت (1,000). گزینه اول برداشت را فراموش کرده، گزینه سوم سود خالص را نادیده گرفته و گزینه چهارم به‌جای سود خالص، کل درآمد را اضافه کرده است.',
        en: 'Ending capital = beginning capital (0) + investment (50,000) + net income (4,850) − drawings (1,000). The first option forgets drawings, the third ignores net income, and the fourth adds total revenue instead of net income.',
      },
    },
    {
      q: {
        fa: 'در ترازنامه طبقه‌بندی‌شده نوا، کدام قلم دارایی غیرجاری است؟',
        en: 'On Nova’s classified balance sheet, which item is a non-current asset?',
      },
      options: [
        { fa: 'پیش‌پرداخت بیمه', en: 'Prepaid insurance' },
        { fa: 'ملزومات', en: 'Supplies' },
        { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' },
        { fa: 'تجهیزات (پس از کسر استهلاک انباشته)', en: 'Equipment (net of accumulated depreciation)' },
      ],
      answer: 3,
      explain: {
        fa: 'تجهیزات برای چندین سال استفاده می‌شود و ظرف 12 ماه به نقد تبدیل یا مصرف نمی‌شود؛ پس غیرجاری است. پیش‌پرداخت بیمه ممکن است «بلندمدت» به نظر برسد، اما بیمه نوا 12 ماهه است و ظرف یک سال مصرف می‌شود؛ پس جاری است.',
        en: 'Equipment will be used for several years and is not converted or used up within 12 months, so it is non-current. Prepaid insurance may sound long-term, but Nova’s policy covers 12 months and is used up within a year, so it is current.',
      },
    },
    {
      q: {
        fa: 'برداشت 1,000 سارا در کجای صورت‌های مالی ظاهر می‌شود؟',
        en: 'Where do Sara’s 1,000 drawings appear in the financial statements?',
      },
      options: [
        {
          fa: 'در صورت تغییرات در حقوق مالکانه، و به‌عنوان خروج وجه نقد در فعالیت‌های تأمین مالی',
          en: 'In the statement of changes in equity, and as a financing outflow in the cash flow statement',
        },
        { fa: 'به‌عنوان هزینه در صورت سود و زیان', en: 'As an expense on the income statement' },
        { fa: 'به‌عنوان خروج وجه نقد در فعالیت‌های سرمایه‌گذاری', en: 'As an investing outflow in the cash flow statement' },
        { fa: 'در هیچ صورتی، چون موضوعی شخصی است', en: 'Nowhere: it is a private matter' },
      ],
      answer: 0,
      explain: {
        fa: 'برداشت، انتقال منابع از کسب‌وکار به مالک است: سرمایه را کاهش می‌دهد و چون معامله‌ای با مالک است، در صورت جریان‌های نقدی جزو فعالیت‌های تأمین مالی قرار می‌گیرد. هزینه نیست، چون برای کسب درآمد مصرف نشده است.',
        en: 'Drawings are a distribution to the owner: they reduce capital, and because they are a transaction with the owner they are a financing cash outflow. They are not an expense, because nothing was consumed to earn revenue.',
      },
    },
    {
      q: {
        fa: 'چرا جریان نقد عملیاتی نوا (2,300) از سود خالص آن (4,850) کمتر است؟',
        en: 'Why is Nova’s operating cash flow (2,300) lower than its net income (4,850)?',
      },
      options: [
        { fa: 'چون خرید تجهیزات جزو جریان نقد عملیاتی است', en: 'Because the equipment purchase counts as an operating outflow' },
        { fa: 'چون برداشت سارا از جریان نقد عملیاتی کسر می‌شود', en: 'Because Sara’s drawings are deducted from operating cash' },
        { fa: 'چون وام بانکی به‌صورت نقد دریافت شده است', en: 'Because the bank loan was received in cash' },
        {
          fa: 'به دلیل تفاوت زمانی در مبنای تعهدی؛ مثلاً 2,200 درآمد هنوز وصول نشده و برای ملزومات و بیمه‌ای که هنوز هزینه نشده، پول پرداخت شده است',
          en: 'Because of accrual timing differences, e.g. 2,200 of revenue is still uncollected, and cash was paid for supplies and insurance not yet expensed',
        },
      ],
      answer: 3,
      explain: {
        fa: 'جدول روش غیرمستقیم همین را نشان می‌دهد: افزایش حساب‌های دریافتنی، ملزومات و پیش‌پرداخت بیمه وجه نقد را کمتر از سود کرده است و استهلاک و بدهی‌های تعهدی بخشی از آن را جبران کرده‌اند. خرید تجهیزات (سرمایه‌گذاری) و وام و برداشت (تأمین مالی) اصلاً در بخش عملیاتی نیستند.',
        en: 'The indirect-method reconciliation shows it: increases in receivables, supplies and prepaid insurance pulled cash below profit, partly offset by depreciation and accrued liabilities. The equipment (investing) and the loan and drawings (financing) are not operating items at all.',
      },
    },
    {
      q: {
        fa: 'ویژگی متمایز صورت سود و زیان چندمرحله‌ای چیست؟',
        en: 'What distinguishes a multi-step income statement?',
      },
      options: [
        { fa: 'فقط درآمدهای نقدی را گزارش می‌کند', en: 'It reports only cash revenues' },
        { fa: 'سودهای میانی مانند سود ناخالص و سود عملیاتی را نشان می‌دهد', en: 'It shows intermediate subtotals such as gross profit and operating profit' },
        { fa: 'سود خالصی متفاوت با قالب یک‌مرحله‌ای به دست می‌دهد', en: 'It produces a different net income from the single-step format' },
        { fa: 'برای همه کسب‌وکارهای خدماتی الزامی است', en: 'It is compulsory for every service business' },
      ],
      answer: 1,
      explain: {
        fa: 'هر دو قالب به یک سود خالص می‌رسند؛ قالب چندمرحله‌ای فقط مسیر را با سودهای میانی شفاف‌تر می‌کند. پس گزینه «سود خالص متفاوت» نادرست است. برای نوا سود عملیاتی 5,000 و سود خالص 4,850 است.',
        en: 'Both formats reach the same net income; the multi-step layout simply makes the path clearer with subtotals, so the “different net income” option is wrong. For Nova: operating profit 5,000, net income 4,850.',
      },
    },
    {
      q: {
        fa: 'سود خالص یک شرکت 10,000 و استهلاک 2,000 است. حساب‌های دریافتنی 3,000 افزایش و حساب‌های پرداختنی 1,000 افزایش یافته است. وجه نقد عملیاتی به روش غیرمستقیم چقدر است؟',
        en: 'A company’s net income is 10,000 and depreciation is 2,000. Receivables rose by 3,000 and payables rose by 1,000. What is operating cash flow under the indirect method?',
      },
      options: [
        { fa: '10,000', en: '10,000' },
        { fa: '16,000', en: '16,000' },
        { fa: '8,000', en: '8,000' },
        { fa: '12,000', en: '12,000' },
      ],
      answer: 0,
      explain: {
        fa: '10,000 + 2,000 − 3,000 + 1,000 = 10,000. گزینه 16,000 افزایش دریافتنی‌ها را به‌جای کسر، اضافه کرده؛ 8,000 برگرداندن استهلاک را فراموش کرده؛ و 12,000 تغییرات سرمایه در گردش را نادیده گرفته است.',
        en: '10,000 + 2,000 − 3,000 + 1,000 = 10,000. The 16,000 option adds the increase in receivables instead of subtracting it; 8,000 forgets to add back depreciation; 12,000 ignores the working-capital changes.',
      },
    },
    {
      q: {
        fa: 'درآمد فروش یک شرکت در سال 50,000 است. حساب‌های دریافتنی از 8,000 در ابتدای سال به 11,000 در پایان سال رسیده است. وجه نقد دریافتی از مشتریان چقدر است؟',
        en: 'A company’s sales revenue for the year is 50,000. Accounts receivable rose from 8,000 at the start of the year to 11,000 at the end. How much cash was collected from customers?',
      },
      options: [
        { fa: '53,000', en: '53,000' },
        { fa: '47,000', en: '47,000' },
        { fa: '50,000', en: '50,000' },
        { fa: '39,000', en: '39,000' },
      ],
      answer: 1,
      explain: {
        fa: 'دریافتنی‌ها 3,000 افزایش یافته؛ یعنی 3,000 از فروش امسال هنوز وصول نشده است: 50,000 − 3,000 = 47,000. گزینه 53,000 علامت را برعکس کرده، 50,000 فرض کرده همه فروش وصول شده و 39,000 کل مانده پایان سال را کم کرده است.',
        en: 'Receivables rose by 3,000, so 3,000 of this year’s sales is still uncollected: 50,000 − 3,000 = 47,000. The 53,000 option reverses the sign, 50,000 assumes every sale was collected, and 39,000 subtracts the whole closing balance.',
      },
    },
    {
      q: {
        fa: 'شرکتی 20,000 از بانک وام می‌گیرد و همان روز با آن یک وانت 20,000 نقد می‌خرد. این دو رویداد در صورت جریان‌های نقدی چگونه نشان داده می‌شوند؟',
        en: 'A company borrows 20,000 from a bank and the same day uses it to buy a van for 20,000 in cash. How do these appear in the cash flow statement?',
      },
      options: [
        { fa: 'هر دو در فعالیت‌های عملیاتی', en: 'Both under operating activities' },
        { fa: 'چون اثر خالص صفر است، اصلاً نشان داده نمی‌شوند', en: 'They net to zero, so they are not shown' },
        { fa: 'ورودی عملیاتی 20,000 و خروجی سرمایه‌گذاری 20,000', en: 'An operating inflow of 20,000 and an investing outflow of 20,000' },
        { fa: 'ورودی تأمین مالی 20,000 و خروجی سرمایه‌گذاری 20,000', en: 'A financing inflow of 20,000 and an investing outflow of 20,000' },
      ],
      answer: 3,
      explain: {
        fa: 'وام گرفتن معامله با وام‌دهنده است (تأمین مالی) و خرید وانت خرید دارایی بلندمدت (سرمایه‌گذاری). هر دو جداگانه و ناخالص گزارش می‌شوند. گزینه «خالص صفر» وسوسه‌انگیز است، اما چون وجه نقد واقعاً دریافت و پرداخت شده، معامله غیرنقدی نیست و نباید حذف شود.',
        en: 'Borrowing is a deal with a lender (financing) and buying the van is a long-term asset purchase (investing). Both are reported separately, gross. The “nets to zero” option is tempting, but cash really came in and went out, so this is not a non-cash transaction and must not be left out.',
      },
    },
    {
      q: {
        fa: 'شرکتی وام بانکی 30,000 دارد که 6,000 آن ظرف 12 ماه آینده سررسید می‌شود. این وام در ترازنامه چگونه طبقه‌بندی می‌شود؟',
        en: 'A company has a 30,000 bank loan, 6,000 of which falls due within the next 12 months. How is it classified on the balance sheet?',
      },
      options: [
        { fa: 'کل 30,000 بدهی غیرجاری', en: 'All 30,000 as a non-current liability' },
        { fa: 'کل 30,000 بدهی جاری', en: 'All 30,000 as a current liability' },
        { fa: '6,000 بدهی جاری و 24,000 بدهی غیرجاری', en: '6,000 current and 24,000 non-current' },
        { fa: '24,000 بدهی جاری و 6,000 بدهی غیرجاری', en: '24,000 current and 6,000 non-current' },
      ],
      answer: 2,
      explain: {
        fa: 'بخشی که ظرف 12 ماه سررسید می‌شود (6,000) «حصه جاری» است و در بدهی‌های جاری می‌آید؛ باقی‌مانده (24,000) غیرجاری است. نشان دادن کل وام به‌عنوان غیرجاری، که اشتباه رایجی است، نسبت جاری را بهتر از واقع نشان می‌دهد.',
        en: 'The part due within 12 months (6,000) is the “current portion” and goes under current liabilities; the remaining 24,000 is non-current. Showing the whole loan as non-current, a common mistake, makes the current ratio look better than it really is.',
      },
    },
  ],
}
