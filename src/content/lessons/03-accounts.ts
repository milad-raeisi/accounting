import type { Lesson } from '../types'

const acct = (code: string, fa: string, en: string, clsFa: string, clsEn: string, stFa: string, stEn: string) => [
  { fa: code, en: code },
  { fa, en },
  { fa: clsFa, en: clsEn },
  { fa: stFa, en: stEn },
]

export const lesson: Lesson = {
  slug: 'accounts',
  number: 3,
  level: 'beginner',
  minutes: 35,
  icon: 'FolderTree',
  tone: 'equity',
  title: { fa: 'حساب‌ها و کدینگ حساب‌ها', en: 'Accounts and the Chart of Accounts' },
  summary: {
    fa: 'بیاموزید حسابداران چگونه اطلاعات را در قالب حساب‌ها سازمان می‌دهند: پنج نوع اصلی حساب با نمونه‌های روزمره، جاری و غیرجاری، حساب‌های کاهنده، حساب‌های دائمی و موقت، و کدینگ حساب‌ها، همراه با نگاهی به کدینگ سه‌سطحی در ایران.',
    en: 'Learn how accountants organize information into accounts: the five account types with everyday examples, current and non-current items, contra accounts, permanent and temporary accounts, and the chart of accounts, with a first look at Iran’s three-level coding.',
  },
  objectives: [
    {
      fa: 'توضیح دهید حساب چیست و چرا واحدهای تجاری از آن استفاده می‌کنند.',
      en: 'Explain what an account is and why businesses use them.',
    },
    {
      fa: 'هر حساب را با کمک چند پرسش ساده و سرنخ‌های نام آن، در یکی از پنج نوع اصلی طبقه‌بندی کنید.',
      en: 'Classify any account into one of the five types using a few simple questions and clues in its name.',
    },
    {
      fa: 'دارایی‌ها و بدهی‌ها را به جاری و غیرجاری تفکیک کنید؛ از جمله حصه جاری یک وام بلندمدت.',
      en: 'Split assets and liabilities into current and non-current, including the current portion of a long-term loan.',
    },
    {
      fa: 'نقش حساب‌های کاهنده را توضیح دهید، ارزش دفتری را حساب کنید و حساب‌های دائمی را از موقت تشخیص دهید.',
      en: 'Explain contra accounts, compute book value, and tell permanent accounts from temporary ones.',
    },
    {
      fa: 'یک کدینگ حساب‌ها را بخوانید و طراحی کنید و ساختار کل، معین و تفصیلی را در عمل ایران توضیح دهید.',
      en: 'Read and design a chart of accounts and explain the general, subsidiary and detail levels used in Iran.',
    },
  ],
  sections: [
    {
      id: 'what-is-an-account',
      title: { fa: 'حساب چیست؟', en: 'What Is an Account?' },
      blocks: [
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'چرا اهمیت دارد؟', en: 'Why it matters' },
          text: {
            fa: 'یک سوپرمارکت محله‌ای در ماه حدود 3,000 فروش، 200 خرید و ده‌ها پرداخت دارد. صاحب فروشگاه می‌پرسد: «امروز چقدر به پخش‌کننده‌ها بدهکاریم؟» اگر همه معاملات فقط در یک فهرست بلند نوشته شده باشند، باید همه را دوباره بخواند و جمع بزند. اگر برای «حساب‌های پرداختنی» یک حساب جداگانه وجود داشته باشد، پاسخ در یک خط آماده است: مانده همان حساب.',
            en: 'A neighbourhood supermarket has about 3,000 sales, 200 purchases and dozens of payments a month. The owner asks: “How much do we owe our distributors today?” If every transaction sits in one long list, someone has to reread and add up the lot. If there is a separate Accounts payable account, the answer takes one line: that account’s balance.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'در درس قبل، معاملات نوا را بر اساس اثرشان بر دارایی‌ها، بدهی‌ها و حقوق مالکانه دنبال کردیم. این روش برای دوازده معامله کارساز است، اما یک کسب‌وکار واقعی هزاران معامله دارد. از این رو حسابداران برای هر قلم سابقه‌ای جداگانه نگه می‌دارند: موجودی نقد، تجهیزات، حساب‌های پرداختنی، هزینه اجاره و مانند آن. به هر یک از این سوابق **حساب** گفته می‌شود.',
            en: 'In the last lesson we tracked Nova’s transactions by their effect on assets, liabilities and equity. That works for twelve transactions, but a real business has thousands. So accountants keep a separate record for each item: Cash, Equipment, Accounts payable, Rent expense and so on. Each of these records is an **account**.',
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
            { fa: '**عنوان و کد** که آن را مشخص می‌کند؛ مانند `1010` برای موجودی نقد.', en: '**A title and a code** that identify it, for example `1010 Cash`.' },
            {
              fa: '**سابقه افزایش‌ها** و **سابقه کاهش‌ها**، هر کدام همراه با تاریخ، شرح و شماره سند.',
              en: '**A record of increases** and **a record of decreases**, each with a date, a description and a voucher number.',
            },
            { fa: '**مانده**، یعنی تفاوت جمع افزایش‌ها و جمع کاهش‌ها.', en: '**A balance**: the difference between total increases and total decreases.' },
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'حساب موجودی نقد نوا', en: 'Nova’s Cash account' },
          text: {
            fa: 'حساب موجودی نقد نوا در طول ماه 75,500 افزایش و 29,200 کاهش داشته و مانده آن 46,300 است. سارا با یک نگاه به این حساب می‌فهمد استودیو چقدر پول در اختیار دارد؛ بی‌آنکه لازم باشد همه معاملات را دوباره مرور کند.',
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
            fa: 'هر حساب به یکی از پنج نوع اصلی تعلق دارد. سه نوع نخست مستقیماً از معادله حسابداری می‌آیند و دو نوع دیگر، تغییرات حقوق مالکانه ناشی از فعالیت‌های روزانه را توضیح می‌دهند.',
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
              { fa: 'موجودی نقد، حساب‌های دریافتنی، ملزومات، پیش‌پرداخت بیمه، تجهیزات', en: 'Cash, Accounts receivable, Supplies, Prepaid insurance, Equipment' },
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
              { fa: 'ترازنامه و صورت تغییرات در حقوق مالکانه', en: 'Balance sheet and statement of changes in equity' },
            ],
            [
              { fa: 'درآمدها', en: 'Revenue' },
              { fa: 'افزایش حقوق مالکانه ناشی از ارائه کالا یا خدمات', en: 'Increases in equity from delivering goods or services' },
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
        { type: 'h', text: { fa: 'نمونه‌های روزمره از هر نوع', en: 'Everyday examples of each type' } },
        {
          type: 'table',
          caption: { fa: 'حساب‌هایی که تقریباً در هر کسب‌وکار ایرانی می‌بینید', en: 'Accounts you will see in almost any business' },
          head: [
            { fa: 'حساب', en: 'Account' },
            { fa: 'نوع', en: 'Type' },
            { fa: 'چرا؟', en: 'Why?' },
          ],
          rows: [
            [{ fa: 'موجودی نقد (صندوق و حساب‌های بانکی)', en: 'Cash (cash on hand and bank accounts)' }, { fa: 'دارایی', en: 'Asset' }, { fa: 'پولی که در اختیار کسب‌وکار است.', en: 'Money the business holds.' }],
            [{ fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, { fa: 'دارایی', en: 'Asset' }, { fa: 'طلب از مشتریانی که نسیه خریده‌اند.', en: 'Amounts owed by customers who bought on credit.' }],
            [
              { fa: 'اسناد دریافتنی (چک‌های مدت‌دار دریافتی)', en: 'Notes receivable (post-dated cheques received)' },
              { fa: 'دارایی', en: 'Asset' },
              { fa: 'حق دریافت پول در تاریخ سررسید چک.', en: 'The right to collect cash on the cheque’s due date.' },
            ],
            [{ fa: 'موجودی کالا', en: 'Inventory' }, { fa: 'دارایی', en: 'Asset' }, { fa: 'کالایی که برای فروش نگهداری می‌شود.', en: 'Goods held for sale.' }],
            [
              { fa: 'پیش‌پرداخت اجاره', en: 'Prepaid rent' },
              { fa: 'دارایی', en: 'Asset' },
              { fa: 'حق استفاده از ملک در ماه‌های آینده که پولش از قبل داده شده است.', en: 'The right to use premises in future months, already paid for.' },
            ],
            [{ fa: 'زمین، ساختمان و خودرو', en: 'Land, buildings and vehicles' }, { fa: 'دارایی', en: 'Asset' }, { fa: 'سال‌ها در کسب‌وکار استفاده می‌شوند.', en: 'Used in the business for years.' }],
            [{ fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, { fa: 'بدهی', en: 'Liability' }, { fa: 'بدهی به تأمین‌کنندگان بابت خرید نسیه.', en: 'Amounts owed to suppliers for credit purchases.' }],
            [
              { fa: 'اسناد پرداختنی (چک‌های مدت‌دار صادرشده)', en: 'Notes payable (post-dated cheques issued)' },
              { fa: 'بدهی', en: 'Liability' },
              { fa: 'تعهد پرداخت در تاریخ سررسید چک.', en: 'A promise to pay on the cheque’s due date.' },
            ],
            [{ fa: 'تسهیلات و وام بانکی', en: 'Bank loans' }, { fa: 'بدهی', en: 'Liability' }, { fa: 'باید همراه با سود (بهره) بازپرداخت شود.', en: 'Must be repaid with interest.' }],
            [
              { fa: 'پیش‌دریافت از مشتریان', en: 'Customer advances (unearned revenue)' },
              { fa: 'بدهی', en: 'Liability' },
              { fa: 'پول گرفته شده، اما کالا یا خدمت هنوز تحویل نشده است.', en: 'Cash received, but the goods or services have not been delivered yet.' },
            ],
            [{ fa: 'مالیات پرداختنی', en: 'Taxes payable' }, { fa: 'بدهی', en: 'Liability' }, { fa: 'مالیاتی که تعلق گرفته و هنوز پرداخت نشده است.', en: 'Tax that is due but not yet paid.' }],
            [{ fa: 'سرمایه', en: 'Capital' }, { fa: 'حقوق مالکانه', en: 'Equity' }, { fa: 'سرمایه‌گذاری مالک و سودهای باقی‌مانده در کسب‌وکار.', en: 'The owner’s investment and profits kept in the business.' }],
            [{ fa: 'برداشت', en: 'Drawings' }, { fa: 'حقوق مالکانه (کاهنده)', en: 'Equity (reduction)' }, { fa: 'آنچه مالک برای مصارف شخصی برداشته است.', en: 'What the owner has taken out for personal use.' }],
            [{ fa: 'فروش کالا', en: 'Sales' }, { fa: 'درآمد', en: 'Revenue' }, { fa: 'حاصل فروش کالا به مشتریان.', en: 'Earned by selling goods to customers.' }],
            [{ fa: 'درآمد سود سپرده بانکی', en: 'Interest income on bank deposits' }, { fa: 'درآمد', en: 'Revenue' }, { fa: 'سودی که بانک به سپرده کسب‌وکار می‌پردازد.', en: 'Interest the bank pays on the business’s deposits.' }],
            [{ fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of goods sold' }, { fa: 'هزینه', en: 'Expense' }, { fa: 'بهای کالاهایی که در این دوره فروخته شده‌اند.', en: 'The cost of the goods sold this period.' }],
            [{ fa: 'هزینه حقوق و دستمزد', en: 'Salaries and wages expense' }, { fa: 'هزینه', en: 'Expense' }, { fa: 'بهای کار کارکنان در این دوره.', en: 'The cost of staff work this period.' }],
            [{ fa: 'هزینه آب، برق و تلفن', en: 'Utilities expense' }, { fa: 'هزینه', en: 'Expense' }, { fa: 'انرژی و ارتباطاتی که در این دوره مصرف شده است.', en: 'Energy and communications used this period.' }],
            [{ fa: 'هزینه حمل', en: 'Delivery expense' }, { fa: 'هزینه', en: 'Expense' }, { fa: 'ارسال کالا برای مشتریان.', en: 'Shipping goods to customers.' }],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'سرنخ‌های نام حساب', en: 'Clues in the account name' },
          text: {
            fa: 'نام بسیاری از حساب‌ها نوعشان را لو می‌دهد: «دریافتنی» معمولاً دارایی است (کسی به ما بدهکار است)؛ «پرداختنی» بدهی است (ما به کسی بدهکاریم)؛ «پیش‌پرداخت» دارایی است (پول را داده‌ایم و خدمت را بعداً می‌گیریم)؛ «پیش‌دریافت» بدهی است (پول را گرفته‌ایم و کار را بعداً انجام می‌دهیم)؛ حسابی که با «هزینه» شروع شود هزینه است و حسابی که با «درآمد» شروع شود درآمد. این سرنخ‌ها کمک می‌کنند، اما همیشه معنای حساب را هم بسنجید.',
            en: 'Many account names give their type away: “receivable” is usually an asset (someone owes us); “payable” is a liability (we owe someone); “prepaid” is an asset (we paid and will receive the service later); “unearned” or “advance from customers” is a liability (we were paid and will do the work later); an account named “… expense” is an expense and “… revenue” or “… income” is revenue. The clues help, but always check what the account really means.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'پرسش 1: دارایی است؟', en: 'Question 1: an asset?' },
              text: {
                fa: 'آیا کسب‌وکار آن را در اختیار دارد و از آن منفعت آینده انتظار دارد؟ اگر بله، دارایی است.',
                en: 'Does the business control it and expect future benefit from it? If so, it is an asset.',
              },
            },
            {
              title: { fa: 'پرسش 2: بدهی است؟', en: 'Question 2: a liability?' },
              text: {
                fa: 'آیا کسب‌وکار باید در آینده بابت آن پول بدهد یا کاری انجام دهد؟ اگر بله، بدهی است.',
                en: 'Must the business pay money or deliver something in the future because of it? If so, it is a liability.',
              },
            },
            {
              title: { fa: 'پرسش 3: سهم مالک است؟', en: 'Question 3: the owner’s stake?' },
              text: {
                fa: 'آیا سرمایه‌گذاری مالک یا برداشت اوست؟ اگر بله، حقوق مالکانه است.',
                en: 'Is it the owner’s investment or the owner’s withdrawals? If so, it is equity.',
              },
            },
            {
              title: { fa: 'پرسش 4: درآمد است؟', en: 'Question 4: revenue?' },
              text: {
                fa: 'آیا از تحویل کالا یا خدمت در همین دوره به دست آمده است؟ اگر بله، درآمد است.',
                en: 'Was it earned by delivering goods or services this period? If so, it is revenue.',
              },
            },
            {
              title: { fa: 'پرسش 5: هزینه است؟', en: 'Question 5: an expense?' },
              text: {
                fa: 'آیا در همین دوره برای کسب درآمد مصرف شده است؟ اگر بله، هزینه است.',
                en: 'Was it used up this period to earn revenue? If so, it is an expense.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'current-non-current',
      title: { fa: 'جاری و غیرجاری', en: 'Current and Non-current' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در درون هر نوع، حساب‌ها باز هم دسته‌بندی می‌شوند تا خوانندگان صورت‌های مالی بتوانند نقدشوندگی و زمان‌بندی اقلام را ارزیابی کنند. مهم‌ترین تفکیک، تقسیم دارایی‌ها و بدهی‌ها به **جاری** و **غیرجاری** است. مرز معمول، **12 ماه** پس از تاریخ ترازنامه است.',
            en: 'Within each type, accounts are grouped further so that readers of the statements can judge liquidity and timing. The most important split is between **current** and **non-current** assets and liabilities. The usual dividing line is **12 months** after the balance sheet date.',
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
              { fa: 'در نوا: موجودی نقد، حساب‌های دریافتنی، ملزومات، پیش‌پرداخت بیمه', en: 'At Nova: Cash, Accounts receivable, Supplies, Prepaid insurance' },
              { fa: 'نمونه‌های دیگر: موجودی کالا، چک‌های دریافتنی کوتاه‌مدت، سرمایه‌گذاری‌های کوتاه‌مدت', en: 'Other examples: inventory, short-term cheques receivable, short-term investments' },
            ],
          },
          right: {
            title: { fa: 'دارایی‌های غیرجاری', en: 'Non-current assets' },
            items: [
              { fa: 'بیش از یک سال در فعالیت واحد تجاری به کار گرفته می‌شوند', en: 'Used in the business for more than a year' },
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
                fa: 'نمونه‌های دیگر: حقوق پرداختنی، مالیات پرداختنی، پیش‌دریافت درآمد، چک‌های پرداختنی کوتاه‌مدت و حصه جاری وام‌ها',
                en: 'Other examples: salaries payable, taxes payable, unearned revenue, short-term cheques payable and the current portion of loans',
              },
            ],
          },
          right: {
            title: { fa: 'بدهی‌های غیرجاری', en: 'Non-current liabilities' },
            items: [
              { fa: 'سررسید آن‌ها بیش از 12 ماه بعد است', en: 'Due more than 12 months from now' },
              { fa: 'در نوا: وام پرداختنی (با این فرض که بازپرداخت آن بیش از یک سال بعد است)', en: 'At Nova: Loan payable (assuming it is repayable after more than a year)' },
              { fa: 'نمونه‌های دیگر: تسهیلات بلندمدت بانکی، اوراق بدهی و بدهی‌های بلندمدت اجاره', en: 'Other examples: long-term bank loans, bonds and long-term lease liabilities' },
            ],
          },
        },
        { type: 'h', text: { fa: 'یک وام، دو بخش', en: 'One loan, two parts' } },
        {
          type: 'p',
          text: {
            fa: 'یک وام بلندمدت لزوماً همه‌اش غیرجاری نیست. فرض کنید شرکتی در تاریخ ترازنامه 36,000 وام بانکی دارد که ماهی 1,000 بازپرداخت می‌شود (برای سادگی، بهره را کنار می‌گذاریم). اقساط 12 ماه آینده، یعنی 12,000، **حصه جاری** وام است و بدهی جاری گزارش می‌شود؛ بقیه، یعنی 24,000، غیرجاری است.',
            en: 'A long-term loan is not necessarily all non-current. Suppose a company owes 36,000 to the bank at the balance sheet date, repayable at 1,000 a month (ignoring interest for simplicity). The next 12 instalments, 12,000, are the **current portion** and are reported as a current liability; the remaining 24,000 is non-current.',
          },
        },
        {
          type: 'table',
          head: [
            { fa: 'بخش وام', en: 'Part of the loan' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          numericCols: [1],
          rows: [
            [{ fa: 'مانده کل وام', en: 'Total loan balance' }, 36000],
            [{ fa: 'حصه جاری (12 قسط آینده × 1,000)', en: 'Current portion (next 12 instalments × 1,000)' }, 12000],
            [{ fa: 'حصه غیرجاری (24 قسط بعدی)', en: 'Non-current portion (the following 24 instalments)' }, 24000],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: چرا این تفکیک مهم است؟', en: 'In practice: why the split matters' },
          text: {
            fa: 'بانک‌ها و تأمین‌کنندگان پیش از هر چیز می‌پرسند: آیا دارایی‌های جاری برای پرداخت بدهی‌های جاری کافی است؟ پاسخ این پرسش فقط با تفکیک درست جاری و غیرجاری به دست می‌آید. ترتیب ارائه در قالب‌های مختلف فرق می‌کند؛ در بسیاری از صورت‌های مالی امروزی، از جمله قالب‌های مبتنی بر IFRS، ابتدا اقلام غیرجاری می‌آیند و در برخی قالب‌ها ابتدا اقلام جاری. آنچه اهمیت دارد، تفکیک روشن است.',
            en: 'Banks and suppliers ask first: are current assets enough to pay current liabilities? That question can only be answered if current and non-current items are split correctly. The order of presentation varies: many modern statements, including IFRS-based formats, show non-current items first, while others start with current items. What matters is a clear split.',
          },
        },
      ],
    },
    {
      id: 'contra',
      title: { fa: 'حساب‌های کاهنده', en: 'Contra Accounts' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: '**حساب کاهنده** به حساب دیگری وابسته است و مانده‌ای خلاف مانده آن دارد؛ در نتیجه، مبلغ آن حساب را در صورت‌های مالی کاهش می‌دهد و در عین حال، رقم اصلی را نیز قابل مشاهده نگه می‌دارد. نمونه شناخته‌شده آن **استهلاک انباشته** است که در کنار حساب تجهیزات یا ساختمان قرار می‌گیرد. حاصل کسر این دو، **ارزش دفتری** دارایی نام دارد.',
            en: 'A **contra account** is paired with another account and carries the opposite balance, reducing it on the statements while keeping the original figure visible. The classic example is **Accumulated depreciation**, which sits alongside an equipment or buildings account. The difference between the two is the asset’s **book value** (carrying amount).',
          },
        },
        {
          type: 'table',
          caption: { fa: 'نمونه فرضی (خارج از مثال نوا): یک خودروی حمل بار', en: 'Illustration (not part of Nova’s example): a delivery van' },
          head: [
            { fa: 'حساب', en: 'Account' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          numericCols: [1],
          rows: [
            [{ fa: 'وسیله نقلیه: بهای تمام‌شده', en: 'Vehicle: original cost' }, 60000],
            [{ fa: 'کسر می‌شود: استهلاک انباشته', en: 'Less: Accumulated depreciation' }, 12000],
            [{ fa: '**ارزش دفتری**', en: '**Book value (carrying amount)**' }, 48000],
          ],
        },
        {
          type: 'p',
          text: {
            fa: 'چرا استهلاک را مستقیماً از حساب وسیله نقلیه کم نکنیم؟ چون با نگه داشتن بهای تمام‌شده در یک حساب و استهلاک انباشته در حسابی دیگر، هر دو رقم دیده می‌شوند: خواننده می‌فهمد دارایی در اصل چقدر قیمت داشته و تاکنون چه بخشی از آن مصرف شده است. این اطلاعات برای برنامه‌ریزی جایگزینی دارایی و برای محاسبات مالیاتی هم لازم است.',
            en: 'Why not subtract depreciation directly from the Vehicle account? Because keeping the cost in one account and the accumulated depreciation in another keeps both figures visible: the reader sees what the asset originally cost and how much of it has been used up so far. That information is also needed to plan replacements and for tax calculations.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'حساب‌های کاهنده رایج', en: 'Common contra accounts' },
          head: [
            { fa: 'حساب کاهنده', en: 'Contra account' },
            { fa: 'حساب اصلی', en: 'Parent account' },
            { fa: 'چه چیزی را نشان می‌دهد؟', en: 'What it shows' },
          ],
          rows: [
            [
              { fa: 'استهلاک انباشته', en: 'Accumulated depreciation' },
              { fa: 'دارایی‌های ثابت (تجهیزات، ساختمان، وسایل نقلیه)', en: 'Property, plant and equipment' },
              { fa: 'بخشی از بهای دارایی که تاکنون مصرف شده است', en: 'The part of the asset’s cost used up so far' },
            ],
            [
              { fa: 'ذخیره مطالبات مشکوک‌الوصول', en: 'Allowance for doubtful accounts' },
              { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' },
              { fa: 'بخشی از طلب‌ها که احتمالاً وصول نمی‌شود', en: 'The part of receivables not expected to be collected' },
            ],
            [
              { fa: 'برگشت از فروش و تخفیفات', en: 'Sales returns and allowances' },
              { fa: 'فروش', en: 'Sales' },
              { fa: 'کالای برگشتی و تخفیف‌هایی که به مشتریان داده شده', en: 'Goods returned and discounts given to customers' },
            ],
            [
              { fa: 'برداشت', en: 'Drawings' },
              { fa: 'سرمایه', en: 'Capital' },
              { fa: 'آنچه مالک در طول دوره برای خودش برداشته است', en: 'What the owner took out during the period' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          text: {
            fa: 'یک فروشگاه 50,000 از مشتریان طلب دارد، اما برآورد می‌کند 2,000 از آن وصول نشود. در ترازنامه، حساب‌های دریافتنی 50,000 نشان داده می‌شود، ذخیره مطالبات مشکوک‌الوصول 2,000 از آن کسر می‌شود و خالص 48,000 گزارش می‌شود. جزئیات این حساب را در درس دریافتنی‌ها و چک‌ها می‌بینید.',
            en: 'A shop is owed 50,000 by customers but expects 2,000 of it not to be collected. On the balance sheet, Accounts receivable is shown at 50,000, the 2,000 Allowance for doubtful accounts is deducted, and a net 48,000 is reported. You will meet this account in detail in the lesson on receivables and cheques.',
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
              { fa: 'دارایی‌ها (همراه با حساب‌های کاهنده آن‌ها)، بدهی‌ها و سرمایه', en: 'Assets (with their contra accounts), liabilities and capital' },
              { fa: 'مانده آن‌ها به دوره بعد منتقل می‌شود', en: 'Balances carry forward to the next period' },
              { fa: 'در ترازنامه منعکس می‌شوند', en: 'Appear on the balance sheet' },
              { fa: 'در نوا: موجودی نقد ماه دوم را با مانده 46,300 آغاز می‌کند', en: 'At Nova: Cash starts month two with its 46,300 balance' },
            ],
          },
          right: {
            title: { fa: 'حساب‌های موقت (اسمی)', en: 'Temporary (nominal) accounts' },
            items: [
              { fa: 'درآمدها، هزینه‌ها و برداشت', en: 'Revenue, expenses and drawings' },
              { fa: 'فعالیت یک دوره را اندازه می‌گیرند', en: 'Measure the activity of one period only' },
              { fa: 'در پایان دوره به حساب سرمایه بسته می‌شوند و دوره بعد را با مانده صفر آغاز می‌کنند', en: 'Closed into capital at period end, so they start the next period at zero' },
              { fa: 'در نوا: درآمد خدمات 12,000 به ماه دوم منتقل نمی‌شود', en: 'At Nova: the 12,000 of service revenue does not carry into month two' },
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
            fa: 'انتقال مانده حساب‌های موقت به حساب سرمایه با **ثبت‌های بستن حساب‌ها** انجام می‌شود که در درس بستن حساب‌ها و چرخه حسابداری با آن آشنا خواهید شد.',
            en: 'Temporary balances are transferred into capital through **closing entries**, which you will study in the lesson on closing and the accounting cycle.',
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
            { fa: '`1xxx` دارایی‌ها (1000 تا 1499 جاری، 1500 تا 1999 غیرجاری)', en: '`1xxx` Assets (1000 to 1499 current, 1500 to 1999 non-current)' },
            { fa: '`2xxx` بدهی‌ها (2000 تا 2499 جاری، 2500 تا 2999 غیرجاری)', en: '`2xxx` Liabilities (2000 to 2499 current, 2500 to 2999 non-current)' },
            { fa: '`3xxx` حقوق مالکانه', en: '`3xxx` Equity' },
            { fa: '`4xxx` درآمدها', en: '`4xxx` Revenue' },
            { fa: '`5xxx` هزینه‌ها', en: '`5xxx` Expenses' },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'استودیو طراحی نوا: کدینگ کامل حساب‌ها', en: 'Nova Design Studio: the full chart of accounts' },
          head: [
            { fa: 'کد', en: 'Code' },
            { fa: 'عنوان حساب', en: 'Account' },
            { fa: 'طبقه', en: 'Classification' },
            { fa: 'صورت مالی', en: 'Statement' },
          ],
          rows: [
            acct('1010', 'موجودی نقد', 'Cash', 'دارایی جاری', 'Current asset', 'ترازنامه', 'Balance sheet'),
            acct('1020', 'حساب‌های دریافتنی', 'Accounts receivable', 'دارایی جاری', 'Current asset', 'ترازنامه', 'Balance sheet'),
            acct('1030', 'ملزومات', 'Supplies', 'دارایی جاری', 'Current asset', 'ترازنامه', 'Balance sheet'),
            acct('1040', 'پیش‌پرداخت بیمه', 'Prepaid insurance', 'دارایی جاری', 'Current asset', 'ترازنامه', 'Balance sheet'),
            acct('1510', 'تجهیزات', 'Equipment', 'دارایی غیرجاری', 'Non-current asset', 'ترازنامه', 'Balance sheet'),
            acct('1520', 'استهلاک انباشته تجهیزات', 'Accumulated depreciation', 'کاهنده دارایی', 'Contra asset', 'ترازنامه', 'Balance sheet'),
            acct('2010', 'حساب‌های پرداختنی', 'Accounts payable', 'بدهی جاری', 'Current liability', 'ترازنامه', 'Balance sheet'),
            acct('2020', 'حقوق پرداختنی', 'Salaries payable', 'بدهی جاری', 'Current liability', 'ترازنامه', 'Balance sheet'),
            acct('2030', 'بهره پرداختنی', 'Interest payable', 'بدهی جاری', 'Current liability', 'ترازنامه', 'Balance sheet'),
            acct('2040', 'پیش‌دریافت درآمد', 'Unearned revenue', 'بدهی جاری', 'Current liability', 'ترازنامه', 'Balance sheet'),
            acct('2510', 'وام پرداختنی', 'Loan payable', 'بدهی غیرجاری', 'Non-current liability', 'ترازنامه', 'Balance sheet'),
            acct('3010', 'سرمایه سارا', 'Capital (Sara)', 'حقوق مالکانه', 'Equity', 'ترازنامه', 'Balance sheet'),
            acct('3020', 'برداشت سارا', 'Drawings (Sara)', 'کاهنده حقوق مالکانه', 'Contra equity', 'صورت تغییرات در حقوق مالکانه', 'Statement of changes in equity'),
            acct('3900', 'خلاصه سود و زیان', 'Income summary', 'حساب موقت بستن', 'Temporary closing account', 'فقط هنگام بستن حساب‌ها', 'Used only when closing'),
            acct('4010', 'درآمد خدمات', 'Service revenue', 'درآمد', 'Revenue', 'صورت سود و زیان', 'Income statement'),
            acct('5010', 'هزینه اجاره', 'Rent expense', 'هزینه', 'Expense', 'صورت سود و زیان', 'Income statement'),
            acct('5020', 'هزینه حقوق و دستمزد', 'Salaries expense', 'هزینه', 'Expense', 'صورت سود و زیان', 'Income statement'),
            acct('5030', 'هزینه ملزومات', 'Supplies expense', 'هزینه', 'Expense', 'صورت سود و زیان', 'Income statement'),
            acct('5040', 'هزینه بیمه', 'Insurance expense', 'هزینه', 'Expense', 'صورت سود و زیان', 'Income statement'),
            acct('5050', 'هزینه استهلاک', 'Depreciation expense', 'هزینه', 'Expense', 'صورت سود و زیان', 'Income statement'),
            acct('5060', 'هزینه بهره', 'Interest expense', 'هزینه', 'Expense', 'صورت سود و زیان', 'Income statement'),
            acct('5070', 'هزینه آب، برق و اینترنت', 'Utilities expense', 'هزینه', 'Expense', 'صورت سود و زیان', 'Income statement'),
            acct('5080', 'هزینه تبلیغات', 'Advertising expense', 'هزینه', 'Expense', 'صورت سود و زیان', 'Income statement'),
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'جای خالی بگذارید', en: 'Leave gaps' },
          text: {
            fa: 'به فاصله ده‌تایی میان کدها دقت کنید؛ هر حساب تازه بدون تغییر کدهای موجود جای خودش را پیدا می‌کند. برخی از این حساب‌ها، مانند حقوق پرداختنی (2020)، هزینه استهلاک (5050) یا استهلاک انباشته (1520)، در معاملات روزانه ماه نخست مانده‌ای ندارند و در پایان ماه، هنگام ثبت‌های اصلاحی، به کار می‌روند. حساب خلاصه سود و زیان (3900) فقط هنگام بستن حساب‌ها استفاده می‌شود.',
            en: 'Notice the steps of ten between codes: any new account can be slotted into place without renumbering anything. Some of these accounts, such as Salaries payable (2020), Depreciation expense (5050) or Accumulated depreciation (1520), have no balance from the month’s day-to-day transactions; they come into play at month end with the adjusting entries. Income summary (3900) is used only when closing the books.',
          },
        },
        { type: 'h', text: { fa: 'چگونه یک کدینگ طراحی کنیم؟', en: 'How to design a chart of accounts' } },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'فعالیت‌ها را بشناسید', en: 'Understand the activities' },
              text: {
                fa: 'کسب‌وکار چه می‌فروشد، چه می‌خرد، چه دارایی‌هایی دارد و از کجا تأمین مالی می‌شود؟',
                en: 'What does the business sell and buy, what assets does it hold, and how is it financed?',
              },
            },
            {
              title: { fa: 'حساب‌ها را زیر پنج نوع فهرست کنید', en: 'List the accounts under the five types' },
              text: {
                fa: 'برای هر فعالیت تکرارشونده، حساب مناسب را در نوع درست بنویسید.',
                en: 'For every recurring activity, write down the right account under the right type.',
              },
            },
            {
              title: { fa: 'محدوده کد بگذارید', en: 'Assign code ranges' },
              text: {
                fa: '1 دارایی، 2 بدهی، 3 حقوق مالکانه، 4 درآمد و 5 هزینه؛ و درون دارایی‌ها و بدهی‌ها، جاری پیش از غیرجاری.',
                en: '1 assets, 2 liabilities, 3 equity, 4 revenue and 5 expenses; and within assets and liabilities, current before non-current.',
              },
            },
            {
              title: { fa: 'فاصله بگذارید', en: 'Leave gaps' },
              text: { fa: 'کدها را ده‌تایی جلو ببرید تا حساب‌های آینده جا داشته باشند.', en: 'Number in steps of ten so future accounts have room.' },
            },
            {
              title: { fa: 'نام‌ها را روشن و یکدست کنید', en: 'Use clear, consistent names' },
              text: {
                fa: 'مثلاً همه هزینه‌ها با «هزینه» شروع شوند؛ تا حد امکان از حساب‌های مبهمی مانند «متفرقه» پرهیز کنید.',
                en: 'For example, start every expense account with “expense”; avoid vague accounts such as “miscellaneous” wherever you can.',
              },
            },
            {
              title: { fa: 'تغییرات را کنترل کنید', en: 'Control changes' },
              text: {
                fa: 'افتتاح حساب تازه فقط با تأیید مسئول حسابداری؛ وگرنه کدینگ به‌سرعت شلوغ و ناهمگون می‌شود.',
                en: 'Only the chief accountant approves new accounts; otherwise the chart quickly becomes cluttered and inconsistent.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'iranian-coding',
      title: { fa: 'نگاهی به کدینگ سه‌سطحی در ایران', en: 'A First Look at Three-Level Coding in Iran' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'در عمل حسابداری ایران و در نرم‌افزارهای ایرانی، حساب‌ها معمولاً در سطح‌های پی‌درپی سازمان‌دهی می‌شوند: **گروه حساب** (مانند دارایی‌های جاری)، **حساب کل** (مانند موجودی نقد)، **حساب معین** (مانند بانک‌ها) و **حساب تفصیلی** (مانند یک حساب بانکی یا یک مشتری مشخص). به این ساختار معمولاً «کدینگ سه‌سطحی» (کل، معین، تفصیلی) می‌گویند و هر سطح، جزئیات بیشتری را زیر سطح بالاتر نشان می‌دهد.',
            en: 'In Iranian practice and Iranian accounting software, accounts are usually organized in successive levels: the **account group** (such as current assets), the **general account** (such as cash), the **subsidiary account** (such as bank accounts) and the **detail account** (such as one particular bank account or customer). This structure is usually called “three-level coding” (general, subsidiary, detail), and each level adds detail beneath the one above it.',
          },
        },
        {
          type: 'table',
          caption: { fa: 'یک نمونه ساده (تعداد ارقام هر سطح در نرم‌افزارها متفاوت است)', en: 'A simple illustration (the number of digits per level varies between packages)' },
          head: [
            { fa: 'سطح', en: 'Level' },
            { fa: 'نقش', en: 'Role' },
            { fa: 'کد نمونه', en: 'Sample code' },
            { fa: 'عنوان نمونه', en: 'Sample title' },
          ],
          rows: [
            [
              { fa: 'گروه', en: 'Group' },
              { fa: 'دسته‌بندی کلان در صورت‌های مالی', en: 'A broad category in the statements' },
              { fa: '1', en: '1' },
              { fa: 'دارایی‌های جاری', en: 'Current assets' },
            ],
            [
              { fa: 'کل', en: 'General account' },
              { fa: 'حسابی که در دفتر کل و صورت‌های مالی می‌آید', en: 'The account shown in the general ledger and the statements' },
              { fa: '11', en: '11' },
              { fa: 'موجودی نقد', en: 'Cash' },
            ],
            [
              { fa: 'معین', en: 'Subsidiary account' },
              { fa: 'تفکیک حساب کل به اجزای اصلی', en: 'Splits the general account into its main parts' },
              { fa: '1102', en: '1102' },
              { fa: 'بانک‌ها', en: 'Bank accounts' },
            ],
            [
              { fa: 'تفصیلی', en: 'Detail account' },
              { fa: 'ریزترین سطح: یک حساب بانکی، یک مشتری یا یک پروژه', en: 'The finest level: one bank account, customer or project' },
              { fa: '0001', en: '0001' },
              { fa: 'حساب جاری بانک الف', en: 'Current account at Bank A' },
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'نوا در سه سطح', en: 'Nova at three levels' },
          text: {
            fa: 'اگر نوا از یک نرم‌افزار ایرانی استفاده کند، طلب روز 12 را می‌توان چنین ثبت کرد: حساب کل «حساب‌های دریافتنی»، حساب معین «مشتریان طراحی» و حساب تفصیلی «نام همان مشتری». در ترازنامه فقط جمع حساب کل (1,500 در پایان ماه) دیده می‌شود، اما حسابدار هر لحظه می‌تواند ببیند هر مشتری دقیقاً چقدر بدهکار است.',
            en: 'If Nova used Iranian software, the Day 12 receivable could be coded as general account “Accounts receivable”, subsidiary account “Design clients” and detail account “that client’s name”. The balance sheet shows only the general-account total (1,500 at month end), but the accountant can see at any moment exactly how much each client owes.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'در عمل: تفصیلی شناور و دفاتر قانونی', en: 'In practice: floating detail accounts and legal books' },
          text: {
            fa: 'در بسیاری از نرم‌افزارها، حساب‌های تفصیلی «شناور»ند: یک کد تفصیلی برای یک شخص (مثلاً یک شرکت) تعریف می‌شود و می‌توان آن را زیر چند حساب معین، مانند دریافتنی، پرداختنی یا پیش‌دریافت، به کار برد. دفاتر قانونی معمولاً در سطح حساب کل نگهداری می‌شوند و جزئیات معین و تفصیلی در نرم‌افزار و دفاتر معین می‌ماند.',
            en: 'In many packages, detail accounts are “floating”: one detail code is defined for a party (a company, say) and can be used under several subsidiary accounts, such as receivables, payables or customer advances. Legal books are usually kept at the general-account level, while subsidiary and detail information stays in the software and the subsidiary ledgers.',
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          text: {
            fa: 'طراحی کامل کدینگ سه‌سطحی، تعداد ارقام هر سطح و صدور سند با این کدها را در درس اسناد حسابداری و کدینگ به‌طور کامل یاد می‌گیرید.',
            en: 'You will learn the full design of three-level coding, the number of digits at each level and how vouchers are issued with these codes in the lesson on vouchers and coding.',
          },
        },
      ],
    },
    {
      id: 'practice',
      title: { fa: 'اشتباهات رایج و تمرین‌ها', en: 'Common Mistakes and Exercises' },
      blocks: [
        { type: 'h', text: { fa: 'اشتباهات رایج', en: 'Common mistakes' } },
        {
          type: 'list',
          items: [
            {
              fa: '**یکی گرفتن «پیش‌پرداخت» و «پیش‌دریافت».** پیش‌پرداخت (پول داده‌ایم و خدمت را بعداً می‌گیریم) دارایی است؛ پیش‌دریافت (پول گرفته‌ایم و کار را بعداً انجام می‌دهیم) بدهی است.',
              en: '**Mixing up “prepaid” and “unearned”.** A prepayment (we paid; the service comes later) is an asset; unearned revenue (we were paid; the work comes later) is a liability.',
            },
            {
              fa: '**هزینه دانستن هر خرید.** خرید تجهیزات یا ملزومات ابتدا دارایی است؛ فقط بخشی که مصرف می‌شود به هزینه می‌رود.',
              en: '**Treating every purchase as an expense.** Equipment or supplies are assets when bought; only the part used up becomes an expense.',
            },
            {
              fa: '**غیرجاری دانستن کل یک وام بلندمدت.** اقساطی که ظرف 12 ماه آینده سررسید می‌شوند، حصه جاری‌اند و بدهی جاری گزارش می‌شوند.',
              en: '**Treating a whole long-term loan as non-current.** Instalments due within the next 12 months are the current portion and are reported as current liabilities.',
            },
            {
              fa: '**کم کردن مستقیم استهلاک از حساب دارایی.** بهای تمام‌شده در حساب اصلی می‌ماند و استهلاک در حساب کاهنده جمع می‌شود.',
              en: '**Subtracting depreciation directly from the asset account.** The cost stays in the main account and depreciation builds up in the contra account.',
            },
            {
              fa: '**ساختن حساب‌های تکراری یا مبهم.** «هزینه‌های متفرقه» نباید انبار همه‌چیز شود؛ اگر قلمی تکرار می‌شود، حساب خودش را می‌خواهد.',
              en: '**Creating duplicate or vague accounts.** “Miscellaneous expense” must not become a dumping ground; if an item keeps recurring, it deserves its own account.',
            },
            {
              fa: '**تغییر کد حساب‌ها در میانه سال.** مقایسه دوره‌ها را دشوار می‌کند؛ حساب تازه را در جای خالی بگذارید، نه با شماره‌گذاری دوباره.',
              en: '**Renumbering accounts mid-year.** It makes periods hard to compare; slot new accounts into the gaps instead of renumbering.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'برداشت، هزینه نیست', en: 'Drawings are not an expense' },
          text: {
            fa: 'برداشت حقوق مالکانه را کاهش می‌دهد، اما حساب هزینه نیست و در صورت سود و زیان نمی‌آید. در کدینگ، آن را در گروه حقوق مالکانه (`3xxx`) بگذارید، نه در گروه هزینه‌ها (`5xxx`).',
            en: 'Drawings reduce equity, but they are not an expense and never appear on the income statement. In the chart of accounts, put them in the equity group (`3xxx`), not among expenses (`5xxx`).',
          },
        },
        { type: 'h', text: { fa: 'تمرین‌ها', en: 'Exercises' } },
        {
          type: 'exercise',
          title: { fa: 'حساب‌های یک لوازم‌التحریر را طبقه‌بندی کنید', en: 'Classify a stationery shop’s accounts' },
          difficulty: 'easy',
          problem: {
            fa: '«لوازم‌التحریر مهر» حساب‌های زیر را دارد. نوع هر حساب (دارایی، بدهی، حقوق مالکانه، درآمد یا هزینه) و صورت مالی‌ای را که در آن گزارش می‌شود مشخص کنید.',
            en: 'Mehr Stationery has the accounts below. State each account’s type (asset, liability, equity, revenue or expense) and the statement in which it is reported.',
          },
          given: {
            head: [
              { fa: 'ردیف', en: '#' },
              { fa: 'حساب', en: 'Account' },
            ],
            rows: [
              [1, { fa: 'موجودی کالا', en: 'Inventory' }],
              [2, { fa: 'اسناد پرداختنی', en: 'Notes payable' }],
              [3, { fa: 'فروش', en: 'Sales' }],
              [4, { fa: 'هزینه حمل', en: 'Delivery expense' }],
              [5, { fa: 'پیش‌پرداخت اجاره', en: 'Prepaid rent' }],
              [6, { fa: 'پیش‌دریافت از مشتریان', en: 'Customer advances (unearned revenue)' }],
              [7, { fa: 'وام بلندمدت بانکی', en: 'Long-term bank loan' }],
              [8, { fa: 'برداشت', en: 'Drawings' }],
              [9, { fa: 'هزینه آب و برق', en: 'Utilities expense' }],
              [10, { fa: 'ساختمان', en: 'Building' }],
              [11, { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }],
              [12, { fa: 'درآمد سود سپرده بانکی', en: 'Interest income on bank deposits' }],
            ],
          },
          hint: {
            fa: 'از پنج پرسش طبقه‌بندی و سرنخ‌های نام حساب کمک بگیرید.',
            en: 'Use the five classification questions and the clues in each name.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'ردیف', en: '#' },
                { fa: 'نوع', en: 'Type' },
                { fa: 'صورت مالی', en: 'Statement' },
              ],
              rows: [
                [1, { fa: 'دارایی (جاری)', en: 'Asset (current)' }, { fa: 'ترازنامه', en: 'Balance sheet' }],
                [2, { fa: 'بدهی', en: 'Liability' }, { fa: 'ترازنامه', en: 'Balance sheet' }],
                [3, { fa: 'درآمد', en: 'Revenue' }, { fa: 'صورت سود و زیان', en: 'Income statement' }],
                [4, { fa: 'هزینه', en: 'Expense' }, { fa: 'صورت سود و زیان', en: 'Income statement' }],
                [5, { fa: 'دارایی (جاری)', en: 'Asset (current)' }, { fa: 'ترازنامه', en: 'Balance sheet' }],
                [6, { fa: 'بدهی (جاری)', en: 'Liability (current)' }, { fa: 'ترازنامه', en: 'Balance sheet' }],
                [7, { fa: 'بدهی (عمدتاً غیرجاری)', en: 'Liability (mainly non-current)' }, { fa: 'ترازنامه', en: 'Balance sheet' }],
                [8, { fa: 'حقوق مالکانه (کاهنده)', en: 'Equity (reduction)' }, { fa: 'صورت تغییرات در حقوق مالکانه', en: 'Statement of changes in equity' }],
                [9, { fa: 'هزینه', en: 'Expense' }, { fa: 'صورت سود و زیان', en: 'Income statement' }],
                [10, { fa: 'دارایی (غیرجاری)', en: 'Asset (non-current)' }, { fa: 'ترازنامه', en: 'Balance sheet' }],
                [11, { fa: 'دارایی (جاری)', en: 'Asset (current)' }, { fa: 'ترازنامه', en: 'Balance sheet' }],
                [12, { fa: 'درآمد', en: 'Revenue' }, { fa: 'صورت سود و زیان', en: 'Income statement' }],
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'ردیف‌های 5 و 6 را با هم مقایسه کنید: در «پیش‌پرداخت اجاره» فروشگاه پول داده و حق استفاده دارد (دارایی)؛ در «پیش‌دریافت از مشتریان» فروشگاه پول گرفته و هنوز کالا بدهکار است (بدهی).',
                en: 'Compare rows 5 and 6: with prepaid rent the shop has paid and holds a right of use (an asset); with customer advances the shop has been paid and still owes the goods (a liability).',
              },
            },
          ],
          answer: {
            fa: 'دارایی: 1، 5، 10، 11؛ بدهی: 2، 6، 7؛ حقوق مالکانه: 8؛ درآمد: 3، 12؛ هزینه: 4، 9.',
            en: 'Assets: 1, 5, 10, 11; liabilities: 2, 6, 7; equity: 8; revenue: 3, 12; expenses: 4, 9.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'جاری یا غیرجاری؟', en: 'Current or non-current?' },
          difficulty: 'medium',
          problem: {
            fa: 'اقلام زیر در تاریخ ترازنامه «پخش لبنیات گلستان» وجود دارد. (الف) هر قلم را جاری یا غیرجاری طبقه‌بندی کنید. (ب) جمع دارایی‌های جاری، دارایی‌های غیرجاری، بدهی‌های جاری و بدهی‌های غیرجاری را حساب کنید. (پ) درباره نقدشوندگی شرکت چه می‌گویید؟ (برای سادگی، بهره وام را نادیده بگیرید.)',
            en: 'Golestan Dairy Distribution has the items below at its balance sheet date. (a) Classify each item as current or non-current. (b) Compute total current assets, non-current assets, current liabilities and non-current liabilities. (c) What do you conclude about the company’s liquidity? (Ignore interest on the loan for simplicity.)',
          },
          given: {
            head: [
              { fa: 'قلم', en: 'Item' },
              { fa: 'مبلغ', en: 'Amount' },
              { fa: 'توضیح', en: 'Note' },
            ],
            numericCols: [1],
            rows: [
              [{ fa: 'موجودی کالا', en: 'Inventory' }, 14000, { fa: 'ظرف 3 ماه فروخته می‌شود', en: 'Will be sold within 3 months' }],
              [{ fa: 'کامیون یخچال‌دار', en: 'Refrigerated truck' }, 45000, { fa: '5 سال استفاده می‌شود', en: 'Will be used for 5 years' }],
              [{ fa: 'چک دریافتی از مشتری', en: 'Cheque received from a customer' }, 6000, { fa: 'سررسید 2 ماه دیگر', en: 'Due in 2 months' }],
              [{ fa: 'پیش‌پرداخت اجاره انبار', en: 'Prepaid warehouse rent' }, 3600, { fa: 'برای 6 ماه آینده', en: 'For the next 6 months' }],
              [{ fa: 'وام بانکی', en: 'Bank loan' }, 54000, { fa: 'ماهی 1,500 بازپرداخت می‌شود (36 قسط باقی‌مانده)', en: 'Repaid at 1,500 a month (36 instalments left)' }],
              [{ fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, 7500, { fa: 'سررسید 30 روزه', en: 'Due in 30 days' }],
              [{ fa: 'پیش‌دریافت از یک فروشگاه', en: 'Advance received from a shop' }, 2000, { fa: 'کالا ماه آینده تحویل می‌شود', en: 'Goods to be delivered next month' }],
            ],
          },
          hint: {
            fa: 'وام را دو تکه کنید: اقساط 12 ماه آینده جاری است و بقیه غیرجاری.',
            en: 'Split the loan in two: the next 12 instalments are current and the rest is non-current.',
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'قلم', en: 'Item' },
                { fa: 'طبقه', en: 'Classification' },
                { fa: 'مبلغ', en: 'Amount' },
              ],
              numericCols: [2],
              rows: [
                [{ fa: 'موجودی کالا', en: 'Inventory' }, { fa: 'دارایی جاری', en: 'Current asset' }, 14000],
                [{ fa: 'چک دریافتی', en: 'Cheque received' }, { fa: 'دارایی جاری', en: 'Current asset' }, 6000],
                [{ fa: 'پیش‌پرداخت اجاره', en: 'Prepaid rent' }, { fa: 'دارایی جاری', en: 'Current asset' }, 3600],
                [{ fa: 'کامیون', en: 'Truck' }, { fa: 'دارایی غیرجاری', en: 'Non-current asset' }, 45000],
                [{ fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, { fa: 'بدهی جاری', en: 'Current liability' }, 7500],
                [{ fa: 'پیش‌دریافت', en: 'Customer advance' }, { fa: 'بدهی جاری', en: 'Current liability' }, 2000],
                [{ fa: 'وام: حصه جاری (12 × 1,500)', en: 'Loan: current portion (12 × 1,500)' }, { fa: 'بدهی جاری', en: 'Current liability' }, 18000],
                [{ fa: 'وام: حصه غیرجاری (24 × 1,500)', en: 'Loan: non-current portion (24 × 1,500)' }, { fa: 'بدهی غیرجاری', en: 'Non-current liability' }, 36000],
              ],
            },
            {
              type: 'table',
              caption: { fa: 'جمع‌ها', en: 'Totals' },
              head: [
                { fa: 'گروه', en: 'Group' },
                { fa: 'محاسبه', en: 'Working' },
                { fa: 'مبلغ', en: 'Amount' },
              ],
              numericCols: [2],
              rows: [
                [{ fa: 'دارایی‌های جاری', en: 'Current assets' }, { fa: '14,000 + 6,000 + 3,600', en: '14,000 + 6,000 + 3,600' }, 23600],
                [{ fa: 'دارایی‌های غیرجاری', en: 'Non-current assets' }, { fa: 'کامیون', en: 'Truck' }, 45000],
                [{ fa: 'بدهی‌های جاری', en: 'Current liabilities' }, { fa: '7,500 + 2,000 + 18,000', en: '7,500 + 2,000 + 18,000' }, 27500],
                [{ fa: 'بدهی‌های غیرجاری', en: 'Non-current liabilities' }, { fa: 'حصه غیرجاری وام', en: 'Non-current part of the loan' }, 36000],
              ],
            },
            {
              type: 'callout',
              tone: 'warning',
              text: {
                fa: 'بدهی‌های جاری (27,500) از دارایی‌های جاری (23,600) بیشتر است؛ یعنی حتی اگر همه دارایی‌های جاری به نقد تبدیل شوند، 3,900 برای پرداخت بدهی‌های یک سال آینده کم می‌آید. این زنگ خطر نقدینگی فقط با تفکیک درست جاری و غیرجاری دیده می‌شود؛ اگر کل وام غیرجاری گزارش می‌شد، بدهی جاری فقط 9,500 به نظر می‌رسید.',
                en: 'Current liabilities (27,500) exceed current assets (23,600): even if every current asset were turned into cash, 3,900 would be missing to pay the debts of the coming year. This liquidity warning only shows up when current and non-current items are split correctly; had the whole loan been reported as non-current, current liabilities would have looked like just 9,500.',
              },
            },
          ],
          answer: {
            fa: 'دارایی‌های جاری 23,600؛ دارایی‌های غیرجاری 45,000؛ بدهی‌های جاری 27,500 (شامل 18,000 حصه جاری وام)؛ بدهی‌های غیرجاری 36,000.',
            en: 'Current assets 23,600; non-current assets 45,000; current liabilities 27,500 (including the 18,000 current portion of the loan); non-current liabilities 36,000.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'ارزش دفتری با حساب‌های کاهنده', en: 'Book values with contra accounts' },
          difficulty: 'medium',
          problem: {
            fa: 'مانده برخی حساب‌های «چاپخانه رنگین» در پایان سال در جدول آمده است. (الف) ارزش دفتری دستگاه چاپ و رایانه‌ها و خالص حساب‌های دریافتنی را حساب کنید. (ب) اگر استهلاک سالانه دستگاه چاپ 9,000 باشد، این دستگاه چند سال است که استفاده می‌شود؟',
            en: 'Some of Rangin Print House’s year-end balances are shown below. (a) Compute the book value of the printing press and the computers, and net accounts receivable. (b) If the press is depreciated by 9,000 a year, how many years has it been in use?',
          },
          given: {
            head: [
              { fa: 'حساب', en: 'Account' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            numericCols: [1],
            rows: [
              [{ fa: 'دستگاه چاپ (بهای تمام‌شده)', en: 'Printing press (cost)' }, 90000],
              [{ fa: 'استهلاک انباشته دستگاه چاپ', en: 'Accumulated depreciation: press' }, 27000],
              [{ fa: 'رایانه‌ها (بهای تمام‌شده)', en: 'Computers (cost)' }, 24000],
              [{ fa: 'استهلاک انباشته رایانه‌ها', en: 'Accumulated depreciation: computers' }, 8000],
              [{ fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, 40000],
              [{ fa: 'ذخیره مطالبات مشکوک‌الوصول', en: 'Allowance for doubtful accounts' }, 1500],
            ],
          },
          solution: [
            {
              type: 'table',
              head: [
                { fa: 'قلم', en: 'Item' },
                { fa: 'مبلغ حساب اصلی', en: 'Parent balance' },
                { fa: 'کسر می‌شود: حساب کاهنده', en: 'Less: contra account' },
                { fa: 'خالص', en: 'Net' },
              ],
              numericCols: [1, 2, 3],
              rows: [
                [{ fa: 'دستگاه چاپ', en: 'Printing press' }, 90000, 27000, 63000],
                [{ fa: 'رایانه‌ها', en: 'Computers' }, 24000, 8000, 16000],
                [{ fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, 40000, 1500, 38500],
              ],
            },
            {
              type: 'formula',
              text: {
                fa: 'سال‌های استفاده = استهلاک انباشته ÷ استهلاک سالانه = 27,000 ÷ 9,000 = 3',
                en: 'Years in use = Accumulated depreciation ÷ Annual depreciation = 27,000 ÷ 9,000 = 3',
              },
              note: {
                fa: 'استهلاک انباشته، جمع استهلاک همه سال‌های گذشته است.',
                en: 'Accumulated depreciation is the sum of the depreciation of every past year.',
              },
            },
            {
              type: 'callout',
              tone: 'info',
              text: {
                fa: 'حساب‌های کاهنده هیچ پولی کنار نمی‌گذارند؛ فقط نشان می‌دهند چه بخشی از بهای دارایی مصرف شده یا چه بخشی از طلب‌ها احتمالاً وصول نمی‌شود.',
                en: 'Contra accounts set no cash aside; they only show how much of an asset’s cost has been used up, or how much of the receivables is unlikely to be collected.',
              },
            },
          ],
          answer: {
            fa: 'دستگاه چاپ 63,000؛ رایانه‌ها 16,000؛ خالص دریافتنی‌ها 38,500؛ دستگاه چاپ 3 سال استفاده شده است.',
            en: 'Printing press 63,000; computers 16,000; net receivables 38,500; the press has been used for 3 years.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'چه چیزی به سال بعد می‌رود؟', en: 'What carries forward to next year?' },
          difficulty: 'medium',
          problem: {
            fa: 'مانده حساب‌های «مشاوره مدیریت پویا» در پایان سال و پیش از بستن حساب‌ها در جدول آمده است. (الف) هر حساب را دائمی یا موقت مشخص کنید. (ب) سود خالص سال را حساب کنید. (پ) مانده سرمایه پس از بستن حساب‌ها چقدر می‌شود؟ (ت) نشان دهید حساب‌هایی که به سال بعد می‌روند در معادله حسابداری صدق می‌کنند.',
            en: 'Pouya Management Consulting’s year-end balances, before closing, are shown below. (a) Mark each account as permanent or temporary. (b) Compute net income for the year. (c) What is the capital balance after closing? (d) Show that the accounts carried into next year satisfy the accounting equation.',
          },
          given: {
            head: [
              { fa: 'حساب', en: 'Account' },
              { fa: 'مبلغ', en: 'Amount' },
            ],
            numericCols: [1],
            rows: [
              [{ fa: 'موجودی نقد', en: 'Cash' }, 18000],
              [{ fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, 7000],
              [{ fa: 'تجهیزات', en: 'Equipment' }, 30000],
              [{ fa: 'استهلاک انباشته تجهیزات', en: 'Accumulated depreciation' }, 6000],
              [{ fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, 4000],
              [{ fa: 'سرمایه (ابتدای سال)', en: 'Capital (start of year)' }, 30000],
              [{ fa: 'برداشت', en: 'Drawings' }, 5000],
              [{ fa: 'درآمد مشاوره', en: 'Consulting revenue' }, 60000],
              [{ fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' }, 25000],
              [{ fa: 'هزینه اجاره', en: 'Rent expense' }, 12000],
              [{ fa: 'هزینه آب، برق و تلفن', en: 'Utilities expense' }, 3000],
            ],
          },
          solution: [
            {
              type: 'compare',
              left: {
                title: { fa: 'دائمی', en: 'Permanent' },
                items: [
                  { fa: 'موجودی نقد، حساب‌های دریافتنی، تجهیزات', en: 'Cash, Accounts receivable, Equipment' },
                  { fa: 'استهلاک انباشته (کاهنده دارایی)', en: 'Accumulated depreciation (contra asset)' },
                  { fa: 'حساب‌های پرداختنی، سرمایه', en: 'Accounts payable, Capital' },
                ],
              },
              right: {
                title: { fa: 'موقت', en: 'Temporary' },
                items: [
                  { fa: 'درآمد مشاوره', en: 'Consulting revenue' },
                  { fa: 'هزینه حقوق، هزینه اجاره، هزینه آب و برق', en: 'Salaries, rent and utilities expense' },
                  { fa: 'برداشت', en: 'Drawings' },
                ],
              },
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'سود خالص', en: 'Net income' },
                  text: {
                    fa: 'هزینه‌ها = 25,000 + 12,000 + 3,000 = 40,000؛ سود خالص = 60,000 − 40,000 = 20,000.',
                    en: 'Expenses = 25,000 + 12,000 + 3,000 = 40,000; net income = 60,000 − 40,000 = 20,000.',
                  },
                },
                {
                  title: { fa: 'سرمایه پس از بستن', en: 'Capital after closing' },
                  text: { fa: '30,000 + 20,000 − 5,000 = 45,000', en: '30,000 + 20,000 − 5,000 = 45,000' },
                },
              ],
            },
            {
              type: 'table',
              caption: { fa: 'حساب‌هایی که به سال بعد می‌روند', en: 'The accounts carried into next year' },
              head: [
                { fa: 'حساب', en: 'Account' },
                { fa: 'مبلغ', en: 'Amount' },
              ],
              numericCols: [1],
              rows: [
                [{ fa: 'موجودی نقد', en: 'Cash' }, 18000],
                [{ fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, 7000],
                [{ fa: 'تجهیزات', en: 'Equipment' }, 30000],
                [{ fa: 'کسر می‌شود: استهلاک انباشته', en: 'Less: accumulated depreciation' }, 6000],
                [{ fa: '**جمع دارایی‌ها**', en: '**Total assets**' }, 49000],
                [{ fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, 4000],
                [{ fa: 'سرمایه پس از بستن', en: 'Capital after closing' }, 45000],
                [{ fa: '**جمع بدهی‌ها و حقوق مالکانه**', en: '**Total liabilities and equity**' }, 49000],
              ],
            },
          ],
          answer: {
            fa: 'سود خالص 20,000؛ سرمایه پس از بستن 45,000؛ دارایی‌ها 49,000 = بدهی‌ها 4,000 + سرمایه 45,000.',
            en: 'Net income 20,000; capital after closing 45,000; Assets 49,000 = Liabilities 4,000 + Capital 45,000.',
          },
        },
        {
          type: 'exercise',
          title: { fa: 'کدینگ یک کسب‌وکار تازه را بسازید', en: 'Build a chart of accounts for a new business' },
          difficulty: 'hard',
          problem: {
            fa: 'حمید «کافه‌کتاب باران» را راه می‌اندازد. کافه قهوه، کیک و کتاب می‌فروشد؛ یک صندوق و دو حساب بانکی دارد؛ کتاب‌ها را نسیه از چند ناشر می‌خرد؛ دستگاه قهوه و میز و صندلی دارد؛ اجاره 6 ماه را از پیش پرداخته است؛ برخی مشتریان کتاب را پیش‌خرید می‌کنند؛ یک وام بانکی 3 ساله گرفته است؛ دو کارمند دارد و حمید گاهی برای خودش برداشت می‌کند. (الف) یک کدینگ چهاررقمی با دست‌کم 18 حساب طراحی کنید و حساب‌های کاهنده را مشخص کنید. (ب) برای «موجودی نقد» و «حساب‌های پرداختنی» نشان دهید که در کدینگ سه‌سطحی، چه حساب‌های معین و تفصیلی‌ای خواهند داشت.',
            en: 'Hamid is opening Baran Book Café. It sells coffee, cake and books; it has a cash till and two bank accounts; it buys books on credit from several publishers; it owns an espresso machine and tables and chairs; it has prepaid six months’ rent; some customers pre-order books; it has taken a three-year bank loan; it has two employees, and Hamid sometimes withdraws money for himself. (a) Design a four-digit chart of accounts with at least 18 accounts and mark the contra accounts. (b) For “Cash” and “Accounts payable”, show which subsidiary and detail accounts they would have under three-level coding.',
          },
          hint: {
            fa: 'از فعالیت‌ها شروع کنید: هر چیزی که کافه می‌فروشد یک حساب درآمد، هر دارایی ثابت یک حساب استهلاک انباشته و هر نوع بدهی یک حساب جدا می‌خواهد.',
            en: 'Start from the activities: each thing the café sells needs a revenue account, each fixed asset an accumulated depreciation account, and each kind of debt its own account.',
          },
          solution: [
            {
              type: 'table',
              caption: { fa: 'یک کدینگ نمونه برای کافه‌کتاب باران', en: 'A sample chart of accounts for Baran Book Café' },
              head: [
                { fa: 'کد', en: 'Code' },
                { fa: 'عنوان حساب', en: 'Account' },
                { fa: 'طبقه', en: 'Classification' },
              ],
              rows: [
                [{ fa: '1010', en: '1010' }, { fa: 'موجودی نقد', en: 'Cash' }, { fa: 'دارایی جاری', en: 'Current asset' }],
                [{ fa: '1020', en: '1020' }, { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, { fa: 'دارایی جاری', en: 'Current asset' }],
                [{ fa: '1030', en: '1030' }, { fa: 'موجودی کالا: کتاب', en: 'Inventory: books' }, { fa: 'دارایی جاری', en: 'Current asset' }],
                [{ fa: '1040', en: '1040' }, { fa: 'موجودی مواد کافه (قهوه، شیر، کیک)', en: 'Café stock (coffee, milk, cake)' }, { fa: 'دارایی جاری', en: 'Current asset' }],
                [{ fa: '1050', en: '1050' }, { fa: 'پیش‌پرداخت اجاره', en: 'Prepaid rent' }, { fa: 'دارایی جاری', en: 'Current asset' }],
                [{ fa: '1510', en: '1510' }, { fa: 'تجهیزات کافه (دستگاه قهوه)', en: 'Café equipment (espresso machine)' }, { fa: 'دارایی غیرجاری', en: 'Non-current asset' }],
                [{ fa: '1520', en: '1520' }, { fa: 'استهلاک انباشته تجهیزات', en: 'Accumulated depreciation: equipment' }, { fa: 'کاهنده دارایی', en: 'Contra asset' }],
                [{ fa: '1530', en: '1530' }, { fa: 'اثاثه (میز و صندلی)', en: 'Furniture (tables and chairs)' }, { fa: 'دارایی غیرجاری', en: 'Non-current asset' }],
                [{ fa: '1540', en: '1540' }, { fa: 'استهلاک انباشته اثاثه', en: 'Accumulated depreciation: furniture' }, { fa: 'کاهنده دارایی', en: 'Contra asset' }],
                [{ fa: '2010', en: '2010' }, { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, { fa: 'بدهی جاری', en: 'Current liability' }],
                [{ fa: '2020', en: '2020' }, { fa: 'حقوق پرداختنی', en: 'Salaries payable' }, { fa: 'بدهی جاری', en: 'Current liability' }],
                [{ fa: '2030', en: '2030' }, { fa: 'پیش‌دریافت از مشتریان (پیش‌خرید کتاب)', en: 'Customer advances (book pre-orders)' }, { fa: 'بدهی جاری', en: 'Current liability' }],
                [{ fa: '2040', en: '2040' }, { fa: 'حصه جاری وام', en: 'Current portion of loan' }, { fa: 'بدهی جاری', en: 'Current liability' }],
                [{ fa: '2510', en: '2510' }, { fa: 'وام بلندمدت بانکی', en: 'Long-term bank loan' }, { fa: 'بدهی غیرجاری', en: 'Non-current liability' }],
                [{ fa: '3010', en: '3010' }, { fa: 'سرمایه حمید', en: 'Capital (Hamid)' }, { fa: 'حقوق مالکانه', en: 'Equity' }],
                [{ fa: '3020', en: '3020' }, { fa: 'برداشت حمید', en: 'Drawings (Hamid)' }, { fa: 'کاهنده حقوق مالکانه', en: 'Contra equity' }],
                [{ fa: '4010', en: '4010' }, { fa: 'فروش نوشیدنی و کیک', en: 'Sales: drinks and cake' }, { fa: 'درآمد', en: 'Revenue' }],
                [{ fa: '4020', en: '4020' }, { fa: 'فروش کتاب', en: 'Sales: books' }, { fa: 'درآمد', en: 'Revenue' }],
                [{ fa: '5010', en: '5010' }, { fa: 'بهای تمام‌شده کالای فروش‌رفته', en: 'Cost of goods sold' }, { fa: 'هزینه', en: 'Expense' }],
                [{ fa: '5020', en: '5020' }, { fa: 'هزینه حقوق و دستمزد', en: 'Salaries expense' }, { fa: 'هزینه', en: 'Expense' }],
                [{ fa: '5030', en: '5030' }, { fa: 'هزینه اجاره', en: 'Rent expense' }, { fa: 'هزینه', en: 'Expense' }],
                [{ fa: '5040', en: '5040' }, { fa: 'هزینه آب، برق و گاز', en: 'Utilities expense' }, { fa: 'هزینه', en: 'Expense' }],
                [{ fa: '5050', en: '5050' }, { fa: 'هزینه استهلاک', en: 'Depreciation expense' }, { fa: 'هزینه', en: 'Expense' }],
                [{ fa: '5060', en: '5060' }, { fa: 'هزینه بهره', en: 'Interest expense' }, { fa: 'هزینه', en: 'Expense' }],
              ],
            },
            {
              type: 'table',
              caption: { fa: 'دو حساب در سه سطح', en: 'Two accounts at three levels' },
              head: [
                { fa: 'سطح', en: 'Level' },
                { fa: 'موجودی نقد', en: 'Cash' },
                { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' },
              ],
              rows: [
                [{ fa: 'کل', en: 'General' }, { fa: 'موجودی نقد', en: 'Cash' }, { fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }],
                [{ fa: 'معین', en: 'Subsidiary' }, { fa: 'صندوق؛ بانک‌ها', en: 'Cash till; bank accounts' }, { fa: 'ناشران؛ سایر تأمین‌کنندگان', en: 'Publishers; other suppliers' }],
                [
                  { fa: 'تفصیلی', en: 'Detail' },
                  { fa: 'صندوق کافه؛ حساب جاری بانک الف؛ حساب جاری بانک ب', en: 'Café till; current account at Bank A; current account at Bank B' },
                  { fa: 'یک کد برای هر ناشر (ناشر الف، ناشر ب و...)', en: 'One code for each publisher (Publisher A, Publisher B, …)' },
                ],
              ],
            },
            {
              type: 'steps',
              items: [
                {
                  title: { fa: 'چرا دو حساب فروش؟', en: 'Why two sales accounts?' },
                  text: {
                    fa: 'حمید می‌خواهد بداند کافه و کتاب‌فروشی هر کدام چقدر می‌فروشند؛ یک حساب فروش این اطلاعات را پنهان می‌کند.',
                    en: 'Hamid wants to know how much the café and the bookshop each sell; a single sales account would hide that.',
                  },
                },
                {
                  title: { fa: 'چرا پیش‌خرید بدهی است؟', en: 'Why are pre-orders a liability?' },
                  text: {
                    fa: 'کافه پول را گرفته اما هنوز کتاب را تحویل نداده است؛ تا زمان تحویل، به مشتری بدهکار است.',
                    en: 'The café has the money but has not yet delivered the book; until it does, it owes the customer.',
                  },
                },
                {
                  title: { fa: 'چرا حصه جاری وام جداست؟', en: 'Why a separate current portion?' },
                  text: {
                    fa: 'اقساط 12 ماه آینده بدهی جاری‌اند و باید جدا از بخش بلندمدت گزارش شوند.',
                    en: 'Instalments due in the next 12 months are current liabilities and must be reported apart from the long-term part.',
                  },
                },
              ],
            },
            {
              type: 'callout',
              tone: 'tip',
              text: {
                fa: 'طرح‌های دیگری هم درست‌اند. مهم این است که هر حساب نوع روشنی داشته باشد، کدها منطقی و با فاصله باشند و برای هر فعالیت تکرارشونده حسابی وجود داشته باشد.',
                en: 'Other designs can be just as correct. What matters is that every account has a clear type, the codes are logical and spaced out, and every recurring activity has an account.',
              },
            },
          ],
          answer: {
            fa: 'یک کدینگ نمونه با 24 حساب؛ حساب‌های کاهنده: استهلاک انباشته تجهیزات (1520)، استهلاک انباشته اثاثه (1540) و برداشت حمید (3020).',
            en: 'A sample chart with 24 accounts; the contra accounts are Accumulated depreciation: equipment (1520), Accumulated depreciation: furniture (1540) and Drawings (3020).',
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
              fa: 'پنج نوع اصلی حساب عبارت‌اند از: دارایی، بدهی، حقوق مالکانه، درآمد و هزینه؛ پنج پرسش ساده و سرنخ‌های نام حساب برای طبقه‌بندی کمک می‌کنند.',
              en: 'The five account types are assets, liabilities, equity, revenue and expenses; five simple questions and the clues in a name help you classify.',
            },
            {
              fa: 'دارایی‌ها و بدهی‌ها با مرز 12 ماه به جاری و غیرجاری تقسیم می‌شوند؛ اقساط سال آینده یک وام بلندمدت، حصه جاری آن است.',
              en: 'Assets and liabilities are split into current and non-current using a 12-month line; next year’s instalments of a long-term loan are its current portion.',
            },
            {
              fa: 'حساب‌های کاهنده مانند استهلاک انباشته، حساب اصلی را تعدیل می‌کنند و رقم اصلی را هم قابل مشاهده نگه می‌دارند؛ بهای تمام‌شده منهای استهلاک انباشته، ارزش دفتری است.',
              en: 'Contra accounts such as accumulated depreciation offset their parent accounts while keeping the original figure visible; cost less accumulated depreciation is book value.',
            },
            {
              fa: 'حساب‌های دائمی به دوره بعد منتقل می‌شوند و حساب‌های موقت در پایان هر دوره به سرمایه بسته می‌شوند.',
              en: 'Permanent accounts carry forward; temporary accounts are closed into capital at the end of every period.',
            },
            {
              fa: 'کدینگ حساب‌ها فهرست کدگذاری‌شده همه حساب‌هاست؛ در ایران حساب‌ها معمولاً در سطح‌های کل، معین و تفصیلی نگهداری می‌شوند.',
              en: 'The chart of accounts is the numbered list of every account; in Iran, accounts are usually kept at general, subsidiary and detail levels.',
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
              def: { fa: 'سابقه‌ای مستقل از افزایش‌ها، کاهش‌ها و مانده یک قلم مشخص.', en: 'An individual record of the increases, decreases and balance of one specific item.' },
            },
            { term: { fa: 'دفتر کل', en: 'Ledger' }, def: { fa: 'مجموعه همه حساب‌های یک واحد تجاری.', en: 'The complete set of a business’s accounts.' } },
            {
              term: { fa: 'کدینگ حساب‌ها (فهرست حساب‌ها)', en: 'Chart of accounts' },
              def: { fa: 'فهرست کامل و کدگذاری‌شده همه حساب‌هایی که یک واحد تجاری به کار می‌برد.', en: 'The complete, numbered list of every account a business uses.' },
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
              def: { fa: 'دارایی‌ای که بیش از یک سال در فعالیت واحد تجاری به کار می‌رود؛ مانند تجهیزات.', en: 'An asset used in the business for more than a year, such as equipment.' },
            },
            { term: { fa: 'بدهی جاری', en: 'Current liability' }, def: { fa: 'بدهی‌ای که ظرف 12 ماه آینده سررسید می‌شود.', en: 'An obligation due within the next 12 months.' } },
            { term: { fa: 'بدهی غیرجاری', en: 'Non-current liability' }, def: { fa: 'بدهی‌ای که بیش از 12 ماه بعد سررسید می‌شود.', en: 'An obligation due more than 12 months from now.' } },
            {
              term: { fa: 'حصه جاری وام', en: 'Current portion of a loan' },
              def: { fa: 'بخشی از یک وام بلندمدت که ظرف 12 ماه آینده بازپرداخت می‌شود و بدهی جاری است.', en: 'The part of a long-term loan repayable within the next 12 months; a current liability.' },
            },
            {
              term: { fa: 'حساب کاهنده', en: 'Contra account' },
              def: { fa: 'حسابی با مانده خلاف حساب اصلی که مبلغ آن را در صورت‌های مالی کاهش می‌دهد.', en: 'An account with the opposite balance to its parent account, reducing it on the statements.' },
            },
            {
              term: { fa: 'استهلاک انباشته', en: 'Accumulated depreciation' },
              def: { fa: 'جمع استهلاک ثبت‌شده برای یک دارایی تا امروز؛ حساب کاهنده دارایی.', en: 'The total depreciation recorded on an asset to date; a contra-asset account.' },
            },
            {
              term: { fa: 'ارزش دفتری', en: 'Book value' },
              def: { fa: 'بهای تمام‌شده دارایی منهای استهلاک انباشته آن.', en: 'An asset’s cost less its accumulated depreciation.' },
            },
            {
              term: { fa: 'حساب دائمی (واقعی)', en: 'Permanent (real) account' },
              def: { fa: 'حساب دارایی، بدهی یا سرمایه که مانده آن به دوره بعد منتقل می‌شود.', en: 'An asset, liability or capital account whose balance carries forward to the next period.' },
            },
            {
              term: { fa: 'حساب موقت (اسمی)', en: 'Temporary (nominal) account' },
              def: { fa: 'حساب درآمد، هزینه یا برداشت که در پایان دوره بسته می‌شود و از صفر آغاز می‌کند.', en: 'A revenue, expense or drawings account that is closed at period end and starts again from zero.' },
            },
            {
              term: { fa: 'حساب کل', en: 'General account' },
              def: { fa: 'سطحی از کدینگ که در دفتر کل و صورت‌های مالی نشان داده می‌شود؛ مانند موجودی نقد.', en: 'The coding level shown in the general ledger and the statements, such as Cash.' },
            },
            {
              term: { fa: 'حساب معین', en: 'Subsidiary account' },
              def: { fa: 'تفکیک یک حساب کل به اجزای اصلی آن؛ مانند صندوق و بانک‌ها زیر موجودی نقد.', en: 'A breakdown of a general account into its main parts, such as cash till and banks under Cash.' },
            },
            {
              term: { fa: 'حساب تفصیلی', en: 'Detail account' },
              def: { fa: 'ریزترین سطح کدینگ؛ مانند یک حساب بانکی، یک مشتری یا یک پروژه مشخص.', en: 'The finest coding level, such as one bank account, customer or project.' },
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      q: { fa: 'کدام‌یک از حساب‌های زیر حساب موقت است؟', en: 'Which of the following is a temporary account?' },
      options: [
        { fa: 'موجودی نقد', en: 'Cash' },
        { fa: 'وام پرداختنی', en: 'Loan payable' },
        { fa: 'هزینه اجاره', en: 'Rent expense' },
        { fa: 'تجهیزات', en: 'Equipment' },
      ],
      answer: 2,
      explain: {
        fa: 'هزینه اجاره فعالیت یک دوره را اندازه می‌گیرد و در پایان دوره بسته می‌شود. موجودی نقد، وام پرداختنی و تجهیزات حساب‌های دائمی ترازنامه‌ای‌اند و مانده آن‌ها به دوره بعد منتقل می‌شود؛ وام پرداختنی ممکن است چند سال بماند، اما همین ماندگاری آن را دائمی می‌کند.',
        en: 'Rent expense measures one period’s activity and is closed at period end. Cash, Loan payable and Equipment are permanent balance-sheet accounts whose balances carry forward; a loan may last years, which is exactly what makes it permanent.',
      },
    },
    {
      q: { fa: 'بهترین توصیف برای حساب استهلاک انباشته کدام است؟', en: 'Which best describes Accumulated depreciation?' },
      options: [
        { fa: 'حساب کاهنده دارایی که ارزش دفتری تجهیزات را کاهش می‌دهد', en: 'A contra-asset account that reduces the book value of equipment' },
        { fa: 'یک بدهی جاری', en: 'A current liability' },
        { fa: 'یک حساب هزینه', en: 'An expense account' },
        { fa: 'وجه نقدی که برای خرید دارایی جدید کنار گذاشته شده است', en: 'Cash set aside to replace the asset' },
      ],
      answer: 0,
      explain: {
        fa: 'استهلاک انباشته جمع استهلاک ثبت‌شده تا امروز است و در کنار حساب دارایی، از آن کسر می‌شود. این حساب نه بدهی است و نه وجه نقدی را کنار می‌گذارد؛ هزینه هر دوره نیز در حساب جداگانه «هزینه استهلاک» ثبت می‌شود.',
        en: 'Accumulated depreciation is the total depreciation recorded to date and is deducted from the related asset. It is not a liability and sets no cash aside; each period’s charge goes to a separate Depreciation expense account.',
      },
    },
    {
      q: { fa: 'حساب «پیش‌دریافت از مشتریان» از چه نوعی است؟', en: 'What type of account is “Customer advances (unearned revenue)”?' },
      options: [
        { fa: 'دارایی', en: 'Asset' },
        { fa: 'بدهی', en: 'Liability' },
        { fa: 'درآمد', en: 'Revenue' },
        { fa: 'هزینه', en: 'Expense' },
      ],
      answer: 1,
      explain: {
        fa: 'کسب‌وکار پول را گرفته، اما هنوز کالا یا خدمت را تحویل نداده است؛ پس به مشتری بدهکار است و این حساب بدهی است. گزینه «درآمد» وسوسه‌انگیز است، اما درآمد فقط پس از تحویل کسب می‌شود. آن را با «پیش‌پرداخت» اشتباه نگیرید که دارایی است.',
        en: 'The business has the money but has not yet delivered the goods or services, so it owes the customer: a liability. “Revenue” is tempting, but revenue is earned only on delivery. Do not confuse it with a prepayment, which is an asset.',
      },
    },
    {
      q: { fa: 'کدام‌یک از حساب‌های نوا دارایی غیرجاری است؟', en: 'Which of Nova’s accounts is a non-current asset?' },
      options: [
        { fa: 'پیش‌پرداخت بیمه', en: 'Prepaid insurance' },
        { fa: 'ملزومات', en: 'Supplies' },
        { fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' },
        { fa: 'تجهیزات', en: 'Equipment' },
      ],
      answer: 3,
      explain: {
        fa: 'تجهیزات بیش از یک سال در فعالیت نوا به کار گرفته می‌شود. بیمه 12 ماهه، ملزومات و مطالبات از مشتریان همگی ظرف یک سال مصرف یا وصول می‌شوند و بنابراین جاری‌اند؛ اینکه پیش‌پرداخت بیمه «از پیش» پرداخت شده، آن را غیرجاری نمی‌کند.',
        en: 'Equipment will be used in the business for more than a year. The 12-month insurance, supplies and customer receivables are all used up or collected within a year, so they are current; paying insurance in advance does not make it non-current.',
      },
    },
    {
      q: { fa: 'بر اساس کدینگ نوا، حساب «هزینه تبلیغات» در کدام محدوده کد قرار می‌گیرد؟', en: 'Under Nova’s chart of accounts, which code range does “Advertising expense” belong to?' },
      options: [
        { fa: '1xxx', en: '1xxx' },
        { fa: '5xxx', en: '5xxx' },
        { fa: '4xxx', en: '4xxx' },
        { fa: '2xxx', en: '2xxx' },
      ],
      answer: 1,
      explain: {
        fa: 'همه حساب‌های هزینه در محدوده 5xxx قرار می‌گیرند؛ در نوا کد آن 5080 است. محدوده 4xxx برای درآمدهاست و اگر تبلیغات از پیش پرداخت شده بود، «پیش‌پرداخت تبلیغات» دارایی بود و در محدوده 1xxx می‌نشست.',
        en: 'All expense accounts live in the 5xxx range; at Nova it is 5080. The 4xxx range is for revenue, and if advertising had been paid in advance, “Prepaid advertising” would be an asset in the 1xxx range.',
      },
    },
    {
      q: {
        fa: 'در کدینگ سه‌سطحی، «شرکت آلفا» به‌عنوان یکی از مشتریان مشخص زیر حساب‌های دریافتنی، در کدام سطح قرار می‌گیرد؟',
        en: 'In three-level coding, where does “Alpha Co.”, one specific customer under Accounts receivable, belong?',
      },
      options: [
        { fa: 'گروه حساب', en: 'Account group' },
        { fa: 'حساب کل', en: 'General account' },
        { fa: 'حساب تفصیلی', en: 'Detail account' },
        { fa: 'حساب معین', en: 'Subsidiary account' },
      ],
      answer: 2,
      explain: {
        fa: 'یک مشتری مشخص ریزترین سطح است و حساب تفصیلی نام دارد. «حساب‌های دریافتنی» حساب کل است و حساب معین آن را به اجزای اصلی (مثلاً مشتریان داخلی و خارجی) تقسیم می‌کند؛ پس معین هنوز یک گروه از مشتریان است، نه یک مشتری.',
        en: 'A specific customer is the finest level: a detail account. “Accounts receivable” is the general account, and a subsidiary account splits it into main parts (domestic and foreign customers, say); a subsidiary account is still a group of customers, not one customer.',
      },
    },
    {
      q: {
        fa: 'بهای تمام‌شده یک خودرو 60,000 و استهلاک انباشته آن 12,000 است. ارزش دفتری خودرو چقدر است؟',
        en: 'A vehicle cost 60,000 and its accumulated depreciation is 12,000. What is its book value?',
      },
      options: [
        { fa: '48,000', en: '48,000' },
        { fa: '72,000', en: '72,000' },
        { fa: '12,000', en: '12,000' },
        { fa: '60,000', en: '60,000' },
      ],
      answer: 0,
      explain: {
        fa: 'ارزش دفتری = بهای تمام‌شده − استهلاک انباشته = 60,000 − 12,000 = 48,000. گزینه 72,000 حساب کاهنده را به‌اشتباه جمع کرده است؛ حساب کاهنده همیشه از حساب اصلی کم می‌شود.',
        en: 'Book value = Cost − Accumulated depreciation = 60,000 − 12,000 = 48,000. The 72,000 option wrongly adds the contra account; a contra account is always deducted from its parent.',
      },
    },
    {
      q: {
        fa: 'شرکتی در تاریخ ترازنامه 54,000 وام دارد که ماهی 1,500 بازپرداخت می‌شود. چه مبلغی بدهی جاری گزارش می‌شود؟ (بهره را نادیده بگیرید.)',
        en: 'A company owes 54,000 on a loan repayable at 1,500 a month. How much is reported as a current liability? (Ignore interest.)',
      },
      options: [
        { fa: '54,000', en: '54,000' },
        { fa: '18,000', en: '18,000' },
        { fa: '36,000', en: '36,000' },
        { fa: '1,500', en: '1,500' },
      ],
      answer: 1,
      explain: {
        fa: 'اقساط 12 ماه آینده جاری‌اند: 12 × 1,500 = 18,000. مبلغ 36,000 حصه غیرجاری است و 54,000 کل وام. گزینه 1,500 فقط قسط یک ماه است، در حالی که مرز جاری بودن 12 ماه است.',
        en: 'The next 12 instalments are current: 12 × 1,500 = 18,000. The 36,000 is the non-current portion and 54,000 the whole loan. The 1,500 option is a single month’s instalment, but the current line is 12 months.',
      },
    },
    {
      q: {
        fa: 'حساب‌های دریافتنی یک شرکت 40,000 و ذخیره مطالبات مشکوک‌الوصول آن 1,500 است. خالص دریافتنی‌ها در ترازنامه چقدر است؟',
        en: 'A company’s accounts receivable are 40,000 and its allowance for doubtful accounts is 1,500. What net receivable appears on the balance sheet?',
      },
      options: [
        { fa: '41,500', en: '41,500' },
        { fa: '40,000', en: '40,000' },
        { fa: '1,500', en: '1,500' },
        { fa: '38,500', en: '38,500' },
      ],
      answer: 3,
      explain: {
        fa: 'ذخیره مطالبات مشکوک‌الوصول حساب کاهنده دریافتنی‌هاست: 40,000 − 1,500 = 38,500. گزینه 40,000 حساب کاهنده را نادیده گرفته و 41,500 آن را به‌اشتباه افزوده است.',
        en: 'The allowance is a contra account to receivables: 40,000 − 1,500 = 38,500. The 40,000 option ignores the contra account and 41,500 wrongly adds it.',
      },
    },
    {
      q: {
        fa: 'پیش از بستن حساب‌ها، سرمایه 30,000، درآمد 60,000، جمع هزینه‌ها 40,000 و برداشت 5,000 است. مانده سرمایه پس از بستن حساب‌ها چقدر می‌شود؟',
        en: 'Before closing, capital is 30,000, revenue 60,000, total expenses 40,000 and drawings 5,000. What is the capital balance after closing?',
      },
      options: [
        { fa: '50,000', en: '50,000' },
        { fa: '90,000', en: '90,000' },
        { fa: '45,000', en: '45,000' },
        { fa: '25,000', en: '25,000' },
      ],
      answer: 2,
      explain: {
        fa: 'سود خالص 60,000 − 40,000 = 20,000 است و سرمایه پس از بستن 30,000 + 20,000 − 5,000 = 45,000 می‌شود. گزینه 50,000 برداشت را فراموش کرده و 90,000 کل درآمد را، به‌جای سود، به سرمایه افزوده است.',
        en: 'Net income is 60,000 − 40,000 = 20,000, so capital after closing is 30,000 + 20,000 − 5,000 = 45,000. The 50,000 option forgets drawings, and 90,000 adds all of revenue to capital instead of the profit.',
      },
    },
  ],
}
