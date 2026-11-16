import type { Lesson } from '../types'

export const lesson: Lesson = {
  slug: 'what-is-accounting',
  number: 1,
  level: 'beginner',
  minutes: 30,
  icon: 'BookOpen',
  tone: 'primary',
  title: { fa: 'حسابداری چیست؟', en: 'What Is Accounting?' },
  summary: {
    fa: 'با زبان کسب‌وکار آشنا شوید: حسابداری چه کاری انجام می‌دهد، حسابدار در ایران هر روز چه می‌کند، چه کسانی به اطلاعات او تکیه می‌کنند و چه استانداردها، اصول و قواعد اخلاقی‌ای این حرفه را قابل‌اعتماد می‌کند.',
    en: 'Meet the language of business: what accounting does, what an accountant in Iran actually does each day, who relies on the information, and the standards, principles and ethics that make the profession trustworthy.',
  },
  objectives: [
    {
      fa: 'حسابداری را تعریف کنید و رویداد حسابداری را از رویدادی که ثبت نمی‌شود تشخیص دهید.',
      en: 'Define accounting and tell an accounting event apart from one that is not recorded.',
    },
    {
      fa: 'تفاوت دفترداری و حسابداری، کار روزانه حسابدار و مسیرهای شغلی حسابداری در ایران را توضیح دهید.',
      en: 'Explain bookkeeping versus accounting, an accountant’s daily work and the accounting careers available in Iran.',
    },
    {
      fa: 'استفاده‌کنندگان درون‌سازمانی و برون‌سازمانی و اطلاعاتی را که هر یک لازم دارد بشناسید.',
      en: 'Identify internal and external users and the information each one needs.',
    },
    {
      fa: 'نقش استانداردهای حسابداری ایران و IFRS و مفروضات و اصول بنیادی حسابداری را توضیح دهید.',
      en: 'Explain the role of Iranian Accounting Standards and IFRS, and the core assumptions and principles of accounting.',
    },
    {
      fa: 'اصول بنیادی اخلاق حرفه‌ای را نام ببرید و در یک موقعیت ساده، قضاوت حرفه‌ای درست را انتخاب کنید.',
      en: 'Name the fundamental ethical principles and choose the right professional judgement in a simple situation.',
    },
  ],
  sections: [
    {
      id: 'language-of-business',
      title: { fa: 'حسابداری؛ زبان کسب‌وکار', en: 'Accounting: The Language of Business' },
      blocks: [
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'چرا اهمیت دارد؟', en: 'Why it matters' },
          text: {
            fa: 'سارا تازه استودیو طراحی نوا را راه انداخته است. هنوز ماه اول تمام نشده که سه پرسش جدی پیش رویش قرار می‌گیرد: بانکی که 15,000 به او وام داده، گزارش منظم دارایی‌ها و بدهی‌ها را می‌خواهد؛ مشتریان صورت‌حساب رسمی می‌خواهند؛ و خود سارا می‌خواهد بداند آیا استودیو واقعاً سود می‌کند. بدون حسابداری، سارا فقط می‌تواند حدس بزند. با حسابداری، پاسخ هر سه پرسش در چند گزارش ساده آماده است.',
            en: 'Sara has just opened Nova Design Studio. Before the first month is over she faces three serious questions: the bank that lent her 15,000 wants regular reports on what the studio owns and owes; clients want proper invoices; and Sara herself wants to know whether the studio is really making money. Without accounting she can only guess. With accounting, all three answers sit in a few simple reports.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'هر کسب‌وکاری، از یک کافه کوچک محلی تا یک شرکت بزرگ، باید بداند در چه وضعیتی قرار دارد: چه منابعی در اختیار دارد؟ چقدر بدهی دارد؟ آیا ماه گذشته سود کرده است یا زیان؟ **حسابداری** نظامی اطلاعاتی است که به این پرسش‌ها پاسخ می‌دهد. حسابداری رویدادهای اقتصادی اثرگذار بر یک سازمان را **شناسایی** می‌کند، آن‌ها را به‌شکلی منظم **ثبت** می‌کند و نتیجه را به کسانی که به آن نیاز دارند **گزارش** می‌دهد.',
            en: 'Every business, from a corner café to a large group, needs to know where it stands. What does it own? What does it owe? Did it make a profit last month? **Accounting** is the information system that answers these questions. It **identifies** the economic events that affect an organization, **records** them systematically, and **communicates** the results to the people who need them.',
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
                en: 'Select the events that are relevant to the business and can be measured in money: a sale, a purchase, a bank loan. A friendly phone call with a customer may matter, but it is not an accounting event.',
              },
            },
            {
              title: { fa: 'ثبت', en: 'Record' },
              text: {
                fa: 'هر رویداد را به ترتیب زمانی و همراه با مدرک قابل رسیدگی (مانند فاکتور یا رسید بانکی) ثبت کنید، سپس آن را در حساب‌ها طبقه‌بندی و خلاصه کنید.',
                en: 'Keep a chronological record of each event, backed by a verifiable document such as an invoice or a bank slip, then classify and summarize it in accounts.',
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
        { type: 'h', text: { fa: 'رویداد حسابداری چیست؟', en: 'What counts as an accounting event?' } },
        {
          type: 'p',
          text: {
            fa: 'همه رویدادها در دفاتر ثبت نمی‌شوند. **رویداد حسابداری** (معامله) باید دو آزمون را با هم بگذراند: نخست، **وضعیت مالی** واحد تجاری را تغییر دهد؛ یعنی دست‌کم بر یکی از دارایی‌ها، بدهی‌ها یا حقوق مالکانه اثر بگذارد. دوم، بتوان مبلغ آن را **به‌طور قابل‌اتکا با پول اندازه گرفت**. رویداد ممکن است **برون‌سازمانی** باشد، مانند خرید از تأمین‌کننده، یا **درون‌سازمانی**، مانند مصرف ملزومات یا آسیب دیدن تجهیزات.',
            en: 'Not every event goes into the books. An **accounting event** (a transaction) must pass two tests together: first, it changes the **financial position** of the business, affecting at least one of its assets, liabilities or equity; second, its amount can be **measured reliably in money**. It may be **external**, such as a purchase from a supplier, or **internal**, such as using up supplies or damage to equipment.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'آیا این رویداد در دفاتر ثبت می‌شود؟', en: 'Does this event go into the books?' },
          head: [
            { fa: 'رویداد', en: 'Event' },
            { fa: 'رویداد حسابداری؟', en: 'Accounting event?' },
            { fa: 'چرا؟', en: 'Why?' },
          ],
          rows: [
            [
              { fa: 'سارا 50,000 از پول شخصی‌اش را به حساب بانکی نوا واریز می‌کند.', en: 'Sara deposits 50,000 of her own money into Nova’s bank account.' },
              { fa: 'بله', en: 'Yes' },
              { fa: 'موجودی نقد و سرمایه نوا هر دو افزایش می‌یابند.', en: 'Nova’s cash and capital both increase.' },
            ],
            [
              { fa: 'نوا با یک مشتری قرارداد طراحی برای ماه آینده امضا می‌کند.', en: 'Nova signs a design contract with a client for next month.' },
              { fa: 'خیر', en: 'No' },
              {
                fa: 'هنوز نه خدمتی ارائه شده و نه پولی جابه‌جا شده است؛ وضعیت مالی تغییری نکرده است.',
                en: 'No work has been done and no money has moved yet, so the financial position is unchanged.',
              },
            ],
            [
              { fa: 'نوا 3,000 ملزومات را نسیه می‌خرد.', en: 'Nova buys 3,000 of supplies on account.' },
              { fa: 'بله', en: 'Yes' },
              {
                fa: 'ملزومات (دارایی) و حساب‌های پرداختنی (بدهی) افزایش می‌یابند، هرچند هنوز پولی پرداخت نشده است.',
                en: 'Supplies (an asset) and accounts payable (a liability) both increase, even though no cash has been paid yet.',
              },
            ],
            [
              { fa: 'سارا طراحی را استخدام می‌کند که از ماه بعد کارش را شروع می‌کند.', en: 'Sara hires a designer who starts next month.' },
              { fa: 'خیر', en: 'No' },
              {
                fa: 'تا وقتی کاری انجام نشده و حقوقی تعلق نگرفته، دارایی یا بدهی‌ای ایجاد نشده است.',
                en: 'Until work is done and wages are earned, no asset or liability exists.',
              },
            ],
            [
              { fa: 'یک مشتری در شبکه‌های اجتماعی از کار نوا تعریف می‌کند.', en: 'A client praises Nova’s work on social media.' },
              { fa: 'خیر', en: 'No' },
              { fa: 'ارزشمند است، اما نمی‌توان آن را به‌طور قابل‌اتکا با پول اندازه گرفت.', en: 'Valuable, but it cannot be measured reliably in money.' },
            ],
            [
              {
                fa: 'رایانه یک فروشگاه که 4,000 خریداری شده بود، در اثر نشت آب از کار می‌افتد.',
                en: 'A shop’s computer, bought for 4,000, is ruined by a water leak.',
              },
              { fa: 'بله', en: 'Yes' },
              {
                fa: 'یک دارایی از بین رفته است؛ این رویدادی درون‌سازمانی است و زیان آن ثبت می‌شود.',
                en: 'An asset has been lost; this is an internal event and the loss is recorded.',
              },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'چرا «زبان کسب‌وکار»؟', en: 'Why “the language of business”?' },
          text: {
            fa: 'مدیران، سرمایه‌گذاران، بانک‌ها و سازمان امور مالیاتی همگی با واژه‌های حسابداری درباره یک کسب‌وکار سخن می‌گویند: درآمد، سود، دارایی، جریان نقدی. یادگرفتن حسابداری یعنی یادگرفتن خواندن و سخن‌گفتن به همین زبان مشترک.',
            en: 'Managers, investors, bankers and tax authorities all discuss a business in accounting terms: revenue, profit, assets, cash flow. Learning accounting means learning to read and speak that shared language.',
          },
        },
        { type: 'h', text: { fa: 'دفترداری در برابر حسابداری', en: 'Bookkeeping vs. accounting' } },
        {
          type: 'compare',
          left: {
            title: { fa: 'دفترداری', en: 'Bookkeeping' },
            items: [
              { fa: 'معاملات روزانه را دقیق و به‌موقع ثبت می‌کند', en: 'Records day-to-day transactions accurately and on time' },
              {
                fa: 'از رویه‌های ازپیش‌تعیین‌شده پیروی می‌کند؛ بیشتر جنبه اجرایی دارد و روزبه‌روز خودکارتر می‌شود',
                en: 'Follows established procedures; largely clerical and increasingly automated',
              },
              { fa: 'خروجی آن: دفتر روزنامه، دفتر کل و مانده به‌روز حساب‌ها', en: 'Produces journals, ledgers and up-to-date account balances' },
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
              { fa: 'صورت‌های مالی را تهیه، تحلیل و تفسیر می‌کند', en: 'Prepares, analyzes and interprets financial statements' },
              {
                fa: 'بودجه‌بندی، محاسبه بهای تمام‌شده، برنامه‌ریزی مالیاتی و حسابرسی را نیز در بر می‌گیرد',
                en: 'Extends to budgeting, costing, tax planning and auditing',
              },
              { fa: 'به پرسش «این یعنی چه و چه باید بکنیم؟» پاسخ می‌دهد', en: 'Answers “What does it mean, and what should we do?”' },
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
      title: { fa: 'چه کسانی از اطلاعات حسابداری استفاده می‌کنند؟', en: 'Who Uses Accounting Information?' },
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
              { fa: 'بانک‌ها، تأمین‌کنندگان و سایر اعتباردهندگان', en: 'Banks, suppliers and other creditors' },
              { fa: 'سازمان امور مالیاتی و نهادهای ناظر', en: 'Tax authorities and regulators' },
              { fa: 'مشتریان، کارکنان و عموم مردم', en: 'Customers, employees and the public' },
              { fa: 'عمدتاً به صورت‌های مالی با مقاصد عمومی تکیه می‌کنند', en: 'Rely mainly on general-purpose financial statements' },
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
              { fa: 'آیا این شرکت آن‌قدر سودآور خواهد بود که سرمایه‌گذاری من را توجیه کند؟', en: 'Will this company earn enough to justify my investment?' },
            ],
            [
              { fa: 'بانک', en: 'Bank' },
              { fa: 'برون‌سازمانی', en: 'External' },
              { fa: 'آیا این کسب‌وکار می‌تواند وام را به‌موقع بازپرداخت کند؟', en: 'Can the business repay the loan on time?' },
            ],
            [
              { fa: 'تأمین‌کننده', en: 'Supplier' },
              { fa: 'برون‌سازمانی', en: 'External' },
              { fa: 'آیا فروش نسیه به این مشتری کم‌خطر است؟', en: 'Is it safe to sell to them on credit?' },
            ],
            [
              { fa: 'سازمان امور مالیاتی', en: 'Tax authority' },
              { fa: 'برون‌سازمانی', en: 'External' },
              { fa: 'آیا درآمد مشمول مالیات به‌درستی گزارش شده است؟', en: 'Has taxable income been reported correctly?' },
            ],
          ],
        },
        { type: 'h', text: { fa: 'صورت‌های مالی: پاسخ به پرسش‌های استفاده‌کنندگان', en: 'The financial statements: answers for users' } },
        {
          type: 'table',
          caption: { fa: 'هر صورت مالی به چه پرسشی پاسخ می‌دهد؟', en: 'Which question does each statement answer?' },
          head: [
            { fa: 'صورت مالی', en: 'Statement' },
            { fa: 'پرسشی که پاسخ می‌دهد', en: 'The question it answers' },
          ],
          rows: [
            [
              { fa: 'صورت سود و زیان', en: 'Income statement' },
              { fa: 'در این دوره سود کردیم یا زیان؟ درآمدها و هزینه‌ها چقدر بود؟', en: 'Did we make a profit or a loss this period? What were revenue and expenses?' },
            ],
            [
              { fa: 'ترازنامه (صورت وضعیت مالی)', en: 'Balance sheet (statement of financial position)' },
              { fa: 'در پایان دوره چه داریم، چه بدهکاریم و سهم مالک چقدر است؟', en: 'At period end, what do we own, what do we owe and what is the owner’s share?' },
            ],
            [
              { fa: 'صورت تغییرات در حقوق مالکانه', en: 'Statement of changes in equity' },
              { fa: 'سهم مالک چرا و چقدر تغییر کرد؟', en: 'Why, and by how much, did the owner’s stake change?' },
            ],
            [
              { fa: 'صورت جریان‌های نقدی', en: 'Cash flow statement' },
              { fa: 'وجه نقد از کجا آمد و به کجا رفت؟', en: 'Where did cash come from and where did it go?' },
            ],
            [
              { fa: 'یادداشت‌های توضیحی', en: 'Notes' },
              { fa: 'از چه روش‌هایی استفاده شده و پشت ارقام چه جزئیاتی است؟', en: 'Which methods were used, and what detail lies behind the figures?' },
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
        {
          type: 'callout',
          tone: 'info',
          text: {
            fa: 'این صورت‌ها را در درس صورت‌های مالی، گام‌به‌گام برای نوا تهیه می‌کنید. فعلاً کافی است بدانید هر صورت به پرسش متفاوتی پاسخ می‌دهد و همه آن‌ها از همان ثبت‌های روزانه ساخته می‌شوند.',
            en: 'You will build these statements for Nova step by step in the lesson on financial statements. For now, it is enough to know that each one answers a different question and that all of them are built from the same day-to-day records.',
          },
        },
      ],
    },
    {
      id: 'profession',
      title: { fa: 'حرفه حسابداری: کار روزانه، شاخه‌ها و مسیرهای شغلی', en: 'The Profession: Daily Work, Branches and Careers' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'حسابداری فقط «جمع زدن اعداد» نیست. حسابداران سوابق را نگه می‌دارند، آن‌ها را کنترل می‌کنند، گزارش می‌دهند و به مدیران مشاوره می‌دهند. بیایید ببینیم یک حسابدار در عمل چه می‌کند و این حرفه چه مسیرهایی پیش رویتان می‌گذارد.',
            en: 'Accounting is more than adding up numbers. Accountants keep records, check them, report on them and advise managers. Let’s look at what an accountant actually does and which paths the profession opens up.',
          },
        },
        { type: 'h', text: { fa: 'یک حسابدار در طول روز چه می‌کند؟', en: 'What does an accountant actually do all day?' } },
        {
          type: 'table',
          caption: { fa: 'ریتم کار یک حسابدار در یک شرکت کوچک یا متوسط', en: 'The working rhythm of an accountant in a small or mid-sized company' },
          head: [
            { fa: 'دوره', en: 'When' },
            { fa: 'کارهای معمول', en: 'Typical tasks' },
          ],
          rows: [
            [
              { fa: 'روزانه', en: 'Daily' },
              {
                fa: 'بررسی مدارک (فاکتور خرید و فروش، رسید بانکی، چک)، صدور سند حسابداری برای هر رویداد، ثبت دریافت‌ها و پرداخت‌ها و پاسخ به پرسش همکاران درباره مانده حساب‌ها',
                en: 'Checking source documents (sales and purchase invoices, bank slips, cheques), issuing an accounting voucher for each event, recording receipts and payments, answering colleagues’ questions about balances',
              },
            ],
            [
              { fa: 'هفتگی', en: 'Weekly' },
              {
                fa: 'پیگیری مطالبات از مشتریان، برنامه‌ریزی پرداخت به تأمین‌کنندگان و کنترل سررسید چک‌های دریافتنی و پرداختنی',
                en: 'Following up amounts owed by customers, scheduling supplier payments, watching the due dates of cheques received and issued',
              },
            ],
            [
              { fa: 'ماهانه', en: 'Monthly' },
              {
                fa: 'تهیه صورت مغایرت بانکی، محاسبه حقوق و دستمزد و فهرست بیمه کارکنان، ثبت‌های اصلاحی پایان ماه و تهیه گزارش‌های مدیریتی',
                en: 'Preparing the bank reconciliation, payroll and the staff social security list, month-end adjusting entries and management reports',
              },
            ],
            [
              { fa: 'فصلی و سالانه', en: 'Quarterly and yearly' },
              {
                fa: 'تهیه اظهارنامه‌های مالیاتی دوره‌ای، شمارش موجودی‌ها، بستن حساب‌ها، تهیه صورت‌های مالی سالانه و همکاری با حسابرس',
                en: 'Periodic tax returns, stock counts, closing the books, preparing the annual financial statements and working with the auditor',
              },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: سند حسابداری', en: 'In practice: the accounting voucher' },
          text: {
            fa: 'در ایران، واحد اصلی کار حسابدار **سند حسابداری** است. هر رویداد در قالب سندی ثبت می‌شود که شماره، تاریخ، شرح، کد حساب‌ها و مبالغ بدهکار و بستانکار دارد؛ مدارک پشتوانه (مانند فاکتور یا رسید بانکی) به آن پیوست می‌شود و تهیه‌کننده و تأییدکننده آن را امضا می‌کنند. امروزه بیشتر شرکت‌ها اسناد را در نرم‌افزارهای حسابداری ایرانی صادر می‌کنند که حساب‌ها را در سه سطح کل، معین و تفصیلی نگه می‌دارند. این موضوع را در درس اسناد حسابداری و کدینگ به‌طور کامل یاد می‌گیرید.',
            en: 'In Iran, the basic unit of an accountant’s work is the **accounting voucher** (سند حسابداری). Each event is entered on a voucher with a number, a date, a description, account codes and debit and credit amounts; the supporting documents (an invoice or a bank slip, for example) are attached, and the preparer and the approver sign it. Most companies now issue vouchers in Iranian accounting software that keeps accounts at three levels: general, subsidiary and detail. You will learn this fully in the lesson on vouchers and coding.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: دفاتر قانونی و مالیات', en: 'In practice: legal books and tax' },
          text: {
            fa: 'بر پایه قوانین تجاری و مالیاتی ایران، برخی مؤدیان باید **دفاتر قانونی** (دفتر روزنامه و دفتر کل) نگه دارند و آن‌ها را در مهلت مقرر ثبت و پلمب کنند. بسیاری از کسب‌وکارها نیز باید صورت‌حساب‌های فروش خود را در **سامانه مودیان** صادر کنند. اینکه کدام کسب‌وکار مشمول کدام تکلیف است، به قوانین و آیین‌نامه‌های روز بستگی دارد؛ پیش از اقدام، آخرین مقررات را بررسی کنید.',
            en: 'Under Iran’s commercial and tax rules, some taxpayers must keep **legal books** (a journal and a general ledger) and have them registered and sealed on time. Many businesses must also issue their sales invoices through the **Taxpayers System** (سامانه مودیان). Which business has which duty depends on the current laws and regulations, so check the latest rules before acting.',
          },
        },
        { type: 'h', text: { fa: 'شاخه‌های حسابداری', en: 'Branches of accounting' } },
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
        { type: 'h', text: { fa: 'مسیرهای شغلی حسابداری در ایران', en: 'Accounting careers in Iran' } },
        {
          type: 'table',
          head: [
            { fa: 'نقش', en: 'Role' },
            { fa: 'چه می‌کند؟', en: 'What they do' },
            { fa: 'مسیر معمول', en: 'Usual path' },
          ],
          rows: [
            [
              { fa: 'حسابدار (از کمک‌حسابدار تا حسابدار ارشد)', en: 'Accountant (from assistant to senior)' },
              {
                fa: 'صدور و کنترل اسناد، نگهداری حساب‌ها، تهیه گزارش‌ها و صورت‌های مالی',
                en: 'Issues and checks vouchers, keeps the accounts, prepares reports and financial statements',
              },
              {
                fa: 'مدرک حسابداری، تسلط بر نرم‌افزار و کار زیر نظر یک حسابدار باتجربه',
                en: 'An accounting qualification, software skills and work under an experienced accountant',
              },
            ],
            [
              { fa: 'مدیر مالی', en: 'Finance manager' },
              {
                fa: 'برنامه‌ریزی نقدینگی، بودجه و تأمین مالی و نظارت بر کل واحد مالی',
                en: 'Plans cash, budgets and financing, and oversees the whole finance team',
              },
              { fa: 'چند سال تجربه در حسابداری و مدیریت', en: 'Several years of accounting and management experience' },
            ],
            [
              { fa: 'حسابرس داخلی', en: 'Internal auditor' },
              {
                fa: 'از درون سازمان، کنترل‌ها و فرایندها را ارزیابی می‌کند و خطا و تقلب را زودتر آشکار می‌کند',
                en: 'Evaluates controls and processes from inside the organization and catches errors and fraud early',
              },
              { fa: 'تجربه حسابداری یا حسابرسی', en: 'Accounting or audit experience' },
            ],
            [
              { fa: 'حسابرس مستقل', en: 'External (independent) auditor' },
              {
                fa: 'در یک مؤسسه حسابرسی یا در سازمان حسابرسی، به صورت‌های مالی واحدهای دیگر رسیدگی و درباره آن‌ها اظهارنظر می‌کند',
                en: 'Works in an audit firm or the Audit Organization, examines other entities’ financial statements and gives an opinion on them',
              },
              { fa: 'شروع از دستیار حسابرس و ارتقا با کسب تجربه', en: 'Starts as an audit assistant and is promoted with experience' },
            ],
            [
              { fa: 'حسابدار رسمی', en: 'Certified public accountant (حسابدار رسمی)' },
              {
                fa: 'عضو جامعه حسابداران رسمی ایران است و گزارش‌های حسابرسی و بازرسی قانونی شرکت‌ها را امضا می‌کند',
                en: 'A member of the Iranian Association of Certified Public Accountants who signs statutory audit and statutory inspector reports',
              },
              {
                fa: 'احراز شرایط تحصیلی و سابقه کار حرفه‌ای و قبولی در آزمون ورود به جامعه',
                en: 'Meeting the education and professional experience requirements and passing the Association’s admission exam',
              },
            ],
            [
              { fa: 'مشاور مالیاتی', en: 'Tax adviser' },
              {
                fa: 'تهیه اظهارنامه، برنامه‌ریزی مالیاتی و همراهی مؤدی در رسیدگی‌های مالیاتی',
                en: 'Prepares returns, plans tax and supports clients through tax audits',
              },
              { fa: 'تسلط بر قوانین مالیاتی و تجربه عملی', en: 'A strong command of tax law and practical experience' },
            ],
            [
              { fa: 'کارشناس رسمی دادگستری (حسابداری و حسابرسی)', en: 'Official court expert (accounting and auditing)' },
              { fa: 'در دعاوی مالی برای دادگاه گزارش کارشناسی تهیه می‌کند', en: 'Prepares expert reports for courts in financial disputes' },
              { fa: 'قبولی در آزمون کارشناسی رسمی در همین رشته', en: 'Passing the official expert exam in this field' },
            ],
          ],
        },
        { type: 'h', text: { fa: 'نهادهای حرفه‌ای مهم', en: 'Key professional bodies' } },
        {
          type: 'list',
          items: [
            {
              fa: '**سازمان حسابرسی**: نهادی دولتی که حسابرسی بسیاری از شرکت‌های دولتی را انجام می‌دهد و به موجب قانون، مرجع تدوین استانداردهای حسابداری و حسابرسی در ایران است.',
              en: '**The Audit Organization** (سازمان حسابرسی): a state body that audits many government-owned companies and is, by law, the authority that issues accounting and auditing standards in Iran.',
            },
            {
              fa: '**جامعه حسابداران رسمی ایران**: نهاد حرفه‌ای حسابداران رسمی و مؤسسات حسابرسی عضو که بر کیفیت کار اعضا نظارت می‌کند.',
              en: '**The Iranian Association of Certified Public Accountants** (جامعه حسابداران رسمی ایران): the professional body of certified accountants and member audit firms, which oversees the quality of their work.',
            },
            {
              fa: '**انجمن حسابداران خبره ایران** و **انجمن حسابداری ایران**: تشکل‌های حرفه‌ای و علمی که آموزش، پژوهش و توسعه حرفه را دنبال می‌کنند.',
              en: '**The Iranian Institute of Certified Accountants** and **the Iranian Accounting Association**: professional and academic bodies that promote training, research and the development of the profession.',
            },
            {
              fa: '**سازمان بورس و اوراق بهادار**: بر گزارشگری شرکت‌های پذیرفته‌شده در بورس نظارت می‌کند و مؤسسات حسابرسی «معتمد» خود را برای حسابرسی این شرکت‌ها مشخص می‌کند.',
              en: '**The Securities and Exchange Organization**: supervises reporting by listed companies and names the “trusted” audit firms allowed to audit them.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          text: {
            fa: 'شرایط عضویت، آزمون‌ها و مقررات این نهادها ممکن است تغییر کند. برای برنامه‌ریزی شغلی، اطلاعات به‌روز را از تارنمای رسمی هر نهاد بگیرید.',
            en: 'Membership rules, exams and regulations can change. For career planning, check each body’s official website for current information.',
          },
        },
      ],
    },
    {
      id: 'standards',
      title: { fa: 'استانداردها و ویژگی‌های اطلاعات مفید', en: 'Standards and Useful Information' },
      blocks: [
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
              { fa: 'استانداردهای حسابداری ایران', en: 'Iranian Accounting Standards' },
              { fa: 'سازمان حسابرسی (مرجع قانونی تدوین استانداردها)', en: 'The Audit Organization of Iran (the legal standard-setter)' },
              { fa: 'گزارشگری مالی بیشتر واحدهای تجاری در ایران', en: 'Financial reporting by most entities in Iran' },
            ],
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
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: استانداردهای ایران و IFRS', en: 'In practice: Iranian standards and IFRS' },
          text: {
            fa: 'بیشتر واحدهای تجاری ایران صورت‌های مالی خود را بر پایه **استانداردهای حسابداری ایران** تهیه می‌کنند. این استانداردها عمدتاً با الگوگیری از استانداردهای بین‌المللی و با توجه به قوانین و شرایط داخلی تدوین شده‌اند. نهادهای ناظر، برخی واحدها مانند بانک‌ها و شماری از شرکت‌های پذیرفته‌شده در بورس را به تهیه صورت‌های مالی بر پایه **IFRS** نیز ملزم کرده‌اند. دامنه این الزام‌ها در طول زمان تغییر می‌کند؛ آخرین مقررات را بررسی کنید. مفاهیم پایه این دوره در هر دو چارچوب یکسان است.',
            en: 'Most Iranian entities prepare their financial statements under **Iranian Accounting Standards**, which were largely modelled on international standards and adapted to local law and conditions. Regulators have also required certain entities, such as banks and a number of listed companies, to prepare **IFRS** financial statements. The scope of these requirements changes over time, so check the latest regulations. The core ideas in this course are the same under both frameworks.',
          },
        },
        { type: 'h', text: { fa: 'اطلاعات مفید چه ویژگی‌هایی دارد؟', en: 'What makes information useful?' } },
        {
          type: 'p',
          text: {
            fa: 'چارچوب مفهومی IFRS دو ویژگی را **بنیادی** می‌داند: اطلاعات باید **مربوط** باشد و آنچه را رخ داده **به‌صورت صادقانه بیان کند**. چند ویژگی دیگر سودمندی اطلاعات را **افزایش** می‌دهند. مفاهیم نظری گزارشگری مالی در ایران نیز بر ایده‌های مشابهی مانند مربوط بودن و قابلیت اتکا تکیه دارد.',
            en: 'The IFRS Conceptual Framework names two **fundamental** qualities: information must be **relevant** and must **faithfully represent** what happened. Several other qualities **enhance** its usefulness. Iran’s conceptual framework for financial reporting rests on similar ideas, such as relevance and reliability.',
          },
        },
        {
          type: 'table',
          head: [
            { fa: 'ویژگی', en: 'Quality' },
            { fa: 'یعنی', en: 'Meaning' },
            { fa: 'مثال', en: 'Example' },
          ],
          rows: [
            [
              { fa: 'مربوط بودن', en: 'Relevance' },
              { fa: 'می‌تواند بر تصمیم استفاده‌کننده اثر بگذارد', en: 'Can make a difference to a user’s decision' },
              { fa: 'بانک برای تصمیم درباره وام، به بدهی‌های فعلی نوا نیاز دارد.', en: 'To decide on a loan, the bank needs Nova’s current debts.' },
            ],
            [
              { fa: 'بیان صادقانه', en: 'Faithful representation' },
              { fa: 'کامل، بی‌طرف و عاری از اشتباه بااهمیت', en: 'Complete, neutral and free from material error' },
              { fa: 'همه بدهی‌ها گزارش می‌شوند؛ حتی فاکتوری که هنوز پرداخت نشده است.', en: 'All debts are reported, including invoices not yet paid.' },
            ],
            [
              { fa: 'قابلیت مقایسه', en: 'Comparability' },
              { fa: 'امکان مقایسه با سال‌های قبل و با واحدهای دیگر', en: 'Can be compared across years and with other entities' },
              { fa: 'نوا هر سال از همان روش‌ها استفاده می‌کند.', en: 'Nova uses the same methods every year.' },
            ],
            [
              { fa: 'قابلیت تأیید', en: 'Verifiability' },
              { fa: 'افراد مستقل و آگاه به نتیجه مشابهی می‌رسند', en: 'Independent, informed people would reach a similar conclusion' },
              { fa: 'هر ثبت، فاکتور یا رسید بانکی پشتوانه دارد.', en: 'Every entry is backed by an invoice or a bank slip.' },
            ],
            [
              { fa: 'به‌موقع بودن', en: 'Timeliness' },
              { fa: 'پیش از آنکه برای تصمیم دیر شود در دسترس است', en: 'Available before it is too late to matter' },
              { fa: 'گزارش ماهانه چند روز پس از پایان ماه آماده است.', en: 'The monthly report is ready a few days after month end.' },
            ],
            [
              { fa: 'قابل فهم بودن', en: 'Understandability' },
              { fa: 'روشن و منظم ارائه می‌شود', en: 'Presented clearly and concisely' },
              { fa: 'اقلام مشابه با هم و زیر عنوان روشن نمایش داده می‌شوند.', en: 'Similar items are grouped under clear headings.' },
            ],
          ],
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
              { fa: 'خلاقیت سارا ارزشمند است، اما به‌عنوان دارایی ثبت نمی‌شود.', en: 'Sara’s creative talent is valuable but is not recorded as an asset.' },
            ],
            [
              { fa: 'دوره مالی', en: 'Periodicity (time period)' },
              {
                fa: 'عمر واحد تجاری به دوره‌هایی مانند ماه، فصل یا سال تقسیم می‌شود.',
                en: 'The life of the business is divided into periods: months, quarters or years.',
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
              { fa: 'احتیاط', en: 'Prudence (conservatism)' },
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
            [
              { fa: 'ثبات رویه', en: 'Consistency' },
              {
                fa: 'روش‌های حسابداری از دوره‌ای به دوره دیگر ثابت می‌مانند، مگر به دلیلی موجه تغییر کنند و تغییر افشا شود.',
                en: 'The same accounting methods are used from period to period unless there is a good reason to change, and any change is disclosed.',
              },
              {
                fa: 'اگر نوا روش خط مستقیم را برای استهلاک برگزیده، هر سال به دلخواه آن را عوض نمی‌کند.',
                en: 'Once Nova chooses straight-line depreciation, it does not switch methods each year at will.',
              },
            ],
            [
              { fa: 'افشای کامل', en: 'Full disclosure' },
              {
                fa: 'هر اطلاعاتی که برای فهم صورت‌های مالی لازم است، در متن صورت‌ها یا در یادداشت‌ها ارائه می‌شود.',
                en: 'Everything needed to understand the statements is shown on their face or in the notes.',
              },
              {
                fa: 'شرایط وام 15,000 نوا، مانند نرخ بهره سالانه 12٪، در یادداشت‌ها می‌آید.',
                en: 'The terms of Nova’s 15,000 loan, such as its 12% annual interest rate, appear in the notes.',
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
            en: 'Modern frameworks describe prudence as **caution when making judgements under uncertainty**, not as a licence to deliberately understate profit or build hidden reserves. The goal is neutral information that faithfully represents what happened.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'مبنای نقدی یا مبنای تعهدی؟', en: 'Cash basis or accrual basis?' },
          text: {
            fa: 'در **مبنای نقدی**، درآمد و هزینه فقط هنگام دریافت یا پرداخت وجه نقد ثبت می‌شوند. صورت‌های مالی تهیه‌شده بر پایه استانداردها از **مبنای تعهدی** پیروی می‌کنند که درآمد را هنگام کسب و هزینه را هنگام وقوع ثبت می‌کند. تفاوت این دو مبنا را در درس ثبت‌های اصلاحی با جزئیات بیشتر خواهید دید.',
            en: 'Under the **cash basis**, revenue and expenses are recorded only when cash changes hands. Financial statements prepared under accounting standards use the **accrual basis**, which records revenue when it is earned and expenses when they are incurred. The lesson on adjusting entries explores the difference in detail.',
          },
        },
      ],
    },
    {
      id: 'ethics',
      title: { fa: 'اخلاق حرفه‌ای و قضاوت حرفه‌ای', en: 'Ethics and Professional Judgement' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'بانک، سرمایه‌گذار و سازمان امور مالیاتی نمی‌توانند تک‌تک اسناد یک شرکت را خودشان بررسی کنند؛ آن‌ها به **درستکاری** حسابداری که این ارقام را تهیه کرده اعتماد می‌کنند. اگر این اعتماد از بین برود، گزارش‌های مالی ارزش خود را از دست می‌دهند. به همین دلیل، حرفه حسابداری آیین رفتار حرفه‌ای دارد.',
            en: 'Banks, investors and tax authorities cannot check every document a company holds; they rely on the **integrity** of the accountant who prepared the figures. If that trust is lost, financial reports lose their value. That is why the profession has a code of conduct.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'پنج اصل بنیادی اخلاق حرفه‌ای', en: 'The five fundamental ethical principles' },
          head: [
            { fa: 'اصل', en: 'Principle' },
            { fa: 'یعنی', en: 'Meaning' },
            { fa: 'در عمل', en: 'In practice' },
          ],
          rows: [
            [
              { fa: 'درستکاری', en: 'Integrity' },
              { fa: 'صداقت و رک‌گویی در همه روابط کاری', en: 'Being straightforward and honest in all professional relationships' },
              { fa: 'سندی را که می‌دانید نادرست است ثبت یا امضا نمی‌کنید.', en: 'You never record or sign a voucher you know is false.' },
            ],
            [
              { fa: 'بی‌طرفی', en: 'Objectivity' },
              {
                fa: 'اجازه ندادن به سوگیری، تعارض منافع یا فشار دیگران',
                en: 'Not letting bias, conflicts of interest or pressure from others override judgement',
              },
              { fa: 'حسابرس، شرکتی را که در آن سهم دارد حسابرسی نمی‌کند.', en: 'An auditor does not audit a company in which they own shares.' },
            ],
            [
              { fa: 'صلاحیت حرفه‌ای و مراقبت لازم', en: 'Professional competence and due care' },
              { fa: 'به‌روز نگه داشتن دانش و کار کردن با دقت', en: 'Keeping knowledge up to date and working carefully' },
              { fa: 'پیش از اجرای یک قانون مالیاتی جدید، آن را مطالعه می‌کنید.', en: 'You study a new tax rule before applying it.' },
            ],
            [
              { fa: 'رازداری', en: 'Confidentiality' },
              {
                fa: 'افشا نکردن اطلاعات محرمانه کارفرما یا مشتری بدون مجوز',
                en: 'Not disclosing an employer’s or client’s confidential information without permission',
              },
              { fa: 'درباره فروش یک مشتری با دوستانتان حرف نمی‌زنید.', en: 'You do not discuss a client’s sales with your friends.' },
            ],
            [
              { fa: 'رفتار حرفه‌ای', en: 'Professional behaviour' },
              {
                fa: 'رعایت قوانین و پرهیز از هر کاری که به اعتبار حرفه آسیب بزند',
                en: 'Complying with laws and avoiding conduct that discredits the profession',
              },
              {
                fa: 'برای جذب مشتری، وعده «کم کردن مالیات به هر قیمتی» نمی‌دهید.',
                en: 'You never promise clients to “cut their tax at any cost” to win their business.',
              },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: {
            fa: 'این پنج اصل بنیادی در آیین اخلاق بین‌المللی حسابداران (IESBA) آمده‌اند. نهادهای حرفه‌ای ایران نیز آیین رفتار حرفه‌ای خود را بر پایه اصولی مشابه تدوین کرده‌اند.',
            en: 'These five fundamental principles come from the international code of ethics for professional accountants (IESBA). Iranian professional bodies have issued codes of professional conduct built on similar principles.',
          },
        },
        { type: 'h', text: { fa: 'قضاوت حرفه‌ای', en: 'Professional judgement' } },
        {
          type: 'p',
          text: {
            fa: 'استانداردها نمی‌توانند برای هر موقعیتی پاسخ آماده داشته باشند. حسابدار بارها باید **قضاوت** کند: این تجهیزات چند سال قابل استفاده است؟ احتمال وصول طلب از این مشتری چقدر است؟ آیا این مبلغ آن‌قدر کوچک است که بتوان آن را یکجا به هزینه برد؟ **قضاوت حرفه‌ای** یعنی به‌کار بستن استانداردها بر واقعیت‌ها، با استدلال روشن و مستند؛ نه انتخاب پاسخی که خوشایند مدیر است.',
            en: 'Standards cannot offer a ready answer for every situation. An accountant often has to **judge**: how many years will this equipment last? How likely is this customer to pay? Is this amount small enough to expense at once? **Professional judgement** means applying the standards to the facts with clear, documented reasoning, not choosing whichever answer pleases the manager.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'واقعیت‌ها را روشن کنید', en: 'Get the facts' },
              text: { fa: 'دقیقاً چه رخ داده است و چه مدرکی وجود دارد؟', en: 'What exactly happened, and what evidence is there?' },
            },
            {
              title: { fa: 'اصول درگیر را بشناسید', en: 'Identify what is at stake' },
              text: {
                fa: 'کدام اصل اخلاقی یا کدام استاندارد در خطر است و چه کسانی ممکن است آسیب ببینند؟',
                en: 'Which ethical principle or standard is at risk, and who could be harmed?',
              },
            },
            {
              title: { fa: 'گزینه‌ها را بسنجید', en: 'Weigh the options' },
              text: {
                fa: 'پیامد هر راه را برای واحد تجاری، استفاده‌کنندگان و خودتان در نظر بگیرید.',
                en: 'Consider the consequences of each option for the business, its users and yourself.',
              },
            },
            {
              title: { fa: 'مشورت کنید', en: 'Consult' },
              text: {
                fa: 'با سرپرست، کمیته حسابرسی یا راهنمای نهاد حرفه‌ای مشورت کنید.',
                en: 'Talk to your supervisor or the audit committee, or check your professional body’s guidance.',
              },
            },
            {
              title: { fa: 'مستند کنید و عمل کنید', en: 'Document and act' },
              text: {
                fa: 'تصمیم و دلیل آن را مکتوب کنید و مطابق استانداردها عمل کنید.',
                en: 'Write down the decision and the reasons for it, then act in line with the standards.',
              },
            },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'یک موقعیت واقعی', en: 'A realistic situation' },
          text: {
            fa: 'روز آخر سال، مدیر از حسابدار می‌خواهد فاکتور 5,000 تعمیراتی را که امسال انجام شده «تا سال بعد در کشو نگه دارد» تا سود امسال بهتر دیده شود. پاسخ حرفه‌ای این است که هزینه در همین سال ثبت شود (مبنای تعهدی)، دلیل آن با احترام و به‌صورت مکتوب برای مدیر توضیح داده شود و اگر فشار ادامه یافت، موضوع به مرجع بالاتر، مانند هیئت‌مدیره یا حسابرس، گزارش شود.',
            en: 'On the last day of the year, the manager asks the accountant to “keep in the drawer until next year” a 5,000 invoice for repairs done this year, so that this year’s profit looks better. The professional response is to record the expense this year (accrual basis), explain the reason politely and in writing, and, if the pressure continues, raise the matter with a higher authority such as the board or the auditor.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'قضاوت، سلیقه نیست', en: 'Judgement is not preference' },
          text: {
            fa: 'دو حسابدار ممکن است درباره یک برآورد کمی متفاوت فکر کنند؛ این طبیعی است. اما اگر برآوردی را فقط برای رسیدن به سود دلخواه تغییر دهید، دیگر قضاوت نکرده‌اید؛ گزارش را دستکاری کرده‌اید.',
            en: 'Two accountants may reach slightly different estimates; that is normal. But if you change an estimate only to hit a desired profit, you are no longer exercising judgement; you are manipulating the report.',
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
              { fa: 'سهام‌داران، که ممکن است شمارشان بسیار زیاد باشد', en: 'Shareholders, possibly very many' },
            ],
            [
              { fa: 'مسئولیت در برابر بدهی‌ها', en: 'Liability for debts' },
              { fa: 'نامحدود؛ دارایی‌های شخصی مالک نیز در معرض خطر است', en: 'Unlimited: the owner’s personal assets are at risk' },
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
          title: { fa: 'در عمل: شکل‌های شرکت در ایران', en: 'In practice: company forms in Iran' },
          text: {
            fa: 'در ایران، قانون تجارت چند نوع شرکت را به رسمیت می‌شناسد؛ از جمله شرکت سهامی (عام و خاص)، شرکت با مسئولیت محدود و شرکت تضامنی. اصولی که در این دوره می‌آموزید، در همه آن‌ها به کار می‌رود؛ حساب‌های ویژه حقوق مالکانه شرکت‌ها را در درس حقوق مالکانه شرکت‌ها می‌بینید.',
            en: 'In Iran, the Commercial Code recognizes several company forms, including joint-stock companies (public and private), limited liability companies and general partnerships. The principles in this course apply to all of them; you will meet the special equity accounts of companies in the lesson on company equity.',
          },
        },
      ],
    },
    {
      id: 'practice',
      title: { fa: 'اشتباهات رایج و تمرین‌ها', en: 'Common Mistakes and Exercises' },
      blocks: [
        { type: 'h', text: { fa: 'اشتباهات رایج تازه‌کارها', en: 'Common beginner mistakes' } },
        {
          type: 'list',
          items: [
            {
              fa: '**یکی دانستن حسابداری و دفترداری.** دفترداری فقط بخش ثبت است؛ حسابداری تحلیل، قضاوت و گزارشگری را هم در بر می‌گیرد.',
              en: '**Treating accounting as bookkeeping.** Bookkeeping is only the recording part; accounting also covers analysis, judgement and reporting.',
            },
            {
              fa: '**مخلوط کردن پول شخصی و پول کسب‌وکار.** هزینه شخصی مالک، هزینه کسب‌وکار نیست؛ اگر از پول کسب‌وکار پرداخت شود، برداشت است.',
              en: '**Mixing personal and business money.** The owner’s personal spending is not a business expense; if it is paid from business money, it is drawings.',
            },
            {
              fa: '**ثبت رویدادهایی که هنوز رخ نداده‌اند.** قرارداد امضاشده یا سفارش مشتری، تا وقتی کاری انجام نشده یا پولی جابه‌جا نشده، رویداد حسابداری نیست.',
              en: '**Recording events that have not happened yet.** A signed contract or a customer order is not an accounting event until work is done or money moves.',
            },
            {
              fa: '**ثبت درآمد فقط هنگام دریافت پول.** بر مبنای تعهدی، درآمد هنگام ارائه کالا یا خدمت شناسایی می‌شود.',
              en: '**Recording revenue only when cash arrives.** Under the accrual basis, revenue is recognized when the goods or services are delivered.',
            },
            {
              fa: '**ثبت دارایی به ارزش حدسی بازار به‌جای بهای تمام‌شده.** اینکه کسی بگوید «این دستگاه حالا بیشتر می‌ارزد»، مبلغ ثبت‌شده را تغییر نمی‌دهد.',
              en: '**Recording assets at a guessed market value instead of cost.** Someone saying “this machine is worth more now” does not change the recorded amount.',
            },
            {
              fa: '**تسلیم شدن در برابر فشار برای «بهتر نشان دادن» ارقام.** حسابدار در برابر همه استفاده‌کنندگان مسئول است، نه فقط در برابر مدیر.',
              en: '**Giving in to pressure to make the numbers “look better”.** An accountant is answerable to every user, not just to the manager.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'رایج‌ترین اشتباه کسب‌وکارهای کوچک', en: 'The most common small-business mistake' },
          text: {
            fa: 'در عمل، رایج‌ترین مشکل کسب‌وکارهای کوچک، استفاده از یک کارت بانکی برای خرج خانه و کسب‌وکار است. از روز اول یک حساب بانکی جداگانه برای کسب‌وکار باز کنید؛ هم حسابداری ساده‌تر می‌شود و هم در رسیدگی مالیاتی، اثبات هزینه‌ها آسان‌تر است.',
            en: 'In practice, the most common problem in small businesses is using one bank card for both household and business spending. Open a separate business bank account from day one: the accounting becomes simpler, and expenses are easier to support in a tax audit.',
          },
        },
        { type: 'h', text: { fa: 'تمرین‌ها', en: 'Exercises' } },
        {
          type: 'exercise',
          title: { fa: 'رویداد حسابداری یا نه؟', en: 'Accounting event or not?' },
          difficulty: 'easy',
          problem: {
            fa: 'نیما کافه کوچکی به نام «کافه دارچین» دارد. کدام‌یک از رویدادهای زیر باید در دفاتر کافه ثبت شود؟ برای هر مورد، پاسخ خود را با دو آزمون رویداد حسابداری (تغییر در وضعیت مالی و قابلیت اندازه‌گیری با پول) توضیح دهید.',
            en: 'Nima owns a small café called Darchin Café. Which of the following events should be recorded in the café’s books? For each one, explain your answer using the two tests of an accounting event (a change in financial position, and measurability in money).',
          },
          given: {
            head: [
              { fa: 'ردیف', en: '#' },
              { fa: 'رویداد', en: 'Event' },
            ],
            rows: [
              [1, { fa: 'نیما 30,000 از پول شخصی‌اش را به حساب بانکی کافه واریز می‌کند.', en: 'Nima deposits 30,000 of his own money into the café’s bank account.' }],
              [
                2,
                {
                  fa: 'کافه با یک برشته‌کار قهوه قرارداد یک‌ساله می‌بندد؛ نخستین تحویل ماه بعد است.',
                  en: 'The café signs a one-year contract with a coffee roaster; the first delivery is next month.',
                },
              ],
              [3, { fa: 'کافه 1,200 نوشیدنی به‌صورت نقد می‌فروشد.', en: 'The café sells 1,200 of drinks for cash.' }],
              [4, { fa: 'یک باریستا استخدام می‌شود که از هفته بعد کار را شروع می‌کند.', en: 'A barista is hired and will start next week.' }],
              [5, { fa: 'قبض برق 900 از حساب بانکی کافه پرداخت می‌شود.', en: 'The 900 electricity bill is paid from the café’s bank account.' }],
              [6, { fa: 'نیما اجاره خانه‌اش را از حساب بانکی شخصی خود می‌پردازد.', en: 'Nima pays the rent on his home from his personal bank account.' }],
              [7, { fa: 'آسیاب قهوه کافه که 600 خریداری شده بود، به سرقت می‌رود.', en: 'The café’s coffee grinder, bought for 600, is stolen.' }],
              [8, { fa: 'یک وبلاگ‌نویس غذا به کافه پنج ستاره می‌دهد.', en: 'A food blogger gives the café a five-star review.' }],
            ],
          },
          hint: {
            fa: 'برای هر مورد بپرسید: آیا همین حالا دارایی، بدهی یا حقوق مالکانه کافه تغییر کرده است؟ اگر بله، آیا مبلغش را می‌دانیم؟',
            en: 'For each item ask: has an asset, liability or equity of the café changed right now? If so, do we know the amount?',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'ردیف', en: '#' },
                { fa: 'ثبت می‌شود؟', en: 'Recorded?' },
                { fa: 'دلیل', en: 'Reason' },
              ],
              rows: [
                [1, { fa: 'بله', en: 'Yes' }, { fa: 'موجودی نقد کافه و سرمایه نیما هر دو 30,000 افزایش می‌یابند.', en: 'The café’s cash and Nima’s capital both rise by 30,000.' }],
                [2, { fa: 'خیر', en: 'No' }, { fa: 'قرارداد هنوز اجرا نشده؛ نه کالایی رسیده و نه پولی پرداخت شده است.', en: 'The contract has not been performed yet: no goods received, no money paid.' }],
                [3, { fa: 'بله', en: 'Yes' }, { fa: 'موجودی نقد افزایش می‌یابد و 1,200 درآمد فروش ثبت می‌شود.', en: 'Cash rises and 1,200 of sales revenue is recorded.' }],
                [4, { fa: 'خیر', en: 'No' }, { fa: 'تا وقتی باریستا کار نکرده، حقوقی به او تعلق نگرفته است.', en: 'Until the barista works, no wages are owed.' }],
                [5, { fa: 'بله', en: 'Yes' }, { fa: 'موجودی نقد کاهش می‌یابد و 900 هزینه برق ثبت می‌شود.', en: 'Cash falls and a 900 electricity expense is recorded.' }],
                [6, { fa: 'خیر', en: 'No' }, { fa: 'بر پایه فرض واحد اقتصادی، هزینه شخصی نیما به کافه مربوط نیست.', en: 'Under the economic entity assumption, Nima’s personal bill has nothing to do with the café.' }],
                [7, { fa: 'بله', en: 'Yes' }, { fa: 'یک دارایی 600 از دست رفته است؛ رویدادی درون‌سازمانی که زیان آن ثبت می‌شود.', en: 'An asset of 600 has been lost: an internal event whose loss is recorded.' }],
                [8, { fa: 'خیر', en: 'No' }, { fa: 'ارزشمند است، اما وضعیت مالی را تغییر نمی‌دهد و با پول قابل اندازه‌گیری نیست.', en: 'Valuable, but it does not change the financial position and cannot be measured in money.' }],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'رویداد 6 را با حالتی مقایسه کنید که نیما اجاره خانه‌اش را از حساب بانکی **کافه** بپردازد: آن‌گاه ثبت لازم است، اما به‌عنوان **برداشت**، نه هزینه کافه.',
                en: 'Compare event 6 with the case where Nima pays his home rent from the **café’s** bank account: then an entry is needed, but as **drawings**, not as a café expense.',
              },
            },
          ],
          answer: {
            fa: 'رویدادهای 1، 3، 5 و 7 رویداد حسابداری‌اند؛ رویدادهای 2، 4، 6 و 8 ثبت نمی‌شوند.',
            en: 'Events 1, 3, 5 and 7 are accounting events; events 2, 4, 6 and 8 are not recorded.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'چه کسی به چه اطلاعاتی نیاز دارد؟', en: 'Which user needs which information?' },
          difficulty: 'easy',
          problem: {
            fa: 'شش استفاده‌کننده از اطلاعات مالی «کافه دارچین» و شش نوع اطلاعات (به ترتیب تصادفی) در جدول زیر آمده است. هر استفاده‌کننده را به اطلاعاتی که بیش از همه لازم دارد وصل کنید و بگویید درون‌سازمانی است یا برون‌سازمانی.',
            en: 'The table lists six users of Darchin Café’s financial information and six kinds of information (in random order). Match each user with the information they need most, and say whether the user is internal or external.',
          },
          given: {
            head: [
              { fa: 'استفاده‌کننده', en: 'User' },
              { fa: 'اطلاعات', en: 'Information' },
            ],
            rows: [
              [
                { fa: 'بانکی که درخواست وام کافه را بررسی می‌کند', en: 'A bank reviewing the café’s loan request' },
                { fa: 'الف) فروش روزانه هر نوشیدنی و کیک', en: 'A) Daily sales of each drink and cake' },
              ],
              [
                { fa: 'مدیر کافه که سفارش خرید هفته بعد را تنظیم می‌کند', en: 'The café manager planning next week’s purchases' },
                { fa: 'ب) درآمد مشمول مالیات سال', en: 'B) Taxable income for the year' },
              ],
              [
                { fa: 'سازمان امور مالیاتی', en: 'The tax authority' },
                { fa: 'ج) توان بازپرداخت بدهی و جریان نقدی آینده', en: 'C) Ability to repay debt and future cash flows' },
              ],
              [
                { fa: 'دوستی که می‌خواهد شریک کافه شود', en: 'A friend thinking of becoming a partner' },
                { fa: 'د) سابقه پرداخت به‌موقع به تأمین‌کنندگان', en: 'D) Record of paying suppliers on time' },
              ],
              [
                { fa: 'برشته‌کاری که می‌خواهد قهوه را نسیه بفروشد', en: 'A roaster considering selling coffee on credit' },
                { fa: 'ه) سودآوری و رشد فروش در چند سال', en: 'E) Profitability and sales growth over several years' },
              ],
              [
                { fa: 'کارکنان کافه', en: 'The café’s staff' },
                { fa: 'و) پایداری کسب‌وکار و توان پرداخت حقوق', en: 'F) Stability of the business and its ability to pay wages' },
              ],
            ],
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'استفاده‌کننده', en: 'User' },
                { fa: 'گروه', en: 'Group' },
                { fa: 'اطلاعات', en: 'Information' },
              ],
              rows: [
                [{ fa: 'بانک', en: 'Bank' }, { fa: 'برون‌سازمانی', en: 'External' }, { fa: 'ج) توان بازپرداخت و جریان نقدی', en: 'C) Ability to repay and cash flows' }],
                [{ fa: 'مدیر کافه', en: 'Café manager' }, { fa: 'درون‌سازمانی', en: 'Internal' }, { fa: 'الف) فروش روزانه هر محصول', en: 'A) Daily sales of each product' }],
                [{ fa: 'سازمان امور مالیاتی', en: 'Tax authority' }, { fa: 'برون‌سازمانی', en: 'External' }, { fa: 'ب) درآمد مشمول مالیات', en: 'B) Taxable income' }],
                [{ fa: 'شریک احتمالی', en: 'Prospective partner' }, { fa: 'برون‌سازمانی', en: 'External' }, { fa: 'ه) سودآوری و رشد', en: 'E) Profitability and growth' }],
                [{ fa: 'برشته‌کار', en: 'Roaster' }, { fa: 'برون‌سازمانی', en: 'External' }, { fa: 'د) سابقه پرداخت به تأمین‌کنندگان', en: 'D) Record of paying suppliers' }],
                [{ fa: 'کارکنان', en: 'Staff' }, { fa: 'برون‌سازمانی', en: 'External' }, { fa: 'و) پایداری و توان پرداخت حقوق', en: 'F) Stability and ability to pay wages' }],
              ],
            },
            {
              type: 'callout',
              tone: 'info',
              text: {
                fa: 'مدیر تنها استفاده‌کننده درون‌سازمانی این فهرست است و می‌تواند هر گزارش تفصیلی‌ای را که لازم دارد سفارش دهد. بقیه به صورت‌های مالی با مقاصد عمومی یا اطلاعاتی تکیه می‌کنند که کافه در اختیارشان می‌گذارد.',
                en: 'The manager is the only internal user here and can order any detailed report they need. Everyone else relies on general-purpose financial statements or on whatever information the café chooses to share.',
              },
            },
          ],
          answer: {
            fa: 'بانک: ج؛ مدیر: الف؛ سازمان امور مالیاتی: ب؛ شریک احتمالی: ه؛ برشته‌کار: د؛ کارکنان: و. فقط مدیر درون‌سازمانی است.',
            en: 'Bank: C; manager: A; tax authority: B; prospective partner: E; roaster: D; staff: F. Only the manager is internal.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'کدام فرض یا اصل؟', en: 'Which assumption or principle?' },
          difficulty: 'medium',
          problem: {
            fa: 'برای هر موقعیت زیر، فرض یا اصل حسابداری‌ای را که بیش از همه به آن مربوط است نام ببرید و در یک جمله توضیح دهید.',
            en: 'For each situation below, name the accounting assumption or principle that applies most directly and explain it in one sentence.',
          },
          given: {
            head: [
              { fa: 'ردیف', en: '#' },
              { fa: 'موقعیت', en: 'Situation' },
            ],
            rows: [
              [
                1,
                {
                  fa: 'صاحب یک سوپرمارکت می‌خواهد خرید خوراک خانواده‌اش را هزینه فروشگاه ثبت کند و حسابدار نمی‌پذیرد.',
                  en: 'A supermarket owner wants to record his family’s groceries as a store expense, and the accountant refuses.',
                },
              ],
              [
                2,
                {
                  fa: 'زمینی که سه سال پیش 80,000 خریداری شده، امروز 130,000 قیمت‌گذاری می‌شود، اما در دفاتر همچنان 80,000 است.',
                  en: 'Land bought three years ago for 80,000 is now valued at 130,000, but the books still show 80,000.',
                },
              ],
              [
                3,
                {
                  fa: 'یک چاپخانه کاری را در آخرین ماه سال تحویل می‌دهد و پولش را ماه اول سال بعد می‌گیرد؛ درآمد در سال تحویل ثبت می‌شود.',
                  en: 'A print shop delivers a job in the last month of the year and is paid in the first month of the next; the revenue is recorded in the year of delivery.',
                },
              ],
              [
                4,
                {
                  fa: 'یک بسته گیره کاغذ به مبلغ 8 به‌جای ثبت به‌عنوان دارایی، یکجا به هزینه برده می‌شود.',
                  en: 'A box of paper clips costing 8 is expensed at once instead of being recorded as an asset.',
                },
              ],
              [5, { fa: 'شرکت علاوه بر صورت‌های مالی سالانه، گزارش ماهانه هم تهیه می‌کند.', en: 'The company prepares monthly reports as well as annual financial statements.' }],
              [
                6,
                {
                  fa: 'مشتری بزرگی ورشکسته شده و شرکت دیگر کل طلب از او را دریافتنی گزارش نمی‌کند.',
                  en: 'A major customer has gone bankrupt, and the company no longer reports the full amount owed as a receivable.',
                },
              ],
              [
                7,
                {
                  fa: 'ماشین‌آلات به بهای تمام‌شده منهای استهلاک گزارش می‌شوند، نه به قیمتی که در یک حراج فوری به دست می‌آید.',
                  en: 'Machinery is reported at cost less depreciation, not at what it would fetch in a quick auction.',
                },
              ],
              [
                8,
                {
                  fa: 'شرکت هر سال از همان روش محاسبه بهای موجودی کالا استفاده می‌کند تا ارقام سال‌ها مقایسه‌پذیر باشد.',
                  en: 'The company uses the same inventory costing method every year so that the years can be compared.',
                },
              ],
            ],
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'ردیف', en: '#' },
                { fa: 'فرض یا اصل', en: 'Assumption or principle' },
                { fa: 'چرا؟', en: 'Why?' },
              ],
              rows: [
                [1, { fa: 'واحد اقتصادی', en: 'Economic entity' }, { fa: 'هزینه‌های شخصی مالک از کسب‌وکار جداست.', en: 'The owner’s personal spending is separate from the business.' }],
                [
                  2,
                  { fa: 'بهای تاریخی', en: 'Historical cost' },
                  {
                    fa: 'دارایی به مبلغ پرداخت‌شده ثبت می‌شود و در مدل بهای تمام‌شده با تغییر قیمت بازار عوض نمی‌شود.',
                    en: 'The asset is recorded at what was paid and, under the cost model, is not changed for market prices.',
                  },
                ],
                [
                  3,
                  { fa: 'شناخت درآمد (مبنای تعهدی)', en: 'Revenue recognition (accrual basis)' },
                  { fa: 'درآمد هنگام تحویل کار کسب شده است، نه هنگام دریافت پول.', en: 'Revenue is earned when the work is delivered, not when the cash arrives.' },
                ],
                [
                  4,
                  { fa: 'اهمیت نسبی', en: 'Materiality' },
                  { fa: 'مبلغ آن‌قدر کوچک است که روش ساده‌تر بر تصمیم کسی اثر نمی‌گذارد.', en: 'The amount is too small for the simpler treatment to affect anyone’s decision.' },
                ],
                [5, { fa: 'دوره مالی', en: 'Periodicity' }, { fa: 'عمر شرکت به دوره‌های ماهانه و سالانه تقسیم می‌شود.', en: 'The company’s life is divided into monthly and yearly periods.' }],
                [6, { fa: 'احتیاط', en: 'Prudence' }, { fa: 'در شرایط ابهام، دارایی بیش از واقع نشان داده نمی‌شود.', en: 'Under uncertainty, assets are not overstated.' }],
                [
                  7,
                  { fa: 'تداوم فعالیت', en: 'Going concern' },
                  { fa: 'فرض بر ادامه فعالیت است، پس ارزش فروش فوری مبنای گزارش نیست.', en: 'The business is assumed to continue, so forced-sale value is not the basis.' },
                ],
                [8, { fa: 'ثبات رویه', en: 'Consistency' }, { fa: 'استفاده از روش یکسان، مقایسه سال‌ها را ممکن می‌کند.', en: 'Using the same method makes the years comparable.' }],
              ],
            },
          ],
          answer: {
            fa: '1 واحد اقتصادی؛ 2 بهای تاریخی؛ 3 شناخت درآمد؛ 4 اهمیت نسبی؛ 5 دوره مالی؛ 6 احتیاط؛ 7 تداوم فعالیت؛ 8 ثبات رویه.',
            en: '1 economic entity; 2 historical cost; 3 revenue recognition; 4 materiality; 5 periodicity; 6 prudence; 7 going concern; 8 consistency.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'جدا کردن خرج شخصی از هزینه کسب‌وکار', en: 'Separating personal and business spending' },
          difficulty: 'medium',
          problem: {
            fa: 'لیلا فروشگاه اینترنتی کوچکی به نام «پوشاک لیلا» دارد. فروش این ماه، که همه تحویل و دریافت شده، 15,000 بوده است. لیلا همه پرداخت‌های جدول زیر را از حساب بانکی فروشگاه انجام داده است. (الف) هزینه‌های فروشگاه، (ب) برداشت لیلا و (پ) سود ماه را حساب کنید. (ت) اگر لیلا همه پرداخت‌ها را هزینه فروشگاه ثبت می‌کرد، چه سودی نشان داده می‌شد؟',
            en: 'Leila runs a small online clothing shop called Leila Wear. This month’s sales, all delivered and paid for, were 15,000. Leila made every payment in the table from the shop’s bank account. Compute (a) the shop’s expenses, (b) Leila’s drawings and (c) the profit for the month. (d) What profit would be reported if Leila treated every payment as a shop expense?',
          },
          given: {
            head: [
              { fa: 'پرداخت', en: 'Payment' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            numericCols: [1],
            rows: [
              [{ fa: 'اجاره انبار فروشگاه', en: 'Rent for the shop’s storage room' }, 4000],
              [{ fa: 'قبض تلفن همراه شخصی لیلا', en: 'Leila’s personal mobile phone bill' }, 300],
              [{ fa: 'مواد بسته‌بندی سفارش‌های این ماه', en: 'Packaging for this month’s orders' }, 1100],
              [{ fa: 'هزینه ارسال سفارش‌ها برای مشتریان', en: 'Shipping customer orders' }, 1600],
              [{ fa: 'شام خانوادگی در رستوران', en: 'A family dinner at a restaurant' }, 700],
              [{ fa: 'میزبانی وب‌سایت فروشگاه برای همین ماه', en: 'Website hosting for this month' }, 500],
            ],
          },
          hint: {
            fa: 'برای هر پرداخت بپرسید: آیا به کسب درآمد فروشگاه کمک کرده است؟ اگر نه و از پول فروشگاه پرداخت شده، برداشت است.',
            en: 'For each payment ask: did it help the shop earn revenue? If not, and it came out of the shop’s money, it is drawings.',
          },
          solution: [
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'پرداخت‌ها را جدا کنید', en: 'Sort the payments' },
                  text: {
                    fa: 'اجاره انبار، بسته‌بندی، ارسال و میزبانی وب‌سایت به فروش کمک کرده‌اند، پس هزینه فروشگاه‌اند. تلفن شخصی و شام خانوادگی به کسب‌وکار ربطی ندارند، پس برداشت‌اند.',
                    en: 'Storage rent, packaging, shipping and hosting helped generate sales, so they are shop expenses. The personal phone bill and the family dinner have nothing to do with the business, so they are drawings.',
                  },
                },
                {
                  title: { fa: 'هزینه‌ها را جمع بزنید', en: 'Add up the expenses' },
                  text: { fa: '4,000 + 1,100 + 1,600 + 500 = 7,200', en: '4,000 + 1,100 + 1,600 + 500 = 7,200' },
                },
                {
                  title: { fa: 'برداشت را جمع بزنید', en: 'Add up the drawings' },
                  text: { fa: '300 + 700 = 1,000', en: '300 + 700 = 1,000' },
                },
                {
                  title: { fa: 'سود را حساب کنید', en: 'Compute the profit' },
                  text: { fa: '15,000 − 7,200 = 7,800', en: '15,000 − 7,200 = 7,800' },
                },
                {
                  title: { fa: 'اثر اشتباه را ببینید', en: 'See the effect of the mistake' },
                  text: {
                    fa: 'جمع همه پرداخت‌ها 8,200 است. اگر همه آن‌ها هزینه ثبت شوند، سود 15,000 − 8,200 = 6,800 می‌شود؛ یعنی 1,000 کمتر از واقع. صورت سود و زیان دیگر عملکرد واقعی فروشگاه را نشان نمی‌دهد.',
                    en: 'All the payments add up to 8,200. If they were all expensed, profit would be 15,000 − 8,200 = 6,800, which is 1,000 too low. The income statement would no longer show how the shop really performed.',
                  },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'خلاصه درست ماه', en: 'The correct summary for the month' },
              head: [
                { fa: 'قلم', en: 'Item' },
                { fa: 'مبلغ', en: 'Amount' },
              ],
              numericCols: [1],
              rows: [
                [{ fa: 'فروش', en: 'Sales' }, 15000],
                [{ fa: 'کسر می‌شود: هزینه‌های فروشگاه', en: 'Less: shop expenses' }, 7200],
                [{ fa: '**سود ماه**', en: '**Profit for the month**' }, 7800],
                [{ fa: 'برداشت لیلا (هزینه نیست)', en: 'Leila’s drawings (not an expense)' }, 1000],
              ],
            },
          ],
          answer: {
            fa: 'هزینه‌ها 7,200؛ برداشت 1,000؛ سود 7,800 (با اشتباه، 6,800 نشان داده می‌شد).',
            en: 'Expenses 7,200; drawings 1,000; profit 7,800 (the mistake would show 6,800).',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'فشار برای سود بیشتر', en: 'Pressure to report a higher profit' },
          difficulty: 'hard',
          problem: {
            fa: 'شما حسابدار «شرکت پخش آرمان» هستید. روز آخر سال، ارقام ثبت‌شده چنین است: درآمد 40,000 و هزینه‌ها 28,000. دو موضوع پیش می‌آید: (1) فاکتور 5,000 بابت خدمات حمل‌ونقلی که امسال دریافت شده، هنوز ثبت نشده است. (2) مدیر می‌خواهد سفارش 3,000 یک مشتری را، که کالایش سال بعد تحویل می‌شود و هنوز پولی هم بابت آن پرداخت نشده، درآمد امسال ثبت کنید و فاکتور حمل را «تا سال بعد نگه دارید». (الف) سود را یک بار به روش مدیر و یک بار به روش درست حساب کنید. (ب) کدام اصول حسابداری و اخلاقی درگیرند؟ (پ) چه می‌کنید؟',
            en: 'You are the accountant at Arman Distribution. On the last day of the year, the recorded figures are revenue of 40,000 and expenses of 28,000. Two issues come up: (1) a 5,000 invoice for transport services received this year has not been recorded; (2) the manager wants you to record as this year’s revenue a 3,000 customer order whose goods will be delivered next year and which has not been paid, and to “hold the transport invoice until next year”. (a) Compute the profit the manager’s way and the correct way. (b) Which accounting and ethical principles are involved? (c) What do you do?',
          },
          hint: {
            fa: 'برای هر قلم بپرسید: آیا کالا یا خدمت امسال تحویل داده یا دریافت شده است؟',
            en: 'For each item ask: were the goods or services delivered or received this year?',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'قلم', en: 'Item' },
                { fa: 'روش مدیر', en: 'Manager’s version' },
                { fa: 'روش درست', en: 'Correct version' },
              ],
              numericCols: [1, 2],
              rows: [
                [{ fa: 'درآمد', en: 'Revenue' }, 43000, 40000],
                [{ fa: 'هزینه‌ها', en: 'Expenses' }, 28000, 33000],
                [{ fa: '**سود**', en: '**Profit**' }, 15000, 7000],
              ],
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'سفارش 3,000', en: 'The 3,000 order' },
                  text: {
                    fa: 'کالا هنوز تحویل نشده، پس درآمدی کسب نشده است (اصل شناخت درآمد). ثبت آن، درآمد را 3,000 بیش از واقع نشان می‌دهد.',
                    en: 'The goods have not been delivered, so no revenue has been earned (revenue recognition). Recording it would overstate revenue by 3,000.',
                  },
                },
                {
                  title: { fa: 'فاکتور 5,000', en: 'The 5,000 invoice' },
                  text: {
                    fa: 'خدمت امسال دریافت شده، پس هزینه امسال است (مبنای تعهدی و تطابق). نگه داشتن فاکتور، هزینه‌ها را 5,000 کمتر از واقع نشان می‌دهد.',
                    en: 'The service was received this year, so it is this year’s expense (accrual basis and matching). Holding the invoice would understate expenses by 5,000.',
                  },
                },
                {
                  title: { fa: 'اثر کل', en: 'Total effect' },
                  text: {
                    fa: 'سود به روش مدیر 15,000 و سود درست 7,000 است؛ یعنی 8,000 بیش از واقع، که بیش از دو برابر سود واقعی است.',
                    en: 'The manager’s profit is 15,000 and the correct profit is 7,000: an overstatement of 8,000, more than double the real profit.',
                  },
                },
                {
                  title: { fa: 'اصول اخلاقی', en: 'Ethical principles' },
                  text: {
                    fa: 'درستکاری و بی‌طرفی در خطر است و گزارش دیگر بیان صادقانه نخواهد داشت.',
                    en: 'Integrity and objectivity are at risk, and the report would no longer be a faithful representation.',
                  },
                },
                {
                  title: { fa: 'اقدام حرفه‌ای', en: 'Professional action' },
                  text: {
                    fa: 'هزینه 5,000 را ثبت کنید و سفارش را درآمد نشناسید. دلیل را مکتوب و محترمانه برای مدیر توضیح دهید و اگر فشار ادامه یافت، موضوع را به هیئت‌مدیره یا حسابرس گزارش کنید.',
                    en: 'Record the 5,000 expense and do not recognize the order as revenue. Explain the reasons to the manager politely and in writing, and if the pressure continues, report the matter to the board or the auditor.',
                  },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              text: {
                fa: 'سود ساختگی امسال به ضرر سال بعد تمام می‌شود: فاکتور 5,000 سال بعد ثبت می‌شود و سود آن سال را بی‌دلیل کاهش می‌دهد. دستکاری فقط زمان مشکل را جابه‌جا می‌کند و اعتماد استفاده‌کنندگان را از بین می‌برد.',
                en: 'This year’s inflated profit is paid for next year: the 5,000 invoice lands in next year’s books and cuts that year’s profit for no good reason. Manipulation only moves the problem in time, and it destroys users’ trust.',
              },
            },
          ],
          answer: {
            fa: 'سود درست 7,000 است؛ روش مدیر سود را 15,000، یعنی 8,000 بیش از واقع، نشان می‌دهد.',
            en: 'The correct profit is 7,000; the manager’s version shows 15,000, overstated by 8,000.',
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
              fa: 'رویداد حسابداری وضعیت مالی را تغییر می‌دهد و با پول قابل اندازه‌گیری است؛ قرارداد یا استخدام، تا اجرا نشده، ثبت نمی‌شود.',
              en: 'An accounting event changes the financial position and can be measured in money; a contract or a hiring is not recorded until it is performed.',
            },
            {
              fa: 'استفاده‌کنندگان درون‌سازمانی کسب‌وکار را اداره می‌کنند و استفاده‌کنندگان برون‌سازمانی بیشتر به صورت‌های مالی با مقاصد عمومی تکیه دارند.',
              en: 'Internal users run the business; external users rely mainly on general-purpose financial statements.',
            },
            {
              fa: 'کار روزانه حسابدار در ایران بر محور سند حسابداری، نرم‌افزار و کدینگ سه‌سطحی است؛ مسیرهای شغلی از حسابدار تا حسابرس، حسابدار رسمی و مشاور مالیاتی را در بر می‌گیرد.',
              en: 'An accountant’s daily work in Iran revolves around vouchers, software and three-level coding; careers range from accountant to auditor, certified public accountant and tax adviser.',
            },
            {
              fa: 'استانداردهای حسابداری ایران (تدوین‌شده توسط سازمان حسابرسی) و IFRS گزارش‌ها را مقایسه‌پذیر و قابل‌اعتماد می‌کنند.',
              en: 'Iranian Accounting Standards (issued by the Audit Organization) and IFRS make reports comparable and trustworthy.',
            },
            {
              fa: 'مفروضاتی مانند واحد اقتصادی و تداوم فعالیت و اصولی مانند بهای تاریخی، مبنای تعهدی و احتیاط، شکل صورت‌های مالی را تعیین می‌کنند.',
              en: 'Assumptions such as economic entity and going concern, and principles such as historical cost, the accrual basis and prudence, shape every financial statement.',
            },
            {
              fa: 'درستکاری، بی‌طرفی، صلاحیت، رازداری و رفتار حرفه‌ای پایه اعتماد به حسابدار است؛ قضاوت حرفه‌ای باید مستند باشد، نه دلبخواه.',
              en: 'Integrity, objectivity, competence, confidentiality and professional behaviour are the basis of trust in accountants; professional judgement must be documented, never arbitrary.',
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
              term: { fa: 'رویداد حسابداری (معامله)', en: 'Accounting event (transaction)' },
              def: {
                fa: 'رویدادی که وضعیت مالی واحد تجاری را تغییر می‌دهد و مبلغ آن به‌طور قابل‌اتکا با پول قابل اندازه‌گیری است.',
                en: 'An event that changes the financial position of the business and whose amount can be measured reliably in money.',
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
              term: { fa: 'سند حسابداری', en: 'Accounting voucher' },
              def: {
                fa: 'برگه‌ای شماره‌دار و تاریخ‌دار که یک رویداد را با شرح، کد حساب‌ها، مبالغ بدهکار و بستانکار، پیوست‌ها و امضاها ثبت می‌کند.',
                en: 'A numbered, dated record of one event, with a description, account codes, debit and credit amounts, attachments and signatures.',
              },
            },
            {
              term: { fa: 'حسابدار رسمی', en: 'Certified public accountant (Iran)' },
              def: {
                fa: 'عضو جامعه حسابداران رسمی ایران که مجاز است گزارش‌های حسابرسی و بازرسی قانونی را امضا کند.',
                en: 'A member of the Iranian Association of Certified Public Accountants, authorized to sign statutory audit and inspector reports.',
              },
            },
            {
              term: { fa: 'استانداردهای حسابداری ایران', en: 'Iranian Accounting Standards' },
              def: {
                fa: 'استانداردهایی که سازمان حسابرسی به‌عنوان مرجع قانونی، برای گزارشگری مالی در ایران تدوین می‌کند.',
                en: 'The standards issued by the Audit Organization, the legal standard-setter, for financial reporting in Iran.',
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
            {
              term: { fa: 'قضاوت حرفه‌ای', en: 'Professional judgement' },
              def: {
                fa: 'به‌کار بستن استانداردها بر واقعیت‌های یک موقعیت، با استدلال روشن و مستند.',
                en: 'Applying the standards to the facts of a situation with clear, documented reasoning.',
              },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: { fa: 'کدام سه فعالیت، حسابداری را تعریف می‌کنند؟', en: 'Which three activities define accounting?' },
      options: [
        { fa: 'خرید، فروش و سودآوری', en: 'Buying, selling and making a profit' },
        { fa: 'بودجه‌بندی، پیش‌بینی و سرمایه‌گذاری', en: 'Budgeting, forecasting and investing' },
        { fa: 'شناسایی، ثبت و گزارش', en: 'Identifying, recording and communicating' },
        { fa: 'حسابرسی، محاسبه مالیات و بایگانی', en: 'Auditing, computing tax and filing' },
      ],
      answer: 2,
      explain: {
        fa: 'حسابداری رویدادهای اقتصادی را شناسایی می‌کند، آن‌ها را ثبت می‌کند و نتیجه را به استفاده‌کنندگان گزارش می‌دهد. گزینه‌های دیگر فعالیت‌های تجاری یا کاربردهای خاصی از حسابداری‌اند، نه تعریف آن. حسابرسی و مالیات شاخه‌هایی از حسابداری‌اند، اما کل آن نیستند.',
        en: 'Accounting identifies economic events, records them and communicates the results to users. The other options describe business activities or particular uses of accounting, not its definition. Auditing and tax are branches of accounting, not the whole of it.',
      },
    },
    {
      q: { fa: 'کدام‌یک رویداد حسابداری است و باید ثبت شود؟', en: 'Which of these is an accounting event that must be recorded?' },
      options: [
        { fa: 'امضای قرارداد طراحی برای ماه آینده', en: 'Signing a design contract for next month' },
        { fa: 'استخدام کارمندی که هفته بعد شروع به کار می‌کند', en: 'Hiring an employee who starts next week' },
        { fa: 'تعریف یک مشتری از کیفیت کار در شبکه‌های اجتماعی', en: 'A client praising the work on social media' },
        { fa: 'خرید نسیه ملزومات به مبلغ 3,000', en: 'Buying 3,000 of supplies on account' },
      ],
      answer: 3,
      explain: {
        fa: 'خرید نسیه همین حالا ملزومات (دارایی) و حساب‌های پرداختنی (بدهی) را افزایش می‌دهد و مبلغش معلوم است؛ نبودن پرداخت نقدی آن را از رویداد حسابداری بودن خارج نمی‌کند. قرارداد و استخدام هنوز وضعیت مالی را تغییر نداده‌اند و تعریف مشتری با پول قابل اندازه‌گیری نیست.',
        en: 'Buying on account increases Supplies (an asset) and Accounts payable (a liability) right now, and the amount is known; the lack of a cash payment does not stop it being an accounting event. The contract and the hiring have not yet changed the financial position, and praise cannot be measured in money.',
      },
    },
    {
      q: { fa: 'کدام‌یک استفاده‌کننده برون‌سازمانی اطلاعات حسابداری است؟', en: 'Which of these is an external user of accounting information?' },
      options: [
        { fa: 'بانکی که درخواست وام را بررسی می‌کند', en: 'A bank reviewing a loan application' },
        { fa: 'مدیر بازاریابی شرکت', en: 'The company’s marketing manager' },
        { fa: 'مالکی که خودش کسب‌وکار را اداره می‌کند', en: 'An owner who manages the business' },
        { fa: 'سرپرست واحد تولید', en: 'The production supervisor' },
      ],
      answer: 0,
      explain: {
        fa: 'بانک بیرون از کسب‌وکار قرار دارد و به سوابق داخلی آن دسترسی مستقیم ندارد؛ بنابراین استفاده‌کننده برون‌سازمانی است. مالکی که خودش کسب‌وکار را اداره می‌کند شاید «بیرونی» به نظر برسد، اما او هم مانند مدیر بازاریابی و سرپرست تولید، کسب‌وکار را از درون اداره می‌کند.',
        en: 'The bank sits outside the business and has no direct access to its internal records, so it is an external user. An owner-manager may sound like an outsider, but like the marketing manager and the production supervisor, they run the business from the inside.',
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
        fa: 'چون فرض می‌شود نوا به فعالیت خود ادامه می‌دهد، تجهیزات برای استفاده در عملیات نگهداری می‌شود، نه برای فروش فوری؛ پس ارزش فروش اضطراری مبنای گزارش نیست. واحد پولی فقط می‌گوید اقلام با پول اندازه‌گیری می‌شوند و درباره انتخاب میان بهای تمام‌شده و ارزش فروش فوری حرفی ندارد.',
        en: 'Because Nova is assumed to keep operating, the equipment is held for use, not for immediate sale, so forced-sale values are not the basis of measurement. The monetary unit assumption only says items are measured in money; it says nothing about cost versus liquidation value.',
      },
    },
    {
      q: {
        fa: 'شرکتی در یک ماه 9,000 خدمت ارائه کرده که 6,000 آن را نقد گرفته و بقیه ماه بعد وصول می‌شود. در همین ماه 2,000 هم بابت کار ماه قبل وصول کرده است. درآمد این ماه بر مبنای تعهدی چقدر است؟',
        en: 'In one month a firm performs 9,000 of services, collecting 6,000 in cash and the rest next month. It also collects 2,000 for last month’s work. What is this month’s revenue under the accrual basis?',
      },
      options: [
        { fa: '6,000', en: '6,000' },
        { fa: '8,000', en: '8,000' },
        { fa: '9,000', en: '9,000' },
        { fa: '11,000', en: '11,000' },
      ],
      answer: 2,
      explain: {
        fa: 'بر مبنای تعهدی، درآمد همان خدماتی است که در این ماه ارائه شده: 9,000. عدد 8,000 (6,000 + 2,000) درآمد بر مبنای نقدی است. عدد 11,000 کار ماه قبل را دوباره درآمد حساب می‌کند، در حالی که آن 2,000 ماه قبل شناسایی شده بود.',
        en: 'Under the accrual basis, revenue is the services performed this month: 9,000. The 8,000 figure (6,000 + 2,000) is cash-basis revenue. The 11,000 figure counts last month’s work again, although that 2,000 was recognized last month.',
      },
    },
    {
      q: {
        fa: 'شرکتی سه سال پیش زمینی را 80,000 خریده است. کارشناس امروز ارزش آن را 130,000 برآورد می‌کند. در مدل بهای تمام‌شده، زمین در دفاتر با چه مبلغی نشان داده می‌شود؟',
        en: 'A company bought land three years ago for 80,000. An appraiser now values it at 130,000. Under the cost model, at what amount is the land shown in the books?',
      },
      options: [
        { fa: '130,000', en: '130,000' },
        { fa: '80,000', en: '80,000' },
        { fa: '105,000', en: '105,000' },
        { fa: '50,000', en: '50,000' },
      ],
      answer: 1,
      explain: {
        fa: 'بر پایه بهای تاریخی، زمین به مبلغ پرداخت‌شده، یعنی 80,000، باقی می‌ماند. 130,000 برآورد بازار است، نه معامله‌ای واقعی؛ 105,000 میانگین دو عدد و 50,000 فقط افزایش ارزش است. برخی استانداردها برای بعضی دارایی‌ها مدل تجدید ارزیابی را هم مجاز می‌دانند، اما در این پرسش مدل بهای تمام‌شده فرض شده است.',
        en: 'Under historical cost the land stays at the 80,000 paid. The 130,000 is a market estimate, not an actual transaction; 105,000 is the average of the two and 50,000 is only the increase. Some standards also allow a revaluation model for certain assets, but this question assumes the cost model.',
      },
    },
    {
      q: {
        fa: 'مالک یک فروشگاه از حساب بانکی فروشگاه 6,000 بابت هزینه‌های فروشگاه و 1,500 بابت خریدهای شخصی‌اش پرداخت کرده است. هزینه‌ای که در صورت سود و زیان فروشگاه می‌آید چقدر است؟',
        en: 'A shop owner paid 6,000 of shop expenses and 1,500 of personal purchases from the shop’s bank account. What expense appears on the shop’s income statement?',
      },
      options: [
        { fa: '6,000', en: '6,000' },
        { fa: '7,500', en: '7,500' },
        { fa: '4,500', en: '4,500' },
        { fa: '1,500', en: '1,500' },
      ],
      answer: 0,
      explain: {
        fa: 'فقط 6,000 به کسب درآمد فروشگاه کمک کرده است. 1,500 خرید شخصی، بر پایه فرض واحد اقتصادی، هزینه فروشگاه نیست و به‌عنوان برداشت ثبت می‌شود. گزینه 7,500 این دو را مخلوط کرده و 4,500 یکی را بی‌دلیل از دیگری کم کرده است.',
        en: 'Only the 6,000 helped the shop earn revenue. The 1,500 of personal purchases is not a shop expense under the economic entity assumption; it is recorded as drawings. The 7,500 option mixes the two, and 4,500 subtracts one from the other for no reason.',
      },
    },
    {
      q: {
        fa: 'درآمد سال یک شرکت 60,000 و هزینه‌های ثبت‌شده 45,000 است. فاکتور 4,000 بابت خدماتی که امسال دریافت شده، هنوز ثبت نشده است. سود درست سال چقدر است؟',
        en: 'A company’s revenue for the year is 60,000 and its recorded expenses are 45,000. A 4,000 invoice for services received this year has not been recorded. What is the correct profit?',
      },
      options: [
        { fa: '15,000', en: '15,000' },
        { fa: '19,000', en: '19,000' },
        { fa: '4,000', en: '4,000' },
        { fa: '11,000', en: '11,000' },
      ],
      answer: 3,
      explain: {
        fa: 'خدمت امسال دریافت شده، پس هزینه امسال است: 60,000 منهای (45,000 + 4,000) برابر 11,000. گزینه 15,000 فاکتور را نادیده گرفته و گزینه 19,000 آن را به‌اشتباه به سود افزوده است.',
        en: 'The service was received this year, so it is this year’s expense: 60,000 − (45,000 + 4,000) = 11,000. The 15,000 option ignores the invoice, and 19,000 wrongly adds it to profit.',
      },
    },
    {
      q: {
        fa: 'حسابداری در یک مهمانی، ارقام فروش یکی از مشتریان مؤسسه‌اش را برای دوستانش تعریف می‌کند. کدام اصل اخلاق حرفه‌ای را زیر پا گذاشته است؟',
        en: 'At a party, an accountant tells friends the sales figures of one of the firm’s clients. Which fundamental ethical principle has been breached?',
      },
      options: [
        { fa: 'صلاحیت حرفه‌ای', en: 'Professional competence' },
        { fa: 'رازداری', en: 'Confidentiality' },
        { fa: 'بی‌طرفی', en: 'Objectivity' },
        { fa: 'ثبات رویه', en: 'Consistency' },
      ],
      answer: 1,
      explain: {
        fa: 'اطلاعات مشتری محرمانه است و بدون مجوز نباید افشا شود؛ این کار نقض رازداری است. بی‌طرفی به سوگیری در قضاوت مربوط است و ثبات رویه اصلاً اصل اخلاقی نیست، بلکه اصلی حسابداری درباره یکسان ماندن روش‌هاست.',
        en: 'Client information is confidential and must not be disclosed without permission, so this breaches confidentiality. Objectivity is about bias in judgement, and consistency is not an ethical principle at all but an accounting principle about keeping methods the same.',
      },
    },
    {
      q: {
        fa: 'در ایران، کدام نهاد به موجب قانون مرجع تدوین استانداردهای حسابداری است؟',
        en: 'In Iran, which body is legally responsible for issuing accounting standards?',
      },
      options: [
        { fa: 'سازمان امور مالیاتی', en: 'The tax authority' },
        { fa: 'جامعه حسابداران رسمی ایران', en: 'The Iranian Association of Certified Public Accountants' },
        { fa: 'سازمان حسابرسی', en: 'The Audit Organization' },
        { fa: 'هیئت استانداردهای بین‌المللی حسابداری (IASB)', en: 'The International Accounting Standards Board (IASB)' },
      ],
      answer: 2,
      explain: {
        fa: 'سازمان حسابرسی مرجع قانونی تدوین استانداردهای حسابداری و حسابرسی در ایران است. جامعه حسابداران رسمی نهاد حرفه‌ای حسابداران رسمی است، سازمان امور مالیاتی قوانین مالیاتی را اجرا می‌کند و IASB استانداردهای بین‌المللی (IFRS) را منتشر می‌کند، نه استانداردهای ایران را.',
        en: 'The Audit Organization is the legal standard-setter for accounting and auditing standards in Iran. The Association is the professional body of certified accountants, the tax authority administers tax law, and the IASB issues international standards (IFRS), not Iran’s.',
      },
    },
  ],
}
