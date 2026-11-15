import type { Lesson } from '../types'

export const lesson: Lesson = {
  slug: 'accounting-equation',
  number: 2,
  level: 'beginner',
  minutes: 15,
  icon: 'Scale',
  tone: 'asset',
  title: { fa: 'معادله حسابداری', en: 'The Accounting Equation' },
  summary: {
    fa: 'با معادله‌ای آشنا شوید که همه دفاتر حسابداری باید همواره در آن صدق کنند و با کمک آن، معاملات نخستین ماه استودیو طراحی نوا را یکی‌یکی تحلیل کنید.',
    en: 'Discover the one equation every set of books must satisfy, and use it to analyze Nova Design Studio’s first month, transaction by transaction.',
  },
  objectives: [
    {
      fa: 'معادله حسابداری را بیان کنید و هر یک از اجزای آن را توضیح دهید.',
      en: 'State the accounting equation and explain each of its elements.',
    },
    {
      fa: 'توضیح دهید چرا هیچ معامله‌ای توازن معادله را بر هم نمی‌زند.',
      en: 'Explain why no transaction can ever throw the equation out of balance.',
    },
    {
      fa: 'معاملات را بر اساس اثرشان بر دارایی‌ها، بدهی‌ها و حقوق مالکانه تحلیل کنید.',
      en: 'Analyze transactions by their effect on assets, liabilities and equity.',
    },
    {
      fa: 'با معادله گسترده نشان دهید درآمد، هزینه و برداشت چگونه حقوق مالکانه را تغییر می‌دهند.',
      en: 'Use the expanded equation to show how revenue, expenses and drawings change equity.',
    },
  ],
  sections: [
    {
      id: 'the-equation',
      title: { fa: 'معادله‌ای که همه‌چیز بر آن استوار است', en: 'One Equation to Hold It All' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'هر منبعی که در اختیار یک واحد تجاری است، از جایی تأمین شده است: یا کسی آن را به واحد تجاری قرض داده، یا مالکان آن را فراهم کرده‌اند؛ چه مستقیم با سرمایه‌گذاری و چه غیرمستقیم با باقی گذاشتن سود در کسب‌وکار. همین مشاهده ساده، مهم‌ترین رابطه حسابداری را به ما می‌دهد:',
            en: 'Every resource a business controls came from somewhere. Either someone lent it to the business, or the owners supplied it, directly by investing, or indirectly by leaving profits in the business. That simple observation gives us the most important relationship in accounting:',
          },
        },
        {
          type: 'formula',
          text: { fa: 'دارایی‌ها = بدهی‌ها + حقوق مالکانه', en: 'Assets = Liabilities + Equity' },
          note: {
            fa: 'منابعی که در اختیار واحد تجاری است = ادعای طلبکاران + ادعای مالکان',
            en: 'What the business has = what it owes to creditors + what belongs to the owners',
          },
        },
        {
          type: 'diagram',
          id: 'equation',
          caption: {
            fa: 'ببینید چگونه پس از هر معامله، دو طرف معادله دوباره با هم برابر می‌شوند.',
            en: 'Watch how both sides stay equal after every transaction.',
          },
        },
        {
          type: 'p',
          text: {
            fa: 'یک طرف معادله، **منابع** واحد تجاری را نشان می‌دهد و طرف دیگر، **ادعاهای** موجود بر این منابع را؛ یا به بیان دیگر، محل تأمین آن‌ها را. چون هر دو طرف یک مجموعه منابع را از دو زاویه توصیف می‌کنند، همیشه باید با هم برابر باشند.',
            en: 'The left side lists the **resources** of the business; the right side shows the **claims** on those resources, in other words, where the money to acquire them came from. Because both sides describe the same pool of resources from two angles, they must always be equal.',
          },
        },
        {
          type: 'formula',
          text: { fa: 'حقوق مالکانه = دارایی‌ها − بدهی‌ها', en: 'Equity = Assets − Liabilities' },
          note: {
            fa: 'با جابه‌جا کردن اجزا می‌بینیم که حقوق مالکانه یک **ادعای باقی‌مانده** است: سهم مالکان چیزی است که پس از پرداخت طلب طلبکاران باقی می‌ماند.',
            en: 'Rearranged, the equation shows that equity is a **residual claim**: the owners are entitled to whatever is left after creditors are paid.',
          },
        },
        {
          type: 'callout',
          tone: 'example',
          title: { fa: 'نوا در روز 1', en: 'Nova on Day 1' },
          text: {
            fa: 'سارا برای نوا یک حساب بانکی باز می‌کند و 50,000 از پول شخصی‌اش را در آن واریز می‌کند. اکنون نوا 50,000 دارایی (وجه نقد) دارد، هیچ بدهی‌ای ندارد و حقوق مالکانه‌اش 50,000 است. معادله برقرار است: 50,000 = 0 + 50,000.',
            en: 'Sara opens a bank account for Nova and deposits 50,000 of her own money. Nova now has assets of 50,000 (cash), no liabilities and equity of 50,000. The equation holds: 50,000 = 0 + 50,000.',
          },
        },
      ],
    },
    {
      id: 'elements',
      title: { fa: 'سه جزء معادله', en: 'The Three Elements' },
      blocks: [
        { type: 'h', text: { fa: 'دارایی‌ها', en: 'Assets' } },
        {
          type: 'p',
          text: {
            fa: '**دارایی‌ها** منابعی هستند که در نتیجه رویدادهای گذشته در کنترل واحد تجاری قرار گرفته‌اند و انتظار می‌رود منافع اقتصادی آتی برای آن ایجاد کنند. وجه نقد، مطالبات از مشتریان (حساب‌های دریافتنی)، ملزومات، پیش‌پرداخت‌ها، تجهیزات، ساختمان و زمین همگی دارایی‌اند.',
            en: '**Assets** are resources controlled by the business as a result of past events, from which future economic benefits are expected. Cash, amounts owed by customers (accounts receivable), supplies, prepayments, equipment, buildings and land are all assets.',
          },
        },
        { type: 'h', text: { fa: 'بدهی‌ها', en: 'Liabilities' } },
        {
          type: 'p',
          text: {
            fa: '**بدهی‌ها** تعهدات فعلی واحد تجاری به انتقال منابع (معمولاً وجه نقد) به دیگران هستند که از رویدادهای گذشته ناشی شده‌اند. بدهی به تأمین‌کنندگان (حساب‌های پرداختنی)، وام بانکی، دستمزد پرداخت‌نشده و مالیات پرداختنی نمونه‌هایی از بدهی‌اند. اشخاصی که واحد تجاری به آن‌ها بدهی دارد، **طلبکاران** آن هستند.',
            en: '**Liabilities** are present obligations of the business to transfer resources, usually cash, to others as a result of past events. Amounts owed to suppliers (accounts payable), bank loans, unpaid wages and taxes owed are all liabilities. The parties the business owes are its **creditors**.',
          },
        },
        { type: 'h', text: { fa: 'حقوق مالکانه', en: 'Equity' } },
        {
          type: 'p',
          text: {
            fa: '**حقوق مالکانه** منافع باقی‌مانده مالکان در دارایی‌ها پس از کسر همه بدهی‌هاست. در یک مؤسسه انفرادی مانند نوا، **سرمایه‌گذاری** مالک و **درآمد** آن را افزایش می‌دهند و **برداشت** و **هزینه** آن را کاهش می‌دهند.',
            en: '**Equity** is the owners’ residual interest in the assets after deducting all liabilities. In a sole proprietorship like Nova, it is increased by the owner’s **investments** and by **revenue**, and decreased by **drawings** and **expenses**.',
          },
        },
        {
          type: 'compare',
          left: {
            title: { fa: 'بدهی‌ها: ادعای طلبکاران', en: 'Liabilities: creditors’ claims' },
            items: [
              { fa: 'باید بازپرداخت شوند؛ معمولاً تا تاریخ مشخصی', en: 'Must be repaid, usually by a set date' },
              {
                fa: 'اغلب هزینه تأمین مالی، مانند بهره یا سود تسهیلات، دارند',
                en: 'Often carry a financing cost such as interest',
              },
              {
                fa: 'در صورت انحلال واحد تجاری، در اولویت پرداخت قرار دارند',
                en: 'Rank first for repayment if the business is wound up',
              },
              { fa: 'نمونه در نوا: وام بانکی 15,000', en: 'At Nova: the 15,000 bank loan' },
            ],
          },
          right: {
            title: { fa: 'حقوق مالکانه: ادعای مالک', en: 'Equity: the owner’s claim' },
            items: [
              { fa: 'تعهدی برای بازپرداخت آن وجود ندارد', en: 'No obligation to repay' },
              { fa: 'بازده آن از محل سود تأمین می‌شود، نه بهره', en: 'Rewarded through profits, not interest' },
              {
                fa: 'باقی‌مانده است: مالکان پس از طلبکاران سهم می‌برند',
                en: 'Residual: owners receive what remains after creditors',
              },
              { fa: 'نمونه در نوا: سرمایه‌گذاری 50,000 سارا', en: 'At Nova: Sara’s 50,000 investment' },
            ],
          },
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'یک آزمون سریع', en: 'A quick test' },
          text: {
            fa: 'اگر واحد تجاری چیزی را در کنترل دارد و به‌طور معقول از آن انتظار منافع آتی دارد، احتمالاً با یک **دارایی** روبه‌رو هستید. اگر واحد تجاری برای تسویه چیزی ناچار است در آینده منابعی را از دست بدهد، احتمالاً آن یک **بدهی** است.',
            en: 'If the business controls something and can reasonably expect future benefits from it, you are probably looking at an **asset**. If the business will have to give up resources in the future to settle something, it is probably a **liability**.',
          },
        },
      ],
    },
    {
      id: 'dual-effect',
      title: { fa: 'چرا معادله همیشه برقرار است؟', en: 'Why the Equation Always Balances' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'هر معامله **اثری دوگانه** دارد: دست‌کم دو قلم از معادله را تغییر می‌دهد و این کار را به‌گونه‌ای انجام می‌دهد که دو طرف معادله برابر بمانند. این اتفاق تنها به چند شکل ممکن است رخ دهد:',
            en: 'Every transaction has a **dual effect**: it changes at least two items in the equation, and always in a way that keeps the two sides equal. There are only a handful of ways this can happen:',
          },
        },
        {
          type: 'table',
          head: [
            { fa: 'الگو', en: 'Pattern' },
            { fa: 'اثر', en: 'Effect' },
            { fa: 'نمونه', en: 'Example' },
          ],
          rows: [
            [
              { fa: 'افزایش هر دو طرف', en: 'Both sides increase' },
              { fa: 'دارایی ↑ و بدهی یا حقوق مالکانه ↑', en: 'Asset ↑, liability or equity ↑' },
              { fa: 'روز 2: دریافت وام بانکی 15,000', en: 'Day 2: a 15,000 bank loan' },
            ],
            [
              { fa: 'کاهش هر دو طرف', en: 'Both sides decrease' },
              { fa: 'دارایی ↓ و بدهی یا حقوق مالکانه ↓', en: 'Asset ↓, liability or equity ↓' },
              { fa: 'روز 27: پرداخت 1,500 به تأمین‌کننده', en: 'Day 27: paying the supplier 1,500' },
            ],
            [
              { fa: 'جابه‌جایی میان دارایی‌ها', en: 'Asset swap' },
              { fa: 'یک دارایی ↑ و دارایی دیگر ↓', en: 'One asset ↑, another asset ↓' },
              { fa: 'روز 3: خرید نقدی تجهیزات', en: 'Day 3: buying equipment for cash' },
            ],
            [
              { fa: 'جابه‌جایی میان ادعاها', en: 'Claim swap' },
              { fa: 'بدهی ↑ و حقوق مالکانه ↓ (یا برعکس)', en: 'Liability ↑, equity ↓ (or the reverse)' },
              {
                fa: 'دریافت قبض آب و برق که ماه بعد پرداخت می‌شود (در ماه نخست نوا رخ نداده است)',
                en: 'A utility bill to be paid next month (not part of Nova’s first month)',
              },
            ],
          ],
        },
        {
          type: 'diagram',
          id: 'equation-3d',
          caption: {
            fa: 'خودتان امتحان کنید: معاملات را روی ترازو اعمال کنید و ببینید که همیشه دوباره به حالت تعادل برمی‌گردد.',
            en: 'Try it yourself: apply transactions to the balance scale and watch it come back to level every time.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'هر رویدادی معامله نیست', en: 'Not every event is a transaction' },
          text: {
            fa: 'استخدام یک طراح، امضای قرارداد برای ماه آینده یا دریافت پیش‌فاکتور از یک تأمین‌کننده هنوز هیچ تغییری در معادله ایجاد نمی‌کند؛ نه دارایی تغییر کرده، نه بدهی و نه حقوق مالکانه. چنین رویدادهایی تنها زمانی ثبت می‌شوند که واقعاً وضعیت مالی واحد تجاری را تغییر دهند.',
            en: 'Hiring a designer, signing a contract for next month or receiving a quote from a supplier does not change the equation yet, no asset, liability or equity has moved. Such events are recorded only once they actually change the financial position of the business.',
          },
        },
        {
          type: 'callout',
          tone: 'info',
          text: {
            fa: 'برقرار بودن معادله فقط نشان می‌دهد که اثر هر معامله در دو طرف به یک اندازه ثبت شده است؛ نه اینکه حساب‌ها یا مبالغ درست انتخاب شده‌اند. اگر به‌جای 2,500 در هر دو طرف 2,000 ثبت کنید، معادله همچنان برقرار می‌ماند.',
            en: 'A balanced equation proves only that each transaction was recorded with equal effects on both sides, not that the right items or amounts were used. Recording 2,000 instead of 2,500 on both sides would still balance.',
          },
        },
      ],
    },
    {
      id: 'nova-analysis',
      title: { fa: 'تحلیل معاملات نخستین ماه نوا', en: 'Analyzing Nova’s First Month' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'اکنون معادله را برای همه دوازده معامله نخستین ماه استودیو طراحی نوا به کار می‌بریم. برای هر معامله سه پرسش مطرح کنید: کدام اقلام تغییر می‌کنند؟ افزایش می‌یابند یا کاهش؟ به چه مبلغی؟ سپس بررسی کنید که تغییر دارایی‌ها با مجموع تغییر بدهی‌ها و حقوق مالکانه برابر باشد.',
            en: 'Let’s apply the equation to all twelve transactions in Nova Design Studio’s first month. For each one, ask three questions: Which items change? Do they go up or down? By how much? Then check that the change in assets equals the change in liabilities plus the change in equity.',
          },
        },
        {
          type: 'steps',
          items: [
            {
              title: { fa: 'شناسایی اقلام', en: 'Identify the items' },
              text: {
                fa: 'اقلامی را که معامله بر آن‌ها اثر می‌گذارد نام ببرید؛ مثلاً وجه نقد و تجهیزات.',
                en: 'Name the items the transaction affects, for example, Cash and Equipment.',
              },
            },
            {
              title: { fa: 'طبقه‌بندی', en: 'Classify them' },
              text: {
                fa: 'مشخص کنید هر قلم دارایی است، بدهی است یا جزئی از حقوق مالکانه.',
                en: 'Decide whether each one is an asset, a liability or part of equity.',
              },
            },
            {
              title: { fa: 'اندازه‌گیری تغییر', en: 'Measure the change' },
              text: {
                fa: 'جهت تغییر (افزایش یا کاهش) و مبلغ آن را تعیین کنید.',
                en: 'Determine the direction (+ or −) and the amount.',
              },
            },
            {
              title: { fa: 'کنترل توازن', en: 'Check the balance' },
              text: {
                fa: 'اطمینان یابید که تغییر دارایی‌ها با مجموع تغییر بدهی‌ها و تغییر حقوق مالکانه برابر است.',
                en: 'Confirm that Δ Assets = Δ Liabilities + Δ Equity.',
              },
            },
          ],
        },
        {
          type: 'analysis',
          title: {
            fa: 'استودیو طراحی نوا: تحلیل معاملات ماه نخست',
            en: 'Nova Design Studio: transaction analysis, first month',
          },
          rows: [
            {
              tx: {
                fa: 'روز 1: سارا 50,000 وجه نقد در کسب‌وکار سرمایه‌گذاری می‌کند (افزایش وجه نقد و افزایش سرمایه)',
                en: 'Day 1: Sara invests 50,000 cash in the business (Cash +50,000; Capital +50,000)',
              },
              assets: 50000,
              equity: 50000,
            },
            {
              tx: {
                fa: 'روز 2: دریافت وام 15,000 از بانک (افزایش وجه نقد و افزایش وام پرداختنی)',
                en: 'Day 2: Borrows 15,000 from the bank (Cash +15,000; Loan payable +15,000)',
              },
              assets: 15000,
              liabilities: 15000,
            },
            {
              tx: {
                fa: 'روز 3: خرید نقدی تجهیزات به مبلغ 20,000 (افزایش تجهیزات و کاهش وجه نقد؛ جمع دارایی‌ها تغییر نمی‌کند)',
                en: 'Day 3: Buys equipment for 20,000 cash (Equipment +20,000; Cash −20,000; total assets unchanged)',
              },
              assets: 0,
            },
            {
              tx: {
                fa: 'روز 4: خرید نسیه ملزومات به مبلغ 3,000 (افزایش ملزومات و افزایش حساب‌های پرداختنی)',
                en: 'Day 4: Buys supplies on account for 3,000 (Supplies +3,000; Accounts payable +3,000)',
              },
              assets: 3000,
              liabilities: 3000,
            },
            {
              tx: {
                fa: 'روز 5: پرداخت 1,200 بابت بیمه‌نامه 12 ماهه (افزایش پیش‌پرداخت بیمه و کاهش وجه نقد؛ جمع دارایی‌ها تغییر نمی‌کند)',
                en: 'Day 5: Pays 1,200 for a 12-month insurance policy (Prepaid insurance +1,200; Cash −1,200; total assets unchanged)',
              },
              assets: 0,
            },
            {
              tx: {
                fa: 'روز 8: کسب 8,000 درآمد خدمات طراحی به‌صورت نقد (افزایش وجه نقد؛ افزایش حقوق مالکانه از طریق درآمد خدمات)',
                en: 'Day 8: Earns 8,000 from design work, received in cash (Cash +8,000; equity +8,000 through Service revenue)',
              },
              assets: 8000,
              equity: 8000,
            },
            {
              tx: {
                fa: 'روز 12: انجام کاری به مبلغ 4,000 به‌صورت نسیه (افزایش حساب‌های دریافتنی؛ افزایش حقوق مالکانه از طریق درآمد خدمات)',
                en: 'Day 12: Completes a 4,000 job on account (Accounts receivable +4,000; equity +4,000 through Service revenue)',
              },
              assets: 4000,
              equity: 4000,
            },
            {
              tx: {
                fa: 'روز 15: پرداخت 2,500 اجاره (کاهش وجه نقد؛ کاهش حقوق مالکانه از طریق هزینه اجاره)',
                en: 'Day 15: Pays rent of 2,500 (Cash −2,500; equity −2,500 through Rent expense)',
              },
              assets: -2500,
              equity: -2500,
            },
            {
              tx: {
                fa: 'روز 20: پرداخت 3,000 حقوق و دستمزد (کاهش وجه نقد؛ کاهش حقوق مالکانه از طریق هزینه حقوق و دستمزد)',
                en: 'Day 20: Pays salaries of 3,000 (Cash −3,000; equity −3,000 through Salaries expense)',
              },
              assets: -3000,
              equity: -3000,
            },
            {
              tx: {
                fa: 'روز 24: وصول 2,500 از مطالبات مشتریان (افزایش وجه نقد و کاهش حساب‌های دریافتنی؛ جمع دارایی‌ها تغییر نمی‌کند)',
                en: 'Day 24: Collects 2,500 from customers on account (Cash +2,500; Accounts receivable −2,500; total assets unchanged)',
              },
              assets: 0,
            },
            {
              tx: {
                fa: 'روز 27: پرداخت 1,500 به تأمین‌کننده (کاهش وجه نقد و کاهش حساب‌های پرداختنی)',
                en: 'Day 27: Pays the supplier 1,500 (Cash −1,500; Accounts payable −1,500)',
              },
              assets: -1500,
              liabilities: -1500,
            },
            {
              tx: {
                fa: 'روز 30: برداشت 1,000 توسط سارا برای مصارف شخصی (کاهش وجه نقد؛ کاهش حقوق مالکانه از طریق برداشت)',
                en: 'Day 30: Sara withdraws 1,000 for personal use (Cash −1,000; equity −1,000 through Drawings)',
              },
              assets: -1000,
              equity: -1000,
            },
          ],
        },
        {
          type: 'table',
          caption: {
            fa: 'معادله نوا در پایان ماه (پیش از ثبت‌های اصلاحی)',
            en: 'Nova’s equation at month end (before adjusting entries)',
          },
          head: [
            { fa: 'قلم', en: 'Item' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          numericCols: [1],
          rows: [
            [{ fa: 'وجه نقد', en: 'Cash' }, 46300],
            [{ fa: 'حساب‌های دریافتنی', en: 'Accounts receivable' }, 1500],
            [{ fa: 'ملزومات', en: 'Supplies' }, 3000],
            [{ fa: 'پیش‌پرداخت بیمه', en: 'Prepaid insurance' }, 1200],
            [{ fa: 'تجهیزات', en: 'Equipment' }, 20000],
            [{ fa: '**جمع دارایی‌ها**', en: '**Total assets**' }, 72000],
            [{ fa: 'حساب‌های پرداختنی', en: 'Accounts payable' }, 1500],
            [{ fa: 'وام پرداختنی', en: 'Loan payable' }, 15000],
            [{ fa: '**جمع بدهی‌ها**', en: '**Total liabilities**' }, 16500],
            [{ fa: '**حقوق مالکانه**', en: '**Equity**' }, 55500],
            [{ fa: '**جمع بدهی‌ها و حقوق مالکانه**', en: '**Total liabilities and equity**' }, 72000],
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'کار خود را کنترل کنید', en: 'Check your work' },
          text: {
            fa: 'دارایی‌ها 72,000 = بدهی‌ها 16,500 + حقوق مالکانه 55,500. دقت کنید که سه معامله (روزهای 3، 5 و 24) فقط ترکیب دارایی‌ها را تغییر داده‌اند و جمع آن‌ها را دست نزده‌اند؛ نوا در این معاملات صرفاً یک دارایی را با دارایی دیگری مبادله کرده است.',
            en: 'Assets 72,000 = Liabilities 16,500 + Equity 55,500. Notice that three transactions (Days 3, 5 and 24) changed the mix of assets without changing their total, Nova simply swapped one asset for another.',
          },
        },
      ],
    },
    {
      id: 'expanded',
      title: { fa: 'معادله گسترده حسابداری', en: 'The Expanded Equation' },
      blocks: [
        {
          type: 'p',
          text: {
            fa: 'معادله پایه، همه منافع مالک را در یک رقم خلاصه می‌کند. برای اینکه ببینیم حقوق مالکانه در طول ماه **چرا** تغییر کرده است، آن را به اجزای سازنده‌اش تفکیک می‌کنیم:',
            en: 'The basic equation squeezes the owner’s whole interest into a single figure. To see **why** equity changed during the month, we break it into its components:',
          },
        },
        {
          type: 'formula',
          text: {
            fa: 'دارایی‌ها = بدهی‌ها + سرمایه − برداشت + درآمدها − هزینه‌ها',
            en: 'Assets = Liabilities + Capital − Drawings + Revenue − Expenses',
          },
          note: {
            fa: 'درآمدها منهای هزینه‌ها، سود خالص دوره را نشان می‌دهد.',
            en: 'Revenue minus expenses is the net income (profit) for the period.',
          },
        },
        {
          type: 'diagram',
          id: 'expanded-equation',
          caption: {
            fa: 'حقوق مالکانه به چهار جزء باز می‌شود. برداشت، درآمد و هزینه حساب‌هایی موقت‌اند که در پایان هر دوره به حساب سرمایه بسته می‌شوند.',
            en: 'Equity opens up into four components. Drawings, revenue and expenses are temporary accounts that are closed into capital at the end of each period.',
          },
        },
        {
          type: 'list',
          items: [
            {
              fa: '**سرمایه** با سرمایه‌گذاری مالک در کسب‌وکار افزایش می‌یابد.',
              en: '**Capital** increases when the owner invests in the business.',
            },
            {
              fa: '**برداشت** زمانی رخ می‌دهد که مالک دارایی‌ای را برای مصارف شخصی از کسب‌وکار خارج می‌کند و حقوق مالکانه را کاهش می‌دهد. برداشت هزینه نیست، زیرا به کسب درآمد کمکی نمی‌کند.',
              en: '**Drawings** reduce equity when the owner takes assets out for personal use. They are not an expense, because they do nothing to earn revenue.',
            },
            {
              fa: '**درآمد** حقوق مالکانه را افزایش می‌دهد و از ارائه خدمات یا کالا به مشتریان حاصل می‌شود.',
              en: '**Revenue** increases equity; it is earned by delivering services or goods to customers.',
            },
            {
              fa: '**هزینه‌ها** حقوق مالکانه را کاهش می‌دهند و بهای منابعی هستند که برای کسب درآمد مصرف شده‌اند.',
              en: '**Expenses** decrease equity; they are the cost of resources used up in earning revenue.',
            },
          ],
        },
        {
          type: 'table',
          caption: { fa: 'حقوق مالکانه نوا چگونه به 55,500 رسید', en: 'How Nova’s equity reached 55,500' },
          head: [
            { fa: 'جزء', en: 'Component' },
            { fa: 'مبلغ', en: 'Amount' },
          ],
          numericCols: [1],
          rows: [
            [{ fa: 'سرمایه (سرمایه‌گذاری سارا)', en: 'Capital (Sara’s investment)' }, 50000],
            [{ fa: 'به‌علاوه: درآمد خدمات', en: 'Add: Service revenue' }, 12000],
            [{ fa: 'کسر می‌شود: هزینه اجاره', en: 'Less: Rent expense' }, 2500],
            [{ fa: 'کسر می‌شود: هزینه حقوق و دستمزد', en: 'Less: Salaries expense' }, 3000],
            [{ fa: 'کسر می‌شود: برداشت', en: 'Less: Drawings' }, 1000],
            [{ fa: '**حقوق مالکانه در پایان ماه**', en: '**Equity at month end**' }, 55500],
          ],
        },
        {
          type: 'callout',
          tone: 'info',
          title: { fa: 'سود خالص در برابر برداشت', en: 'Net income vs. drawings' },
          text: {
            fa: 'نوا در این ماه **سود خالص 6,500** به دست آورد (درآمد 12,000 منهای هزینه‌های 5,500). سارا 1,000 برداشت کرد؛ بنابراین حقوق مالکانه در طول ماه 5,500 افزایش یافت و از 50,000 سرمایه اولیه به 55,500 رسید.',
            en: 'Nova earned **net income of 6,500** this month (revenue of 12,000 less expenses of 5,500). Sara withdrew 1,000, so equity grew by 5,500 over the month, from the 50,000 she invested to 55,500.',
          },
        },
        {
          type: 'callout',
          tone: 'warning',
          title: { fa: 'درآمد همان وجه نقد نیست', en: 'Revenue is not the same as cash' },
          text: {
            fa: 'نوا 12,000 درآمد ثبت کرد، اما تنها 10,500 وجه نقد از مشتریان دریافت کرد (8,000 + 2,500). به همین ترتیب، هزینه نیز لزوماً با وجه نقد پرداختی در همان دوره برابر نیست.',
            en: 'Nova recorded 12,000 of revenue but collected only 10,500 in cash from customers (8,000 + 2,500). In the same way, an expense is not necessarily the same as the cash paid in that period.',
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
              fa: 'معادله حسابداری، **دارایی‌ها = بدهی‌ها + حقوق مالکانه**، پس از هر معامله برقرار می‌ماند.',
              en: 'The accounting equation, **Assets = Liabilities + Equity**, holds after every transaction.',
            },
            {
              fa: 'هر معامله اثری دوگانه دارد: یا هر دو طرف معادله را به یک اندازه تغییر می‌دهد، یا اقلام یک طرف را با هم جابه‌جا می‌کند.',
              en: 'Every transaction has a dual effect: it either changes both sides by the same amount or swaps items within one side.',
            },
            {
              fa: 'در پایان ماه نخست، نوا 72,000 دارایی، 16,500 بدهی و 55,500 حقوق مالکانه دارد.',
              en: 'At the end of its first month, Nova has assets of 72,000, liabilities of 16,500 and equity of 55,500.',
            },
            {
              fa: 'معادله گسترده نشان می‌دهد سرمایه‌گذاری و درآمد، حقوق مالکانه را افزایش و برداشت و هزینه، آن را کاهش می‌دهند.',
              en: 'The expanded equation shows that investments and revenue increase equity, while drawings and expenses decrease it.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'tip',
          title: { fa: 'در درس بعد', en: 'Coming up next' },
          text: {
            fa: 'به‌جای یک جدول بزرگ، برای هر قلم یک **حساب** جداگانه می‌سازیم و با کدینگ حساب‌ها آشنا می‌شویم.',
            en: 'Instead of one big table, we will give each item its own **account** and organize them in a chart of accounts.',
          },
        },
        {
          type: 'keyTerms',
          terms: [
            {
              term: { fa: 'معادله حسابداری', en: 'Accounting equation' },
              def: {
                fa: 'رابطه دارایی‌ها = بدهی‌ها + حقوق مالکانه که همواره برقرار است.',
                en: 'Assets = Liabilities + Equity, a relationship that always holds.',
              },
            },
            {
              term: { fa: 'دارایی', en: 'Asset' },
              def: {
                fa: 'منبعی که در کنترل واحد تجاری است و انتظار می‌رود منافع اقتصادی آتی ایجاد کند.',
                en: 'A resource controlled by the business that is expected to provide future economic benefits.',
              },
            },
            {
              term: { fa: 'بدهی', en: 'Liability' },
              def: {
                fa: 'تعهد فعلی واحد تجاری به انتقال منابع به دیگران که از رویدادهای گذشته ناشی شده است.',
                en: 'A present obligation of the business, arising from past events, to transfer resources to others.',
              },
            },
            {
              term: { fa: 'حقوق مالکانه (سرمایه)', en: 'Equity' },
              def: {
                fa: 'منافع باقی‌مانده مالکان در دارایی‌ها پس از کسر همه بدهی‌ها.',
                en: 'The owners’ residual interest in the assets after deducting all liabilities.',
              },
            },
            {
              term: { fa: 'اثر دوگانه', en: 'Dual effect' },
              def: {
                fa: 'این ویژگی که هر معامله دست‌کم دو قلم را تغییر می‌دهد و معادله را متوازن نگه می‌دارد.',
                en: 'The fact that every transaction changes at least two items while keeping the equation in balance.',
              },
            },
            {
              term: { fa: 'برداشت', en: 'Drawings' },
              def: {
                fa: 'دارایی‌هایی که مالک برای مصارف شخصی از کسب‌وکار خارج می‌کند؛ حقوق مالکانه را کاهش می‌دهد و هزینه نیست.',
                en: 'Assets the owner takes out of the business for personal use; they reduce equity and are not an expense.',
              },
            },
            {
              term: { fa: 'درآمد', en: 'Revenue' },
              def: {
                fa: 'افزایش حقوق مالکانه ناشی از ارائه کالا یا خدمات به مشتریان.',
                en: 'The increase in equity from delivering goods or services to customers.',
              },
            },
            {
              term: { fa: 'هزینه', en: 'Expense' },
              def: {
                fa: 'کاهش حقوق مالکانه ناشی از مصرف منابع در جریان کسب درآمد.',
                en: 'The decrease in equity from using up resources in the process of earning revenue.',
              },
            },
            {
              term: { fa: 'سود خالص', en: 'Net income' },
              def: {
                fa: 'مازاد درآمدها بر هزینه‌های یک دوره؛ برای نوا در ماه نخست 6,500.',
                en: 'The excess of revenue over expenses for a period, 6,500 for Nova’s first month.',
              },
            },
            {
              term: { fa: 'معادله گسترده', en: 'Expanded equation' },
              def: {
                fa: 'دارایی‌ها = بدهی‌ها + سرمایه − برداشت + درآمدها − هزینه‌ها',
                en: 'Assets = Liabilities + Capital − Drawings + Revenue − Expenses',
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
        fa: 'دارایی‌های یک واحد تجاری 90,000 و بدهی‌های آن 35,000 است. حقوق مالکانه چقدر است؟',
        en: 'A business has assets of 90,000 and liabilities of 35,000. What is its equity?',
      },
      options: [
        { fa: '125,000', en: '125,000' },
        { fa: '55,000', en: '55,000' },
        { fa: '35,000', en: '35,000' },
        { fa: '90,000', en: '90,000' },
      ],
      answer: 1,
      explain: {
        fa: 'حقوق مالکانه = دارایی‌ها − بدهی‌ها = 90,000 − 35,000 = 55,000. حقوق مالکانه همان ادعای باقی‌مانده مالکان پس از کسر بدهی‌هاست.',
        en: 'Equity = Assets − Liabilities = 90,000 − 35,000 = 55,000. Equity is the owners’ residual claim after liabilities are deducted.',
      },
    },
    {
      q: {
        fa: 'نوا در روز 3 تجهیزاتی را به مبلغ 20,000 نقد خرید. اثر این معامله بر معادله چیست؟',
        en: 'On Day 3 Nova bought equipment for 20,000 cash. What is the effect on the equation?',
      },
      options: [
        { fa: 'دارایی‌ها 20,000 افزایش و حقوق مالکانه 20,000 افزایش', en: 'Assets +20,000 and equity +20,000' },
        { fa: 'دارایی‌ها 20,000 کاهش و بدهی‌ها 20,000 کاهش', en: 'Assets −20,000 and liabilities −20,000' },
        { fa: 'دارایی‌ها 20,000 افزایش و بدهی‌ها 20,000 افزایش', en: 'Assets +20,000 and liabilities +20,000' },
        {
          fa: 'جمع دارایی‌ها تغییر نمی‌کند؛ یک دارایی جای دارایی دیگر را می‌گیرد',
          en: 'Total assets are unchanged, one asset replaces another',
        },
      ],
      answer: 3,
      explain: {
        fa: 'تجهیزات 20,000 افزایش و وجه نقد 20,000 کاهش می‌یابد. این یک جابه‌جایی میان دارایی‌هاست و بدهی‌ها و حقوق مالکانه دست نمی‌خورند.',
        en: 'Equipment rises by 20,000 and Cash falls by 20,000. It is an asset swap; liabilities and equity are untouched.',
      },
    },
    {
      q: {
        fa: 'کدام معامله هم دارایی‌ها و هم بدهی‌ها را کاهش می‌دهد؟',
        en: 'Which transaction decreases both assets and liabilities?',
      },
      options: [
        { fa: 'پرداخت 1,500 بدهی به تأمین‌کننده', en: 'Paying a supplier 1,500 that is owed' },
        { fa: 'خرید نسیه ملزومات', en: 'Buying supplies on account' },
        { fa: 'پرداخت اجاره', en: 'Paying rent' },
        { fa: 'وصول طلب از مشتری', en: 'Collecting cash from a customer' },
      ],
      answer: 0,
      explain: {
        fa: 'پرداخت به تأمین‌کننده، وجه نقد (دارایی) و حساب‌های پرداختنی (بدهی) را به یک اندازه کاهش می‌دهد. خرید نسیه هر دو را افزایش می‌دهد، پرداخت اجاره دارایی و حقوق مالکانه را کاهش می‌دهد و وصول طلب فقط دارایی‌ها را جابه‌جا می‌کند.',
        en: 'Paying the supplier reduces Cash (an asset) and Accounts payable (a liability) by the same amount. Buying on account increases both, paying rent reduces assets and equity, and collecting a receivable merely swaps assets.',
      },
    },
    {
      q: {
        fa: 'سارا 1,000 از وجه نقد نوا را برای مصارف شخصی برداشت می‌کند. اثر آن چیست؟',
        en: 'Sara withdraws 1,000 of Nova’s cash for personal use. What is the effect?',
      },
      options: [
        { fa: 'هزینه‌ها افزایش می‌یابند', en: 'Expenses increase' },
        { fa: 'بدهی‌ها افزایش می‌یابند', en: 'Liabilities increase' },
        { fa: 'دارایی‌ها و حقوق مالکانه هر دو 1,000 کاهش می‌یابند', en: 'Assets and equity both decrease by 1,000' },
        { fa: 'اثری بر معادله ندارد', en: 'There is no effect on the equation' },
      ],
      answer: 2,
      explain: {
        fa: 'وجه نقد 1,000 کاهش می‌یابد و حقوق مالکانه از طریق حساب برداشت 1,000 کم می‌شود. برداشت هزینه نیست، چون به کسب درآمد کمکی نمی‌کند.',
        en: 'Cash falls by 1,000 and equity falls by 1,000 through Drawings. Drawings are not an expense because they do not help earn revenue.',
      },
    },
    {
      q: {
        fa: 'نوا در روز 12 کاری به مبلغ 4,000 به‌صورت نسیه انجام داد. اثر آن بر معادله چیست؟',
        en: 'On Day 12 Nova completed a 4,000 job on account. What is the effect on the equation?',
      },
      options: [
        { fa: 'وجه نقد و حقوق مالکانه هر دو 4,000 افزایش', en: 'Cash +4,000 and equity +4,000' },
        {
          fa: 'حساب‌های دریافتنی و حقوق مالکانه هر دو 4,000 افزایش',
          en: 'Accounts receivable +4,000 and equity +4,000',
        },
        {
          fa: 'حساب‌های دریافتنی و بدهی‌ها هر دو 4,000 افزایش',
          en: 'Accounts receivable +4,000 and liabilities +4,000',
        },
        { fa: 'تا زمان دریافت وجه نقد اثری ندارد', en: 'No effect until the cash is collected' },
      ],
      answer: 1,
      explain: {
        fa: 'درآمد هنگام انجام کار کسب شده است، پس حقوق مالکانه از طریق درآمد خدمات افزایش می‌یابد. چون وجه نقد هنوز دریافت نشده، دارایی ایجادشده حساب‌های دریافتنی است.',
        en: 'The revenue is earned when the work is done, so equity rises through Service revenue. Because no cash has been received yet, the asset that increases is Accounts receivable.',
      },
    },
    {
      q: {
        fa: 'در پایان ماه، سرمایه نوا 50,000، درآمد 12,000، هزینه‌ها 5,500 و برداشت 1,000 است. حقوق مالکانه چقدر است؟',
        en: 'At month end Nova has capital of 50,000, revenue of 12,000, expenses of 5,500 and drawings of 1,000. What is total equity?',
      },
      options: [
        { fa: '61,000', en: '61,000' },
        { fa: '56,500', en: '56,500' },
        { fa: '62,000', en: '62,000' },
        { fa: '55,500', en: '55,500' },
      ],
      answer: 3,
      explain: {
        fa: '50,000 − 1,000 + 12,000 − 5,500 = 55,500. گزینه 61,000 هزینه‌ها را نادیده گرفته و گزینه 56,500 برداشت را.',
        en: '50,000 − 1,000 + 12,000 − 5,500 = 55,500. The 61,000 option ignores expenses, and 56,500 ignores drawings.',
      },
    },
  ],
}
