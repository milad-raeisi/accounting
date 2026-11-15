import type { Lesson } from '../types'

export const lesson: Lesson = {
  slug: 'what-is-accounting',
  number: 1,
  level: 'beginner',
  minutes: 12,
  icon: 'BookOpen',
  tone: 'primary',
  title: { fa: 'حسابداری چیست؟', en: 'What Is Accounting?' },
  summary: {
    fa: 'با زبان کسب‌وکار آشنا شوید: حسابداری چه کاری انجام می‌دهد، چه کسانی به اطلاعات آن تکیه می‌کنند و بر چه مفروضات و اصولی استوار است.',
    en: 'Meet the language of business: what accounting does, who relies on it, and the assumptions and principles that hold it together.',
  },
  objectives: [
    {
      fa: 'حسابداری را به‌عنوان فرایند شناسایی، ثبت و گزارش اطلاعات مالی تعریف کنید.',
      en: 'Define accounting as the process of identifying, recording and communicating financial information.',
    },
    {
      fa: 'تفاوت دفترداری و حسابداری را توضیح دهید و شاخه‌های اصلی این حرفه را نام ببرید.',
      en: 'Distinguish bookkeeping from accounting and name the main branches of the profession.',
    },
    {
      fa: 'استفاده‌کنندگان درون‌سازمانی و برون‌سازمانی و تصمیم‌هایی را که می‌گیرند بشناسید.',
      en: 'Identify internal and external users and the decisions they make.',
    },
    {
      fa: 'مفروضات و اصول بنیادینی را که صورت‌های مالی بر آن‌ها بنا شده‌اند توضیح دهید.',
      en: 'Explain the core assumptions and principles that underlie financial statements.',
    },
    {
      fa: 'مؤسسه انفرادی، شرکت تضامنی و شرکت سهامی را با یکدیگر مقایسه کنید.',
      en: 'Compare sole proprietorships, partnerships and corporations.',
    },
  ],
  sections: [
    {
      id: 'language-of-business',
      title: { fa: 'حسابداری؛ زبان کسب‌وکار', en: 'Accounting: The Language of Business' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'هر کسب‌وکاری، از یک کافه کوچک محلی تا یک شرکت چندملیتی، باید بداند در چه وضعیتی قرار دارد: چه منابعی در اختیار دارد؟ چقدر بدهی دارد؟ آیا ماه گذشته سود کرده است یا زیان؟ **حسابداری** نظامی اطلاعاتی است که به این پرسش‌ها پاسخ می‌دهد. حسابداری رویدادهای اقتصادی اثرگذار بر یک سازمان را **شناسایی** می‌کند، آن‌ها را به‌شکلی منظم **ثبت** می‌کند و نتیجه را به کسانی که به آن نیاز دارند **گزارش** می‌دهد.',
            en: 'Every business, from a corner café to a multinational group, needs to know where it stands. What does it own? What does it owe? Did it make a profit last month? **Accounting** is the information system that answers these questions. It **identifies** the economic events that affect an organization, **records** them systematically, and **communicates** the results to the people who need them.',
          },
        },
        {
          type: 'diagram',
          id: 'info-flow',
          caption: {
            fa: 'از رویداد مالی تا تصمیم: حسابداری داده‌های خام معاملات را به گزارش‌هایی تبدیل می‌کند که می‌توان بر پایه آن‌ها تصمیم گرفت.',
            en: 'From business events to decisions: accounting turns raw transactions into reports that people can act on.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'شناسایی', en: 'Identify' },
              text: {
                fa: 'رویدادهایی را برگزینید که به واحد تجاری مربوط‌اند و با پول قابل اندازه‌گیری‌اند؛ مانند فروش، خرید یا دریافت وام. یک تماس تلفنی دوستانه با مشتری شاید ارزشمند باشد، اما رویداد حسابداری به شمار نمی‌آید.',
                en: 'Select the events that are relevant to the business and can be measured in money, a sale, a purchase, a bank loan. A friendly phone call with a customer may matter, but it is not an accounting event.',
              },
            },
            {
              title: { fa: 'ثبت', en: 'Record' },
              text: {
                fa: 'هر رویداد را به ترتیب زمانی و همراه با مدارک قابل رسیدگی ثبت کنید، سپس آن را در حساب‌ها طبقه‌بندی و خلاصه کنید.',
                en: 'Keep a chronological, verifiable record of each event, then classify and summarize it in accounts.',
              },
            },
            {
              title: { fa: 'گزارشگری', en: 'Communicate' },
              text: {
                fa: 'صورت‌های مالی و گزارش‌های لازم را تهیه کنید و به استفاده‌کنندگان در تفسیر آن‌ها کمک کنید. گزارشی که کسی آن را نفهمد، در عمل هیچ پیامی را منتقل نکرده است.',
                en: 'Prepare financial statements and reports, and help users interpret them. A report that nobody understands has not communicated anything.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'چرا «زبان کسب‌وکار»؟', en: 'Why “the language of business”?' },
          text: {
            fa: 'مدیران، سرمایه‌گذاران، بانک‌ها و سازمان امور مالیاتی همگی با واژه‌های حسابداری درباره یک کسب‌وکار سخن می‌گویند: درآمد، سود، دارایی، جریان نقدی. یادگرفتن حسابداری یعنی یادگرفتن خواندن و سخن‌گفتن به همین زبان مشترک.',
            en: 'Managers, investors, bankers and tax authorities all discuss a business in accounting terms, revenue, profit, assets, cash flow. Learning accounting means learning to read and speak that shared language.',
          },
        },
        { type: 'h', text: { fa: 'دفترداری در برابر حسابداری', en: 'Bookkeeping vs. accounting' } },
        {
          type: 'compare',
          left: {
            title: { fa: 'دفترداری', en: 'Bookkeeping' },
            items: [
              {
                fa: 'معاملات روزانه را دقیق و به‌موقع ثبت می‌کند',
                en: 'Records day-to-day transactions accurately and on time',
              },
              {
                fa: 'از رویه‌های ازپیش‌تعیین‌شده پیروی می‌کند؛ بیشتر جنبه اجرایی دارد و روزبه‌روز خودکارتر می‌شود',
                en: 'Follows established procedures; largely clerical and increasingly automated',
              },
              {
                fa: 'خروجی آن: دفتر روزنامه، دفتر کل و مانده به‌روز حساب‌ها',
                en: 'Produces journals, ledgers and up-to-date account balances',
              },
              { fa: 'به پرسش «چه اتفاقی افتاد؟» پاسخ می‌دهد', en: 'Answers “What happened?”' },
            ],
          },
          right: {
            title: { fa: 'حسابداری', en: 'Accounting' },
            items: [
              {
                fa: 'نظام حسابداری را طراحی می‌کند، استانداردها را به کار می‌بندد و قضاوت حرفه‌ای اعمال می‌کند',
                en: 'Designs the system, applies standards and exercises professional judgement',
              },
              {
                fa: 'صورت‌های مالی را تهیه، تحلیل و تفسیر می‌کند',
                en: 'Prepares, analyzes and interprets financial statements',
              },
              {
                fa: 'بودجه‌بندی، محاسبه بهای تمام‌شده، برنامه‌ریزی مالیاتی و حسابرسی را نیز در بر می‌گیرد',
                en: 'Extends to budgeting, costing, tax planning and auditing',
              },
              {
                fa: 'به پرسش «این یعنی چه و چه باید بکنیم؟» پاسخ می‌دهد',
                en: 'Answers “What does it mean, and what should we do?”',
              },
            ],
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          text: {
            fa: 'دفترداری بخشی از حسابداری است، نه مترادف آن. هر حسابدار خوبی باید دفترداری را به‌خوبی بلد باشد و این دوره نیز دقیقاً از همین نقطه آغاز می‌شود.',
            en: 'Bookkeeping is one part of accounting, not another word for it. Every good accountant must master bookkeeping first, which is exactly where this course begins.',
          },
        },
      ],
    },
    {
      id: 'users',
      title: {
        fa: 'چه کسانی از اطلاعات حسابداری استفاده می‌کنند؟',
        en: 'Who Uses Accounting Information?',
      },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'اطلاعات حسابداری برای تصمیم‌گیرندگان تهیه می‌شود. این افراد در دو گروه کلی جای می‌گیرند: **استفاده‌کنندگان درون‌سازمانی** که کسب‌وکار را از درون اداره می‌کنند، و **استفاده‌کنندگان برون‌سازمانی** که در کسب‌وکار منافعی دارند اما به سوابق آن دسترسی مستقیم ندارند.',
            en: 'Accounting information exists to support decisions. Its users fall into two broad groups: **internal users**, who run the business from the inside, and **external users**, who have a stake in the business but no direct access to its records.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'استفاده‌کنندگان درون‌سازمانی', en: 'Internal users' },
            items: [
              { fa: 'مالکانی که خودشان کسب‌وکار را اداره می‌کنند', en: 'Owners who also manage the business' },
              { fa: 'مدیران و سرپرستان بخش‌ها', en: 'Managers and department heads' },
              { fa: 'واحدهای مالی، بازاریابی و تولید', en: 'Finance, marketing and operations teams' },
              {
                fa: 'به گزارش‌های تفصیلی، مکرر و آینده‌نگر مانند بودجه و گزارش بهای تمام‌شده نیاز دارند',
                en: 'Need detailed, frequent and forward-looking reports such as budgets and cost reports',
              },
            ],
          },
          right: {
            title: { fa: 'استفاده‌کنندگان برون‌سازمانی', en: 'External users' },
            items: [
              { fa: 'سرمایه‌گذاران و سهام‌داران', en: 'Investors and shareholders' },
              {
                fa: 'بانک‌ها، تأمین‌کنندگان و سایر اعتباردهندگان',
                en: 'Banks, suppliers and other creditors',
              },
              { fa: 'سازمان امور مالیاتی و نهادهای ناظر', en: 'Tax authorities and regulators' },
              { fa: 'مشتریان، کارکنان و عموم مردم', en: 'Customers, employees and the public' },
              {
                fa: 'عمدتاً به صورت‌های مالی با مقاصد عمومی تکیه می‌کنند',
                en: 'Rely mainly on general-purpose financial statements',
              },
            ],
          },
        },
        {
          type: 'table',
          caption: { fa: 'پرسش‌های رایج هر گروه از استفاده‌کنندگان', en: 'Typical questions each user asks' },
          head: [
            { fa: 'استفاده‌کننده', en: 'User' },
            { fa: 'گروه', en: 'Group' },
            { fa: 'پرسش نمونه', en: 'Typical question' },
          ],
          rows: [
            [
              { fa: 'مدیر', en: 'Manager' },
              { fa: 'درون‌سازمانی', en: 'Internal' },
              { fa: 'کدام خط خدمات بیشترین سود را دارد؟', en: 'Which service line is the most profitable?' },
            ],
            [
              { fa: 'مالک', en: 'Owner' },
              { fa: 'درون‌سازمانی', en: 'Internal' },
              { fa: 'آیا توان مالی استخدام یک طراح دیگر را داریم؟', en: 'Can we afford to hire another designer?' },
            ],
            [
              { fa: 'سرمایه‌گذار', en: 'Investor' },
              { fa: 'برون‌سازمانی', en: 'External' },
              {
                fa: 'آیا این شرکت آن‌قدر سودآور خواهد بود که سرمایه‌گذاری من را توجیه کند؟',
                en: 'Will this company earn enough to justify my investment?',
              },
            ],
            [
              { fa: 'بانک', en: 'Bank' },
              { fa: 'برون‌سازمانی', en: 'External' },
              {
                fa: 'آیا این کسب‌وکار می‌تواند وام را به‌موقع بازپرداخت کند؟',
                en: 'Can the business repay the loan on time?',
              },
            ],
            [
              { fa: 'تأمین‌کننده', en: 'Supplier' },
              { fa: 'برون‌سازمانی', en: 'External' },
              { fa: 'آیا فروش نسیه به این مشتری کم‌خطر است؟', en: 'Is it safe to sell to them on credit?' },
            ],
            [
              { fa: 'سازمان امور مالیاتی', en: 'Tax authority' },
              { fa: 'برون‌سازمانی', en: 'External' },
              {
                fa: 'آیا درآمد مشمول مالیات به‌درستی گزارش شده است؟',
                en: 'Has taxable income been reported correctly?',
              },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'آشنایی با استودیو طراحی نوا', en: 'Meet Nova Design Studio' },
          text: {
            fa: 'در سراسر این دوره، **استودیو طراحی نوا** را دنبال می‌کنیم؛ کسب‌وکار کوچکی در زمینه طراحی گرافیک که سارا به‌تازگی آن را راه‌اندازی کرده است. خود سارا استفاده‌کننده درون‌سازمانی است؛ بانکی که به او وام می‌دهد و تأمین‌کنندگانی که به او نسیه می‌فروشند، استفاده‌کنندگان برون‌سازمانی‌اند. همه اعدادی که در درس‌های آینده می‌بینید از نخستین ماه فعالیت نوا گرفته شده‌اند.',
            en: 'Throughout this course we follow **Nova Design Studio**, a small graphic-design business that Sara has just opened. Sara herself is an internal user; the bank that lends her money and the suppliers who sell to her on account are external users. Every figure in the coming lessons comes from Nova’s first month of business.',
          },
        },
      ],
    },
    {
      id: 'branches-standards',
      title: { fa: 'شاخه‌های حسابداری و استانداردها', en: 'Branches of Accounting and Standards' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'حسابداری حرفه‌ای گسترده است. استفاده‌کنندگان مختلف به اطلاعات متفاوتی نیاز دارند و به همین دلیل، شاخه‌های تخصصی گوناگونی پیرامون این نیازها شکل گرفته است.',
            en: 'Accounting is a broad profession. Different users need different information, and specialized branches have grown up to serve each of them.',
          },
        },
        {
          type: 'diagram',
          id: 'branches',
          caption: {
            fa: 'شاخه‌های اصلی حسابداری و کانون توجه هر یک',
            en: 'The main branches of accounting and what each one focuses on',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**حسابداری مالی**: تهیه صورت‌های مالی با مقاصد عمومی برای استفاده‌کنندگان برون‌سازمانی، بر پایه استانداردهای حسابداری.',
              en: '**Financial accounting**: general-purpose financial statements for external users, prepared under accounting standards.',
            },
            {
              fa: '**حسابداری مدیریت**: تهیه بودجه، پیش‌بینی و گزارش‌های عملکرد برای تصمیم‌گیری درون‌سازمانی.',
              en: '**Managerial accounting**: budgets, forecasts and performance reports for internal decision-making.',
            },
            {
              fa: '**حسابداری بهای تمام‌شده (صنعتی)**: اندازه‌گیری بهای تمام‌شده محصولات، خدمات و فعالیت‌ها.',
              en: '**Cost accounting**: measuring the cost of products, services and activities.',
            },
            {
              fa: '**حسابداری مالیاتی**: محاسبه درآمد مشمول مالیات و رعایت قوانین مالیاتی.',
              en: '**Tax accounting**: computing taxable income and complying with tax law.',
            },
            {
              fa: '**حسابرسی**: رسیدگی مستقل به صورت‌های مالی که به استفاده‌کنندگان درباره قابل‌اتکا بودن آن‌ها اطمینان می‌دهد.',
              en: '**Auditing**: an independent examination that gives users confidence in the financial statements.',
            },
            {
              fa: '**حسابداری دولتی (بخش عمومی)**: حسابداری دستگاه‌های دولتی و سازمان‌های غیرانتفاعی.',
              en: '**Public-sector accounting**: accounting for government bodies and not-for-profit organizations.',
            },
            {
              fa: '**حسابداری دادگاهی (قضایی)**: کشف و بررسی تقلب و کمک به حل‌وفصل دعاوی مالی.',
              en: '**Forensic accounting**: investigating fraud and supporting the resolution of financial disputes.',
            },
            {
              fa: '**سیستم‌های اطلاعات حسابداری**: طراحی و کنترل سامانه‌ها و نرم‌افزارهایی که داده‌های مالی را گردآوری و پردازش می‌کنند.',
              en: '**Accounting information systems (AIS)**: designing and controlling the systems and software that capture and process financial data.',
            },
          ],
        },
        { type: 'h', text: { fa: 'چرا استانداردها اهمیت دارند؟', en: 'Why standards matter' } },
        {
          type: 'p',
          text: {
            fa: 'اگر هر شرکت قواعد خاص خودش را انتخاب می‌کرد، هیچ‌کس نمی‌توانست صورت‌های مالی دو شرکت را با هم مقایسه کند. **استانداردهای حسابداری** تعیین می‌کنند که معاملات چگونه شناسایی، اندازه‌گیری، ارائه و افشا شوند تا گزارش‌ها یکنواخت، مقایسه‌پذیر و قابل‌اعتماد باشند.',
            en: 'If every company chose its own rules, no one could compare two sets of financial statements. **Accounting standards** specify how transactions are recognized, measured, presented and disclosed, so that reports are consistent, comparable and trustworthy.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'مهم‌ترین مجموعه‌های استاندارد', en: 'Major sets of accounting standards' },
          head: [
            { fa: 'مجموعه استاندارد', en: 'Standards' },
            { fa: 'مرجع تدوین', en: 'Issued by' },
            { fa: 'حوزه کاربرد', en: 'Where they apply' },
          ],
          rows: [
            [
              { fa: 'استانداردهای بین‌المللی گزارشگری مالی (IFRS)', en: 'International Financial Reporting Standards (IFRS)' },
              { fa: 'هیئت استانداردهای بین‌المللی حسابداری (IASB)', en: 'International Accounting Standards Board (IASB)' },
              { fa: 'الزامی یا مجاز در بیشتر کشورهای جهان', en: 'Required or permitted in most countries' },
            ],
            [
              { fa: 'اصول پذیرفته‌شده حسابداری آمریکا (US GAAP)', en: 'US Generally Accepted Accounting Principles (US GAAP)' },
              { fa: 'هیئت استانداردهای حسابداری مالی (FASB)', en: 'Financial Accounting Standards Board (FASB)' },
              { fa: 'شرکت‌هایی که در ایالات متحده گزارش می‌دهند', en: 'Entities reporting in the United States' },
            ],
            [
              { fa: 'استانداردهای حسابداری ایران', en: 'Iranian Accounting Standards' },
              {
                fa: 'سازمان حسابرسی، از طریق کمیته تدوین استانداردهای حسابداری',
                en: 'The Audit Organization of Iran, through its accounting standards committee',
              },
              { fa: 'گزارشگری مالی واحدهای تجاری در ایران', en: 'Financial reporting by entities in Iran' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'استانداردهای ایران و IFRS', en: 'Iranian standards and IFRS' },
          text: {
            fa: 'استانداردهای حسابداری ایران عمدتاً بر پایه استانداردهای بین‌المللی و با در نظر گرفتن قوانین و شرایط داخلی تدوین شده‌اند. در سال‌های اخیر، نهادهای ناظر برخی واحدها، مانند بانک‌ها و شماری از شرکت‌های بورسی، را به تهیه صورت‌های مالی بر پایه IFRS نیز ملزم کرده‌اند. مفاهیم اصلی این دوره در هر دو چارچوب کاربرد دارند.',
            en: 'Iranian Accounting Standards were developed largely on the basis of international standards, adapted to local laws and conditions. In recent years, regulators have also required certain entities, such as banks and some listed companies, to prepare IFRS-based financial statements. The core ideas in this course apply under both frameworks.',
          },
        },
      ],
    },
    {
      id: 'principles',
      title: { fa: 'مفروضات و اصول حسابداری', en: 'Assumptions and Principles' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'زیر لایه استانداردها، مجموعه کوچکی از مفاهیم بنیادی قرار دارد که توضیح می‌دهد چرا صورت‌های مالی به این شکل تهیه می‌شوند. برخی از آن‌ها **مفروضات** هستند، یعنی شرایطی که درباره واحد تجاری از پیش پذیرفته‌ایم، و برخی دیگر **اصولی** که شیوه اندازه‌گیری و گزارشگری را هدایت می‌کنند.',
            en: 'Beneath the standards lies a small set of ideas that explain why financial statements look the way they do. Some are **assumptions**: conditions we take for granted about the business. Others are **principles** that guide how we measure and report.',
          },
        },
        { type: 'h', text: { fa: 'مفروضات بنیادی', en: 'Underlying assumptions' } },
        {
          type: 'table',
          head: [
            { fa: 'فرض', en: 'Assumption' },
            { fa: 'مفهوم', en: 'Meaning' },
            { fa: 'در استودیو نوا', en: 'At Nova' },
          ],
          rows: [
            [
              { fa: 'واحد اقتصادی (شخصیت جداگانه)', en: 'Economic entity' },
              {
                fa: 'حساب‌های واحد تجاری از امور مالی شخصی مالک و از سایر واحدها جداست.',
                en: 'The business is accounted for separately from its owner and from other businesses.',
              },
              {
                fa: 'خودروی شخصی سارا و اجاره خانه‌اش جزو دارایی‌ها و هزینه‌های نوا نیست.',
                en: 'Sara’s personal car and home rent are not Nova’s assets or expenses.',
              },
            ],
            [
              { fa: 'تداوم فعالیت', en: 'Going concern' },
              {
                fa: 'فرض می‌کنیم واحد تجاری در آینده قابل پیش‌بینی به فعالیت خود ادامه می‌دهد.',
                en: 'The business is expected to keep operating for the foreseeable future.',
              },
              {
                fa: 'تجهیزات به بهای تمام‌شده پس از کسر استهلاک گزارش می‌شود، نه به قیمت فروش فوری.',
                en: 'Equipment is reported at cost less depreciation, not at a fire-sale price.',
              },
            ],
            [
              { fa: 'واحد پولی', en: 'Monetary unit' },
              {
                fa: 'فقط اقلامی ثبت می‌شوند که با پول قابل اندازه‌گیری باشند، آن هم با یک واحد پول ثابت.',
                en: 'Only items that can be measured in money are recorded, in a single currency.',
              },
              {
                fa: 'خلاقیت سارا ارزشمند است، اما به‌عنوان دارایی ثبت نمی‌شود.',
                en: 'Sara’s creative talent is valuable but is not recorded as an asset.',
              },
            ],
            [
              { fa: 'دوره مالی', en: 'Periodicity (time period)' },
              {
                fa: 'عمر واحد تجاری به دوره‌هایی مانند ماه، فصل یا سال تقسیم می‌شود.',
                en: 'The life of the business is divided into periods, months, quarters or years.',
              },
              {
                fa: 'گزارش‌های نوا برای نخستین ماه فعالیت (روز 1 تا روز 30) تهیه می‌شود.',
                en: 'Nova reports on its first month, Day 1 to Day 30.',
              },
            ],
          ],
        },
        { type: 'h', text: { fa: 'اصول حسابداری', en: 'Key principles' } },
        {
          type: 'table',
          head: [
            { fa: 'اصل', en: 'Principle' },
            { fa: 'مفهوم', en: 'Meaning' },
            { fa: 'در استودیو نوا', en: 'At Nova' },
          ],
          rows: [
            [
              { fa: 'بهای تاریخی', en: 'Historical cost' },
              {
                fa: 'دارایی‌ها در ابتدا به مبلغی ثبت می‌شوند که واقعاً بابت آن‌ها پرداخت شده است.',
                en: 'Assets are initially recorded at the price actually paid for them.',
              },
              {
                fa: 'تجهیزات به مبلغ 20,000، یعنی همان مبلغ پرداختی، ثبت می‌شود؛ حتی اگر دوستی بگوید «بیشتر می‌ارزد».',
                en: 'Equipment is recorded at 20,000, what Sara paid, even if a friend says it is “worth” more.',
              },
            ],
            [
              { fa: 'شناخت درآمد', en: 'Revenue recognition' },
              {
                fa: 'درآمد زمانی شناسایی می‌شود که کسب شده باشد، یعنی خدمت ارائه شده باشد؛ نه لزوماً زمانی که وجه نقد دریافت می‌شود.',
                en: 'Revenue is recognized when it is earned, when the service is delivered, not necessarily when cash arrives.',
              },
              {
                fa: 'کار 4,000 روز 12 در همان روز درآمد به شمار می‌آید، هرچند مشتری بعداً پرداخت می‌کند.',
                en: 'The 4,000 job finished on Day 12 is revenue on Day 12, even though the customer pays later.',
              },
            ],
            [
              { fa: 'مبنای تعهدی و تطابق', en: 'Accrual basis and matching' },
              {
                fa: 'هزینه‌ها در دوره‌ای ثبت می‌شوند که به ایجاد درآمد کمک کرده‌اند، صرف‌نظر از زمان پرداخت وجه نقد.',
                en: 'Expenses are recorded in the period in which they help earn revenue, regardless of when cash is paid.',
              },
              {
                fa: 'بیمه 12 ماهه‌ای که از پیش پرداخت شده، در طول همان 12 ماه به هزینه منظور می‌شود.',
                en: 'Insurance paid in advance for 12 months is expensed over those 12 months.',
              },
            ],
            [
              { fa: 'احتیاط (محافظه‌کاری)', en: 'Conservatism (prudence)' },
              {
                fa: 'در شرایط ابهام، با احتیاط قضاوت می‌کنیم تا دارایی‌ها و درآمدها بیش از واقع، و بدهی‌ها و هزینه‌ها کمتر از واقع نشان داده نشوند.',
                en: 'Under uncertainty, judgements are made with caution so that assets and income are not overstated, nor liabilities and expenses understated.',
              },
              {
                fa: 'اگر احتمال وصول طلب از یک مشتری کم باشد، نوا نباید همچنان کل آن را دریافتنی گزارش کند.',
                en: 'If a customer is unlikely to pay, Nova should not keep reporting the full receivable.',
              },
            ],
            [
              { fa: 'اهمیت نسبی', en: 'Materiality' },
              {
                fa: 'قلمی بااهمیت است که حذف یا تحریف آن بتواند بر تصمیم استفاده‌کنندگان اثر بگذارد؛ اقلام کم‌اهمیت را می‌توان به روش ساده‌تری ثبت کرد.',
                en: 'An item is material if omitting or misstating it could influence users’ decisions; immaterial items may be handled in a simpler way.',
              },
              {
                fa: 'یک منگنه به مبلغ 15 را می‌توان یکجا به هزینه برد، به‌جای اینکه سال‌ها مستهلک شود.',
                en: 'A stapler costing 15 can be expensed at once rather than depreciated over several years.',
              },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'احتیاط به معنای بدبینی نیست', en: 'Prudence is not pessimism' },
          text: {
            fa: 'چارچوب‌های امروزی، احتیاط را **پرهیز از خوش‌بینی در قضاوت‌های همراه با ابهام** تعریف می‌کنند، نه مجوزی برای کمتر نشان دادن عمدی سود یا ایجاد ذخایر پنهان. هدف، اطلاعاتی بی‌طرف است که تصویری صادقانه از واقعیت ارائه کند.',
            en: 'Modern frameworks describe prudence as **caution when making judgements under uncertainty**: not as a licence to deliberately understate profit or build hidden reserves. The goal is neutral information that faithfully represents what happened.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'مبنای نقدی یا مبنای تعهدی؟', en: 'Cash basis or accrual basis?' },
          text: {
            fa: 'در **مبنای نقدی**، درآمد و هزینه فقط هنگام دریافت یا پرداخت وجه نقد ثبت می‌شوند. صورت‌های مالی تهیه‌شده بر پایه استانداردها از **مبنای تعهدی** پیروی می‌کنند که درآمد را هنگام کسب و هزینه را هنگام وقوع ثبت می‌کند. تفاوت این دو مبنا را در درسی جداگانه و با جزئیات بیشتر خواهید دید.',
            en: 'Under the **cash basis**, revenue and expenses are recorded only when cash changes hands. Financial statements prepared under accounting standards use the **accrual basis**, which records revenue when it is earned and expenses when they are incurred. A later lesson explores the difference in detail.',
          },
        },
      ],
    },
    {
      id: 'business-forms',
      title: { fa: 'شکل‌های حقوقی واحدهای تجاری', en: 'Forms of Business Organization' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'شکل حقوقی یک کسب‌وکار تعیین می‌کند مالک آن کیست، چه کسی پاسخ‌گوی بدهی‌های آن است و سهم مالکان در حساب‌ها با چه عنوانی نشان داده می‌شود. اما خود فرایند حسابداری، یعنی ثبت معاملات و تهیه صورت‌های مالی، در هر سه شکل اساساً یکسان است.',
            en: 'The legal form of a business determines who owns it, who is responsible for its debts and how the owners’ stake is labelled in the accounts. The accounting process itself, recording transactions and preparing statements, is essentially the same for all three forms.',
          },
        },
        {
          type: 'table',
          head: [
            { fa: 'ویژگی', en: 'Feature' },
            { fa: 'مؤسسه انفرادی', en: 'Sole proprietorship' },
            { fa: 'شرکت تضامنی (شراکت)', en: 'Partnership' },
            { fa: 'شرکت سهامی', en: 'Corporation' },
          ],
          rows: [
            [
              { fa: 'مالکان', en: 'Owners' },
              { fa: 'یک نفر', en: 'One person' },
              { fa: 'دو یا چند شریک', en: 'Two or more partners' },
              { fa: 'سهام‌داران، که ممکن است شمارشان بسیار زیاد باشد', en: 'Shareholders: possibly very many' },
            ],
            [
              { fa: 'مسئولیت در برابر بدهی‌ها', en: 'Liability for debts' },
              {
                fa: 'نامحدود؛ دارایی‌های شخصی مالک نیز در معرض خطر است',
                en: 'Unlimited: the owner’s personal assets are at risk',
              },
              { fa: 'معمولاً نامحدود و مشترک میان شرکا', en: 'Usually unlimited and shared jointly' },
              { fa: 'محدود به مبلغ سرمایه‌گذاری‌شده', en: 'Limited to the amount invested' },
            ],
            [
              { fa: 'شخصیت حقوقی مستقل', en: 'Separate legal entity' },
              { fa: 'ندارد', en: 'No' },
              { fa: 'بسته به قوانین هر کشور', en: 'Depends on national law' },
              { fa: 'دارد', en: 'Yes' },
            ],
            [
              { fa: 'حساب‌های حقوق مالکانه', en: 'Equity accounts' },
              { fa: 'سرمایه و برداشت', en: 'Capital and Drawings' },
              { fa: 'حساب سرمایه و برداشت جداگانه برای هر شریک', en: 'A capital and a drawings account for each partner' },
              { fa: 'سرمایه (سهام) و سود انباشته', en: 'Share capital and Retained earnings' },
            ],
            [
              { fa: 'نمونه رایج', en: 'Typical example' },
              { fa: 'فریلنسر یا مغازه کوچک', en: 'A freelancer or small shop' },
              { fa: 'دفتر وکالت یا مطب مشترک پزشکان', en: 'A law firm or group medical practice' },
              { fa: 'یک شرکت تولیدی بورسی یا بانک', en: 'A listed manufacturer or a bank' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'نوا کدام است؟', en: 'Which one is Nova?' },
          text: {
            fa: 'استودیو طراحی نوا یک **مؤسسه انفرادی** است و سارا تنها مالک آن است. به همین دلیل، حساب‌های حقوق مالکانه آن **سرمایه** و **برداشت** نام دارند. با این حال، بر پایه فرض واحد اقتصادی، نوا دفاتر خودش را کاملاً جدا از امور مالی شخصی سارا نگه می‌دارد.',
            en: 'Nova Design Studio is a **sole proprietorship**: Sara is its only owner, which is why its equity accounts are called **Capital** and **Drawings**. Even so, the economic entity assumption means Nova keeps its own books, completely separate from Sara’s personal finances.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          text: {
            fa: 'در ایران، قانون تجارت چند نوع شرکت را به رسمیت می‌شناسد؛ از جمله شرکت سهامی (عام و خاص)، شرکت با مسئولیت محدود و شرکت تضامنی. اصولی که در این دوره می‌آموزید، در همه آن‌ها به کار می‌رود.',
            en: 'In Iran, the Commercial Code recognizes several company forms, including joint-stock companies (public and private), limited liability companies and general partnerships. The principles in this course apply to all of them.',
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
              fa: 'حسابداری رویدادهای اقتصادی را **شناسایی**، **ثبت** و **گزارش** می‌کند؛ دفترداری بخش ثبت این فرایند است.',
              en: 'Accounting **identifies**, **records** and **communicates** economic events; bookkeeping is the recording part of that process.',
            },
            {
              fa: 'استفاده‌کنندگان درون‌سازمانی کسب‌وکار را اداره می‌کنند و استفاده‌کنندگان برون‌سازمانی بیشتر به صورت‌های مالی با مقاصد عمومی تکیه دارند.',
              en: 'Internal users run the business; external users rely mainly on general-purpose financial statements.',
            },
            {
              fa: 'استانداردهایی مانند IFRS و استانداردهای حسابداری ایران، گزارش‌ها را مقایسه‌پذیر و قابل‌اعتماد می‌کنند.',
              en: 'Standards such as IFRS and Iranian Accounting Standards make reports comparable and trustworthy.',
            },
            {
              fa: 'مفروضاتی مانند واحد اقتصادی و تداوم فعالیت، و اصولی مانند بهای تاریخی و مبنای تعهدی، شکل صورت‌های مالی را تعیین می‌کنند.',
              en: 'Assumptions such as economic entity and going concern, and principles such as historical cost and the accrual basis, shape every financial statement.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در درس بعد', en: 'Coming up next' },
          text: {
            fa: 'با معادله حسابداری آشنا می‌شوید و نخستین معاملات استودیو نوا را یکی‌یکی تحلیل می‌کنید.',
            en: 'You will meet the accounting equation and analyze Nova’s first transactions one by one.',
          },
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'حسابداری', en: 'Accounting' },
              def: {
                fa: 'نظامی اطلاعاتی که رویدادهای اقتصادی یک سازمان را شناسایی، ثبت و به استفاده‌کنندگان گزارش می‌کند.',
                en: 'The information system that identifies, records and communicates the economic events of an organization.',
              },
            },
            {
              term: { fa: 'دفترداری', en: 'Bookkeeping' },
              def: {
                fa: 'ثبت منظم و دقیق معاملات روزانه در دفاتر؛ بخشی از فرایند حسابداری.',
                en: 'The systematic, accurate recording of day-to-day transactions; one part of the accounting process.',
              },
            },
            {
              term: { fa: 'استفاده‌کنندگان درون‌سازمانی', en: 'Internal users' },
              def: {
                fa: 'مالکان مدیر، مدیران و کارکنانی که از اطلاعات حسابداری برای اداره کسب‌وکار استفاده می‌کنند.',
                en: 'Owner-managers, managers and staff who use accounting information to run the business.',
              },
            },
            {
              term: { fa: 'استفاده‌کنندگان برون‌سازمانی', en: 'External users' },
              def: {
                fa: 'سرمایه‌گذاران، اعتباردهندگان، نهادهای مالیاتی و ناظر و سایر اشخاصی که بیرون از کسب‌وکارند اما در آن منافعی دارند.',
                en: 'Investors, creditors, tax authorities, regulators and others outside the business who have an interest in it.',
              },
            },
            {
              term: { fa: 'IFRS', en: 'IFRS' },
              def: {
                fa: 'استانداردهای بین‌المللی گزارشگری مالی که هیئت استانداردهای بین‌المللی حسابداری (IASB) منتشر می‌کند.',
                en: 'International Financial Reporting Standards, issued by the International Accounting Standards Board (IASB).',
              },
            },
            {
              term: { fa: 'فرض واحد اقتصادی', en: 'Economic entity assumption' },
              def: {
                fa: 'فعالیت‌های واحد تجاری جدا از امور شخصی مالکان و سایر واحدها حسابداری می‌شود.',
                en: 'The activities of a business are accounted for separately from those of its owners and other entities.',
              },
            },
            {
              term: { fa: 'تداوم فعالیت', en: 'Going concern' },
              def: {
                fa: 'فرض اینکه واحد تجاری در آینده قابل پیش‌بینی به فعالیت خود ادامه می‌دهد.',
                en: 'The assumption that the business will continue operating for the foreseeable future.',
              },
            },
            {
              term: { fa: 'بهای تاریخی', en: 'Historical cost' },
              def: {
                fa: 'ثبت اولیه دارایی‌ها به مبلغی که هنگام تحصیل واقعاً پرداخت شده است.',
                en: 'Recording assets initially at the amount actually paid to acquire them.',
              },
            },
            {
              term: { fa: 'مبنای تعهدی', en: 'Accrual basis' },
              def: {
                fa: 'شناسایی درآمد هنگام کسب و هزینه هنگام وقوع، صرف‌نظر از زمان دریافت یا پرداخت وجه نقد.',
                en: 'Recognizing revenue when earned and expenses when incurred, regardless of when cash is received or paid.',
              },
            },
            {
              term: { fa: 'اهمیت نسبی', en: 'Materiality' },
              def: {
                fa: 'یک قلم زمانی بااهمیت است که حذف یا تحریف آن بتواند بر تصمیم استفاده‌کنندگان اثر بگذارد.',
                en: 'An item is material if omitting or misstating it could influence the decisions of users.',
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
        fa: 'کدام سه فعالیت، حسابداری را تعریف می‌کنند؟',
        en: 'Which three activities define accounting?',
      },
      options: [
        { fa: 'خرید، فروش و سودآوری', en: 'Buying, selling and making a profit' },
        { fa: 'بودجه‌بندی، پیش‌بینی و سرمایه‌گذاری', en: 'Budgeting, forecasting and investing' },
        { fa: 'شناسایی، ثبت و گزارش', en: 'Identifying, recording and communicating' },
        { fa: 'حسابرسی، محاسبه مالیات و بایگانی', en: 'Auditing, computing tax and filing' },
      ],
      answer: 2,
      explain: {
        fa: 'حسابداری رویدادهای اقتصادی را شناسایی می‌کند، آن‌ها را ثبت می‌کند و نتیجه را به استفاده‌کنندگان گزارش می‌دهد. گزینه‌های دیگر فقط بخش‌هایی از کاربردهای حسابداری یا فعالیت‌های تجاری‌اند.',
        en: 'Accounting identifies economic events, records them and communicates the results to users. The other options describe business activities or particular uses of accounting, not its definition.',
      },
    },
    {
      q: {
        fa: 'کدام‌یک استفاده‌کننده برون‌سازمانی اطلاعات حسابداری است؟',
        en: 'Which of these is an external user of accounting information?',
      },
      options: [
        { fa: 'بانکی که درخواست وام را بررسی می‌کند', en: 'A bank reviewing a loan application' },
        { fa: 'مدیر بازاریابی شرکت', en: 'The company’s marketing manager' },
        { fa: 'مالکی که خودش کسب‌وکار را اداره می‌کند', en: 'An owner who manages the business' },
        { fa: 'سرپرست واحد تولید', en: 'The production supervisor' },
      ],
      answer: 0,
      explain: {
        fa: 'بانک بیرون از کسب‌وکار قرار دارد و به سوابق داخلی آن دسترسی مستقیم ندارد؛ بنابراین استفاده‌کننده برون‌سازمانی است. سه گزینه دیگر کسب‌وکار را از درون اداره می‌کنند.',
        en: 'The bank sits outside the business and has no direct access to its internal records, so it is an external user. The other three run the business from the inside.',
      },
    },
    {
      q: {
        fa: 'سارا هزینه سفر خانوادگی‌اش را از حساب بانکی شخصی خود می‌پردازد. این رویداد در دفاتر نوا چگونه ثبت می‌شود؟',
        en: 'Sara pays for a family holiday from her personal bank account. How is this recorded in Nova’s books?',
      },
      options: [
        { fa: 'به‌عنوان هزینه سفر نوا', en: 'As a travel expense of Nova' },
        { fa: 'به‌عنوان برداشت', en: 'As drawings' },
        { fa: 'به‌عنوان دارایی نوا', en: 'As an asset of Nova' },
        { fa: 'اصلاً ثبت نمی‌شود، زیرا به نوا مربوط نیست', en: 'It is not recorded at all, it does not involve Nova' },
      ],
      answer: 3,
      explain: {
        fa: 'بر پایه فرض واحد اقتصادی، امور مالی شخصی سارا از نوا جداست. اگر سارا این هزینه را از وجه نقد نوا پرداخت می‌کرد، باید به‌عنوان برداشت ثبت می‌شد؛ اما در این حالت هیچ ثبتی در دفاتر نوا لازم نیست.',
        en: 'Under the economic entity assumption, Sara’s personal finances are separate from Nova’s. Had she used Nova’s cash, it would be recorded as drawings, but paid from her own account, it does not touch Nova’s books at all.',
      },
    },
    {
      q: {
        fa: 'نوا تجهیزات خود را به بهای تمام‌شده پس از کسر استهلاک گزارش می‌کند، نه به مبلغی که در صورت فروش فوری به دست می‌آید. این رویه بر کدام فرض استوار است؟',
        en: 'Nova reports its equipment at cost less depreciation rather than at what it would fetch in a forced sale tomorrow. Which assumption supports this?',
      },
      options: [
        { fa: 'واحد پولی', en: 'Monetary unit' },
        { fa: 'تداوم فعالیت', en: 'Going concern' },
        { fa: 'دوره مالی', en: 'Periodicity' },
        { fa: 'اهمیت نسبی', en: 'Materiality' },
      ],
      answer: 1,
      explain: {
        fa: 'چون فرض می‌شود نوا به فعالیت خود ادامه می‌دهد، تجهیزات برای استفاده در عملیات نگهداری می‌شود، نه برای فروش فوری. به همین دلیل، ارزش انحلال (فروش اضطراری) مبنای گزارش نیست.',
        en: 'Because Nova is assumed to keep operating, the equipment is held for use, not for immediate sale. Liquidation (forced-sale) values are therefore not the basis of measurement.',
      },
    },
    {
      q: {
        fa: 'نوا یک پروژه طراحی 4,000 را در روز 12 به پایان می‌رساند و مشتری قرار است در روز 40 پرداخت کند. بر پایه مبنای تعهدی، درآمد چه زمانی شناسایی می‌شود؟',
        en: 'Nova completes a 4,000 design job on Day 12; the customer will pay on Day 40. Under the accrual basis, when is the revenue recognized?',
      },
      options: [
        { fa: 'روز 40، هنگام دریافت وجه نقد', en: 'Day 40, when the cash is received' },
        { fa: 'روز 12، هنگام انجام خدمت', en: 'Day 12, when the service is performed' },
        { fa: 'روز 1، هنگام آغاز فعالیت', en: 'Day 1, when the business starts' },
        { fa: 'فقط در پایان سال مالی', en: 'Only at the end of the financial year' },
      ],
      answer: 1,
      explain: {
        fa: 'درآمد زمانی شناسایی می‌شود که کسب شده باشد؛ یعنی هنگامی که نوا خدمت را ارائه کرده است. زمان دریافت وجه نقد بر زمان شناخت درآمد اثری ندارد.',
        en: 'Revenue is recognized when it is earned, when Nova delivers the service. The timing of the cash receipt does not change when the revenue is recognized.',
      },
    },
    {
      q: {
        fa: 'در کدام شکل حقوقی، مسئولیت مالکان در برابر بدهی‌ها به مبلغ سرمایه‌گذاری‌شده‌شان محدود است؟',
        en: 'In which form of business is the owners’ liability for debts limited to the amount they invested?',
      },
      options: [
        { fa: 'مؤسسه انفرادی', en: 'Sole proprietorship' },
        { fa: 'شرکت تضامنی', en: 'General partnership' },
        { fa: 'در همه شکل‌ها به یک اندازه', en: 'All forms equally' },
        { fa: 'شرکت سهامی', en: 'Corporation' },
      ],
      answer: 3,
      explain: {
        fa: 'سهام‌داران شرکت سهامی فقط تا میزان سرمایه‌گذاری خود مسئول‌اند. در مؤسسه انفرادی و معمولاً در شرکت تضامنی، مسئولیت مالکان نامحدود است و دارایی‌های شخصی آنان نیز در معرض خطر قرار دارد.',
        en: 'Shareholders in a corporation can lose at most what they invested. Sole proprietors and, usually, general partners face unlimited liability, putting their personal assets at risk.',
      },
    },
  ],
}
