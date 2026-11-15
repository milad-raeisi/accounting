import type { Lesson } from '../types'

const blank = { fa: '', en: '' }

export const lesson: Lesson = {
  slug: 'financial-statements',
  number: 9,
  level: 'intermediate',
  minutes: 22,
  icon: 'FileSpreadsheet',
  tone: 'revenue',
  title: { fa: 'صورت‌های مالی', en: 'Financial Statements' },
  summary: {
    fa: 'صورت‌های مالی محصول نهایی فرایند حسابداری‌اند. در این درس صورت‌های اصلی استودیو طراحی نوا را به ترتیب درست از تراز آزمایشی تعدیل‌شده تهیه می‌کنیم و می‌بینیم این صورت‌ها چگونه به هم گره می‌خورند.',
    en: 'Financial statements are the finished product of the accounting process. In this lesson we prepare Nova Design Studio’s primary statements from its adjusted trial balance, in the right order, and see exactly how they tie together.',
  },
  objectives: [
    {
      fa: 'هدف صورت‌های مالی و استفاده‌کنندگان اصلی آن‌ها را توضیح دهید.',
      en: 'Explain the purpose of financial statements and who relies on them.',
    },
    {
      fa: 'صورت سود و زیان، صورت تغییرات در حقوق مالکانه و ترازنامه طبقه‌بندی‌شده را تهیه کنید.',
      en: 'Prepare an income statement, a statement of changes in equity and a classified balance sheet.',
    },
    {
      fa: 'جریان‌های نقدی را در سه گروه عملیاتی، سرمایه‌گذاری و تأمین مالی طبقه‌بندی کنید و صورت جریان‌های نقدی را به روش مستقیم بسازید.',
      en: 'Classify cash flows as operating, investing or financing and build a direct-method cash flow statement.',
    },
    {
      fa: 'ارتباط میان صورت‌ها را ردیابی کنید و نقش یادداشت‌های توضیحی را بشناسید.',
      en: 'Trace the links between the statements and understand the role of the notes.',
    },
    {
      fa: 'صورت سود و زیان یک‌مرحله‌ای و چندمرحله‌ای را با هم مقایسه کنید.',
      en: 'Compare single-step and multi-step income statements.',
    },
  ],
  sections: [
    {
      id: 'purpose',
      title: { fa: 'صورت‌های مالی برای چه و برای چه کسانی؟', en: 'Why financial statements matter' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'تا اینجا معاملات استودیو نوا را تجزیه‌وتحلیل کردیم، در دفتر روزنامه ثبت کردیم، به دفتر کل انتقال دادیم و در پایان ماه تعدیل کردیم. همه این کارها برای رسیدن به یک خروجی است: **صورت‌های مالی**. صورت‌های مالی گزارشی ساختاریافته از وضعیت مالی، عملکرد مالی و جریان‌های نقدی یک واحد تجاری‌اند و به استفاده‌کنندگان کمک می‌کنند تصمیم‌های اقتصادی آگاهانه‌تری بگیرند.',
            en: 'So far we have analysed Nova’s transactions, journalized them, posted them to the ledger and adjusted the accounts at month-end. All of that work exists to produce one thing: **financial statements**. They are a structured report of an entity’s financial position, financial performance and cash flows, designed to help people make better economic decisions.',
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
              en: '**Employees and analysts**: job security, ability to pay wages, and future prospects.',
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
          title: { fa: 'استانداردها چه می‌گویند؟', en: 'What the standards say' },
          text: {
            fa: 'در سطح بین‌المللی استاندارد IAS 1 (که از سال 2027 جای خود را به IFRS 18 می‌دهد) و در ایران استاندارد حسابداری شماره 1 «ارائه صورت‌های مالی» تعیین می‌کنند که مجموعه کامل صورت‌ها شامل چه اجزایی است و حداقل چه اقلامی باید افشا شود. عنوان‌ها ممکن است کمی متفاوت باشند؛ مثلاً IFRS به‌جای «ترازنامه» از «صورت وضعیت مالی» استفاده می‌کند، اما محتوا یکی است.',
            en: 'Internationally IAS 1 (replaced by IFRS 18 from 2027), and in Iran, National Accounting Standard No. 1, “Presentation of Financial Statements”, set out what a complete set contains and the minimum line items to be disclosed. Titles vary a little: IFRS prefers “statement of financial position” to “balance sheet”, but the content is the same.',
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
    {
      id: 'order',
      title: { fa: 'ترتیب تهیه و ارتباط صورت‌ها', en: 'Order of preparation and how they link' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'صورت‌های مالی از **تراز آزمایشی تعدیل‌شده** تهیه می‌شوند و ترتیب تهیه آن‌ها اتفاقی نیست: هر صورت رقمی تولید می‌کند که صورت بعدی به آن نیاز دارد. اگر این ترتیب را رعایت کنید، صورت‌ها مثل حلقه‌های یک زنجیر در هم قفل می‌شوند.',
            en: 'The statements are prepared from the **adjusted trial balance**, and the order is not arbitrary: each statement produces a figure the next one needs. Follow the order and the statements lock together like links in a chain.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'صورت سود و زیان', en: 'Income statement' },
              text: {
                fa: 'درآمدها و هزینه‌های دوره را در برابر هم قرار می‌دهیم. خروجی: **سود خالص 4,850**.',
                en: 'Match the period’s revenues against its expenses. Output: **net income of 4,850**.',
              },
            },
            {
              title: { fa: 'صورت تغییرات در حقوق مالکانه', en: 'Statement of changes in equity' },
              text: {
                fa: 'سود خالص به سرمایه افزوده و برداشت از آن کسر می‌شود. خروجی: **سرمایه پایان دوره 53,850**.',
                en: 'Net income is added to capital and drawings are deducted. Output: **ending capital of 53,850**.',
              },
            },
            {
              title: { fa: 'ترازنامه', en: 'Balance sheet' },
              text: {
                fa: 'سرمایه پایان دوره در بخش حقوق مالکانه می‌نشیند و معادله حسابداری برقرار می‌شود: **71,100 = 17,250 + 53,850**.',
                en: 'Ending capital goes into the equity section and the accounting equation closes: **71,100 = 17,250 + 53,850**.',
              },
            },
            {
              title: { fa: 'صورت جریان‌های نقدی', en: 'Cash flow statement' },
              text: {
                fa: 'تغییر وجه نقد طی دوره را توضیح می‌دهد. وجه نقد پایان دوره در این صورت (**46,300**) باید با موجودی نقد ترازنامه برابر باشد.',
                en: 'Explains the change in cash during the period. Its closing cash figure (**46,300**) must equal cash on the balance sheet.',
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
      ],
    },
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
          type: 'table',
          caption: {
            fa: 'استودیو طراحی نوا: صورت سود و زیان برای نخستین ماه فعالیت',
            en: 'Nova Design Studio: Income statement for its first month of operations',
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
            fa: 'برداشت 1,000 سارا هزینه نیست؛ انتقال دارایی به مالک است و در صورت تغییرات در حقوق مالکانه می‌آید. خرید تجهیزات 20,000 هم هزینه نیست، بلکه دارایی است و فقط استهلاک این ماه آن (300) هزینه می‌شود. دریافت وام نیز درآمد نیست؛ بدهی ایجاد می‌کند.',
            en: 'Sara’s 1,000 drawings are not an expense, they are a distribution to the owner and appear in the statement of changes in equity. The 20,000 equipment purchase is not an expense either: it is an asset, and only this month’s depreciation (300) is expensed. Borrowing is not revenue; it creates a liability.',
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
            fa: 'هر دو قالب به یک سود خالص (4,850) می‌رسند؛ تفاوت فقط در میزان اطلاعاتی است که در مسیر ارائه می‌شود. سود عملیاتی 5,000 همان رقمی است که در درس تحلیل نسبت‌ها برای محاسبه «نسبت پوشش بهره» به کار می‌بریم.',
            en: 'Both layouts arrive at the same net income (4,850); they differ only in how much they reveal along the way. The 5,000 operating profit is the figure we will use for interest coverage in the ratio-analysis lesson.',
          },
        },
      ],
    },
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
            fa: 'در شرکت‌های سهامی، به‌جای برداشت، **سود سهام** از **سود انباشته** کسر می‌شود.',
            en: 'In a company, **dividends** are deducted from **retained earnings** instead of drawings.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'استودیو طراحی نوا: صورت تغییرات در حقوق مالکانه برای نخستین ماه فعالیت',
            en: 'Nova Design Studio: Statement of changes in equity for its first month',
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
        { type: 'h', text: { fa: 'ترازنامه طبقه‌بندی‌شده', en: 'The classified balance sheet' } },
        {
          type: 'p',
          text: {
            fa: 'ترازنامه تصویری از وضعیت مالی در **یک تاریخ معین** است. در ترازنامه طبقه‌بندی‌شده، دارایی‌ها و بدهی‌ها به دو گروه **جاری** و **غیرجاری** تقسیم می‌شوند. دارایی جاری دارایی‌ای است که انتظار می‌رود ظرف 12 ماه (یا یک چرخه عملیاتی، هر کدام طولانی‌تر باشد) به نقد تبدیل یا مصرف شود؛ بدهی جاری نیز بدهی‌ای است که باید ظرف همین مدت تسویه شود.',
            en: 'The balance sheet is a snapshot of financial position at **a single date**. A classified balance sheet splits assets and liabilities into **current** and **non-current** groups. A current asset is expected to be turned into cash or used up within 12 months (or one operating cycle, if longer); a current liability falls due for settlement within the same horizon.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'استودیو طراحی نوا: ترازنامه در پایان نخستین ماه',
            en: 'Nova Design Studio: Balance sheet at the end of the first month',
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
            [{ fa: 'تجهیزات، خالص', en: 'Equipment, net' }, blank, 19700],
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
            fa: '**استهلاک انباشته** یک حساب کاهنده دارایی است: تجهیزات را به بهای تمام‌شده (20,000) نشان می‌دهیم و استهلاک انباشته (300) را از آن کم می‌کنیم تا **مبلغ دفتری** 19,700 به دست آید. همچنین اگر بخشی از وام 15,000 ظرف 12 ماه آینده سررسید شود، همان بخش باید به‌عنوان «حصه جاری» در بدهی‌های جاری گزارش شود. در این مثال فرض کرده‌ایم کل وام بلندمدت است.',
            en: '**Accumulated depreciation** is a contra-asset: equipment is shown at cost (20,000) less accumulated depreciation (300), giving a **carrying amount** of 19,700. And if any part of the 15,000 loan falls due within the next 12 months, that portion must be reported as the “current portion” under current liabilities. Here we assume the whole loan is long-term.',
          },
        },
      ],
    },
    {
      id: 'cash-flow',
      title: { fa: 'صورت جریان‌های نقدی', en: 'The cash flow statement' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'نوا در ماه اول 4,850 سود کرده است، اما این به آن معنا نیست که 4,850 وجه نقد به دست آورده است. بخشی از درآمد هنوز وصول نشده، بخشی از هزینه‌ها هنوز پرداخت نشده و پرداخت‌هایی مانند خرید تجهیزات اصلاً هزینه این ماه نیستند. صورت جریان‌های نقدی دقیقاً همین فاصله را پر می‌کند و نشان می‌دهد وجه نقد از کجا آمد و به کجا رفت.',
            en: 'Nova earned a profit of 4,850 in its first month, but that does not mean it generated 4,850 of cash. Some revenue has not been collected yet, some expenses have not been paid, and some payments, like the equipment, are not expenses of this month at all. The cash flow statement fills that gap: it shows where cash came from and where it went.',
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
              fa: '**فعالیت‌های تأمین مالی**: معاملات با مالکان و وام‌دهندگان؛ مانند آورده مالک، برداشت، دریافت و بازپرداخت وام.',
              en: '**Financing activities**: transactions with owners and lenders: owner contributions, drawings, and borrowing or repaying loans.',
            },
          ],
        },
        {
          type: 'table',
          caption: {
            fa: 'استودیو طراحی نوا: صورت جریان‌های نقدی (روش مستقیم) برای نخستین ماه',
            en: 'Nova Design Studio: Cash flow statement (direct method) for the first month',
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
          title: { fa: 'روش غیرمستقیم در یک نگاه', en: 'The indirect method in brief' },
          text: {
            fa: 'بیشتر شرکت‌ها جریان نقد عملیاتی را به **روش غیرمستقیم** گزارش می‌کنند: از سود خالص شروع می‌کنند، هزینه‌های غیرنقدی مانند استهلاک را به آن برمی‌گردانند و سپس اثر تغییر دارایی‌ها و بدهی‌های جاری را اعمال می‌کنند. افزایش دارایی جاری (مثلاً حساب‌های دریافتنی) کسر و افزایش بدهی جاری (مثلاً حساب‌های پرداختنی) اضافه می‌شود. بخش‌های سرمایه‌گذاری و تأمین مالی در هر دو روش یکسان‌اند.',
            en: 'Most companies report operating cash flow using the **indirect method**: start from net income, add back non-cash expenses such as depreciation, then adjust for changes in current assets and current liabilities. An increase in a current asset (e.g. receivables) is subtracted; an increase in a current liability (e.g. payables) is added. The investing and financing sections are identical under both methods.',
          },
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
      ],
    },
    {
      id: 'notes-summary',
      title: { fa: 'یادداشت‌های توضیحی و جمع‌بندی', en: 'Notes and summary' },
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
              fa: '**شرایط وام**: اصل 15,000، نرخ بهره سالانه 12 درصد، تاریخ سررسید و وثیقه‌ها.',
              en: '**Loan terms**: 15,000 principal at 12% a year, the maturity date and any collateral.',
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
            en: 'Two businesses with identical numbers can be in very different situations, one may have a loan maturing next month, or be facing a major lawsuit. That kind of information usually appears only in the notes.',
          },
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
              term: { fa: 'صورت سود و زیان', en: 'Income statement' },
              def: {
                fa: 'صورتی که درآمدها و هزینه‌های یک دوره و سود یا زیان خالص حاصل از آن‌ها را نشان می‌دهد.',
                en: 'Reports a period’s revenues and expenses and the resulting net income or loss.',
              },
            },
            {
              term: { fa: 'صورت تغییرات در حقوق مالکانه', en: 'Statement of changes in equity' },
              def: {
                fa: 'صورتی که تغییر سرمایه مالک را از ابتدا تا پایان دوره توضیح می‌دهد: آورده، سود خالص و برداشت.',
                en: 'Explains how owner’s equity moved over the period: contributions, net income and drawings.',
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
              term: { fa: 'صورت جریان‌های نقدی', en: 'Cash flow statement' },
              def: {
                fa: 'صورتی که ورود و خروج وجه نقد را در سه گروه فعالیت‌های عملیاتی، سرمایه‌گذاری و تأمین مالی نشان می‌دهد.',
                en: 'Shows cash inflows and outflows grouped into operating, investing and financing activities.',
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
              term: { fa: 'یادداشت‌های توضیحی', en: 'Notes to the financial statements' },
              def: {
                fa: 'توضیحات و جزئیات تکمیلی که جزء جدایی‌ناپذیر صورت‌های مالی‌اند؛ مانند رویه‌ها، برآوردها و تعهدات.',
                en: 'Supplementary explanations that form an integral part of the statements, policies, estimates, commitments.',
              },
            },
            {
              term: { fa: 'صورت سود و زیان چندمرحله‌ای', en: 'Multi-step income statement' },
              def: {
                fa: 'قالبی که سودهای میانی مانند سود ناخالص و سود عملیاتی را پیش از سود خالص نشان می‌دهد.',
                en: 'A layout that shows intermediate subtotals such as gross profit and operating profit before net income.',
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
        fa: 'سود خالص صورت سود و زیان در صورت تغییرات در حقوق مالکانه به کار می‌رود و سرمایه پایان دوره حاصل از آن، در ترازنامه می‌نشیند.',
        en: 'Net income from the income statement is needed for the statement of changes in equity, whose ending capital then goes into the balance sheet.',
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
        fa: 'تجهیزات برای چندین سال استفاده می‌شود و ظرف 12 ماه به نقد تبدیل یا مصرف نمی‌شود؛ پس غیرجاری است. سه قلم دیگر ظرف یک سال وصول یا مصرف می‌شوند.',
        en: 'Equipment will be used for several years and is not converted or used up within 12 months, so it is non-current. The other three will be collected or consumed within a year.',
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
        fa: 'برداشت، انتقال منابع از کسب‌وکار به مالک است: سرمایه را کاهش می‌دهد و چون معامله‌ای با مالک است، در صورت جریان‌های نقدی جزو فعالیت‌های تأمین مالی قرار می‌گیرد.',
        en: 'Drawings are a distribution to the owner: they reduce capital, and because they are a transaction with the owner they are a financing cash outflow.',
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
        {
          fa: 'به دلیل تفاوت زمانی در مبنای تعهدی؛ مثلاً 2,200 درآمد هنوز وصول نشده و برای ملزومات و بیمه‌ای که هنوز هزینه نشده، پول پرداخت شده است',
          en: 'Because of accrual timing differences, e.g. 2,200 of revenue is still uncollected, and cash was paid for supplies and insurance not yet expensed',
        },
        { fa: 'چون وام بانکی به‌صورت نقد دریافت شده است', en: 'Because the bank loan was received in cash' },
      ],
      answer: 2,
      explain: {
        fa: 'جدول روش غیرمستقیم همین را نشان می‌دهد: افزایش حساب‌های دریافتنی، ملزومات و پیش‌پرداخت بیمه وجه نقد را کمتر از سود کرده است، و استهلاک و بدهی‌های تعهدی بخشی از آن را جبران کرده‌اند. خرید تجهیزات (سرمایه‌گذاری) و وام و برداشت (تأمین مالی) اصلاً در بخش عملیاتی نیستند.',
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
        fa: 'هر دو قالب به یک سود خالص می‌رسند؛ قالب چندمرحله‌ای فقط مسیر را با سودهای میانی شفاف‌تر می‌کند. برای نوا سود عملیاتی 5,000 و سود خالص 4,850 است.',
        en: 'Both formats reach the same net income; the multi-step layout simply makes the path clearer with subtotals. For Nova: operating profit 5,000, net income 4,850.',
      },
    },
  ],
}
