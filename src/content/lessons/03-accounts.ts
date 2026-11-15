import type { Lesson } from '../types'

export const lesson: Lesson = {
  slug: 'accounts',
  number: 3,
  level: 'beginner',
  minutes: 14,
  icon: 'FolderTree',
  tone: 'equity',
  title: { fa: 'حساب‌ها و کدینگ حساب‌ها', en: 'Accounts and the Chart of Accounts' },
  summary: {
    fa: 'بیاموزید حسابداران چگونه اطلاعات را در قالب حساب‌ها سازمان می‌دهند، پنج نوع اصلی حساب و زیرگروه‌هایشان کدام‌اند و کدینگ حساب‌ها چگونه همه‌چیز را منظم نگه می‌دارد.',
    en: 'Learn how accountants organize information into accounts, the five account types and their sub-groups, and how a numbered chart of accounts keeps everything in order.',
  },
  objectives: [
    {
      fa: 'توضیح دهید حساب چیست و چرا واحدهای تجاری از آن استفاده می‌کنند.',
      en: 'Explain what an account is and why businesses use them.',
    },
    {
      fa: 'حساب‌ها را در پنج نوع اصلی و زیرگروه‌های مهم آن‌ها طبقه‌بندی کنید.',
      en: 'Classify accounts into the five types and their main sub-groups.',
    },
    {
      fa: 'نقش حساب‌های کاهنده، مانند استهلاک انباشته، را توضیح دهید.',
      en: 'Explain the role of contra accounts such as accumulated depreciation.',
    },
    {
      fa: 'حساب‌های دائمی (واقعی) را از حساب‌های موقت (اسمی) تشخیص دهید.',
      en: 'Distinguish permanent (real) accounts from temporary (nominal) accounts.',
    },
    {
      fa: 'یک کدینگ حساب‌ها را بخوانید و برای یک کسب‌وکار کوچک طراحی کنید.',
      en: 'Read a chart of accounts and design one for a small business.',
    },
  ],
  sections: [
    {
      id: 'what-is-an-account',
      title: { fa: 'حساب چیست؟', en: 'What Is an Account?' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در درس قبل، معاملات نوا را بر اساس اثرشان بر دارایی‌ها، بدهی‌ها و حقوق مالکانه دنبال کردیم. این روش برای دوازده معامله کارساز است، اما یک کسب‌وکار واقعی هزاران معامله دارد. از این رو حسابداران برای هر قلم سابقه‌ای جداگانه نگه می‌دارند: وجه نقد، تجهیزات، حساب‌های پرداختنی، هزینه اجاره و مانند آن. به هر یک از این سوابق **حساب** گفته می‌شود.',
            en: 'In the last lesson we tracked Nova’s transactions by their effect on assets, liabilities and equity. That works for twelve transactions, but a real business has thousands. So accountants keep a separate record for each item, Cash, Equipment, Accounts payable, Rent expense and so on. Each of these records is an **account**.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'تعریف', en: 'Definition' },
          text: {
            fa: '**حساب** سابقه‌ای مستقل است که همه افزایش‌ها و کاهش‌های یک قلم مشخص از دارایی، بدهی، حقوق مالکانه، درآمد یا هزینه را گرد می‌آورد و مانده آن را در هر لحظه نشان می‌دهد.',
            en: 'An **account** is an individual record that collects every increase and decrease in one specific asset, liability, equity, revenue or expense item, and shows its balance at any point in time.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'هر حساب، چه صفحه‌ای در یک دفتر کاغذی باشد و چه ردیفی در نرم‌افزار حسابداری، این اجزا را دارد:',
            en: 'Whatever its format, a page in a paper ledger or a record in accounting software, every account has:',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**عنوان و کد** که آن را مشخص می‌کند؛ مانند `1010` برای وجه نقد.',
              en: '**A title and a code** that identify it, for example, `1010 Cash`.',
            },
            {
              fa: '**سابقه افزایش‌ها** و **سابقه کاهش‌ها**، هر کدام همراه با تاریخ و شرح.',
              en: '**A record of increases** and **a record of decreases**, each with a date and description.',
            },
            {
              fa: '**مانده**، یعنی تفاوت جمع افزایش‌ها و جمع کاهش‌ها.',
              en: '**A balance**: the difference between total increases and total decreases.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'حساب وجه نقد نوا', en: 'Nova’s Cash account' },
          text: {
            fa: 'حساب وجه نقد نوا در طول ماه 75,500 افزایش و 29,200 کاهش داشته و مانده آن 46,300 است. سارا با یک نگاه به این حساب می‌فهمد استودیو چقدر پول در اختیار دارد؛ بی‌آنکه لازم باشد همه معاملات را دوباره مرور کند.',
            en: 'Nova’s Cash account shows 75,500 of increases and 29,200 of decreases during the month, leaving a balance of 46,300. One glance tells Sara how much money the studio has, without re-reading every transaction.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'مجموعه همه حساب‌های یک واحد تجاری، **دفتر کل** آن را تشکیل می‌دهد. در درس بعد یاد می‌گیرید چگونه با بدهکار و بستانکار در حساب‌های دفتر کل ثبت کنید.',
            en: 'Together, all of a business’s accounts make up its **ledger** (general ledger). In the next lesson you will learn to record in those accounts using debits and credits.',
          },
        },
      ],
    },
    {
      id: 'five-types',
      title: { fa: 'پنج نوع اصلی حساب', en: 'The Five Types of Accounts' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'هر حساب به یکی از پنج نوع اصلی تعلق دارد. سه نوع نخست مستقیماً از معادله حسابداری می‌آیند و دو نوع دیگر، تغییرات حقوق مالکانه ناشی از فعالیت‌های عملیاتی را توضیح می‌دهند.',
            en: 'Every account belongs to one of five types. The first three come straight from the accounting equation; the other two explain how day-to-day operations change equity.',
          },
        },
        {
          type: 'diagram',
          id: 'account-types',
          caption: {
            fa: 'پنج نوع اصلی حساب به زیرگروه‌ها و سپس به حساب‌های مشخص تقسیم می‌شوند.',
            en: 'The five account types branch into sub-groups and then into individual accounts.',
          },
        },
        {
          type: 'table',
          head: [
            { fa: 'نوع', en: 'Type' },
            { fa: 'مفهوم', en: 'What it represents' },
            { fa: 'نمونه‌ها در نوا', en: 'Nova examples' },
            { fa: 'صورت مالی مربوط', en: 'Reported in' },
          ],
          rows: [
            [
              { fa: 'دارایی‌ها', en: 'Assets' },
              { fa: 'منابعی که در کنترل واحد تجاری است', en: 'Resources the business controls' },
              {
                fa: 'وجه نقد، حساب‌های دریافتنی، ملزومات، پیش‌پرداخت بیمه، تجهیزات',
                en: 'Cash, Accounts receivable, Supplies, Prepaid insurance, Equipment',
              },
              { fa: 'ترازنامه', en: 'Balance sheet' },
            ],
            [
              { fa: 'بدهی‌ها', en: 'Liabilities' },
              { fa: 'تعهدات به اشخاص خارج از واحد تجاری', en: 'Obligations to outsiders' },
              { fa: 'حساب‌های پرداختنی، وام پرداختنی', en: 'Accounts payable, Loan payable' },
              { fa: 'ترازنامه', en: 'Balance sheet' },
            ],
            [
              { fa: 'حقوق مالکانه', en: 'Equity' },
              { fa: 'ادعای باقی‌مانده مالک', en: 'The owner’s residual claim' },
              { fa: 'سرمایه، برداشت', en: 'Capital, Drawings' },
              {
                fa: 'ترازنامه و صورت تغییرات در حقوق مالکانه',
                en: 'Balance sheet and statement of changes in equity',
              },
            ],
            [
              { fa: 'درآمدها', en: 'Revenue' },
              {
                fa: 'افزایش حقوق مالکانه ناشی از ارائه کالا یا خدمات',
                en: 'Increases in equity from delivering goods or services',
              },
              { fa: 'درآمد خدمات', en: 'Service revenue' },
              { fa: 'صورت سود و زیان', en: 'Income statement' },
            ],
            [
              { fa: 'هزینه‌ها', en: 'Expenses' },
              { fa: 'بهای منابع مصرف‌شده برای کسب درآمد', en: 'Costs of resources used up to earn revenue' },
              { fa: 'هزینه اجاره، هزینه حقوق و دستمزد', en: 'Rent expense, Salaries expense' },
              { fa: 'صورت سود و زیان', en: 'Income statement' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          text: {
            fa: 'حساب‌های درآمد و هزینه در واقع زیرمجموعه‌هایی از حقوق مالکانه‌اند. جدا نگه داشتن آن‌ها به واحد تجاری امکان می‌دهد سود هر دوره را اندازه بگیرد، به‌جای آنکه فقط یک رقم کلی برای حقوق مالکانه ببیند.',
            en: 'Revenue and expense accounts are really subdivisions of equity. Keeping them separate lets the business measure its profit for each period instead of seeing only one combined equity figure.',
          },
        },
      ],
    },
    {
      id: 'sub-groups',
      title: { fa: 'زیرگروه‌ها و حساب‌های کاهنده', en: 'Sub-groups and Contra Accounts' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در درون هر نوع، حساب‌ها باز هم دسته‌بندی می‌شوند تا خوانندگان صورت‌های مالی بتوانند نقدشوندگی و زمان‌بندی اقلام را ارزیابی کنند. مهم‌ترین تفکیک، تقسیم دارایی‌ها و بدهی‌ها به **جاری** و **غیرجاری** است.',
            en: 'Within each type, accounts are grouped further so that readers of the statements can judge liquidity and timing. The most important split is between **current** and **non-current** assets and liabilities.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'دارایی‌های جاری', en: 'Current assets' },
            items: [
              {
                fa: 'وجه نقد، یا اقلامی که انتظار می‌رود ظرف 12 ماه (یا یک چرخه عملیاتی، اگر طولانی‌تر باشد) به وجه نقد تبدیل یا مصرف شوند',
                en: 'Cash, or items expected to be converted to cash or used up within 12 months (or the operating cycle, if longer)',
              },
              {
                fa: 'در نوا: وجه نقد، حساب‌های دریافتنی، ملزومات، پیش‌پرداخت بیمه',
                en: 'At Nova: Cash, Accounts receivable, Supplies, Prepaid insurance',
              },
              {
                fa: 'نمونه‌های دیگر: موجودی کالا، سرمایه‌گذاری‌های کوتاه‌مدت',
                en: 'Other examples: inventory, short-term investments',
              },
            ],
          },
          right: {
            title: { fa: 'دارایی‌های غیرجاری', en: 'Non-current assets' },
            items: [
              {
                fa: 'بیش از یک سال در فعالیت واحد تجاری به کار گرفته می‌شوند',
                en: 'Used in the business for more than a year',
              },
              { fa: 'در نوا: تجهیزات', en: 'At Nova: Equipment' },
              {
                fa: 'نمونه‌های دیگر: زمین، ساختمان، وسایل نقلیه، سرمایه‌گذاری‌های بلندمدت و دارایی‌های نامشهود مانند حق استفاده از نرم‌افزار',
                en: 'Other examples: land, buildings, vehicles, long-term investments and intangible assets such as software licences',
              },
            ],
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'بدهی‌های جاری', en: 'Current liabilities' },
            items: [
              { fa: 'ظرف 12 ماه آینده سررسید می‌شوند', en: 'Due within the next 12 months' },
              { fa: 'در نوا: حساب‌های پرداختنی', en: 'At Nova: Accounts payable' },
              {
                fa: 'نمونه‌های دیگر: حقوق پرداختنی، مالیات پرداختنی، پیش‌دریافت درآمد و حصه جاری وام‌ها',
                en: 'Other examples: salaries payable, taxes payable, unearned revenue and the current portion of loans',
              },
            ],
          },
          right: {
            title: { fa: 'بدهی‌های غیرجاری', en: 'Non-current liabilities' },
            items: [
              { fa: 'سررسید آن‌ها بیش از 12 ماه بعد است', en: 'Due more than 12 months from now' },
              {
                fa: 'در نوا: وام پرداختنی (با این فرض که بازپرداخت آن بیش از یک سال بعد است)',
                en: 'At Nova: Loan payable (assuming it is repayable after more than a year)',
              },
              {
                fa: 'نمونه‌های دیگر: تسهیلات بلندمدت بانکی، اوراق بدهی و بدهی‌های بلندمدت اجاره',
                en: 'Other examples: long-term bank loans, bonds and long-term lease liabilities',
              },
            ],
          },
        },
        {
          type: 'p',
          text: {
            fa: 'در مؤسسه انفرادی، حقوق مالکانه در حساب **سرمایه** (سرمایه‌گذاری مالک به‌علاوه سودهای انباشته‌شده) و حساب **برداشت** (برداشت‌های طی دوره) پیگیری می‌شود. در شرکت سهامی، معادل این حساب‌ها **سرمایه (سهام)** و **سود انباشته** است و **سود سهام** جای برداشت را می‌گیرد.',
            en: 'In a sole proprietorship, equity is tracked in a **Capital** account (the owner’s investment plus accumulated profits) and a **Drawings** account (withdrawals during the period). In a corporation the equivalents are **Share capital** and **Retained earnings**, with **dividends** taking the place of drawings.',
          },
        },
        { type: 'h', text: { fa: 'حساب‌های کاهنده', en: 'Contra accounts' } },
        {
          type: 'p',
          text: {
            fa: '**حساب کاهنده** به حساب دیگری وابسته است و مانده‌ای خلاف مانده آن دارد؛ در نتیجه، مبلغ آن حساب را در صورت‌های مالی کاهش می‌دهد و در عین حال، رقم اصلی را نیز قابل مشاهده نگه می‌دارد. نمونه شناخته‌شده آن **استهلاک انباشته** است که در کنار حساب تجهیزات یا ساختمان قرار می‌گیرد.',
            en: 'A **contra account** is paired with another account and carries the opposite balance, reducing it on the statements while keeping the original figure visible. The classic example is **Accumulated depreciation**, which sits alongside an equipment or buildings account.',
          },
        },
        {
          type: 'table',
          caption: {
            fa: 'نمونه فرضی (خارج از مثال نوا): یک خودروی حمل بار',
            en: 'Illustration (not part of Nova’s example): a delivery van',
          },
          head: [
            { fa: 'حساب', en: 'Account' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          numericCols: [1],
          rows: [
            [{ fa: 'وسیله نقلیه: بهای تمام‌شده', en: 'Vehicle: original cost' }, 60000],
            [{ fa: 'کسر می‌شود: استهلاک انباشته', en: 'Less: Accumulated depreciation' }, 12000],
            [{ fa: '**مبلغ دفتری**', en: '**Carrying amount (book value)**' }, 48000],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          text: {
            fa: 'از دیگر حساب‌های کاهنده‌ای که بعدها با آن‌ها آشنا می‌شوید، می‌توان به **ذخیره مطالبات مشکوک‌الوصول** (در برابر حساب‌های دریافتنی) و **برگشت از فروش و تخفیفات** (در برابر درآمد فروش) اشاره کرد. حساب برداشت نیز به شکلی مشابه، سرمایه را کاهش می‌دهد.',
            en: 'Other contra accounts you will meet later include the **Allowance for doubtful accounts** (against accounts receivable) and **Sales returns and allowances** (against sales revenue). Drawings works in a similar way against capital.',
          },
        },
      ],
    },
    {
      id: 'permanent-temporary',
      title: { fa: 'حساب‌های دائمی و موقت', en: 'Permanent and Temporary Accounts' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'حساب‌ها از نظر ماندگاری مانده نیز با هم تفاوت دارند. برخی مانده خود را از یک دوره به دوره بعد منتقل می‌کنند و برخی دیگر فقط اطلاعات یک دوره را گرد می‌آورند و سپس دوباره از صفر آغاز می‌شوند.',
            en: 'Accounts also differ in how long their balances live. Some carry their balances from one period into the next; others collect information for a single period and then start again from zero.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'حساب‌های دائمی (واقعی)', en: 'Permanent (real) accounts' },
            items: [
              { fa: 'دارایی‌ها، بدهی‌ها و سرمایه', en: 'Assets, liabilities and capital' },
              { fa: 'مانده آن‌ها به دوره بعد منتقل می‌شود', en: 'Balances carry forward to the next period' },
              { fa: 'در ترازنامه منعکس می‌شوند', en: 'Appear on the balance sheet' },
              {
                fa: 'در نوا: وجه نقد ماه دوم را با مانده 46,300 آغاز می‌کند',
                en: 'At Nova: Cash starts month two with its 46,300 balance',
              },
            ],
          },
          right: {
            title: { fa: 'حساب‌های موقت (اسمی)', en: 'Temporary (nominal) accounts' },
            items: [
              { fa: 'درآمدها، هزینه‌ها و برداشت', en: 'Revenue, expenses and drawings' },
              { fa: 'فعالیت یک دوره را اندازه می‌گیرند', en: 'Measure the activity of one period only' },
              {
                fa: 'در پایان دوره به حساب سرمایه بسته می‌شوند و دوره بعد را با مانده صفر آغاز می‌کنند',
                en: 'Closed into capital at period end, so they start the next period at zero',
              },
              {
                fa: 'در نوا: درآمد خدمات 12,000 به ماه دوم منتقل نمی‌شود',
                en: 'At Nova: the 12,000 of service revenue does not carry into month two',
              },
            ],
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'یک تصویر کمک‌کننده', en: 'A helpful picture' },
          text: {
            fa: 'حساب موقت را مانند کیلومترشمار سفر خودرو در نظر بگیرید که در آغاز هر سفر صفر می‌شود؛ و حساب دائمی را مانند کیلومترشمار کل که در تمام عمر خودرو به شمارش ادامه می‌دهد.',
            en: 'Think of a temporary account as a car’s trip meter, reset at the start of every journey, and a permanent account as the odometer, which keeps counting for the life of the car.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          text: {
            fa: 'انتقال مانده حساب‌های موقت به حساب سرمایه با **ثبت‌های بستن حساب‌ها** انجام می‌شود که در پایان چرخه حسابداری با آن آشنا خواهید شد.',
            en: 'Temporary balances are transferred into capital through **closing entries**, which you will study at the end of the accounting cycle.',
          },
        },
      ],
    },
    {
      id: 'chart-of-accounts',
      title: { fa: 'کدینگ حساب‌ها', en: 'The Chart of Accounts' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**کدینگ حساب‌ها** (فهرست حساب‌ها) فهرست کامل و منظم همه حساب‌هایی است که یک واحد تجاری به کار می‌برد و هر حساب در آن کدی منحصربه‌فرد دارد. کدینگ ستون فقرات هر نظام حسابداری است: ثبت اطلاعات را سریع‌تر می‌کند، احتمال خطا را کاهش می‌دهد و تضمین می‌کند که همه، معاملات را به یک شکل طبقه‌بندی کنند.',
            en: 'A **chart of accounts** is the complete, organized list of every account a business uses, each with a unique number. It is the backbone of any accounting system: it speeds up data entry, reduces errors and ensures that everyone classifies transactions the same way.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '`1xxx` دارایی‌ها (1000 تا 1499 جاری، 1500 تا 1999 غیرجاری)',
              en: '`1xxx` Assets (1000–1499 current, 1500–1999 non-current)',
            },
            {
              fa: '`2xxx` بدهی‌ها (2000 تا 2499 جاری، 2500 تا 2999 غیرجاری)',
              en: '`2xxx` Liabilities (2000–2499 current, 2500–2999 non-current)',
            },
            { fa: '`3xxx` حقوق مالکانه', en: '`3xxx` Equity' },
            { fa: '`4xxx` درآمدها', en: '`4xxx` Revenue' },
            { fa: '`5xxx` هزینه‌ها', en: '`5xxx` Expenses' },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'استودیو طراحی نوا: کدینگ حساب‌ها', en: 'Nova Design Studio: chart of accounts' },
          head: [
            { fa: 'کد', en: 'Code' },
            { fa: 'عنوان حساب', en: 'Account' },
            { fa: 'طبقه', en: 'Classification' },
            { fa: 'صورت مالی', en: 'Statement' },
          ],
          rows: [
            [
              { fa: '1010', en: '1010' },
              { fa: 'وجه نقد', en: 'Cash' },
              { fa: 'دارایی جاری', en: 'Current asset' },
              { fa: 'ترازنامه', en: 'Balance sheet' },
            ],
            [
              { fa: '1020', en: '1020' },
              { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' },
              { fa: 'دارایی جاری', en: 'Current asset' },
              { fa: 'ترازنامه', en: 'Balance sheet' },
            ],
            [
              { fa: '1030', en: '1030' },
              { fa: 'ملزومات', en: 'Supplies' },
              { fa: 'دارایی جاری', en: 'Current asset' },
              { fa: 'ترازنامه', en: 'Balance sheet' },
            ],
            [
              { fa: '1040', en: '1040' },
              { fa: 'پیش‌پرداخت بیمه', en: 'Prepaid insurance' },
              { fa: 'دارایی جاری', en: 'Current asset' },
              { fa: 'ترازنامه', en: 'Balance sheet' },
            ],
            [
              { fa: '1510', en: '1510' },
              { fa: 'تجهیزات', en: 'Equipment' },
              { fa: 'دارایی غیرجاری', en: 'Non-current asset' },
              { fa: 'ترازنامه', en: 'Balance sheet' },
            ],
            [
              { fa: '1520', en: '1520' },
              { fa: 'استهلاک انباشته: تجهیزات', en: 'Accumulated depreciation: Equipment' },
              { fa: 'کاهنده دارایی', en: 'Contra asset' },
              { fa: 'ترازنامه', en: 'Balance sheet' },
            ],
            [
              { fa: '2010', en: '2010' },
              { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
              { fa: 'بدهی جاری', en: 'Current liability' },
              { fa: 'ترازنامه', en: 'Balance sheet' },
            ],
            [
              { fa: '2510', en: '2510' },
              { fa: 'وام پرداختنی', en: 'Loan payable' },
              { fa: 'بدهی غیرجاری', en: 'Non-current liability' },
              { fa: 'ترازنامه', en: 'Balance sheet' },
            ],
            [
              { fa: '3010', en: '3010' },
              { fa: 'سرمایه', en: 'Capital' },
              { fa: 'حقوق مالکانه', en: 'Equity' },
              { fa: 'ترازنامه', en: 'Balance sheet' },
            ],
            [
              { fa: '3020', en: '3020' },
              { fa: 'برداشت', en: 'Drawings' },
              { fa: 'کاهنده حقوق مالکانه', en: 'Contra equity' },
              { fa: 'صورت تغییرات در حقوق مالکانه', en: 'Statement of changes in equity' },
            ],
            [
              { fa: '4010', en: '4010' },
              { fa: 'درآمد خدمات', en: 'Service revenue' },
              { fa: 'درآمد', en: 'Revenue' },
              { fa: 'صورت سود و زیان', en: 'Income statement' },
            ],
            [
              { fa: '5010', en: '5010' },
              { fa: 'هزینه اجاره', en: 'Rent expense' },
              { fa: 'هزینه', en: 'Expense' },
              { fa: 'صورت سود و زیان', en: 'Income statement' },
            ],
            [
              { fa: '5020', en: '5020' },
              { fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' },
              { fa: 'هزینه', en: 'Expense' },
              { fa: 'صورت سود و زیان', en: 'Income statement' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'جای خالی بگذارید', en: 'Leave gaps' },
          text: {
            fa: 'به فاصله ده‌تایی میان کدها دقت کنید. هرگاه نوا به حساب‌های تازه‌ای مانند هزینه ملزومات، هزینه استهلاک یا حقوق پرداختنی نیاز داشته باشد، می‌توان آن‌ها را بدون تغییر کدهای موجود در جای درستشان قرار داد. حساب استهلاک انباشته (1520) هنوز مانده‌ای ندارد و در درس‌های بعد، هنگام ثبت استهلاک، به کار می‌رود.',
            en: 'Notice the steps of ten between codes. When Nova later needs new accounts, Supplies expense, Depreciation expense or Salaries payable, for example, they can be slotted into the right place without renumbering anything. Accumulated depreciation (1520) has no balance yet; it comes into play when we record depreciation in a later lesson.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'سطوح کدینگ در عمل حسابداری ایران', en: 'Coding levels in Iranian practice' },
          text: {
            fa: 'در نرم‌افزارهای حسابداری ایرانی، کدها معمولاً در چند سطح سازمان‌دهی می‌شوند: **گروه** (مثلاً دارایی‌های جاری)، **حساب کل** (مثلاً موجودی نقد)، **حساب معین** (مثلاً حساب‌های بانکی) و **حساب تفصیلی** (مثلاً یک حساب بانکی یا یک مشتری مشخص). منطق کار یکسان است: هر سطح، جزئیات بیشتری را زیر سطح بالاتر نشان می‌دهد.',
            en: 'Iranian accounting software usually organizes codes in levels: **group** (e.g., current assets), **general account** (e.g., cash), **subsidiary account** (e.g., bank accounts) and **detail account** (e.g., one particular bank account or customer). The logic is the same as above: each level adds detail beneath the one before it.',
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
              fa: 'حساب، همه افزایش‌ها و کاهش‌های یک قلم مشخص را گرد می‌آورد و مانده آن را نشان می‌دهد؛ مجموعه حساب‌ها دفتر کل را می‌سازد.',
              en: 'An account gathers every increase and decrease in one item and shows its balance; together, the accounts form the ledger.',
            },
            {
              fa: 'پنج نوع اصلی حساب عبارت‌اند از: دارایی، بدهی، حقوق مالکانه، درآمد و هزینه.',
              en: 'The five account types are assets, liabilities, equity, revenue and expenses.',
            },
            {
              fa: 'دارایی‌ها و بدهی‌ها به جاری و غیرجاری تقسیم می‌شوند و حساب‌های کاهنده، مانند استهلاک انباشته، حساب اصلی را تعدیل می‌کنند.',
              en: 'Assets and liabilities are split into current and non-current, and contra accounts such as accumulated depreciation offset their parent accounts.',
            },
            {
              fa: 'حساب‌های دائمی به دوره بعد منتقل می‌شوند و حساب‌های موقت در پایان هر دوره بسته می‌شوند.',
              en: 'Permanent accounts carry forward; temporary accounts are closed at the end of every period.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در درس بعد', en: 'Coming up next' },
          text: {
            fa: 'یاد می‌گیرید چگونه با **بدهکار** و **بستانکار** در این حساب‌ها ثبت کنید.',
            en: 'You will learn how to record in these accounts using **debits** and **credits**.',
          },
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'حساب', en: 'Account' },
              def: {
                fa: 'سابقه‌ای مستقل از افزایش‌ها، کاهش‌ها و مانده یک قلم مشخص.',
                en: 'An individual record of the increases, decreases and balance of one specific item.',
              },
            },
            {
              term: { fa: 'دفتر کل', en: 'Ledger' },
              def: {
                fa: 'مجموعه همه حساب‌های یک واحد تجاری.',
                en: 'The complete set of a business’s accounts.',
              },
            },
            {
              term: { fa: 'دارایی جاری', en: 'Current asset' },
              def: {
                fa: 'وجه نقد یا دارایی‌ای که انتظار می‌رود ظرف 12 ماه یا یک چرخه عملیاتی به وجه نقد تبدیل یا مصرف شود.',
                en: 'Cash, or an asset expected to be converted to cash or used up within 12 months or one operating cycle.',
              },
            },
            {
              term: { fa: 'دارایی غیرجاری', en: 'Non-current asset' },
              def: {
                fa: 'دارایی‌ای که بیش از یک سال در فعالیت واحد تجاری به کار می‌رود؛ مانند تجهیزات.',
                en: 'An asset used in the business for more than a year, such as equipment.',
              },
            },
            {
              term: { fa: 'بدهی جاری', en: 'Current liability' },
              def: {
                fa: 'بدهی‌ای که ظرف 12 ماه آینده سررسید می‌شود.',
                en: 'An obligation due within the next 12 months.',
              },
            },
            {
              term: { fa: 'حساب کاهنده', en: 'Contra account' },
              def: {
                fa: 'حسابی با مانده خلاف حساب اصلی که مبلغ آن را در صورت‌های مالی کاهش می‌دهد.',
                en: 'An account with the opposite balance to its parent account, reducing it on the statements.',
              },
            },
            {
              term: { fa: 'استهلاک انباشته', en: 'Accumulated depreciation' },
              def: {
                fa: 'جمع استهلاک ثبت‌شده برای یک دارایی تا امروز؛ حساب کاهنده دارایی.',
                en: 'The total depreciation recorded on an asset to date; a contra-asset account.',
              },
            },
            {
              term: { fa: 'حساب دائمی (واقعی)', en: 'Permanent (real) account' },
              def: {
                fa: 'حساب دارایی، بدهی یا سرمایه که مانده آن به دوره بعد منتقل می‌شود.',
                en: 'An asset, liability or capital account whose balance carries forward to the next period.',
              },
            },
            {
              term: { fa: 'حساب موقت (اسمی)', en: 'Temporary (nominal) account' },
              def: {
                fa: 'حساب درآمد، هزینه یا برداشت که در پایان دوره بسته می‌شود و از صفر آغاز می‌کند.',
                en: 'A revenue, expense or drawings account that is closed at period end and starts again from zero.',
              },
            },
            {
              term: { fa: 'کدینگ حساب‌ها (فهرست حساب‌ها)', en: 'Chart of accounts' },
              def: {
                fa: 'فهرست کامل و کدگذاری‌شده همه حساب‌هایی که یک واحد تجاری به کار می‌برد.',
                en: 'The complete, numbered list of every account a business uses.',
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
        fa: 'کدام‌یک از حساب‌های زیر حساب موقت است؟',
        en: 'Which of the following is a temporary account?',
      },
      options: [
        { fa: 'وجه نقد', en: 'Cash' },
        { fa: 'وام پرداختنی', en: 'Loan payable' },
        { fa: 'هزینه اجاره', en: 'Rent expense' },
        { fa: 'تجهیزات', en: 'Equipment' },
      ],
      answer: 2,
      explain: {
        fa: 'هزینه اجاره فعالیت یک دوره را اندازه می‌گیرد و در پایان دوره بسته می‌شود. وجه نقد، وام پرداختنی و تجهیزات حساب‌های دائمی ترازنامه‌ای‌اند و مانده آن‌ها به دوره بعد منتقل می‌شود.',
        en: 'Rent expense measures one period’s activity and is closed at period end. Cash, Loan payable and Equipment are permanent balance-sheet accounts whose balances carry forward.',
      },
    },
    {
      q: {
        fa: 'بهترین توصیف برای حساب استهلاک انباشته کدام است؟',
        en: 'Which best describes Accumulated depreciation?',
      },
      options: [
        {
          fa: 'حساب کاهنده دارایی که مبلغ دفتری تجهیزات را کاهش می‌دهد',
          en: 'A contra-asset account that reduces the carrying amount of equipment',
        },
        { fa: 'یک بدهی جاری', en: 'A current liability' },
        { fa: 'یک حساب هزینه', en: 'An expense account' },
        { fa: 'وجه نقدی که برای خرید دارایی جدید کنار گذاشته شده است', en: 'Cash set aside to replace the asset' },
      ],
      answer: 0,
      explain: {
        fa: 'استهلاک انباشته جمع استهلاک ثبت‌شده تا امروز است و در کنار حساب دارایی، از آن کسر می‌شود. این حساب نه بدهی است و نه وجه نقدی را کنار می‌گذارد؛ هزینه دوره نیز در حساب جداگانه «هزینه استهلاک» ثبت می‌شود.',
        en: 'Accumulated depreciation is the total depreciation recorded to date and is deducted from the related asset. It is not a liability and sets no cash aside; the period’s charge goes to a separate Depreciation expense account.',
      },
    },
    {
      q: {
        fa: 'بر اساس کدینگ نوا، حساب تازه «هزینه بیمه» در کدام محدوده کد قرار می‌گیرد؟',
        en: 'Under Nova’s chart of accounts, which code range would a new “Insurance expense” account belong to?',
      },
      options: [
        { fa: '1xxx', en: '1xxx' },
        { fa: '2xxx', en: '2xxx' },
        { fa: '4xxx', en: '4xxx' },
        { fa: '5xxx', en: '5xxx' },
      ],
      answer: 3,
      explain: {
        fa: 'همه حساب‌های هزینه در محدوده 5xxx قرار می‌گیرند؛ مثلاً می‌توان کد 5030 را به آن داد. در مقابل، «پیش‌پرداخت بیمه» دارایی است و کد 1040 دارد.',
        en: 'All expense accounts live in the 5xxx range, it could be given code 5030, for example. Prepaid insurance, by contrast, is an asset with code 1040.',
      },
    },
    {
      q: {
        fa: 'کدام‌یک از حساب‌های نوا دارایی غیرجاری است؟',
        en: 'Which of Nova’s accounts is a non-current asset?',
      },
      options: [
        { fa: 'پیش‌پرداخت بیمه', en: 'Prepaid insurance' },
        { fa: 'تجهیزات', en: 'Equipment' },
        { fa: 'ملزومات', en: 'Supplies' },
        { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' },
      ],
      answer: 1,
      explain: {
        fa: 'تجهیزات بیش از یک سال در فعالیت نوا به کار گرفته می‌شود. بیمه 12 ماهه، ملزومات و مطالبات از مشتریان همگی ظرف یک سال مصرف یا وصول می‌شوند و بنابراین جاری‌اند.',
        en: 'Equipment will be used in the business for more than a year. The 12-month insurance, supplies and customer receivables are all used up or collected within a year, so they are current.',
      },
    },
    {
      q: {
        fa: 'در پایان دوره، مانده حساب درآمد خدمات چه می‌شود؟',
        en: 'What happens to the balance of Service revenue at the end of the period?',
      },
      options: [
        { fa: 'به همان شکل به دوره بعد منتقل می‌شود', en: 'It is carried forward unchanged to the next period' },
        { fa: 'به حساب وام پرداختنی منتقل می‌شود', en: 'It is transferred to Loan payable' },
        { fa: 'بدون هیچ ثبتی پاک می‌شود', en: 'It is simply deleted without any entry' },
        {
          fa: 'به حساب سرمایه بسته می‌شود و دوره بعد از صفر آغاز می‌کند',
          en: 'It is closed into capital and starts the next period at zero',
        },
      ],
      answer: 3,
      explain: {
        fa: 'درآمد حساب موقت است. مانده آن با ثبت‌های بستن حساب‌ها به سرمایه منتقل می‌شود تا دوره بعد از صفر آغاز شود. هیچ مانده‌ای بدون ثبت پاک نمی‌شود.',
        en: 'Revenue is a temporary account. Its balance is transferred into capital through closing entries, so the next period starts from zero. No balance ever disappears without an entry.',
      },
    },
    {
      q: {
        fa: 'کدام‌یک بدهی جاری است؟',
        en: 'Which of these is a current liability?',
      },
      options: [
        { fa: 'تجهیزات', en: 'Equipment' },
        { fa: 'سرمایه', en: 'Capital' },
        { fa: 'حقوق پرداختنی که ماه آینده پرداخت می‌شود', en: 'Salaries payable, due next month' },
        { fa: 'درآمد خدمات', en: 'Service revenue' },
      ],
      answer: 2,
      explain: {
        fa: 'حقوق پرداختنی تعهدی است که ظرف 12 ماه تسویه می‌شود، پس بدهی جاری است. تجهیزات دارایی، سرمایه جزء حقوق مالکانه و درآمد خدمات حساب درآمد است.',
        en: 'Salaries payable is an obligation settled within 12 months, so it is a current liability. Equipment is an asset, Capital is equity and Service revenue is a revenue account.',
      },
    },
  ],
}
